import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
export namespace MyNS {
	export interface BatchCreateVariableResult {
		errors?: Array<BatchCreateVariableError>;
	}


	/** Provides the error of the batch create variable API. */
	export interface BatchCreateVariableError {
		name?: string;
		code?: number;
		message?: string;
	}

	export interface BatchCreateVariableRequest {
		variableEntries: Array<VariableEntry>;
	}


	/** The variable entry in a list. */
	export interface VariableEntry {
		name?: string;
		dataType?: string;
		dataSource?: string;
		defaultValue?: string;
		description?: string;
		variableType?: string;
	}

	export interface ValidationException {
	}

	export interface InternalServerException {
	}

	export interface ThrottlingException {
	}

	export interface BatchGetVariableResult {
		variables?: Array<Variable>;
		errors?: Array<BatchGetVariableError>;
	}


	/** The variable. */
	export interface Variable {
		name?: string;
		dataType?: VariableDataType;
		dataSource?: VariableDataSource;
		defaultValue?: string;
		description?: string;
		variableType?: string;
		lastUpdatedTime?: string;
		createdTime?: string;
	}

	export enum VariableDataType { STRING = 0, INTEGER = 1, FLOAT = 2, BOOLEAN = 3 }

	export enum VariableDataSource { EVENT = 0, MODEL_SCORE = 1, EXTERNAL_MODEL_SCORE = 2 }


	/** Provides the error of the batch get variable API. */
	export interface BatchGetVariableError {
		name?: string;
		code?: number;
		message?: string;
	}

	export interface BatchGetVariableRequest {
		names: Array<string>;
	}

	export interface CreateDetectorVersionResult {
		detectorId?: string;
		detectorVersionId?: string;
		status?: CreateDetectorVersionResultStatus;
	}

	export enum CreateDetectorVersionResultStatus { DRAFT = 0, ACTIVE = 1, INACTIVE = 2 }

	export interface CreateDetectorVersionRequest {
		detectorId: string;
		description?: string;
		externalModelEndpoints?: Array<string>;
		rules: Array<Rule>;
		modelVersions?: Array<ModelVersion>;
		ruleExecutionMode?: CreateDetectorVersionRequestRuleExecutionMode;
	}


	/** A rule. */
	export interface Rule {
		detectorId: string;
		ruleId: string;
		ruleVersion: string;
	}


	/** The model version. */
	export interface ModelVersion {
		modelId: string;
		modelType: ModelVersionModelType;
		modelVersionNumber: string;
	}

	export enum ModelVersionModelType { ONLINE_FRAUD_INSIGHTS = 0 }

	export enum CreateDetectorVersionRequestRuleExecutionMode { ALL_MATCHED = 0, FIRST_MATCHED = 1 }

	export interface ResourceNotFoundException {
	}

	export interface CreateModelVersionResult {
		modelId?: string;
		modelType?: ModelVersionModelType;
		modelVersionNumber?: string;
		status?: string;
	}

	export interface CreateModelVersionRequest {
		modelId: string;
		modelType: ModelVersionModelType;
		description?: string;
	}

	export interface CreateRuleResult {

		/** A rule. */
		rule?: Rule;
	}

	export interface CreateRuleRequest {
		ruleId: string;
		detectorId: string;
		description?: string;
		expression: string;
		language: CreateRuleRequestLanguage;
		outcomes: Array<string>;
	}

	export enum CreateRuleRequestLanguage { DETECTORPL = 0 }

	export interface CreateVariableResult {
	}

	export interface CreateVariableRequest {
		name: string;
		dataType: VariableDataType;
		dataSource: VariableDataSource;
		defaultValue: string;
		description?: string;
		variableType?: string;
	}

	export interface DeleteDetectorResult {
	}

	export interface DeleteDetectorRequest {
		detectorId: string;
	}

	export interface ConflictException {
	}

	export interface DeleteDetectorVersionResult {
	}

	export interface DeleteDetectorVersionRequest {
		detectorId: string;
		detectorVersionId: string;
	}

	export interface DeleteEventResult {
	}

	export interface DeleteEventRequest {
		eventId: string;
	}

	export interface DeleteRuleVersionResult {
	}

	export interface DeleteRuleVersionRequest {
		detectorId: string;
		ruleId: string;
		ruleVersion: string;
	}

	export interface DescribeDetectorResult {
		detectorId?: string;
		detectorVersionSummaries?: Array<DetectorVersionSummary>;
		nextToken?: string;
	}


	/** The summary of the detector version. */
	export interface DetectorVersionSummary {
		detectorVersionId?: string;
		status?: CreateDetectorVersionResultStatus;
		description?: string;
		lastUpdatedTime?: string;
	}

	export interface DescribeDetectorRequest {
		detectorId: string;
		nextToken?: string;
		maxResults?: number;
	}

	export interface DescribeModelVersionsResult {
		modelVersionDetails?: Array<ModelVersionDetail>;
		nextToken?: string;
	}


	/** Provides the model version details.  */
	export interface ModelVersionDetail {
		modelId?: string;
		modelType?: ModelVersionModelType;
		modelVersionNumber?: string;
		description?: string;
		status?: string;

		/** The training data source. */
		trainingDataSource?: TrainingDataSource;
		modelVariables?: Array<ModelVariable>;

		/** The label schema. */
		labelSchema?: LabelSchema;
		validationMetrics?: MetricsMap;
		trainingMetrics?: MetricsMap;
		lastUpdatedTime?: string;
		createdTime?: string;
	}


	/** The training data source. */
	export interface TrainingDataSource {
		dataLocation: string;
		dataAccessRoleArn: string;
	}


	/** The model variable.&gt; */
	export interface ModelVariable {
		name: string;
		index?: number;
	}


	/** The label schema. */
	export interface LabelSchema {
		labelKey: string;
		labelMapper: LabelMapper;
	}

	export interface LabelMapper {
	}

	export interface MetricsMap {
	}

	export interface DescribeModelVersionsRequest {
		modelId?: string;
		modelVersionNumber?: string;
		modelType?: ModelVersionModelType;
		nextToken?: string;
		maxResults?: number;
	}

	export interface GetDetectorVersionResult {
		detectorId?: string;
		detectorVersionId?: string;
		description?: string;
		externalModelEndpoints?: Array<string>;
		modelVersions?: Array<ModelVersion>;
		rules?: Array<Rule>;
		status?: CreateDetectorVersionResultStatus;
		lastUpdatedTime?: string;
		createdTime?: string;
		ruleExecutionMode?: CreateDetectorVersionRequestRuleExecutionMode;
	}

	export interface GetDetectorVersionRequest {
		detectorId: string;
		detectorVersionId: string;
	}

	export interface GetDetectorsResult {
		detectors?: Array<Detector>;
		nextToken?: string;
	}


	/** The detector. */
	export interface Detector {
		detectorId?: string;
		description?: string;
		lastUpdatedTime?: string;
		createdTime?: string;
	}

	export interface GetDetectorsRequest {
		detectorId?: string;
		nextToken?: string;
		maxResults?: number;
	}

	export interface GetExternalModelsResult {
		externalModels?: Array<ExternalModel>;
		nextToken?: string;
	}


	/** The Amazon SageMaker model. */
	export interface ExternalModel {
		modelEndpoint?: string;
		modelSource?: ExternalModelModelSource;

		/** The role used to invoke external model endpoints. */
		role?: Role;

		/** The model input configuration. */
		inputConfiguration?: ModelInputConfiguration;

		/** Provides the model output configuration. */
		outputConfiguration?: ModelOutputConfiguration;
		modelEndpointStatus?: ExternalModelModelEndpointStatus;
		lastUpdatedTime?: string;
		createdTime?: string;
	}

	export enum ExternalModelModelSource { SAGEMAKER = 0 }


	/** The role used to invoke external model endpoints. */
	export interface Role {
		arn: string;
		name: string;
	}


	/** The model input configuration. */
	export interface ModelInputConfiguration {
		format?: ModelInputConfigurationFormat;
		isOpaque: boolean;
		jsonInputTemplate?: string;
		csvInputTemplate?: string;
	}

	export enum ModelInputConfigurationFormat { TEXT_CSV = 0, APPLICATION_JSON = 1 }


	/** Provides the model output configuration. */
	export interface ModelOutputConfiguration {
		format: ModelOutputConfigurationFormat;
		jsonKeyToVariableMap?: JsonKeyToVariableMap;
		csvIndexToVariableMap?: CsvIndexToVariableMap;
	}

	export enum ModelOutputConfigurationFormat { TEXT_CSV = 0, APPLICATION_JSONLINES = 1 }

	export interface JsonKeyToVariableMap {
	}

	export interface CsvIndexToVariableMap {
	}

	export enum ExternalModelModelEndpointStatus { ASSOCIATED = 0, DISSOCIATED = 1 }

	export interface GetExternalModelsRequest {
		modelEndpoint?: string;
		nextToken?: string;
		maxResults?: number;
	}

	export interface GetModelVersionResult {
		modelId?: string;
		modelType?: ModelVersionModelType;
		modelVersionNumber?: string;
		description?: string;
		status?: string;
	}

	export interface GetModelVersionRequest {
		modelId: string;
		modelType: ModelVersionModelType;
		modelVersionNumber: string;
	}

	export interface GetModelsResult {
		nextToken?: string;
		models?: Array<Model>;
	}


	/** The model. */
	export interface Model {
		modelId?: string;
		modelType?: ModelVersionModelType;
		description?: string;

		/** The training data source. */
		trainingDataSource?: TrainingDataSource;
		modelVariables?: Array<ModelVariable>;

		/** The label schema. */
		labelSchema?: LabelSchema;
		lastUpdatedTime?: string;
		createdTime?: string;
	}

	export interface GetModelsRequest {
		modelType?: ModelVersionModelType;
		modelId?: string;
		nextToken?: string;
		maxResults?: number;
	}

	export interface GetOutcomesResult {
		outcomes?: Array<Outcome>;
		nextToken?: string;
	}


	/** The outcome. */
	export interface Outcome {
		name?: string;
		description?: string;
		lastUpdatedTime?: string;
		createdTime?: string;
	}

	export interface GetOutcomesRequest {
		name?: string;
		nextToken?: string;
		maxResults?: number;
	}

	export interface GetPredictionResult {
		outcomes?: Array<string>;
		modelScores?: Array<ModelScores>;
		ruleResults?: Array<RuleResult>;
	}


	/** The fraud prediction scores. */
	export interface ModelScores {

		/** The model version. */
		modelVersion?: ModelVersion;
		scores?: ModelPredictionMap;
	}

	export interface ModelPredictionMap {
	}


	/** The rule results. */
	export interface RuleResult {
		ruleId?: string;
		outcomes?: Array<string>;
	}

	export interface GetPredictionRequest {
		detectorId: string;
		detectorVersionId?: string;
		eventId: string;
		eventAttributes?: EventAttributeMap;
		externalModelEndpointDataBlobs?: ExternalModelEndpointDataBlobMap;
	}

	export interface EventAttributeMap {
	}

	export interface ExternalModelEndpointDataBlobMap {
	}

	export interface GetRulesResult {
		ruleDetails?: Array<RuleDetail>;
		nextToken?: string;
	}


	/** The details of the rule. */
	export interface RuleDetail {
		ruleId?: string;
		description?: string;
		detectorId?: string;
		ruleVersion?: string;
		expression?: string;
		language?: CreateRuleRequestLanguage;
		outcomes?: Array<string>;
		lastUpdatedTime?: string;
		createdTime?: string;
	}

	export interface GetRulesRequest {
		ruleId?: string;
		detectorId: string;
		ruleVersion?: string;
		nextToken?: string;
		maxResults?: number;
	}

	export interface GetVariablesResult {
		variables?: Array<Variable>;
		nextToken?: string;
	}

	export interface GetVariablesRequest {
		name?: string;
		nextToken?: string;
		maxResults?: number;
	}

	export interface PutDetectorResult {
	}

	export interface PutDetectorRequest {
		detectorId: string;
		description?: string;
	}

	export interface PutExternalModelResult {
	}

	export interface PutExternalModelRequest {
		modelEndpoint: string;
		modelSource: ExternalModelModelSource;

		/** The role used to invoke external model endpoints. */
		role: Role;

		/** The model input configuration. */
		inputConfiguration: ModelInputConfiguration;

		/** Provides the model output configuration. */
		outputConfiguration: ModelOutputConfiguration;
		modelEndpointStatus: ExternalModelModelEndpointStatus;
	}

	export interface PutModelResult {
	}

	export interface PutModelRequest {
		modelId: string;
		modelType: ModelVersionModelType;
		description?: string;

		/** The training data source. */
		trainingDataSource: TrainingDataSource;
		modelVariables: Array<ModelVariable>;

		/** The label schema. */
		labelSchema: LabelSchema;
	}

	export interface PutOutcomeResult {
	}

	export interface PutOutcomeRequest {
		name: string;
		description?: string;
	}

	export interface UpdateDetectorVersionResult {
	}

	export interface UpdateDetectorVersionRequest {
		detectorId: string;
		detectorVersionId: string;
		externalModelEndpoints: Array<string>;
		rules: Array<Rule>;
		description?: string;
		modelVersions?: Array<ModelVersion>;
		ruleExecutionMode?: CreateDetectorVersionRequestRuleExecutionMode;
	}

	export interface UpdateDetectorVersionMetadataResult {
	}

	export interface UpdateDetectorVersionMetadataRequest {
		detectorId: string;
		detectorVersionId: string;
		description: string;
	}

	export interface UpdateDetectorVersionStatusResult {
	}

	export interface UpdateDetectorVersionStatusRequest {
		detectorId: string;
		detectorVersionId: string;
		status: CreateDetectorVersionResultStatus;
	}

	export interface UpdateModelVersionResult {
	}

	export interface UpdateModelVersionRequest {
		modelId: string;
		modelType: ModelVersionModelType;
		modelVersionNumber: string;
		description: string;
		status: UpdateModelVersionRequestStatus;
	}

	export enum UpdateModelVersionRequestStatus { TRAINING_IN_PROGRESS = 0, TRAINING_COMPLETE = 1, ACTIVATE_REQUESTED = 2, ACTIVATE_IN_PROGRESS = 3, ACTIVE = 4, INACTIVATE_IN_PROGRESS = 5, INACTIVE = 6, ERROR = 7 }

	export interface UpdateRuleMetadataResult {
	}

	export interface UpdateRuleMetadataRequest {

		/** A rule. */
		rule: Rule;
		description: string;
	}

	export interface UpdateRuleVersionResult {

		/** A rule. */
		rule?: Rule;
	}

	export interface UpdateRuleVersionRequest {

		/** A rule. */
		rule: Rule;
		description?: string;
		expression: string;
		language: CreateRuleRequestLanguage;
		outcomes: Array<string>;
	}

	export interface UpdateVariableResult {
	}

	export interface UpdateVariableRequest {
		name: string;
		defaultValue?: string;
		description?: string;
		variableType?: string;
	}

	export enum RuleExecutionMode { ALL_MATCHED = 0, FIRST_MATCHED = 1 }

	export enum DetectorVersionStatus { DRAFT = 0, ACTIVE = 1, INACTIVE = 2 }

	export enum ModelTypeEnum { ONLINE_FRAUD_INSIGHTS = 0 }

	export enum Language { DETECTORPL = 0 }

	export enum DataType { STRING = 0, INTEGER = 1, FLOAT = 2, BOOLEAN = 3 }

	export enum DataSource { EVENT = 0, MODEL_SCORE = 1, EXTERNAL_MODEL_SCORE = 2 }

	export enum ModelSource { SAGEMAKER = 0 }

	export enum ModelEndpointStatus { ASSOCIATED = 0, DISSOCIATED = 1 }


	/** A pre-formed Amazon SageMaker model input you can include if your detector version includes an imported Amazon SageMaker model endpoint with pass-through input configuration. */
	export interface ModelEndpointDataBlob {
		byteBuffer?: string;
		contentType?: string;
	}

	export enum ModelInputDataFormat { TEXT_CSV = 0, APPLICATION_JSON = 1 }

	export enum ModelOutputDataFormat { TEXT_CSV = 0, APPLICATION_JSONLINES = 1 }

	export enum ModelVersionStatus { TRAINING_IN_PROGRESS = 0, TRAINING_COMPLETE = 1, ACTIVATE_REQUESTED = 2, ACTIVATE_IN_PROGRESS = 3, ACTIVE = 4, INACTIVATE_IN_PROGRESS = 5, INACTIVE = 6, ERROR = 7 }

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Creates a batch of variables.
		 * Post #X-Amz-Target=AWSHawksNestServiceFacade.BatchCreateVariable
		 * @return {BatchCreateVariableResult} Success
		 */
		BatchCreateVariable(requestBody: BatchCreateVariableRequest): Observable<BatchCreateVariableResult> {
			return this.http.post<BatchCreateVariableResult>(this.baseUri + '#X-Amz-Target=AWSHawksNestServiceFacade.BatchCreateVariable', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets a batch of variables.
		 * Post #X-Amz-Target=AWSHawksNestServiceFacade.BatchGetVariable
		 * @return {BatchGetVariableResult} Success
		 */
		BatchGetVariable(requestBody: BatchGetVariableRequest): Observable<BatchGetVariableResult> {
			return this.http.post<BatchGetVariableResult>(this.baseUri + '#X-Amz-Target=AWSHawksNestServiceFacade.BatchGetVariable', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Creates a detector version. The detector version starts in a <code>DRAFT</code> status.
		 * Post #X-Amz-Target=AWSHawksNestServiceFacade.CreateDetectorVersion
		 * @return {CreateDetectorVersionResult} Success
		 */
		CreateDetectorVersion(requestBody: CreateDetectorVersionRequest): Observable<CreateDetectorVersionResult> {
			return this.http.post<CreateDetectorVersionResult>(this.baseUri + '#X-Amz-Target=AWSHawksNestServiceFacade.CreateDetectorVersion', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Creates a version of the model using the specified model type.
		 * Post #X-Amz-Target=AWSHawksNestServiceFacade.CreateModelVersion
		 * @return {CreateModelVersionResult} Success
		 */
		CreateModelVersion(requestBody: CreateModelVersionRequest): Observable<CreateModelVersionResult> {
			return this.http.post<CreateModelVersionResult>(this.baseUri + '#X-Amz-Target=AWSHawksNestServiceFacade.CreateModelVersion', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Creates a rule for use with the specified detector.
		 * Post #X-Amz-Target=AWSHawksNestServiceFacade.CreateRule
		 * @return {CreateRuleResult} Success
		 */
		CreateRule(requestBody: CreateRuleRequest): Observable<CreateRuleResult> {
			return this.http.post<CreateRuleResult>(this.baseUri + '#X-Amz-Target=AWSHawksNestServiceFacade.CreateRule', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Creates a variable.
		 * Post #X-Amz-Target=AWSHawksNestServiceFacade.CreateVariable
		 * @return {CreateVariableResult} Success
		 */
		CreateVariable(requestBody: CreateVariableRequest): Observable<CreateVariableResult> {
			return this.http.post<CreateVariableResult>(this.baseUri + '#X-Amz-Target=AWSHawksNestServiceFacade.CreateVariable', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes the detector. Before deleting a detector, you must first delete all detector versions and rule versions associated with the detector.
		 * Post #X-Amz-Target=AWSHawksNestServiceFacade.DeleteDetector
		 * @return {DeleteDetectorResult} Success
		 */
		DeleteDetector(requestBody: DeleteDetectorRequest): Observable<DeleteDetectorResult> {
			return this.http.post<DeleteDetectorResult>(this.baseUri + '#X-Amz-Target=AWSHawksNestServiceFacade.DeleteDetector', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes the detector version. You cannot delete detector versions that are in <code>ACTIVE</code> status.
		 * Post #X-Amz-Target=AWSHawksNestServiceFacade.DeleteDetectorVersion
		 * @return {DeleteDetectorVersionResult} Success
		 */
		DeleteDetectorVersion(requestBody: DeleteDetectorVersionRequest): Observable<DeleteDetectorVersionResult> {
			return this.http.post<DeleteDetectorVersionResult>(this.baseUri + '#X-Amz-Target=AWSHawksNestServiceFacade.DeleteDetectorVersion', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes the specified event.
		 * Post #X-Amz-Target=AWSHawksNestServiceFacade.DeleteEvent
		 * @return {DeleteEventResult} Success
		 */
		DeleteEvent(requestBody: DeleteEventRequest): Observable<DeleteEventResult> {
			return this.http.post<DeleteEventResult>(this.baseUri + '#X-Amz-Target=AWSHawksNestServiceFacade.DeleteEvent', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes the rule version. You cannot delete a rule version if it is used by an <code>ACTIVE</code> or <code>INACTIVE</code> detector version.
		 * Post #X-Amz-Target=AWSHawksNestServiceFacade.DeleteRuleVersion
		 * @return {DeleteRuleVersionResult} Success
		 */
		DeleteRuleVersion(requestBody: DeleteRuleVersionRequest): Observable<DeleteRuleVersionResult> {
			return this.http.post<DeleteRuleVersionResult>(this.baseUri + '#X-Amz-Target=AWSHawksNestServiceFacade.DeleteRuleVersion', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets all versions for a specified detector.
		 * Post #X-Amz-Target=AWSHawksNestServiceFacade.DescribeDetector
		 * @return {DescribeDetectorResult} Success
		 */
		DescribeDetector(requestBody: DescribeDetectorRequest): Observable<DescribeDetectorResult> {
			return this.http.post<DescribeDetectorResult>(this.baseUri + '#X-Amz-Target=AWSHawksNestServiceFacade.DescribeDetector', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets all of the model versions for the specified model type or for the specified model type and model ID. You can also get details for a single, specified model version.
		 * Post #X-Amz-Target=AWSHawksNestServiceFacade.DescribeModelVersions
		 * @param {string} maxResults Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {DescribeModelVersionsResult} Success
		 */
		DescribeModelVersions(maxResults: string, nextToken: string, requestBody: DescribeModelVersionsRequest): Observable<DescribeModelVersionsResult> {
			return this.http.post<DescribeModelVersionsResult>(this.baseUri + '#X-Amz-Target=AWSHawksNestServiceFacade.DescribeModelVersions?maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets a particular detector version.
		 * Post #X-Amz-Target=AWSHawksNestServiceFacade.GetDetectorVersion
		 * @return {GetDetectorVersionResult} Success
		 */
		GetDetectorVersion(requestBody: GetDetectorVersionRequest): Observable<GetDetectorVersionResult> {
			return this.http.post<GetDetectorVersionResult>(this.baseUri + '#X-Amz-Target=AWSHawksNestServiceFacade.GetDetectorVersion', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets all of detectors. This is a paginated API. If you provide a null <code>maxSizePerPage</code>, this actions retrieves a maximum of 10 records per page. If you provide a <code>maxSizePerPage</code>, the value must be between 5 and 10. To get the next page results, provide the pagination token from the <code>GetEventTypesResponse</code> as part of your request. A null pagination token fetches the records from the beginning.
		 * Post #X-Amz-Target=AWSHawksNestServiceFacade.GetDetectors
		 * @param {string} maxResults Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {GetDetectorsResult} Success
		 */
		GetDetectors(maxResults: string, nextToken: string, requestBody: GetDetectorsRequest): Observable<GetDetectorsResult> {
			return this.http.post<GetDetectorsResult>(this.baseUri + '#X-Amz-Target=AWSHawksNestServiceFacade.GetDetectors?maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets the details for one or more Amazon SageMaker models that have been imported into the service. This is a paginated API. If you provide a null <code>maxSizePerPage</code>, this actions retrieves a maximum of 10 records per page. If you provide a <code>maxSizePerPage</code>, the value must be between 5 and 10. To get the next page results, provide the pagination token from the <code>GetExternalModelsResult</code> as part of your request. A null pagination token fetches the records from the beginning.
		 * Post #X-Amz-Target=AWSHawksNestServiceFacade.GetExternalModels
		 * @param {string} maxResults Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {GetExternalModelsResult} Success
		 */
		GetExternalModels(maxResults: string, nextToken: string, requestBody: GetExternalModelsRequest): Observable<GetExternalModelsResult> {
			return this.http.post<GetExternalModelsResult>(this.baseUri + '#X-Amz-Target=AWSHawksNestServiceFacade.GetExternalModels?maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets a model version.
		 * Post #X-Amz-Target=AWSHawksNestServiceFacade.GetModelVersion
		 * @return {GetModelVersionResult} Success
		 */
		GetModelVersion(requestBody: GetModelVersionRequest): Observable<GetModelVersionResult> {
			return this.http.post<GetModelVersionResult>(this.baseUri + '#X-Amz-Target=AWSHawksNestServiceFacade.GetModelVersion', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets all of the models for the AWS account, or the specified model type, or gets a single model for the specified model type, model ID combination.
		 * Post #X-Amz-Target=AWSHawksNestServiceFacade.GetModels
		 * @param {string} maxResults Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {GetModelsResult} Success
		 */
		GetModels(maxResults: string, nextToken: string, requestBody: GetModelsRequest): Observable<GetModelsResult> {
			return this.http.post<GetModelsResult>(this.baseUri + '#X-Amz-Target=AWSHawksNestServiceFacade.GetModels?maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets one or more outcomes. This is a paginated API. If you provide a null <code>maxSizePerPage</code>, this actions retrieves a maximum of 10 records per page. If you provide a <code>maxSizePerPage</code>, the value must be between 50 and 100. To get the next page results, provide the pagination token from the <code>GetOutcomesResult</code> as part of your request. A null pagination token fetches the records from the beginning.
		 * Post #X-Amz-Target=AWSHawksNestServiceFacade.GetOutcomes
		 * @param {string} maxResults Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {GetOutcomesResult} Success
		 */
		GetOutcomes(maxResults: string, nextToken: string, requestBody: GetOutcomesRequest): Observable<GetOutcomesResult> {
			return this.http.post<GetOutcomesResult>(this.baseUri + '#X-Amz-Target=AWSHawksNestServiceFacade.GetOutcomes?maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Evaluates an event against a detector version. If a version ID is not provided, the detector’s (<code>ACTIVE</code>) version is used.
		 * Post #X-Amz-Target=AWSHawksNestServiceFacade.GetPrediction
		 * @return {GetPredictionResult} Success
		 */
		GetPrediction(requestBody: GetPredictionRequest): Observable<GetPredictionResult> {
			return this.http.post<GetPredictionResult>(this.baseUri + '#X-Amz-Target=AWSHawksNestServiceFacade.GetPrediction', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets all rules available for the specified detector.
		 * Post #X-Amz-Target=AWSHawksNestServiceFacade.GetRules
		 * @param {string} maxResults Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {GetRulesResult} Success
		 */
		GetRules(maxResults: string, nextToken: string, requestBody: GetRulesRequest): Observable<GetRulesResult> {
			return this.http.post<GetRulesResult>(this.baseUri + '#X-Amz-Target=AWSHawksNestServiceFacade.GetRules?maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets all of the variables or the specific variable. This is a paginated API. Providing null <code>maxSizePerPage</code> results in retrieving maximum of 100 records per page. If you provide <code>maxSizePerPage</code> the value must be between 50 and 100. To get the next page result, a provide a pagination token from <code>GetVariablesResult</code> as part of your request. Null pagination token fetches the records from the beginning.
		 * Post #X-Amz-Target=AWSHawksNestServiceFacade.GetVariables
		 * @param {string} maxResults Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {GetVariablesResult} Success
		 */
		GetVariables(maxResults: string, nextToken: string, requestBody: GetVariablesRequest): Observable<GetVariablesResult> {
			return this.http.post<GetVariablesResult>(this.baseUri + '#X-Amz-Target=AWSHawksNestServiceFacade.GetVariables?maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Creates or updates a detector.
		 * Post #X-Amz-Target=AWSHawksNestServiceFacade.PutDetector
		 * @return {PutDetectorResult} Success
		 */
		PutDetector(requestBody: PutDetectorRequest): Observable<PutDetectorResult> {
			return this.http.post<PutDetectorResult>(this.baseUri + '#X-Amz-Target=AWSHawksNestServiceFacade.PutDetector', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Creates or updates an Amazon SageMaker model endpoint. You can also use this action to update the configuration of the model endpoint, including the IAM role and/or the mapped variables.
		 * Post #X-Amz-Target=AWSHawksNestServiceFacade.PutExternalModel
		 * @return {PutExternalModelResult} Success
		 */
		PutExternalModel(requestBody: PutExternalModelRequest): Observable<PutExternalModelResult> {
			return this.http.post<PutExternalModelResult>(this.baseUri + '#X-Amz-Target=AWSHawksNestServiceFacade.PutExternalModel', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Creates or updates a model.
		 * Post #X-Amz-Target=AWSHawksNestServiceFacade.PutModel
		 * @return {PutModelResult} Success
		 */
		PutModel(requestBody: PutModelRequest): Observable<PutModelResult> {
			return this.http.post<PutModelResult>(this.baseUri + '#X-Amz-Target=AWSHawksNestServiceFacade.PutModel', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Creates or updates an outcome.
		 * Post #X-Amz-Target=AWSHawksNestServiceFacade.PutOutcome
		 * @return {PutOutcomeResult} Success
		 */
		PutOutcome(requestBody: PutOutcomeRequest): Observable<PutOutcomeResult> {
			return this.http.post<PutOutcomeResult>(this.baseUri + '#X-Amz-Target=AWSHawksNestServiceFacade.PutOutcome', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Updates a detector version. The detector version attributes that you can update include models, external model endpoints, rules, and description. You can only update a <code>DRAFT</code> detector version.
		 * Post #X-Amz-Target=AWSHawksNestServiceFacade.UpdateDetectorVersion
		 * @return {UpdateDetectorVersionResult} Success
		 */
		UpdateDetectorVersion(requestBody: UpdateDetectorVersionRequest): Observable<UpdateDetectorVersionResult> {
			return this.http.post<UpdateDetectorVersionResult>(this.baseUri + '#X-Amz-Target=AWSHawksNestServiceFacade.UpdateDetectorVersion', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Updates the detector version's description. You can update the metadata for any detector version (<code>DRAFT, ACTIVE,</code> or <code>INACTIVE</code>).
		 * Post #X-Amz-Target=AWSHawksNestServiceFacade.UpdateDetectorVersionMetadata
		 * @return {UpdateDetectorVersionMetadataResult} Success
		 */
		UpdateDetectorVersionMetadata(requestBody: UpdateDetectorVersionMetadataRequest): Observable<UpdateDetectorVersionMetadataResult> {
			return this.http.post<UpdateDetectorVersionMetadataResult>(this.baseUri + '#X-Amz-Target=AWSHawksNestServiceFacade.UpdateDetectorVersionMetadata', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Updates the detector version’s status. You can perform the following promotions or demotions using <code>UpdateDetectorVersionStatus</code>: <code>DRAFT</code> to <code>ACTIVE</code>, <code>ACTIVE</code> to <code>INACTIVE</code>, and <code>INACTIVE</code> to <code>ACTIVE</code>.
		 * Post #X-Amz-Target=AWSHawksNestServiceFacade.UpdateDetectorVersionStatus
		 * @return {UpdateDetectorVersionStatusResult} Success
		 */
		UpdateDetectorVersionStatus(requestBody: UpdateDetectorVersionStatusRequest): Observable<UpdateDetectorVersionStatusResult> {
			return this.http.post<UpdateDetectorVersionStatusResult>(this.baseUri + '#X-Amz-Target=AWSHawksNestServiceFacade.UpdateDetectorVersionStatus', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Updates a model version. You can update the description and status attributes using this action. You can perform the following status updates: </p> <ol> <li> <p>Change the <code>TRAINING_COMPLETE</code> status to <code>ACTIVE</code> </p> </li> <li> <p>Change <code>ACTIVE</code> back to <code>TRAINING_COMPLETE</code> </p> </li> </ol>
		 * Post #X-Amz-Target=AWSHawksNestServiceFacade.UpdateModelVersion
		 * @return {UpdateModelVersionResult} Success
		 */
		UpdateModelVersion(requestBody: UpdateModelVersionRequest): Observable<UpdateModelVersionResult> {
			return this.http.post<UpdateModelVersionResult>(this.baseUri + '#X-Amz-Target=AWSHawksNestServiceFacade.UpdateModelVersion', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Updates a rule's metadata.
		 * Post #X-Amz-Target=AWSHawksNestServiceFacade.UpdateRuleMetadata
		 * @return {UpdateRuleMetadataResult} Success
		 */
		UpdateRuleMetadata(requestBody: UpdateRuleMetadataRequest): Observable<UpdateRuleMetadataResult> {
			return this.http.post<UpdateRuleMetadataResult>(this.baseUri + '#X-Amz-Target=AWSHawksNestServiceFacade.UpdateRuleMetadata', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Updates a rule version resulting in a new rule version.
		 * Post #X-Amz-Target=AWSHawksNestServiceFacade.UpdateRuleVersion
		 * @return {UpdateRuleVersionResult} Success
		 */
		UpdateRuleVersion(requestBody: UpdateRuleVersionRequest): Observable<UpdateRuleVersionResult> {
			return this.http.post<UpdateRuleVersionResult>(this.baseUri + '#X-Amz-Target=AWSHawksNestServiceFacade.UpdateRuleVersion', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Updates a variable.
		 * Post #X-Amz-Target=AWSHawksNestServiceFacade.UpdateVariable
		 * @return {UpdateVariableResult} Success
		 */
		UpdateVariable(requestBody: UpdateVariableRequest): Observable<UpdateVariableResult> {
			return this.http.post<UpdateVariableResult>(this.baseUri + '#X-Amz-Target=AWSHawksNestServiceFacade.UpdateVariable', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

	export enum BatchCreateVariableX_Amz_Target { AWSHawksNestServiceFacade_BatchCreateVariable = 0 }

	export enum BatchGetVariableX_Amz_Target { AWSHawksNestServiceFacade_BatchGetVariable = 0 }

	export enum CreateDetectorVersionX_Amz_Target { AWSHawksNestServiceFacade_CreateDetectorVersion = 0 }

	export enum CreateModelVersionX_Amz_Target { AWSHawksNestServiceFacade_CreateModelVersion = 0 }

	export enum CreateRuleX_Amz_Target { AWSHawksNestServiceFacade_CreateRule = 0 }

	export enum CreateVariableX_Amz_Target { AWSHawksNestServiceFacade_CreateVariable = 0 }

	export enum DeleteDetectorX_Amz_Target { AWSHawksNestServiceFacade_DeleteDetector = 0 }

	export enum DeleteDetectorVersionX_Amz_Target { AWSHawksNestServiceFacade_DeleteDetectorVersion = 0 }

	export enum DeleteEventX_Amz_Target { AWSHawksNestServiceFacade_DeleteEvent = 0 }

	export enum DeleteRuleVersionX_Amz_Target { AWSHawksNestServiceFacade_DeleteRuleVersion = 0 }

	export enum DescribeDetectorX_Amz_Target { AWSHawksNestServiceFacade_DescribeDetector = 0 }

	export enum DescribeModelVersionsX_Amz_Target { AWSHawksNestServiceFacade_DescribeModelVersions = 0 }

	export enum GetDetectorVersionX_Amz_Target { AWSHawksNestServiceFacade_GetDetectorVersion = 0 }

	export enum GetDetectorsX_Amz_Target { AWSHawksNestServiceFacade_GetDetectors = 0 }

	export enum GetExternalModelsX_Amz_Target { AWSHawksNestServiceFacade_GetExternalModels = 0 }

	export enum GetModelVersionX_Amz_Target { AWSHawksNestServiceFacade_GetModelVersion = 0 }

	export enum GetModelsX_Amz_Target { AWSHawksNestServiceFacade_GetModels = 0 }

	export enum GetOutcomesX_Amz_Target { AWSHawksNestServiceFacade_GetOutcomes = 0 }

	export enum GetPredictionX_Amz_Target { AWSHawksNestServiceFacade_GetPrediction = 0 }

	export enum GetRulesX_Amz_Target { AWSHawksNestServiceFacade_GetRules = 0 }

	export enum GetVariablesX_Amz_Target { AWSHawksNestServiceFacade_GetVariables = 0 }

	export enum PutDetectorX_Amz_Target { AWSHawksNestServiceFacade_PutDetector = 0 }

	export enum PutExternalModelX_Amz_Target { AWSHawksNestServiceFacade_PutExternalModel = 0 }

	export enum PutModelX_Amz_Target { AWSHawksNestServiceFacade_PutModel = 0 }

	export enum PutOutcomeX_Amz_Target { AWSHawksNestServiceFacade_PutOutcome = 0 }

	export enum UpdateDetectorVersionX_Amz_Target { AWSHawksNestServiceFacade_UpdateDetectorVersion = 0 }

	export enum UpdateDetectorVersionMetadataX_Amz_Target { AWSHawksNestServiceFacade_UpdateDetectorVersionMetadata = 0 }

	export enum UpdateDetectorVersionStatusX_Amz_Target { AWSHawksNestServiceFacade_UpdateDetectorVersionStatus = 0 }

	export enum UpdateModelVersionX_Amz_Target { AWSHawksNestServiceFacade_UpdateModelVersion = 0 }

	export enum UpdateRuleMetadataX_Amz_Target { AWSHawksNestServiceFacade_UpdateRuleMetadata = 0 }

	export enum UpdateRuleVersionX_Amz_Target { AWSHawksNestServiceFacade_UpdateRuleVersion = 0 }

	export enum UpdateVariableX_Amz_Target { AWSHawksNestServiceFacade_UpdateVariable = 0 }

}

