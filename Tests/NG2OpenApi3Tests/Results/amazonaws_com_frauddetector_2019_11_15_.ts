import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface BatchCreateVariableResult {
		errors?: Array<BatchCreateVariableError>;
	}
	export interface BatchCreateVariableResultFormProperties {
	}
	export function CreateBatchCreateVariableResultFormGroup() {
		return new FormGroup<BatchCreateVariableResultFormProperties>({
		});

	}


	/** Provides the error of the batch create variable API. */
	export interface BatchCreateVariableError {
		name?: string;
		code?: number | null;
		message?: string;
	}

	/** Provides the error of the batch create variable API. */
	export interface BatchCreateVariableErrorFormProperties {
		name: FormControl<string | null | undefined>,
		code: FormControl<number | null | undefined>,
		message: FormControl<string | null | undefined>,
	}
	export function CreateBatchCreateVariableErrorFormGroup() {
		return new FormGroup<BatchCreateVariableErrorFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			code: new FormControl<number | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface BatchCreateVariableRequest {

		/** Required */
		variableEntries: Array<VariableEntry>;
		tags?: Array<Tag>;
	}
	export interface BatchCreateVariableRequestFormProperties {
	}
	export function CreateBatchCreateVariableRequestFormGroup() {
		return new FormGroup<BatchCreateVariableRequestFormProperties>({
		});

	}


	/** A variable in the list of variables for the batch create variable request. */
	export interface VariableEntry {
		name?: string;
		dataType?: string;
		dataSource?: string;
		defaultValue?: string;
		description?: string;
		variableType?: string;
	}

	/** A variable in the list of variables for the batch create variable request. */
	export interface VariableEntryFormProperties {
		name: FormControl<string | null | undefined>,
		dataType: FormControl<string | null | undefined>,
		dataSource: FormControl<string | null | undefined>,
		defaultValue: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,
		variableType: FormControl<string | null | undefined>,
	}
	export function CreateVariableEntryFormGroup() {
		return new FormGroup<VariableEntryFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			dataType: new FormControl<string | null | undefined>(undefined),
			dataSource: new FormControl<string | null | undefined>(undefined),
			defaultValue: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			variableType: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A key and value pair.  */
	export interface Tag {

		/** Required */
		key: string;

		/** Required */
		value: string;
	}

	/** A key and value pair.  */
	export interface TagFormProperties {

		/** Required */
		key: FormControl<string | null | undefined>,

		/** Required */
		value: FormControl<string | null | undefined>,
	}
	export function CreateTagFormGroup() {
		return new FormGroup<TagFormProperties>({
			key: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			value: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ValidationException {
	}
	export interface ValidationExceptionFormProperties {
	}
	export function CreateValidationExceptionFormGroup() {
		return new FormGroup<ValidationExceptionFormProperties>({
		});

	}

	export interface InternalServerException {
	}
	export interface InternalServerExceptionFormProperties {
	}
	export function CreateInternalServerExceptionFormGroup() {
		return new FormGroup<InternalServerExceptionFormProperties>({
		});

	}

	export interface ThrottlingException {
	}
	export interface ThrottlingExceptionFormProperties {
	}
	export function CreateThrottlingExceptionFormGroup() {
		return new FormGroup<ThrottlingExceptionFormProperties>({
		});

	}

	export interface AccessDeniedException {
	}
	export interface AccessDeniedExceptionFormProperties {
	}
	export function CreateAccessDeniedExceptionFormGroup() {
		return new FormGroup<AccessDeniedExceptionFormProperties>({
		});

	}

	export interface BatchGetVariableResult {
		variables?: Array<Variable>;
		errors?: Array<BatchGetVariableError>;
	}
	export interface BatchGetVariableResultFormProperties {
	}
	export function CreateBatchGetVariableResultFormGroup() {
		return new FormGroup<BatchGetVariableResultFormProperties>({
		});

	}


	/** The variable. */
	export interface Variable {
		name?: string;
		dataType?: DataType;
		dataSource?: DataSource;
		defaultValue?: string;
		description?: string;
		variableType?: string;
		lastUpdatedTime?: string;
		createdTime?: string;
		arn?: string;
	}

	/** The variable. */
	export interface VariableFormProperties {
		name: FormControl<string | null | undefined>,
		dataType: FormControl<DataType | null | undefined>,
		dataSource: FormControl<DataSource | null | undefined>,
		defaultValue: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,
		variableType: FormControl<string | null | undefined>,
		lastUpdatedTime: FormControl<string | null | undefined>,
		createdTime: FormControl<string | null | undefined>,
		arn: FormControl<string | null | undefined>,
	}
	export function CreateVariableFormGroup() {
		return new FormGroup<VariableFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			dataType: new FormControl<DataType | null | undefined>(undefined),
			dataSource: new FormControl<DataSource | null | undefined>(undefined),
			defaultValue: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			variableType: new FormControl<string | null | undefined>(undefined),
			lastUpdatedTime: new FormControl<string | null | undefined>(undefined),
			createdTime: new FormControl<string | null | undefined>(undefined),
			arn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum DataType { STRING = 'STRING', INTEGER = 'INTEGER', FLOAT = 'FLOAT', BOOLEAN = 'BOOLEAN', DATETIME = 'DATETIME' }

	export enum DataSource { EVENT = 'EVENT', MODEL_SCORE = 'MODEL_SCORE', EXTERNAL_MODEL_SCORE = 'EXTERNAL_MODEL_SCORE' }


	/** Provides the error of the batch get variable API. */
	export interface BatchGetVariableError {
		name?: string;
		code?: number | null;
		message?: string;
	}

	/** Provides the error of the batch get variable API. */
	export interface BatchGetVariableErrorFormProperties {
		name: FormControl<string | null | undefined>,
		code: FormControl<number | null | undefined>,
		message: FormControl<string | null | undefined>,
	}
	export function CreateBatchGetVariableErrorFormGroup() {
		return new FormGroup<BatchGetVariableErrorFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			code: new FormControl<number | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface BatchGetVariableRequest {

		/** Required */
		names: Array<string>;
	}
	export interface BatchGetVariableRequestFormProperties {
	}
	export function CreateBatchGetVariableRequestFormGroup() {
		return new FormGroup<BatchGetVariableRequestFormProperties>({
		});

	}

	export interface CancelBatchImportJobResult {
	}
	export interface CancelBatchImportJobResultFormProperties {
	}
	export function CreateCancelBatchImportJobResultFormGroup() {
		return new FormGroup<CancelBatchImportJobResultFormProperties>({
		});

	}

	export interface CancelBatchImportJobRequest {

		/** Required */
		jobId: string;
	}
	export interface CancelBatchImportJobRequestFormProperties {

		/** Required */
		jobId: FormControl<string | null | undefined>,
	}
	export function CreateCancelBatchImportJobRequestFormGroup() {
		return new FormGroup<CancelBatchImportJobRequestFormProperties>({
			jobId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ResourceNotFoundException {
	}
	export interface ResourceNotFoundExceptionFormProperties {
	}
	export function CreateResourceNotFoundExceptionFormGroup() {
		return new FormGroup<ResourceNotFoundExceptionFormProperties>({
		});

	}

	export interface CancelBatchPredictionJobResult {
	}
	export interface CancelBatchPredictionJobResultFormProperties {
	}
	export function CreateCancelBatchPredictionJobResultFormGroup() {
		return new FormGroup<CancelBatchPredictionJobResultFormProperties>({
		});

	}

	export interface CancelBatchPredictionJobRequest {

		/** Required */
		jobId: string;
	}
	export interface CancelBatchPredictionJobRequestFormProperties {

		/** Required */
		jobId: FormControl<string | null | undefined>,
	}
	export function CreateCancelBatchPredictionJobRequestFormGroup() {
		return new FormGroup<CancelBatchPredictionJobRequestFormProperties>({
			jobId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateBatchImportJobResult {
	}
	export interface CreateBatchImportJobResultFormProperties {
	}
	export function CreateCreateBatchImportJobResultFormGroup() {
		return new FormGroup<CreateBatchImportJobResultFormProperties>({
		});

	}

	export interface CreateBatchImportJobRequest {

		/** Required */
		jobId: string;

		/** Required */
		inputPath: string;

		/** Required */
		outputPath: string;

		/** Required */
		eventTypeName: string;

		/** Required */
		iamRoleArn: string;
		tags?: Array<Tag>;
	}
	export interface CreateBatchImportJobRequestFormProperties {

		/** Required */
		jobId: FormControl<string | null | undefined>,

		/** Required */
		inputPath: FormControl<string | null | undefined>,

		/** Required */
		outputPath: FormControl<string | null | undefined>,

		/** Required */
		eventTypeName: FormControl<string | null | undefined>,

		/** Required */
		iamRoleArn: FormControl<string | null | undefined>,
	}
	export function CreateCreateBatchImportJobRequestFormGroup() {
		return new FormGroup<CreateBatchImportJobRequestFormProperties>({
			jobId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			inputPath: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			outputPath: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			eventTypeName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			iamRoleArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateBatchPredictionJobResult {
	}
	export interface CreateBatchPredictionJobResultFormProperties {
	}
	export function CreateCreateBatchPredictionJobResultFormGroup() {
		return new FormGroup<CreateBatchPredictionJobResultFormProperties>({
		});

	}

	export interface CreateBatchPredictionJobRequest {

		/** Required */
		jobId: string;

		/** Required */
		inputPath: string;

		/** Required */
		outputPath: string;

		/** Required */
		eventTypeName: string;

		/** Required */
		detectorName: string;
		detectorVersion?: string;

		/** Required */
		iamRoleArn: string;
		tags?: Array<Tag>;
	}
	export interface CreateBatchPredictionJobRequestFormProperties {

		/** Required */
		jobId: FormControl<string | null | undefined>,

		/** Required */
		inputPath: FormControl<string | null | undefined>,

		/** Required */
		outputPath: FormControl<string | null | undefined>,

		/** Required */
		eventTypeName: FormControl<string | null | undefined>,

		/** Required */
		detectorName: FormControl<string | null | undefined>,
		detectorVersion: FormControl<string | null | undefined>,

		/** Required */
		iamRoleArn: FormControl<string | null | undefined>,
	}
	export function CreateCreateBatchPredictionJobRequestFormGroup() {
		return new FormGroup<CreateBatchPredictionJobRequestFormProperties>({
			jobId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			inputPath: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			outputPath: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			eventTypeName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			detectorName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			detectorVersion: new FormControl<string | null | undefined>(undefined),
			iamRoleArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateDetectorVersionResult {
		detectorId?: string;
		detectorVersionId?: string;
		status?: DetectorVersionStatus;
	}
	export interface CreateDetectorVersionResultFormProperties {
		detectorId: FormControl<string | null | undefined>,
		detectorVersionId: FormControl<string | null | undefined>,
		status: FormControl<DetectorVersionStatus | null | undefined>,
	}
	export function CreateCreateDetectorVersionResultFormGroup() {
		return new FormGroup<CreateDetectorVersionResultFormProperties>({
			detectorId: new FormControl<string | null | undefined>(undefined),
			detectorVersionId: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<DetectorVersionStatus | null | undefined>(undefined),
		});

	}

	export enum DetectorVersionStatus { DRAFT = 'DRAFT', ACTIVE = 'ACTIVE', INACTIVE = 'INACTIVE' }

	export interface CreateDetectorVersionRequest {

		/** Required */
		detectorId: string;
		description?: string;
		externalModelEndpoints?: Array<string>;

		/** Required */
		rules: Array<Rule>;
		modelVersions?: Array<ModelVersion>;
		ruleExecutionMode?: RuleExecutionMode;
		tags?: Array<Tag>;
	}
	export interface CreateDetectorVersionRequestFormProperties {

		/** Required */
		detectorId: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,
		ruleExecutionMode: FormControl<RuleExecutionMode | null | undefined>,
	}
	export function CreateCreateDetectorVersionRequestFormGroup() {
		return new FormGroup<CreateDetectorVersionRequestFormProperties>({
			detectorId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			description: new FormControl<string | null | undefined>(undefined),
			ruleExecutionMode: new FormControl<RuleExecutionMode | null | undefined>(undefined),
		});

	}


	/** A rule. */
	export interface Rule {

		/** Required */
		detectorId: string;

		/** Required */
		ruleId: string;

		/** Required */
		ruleVersion: string;
	}

	/** A rule. */
	export interface RuleFormProperties {

		/** Required */
		detectorId: FormControl<string | null | undefined>,

		/** Required */
		ruleId: FormControl<string | null | undefined>,

		/** Required */
		ruleVersion: FormControl<string | null | undefined>,
	}
	export function CreateRuleFormGroup() {
		return new FormGroup<RuleFormProperties>({
			detectorId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ruleId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ruleVersion: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The model version. */
	export interface ModelVersion {

		/** Required */
		modelId: string;

		/** Required */
		modelType: ModelTypeEnum;

		/** Required */
		modelVersionNumber: string;
		arn?: string;
	}

	/** The model version. */
	export interface ModelVersionFormProperties {

		/** Required */
		modelId: FormControl<string | null | undefined>,

		/** Required */
		modelType: FormControl<ModelTypeEnum | null | undefined>,

		/** Required */
		modelVersionNumber: FormControl<string | null | undefined>,
		arn: FormControl<string | null | undefined>,
	}
	export function CreateModelVersionFormGroup() {
		return new FormGroup<ModelVersionFormProperties>({
			modelId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			modelType: new FormControl<ModelTypeEnum | null | undefined>(undefined, [Validators.required]),
			modelVersionNumber: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			arn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ModelTypeEnum { ONLINE_FRAUD_INSIGHTS = 'ONLINE_FRAUD_INSIGHTS', TRANSACTION_FRAUD_INSIGHTS = 'TRANSACTION_FRAUD_INSIGHTS', ACCOUNT_TAKEOVER_INSIGHTS = 'ACCOUNT_TAKEOVER_INSIGHTS' }

	export enum RuleExecutionMode { ALL_MATCHED = 'ALL_MATCHED', FIRST_MATCHED = 'FIRST_MATCHED' }

	export interface CreateListResult {
	}
	export interface CreateListResultFormProperties {
	}
	export function CreateCreateListResultFormGroup() {
		return new FormGroup<CreateListResultFormProperties>({
		});

	}

	export interface CreateListRequest {

		/** Required */
		name: string;
		elements?: Array<string>;
		variableType?: string;
		description?: string;
		tags?: Array<Tag>;
	}
	export interface CreateListRequestFormProperties {

		/** Required */
		name: FormControl<string | null | undefined>,
		variableType: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,
	}
	export function CreateCreateListRequestFormGroup() {
		return new FormGroup<CreateListRequestFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			variableType: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateModelResult {
	}
	export interface CreateModelResultFormProperties {
	}
	export function CreateCreateModelResultFormGroup() {
		return new FormGroup<CreateModelResultFormProperties>({
		});

	}

	export interface CreateModelRequest {

		/** Required */
		modelId: string;

		/** Required */
		modelType: ModelTypeEnum;
		description?: string;

		/** Required */
		eventTypeName: string;
		tags?: Array<Tag>;
	}
	export interface CreateModelRequestFormProperties {

		/** Required */
		modelId: FormControl<string | null | undefined>,

		/** Required */
		modelType: FormControl<ModelTypeEnum | null | undefined>,
		description: FormControl<string | null | undefined>,

		/** Required */
		eventTypeName: FormControl<string | null | undefined>,
	}
	export function CreateCreateModelRequestFormGroup() {
		return new FormGroup<CreateModelRequestFormProperties>({
			modelId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			modelType: new FormControl<ModelTypeEnum | null | undefined>(undefined, [Validators.required]),
			description: new FormControl<string | null | undefined>(undefined),
			eventTypeName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateModelVersionResult {
		modelId?: string;
		modelType?: ModelTypeEnum;
		modelVersionNumber?: string;
		status?: string;
	}
	export interface CreateModelVersionResultFormProperties {
		modelId: FormControl<string | null | undefined>,
		modelType: FormControl<ModelTypeEnum | null | undefined>,
		modelVersionNumber: FormControl<string | null | undefined>,
		status: FormControl<string | null | undefined>,
	}
	export function CreateCreateModelVersionResultFormGroup() {
		return new FormGroup<CreateModelVersionResultFormProperties>({
			modelId: new FormControl<string | null | undefined>(undefined),
			modelType: new FormControl<ModelTypeEnum | null | undefined>(undefined),
			modelVersionNumber: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateModelVersionRequest {

		/** Required */
		modelId: string;

		/** Required */
		modelType: ModelTypeEnum;

		/** Required */
		trainingDataSource: TrainingDataSourceEnum;

		/** Required */
		trainingDataSchema: TrainingDataSchema;
		externalEventsDetail?: ExternalEventsDetail;
		ingestedEventsDetail?: IngestedEventsDetail;
		tags?: Array<Tag>;
	}
	export interface CreateModelVersionRequestFormProperties {

		/** Required */
		modelId: FormControl<string | null | undefined>,

		/** Required */
		modelType: FormControl<ModelTypeEnum | null | undefined>,

		/** Required */
		trainingDataSource: FormControl<TrainingDataSourceEnum | null | undefined>,
	}
	export function CreateCreateModelVersionRequestFormGroup() {
		return new FormGroup<CreateModelVersionRequestFormProperties>({
			modelId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			modelType: new FormControl<ModelTypeEnum | null | undefined>(undefined, [Validators.required]),
			trainingDataSource: new FormControl<TrainingDataSourceEnum | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum TrainingDataSourceEnum { EXTERNAL_EVENTS = 'EXTERNAL_EVENTS', INGESTED_EVENTS = 'INGESTED_EVENTS' }


	/** The training data schema. */
	export interface TrainingDataSchema {

		/** Required */
		modelVariables: Array<string>;

		/** The label schema. */
		labelSchema?: LabelSchema;
	}

	/** The training data schema. */
	export interface TrainingDataSchemaFormProperties {
	}
	export function CreateTrainingDataSchemaFormGroup() {
		return new FormGroup<TrainingDataSchemaFormProperties>({
		});

	}


	/** The label schema. */
	export interface LabelSchema {
		labelMapper?: LabelMapper;
		unlabeledEventsTreatment?: UnlabeledEventsTreatment;
	}

	/** The label schema. */
	export interface LabelSchemaFormProperties {
		unlabeledEventsTreatment: FormControl<UnlabeledEventsTreatment | null | undefined>,
	}
	export function CreateLabelSchemaFormGroup() {
		return new FormGroup<LabelSchemaFormProperties>({
			unlabeledEventsTreatment: new FormControl<UnlabeledEventsTreatment | null | undefined>(undefined),
		});

	}

	export interface LabelMapper {
	}
	export interface LabelMapperFormProperties {
	}
	export function CreateLabelMapperFormGroup() {
		return new FormGroup<LabelMapperFormProperties>({
		});

	}

	export enum UnlabeledEventsTreatment { IGNORE = 'IGNORE', FRAUD = 'FRAUD', LEGIT = 'LEGIT', AUTO = 'AUTO' }


	/** Details for the external events data used for model version training. */
	export interface ExternalEventsDetail {

		/** Required */
		dataLocation: string;

		/** Required */
		dataAccessRoleArn: string;
	}

	/** Details for the external events data used for model version training. */
	export interface ExternalEventsDetailFormProperties {

		/** Required */
		dataLocation: FormControl<string | null | undefined>,

		/** Required */
		dataAccessRoleArn: FormControl<string | null | undefined>,
	}
	export function CreateExternalEventsDetailFormGroup() {
		return new FormGroup<ExternalEventsDetailFormProperties>({
			dataLocation: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			dataAccessRoleArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The details of the ingested event. */
	export interface IngestedEventsDetail {

		/** Required */
		ingestedEventsTimeWindow: IngestedEventsTimeWindow;
	}

	/** The details of the ingested event. */
	export interface IngestedEventsDetailFormProperties {
	}
	export function CreateIngestedEventsDetailFormGroup() {
		return new FormGroup<IngestedEventsDetailFormProperties>({
		});

	}


	/** The start and stop time of the ingested events. */
	export interface IngestedEventsTimeWindow {

		/** Required */
		startTime: string;

		/** Required */
		endTime: string;
	}

	/** The start and stop time of the ingested events. */
	export interface IngestedEventsTimeWindowFormProperties {

		/** Required */
		startTime: FormControl<string | null | undefined>,

		/** Required */
		endTime: FormControl<string | null | undefined>,
	}
	export function CreateIngestedEventsTimeWindowFormGroup() {
		return new FormGroup<IngestedEventsTimeWindowFormProperties>({
			startTime: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			endTime: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateRuleResult {
		rule?: Rule;
	}
	export interface CreateRuleResultFormProperties {
	}
	export function CreateCreateRuleResultFormGroup() {
		return new FormGroup<CreateRuleResultFormProperties>({
		});

	}

	export interface CreateRuleRequest {

		/** Required */
		ruleId: string;

		/** Required */
		detectorId: string;
		description?: string;

		/** Required */
		expression: string;

		/** Required */
		language: Language;

		/** Required */
		outcomes: Array<string>;
		tags?: Array<Tag>;
	}
	export interface CreateRuleRequestFormProperties {

		/** Required */
		ruleId: FormControl<string | null | undefined>,

		/** Required */
		detectorId: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,

		/** Required */
		expression: FormControl<string | null | undefined>,

		/** Required */
		language: FormControl<Language | null | undefined>,
	}
	export function CreateCreateRuleRequestFormGroup() {
		return new FormGroup<CreateRuleRequestFormProperties>({
			ruleId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			detectorId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			description: new FormControl<string | null | undefined>(undefined),
			expression: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			language: new FormControl<Language | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum Language { DETECTORPL = 'DETECTORPL' }

	export interface CreateVariableResult {
	}
	export interface CreateVariableResultFormProperties {
	}
	export function CreateCreateVariableResultFormGroup() {
		return new FormGroup<CreateVariableResultFormProperties>({
		});

	}

	export interface CreateVariableRequest {

		/** Required */
		name: string;

		/** Required */
		dataType: DataType;

		/** Required */
		dataSource: DataSource;

		/** Required */
		defaultValue: string;
		description?: string;
		variableType?: string;
		tags?: Array<Tag>;
	}
	export interface CreateVariableRequestFormProperties {

		/** Required */
		name: FormControl<string | null | undefined>,

		/** Required */
		dataType: FormControl<DataType | null | undefined>,

		/** Required */
		dataSource: FormControl<DataSource | null | undefined>,

		/** Required */
		defaultValue: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,
		variableType: FormControl<string | null | undefined>,
	}
	export function CreateCreateVariableRequestFormGroup() {
		return new FormGroup<CreateVariableRequestFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			dataType: new FormControl<DataType | null | undefined>(undefined, [Validators.required]),
			dataSource: new FormControl<DataSource | null | undefined>(undefined, [Validators.required]),
			defaultValue: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			description: new FormControl<string | null | undefined>(undefined),
			variableType: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DeleteBatchImportJobResult {
	}
	export interface DeleteBatchImportJobResultFormProperties {
	}
	export function CreateDeleteBatchImportJobResultFormGroup() {
		return new FormGroup<DeleteBatchImportJobResultFormProperties>({
		});

	}

	export interface DeleteBatchImportJobRequest {

		/** Required */
		jobId: string;
	}
	export interface DeleteBatchImportJobRequestFormProperties {

		/** Required */
		jobId: FormControl<string | null | undefined>,
	}
	export function CreateDeleteBatchImportJobRequestFormGroup() {
		return new FormGroup<DeleteBatchImportJobRequestFormProperties>({
			jobId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeleteBatchPredictionJobResult {
	}
	export interface DeleteBatchPredictionJobResultFormProperties {
	}
	export function CreateDeleteBatchPredictionJobResultFormGroup() {
		return new FormGroup<DeleteBatchPredictionJobResultFormProperties>({
		});

	}

	export interface DeleteBatchPredictionJobRequest {

		/** Required */
		jobId: string;
	}
	export interface DeleteBatchPredictionJobRequestFormProperties {

		/** Required */
		jobId: FormControl<string | null | undefined>,
	}
	export function CreateDeleteBatchPredictionJobRequestFormGroup() {
		return new FormGroup<DeleteBatchPredictionJobRequestFormProperties>({
			jobId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeleteDetectorResult {
	}
	export interface DeleteDetectorResultFormProperties {
	}
	export function CreateDeleteDetectorResultFormGroup() {
		return new FormGroup<DeleteDetectorResultFormProperties>({
		});

	}

	export interface DeleteDetectorRequest {

		/** Required */
		detectorId: string;
	}
	export interface DeleteDetectorRequestFormProperties {

		/** Required */
		detectorId: FormControl<string | null | undefined>,
	}
	export function CreateDeleteDetectorRequestFormGroup() {
		return new FormGroup<DeleteDetectorRequestFormProperties>({
			detectorId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ConflictException {
	}
	export interface ConflictExceptionFormProperties {
	}
	export function CreateConflictExceptionFormGroup() {
		return new FormGroup<ConflictExceptionFormProperties>({
		});

	}

	export interface DeleteDetectorVersionResult {
	}
	export interface DeleteDetectorVersionResultFormProperties {
	}
	export function CreateDeleteDetectorVersionResultFormGroup() {
		return new FormGroup<DeleteDetectorVersionResultFormProperties>({
		});

	}

	export interface DeleteDetectorVersionRequest {

		/** Required */
		detectorId: string;

		/** Required */
		detectorVersionId: string;
	}
	export interface DeleteDetectorVersionRequestFormProperties {

		/** Required */
		detectorId: FormControl<string | null | undefined>,

		/** Required */
		detectorVersionId: FormControl<string | null | undefined>,
	}
	export function CreateDeleteDetectorVersionRequestFormGroup() {
		return new FormGroup<DeleteDetectorVersionRequestFormProperties>({
			detectorId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			detectorVersionId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeleteEntityTypeResult {
	}
	export interface DeleteEntityTypeResultFormProperties {
	}
	export function CreateDeleteEntityTypeResultFormGroup() {
		return new FormGroup<DeleteEntityTypeResultFormProperties>({
		});

	}

	export interface DeleteEntityTypeRequest {

		/** Required */
		name: string;
	}
	export interface DeleteEntityTypeRequestFormProperties {

		/** Required */
		name: FormControl<string | null | undefined>,
	}
	export function CreateDeleteEntityTypeRequestFormGroup() {
		return new FormGroup<DeleteEntityTypeRequestFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeleteEventResult {
	}
	export interface DeleteEventResultFormProperties {
	}
	export function CreateDeleteEventResultFormGroup() {
		return new FormGroup<DeleteEventResultFormProperties>({
		});

	}

	export interface DeleteEventRequest {

		/** Required */
		eventId: string;

		/** Required */
		eventTypeName: string;
		deleteAuditHistory?: boolean | null;
	}
	export interface DeleteEventRequestFormProperties {

		/** Required */
		eventId: FormControl<string | null | undefined>,

		/** Required */
		eventTypeName: FormControl<string | null | undefined>,
		deleteAuditHistory: FormControl<boolean | null | undefined>,
	}
	export function CreateDeleteEventRequestFormGroup() {
		return new FormGroup<DeleteEventRequestFormProperties>({
			eventId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			eventTypeName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			deleteAuditHistory: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface DeleteEventTypeResult {
	}
	export interface DeleteEventTypeResultFormProperties {
	}
	export function CreateDeleteEventTypeResultFormGroup() {
		return new FormGroup<DeleteEventTypeResultFormProperties>({
		});

	}

	export interface DeleteEventTypeRequest {

		/** Required */
		name: string;
	}
	export interface DeleteEventTypeRequestFormProperties {

		/** Required */
		name: FormControl<string | null | undefined>,
	}
	export function CreateDeleteEventTypeRequestFormGroup() {
		return new FormGroup<DeleteEventTypeRequestFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeleteEventsByEventTypeResult {
		eventTypeName?: string;
		eventsDeletionStatus?: string;
	}
	export interface DeleteEventsByEventTypeResultFormProperties {
		eventTypeName: FormControl<string | null | undefined>,
		eventsDeletionStatus: FormControl<string | null | undefined>,
	}
	export function CreateDeleteEventsByEventTypeResultFormGroup() {
		return new FormGroup<DeleteEventsByEventTypeResultFormProperties>({
			eventTypeName: new FormControl<string | null | undefined>(undefined),
			eventsDeletionStatus: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DeleteEventsByEventTypeRequest {

		/** Required */
		eventTypeName: string;
	}
	export interface DeleteEventsByEventTypeRequestFormProperties {

		/** Required */
		eventTypeName: FormControl<string | null | undefined>,
	}
	export function CreateDeleteEventsByEventTypeRequestFormGroup() {
		return new FormGroup<DeleteEventsByEventTypeRequestFormProperties>({
			eventTypeName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeleteExternalModelResult {
	}
	export interface DeleteExternalModelResultFormProperties {
	}
	export function CreateDeleteExternalModelResultFormGroup() {
		return new FormGroup<DeleteExternalModelResultFormProperties>({
		});

	}

	export interface DeleteExternalModelRequest {

		/** Required */
		modelEndpoint: string;
	}
	export interface DeleteExternalModelRequestFormProperties {

		/** Required */
		modelEndpoint: FormControl<string | null | undefined>,
	}
	export function CreateDeleteExternalModelRequestFormGroup() {
		return new FormGroup<DeleteExternalModelRequestFormProperties>({
			modelEndpoint: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeleteLabelResult {
	}
	export interface DeleteLabelResultFormProperties {
	}
	export function CreateDeleteLabelResultFormGroup() {
		return new FormGroup<DeleteLabelResultFormProperties>({
		});

	}

	export interface DeleteLabelRequest {

		/** Required */
		name: string;
	}
	export interface DeleteLabelRequestFormProperties {

		/** Required */
		name: FormControl<string | null | undefined>,
	}
	export function CreateDeleteLabelRequestFormGroup() {
		return new FormGroup<DeleteLabelRequestFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeleteListResult {
	}
	export interface DeleteListResultFormProperties {
	}
	export function CreateDeleteListResultFormGroup() {
		return new FormGroup<DeleteListResultFormProperties>({
		});

	}

	export interface DeleteListRequest {

		/** Required */
		name: string;
	}
	export interface DeleteListRequestFormProperties {

		/** Required */
		name: FormControl<string | null | undefined>,
	}
	export function CreateDeleteListRequestFormGroup() {
		return new FormGroup<DeleteListRequestFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeleteModelResult {
	}
	export interface DeleteModelResultFormProperties {
	}
	export function CreateDeleteModelResultFormGroup() {
		return new FormGroup<DeleteModelResultFormProperties>({
		});

	}

	export interface DeleteModelRequest {

		/** Required */
		modelId: string;

		/** Required */
		modelType: ModelTypeEnum;
	}
	export interface DeleteModelRequestFormProperties {

		/** Required */
		modelId: FormControl<string | null | undefined>,

		/** Required */
		modelType: FormControl<ModelTypeEnum | null | undefined>,
	}
	export function CreateDeleteModelRequestFormGroup() {
		return new FormGroup<DeleteModelRequestFormProperties>({
			modelId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			modelType: new FormControl<ModelTypeEnum | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeleteModelVersionResult {
	}
	export interface DeleteModelVersionResultFormProperties {
	}
	export function CreateDeleteModelVersionResultFormGroup() {
		return new FormGroup<DeleteModelVersionResultFormProperties>({
		});

	}

	export interface DeleteModelVersionRequest {

		/** Required */
		modelId: string;

		/** Required */
		modelType: ModelTypeEnum;

		/** Required */
		modelVersionNumber: string;
	}
	export interface DeleteModelVersionRequestFormProperties {

		/** Required */
		modelId: FormControl<string | null | undefined>,

		/** Required */
		modelType: FormControl<ModelTypeEnum | null | undefined>,

		/** Required */
		modelVersionNumber: FormControl<string | null | undefined>,
	}
	export function CreateDeleteModelVersionRequestFormGroup() {
		return new FormGroup<DeleteModelVersionRequestFormProperties>({
			modelId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			modelType: new FormControl<ModelTypeEnum | null | undefined>(undefined, [Validators.required]),
			modelVersionNumber: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeleteOutcomeResult {
	}
	export interface DeleteOutcomeResultFormProperties {
	}
	export function CreateDeleteOutcomeResultFormGroup() {
		return new FormGroup<DeleteOutcomeResultFormProperties>({
		});

	}

	export interface DeleteOutcomeRequest {

		/** Required */
		name: string;
	}
	export interface DeleteOutcomeRequestFormProperties {

		/** Required */
		name: FormControl<string | null | undefined>,
	}
	export function CreateDeleteOutcomeRequestFormGroup() {
		return new FormGroup<DeleteOutcomeRequestFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeleteRuleResult {
	}
	export interface DeleteRuleResultFormProperties {
	}
	export function CreateDeleteRuleResultFormGroup() {
		return new FormGroup<DeleteRuleResultFormProperties>({
		});

	}

	export interface DeleteRuleRequest {

		/**
		 * A rule.
		 * Required
		 */
		rule: Rule;
	}
	export interface DeleteRuleRequestFormProperties {
	}
	export function CreateDeleteRuleRequestFormGroup() {
		return new FormGroup<DeleteRuleRequestFormProperties>({
		});

	}

	export interface DeleteVariableResult {
	}
	export interface DeleteVariableResultFormProperties {
	}
	export function CreateDeleteVariableResultFormGroup() {
		return new FormGroup<DeleteVariableResultFormProperties>({
		});

	}

	export interface DeleteVariableRequest {

		/** Required */
		name: string;
	}
	export interface DeleteVariableRequestFormProperties {

		/** Required */
		name: FormControl<string | null | undefined>,
	}
	export function CreateDeleteVariableRequestFormGroup() {
		return new FormGroup<DeleteVariableRequestFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DescribeDetectorResult {
		detectorId?: string;
		detectorVersionSummaries?: Array<DetectorVersionSummary>;
		nextToken?: string;
		arn?: string;
	}
	export interface DescribeDetectorResultFormProperties {
		detectorId: FormControl<string | null | undefined>,
		nextToken: FormControl<string | null | undefined>,
		arn: FormControl<string | null | undefined>,
	}
	export function CreateDescribeDetectorResultFormGroup() {
		return new FormGroup<DescribeDetectorResultFormProperties>({
			detectorId: new FormControl<string | null | undefined>(undefined),
			nextToken: new FormControl<string | null | undefined>(undefined),
			arn: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The summary of the detector version. */
	export interface DetectorVersionSummary {
		detectorVersionId?: string;
		status?: DetectorVersionStatus;
		description?: string;
		lastUpdatedTime?: string;
	}

	/** The summary of the detector version. */
	export interface DetectorVersionSummaryFormProperties {
		detectorVersionId: FormControl<string | null | undefined>,
		status: FormControl<DetectorVersionStatus | null | undefined>,
		description: FormControl<string | null | undefined>,
		lastUpdatedTime: FormControl<string | null | undefined>,
	}
	export function CreateDetectorVersionSummaryFormGroup() {
		return new FormGroup<DetectorVersionSummaryFormProperties>({
			detectorVersionId: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<DetectorVersionStatus | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			lastUpdatedTime: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeDetectorRequest {

		/** Required */
		detectorId: string;
		nextToken?: string;
		maxResults?: number | null;
	}
	export interface DescribeDetectorRequestFormProperties {

		/** Required */
		detectorId: FormControl<string | null | undefined>,
		nextToken: FormControl<string | null | undefined>,
		maxResults: FormControl<number | null | undefined>,
	}
	export function CreateDescribeDetectorRequestFormGroup() {
		return new FormGroup<DescribeDetectorRequestFormProperties>({
			detectorId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			nextToken: new FormControl<string | null | undefined>(undefined),
			maxResults: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface DescribeModelVersionsResult {
		modelVersionDetails?: Array<ModelVersionDetail>;
		nextToken?: string;
	}
	export interface DescribeModelVersionsResultFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeModelVersionsResultFormGroup() {
		return new FormGroup<DescribeModelVersionsResultFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The details of the model version. */
	export interface ModelVersionDetail {
		modelId?: string;
		modelType?: ModelTypeEnum;
		modelVersionNumber?: string;
		status?: string;
		trainingDataSource?: TrainingDataSourceEnum;
		trainingDataSchema?: TrainingDataSchema;
		externalEventsDetail?: ExternalEventsDetail;
		ingestedEventsDetail?: IngestedEventsDetail;
		trainingResult?: TrainingResult;
		lastUpdatedTime?: string;
		createdTime?: string;
		arn?: string;
		trainingResultV2?: TrainingResultV2;
	}

	/** The details of the model version. */
	export interface ModelVersionDetailFormProperties {
		modelId: FormControl<string | null | undefined>,
		modelType: FormControl<ModelTypeEnum | null | undefined>,
		modelVersionNumber: FormControl<string | null | undefined>,
		status: FormControl<string | null | undefined>,
		trainingDataSource: FormControl<TrainingDataSourceEnum | null | undefined>,
		lastUpdatedTime: FormControl<string | null | undefined>,
		createdTime: FormControl<string | null | undefined>,
		arn: FormControl<string | null | undefined>,
	}
	export function CreateModelVersionDetailFormGroup() {
		return new FormGroup<ModelVersionDetailFormProperties>({
			modelId: new FormControl<string | null | undefined>(undefined),
			modelType: new FormControl<ModelTypeEnum | null | undefined>(undefined),
			modelVersionNumber: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<string | null | undefined>(undefined),
			trainingDataSource: new FormControl<TrainingDataSourceEnum | null | undefined>(undefined),
			lastUpdatedTime: new FormControl<string | null | undefined>(undefined),
			createdTime: new FormControl<string | null | undefined>(undefined),
			arn: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The training result details. */
	export interface TrainingResult {
		dataValidationMetrics?: DataValidationMetrics;
		trainingMetrics?: TrainingMetrics;
		variableImportanceMetrics?: VariableImportanceMetrics;
	}

	/** The training result details. */
	export interface TrainingResultFormProperties {
	}
	export function CreateTrainingResultFormGroup() {
		return new FormGroup<TrainingResultFormProperties>({
		});

	}


	/** The model training data validation metrics. */
	export interface DataValidationMetrics {
		fileLevelMessages?: Array<FileValidationMessage>;
		fieldLevelMessages?: Array<FieldValidationMessage>;
	}

	/** The model training data validation metrics. */
	export interface DataValidationMetricsFormProperties {
	}
	export function CreateDataValidationMetricsFormGroup() {
		return new FormGroup<DataValidationMetricsFormProperties>({
		});

	}


	/** The message details. */
	export interface FileValidationMessage {
		title?: string;
		content?: string;
		type?: string;
	}

	/** The message details. */
	export interface FileValidationMessageFormProperties {
		title: FormControl<string | null | undefined>,
		content: FormControl<string | null | undefined>,
		type: FormControl<string | null | undefined>,
	}
	export function CreateFileValidationMessageFormGroup() {
		return new FormGroup<FileValidationMessageFormProperties>({
			title: new FormControl<string | null | undefined>(undefined),
			content: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The message details. */
	export interface FieldValidationMessage {
		fieldName?: string;
		identifier?: string;
		title?: string;
		content?: string;
		type?: string;
	}

	/** The message details. */
	export interface FieldValidationMessageFormProperties {
		fieldName: FormControl<string | null | undefined>,
		identifier: FormControl<string | null | undefined>,
		title: FormControl<string | null | undefined>,
		content: FormControl<string | null | undefined>,
		type: FormControl<string | null | undefined>,
	}
	export function CreateFieldValidationMessageFormGroup() {
		return new FormGroup<FieldValidationMessageFormProperties>({
			fieldName: new FormControl<string | null | undefined>(undefined),
			identifier: new FormControl<string | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
			content: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The training metric details. */
	export interface TrainingMetrics {
		auc?: number;
		metricDataPoints?: Array<MetricDataPoint>;
	}

	/** The training metric details. */
	export interface TrainingMetricsFormProperties {
		auc: FormControl<number | null | undefined>,
	}
	export function CreateTrainingMetricsFormGroup() {
		return new FormGroup<TrainingMetricsFormProperties>({
			auc: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Model performance metrics data points. */
	export interface MetricDataPoint {
		fpr?: number;
		precision?: number;
		tpr?: number;
		threshold?: number;
	}

	/** Model performance metrics data points. */
	export interface MetricDataPointFormProperties {
		fpr: FormControl<number | null | undefined>,
		precision: FormControl<number | null | undefined>,
		tpr: FormControl<number | null | undefined>,
		threshold: FormControl<number | null | undefined>,
	}
	export function CreateMetricDataPointFormGroup() {
		return new FormGroup<MetricDataPointFormProperties>({
			fpr: new FormControl<number | null | undefined>(undefined),
			precision: new FormControl<number | null | undefined>(undefined),
			tpr: new FormControl<number | null | undefined>(undefined),
			threshold: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** The variable importance metrics details. */
	export interface VariableImportanceMetrics {
		logOddsMetrics?: Array<LogOddsMetric>;
	}

	/** The variable importance metrics details. */
	export interface VariableImportanceMetricsFormProperties {
	}
	export function CreateVariableImportanceMetricsFormGroup() {
		return new FormGroup<VariableImportanceMetricsFormProperties>({
		});

	}


	/** The log odds metric details. */
	export interface LogOddsMetric {

		/** Required */
		variableName: string;

		/** Required */
		variableType: string;

		/** Required */
		variableImportance: number;
	}

	/** The log odds metric details. */
	export interface LogOddsMetricFormProperties {

		/** Required */
		variableName: FormControl<string | null | undefined>,

		/** Required */
		variableType: FormControl<string | null | undefined>,

		/** Required */
		variableImportance: FormControl<number | null | undefined>,
	}
	export function CreateLogOddsMetricFormGroup() {
		return new FormGroup<LogOddsMetricFormProperties>({
			variableName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			variableType: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			variableImportance: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}


	/**  The training result details.  */
	export interface TrainingResultV2 {

		/** The model training data validation metrics. */
		dataValidationMetrics?: DataValidationMetrics;
		trainingMetricsV2?: TrainingMetricsV2;

		/** The variable importance metrics details. */
		variableImportanceMetrics?: VariableImportanceMetrics;
		aggregatedVariablesImportanceMetrics?: AggregatedVariablesImportanceMetrics;
	}

	/**  The training result details.  */
	export interface TrainingResultV2FormProperties {
	}
	export function CreateTrainingResultV2FormGroup() {
		return new FormGroup<TrainingResultV2FormProperties>({
		});

	}


	/**  The training metrics details.  */
	export interface TrainingMetricsV2 {
		ofi?: OFITrainingMetricsValue;
		tfi?: TFITrainingMetricsValue;
		ati?: ATITrainingMetricsValue;
	}

	/**  The training metrics details.  */
	export interface TrainingMetricsV2FormProperties {
	}
	export function CreateTrainingMetricsV2FormGroup() {
		return new FormGroup<TrainingMetricsV2FormProperties>({
		});

	}


	/**  The Online Fraud Insights (OFI) model training metric details.  */
	export interface OFITrainingMetricsValue {
		metricDataPoints?: Array<OFIMetricDataPoint>;
		modelPerformance?: OFIModelPerformance;
	}

	/**  The Online Fraud Insights (OFI) model training metric details.  */
	export interface OFITrainingMetricsValueFormProperties {
	}
	export function CreateOFITrainingMetricsValueFormGroup() {
		return new FormGroup<OFITrainingMetricsValueFormProperties>({
		});

	}


	/**  The Online Fraud Insights (OFI) model performance metrics data points.  */
	export interface OFIMetricDataPoint {
		fpr?: number;
		precision?: number;
		tpr?: number;
		threshold?: number;
	}

	/**  The Online Fraud Insights (OFI) model performance metrics data points.  */
	export interface OFIMetricDataPointFormProperties {
		fpr: FormControl<number | null | undefined>,
		precision: FormControl<number | null | undefined>,
		tpr: FormControl<number | null | undefined>,
		threshold: FormControl<number | null | undefined>,
	}
	export function CreateOFIMetricDataPointFormGroup() {
		return new FormGroup<OFIMetricDataPointFormProperties>({
			fpr: new FormControl<number | null | undefined>(undefined),
			precision: new FormControl<number | null | undefined>(undefined),
			tpr: new FormControl<number | null | undefined>(undefined),
			threshold: new FormControl<number | null | undefined>(undefined),
		});

	}


	/**  The Online Fraud Insights (OFI) model performance score.  */
	export interface OFIModelPerformance {
		auc?: number;
		uncertaintyRange?: UncertaintyRange;
	}

	/**  The Online Fraud Insights (OFI) model performance score.  */
	export interface OFIModelPerformanceFormProperties {
		auc: FormControl<number | null | undefined>,
	}
	export function CreateOFIModelPerformanceFormGroup() {
		return new FormGroup<OFIModelPerformanceFormProperties>({
			auc: new FormControl<number | null | undefined>(undefined),
		});

	}


	/**  Range of area under curve (auc) expected from the model. A range greater than 0.1 indicates higher model uncertainity. A range is the difference between upper and lower bound of auc.  */
	export interface UncertaintyRange {

		/** Required */
		lowerBoundValue: number;

		/** Required */
		upperBoundValue: number;
	}

	/**  Range of area under curve (auc) expected from the model. A range greater than 0.1 indicates higher model uncertainity. A range is the difference between upper and lower bound of auc.  */
	export interface UncertaintyRangeFormProperties {

		/** Required */
		lowerBoundValue: FormControl<number | null | undefined>,

		/** Required */
		upperBoundValue: FormControl<number | null | undefined>,
	}
	export function CreateUncertaintyRangeFormGroup() {
		return new FormGroup<UncertaintyRangeFormProperties>({
			lowerBoundValue: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			upperBoundValue: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}


	/**  The Transaction Fraud Insights (TFI) model training metric details.  */
	export interface TFITrainingMetricsValue {
		metricDataPoints?: Array<TFIMetricDataPoint>;
		modelPerformance?: TFIModelPerformance;
	}

	/**  The Transaction Fraud Insights (TFI) model training metric details.  */
	export interface TFITrainingMetricsValueFormProperties {
	}
	export function CreateTFITrainingMetricsValueFormGroup() {
		return new FormGroup<TFITrainingMetricsValueFormProperties>({
		});

	}


	/**  The performance metrics data points for Transaction Fraud Insights (TFI) model.  */
	export interface TFIMetricDataPoint {
		fpr?: number;
		precision?: number;
		tpr?: number;
		threshold?: number;
	}

	/**  The performance metrics data points for Transaction Fraud Insights (TFI) model.  */
	export interface TFIMetricDataPointFormProperties {
		fpr: FormControl<number | null | undefined>,
		precision: FormControl<number | null | undefined>,
		tpr: FormControl<number | null | undefined>,
		threshold: FormControl<number | null | undefined>,
	}
	export function CreateTFIMetricDataPointFormGroup() {
		return new FormGroup<TFIMetricDataPointFormProperties>({
			fpr: new FormControl<number | null | undefined>(undefined),
			precision: new FormControl<number | null | undefined>(undefined),
			tpr: new FormControl<number | null | undefined>(undefined),
			threshold: new FormControl<number | null | undefined>(undefined),
		});

	}


	/**  The Transaction Fraud Insights (TFI) model performance score.  */
	export interface TFIModelPerformance {
		auc?: number;
		uncertaintyRange?: UncertaintyRange;
	}

	/**  The Transaction Fraud Insights (TFI) model performance score.  */
	export interface TFIModelPerformanceFormProperties {
		auc: FormControl<number | null | undefined>,
	}
	export function CreateTFIModelPerformanceFormGroup() {
		return new FormGroup<TFIModelPerformanceFormProperties>({
			auc: new FormControl<number | null | undefined>(undefined),
		});

	}


	/**  The Account Takeover Insights (ATI) model training metric details.  */
	export interface ATITrainingMetricsValue {
		metricDataPoints?: Array<ATIMetricDataPoint>;
		modelPerformance?: ATIModelPerformance;
	}

	/**  The Account Takeover Insights (ATI) model training metric details.  */
	export interface ATITrainingMetricsValueFormProperties {
	}
	export function CreateATITrainingMetricsValueFormGroup() {
		return new FormGroup<ATITrainingMetricsValueFormProperties>({
		});

	}


	/**  The Account Takeover Insights (ATI) model performance metrics data points.  */
	export interface ATIMetricDataPoint {
		cr?: number;
		adr?: number;
		threshold?: number;
		atodr?: number;
	}

	/**  The Account Takeover Insights (ATI) model performance metrics data points.  */
	export interface ATIMetricDataPointFormProperties {
		cr: FormControl<number | null | undefined>,
		adr: FormControl<number | null | undefined>,
		threshold: FormControl<number | null | undefined>,
		atodr: FormControl<number | null | undefined>,
	}
	export function CreateATIMetricDataPointFormGroup() {
		return new FormGroup<ATIMetricDataPointFormProperties>({
			cr: new FormControl<number | null | undefined>(undefined),
			adr: new FormControl<number | null | undefined>(undefined),
			threshold: new FormControl<number | null | undefined>(undefined),
			atodr: new FormControl<number | null | undefined>(undefined),
		});

	}


	/**  The Account Takeover Insights (ATI) model performance score.  */
	export interface ATIModelPerformance {
		asi?: number;
	}

	/**  The Account Takeover Insights (ATI) model performance score.  */
	export interface ATIModelPerformanceFormProperties {
		asi: FormControl<number | null | undefined>,
	}
	export function CreateATIModelPerformanceFormGroup() {
		return new FormGroup<ATIModelPerformanceFormProperties>({
			asi: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** <p>The details of the relative importance of the aggregated variables.</p> <p>Account Takeover Insights (ATI) model uses event variables from the login data you provide to continuously calculate a set of variables (aggregated variables) based on historical events. For example, your ATI model might calculate the number of times an user has logged in using the same IP address. In this case, event variables used to derive the aggregated variables are <code>IP address</code> and <code>user</code>.</p> */
	export interface AggregatedVariablesImportanceMetrics {
		logOddsMetrics?: Array<AggregatedLogOddsMetric>;
	}

	/** <p>The details of the relative importance of the aggregated variables.</p> <p>Account Takeover Insights (ATI) model uses event variables from the login data you provide to continuously calculate a set of variables (aggregated variables) based on historical events. For example, your ATI model might calculate the number of times an user has logged in using the same IP address. In this case, event variables used to derive the aggregated variables are <code>IP address</code> and <code>user</code>.</p> */
	export interface AggregatedVariablesImportanceMetricsFormProperties {
	}
	export function CreateAggregatedVariablesImportanceMetricsFormGroup() {
		return new FormGroup<AggregatedVariablesImportanceMetricsFormProperties>({
		});

	}


	/** <p>The log odds metric details.</p> <p>Account Takeover Insights (ATI) model uses event variables from the login data you provide to continuously calculate a set of variables (aggregated variables) based on historical events. For example, your ATI model might calculate the number of times an user has logged in using the same IP address. In this case, event variables used to derive the aggregated variables are <code>IP address</code> and <code>user</code>.</p> */
	export interface AggregatedLogOddsMetric {

		/** Required */
		variableNames: Array<string>;

		/** Required */
		aggregatedVariablesImportance: number;
	}

	/** <p>The log odds metric details.</p> <p>Account Takeover Insights (ATI) model uses event variables from the login data you provide to continuously calculate a set of variables (aggregated variables) based on historical events. For example, your ATI model might calculate the number of times an user has logged in using the same IP address. In this case, event variables used to derive the aggregated variables are <code>IP address</code> and <code>user</code>.</p> */
	export interface AggregatedLogOddsMetricFormProperties {

		/** Required */
		aggregatedVariablesImportance: FormControl<number | null | undefined>,
	}
	export function CreateAggregatedLogOddsMetricFormGroup() {
		return new FormGroup<AggregatedLogOddsMetricFormProperties>({
			aggregatedVariablesImportance: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DescribeModelVersionsRequest {
		modelId?: string;
		modelVersionNumber?: string;
		modelType?: ModelTypeEnum;
		nextToken?: string;
		maxResults?: number | null;
	}
	export interface DescribeModelVersionsRequestFormProperties {
		modelId: FormControl<string | null | undefined>,
		modelVersionNumber: FormControl<string | null | undefined>,
		modelType: FormControl<ModelTypeEnum | null | undefined>,
		nextToken: FormControl<string | null | undefined>,
		maxResults: FormControl<number | null | undefined>,
	}
	export function CreateDescribeModelVersionsRequestFormGroup() {
		return new FormGroup<DescribeModelVersionsRequestFormProperties>({
			modelId: new FormControl<string | null | undefined>(undefined),
			modelVersionNumber: new FormControl<string | null | undefined>(undefined),
			modelType: new FormControl<ModelTypeEnum | null | undefined>(undefined),
			nextToken: new FormControl<string | null | undefined>(undefined),
			maxResults: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface GetBatchImportJobsResult {
		batchImports?: Array<BatchImport>;
		nextToken?: string;
	}
	export interface GetBatchImportJobsResultFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateGetBatchImportJobsResultFormGroup() {
		return new FormGroup<GetBatchImportJobsResultFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The batch import job details. */
	export interface BatchImport {
		jobId?: string;
		status?: AsyncJobStatus;
		failureReason?: string;
		startTime?: string;
		completionTime?: string;
		inputPath?: string;
		outputPath?: string;
		eventTypeName?: string;
		iamRoleArn?: string;
		arn?: string;
		processedRecordsCount?: number | null;
		failedRecordsCount?: number | null;
		totalRecordsCount?: number | null;
	}

	/** The batch import job details. */
	export interface BatchImportFormProperties {
		jobId: FormControl<string | null | undefined>,
		status: FormControl<AsyncJobStatus | null | undefined>,
		failureReason: FormControl<string | null | undefined>,
		startTime: FormControl<string | null | undefined>,
		completionTime: FormControl<string | null | undefined>,
		inputPath: FormControl<string | null | undefined>,
		outputPath: FormControl<string | null | undefined>,
		eventTypeName: FormControl<string | null | undefined>,
		iamRoleArn: FormControl<string | null | undefined>,
		arn: FormControl<string | null | undefined>,
		processedRecordsCount: FormControl<number | null | undefined>,
		failedRecordsCount: FormControl<number | null | undefined>,
		totalRecordsCount: FormControl<number | null | undefined>,
	}
	export function CreateBatchImportFormGroup() {
		return new FormGroup<BatchImportFormProperties>({
			jobId: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<AsyncJobStatus | null | undefined>(undefined),
			failureReason: new FormControl<string | null | undefined>(undefined),
			startTime: new FormControl<string | null | undefined>(undefined),
			completionTime: new FormControl<string | null | undefined>(undefined),
			inputPath: new FormControl<string | null | undefined>(undefined),
			outputPath: new FormControl<string | null | undefined>(undefined),
			eventTypeName: new FormControl<string | null | undefined>(undefined),
			iamRoleArn: new FormControl<string | null | undefined>(undefined),
			arn: new FormControl<string | null | undefined>(undefined),
			processedRecordsCount: new FormControl<number | null | undefined>(undefined),
			failedRecordsCount: new FormControl<number | null | undefined>(undefined),
			totalRecordsCount: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum AsyncJobStatus { IN_PROGRESS_INITIALIZING = 'IN_PROGRESS_INITIALIZING', IN_PROGRESS = 'IN_PROGRESS', CANCEL_IN_PROGRESS = 'CANCEL_IN_PROGRESS', CANCELED = 'CANCELED', COMPLETE = 'COMPLETE', FAILED = 'FAILED' }

	export interface GetBatchImportJobsRequest {
		jobId?: string;
		maxResults?: number | null;
		nextToken?: string;
	}
	export interface GetBatchImportJobsRequestFormProperties {
		jobId: FormControl<string | null | undefined>,
		maxResults: FormControl<number | null | undefined>,
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateGetBatchImportJobsRequestFormGroup() {
		return new FormGroup<GetBatchImportJobsRequestFormProperties>({
			jobId: new FormControl<string | null | undefined>(undefined),
			maxResults: new FormControl<number | null | undefined>(undefined),
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetBatchPredictionJobsResult {
		batchPredictions?: Array<BatchPrediction>;
		nextToken?: string;
	}
	export interface GetBatchPredictionJobsResultFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateGetBatchPredictionJobsResultFormGroup() {
		return new FormGroup<GetBatchPredictionJobsResultFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The batch prediction details. */
	export interface BatchPrediction {
		jobId?: string;
		status?: AsyncJobStatus;
		failureReason?: string;
		startTime?: string;
		completionTime?: string;
		lastHeartbeatTime?: string;
		inputPath?: string;
		outputPath?: string;
		eventTypeName?: string;
		detectorName?: string;
		detectorVersion?: string;
		iamRoleArn?: string;
		arn?: string;
		processedRecordsCount?: number | null;
		totalRecordsCount?: number | null;
	}

	/** The batch prediction details. */
	export interface BatchPredictionFormProperties {
		jobId: FormControl<string | null | undefined>,
		status: FormControl<AsyncJobStatus | null | undefined>,
		failureReason: FormControl<string | null | undefined>,
		startTime: FormControl<string | null | undefined>,
		completionTime: FormControl<string | null | undefined>,
		lastHeartbeatTime: FormControl<string | null | undefined>,
		inputPath: FormControl<string | null | undefined>,
		outputPath: FormControl<string | null | undefined>,
		eventTypeName: FormControl<string | null | undefined>,
		detectorName: FormControl<string | null | undefined>,
		detectorVersion: FormControl<string | null | undefined>,
		iamRoleArn: FormControl<string | null | undefined>,
		arn: FormControl<string | null | undefined>,
		processedRecordsCount: FormControl<number | null | undefined>,
		totalRecordsCount: FormControl<number | null | undefined>,
	}
	export function CreateBatchPredictionFormGroup() {
		return new FormGroup<BatchPredictionFormProperties>({
			jobId: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<AsyncJobStatus | null | undefined>(undefined),
			failureReason: new FormControl<string | null | undefined>(undefined),
			startTime: new FormControl<string | null | undefined>(undefined),
			completionTime: new FormControl<string | null | undefined>(undefined),
			lastHeartbeatTime: new FormControl<string | null | undefined>(undefined),
			inputPath: new FormControl<string | null | undefined>(undefined),
			outputPath: new FormControl<string | null | undefined>(undefined),
			eventTypeName: new FormControl<string | null | undefined>(undefined),
			detectorName: new FormControl<string | null | undefined>(undefined),
			detectorVersion: new FormControl<string | null | undefined>(undefined),
			iamRoleArn: new FormControl<string | null | undefined>(undefined),
			arn: new FormControl<string | null | undefined>(undefined),
			processedRecordsCount: new FormControl<number | null | undefined>(undefined),
			totalRecordsCount: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface GetBatchPredictionJobsRequest {
		jobId?: string;
		maxResults?: number | null;
		nextToken?: string;
	}
	export interface GetBatchPredictionJobsRequestFormProperties {
		jobId: FormControl<string | null | undefined>,
		maxResults: FormControl<number | null | undefined>,
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateGetBatchPredictionJobsRequestFormGroup() {
		return new FormGroup<GetBatchPredictionJobsRequestFormProperties>({
			jobId: new FormControl<string | null | undefined>(undefined),
			maxResults: new FormControl<number | null | undefined>(undefined),
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetDeleteEventsByEventTypeStatusResult {
		eventTypeName?: string;
		eventsDeletionStatus?: AsyncJobStatus;
	}
	export interface GetDeleteEventsByEventTypeStatusResultFormProperties {
		eventTypeName: FormControl<string | null | undefined>,
		eventsDeletionStatus: FormControl<AsyncJobStatus | null | undefined>,
	}
	export function CreateGetDeleteEventsByEventTypeStatusResultFormGroup() {
		return new FormGroup<GetDeleteEventsByEventTypeStatusResultFormProperties>({
			eventTypeName: new FormControl<string | null | undefined>(undefined),
			eventsDeletionStatus: new FormControl<AsyncJobStatus | null | undefined>(undefined),
		});

	}

	export interface GetDeleteEventsByEventTypeStatusRequest {

		/** Required */
		eventTypeName: string;
	}
	export interface GetDeleteEventsByEventTypeStatusRequestFormProperties {

		/** Required */
		eventTypeName: FormControl<string | null | undefined>,
	}
	export function CreateGetDeleteEventsByEventTypeStatusRequestFormGroup() {
		return new FormGroup<GetDeleteEventsByEventTypeStatusRequestFormProperties>({
			eventTypeName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetDetectorVersionResult {
		detectorId?: string;
		detectorVersionId?: string;
		description?: string;
		externalModelEndpoints?: Array<string>;
		modelVersions?: Array<ModelVersion>;
		rules?: Array<Rule>;
		status?: DetectorVersionStatus;
		lastUpdatedTime?: string;
		createdTime?: string;
		ruleExecutionMode?: RuleExecutionMode;
		arn?: string;
	}
	export interface GetDetectorVersionResultFormProperties {
		detectorId: FormControl<string | null | undefined>,
		detectorVersionId: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,
		status: FormControl<DetectorVersionStatus | null | undefined>,
		lastUpdatedTime: FormControl<string | null | undefined>,
		createdTime: FormControl<string | null | undefined>,
		ruleExecutionMode: FormControl<RuleExecutionMode | null | undefined>,
		arn: FormControl<string | null | undefined>,
	}
	export function CreateGetDetectorVersionResultFormGroup() {
		return new FormGroup<GetDetectorVersionResultFormProperties>({
			detectorId: new FormControl<string | null | undefined>(undefined),
			detectorVersionId: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<DetectorVersionStatus | null | undefined>(undefined),
			lastUpdatedTime: new FormControl<string | null | undefined>(undefined),
			createdTime: new FormControl<string | null | undefined>(undefined),
			ruleExecutionMode: new FormControl<RuleExecutionMode | null | undefined>(undefined),
			arn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetDetectorVersionRequest {

		/** Required */
		detectorId: string;

		/** Required */
		detectorVersionId: string;
	}
	export interface GetDetectorVersionRequestFormProperties {

		/** Required */
		detectorId: FormControl<string | null | undefined>,

		/** Required */
		detectorVersionId: FormControl<string | null | undefined>,
	}
	export function CreateGetDetectorVersionRequestFormGroup() {
		return new FormGroup<GetDetectorVersionRequestFormProperties>({
			detectorId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			detectorVersionId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetDetectorsResult {
		detectors?: Array<Detector>;
		nextToken?: string;
	}
	export interface GetDetectorsResultFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateGetDetectorsResultFormGroup() {
		return new FormGroup<GetDetectorsResultFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The detector. */
	export interface Detector {
		detectorId?: string;
		description?: string;
		eventTypeName?: string;
		lastUpdatedTime?: string;
		createdTime?: string;
		arn?: string;
	}

	/** The detector. */
	export interface DetectorFormProperties {
		detectorId: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,
		eventTypeName: FormControl<string | null | undefined>,
		lastUpdatedTime: FormControl<string | null | undefined>,
		createdTime: FormControl<string | null | undefined>,
		arn: FormControl<string | null | undefined>,
	}
	export function CreateDetectorFormGroup() {
		return new FormGroup<DetectorFormProperties>({
			detectorId: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			eventTypeName: new FormControl<string | null | undefined>(undefined),
			lastUpdatedTime: new FormControl<string | null | undefined>(undefined),
			createdTime: new FormControl<string | null | undefined>(undefined),
			arn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetDetectorsRequest {
		detectorId?: string;
		nextToken?: string;
		maxResults?: number | null;
	}
	export interface GetDetectorsRequestFormProperties {
		detectorId: FormControl<string | null | undefined>,
		nextToken: FormControl<string | null | undefined>,
		maxResults: FormControl<number | null | undefined>,
	}
	export function CreateGetDetectorsRequestFormGroup() {
		return new FormGroup<GetDetectorsRequestFormProperties>({
			detectorId: new FormControl<string | null | undefined>(undefined),
			nextToken: new FormControl<string | null | undefined>(undefined),
			maxResults: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface GetEntityTypesResult {
		entityTypes?: Array<EntityType>;
		nextToken?: string;
	}
	export interface GetEntityTypesResultFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateGetEntityTypesResultFormGroup() {
		return new FormGroup<GetEntityTypesResultFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The entity type details. */
	export interface EntityType {
		name?: string;
		description?: string;
		lastUpdatedTime?: string;
		createdTime?: string;
		arn?: string;
	}

	/** The entity type details. */
	export interface EntityTypeFormProperties {
		name: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,
		lastUpdatedTime: FormControl<string | null | undefined>,
		createdTime: FormControl<string | null | undefined>,
		arn: FormControl<string | null | undefined>,
	}
	export function CreateEntityTypeFormGroup() {
		return new FormGroup<EntityTypeFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			lastUpdatedTime: new FormControl<string | null | undefined>(undefined),
			createdTime: new FormControl<string | null | undefined>(undefined),
			arn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetEntityTypesRequest {
		name?: string;
		nextToken?: string;
		maxResults?: number | null;
	}
	export interface GetEntityTypesRequestFormProperties {
		name: FormControl<string | null | undefined>,
		nextToken: FormControl<string | null | undefined>,
		maxResults: FormControl<number | null | undefined>,
	}
	export function CreateGetEntityTypesRequestFormGroup() {
		return new FormGroup<GetEntityTypesRequestFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			nextToken: new FormControl<string | null | undefined>(undefined),
			maxResults: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface GetEventResult {
		event?: Event;
	}
	export interface GetEventResultFormProperties {
	}
	export function CreateGetEventResultFormGroup() {
		return new FormGroup<GetEventResultFormProperties>({
		});

	}


	/** The event details. */
	export interface Event {
		eventId?: string;
		eventTypeName?: string;
		eventTimestamp?: string;
		eventVariables?: EventAttributeMap;
		currentLabel?: string;
		labelTimestamp?: string;
		entities?: Array<Entity>;
	}

	/** The event details. */
	export interface EventFormProperties {
		eventId: FormControl<string | null | undefined>,
		eventTypeName: FormControl<string | null | undefined>,
		eventTimestamp: FormControl<string | null | undefined>,
		currentLabel: FormControl<string | null | undefined>,
		labelTimestamp: FormControl<string | null | undefined>,
	}
	export function CreateEventFormGroup() {
		return new FormGroup<EventFormProperties>({
			eventId: new FormControl<string | null | undefined>(undefined),
			eventTypeName: new FormControl<string | null | undefined>(undefined),
			eventTimestamp: new FormControl<string | null | undefined>(undefined),
			currentLabel: new FormControl<string | null | undefined>(undefined),
			labelTimestamp: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface EventAttributeMap {
	}
	export interface EventAttributeMapFormProperties {
	}
	export function CreateEventAttributeMapFormGroup() {
		return new FormGroup<EventAttributeMapFormProperties>({
		});

	}


	/** The entity details.  */
	export interface Entity {

		/** Required */
		entityType: string;

		/** Required */
		entityId: string;
	}

	/** The entity details.  */
	export interface EntityFormProperties {

		/** Required */
		entityType: FormControl<string | null | undefined>,

		/** Required */
		entityId: FormControl<string | null | undefined>,
	}
	export function CreateEntityFormGroup() {
		return new FormGroup<EntityFormProperties>({
			entityType: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			entityId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetEventRequest {

		/** Required */
		eventId: string;

		/** Required */
		eventTypeName: string;
	}
	export interface GetEventRequestFormProperties {

		/** Required */
		eventId: FormControl<string | null | undefined>,

		/** Required */
		eventTypeName: FormControl<string | null | undefined>,
	}
	export function CreateGetEventRequestFormGroup() {
		return new FormGroup<GetEventRequestFormProperties>({
			eventId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			eventTypeName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetEventPredictionResult {
		modelScores?: Array<ModelScores>;
		ruleResults?: Array<RuleResult>;
		externalModelOutputs?: Array<ExternalModelOutputs>;
	}
	export interface GetEventPredictionResultFormProperties {
	}
	export function CreateGetEventPredictionResultFormGroup() {
		return new FormGroup<GetEventPredictionResultFormProperties>({
		});

	}


	/** The fraud prediction scores. */
	export interface ModelScores {
		modelVersion?: ModelVersion;
		scores?: ModelPredictionMap;
	}

	/** The fraud prediction scores. */
	export interface ModelScoresFormProperties {
	}
	export function CreateModelScoresFormGroup() {
		return new FormGroup<ModelScoresFormProperties>({
		});

	}

	export interface ModelPredictionMap {
	}
	export interface ModelPredictionMapFormProperties {
	}
	export function CreateModelPredictionMapFormGroup() {
		return new FormGroup<ModelPredictionMapFormProperties>({
		});

	}


	/** The rule results. */
	export interface RuleResult {
		ruleId?: string;
		outcomes?: Array<string>;
	}

	/** The rule results. */
	export interface RuleResultFormProperties {
		ruleId: FormControl<string | null | undefined>,
	}
	export function CreateRuleResultFormGroup() {
		return new FormGroup<RuleResultFormProperties>({
			ruleId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The fraud prediction scores from Amazon SageMaker model. */
	export interface ExternalModelOutputs {
		externalModel?: ExternalModelSummary;
		outputs?: ExternalModelPredictionMap;
	}

	/** The fraud prediction scores from Amazon SageMaker model. */
	export interface ExternalModelOutputsFormProperties {
	}
	export function CreateExternalModelOutputsFormGroup() {
		return new FormGroup<ExternalModelOutputsFormProperties>({
		});

	}


	/** The Amazon SageMaker model. */
	export interface ExternalModelSummary {
		modelEndpoint?: string;
		modelSource?: ModelSource;
	}

	/** The Amazon SageMaker model. */
	export interface ExternalModelSummaryFormProperties {
		modelEndpoint: FormControl<string | null | undefined>,
		modelSource: FormControl<ModelSource | null | undefined>,
	}
	export function CreateExternalModelSummaryFormGroup() {
		return new FormGroup<ExternalModelSummaryFormProperties>({
			modelEndpoint: new FormControl<string | null | undefined>(undefined),
			modelSource: new FormControl<ModelSource | null | undefined>(undefined),
		});

	}

	export enum ModelSource { SAGEMAKER = 'SAGEMAKER' }

	export interface ExternalModelPredictionMap {
	}
	export interface ExternalModelPredictionMapFormProperties {
	}
	export function CreateExternalModelPredictionMapFormGroup() {
		return new FormGroup<ExternalModelPredictionMapFormProperties>({
		});

	}

	export interface GetEventPredictionRequest {

		/** Required */
		detectorId: string;
		detectorVersionId?: string;

		/** Required */
		eventId: string;

		/** Required */
		eventTypeName: string;

		/** Required */
		entities: Array<Entity>;

		/** Required */
		eventTimestamp: string;

		/** Required */
		eventVariables: EventVariableMap;
		externalModelEndpointDataBlobs?: ExternalModelEndpointDataBlobMap;
	}
	export interface GetEventPredictionRequestFormProperties {

		/** Required */
		detectorId: FormControl<string | null | undefined>,
		detectorVersionId: FormControl<string | null | undefined>,

		/** Required */
		eventId: FormControl<string | null | undefined>,

		/** Required */
		eventTypeName: FormControl<string | null | undefined>,

		/** Required */
		eventTimestamp: FormControl<string | null | undefined>,
	}
	export function CreateGetEventPredictionRequestFormGroup() {
		return new FormGroup<GetEventPredictionRequestFormProperties>({
			detectorId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			detectorVersionId: new FormControl<string | null | undefined>(undefined),
			eventId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			eventTypeName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			eventTimestamp: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface EventVariableMap {
	}
	export interface EventVariableMapFormProperties {
	}
	export function CreateEventVariableMapFormGroup() {
		return new FormGroup<EventVariableMapFormProperties>({
		});

	}

	export interface ExternalModelEndpointDataBlobMap {
	}
	export interface ExternalModelEndpointDataBlobMapFormProperties {
	}
	export function CreateExternalModelEndpointDataBlobMapFormGroup() {
		return new FormGroup<ExternalModelEndpointDataBlobMapFormProperties>({
		});

	}

	export interface ResourceUnavailableException {
	}
	export interface ResourceUnavailableExceptionFormProperties {
	}
	export function CreateResourceUnavailableExceptionFormGroup() {
		return new FormGroup<ResourceUnavailableExceptionFormProperties>({
		});

	}

	export interface GetEventPredictionMetadataResult {
		eventId?: string;
		eventTypeName?: string;
		entityId?: string;
		entityType?: string;
		eventTimestamp?: string;
		detectorId?: string;
		detectorVersionId?: string;
		detectorVersionStatus?: string;
		eventVariables?: Array<EventVariableSummary>;
		rules?: Array<EvaluatedRule>;
		ruleExecutionMode?: RuleExecutionMode;
		outcomes?: Array<string>;
		evaluatedModelVersions?: Array<EvaluatedModelVersion>;
		evaluatedExternalModels?: Array<EvaluatedExternalModel>;
		predictionTimestamp?: string;
	}
	export interface GetEventPredictionMetadataResultFormProperties {
		eventId: FormControl<string | null | undefined>,
		eventTypeName: FormControl<string | null | undefined>,
		entityId: FormControl<string | null | undefined>,
		entityType: FormControl<string | null | undefined>,
		eventTimestamp: FormControl<string | null | undefined>,
		detectorId: FormControl<string | null | undefined>,
		detectorVersionId: FormControl<string | null | undefined>,
		detectorVersionStatus: FormControl<string | null | undefined>,
		ruleExecutionMode: FormControl<RuleExecutionMode | null | undefined>,
		predictionTimestamp: FormControl<string | null | undefined>,
	}
	export function CreateGetEventPredictionMetadataResultFormGroup() {
		return new FormGroup<GetEventPredictionMetadataResultFormProperties>({
			eventId: new FormControl<string | null | undefined>(undefined),
			eventTypeName: new FormControl<string | null | undefined>(undefined),
			entityId: new FormControl<string | null | undefined>(undefined),
			entityType: new FormControl<string | null | undefined>(undefined),
			eventTimestamp: new FormControl<string | null | undefined>(undefined),
			detectorId: new FormControl<string | null | undefined>(undefined),
			detectorVersionId: new FormControl<string | null | undefined>(undefined),
			detectorVersionStatus: new FormControl<string | null | undefined>(undefined),
			ruleExecutionMode: new FormControl<RuleExecutionMode | null | undefined>(undefined),
			predictionTimestamp: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**  Information about the summary of an event variable that was evaluated for generating prediction.  */
	export interface EventVariableSummary {
		name?: string;
		value?: string;
		source?: string;
	}

	/**  Information about the summary of an event variable that was evaluated for generating prediction.  */
	export interface EventVariableSummaryFormProperties {
		name: FormControl<string | null | undefined>,
		value: FormControl<string | null | undefined>,
		source: FormControl<string | null | undefined>,
	}
	export function CreateEventVariableSummaryFormGroup() {
		return new FormGroup<EventVariableSummaryFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
			source: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**  The details of the rule used for evaluating variable values.  */
	export interface EvaluatedRule {
		ruleId?: string;
		ruleVersion?: string;
		expression?: string;
		expressionWithValues?: string;
		outcomes?: Array<string>;
		evaluated?: boolean | null;
		matched?: boolean | null;
	}

	/**  The details of the rule used for evaluating variable values.  */
	export interface EvaluatedRuleFormProperties {
		ruleId: FormControl<string | null | undefined>,
		ruleVersion: FormControl<string | null | undefined>,
		expression: FormControl<string | null | undefined>,
		expressionWithValues: FormControl<string | null | undefined>,
		evaluated: FormControl<boolean | null | undefined>,
		matched: FormControl<boolean | null | undefined>,
	}
	export function CreateEvaluatedRuleFormGroup() {
		return new FormGroup<EvaluatedRuleFormProperties>({
			ruleId: new FormControl<string | null | undefined>(undefined),
			ruleVersion: new FormControl<string | null | undefined>(undefined),
			expression: new FormControl<string | null | undefined>(undefined),
			expressionWithValues: new FormControl<string | null | undefined>(undefined),
			evaluated: new FormControl<boolean | null | undefined>(undefined),
			matched: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/**  The model version evaluated for generating prediction.  */
	export interface EvaluatedModelVersion {
		modelId?: string;
		modelVersion?: string;
		modelType?: string;
		evaluations?: Array<ModelVersionEvaluation>;
	}

	/**  The model version evaluated for generating prediction.  */
	export interface EvaluatedModelVersionFormProperties {
		modelId: FormControl<string | null | undefined>,
		modelVersion: FormControl<string | null | undefined>,
		modelType: FormControl<string | null | undefined>,
	}
	export function CreateEvaluatedModelVersionFormGroup() {
		return new FormGroup<EvaluatedModelVersionFormProperties>({
			modelId: new FormControl<string | null | undefined>(undefined),
			modelVersion: new FormControl<string | null | undefined>(undefined),
			modelType: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**  The model version evalutions.  */
	export interface ModelVersionEvaluation {
		outputVariableName?: string;
		evaluationScore?: string;
		predictionExplanations?: PredictionExplanations;
	}

	/**  The model version evalutions.  */
	export interface ModelVersionEvaluationFormProperties {
		outputVariableName: FormControl<string | null | undefined>,
		evaluationScore: FormControl<string | null | undefined>,
	}
	export function CreateModelVersionEvaluationFormGroup() {
		return new FormGroup<ModelVersionEvaluationFormProperties>({
			outputVariableName: new FormControl<string | null | undefined>(undefined),
			evaluationScore: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**  The prediction explanations that provide insight into how each event variable impacted the model version's fraud prediction score.  */
	export interface PredictionExplanations {
		variableImpactExplanations?: Array<VariableImpactExplanation>;
		aggregatedVariablesImpactExplanations?: Array<AggregatedVariablesImpactExplanation>;
	}

	/**  The prediction explanations that provide insight into how each event variable impacted the model version's fraud prediction score.  */
	export interface PredictionExplanationsFormProperties {
	}
	export function CreatePredictionExplanationsFormGroup() {
		return new FormGroup<PredictionExplanationsFormProperties>({
		});

	}


	/**  The details of the event variable's impact on the prediction score.  */
	export interface VariableImpactExplanation {
		eventVariableName?: string;
		relativeImpact?: string;
		logOddsImpact?: number;
	}

	/**  The details of the event variable's impact on the prediction score.  */
	export interface VariableImpactExplanationFormProperties {
		eventVariableName: FormControl<string | null | undefined>,
		relativeImpact: FormControl<string | null | undefined>,
		logOddsImpact: FormControl<number | null | undefined>,
	}
	export function CreateVariableImpactExplanationFormGroup() {
		return new FormGroup<VariableImpactExplanationFormProperties>({
			eventVariableName: new FormControl<string | null | undefined>(undefined),
			relativeImpact: new FormControl<string | null | undefined>(undefined),
			logOddsImpact: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** <p> The details of the impact of aggregated variables on the prediction score. </p> <p>Account Takeover Insights (ATI) model uses the login data you provide to continuously calculate a set of variables (aggregated variables) based on historical events. For example, the model might calculate the number of times an user has logged in using the same IP address. In this case, event variables used to derive the aggregated variables are <code>IP address</code> and <code>user</code>.</p> */
	export interface AggregatedVariablesImpactExplanation {
		eventVariableNames?: Array<string>;
		relativeImpact?: string;
		logOddsImpact?: number;
	}

	/** <p> The details of the impact of aggregated variables on the prediction score. </p> <p>Account Takeover Insights (ATI) model uses the login data you provide to continuously calculate a set of variables (aggregated variables) based on historical events. For example, the model might calculate the number of times an user has logged in using the same IP address. In this case, event variables used to derive the aggregated variables are <code>IP address</code> and <code>user</code>.</p> */
	export interface AggregatedVariablesImpactExplanationFormProperties {
		relativeImpact: FormControl<string | null | undefined>,
		logOddsImpact: FormControl<number | null | undefined>,
	}
	export function CreateAggregatedVariablesImpactExplanationFormGroup() {
		return new FormGroup<AggregatedVariablesImpactExplanationFormProperties>({
			relativeImpact: new FormControl<string | null | undefined>(undefined),
			logOddsImpact: new FormControl<number | null | undefined>(undefined),
		});

	}


	/**  The details of the external (Amazon Sagemaker) model evaluated for generating predictions.  */
	export interface EvaluatedExternalModel {
		modelEndpoint?: string;
		useEventVariables?: boolean | null;
		inputVariables?: MapOfStrings;
		outputVariables?: MapOfStrings;
	}

	/**  The details of the external (Amazon Sagemaker) model evaluated for generating predictions.  */
	export interface EvaluatedExternalModelFormProperties {
		modelEndpoint: FormControl<string | null | undefined>,
		useEventVariables: FormControl<boolean | null | undefined>,
	}
	export function CreateEvaluatedExternalModelFormGroup() {
		return new FormGroup<EvaluatedExternalModelFormProperties>({
			modelEndpoint: new FormControl<string | null | undefined>(undefined),
			useEventVariables: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface MapOfStrings {
	}
	export interface MapOfStringsFormProperties {
	}
	export function CreateMapOfStringsFormGroup() {
		return new FormGroup<MapOfStringsFormProperties>({
		});

	}

	export interface GetEventPredictionMetadataRequest {

		/** Required */
		eventId: string;

		/** Required */
		eventTypeName: string;

		/** Required */
		detectorId: string;

		/** Required */
		detectorVersionId: string;

		/** Required */
		predictionTimestamp: string;
	}
	export interface GetEventPredictionMetadataRequestFormProperties {

		/** Required */
		eventId: FormControl<string | null | undefined>,

		/** Required */
		eventTypeName: FormControl<string | null | undefined>,

		/** Required */
		detectorId: FormControl<string | null | undefined>,

		/** Required */
		detectorVersionId: FormControl<string | null | undefined>,

		/** Required */
		predictionTimestamp: FormControl<string | null | undefined>,
	}
	export function CreateGetEventPredictionMetadataRequestFormGroup() {
		return new FormGroup<GetEventPredictionMetadataRequestFormProperties>({
			eventId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			eventTypeName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			detectorId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			detectorVersionId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			predictionTimestamp: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetEventTypesResult {
		eventTypes?: Array<EventType>;
		nextToken?: string;
	}
	export interface GetEventTypesResultFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateGetEventTypesResultFormGroup() {
		return new FormGroup<GetEventTypesResultFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The event type details. */
	export interface EventType {
		name?: string;
		description?: string;
		eventVariables?: Array<string>;
		labels?: Array<string>;
		entityTypes?: Array<string>;
		eventIngestion?: EventIngestion;
		ingestedEventStatistics?: IngestedEventStatistics;
		lastUpdatedTime?: string;
		createdTime?: string;
		arn?: string;
		eventOrchestration?: EventOrchestration;
	}

	/** The event type details. */
	export interface EventTypeFormProperties {
		name: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,
		eventIngestion: FormControl<EventIngestion | null | undefined>,
		lastUpdatedTime: FormControl<string | null | undefined>,
		createdTime: FormControl<string | null | undefined>,
		arn: FormControl<string | null | undefined>,
	}
	export function CreateEventTypeFormGroup() {
		return new FormGroup<EventTypeFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			eventIngestion: new FormControl<EventIngestion | null | undefined>(undefined),
			lastUpdatedTime: new FormControl<string | null | undefined>(undefined),
			createdTime: new FormControl<string | null | undefined>(undefined),
			arn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum EventIngestion { ENABLED = 'ENABLED', DISABLED = 'DISABLED' }


	/** Data about the stored events. */
	export interface IngestedEventStatistics {
		numberOfEvents?: number | null;
		eventDataSizeInBytes?: number | null;
		leastRecentEvent?: string;
		mostRecentEvent?: string;
		lastUpdatedTime?: string;
	}

	/** Data about the stored events. */
	export interface IngestedEventStatisticsFormProperties {
		numberOfEvents: FormControl<number | null | undefined>,
		eventDataSizeInBytes: FormControl<number | null | undefined>,
		leastRecentEvent: FormControl<string | null | undefined>,
		mostRecentEvent: FormControl<string | null | undefined>,
		lastUpdatedTime: FormControl<string | null | undefined>,
	}
	export function CreateIngestedEventStatisticsFormGroup() {
		return new FormGroup<IngestedEventStatisticsFormProperties>({
			numberOfEvents: new FormControl<number | null | undefined>(undefined),
			eventDataSizeInBytes: new FormControl<number | null | undefined>(undefined),
			leastRecentEvent: new FormControl<string | null | undefined>(undefined),
			mostRecentEvent: new FormControl<string | null | undefined>(undefined),
			lastUpdatedTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**  The event orchestration status.  */
	export interface EventOrchestration {

		/** Required */
		eventBridgeEnabled: boolean;
	}

	/**  The event orchestration status.  */
	export interface EventOrchestrationFormProperties {

		/** Required */
		eventBridgeEnabled: FormControl<boolean | null | undefined>,
	}
	export function CreateEventOrchestrationFormGroup() {
		return new FormGroup<EventOrchestrationFormProperties>({
			eventBridgeEnabled: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetEventTypesRequest {
		name?: string;
		nextToken?: string;
		maxResults?: number | null;
	}
	export interface GetEventTypesRequestFormProperties {
		name: FormControl<string | null | undefined>,
		nextToken: FormControl<string | null | undefined>,
		maxResults: FormControl<number | null | undefined>,
	}
	export function CreateGetEventTypesRequestFormGroup() {
		return new FormGroup<GetEventTypesRequestFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			nextToken: new FormControl<string | null | undefined>(undefined),
			maxResults: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface GetExternalModelsResult {
		externalModels?: Array<ExternalModel>;
		nextToken?: string;
	}
	export interface GetExternalModelsResultFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateGetExternalModelsResultFormGroup() {
		return new FormGroup<GetExternalModelsResultFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The Amazon SageMaker model. */
	export interface ExternalModel {
		modelEndpoint?: string;
		modelSource?: ModelSource;
		invokeModelEndpointRoleArn?: string;
		inputConfiguration?: ModelInputConfiguration;
		outputConfiguration?: ModelOutputConfiguration;
		modelEndpointStatus?: ModelEndpointStatus;
		lastUpdatedTime?: string;
		createdTime?: string;
		arn?: string;
	}

	/** The Amazon SageMaker model. */
	export interface ExternalModelFormProperties {
		modelEndpoint: FormControl<string | null | undefined>,
		modelSource: FormControl<ModelSource | null | undefined>,
		invokeModelEndpointRoleArn: FormControl<string | null | undefined>,
		modelEndpointStatus: FormControl<ModelEndpointStatus | null | undefined>,
		lastUpdatedTime: FormControl<string | null | undefined>,
		createdTime: FormControl<string | null | undefined>,
		arn: FormControl<string | null | undefined>,
	}
	export function CreateExternalModelFormGroup() {
		return new FormGroup<ExternalModelFormProperties>({
			modelEndpoint: new FormControl<string | null | undefined>(undefined),
			modelSource: new FormControl<ModelSource | null | undefined>(undefined),
			invokeModelEndpointRoleArn: new FormControl<string | null | undefined>(undefined),
			modelEndpointStatus: new FormControl<ModelEndpointStatus | null | undefined>(undefined),
			lastUpdatedTime: new FormControl<string | null | undefined>(undefined),
			createdTime: new FormControl<string | null | undefined>(undefined),
			arn: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The Amazon SageMaker model input configuration. */
	export interface ModelInputConfiguration {
		eventTypeName?: string;
		format?: ModelInputDataFormat;

		/** Required */
		useEventVariables: boolean;
		jsonInputTemplate?: string;
		csvInputTemplate?: string;
	}

	/** The Amazon SageMaker model input configuration. */
	export interface ModelInputConfigurationFormProperties {
		eventTypeName: FormControl<string | null | undefined>,
		format: FormControl<ModelInputDataFormat | null | undefined>,

		/** Required */
		useEventVariables: FormControl<boolean | null | undefined>,
		jsonInputTemplate: FormControl<string | null | undefined>,
		csvInputTemplate: FormControl<string | null | undefined>,
	}
	export function CreateModelInputConfigurationFormGroup() {
		return new FormGroup<ModelInputConfigurationFormProperties>({
			eventTypeName: new FormControl<string | null | undefined>(undefined),
			format: new FormControl<ModelInputDataFormat | null | undefined>(undefined),
			useEventVariables: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			jsonInputTemplate: new FormControl<string | null | undefined>(undefined),
			csvInputTemplate: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ModelInputDataFormat { TEXT_CSV = 'TEXT_CSV', APPLICATION_JSON = 'APPLICATION_JSON' }


	/** Provides the Amazon Sagemaker model output configuration. */
	export interface ModelOutputConfiguration {

		/** Required */
		format: ModelOutputDataFormat;
		jsonKeyToVariableMap?: JsonKeyToVariableMap;
		csvIndexToVariableMap?: CsvIndexToVariableMap;
	}

	/** Provides the Amazon Sagemaker model output configuration. */
	export interface ModelOutputConfigurationFormProperties {

		/** Required */
		format: FormControl<ModelOutputDataFormat | null | undefined>,
	}
	export function CreateModelOutputConfigurationFormGroup() {
		return new FormGroup<ModelOutputConfigurationFormProperties>({
			format: new FormControl<ModelOutputDataFormat | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum ModelOutputDataFormat { TEXT_CSV = 'TEXT_CSV', APPLICATION_JSONLINES = 'APPLICATION_JSONLINES' }

	export interface JsonKeyToVariableMap {
	}
	export interface JsonKeyToVariableMapFormProperties {
	}
	export function CreateJsonKeyToVariableMapFormGroup() {
		return new FormGroup<JsonKeyToVariableMapFormProperties>({
		});

	}

	export interface CsvIndexToVariableMap {
	}
	export interface CsvIndexToVariableMapFormProperties {
	}
	export function CreateCsvIndexToVariableMapFormGroup() {
		return new FormGroup<CsvIndexToVariableMapFormProperties>({
		});

	}

	export enum ModelEndpointStatus { ASSOCIATED = 'ASSOCIATED', DISSOCIATED = 'DISSOCIATED' }

	export interface GetExternalModelsRequest {
		modelEndpoint?: string;
		nextToken?: string;
		maxResults?: number | null;
	}
	export interface GetExternalModelsRequestFormProperties {
		modelEndpoint: FormControl<string | null | undefined>,
		nextToken: FormControl<string | null | undefined>,
		maxResults: FormControl<number | null | undefined>,
	}
	export function CreateGetExternalModelsRequestFormGroup() {
		return new FormGroup<GetExternalModelsRequestFormProperties>({
			modelEndpoint: new FormControl<string | null | undefined>(undefined),
			nextToken: new FormControl<string | null | undefined>(undefined),
			maxResults: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface GetKMSEncryptionKeyResult {
		kmsKey?: KMSKey;
	}
	export interface GetKMSEncryptionKeyResultFormProperties {
	}
	export function CreateGetKMSEncryptionKeyResultFormGroup() {
		return new FormGroup<GetKMSEncryptionKeyResultFormProperties>({
		});

	}


	/** The KMS key details. */
	export interface KMSKey {
		kmsEncryptionKeyArn?: string;
	}

	/** The KMS key details. */
	export interface KMSKeyFormProperties {
		kmsEncryptionKeyArn: FormControl<string | null | undefined>,
	}
	export function CreateKMSKeyFormGroup() {
		return new FormGroup<KMSKeyFormProperties>({
			kmsEncryptionKeyArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetLabelsResult {
		labels?: Array<Label>;
		nextToken?: string;
	}
	export interface GetLabelsResultFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateGetLabelsResultFormGroup() {
		return new FormGroup<GetLabelsResultFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The label details. */
	export interface Label {
		name?: string;
		description?: string;
		lastUpdatedTime?: string;
		createdTime?: string;
		arn?: string;
	}

	/** The label details. */
	export interface LabelFormProperties {
		name: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,
		lastUpdatedTime: FormControl<string | null | undefined>,
		createdTime: FormControl<string | null | undefined>,
		arn: FormControl<string | null | undefined>,
	}
	export function CreateLabelFormGroup() {
		return new FormGroup<LabelFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			lastUpdatedTime: new FormControl<string | null | undefined>(undefined),
			createdTime: new FormControl<string | null | undefined>(undefined),
			arn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetLabelsRequest {
		name?: string;
		nextToken?: string;
		maxResults?: number | null;
	}
	export interface GetLabelsRequestFormProperties {
		name: FormControl<string | null | undefined>,
		nextToken: FormControl<string | null | undefined>,
		maxResults: FormControl<number | null | undefined>,
	}
	export function CreateGetLabelsRequestFormGroup() {
		return new FormGroup<GetLabelsRequestFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			nextToken: new FormControl<string | null | undefined>(undefined),
			maxResults: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface GetListElementsResult {
		elements?: Array<string>;
		nextToken?: string;
	}
	export interface GetListElementsResultFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateGetListElementsResultFormGroup() {
		return new FormGroup<GetListElementsResultFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetListElementsRequest {

		/** Required */
		name: string;
		nextToken?: string;
		maxResults?: number | null;
	}
	export interface GetListElementsRequestFormProperties {

		/** Required */
		name: FormControl<string | null | undefined>,
		nextToken: FormControl<string | null | undefined>,
		maxResults: FormControl<number | null | undefined>,
	}
	export function CreateGetListElementsRequestFormGroup() {
		return new FormGroup<GetListElementsRequestFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			nextToken: new FormControl<string | null | undefined>(undefined),
			maxResults: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface GetListsMetadataResult {
		lists?: Array<AllowDenyList>;
		nextToken?: string;
	}
	export interface GetListsMetadataResultFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateGetListsMetadataResultFormGroup() {
		return new FormGroup<GetListsMetadataResultFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**  The metadata of a list.  */
	export interface AllowDenyList {

		/** Required */
		name: string;
		description?: string;
		variableType?: string;
		createdTime?: string;
		updatedTime?: string;
		arn?: string;
	}

	/**  The metadata of a list.  */
	export interface AllowDenyListFormProperties {

		/** Required */
		name: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,
		variableType: FormControl<string | null | undefined>,
		createdTime: FormControl<string | null | undefined>,
		updatedTime: FormControl<string | null | undefined>,
		arn: FormControl<string | null | undefined>,
	}
	export function CreateAllowDenyListFormGroup() {
		return new FormGroup<AllowDenyListFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			description: new FormControl<string | null | undefined>(undefined),
			variableType: new FormControl<string | null | undefined>(undefined),
			createdTime: new FormControl<string | null | undefined>(undefined),
			updatedTime: new FormControl<string | null | undefined>(undefined),
			arn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetListsMetadataRequest {
		name?: string;
		nextToken?: string;
		maxResults?: number | null;
	}
	export interface GetListsMetadataRequestFormProperties {
		name: FormControl<string | null | undefined>,
		nextToken: FormControl<string | null | undefined>,
		maxResults: FormControl<number | null | undefined>,
	}
	export function CreateGetListsMetadataRequestFormGroup() {
		return new FormGroup<GetListsMetadataRequestFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			nextToken: new FormControl<string | null | undefined>(undefined),
			maxResults: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface GetModelVersionResult {
		modelId?: string;
		modelType?: ModelTypeEnum;
		modelVersionNumber?: string;
		trainingDataSource?: TrainingDataSourceEnum;
		trainingDataSchema?: TrainingDataSchema;
		externalEventsDetail?: ExternalEventsDetail;
		ingestedEventsDetail?: IngestedEventsDetail;
		status?: string;
		arn?: string;
	}
	export interface GetModelVersionResultFormProperties {
		modelId: FormControl<string | null | undefined>,
		modelType: FormControl<ModelTypeEnum | null | undefined>,
		modelVersionNumber: FormControl<string | null | undefined>,
		trainingDataSource: FormControl<TrainingDataSourceEnum | null | undefined>,
		status: FormControl<string | null | undefined>,
		arn: FormControl<string | null | undefined>,
	}
	export function CreateGetModelVersionResultFormGroup() {
		return new FormGroup<GetModelVersionResultFormProperties>({
			modelId: new FormControl<string | null | undefined>(undefined),
			modelType: new FormControl<ModelTypeEnum | null | undefined>(undefined),
			modelVersionNumber: new FormControl<string | null | undefined>(undefined),
			trainingDataSource: new FormControl<TrainingDataSourceEnum | null | undefined>(undefined),
			status: new FormControl<string | null | undefined>(undefined),
			arn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetModelVersionRequest {

		/** Required */
		modelId: string;

		/** Required */
		modelType: ModelTypeEnum;

		/** Required */
		modelVersionNumber: string;
	}
	export interface GetModelVersionRequestFormProperties {

		/** Required */
		modelId: FormControl<string | null | undefined>,

		/** Required */
		modelType: FormControl<ModelTypeEnum | null | undefined>,

		/** Required */
		modelVersionNumber: FormControl<string | null | undefined>,
	}
	export function CreateGetModelVersionRequestFormGroup() {
		return new FormGroup<GetModelVersionRequestFormProperties>({
			modelId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			modelType: new FormControl<ModelTypeEnum | null | undefined>(undefined, [Validators.required]),
			modelVersionNumber: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetModelsResult {
		nextToken?: string;
		models?: Array<Model>;
	}
	export interface GetModelsResultFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateGetModelsResultFormGroup() {
		return new FormGroup<GetModelsResultFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The model. */
	export interface Model {
		modelId?: string;
		modelType?: ModelTypeEnum;
		description?: string;
		eventTypeName?: string;
		createdTime?: string;
		lastUpdatedTime?: string;
		arn?: string;
	}

	/** The model. */
	export interface ModelFormProperties {
		modelId: FormControl<string | null | undefined>,
		modelType: FormControl<ModelTypeEnum | null | undefined>,
		description: FormControl<string | null | undefined>,
		eventTypeName: FormControl<string | null | undefined>,
		createdTime: FormControl<string | null | undefined>,
		lastUpdatedTime: FormControl<string | null | undefined>,
		arn: FormControl<string | null | undefined>,
	}
	export function CreateModelFormGroup() {
		return new FormGroup<ModelFormProperties>({
			modelId: new FormControl<string | null | undefined>(undefined),
			modelType: new FormControl<ModelTypeEnum | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			eventTypeName: new FormControl<string | null | undefined>(undefined),
			createdTime: new FormControl<string | null | undefined>(undefined),
			lastUpdatedTime: new FormControl<string | null | undefined>(undefined),
			arn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetModelsRequest {
		modelId?: string;
		modelType?: ModelTypeEnum;
		nextToken?: string;
		maxResults?: number | null;
	}
	export interface GetModelsRequestFormProperties {
		modelId: FormControl<string | null | undefined>,
		modelType: FormControl<ModelTypeEnum | null | undefined>,
		nextToken: FormControl<string | null | undefined>,
		maxResults: FormControl<number | null | undefined>,
	}
	export function CreateGetModelsRequestFormGroup() {
		return new FormGroup<GetModelsRequestFormProperties>({
			modelId: new FormControl<string | null | undefined>(undefined),
			modelType: new FormControl<ModelTypeEnum | null | undefined>(undefined),
			nextToken: new FormControl<string | null | undefined>(undefined),
			maxResults: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface GetOutcomesResult {
		outcomes?: Array<Outcome>;
		nextToken?: string;
	}
	export interface GetOutcomesResultFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateGetOutcomesResultFormGroup() {
		return new FormGroup<GetOutcomesResultFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The outcome. */
	export interface Outcome {
		name?: string;
		description?: string;
		lastUpdatedTime?: string;
		createdTime?: string;
		arn?: string;
	}

	/** The outcome. */
	export interface OutcomeFormProperties {
		name: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,
		lastUpdatedTime: FormControl<string | null | undefined>,
		createdTime: FormControl<string | null | undefined>,
		arn: FormControl<string | null | undefined>,
	}
	export function CreateOutcomeFormGroup() {
		return new FormGroup<OutcomeFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			lastUpdatedTime: new FormControl<string | null | undefined>(undefined),
			createdTime: new FormControl<string | null | undefined>(undefined),
			arn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetOutcomesRequest {
		name?: string;
		nextToken?: string;
		maxResults?: number | null;
	}
	export interface GetOutcomesRequestFormProperties {
		name: FormControl<string | null | undefined>,
		nextToken: FormControl<string | null | undefined>,
		maxResults: FormControl<number | null | undefined>,
	}
	export function CreateGetOutcomesRequestFormGroup() {
		return new FormGroup<GetOutcomesRequestFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			nextToken: new FormControl<string | null | undefined>(undefined),
			maxResults: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface GetRulesResult {
		ruleDetails?: Array<RuleDetail>;
		nextToken?: string;
	}
	export interface GetRulesResultFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateGetRulesResultFormGroup() {
		return new FormGroup<GetRulesResultFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The details of the rule. */
	export interface RuleDetail {
		ruleId?: string;
		description?: string;
		detectorId?: string;
		ruleVersion?: string;
		expression?: string;
		language?: Language;
		outcomes?: Array<string>;
		lastUpdatedTime?: string;
		createdTime?: string;
		arn?: string;
	}

	/** The details of the rule. */
	export interface RuleDetailFormProperties {
		ruleId: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,
		detectorId: FormControl<string | null | undefined>,
		ruleVersion: FormControl<string | null | undefined>,
		expression: FormControl<string | null | undefined>,
		language: FormControl<Language | null | undefined>,
		lastUpdatedTime: FormControl<string | null | undefined>,
		createdTime: FormControl<string | null | undefined>,
		arn: FormControl<string | null | undefined>,
	}
	export function CreateRuleDetailFormGroup() {
		return new FormGroup<RuleDetailFormProperties>({
			ruleId: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			detectorId: new FormControl<string | null | undefined>(undefined),
			ruleVersion: new FormControl<string | null | undefined>(undefined),
			expression: new FormControl<string | null | undefined>(undefined),
			language: new FormControl<Language | null | undefined>(undefined),
			lastUpdatedTime: new FormControl<string | null | undefined>(undefined),
			createdTime: new FormControl<string | null | undefined>(undefined),
			arn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetRulesRequest {
		ruleId?: string;

		/** Required */
		detectorId: string;
		ruleVersion?: string;
		nextToken?: string;
		maxResults?: number | null;
	}
	export interface GetRulesRequestFormProperties {
		ruleId: FormControl<string | null | undefined>,

		/** Required */
		detectorId: FormControl<string | null | undefined>,
		ruleVersion: FormControl<string | null | undefined>,
		nextToken: FormControl<string | null | undefined>,
		maxResults: FormControl<number | null | undefined>,
	}
	export function CreateGetRulesRequestFormGroup() {
		return new FormGroup<GetRulesRequestFormProperties>({
			ruleId: new FormControl<string | null | undefined>(undefined),
			detectorId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ruleVersion: new FormControl<string | null | undefined>(undefined),
			nextToken: new FormControl<string | null | undefined>(undefined),
			maxResults: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface GetVariablesResult {
		variables?: Array<Variable>;
		nextToken?: string;
	}
	export interface GetVariablesResultFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateGetVariablesResultFormGroup() {
		return new FormGroup<GetVariablesResultFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetVariablesRequest {
		name?: string;
		nextToken?: string;
		maxResults?: number | null;
	}
	export interface GetVariablesRequestFormProperties {
		name: FormControl<string | null | undefined>,
		nextToken: FormControl<string | null | undefined>,
		maxResults: FormControl<number | null | undefined>,
	}
	export function CreateGetVariablesRequestFormGroup() {
		return new FormGroup<GetVariablesRequestFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			nextToken: new FormControl<string | null | undefined>(undefined),
			maxResults: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ListEventPredictionsResult {
		eventPredictionSummaries?: Array<EventPredictionSummary>;
		nextToken?: string;
	}
	export interface ListEventPredictionsResultFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListEventPredictionsResultFormGroup() {
		return new FormGroup<ListEventPredictionsResultFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**  Information about the summary of an event prediction.  */
	export interface EventPredictionSummary {
		eventId?: string;
		eventTypeName?: string;
		eventTimestamp?: string;
		predictionTimestamp?: string;
		detectorId?: string;
		detectorVersionId?: string;
	}

	/**  Information about the summary of an event prediction.  */
	export interface EventPredictionSummaryFormProperties {
		eventId: FormControl<string | null | undefined>,
		eventTypeName: FormControl<string | null | undefined>,
		eventTimestamp: FormControl<string | null | undefined>,
		predictionTimestamp: FormControl<string | null | undefined>,
		detectorId: FormControl<string | null | undefined>,
		detectorVersionId: FormControl<string | null | undefined>,
	}
	export function CreateEventPredictionSummaryFormGroup() {
		return new FormGroup<EventPredictionSummaryFormProperties>({
			eventId: new FormControl<string | null | undefined>(undefined),
			eventTypeName: new FormControl<string | null | undefined>(undefined),
			eventTimestamp: new FormControl<string | null | undefined>(undefined),
			predictionTimestamp: new FormControl<string | null | undefined>(undefined),
			detectorId: new FormControl<string | null | undefined>(undefined),
			detectorVersionId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListEventPredictionsRequest {
		eventId?: FilterCondition;
		eventType?: FilterCondition;
		detectorId?: FilterCondition;
		detectorVersionId?: FilterCondition;
		predictionTimeRange?: PredictionTimeRange;
		nextToken?: string;
		maxResults?: number | null;
	}
	export interface ListEventPredictionsRequestFormProperties {
		nextToken: FormControl<string | null | undefined>,
		maxResults: FormControl<number | null | undefined>,
	}
	export function CreateListEventPredictionsRequestFormGroup() {
		return new FormGroup<ListEventPredictionsRequestFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
			maxResults: new FormControl<number | null | undefined>(undefined),
		});

	}


	/**  A conditional statement for filtering a list of past predictions.  */
	export interface FilterCondition {
		value?: string;
	}

	/**  A conditional statement for filtering a list of past predictions.  */
	export interface FilterConditionFormProperties {
		value: FormControl<string | null | undefined>,
	}
	export function CreateFilterConditionFormGroup() {
		return new FormGroup<FilterConditionFormProperties>({
			value: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**  The time period for when the predictions were generated.  */
	export interface PredictionTimeRange {

		/** Required */
		startTime: string;

		/** Required */
		endTime: string;
	}

	/**  The time period for when the predictions were generated.  */
	export interface PredictionTimeRangeFormProperties {

		/** Required */
		startTime: FormControl<string | null | undefined>,

		/** Required */
		endTime: FormControl<string | null | undefined>,
	}
	export function CreatePredictionTimeRangeFormGroup() {
		return new FormGroup<PredictionTimeRangeFormProperties>({
			startTime: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			endTime: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ListTagsForResourceResult {
		tags?: Array<Tag>;
		nextToken?: string;
	}
	export interface ListTagsForResourceResultFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListTagsForResourceResultFormGroup() {
		return new FormGroup<ListTagsForResourceResultFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListTagsForResourceRequest {

		/** Required */
		resourceARN: string;
		nextToken?: string;
		maxResults?: number | null;
	}
	export interface ListTagsForResourceRequestFormProperties {

		/** Required */
		resourceARN: FormControl<string | null | undefined>,
		nextToken: FormControl<string | null | undefined>,
		maxResults: FormControl<number | null | undefined>,
	}
	export function CreateListTagsForResourceRequestFormGroup() {
		return new FormGroup<ListTagsForResourceRequestFormProperties>({
			resourceARN: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			nextToken: new FormControl<string | null | undefined>(undefined),
			maxResults: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface PutDetectorResult {
	}
	export interface PutDetectorResultFormProperties {
	}
	export function CreatePutDetectorResultFormGroup() {
		return new FormGroup<PutDetectorResultFormProperties>({
		});

	}

	export interface PutDetectorRequest {

		/** Required */
		detectorId: string;
		description?: string;

		/** Required */
		eventTypeName: string;
		tags?: Array<Tag>;
	}
	export interface PutDetectorRequestFormProperties {

		/** Required */
		detectorId: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,

		/** Required */
		eventTypeName: FormControl<string | null | undefined>,
	}
	export function CreatePutDetectorRequestFormGroup() {
		return new FormGroup<PutDetectorRequestFormProperties>({
			detectorId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			description: new FormControl<string | null | undefined>(undefined),
			eventTypeName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface PutEntityTypeResult {
	}
	export interface PutEntityTypeResultFormProperties {
	}
	export function CreatePutEntityTypeResultFormGroup() {
		return new FormGroup<PutEntityTypeResultFormProperties>({
		});

	}

	export interface PutEntityTypeRequest {

		/** Required */
		name: string;
		description?: string;
		tags?: Array<Tag>;
	}
	export interface PutEntityTypeRequestFormProperties {

		/** Required */
		name: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,
	}
	export function CreatePutEntityTypeRequestFormGroup() {
		return new FormGroup<PutEntityTypeRequestFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			description: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PutEventTypeResult {
	}
	export interface PutEventTypeResultFormProperties {
	}
	export function CreatePutEventTypeResultFormGroup() {
		return new FormGroup<PutEventTypeResultFormProperties>({
		});

	}

	export interface PutEventTypeRequest {

		/** Required */
		name: string;
		description?: string;

		/** Required */
		eventVariables: Array<string>;
		labels?: Array<string>;

		/** Required */
		entityTypes: Array<string>;
		eventIngestion?: EventIngestion;
		tags?: Array<Tag>;
		eventOrchestration?: EventOrchestration;
	}
	export interface PutEventTypeRequestFormProperties {

		/** Required */
		name: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,
		eventIngestion: FormControl<EventIngestion | null | undefined>,
	}
	export function CreatePutEventTypeRequestFormGroup() {
		return new FormGroup<PutEventTypeRequestFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			description: new FormControl<string | null | undefined>(undefined),
			eventIngestion: new FormControl<EventIngestion | null | undefined>(undefined),
		});

	}

	export interface PutExternalModelResult {
	}
	export interface PutExternalModelResultFormProperties {
	}
	export function CreatePutExternalModelResultFormGroup() {
		return new FormGroup<PutExternalModelResultFormProperties>({
		});

	}

	export interface PutExternalModelRequest {

		/** Required */
		modelEndpoint: string;

		/** Required */
		modelSource: ModelSource;

		/** Required */
		invokeModelEndpointRoleArn: string;

		/** Required */
		inputConfiguration: ModelInputConfiguration;

		/** Required */
		outputConfiguration: ModelOutputConfiguration;

		/** Required */
		modelEndpointStatus: ModelEndpointStatus;
		tags?: Array<Tag>;
	}
	export interface PutExternalModelRequestFormProperties {

		/** Required */
		modelEndpoint: FormControl<string | null | undefined>,

		/** Required */
		modelSource: FormControl<ModelSource | null | undefined>,

		/** Required */
		invokeModelEndpointRoleArn: FormControl<string | null | undefined>,

		/** Required */
		modelEndpointStatus: FormControl<ModelEndpointStatus | null | undefined>,
	}
	export function CreatePutExternalModelRequestFormGroup() {
		return new FormGroup<PutExternalModelRequestFormProperties>({
			modelEndpoint: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			modelSource: new FormControl<ModelSource | null | undefined>(undefined, [Validators.required]),
			invokeModelEndpointRoleArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			modelEndpointStatus: new FormControl<ModelEndpointStatus | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface PutKMSEncryptionKeyResult {
	}
	export interface PutKMSEncryptionKeyResultFormProperties {
	}
	export function CreatePutKMSEncryptionKeyResultFormGroup() {
		return new FormGroup<PutKMSEncryptionKeyResultFormProperties>({
		});

	}

	export interface PutKMSEncryptionKeyRequest {

		/** Required */
		kmsEncryptionKeyArn: string;
	}
	export interface PutKMSEncryptionKeyRequestFormProperties {

		/** Required */
		kmsEncryptionKeyArn: FormControl<string | null | undefined>,
	}
	export function CreatePutKMSEncryptionKeyRequestFormGroup() {
		return new FormGroup<PutKMSEncryptionKeyRequestFormProperties>({
			kmsEncryptionKeyArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface PutLabelResult {
	}
	export interface PutLabelResultFormProperties {
	}
	export function CreatePutLabelResultFormGroup() {
		return new FormGroup<PutLabelResultFormProperties>({
		});

	}

	export interface PutLabelRequest {

		/** Required */
		name: string;
		description?: string;
		tags?: Array<Tag>;
	}
	export interface PutLabelRequestFormProperties {

		/** Required */
		name: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,
	}
	export function CreatePutLabelRequestFormGroup() {
		return new FormGroup<PutLabelRequestFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			description: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PutOutcomeResult {
	}
	export interface PutOutcomeResultFormProperties {
	}
	export function CreatePutOutcomeResultFormGroup() {
		return new FormGroup<PutOutcomeResultFormProperties>({
		});

	}

	export interface PutOutcomeRequest {

		/** Required */
		name: string;
		description?: string;
		tags?: Array<Tag>;
	}
	export interface PutOutcomeRequestFormProperties {

		/** Required */
		name: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,
	}
	export function CreatePutOutcomeRequestFormGroup() {
		return new FormGroup<PutOutcomeRequestFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			description: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface SendEventResult {
	}
	export interface SendEventResultFormProperties {
	}
	export function CreateSendEventResultFormGroup() {
		return new FormGroup<SendEventResultFormProperties>({
		});

	}

	export interface SendEventRequest {

		/** Required */
		eventId: string;

		/** Required */
		eventTypeName: string;

		/** Required */
		eventTimestamp: string;

		/** Required */
		eventVariables: EventVariableMap;
		assignedLabel?: string;
		labelTimestamp?: string;

		/** Required */
		entities: Array<Entity>;
	}
	export interface SendEventRequestFormProperties {

		/** Required */
		eventId: FormControl<string | null | undefined>,

		/** Required */
		eventTypeName: FormControl<string | null | undefined>,

		/** Required */
		eventTimestamp: FormControl<string | null | undefined>,
		assignedLabel: FormControl<string | null | undefined>,
		labelTimestamp: FormControl<string | null | undefined>,
	}
	export function CreateSendEventRequestFormGroup() {
		return new FormGroup<SendEventRequestFormProperties>({
			eventId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			eventTypeName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			eventTimestamp: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			assignedLabel: new FormControl<string | null | undefined>(undefined),
			labelTimestamp: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface TagResourceResult {
	}
	export interface TagResourceResultFormProperties {
	}
	export function CreateTagResourceResultFormGroup() {
		return new FormGroup<TagResourceResultFormProperties>({
		});

	}

	export interface TagResourceRequest {

		/** Required */
		resourceARN: string;

		/** Required */
		tags: Array<Tag>;
	}
	export interface TagResourceRequestFormProperties {

		/** Required */
		resourceARN: FormControl<string | null | undefined>,
	}
	export function CreateTagResourceRequestFormGroup() {
		return new FormGroup<TagResourceRequestFormProperties>({
			resourceARN: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UntagResourceResult {
	}
	export interface UntagResourceResultFormProperties {
	}
	export function CreateUntagResourceResultFormGroup() {
		return new FormGroup<UntagResourceResultFormProperties>({
		});

	}

	export interface UntagResourceRequest {

		/** Required */
		resourceARN: string;

		/** Required */
		tagKeys: Array<string>;
	}
	export interface UntagResourceRequestFormProperties {

		/** Required */
		resourceARN: FormControl<string | null | undefined>,
	}
	export function CreateUntagResourceRequestFormGroup() {
		return new FormGroup<UntagResourceRequestFormProperties>({
			resourceARN: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UpdateDetectorVersionResult {
	}
	export interface UpdateDetectorVersionResultFormProperties {
	}
	export function CreateUpdateDetectorVersionResultFormGroup() {
		return new FormGroup<UpdateDetectorVersionResultFormProperties>({
		});

	}

	export interface UpdateDetectorVersionRequest {

		/** Required */
		detectorId: string;

		/** Required */
		detectorVersionId: string;

		/** Required */
		externalModelEndpoints: Array<string>;

		/** Required */
		rules: Array<Rule>;
		description?: string;
		modelVersions?: Array<ModelVersion>;
		ruleExecutionMode?: RuleExecutionMode;
	}
	export interface UpdateDetectorVersionRequestFormProperties {

		/** Required */
		detectorId: FormControl<string | null | undefined>,

		/** Required */
		detectorVersionId: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,
		ruleExecutionMode: FormControl<RuleExecutionMode | null | undefined>,
	}
	export function CreateUpdateDetectorVersionRequestFormGroup() {
		return new FormGroup<UpdateDetectorVersionRequestFormProperties>({
			detectorId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			detectorVersionId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			description: new FormControl<string | null | undefined>(undefined),
			ruleExecutionMode: new FormControl<RuleExecutionMode | null | undefined>(undefined),
		});

	}

	export interface UpdateDetectorVersionMetadataResult {
	}
	export interface UpdateDetectorVersionMetadataResultFormProperties {
	}
	export function CreateUpdateDetectorVersionMetadataResultFormGroup() {
		return new FormGroup<UpdateDetectorVersionMetadataResultFormProperties>({
		});

	}

	export interface UpdateDetectorVersionMetadataRequest {

		/** Required */
		detectorId: string;

		/** Required */
		detectorVersionId: string;

		/** Required */
		description: string;
	}
	export interface UpdateDetectorVersionMetadataRequestFormProperties {

		/** Required */
		detectorId: FormControl<string | null | undefined>,

		/** Required */
		detectorVersionId: FormControl<string | null | undefined>,

		/** Required */
		description: FormControl<string | null | undefined>,
	}
	export function CreateUpdateDetectorVersionMetadataRequestFormGroup() {
		return new FormGroup<UpdateDetectorVersionMetadataRequestFormProperties>({
			detectorId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			detectorVersionId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			description: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UpdateDetectorVersionStatusResult {
	}
	export interface UpdateDetectorVersionStatusResultFormProperties {
	}
	export function CreateUpdateDetectorVersionStatusResultFormGroup() {
		return new FormGroup<UpdateDetectorVersionStatusResultFormProperties>({
		});

	}

	export interface UpdateDetectorVersionStatusRequest {

		/** Required */
		detectorId: string;

		/** Required */
		detectorVersionId: string;

		/** Required */
		status: DetectorVersionStatus;
	}
	export interface UpdateDetectorVersionStatusRequestFormProperties {

		/** Required */
		detectorId: FormControl<string | null | undefined>,

		/** Required */
		detectorVersionId: FormControl<string | null | undefined>,

		/** Required */
		status: FormControl<DetectorVersionStatus | null | undefined>,
	}
	export function CreateUpdateDetectorVersionStatusRequestFormGroup() {
		return new FormGroup<UpdateDetectorVersionStatusRequestFormProperties>({
			detectorId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			detectorVersionId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<DetectorVersionStatus | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UpdateEventLabelResult {
	}
	export interface UpdateEventLabelResultFormProperties {
	}
	export function CreateUpdateEventLabelResultFormGroup() {
		return new FormGroup<UpdateEventLabelResultFormProperties>({
		});

	}

	export interface UpdateEventLabelRequest {

		/** Required */
		eventId: string;

		/** Required */
		eventTypeName: string;

		/** Required */
		assignedLabel: string;

		/** Required */
		labelTimestamp: string;
	}
	export interface UpdateEventLabelRequestFormProperties {

		/** Required */
		eventId: FormControl<string | null | undefined>,

		/** Required */
		eventTypeName: FormControl<string | null | undefined>,

		/** Required */
		assignedLabel: FormControl<string | null | undefined>,

		/** Required */
		labelTimestamp: FormControl<string | null | undefined>,
	}
	export function CreateUpdateEventLabelRequestFormGroup() {
		return new FormGroup<UpdateEventLabelRequestFormProperties>({
			eventId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			eventTypeName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			assignedLabel: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			labelTimestamp: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UpdateListResult {
	}
	export interface UpdateListResultFormProperties {
	}
	export function CreateUpdateListResultFormGroup() {
		return new FormGroup<UpdateListResultFormProperties>({
		});

	}

	export interface UpdateListRequest {

		/** Required */
		name: string;
		elements?: Array<string>;
		description?: string;
		updateMode?: ListUpdateMode;
		variableType?: string;
	}
	export interface UpdateListRequestFormProperties {

		/** Required */
		name: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,
		updateMode: FormControl<ListUpdateMode | null | undefined>,
		variableType: FormControl<string | null | undefined>,
	}
	export function CreateUpdateListRequestFormGroup() {
		return new FormGroup<UpdateListRequestFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			description: new FormControl<string | null | undefined>(undefined),
			updateMode: new FormControl<ListUpdateMode | null | undefined>(undefined),
			variableType: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ListUpdateMode { REPLACE = 'REPLACE', APPEND = 'APPEND', REMOVE = 'REMOVE' }

	export interface UpdateModelResult {
	}
	export interface UpdateModelResultFormProperties {
	}
	export function CreateUpdateModelResultFormGroup() {
		return new FormGroup<UpdateModelResultFormProperties>({
		});

	}

	export interface UpdateModelRequest {

		/** Required */
		modelId: string;

		/** Required */
		modelType: ModelTypeEnum;
		description?: string;
	}
	export interface UpdateModelRequestFormProperties {

		/** Required */
		modelId: FormControl<string | null | undefined>,

		/** Required */
		modelType: FormControl<ModelTypeEnum | null | undefined>,
		description: FormControl<string | null | undefined>,
	}
	export function CreateUpdateModelRequestFormGroup() {
		return new FormGroup<UpdateModelRequestFormProperties>({
			modelId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			modelType: new FormControl<ModelTypeEnum | null | undefined>(undefined, [Validators.required]),
			description: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateModelVersionResult {
		modelId?: string;
		modelType?: ModelTypeEnum;
		modelVersionNumber?: string;
		status?: string;
	}
	export interface UpdateModelVersionResultFormProperties {
		modelId: FormControl<string | null | undefined>,
		modelType: FormControl<ModelTypeEnum | null | undefined>,
		modelVersionNumber: FormControl<string | null | undefined>,
		status: FormControl<string | null | undefined>,
	}
	export function CreateUpdateModelVersionResultFormGroup() {
		return new FormGroup<UpdateModelVersionResultFormProperties>({
			modelId: new FormControl<string | null | undefined>(undefined),
			modelType: new FormControl<ModelTypeEnum | null | undefined>(undefined),
			modelVersionNumber: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateModelVersionRequest {

		/** Required */
		modelId: string;

		/** Required */
		modelType: ModelTypeEnum;

		/** Required */
		majorVersionNumber: string;
		externalEventsDetail?: ExternalEventsDetail;
		ingestedEventsDetail?: IngestedEventsDetail;
		tags?: Array<Tag>;
	}
	export interface UpdateModelVersionRequestFormProperties {

		/** Required */
		modelId: FormControl<string | null | undefined>,

		/** Required */
		modelType: FormControl<ModelTypeEnum | null | undefined>,

		/** Required */
		majorVersionNumber: FormControl<string | null | undefined>,
	}
	export function CreateUpdateModelVersionRequestFormGroup() {
		return new FormGroup<UpdateModelVersionRequestFormProperties>({
			modelId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			modelType: new FormControl<ModelTypeEnum | null | undefined>(undefined, [Validators.required]),
			majorVersionNumber: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UpdateModelVersionStatusResult {
	}
	export interface UpdateModelVersionStatusResultFormProperties {
	}
	export function CreateUpdateModelVersionStatusResultFormGroup() {
		return new FormGroup<UpdateModelVersionStatusResultFormProperties>({
		});

	}

	export interface UpdateModelVersionStatusRequest {

		/** Required */
		modelId: string;

		/** Required */
		modelType: ModelTypeEnum;

		/** Required */
		modelVersionNumber: string;

		/** Required */
		status: ModelVersionStatus;
	}
	export interface UpdateModelVersionStatusRequestFormProperties {

		/** Required */
		modelId: FormControl<string | null | undefined>,

		/** Required */
		modelType: FormControl<ModelTypeEnum | null | undefined>,

		/** Required */
		modelVersionNumber: FormControl<string | null | undefined>,

		/** Required */
		status: FormControl<ModelVersionStatus | null | undefined>,
	}
	export function CreateUpdateModelVersionStatusRequestFormGroup() {
		return new FormGroup<UpdateModelVersionStatusRequestFormProperties>({
			modelId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			modelType: new FormControl<ModelTypeEnum | null | undefined>(undefined, [Validators.required]),
			modelVersionNumber: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<ModelVersionStatus | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum ModelVersionStatus { ACTIVE = 'ACTIVE', INACTIVE = 'INACTIVE', TRAINING_CANCELLED = 'TRAINING_CANCELLED' }

	export interface UpdateRuleMetadataResult {
	}
	export interface UpdateRuleMetadataResultFormProperties {
	}
	export function CreateUpdateRuleMetadataResultFormGroup() {
		return new FormGroup<UpdateRuleMetadataResultFormProperties>({
		});

	}

	export interface UpdateRuleMetadataRequest {

		/** Required */
		rule: Rule;

		/** Required */
		description: string;
	}
	export interface UpdateRuleMetadataRequestFormProperties {

		/** Required */
		description: FormControl<string | null | undefined>,
	}
	export function CreateUpdateRuleMetadataRequestFormGroup() {
		return new FormGroup<UpdateRuleMetadataRequestFormProperties>({
			description: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UpdateRuleVersionResult {
		rule?: Rule;
	}
	export interface UpdateRuleVersionResultFormProperties {
	}
	export function CreateUpdateRuleVersionResultFormGroup() {
		return new FormGroup<UpdateRuleVersionResultFormProperties>({
		});

	}

	export interface UpdateRuleVersionRequest {

		/** Required */
		rule: Rule;
		description?: string;

		/** Required */
		expression: string;

		/** Required */
		language: Language;

		/** Required */
		outcomes: Array<string>;
		tags?: Array<Tag>;
	}
	export interface UpdateRuleVersionRequestFormProperties {
		description: FormControl<string | null | undefined>,

		/** Required */
		expression: FormControl<string | null | undefined>,

		/** Required */
		language: FormControl<Language | null | undefined>,
	}
	export function CreateUpdateRuleVersionRequestFormGroup() {
		return new FormGroup<UpdateRuleVersionRequestFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			expression: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			language: new FormControl<Language | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UpdateVariableResult {
	}
	export interface UpdateVariableResultFormProperties {
	}
	export function CreateUpdateVariableResultFormGroup() {
		return new FormGroup<UpdateVariableResultFormProperties>({
		});

	}

	export interface UpdateVariableRequest {

		/** Required */
		name: string;
		defaultValue?: string;
		description?: string;
		variableType?: string;
	}
	export interface UpdateVariableRequestFormProperties {

		/** Required */
		name: FormControl<string | null | undefined>,
		defaultValue: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,
		variableType: FormControl<string | null | undefined>,
	}
	export function CreateUpdateVariableRequestFormGroup() {
		return new FormGroup<UpdateVariableRequestFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			defaultValue: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			variableType: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A pre-formed Amazon SageMaker model input you can include if your detector version includes an imported Amazon SageMaker model endpoint with pass-through input configuration. */
	export interface ModelEndpointDataBlob {
		byteBuffer?: string;
		contentType?: string;
	}

	/** A pre-formed Amazon SageMaker model input you can include if your detector version includes an imported Amazon SageMaker model endpoint with pass-through input configuration. */
	export interface ModelEndpointDataBlobFormProperties {
		byteBuffer: FormControl<string | null | undefined>,
		contentType: FormControl<string | null | undefined>,
	}
	export function CreateModelEndpointDataBlobFormGroup() {
		return new FormGroup<ModelEndpointDataBlobFormProperties>({
			byteBuffer: new FormControl<string | null | undefined>(undefined),
			contentType: new FormControl<string | null | undefined>(undefined),
		});

	}

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
		 * Cancels an in-progress batch import job.
		 * Post #X-Amz-Target=AWSHawksNestServiceFacade.CancelBatchImportJob
		 * @return {CancelBatchImportJobResult} Success
		 */
		CancelBatchImportJob(requestBody: CancelBatchImportJobRequest): Observable<CancelBatchImportJobResult> {
			return this.http.post<CancelBatchImportJobResult>(this.baseUri + '#X-Amz-Target=AWSHawksNestServiceFacade.CancelBatchImportJob', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Cancels the specified batch prediction job.
		 * Post #X-Amz-Target=AWSHawksNestServiceFacade.CancelBatchPredictionJob
		 * @return {CancelBatchPredictionJobResult} Success
		 */
		CancelBatchPredictionJob(requestBody: CancelBatchPredictionJobRequest): Observable<CancelBatchPredictionJobResult> {
			return this.http.post<CancelBatchPredictionJobResult>(this.baseUri + '#X-Amz-Target=AWSHawksNestServiceFacade.CancelBatchPredictionJob', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Creates a batch import job.
		 * Post #X-Amz-Target=AWSHawksNestServiceFacade.CreateBatchImportJob
		 * @return {CreateBatchImportJobResult} Success
		 */
		CreateBatchImportJob(requestBody: CreateBatchImportJobRequest): Observable<CreateBatchImportJobResult> {
			return this.http.post<CreateBatchImportJobResult>(this.baseUri + '#X-Amz-Target=AWSHawksNestServiceFacade.CreateBatchImportJob', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Creates a batch prediction job.
		 * Post #X-Amz-Target=AWSHawksNestServiceFacade.CreateBatchPredictionJob
		 * @return {CreateBatchPredictionJobResult} Success
		 */
		CreateBatchPredictionJob(requestBody: CreateBatchPredictionJobRequest): Observable<CreateBatchPredictionJobResult> {
			return this.http.post<CreateBatchPredictionJobResult>(this.baseUri + '#X-Amz-Target=AWSHawksNestServiceFacade.CreateBatchPredictionJob', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
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
		 * <p> Creates a list. </p> <p>List is a set of input data for a variable in your event dataset. You use the input data in a rule that's associated with your detector. For more information, see <a href="https://docs.aws.amazon.com/frauddetector/latest/ug/lists.html">Lists</a>.</p>
		 * Post #X-Amz-Target=AWSHawksNestServiceFacade.CreateList
		 * @return {CreateListResult} Success
		 */
		CreateList(requestBody: CreateListRequest): Observable<CreateListResult> {
			return this.http.post<CreateListResult>(this.baseUri + '#X-Amz-Target=AWSHawksNestServiceFacade.CreateList', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Creates a model using the specified model type.
		 * Post #X-Amz-Target=AWSHawksNestServiceFacade.CreateModel
		 * @return {CreateModelResult} Success
		 */
		CreateModel(requestBody: CreateModelRequest): Observable<CreateModelResult> {
			return this.http.post<CreateModelResult>(this.baseUri + '#X-Amz-Target=AWSHawksNestServiceFacade.CreateModel', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Creates a version of the model using the specified model type and model id.
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
		 * Deletes the specified batch import job ID record. This action does not delete the data that was batch imported.
		 * Post #X-Amz-Target=AWSHawksNestServiceFacade.DeleteBatchImportJob
		 * @return {DeleteBatchImportJobResult} Success
		 */
		DeleteBatchImportJob(requestBody: DeleteBatchImportJobRequest): Observable<DeleteBatchImportJobResult> {
			return this.http.post<DeleteBatchImportJobResult>(this.baseUri + '#X-Amz-Target=AWSHawksNestServiceFacade.DeleteBatchImportJob', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a batch prediction job.
		 * Post #X-Amz-Target=AWSHawksNestServiceFacade.DeleteBatchPredictionJob
		 * @return {DeleteBatchPredictionJobResult} Success
		 */
		DeleteBatchPredictionJob(requestBody: DeleteBatchPredictionJobRequest): Observable<DeleteBatchPredictionJobResult> {
			return this.http.post<DeleteBatchPredictionJobResult>(this.baseUri + '#X-Amz-Target=AWSHawksNestServiceFacade.DeleteBatchPredictionJob', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Deletes the detector. Before deleting a detector, you must first delete all detector versions and rule versions associated with the detector.</p> <p>When you delete a detector, Amazon Fraud Detector permanently deletes the detector and the data is no longer stored in Amazon Fraud Detector.</p>
		 * Post #X-Amz-Target=AWSHawksNestServiceFacade.DeleteDetector
		 * @return {DeleteDetectorResult} Success
		 */
		DeleteDetector(requestBody: DeleteDetectorRequest): Observable<DeleteDetectorResult> {
			return this.http.post<DeleteDetectorResult>(this.baseUri + '#X-Amz-Target=AWSHawksNestServiceFacade.DeleteDetector', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Deletes the detector version. You cannot delete detector versions that are in <code>ACTIVE</code> status.</p> <p>When you delete a detector version, Amazon Fraud Detector permanently deletes the detector and the data is no longer stored in Amazon Fraud Detector.</p>
		 * Post #X-Amz-Target=AWSHawksNestServiceFacade.DeleteDetectorVersion
		 * @return {DeleteDetectorVersionResult} Success
		 */
		DeleteDetectorVersion(requestBody: DeleteDetectorVersionRequest): Observable<DeleteDetectorVersionResult> {
			return this.http.post<DeleteDetectorVersionResult>(this.baseUri + '#X-Amz-Target=AWSHawksNestServiceFacade.DeleteDetectorVersion', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Deletes an entity type.</p> <p>You cannot delete an entity type that is included in an event type.</p> <p>When you delete an entity type, Amazon Fraud Detector permanently deletes that entity type and the data is no longer stored in Amazon Fraud Detector.</p>
		 * Post #X-Amz-Target=AWSHawksNestServiceFacade.DeleteEntityType
		 * @return {DeleteEntityTypeResult} Success
		 */
		DeleteEntityType(requestBody: DeleteEntityTypeRequest): Observable<DeleteEntityTypeResult> {
			return this.http.post<DeleteEntityTypeResult>(this.baseUri + '#X-Amz-Target=AWSHawksNestServiceFacade.DeleteEntityType', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Deletes the specified event.</p> <p>When you delete an event, Amazon Fraud Detector permanently deletes that event and the event data is no longer stored in Amazon Fraud Detector. If <code>deleteAuditHistory</code> is <code>True</code>, event data is available through search for up to 30 seconds after the delete operation is completed.</p>
		 * Post #X-Amz-Target=AWSHawksNestServiceFacade.DeleteEvent
		 * @return {DeleteEventResult} Success
		 */
		DeleteEvent(requestBody: DeleteEventRequest): Observable<DeleteEventResult> {
			return this.http.post<DeleteEventResult>(this.baseUri + '#X-Amz-Target=AWSHawksNestServiceFacade.DeleteEvent', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Deletes an event type.</p> <p>You cannot delete an event type that is used in a detector or a model.</p> <p>When you delete an event type, Amazon Fraud Detector permanently deletes that event type and the data is no longer stored in Amazon Fraud Detector.</p>
		 * Post #X-Amz-Target=AWSHawksNestServiceFacade.DeleteEventType
		 * @return {DeleteEventTypeResult} Success
		 */
		DeleteEventType(requestBody: DeleteEventTypeRequest): Observable<DeleteEventTypeResult> {
			return this.http.post<DeleteEventTypeResult>(this.baseUri + '#X-Amz-Target=AWSHawksNestServiceFacade.DeleteEventType', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes all events of a particular event type.
		 * Post #X-Amz-Target=AWSHawksNestServiceFacade.DeleteEventsByEventType
		 * @return {DeleteEventsByEventTypeResult} Success
		 */
		DeleteEventsByEventType(requestBody: DeleteEventsByEventTypeRequest): Observable<DeleteEventsByEventTypeResult> {
			return this.http.post<DeleteEventsByEventTypeResult>(this.baseUri + '#X-Amz-Target=AWSHawksNestServiceFacade.DeleteEventsByEventType', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Removes a SageMaker model from Amazon Fraud Detector.</p> <p>You can remove an Amazon SageMaker model if it is not associated with a detector version. Removing a SageMaker model disconnects it from Amazon Fraud Detector, but the model remains available in SageMaker.</p>
		 * Post #X-Amz-Target=AWSHawksNestServiceFacade.DeleteExternalModel
		 * @return {DeleteExternalModelResult} Success
		 */
		DeleteExternalModel(requestBody: DeleteExternalModelRequest): Observable<DeleteExternalModelResult> {
			return this.http.post<DeleteExternalModelResult>(this.baseUri + '#X-Amz-Target=AWSHawksNestServiceFacade.DeleteExternalModel', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Deletes a label.</p> <p>You cannot delete labels that are included in an event type in Amazon Fraud Detector.</p> <p>You cannot delete a label assigned to an event ID. You must first delete the relevant event ID.</p> <p>When you delete a label, Amazon Fraud Detector permanently deletes that label and the data is no longer stored in Amazon Fraud Detector.</p>
		 * Post #X-Amz-Target=AWSHawksNestServiceFacade.DeleteLabel
		 * @return {DeleteLabelResult} Success
		 */
		DeleteLabel(requestBody: DeleteLabelRequest): Observable<DeleteLabelResult> {
			return this.http.post<DeleteLabelResult>(this.baseUri + '#X-Amz-Target=AWSHawksNestServiceFacade.DeleteLabel', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p> Deletes the list, provided it is not used in a rule. </p> <p> When you delete a list, Amazon Fraud Detector permanently deletes that list and the elements in the list.</p>
		 * Post #X-Amz-Target=AWSHawksNestServiceFacade.DeleteList
		 * @return {DeleteListResult} Success
		 */
		DeleteList(requestBody: DeleteListRequest): Observable<DeleteListResult> {
			return this.http.post<DeleteListResult>(this.baseUri + '#X-Amz-Target=AWSHawksNestServiceFacade.DeleteList', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Deletes a model.</p> <p>You can delete models and model versions in Amazon Fraud Detector, provided that they are not associated with a detector version.</p> <p> When you delete a model, Amazon Fraud Detector permanently deletes that model and the data is no longer stored in Amazon Fraud Detector.</p>
		 * Post #X-Amz-Target=AWSHawksNestServiceFacade.DeleteModel
		 * @return {DeleteModelResult} Success
		 */
		DeleteModel(requestBody: DeleteModelRequest): Observable<DeleteModelResult> {
			return this.http.post<DeleteModelResult>(this.baseUri + '#X-Amz-Target=AWSHawksNestServiceFacade.DeleteModel', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Deletes a model version.</p> <p>You can delete models and model versions in Amazon Fraud Detector, provided that they are not associated with a detector version.</p> <p> When you delete a model version, Amazon Fraud Detector permanently deletes that model version and the data is no longer stored in Amazon Fraud Detector.</p>
		 * Post #X-Amz-Target=AWSHawksNestServiceFacade.DeleteModelVersion
		 * @return {DeleteModelVersionResult} Success
		 */
		DeleteModelVersion(requestBody: DeleteModelVersionRequest): Observable<DeleteModelVersionResult> {
			return this.http.post<DeleteModelVersionResult>(this.baseUri + '#X-Amz-Target=AWSHawksNestServiceFacade.DeleteModelVersion', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Deletes an outcome.</p> <p>You cannot delete an outcome that is used in a rule version.</p> <p>When you delete an outcome, Amazon Fraud Detector permanently deletes that outcome and the data is no longer stored in Amazon Fraud Detector.</p>
		 * Post #X-Amz-Target=AWSHawksNestServiceFacade.DeleteOutcome
		 * @return {DeleteOutcomeResult} Success
		 */
		DeleteOutcome(requestBody: DeleteOutcomeRequest): Observable<DeleteOutcomeResult> {
			return this.http.post<DeleteOutcomeResult>(this.baseUri + '#X-Amz-Target=AWSHawksNestServiceFacade.DeleteOutcome', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Deletes the rule. You cannot delete a rule if it is used by an <code>ACTIVE</code> or <code>INACTIVE</code> detector version.</p> <p>When you delete a rule, Amazon Fraud Detector permanently deletes that rule and the data is no longer stored in Amazon Fraud Detector.</p>
		 * Post #X-Amz-Target=AWSHawksNestServiceFacade.DeleteRule
		 * @return {DeleteRuleResult} Success
		 */
		DeleteRule(requestBody: DeleteRuleRequest): Observable<DeleteRuleResult> {
			return this.http.post<DeleteRuleResult>(this.baseUri + '#X-Amz-Target=AWSHawksNestServiceFacade.DeleteRule', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Deletes a variable.</p> <p>You can't delete variables that are included in an event type in Amazon Fraud Detector.</p> <p>Amazon Fraud Detector automatically deletes model output variables and SageMaker model output variables when you delete the model. You can't delete these variables manually.</p> <p>When you delete a variable, Amazon Fraud Detector permanently deletes that variable and the data is no longer stored in Amazon Fraud Detector.</p>
		 * Post #X-Amz-Target=AWSHawksNestServiceFacade.DeleteVariable
		 * @return {DeleteVariableResult} Success
		 */
		DeleteVariable(requestBody: DeleteVariableRequest): Observable<DeleteVariableResult> {
			return this.http.post<DeleteVariableResult>(this.baseUri + '#X-Amz-Target=AWSHawksNestServiceFacade.DeleteVariable', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
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
		DescribeModelVersions(maxResults: string | null | undefined, nextToken: string | null | undefined, requestBody: DescribeModelVersionsRequest): Observable<DescribeModelVersionsResult> {
			return this.http.post<DescribeModelVersionsResult>(this.baseUri + '#X-Amz-Target=AWSHawksNestServiceFacade.DescribeModelVersions?maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets all batch import jobs or a specific job of the specified ID. This is a paginated API. If you provide a null <code>maxResults</code>, this action retrieves a maximum of 50 records per page. If you provide a <code>maxResults</code>, the value must be between 1 and 50. To get the next page results, provide the pagination token from the <code>GetBatchImportJobsResponse</code> as part of your request. A null pagination token fetches the records from the beginning.
		 * Post #X-Amz-Target=AWSHawksNestServiceFacade.GetBatchImportJobs
		 * @param {string} maxResults Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {GetBatchImportJobsResult} Success
		 */
		GetBatchImportJobs(maxResults: string | null | undefined, nextToken: string | null | undefined, requestBody: GetBatchImportJobsRequest): Observable<GetBatchImportJobsResult> {
			return this.http.post<GetBatchImportJobsResult>(this.baseUri + '#X-Amz-Target=AWSHawksNestServiceFacade.GetBatchImportJobs?maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets all batch prediction jobs or a specific job if you specify a job ID. This is a paginated API. If you provide a null maxResults, this action retrieves a maximum of 50 records per page. If you provide a maxResults, the value must be between 1 and 50. To get the next page results, provide the pagination token from the GetBatchPredictionJobsResponse as part of your request. A null pagination token fetches the records from the beginning.
		 * Post #X-Amz-Target=AWSHawksNestServiceFacade.GetBatchPredictionJobs
		 * @param {string} maxResults Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {GetBatchPredictionJobsResult} Success
		 */
		GetBatchPredictionJobs(maxResults: string | null | undefined, nextToken: string | null | undefined, requestBody: GetBatchPredictionJobsRequest): Observable<GetBatchPredictionJobsResult> {
			return this.http.post<GetBatchPredictionJobsResult>(this.baseUri + '#X-Amz-Target=AWSHawksNestServiceFacade.GetBatchPredictionJobs?maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves the status of a <code>DeleteEventsByEventType</code> action.
		 * Post #X-Amz-Target=AWSHawksNestServiceFacade.GetDeleteEventsByEventTypeStatus
		 * @return {GetDeleteEventsByEventTypeStatusResult} Success
		 */
		GetDeleteEventsByEventTypeStatus(requestBody: GetDeleteEventsByEventTypeStatusRequest): Observable<GetDeleteEventsByEventTypeStatusResult> {
			return this.http.post<GetDeleteEventsByEventTypeStatusResult>(this.baseUri + '#X-Amz-Target=AWSHawksNestServiceFacade.GetDeleteEventsByEventTypeStatus', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
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
		 * Gets all detectors or a single detector if a <code>detectorId</code> is specified. This is a paginated API. If you provide a null <code>maxResults</code>, this action retrieves a maximum of 10 records per page. If you provide a <code>maxResults</code>, the value must be between 5 and 10. To get the next page results, provide the pagination token from the <code>GetDetectorsResponse</code> as part of your request. A null pagination token fetches the records from the beginning.
		 * Post #X-Amz-Target=AWSHawksNestServiceFacade.GetDetectors
		 * @param {string} maxResults Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {GetDetectorsResult} Success
		 */
		GetDetectors(maxResults: string | null | undefined, nextToken: string | null | undefined, requestBody: GetDetectorsRequest): Observable<GetDetectorsResult> {
			return this.http.post<GetDetectorsResult>(this.baseUri + '#X-Amz-Target=AWSHawksNestServiceFacade.GetDetectors?maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets all entity types or a specific entity type if a name is specified. This is a paginated API. If you provide a null <code>maxResults</code>, this action retrieves a maximum of 10 records per page. If you provide a <code>maxResults</code>, the value must be between 5 and 10. To get the next page results, provide the pagination token from the <code>GetEntityTypesResponse</code> as part of your request. A null pagination token fetches the records from the beginning.
		 * Post #X-Amz-Target=AWSHawksNestServiceFacade.GetEntityTypes
		 * @param {string} maxResults Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {GetEntityTypesResult} Success
		 */
		GetEntityTypes(maxResults: string | null | undefined, nextToken: string | null | undefined, requestBody: GetEntityTypesRequest): Observable<GetEntityTypesResult> {
			return this.http.post<GetEntityTypesResult>(this.baseUri + '#X-Amz-Target=AWSHawksNestServiceFacade.GetEntityTypes?maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves details of events stored with Amazon Fraud Detector. This action does not retrieve prediction results.
		 * Post #X-Amz-Target=AWSHawksNestServiceFacade.GetEvent
		 * @return {GetEventResult} Success
		 */
		GetEvent(requestBody: GetEventRequest): Observable<GetEventResult> {
			return this.http.post<GetEventResult>(this.baseUri + '#X-Amz-Target=AWSHawksNestServiceFacade.GetEvent', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Evaluates an event against a detector version. If a version ID is not provided, the detector’s (<code>ACTIVE</code>) version is used.
		 * Post #X-Amz-Target=AWSHawksNestServiceFacade.GetEventPrediction
		 * @return {GetEventPredictionResult} Success
		 */
		GetEventPrediction(requestBody: GetEventPredictionRequest): Observable<GetEventPredictionResult> {
			return this.http.post<GetEventPredictionResult>(this.baseUri + '#X-Amz-Target=AWSHawksNestServiceFacade.GetEventPrediction', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets details of the past fraud predictions for the specified event ID, event type, detector ID, and detector version ID that was generated in the specified time period.
		 * Post #X-Amz-Target=AWSHawksNestServiceFacade.GetEventPredictionMetadata
		 * @return {GetEventPredictionMetadataResult} Success
		 */
		GetEventPredictionMetadata(requestBody: GetEventPredictionMetadataRequest): Observable<GetEventPredictionMetadataResult> {
			return this.http.post<GetEventPredictionMetadataResult>(this.baseUri + '#X-Amz-Target=AWSHawksNestServiceFacade.GetEventPredictionMetadata', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets all event types or a specific event type if name is provided. This is a paginated API. If you provide a null <code>maxResults</code>, this action retrieves a maximum of 10 records per page. If you provide a <code>maxResults</code>, the value must be between 5 and 10. To get the next page results, provide the pagination token from the <code>GetEventTypesResponse</code> as part of your request. A null pagination token fetches the records from the beginning.
		 * Post #X-Amz-Target=AWSHawksNestServiceFacade.GetEventTypes
		 * @param {string} maxResults Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {GetEventTypesResult} Success
		 */
		GetEventTypes(maxResults: string | null | undefined, nextToken: string | null | undefined, requestBody: GetEventTypesRequest): Observable<GetEventTypesResult> {
			return this.http.post<GetEventTypesResult>(this.baseUri + '#X-Amz-Target=AWSHawksNestServiceFacade.GetEventTypes?maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets the details for one or more Amazon SageMaker models that have been imported into the service. This is a paginated API. If you provide a null <code>maxResults</code>, this actions retrieves a maximum of 10 records per page. If you provide a <code>maxResults</code>, the value must be between 5 and 10. To get the next page results, provide the pagination token from the <code>GetExternalModelsResult</code> as part of your request. A null pagination token fetches the records from the beginning.
		 * Post #X-Amz-Target=AWSHawksNestServiceFacade.GetExternalModels
		 * @param {string} maxResults Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {GetExternalModelsResult} Success
		 */
		GetExternalModels(maxResults: string | null | undefined, nextToken: string | null | undefined, requestBody: GetExternalModelsRequest): Observable<GetExternalModelsResult> {
			return this.http.post<GetExternalModelsResult>(this.baseUri + '#X-Amz-Target=AWSHawksNestServiceFacade.GetExternalModels?maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets the encryption key if a KMS key has been specified to be used to encrypt content in Amazon Fraud Detector.
		 * Post #X-Amz-Target=AWSHawksNestServiceFacade.GetKMSEncryptionKey
		 * @return {GetKMSEncryptionKeyResult} Success
		 */
		GetKMSEncryptionKey(): Observable<GetKMSEncryptionKeyResult> {
			return this.http.post<GetKMSEncryptionKeyResult>(this.baseUri + '#X-Amz-Target=AWSHawksNestServiceFacade.GetKMSEncryptionKey', null, {});
		}

		/**
		 * Gets all labels or a specific label if name is provided. This is a paginated API. If you provide a null <code>maxResults</code>, this action retrieves a maximum of 50 records per page. If you provide a <code>maxResults</code>, the value must be between 10 and 50. To get the next page results, provide the pagination token from the <code>GetGetLabelsResponse</code> as part of your request. A null pagination token fetches the records from the beginning.
		 * Post #X-Amz-Target=AWSHawksNestServiceFacade.GetLabels
		 * @param {string} maxResults Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {GetLabelsResult} Success
		 */
		GetLabels(maxResults: string | null | undefined, nextToken: string | null | undefined, requestBody: GetLabelsRequest): Observable<GetLabelsResult> {
			return this.http.post<GetLabelsResult>(this.baseUri + '#X-Amz-Target=AWSHawksNestServiceFacade.GetLabels?maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets all the elements in the specified list.
		 * Post #X-Amz-Target=AWSHawksNestServiceFacade.GetListElements
		 * @param {string} maxResults Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {GetListElementsResult} Success
		 */
		GetListElements(maxResults: string | null | undefined, nextToken: string | null | undefined, requestBody: GetListElementsRequest): Observable<GetListElementsResult> {
			return this.http.post<GetListElementsResult>(this.baseUri + '#X-Amz-Target=AWSHawksNestServiceFacade.GetListElements?maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets the metadata of either all the lists under the account or the specified list.
		 * Post #X-Amz-Target=AWSHawksNestServiceFacade.GetListsMetadata
		 * @param {string} maxResults Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {GetListsMetadataResult} Success
		 */
		GetListsMetadata(maxResults: string | null | undefined, nextToken: string | null | undefined, requestBody: GetListsMetadataRequest): Observable<GetListsMetadataResult> {
			return this.http.post<GetListsMetadataResult>(this.baseUri + '#X-Amz-Target=AWSHawksNestServiceFacade.GetListsMetadata?maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets the details of the specified model version.
		 * Post #X-Amz-Target=AWSHawksNestServiceFacade.GetModelVersion
		 * @return {GetModelVersionResult} Success
		 */
		GetModelVersion(requestBody: GetModelVersionRequest): Observable<GetModelVersionResult> {
			return this.http.post<GetModelVersionResult>(this.baseUri + '#X-Amz-Target=AWSHawksNestServiceFacade.GetModelVersion', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Gets one or more models. Gets all models for the Amazon Web Services account if no model type and no model id provided. Gets all models for the Amazon Web Services account and model type, if the model type is specified but model id is not provided. Gets a specific model if (model type, model id) tuple is specified. </p> <p>This is a paginated API. If you provide a null <code>maxResults</code>, this action retrieves a maximum of 10 records per page. If you provide a <code>maxResults</code>, the value must be between 1 and 10. To get the next page results, provide the pagination token from the response as part of your request. A null pagination token fetches the records from the beginning.</p>
		 * Post #X-Amz-Target=AWSHawksNestServiceFacade.GetModels
		 * @param {string} maxResults Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {GetModelsResult} Success
		 */
		GetModels(maxResults: string | null | undefined, nextToken: string | null | undefined, requestBody: GetModelsRequest): Observable<GetModelsResult> {
			return this.http.post<GetModelsResult>(this.baseUri + '#X-Amz-Target=AWSHawksNestServiceFacade.GetModels?maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets one or more outcomes. This is a paginated API. If you provide a null <code>maxResults</code>, this actions retrieves a maximum of 100 records per page. If you provide a <code>maxResults</code>, the value must be between 50 and 100. To get the next page results, provide the pagination token from the <code>GetOutcomesResult</code> as part of your request. A null pagination token fetches the records from the beginning.
		 * Post #X-Amz-Target=AWSHawksNestServiceFacade.GetOutcomes
		 * @param {string} maxResults Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {GetOutcomesResult} Success
		 */
		GetOutcomes(maxResults: string | null | undefined, nextToken: string | null | undefined, requestBody: GetOutcomesRequest): Observable<GetOutcomesResult> {
			return this.http.post<GetOutcomesResult>(this.baseUri + '#X-Amz-Target=AWSHawksNestServiceFacade.GetOutcomes?maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Get all rules for a detector (paginated) if <code>ruleId</code> and <code>ruleVersion</code> are not specified. Gets all rules for the detector and the <code>ruleId</code> if present (paginated). Gets a specific rule if both the <code>ruleId</code> and the <code>ruleVersion</code> are specified.</p> <p>This is a paginated API. Providing null maxResults results in retrieving maximum of 100 records per page. If you provide maxResults the value must be between 50 and 100. To get the next page result, a provide a pagination token from GetRulesResult as part of your request. Null pagination token fetches the records from the beginning.</p>
		 * Post #X-Amz-Target=AWSHawksNestServiceFacade.GetRules
		 * @param {string} maxResults Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {GetRulesResult} Success
		 */
		GetRules(maxResults: string | null | undefined, nextToken: string | null | undefined, requestBody: GetRulesRequest): Observable<GetRulesResult> {
			return this.http.post<GetRulesResult>(this.baseUri + '#X-Amz-Target=AWSHawksNestServiceFacade.GetRules?maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets all of the variables or the specific variable. This is a paginated API. Providing null <code>maxSizePerPage</code> results in retrieving maximum of 100 records per page. If you provide <code>maxSizePerPage</code> the value must be between 50 and 100. To get the next page result, a provide a pagination token from <code>GetVariablesResult</code> as part of your request. Null pagination token fetches the records from the beginning.
		 * Post #X-Amz-Target=AWSHawksNestServiceFacade.GetVariables
		 * @param {string} maxResults Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {GetVariablesResult} Success
		 */
		GetVariables(maxResults: string | null | undefined, nextToken: string | null | undefined, requestBody: GetVariablesRequest): Observable<GetVariablesResult> {
			return this.http.post<GetVariablesResult>(this.baseUri + '#X-Amz-Target=AWSHawksNestServiceFacade.GetVariables?maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Gets a list of past predictions. The list can be filtered by detector ID, detector version ID, event ID, event type, or by specifying a time period. If filter is not specified, the most recent prediction is returned.</p> <p>For example, the following filter lists all past predictions for <code>xyz</code> event type - <code>{ "eventType":{ "value": "xyz" }” } </code> </p> <p>This is a paginated API. If you provide a null <code>maxResults</code>, this action will retrieve a maximum of 10 records per page. If you provide a <code>maxResults</code>, the value must be between 50 and 100. To get the next page results, provide the <code>nextToken</code> from the response as part of your request. A null <code>nextToken</code> fetches the records from the beginning. </p>
		 * Post #X-Amz-Target=AWSHawksNestServiceFacade.ListEventPredictions
		 * @param {string} maxResults Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {ListEventPredictionsResult} Success
		 */
		ListEventPredictions(maxResults: string | null | undefined, nextToken: string | null | undefined, requestBody: ListEventPredictionsRequest): Observable<ListEventPredictionsResult> {
			return this.http.post<ListEventPredictionsResult>(this.baseUri + '#X-Amz-Target=AWSHawksNestServiceFacade.ListEventPredictions?maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists all tags associated with the resource. This is a paginated API. To get the next page results, provide the pagination token from the response as part of your request. A null pagination token fetches the records from the beginning.
		 * Post #X-Amz-Target=AWSHawksNestServiceFacade.ListTagsForResource
		 * @param {string} maxResults Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {ListTagsForResourceResult} Success
		 */
		ListTagsForResource(maxResults: string | null | undefined, nextToken: string | null | undefined, requestBody: ListTagsForResourceRequest): Observable<ListTagsForResourceResult> {
			return this.http.post<ListTagsForResourceResult>(this.baseUri + '#X-Amz-Target=AWSHawksNestServiceFacade.ListTagsForResource?maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
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
		 * Creates or updates an entity type. An entity represents who is performing the event. As part of a fraud prediction, you pass the entity ID to indicate the specific entity who performed the event. An entity type classifies the entity. Example classifications include customer, merchant, or account.
		 * Post #X-Amz-Target=AWSHawksNestServiceFacade.PutEntityType
		 * @return {PutEntityTypeResult} Success
		 */
		PutEntityType(requestBody: PutEntityTypeRequest): Observable<PutEntityTypeResult> {
			return this.http.post<PutEntityTypeResult>(this.baseUri + '#X-Amz-Target=AWSHawksNestServiceFacade.PutEntityType', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Creates or updates an event type. An event is a business activity that is evaluated for fraud risk. With Amazon Fraud Detector, you generate fraud predictions for events. An event type defines the structure for an event sent to Amazon Fraud Detector. This includes the variables sent as part of the event, the entity performing the event (such as a customer), and the labels that classify the event. Example event types include online payment transactions, account registrations, and authentications.
		 * Post #X-Amz-Target=AWSHawksNestServiceFacade.PutEventType
		 * @return {PutEventTypeResult} Success
		 */
		PutEventType(requestBody: PutEventTypeRequest): Observable<PutEventTypeResult> {
			return this.http.post<PutEventTypeResult>(this.baseUri + '#X-Amz-Target=AWSHawksNestServiceFacade.PutEventType', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
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
		 * Specifies the KMS key to be used to encrypt content in Amazon Fraud Detector.
		 * Post #X-Amz-Target=AWSHawksNestServiceFacade.PutKMSEncryptionKey
		 * @return {PutKMSEncryptionKeyResult} Success
		 */
		PutKMSEncryptionKey(requestBody: PutKMSEncryptionKeyRequest): Observable<PutKMSEncryptionKeyResult> {
			return this.http.post<PutKMSEncryptionKeyResult>(this.baseUri + '#X-Amz-Target=AWSHawksNestServiceFacade.PutKMSEncryptionKey', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Creates or updates label. A label classifies an event as fraudulent or legitimate. Labels are associated with event types and used to train supervised machine learning models in Amazon Fraud Detector.
		 * Post #X-Amz-Target=AWSHawksNestServiceFacade.PutLabel
		 * @return {PutLabelResult} Success
		 */
		PutLabel(requestBody: PutLabelRequest): Observable<PutLabelResult> {
			return this.http.post<PutLabelResult>(this.baseUri + '#X-Amz-Target=AWSHawksNestServiceFacade.PutLabel', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
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
		 * Stores events in Amazon Fraud Detector without generating fraud predictions for those events. For example, you can use <code>SendEvent</code> to upload a historical dataset, which you can then later use to train a model.
		 * Post #X-Amz-Target=AWSHawksNestServiceFacade.SendEvent
		 * @return {SendEventResult} Success
		 */
		SendEvent(requestBody: SendEventRequest): Observable<SendEventResult> {
			return this.http.post<SendEventResult>(this.baseUri + '#X-Amz-Target=AWSHawksNestServiceFacade.SendEvent', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Assigns tags to a resource.
		 * Post #X-Amz-Target=AWSHawksNestServiceFacade.TagResource
		 * @return {TagResourceResult} Success
		 */
		TagResource(requestBody: TagResourceRequest): Observable<TagResourceResult> {
			return this.http.post<TagResourceResult>(this.baseUri + '#X-Amz-Target=AWSHawksNestServiceFacade.TagResource', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Removes tags from a resource.
		 * Post #X-Amz-Target=AWSHawksNestServiceFacade.UntagResource
		 * @return {UntagResourceResult} Success
		 */
		UntagResource(requestBody: UntagResourceRequest): Observable<UntagResourceResult> {
			return this.http.post<UntagResourceResult>(this.baseUri + '#X-Amz-Target=AWSHawksNestServiceFacade.UntagResource', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Updates a detector version. The detector version attributes that you can update include models, external model endpoints, rules, rule execution mode, and description. You can only update a <code>DRAFT</code> detector version.
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
		 * Updates the specified event with a new label.
		 * Post #X-Amz-Target=AWSHawksNestServiceFacade.UpdateEventLabel
		 * @return {UpdateEventLabelResult} Success
		 */
		UpdateEventLabel(requestBody: UpdateEventLabelRequest): Observable<UpdateEventLabelResult> {
			return this.http.post<UpdateEventLabelResult>(this.baseUri + '#X-Amz-Target=AWSHawksNestServiceFacade.UpdateEventLabel', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Updates a list.
		 * Post #X-Amz-Target=AWSHawksNestServiceFacade.UpdateList
		 * @return {UpdateListResult} Success
		 */
		UpdateList(requestBody: UpdateListRequest): Observable<UpdateListResult> {
			return this.http.post<UpdateListResult>(this.baseUri + '#X-Amz-Target=AWSHawksNestServiceFacade.UpdateList', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Updates model description.
		 * Post #X-Amz-Target=AWSHawksNestServiceFacade.UpdateModel
		 * @return {UpdateModelResult} Success
		 */
		UpdateModel(requestBody: UpdateModelRequest): Observable<UpdateModelResult> {
			return this.http.post<UpdateModelResult>(this.baseUri + '#X-Amz-Target=AWSHawksNestServiceFacade.UpdateModel', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Updates a model version. Updating a model version retrains an existing model version using updated training data and produces a new minor version of the model. You can update the training data set location and data access role attributes using this action. This action creates and trains a new minor version of the model, for example version 1.01, 1.02, 1.03.
		 * Post #X-Amz-Target=AWSHawksNestServiceFacade.UpdateModelVersion
		 * @return {UpdateModelVersionResult} Success
		 */
		UpdateModelVersion(requestBody: UpdateModelVersionRequest): Observable<UpdateModelVersionResult> {
			return this.http.post<UpdateModelVersionResult>(this.baseUri + '#X-Amz-Target=AWSHawksNestServiceFacade.UpdateModelVersion', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Updates the status of a model version.</p> <p>You can perform the following status updates:</p> <ol> <li> <p>Change the <code>TRAINING_IN_PROGRESS</code> status to <code>TRAINING_CANCELLED</code>.</p> </li> <li> <p>Change the <code>TRAINING_COMPLETE</code> status to <code>ACTIVE</code>.</p> </li> <li> <p>Change <code>ACTIVE</code> to <code>INACTIVE</code>.</p> </li> </ol>
		 * Post #X-Amz-Target=AWSHawksNestServiceFacade.UpdateModelVersionStatus
		 * @return {UpdateModelVersionStatusResult} Success
		 */
		UpdateModelVersionStatus(requestBody: UpdateModelVersionStatusRequest): Observable<UpdateModelVersionStatusResult> {
			return this.http.post<UpdateModelVersionStatusResult>(this.baseUri + '#X-Amz-Target=AWSHawksNestServiceFacade.UpdateModelVersionStatus', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Updates a rule's metadata. The description attribute can be updated.
		 * Post #X-Amz-Target=AWSHawksNestServiceFacade.UpdateRuleMetadata
		 * @return {UpdateRuleMetadataResult} Success
		 */
		UpdateRuleMetadata(requestBody: UpdateRuleMetadataRequest): Observable<UpdateRuleMetadataResult> {
			return this.http.post<UpdateRuleMetadataResult>(this.baseUri + '#X-Amz-Target=AWSHawksNestServiceFacade.UpdateRuleMetadata', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Updates a rule version resulting in a new rule version. Updates a rule version resulting in a new rule version (version 1, 2, 3 ...).
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

	export enum BatchCreateVariableX_Amz_Target { 'AWSHawksNestServiceFacade.BatchCreateVariable' = 'AWSHawksNestServiceFacade.BatchCreateVariable' }

	export enum BatchGetVariableX_Amz_Target { 'AWSHawksNestServiceFacade.BatchGetVariable' = 'AWSHawksNestServiceFacade.BatchGetVariable' }

	export enum CancelBatchImportJobX_Amz_Target { 'AWSHawksNestServiceFacade.CancelBatchImportJob' = 'AWSHawksNestServiceFacade.CancelBatchImportJob' }

	export enum CancelBatchPredictionJobX_Amz_Target { 'AWSHawksNestServiceFacade.CancelBatchPredictionJob' = 'AWSHawksNestServiceFacade.CancelBatchPredictionJob' }

	export enum CreateBatchImportJobX_Amz_Target { 'AWSHawksNestServiceFacade.CreateBatchImportJob' = 'AWSHawksNestServiceFacade.CreateBatchImportJob' }

	export enum CreateBatchPredictionJobX_Amz_Target { 'AWSHawksNestServiceFacade.CreateBatchPredictionJob' = 'AWSHawksNestServiceFacade.CreateBatchPredictionJob' }

	export enum CreateDetectorVersionX_Amz_Target { 'AWSHawksNestServiceFacade.CreateDetectorVersion' = 'AWSHawksNestServiceFacade.CreateDetectorVersion' }

	export enum CreateListX_Amz_Target { 'AWSHawksNestServiceFacade.CreateList' = 'AWSHawksNestServiceFacade.CreateList' }

	export enum CreateModelX_Amz_Target { 'AWSHawksNestServiceFacade.CreateModel' = 'AWSHawksNestServiceFacade.CreateModel' }

	export enum CreateModelVersionX_Amz_Target { 'AWSHawksNestServiceFacade.CreateModelVersion' = 'AWSHawksNestServiceFacade.CreateModelVersion' }

	export enum CreateRuleX_Amz_Target { 'AWSHawksNestServiceFacade.CreateRule' = 'AWSHawksNestServiceFacade.CreateRule' }

	export enum CreateVariableX_Amz_Target { 'AWSHawksNestServiceFacade.CreateVariable' = 'AWSHawksNestServiceFacade.CreateVariable' }

	export enum DeleteBatchImportJobX_Amz_Target { 'AWSHawksNestServiceFacade.DeleteBatchImportJob' = 'AWSHawksNestServiceFacade.DeleteBatchImportJob' }

	export enum DeleteBatchPredictionJobX_Amz_Target { 'AWSHawksNestServiceFacade.DeleteBatchPredictionJob' = 'AWSHawksNestServiceFacade.DeleteBatchPredictionJob' }

	export enum DeleteDetectorX_Amz_Target { 'AWSHawksNestServiceFacade.DeleteDetector' = 'AWSHawksNestServiceFacade.DeleteDetector' }

	export enum DeleteDetectorVersionX_Amz_Target { 'AWSHawksNestServiceFacade.DeleteDetectorVersion' = 'AWSHawksNestServiceFacade.DeleteDetectorVersion' }

	export enum DeleteEntityTypeX_Amz_Target { 'AWSHawksNestServiceFacade.DeleteEntityType' = 'AWSHawksNestServiceFacade.DeleteEntityType' }

	export enum DeleteEventX_Amz_Target { 'AWSHawksNestServiceFacade.DeleteEvent' = 'AWSHawksNestServiceFacade.DeleteEvent' }

	export enum DeleteEventTypeX_Amz_Target { 'AWSHawksNestServiceFacade.DeleteEventType' = 'AWSHawksNestServiceFacade.DeleteEventType' }

	export enum DeleteEventsByEventTypeX_Amz_Target { 'AWSHawksNestServiceFacade.DeleteEventsByEventType' = 'AWSHawksNestServiceFacade.DeleteEventsByEventType' }

	export enum DeleteExternalModelX_Amz_Target { 'AWSHawksNestServiceFacade.DeleteExternalModel' = 'AWSHawksNestServiceFacade.DeleteExternalModel' }

	export enum DeleteLabelX_Amz_Target { 'AWSHawksNestServiceFacade.DeleteLabel' = 'AWSHawksNestServiceFacade.DeleteLabel' }

	export enum DeleteListX_Amz_Target { 'AWSHawksNestServiceFacade.DeleteList' = 'AWSHawksNestServiceFacade.DeleteList' }

	export enum DeleteModelX_Amz_Target { 'AWSHawksNestServiceFacade.DeleteModel' = 'AWSHawksNestServiceFacade.DeleteModel' }

	export enum DeleteModelVersionX_Amz_Target { 'AWSHawksNestServiceFacade.DeleteModelVersion' = 'AWSHawksNestServiceFacade.DeleteModelVersion' }

	export enum DeleteOutcomeX_Amz_Target { 'AWSHawksNestServiceFacade.DeleteOutcome' = 'AWSHawksNestServiceFacade.DeleteOutcome' }

	export enum DeleteRuleX_Amz_Target { 'AWSHawksNestServiceFacade.DeleteRule' = 'AWSHawksNestServiceFacade.DeleteRule' }

	export enum DeleteVariableX_Amz_Target { 'AWSHawksNestServiceFacade.DeleteVariable' = 'AWSHawksNestServiceFacade.DeleteVariable' }

	export enum DescribeDetectorX_Amz_Target { 'AWSHawksNestServiceFacade.DescribeDetector' = 'AWSHawksNestServiceFacade.DescribeDetector' }

	export enum DescribeModelVersionsX_Amz_Target { 'AWSHawksNestServiceFacade.DescribeModelVersions' = 'AWSHawksNestServiceFacade.DescribeModelVersions' }

	export enum GetBatchImportJobsX_Amz_Target { 'AWSHawksNestServiceFacade.GetBatchImportJobs' = 'AWSHawksNestServiceFacade.GetBatchImportJobs' }

	export enum GetBatchPredictionJobsX_Amz_Target { 'AWSHawksNestServiceFacade.GetBatchPredictionJobs' = 'AWSHawksNestServiceFacade.GetBatchPredictionJobs' }

	export enum GetDeleteEventsByEventTypeStatusX_Amz_Target { 'AWSHawksNestServiceFacade.GetDeleteEventsByEventTypeStatus' = 'AWSHawksNestServiceFacade.GetDeleteEventsByEventTypeStatus' }

	export enum GetDetectorVersionX_Amz_Target { 'AWSHawksNestServiceFacade.GetDetectorVersion' = 'AWSHawksNestServiceFacade.GetDetectorVersion' }

	export enum GetDetectorsX_Amz_Target { 'AWSHawksNestServiceFacade.GetDetectors' = 'AWSHawksNestServiceFacade.GetDetectors' }

	export enum GetEntityTypesX_Amz_Target { 'AWSHawksNestServiceFacade.GetEntityTypes' = 'AWSHawksNestServiceFacade.GetEntityTypes' }

	export enum GetEventX_Amz_Target { 'AWSHawksNestServiceFacade.GetEvent' = 'AWSHawksNestServiceFacade.GetEvent' }

	export enum GetEventPredictionX_Amz_Target { 'AWSHawksNestServiceFacade.GetEventPrediction' = 'AWSHawksNestServiceFacade.GetEventPrediction' }

	export enum GetEventPredictionMetadataX_Amz_Target { 'AWSHawksNestServiceFacade.GetEventPredictionMetadata' = 'AWSHawksNestServiceFacade.GetEventPredictionMetadata' }

	export enum GetEventTypesX_Amz_Target { 'AWSHawksNestServiceFacade.GetEventTypes' = 'AWSHawksNestServiceFacade.GetEventTypes' }

	export enum GetExternalModelsX_Amz_Target { 'AWSHawksNestServiceFacade.GetExternalModels' = 'AWSHawksNestServiceFacade.GetExternalModels' }

	export enum GetKMSEncryptionKeyX_Amz_Target { 'AWSHawksNestServiceFacade.GetKMSEncryptionKey' = 'AWSHawksNestServiceFacade.GetKMSEncryptionKey' }

	export enum GetLabelsX_Amz_Target { 'AWSHawksNestServiceFacade.GetLabels' = 'AWSHawksNestServiceFacade.GetLabels' }

	export enum GetListElementsX_Amz_Target { 'AWSHawksNestServiceFacade.GetListElements' = 'AWSHawksNestServiceFacade.GetListElements' }

	export enum GetListsMetadataX_Amz_Target { 'AWSHawksNestServiceFacade.GetListsMetadata' = 'AWSHawksNestServiceFacade.GetListsMetadata' }

	export enum GetModelVersionX_Amz_Target { 'AWSHawksNestServiceFacade.GetModelVersion' = 'AWSHawksNestServiceFacade.GetModelVersion' }

	export enum GetModelsX_Amz_Target { 'AWSHawksNestServiceFacade.GetModels' = 'AWSHawksNestServiceFacade.GetModels' }

	export enum GetOutcomesX_Amz_Target { 'AWSHawksNestServiceFacade.GetOutcomes' = 'AWSHawksNestServiceFacade.GetOutcomes' }

	export enum GetRulesX_Amz_Target { 'AWSHawksNestServiceFacade.GetRules' = 'AWSHawksNestServiceFacade.GetRules' }

	export enum GetVariablesX_Amz_Target { 'AWSHawksNestServiceFacade.GetVariables' = 'AWSHawksNestServiceFacade.GetVariables' }

	export enum ListEventPredictionsX_Amz_Target { 'AWSHawksNestServiceFacade.ListEventPredictions' = 'AWSHawksNestServiceFacade.ListEventPredictions' }

	export enum ListTagsForResourceX_Amz_Target { 'AWSHawksNestServiceFacade.ListTagsForResource' = 'AWSHawksNestServiceFacade.ListTagsForResource' }

	export enum PutDetectorX_Amz_Target { 'AWSHawksNestServiceFacade.PutDetector' = 'AWSHawksNestServiceFacade.PutDetector' }

	export enum PutEntityTypeX_Amz_Target { 'AWSHawksNestServiceFacade.PutEntityType' = 'AWSHawksNestServiceFacade.PutEntityType' }

	export enum PutEventTypeX_Amz_Target { 'AWSHawksNestServiceFacade.PutEventType' = 'AWSHawksNestServiceFacade.PutEventType' }

	export enum PutExternalModelX_Amz_Target { 'AWSHawksNestServiceFacade.PutExternalModel' = 'AWSHawksNestServiceFacade.PutExternalModel' }

	export enum PutKMSEncryptionKeyX_Amz_Target { 'AWSHawksNestServiceFacade.PutKMSEncryptionKey' = 'AWSHawksNestServiceFacade.PutKMSEncryptionKey' }

	export enum PutLabelX_Amz_Target { 'AWSHawksNestServiceFacade.PutLabel' = 'AWSHawksNestServiceFacade.PutLabel' }

	export enum PutOutcomeX_Amz_Target { 'AWSHawksNestServiceFacade.PutOutcome' = 'AWSHawksNestServiceFacade.PutOutcome' }

	export enum SendEventX_Amz_Target { 'AWSHawksNestServiceFacade.SendEvent' = 'AWSHawksNestServiceFacade.SendEvent' }

	export enum TagResourceX_Amz_Target { 'AWSHawksNestServiceFacade.TagResource' = 'AWSHawksNestServiceFacade.TagResource' }

	export enum UntagResourceX_Amz_Target { 'AWSHawksNestServiceFacade.UntagResource' = 'AWSHawksNestServiceFacade.UntagResource' }

	export enum UpdateDetectorVersionX_Amz_Target { 'AWSHawksNestServiceFacade.UpdateDetectorVersion' = 'AWSHawksNestServiceFacade.UpdateDetectorVersion' }

	export enum UpdateDetectorVersionMetadataX_Amz_Target { 'AWSHawksNestServiceFacade.UpdateDetectorVersionMetadata' = 'AWSHawksNestServiceFacade.UpdateDetectorVersionMetadata' }

	export enum UpdateDetectorVersionStatusX_Amz_Target { 'AWSHawksNestServiceFacade.UpdateDetectorVersionStatus' = 'AWSHawksNestServiceFacade.UpdateDetectorVersionStatus' }

	export enum UpdateEventLabelX_Amz_Target { 'AWSHawksNestServiceFacade.UpdateEventLabel' = 'AWSHawksNestServiceFacade.UpdateEventLabel' }

	export enum UpdateListX_Amz_Target { 'AWSHawksNestServiceFacade.UpdateList' = 'AWSHawksNestServiceFacade.UpdateList' }

	export enum UpdateModelX_Amz_Target { 'AWSHawksNestServiceFacade.UpdateModel' = 'AWSHawksNestServiceFacade.UpdateModel' }

	export enum UpdateModelVersionX_Amz_Target { 'AWSHawksNestServiceFacade.UpdateModelVersion' = 'AWSHawksNestServiceFacade.UpdateModelVersion' }

	export enum UpdateModelVersionStatusX_Amz_Target { 'AWSHawksNestServiceFacade.UpdateModelVersionStatus' = 'AWSHawksNestServiceFacade.UpdateModelVersionStatus' }

	export enum UpdateRuleMetadataX_Amz_Target { 'AWSHawksNestServiceFacade.UpdateRuleMetadata' = 'AWSHawksNestServiceFacade.UpdateRuleMetadata' }

	export enum UpdateRuleVersionX_Amz_Target { 'AWSHawksNestServiceFacade.UpdateRuleVersion' = 'AWSHawksNestServiceFacade.UpdateRuleVersion' }

	export enum UpdateVariableX_Amz_Target { 'AWSHawksNestServiceFacade.UpdateVariable' = 'AWSHawksNestServiceFacade.UpdateVariable' }

}

