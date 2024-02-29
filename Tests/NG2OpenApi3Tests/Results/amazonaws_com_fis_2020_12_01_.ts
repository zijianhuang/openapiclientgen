import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface CreateExperimentTemplateResponse {
		experimentTemplate?: ExperimentTemplate;
	}
	export interface CreateExperimentTemplateResponseFormProperties {
	}
	export function CreateCreateExperimentTemplateResponseFormGroup() {
		return new FormGroup<CreateExperimentTemplateResponseFormProperties>({
		});

	}


	/** Describes an experiment template. */
	export interface ExperimentTemplate {
		id?: string;
		description?: string;
		targets?: ExperimentTemplateTargetMap;
		actions?: ExperimentTemplateActionMap;
		stopConditions?: Array<ExperimentTemplateStopCondition>;
		creationTime?: Date;
		lastUpdateTime?: Date;
		roleArn?: string;
		tags?: TagMap;
		logConfiguration?: ExperimentTemplateLogConfiguration;
	}

	/** Describes an experiment template. */
	export interface ExperimentTemplateFormProperties {
		id: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,
		creationTime: FormControl<Date | null | undefined>,
		lastUpdateTime: FormControl<Date | null | undefined>,
		roleArn: FormControl<string | null | undefined>,
	}
	export function CreateExperimentTemplateFormGroup() {
		return new FormGroup<ExperimentTemplateFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			creationTime: new FormControl<Date | null | undefined>(undefined),
			lastUpdateTime: new FormControl<Date | null | undefined>(undefined),
			roleArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ExperimentTemplateTargetMap {
	}
	export interface ExperimentTemplateTargetMapFormProperties {
	}
	export function CreateExperimentTemplateTargetMapFormGroup() {
		return new FormGroup<ExperimentTemplateTargetMapFormProperties>({
		});

	}

	export interface ExperimentTemplateActionMap {
	}
	export interface ExperimentTemplateActionMapFormProperties {
	}
	export function CreateExperimentTemplateActionMapFormGroup() {
		return new FormGroup<ExperimentTemplateActionMapFormProperties>({
		});

	}


	/** Describes a stop condition for an experiment template. */
	export interface ExperimentTemplateStopCondition {
		source?: string;
		value?: string;
	}

	/** Describes a stop condition for an experiment template. */
	export interface ExperimentTemplateStopConditionFormProperties {
		source: FormControl<string | null | undefined>,
		value: FormControl<string | null | undefined>,
	}
	export function CreateExperimentTemplateStopConditionFormGroup() {
		return new FormGroup<ExperimentTemplateStopConditionFormProperties>({
			source: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
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


	/** Describes the configuration for experiment logging. */
	export interface ExperimentTemplateLogConfiguration {
		cloudWatchLogsConfiguration?: ExperimentTemplateCloudWatchLogsLogConfiguration;
		s3Configuration?: ExperimentTemplateS3LogConfiguration;
		logSchemaVersion?: number | null;
	}

	/** Describes the configuration for experiment logging. */
	export interface ExperimentTemplateLogConfigurationFormProperties {
		logSchemaVersion: FormControl<number | null | undefined>,
	}
	export function CreateExperimentTemplateLogConfigurationFormGroup() {
		return new FormGroup<ExperimentTemplateLogConfigurationFormProperties>({
			logSchemaVersion: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Describes the configuration for experiment logging to Amazon CloudWatch Logs. */
	export interface ExperimentTemplateCloudWatchLogsLogConfiguration {
		logGroupArn?: string;
	}

	/** Describes the configuration for experiment logging to Amazon CloudWatch Logs. */
	export interface ExperimentTemplateCloudWatchLogsLogConfigurationFormProperties {
		logGroupArn: FormControl<string | null | undefined>,
	}
	export function CreateExperimentTemplateCloudWatchLogsLogConfigurationFormGroup() {
		return new FormGroup<ExperimentTemplateCloudWatchLogsLogConfigurationFormProperties>({
			logGroupArn: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Describes the configuration for experiment logging to Amazon S3. */
	export interface ExperimentTemplateS3LogConfiguration {
		bucketName?: string;
		prefix?: string;
	}

	/** Describes the configuration for experiment logging to Amazon S3. */
	export interface ExperimentTemplateS3LogConfigurationFormProperties {
		bucketName: FormControl<string | null | undefined>,
		prefix: FormControl<string | null | undefined>,
	}
	export function CreateExperimentTemplateS3LogConfigurationFormGroup() {
		return new FormGroup<ExperimentTemplateS3LogConfigurationFormProperties>({
			bucketName: new FormControl<string | null | undefined>(undefined),
			prefix: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Specifies a stop condition for an experiment template. */
	export interface CreateExperimentTemplateStopConditionInput {

		/** Required */
		source: string;
		value?: string;
	}

	/** Specifies a stop condition for an experiment template. */
	export interface CreateExperimentTemplateStopConditionInputFormProperties {

		/** Required */
		source: FormControl<string | null | undefined>,
		value: FormControl<string | null | undefined>,
	}
	export function CreateCreateExperimentTemplateStopConditionInputFormGroup() {
		return new FormGroup<CreateExperimentTemplateStopConditionInputFormProperties>({
			source: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** <p>Specifies a target for an experiment. You must specify at least one Amazon Resource Name (ARN) or at least one resource tag. You cannot specify both ARNs and tags.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/fis/latest/userguide/targets.html">Targets</a> in the <i>Fault Injection Simulator User Guide</i>.</p> */
	export interface CreateExperimentTemplateTargetInput {

		/** Required */
		resourceType: string;
		resourceArns?: Array<string>;
		resourceTags?: TagMap;
		filters?: Array<ExperimentTemplateTargetInputFilter>;

		/** Required */
		selectionMode: string;
		parameters?: ExperimentTemplateTargetParameterMap;
	}

	/** <p>Specifies a target for an experiment. You must specify at least one Amazon Resource Name (ARN) or at least one resource tag. You cannot specify both ARNs and tags.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/fis/latest/userguide/targets.html">Targets</a> in the <i>Fault Injection Simulator User Guide</i>.</p> */
	export interface CreateExperimentTemplateTargetInputFormProperties {

		/** Required */
		resourceType: FormControl<string | null | undefined>,

		/** Required */
		selectionMode: FormControl<string | null | undefined>,
	}
	export function CreateCreateExperimentTemplateTargetInputFormGroup() {
		return new FormGroup<CreateExperimentTemplateTargetInputFormProperties>({
			resourceType: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			selectionMode: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** <p>Specifies a filter used for the target resource input in an experiment template.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/fis/latest/userguide/targets.html#target-filters">Resource filters</a> in the <i>Fault Injection Simulator User Guide</i>.</p> */
	export interface ExperimentTemplateTargetInputFilter {

		/** Required */
		path: string;

		/** Required */
		values: Array<string>;
	}

	/** <p>Specifies a filter used for the target resource input in an experiment template.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/fis/latest/userguide/targets.html#target-filters">Resource filters</a> in the <i>Fault Injection Simulator User Guide</i>.</p> */
	export interface ExperimentTemplateTargetInputFilterFormProperties {

		/** Required */
		path: FormControl<string | null | undefined>,
	}
	export function CreateExperimentTemplateTargetInputFilterFormGroup() {
		return new FormGroup<ExperimentTemplateTargetInputFilterFormProperties>({
			path: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ExperimentTemplateTargetParameterMap {
	}
	export interface ExperimentTemplateTargetParameterMapFormProperties {
	}
	export function CreateExperimentTemplateTargetParameterMapFormGroup() {
		return new FormGroup<ExperimentTemplateTargetParameterMapFormProperties>({
		});

	}


	/** <p>Specifies an action for an experiment template.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/fis/latest/userguide/actions.html">Actions</a> in the <i>Fault Injection Simulator User Guide</i>.</p> */
	export interface CreateExperimentTemplateActionInput {

		/** Required */
		actionId: string;
		description?: string;
		parameters?: ExperimentTemplateActionParameterMap;
		targets?: ExperimentTemplateActionTargetMap;
		startAfter?: Array<string>;
	}

	/** <p>Specifies an action for an experiment template.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/fis/latest/userguide/actions.html">Actions</a> in the <i>Fault Injection Simulator User Guide</i>.</p> */
	export interface CreateExperimentTemplateActionInputFormProperties {

		/** Required */
		actionId: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,
	}
	export function CreateCreateExperimentTemplateActionInputFormGroup() {
		return new FormGroup<CreateExperimentTemplateActionInputFormProperties>({
			actionId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			description: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ExperimentTemplateActionParameterMap {
	}
	export interface ExperimentTemplateActionParameterMapFormProperties {
	}
	export function CreateExperimentTemplateActionParameterMapFormGroup() {
		return new FormGroup<ExperimentTemplateActionParameterMapFormProperties>({
		});

	}

	export interface ExperimentTemplateActionTargetMap {
	}
	export interface ExperimentTemplateActionTargetMapFormProperties {
	}
	export function CreateExperimentTemplateActionTargetMapFormGroup() {
		return new FormGroup<ExperimentTemplateActionTargetMapFormProperties>({
		});

	}


	/** Specifies the configuration for experiment logging to Amazon CloudWatch Logs. */
	export interface ExperimentTemplateCloudWatchLogsLogConfigurationInput {

		/** Required */
		logGroupArn: string;
	}

	/** Specifies the configuration for experiment logging to Amazon CloudWatch Logs. */
	export interface ExperimentTemplateCloudWatchLogsLogConfigurationInputFormProperties {

		/** Required */
		logGroupArn: FormControl<string | null | undefined>,
	}
	export function CreateExperimentTemplateCloudWatchLogsLogConfigurationInputFormGroup() {
		return new FormGroup<ExperimentTemplateCloudWatchLogsLogConfigurationInputFormProperties>({
			logGroupArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Specifies the configuration for experiment logging to Amazon S3. */
	export interface ExperimentTemplateS3LogConfigurationInput {

		/** Required */
		bucketName: string;
		prefix?: string;
	}

	/** Specifies the configuration for experiment logging to Amazon S3. */
	export interface ExperimentTemplateS3LogConfigurationInputFormProperties {

		/** Required */
		bucketName: FormControl<string | null | undefined>,
		prefix: FormControl<string | null | undefined>,
	}
	export function CreateExperimentTemplateS3LogConfigurationInputFormGroup() {
		return new FormGroup<ExperimentTemplateS3LogConfigurationInputFormProperties>({
			bucketName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			prefix: new FormControl<string | null | undefined>(undefined),
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

	export interface ConflictException {
	}
	export interface ConflictExceptionFormProperties {
	}
	export function CreateConflictExceptionFormGroup() {
		return new FormGroup<ConflictExceptionFormProperties>({
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

	export interface ServiceQuotaExceededException {
	}
	export interface ServiceQuotaExceededExceptionFormProperties {
	}
	export function CreateServiceQuotaExceededExceptionFormGroup() {
		return new FormGroup<ServiceQuotaExceededExceptionFormProperties>({
		});

	}

	export interface DeleteExperimentTemplateResponse {
		experimentTemplate?: ExperimentTemplate;
	}
	export interface DeleteExperimentTemplateResponseFormProperties {
	}
	export function CreateDeleteExperimentTemplateResponseFormGroup() {
		return new FormGroup<DeleteExperimentTemplateResponseFormProperties>({
		});

	}

	export interface GetActionResponse {
		action?: Action;
	}
	export interface GetActionResponseFormProperties {
	}
	export function CreateGetActionResponseFormGroup() {
		return new FormGroup<GetActionResponseFormProperties>({
		});

	}


	/** Describes an action. For more information, see <a href="https://docs.aws.amazon.com/fis/latest/userguide/fis-actions-reference.html">FIS actions</a> in the <i>Fault Injection Simulator User Guide</i>. */
	export interface Action {
		id?: string;
		description?: string;
		parameters?: ActionParameterMap;
		targets?: ActionTargetMap;
		tags?: TagMap;
	}

	/** Describes an action. For more information, see <a href="https://docs.aws.amazon.com/fis/latest/userguide/fis-actions-reference.html">FIS actions</a> in the <i>Fault Injection Simulator User Guide</i>. */
	export interface ActionFormProperties {
		id: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,
	}
	export function CreateActionFormGroup() {
		return new FormGroup<ActionFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ActionParameterMap {
	}
	export interface ActionParameterMapFormProperties {
	}
	export function CreateActionParameterMapFormGroup() {
		return new FormGroup<ActionParameterMapFormProperties>({
		});

	}

	export interface ActionTargetMap {
	}
	export interface ActionTargetMapFormProperties {
	}
	export function CreateActionTargetMapFormGroup() {
		return new FormGroup<ActionTargetMapFormProperties>({
		});

	}

	export interface GetExperimentResponse {
		experiment?: Experiment;
	}
	export interface GetExperimentResponseFormProperties {
	}
	export function CreateGetExperimentResponseFormGroup() {
		return new FormGroup<GetExperimentResponseFormProperties>({
		});

	}


	/** Describes an experiment. */
	export interface Experiment {
		id?: string;
		experimentTemplateId?: string;
		roleArn?: string;
		state?: ExperimentState;
		targets?: ExperimentTargetMap;
		actions?: ExperimentActionMap;
		stopConditions?: Array<ExperimentStopCondition>;
		creationTime?: Date;
		startTime?: Date;
		endTime?: Date;
		tags?: TagMap;
		logConfiguration?: ExperimentLogConfiguration;
	}

	/** Describes an experiment. */
	export interface ExperimentFormProperties {
		id: FormControl<string | null | undefined>,
		experimentTemplateId: FormControl<string | null | undefined>,
		roleArn: FormControl<string | null | undefined>,
		creationTime: FormControl<Date | null | undefined>,
		startTime: FormControl<Date | null | undefined>,
		endTime: FormControl<Date | null | undefined>,
	}
	export function CreateExperimentFormGroup() {
		return new FormGroup<ExperimentFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			experimentTemplateId: new FormControl<string | null | undefined>(undefined),
			roleArn: new FormControl<string | null | undefined>(undefined),
			creationTime: new FormControl<Date | null | undefined>(undefined),
			startTime: new FormControl<Date | null | undefined>(undefined),
			endTime: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/** Describes the state of an experiment. */
	export interface ExperimentState {
		status?: ExperimentStatus;
		reason?: string;
	}

	/** Describes the state of an experiment. */
	export interface ExperimentStateFormProperties {
		status: FormControl<ExperimentStatus | null | undefined>,
		reason: FormControl<string | null | undefined>,
	}
	export function CreateExperimentStateFormGroup() {
		return new FormGroup<ExperimentStateFormProperties>({
			status: new FormControl<ExperimentStatus | null | undefined>(undefined),
			reason: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ExperimentStatus { pending = 'pending', initiating = 'initiating', running = 'running', completed = 'completed', stopping = 'stopping', stopped = 'stopped', failed = 'failed' }

	export interface ExperimentTargetMap {
	}
	export interface ExperimentTargetMapFormProperties {
	}
	export function CreateExperimentTargetMapFormGroup() {
		return new FormGroup<ExperimentTargetMapFormProperties>({
		});

	}

	export interface ExperimentActionMap {
	}
	export interface ExperimentActionMapFormProperties {
	}
	export function CreateExperimentActionMapFormGroup() {
		return new FormGroup<ExperimentActionMapFormProperties>({
		});

	}


	/** Describes the stop condition for an experiment. */
	export interface ExperimentStopCondition {
		source?: string;
		value?: string;
	}

	/** Describes the stop condition for an experiment. */
	export interface ExperimentStopConditionFormProperties {
		source: FormControl<string | null | undefined>,
		value: FormControl<string | null | undefined>,
	}
	export function CreateExperimentStopConditionFormGroup() {
		return new FormGroup<ExperimentStopConditionFormProperties>({
			source: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Describes the configuration for experiment logging. */
	export interface ExperimentLogConfiguration {
		cloudWatchLogsConfiguration?: ExperimentCloudWatchLogsLogConfiguration;
		s3Configuration?: ExperimentS3LogConfiguration;
		logSchemaVersion?: number | null;
	}

	/** Describes the configuration for experiment logging. */
	export interface ExperimentLogConfigurationFormProperties {
		logSchemaVersion: FormControl<number | null | undefined>,
	}
	export function CreateExperimentLogConfigurationFormGroup() {
		return new FormGroup<ExperimentLogConfigurationFormProperties>({
			logSchemaVersion: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Describes the configuration for experiment logging to Amazon CloudWatch Logs. */
	export interface ExperimentCloudWatchLogsLogConfiguration {
		logGroupArn?: string;
	}

	/** Describes the configuration for experiment logging to Amazon CloudWatch Logs. */
	export interface ExperimentCloudWatchLogsLogConfigurationFormProperties {
		logGroupArn: FormControl<string | null | undefined>,
	}
	export function CreateExperimentCloudWatchLogsLogConfigurationFormGroup() {
		return new FormGroup<ExperimentCloudWatchLogsLogConfigurationFormProperties>({
			logGroupArn: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Describes the configuration for experiment logging to Amazon S3. */
	export interface ExperimentS3LogConfiguration {
		bucketName?: string;
		prefix?: string;
	}

	/** Describes the configuration for experiment logging to Amazon S3. */
	export interface ExperimentS3LogConfigurationFormProperties {
		bucketName: FormControl<string | null | undefined>,
		prefix: FormControl<string | null | undefined>,
	}
	export function CreateExperimentS3LogConfigurationFormGroup() {
		return new FormGroup<ExperimentS3LogConfigurationFormProperties>({
			bucketName: new FormControl<string | null | undefined>(undefined),
			prefix: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetExperimentTemplateResponse {
		experimentTemplate?: ExperimentTemplate;
	}
	export interface GetExperimentTemplateResponseFormProperties {
	}
	export function CreateGetExperimentTemplateResponseFormGroup() {
		return new FormGroup<GetExperimentTemplateResponseFormProperties>({
		});

	}

	export interface GetTargetResourceTypeResponse {
		targetResourceType?: TargetResourceType;
	}
	export interface GetTargetResourceTypeResponseFormProperties {
	}
	export function CreateGetTargetResourceTypeResponseFormGroup() {
		return new FormGroup<GetTargetResourceTypeResponseFormProperties>({
		});

	}


	/** Describes a resource type. */
	export interface TargetResourceType {
		resourceType?: string;
		description?: string;
		parameters?: TargetResourceTypeParameterMap;
	}

	/** Describes a resource type. */
	export interface TargetResourceTypeFormProperties {
		resourceType: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,
	}
	export function CreateTargetResourceTypeFormGroup() {
		return new FormGroup<TargetResourceTypeFormProperties>({
			resourceType: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface TargetResourceTypeParameterMap {
	}
	export interface TargetResourceTypeParameterMapFormProperties {
	}
	export function CreateTargetResourceTypeParameterMapFormGroup() {
		return new FormGroup<TargetResourceTypeParameterMapFormProperties>({
		});

	}

	export interface ListActionsResponse {
		actions?: Array<ActionSummary>;
		nextToken?: string;
	}
	export interface ListActionsResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListActionsResponseFormGroup() {
		return new FormGroup<ListActionsResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Provides a summary of an action. */
	export interface ActionSummary {
		id?: string;
		description?: string;
		targets?: ActionTargetMap;
		tags?: TagMap;
	}

	/** Provides a summary of an action. */
	export interface ActionSummaryFormProperties {
		id: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,
	}
	export function CreateActionSummaryFormGroup() {
		return new FormGroup<ActionSummaryFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListExperimentTemplatesResponse {
		experimentTemplates?: Array<ExperimentTemplateSummary>;
		nextToken?: string;
	}
	export interface ListExperimentTemplatesResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListExperimentTemplatesResponseFormGroup() {
		return new FormGroup<ListExperimentTemplatesResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Provides a summary of an experiment template. */
	export interface ExperimentTemplateSummary {
		id?: string;
		description?: string;
		creationTime?: Date;
		lastUpdateTime?: Date;
		tags?: TagMap;
	}

	/** Provides a summary of an experiment template. */
	export interface ExperimentTemplateSummaryFormProperties {
		id: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,
		creationTime: FormControl<Date | null | undefined>,
		lastUpdateTime: FormControl<Date | null | undefined>,
	}
	export function CreateExperimentTemplateSummaryFormGroup() {
		return new FormGroup<ExperimentTemplateSummaryFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			creationTime: new FormControl<Date | null | undefined>(undefined),
			lastUpdateTime: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface ListExperimentsResponse {
		experiments?: Array<ExperimentSummary>;
		nextToken?: string;
	}
	export interface ListExperimentsResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListExperimentsResponseFormGroup() {
		return new FormGroup<ListExperimentsResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Provides a summary of an experiment. */
	export interface ExperimentSummary {
		id?: string;
		experimentTemplateId?: string;
		state?: ExperimentState;
		creationTime?: Date;
		tags?: TagMap;
	}

	/** Provides a summary of an experiment. */
	export interface ExperimentSummaryFormProperties {
		id: FormControl<string | null | undefined>,
		experimentTemplateId: FormControl<string | null | undefined>,
		creationTime: FormControl<Date | null | undefined>,
	}
	export function CreateExperimentSummaryFormGroup() {
		return new FormGroup<ExperimentSummaryFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			experimentTemplateId: new FormControl<string | null | undefined>(undefined),
			creationTime: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface ListTagsForResourceResponse {
		tags?: TagMap;
	}
	export interface ListTagsForResourceResponseFormProperties {
	}
	export function CreateListTagsForResourceResponseFormGroup() {
		return new FormGroup<ListTagsForResourceResponseFormProperties>({
		});

	}

	export interface ListTargetResourceTypesResponse {
		targetResourceTypes?: Array<TargetResourceTypeSummary>;
		nextToken?: string;
	}
	export interface ListTargetResourceTypesResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListTargetResourceTypesResponseFormGroup() {
		return new FormGroup<ListTargetResourceTypesResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Describes a resource type. */
	export interface TargetResourceTypeSummary {
		resourceType?: string;
		description?: string;
	}

	/** Describes a resource type. */
	export interface TargetResourceTypeSummaryFormProperties {
		resourceType: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,
	}
	export function CreateTargetResourceTypeSummaryFormGroup() {
		return new FormGroup<TargetResourceTypeSummaryFormProperties>({
			resourceType: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface StartExperimentResponse {
		experiment?: Experiment;
	}
	export interface StartExperimentResponseFormProperties {
	}
	export function CreateStartExperimentResponseFormGroup() {
		return new FormGroup<StartExperimentResponseFormProperties>({
		});

	}

	export interface StopExperimentResponse {
		experiment?: Experiment;
	}
	export interface StopExperimentResponseFormProperties {
	}
	export function CreateStopExperimentResponseFormGroup() {
		return new FormGroup<StopExperimentResponseFormProperties>({
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

	export interface UpdateExperimentTemplateResponse {
		experimentTemplate?: ExperimentTemplate;
	}
	export interface UpdateExperimentTemplateResponseFormProperties {
	}
	export function CreateUpdateExperimentTemplateResponseFormGroup() {
		return new FormGroup<UpdateExperimentTemplateResponseFormProperties>({
		});

	}


	/** Specifies a stop condition for an experiment. You can define a stop condition as a CloudWatch alarm. */
	export interface UpdateExperimentTemplateStopConditionInput {

		/** Required */
		source: string;
		value?: string;
	}

	/** Specifies a stop condition for an experiment. You can define a stop condition as a CloudWatch alarm. */
	export interface UpdateExperimentTemplateStopConditionInputFormProperties {

		/** Required */
		source: FormControl<string | null | undefined>,
		value: FormControl<string | null | undefined>,
	}
	export function CreateUpdateExperimentTemplateStopConditionInputFormGroup() {
		return new FormGroup<UpdateExperimentTemplateStopConditionInputFormProperties>({
			source: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Specifies a target for an experiment. You must specify at least one Amazon Resource Name (ARN) or at least one resource tag. You cannot specify both. */
	export interface UpdateExperimentTemplateTargetInput {

		/** Required */
		resourceType: string;
		resourceArns?: Array<string>;
		resourceTags?: TagMap;
		filters?: Array<ExperimentTemplateTargetInputFilter>;

		/** Required */
		selectionMode: string;
		parameters?: ExperimentTemplateTargetParameterMap;
	}

	/** Specifies a target for an experiment. You must specify at least one Amazon Resource Name (ARN) or at least one resource tag. You cannot specify both. */
	export interface UpdateExperimentTemplateTargetInputFormProperties {

		/** Required */
		resourceType: FormControl<string | null | undefined>,

		/** Required */
		selectionMode: FormControl<string | null | undefined>,
	}
	export function CreateUpdateExperimentTemplateTargetInputFormGroup() {
		return new FormGroup<UpdateExperimentTemplateTargetInputFormProperties>({
			resourceType: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			selectionMode: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Specifies an action for an experiment template. */
	export interface UpdateExperimentTemplateActionInputItem {
		actionId?: string;
		description?: string;
		parameters?: ExperimentTemplateActionParameterMap;
		targets?: ExperimentTemplateActionTargetMap;
		startAfter?: Array<string>;
	}

	/** Specifies an action for an experiment template. */
	export interface UpdateExperimentTemplateActionInputItemFormProperties {
		actionId: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,
	}
	export function CreateUpdateExperimentTemplateActionInputItemFormGroup() {
		return new FormGroup<UpdateExperimentTemplateActionInputItemFormProperties>({
			actionId: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Describes a parameter for an action. */
	export interface ActionParameter {
		description?: string;
		required?: boolean | null;
	}

	/** Describes a parameter for an action. */
	export interface ActionParameterFormProperties {
		description: FormControl<string | null | undefined>,
		required: FormControl<boolean | null | undefined>,
	}
	export function CreateActionParameterFormGroup() {
		return new FormGroup<ActionParameterFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			required: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Describes a target for an action. */
	export interface ActionTarget {
		resourceType?: string;
	}

	/** Describes a target for an action. */
	export interface ActionTargetFormProperties {
		resourceType: FormControl<string | null | undefined>,
	}
	export function CreateActionTargetFormGroup() {
		return new FormGroup<ActionTargetFormProperties>({
			resourceType: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateExperimentTemplateActionInputMap {
	}
	export interface CreateExperimentTemplateActionInputMapFormProperties {
	}
	export function CreateCreateExperimentTemplateActionInputMapFormGroup() {
		return new FormGroup<CreateExperimentTemplateActionInputMapFormProperties>({
		});

	}


	/** Specifies the configuration for experiment logging. */
	export interface CreateExperimentTemplateLogConfigurationInput {
		cloudWatchLogsConfiguration?: ExperimentTemplateCloudWatchLogsLogConfigurationInput;
		s3Configuration?: ExperimentTemplateS3LogConfigurationInput;

		/** Required */
		logSchemaVersion: number;
	}

	/** Specifies the configuration for experiment logging. */
	export interface CreateExperimentTemplateLogConfigurationInputFormProperties {

		/** Required */
		logSchemaVersion: FormControl<number | null | undefined>,
	}
	export function CreateCreateExperimentTemplateLogConfigurationInputFormGroup() {
		return new FormGroup<CreateExperimentTemplateLogConfigurationInputFormProperties>({
			logSchemaVersion: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateExperimentTemplateTargetInputMap {
	}
	export interface CreateExperimentTemplateTargetInputMapFormProperties {
	}
	export function CreateCreateExperimentTemplateTargetInputMapFormGroup() {
		return new FormGroup<CreateExperimentTemplateTargetInputMapFormProperties>({
		});

	}

	export interface CreateExperimentTemplateRequest {

		/** Required */
		clientToken: string;

		/** Required */
		description: string;

		/** Required */
		stopConditions: Array<CreateExperimentTemplateStopConditionInput>;
		targets?: CreateExperimentTemplateTargetInputMap;

		/** Required */
		actions: CreateExperimentTemplateActionInputMap;

		/** Required */
		roleArn: string;
		tags?: TagMap;
		logConfiguration?: CreateExperimentTemplateLogConfigurationInput;
	}
	export interface CreateExperimentTemplateRequestFormProperties {

		/** Required */
		clientToken: FormControl<string | null | undefined>,

		/** Required */
		description: FormControl<string | null | undefined>,

		/** Required */
		roleArn: FormControl<string | null | undefined>,
	}
	export function CreateCreateExperimentTemplateRequestFormGroup() {
		return new FormGroup<CreateExperimentTemplateRequestFormProperties>({
			clientToken: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			description: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			roleArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeleteExperimentTemplateRequest {
	}
	export interface DeleteExperimentTemplateRequestFormProperties {
	}
	export function CreateDeleteExperimentTemplateRequestFormGroup() {
		return new FormGroup<DeleteExperimentTemplateRequestFormProperties>({
		});

	}

	export interface ExperimentActionParameterMap {
	}
	export interface ExperimentActionParameterMapFormProperties {
	}
	export function CreateExperimentActionParameterMapFormGroup() {
		return new FormGroup<ExperimentActionParameterMapFormProperties>({
		});

	}

	export interface ExperimentActionTargetMap {
	}
	export interface ExperimentActionTargetMapFormProperties {
	}
	export function CreateExperimentActionTargetMapFormGroup() {
		return new FormGroup<ExperimentActionTargetMapFormProperties>({
		});

	}


	/** Describes the state of an action. */
	export interface ExperimentActionState {
		status?: ExperimentActionStatus;
		reason?: string;
	}

	/** Describes the state of an action. */
	export interface ExperimentActionStateFormProperties {
		status: FormControl<ExperimentActionStatus | null | undefined>,
		reason: FormControl<string | null | undefined>,
	}
	export function CreateExperimentActionStateFormGroup() {
		return new FormGroup<ExperimentActionStateFormProperties>({
			status: new FormControl<ExperimentActionStatus | null | undefined>(undefined),
			reason: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ExperimentActionStatus { pending = 'pending', initiating = 'initiating', running = 'running', completed = 'completed', cancelled = 'cancelled', stopping = 'stopping', stopped = 'stopped', failed = 'failed' }


	/** Describes the action for an experiment. */
	export interface ExperimentAction {
		actionId?: string;
		description?: string;
		parameters?: ExperimentActionParameterMap;
		targets?: ExperimentActionTargetMap;
		startAfter?: Array<string>;
		state?: ExperimentActionState;
		startTime?: Date;
		endTime?: Date;
	}

	/** Describes the action for an experiment. */
	export interface ExperimentActionFormProperties {
		actionId: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,
		startTime: FormControl<Date | null | undefined>,
		endTime: FormControl<Date | null | undefined>,
	}
	export function CreateExperimentActionFormGroup() {
		return new FormGroup<ExperimentActionFormProperties>({
			actionId: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			startTime: new FormControl<Date | null | undefined>(undefined),
			endTime: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/** Describes a filter used for the target resources in an experiment. */
	export interface ExperimentTargetFilter {
		path?: string;
		values?: Array<string>;
	}

	/** Describes a filter used for the target resources in an experiment. */
	export interface ExperimentTargetFilterFormProperties {
		path: FormControl<string | null | undefined>,
	}
	export function CreateExperimentTargetFilterFormGroup() {
		return new FormGroup<ExperimentTargetFilterFormProperties>({
			path: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ExperimentTargetParameterMap {
	}
	export interface ExperimentTargetParameterMapFormProperties {
	}
	export function CreateExperimentTargetParameterMapFormGroup() {
		return new FormGroup<ExperimentTargetParameterMapFormProperties>({
		});

	}


	/** Describes a target for an experiment. */
	export interface ExperimentTarget {
		resourceType?: string;
		resourceArns?: Array<string>;
		resourceTags?: TagMap;
		filters?: Array<ExperimentTargetFilter>;
		selectionMode?: string;
		parameters?: ExperimentTargetParameterMap;
	}

	/** Describes a target for an experiment. */
	export interface ExperimentTargetFormProperties {
		resourceType: FormControl<string | null | undefined>,
		selectionMode: FormControl<string | null | undefined>,
	}
	export function CreateExperimentTargetFormGroup() {
		return new FormGroup<ExperimentTargetFormProperties>({
			resourceType: new FormControl<string | null | undefined>(undefined),
			selectionMode: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Describes an action for an experiment template. */
	export interface ExperimentTemplateAction {
		actionId?: string;
		description?: string;
		parameters?: ExperimentTemplateActionParameterMap;
		targets?: ExperimentTemplateActionTargetMap;
		startAfter?: Array<string>;
	}

	/** Describes an action for an experiment template. */
	export interface ExperimentTemplateActionFormProperties {
		actionId: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,
	}
	export function CreateExperimentTemplateActionFormGroup() {
		return new FormGroup<ExperimentTemplateActionFormProperties>({
			actionId: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Describes a filter used for the target resources in an experiment template. */
	export interface ExperimentTemplateTargetFilter {
		path?: string;
		values?: Array<string>;
	}

	/** Describes a filter used for the target resources in an experiment template. */
	export interface ExperimentTemplateTargetFilterFormProperties {
		path: FormControl<string | null | undefined>,
	}
	export function CreateExperimentTemplateTargetFilterFormGroup() {
		return new FormGroup<ExperimentTemplateTargetFilterFormProperties>({
			path: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Describes a target for an experiment template. */
	export interface ExperimentTemplateTarget {
		resourceType?: string;
		resourceArns?: Array<string>;
		resourceTags?: TagMap;
		filters?: Array<ExperimentTemplateTargetFilter>;
		selectionMode?: string;
		parameters?: ExperimentTemplateTargetParameterMap;
	}

	/** Describes a target for an experiment template. */
	export interface ExperimentTemplateTargetFormProperties {
		resourceType: FormControl<string | null | undefined>,
		selectionMode: FormControl<string | null | undefined>,
	}
	export function CreateExperimentTemplateTargetFormGroup() {
		return new FormGroup<ExperimentTemplateTargetFormProperties>({
			resourceType: new FormControl<string | null | undefined>(undefined),
			selectionMode: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetActionRequest {
	}
	export interface GetActionRequestFormProperties {
	}
	export function CreateGetActionRequestFormGroup() {
		return new FormGroup<GetActionRequestFormProperties>({
		});

	}

	export interface GetExperimentRequest {
	}
	export interface GetExperimentRequestFormProperties {
	}
	export function CreateGetExperimentRequestFormGroup() {
		return new FormGroup<GetExperimentRequestFormProperties>({
		});

	}

	export interface GetExperimentTemplateRequest {
	}
	export interface GetExperimentTemplateRequestFormProperties {
	}
	export function CreateGetExperimentTemplateRequestFormGroup() {
		return new FormGroup<GetExperimentTemplateRequestFormProperties>({
		});

	}

	export interface GetTargetResourceTypeRequest {
	}
	export interface GetTargetResourceTypeRequestFormProperties {
	}
	export function CreateGetTargetResourceTypeRequestFormGroup() {
		return new FormGroup<GetTargetResourceTypeRequestFormProperties>({
		});

	}

	export interface ListActionsRequest {
	}
	export interface ListActionsRequestFormProperties {
	}
	export function CreateListActionsRequestFormGroup() {
		return new FormGroup<ListActionsRequestFormProperties>({
		});

	}

	export interface ListExperimentTemplatesRequest {
	}
	export interface ListExperimentTemplatesRequestFormProperties {
	}
	export function CreateListExperimentTemplatesRequestFormGroup() {
		return new FormGroup<ListExperimentTemplatesRequestFormProperties>({
		});

	}

	export interface ListExperimentsRequest {
	}
	export interface ListExperimentsRequestFormProperties {
	}
	export function CreateListExperimentsRequestFormGroup() {
		return new FormGroup<ListExperimentsRequestFormProperties>({
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

	export interface ListTargetResourceTypesRequest {
	}
	export interface ListTargetResourceTypesRequestFormProperties {
	}
	export function CreateListTargetResourceTypesRequestFormGroup() {
		return new FormGroup<ListTargetResourceTypesRequestFormProperties>({
		});

	}

	export interface StartExperimentRequest {

		/** Required */
		clientToken: string;

		/** Required */
		experimentTemplateId: string;
		tags?: TagMap;
	}
	export interface StartExperimentRequestFormProperties {

		/** Required */
		clientToken: FormControl<string | null | undefined>,

		/** Required */
		experimentTemplateId: FormControl<string | null | undefined>,
	}
	export function CreateStartExperimentRequestFormGroup() {
		return new FormGroup<StartExperimentRequestFormProperties>({
			clientToken: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			experimentTemplateId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface StopExperimentRequest {
	}
	export interface StopExperimentRequestFormProperties {
	}
	export function CreateStopExperimentRequestFormGroup() {
		return new FormGroup<StopExperimentRequestFormProperties>({
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


	/** Describes the parameters for a resource type. Use parameters to determine which tasks are identified during target resolution. */
	export interface TargetResourceTypeParameter {
		description?: string;
		required?: boolean | null;
	}

	/** Describes the parameters for a resource type. Use parameters to determine which tasks are identified during target resolution. */
	export interface TargetResourceTypeParameterFormProperties {
		description: FormControl<string | null | undefined>,
		required: FormControl<boolean | null | undefined>,
	}
	export function CreateTargetResourceTypeParameterFormGroup() {
		return new FormGroup<TargetResourceTypeParameterFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			required: new FormControl<boolean | null | undefined>(undefined),
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

	export interface UpdateExperimentTemplateActionInputMap {
	}
	export interface UpdateExperimentTemplateActionInputMapFormProperties {
	}
	export function CreateUpdateExperimentTemplateActionInputMapFormGroup() {
		return new FormGroup<UpdateExperimentTemplateActionInputMapFormProperties>({
		});

	}


	/** Specifies the configuration for experiment logging. */
	export interface UpdateExperimentTemplateLogConfigurationInput {
		cloudWatchLogsConfiguration?: ExperimentTemplateCloudWatchLogsLogConfigurationInput;
		s3Configuration?: ExperimentTemplateS3LogConfigurationInput;
		logSchemaVersion?: number | null;
	}

	/** Specifies the configuration for experiment logging. */
	export interface UpdateExperimentTemplateLogConfigurationInputFormProperties {
		logSchemaVersion: FormControl<number | null | undefined>,
	}
	export function CreateUpdateExperimentTemplateLogConfigurationInputFormGroup() {
		return new FormGroup<UpdateExperimentTemplateLogConfigurationInputFormProperties>({
			logSchemaVersion: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface UpdateExperimentTemplateTargetInputMap {
	}
	export interface UpdateExperimentTemplateTargetInputMapFormProperties {
	}
	export function CreateUpdateExperimentTemplateTargetInputMapFormGroup() {
		return new FormGroup<UpdateExperimentTemplateTargetInputMapFormProperties>({
		});

	}

	export interface UpdateExperimentTemplateRequest {
		description?: string;
		stopConditions?: Array<UpdateExperimentTemplateStopConditionInput>;
		targets?: UpdateExperimentTemplateTargetInputMap;
		actions?: UpdateExperimentTemplateActionInputMap;
		roleArn?: string;
		logConfiguration?: UpdateExperimentTemplateLogConfigurationInput;
	}
	export interface UpdateExperimentTemplateRequestFormProperties {
		description: FormControl<string | null | undefined>,
		roleArn: FormControl<string | null | undefined>,
	}
	export function CreateUpdateExperimentTemplateRequestFormGroup() {
		return new FormGroup<UpdateExperimentTemplateRequestFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			roleArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * <p>Creates an experiment template. </p> <p>An experiment template includes the following components:</p> <ul> <li> <p> <b>Targets</b>: A target can be a specific resource in your Amazon Web Services environment, or one or more resources that match criteria that you specify, for example, resources that have specific tags.</p> </li> <li> <p> <b>Actions</b>: The actions to carry out on the target. You can specify multiple actions, the duration of each action, and when to start each action during an experiment.</p> </li> <li> <p> <b>Stop conditions</b>: If a stop condition is triggered while an experiment is running, the experiment is automatically stopped. You can define a stop condition as a CloudWatch alarm.</p> </li> </ul> <p>For more information, see <a href="https://docs.aws.amazon.com/fis/latest/userguide/experiment-templates.html">Experiment templates</a> in the <i>Fault Injection Simulator User Guide</i>.</p>
		 * Post experimentTemplates
		 * @return {CreateExperimentTemplateResponse} Success
		 */
		CreateExperimentTemplate(requestBody: CreateExperimentTemplatePostBody): Observable<CreateExperimentTemplateResponse> {
			return this.http.post<CreateExperimentTemplateResponse>(this.baseUri + 'experimentTemplates', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists your experiment templates.
		 * Get experimentTemplates
		 * @param {number} maxResults The maximum number of results to return with a single call. To retrieve the remaining results, make another call with the returned <code>nextToken</code> value.
		 *     Minimum: 1    Maximum: 100
		 * @param {string} nextToken The token for the next page of results.
		 *     Min length: 1    Max length: 1024
		 * @return {ListExperimentTemplatesResponse} Success
		 */
		ListExperimentTemplates(maxResults: number | null | undefined, nextToken: string | null | undefined): Observable<ListExperimentTemplatesResponse> {
			return this.http.get<ListExperimentTemplatesResponse>(this.baseUri + 'experimentTemplates?maxResults=' + maxResults + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), {});
		}

		/**
		 * Deletes the specified experiment template.
		 * Delete experimentTemplates/{id}
		 * @param {string} id The ID of the experiment template.
		 *     Max length: 64
		 * @return {DeleteExperimentTemplateResponse} Success
		 */
		DeleteExperimentTemplate(id: string): Observable<DeleteExperimentTemplateResponse> {
			return this.http.delete<DeleteExperimentTemplateResponse>(this.baseUri + 'experimentTemplates/' + (id == null ? '' : encodeURIComponent(id)), {});
		}

		/**
		 * Gets information about the specified experiment template.
		 * Get experimentTemplates/{id}
		 * @param {string} id The ID of the experiment template.
		 *     Max length: 64
		 * @return {GetExperimentTemplateResponse} Success
		 */
		GetExperimentTemplate(id: string): Observable<GetExperimentTemplateResponse> {
			return this.http.get<GetExperimentTemplateResponse>(this.baseUri + 'experimentTemplates/' + (id == null ? '' : encodeURIComponent(id)), {});
		}

		/**
		 * Updates the specified experiment template.
		 * Patch experimentTemplates/{id}
		 * @param {string} id The ID of the experiment template.
		 *     Max length: 64
		 * @return {UpdateExperimentTemplateResponse} Success
		 */
		UpdateExperimentTemplate(id: string, requestBody: UpdateExperimentTemplatePatchBody): Observable<UpdateExperimentTemplateResponse> {
			return this.http.patch<UpdateExperimentTemplateResponse>(this.baseUri + 'experimentTemplates/' + (id == null ? '' : encodeURIComponent(id)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets information about the specified FIS action.
		 * Get actions/{id}
		 * @param {string} id The ID of the action.
		 *     Max length: 128
		 * @return {GetActionResponse} Success
		 */
		GetAction(id: string): Observable<GetActionResponse> {
			return this.http.get<GetActionResponse>(this.baseUri + 'actions/' + (id == null ? '' : encodeURIComponent(id)), {});
		}

		/**
		 * Gets information about the specified experiment.
		 * Get experiments/{id}
		 * @param {string} id The ID of the experiment.
		 *     Max length: 64
		 * @return {GetExperimentResponse} Success
		 */
		GetExperiment(id: string): Observable<GetExperimentResponse> {
			return this.http.get<GetExperimentResponse>(this.baseUri + 'experiments/' + (id == null ? '' : encodeURIComponent(id)), {});
		}

		/**
		 * Stops the specified experiment.
		 * Delete experiments/{id}
		 * @param {string} id The ID of the experiment.
		 *     Max length: 64
		 * @return {StopExperimentResponse} Success
		 */
		StopExperiment(id: string): Observable<StopExperimentResponse> {
			return this.http.delete<StopExperimentResponse>(this.baseUri + 'experiments/' + (id == null ? '' : encodeURIComponent(id)), {});
		}

		/**
		 * Gets information about the specified resource type.
		 * Get targetResourceTypes/{resourceType}
		 * @param {string} resourceType The resource type.
		 *     Max length: 128
		 * @return {GetTargetResourceTypeResponse} Success
		 */
		GetTargetResourceType(resourceType: string): Observable<GetTargetResourceTypeResponse> {
			return this.http.get<GetTargetResourceTypeResponse>(this.baseUri + 'targetResourceTypes/' + (resourceType == null ? '' : encodeURIComponent(resourceType)), {});
		}

		/**
		 * Lists the available FIS actions.
		 * Get actions
		 * @param {number} maxResults The maximum number of results to return with a single call. To retrieve the remaining results, make another call with the returned <code>nextToken</code> value.
		 *     Minimum: 1    Maximum: 100
		 * @param {string} nextToken The token for the next page of results.
		 *     Min length: 1    Max length: 1024
		 * @return {ListActionsResponse} Success
		 */
		ListActions(maxResults: number | null | undefined, nextToken: string | null | undefined): Observable<ListActionsResponse> {
			return this.http.get<ListActionsResponse>(this.baseUri + 'actions?maxResults=' + maxResults + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), {});
		}

		/**
		 * Lists your experiments.
		 * Get experiments
		 * @param {number} maxResults The maximum number of results to return with a single call. To retrieve the remaining results, make another call with the returned <code>nextToken</code> value.
		 *     Minimum: 1    Maximum: 100
		 * @param {string} nextToken The token for the next page of results.
		 *     Min length: 1    Max length: 1024
		 * @return {ListExperimentsResponse} Success
		 */
		ListExperiments(maxResults: number | null | undefined, nextToken: string | null | undefined): Observable<ListExperimentsResponse> {
			return this.http.get<ListExperimentsResponse>(this.baseUri + 'experiments?maxResults=' + maxResults + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), {});
		}

		/**
		 * Starts running an experiment from the specified experiment template.
		 * Post experiments
		 * @return {StartExperimentResponse} Success
		 */
		StartExperiment(requestBody: StartExperimentPostBody): Observable<StartExperimentResponse> {
			return this.http.post<StartExperimentResponse>(this.baseUri + 'experiments', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists the tags for the specified resource.
		 * Get tags/{resourceArn}
		 * @param {string} resourceArn The Amazon Resource Name (ARN) of the resource.
		 *     Min length: 20    Max length: 2048
		 * @return {ListTagsForResourceResponse} Success
		 */
		ListTagsForResource(resourceArn: string): Observable<ListTagsForResourceResponse> {
			return this.http.get<ListTagsForResourceResponse>(this.baseUri + 'tags/' + (resourceArn == null ? '' : encodeURIComponent(resourceArn)), {});
		}

		/**
		 * Applies the specified tags to the specified resource.
		 * Post tags/{resourceArn}
		 * @param {string} resourceArn The Amazon Resource Name (ARN) of the resource.
		 *     Min length: 20    Max length: 2048
		 * @return {TagResourceResponse} Success
		 */
		TagResource(resourceArn: string, requestBody: TagResourcePostBody): Observable<TagResourceResponse> {
			return this.http.post<TagResourceResponse>(this.baseUri + 'tags/' + (resourceArn == null ? '' : encodeURIComponent(resourceArn)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Removes the specified tags from the specified resource.
		 * Delete tags/{resourceArn}
		 * @param {string} resourceArn The Amazon Resource Name (ARN) of the resource.
		 *     Min length: 20    Max length: 2048
		 * @param {Array<string>} tagKeys The tag keys to remove.
		 * @return {UntagResourceResponse} Success
		 */
		UntagResource(resourceArn: string, tagKeys: Array<string> | null | undefined): Observable<UntagResourceResponse> {
			return this.http.delete<UntagResourceResponse>(this.baseUri + 'tags/' + (resourceArn == null ? '' : encodeURIComponent(resourceArn)) + '&' + tagKeys?.map(z => `tagKeys=${encodeURIComponent(z)}`).join('&'), {});
		}

		/**
		 * Lists the target resource types.
		 * Get targetResourceTypes
		 * @param {number} maxResults The maximum number of results to return with a single call. To retrieve the remaining results, make another call with the returned <code>nextToken</code> value.
		 *     Minimum: 1    Maximum: 100
		 * @param {string} nextToken The token for the next page of results.
		 *     Min length: 1    Max length: 1024
		 * @return {ListTargetResourceTypesResponse} Success
		 */
		ListTargetResourceTypes(maxResults: number | null | undefined, nextToken: string | null | undefined): Observable<ListTargetResourceTypesResponse> {
			return this.http.get<ListTargetResourceTypesResponse>(this.baseUri + 'targetResourceTypes?maxResults=' + maxResults + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), {});
		}
	}

	export interface CreateExperimentTemplatePostBody {

		/**
		 * Unique, case-sensitive identifier that you provide to ensure the idempotency of the request.
		 * Required
		 * Min length: 1
		 * Max length: 1024
		 */
		clientToken: string;

		/**
		 * A description for the experiment template.
		 * Required
		 * Max length: 512
		 */
		description: string;

		/**
		 * The stop conditions.
		 * Required
		 */
		stopConditions: Array<CreateExperimentTemplateStopConditionInput>;

		/** The targets for the experiment. */
		targets?: {[id: string]: CreateExperimentTemplateTargetInput };

		/**
		 * The actions for the experiment.
		 * Required
		 */
		actions: {[id: string]: CreateExperimentTemplateActionInput };

		/**
		 * The Amazon Resource Name (ARN) of an IAM role that grants the FIS service permission to perform service actions on your behalf.
		 * Required
		 * Min length: 20
		 * Max length: 2048
		 */
		roleArn: string;

		/** The tags to apply to the experiment template. */
		tags?: {[id: string]: string };

		/** Specifies the configuration for experiment logging. */
		logConfiguration?: CreateExperimentTemplatePostBodyLogConfiguration;
	}
	export interface CreateExperimentTemplatePostBodyFormProperties {

		/**
		 * Unique, case-sensitive identifier that you provide to ensure the idempotency of the request.
		 * Required
		 * Min length: 1
		 * Max length: 1024
		 */
		clientToken: FormControl<string | null | undefined>,

		/**
		 * A description for the experiment template.
		 * Required
		 * Max length: 512
		 */
		description: FormControl<string | null | undefined>,

		/** The targets for the experiment. */
		targets: FormControl<{[id: string]: CreateExperimentTemplateTargetInput } | null | undefined>,

		/**
		 * The actions for the experiment.
		 * Required
		 */
		actions: FormControl<{[id: string]: CreateExperimentTemplateActionInput } | null | undefined>,

		/**
		 * The Amazon Resource Name (ARN) of an IAM role that grants the FIS service permission to perform service actions on your behalf.
		 * Required
		 * Min length: 20
		 * Max length: 2048
		 */
		roleArn: FormControl<string | null | undefined>,

		/** The tags to apply to the experiment template. */
		tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateCreateExperimentTemplatePostBodyFormGroup() {
		return new FormGroup<CreateExperimentTemplatePostBodyFormProperties>({
			clientToken: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(1024), Validators.pattern('[\S]+')]),
			description: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(512), Validators.pattern('[\s\S]+')]),
			targets: new FormControl<{[id: string]: CreateExperimentTemplateTargetInput } | null | undefined>(undefined),
			actions: new FormControl<{[id: string]: CreateExperimentTemplateActionInput } | null | undefined>(undefined, [Validators.required]),
			roleArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(20), Validators.maxLength(2048), Validators.pattern('[\S]+')]),
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}

	export interface CreateExperimentTemplatePostBodyLogConfiguration {
		cloudWatchLogsConfiguration?: ExperimentTemplateCloudWatchLogsLogConfigurationInput;
		s3Configuration?: ExperimentTemplateS3LogConfigurationInput;
		logSchemaVersion?: number | null;
	}
	export interface CreateExperimentTemplatePostBodyLogConfigurationFormProperties {
		logSchemaVersion: FormControl<number | null | undefined>,
	}
	export function CreateCreateExperimentTemplatePostBodyLogConfigurationFormGroup() {
		return new FormGroup<CreateExperimentTemplatePostBodyLogConfigurationFormProperties>({
			logSchemaVersion: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface UpdateExperimentTemplatePatchBody {

		/**
		 * A description for the template.
		 * Max length: 512
		 */
		description?: string | null;

		/** The stop conditions for the experiment. */
		stopConditions?: Array<UpdateExperimentTemplateStopConditionInput>;

		/** The targets for the experiment. */
		targets?: {[id: string]: UpdateExperimentTemplateTargetInput };

		/** The actions for the experiment. */
		actions?: {[id: string]: UpdateExperimentTemplateActionInputItem };

		/**
		 * The Amazon Resource Name (ARN) of an IAM role that grants the FIS service permission to perform service actions on your behalf.
		 * Min length: 20
		 * Max length: 2048
		 */
		roleArn?: string | null;

		/** Specifies the configuration for experiment logging. */
		logConfiguration?: UpdateExperimentTemplatePatchBodyLogConfiguration;
	}
	export interface UpdateExperimentTemplatePatchBodyFormProperties {

		/**
		 * A description for the template.
		 * Max length: 512
		 */
		description: FormControl<string | null | undefined>,

		/** The targets for the experiment. */
		targets: FormControl<{[id: string]: UpdateExperimentTemplateTargetInput } | null | undefined>,

		/** The actions for the experiment. */
		actions: FormControl<{[id: string]: UpdateExperimentTemplateActionInputItem } | null | undefined>,

		/**
		 * The Amazon Resource Name (ARN) of an IAM role that grants the FIS service permission to perform service actions on your behalf.
		 * Min length: 20
		 * Max length: 2048
		 */
		roleArn: FormControl<string | null | undefined>,
	}
	export function CreateUpdateExperimentTemplatePatchBodyFormGroup() {
		return new FormGroup<UpdateExperimentTemplatePatchBodyFormProperties>({
			description: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(512), Validators.pattern('[\s\S]+')]),
			targets: new FormControl<{[id: string]: UpdateExperimentTemplateTargetInput } | null | undefined>(undefined),
			actions: new FormControl<{[id: string]: UpdateExperimentTemplateActionInputItem } | null | undefined>(undefined),
			roleArn: new FormControl<string | null | undefined>(undefined, [Validators.minLength(20), Validators.maxLength(2048), Validators.pattern('[\S]+')]),
		});

	}

	export interface UpdateExperimentTemplatePatchBodyLogConfiguration {
		cloudWatchLogsConfiguration?: ExperimentTemplateCloudWatchLogsLogConfigurationInput;
		s3Configuration?: ExperimentTemplateS3LogConfigurationInput;
		logSchemaVersion?: number | null;
	}
	export interface UpdateExperimentTemplatePatchBodyLogConfigurationFormProperties {
		logSchemaVersion: FormControl<number | null | undefined>,
	}
	export function CreateUpdateExperimentTemplatePatchBodyLogConfigurationFormGroup() {
		return new FormGroup<UpdateExperimentTemplatePatchBodyLogConfigurationFormProperties>({
			logSchemaVersion: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface StartExperimentPostBody {

		/**
		 * Unique, case-sensitive identifier that you provide to ensure the idempotency of the request.
		 * Required
		 * Min length: 1
		 * Max length: 1024
		 */
		clientToken: string;

		/**
		 * The ID of the experiment template.
		 * Required
		 * Max length: 64
		 */
		experimentTemplateId: string;

		/** The tags to apply to the experiment. */
		tags?: {[id: string]: string };
	}
	export interface StartExperimentPostBodyFormProperties {

		/**
		 * Unique, case-sensitive identifier that you provide to ensure the idempotency of the request.
		 * Required
		 * Min length: 1
		 * Max length: 1024
		 */
		clientToken: FormControl<string | null | undefined>,

		/**
		 * The ID of the experiment template.
		 * Required
		 * Max length: 64
		 */
		experimentTemplateId: FormControl<string | null | undefined>,

		/** The tags to apply to the experiment. */
		tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateStartExperimentPostBodyFormGroup() {
		return new FormGroup<StartExperimentPostBodyFormProperties>({
			clientToken: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(1024), Validators.pattern('[\S]+')]),
			experimentTemplateId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(64), Validators.pattern('[\S]+')]),
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}

	export interface TagResourcePostBody {

		/**
		 * The tags for the resource.
		 * Required
		 */
		tags: {[id: string]: string };
	}
	export interface TagResourcePostBodyFormProperties {

		/**
		 * The tags for the resource.
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

