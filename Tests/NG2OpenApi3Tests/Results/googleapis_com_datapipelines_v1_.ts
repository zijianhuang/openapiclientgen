import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** Pipeline job details specific to the Dataflow API. This is encapsulated here to allow for more executors to store their specific details separately. */
	export interface GoogleCloudDatapipelinesV1DataflowJobDetails {

		/** Output only. The current number of workers used to run the jobs. Only set to a value if the job is still running. */
		currentWorkers?: number | null;

		/** Cached version of all the metrics of interest for the job. This value gets stored here when the job is terminated. As long as the job is running, this field is populated from the Dataflow API. */
		resourceInfo?: {[id: string]: number };

		/** The version of the SDK used to run the job. */
		sdkVersion?: GoogleCloudDatapipelinesV1SdkVersion;
	}

	/** Pipeline job details specific to the Dataflow API. This is encapsulated here to allow for more executors to store their specific details separately. */
	export interface GoogleCloudDatapipelinesV1DataflowJobDetailsFormProperties {

		/** Output only. The current number of workers used to run the jobs. Only set to a value if the job is still running. */
		currentWorkers: FormControl<number | null | undefined>,

		/** Cached version of all the metrics of interest for the job. This value gets stored here when the job is terminated. As long as the job is running, this field is populated from the Dataflow API. */
		resourceInfo: FormControl<{[id: string]: number } | null | undefined>,
	}
	export function CreateGoogleCloudDatapipelinesV1DataflowJobDetailsFormGroup() {
		return new FormGroup<GoogleCloudDatapipelinesV1DataflowJobDetailsFormProperties>({
			currentWorkers: new FormControl<number | null | undefined>(undefined),
			resourceInfo: new FormControl<{[id: string]: number } | null | undefined>(undefined),
		});

	}


	/** The version of the SDK used to run the job. */
	export interface GoogleCloudDatapipelinesV1SdkVersion {

		/** The support status for this SDK version. */
		sdkSupportStatus?: GoogleCloudDatapipelinesV1SdkVersionSdkSupportStatus | null;

		/** The version of the SDK used to run the job. */
		version?: string | null;

		/** A readable string describing the version of the SDK. */
		versionDisplayName?: string | null;
	}

	/** The version of the SDK used to run the job. */
	export interface GoogleCloudDatapipelinesV1SdkVersionFormProperties {

		/** The support status for this SDK version. */
		sdkSupportStatus: FormControl<GoogleCloudDatapipelinesV1SdkVersionSdkSupportStatus | null | undefined>,

		/** The version of the SDK used to run the job. */
		version: FormControl<string | null | undefined>,

		/** A readable string describing the version of the SDK. */
		versionDisplayName: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDatapipelinesV1SdkVersionFormGroup() {
		return new FormGroup<GoogleCloudDatapipelinesV1SdkVersionFormProperties>({
			sdkSupportStatus: new FormControl<GoogleCloudDatapipelinesV1SdkVersionSdkSupportStatus | null | undefined>(undefined),
			version: new FormControl<string | null | undefined>(undefined),
			versionDisplayName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum GoogleCloudDatapipelinesV1SdkVersionSdkSupportStatus { UNKNOWN = 0, SUPPORTED = 1, STALE = 2, DEPRECATED = 3, UNSUPPORTED = 4 }


	/** The environment values to be set at runtime for a Flex Template. */
	export interface GoogleCloudDatapipelinesV1FlexTemplateRuntimeEnvironment {

		/** Additional experiment flags for the job. */
		additionalExperiments?: Array<string>;

		/** Additional user labels to be specified for the job. Keys and values must follow the restrictions specified in the [labeling restrictions](https://cloud.google.com/compute/docs/labeling-resources#restrictions). An object containing a list of key/value pairs. Example: `{ "name": "wrench", "mass": "1kg", "count": "3" }`. */
		additionalUserLabels?: {[id: string]: string };

		/** Whether to enable Streaming Engine for the job. */
		enableStreamingEngine?: boolean | null;

		/** Set FlexRS goal for the job. https://cloud.google.com/dataflow/docs/guides/flexrs */
		flexrsGoal?: GoogleCloudDatapipelinesV1FlexTemplateRuntimeEnvironmentFlexrsGoal | null;

		/** Configuration for VM IPs. */
		ipConfiguration?: GoogleCloudDatapipelinesV1FlexTemplateRuntimeEnvironmentIpConfiguration | null;

		/** Name for the Cloud KMS key for the job. Key format is: projects//locations//keyRings//cryptoKeys/ */
		kmsKeyName?: string | null;

		/** The machine type to use for the job. Defaults to the value from the template if not specified. */
		machineType?: string | null;

		/** The maximum number of Compute Engine instances to be made available to your pipeline during execution, from 1 to 1000. */
		maxWorkers?: number | null;

		/** Network to which VMs will be assigned. If empty or unspecified, the service will use the network "default". */
		network?: string | null;

		/** The initial number of Compute Engine instances for the job. */
		numWorkers?: number | null;

		/** The email address of the service account to run the job as. */
		serviceAccountEmail?: string | null;

		/** Subnetwork to which VMs will be assigned, if desired. You can specify a subnetwork using either a complete URL or an abbreviated path. Expected to be of the form "https://www.googleapis.com/compute/v1/projects/HOST_PROJECT_ID/regions/REGION/subnetworks/SUBNETWORK" or "regions/REGION/subnetworks/SUBNETWORK". If the subnetwork is located in a Shared VPC network, you must use the complete URL. */
		subnetwork?: string | null;

		/** The Cloud Storage path to use for temporary files. Must be a valid Cloud Storage URL, beginning with `gs://`. */
		tempLocation?: string | null;

		/** The Compute Engine region (https://cloud.google.com/compute/docs/regions-zones/regions-zones) in which worker processing should occur, e.g. "us-west1". Mutually exclusive with worker_zone. If neither worker_region nor worker_zone is specified, defaults to the control plane region. */
		workerRegion?: string | null;

		/** The Compute Engine zone (https://cloud.google.com/compute/docs/regions-zones/regions-zones) in which worker processing should occur, e.g. "us-west1-a". Mutually exclusive with worker_region. If neither worker_region nor worker_zone is specified, a zone in the control plane region is chosen based on available capacity. If both `worker_zone` and `zone` are set, `worker_zone` takes precedence. */
		workerZone?: string | null;

		/** The Compute Engine [availability zone](https://cloud.google.com/compute/docs/regions-zones/regions-zones) for launching worker instances to run your pipeline. In the future, worker_zone will take precedence. */
		zone?: string | null;
	}

	/** The environment values to be set at runtime for a Flex Template. */
	export interface GoogleCloudDatapipelinesV1FlexTemplateRuntimeEnvironmentFormProperties {

		/** Additional user labels to be specified for the job. Keys and values must follow the restrictions specified in the [labeling restrictions](https://cloud.google.com/compute/docs/labeling-resources#restrictions). An object containing a list of key/value pairs. Example: `{ "name": "wrench", "mass": "1kg", "count": "3" }`. */
		additionalUserLabels: FormControl<{[id: string]: string } | null | undefined>,

		/** Whether to enable Streaming Engine for the job. */
		enableStreamingEngine: FormControl<boolean | null | undefined>,

		/** Set FlexRS goal for the job. https://cloud.google.com/dataflow/docs/guides/flexrs */
		flexrsGoal: FormControl<GoogleCloudDatapipelinesV1FlexTemplateRuntimeEnvironmentFlexrsGoal | null | undefined>,

		/** Configuration for VM IPs. */
		ipConfiguration: FormControl<GoogleCloudDatapipelinesV1FlexTemplateRuntimeEnvironmentIpConfiguration | null | undefined>,

		/** Name for the Cloud KMS key for the job. Key format is: projects//locations//keyRings//cryptoKeys/ */
		kmsKeyName: FormControl<string | null | undefined>,

		/** The machine type to use for the job. Defaults to the value from the template if not specified. */
		machineType: FormControl<string | null | undefined>,

		/** The maximum number of Compute Engine instances to be made available to your pipeline during execution, from 1 to 1000. */
		maxWorkers: FormControl<number | null | undefined>,

		/** Network to which VMs will be assigned. If empty or unspecified, the service will use the network "default". */
		network: FormControl<string | null | undefined>,

		/** The initial number of Compute Engine instances for the job. */
		numWorkers: FormControl<number | null | undefined>,

		/** The email address of the service account to run the job as. */
		serviceAccountEmail: FormControl<string | null | undefined>,

		/** Subnetwork to which VMs will be assigned, if desired. You can specify a subnetwork using either a complete URL or an abbreviated path. Expected to be of the form "https://www.googleapis.com/compute/v1/projects/HOST_PROJECT_ID/regions/REGION/subnetworks/SUBNETWORK" or "regions/REGION/subnetworks/SUBNETWORK". If the subnetwork is located in a Shared VPC network, you must use the complete URL. */
		subnetwork: FormControl<string | null | undefined>,

		/** The Cloud Storage path to use for temporary files. Must be a valid Cloud Storage URL, beginning with `gs://`. */
		tempLocation: FormControl<string | null | undefined>,

		/** The Compute Engine region (https://cloud.google.com/compute/docs/regions-zones/regions-zones) in which worker processing should occur, e.g. "us-west1". Mutually exclusive with worker_zone. If neither worker_region nor worker_zone is specified, defaults to the control plane region. */
		workerRegion: FormControl<string | null | undefined>,

		/** The Compute Engine zone (https://cloud.google.com/compute/docs/regions-zones/regions-zones) in which worker processing should occur, e.g. "us-west1-a". Mutually exclusive with worker_region. If neither worker_region nor worker_zone is specified, a zone in the control plane region is chosen based on available capacity. If both `worker_zone` and `zone` are set, `worker_zone` takes precedence. */
		workerZone: FormControl<string | null | undefined>,

		/** The Compute Engine [availability zone](https://cloud.google.com/compute/docs/regions-zones/regions-zones) for launching worker instances to run your pipeline. In the future, worker_zone will take precedence. */
		zone: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDatapipelinesV1FlexTemplateRuntimeEnvironmentFormGroup() {
		return new FormGroup<GoogleCloudDatapipelinesV1FlexTemplateRuntimeEnvironmentFormProperties>({
			additionalUserLabels: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			enableStreamingEngine: new FormControl<boolean | null | undefined>(undefined),
			flexrsGoal: new FormControl<GoogleCloudDatapipelinesV1FlexTemplateRuntimeEnvironmentFlexrsGoal | null | undefined>(undefined),
			ipConfiguration: new FormControl<GoogleCloudDatapipelinesV1FlexTemplateRuntimeEnvironmentIpConfiguration | null | undefined>(undefined),
			kmsKeyName: new FormControl<string | null | undefined>(undefined),
			machineType: new FormControl<string | null | undefined>(undefined),
			maxWorkers: new FormControl<number | null | undefined>(undefined),
			network: new FormControl<string | null | undefined>(undefined),
			numWorkers: new FormControl<number | null | undefined>(undefined),
			serviceAccountEmail: new FormControl<string | null | undefined>(undefined),
			subnetwork: new FormControl<string | null | undefined>(undefined),
			tempLocation: new FormControl<string | null | undefined>(undefined),
			workerRegion: new FormControl<string | null | undefined>(undefined),
			workerZone: new FormControl<string | null | undefined>(undefined),
			zone: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum GoogleCloudDatapipelinesV1FlexTemplateRuntimeEnvironmentFlexrsGoal { FLEXRS_UNSPECIFIED = 0, FLEXRS_SPEED_OPTIMIZED = 1, FLEXRS_COST_OPTIMIZED = 2 }

	export enum GoogleCloudDatapipelinesV1FlexTemplateRuntimeEnvironmentIpConfiguration { WORKER_IP_UNSPECIFIED = 0, WORKER_IP_PUBLIC = 1, WORKER_IP_PRIVATE = 2 }


	/** Definition of the job information maintained by the pipeline. Fields in this entity are retrieved from the executor API (e.g. Dataflow API). */
	export interface GoogleCloudDatapipelinesV1Job {

		/** Output only. The time of job creation. */
		createTime?: string | null;

		/** Pipeline job details specific to the Dataflow API. This is encapsulated here to allow for more executors to store their specific details separately. */
		dataflowJobDetails?: GoogleCloudDatapipelinesV1DataflowJobDetails;

		/** Output only. The time of job termination. This is absent if the job is still running. */
		endTime?: string | null;

		/** Output only. The internal ID for the job. */
		id?: string | null;

		/** Required. The fully qualified resource name for the job. */
		name?: string | null;

		/** The current state of the job. */
		state?: GoogleCloudDatapipelinesV1JobState | null;

		/** The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors). */
		status?: GoogleRpcStatus;
	}

	/** Definition of the job information maintained by the pipeline. Fields in this entity are retrieved from the executor API (e.g. Dataflow API). */
	export interface GoogleCloudDatapipelinesV1JobFormProperties {

		/** Output only. The time of job creation. */
		createTime: FormControl<string | null | undefined>,

		/** Output only. The time of job termination. This is absent if the job is still running. */
		endTime: FormControl<string | null | undefined>,

		/** Output only. The internal ID for the job. */
		id: FormControl<string | null | undefined>,

		/** Required. The fully qualified resource name for the job. */
		name: FormControl<string | null | undefined>,

		/** The current state of the job. */
		state: FormControl<GoogleCloudDatapipelinesV1JobState | null | undefined>,
	}
	export function CreateGoogleCloudDatapipelinesV1JobFormGroup() {
		return new FormGroup<GoogleCloudDatapipelinesV1JobFormProperties>({
			createTime: new FormControl<string | null | undefined>(undefined),
			endTime: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<GoogleCloudDatapipelinesV1JobState | null | undefined>(undefined),
		});

	}

	export enum GoogleCloudDatapipelinesV1JobState { STATE_UNSPECIFIED = 0, STATE_PENDING = 1, STATE_RUNNING = 2, STATE_DONE = 3, STATE_FAILED = 4, STATE_CANCELLED = 5 }


	/** The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors). */
	export interface GoogleRpcStatus {

		/** The status code, which should be an enum value of google.rpc.Code. */
		code?: number | null;

		/** A list of messages that carry the error details. There is a common set of message types for APIs to use. */
		details?: Array<string>;

		/** A developer-facing error message, which should be in English. Any user-facing error message should be localized and sent in the google.rpc.Status.details field, or localized by the client. */
		message?: string | null;
	}

	/** The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors). */
	export interface GoogleRpcStatusFormProperties {

		/** The status code, which should be an enum value of google.rpc.Code. */
		code: FormControl<number | null | undefined>,

		/** A developer-facing error message, which should be in English. Any user-facing error message should be localized and sent in the google.rpc.Status.details field, or localized by the client. */
		message: FormControl<string | null | undefined>,
	}
	export function CreateGoogleRpcStatusFormGroup() {
		return new FormGroup<GoogleRpcStatusFormProperties>({
			code: new FormControl<number | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Launch Flex Template parameter. */
	export interface GoogleCloudDatapipelinesV1LaunchFlexTemplateParameter {

		/** Cloud Storage path to a file with a JSON-serialized ContainerSpec as content. */
		containerSpecGcsPath?: string | null;

		/** The environment values to be set at runtime for a Flex Template. */
		environment?: GoogleCloudDatapipelinesV1FlexTemplateRuntimeEnvironment;

		/** Required. The job name to use for the created job. For an update job request, the job name should be the same as the existing running job. */
		jobName?: string | null;

		/** Launch options for this Flex Template job. This is a common set of options across languages and templates. This should not be used to pass job parameters. */
		launchOptions?: {[id: string]: string };

		/** The parameters for the Flex Template. Example: `{"num_workers":"5"}` */
		parameters?: {[id: string]: string };

		/** Use this to pass transform name mappings for streaming update jobs. Example: `{"oldTransformName":"newTransformName",...}` */
		transformNameMappings?: {[id: string]: string };

		/** Set this to true if you are sending a request to update a running streaming job. When set, the job name should be the same as the running job. */
		update?: boolean | null;
	}

	/** Launch Flex Template parameter. */
	export interface GoogleCloudDatapipelinesV1LaunchFlexTemplateParameterFormProperties {

		/** Cloud Storage path to a file with a JSON-serialized ContainerSpec as content. */
		containerSpecGcsPath: FormControl<string | null | undefined>,

		/** Required. The job name to use for the created job. For an update job request, the job name should be the same as the existing running job. */
		jobName: FormControl<string | null | undefined>,

		/** Launch options for this Flex Template job. This is a common set of options across languages and templates. This should not be used to pass job parameters. */
		launchOptions: FormControl<{[id: string]: string } | null | undefined>,

		/** The parameters for the Flex Template. Example: `{"num_workers":"5"}` */
		parameters: FormControl<{[id: string]: string } | null | undefined>,

		/** Use this to pass transform name mappings for streaming update jobs. Example: `{"oldTransformName":"newTransformName",...}` */
		transformNameMappings: FormControl<{[id: string]: string } | null | undefined>,

		/** Set this to true if you are sending a request to update a running streaming job. When set, the job name should be the same as the running job. */
		update: FormControl<boolean | null | undefined>,
	}
	export function CreateGoogleCloudDatapipelinesV1LaunchFlexTemplateParameterFormGroup() {
		return new FormGroup<GoogleCloudDatapipelinesV1LaunchFlexTemplateParameterFormProperties>({
			containerSpecGcsPath: new FormControl<string | null | undefined>(undefined),
			jobName: new FormControl<string | null | undefined>(undefined),
			launchOptions: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			parameters: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			transformNameMappings: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			update: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** A request to launch a Dataflow job from a Flex Template. */
	export interface GoogleCloudDatapipelinesV1LaunchFlexTemplateRequest {

		/** Launch Flex Template parameter. */
		launchParameter?: GoogleCloudDatapipelinesV1LaunchFlexTemplateParameter;

		/** Required. The [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints) to which to direct the request. For example, `us-central1`, `us-west1`. */
		location?: string | null;

		/** Required. The ID of the Cloud Platform project that the job belongs to. */
		projectId?: string | null;

		/** If true, the request is validated but not actually executed. Defaults to false. */
		validateOnly?: boolean | null;
	}

	/** A request to launch a Dataflow job from a Flex Template. */
	export interface GoogleCloudDatapipelinesV1LaunchFlexTemplateRequestFormProperties {

		/** Required. The [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints) to which to direct the request. For example, `us-central1`, `us-west1`. */
		location: FormControl<string | null | undefined>,

		/** Required. The ID of the Cloud Platform project that the job belongs to. */
		projectId: FormControl<string | null | undefined>,

		/** If true, the request is validated but not actually executed. Defaults to false. */
		validateOnly: FormControl<boolean | null | undefined>,
	}
	export function CreateGoogleCloudDatapipelinesV1LaunchFlexTemplateRequestFormGroup() {
		return new FormGroup<GoogleCloudDatapipelinesV1LaunchFlexTemplateRequestFormProperties>({
			location: new FormControl<string | null | undefined>(undefined),
			projectId: new FormControl<string | null | undefined>(undefined),
			validateOnly: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Parameters to provide to the template being launched. */
	export interface GoogleCloudDatapipelinesV1LaunchTemplateParameters {

		/** The environment values to set at runtime. */
		environment?: GoogleCloudDatapipelinesV1RuntimeEnvironment;

		/** Required. The job name to use for the created job. */
		jobName?: string | null;

		/** The runtime parameters to pass to the job. */
		parameters?: {[id: string]: string };

		/** Map of transform name prefixes of the job to be replaced to the corresponding name prefixes of the new job. Only applicable when updating a pipeline. */
		transformNameMapping?: {[id: string]: string };

		/** If set, replace the existing pipeline with the name specified by jobName with this pipeline, preserving state. */
		update?: boolean | null;
	}

	/** Parameters to provide to the template being launched. */
	export interface GoogleCloudDatapipelinesV1LaunchTemplateParametersFormProperties {

		/** Required. The job name to use for the created job. */
		jobName: FormControl<string | null | undefined>,

		/** The runtime parameters to pass to the job. */
		parameters: FormControl<{[id: string]: string } | null | undefined>,

		/** Map of transform name prefixes of the job to be replaced to the corresponding name prefixes of the new job. Only applicable when updating a pipeline. */
		transformNameMapping: FormControl<{[id: string]: string } | null | undefined>,

		/** If set, replace the existing pipeline with the name specified by jobName with this pipeline, preserving state. */
		update: FormControl<boolean | null | undefined>,
	}
	export function CreateGoogleCloudDatapipelinesV1LaunchTemplateParametersFormGroup() {
		return new FormGroup<GoogleCloudDatapipelinesV1LaunchTemplateParametersFormProperties>({
			jobName: new FormControl<string | null | undefined>(undefined),
			parameters: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			transformNameMapping: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			update: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** The environment values to set at runtime. */
	export interface GoogleCloudDatapipelinesV1RuntimeEnvironment {

		/** Additional experiment flags for the job. */
		additionalExperiments?: Array<string>;

		/** Additional user labels to be specified for the job. Keys and values should follow the restrictions specified in the [labeling restrictions](https://cloud.google.com/compute/docs/labeling-resources#restrictions) page. An object containing a list of key/value pairs. Example: { "name": "wrench", "mass": "1kg", "count": "3" }. */
		additionalUserLabels?: {[id: string]: string };

		/** Whether to bypass the safety checks for the job's temporary directory. Use with caution. */
		bypassTempDirValidation?: boolean | null;

		/** Whether to enable Streaming Engine for the job. */
		enableStreamingEngine?: boolean | null;

		/** Configuration for VM IPs. */
		ipConfiguration?: GoogleCloudDatapipelinesV1FlexTemplateRuntimeEnvironmentIpConfiguration | null;

		/** Name for the Cloud KMS key for the job. The key format is: projects//locations//keyRings//cryptoKeys/ */
		kmsKeyName?: string | null;

		/** The machine type to use for the job. Defaults to the value from the template if not specified. */
		machineType?: string | null;

		/** The maximum number of Compute Engine instances to be made available to your pipeline during execution, from 1 to 1000. */
		maxWorkers?: number | null;

		/** Network to which VMs will be assigned. If empty or unspecified, the service will use the network "default". */
		network?: string | null;

		/** The initial number of Compute Engine instances for the job. */
		numWorkers?: number | null;

		/** The email address of the service account to run the job as. */
		serviceAccountEmail?: string | null;

		/** Subnetwork to which VMs will be assigned, if desired. You can specify a subnetwork using either a complete URL or an abbreviated path. Expected to be of the form "https://www.googleapis.com/compute/v1/projects/HOST_PROJECT_ID/regions/REGION/subnetworks/SUBNETWORK" or "regions/REGION/subnetworks/SUBNETWORK". If the subnetwork is located in a Shared VPC network, you must use the complete URL. */
		subnetwork?: string | null;

		/** The Cloud Storage path to use for temporary files. Must be a valid Cloud Storage URL, beginning with `gs://`. */
		tempLocation?: string | null;

		/** The Compute Engine region (https://cloud.google.com/compute/docs/regions-zones/regions-zones) in which worker processing should occur, e.g. "us-west1". Mutually exclusive with worker_zone. If neither worker_region nor worker_zone is specified, default to the control plane's region. */
		workerRegion?: string | null;

		/** The Compute Engine zone (https://cloud.google.com/compute/docs/regions-zones/regions-zones) in which worker processing should occur, e.g. "us-west1-a". Mutually exclusive with worker_region. If neither worker_region nor worker_zone is specified, a zone in the control plane's region is chosen based on available capacity. If both `worker_zone` and `zone` are set, `worker_zone` takes precedence. */
		workerZone?: string | null;

		/** The Compute Engine [availability zone](https://cloud.google.com/compute/docs/regions-zones/regions-zones) for launching worker instances to run your pipeline. In the future, worker_zone will take precedence. */
		zone?: string | null;
	}

	/** The environment values to set at runtime. */
	export interface GoogleCloudDatapipelinesV1RuntimeEnvironmentFormProperties {

		/** Additional user labels to be specified for the job. Keys and values should follow the restrictions specified in the [labeling restrictions](https://cloud.google.com/compute/docs/labeling-resources#restrictions) page. An object containing a list of key/value pairs. Example: { "name": "wrench", "mass": "1kg", "count": "3" }. */
		additionalUserLabels: FormControl<{[id: string]: string } | null | undefined>,

		/** Whether to bypass the safety checks for the job's temporary directory. Use with caution. */
		bypassTempDirValidation: FormControl<boolean | null | undefined>,

		/** Whether to enable Streaming Engine for the job. */
		enableStreamingEngine: FormControl<boolean | null | undefined>,

		/** Configuration for VM IPs. */
		ipConfiguration: FormControl<GoogleCloudDatapipelinesV1FlexTemplateRuntimeEnvironmentIpConfiguration | null | undefined>,

		/** Name for the Cloud KMS key for the job. The key format is: projects//locations//keyRings//cryptoKeys/ */
		kmsKeyName: FormControl<string | null | undefined>,

		/** The machine type to use for the job. Defaults to the value from the template if not specified. */
		machineType: FormControl<string | null | undefined>,

		/** The maximum number of Compute Engine instances to be made available to your pipeline during execution, from 1 to 1000. */
		maxWorkers: FormControl<number | null | undefined>,

		/** Network to which VMs will be assigned. If empty or unspecified, the service will use the network "default". */
		network: FormControl<string | null | undefined>,

		/** The initial number of Compute Engine instances for the job. */
		numWorkers: FormControl<number | null | undefined>,

		/** The email address of the service account to run the job as. */
		serviceAccountEmail: FormControl<string | null | undefined>,

		/** Subnetwork to which VMs will be assigned, if desired. You can specify a subnetwork using either a complete URL or an abbreviated path. Expected to be of the form "https://www.googleapis.com/compute/v1/projects/HOST_PROJECT_ID/regions/REGION/subnetworks/SUBNETWORK" or "regions/REGION/subnetworks/SUBNETWORK". If the subnetwork is located in a Shared VPC network, you must use the complete URL. */
		subnetwork: FormControl<string | null | undefined>,

		/** The Cloud Storage path to use for temporary files. Must be a valid Cloud Storage URL, beginning with `gs://`. */
		tempLocation: FormControl<string | null | undefined>,

		/** The Compute Engine region (https://cloud.google.com/compute/docs/regions-zones/regions-zones) in which worker processing should occur, e.g. "us-west1". Mutually exclusive with worker_zone. If neither worker_region nor worker_zone is specified, default to the control plane's region. */
		workerRegion: FormControl<string | null | undefined>,

		/** The Compute Engine zone (https://cloud.google.com/compute/docs/regions-zones/regions-zones) in which worker processing should occur, e.g. "us-west1-a". Mutually exclusive with worker_region. If neither worker_region nor worker_zone is specified, a zone in the control plane's region is chosen based on available capacity. If both `worker_zone` and `zone` are set, `worker_zone` takes precedence. */
		workerZone: FormControl<string | null | undefined>,

		/** The Compute Engine [availability zone](https://cloud.google.com/compute/docs/regions-zones/regions-zones) for launching worker instances to run your pipeline. In the future, worker_zone will take precedence. */
		zone: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDatapipelinesV1RuntimeEnvironmentFormGroup() {
		return new FormGroup<GoogleCloudDatapipelinesV1RuntimeEnvironmentFormProperties>({
			additionalUserLabels: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			bypassTempDirValidation: new FormControl<boolean | null | undefined>(undefined),
			enableStreamingEngine: new FormControl<boolean | null | undefined>(undefined),
			ipConfiguration: new FormControl<GoogleCloudDatapipelinesV1FlexTemplateRuntimeEnvironmentIpConfiguration | null | undefined>(undefined),
			kmsKeyName: new FormControl<string | null | undefined>(undefined),
			machineType: new FormControl<string | null | undefined>(undefined),
			maxWorkers: new FormControl<number | null | undefined>(undefined),
			network: new FormControl<string | null | undefined>(undefined),
			numWorkers: new FormControl<number | null | undefined>(undefined),
			serviceAccountEmail: new FormControl<string | null | undefined>(undefined),
			subnetwork: new FormControl<string | null | undefined>(undefined),
			tempLocation: new FormControl<string | null | undefined>(undefined),
			workerRegion: new FormControl<string | null | undefined>(undefined),
			workerZone: new FormControl<string | null | undefined>(undefined),
			zone: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A request to launch a template. */
	export interface GoogleCloudDatapipelinesV1LaunchTemplateRequest {

		/** A Cloud Storage path to the template from which to create the job. Must be a valid Cloud Storage URL, beginning with 'gs://'. */
		gcsPath?: string | null;

		/** Parameters to provide to the template being launched. */
		launchParameters?: GoogleCloudDatapipelinesV1LaunchTemplateParameters;

		/** The [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints) to which to direct the request. */
		location?: string | null;

		/** Required. The ID of the Cloud Platform project that the job belongs to. */
		projectId?: string | null;

		/** If true, the request is validated but not actually executed. Defaults to false. */
		validateOnly?: boolean | null;
	}

	/** A request to launch a template. */
	export interface GoogleCloudDatapipelinesV1LaunchTemplateRequestFormProperties {

		/** A Cloud Storage path to the template from which to create the job. Must be a valid Cloud Storage URL, beginning with 'gs://'. */
		gcsPath: FormControl<string | null | undefined>,

		/** The [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints) to which to direct the request. */
		location: FormControl<string | null | undefined>,

		/** Required. The ID of the Cloud Platform project that the job belongs to. */
		projectId: FormControl<string | null | undefined>,

		/** If true, the request is validated but not actually executed. Defaults to false. */
		validateOnly: FormControl<boolean | null | undefined>,
	}
	export function CreateGoogleCloudDatapipelinesV1LaunchTemplateRequestFormGroup() {
		return new FormGroup<GoogleCloudDatapipelinesV1LaunchTemplateRequestFormProperties>({
			gcsPath: new FormControl<string | null | undefined>(undefined),
			location: new FormControl<string | null | undefined>(undefined),
			projectId: new FormControl<string | null | undefined>(undefined),
			validateOnly: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Response message for ListJobs */
	export interface GoogleCloudDatapipelinesV1ListJobsResponse {

		/** Results that were accessible to the caller. Results are always in descending order of job creation date. */
		jobs?: Array<GoogleCloudDatapipelinesV1Job>;

		/** A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
		nextPageToken?: string | null;
	}

	/** Response message for ListJobs */
	export interface GoogleCloudDatapipelinesV1ListJobsResponseFormProperties {

		/** A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDatapipelinesV1ListJobsResponseFormGroup() {
		return new FormGroup<GoogleCloudDatapipelinesV1ListJobsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response message for ListPipelines. */
	export interface GoogleCloudDatapipelinesV1ListPipelinesResponse {

		/** A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
		nextPageToken?: string | null;

		/** Results that matched the filter criteria and were accessible to the caller. Results are always in descending order of pipeline creation date. */
		pipelines?: Array<GoogleCloudDatapipelinesV1Pipeline>;
	}

	/** Response message for ListPipelines. */
	export interface GoogleCloudDatapipelinesV1ListPipelinesResponseFormProperties {

		/** A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDatapipelinesV1ListPipelinesResponseFormGroup() {
		return new FormGroup<GoogleCloudDatapipelinesV1ListPipelinesResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The main pipeline entity and all the necessary metadata for launching and managing linked jobs. */
	export interface GoogleCloudDatapipelinesV1Pipeline {

		/** Output only. Immutable. The timestamp when the pipeline was initially created. Set by the Data Pipelines service. */
		createTime?: string | null;

		/** Required. The display name of the pipeline. It can contain only letters ([A-Za-z]), numbers ([0-9]), hyphens (-), and underscores (_). */
		displayName?: string | null;

		/** Output only. Number of jobs. */
		jobCount?: number | null;

		/** Output only. Immutable. The timestamp when the pipeline was last modified. Set by the Data Pipelines service. */
		lastUpdateTime?: string | null;

		/** The pipeline name. For example: `projects/PROJECT_ID/locations/LOCATION_ID/pipelines/PIPELINE_ID`. * `PROJECT_ID` can contain letters ([A-Za-z]), numbers ([0-9]), hyphens (-), colons (:), and periods (.). For more information, see [Identifying projects](https://cloud.google.com/resource-manager/docs/creating-managing-projects#identifying_projects). * `LOCATION_ID` is the canonical ID for the pipeline's location. The list of available locations can be obtained by calling `google.cloud.location.Locations.ListLocations`. Note that the Data Pipelines service is not available in all regions. It depends on Cloud Scheduler, an App Engine application, so it's only available in [App Engine regions](https://cloud.google.com/about/locations#region). * `PIPELINE_ID` is the ID of the pipeline. Must be unique for the selected project and location. */
		name?: string | null;

		/** Immutable. The sources of the pipeline (for example, Dataplex). The keys and values are set by the corresponding sources during pipeline creation. */
		pipelineSources?: {[id: string]: string };

		/** Details of the schedule the pipeline runs on. */
		scheduleInfo?: GoogleCloudDatapipelinesV1ScheduleSpec;

		/** Optional. A service account email to be used with the Cloud Scheduler job. If not specified, the default compute engine service account will be used. */
		schedulerServiceAccountEmail?: string | null;

		/** Required. The state of the pipeline. When the pipeline is created, the state is set to 'PIPELINE_STATE_ACTIVE' by default. State changes can be requested by setting the state to stopping, paused, or resuming. State cannot be changed through UpdatePipeline requests. */
		state?: GoogleCloudDatapipelinesV1PipelineState | null;

		/** Required. The type of the pipeline. This field affects the scheduling of the pipeline and the type of metrics to show for the pipeline. */
		type?: GoogleCloudDatapipelinesV1PipelineType | null;

		/** Workload details for creating the pipeline jobs. */
		workload?: GoogleCloudDatapipelinesV1Workload;
	}

	/** The main pipeline entity and all the necessary metadata for launching and managing linked jobs. */
	export interface GoogleCloudDatapipelinesV1PipelineFormProperties {

		/** Output only. Immutable. The timestamp when the pipeline was initially created. Set by the Data Pipelines service. */
		createTime: FormControl<string | null | undefined>,

		/** Required. The display name of the pipeline. It can contain only letters ([A-Za-z]), numbers ([0-9]), hyphens (-), and underscores (_). */
		displayName: FormControl<string | null | undefined>,

		/** Output only. Number of jobs. */
		jobCount: FormControl<number | null | undefined>,

		/** Output only. Immutable. The timestamp when the pipeline was last modified. Set by the Data Pipelines service. */
		lastUpdateTime: FormControl<string | null | undefined>,

		/** The pipeline name. For example: `projects/PROJECT_ID/locations/LOCATION_ID/pipelines/PIPELINE_ID`. * `PROJECT_ID` can contain letters ([A-Za-z]), numbers ([0-9]), hyphens (-), colons (:), and periods (.). For more information, see [Identifying projects](https://cloud.google.com/resource-manager/docs/creating-managing-projects#identifying_projects). * `LOCATION_ID` is the canonical ID for the pipeline's location. The list of available locations can be obtained by calling `google.cloud.location.Locations.ListLocations`. Note that the Data Pipelines service is not available in all regions. It depends on Cloud Scheduler, an App Engine application, so it's only available in [App Engine regions](https://cloud.google.com/about/locations#region). * `PIPELINE_ID` is the ID of the pipeline. Must be unique for the selected project and location. */
		name: FormControl<string | null | undefined>,

		/** Immutable. The sources of the pipeline (for example, Dataplex). The keys and values are set by the corresponding sources during pipeline creation. */
		pipelineSources: FormControl<{[id: string]: string } | null | undefined>,

		/** Optional. A service account email to be used with the Cloud Scheduler job. If not specified, the default compute engine service account will be used. */
		schedulerServiceAccountEmail: FormControl<string | null | undefined>,

		/** Required. The state of the pipeline. When the pipeline is created, the state is set to 'PIPELINE_STATE_ACTIVE' by default. State changes can be requested by setting the state to stopping, paused, or resuming. State cannot be changed through UpdatePipeline requests. */
		state: FormControl<GoogleCloudDatapipelinesV1PipelineState | null | undefined>,

		/** Required. The type of the pipeline. This field affects the scheduling of the pipeline and the type of metrics to show for the pipeline. */
		type: FormControl<GoogleCloudDatapipelinesV1PipelineType | null | undefined>,
	}
	export function CreateGoogleCloudDatapipelinesV1PipelineFormGroup() {
		return new FormGroup<GoogleCloudDatapipelinesV1PipelineFormProperties>({
			createTime: new FormControl<string | null | undefined>(undefined),
			displayName: new FormControl<string | null | undefined>(undefined),
			jobCount: new FormControl<number | null | undefined>(undefined),
			lastUpdateTime: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			pipelineSources: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			schedulerServiceAccountEmail: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<GoogleCloudDatapipelinesV1PipelineState | null | undefined>(undefined),
			type: new FormControl<GoogleCloudDatapipelinesV1PipelineType | null | undefined>(undefined),
		});

	}


	/** Details of the schedule the pipeline runs on. */
	export interface GoogleCloudDatapipelinesV1ScheduleSpec {

		/** Output only. When the next Scheduler job is going to run. */
		nextJobTime?: string | null;

		/** Unix-cron format of the schedule. This information is retrieved from the linked Cloud Scheduler. */
		schedule?: string | null;

		/** Timezone ID. This matches the timezone IDs used by the Cloud Scheduler API. If empty, UTC time is assumed. */
		timeZone?: string | null;
	}

	/** Details of the schedule the pipeline runs on. */
	export interface GoogleCloudDatapipelinesV1ScheduleSpecFormProperties {

		/** Output only. When the next Scheduler job is going to run. */
		nextJobTime: FormControl<string | null | undefined>,

		/** Unix-cron format of the schedule. This information is retrieved from the linked Cloud Scheduler. */
		schedule: FormControl<string | null | undefined>,

		/** Timezone ID. This matches the timezone IDs used by the Cloud Scheduler API. If empty, UTC time is assumed. */
		timeZone: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDatapipelinesV1ScheduleSpecFormGroup() {
		return new FormGroup<GoogleCloudDatapipelinesV1ScheduleSpecFormProperties>({
			nextJobTime: new FormControl<string | null | undefined>(undefined),
			schedule: new FormControl<string | null | undefined>(undefined),
			timeZone: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum GoogleCloudDatapipelinesV1PipelineState { STATE_UNSPECIFIED = 0, STATE_RESUMING = 1, STATE_ACTIVE = 2, STATE_STOPPING = 3, STATE_ARCHIVED = 4, STATE_PAUSED = 5 }

	export enum GoogleCloudDatapipelinesV1PipelineType { PIPELINE_TYPE_UNSPECIFIED = 0, PIPELINE_TYPE_BATCH = 1, PIPELINE_TYPE_STREAMING = 2 }


	/** Workload details for creating the pipeline jobs. */
	export interface GoogleCloudDatapipelinesV1Workload {

		/** A request to launch a Dataflow job from a Flex Template. */
		dataflowFlexTemplateRequest?: GoogleCloudDatapipelinesV1LaunchFlexTemplateRequest;

		/** A request to launch a template. */
		dataflowLaunchTemplateRequest?: GoogleCloudDatapipelinesV1LaunchTemplateRequest;
	}

	/** Workload details for creating the pipeline jobs. */
	export interface GoogleCloudDatapipelinesV1WorkloadFormProperties {
	}
	export function CreateGoogleCloudDatapipelinesV1WorkloadFormGroup() {
		return new FormGroup<GoogleCloudDatapipelinesV1WorkloadFormProperties>({
		});

	}


	/** Request message for RunPipeline */
	export interface GoogleCloudDatapipelinesV1RunPipelineRequest {
	}

	/** Request message for RunPipeline */
	export interface GoogleCloudDatapipelinesV1RunPipelineRequestFormProperties {
	}
	export function CreateGoogleCloudDatapipelinesV1RunPipelineRequestFormGroup() {
		return new FormGroup<GoogleCloudDatapipelinesV1RunPipelineRequestFormProperties>({
		});

	}


	/** Response message for RunPipeline */
	export interface GoogleCloudDatapipelinesV1RunPipelineResponse {

		/** Definition of the job information maintained by the pipeline. Fields in this entity are retrieved from the executor API (e.g. Dataflow API). */
		job?: GoogleCloudDatapipelinesV1Job;
	}

	/** Response message for RunPipeline */
	export interface GoogleCloudDatapipelinesV1RunPipelineResponseFormProperties {
	}
	export function CreateGoogleCloudDatapipelinesV1RunPipelineResponseFormGroup() {
		return new FormGroup<GoogleCloudDatapipelinesV1RunPipelineResponseFormProperties>({
		});

	}


	/** Request message for StopPipeline. */
	export interface GoogleCloudDatapipelinesV1StopPipelineRequest {
	}

	/** Request message for StopPipeline. */
	export interface GoogleCloudDatapipelinesV1StopPipelineRequestFormProperties {
	}
	export function CreateGoogleCloudDatapipelinesV1StopPipelineRequestFormGroup() {
		return new FormGroup<GoogleCloudDatapipelinesV1StopPipelineRequestFormProperties>({
		});

	}


	/** A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); } */
	export interface GoogleProtobufEmpty {
	}

	/** A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); } */
	export interface GoogleProtobufEmptyFormProperties {
	}
	export function CreateGoogleProtobufEmptyFormGroup() {
		return new FormGroup<GoogleProtobufEmptyFormProperties>({
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Deletes a pipeline. If a scheduler job is attached to the pipeline, it will be deleted.
		 * Delete v1/{name}
		 * @param {string} name Required. The pipeline name. For example: `projects/PROJECT_ID/locations/LOCATION_ID/pipelines/PIPELINE_ID`.
		 * @return {GoogleProtobufEmpty} Successful response
		 */
		Datapipelines_projects_locations_pipelines_delete(name: string): Observable<GoogleProtobufEmpty> {
			return this.http.delete<GoogleProtobufEmpty>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)), {});
		}

		/**
		 * Looks up a single pipeline. Returns a "NOT_FOUND" error if no such pipeline exists. Returns a "FORBIDDEN" error if the caller doesn't have permission to access it.
		 * Get v1/{name}
		 * @param {string} name Required. The pipeline name. For example: `projects/PROJECT_ID/locations/LOCATION_ID/pipelines/PIPELINE_ID`.
		 * @return {GoogleCloudDatapipelinesV1Pipeline} Successful response
		 */
		Datapipelines_projects_locations_pipelines_get(name: string): Observable<GoogleCloudDatapipelinesV1Pipeline> {
			return this.http.get<GoogleCloudDatapipelinesV1Pipeline>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)), {});
		}

		/**
		 * Updates a pipeline. If successful, the updated Pipeline is returned. Returns `NOT_FOUND` if the pipeline doesn't exist. If UpdatePipeline does not return successfully, you can retry the UpdatePipeline request until you receive a successful response.
		 * Patch v1/{name}
		 * @param {string} name The pipeline name. For example: `projects/PROJECT_ID/locations/LOCATION_ID/pipelines/PIPELINE_ID`. * `PROJECT_ID` can contain letters ([A-Za-z]), numbers ([0-9]), hyphens (-), colons (:), and periods (.). For more information, see [Identifying projects](https://cloud.google.com/resource-manager/docs/creating-managing-projects#identifying_projects). * `LOCATION_ID` is the canonical ID for the pipeline's location. The list of available locations can be obtained by calling `google.cloud.location.Locations.ListLocations`. Note that the Data Pipelines service is not available in all regions. It depends on Cloud Scheduler, an App Engine application, so it's only available in [App Engine regions](https://cloud.google.com/about/locations#region). * `PIPELINE_ID` is the ID of the pipeline. Must be unique for the selected project and location.
		 * @param {string} updateMask The list of fields to be updated.
		 * @return {GoogleCloudDatapipelinesV1Pipeline} Successful response
		 */
		Datapipelines_projects_locations_pipelines_patch(name: string, updateMask: string | null | undefined, requestBody: GoogleCloudDatapipelinesV1Pipeline): Observable<GoogleCloudDatapipelinesV1Pipeline> {
			return this.http.patch<GoogleCloudDatapipelinesV1Pipeline>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + '&updateMask=' + (updateMask == null ? '' : encodeURIComponent(updateMask)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Creates a job for the specified pipeline directly. You can use this method when the internal scheduler is not configured and you want to trigger the job directly or through an external system. Returns a "NOT_FOUND" error if the pipeline doesn't exist. Returns a "FORBIDDEN" error if the user doesn't have permission to access the pipeline or run jobs for the pipeline.
		 * Post v1/{name}:run
		 * @param {string} name Required. The pipeline name. For example: `projects/PROJECT_ID/locations/LOCATION_ID/pipelines/PIPELINE_ID`.
		 * @return {GoogleCloudDatapipelinesV1RunPipelineResponse} Successful response
		 */
		Datapipelines_projects_locations_pipelines_run(name: string, requestBody: GoogleCloudDatapipelinesV1RunPipelineRequest): Observable<GoogleCloudDatapipelinesV1RunPipelineResponse> {
			return this.http.post<GoogleCloudDatapipelinesV1RunPipelineResponse>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + ':run', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Freezes pipeline execution permanently. If there's a corresponding scheduler entry, it's deleted, and the pipeline state is changed to "ARCHIVED". However, pipeline metadata is retained.
		 * Post v1/{name}:stop
		 * @param {string} name Required. The pipeline name. For example: `projects/PROJECT_ID/locations/LOCATION_ID/pipelines/PIPELINE_ID`.
		 * @return {GoogleCloudDatapipelinesV1Pipeline} Successful response
		 */
		Datapipelines_projects_locations_pipelines_stop(name: string, requestBody: GoogleCloudDatapipelinesV1StopPipelineRequest): Observable<GoogleCloudDatapipelinesV1Pipeline> {
			return this.http.post<GoogleCloudDatapipelinesV1Pipeline>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + ':stop', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists jobs for a given pipeline. Throws a "FORBIDDEN" error if the caller doesn't have permission to access it.
		 * Get v1/{parent}/jobs
		 * @param {string} parent Required. The pipeline name. For example: `projects/PROJECT_ID/locations/LOCATION_ID/pipelines/PIPELINE_ID`.
		 * @param {number} pageSize The maximum number of entities to return. The service may return fewer than this value, even if there are additional pages. If unspecified, the max limit will be determined by the backend implementation.
		 * @param {string} pageToken A page token, received from a previous `ListJobs` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListJobs` must match the call that provided the page token.
		 * @return {GoogleCloudDatapipelinesV1ListJobsResponse} Successful response
		 */
		Datapipelines_projects_locations_pipelines_jobs_list(parent: string, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<GoogleCloudDatapipelinesV1ListJobsResponse> {
			return this.http.get<GoogleCloudDatapipelinesV1ListJobsResponse>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/jobs&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Lists pipelines. Returns a "FORBIDDEN" error if the caller doesn't have permission to access it.
		 * Get v1/{parent}/pipelines
		 * @param {string} parent Required. The location name. For example: `projects/PROJECT_ID/locations/LOCATION_ID`.
		 * @param {string} filter An expression for filtering the results of the request. If unspecified, all pipelines will be returned. Multiple filters can be applied and must be comma separated. Fields eligible for filtering are: + `type`: The type of the pipeline (streaming or batch). Allowed values are `ALL`, `BATCH`, and `STREAMING`. + `status`: The activity status of the pipeline. Allowed values are `ALL`, `ACTIVE`, `ARCHIVED`, and `PAUSED`. For example, to limit results to active batch processing pipelines: type:BATCH,status:ACTIVE
		 * @param {number} pageSize The maximum number of entities to return. The service may return fewer than this value, even if there are additional pages. If unspecified, the max limit is yet to be determined by the backend implementation.
		 * @param {string} pageToken A page token, received from a previous `ListPipelines` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListPipelines` must match the call that provided the page token.
		 * @return {GoogleCloudDatapipelinesV1ListPipelinesResponse} Successful response
		 */
		Datapipelines_projects_locations_pipelines_list(parent: string, filter: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<GoogleCloudDatapipelinesV1ListPipelinesResponse> {
			return this.http.get<GoogleCloudDatapipelinesV1ListPipelinesResponse>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/pipelines&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Creates a pipeline. For a batch pipeline, you can pass scheduler information. Data Pipelines uses the scheduler information to create an internal scheduler that runs jobs periodically. If the internal scheduler is not configured, you can use RunPipeline to run jobs.
		 * Post v1/{parent}/pipelines
		 * @param {string} parent Required. The location name. For example: `projects/PROJECT_ID/locations/LOCATION_ID`.
		 * @return {GoogleCloudDatapipelinesV1Pipeline} Successful response
		 */
		Datapipelines_projects_locations_pipelines_create(parent: string, requestBody: GoogleCloudDatapipelinesV1Pipeline): Observable<GoogleCloudDatapipelinesV1Pipeline> {
			return this.http.post<GoogleCloudDatapipelinesV1Pipeline>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/pipelines', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

}

