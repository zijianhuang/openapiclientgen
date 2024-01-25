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
		name?: string | null;
		code?: number | null;
		message?: string | null;
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

		/**
		 * Required
		 * Minimum items: 1
		 * Maximum items: 25
		 */
		variableEntries: Array<VariableEntry>;
	}
	export interface BatchCreateVariableRequestFormProperties {
	}
	export function CreateBatchCreateVariableRequestFormGroup() {
		return new FormGroup<BatchCreateVariableRequestFormProperties>({
		});

	}


	/** The variable entry in a list. */
	export interface VariableEntry {
		name?: string | null;
		dataType?: string | null;
		dataSource?: string | null;
		defaultValue?: string | null;
		description?: string | null;
		variableType?: string | null;
	}

	/** The variable entry in a list. */
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
		name?: string | null;
		dataType?: VariableDataType | null;
		dataSource?: VariableDataSource | null;
		defaultValue?: string | null;
		description?: string | null;
		variableType?: string | null;
		lastUpdatedTime?: string | null;
		createdTime?: string | null;
	}

	/** The variable. */
	export interface VariableFormProperties {
		name: FormControl<string | null | undefined>,
		dataType: FormControl<VariableDataType | null | undefined>,
		dataSource: FormControl<VariableDataSource | null | undefined>,
		defaultValue: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,
		variableType: FormControl<string | null | undefined>,
		lastUpdatedTime: FormControl<string | null | undefined>,
		createdTime: FormControl<string | null | undefined>,
	}
	export function CreateVariableFormGroup() {
		return new FormGroup<VariableFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			dataType: new FormControl<VariableDataType | null | undefined>(undefined),
			dataSource: new FormControl<VariableDataSource | null | undefined>(undefined),
			defaultValue: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			variableType: new FormControl<string | null | undefined>(undefined),
			lastUpdatedTime: new FormControl<string | null | undefined>(undefined),
			createdTime: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum VariableDataType { STRING = 0, INTEGER = 1, FLOAT = 2, BOOLEAN = 3 }

	export enum VariableDataSource { EVENT = 0, MODEL_SCORE = 1, EXTERNAL_MODEL_SCORE = 2 }


	/** Provides the error of the batch get variable API. */
	export interface BatchGetVariableError {
		name?: string | null;
		code?: number | null;
		message?: string | null;
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

		/**
		 * Required
		 * Minimum items: 1
		 * Maximum items: 100
		 */
		names: Array<string>;
	}
	export interface BatchGetVariableRequestFormProperties {
	}
	export function CreateBatchGetVariableRequestFormGroup() {
		return new FormGroup<BatchGetVariableRequestFormProperties>({
		});

	}

	export interface CreateDetectorVersionResult {

		/**
		 * Max length: 64
		 * Min length: 1
		 */
		detectorId?: string | null;

		/** Min length: 1 */
		detectorVersionId?: string | null;
		status?: CreateDetectorVersionResultStatus | null;
	}
	export interface CreateDetectorVersionResultFormProperties {

		/**
		 * Max length: 64
		 * Min length: 1
		 */
		detectorId: FormControl<string | null | undefined>,

		/** Min length: 1 */
		detectorVersionId: FormControl<string | null | undefined>,
		status: FormControl<CreateDetectorVersionResultStatus | null | undefined>,
	}
	export function CreateCreateDetectorVersionResultFormGroup() {
		return new FormGroup<CreateDetectorVersionResultFormProperties>({
			detectorId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(64), Validators.pattern('^[0-9a-z_-]+$')]),
			detectorVersionId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1)]),
			status: new FormControl<CreateDetectorVersionResultStatus | null | undefined>(undefined),
		});

	}

	export enum CreateDetectorVersionResultStatus { DRAFT = 0, ACTIVE = 1, INACTIVE = 2 }

	export interface CreateDetectorVersionRequest {

		/**
		 * Required
		 * Max length: 64
		 * Min length: 1
		 */
		detectorId: string;

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		description?: string | null;
		externalModelEndpoints?: Array<string>;

		/** Required */
		rules: Array<Rule>;
		modelVersions?: Array<ModelVersion>;
		ruleExecutionMode?: CreateDetectorVersionRequestRuleExecutionMode | null;
	}
	export interface CreateDetectorVersionRequestFormProperties {

		/**
		 * Required
		 * Max length: 64
		 * Min length: 1
		 */
		detectorId: FormControl<string | null | undefined>,

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		description: FormControl<string | null | undefined>,
		ruleExecutionMode: FormControl<CreateDetectorVersionRequestRuleExecutionMode | null | undefined>,
	}
	export function CreateCreateDetectorVersionRequestFormGroup() {
		return new FormGroup<CreateDetectorVersionRequestFormProperties>({
			detectorId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(64), Validators.pattern('^[0-9a-z_-]+$')]),
			description: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(128)]),
			ruleExecutionMode: new FormControl<CreateDetectorVersionRequestRuleExecutionMode | null | undefined>(undefined),
		});

	}


	/** A rule. */
	export interface Rule {

		/**
		 * Required
		 * Max length: 64
		 * Min length: 1
		 */
		detectorId: string;

		/**
		 * Required
		 * Max length: 64
		 * Min length: 1
		 */
		ruleId: string;

		/**
		 * Required
		 * Min length: 1
		 */
		ruleVersion: string;
	}

	/** A rule. */
	export interface RuleFormProperties {

		/**
		 * Required
		 * Max length: 64
		 * Min length: 1
		 */
		detectorId: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 64
		 * Min length: 1
		 */
		ruleId: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Min length: 1
		 */
		ruleVersion: FormControl<string | null | undefined>,
	}
	export function CreateRuleFormGroup() {
		return new FormGroup<RuleFormProperties>({
			detectorId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(64), Validators.pattern('^[0-9a-z_-]+$')]),
			ruleId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(64), Validators.pattern('^[0-9a-z_-]+$')]),
			ruleVersion: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1)]),
		});

	}


	/** The model version. */
	export interface ModelVersion {

		/**
		 * Required
		 * Max length: 64
		 * Min length: 1
		 */
		modelId: string;

		/** Required */
		modelType: ModelVersionModelType;

		/**
		 * Required
		 * Min length: 1
		 */
		modelVersionNumber: string;
	}

	/** The model version. */
	export interface ModelVersionFormProperties {

		/**
		 * Required
		 * Max length: 64
		 * Min length: 1
		 */
		modelId: FormControl<string | null | undefined>,

		/** Required */
		modelType: FormControl<ModelVersionModelType | null | undefined>,

		/**
		 * Required
		 * Min length: 1
		 */
		modelVersionNumber: FormControl<string | null | undefined>,
	}
	export function CreateModelVersionFormGroup() {
		return new FormGroup<ModelVersionFormProperties>({
			modelId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(64), Validators.pattern('^[0-9a-z_-]+$')]),
			modelType: new FormControl<ModelVersionModelType | null | undefined>(undefined, [Validators.required]),
			modelVersionNumber: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1)]),
		});

	}

	export enum ModelVersionModelType { ONLINE_FRAUD_INSIGHTS = 0 }

	export enum CreateDetectorVersionRequestRuleExecutionMode { ALL_MATCHED = 0, FIRST_MATCHED = 1 }

	export interface ResourceNotFoundException {
	}
	export interface ResourceNotFoundExceptionFormProperties {
	}
	export function CreateResourceNotFoundExceptionFormGroup() {
		return new FormGroup<ResourceNotFoundExceptionFormProperties>({
		});

	}

	export interface CreateModelVersionResult {

		/**
		 * Max length: 64
		 * Min length: 1
		 */
		modelId?: string | null;
		modelType?: ModelVersionModelType | null;

		/** Min length: 1 */
		modelVersionNumber?: string | null;
		status?: string | null;
	}
	export interface CreateModelVersionResultFormProperties {

		/**
		 * Max length: 64
		 * Min length: 1
		 */
		modelId: FormControl<string | null | undefined>,
		modelType: FormControl<ModelVersionModelType | null | undefined>,

		/** Min length: 1 */
		modelVersionNumber: FormControl<string | null | undefined>,
		status: FormControl<string | null | undefined>,
	}
	export function CreateCreateModelVersionResultFormGroup() {
		return new FormGroup<CreateModelVersionResultFormProperties>({
			modelId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(64), Validators.pattern('^[0-9a-z_-]+$')]),
			modelType: new FormControl<ModelVersionModelType | null | undefined>(undefined),
			modelVersionNumber: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1)]),
			status: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateModelVersionRequest {

		/**
		 * Required
		 * Max length: 64
		 * Min length: 1
		 */
		modelId: string;

		/** Required */
		modelType: ModelVersionModelType;

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		description?: string | null;
	}
	export interface CreateModelVersionRequestFormProperties {

		/**
		 * Required
		 * Max length: 64
		 * Min length: 1
		 */
		modelId: FormControl<string | null | undefined>,

		/** Required */
		modelType: FormControl<ModelVersionModelType | null | undefined>,

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		description: FormControl<string | null | undefined>,
	}
	export function CreateCreateModelVersionRequestFormGroup() {
		return new FormGroup<CreateModelVersionRequestFormProperties>({
			modelId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(64), Validators.pattern('^[0-9a-z_-]+$')]),
			modelType: new FormControl<ModelVersionModelType | null | undefined>(undefined, [Validators.required]),
			description: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(128)]),
		});

	}

	export interface CreateRuleResult {

		/** A rule. */
		rule?: Rule;
	}
	export interface CreateRuleResultFormProperties {
	}
	export function CreateCreateRuleResultFormGroup() {
		return new FormGroup<CreateRuleResultFormProperties>({
		});

	}

	export interface CreateRuleRequest {

		/**
		 * Required
		 * Max length: 64
		 * Min length: 1
		 */
		ruleId: string;

		/**
		 * Required
		 * Max length: 64
		 * Min length: 1
		 */
		detectorId: string;

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		description?: string | null;

		/**
		 * Required
		 * Max length: 4096
		 * Min length: 1
		 */
		expression: string;

		/** Required */
		language: CreateRuleRequestLanguage;

		/**
		 * Required
		 * Minimum items: 1
		 */
		outcomes: Array<string>;
	}
	export interface CreateRuleRequestFormProperties {

		/**
		 * Required
		 * Max length: 64
		 * Min length: 1
		 */
		ruleId: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 64
		 * Min length: 1
		 */
		detectorId: FormControl<string | null | undefined>,

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		description: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 4096
		 * Min length: 1
		 */
		expression: FormControl<string | null | undefined>,

		/** Required */
		language: FormControl<CreateRuleRequestLanguage | null | undefined>,
	}
	export function CreateCreateRuleRequestFormGroup() {
		return new FormGroup<CreateRuleRequestFormProperties>({
			ruleId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(64), Validators.pattern('^[0-9a-z_-]+$')]),
			detectorId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(64), Validators.pattern('^[0-9a-z_-]+$')]),
			description: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(128)]),
			expression: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(4096)]),
			language: new FormControl<CreateRuleRequestLanguage | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum CreateRuleRequestLanguage { DETECTORPL = 0 }

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
		dataType: VariableDataType;

		/** Required */
		dataSource: VariableDataSource;

		/** Required */
		defaultValue: string;
		description?: string | null;
		variableType?: string | null;
	}
	export interface CreateVariableRequestFormProperties {

		/** Required */
		name: FormControl<string | null | undefined>,

		/** Required */
		dataType: FormControl<VariableDataType | null | undefined>,

		/** Required */
		dataSource: FormControl<VariableDataSource | null | undefined>,

		/** Required */
		defaultValue: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,
		variableType: FormControl<string | null | undefined>,
	}
	export function CreateCreateVariableRequestFormGroup() {
		return new FormGroup<CreateVariableRequestFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			dataType: new FormControl<VariableDataType | null | undefined>(undefined, [Validators.required]),
			dataSource: new FormControl<VariableDataSource | null | undefined>(undefined, [Validators.required]),
			defaultValue: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			description: new FormControl<string | null | undefined>(undefined),
			variableType: new FormControl<string | null | undefined>(undefined),
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

		/**
		 * Required
		 * Max length: 64
		 * Min length: 1
		 */
		detectorId: string;
	}
	export interface DeleteDetectorRequestFormProperties {

		/**
		 * Required
		 * Max length: 64
		 * Min length: 1
		 */
		detectorId: FormControl<string | null | undefined>,
	}
	export function CreateDeleteDetectorRequestFormGroup() {
		return new FormGroup<DeleteDetectorRequestFormProperties>({
			detectorId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(64), Validators.pattern('^[0-9a-z_-]+$')]),
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

		/**
		 * Required
		 * Max length: 64
		 * Min length: 1
		 */
		detectorId: string;

		/**
		 * Required
		 * Min length: 1
		 */
		detectorVersionId: string;
	}
	export interface DeleteDetectorVersionRequestFormProperties {

		/**
		 * Required
		 * Max length: 64
		 * Min length: 1
		 */
		detectorId: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Min length: 1
		 */
		detectorVersionId: FormControl<string | null | undefined>,
	}
	export function CreateDeleteDetectorVersionRequestFormGroup() {
		return new FormGroup<DeleteDetectorVersionRequestFormProperties>({
			detectorId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(64), Validators.pattern('^[0-9a-z_-]+$')]),
			detectorVersionId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1)]),
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
	}
	export interface DeleteEventRequestFormProperties {

		/** Required */
		eventId: FormControl<string | null | undefined>,
	}
	export function CreateDeleteEventRequestFormGroup() {
		return new FormGroup<DeleteEventRequestFormProperties>({
			eventId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeleteRuleVersionResult {
	}
	export interface DeleteRuleVersionResultFormProperties {
	}
	export function CreateDeleteRuleVersionResultFormGroup() {
		return new FormGroup<DeleteRuleVersionResultFormProperties>({
		});

	}

	export interface DeleteRuleVersionRequest {

		/**
		 * Required
		 * Max length: 64
		 * Min length: 1
		 */
		detectorId: string;

		/**
		 * Required
		 * Max length: 64
		 * Min length: 1
		 */
		ruleId: string;

		/**
		 * Required
		 * Min length: 1
		 */
		ruleVersion: string;
	}
	export interface DeleteRuleVersionRequestFormProperties {

		/**
		 * Required
		 * Max length: 64
		 * Min length: 1
		 */
		detectorId: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 64
		 * Min length: 1
		 */
		ruleId: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Min length: 1
		 */
		ruleVersion: FormControl<string | null | undefined>,
	}
	export function CreateDeleteRuleVersionRequestFormGroup() {
		return new FormGroup<DeleteRuleVersionRequestFormProperties>({
			detectorId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(64), Validators.pattern('^[0-9a-z_-]+$')]),
			ruleId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(64), Validators.pattern('^[0-9a-z_-]+$')]),
			ruleVersion: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1)]),
		});

	}

	export interface DescribeDetectorResult {

		/**
		 * Max length: 64
		 * Min length: 1
		 */
		detectorId?: string | null;
		detectorVersionSummaries?: Array<DetectorVersionSummary>;
		nextToken?: string | null;
	}
	export interface DescribeDetectorResultFormProperties {

		/**
		 * Max length: 64
		 * Min length: 1
		 */
		detectorId: FormControl<string | null | undefined>,
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeDetectorResultFormGroup() {
		return new FormGroup<DescribeDetectorResultFormProperties>({
			detectorId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(64), Validators.pattern('^[0-9a-z_-]+$')]),
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The summary of the detector version. */
	export interface DetectorVersionSummary {

		/** Min length: 1 */
		detectorVersionId?: string | null;
		status?: CreateDetectorVersionResultStatus | null;

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		description?: string | null;
		lastUpdatedTime?: string | null;
	}

	/** The summary of the detector version. */
	export interface DetectorVersionSummaryFormProperties {

		/** Min length: 1 */
		detectorVersionId: FormControl<string | null | undefined>,
		status: FormControl<CreateDetectorVersionResultStatus | null | undefined>,

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		description: FormControl<string | null | undefined>,
		lastUpdatedTime: FormControl<string | null | undefined>,
	}
	export function CreateDetectorVersionSummaryFormGroup() {
		return new FormGroup<DetectorVersionSummaryFormProperties>({
			detectorVersionId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1)]),
			status: new FormControl<CreateDetectorVersionResultStatus | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(128)]),
			lastUpdatedTime: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeDetectorRequest {

		/**
		 * Required
		 * Max length: 64
		 * Min length: 1
		 */
		detectorId: string;
		nextToken?: string | null;

		/**
		 * Minimum: 1000
		 * Maximum: 2500
		 */
		maxResults?: number | null;
	}
	export interface DescribeDetectorRequestFormProperties {

		/**
		 * Required
		 * Max length: 64
		 * Min length: 1
		 */
		detectorId: FormControl<string | null | undefined>,
		nextToken: FormControl<string | null | undefined>,

		/**
		 * Minimum: 1000
		 * Maximum: 2500
		 */
		maxResults: FormControl<number | null | undefined>,
	}
	export function CreateDescribeDetectorRequestFormGroup() {
		return new FormGroup<DescribeDetectorRequestFormProperties>({
			detectorId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(64), Validators.pattern('^[0-9a-z_-]+$')]),
			nextToken: new FormControl<string | null | undefined>(undefined),
			maxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1000), Validators.max(2500)]),
		});

	}

	export interface DescribeModelVersionsResult {
		modelVersionDetails?: Array<ModelVersionDetail>;
		nextToken?: string | null;
	}
	export interface DescribeModelVersionsResultFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeModelVersionsResultFormGroup() {
		return new FormGroup<DescribeModelVersionsResultFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Provides the model version details.  */
	export interface ModelVersionDetail {

		/**
		 * Max length: 64
		 * Min length: 1
		 */
		modelId?: string | null;
		modelType?: ModelVersionModelType | null;

		/** Min length: 1 */
		modelVersionNumber?: string | null;

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		description?: string | null;
		status?: string | null;

		/** The training data source. */
		trainingDataSource?: TrainingDataSource;
		modelVariables?: Array<ModelVariable>;

		/** The label schema. */
		labelSchema?: LabelSchema;
		validationMetrics?: MetricsMap;
		trainingMetrics?: MetricsMap;
		lastUpdatedTime?: string | null;
		createdTime?: string | null;
	}

	/** Provides the model version details.  */
	export interface ModelVersionDetailFormProperties {

		/**
		 * Max length: 64
		 * Min length: 1
		 */
		modelId: FormControl<string | null | undefined>,
		modelType: FormControl<ModelVersionModelType | null | undefined>,

		/** Min length: 1 */
		modelVersionNumber: FormControl<string | null | undefined>,

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		description: FormControl<string | null | undefined>,
		status: FormControl<string | null | undefined>,
		lastUpdatedTime: FormControl<string | null | undefined>,
		createdTime: FormControl<string | null | undefined>,
	}
	export function CreateModelVersionDetailFormGroup() {
		return new FormGroup<ModelVersionDetailFormProperties>({
			modelId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(64), Validators.pattern('^[0-9a-z_-]+$')]),
			modelType: new FormControl<ModelVersionModelType | null | undefined>(undefined),
			modelVersionNumber: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1)]),
			description: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(128)]),
			status: new FormControl<string | null | undefined>(undefined),
			lastUpdatedTime: new FormControl<string | null | undefined>(undefined),
			createdTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The training data source. */
	export interface TrainingDataSource {

		/**
		 * Required
		 * Max length: 512
		 * Min length: 1
		 */
		dataLocation: string;

		/**
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		dataAccessRoleArn: string;
	}

	/** The training data source. */
	export interface TrainingDataSourceFormProperties {

		/**
		 * Required
		 * Max length: 512
		 * Min length: 1
		 */
		dataLocation: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		dataAccessRoleArn: FormControl<string | null | undefined>,
	}
	export function CreateTrainingDataSourceFormGroup() {
		return new FormGroup<TrainingDataSourceFormProperties>({
			dataLocation: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(512), Validators.pattern('^s3:\/\/(.+)$')]),
			dataAccessRoleArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(256), Validators.pattern('^arn\:aws\:iam\:\:[0-9]{12}\:role\/[^\s]{2,64}$')]),
		});

	}


	/** The model variable.&gt; */
	export interface ModelVariable {

		/** Required */
		name: string;
		index?: number | null;
	}

	/** The model variable.&gt; */
	export interface ModelVariableFormProperties {

		/** Required */
		name: FormControl<string | null | undefined>,
		index: FormControl<number | null | undefined>,
	}
	export function CreateModelVariableFormGroup() {
		return new FormGroup<ModelVariableFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			index: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** The label schema. */
	export interface LabelSchema {

		/** Required */
		labelKey: string;

		/** Required */
		labelMapper: LabelMapper;
	}

	/** The label schema. */
	export interface LabelSchemaFormProperties {

		/** Required */
		labelKey: FormControl<string | null | undefined>,
	}
	export function CreateLabelSchemaFormGroup() {
		return new FormGroup<LabelSchemaFormProperties>({
			labelKey: new FormControl<string | null | undefined>(undefined, [Validators.required]),
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

	export interface MetricsMap {
	}
	export interface MetricsMapFormProperties {
	}
	export function CreateMetricsMapFormGroup() {
		return new FormGroup<MetricsMapFormProperties>({
		});

	}

	export interface DescribeModelVersionsRequest {

		/**
		 * Max length: 64
		 * Min length: 1
		 */
		modelId?: string | null;

		/** Min length: 1 */
		modelVersionNumber?: string | null;
		modelType?: ModelVersionModelType | null;
		nextToken?: string | null;

		/**
		 * Minimum: 1
		 * Maximum: 10
		 */
		maxResults?: number | null;
	}
	export interface DescribeModelVersionsRequestFormProperties {

		/**
		 * Max length: 64
		 * Min length: 1
		 */
		modelId: FormControl<string | null | undefined>,

		/** Min length: 1 */
		modelVersionNumber: FormControl<string | null | undefined>,
		modelType: FormControl<ModelVersionModelType | null | undefined>,
		nextToken: FormControl<string | null | undefined>,

		/**
		 * Minimum: 1
		 * Maximum: 10
		 */
		maxResults: FormControl<number | null | undefined>,
	}
	export function CreateDescribeModelVersionsRequestFormGroup() {
		return new FormGroup<DescribeModelVersionsRequestFormProperties>({
			modelId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(64), Validators.pattern('^[0-9a-z_-]+$')]),
			modelVersionNumber: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1)]),
			modelType: new FormControl<ModelVersionModelType | null | undefined>(undefined),
			nextToken: new FormControl<string | null | undefined>(undefined),
			maxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(10)]),
		});

	}

	export interface GetDetectorVersionResult {

		/**
		 * Max length: 64
		 * Min length: 1
		 */
		detectorId?: string | null;

		/** Min length: 1 */
		detectorVersionId?: string | null;

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		description?: string | null;
		externalModelEndpoints?: Array<string>;
		modelVersions?: Array<ModelVersion>;
		rules?: Array<Rule>;
		status?: CreateDetectorVersionResultStatus | null;
		lastUpdatedTime?: string | null;
		createdTime?: string | null;
		ruleExecutionMode?: CreateDetectorVersionRequestRuleExecutionMode | null;
	}
	export interface GetDetectorVersionResultFormProperties {

		/**
		 * Max length: 64
		 * Min length: 1
		 */
		detectorId: FormControl<string | null | undefined>,

		/** Min length: 1 */
		detectorVersionId: FormControl<string | null | undefined>,

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		description: FormControl<string | null | undefined>,
		status: FormControl<CreateDetectorVersionResultStatus | null | undefined>,
		lastUpdatedTime: FormControl<string | null | undefined>,
		createdTime: FormControl<string | null | undefined>,
		ruleExecutionMode: FormControl<CreateDetectorVersionRequestRuleExecutionMode | null | undefined>,
	}
	export function CreateGetDetectorVersionResultFormGroup() {
		return new FormGroup<GetDetectorVersionResultFormProperties>({
			detectorId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(64), Validators.pattern('^[0-9a-z_-]+$')]),
			detectorVersionId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1)]),
			description: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(128)]),
			status: new FormControl<CreateDetectorVersionResultStatus | null | undefined>(undefined),
			lastUpdatedTime: new FormControl<string | null | undefined>(undefined),
			createdTime: new FormControl<string | null | undefined>(undefined),
			ruleExecutionMode: new FormControl<CreateDetectorVersionRequestRuleExecutionMode | null | undefined>(undefined),
		});

	}

	export interface GetDetectorVersionRequest {

		/**
		 * Required
		 * Max length: 64
		 * Min length: 1
		 */
		detectorId: string;

		/**
		 * Required
		 * Min length: 1
		 */
		detectorVersionId: string;
	}
	export interface GetDetectorVersionRequestFormProperties {

		/**
		 * Required
		 * Max length: 64
		 * Min length: 1
		 */
		detectorId: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Min length: 1
		 */
		detectorVersionId: FormControl<string | null | undefined>,
	}
	export function CreateGetDetectorVersionRequestFormGroup() {
		return new FormGroup<GetDetectorVersionRequestFormProperties>({
			detectorId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(64), Validators.pattern('^[0-9a-z_-]+$')]),
			detectorVersionId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1)]),
		});

	}

	export interface GetDetectorsResult {
		detectors?: Array<Detector>;
		nextToken?: string | null;
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

		/**
		 * Max length: 64
		 * Min length: 1
		 */
		detectorId?: string | null;

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		description?: string | null;
		lastUpdatedTime?: string | null;
		createdTime?: string | null;
	}

	/** The detector. */
	export interface DetectorFormProperties {

		/**
		 * Max length: 64
		 * Min length: 1
		 */
		detectorId: FormControl<string | null | undefined>,

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		description: FormControl<string | null | undefined>,
		lastUpdatedTime: FormControl<string | null | undefined>,
		createdTime: FormControl<string | null | undefined>,
	}
	export function CreateDetectorFormGroup() {
		return new FormGroup<DetectorFormProperties>({
			detectorId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(64), Validators.pattern('^[0-9a-z_-]+$')]),
			description: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(128)]),
			lastUpdatedTime: new FormControl<string | null | undefined>(undefined),
			createdTime: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetDetectorsRequest {

		/**
		 * Max length: 64
		 * Min length: 1
		 */
		detectorId?: string | null;
		nextToken?: string | null;

		/**
		 * Minimum: 5
		 * Maximum: 10
		 */
		maxResults?: number | null;
	}
	export interface GetDetectorsRequestFormProperties {

		/**
		 * Max length: 64
		 * Min length: 1
		 */
		detectorId: FormControl<string | null | undefined>,
		nextToken: FormControl<string | null | undefined>,

		/**
		 * Minimum: 5
		 * Maximum: 10
		 */
		maxResults: FormControl<number | null | undefined>,
	}
	export function CreateGetDetectorsRequestFormGroup() {
		return new FormGroup<GetDetectorsRequestFormProperties>({
			detectorId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(64), Validators.pattern('^[0-9a-z_-]+$')]),
			nextToken: new FormControl<string | null | undefined>(undefined),
			maxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(5), Validators.max(10)]),
		});

	}

	export interface GetExternalModelsResult {
		externalModels?: Array<ExternalModel>;
		nextToken?: string | null;
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
		modelEndpoint?: string | null;
		modelSource?: ExternalModelModelSource | null;

		/** The role used to invoke external model endpoints. */
		role?: Role;

		/** The model input configuration. */
		inputConfiguration?: ModelInputConfiguration;

		/** Provides the model output configuration. */
		outputConfiguration?: ModelOutputConfiguration;
		modelEndpointStatus?: ExternalModelModelEndpointStatus | null;
		lastUpdatedTime?: string | null;
		createdTime?: string | null;
	}

	/** The Amazon SageMaker model. */
	export interface ExternalModelFormProperties {
		modelEndpoint: FormControl<string | null | undefined>,
		modelSource: FormControl<ExternalModelModelSource | null | undefined>,
		modelEndpointStatus: FormControl<ExternalModelModelEndpointStatus | null | undefined>,
		lastUpdatedTime: FormControl<string | null | undefined>,
		createdTime: FormControl<string | null | undefined>,
	}
	export function CreateExternalModelFormGroup() {
		return new FormGroup<ExternalModelFormProperties>({
			modelEndpoint: new FormControl<string | null | undefined>(undefined),
			modelSource: new FormControl<ExternalModelModelSource | null | undefined>(undefined),
			modelEndpointStatus: new FormControl<ExternalModelModelEndpointStatus | null | undefined>(undefined),
			lastUpdatedTime: new FormControl<string | null | undefined>(undefined),
			createdTime: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ExternalModelModelSource { SAGEMAKER = 0 }


	/** The role used to invoke external model endpoints. */
	export interface Role {

		/** Required */
		arn: string;

		/** Required */
		name: string;
	}

	/** The role used to invoke external model endpoints. */
	export interface RoleFormProperties {

		/** Required */
		arn: FormControl<string | null | undefined>,

		/** Required */
		name: FormControl<string | null | undefined>,
	}
	export function CreateRoleFormGroup() {
		return new FormGroup<RoleFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The model input configuration. */
	export interface ModelInputConfiguration {
		format?: ModelInputConfigurationFormat | null;

		/** Required */
		isOpaque: boolean;
		jsonInputTemplate?: string | null;
		csvInputTemplate?: string | null;
	}

	/** The model input configuration. */
	export interface ModelInputConfigurationFormProperties {
		format: FormControl<ModelInputConfigurationFormat | null | undefined>,

		/** Required */
		isOpaque: FormControl<boolean | null | undefined>,
		jsonInputTemplate: FormControl<string | null | undefined>,
		csvInputTemplate: FormControl<string | null | undefined>,
	}
	export function CreateModelInputConfigurationFormGroup() {
		return new FormGroup<ModelInputConfigurationFormProperties>({
			format: new FormControl<ModelInputConfigurationFormat | null | undefined>(undefined),
			isOpaque: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			jsonInputTemplate: new FormControl<string | null | undefined>(undefined),
			csvInputTemplate: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ModelInputConfigurationFormat { TEXT_CSV = 0, APPLICATION_JSON = 1 }


	/** Provides the model output configuration. */
	export interface ModelOutputConfiguration {

		/** Required */
		format: ModelOutputConfigurationFormat;
		jsonKeyToVariableMap?: JsonKeyToVariableMap;
		csvIndexToVariableMap?: CsvIndexToVariableMap;
	}

	/** Provides the model output configuration. */
	export interface ModelOutputConfigurationFormProperties {

		/** Required */
		format: FormControl<ModelOutputConfigurationFormat | null | undefined>,
	}
	export function CreateModelOutputConfigurationFormGroup() {
		return new FormGroup<ModelOutputConfigurationFormProperties>({
			format: new FormControl<ModelOutputConfigurationFormat | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum ModelOutputConfigurationFormat { TEXT_CSV = 0, APPLICATION_JSONLINES = 1 }

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

	export enum ExternalModelModelEndpointStatus { ASSOCIATED = 0, DISSOCIATED = 1 }

	export interface GetExternalModelsRequest {
		modelEndpoint?: string | null;
		nextToken?: string | null;

		/**
		 * Minimum: 5
		 * Maximum: 10
		 */
		maxResults?: number | null;
	}
	export interface GetExternalModelsRequestFormProperties {
		modelEndpoint: FormControl<string | null | undefined>,
		nextToken: FormControl<string | null | undefined>,

		/**
		 * Minimum: 5
		 * Maximum: 10
		 */
		maxResults: FormControl<number | null | undefined>,
	}
	export function CreateGetExternalModelsRequestFormGroup() {
		return new FormGroup<GetExternalModelsRequestFormProperties>({
			modelEndpoint: new FormControl<string | null | undefined>(undefined),
			nextToken: new FormControl<string | null | undefined>(undefined),
			maxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(5), Validators.max(10)]),
		});

	}

	export interface GetModelVersionResult {

		/**
		 * Max length: 64
		 * Min length: 1
		 */
		modelId?: string | null;
		modelType?: ModelVersionModelType | null;

		/** Min length: 1 */
		modelVersionNumber?: string | null;

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		description?: string | null;
		status?: string | null;
	}
	export interface GetModelVersionResultFormProperties {

		/**
		 * Max length: 64
		 * Min length: 1
		 */
		modelId: FormControl<string | null | undefined>,
		modelType: FormControl<ModelVersionModelType | null | undefined>,

		/** Min length: 1 */
		modelVersionNumber: FormControl<string | null | undefined>,

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		description: FormControl<string | null | undefined>,
		status: FormControl<string | null | undefined>,
	}
	export function CreateGetModelVersionResultFormGroup() {
		return new FormGroup<GetModelVersionResultFormProperties>({
			modelId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(64), Validators.pattern('^[0-9a-z_-]+$')]),
			modelType: new FormControl<ModelVersionModelType | null | undefined>(undefined),
			modelVersionNumber: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1)]),
			description: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(128)]),
			status: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetModelVersionRequest {

		/**
		 * Required
		 * Max length: 64
		 * Min length: 1
		 */
		modelId: string;

		/** Required */
		modelType: ModelVersionModelType;

		/**
		 * Required
		 * Min length: 1
		 */
		modelVersionNumber: string;
	}
	export interface GetModelVersionRequestFormProperties {

		/**
		 * Required
		 * Max length: 64
		 * Min length: 1
		 */
		modelId: FormControl<string | null | undefined>,

		/** Required */
		modelType: FormControl<ModelVersionModelType | null | undefined>,

		/**
		 * Required
		 * Min length: 1
		 */
		modelVersionNumber: FormControl<string | null | undefined>,
	}
	export function CreateGetModelVersionRequestFormGroup() {
		return new FormGroup<GetModelVersionRequestFormProperties>({
			modelId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(64), Validators.pattern('^[0-9a-z_-]+$')]),
			modelType: new FormControl<ModelVersionModelType | null | undefined>(undefined, [Validators.required]),
			modelVersionNumber: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1)]),
		});

	}

	export interface GetModelsResult {
		nextToken?: string | null;
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

		/**
		 * Max length: 64
		 * Min length: 1
		 */
		modelId?: string | null;
		modelType?: ModelVersionModelType | null;

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		description?: string | null;

		/** The training data source. */
		trainingDataSource?: TrainingDataSource;
		modelVariables?: Array<ModelVariable>;

		/** The label schema. */
		labelSchema?: LabelSchema;
		lastUpdatedTime?: string | null;
		createdTime?: string | null;
	}

	/** The model. */
	export interface ModelFormProperties {

		/**
		 * Max length: 64
		 * Min length: 1
		 */
		modelId: FormControl<string | null | undefined>,
		modelType: FormControl<ModelVersionModelType | null | undefined>,

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		description: FormControl<string | null | undefined>,
		lastUpdatedTime: FormControl<string | null | undefined>,
		createdTime: FormControl<string | null | undefined>,
	}
	export function CreateModelFormGroup() {
		return new FormGroup<ModelFormProperties>({
			modelId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(64), Validators.pattern('^[0-9a-z_-]+$')]),
			modelType: new FormControl<ModelVersionModelType | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(128)]),
			lastUpdatedTime: new FormControl<string | null | undefined>(undefined),
			createdTime: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetModelsRequest {
		modelType?: ModelVersionModelType | null;

		/**
		 * Max length: 64
		 * Min length: 1
		 */
		modelId?: string | null;
		nextToken?: string | null;

		/**
		 * Minimum: 1
		 * Maximum: 10
		 */
		maxResults?: number | null;
	}
	export interface GetModelsRequestFormProperties {
		modelType: FormControl<ModelVersionModelType | null | undefined>,

		/**
		 * Max length: 64
		 * Min length: 1
		 */
		modelId: FormControl<string | null | undefined>,
		nextToken: FormControl<string | null | undefined>,

		/**
		 * Minimum: 1
		 * Maximum: 10
		 */
		maxResults: FormControl<number | null | undefined>,
	}
	export function CreateGetModelsRequestFormGroup() {
		return new FormGroup<GetModelsRequestFormProperties>({
			modelType: new FormControl<ModelVersionModelType | null | undefined>(undefined),
			modelId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(64), Validators.pattern('^[0-9a-z_-]+$')]),
			nextToken: new FormControl<string | null | undefined>(undefined),
			maxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(10)]),
		});

	}

	export interface GetOutcomesResult {
		outcomes?: Array<Outcome>;
		nextToken?: string | null;
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

		/**
		 * Max length: 64
		 * Min length: 1
		 */
		name?: string | null;

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		description?: string | null;
		lastUpdatedTime?: string | null;
		createdTime?: string | null;
	}

	/** The outcome. */
	export interface OutcomeFormProperties {

		/**
		 * Max length: 64
		 * Min length: 1
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		description: FormControl<string | null | undefined>,
		lastUpdatedTime: FormControl<string | null | undefined>,
		createdTime: FormControl<string | null | undefined>,
	}
	export function CreateOutcomeFormGroup() {
		return new FormGroup<OutcomeFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(64), Validators.pattern('^[0-9a-z_-]+$')]),
			description: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(128)]),
			lastUpdatedTime: new FormControl<string | null | undefined>(undefined),
			createdTime: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetOutcomesRequest {

		/**
		 * Max length: 64
		 * Min length: 1
		 */
		name?: string | null;
		nextToken?: string | null;

		/**
		 * Minimum: 50
		 * Maximum: 100
		 */
		maxResults?: number | null;
	}
	export interface GetOutcomesRequestFormProperties {

		/**
		 * Max length: 64
		 * Min length: 1
		 */
		name: FormControl<string | null | undefined>,
		nextToken: FormControl<string | null | undefined>,

		/**
		 * Minimum: 50
		 * Maximum: 100
		 */
		maxResults: FormControl<number | null | undefined>,
	}
	export function CreateGetOutcomesRequestFormGroup() {
		return new FormGroup<GetOutcomesRequestFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(64), Validators.pattern('^[0-9a-z_-]+$')]),
			nextToken: new FormControl<string | null | undefined>(undefined),
			maxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(50), Validators.max(100)]),
		});

	}

	export interface GetPredictionResult {
		outcomes?: Array<string>;
		modelScores?: Array<ModelScores>;
		ruleResults?: Array<RuleResult>;
	}
	export interface GetPredictionResultFormProperties {
	}
	export function CreateGetPredictionResultFormGroup() {
		return new FormGroup<GetPredictionResultFormProperties>({
		});

	}


	/** The fraud prediction scores. */
	export interface ModelScores {

		/** The model version. */
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
		ruleId?: string | null;
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

	export interface GetPredictionRequest {

		/** Required */
		detectorId: string;
		detectorVersionId?: string | null;

		/** Required */
		eventId: string;
		eventAttributes?: EventAttributeMap;
		externalModelEndpointDataBlobs?: ExternalModelEndpointDataBlobMap;
	}
	export interface GetPredictionRequestFormProperties {

		/** Required */
		detectorId: FormControl<string | null | undefined>,
		detectorVersionId: FormControl<string | null | undefined>,

		/** Required */
		eventId: FormControl<string | null | undefined>,
	}
	export function CreateGetPredictionRequestFormGroup() {
		return new FormGroup<GetPredictionRequestFormProperties>({
			detectorId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			detectorVersionId: new FormControl<string | null | undefined>(undefined),
			eventId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
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

	export interface ExternalModelEndpointDataBlobMap {
	}
	export interface ExternalModelEndpointDataBlobMapFormProperties {
	}
	export function CreateExternalModelEndpointDataBlobMapFormGroup() {
		return new FormGroup<ExternalModelEndpointDataBlobMapFormProperties>({
		});

	}

	export interface GetRulesResult {
		ruleDetails?: Array<RuleDetail>;
		nextToken?: string | null;
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

		/**
		 * Max length: 64
		 * Min length: 1
		 */
		ruleId?: string | null;

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		description?: string | null;

		/**
		 * Max length: 64
		 * Min length: 1
		 */
		detectorId?: string | null;

		/** Min length: 1 */
		ruleVersion?: string | null;

		/**
		 * Max length: 4096
		 * Min length: 1
		 */
		expression?: string | null;
		language?: CreateRuleRequestLanguage | null;

		/** Minimum items: 1 */
		outcomes?: Array<string>;
		lastUpdatedTime?: string | null;
		createdTime?: string | null;
	}

	/** The details of the rule. */
	export interface RuleDetailFormProperties {

		/**
		 * Max length: 64
		 * Min length: 1
		 */
		ruleId: FormControl<string | null | undefined>,

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		description: FormControl<string | null | undefined>,

		/**
		 * Max length: 64
		 * Min length: 1
		 */
		detectorId: FormControl<string | null | undefined>,

		/** Min length: 1 */
		ruleVersion: FormControl<string | null | undefined>,

		/**
		 * Max length: 4096
		 * Min length: 1
		 */
		expression: FormControl<string | null | undefined>,
		language: FormControl<CreateRuleRequestLanguage | null | undefined>,
		lastUpdatedTime: FormControl<string | null | undefined>,
		createdTime: FormControl<string | null | undefined>,
	}
	export function CreateRuleDetailFormGroup() {
		return new FormGroup<RuleDetailFormProperties>({
			ruleId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(64), Validators.pattern('^[0-9a-z_-]+$')]),
			description: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(128)]),
			detectorId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(64), Validators.pattern('^[0-9a-z_-]+$')]),
			ruleVersion: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1)]),
			expression: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(4096)]),
			language: new FormControl<CreateRuleRequestLanguage | null | undefined>(undefined),
			lastUpdatedTime: new FormControl<string | null | undefined>(undefined),
			createdTime: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetRulesRequest {

		/**
		 * Max length: 64
		 * Min length: 1
		 */
		ruleId?: string | null;

		/**
		 * Required
		 * Max length: 64
		 * Min length: 1
		 */
		detectorId: string;

		/** Min length: 1 */
		ruleVersion?: string | null;
		nextToken?: string | null;

		/**
		 * Minimum: 50
		 * Maximum: 100
		 */
		maxResults?: number | null;
	}
	export interface GetRulesRequestFormProperties {

		/**
		 * Max length: 64
		 * Min length: 1
		 */
		ruleId: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 64
		 * Min length: 1
		 */
		detectorId: FormControl<string | null | undefined>,

		/** Min length: 1 */
		ruleVersion: FormControl<string | null | undefined>,
		nextToken: FormControl<string | null | undefined>,

		/**
		 * Minimum: 50
		 * Maximum: 100
		 */
		maxResults: FormControl<number | null | undefined>,
	}
	export function CreateGetRulesRequestFormGroup() {
		return new FormGroup<GetRulesRequestFormProperties>({
			ruleId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(64), Validators.pattern('^[0-9a-z_-]+$')]),
			detectorId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(64), Validators.pattern('^[0-9a-z_-]+$')]),
			ruleVersion: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1)]),
			nextToken: new FormControl<string | null | undefined>(undefined),
			maxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(50), Validators.max(100)]),
		});

	}

	export interface GetVariablesResult {
		variables?: Array<Variable>;
		nextToken?: string | null;
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
		name?: string | null;
		nextToken?: string | null;

		/**
		 * Minimum: 50
		 * Maximum: 100
		 */
		maxResults?: number | null;
	}
	export interface GetVariablesRequestFormProperties {
		name: FormControl<string | null | undefined>,
		nextToken: FormControl<string | null | undefined>,

		/**
		 * Minimum: 50
		 * Maximum: 100
		 */
		maxResults: FormControl<number | null | undefined>,
	}
	export function CreateGetVariablesRequestFormGroup() {
		return new FormGroup<GetVariablesRequestFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			nextToken: new FormControl<string | null | undefined>(undefined),
			maxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(50), Validators.max(100)]),
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

		/**
		 * Required
		 * Max length: 64
		 * Min length: 1
		 */
		detectorId: string;

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		description?: string | null;
	}
	export interface PutDetectorRequestFormProperties {

		/**
		 * Required
		 * Max length: 64
		 * Min length: 1
		 */
		detectorId: FormControl<string | null | undefined>,

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		description: FormControl<string | null | undefined>,
	}
	export function CreatePutDetectorRequestFormGroup() {
		return new FormGroup<PutDetectorRequestFormProperties>({
			detectorId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(64), Validators.pattern('^[0-9a-z_-]+$')]),
			description: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(128)]),
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
		modelSource: ExternalModelModelSource;

		/**
		 * The role used to invoke external model endpoints.
		 * Required
		 */
		role: Role;

		/**
		 * The model input configuration.
		 * Required
		 */
		inputConfiguration: ModelInputConfiguration;

		/**
		 * Provides the model output configuration.
		 * Required
		 */
		outputConfiguration: ModelOutputConfiguration;

		/** Required */
		modelEndpointStatus: ExternalModelModelEndpointStatus;
	}
	export interface PutExternalModelRequestFormProperties {

		/** Required */
		modelEndpoint: FormControl<string | null | undefined>,

		/** Required */
		modelSource: FormControl<ExternalModelModelSource | null | undefined>,

		/** Required */
		modelEndpointStatus: FormControl<ExternalModelModelEndpointStatus | null | undefined>,
	}
	export function CreatePutExternalModelRequestFormGroup() {
		return new FormGroup<PutExternalModelRequestFormProperties>({
			modelEndpoint: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			modelSource: new FormControl<ExternalModelModelSource | null | undefined>(undefined, [Validators.required]),
			modelEndpointStatus: new FormControl<ExternalModelModelEndpointStatus | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface PutModelResult {
	}
	export interface PutModelResultFormProperties {
	}
	export function CreatePutModelResultFormGroup() {
		return new FormGroup<PutModelResultFormProperties>({
		});

	}

	export interface PutModelRequest {

		/**
		 * Required
		 * Max length: 64
		 * Min length: 1
		 */
		modelId: string;

		/** Required */
		modelType: ModelVersionModelType;

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		description?: string | null;

		/**
		 * The training data source.
		 * Required
		 */
		trainingDataSource: TrainingDataSource;

		/** Required */
		modelVariables: Array<ModelVariable>;

		/**
		 * The label schema.
		 * Required
		 */
		labelSchema: LabelSchema;
	}
	export interface PutModelRequestFormProperties {

		/**
		 * Required
		 * Max length: 64
		 * Min length: 1
		 */
		modelId: FormControl<string | null | undefined>,

		/** Required */
		modelType: FormControl<ModelVersionModelType | null | undefined>,

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		description: FormControl<string | null | undefined>,
	}
	export function CreatePutModelRequestFormGroup() {
		return new FormGroup<PutModelRequestFormProperties>({
			modelId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(64), Validators.pattern('^[0-9a-z_-]+$')]),
			modelType: new FormControl<ModelVersionModelType | null | undefined>(undefined, [Validators.required]),
			description: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(128)]),
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

		/**
		 * Required
		 * Max length: 64
		 * Min length: 1
		 */
		name: string;

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		description?: string | null;
	}
	export interface PutOutcomeRequestFormProperties {

		/**
		 * Required
		 * Max length: 64
		 * Min length: 1
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		description: FormControl<string | null | undefined>,
	}
	export function CreatePutOutcomeRequestFormGroup() {
		return new FormGroup<PutOutcomeRequestFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(64), Validators.pattern('^[0-9a-z_-]+$')]),
			description: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(128)]),
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

		/**
		 * Required
		 * Max length: 64
		 * Min length: 1
		 */
		detectorId: string;

		/**
		 * Required
		 * Min length: 1
		 */
		detectorVersionId: string;

		/** Required */
		externalModelEndpoints: Array<string>;

		/** Required */
		rules: Array<Rule>;

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		description?: string | null;
		modelVersions?: Array<ModelVersion>;
		ruleExecutionMode?: CreateDetectorVersionRequestRuleExecutionMode | null;
	}
	export interface UpdateDetectorVersionRequestFormProperties {

		/**
		 * Required
		 * Max length: 64
		 * Min length: 1
		 */
		detectorId: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Min length: 1
		 */
		detectorVersionId: FormControl<string | null | undefined>,

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		description: FormControl<string | null | undefined>,
		ruleExecutionMode: FormControl<CreateDetectorVersionRequestRuleExecutionMode | null | undefined>,
	}
	export function CreateUpdateDetectorVersionRequestFormGroup() {
		return new FormGroup<UpdateDetectorVersionRequestFormProperties>({
			detectorId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(64), Validators.pattern('^[0-9a-z_-]+$')]),
			detectorVersionId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1)]),
			description: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(128)]),
			ruleExecutionMode: new FormControl<CreateDetectorVersionRequestRuleExecutionMode | null | undefined>(undefined),
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

		/**
		 * Required
		 * Max length: 64
		 * Min length: 1
		 */
		detectorId: string;

		/**
		 * Required
		 * Min length: 1
		 */
		detectorVersionId: string;

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		description: string;
	}
	export interface UpdateDetectorVersionMetadataRequestFormProperties {

		/**
		 * Required
		 * Max length: 64
		 * Min length: 1
		 */
		detectorId: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Min length: 1
		 */
		detectorVersionId: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		description: FormControl<string | null | undefined>,
	}
	export function CreateUpdateDetectorVersionMetadataRequestFormGroup() {
		return new FormGroup<UpdateDetectorVersionMetadataRequestFormProperties>({
			detectorId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(64), Validators.pattern('^[0-9a-z_-]+$')]),
			detectorVersionId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1)]),
			description: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(128)]),
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

		/**
		 * Required
		 * Max length: 64
		 * Min length: 1
		 */
		detectorId: string;

		/**
		 * Required
		 * Min length: 1
		 */
		detectorVersionId: string;

		/** Required */
		status: CreateDetectorVersionResultStatus;
	}
	export interface UpdateDetectorVersionStatusRequestFormProperties {

		/**
		 * Required
		 * Max length: 64
		 * Min length: 1
		 */
		detectorId: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Min length: 1
		 */
		detectorVersionId: FormControl<string | null | undefined>,

		/** Required */
		status: FormControl<CreateDetectorVersionResultStatus | null | undefined>,
	}
	export function CreateUpdateDetectorVersionStatusRequestFormGroup() {
		return new FormGroup<UpdateDetectorVersionStatusRequestFormProperties>({
			detectorId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(64), Validators.pattern('^[0-9a-z_-]+$')]),
			detectorVersionId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1)]),
			status: new FormControl<CreateDetectorVersionResultStatus | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UpdateModelVersionResult {
	}
	export interface UpdateModelVersionResultFormProperties {
	}
	export function CreateUpdateModelVersionResultFormGroup() {
		return new FormGroup<UpdateModelVersionResultFormProperties>({
		});

	}

	export interface UpdateModelVersionRequest {

		/**
		 * Required
		 * Max length: 64
		 * Min length: 1
		 */
		modelId: string;

		/** Required */
		modelType: ModelVersionModelType;

		/**
		 * Required
		 * Min length: 1
		 */
		modelVersionNumber: string;

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		description: string;

		/** Required */
		status: UpdateModelVersionRequestStatus;
	}
	export interface UpdateModelVersionRequestFormProperties {

		/**
		 * Required
		 * Max length: 64
		 * Min length: 1
		 */
		modelId: FormControl<string | null | undefined>,

		/** Required */
		modelType: FormControl<ModelVersionModelType | null | undefined>,

		/**
		 * Required
		 * Min length: 1
		 */
		modelVersionNumber: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		description: FormControl<string | null | undefined>,

		/** Required */
		status: FormControl<UpdateModelVersionRequestStatus | null | undefined>,
	}
	export function CreateUpdateModelVersionRequestFormGroup() {
		return new FormGroup<UpdateModelVersionRequestFormProperties>({
			modelId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(64), Validators.pattern('^[0-9a-z_-]+$')]),
			modelType: new FormControl<ModelVersionModelType | null | undefined>(undefined, [Validators.required]),
			modelVersionNumber: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1)]),
			description: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(128)]),
			status: new FormControl<UpdateModelVersionRequestStatus | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum UpdateModelVersionRequestStatus { TRAINING_IN_PROGRESS = 0, TRAINING_COMPLETE = 1, ACTIVATE_REQUESTED = 2, ACTIVATE_IN_PROGRESS = 3, ACTIVE = 4, INACTIVATE_IN_PROGRESS = 5, INACTIVE = 6, ERROR = 7 }

	export interface UpdateRuleMetadataResult {
	}
	export interface UpdateRuleMetadataResultFormProperties {
	}
	export function CreateUpdateRuleMetadataResultFormGroup() {
		return new FormGroup<UpdateRuleMetadataResultFormProperties>({
		});

	}

	export interface UpdateRuleMetadataRequest {

		/**
		 * A rule.
		 * Required
		 */
		rule: Rule;

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		description: string;
	}
	export interface UpdateRuleMetadataRequestFormProperties {

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		description: FormControl<string | null | undefined>,
	}
	export function CreateUpdateRuleMetadataRequestFormGroup() {
		return new FormGroup<UpdateRuleMetadataRequestFormProperties>({
			description: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(128)]),
		});

	}

	export interface UpdateRuleVersionResult {

		/** A rule. */
		rule?: Rule;
	}
	export interface UpdateRuleVersionResultFormProperties {
	}
	export function CreateUpdateRuleVersionResultFormGroup() {
		return new FormGroup<UpdateRuleVersionResultFormProperties>({
		});

	}

	export interface UpdateRuleVersionRequest {

		/**
		 * A rule.
		 * Required
		 */
		rule: Rule;

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		description?: string | null;

		/**
		 * Required
		 * Max length: 4096
		 * Min length: 1
		 */
		expression: string;

		/** Required */
		language: CreateRuleRequestLanguage;

		/**
		 * Required
		 * Minimum items: 1
		 */
		outcomes: Array<string>;
	}
	export interface UpdateRuleVersionRequestFormProperties {

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		description: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 4096
		 * Min length: 1
		 */
		expression: FormControl<string | null | undefined>,

		/** Required */
		language: FormControl<CreateRuleRequestLanguage | null | undefined>,
	}
	export function CreateUpdateRuleVersionRequestFormGroup() {
		return new FormGroup<UpdateRuleVersionRequestFormProperties>({
			description: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(128)]),
			expression: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(4096)]),
			language: new FormControl<CreateRuleRequestLanguage | null | undefined>(undefined, [Validators.required]),
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
		defaultValue?: string | null;
		description?: string | null;
		variableType?: string | null;
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
		byteBuffer?: string | null;

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		contentType?: string | null;
	}

	/** A pre-formed Amazon SageMaker model input you can include if your detector version includes an imported Amazon SageMaker model endpoint with pass-through input configuration. */
	export interface ModelEndpointDataBlobFormProperties {
		byteBuffer: FormControl<string | null | undefined>,

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		contentType: FormControl<string | null | undefined>,
	}
	export function CreateModelEndpointDataBlobFormGroup() {
		return new FormGroup<ModelEndpointDataBlobFormProperties>({
			byteBuffer: new FormControl<string | null | undefined>(undefined),
			contentType: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(1024)]),
		});

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
		DescribeModelVersions(maxResults: string | null | undefined, nextToken: string | null | undefined, requestBody: DescribeModelVersionsRequest): Observable<DescribeModelVersionsResult> {
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
		GetDetectors(maxResults: string | null | undefined, nextToken: string | null | undefined, requestBody: GetDetectorsRequest): Observable<GetDetectorsResult> {
			return this.http.post<GetDetectorsResult>(this.baseUri + '#X-Amz-Target=AWSHawksNestServiceFacade.GetDetectors?maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets the details for one or more Amazon SageMaker models that have been imported into the service. This is a paginated API. If you provide a null <code>maxSizePerPage</code>, this actions retrieves a maximum of 10 records per page. If you provide a <code>maxSizePerPage</code>, the value must be between 5 and 10. To get the next page results, provide the pagination token from the <code>GetExternalModelsResult</code> as part of your request. A null pagination token fetches the records from the beginning.
		 * Post #X-Amz-Target=AWSHawksNestServiceFacade.GetExternalModels
		 * @param {string} maxResults Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {GetExternalModelsResult} Success
		 */
		GetExternalModels(maxResults: string | null | undefined, nextToken: string | null | undefined, requestBody: GetExternalModelsRequest): Observable<GetExternalModelsResult> {
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
		GetModels(maxResults: string | null | undefined, nextToken: string | null | undefined, requestBody: GetModelsRequest): Observable<GetModelsResult> {
			return this.http.post<GetModelsResult>(this.baseUri + '#X-Amz-Target=AWSHawksNestServiceFacade.GetModels?maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets one or more outcomes. This is a paginated API. If you provide a null <code>maxSizePerPage</code>, this actions retrieves a maximum of 10 records per page. If you provide a <code>maxSizePerPage</code>, the value must be between 50 and 100. To get the next page results, provide the pagination token from the <code>GetOutcomesResult</code> as part of your request. A null pagination token fetches the records from the beginning.
		 * Post #X-Amz-Target=AWSHawksNestServiceFacade.GetOutcomes
		 * @param {string} maxResults Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {GetOutcomesResult} Success
		 */
		GetOutcomes(maxResults: string | null | undefined, nextToken: string | null | undefined, requestBody: GetOutcomesRequest): Observable<GetOutcomesResult> {
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

	export enum BatchCreateVariableX_Amz_Target { 'AWSHawksNestServiceFacade.BatchCreateVariable' = 0 }

	export enum BatchGetVariableX_Amz_Target { 'AWSHawksNestServiceFacade.BatchGetVariable' = 0 }

	export enum CreateDetectorVersionX_Amz_Target { 'AWSHawksNestServiceFacade.CreateDetectorVersion' = 0 }

	export enum CreateModelVersionX_Amz_Target { 'AWSHawksNestServiceFacade.CreateModelVersion' = 0 }

	export enum CreateRuleX_Amz_Target { 'AWSHawksNestServiceFacade.CreateRule' = 0 }

	export enum CreateVariableX_Amz_Target { 'AWSHawksNestServiceFacade.CreateVariable' = 0 }

	export enum DeleteDetectorX_Amz_Target { 'AWSHawksNestServiceFacade.DeleteDetector' = 0 }

	export enum DeleteDetectorVersionX_Amz_Target { 'AWSHawksNestServiceFacade.DeleteDetectorVersion' = 0 }

	export enum DeleteEventX_Amz_Target { 'AWSHawksNestServiceFacade.DeleteEvent' = 0 }

	export enum DeleteRuleVersionX_Amz_Target { 'AWSHawksNestServiceFacade.DeleteRuleVersion' = 0 }

	export enum DescribeDetectorX_Amz_Target { 'AWSHawksNestServiceFacade.DescribeDetector' = 0 }

	export enum DescribeModelVersionsX_Amz_Target { 'AWSHawksNestServiceFacade.DescribeModelVersions' = 0 }

	export enum GetDetectorVersionX_Amz_Target { 'AWSHawksNestServiceFacade.GetDetectorVersion' = 0 }

	export enum GetDetectorsX_Amz_Target { 'AWSHawksNestServiceFacade.GetDetectors' = 0 }

	export enum GetExternalModelsX_Amz_Target { 'AWSHawksNestServiceFacade.GetExternalModels' = 0 }

	export enum GetModelVersionX_Amz_Target { 'AWSHawksNestServiceFacade.GetModelVersion' = 0 }

	export enum GetModelsX_Amz_Target { 'AWSHawksNestServiceFacade.GetModels' = 0 }

	export enum GetOutcomesX_Amz_Target { 'AWSHawksNestServiceFacade.GetOutcomes' = 0 }

	export enum GetPredictionX_Amz_Target { 'AWSHawksNestServiceFacade.GetPrediction' = 0 }

	export enum GetRulesX_Amz_Target { 'AWSHawksNestServiceFacade.GetRules' = 0 }

	export enum GetVariablesX_Amz_Target { 'AWSHawksNestServiceFacade.GetVariables' = 0 }

	export enum PutDetectorX_Amz_Target { 'AWSHawksNestServiceFacade.PutDetector' = 0 }

	export enum PutExternalModelX_Amz_Target { 'AWSHawksNestServiceFacade.PutExternalModel' = 0 }

	export enum PutModelX_Amz_Target { 'AWSHawksNestServiceFacade.PutModel' = 0 }

	export enum PutOutcomeX_Amz_Target { 'AWSHawksNestServiceFacade.PutOutcome' = 0 }

	export enum UpdateDetectorVersionX_Amz_Target { 'AWSHawksNestServiceFacade.UpdateDetectorVersion' = 0 }

	export enum UpdateDetectorVersionMetadataX_Amz_Target { 'AWSHawksNestServiceFacade.UpdateDetectorVersionMetadata' = 0 }

	export enum UpdateDetectorVersionStatusX_Amz_Target { 'AWSHawksNestServiceFacade.UpdateDetectorVersionStatus' = 0 }

	export enum UpdateModelVersionX_Amz_Target { 'AWSHawksNestServiceFacade.UpdateModelVersion' = 0 }

	export enum UpdateRuleMetadataX_Amz_Target { 'AWSHawksNestServiceFacade.UpdateRuleMetadata' = 0 }

	export enum UpdateRuleVersionX_Amz_Target { 'AWSHawksNestServiceFacade.UpdateRuleVersion' = 0 }

	export enum UpdateVariableX_Amz_Target { 'AWSHawksNestServiceFacade.UpdateVariable' = 0 }

}

