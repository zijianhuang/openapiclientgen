import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** Get Data Plane read only token response definition. */
	export interface AccessPolicyResponse {

		/** Data Plane read only access token. */
		accessToken?: string | null;

		/** Data Plane service base URL. */
		dataPlaneUrl?: string | null;

		/** Get Data Plane read only token request definition. */
		policy?: UserAccessPolicy;
	}

	/** Get Data Plane read only token response definition. */
	export interface AccessPolicyResponseFormProperties {

		/** Data Plane read only access token. */
		accessToken: FormControl<string | null | undefined>,

		/** Data Plane service base URL. */
		dataPlaneUrl: FormControl<string | null | undefined>,
	}
	export function CreateAccessPolicyResponseFormGroup() {
		return new FormGroup<AccessPolicyResponseFormProperties>({
			accessToken: new FormControl<string | null | undefined>(undefined),
			dataPlaneUrl: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Information about an activity run in a pipeline. */
	export interface ActivityRun {

		/** The name of the activity. */
		activityName?: string | null;

		/** The end time of the activity run in 'ISO 8601' format. */
		activityRunEnd?: Date | null;

		/** The id of the activity run. */
		activityRunId?: string | null;

		/** The start time of the activity run in 'ISO 8601' format. */
		activityRunStart?: Date | null;

		/** The type of the activity. */
		activityType?: string | null;

		/**
		 * The duration of the activity run.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		durationInMs?: number | null;

		/** The error if any from the activity run. */
		error?: string | null;

		/** The input for the activity. */
		input?: string | null;

		/** The name of the compute linked service. */
		linkedServiceName?: string | null;

		/** The output for the activity. */
		output?: string | null;

		/** The name of the pipeline. */
		pipelineName?: string | null;

		/** The id of the pipeline run. */
		pipelineRunId?: string | null;

		/** The status of the activity run. */
		status?: string | null;
	}

	/** Information about an activity run in a pipeline. */
	export interface ActivityRunFormProperties {

		/** The name of the activity. */
		activityName: FormControl<string | null | undefined>,

		/** The end time of the activity run in 'ISO 8601' format. */
		activityRunEnd: FormControl<Date | null | undefined>,

		/** The id of the activity run. */
		activityRunId: FormControl<string | null | undefined>,

		/** The start time of the activity run in 'ISO 8601' format. */
		activityRunStart: FormControl<Date | null | undefined>,

		/** The type of the activity. */
		activityType: FormControl<string | null | undefined>,

		/**
		 * The duration of the activity run.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		durationInMs: FormControl<number | null | undefined>,

		/** The error if any from the activity run. */
		error: FormControl<string | null | undefined>,

		/** The input for the activity. */
		input: FormControl<string | null | undefined>,

		/** The name of the compute linked service. */
		linkedServiceName: FormControl<string | null | undefined>,

		/** The output for the activity. */
		output: FormControl<string | null | undefined>,

		/** The name of the pipeline. */
		pipelineName: FormControl<string | null | undefined>,

		/** The id of the pipeline run. */
		pipelineRunId: FormControl<string | null | undefined>,

		/** The status of the activity run. */
		status: FormControl<string | null | undefined>,
	}
	export function CreateActivityRunFormGroup() {
		return new FormGroup<ActivityRunFormProperties>({
			activityName: new FormControl<string | null | undefined>(undefined),
			activityRunEnd: new FormControl<Date | null | undefined>(undefined),
			activityRunId: new FormControl<string | null | undefined>(undefined),
			activityRunStart: new FormControl<Date | null | undefined>(undefined),
			activityType: new FormControl<string | null | undefined>(undefined),
			durationInMs: new FormControl<number | null | undefined>(undefined),
			error: new FormControl<string | null | undefined>(undefined),
			input: new FormControl<string | null | undefined>(undefined),
			linkedServiceName: new FormControl<string | null | undefined>(undefined),
			output: new FormControl<string | null | undefined>(undefined),
			pipelineName: new FormControl<string | null | undefined>(undefined),
			pipelineRunId: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A list activity runs. */
	export interface ActivityRunsQueryResponse {

		/** The continuation token for getting the next page of results, if any remaining results exist, null otherwise. */
		continuationToken?: string | null;

		/**
		 * List of activity runs.
		 * Required
		 */
		value: Array<ActivityRun>;
	}

	/** A list activity runs. */
	export interface ActivityRunsQueryResponseFormProperties {

		/** The continuation token for getting the next page of results, if any remaining results exist, null otherwise. */
		continuationToken: FormControl<string | null | undefined>,
	}
	export function CreateActivityRunsQueryResponseFormGroup() {
		return new FormGroup<ActivityRunsQueryResponseFormProperties>({
			continuationToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response body structure for starting data flow debug session. */
	export interface AddDataFlowToDebugSessionResponse {

		/** The ID of data flow debug job version. */
		jobVersion?: string | null;
	}

	/** Response body structure for starting data flow debug session. */
	export interface AddDataFlowToDebugSessionResponseFormProperties {

		/** The ID of data flow debug job version. */
		jobVersion: FormControl<string | null | undefined>,
	}
	export function CreateAddDataFlowToDebugSessionResponseFormGroup() {
		return new FormGroup<AddDataFlowToDebugSessionResponseFormProperties>({
			jobVersion: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Azure Key Vault secret reference. */
	export interface AzureKeyVaultSecretReference {

		/**
		 * The name of the secret in Azure Key Vault. Type: string (or Expression with resultType string).
		 * Required
		 */
		secretName: string;

		/** The version of the secret in Azure Key Vault. The default value is the latest version of the secret. Type: string (or Expression with resultType string). */
		secretVersion?: string | null;

		/**
		 * Linked service reference type.
		 * Required
		 */
		store: LinkedServiceReference;
	}

	/** Azure Key Vault secret reference. */
	export interface AzureKeyVaultSecretReferenceFormProperties {

		/**
		 * The name of the secret in Azure Key Vault. Type: string (or Expression with resultType string).
		 * Required
		 */
		secretName: FormControl<string | null | undefined>,

		/** The version of the secret in Azure Key Vault. The default value is the latest version of the secret. Type: string (or Expression with resultType string). */
		secretVersion: FormControl<string | null | undefined>,
	}
	export function CreateAzureKeyVaultSecretReferenceFormGroup() {
		return new FormGroup<AzureKeyVaultSecretReferenceFormProperties>({
			secretName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			secretVersion: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The object that defines the structure of an Azure Data Factory error response. */
	export interface CloudError {

		/**
		 * The object that defines the structure of an Azure Data Factory error.
		 * Required
		 */
		error: CloudErrorBody;
	}

	/** The object that defines the structure of an Azure Data Factory error response. */
	export interface CloudErrorFormProperties {
	}
	export function CreateCloudErrorFormGroup() {
		return new FormGroup<CloudErrorFormProperties>({
		});

	}


	/** The object that defines the structure of an Azure Data Factory error. */
	export interface CloudErrorBody {

		/**
		 * Error code.
		 * Required
		 */
		code: string;

		/** Array with additional error details. */
		details?: Array<CloudError>;

		/**
		 * Error message.
		 * Required
		 */
		message: string;

		/** Property name/path in request associated with error. */
		target?: string | null;
	}

	/** The object that defines the structure of an Azure Data Factory error. */
	export interface CloudErrorBodyFormProperties {

		/**
		 * Error code.
		 * Required
		 */
		code: FormControl<string | null | undefined>,

		/**
		 * Error message.
		 * Required
		 */
		message: FormControl<string | null | undefined>,

		/** Property name/path in request associated with error. */
		target: FormControl<string | null | undefined>,
	}
	export function CreateCloudErrorBodyFormGroup() {
		return new FormGroup<CloudErrorBodyFormProperties>({
			code: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			message: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			target: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Request body structure for creating data flow debug session. */
	export interface CreateDataFlowDebugSessionRequest {

		/** Compute type of the cluster. The value will be overwritten by the same setting in integration runtime if provided. */
		computeType?: string | null;

		/**
		 * Core count of the cluster. The value will be overwritten by the same setting in integration runtime if provided.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		coreCount?: number | null;

		/** Integration runtime debug resource. */
		integrationRuntime?: IntegrationRuntimeDebugResource;

		/**
		 * Time to live setting of the cluster in minutes.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		timeToLive?: number | null;
	}

	/** Request body structure for creating data flow debug session. */
	export interface CreateDataFlowDebugSessionRequestFormProperties {

		/** Compute type of the cluster. The value will be overwritten by the same setting in integration runtime if provided. */
		computeType: FormControl<string | null | undefined>,

		/**
		 * Core count of the cluster. The value will be overwritten by the same setting in integration runtime if provided.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		coreCount: FormControl<number | null | undefined>,

		/**
		 * Time to live setting of the cluster in minutes.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		timeToLive: FormControl<number | null | undefined>,
	}
	export function CreateCreateDataFlowDebugSessionRequestFormGroup() {
		return new FormGroup<CreateDataFlowDebugSessionRequestFormProperties>({
			computeType: new FormControl<string | null | undefined>(undefined),
			coreCount: new FormControl<number | null | undefined>(undefined),
			timeToLive: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Response body structure for creating data flow debug session. */
	export interface CreateDataFlowDebugSessionResponse {

		/** The ID of data flow debug session. */
		sessionId?: string | null;

		/** The state of the debug session. */
		status?: string | null;
	}

	/** Response body structure for creating data flow debug session. */
	export interface CreateDataFlowDebugSessionResponseFormProperties {

		/** The ID of data flow debug session. */
		sessionId: FormControl<string | null | undefined>,

		/** The state of the debug session. */
		status: FormControl<string | null | undefined>,
	}
	export function CreateCreateDataFlowDebugSessionResponseFormGroup() {
		return new FormGroup<CreateDataFlowDebugSessionResponseFormProperties>({
			sessionId: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The linked integration runtime information. */
	export interface CreateLinkedIntegrationRuntimeRequest {

		/** The location of the data factory that the linked integration runtime belongs to. */
		dataFactoryLocation?: string | null;

		/** The name of the data factory that the linked integration runtime belongs to. */
		dataFactoryName?: string | null;

		/** The name of the linked integration runtime. */
		name?: string | null;

		/** The ID of the subscription that the linked integration runtime belongs to. */
		subscriptionId?: string | null;
	}

	/** The linked integration runtime information. */
	export interface CreateLinkedIntegrationRuntimeRequestFormProperties {

		/** The location of the data factory that the linked integration runtime belongs to. */
		dataFactoryLocation: FormControl<string | null | undefined>,

		/** The name of the data factory that the linked integration runtime belongs to. */
		dataFactoryName: FormControl<string | null | undefined>,

		/** The name of the linked integration runtime. */
		name: FormControl<string | null | undefined>,

		/** The ID of the subscription that the linked integration runtime belongs to. */
		subscriptionId: FormControl<string | null | undefined>,
	}
	export function CreateCreateLinkedIntegrationRuntimeRequestFormGroup() {
		return new FormGroup<CreateLinkedIntegrationRuntimeRequestFormProperties>({
			dataFactoryLocation: new FormControl<string | null | undefined>(undefined),
			dataFactoryName: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			subscriptionId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response body with a run identifier. */
	export interface CreateRunResponse {

		/**
		 * Identifier of a run.
		 * Required
		 */
		runId: string;
	}

	/** Response body with a run identifier. */
	export interface CreateRunResponseFormProperties {

		/**
		 * Identifier of a run.
		 * Required
		 */
		runId: FormControl<string | null | undefined>,
	}
	export function CreateCreateRunResponseFormGroup() {
		return new FormGroup<CreateRunResponseFormProperties>({
			runId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Structure of command payload. */
	export interface DataFlowDebugCommandPayload {

		/** Array of column names. */
		columns?: Array<string>;

		/** The expression which is used for preview. */
		expression?: string | null;

		/**
		 * Row limits for preview response.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		rowLimits?: number | null;

		/**
		 * The stream name which is used for preview.
		 * Required
		 */
		streamName: string;
	}

	/** Structure of command payload. */
	export interface DataFlowDebugCommandPayloadFormProperties {

		/** The expression which is used for preview. */
		expression: FormControl<string | null | undefined>,

		/**
		 * Row limits for preview response.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		rowLimits: FormControl<number | null | undefined>,

		/**
		 * The stream name which is used for preview.
		 * Required
		 */
		streamName: FormControl<string | null | undefined>,
	}
	export function CreateDataFlowDebugCommandPayloadFormGroup() {
		return new FormGroup<DataFlowDebugCommandPayloadFormProperties>({
			expression: new FormControl<string | null | undefined>(undefined),
			rowLimits: new FormControl<number | null | undefined>(undefined),
			streamName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Request body structure for data flow debug command. */
	export interface DataFlowDebugCommandRequest {

		/** The command type. */
		command?: DataFlowDebugCommandRequestCommand | null;

		/** Structure of command payload. */
		commandPayload?: DataFlowDebugCommandPayload;

		/** The ID of data flow debug session. */
		sessionId?: string | null;
	}

	/** Request body structure for data flow debug command. */
	export interface DataFlowDebugCommandRequestFormProperties {

		/** The command type. */
		command: FormControl<DataFlowDebugCommandRequestCommand | null | undefined>,

		/** The ID of data flow debug session. */
		sessionId: FormControl<string | null | undefined>,
	}
	export function CreateDataFlowDebugCommandRequestFormGroup() {
		return new FormGroup<DataFlowDebugCommandRequestFormProperties>({
			command: new FormControl<DataFlowDebugCommandRequestCommand | null | undefined>(undefined),
			sessionId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum DataFlowDebugCommandRequestCommand { executePreviewQuery = 'executePreviewQuery', executeStatisticsQuery = 'executeStatisticsQuery', executeExpressionQuery = 'executeExpressionQuery' }


	/** Response body structure of data flow result for data preview, statistics or expression preview. */
	export interface DataFlowDebugCommandResponse {

		/** The result data of data preview, statistics or expression preview. */
		data?: string | null;

		/** The run status of data preview, statistics or expression preview. */
		status?: string | null;
	}

	/** Response body structure of data flow result for data preview, statistics or expression preview. */
	export interface DataFlowDebugCommandResponseFormProperties {

		/** The result data of data preview, statistics or expression preview. */
		data: FormControl<string | null | undefined>,

		/** The run status of data preview, statistics or expression preview. */
		status: FormControl<string | null | undefined>,
	}
	export function CreateDataFlowDebugCommandResponseFormGroup() {
		return new FormGroup<DataFlowDebugCommandResponseFormProperties>({
			data: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Request body structure for starting data flow debug session. */
	export interface DataFlowDebugPackage {

		/** Data flow debug resource. */
		dataFlow?: DataFlowDebugResource;

		/** List of datasets. */
		datasets?: Array<DatasetDebugResource>;

		/** Data flow debug settings. */
		debugSettings?: DataFlowDebugPackageDebugSettings;

		/** List of linked services. */
		linkedServices?: Array<LinkedServiceDebugResource>;

		/** The ID of data flow debug session. */
		sessionId?: string | null;

		/** Staging info for execute data flow activity. */
		staging?: DataFlowStagingInfo;
	}

	/** Request body structure for starting data flow debug session. */
	export interface DataFlowDebugPackageFormProperties {

		/** The ID of data flow debug session. */
		sessionId: FormControl<string | null | undefined>,
	}
	export function CreateDataFlowDebugPackageFormGroup() {
		return new FormGroup<DataFlowDebugPackageFormProperties>({
			sessionId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Dataset debug resource. */
	export interface DatasetDebugResource extends SubResourceDebugResource {

		/**
		 * The Azure Data Factory nested object which identifies data within different data stores, such as tables, files, folders, and documents.
		 * Required
		 */
		properties: DatasetDebugResourceProperties;
	}

	/** Dataset debug resource. */
	export interface DatasetDebugResourceFormProperties extends SubResourceDebugResourceFormProperties {
	}
	export function CreateDatasetDebugResourceFormGroup() {
		return new FormGroup<DatasetDebugResourceFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DatasetDebugResourceProperties {

		/** List of tags that can be used for describing the Dataset. */
		annotations?: Array<string>;

		/** Dataset description. */
		description?: string | null;

		/** The folder that this Dataset is in. If not specified, Dataset will appear at the root level. */
		folder?: DatasetDebugResourcePropertiesFolder;

		/**
		 * Linked service reference type.
		 * Required
		 */
		linkedServiceName: any;

		/** Definition of all parameters for an entity. */
		parameters?: {[id: string]: DatasetDebugResourcePropertiesParameters };

		/** Columns that define the physical type schema of the dataset. Type: array (or Expression with resultType array), itemType: DatasetSchemaDataElement. */
		schema?: string | null;

		/** Columns that define the structure of the dataset. Type: array (or Expression with resultType array), itemType: DatasetDataElement. */
		structure?: string | null;

		/**
		 * Type of dataset.
		 * Required
		 */
		type: string;
	}
	export interface DatasetDebugResourcePropertiesFormProperties {

		/** Dataset description. */
		description: FormControl<string | null | undefined>,

		/**
		 * Linked service reference type.
		 * Required
		 */
		linkedServiceName: FormControl<any | null | undefined>,

		/** Definition of all parameters for an entity. */
		parameters: FormControl<{[id: string]: DatasetDebugResourcePropertiesParameters } | null | undefined>,

		/** Columns that define the physical type schema of the dataset. Type: array (or Expression with resultType array), itemType: DatasetSchemaDataElement. */
		schema: FormControl<string | null | undefined>,

		/** Columns that define the structure of the dataset. Type: array (or Expression with resultType array), itemType: DatasetDataElement. */
		structure: FormControl<string | null | undefined>,

		/**
		 * Type of dataset.
		 * Required
		 */
		type: FormControl<string | null | undefined>,
	}
	export function CreateDatasetDebugResourcePropertiesFormGroup() {
		return new FormGroup<DatasetDebugResourcePropertiesFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			linkedServiceName: new FormControl<any | null | undefined>(undefined, [Validators.required]),
			parameters: new FormControl<{[id: string]: DatasetDebugResourcePropertiesParameters } | null | undefined>(undefined),
			schema: new FormControl<string | null | undefined>(undefined),
			structure: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DatasetDebugResourcePropertiesFolder {

		/** The name of the folder that this Dataset is in. */
		name?: string | null;
	}
	export interface DatasetDebugResourcePropertiesFolderFormProperties {

		/** The name of the folder that this Dataset is in. */
		name: FormControl<string | null | undefined>,
	}
	export function CreateDatasetDebugResourcePropertiesFolderFormGroup() {
		return new FormGroup<DatasetDebugResourcePropertiesFolderFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DatasetDebugResourcePropertiesParameters {

		/** Default value of parameter. */
		defaultValue?: string | null;

		/**
		 * Parameter type.
		 * Required
		 */
		type: DatasetDebugResourcePropertiesParametersType;
	}
	export interface DatasetDebugResourcePropertiesParametersFormProperties {

		/** Default value of parameter. */
		defaultValue: FormControl<string | null | undefined>,

		/**
		 * Parameter type.
		 * Required
		 */
		type: FormControl<DatasetDebugResourcePropertiesParametersType | null | undefined>,
	}
	export function CreateDatasetDebugResourcePropertiesParametersFormGroup() {
		return new FormGroup<DatasetDebugResourcePropertiesParametersFormProperties>({
			defaultValue: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<DatasetDebugResourcePropertiesParametersType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum DatasetDebugResourcePropertiesParametersType { Object = 'Object', String = 'String', Int = 'Int', Float = 'Float', Bool = 'Bool', Array = 'Array', SecureString = 'SecureString' }

	export interface DataFlowDebugPackageDebugSettings {

		/** Parameters for dataset. */
		datasetParameters?: string | null;

		/** An object mapping parameter names to argument values. */
		parameters?: ParameterValueSpecification;

		/** Source setting for data flow debug. */
		sourceSettings?: Array<DataFlowSourceSetting>;
	}
	export interface DataFlowDebugPackageDebugSettingsFormProperties {

		/** Parameters for dataset. */
		datasetParameters: FormControl<string | null | undefined>,
	}
	export function CreateDataFlowDebugPackageDebugSettingsFormGroup() {
		return new FormGroup<DataFlowDebugPackageDebugSettingsFormProperties>({
			datasetParameters: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An object mapping parameter names to argument values. */
	export interface ParameterValueSpecification {
	}

	/** An object mapping parameter names to argument values. */
	export interface ParameterValueSpecificationFormProperties {
	}
	export function CreateParameterValueSpecificationFormGroup() {
		return new FormGroup<ParameterValueSpecificationFormProperties>({
		});

	}


	/** Definition of data flow source setting for debug. */
	export interface DataFlowSourceSetting {

		/**
		 * Defines the row limit of data flow source in debug.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		rowLimit?: number | null;

		/** The data flow source name. */
		sourceName?: string | null;
	}

	/** Definition of data flow source setting for debug. */
	export interface DataFlowSourceSettingFormProperties {

		/**
		 * Defines the row limit of data flow source in debug.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		rowLimit: FormControl<number | null | undefined>,

		/** The data flow source name. */
		sourceName: FormControl<string | null | undefined>,
	}
	export function CreateDataFlowSourceSettingFormGroup() {
		return new FormGroup<DataFlowSourceSettingFormProperties>({
			rowLimit: new FormControl<number | null | undefined>(undefined),
			sourceName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Linked service debug resource. */
	export interface LinkedServiceDebugResource extends SubResourceDebugResource {

		/**
		 * The Azure Data Factory nested object which contains the information and credential which can be used to connect with related store or compute resource.
		 * Required
		 */
		properties: LinkedServiceDebugResourceProperties;
	}

	/** Linked service debug resource. */
	export interface LinkedServiceDebugResourceFormProperties extends SubResourceDebugResourceFormProperties {
	}
	export function CreateLinkedServiceDebugResourceFormGroup() {
		return new FormGroup<LinkedServiceDebugResourceFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface LinkedServiceDebugResourceProperties {

		/** List of tags that can be used for describing the linked service. */
		annotations?: Array<string>;

		/** Integration runtime reference type. */
		connectVia?: any;

		/** Linked service description. */
		description?: string | null;

		/** Definition of all parameters for an entity. */
		parameters?: {[id: string]: LinkedServiceDebugResourcePropertiesParameters };

		/**
		 * Type of linked service.
		 * Required
		 */
		type: string;
	}
	export interface LinkedServiceDebugResourcePropertiesFormProperties {

		/** Integration runtime reference type. */
		connectVia: FormControl<any | null | undefined>,

		/** Linked service description. */
		description: FormControl<string | null | undefined>,

		/** Definition of all parameters for an entity. */
		parameters: FormControl<{[id: string]: LinkedServiceDebugResourcePropertiesParameters } | null | undefined>,

		/**
		 * Type of linked service.
		 * Required
		 */
		type: FormControl<string | null | undefined>,
	}
	export function CreateLinkedServiceDebugResourcePropertiesFormGroup() {
		return new FormGroup<LinkedServiceDebugResourcePropertiesFormProperties>({
			connectVia: new FormControl<any | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			parameters: new FormControl<{[id: string]: LinkedServiceDebugResourcePropertiesParameters } | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface LinkedServiceDebugResourcePropertiesParameters {

		/** Default value of parameter. */
		defaultValue?: string | null;

		/**
		 * Parameter type.
		 * Required
		 */
		type: DatasetDebugResourcePropertiesParametersType;
	}
	export interface LinkedServiceDebugResourcePropertiesParametersFormProperties {

		/** Default value of parameter. */
		defaultValue: FormControl<string | null | undefined>,

		/**
		 * Parameter type.
		 * Required
		 */
		type: FormControl<DatasetDebugResourcePropertiesParametersType | null | undefined>,
	}
	export function CreateLinkedServiceDebugResourcePropertiesParametersFormGroup() {
		return new FormGroup<LinkedServiceDebugResourcePropertiesParametersFormProperties>({
			defaultValue: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<DatasetDebugResourcePropertiesParametersType | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Data flow debug resource. */
	export interface DataFlowDebugResource extends SubResourceDebugResource {

		/**
		 * Azure Data Factory nested object which contains a flow with data movements and transformations.
		 * Required
		 */
		properties: DataFlowDebugResourceProperties;
	}

	/** Data flow debug resource. */
	export interface DataFlowDebugResourceFormProperties extends SubResourceDebugResourceFormProperties {
	}
	export function CreateDataFlowDebugResourceFormGroup() {
		return new FormGroup<DataFlowDebugResourceFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DataFlowDebugResourceProperties {

		/** List of tags that can be used for describing the data flow. */
		annotations?: Array<string>;

		/** The description of the data flow. */
		description?: string | null;

		/** The folder that this data flow is in. If not specified, Data flow will appear at the root level. */
		folder?: DataFlowDebugResourcePropertiesFolder;

		/** Type of data flow. */
		type?: string | null;
	}
	export interface DataFlowDebugResourcePropertiesFormProperties {

		/** The description of the data flow. */
		description: FormControl<string | null | undefined>,

		/** Type of data flow. */
		type: FormControl<string | null | undefined>,
	}
	export function CreateDataFlowDebugResourcePropertiesFormGroup() {
		return new FormGroup<DataFlowDebugResourcePropertiesFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DataFlowDebugResourcePropertiesFolder {

		/** The name of the folder that this data flow is in. */
		name?: string | null;
	}
	export interface DataFlowDebugResourcePropertiesFolderFormProperties {

		/** The name of the folder that this data flow is in. */
		name: FormControl<string | null | undefined>,
	}
	export function CreateDataFlowDebugResourcePropertiesFolderFormGroup() {
		return new FormGroup<DataFlowDebugResourcePropertiesFolderFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Data flow debug session info. */
	export interface DataFlowDebugSessionInfo {

		/** Compute type of the cluster. */
		computeType?: string | null;

		/**
		 * Core count of the cluster.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		coreCount?: number | null;

		/** The name of the data flow. */
		dataFlowName?: string | null;

		/** Attached integration runtime name of data flow debug session. */
		integrationRuntimeName?: string | null;

		/** Last activity time of data flow debug session. */
		lastActivityTime?: string | null;

		/**
		 * Node count of the cluster. (deprecated property)
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		nodeCount?: number | null;

		/** The ID of data flow debug session. */
		sessionId?: string | null;

		/** Start time of data flow debug session. */
		startTime?: string | null;

		/**
		 * Compute type of the cluster.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		timeToLiveInMinutes?: number | null;
	}

	/** Data flow debug session info. */
	export interface DataFlowDebugSessionInfoFormProperties {

		/** Compute type of the cluster. */
		computeType: FormControl<string | null | undefined>,

		/**
		 * Core count of the cluster.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		coreCount: FormControl<number | null | undefined>,

		/** The name of the data flow. */
		dataFlowName: FormControl<string | null | undefined>,

		/** Attached integration runtime name of data flow debug session. */
		integrationRuntimeName: FormControl<string | null | undefined>,

		/** Last activity time of data flow debug session. */
		lastActivityTime: FormControl<string | null | undefined>,

		/**
		 * Node count of the cluster. (deprecated property)
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		nodeCount: FormControl<number | null | undefined>,

		/** The ID of data flow debug session. */
		sessionId: FormControl<string | null | undefined>,

		/** Start time of data flow debug session. */
		startTime: FormControl<string | null | undefined>,

		/**
		 * Compute type of the cluster.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		timeToLiveInMinutes: FormControl<number | null | undefined>,
	}
	export function CreateDataFlowDebugSessionInfoFormGroup() {
		return new FormGroup<DataFlowDebugSessionInfoFormProperties>({
			computeType: new FormControl<string | null | undefined>(undefined),
			coreCount: new FormControl<number | null | undefined>(undefined),
			dataFlowName: new FormControl<string | null | undefined>(undefined),
			integrationRuntimeName: new FormControl<string | null | undefined>(undefined),
			lastActivityTime: new FormControl<string | null | undefined>(undefined),
			nodeCount: new FormControl<number | null | undefined>(undefined),
			sessionId: new FormControl<string | null | undefined>(undefined),
			startTime: new FormControl<string | null | undefined>(undefined),
			timeToLiveInMinutes: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** A list of data flow resources. */
	export interface DataFlowListResponse {

		/** The link to the next page of results, if any remaining results exist. */
		nextLink?: string | null;

		/**
		 * List of data flows.
		 * Required
		 */
		value: Array<DataFlowResource>;
	}

	/** A list of data flow resources. */
	export interface DataFlowListResponseFormProperties {

		/** The link to the next page of results, if any remaining results exist. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateDataFlowListResponseFormGroup() {
		return new FormGroup<DataFlowListResponseFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Data flow resource type. */
	export interface DataFlowResource extends SubResource {

		/**
		 * Azure Data Factory nested object which contains a flow with data movements and transformations.
		 * Required
		 */
		properties: DataFlowResourceProperties;
	}

	/** Data flow resource type. */
	export interface DataFlowResourceFormProperties extends SubResourceFormProperties {
	}
	export function CreateDataFlowResourceFormGroup() {
		return new FormGroup<DataFlowResourceFormProperties>({
			etag: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DataFlowResourceProperties {

		/** List of tags that can be used for describing the data flow. */
		annotations?: Array<string>;

		/** The description of the data flow. */
		description?: string | null;

		/** The folder that this data flow is in. If not specified, Data flow will appear at the root level. */
		folder?: DataFlowResourcePropertiesFolder;

		/** Type of data flow. */
		type?: string | null;
	}
	export interface DataFlowResourcePropertiesFormProperties {

		/** The description of the data flow. */
		description: FormControl<string | null | undefined>,

		/** Type of data flow. */
		type: FormControl<string | null | undefined>,
	}
	export function CreateDataFlowResourcePropertiesFormGroup() {
		return new FormGroup<DataFlowResourcePropertiesFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DataFlowResourcePropertiesFolder {

		/** The name of the folder that this data flow is in. */
		name?: string | null;
	}
	export interface DataFlowResourcePropertiesFolderFormProperties {

		/** The name of the folder that this data flow is in. */
		name: FormControl<string | null | undefined>,
	}
	export function CreateDataFlowResourcePropertiesFolderFormGroup() {
		return new FormGroup<DataFlowResourcePropertiesFolderFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Data flow reference type. */
	export interface DataFlowReference {

		/** Reference data flow parameters from dataset. */
		datasetParameters?: string | null;

		/**
		 * Reference data flow name.
		 * Required
		 */
		referenceName: string;

		/**
		 * Data flow reference type.
		 * Required
		 */
		type: DataFlowReferenceType;
	}

	/** Data flow reference type. */
	export interface DataFlowReferenceFormProperties {

		/** Reference data flow parameters from dataset. */
		datasetParameters: FormControl<string | null | undefined>,

		/**
		 * Reference data flow name.
		 * Required
		 */
		referenceName: FormControl<string | null | undefined>,

		/**
		 * Data flow reference type.
		 * Required
		 */
		type: FormControl<DataFlowReferenceType | null | undefined>,
	}
	export function CreateDataFlowReferenceFormGroup() {
		return new FormGroup<DataFlowReferenceFormProperties>({
			datasetParameters: new FormControl<string | null | undefined>(undefined),
			referenceName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<DataFlowReferenceType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum DataFlowReferenceType { DataFlowReference = 'DataFlowReference' }


	/** Staging info for execute data flow activity. */
	export interface DataFlowStagingInfo {

		/** Folder path for staging blob. */
		folderPath?: string | null;

		/** Linked service reference type. */
		linkedService?: LinkedServiceReference;
	}

	/** Staging info for execute data flow activity. */
	export interface DataFlowStagingInfoFormProperties {

		/** Folder path for staging blob. */
		folderPath: FormControl<string | null | undefined>,
	}
	export function CreateDataFlowStagingInfoFormGroup() {
		return new FormGroup<DataFlowStagingInfoFormProperties>({
			folderPath: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A list of dataset resources. */
	export interface DatasetListResponse {

		/** The link to the next page of results, if any remaining results exist. */
		nextLink?: string | null;

		/**
		 * List of datasets.
		 * Required
		 */
		value: Array<DatasetResource>;
	}

	/** A list of dataset resources. */
	export interface DatasetListResponseFormProperties {

		/** The link to the next page of results, if any remaining results exist. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateDatasetListResponseFormGroup() {
		return new FormGroup<DatasetListResponseFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Dataset resource type. */
	export interface DatasetResource extends SubResource {

		/**
		 * The Azure Data Factory nested object which identifies data within different data stores, such as tables, files, folders, and documents.
		 * Required
		 */
		properties: DatasetResourceProperties;
	}

	/** Dataset resource type. */
	export interface DatasetResourceFormProperties extends SubResourceFormProperties {
	}
	export function CreateDatasetResourceFormGroup() {
		return new FormGroup<DatasetResourceFormProperties>({
			etag: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DatasetResourceProperties {

		/** List of tags that can be used for describing the Dataset. */
		annotations?: Array<string>;

		/** Dataset description. */
		description?: string | null;

		/** The folder that this Dataset is in. If not specified, Dataset will appear at the root level. */
		folder?: DatasetResourcePropertiesFolder;

		/**
		 * Linked service reference type.
		 * Required
		 */
		linkedServiceName: any;

		/** Definition of all parameters for an entity. */
		parameters?: {[id: string]: DatasetResourcePropertiesParameters };

		/** Columns that define the physical type schema of the dataset. Type: array (or Expression with resultType array), itemType: DatasetSchemaDataElement. */
		schema?: string | null;

		/** Columns that define the structure of the dataset. Type: array (or Expression with resultType array), itemType: DatasetDataElement. */
		structure?: string | null;

		/**
		 * Type of dataset.
		 * Required
		 */
		type: string;
	}
	export interface DatasetResourcePropertiesFormProperties {

		/** Dataset description. */
		description: FormControl<string | null | undefined>,

		/**
		 * Linked service reference type.
		 * Required
		 */
		linkedServiceName: FormControl<any | null | undefined>,

		/** Definition of all parameters for an entity. */
		parameters: FormControl<{[id: string]: DatasetResourcePropertiesParameters } | null | undefined>,

		/** Columns that define the physical type schema of the dataset. Type: array (or Expression with resultType array), itemType: DatasetSchemaDataElement. */
		schema: FormControl<string | null | undefined>,

		/** Columns that define the structure of the dataset. Type: array (or Expression with resultType array), itemType: DatasetDataElement. */
		structure: FormControl<string | null | undefined>,

		/**
		 * Type of dataset.
		 * Required
		 */
		type: FormControl<string | null | undefined>,
	}
	export function CreateDatasetResourcePropertiesFormGroup() {
		return new FormGroup<DatasetResourcePropertiesFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			linkedServiceName: new FormControl<any | null | undefined>(undefined, [Validators.required]),
			parameters: new FormControl<{[id: string]: DatasetResourcePropertiesParameters } | null | undefined>(undefined),
			schema: new FormControl<string | null | undefined>(undefined),
			structure: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DatasetResourcePropertiesFolder {

		/** The name of the folder that this Dataset is in. */
		name?: string | null;
	}
	export interface DatasetResourcePropertiesFolderFormProperties {

		/** The name of the folder that this Dataset is in. */
		name: FormControl<string | null | undefined>,
	}
	export function CreateDatasetResourcePropertiesFolderFormGroup() {
		return new FormGroup<DatasetResourcePropertiesFolderFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DatasetResourcePropertiesParameters {

		/** Default value of parameter. */
		defaultValue?: string | null;

		/**
		 * Parameter type.
		 * Required
		 */
		type: DatasetDebugResourcePropertiesParametersType;
	}
	export interface DatasetResourcePropertiesParametersFormProperties {

		/** Default value of parameter. */
		defaultValue: FormControl<string | null | undefined>,

		/**
		 * Parameter type.
		 * Required
		 */
		type: FormControl<DatasetDebugResourcePropertiesParametersType | null | undefined>,
	}
	export function CreateDatasetResourcePropertiesParametersFormGroup() {
		return new FormGroup<DatasetResourcePropertiesParametersFormProperties>({
			defaultValue: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<DatasetDebugResourcePropertiesParametersType | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Dataset reference type. */
	export interface DatasetReference {

		/** An object mapping parameter names to argument values. */
		parameters?: ParameterValueSpecification;

		/**
		 * Reference dataset name.
		 * Required
		 */
		referenceName: string;

		/**
		 * Dataset reference type.
		 * Required
		 */
		type: DatasetReferenceType;
	}

	/** Dataset reference type. */
	export interface DatasetReferenceFormProperties {

		/**
		 * Reference dataset name.
		 * Required
		 */
		referenceName: FormControl<string | null | undefined>,

		/**
		 * Dataset reference type.
		 * Required
		 */
		type: FormControl<DatasetReferenceType | null | undefined>,
	}
	export function CreateDatasetReferenceFormGroup() {
		return new FormGroup<DatasetReferenceFormProperties>({
			referenceName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<DatasetReferenceType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum DatasetReferenceType { DatasetReference = 'DatasetReference' }


	/** Request body structure for deleting data flow debug session. */
	export interface DeleteDataFlowDebugSessionRequest {

		/** The ID of data flow debug session. */
		sessionId?: string | null;
	}

	/** Request body structure for deleting data flow debug session. */
	export interface DeleteDataFlowDebugSessionRequestFormProperties {

		/** The ID of data flow debug session. */
		sessionId: FormControl<string | null | undefined>,
	}
	export function CreateDeleteDataFlowDebugSessionRequestFormGroup() {
		return new FormGroup<DeleteDataFlowDebugSessionRequestFormProperties>({
			sessionId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The exposure control request. */
	export interface ExposureControlRequest {

		/** The feature name. */
		featureName?: string | null;

		/** The feature type. */
		featureType?: string | null;
	}

	/** The exposure control request. */
	export interface ExposureControlRequestFormProperties {

		/** The feature name. */
		featureName: FormControl<string | null | undefined>,

		/** The feature type. */
		featureType: FormControl<string | null | undefined>,
	}
	export function CreateExposureControlRequestFormGroup() {
		return new FormGroup<ExposureControlRequestFormProperties>({
			featureName: new FormControl<string | null | undefined>(undefined),
			featureType: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The exposure control response. */
	export interface ExposureControlResponse {

		/** The feature name. */
		featureName?: string | null;

		/** The feature value. */
		value?: string | null;
	}

	/** The exposure control response. */
	export interface ExposureControlResponseFormProperties {

		/** The feature name. */
		featureName: FormControl<string | null | undefined>,

		/** The feature value. */
		value: FormControl<string | null | undefined>,
	}
	export function CreateExposureControlResponseFormGroup() {
		return new FormGroup<ExposureControlResponseFormProperties>({
			featureName: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Azure Data Factory expression definition. */
	export interface Expression {

		/**
		 * Expression type.
		 * Required
		 */
		type: ExpressionType;

		/**
		 * Expression value.
		 * Required
		 */
		value: string;
	}

	/** Azure Data Factory expression definition. */
	export interface ExpressionFormProperties {

		/**
		 * Expression type.
		 * Required
		 */
		type: FormControl<ExpressionType | null | undefined>,

		/**
		 * Expression value.
		 * Required
		 */
		value: FormControl<string | null | undefined>,
	}
	export function CreateExpressionFormGroup() {
		return new FormGroup<ExpressionFormProperties>({
			type: new FormControl<ExpressionType | null | undefined>(undefined, [Validators.required]),
			value: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum ExpressionType { Expression = 'Expression' }


	/** Factory resource type. */
	export interface Factory {

		/** Identity properties of the factory resource. */
		identity?: FactoryIdentity;

		/** Factory resource properties. */
		properties?: FactoryProperties;
	}

	/** Factory resource type. */
	export interface FactoryFormProperties {
	}
	export function CreateFactoryFormGroup() {
		return new FormGroup<FactoryFormProperties>({
		});

	}


	/** Factory's GitHub repo information. */
	export interface FactoryGitHubConfiguration {

		/** GitHub Enterprise host name. For example: https://github.mydomain.com */
		hostName?: string | null;
	}

	/** Factory's GitHub repo information. */
	export interface FactoryGitHubConfigurationFormProperties {

		/** GitHub Enterprise host name. For example: https://github.mydomain.com */
		hostName: FormControl<string | null | undefined>,
	}
	export function CreateFactoryGitHubConfigurationFormGroup() {
		return new FormGroup<FactoryGitHubConfigurationFormProperties>({
			hostName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Identity properties of the factory resource. */
	export interface FactoryIdentity {

		/** The principal id of the identity. */
		principalId?: string | null;

		/** The client tenant id of the identity. */
		tenantId?: string | null;

		/**
		 * The identity type. Currently the only supported type is 'SystemAssigned'.
		 * Required
		 */
		type: FactoryIdentityType;
	}

	/** Identity properties of the factory resource. */
	export interface FactoryIdentityFormProperties {

		/** The principal id of the identity. */
		principalId: FormControl<string | null | undefined>,

		/** The client tenant id of the identity. */
		tenantId: FormControl<string | null | undefined>,

		/**
		 * The identity type. Currently the only supported type is 'SystemAssigned'.
		 * Required
		 */
		type: FormControl<FactoryIdentityType | null | undefined>,
	}
	export function CreateFactoryIdentityFormGroup() {
		return new FormGroup<FactoryIdentityFormProperties>({
			principalId: new FormControl<string | null | undefined>(undefined),
			tenantId: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<FactoryIdentityType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum FactoryIdentityType { SystemAssigned = 'SystemAssigned' }


	/** A list of factory resources. */
	export interface FactoryListResponse {

		/** The link to the next page of results, if any remaining results exist. */
		nextLink?: string | null;

		/**
		 * List of factories.
		 * Required
		 */
		value: Array<Factory>;
	}

	/** A list of factory resources. */
	export interface FactoryListResponseFormProperties {

		/** The link to the next page of results, if any remaining results exist. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateFactoryListResponseFormGroup() {
		return new FormGroup<FactoryListResponseFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Factory resource properties. */
	export interface FactoryProperties {

		/** Time the factory was created in ISO8601 format. */
		createTime?: Date | null;

		/** Factory provisioning state, example Succeeded. */
		provisioningState?: string | null;

		/** Factory's git repo information. */
		repoConfiguration?: FactoryRepoConfiguration;

		/** Version of the factory. */
		version?: string | null;
	}

	/** Factory resource properties. */
	export interface FactoryPropertiesFormProperties {

		/** Time the factory was created in ISO8601 format. */
		createTime: FormControl<Date | null | undefined>,

		/** Factory provisioning state, example Succeeded. */
		provisioningState: FormControl<string | null | undefined>,

		/** Version of the factory. */
		version: FormControl<string | null | undefined>,
	}
	export function CreateFactoryPropertiesFormGroup() {
		return new FormGroup<FactoryPropertiesFormProperties>({
			createTime: new FormControl<Date | null | undefined>(undefined),
			provisioningState: new FormControl<string | null | undefined>(undefined),
			version: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Factory's git repo information. */
	export interface FactoryRepoConfiguration {

		/**
		 * Account name.
		 * Required
		 */
		accountName: string;

		/**
		 * Collaboration branch.
		 * Required
		 */
		collaborationBranch: string;

		/** Last commit id. */
		lastCommitId?: string | null;

		/**
		 * Repository name.
		 * Required
		 */
		repositoryName: string;

		/**
		 * Root folder.
		 * Required
		 */
		rootFolder: string;

		/**
		 * Type of repo configuration.
		 * Required
		 */
		type: string;
	}

	/** Factory's git repo information. */
	export interface FactoryRepoConfigurationFormProperties {

		/**
		 * Account name.
		 * Required
		 */
		accountName: FormControl<string | null | undefined>,

		/**
		 * Collaboration branch.
		 * Required
		 */
		collaborationBranch: FormControl<string | null | undefined>,

		/** Last commit id. */
		lastCommitId: FormControl<string | null | undefined>,

		/**
		 * Repository name.
		 * Required
		 */
		repositoryName: FormControl<string | null | undefined>,

		/**
		 * Root folder.
		 * Required
		 */
		rootFolder: FormControl<string | null | undefined>,

		/**
		 * Type of repo configuration.
		 * Required
		 */
		type: FormControl<string | null | undefined>,
	}
	export function CreateFactoryRepoConfigurationFormGroup() {
		return new FormGroup<FactoryRepoConfigurationFormProperties>({
			accountName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			collaborationBranch: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			lastCommitId: new FormControl<string | null | undefined>(undefined),
			repositoryName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			rootFolder: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Factory's git repo information. */
	export interface FactoryRepoUpdate {

		/** The factory resource id. */
		factoryResourceId?: string | null;

		/** Factory's git repo information. */
		repoConfiguration?: FactoryRepoConfiguration;
	}

	/** Factory's git repo information. */
	export interface FactoryRepoUpdateFormProperties {

		/** The factory resource id. */
		factoryResourceId: FormControl<string | null | undefined>,
	}
	export function CreateFactoryRepoUpdateFormGroup() {
		return new FormGroup<FactoryRepoUpdateFormProperties>({
			factoryResourceId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Parameters for updating a factory resource. */
	export interface FactoryUpdateParameters {

		/** Identity properties of the factory resource. */
		identity?: FactoryIdentity;

		/** The resource tags. */
		tags?: {[id: string]: string };
	}

	/** Parameters for updating a factory resource. */
	export interface FactoryUpdateParametersFormProperties {

		/** The resource tags. */
		tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateFactoryUpdateParametersFormGroup() {
		return new FormGroup<FactoryUpdateParametersFormProperties>({
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}


	/** Factory's VSTS repo information. */
	export interface FactoryVSTSConfiguration {

		/**
		 * VSTS project name.
		 * Required
		 */
		projectName: string;

		/** VSTS tenant id. */
		tenantId?: string | null;
	}

	/** Factory's VSTS repo information. */
	export interface FactoryVSTSConfigurationFormProperties {

		/**
		 * VSTS project name.
		 * Required
		 */
		projectName: FormControl<string | null | undefined>,

		/** VSTS tenant id. */
		tenantId: FormControl<string | null | undefined>,
	}
	export function CreateFactoryVSTSConfigurationFormGroup() {
		return new FormGroup<FactoryVSTSConfigurationFormProperties>({
			projectName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			tenantId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response body structure for get data factory operation status. */
	export interface GetDataFactoryOperationStatusResponse {

		/** Status of the operation. */
		status?: string | null;
	}

	/** Response body structure for get data factory operation status. */
	export interface GetDataFactoryOperationStatusResponseFormProperties {

		/** Status of the operation. */
		status: FormControl<string | null | undefined>,
	}
	export function CreateGetDataFactoryOperationStatusResponseFormGroup() {
		return new FormGroup<GetDataFactoryOperationStatusResponseFormProperties>({
			status: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The request payload of get SSIS object metadata. */
	export interface GetSsisObjectMetadataRequest {

		/** Metadata path. */
		metadataPath?: string | null;
	}

	/** The request payload of get SSIS object metadata. */
	export interface GetSsisObjectMetadataRequestFormProperties {

		/** Metadata path. */
		metadataPath: FormControl<string | null | undefined>,
	}
	export function CreateGetSsisObjectMetadataRequestFormGroup() {
		return new FormGroup<GetSsisObjectMetadataRequestFormProperties>({
			metadataPath: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Get GitHub access token request definition. */
	export interface GitHubAccessTokenRequest {

		/**
		 * GitHub access code.
		 * Required
		 */
		gitHubAccessCode: string;

		/**
		 * GitHub access token base URL.
		 * Required
		 */
		gitHubAccessTokenBaseUrl: string;

		/** GitHub application client ID. */
		gitHubClientId?: string | null;
	}

	/** Get GitHub access token request definition. */
	export interface GitHubAccessTokenRequestFormProperties {

		/**
		 * GitHub access code.
		 * Required
		 */
		gitHubAccessCode: FormControl<string | null | undefined>,

		/**
		 * GitHub access token base URL.
		 * Required
		 */
		gitHubAccessTokenBaseUrl: FormControl<string | null | undefined>,

		/** GitHub application client ID. */
		gitHubClientId: FormControl<string | null | undefined>,
	}
	export function CreateGitHubAccessTokenRequestFormGroup() {
		return new FormGroup<GitHubAccessTokenRequestFormProperties>({
			gitHubAccessCode: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			gitHubAccessTokenBaseUrl: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			gitHubClientId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Get GitHub access token response definition. */
	export interface GitHubAccessTokenResponse {

		/** GitHub access token. */
		gitHubAccessToken?: string | null;
	}

	/** Get GitHub access token response definition. */
	export interface GitHubAccessTokenResponseFormProperties {

		/** GitHub access token. */
		gitHubAccessToken: FormControl<string | null | undefined>,
	}
	export function CreateGitHubAccessTokenResponseFormGroup() {
		return new FormGroup<GitHubAccessTokenResponseFormProperties>({
			gitHubAccessToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Integration runtime debug resource. */
	export interface IntegrationRuntimeDebugResource extends SubResourceDebugResource {

		/**
		 * Azure Data Factory nested object which serves as a compute resource for activities.
		 * Required
		 */
		properties: IntegrationRuntimeDebugResourceProperties;
	}

	/** Integration runtime debug resource. */
	export interface IntegrationRuntimeDebugResourceFormProperties extends SubResourceDebugResourceFormProperties {
	}
	export function CreateIntegrationRuntimeDebugResourceFormGroup() {
		return new FormGroup<IntegrationRuntimeDebugResourceFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface IntegrationRuntimeDebugResourceProperties {

		/** Integration runtime description. */
		description?: string | null;

		/**
		 * The type of integration runtime.
		 * Required
		 */
		type: IntegrationRuntimeDebugResourcePropertiesType;
	}
	export interface IntegrationRuntimeDebugResourcePropertiesFormProperties {

		/** Integration runtime description. */
		description: FormControl<string | null | undefined>,

		/**
		 * The type of integration runtime.
		 * Required
		 */
		type: FormControl<IntegrationRuntimeDebugResourcePropertiesType | null | undefined>,
	}
	export function CreateIntegrationRuntimeDebugResourcePropertiesFormGroup() {
		return new FormGroup<IntegrationRuntimeDebugResourcePropertiesFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<IntegrationRuntimeDebugResourcePropertiesType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum IntegrationRuntimeDebugResourcePropertiesType { Managed = 'Managed', SelfHosted = 'SelfHosted' }


	/** A list of integration runtime resources. */
	export interface IntegrationRuntimeListResponse {

		/** The link to the next page of results, if any remaining results exist. */
		nextLink?: string | null;

		/**
		 * List of integration runtimes.
		 * Required
		 */
		value: Array<IntegrationRuntimeResource>;
	}

	/** A list of integration runtime resources. */
	export interface IntegrationRuntimeListResponseFormProperties {

		/** The link to the next page of results, if any remaining results exist. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateIntegrationRuntimeListResponseFormGroup() {
		return new FormGroup<IntegrationRuntimeListResponseFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Integration runtime resource type. */
	export interface IntegrationRuntimeResource extends SubResource {

		/**
		 * Azure Data Factory nested object which serves as a compute resource for activities.
		 * Required
		 */
		properties: IntegrationRuntimeResourceProperties;
	}

	/** Integration runtime resource type. */
	export interface IntegrationRuntimeResourceFormProperties extends SubResourceFormProperties {
	}
	export function CreateIntegrationRuntimeResourceFormGroup() {
		return new FormGroup<IntegrationRuntimeResourceFormProperties>({
			etag: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface IntegrationRuntimeResourceProperties {

		/** Integration runtime description. */
		description?: string | null;

		/**
		 * The type of integration runtime.
		 * Required
		 */
		type: IntegrationRuntimeDebugResourcePropertiesType;
	}
	export interface IntegrationRuntimeResourcePropertiesFormProperties {

		/** Integration runtime description. */
		description: FormControl<string | null | undefined>,

		/**
		 * The type of integration runtime.
		 * Required
		 */
		type: FormControl<IntegrationRuntimeDebugResourcePropertiesType | null | undefined>,
	}
	export function CreateIntegrationRuntimeResourcePropertiesFormGroup() {
		return new FormGroup<IntegrationRuntimeResourcePropertiesFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<IntegrationRuntimeDebugResourcePropertiesType | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Integration runtime reference type. */
	export interface IntegrationRuntimeReference {

		/** An object mapping parameter names to argument values. */
		parameters?: {[id: string]: any };

		/**
		 * Reference integration runtime name.
		 * Required
		 */
		referenceName: string;

		/**
		 * Type of integration runtime.
		 * Required
		 */
		type: IntegrationRuntimeReferenceType;
	}

	/** Integration runtime reference type. */
	export interface IntegrationRuntimeReferenceFormProperties {

		/** An object mapping parameter names to argument values. */
		parameters: FormControl<{[id: string]: any } | null | undefined>,

		/**
		 * Reference integration runtime name.
		 * Required
		 */
		referenceName: FormControl<string | null | undefined>,

		/**
		 * Type of integration runtime.
		 * Required
		 */
		type: FormControl<IntegrationRuntimeReferenceType | null | undefined>,
	}
	export function CreateIntegrationRuntimeReferenceFormGroup() {
		return new FormGroup<IntegrationRuntimeReferenceFormProperties>({
			parameters: new FormControl<{[id: string]: any } | null | undefined>(undefined),
			referenceName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<IntegrationRuntimeReferenceType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum IntegrationRuntimeReferenceType { IntegrationRuntimeReference = 'IntegrationRuntimeReference' }


	/** A list of integration runtime status. */
	export interface IntegrationRuntimeStatusListResponse {

		/** The link to the next page of results, if any remaining results exist. */
		nextLink?: string | null;

		/**
		 * List of integration runtime status.
		 * Required
		 */
		value: Array<IntegrationRuntimeStatusResponse>;
	}

	/** A list of integration runtime status. */
	export interface IntegrationRuntimeStatusListResponseFormProperties {

		/** The link to the next page of results, if any remaining results exist. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateIntegrationRuntimeStatusListResponseFormGroup() {
		return new FormGroup<IntegrationRuntimeStatusListResponseFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Integration runtime status response. */
	export interface IntegrationRuntimeStatusResponse {

		/** The integration runtime name. */
		name?: string | null;

		/**
		 * Integration runtime status.
		 * Required
		 */
		properties: IntegrationRuntimeStatusResponseProperties;
	}

	/** Integration runtime status response. */
	export interface IntegrationRuntimeStatusResponseFormProperties {

		/** The integration runtime name. */
		name: FormControl<string | null | undefined>,
	}
	export function CreateIntegrationRuntimeStatusResponseFormGroup() {
		return new FormGroup<IntegrationRuntimeStatusResponseFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface IntegrationRuntimeStatusResponseProperties {

		/** The data factory name which the integration runtime belong to. */
		dataFactoryName?: string | null;

		/** The state of integration runtime. */
		state?: IntegrationRuntimeStatusResponsePropertiesState | null;

		/**
		 * The type of integration runtime.
		 * Required
		 */
		type: IntegrationRuntimeDebugResourcePropertiesType;
	}
	export interface IntegrationRuntimeStatusResponsePropertiesFormProperties {

		/** The data factory name which the integration runtime belong to. */
		dataFactoryName: FormControl<string | null | undefined>,

		/** The state of integration runtime. */
		state: FormControl<IntegrationRuntimeStatusResponsePropertiesState | null | undefined>,

		/**
		 * The type of integration runtime.
		 * Required
		 */
		type: FormControl<IntegrationRuntimeDebugResourcePropertiesType | null | undefined>,
	}
	export function CreateIntegrationRuntimeStatusResponsePropertiesFormGroup() {
		return new FormGroup<IntegrationRuntimeStatusResponsePropertiesFormProperties>({
			dataFactoryName: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<IntegrationRuntimeStatusResponsePropertiesState | null | undefined>(undefined),
			type: new FormControl<IntegrationRuntimeDebugResourcePropertiesType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum IntegrationRuntimeStatusResponsePropertiesState { Initial = 'Initial', Stopped = 'Stopped', Started = 'Started', Starting = 'Starting', Stopping = 'Stopping', NeedRegistration = 'NeedRegistration', Online = 'Online', Limited = 'Limited', Offline = 'Offline', AccessDenied = 'AccessDenied' }


	/** Data factory name for linked integration runtime request. */
	export interface LinkedIntegrationRuntimeRequest {

		/**
		 * The data factory name for linked integration runtime.
		 * Required
		 */
		factoryName: string;
	}

	/** Data factory name for linked integration runtime request. */
	export interface LinkedIntegrationRuntimeRequestFormProperties {

		/**
		 * The data factory name for linked integration runtime.
		 * Required
		 */
		factoryName: FormControl<string | null | undefined>,
	}
	export function CreateLinkedIntegrationRuntimeRequestFormGroup() {
		return new FormGroup<LinkedIntegrationRuntimeRequestFormProperties>({
			factoryName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** A list of linked service resources. */
	export interface LinkedServiceListResponse {

		/** The link to the next page of results, if any remaining results exist. */
		nextLink?: string | null;

		/**
		 * List of linked services.
		 * Required
		 */
		value: Array<LinkedServiceResource>;
	}

	/** A list of linked service resources. */
	export interface LinkedServiceListResponseFormProperties {

		/** The link to the next page of results, if any remaining results exist. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateLinkedServiceListResponseFormGroup() {
		return new FormGroup<LinkedServiceListResponseFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Linked service resource type. */
	export interface LinkedServiceResource extends SubResource {

		/**
		 * The Azure Data Factory nested object which contains the information and credential which can be used to connect with related store or compute resource.
		 * Required
		 */
		properties: LinkedServiceResourceProperties;
	}

	/** Linked service resource type. */
	export interface LinkedServiceResourceFormProperties extends SubResourceFormProperties {
	}
	export function CreateLinkedServiceResourceFormGroup() {
		return new FormGroup<LinkedServiceResourceFormProperties>({
			etag: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface LinkedServiceResourceProperties {

		/** List of tags that can be used for describing the linked service. */
		annotations?: Array<string>;

		/** Integration runtime reference type. */
		connectVia?: any;

		/** Linked service description. */
		description?: string | null;

		/** Definition of all parameters for an entity. */
		parameters?: {[id: string]: LinkedServiceResourcePropertiesParameters };

		/**
		 * Type of linked service.
		 * Required
		 */
		type: string;
	}
	export interface LinkedServiceResourcePropertiesFormProperties {

		/** Integration runtime reference type. */
		connectVia: FormControl<any | null | undefined>,

		/** Linked service description. */
		description: FormControl<string | null | undefined>,

		/** Definition of all parameters for an entity. */
		parameters: FormControl<{[id: string]: LinkedServiceResourcePropertiesParameters } | null | undefined>,

		/**
		 * Type of linked service.
		 * Required
		 */
		type: FormControl<string | null | undefined>,
	}
	export function CreateLinkedServiceResourcePropertiesFormGroup() {
		return new FormGroup<LinkedServiceResourcePropertiesFormProperties>({
			connectVia: new FormControl<any | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			parameters: new FormControl<{[id: string]: LinkedServiceResourcePropertiesParameters } | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface LinkedServiceResourcePropertiesParameters {

		/** Default value of parameter. */
		defaultValue?: string | null;

		/**
		 * Parameter type.
		 * Required
		 */
		type: DatasetDebugResourcePropertiesParametersType;
	}
	export interface LinkedServiceResourcePropertiesParametersFormProperties {

		/** Default value of parameter. */
		defaultValue: FormControl<string | null | undefined>,

		/**
		 * Parameter type.
		 * Required
		 */
		type: FormControl<DatasetDebugResourcePropertiesParametersType | null | undefined>,
	}
	export function CreateLinkedServiceResourcePropertiesParametersFormGroup() {
		return new FormGroup<LinkedServiceResourcePropertiesParametersFormProperties>({
			defaultValue: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<DatasetDebugResourcePropertiesParametersType | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Linked service reference type. */
	export interface LinkedServiceReference {

		/** An object mapping parameter names to argument values. */
		parameters?: {[id: string]: any };

		/**
		 * Reference LinkedService name.
		 * Required
		 */
		referenceName: string;

		/**
		 * Linked service reference type.
		 * Required
		 */
		type: LinkedServiceReferenceType;
	}

	/** Linked service reference type. */
	export interface LinkedServiceReferenceFormProperties {

		/** An object mapping parameter names to argument values. */
		parameters: FormControl<{[id: string]: any } | null | undefined>,

		/**
		 * Reference LinkedService name.
		 * Required
		 */
		referenceName: FormControl<string | null | undefined>,

		/**
		 * Linked service reference type.
		 * Required
		 */
		type: FormControl<LinkedServiceReferenceType | null | undefined>,
	}
	export function CreateLinkedServiceReferenceFormGroup() {
		return new FormGroup<LinkedServiceReferenceFormProperties>({
			parameters: new FormControl<{[id: string]: any } | null | undefined>(undefined),
			referenceName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<LinkedServiceReferenceType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum LinkedServiceReferenceType { LinkedServiceReference = 'LinkedServiceReference' }


	/** Azure Data Factory API operation definition. */
	export interface Operation {

		/** Metadata associated with the operation. */
		display?: any;

		/** Operation name: {provider}/{resource}/{operation} */
		name?: string | null;

		/** The intended executor of the operation. */
		origin?: string | null;

		/** Additional details about an operation. */
		properties?: OperationProperties;
	}

	/** Azure Data Factory API operation definition. */
	export interface OperationFormProperties {

		/** Metadata associated with the operation. */
		display: FormControl<any | null | undefined>,

		/** Operation name: {provider}/{resource}/{operation} */
		name: FormControl<string | null | undefined>,

		/** The intended executor of the operation. */
		origin: FormControl<string | null | undefined>,
	}
	export function CreateOperationFormGroup() {
		return new FormGroup<OperationFormProperties>({
			display: new FormControl<any | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			origin: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Additional details about an operation. */
	export interface OperationProperties {

		/** Details about a service operation. */
		serviceSpecification?: OperationServiceSpecification;
	}

	/** Additional details about an operation. */
	export interface OperationPropertiesFormProperties {
	}
	export function CreateOperationPropertiesFormGroup() {
		return new FormGroup<OperationPropertiesFormProperties>({
		});

	}


	/** Details about a service operation. */
	export interface OperationServiceSpecification {

		/** Details about operations related to logs. */
		logSpecifications?: Array<OperationLogSpecification>;

		/** Details about operations related to metrics. */
		metricSpecifications?: Array<OperationMetricSpecification>;
	}

	/** Details about a service operation. */
	export interface OperationServiceSpecificationFormProperties {
	}
	export function CreateOperationServiceSpecificationFormGroup() {
		return new FormGroup<OperationServiceSpecificationFormProperties>({
		});

	}


	/** Details about an operation related to logs. */
	export interface OperationLogSpecification {

		/** Blobs created in the customer storage account, per hour. */
		blobDuration?: string | null;

		/** Localized display name. */
		displayName?: string | null;

		/** The name of the log category. */
		name?: string | null;
	}

	/** Details about an operation related to logs. */
	export interface OperationLogSpecificationFormProperties {

		/** Blobs created in the customer storage account, per hour. */
		blobDuration: FormControl<string | null | undefined>,

		/** Localized display name. */
		displayName: FormControl<string | null | undefined>,

		/** The name of the log category. */
		name: FormControl<string | null | undefined>,
	}
	export function CreateOperationLogSpecificationFormGroup() {
		return new FormGroup<OperationLogSpecificationFormProperties>({
			blobDuration: new FormControl<string | null | undefined>(undefined),
			displayName: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Details about an operation related to metrics. */
	export interface OperationMetricSpecification {

		/** The type of metric aggregation. */
		aggregationType?: string | null;

		/** Defines how often data for metrics becomes available. */
		availabilities?: Array<OperationMetricAvailability>;

		/** Defines the metric dimension. */
		dimensions?: Array<OperationMetricDimension>;

		/** The description of the metric. */
		displayDescription?: string | null;

		/** Localized display name of the metric. */
		displayName?: string | null;

		/** Whether or not the service is using regional MDM accounts. */
		enableRegionalMdmAccount?: string | null;

		/** The name of the metric. */
		name?: string | null;

		/** The name of the MDM account. */
		sourceMdmAccount?: string | null;

		/** The name of the MDM namespace. */
		sourceMdmNamespace?: string | null;

		/** The unit that the metric is measured in. */
		unit?: string | null;
	}

	/** Details about an operation related to metrics. */
	export interface OperationMetricSpecificationFormProperties {

		/** The type of metric aggregation. */
		aggregationType: FormControl<string | null | undefined>,

		/** The description of the metric. */
		displayDescription: FormControl<string | null | undefined>,

		/** Localized display name of the metric. */
		displayName: FormControl<string | null | undefined>,

		/** Whether or not the service is using regional MDM accounts. */
		enableRegionalMdmAccount: FormControl<string | null | undefined>,

		/** The name of the metric. */
		name: FormControl<string | null | undefined>,

		/** The name of the MDM account. */
		sourceMdmAccount: FormControl<string | null | undefined>,

		/** The name of the MDM namespace. */
		sourceMdmNamespace: FormControl<string | null | undefined>,

		/** The unit that the metric is measured in. */
		unit: FormControl<string | null | undefined>,
	}
	export function CreateOperationMetricSpecificationFormGroup() {
		return new FormGroup<OperationMetricSpecificationFormProperties>({
			aggregationType: new FormControl<string | null | undefined>(undefined),
			displayDescription: new FormControl<string | null | undefined>(undefined),
			displayName: new FormControl<string | null | undefined>(undefined),
			enableRegionalMdmAccount: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			sourceMdmAccount: new FormControl<string | null | undefined>(undefined),
			sourceMdmNamespace: new FormControl<string | null | undefined>(undefined),
			unit: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Defines how often data for a metric becomes available. */
	export interface OperationMetricAvailability {

		/** Blob created in the customer storage account, per hour. */
		blobDuration?: string | null;

		/** The granularity for the metric. */
		timeGrain?: string | null;
	}

	/** Defines how often data for a metric becomes available. */
	export interface OperationMetricAvailabilityFormProperties {

		/** Blob created in the customer storage account, per hour. */
		blobDuration: FormControl<string | null | undefined>,

		/** The granularity for the metric. */
		timeGrain: FormControl<string | null | undefined>,
	}
	export function CreateOperationMetricAvailabilityFormGroup() {
		return new FormGroup<OperationMetricAvailabilityFormProperties>({
			blobDuration: new FormControl<string | null | undefined>(undefined),
			timeGrain: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Defines the metric dimension. */
	export interface OperationMetricDimension {

		/** The display name of the metric dimension. */
		displayName?: string | null;

		/** The name of the dimension for the metric. */
		name?: string | null;

		/** Whether the dimension should be exported to Azure Monitor. */
		toBeExportedForShoebox?: boolean | null;
	}

	/** Defines the metric dimension. */
	export interface OperationMetricDimensionFormProperties {

		/** The display name of the metric dimension. */
		displayName: FormControl<string | null | undefined>,

		/** The name of the dimension for the metric. */
		name: FormControl<string | null | undefined>,

		/** Whether the dimension should be exported to Azure Monitor. */
		toBeExportedForShoebox: FormControl<boolean | null | undefined>,
	}
	export function CreateOperationMetricDimensionFormGroup() {
		return new FormGroup<OperationMetricDimensionFormProperties>({
			displayName: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			toBeExportedForShoebox: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** A list of operations that can be performed by the Data Factory service. */
	export interface OperationListResponse {

		/** The link to the next page of results, if any remaining results exist. */
		nextLink?: string | null;

		/** List of Data Factory operations supported by the Data Factory resource provider. */
		value?: Array<Operation>;
	}

	/** A list of operations that can be performed by the Data Factory service. */
	export interface OperationListResponseFormProperties {

		/** The link to the next page of results, if any remaining results exist. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateOperationListResponseFormGroup() {
		return new FormGroup<OperationListResponseFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Definition of all parameters for an entity. */
	export interface ParameterDefinitionSpecification {
	}

	/** Definition of all parameters for an entity. */
	export interface ParameterDefinitionSpecificationFormProperties {
	}
	export function CreateParameterDefinitionSpecificationFormGroup() {
		return new FormGroup<ParameterDefinitionSpecificationFormProperties>({
		});

	}


	/** Definition of a single parameter for an entity. */
	export interface ParameterSpecification {

		/** Default value of parameter. */
		defaultValue?: string | null;

		/**
		 * Parameter type.
		 * Required
		 */
		type: DatasetDebugResourcePropertiesParametersType;
	}

	/** Definition of a single parameter for an entity. */
	export interface ParameterSpecificationFormProperties {

		/** Default value of parameter. */
		defaultValue: FormControl<string | null | undefined>,

		/**
		 * Parameter type.
		 * Required
		 */
		type: FormControl<DatasetDebugResourcePropertiesParametersType | null | undefined>,
	}
	export function CreateParameterSpecificationFormGroup() {
		return new FormGroup<ParameterSpecificationFormProperties>({
			defaultValue: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<DatasetDebugResourcePropertiesParametersType | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** A list of pipeline resources. */
	export interface PipelineListResponse {

		/** The link to the next page of results, if any remaining results exist. */
		nextLink?: string | null;

		/**
		 * List of pipelines.
		 * Required
		 */
		value: Array<PipelineResource>;
	}

	/** A list of pipeline resources. */
	export interface PipelineListResponseFormProperties {

		/** The link to the next page of results, if any remaining results exist. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreatePipelineListResponseFormGroup() {
		return new FormGroup<PipelineListResponseFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Pipeline resource type. */
	export interface PipelineResource {

		/**
		 * A data factory pipeline.
		 * Required
		 */
		properties: PipelineResourceProperties;
	}

	/** Pipeline resource type. */
	export interface PipelineResourceFormProperties {
	}
	export function CreatePipelineResourceFormGroup() {
		return new FormGroup<PipelineResourceFormProperties>({
		});

	}

	export interface PipelineResourceProperties {

		/** List of activities in pipeline. */
		PipelineResourcePropertiesActivities?: Array<PipelineResourcePropertiesActivities>;

		/** List of tags that can be used for describing the Pipeline. */
		annotations?: Array<string>;

		/**
		 * The max number of concurrent runs for the pipeline.
		 * Minimum: 1
		 */
		concurrency?: number | null;

		/** The description of the pipeline. */
		description?: string | null;

		/** The folder that this Pipeline is in. If not specified, Pipeline will appear at the root level. */
		folder?: PipelineResourcePropertiesFolder;

		/** Definition of all parameters for an entity. */
		parameters?: {[id: string]: PipelineResourcePropertiesParameters };

		/** Dimensions emitted by Pipeline. */
		runDimensions?: {[id: string]: any };

		/** Definition of variable for a Pipeline. */
		variables?: {[id: string]: PipelineResourcePropertiesVariables };
	}
	export interface PipelineResourcePropertiesFormProperties {

		/**
		 * The max number of concurrent runs for the pipeline.
		 * Minimum: 1
		 */
		concurrency: FormControl<number | null | undefined>,

		/** The description of the pipeline. */
		description: FormControl<string | null | undefined>,

		/** Definition of all parameters for an entity. */
		parameters: FormControl<{[id: string]: PipelineResourcePropertiesParameters } | null | undefined>,

		/** Dimensions emitted by Pipeline. */
		runDimensions: FormControl<{[id: string]: any } | null | undefined>,

		/** Definition of variable for a Pipeline. */
		variables: FormControl<{[id: string]: PipelineResourcePropertiesVariables } | null | undefined>,
	}
	export function CreatePipelineResourcePropertiesFormGroup() {
		return new FormGroup<PipelineResourcePropertiesFormProperties>({
			concurrency: new FormControl<number | null | undefined>(undefined, [Validators.min(1)]),
			description: new FormControl<string | null | undefined>(undefined),
			parameters: new FormControl<{[id: string]: PipelineResourcePropertiesParameters } | null | undefined>(undefined),
			runDimensions: new FormControl<{[id: string]: any } | null | undefined>(undefined),
			variables: new FormControl<{[id: string]: PipelineResourcePropertiesVariables } | null | undefined>(undefined),
		});

	}

	export interface PipelineResourcePropertiesActivities {

		/** Activity depends on condition. */
		PipelineResourcePropertiesActivitiesDependsOn?: Array<PipelineResourcePropertiesActivitiesDependsOn>;

		/** Activity description. */
		description?: string | null;

		/**
		 * Activity name.
		 * Required
		 */
		name: string;

		/**
		 * Type of activity.
		 * Required
		 */
		type: string;

		/** Activity user properties. */
		PipelineResourcePropertiesActivitiesUserProperties?: Array<PipelineResourcePropertiesActivitiesUserProperties>;
	}
	export interface PipelineResourcePropertiesActivitiesFormProperties {

		/** Activity description. */
		description: FormControl<string | null | undefined>,

		/**
		 * Activity name.
		 * Required
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * Type of activity.
		 * Required
		 */
		type: FormControl<string | null | undefined>,
	}
	export function CreatePipelineResourcePropertiesActivitiesFormGroup() {
		return new FormGroup<PipelineResourcePropertiesActivitiesFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface PipelineResourcePropertiesActivitiesDependsOn {

		/**
		 * Activity name.
		 * Required
		 */
		activity: string;

		/**
		 * Match-Condition for the dependency.
		 * Required
		 */
		dependencyConditions: Array<string>;
	}
	export interface PipelineResourcePropertiesActivitiesDependsOnFormProperties {

		/**
		 * Activity name.
		 * Required
		 */
		activity: FormControl<string | null | undefined>,
	}
	export function CreatePipelineResourcePropertiesActivitiesDependsOnFormGroup() {
		return new FormGroup<PipelineResourcePropertiesActivitiesDependsOnFormProperties>({
			activity: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface PipelineResourcePropertiesActivitiesUserProperties {

		/**
		 * User property name.
		 * Required
		 */
		name: string;

		/**
		 * User property value. Type: string (or Expression with resultType string).
		 * Required
		 */
		value: string;
	}
	export interface PipelineResourcePropertiesActivitiesUserPropertiesFormProperties {

		/**
		 * User property name.
		 * Required
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * User property value. Type: string (or Expression with resultType string).
		 * Required
		 */
		value: FormControl<string | null | undefined>,
	}
	export function CreatePipelineResourcePropertiesActivitiesUserPropertiesFormGroup() {
		return new FormGroup<PipelineResourcePropertiesActivitiesUserPropertiesFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			value: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface PipelineResourcePropertiesFolder {

		/** The name of the folder that this Pipeline is in. */
		name?: string | null;
	}
	export interface PipelineResourcePropertiesFolderFormProperties {

		/** The name of the folder that this Pipeline is in. */
		name: FormControl<string | null | undefined>,
	}
	export function CreatePipelineResourcePropertiesFolderFormGroup() {
		return new FormGroup<PipelineResourcePropertiesFolderFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PipelineResourcePropertiesParameters {

		/** Default value of parameter. */
		defaultValue?: string | null;

		/**
		 * Parameter type.
		 * Required
		 */
		type: DatasetDebugResourcePropertiesParametersType;
	}
	export interface PipelineResourcePropertiesParametersFormProperties {

		/** Default value of parameter. */
		defaultValue: FormControl<string | null | undefined>,

		/**
		 * Parameter type.
		 * Required
		 */
		type: FormControl<DatasetDebugResourcePropertiesParametersType | null | undefined>,
	}
	export function CreatePipelineResourcePropertiesParametersFormGroup() {
		return new FormGroup<PipelineResourcePropertiesParametersFormProperties>({
			defaultValue: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<DatasetDebugResourcePropertiesParametersType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface PipelineResourcePropertiesVariables {

		/** Default value of variable. */
		defaultValue?: string | null;

		/**
		 * Variable type.
		 * Required
		 */
		type: PipelineResourcePropertiesVariablesType;
	}
	export interface PipelineResourcePropertiesVariablesFormProperties {

		/** Default value of variable. */
		defaultValue: FormControl<string | null | undefined>,

		/**
		 * Variable type.
		 * Required
		 */
		type: FormControl<PipelineResourcePropertiesVariablesType | null | undefined>,
	}
	export function CreatePipelineResourcePropertiesVariablesFormGroup() {
		return new FormGroup<PipelineResourcePropertiesVariablesFormProperties>({
			defaultValue: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<PipelineResourcePropertiesVariablesType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum PipelineResourcePropertiesVariablesType { String = 'String', Bool = 'Bool', Array = 'Array' }


	/** Pipeline reference type. */
	export interface PipelineReference {

		/** Reference name. */
		name?: string | null;

		/**
		 * Reference pipeline name.
		 * Required
		 */
		referenceName: string;

		/**
		 * Pipeline reference type.
		 * Required
		 */
		type: PipelineReferenceType;
	}

	/** Pipeline reference type. */
	export interface PipelineReferenceFormProperties {

		/** Reference name. */
		name: FormControl<string | null | undefined>,

		/**
		 * Reference pipeline name.
		 * Required
		 */
		referenceName: FormControl<string | null | undefined>,

		/**
		 * Pipeline reference type.
		 * Required
		 */
		type: FormControl<PipelineReferenceType | null | undefined>,
	}
	export function CreatePipelineReferenceFormGroup() {
		return new FormGroup<PipelineReferenceFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			referenceName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<PipelineReferenceType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum PipelineReferenceType { PipelineReference = 'PipelineReference' }


	/** Information about a pipeline run. */
	export interface PipelineRun {

		/**
		 * The duration of a pipeline run.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		durationInMs?: number | null;

		/** Provides entity name and id that started the pipeline run. */
		invokedBy?: PipelineRunInvokedBy;

		/** Indicates if the recovered pipeline run is the latest in its group. */
		isLatest?: boolean | null;

		/** The last updated timestamp for the pipeline run event in ISO8601 format. */
		lastUpdated?: Date | null;

		/** The message from a pipeline run. */
		message?: string | null;

		/** The full or partial list of parameter name, value pair used in the pipeline run. */
		parameters?: {[id: string]: string };

		/** The pipeline name. */
		pipelineName?: string | null;

		/** Run dimensions emitted by Pipeline run. */
		runDimensions?: {[id: string]: string };

		/** The end time of a pipeline run in ISO8601 format. */
		runEnd?: Date | null;

		/** Identifier that correlates all the recovery runs of a pipeline run. */
		runGroupId?: string | null;

		/** Identifier of a run. */
		runId?: string | null;

		/** The start time of a pipeline run in ISO8601 format. */
		runStart?: Date | null;

		/** The status of a pipeline run. */
		status?: string | null;
	}

	/** Information about a pipeline run. */
	export interface PipelineRunFormProperties {

		/**
		 * The duration of a pipeline run.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		durationInMs: FormControl<number | null | undefined>,

		/** Indicates if the recovered pipeline run is the latest in its group. */
		isLatest: FormControl<boolean | null | undefined>,

		/** The last updated timestamp for the pipeline run event in ISO8601 format. */
		lastUpdated: FormControl<Date | null | undefined>,

		/** The message from a pipeline run. */
		message: FormControl<string | null | undefined>,

		/** The full or partial list of parameter name, value pair used in the pipeline run. */
		parameters: FormControl<{[id: string]: string } | null | undefined>,

		/** The pipeline name. */
		pipelineName: FormControl<string | null | undefined>,

		/** Run dimensions emitted by Pipeline run. */
		runDimensions: FormControl<{[id: string]: string } | null | undefined>,

		/** The end time of a pipeline run in ISO8601 format. */
		runEnd: FormControl<Date | null | undefined>,

		/** Identifier that correlates all the recovery runs of a pipeline run. */
		runGroupId: FormControl<string | null | undefined>,

		/** Identifier of a run. */
		runId: FormControl<string | null | undefined>,

		/** The start time of a pipeline run in ISO8601 format. */
		runStart: FormControl<Date | null | undefined>,

		/** The status of a pipeline run. */
		status: FormControl<string | null | undefined>,
	}
	export function CreatePipelineRunFormGroup() {
		return new FormGroup<PipelineRunFormProperties>({
			durationInMs: new FormControl<number | null | undefined>(undefined),
			isLatest: new FormControl<boolean | null | undefined>(undefined),
			lastUpdated: new FormControl<Date | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
			parameters: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			pipelineName: new FormControl<string | null | undefined>(undefined),
			runDimensions: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			runEnd: new FormControl<Date | null | undefined>(undefined),
			runGroupId: new FormControl<string | null | undefined>(undefined),
			runId: new FormControl<string | null | undefined>(undefined),
			runStart: new FormControl<Date | null | undefined>(undefined),
			status: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Provides entity name and id that started the pipeline run. */
	export interface PipelineRunInvokedBy {

		/** The ID of the entity that started the run. */
		id?: string | null;

		/** The type of the entity that started the run. */
		invokedByType?: string | null;

		/** Name of the entity that started the pipeline run. */
		name?: string | null;
	}

	/** Provides entity name and id that started the pipeline run. */
	export interface PipelineRunInvokedByFormProperties {

		/** The ID of the entity that started the run. */
		id: FormControl<string | null | undefined>,

		/** The type of the entity that started the run. */
		invokedByType: FormControl<string | null | undefined>,

		/** Name of the entity that started the pipeline run. */
		name: FormControl<string | null | undefined>,
	}
	export function CreatePipelineRunInvokedByFormGroup() {
		return new FormGroup<PipelineRunInvokedByFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			invokedByType: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A list pipeline runs. */
	export interface PipelineRunsQueryResponse {

		/** The continuation token for getting the next page of results, if any remaining results exist, null otherwise. */
		continuationToken?: string | null;

		/**
		 * List of pipeline runs.
		 * Required
		 */
		value: Array<PipelineRun>;
	}

	/** A list pipeline runs. */
	export interface PipelineRunsQueryResponseFormProperties {

		/** The continuation token for getting the next page of results, if any remaining results exist, null otherwise. */
		continuationToken: FormControl<string | null | undefined>,
	}
	export function CreatePipelineRunsQueryResponseFormGroup() {
		return new FormGroup<PipelineRunsQueryResponseFormProperties>({
			continuationToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A list of active debug sessions. */
	export interface QueryDataFlowDebugSessionsResponse {

		/** The link to the next page of results, if any remaining results exist. */
		nextLink?: string | null;

		/** Array with all active debug sessions. */
		value?: Array<DataFlowDebugSessionInfo>;
	}

	/** A list of active debug sessions. */
	export interface QueryDataFlowDebugSessionsResponseFormProperties {

		/** The link to the next page of results, if any remaining results exist. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateQueryDataFlowDebugSessionsResponseFormGroup() {
		return new FormGroup<QueryDataFlowDebugSessionsResponseFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A list of rerun triggers. */
	export interface RerunTriggerListResponse {

		/** The continuation token for getting the next page of results, if any remaining results exist, null otherwise. */
		nextLink?: string | null;

		/**
		 * List of rerun triggers.
		 * Required
		 */
		value: Array<RerunTriggerResource>;
	}

	/** A list of rerun triggers. */
	export interface RerunTriggerListResponseFormProperties {

		/** The continuation token for getting the next page of results, if any remaining results exist, null otherwise. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateRerunTriggerListResponseFormGroup() {
		return new FormGroup<RerunTriggerListResponseFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** RerunTrigger resource type. */
	export interface RerunTriggerResource extends SubResource {

		/**
		 * Trigger that schedules pipeline reruns for all fixed time interval windows from a requested start time to requested end time.
		 * Required
		 */
		properties: RerunTriggerResourceProperties;
	}

	/** RerunTrigger resource type. */
	export interface RerunTriggerResourceFormProperties extends SubResourceFormProperties {
	}
	export function CreateRerunTriggerResourceFormGroup() {
		return new FormGroup<RerunTriggerResourceFormProperties>({
			etag: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface RerunTriggerResourceProperties {

		/**
		 * Rerun Trigger properties.
		 * Required
		 */
		typeProperties: any;
	}
	export interface RerunTriggerResourcePropertiesFormProperties {

		/**
		 * Rerun Trigger properties.
		 * Required
		 */
		typeProperties: FormControl<any | null | undefined>,
	}
	export function CreateRerunTriggerResourcePropertiesFormGroup() {
		return new FormGroup<RerunTriggerResourcePropertiesFormProperties>({
			typeProperties: new FormControl<any | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Rerun tumbling window trigger Parameters. */
	export interface RerunTumblingWindowTriggerActionParameters {

		/**
		 * The end time for the time period for which restatement is initiated. Only UTC time is currently supported.
		 * Required
		 */
		endTime: Date;

		/**
		 * The max number of parallel time windows (ready for execution) for which a rerun is triggered.
		 * Required
		 * Minimum: 1
		 * Maximum: 50
		 */
		maxConcurrency: number;

		/**
		 * The start time for the time period for which restatement is initiated. Only UTC time is currently supported.
		 * Required
		 */
		startTime: Date;
	}

	/** Rerun tumbling window trigger Parameters. */
	export interface RerunTumblingWindowTriggerActionParametersFormProperties {

		/**
		 * The end time for the time period for which restatement is initiated. Only UTC time is currently supported.
		 * Required
		 */
		endTime: FormControl<Date | null | undefined>,

		/**
		 * The max number of parallel time windows (ready for execution) for which a rerun is triggered.
		 * Required
		 * Minimum: 1
		 * Maximum: 50
		 */
		maxConcurrency: FormControl<number | null | undefined>,

		/**
		 * The start time for the time period for which restatement is initiated. Only UTC time is currently supported.
		 * Required
		 */
		startTime: FormControl<Date | null | undefined>,
	}
	export function CreateRerunTumblingWindowTriggerActionParametersFormGroup() {
		return new FormGroup<RerunTumblingWindowTriggerActionParametersFormProperties>({
			endTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			maxConcurrency: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(1), Validators.max(50)]),
			startTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Azure Data Factory top-level resource. */
	export interface Resource {

		/** Etag identifies change in the resource. */
		eTag?: string | null;

		/** The resource identifier. */
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

	/** Azure Data Factory top-level resource. */
	export interface ResourceFormProperties {

		/** Etag identifies change in the resource. */
		eTag: FormControl<string | null | undefined>,

		/** The resource identifier. */
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
			eTag: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			location: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Query parameters for listing runs. */
	export interface RunFilterParameters {

		/** The continuation token for getting the next page of results. Null for first page. */
		continuationToken?: string | null;

		/** List of filters. */
		filters?: Array<RunQueryFilter>;

		/**
		 * The time at or after which the run event was updated in 'ISO 8601' format.
		 * Required
		 */
		lastUpdatedAfter: Date;

		/**
		 * The time at or before which the run event was updated in 'ISO 8601' format.
		 * Required
		 */
		lastUpdatedBefore: Date;

		/** List of OrderBy option. */
		orderBy?: Array<RunQueryOrderBy>;
	}

	/** Query parameters for listing runs. */
	export interface RunFilterParametersFormProperties {

		/** The continuation token for getting the next page of results. Null for first page. */
		continuationToken: FormControl<string | null | undefined>,

		/**
		 * The time at or after which the run event was updated in 'ISO 8601' format.
		 * Required
		 */
		lastUpdatedAfter: FormControl<Date | null | undefined>,

		/**
		 * The time at or before which the run event was updated in 'ISO 8601' format.
		 * Required
		 */
		lastUpdatedBefore: FormControl<Date | null | undefined>,
	}
	export function CreateRunFilterParametersFormGroup() {
		return new FormGroup<RunFilterParametersFormProperties>({
			continuationToken: new FormControl<string | null | undefined>(undefined),
			lastUpdatedAfter: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			lastUpdatedBefore: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Query filter option for listing runs. */
	export interface RunQueryFilter {

		/**
		 * Parameter name to be used for filter. The allowed operands to query pipeline runs are PipelineName, RunStart, RunEnd and Status; to query activity runs are ActivityName, ActivityRunStart, ActivityRunEnd, ActivityType and Status, and to query trigger runs are TriggerName, TriggerRunTimestamp and Status.
		 * Required
		 */
		operand: RunQueryFilterOperand;

		/**
		 * Operator to be used for filter.
		 * Required
		 */
		operator: RunQueryFilterOperator;

		/**
		 * List of filter values.
		 * Required
		 */
		values: Array<string>;
	}

	/** Query filter option for listing runs. */
	export interface RunQueryFilterFormProperties {

		/**
		 * Parameter name to be used for filter. The allowed operands to query pipeline runs are PipelineName, RunStart, RunEnd and Status; to query activity runs are ActivityName, ActivityRunStart, ActivityRunEnd, ActivityType and Status, and to query trigger runs are TriggerName, TriggerRunTimestamp and Status.
		 * Required
		 */
		operand: FormControl<RunQueryFilterOperand | null | undefined>,

		/**
		 * Operator to be used for filter.
		 * Required
		 */
		operator: FormControl<RunQueryFilterOperator | null | undefined>,
	}
	export function CreateRunQueryFilterFormGroup() {
		return new FormGroup<RunQueryFilterFormProperties>({
			operand: new FormControl<RunQueryFilterOperand | null | undefined>(undefined, [Validators.required]),
			operator: new FormControl<RunQueryFilterOperator | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum RunQueryFilterOperand { PipelineName = 'PipelineName', Status = 'Status', RunStart = 'RunStart', RunEnd = 'RunEnd', ActivityName = 'ActivityName', ActivityRunStart = 'ActivityRunStart', ActivityRunEnd = 'ActivityRunEnd', ActivityType = 'ActivityType', TriggerName = 'TriggerName', TriggerRunTimestamp = 'TriggerRunTimestamp', RunGroupId = 'RunGroupId', LatestOnly = 'LatestOnly' }

	export enum RunQueryFilterOperator { Equals = 'Equals', NotEquals = 'NotEquals', In = 'In', NotIn = 'NotIn' }


	/** An object to provide order by options for listing runs. */
	export interface RunQueryOrderBy {

		/**
		 * Sorting order of the parameter.
		 * Required
		 */
		order: RunQueryOrderByOrder;

		/**
		 * Parameter name to be used for order by. The allowed parameters to order by for pipeline runs are PipelineName, RunStart, RunEnd and Status; for activity runs are ActivityName, ActivityRunStart, ActivityRunEnd and Status; for trigger runs are TriggerName, TriggerRunTimestamp and Status.
		 * Required
		 */
		orderBy: RunQueryOrderByOrderBy;
	}

	/** An object to provide order by options for listing runs. */
	export interface RunQueryOrderByFormProperties {

		/**
		 * Sorting order of the parameter.
		 * Required
		 */
		order: FormControl<RunQueryOrderByOrder | null | undefined>,

		/**
		 * Parameter name to be used for order by. The allowed parameters to order by for pipeline runs are PipelineName, RunStart, RunEnd and Status; for activity runs are ActivityName, ActivityRunStart, ActivityRunEnd and Status; for trigger runs are TriggerName, TriggerRunTimestamp and Status.
		 * Required
		 */
		orderBy: FormControl<RunQueryOrderByOrderBy | null | undefined>,
	}
	export function CreateRunQueryOrderByFormGroup() {
		return new FormGroup<RunQueryOrderByFormProperties>({
			order: new FormControl<RunQueryOrderByOrder | null | undefined>(undefined, [Validators.required]),
			orderBy: new FormControl<RunQueryOrderByOrderBy | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum RunQueryOrderByOrder { ASC = 'ASC', DESC = 'DESC' }

	export enum RunQueryOrderByOrderBy { RunStart = 'RunStart', RunEnd = 'RunEnd', PipelineName = 'PipelineName', Status = 'Status', ActivityName = 'ActivityName', ActivityRunStart = 'ActivityRunStart', ActivityRunEnd = 'ActivityRunEnd', TriggerName = 'TriggerName', TriggerRunTimestamp = 'TriggerRunTimestamp' }


	/** The base definition of a secret type. */
	export interface SecretBase {

		/**
		 * Type of the secret.
		 * Required
		 */
		type: string;
	}

	/** The base definition of a secret type. */
	export interface SecretBaseFormProperties {

		/**
		 * Type of the secret.
		 * Required
		 */
		type: FormControl<string | null | undefined>,
	}
	export function CreateSecretBaseFormGroup() {
		return new FormGroup<SecretBaseFormProperties>({
			type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Azure Data Factory secure string definition. The string value will be masked with asterisks '*' during Get or List API calls. */
	export interface SecureString {

		/**
		 * Value of secure string.
		 * Required
		 */
		value: string;
	}

	/** Azure Data Factory secure string definition. The string value will be masked with asterisks '*' during Get or List API calls. */
	export interface SecureStringFormProperties {

		/**
		 * Value of secure string.
		 * Required
		 */
		value: FormControl<string | null | undefined>,
	}
	export function CreateSecureStringFormGroup() {
		return new FormGroup<SecureStringFormProperties>({
			value: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The status of the operation. */
	export interface SsisObjectMetadataStatusResponse {

		/** The operation error message. */
		error?: string | null;

		/** The operation name. */
		name?: string | null;

		/** The operation properties. */
		properties?: string | null;

		/** The status of the operation. */
		status?: string | null;
	}

	/** The status of the operation. */
	export interface SsisObjectMetadataStatusResponseFormProperties {

		/** The operation error message. */
		error: FormControl<string | null | undefined>,

		/** The operation name. */
		name: FormControl<string | null | undefined>,

		/** The operation properties. */
		properties: FormControl<string | null | undefined>,

		/** The status of the operation. */
		status: FormControl<string | null | undefined>,
	}
	export function CreateSsisObjectMetadataStatusResponseFormGroup() {
		return new FormGroup<SsisObjectMetadataStatusResponseFormProperties>({
			error: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			properties: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Azure Data Factory nested resource, which belongs to a factory. */
	export interface SubResource {

		/** Etag identifies change in the resource. */
		etag?: string | null;

		/** The resource identifier. */
		id?: string | null;

		/** The resource name. */
		name?: string | null;

		/** The resource type. */
		type?: string | null;
	}

	/** Azure Data Factory nested resource, which belongs to a factory. */
	export interface SubResourceFormProperties {

		/** Etag identifies change in the resource. */
		etag: FormControl<string | null | undefined>,

		/** The resource identifier. */
		id: FormControl<string | null | undefined>,

		/** The resource name. */
		name: FormControl<string | null | undefined>,

		/** The resource type. */
		type: FormControl<string | null | undefined>,
	}
	export function CreateSubResourceFormGroup() {
		return new FormGroup<SubResourceFormProperties>({
			etag: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Azure Data Factory nested debug resource. */
	export interface SubResourceDebugResource {

		/** The resource name. */
		name?: string | null;
	}

	/** Azure Data Factory nested debug resource. */
	export interface SubResourceDebugResourceFormProperties {

		/** The resource name. */
		name: FormControl<string | null | undefined>,
	}
	export function CreateSubResourceDebugResourceFormGroup() {
		return new FormGroup<SubResourceDebugResourceFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A list of trigger resources. */
	export interface TriggerListResponse {

		/** The link to the next page of results, if any remaining results exist. */
		nextLink?: string | null;

		/**
		 * List of triggers.
		 * Required
		 */
		value: Array<TriggerResource>;
	}

	/** A list of trigger resources. */
	export interface TriggerListResponseFormProperties {

		/** The link to the next page of results, if any remaining results exist. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateTriggerListResponseFormGroup() {
		return new FormGroup<TriggerListResponseFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Trigger resource type. */
	export interface TriggerResource extends SubResource {

		/**
		 * Azure data factory nested object which contains information about creating pipeline run
		 * Required
		 */
		properties: TriggerResourceProperties;
	}

	/** Trigger resource type. */
	export interface TriggerResourceFormProperties extends SubResourceFormProperties {
	}
	export function CreateTriggerResourceFormGroup() {
		return new FormGroup<TriggerResourceFormProperties>({
			etag: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface TriggerResourceProperties {

		/** List of tags that can be used for describing the trigger. */
		annotations?: Array<string>;

		/** Trigger description. */
		description?: string | null;

		/** Enumerates possible state of Triggers. */
		runtimeState?: TriggerResourcePropertiesRuntimeState | null;

		/**
		 * Trigger type.
		 * Required
		 */
		type: string;
	}
	export interface TriggerResourcePropertiesFormProperties {

		/** Trigger description. */
		description: FormControl<string | null | undefined>,

		/** Enumerates possible state of Triggers. */
		runtimeState: FormControl<TriggerResourcePropertiesRuntimeState | null | undefined>,

		/**
		 * Trigger type.
		 * Required
		 */
		type: FormControl<string | null | undefined>,
	}
	export function CreateTriggerResourcePropertiesFormGroup() {
		return new FormGroup<TriggerResourcePropertiesFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			runtimeState: new FormControl<TriggerResourcePropertiesRuntimeState | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum TriggerResourcePropertiesRuntimeState { Started = 'Started', Stopped = 'Stopped', Disabled = 'Disabled' }


	/** Pipeline that needs to be triggered with the given parameters. */
	export interface TriggerPipelineReference {

		/** An object mapping parameter names to argument values. */
		parameters?: ParameterValueSpecification;

		/** Pipeline reference type. */
		pipelineReference?: PipelineReference;
	}

	/** Pipeline that needs to be triggered with the given parameters. */
	export interface TriggerPipelineReferenceFormProperties {
	}
	export function CreateTriggerPipelineReferenceFormGroup() {
		return new FormGroup<TriggerPipelineReferenceFormProperties>({
		});

	}


	/** Trigger runs. */
	export interface TriggerRun {

		/** Status of the upstream pipelines. */
		dependencyStatus?: {[id: string]: any };

		/** Trigger error message. */
		message?: string | null;

		/** List of property name and value related to trigger run. Name, value pair depends on type of trigger. */
		properties?: {[id: string]: string };

		/** Run dimension for which trigger was fired. */
		runDimension?: {[id: string]: string };

		/** Trigger run status. */
		status?: TriggerRunStatus | null;

		/** Trigger name. */
		triggerName?: string | null;

		/** Trigger run id. */
		triggerRunId?: string | null;

		/** Trigger run start time. */
		triggerRunTimestamp?: Date | null;

		/** Trigger type. */
		triggerType?: string | null;

		/** List of pipeline name and run Id triggered by the trigger run. */
		triggeredPipelines?: {[id: string]: string };
	}

	/** Trigger runs. */
	export interface TriggerRunFormProperties {

		/** Status of the upstream pipelines. */
		dependencyStatus: FormControl<{[id: string]: any } | null | undefined>,

		/** Trigger error message. */
		message: FormControl<string | null | undefined>,

		/** List of property name and value related to trigger run. Name, value pair depends on type of trigger. */
		properties: FormControl<{[id: string]: string } | null | undefined>,

		/** Run dimension for which trigger was fired. */
		runDimension: FormControl<{[id: string]: string } | null | undefined>,

		/** Trigger run status. */
		status: FormControl<TriggerRunStatus | null | undefined>,

		/** Trigger name. */
		triggerName: FormControl<string | null | undefined>,

		/** Trigger run id. */
		triggerRunId: FormControl<string | null | undefined>,

		/** Trigger run start time. */
		triggerRunTimestamp: FormControl<Date | null | undefined>,

		/** Trigger type. */
		triggerType: FormControl<string | null | undefined>,

		/** List of pipeline name and run Id triggered by the trigger run. */
		triggeredPipelines: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateTriggerRunFormGroup() {
		return new FormGroup<TriggerRunFormProperties>({
			dependencyStatus: new FormControl<{[id: string]: any } | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
			properties: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			runDimension: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			status: new FormControl<TriggerRunStatus | null | undefined>(undefined),
			triggerName: new FormControl<string | null | undefined>(undefined),
			triggerRunId: new FormControl<string | null | undefined>(undefined),
			triggerRunTimestamp: new FormControl<Date | null | undefined>(undefined),
			triggerType: new FormControl<string | null | undefined>(undefined),
			triggeredPipelines: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}

	export enum TriggerRunStatus { Succeeded = 'Succeeded', Failed = 'Failed', Inprogress = 'Inprogress' }


	/** A list of trigger runs. */
	export interface TriggerRunsQueryResponse {

		/** The continuation token for getting the next page of results, if any remaining results exist, null otherwise. */
		continuationToken?: string | null;

		/**
		 * List of trigger runs.
		 * Required
		 */
		value: Array<TriggerRun>;
	}

	/** A list of trigger runs. */
	export interface TriggerRunsQueryResponseFormProperties {

		/** The continuation token for getting the next page of results, if any remaining results exist, null otherwise. */
		continuationToken: FormControl<string | null | undefined>,
	}
	export function CreateTriggerRunsQueryResponseFormGroup() {
		return new FormGroup<TriggerRunsQueryResponseFormProperties>({
			continuationToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Defines the response of a trigger subscription operation. */
	export interface TriggerSubscriptionOperationStatus {

		/** Event Subscription Status. */
		status?: TriggerSubscriptionOperationStatusStatus | null;

		/** Trigger name. */
		triggerName?: string | null;
	}

	/** Defines the response of a trigger subscription operation. */
	export interface TriggerSubscriptionOperationStatusFormProperties {

		/** Event Subscription Status. */
		status: FormControl<TriggerSubscriptionOperationStatusStatus | null | undefined>,

		/** Trigger name. */
		triggerName: FormControl<string | null | undefined>,
	}
	export function CreateTriggerSubscriptionOperationStatusFormGroup() {
		return new FormGroup<TriggerSubscriptionOperationStatusFormProperties>({
			status: new FormControl<TriggerSubscriptionOperationStatusStatus | null | undefined>(undefined),
			triggerName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum TriggerSubscriptionOperationStatusStatus { Enabled = 'Enabled', Provisioning = 'Provisioning', Deprovisioning = 'Deprovisioning', Disabled = 'Disabled', Unknown = 'Unknown' }


	/** Update integration runtime node request. */
	export interface UpdateIntegrationRuntimeNodeRequest {

		/**
		 * The number of concurrent jobs permitted to run on the integration runtime node. Values between 1 and maxConcurrentJobs(inclusive) are allowed.
		 * Minimum: 1
		 */
		concurrentJobsLimit?: number | null;
	}

	/** Update integration runtime node request. */
	export interface UpdateIntegrationRuntimeNodeRequestFormProperties {

		/**
		 * The number of concurrent jobs permitted to run on the integration runtime node. Values between 1 and maxConcurrentJobs(inclusive) are allowed.
		 * Minimum: 1
		 */
		concurrentJobsLimit: FormControl<number | null | undefined>,
	}
	export function CreateUpdateIntegrationRuntimeNodeRequestFormGroup() {
		return new FormGroup<UpdateIntegrationRuntimeNodeRequestFormProperties>({
			concurrentJobsLimit: new FormControl<number | null | undefined>(undefined, [Validators.min(1)]),
		});

	}


	/** Update integration runtime request. */
	export interface UpdateIntegrationRuntimeRequest {

		/** The state of integration runtime auto update. */
		autoUpdate?: UpdateIntegrationRuntimeRequestAutoUpdate | null;

		/** The time offset (in hours) in the day, e.g., PT03H is 3 hours. The integration runtime auto update will happen on that time. */
		updateDelayOffset?: string | null;
	}

	/** Update integration runtime request. */
	export interface UpdateIntegrationRuntimeRequestFormProperties {

		/** The state of integration runtime auto update. */
		autoUpdate: FormControl<UpdateIntegrationRuntimeRequestAutoUpdate | null | undefined>,

		/** The time offset (in hours) in the day, e.g., PT03H is 3 hours. The integration runtime auto update will happen on that time. */
		updateDelayOffset: FormControl<string | null | undefined>,
	}
	export function CreateUpdateIntegrationRuntimeRequestFormGroup() {
		return new FormGroup<UpdateIntegrationRuntimeRequestFormProperties>({
			autoUpdate: new FormControl<UpdateIntegrationRuntimeRequestAutoUpdate | null | undefined>(undefined),
			updateDelayOffset: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum UpdateIntegrationRuntimeRequestAutoUpdate { On = 'On', Off = 'Off' }


	/** Get Data Plane read only token request definition. */
	export interface UserAccessPolicy {

		/** The resource path to get access relative to factory. Currently only empty string is supported which corresponds to the factory resource. */
		accessResourcePath?: string | null;

		/** Expiration time for the token. Maximum duration for the token is eight hours and by default the token will expire in eight hours. */
		expireTime?: string | null;

		/** The string with permissions for Data Plane access. Currently only 'r' is supported which grants read only access. */
		permissions?: string | null;

		/** The name of the profile. Currently only the default is supported. The default value is DefaultProfile. */
		profileName?: string | null;

		/** Start time for the token. If not specified the current time will be used. */
		startTime?: string | null;
	}

	/** Get Data Plane read only token request definition. */
	export interface UserAccessPolicyFormProperties {

		/** The resource path to get access relative to factory. Currently only empty string is supported which corresponds to the factory resource. */
		accessResourcePath: FormControl<string | null | undefined>,

		/** Expiration time for the token. Maximum duration for the token is eight hours and by default the token will expire in eight hours. */
		expireTime: FormControl<string | null | undefined>,

		/** The string with permissions for Data Plane access. Currently only 'r' is supported which grants read only access. */
		permissions: FormControl<string | null | undefined>,

		/** The name of the profile. Currently only the default is supported. The default value is DefaultProfile. */
		profileName: FormControl<string | null | undefined>,

		/** Start time for the token. If not specified the current time will be used. */
		startTime: FormControl<string | null | undefined>,
	}
	export function CreateUserAccessPolicyFormGroup() {
		return new FormGroup<UserAccessPolicyFormProperties>({
			accessResourcePath: new FormControl<string | null | undefined>(undefined),
			expireTime: new FormControl<string | null | undefined>(undefined),
			permissions: new FormControl<string | null | undefined>(undefined),
			profileName: new FormControl<string | null | undefined>(undefined),
			startTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Definition of variable for a Pipeline. */
	export interface VariableDefinitionSpecification {
	}

	/** Definition of variable for a Pipeline. */
	export interface VariableDefinitionSpecificationFormProperties {
	}
	export function CreateVariableDefinitionSpecificationFormGroup() {
		return new FormGroup<VariableDefinitionSpecificationFormProperties>({
		});

	}


	/** Definition of a single variable for a Pipeline. */
	export interface VariableSpecification {

		/** Default value of variable. */
		defaultValue?: string | null;

		/**
		 * Variable type.
		 * Required
		 */
		type: PipelineResourcePropertiesVariablesType;
	}

	/** Definition of a single variable for a Pipeline. */
	export interface VariableSpecificationFormProperties {

		/** Default value of variable. */
		defaultValue: FormControl<string | null | undefined>,

		/**
		 * Variable type.
		 * Required
		 */
		type: FormControl<PipelineResourcePropertiesVariablesType | null | undefined>,
	}
	export function CreateVariableSpecificationFormGroup() {
		return new FormGroup<VariableSpecificationFormProperties>({
			defaultValue: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<PipelineResourcePropertiesVariablesType | null | undefined>(undefined, [Validators.required]),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Lists the available Azure Data Factory API operations.
		 * Get providers/Microsoft.DataFactory/operations
		 * @param {string} api_version The API version.
		 * @return {OperationListResponse} OK.
		 */
		Operations_List(api_version: string): Observable<OperationListResponse> {
			return this.http.get<OperationListResponse>(this.baseUri + 'providers/Microsoft.DataFactory/operations?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Lists factories under the specified subscription.
		 * Get subscriptions/{subscriptionId}/providers/Microsoft.DataFactory/factories
		 * @param {string} subscriptionId The subscription identifier.
		 * @param {string} api_version The API version.
		 * @return {FactoryListResponse} OK.
		 */
		Factories_List(subscriptionId: string, api_version: string): Observable<FactoryListResponse> {
			return this.http.get<FactoryListResponse>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/providers/Microsoft.DataFactory/factories&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Updates a factory's repo information.
		 * Post subscriptions/{subscriptionId}/providers/Microsoft.DataFactory/locations/{locationId}/configureFactoryRepo
		 * @param {string} subscriptionId The subscription identifier.
		 * @param {string} locationId The location identifier.
		 * @param {string} api_version The API version.
		 * @param {FactoryRepoUpdate} requestBody Update factory repo request definition.
		 * @return {Factory} OK.
		 */
		Factories_ConfigureFactoryRepo(subscriptionId: string, locationId: string, api_version: string, requestBody: FactoryRepoUpdate): Observable<Factory> {
			return this.http.post<Factory>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/providers/Microsoft.DataFactory/locations/' + (locationId == null ? '' : encodeURIComponent(locationId)) + '/configureFactoryRepo&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Get exposure control feature for specific location.
		 * Post subscriptions/{subscriptionId}/providers/Microsoft.DataFactory/locations/{locationId}/getFeatureValue
		 * @param {string} subscriptionId The subscription identifier.
		 * @param {string} locationId The location identifier.
		 * @param {string} api_version The API version.
		 * @param {ExposureControlRequest} requestBody The exposure control request.
		 * @return {ExposureControlResponse} OK.
		 */
		ExposureControl_GetFeatureValue(subscriptionId: string, locationId: string, api_version: string, requestBody: ExposureControlRequest): Observable<ExposureControlResponse> {
			return this.http.post<ExposureControlResponse>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/providers/Microsoft.DataFactory/locations/' + (locationId == null ? '' : encodeURIComponent(locationId)) + '/getFeatureValue&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists factories.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataFactory/factories
		 * @param {string} subscriptionId The subscription identifier.
		 * @param {string} resourceGroupName The resource group name.
		 *     Min length: 1    Max length: 90
		 * @param {string} api_version The API version.
		 * @return {FactoryListResponse} OK.
		 */
		Factories_ListByResourceGroup(subscriptionId: string, resourceGroupName: string, api_version: string): Observable<FactoryListResponse> {
			return this.http.get<FactoryListResponse>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DataFactory/factories&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Gets a factory.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataFactory/factories/{factoryName}
		 * @param {string} subscriptionId The subscription identifier.
		 * @param {string} resourceGroupName The resource group name.
		 *     Min length: 1    Max length: 90
		 * @param {string} factoryName The factory name.
		 *     Min length: 3    Max length: 63
		 * @param {string} api_version The API version.
		 * @return {Factory} OK.
		 */
		Factories_Get(subscriptionId: string, resourceGroupName: string, factoryName: string, api_version: string): Observable<Factory> {
			return this.http.get<Factory>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DataFactory/factories/' + (factoryName == null ? '' : encodeURIComponent(factoryName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Creates or updates a factory.
		 * Put subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataFactory/factories/{factoryName}
		 * @param {string} subscriptionId The subscription identifier.
		 * @param {string} resourceGroupName The resource group name.
		 *     Min length: 1    Max length: 90
		 * @param {string} factoryName The factory name.
		 *     Min length: 3    Max length: 63
		 * @param {string} api_version The API version.
		 * @param {Factory} requestBody Factory resource definition.
		 * @return {Factory} OK.
		 */
		Factories_CreateOrUpdate(subscriptionId: string, resourceGroupName: string, factoryName: string, api_version: string, requestBody: Factory): Observable<Factory> {
			return this.http.put<Factory>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DataFactory/factories/' + (factoryName == null ? '' : encodeURIComponent(factoryName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a factory.
		 * Delete subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataFactory/factories/{factoryName}
		 * @param {string} subscriptionId The subscription identifier.
		 * @param {string} resourceGroupName The resource group name.
		 *     Min length: 1    Max length: 90
		 * @param {string} factoryName The factory name.
		 *     Min length: 3    Max length: 63
		 * @param {string} api_version The API version.
		 * @return {void} OK.
		 */
		Factories_Delete(subscriptionId: string, resourceGroupName: string, factoryName: string, api_version: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DataFactory/factories/' + (factoryName == null ? '' : encodeURIComponent(factoryName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Updates a factory.
		 * Patch subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataFactory/factories/{factoryName}
		 * @param {string} subscriptionId The subscription identifier.
		 * @param {string} resourceGroupName The resource group name.
		 *     Min length: 1    Max length: 90
		 * @param {string} factoryName The factory name.
		 *     Min length: 3    Max length: 63
		 * @param {string} api_version The API version.
		 * @param {FactoryUpdateParameters} requestBody The parameters for updating a factory.
		 * @return {Factory} OK.
		 */
		Factories_Update(subscriptionId: string, resourceGroupName: string, factoryName: string, api_version: string, requestBody: FactoryUpdateParameters): Observable<Factory> {
			return this.http.patch<Factory>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DataFactory/factories/' + (factoryName == null ? '' : encodeURIComponent(factoryName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Add a data flow into debug session.
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataFactory/factories/{factoryName}/addDataFlowToDebugSession
		 * @param {string} subscriptionId The subscription identifier.
		 * @param {string} resourceGroupName The resource group name.
		 *     Min length: 1    Max length: 90
		 * @param {string} factoryName The factory name.
		 *     Min length: 3    Max length: 63
		 * @param {string} api_version The API version.
		 * @param {DataFlowDebugPackage} requestBody Data flow debug session definition with debug content.
		 * @return {AddDataFlowToDebugSessionResponse} OK.
		 */
		DataFlowDebugSession_AddDataFlow(subscriptionId: string, resourceGroupName: string, factoryName: string, api_version: string, requestBody: DataFlowDebugPackage): Observable<AddDataFlowToDebugSessionResponse> {
			return this.http.post<AddDataFlowToDebugSessionResponse>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DataFactory/factories/' + (factoryName == null ? '' : encodeURIComponent(factoryName)) + '/addDataFlowToDebugSession&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Creates a data flow debug session.
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataFactory/factories/{factoryName}/createDataFlowDebugSession
		 * @param {string} subscriptionId The subscription identifier.
		 * @param {string} resourceGroupName The resource group name.
		 *     Min length: 1    Max length: 90
		 * @param {string} factoryName The factory name.
		 *     Min length: 3    Max length: 63
		 * @param {string} api_version The API version.
		 * @param {CreateDataFlowDebugSessionRequest} requestBody Data flow debug session definition
		 * @return {CreateDataFlowDebugSessionResponse} OK.
		 */
		DataFlowDebugSession_Create(subscriptionId: string, resourceGroupName: string, factoryName: string, api_version: string, requestBody: CreateDataFlowDebugSessionRequest): Observable<CreateDataFlowDebugSessionResponse> {
			return this.http.post<CreateDataFlowDebugSessionResponse>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DataFactory/factories/' + (factoryName == null ? '' : encodeURIComponent(factoryName)) + '/createDataFlowDebugSession&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists data flows.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataFactory/factories/{factoryName}/dataflows
		 * @param {string} subscriptionId The subscription identifier.
		 * @param {string} resourceGroupName The resource group name.
		 *     Min length: 1    Max length: 90
		 * @param {string} factoryName The factory name.
		 *     Min length: 3    Max length: 63
		 * @param {string} api_version The API version.
		 * @return {DataFlowListResponse} OK.
		 */
		DataFlows_ListByFactory(subscriptionId: string, resourceGroupName: string, factoryName: string, api_version: string): Observable<DataFlowListResponse> {
			return this.http.get<DataFlowListResponse>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DataFactory/factories/' + (factoryName == null ? '' : encodeURIComponent(factoryName)) + '/dataflows&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Gets a data flow.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataFactory/factories/{factoryName}/dataflows/{dataFlowName}
		 * @param {string} subscriptionId The subscription identifier.
		 * @param {string} resourceGroupName The resource group name.
		 *     Min length: 1    Max length: 90
		 * @param {string} factoryName The factory name.
		 *     Min length: 3    Max length: 63
		 * @param {string} dataFlowName The data flow name.
		 *     Min length: 1    Max length: 260
		 * @param {string} api_version The API version.
		 * @return {DataFlowResource} OK.
		 */
		DataFlows_Get(subscriptionId: string, resourceGroupName: string, factoryName: string, dataFlowName: string, api_version: string): Observable<DataFlowResource> {
			return this.http.get<DataFlowResource>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DataFactory/factories/' + (factoryName == null ? '' : encodeURIComponent(factoryName)) + '/dataflows/' + (dataFlowName == null ? '' : encodeURIComponent(dataFlowName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Creates or updates a data flow.
		 * Put subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataFactory/factories/{factoryName}/dataflows/{dataFlowName}
		 * @param {string} subscriptionId The subscription identifier.
		 * @param {string} resourceGroupName The resource group name.
		 *     Min length: 1    Max length: 90
		 * @param {string} factoryName The factory name.
		 *     Min length: 3    Max length: 63
		 * @param {string} dataFlowName The data flow name.
		 *     Min length: 1    Max length: 260
		 * @param {string} api_version The API version.
		 * @param {DataFlowResource} requestBody Data flow resource definition.
		 * @return {DataFlowResource} OK.
		 */
		DataFlows_CreateOrUpdate(subscriptionId: string, resourceGroupName: string, factoryName: string, dataFlowName: string, api_version: string, requestBody: DataFlowResource): Observable<DataFlowResource> {
			return this.http.put<DataFlowResource>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DataFactory/factories/' + (factoryName == null ? '' : encodeURIComponent(factoryName)) + '/dataflows/' + (dataFlowName == null ? '' : encodeURIComponent(dataFlowName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a data flow.
		 * Delete subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataFactory/factories/{factoryName}/dataflows/{dataFlowName}
		 * @param {string} subscriptionId The subscription identifier.
		 * @param {string} resourceGroupName The resource group name.
		 *     Min length: 1    Max length: 90
		 * @param {string} factoryName The factory name.
		 *     Min length: 3    Max length: 63
		 * @param {string} dataFlowName The data flow name.
		 *     Min length: 1    Max length: 260
		 * @param {string} api_version The API version.
		 * @return {void} OK.
		 */
		DataFlows_Delete(subscriptionId: string, resourceGroupName: string, factoryName: string, dataFlowName: string, api_version: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DataFactory/factories/' + (factoryName == null ? '' : encodeURIComponent(factoryName)) + '/dataflows/' + (dataFlowName == null ? '' : encodeURIComponent(dataFlowName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Lists datasets.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataFactory/factories/{factoryName}/datasets
		 * @param {string} subscriptionId The subscription identifier.
		 * @param {string} resourceGroupName The resource group name.
		 *     Min length: 1    Max length: 90
		 * @param {string} factoryName The factory name.
		 *     Min length: 3    Max length: 63
		 * @param {string} api_version The API version.
		 * @return {DatasetListResponse} OK.
		 */
		Datasets_ListByFactory(subscriptionId: string, resourceGroupName: string, factoryName: string, api_version: string): Observable<DatasetListResponse> {
			return this.http.get<DatasetListResponse>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DataFactory/factories/' + (factoryName == null ? '' : encodeURIComponent(factoryName)) + '/datasets&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Gets a dataset.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataFactory/factories/{factoryName}/datasets/{datasetName}
		 * @param {string} subscriptionId The subscription identifier.
		 * @param {string} resourceGroupName The resource group name.
		 *     Min length: 1    Max length: 90
		 * @param {string} factoryName The factory name.
		 *     Min length: 3    Max length: 63
		 * @param {string} datasetName The dataset name.
		 *     Min length: 1    Max length: 260
		 * @param {string} api_version The API version.
		 * @return {DatasetResource} OK.
		 */
		Datasets_Get(subscriptionId: string, resourceGroupName: string, factoryName: string, datasetName: string, api_version: string): Observable<DatasetResource> {
			return this.http.get<DatasetResource>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DataFactory/factories/' + (factoryName == null ? '' : encodeURIComponent(factoryName)) + '/datasets/' + (datasetName == null ? '' : encodeURIComponent(datasetName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Creates or updates a dataset.
		 * Put subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataFactory/factories/{factoryName}/datasets/{datasetName}
		 * @param {string} subscriptionId The subscription identifier.
		 * @param {string} resourceGroupName The resource group name.
		 *     Min length: 1    Max length: 90
		 * @param {string} factoryName The factory name.
		 *     Min length: 3    Max length: 63
		 * @param {string} datasetName The dataset name.
		 *     Min length: 1    Max length: 260
		 * @param {string} api_version The API version.
		 * @param {DatasetResource} requestBody Dataset resource definition.
		 * @return {DatasetResource} OK.
		 */
		Datasets_CreateOrUpdate(subscriptionId: string, resourceGroupName: string, factoryName: string, datasetName: string, api_version: string, requestBody: DatasetResource): Observable<DatasetResource> {
			return this.http.put<DatasetResource>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DataFactory/factories/' + (factoryName == null ? '' : encodeURIComponent(factoryName)) + '/datasets/' + (datasetName == null ? '' : encodeURIComponent(datasetName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a dataset.
		 * Delete subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataFactory/factories/{factoryName}/datasets/{datasetName}
		 * @param {string} subscriptionId The subscription identifier.
		 * @param {string} resourceGroupName The resource group name.
		 *     Min length: 1    Max length: 90
		 * @param {string} factoryName The factory name.
		 *     Min length: 3    Max length: 63
		 * @param {string} datasetName The dataset name.
		 *     Min length: 1    Max length: 260
		 * @param {string} api_version The API version.
		 * @return {void} OK.
		 */
		Datasets_Delete(subscriptionId: string, resourceGroupName: string, factoryName: string, datasetName: string, api_version: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DataFactory/factories/' + (factoryName == null ? '' : encodeURIComponent(factoryName)) + '/datasets/' + (datasetName == null ? '' : encodeURIComponent(datasetName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Deletes a data flow debug session.
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataFactory/factories/{factoryName}/deleteDataFlowDebugSession
		 * @param {string} subscriptionId The subscription identifier.
		 * @param {string} resourceGroupName The resource group name.
		 *     Min length: 1    Max length: 90
		 * @param {string} factoryName The factory name.
		 *     Min length: 3    Max length: 63
		 * @param {string} api_version The API version.
		 * @param {DeleteDataFlowDebugSessionRequest} requestBody Data flow debug session definition for deletion
		 * @return {void} OK.
		 */
		DataFlowDebugSession_Delete(subscriptionId: string, resourceGroupName: string, factoryName: string, api_version: string, requestBody: DeleteDataFlowDebugSessionRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DataFactory/factories/' + (factoryName == null ? '' : encodeURIComponent(factoryName)) + '/deleteDataFlowDebugSession&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Execute a data flow debug command.
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataFactory/factories/{factoryName}/executeDataFlowDebugCommand
		 * @param {string} subscriptionId The subscription identifier.
		 * @param {string} resourceGroupName The resource group name.
		 *     Min length: 1    Max length: 90
		 * @param {string} factoryName The factory name.
		 *     Min length: 3    Max length: 63
		 * @param {string} api_version The API version.
		 * @param {DataFlowDebugCommandRequest} requestBody Data flow debug command definition.
		 * @return {DataFlowDebugCommandResponse} OK.
		 */
		DataFlowDebugSession_ExecuteCommand(subscriptionId: string, resourceGroupName: string, factoryName: string, api_version: string, requestBody: DataFlowDebugCommandRequest): Observable<DataFlowDebugCommandResponse> {
			return this.http.post<DataFlowDebugCommandResponse>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DataFactory/factories/' + (factoryName == null ? '' : encodeURIComponent(factoryName)) + '/executeDataFlowDebugCommand&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Get Data Plane access.
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataFactory/factories/{factoryName}/getDataPlaneAccess
		 * @param {string} subscriptionId The subscription identifier.
		 * @param {string} resourceGroupName The resource group name.
		 *     Min length: 1    Max length: 90
		 * @param {string} factoryName The factory name.
		 *     Min length: 3    Max length: 63
		 * @param {string} api_version The API version.
		 * @param {UserAccessPolicy} requestBody Data Plane user access policy definition.
		 * @return {AccessPolicyResponse} OK.
		 */
		Factories_GetDataPlaneAccess(subscriptionId: string, resourceGroupName: string, factoryName: string, api_version: string, requestBody: UserAccessPolicy): Observable<AccessPolicyResponse> {
			return this.http.post<AccessPolicyResponse>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DataFactory/factories/' + (factoryName == null ? '' : encodeURIComponent(factoryName)) + '/getDataPlaneAccess&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Get exposure control feature for specific factory.
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataFactory/factories/{factoryName}/getFeatureValue
		 * @param {string} subscriptionId The subscription identifier.
		 * @param {string} resourceGroupName The resource group name.
		 *     Min length: 1    Max length: 90
		 * @param {string} factoryName The factory name.
		 *     Min length: 3    Max length: 63
		 * @param {string} api_version The API version.
		 * @param {ExposureControlRequest} requestBody The exposure control request.
		 * @return {ExposureControlResponse} OK.
		 */
		ExposureControl_GetFeatureValueByFactory(subscriptionId: string, resourceGroupName: string, factoryName: string, api_version: string, requestBody: ExposureControlRequest): Observable<ExposureControlResponse> {
			return this.http.post<ExposureControlResponse>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DataFactory/factories/' + (factoryName == null ? '' : encodeURIComponent(factoryName)) + '/getFeatureValue&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Get GitHub Access Token.
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataFactory/factories/{factoryName}/getGitHubAccessToken
		 * @param {string} subscriptionId The subscription identifier.
		 * @param {string} resourceGroupName The resource group name.
		 *     Min length: 1    Max length: 90
		 * @param {string} factoryName The factory name.
		 *     Min length: 3    Max length: 63
		 * @param {string} api_version The API version.
		 * @param {GitHubAccessTokenRequest} requestBody Get GitHub access token request definition.
		 * @return {GitHubAccessTokenResponse} OK.
		 */
		Factories_GetGitHubAccessToken(subscriptionId: string, resourceGroupName: string, factoryName: string, api_version: string, requestBody: GitHubAccessTokenRequest): Observable<GitHubAccessTokenResponse> {
			return this.http.post<GitHubAccessTokenResponse>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DataFactory/factories/' + (factoryName == null ? '' : encodeURIComponent(factoryName)) + '/getGitHubAccessToken&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists integration runtimes.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataFactory/factories/{factoryName}/integrationRuntimes
		 * @param {string} subscriptionId The subscription identifier.
		 * @param {string} resourceGroupName The resource group name.
		 *     Min length: 1    Max length: 90
		 * @param {string} factoryName The factory name.
		 *     Min length: 3    Max length: 63
		 * @param {string} api_version The API version.
		 * @return {IntegrationRuntimeListResponse} OK.
		 */
		IntegrationRuntimes_ListByFactory(subscriptionId: string, resourceGroupName: string, factoryName: string, api_version: string): Observable<IntegrationRuntimeListResponse> {
			return this.http.get<IntegrationRuntimeListResponse>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DataFactory/factories/' + (factoryName == null ? '' : encodeURIComponent(factoryName)) + '/integrationRuntimes&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Gets an integration runtime.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataFactory/factories/{factoryName}/integrationRuntimes/{integrationRuntimeName}
		 * @param {string} subscriptionId The subscription identifier.
		 * @param {string} resourceGroupName The resource group name.
		 *     Min length: 1    Max length: 90
		 * @param {string} factoryName The factory name.
		 *     Min length: 3    Max length: 63
		 * @param {string} integrationRuntimeName The integration runtime name.
		 *     Min length: 3    Max length: 63
		 * @param {string} api_version The API version.
		 * @return {IntegrationRuntimeResource} OK.
		 */
		IntegrationRuntimes_Get(subscriptionId: string, resourceGroupName: string, factoryName: string, integrationRuntimeName: string, api_version: string): Observable<IntegrationRuntimeResource> {
			return this.http.get<IntegrationRuntimeResource>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DataFactory/factories/' + (factoryName == null ? '' : encodeURIComponent(factoryName)) + '/integrationRuntimes/' + (integrationRuntimeName == null ? '' : encodeURIComponent(integrationRuntimeName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Creates or updates an integration runtime.
		 * Put subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataFactory/factories/{factoryName}/integrationRuntimes/{integrationRuntimeName}
		 * @param {string} subscriptionId The subscription identifier.
		 * @param {string} resourceGroupName The resource group name.
		 *     Min length: 1    Max length: 90
		 * @param {string} factoryName The factory name.
		 *     Min length: 3    Max length: 63
		 * @param {string} integrationRuntimeName The integration runtime name.
		 *     Min length: 3    Max length: 63
		 * @param {string} api_version The API version.
		 * @param {IntegrationRuntimeResource} requestBody Integration runtime resource definition.
		 * @return {IntegrationRuntimeResource} OK.
		 */
		IntegrationRuntimes_CreateOrUpdate(subscriptionId: string, resourceGroupName: string, factoryName: string, integrationRuntimeName: string, api_version: string, requestBody: IntegrationRuntimeResource): Observable<IntegrationRuntimeResource> {
			return this.http.put<IntegrationRuntimeResource>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DataFactory/factories/' + (factoryName == null ? '' : encodeURIComponent(factoryName)) + '/integrationRuntimes/' + (integrationRuntimeName == null ? '' : encodeURIComponent(integrationRuntimeName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes an integration runtime.
		 * Delete subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataFactory/factories/{factoryName}/integrationRuntimes/{integrationRuntimeName}
		 * @param {string} subscriptionId The subscription identifier.
		 * @param {string} resourceGroupName The resource group name.
		 *     Min length: 1    Max length: 90
		 * @param {string} factoryName The factory name.
		 *     Min length: 3    Max length: 63
		 * @param {string} integrationRuntimeName The integration runtime name.
		 *     Min length: 3    Max length: 63
		 * @param {string} api_version The API version.
		 * @return {void} OK.
		 */
		IntegrationRuntimes_Delete(subscriptionId: string, resourceGroupName: string, factoryName: string, integrationRuntimeName: string, api_version: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DataFactory/factories/' + (factoryName == null ? '' : encodeURIComponent(factoryName)) + '/integrationRuntimes/' + (integrationRuntimeName == null ? '' : encodeURIComponent(integrationRuntimeName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Updates an integration runtime.
		 * Patch subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataFactory/factories/{factoryName}/integrationRuntimes/{integrationRuntimeName}
		 * @param {string} subscriptionId The subscription identifier.
		 * @param {string} resourceGroupName The resource group name.
		 *     Min length: 1    Max length: 90
		 * @param {string} factoryName The factory name.
		 *     Min length: 3    Max length: 63
		 * @param {string} integrationRuntimeName The integration runtime name.
		 *     Min length: 3    Max length: 63
		 * @param {string} api_version The API version.
		 * @param {UpdateIntegrationRuntimeRequest} requestBody The parameters for updating an integration runtime.
		 * @return {IntegrationRuntimeResource} OK.
		 */
		IntegrationRuntimes_Update(subscriptionId: string, resourceGroupName: string, factoryName: string, integrationRuntimeName: string, api_version: string, requestBody: UpdateIntegrationRuntimeRequest): Observable<IntegrationRuntimeResource> {
			return this.http.patch<IntegrationRuntimeResource>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DataFactory/factories/' + (factoryName == null ? '' : encodeURIComponent(factoryName)) + '/integrationRuntimes/' + (integrationRuntimeName == null ? '' : encodeURIComponent(integrationRuntimeName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets the on-premises integration runtime connection information for encrypting the on-premises data source credentials.
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataFactory/factories/{factoryName}/integrationRuntimes/{integrationRuntimeName}/getConnectionInfo
		 * @param {string} subscriptionId The subscription identifier.
		 * @param {string} resourceGroupName The resource group name.
		 *     Min length: 1    Max length: 90
		 * @param {string} factoryName The factory name.
		 *     Min length: 3    Max length: 63
		 * @param {string} integrationRuntimeName The integration runtime name.
		 *     Min length: 3    Max length: 63
		 * @param {string} api_version The API version.
		 * @return {IntegrationRuntimes_GetConnectionInfoReturn} OK.
		 */
		IntegrationRuntimes_GetConnectionInfo(subscriptionId: string, resourceGroupName: string, factoryName: string, integrationRuntimeName: string, api_version: string): Observable<IntegrationRuntimes_GetConnectionInfoReturn> {
			return this.http.post<IntegrationRuntimes_GetConnectionInfoReturn>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DataFactory/factories/' + (factoryName == null ? '' : encodeURIComponent(factoryName)) + '/integrationRuntimes/' + (integrationRuntimeName == null ? '' : encodeURIComponent(integrationRuntimeName)) + '/getConnectionInfo&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), null, {});
		}

		/**
		 * Get a SSIS integration runtime object metadata by specified path. The return is pageable metadata list.
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataFactory/factories/{factoryName}/integrationRuntimes/{integrationRuntimeName}/getObjectMetadata
		 * @param {string} subscriptionId The subscription identifier.
		 * @param {string} resourceGroupName The resource group name.
		 *     Min length: 1    Max length: 90
		 * @param {string} factoryName The factory name.
		 *     Min length: 3    Max length: 63
		 * @param {string} integrationRuntimeName The integration runtime name.
		 *     Min length: 3    Max length: 63
		 * @param {string} api_version The API version.
		 * @param {GetSsisObjectMetadataRequest} requestBody The parameters for getting a SSIS object metadata.
		 * @return {IntegrationRuntimeObjectMetadata_GetReturn} OK.
		 */
		IntegrationRuntimeObjectMetadata_Get(subscriptionId: string, resourceGroupName: string, factoryName: string, integrationRuntimeName: string, api_version: string, requestBody: GetSsisObjectMetadataRequest): Observable<IntegrationRuntimeObjectMetadata_GetReturn> {
			return this.http.post<IntegrationRuntimeObjectMetadata_GetReturn>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DataFactory/factories/' + (factoryName == null ? '' : encodeURIComponent(factoryName)) + '/integrationRuntimes/' + (integrationRuntimeName == null ? '' : encodeURIComponent(integrationRuntimeName)) + '/getObjectMetadata&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets detailed status information for an integration runtime.
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataFactory/factories/{factoryName}/integrationRuntimes/{integrationRuntimeName}/getStatus
		 * @param {string} subscriptionId The subscription identifier.
		 * @param {string} resourceGroupName The resource group name.
		 *     Min length: 1    Max length: 90
		 * @param {string} factoryName The factory name.
		 *     Min length: 3    Max length: 63
		 * @param {string} integrationRuntimeName The integration runtime name.
		 *     Min length: 3    Max length: 63
		 * @param {string} api_version The API version.
		 * @return {IntegrationRuntimeStatusResponse} OK.
		 */
		IntegrationRuntimes_GetStatus(subscriptionId: string, resourceGroupName: string, factoryName: string, integrationRuntimeName: string, api_version: string): Observable<IntegrationRuntimeStatusResponse> {
			return this.http.post<IntegrationRuntimeStatusResponse>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DataFactory/factories/' + (factoryName == null ? '' : encodeURIComponent(factoryName)) + '/integrationRuntimes/' + (integrationRuntimeName == null ? '' : encodeURIComponent(integrationRuntimeName)) + '/getStatus&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), null, {});
		}

		/**
		 * Create a linked integration runtime entry in a shared integration runtime.
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataFactory/factories/{factoryName}/integrationRuntimes/{integrationRuntimeName}/linkedIntegrationRuntime
		 * @param {string} subscriptionId The subscription identifier.
		 * @param {string} resourceGroupName The resource group name.
		 *     Min length: 1    Max length: 90
		 * @param {string} factoryName The factory name.
		 *     Min length: 3    Max length: 63
		 * @param {string} integrationRuntimeName The integration runtime name.
		 *     Min length: 3    Max length: 63
		 * @param {string} api_version The API version.
		 * @param {CreateLinkedIntegrationRuntimeRequest} requestBody The linked integration runtime properties.
		 * @return {IntegrationRuntimeStatusResponse} OK.
		 */
		IntegrationRuntimes_CreateLinkedIntegrationRuntime(subscriptionId: string, resourceGroupName: string, factoryName: string, integrationRuntimeName: string, api_version: string, requestBody: CreateLinkedIntegrationRuntimeRequest): Observable<IntegrationRuntimeStatusResponse> {
			return this.http.post<IntegrationRuntimeStatusResponse>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DataFactory/factories/' + (factoryName == null ? '' : encodeURIComponent(factoryName)) + '/integrationRuntimes/' + (integrationRuntimeName == null ? '' : encodeURIComponent(integrationRuntimeName)) + '/linkedIntegrationRuntime&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves the authentication keys for an integration runtime.
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataFactory/factories/{factoryName}/integrationRuntimes/{integrationRuntimeName}/listAuthKeys
		 * @param {string} subscriptionId The subscription identifier.
		 * @param {string} resourceGroupName The resource group name.
		 *     Min length: 1    Max length: 90
		 * @param {string} factoryName The factory name.
		 *     Min length: 3    Max length: 63
		 * @param {string} integrationRuntimeName The integration runtime name.
		 *     Min length: 3    Max length: 63
		 * @param {string} api_version The API version.
		 * @return {IntegrationRuntimes_ListAuthKeysReturn} OK.
		 */
		IntegrationRuntimes_ListAuthKeys(subscriptionId: string, resourceGroupName: string, factoryName: string, integrationRuntimeName: string, api_version: string): Observable<IntegrationRuntimes_ListAuthKeysReturn> {
			return this.http.post<IntegrationRuntimes_ListAuthKeysReturn>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DataFactory/factories/' + (factoryName == null ? '' : encodeURIComponent(factoryName)) + '/integrationRuntimes/' + (integrationRuntimeName == null ? '' : encodeURIComponent(integrationRuntimeName)) + '/listAuthKeys&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), null, {});
		}

		/**
		 * Get the integration runtime monitoring data, which includes the monitor data for all the nodes under this integration runtime.
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataFactory/factories/{factoryName}/integrationRuntimes/{integrationRuntimeName}/monitoringData
		 * @param {string} subscriptionId The subscription identifier.
		 * @param {string} resourceGroupName The resource group name.
		 *     Min length: 1    Max length: 90
		 * @param {string} factoryName The factory name.
		 *     Min length: 3    Max length: 63
		 * @param {string} integrationRuntimeName The integration runtime name.
		 *     Min length: 3    Max length: 63
		 * @param {string} api_version The API version.
		 * @return {IntegrationRuntimes_GetMonitoringDataReturn} OK.
		 */
		IntegrationRuntimes_GetMonitoringData(subscriptionId: string, resourceGroupName: string, factoryName: string, integrationRuntimeName: string, api_version: string): Observable<IntegrationRuntimes_GetMonitoringDataReturn> {
			return this.http.post<IntegrationRuntimes_GetMonitoringDataReturn>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DataFactory/factories/' + (factoryName == null ? '' : encodeURIComponent(factoryName)) + '/integrationRuntimes/' + (integrationRuntimeName == null ? '' : encodeURIComponent(integrationRuntimeName)) + '/monitoringData&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), null, {});
		}

		/**
		 * Gets a self-hosted integration runtime node.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataFactory/factories/{factoryName}/integrationRuntimes/{integrationRuntimeName}/nodes/{nodeName}
		 * @param {string} subscriptionId The subscription identifier.
		 * @param {string} resourceGroupName The resource group name.
		 *     Min length: 1    Max length: 90
		 * @param {string} factoryName The factory name.
		 *     Min length: 3    Max length: 63
		 * @param {string} integrationRuntimeName The integration runtime name.
		 *     Min length: 3    Max length: 63
		 * @param {string} nodeName The integration runtime node name.
		 *     Min length: 1    Max length: 150
		 * @param {string} api_version The API version.
		 * @return {any} OK.
		 */
		IntegrationRuntimeNodes_Get(subscriptionId: string, resourceGroupName: string, factoryName: string, integrationRuntimeName: string, nodeName: string, api_version: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DataFactory/factories/' + (factoryName == null ? '' : encodeURIComponent(factoryName)) + '/integrationRuntimes/' + (integrationRuntimeName == null ? '' : encodeURIComponent(integrationRuntimeName)) + '/nodes/' + (nodeName == null ? '' : encodeURIComponent(nodeName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Deletes a self-hosted integration runtime node.
		 * Delete subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataFactory/factories/{factoryName}/integrationRuntimes/{integrationRuntimeName}/nodes/{nodeName}
		 * @param {string} subscriptionId The subscription identifier.
		 * @param {string} resourceGroupName The resource group name.
		 *     Min length: 1    Max length: 90
		 * @param {string} factoryName The factory name.
		 *     Min length: 3    Max length: 63
		 * @param {string} integrationRuntimeName The integration runtime name.
		 *     Min length: 3    Max length: 63
		 * @param {string} nodeName The integration runtime node name.
		 *     Min length: 1    Max length: 150
		 * @param {string} api_version The API version.
		 * @return {void} OK.
		 */
		IntegrationRuntimeNodes_Delete(subscriptionId: string, resourceGroupName: string, factoryName: string, integrationRuntimeName: string, nodeName: string, api_version: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DataFactory/factories/' + (factoryName == null ? '' : encodeURIComponent(factoryName)) + '/integrationRuntimes/' + (integrationRuntimeName == null ? '' : encodeURIComponent(integrationRuntimeName)) + '/nodes/' + (nodeName == null ? '' : encodeURIComponent(nodeName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Updates a self-hosted integration runtime node.
		 * Patch subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataFactory/factories/{factoryName}/integrationRuntimes/{integrationRuntimeName}/nodes/{nodeName}
		 * @param {string} subscriptionId The subscription identifier.
		 * @param {string} resourceGroupName The resource group name.
		 *     Min length: 1    Max length: 90
		 * @param {string} factoryName The factory name.
		 *     Min length: 3    Max length: 63
		 * @param {string} integrationRuntimeName The integration runtime name.
		 *     Min length: 3    Max length: 63
		 * @param {string} nodeName The integration runtime node name.
		 *     Min length: 1    Max length: 150
		 * @param {string} api_version The API version.
		 * @param {UpdateIntegrationRuntimeNodeRequest} requestBody The parameters for updating an integration runtime node.
		 * @return {any} OK.
		 */
		IntegrationRuntimeNodes_Update(subscriptionId: string, resourceGroupName: string, factoryName: string, integrationRuntimeName: string, nodeName: string, api_version: string, requestBody: UpdateIntegrationRuntimeNodeRequest): Observable<HttpResponse<string>> {
			return this.http.patch(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DataFactory/factories/' + (factoryName == null ? '' : encodeURIComponent(factoryName)) + '/integrationRuntimes/' + (integrationRuntimeName == null ? '' : encodeURIComponent(integrationRuntimeName)) + '/nodes/' + (nodeName == null ? '' : encodeURIComponent(nodeName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get the IP address of self-hosted integration runtime node.
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataFactory/factories/{factoryName}/integrationRuntimes/{integrationRuntimeName}/nodes/{nodeName}/ipAddress
		 * @param {string} subscriptionId The subscription identifier.
		 * @param {string} resourceGroupName The resource group name.
		 *     Min length: 1    Max length: 90
		 * @param {string} factoryName The factory name.
		 *     Min length: 3    Max length: 63
		 * @param {string} integrationRuntimeName The integration runtime name.
		 *     Min length: 3    Max length: 63
		 * @param {string} nodeName The integration runtime node name.
		 *     Min length: 1    Max length: 150
		 * @param {string} api_version The API version.
		 * @return {IntegrationRuntimeNodes_GetIpAddressReturn} OK.
		 */
		IntegrationRuntimeNodes_GetIpAddress(subscriptionId: string, resourceGroupName: string, factoryName: string, integrationRuntimeName: string, nodeName: string, api_version: string): Observable<IntegrationRuntimeNodes_GetIpAddressReturn> {
			return this.http.post<IntegrationRuntimeNodes_GetIpAddressReturn>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DataFactory/factories/' + (factoryName == null ? '' : encodeURIComponent(factoryName)) + '/integrationRuntimes/' + (integrationRuntimeName == null ? '' : encodeURIComponent(integrationRuntimeName)) + '/nodes/' + (nodeName == null ? '' : encodeURIComponent(nodeName)) + '/ipAddress&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), null, {});
		}

		/**
		 * Refresh a SSIS integration runtime object metadata.
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataFactory/factories/{factoryName}/integrationRuntimes/{integrationRuntimeName}/refreshObjectMetadata
		 * @param {string} subscriptionId The subscription identifier.
		 * @param {string} resourceGroupName The resource group name.
		 *     Min length: 1    Max length: 90
		 * @param {string} factoryName The factory name.
		 *     Min length: 3    Max length: 63
		 * @param {string} integrationRuntimeName The integration runtime name.
		 *     Min length: 3    Max length: 63
		 * @param {string} api_version The API version.
		 * @return {SsisObjectMetadataStatusResponse} OK.
		 */
		IntegrationRuntimeObjectMetadata_Refresh(subscriptionId: string, resourceGroupName: string, factoryName: string, integrationRuntimeName: string, api_version: string): Observable<SsisObjectMetadataStatusResponse> {
			return this.http.post<SsisObjectMetadataStatusResponse>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DataFactory/factories/' + (factoryName == null ? '' : encodeURIComponent(factoryName)) + '/integrationRuntimes/' + (integrationRuntimeName == null ? '' : encodeURIComponent(integrationRuntimeName)) + '/refreshObjectMetadata&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), null, {});
		}

		/**
		 * Regenerates the authentication key for an integration runtime.
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataFactory/factories/{factoryName}/integrationRuntimes/{integrationRuntimeName}/regenerateAuthKey
		 * @param {string} subscriptionId The subscription identifier.
		 * @param {string} resourceGroupName The resource group name.
		 *     Min length: 1    Max length: 90
		 * @param {string} factoryName The factory name.
		 *     Min length: 3    Max length: 63
		 * @param {string} integrationRuntimeName The integration runtime name.
		 *     Min length: 3    Max length: 63
		 * @param {string} api_version The API version.
		 * @param {IntegrationRuntimes_RegenerateAuthKeyPostBody} requestBody The parameters for regenerating integration runtime authentication key.
		 * @return {IntegrationRuntimes_RegenerateAuthKeyReturn} OK.
		 */
		IntegrationRuntimes_RegenerateAuthKey(subscriptionId: string, resourceGroupName: string, factoryName: string, integrationRuntimeName: string, api_version: string, requestBody: IntegrationRuntimes_RegenerateAuthKeyPostBody): Observable<IntegrationRuntimes_RegenerateAuthKeyReturn> {
			return this.http.post<IntegrationRuntimes_RegenerateAuthKeyReturn>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DataFactory/factories/' + (factoryName == null ? '' : encodeURIComponent(factoryName)) + '/integrationRuntimes/' + (integrationRuntimeName == null ? '' : encodeURIComponent(integrationRuntimeName)) + '/regenerateAuthKey&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Remove all linked integration runtimes under specific data factory in a self-hosted integration runtime.
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataFactory/factories/{factoryName}/integrationRuntimes/{integrationRuntimeName}/removeLinks
		 * @param {string} subscriptionId The subscription identifier.
		 * @param {string} resourceGroupName The resource group name.
		 *     Min length: 1    Max length: 90
		 * @param {string} factoryName The factory name.
		 *     Min length: 3    Max length: 63
		 * @param {string} integrationRuntimeName The integration runtime name.
		 *     Min length: 3    Max length: 63
		 * @param {string} api_version The API version.
		 * @param {LinkedIntegrationRuntimeRequest} requestBody The data factory name for the linked integration runtime.
		 * @return {void} OK.
		 */
		IntegrationRuntimes_RemoveLinks(subscriptionId: string, resourceGroupName: string, factoryName: string, integrationRuntimeName: string, api_version: string, requestBody: LinkedIntegrationRuntimeRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DataFactory/factories/' + (factoryName == null ? '' : encodeURIComponent(factoryName)) + '/integrationRuntimes/' + (integrationRuntimeName == null ? '' : encodeURIComponent(integrationRuntimeName)) + '/removeLinks&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Starts a ManagedReserved type integration runtime.
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataFactory/factories/{factoryName}/integrationRuntimes/{integrationRuntimeName}/start
		 * @param {string} subscriptionId The subscription identifier.
		 * @param {string} resourceGroupName The resource group name.
		 *     Min length: 1    Max length: 90
		 * @param {string} factoryName The factory name.
		 *     Min length: 3    Max length: 63
		 * @param {string} integrationRuntimeName The integration runtime name.
		 *     Min length: 3    Max length: 63
		 * @param {string} api_version The API version.
		 * @return {IntegrationRuntimeStatusResponse} OK.
		 */
		IntegrationRuntimes_Start(subscriptionId: string, resourceGroupName: string, factoryName: string, integrationRuntimeName: string, api_version: string): Observable<IntegrationRuntimeStatusResponse> {
			return this.http.post<IntegrationRuntimeStatusResponse>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DataFactory/factories/' + (factoryName == null ? '' : encodeURIComponent(factoryName)) + '/integrationRuntimes/' + (integrationRuntimeName == null ? '' : encodeURIComponent(integrationRuntimeName)) + '/start&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), null, {});
		}

		/**
		 * Stops a ManagedReserved type integration runtime.
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataFactory/factories/{factoryName}/integrationRuntimes/{integrationRuntimeName}/stop
		 * @param {string} subscriptionId The subscription identifier.
		 * @param {string} resourceGroupName The resource group name.
		 *     Min length: 1    Max length: 90
		 * @param {string} factoryName The factory name.
		 *     Min length: 3    Max length: 63
		 * @param {string} integrationRuntimeName The integration runtime name.
		 *     Min length: 3    Max length: 63
		 * @param {string} api_version The API version.
		 * @return {void} OK.
		 */
		IntegrationRuntimes_Stop(subscriptionId: string, resourceGroupName: string, factoryName: string, integrationRuntimeName: string, api_version: string): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DataFactory/factories/' + (factoryName == null ? '' : encodeURIComponent(factoryName)) + '/integrationRuntimes/' + (integrationRuntimeName == null ? '' : encodeURIComponent(integrationRuntimeName)) + '/stop&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Force the integration runtime to synchronize credentials across integration runtime nodes, and this will override the credentials across all worker nodes with those available on the dispatcher node. If you already have the latest credential backup file, you should manually import it (preferred) on any self-hosted integration runtime node than using this API directly.
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataFactory/factories/{factoryName}/integrationRuntimes/{integrationRuntimeName}/syncCredentials
		 * @param {string} subscriptionId The subscription identifier.
		 * @param {string} resourceGroupName The resource group name.
		 *     Min length: 1    Max length: 90
		 * @param {string} factoryName The factory name.
		 *     Min length: 3    Max length: 63
		 * @param {string} integrationRuntimeName The integration runtime name.
		 *     Min length: 3    Max length: 63
		 * @param {string} api_version The API version.
		 * @return {void} OK.
		 */
		IntegrationRuntimes_SyncCredentials(subscriptionId: string, resourceGroupName: string, factoryName: string, integrationRuntimeName: string, api_version: string): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DataFactory/factories/' + (factoryName == null ? '' : encodeURIComponent(factoryName)) + '/integrationRuntimes/' + (integrationRuntimeName == null ? '' : encodeURIComponent(integrationRuntimeName)) + '/syncCredentials&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Upgrade self-hosted integration runtime to latest version if availability.
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataFactory/factories/{factoryName}/integrationRuntimes/{integrationRuntimeName}/upgrade
		 * @param {string} subscriptionId The subscription identifier.
		 * @param {string} resourceGroupName The resource group name.
		 *     Min length: 1    Max length: 90
		 * @param {string} factoryName The factory name.
		 *     Min length: 3    Max length: 63
		 * @param {string} integrationRuntimeName The integration runtime name.
		 *     Min length: 3    Max length: 63
		 * @param {string} api_version The API version.
		 * @return {void} OK.
		 */
		IntegrationRuntimes_Upgrade(subscriptionId: string, resourceGroupName: string, factoryName: string, integrationRuntimeName: string, api_version: string): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DataFactory/factories/' + (factoryName == null ? '' : encodeURIComponent(factoryName)) + '/integrationRuntimes/' + (integrationRuntimeName == null ? '' : encodeURIComponent(integrationRuntimeName)) + '/upgrade&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Lists linked services.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataFactory/factories/{factoryName}/linkedservices
		 * @param {string} subscriptionId The subscription identifier.
		 * @param {string} resourceGroupName The resource group name.
		 *     Min length: 1    Max length: 90
		 * @param {string} factoryName The factory name.
		 *     Min length: 3    Max length: 63
		 * @param {string} api_version The API version.
		 * @return {LinkedServiceListResponse} OK.
		 */
		LinkedServices_ListByFactory(subscriptionId: string, resourceGroupName: string, factoryName: string, api_version: string): Observable<LinkedServiceListResponse> {
			return this.http.get<LinkedServiceListResponse>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DataFactory/factories/' + (factoryName == null ? '' : encodeURIComponent(factoryName)) + '/linkedservices&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Gets a linked service.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataFactory/factories/{factoryName}/linkedservices/{linkedServiceName}
		 * @param {string} subscriptionId The subscription identifier.
		 * @param {string} resourceGroupName The resource group name.
		 *     Min length: 1    Max length: 90
		 * @param {string} factoryName The factory name.
		 *     Min length: 3    Max length: 63
		 * @param {string} linkedServiceName The linked service name.
		 *     Min length: 1    Max length: 260
		 * @param {string} api_version The API version.
		 * @return {LinkedServiceResource} OK.
		 */
		LinkedServices_Get(subscriptionId: string, resourceGroupName: string, factoryName: string, linkedServiceName: string, api_version: string): Observable<LinkedServiceResource> {
			return this.http.get<LinkedServiceResource>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DataFactory/factories/' + (factoryName == null ? '' : encodeURIComponent(factoryName)) + '/linkedservices/' + (linkedServiceName == null ? '' : encodeURIComponent(linkedServiceName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Creates or updates a linked service.
		 * Put subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataFactory/factories/{factoryName}/linkedservices/{linkedServiceName}
		 * @param {string} subscriptionId The subscription identifier.
		 * @param {string} resourceGroupName The resource group name.
		 *     Min length: 1    Max length: 90
		 * @param {string} factoryName The factory name.
		 *     Min length: 3    Max length: 63
		 * @param {string} linkedServiceName The linked service name.
		 *     Min length: 1    Max length: 260
		 * @param {string} api_version The API version.
		 * @param {LinkedServiceResource} requestBody Linked service resource definition.
		 * @return {LinkedServiceResource} OK.
		 */
		LinkedServices_CreateOrUpdate(subscriptionId: string, resourceGroupName: string, factoryName: string, linkedServiceName: string, api_version: string, requestBody: LinkedServiceResource): Observable<LinkedServiceResource> {
			return this.http.put<LinkedServiceResource>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DataFactory/factories/' + (factoryName == null ? '' : encodeURIComponent(factoryName)) + '/linkedservices/' + (linkedServiceName == null ? '' : encodeURIComponent(linkedServiceName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a linked service.
		 * Delete subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataFactory/factories/{factoryName}/linkedservices/{linkedServiceName}
		 * @param {string} subscriptionId The subscription identifier.
		 * @param {string} resourceGroupName The resource group name.
		 *     Min length: 1    Max length: 90
		 * @param {string} factoryName The factory name.
		 *     Min length: 3    Max length: 63
		 * @param {string} linkedServiceName The linked service name.
		 *     Min length: 1    Max length: 260
		 * @param {string} api_version The API version.
		 * @return {void} OK.
		 */
		LinkedServices_Delete(subscriptionId: string, resourceGroupName: string, factoryName: string, linkedServiceName: string, api_version: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DataFactory/factories/' + (factoryName == null ? '' : encodeURIComponent(factoryName)) + '/linkedservices/' + (linkedServiceName == null ? '' : encodeURIComponent(linkedServiceName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get a pipeline run by its run ID.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataFactory/factories/{factoryName}/pipelineruns/{runId}
		 * @param {string} subscriptionId The subscription identifier.
		 * @param {string} resourceGroupName The resource group name.
		 *     Min length: 1    Max length: 90
		 * @param {string} factoryName The factory name.
		 *     Min length: 3    Max length: 63
		 * @param {string} runId The pipeline run identifier.
		 * @param {string} api_version The API version.
		 * @return {PipelineRun} OK.
		 */
		PipelineRuns_Get(subscriptionId: string, resourceGroupName: string, factoryName: string, runId: string, api_version: string): Observable<PipelineRun> {
			return this.http.get<PipelineRun>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DataFactory/factories/' + (factoryName == null ? '' : encodeURIComponent(factoryName)) + '/pipelineruns/' + (runId == null ? '' : encodeURIComponent(runId)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Cancel a pipeline run by its run ID.
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataFactory/factories/{factoryName}/pipelineruns/{runId}/cancel
		 * @param {string} subscriptionId The subscription identifier.
		 * @param {string} resourceGroupName The resource group name.
		 *     Min length: 1    Max length: 90
		 * @param {string} factoryName The factory name.
		 *     Min length: 3    Max length: 63
		 * @param {string} runId The pipeline run identifier.
		 * @param {boolean} isRecursive If true, cancel all the Child pipelines that are triggered by the current pipeline.
		 * @param {string} api_version The API version.
		 * @return {void} Pipeline run has been canceled successfully. 
		 */
		PipelineRuns_Cancel(subscriptionId: string, resourceGroupName: string, factoryName: string, runId: string, isRecursive: boolean | null | undefined, api_version: string): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DataFactory/factories/' + (factoryName == null ? '' : encodeURIComponent(factoryName)) + '/pipelineruns/' + (runId == null ? '' : encodeURIComponent(runId)) + '/cancel&isRecursive=' + isRecursive + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Query activity runs based on input filter conditions.
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataFactory/factories/{factoryName}/pipelineruns/{runId}/queryActivityruns
		 * @param {string} subscriptionId The subscription identifier.
		 * @param {string} resourceGroupName The resource group name.
		 *     Min length: 1    Max length: 90
		 * @param {string} factoryName The factory name.
		 *     Min length: 3    Max length: 63
		 * @param {string} runId The pipeline run identifier.
		 * @param {string} api_version The API version.
		 * @param {RunFilterParameters} requestBody Parameters to filter the activity runs.
		 * @return {ActivityRunsQueryResponse} OK.
		 */
		ActivityRuns_QueryByPipelineRun(subscriptionId: string, resourceGroupName: string, factoryName: string, runId: string, api_version: string, requestBody: RunFilterParameters): Observable<ActivityRunsQueryResponse> {
			return this.http.post<ActivityRunsQueryResponse>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DataFactory/factories/' + (factoryName == null ? '' : encodeURIComponent(factoryName)) + '/pipelineruns/' + (runId == null ? '' : encodeURIComponent(runId)) + '/queryActivityruns&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists pipelines.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataFactory/factories/{factoryName}/pipelines
		 * @param {string} subscriptionId The subscription identifier.
		 * @param {string} resourceGroupName The resource group name.
		 *     Min length: 1    Max length: 90
		 * @param {string} factoryName The factory name.
		 *     Min length: 3    Max length: 63
		 * @param {string} api_version The API version.
		 * @return {PipelineListResponse} OK.
		 */
		Pipelines_ListByFactory(subscriptionId: string, resourceGroupName: string, factoryName: string, api_version: string): Observable<PipelineListResponse> {
			return this.http.get<PipelineListResponse>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DataFactory/factories/' + (factoryName == null ? '' : encodeURIComponent(factoryName)) + '/pipelines&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Gets a pipeline.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataFactory/factories/{factoryName}/pipelines/{pipelineName}
		 * @param {string} subscriptionId The subscription identifier.
		 * @param {string} resourceGroupName The resource group name.
		 *     Min length: 1    Max length: 90
		 * @param {string} factoryName The factory name.
		 *     Min length: 3    Max length: 63
		 * @param {string} pipelineName The pipeline name.
		 *     Min length: 1    Max length: 260
		 * @param {string} api_version The API version.
		 * @return {PipelineResource} OK.
		 */
		Pipelines_Get(subscriptionId: string, resourceGroupName: string, factoryName: string, pipelineName: string, api_version: string): Observable<PipelineResource> {
			return this.http.get<PipelineResource>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DataFactory/factories/' + (factoryName == null ? '' : encodeURIComponent(factoryName)) + '/pipelines/' + (pipelineName == null ? '' : encodeURIComponent(pipelineName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Creates or updates a pipeline.
		 * Put subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataFactory/factories/{factoryName}/pipelines/{pipelineName}
		 * @param {string} subscriptionId The subscription identifier.
		 * @param {string} resourceGroupName The resource group name.
		 *     Min length: 1    Max length: 90
		 * @param {string} factoryName The factory name.
		 *     Min length: 3    Max length: 63
		 * @param {string} pipelineName The pipeline name.
		 *     Min length: 1    Max length: 260
		 * @param {string} api_version The API version.
		 * @param {PipelineResource} requestBody Pipeline resource definition.
		 * @return {PipelineResource} OK.
		 */
		Pipelines_CreateOrUpdate(subscriptionId: string, resourceGroupName: string, factoryName: string, pipelineName: string, api_version: string, requestBody: PipelineResource): Observable<PipelineResource> {
			return this.http.put<PipelineResource>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DataFactory/factories/' + (factoryName == null ? '' : encodeURIComponent(factoryName)) + '/pipelines/' + (pipelineName == null ? '' : encodeURIComponent(pipelineName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a pipeline.
		 * Delete subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataFactory/factories/{factoryName}/pipelines/{pipelineName}
		 * @param {string} subscriptionId The subscription identifier.
		 * @param {string} resourceGroupName The resource group name.
		 *     Min length: 1    Max length: 90
		 * @param {string} factoryName The factory name.
		 *     Min length: 3    Max length: 63
		 * @param {string} pipelineName The pipeline name.
		 *     Min length: 1    Max length: 260
		 * @param {string} api_version The API version.
		 * @return {void} OK.
		 */
		Pipelines_Delete(subscriptionId: string, resourceGroupName: string, factoryName: string, pipelineName: string, api_version: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DataFactory/factories/' + (factoryName == null ? '' : encodeURIComponent(factoryName)) + '/pipelines/' + (pipelineName == null ? '' : encodeURIComponent(pipelineName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Creates a run of a pipeline.
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataFactory/factories/{factoryName}/pipelines/{pipelineName}/createRun
		 * @param {string} subscriptionId The subscription identifier.
		 * @param {string} resourceGroupName The resource group name.
		 *     Min length: 1    Max length: 90
		 * @param {string} factoryName The factory name.
		 *     Min length: 3    Max length: 63
		 * @param {string} pipelineName The pipeline name.
		 *     Min length: 1    Max length: 260
		 * @param {string} api_version The API version.
		 * @param {string} referencePipelineRunId The pipeline run identifier. If run ID is specified the parameters of the specified run will be used to create a new run.
		 * @param {boolean} isRecovery Recovery mode flag. If recovery mode is set to true, the specified referenced pipeline run and the new run will be grouped under the same groupId.
		 * @param {string} startActivityName In recovery mode, the rerun will start from this activity. If not specified, all activities will run.
		 * @param {ParameterValueSpecification} requestBody Parameters of the pipeline run. These parameters will be used only if the runId is not specified.
		 * @return {CreateRunResponse} OK.
		 */
		Pipelines_CreateRun(subscriptionId: string, resourceGroupName: string, factoryName: string, pipelineName: string, api_version: string, referencePipelineRunId: string | null | undefined, isRecovery: boolean | null | undefined, startActivityName: string | null | undefined, requestBody: ParameterValueSpecification): Observable<CreateRunResponse> {
			return this.http.post<CreateRunResponse>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DataFactory/factories/' + (factoryName == null ? '' : encodeURIComponent(factoryName)) + '/pipelines/' + (pipelineName == null ? '' : encodeURIComponent(pipelineName)) + '/createRun&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)) + '&referencePipelineRunId=' + (referencePipelineRunId == null ? '' : encodeURIComponent(referencePipelineRunId)) + '&isRecovery=' + isRecovery + '&startActivityName=' + (startActivityName == null ? '' : encodeURIComponent(startActivityName)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Query all active data flow debug sessions.
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataFactory/factories/{factoryName}/queryDataFlowDebugSessions
		 * @param {string} subscriptionId The subscription identifier.
		 * @param {string} resourceGroupName The resource group name.
		 *     Min length: 1    Max length: 90
		 * @param {string} factoryName The factory name.
		 *     Min length: 3    Max length: 63
		 * @param {string} api_version The API version.
		 * @return {QueryDataFlowDebugSessionsResponse} OK.
		 */
		DataFlowDebugSession_QueryByFactory(subscriptionId: string, resourceGroupName: string, factoryName: string, api_version: string): Observable<QueryDataFlowDebugSessionsResponse> {
			return this.http.post<QueryDataFlowDebugSessionsResponse>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DataFactory/factories/' + (factoryName == null ? '' : encodeURIComponent(factoryName)) + '/queryDataFlowDebugSessions&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), null, {});
		}

		/**
		 * Query pipeline runs in the factory based on input filter conditions.
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataFactory/factories/{factoryName}/queryPipelineRuns
		 * @param {string} subscriptionId The subscription identifier.
		 * @param {string} resourceGroupName The resource group name.
		 *     Min length: 1    Max length: 90
		 * @param {string} factoryName The factory name.
		 *     Min length: 3    Max length: 63
		 * @param {string} api_version The API version.
		 * @param {RunFilterParameters} requestBody Parameters to filter the pipeline run.
		 * @return {PipelineRunsQueryResponse} OK.
		 */
		PipelineRuns_QueryByFactory(subscriptionId: string, resourceGroupName: string, factoryName: string, api_version: string, requestBody: RunFilterParameters): Observable<PipelineRunsQueryResponse> {
			return this.http.post<PipelineRunsQueryResponse>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DataFactory/factories/' + (factoryName == null ? '' : encodeURIComponent(factoryName)) + '/queryPipelineRuns&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Query trigger runs.
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataFactory/factories/{factoryName}/queryTriggerRuns
		 * @param {string} subscriptionId The subscription identifier.
		 * @param {string} resourceGroupName The resource group name.
		 *     Min length: 1    Max length: 90
		 * @param {string} factoryName The factory name.
		 *     Min length: 3    Max length: 63
		 * @param {string} api_version The API version.
		 * @param {RunFilterParameters} requestBody Parameters to filter the pipeline run.
		 * @return {TriggerRunsQueryResponse} OK.
		 */
		TriggerRuns_QueryByFactory(subscriptionId: string, resourceGroupName: string, factoryName: string, api_version: string, requestBody: RunFilterParameters): Observable<TriggerRunsQueryResponse> {
			return this.http.post<TriggerRunsQueryResponse>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DataFactory/factories/' + (factoryName == null ? '' : encodeURIComponent(factoryName)) + '/queryTriggerRuns&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists triggers.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataFactory/factories/{factoryName}/triggers
		 * @param {string} subscriptionId The subscription identifier.
		 * @param {string} resourceGroupName The resource group name.
		 *     Min length: 1    Max length: 90
		 * @param {string} factoryName The factory name.
		 *     Min length: 3    Max length: 63
		 * @param {string} api_version The API version.
		 * @return {TriggerListResponse} OK.
		 */
		Triggers_ListByFactory(subscriptionId: string, resourceGroupName: string, factoryName: string, api_version: string): Observable<TriggerListResponse> {
			return this.http.get<TriggerListResponse>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DataFactory/factories/' + (factoryName == null ? '' : encodeURIComponent(factoryName)) + '/triggers&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Gets a trigger.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataFactory/factories/{factoryName}/triggers/{triggerName}
		 * @param {string} subscriptionId The subscription identifier.
		 * @param {string} resourceGroupName The resource group name.
		 *     Min length: 1    Max length: 90
		 * @param {string} factoryName The factory name.
		 *     Min length: 3    Max length: 63
		 * @param {string} triggerName The trigger name.
		 *     Min length: 1    Max length: 260
		 * @param {string} api_version The API version.
		 * @return {TriggerResource} OK.
		 */
		Triggers_Get(subscriptionId: string, resourceGroupName: string, factoryName: string, triggerName: string, api_version: string): Observable<TriggerResource> {
			return this.http.get<TriggerResource>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DataFactory/factories/' + (factoryName == null ? '' : encodeURIComponent(factoryName)) + '/triggers/' + (triggerName == null ? '' : encodeURIComponent(triggerName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Creates or updates a trigger.
		 * Put subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataFactory/factories/{factoryName}/triggers/{triggerName}
		 * @param {string} subscriptionId The subscription identifier.
		 * @param {string} resourceGroupName The resource group name.
		 *     Min length: 1    Max length: 90
		 * @param {string} factoryName The factory name.
		 *     Min length: 3    Max length: 63
		 * @param {string} triggerName The trigger name.
		 *     Min length: 1    Max length: 260
		 * @param {string} api_version The API version.
		 * @param {TriggerResource} requestBody Trigger resource definition.
		 * @return {TriggerResource} OK.
		 */
		Triggers_CreateOrUpdate(subscriptionId: string, resourceGroupName: string, factoryName: string, triggerName: string, api_version: string, requestBody: TriggerResource): Observable<TriggerResource> {
			return this.http.put<TriggerResource>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DataFactory/factories/' + (factoryName == null ? '' : encodeURIComponent(factoryName)) + '/triggers/' + (triggerName == null ? '' : encodeURIComponent(triggerName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a trigger.
		 * Delete subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataFactory/factories/{factoryName}/triggers/{triggerName}
		 * @param {string} subscriptionId The subscription identifier.
		 * @param {string} resourceGroupName The resource group name.
		 *     Min length: 1    Max length: 90
		 * @param {string} factoryName The factory name.
		 *     Min length: 3    Max length: 63
		 * @param {string} triggerName The trigger name.
		 *     Min length: 1    Max length: 260
		 * @param {string} api_version The API version.
		 * @return {void} OK.
		 */
		Triggers_Delete(subscriptionId: string, resourceGroupName: string, factoryName: string, triggerName: string, api_version: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DataFactory/factories/' + (factoryName == null ? '' : encodeURIComponent(factoryName)) + '/triggers/' + (triggerName == null ? '' : encodeURIComponent(triggerName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get a trigger's event subscription status.
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataFactory/factories/{factoryName}/triggers/{triggerName}/getEventSubscriptionStatus
		 * @param {string} subscriptionId The subscription identifier.
		 * @param {string} resourceGroupName The resource group name.
		 *     Min length: 1    Max length: 90
		 * @param {string} factoryName The factory name.
		 *     Min length: 3    Max length: 63
		 * @param {string} triggerName The trigger name.
		 *     Min length: 1    Max length: 260
		 * @param {string} api_version The API version.
		 * @return {TriggerSubscriptionOperationStatus} Trigger event subscription state.
		 */
		Triggers_GetEventSubscriptionStatus(subscriptionId: string, resourceGroupName: string, factoryName: string, triggerName: string, api_version: string): Observable<TriggerSubscriptionOperationStatus> {
			return this.http.post<TriggerSubscriptionOperationStatus>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DataFactory/factories/' + (factoryName == null ? '' : encodeURIComponent(factoryName)) + '/triggers/' + (triggerName == null ? '' : encodeURIComponent(triggerName)) + '/getEventSubscriptionStatus&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), null, {});
		}

		/**
		 * Lists rerun triggers by an original trigger name.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataFactory/factories/{factoryName}/triggers/{triggerName}/rerunTriggers
		 * @param {string} subscriptionId The subscription identifier.
		 * @param {string} resourceGroupName The resource group name.
		 *     Min length: 1    Max length: 90
		 * @param {string} factoryName The factory name.
		 *     Min length: 3    Max length: 63
		 * @param {string} triggerName The trigger name.
		 *     Min length: 1    Max length: 260
		 * @param {string} api_version The API version.
		 * @return {RerunTriggerListResponse} OK.
		 */
		RerunTriggers_ListByTrigger(subscriptionId: string, resourceGroupName: string, factoryName: string, triggerName: string, api_version: string): Observable<RerunTriggerListResponse> {
			return this.http.get<RerunTriggerListResponse>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DataFactory/factories/' + (factoryName == null ? '' : encodeURIComponent(factoryName)) + '/triggers/' + (triggerName == null ? '' : encodeURIComponent(triggerName)) + '/rerunTriggers&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Creates a rerun trigger.
		 * Put subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataFactory/factories/{factoryName}/triggers/{triggerName}/rerunTriggers/{rerunTriggerName}
		 * @param {string} subscriptionId The subscription identifier.
		 * @param {string} resourceGroupName The resource group name.
		 *     Min length: 1    Max length: 90
		 * @param {string} factoryName The factory name.
		 *     Min length: 3    Max length: 63
		 * @param {string} triggerName The trigger name.
		 *     Min length: 1    Max length: 260
		 * @param {string} rerunTriggerName The rerun trigger name.
		 *     Min length: 1    Max length: 260
		 * @param {string} api_version The API version.
		 * @param {RerunTumblingWindowTriggerActionParameters} requestBody Rerun tumbling window trigger action parameters.
		 * @return {TriggerResource} OK.
		 */
		RerunTriggers_Create(subscriptionId: string, resourceGroupName: string, factoryName: string, triggerName: string, rerunTriggerName: string, api_version: string, requestBody: RerunTumblingWindowTriggerActionParameters): Observable<TriggerResource> {
			return this.http.put<TriggerResource>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DataFactory/factories/' + (factoryName == null ? '' : encodeURIComponent(factoryName)) + '/triggers/' + (triggerName == null ? '' : encodeURIComponent(triggerName)) + '/rerunTriggers/' + (rerunTriggerName == null ? '' : encodeURIComponent(rerunTriggerName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Cancels a trigger.
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataFactory/factories/{factoryName}/triggers/{triggerName}/rerunTriggers/{rerunTriggerName}/cancel
		 * @param {string} subscriptionId The subscription identifier.
		 * @param {string} resourceGroupName The resource group name.
		 *     Min length: 1    Max length: 90
		 * @param {string} factoryName The factory name.
		 *     Min length: 3    Max length: 63
		 * @param {string} triggerName The trigger name.
		 *     Min length: 1    Max length: 260
		 * @param {string} rerunTriggerName The rerun trigger name.
		 *     Min length: 1    Max length: 260
		 * @param {string} api_version The API version.
		 * @return {void} Trigger has been canceled successfully.
		 */
		RerunTriggers_Cancel(subscriptionId: string, resourceGroupName: string, factoryName: string, triggerName: string, rerunTriggerName: string, api_version: string): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DataFactory/factories/' + (factoryName == null ? '' : encodeURIComponent(factoryName)) + '/triggers/' + (triggerName == null ? '' : encodeURIComponent(triggerName)) + '/rerunTriggers/' + (rerunTriggerName == null ? '' : encodeURIComponent(rerunTriggerName)) + '/cancel&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Starts a trigger.
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataFactory/factories/{factoryName}/triggers/{triggerName}/rerunTriggers/{rerunTriggerName}/start
		 * @param {string} subscriptionId The subscription identifier.
		 * @param {string} resourceGroupName The resource group name.
		 *     Min length: 1    Max length: 90
		 * @param {string} factoryName The factory name.
		 *     Min length: 3    Max length: 63
		 * @param {string} triggerName The trigger name.
		 *     Min length: 1    Max length: 260
		 * @param {string} rerunTriggerName The rerun trigger name.
		 *     Min length: 1    Max length: 260
		 * @param {string} api_version The API version.
		 * @return {void} Trigger has been started successfully.
		 */
		RerunTriggers_Start(subscriptionId: string, resourceGroupName: string, factoryName: string, triggerName: string, rerunTriggerName: string, api_version: string): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DataFactory/factories/' + (factoryName == null ? '' : encodeURIComponent(factoryName)) + '/triggers/' + (triggerName == null ? '' : encodeURIComponent(triggerName)) + '/rerunTriggers/' + (rerunTriggerName == null ? '' : encodeURIComponent(rerunTriggerName)) + '/start&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Stops a trigger.
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataFactory/factories/{factoryName}/triggers/{triggerName}/rerunTriggers/{rerunTriggerName}/stop
		 * @param {string} subscriptionId The subscription identifier.
		 * @param {string} resourceGroupName The resource group name.
		 *     Min length: 1    Max length: 90
		 * @param {string} factoryName The factory name.
		 *     Min length: 3    Max length: 63
		 * @param {string} triggerName The trigger name.
		 *     Min length: 1    Max length: 260
		 * @param {string} rerunTriggerName The rerun trigger name.
		 *     Min length: 1    Max length: 260
		 * @param {string} api_version The API version.
		 * @return {void} Trigger has been stopped successfully.
		 */
		RerunTriggers_Stop(subscriptionId: string, resourceGroupName: string, factoryName: string, triggerName: string, rerunTriggerName: string, api_version: string): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DataFactory/factories/' + (factoryName == null ? '' : encodeURIComponent(factoryName)) + '/triggers/' + (triggerName == null ? '' : encodeURIComponent(triggerName)) + '/rerunTriggers/' + (rerunTriggerName == null ? '' : encodeURIComponent(rerunTriggerName)) + '/stop&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Starts a trigger.
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataFactory/factories/{factoryName}/triggers/{triggerName}/start
		 * @param {string} subscriptionId The subscription identifier.
		 * @param {string} resourceGroupName The resource group name.
		 *     Min length: 1    Max length: 90
		 * @param {string} factoryName The factory name.
		 *     Min length: 3    Max length: 63
		 * @param {string} triggerName The trigger name.
		 *     Min length: 1    Max length: 260
		 * @param {string} api_version The API version.
		 * @return {void} Trigger has been started successfully.
		 */
		Triggers_Start(subscriptionId: string, resourceGroupName: string, factoryName: string, triggerName: string, api_version: string): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DataFactory/factories/' + (factoryName == null ? '' : encodeURIComponent(factoryName)) + '/triggers/' + (triggerName == null ? '' : encodeURIComponent(triggerName)) + '/start&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Stops a trigger.
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataFactory/factories/{factoryName}/triggers/{triggerName}/stop
		 * @param {string} subscriptionId The subscription identifier.
		 * @param {string} resourceGroupName The resource group name.
		 *     Min length: 1    Max length: 90
		 * @param {string} factoryName The factory name.
		 *     Min length: 3    Max length: 63
		 * @param {string} triggerName The trigger name.
		 *     Min length: 1    Max length: 260
		 * @param {string} api_version The API version.
		 * @return {void} Trigger has been stopped successfully.
		 */
		Triggers_Stop(subscriptionId: string, resourceGroupName: string, factoryName: string, triggerName: string, api_version: string): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DataFactory/factories/' + (factoryName == null ? '' : encodeURIComponent(factoryName)) + '/triggers/' + (triggerName == null ? '' : encodeURIComponent(triggerName)) + '/stop&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Subscribe event trigger to events.
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataFactory/factories/{factoryName}/triggers/{triggerName}/subscribeToEvents
		 * @param {string} subscriptionId The subscription identifier.
		 * @param {string} resourceGroupName The resource group name.
		 *     Min length: 1    Max length: 90
		 * @param {string} factoryName The factory name.
		 *     Min length: 3    Max length: 63
		 * @param {string} triggerName The trigger name.
		 *     Min length: 1    Max length: 260
		 * @param {string} api_version The API version.
		 * @return {TriggerSubscriptionOperationStatus} Trigger is subscribed to events.
		 */
		Triggers_SubscribeToEvents(subscriptionId: string, resourceGroupName: string, factoryName: string, triggerName: string, api_version: string): Observable<TriggerSubscriptionOperationStatus> {
			return this.http.post<TriggerSubscriptionOperationStatus>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DataFactory/factories/' + (factoryName == null ? '' : encodeURIComponent(factoryName)) + '/triggers/' + (triggerName == null ? '' : encodeURIComponent(triggerName)) + '/subscribeToEvents&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), null, {});
		}

		/**
		 * Rerun single trigger instance by runId.
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataFactory/factories/{factoryName}/triggers/{triggerName}/triggerRuns/{runId}/rerun
		 * @param {string} subscriptionId The subscription identifier.
		 * @param {string} resourceGroupName The resource group name.
		 *     Min length: 1    Max length: 90
		 * @param {string} factoryName The factory name.
		 *     Min length: 3    Max length: 63
		 * @param {string} triggerName The trigger name.
		 *     Min length: 1    Max length: 260
		 * @param {string} runId The pipeline run identifier.
		 * @param {string} api_version The API version.
		 * @return {void} TriggerRun has been restarted.
		 */
		TriggerRuns_Rerun(subscriptionId: string, resourceGroupName: string, factoryName: string, triggerName: string, runId: string, api_version: string): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DataFactory/factories/' + (factoryName == null ? '' : encodeURIComponent(factoryName)) + '/triggers/' + (triggerName == null ? '' : encodeURIComponent(triggerName)) + '/triggerRuns/' + (runId == null ? '' : encodeURIComponent(runId)) + '/rerun&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Unsubscribe event trigger from events.
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataFactory/factories/{factoryName}/triggers/{triggerName}/unsubscribeFromEvents
		 * @param {string} subscriptionId The subscription identifier.
		 * @param {string} resourceGroupName The resource group name.
		 *     Min length: 1    Max length: 90
		 * @param {string} factoryName The factory name.
		 *     Min length: 3    Max length: 63
		 * @param {string} triggerName The trigger name.
		 *     Min length: 1    Max length: 260
		 * @param {string} api_version The API version.
		 * @return {TriggerSubscriptionOperationStatus} Trigger is unsubscribed from events.
		 */
		Triggers_UnsubscribeFromEvents(subscriptionId: string, resourceGroupName: string, factoryName: string, triggerName: string, api_version: string): Observable<TriggerSubscriptionOperationStatus> {
			return this.http.post<TriggerSubscriptionOperationStatus>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DataFactory/factories/' + (factoryName == null ? '' : encodeURIComponent(factoryName)) + '/triggers/' + (triggerName == null ? '' : encodeURIComponent(triggerName)) + '/unsubscribeFromEvents&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), null, {});
		}
	}

	export interface IntegrationRuntimes_GetConnectionInfoReturn {

		/** The on-premises integration runtime host URL. */
		hostServiceUri?: string | null;

		/** The integration runtime SSL certificate thumbprint. Click-Once application uses it to do server validation. */
		identityCertThumbprint?: string | null;

		/** Whether the identity certificate is expired. */
		isIdentityCertExprired?: boolean | null;

		/** The public key for encrypting a credential when transferring the credential to the integration runtime. */
		publicKey?: string | null;

		/** The token generated in service. Callers use this token to authenticate to integration runtime. */
		serviceToken?: string | null;

		/** The integration runtime version. */
		version?: string | null;
	}
	export interface IntegrationRuntimes_GetConnectionInfoReturnFormProperties {

		/** The on-premises integration runtime host URL. */
		hostServiceUri: FormControl<string | null | undefined>,

		/** The integration runtime SSL certificate thumbprint. Click-Once application uses it to do server validation. */
		identityCertThumbprint: FormControl<string | null | undefined>,

		/** Whether the identity certificate is expired. */
		isIdentityCertExprired: FormControl<boolean | null | undefined>,

		/** The public key for encrypting a credential when transferring the credential to the integration runtime. */
		publicKey: FormControl<string | null | undefined>,

		/** The token generated in service. Callers use this token to authenticate to integration runtime. */
		serviceToken: FormControl<string | null | undefined>,

		/** The integration runtime version. */
		version: FormControl<string | null | undefined>,
	}
	export function CreateIntegrationRuntimes_GetConnectionInfoReturnFormGroup() {
		return new FormGroup<IntegrationRuntimes_GetConnectionInfoReturnFormProperties>({
			hostServiceUri: new FormControl<string | null | undefined>(undefined),
			identityCertThumbprint: new FormControl<string | null | undefined>(undefined),
			isIdentityCertExprired: new FormControl<boolean | null | undefined>(undefined),
			publicKey: new FormControl<string | null | undefined>(undefined),
			serviceToken: new FormControl<string | null | undefined>(undefined),
			version: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface IntegrationRuntimeObjectMetadata_GetReturn {

		/** The link to the next page of results, if any remaining results exist. */
		nextLink?: string | null;

		/** List of SSIS object metadata. */
		IntegrationRuntimeObjectMetadata_GetReturnValue?: Array<IntegrationRuntimeObjectMetadata_GetReturnValue>;
	}
	export interface IntegrationRuntimeObjectMetadata_GetReturnFormProperties {

		/** The link to the next page of results, if any remaining results exist. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateIntegrationRuntimeObjectMetadata_GetReturnFormGroup() {
		return new FormGroup<IntegrationRuntimeObjectMetadata_GetReturnFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface IntegrationRuntimeObjectMetadata_GetReturnValue {

		/** Metadata description. */
		description?: string | null;

		/**
		 * Metadata id.
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		id?: string | null;

		/** Metadata name. */
		name?: string | null;

		/**
		 * The type of SSIS object metadata.
		 * Required
		 */
		type: IntegrationRuntimeObjectMetadata_GetReturnValueType;
	}
	export interface IntegrationRuntimeObjectMetadata_GetReturnValueFormProperties {

		/** Metadata description. */
		description: FormControl<string | null | undefined>,

		/**
		 * Metadata id.
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		id: FormControl<string | null | undefined>,

		/** Metadata name. */
		name: FormControl<string | null | undefined>,

		/**
		 * The type of SSIS object metadata.
		 * Required
		 */
		type: FormControl<IntegrationRuntimeObjectMetadata_GetReturnValueType | null | undefined>,
	}
	export function CreateIntegrationRuntimeObjectMetadata_GetReturnValueFormGroup() {
		return new FormGroup<IntegrationRuntimeObjectMetadata_GetReturnValueFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<IntegrationRuntimeObjectMetadata_GetReturnValueType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum IntegrationRuntimeObjectMetadata_GetReturnValueType { Folder = 'Folder', Project = 'Project', Package = 'Package', Environment = 'Environment' }

	export interface IntegrationRuntimes_ListAuthKeysReturn {

		/** The primary integration runtime authentication key. */
		authKey1?: string | null;

		/** The secondary integration runtime authentication key. */
		authKey2?: string | null;
	}
	export interface IntegrationRuntimes_ListAuthKeysReturnFormProperties {

		/** The primary integration runtime authentication key. */
		authKey1: FormControl<string | null | undefined>,

		/** The secondary integration runtime authentication key. */
		authKey2: FormControl<string | null | undefined>,
	}
	export function CreateIntegrationRuntimes_ListAuthKeysReturnFormGroup() {
		return new FormGroup<IntegrationRuntimes_ListAuthKeysReturnFormProperties>({
			authKey1: new FormControl<string | null | undefined>(undefined),
			authKey2: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface IntegrationRuntimes_GetMonitoringDataReturn {

		/** Integration runtime name. */
		name?: string | null;

		/** Integration runtime node monitoring data. */
		IntegrationRuntimes_GetMonitoringDataReturnNodes?: Array<IntegrationRuntimes_GetMonitoringDataReturnNodes>;
	}
	export interface IntegrationRuntimes_GetMonitoringDataReturnFormProperties {

		/** Integration runtime name. */
		name: FormControl<string | null | undefined>,
	}
	export function CreateIntegrationRuntimes_GetMonitoringDataReturnFormGroup() {
		return new FormGroup<IntegrationRuntimes_GetMonitoringDataReturnFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface IntegrationRuntimes_GetMonitoringDataReturnNodes {

		/**
		 * Available memory (MB) on the integration runtime node.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		availableMemoryInMB?: number | null;

		/**
		 * Maximum concurrent jobs on the integration runtime node.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		concurrentJobsLimit?: number | null;

		/**
		 * The number of jobs currently running on the integration runtime node.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		concurrentJobsRunning?: number | null;

		/**
		 * CPU percentage on the integration runtime node.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		cpuUtilization?: number | null;

		/**
		 * The maximum concurrent jobs in this integration runtime.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		maxConcurrentJobs?: number | null;

		/** Name of the integration runtime node. */
		nodeName?: string | null;

		/**
		 * Received bytes on the integration runtime node.
		 * Type: double
		 */
		receivedBytes?: number | null;

		/**
		 * Sent bytes on the integration runtime node.
		 * Type: double
		 */
		sentBytes?: number | null;
	}
	export interface IntegrationRuntimes_GetMonitoringDataReturnNodesFormProperties {

		/**
		 * Available memory (MB) on the integration runtime node.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		availableMemoryInMB: FormControl<number | null | undefined>,

		/**
		 * Maximum concurrent jobs on the integration runtime node.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		concurrentJobsLimit: FormControl<number | null | undefined>,

		/**
		 * The number of jobs currently running on the integration runtime node.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		concurrentJobsRunning: FormControl<number | null | undefined>,

		/**
		 * CPU percentage on the integration runtime node.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		cpuUtilization: FormControl<number | null | undefined>,

		/**
		 * The maximum concurrent jobs in this integration runtime.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		maxConcurrentJobs: FormControl<number | null | undefined>,

		/** Name of the integration runtime node. */
		nodeName: FormControl<string | null | undefined>,

		/**
		 * Received bytes on the integration runtime node.
		 * Type: double
		 */
		receivedBytes: FormControl<number | null | undefined>,

		/**
		 * Sent bytes on the integration runtime node.
		 * Type: double
		 */
		sentBytes: FormControl<number | null | undefined>,
	}
	export function CreateIntegrationRuntimes_GetMonitoringDataReturnNodesFormGroup() {
		return new FormGroup<IntegrationRuntimes_GetMonitoringDataReturnNodesFormProperties>({
			availableMemoryInMB: new FormControl<number | null | undefined>(undefined),
			concurrentJobsLimit: new FormControl<number | null | undefined>(undefined),
			concurrentJobsRunning: new FormControl<number | null | undefined>(undefined),
			cpuUtilization: new FormControl<number | null | undefined>(undefined),
			maxConcurrentJobs: new FormControl<number | null | undefined>(undefined),
			nodeName: new FormControl<string | null | undefined>(undefined),
			receivedBytes: new FormControl<number | null | undefined>(undefined),
			sentBytes: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface IntegrationRuntimeNodes_GetIpAddressReturn {

		/** The IP address of self-hosted integration runtime node. */
		ipAddress?: string | null;
	}
	export interface IntegrationRuntimeNodes_GetIpAddressReturnFormProperties {

		/** The IP address of self-hosted integration runtime node. */
		ipAddress: FormControl<string | null | undefined>,
	}
	export function CreateIntegrationRuntimeNodes_GetIpAddressReturnFormGroup() {
		return new FormGroup<IntegrationRuntimeNodes_GetIpAddressReturnFormProperties>({
			ipAddress: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface IntegrationRuntimes_RegenerateAuthKeyPostBody {

		/** The name of the authentication key to regenerate. */
		keyName?: IntegrationRuntimes_RegenerateAuthKeyPostBodyKeyName | null;
	}
	export interface IntegrationRuntimes_RegenerateAuthKeyPostBodyFormProperties {

		/** The name of the authentication key to regenerate. */
		keyName: FormControl<IntegrationRuntimes_RegenerateAuthKeyPostBodyKeyName | null | undefined>,
	}
	export function CreateIntegrationRuntimes_RegenerateAuthKeyPostBodyFormGroup() {
		return new FormGroup<IntegrationRuntimes_RegenerateAuthKeyPostBodyFormProperties>({
			keyName: new FormControl<IntegrationRuntimes_RegenerateAuthKeyPostBodyKeyName | null | undefined>(undefined),
		});

	}

	export enum IntegrationRuntimes_RegenerateAuthKeyPostBodyKeyName { authKey1 = 'authKey1', authKey2 = 'authKey2' }

	export interface IntegrationRuntimes_RegenerateAuthKeyReturn {

		/** The primary integration runtime authentication key. */
		authKey1?: string | null;

		/** The secondary integration runtime authentication key. */
		authKey2?: string | null;
	}
	export interface IntegrationRuntimes_RegenerateAuthKeyReturnFormProperties {

		/** The primary integration runtime authentication key. */
		authKey1: FormControl<string | null | undefined>,

		/** The secondary integration runtime authentication key. */
		authKey2: FormControl<string | null | undefined>,
	}
	export function CreateIntegrationRuntimes_RegenerateAuthKeyReturnFormGroup() {
		return new FormGroup<IntegrationRuntimes_RegenerateAuthKeyReturnFormProperties>({
			authKey1: new FormControl<string | null | undefined>(undefined),
			authKey2: new FormControl<string | null | undefined>(undefined),
		});

	}

}

