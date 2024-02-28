import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
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


	/** A class for managing DataReferenceConfiguration. */
	export interface DataReferenceConfiguration {

		/** The name of the data store. */
		dataStoreName?: string | null;

		/** Operation on the datastore, mount, download, upload. */
		mode?: DataReferenceConfigurationMode | null;

		/** Whether to overwrite the data if existing. */
		overwrite?: boolean | null;

		/** The path on the compute target. */
		pathOnCompute?: string | null;

		/** Relative path on the datastore. */
		pathOnDataStore?: string | null;
	}

	/** A class for managing DataReferenceConfiguration. */
	export interface DataReferenceConfigurationFormProperties {

		/** The name of the data store. */
		dataStoreName: FormControl<string | null | undefined>,

		/** Operation on the datastore, mount, download, upload. */
		mode: FormControl<DataReferenceConfigurationMode | null | undefined>,

		/** Whether to overwrite the data if existing. */
		overwrite: FormControl<boolean | null | undefined>,

		/** The path on the compute target. */
		pathOnCompute: FormControl<string | null | undefined>,

		/** Relative path on the datastore. */
		pathOnDataStore: FormControl<string | null | undefined>,
	}
	export function CreateDataReferenceConfigurationFormGroup() {
		return new FormGroup<DataReferenceConfigurationFormProperties>({
			dataStoreName: new FormControl<string | null | undefined>(undefined),
			mode: new FormControl<DataReferenceConfigurationMode | null | undefined>(undefined),
			overwrite: new FormControl<boolean | null | undefined>(undefined),
			pathOnCompute: new FormControl<string | null | undefined>(undefined),
			pathOnDataStore: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum DataReferenceConfigurationMode { Mount = 'Mount', Download = 'Download', Upload = 'Upload' }

	export interface DockerSection {

		/** Extra arguments to the Docker run command. */
		arguments?: Array<string>;

		/** Base Dockerfile used for Docker-based runs. Mutually exclusive with BaseImage. */
		baseDockerfile?: string | null;

		/** Base image used for Docker-based runs. Mutually exclusive with BaseDockerfile. */
		baseImage?: string | null;
		baseImageRegistry?: ContainerRegistry;

		/** Set true to perform this run inside a Docker container. */
		enabled?: boolean | null;

		/** Set false to disable AzureML's usage of the Docker shared volumes feature to work around bugs in certain versions of Docker for Windows. */
		sharedVolumes?: boolean | null;
	}
	export interface DockerSectionFormProperties {

		/** Base Dockerfile used for Docker-based runs. Mutually exclusive with BaseImage. */
		baseDockerfile: FormControl<string | null | undefined>,

		/** Base image used for Docker-based runs. Mutually exclusive with BaseDockerfile. */
		baseImage: FormControl<string | null | undefined>,

		/** Set true to perform this run inside a Docker container. */
		enabled: FormControl<boolean | null | undefined>,

		/** Set false to disable AzureML's usage of the Docker shared volumes feature to work around bugs in certain versions of Docker for Windows. */
		sharedVolumes: FormControl<boolean | null | undefined>,
	}
	export function CreateDockerSectionFormGroup() {
		return new FormGroup<DockerSectionFormProperties>({
			baseDockerfile: new FormControl<string | null | undefined>(undefined),
			baseImage: new FormControl<string | null | undefined>(undefined),
			enabled: new FormControl<boolean | null | undefined>(undefined),
			sharedVolumes: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface EnvironmentDefinition {
		docker?: DockerSection;

		/** Definition of environment variables to be defined in the environment. */
		environmentVariables?: {[id: string]: string };

		/** The inferencing stack version added to the image. To avoid adding an inferencing stack, do not set this value. Valid values: "latest". */
		inferencingStackVersion?: string | null;

		/** The name of the environment. */
		name?: string | null;
		python?: PythonSection;
		spark?: SparkSection;

		/** The environment version. */
		version?: string | null;
	}
	export interface EnvironmentDefinitionFormProperties {

		/** Definition of environment variables to be defined in the environment. */
		environmentVariables: FormControl<{[id: string]: string } | null | undefined>,

		/** The inferencing stack version added to the image. To avoid adding an inferencing stack, do not set this value. Valid values: "latest". */
		inferencingStackVersion: FormControl<string | null | undefined>,

		/** The name of the environment. */
		name: FormControl<string | null | undefined>,

		/** The environment version. */
		version: FormControl<string | null | undefined>,
	}
	export function CreateEnvironmentDefinitionFormGroup() {
		return new FormGroup<EnvironmentDefinitionFormProperties>({
			environmentVariables: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			inferencingStackVersion: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			version: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PythonSection {
		baseCondaEnvironment?: string | null;
		condaDependencies?: string | null;

		/** The python interpreter path. This is only used when user_managed_dependencies=True. */
		interpreterPath?: string | null;

		/** True means that AzureML reuses an existing python environment; False means that AzureML will create a python environment based on the Conda dependencies specification. */
		userManagedDependencies?: boolean | null;
	}
	export interface PythonSectionFormProperties {
		baseCondaEnvironment: FormControl<string | null | undefined>,
		condaDependencies: FormControl<string | null | undefined>,

		/** The python interpreter path. This is only used when user_managed_dependencies=True. */
		interpreterPath: FormControl<string | null | undefined>,

		/** True means that AzureML reuses an existing python environment; False means that AzureML will create a python environment based on the Conda dependencies specification. */
		userManagedDependencies: FormControl<boolean | null | undefined>,
	}
	export function CreatePythonSectionFormGroup() {
		return new FormGroup<PythonSectionFormProperties>({
			baseCondaEnvironment: new FormControl<string | null | undefined>(undefined),
			condaDependencies: new FormControl<string | null | undefined>(undefined),
			interpreterPath: new FormControl<string | null | undefined>(undefined),
			userManagedDependencies: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface SparkSection {

		/** The Spark packages to use. */
		packages?: Array<SparkMavenPackage>;

		/** Whether to precache the packages. */
		precachePackages?: boolean | null;

		/** The list of spark repositories. */
		repositories?: Array<string>;
	}
	export interface SparkSectionFormProperties {

		/** Whether to precache the packages. */
		precachePackages: FormControl<boolean | null | undefined>,
	}
	export function CreateSparkSectionFormGroup() {
		return new FormGroup<SparkSectionFormProperties>({
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


	/** The error response. */
	export interface ErrorResponse {

		/** Dictionary containing correlation details for the error. */
		correlation?: {[id: string]: string };

		/** The hosting environment. */
		environment?: string | null;

		/** The root error. */
		error?: RootError;

		/** The Azure region. */
		location?: string | null;

		/** The time in UTC. */
		time?: Date | null;
	}

	/** The error response. */
	export interface ErrorResponseFormProperties {

		/** Dictionary containing correlation details for the error. */
		correlation: FormControl<{[id: string]: string } | null | undefined>,

		/** The hosting environment. */
		environment: FormControl<string | null | undefined>,

		/** The Azure region. */
		location: FormControl<string | null | undefined>,

		/** The time in UTC. */
		time: FormControl<Date | null | undefined>,
	}
	export function CreateErrorResponseFormGroup() {
		return new FormGroup<ErrorResponseFormProperties>({
			correlation: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			environment: new FormControl<string | null | undefined>(undefined),
			location: new FormControl<string | null | undefined>(undefined),
			time: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/** The root error. */
	export interface RootError {

		/** The service-defined error code. Supported error codes: ServiceError, UserError, ValidationError, AzureStorageError, TransientError, RequestThrottled. */
		code?: string | null;

		/** The related errors that occurred during the request. */
		details?: Array<ErrorDetails>;

		/** A nested structure of errors. */
		innerError?: InnerErrorResponse;

		/** A human-readable representation of the error. */
		message?: string | null;

		/** The target of the error (e.g., the name of the property in error). */
		target?: string | null;
	}

	/** The root error. */
	export interface RootErrorFormProperties {

		/** The service-defined error code. Supported error codes: ServiceError, UserError, ValidationError, AzureStorageError, TransientError, RequestThrottled. */
		code: FormControl<string | null | undefined>,

		/** A human-readable representation of the error. */
		message: FormControl<string | null | undefined>,

		/** The target of the error (e.g., the name of the property in error). */
		target: FormControl<string | null | undefined>,
	}
	export function CreateRootErrorFormGroup() {
		return new FormGroup<RootErrorFormProperties>({
			code: new FormControl<string | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
			target: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A nested structure of errors. */
	export interface InnerErrorResponse {

		/** The error code. */
		code?: string | null;

		/** A nested structure of errors. */
		innerError?: InnerErrorResponse;
	}

	/** A nested structure of errors. */
	export interface InnerErrorResponseFormProperties {

		/** The error code. */
		code: FormControl<string | null | undefined>,
	}
	export function CreateInnerErrorResponseFormGroup() {
		return new FormGroup<InnerErrorResponseFormProperties>({
			code: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface HdiConfiguration {
		yarnDeployMode?: HdiConfigurationYarnDeployMode | null;
	}
	export interface HdiConfigurationFormProperties {
		yarnDeployMode: FormControl<HdiConfigurationYarnDeployMode | null | undefined>,
	}
	export function CreateHdiConfigurationFormGroup() {
		return new FormGroup<HdiConfigurationFormProperties>({
			yarnDeployMode: new FormControl<HdiConfigurationYarnDeployMode | null | undefined>(undefined),
		});

	}

	export enum HdiConfigurationYarnDeployMode { None = 'None', Client = 'Client', Cluster = 'Cluster' }

	export interface HistoryConfiguration {

		/** The list of directories to monitor and upload files from. */
		directoriesToWatch?: Array<string>;

		/** Set to true to collect outputs and store in run history. */
		outputCollection?: boolean | null;
	}
	export interface HistoryConfigurationFormProperties {

		/** Set to true to collect outputs and store in run history. */
		outputCollection: FormControl<boolean | null | undefined>,
	}
	export function CreateHistoryConfigurationFormGroup() {
		return new FormGroup<HistoryConfigurationFormProperties>({
			outputCollection: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface MpiConfiguration {

		/**
		 * Number of processes per node.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		processCountPerNode?: number | null;
	}
	export interface MpiConfigurationFormProperties {

		/**
		 * Number of processes per node.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		processCountPerNode: FormControl<number | null | undefined>,
	}
	export function CreateMpiConfigurationFormGroup() {
		return new FormGroup<MpiConfigurationFormProperties>({
			processCountPerNode: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface RunConfiguration {

		/** Command line arguments for the python script file. */
		arguments?: Array<string>;

		/**
		 * The supported communicators are None, ParameterServer, OpenMpi, and IntelMpi Keep in mind that OpenMpi requires a custom image with OpenMpi installed.
		 * Use ParameterServer or OpenMpi for AmlCompute clusters. Use IntelMpi for distributed training jobs.
		 */
		communicator?: RunConfigurationCommunicator | null;

		/** All the data sources are made available to the run during execution based on each configuration. */
		dataReferences?: {[id: string]: DataReferenceConfiguration };
		environment?: EnvironmentDefinition;

		/** The supported frameworks are Python, PySpark, CNTK, TensorFlow, and PyTorch. Use Tensorflow for AmlCompute clusters, and Python for distributed training jobs. */
		framework?: RunConfigurationFramework | null;
		hdi?: HdiConfiguration;
		history?: HistoryConfiguration;

		/**
		 * This is primarily intended for notebooks to override the default job name.
		 * Defaults to ArgumentVector[0] if not specified.
		 */
		jobName?: string | null;

		/**
		 * Maximum allowed time for the run. The system will attempt to automatically cancel the run if it took longer than this value.
		 * MaxRunDurationSeconds=null means infinite duration.
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		maxRunDurationSeconds?: string | null;
		mpi?: MpiConfiguration;

		/**
		 * Number of compute nodes to run the job on. Only applies to AMLCompute.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		nodeCount?: number | null;

		/** The relative path to the python script file. The file path is relative to the source_directory passed to submit run. */
		script?: string | null;
		spark?: SparkConfiguration;

		/** Target refers to compute where the job is scheduled for execution. The default target is "local" referring to the local machine. */
		target?: string | null;
		tensorflow?: TensorflowConfiguration;
	}
	export interface RunConfigurationFormProperties {

		/**
		 * The supported communicators are None, ParameterServer, OpenMpi, and IntelMpi Keep in mind that OpenMpi requires a custom image with OpenMpi installed.
		 * Use ParameterServer or OpenMpi for AmlCompute clusters. Use IntelMpi for distributed training jobs.
		 */
		communicator: FormControl<RunConfigurationCommunicator | null | undefined>,

		/** All the data sources are made available to the run during execution based on each configuration. */
		dataReferences: FormControl<{[id: string]: DataReferenceConfiguration } | null | undefined>,

		/** The supported frameworks are Python, PySpark, CNTK, TensorFlow, and PyTorch. Use Tensorflow for AmlCompute clusters, and Python for distributed training jobs. */
		framework: FormControl<RunConfigurationFramework | null | undefined>,

		/**
		 * This is primarily intended for notebooks to override the default job name.
		 * Defaults to ArgumentVector[0] if not specified.
		 */
		jobName: FormControl<string | null | undefined>,

		/**
		 * Maximum allowed time for the run. The system will attempt to automatically cancel the run if it took longer than this value.
		 * MaxRunDurationSeconds=null means infinite duration.
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		maxRunDurationSeconds: FormControl<string | null | undefined>,

		/**
		 * Number of compute nodes to run the job on. Only applies to AMLCompute.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		nodeCount: FormControl<number | null | undefined>,

		/** The relative path to the python script file. The file path is relative to the source_directory passed to submit run. */
		script: FormControl<string | null | undefined>,

		/** Target refers to compute where the job is scheduled for execution. The default target is "local" referring to the local machine. */
		target: FormControl<string | null | undefined>,
	}
	export function CreateRunConfigurationFormGroup() {
		return new FormGroup<RunConfigurationFormProperties>({
			communicator: new FormControl<RunConfigurationCommunicator | null | undefined>(undefined),
			dataReferences: new FormControl<{[id: string]: DataReferenceConfiguration } | null | undefined>(undefined),
			framework: new FormControl<RunConfigurationFramework | null | undefined>(undefined),
			jobName: new FormControl<string | null | undefined>(undefined),
			maxRunDurationSeconds: new FormControl<string | null | undefined>(undefined),
			nodeCount: new FormControl<number | null | undefined>(undefined),
			script: new FormControl<string | null | undefined>(undefined),
			target: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum RunConfigurationCommunicator { None = 'None', ParameterServer = 'ParameterServer', Gloo = 'Gloo', Mpi = 'Mpi', Nccl = 'Nccl' }

	export enum RunConfigurationFramework { Python = 'Python', PySpark = 'PySpark', Cntk = 'Cntk', TensorFlow = 'TensorFlow', PyTorch = 'PyTorch' }

	export interface SparkConfiguration {
		configuration?: {[id: string]: string };
	}
	export interface SparkConfigurationFormProperties {
		configuration: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateSparkConfigurationFormGroup() {
		return new FormGroup<SparkConfigurationFormProperties>({
			configuration: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}

	export interface TensorflowConfiguration {

		/**
		 * Number of parameter servers.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		parameterServerCount?: number | null;

		/**
		 * The number of workers.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		workerCount?: number | null;
	}
	export interface TensorflowConfigurationFormProperties {

		/**
		 * Number of parameter servers.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		parameterServerCount: FormControl<number | null | undefined>,

		/**
		 * The number of workers.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		workerCount: FormControl<number | null | undefined>,
	}
	export function CreateTensorflowConfigurationFormGroup() {
		return new FormGroup<TensorflowConfigurationFormProperties>({
			parameterServerCount: new FormControl<number | null | undefined>(undefined),
			workerCount: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface RunDefinition {
		configuration?: RunConfiguration;

		/**
		 * Specifies that the run history entry for this execution should be scoped within
		 * an existing run as a child. Defaults to null, meaning the run has no parent.
		 * This is intended for first-party service integration, not third-party API users.
		 */
		parentRunId?: string | null;

		/** Specifies the runsource property for this run. The default value is "experiment" if not specified. */
		runType?: string | null;

		/**
		 * Snapshots are user project folders that have been uploaded to the cloud for subsequent
		 * execution. This field is required when executing against cloud-based compute targets
		 * unless the run submission was against the API endpoint that takes a zipped project folder
		 * inline with the request.
		 */
		snapshotId?: string | null;
	}
	export interface RunDefinitionFormProperties {

		/**
		 * Specifies that the run history entry for this execution should be scoped within
		 * an existing run as a child. Defaults to null, meaning the run has no parent.
		 * This is intended for first-party service integration, not third-party API users.
		 */
		parentRunId: FormControl<string | null | undefined>,

		/** Specifies the runsource property for this run. The default value is "experiment" if not specified. */
		runType: FormControl<string | null | undefined>,

		/**
		 * Snapshots are user project folders that have been uploaded to the cloud for subsequent
		 * execution. This field is required when executing against cloud-based compute targets
		 * unless the run submission was against the API endpoint that takes a zipped project folder
		 * inline with the request.
		 */
		snapshotId: FormControl<string | null | undefined>,
	}
	export function CreateRunDefinitionFormGroup() {
		return new FormGroup<RunDefinitionFormProperties>({
			parentRunId: new FormControl<string | null | undefined>(undefined),
			runType: new FormControl<string | null | undefined>(undefined),
			snapshotId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains the details of a run. */
	export interface StartRunResult {

		/**
		 * The identifier for a run.
		 * Required
		 */
		runId: string;
	}

	/** Contains the details of a run. */
	export interface StartRunResultFormProperties {

		/**
		 * The identifier for a run.
		 * Required
		 */
		runId: FormControl<string | null | undefined>,
	}
	export function CreateStartRunResultFormGroup() {
		return new FormGroup<StartRunResultFormProperties>({
			runId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Cancel a run.
		 * Cancels a run within an experiment.
		 * Post execution/v1.0/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearningServices/workspaces/{workspaceName}/experiments/{experimentName}/runId/{runId}/cancel
		 * @param {string} subscriptionId The Azure Subscription ID.
		 * @param {string} resourceGroupName The Name of the resource group in which the workspace is located.
		 * @param {string} workspaceName The name of the workspace.
		 * @param {string} experimentName The experiment name.
		 * @param {string} runId The id of the run to cancel.
		 * @return {StartRunResult} The run was successfully cancelled.
		 */
		Runs_CancelRunWithUri(subscriptionId: string, resourceGroupName: string, workspaceName: string, experimentName: string, runId: string): Observable<StartRunResult> {
			return this.http.post<StartRunResult>(this.baseUri + 'execution/v1.0/subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.MachineLearningServices/workspaces/' + (workspaceName == null ? '' : encodeURIComponent(workspaceName)) + '/experiments/' + (experimentName == null ? '' : encodeURIComponent(experimentName)) + '/runId/' + (runId == null ? '' : encodeURIComponent(runId)) + '/cancel', null, {});
		}

		/**
		 * Start a run from a snapshot on a remote compute target.
		 * Starts an experiment run on the remote compute target using the provided definition.json file to define the run.
		 * The code for the run is retrieved using the snapshotId in definition.json.
		 * Post execution/v1.0/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearningServices/workspaces/{workspaceName}/experiments/{experimentName}/snapshotrun
		 * @param {string} subscriptionId The Azure Subscription ID.
		 * @param {string} resourceGroupName The Name of the resource group in which the workspace is located.
		 * @param {string} workspaceName The name of the workspace.
		 * @param {string} experimentName The experiment name.
		 * @param {string} runId A run id. If not supplied a run id will be created automatically.
		 * @param {RunDefinition} requestBody A JSON run definition structure.
		 * @return {StartRunResult} A snapshot run was successfully started.
		 */
		Runs_StartSnapshotRun(subscriptionId: string, resourceGroupName: string, workspaceName: string, experimentName: string, runId: string | null | undefined, requestBody: RunDefinition): Observable<StartRunResult> {
			return this.http.post<StartRunResult>(this.baseUri + 'execution/v1.0/subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.MachineLearningServices/workspaces/' + (workspaceName == null ? '' : encodeURIComponent(workspaceName)) + '/experiments/' + (experimentName == null ? '' : encodeURIComponent(experimentName)) + '/snapshotrun&runId=' + (runId == null ? '' : encodeURIComponent(runId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Start a run on a local machine.
		 * Starts an experiment run using the provided definition.json file to define the run.
		 * The source code and configuration is defined in a zip archive in project.zip.
		 * Post execution/v1.0/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearningServices/workspaces/{workspaceName}/experiments/{experimentName}/startlocalrun
		 * @param {string} subscriptionId The Azure Subscription ID.
		 * @param {string} resourceGroupName The Name of the resource group in which the workspace is located.
		 * @param {string} workspaceName The name of the workspace.
		 * @param {string} experimentName The experiment name.
		 * @param {string} runId A run id. If not supplied a run id will be created automatically.
		 * @param {RunDefinition} requestBody A JSON run definition structure.
		 * @return {string} File Response
		 */
		Runs_StartLocalRun(subscriptionId: string, resourceGroupName: string, workspaceName: string, experimentName: string, runId: string | null | undefined, requestBody: RunDefinition): Observable<string> {
			return this.http.post(this.baseUri + 'execution/v1.0/subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.MachineLearningServices/workspaces/' + (workspaceName == null ? '' : encodeURIComponent(workspaceName)) + '/experiments/' + (experimentName == null ? '' : encodeURIComponent(experimentName)) + '/startlocalrun&runId=' + (runId == null ? '' : encodeURIComponent(runId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, responseType: 'text' });
		}
	}

}

