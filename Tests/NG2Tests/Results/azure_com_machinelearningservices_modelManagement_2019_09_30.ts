import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface ACIServiceCreateRequest {
	}
	export interface ACIServiceCreateRequestFormProperties {
	}
	export function CreateACIServiceCreateRequestFormGroup() {
		return new FormGroup<ACIServiceCreateRequestFormProperties>({
		});

	}


	/** The response for an ACI service. */
	export interface ACIServiceResponse {
	}

	/** The response for an ACI service. */
	export interface ACIServiceResponseFormProperties {
	}
	export function CreateACIServiceResponseFormGroup() {
		return new FormGroup<ACIServiceResponseFormProperties>({
		});

	}


	/** The response for an AKS Endpoint. */
	export interface AKSEndpointResponse {
	}

	/** The response for an AKS Endpoint. */
	export interface AKSEndpointResponseFormProperties {
	}
	export function CreateAKSEndpointResponseFormGroup() {
		return new FormGroup<AKSEndpointResponseFormProperties>({
		});

	}

	export interface AKSReplicaStatus {

		/** The number of available replicas. */
		availableReplicas?: number | null;

		/** The desired number of replicas. */
		desiredReplicas?: number | null;

		/** The Model Management Service Error object. */
		error?: ModelErrorResponse;

		/** The number of updated replicas. */
		updatedReplicas?: number | null;
	}
	export interface AKSReplicaStatusFormProperties {

		/** The number of available replicas. */
		availableReplicas: FormControl<number | null | undefined>,

		/** The desired number of replicas. */
		desiredReplicas: FormControl<number | null | undefined>,

		/** The number of updated replicas. */
		updatedReplicas: FormControl<number | null | undefined>,
	}
	export function CreateAKSReplicaStatusFormGroup() {
		return new FormGroup<AKSReplicaStatusFormProperties>({
			availableReplicas: new FormControl<number | null | undefined>(undefined),
			desiredReplicas: new FormControl<number | null | undefined>(undefined),
			updatedReplicas: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** The Model Management Service Error object. */
	export interface ModelErrorResponse {

		/** The error code. */
		code?: string | null;

		/** An array of error detail objects. */
		details?: Array<ErrorDetails>;

		/** The error message. */
		message?: string | null;

		/** The HTTP status code. */
		statusCode?: number | null;
	}

	/** The Model Management Service Error object. */
	export interface ModelErrorResponseFormProperties {

		/** The error code. */
		code: FormControl<string | null | undefined>,

		/** The error message. */
		message: FormControl<string | null | undefined>,

		/** The HTTP status code. */
		statusCode: FormControl<number | null | undefined>,
	}
	export function CreateModelErrorResponseFormGroup() {
		return new FormGroup<ModelErrorResponseFormProperties>({
			code: new FormControl<string | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
			statusCode: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** The error details. */
	export interface ErrorDetails {

		/** The error code. */
		code?: string | null;

		/** The error message. */
		message?: string | null;

		/** The target of the error (e.g., the name of the property in error). */
		target?: string | null;
	}

	/** The error details. */
	export interface ErrorDetailsFormProperties {

		/** The error code. */
		code: FormControl<string | null | undefined>,

		/** The error message. */
		message: FormControl<string | null | undefined>,

		/** The target of the error (e.g., the name of the property in error). */
		target: FormControl<string | null | undefined>,
	}
	export function CreateErrorDetailsFormGroup() {
		return new FormGroup<ErrorDetailsFormProperties>({
			code: new FormControl<string | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
			target: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The request to create an AKS service. */
	export interface AKSServiceCreateRequest {
	}

	/** The request to create an AKS service. */
	export interface AKSServiceCreateRequestFormProperties {
	}
	export function CreateAKSServiceCreateRequestFormGroup() {
		return new FormGroup<AKSServiceCreateRequestFormProperties>({
		});

	}


	/** The response for an AKS service. */
	export interface AKSServiceResponse {
	}

	/** The response for an AKS service. */
	export interface AKSServiceResponseFormProperties {
	}
	export function CreateAKSServiceResponseFormGroup() {
		return new FormGroup<AKSServiceResponseFormProperties>({
		});

	}


	/** The response for an AKS variant. */
	export interface AKSVariantResponse {
	}

	/** The response for an AKS variant. */
	export interface AKSVariantResponseFormProperties {
	}
	export function CreateAKSVariantResponseFormGroup() {
		return new FormGroup<AKSVariantResponseFormProperties>({
		});

	}

	export interface ArtifactDetails {
		id?: string | null;
		prefix?: string | null;
	}
	export interface ArtifactDetailsFormProperties {
		id: FormControl<string | null | undefined>,
		prefix: FormControl<string | null | undefined>,
	}
	export function CreateArtifactDetailsFormGroup() {
		return new FormGroup<ArtifactDetailsFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			prefix: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The Asset definition. */
	export interface Asset {

		/** A list of child artifacts. */
		artifacts?: Array<ArtifactDetails>;

		/** The time the Asset was created in UTC. */
		createdTime?: Date | null;

		/** The Asset description. */
		description?: string | null;

		/** The Asset Id. */
		id?: string | null;

		/** The Asset tag dictionary. Tags are mutable. */
		kvTags?: {[id: string]: string };

		/** A dictionary containing metadata about the Asset. */
		meta?: {[id: string]: string };

		/**
		 * The name of the Asset.
		 * Required
		 */
		name: string;

		/** The Asset property dictionary. Properties are immutable. */
		properties?: {[id: string]: string };

		/** The RunId associated with this Asset. */
		runid?: string | null;
	}

	/** The Asset definition. */
	export interface AssetFormProperties {

		/** The time the Asset was created in UTC. */
		createdTime: FormControl<Date | null | undefined>,

		/** The Asset description. */
		description: FormControl<string | null | undefined>,

		/** The Asset Id. */
		id: FormControl<string | null | undefined>,

		/** The Asset tag dictionary. Tags are mutable. */
		kvTags: FormControl<{[id: string]: string } | null | undefined>,

		/** A dictionary containing metadata about the Asset. */
		meta: FormControl<{[id: string]: string } | null | undefined>,

		/**
		 * The name of the Asset.
		 * Required
		 */
		name: FormControl<string | null | undefined>,

		/** The Asset property dictionary. Properties are immutable. */
		properties: FormControl<{[id: string]: string } | null | undefined>,

		/** The RunId associated with this Asset. */
		runid: FormControl<string | null | undefined>,
	}
	export function CreateAssetFormGroup() {
		return new FormGroup<AssetFormProperties>({
			createdTime: new FormControl<Date | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			kvTags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			meta: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			properties: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			runid: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The async operation details. */
	export interface AsyncOperationDetails {

		/** The suboperation state. */
		subOperationState?: string | null;

		/** The suboperation type. */
		subOperationType?: string | null;
	}

	/** The async operation details. */
	export interface AsyncOperationDetailsFormProperties {

		/** The suboperation state. */
		subOperationState: FormControl<string | null | undefined>,

		/** The suboperation type. */
		subOperationType: FormControl<string | null | undefined>,
	}
	export function CreateAsyncOperationDetailsFormGroup() {
		return new FormGroup<AsyncOperationDetailsFormProperties>({
			subOperationState: new FormControl<string | null | undefined>(undefined),
			subOperationType: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The async operation status. */
	export interface AsyncOperationStatus {

		/** The async operation creation time (UTC). */
		createdTime?: Date | null;

		/** The async operation end time (UTC)l */
		endTime?: Date | null;

		/** The Model Management Service Error object. */
		error?: ModelErrorResponse;

		/** The async operation id. */
		id?: string | null;

		/** The async operation details. */
		operationDetails?: AsyncOperationDetails;

		/** The async operation log. */
		operationLog?: string | null;

		/** The async operation type. */
		operationType?: string | null;

		/** The request id that created this operation */
		parentRequestId?: string | null;

		/** The resource created/updated by the async operation. */
		resourceLocation?: string | null;

		/** The async operation state. */
		state?: AsyncOperationStatusState | null;
	}

	/** The async operation status. */
	export interface AsyncOperationStatusFormProperties {

		/** The async operation creation time (UTC). */
		createdTime: FormControl<Date | null | undefined>,

		/** The async operation end time (UTC)l */
		endTime: FormControl<Date | null | undefined>,

		/** The async operation id. */
		id: FormControl<string | null | undefined>,

		/** The async operation log. */
		operationLog: FormControl<string | null | undefined>,

		/** The async operation type. */
		operationType: FormControl<string | null | undefined>,

		/** The request id that created this operation */
		parentRequestId: FormControl<string | null | undefined>,

		/** The resource created/updated by the async operation. */
		resourceLocation: FormControl<string | null | undefined>,

		/** The async operation state. */
		state: FormControl<AsyncOperationStatusState | null | undefined>,
	}
	export function CreateAsyncOperationStatusFormGroup() {
		return new FormGroup<AsyncOperationStatusFormProperties>({
			createdTime: new FormControl<Date | null | undefined>(undefined),
			endTime: new FormControl<Date | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			operationLog: new FormControl<string | null | undefined>(undefined),
			operationType: new FormControl<string | null | undefined>(undefined),
			parentRequestId: new FormControl<string | null | undefined>(undefined),
			resourceLocation: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<AsyncOperationStatusState | null | undefined>(undefined),
		});

	}

	export enum AsyncOperationStatusState { NotStarted = 'NotStarted', Running = 'Running', Cancelled = 'Cancelled', Succeeded = 'Succeeded', Failed = 'Failed', TimedOut = 'TimedOut' }

	export interface AuthKeys {

		/** The primary key. */
		primaryKey?: string | null;

		/** The secondary key. */
		secondaryKey?: string | null;
	}
	export interface AuthKeysFormProperties {

		/** The primary key. */
		primaryKey: FormControl<string | null | undefined>,

		/** The secondary key. */
		secondaryKey: FormControl<string | null | undefined>,
	}
	export function CreateAuthKeysFormGroup() {
		return new FormGroup<AuthKeysFormProperties>({
			primaryKey: new FormControl<string | null | undefined>(undefined),
			secondaryKey: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Service Token */
	export interface AuthToken {

		/** Access token. */
		accessToken?: string | null;

		/** Access token expiry time (UTC). */
		expiryOn?: number | null;

		/** Refresh access token after time (UTC). */
		refreshAfter?: number | null;

		/** Access token type. */
		tokenType?: string | null;
	}

	/** Service Token */
	export interface AuthTokenFormProperties {

		/** Access token. */
		accessToken: FormControl<string | null | undefined>,

		/** Access token expiry time (UTC). */
		expiryOn: FormControl<number | null | undefined>,

		/** Refresh access token after time (UTC). */
		refreshAfter: FormControl<number | null | undefined>,

		/** Access token type. */
		tokenType: FormControl<string | null | undefined>,
	}
	export function CreateAuthTokenFormGroup() {
		return new FormGroup<AuthTokenFormProperties>({
			accessToken: new FormControl<string | null | undefined>(undefined),
			expiryOn: new FormControl<number | null | undefined>(undefined),
			refreshAfter: new FormControl<number | null | undefined>(undefined),
			tokenType: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The Auto Scaler properties. */
	export interface AutoScaler {

		/** Option to enable/disable auto scaling. */
		autoscaleEnabled?: boolean | null;

		/** The maximum number of replicas in the cluster. */
		maxReplicas?: number | null;

		/** The minimum number of replicas to scale down to. */
		minReplicas?: number | null;

		/** The amount of seconds to wait between auto scale updates. */
		refreshPeriodInSeconds?: number | null;

		/** The target utilization percentage to use for determining whether to scale the cluster. */
		targetUtilization?: number | null;
	}

	/** The Auto Scaler properties. */
	export interface AutoScalerFormProperties {

		/** Option to enable/disable auto scaling. */
		autoscaleEnabled: FormControl<boolean | null | undefined>,

		/** The maximum number of replicas in the cluster. */
		maxReplicas: FormControl<number | null | undefined>,

		/** The minimum number of replicas to scale down to. */
		minReplicas: FormControl<number | null | undefined>,

		/** The amount of seconds to wait between auto scale updates. */
		refreshPeriodInSeconds: FormControl<number | null | undefined>,

		/** The target utilization percentage to use for determining whether to scale the cluster. */
		targetUtilization: FormControl<number | null | undefined>,
	}
	export function CreateAutoScalerFormGroup() {
		return new FormGroup<AutoScalerFormProperties>({
			autoscaleEnabled: new FormControl<boolean | null | undefined>(undefined),
			maxReplicas: new FormControl<number | null | undefined>(undefined),
			minReplicas: new FormControl<number | null | undefined>(undefined),
			refreshPeriodInSeconds: new FormControl<number | null | undefined>(undefined),
			targetUtilization: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface BatchServiceResponse {
	}
	export interface BatchServiceResponseFormProperties {
	}
	export function CreateBatchServiceResponseFormGroup() {
		return new FormGroup<BatchServiceResponseFormProperties>({
		});

	}

	export interface ContainerRegistry {
		address?: string | null;
		password?: string | null;
		username?: string | null;
	}
	export interface ContainerRegistryFormProperties {
		address: FormControl<string | null | undefined>,
		password: FormControl<string | null | undefined>,
		username: FormControl<string | null | undefined>,
	}
	export function CreateContainerRegistryFormGroup() {
		return new FormGroup<ContainerRegistryFormProperties>({
			address: new FormControl<string | null | undefined>(undefined),
			password: new FormControl<string | null | undefined>(undefined),
			username: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The resource requirements for the container (cpu and memory). */
	export interface ContainerResourceRequirements {

		/** The number of CPU cores on the container. */
		cpu?: number | null;

		/** The number of FPGA PCIE devices exposed to the container. Must be multiple of 2. */
		fpga?: number | null;

		/** The number of GPU cores in the container. */
		gpu?: number | null;

		/** The amount of memory on the container in GB. */
		memoryInGB?: number | null;
	}

	/** The resource requirements for the container (cpu and memory). */
	export interface ContainerResourceRequirementsFormProperties {

		/** The number of CPU cores on the container. */
		cpu: FormControl<number | null | undefined>,

		/** The number of FPGA PCIE devices exposed to the container. Must be multiple of 2. */
		fpga: FormControl<number | null | undefined>,

		/** The number of GPU cores in the container. */
		gpu: FormControl<number | null | undefined>,

		/** The amount of memory on the container in GB. */
		memoryInGB: FormControl<number | null | undefined>,
	}
	export function CreateContainerResourceRequirementsFormGroup() {
		return new FormGroup<ContainerResourceRequirementsFormProperties>({
			cpu: new FormControl<number | null | undefined>(undefined),
			fpga: new FormControl<number | null | undefined>(undefined),
			gpu: new FormControl<number | null | undefined>(undefined),
			memoryInGB: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** The request to create an Endpoint in the AKS. */
	export interface CreateEndpointRequest {
	}

	/** The request to create an Endpoint in the AKS. */
	export interface CreateEndpointRequestFormProperties {
	}
	export function CreateCreateEndpointRequestFormGroup() {
		return new FormGroup<CreateEndpointRequestFormProperties>({
		});

	}


	/** The Variant properties. */
	export interface CreateEndpointVariantRequest {
	}

	/** The Variant properties. */
	export interface CreateEndpointVariantRequestFormProperties {
	}
	export function CreateCreateEndpointVariantRequestFormGroup() {
		return new FormGroup<CreateEndpointVariantRequestFormProperties>({
		});

	}

	export interface CreateIotServiceRequest {
	}
	export interface CreateIotServiceRequestFormProperties {
	}
	export function CreateCreateIotServiceRequestFormGroup() {
		return new FormGroup<CreateIotServiceRequestFormProperties>({
		});

	}


	/** The base class for creating a service. */
	export interface CreateServiceRequest {

		/**
		 * The compute environment type for the service.
		 * Required
		 */
		computeType: CreateServiceRequestComputeType;

		/** The deployment type for the service. */
		deploymentType?: CreateServiceRequestDeploymentType | null;

		/** The description of the service. */
		description?: string | null;

		/** Request to create a Docker image based on Environment. */
		environmentImageRequest?: EnvironmentImageRequest;

		/** The Image Id. */
		imageId?: string | null;
		keys?: AuthKeys;

		/** The service tag dictionary. Tags are mutable. */
		kvTags?: {[id: string]: string };

		/** The location of the service. */
		location?: string | null;

		/**
		 * The service name.
		 * Required
		 */
		name: string;

		/** The service properties dictionary. Properties are immutable. */
		properties?: {[id: string]: string };
	}

	/** The base class for creating a service. */
	export interface CreateServiceRequestFormProperties {

		/**
		 * The compute environment type for the service.
		 * Required
		 */
		computeType: FormControl<CreateServiceRequestComputeType | null | undefined>,

		/** The deployment type for the service. */
		deploymentType: FormControl<CreateServiceRequestDeploymentType | null | undefined>,

		/** The description of the service. */
		description: FormControl<string | null | undefined>,

		/** The Image Id. */
		imageId: FormControl<string | null | undefined>,

		/** The service tag dictionary. Tags are mutable. */
		kvTags: FormControl<{[id: string]: string } | null | undefined>,

		/** The location of the service. */
		location: FormControl<string | null | undefined>,

		/**
		 * The service name.
		 * Required
		 */
		name: FormControl<string | null | undefined>,

		/** The service properties dictionary. Properties are immutable. */
		properties: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateCreateServiceRequestFormGroup() {
		return new FormGroup<CreateServiceRequestFormProperties>({
			computeType: new FormControl<CreateServiceRequestComputeType | null | undefined>(undefined, [Validators.required]),
			deploymentType: new FormControl<CreateServiceRequestDeploymentType | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			imageId: new FormControl<string | null | undefined>(undefined),
			kvTags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			location: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			properties: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}

	export enum CreateServiceRequestComputeType { ACI = 'ACI', AKS = 'AKS', AMLCOMPUTE = 'AMLCOMPUTE', IOT = 'IOT', AKSENDPOINT = 'AKSENDPOINT', UNKNOWN = 'UNKNOWN' }

	export enum CreateServiceRequestDeploymentType { GRPCRealtimeEndpoint = 'GRPCRealtimeEndpoint', HttpRealtimeEndpoint = 'HttpRealtimeEndpoint', Batch = 'Batch' }


	/** Request to create a Docker image based on Environment. */
	export interface EnvironmentImageRequest {

		/** The list of assets. */
		assets?: Array<EnvironmentImageAsset>;

		/** The name of the driver file. */
		driverProgram?: string | null;
		environment?: ModelEnvironmentDefinition;

		/** The list of model Ids. */
		modelIds?: Array<string>;
	}

	/** Request to create a Docker image based on Environment. */
	export interface EnvironmentImageRequestFormProperties {

		/** The name of the driver file. */
		driverProgram: FormControl<string | null | undefined>,
	}
	export function CreateEnvironmentImageRequestFormGroup() {
		return new FormGroup<EnvironmentImageRequestFormProperties>({
			driverProgram: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An Image asset. */
	export interface EnvironmentImageAsset {

		/** The Asset Id. */
		id?: string | null;

		/** The mime type. */
		mimeType?: string | null;

		/** Whether the Asset is unpacked. */
		unpack?: boolean | null;

		/** The Url of the Asset. */
		url?: string | null;
	}

	/** An Image asset. */
	export interface EnvironmentImageAssetFormProperties {

		/** The Asset Id. */
		id: FormControl<string | null | undefined>,

		/** The mime type. */
		mimeType: FormControl<string | null | undefined>,

		/** Whether the Asset is unpacked. */
		unpack: FormControl<boolean | null | undefined>,

		/** The Url of the Asset. */
		url: FormControl<string | null | undefined>,
	}
	export function CreateEnvironmentImageAssetFormGroup() {
		return new FormGroup<EnvironmentImageAssetFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			mimeType: new FormControl<string | null | undefined>(undefined),
			unpack: new FormControl<boolean | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ModelEnvironmentDefinition {
		docker?: ModelDockerSection;

		/** Definition of environment variables to be defined in the environment. */
		environmentVariables?: {[id: string]: string };

		/** The Inferencing stack version. */
		inferencingStackVersion?: string | null;

		/** The name of the environment. */
		name?: string | null;
		python?: ModelPythonSection;
		spark?: ModelSparkSection;

		/** The environment version. */
		version?: string | null;
	}
	export interface ModelEnvironmentDefinitionFormProperties {

		/** Definition of environment variables to be defined in the environment. */
		environmentVariables: FormControl<{[id: string]: string } | null | undefined>,

		/** The Inferencing stack version. */
		inferencingStackVersion: FormControl<string | null | undefined>,

		/** The name of the environment. */
		name: FormControl<string | null | undefined>,

		/** The environment version. */
		version: FormControl<string | null | undefined>,
	}
	export function CreateModelEnvironmentDefinitionFormGroup() {
		return new FormGroup<ModelEnvironmentDefinitionFormProperties>({
			environmentVariables: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			inferencingStackVersion: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			version: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ModelDockerSection {

		/** Extra arguments to the Docker run command. */
		arguments?: Array<string>;

		/** Base Dockerfile used for Docker-based runs. Mutually exclusive with BaseImage. */
		baseDockerfile?: string | null;

		/** Base image used for Docker-based runs. Mutually exclusive with BaseDockerfile. */
		baseImage?: string | null;
		baseImageRegistry?: ContainerRegistry;

		/** Set True to perform this run inside a Docker container. */
		enabled?: boolean | null;

		/** Run with NVidia Docker extension to support GPUs. */
		gpuSupport?: boolean | null;

		/** Set False if necessary to work around shared volume bugs on Windows. */
		sharedVolumes?: boolean | null;

		/** The shared memory size setting for NVidia GPUs. */
		shmSize?: string | null;
	}
	export interface ModelDockerSectionFormProperties {

		/** Base Dockerfile used for Docker-based runs. Mutually exclusive with BaseImage. */
		baseDockerfile: FormControl<string | null | undefined>,

		/** Base image used for Docker-based runs. Mutually exclusive with BaseDockerfile. */
		baseImage: FormControl<string | null | undefined>,

		/** Set True to perform this run inside a Docker container. */
		enabled: FormControl<boolean | null | undefined>,

		/** Run with NVidia Docker extension to support GPUs. */
		gpuSupport: FormControl<boolean | null | undefined>,

		/** Set False if necessary to work around shared volume bugs on Windows. */
		sharedVolumes: FormControl<boolean | null | undefined>,

		/** The shared memory size setting for NVidia GPUs. */
		shmSize: FormControl<string | null | undefined>,
	}
	export function CreateModelDockerSectionFormGroup() {
		return new FormGroup<ModelDockerSectionFormProperties>({
			baseDockerfile: new FormControl<string | null | undefined>(undefined),
			baseImage: new FormControl<string | null | undefined>(undefined),
			enabled: new FormControl<boolean | null | undefined>(undefined),
			gpuSupport: new FormControl<boolean | null | undefined>(undefined),
			sharedVolumes: new FormControl<boolean | null | undefined>(undefined),
			shmSize: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ModelPythonSection {
		baseCondaEnvironment?: string | null;
		condaDependencies?: string | null;

		/** The python interpreter path. This is only used when user_managed_dependencies=True. */
		interpreterPath?: string | null;

		/** True means that AzureML reuses an existing python environment; False means that AzureML will create a python environment based on the Conda dependencies specification. */
		userManagedDependencies?: boolean | null;
	}
	export interface ModelPythonSectionFormProperties {
		baseCondaEnvironment: FormControl<string | null | undefined>,
		condaDependencies: FormControl<string | null | undefined>,

		/** The python interpreter path. This is only used when user_managed_dependencies=True. */
		interpreterPath: FormControl<string | null | undefined>,

		/** True means that AzureML reuses an existing python environment; False means that AzureML will create a python environment based on the Conda dependencies specification. */
		userManagedDependencies: FormControl<boolean | null | undefined>,
	}
	export function CreateModelPythonSectionFormGroup() {
		return new FormGroup<ModelPythonSectionFormProperties>({
			baseCondaEnvironment: new FormControl<string | null | undefined>(undefined),
			condaDependencies: new FormControl<string | null | undefined>(undefined),
			interpreterPath: new FormControl<string | null | undefined>(undefined),
			userManagedDependencies: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface ModelSparkSection {

		/** The Spark packages to use. */
		packages?: Array<SparkMavenPackage>;

		/** Whether to precache the packages. */
		precachePackages?: boolean | null;

		/** The list of spark repositories. */
		repositories?: Array<string>;
	}
	export interface ModelSparkSectionFormProperties {

		/** Whether to precache the packages. */
		precachePackages: FormControl<boolean | null | undefined>,
	}
	export function CreateModelSparkSectionFormGroup() {
		return new FormGroup<ModelSparkSectionFormProperties>({
			precachePackages: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface SparkMavenPackage {
		artifact?: string | null;
		group?: string | null;
		version?: string | null;
	}
	export interface SparkMavenPackageFormProperties {
		artifact: FormControl<string | null | undefined>,
		group: FormControl<string | null | undefined>,
		version: FormControl<string | null | undefined>,
	}
	export function CreateSparkMavenPackageFormGroup() {
		return new FormGroup<SparkMavenPackageFormProperties>({
			artifact: new FormControl<string | null | undefined>(undefined),
			group: new FormControl<string | null | undefined>(undefined),
			version: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The dataset reference object. */
	export interface DatasetReference {

		/** The id of the dataset reference. */
		id?: string | null;

		/** The name of the dataset reference. */
		name?: string | null;
	}

	/** The dataset reference object. */
	export interface DatasetReferenceFormProperties {

		/** The id of the dataset reference. */
		id: FormControl<string | null | undefined>,

		/** The name of the dataset reference. */
		name: FormControl<string | null | undefined>,
	}
	export function CreateDatasetReferenceFormGroup() {
		return new FormGroup<DatasetReferenceFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The deployment summary. */
	export interface DeploymentSummary {

		/** The number of successful deployments. */
		successfulDeployments?: number | null;

		/** The number of unsuccessful deployments. */
		unsuccessfulDeployments?: number | null;
	}

	/** The deployment summary. */
	export interface DeploymentSummaryFormProperties {

		/** The number of successful deployments. */
		successfulDeployments: FormControl<number | null | undefined>,

		/** The number of unsuccessful deployments. */
		unsuccessfulDeployments: FormControl<number | null | undefined>,
	}
	export function CreateDeploymentSummaryFormGroup() {
		return new FormGroup<DeploymentSummaryFormProperties>({
			successfulDeployments: new FormControl<number | null | undefined>(undefined),
			unsuccessfulDeployments: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface DockerImageResponse {
	}
	export interface DockerImageResponseFormProperties {
	}
	export function CreateDockerImageResponseFormGroup() {
		return new FormGroup<DockerImageResponseFormProperties>({
		});

	}


	/** The FPGA Docker Image response. */
	export interface FPGADockerImageResponse {
	}

	/** The FPGA Docker Image response. */
	export interface FPGADockerImageResponseFormProperties {
	}
	export function CreateFPGADockerImageResponseFormGroup() {
		return new FormGroup<FPGADockerImageResponseFormProperties>({
		});

	}

	export interface ImageResponseBase {

		/** Whether the image will be automatically deleted with the last service using it. */
		autoDelete?: boolean | null;

		/** The time the image was created. */
		createdTime?: Date | null;

		/** The state of the operation. */
		creationState?: AsyncOperationStatusState | null;

		/** The image description. */
		description?: string | null;

		/** The Model Management Service Error object. */
		error?: ModelErrorResponse;

		/** The image Id. */
		id?: string | null;

		/** The Uri to the image build logs. */
		imageBuildLogUri?: string | null;

		/**
		 * The flavor of the image.
		 * Required
		 */
		imageFlavor: ImageResponseBaseImageFlavor;

		/** The Image location string. */
		imageLocation?: string | null;

		/** The type of the image. */
		imageType?: ImageResponseBaseImageType | null;

		/** The image tag dictionary. Tags are mutable. */
		kvTags?: {[id: string]: string };

		/** The list of models. */
		modelDetails?: Array<Model>;

		/** The list of model Ids. */
		modelIds?: Array<string>;

		/** The time the image was last modified. */
		modifiedTime?: Date | null;

		/** The image name. */
		name?: string | null;

		/** The ID of the asynchronous operation for this image. */
		operationId?: string | null;

		/** The image properties dictionary. Properties are immutable. */
		properties?: {[id: string]: string };

		/** The image version. */
		version?: number | null;
	}
	export interface ImageResponseBaseFormProperties {

		/** Whether the image will be automatically deleted with the last service using it. */
		autoDelete: FormControl<boolean | null | undefined>,

		/** The time the image was created. */
		createdTime: FormControl<Date | null | undefined>,

		/** The state of the operation. */
		creationState: FormControl<AsyncOperationStatusState | null | undefined>,

		/** The image description. */
		description: FormControl<string | null | undefined>,

		/** The image Id. */
		id: FormControl<string | null | undefined>,

		/** The Uri to the image build logs. */
		imageBuildLogUri: FormControl<string | null | undefined>,

		/**
		 * The flavor of the image.
		 * Required
		 */
		imageFlavor: FormControl<ImageResponseBaseImageFlavor | null | undefined>,

		/** The Image location string. */
		imageLocation: FormControl<string | null | undefined>,

		/** The type of the image. */
		imageType: FormControl<ImageResponseBaseImageType | null | undefined>,

		/** The image tag dictionary. Tags are mutable. */
		kvTags: FormControl<{[id: string]: string } | null | undefined>,

		/** The time the image was last modified. */
		modifiedTime: FormControl<Date | null | undefined>,

		/** The image name. */
		name: FormControl<string | null | undefined>,

		/** The ID of the asynchronous operation for this image. */
		operationId: FormControl<string | null | undefined>,

		/** The image properties dictionary. Properties are immutable. */
		properties: FormControl<{[id: string]: string } | null | undefined>,

		/** The image version. */
		version: FormControl<number | null | undefined>,
	}
	export function CreateImageResponseBaseFormGroup() {
		return new FormGroup<ImageResponseBaseFormProperties>({
			autoDelete: new FormControl<boolean | null | undefined>(undefined),
			createdTime: new FormControl<Date | null | undefined>(undefined),
			creationState: new FormControl<AsyncOperationStatusState | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			imageBuildLogUri: new FormControl<string | null | undefined>(undefined),
			imageFlavor: new FormControl<ImageResponseBaseImageFlavor | null | undefined>(undefined, [Validators.required]),
			imageLocation: new FormControl<string | null | undefined>(undefined),
			imageType: new FormControl<ImageResponseBaseImageType | null | undefined>(undefined),
			kvTags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			modifiedTime: new FormControl<Date | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			operationId: new FormControl<string | null | undefined>(undefined),
			properties: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			version: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum ImageResponseBaseImageFlavor { WebApiContainer = 'WebApiContainer', BatchContainer = 'BatchContainer', IoTContainer = 'IoTContainer', AccelContainer = 'AccelContainer', UserProvidedContainer = 'UserProvidedContainer' }

	export enum ImageResponseBaseImageType { Docker = 'Docker' }


	/** An Azure Machine Learning Model. */
	export interface Model {

		/** The Model creation time (UTC). */
		createdTime?: Date | null;

		/** The list of datasets associated with the model. */
		datasets?: Array<DatasetReference>;

		/** The Model description text. */
		description?: string | null;

		/** The name of the experiment where this model was created. */
		experimentName?: string | null;

		/** The Model framework. */
		framework?: string | null;

		/** The Model framework version. */
		frameworkVersion?: string | null;

		/** The Model Id. */
		id?: string | null;

		/** The Model tag dictionary. Items are mutable. */
		kvTags?: {[id: string]: string };

		/**
		 * The MIME type of Model content. For more details about MIME type, please open https://www.iana.org/assignments/media-types/media-types.xhtml
		 * Required
		 */
		mimeType: string;

		/** The Model last modified time (UTC). */
		modifiedTime?: Date | null;

		/**
		 * The Model name.
		 * Required
		 */
		name: string;

		/** The Parent Model Id. */
		parentModelId?: string | null;

		/** The Model property dictionary. Properties are immutable. */
		properties?: {[id: string]: string };

		/** The RunId that created this model. */
		runId?: string | null;

		/** Indicates whether we need to unpack the Model during docker Image creation. */
		unpack?: boolean | null;

		/**
		 * The URL of the Model. Usually a SAS URL.
		 * Required
		 */
		url: string;

		/** The Model version assigned by Model Management Service. */
		version?: number | null;
	}

	/** An Azure Machine Learning Model. */
	export interface ModelFormProperties {

		/** The Model creation time (UTC). */
		createdTime: FormControl<Date | null | undefined>,

		/** The Model description text. */
		description: FormControl<string | null | undefined>,

		/** The name of the experiment where this model was created. */
		experimentName: FormControl<string | null | undefined>,

		/** The Model framework. */
		framework: FormControl<string | null | undefined>,

		/** The Model framework version. */
		frameworkVersion: FormControl<string | null | undefined>,

		/** The Model Id. */
		id: FormControl<string | null | undefined>,

		/** The Model tag dictionary. Items are mutable. */
		kvTags: FormControl<{[id: string]: string } | null | undefined>,

		/**
		 * The MIME type of Model content. For more details about MIME type, please open https://www.iana.org/assignments/media-types/media-types.xhtml
		 * Required
		 */
		mimeType: FormControl<string | null | undefined>,

		/** The Model last modified time (UTC). */
		modifiedTime: FormControl<Date | null | undefined>,

		/**
		 * The Model name.
		 * Required
		 */
		name: FormControl<string | null | undefined>,

		/** The Parent Model Id. */
		parentModelId: FormControl<string | null | undefined>,

		/** The Model property dictionary. Properties are immutable. */
		properties: FormControl<{[id: string]: string } | null | undefined>,

		/** The RunId that created this model. */
		runId: FormControl<string | null | undefined>,

		/** Indicates whether we need to unpack the Model during docker Image creation. */
		unpack: FormControl<boolean | null | undefined>,

		/**
		 * The URL of the Model. Usually a SAS URL.
		 * Required
		 */
		url: FormControl<string | null | undefined>,

		/** The Model version assigned by Model Management Service. */
		version: FormControl<number | null | undefined>,
	}
	export function CreateModelFormGroup() {
		return new FormGroup<ModelFormProperties>({
			createdTime: new FormControl<Date | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			experimentName: new FormControl<string | null | undefined>(undefined),
			framework: new FormControl<string | null | undefined>(undefined),
			frameworkVersion: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			kvTags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			mimeType: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			modifiedTime: new FormControl<Date | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			parentModelId: new FormControl<string | null | undefined>(undefined),
			properties: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			runId: new FormControl<string | null | undefined>(undefined),
			unpack: new FormControl<boolean | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			version: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface IotBaseModuleSettings {
		createOptions?: string | null;
		environmentVariables?: {[id: string]: string };
		moduleName?: string | null;
		propertiesDesired?: {[id: string]: string };
	}
	export interface IotBaseModuleSettingsFormProperties {
		createOptions: FormControl<string | null | undefined>,
		environmentVariables: FormControl<{[id: string]: string } | null | undefined>,
		moduleName: FormControl<string | null | undefined>,
		propertiesDesired: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateIotBaseModuleSettingsFormGroup() {
		return new FormGroup<IotBaseModuleSettingsFormProperties>({
			createOptions: new FormControl<string | null | undefined>(undefined),
			environmentVariables: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			moduleName: new FormControl<string | null | undefined>(undefined),
			propertiesDesired: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}

	export interface IotModuleSettings {
		createOptions?: string | null;
		environmentVariables?: {[id: string]: string };
		imageLocation?: string | null;
		moduleName?: string | null;
		propertiesDesired?: {[id: string]: string };
	}
	export interface IotModuleSettingsFormProperties {
		createOptions: FormControl<string | null | undefined>,
		environmentVariables: FormControl<{[id: string]: string } | null | undefined>,
		imageLocation: FormControl<string | null | undefined>,
		moduleName: FormControl<string | null | undefined>,
		propertiesDesired: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateIotModuleSettingsFormGroup() {
		return new FormGroup<IotModuleSettingsFormProperties>({
			createOptions: new FormControl<string | null | undefined>(undefined),
			environmentVariables: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			imageLocation: new FormControl<string | null | undefined>(undefined),
			moduleName: new FormControl<string | null | undefined>(undefined),
			propertiesDesired: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}

	export interface IotServiceResponse {
	}
	export interface IotServiceResponseFormProperties {
	}
	export function CreateIotServiceResponseFormGroup() {
		return new FormGroup<IotServiceResponseFormProperties>({
		});

	}


	/** The Json Patch definition. */
	export interface JsonPatchOperation {

		/** The source location. */
		from?: string | null;

		/** The operation. */
		op?: string | null;

		/** The target location. */
		path?: string | null;

		/** The value. */
		value?: string | null;
	}

	/** The Json Patch definition. */
	export interface JsonPatchOperationFormProperties {

		/** The source location. */
		from: FormControl<string | null | undefined>,

		/** The operation. */
		op: FormControl<string | null | undefined>,

		/** The target location. */
		path: FormControl<string | null | undefined>,

		/** The value. */
		value: FormControl<string | null | undefined>,
	}
	export function CreateJsonPatchOperationFormGroup() {
		return new FormGroup<JsonPatchOperationFormProperties>({
			from: new FormControl<string | null | undefined>(undefined),
			op: new FormControl<string | null | undefined>(undefined),
			path: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The liveness probe requirements. */
	export interface LivenessProbeRequirements {

		/** The number of failures to allow before returning an unhealthy status. */
		failureThreshold?: number | null;

		/** The delay before the first probe in seconds. */
		initialDelaySeconds?: number | null;

		/** The length of time between probes in seconds. */
		periodSeconds?: number | null;

		/** The number of successful probes before returning a healthy status. */
		successThreshold?: number | null;

		/** The probe timeout in seconds. */
		timeoutSeconds?: number | null;
	}

	/** The liveness probe requirements. */
	export interface LivenessProbeRequirementsFormProperties {

		/** The number of failures to allow before returning an unhealthy status. */
		failureThreshold: FormControl<number | null | undefined>,

		/** The delay before the first probe in seconds. */
		initialDelaySeconds: FormControl<number | null | undefined>,

		/** The length of time between probes in seconds. */
		periodSeconds: FormControl<number | null | undefined>,

		/** The number of successful probes before returning a healthy status. */
		successThreshold: FormControl<number | null | undefined>,

		/** The probe timeout in seconds. */
		timeoutSeconds: FormControl<number | null | undefined>,
	}
	export function CreateLivenessProbeRequirementsFormGroup() {
		return new FormGroup<LivenessProbeRequirementsFormProperties>({
			failureThreshold: new FormControl<number | null | undefined>(undefined),
			initialDelaySeconds: new FormControl<number | null | undefined>(undefined),
			periodSeconds: new FormControl<number | null | undefined>(undefined),
			successThreshold: new FormControl<number | null | undefined>(undefined),
			timeoutSeconds: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** The Model data collection properties. */
	export interface ModelDataCollection {

		/** Option for enabling/disabling Event Hub. */
		eventHubEnabled?: boolean | null;

		/** Option for enabling/disabling storage. */
		storageEnabled?: boolean | null;
	}

	/** The Model data collection properties. */
	export interface ModelDataCollectionFormProperties {

		/** Option for enabling/disabling Event Hub. */
		eventHubEnabled: FormControl<boolean | null | undefined>,

		/** Option for enabling/disabling storage. */
		storageEnabled: FormControl<boolean | null | undefined>,
	}
	export function CreateModelDataCollectionFormGroup() {
		return new FormGroup<ModelDataCollectionFormProperties>({
			eventHubEnabled: new FormControl<boolean | null | undefined>(undefined),
			storageEnabled: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** The operational state of the Model. */
	export interface ModelOperationalState {

		/** The deployment summary. */
		deploymentSummary?: DeploymentSummary;

		/** The deployment end time. */
		endTime?: string | null;

		/** The deployment start time. */
		startTime?: string | null;
	}

	/** The operational state of the Model. */
	export interface ModelOperationalStateFormProperties {

		/** The deployment end time. */
		endTime: FormControl<string | null | undefined>,

		/** The deployment start time. */
		startTime: FormControl<string | null | undefined>,
	}
	export function CreateModelOperationalStateFormGroup() {
		return new FormGroup<ModelOperationalStateFormProperties>({
			endTime: new FormControl<string | null | undefined>(undefined),
			startTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A paginated list of Assets. */
	export interface PaginatedAssetList {

		/** A continuation link (absolute URI) to the next page of results in the list. */
		nextLink?: string | null;

		/** An array of objects of type Asset. */
		value?: Array<Asset>;
	}

	/** A paginated list of Assets. */
	export interface PaginatedAssetListFormProperties {

		/** A continuation link (absolute URI) to the next page of results in the list. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreatePaginatedAssetListFormGroup() {
		return new FormGroup<PaginatedAssetListFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A paginated list of Models. */
	export interface PaginatedModelList {

		/** A continuation link (absolute URI) to the next page of results in the list. */
		nextLink?: string | null;

		/** An array of objects of type Model. */
		value?: Array<Model>;
	}

	/** A paginated list of Models. */
	export interface PaginatedModelListFormProperties {

		/** A continuation link (absolute URI) to the next page of results in the list. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreatePaginatedModelListFormGroup() {
		return new FormGroup<PaginatedModelListFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A paginated list of ProfileResponses. */
	export interface PaginatedProfileResponseList {

		/** A continuation link (absolute URI) to the next page of results in the list. */
		nextLink?: string | null;

		/** An array of objects of type ProfileResponse. */
		value?: Array<ProfileResponse>;
	}

	/** A paginated list of ProfileResponses. */
	export interface PaginatedProfileResponseListFormProperties {

		/** A continuation link (absolute URI) to the next page of results in the list. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreatePaginatedProfileResponseListFormGroup() {
		return new FormGroup<PaginatedProfileResponseListFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The profile response. */
	export interface ProfileResponse {

		/** The profile creation time (UTC). */
		createdTime?: Date | null;

		/** The profile description. */
		description?: string | null;

		/** The Model Management Service Error object. */
		error?: ModelErrorResponse;

		/** The Image Id. */
		imageId?: string | null;

		/** The input data. */
		inputData?: string | null;

		/** The profile tags dictionary. Tags are mutable. */
		kvTags?: {[id: string]: string };

		/** The profile name. */
		name?: string | null;

		/** The profile run result. */
		profileRunResult?: string | null;

		/** The profiling error logs. */
		profilingErrorLogs?: string | null;

		/** The profile properties dictionary. Properties are immutable. */
		properties?: {[id: string]: string };

		/** Latency associated with the recommended memory/cpu config */
		recommendationLatencyInMs?: number | null;

		/** The recommended CPU allocation. */
		recommendedCpu?: number | null;

		/** The recommended amount of memory to allocate in GB. */
		recommendedMemoryInGB?: number | null;

		/** The state of the profile. */
		state?: string | null;
	}

	/** The profile response. */
	export interface ProfileResponseFormProperties {

		/** The profile creation time (UTC). */
		createdTime: FormControl<Date | null | undefined>,

		/** The profile description. */
		description: FormControl<string | null | undefined>,

		/** The Image Id. */
		imageId: FormControl<string | null | undefined>,

		/** The input data. */
		inputData: FormControl<string | null | undefined>,

		/** The profile tags dictionary. Tags are mutable. */
		kvTags: FormControl<{[id: string]: string } | null | undefined>,

		/** The profile name. */
		name: FormControl<string | null | undefined>,

		/** The profile run result. */
		profileRunResult: FormControl<string | null | undefined>,

		/** The profiling error logs. */
		profilingErrorLogs: FormControl<string | null | undefined>,

		/** The profile properties dictionary. Properties are immutable. */
		properties: FormControl<{[id: string]: string } | null | undefined>,

		/** Latency associated with the recommended memory/cpu config */
		recommendationLatencyInMs: FormControl<number | null | undefined>,

		/** The recommended CPU allocation. */
		recommendedCpu: FormControl<number | null | undefined>,

		/** The recommended amount of memory to allocate in GB. */
		recommendedMemoryInGB: FormControl<number | null | undefined>,

		/** The state of the profile. */
		state: FormControl<string | null | undefined>,
	}
	export function CreateProfileResponseFormGroup() {
		return new FormGroup<ProfileResponseFormProperties>({
			createdTime: new FormControl<Date | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			imageId: new FormControl<string | null | undefined>(undefined),
			inputData: new FormControl<string | null | undefined>(undefined),
			kvTags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			profileRunResult: new FormControl<string | null | undefined>(undefined),
			profilingErrorLogs: new FormControl<string | null | undefined>(undefined),
			properties: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			recommendationLatencyInMs: new FormControl<number | null | undefined>(undefined),
			recommendedCpu: new FormControl<number | null | undefined>(undefined),
			recommendedMemoryInGB: new FormControl<number | null | undefined>(undefined),
			state: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A paginated list of Services. */
	export interface PaginatedServiceList {

		/** A continuation link (absolute URI) to the next page of results in the list. */
		nextLink?: string | null;

		/** An array of objects of type Service. */
		value?: Array<ServiceResponseBase>;
	}

	/** A paginated list of Services. */
	export interface PaginatedServiceListFormProperties {

		/** A continuation link (absolute URI) to the next page of results in the list. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreatePaginatedServiceListFormGroup() {
		return new FormGroup<PaginatedServiceListFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The base service response. The correct inherited response based on computeType will be returned (ex. ACIServiceResponse) */
	export interface ServiceResponseBase {

		/**
		 * The compute environment type for the service.
		 * Required
		 */
		computeType: CreateServiceRequestComputeType;

		/** The time the service was created. */
		createdTime?: Date | null;

		/** The deployment type for the service. */
		deploymentType?: CreateServiceRequestDeploymentType | null;

		/** The service description. */
		description?: string | null;

		/** The Model Management Service Error object. */
		error?: ModelErrorResponse;

		/** The service Id. */
		id?: string | null;

		/** The service tag dictionary. Tags are mutable. */
		kvTags?: {[id: string]: string };

		/** The service name. */
		name?: string | null;

		/** The ID of the latest asynchronous operation for this service. */
		operationId?: string | null;

		/** The service property dictionary. Properties are immutable. */
		properties?: {[id: string]: string };

		/** The current state of the service. */
		state?: ServiceResponseBaseState | null;

		/** The time the service was updated. */
		updatedTime?: Date | null;
	}

	/** The base service response. The correct inherited response based on computeType will be returned (ex. ACIServiceResponse) */
	export interface ServiceResponseBaseFormProperties {

		/**
		 * The compute environment type for the service.
		 * Required
		 */
		computeType: FormControl<CreateServiceRequestComputeType | null | undefined>,

		/** The time the service was created. */
		createdTime: FormControl<Date | null | undefined>,

		/** The deployment type for the service. */
		deploymentType: FormControl<CreateServiceRequestDeploymentType | null | undefined>,

		/** The service description. */
		description: FormControl<string | null | undefined>,

		/** The service Id. */
		id: FormControl<string | null | undefined>,

		/** The service tag dictionary. Tags are mutable. */
		kvTags: FormControl<{[id: string]: string } | null | undefined>,

		/** The service name. */
		name: FormControl<string | null | undefined>,

		/** The ID of the latest asynchronous operation for this service. */
		operationId: FormControl<string | null | undefined>,

		/** The service property dictionary. Properties are immutable. */
		properties: FormControl<{[id: string]: string } | null | undefined>,

		/** The current state of the service. */
		state: FormControl<ServiceResponseBaseState | null | undefined>,

		/** The time the service was updated. */
		updatedTime: FormControl<Date | null | undefined>,
	}
	export function CreateServiceResponseBaseFormGroup() {
		return new FormGroup<ServiceResponseBaseFormProperties>({
			computeType: new FormControl<CreateServiceRequestComputeType | null | undefined>(undefined, [Validators.required]),
			createdTime: new FormControl<Date | null | undefined>(undefined),
			deploymentType: new FormControl<CreateServiceRequestDeploymentType | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			kvTags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			operationId: new FormControl<string | null | undefined>(undefined),
			properties: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			state: new FormControl<ServiceResponseBaseState | null | undefined>(undefined),
			updatedTime: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export enum ServiceResponseBaseState { Transitioning = 'Transitioning', Healthy = 'Healthy', Unhealthy = 'Unhealthy', Failed = 'Failed' }


	/** The request for creating a profile. */
	export interface ProfileRequestBase {

		/** The profile description. */
		description?: string | null;

		/** The profile input data. */
		inputData?: string | null;

		/** The tags dictionary. */
		kvTags?: {[id: string]: string };

		/**
		 * The profile name.
		 * Required
		 */
		name: string;

		/** The properties dictionary. */
		properties?: {[id: string]: string };
	}

	/** The request for creating a profile. */
	export interface ProfileRequestBaseFormProperties {

		/** The profile description. */
		description: FormControl<string | null | undefined>,

		/** The profile input data. */
		inputData: FormControl<string | null | undefined>,

		/** The tags dictionary. */
		kvTags: FormControl<{[id: string]: string } | null | undefined>,

		/**
		 * The profile name.
		 * Required
		 */
		name: FormControl<string | null | undefined>,

		/** The properties dictionary. */
		properties: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateProfileRequestBaseFormGroup() {
		return new FormGroup<ProfileRequestBaseFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			inputData: new FormControl<string | null | undefined>(undefined),
			kvTags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			properties: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}

	export interface RegenerateServiceKeysRequest {

		/** Specification for which type of key to generate. */
		keyType?: RegenerateServiceKeysRequestKeyType;

		/** The value the key is set to. */
		keyValue?: string | null;
	}
	export interface RegenerateServiceKeysRequestFormProperties {

		/** Specification for which type of key to generate. */
		keyType: FormControl<RegenerateServiceKeysRequestKeyType | null | undefined>,

		/** The value the key is set to. */
		keyValue: FormControl<string | null | undefined>,
	}
	export function CreateRegenerateServiceKeysRequestFormGroup() {
		return new FormGroup<RegenerateServiceKeysRequestFormProperties>({
			keyType: new FormControl<RegenerateServiceKeysRequestKeyType | null | undefined>(undefined),
			keyValue: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum RegenerateServiceKeysRequestKeyType { Primary = 'Primary', Secondary = 'Secondary' }


	/** Contains registry information. */
	export interface RegistryInfo {

		/**
		 * The location.
		 * Required
		 */
		location: string;

		/**
		 * The password.
		 * Required
		 */
		password: string;

		/**
		 * The user.
		 * Required
		 */
		user: string;
	}

	/** Contains registry information. */
	export interface RegistryInfoFormProperties {

		/**
		 * The location.
		 * Required
		 */
		location: FormControl<string | null | undefined>,

		/**
		 * The password.
		 * Required
		 */
		password: FormControl<string | null | undefined>,

		/**
		 * The user.
		 * Required
		 */
		user: FormControl<string | null | undefined>,
	}
	export function CreateRegistryInfoFormGroup() {
		return new FormGroup<RegistryInfoFormProperties>({
			location: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			password: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			user: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The target runtime. */
	export interface TargetRuntime {

		/** The target operating system. */
		osType?: TargetRuntimeOsType | null;

		/** The properties dictionary. */
		properties?: {[id: string]: string };

		/** The target runtime type. */
		runtimeType?: TargetRuntimeRuntimeType | null;

		/** The target architecture. */
		targetArchitecture?: TargetRuntimeTargetArchitecture | null;
	}

	/** The target runtime. */
	export interface TargetRuntimeFormProperties {

		/** The target operating system. */
		osType: FormControl<TargetRuntimeOsType | null | undefined>,

		/** The properties dictionary. */
		properties: FormControl<{[id: string]: string } | null | undefined>,

		/** The target runtime type. */
		runtimeType: FormControl<TargetRuntimeRuntimeType | null | undefined>,

		/** The target architecture. */
		targetArchitecture: FormControl<TargetRuntimeTargetArchitecture | null | undefined>,
	}
	export function CreateTargetRuntimeFormGroup() {
		return new FormGroup<TargetRuntimeFormProperties>({
			osType: new FormControl<TargetRuntimeOsType | null | undefined>(undefined),
			properties: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			runtimeType: new FormControl<TargetRuntimeRuntimeType | null | undefined>(undefined),
			targetArchitecture: new FormControl<TargetRuntimeTargetArchitecture | null | undefined>(undefined),
		});

	}

	export enum TargetRuntimeOsType { Linux = 'Linux', Windows = 'Windows' }

	export enum TargetRuntimeRuntimeType { SparkPython = 'SparkPython', Tlc37 = 'Tlc37', Tlc38 = 'Tlc38', Tlc310 = 'Tlc310', Python = 'Python', PythonSlim = 'PythonSlim', PythonCustom = 'PythonCustom' }

	export enum TargetRuntimeTargetArchitecture { Amd64 = 'Amd64', Arm32v7 = 'Arm32v7' }


	/**
	 * The response for an unsupported Service
	 * Defines the basic service properties
	 */
	export interface UnknownServiceResponse {
	}

	/**
	 * The response for an unsupported Service
	 * Defines the basic service properties
	 */
	export interface UnknownServiceResponseFormProperties {
	}
	export function CreateUnknownServiceResponseFormGroup() {
		return new FormGroup<UnknownServiceResponseFormProperties>({
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Query the list of Assets in a workspace.
		 * If no filter is passed, the query lists all the Assets in the given workspace. The returned list is paginated and the count of items in each page is an optional parameter.
		 * Get modelmanagement/v1.0/subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/Microsoft.MachineLearningServices/workspaces/{workspace}/assets
		 * @param {string} subscriptionId The Azure Subscription ID.
		 * @param {string} resourceGroup The Name of the resource group in which the workspace is located.
		 * @param {string} workspace The name of the workspace.
		 * @param {string} runId The run Id associated with the Assets.
		 * @param {string} name The object name.
		 * @param {number} count The number of items to retrieve in a page.
		 * @param {string} skipToken The continuation token to retrieve the next page.
		 * @param {string} tags A set of tags with which to filter the returned models.
		 *             It is a comma separated string of tags key or tags key=value
		 *             Example: tagKey1,tagKey2,tagKey3=value3
		 * @param {string} properties A set of properties with which to filter the returned models.
		 *             It is a comma separated string of properties key and/or properties key=value
		 *             Example: propKey1,propKey2,propKey3=value3
		 * @param {Assets_ListQueryOrderby} orderby An option for specifying how to order the list.
		 * @return {PaginatedAssetList} Success
		 */
		Assets_ListQuery(subscriptionId: string, resourceGroup: string, workspace: string, runId: string | null | undefined, name: string | null | undefined, count: number | null | undefined, skipToken: string | null | undefined, tags: string | null | undefined, properties: string | null | undefined, orderby: Assets_ListQueryOrderby | null | undefined): Observable<PaginatedAssetList> {
			return this.http.get<PaginatedAssetList>(this.baseUri + 'modelmanagement/v1.0/subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroup == null ? '' : encodeURIComponent(resourceGroup)) + '/providers/Microsoft.MachineLearningServices/workspaces/' + (workspace == null ? '' : encodeURIComponent(workspace)) + '/assets&runId=' + (runId == null ? '' : encodeURIComponent(runId)) + '&name=' + (name == null ? '' : encodeURIComponent(name)) + '&count=' + count + '&skipToken=' + (skipToken == null ? '' : encodeURIComponent(skipToken)) + '&tags=' + (tags == null ? '' : encodeURIComponent(tags)) + '&properties=' + (properties == null ? '' : encodeURIComponent(properties)) + '&orderby=' + orderby, {});
		}

		/**
		 * Create an Asset.
		 * Create an Asset from the provided payload.
		 * Post modelmanagement/v1.0/subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/Microsoft.MachineLearningServices/workspaces/{workspace}/assets
		 * @param {string} subscriptionId The Azure Subscription ID.
		 * @param {string} resourceGroup The Name of the resource group in which the workspace is located.
		 * @param {string} workspace The name of the workspace.
		 * @param {Asset} requestBody The Asset to be created.
		 * @return {Asset} Success
		 */
		Assets_Create(subscriptionId: string, resourceGroup: string, workspace: string, requestBody: Asset): Observable<Asset> {
			return this.http.post<Asset>(this.baseUri + 'modelmanagement/v1.0/subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroup == null ? '' : encodeURIComponent(resourceGroup)) + '/providers/Microsoft.MachineLearningServices/workspaces/' + (workspace == null ? '' : encodeURIComponent(workspace)) + '/assets', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Get an Asset.
		 * Get an Asset by Id.
		 * Get modelmanagement/v1.0/subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/Microsoft.MachineLearningServices/workspaces/{workspace}/assets/{id}
		 * @param {string} subscriptionId The Azure Subscription ID.
		 * @param {string} resourceGroup The Name of the resource group in which the workspace is located.
		 * @param {string} workspace The name of the workspace.
		 * @param {string} id The Asset Id.
		 * @return {Asset} Success
		 */
		Assets_QueryById(subscriptionId: string, resourceGroup: string, workspace: string, id: string): Observable<Asset> {
			return this.http.get<Asset>(this.baseUri + 'modelmanagement/v1.0/subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroup == null ? '' : encodeURIComponent(resourceGroup)) + '/providers/Microsoft.MachineLearningServices/workspaces/' + (workspace == null ? '' : encodeURIComponent(workspace)) + '/assets/' + (id == null ? '' : encodeURIComponent(id)), {});
		}

		/**
		 * Delete an Asset.
		 * Delete the specified Asset.
		 * Delete modelmanagement/v1.0/subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/Microsoft.MachineLearningServices/workspaces/{workspace}/assets/{id}
		 * @param {string} subscriptionId The Azure Subscription ID.
		 * @param {string} resourceGroup The Name of the resource group in which the workspace is located.
		 * @param {string} workspace The name of the workspace.
		 * @param {string} id The Id of the Asset to delete.
		 * @return {void} The resource exists and was deleted successfully.
		 */
		Assets_Delete(subscriptionId: string, resourceGroup: string, workspace: string, id: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'modelmanagement/v1.0/subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroup == null ? '' : encodeURIComponent(resourceGroup)) + '/providers/Microsoft.MachineLearningServices/workspaces/' + (workspace == null ? '' : encodeURIComponent(workspace)) + '/assets/' + (id == null ? '' : encodeURIComponent(id)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get a list of Image Profiles.
		 * If no filter is passed, the query lists all Profiles for the Image. The returned list is paginated and the count of items in each page is an optional parameter.
		 * Get modelmanagement/v1.0/subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/Microsoft.MachineLearningServices/workspaces/{workspace}/images/{imageId}/profiles
		 * @param {string} subscriptionId The Azure Subscription ID.
		 * @param {string} resourceGroup The Name of the resource group in which the workspace is located.
		 * @param {string} workspace The name of the workspace.
		 * @param {string} imageId The Image Id.
		 * @param {string} name The Profile name.
		 * @param {string} description The Profile description.
		 * @param {string} tags A set of tags with which to filter the returned models.
		 *             It is a comma separated string of tags key or tags key=value
		 *             Example: tagKey1,tagKey2,tagKey3=value3
		 * @param {string} properties A set of properties with which to filter the returned models.
		 *             It is a comma separated string of properties key and/or properties key=value
		 *             Example: propKey1,propKey2,propKey3=value3
		 * @param {number} count The number of items to retrieve in a page.
		 * @param {string} skipToken The continuation token to retrieve the next page.
		 * @param {Assets_ListQueryOrderby} orderBy The option to order the response.
		 * @return {PaginatedProfileResponseList} Success
		 */
		Profiles_ListQuery(subscriptionId: string, resourceGroup: string, workspace: string, imageId: string, name: string | null | undefined, description: string | null | undefined, tags: string | null | undefined, properties: string | null | undefined, count: number | null | undefined, skipToken: string | null | undefined, orderBy: Assets_ListQueryOrderby | null | undefined): Observable<PaginatedProfileResponseList> {
			return this.http.get<PaginatedProfileResponseList>(this.baseUri + 'modelmanagement/v1.0/subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroup == null ? '' : encodeURIComponent(resourceGroup)) + '/providers/Microsoft.MachineLearningServices/workspaces/' + (workspace == null ? '' : encodeURIComponent(workspace)) + '/images/' + (imageId == null ? '' : encodeURIComponent(imageId)) + '/profiles&name=' + (name == null ? '' : encodeURIComponent(name)) + '&description=' + (description == null ? '' : encodeURIComponent(description)) + '&tags=' + (tags == null ? '' : encodeURIComponent(tags)) + '&properties=' + (properties == null ? '' : encodeURIComponent(properties)) + '&count=' + count + '&skipToken=' + (skipToken == null ? '' : encodeURIComponent(skipToken)) + '&orderBy=' + orderBy, {});
		}

		/**
		 * Create a Profile.
		 * Create a Profile for an Image.
		 * Post modelmanagement/v1.0/subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/Microsoft.MachineLearningServices/workspaces/{workspace}/images/{imageId}/profiles
		 * @param {string} subscriptionId The Azure Subscription ID.
		 * @param {string} resourceGroup The Name of the resource group in which the workspace is located.
		 * @param {string} workspace The name of the workspace.
		 * @param {string} imageId The Image Id.
		 * @param {ProfileRequestBase} requestBody The payload that is used to create the Profile.
		 * @return {void} 
		 */
		Profiles_Create(subscriptionId: string, resourceGroup: string, workspace: string, imageId: string, requestBody: ProfileRequestBase): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'modelmanagement/v1.0/subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroup == null ? '' : encodeURIComponent(resourceGroup)) + '/providers/Microsoft.MachineLearningServices/workspaces/' + (workspace == null ? '' : encodeURIComponent(workspace)) + '/images/' + (imageId == null ? '' : encodeURIComponent(imageId)) + '/profiles', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get a Profile.
		 * Get the Profile for an Image.
		 * Get modelmanagement/v1.0/subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/Microsoft.MachineLearningServices/workspaces/{workspace}/images/{imageId}/profiles/{id}
		 * @param {string} subscriptionId The Azure Subscription ID.
		 * @param {string} resourceGroup The Name of the resource group in which the workspace is located.
		 * @param {string} workspace The name of the workspace.
		 * @param {string} imageId The Image Id.
		 * @param {string} id The Profile Id.
		 * @return {ProfileResponse} Success
		 */
		Profiles_QueryById(subscriptionId: string, resourceGroup: string, workspace: string, imageId: string, id: string): Observable<ProfileResponse> {
			return this.http.get<ProfileResponse>(this.baseUri + 'modelmanagement/v1.0/subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroup == null ? '' : encodeURIComponent(resourceGroup)) + '/providers/Microsoft.MachineLearningServices/workspaces/' + (workspace == null ? '' : encodeURIComponent(workspace)) + '/images/' + (imageId == null ? '' : encodeURIComponent(imageId)) + '/profiles/' + (id == null ? '' : encodeURIComponent(id)), {});
		}

		/**
		 * Query the list of Models in a workspace.
		 * The result list can be filtered using tag and name. If no filter is passed, the query lists all the Models in the given workspace. The returned list is paginated and the count of items in each page is an optional parameter.
		 * Get modelmanagement/v1.0/subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/Microsoft.MachineLearningServices/workspaces/{workspace}/models
		 * @param {string} subscriptionId The Azure Subscription ID.
		 * @param {string} resourceGroup The Name of the resource group in which the workspace is located.
		 * @param {string} workspace The name of the workspace.
		 * @param {string} name The object name.
		 * @param {string} framework The framework.
		 * @param {string} description The object description.
		 * @param {number} count The number of items to retrieve in a page.
		 * @param {string} skipToken The continuation token to retrieve the next page.
		 * @param {string} tags A set of tags with which to filter the returned models.
		 *             It is a comma separated string of tags key or tags key=value
		 *             Example: tagKey1,tagKey2,tagKey3=value3
		 * @param {string} properties A set of properties with which to filter the returned models.
		 *             It is a comma separated string of properties key and/or properties key=value
		 *             Example: propKey1,propKey2,propKey3=value3
		 * @param {string} runId The runId which created the model.
		 * @param {Assets_ListQueryOrderby} orderBy An option to specify how the models are ordered in the response.
		 * @return {PaginatedModelList} Success
		 */
		MLModels_ListQuery(subscriptionId: string, resourceGroup: string, workspace: string, name: string | null | undefined, framework: string | null | undefined, description: string | null | undefined, count: number | null | undefined, skipToken: string | null | undefined, tags: string | null | undefined, properties: string | null | undefined, runId: string | null | undefined, orderBy: Assets_ListQueryOrderby | null | undefined): Observable<PaginatedModelList> {
			return this.http.get<PaginatedModelList>(this.baseUri + 'modelmanagement/v1.0/subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroup == null ? '' : encodeURIComponent(resourceGroup)) + '/providers/Microsoft.MachineLearningServices/workspaces/' + (workspace == null ? '' : encodeURIComponent(workspace)) + '/models&name=' + (name == null ? '' : encodeURIComponent(name)) + '&framework=' + (framework == null ? '' : encodeURIComponent(framework)) + '&description=' + (description == null ? '' : encodeURIComponent(description)) + '&count=' + count + '&skipToken=' + (skipToken == null ? '' : encodeURIComponent(skipToken)) + '&tags=' + (tags == null ? '' : encodeURIComponent(tags)) + '&properties=' + (properties == null ? '' : encodeURIComponent(properties)) + '&runId=' + (runId == null ? '' : encodeURIComponent(runId)) + '&orderBy=' + orderBy, {});
		}

		/**
		 * Register a model.
		 * Register the model provided.
		 * Post modelmanagement/v1.0/subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/Microsoft.MachineLearningServices/workspaces/{workspace}/models
		 * @param {string} subscriptionId The Azure Subscription ID.
		 * @param {string} resourceGroup The Name of the resource group in which the workspace is located.
		 * @param {string} workspace The name of the workspace.
		 * @param {Model} requestBody The payload that is used to register the model.
		 * @return {Model} The model registration was successful.
		 */
		MLModels_Register(subscriptionId: string, resourceGroup: string, workspace: string, requestBody: Model): Observable<Model> {
			return this.http.post<Model>(this.baseUri + 'modelmanagement/v1.0/subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroup == null ? '' : encodeURIComponent(resourceGroup)) + '/providers/Microsoft.MachineLearningServices/workspaces/' + (workspace == null ? '' : encodeURIComponent(workspace)) + '/models', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets a model.
		 * Gets a model by model id.
		 * Get modelmanagement/v1.0/subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/Microsoft.MachineLearningServices/workspaces/{workspace}/models/{id}
		 * @param {string} subscriptionId The Azure Subscription ID.
		 * @param {string} resourceGroup The Name of the resource group in which the workspace is located.
		 * @param {string} workspace The name of the workspace.
		 * @param {string} id The model id.
		 * @return {Model} Success
		 */
		MLModels_QueryById(subscriptionId: string, resourceGroup: string, workspace: string, id: string): Observable<Model> {
			return this.http.get<Model>(this.baseUri + 'modelmanagement/v1.0/subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroup == null ? '' : encodeURIComponent(resourceGroup)) + '/providers/Microsoft.MachineLearningServices/workspaces/' + (workspace == null ? '' : encodeURIComponent(workspace)) + '/models/' + (id == null ? '' : encodeURIComponent(id)), {});
		}

		/**
		 * Delete the specified Model.
		 * Deletes a model if it exists.
		 * Delete modelmanagement/v1.0/subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/Microsoft.MachineLearningServices/workspaces/{workspace}/models/{id}
		 * @param {string} subscriptionId The Azure Subscription ID.
		 * @param {string} resourceGroup The Name of the resource group in which the workspace is located.
		 * @param {string} workspace The name of the workspace.
		 * @param {string} id The model id.
		 * @return {void} The resource exists and was deleted successfully.
		 */
		MLModels_Delete(subscriptionId: string, resourceGroup: string, workspace: string, id: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'modelmanagement/v1.0/subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroup == null ? '' : encodeURIComponent(resourceGroup)) + '/providers/Microsoft.MachineLearningServices/workspaces/' + (workspace == null ? '' : encodeURIComponent(workspace)) + '/models/' + (id == null ? '' : encodeURIComponent(id)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieve the metrics for a Model.
		 * The operational events collected for the Model are returned.
		 * Get modelmanagement/v1.0/subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/Microsoft.MachineLearningServices/workspaces/{workspace}/models/{id}/metrics
		 * @param {string} subscriptionId The Azure Subscription ID.
		 * @param {string} resourceGroup The Name of the resource group in which the workspace is located.
		 * @param {string} workspace The name of the workspace.
		 * @param {string} id The Model Id.
		 * @param {string} startDate The start date from which to retrieve metrics, ISO 8601 literal format.
		 * @param {string} endDate The end date from which to retrieve metrics, ISO 8601 literal format.
		 * @return {ModelOperationalState} Success
		 */
		MLModels_GetMetrics(subscriptionId: string, resourceGroup: string, workspace: string, id: string, startDate: string | null | undefined, endDate: string | null | undefined): Observable<ModelOperationalState> {
			return this.http.get<ModelOperationalState>(this.baseUri + 'modelmanagement/v1.0/subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroup == null ? '' : encodeURIComponent(resourceGroup)) + '/providers/Microsoft.MachineLearningServices/workspaces/' + (workspace == null ? '' : encodeURIComponent(workspace)) + '/models/' + (id == null ? '' : encodeURIComponent(id)) + '/metrics&startDate=' + (startDate == null ? '' : encodeURIComponent(startDate)) + '&endDate=' + (endDate == null ? '' : encodeURIComponent(endDate)), {});
		}

		/**
		 * Get the status of an async operation.
		 * Get the status of an async operation by operation id.
		 * Get modelmanagement/v1.0/subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/Microsoft.MachineLearningServices/workspaces/{workspace}/operations/{id}
		 * @param {string} subscriptionId The Azure Subscription ID.
		 * @param {string} resourceGroup The Name of the resource group in which the workspace is located.
		 * @param {string} workspace The name of the workspace.
		 * @param {string} id The operation id.
		 * @return {AsyncOperationStatus} Success
		 */
		Operations_Get(subscriptionId: string, resourceGroup: string, workspace: string, id: string): Observable<AsyncOperationStatus> {
			return this.http.get<AsyncOperationStatus>(this.baseUri + 'modelmanagement/v1.0/subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroup == null ? '' : encodeURIComponent(resourceGroup)) + '/providers/Microsoft.MachineLearningServices/workspaces/' + (workspace == null ? '' : encodeURIComponent(workspace)) + '/operations/' + (id == null ? '' : encodeURIComponent(id)), {});
		}

		/**
		 * Query the list of Services in a Workspace.
		 * If no filter is passed, the query lists all Services in the Workspace. The returned list is paginated and the count of item in each page is an optional parameter.
		 * Get modelmanagement/v1.0/subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/Microsoft.MachineLearningServices/workspaces/{workspace}/services
		 * @param {string} subscriptionId The Azure Subscription ID.
		 * @param {string} resourceGroup The Name of the resource group in which the workspace is located.
		 * @param {string} workspace The name of the workspace.
		 * @param {string} imageId The Image Id.
		 * @param {string} imageName The Image name.
		 * @param {string} modelId The Model Id.
		 * @param {string} modelName The Model name.
		 * @param {string} name The object name.
		 * @param {number} count The number of items to retrieve in a page.
		 * @param {string} computeType The compute environment type.
		 * @param {string} skipToken The continuation token to retrieve the next page.
		 * @param {string} tags A set of tags with which to filter the returned models.
		 *             It is a comma separated string of tags key or tags key=value
		 *             Example: tagKey1,tagKey2,tagKey3=value3
		 * @param {string} properties A set of properties with which to filter the returned models.
		 *             It is a comma separated string of properties key and/or properties key=value
		 *             Example: propKey1,propKey2,propKey3=value3
		 * @param {boolean} expand Set to True to include Model details.
		 * @param {Assets_ListQueryOrderby} orderby The option to order the response.
		 * @return {PaginatedServiceList} Success
		 */
		Services_ListQuery(subscriptionId: string, resourceGroup: string, workspace: string, imageId: string | null | undefined, imageName: string | null | undefined, modelId: string | null | undefined, modelName: string | null | undefined, name: string | null | undefined, count: number | null | undefined, computeType: string | null | undefined, skipToken: string | null | undefined, tags: string | null | undefined, properties: string | null | undefined, expand: boolean | null | undefined, orderby: Assets_ListQueryOrderby | null | undefined): Observable<PaginatedServiceList> {
			return this.http.get<PaginatedServiceList>(this.baseUri + 'modelmanagement/v1.0/subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroup == null ? '' : encodeURIComponent(resourceGroup)) + '/providers/Microsoft.MachineLearningServices/workspaces/' + (workspace == null ? '' : encodeURIComponent(workspace)) + '/services&imageId=' + (imageId == null ? '' : encodeURIComponent(imageId)) + '&imageName=' + (imageName == null ? '' : encodeURIComponent(imageName)) + '&modelId=' + (modelId == null ? '' : encodeURIComponent(modelId)) + '&modelName=' + (modelName == null ? '' : encodeURIComponent(modelName)) + '&name=' + (name == null ? '' : encodeURIComponent(name)) + '&count=' + count + '&computeType=' + (computeType == null ? '' : encodeURIComponent(computeType)) + '&skipToken=' + (skipToken == null ? '' : encodeURIComponent(skipToken)) + '&tags=' + (tags == null ? '' : encodeURIComponent(tags)) + '&properties=' + (properties == null ? '' : encodeURIComponent(properties)) + '&expand=' + expand + '&orderby=' + orderby, {});
		}

		/**
		 * Create a Service.
		 * Create a Service with the specified payload.
		 * Post modelmanagement/v1.0/subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/Microsoft.MachineLearningServices/workspaces/{workspace}/services
		 * @param {string} subscriptionId The Azure Subscription ID.
		 * @param {string} resourceGroup The Name of the resource group in which the workspace is located.
		 * @param {string} workspace The name of the workspace.
		 * @param {CreateServiceRequest} requestBody The payload that is used to create the Service.
		 * @return {void} 
		 */
		Services_Create(subscriptionId: string, resourceGroup: string, workspace: string, requestBody: CreateServiceRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'modelmanagement/v1.0/subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroup == null ? '' : encodeURIComponent(resourceGroup)) + '/providers/Microsoft.MachineLearningServices/workspaces/' + (workspace == null ? '' : encodeURIComponent(workspace)) + '/services', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get a Service.
		 * Get a Service by Id.
		 * Get modelmanagement/v1.0/subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/Microsoft.MachineLearningServices/workspaces/{workspace}/services/{id}
		 * @param {string} subscriptionId The Azure Subscription ID.
		 * @param {string} resourceGroup The Name of the resource group in which the workspace is located.
		 * @param {string} workspace The name of the workspace.
		 * @param {string} id The Service Id.
		 * @param {boolean} expand Set to True to include Model details.
		 * @return {ServiceResponseBase} Success
		 */
		Services_QueryById(subscriptionId: string, resourceGroup: string, workspace: string, id: string, expand: boolean | null | undefined): Observable<ServiceResponseBase> {
			return this.http.get<ServiceResponseBase>(this.baseUri + 'modelmanagement/v1.0/subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroup == null ? '' : encodeURIComponent(resourceGroup)) + '/providers/Microsoft.MachineLearningServices/workspaces/' + (workspace == null ? '' : encodeURIComponent(workspace)) + '/services/' + (id == null ? '' : encodeURIComponent(id)) + '&expand=' + expand, {});
		}

		/**
		 * Delete a Service.
		 * Delete a specific Service.
		 * Delete modelmanagement/v1.0/subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/Microsoft.MachineLearningServices/workspaces/{workspace}/services/{id}
		 * @param {string} subscriptionId The Azure Subscription ID.
		 * @param {string} resourceGroup The Name of the resource group in which the workspace is located.
		 * @param {string} workspace The name of the workspace.
		 * @param {string} id The Service Id.
		 * @return {void} The resource exists and was deleted successfully.
		 */
		Services_Delete(subscriptionId: string, resourceGroup: string, workspace: string, id: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'modelmanagement/v1.0/subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroup == null ? '' : encodeURIComponent(resourceGroup)) + '/providers/Microsoft.MachineLearningServices/workspaces/' + (workspace == null ? '' : encodeURIComponent(workspace)) + '/services/' + (id == null ? '' : encodeURIComponent(id)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Lists Service keys.
		 * Gets a list of Service keys.
		 * Post modelmanagement/v1.0/subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/Microsoft.MachineLearningServices/workspaces/{workspace}/services/{id}/listkeys
		 * @param {string} subscriptionId The Azure Subscription ID.
		 * @param {string} resourceGroup The Name of the resource group in which the workspace is located.
		 * @param {string} workspace The name of the workspace.
		 * @param {string} id The Service Id.
		 * @return {AuthKeys} Success
		 */
		Services_ListServiceKeys(subscriptionId: string, resourceGroup: string, workspace: string, id: string): Observable<AuthKeys> {
			return this.http.post<AuthKeys>(this.baseUri + 'modelmanagement/v1.0/subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroup == null ? '' : encodeURIComponent(resourceGroup)) + '/providers/Microsoft.MachineLearningServices/workspaces/' + (workspace == null ? '' : encodeURIComponent(workspace)) + '/services/' + (id == null ? '' : encodeURIComponent(id)) + '/listkeys', null, {});
		}

		/**
		 * Regenerate Service Keys.
		 * Regenerate and return the Service keys.
		 * Post modelmanagement/v1.0/subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/Microsoft.MachineLearningServices/workspaces/{workspace}/services/{id}/regenerateKeys
		 * @param {string} subscriptionId The Azure Subscription ID.
		 * @param {string} resourceGroup The Name of the resource group in which the workspace is located.
		 * @param {string} workspace The name of the workspace.
		 * @param {string} id The Service Id.
		 * @param {RegenerateServiceKeysRequest} requestBody The payload that is used to regenerate keys.
		 * @return {AuthKeys} Success
		 */
		Services_RegenerateServiceKeys(subscriptionId: string, resourceGroup: string, workspace: string, id: string, requestBody: RegenerateServiceKeysRequest): Observable<AuthKeys> {
			return this.http.post<AuthKeys>(this.baseUri + 'modelmanagement/v1.0/subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroup == null ? '' : encodeURIComponent(resourceGroup)) + '/providers/Microsoft.MachineLearningServices/workspaces/' + (workspace == null ? '' : encodeURIComponent(workspace)) + '/services/' + (id == null ? '' : encodeURIComponent(id)) + '/regenerateKeys', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Generate Service Access Token.
		 * Gets access token that can be used for calling service.
		 * Post modelmanagement/v1.0/subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/Microsoft.MachineLearningServices/workspaces/{workspace}/services/{id}/token
		 * @param {string} subscriptionId The Azure Subscription ID.
		 * @param {string} resourceGroup The Name of the resource group in which the workspace is located.
		 * @param {string} workspace The name of the workspace.
		 * @param {string} id The Service Id.
		 * @return {void} 
		 */
		Services_GetServiceToken(subscriptionId: string, resourceGroup: string, workspace: string, id: string): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'modelmanagement/v1.0/subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroup == null ? '' : encodeURIComponent(resourceGroup)) + '/providers/Microsoft.MachineLearningServices/workspaces/' + (workspace == null ? '' : encodeURIComponent(workspace)) + '/services/' + (id == null ? '' : encodeURIComponent(id)) + '/token', null, { observe: 'response', responseType: 'text' });
		}
	}

	export enum Assets_ListQueryOrderby { CreatedAtDesc = 'CreatedAtDesc', CreatedAtAsc = 'CreatedAtAsc', UpdatedAtDesc = 'UpdatedAtDesc', UpdatedAtAsc = 'UpdatedAtAsc' }

}

