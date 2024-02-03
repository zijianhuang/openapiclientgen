import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface CreateMigrationWorkflowResponse {
		id?: string;
		arn?: string;
		name?: string;
		description?: string;
		templateId?: string;
		adsApplicationConfigurationId?: string;
		workflowInputs?: StepInputParameters;
		stepTargets?: Array<string>;
		status?: MigrationWorkflowStatusEnum;
		creationTime?: Date;
		tags?: StringMap;
	}
	export interface CreateMigrationWorkflowResponseFormProperties {
		id: FormControl<string | null | undefined>,
		arn: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,
		templateId: FormControl<string | null | undefined>,
		adsApplicationConfigurationId: FormControl<string | null | undefined>,
		status: FormControl<MigrationWorkflowStatusEnum | null | undefined>,
		creationTime: FormControl<Date | null | undefined>,
	}
	export function CreateCreateMigrationWorkflowResponseFormGroup() {
		return new FormGroup<CreateMigrationWorkflowResponseFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			arn: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			templateId: new FormControl<string | null | undefined>(undefined),
			adsApplicationConfigurationId: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<MigrationWorkflowStatusEnum | null | undefined>(undefined),
			creationTime: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface StepInputParameters {
	}
	export interface StepInputParametersFormProperties {
	}
	export function CreateStepInputParametersFormGroup() {
		return new FormGroup<StepInputParametersFormProperties>({
		});

	}

	export enum MigrationWorkflowStatusEnum { CREATING = 'CREATING', NOT_STARTED = 'NOT_STARTED', CREATION_FAILED = 'CREATION_FAILED', STARTING = 'STARTING', IN_PROGRESS = 'IN_PROGRESS', WORKFLOW_FAILED = 'WORKFLOW_FAILED', PAUSED = 'PAUSED', PAUSING = 'PAUSING', PAUSING_FAILED = 'PAUSING_FAILED', USER_ATTENTION_REQUIRED = 'USER_ATTENTION_REQUIRED', DELETING = 'DELETING', DELETION_FAILED = 'DELETION_FAILED', DELETED = 'DELETED', COMPLETED = 'COMPLETED' }

	export interface StringMap {
	}
	export interface StringMapFormProperties {
	}
	export function CreateStringMapFormGroup() {
		return new FormGroup<StringMapFormProperties>({
		});

	}


	/** A map of key value pairs that is generated when you create a migration workflow. The key value pairs will differ based on your selection of the template. */
	export interface StepInput {
		integerValue?: number | null;
		stringValue?: string;
		listOfStringsValue?: Array<string>;
		mapOfStringValue?: StringMap;
	}

	/** A map of key value pairs that is generated when you create a migration workflow. The key value pairs will differ based on your selection of the template. */
	export interface StepInputFormProperties {
		integerValue: FormControl<number | null | undefined>,
		stringValue: FormControl<string | null | undefined>,
	}
	export function CreateStepInputFormGroup() {
		return new FormGroup<StepInputFormProperties>({
			integerValue: new FormControl<number | null | undefined>(undefined),
			stringValue: new FormControl<string | null | undefined>(undefined),
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

	export interface InternalServerException {
	}
	export interface InternalServerExceptionFormProperties {
	}
	export function CreateInternalServerExceptionFormGroup() {
		return new FormGroup<InternalServerExceptionFormProperties>({
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

	export interface CreateWorkflowStepResponse {
		id?: string;
		stepGroupId?: string;
		workflowId?: string;
		name?: string;
	}
	export interface CreateWorkflowStepResponseFormProperties {
		id: FormControl<string | null | undefined>,
		stepGroupId: FormControl<string | null | undefined>,
		workflowId: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
	}
	export function CreateCreateWorkflowStepResponseFormGroup() {
		return new FormGroup<CreateWorkflowStepResponseFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			stepGroupId: new FormControl<string | null | undefined>(undefined),
			workflowId: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The script location for a particular operating system. */
	export interface PlatformScriptKey {
		linux?: string;
		windows?: string;
	}

	/** The script location for a particular operating system. */
	export interface PlatformScriptKeyFormProperties {
		linux: FormControl<string | null | undefined>,
		windows: FormControl<string | null | undefined>,
	}
	export function CreatePlatformScriptKeyFormGroup() {
		return new FormGroup<PlatformScriptKeyFormProperties>({
			linux: new FormControl<string | null | undefined>(undefined),
			windows: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Command to be run on a particular operating system. */
	export interface PlatformCommand {
		linux?: string;
		windows?: string;
	}

	/** Command to be run on a particular operating system. */
	export interface PlatformCommandFormProperties {
		linux: FormControl<string | null | undefined>,
		windows: FormControl<string | null | undefined>,
	}
	export function CreatePlatformCommandFormGroup() {
		return new FormGroup<PlatformCommandFormProperties>({
			linux: new FormControl<string | null | undefined>(undefined),
			windows: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum RunEnvironment { AWS = 'AWS', ONPREMISE = 'ONPREMISE' }

	export enum TargetType { SINGLE = 'SINGLE', ALL = 'ALL', NONE = 'NONE' }


	/** The output of a step. */
	export interface WorkflowStepOutput {
		name?: string;
		dataType?: DataType;
		required?: boolean | null;
		value?: WorkflowStepOutputUnion;
	}

	/** The output of a step. */
	export interface WorkflowStepOutputFormProperties {
		name: FormControl<string | null | undefined>,
		dataType: FormControl<DataType | null | undefined>,
		required: FormControl<boolean | null | undefined>,
	}
	export function CreateWorkflowStepOutputFormGroup() {
		return new FormGroup<WorkflowStepOutputFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			dataType: new FormControl<DataType | null | undefined>(undefined),
			required: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export enum DataType { STRING = 'STRING', INTEGER = 'INTEGER', STRINGLIST = 'STRINGLIST', STRINGMAP = 'STRINGMAP' }


	/** A structure to hold multiple values of an output. */
	export interface WorkflowStepOutputUnion {
		integerValue?: number | null;
		stringValue?: string;
		listOfStringValue?: Array<string>;
	}

	/** A structure to hold multiple values of an output. */
	export interface WorkflowStepOutputUnionFormProperties {
		integerValue: FormControl<number | null | undefined>,
		stringValue: FormControl<string | null | undefined>,
	}
	export function CreateWorkflowStepOutputUnionFormGroup() {
		return new FormGroup<WorkflowStepOutputUnionFormProperties>({
			integerValue: new FormControl<number | null | undefined>(undefined),
			stringValue: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateWorkflowStepGroupResponse {
		workflowId?: string;
		name?: string;
		id?: string;
		description?: string;
		tools?: Array<Tool>;
		next?: Array<string>;
		previous?: Array<string>;
		creationTime?: Date;
	}
	export interface CreateWorkflowStepGroupResponseFormProperties {
		workflowId: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		id: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,
		creationTime: FormControl<Date | null | undefined>,
	}
	export function CreateCreateWorkflowStepGroupResponseFormGroup() {
		return new FormGroup<CreateWorkflowStepGroupResponseFormProperties>({
			workflowId: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			creationTime: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/** List of AWS services utilized in a migration workflow. */
	export interface Tool {
		name?: string;
		url?: string;
	}

	/** List of AWS services utilized in a migration workflow. */
	export interface ToolFormProperties {
		name: FormControl<string | null | undefined>,
		url: FormControl<string | null | undefined>,
	}
	export function CreateToolFormGroup() {
		return new FormGroup<ToolFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DeleteMigrationWorkflowResponse {
		id?: string;
		arn?: string;
		status?: MigrationWorkflowStatusEnum;
	}
	export interface DeleteMigrationWorkflowResponseFormProperties {
		id: FormControl<string | null | undefined>,
		arn: FormControl<string | null | undefined>,
		status: FormControl<MigrationWorkflowStatusEnum | null | undefined>,
	}
	export function CreateDeleteMigrationWorkflowResponseFormGroup() {
		return new FormGroup<DeleteMigrationWorkflowResponseFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			arn: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<MigrationWorkflowStatusEnum | null | undefined>(undefined),
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

	export interface DeleteWorkflowStepResponse {
	}
	export interface DeleteWorkflowStepResponseFormProperties {
	}
	export function CreateDeleteWorkflowStepResponseFormGroup() {
		return new FormGroup<DeleteWorkflowStepResponseFormProperties>({
		});

	}

	export interface DeleteWorkflowStepGroupResponse {
	}
	export interface DeleteWorkflowStepGroupResponseFormProperties {
	}
	export function CreateDeleteWorkflowStepGroupResponseFormGroup() {
		return new FormGroup<DeleteWorkflowStepGroupResponseFormProperties>({
		});

	}

	export interface GetMigrationWorkflowTemplateResponse {
		id?: string;
		name?: string;
		description?: string;
		inputs?: Array<TemplateInput>;
		tools?: Array<Tool>;
		status?: TemplateStatus;
		creationTime?: Date;
	}
	export interface GetMigrationWorkflowTemplateResponseFormProperties {
		id: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,
		status: FormControl<TemplateStatus | null | undefined>,
		creationTime: FormControl<Date | null | undefined>,
	}
	export function CreateGetMigrationWorkflowTemplateResponseFormGroup() {
		return new FormGroup<GetMigrationWorkflowTemplateResponseFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<TemplateStatus | null | undefined>(undefined),
			creationTime: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/** The input parameters of a template. */
	export interface TemplateInput {
		inputName?: string;
		dataType?: DataType;
		required?: boolean | null;
	}

	/** The input parameters of a template. */
	export interface TemplateInputFormProperties {
		inputName: FormControl<string | null | undefined>,
		dataType: FormControl<DataType | null | undefined>,
		required: FormControl<boolean | null | undefined>,
	}
	export function CreateTemplateInputFormGroup() {
		return new FormGroup<TemplateInputFormProperties>({
			inputName: new FormControl<string | null | undefined>(undefined),
			dataType: new FormControl<DataType | null | undefined>(undefined),
			required: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export enum TemplateStatus { CREATED = 'CREATED' }

	export interface GetTemplateStepResponse {
		id?: string;
		stepGroupId?: string;
		templateId?: string;
		name?: string;
		description?: string;
		stepActionType?: StepActionType;
		creationTime?: string;
		previous?: Array<string>;
		next?: Array<string>;
		outputs?: Array<StepOutput>;
		stepAutomationConfiguration?: StepAutomationConfiguration;
	}
	export interface GetTemplateStepResponseFormProperties {
		id: FormControl<string | null | undefined>,
		stepGroupId: FormControl<string | null | undefined>,
		templateId: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,
		stepActionType: FormControl<StepActionType | null | undefined>,
		creationTime: FormControl<string | null | undefined>,
	}
	export function CreateGetTemplateStepResponseFormGroup() {
		return new FormGroup<GetTemplateStepResponseFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			stepGroupId: new FormControl<string | null | undefined>(undefined),
			templateId: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			stepActionType: new FormControl<StepActionType | null | undefined>(undefined),
			creationTime: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum StepActionType { MANUAL = 'MANUAL', AUTOMATED = 'AUTOMATED' }


	/** The output of the step. */
	export interface StepOutput {
		name?: string;
		dataType?: DataType;
		required?: boolean | null;
	}

	/** The output of the step. */
	export interface StepOutputFormProperties {
		name: FormControl<string | null | undefined>,
		dataType: FormControl<DataType | null | undefined>,
		required: FormControl<boolean | null | undefined>,
	}
	export function CreateStepOutputFormGroup() {
		return new FormGroup<StepOutputFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			dataType: new FormControl<DataType | null | undefined>(undefined),
			required: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** The custom script to run tests on source or target environments. */
	export interface StepAutomationConfiguration {
		scriptLocationS3Bucket?: string;
		scriptLocationS3Key?: PlatformScriptKey;
		command?: PlatformCommand;
		runEnvironment?: RunEnvironment;
		targetType?: TargetType;
	}

	/** The custom script to run tests on source or target environments. */
	export interface StepAutomationConfigurationFormProperties {
		scriptLocationS3Bucket: FormControl<string | null | undefined>,
		runEnvironment: FormControl<RunEnvironment | null | undefined>,
		targetType: FormControl<TargetType | null | undefined>,
	}
	export function CreateStepAutomationConfigurationFormGroup() {
		return new FormGroup<StepAutomationConfigurationFormProperties>({
			scriptLocationS3Bucket: new FormControl<string | null | undefined>(undefined),
			runEnvironment: new FormControl<RunEnvironment | null | undefined>(undefined),
			targetType: new FormControl<TargetType | null | undefined>(undefined),
		});

	}

	export interface GetTemplateStepGroupResponse {
		templateId?: string;
		id?: string;
		name?: string;
		description?: string;
		status?: StepGroupStatus;
		creationTime?: Date;
		lastModifiedTime?: Date;
		tools?: Array<Tool>;
		previous?: Array<string>;
		next?: Array<string>;
	}
	export interface GetTemplateStepGroupResponseFormProperties {
		templateId: FormControl<string | null | undefined>,
		id: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,
		status: FormControl<StepGroupStatus | null | undefined>,
		creationTime: FormControl<Date | null | undefined>,
		lastModifiedTime: FormControl<Date | null | undefined>,
	}
	export function CreateGetTemplateStepGroupResponseFormGroup() {
		return new FormGroup<GetTemplateStepGroupResponseFormProperties>({
			templateId: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<StepGroupStatus | null | undefined>(undefined),
			creationTime: new FormControl<Date | null | undefined>(undefined),
			lastModifiedTime: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export enum StepGroupStatus { AWAITING_DEPENDENCIES = 'AWAITING_DEPENDENCIES', READY = 'READY', IN_PROGRESS = 'IN_PROGRESS', COMPLETED = 'COMPLETED', FAILED = 'FAILED', PAUSED = 'PAUSED', PAUSING = 'PAUSING', USER_ATTENTION_REQUIRED = 'USER_ATTENTION_REQUIRED' }

	export interface GetMigrationWorkflowResponse {
		id?: string;
		arn?: string;
		name?: string;
		description?: string;
		templateId?: string;
		adsApplicationConfigurationId?: string;
		adsApplicationName?: string;
		status?: MigrationWorkflowStatusEnum;
		statusMessage?: string;
		creationTime?: Date;
		lastStartTime?: Date;
		lastStopTime?: Date;
		lastModifiedTime?: Date;
		endTime?: Date;
		tools?: Array<Tool>;
		totalSteps?: number | null;
		completedSteps?: number | null;
		workflowInputs?: StepInputParameters;
		tags?: StringMap;
		workflowBucket?: string;
	}
	export interface GetMigrationWorkflowResponseFormProperties {
		id: FormControl<string | null | undefined>,
		arn: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,
		templateId: FormControl<string | null | undefined>,
		adsApplicationConfigurationId: FormControl<string | null | undefined>,
		adsApplicationName: FormControl<string | null | undefined>,
		status: FormControl<MigrationWorkflowStatusEnum | null | undefined>,
		statusMessage: FormControl<string | null | undefined>,
		creationTime: FormControl<Date | null | undefined>,
		lastStartTime: FormControl<Date | null | undefined>,
		lastStopTime: FormControl<Date | null | undefined>,
		lastModifiedTime: FormControl<Date | null | undefined>,
		endTime: FormControl<Date | null | undefined>,
		totalSteps: FormControl<number | null | undefined>,
		completedSteps: FormControl<number | null | undefined>,
		workflowBucket: FormControl<string | null | undefined>,
	}
	export function CreateGetMigrationWorkflowResponseFormGroup() {
		return new FormGroup<GetMigrationWorkflowResponseFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			arn: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			templateId: new FormControl<string | null | undefined>(undefined),
			adsApplicationConfigurationId: new FormControl<string | null | undefined>(undefined),
			adsApplicationName: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<MigrationWorkflowStatusEnum | null | undefined>(undefined),
			statusMessage: new FormControl<string | null | undefined>(undefined),
			creationTime: new FormControl<Date | null | undefined>(undefined),
			lastStartTime: new FormControl<Date | null | undefined>(undefined),
			lastStopTime: new FormControl<Date | null | undefined>(undefined),
			lastModifiedTime: new FormControl<Date | null | undefined>(undefined),
			endTime: new FormControl<Date | null | undefined>(undefined),
			totalSteps: new FormControl<number | null | undefined>(undefined),
			completedSteps: new FormControl<number | null | undefined>(undefined),
			workflowBucket: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetWorkflowStepResponse {
		name?: string;
		stepGroupId?: string;
		workflowId?: string;
		stepId?: string;
		description?: string;
		stepActionType?: StepActionType;
		owner?: Owner;
		workflowStepAutomationConfiguration?: WorkflowStepAutomationConfiguration;
		stepTarget?: Array<string>;
		outputs?: Array<WorkflowStepOutput>;
		previous?: Array<string>;
		next?: Array<string>;
		status?: StepStatus;
		statusMessage?: string;
		scriptOutputLocation?: string;
		creationTime?: Date;
		lastStartTime?: Date;
		endTime?: Date;
		noOfSrvCompleted?: number | null;
		noOfSrvFailed?: number | null;
		totalNoOfSrv?: number | null;
	}
	export interface GetWorkflowStepResponseFormProperties {
		name: FormControl<string | null | undefined>,
		stepGroupId: FormControl<string | null | undefined>,
		workflowId: FormControl<string | null | undefined>,
		stepId: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,
		stepActionType: FormControl<StepActionType | null | undefined>,
		owner: FormControl<Owner | null | undefined>,
		status: FormControl<StepStatus | null | undefined>,
		statusMessage: FormControl<string | null | undefined>,
		scriptOutputLocation: FormControl<string | null | undefined>,
		creationTime: FormControl<Date | null | undefined>,
		lastStartTime: FormControl<Date | null | undefined>,
		endTime: FormControl<Date | null | undefined>,
		noOfSrvCompleted: FormControl<number | null | undefined>,
		noOfSrvFailed: FormControl<number | null | undefined>,
		totalNoOfSrv: FormControl<number | null | undefined>,
	}
	export function CreateGetWorkflowStepResponseFormGroup() {
		return new FormGroup<GetWorkflowStepResponseFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			stepGroupId: new FormControl<string | null | undefined>(undefined),
			workflowId: new FormControl<string | null | undefined>(undefined),
			stepId: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			stepActionType: new FormControl<StepActionType | null | undefined>(undefined),
			owner: new FormControl<Owner | null | undefined>(undefined),
			status: new FormControl<StepStatus | null | undefined>(undefined),
			statusMessage: new FormControl<string | null | undefined>(undefined),
			scriptOutputLocation: new FormControl<string | null | undefined>(undefined),
			creationTime: new FormControl<Date | null | undefined>(undefined),
			lastStartTime: new FormControl<Date | null | undefined>(undefined),
			endTime: new FormControl<Date | null | undefined>(undefined),
			noOfSrvCompleted: new FormControl<number | null | undefined>(undefined),
			noOfSrvFailed: new FormControl<number | null | undefined>(undefined),
			totalNoOfSrv: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum Owner { AWS_MANAGED = 'AWS_MANAGED', CUSTOM = 'CUSTOM' }


	/** The custom script to run tests on source or target environments. */
	export interface WorkflowStepAutomationConfiguration {
		scriptLocationS3Bucket?: string;
		scriptLocationS3Key?: PlatformScriptKey;
		command?: PlatformCommand;
		runEnvironment?: RunEnvironment;
		targetType?: TargetType;
	}

	/** The custom script to run tests on source or target environments. */
	export interface WorkflowStepAutomationConfigurationFormProperties {
		scriptLocationS3Bucket: FormControl<string | null | undefined>,
		runEnvironment: FormControl<RunEnvironment | null | undefined>,
		targetType: FormControl<TargetType | null | undefined>,
	}
	export function CreateWorkflowStepAutomationConfigurationFormGroup() {
		return new FormGroup<WorkflowStepAutomationConfigurationFormProperties>({
			scriptLocationS3Bucket: new FormControl<string | null | undefined>(undefined),
			runEnvironment: new FormControl<RunEnvironment | null | undefined>(undefined),
			targetType: new FormControl<TargetType | null | undefined>(undefined),
		});

	}

	export enum StepStatus { AWAITING_DEPENDENCIES = 'AWAITING_DEPENDENCIES', READY = 'READY', IN_PROGRESS = 'IN_PROGRESS', COMPLETED = 'COMPLETED', FAILED = 'FAILED', PAUSED = 'PAUSED', USER_ATTENTION_REQUIRED = 'USER_ATTENTION_REQUIRED' }

	export interface GetWorkflowStepGroupResponse {
		id?: string;
		workflowId?: string;
		name?: string;
		description?: string;
		status?: StepGroupStatus;
		owner?: Owner;
		creationTime?: Date;
		lastModifiedTime?: Date;
		endTime?: Date;
		tools?: Array<Tool>;
		previous?: Array<string>;
		next?: Array<string>;
	}
	export interface GetWorkflowStepGroupResponseFormProperties {
		id: FormControl<string | null | undefined>,
		workflowId: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,
		status: FormControl<StepGroupStatus | null | undefined>,
		owner: FormControl<Owner | null | undefined>,
		creationTime: FormControl<Date | null | undefined>,
		lastModifiedTime: FormControl<Date | null | undefined>,
		endTime: FormControl<Date | null | undefined>,
	}
	export function CreateGetWorkflowStepGroupResponseFormGroup() {
		return new FormGroup<GetWorkflowStepGroupResponseFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			workflowId: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<StepGroupStatus | null | undefined>(undefined),
			owner: new FormControl<Owner | null | undefined>(undefined),
			creationTime: new FormControl<Date | null | undefined>(undefined),
			lastModifiedTime: new FormControl<Date | null | undefined>(undefined),
			endTime: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface ListPluginsResponse {
		nextToken?: string;
		plugins?: Array<PluginSummary>;
	}
	export interface ListPluginsResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListPluginsResponseFormGroup() {
		return new FormGroup<ListPluginsResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The summary of the Migration Hub Orchestrator plugin. */
	export interface PluginSummary {
		pluginId?: string;
		hostname?: string;
		status?: PluginHealth;
		ipAddress?: string;
		version?: string;
		registeredTime?: string;
	}

	/** The summary of the Migration Hub Orchestrator plugin. */
	export interface PluginSummaryFormProperties {
		pluginId: FormControl<string | null | undefined>,
		hostname: FormControl<string | null | undefined>,
		status: FormControl<PluginHealth | null | undefined>,
		ipAddress: FormControl<string | null | undefined>,
		version: FormControl<string | null | undefined>,
		registeredTime: FormControl<string | null | undefined>,
	}
	export function CreatePluginSummaryFormGroup() {
		return new FormGroup<PluginSummaryFormProperties>({
			pluginId: new FormControl<string | null | undefined>(undefined),
			hostname: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<PluginHealth | null | undefined>(undefined),
			ipAddress: new FormControl<string | null | undefined>(undefined),
			version: new FormControl<string | null | undefined>(undefined),
			registeredTime: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum PluginHealth { HEALTHY = 'HEALTHY', UNHEALTHY = 'UNHEALTHY' }

	export interface ListTagsForResourceResponse {
		tags?: TagMap;
	}
	export interface ListTagsForResourceResponseFormProperties {
	}
	export function CreateListTagsForResourceResponseFormGroup() {
		return new FormGroup<ListTagsForResourceResponseFormProperties>({
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

	export interface ListTemplateStepGroupsResponse {
		nextToken?: string;

		/** Required */
		templateStepGroupSummary: Array<TemplateStepGroupSummary>;
	}
	export interface ListTemplateStepGroupsResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListTemplateStepGroupsResponseFormGroup() {
		return new FormGroup<ListTemplateStepGroupsResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The summary of the step group in the template. */
	export interface TemplateStepGroupSummary {
		id?: string;
		name?: string;
		previous?: Array<string>;
		next?: Array<string>;
	}

	/** The summary of the step group in the template. */
	export interface TemplateStepGroupSummaryFormProperties {
		id: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
	}
	export function CreateTemplateStepGroupSummaryFormGroup() {
		return new FormGroup<TemplateStepGroupSummaryFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListTemplateStepsResponse {
		nextToken?: string;
		templateStepSummaryList?: Array<TemplateStepSummary>;
	}
	export interface ListTemplateStepsResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListTemplateStepsResponseFormGroup() {
		return new FormGroup<ListTemplateStepsResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The summary of the step. */
	export interface TemplateStepSummary {
		id?: string;
		stepGroupId?: string;
		templateId?: string;
		name?: string;
		stepActionType?: StepActionType;
		targetType?: TargetType;
		owner?: Owner;
		previous?: Array<string>;
		next?: Array<string>;
	}

	/** The summary of the step. */
	export interface TemplateStepSummaryFormProperties {
		id: FormControl<string | null | undefined>,
		stepGroupId: FormControl<string | null | undefined>,
		templateId: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		stepActionType: FormControl<StepActionType | null | undefined>,
		targetType: FormControl<TargetType | null | undefined>,
		owner: FormControl<Owner | null | undefined>,
	}
	export function CreateTemplateStepSummaryFormGroup() {
		return new FormGroup<TemplateStepSummaryFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			stepGroupId: new FormControl<string | null | undefined>(undefined),
			templateId: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			stepActionType: new FormControl<StepActionType | null | undefined>(undefined),
			targetType: new FormControl<TargetType | null | undefined>(undefined),
			owner: new FormControl<Owner | null | undefined>(undefined),
		});

	}

	export interface ListMigrationWorkflowTemplatesResponse {
		nextToken?: string;

		/** Required */
		templateSummary: Array<TemplateSummary>;
	}
	export interface ListMigrationWorkflowTemplatesResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListMigrationWorkflowTemplatesResponseFormGroup() {
		return new FormGroup<ListMigrationWorkflowTemplatesResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The summary of the template. */
	export interface TemplateSummary {
		id?: string;
		name?: string;
		arn?: string;
		description?: string;
	}

	/** The summary of the template. */
	export interface TemplateSummaryFormProperties {
		id: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		arn: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,
	}
	export function CreateTemplateSummaryFormGroup() {
		return new FormGroup<TemplateSummaryFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			arn: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListWorkflowStepGroupsResponse {
		nextToken?: string;

		/** Required */
		workflowStepGroupsSummary: Array<WorkflowStepGroupSummary>;
	}
	export interface ListWorkflowStepGroupsResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListWorkflowStepGroupsResponseFormGroup() {
		return new FormGroup<ListWorkflowStepGroupsResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The summary of a step group in a workflow. */
	export interface WorkflowStepGroupSummary {
		id?: string;
		name?: string;
		owner?: Owner;
		status?: StepGroupStatus;
		previous?: Array<string>;
		next?: Array<string>;
	}

	/** The summary of a step group in a workflow. */
	export interface WorkflowStepGroupSummaryFormProperties {
		id: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		owner: FormControl<Owner | null | undefined>,
		status: FormControl<StepGroupStatus | null | undefined>,
	}
	export function CreateWorkflowStepGroupSummaryFormGroup() {
		return new FormGroup<WorkflowStepGroupSummaryFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			owner: new FormControl<Owner | null | undefined>(undefined),
			status: new FormControl<StepGroupStatus | null | undefined>(undefined),
		});

	}

	export interface ListWorkflowStepsResponse {
		nextToken?: string;

		/** Required */
		workflowStepsSummary: Array<WorkflowStepSummary>;
	}
	export interface ListWorkflowStepsResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListWorkflowStepsResponseFormGroup() {
		return new FormGroup<ListWorkflowStepsResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The summary of the step in a migration workflow. */
	export interface WorkflowStepSummary {
		stepId?: string;
		name?: string;
		stepActionType?: StepActionType;
		owner?: Owner;
		previous?: Array<string>;
		next?: Array<string>;
		status?: StepStatus;
		statusMessage?: string;
		noOfSrvCompleted?: number | null;
		noOfSrvFailed?: number | null;
		totalNoOfSrv?: number | null;
		description?: string;
		scriptLocation?: string;
	}

	/** The summary of the step in a migration workflow. */
	export interface WorkflowStepSummaryFormProperties {
		stepId: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		stepActionType: FormControl<StepActionType | null | undefined>,
		owner: FormControl<Owner | null | undefined>,
		status: FormControl<StepStatus | null | undefined>,
		statusMessage: FormControl<string | null | undefined>,
		noOfSrvCompleted: FormControl<number | null | undefined>,
		noOfSrvFailed: FormControl<number | null | undefined>,
		totalNoOfSrv: FormControl<number | null | undefined>,
		description: FormControl<string | null | undefined>,
		scriptLocation: FormControl<string | null | undefined>,
	}
	export function CreateWorkflowStepSummaryFormGroup() {
		return new FormGroup<WorkflowStepSummaryFormProperties>({
			stepId: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			stepActionType: new FormControl<StepActionType | null | undefined>(undefined),
			owner: new FormControl<Owner | null | undefined>(undefined),
			status: new FormControl<StepStatus | null | undefined>(undefined),
			statusMessage: new FormControl<string | null | undefined>(undefined),
			noOfSrvCompleted: new FormControl<number | null | undefined>(undefined),
			noOfSrvFailed: new FormControl<number | null | undefined>(undefined),
			totalNoOfSrv: new FormControl<number | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			scriptLocation: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListMigrationWorkflowsResponse {
		nextToken?: string;

		/** Required */
		migrationWorkflowSummary: Array<MigrationWorkflowSummary>;
	}
	export interface ListMigrationWorkflowsResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListMigrationWorkflowsResponseFormGroup() {
		return new FormGroup<ListMigrationWorkflowsResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The summary of a migration workflow. */
	export interface MigrationWorkflowSummary {
		id?: string;
		name?: string;
		templateId?: string;
		adsApplicationConfigurationName?: string;
		status?: MigrationWorkflowStatusEnum;
		creationTime?: Date;
		endTime?: Date;
		statusMessage?: string;
		completedSteps?: number | null;
		totalSteps?: number | null;
	}

	/** The summary of a migration workflow. */
	export interface MigrationWorkflowSummaryFormProperties {
		id: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		templateId: FormControl<string | null | undefined>,
		adsApplicationConfigurationName: FormControl<string | null | undefined>,
		status: FormControl<MigrationWorkflowStatusEnum | null | undefined>,
		creationTime: FormControl<Date | null | undefined>,
		endTime: FormControl<Date | null | undefined>,
		statusMessage: FormControl<string | null | undefined>,
		completedSteps: FormControl<number | null | undefined>,
		totalSteps: FormControl<number | null | undefined>,
	}
	export function CreateMigrationWorkflowSummaryFormGroup() {
		return new FormGroup<MigrationWorkflowSummaryFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			templateId: new FormControl<string | null | undefined>(undefined),
			adsApplicationConfigurationName: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<MigrationWorkflowStatusEnum | null | undefined>(undefined),
			creationTime: new FormControl<Date | null | undefined>(undefined),
			endTime: new FormControl<Date | null | undefined>(undefined),
			statusMessage: new FormControl<string | null | undefined>(undefined),
			completedSteps: new FormControl<number | null | undefined>(undefined),
			totalSteps: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface RetryWorkflowStepResponse {
		stepGroupId?: string;
		workflowId?: string;
		id?: string;
		status?: StepStatus;
	}
	export interface RetryWorkflowStepResponseFormProperties {
		stepGroupId: FormControl<string | null | undefined>,
		workflowId: FormControl<string | null | undefined>,
		id: FormControl<string | null | undefined>,
		status: FormControl<StepStatus | null | undefined>,
	}
	export function CreateRetryWorkflowStepResponseFormGroup() {
		return new FormGroup<RetryWorkflowStepResponseFormProperties>({
			stepGroupId: new FormControl<string | null | undefined>(undefined),
			workflowId: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<StepStatus | null | undefined>(undefined),
		});

	}

	export interface StartMigrationWorkflowResponse {
		id?: string;
		arn?: string;
		status?: MigrationWorkflowStatusEnum;
		statusMessage?: string;
		lastStartTime?: Date;
	}
	export interface StartMigrationWorkflowResponseFormProperties {
		id: FormControl<string | null | undefined>,
		arn: FormControl<string | null | undefined>,
		status: FormControl<MigrationWorkflowStatusEnum | null | undefined>,
		statusMessage: FormControl<string | null | undefined>,
		lastStartTime: FormControl<Date | null | undefined>,
	}
	export function CreateStartMigrationWorkflowResponseFormGroup() {
		return new FormGroup<StartMigrationWorkflowResponseFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			arn: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<MigrationWorkflowStatusEnum | null | undefined>(undefined),
			statusMessage: new FormControl<string | null | undefined>(undefined),
			lastStartTime: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface StopMigrationWorkflowResponse {
		id?: string;
		arn?: string;
		status?: MigrationWorkflowStatusEnum;
		statusMessage?: string;
		lastStopTime?: Date;
	}
	export interface StopMigrationWorkflowResponseFormProperties {
		id: FormControl<string | null | undefined>,
		arn: FormControl<string | null | undefined>,
		status: FormControl<MigrationWorkflowStatusEnum | null | undefined>,
		statusMessage: FormControl<string | null | undefined>,
		lastStopTime: FormControl<Date | null | undefined>,
	}
	export function CreateStopMigrationWorkflowResponseFormGroup() {
		return new FormGroup<StopMigrationWorkflowResponseFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			arn: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<MigrationWorkflowStatusEnum | null | undefined>(undefined),
			statusMessage: new FormControl<string | null | undefined>(undefined),
			lastStopTime: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface TagResourceResponse {
	}
	export interface TagResourceResponseFormProperties {
	}
	export function CreateTagResourceResponseFormGroup() {
		return new FormGroup<TagResourceResponseFormProperties>({
		});

	}

	export interface UntagResourceResponse {
	}
	export interface UntagResourceResponseFormProperties {
	}
	export function CreateUntagResourceResponseFormGroup() {
		return new FormGroup<UntagResourceResponseFormProperties>({
		});

	}

	export interface UpdateMigrationWorkflowResponse {
		id?: string;
		arn?: string;
		name?: string;
		description?: string;
		templateId?: string;
		adsApplicationConfigurationId?: string;
		workflowInputs?: StepInputParameters;
		stepTargets?: Array<string>;
		status?: MigrationWorkflowStatusEnum;
		creationTime?: Date;
		lastModifiedTime?: Date;
		tags?: StringMap;
	}
	export interface UpdateMigrationWorkflowResponseFormProperties {
		id: FormControl<string | null | undefined>,
		arn: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,
		templateId: FormControl<string | null | undefined>,
		adsApplicationConfigurationId: FormControl<string | null | undefined>,
		status: FormControl<MigrationWorkflowStatusEnum | null | undefined>,
		creationTime: FormControl<Date | null | undefined>,
		lastModifiedTime: FormControl<Date | null | undefined>,
	}
	export function CreateUpdateMigrationWorkflowResponseFormGroup() {
		return new FormGroup<UpdateMigrationWorkflowResponseFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			arn: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			templateId: new FormControl<string | null | undefined>(undefined),
			adsApplicationConfigurationId: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<MigrationWorkflowStatusEnum | null | undefined>(undefined),
			creationTime: new FormControl<Date | null | undefined>(undefined),
			lastModifiedTime: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface UpdateWorkflowStepResponse {
		id?: string;
		stepGroupId?: string;
		workflowId?: string;
		name?: string;
	}
	export interface UpdateWorkflowStepResponseFormProperties {
		id: FormControl<string | null | undefined>,
		stepGroupId: FormControl<string | null | undefined>,
		workflowId: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
	}
	export function CreateUpdateWorkflowStepResponseFormGroup() {
		return new FormGroup<UpdateWorkflowStepResponseFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			stepGroupId: new FormControl<string | null | undefined>(undefined),
			workflowId: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateWorkflowStepGroupResponse {
		workflowId?: string;
		name?: string;
		id?: string;
		description?: string;
		tools?: Array<Tool>;
		next?: Array<string>;
		previous?: Array<string>;
		lastModifiedTime?: Date;
	}
	export interface UpdateWorkflowStepGroupResponseFormProperties {
		workflowId: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		id: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,
		lastModifiedTime: FormControl<Date | null | undefined>,
	}
	export function CreateUpdateWorkflowStepGroupResponseFormGroup() {
		return new FormGroup<UpdateWorkflowStepGroupResponseFormProperties>({
			workflowId: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			lastModifiedTime: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface CreateMigrationWorkflowRequest {

		/** Required */
		name: string;
		description?: string;

		/** Required */
		templateId: string;

		/** Required */
		applicationConfigurationId: string;

		/** Required */
		inputParameters: StepInputParameters;
		stepTargets?: Array<string>;
		tags?: StringMap;
	}
	export interface CreateMigrationWorkflowRequestFormProperties {

		/** Required */
		name: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,

		/** Required */
		templateId: FormControl<string | null | undefined>,

		/** Required */
		applicationConfigurationId: FormControl<string | null | undefined>,
	}
	export function CreateCreateMigrationWorkflowRequestFormGroup() {
		return new FormGroup<CreateMigrationWorkflowRequestFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			description: new FormControl<string | null | undefined>(undefined),
			templateId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			applicationConfigurationId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateWorkflowStepGroupRequest {

		/** Required */
		workflowId: string;

		/** Required */
		name: string;
		description?: string;
		next?: Array<string>;
		previous?: Array<string>;
	}
	export interface CreateWorkflowStepGroupRequestFormProperties {

		/** Required */
		workflowId: FormControl<string | null | undefined>,

		/** Required */
		name: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,
	}
	export function CreateCreateWorkflowStepGroupRequestFormGroup() {
		return new FormGroup<CreateWorkflowStepGroupRequestFormProperties>({
			workflowId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			description: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateWorkflowStepRequest {

		/** Required */
		name: string;

		/** Required */
		stepGroupId: string;

		/** Required */
		workflowId: string;

		/** Required */
		stepActionType: StepActionType;
		description?: string;
		workflowStepAutomationConfiguration?: WorkflowStepAutomationConfiguration;
		stepTarget?: Array<string>;
		outputs?: Array<WorkflowStepOutput>;
		previous?: Array<string>;
		next?: Array<string>;
	}
	export interface CreateWorkflowStepRequestFormProperties {

		/** Required */
		name: FormControl<string | null | undefined>,

		/** Required */
		stepGroupId: FormControl<string | null | undefined>,

		/** Required */
		workflowId: FormControl<string | null | undefined>,

		/** Required */
		stepActionType: FormControl<StepActionType | null | undefined>,
		description: FormControl<string | null | undefined>,
	}
	export function CreateCreateWorkflowStepRequestFormGroup() {
		return new FormGroup<CreateWorkflowStepRequestFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			stepGroupId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			workflowId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			stepActionType: new FormControl<StepActionType | null | undefined>(undefined, [Validators.required]),
			description: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DeleteMigrationWorkflowRequest {
	}
	export interface DeleteMigrationWorkflowRequestFormProperties {
	}
	export function CreateDeleteMigrationWorkflowRequestFormGroup() {
		return new FormGroup<DeleteMigrationWorkflowRequestFormProperties>({
		});

	}

	export interface DeleteWorkflowStepGroupRequest {
	}
	export interface DeleteWorkflowStepGroupRequestFormProperties {
	}
	export function CreateDeleteWorkflowStepGroupRequestFormGroup() {
		return new FormGroup<DeleteWorkflowStepGroupRequestFormProperties>({
		});

	}

	export interface DeleteWorkflowStepRequest {
	}
	export interface DeleteWorkflowStepRequestFormProperties {
	}
	export function CreateDeleteWorkflowStepRequestFormGroup() {
		return new FormGroup<DeleteWorkflowStepRequestFormProperties>({
		});

	}

	export interface GetMigrationWorkflowRequest {
	}
	export interface GetMigrationWorkflowRequestFormProperties {
	}
	export function CreateGetMigrationWorkflowRequestFormGroup() {
		return new FormGroup<GetMigrationWorkflowRequestFormProperties>({
		});

	}

	export interface GetMigrationWorkflowTemplateRequest {
	}
	export interface GetMigrationWorkflowTemplateRequestFormProperties {
	}
	export function CreateGetMigrationWorkflowTemplateRequestFormGroup() {
		return new FormGroup<GetMigrationWorkflowTemplateRequestFormProperties>({
		});

	}

	export interface GetTemplateStepGroupRequest {
	}
	export interface GetTemplateStepGroupRequestFormProperties {
	}
	export function CreateGetTemplateStepGroupRequestFormGroup() {
		return new FormGroup<GetTemplateStepGroupRequestFormProperties>({
		});

	}

	export interface GetTemplateStepRequest {
	}
	export interface GetTemplateStepRequestFormProperties {
	}
	export function CreateGetTemplateStepRequestFormGroup() {
		return new FormGroup<GetTemplateStepRequestFormProperties>({
		});

	}

	export interface GetWorkflowStepGroupRequest {
	}
	export interface GetWorkflowStepGroupRequestFormProperties {
	}
	export function CreateGetWorkflowStepGroupRequestFormGroup() {
		return new FormGroup<GetWorkflowStepGroupRequestFormProperties>({
		});

	}

	export interface GetWorkflowStepRequest {
	}
	export interface GetWorkflowStepRequestFormProperties {
	}
	export function CreateGetWorkflowStepRequestFormGroup() {
		return new FormGroup<GetWorkflowStepRequestFormProperties>({
		});

	}

	export interface ListMigrationWorkflowTemplatesRequest {
	}
	export interface ListMigrationWorkflowTemplatesRequestFormProperties {
	}
	export function CreateListMigrationWorkflowTemplatesRequestFormGroup() {
		return new FormGroup<ListMigrationWorkflowTemplatesRequestFormProperties>({
		});

	}

	export interface ListMigrationWorkflowsRequest {
	}
	export interface ListMigrationWorkflowsRequestFormProperties {
	}
	export function CreateListMigrationWorkflowsRequestFormGroup() {
		return new FormGroup<ListMigrationWorkflowsRequestFormProperties>({
		});

	}

	export interface ListPluginsRequest {
	}
	export interface ListPluginsRequestFormProperties {
	}
	export function CreateListPluginsRequestFormGroup() {
		return new FormGroup<ListPluginsRequestFormProperties>({
		});

	}

	export interface ListTagsForResourceRequest {
	}
	export interface ListTagsForResourceRequestFormProperties {
	}
	export function CreateListTagsForResourceRequestFormGroup() {
		return new FormGroup<ListTagsForResourceRequestFormProperties>({
		});

	}

	export interface ListTemplateStepGroupsRequest {
	}
	export interface ListTemplateStepGroupsRequestFormProperties {
	}
	export function CreateListTemplateStepGroupsRequestFormGroup() {
		return new FormGroup<ListTemplateStepGroupsRequestFormProperties>({
		});

	}

	export interface ListTemplateStepsRequest {
	}
	export interface ListTemplateStepsRequestFormProperties {
	}
	export function CreateListTemplateStepsRequestFormGroup() {
		return new FormGroup<ListTemplateStepsRequestFormProperties>({
		});

	}

	export interface ListWorkflowStepGroupsRequest {
	}
	export interface ListWorkflowStepGroupsRequestFormProperties {
	}
	export function CreateListWorkflowStepGroupsRequestFormGroup() {
		return new FormGroup<ListWorkflowStepGroupsRequestFormProperties>({
		});

	}

	export interface ListWorkflowStepsRequest {
	}
	export interface ListWorkflowStepsRequestFormProperties {
	}
	export function CreateListWorkflowStepsRequestFormGroup() {
		return new FormGroup<ListWorkflowStepsRequestFormProperties>({
		});

	}

	export interface RetryWorkflowStepRequest {
	}
	export interface RetryWorkflowStepRequestFormProperties {
	}
	export function CreateRetryWorkflowStepRequestFormGroup() {
		return new FormGroup<RetryWorkflowStepRequestFormProperties>({
		});

	}

	export interface StartMigrationWorkflowRequest {
	}
	export interface StartMigrationWorkflowRequestFormProperties {
	}
	export function CreateStartMigrationWorkflowRequestFormGroup() {
		return new FormGroup<StartMigrationWorkflowRequestFormProperties>({
		});

	}

	export interface StopMigrationWorkflowRequest {
	}
	export interface StopMigrationWorkflowRequestFormProperties {
	}
	export function CreateStopMigrationWorkflowRequestFormGroup() {
		return new FormGroup<StopMigrationWorkflowRequestFormProperties>({
		});

	}

	export interface TagResourceRequest {

		/** Required */
		tags: TagMap;
	}
	export interface TagResourceRequestFormProperties {
	}
	export function CreateTagResourceRequestFormGroup() {
		return new FormGroup<TagResourceRequestFormProperties>({
		});

	}

	export interface UntagResourceRequest {
	}
	export interface UntagResourceRequestFormProperties {
	}
	export function CreateUntagResourceRequestFormGroup() {
		return new FormGroup<UntagResourceRequestFormProperties>({
		});

	}

	export interface UpdateMigrationWorkflowRequest {
		name?: string;
		description?: string;
		inputParameters?: StepInputParameters;
		stepTargets?: Array<string>;
	}
	export interface UpdateMigrationWorkflowRequestFormProperties {
		name: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,
	}
	export function CreateUpdateMigrationWorkflowRequestFormGroup() {
		return new FormGroup<UpdateMigrationWorkflowRequestFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateWorkflowStepGroupRequest {
		name?: string;
		description?: string;
		next?: Array<string>;
		previous?: Array<string>;
	}
	export interface UpdateWorkflowStepGroupRequestFormProperties {
		name: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,
	}
	export function CreateUpdateWorkflowStepGroupRequestFormGroup() {
		return new FormGroup<UpdateWorkflowStepGroupRequestFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateWorkflowStepRequest {

		/** Required */
		stepGroupId: string;

		/** Required */
		workflowId: string;
		name?: string;
		description?: string;
		stepActionType?: StepActionType;
		workflowStepAutomationConfiguration?: WorkflowStepAutomationConfiguration;
		stepTarget?: Array<string>;
		outputs?: Array<WorkflowStepOutput>;
		previous?: Array<string>;
		next?: Array<string>;
		status?: StepStatus;
	}
	export interface UpdateWorkflowStepRequestFormProperties {

		/** Required */
		stepGroupId: FormControl<string | null | undefined>,

		/** Required */
		workflowId: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,
		stepActionType: FormControl<StepActionType | null | undefined>,
		status: FormControl<StepStatus | null | undefined>,
	}
	export function CreateUpdateWorkflowStepRequestFormGroup() {
		return new FormGroup<UpdateWorkflowStepRequestFormProperties>({
			stepGroupId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			workflowId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			stepActionType: new FormControl<StepActionType | null | undefined>(undefined),
			status: new FormControl<StepStatus | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Create a workflow to orchestrate your migrations.
		 * Post migrationworkflow/
		 * @return {CreateMigrationWorkflowResponse} Success
		 */
		CreateWorkflow(requestBody: CreateWorkflowPostBody): Observable<CreateMigrationWorkflowResponse> {
			return this.http.post<CreateMigrationWorkflowResponse>(this.baseUri + 'migrationworkflow/', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Create a step in the migration workflow.
		 * Post workflowstep
		 * @return {CreateWorkflowStepResponse} Success
		 */
		CreateWorkflowStep(requestBody: CreateWorkflowStepPostBody): Observable<CreateWorkflowStepResponse> {
			return this.http.post<CreateWorkflowStepResponse>(this.baseUri + 'workflowstep', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Create a step group in a migration workflow.
		 * Post workflowstepgroups
		 * @return {CreateWorkflowStepGroupResponse} Success
		 */
		CreateWorkflowStepGroup(requestBody: CreateWorkflowStepGroupPostBody): Observable<CreateWorkflowStepGroupResponse> {
			return this.http.post<CreateWorkflowStepGroupResponse>(this.baseUri + 'workflowstepgroups', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Delete a migration workflow. You must pause a running workflow in Migration Hub Orchestrator console to delete it.
		 * Delete migrationworkflow/{id}
		 * @param {string} id The ID of the migration workflow you want to delete.
		 * @return {void} 
		 */
		DeleteWorkflow(id: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'migrationworkflow/' + (id == null ? '' : encodeURIComponent(id)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get migration workflow.
		 * Get migrationworkflow/{id}
		 * @param {string} id The ID of the migration workflow.
		 * @return {GetMigrationWorkflowResponse} Success
		 */
		GetWorkflow(id: string): Observable<GetMigrationWorkflowResponse> {
			return this.http.get<GetMigrationWorkflowResponse>(this.baseUri + 'migrationworkflow/' + (id == null ? '' : encodeURIComponent(id)), {});
		}

		/**
		 * Update a migration workflow.
		 * Post migrationworkflow/{id}
		 * @param {string} id The ID of the migration workflow.
		 * @return {UpdateMigrationWorkflowResponse} Success
		 */
		UpdateWorkflow(id: string, requestBody: UpdateWorkflowPostBody): Observable<UpdateMigrationWorkflowResponse> {
			return this.http.post<UpdateMigrationWorkflowResponse>(this.baseUri + 'migrationworkflow/' + (id == null ? '' : encodeURIComponent(id)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Delete a step in a migration workflow. Pause the workflow to delete a running step.
		 * Delete workflowstep/{id}#stepGroupId&workflowId
		 * @param {string} id The ID of the step you want to delete.
		 * @param {string} stepGroupId The ID of the step group that contains the step you want to delete.
		 * @param {string} workflowId The ID of the migration workflow.
		 * @return {DeleteWorkflowStepResponse} Success
		 */
		DeleteWorkflowStep(id: string, stepGroupId: string, workflowId: string): Observable<DeleteWorkflowStepResponse> {
			return this.http.delete<DeleteWorkflowStepResponse>(this.baseUri + 'workflowstep/' + (id == null ? '' : encodeURIComponent(id)) + '#stepGroupId&workflowId&stepGroupId=' + (stepGroupId == null ? '' : encodeURIComponent(stepGroupId)) + '&workflowId=' + (workflowId == null ? '' : encodeURIComponent(workflowId)), {});
		}

		/**
		 * Delete a step group in a migration workflow.
		 * Delete workflowstepgroup/{id}#workflowId
		 * @param {string} workflowId The ID of the migration workflow.
		 * @param {string} id The ID of the step group you want to delete.
		 * @return {void} 
		 */
		DeleteWorkflowStepGroup(workflowId: string, id: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'workflowstepgroup/' + (id == null ? '' : encodeURIComponent(id)) + '#workflowId?workflowId=' + (workflowId == null ? '' : encodeURIComponent(workflowId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get the step group of a migration workflow.
		 * Get workflowstepgroup/{id}#workflowId
		 * @param {string} id The ID of the step group.
		 * @param {string} workflowId The ID of the migration workflow.
		 * @return {GetWorkflowStepGroupResponse} Success
		 */
		GetWorkflowStepGroup(id: string, workflowId: string): Observable<GetWorkflowStepGroupResponse> {
			return this.http.get<GetWorkflowStepGroupResponse>(this.baseUri + 'workflowstepgroup/' + (id == null ? '' : encodeURIComponent(id)) + '#workflowId&workflowId=' + (workflowId == null ? '' : encodeURIComponent(workflowId)), {});
		}

		/**
		 * Update the step group in a migration workflow.
		 * Post workflowstepgroup/{id}#workflowId
		 * @param {string} workflowId The ID of the migration workflow.
		 * @param {string} id The ID of the step group.
		 * @return {void} 
		 */
		UpdateWorkflowStepGroup(workflowId: string, id: string, requestBody: UpdateWorkflowStepGroupPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'workflowstepgroup/' + (id == null ? '' : encodeURIComponent(id)) + '#workflowId?workflowId=' + (workflowId == null ? '' : encodeURIComponent(workflowId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get the template you want to use for creating a migration workflow.
		 * Get migrationworkflowtemplate/{id}
		 * @param {string} id The ID of the template.
		 * @return {GetMigrationWorkflowTemplateResponse} Success
		 */
		GetTemplate(id: string): Observable<GetMigrationWorkflowTemplateResponse> {
			return this.http.get<GetMigrationWorkflowTemplateResponse>(this.baseUri + 'migrationworkflowtemplate/' + (id == null ? '' : encodeURIComponent(id)), {});
		}

		/**
		 * Get a specific step in a template.
		 * Get templatestep/{id}#templateId&stepGroupId
		 * @param {string} id The ID of the step.
		 * @param {string} templateId The ID of the template.
		 * @param {string} stepGroupId The ID of the step group.
		 * @return {GetTemplateStepResponse} Success
		 */
		GetTemplateStep(id: string, templateId: string, stepGroupId: string): Observable<GetTemplateStepResponse> {
			return this.http.get<GetTemplateStepResponse>(this.baseUri + 'templatestep/' + (id == null ? '' : encodeURIComponent(id)) + '#templateId&stepGroupId&templateId=' + (templateId == null ? '' : encodeURIComponent(templateId)) + '&stepGroupId=' + (stepGroupId == null ? '' : encodeURIComponent(stepGroupId)), {});
		}

		/**
		 * Get a step group in a template.
		 * Get templates/{templateId}/stepgroups/{id}
		 * @param {string} templateId The ID of the template.
		 * @param {string} id The ID of the step group.
		 * @return {GetTemplateStepGroupResponse} Success
		 */
		GetTemplateStepGroup(templateId: string, id: string): Observable<GetTemplateStepGroupResponse> {
			return this.http.get<GetTemplateStepGroupResponse>(this.baseUri + 'templates/' + (templateId == null ? '' : encodeURIComponent(templateId)) + '/stepgroups/' + (id == null ? '' : encodeURIComponent(id)), {});
		}

		/**
		 * Get a step in the migration workflow.
		 * Get workflowstep/{id}#workflowId&stepGroupId
		 * @param {string} workflowId The ID of the migration workflow.
		 * @param {string} stepGroupId desThe ID of the step group.
		 * @param {string} id The ID of the step.
		 * @return {GetWorkflowStepResponse} Success
		 */
		GetWorkflowStep(workflowId: string, stepGroupId: string, id: string): Observable<GetWorkflowStepResponse> {
			return this.http.get<GetWorkflowStepResponse>(this.baseUri + 'workflowstep/' + (id == null ? '' : encodeURIComponent(id)) + '#workflowId&stepGroupId?workflowId=' + (workflowId == null ? '' : encodeURIComponent(workflowId)) + '&stepGroupId=' + (stepGroupId == null ? '' : encodeURIComponent(stepGroupId)), {});
		}

		/**
		 * List AWS Migration Hub Orchestrator plugins.
		 * Get plugins
		 * @param {number} maxResults The maximum number of plugins that can be returned.
		 * @param {string} nextToken The pagination token.
		 * @return {ListPluginsResponse} Success
		 */
		ListPlugins(maxResults: number | null | undefined, nextToken: string | null | undefined): Observable<ListPluginsResponse> {
			return this.http.get<ListPluginsResponse>(this.baseUri + 'plugins?maxResults=' + maxResults + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), {});
		}

		/**
		 * List the tags added to a resource.
		 * Get tags/{resourceArn}
		 * @param {string} resourceArn The Amazon Resource Name (ARN) of the resource.
		 * @return {ListTagsForResourceResponse} Success
		 */
		ListTagsForResource(resourceArn: string): Observable<ListTagsForResourceResponse> {
			return this.http.get<ListTagsForResourceResponse>(this.baseUri + 'tags/' + (resourceArn == null ? '' : encodeURIComponent(resourceArn)), {});
		}

		/**
		 * Tag a resource by specifying its Amazon Resource Name (ARN).
		 * Post tags/{resourceArn}
		 * @param {string} resourceArn The Amazon Resource Name (ARN) of the resource to which you want to add tags.
		 * @return {TagResourceResponse} Success
		 */
		TagResource(resourceArn: string, requestBody: TagResourcePostBody): Observable<TagResourceResponse> {
			return this.http.post<TagResourceResponse>(this.baseUri + 'tags/' + (resourceArn == null ? '' : encodeURIComponent(resourceArn)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * List the step groups in a template.
		 * Get templatestepgroups/{templateId}
		 * @param {number} maxResults The maximum number of results that can be returned.
		 * @param {string} nextToken The pagination token.
		 * @param {string} templateId The ID of the template.
		 * @return {ListTemplateStepGroupsResponse} Success
		 */
		ListTemplateStepGroups(maxResults: number | null | undefined, nextToken: string | null | undefined, templateId: string): Observable<ListTemplateStepGroupsResponse> {
			return this.http.get<ListTemplateStepGroupsResponse>(this.baseUri + 'templatestepgroups/' + (templateId == null ? '' : encodeURIComponent(templateId)) + '?maxResults=' + maxResults + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), {});
		}

		/**
		 * List the steps in a template.
		 * Get templatesteps#templateId&stepGroupId
		 * @param {number} maxResults The maximum number of results that can be returned.
		 * @param {string} nextToken The pagination token.
		 * @param {string} templateId The ID of the template.
		 * @param {string} stepGroupId The ID of the step group.
		 * @return {ListTemplateStepsResponse} Success
		 */
		ListTemplateSteps(maxResults: number | null | undefined, nextToken: string | null | undefined, templateId: string, stepGroupId: string): Observable<ListTemplateStepsResponse> {
			return this.http.get<ListTemplateStepsResponse>(this.baseUri + 'templatesteps#templateId&stepGroupId?maxResults=' + maxResults + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&templateId=' + (templateId == null ? '' : encodeURIComponent(templateId)) + '&stepGroupId=' + (stepGroupId == null ? '' : encodeURIComponent(stepGroupId)), {});
		}

		/**
		 * List the templates available in Migration Hub Orchestrator to create a migration workflow.
		 * Get migrationworkflowtemplates
		 * @param {number} maxResults The maximum number of results that can be returned.
		 * @param {string} nextToken The pagination token.
		 * @param {string} name The name of the template.
		 * @return {ListMigrationWorkflowTemplatesResponse} Success
		 */
		ListTemplates(maxResults: number | null | undefined, nextToken: string | null | undefined, name: string | null | undefined): Observable<ListMigrationWorkflowTemplatesResponse> {
			return this.http.get<ListMigrationWorkflowTemplatesResponse>(this.baseUri + 'migrationworkflowtemplates?maxResults=' + maxResults + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&name=' + (name == null ? '' : encodeURIComponent(name)), {});
		}

		/**
		 * List the step groups in a migration workflow.
		 * Get workflowstepgroups#workflowId
		 * @param {string} nextToken The pagination token.
		 * @param {number} maxResults The maximum number of results that can be returned.
		 * @param {string} workflowId The ID of the migration workflow.
		 * @return {ListWorkflowStepGroupsResponse} Success
		 */
		ListWorkflowStepGroups(nextToken: string | null | undefined, maxResults: number | null | undefined, workflowId: string): Observable<ListWorkflowStepGroupsResponse> {
			return this.http.get<ListWorkflowStepGroupsResponse>(this.baseUri + 'workflowstepgroups#workflowId?nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&maxResults=' + maxResults + '&workflowId=' + (workflowId == null ? '' : encodeURIComponent(workflowId)), {});
		}

		/**
		 * List the steps in a workflow.
		 * Get workflow/{workflowId}/workflowstepgroups/{stepGroupId}/workflowsteps
		 * @param {string} nextToken The pagination token.
		 * @param {number} maxResults The maximum number of results that can be returned.
		 * @param {string} workflowId The ID of the migration workflow.
		 * @param {string} stepGroupId The ID of the step group.
		 * @return {ListWorkflowStepsResponse} Success
		 */
		ListWorkflowSteps(nextToken: string | null | undefined, maxResults: number | null | undefined, workflowId: string, stepGroupId: string): Observable<ListWorkflowStepsResponse> {
			return this.http.get<ListWorkflowStepsResponse>(this.baseUri + 'workflow/' + (workflowId == null ? '' : encodeURIComponent(workflowId)) + '/workflowstepgroups/' + (stepGroupId == null ? '' : encodeURIComponent(stepGroupId)) + '/workflowsteps?nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&maxResults=' + maxResults, {});
		}

		/**
		 * List the migration workflows.
		 * Get migrationworkflows
		 * @param {number} maxResults The maximum number of results that can be returned.
		 * @param {string} nextToken The pagination token.
		 * @param {string} templateId The ID of the template.
		 * @param {string} adsApplicationConfigurationName The name of the application configured in Application Discovery Service.
		 * @param {MigrationWorkflowStatusEnum} status The status of the migration workflow.
		 * @param {string} name The name of the migration workflow.
		 * @return {ListMigrationWorkflowsResponse} Success
		 */
		ListWorkflows(maxResults: number | null | undefined, nextToken: string | null | undefined, templateId: string | null | undefined, adsApplicationConfigurationName: string | null | undefined, status: MigrationWorkflowStatusEnum | null | undefined, name: string | null | undefined): Observable<ListMigrationWorkflowsResponse> {
			return this.http.get<ListMigrationWorkflowsResponse>(this.baseUri + 'migrationworkflows?maxResults=' + maxResults + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&templateId=' + (templateId == null ? '' : encodeURIComponent(templateId)) + '&adsApplicationConfigurationName=' + (adsApplicationConfigurationName == null ? '' : encodeURIComponent(adsApplicationConfigurationName)) + '&status=' + status + '&name=' + (name == null ? '' : encodeURIComponent(name)), {});
		}

		/**
		 * Retry a failed step in a migration workflow.
		 * Post retryworkflowstep/{id}#workflowId&stepGroupId
		 * @param {string} workflowId The ID of the migration workflow.
		 * @param {string} stepGroupId The ID of the step group.
		 * @param {string} id The ID of the step.
		 * @return {RetryWorkflowStepResponse} Success
		 */
		RetryWorkflowStep(workflowId: string, stepGroupId: string, id: string): Observable<RetryWorkflowStepResponse> {
			return this.http.post<RetryWorkflowStepResponse>(this.baseUri + 'retryworkflowstep/' + (id == null ? '' : encodeURIComponent(id)) + '#workflowId&stepGroupId?workflowId=' + (workflowId == null ? '' : encodeURIComponent(workflowId)) + '&stepGroupId=' + (stepGroupId == null ? '' : encodeURIComponent(stepGroupId)), null, {});
		}

		/**
		 * Start a migration workflow.
		 * Post migrationworkflow/{id}/start
		 * @param {string} id The ID of the migration workflow.
		 * @return {StartMigrationWorkflowResponse} Success
		 */
		StartWorkflow(id: string): Observable<StartMigrationWorkflowResponse> {
			return this.http.post<StartMigrationWorkflowResponse>(this.baseUri + 'migrationworkflow/' + (id == null ? '' : encodeURIComponent(id)) + '/start', null, {});
		}

		/**
		 * Stop an ongoing migration workflow.
		 * Post migrationworkflow/{id}/stop
		 * @param {string} id The ID of the migration workflow.
		 * @return {StopMigrationWorkflowResponse} Success
		 */
		StopWorkflow(id: string): Observable<StopMigrationWorkflowResponse> {
			return this.http.post<StopMigrationWorkflowResponse>(this.baseUri + 'migrationworkflow/' + (id == null ? '' : encodeURIComponent(id)) + '/stop', null, {});
		}

		/**
		 * Deletes the tags for a resource.
		 * Delete tags/{resourceArn}#tagKeys
		 * @param {string} resourceArn The Amazon Resource Name (ARN) of the resource from which you want to remove tags.
		 * @param {Array<string>} tagKeys One or more tag keys. Specify only the tag keys, not the tag values.
		 * @return {UntagResourceResponse} Success
		 */
		UntagResource(resourceArn: string, tagKeys: Array<string>): Observable<UntagResourceResponse> {
			return this.http.delete<UntagResourceResponse>(this.baseUri + 'tags/' + (resourceArn == null ? '' : encodeURIComponent(resourceArn)) + '#tagKeys&' + tagKeys.map(z => `tagKeys=${encodeURIComponent(z)}`).join('&'), {});
		}

		/**
		 * Update a step in a migration workflow.
		 * Post workflowstep/{id}
		 * @param {string} id The ID of the step.
		 * @return {UpdateWorkflowStepResponse} Success
		 */
		UpdateWorkflowStep(id: string, requestBody: UpdateWorkflowStepPostBody): Observable<UpdateWorkflowStepResponse> {
			return this.http.post<UpdateWorkflowStepResponse>(this.baseUri + 'workflowstep/' + (id == null ? '' : encodeURIComponent(id)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

	export interface CreateWorkflowPostBody {

		/**
		 * The name of the migration workflow.
		 * Required
		 * Max length: 100
		 * Min length: 1
		 */
		name: string;

		/**
		 * The description of the migration workflow.
		 * Max length: 500
		 * Min length: 0
		 */
		description?: string | null;

		/**
		 * The ID of the template.
		 * Required
		 * Max length: 100
		 * Min length: 1
		 */
		templateId: string;

		/**
		 * The configuration ID of the application configured in Application Discovery Service.
		 * Required
		 * Max length: 100
		 * Min length: 1
		 */
		applicationConfigurationId: string;

		/**
		 * The input parameters required to create a migration workflow.
		 * Required
		 */
		inputParameters: {[id: string]: StepInput };

		/** The servers on which a step will be run. */
		stepTargets?: Array<string>;

		/** The tags to add on a migration workflow. */
		tags?: {[id: string]: string };
	}
	export interface CreateWorkflowPostBodyFormProperties {

		/**
		 * The name of the migration workflow.
		 * Required
		 * Max length: 100
		 * Min length: 1
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * The description of the migration workflow.
		 * Max length: 500
		 * Min length: 0
		 */
		description: FormControl<string | null | undefined>,

		/**
		 * The ID of the template.
		 * Required
		 * Max length: 100
		 * Min length: 1
		 */
		templateId: FormControl<string | null | undefined>,

		/**
		 * The configuration ID of the application configured in Application Discovery Service.
		 * Required
		 * Max length: 100
		 * Min length: 1
		 */
		applicationConfigurationId: FormControl<string | null | undefined>,

		/**
		 * The input parameters required to create a migration workflow.
		 * Required
		 */
		inputParameters: FormControl<{[id: string]: StepInput } | null | undefined>,

		/** The tags to add on a migration workflow. */
		tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateCreateWorkflowPostBodyFormGroup() {
		return new FormGroup<CreateWorkflowPostBodyFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(100), Validators.pattern('[-a-zA-Z0-9_.+]+[-a-zA-Z0-9_.+ ]*')]),
			description: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(500), Validators.pattern('[-a-zA-Z0-9_.+, ]*')]),
			templateId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(100), Validators.pattern('[-a-zA-Z0-9_.+]+[-a-zA-Z0-9_.+ ]*')]),
			applicationConfigurationId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(100), Validators.pattern('[-a-zA-Z0-9_.+]+[-a-zA-Z0-9_.+ ]*')]),
			inputParameters: new FormControl<{[id: string]: StepInput } | null | undefined>(undefined, [Validators.required]),
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}

	export interface CreateWorkflowStepPostBody {

		/**
		 * The name of the step.
		 * Required
		 * Max length: 100
		 * Min length: 1
		 */
		name: string;

		/**
		 * The ID of the step group.
		 * Required
		 * Max length: 100
		 * Min length: 1
		 */
		stepGroupId: string;

		/**
		 * The ID of the migration workflow.
		 * Required
		 * Max length: 100
		 * Min length: 1
		 */
		workflowId: string;

		/**
		 * The action type of the step. You must run and update the status of a manual step for the workflow to continue after the completion of the step.
		 * Required
		 */
		stepActionType: StepActionType;

		/**
		 * The description of the step.
		 * Max length: 500
		 * Min length: 0
		 */
		description?: string | null;

		/** The custom script to run tests on source or target environments. */
		workflowStepAutomationConfiguration?: CreateWorkflowStepPostBodyWorkflowStepAutomationConfiguration;

		/** The servers on which a step will be run. */
		stepTarget?: Array<string>;

		/** The key value pairs added for the expected output. */
		outputs?: Array<WorkflowStepOutput>;

		/** The previous step. */
		previous?: Array<string>;

		/** The next step. */
		next?: Array<string>;
	}
	export interface CreateWorkflowStepPostBodyFormProperties {

		/**
		 * The name of the step.
		 * Required
		 * Max length: 100
		 * Min length: 1
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * The ID of the step group.
		 * Required
		 * Max length: 100
		 * Min length: 1
		 */
		stepGroupId: FormControl<string | null | undefined>,

		/**
		 * The ID of the migration workflow.
		 * Required
		 * Max length: 100
		 * Min length: 1
		 */
		workflowId: FormControl<string | null | undefined>,

		/**
		 * The action type of the step. You must run and update the status of a manual step for the workflow to continue after the completion of the step.
		 * Required
		 */
		stepActionType: FormControl<StepActionType | null | undefined>,

		/**
		 * The description of the step.
		 * Max length: 500
		 * Min length: 0
		 */
		description: FormControl<string | null | undefined>,
	}
	export function CreateCreateWorkflowStepPostBodyFormGroup() {
		return new FormGroup<CreateWorkflowStepPostBodyFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(100), Validators.pattern('[-a-zA-Z0-9_.+]+[-a-zA-Z0-9_.+ ]*')]),
			stepGroupId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(100), Validators.pattern('[a-zA-Z0-9-]+')]),
			workflowId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(100), Validators.pattern('[a-zA-Z0-9-]+')]),
			stepActionType: new FormControl<StepActionType | null | undefined>(undefined, [Validators.required]),
			description: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(500), Validators.pattern('[-a-zA-Z0-9_.+, ]*')]),
		});

	}

	export interface CreateWorkflowStepPostBodyWorkflowStepAutomationConfiguration {
		scriptLocationS3Bucket?: string;
		scriptLocationS3Key?: PlatformScriptKey;
		command?: PlatformCommand;
		runEnvironment?: RunEnvironment;
		targetType?: TargetType;
	}
	export interface CreateWorkflowStepPostBodyWorkflowStepAutomationConfigurationFormProperties {
		scriptLocationS3Bucket: FormControl<string | null | undefined>,
		runEnvironment: FormControl<RunEnvironment | null | undefined>,
		targetType: FormControl<TargetType | null | undefined>,
	}
	export function CreateCreateWorkflowStepPostBodyWorkflowStepAutomationConfigurationFormGroup() {
		return new FormGroup<CreateWorkflowStepPostBodyWorkflowStepAutomationConfigurationFormProperties>({
			scriptLocationS3Bucket: new FormControl<string | null | undefined>(undefined),
			runEnvironment: new FormControl<RunEnvironment | null | undefined>(undefined),
			targetType: new FormControl<TargetType | null | undefined>(undefined),
		});

	}

	export interface CreateWorkflowStepGroupPostBody {

		/**
		 * The ID of the migration workflow that will contain the step group.
		 * Required
		 * Max length: 100
		 * Min length: 1
		 */
		workflowId: string;

		/**
		 * The name of the step group.
		 * Required
		 * Max length: 100
		 * Min length: 1
		 */
		name: string;

		/**
		 * The description of the step group.
		 * Max length: 500
		 * Min length: 0
		 */
		description?: string | null;

		/** The next step group. */
		next?: Array<string>;

		/** The previous step group. */
		previous?: Array<string>;
	}
	export interface CreateWorkflowStepGroupPostBodyFormProperties {

		/**
		 * The ID of the migration workflow that will contain the step group.
		 * Required
		 * Max length: 100
		 * Min length: 1
		 */
		workflowId: FormControl<string | null | undefined>,

		/**
		 * The name of the step group.
		 * Required
		 * Max length: 100
		 * Min length: 1
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * The description of the step group.
		 * Max length: 500
		 * Min length: 0
		 */
		description: FormControl<string | null | undefined>,
	}
	export function CreateCreateWorkflowStepGroupPostBodyFormGroup() {
		return new FormGroup<CreateWorkflowStepGroupPostBodyFormProperties>({
			workflowId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(100), Validators.pattern('[a-zA-Z0-9-]+')]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(100), Validators.pattern('[-a-zA-Z0-9_.+]+[-a-zA-Z0-9_.+ ]*')]),
			description: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(500), Validators.pattern('[-a-zA-Z0-9_.+, ]*')]),
		});

	}

	export interface UpdateWorkflowPostBody {

		/**
		 * The name of the migration workflow.
		 * Max length: 100
		 * Min length: 1
		 */
		name?: string | null;

		/**
		 * The description of the migration workflow.
		 * Max length: 500
		 * Min length: 0
		 */
		description?: string | null;

		/** The input parameters required to update a migration workflow. */
		inputParameters?: {[id: string]: StepInput };

		/** The servers on which a step will be run. */
		stepTargets?: Array<string>;
	}
	export interface UpdateWorkflowPostBodyFormProperties {

		/**
		 * The name of the migration workflow.
		 * Max length: 100
		 * Min length: 1
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * The description of the migration workflow.
		 * Max length: 500
		 * Min length: 0
		 */
		description: FormControl<string | null | undefined>,

		/** The input parameters required to update a migration workflow. */
		inputParameters: FormControl<{[id: string]: StepInput } | null | undefined>,
	}
	export function CreateUpdateWorkflowPostBodyFormGroup() {
		return new FormGroup<UpdateWorkflowPostBodyFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(100), Validators.pattern('[-a-zA-Z0-9_.+]+[-a-zA-Z0-9_.+ ]*')]),
			description: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(500), Validators.pattern('[-a-zA-Z0-9_.+, ]*')]),
			inputParameters: new FormControl<{[id: string]: StepInput } | null | undefined>(undefined),
		});

	}

	export interface UpdateWorkflowStepGroupPostBody {

		/**
		 * The name of the step group.
		 * Max length: 100
		 * Min length: 1
		 */
		name?: string | null;

		/**
		 * The description of the step group.
		 * Max length: 500
		 * Min length: 0
		 */
		description?: string | null;

		/** The next step group. */
		next?: Array<string>;

		/** The previous step group. */
		previous?: Array<string>;
	}
	export interface UpdateWorkflowStepGroupPostBodyFormProperties {

		/**
		 * The name of the step group.
		 * Max length: 100
		 * Min length: 1
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * The description of the step group.
		 * Max length: 500
		 * Min length: 0
		 */
		description: FormControl<string | null | undefined>,
	}
	export function CreateUpdateWorkflowStepGroupPostBodyFormGroup() {
		return new FormGroup<UpdateWorkflowStepGroupPostBodyFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(100), Validators.pattern('[-a-zA-Z0-9_.+]+[-a-zA-Z0-9_.+ ]*')]),
			description: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(500), Validators.pattern('[-a-zA-Z0-9_.+, ]*')]),
		});

	}

	export interface TagResourcePostBody {

		/**
		 * A collection of labels, in the form of key:value pairs, that apply to this resource.
		 * Required
		 */
		tags: {[id: string]: string };
	}
	export interface TagResourcePostBodyFormProperties {

		/**
		 * A collection of labels, in the form of key:value pairs, that apply to this resource.
		 * Required
		 */
		tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateTagResourcePostBodyFormGroup() {
		return new FormGroup<TagResourcePostBodyFormProperties>({
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UpdateWorkflowStepPostBody {

		/**
		 * The ID of the step group.
		 * Required
		 * Max length: 100
		 * Min length: 1
		 */
		stepGroupId: string;

		/**
		 * The ID of the migration workflow.
		 * Required
		 * Max length: 100
		 * Min length: 1
		 */
		workflowId: string;

		/**
		 * The name of the step.
		 * Max length: 100
		 * Min length: 1
		 */
		name?: string | null;

		/**
		 * The description of the step.
		 * Max length: 500
		 * Min length: 0
		 */
		description?: string | null;

		/** The action type of the step. You must run and update the status of a manual step for the workflow to continue after the completion of the step. */
		stepActionType?: StepActionType | null;

		/** The custom script to run tests on source or target environments. */
		workflowStepAutomationConfiguration?: UpdateWorkflowStepPostBodyWorkflowStepAutomationConfiguration;

		/** The servers on which a step will be run. */
		stepTarget?: Array<string>;

		/** The outputs of a step. */
		outputs?: Array<WorkflowStepOutput>;

		/** The previous step. */
		previous?: Array<string>;

		/** The next step. */
		next?: Array<string>;

		/** The status of the step. */
		status?: StepStatus | null;
	}
	export interface UpdateWorkflowStepPostBodyFormProperties {

		/**
		 * The ID of the step group.
		 * Required
		 * Max length: 100
		 * Min length: 1
		 */
		stepGroupId: FormControl<string | null | undefined>,

		/**
		 * The ID of the migration workflow.
		 * Required
		 * Max length: 100
		 * Min length: 1
		 */
		workflowId: FormControl<string | null | undefined>,

		/**
		 * The name of the step.
		 * Max length: 100
		 * Min length: 1
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * The description of the step.
		 * Max length: 500
		 * Min length: 0
		 */
		description: FormControl<string | null | undefined>,

		/** The action type of the step. You must run and update the status of a manual step for the workflow to continue after the completion of the step. */
		stepActionType: FormControl<StepActionType | null | undefined>,

		/** The status of the step. */
		status: FormControl<StepStatus | null | undefined>,
	}
	export function CreateUpdateWorkflowStepPostBodyFormGroup() {
		return new FormGroup<UpdateWorkflowStepPostBodyFormProperties>({
			stepGroupId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(100), Validators.pattern('[a-zA-Z0-9-]+')]),
			workflowId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(100), Validators.pattern('[a-zA-Z0-9-]+')]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(100), Validators.pattern('[-a-zA-Z0-9_.+]+[-a-zA-Z0-9_.+ ]*')]),
			description: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(500), Validators.pattern('[-a-zA-Z0-9_.+, ]*')]),
			stepActionType: new FormControl<StepActionType | null | undefined>(undefined),
			status: new FormControl<StepStatus | null | undefined>(undefined),
		});

	}

	export interface UpdateWorkflowStepPostBodyWorkflowStepAutomationConfiguration {
		scriptLocationS3Bucket?: string;
		scriptLocationS3Key?: PlatformScriptKey;
		command?: PlatformCommand;
		runEnvironment?: RunEnvironment;
		targetType?: TargetType;
	}
	export interface UpdateWorkflowStepPostBodyWorkflowStepAutomationConfigurationFormProperties {
		scriptLocationS3Bucket: FormControl<string | null | undefined>,
		runEnvironment: FormControl<RunEnvironment | null | undefined>,
		targetType: FormControl<TargetType | null | undefined>,
	}
	export function CreateUpdateWorkflowStepPostBodyWorkflowStepAutomationConfigurationFormGroup() {
		return new FormGroup<UpdateWorkflowStepPostBodyWorkflowStepAutomationConfigurationFormProperties>({
			scriptLocationS3Bucket: new FormControl<string | null | undefined>(undefined),
			runEnvironment: new FormControl<RunEnvironment | null | undefined>(undefined),
			targetType: new FormControl<TargetType | null | undefined>(undefined),
		});

	}

}

