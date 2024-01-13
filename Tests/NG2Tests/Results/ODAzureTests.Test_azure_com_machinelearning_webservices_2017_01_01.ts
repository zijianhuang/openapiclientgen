import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** Information about an asset associated with the web service. */
	export interface AssetItem {

		/** Asset's Id. */
		id?: string | null;

		/** Information about the asset's input ports. */
		inputPorts?: {[id: string]: InputPort };

		/**
		 * Describes the access location for a blob.
		 * Required
		 */
		locationInfo: BlobLocation;

		/** If the asset is a custom module, this holds the module's metadata. */
		metadata?: {[id: string]: string };

		/**
		 * Asset's friendly name.
		 * Required
		 */
		name: string;

		/** Information about the asset's output ports. */
		outputPorts?: {[id: string]: OutputPort };

		/** If the asset is a custom module, this holds the module's parameters. */
		parameters?: Array<ModuleAssetParameter>;

		/**
		 * Asset's type.
		 * Required
		 */
		type: AssetItemType;
	}

	/** Information about an asset associated with the web service. */
	export interface AssetItemFormProperties {

		/** Asset's Id. */
		id: FormControl<string | null | undefined>,

		/** Information about the asset's input ports. */
		inputPorts: FormControl<{[id: string]: InputPort } | null | undefined>,

		/** If the asset is a custom module, this holds the module's metadata. */
		metadata: FormControl<{[id: string]: string } | null | undefined>,

		/**
		 * Asset's friendly name.
		 * Required
		 */
		name: FormControl<string | null | undefined>,

		/** Information about the asset's output ports. */
		outputPorts: FormControl<{[id: string]: OutputPort } | null | undefined>,

		/**
		 * Asset's type.
		 * Required
		 */
		type: FormControl<AssetItemType | null | undefined>,
	}
	export function CreateAssetItemFormGroup() {
		return new FormGroup<AssetItemFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			inputPorts: new FormControl<{[id: string]: InputPort } | null | undefined>(undefined),
			metadata: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			outputPorts: new FormControl<{[id: string]: OutputPort } | null | undefined>(undefined),
			type: new FormControl<AssetItemType | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Asset input port */
	export interface InputPort {

		/** Port data type. */
		type?: InputPortType | null;
	}

	/** Asset input port */
	export interface InputPortFormProperties {

		/** Port data type. */
		type: FormControl<InputPortType | null | undefined>,
	}
	export function CreateInputPortFormGroup() {
		return new FormGroup<InputPortFormProperties>({
			type: new FormControl<InputPortType | null | undefined>(undefined),
		});

	}

	export enum InputPortType { Dataset = 0 }


	/** Describes the access location for a blob. */
	export interface BlobLocation {

		/** Access credentials for the blob, if applicable (e.g. blob specified by storage account connection string + blob URI) */
		credentials?: string | null;

		/**
		 * The URI from which the blob is accessible from. For example, aml://abc for system assets or https://xyz for user assets or payload.
		 * Required
		 */
		uri: string;
	}

	/** Describes the access location for a blob. */
	export interface BlobLocationFormProperties {

		/** Access credentials for the blob, if applicable (e.g. blob specified by storage account connection string + blob URI) */
		credentials: FormControl<string | null | undefined>,

		/**
		 * The URI from which the blob is accessible from. For example, aml://abc for system assets or https://xyz for user assets or payload.
		 * Required
		 */
		uri: FormControl<string | null | undefined>,
	}
	export function CreateBlobLocationFormGroup() {
		return new FormGroup<BlobLocationFormProperties>({
			credentials: new FormControl<string | null | undefined>(undefined),
			uri: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Asset output port */
	export interface OutputPort {

		/** Port data type. */
		type?: InputPortType | null;
	}

	/** Asset output port */
	export interface OutputPortFormProperties {

		/** Port data type. */
		type: FormControl<InputPortType | null | undefined>,
	}
	export function CreateOutputPortFormGroup() {
		return new FormGroup<OutputPortFormProperties>({
			type: new FormControl<InputPortType | null | undefined>(undefined),
		});

	}


	/** Parameter definition for a module asset. */
	export interface ModuleAssetParameter {

		/** Definitions for nested interface parameters if this is a complex module parameter. */
		modeValuesInfo?: {[id: string]: ModeValueInfo };

		/** Parameter name. */
		name?: string | null;

		/** Parameter type. */
		parameterType?: string | null;
	}

	/** Parameter definition for a module asset. */
	export interface ModuleAssetParameterFormProperties {

		/** Definitions for nested interface parameters if this is a complex module parameter. */
		modeValuesInfo: FormControl<{[id: string]: ModeValueInfo } | null | undefined>,

		/** Parameter name. */
		name: FormControl<string | null | undefined>,

		/** Parameter type. */
		parameterType: FormControl<string | null | undefined>,
	}
	export function CreateModuleAssetParameterFormGroup() {
		return new FormGroup<ModuleAssetParameterFormProperties>({
			modeValuesInfo: new FormControl<{[id: string]: ModeValueInfo } | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			parameterType: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Nested parameter definition. */
	export interface ModeValueInfo {

		/** The interface string name for the nested parameter. */
		interfaceString?: string | null;

		/** The definition of the parameter. */
		parameters?: Array<ModuleAssetParameter>;
	}

	/** Nested parameter definition. */
	export interface ModeValueInfoFormProperties {

		/** The interface string name for the nested parameter. */
		interfaceString: FormControl<string | null | undefined>,
	}
	export function CreateModeValueInfoFormGroup() {
		return new FormGroup<ModeValueInfoFormProperties>({
			interfaceString: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum AssetItemType { Module = 0, Resource = 1 }


	/** The error detail information for async operation */
	export interface AsyncOperationErrorInfo {

		/** The error code. */
		code?: string | null;

		/** An array containing error information. */
		details?: Array<AsyncOperationErrorInfo>;

		/** The error message. */
		message?: string | null;

		/** The error target. */
		target?: string | null;
	}

	/** The error detail information for async operation */
	export interface AsyncOperationErrorInfoFormProperties {

		/** The error code. */
		code: FormControl<string | null | undefined>,

		/** The error message. */
		message: FormControl<string | null | undefined>,

		/** The error target. */
		target: FormControl<string | null | undefined>,
	}
	export function CreateAsyncOperationErrorInfoFormGroup() {
		return new FormGroup<AsyncOperationErrorInfoFormProperties>({
			code: new FormControl<string | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
			target: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Azure async operation status. */
	export interface AsyncOperationStatus {

		/** The date time that the async operation finished. */
		endTime?: Date | null;

		/** The error detail information for async operation */
		errorInfo?: AsyncOperationErrorInfo;

		/** Async operation id. */
		id?: string | null;

		/** Async operation name. */
		name?: string | null;

		/** Async operation progress. */
		percentComplete?: number | null;

		/** Read Only: The provisioning state of the web service. Valid values are Unknown, Provisioning, Succeeded, and Failed. */
		provisioningState?: AsyncOperationStatusProvisioningState | null;

		/** The date time that the async operation started. */
		startTime?: Date | null;
	}

	/** Azure async operation status. */
	export interface AsyncOperationStatusFormProperties {

		/** The date time that the async operation finished. */
		endTime: FormControl<Date | null | undefined>,

		/** Async operation id. */
		id: FormControl<string | null | undefined>,

		/** Async operation name. */
		name: FormControl<string | null | undefined>,

		/** Async operation progress. */
		percentComplete: FormControl<number | null | undefined>,

		/** Read Only: The provisioning state of the web service. Valid values are Unknown, Provisioning, Succeeded, and Failed. */
		provisioningState: FormControl<AsyncOperationStatusProvisioningState | null | undefined>,

		/** The date time that the async operation started. */
		startTime: FormControl<Date | null | undefined>,
	}
	export function CreateAsyncOperationStatusFormGroup() {
		return new FormGroup<AsyncOperationStatusFormProperties>({
			endTime: new FormControl<Date | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			percentComplete: new FormControl<number | null | undefined>(undefined),
			provisioningState: new FormControl<AsyncOperationStatusProvisioningState | null | undefined>(undefined),
			startTime: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export enum AsyncOperationStatusProvisioningState { Unknown = 0, Provisioning = 1, Succeeded = 2, Failed = 3 }


	/** Swagger 2.0 schema for a column within the data table representing a web service input or output. See Swagger specification: http://swagger.io/specification/ */
	export interface ColumnSpecification {

		/** If the data type is categorical, this provides the list of accepted categories. */
		enum?: Array<string>;

		/** Additional format information for the data type. */
		format?: ColumnSpecificationFormat | null;

		/**
		 * Data type of the column.
		 * Required
		 */
		type: ColumnSpecificationType;

		/** Flag indicating if the type supports null values or not. */
		'x-ms-isnullable'?: boolean | null;

		/** Flag indicating whether the categories are treated as an ordered set or not, if this is a categorical column. */
		'x-ms-isordered'?: boolean | null;
	}

	/** Swagger 2.0 schema for a column within the data table representing a web service input or output. See Swagger specification: http://swagger.io/specification/ */
	export interface ColumnSpecificationFormProperties {

		/** Additional format information for the data type. */
		format: FormControl<ColumnSpecificationFormat | null | undefined>,

		/**
		 * Data type of the column.
		 * Required
		 */
		type: FormControl<ColumnSpecificationType | null | undefined>,

		/** Flag indicating if the type supports null values or not. */
		'x-ms-isnullable': FormControl<boolean | null | undefined>,

		/** Flag indicating whether the categories are treated as an ordered set or not, if this is a categorical column. */
		'x-ms-isordered': FormControl<boolean | null | undefined>,
	}
	export function CreateColumnSpecificationFormGroup() {
		return new FormGroup<ColumnSpecificationFormProperties>({
			format: new FormControl<ColumnSpecificationFormat | null | undefined>(undefined),
			type: new FormControl<ColumnSpecificationType | null | undefined>(undefined, [Validators.required]),
			'x-ms-isnullable': new FormControl<boolean | null | undefined>(undefined),
			'x-ms-isordered': new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export enum ColumnSpecificationFormat { Byte = 0, Char = 1, Complex64 = 2, Complex128 = 3, 'Date-time' = 4, 'Date-timeOffset' = 5, Double = 6, Duration = 7, Float = 8, Int8 = 9, Int16 = 10, Int32 = 11, Int64 = 12, Uint8 = 13, Uint16 = 14, Uint32 = 15, Uint64 = 16 }

	export enum ColumnSpecificationType { Boolean = 0, Integer = 1, Number = 2, String = 3 }


	/** Information about the machine learning commitment plan associated with the web service. */
	export interface CommitmentPlan {

		/**
		 * Specifies the Azure Resource Manager ID of the commitment plan associated with the web service.
		 * Required
		 */
		id: string;
	}

	/** Information about the machine learning commitment plan associated with the web service. */
	export interface CommitmentPlanFormProperties {

		/**
		 * Specifies the Azure Resource Manager ID of the commitment plan associated with the web service.
		 * Required
		 */
		id: FormControl<string | null | undefined>,
	}
	export function CreateCommitmentPlanFormGroup() {
		return new FormGroup<CommitmentPlanFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Diagnostics settings for an Azure ML web service. */
	export interface DiagnosticsConfiguration {

		/** Specifies the date and time when the logging will cease. If null, diagnostic collection is not time limited. */
		expiry?: Date | null;

		/**
		 * Specifies the verbosity of the diagnostic output. Valid values are: None - disables tracing; Error - collects only error (stderr) traces; All - collects all traces (stdout and stderr).
		 * Required
		 */
		level: DiagnosticsConfigurationLevel;
	}

	/** Diagnostics settings for an Azure ML web service. */
	export interface DiagnosticsConfigurationFormProperties {

		/** Specifies the date and time when the logging will cease. If null, diagnostic collection is not time limited. */
		expiry: FormControl<Date | null | undefined>,

		/**
		 * Specifies the verbosity of the diagnostic output. Valid values are: None - disables tracing; Error - collects only error (stderr) traces; All - collects all traces (stdout and stderr).
		 * Required
		 */
		level: FormControl<DiagnosticsConfigurationLevel | null | undefined>,
	}
	export function CreateDiagnosticsConfigurationFormGroup() {
		return new FormGroup<DiagnosticsConfigurationFormProperties>({
			expiry: new FormControl<Date | null | undefined>(undefined),
			level: new FormControl<DiagnosticsConfigurationLevel | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum DiagnosticsConfigurationLevel { None = 0, Error = 1, All = 2 }


	/** Sample input data for the service's input(s). */
	export interface ExampleRequest {

		/** Sample input data for the web service's global parameters */
		globalParameters?: {[id: string]: any };

		/** Sample input data for the web service's input(s) given as an input name to sample input values matrix map. */
		inputs?: {[id: string]: Array<string> };
	}

	/** Sample input data for the service's input(s). */
	export interface ExampleRequestFormProperties {

		/** Sample input data for the web service's global parameters */
		globalParameters: FormControl<{[id: string]: any } | null | undefined>,

		/** Sample input data for the web service's input(s) given as an input name to sample input values matrix map. */
		inputs: FormControl<{[id: string]: Array<string> } | null | undefined>,
	}
	export function CreateExampleRequestFormGroup() {
		return new FormGroup<ExampleRequestFormProperties>({
			globalParameters: new FormControl<{[id: string]: any } | null | undefined>(undefined),
			inputs: new FormControl<{[id: string]: Array<string> } | null | undefined>(undefined),
		});

	}


	/** Defines an edge within the web service's graph. */
	export interface GraphEdge {

		/** The source graph node's identifier. */
		sourceNodeId?: string | null;

		/** The identifier of the source node's port that the edge connects from. */
		sourcePortId?: string | null;

		/** The destination graph node's identifier. */
		targetNodeId?: string | null;

		/** The identifier of the destination node's port that the edge connects into. */
		targetPortId?: string | null;
	}

	/** Defines an edge within the web service's graph. */
	export interface GraphEdgeFormProperties {

		/** The source graph node's identifier. */
		sourceNodeId: FormControl<string | null | undefined>,

		/** The identifier of the source node's port that the edge connects from. */
		sourcePortId: FormControl<string | null | undefined>,

		/** The destination graph node's identifier. */
		targetNodeId: FormControl<string | null | undefined>,

		/** The identifier of the destination node's port that the edge connects into. */
		targetPortId: FormControl<string | null | undefined>,
	}
	export function CreateGraphEdgeFormGroup() {
		return new FormGroup<GraphEdgeFormProperties>({
			sourceNodeId: new FormControl<string | null | undefined>(undefined),
			sourcePortId: new FormControl<string | null | undefined>(undefined),
			targetNodeId: new FormControl<string | null | undefined>(undefined),
			targetPortId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Specifies a node in the web service graph. The node can either be an input, output or asset node, so only one of the corresponding id properties is populated at any given time. */
	export interface GraphNode {

		/** The id of the asset represented by this node. */
		assetId?: string | null;

		/** The id of the input element represented by this node. */
		inputId?: string | null;

		/** The id of the output element represented by this node. */
		outputId?: string | null;

		/** If applicable, parameters of the node. Global graph parameters map into these, with values set at runtime. */
		parameters?: {[id: string]: WebServiceParameter };
	}

	/** Specifies a node in the web service graph. The node can either be an input, output or asset node, so only one of the corresponding id properties is populated at any given time. */
	export interface GraphNodeFormProperties {

		/** The id of the asset represented by this node. */
		assetId: FormControl<string | null | undefined>,

		/** The id of the input element represented by this node. */
		inputId: FormControl<string | null | undefined>,

		/** The id of the output element represented by this node. */
		outputId: FormControl<string | null | undefined>,

		/** If applicable, parameters of the node. Global graph parameters map into these, with values set at runtime. */
		parameters: FormControl<{[id: string]: WebServiceParameter } | null | undefined>,
	}
	export function CreateGraphNodeFormGroup() {
		return new FormGroup<GraphNodeFormProperties>({
			assetId: new FormControl<string | null | undefined>(undefined),
			inputId: new FormControl<string | null | undefined>(undefined),
			outputId: new FormControl<string | null | undefined>(undefined),
			parameters: new FormControl<{[id: string]: WebServiceParameter } | null | undefined>(undefined),
		});

	}


	/** Web Service Parameter object for node and global parameter */
	export interface WebServiceParameter {

		/** If the parameter value in 'value' field is encrypted, the thumbprint of the certificate should be put here. */
		certificateThumbprint?: string | null;

		/** The parameter value */
		value?: string | null;
	}

	/** Web Service Parameter object for node and global parameter */
	export interface WebServiceParameterFormProperties {

		/** If the parameter value in 'value' field is encrypted, the thumbprint of the certificate should be put here. */
		certificateThumbprint: FormControl<string | null | undefined>,

		/** The parameter value */
		value: FormControl<string | null | undefined>,
	}
	export function CreateWebServiceParameterFormGroup() {
		return new FormGroup<WebServiceParameterFormProperties>({
			certificateThumbprint: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Defines the graph of modules making up the machine learning solution. */
	export interface GraphPackage {

		/** The list of edges making up the graph. */
		edges?: Array<GraphEdge>;

		/** The collection of global parameters for the graph, given as a global parameter name to GraphParameter map. Each parameter here has a 1:1 match with the global parameters values map declared at the WebServiceProperties level. */
		graphParameters?: {[id: string]: GraphParameter };

		/** The set of nodes making up the graph, provided as a nodeId to GraphNode map */
		nodes?: {[id: string]: GraphNode };
	}

	/** Defines the graph of modules making up the machine learning solution. */
	export interface GraphPackageFormProperties {

		/** The collection of global parameters for the graph, given as a global parameter name to GraphParameter map. Each parameter here has a 1:1 match with the global parameters values map declared at the WebServiceProperties level. */
		graphParameters: FormControl<{[id: string]: GraphParameter } | null | undefined>,

		/** The set of nodes making up the graph, provided as a nodeId to GraphNode map */
		nodes: FormControl<{[id: string]: GraphNode } | null | undefined>,
	}
	export function CreateGraphPackageFormGroup() {
		return new FormGroup<GraphPackageFormProperties>({
			graphParameters: new FormControl<{[id: string]: GraphParameter } | null | undefined>(undefined),
			nodes: new FormControl<{[id: string]: GraphNode } | null | undefined>(undefined),
		});

	}


	/** Defines a global parameter in the graph. */
	export interface GraphParameter {

		/** Description of this graph parameter. */
		description?: string | null;

		/**
		 * Association links for this parameter to nodes in the graph.
		 * Required
		 */
		links: Array<GraphParameterLink>;

		/**
		 * Graph parameter's type.
		 * Required
		 */
		type: GraphParameterType;
	}

	/** Defines a global parameter in the graph. */
	export interface GraphParameterFormProperties {

		/** Description of this graph parameter. */
		description: FormControl<string | null | undefined>,

		/**
		 * Graph parameter's type.
		 * Required
		 */
		type: FormControl<GraphParameterType | null | undefined>,
	}
	export function CreateGraphParameterFormGroup() {
		return new FormGroup<GraphParameterFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<GraphParameterType | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Association link for a graph global parameter to a node in the graph. */
	export interface GraphParameterLink {

		/**
		 * The graph node's identifier
		 * Required
		 */
		nodeId: string;

		/**
		 * The identifier of the node parameter that the global parameter maps to.
		 * Required
		 */
		parameterKey: string;
	}

	/** Association link for a graph global parameter to a node in the graph. */
	export interface GraphParameterLinkFormProperties {

		/**
		 * The graph node's identifier
		 * Required
		 */
		nodeId: FormControl<string | null | undefined>,

		/**
		 * The identifier of the node parameter that the global parameter maps to.
		 * Required
		 */
		parameterKey: FormControl<string | null | undefined>,
	}
	export function CreateGraphParameterLinkFormGroup() {
		return new FormGroup<GraphParameterLinkFormProperties>({
			nodeId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			parameterKey: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum GraphParameterType { String = 0, Int = 1, Float = 2, Enumerated = 3, Script = 4, Mode = 5, Credential = 6, Boolean = 7, Double = 8, ColumnPicker = 9, ParameterRange = 10, DataGatewayName = 11 }


	/** Information about the machine learning workspace containing the experiment that is source for the web service. */
	export interface MachineLearningWorkspace {

		/**
		 * Specifies the workspace ID of the machine learning workspace associated with the web service
		 * Required
		 */
		id: string;
	}

	/** Information about the machine learning workspace containing the experiment that is source for the web service. */
	export interface MachineLearningWorkspaceFormProperties {

		/**
		 * Specifies the workspace ID of the machine learning workspace associated with the web service
		 * Required
		 */
		id: FormControl<string | null | undefined>,
	}
	export function CreateMachineLearningWorkspaceFormGroup() {
		return new FormGroup<MachineLearningWorkspaceFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The API operation info. */
	export interface OperationDisplayInfo {

		/** The description of the operation. */
		description?: string | null;

		/** The action that users can perform, based on their permission level. */
		operation?: string | null;

		/** The service provider. */
		provider?: string | null;

		/** The resource on which the operation is performed. */
		resource?: string | null;
	}

	/** The API operation info. */
	export interface OperationDisplayInfoFormProperties {

		/** The description of the operation. */
		description: FormControl<string | null | undefined>,

		/** The action that users can perform, based on their permission level. */
		operation: FormControl<string | null | undefined>,

		/** The service provider. */
		provider: FormControl<string | null | undefined>,

		/** The resource on which the operation is performed. */
		resource: FormControl<string | null | undefined>,
	}
	export function CreateOperationDisplayInfoFormGroup() {
		return new FormGroup<OperationDisplayInfoFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			operation: new FormControl<string | null | undefined>(undefined),
			provider: new FormControl<string | null | undefined>(undefined),
			resource: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An API operation. */
	export interface OperationEntity {

		/** The API operation info. */
		display?: OperationDisplayInfo;

		/** Operation name: {provider}/{resource}/{operation}. */
		name?: string | null;
	}

	/** An API operation. */
	export interface OperationEntityFormProperties {

		/** Operation name: {provider}/{resource}/{operation}. */
		name: FormControl<string | null | undefined>,
	}
	export function CreateOperationEntityFormGroup() {
		return new FormGroup<OperationEntityFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The list of REST API operations. */
	export interface OperationEntityListResult {

		/** The list of operations. */
		value?: Array<OperationEntity>;
	}

	/** The list of REST API operations. */
	export interface OperationEntityListResultFormProperties {
	}
	export function CreateOperationEntityListResultFormGroup() {
		return new FormGroup<OperationEntityListResultFormProperties>({
		});

	}


	/** Paginated list of web services. */
	export interface PaginatedWebServicesList {

		/** A continuation link (absolute URI) to the next page of results in the list. */
		nextLink?: string | null;

		/** An array of web service objects. */
		value?: Array<WebService>;
	}

	/** Paginated list of web services. */
	export interface PaginatedWebServicesListFormProperties {

		/** A continuation link (absolute URI) to the next page of results in the list. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreatePaginatedWebServicesListFormGroup() {
		return new FormGroup<PaginatedWebServicesListFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Instance of an Azure ML web service resource. */
	export interface WebService {

		/**
		 * The set of properties specific to the Azure ML web service resource.
		 * Required
		 */
		properties: WebServiceProperties;
	}

	/** Instance of an Azure ML web service resource. */
	export interface WebServiceFormProperties {
	}
	export function CreateWebServiceFormGroup() {
		return new FormGroup<WebServiceFormProperties>({
		});

	}


	/** The set of properties specific to the Azure ML web service resource. */
	export interface WebServiceProperties {

		/** Contains user defined properties describing web service assets. Properties are expressed as Key/Value pairs. */
		assets?: {[id: string]: AssetItem };

		/** Information about the machine learning commitment plan associated with the web service. */
		commitmentPlan?: CommitmentPlan;

		/** Read Only: The date and time when the web service was created. */
		createdOn?: Date | null;

		/** The description of the web service. */
		description?: string | null;

		/** Diagnostics settings for an Azure ML web service. */
		diagnostics?: DiagnosticsConfiguration;

		/** Sample input data for the service's input(s). */
		exampleRequest?: ExampleRequest;

		/** When set to true, sample data is included in the web service's swagger definition. The default value is true. */
		exposeSampleData?: boolean | null;

		/** The swagger 2.0 schema describing the service's inputs or outputs. See Swagger specification: http://swagger.io/specification/ */
		input?: ServiceInputOutputSpecification;

		/** Access keys for the web service calls. */
		keys?: WebServiceKeys;

		/** Information about the machine learning workspace containing the experiment that is source for the web service. */
		machineLearningWorkspace?: MachineLearningWorkspace;

		/** Read Only: The date and time when the web service was last modified. */
		modifiedOn?: Date | null;

		/** The swagger 2.0 schema describing the service's inputs or outputs. See Swagger specification: http://swagger.io/specification/ */
		output?: ServiceInputOutputSpecification;

		/**
		 * Specifies the package type. Valid values are Graph (Specifies a web service published through the Machine Learning Studio) and Code (Specifies a web service published using code such as Python). Note: Code is not supported at this time.
		 * Required
		 */
		packageType: WebServicePropertiesPackageType;

		/** The set of global parameters values defined for the web service, given as a global parameter name to default value map. If no default value is specified, the parameter is considered to be required. */
		parameters?: {[id: string]: WebServiceParameter };

		/** When set to true, indicates that the payload size is larger than 3 MB. Otherwise false. If the payload size exceed 3 MB, the payload is stored in a blob and the PayloadsLocation parameter contains the URI of the blob. Otherwise, this will be set to false and Assets, Input, Output, Package, Parameters, ExampleRequest are inline. The Payload sizes is determined by adding the size of the Assets, Input, Output, Package, Parameters, and the ExampleRequest. */
		payloadsInBlobStorage?: boolean | null;

		/** Describes the access location for a blob. */
		payloadsLocation?: BlobLocation;

		/** Read Only: The provision state of the web service. Valid values are Unknown, Provisioning, Succeeded, and Failed. */
		provisioningState?: AsyncOperationStatusProvisioningState | null;

		/** When set to true, indicates that the web service is read-only and can no longer be updated or patched, only removed. Default, is false. Note: Once set to true, you cannot change its value. */
		readOnly?: boolean | null;

		/** Holds the available configuration options for an Azure ML web service endpoint. */
		realtimeConfiguration?: RealtimeConfiguration;

		/** Access information for a storage account. */
		storageAccount?: StorageAccount;

		/** Read Only: Contains the URI of the swagger spec associated with this web service. */
		swaggerLocation?: string | null;

		/** The title of the web service. */
		title?: string | null;
	}

	/** The set of properties specific to the Azure ML web service resource. */
	export interface WebServicePropertiesFormProperties {

		/** Contains user defined properties describing web service assets. Properties are expressed as Key/Value pairs. */
		assets: FormControl<{[id: string]: AssetItem } | null | undefined>,

		/** Read Only: The date and time when the web service was created. */
		createdOn: FormControl<Date | null | undefined>,

		/** The description of the web service. */
		description: FormControl<string | null | undefined>,

		/** When set to true, sample data is included in the web service's swagger definition. The default value is true. */
		exposeSampleData: FormControl<boolean | null | undefined>,

		/** Read Only: The date and time when the web service was last modified. */
		modifiedOn: FormControl<Date | null | undefined>,

		/**
		 * Specifies the package type. Valid values are Graph (Specifies a web service published through the Machine Learning Studio) and Code (Specifies a web service published using code such as Python). Note: Code is not supported at this time.
		 * Required
		 */
		packageType: FormControl<WebServicePropertiesPackageType | null | undefined>,

		/** The set of global parameters values defined for the web service, given as a global parameter name to default value map. If no default value is specified, the parameter is considered to be required. */
		parameters: FormControl<{[id: string]: WebServiceParameter } | null | undefined>,

		/** When set to true, indicates that the payload size is larger than 3 MB. Otherwise false. If the payload size exceed 3 MB, the payload is stored in a blob and the PayloadsLocation parameter contains the URI of the blob. Otherwise, this will be set to false and Assets, Input, Output, Package, Parameters, ExampleRequest are inline. The Payload sizes is determined by adding the size of the Assets, Input, Output, Package, Parameters, and the ExampleRequest. */
		payloadsInBlobStorage: FormControl<boolean | null | undefined>,

		/** Read Only: The provision state of the web service. Valid values are Unknown, Provisioning, Succeeded, and Failed. */
		provisioningState: FormControl<AsyncOperationStatusProvisioningState | null | undefined>,

		/** When set to true, indicates that the web service is read-only and can no longer be updated or patched, only removed. Default, is false. Note: Once set to true, you cannot change its value. */
		readOnly: FormControl<boolean | null | undefined>,

		/** Read Only: Contains the URI of the swagger spec associated with this web service. */
		swaggerLocation: FormControl<string | null | undefined>,

		/** The title of the web service. */
		title: FormControl<string | null | undefined>,
	}
	export function CreateWebServicePropertiesFormGroup() {
		return new FormGroup<WebServicePropertiesFormProperties>({
			assets: new FormControl<{[id: string]: AssetItem } | null | undefined>(undefined),
			createdOn: new FormControl<Date | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			exposeSampleData: new FormControl<boolean | null | undefined>(undefined),
			modifiedOn: new FormControl<Date | null | undefined>(undefined),
			packageType: new FormControl<WebServicePropertiesPackageType | null | undefined>(undefined, [Validators.required]),
			parameters: new FormControl<{[id: string]: WebServiceParameter } | null | undefined>(undefined),
			payloadsInBlobStorage: new FormControl<boolean | null | undefined>(undefined),
			provisioningState: new FormControl<AsyncOperationStatusProvisioningState | null | undefined>(undefined),
			readOnly: new FormControl<boolean | null | undefined>(undefined),
			swaggerLocation: new FormControl<string | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The swagger 2.0 schema describing the service's inputs or outputs. See Swagger specification: http://swagger.io/specification/ */
	export interface ServiceInputOutputSpecification {

		/** The description of the Swagger schema. */
		description?: string | null;

		/**
		 * Specifies a collection that contains the column schema for each input or output of the web service. For more information, see the Swagger specification.
		 * Required
		 */
		properties: {[id: string]: TableSpecification };

		/** The title of your Swagger schema. */
		title?: string | null;

		/**
		 * The type of the entity described in swagger. Always 'object'.
		 * Required
		 */
		type: string;
	}

	/** The swagger 2.0 schema describing the service's inputs or outputs. See Swagger specification: http://swagger.io/specification/ */
	export interface ServiceInputOutputSpecificationFormProperties {

		/** The description of the Swagger schema. */
		description: FormControl<string | null | undefined>,

		/**
		 * Specifies a collection that contains the column schema for each input or output of the web service. For more information, see the Swagger specification.
		 * Required
		 */
		properties: FormControl<{[id: string]: TableSpecification } | null | undefined>,

		/** The title of your Swagger schema. */
		title: FormControl<string | null | undefined>,

		/**
		 * The type of the entity described in swagger. Always 'object'.
		 * Required
		 */
		type: FormControl<string | null | undefined>,
	}
	export function CreateServiceInputOutputSpecificationFormGroup() {
		return new FormGroup<ServiceInputOutputSpecificationFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			properties: new FormControl<{[id: string]: TableSpecification } | null | undefined>(undefined, [Validators.required]),
			title: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The swagger 2.0 schema describing a single service input or output. See Swagger specification: http://swagger.io/specification/ */
	export interface TableSpecification {

		/** Swagger schema description. */
		description?: string | null;

		/** The format, if 'type' is not 'object' */
		format?: string | null;

		/** The set of columns within the data table. */
		properties?: {[id: string]: ColumnSpecification };

		/** Swagger schema title. */
		title?: string | null;

		/**
		 * The type of the entity described in swagger.
		 * Required
		 */
		type: string;
	}

	/** The swagger 2.0 schema describing a single service input or output. See Swagger specification: http://swagger.io/specification/ */
	export interface TableSpecificationFormProperties {

		/** Swagger schema description. */
		description: FormControl<string | null | undefined>,

		/** The format, if 'type' is not 'object' */
		format: FormControl<string | null | undefined>,

		/** The set of columns within the data table. */
		properties: FormControl<{[id: string]: ColumnSpecification } | null | undefined>,

		/** Swagger schema title. */
		title: FormControl<string | null | undefined>,

		/**
		 * The type of the entity described in swagger.
		 * Required
		 */
		type: FormControl<string | null | undefined>,
	}
	export function CreateTableSpecificationFormGroup() {
		return new FormGroup<TableSpecificationFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			format: new FormControl<string | null | undefined>(undefined),
			properties: new FormControl<{[id: string]: ColumnSpecification } | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Access keys for the web service calls. */
	export interface WebServiceKeys {

		/** The primary access key. */
		primary?: string | null;

		/** The secondary access key. */
		secondary?: string | null;
	}

	/** Access keys for the web service calls. */
	export interface WebServiceKeysFormProperties {

		/** The primary access key. */
		primary: FormControl<string | null | undefined>,

		/** The secondary access key. */
		secondary: FormControl<string | null | undefined>,
	}
	export function CreateWebServiceKeysFormGroup() {
		return new FormGroup<WebServiceKeysFormProperties>({
			primary: new FormControl<string | null | undefined>(undefined),
			secondary: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum WebServicePropertiesPackageType { Graph = 0 }


	/** Holds the available configuration options for an Azure ML web service endpoint. */
	export interface RealtimeConfiguration {

		/**
		 * Specifies the maximum concurrent calls that can be made to the web service. Minimum value: 4, Maximum value: 200.
		 * Minimum: 4
		 * Maximum: 200
		 */
		maxConcurrentCalls?: number | null;
	}

	/** Holds the available configuration options for an Azure ML web service endpoint. */
	export interface RealtimeConfigurationFormProperties {

		/**
		 * Specifies the maximum concurrent calls that can be made to the web service. Minimum value: 4, Maximum value: 200.
		 * Minimum: 4
		 * Maximum: 200
		 */
		maxConcurrentCalls: FormControl<number | null | undefined>,
	}
	export function CreateRealtimeConfigurationFormGroup() {
		return new FormGroup<RealtimeConfigurationFormProperties>({
			maxConcurrentCalls: new FormControl<number | null | undefined>(undefined, [Validators.min(4), Validators.max(200)]),
		});

	}


	/** Access information for a storage account. */
	export interface StorageAccount {

		/** Specifies the key used to access the storage account. */
		key?: string | null;

		/** Specifies the name of the storage account. */
		name?: string | null;
	}

	/** Access information for a storage account. */
	export interface StorageAccountFormProperties {

		/** Specifies the key used to access the storage account. */
		key: FormControl<string | null | undefined>,

		/** Specifies the name of the storage account. */
		name: FormControl<string | null | undefined>,
	}
	export function CreateStorageAccountFormGroup() {
		return new FormGroup<StorageAccountFormProperties>({
			key: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Azure resource. */
	export interface PatchedResource {

		/** Specifies the resource ID. */
		id?: string | null;

		/** Specifies the location of the resource. */
		location?: string | null;

		/** Specifies the name of the resource. */
		name?: string | null;

		/** Contains resource tags defined as key/value pairs. */
		tags?: {[id: string]: string };

		/** Specifies the type of the resource. */
		type?: string | null;
	}

	/** Azure resource. */
	export interface PatchedResourceFormProperties {

		/** Specifies the resource ID. */
		id: FormControl<string | null | undefined>,

		/** Specifies the location of the resource. */
		location: FormControl<string | null | undefined>,

		/** Specifies the name of the resource. */
		name: FormControl<string | null | undefined>,

		/** Contains resource tags defined as key/value pairs. */
		tags: FormControl<{[id: string]: string } | null | undefined>,

		/** Specifies the type of the resource. */
		type: FormControl<string | null | undefined>,
	}
	export function CreatePatchedResourceFormGroup() {
		return new FormGroup<PatchedResourceFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			location: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Instance of an Patched Azure ML web service resource. */
	export interface PatchedWebService {

		/** The set of properties specific to the Azure ML web service resource. */
		properties?: WebServiceProperties;
	}

	/** Instance of an Patched Azure ML web service resource. */
	export interface PatchedWebServiceFormProperties {
	}
	export function CreatePatchedWebServiceFormGroup() {
		return new FormGroup<PatchedWebServiceFormProperties>({
		});

	}


	/** Azure resource. */
	export interface Resource {

		/** Specifies the resource ID. */
		id?: string | null;

		/**
		 * Specifies the location of the resource.
		 * Required
		 */
		location: string;

		/** Specifies the name of the resource. */
		name?: string | null;

		/** Contains resource tags defined as key/value pairs. */
		tags?: {[id: string]: string };

		/** Specifies the type of the resource. */
		type?: string | null;
	}

	/** Azure resource. */
	export interface ResourceFormProperties {

		/** Specifies the resource ID. */
		id: FormControl<string | null | undefined>,

		/**
		 * Specifies the location of the resource.
		 * Required
		 */
		location: FormControl<string | null | undefined>,

		/** Specifies the name of the resource. */
		name: FormControl<string | null | undefined>,

		/** Contains resource tags defined as key/value pairs. */
		tags: FormControl<{[id: string]: string } | null | undefined>,

		/** Specifies the type of the resource. */
		type: FormControl<string | null | undefined>,
	}
	export function CreateResourceFormGroup() {
		return new FormGroup<ResourceFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			location: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined),
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Properties specific to a Graph based web service. */
	export interface WebServicePropertiesForGraph extends WebServiceProperties {

		/** Defines the graph of modules making up the machine learning solution. */
		package?: GraphPackage;
	}

	/** Properties specific to a Graph based web service. */
	export interface WebServicePropertiesForGraphFormProperties extends WebServicePropertiesFormProperties {
	}
	export function CreateWebServicePropertiesForGraphFormGroup() {
		return new FormGroup<WebServicePropertiesForGraphFormProperties>({
			assets: new FormControl<{[id: string]: AssetItem } | null | undefined>(undefined),
			createdOn: new FormControl<Date | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			exposeSampleData: new FormControl<boolean | null | undefined>(undefined),
			modifiedOn: new FormControl<Date | null | undefined>(undefined),
			packageType: new FormControl<WebServicePropertiesPackageType | null | undefined>(undefined, [Validators.required]),
			parameters: new FormControl<{[id: string]: WebServiceParameter } | null | undefined>(undefined),
			payloadsInBlobStorage: new FormControl<boolean | null | undefined>(undefined),
			provisioningState: new FormControl<AsyncOperationStatusProvisioningState | null | undefined>(undefined),
			readOnly: new FormControl<boolean | null | undefined>(undefined),
			swaggerLocation: new FormControl<string | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Lists all the available REST API operations.
		 * Get providers/Microsoft.MachineLearning/operations
		 * @param {string} api_version The version of the Microsoft.MachineLearning resource provider API to use.
		 * @return {OperationEntityListResult} OK.
		 */
		Operations_List(api_version: string): Observable<OperationEntityListResult> {
			return this.http.get<OperationEntityListResult>(this.baseUri + 'providers/Microsoft.MachineLearning/operations?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Gets the web services in the specified subscription.
		 * Get subscriptions/{subscriptionId}/providers/Microsoft.MachineLearning/webServices
		 * @param {string} skiptoken Continuation token for pagination.
		 * @param {string} api_version The version of the Microsoft.MachineLearning resource provider API to use.
		 * @param {string} subscriptionId The Azure subscription ID.
		 * @return {PaginatedWebServicesList} Success. The response includes a paginated array of web service objects and a URI to the next set of results, if any. Note that the web service objects are sparsely populated to conserve space in the response content. To get the full web service object, call the GET operation on the web service.
		 */
		WebServices_ListBySubscriptionId(skiptoken: string | null | undefined, api_version: string, subscriptionId: string): Observable<PaginatedWebServicesList> {
			return this.http.get<PaginatedWebServicesList>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/providers/Microsoft.MachineLearning/webServices?skiptoken=' + (skiptoken == null ? '' : encodeURIComponent(skiptoken)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Gets the web services in the specified resource group.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearning/webServices
		 * @param {string} resourceGroupName Name of the resource group in which the web service is located.
		 * @param {string} skiptoken Continuation token for pagination.
		 * @param {string} api_version The version of the Microsoft.MachineLearning resource provider API to use.
		 * @param {string} subscriptionId The Azure subscription ID.
		 * @return {PaginatedWebServicesList} Success. The response includes a paginated array of web service objects and a URI to the next set of results, if any. For the more information the limits of the number of items in a resource group, see https://azure.microsoft.com/en-us/documentation/articles/azure-subscription-service-limits/. Note that the web service objects are sparsely populated to conserve space in the response content. To get the full web service object, call the GET operation on the web service.
		 */
		WebServices_ListByResourceGroup(resourceGroupName: string, skiptoken: string | null | undefined, api_version: string, subscriptionId: string): Observable<PaginatedWebServicesList> {
			return this.http.get<PaginatedWebServicesList>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.MachineLearning/webServices&skiptoken=' + (skiptoken == null ? '' : encodeURIComponent(skiptoken)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Gets the Web Service Definition as specified by a subscription, resource group, and name. Note that the storage credentials and web service keys are not returned by this call. To get the web service access keys, call List Keys.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearning/webServices/{webServiceName}
		 * @param {string} resourceGroupName Name of the resource group in which the web service is located.
		 * @param {string} webServiceName The name of the web service.
		 * @param {string} region The region for which encrypted credential parameters are valid.
		 * @param {string} api_version The version of the Microsoft.MachineLearning resource provider API to use.
		 * @param {string} subscriptionId The Azure subscription ID.
		 * @return {WebService} Success.  The response includes the Provisioning State and the Azure-AsyncOperation header. To get the progress of the operation, call GET operation on the URL in Azure-AsyncOperation header field. For more informationFor more information about Asynchronous Operations, see https://docs.microsoft.com/en-us/azure/azure-resource-manager/resource-manager-async-operations.
		 */
		WebServices_Get(resourceGroupName: string, webServiceName: string, region: string | null | undefined, api_version: string, subscriptionId: string): Observable<WebService> {
			return this.http.get<WebService>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.MachineLearning/webServices/' + (webServiceName == null ? '' : encodeURIComponent(webServiceName)) + '&region=' + (region == null ? '' : encodeURIComponent(region)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Create or update a web service. This call will overwrite an existing web service. Note that there is no warning or confirmation. This is a nonrecoverable operation. If your intent is to create a new web service, call the Get operation first to verify that it does not exist.
		 * Put subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearning/webServices/{webServiceName}
		 * @param {string} resourceGroupName Name of the resource group in which the web service is located.
		 * @param {string} webServiceName The name of the web service.
		 * @param {string} api_version The version of the Microsoft.MachineLearning resource provider API to use.
		 * @param {string} subscriptionId The Azure subscription ID.
		 * @param {WebService} requestBody The payload that is used to create or update the web service.
		 * @return {WebService} Success. This response is returned for an update web service operation. The response payload is identical to the response payload that is returned by the GET operation. The response includes the Provisioning State and the Azure-AsyncOperation header. To get the progress of the operation, call GET operation on the URL in Azure-AsyncOperation header field. For more information about Asynchronous Operations, see https://docs.microsoft.com/en-us/azure/azure-resource-manager/resource-manager-async-operations.
		 */
		WebServices_CreateOrUpdate(resourceGroupName: string, webServiceName: string, api_version: string, subscriptionId: string, requestBody: WebService): Observable<WebService> {
			return this.http.put<WebService>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.MachineLearning/webServices/' + (webServiceName == null ? '' : encodeURIComponent(webServiceName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes the specified web service.
		 * Delete subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearning/webServices/{webServiceName}
		 * @param {string} resourceGroupName Name of the resource group in which the web service is located.
		 * @param {string} webServiceName The name of the web service.
		 * @param {string} api_version The version of the Microsoft.MachineLearning resource provider API to use.
		 * @param {string} subscriptionId The Azure subscription ID.
		 * @return {void} 
		 */
		WebServices_Remove(resourceGroupName: string, webServiceName: string, api_version: string, subscriptionId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.MachineLearning/webServices/' + (webServiceName == null ? '' : encodeURIComponent(webServiceName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Modifies an existing web service resource. The PATCH API call is an asynchronous operation. To determine whether it has completed successfully, you must perform a Get operation.
		 * Patch subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearning/webServices/{webServiceName}
		 * @param {string} resourceGroupName Name of the resource group in which the web service is located.
		 * @param {string} webServiceName The name of the web service.
		 * @param {string} api_version The version of the Microsoft.MachineLearning resource provider API to use.
		 * @param {string} subscriptionId The Azure subscription ID.
		 * @param {PatchedWebService} requestBody The payload to use to patch the web service.
		 * @return {WebService} Success. The response payload is identical to the response payload that is returned by the GET operation. The response includes the Provisioning State and the Azure-AsyncOperation header. To get the progress of the operation, call GET operation on the URL in Azure-AsyncOperation header field. For more information about Asynchronous Operations, see https://docs.microsoft.com/en-us/azure/azure-resource-manager/resource-manager-async-operations.
		 */
		WebServices_Patch(resourceGroupName: string, webServiceName: string, api_version: string, subscriptionId: string, requestBody: PatchedWebService): Observable<WebService> {
			return this.http.patch<WebService>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.MachineLearning/webServices/' + (webServiceName == null ? '' : encodeURIComponent(webServiceName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Creates an encrypted credentials parameter blob for the specified region. To get the web service from a region other than the region in which it has been created, you must first call Create Regional Web Services Properties to create a copy of the encrypted credential parameter blob in that region. You only need to do this before the first time that you get the web service in the new region.
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearning/webServices/{webServiceName}/CreateRegionalBlob
		 * @param {string} resourceGroupName Name of the resource group in which the web service is located.
		 * @param {string} webServiceName The name of the web service.
		 * @param {string} region The region for which encrypted credential parameters are created.
		 * @param {string} api_version The version of the Microsoft.MachineLearning resource provider API to use.
		 * @param {string} subscriptionId The Azure subscription ID.
		 * @return {AsyncOperationStatus} OK. Internal use only. Used for SDK return values.
		 */
		WebServices_CreateRegionalProperties(resourceGroupName: string, webServiceName: string, region: string, api_version: string, subscriptionId: string): Observable<AsyncOperationStatus> {
			return this.http.post<AsyncOperationStatus>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.MachineLearning/webServices/' + (webServiceName == null ? '' : encodeURIComponent(webServiceName)) + '/CreateRegionalBlob&region=' + (region == null ? '' : encodeURIComponent(region)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), null, {});
		}

		/**
		 * Gets the access keys for the specified web service.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearning/webServices/{webServiceName}/listKeys
		 * @param {string} resourceGroupName Name of the resource group in which the web service is located.
		 * @param {string} webServiceName The name of the web service.
		 * @param {string} api_version The version of the Microsoft.MachineLearning resource provider API to use.
		 * @param {string} subscriptionId The Azure subscription ID.
		 * @return {WebServiceKeys} Success.
		 */
		WebServices_ListKeys(resourceGroupName: string, webServiceName: string, api_version: string, subscriptionId: string): Observable<WebServiceKeys> {
			return this.http.get<WebServiceKeys>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.MachineLearning/webServices/' + (webServiceName == null ? '' : encodeURIComponent(webServiceName)) + '/listKeys&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}
	}

}

