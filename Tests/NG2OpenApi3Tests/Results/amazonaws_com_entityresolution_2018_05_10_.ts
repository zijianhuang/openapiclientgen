import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface CreateMatchingWorkflowOutput {
		description?: string;
		incrementalRunConfig?: IncrementalRunConfig;

		/** Required */
		inputSourceConfig: Array<InputSource>;

		/** Required */
		outputSourceConfig: Array<OutputSource>;

		/** Required */
		resolutionTechniques: ResolutionTechniques;

		/** Required */
		roleArn: string;

		/** Required */
		workflowArn: string;

		/** Required */
		workflowName: string;
	}
	export interface CreateMatchingWorkflowOutputFormProperties {
		description: FormControl<string | null | undefined>,

		/** Required */
		roleArn: FormControl<string | null | undefined>,

		/** Required */
		workflowArn: FormControl<string | null | undefined>,

		/** Required */
		workflowName: FormControl<string | null | undefined>,
	}
	export function CreateCreateMatchingWorkflowOutputFormGroup() {
		return new FormGroup<CreateMatchingWorkflowOutputFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			roleArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			workflowArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			workflowName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** An object which defines an incremental run type and has only <code>incrementalRunType</code> as a field. */
	export interface IncrementalRunConfig {
		incrementalRunType?: IncrementalRunType;
	}

	/** An object which defines an incremental run type and has only <code>incrementalRunType</code> as a field. */
	export interface IncrementalRunConfigFormProperties {
		incrementalRunType: FormControl<IncrementalRunType | null | undefined>,
	}
	export function CreateIncrementalRunConfigFormGroup() {
		return new FormGroup<IncrementalRunConfigFormProperties>({
			incrementalRunType: new FormControl<IncrementalRunType | null | undefined>(undefined),
		});

	}

	export enum IncrementalRunType { IMMEDIATE = 'IMMEDIATE' }


	/** An object containing <code>InputSourceARN</code>, <code>SchemaName</code>, and <code>ApplyNormalization</code>. */
	export interface InputSource {
		applyNormalization?: boolean | null;

		/** Required */
		inputSourceARN: string;

		/** Required */
		schemaName: string;
	}

	/** An object containing <code>InputSourceARN</code>, <code>SchemaName</code>, and <code>ApplyNormalization</code>. */
	export interface InputSourceFormProperties {
		applyNormalization: FormControl<boolean | null | undefined>,

		/** Required */
		inputSourceARN: FormControl<string | null | undefined>,

		/** Required */
		schemaName: FormControl<string | null | undefined>,
	}
	export function CreateInputSourceFormGroup() {
		return new FormGroup<InputSourceFormProperties>({
			applyNormalization: new FormControl<boolean | null | undefined>(undefined),
			inputSourceARN: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			schemaName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** A list of <code>OutputAttribute</code> objects, each of which have the fields Name and Hashed. Each of these objects selects a column to be included in the output table, and whether the values of the column should be hashed. */
	export interface OutputSource {
		KMSArn?: string;
		applyNormalization?: boolean | null;

		/** Required */
		output: Array<OutputAttribute>;

		/** Required */
		outputS3Path: string;
	}

	/** A list of <code>OutputAttribute</code> objects, each of which have the fields Name and Hashed. Each of these objects selects a column to be included in the output table, and whether the values of the column should be hashed. */
	export interface OutputSourceFormProperties {
		KMSArn: FormControl<string | null | undefined>,
		applyNormalization: FormControl<boolean | null | undefined>,

		/** Required */
		outputS3Path: FormControl<string | null | undefined>,
	}
	export function CreateOutputSourceFormGroup() {
		return new FormGroup<OutputSourceFormProperties>({
			KMSArn: new FormControl<string | null | undefined>(undefined),
			applyNormalization: new FormControl<boolean | null | undefined>(undefined),
			outputS3Path: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** A list of <code>OutputAttribute</code> objects, each of which have the fields Name and Hashed. Each of these objects selects a column to be included in the output table, and whether the values of the column should be hashed. */
	export interface OutputAttribute {
		hashed?: boolean | null;

		/** Required */
		name: string;
	}

	/** A list of <code>OutputAttribute</code> objects, each of which have the fields Name and Hashed. Each of these objects selects a column to be included in the output table, and whether the values of the column should be hashed. */
	export interface OutputAttributeFormProperties {
		hashed: FormControl<boolean | null | undefined>,

		/** Required */
		name: FormControl<string | null | undefined>,
	}
	export function CreateOutputAttributeFormGroup() {
		return new FormGroup<OutputAttributeFormProperties>({
			hashed: new FormControl<boolean | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** An object which defines the <code>resolutionType</code> and the <code>ruleBasedProperties</code>  */
	export interface ResolutionTechniques {
		resolutionType?: ResolutionType;
		ruleBasedProperties?: RuleBasedProperties;
	}

	/** An object which defines the <code>resolutionType</code> and the <code>ruleBasedProperties</code>  */
	export interface ResolutionTechniquesFormProperties {
		resolutionType: FormControl<ResolutionType | null | undefined>,
	}
	export function CreateResolutionTechniquesFormGroup() {
		return new FormGroup<ResolutionTechniquesFormProperties>({
			resolutionType: new FormControl<ResolutionType | null | undefined>(undefined),
		});

	}

	export enum ResolutionType { RULE_MATCHING = 'RULE_MATCHING', ML_MATCHING = 'ML_MATCHING' }


	/** An object which defines the list of matching rules to run and has a field <code>Rules</code>, which is a list of rule objects. */
	export interface RuleBasedProperties {

		/** Required */
		attributeMatchingModel: AttributeMatchingModel;

		/** Required */
		rules: Array<Rule>;
	}

	/** An object which defines the list of matching rules to run and has a field <code>Rules</code>, which is a list of rule objects. */
	export interface RuleBasedPropertiesFormProperties {

		/** Required */
		attributeMatchingModel: FormControl<AttributeMatchingModel | null | undefined>,
	}
	export function CreateRuleBasedPropertiesFormGroup() {
		return new FormGroup<RuleBasedPropertiesFormProperties>({
			attributeMatchingModel: new FormControl<AttributeMatchingModel | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum AttributeMatchingModel { ONE_TO_ONE = 'ONE_TO_ONE', MANY_TO_MANY = 'MANY_TO_MANY' }


	/** An object containing <code>RuleName</code>, and <code>MatchingKeys</code>. */
	export interface Rule {

		/** Required */
		matchingKeys: Array<string>;

		/** Required */
		ruleName: string;
	}

	/** An object containing <code>RuleName</code>, and <code>MatchingKeys</code>. */
	export interface RuleFormProperties {

		/** Required */
		ruleName: FormControl<string | null | undefined>,
	}
	export function CreateRuleFormGroup() {
		return new FormGroup<RuleFormProperties>({
			ruleName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
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

	export interface InternalServerException {
	}
	export interface InternalServerExceptionFormProperties {
	}
	export function CreateInternalServerExceptionFormGroup() {
		return new FormGroup<InternalServerExceptionFormProperties>({
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

	export interface ExceedsLimitException {
	}
	export interface ExceedsLimitExceptionFormProperties {
	}
	export function CreateExceedsLimitExceptionFormGroup() {
		return new FormGroup<ExceedsLimitExceptionFormProperties>({
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

	export interface ValidationException {
	}
	export interface ValidationExceptionFormProperties {
	}
	export function CreateValidationExceptionFormGroup() {
		return new FormGroup<ValidationExceptionFormProperties>({
		});

	}

	export interface CreateSchemaMappingOutput {

		/** Required */
		description: string;

		/** Required */
		mappedInputFields: Array<SchemaInputAttribute>;

		/** Required */
		schemaArn: string;

		/** Required */
		schemaName: string;
	}
	export interface CreateSchemaMappingOutputFormProperties {

		/** Required */
		description: FormControl<string | null | undefined>,

		/** Required */
		schemaArn: FormControl<string | null | undefined>,

		/** Required */
		schemaName: FormControl<string | null | undefined>,
	}
	export function CreateCreateSchemaMappingOutputFormGroup() {
		return new FormGroup<CreateSchemaMappingOutputFormProperties>({
			description: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			schemaArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			schemaName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** An object containing <code>FieldField</code>, <code>Type</code>, <code>GroupName</code>, and <code>MatchKey</code>. */
	export interface SchemaInputAttribute {

		/** Required */
		fieldName: string;
		groupName?: string;
		matchKey?: string;

		/** Required */
		type: SchemaAttributeType;
	}

	/** An object containing <code>FieldField</code>, <code>Type</code>, <code>GroupName</code>, and <code>MatchKey</code>. */
	export interface SchemaInputAttributeFormProperties {

		/** Required */
		fieldName: FormControl<string | null | undefined>,
		groupName: FormControl<string | null | undefined>,
		matchKey: FormControl<string | null | undefined>,

		/** Required */
		type: FormControl<SchemaAttributeType | null | undefined>,
	}
	export function CreateSchemaInputAttributeFormGroup() {
		return new FormGroup<SchemaInputAttributeFormProperties>({
			fieldName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			groupName: new FormControl<string | null | undefined>(undefined),
			matchKey: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<SchemaAttributeType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum SchemaAttributeType { NAME = 'NAME', NAME_FIRST = 'NAME_FIRST', NAME_MIDDLE = 'NAME_MIDDLE', NAME_LAST = 'NAME_LAST', ADDRESS = 'ADDRESS', ADDRESS_STREET1 = 'ADDRESS_STREET1', ADDRESS_STREET2 = 'ADDRESS_STREET2', ADDRESS_STREET3 = 'ADDRESS_STREET3', ADDRESS_CITY = 'ADDRESS_CITY', ADDRESS_STATE = 'ADDRESS_STATE', ADDRESS_COUNTRY = 'ADDRESS_COUNTRY', ADDRESS_POSTALCODE = 'ADDRESS_POSTALCODE', PHONE = 'PHONE', PHONE_NUMBER = 'PHONE_NUMBER', PHONE_COUNTRYCODE = 'PHONE_COUNTRYCODE', EMAIL_ADDRESS = 'EMAIL_ADDRESS', UNIQUE_ID = 'UNIQUE_ID', DATE = 'DATE', STRING = 'STRING' }

	export interface DeleteMatchingWorkflowOutput {

		/** Required */
		message: string;
	}
	export interface DeleteMatchingWorkflowOutputFormProperties {

		/** Required */
		message: FormControl<string | null | undefined>,
	}
	export function CreateDeleteMatchingWorkflowOutputFormGroup() {
		return new FormGroup<DeleteMatchingWorkflowOutputFormProperties>({
			message: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeleteSchemaMappingOutput {

		/** Required */
		message: string;
	}
	export interface DeleteSchemaMappingOutputFormProperties {

		/** Required */
		message: FormControl<string | null | undefined>,
	}
	export function CreateDeleteSchemaMappingOutputFormGroup() {
		return new FormGroup<DeleteSchemaMappingOutputFormProperties>({
			message: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetMatchIdOutput {
		matchId?: string;
	}
	export interface GetMatchIdOutputFormProperties {
		matchId: FormControl<string | null | undefined>,
	}
	export function CreateGetMatchIdOutputFormGroup() {
		return new FormGroup<GetMatchIdOutputFormProperties>({
			matchId: new FormControl<string | null | undefined>(undefined),
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

	export interface GetMatchingJobOutput {
		endTime?: Date;
		errorDetails?: ErrorDetails;

		/** Required */
		jobId: string;
		metrics?: JobMetrics;

		/** Required */
		startTime: Date;

		/** Required */
		status: JobStatus;
	}
	export interface GetMatchingJobOutputFormProperties {
		endTime: FormControl<Date | null | undefined>,

		/** Required */
		jobId: FormControl<string | null | undefined>,

		/** Required */
		startTime: FormControl<Date | null | undefined>,

		/** Required */
		status: FormControl<JobStatus | null | undefined>,
	}
	export function CreateGetMatchingJobOutputFormGroup() {
		return new FormGroup<GetMatchingJobOutputFormProperties>({
			endTime: new FormControl<Date | null | undefined>(undefined),
			jobId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			startTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<JobStatus | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** An object containing an error message, if there was an error. */
	export interface ErrorDetails {
		errorMessage?: string;
	}

	/** An object containing an error message, if there was an error. */
	export interface ErrorDetailsFormProperties {
		errorMessage: FormControl<string | null | undefined>,
	}
	export function CreateErrorDetailsFormGroup() {
		return new FormGroup<ErrorDetailsFormProperties>({
			errorMessage: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An object containing <code>InputRecords</code>, <code>TotalRecordsProcessed</code>, <code>MatchIDs</code>, and <code>RecordsNotProcessed</code>. */
	export interface JobMetrics {
		inputRecords?: number | null;
		matchIDs?: number | null;
		recordsNotProcessed?: number | null;
		totalRecordsProcessed?: number | null;
	}

	/** An object containing <code>InputRecords</code>, <code>TotalRecordsProcessed</code>, <code>MatchIDs</code>, and <code>RecordsNotProcessed</code>. */
	export interface JobMetricsFormProperties {
		inputRecords: FormControl<number | null | undefined>,
		matchIDs: FormControl<number | null | undefined>,
		recordsNotProcessed: FormControl<number | null | undefined>,
		totalRecordsProcessed: FormControl<number | null | undefined>,
	}
	export function CreateJobMetricsFormGroup() {
		return new FormGroup<JobMetricsFormProperties>({
			inputRecords: new FormControl<number | null | undefined>(undefined),
			matchIDs: new FormControl<number | null | undefined>(undefined),
			recordsNotProcessed: new FormControl<number | null | undefined>(undefined),
			totalRecordsProcessed: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum JobStatus { RUNNING = 'RUNNING', SUCCEEDED = 'SUCCEEDED', FAILED = 'FAILED', QUEUED = 'QUEUED' }

	export interface GetMatchingWorkflowOutput {

		/** Required */
		createdAt: Date;
		description?: string;
		incrementalRunConfig?: IncrementalRunConfig;

		/** Required */
		inputSourceConfig: Array<InputSource>;

		/** Required */
		outputSourceConfig: Array<OutputSource>;

		/** Required */
		resolutionTechniques: ResolutionTechniques;

		/** Required */
		roleArn: string;
		tags?: TagMap;

		/** Required */
		updatedAt: Date;

		/** Required */
		workflowArn: string;

		/** Required */
		workflowName: string;
	}
	export interface GetMatchingWorkflowOutputFormProperties {

		/** Required */
		createdAt: FormControl<Date | null | undefined>,
		description: FormControl<string | null | undefined>,

		/** Required */
		roleArn: FormControl<string | null | undefined>,

		/** Required */
		updatedAt: FormControl<Date | null | undefined>,

		/** Required */
		workflowArn: FormControl<string | null | undefined>,

		/** Required */
		workflowName: FormControl<string | null | undefined>,
	}
	export function CreateGetMatchingWorkflowOutputFormGroup() {
		return new FormGroup<GetMatchingWorkflowOutputFormProperties>({
			createdAt: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			description: new FormControl<string | null | undefined>(undefined),
			roleArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			updatedAt: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			workflowArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			workflowName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface TagMap {
	}
	export interface TagMapFormProperties {
	}
	export function CreateTagMapFormGroup() {
		return new FormGroup<TagMapFormProperties>({
		});

	}

	export interface GetSchemaMappingOutput {

		/** Required */
		createdAt: Date;
		description?: string;

		/** Required */
		mappedInputFields: Array<SchemaInputAttribute>;

		/** Required */
		schemaArn: string;

		/** Required */
		schemaName: string;
		tags?: TagMap;

		/** Required */
		updatedAt: Date;
	}
	export interface GetSchemaMappingOutputFormProperties {

		/** Required */
		createdAt: FormControl<Date | null | undefined>,
		description: FormControl<string | null | undefined>,

		/** Required */
		schemaArn: FormControl<string | null | undefined>,

		/** Required */
		schemaName: FormControl<string | null | undefined>,

		/** Required */
		updatedAt: FormControl<Date | null | undefined>,
	}
	export function CreateGetSchemaMappingOutputFormGroup() {
		return new FormGroup<GetSchemaMappingOutputFormProperties>({
			createdAt: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			description: new FormControl<string | null | undefined>(undefined),
			schemaArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			schemaName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			updatedAt: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ListMatchingJobsOutput {
		jobs?: Array<JobSummary>;
		nextToken?: string;
	}
	export interface ListMatchingJobsOutputFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListMatchingJobsOutputFormGroup() {
		return new FormGroup<ListMatchingJobsOutputFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An object containing the <code>JobId</code>, <code>Status</code>, <code>StartTime</code>, and <code>EndTime</code> of a job. */
	export interface JobSummary {
		endTime?: Date;

		/** Required */
		jobId: string;

		/** Required */
		startTime: Date;

		/** Required */
		status: JobStatus;
	}

	/** An object containing the <code>JobId</code>, <code>Status</code>, <code>StartTime</code>, and <code>EndTime</code> of a job. */
	export interface JobSummaryFormProperties {
		endTime: FormControl<Date | null | undefined>,

		/** Required */
		jobId: FormControl<string | null | undefined>,

		/** Required */
		startTime: FormControl<Date | null | undefined>,

		/** Required */
		status: FormControl<JobStatus | null | undefined>,
	}
	export function CreateJobSummaryFormGroup() {
		return new FormGroup<JobSummaryFormProperties>({
			endTime: new FormControl<Date | null | undefined>(undefined),
			jobId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			startTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<JobStatus | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ListMatchingWorkflowsOutput {
		nextToken?: string;
		workflowSummaries?: Array<MatchingWorkflowSummary>;
	}
	export interface ListMatchingWorkflowsOutputFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListMatchingWorkflowsOutputFormGroup() {
		return new FormGroup<ListMatchingWorkflowsOutputFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A list of <code>MatchingWorkflowSummary</code> objects, each of which contain the fields <code>WorkflowName</code>, <code>WorkflowArn</code>, <code>CreatedAt</code>, <code>UpdatedAt</code>. */
	export interface MatchingWorkflowSummary {

		/** Required */
		createdAt: Date;

		/** Required */
		updatedAt: Date;

		/** Required */
		workflowArn: string;

		/** Required */
		workflowName: string;
	}

	/** A list of <code>MatchingWorkflowSummary</code> objects, each of which contain the fields <code>WorkflowName</code>, <code>WorkflowArn</code>, <code>CreatedAt</code>, <code>UpdatedAt</code>. */
	export interface MatchingWorkflowSummaryFormProperties {

		/** Required */
		createdAt: FormControl<Date | null | undefined>,

		/** Required */
		updatedAt: FormControl<Date | null | undefined>,

		/** Required */
		workflowArn: FormControl<string | null | undefined>,

		/** Required */
		workflowName: FormControl<string | null | undefined>,
	}
	export function CreateMatchingWorkflowSummaryFormGroup() {
		return new FormGroup<MatchingWorkflowSummaryFormProperties>({
			createdAt: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			updatedAt: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			workflowArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			workflowName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ListSchemaMappingsOutput {
		nextToken?: string;
		schemaList?: Array<SchemaMappingSummary>;
	}
	export interface ListSchemaMappingsOutputFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListSchemaMappingsOutputFormGroup() {
		return new FormGroup<ListSchemaMappingsOutputFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An object containing <code>SchemaName</code>, <code>SchemaArn</code>, <code>CreatedAt</code>, and<code>UpdatedAt</code>. */
	export interface SchemaMappingSummary {

		/** Required */
		createdAt: Date;

		/** Required */
		schemaArn: string;

		/** Required */
		schemaName: string;

		/** Required */
		updatedAt: Date;
	}

	/** An object containing <code>SchemaName</code>, <code>SchemaArn</code>, <code>CreatedAt</code>, and<code>UpdatedAt</code>. */
	export interface SchemaMappingSummaryFormProperties {

		/** Required */
		createdAt: FormControl<Date | null | undefined>,

		/** Required */
		schemaArn: FormControl<string | null | undefined>,

		/** Required */
		schemaName: FormControl<string | null | undefined>,

		/** Required */
		updatedAt: FormControl<Date | null | undefined>,
	}
	export function CreateSchemaMappingSummaryFormGroup() {
		return new FormGroup<SchemaMappingSummaryFormProperties>({
			createdAt: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			schemaArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			schemaName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			updatedAt: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ListTagsForResourceOutput {

		/** Required */
		tags: TagMap;
	}
	export interface ListTagsForResourceOutputFormProperties {
	}
	export function CreateListTagsForResourceOutputFormGroup() {
		return new FormGroup<ListTagsForResourceOutputFormProperties>({
		});

	}

	export interface StartMatchingJobOutput {

		/** Required */
		jobId: string;
	}
	export interface StartMatchingJobOutputFormProperties {

		/** Required */
		jobId: FormControl<string | null | undefined>,
	}
	export function CreateStartMatchingJobOutputFormGroup() {
		return new FormGroup<StartMatchingJobOutputFormProperties>({
			jobId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface TagResourceOutput {
	}
	export interface TagResourceOutputFormProperties {
	}
	export function CreateTagResourceOutputFormGroup() {
		return new FormGroup<TagResourceOutputFormProperties>({
		});

	}

	export interface UntagResourceOutput {
	}
	export interface UntagResourceOutputFormProperties {
	}
	export function CreateUntagResourceOutputFormGroup() {
		return new FormGroup<UntagResourceOutputFormProperties>({
		});

	}

	export interface UpdateMatchingWorkflowOutput {
		description?: string;
		incrementalRunConfig?: IncrementalRunConfig;

		/** Required */
		inputSourceConfig: Array<InputSource>;

		/** Required */
		outputSourceConfig: Array<OutputSource>;

		/** Required */
		resolutionTechniques: ResolutionTechniques;

		/** Required */
		roleArn: string;

		/** Required */
		workflowName: string;
	}
	export interface UpdateMatchingWorkflowOutputFormProperties {
		description: FormControl<string | null | undefined>,

		/** Required */
		roleArn: FormControl<string | null | undefined>,

		/** Required */
		workflowName: FormControl<string | null | undefined>,
	}
	export function CreateUpdateMatchingWorkflowOutputFormGroup() {
		return new FormGroup<UpdateMatchingWorkflowOutputFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			roleArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			workflowName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateMatchingWorkflowInput {
		description?: string;
		incrementalRunConfig?: IncrementalRunConfig;

		/** Required */
		inputSourceConfig: Array<InputSource>;

		/** Required */
		outputSourceConfig: Array<OutputSource>;

		/** Required */
		resolutionTechniques: ResolutionTechniques;

		/** Required */
		roleArn: string;
		tags?: TagMap;

		/** Required */
		workflowName: string;
	}
	export interface CreateMatchingWorkflowInputFormProperties {
		description: FormControl<string | null | undefined>,

		/** Required */
		roleArn: FormControl<string | null | undefined>,

		/** Required */
		workflowName: FormControl<string | null | undefined>,
	}
	export function CreateCreateMatchingWorkflowInputFormGroup() {
		return new FormGroup<CreateMatchingWorkflowInputFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			roleArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			workflowName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateSchemaMappingInput {
		description?: string;
		mappedInputFields?: Array<SchemaInputAttribute>;

		/** Required */
		schemaName: string;
		tags?: TagMap;
	}
	export interface CreateSchemaMappingInputFormProperties {
		description: FormControl<string | null | undefined>,

		/** Required */
		schemaName: FormControl<string | null | undefined>,
	}
	export function CreateCreateSchemaMappingInputFormGroup() {
		return new FormGroup<CreateSchemaMappingInputFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			schemaName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeleteMatchingWorkflowInput {
	}
	export interface DeleteMatchingWorkflowInputFormProperties {
	}
	export function CreateDeleteMatchingWorkflowInputFormGroup() {
		return new FormGroup<DeleteMatchingWorkflowInputFormProperties>({
		});

	}

	export interface DeleteSchemaMappingInput {
	}
	export interface DeleteSchemaMappingInputFormProperties {
	}
	export function CreateDeleteSchemaMappingInputFormGroup() {
		return new FormGroup<DeleteSchemaMappingInputFormProperties>({
		});

	}

	export interface RecordAttributeMap {
	}
	export interface RecordAttributeMapFormProperties {
	}
	export function CreateRecordAttributeMapFormGroup() {
		return new FormGroup<RecordAttributeMapFormProperties>({
		});

	}

	export interface GetMatchIdInput {

		/** Required */
		record: RecordAttributeMap;
	}
	export interface GetMatchIdInputFormProperties {
	}
	export function CreateGetMatchIdInputFormGroup() {
		return new FormGroup<GetMatchIdInputFormProperties>({
		});

	}

	export interface GetMatchingJobInput {
	}
	export interface GetMatchingJobInputFormProperties {
	}
	export function CreateGetMatchingJobInputFormGroup() {
		return new FormGroup<GetMatchingJobInputFormProperties>({
		});

	}

	export interface GetMatchingWorkflowInput {
	}
	export interface GetMatchingWorkflowInputFormProperties {
	}
	export function CreateGetMatchingWorkflowInputFormGroup() {
		return new FormGroup<GetMatchingWorkflowInputFormProperties>({
		});

	}

	export interface GetSchemaMappingInput {
	}
	export interface GetSchemaMappingInputFormProperties {
	}
	export function CreateGetSchemaMappingInputFormGroup() {
		return new FormGroup<GetSchemaMappingInputFormProperties>({
		});

	}

	export interface ListMatchingJobsInput {
	}
	export interface ListMatchingJobsInputFormProperties {
	}
	export function CreateListMatchingJobsInputFormGroup() {
		return new FormGroup<ListMatchingJobsInputFormProperties>({
		});

	}

	export interface ListMatchingWorkflowsInput {
	}
	export interface ListMatchingWorkflowsInputFormProperties {
	}
	export function CreateListMatchingWorkflowsInputFormGroup() {
		return new FormGroup<ListMatchingWorkflowsInputFormProperties>({
		});

	}

	export interface ListSchemaMappingsInput {
	}
	export interface ListSchemaMappingsInputFormProperties {
	}
	export function CreateListSchemaMappingsInputFormGroup() {
		return new FormGroup<ListSchemaMappingsInputFormProperties>({
		});

	}

	export interface ListTagsForResourceInput {
	}
	export interface ListTagsForResourceInputFormProperties {
	}
	export function CreateListTagsForResourceInputFormGroup() {
		return new FormGroup<ListTagsForResourceInputFormProperties>({
		});

	}

	export interface StartMatchingJobInput {
	}
	export interface StartMatchingJobInputFormProperties {
	}
	export function CreateStartMatchingJobInputFormGroup() {
		return new FormGroup<StartMatchingJobInputFormProperties>({
		});

	}

	export interface TagResourceInput {

		/** Required */
		tags: TagMap;
	}
	export interface TagResourceInputFormProperties {
	}
	export function CreateTagResourceInputFormGroup() {
		return new FormGroup<TagResourceInputFormProperties>({
		});

	}

	export interface UntagResourceInput {
	}
	export interface UntagResourceInputFormProperties {
	}
	export function CreateUntagResourceInputFormGroup() {
		return new FormGroup<UntagResourceInputFormProperties>({
		});

	}

	export interface UpdateMatchingWorkflowInput {
		description?: string;
		incrementalRunConfig?: IncrementalRunConfig;

		/** Required */
		inputSourceConfig: Array<InputSource>;

		/** Required */
		outputSourceConfig: Array<OutputSource>;

		/** Required */
		resolutionTechniques: ResolutionTechniques;

		/** Required */
		roleArn: string;
	}
	export interface UpdateMatchingWorkflowInputFormProperties {
		description: FormControl<string | null | undefined>,

		/** Required */
		roleArn: FormControl<string | null | undefined>,
	}
	export function CreateUpdateMatchingWorkflowInputFormGroup() {
		return new FormGroup<UpdateMatchingWorkflowInputFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			roleArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Creates a <code>MatchingWorkflow</code> object which stores the configuration of the data processing job to be run. It is important to note that there should not be a pre-existing <code>MatchingWorkflow</code> with the same name. To modify an existing workflow, utilize the <code>UpdateMatchingWorkflow</code> API.
		 * Post matchingworkflows
		 * @return {CreateMatchingWorkflowOutput} Success
		 */
		CreateMatchingWorkflow(requestBody: CreateMatchingWorkflowPostBody): Observable<CreateMatchingWorkflowOutput> {
			return this.http.post<CreateMatchingWorkflowOutput>(this.baseUri + 'matchingworkflows', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns a list of all the <code>MatchingWorkflows</code> that have been created for an AWS account.
		 * Get matchingworkflows
		 * @param {number} maxResults The maximum number of objects returned per page.
		 * @param {string} nextToken The pagination token from the previous <code>ListSchemaMappings</code> API call.
		 * @return {ListMatchingWorkflowsOutput} Success
		 */
		ListMatchingWorkflows(maxResults: number | null | undefined, nextToken: string | null | undefined): Observable<ListMatchingWorkflowsOutput> {
			return this.http.get<ListMatchingWorkflowsOutput>(this.baseUri + 'matchingworkflows?maxResults=' + maxResults + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), {});
		}

		/**
		 * Creates a schema mapping, which defines the schema of the input customer records table. The <code>SchemaMapping</code> also provides Entity Resolution with some metadata about the table, such as the attribute types of the columns and which columns to match on.
		 * Post schemas
		 * @return {CreateSchemaMappingOutput} Success
		 */
		CreateSchemaMapping(requestBody: CreateSchemaMappingPostBody): Observable<CreateSchemaMappingOutput> {
			return this.http.post<CreateSchemaMappingOutput>(this.baseUri + 'schemas', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns a list of all the <code>SchemaMappings</code> that have been created for an AWS account.
		 * Get schemas
		 * @param {number} maxResults The maximum number of objects returned per page.
		 * @param {string} nextToken The pagination token from the previous <code>ListSchemaMappings</code> API call.
		 * @return {ListSchemaMappingsOutput} Success
		 */
		ListSchemaMappings(maxResults: number | null | undefined, nextToken: string | null | undefined): Observable<ListSchemaMappingsOutput> {
			return this.http.get<ListSchemaMappingsOutput>(this.baseUri + 'schemas?maxResults=' + maxResults + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), {});
		}

		/**
		 * Deletes the <code>MatchingWorkflow</code> with a given name. This operation will succeed even if a workflow with the given name does not exist.
		 * Delete matchingworkflows/{workflowName}
		 * @param {string} workflowName The name of the workflow to be retrieved.
		 * @return {DeleteMatchingWorkflowOutput} Success
		 */
		DeleteMatchingWorkflow(workflowName: string): Observable<DeleteMatchingWorkflowOutput> {
			return this.http.delete<DeleteMatchingWorkflowOutput>(this.baseUri + 'matchingworkflows/' + (workflowName == null ? '' : encodeURIComponent(workflowName)), {});
		}

		/**
		 * Returns the <code>MatchingWorkflow</code> with a given name, if it exists.
		 * Get matchingworkflows/{workflowName}
		 * @param {string} workflowName The name of the workflow.
		 * @return {GetMatchingWorkflowOutput} Success
		 */
		GetMatchingWorkflow(workflowName: string): Observable<GetMatchingWorkflowOutput> {
			return this.http.get<GetMatchingWorkflowOutput>(this.baseUri + 'matchingworkflows/' + (workflowName == null ? '' : encodeURIComponent(workflowName)), {});
		}

		/**
		 * Updates an existing <code>MatchingWorkflow</code>. This method is identical to <code>CreateMatchingWorkflow</code>, except it uses an HTTP <code>PUT</code> request instead of a <code>POST</code> request, and the <code>MatchingWorkflow</code> must already exist for the method to succeed.
		 * Put matchingworkflows/{workflowName}
		 * @param {string} workflowName The name of the workflow to be retrieved.
		 * @return {UpdateMatchingWorkflowOutput} Success
		 */
		UpdateMatchingWorkflow(workflowName: string, requestBody: UpdateMatchingWorkflowPutBody): Observable<UpdateMatchingWorkflowOutput> {
			return this.http.put<UpdateMatchingWorkflowOutput>(this.baseUri + 'matchingworkflows/' + (workflowName == null ? '' : encodeURIComponent(workflowName)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes the <code>SchemaMapping</code> with a given name. This operation will succeed even if a schema with the given name does not exist. This operation will fail if there is a <code>DataIntegrationWorkflow</code> object that references the <code>SchemaMapping</code> in the workflow's <code>InputSourceConfig</code>.
		 * Delete schemas/{schemaName}
		 * @param {string} schemaName The name of the schema to delete.
		 * @return {DeleteSchemaMappingOutput} Success
		 */
		DeleteSchemaMapping(schemaName: string): Observable<DeleteSchemaMappingOutput> {
			return this.http.delete<DeleteSchemaMappingOutput>(this.baseUri + 'schemas/' + (schemaName == null ? '' : encodeURIComponent(schemaName)), {});
		}

		/**
		 * Returns the SchemaMapping of a given name.
		 * Get schemas/{schemaName}
		 * @param {string} schemaName The name of the schema to be retrieved.
		 * @return {GetSchemaMappingOutput} Success
		 */
		GetSchemaMapping(schemaName: string): Observable<GetSchemaMappingOutput> {
			return this.http.get<GetSchemaMappingOutput>(this.baseUri + 'schemas/' + (schemaName == null ? '' : encodeURIComponent(schemaName)), {});
		}

		/**
		 * Returns the corresponding Match ID of a customer record if the record has been processed.
		 * Post matchingworkflows/{workflowName}/matches
		 * @param {string} workflowName The name of the workflow.
		 * @return {GetMatchIdOutput} Success
		 */
		GetMatchId(workflowName: string, requestBody: GetMatchIdPostBody): Observable<GetMatchIdOutput> {
			return this.http.post<GetMatchIdOutput>(this.baseUri + 'matchingworkflows/' + (workflowName == null ? '' : encodeURIComponent(workflowName)) + '/matches', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets the status, metrics, and errors (if there are any) that are associated with a job.
		 * Get matchingworkflows/{workflowName}/jobs/{jobId}
		 * @param {string} jobId The ID of the job.
		 * @param {string} workflowName The name of the workflow.
		 * @return {GetMatchingJobOutput} Success
		 */
		GetMatchingJob(jobId: string, workflowName: string): Observable<GetMatchingJobOutput> {
			return this.http.get<GetMatchingJobOutput>(this.baseUri + 'matchingworkflows/' + (workflowName == null ? '' : encodeURIComponent(workflowName)) + '/jobs/' + (jobId == null ? '' : encodeURIComponent(jobId)), {});
		}

		/**
		 * Lists all jobs for a given workflow.
		 * Get matchingworkflows/{workflowName}/jobs
		 * @param {number} maxResults The maximum number of objects returned per page.
		 * @param {string} nextToken The pagination token from the previous <code>ListSchemaMappings</code> API call.
		 * @param {string} workflowName The name of the workflow to be retrieved.
		 * @return {ListMatchingJobsOutput} Success
		 */
		ListMatchingJobs(maxResults: number | null | undefined, nextToken: string | null | undefined, workflowName: string): Observable<ListMatchingJobsOutput> {
			return this.http.get<ListMatchingJobsOutput>(this.baseUri + 'matchingworkflows/' + (workflowName == null ? '' : encodeURIComponent(workflowName)) + '/jobs?maxResults=' + maxResults + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), {});
		}

		/**
		 * Starts the <code>MatchingJob</code> of a workflow. The workflow must have previously been created using the <code>CreateMatchingWorkflow</code> endpoint.
		 * Post matchingworkflows/{workflowName}/jobs
		 * @param {string} workflowName The name of the matching job to be retrieved.
		 * @return {StartMatchingJobOutput} Success
		 */
		StartMatchingJob(workflowName: string): Observable<StartMatchingJobOutput> {
			return this.http.post<StartMatchingJobOutput>(this.baseUri + 'matchingworkflows/' + (workflowName == null ? '' : encodeURIComponent(workflowName)) + '/jobs', null, {});
		}

		/**
		 * Displays the tags associated with an AWS Entity Resolution resource. In Entity Resolution, <code>SchemaMapping</code>, and <code>MatchingWorkflow</code> can be tagged.
		 * Get tags/{resourceArn}
		 * @param {string} resourceArn The ARN of the resource for which you want to view tags.
		 * @return {ListTagsForResourceOutput} Success
		 */
		ListTagsForResource(resourceArn: string): Observable<ListTagsForResourceOutput> {
			return this.http.get<ListTagsForResourceOutput>(this.baseUri + 'tags/' + (resourceArn == null ? '' : encodeURIComponent(resourceArn)), {});
		}

		/**
		 * Assigns one or more tags (key-value pairs) to the specified AWS Entity Resolution resource. Tags can help you organize and categorize your resources. You can also use them to scope user permissions by granting a user permission to access or change only resources with certain tag values. In Entity Resolution, <code>SchemaMapping</code>, and <code>MatchingWorkflow</code> can be tagged. Tags don't have any semantic meaning to AWS and are interpreted strictly as strings of characters. You can use the <code>TagResource</code> action with a resource that already has tags. If you specify a new tag key, this tag is appended to the list of tags associated with the resource. If you specify a tag key that is already associated with the resource, the new tag value that you specify replaces the previous value for that tag.
		 * Post tags/{resourceArn}
		 * @param {string} resourceArn The ARN of the resource for which you want to view tags.
		 * @return {TagResourceOutput} Success
		 */
		TagResource(resourceArn: string, requestBody: TagResourcePostBody): Observable<TagResourceOutput> {
			return this.http.post<TagResourceOutput>(this.baseUri + 'tags/' + (resourceArn == null ? '' : encodeURIComponent(resourceArn)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Removes one or more tags from the specified AWS Entity Resolution resource. In Entity Resolution, <code>SchemaMapping</code>, and <code>MatchingWorkflow</code> can be tagged.
		 * Delete tags/{resourceArn}#tagKeys
		 * @param {string} resourceArn The ARN of the resource for which you want to untag.
		 * @param {Array<string>} tagKeys The list of tag keys to remove from the resource.
		 * @return {UntagResourceOutput} Success
		 */
		UntagResource(resourceArn: string, tagKeys: Array<string>): Observable<UntagResourceOutput> {
			return this.http.delete<UntagResourceOutput>(this.baseUri + 'tags/' + (resourceArn == null ? '' : encodeURIComponent(resourceArn)) + '#tagKeys&' + tagKeys.map(z => `tagKeys=${encodeURIComponent(z)}`).join('&'), {});
		}
	}

	export interface CreateMatchingWorkflowPostBody {

		/**
		 * A description of the workflow.
		 * Max length: 255
		 * Min length: 0
		 */
		description?: string | null;

		/** An object which defines an incremental run type and has only <code>incrementalRunType</code> as a field. */
		incrementalRunConfig?: CreateMatchingWorkflowPostBodyIncrementalRunConfig;

		/**
		 * A list of <code>InputSource</code> objects, which have the fields <code>InputSourceARN</code> and <code>SchemaName</code>.
		 * Required
		 * Minimum items: 1
		 * Maximum items: 20
		 */
		inputSourceConfig: Array<InputSource>;

		/**
		 * A list of <code>OutputSource</code> objects, each of which contains fields <code>OutputS3Path</code>, <code>ApplyNormalization</code>, and <code>Output</code>.
		 * Required
		 * Minimum items: 1
		 * Maximum items: 1
		 */
		outputSourceConfig: Array<OutputSource>;

		/**
		 * An object which defines the <code>resolutionType</code> and the <code>ruleBasedProperties</code>
		 * Required
		 */
		resolutionTechniques: CreateMatchingWorkflowPostBodyResolutionTechniques;

		/**
		 * The Amazon Resource Name (ARN) of the IAM role. AWS Entity Resolution assumes this role to create resources on your behalf as part of workflow execution.
		 * Required
		 */
		roleArn: string;

		/** The tags used to organize, track, or control access for this resource. */
		tags?: {[id: string]: string };

		/**
		 * The name of the workflow. There cannot be multiple <code>DataIntegrationWorkflows</code> with the same name.
		 * Required
		 * Max length: 255
		 * Min length: 0
		 */
		workflowName: string;
	}
	export interface CreateMatchingWorkflowPostBodyFormProperties {

		/**
		 * A description of the workflow.
		 * Max length: 255
		 * Min length: 0
		 */
		description: FormControl<string | null | undefined>,

		/**
		 * The Amazon Resource Name (ARN) of the IAM role. AWS Entity Resolution assumes this role to create resources on your behalf as part of workflow execution.
		 * Required
		 */
		roleArn: FormControl<string | null | undefined>,

		/** The tags used to organize, track, or control access for this resource. */
		tags: FormControl<{[id: string]: string } | null | undefined>,

		/**
		 * The name of the workflow. There cannot be multiple <code>DataIntegrationWorkflows</code> with the same name.
		 * Required
		 * Max length: 255
		 * Min length: 0
		 */
		workflowName: FormControl<string | null | undefined>,
	}
	export function CreateCreateMatchingWorkflowPostBodyFormGroup() {
		return new FormGroup<CreateMatchingWorkflowPostBodyFormProperties>({
			description: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(255)]),
			roleArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			workflowName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(0), Validators.maxLength(255), Validators.pattern('^[a-zA-Z_0-9-]*$')]),
		});

	}

	export interface CreateMatchingWorkflowPostBodyIncrementalRunConfig {
		incrementalRunType?: IncrementalRunType;
	}
	export interface CreateMatchingWorkflowPostBodyIncrementalRunConfigFormProperties {
		incrementalRunType: FormControl<IncrementalRunType | null | undefined>,
	}
	export function CreateCreateMatchingWorkflowPostBodyIncrementalRunConfigFormGroup() {
		return new FormGroup<CreateMatchingWorkflowPostBodyIncrementalRunConfigFormProperties>({
			incrementalRunType: new FormControl<IncrementalRunType | null | undefined>(undefined),
		});

	}

	export interface CreateMatchingWorkflowPostBodyResolutionTechniques {
		resolutionType?: ResolutionType;
		ruleBasedProperties?: RuleBasedProperties;
	}
	export interface CreateMatchingWorkflowPostBodyResolutionTechniquesFormProperties {
		resolutionType: FormControl<ResolutionType | null | undefined>,
	}
	export function CreateCreateMatchingWorkflowPostBodyResolutionTechniquesFormGroup() {
		return new FormGroup<CreateMatchingWorkflowPostBodyResolutionTechniquesFormProperties>({
			resolutionType: new FormControl<ResolutionType | null | undefined>(undefined),
		});

	}

	export interface CreateSchemaMappingPostBody {

		/**
		 * A description of the schema.
		 * Max length: 255
		 * Min length: 0
		 */
		description?: string | null;

		/**
		 * A list of <code>MappedInputFields</code>. Each <code>MappedInputField</code> corresponds to a column the source data table, and contains column name plus additional information that Entity Resolution uses for matching.
		 * Minimum items: 2
		 * Maximum items: 25
		 */
		mappedInputFields?: Array<SchemaInputAttribute>;

		/**
		 * The name of the schema. There cannot be multiple <code>SchemaMappings</code> with the same name.
		 * Required
		 * Max length: 255
		 * Min length: 0
		 */
		schemaName: string;

		/** The tags used to organize, track, or control access for this resource. */
		tags?: {[id: string]: string };
	}
	export interface CreateSchemaMappingPostBodyFormProperties {

		/**
		 * A description of the schema.
		 * Max length: 255
		 * Min length: 0
		 */
		description: FormControl<string | null | undefined>,

		/**
		 * The name of the schema. There cannot be multiple <code>SchemaMappings</code> with the same name.
		 * Required
		 * Max length: 255
		 * Min length: 0
		 */
		schemaName: FormControl<string | null | undefined>,

		/** The tags used to organize, track, or control access for this resource. */
		tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateCreateSchemaMappingPostBodyFormGroup() {
		return new FormGroup<CreateSchemaMappingPostBodyFormProperties>({
			description: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(255)]),
			schemaName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(0), Validators.maxLength(255), Validators.pattern('^[a-zA-Z_0-9-]*$')]),
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}

	export interface UpdateMatchingWorkflowPutBody {

		/**
		 * A description of the workflow.
		 * Max length: 255
		 * Min length: 0
		 */
		description?: string | null;

		/** An object which defines an incremental run type and has only <code>incrementalRunType</code> as a field. */
		incrementalRunConfig?: UpdateMatchingWorkflowPutBodyIncrementalRunConfig;

		/**
		 * A list of <code>InputSource</code> objects, which have the fields <code>InputSourceARN</code> and <code>SchemaName</code>.
		 * Required
		 * Minimum items: 1
		 * Maximum items: 20
		 */
		inputSourceConfig: Array<InputSource>;

		/**
		 * A list of <code>OutputSource</code> objects, each of which contains fields <code>OutputS3Path</code>, <code>ApplyNormalization</code>, and <code>Output</code>.
		 * Required
		 * Minimum items: 1
		 * Maximum items: 1
		 */
		outputSourceConfig: Array<OutputSource>;

		/**
		 * An object which defines the <code>resolutionType</code> and the <code>ruleBasedProperties</code>
		 * Required
		 */
		resolutionTechniques: UpdateMatchingWorkflowPutBodyResolutionTechniques;

		/**
		 * The Amazon Resource Name (ARN) of the IAM role. AWS Entity Resolution assumes this role to create resources on your behalf as part of workflow execution.
		 * Required
		 */
		roleArn: string;
	}
	export interface UpdateMatchingWorkflowPutBodyFormProperties {

		/**
		 * A description of the workflow.
		 * Max length: 255
		 * Min length: 0
		 */
		description: FormControl<string | null | undefined>,

		/**
		 * The Amazon Resource Name (ARN) of the IAM role. AWS Entity Resolution assumes this role to create resources on your behalf as part of workflow execution.
		 * Required
		 */
		roleArn: FormControl<string | null | undefined>,
	}
	export function CreateUpdateMatchingWorkflowPutBodyFormGroup() {
		return new FormGroup<UpdateMatchingWorkflowPutBodyFormProperties>({
			description: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(255)]),
			roleArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UpdateMatchingWorkflowPutBodyIncrementalRunConfig {
		incrementalRunType?: IncrementalRunType;
	}
	export interface UpdateMatchingWorkflowPutBodyIncrementalRunConfigFormProperties {
		incrementalRunType: FormControl<IncrementalRunType | null | undefined>,
	}
	export function CreateUpdateMatchingWorkflowPutBodyIncrementalRunConfigFormGroup() {
		return new FormGroup<UpdateMatchingWorkflowPutBodyIncrementalRunConfigFormProperties>({
			incrementalRunType: new FormControl<IncrementalRunType | null | undefined>(undefined),
		});

	}

	export interface UpdateMatchingWorkflowPutBodyResolutionTechniques {
		resolutionType?: ResolutionType;
		ruleBasedProperties?: RuleBasedProperties;
	}
	export interface UpdateMatchingWorkflowPutBodyResolutionTechniquesFormProperties {
		resolutionType: FormControl<ResolutionType | null | undefined>,
	}
	export function CreateUpdateMatchingWorkflowPutBodyResolutionTechniquesFormGroup() {
		return new FormGroup<UpdateMatchingWorkflowPutBodyResolutionTechniquesFormProperties>({
			resolutionType: new FormControl<ResolutionType | null | undefined>(undefined),
		});

	}

	export interface GetMatchIdPostBody {

		/**
		 * The record to fetch the Match ID for.
		 * Required
		 */
		record: {[id: string]: string };
	}
	export interface GetMatchIdPostBodyFormProperties {

		/**
		 * The record to fetch the Match ID for.
		 * Required
		 */
		record: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateGetMatchIdPostBodyFormGroup() {
		return new FormGroup<GetMatchIdPostBodyFormProperties>({
			record: new FormControl<{[id: string]: string } | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface TagResourcePostBody {

		/**
		 * The tags used to organize, track, or control access for this resource.
		 * Required
		 */
		tags: {[id: string]: string };
	}
	export interface TagResourcePostBodyFormProperties {

		/**
		 * The tags used to organize, track, or control access for this resource.
		 * Required
		 */
		tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateTagResourcePostBodyFormGroup() {
		return new FormGroup<TagResourcePostBodyFormProperties>({
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined, [Validators.required]),
		});

	}

}

