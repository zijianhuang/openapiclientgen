import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface BatchEvaluateFeatureResponse {
		results?: Array<EvaluationResult>;
	}
	export interface BatchEvaluateFeatureResponseFormProperties {
	}
	export function CreateBatchEvaluateFeatureResponseFormGroup() {
		return new FormGroup<BatchEvaluateFeatureResponseFormProperties>({
		});

	}


	/** This structure displays the results of one feature evaluation assignment to one user session. */
	export interface EvaluationResult {
		details?: string;

		/** Required */
		entityId: string;

		/** Required */
		feature: string;
		project?: string;
		reason?: string;
		value?: VariableValue;
		variation?: string;
	}

	/** This structure displays the results of one feature evaluation assignment to one user session. */
	export interface EvaluationResultFormProperties {
		details: FormControl<string | null | undefined>,

		/** Required */
		entityId: FormControl<string | null | undefined>,

		/** Required */
		feature: FormControl<string | null | undefined>,
		project: FormControl<string | null | undefined>,
		reason: FormControl<string | null | undefined>,
		variation: FormControl<string | null | undefined>,
	}
	export function CreateEvaluationResultFormGroup() {
		return new FormGroup<EvaluationResultFormProperties>({
			details: new FormControl<string | null | undefined>(undefined),
			entityId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			feature: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			project: new FormControl<string | null | undefined>(undefined),
			reason: new FormControl<string | null | undefined>(undefined),
			variation: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The value assigned to a feature variation. This structure must contain exactly one field. It can be <code>boolValue</code>, <code>doubleValue</code>, <code>longValue</code>, or <code>stringValue</code>. */
	export interface VariableValue {
		boolValue?: boolean | null;
		doubleValue?: number | null;
		longValue?: number | null;
		stringValue?: string;
	}

	/** The value assigned to a feature variation. This structure must contain exactly one field. It can be <code>boolValue</code>, <code>doubleValue</code>, <code>longValue</code>, or <code>stringValue</code>. */
	export interface VariableValueFormProperties {
		boolValue: FormControl<boolean | null | undefined>,
		doubleValue: FormControl<number | null | undefined>,
		longValue: FormControl<number | null | undefined>,
		stringValue: FormControl<string | null | undefined>,
	}
	export function CreateVariableValueFormGroup() {
		return new FormGroup<VariableValueFormProperties>({
			boolValue: new FormControl<boolean | null | undefined>(undefined),
			doubleValue: new FormControl<number | null | undefined>(undefined),
			longValue: new FormControl<number | null | undefined>(undefined),
			stringValue: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** This structure assigns a feature variation to one user session. */
	export interface EvaluationRequest {

		/** Required */
		entityId: string;
		evaluationContext?: string;

		/** Required */
		feature: string;
	}

	/** This structure assigns a feature variation to one user session. */
	export interface EvaluationRequestFormProperties {

		/** Required */
		entityId: FormControl<string | null | undefined>,
		evaluationContext: FormControl<string | null | undefined>,

		/** Required */
		feature: FormControl<string | null | undefined>,
	}
	export function CreateEvaluationRequestFormGroup() {
		return new FormGroup<EvaluationRequestFormProperties>({
			entityId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			evaluationContext: new FormControl<string | null | undefined>(undefined),
			feature: new FormControl<string | null | undefined>(undefined, [Validators.required]),
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

	export interface ValidationException {
	}
	export interface ValidationExceptionFormProperties {
	}
	export function CreateValidationExceptionFormGroup() {
		return new FormGroup<ValidationExceptionFormProperties>({
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

	export interface AccessDeniedException {
	}
	export interface AccessDeniedExceptionFormProperties {
	}
	export function CreateAccessDeniedExceptionFormGroup() {
		return new FormGroup<AccessDeniedExceptionFormProperties>({
		});

	}

	export interface CreateExperimentResponse {

		/** Required */
		experiment: Experiment;
	}
	export interface CreateExperimentResponseFormProperties {
	}
	export function CreateCreateExperimentResponseFormGroup() {
		return new FormGroup<CreateExperimentResponseFormProperties>({
		});

	}


	/** A structure containing the configuration details of an experiment. */
	export interface Experiment {

		/** Required */
		arn: string;

		/** Required */
		createdTime: Date;
		description?: string;
		execution?: ExperimentExecution;

		/** Required */
		lastUpdatedTime: Date;
		metricGoals?: Array<MetricGoal>;

		/** Required */
		name: string;
		onlineAbDefinition?: OnlineAbDefinition;
		project?: string;
		randomizationSalt?: string;
		samplingRate?: number | null;
		schedule?: ExperimentSchedule;
		segment?: string;

		/** Required */
		status: ExperimentStatus;
		statusReason?: string;
		tags?: TagMap;
		treatments?: Array<Treatment>;

		/** Required */
		type: ExperimentType;
	}

	/** A structure containing the configuration details of an experiment. */
	export interface ExperimentFormProperties {

		/** Required */
		arn: FormControl<string | null | undefined>,

		/** Required */
		createdTime: FormControl<Date | null | undefined>,
		description: FormControl<string | null | undefined>,

		/** Required */
		lastUpdatedTime: FormControl<Date | null | undefined>,

		/** Required */
		name: FormControl<string | null | undefined>,
		project: FormControl<string | null | undefined>,
		randomizationSalt: FormControl<string | null | undefined>,
		samplingRate: FormControl<number | null | undefined>,
		segment: FormControl<string | null | undefined>,

		/** Required */
		status: FormControl<ExperimentStatus | null | undefined>,
		statusReason: FormControl<string | null | undefined>,

		/** Required */
		type: FormControl<ExperimentType | null | undefined>,
	}
	export function CreateExperimentFormGroup() {
		return new FormGroup<ExperimentFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			createdTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			description: new FormControl<string | null | undefined>(undefined),
			lastUpdatedTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			project: new FormControl<string | null | undefined>(undefined),
			randomizationSalt: new FormControl<string | null | undefined>(undefined),
			samplingRate: new FormControl<number | null | undefined>(undefined),
			segment: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<ExperimentStatus | null | undefined>(undefined, [Validators.required]),
			statusReason: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<ExperimentType | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** This structure contains the date and time that the experiment started and ended. */
	export interface ExperimentExecution {
		endedTime?: Date;
		startedTime?: Date;
	}

	/** This structure contains the date and time that the experiment started and ended. */
	export interface ExperimentExecutionFormProperties {
		endedTime: FormControl<Date | null | undefined>,
		startedTime: FormControl<Date | null | undefined>,
	}
	export function CreateExperimentExecutionFormGroup() {
		return new FormGroup<ExperimentExecutionFormProperties>({
			endedTime: new FormControl<Date | null | undefined>(undefined),
			startedTime: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/** A structure that tells Evidently whether higher or lower values are desired for a metric that is used in an experiment. */
	export interface MetricGoal {
		desiredChange?: ChangeDirectionEnum;

		/** Required */
		metricDefinition: MetricDefinition;
	}

	/** A structure that tells Evidently whether higher or lower values are desired for a metric that is used in an experiment. */
	export interface MetricGoalFormProperties {
		desiredChange: FormControl<ChangeDirectionEnum | null | undefined>,
	}
	export function CreateMetricGoalFormGroup() {
		return new FormGroup<MetricGoalFormProperties>({
			desiredChange: new FormControl<ChangeDirectionEnum | null | undefined>(undefined),
		});

	}

	export enum ChangeDirectionEnum { INCREASE = 'INCREASE', DECREASE = 'DECREASE' }


	/** This structure defines a metric that is being used to evaluate the variations during a launch or experiment. */
	export interface MetricDefinition {
		entityIdKey?: string;
		eventPattern?: string;
		name?: string;
		unitLabel?: string;
		valueKey?: string;
	}

	/** This structure defines a metric that is being used to evaluate the variations during a launch or experiment. */
	export interface MetricDefinitionFormProperties {
		entityIdKey: FormControl<string | null | undefined>,
		eventPattern: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		unitLabel: FormControl<string | null | undefined>,
		valueKey: FormControl<string | null | undefined>,
	}
	export function CreateMetricDefinitionFormGroup() {
		return new FormGroup<MetricDefinitionFormProperties>({
			entityIdKey: new FormControl<string | null | undefined>(undefined),
			eventPattern: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			unitLabel: new FormControl<string | null | undefined>(undefined),
			valueKey: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A structure that contains the configuration of which variation to use as the "control" version. The "control" version is used for comparison with other variations. This structure also specifies how much experiment traffic is allocated to each variation. */
	export interface OnlineAbDefinition {
		controlTreatmentName?: string;
		treatmentWeights?: TreatmentToWeightMap;
	}

	/** A structure that contains the configuration of which variation to use as the "control" version. The "control" version is used for comparison with other variations. This structure also specifies how much experiment traffic is allocated to each variation. */
	export interface OnlineAbDefinitionFormProperties {
		controlTreatmentName: FormControl<string | null | undefined>,
	}
	export function CreateOnlineAbDefinitionFormGroup() {
		return new FormGroup<OnlineAbDefinitionFormProperties>({
			controlTreatmentName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface TreatmentToWeightMap {
	}
	export interface TreatmentToWeightMapFormProperties {
	}
	export function CreateTreatmentToWeightMapFormGroup() {
		return new FormGroup<TreatmentToWeightMapFormProperties>({
		});

	}


	/** This structure contains the time and date that Evidently completed the analysis of the experiment. */
	export interface ExperimentSchedule {
		analysisCompleteTime?: Date;
	}

	/** This structure contains the time and date that Evidently completed the analysis of the experiment. */
	export interface ExperimentScheduleFormProperties {
		analysisCompleteTime: FormControl<Date | null | undefined>,
	}
	export function CreateExperimentScheduleFormGroup() {
		return new FormGroup<ExperimentScheduleFormProperties>({
			analysisCompleteTime: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export enum ExperimentStatus { CREATED = 'CREATED', UPDATING = 'UPDATING', RUNNING = 'RUNNING', COMPLETED = 'COMPLETED', CANCELLED = 'CANCELLED' }

	export interface TagMap {
	}
	export interface TagMapFormProperties {
	}
	export function CreateTagMapFormGroup() {
		return new FormGroup<TagMapFormProperties>({
		});

	}


	/** A structure that defines one treatment in an experiment. A treatment is a variation of the feature that you are including in the experiment. */
	export interface Treatment {
		description?: string;
		featureVariations?: FeatureToVariationMap;

		/** Required */
		name: string;
	}

	/** A structure that defines one treatment in an experiment. A treatment is a variation of the feature that you are including in the experiment. */
	export interface TreatmentFormProperties {
		description: FormControl<string | null | undefined>,

		/** Required */
		name: FormControl<string | null | undefined>,
	}
	export function CreateTreatmentFormGroup() {
		return new FormGroup<TreatmentFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface FeatureToVariationMap {
	}
	export interface FeatureToVariationMapFormProperties {
	}
	export function CreateFeatureToVariationMapFormGroup() {
		return new FormGroup<FeatureToVariationMapFormProperties>({
		});

	}

	export enum ExperimentType { 'aws.evidently.onlineab' = 'aws.evidently.onlineab' }


	/** Use this structure to tell Evidently whether higher or lower values are desired for a metric that is used in an experiment. */
	export interface MetricGoalConfig {
		desiredChange?: ChangeDirectionEnum;

		/** Required */
		metricDefinition: MetricDefinitionConfig;
	}

	/** Use this structure to tell Evidently whether higher or lower values are desired for a metric that is used in an experiment. */
	export interface MetricGoalConfigFormProperties {
		desiredChange: FormControl<ChangeDirectionEnum | null | undefined>,
	}
	export function CreateMetricGoalConfigFormGroup() {
		return new FormGroup<MetricGoalConfigFormProperties>({
			desiredChange: new FormControl<ChangeDirectionEnum | null | undefined>(undefined),
		});

	}


	/** This structure defines a metric that you want to use to evaluate the variations during a launch or experiment. */
	export interface MetricDefinitionConfig {

		/** Required */
		entityIdKey: string;
		eventPattern?: string;

		/** Required */
		name: string;
		unitLabel?: string;

		/** Required */
		valueKey: string;
	}

	/** This structure defines a metric that you want to use to evaluate the variations during a launch or experiment. */
	export interface MetricDefinitionConfigFormProperties {

		/** Required */
		entityIdKey: FormControl<string | null | undefined>,
		eventPattern: FormControl<string | null | undefined>,

		/** Required */
		name: FormControl<string | null | undefined>,
		unitLabel: FormControl<string | null | undefined>,

		/** Required */
		valueKey: FormControl<string | null | undefined>,
	}
	export function CreateMetricDefinitionConfigFormGroup() {
		return new FormGroup<MetricDefinitionConfigFormProperties>({
			entityIdKey: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			eventPattern: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			unitLabel: new FormControl<string | null | undefined>(undefined),
			valueKey: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** A structure that defines one treatment in an experiment. A treatment is a variation of the feature that you are including in the experiment. */
	export interface TreatmentConfig {
		description?: string;

		/** Required */
		feature: string;

		/** Required */
		name: string;

		/** Required */
		variation: string;
	}

	/** A structure that defines one treatment in an experiment. A treatment is a variation of the feature that you are including in the experiment. */
	export interface TreatmentConfigFormProperties {
		description: FormControl<string | null | undefined>,

		/** Required */
		feature: FormControl<string | null | undefined>,

		/** Required */
		name: FormControl<string | null | undefined>,

		/** Required */
		variation: FormControl<string | null | undefined>,
	}
	export function CreateTreatmentConfigFormGroup() {
		return new FormGroup<TreatmentConfigFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			feature: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			variation: new FormControl<string | null | undefined>(undefined, [Validators.required]),
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

	export interface ServiceQuotaExceededException {
	}
	export interface ServiceQuotaExceededExceptionFormProperties {
	}
	export function CreateServiceQuotaExceededExceptionFormGroup() {
		return new FormGroup<ServiceQuotaExceededExceptionFormProperties>({
		});

	}

	export interface CreateFeatureResponse {
		feature?: Feature;
	}
	export interface CreateFeatureResponseFormProperties {
	}
	export function CreateCreateFeatureResponseFormGroup() {
		return new FormGroup<CreateFeatureResponseFormProperties>({
		});

	}


	/** This structure contains information about one Evidently feature in your account. */
	export interface Feature {

		/** Required */
		arn: string;

		/** Required */
		createdTime: Date;
		defaultVariation?: string;
		description?: string;
		entityOverrides?: EntityOverrideMap;
		evaluationRules?: Array<EvaluationRule>;

		/** Required */
		evaluationStrategy: FeatureEvaluationStrategy;

		/** Required */
		lastUpdatedTime: Date;

		/** Required */
		name: string;
		project?: string;

		/** Required */
		status: FeatureStatus;
		tags?: TagMap;

		/** Required */
		valueType: VariationValueType;

		/** Required */
		variations: Array<Variation>;
	}

	/** This structure contains information about one Evidently feature in your account. */
	export interface FeatureFormProperties {

		/** Required */
		arn: FormControl<string | null | undefined>,

		/** Required */
		createdTime: FormControl<Date | null | undefined>,
		defaultVariation: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,

		/** Required */
		evaluationStrategy: FormControl<FeatureEvaluationStrategy | null | undefined>,

		/** Required */
		lastUpdatedTime: FormControl<Date | null | undefined>,

		/** Required */
		name: FormControl<string | null | undefined>,
		project: FormControl<string | null | undefined>,

		/** Required */
		status: FormControl<FeatureStatus | null | undefined>,

		/** Required */
		valueType: FormControl<VariationValueType | null | undefined>,
	}
	export function CreateFeatureFormGroup() {
		return new FormGroup<FeatureFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			createdTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			defaultVariation: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			evaluationStrategy: new FormControl<FeatureEvaluationStrategy | null | undefined>(undefined, [Validators.required]),
			lastUpdatedTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			project: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<FeatureStatus | null | undefined>(undefined, [Validators.required]),
			valueType: new FormControl<VariationValueType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface EntityOverrideMap {
	}
	export interface EntityOverrideMapFormProperties {
	}
	export function CreateEntityOverrideMapFormGroup() {
		return new FormGroup<EntityOverrideMapFormProperties>({
		});

	}


	/** A structure that contains the information about an evaluation rule for this feature, if it is used in a launch or experiment. */
	export interface EvaluationRule {
		name?: string;

		/** Required */
		type: string;
	}

	/** A structure that contains the information about an evaluation rule for this feature, if it is used in a launch or experiment. */
	export interface EvaluationRuleFormProperties {
		name: FormControl<string | null | undefined>,

		/** Required */
		type: FormControl<string | null | undefined>,
	}
	export function CreateEvaluationRuleFormGroup() {
		return new FormGroup<EvaluationRuleFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum FeatureEvaluationStrategy { ALL_RULES = 'ALL_RULES', DEFAULT_VARIATION = 'DEFAULT_VARIATION' }

	export enum FeatureStatus { AVAILABLE = 'AVAILABLE', UPDATING = 'UPDATING' }

	export enum VariationValueType { STRING = 'STRING', LONG = 'LONG', DOUBLE = 'DOUBLE', BOOLEAN = 'BOOLEAN' }


	/** This structure contains the name and variation value of one variation of a feature. */
	export interface Variation {
		name?: string;
		value?: VariableValue;
	}

	/** This structure contains the name and variation value of one variation of a feature. */
	export interface VariationFormProperties {
		name: FormControl<string | null | undefined>,
	}
	export function CreateVariationFormGroup() {
		return new FormGroup<VariationFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** This structure contains the name and variation value of one variation of a feature. */
	export interface VariationConfig {

		/** Required */
		name: string;

		/** Required */
		value: VariableValue;
	}

	/** This structure contains the name and variation value of one variation of a feature. */
	export interface VariationConfigFormProperties {

		/** Required */
		name: FormControl<string | null | undefined>,
	}
	export function CreateVariationConfigFormGroup() {
		return new FormGroup<VariationConfigFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateLaunchResponse {

		/** Required */
		launch: Launch;
	}
	export interface CreateLaunchResponseFormProperties {
	}
	export function CreateCreateLaunchResponseFormGroup() {
		return new FormGroup<CreateLaunchResponseFormProperties>({
		});

	}


	/** This structure contains the configuration details of one Evidently launch. */
	export interface Launch {

		/** Required */
		arn: string;

		/** Required */
		createdTime: Date;
		description?: string;
		execution?: LaunchExecution;
		groups?: Array<LaunchGroup>;

		/** Required */
		lastUpdatedTime: Date;
		metricMonitors?: Array<MetricMonitor>;

		/** Required */
		name: string;
		project?: string;
		randomizationSalt?: string;
		scheduledSplitsDefinition?: ScheduledSplitsLaunchDefinition;

		/** Required */
		status: ExperimentStatus;
		statusReason?: string;
		tags?: TagMap;

		/** Required */
		type: LaunchType;
	}

	/** This structure contains the configuration details of one Evidently launch. */
	export interface LaunchFormProperties {

		/** Required */
		arn: FormControl<string | null | undefined>,

		/** Required */
		createdTime: FormControl<Date | null | undefined>,
		description: FormControl<string | null | undefined>,

		/** Required */
		lastUpdatedTime: FormControl<Date | null | undefined>,

		/** Required */
		name: FormControl<string | null | undefined>,
		project: FormControl<string | null | undefined>,
		randomizationSalt: FormControl<string | null | undefined>,

		/** Required */
		status: FormControl<ExperimentStatus | null | undefined>,
		statusReason: FormControl<string | null | undefined>,

		/** Required */
		type: FormControl<LaunchType | null | undefined>,
	}
	export function CreateLaunchFormGroup() {
		return new FormGroup<LaunchFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			createdTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			description: new FormControl<string | null | undefined>(undefined),
			lastUpdatedTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			project: new FormControl<string | null | undefined>(undefined),
			randomizationSalt: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<ExperimentStatus | null | undefined>(undefined, [Validators.required]),
			statusReason: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<LaunchType | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** This structure contains information about the start and end times of the launch. */
	export interface LaunchExecution {
		endedTime?: Date;
		startedTime?: Date;
	}

	/** This structure contains information about the start and end times of the launch. */
	export interface LaunchExecutionFormProperties {
		endedTime: FormControl<Date | null | undefined>,
		startedTime: FormControl<Date | null | undefined>,
	}
	export function CreateLaunchExecutionFormGroup() {
		return new FormGroup<LaunchExecutionFormProperties>({
			endedTime: new FormControl<Date | null | undefined>(undefined),
			startedTime: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/** A structure that defines one launch group in a launch. A launch group is a variation of the feature that you are including in the launch. */
	export interface LaunchGroup {
		description?: string;

		/** Required */
		featureVariations: FeatureToVariationMap;

		/** Required */
		name: string;
	}

	/** A structure that defines one launch group in a launch. A launch group is a variation of the feature that you are including in the launch. */
	export interface LaunchGroupFormProperties {
		description: FormControl<string | null | undefined>,

		/** Required */
		name: FormControl<string | null | undefined>,
	}
	export function CreateLaunchGroupFormGroup() {
		return new FormGroup<LaunchGroupFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** A structure that defines a metric to be used to monitor performance of the variations during a launch. */
	export interface MetricMonitor {

		/** Required */
		metricDefinition: MetricDefinition;
	}

	/** A structure that defines a metric to be used to monitor performance of the variations during a launch. */
	export interface MetricMonitorFormProperties {
	}
	export function CreateMetricMonitorFormGroup() {
		return new FormGroup<MetricMonitorFormProperties>({
		});

	}


	/** An array of structures that define the traffic allocation percentages among the feature variations during each step of a launch. This also defines the start time of each step. */
	export interface ScheduledSplitsLaunchDefinition {
		steps?: Array<ScheduledSplit>;
	}

	/** An array of structures that define the traffic allocation percentages among the feature variations during each step of a launch. This also defines the start time of each step. */
	export interface ScheduledSplitsLaunchDefinitionFormProperties {
	}
	export function CreateScheduledSplitsLaunchDefinitionFormGroup() {
		return new FormGroup<ScheduledSplitsLaunchDefinitionFormProperties>({
		});

	}


	/** This structure defines the traffic allocation percentages among the feature variations during one step of a launch, and the start time of that step. */
	export interface ScheduledSplit {
		groupWeights?: GroupToWeightMap;
		segmentOverrides?: Array<SegmentOverride>;

		/** Required */
		startTime: Date;
	}

	/** This structure defines the traffic allocation percentages among the feature variations during one step of a launch, and the start time of that step. */
	export interface ScheduledSplitFormProperties {

		/** Required */
		startTime: FormControl<Date | null | undefined>,
	}
	export function CreateScheduledSplitFormGroup() {
		return new FormGroup<ScheduledSplitFormProperties>({
			startTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GroupToWeightMap {
	}
	export interface GroupToWeightMapFormProperties {
	}
	export function CreateGroupToWeightMapFormGroup() {
		return new FormGroup<GroupToWeightMapFormProperties>({
		});

	}


	/** This structure specifies a segment that you have already created, and defines the traffic split for that segment to be used in a launch. */
	export interface SegmentOverride {

		/** Required */
		evaluationOrder: number;

		/** Required */
		segment: string;

		/** Required */
		weights: GroupToWeightMap;
	}

	/** This structure specifies a segment that you have already created, and defines the traffic split for that segment to be used in a launch. */
	export interface SegmentOverrideFormProperties {

		/** Required */
		evaluationOrder: FormControl<number | null | undefined>,

		/** Required */
		segment: FormControl<string | null | undefined>,
	}
	export function CreateSegmentOverrideFormGroup() {
		return new FormGroup<SegmentOverrideFormProperties>({
			evaluationOrder: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			segment: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum LaunchType { 'aws.evidently.splits' = 'aws.evidently.splits' }


	/** A structure that defines one launch group in a launch. A launch group is a variation of the feature that you are including in the launch. */
	export interface LaunchGroupConfig {
		description?: string;

		/** Required */
		feature: string;

		/** Required */
		name: string;

		/** Required */
		variation: string;
	}

	/** A structure that defines one launch group in a launch. A launch group is a variation of the feature that you are including in the launch. */
	export interface LaunchGroupConfigFormProperties {
		description: FormControl<string | null | undefined>,

		/** Required */
		feature: FormControl<string | null | undefined>,

		/** Required */
		name: FormControl<string | null | undefined>,

		/** Required */
		variation: FormControl<string | null | undefined>,
	}
	export function CreateLaunchGroupConfigFormGroup() {
		return new FormGroup<LaunchGroupConfigFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			feature: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			variation: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** A structure that defines a metric to be used to monitor performance of the variations during a launch. */
	export interface MetricMonitorConfig {

		/** Required */
		metricDefinition: MetricDefinitionConfig;
	}

	/** A structure that defines a metric to be used to monitor performance of the variations during a launch. */
	export interface MetricMonitorConfigFormProperties {
	}
	export function CreateMetricMonitorConfigFormGroup() {
		return new FormGroup<MetricMonitorConfigFormProperties>({
		});

	}


	/** This structure defines the traffic allocation percentages among the feature variations during one step of a launch, and the start time of that step. */
	export interface ScheduledSplitConfig {

		/** Required */
		groupWeights: GroupToWeightMap;
		segmentOverrides?: Array<SegmentOverride>;

		/** Required */
		startTime: Date;
	}

	/** This structure defines the traffic allocation percentages among the feature variations during one step of a launch, and the start time of that step. */
	export interface ScheduledSplitConfigFormProperties {

		/** Required */
		startTime: FormControl<Date | null | undefined>,
	}
	export function CreateScheduledSplitConfigFormGroup() {
		return new FormGroup<ScheduledSplitConfigFormProperties>({
			startTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateProjectResponse {

		/** Required */
		project: Project;
	}
	export interface CreateProjectResponseFormProperties {
	}
	export function CreateCreateProjectResponseFormGroup() {
		return new FormGroup<CreateProjectResponseFormProperties>({
		});

	}


	/** This structure defines a project, which is the logical object in Evidently that can contain features, launches, and experiments. Use projects to group similar features together. */
	export interface Project {
		activeExperimentCount?: number | null;
		activeLaunchCount?: number | null;
		appConfigResource?: ProjectAppConfigResource;

		/** Required */
		arn: string;

		/** Required */
		createdTime: Date;
		dataDelivery?: ProjectDataDelivery;
		description?: string;
		experimentCount?: number | null;
		featureCount?: number | null;

		/** Required */
		lastUpdatedTime: Date;
		launchCount?: number | null;

		/** Required */
		name: string;

		/** Required */
		status: FeatureStatus;
		tags?: TagMap;
	}

	/** This structure defines a project, which is the logical object in Evidently that can contain features, launches, and experiments. Use projects to group similar features together. */
	export interface ProjectFormProperties {
		activeExperimentCount: FormControl<number | null | undefined>,
		activeLaunchCount: FormControl<number | null | undefined>,

		/** Required */
		arn: FormControl<string | null | undefined>,

		/** Required */
		createdTime: FormControl<Date | null | undefined>,
		description: FormControl<string | null | undefined>,
		experimentCount: FormControl<number | null | undefined>,
		featureCount: FormControl<number | null | undefined>,

		/** Required */
		lastUpdatedTime: FormControl<Date | null | undefined>,
		launchCount: FormControl<number | null | undefined>,

		/** Required */
		name: FormControl<string | null | undefined>,

		/** Required */
		status: FormControl<FeatureStatus | null | undefined>,
	}
	export function CreateProjectFormGroup() {
		return new FormGroup<ProjectFormProperties>({
			activeExperimentCount: new FormControl<number | null | undefined>(undefined),
			activeLaunchCount: new FormControl<number | null | undefined>(undefined),
			arn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			createdTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			description: new FormControl<string | null | undefined>(undefined),
			experimentCount: new FormControl<number | null | undefined>(undefined),
			featureCount: new FormControl<number | null | undefined>(undefined),
			lastUpdatedTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			launchCount: new FormControl<number | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<FeatureStatus | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** This is a structure that defines the configuration of how your application integrates with AppConfig to run client-side evaluation. */
	export interface ProjectAppConfigResource {

		/** Required */
		applicationId: string;

		/** Required */
		configurationProfileId: string;

		/** Required */
		environmentId: string;
	}

	/** This is a structure that defines the configuration of how your application integrates with AppConfig to run client-side evaluation. */
	export interface ProjectAppConfigResourceFormProperties {

		/** Required */
		applicationId: FormControl<string | null | undefined>,

		/** Required */
		configurationProfileId: FormControl<string | null | undefined>,

		/** Required */
		environmentId: FormControl<string | null | undefined>,
	}
	export function CreateProjectAppConfigResourceFormGroup() {
		return new FormGroup<ProjectAppConfigResourceFormProperties>({
			applicationId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			configurationProfileId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			environmentId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** A structure that contains information about where Evidently is to store evaluation events for longer term storage. */
	export interface ProjectDataDelivery {
		cloudWatchLogs?: CloudWatchLogsDestination;
		s3Destination?: S3Destination;
	}

	/** A structure that contains information about where Evidently is to store evaluation events for longer term storage. */
	export interface ProjectDataDeliveryFormProperties {
	}
	export function CreateProjectDataDeliveryFormGroup() {
		return new FormGroup<ProjectDataDeliveryFormProperties>({
		});

	}


	/** A structure containing the CloudWatch Logs log group where the project stores evaluation events. */
	export interface CloudWatchLogsDestination {
		logGroup?: string;
	}

	/** A structure containing the CloudWatch Logs log group where the project stores evaluation events. */
	export interface CloudWatchLogsDestinationFormProperties {
		logGroup: FormControl<string | null | undefined>,
	}
	export function CreateCloudWatchLogsDestinationFormGroup() {
		return new FormGroup<CloudWatchLogsDestinationFormProperties>({
			logGroup: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** If the project stores evaluation events in an Amazon S3 bucket, this structure stores the bucket name and bucket prefix. */
	export interface S3Destination {
		bucket?: string;
		prefix?: string;
	}

	/** If the project stores evaluation events in an Amazon S3 bucket, this structure stores the bucket name and bucket prefix. */
	export interface S3DestinationFormProperties {
		bucket: FormControl<string | null | undefined>,
		prefix: FormControl<string | null | undefined>,
	}
	export function CreateS3DestinationFormGroup() {
		return new FormGroup<S3DestinationFormProperties>({
			bucket: new FormControl<string | null | undefined>(undefined),
			prefix: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A structure containing the CloudWatch Logs log group where the project stores evaluation events. */
	export interface CloudWatchLogsDestinationConfig {
		logGroup?: string;
	}

	/** A structure containing the CloudWatch Logs log group where the project stores evaluation events. */
	export interface CloudWatchLogsDestinationConfigFormProperties {
		logGroup: FormControl<string | null | undefined>,
	}
	export function CreateCloudWatchLogsDestinationConfigFormGroup() {
		return new FormGroup<CloudWatchLogsDestinationConfigFormProperties>({
			logGroup: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** If the project stores evaluation events in an Amazon S3 bucket, this structure stores the bucket name and bucket prefix. */
	export interface S3DestinationConfig {
		bucket?: string;
		prefix?: string;
	}

	/** If the project stores evaluation events in an Amazon S3 bucket, this structure stores the bucket name and bucket prefix. */
	export interface S3DestinationConfigFormProperties {
		bucket: FormControl<string | null | undefined>,
		prefix: FormControl<string | null | undefined>,
	}
	export function CreateS3DestinationConfigFormGroup() {
		return new FormGroup<S3DestinationConfigFormProperties>({
			bucket: new FormControl<string | null | undefined>(undefined),
			prefix: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateSegmentResponse {

		/** Required */
		segment: Segment;
	}
	export interface CreateSegmentResponseFormProperties {
	}
	export function CreateCreateSegmentResponseFormGroup() {
		return new FormGroup<CreateSegmentResponseFormProperties>({
		});

	}


	/** This structure contains information about one audience <i>segment</i>. You can use segments in your experiments and launches to narrow the user sessions used for experiment or launch to only the user sessions that match one or more criteria. */
	export interface Segment {

		/** Required */
		arn: string;

		/** Required */
		createdTime: Date;
		description?: string;
		experimentCount?: number | null;

		/** Required */
		lastUpdatedTime: Date;
		launchCount?: number | null;

		/** Required */
		name: string;

		/** Required */
		pattern: string;
		tags?: TagMap;
	}

	/** This structure contains information about one audience <i>segment</i>. You can use segments in your experiments and launches to narrow the user sessions used for experiment or launch to only the user sessions that match one or more criteria. */
	export interface SegmentFormProperties {

		/** Required */
		arn: FormControl<string | null | undefined>,

		/** Required */
		createdTime: FormControl<Date | null | undefined>,
		description: FormControl<string | null | undefined>,
		experimentCount: FormControl<number | null | undefined>,

		/** Required */
		lastUpdatedTime: FormControl<Date | null | undefined>,
		launchCount: FormControl<number | null | undefined>,

		/** Required */
		name: FormControl<string | null | undefined>,

		/** Required */
		pattern: FormControl<string | null | undefined>,
	}
	export function CreateSegmentFormGroup() {
		return new FormGroup<SegmentFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			createdTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			description: new FormControl<string | null | undefined>(undefined),
			experimentCount: new FormControl<number | null | undefined>(undefined),
			lastUpdatedTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			launchCount: new FormControl<number | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			pattern: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeleteExperimentResponse {
	}
	export interface DeleteExperimentResponseFormProperties {
	}
	export function CreateDeleteExperimentResponseFormGroup() {
		return new FormGroup<DeleteExperimentResponseFormProperties>({
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

	export interface ServiceUnavailableException {
	}
	export interface ServiceUnavailableExceptionFormProperties {
	}
	export function CreateServiceUnavailableExceptionFormGroup() {
		return new FormGroup<ServiceUnavailableExceptionFormProperties>({
		});

	}

	export interface DeleteFeatureResponse {
	}
	export interface DeleteFeatureResponseFormProperties {
	}
	export function CreateDeleteFeatureResponseFormGroup() {
		return new FormGroup<DeleteFeatureResponseFormProperties>({
		});

	}

	export interface DeleteLaunchResponse {
	}
	export interface DeleteLaunchResponseFormProperties {
	}
	export function CreateDeleteLaunchResponseFormGroup() {
		return new FormGroup<DeleteLaunchResponseFormProperties>({
		});

	}

	export interface DeleteProjectResponse {
	}
	export interface DeleteProjectResponseFormProperties {
	}
	export function CreateDeleteProjectResponseFormGroup() {
		return new FormGroup<DeleteProjectResponseFormProperties>({
		});

	}

	export interface DeleteSegmentResponse {
	}
	export interface DeleteSegmentResponseFormProperties {
	}
	export function CreateDeleteSegmentResponseFormGroup() {
		return new FormGroup<DeleteSegmentResponseFormProperties>({
		});

	}

	export interface EvaluateFeatureResponse {
		details?: string;
		reason?: string;
		value?: VariableValue;
		variation?: string;
	}
	export interface EvaluateFeatureResponseFormProperties {
		details: FormControl<string | null | undefined>,
		reason: FormControl<string | null | undefined>,
		variation: FormControl<string | null | undefined>,
	}
	export function CreateEvaluateFeatureResponseFormGroup() {
		return new FormGroup<EvaluateFeatureResponseFormProperties>({
			details: new FormControl<string | null | undefined>(undefined),
			reason: new FormControl<string | null | undefined>(undefined),
			variation: new FormControl<string | null | undefined>(undefined),
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

	export interface GetExperimentResultsResponse {
		details?: string;
		reports?: Array<ExperimentReport>;
		resultsData?: Array<ExperimentResultsData>;
		timestamps?: Array<string>;
	}
	export interface GetExperimentResultsResponseFormProperties {
		details: FormControl<string | null | undefined>,
	}
	export function CreateGetExperimentResultsResponseFormGroup() {
		return new FormGroup<GetExperimentResultsResponseFormProperties>({
			details: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A structure that contains results of an experiment. */
	export interface ExperimentReport {
		content?: string;
		metricName?: string;
		reportName?: ExperimentReportName;
		treatmentName?: string;
	}

	/** A structure that contains results of an experiment. */
	export interface ExperimentReportFormProperties {
		content: FormControl<string | null | undefined>,
		metricName: FormControl<string | null | undefined>,
		reportName: FormControl<ExperimentReportName | null | undefined>,
		treatmentName: FormControl<string | null | undefined>,
	}
	export function CreateExperimentReportFormGroup() {
		return new FormGroup<ExperimentReportFormProperties>({
			content: new FormControl<string | null | undefined>(undefined),
			metricName: new FormControl<string | null | undefined>(undefined),
			reportName: new FormControl<ExperimentReportName | null | undefined>(undefined),
			treatmentName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ExperimentReportName { BayesianInference = 'BayesianInference' }


	/** A structure that contains experiment results for one metric that is monitored in the experiment. */
	export interface ExperimentResultsData {
		metricName?: string;
		resultStat?: ExperimentResultResponseType;
		treatmentName?: string;
		values?: Array<number> | null;
	}

	/** A structure that contains experiment results for one metric that is monitored in the experiment. */
	export interface ExperimentResultsDataFormProperties {
		metricName: FormControl<string | null | undefined>,
		resultStat: FormControl<ExperimentResultResponseType | null | undefined>,
		treatmentName: FormControl<string | null | undefined>,
	}
	export function CreateExperimentResultsDataFormGroup() {
		return new FormGroup<ExperimentResultsDataFormProperties>({
			metricName: new FormControl<string | null | undefined>(undefined),
			resultStat: new FormControl<ExperimentResultResponseType | null | undefined>(undefined),
			treatmentName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ExperimentResultResponseType { Mean = 'Mean', TreatmentEffect = 'TreatmentEffect', ConfidenceIntervalUpperBound = 'ConfidenceIntervalUpperBound', ConfidenceIntervalLowerBound = 'ConfidenceIntervalLowerBound', PValue = 'PValue' }

	export enum ExperimentResultRequestType { BaseStat = 'BaseStat', TreatmentEffect = 'TreatmentEffect', ConfidenceInterval = 'ConfidenceInterval', PValue = 'PValue' }

	export interface GetFeatureResponse {

		/** Required */
		feature: Feature;
	}
	export interface GetFeatureResponseFormProperties {
	}
	export function CreateGetFeatureResponseFormGroup() {
		return new FormGroup<GetFeatureResponseFormProperties>({
		});

	}

	export interface GetLaunchResponse {
		launch?: Launch;
	}
	export interface GetLaunchResponseFormProperties {
	}
	export function CreateGetLaunchResponseFormGroup() {
		return new FormGroup<GetLaunchResponseFormProperties>({
		});

	}

	export interface GetProjectResponse {

		/** Required */
		project: Project;
	}
	export interface GetProjectResponseFormProperties {
	}
	export function CreateGetProjectResponseFormGroup() {
		return new FormGroup<GetProjectResponseFormProperties>({
		});

	}

	export interface GetSegmentResponse {

		/** Required */
		segment: Segment;
	}
	export interface GetSegmentResponseFormProperties {
	}
	export function CreateGetSegmentResponseFormGroup() {
		return new FormGroup<GetSegmentResponseFormProperties>({
		});

	}

	export interface ListExperimentsResponse {
		experiments?: Array<Experiment>;
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

	export interface ListFeaturesResponse {
		features?: Array<FeatureSummary>;
		nextToken?: string;
	}
	export interface ListFeaturesResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListFeaturesResponseFormGroup() {
		return new FormGroup<ListFeaturesResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** This structure contains information about one Evidently feature in your account. */
	export interface FeatureSummary {

		/** Required */
		arn: string;

		/** Required */
		createdTime: Date;
		defaultVariation?: string;
		evaluationRules?: Array<EvaluationRule>;

		/** Required */
		evaluationStrategy: FeatureEvaluationStrategy;

		/** Required */
		lastUpdatedTime: Date;

		/** Required */
		name: string;
		project?: string;

		/** Required */
		status: FeatureStatus;
		tags?: TagMap;
	}

	/** This structure contains information about one Evidently feature in your account. */
	export interface FeatureSummaryFormProperties {

		/** Required */
		arn: FormControl<string | null | undefined>,

		/** Required */
		createdTime: FormControl<Date | null | undefined>,
		defaultVariation: FormControl<string | null | undefined>,

		/** Required */
		evaluationStrategy: FormControl<FeatureEvaluationStrategy | null | undefined>,

		/** Required */
		lastUpdatedTime: FormControl<Date | null | undefined>,

		/** Required */
		name: FormControl<string | null | undefined>,
		project: FormControl<string | null | undefined>,

		/** Required */
		status: FormControl<FeatureStatus | null | undefined>,
	}
	export function CreateFeatureSummaryFormGroup() {
		return new FormGroup<FeatureSummaryFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			createdTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			defaultVariation: new FormControl<string | null | undefined>(undefined),
			evaluationStrategy: new FormControl<FeatureEvaluationStrategy | null | undefined>(undefined, [Validators.required]),
			lastUpdatedTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			project: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<FeatureStatus | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ListLaunchesResponse {
		launches?: Array<Launch>;
		nextToken?: string;
	}
	export interface ListLaunchesResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListLaunchesResponseFormGroup() {
		return new FormGroup<ListLaunchesResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListProjectsResponse {
		nextToken?: string;
		projects?: Array<ProjectSummary>;
	}
	export interface ListProjectsResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListProjectsResponseFormGroup() {
		return new FormGroup<ListProjectsResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A structure that contains configuration information about an Evidently project. */
	export interface ProjectSummary {
		activeExperimentCount?: number | null;
		activeLaunchCount?: number | null;

		/** Required */
		arn: string;

		/** Required */
		createdTime: Date;
		description?: string;
		experimentCount?: number | null;
		featureCount?: number | null;

		/** Required */
		lastUpdatedTime: Date;
		launchCount?: number | null;

		/** Required */
		name: string;

		/** Required */
		status: FeatureStatus;
		tags?: TagMap;
	}

	/** A structure that contains configuration information about an Evidently project. */
	export interface ProjectSummaryFormProperties {
		activeExperimentCount: FormControl<number | null | undefined>,
		activeLaunchCount: FormControl<number | null | undefined>,

		/** Required */
		arn: FormControl<string | null | undefined>,

		/** Required */
		createdTime: FormControl<Date | null | undefined>,
		description: FormControl<string | null | undefined>,
		experimentCount: FormControl<number | null | undefined>,
		featureCount: FormControl<number | null | undefined>,

		/** Required */
		lastUpdatedTime: FormControl<Date | null | undefined>,
		launchCount: FormControl<number | null | undefined>,

		/** Required */
		name: FormControl<string | null | undefined>,

		/** Required */
		status: FormControl<FeatureStatus | null | undefined>,
	}
	export function CreateProjectSummaryFormGroup() {
		return new FormGroup<ProjectSummaryFormProperties>({
			activeExperimentCount: new FormControl<number | null | undefined>(undefined),
			activeLaunchCount: new FormControl<number | null | undefined>(undefined),
			arn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			createdTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			description: new FormControl<string | null | undefined>(undefined),
			experimentCount: new FormControl<number | null | undefined>(undefined),
			featureCount: new FormControl<number | null | undefined>(undefined),
			lastUpdatedTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			launchCount: new FormControl<number | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<FeatureStatus | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ListSegmentReferencesResponse {
		nextToken?: string;
		referencedBy?: Array<RefResource>;
	}
	export interface ListSegmentReferencesResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListSegmentReferencesResponseFormGroup() {
		return new FormGroup<ListSegmentReferencesResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A structure that contains information about one experiment or launch that uses the specified segment.  */
	export interface RefResource {
		arn?: string;
		endTime?: string;
		lastUpdatedOn?: string;

		/** Required */
		name: string;
		startTime?: string;
		status?: string;

		/** Required */
		type: string;
	}

	/** A structure that contains information about one experiment or launch that uses the specified segment.  */
	export interface RefResourceFormProperties {
		arn: FormControl<string | null | undefined>,
		endTime: FormControl<string | null | undefined>,
		lastUpdatedOn: FormControl<string | null | undefined>,

		/** Required */
		name: FormControl<string | null | undefined>,
		startTime: FormControl<string | null | undefined>,
		status: FormControl<string | null | undefined>,

		/** Required */
		type: FormControl<string | null | undefined>,
	}
	export function CreateRefResourceFormGroup() {
		return new FormGroup<RefResourceFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined),
			endTime: new FormControl<string | null | undefined>(undefined),
			lastUpdatedOn: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			startTime: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ListSegmentsResponse {
		nextToken?: string;
		segments?: Array<Segment>;
	}
	export interface ListSegmentsResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListSegmentsResponseFormGroup() {
		return new FormGroup<ListSegmentsResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
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

	export interface PutProjectEventsResponse {
		eventResults?: Array<PutProjectEventsResultEntry>;
		failedEventCount?: number | null;
	}
	export interface PutProjectEventsResponseFormProperties {
		failedEventCount: FormControl<number | null | undefined>,
	}
	export function CreatePutProjectEventsResponseFormGroup() {
		return new FormGroup<PutProjectEventsResponseFormProperties>({
			failedEventCount: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** A structure that contains Evidently's response to the sent events, including an event ID and error codes, if any.  */
	export interface PutProjectEventsResultEntry {
		errorCode?: string;
		errorMessage?: string;
		eventId?: string;
	}

	/** A structure that contains Evidently's response to the sent events, including an event ID and error codes, if any.  */
	export interface PutProjectEventsResultEntryFormProperties {
		errorCode: FormControl<string | null | undefined>,
		errorMessage: FormControl<string | null | undefined>,
		eventId: FormControl<string | null | undefined>,
	}
	export function CreatePutProjectEventsResultEntryFormGroup() {
		return new FormGroup<PutProjectEventsResultEntryFormProperties>({
			errorCode: new FormControl<string | null | undefined>(undefined),
			errorMessage: new FormControl<string | null | undefined>(undefined),
			eventId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A structure that contains the information about one evaluation event or custom event sent to Evidently. This is a JSON payload. If this event specifies a pre-defined event type, the payload must follow the defined event schema. */
	export interface Event {

		/** Required */
		data: string;

		/** Required */
		timestamp: Date;

		/** Required */
		type: EventType;
	}

	/** A structure that contains the information about one evaluation event or custom event sent to Evidently. This is a JSON payload. If this event specifies a pre-defined event type, the payload must follow the defined event schema. */
	export interface EventFormProperties {

		/** Required */
		data: FormControl<string | null | undefined>,

		/** Required */
		timestamp: FormControl<Date | null | undefined>,

		/** Required */
		type: FormControl<EventType | null | undefined>,
	}
	export function CreateEventFormGroup() {
		return new FormGroup<EventFormProperties>({
			data: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			timestamp: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<EventType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum EventType { 'aws.evidently.evaluation' = 'aws.evidently.evaluation', 'aws.evidently.custom' = 'aws.evidently.custom' }

	export interface StartExperimentResponse {
		startedTime?: Date;
	}
	export interface StartExperimentResponseFormProperties {
		startedTime: FormControl<Date | null | undefined>,
	}
	export function CreateStartExperimentResponseFormGroup() {
		return new FormGroup<StartExperimentResponseFormProperties>({
			startedTime: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface StartLaunchResponse {

		/** Required */
		launch: Launch;
	}
	export interface StartLaunchResponseFormProperties {
	}
	export function CreateStartLaunchResponseFormGroup() {
		return new FormGroup<StartLaunchResponseFormProperties>({
		});

	}

	export interface StopExperimentResponse {
		endedTime?: Date;
	}
	export interface StopExperimentResponseFormProperties {
		endedTime: FormControl<Date | null | undefined>,
	}
	export function CreateStopExperimentResponseFormGroup() {
		return new FormGroup<StopExperimentResponseFormProperties>({
			endedTime: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface StopLaunchResponse {
		endedTime?: Date;
	}
	export interface StopLaunchResponseFormProperties {
		endedTime: FormControl<Date | null | undefined>,
	}
	export function CreateStopLaunchResponseFormGroup() {
		return new FormGroup<StopLaunchResponseFormProperties>({
			endedTime: new FormControl<Date | null | undefined>(undefined),
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

	export interface TestSegmentPatternResponse {

		/** Required */
		match: boolean;
	}
	export interface TestSegmentPatternResponseFormProperties {

		/** Required */
		match: FormControl<boolean | null | undefined>,
	}
	export function CreateTestSegmentPatternResponseFormGroup() {
		return new FormGroup<TestSegmentPatternResponseFormProperties>({
			match: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
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

	export interface UpdateExperimentResponse {

		/** Required */
		experiment: Experiment;
	}
	export interface UpdateExperimentResponseFormProperties {
	}
	export function CreateUpdateExperimentResponseFormGroup() {
		return new FormGroup<UpdateExperimentResponseFormProperties>({
		});

	}

	export interface UpdateFeatureResponse {

		/** Required */
		feature: Feature;
	}
	export interface UpdateFeatureResponseFormProperties {
	}
	export function CreateUpdateFeatureResponseFormGroup() {
		return new FormGroup<UpdateFeatureResponseFormProperties>({
		});

	}

	export interface UpdateLaunchResponse {

		/** Required */
		launch: Launch;
	}
	export interface UpdateLaunchResponseFormProperties {
	}
	export function CreateUpdateLaunchResponseFormGroup() {
		return new FormGroup<UpdateLaunchResponseFormProperties>({
		});

	}

	export interface UpdateProjectResponse {

		/** Required */
		project: Project;
	}
	export interface UpdateProjectResponseFormProperties {
	}
	export function CreateUpdateProjectResponseFormGroup() {
		return new FormGroup<UpdateProjectResponseFormProperties>({
		});

	}

	export interface UpdateProjectDataDeliveryResponse {

		/** Required */
		project: Project;
	}
	export interface UpdateProjectDataDeliveryResponseFormProperties {
	}
	export function CreateUpdateProjectDataDeliveryResponseFormGroup() {
		return new FormGroup<UpdateProjectDataDeliveryResponseFormProperties>({
		});

	}

	export interface BatchEvaluateFeatureRequest {

		/** Required */
		requests: Array<EvaluationRequest>;
	}
	export interface BatchEvaluateFeatureRequestFormProperties {
	}
	export function CreateBatchEvaluateFeatureRequestFormGroup() {
		return new FormGroup<BatchEvaluateFeatureRequestFormProperties>({
		});

	}


	/** A structure that contains the configuration of which variation to use as the "control" version. The "control" version is used for comparison with other variations. This structure also specifies how much experiment traffic is allocated to each variation. */
	export interface OnlineAbConfig {
		controlTreatmentName?: string;
		treatmentWeights?: TreatmentToWeightMap;
	}

	/** A structure that contains the configuration of which variation to use as the "control" version. The "control" version is used for comparison with other variations. This structure also specifies how much experiment traffic is allocated to each variation. */
	export interface OnlineAbConfigFormProperties {
		controlTreatmentName: FormControl<string | null | undefined>,
	}
	export function CreateOnlineAbConfigFormGroup() {
		return new FormGroup<OnlineAbConfigFormProperties>({
			controlTreatmentName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateExperimentRequest {
		description?: string;

		/** Required */
		metricGoals: Array<MetricGoalConfig>;

		/** Required */
		name: string;
		onlineAbConfig?: OnlineAbConfig;
		randomizationSalt?: string;
		samplingRate?: number | null;
		segment?: string;
		tags?: TagMap;

		/** Required */
		treatments: Array<TreatmentConfig>;
	}
	export interface CreateExperimentRequestFormProperties {
		description: FormControl<string | null | undefined>,

		/** Required */
		name: FormControl<string | null | undefined>,
		randomizationSalt: FormControl<string | null | undefined>,
		samplingRate: FormControl<number | null | undefined>,
		segment: FormControl<string | null | undefined>,
	}
	export function CreateCreateExperimentRequestFormGroup() {
		return new FormGroup<CreateExperimentRequestFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			randomizationSalt: new FormControl<string | null | undefined>(undefined),
			samplingRate: new FormControl<number | null | undefined>(undefined),
			segment: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateFeatureRequest {
		defaultVariation?: string;
		description?: string;
		entityOverrides?: EntityOverrideMap;
		evaluationStrategy?: FeatureEvaluationStrategy;

		/** Required */
		name: string;
		tags?: TagMap;

		/** Required */
		variations: Array<VariationConfig>;
	}
	export interface CreateFeatureRequestFormProperties {
		defaultVariation: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,
		evaluationStrategy: FormControl<FeatureEvaluationStrategy | null | undefined>,

		/** Required */
		name: FormControl<string | null | undefined>,
	}
	export function CreateCreateFeatureRequestFormGroup() {
		return new FormGroup<CreateFeatureRequestFormProperties>({
			defaultVariation: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			evaluationStrategy: new FormControl<FeatureEvaluationStrategy | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** An array of structures that define the traffic allocation percentages among the feature variations during each step of a launch. This also defines the start time of each step. */
	export interface ScheduledSplitsLaunchConfig {

		/** Required */
		steps: Array<ScheduledSplitConfig>;
	}

	/** An array of structures that define the traffic allocation percentages among the feature variations during each step of a launch. This also defines the start time of each step. */
	export interface ScheduledSplitsLaunchConfigFormProperties {
	}
	export function CreateScheduledSplitsLaunchConfigFormGroup() {
		return new FormGroup<ScheduledSplitsLaunchConfigFormProperties>({
		});

	}

	export interface CreateLaunchRequest {
		description?: string;

		/** Required */
		groups: Array<LaunchGroupConfig>;
		metricMonitors?: Array<MetricMonitorConfig>;

		/** Required */
		name: string;
		randomizationSalt?: string;
		scheduledSplitsConfig?: ScheduledSplitsLaunchConfig;
		tags?: TagMap;
	}
	export interface CreateLaunchRequestFormProperties {
		description: FormControl<string | null | undefined>,

		/** Required */
		name: FormControl<string | null | undefined>,
		randomizationSalt: FormControl<string | null | undefined>,
	}
	export function CreateCreateLaunchRequestFormGroup() {
		return new FormGroup<CreateLaunchRequestFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			randomizationSalt: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** <p>Use this parameter to configure client-side evaluation for your project. Client-side evaluation allows your application to assign variations to user sessions locally instead of by calling the <a href="https://docs.aws.amazon.com/cloudwatchevidently/latest/APIReference/API_EvaluateFeature.html">EvaluateFeature</a> operation to assign the variations. This mitigates the latency and availability risks that come with an API call.</p> <p> <code>ProjectAppConfigResource</code> is a structure that defines the configuration of how your application integrates with AppConfig to run client-side evaluation.</p> */
	export interface ProjectAppConfigResourceConfig {
		applicationId?: string;
		environmentId?: string;
	}

	/** <p>Use this parameter to configure client-side evaluation for your project. Client-side evaluation allows your application to assign variations to user sessions locally instead of by calling the <a href="https://docs.aws.amazon.com/cloudwatchevidently/latest/APIReference/API_EvaluateFeature.html">EvaluateFeature</a> operation to assign the variations. This mitigates the latency and availability risks that come with an API call.</p> <p> <code>ProjectAppConfigResource</code> is a structure that defines the configuration of how your application integrates with AppConfig to run client-side evaluation.</p> */
	export interface ProjectAppConfigResourceConfigFormProperties {
		applicationId: FormControl<string | null | undefined>,
		environmentId: FormControl<string | null | undefined>,
	}
	export function CreateProjectAppConfigResourceConfigFormGroup() {
		return new FormGroup<ProjectAppConfigResourceConfigFormProperties>({
			applicationId: new FormControl<string | null | undefined>(undefined),
			environmentId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A structure that contains information about where Evidently is to store evaluation events for longer term storage. */
	export interface ProjectDataDeliveryConfig {
		cloudWatchLogs?: CloudWatchLogsDestinationConfig;
		s3Destination?: S3DestinationConfig;
	}

	/** A structure that contains information about where Evidently is to store evaluation events for longer term storage. */
	export interface ProjectDataDeliveryConfigFormProperties {
	}
	export function CreateProjectDataDeliveryConfigFormGroup() {
		return new FormGroup<ProjectDataDeliveryConfigFormProperties>({
		});

	}

	export interface CreateProjectRequest {
		appConfigResource?: ProjectAppConfigResourceConfig;
		dataDelivery?: ProjectDataDeliveryConfig;
		description?: string;

		/** Required */
		name: string;
		tags?: TagMap;
	}
	export interface CreateProjectRequestFormProperties {
		description: FormControl<string | null | undefined>,

		/** Required */
		name: FormControl<string | null | undefined>,
	}
	export function CreateCreateProjectRequestFormGroup() {
		return new FormGroup<CreateProjectRequestFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateSegmentRequest {
		description?: string;

		/** Required */
		name: string;

		/** Required */
		pattern: string;
		tags?: TagMap;
	}
	export interface CreateSegmentRequestFormProperties {
		description: FormControl<string | null | undefined>,

		/** Required */
		name: FormControl<string | null | undefined>,

		/** Required */
		pattern: FormControl<string | null | undefined>,
	}
	export function CreateCreateSegmentRequestFormGroup() {
		return new FormGroup<CreateSegmentRequestFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			pattern: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeleteExperimentRequest {
	}
	export interface DeleteExperimentRequestFormProperties {
	}
	export function CreateDeleteExperimentRequestFormGroup() {
		return new FormGroup<DeleteExperimentRequestFormProperties>({
		});

	}

	export interface DeleteFeatureRequest {
	}
	export interface DeleteFeatureRequestFormProperties {
	}
	export function CreateDeleteFeatureRequestFormGroup() {
		return new FormGroup<DeleteFeatureRequestFormProperties>({
		});

	}

	export interface DeleteLaunchRequest {
	}
	export interface DeleteLaunchRequestFormProperties {
	}
	export function CreateDeleteLaunchRequestFormGroup() {
		return new FormGroup<DeleteLaunchRequestFormProperties>({
		});

	}

	export interface DeleteProjectRequest {
	}
	export interface DeleteProjectRequestFormProperties {
	}
	export function CreateDeleteProjectRequestFormGroup() {
		return new FormGroup<DeleteProjectRequestFormProperties>({
		});

	}

	export interface DeleteSegmentRequest {
	}
	export interface DeleteSegmentRequestFormProperties {
	}
	export function CreateDeleteSegmentRequestFormGroup() {
		return new FormGroup<DeleteSegmentRequestFormProperties>({
		});

	}

	export interface EvaluateFeatureRequest {

		/** Required */
		entityId: string;
		evaluationContext?: string;
	}
	export interface EvaluateFeatureRequestFormProperties {

		/** Required */
		entityId: FormControl<string | null | undefined>,
		evaluationContext: FormControl<string | null | undefined>,
	}
	export function CreateEvaluateFeatureRequestFormGroup() {
		return new FormGroup<EvaluateFeatureRequestFormProperties>({
			entityId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			evaluationContext: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ExperimentBaseStat { Mean = 'Mean' }

	export enum ExperimentStopDesiredState { COMPLETED = 'COMPLETED', CANCELLED = 'CANCELLED' }

	export interface GetExperimentRequest {
	}
	export interface GetExperimentRequestFormProperties {
	}
	export function CreateGetExperimentRequestFormGroup() {
		return new FormGroup<GetExperimentRequestFormProperties>({
		});

	}

	export interface GetExperimentResultsRequest {
		baseStat?: ExperimentBaseStat;
		endTime?: Date;

		/** Required */
		metricNames: Array<string>;
		period?: number | null;
		reportNames?: Array<ExperimentReportName>;
		resultStats?: Array<ExperimentResultRequestType>;
		startTime?: Date;

		/** Required */
		treatmentNames: Array<string>;
	}
	export interface GetExperimentResultsRequestFormProperties {
		baseStat: FormControl<ExperimentBaseStat | null | undefined>,
		endTime: FormControl<Date | null | undefined>,
		period: FormControl<number | null | undefined>,
		startTime: FormControl<Date | null | undefined>,
	}
	export function CreateGetExperimentResultsRequestFormGroup() {
		return new FormGroup<GetExperimentResultsRequestFormProperties>({
			baseStat: new FormControl<ExperimentBaseStat | null | undefined>(undefined),
			endTime: new FormControl<Date | null | undefined>(undefined),
			period: new FormControl<number | null | undefined>(undefined),
			startTime: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface GetFeatureRequest {
	}
	export interface GetFeatureRequestFormProperties {
	}
	export function CreateGetFeatureRequestFormGroup() {
		return new FormGroup<GetFeatureRequestFormProperties>({
		});

	}

	export interface GetLaunchRequest {
	}
	export interface GetLaunchRequestFormProperties {
	}
	export function CreateGetLaunchRequestFormGroup() {
		return new FormGroup<GetLaunchRequestFormProperties>({
		});

	}

	export interface GetProjectRequest {
	}
	export interface GetProjectRequestFormProperties {
	}
	export function CreateGetProjectRequestFormGroup() {
		return new FormGroup<GetProjectRequestFormProperties>({
		});

	}

	export interface GetSegmentRequest {
	}
	export interface GetSegmentRequestFormProperties {
	}
	export function CreateGetSegmentRequestFormGroup() {
		return new FormGroup<GetSegmentRequestFormProperties>({
		});

	}

	export enum LaunchStatus { CREATED = 'CREATED', UPDATING = 'UPDATING', RUNNING = 'RUNNING', COMPLETED = 'COMPLETED', CANCELLED = 'CANCELLED' }

	export enum LaunchStopDesiredState { COMPLETED = 'COMPLETED', CANCELLED = 'CANCELLED' }

	export interface ListExperimentsRequest {
	}
	export interface ListExperimentsRequestFormProperties {
	}
	export function CreateListExperimentsRequestFormGroup() {
		return new FormGroup<ListExperimentsRequestFormProperties>({
		});

	}

	export interface ListFeaturesRequest {
	}
	export interface ListFeaturesRequestFormProperties {
	}
	export function CreateListFeaturesRequestFormGroup() {
		return new FormGroup<ListFeaturesRequestFormProperties>({
		});

	}

	export interface ListLaunchesRequest {
	}
	export interface ListLaunchesRequestFormProperties {
	}
	export function CreateListLaunchesRequestFormGroup() {
		return new FormGroup<ListLaunchesRequestFormProperties>({
		});

	}

	export interface ListProjectsRequest {
	}
	export interface ListProjectsRequestFormProperties {
	}
	export function CreateListProjectsRequestFormGroup() {
		return new FormGroup<ListProjectsRequestFormProperties>({
		});

	}

	export enum SegmentReferenceResourceType { EXPERIMENT = 'EXPERIMENT', LAUNCH = 'LAUNCH' }

	export interface ListSegmentReferencesRequest {
	}
	export interface ListSegmentReferencesRequestFormProperties {
	}
	export function CreateListSegmentReferencesRequestFormGroup() {
		return new FormGroup<ListSegmentReferencesRequestFormProperties>({
		});

	}

	export interface ListSegmentsRequest {
	}
	export interface ListSegmentsRequestFormProperties {
	}
	export function CreateListSegmentsRequestFormGroup() {
		return new FormGroup<ListSegmentsRequestFormProperties>({
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

	export enum ProjectStatus { AVAILABLE = 'AVAILABLE', UPDATING = 'UPDATING' }

	export interface PutProjectEventsRequest {

		/** Required */
		events: Array<Event>;
	}
	export interface PutProjectEventsRequestFormProperties {
	}
	export function CreatePutProjectEventsRequestFormGroup() {
		return new FormGroup<PutProjectEventsRequestFormProperties>({
		});

	}

	export interface StartExperimentRequest {

		/** Required */
		analysisCompleteTime: Date;
	}
	export interface StartExperimentRequestFormProperties {

		/** Required */
		analysisCompleteTime: FormControl<Date | null | undefined>,
	}
	export function CreateStartExperimentRequestFormGroup() {
		return new FormGroup<StartExperimentRequestFormProperties>({
			analysisCompleteTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface StartLaunchRequest {
	}
	export interface StartLaunchRequestFormProperties {
	}
	export function CreateStartLaunchRequestFormGroup() {
		return new FormGroup<StartLaunchRequestFormProperties>({
		});

	}

	export interface StopExperimentRequest {
		desiredState?: ExperimentStopDesiredState;
		reason?: string;
	}
	export interface StopExperimentRequestFormProperties {
		desiredState: FormControl<ExperimentStopDesiredState | null | undefined>,
		reason: FormControl<string | null | undefined>,
	}
	export function CreateStopExperimentRequestFormGroup() {
		return new FormGroup<StopExperimentRequestFormProperties>({
			desiredState: new FormControl<ExperimentStopDesiredState | null | undefined>(undefined),
			reason: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface StopLaunchRequest {
		desiredState?: ExperimentStopDesiredState;
		reason?: string;
	}
	export interface StopLaunchRequestFormProperties {
		desiredState: FormControl<ExperimentStopDesiredState | null | undefined>,
		reason: FormControl<string | null | undefined>,
	}
	export function CreateStopLaunchRequestFormGroup() {
		return new FormGroup<StopLaunchRequestFormProperties>({
			desiredState: new FormControl<ExperimentStopDesiredState | null | undefined>(undefined),
			reason: new FormControl<string | null | undefined>(undefined),
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

	export interface TestSegmentPatternRequest {

		/** Required */
		pattern: string;

		/** Required */
		payload: string;
	}
	export interface TestSegmentPatternRequestFormProperties {

		/** Required */
		pattern: FormControl<string | null | undefined>,

		/** Required */
		payload: FormControl<string | null | undefined>,
	}
	export function CreateTestSegmentPatternRequestFormGroup() {
		return new FormGroup<TestSegmentPatternRequestFormProperties>({
			pattern: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			payload: new FormControl<string | null | undefined>(undefined, [Validators.required]),
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

	export interface UpdateExperimentRequest {
		description?: string;
		metricGoals?: Array<MetricGoalConfig>;
		onlineAbConfig?: OnlineAbConfig;
		randomizationSalt?: string;
		removeSegment?: boolean | null;
		samplingRate?: number | null;
		segment?: string;
		treatments?: Array<TreatmentConfig>;
	}
	export interface UpdateExperimentRequestFormProperties {
		description: FormControl<string | null | undefined>,
		randomizationSalt: FormControl<string | null | undefined>,
		removeSegment: FormControl<boolean | null | undefined>,
		samplingRate: FormControl<number | null | undefined>,
		segment: FormControl<string | null | undefined>,
	}
	export function CreateUpdateExperimentRequestFormGroup() {
		return new FormGroup<UpdateExperimentRequestFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			randomizationSalt: new FormControl<string | null | undefined>(undefined),
			removeSegment: new FormControl<boolean | null | undefined>(undefined),
			samplingRate: new FormControl<number | null | undefined>(undefined),
			segment: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateFeatureRequest {
		addOrUpdateVariations?: Array<VariationConfig>;
		defaultVariation?: string;
		description?: string;
		entityOverrides?: EntityOverrideMap;
		evaluationStrategy?: FeatureEvaluationStrategy;
		removeVariations?: Array<string>;
	}
	export interface UpdateFeatureRequestFormProperties {
		defaultVariation: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,
		evaluationStrategy: FormControl<FeatureEvaluationStrategy | null | undefined>,
	}
	export function CreateUpdateFeatureRequestFormGroup() {
		return new FormGroup<UpdateFeatureRequestFormProperties>({
			defaultVariation: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			evaluationStrategy: new FormControl<FeatureEvaluationStrategy | null | undefined>(undefined),
		});

	}

	export interface UpdateLaunchRequest {
		description?: string;
		groups?: Array<LaunchGroupConfig>;
		metricMonitors?: Array<MetricMonitorConfig>;
		randomizationSalt?: string;
		scheduledSplitsConfig?: ScheduledSplitsLaunchConfig;
	}
	export interface UpdateLaunchRequestFormProperties {
		description: FormControl<string | null | undefined>,
		randomizationSalt: FormControl<string | null | undefined>,
	}
	export function CreateUpdateLaunchRequestFormGroup() {
		return new FormGroup<UpdateLaunchRequestFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			randomizationSalt: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateProjectDataDeliveryRequest {
		cloudWatchLogs?: CloudWatchLogsDestinationConfig;
		s3Destination?: S3DestinationConfig;
	}
	export interface UpdateProjectDataDeliveryRequestFormProperties {
	}
	export function CreateUpdateProjectDataDeliveryRequestFormGroup() {
		return new FormGroup<UpdateProjectDataDeliveryRequestFormProperties>({
		});

	}

	export interface UpdateProjectRequest {
		appConfigResource?: ProjectAppConfigResourceConfig;
		description?: string;
	}
	export interface UpdateProjectRequestFormProperties {
		description: FormControl<string | null | undefined>,
	}
	export function CreateUpdateProjectRequestFormGroup() {
		return new FormGroup<UpdateProjectRequestFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * <p>This operation assigns feature variation to user sessions. For each user session, you pass in an <code>entityID</code> that represents the user. Evidently then checks the evaluation rules and assigns the variation.</p> <p>The first rules that are evaluated are the override rules. If the user's <code>entityID</code> matches an override rule, the user is served the variation specified by that rule.</p> <p>Next, if there is a launch of the feature, the user might be assigned to a variation in the launch. The chance of this depends on the percentage of users that are allocated to that launch. If the user is enrolled in the launch, the variation they are served depends on the allocation of the various feature variations used for the launch.</p> <p>If the user is not assigned to a launch, and there is an ongoing experiment for this feature, the user might be assigned to a variation in the experiment. The chance of this depends on the percentage of users that are allocated to that experiment. If the user is enrolled in the experiment, the variation they are served depends on the allocation of the various feature variations used for the experiment. </p> <p>If the user is not assigned to a launch or experiment, they are served the default variation.</p>
		 * Post projects/{project}/evaluations
		 * @param {string} project The name or ARN of the project that contains the feature being evaluated.
		 *     Min length: 0    Max length: 2048
		 * @return {BatchEvaluateFeatureResponse} Success
		 */
		BatchEvaluateFeature(project: string, requestBody: BatchEvaluateFeaturePostBody): Observable<BatchEvaluateFeatureResponse> {
			return this.http.post<BatchEvaluateFeatureResponse>(this.baseUri + 'projects/' + (project == null ? '' : encodeURIComponent(project)) + '/evaluations', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Creates an Evidently <i>experiment</i>. Before you create an experiment, you must create the feature to use for the experiment.</p> <p>An experiment helps you make feature design decisions based on evidence and data. An experiment can test as many as five variations at once. Evidently collects experiment data and analyzes it by statistical methods, and provides clear recommendations about which variations perform better.</p> <p>You can optionally specify a <code>segment</code> to have the experiment consider only certain audience types in the experiment, such as using only user sessions from a certain location or who use a certain internet browser.</p> <p>Don't use this operation to update an existing experiment. Instead, use <a href="https://docs.aws.amazon.com/cloudwatchevidently/latest/APIReference/API_UpdateExperiment.html">UpdateExperiment</a>. </p>
		 * Post projects/{project}/experiments
		 * @param {string} project The name or ARN of the project that you want to create the new experiment in.
		 *     Min length: 0    Max length: 2048
		 * @return {CreateExperimentResponse} Success
		 */
		CreateExperiment(project: string, requestBody: CreateExperimentPostBody): Observable<CreateExperimentResponse> {
			return this.http.post<CreateExperimentResponse>(this.baseUri + 'projects/' + (project == null ? '' : encodeURIComponent(project)) + '/experiments', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns configuration details about all the experiments in the specified project.
		 * Get projects/{project}/experiments
		 * @param {number} maxResults The maximum number of results to include in the response.
		 *     Minimum: 1    Maximum: 100
		 * @param {string} nextToken The token to use when requesting the next set of results. You received this token from a previous <code>ListExperiments</code> operation.
		 *     Min length: 1    Max length: 8192
		 * @param {string} project The name or ARN of the project to return the experiment list from.
		 *     Min length: 0    Max length: 2048
		 * @param {ExperimentStatus} status Use this optional parameter to limit the returned results to only the experiments with the status that you specify here.
		 * @return {ListExperimentsResponse} Success
		 */
		ListExperiments(maxResults: number | null | undefined, nextToken: string | null | undefined, project: string, status: ExperimentStatus | null | undefined): Observable<ListExperimentsResponse> {
			return this.http.get<ListExperimentsResponse>(this.baseUri + 'projects/' + (project == null ? '' : encodeURIComponent(project)) + '/experiments?maxResults=' + maxResults + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&status=' + status, {});
		}

		/**
		 * <p>Creates an Evidently <i>feature</i> that you want to launch or test. You can define up to five variations of a feature, and use these variations in your launches and experiments. A feature must be created in a project. For information about creating a project, see <a href="https://docs.aws.amazon.com/cloudwatchevidently/latest/APIReference/API_CreateProject.html">CreateProject</a>.</p> <p>Don't use this operation to update an existing feature. Instead, use <a href="https://docs.aws.amazon.com/cloudwatchevidently/latest/APIReference/API_UpdateFeature.html">UpdateFeature</a>. </p>
		 * Post projects/{project}/features
		 * @param {string} project The name or ARN of the project that is to contain the new feature.
		 *     Min length: 0    Max length: 2048
		 * @return {CreateFeatureResponse} Success
		 */
		CreateFeature(project: string, requestBody: CreateFeaturePostBody): Observable<CreateFeatureResponse> {
			return this.http.post<CreateFeatureResponse>(this.baseUri + 'projects/' + (project == null ? '' : encodeURIComponent(project)) + '/features', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns configuration details about all the features in the specified project.
		 * Get projects/{project}/features
		 * @param {number} maxResults The maximum number of results to include in the response.
		 *     Minimum: 1    Maximum: 100
		 * @param {string} nextToken The token to use when requesting the next set of results. You received this token from a previous <code>ListFeatures</code> operation.
		 *     Min length: 1    Max length: 8192
		 * @param {string} project The name or ARN of the project to return the feature list from.
		 *     Min length: 0    Max length: 2048
		 * @return {ListFeaturesResponse} Success
		 */
		ListFeatures(maxResults: number | null | undefined, nextToken: string | null | undefined, project: string): Observable<ListFeaturesResponse> {
			return this.http.get<ListFeaturesResponse>(this.baseUri + 'projects/' + (project == null ? '' : encodeURIComponent(project)) + '/features?maxResults=' + maxResults + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), {});
		}

		/**
		 * <p>Creates a <i>launch</i> of a given feature. Before you create a launch, you must create the feature to use for the launch.</p> <p>You can use a launch to safely validate new features by serving them to a specified percentage of your users while you roll out the feature. You can monitor the performance of the new feature to help you decide when to ramp up traffic to more users. This helps you reduce risk and identify unintended consequences before you fully launch the feature.</p> <p>Don't use this operation to update an existing launch. Instead, use <a href="https://docs.aws.amazon.com/cloudwatchevidently/latest/APIReference/API_UpdateLaunch.html">UpdateLaunch</a>. </p>
		 * Post projects/{project}/launches
		 * @param {string} project The name or ARN of the project that you want to create the launch in.
		 *     Min length: 0    Max length: 2048
		 * @return {CreateLaunchResponse} Success
		 */
		CreateLaunch(project: string, requestBody: CreateLaunchPostBody): Observable<CreateLaunchResponse> {
			return this.http.post<CreateLaunchResponse>(this.baseUri + 'projects/' + (project == null ? '' : encodeURIComponent(project)) + '/launches', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns configuration details about all the launches in the specified project.
		 * Get projects/{project}/launches
		 * @param {number} maxResults The maximum number of results to include in the response.
		 *     Minimum: 1    Maximum: 100
		 * @param {string} nextToken The token to use when requesting the next set of results. You received this token from a previous <code>ListLaunches</code> operation.
		 *     Min length: 1    Max length: 8192
		 * @param {string} project The name or ARN of the project to return the launch list from.
		 *     Min length: 0    Max length: 2048
		 * @param {ExperimentStatus} status Use this optional parameter to limit the returned results to only the launches with the status that you specify here.
		 * @return {ListLaunchesResponse} Success
		 */
		ListLaunches(maxResults: number | null | undefined, nextToken: string | null | undefined, project: string, status: ExperimentStatus | null | undefined): Observable<ListLaunchesResponse> {
			return this.http.get<ListLaunchesResponse>(this.baseUri + 'projects/' + (project == null ? '' : encodeURIComponent(project)) + '/launches?maxResults=' + maxResults + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&status=' + status, {});
		}

		/**
		 * <p>Creates a project, which is the logical object in Evidently that can contain features, launches, and experiments. Use projects to group similar features together.</p> <p>To update an existing project, use <a href="https://docs.aws.amazon.com/cloudwatchevidently/latest/APIReference/API_UpdateProject.html">UpdateProject</a>.</p>
		 * Post projects
		 * @return {CreateProjectResponse} Success
		 */
		CreateProject(requestBody: CreateProjectPostBody): Observable<CreateProjectResponse> {
			return this.http.post<CreateProjectResponse>(this.baseUri + 'projects', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns configuration details about all the projects in the current Region in your account.
		 * Get projects
		 * @param {number} maxResults The maximum number of results to include in the response.
		 *     Minimum: 1    Maximum: 50
		 * @param {string} nextToken The token to use when requesting the next set of results. You received this token from a previous <code>ListProjects</code> operation.
		 *     Min length: 1    Max length: 8192
		 * @return {ListProjectsResponse} Success
		 */
		ListProjects(maxResults: number | null | undefined, nextToken: string | null | undefined): Observable<ListProjectsResponse> {
			return this.http.get<ListProjectsResponse>(this.baseUri + 'projects?maxResults=' + maxResults + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), {});
		}

		/**
		 * <p>Use this operation to define a <i>segment</i> of your audience. A segment is a portion of your audience that share one or more characteristics. Examples could be Chrome browser users, users in Europe, or Firefox browser users in Europe who also fit other criteria that your application collects, such as age.</p> <p>Using a segment in an experiment limits that experiment to evaluate only the users who match the segment criteria. Using one or more segments in a launch allows you to define different traffic splits for the different audience segments.</p> <p>For more information about segment pattern syntax, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch-Evidently-segments.html#CloudWatch-Evidently-segments-syntax.html"> Segment rule pattern syntax</a>.</p> <p>The pattern that you define for a segment is matched against the value of <code>evaluationContext</code>, which is passed into Evidently in the <a href="https://docs.aws.amazon.com/cloudwatchevidently/latest/APIReference/API_EvaluateFeature.html">EvaluateFeature</a> operation, when Evidently assigns a feature variation to a user.</p>
		 * Post segments
		 * @return {CreateSegmentResponse} Success
		 */
		CreateSegment(requestBody: CreateSegmentPostBody): Observable<CreateSegmentResponse> {
			return this.http.post<CreateSegmentResponse>(this.baseUri + 'segments', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns a list of audience segments that you have created in your account in this Region.
		 * Get segments
		 * @param {number} maxResults The maximum number of results to include in the response. If you omit this, the default of 50 is used.
		 *     Minimum: 1    Maximum: 50
		 * @param {string} nextToken The token to use when requesting the next set of results. You received this token from a previous <code>ListSegments</code> operation.
		 *     Min length: 1    Max length: 8192
		 * @return {ListSegmentsResponse} Success
		 */
		ListSegments(maxResults: number | null | undefined, nextToken: string | null | undefined): Observable<ListSegmentsResponse> {
			return this.http.get<ListSegmentsResponse>(this.baseUri + 'segments?maxResults=' + maxResults + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), {});
		}

		/**
		 * <p>Deletes an Evidently experiment. The feature used for the experiment is not deleted.</p> <p>To stop an experiment without deleting it, use <a href="https://docs.aws.amazon.com/cloudwatchevidently/latest/APIReference/API_StopExperiment.html">StopExperiment</a>. </p>
		 * Delete projects/{project}/experiments/{experiment}
		 * @param {string} experiment The name of the experiment to delete.
		 *     Min length: 1    Max length: 127
		 * @param {string} project The name or ARN of the project that contains the experiment to delete.
		 *     Min length: 0    Max length: 2048
		 * @return {DeleteExperimentResponse} Success
		 */
		DeleteExperiment(experiment: string, project: string): Observable<DeleteExperimentResponse> {
			return this.http.delete<DeleteExperimentResponse>(this.baseUri + 'projects/' + (project == null ? '' : encodeURIComponent(project)) + '/experiments/' + (experiment == null ? '' : encodeURIComponent(experiment)), {});
		}

		/**
		 * Returns the details about one experiment. You must already know the experiment name. To retrieve a list of experiments in your account, use <a href="https://docs.aws.amazon.com/cloudwatchevidently/latest/APIReference/API_ListExperiments.html">ListExperiments</a>.
		 * Get projects/{project}/experiments/{experiment}
		 * @param {string} experiment The name of the experiment that you want to see the details of.
		 *     Min length: 1    Max length: 127
		 * @param {string} project The name or ARN of the project that contains the experiment.
		 *     Min length: 0    Max length: 2048
		 * @return {GetExperimentResponse} Success
		 */
		GetExperiment(experiment: string, project: string): Observable<GetExperimentResponse> {
			return this.http.get<GetExperimentResponse>(this.baseUri + 'projects/' + (project == null ? '' : encodeURIComponent(project)) + '/experiments/' + (experiment == null ? '' : encodeURIComponent(experiment)), {});
		}

		/**
		 * <p>Updates an Evidently experiment. </p> <p>Don't use this operation to update an experiment's tag. Instead, use <a href="https://docs.aws.amazon.com/cloudwatchevidently/latest/APIReference/API_TagResource.html">TagResource</a>. </p>
		 * Patch projects/{project}/experiments/{experiment}
		 * @param {string} experiment The name of the experiment to update.
		 *     Min length: 1    Max length: 127
		 * @param {string} project The name or ARN of the project that contains the experiment that you want to update.
		 *     Min length: 0    Max length: 2048
		 * @return {UpdateExperimentResponse} Success
		 */
		UpdateExperiment(experiment: string, project: string, requestBody: UpdateExperimentPatchBody): Observable<UpdateExperimentResponse> {
			return this.http.patch<UpdateExperimentResponse>(this.baseUri + 'projects/' + (project == null ? '' : encodeURIComponent(project)) + '/experiments/' + (experiment == null ? '' : encodeURIComponent(experiment)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes an Evidently feature.
		 * Delete projects/{project}/features/{feature}
		 * @param {string} feature The name of the feature to delete.
		 *     Min length: 1    Max length: 127
		 * @param {string} project The name or ARN of the project that contains the feature to delete.
		 *     Min length: 0    Max length: 2048
		 * @return {DeleteFeatureResponse} Success
		 */
		DeleteFeature(feature: string, project: string): Observable<DeleteFeatureResponse> {
			return this.http.delete<DeleteFeatureResponse>(this.baseUri + 'projects/' + (project == null ? '' : encodeURIComponent(project)) + '/features/' + (feature == null ? '' : encodeURIComponent(feature)), {});
		}

		/**
		 * Returns the details about one feature. You must already know the feature name. To retrieve a list of features in your account, use <a href="https://docs.aws.amazon.com/cloudwatchevidently/latest/APIReference/API_ListFeatures.html">ListFeatures</a>.
		 * Get projects/{project}/features/{feature}
		 * @param {string} feature The name of the feature that you want to retrieve information for.
		 *     Min length: 1    Max length: 127
		 * @param {string} project The name or ARN of the project that contains the feature.
		 *     Min length: 0    Max length: 2048
		 * @return {GetFeatureResponse} Success
		 */
		GetFeature(feature: string, project: string): Observable<GetFeatureResponse> {
			return this.http.get<GetFeatureResponse>(this.baseUri + 'projects/' + (project == null ? '' : encodeURIComponent(project)) + '/features/' + (feature == null ? '' : encodeURIComponent(feature)), {});
		}

		/**
		 * <p>Updates an existing feature.</p> <p>You can't use this operation to update the tags of an existing feature. Instead, use <a href="https://docs.aws.amazon.com/cloudwatchevidently/latest/APIReference/API_TagResource.html">TagResource</a>. </p>
		 * Patch projects/{project}/features/{feature}
		 * @param {string} feature The name of the feature to be updated.
		 *     Min length: 1    Max length: 127
		 * @param {string} project The name or ARN of the project that contains the feature to be updated.
		 *     Min length: 0    Max length: 2048
		 * @return {UpdateFeatureResponse} Success
		 */
		UpdateFeature(feature: string, project: string, requestBody: UpdateFeaturePatchBody): Observable<UpdateFeatureResponse> {
			return this.http.patch<UpdateFeatureResponse>(this.baseUri + 'projects/' + (project == null ? '' : encodeURIComponent(project)) + '/features/' + (feature == null ? '' : encodeURIComponent(feature)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Deletes an Evidently launch. The feature used for the launch is not deleted.</p> <p>To stop a launch without deleting it, use <a href="https://docs.aws.amazon.com/cloudwatchevidently/latest/APIReference/API_StopLaunch.html">StopLaunch</a>. </p>
		 * Delete projects/{project}/launches/{launch}
		 * @param {string} launch The name of the launch to delete.
		 *     Min length: 1    Max length: 127
		 * @param {string} project The name or ARN of the project that contains the launch to delete.
		 *     Min length: 0    Max length: 2048
		 * @return {DeleteLaunchResponse} Success
		 */
		DeleteLaunch(launch: string, project: string): Observable<DeleteLaunchResponse> {
			return this.http.delete<DeleteLaunchResponse>(this.baseUri + 'projects/' + (project == null ? '' : encodeURIComponent(project)) + '/launches/' + (launch == null ? '' : encodeURIComponent(launch)), {});
		}

		/**
		 * Returns the details about one launch. You must already know the launch name. To retrieve a list of launches in your account, use <a href="https://docs.aws.amazon.com/cloudwatchevidently/latest/APIReference/API_ListLaunches.html">ListLaunches</a>.
		 * Get projects/{project}/launches/{launch}
		 * @param {string} launch The name of the launch that you want to see the details of.
		 *     Min length: 1    Max length: 127
		 * @param {string} project The name or ARN of the project that contains the launch.
		 *     Min length: 0    Max length: 2048
		 * @return {GetLaunchResponse} Success
		 */
		GetLaunch(launch: string, project: string): Observable<GetLaunchResponse> {
			return this.http.get<GetLaunchResponse>(this.baseUri + 'projects/' + (project == null ? '' : encodeURIComponent(project)) + '/launches/' + (launch == null ? '' : encodeURIComponent(launch)), {});
		}

		/**
		 * <p>Updates a launch of a given feature. </p> <p>Don't use this operation to update the tags of an existing launch. Instead, use <a href="https://docs.aws.amazon.com/cloudwatchevidently/latest/APIReference/API_TagResource.html">TagResource</a>. </p>
		 * Patch projects/{project}/launches/{launch}
		 * @param {string} launch The name of the launch that is to be updated.
		 *     Min length: 1    Max length: 127
		 * @param {string} project The name or ARN of the project that contains the launch that you want to update.
		 *     Min length: 0    Max length: 2048
		 * @return {UpdateLaunchResponse} Success
		 */
		UpdateLaunch(launch: string, project: string, requestBody: UpdateLaunchPatchBody): Observable<UpdateLaunchResponse> {
			return this.http.patch<UpdateLaunchResponse>(this.baseUri + 'projects/' + (project == null ? '' : encodeURIComponent(project)) + '/launches/' + (launch == null ? '' : encodeURIComponent(launch)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes an Evidently project. Before you can delete a project, you must delete all the features that the project contains. To delete a feature, use <a href="https://docs.aws.amazon.com/cloudwatchevidently/latest/APIReference/API_DeleteFeature.html">DeleteFeature</a>.
		 * Delete projects/{project}
		 * @param {string} project The name or ARN of the project to delete.
		 *     Min length: 0    Max length: 2048
		 * @return {DeleteProjectResponse} Success
		 */
		DeleteProject(project: string): Observable<DeleteProjectResponse> {
			return this.http.delete<DeleteProjectResponse>(this.baseUri + 'projects/' + (project == null ? '' : encodeURIComponent(project)), {});
		}

		/**
		 * Returns the details about one launch. You must already know the project name. To retrieve a list of projects in your account, use <a href="https://docs.aws.amazon.com/cloudwatchevidently/latest/APIReference/API_ListProjects.html">ListProjects</a>.
		 * Get projects/{project}
		 * @param {string} project The name or ARN of the project that you want to see the details of.
		 *     Min length: 0    Max length: 2048
		 * @return {GetProjectResponse} Success
		 */
		GetProject(project: string): Observable<GetProjectResponse> {
			return this.http.get<GetProjectResponse>(this.baseUri + 'projects/' + (project == null ? '' : encodeURIComponent(project)), {});
		}

		/**
		 * <p>Updates the description of an existing project.</p> <p>To create a new project, use <a href="https://docs.aws.amazon.com/cloudwatchevidently/latest/APIReference/API_CreateProject.html">CreateProject</a>.</p> <p>Don't use this operation to update the data storage options of a project. Instead, use <a href="https://docs.aws.amazon.com/cloudwatchevidently/latest/APIReference/API_UpdateProjectDataDelivery.html">UpdateProjectDataDelivery</a>. </p> <p>Don't use this operation to update the tags of a project. Instead, use <a href="https://docs.aws.amazon.com/cloudwatchevidently/latest/APIReference/API_TagResource.html">TagResource</a>. </p>
		 * Patch projects/{project}
		 * @param {string} project The name or ARN of the project to update.
		 *     Min length: 0    Max length: 2048
		 * @return {UpdateProjectResponse} Success
		 */
		UpdateProject(project: string, requestBody: UpdateProjectPatchBody): Observable<UpdateProjectResponse> {
			return this.http.patch<UpdateProjectResponse>(this.baseUri + 'projects/' + (project == null ? '' : encodeURIComponent(project)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a segment. You can't delete a segment that is being used in a launch or experiment, even if that launch or experiment is not currently running.
		 * Delete segments/{segment}
		 * @param {string} segment Specifies the segment to delete.
		 *     Min length: 0    Max length: 2048
		 * @return {DeleteSegmentResponse} Success
		 */
		DeleteSegment(segment: string): Observable<DeleteSegmentResponse> {
			return this.http.delete<DeleteSegmentResponse>(this.baseUri + 'segments/' + (segment == null ? '' : encodeURIComponent(segment)), {});
		}

		/**
		 * Returns information about the specified segment. Specify the segment you want to view by specifying its ARN.
		 * Get segments/{segment}
		 * @param {string} segment The ARN of the segment to return information for.
		 *     Min length: 0    Max length: 2048
		 * @return {GetSegmentResponse} Success
		 */
		GetSegment(segment: string): Observable<GetSegmentResponse> {
			return this.http.get<GetSegmentResponse>(this.baseUri + 'segments/' + (segment == null ? '' : encodeURIComponent(segment)), {});
		}

		/**
		 * <p>This operation assigns a feature variation to one given user session. You pass in an <code>entityID</code> that represents the user. Evidently then checks the evaluation rules and assigns the variation.</p> <p>The first rules that are evaluated are the override rules. If the user's <code>entityID</code> matches an override rule, the user is served the variation specified by that rule.</p> <p>If there is a current launch with this feature that uses segment overrides, and if the user session's <code>evaluationContext</code> matches a segment rule defined in a segment override, the configuration in the segment overrides is used. For more information about segments, see <a href="https://docs.aws.amazon.com/cloudwatchevidently/latest/APIReference/API_CreateSegment.html">CreateSegment</a> and <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch-Evidently-segments.html">Use segments to focus your audience</a>.</p> <p>If there is a launch with no segment overrides, the user might be assigned to a variation in the launch. The chance of this depends on the percentage of users that are allocated to that launch. If the user is enrolled in the launch, the variation they are served depends on the allocation of the various feature variations used for the launch.</p> <p>If the user is not assigned to a launch, and there is an ongoing experiment for this feature, the user might be assigned to a variation in the experiment. The chance of this depends on the percentage of users that are allocated to that experiment.</p> <p>If the experiment uses a segment, then only user sessions with <code>evaluationContext</code> values that match the segment rule are used in the experiment.</p> <p>If the user is enrolled in the experiment, the variation they are served depends on the allocation of the various feature variations used for the experiment. </p> <p>If the user is not assigned to a launch or experiment, they are served the default variation.</p>
		 * Post projects/{project}/evaluations/{feature}
		 * @param {string} feature The name of the feature being evaluated.
		 *     Min length: 1    Max length: 127
		 * @param {string} project The name or ARN of the project that contains this feature.
		 *     Min length: 0    Max length: 2048
		 * @return {EvaluateFeatureResponse} Success
		 */
		EvaluateFeature(feature: string, project: string, requestBody: EvaluateFeaturePostBody): Observable<EvaluateFeatureResponse> {
			return this.http.post<EvaluateFeatureResponse>(this.baseUri + 'projects/' + (project == null ? '' : encodeURIComponent(project)) + '/evaluations/' + (feature == null ? '' : encodeURIComponent(feature)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Retrieves the results of a running or completed experiment. No results are available until there have been 100 events for each variation and at least 10 minutes have passed since the start of the experiment. To increase the statistical power, Evidently performs an additional offline p-value analysis at the end of the experiment. Offline p-value analysis can detect statistical significance in some cases where the anytime p-values used during the experiment do not find statistical significance.</p> <p>Experiment results are available up to 63 days after the start of the experiment. They are not available after that because of CloudWatch data retention policies.</p>
		 * Post projects/{project}/experiments/{experiment}/results
		 * @param {string} experiment The name of the experiment to retrieve the results of.
		 *     Min length: 1    Max length: 127
		 * @param {string} project The name or ARN of the project that contains the experiment that you want to see the results of.
		 *     Min length: 0    Max length: 2048
		 * @return {GetExperimentResultsResponse} Success
		 */
		GetExperimentResults(experiment: string, project: string, requestBody: GetExperimentResultsPostBody): Observable<GetExperimentResultsResponse> {
			return this.http.post<GetExperimentResultsResponse>(this.baseUri + 'projects/' + (project == null ? '' : encodeURIComponent(project)) + '/experiments/' + (experiment == null ? '' : encodeURIComponent(experiment)) + '/results', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Use this operation to find which experiments or launches are using a specified segment.
		 * Get segments/{segment}/references#type
		 * @param {number} maxResults The maximum number of results to include in the response. If you omit this, the default of 50 is used.
		 *     Minimum: 1    Maximum: 100
		 * @param {string} nextToken The token to use when requesting the next set of results. You received this token from a previous <code>ListSegmentReferences</code> operation.
		 *     Min length: 1    Max length: 8192
		 * @param {string} segment The ARN of the segment that you want to view information for.
		 *     Min length: 0    Max length: 2048
		 * @param {SegmentReferenceResourceType} type Specifies whether to return information about launches or experiments that use this segment.
		 * @return {ListSegmentReferencesResponse} Success
		 */
		ListSegmentReferences(maxResults: number | null | undefined, nextToken: string | null | undefined, segment: string, type: SegmentReferenceResourceType): Observable<ListSegmentReferencesResponse> {
			return this.http.get<ListSegmentReferencesResponse>(this.baseUri + 'segments/' + (segment == null ? '' : encodeURIComponent(segment)) + '/references#type?maxResults=' + maxResults + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&type=' + type, {});
		}

		/**
		 * Displays the tags associated with an Evidently resource.
		 * Get tags/{resourceArn}
		 * @param {string} resourceArn The ARN of the resource that you want to see the tags of.
		 *     Min length: 0    Max length: 2048
		 * @return {ListTagsForResourceResponse} Success
		 */
		ListTagsForResource(resourceArn: string): Observable<ListTagsForResourceResponse> {
			return this.http.get<ListTagsForResourceResponse>(this.baseUri + 'tags/' + (resourceArn == null ? '' : encodeURIComponent(resourceArn)), {});
		}

		/**
		 * <p>Assigns one or more tags (key-value pairs) to the specified CloudWatch Evidently resource. Projects, features, launches, and experiments can be tagged.</p> <p>Tags can help you organize and categorize your resources. You can also use them to scope user permissions by granting a user permission to access or change only resources with certain tag values.</p> <p>Tags don't have any semantic meaning to Amazon Web Services and are interpreted strictly as strings of characters.</p> <p>You can use the <code>TagResource</code> action with a resource that already has tags. If you specify a new tag key for the resource, this tag is appended to the list of tags associated with the alarm. If you specify a tag key that is already associated with the resource, the new tag value that you specify replaces the previous value for that tag.</p> <p>You can associate as many as 50 tags with a resource.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging Amazon Web Services resources</a>.</p>
		 * Post tags/{resourceArn}
		 * @param {string} resourceArn The ARN of the CloudWatch Evidently resource that you're adding tags to.
		 *     Min length: 0    Max length: 2048
		 * @return {TagResourceResponse} Success
		 */
		TagResource(resourceArn: string, requestBody: TagResourcePostBody): Observable<TagResourceResponse> {
			return this.http.post<TagResourceResponse>(this.baseUri + 'tags/' + (resourceArn == null ? '' : encodeURIComponent(resourceArn)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Sends performance events to Evidently. These events can be used to evaluate a launch or an experiment.
		 * Post events/projects/{project}
		 * @param {string} project The name or ARN of the project to write the events to.
		 *     Min length: 0    Max length: 2048
		 * @return {PutProjectEventsResponse} Success
		 */
		PutProjectEvents(project: string, requestBody: PutProjectEventsPostBody): Observable<PutProjectEventsResponse> {
			return this.http.post<PutProjectEventsResponse>(this.baseUri + 'events/projects/' + (project == null ? '' : encodeURIComponent(project)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Starts an existing experiment. To create an experiment, use <a href="https://docs.aws.amazon.com/cloudwatchevidently/latest/APIReference/API_CreateExperiment.html">CreateExperiment</a>.
		 * Post projects/{project}/experiments/{experiment}/start
		 * @param {string} experiment The name of the experiment to start.
		 *     Min length: 1    Max length: 127
		 * @param {string} project The name or ARN of the project that contains the experiment to start.
		 *     Min length: 0    Max length: 2048
		 * @return {StartExperimentResponse} Success
		 */
		StartExperiment(experiment: string, project: string, requestBody: StartExperimentPostBody): Observable<StartExperimentResponse> {
			return this.http.post<StartExperimentResponse>(this.baseUri + 'projects/' + (project == null ? '' : encodeURIComponent(project)) + '/experiments/' + (experiment == null ? '' : encodeURIComponent(experiment)) + '/start', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Starts an existing launch. To create a launch, use <a href="https://docs.aws.amazon.com/cloudwatchevidently/latest/APIReference/API_CreateLaunch.html">CreateLaunch</a>.
		 * Post projects/{project}/launches/{launch}/start
		 * @param {string} launch The name of the launch to start.
		 *     Min length: 1    Max length: 127
		 * @param {string} project The name or ARN of the project that contains the launch to start.
		 *     Min length: 0    Max length: 2048
		 * @return {StartLaunchResponse} Success
		 */
		StartLaunch(launch: string, project: string): Observable<StartLaunchResponse> {
			return this.http.post<StartLaunchResponse>(this.baseUri + 'projects/' + (project == null ? '' : encodeURIComponent(project)) + '/launches/' + (launch == null ? '' : encodeURIComponent(launch)) + '/start', null, {});
		}

		/**
		 * Stops an experiment that is currently running. If you stop an experiment, you can't resume it or restart it.
		 * Post projects/{project}/experiments/{experiment}/cancel
		 * @param {string} experiment The name of the experiment to stop.
		 *     Min length: 1    Max length: 127
		 * @param {string} project The name or ARN of the project that contains the experiment to stop.
		 *     Min length: 0    Max length: 2048
		 * @return {StopExperimentResponse} Success
		 */
		StopExperiment(experiment: string, project: string, requestBody: StopExperimentPostBody): Observable<StopExperimentResponse> {
			return this.http.post<StopExperimentResponse>(this.baseUri + 'projects/' + (project == null ? '' : encodeURIComponent(project)) + '/experiments/' + (experiment == null ? '' : encodeURIComponent(experiment)) + '/cancel', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Stops a launch that is currently running. After you stop a launch, you will not be able to resume it or restart it. Also, it will not be evaluated as a rule for traffic allocation, and the traffic that was allocated to the launch will instead be available to the feature's experiment, if there is one. Otherwise, all traffic will be served the default variation after the launch is stopped.
		 * Post projects/{project}/launches/{launch}/cancel
		 * @param {string} launch The name of the launch to stop.
		 *     Min length: 1    Max length: 127
		 * @param {string} project The name or ARN of the project that contains the launch that you want to stop.
		 *     Min length: 0    Max length: 2048
		 * @return {StopLaunchResponse} Success
		 */
		StopLaunch(launch: string, project: string, requestBody: StopLaunchPostBody): Observable<StopLaunchResponse> {
			return this.http.post<StopLaunchResponse>(this.baseUri + 'projects/' + (project == null ? '' : encodeURIComponent(project)) + '/launches/' + (launch == null ? '' : encodeURIComponent(launch)) + '/cancel', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Use this operation to test a rules pattern that you plan to use to create an audience segment. For more information about segments, see <a href="https://docs.aws.amazon.com/cloudwatchevidently/latest/APIReference/API_CreateSegment.html">CreateSegment</a>.
		 * Post test-segment-pattern
		 * @return {TestSegmentPatternResponse} Success
		 */
		TestSegmentPattern(requestBody: TestSegmentPatternPostBody): Observable<TestSegmentPatternResponse> {
			return this.http.post<TestSegmentPatternResponse>(this.baseUri + 'test-segment-pattern', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Removes one or more tags from the specified resource.
		 * Delete tags/{resourceArn}#tagKeys
		 * @param {string} resourceArn The ARN of the CloudWatch Evidently resource that you're removing tags from.
		 *     Min length: 0    Max length: 2048
		 * @param {Array<string>} tagKeys The list of tag keys to remove from the resource.
		 *     Minimum items: 0    Maximum items: 50
		 * @return {UntagResourceResponse} Success
		 */
		UntagResource(resourceArn: string, tagKeys: Array<string>): Observable<UntagResourceResponse> {
			return this.http.delete<UntagResourceResponse>(this.baseUri + 'tags/' + (resourceArn == null ? '' : encodeURIComponent(resourceArn)) + '#tagKeys&' + tagKeys.map(z => `tagKeys=${encodeURIComponent(z)}`).join('&'), {});
		}

		/**
		 * <p>Updates the data storage options for this project. If you store evaluation events, you an keep them and analyze them on your own. If you choose not to store evaluation events, Evidently deletes them after using them to produce metrics and other experiment results that you can view.</p> <p>You can't specify both <code>cloudWatchLogs</code> and <code>s3Destination</code> in the same operation.</p>
		 * Patch projects/{project}/data-delivery
		 * @param {string} project The name or ARN of the project that you want to modify the data storage options for.
		 *     Min length: 0    Max length: 2048
		 * @return {UpdateProjectDataDeliveryResponse} Success
		 */
		UpdateProjectDataDelivery(project: string, requestBody: UpdateProjectDataDeliveryPatchBody): Observable<UpdateProjectDataDeliveryResponse> {
			return this.http.patch<UpdateProjectDataDeliveryResponse>(this.baseUri + 'projects/' + (project == null ? '' : encodeURIComponent(project)) + '/data-delivery', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

	export interface BatchEvaluateFeaturePostBody {

		/**
		 * An array of structures, where each structure assigns a feature variation to one user session.
		 * Required
		 * Minimum items: 1
		 * Maximum items: 20
		 */
		requests: Array<EvaluationRequest>;
	}
	export interface BatchEvaluateFeaturePostBodyFormProperties {
	}
	export function CreateBatchEvaluateFeaturePostBodyFormGroup() {
		return new FormGroup<BatchEvaluateFeaturePostBodyFormProperties>({
		});

	}

	export interface CreateExperimentPostBody {

		/**
		 * An optional description of the experiment.
		 * Min length: 0
		 * Max length: 160
		 */
		description?: string | null;

		/**
		 * An array of structures that defines the metrics used for the experiment, and whether a higher or lower value for each metric is the goal.
		 * Required
		 * Minimum items: 1
		 * Maximum items: 3
		 */
		metricGoals: Array<MetricGoalConfig>;

		/**
		 * A name for the new experiment.
		 * Required
		 * Min length: 1
		 * Max length: 127
		 */
		name: string;

		/** A structure that contains the configuration of which variation to use as the "control" version. The "control" version is used for comparison with other variations. This structure also specifies how much experiment traffic is allocated to each variation. */
		onlineAbConfig?: CreateExperimentPostBodyOnlineAbConfig;

		/**
		 * When Evidently assigns a particular user session to an experiment, it must use a randomization ID to determine which variation the user session is served. This randomization ID is a combination of the entity ID and <code>randomizationSalt</code>. If you omit <code>randomizationSalt</code>, Evidently uses the experiment name as the <code>randomizationSalt</code>.
		 * Min length: 0
		 * Max length: 127
		 */
		randomizationSalt?: string | null;

		/**
		 * <p>The portion of the available audience that you want to allocate to this experiment, in thousandths of a percent. The available audience is the total audience minus the audience that you have allocated to overrides or current launches of this feature.</p> <p>This is represented in thousandths of a percent. For example, specify 10,000 to allocate 10% of the available audience.</p>
		 * Minimum: 0
		 * Maximum: 100000
		 */
		samplingRate?: number | null;

		/**
		 * Specifies an audience <i>segment</i> to use in the experiment. When a segment is used in an experiment, only user sessions that match the segment pattern are used in the experiment.
		 * Min length: 0
		 * Max length: 2048
		 */
		segment?: string | null;

		/** <p>Assigns one or more tags (key-value pairs) to the experiment.</p> <p>Tags can help you organize and categorize your resources. You can also use them to scope user permissions by granting a user permission to access or change only resources with certain tag values.</p> <p>Tags don't have any semantic meaning to Amazon Web Services and are interpreted strictly as strings of characters.</p> <p>You can associate as many as 50 tags with an experiment.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging Amazon Web Services resources</a>.</p> */
		tags?: {[id: string]: string };

		/**
		 * An array of structures that describe the configuration of each feature variation used in the experiment.
		 * Required
		 * Minimum items: 0
		 * Maximum items: 5
		 */
		treatments: Array<TreatmentConfig>;
	}
	export interface CreateExperimentPostBodyFormProperties {

		/**
		 * An optional description of the experiment.
		 * Min length: 0
		 * Max length: 160
		 */
		description: FormControl<string | null | undefined>,

		/**
		 * A name for the new experiment.
		 * Required
		 * Min length: 1
		 * Max length: 127
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * When Evidently assigns a particular user session to an experiment, it must use a randomization ID to determine which variation the user session is served. This randomization ID is a combination of the entity ID and <code>randomizationSalt</code>. If you omit <code>randomizationSalt</code>, Evidently uses the experiment name as the <code>randomizationSalt</code>.
		 * Min length: 0
		 * Max length: 127
		 */
		randomizationSalt: FormControl<string | null | undefined>,

		/**
		 * <p>The portion of the available audience that you want to allocate to this experiment, in thousandths of a percent. The available audience is the total audience minus the audience that you have allocated to overrides or current launches of this feature.</p> <p>This is represented in thousandths of a percent. For example, specify 10,000 to allocate 10% of the available audience.</p>
		 * Minimum: 0
		 * Maximum: 100000
		 */
		samplingRate: FormControl<number | null | undefined>,

		/**
		 * Specifies an audience <i>segment</i> to use in the experiment. When a segment is used in an experiment, only user sessions that match the segment pattern are used in the experiment.
		 * Min length: 0
		 * Max length: 2048
		 */
		segment: FormControl<string | null | undefined>,

		/** <p>Assigns one or more tags (key-value pairs) to the experiment.</p> <p>Tags can help you organize and categorize your resources. You can also use them to scope user permissions by granting a user permission to access or change only resources with certain tag values.</p> <p>Tags don't have any semantic meaning to Amazon Web Services and are interpreted strictly as strings of characters.</p> <p>You can associate as many as 50 tags with an experiment.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging Amazon Web Services resources</a>.</p> */
		tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateCreateExperimentPostBodyFormGroup() {
		return new FormGroup<CreateExperimentPostBodyFormProperties>({
			description: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(160), Validators.pattern('.*')]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(127), Validators.pattern('^[-a-zA-Z0-9._]*$')]),
			randomizationSalt: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(127), Validators.pattern('.*')]),
			samplingRate: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(100000)]),
			segment: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(2048), Validators.pattern('(^[-a-zA-Z0-9._]*$)|(arn:[^:]*:[^:]*:[^:]*:[^:]*:segment/[-a-zA-Z0-9._]*)')]),
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}

	export interface CreateExperimentPostBodyOnlineAbConfig {
		controlTreatmentName?: string;
		treatmentWeights?: TreatmentToWeightMap;
	}
	export interface CreateExperimentPostBodyOnlineAbConfigFormProperties {
		controlTreatmentName: FormControl<string | null | undefined>,
	}
	export function CreateCreateExperimentPostBodyOnlineAbConfigFormGroup() {
		return new FormGroup<CreateExperimentPostBodyOnlineAbConfigFormProperties>({
			controlTreatmentName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateFeaturePostBody {

		/**
		 * <p>The name of the variation to use as the default variation. The default variation is served to users who are not allocated to any ongoing launches or experiments of this feature.</p> <p>This variation must also be listed in the <code>variations</code> structure.</p> <p>If you omit <code>defaultVariation</code>, the first variation listed in the <code>variations</code> structure is used as the default variation.</p>
		 * Min length: 1
		 * Max length: 127
		 */
		defaultVariation?: string | null;

		/**
		 * An optional description of the feature.
		 * Min length: 0
		 * Max length: 160
		 */
		description?: string | null;

		/** <p>Specify users that should always be served a specific variation of a feature. Each user is specified by a key-value pair . For each key, specify a user by entering their user ID, account ID, or some other identifier. For the value, specify the name of the variation that they are to be served.</p> <p>This parameter is limited to 2500 overrides or a total of 40KB. The 40KB limit includes an overhead of 6 bytes per override.</p> */
		entityOverrides?: {[id: string]: string };

		/** Specify <code>ALL_RULES</code> to activate the traffic allocation specified by any ongoing launches or experiments. Specify <code>DEFAULT_VARIATION</code> to serve the default variation to all users instead. */
		evaluationStrategy?: FeatureEvaluationStrategy | null;

		/**
		 * The name for the new feature.
		 * Required
		 * Min length: 1
		 * Max length: 127
		 */
		name: string;

		/** <p>Assigns one or more tags (key-value pairs) to the feature.</p> <p>Tags can help you organize and categorize your resources. You can also use them to scope user permissions by granting a user permission to access or change only resources with certain tag values.</p> <p>Tags don't have any semantic meaning to Amazon Web Services and are interpreted strictly as strings of characters.</p> <p>You can associate as many as 50 tags with a feature.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging Amazon Web Services resources</a>.</p> */
		tags?: {[id: string]: string };

		/**
		 * An array of structures that contain the configuration of the feature's different variations.
		 * Required
		 * Minimum items: 1
		 * Maximum items: 5
		 */
		variations: Array<VariationConfig>;
	}
	export interface CreateFeaturePostBodyFormProperties {

		/**
		 * <p>The name of the variation to use as the default variation. The default variation is served to users who are not allocated to any ongoing launches or experiments of this feature.</p> <p>This variation must also be listed in the <code>variations</code> structure.</p> <p>If you omit <code>defaultVariation</code>, the first variation listed in the <code>variations</code> structure is used as the default variation.</p>
		 * Min length: 1
		 * Max length: 127
		 */
		defaultVariation: FormControl<string | null | undefined>,

		/**
		 * An optional description of the feature.
		 * Min length: 0
		 * Max length: 160
		 */
		description: FormControl<string | null | undefined>,

		/** <p>Specify users that should always be served a specific variation of a feature. Each user is specified by a key-value pair . For each key, specify a user by entering their user ID, account ID, or some other identifier. For the value, specify the name of the variation that they are to be served.</p> <p>This parameter is limited to 2500 overrides or a total of 40KB. The 40KB limit includes an overhead of 6 bytes per override.</p> */
		entityOverrides: FormControl<{[id: string]: string } | null | undefined>,

		/** Specify <code>ALL_RULES</code> to activate the traffic allocation specified by any ongoing launches or experiments. Specify <code>DEFAULT_VARIATION</code> to serve the default variation to all users instead. */
		evaluationStrategy: FormControl<FeatureEvaluationStrategy | null | undefined>,

		/**
		 * The name for the new feature.
		 * Required
		 * Min length: 1
		 * Max length: 127
		 */
		name: FormControl<string | null | undefined>,

		/** <p>Assigns one or more tags (key-value pairs) to the feature.</p> <p>Tags can help you organize and categorize your resources. You can also use them to scope user permissions by granting a user permission to access or change only resources with certain tag values.</p> <p>Tags don't have any semantic meaning to Amazon Web Services and are interpreted strictly as strings of characters.</p> <p>You can associate as many as 50 tags with a feature.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging Amazon Web Services resources</a>.</p> */
		tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateCreateFeaturePostBodyFormGroup() {
		return new FormGroup<CreateFeaturePostBodyFormProperties>({
			defaultVariation: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(127), Validators.pattern('^[-a-zA-Z0-9._]*$')]),
			description: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(160), Validators.pattern('.*')]),
			entityOverrides: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			evaluationStrategy: new FormControl<FeatureEvaluationStrategy | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(127), Validators.pattern('^[-a-zA-Z0-9._]*$')]),
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}

	export interface CreateLaunchPostBody {

		/**
		 * An optional description for the launch.
		 * Min length: 0
		 * Max length: 160
		 */
		description?: string | null;

		/**
		 * An array of structures that contains the feature and variations that are to be used for the launch.
		 * Required
		 * Minimum items: 1
		 * Maximum items: 5
		 */
		groups: Array<LaunchGroupConfig>;

		/**
		 * An array of structures that define the metrics that will be used to monitor the launch performance.
		 * Minimum items: 0
		 * Maximum items: 3
		 */
		metricMonitors?: Array<MetricMonitorConfig>;

		/**
		 * The name for the new launch.
		 * Required
		 * Min length: 1
		 * Max length: 127
		 */
		name: string;

		/**
		 * When Evidently assigns a particular user session to a launch, it must use a randomization ID to determine which variation the user session is served. This randomization ID is a combination of the entity ID and <code>randomizationSalt</code>. If you omit <code>randomizationSalt</code>, Evidently uses the launch name as the <code>randomizationSalt</code>.
		 * Min length: 0
		 * Max length: 127
		 */
		randomizationSalt?: string | null;

		/** An array of structures that define the traffic allocation percentages among the feature variations during each step of a launch. This also defines the start time of each step. */
		scheduledSplitsConfig?: CreateLaunchPostBodyScheduledSplitsConfig;

		/** <p>Assigns one or more tags (key-value pairs) to the launch.</p> <p>Tags can help you organize and categorize your resources. You can also use them to scope user permissions by granting a user permission to access or change only resources with certain tag values.</p> <p>Tags don't have any semantic meaning to Amazon Web Services and are interpreted strictly as strings of characters.</p> <p>You can associate as many as 50 tags with a launch.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging Amazon Web Services resources</a>.</p> */
		tags?: {[id: string]: string };
	}
	export interface CreateLaunchPostBodyFormProperties {

		/**
		 * An optional description for the launch.
		 * Min length: 0
		 * Max length: 160
		 */
		description: FormControl<string | null | undefined>,

		/**
		 * The name for the new launch.
		 * Required
		 * Min length: 1
		 * Max length: 127
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * When Evidently assigns a particular user session to a launch, it must use a randomization ID to determine which variation the user session is served. This randomization ID is a combination of the entity ID and <code>randomizationSalt</code>. If you omit <code>randomizationSalt</code>, Evidently uses the launch name as the <code>randomizationSalt</code>.
		 * Min length: 0
		 * Max length: 127
		 */
		randomizationSalt: FormControl<string | null | undefined>,

		/** <p>Assigns one or more tags (key-value pairs) to the launch.</p> <p>Tags can help you organize and categorize your resources. You can also use them to scope user permissions by granting a user permission to access or change only resources with certain tag values.</p> <p>Tags don't have any semantic meaning to Amazon Web Services and are interpreted strictly as strings of characters.</p> <p>You can associate as many as 50 tags with a launch.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging Amazon Web Services resources</a>.</p> */
		tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateCreateLaunchPostBodyFormGroup() {
		return new FormGroup<CreateLaunchPostBodyFormProperties>({
			description: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(160), Validators.pattern('.*')]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(127), Validators.pattern('^[-a-zA-Z0-9._]*$')]),
			randomizationSalt: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(127), Validators.pattern('.*')]),
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}

	export interface CreateLaunchPostBodyScheduledSplitsConfig {
		steps?: Array<ScheduledSplitConfig>;
	}
	export interface CreateLaunchPostBodyScheduledSplitsConfigFormProperties {
	}
	export function CreateCreateLaunchPostBodyScheduledSplitsConfigFormGroup() {
		return new FormGroup<CreateLaunchPostBodyScheduledSplitsConfigFormProperties>({
		});

	}

	export interface CreateProjectPostBody {

		/** <p>Use this parameter to configure client-side evaluation for your project. Client-side evaluation allows your application to assign variations to user sessions locally instead of by calling the <a href="https://docs.aws.amazon.com/cloudwatchevidently/latest/APIReference/API_EvaluateFeature.html">EvaluateFeature</a> operation to assign the variations. This mitigates the latency and availability risks that come with an API call.</p> <p> <code>ProjectAppConfigResource</code> is a structure that defines the configuration of how your application integrates with AppConfig to run client-side evaluation.</p> */
		appConfigResource?: CreateProjectPostBodyAppConfigResource;

		/** A structure that contains information about where Evidently is to store evaluation events for longer term storage. */
		dataDelivery?: CreateProjectPostBodyDataDelivery;

		/**
		 * An optional description of the project.
		 * Min length: 0
		 * Max length: 160
		 */
		description?: string | null;

		/**
		 * The name for the project.
		 * Required
		 * Min length: 1
		 * Max length: 127
		 */
		name: string;

		/** <p>Assigns one or more tags (key-value pairs) to the project.</p> <p>Tags can help you organize and categorize your resources. You can also use them to scope user permissions by granting a user permission to access or change only resources with certain tag values.</p> <p>Tags don't have any semantic meaning to Amazon Web Services and are interpreted strictly as strings of characters.</p> <p>You can associate as many as 50 tags with a project.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging Amazon Web Services resources</a>.</p> */
		tags?: {[id: string]: string };
	}
	export interface CreateProjectPostBodyFormProperties {

		/**
		 * An optional description of the project.
		 * Min length: 0
		 * Max length: 160
		 */
		description: FormControl<string | null | undefined>,

		/**
		 * The name for the project.
		 * Required
		 * Min length: 1
		 * Max length: 127
		 */
		name: FormControl<string | null | undefined>,

		/** <p>Assigns one or more tags (key-value pairs) to the project.</p> <p>Tags can help you organize and categorize your resources. You can also use them to scope user permissions by granting a user permission to access or change only resources with certain tag values.</p> <p>Tags don't have any semantic meaning to Amazon Web Services and are interpreted strictly as strings of characters.</p> <p>You can associate as many as 50 tags with a project.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging Amazon Web Services resources</a>.</p> */
		tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateCreateProjectPostBodyFormGroup() {
		return new FormGroup<CreateProjectPostBodyFormProperties>({
			description: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(160), Validators.pattern('.*')]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(127), Validators.pattern('^[-a-zA-Z0-9._]*$')]),
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}

	export interface CreateProjectPostBodyAppConfigResource {
		applicationId?: string;
		environmentId?: string;
	}
	export interface CreateProjectPostBodyAppConfigResourceFormProperties {
		applicationId: FormControl<string | null | undefined>,
		environmentId: FormControl<string | null | undefined>,
	}
	export function CreateCreateProjectPostBodyAppConfigResourceFormGroup() {
		return new FormGroup<CreateProjectPostBodyAppConfigResourceFormProperties>({
			applicationId: new FormControl<string | null | undefined>(undefined),
			environmentId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateProjectPostBodyDataDelivery {
		cloudWatchLogs?: CloudWatchLogsDestinationConfig;
		s3Destination?: S3DestinationConfig;
	}
	export interface CreateProjectPostBodyDataDeliveryFormProperties {
	}
	export function CreateCreateProjectPostBodyDataDeliveryFormGroup() {
		return new FormGroup<CreateProjectPostBodyDataDeliveryFormProperties>({
		});

	}

	export interface CreateSegmentPostBody {

		/**
		 * An optional description for this segment.
		 * Min length: 0
		 * Max length: 160
		 */
		description?: string | null;

		/**
		 * A name for the segment.
		 * Required
		 * Min length: 1
		 * Max length: 64
		 */
		name: string;

		/**
		 * The pattern to use for the segment. For more information about pattern syntax, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch-Evidently-segments.html#CloudWatch-Evidently-segments-syntax.html"> Segment rule pattern syntax</a>.
		 * Required
		 * Min length: 1
		 * Max length: 1024
		 */
		pattern: string;

		/** <p>Assigns one or more tags (key-value pairs) to the segment.</p> <p>Tags can help you organize and categorize your resources. You can also use them to scope user permissions by granting a user permission to access or change only resources with certain tag values.</p> <p>Tags don't have any semantic meaning to Amazon Web Services and are interpreted strictly as strings of characters.</p> <p>You can associate as many as 50 tags with a segment.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging Amazon Web Services resources</a>.</p> */
		tags?: {[id: string]: string };
	}
	export interface CreateSegmentPostBodyFormProperties {

		/**
		 * An optional description for this segment.
		 * Min length: 0
		 * Max length: 160
		 */
		description: FormControl<string | null | undefined>,

		/**
		 * A name for the segment.
		 * Required
		 * Min length: 1
		 * Max length: 64
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * The pattern to use for the segment. For more information about pattern syntax, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch-Evidently-segments.html#CloudWatch-Evidently-segments-syntax.html"> Segment rule pattern syntax</a>.
		 * Required
		 * Min length: 1
		 * Max length: 1024
		 */
		pattern: FormControl<string | null | undefined>,

		/** <p>Assigns one or more tags (key-value pairs) to the segment.</p> <p>Tags can help you organize and categorize your resources. You can also use them to scope user permissions by granting a user permission to access or change only resources with certain tag values.</p> <p>Tags don't have any semantic meaning to Amazon Web Services and are interpreted strictly as strings of characters.</p> <p>You can associate as many as 50 tags with a segment.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging Amazon Web Services resources</a>.</p> */
		tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateCreateSegmentPostBodyFormGroup() {
		return new FormGroup<CreateSegmentPostBodyFormProperties>({
			description: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(160), Validators.pattern('.*')]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(64), Validators.pattern('^[-a-zA-Z0-9._]*$')]),
			pattern: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(1024)]),
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}

	export interface UpdateExperimentPatchBody {

		/**
		 * An optional description of the experiment.
		 * Min length: 0
		 * Max length: 160
		 */
		description?: string | null;

		/**
		 * An array of structures that defines the metrics used for the experiment, and whether a higher or lower value for each metric is the goal.
		 * Minimum items: 1
		 * Maximum items: 3
		 */
		metricGoals?: Array<MetricGoalConfig>;

		/** A structure that contains the configuration of which variation to use as the "control" version. The "control" version is used for comparison with other variations. This structure also specifies how much experiment traffic is allocated to each variation. */
		onlineAbConfig?: UpdateExperimentPatchBodyOnlineAbConfig;

		/**
		 * When Evidently assigns a particular user session to an experiment, it must use a randomization ID to determine which variation the user session is served. This randomization ID is a combination of the entity ID and <code>randomizationSalt</code>. If you omit <code>randomizationSalt</code>, Evidently uses the experiment name as the <code>randomizationSalt</code>.
		 * Min length: 0
		 * Max length: 127
		 */
		randomizationSalt?: string | null;

		/** Removes a segment from being used in an experiment. You can't use this parameter if the experiment is currently running. */
		removeSegment?: boolean | null;

		/**
		 * <p>The portion of the available audience that you want to allocate to this experiment, in thousandths of a percent. The available audience is the total audience minus the audience that you have allocated to overrides or current launches of this feature.</p> <p>This is represented in thousandths of a percent. For example, specify 20,000 to allocate 20% of the available audience.</p>
		 * Minimum: 0
		 * Maximum: 100000
		 */
		samplingRate?: number | null;

		/**
		 * Adds an audience <i>segment</i> to an experiment. When a segment is used in an experiment, only user sessions that match the segment pattern are used in the experiment. You can't use this parameter if the experiment is currently running.
		 * Min length: 0
		 * Max length: 2048
		 */
		segment?: string | null;

		/**
		 * An array of structures that define the variations being tested in the experiment.
		 * Minimum items: 0
		 * Maximum items: 5
		 */
		treatments?: Array<TreatmentConfig>;
	}
	export interface UpdateExperimentPatchBodyFormProperties {

		/**
		 * An optional description of the experiment.
		 * Min length: 0
		 * Max length: 160
		 */
		description: FormControl<string | null | undefined>,

		/**
		 * When Evidently assigns a particular user session to an experiment, it must use a randomization ID to determine which variation the user session is served. This randomization ID is a combination of the entity ID and <code>randomizationSalt</code>. If you omit <code>randomizationSalt</code>, Evidently uses the experiment name as the <code>randomizationSalt</code>.
		 * Min length: 0
		 * Max length: 127
		 */
		randomizationSalt: FormControl<string | null | undefined>,

		/** Removes a segment from being used in an experiment. You can't use this parameter if the experiment is currently running. */
		removeSegment: FormControl<boolean | null | undefined>,

		/**
		 * <p>The portion of the available audience that you want to allocate to this experiment, in thousandths of a percent. The available audience is the total audience minus the audience that you have allocated to overrides or current launches of this feature.</p> <p>This is represented in thousandths of a percent. For example, specify 20,000 to allocate 20% of the available audience.</p>
		 * Minimum: 0
		 * Maximum: 100000
		 */
		samplingRate: FormControl<number | null | undefined>,

		/**
		 * Adds an audience <i>segment</i> to an experiment. When a segment is used in an experiment, only user sessions that match the segment pattern are used in the experiment. You can't use this parameter if the experiment is currently running.
		 * Min length: 0
		 * Max length: 2048
		 */
		segment: FormControl<string | null | undefined>,
	}
	export function CreateUpdateExperimentPatchBodyFormGroup() {
		return new FormGroup<UpdateExperimentPatchBodyFormProperties>({
			description: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(160), Validators.pattern('.*')]),
			randomizationSalt: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(127), Validators.pattern('.*')]),
			removeSegment: new FormControl<boolean | null | undefined>(undefined),
			samplingRate: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(100000)]),
			segment: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(2048), Validators.pattern('(^[-a-zA-Z0-9._]*$)|(arn:[^:]*:[^:]*:[^:]*:[^:]*:segment/[-a-zA-Z0-9._]*)')]),
		});

	}

	export interface UpdateExperimentPatchBodyOnlineAbConfig {
		controlTreatmentName?: string;
		treatmentWeights?: TreatmentToWeightMap;
	}
	export interface UpdateExperimentPatchBodyOnlineAbConfigFormProperties {
		controlTreatmentName: FormControl<string | null | undefined>,
	}
	export function CreateUpdateExperimentPatchBodyOnlineAbConfigFormGroup() {
		return new FormGroup<UpdateExperimentPatchBodyOnlineAbConfigFormProperties>({
			controlTreatmentName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateFeaturePatchBody {

		/**
		 * To update variation configurations for this feature, or add new ones, specify this structure. In this array, include any variations that you want to add or update. If the array includes a variation name that already exists for this feature, it is updated. If it includes a new variation name, it is added as a new variation.
		 * Minimum items: 1
		 * Maximum items: 5
		 */
		addOrUpdateVariations?: Array<VariationConfig>;

		/**
		 * The name of the variation to use as the default variation. The default variation is served to users who are not allocated to any ongoing launches or experiments of this feature.
		 * Min length: 1
		 * Max length: 127
		 */
		defaultVariation?: string | null;

		/**
		 * An optional description of the feature.
		 * Min length: 0
		 * Max length: 160
		 */
		description?: string | null;

		/** <p>Specified users that should always be served a specific variation of a feature. Each user is specified by a key-value pair . For each key, specify a user by entering their user ID, account ID, or some other identifier. For the value, specify the name of the variation that they are to be served.</p> <p>This parameter is limited to 2500 overrides or a total of 40KB. The 40KB limit includes an overhead of 6 bytes per override.</p> */
		entityOverrides?: {[id: string]: string };

		/** Specify <code>ALL_RULES</code> to activate the traffic allocation specified by any ongoing launches or experiments. Specify <code>DEFAULT_VARIATION</code> to serve the default variation to all users instead. */
		evaluationStrategy?: FeatureEvaluationStrategy | null;

		/**
		 * <p>Removes a variation from the feature. If the variation you specify doesn't exist, then this makes no change and does not report an error.</p> <p>This operation fails if you try to remove a variation that is part of an ongoing launch or experiment.</p>
		 * Minimum items: 0
		 * Maximum items: 5
		 */
		removeVariations?: Array<string>;
	}
	export interface UpdateFeaturePatchBodyFormProperties {

		/**
		 * The name of the variation to use as the default variation. The default variation is served to users who are not allocated to any ongoing launches or experiments of this feature.
		 * Min length: 1
		 * Max length: 127
		 */
		defaultVariation: FormControl<string | null | undefined>,

		/**
		 * An optional description of the feature.
		 * Min length: 0
		 * Max length: 160
		 */
		description: FormControl<string | null | undefined>,

		/** <p>Specified users that should always be served a specific variation of a feature. Each user is specified by a key-value pair . For each key, specify a user by entering their user ID, account ID, or some other identifier. For the value, specify the name of the variation that they are to be served.</p> <p>This parameter is limited to 2500 overrides or a total of 40KB. The 40KB limit includes an overhead of 6 bytes per override.</p> */
		entityOverrides: FormControl<{[id: string]: string } | null | undefined>,

		/** Specify <code>ALL_RULES</code> to activate the traffic allocation specified by any ongoing launches or experiments. Specify <code>DEFAULT_VARIATION</code> to serve the default variation to all users instead. */
		evaluationStrategy: FormControl<FeatureEvaluationStrategy | null | undefined>,
	}
	export function CreateUpdateFeaturePatchBodyFormGroup() {
		return new FormGroup<UpdateFeaturePatchBodyFormProperties>({
			defaultVariation: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(127), Validators.pattern('^[-a-zA-Z0-9._]*$')]),
			description: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(160), Validators.pattern('.*')]),
			entityOverrides: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			evaluationStrategy: new FormControl<FeatureEvaluationStrategy | null | undefined>(undefined),
		});

	}

	export interface UpdateLaunchPatchBody {

		/**
		 * An optional description for the launch.
		 * Min length: 0
		 * Max length: 160
		 */
		description?: string | null;

		/**
		 * An array of structures that contains the feature and variations that are to be used for the launch.
		 * Minimum items: 1
		 * Maximum items: 5
		 */
		groups?: Array<LaunchGroupConfig>;

		/**
		 * An array of structures that define the metrics that will be used to monitor the launch performance.
		 * Minimum items: 0
		 * Maximum items: 3
		 */
		metricMonitors?: Array<MetricMonitorConfig>;

		/**
		 * When Evidently assigns a particular user session to a launch, it must use a randomization ID to determine which variation the user session is served. This randomization ID is a combination of the entity ID and <code>randomizationSalt</code>. If you omit <code>randomizationSalt</code>, Evidently uses the launch name as the <code>randomizationSalt</code>.
		 * Min length: 0
		 * Max length: 127
		 */
		randomizationSalt?: string | null;

		/** An array of structures that define the traffic allocation percentages among the feature variations during each step of a launch. This also defines the start time of each step. */
		scheduledSplitsConfig?: UpdateLaunchPatchBodyScheduledSplitsConfig;
	}
	export interface UpdateLaunchPatchBodyFormProperties {

		/**
		 * An optional description for the launch.
		 * Min length: 0
		 * Max length: 160
		 */
		description: FormControl<string | null | undefined>,

		/**
		 * When Evidently assigns a particular user session to a launch, it must use a randomization ID to determine which variation the user session is served. This randomization ID is a combination of the entity ID and <code>randomizationSalt</code>. If you omit <code>randomizationSalt</code>, Evidently uses the launch name as the <code>randomizationSalt</code>.
		 * Min length: 0
		 * Max length: 127
		 */
		randomizationSalt: FormControl<string | null | undefined>,
	}
	export function CreateUpdateLaunchPatchBodyFormGroup() {
		return new FormGroup<UpdateLaunchPatchBodyFormProperties>({
			description: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(160), Validators.pattern('.*')]),
			randomizationSalt: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(127), Validators.pattern('.*')]),
		});

	}

	export interface UpdateLaunchPatchBodyScheduledSplitsConfig {
		steps?: Array<ScheduledSplitConfig>;
	}
	export interface UpdateLaunchPatchBodyScheduledSplitsConfigFormProperties {
	}
	export function CreateUpdateLaunchPatchBodyScheduledSplitsConfigFormGroup() {
		return new FormGroup<UpdateLaunchPatchBodyScheduledSplitsConfigFormProperties>({
		});

	}

	export interface UpdateProjectPatchBody {

		/** <p>Use this parameter to configure client-side evaluation for your project. Client-side evaluation allows your application to assign variations to user sessions locally instead of by calling the <a href="https://docs.aws.amazon.com/cloudwatchevidently/latest/APIReference/API_EvaluateFeature.html">EvaluateFeature</a> operation to assign the variations. This mitigates the latency and availability risks that come with an API call.</p> <p> <code>ProjectAppConfigResource</code> is a structure that defines the configuration of how your application integrates with AppConfig to run client-side evaluation.</p> */
		appConfigResource?: UpdateProjectPatchBodyAppConfigResource;

		/**
		 * An optional description of the project.
		 * Min length: 0
		 * Max length: 160
		 */
		description?: string | null;
	}
	export interface UpdateProjectPatchBodyFormProperties {

		/**
		 * An optional description of the project.
		 * Min length: 0
		 * Max length: 160
		 */
		description: FormControl<string | null | undefined>,
	}
	export function CreateUpdateProjectPatchBodyFormGroup() {
		return new FormGroup<UpdateProjectPatchBodyFormProperties>({
			description: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(160), Validators.pattern('.*')]),
		});

	}

	export interface UpdateProjectPatchBodyAppConfigResource {
		applicationId?: string;
		environmentId?: string;
	}
	export interface UpdateProjectPatchBodyAppConfigResourceFormProperties {
		applicationId: FormControl<string | null | undefined>,
		environmentId: FormControl<string | null | undefined>,
	}
	export function CreateUpdateProjectPatchBodyAppConfigResourceFormGroup() {
		return new FormGroup<UpdateProjectPatchBodyAppConfigResourceFormProperties>({
			applicationId: new FormControl<string | null | undefined>(undefined),
			environmentId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface EvaluateFeaturePostBody {

		/**
		 * An internal ID that represents a unique user of the application. This <code>entityID</code> is checked against any override rules assigned for this feature.
		 * Required
		 * Min length: 1
		 * Max length: 512
		 */
		entityId: string;

		/** <p>A JSON object of attributes that you can optionally pass in as part of the evaluation event sent to Evidently from the user session. Evidently can use this value to match user sessions with defined audience segments. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch-Evidently-segments.html">Use segments to focus your audience</a>.</p> <p>If you include this parameter, the value must be a JSON object. A JSON array is not supported.</p> */
		evaluationContext?: string | null;
	}
	export interface EvaluateFeaturePostBodyFormProperties {

		/**
		 * An internal ID that represents a unique user of the application. This <code>entityID</code> is checked against any override rules assigned for this feature.
		 * Required
		 * Min length: 1
		 * Max length: 512
		 */
		entityId: FormControl<string | null | undefined>,

		/** <p>A JSON object of attributes that you can optionally pass in as part of the evaluation event sent to Evidently from the user session. Evidently can use this value to match user sessions with defined audience segments. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch-Evidently-segments.html">Use segments to focus your audience</a>.</p> <p>If you include this parameter, the value must be a JSON object. A JSON array is not supported.</p> */
		evaluationContext: FormControl<string | null | undefined>,
	}
	export function CreateEvaluateFeaturePostBodyFormGroup() {
		return new FormGroup<EvaluateFeaturePostBodyFormProperties>({
			entityId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(512), Validators.pattern('.*')]),
			evaluationContext: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetExperimentResultsPostBody {

		/** The statistic used to calculate experiment results. Currently the only valid value is <code>mean</code>, which uses the mean of the collected values as the statistic. */
		baseStat?: ExperimentBaseStat | null;

		/** The date and time that the experiment ended, if it is completed. This must be no longer than 30 days after the experiment start time. */
		endTime?: Date | null;

		/**
		 * The names of the experiment metrics that you want to see the results of.
		 * Required
		 * Minimum items: 1
		 * Maximum items: 1
		 */
		metricNames: Array<string>;

		/**
		 * In seconds, the amount of time to aggregate results together.
		 * Minimum: 300
		 * Maximum: 90000
		 */
		period?: number | null;

		/**
		 * The names of the report types that you want to see. Currently, <code>BayesianInference</code> is the only valid value.
		 * Minimum items: 0
		 * Maximum items: 5
		 */
		reportNames?: Array<ExperimentReportName>;

		/**
		 * <p>The statistics that you want to see in the returned results.</p> <ul> <li> <p> <code>PValue</code> specifies to use p-values for the results. A p-value is used in hypothesis testing to measure how often you are willing to make a mistake in rejecting the null hypothesis. A general practice is to reject the null hypothesis and declare that the results are statistically significant when the p-value is less than 0.05.</p> </li> <li> <p> <code>ConfidenceInterval</code> specifies a confidence interval for the results. The confidence interval represents the range of values for the chosen metric that is likely to contain the true difference between the <code>baseStat</code> of a variation and the baseline. Evidently returns the 95% confidence interval. </p> </li> <li> <p> <code>TreatmentEffect</code> is the difference in the statistic specified by the <code>baseStat</code> parameter between each variation and the default variation. </p> </li> <li> <p> <code>BaseStat</code> returns the statistical values collected for the metric for each variation. The statistic uses the same statistic specified in the <code>baseStat</code> parameter. Therefore, if <code>baseStat</code> is <code>mean</code>, this returns the mean of the values collected for each variation.</p> </li> </ul>
		 * Minimum items: 0
		 * Maximum items: 5
		 */
		resultStats?: Array<ExperimentResultRequestType>;

		/** The date and time that the experiment started. */
		startTime?: Date | null;

		/**
		 * The names of the experiment treatments that you want to see the results for.
		 * Required
		 * Minimum items: 1
		 * Maximum items: 5
		 */
		treatmentNames: Array<string>;
	}
	export interface GetExperimentResultsPostBodyFormProperties {

		/** The statistic used to calculate experiment results. Currently the only valid value is <code>mean</code>, which uses the mean of the collected values as the statistic. */
		baseStat: FormControl<ExperimentBaseStat | null | undefined>,

		/** The date and time that the experiment ended, if it is completed. This must be no longer than 30 days after the experiment start time. */
		endTime: FormControl<Date | null | undefined>,

		/**
		 * In seconds, the amount of time to aggregate results together.
		 * Minimum: 300
		 * Maximum: 90000
		 */
		period: FormControl<number | null | undefined>,

		/** The date and time that the experiment started. */
		startTime: FormControl<Date | null | undefined>,
	}
	export function CreateGetExperimentResultsPostBodyFormGroup() {
		return new FormGroup<GetExperimentResultsPostBodyFormProperties>({
			baseStat: new FormControl<ExperimentBaseStat | null | undefined>(undefined),
			endTime: new FormControl<Date | null | undefined>(undefined),
			period: new FormControl<number | null | undefined>(undefined, [Validators.min(300), Validators.max(90000)]),
			startTime: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface TagResourcePostBody {

		/**
		 * The list of key-value pairs to associate with the resource.
		 * Required
		 */
		tags: {[id: string]: string };
	}
	export interface TagResourcePostBodyFormProperties {

		/**
		 * The list of key-value pairs to associate with the resource.
		 * Required
		 */
		tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateTagResourcePostBodyFormGroup() {
		return new FormGroup<TagResourcePostBodyFormProperties>({
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface PutProjectEventsPostBody {

		/**
		 * An array of event structures that contain the performance data that is being sent to Evidently.
		 * Required
		 * Minimum items: 0
		 * Maximum items: 50
		 */
		events: Array<Event>;
	}
	export interface PutProjectEventsPostBodyFormProperties {
	}
	export function CreatePutProjectEventsPostBodyFormGroup() {
		return new FormGroup<PutProjectEventsPostBodyFormProperties>({
		});

	}

	export interface StartExperimentPostBody {

		/**
		 * The date and time to end the experiment. This must be no more than 30 days after the experiment starts.
		 * Required
		 */
		analysisCompleteTime: Date;
	}
	export interface StartExperimentPostBodyFormProperties {

		/**
		 * The date and time to end the experiment. This must be no more than 30 days after the experiment starts.
		 * Required
		 */
		analysisCompleteTime: FormControl<Date | null | undefined>,
	}
	export function CreateStartExperimentPostBodyFormGroup() {
		return new FormGroup<StartExperimentPostBodyFormProperties>({
			analysisCompleteTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface StopExperimentPostBody {

		/** Specify whether the experiment is to be considered <code>COMPLETED</code> or <code>CANCELLED</code> after it stops. */
		desiredState?: ExperimentStopDesiredState | null;

		/**
		 * A string that describes why you are stopping the experiment.
		 * Min length: 0
		 * Max length: 160
		 */
		reason?: string | null;
	}
	export interface StopExperimentPostBodyFormProperties {

		/** Specify whether the experiment is to be considered <code>COMPLETED</code> or <code>CANCELLED</code> after it stops. */
		desiredState: FormControl<ExperimentStopDesiredState | null | undefined>,

		/**
		 * A string that describes why you are stopping the experiment.
		 * Min length: 0
		 * Max length: 160
		 */
		reason: FormControl<string | null | undefined>,
	}
	export function CreateStopExperimentPostBodyFormGroup() {
		return new FormGroup<StopExperimentPostBodyFormProperties>({
			desiredState: new FormControl<ExperimentStopDesiredState | null | undefined>(undefined),
			reason: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(160), Validators.pattern('.*')]),
		});

	}

	export interface StopLaunchPostBody {

		/** Specify whether to consider the launch as <code>COMPLETED</code> or <code>CANCELLED</code> after it stops. */
		desiredState?: ExperimentStopDesiredState | null;

		/**
		 * A string that describes why you are stopping the launch.
		 * Min length: 0
		 * Max length: 160
		 */
		reason?: string | null;
	}
	export interface StopLaunchPostBodyFormProperties {

		/** Specify whether to consider the launch as <code>COMPLETED</code> or <code>CANCELLED</code> after it stops. */
		desiredState: FormControl<ExperimentStopDesiredState | null | undefined>,

		/**
		 * A string that describes why you are stopping the launch.
		 * Min length: 0
		 * Max length: 160
		 */
		reason: FormControl<string | null | undefined>,
	}
	export function CreateStopLaunchPostBodyFormGroup() {
		return new FormGroup<StopLaunchPostBodyFormProperties>({
			desiredState: new FormControl<ExperimentStopDesiredState | null | undefined>(undefined),
			reason: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(160), Validators.pattern('.*')]),
		});

	}

	export interface TestSegmentPatternPostBody {

		/**
		 * The pattern to test.
		 * Required
		 * Min length: 1
		 * Max length: 1024
		 */
		pattern: string;

		/**
		 * A sample <code>evaluationContext</code> JSON block to test against the specified pattern.
		 * Required
		 */
		payload: string;
	}
	export interface TestSegmentPatternPostBodyFormProperties {

		/**
		 * The pattern to test.
		 * Required
		 * Min length: 1
		 * Max length: 1024
		 */
		pattern: FormControl<string | null | undefined>,

		/**
		 * A sample <code>evaluationContext</code> JSON block to test against the specified pattern.
		 * Required
		 */
		payload: FormControl<string | null | undefined>,
	}
	export function CreateTestSegmentPatternPostBodyFormGroup() {
		return new FormGroup<TestSegmentPatternPostBodyFormProperties>({
			pattern: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(1024)]),
			payload: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UpdateProjectDataDeliveryPatchBody {

		/** A structure containing the CloudWatch Logs log group where the project stores evaluation events. */
		cloudWatchLogs?: UpdateProjectDataDeliveryPatchBodyCloudWatchLogs;

		/** If the project stores evaluation events in an Amazon S3 bucket, this structure stores the bucket name and bucket prefix. */
		s3Destination?: UpdateProjectDataDeliveryPatchBodyS3Destination;
	}
	export interface UpdateProjectDataDeliveryPatchBodyFormProperties {
	}
	export function CreateUpdateProjectDataDeliveryPatchBodyFormGroup() {
		return new FormGroup<UpdateProjectDataDeliveryPatchBodyFormProperties>({
		});

	}

	export interface UpdateProjectDataDeliveryPatchBodyCloudWatchLogs {
		logGroup?: string;
	}
	export interface UpdateProjectDataDeliveryPatchBodyCloudWatchLogsFormProperties {
		logGroup: FormControl<string | null | undefined>,
	}
	export function CreateUpdateProjectDataDeliveryPatchBodyCloudWatchLogsFormGroup() {
		return new FormGroup<UpdateProjectDataDeliveryPatchBodyCloudWatchLogsFormProperties>({
			logGroup: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateProjectDataDeliveryPatchBodyS3Destination {
		bucket?: string;
		prefix?: string;
	}
	export interface UpdateProjectDataDeliveryPatchBodyS3DestinationFormProperties {
		bucket: FormControl<string | null | undefined>,
		prefix: FormControl<string | null | undefined>,
	}
	export function CreateUpdateProjectDataDeliveryPatchBodyS3DestinationFormGroup() {
		return new FormGroup<UpdateProjectDataDeliveryPatchBodyS3DestinationFormProperties>({
			bucket: new FormControl<string | null | undefined>(undefined),
			prefix: new FormControl<string | null | undefined>(undefined),
		});

	}

}

