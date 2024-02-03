import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** Message that represents an arbitrary HTTP body. It should only be used for payload formats that can't be represented as JSON, such as raw binary or an HTML page. This message can be used both in streaming and non-streaming API methods in the request as well as the response. It can be used as a top-level request field, which is convenient if one wants to extract parameters from either the URL or HTTP template into the request fields and also want access to the raw HTTP body. Example: message GetResourceRequest { // A unique request id. string request_id = 1; // The raw HTTP body is bound to this field. google.api.HttpBody http_body = 2; } service ResourceService { rpc GetResource(GetResourceRequest) returns (google.api.HttpBody); rpc UpdateResource(google.api.HttpBody) returns (google.protobuf.Empty); } Example with streaming methods: service CaldavService { rpc GetCalendar(stream google.api.HttpBody) returns (stream google.api.HttpBody); rpc UpdateCalendar(stream google.api.HttpBody) returns (stream google.api.HttpBody); } Use of this type only changes how the request and response bodies are handled, all other features will continue to work unchanged. */
	export interface GoogleApi__HttpBody {

		/** The HTTP Content-Type header value specifying the content type of the body. */
		contentType?: string | null;

		/** The HTTP request/response body as raw binary. */
		data?: string | null;

		/** Application specific response metadata. Must be set in the first response for streaming APIs. */
		extensions?: Array<string>;
	}

	/** Message that represents an arbitrary HTTP body. It should only be used for payload formats that can't be represented as JSON, such as raw binary or an HTML page. This message can be used both in streaming and non-streaming API methods in the request as well as the response. It can be used as a top-level request field, which is convenient if one wants to extract parameters from either the URL or HTTP template into the request fields and also want access to the raw HTTP body. Example: message GetResourceRequest { // A unique request id. string request_id = 1; // The raw HTTP body is bound to this field. google.api.HttpBody http_body = 2; } service ResourceService { rpc GetResource(GetResourceRequest) returns (google.api.HttpBody); rpc UpdateResource(google.api.HttpBody) returns (google.protobuf.Empty); } Example with streaming methods: service CaldavService { rpc GetCalendar(stream google.api.HttpBody) returns (stream google.api.HttpBody); rpc UpdateCalendar(stream google.api.HttpBody) returns (stream google.api.HttpBody); } Use of this type only changes how the request and response bodies are handled, all other features will continue to work unchanged. */
	export interface GoogleApi__HttpBodyFormProperties {

		/** The HTTP Content-Type header value specifying the content type of the body. */
		contentType: FormControl<string | null | undefined>,

		/** The HTTP request/response body as raw binary. */
		data: FormControl<string | null | undefined>,
	}
	export function CreateGoogleApi__HttpBodyFormGroup() {
		return new FormGroup<GoogleApi__HttpBodyFormProperties>({
			contentType: new FormControl<string | null | undefined>(undefined),
			data: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GoogleCloudMlV1_AutomatedStoppingConfig_DecayCurveAutomatedStoppingConfig {

		/** If true, measurement.elapsed_time is used as the x-axis of each Trials Decay Curve. Otherwise, Measurement.steps will be used as the x-axis. */
		useElapsedTime?: boolean | null;
	}
	export interface GoogleCloudMlV1_AutomatedStoppingConfig_DecayCurveAutomatedStoppingConfigFormProperties {

		/** If true, measurement.elapsed_time is used as the x-axis of each Trials Decay Curve. Otherwise, Measurement.steps will be used as the x-axis. */
		useElapsedTime: FormControl<boolean | null | undefined>,
	}
	export function CreateGoogleCloudMlV1_AutomatedStoppingConfig_DecayCurveAutomatedStoppingConfigFormGroup() {
		return new FormGroup<GoogleCloudMlV1_AutomatedStoppingConfig_DecayCurveAutomatedStoppingConfigFormProperties>({
			useElapsedTime: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** The median automated stopping rule stops a pending trial if the trial's best objective_value is strictly below the median 'performance' of all completed trials reported up to the trial's last measurement. Currently, 'performance' refers to the running average of the objective values reported by the trial in each measurement. */
	export interface GoogleCloudMlV1_AutomatedStoppingConfig_MedianAutomatedStoppingConfig {

		/** If true, the median automated stopping rule applies to measurement.use_elapsed_time, which means the elapsed_time field of the current trial's latest measurement is used to compute the median objective value for each completed trial. */
		useElapsedTime?: boolean | null;
	}

	/** The median automated stopping rule stops a pending trial if the trial's best objective_value is strictly below the median 'performance' of all completed trials reported up to the trial's last measurement. Currently, 'performance' refers to the running average of the objective values reported by the trial in each measurement. */
	export interface GoogleCloudMlV1_AutomatedStoppingConfig_MedianAutomatedStoppingConfigFormProperties {

		/** If true, the median automated stopping rule applies to measurement.use_elapsed_time, which means the elapsed_time field of the current trial's latest measurement is used to compute the median objective value for each completed trial. */
		useElapsedTime: FormControl<boolean | null | undefined>,
	}
	export function CreateGoogleCloudMlV1_AutomatedStoppingConfig_MedianAutomatedStoppingConfigFormGroup() {
		return new FormGroup<GoogleCloudMlV1_AutomatedStoppingConfig_MedianAutomatedStoppingConfigFormProperties>({
			useElapsedTime: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** An observed value of a metric. */
	export interface GoogleCloudMlV1_HyperparameterOutput_HyperparameterMetric {

		/** The objective value at this training step. */
		objectiveValue?: number | null;

		/** The global training step for this metric. */
		trainingStep?: string | null;
	}

	/** An observed value of a metric. */
	export interface GoogleCloudMlV1_HyperparameterOutput_HyperparameterMetricFormProperties {

		/** The objective value at this training step. */
		objectiveValue: FormControl<number | null | undefined>,

		/** The global training step for this metric. */
		trainingStep: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudMlV1_HyperparameterOutput_HyperparameterMetricFormGroup() {
		return new FormGroup<GoogleCloudMlV1_HyperparameterOutput_HyperparameterMetricFormProperties>({
			objectiveValue: new FormControl<number | null | undefined>(undefined),
			trainingStep: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A message representing a metric in the measurement. */
	export interface GoogleCloudMlV1_Measurement_Metric {

		/** Required. Metric name. */
		metric?: string | null;

		/** Required. The value for this metric. */
		value?: number | null;
	}

	/** A message representing a metric in the measurement. */
	export interface GoogleCloudMlV1_Measurement_MetricFormProperties {

		/** Required. Metric name. */
		metric: FormControl<string | null | undefined>,

		/** Required. The value for this metric. */
		value: FormControl<number | null | undefined>,
	}
	export function CreateGoogleCloudMlV1_Measurement_MetricFormGroup() {
		return new FormGroup<GoogleCloudMlV1_Measurement_MetricFormProperties>({
			metric: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface GoogleCloudMlV1_StudyConfigParameterSpec_CategoricalValueSpec {

		/** Must be specified if type is `CATEGORICAL`. The list of possible categories. */
		values?: Array<string>;
	}
	export interface GoogleCloudMlV1_StudyConfigParameterSpec_CategoricalValueSpecFormProperties {
	}
	export function CreateGoogleCloudMlV1_StudyConfigParameterSpec_CategoricalValueSpecFormGroup() {
		return new FormGroup<GoogleCloudMlV1_StudyConfigParameterSpec_CategoricalValueSpecFormProperties>({
		});

	}

	export interface GoogleCloudMlV1_StudyConfigParameterSpec_DiscreteValueSpec {

		/** Must be specified if type is `DISCRETE`. A list of feasible points. The list should be in strictly increasing order. For instance, this parameter might have possible settings of 1.5, 2.5, and 4.0. This list should not contain more than 1,000 values. */
		values?: Array<number>;
	}
	export interface GoogleCloudMlV1_StudyConfigParameterSpec_DiscreteValueSpecFormProperties {
	}
	export function CreateGoogleCloudMlV1_StudyConfigParameterSpec_DiscreteValueSpecFormGroup() {
		return new FormGroup<GoogleCloudMlV1_StudyConfigParameterSpec_DiscreteValueSpecFormProperties>({
		});

	}

	export interface GoogleCloudMlV1_StudyConfigParameterSpec_DoubleValueSpec {

		/** Must be specified if type is `DOUBLE`. Maximum value of the parameter. */
		maxValue?: number | null;

		/** Must be specified if type is `DOUBLE`. Minimum value of the parameter. */
		minValue?: number | null;
	}
	export interface GoogleCloudMlV1_StudyConfigParameterSpec_DoubleValueSpecFormProperties {

		/** Must be specified if type is `DOUBLE`. Maximum value of the parameter. */
		maxValue: FormControl<number | null | undefined>,

		/** Must be specified if type is `DOUBLE`. Minimum value of the parameter. */
		minValue: FormControl<number | null | undefined>,
	}
	export function CreateGoogleCloudMlV1_StudyConfigParameterSpec_DoubleValueSpecFormGroup() {
		return new FormGroup<GoogleCloudMlV1_StudyConfigParameterSpec_DoubleValueSpecFormProperties>({
			maxValue: new FormControl<number | null | undefined>(undefined),
			minValue: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface GoogleCloudMlV1_StudyConfigParameterSpec_IntegerValueSpec {

		/** Must be specified if type is `INTEGER`. Maximum value of the parameter. */
		maxValue?: string | null;

		/** Must be specified if type is `INTEGER`. Minimum value of the parameter. */
		minValue?: string | null;
	}
	export interface GoogleCloudMlV1_StudyConfigParameterSpec_IntegerValueSpecFormProperties {

		/** Must be specified if type is `INTEGER`. Maximum value of the parameter. */
		maxValue: FormControl<string | null | undefined>,

		/** Must be specified if type is `INTEGER`. Minimum value of the parameter. */
		minValue: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudMlV1_StudyConfigParameterSpec_IntegerValueSpecFormGroup() {
		return new FormGroup<GoogleCloudMlV1_StudyConfigParameterSpec_IntegerValueSpecFormProperties>({
			maxValue: new FormControl<string | null | undefined>(undefined),
			minValue: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents the spec to match categorical values from parent parameter. */
	export interface GoogleCloudMlV1_StudyConfigParameterSpec_MatchingParentCategoricalValueSpec {

		/** Matches values of the parent parameter with type 'CATEGORICAL'. All values must exist in `categorical_value_spec` of parent parameter. */
		values?: Array<string>;
	}

	/** Represents the spec to match categorical values from parent parameter. */
	export interface GoogleCloudMlV1_StudyConfigParameterSpec_MatchingParentCategoricalValueSpecFormProperties {
	}
	export function CreateGoogleCloudMlV1_StudyConfigParameterSpec_MatchingParentCategoricalValueSpecFormGroup() {
		return new FormGroup<GoogleCloudMlV1_StudyConfigParameterSpec_MatchingParentCategoricalValueSpecFormProperties>({
		});

	}


	/** Represents the spec to match discrete values from parent parameter. */
	export interface GoogleCloudMlV1_StudyConfigParameterSpec_MatchingParentDiscreteValueSpec {

		/** Matches values of the parent parameter with type 'DISCRETE'. All values must exist in `discrete_value_spec` of parent parameter. */
		values?: Array<number>;
	}

	/** Represents the spec to match discrete values from parent parameter. */
	export interface GoogleCloudMlV1_StudyConfigParameterSpec_MatchingParentDiscreteValueSpecFormProperties {
	}
	export function CreateGoogleCloudMlV1_StudyConfigParameterSpec_MatchingParentDiscreteValueSpecFormGroup() {
		return new FormGroup<GoogleCloudMlV1_StudyConfigParameterSpec_MatchingParentDiscreteValueSpecFormProperties>({
		});

	}


	/** Represents the spec to match integer values from parent parameter. */
	export interface GoogleCloudMlV1_StudyConfigParameterSpec_MatchingParentIntValueSpec {

		/** Matches values of the parent parameter with type 'INTEGER'. All values must lie in `integer_value_spec` of parent parameter. */
		values?: Array<string>;
	}

	/** Represents the spec to match integer values from parent parameter. */
	export interface GoogleCloudMlV1_StudyConfigParameterSpec_MatchingParentIntValueSpecFormProperties {
	}
	export function CreateGoogleCloudMlV1_StudyConfigParameterSpec_MatchingParentIntValueSpecFormGroup() {
		return new FormGroup<GoogleCloudMlV1_StudyConfigParameterSpec_MatchingParentIntValueSpecFormProperties>({
		});

	}


	/** Represents a metric to optimize. */
	export interface GoogleCloudMlV1_StudyConfig_MetricSpec {

		/** Required. The optimization goal of the metric. */
		goal?: GoogleCloudMlV1_StudyConfig_MetricSpecGoal | null;

		/** Required. The name of the metric. */
		metric?: string | null;
	}

	/** Represents a metric to optimize. */
	export interface GoogleCloudMlV1_StudyConfig_MetricSpecFormProperties {

		/** Required. The optimization goal of the metric. */
		goal: FormControl<GoogleCloudMlV1_StudyConfig_MetricSpecGoal | null | undefined>,

		/** Required. The name of the metric. */
		metric: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudMlV1_StudyConfig_MetricSpecFormGroup() {
		return new FormGroup<GoogleCloudMlV1_StudyConfig_MetricSpecFormProperties>({
			goal: new FormControl<GoogleCloudMlV1_StudyConfig_MetricSpecGoal | null | undefined>(undefined),
			metric: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum GoogleCloudMlV1_StudyConfig_MetricSpecGoal { GOAL_TYPE_UNSPECIFIED = 'GOAL_TYPE_UNSPECIFIED', MAXIMIZE = 'MAXIMIZE', MINIMIZE = 'MINIMIZE' }


	/** Represents a single parameter to optimize. */
	export interface GoogleCloudMlV1_StudyConfig_ParameterSpec {
		categoricalValueSpec?: GoogleCloudMlV1_StudyConfigParameterSpec_CategoricalValueSpec;

		/** A child node is active if the parameter's value matches the child node's matching_parent_values. If two items in child_parameter_specs have the same name, they must have disjoint matching_parent_values. */
		childParameterSpecs?: Array<GoogleCloudMlV1_StudyConfig_ParameterSpec>;
		discreteValueSpec?: GoogleCloudMlV1_StudyConfigParameterSpec_DiscreteValueSpec;
		doubleValueSpec?: GoogleCloudMlV1_StudyConfigParameterSpec_DoubleValueSpec;
		integerValueSpec?: GoogleCloudMlV1_StudyConfigParameterSpec_IntegerValueSpec;

		/** Required. The parameter name must be unique amongst all ParameterSpecs. */
		parameter?: string | null;

		/** Represents the spec to match categorical values from parent parameter. */
		parentCategoricalValues?: GoogleCloudMlV1_StudyConfigParameterSpec_MatchingParentCategoricalValueSpec;

		/** Represents the spec to match discrete values from parent parameter. */
		parentDiscreteValues?: GoogleCloudMlV1_StudyConfigParameterSpec_MatchingParentDiscreteValueSpec;

		/** Represents the spec to match integer values from parent parameter. */
		parentIntValues?: GoogleCloudMlV1_StudyConfigParameterSpec_MatchingParentIntValueSpec;

		/** How the parameter should be scaled. Leave unset for categorical parameters. */
		scaleType?: GoogleCloudMlV1_StudyConfig_ParameterSpecScaleType | null;

		/** Required. The type of the parameter. */
		type?: GoogleCloudMlV1_StudyConfig_ParameterSpecType | null;
	}

	/** Represents a single parameter to optimize. */
	export interface GoogleCloudMlV1_StudyConfig_ParameterSpecFormProperties {

		/** Required. The parameter name must be unique amongst all ParameterSpecs. */
		parameter: FormControl<string | null | undefined>,

		/** How the parameter should be scaled. Leave unset for categorical parameters. */
		scaleType: FormControl<GoogleCloudMlV1_StudyConfig_ParameterSpecScaleType | null | undefined>,

		/** Required. The type of the parameter. */
		type: FormControl<GoogleCloudMlV1_StudyConfig_ParameterSpecType | null | undefined>,
	}
	export function CreateGoogleCloudMlV1_StudyConfig_ParameterSpecFormGroup() {
		return new FormGroup<GoogleCloudMlV1_StudyConfig_ParameterSpecFormProperties>({
			parameter: new FormControl<string | null | undefined>(undefined),
			scaleType: new FormControl<GoogleCloudMlV1_StudyConfig_ParameterSpecScaleType | null | undefined>(undefined),
			type: new FormControl<GoogleCloudMlV1_StudyConfig_ParameterSpecType | null | undefined>(undefined),
		});

	}

	export enum GoogleCloudMlV1_StudyConfig_ParameterSpecScaleType { SCALE_TYPE_UNSPECIFIED = 'SCALE_TYPE_UNSPECIFIED', UNIT_LINEAR_SCALE = 'UNIT_LINEAR_SCALE', UNIT_LOG_SCALE = 'UNIT_LOG_SCALE', UNIT_REVERSE_LOG_SCALE = 'UNIT_REVERSE_LOG_SCALE' }

	export enum GoogleCloudMlV1_StudyConfig_ParameterSpecType { PARAMETER_TYPE_UNSPECIFIED = 'PARAMETER_TYPE_UNSPECIFIED', DOUBLE = 'DOUBLE', INTEGER = 'INTEGER', CATEGORICAL = 'CATEGORICAL', DISCRETE = 'DISCRETE' }


	/** A message representing a parameter to be tuned. Contains the name of the parameter and the suggested value to use for this trial. */
	export interface GoogleCloudMlV1_Trial_Parameter {

		/** Must be set if ParameterType is DOUBLE or DISCRETE. */
		floatValue?: number | null;

		/** Must be set if ParameterType is INTEGER */
		intValue?: string | null;

		/** The name of the parameter. */
		parameter?: string | null;

		/** Must be set if ParameterTypeis CATEGORICAL */
		stringValue?: string | null;
	}

	/** A message representing a parameter to be tuned. Contains the name of the parameter and the suggested value to use for this trial. */
	export interface GoogleCloudMlV1_Trial_ParameterFormProperties {

		/** Must be set if ParameterType is DOUBLE or DISCRETE. */
		floatValue: FormControl<number | null | undefined>,

		/** Must be set if ParameterType is INTEGER */
		intValue: FormControl<string | null | undefined>,

		/** The name of the parameter. */
		parameter: FormControl<string | null | undefined>,

		/** Must be set if ParameterTypeis CATEGORICAL */
		stringValue: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudMlV1_Trial_ParameterFormGroup() {
		return new FormGroup<GoogleCloudMlV1_Trial_ParameterFormProperties>({
			floatValue: new FormControl<number | null | undefined>(undefined),
			intValue: new FormControl<string | null | undefined>(undefined),
			parameter: new FormControl<string | null | undefined>(undefined),
			stringValue: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents a hardware accelerator request config. Note that the AcceleratorConfig can be used in both Jobs and Versions. Learn more about [accelerators for training](/ml-engine/docs/using-gpus) and [accelerators for online prediction](/ml-engine/docs/machine-types-online-prediction#gpus). */
	export interface GoogleCloudMlV1__AcceleratorConfig {

		/** The number of accelerators to attach to each machine running the job. */
		count?: string | null;

		/** The type of accelerator to use. */
		type?: GoogleCloudMlV1__AcceleratorConfigType | null;
	}

	/** Represents a hardware accelerator request config. Note that the AcceleratorConfig can be used in both Jobs and Versions. Learn more about [accelerators for training](/ml-engine/docs/using-gpus) and [accelerators for online prediction](/ml-engine/docs/machine-types-online-prediction#gpus). */
	export interface GoogleCloudMlV1__AcceleratorConfigFormProperties {

		/** The number of accelerators to attach to each machine running the job. */
		count: FormControl<string | null | undefined>,

		/** The type of accelerator to use. */
		type: FormControl<GoogleCloudMlV1__AcceleratorConfigType | null | undefined>,
	}
	export function CreateGoogleCloudMlV1__AcceleratorConfigFormGroup() {
		return new FormGroup<GoogleCloudMlV1__AcceleratorConfigFormProperties>({
			count: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<GoogleCloudMlV1__AcceleratorConfigType | null | undefined>(undefined),
		});

	}

	export enum GoogleCloudMlV1__AcceleratorConfigType { ACCELERATOR_TYPE_UNSPECIFIED = 'ACCELERATOR_TYPE_UNSPECIFIED', NVIDIA_TESLA_K80 = 'NVIDIA_TESLA_K80', NVIDIA_TESLA_P100 = 'NVIDIA_TESLA_P100', NVIDIA_TESLA_V100 = 'NVIDIA_TESLA_V100', NVIDIA_TESLA_P4 = 'NVIDIA_TESLA_P4', NVIDIA_TESLA_T4 = 'NVIDIA_TESLA_T4', NVIDIA_TESLA_A100 = 'NVIDIA_TESLA_A100', TPU_V2 = 'TPU_V2', TPU_V3 = 'TPU_V3', TPU_V2_POD = 'TPU_V2_POD', TPU_V3_POD = 'TPU_V3_POD', TPU_V4_POD = 'TPU_V4_POD' }


	/** The request message for the AddTrialMeasurement service method. */
	export interface GoogleCloudMlV1__AddTrialMeasurementRequest {

		/** A message representing a measurement. */
		measurement?: GoogleCloudMlV1__Measurement;
	}

	/** The request message for the AddTrialMeasurement service method. */
	export interface GoogleCloudMlV1__AddTrialMeasurementRequestFormProperties {
	}
	export function CreateGoogleCloudMlV1__AddTrialMeasurementRequestFormGroup() {
		return new FormGroup<GoogleCloudMlV1__AddTrialMeasurementRequestFormProperties>({
		});

	}


	/** A message representing a measurement. */
	export interface GoogleCloudMlV1__Measurement {

		/** Output only. Time that the trial has been running at the point of this measurement. */
		elapsedTime?: string | null;

		/** Provides a list of metrics that act as inputs into the objective function. */
		metrics?: Array<GoogleCloudMlV1_Measurement_Metric>;

		/** The number of steps a machine learning model has been trained for. Must be non-negative. */
		stepCount?: string | null;
	}

	/** A message representing a measurement. */
	export interface GoogleCloudMlV1__MeasurementFormProperties {

		/** Output only. Time that the trial has been running at the point of this measurement. */
		elapsedTime: FormControl<string | null | undefined>,

		/** The number of steps a machine learning model has been trained for. Must be non-negative. */
		stepCount: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudMlV1__MeasurementFormGroup() {
		return new FormGroup<GoogleCloudMlV1__MeasurementFormProperties>({
			elapsedTime: new FormControl<string | null | undefined>(undefined),
			stepCount: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Options for automatically scaling a model. */
	export interface GoogleCloudMlV1__AutoScaling {

		/** The maximum number of nodes to scale this model under load. The actual value will depend on resource quota and availability. */
		maxNodes?: number | null;

		/** MetricSpec contains the specifications to use to calculate the desired nodes count. */
		metrics?: Array<GoogleCloudMlV1__MetricSpec>;

		/** Optional. The minimum number of nodes to allocate for this model. These nodes are always up, starting from the time the model is deployed. Therefore, the cost of operating this model will be at least `rate` * `min_nodes` * number of hours since last billing cycle, where `rate` is the cost per node-hour as documented in the [pricing guide](/ml-engine/docs/pricing), even if no predictions are performed. There is additional cost for each prediction performed. Unlike manual scaling, if the load gets too heavy for the nodes that are up, the service will automatically add nodes to handle the increased load as well as scale back as traffic drops, always maintaining at least `min_nodes`. You will be charged for the time in which additional nodes are used. If `min_nodes` is not specified and AutoScaling is used with a [legacy (MLS1) machine type](/ml-engine/docs/machine-types-online-prediction), `min_nodes` defaults to 0, in which case, when traffic to a model stops (and after a cool-down period), nodes will be shut down and no charges will be incurred until traffic to the model resumes. If `min_nodes` is not specified and AutoScaling is used with a [Compute Engine (N1) machine type](/ml-engine/docs/machine-types-online-prediction), `min_nodes` defaults to 1. `min_nodes` must be at least 1 for use with a Compute Engine machine type. You can set `min_nodes` when creating the model version, and you can also update `min_nodes` for an existing version: update_body.json: { 'autoScaling': { 'minNodes': 5 } } HTTP request: PATCH https://ml.googleapis.com/v1/{name=projects/models/versions/*}?update_mask=autoScaling.minNodes -d @./update_body.json */
		minNodes?: number | null;
	}

	/** Options for automatically scaling a model. */
	export interface GoogleCloudMlV1__AutoScalingFormProperties {

		/** The maximum number of nodes to scale this model under load. The actual value will depend on resource quota and availability. */
		maxNodes: FormControl<number | null | undefined>,

		/** Optional. The minimum number of nodes to allocate for this model. These nodes are always up, starting from the time the model is deployed. Therefore, the cost of operating this model will be at least `rate` * `min_nodes` * number of hours since last billing cycle, where `rate` is the cost per node-hour as documented in the [pricing guide](/ml-engine/docs/pricing), even if no predictions are performed. There is additional cost for each prediction performed. Unlike manual scaling, if the load gets too heavy for the nodes that are up, the service will automatically add nodes to handle the increased load as well as scale back as traffic drops, always maintaining at least `min_nodes`. You will be charged for the time in which additional nodes are used. If `min_nodes` is not specified and AutoScaling is used with a [legacy (MLS1) machine type](/ml-engine/docs/machine-types-online-prediction), `min_nodes` defaults to 0, in which case, when traffic to a model stops (and after a cool-down period), nodes will be shut down and no charges will be incurred until traffic to the model resumes. If `min_nodes` is not specified and AutoScaling is used with a [Compute Engine (N1) machine type](/ml-engine/docs/machine-types-online-prediction), `min_nodes` defaults to 1. `min_nodes` must be at least 1 for use with a Compute Engine machine type. You can set `min_nodes` when creating the model version, and you can also update `min_nodes` for an existing version: update_body.json: { 'autoScaling': { 'minNodes': 5 } } HTTP request: PATCH https://ml.googleapis.com/v1/{name=projects/models/versions/*}?update_mask=autoScaling.minNodes -d @./update_body.json */
		minNodes: FormControl<number | null | undefined>,
	}
	export function CreateGoogleCloudMlV1__AutoScalingFormGroup() {
		return new FormGroup<GoogleCloudMlV1__AutoScalingFormProperties>({
			maxNodes: new FormControl<number | null | undefined>(undefined),
			minNodes: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** MetricSpec contains the specifications to use to calculate the desired nodes count when autoscaling is enabled. */
	export interface GoogleCloudMlV1__MetricSpec {

		/** metric name. */
		name?: GoogleCloudMlV1__MetricSpecName | null;

		/** Target specifies the target value for the given metric; once real metric deviates from the threshold by a certain percentage, the node count changes. */
		target?: number | null;
	}

	/** MetricSpec contains the specifications to use to calculate the desired nodes count when autoscaling is enabled. */
	export interface GoogleCloudMlV1__MetricSpecFormProperties {

		/** metric name. */
		name: FormControl<GoogleCloudMlV1__MetricSpecName | null | undefined>,

		/** Target specifies the target value for the given metric; once real metric deviates from the threshold by a certain percentage, the node count changes. */
		target: FormControl<number | null | undefined>,
	}
	export function CreateGoogleCloudMlV1__MetricSpecFormGroup() {
		return new FormGroup<GoogleCloudMlV1__MetricSpecFormProperties>({
			name: new FormControl<GoogleCloudMlV1__MetricSpecName | null | undefined>(undefined),
			target: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum GoogleCloudMlV1__MetricSpecName { METRIC_NAME_UNSPECIFIED = 'METRIC_NAME_UNSPECIFIED', CPU_USAGE = 'CPU_USAGE', GPU_DUTY_CYCLE = 'GPU_DUTY_CYCLE' }


	/** Configuration for Automated Early Stopping of Trials. If no implementation_config is set, automated early stopping will not be run. */
	export interface GoogleCloudMlV1__AutomatedStoppingConfig {
		decayCurveStoppingConfig?: GoogleCloudMlV1_AutomatedStoppingConfig_DecayCurveAutomatedStoppingConfig;

		/** The median automated stopping rule stops a pending trial if the trial's best objective_value is strictly below the median 'performance' of all completed trials reported up to the trial's last measurement. Currently, 'performance' refers to the running average of the objective values reported by the trial in each measurement. */
		medianAutomatedStoppingConfig?: GoogleCloudMlV1_AutomatedStoppingConfig_MedianAutomatedStoppingConfig;
	}

	/** Configuration for Automated Early Stopping of Trials. If no implementation_config is set, automated early stopping will not be run. */
	export interface GoogleCloudMlV1__AutomatedStoppingConfigFormProperties {
	}
	export function CreateGoogleCloudMlV1__AutomatedStoppingConfigFormGroup() {
		return new FormGroup<GoogleCloudMlV1__AutomatedStoppingConfigFormProperties>({
		});

	}


	/** Represents output related to a built-in algorithm Job. */
	export interface GoogleCloudMlV1__BuiltInAlgorithmOutput {

		/** Framework on which the built-in algorithm was trained. */
		framework?: string | null;

		/** The Cloud Storage path to the `model/` directory where the training job saves the trained model. Only set for successful jobs that don't use hyperparameter tuning. */
		modelPath?: string | null;

		/** Python version on which the built-in algorithm was trained. */
		pythonVersion?: string | null;

		/** AI Platform runtime version on which the built-in algorithm was trained. */
		runtimeVersion?: string | null;
	}

	/** Represents output related to a built-in algorithm Job. */
	export interface GoogleCloudMlV1__BuiltInAlgorithmOutputFormProperties {

		/** Framework on which the built-in algorithm was trained. */
		framework: FormControl<string | null | undefined>,

		/** The Cloud Storage path to the `model/` directory where the training job saves the trained model. Only set for successful jobs that don't use hyperparameter tuning. */
		modelPath: FormControl<string | null | undefined>,

		/** Python version on which the built-in algorithm was trained. */
		pythonVersion: FormControl<string | null | undefined>,

		/** AI Platform runtime version on which the built-in algorithm was trained. */
		runtimeVersion: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudMlV1__BuiltInAlgorithmOutputFormGroup() {
		return new FormGroup<GoogleCloudMlV1__BuiltInAlgorithmOutputFormProperties>({
			framework: new FormControl<string | null | undefined>(undefined),
			modelPath: new FormControl<string | null | undefined>(undefined),
			pythonVersion: new FormControl<string | null | undefined>(undefined),
			runtimeVersion: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Request message for the CancelJob method. */
	export interface GoogleCloudMlV1__CancelJobRequest {
	}

	/** Request message for the CancelJob method. */
	export interface GoogleCloudMlV1__CancelJobRequestFormProperties {
	}
	export function CreateGoogleCloudMlV1__CancelJobRequestFormGroup() {
		return new FormGroup<GoogleCloudMlV1__CancelJobRequestFormProperties>({
		});

	}

	export interface GoogleCloudMlV1__Capability {

		/** Available accelerators for the capability. */
		availableAccelerators?: Array<GoogleCloudMlV1__AcceleratorConfigType>;
		type?: GoogleCloudMlV1__CapabilityType | null;
	}
	export interface GoogleCloudMlV1__CapabilityFormProperties {
		type: FormControl<GoogleCloudMlV1__CapabilityType | null | undefined>,
	}
	export function CreateGoogleCloudMlV1__CapabilityFormGroup() {
		return new FormGroup<GoogleCloudMlV1__CapabilityFormProperties>({
			type: new FormControl<GoogleCloudMlV1__CapabilityType | null | undefined>(undefined),
		});

	}

	export enum GoogleCloudMlV1__CapabilityType { TYPE_UNSPECIFIED = 'TYPE_UNSPECIFIED', TRAINING = 'TRAINING', BATCH_PREDICTION = 'BATCH_PREDICTION', ONLINE_PREDICTION = 'ONLINE_PREDICTION' }


	/** This message will be placed in the metadata field of a google.longrunning.Operation associated with a CheckTrialEarlyStoppingState request. */
	export interface GoogleCloudMlV1__CheckTrialEarlyStoppingStateMetatdata {

		/** The time at which the operation was submitted. */
		createTime?: string | null;

		/** The name of the study that the trial belongs to. */
		study?: string | null;

		/** The trial name. */
		trial?: string | null;
	}

	/** This message will be placed in the metadata field of a google.longrunning.Operation associated with a CheckTrialEarlyStoppingState request. */
	export interface GoogleCloudMlV1__CheckTrialEarlyStoppingStateMetatdataFormProperties {

		/** The time at which the operation was submitted. */
		createTime: FormControl<string | null | undefined>,

		/** The name of the study that the trial belongs to. */
		study: FormControl<string | null | undefined>,

		/** The trial name. */
		trial: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudMlV1__CheckTrialEarlyStoppingStateMetatdataFormGroup() {
		return new FormGroup<GoogleCloudMlV1__CheckTrialEarlyStoppingStateMetatdataFormProperties>({
			createTime: new FormControl<string | null | undefined>(undefined),
			study: new FormControl<string | null | undefined>(undefined),
			trial: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The request message for the CheckTrialEarlyStoppingState service method. */
	export interface GoogleCloudMlV1__CheckTrialEarlyStoppingStateRequest {
	}

	/** The request message for the CheckTrialEarlyStoppingState service method. */
	export interface GoogleCloudMlV1__CheckTrialEarlyStoppingStateRequestFormProperties {
	}
	export function CreateGoogleCloudMlV1__CheckTrialEarlyStoppingStateRequestFormGroup() {
		return new FormGroup<GoogleCloudMlV1__CheckTrialEarlyStoppingStateRequestFormProperties>({
		});

	}


	/** The message will be placed in the response field of a completed google.longrunning.Operation associated with a CheckTrialEarlyStoppingState request. */
	export interface GoogleCloudMlV1__CheckTrialEarlyStoppingStateResponse {

		/** The time at which operation processing completed. */
		endTime?: string | null;

		/** True if the Trial should stop. */
		shouldStop?: boolean | null;

		/** The time at which the operation was started. */
		startTime?: string | null;
	}

	/** The message will be placed in the response field of a completed google.longrunning.Operation associated with a CheckTrialEarlyStoppingState request. */
	export interface GoogleCloudMlV1__CheckTrialEarlyStoppingStateResponseFormProperties {

		/** The time at which operation processing completed. */
		endTime: FormControl<string | null | undefined>,

		/** True if the Trial should stop. */
		shouldStop: FormControl<boolean | null | undefined>,

		/** The time at which the operation was started. */
		startTime: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudMlV1__CheckTrialEarlyStoppingStateResponseFormGroup() {
		return new FormGroup<GoogleCloudMlV1__CheckTrialEarlyStoppingStateResponseFormProperties>({
			endTime: new FormControl<string | null | undefined>(undefined),
			shouldStop: new FormControl<boolean | null | undefined>(undefined),
			startTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The request message for the CompleteTrial service method. */
	export interface GoogleCloudMlV1__CompleteTrialRequest {

		/** A message representing a measurement. */
		finalMeasurement?: GoogleCloudMlV1__Measurement;

		/** Optional. A human readable reason why the trial was infeasible. This should only be provided if `trial_infeasible` is true. */
		infeasibleReason?: string | null;

		/** Optional. True if the trial cannot be run with the given Parameter, and final_measurement will be ignored. */
		trialInfeasible?: boolean | null;
	}

	/** The request message for the CompleteTrial service method. */
	export interface GoogleCloudMlV1__CompleteTrialRequestFormProperties {

		/** Optional. A human readable reason why the trial was infeasible. This should only be provided if `trial_infeasible` is true. */
		infeasibleReason: FormControl<string | null | undefined>,

		/** Optional. True if the trial cannot be run with the given Parameter, and final_measurement will be ignored. */
		trialInfeasible: FormControl<boolean | null | undefined>,
	}
	export function CreateGoogleCloudMlV1__CompleteTrialRequestFormGroup() {
		return new FormGroup<GoogleCloudMlV1__CompleteTrialRequestFormProperties>({
			infeasibleReason: new FormControl<string | null | undefined>(undefined),
			trialInfeasible: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface GoogleCloudMlV1__Config {

		/** The service account Cloud ML uses to run on TPU node. */
		tpuServiceAccount?: string | null;
	}
	export interface GoogleCloudMlV1__ConfigFormProperties {

		/** The service account Cloud ML uses to run on TPU node. */
		tpuServiceAccount: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudMlV1__ConfigFormGroup() {
		return new FormGroup<GoogleCloudMlV1__ConfigFormProperties>({
			tpuServiceAccount: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents a network port in a single container. This message is a subset of the [Kubernetes ContainerPort v1 core specification](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#containerport-v1-core). */
	export interface GoogleCloudMlV1__ContainerPort {

		/** Number of the port to expose on the container. This must be a valid port number: 0 < PORT_NUMBER < 65536. */
		containerPort?: number | null;
	}

	/** Represents a network port in a single container. This message is a subset of the [Kubernetes ContainerPort v1 core specification](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#containerport-v1-core). */
	export interface GoogleCloudMlV1__ContainerPortFormProperties {

		/** Number of the port to expose on the container. This must be a valid port number: 0 < PORT_NUMBER < 65536. */
		containerPort: FormControl<number | null | undefined>,
	}
	export function CreateGoogleCloudMlV1__ContainerPortFormGroup() {
		return new FormGroup<GoogleCloudMlV1__ContainerPortFormProperties>({
			containerPort: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Specification of a custom container for serving predictions. This message is a subset of the [Kubernetes Container v1 core specification](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#container-v1-core). */
	export interface GoogleCloudMlV1__ContainerSpec {

		/** Immutable. Specifies arguments for the command that runs when the container starts. This overrides the container's [`CMD`](https://docs.docker.com/engine/reference/builder/#cmd). Specify this field as an array of executable and arguments, similar to a Docker `CMD`'s "default parameters" form. If you don't specify this field but do specify the command field, then the command from the `command` field runs without any additional arguments. See the [Kubernetes documentation about how the `command` and `args` fields interact with a container's `ENTRYPOINT` and `CMD`](https://kubernetes.io/docs/tasks/inject-data-application/define-command-argument-container/#notes). If you don't specify this field and don't specify the `commmand` field, then the container's [`ENTRYPOINT`](https://docs.docker.com/engine/reference/builder/#cmd) and `CMD` determine what runs based on their default behavior. See the [Docker documentation about how `CMD` and `ENTRYPOINT` interact](https://docs.docker.com/engine/reference/builder/#understand-how-cmd-and-entrypoint-interact). In this field, you can reference [environment variables set by AI Platform Prediction](/ai-platform/prediction/docs/custom-container-requirements#aip-variables) and environment variables set in the env field. You cannot reference environment variables set in the Docker image. In order for environment variables to be expanded, reference them by using the following syntax: $( VARIABLE_NAME) Note that this differs from Bash variable expansion, which does not use parentheses. If a variable cannot be resolved, the reference in the input string is used unchanged. To avoid variable expansion, you can escape this syntax with `$$`; for example: $$(VARIABLE_NAME) This field corresponds to the `args` field of the [Kubernetes Containers v1 core API](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#container-v1-core). */
		args?: Array<string>;

		/** Immutable. Specifies the command that runs when the container starts. This overrides the container's [`ENTRYPOINT`](https://docs.docker.com/engine/reference/builder/#entrypoint). Specify this field as an array of executable and arguments, similar to a Docker `ENTRYPOINT`'s "exec" form, not its "shell" form. If you do not specify this field, then the container's `ENTRYPOINT` runs, in conjunction with the args field or the container's [`CMD`](https://docs.docker.com/engine/reference/builder/#cmd), if either exists. If this field is not specified and the container does not have an `ENTRYPOINT`, then refer to the [Docker documentation about how `CMD` and `ENTRYPOINT` interact](https://docs.docker.com/engine/reference/builder/#understand-how-cmd-and-entrypoint-interact). If you specify this field, then you can also specify the `args` field to provide additional arguments for this command. However, if you specify this field, then the container's `CMD` is ignored. See the [Kubernetes documentation about how the `command` and `args` fields interact with a container's `ENTRYPOINT` and `CMD`](https://kubernetes.io/docs/tasks/inject-data-application/define-command-argument-container/#notes). In this field, you can reference [environment variables set by AI Platform Prediction](/ai-platform/prediction/docs/custom-container-requirements#aip-variables) and environment variables set in the env field. You cannot reference environment variables set in the Docker image. In order for environment variables to be expanded, reference them by using the following syntax: $( VARIABLE_NAME) Note that this differs from Bash variable expansion, which does not use parentheses. If a variable cannot be resolved, the reference in the input string is used unchanged. To avoid variable expansion, you can escape this syntax with `$$`; for example: $$(VARIABLE_NAME) This field corresponds to the `command` field of the [Kubernetes Containers v1 core API](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#container-v1-core). */
		command?: Array<string>;

		/** Immutable. List of environment variables to set in the container. After the container starts running, code running in the container can read these environment variables. Additionally, the command and args fields can reference these variables. Later entries in this list can also reference earlier entries. For example, the following example sets the variable `VAR_2` to have the value `foo bar`: ```json [ { "name": "VAR_1", "value": "foo" }, { "name": "VAR_2", "value": "$(VAR_1) bar" } ] ``` If you switch the order of the variables in the example, then the expansion does not occur. This field corresponds to the `env` field of the [Kubernetes Containers v1 core API](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#container-v1-core). */
		env?: Array<GoogleCloudMlV1__EnvVar>;

		/** URI of the Docker image to be used as the custom container for serving predictions. This URI must identify [an image in Artifact Registry](/artifact-registry/docs/overview) and begin with the hostname `{REGION}-docker.pkg.dev`, where `{REGION}` is replaced by the region that matches AI Platform Prediction [regional endpoint](/ai-platform/prediction/docs/regional-endpoints) that you are using. For example, if you are using the `us-central1-ml.googleapis.com` endpoint, then this URI must begin with `us-central1-docker.pkg.dev`. To use a custom container, the [AI Platform Google-managed service account](/ai-platform/prediction/docs/custom-service-account#default) must have permission to pull (read) the Docker image at this URI. The AI Platform Google-managed service account has the following format: `service-{PROJECT_NUMBER}@cloud-ml.google.com.iam.gserviceaccount.com` {PROJECT_NUMBER} is replaced by your Google Cloud project number. By default, this service account has necessary permissions to pull an Artifact Registry image in the same Google Cloud project where you are using AI Platform Prediction. In this case, no configuration is necessary. If you want to use an image from a different Google Cloud project, learn how to [grant the Artifact Registry Reader (roles/artifactregistry.reader) role for a repository](/artifact-registry/docs/access-control#grant-repo) to your projet's AI Platform Google-managed service account. To learn about the requirements for the Docker image itself, read [Custom container requirements](/ai-platform/prediction/docs/custom-container-requirements). */
		image?: string | null;

		/** Immutable. List of ports to expose from the container. AI Platform Prediction sends any prediction requests that it receives to the first port on this list. AI Platform Prediction also sends [liveness and health checks](/ai-platform/prediction/docs/custom-container-requirements#health) to this port. If you do not specify this field, it defaults to following value: ```json [ { "containerPort": 8080 } ] ``` AI Platform Prediction does not use ports other than the first one listed. This field corresponds to the `ports` field of the [Kubernetes Containers v1 core API](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#container-v1-core). */
		ports?: Array<GoogleCloudMlV1__ContainerPort>;
	}

	/** Specification of a custom container for serving predictions. This message is a subset of the [Kubernetes Container v1 core specification](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#container-v1-core). */
	export interface GoogleCloudMlV1__ContainerSpecFormProperties {

		/** URI of the Docker image to be used as the custom container for serving predictions. This URI must identify [an image in Artifact Registry](/artifact-registry/docs/overview) and begin with the hostname `{REGION}-docker.pkg.dev`, where `{REGION}` is replaced by the region that matches AI Platform Prediction [regional endpoint](/ai-platform/prediction/docs/regional-endpoints) that you are using. For example, if you are using the `us-central1-ml.googleapis.com` endpoint, then this URI must begin with `us-central1-docker.pkg.dev`. To use a custom container, the [AI Platform Google-managed service account](/ai-platform/prediction/docs/custom-service-account#default) must have permission to pull (read) the Docker image at this URI. The AI Platform Google-managed service account has the following format: `service-{PROJECT_NUMBER}@cloud-ml.google.com.iam.gserviceaccount.com` {PROJECT_NUMBER} is replaced by your Google Cloud project number. By default, this service account has necessary permissions to pull an Artifact Registry image in the same Google Cloud project where you are using AI Platform Prediction. In this case, no configuration is necessary. If you want to use an image from a different Google Cloud project, learn how to [grant the Artifact Registry Reader (roles/artifactregistry.reader) role for a repository](/artifact-registry/docs/access-control#grant-repo) to your projet's AI Platform Google-managed service account. To learn about the requirements for the Docker image itself, read [Custom container requirements](/ai-platform/prediction/docs/custom-container-requirements). */
		image: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudMlV1__ContainerSpecFormGroup() {
		return new FormGroup<GoogleCloudMlV1__ContainerSpecFormProperties>({
			image: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents an environment variable to be made available in a container. This message is a subset of the [Kubernetes EnvVar v1 core specification](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#envvar-v1-core). */
	export interface GoogleCloudMlV1__EnvVar {

		/** Name of the environment variable. Must be a [valid C identifier](https://github.com/kubernetes/kubernetes/blob/v1.18.8/staging/src/k8s.io/apimachinery/pkg/util/validation/validation.go#L258) and must not begin with the prefix `AIP_`. */
		name?: string | null;

		/** Value of the environment variable. Defaults to an empty string. In this field, you can reference [environment variables set by AI Platform Prediction](/ai-platform/prediction/docs/custom-container-requirements#aip-variables) and environment variables set earlier in the same env field as where this message occurs. You cannot reference environment variables set in the Docker image. In order for environment variables to be expanded, reference them by using the following syntax: $(VARIABLE_NAME) Note that this differs from Bash variable expansion, which does not use parentheses. If a variable cannot be resolved, the reference in the input string is used unchanged. To avoid variable expansion, you can escape this syntax with `$$`; for example: $$(VARIABLE_NAME) */
		value?: string | null;
	}

	/** Represents an environment variable to be made available in a container. This message is a subset of the [Kubernetes EnvVar v1 core specification](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#envvar-v1-core). */
	export interface GoogleCloudMlV1__EnvVarFormProperties {

		/** Name of the environment variable. Must be a [valid C identifier](https://github.com/kubernetes/kubernetes/blob/v1.18.8/staging/src/k8s.io/apimachinery/pkg/util/validation/validation.go#L258) and must not begin with the prefix `AIP_`. */
		name: FormControl<string | null | undefined>,

		/** Value of the environment variable. Defaults to an empty string. In this field, you can reference [environment variables set by AI Platform Prediction](/ai-platform/prediction/docs/custom-container-requirements#aip-variables) and environment variables set earlier in the same env field as where this message occurs. You cannot reference environment variables set in the Docker image. In order for environment variables to be expanded, reference them by using the following syntax: $(VARIABLE_NAME) Note that this differs from Bash variable expansion, which does not use parentheses. If a variable cannot be resolved, the reference in the input string is used unchanged. To avoid variable expansion, you can escape this syntax with `$$`; for example: $$(VARIABLE_NAME) */
		value: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudMlV1__EnvVarFormGroup() {
		return new FormGroup<GoogleCloudMlV1__EnvVarFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents the config of disk options. */
	export interface GoogleCloudMlV1__DiskConfig {

		/** Size in GB of the boot disk (default is 100GB). */
		bootDiskSizeGb?: number | null;

		/** Type of the boot disk (default is "pd-ssd"). Valid values: "pd-ssd" (Persistent Disk Solid State Drive) or "pd-standard" (Persistent Disk Hard Disk Drive). */
		bootDiskType?: string | null;
	}

	/** Represents the config of disk options. */
	export interface GoogleCloudMlV1__DiskConfigFormProperties {

		/** Size in GB of the boot disk (default is 100GB). */
		bootDiskSizeGb: FormControl<number | null | undefined>,

		/** Type of the boot disk (default is "pd-ssd"). Valid values: "pd-ssd" (Persistent Disk Solid State Drive) or "pd-standard" (Persistent Disk Hard Disk Drive). */
		bootDiskType: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudMlV1__DiskConfigFormGroup() {
		return new FormGroup<GoogleCloudMlV1__DiskConfigFormProperties>({
			bootDiskSizeGb: new FormControl<number | null | undefined>(undefined),
			bootDiskType: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents a custom encryption key configuration that can be applied to a resource. */
	export interface GoogleCloudMlV1__EncryptionConfig {

		/** The Cloud KMS resource identifier of the customer-managed encryption key used to protect a resource, such as a training job. It has the following format: `projects/{PROJECT_ID}/locations/{REGION}/keyRings/{KEY_RING_NAME}/cryptoKeys/{KEY_NAME}` */
		kmsKeyName?: string | null;
	}

	/** Represents a custom encryption key configuration that can be applied to a resource. */
	export interface GoogleCloudMlV1__EncryptionConfigFormProperties {

		/** The Cloud KMS resource identifier of the customer-managed encryption key used to protect a resource, such as a training job. It has the following format: `projects/{PROJECT_ID}/locations/{REGION}/keyRings/{KEY_RING_NAME}/cryptoKeys/{KEY_NAME}` */
		kmsKeyName: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudMlV1__EncryptionConfigFormGroup() {
		return new FormGroup<GoogleCloudMlV1__EncryptionConfigFormProperties>({
			kmsKeyName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Request for explanations to be issued against a trained model. */
	export interface GoogleCloudMlV1__ExplainRequest {

		/** Message that represents an arbitrary HTTP body. It should only be used for payload formats that can't be represented as JSON, such as raw binary or an HTML page. This message can be used both in streaming and non-streaming API methods in the request as well as the response. It can be used as a top-level request field, which is convenient if one wants to extract parameters from either the URL or HTTP template into the request fields and also want access to the raw HTTP body. Example: message GetResourceRequest { // A unique request id. string request_id = 1; // The raw HTTP body is bound to this field. google.api.HttpBody http_body = 2; } service ResourceService { rpc GetResource(GetResourceRequest) returns (google.api.HttpBody); rpc UpdateResource(google.api.HttpBody) returns (google.protobuf.Empty); } Example with streaming methods: service CaldavService { rpc GetCalendar(stream google.api.HttpBody) returns (stream google.api.HttpBody); rpc UpdateCalendar(stream google.api.HttpBody) returns (stream google.api.HttpBody); } Use of this type only changes how the request and response bodies are handled, all other features will continue to work unchanged. */
		httpBody?: GoogleApi__HttpBody;
	}

	/** Request for explanations to be issued against a trained model. */
	export interface GoogleCloudMlV1__ExplainRequestFormProperties {
	}
	export function CreateGoogleCloudMlV1__ExplainRequestFormGroup() {
		return new FormGroup<GoogleCloudMlV1__ExplainRequestFormProperties>({
		});

	}


	/** Message holding configuration options for explaining model predictions. There are three feature attribution methods supported for TensorFlow models: integrated gradients, sampled Shapley, and XRAI. [Learn more about feature attributions.](/ai-platform/prediction/docs/ai-explanations/overview) */
	export interface GoogleCloudMlV1__ExplanationConfig {

		/** Attributes credit by computing the Aumann-Shapley value taking advantage of the model's fully differentiable structure. Refer to this paper for more details: https://arxiv.org/abs/1703.01365 */
		integratedGradientsAttribution?: GoogleCloudMlV1__IntegratedGradientsAttribution;

		/** An attribution method that approximates Shapley values for features that contribute to the label being predicted. A sampling strategy is used to approximate the value rather than considering all subsets of features. */
		sampledShapleyAttribution?: GoogleCloudMlV1__SampledShapleyAttribution;

		/** Attributes credit by computing the XRAI taking advantage of the model's fully differentiable structure. Refer to this paper for more details: https://arxiv.org/abs/1906.02825 Currently only implemented for models with natural image inputs. */
		xraiAttribution?: GoogleCloudMlV1__XraiAttribution;
	}

	/** Message holding configuration options for explaining model predictions. There are three feature attribution methods supported for TensorFlow models: integrated gradients, sampled Shapley, and XRAI. [Learn more about feature attributions.](/ai-platform/prediction/docs/ai-explanations/overview) */
	export interface GoogleCloudMlV1__ExplanationConfigFormProperties {
	}
	export function CreateGoogleCloudMlV1__ExplanationConfigFormGroup() {
		return new FormGroup<GoogleCloudMlV1__ExplanationConfigFormProperties>({
		});

	}


	/** Attributes credit by computing the Aumann-Shapley value taking advantage of the model's fully differentiable structure. Refer to this paper for more details: https://arxiv.org/abs/1703.01365 */
	export interface GoogleCloudMlV1__IntegratedGradientsAttribution {

		/** Number of steps for approximating the path integral. A good value to start is 50 and gradually increase until the sum to diff property is met within the desired error range. */
		numIntegralSteps?: number | null;
	}

	/** Attributes credit by computing the Aumann-Shapley value taking advantage of the model's fully differentiable structure. Refer to this paper for more details: https://arxiv.org/abs/1703.01365 */
	export interface GoogleCloudMlV1__IntegratedGradientsAttributionFormProperties {

		/** Number of steps for approximating the path integral. A good value to start is 50 and gradually increase until the sum to diff property is met within the desired error range. */
		numIntegralSteps: FormControl<number | null | undefined>,
	}
	export function CreateGoogleCloudMlV1__IntegratedGradientsAttributionFormGroup() {
		return new FormGroup<GoogleCloudMlV1__IntegratedGradientsAttributionFormProperties>({
			numIntegralSteps: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** An attribution method that approximates Shapley values for features that contribute to the label being predicted. A sampling strategy is used to approximate the value rather than considering all subsets of features. */
	export interface GoogleCloudMlV1__SampledShapleyAttribution {

		/** The number of feature permutations to consider when approximating the Shapley values. */
		numPaths?: number | null;
	}

	/** An attribution method that approximates Shapley values for features that contribute to the label being predicted. A sampling strategy is used to approximate the value rather than considering all subsets of features. */
	export interface GoogleCloudMlV1__SampledShapleyAttributionFormProperties {

		/** The number of feature permutations to consider when approximating the Shapley values. */
		numPaths: FormControl<number | null | undefined>,
	}
	export function CreateGoogleCloudMlV1__SampledShapleyAttributionFormGroup() {
		return new FormGroup<GoogleCloudMlV1__SampledShapleyAttributionFormProperties>({
			numPaths: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Attributes credit by computing the XRAI taking advantage of the model's fully differentiable structure. Refer to this paper for more details: https://arxiv.org/abs/1906.02825 Currently only implemented for models with natural image inputs. */
	export interface GoogleCloudMlV1__XraiAttribution {

		/** Number of steps for approximating the path integral. A good value to start is 50 and gradually increase until the sum to diff property is met within the desired error range. */
		numIntegralSteps?: number | null;
	}

	/** Attributes credit by computing the XRAI taking advantage of the model's fully differentiable structure. Refer to this paper for more details: https://arxiv.org/abs/1906.02825 Currently only implemented for models with natural image inputs. */
	export interface GoogleCloudMlV1__XraiAttributionFormProperties {

		/** Number of steps for approximating the path integral. A good value to start is 50 and gradually increase until the sum to diff property is met within the desired error range. */
		numIntegralSteps: FormControl<number | null | undefined>,
	}
	export function CreateGoogleCloudMlV1__XraiAttributionFormGroup() {
		return new FormGroup<GoogleCloudMlV1__XraiAttributionFormProperties>({
			numIntegralSteps: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Returns service account information associated with a project. */
	export interface GoogleCloudMlV1__GetConfigResponse {
		config?: GoogleCloudMlV1__Config;

		/** The service account Cloud ML uses to access resources in the project. */
		serviceAccount?: string | null;

		/** The project number for `service_account`. */
		serviceAccountProject?: string | null;
	}

	/** Returns service account information associated with a project. */
	export interface GoogleCloudMlV1__GetConfigResponseFormProperties {

		/** The service account Cloud ML uses to access resources in the project. */
		serviceAccount: FormControl<string | null | undefined>,

		/** The project number for `service_account`. */
		serviceAccountProject: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudMlV1__GetConfigResponseFormGroup() {
		return new FormGroup<GoogleCloudMlV1__GetConfigResponseFormProperties>({
			serviceAccount: new FormControl<string | null | undefined>(undefined),
			serviceAccountProject: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents the result of a single hyperparameter tuning trial from a training job. The TrainingOutput object that is returned on successful completion of a training job with hyperparameter tuning includes a list of HyperparameterOutput objects, one for each successful trial. */
	export interface GoogleCloudMlV1__HyperparameterOutput {

		/** All recorded object metrics for this trial. This field is not currently populated. */
		allMetrics?: Array<GoogleCloudMlV1_HyperparameterOutput_HyperparameterMetric>;

		/** Represents output related to a built-in algorithm Job. */
		builtInAlgorithmOutput?: GoogleCloudMlV1__BuiltInAlgorithmOutput;

		/** Output only. End time for the trial. */
		endTime?: string | null;

		/** An observed value of a metric. */
		finalMetric?: GoogleCloudMlV1_HyperparameterOutput_HyperparameterMetric;

		/** The hyperparameters given to this trial. */
		hyperparameters?: {[id: string]: string };

		/** True if the trial is stopped early. */
		isTrialStoppedEarly?: boolean | null;

		/** Output only. Start time for the trial. */
		startTime?: string | null;

		/** Output only. The detailed state of the trial. */
		state?: GoogleCloudMlV1__HyperparameterOutputState | null;

		/** The trial id for these results. */
		trialId?: string | null;

		/** URIs for accessing [interactive shells](https://cloud.google.com/ai-platform/training/docs/monitor-debug-interactive-shell) (one URI for each training node). Only available if this trial is part of a hyperparameter tuning job and the job's training_input.enable_web_access is `true`. The keys are names of each node in the training job; for example, `master-replica-0` for the master node, `worker-replica-0` for the first worker, and `ps-replica-0` for the first parameter server. The values are the URIs for each node's interactive shell. */
		webAccessUris?: {[id: string]: string };
	}

	/** Represents the result of a single hyperparameter tuning trial from a training job. The TrainingOutput object that is returned on successful completion of a training job with hyperparameter tuning includes a list of HyperparameterOutput objects, one for each successful trial. */
	export interface GoogleCloudMlV1__HyperparameterOutputFormProperties {

		/** Output only. End time for the trial. */
		endTime: FormControl<string | null | undefined>,

		/** The hyperparameters given to this trial. */
		hyperparameters: FormControl<{[id: string]: string } | null | undefined>,

		/** True if the trial is stopped early. */
		isTrialStoppedEarly: FormControl<boolean | null | undefined>,

		/** Output only. Start time for the trial. */
		startTime: FormControl<string | null | undefined>,

		/** Output only. The detailed state of the trial. */
		state: FormControl<GoogleCloudMlV1__HyperparameterOutputState | null | undefined>,

		/** The trial id for these results. */
		trialId: FormControl<string | null | undefined>,

		/** URIs for accessing [interactive shells](https://cloud.google.com/ai-platform/training/docs/monitor-debug-interactive-shell) (one URI for each training node). Only available if this trial is part of a hyperparameter tuning job and the job's training_input.enable_web_access is `true`. The keys are names of each node in the training job; for example, `master-replica-0` for the master node, `worker-replica-0` for the first worker, and `ps-replica-0` for the first parameter server. The values are the URIs for each node's interactive shell. */
		webAccessUris: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateGoogleCloudMlV1__HyperparameterOutputFormGroup() {
		return new FormGroup<GoogleCloudMlV1__HyperparameterOutputFormProperties>({
			endTime: new FormControl<string | null | undefined>(undefined),
			hyperparameters: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			isTrialStoppedEarly: new FormControl<boolean | null | undefined>(undefined),
			startTime: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<GoogleCloudMlV1__HyperparameterOutputState | null | undefined>(undefined),
			trialId: new FormControl<string | null | undefined>(undefined),
			webAccessUris: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}

	export enum GoogleCloudMlV1__HyperparameterOutputState { STATE_UNSPECIFIED = 'STATE_UNSPECIFIED', QUEUED = 'QUEUED', PREPARING = 'PREPARING', RUNNING = 'RUNNING', SUCCEEDED = 'SUCCEEDED', FAILED = 'FAILED', CANCELLING = 'CANCELLING', CANCELLED = 'CANCELLED' }


	/** Represents a set of hyperparameters to optimize. */
	export interface GoogleCloudMlV1__HyperparameterSpec {

		/** Optional. The search algorithm specified for the hyperparameter tuning job. Uses the default AI Platform hyperparameter tuning algorithm if unspecified. */
		algorithm?: GoogleCloudMlV1__HyperparameterSpecAlgorithm | null;

		/** Optional. Indicates if the hyperparameter tuning job enables auto trial early stopping. */
		enableTrialEarlyStopping?: boolean | null;

		/** Required. The type of goal to use for tuning. Available types are `MAXIMIZE` and `MINIMIZE`. Defaults to `MAXIMIZE`. */
		goal?: GoogleCloudMlV1_StudyConfig_MetricSpecGoal | null;

		/** Optional. The TensorFlow summary tag name to use for optimizing trials. For current versions of TensorFlow, this tag name should exactly match what is shown in TensorBoard, including all scopes. For versions of TensorFlow prior to 0.12, this should be only the tag passed to tf.Summary. By default, "training/hptuning/metric" will be used. */
		hyperparameterMetricTag?: string | null;

		/** Optional. The number of failed trials that need to be seen before failing the hyperparameter tuning job. You can specify this field to override the default failing criteria for AI Platform hyperparameter tuning jobs. Defaults to zero, which means the service decides when a hyperparameter job should fail. */
		maxFailedTrials?: number | null;

		/** Optional. The number of training trials to run concurrently. You can reduce the time it takes to perform hyperparameter tuning by adding trials in parallel. However, each trail only benefits from the information gained in completed trials. That means that a trial does not get access to the results of trials running at the same time, which could reduce the quality of the overall optimization. Each trial will use the same scale tier and machine types. Defaults to one. */
		maxParallelTrials?: number | null;

		/** Optional. How many training trials should be attempted to optimize the specified hyperparameters. Defaults to one. */
		maxTrials?: number | null;

		/** Required. The set of parameters to tune. */
		params?: Array<GoogleCloudMlV1__ParameterSpec>;

		/** Optional. The prior hyperparameter tuning job id that users hope to continue with. The job id will be used to find the corresponding vizier study guid and resume the study. */
		resumePreviousJobId?: string | null;
	}

	/** Represents a set of hyperparameters to optimize. */
	export interface GoogleCloudMlV1__HyperparameterSpecFormProperties {

		/** Optional. The search algorithm specified for the hyperparameter tuning job. Uses the default AI Platform hyperparameter tuning algorithm if unspecified. */
		algorithm: FormControl<GoogleCloudMlV1__HyperparameterSpecAlgorithm | null | undefined>,

		/** Optional. Indicates if the hyperparameter tuning job enables auto trial early stopping. */
		enableTrialEarlyStopping: FormControl<boolean | null | undefined>,

		/** Required. The type of goal to use for tuning. Available types are `MAXIMIZE` and `MINIMIZE`. Defaults to `MAXIMIZE`. */
		goal: FormControl<GoogleCloudMlV1_StudyConfig_MetricSpecGoal | null | undefined>,

		/** Optional. The TensorFlow summary tag name to use for optimizing trials. For current versions of TensorFlow, this tag name should exactly match what is shown in TensorBoard, including all scopes. For versions of TensorFlow prior to 0.12, this should be only the tag passed to tf.Summary. By default, "training/hptuning/metric" will be used. */
		hyperparameterMetricTag: FormControl<string | null | undefined>,

		/** Optional. The number of failed trials that need to be seen before failing the hyperparameter tuning job. You can specify this field to override the default failing criteria for AI Platform hyperparameter tuning jobs. Defaults to zero, which means the service decides when a hyperparameter job should fail. */
		maxFailedTrials: FormControl<number | null | undefined>,

		/** Optional. The number of training trials to run concurrently. You can reduce the time it takes to perform hyperparameter tuning by adding trials in parallel. However, each trail only benefits from the information gained in completed trials. That means that a trial does not get access to the results of trials running at the same time, which could reduce the quality of the overall optimization. Each trial will use the same scale tier and machine types. Defaults to one. */
		maxParallelTrials: FormControl<number | null | undefined>,

		/** Optional. How many training trials should be attempted to optimize the specified hyperparameters. Defaults to one. */
		maxTrials: FormControl<number | null | undefined>,

		/** Optional. The prior hyperparameter tuning job id that users hope to continue with. The job id will be used to find the corresponding vizier study guid and resume the study. */
		resumePreviousJobId: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudMlV1__HyperparameterSpecFormGroup() {
		return new FormGroup<GoogleCloudMlV1__HyperparameterSpecFormProperties>({
			algorithm: new FormControl<GoogleCloudMlV1__HyperparameterSpecAlgorithm | null | undefined>(undefined),
			enableTrialEarlyStopping: new FormControl<boolean | null | undefined>(undefined),
			goal: new FormControl<GoogleCloudMlV1_StudyConfig_MetricSpecGoal | null | undefined>(undefined),
			hyperparameterMetricTag: new FormControl<string | null | undefined>(undefined),
			maxFailedTrials: new FormControl<number | null | undefined>(undefined),
			maxParallelTrials: new FormControl<number | null | undefined>(undefined),
			maxTrials: new FormControl<number | null | undefined>(undefined),
			resumePreviousJobId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum GoogleCloudMlV1__HyperparameterSpecAlgorithm { ALGORITHM_UNSPECIFIED = 'ALGORITHM_UNSPECIFIED', GRID_SEARCH = 'GRID_SEARCH', RANDOM_SEARCH = 'RANDOM_SEARCH' }


	/** Represents a single hyperparameter to optimize. */
	export interface GoogleCloudMlV1__ParameterSpec {

		/** Required if type is `CATEGORICAL`. The list of possible categories. */
		categoricalValues?: Array<string>;

		/** Required if type is `DISCRETE`. A list of feasible points. The list should be in strictly increasing order. For instance, this parameter might have possible settings of 1.5, 2.5, and 4.0. This list should not contain more than 1,000 values. */
		discreteValues?: Array<number>;

		/** Required if type is `DOUBLE` or `INTEGER`. This field should be unset if type is `CATEGORICAL`. This value should be integers if type is `INTEGER`. */
		maxValue?: number | null;

		/** Required if type is `DOUBLE` or `INTEGER`. This field should be unset if type is `CATEGORICAL`. This value should be integers if type is INTEGER. */
		minValue?: number | null;

		/** Required. The parameter name must be unique amongst all ParameterConfigs in a HyperparameterSpec message. E.g., "learning_rate". */
		parameterName?: string | null;

		/** Optional. How the parameter should be scaled to the hypercube. Leave unset for categorical parameters. Some kind of scaling is strongly recommended for real or integral parameters (e.g., `UNIT_LINEAR_SCALE`). */
		scaleType?: GoogleCloudMlV1__ParameterSpecScaleType | null;

		/** Required. The type of the parameter. */
		type?: GoogleCloudMlV1_StudyConfig_ParameterSpecType | null;
	}

	/** Represents a single hyperparameter to optimize. */
	export interface GoogleCloudMlV1__ParameterSpecFormProperties {

		/** Required if type is `DOUBLE` or `INTEGER`. This field should be unset if type is `CATEGORICAL`. This value should be integers if type is `INTEGER`. */
		maxValue: FormControl<number | null | undefined>,

		/** Required if type is `DOUBLE` or `INTEGER`. This field should be unset if type is `CATEGORICAL`. This value should be integers if type is INTEGER. */
		minValue: FormControl<number | null | undefined>,

		/** Required. The parameter name must be unique amongst all ParameterConfigs in a HyperparameterSpec message. E.g., "learning_rate". */
		parameterName: FormControl<string | null | undefined>,

		/** Optional. How the parameter should be scaled to the hypercube. Leave unset for categorical parameters. Some kind of scaling is strongly recommended for real or integral parameters (e.g., `UNIT_LINEAR_SCALE`). */
		scaleType: FormControl<GoogleCloudMlV1__ParameterSpecScaleType | null | undefined>,

		/** Required. The type of the parameter. */
		type: FormControl<GoogleCloudMlV1_StudyConfig_ParameterSpecType | null | undefined>,
	}
	export function CreateGoogleCloudMlV1__ParameterSpecFormGroup() {
		return new FormGroup<GoogleCloudMlV1__ParameterSpecFormProperties>({
			maxValue: new FormControl<number | null | undefined>(undefined),
			minValue: new FormControl<number | null | undefined>(undefined),
			parameterName: new FormControl<string | null | undefined>(undefined),
			scaleType: new FormControl<GoogleCloudMlV1__ParameterSpecScaleType | null | undefined>(undefined),
			type: new FormControl<GoogleCloudMlV1_StudyConfig_ParameterSpecType | null | undefined>(undefined),
		});

	}

	export enum GoogleCloudMlV1__ParameterSpecScaleType { NONE = 'NONE', UNIT_LINEAR_SCALE = 'UNIT_LINEAR_SCALE', UNIT_LOG_SCALE = 'UNIT_LOG_SCALE', UNIT_REVERSE_LOG_SCALE = 'UNIT_REVERSE_LOG_SCALE' }


	/** Represents a training or prediction job. */
	export interface GoogleCloudMlV1__Job {

		/** Output only. When the job was created. */
		createTime?: string | null;

		/** Output only. When the job processing was completed. */
		endTime?: string | null;

		/** Output only. The details of a failure or a cancellation. */
		errorMessage?: string | null;

		/** `etag` is used for optimistic concurrency control as a way to help prevent simultaneous updates of a job from overwriting each other. It is strongly suggested that systems make use of the `etag` in the read-modify-write cycle to perform job updates in order to avoid race conditions: An `etag` is returned in the response to `GetJob`, and systems are expected to put that etag in the request to `UpdateJob` to ensure that their change will be applied to the same version of the job. */
		etag?: string | null;

		/** Required. The user-specified id of the job. */
		jobId?: string | null;

		/** Output only. It's only effect when the job is in QUEUED state. If it's positive, it indicates the job's position in the job scheduler. It's 0 when the job is already scheduled. */
		jobPosition?: string | null;

		/** Optional. One or more labels that you can add, to organize your jobs. Each label is a key-value pair, where both the key and the value are arbitrary strings that you supply. For more information, see the documentation on using labels. */
		labels?: {[id: string]: string };

		/** Represents input parameters for a prediction job. */
		predictionInput?: GoogleCloudMlV1__PredictionInput;

		/** Represents results of a prediction job. */
		predictionOutput?: GoogleCloudMlV1__PredictionOutput;

		/** Output only. When the job processing was started. */
		startTime?: string | null;

		/** Output only. The detailed state of a job. */
		state?: GoogleCloudMlV1__HyperparameterOutputState | null;

		/** Represents input parameters for a training job. When using the gcloud command to submit your training job, you can specify the input parameters as command-line arguments and/or in a YAML configuration file referenced from the --config command-line argument. For details, see the guide to [submitting a training job](/ai-platform/training/docs/training-jobs). */
		trainingInput?: GoogleCloudMlV1__TrainingInput;

		/** Represents results of a training job. Output only. */
		trainingOutput?: GoogleCloudMlV1__TrainingOutput;
	}

	/** Represents a training or prediction job. */
	export interface GoogleCloudMlV1__JobFormProperties {

		/** Output only. When the job was created. */
		createTime: FormControl<string | null | undefined>,

		/** Output only. When the job processing was completed. */
		endTime: FormControl<string | null | undefined>,

		/** Output only. The details of a failure or a cancellation. */
		errorMessage: FormControl<string | null | undefined>,

		/** `etag` is used for optimistic concurrency control as a way to help prevent simultaneous updates of a job from overwriting each other. It is strongly suggested that systems make use of the `etag` in the read-modify-write cycle to perform job updates in order to avoid race conditions: An `etag` is returned in the response to `GetJob`, and systems are expected to put that etag in the request to `UpdateJob` to ensure that their change will be applied to the same version of the job. */
		etag: FormControl<string | null | undefined>,

		/** Required. The user-specified id of the job. */
		jobId: FormControl<string | null | undefined>,

		/** Output only. It's only effect when the job is in QUEUED state. If it's positive, it indicates the job's position in the job scheduler. It's 0 when the job is already scheduled. */
		jobPosition: FormControl<string | null | undefined>,

		/** Optional. One or more labels that you can add, to organize your jobs. Each label is a key-value pair, where both the key and the value are arbitrary strings that you supply. For more information, see the documentation on using labels. */
		labels: FormControl<{[id: string]: string } | null | undefined>,

		/** Output only. When the job processing was started. */
		startTime: FormControl<string | null | undefined>,

		/** Output only. The detailed state of a job. */
		state: FormControl<GoogleCloudMlV1__HyperparameterOutputState | null | undefined>,
	}
	export function CreateGoogleCloudMlV1__JobFormGroup() {
		return new FormGroup<GoogleCloudMlV1__JobFormProperties>({
			createTime: new FormControl<string | null | undefined>(undefined),
			endTime: new FormControl<string | null | undefined>(undefined),
			errorMessage: new FormControl<string | null | undefined>(undefined),
			etag: new FormControl<string | null | undefined>(undefined),
			jobId: new FormControl<string | null | undefined>(undefined),
			jobPosition: new FormControl<string | null | undefined>(undefined),
			labels: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			startTime: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<GoogleCloudMlV1__HyperparameterOutputState | null | undefined>(undefined),
		});

	}


	/** Represents input parameters for a prediction job. */
	export interface GoogleCloudMlV1__PredictionInput {

		/** Optional. Number of records per batch, defaults to 64. The service will buffer batch_size number of records in memory before invoking one Tensorflow prediction call internally. So take the record size and memory available into consideration when setting this parameter. */
		batchSize?: string | null;

		/** Required. The format of the input data files. */
		dataFormat?: GoogleCloudMlV1__PredictionInputDataFormat | null;

		/** Required. The Cloud Storage location of the input data files. May contain wildcards. */
		inputPaths?: Array<string>;

		/** Optional. The maximum number of workers to be used for parallel processing. Defaults to 10 if not specified. */
		maxWorkerCount?: string | null;

		/** Use this field if you want to use the default version for the specified model. The string must use the following format: `"projects/YOUR_PROJECT/models/YOUR_MODEL"` */
		modelName?: string | null;

		/** Optional. Format of the output data files, defaults to JSON. */
		outputDataFormat?: GoogleCloudMlV1__PredictionInputDataFormat | null;

		/** Required. The output Google Cloud Storage location. */
		outputPath?: string | null;

		/** Required. The Google Compute Engine region to run the prediction job in. See the available regions for AI Platform services. */
		region?: string | null;

		/** Optional. The AI Platform runtime version to use for this batch prediction. If not set, AI Platform will pick the runtime version used during the CreateVersion request for this model version, or choose the latest stable version when model version information is not available such as when the model is specified by uri. */
		runtimeVersion?: string | null;

		/** Optional. The name of the signature defined in the SavedModel to use for this job. Please refer to [SavedModel](https://tensorflow.github.io/serving/serving_basic.html) for information about how to use signatures. Defaults to [DEFAULT_SERVING_SIGNATURE_DEF_KEY](https://www.tensorflow.org/api_docs/python/tf/saved_model/signature_constants) , which is "serving_default". */
		signatureName?: string | null;

		/** Use this field if you want to specify a Google Cloud Storage path for the model to use. */
		uri?: string | null;

		/** Use this field if you want to specify a version of the model to use. The string is formatted the same way as `model_version`, with the addition of the version information: `"projects/YOUR_PROJECT/models/YOUR_MODEL/versions/YOUR_VERSION"` */
		versionName?: string | null;
	}

	/** Represents input parameters for a prediction job. */
	export interface GoogleCloudMlV1__PredictionInputFormProperties {

		/** Optional. Number of records per batch, defaults to 64. The service will buffer batch_size number of records in memory before invoking one Tensorflow prediction call internally. So take the record size and memory available into consideration when setting this parameter. */
		batchSize: FormControl<string | null | undefined>,

		/** Required. The format of the input data files. */
		dataFormat: FormControl<GoogleCloudMlV1__PredictionInputDataFormat | null | undefined>,

		/** Optional. The maximum number of workers to be used for parallel processing. Defaults to 10 if not specified. */
		maxWorkerCount: FormControl<string | null | undefined>,

		/** Use this field if you want to use the default version for the specified model. The string must use the following format: `"projects/YOUR_PROJECT/models/YOUR_MODEL"` */
		modelName: FormControl<string | null | undefined>,

		/** Optional. Format of the output data files, defaults to JSON. */
		outputDataFormat: FormControl<GoogleCloudMlV1__PredictionInputDataFormat | null | undefined>,

		/** Required. The output Google Cloud Storage location. */
		outputPath: FormControl<string | null | undefined>,

		/** Required. The Google Compute Engine region to run the prediction job in. See the available regions for AI Platform services. */
		region: FormControl<string | null | undefined>,

		/** Optional. The AI Platform runtime version to use for this batch prediction. If not set, AI Platform will pick the runtime version used during the CreateVersion request for this model version, or choose the latest stable version when model version information is not available such as when the model is specified by uri. */
		runtimeVersion: FormControl<string | null | undefined>,

		/** Optional. The name of the signature defined in the SavedModel to use for this job. Please refer to [SavedModel](https://tensorflow.github.io/serving/serving_basic.html) for information about how to use signatures. Defaults to [DEFAULT_SERVING_SIGNATURE_DEF_KEY](https://www.tensorflow.org/api_docs/python/tf/saved_model/signature_constants) , which is "serving_default". */
		signatureName: FormControl<string | null | undefined>,

		/** Use this field if you want to specify a Google Cloud Storage path for the model to use. */
		uri: FormControl<string | null | undefined>,

		/** Use this field if you want to specify a version of the model to use. The string is formatted the same way as `model_version`, with the addition of the version information: `"projects/YOUR_PROJECT/models/YOUR_MODEL/versions/YOUR_VERSION"` */
		versionName: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudMlV1__PredictionInputFormGroup() {
		return new FormGroup<GoogleCloudMlV1__PredictionInputFormProperties>({
			batchSize: new FormControl<string | null | undefined>(undefined),
			dataFormat: new FormControl<GoogleCloudMlV1__PredictionInputDataFormat | null | undefined>(undefined),
			maxWorkerCount: new FormControl<string | null | undefined>(undefined),
			modelName: new FormControl<string | null | undefined>(undefined),
			outputDataFormat: new FormControl<GoogleCloudMlV1__PredictionInputDataFormat | null | undefined>(undefined),
			outputPath: new FormControl<string | null | undefined>(undefined),
			region: new FormControl<string | null | undefined>(undefined),
			runtimeVersion: new FormControl<string | null | undefined>(undefined),
			signatureName: new FormControl<string | null | undefined>(undefined),
			uri: new FormControl<string | null | undefined>(undefined),
			versionName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum GoogleCloudMlV1__PredictionInputDataFormat { DATA_FORMAT_UNSPECIFIED = 'DATA_FORMAT_UNSPECIFIED', JSON = 'JSON', TEXT = 'TEXT', TF_RECORD = 'TF_RECORD', TF_RECORD_GZIP = 'TF_RECORD_GZIP', CSV = 'CSV' }


	/** Represents results of a prediction job. */
	export interface GoogleCloudMlV1__PredictionOutput {

		/** The number of data instances which resulted in errors. */
		errorCount?: string | null;

		/** Node hours used by the batch prediction job. */
		nodeHours?: number | null;

		/** The output Google Cloud Storage location provided at the job creation time. */
		outputPath?: string | null;

		/** The number of generated predictions. */
		predictionCount?: string | null;
	}

	/** Represents results of a prediction job. */
	export interface GoogleCloudMlV1__PredictionOutputFormProperties {

		/** The number of data instances which resulted in errors. */
		errorCount: FormControl<string | null | undefined>,

		/** Node hours used by the batch prediction job. */
		nodeHours: FormControl<number | null | undefined>,

		/** The output Google Cloud Storage location provided at the job creation time. */
		outputPath: FormControl<string | null | undefined>,

		/** The number of generated predictions. */
		predictionCount: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudMlV1__PredictionOutputFormGroup() {
		return new FormGroup<GoogleCloudMlV1__PredictionOutputFormProperties>({
			errorCount: new FormControl<string | null | undefined>(undefined),
			nodeHours: new FormControl<number | null | undefined>(undefined),
			outputPath: new FormControl<string | null | undefined>(undefined),
			predictionCount: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents input parameters for a training job. When using the gcloud command to submit your training job, you can specify the input parameters as command-line arguments and/or in a YAML configuration file referenced from the --config command-line argument. For details, see the guide to [submitting a training job](/ai-platform/training/docs/training-jobs). */
	export interface GoogleCloudMlV1__TrainingInput {

		/** Optional. Command-line arguments passed to the training application when it starts. If your job uses a custom container, then the arguments are passed to the container's `ENTRYPOINT` command. */
		args?: Array<string>;

		/** Optional. Whether you want AI Platform Training to enable [interactive shell access](https://cloud.google.com/ai-platform/training/docs/monitor-debug-interactive-shell) to training containers. If set to `true`, you can access interactive shells at the URIs given by TrainingOutput.web_access_uris or HyperparameterOutput.web_access_uris (within TrainingOutput.trials). */
		enableWebAccess?: boolean | null;

		/** Represents a custom encryption key configuration that can be applied to a resource. */
		encryptionConfig?: GoogleCloudMlV1__EncryptionConfig;

		/** Represents the configuration for a replica in a cluster. */
		evaluatorConfig?: GoogleCloudMlV1__ReplicaConfig;

		/** Optional. The number of evaluator replicas to use for the training job. Each replica in the cluster will be of the type specified in `evaluator_type`. This value can only be used when `scale_tier` is set to `CUSTOM`. If you set this value, you must also set `evaluator_type`. The default value is zero. */
		evaluatorCount?: string | null;

		/** Optional. Specifies the type of virtual machine to use for your training job's evaluator nodes. The supported values are the same as those described in the entry for `masterType`. This value must be consistent with the category of machine type that `masterType` uses. In other words, both must be Compute Engine machine types or both must be legacy machine types. This value must be present when `scaleTier` is set to `CUSTOM` and `evaluatorCount` is greater than zero. */
		evaluatorType?: string | null;

		/** Represents a set of hyperparameters to optimize. */
		hyperparameters?: GoogleCloudMlV1__HyperparameterSpec;

		/** Optional. A Google Cloud Storage path in which to store training outputs and other data needed for training. This path is passed to your TensorFlow program as the '--job-dir' command-line argument. The benefit of specifying this field is that Cloud ML validates the path for use in training. */
		jobDir?: string | null;

		/** Represents the configuration for a replica in a cluster. */
		masterConfig?: GoogleCloudMlV1__ReplicaConfig;

		/** Optional. Specifies the type of virtual machine to use for your training job's master worker. You must specify this field when `scaleTier` is set to `CUSTOM`. You can use certain Compute Engine machine types directly in this field. See the [list of compatible Compute Engine machine types](/ai-platform/training/docs/machine-types#compute-engine-machine-types). Alternatively, you can use the certain legacy machine types in this field. See the [list of legacy machine types](/ai-platform/training/docs/machine-types#legacy-machine-types). Finally, if you want to use a TPU for training, specify `cloud_tpu` in this field. Learn more about the [special configuration options for training with TPUs](/ai-platform/training/docs/using-tpus#configuring_a_custom_tpu_machine). */
		masterType?: string | null;

		/** Optional. The full name of the [Compute Engine network](/vpc/docs/vpc) to which the Job is peered. For example, `projects/12345/global/networks/myVPC`. The format of this field is `projects/{project}/global/networks/{network}`, where {project} is a project number (like `12345`) and {network} is network name. Private services access must already be configured for the network. If left unspecified, the Job is not peered with any network. [Learn about using VPC Network Peering.](/ai-platform/training/docs/vpc-peering). */
		network?: string | null;

		/** Required. The Google Cloud Storage location of the packages with the training program and any additional dependencies. The maximum number of package URIs is 100. */
		packageUris?: Array<string>;

		/** Represents the configuration for a replica in a cluster. */
		parameterServerConfig?: GoogleCloudMlV1__ReplicaConfig;

		/** Optional. The number of parameter server replicas to use for the training job. Each replica in the cluster will be of the type specified in `parameter_server_type`. This value can only be used when `scale_tier` is set to `CUSTOM`. If you set this value, you must also set `parameter_server_type`. The default value is zero. */
		parameterServerCount?: string | null;

		/** Optional. Specifies the type of virtual machine to use for your training job's parameter server. The supported values are the same as those described in the entry for `master_type`. This value must be consistent with the category of machine type that `masterType` uses. In other words, both must be Compute Engine machine types or both must be legacy machine types. This value must be present when `scaleTier` is set to `CUSTOM` and `parameter_server_count` is greater than zero. */
		parameterServerType?: string | null;

		/** Required. The Python module name to run after installing the packages. */
		pythonModule?: string | null;

		/** Optional. The version of Python used in training. You must either specify this field or specify `masterConfig.imageUri`. The following Python versions are available: * Python '3.7' is available when `runtime_version` is set to '1.15' or later. * Python '3.5' is available when `runtime_version` is set to a version from '1.4' to '1.14'. * Python '2.7' is available when `runtime_version` is set to '1.15' or earlier. Read more about the Python versions available for [each runtime version](/ml-engine/docs/runtime-version-list). */
		pythonVersion?: string | null;

		/** Required. The region to run the training job in. See the [available regions](/ai-platform/training/docs/regions) for AI Platform Training. */
		region?: string | null;

		/** Optional. The AI Platform runtime version to use for training. You must either specify this field or specify `masterConfig.imageUri`. For more information, see the [runtime version list](/ai-platform/training/docs/runtime-version-list) and learn [how to manage runtime versions](/ai-platform/training/docs/versioning). */
		runtimeVersion?: string | null;

		/** Required. Specifies the machine types, the number of replicas for workers and parameter servers. */
		scaleTier?: GoogleCloudMlV1__TrainingInputScaleTier | null;

		/** All parameters related to scheduling of training jobs. */
		scheduling?: GoogleCloudMlV1__Scheduling;

		/** Optional. The email address of a service account to use when running the training appplication. You must have the `iam.serviceAccounts.actAs` permission for the specified service account. In addition, the AI Platform Training Google-managed service account must have the `roles/iam.serviceAccountAdmin` role for the specified service account. [Learn more about configuring a service account.](/ai-platform/training/docs/custom-service-account) If not specified, the AI Platform Training Google-managed service account is used by default. */
		serviceAccount?: string | null;

		/** Optional. Use `chief` instead of `master` in the `TF_CONFIG` environment variable when training with a custom container. Defaults to `false`. [Learn more about this field.](/ai-platform/training/docs/distributed-training-details#chief-versus-master) This field has no effect for training jobs that don't use a custom container. */
		useChiefInTfConfig?: boolean | null;

		/** Represents the configuration for a replica in a cluster. */
		workerConfig?: GoogleCloudMlV1__ReplicaConfig;

		/** Optional. The number of worker replicas to use for the training job. Each replica in the cluster will be of the type specified in `worker_type`. This value can only be used when `scale_tier` is set to `CUSTOM`. If you set this value, you must also set `worker_type`. The default value is zero. */
		workerCount?: string | null;

		/** Optional. Specifies the type of virtual machine to use for your training job's worker nodes. The supported values are the same as those described in the entry for `masterType`. This value must be consistent with the category of machine type that `masterType` uses. In other words, both must be Compute Engine machine types or both must be legacy machine types. If you use `cloud_tpu` for this value, see special instructions for [configuring a custom TPU machine](/ml-engine/docs/tensorflow/using-tpus#configuring_a_custom_tpu_machine). This value must be present when `scaleTier` is set to `CUSTOM` and `workerCount` is greater than zero. */
		workerType?: string | null;
	}

	/** Represents input parameters for a training job. When using the gcloud command to submit your training job, you can specify the input parameters as command-line arguments and/or in a YAML configuration file referenced from the --config command-line argument. For details, see the guide to [submitting a training job](/ai-platform/training/docs/training-jobs). */
	export interface GoogleCloudMlV1__TrainingInputFormProperties {

		/** Optional. Whether you want AI Platform Training to enable [interactive shell access](https://cloud.google.com/ai-platform/training/docs/monitor-debug-interactive-shell) to training containers. If set to `true`, you can access interactive shells at the URIs given by TrainingOutput.web_access_uris or HyperparameterOutput.web_access_uris (within TrainingOutput.trials). */
		enableWebAccess: FormControl<boolean | null | undefined>,

		/** Optional. The number of evaluator replicas to use for the training job. Each replica in the cluster will be of the type specified in `evaluator_type`. This value can only be used when `scale_tier` is set to `CUSTOM`. If you set this value, you must also set `evaluator_type`. The default value is zero. */
		evaluatorCount: FormControl<string | null | undefined>,

		/** Optional. Specifies the type of virtual machine to use for your training job's evaluator nodes. The supported values are the same as those described in the entry for `masterType`. This value must be consistent with the category of machine type that `masterType` uses. In other words, both must be Compute Engine machine types or both must be legacy machine types. This value must be present when `scaleTier` is set to `CUSTOM` and `evaluatorCount` is greater than zero. */
		evaluatorType: FormControl<string | null | undefined>,

		/** Optional. A Google Cloud Storage path in which to store training outputs and other data needed for training. This path is passed to your TensorFlow program as the '--job-dir' command-line argument. The benefit of specifying this field is that Cloud ML validates the path for use in training. */
		jobDir: FormControl<string | null | undefined>,

		/** Optional. Specifies the type of virtual machine to use for your training job's master worker. You must specify this field when `scaleTier` is set to `CUSTOM`. You can use certain Compute Engine machine types directly in this field. See the [list of compatible Compute Engine machine types](/ai-platform/training/docs/machine-types#compute-engine-machine-types). Alternatively, you can use the certain legacy machine types in this field. See the [list of legacy machine types](/ai-platform/training/docs/machine-types#legacy-machine-types). Finally, if you want to use a TPU for training, specify `cloud_tpu` in this field. Learn more about the [special configuration options for training with TPUs](/ai-platform/training/docs/using-tpus#configuring_a_custom_tpu_machine). */
		masterType: FormControl<string | null | undefined>,

		/** Optional. The full name of the [Compute Engine network](/vpc/docs/vpc) to which the Job is peered. For example, `projects/12345/global/networks/myVPC`. The format of this field is `projects/{project}/global/networks/{network}`, where {project} is a project number (like `12345`) and {network} is network name. Private services access must already be configured for the network. If left unspecified, the Job is not peered with any network. [Learn about using VPC Network Peering.](/ai-platform/training/docs/vpc-peering). */
		network: FormControl<string | null | undefined>,

		/** Optional. The number of parameter server replicas to use for the training job. Each replica in the cluster will be of the type specified in `parameter_server_type`. This value can only be used when `scale_tier` is set to `CUSTOM`. If you set this value, you must also set `parameter_server_type`. The default value is zero. */
		parameterServerCount: FormControl<string | null | undefined>,

		/** Optional. Specifies the type of virtual machine to use for your training job's parameter server. The supported values are the same as those described in the entry for `master_type`. This value must be consistent with the category of machine type that `masterType` uses. In other words, both must be Compute Engine machine types or both must be legacy machine types. This value must be present when `scaleTier` is set to `CUSTOM` and `parameter_server_count` is greater than zero. */
		parameterServerType: FormControl<string | null | undefined>,

		/** Required. The Python module name to run after installing the packages. */
		pythonModule: FormControl<string | null | undefined>,

		/** Optional. The version of Python used in training. You must either specify this field or specify `masterConfig.imageUri`. The following Python versions are available: * Python '3.7' is available when `runtime_version` is set to '1.15' or later. * Python '3.5' is available when `runtime_version` is set to a version from '1.4' to '1.14'. * Python '2.7' is available when `runtime_version` is set to '1.15' or earlier. Read more about the Python versions available for [each runtime version](/ml-engine/docs/runtime-version-list). */
		pythonVersion: FormControl<string | null | undefined>,

		/** Required. The region to run the training job in. See the [available regions](/ai-platform/training/docs/regions) for AI Platform Training. */
		region: FormControl<string | null | undefined>,

		/** Optional. The AI Platform runtime version to use for training. You must either specify this field or specify `masterConfig.imageUri`. For more information, see the [runtime version list](/ai-platform/training/docs/runtime-version-list) and learn [how to manage runtime versions](/ai-platform/training/docs/versioning). */
		runtimeVersion: FormControl<string | null | undefined>,

		/** Required. Specifies the machine types, the number of replicas for workers and parameter servers. */
		scaleTier: FormControl<GoogleCloudMlV1__TrainingInputScaleTier | null | undefined>,

		/** Optional. The email address of a service account to use when running the training appplication. You must have the `iam.serviceAccounts.actAs` permission for the specified service account. In addition, the AI Platform Training Google-managed service account must have the `roles/iam.serviceAccountAdmin` role for the specified service account. [Learn more about configuring a service account.](/ai-platform/training/docs/custom-service-account) If not specified, the AI Platform Training Google-managed service account is used by default. */
		serviceAccount: FormControl<string | null | undefined>,

		/** Optional. Use `chief` instead of `master` in the `TF_CONFIG` environment variable when training with a custom container. Defaults to `false`. [Learn more about this field.](/ai-platform/training/docs/distributed-training-details#chief-versus-master) This field has no effect for training jobs that don't use a custom container. */
		useChiefInTfConfig: FormControl<boolean | null | undefined>,

		/** Optional. The number of worker replicas to use for the training job. Each replica in the cluster will be of the type specified in `worker_type`. This value can only be used when `scale_tier` is set to `CUSTOM`. If you set this value, you must also set `worker_type`. The default value is zero. */
		workerCount: FormControl<string | null | undefined>,

		/** Optional. Specifies the type of virtual machine to use for your training job's worker nodes. The supported values are the same as those described in the entry for `masterType`. This value must be consistent with the category of machine type that `masterType` uses. In other words, both must be Compute Engine machine types or both must be legacy machine types. If you use `cloud_tpu` for this value, see special instructions for [configuring a custom TPU machine](/ml-engine/docs/tensorflow/using-tpus#configuring_a_custom_tpu_machine). This value must be present when `scaleTier` is set to `CUSTOM` and `workerCount` is greater than zero. */
		workerType: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudMlV1__TrainingInputFormGroup() {
		return new FormGroup<GoogleCloudMlV1__TrainingInputFormProperties>({
			enableWebAccess: new FormControl<boolean | null | undefined>(undefined),
			evaluatorCount: new FormControl<string | null | undefined>(undefined),
			evaluatorType: new FormControl<string | null | undefined>(undefined),
			jobDir: new FormControl<string | null | undefined>(undefined),
			masterType: new FormControl<string | null | undefined>(undefined),
			network: new FormControl<string | null | undefined>(undefined),
			parameterServerCount: new FormControl<string | null | undefined>(undefined),
			parameterServerType: new FormControl<string | null | undefined>(undefined),
			pythonModule: new FormControl<string | null | undefined>(undefined),
			pythonVersion: new FormControl<string | null | undefined>(undefined),
			region: new FormControl<string | null | undefined>(undefined),
			runtimeVersion: new FormControl<string | null | undefined>(undefined),
			scaleTier: new FormControl<GoogleCloudMlV1__TrainingInputScaleTier | null | undefined>(undefined),
			serviceAccount: new FormControl<string | null | undefined>(undefined),
			useChiefInTfConfig: new FormControl<boolean | null | undefined>(undefined),
			workerCount: new FormControl<string | null | undefined>(undefined),
			workerType: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents the configuration for a replica in a cluster. */
	export interface GoogleCloudMlV1__ReplicaConfig {

		/** Represents a hardware accelerator request config. Note that the AcceleratorConfig can be used in both Jobs and Versions. Learn more about [accelerators for training](/ml-engine/docs/using-gpus) and [accelerators for online prediction](/ml-engine/docs/machine-types-online-prediction#gpus). */
		acceleratorConfig?: GoogleCloudMlV1__AcceleratorConfig;

		/** Arguments to the entrypoint command. The following rules apply for container_command and container_args: - If you do not supply command or args: The defaults defined in the Docker image are used. - If you supply a command but no args: The default EntryPoint and the default Cmd defined in the Docker image are ignored. Your command is run without any arguments. - If you supply only args: The default Entrypoint defined in the Docker image is run with the args that you supplied. - If you supply a command and args: The default Entrypoint and the default Cmd defined in the Docker image are ignored. Your command is run with your args. It cannot be set if custom container image is not provided. Note that this field and [TrainingInput.args] are mutually exclusive, i.e., both cannot be set at the same time. */
		containerArgs?: Array<string>;

		/** The command with which the replica's custom container is run. If provided, it will override default ENTRYPOINT of the docker image. If not provided, the docker image's ENTRYPOINT is used. It cannot be set if custom container image is not provided. Note that this field and [TrainingInput.args] are mutually exclusive, i.e., both cannot be set at the same time. */
		containerCommand?: Array<string>;

		/** Represents the config of disk options. */
		diskConfig?: GoogleCloudMlV1__DiskConfig;

		/** The Docker image to run on the replica. This image must be in Container Registry. Learn more about [configuring custom containers](/ai-platform/training/docs/distributed-training-containers). */
		imageUri?: string | null;

		/** The AI Platform runtime version that includes a TensorFlow version matching the one used in the custom container. This field is required if the replica is a TPU worker that uses a custom container. Otherwise, do not specify this field. This must be a [runtime version that currently supports training with TPUs](/ml-engine/docs/tensorflow/runtime-version-list#tpu-support). Note that the version of TensorFlow included in a runtime version may differ from the numbering of the runtime version itself, because it may have a different [patch version](https://www.tensorflow.org/guide/version_compat#semantic_versioning_20). In this field, you must specify the runtime version (TensorFlow minor version). For example, if your custom container runs TensorFlow `1.x.y`, specify `1.x`. */
		tpuTfVersion?: string | null;
	}

	/** Represents the configuration for a replica in a cluster. */
	export interface GoogleCloudMlV1__ReplicaConfigFormProperties {

		/** The Docker image to run on the replica. This image must be in Container Registry. Learn more about [configuring custom containers](/ai-platform/training/docs/distributed-training-containers). */
		imageUri: FormControl<string | null | undefined>,

		/** The AI Platform runtime version that includes a TensorFlow version matching the one used in the custom container. This field is required if the replica is a TPU worker that uses a custom container. Otherwise, do not specify this field. This must be a [runtime version that currently supports training with TPUs](/ml-engine/docs/tensorflow/runtime-version-list#tpu-support). Note that the version of TensorFlow included in a runtime version may differ from the numbering of the runtime version itself, because it may have a different [patch version](https://www.tensorflow.org/guide/version_compat#semantic_versioning_20). In this field, you must specify the runtime version (TensorFlow minor version). For example, if your custom container runs TensorFlow `1.x.y`, specify `1.x`. */
		tpuTfVersion: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudMlV1__ReplicaConfigFormGroup() {
		return new FormGroup<GoogleCloudMlV1__ReplicaConfigFormProperties>({
			imageUri: new FormControl<string | null | undefined>(undefined),
			tpuTfVersion: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum GoogleCloudMlV1__TrainingInputScaleTier { BASIC = 'BASIC', STANDARD_1 = 'STANDARD_1', PREMIUM_1 = 'PREMIUM_1', BASIC_GPU = 'BASIC_GPU', BASIC_TPU = 'BASIC_TPU', CUSTOM = 'CUSTOM' }


	/** All parameters related to scheduling of training jobs. */
	export interface GoogleCloudMlV1__Scheduling {

		/** Optional. The maximum job running time, expressed in seconds. The field can contain up to nine fractional digits, terminated by `s`. If not specified, this field defaults to `604800s` (seven days). If the training job is still running after this duration, AI Platform Training cancels it. The duration is measured from when the job enters the `RUNNING` state; therefore it does not overlap with the duration limited by Scheduling.max_wait_time. For example, if you want to ensure your job runs for no more than 2 hours, set this field to `7200s` (2 hours * 60 minutes / hour * 60 seconds / minute). If you submit your training job using the `gcloud` tool, you can [specify this field in a `config.yaml` file](/ai-platform/training/docs/training-jobs#formatting_your_configuration_parameters). For example: ```yaml trainingInput: scheduling: maxRunningTime: 7200s ``` */
		maxRunningTime?: string | null;

		/** Optional. The maximum job wait time, expressed in seconds. The field can contain up to nine fractional digits, terminated by `s`. If not specified, there is no limit to the wait time. The minimum for this field is `1800s` (30 minutes). If the training job has not entered the `RUNNING` state after this duration, AI Platform Training cancels it. After the job begins running, it can no longer be cancelled due to the maximum wait time. Therefore the duration limited by this field does not overlap with the duration limited by Scheduling.max_running_time. For example, if the job temporarily stops running and retries due to a [VM restart](/ai-platform/training/docs/overview#restarts), this cannot lead to a maximum wait time cancellation. However, independently of this constraint, AI Platform Training might stop a job if there are too many retries due to exhausted resources in a region. The following example describes how you might use this field: To cancel your job if it doesn't start running within 1 hour, set this field to `3600s` (1 hour * 60 minutes / hour * 60 seconds / minute). If the job is still in the `QUEUED` or `PREPARING` state after an hour of waiting, AI Platform Training cancels the job. If you submit your training job using the `gcloud` tool, you can [specify this field in a `config.yaml` file](/ai-platform/training/docs/training-jobs#formatting_your_configuration_parameters). For example: ```yaml trainingInput: scheduling: maxWaitTime: 3600s ``` */
		maxWaitTime?: string | null;

		/** Optional. Job scheduling will be based on this priority, which in the range [0, 1000]. The bigger the number, the higher the priority. Default to 0 if not set. If there are multiple jobs requesting same type of accelerators, the high priority job will be scheduled prior to ones with low priority. */
		priority?: number | null;
	}

	/** All parameters related to scheduling of training jobs. */
	export interface GoogleCloudMlV1__SchedulingFormProperties {

		/** Optional. The maximum job running time, expressed in seconds. The field can contain up to nine fractional digits, terminated by `s`. If not specified, this field defaults to `604800s` (seven days). If the training job is still running after this duration, AI Platform Training cancels it. The duration is measured from when the job enters the `RUNNING` state; therefore it does not overlap with the duration limited by Scheduling.max_wait_time. For example, if you want to ensure your job runs for no more than 2 hours, set this field to `7200s` (2 hours * 60 minutes / hour * 60 seconds / minute). If you submit your training job using the `gcloud` tool, you can [specify this field in a `config.yaml` file](/ai-platform/training/docs/training-jobs#formatting_your_configuration_parameters). For example: ```yaml trainingInput: scheduling: maxRunningTime: 7200s ``` */
		maxRunningTime: FormControl<string | null | undefined>,

		/** Optional. The maximum job wait time, expressed in seconds. The field can contain up to nine fractional digits, terminated by `s`. If not specified, there is no limit to the wait time. The minimum for this field is `1800s` (30 minutes). If the training job has not entered the `RUNNING` state after this duration, AI Platform Training cancels it. After the job begins running, it can no longer be cancelled due to the maximum wait time. Therefore the duration limited by this field does not overlap with the duration limited by Scheduling.max_running_time. For example, if the job temporarily stops running and retries due to a [VM restart](/ai-platform/training/docs/overview#restarts), this cannot lead to a maximum wait time cancellation. However, independently of this constraint, AI Platform Training might stop a job if there are too many retries due to exhausted resources in a region. The following example describes how you might use this field: To cancel your job if it doesn't start running within 1 hour, set this field to `3600s` (1 hour * 60 minutes / hour * 60 seconds / minute). If the job is still in the `QUEUED` or `PREPARING` state after an hour of waiting, AI Platform Training cancels the job. If you submit your training job using the `gcloud` tool, you can [specify this field in a `config.yaml` file](/ai-platform/training/docs/training-jobs#formatting_your_configuration_parameters). For example: ```yaml trainingInput: scheduling: maxWaitTime: 3600s ``` */
		maxWaitTime: FormControl<string | null | undefined>,

		/** Optional. Job scheduling will be based on this priority, which in the range [0, 1000]. The bigger the number, the higher the priority. Default to 0 if not set. If there are multiple jobs requesting same type of accelerators, the high priority job will be scheduled prior to ones with low priority. */
		priority: FormControl<number | null | undefined>,
	}
	export function CreateGoogleCloudMlV1__SchedulingFormGroup() {
		return new FormGroup<GoogleCloudMlV1__SchedulingFormProperties>({
			maxRunningTime: new FormControl<string | null | undefined>(undefined),
			maxWaitTime: new FormControl<string | null | undefined>(undefined),
			priority: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Represents results of a training job. Output only. */
	export interface GoogleCloudMlV1__TrainingOutput {

		/** Represents output related to a built-in algorithm Job. */
		builtInAlgorithmOutput?: GoogleCloudMlV1__BuiltInAlgorithmOutput;

		/** The number of hyperparameter tuning trials that completed successfully. Only set for hyperparameter tuning jobs. */
		completedTrialCount?: string | null;

		/** The amount of ML units consumed by the job. */
		consumedMLUnits?: number | null;

		/** The TensorFlow summary tag name used for optimizing hyperparameter tuning trials. See [`HyperparameterSpec.hyperparameterMetricTag`](#HyperparameterSpec.FIELDS.hyperparameter_metric_tag) for more information. Only set for hyperparameter tuning jobs. */
		hyperparameterMetricTag?: string | null;

		/** Whether this job is a built-in Algorithm job. */
		isBuiltInAlgorithmJob?: boolean | null;

		/** Whether this job is a hyperparameter tuning job. */
		isHyperparameterTuningJob?: boolean | null;

		/** Results for individual Hyperparameter trials. Only set for hyperparameter tuning jobs. */
		trials?: Array<GoogleCloudMlV1__HyperparameterOutput>;

		/** Output only. URIs for accessing [interactive shells](https://cloud.google.com/ai-platform/training/docs/monitor-debug-interactive-shell) (one URI for each training node). Only available if training_input.enable_web_access is `true`. The keys are names of each node in the training job; for example, `master-replica-0` for the master node, `worker-replica-0` for the first worker, and `ps-replica-0` for the first parameter server. The values are the URIs for each node's interactive shell. */
		webAccessUris?: {[id: string]: string };
	}

	/** Represents results of a training job. Output only. */
	export interface GoogleCloudMlV1__TrainingOutputFormProperties {

		/** The number of hyperparameter tuning trials that completed successfully. Only set for hyperparameter tuning jobs. */
		completedTrialCount: FormControl<string | null | undefined>,

		/** The amount of ML units consumed by the job. */
		consumedMLUnits: FormControl<number | null | undefined>,

		/** The TensorFlow summary tag name used for optimizing hyperparameter tuning trials. See [`HyperparameterSpec.hyperparameterMetricTag`](#HyperparameterSpec.FIELDS.hyperparameter_metric_tag) for more information. Only set for hyperparameter tuning jobs. */
		hyperparameterMetricTag: FormControl<string | null | undefined>,

		/** Whether this job is a built-in Algorithm job. */
		isBuiltInAlgorithmJob: FormControl<boolean | null | undefined>,

		/** Whether this job is a hyperparameter tuning job. */
		isHyperparameterTuningJob: FormControl<boolean | null | undefined>,

		/** Output only. URIs for accessing [interactive shells](https://cloud.google.com/ai-platform/training/docs/monitor-debug-interactive-shell) (one URI for each training node). Only available if training_input.enable_web_access is `true`. The keys are names of each node in the training job; for example, `master-replica-0` for the master node, `worker-replica-0` for the first worker, and `ps-replica-0` for the first parameter server. The values are the URIs for each node's interactive shell. */
		webAccessUris: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateGoogleCloudMlV1__TrainingOutputFormGroup() {
		return new FormGroup<GoogleCloudMlV1__TrainingOutputFormProperties>({
			completedTrialCount: new FormControl<string | null | undefined>(undefined),
			consumedMLUnits: new FormControl<number | null | undefined>(undefined),
			hyperparameterMetricTag: new FormControl<string | null | undefined>(undefined),
			isBuiltInAlgorithmJob: new FormControl<boolean | null | undefined>(undefined),
			isHyperparameterTuningJob: new FormControl<boolean | null | undefined>(undefined),
			webAccessUris: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}


	/** Response message for the ListJobs method. */
	export interface GoogleCloudMlV1__ListJobsResponse {

		/** The list of jobs. */
		jobs?: Array<GoogleCloudMlV1__Job>;

		/** Optional. Pass this token as the `page_token` field of the request for a subsequent call. */
		nextPageToken?: string | null;
	}

	/** Response message for the ListJobs method. */
	export interface GoogleCloudMlV1__ListJobsResponseFormProperties {

		/** Optional. Pass this token as the `page_token` field of the request for a subsequent call. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudMlV1__ListJobsResponseFormGroup() {
		return new FormGroup<GoogleCloudMlV1__ListJobsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GoogleCloudMlV1__ListLocationsResponse {

		/** Locations where at least one type of CMLE capability is available. */
		locations?: Array<GoogleCloudMlV1__Location>;

		/** Optional. Pass this token as the `page_token` field of the request for a subsequent call. */
		nextPageToken?: string | null;
	}
	export interface GoogleCloudMlV1__ListLocationsResponseFormProperties {

		/** Optional. Pass this token as the `page_token` field of the request for a subsequent call. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudMlV1__ListLocationsResponseFormGroup() {
		return new FormGroup<GoogleCloudMlV1__ListLocationsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GoogleCloudMlV1__Location {

		/** Capabilities available in the location. */
		capabilities?: Array<GoogleCloudMlV1__Capability>;
		name?: string | null;
	}
	export interface GoogleCloudMlV1__LocationFormProperties {
		name: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudMlV1__LocationFormGroup() {
		return new FormGroup<GoogleCloudMlV1__LocationFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response message for the ListModels method. */
	export interface GoogleCloudMlV1__ListModelsResponse {

		/** The list of models. */
		models?: Array<GoogleCloudMlV1__Model>;

		/** Optional. Pass this token as the `page_token` field of the request for a subsequent call. */
		nextPageToken?: string | null;
	}

	/** Response message for the ListModels method. */
	export interface GoogleCloudMlV1__ListModelsResponseFormProperties {

		/** Optional. Pass this token as the `page_token` field of the request for a subsequent call. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudMlV1__ListModelsResponseFormGroup() {
		return new FormGroup<GoogleCloudMlV1__ListModelsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents a machine learning solution. A model can have multiple versions, each of which is a deployed, trained model ready to receive prediction requests. The model itself is just a container. */
	export interface GoogleCloudMlV1__Model {

		/** Represents a version of the model. Each version is a trained model deployed in the cloud, ready to handle prediction requests. A model can have multiple versions. You can get information about all of the versions of a given model by calling projects.models.versions.list. */
		defaultVersion?: GoogleCloudMlV1__Version;

		/** Optional. The description specified for the model when it was created. */
		description?: string | null;

		/** `etag` is used for optimistic concurrency control as a way to help prevent simultaneous updates of a model from overwriting each other. It is strongly suggested that systems make use of the `etag` in the read-modify-write cycle to perform model updates in order to avoid race conditions: An `etag` is returned in the response to `GetModel`, and systems are expected to put that etag in the request to `UpdateModel` to ensure that their change will be applied to the model as intended. */
		etag?: string | null;

		/** Optional. One or more labels that you can add, to organize your models. Each label is a key-value pair, where both the key and the value are arbitrary strings that you supply. For more information, see the documentation on using labels. Note that this field is not updatable for mls1* models. */
		labels?: {[id: string]: string };

		/** Required. The name specified for the model when it was created. The model name must be unique within the project it is created in. */
		name?: string | null;

		/** Optional. If true, online prediction nodes send `stderr` and `stdout` streams to Cloud Logging. These can be more verbose than the standard access logs (see `onlinePredictionLogging`) and can incur higher cost. However, they are helpful for debugging. Note that [logs may incur a cost](/stackdriver/pricing), especially if your project receives prediction requests at a high QPS. Estimate your costs before enabling this option. Default is false. */
		onlinePredictionConsoleLogging?: boolean | null;

		/** Optional. If true, online prediction access logs are sent to Cloud Logging. These logs are like standard server access logs, containing information like timestamp and latency for each request. Note that [logs may incur a cost](/stackdriver/pricing), especially if your project receives prediction requests at a high queries per second rate (QPS). Estimate your costs before enabling this option. Default is false. */
		onlinePredictionLogging?: boolean | null;

		/** Optional. The list of regions where the model is going to be deployed. Only one region per model is supported. Defaults to 'us-central1' if nothing is set. See the available regions for AI Platform services. Note: * No matter where a model is deployed, it can always be accessed by users from anywhere, both for online and batch prediction. * The region for a batch prediction job is set by the region field when submitting the batch prediction job and does not take its value from this field. */
		regions?: Array<string>;
	}

	/** Represents a machine learning solution. A model can have multiple versions, each of which is a deployed, trained model ready to receive prediction requests. The model itself is just a container. */
	export interface GoogleCloudMlV1__ModelFormProperties {

		/** Optional. The description specified for the model when it was created. */
		description: FormControl<string | null | undefined>,

		/** `etag` is used for optimistic concurrency control as a way to help prevent simultaneous updates of a model from overwriting each other. It is strongly suggested that systems make use of the `etag` in the read-modify-write cycle to perform model updates in order to avoid race conditions: An `etag` is returned in the response to `GetModel`, and systems are expected to put that etag in the request to `UpdateModel` to ensure that their change will be applied to the model as intended. */
		etag: FormControl<string | null | undefined>,

		/** Optional. One or more labels that you can add, to organize your models. Each label is a key-value pair, where both the key and the value are arbitrary strings that you supply. For more information, see the documentation on using labels. Note that this field is not updatable for mls1* models. */
		labels: FormControl<{[id: string]: string } | null | undefined>,

		/** Required. The name specified for the model when it was created. The model name must be unique within the project it is created in. */
		name: FormControl<string | null | undefined>,

		/** Optional. If true, online prediction nodes send `stderr` and `stdout` streams to Cloud Logging. These can be more verbose than the standard access logs (see `onlinePredictionLogging`) and can incur higher cost. However, they are helpful for debugging. Note that [logs may incur a cost](/stackdriver/pricing), especially if your project receives prediction requests at a high QPS. Estimate your costs before enabling this option. Default is false. */
		onlinePredictionConsoleLogging: FormControl<boolean | null | undefined>,

		/** Optional. If true, online prediction access logs are sent to Cloud Logging. These logs are like standard server access logs, containing information like timestamp and latency for each request. Note that [logs may incur a cost](/stackdriver/pricing), especially if your project receives prediction requests at a high queries per second rate (QPS). Estimate your costs before enabling this option. Default is false. */
		onlinePredictionLogging: FormControl<boolean | null | undefined>,
	}
	export function CreateGoogleCloudMlV1__ModelFormGroup() {
		return new FormGroup<GoogleCloudMlV1__ModelFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			etag: new FormControl<string | null | undefined>(undefined),
			labels: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			onlinePredictionConsoleLogging: new FormControl<boolean | null | undefined>(undefined),
			onlinePredictionLogging: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Represents a version of the model. Each version is a trained model deployed in the cloud, ready to handle prediction requests. A model can have multiple versions. You can get information about all of the versions of a given model by calling projects.models.versions.list. */
	export interface GoogleCloudMlV1__Version {

		/** Represents a hardware accelerator request config. Note that the AcceleratorConfig can be used in both Jobs and Versions. Learn more about [accelerators for training](/ml-engine/docs/using-gpus) and [accelerators for online prediction](/ml-engine/docs/machine-types-online-prediction#gpus). */
		acceleratorConfig?: GoogleCloudMlV1__AcceleratorConfig;

		/** Options for automatically scaling a model. */
		autoScaling?: GoogleCloudMlV1__AutoScaling;

		/** Specification of a custom container for serving predictions. This message is a subset of the [Kubernetes Container v1 core specification](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#container-v1-core). */
		container?: GoogleCloudMlV1__ContainerSpec;

		/** Output only. The time the version was created. */
		createTime?: string | null;

		/** The Cloud Storage URI of a directory containing trained model artifacts to be used to create the model version. See the [guide to deploying models](/ai-platform/prediction/docs/deploying-models) for more information. The total number of files under this directory must not exceed 1000. During projects.models.versions.create, AI Platform Prediction copies all files from the specified directory to a location managed by the service. From then on, AI Platform Prediction uses these copies of the model artifacts to serve predictions, not the original files in Cloud Storage, so this location is useful only as a historical record. If you specify container, then this field is optional. Otherwise, it is required. Learn [how to use this field with a custom container](/ai-platform/prediction/docs/custom-container-requirements#artifacts). */
		deploymentUri?: string | null;

		/** Optional. The description specified for the version when it was created. */
		description?: string | null;

		/** Output only. The details of a failure or a cancellation. */
		errorMessage?: string | null;

		/** `etag` is used for optimistic concurrency control as a way to help prevent simultaneous updates of a model from overwriting each other. It is strongly suggested that systems make use of the `etag` in the read-modify-write cycle to perform model updates in order to avoid race conditions: An `etag` is returned in the response to `GetVersion`, and systems are expected to put that etag in the request to `UpdateVersion` to ensure that their change will be applied to the model as intended. */
		etag?: string | null;

		/** Message holding configuration options for explaining model predictions. There are three feature attribution methods supported for TensorFlow models: integrated gradients, sampled Shapley, and XRAI. [Learn more about feature attributions.](/ai-platform/prediction/docs/ai-explanations/overview) */
		explanationConfig?: GoogleCloudMlV1__ExplanationConfig;

		/** Optional. The machine learning framework AI Platform uses to train this version of the model. Valid values are `TENSORFLOW`, `SCIKIT_LEARN`, `XGBOOST`. If you do not specify a framework, AI Platform will analyze files in the deployment_uri to determine a framework. If you choose `SCIKIT_LEARN` or `XGBOOST`, you must also set the runtime version of the model to 1.4 or greater. Do **not** specify a framework if you're deploying a [custom prediction routine](/ai-platform/prediction/docs/custom-prediction-routines) or if you're using a [custom container](/ai-platform/prediction/docs/use-custom-container). */
		framework?: GoogleCloudMlV1__VersionFramework | null;

		/** Output only. If true, this version will be used to handle prediction requests that do not specify a version. You can change the default version by calling projects.methods.versions.setDefault. */
		isDefault?: boolean | null;

		/** Optional. One or more labels that you can add, to organize your model versions. Each label is a key-value pair, where both the key and the value are arbitrary strings that you supply. For more information, see the documentation on using labels. Note that this field is not updatable for mls1* models. */
		labels?: {[id: string]: string };

		/** Output only. The [AI Platform (Unified) `Model`](https://cloud.google.com/ai-platform-unified/docs/reference/rest/v1beta1/projects.locations.models) ID for the last [model migration](https://cloud.google.com/ai-platform-unified/docs/start/migrating-to-ai-platform-unified). */
		lastMigrationModelId?: string | null;

		/** Output only. The last time this version was successfully [migrated to AI Platform (Unified)](https://cloud.google.com/ai-platform-unified/docs/start/migrating-to-ai-platform-unified). */
		lastMigrationTime?: string | null;

		/** Output only. The time the version was last used for prediction. */
		lastUseTime?: string | null;

		/** Optional. The type of machine on which to serve the model. Currently only applies to online prediction service. To learn about valid values for this field, read [Choosing a machine type for online prediction](/ai-platform/prediction/docs/machine-types-online-prediction). If this field is not specified and you are using a [regional endpoint](/ai-platform/prediction/docs/regional-endpoints), then the machine type defaults to `n1-standard-2`. If this field is not specified and you are using the global endpoint (`ml.googleapis.com`), then the machine type defaults to `mls1-c1-m2`. */
		machineType?: string | null;

		/** Options for manually scaling a model. */
		manualScaling?: GoogleCloudMlV1__ManualScaling;

		/** Required. The name specified for the version when it was created. The version name must be unique within the model it is created in. */
		name?: string | null;

		/** Optional. Cloud Storage paths (`gs://…`) of packages for [custom prediction routines](/ml-engine/docs/tensorflow/custom-prediction-routines) or [scikit-learn pipelines with custom code](/ml-engine/docs/scikit/exporting-for-prediction#custom-pipeline-code). For a custom prediction routine, one of these packages must contain your Predictor class (see [`predictionClass`](#Version.FIELDS.prediction_class)). Additionally, include any dependencies used by your Predictor or scikit-learn pipeline uses that are not already included in your selected [runtime version](/ml-engine/docs/tensorflow/runtime-version-list). If you specify this field, you must also set [`runtimeVersion`](#Version.FIELDS.runtime_version) to 1.4 or greater. */
		packageUris?: Array<string>;

		/** Optional. The fully qualified name (module_name.class_name) of a class that implements the Predictor interface described in this reference field. The module containing this class should be included in a package provided to the [`packageUris` field](#Version.FIELDS.package_uris). Specify this field if and only if you are deploying a [custom prediction routine (beta)](/ml-engine/docs/tensorflow/custom-prediction-routines). If you specify this field, you must set [`runtimeVersion`](#Version.FIELDS.runtime_version) to 1.4 or greater and you must set `machineType` to a [legacy (MLS1) machine type](/ml-engine/docs/machine-types-online-prediction). The following code sample provides the Predictor interface: class Predictor(object): """Interface for constructing custom predictors.""" def predict(self, instances, **kwargs): """Performs custom prediction. Instances are the decoded values from the request. They have already been deserialized from JSON. Args: instances: A list of prediction input instances. **kwargs: A dictionary of keyword args provided as additional fields on the predict request body. Returns: A list of outputs containing the prediction results. This list must be JSON serializable. """ raise NotImplementedError() @classmethod def from_path(cls, model_dir): """Creates an instance of Predictor using the given path. Loading of the predictor should be done in this method. Args: model_dir: The local directory that contains the exported model file along with any additional files uploaded when creating the version resource. Returns: An instance implementing this Predictor class. """ raise NotImplementedError() Learn more about [the Predictor interface and custom prediction routines](/ml-engine/docs/tensorflow/custom-prediction-routines). */
		predictionClass?: string | null;

		/** Required. The version of Python used in prediction. The following Python versions are available: * Python '3.7' is available when `runtime_version` is set to '1.15' or later. * Python '3.5' is available when `runtime_version` is set to a version from '1.4' to '1.14'. * Python '2.7' is available when `runtime_version` is set to '1.15' or earlier. Read more about the Python versions available for [each runtime version](/ml-engine/docs/runtime-version-list). */
		pythonVersion?: string | null;

		/** Configuration for logging request-response pairs to a BigQuery table. Online prediction requests to a model version and the responses to these requests are converted to raw strings and saved to the specified BigQuery table. Logging is constrained by [BigQuery quotas and limits](/bigquery/quotas). If your project exceeds BigQuery quotas or limits, AI Platform Prediction does not log request-response pairs, but it continues to serve predictions. If you are using [continuous evaluation](/ml-engine/docs/continuous-evaluation/), you do not need to specify this configuration manually. Setting up continuous evaluation automatically enables logging of request-response pairs. */
		requestLoggingConfig?: GoogleCloudMlV1__RequestLoggingConfig;

		/** Specifies HTTP paths served by a custom container. AI Platform Prediction sends requests to these paths on the container; the custom container must run an HTTP server that responds to these requests with appropriate responses. Read [Custom container requirements](/ai-platform/prediction/docs/custom-container-requirements) for details on how to create your container image to meet these requirements. */
		routes?: GoogleCloudMlV1__RouteMap;

		/** Required. The AI Platform runtime version to use for this deployment. For more information, see the [runtime version list](/ml-engine/docs/runtime-version-list) and [how to manage runtime versions](/ml-engine/docs/versioning). */
		runtimeVersion?: string | null;

		/** Optional. Specifies the service account for resource access control. If you specify this field, then you must also specify either the `containerSpec` or the `predictionClass` field. Learn more about [using a custom service account](/ai-platform/prediction/docs/custom-service-account). */
		serviceAccount?: string | null;

		/** Output only. The state of a version. */
		state?: GoogleCloudMlV1__VersionState | null;
	}

	/** Represents a version of the model. Each version is a trained model deployed in the cloud, ready to handle prediction requests. A model can have multiple versions. You can get information about all of the versions of a given model by calling projects.models.versions.list. */
	export interface GoogleCloudMlV1__VersionFormProperties {

		/** Output only. The time the version was created. */
		createTime: FormControl<string | null | undefined>,

		/** The Cloud Storage URI of a directory containing trained model artifacts to be used to create the model version. See the [guide to deploying models](/ai-platform/prediction/docs/deploying-models) for more information. The total number of files under this directory must not exceed 1000. During projects.models.versions.create, AI Platform Prediction copies all files from the specified directory to a location managed by the service. From then on, AI Platform Prediction uses these copies of the model artifacts to serve predictions, not the original files in Cloud Storage, so this location is useful only as a historical record. If you specify container, then this field is optional. Otherwise, it is required. Learn [how to use this field with a custom container](/ai-platform/prediction/docs/custom-container-requirements#artifacts). */
		deploymentUri: FormControl<string | null | undefined>,

		/** Optional. The description specified for the version when it was created. */
		description: FormControl<string | null | undefined>,

		/** Output only. The details of a failure or a cancellation. */
		errorMessage: FormControl<string | null | undefined>,

		/** `etag` is used for optimistic concurrency control as a way to help prevent simultaneous updates of a model from overwriting each other. It is strongly suggested that systems make use of the `etag` in the read-modify-write cycle to perform model updates in order to avoid race conditions: An `etag` is returned in the response to `GetVersion`, and systems are expected to put that etag in the request to `UpdateVersion` to ensure that their change will be applied to the model as intended. */
		etag: FormControl<string | null | undefined>,

		/** Optional. The machine learning framework AI Platform uses to train this version of the model. Valid values are `TENSORFLOW`, `SCIKIT_LEARN`, `XGBOOST`. If you do not specify a framework, AI Platform will analyze files in the deployment_uri to determine a framework. If you choose `SCIKIT_LEARN` or `XGBOOST`, you must also set the runtime version of the model to 1.4 or greater. Do **not** specify a framework if you're deploying a [custom prediction routine](/ai-platform/prediction/docs/custom-prediction-routines) or if you're using a [custom container](/ai-platform/prediction/docs/use-custom-container). */
		framework: FormControl<GoogleCloudMlV1__VersionFramework | null | undefined>,

		/** Output only. If true, this version will be used to handle prediction requests that do not specify a version. You can change the default version by calling projects.methods.versions.setDefault. */
		isDefault: FormControl<boolean | null | undefined>,

		/** Optional. One or more labels that you can add, to organize your model versions. Each label is a key-value pair, where both the key and the value are arbitrary strings that you supply. For more information, see the documentation on using labels. Note that this field is not updatable for mls1* models. */
		labels: FormControl<{[id: string]: string } | null | undefined>,

		/** Output only. The [AI Platform (Unified) `Model`](https://cloud.google.com/ai-platform-unified/docs/reference/rest/v1beta1/projects.locations.models) ID for the last [model migration](https://cloud.google.com/ai-platform-unified/docs/start/migrating-to-ai-platform-unified). */
		lastMigrationModelId: FormControl<string | null | undefined>,

		/** Output only. The last time this version was successfully [migrated to AI Platform (Unified)](https://cloud.google.com/ai-platform-unified/docs/start/migrating-to-ai-platform-unified). */
		lastMigrationTime: FormControl<string | null | undefined>,

		/** Output only. The time the version was last used for prediction. */
		lastUseTime: FormControl<string | null | undefined>,

		/** Optional. The type of machine on which to serve the model. Currently only applies to online prediction service. To learn about valid values for this field, read [Choosing a machine type for online prediction](/ai-platform/prediction/docs/machine-types-online-prediction). If this field is not specified and you are using a [regional endpoint](/ai-platform/prediction/docs/regional-endpoints), then the machine type defaults to `n1-standard-2`. If this field is not specified and you are using the global endpoint (`ml.googleapis.com`), then the machine type defaults to `mls1-c1-m2`. */
		machineType: FormControl<string | null | undefined>,

		/** Required. The name specified for the version when it was created. The version name must be unique within the model it is created in. */
		name: FormControl<string | null | undefined>,

		/** Optional. The fully qualified name (module_name.class_name) of a class that implements the Predictor interface described in this reference field. The module containing this class should be included in a package provided to the [`packageUris` field](#Version.FIELDS.package_uris). Specify this field if and only if you are deploying a [custom prediction routine (beta)](/ml-engine/docs/tensorflow/custom-prediction-routines). If you specify this field, you must set [`runtimeVersion`](#Version.FIELDS.runtime_version) to 1.4 or greater and you must set `machineType` to a [legacy (MLS1) machine type](/ml-engine/docs/machine-types-online-prediction). The following code sample provides the Predictor interface: class Predictor(object): """Interface for constructing custom predictors.""" def predict(self, instances, **kwargs): """Performs custom prediction. Instances are the decoded values from the request. They have already been deserialized from JSON. Args: instances: A list of prediction input instances. **kwargs: A dictionary of keyword args provided as additional fields on the predict request body. Returns: A list of outputs containing the prediction results. This list must be JSON serializable. """ raise NotImplementedError() @classmethod def from_path(cls, model_dir): """Creates an instance of Predictor using the given path. Loading of the predictor should be done in this method. Args: model_dir: The local directory that contains the exported model file along with any additional files uploaded when creating the version resource. Returns: An instance implementing this Predictor class. """ raise NotImplementedError() Learn more about [the Predictor interface and custom prediction routines](/ml-engine/docs/tensorflow/custom-prediction-routines). */
		predictionClass: FormControl<string | null | undefined>,

		/** Required. The version of Python used in prediction. The following Python versions are available: * Python '3.7' is available when `runtime_version` is set to '1.15' or later. * Python '3.5' is available when `runtime_version` is set to a version from '1.4' to '1.14'. * Python '2.7' is available when `runtime_version` is set to '1.15' or earlier. Read more about the Python versions available for [each runtime version](/ml-engine/docs/runtime-version-list). */
		pythonVersion: FormControl<string | null | undefined>,

		/** Required. The AI Platform runtime version to use for this deployment. For more information, see the [runtime version list](/ml-engine/docs/runtime-version-list) and [how to manage runtime versions](/ml-engine/docs/versioning). */
		runtimeVersion: FormControl<string | null | undefined>,

		/** Optional. Specifies the service account for resource access control. If you specify this field, then you must also specify either the `containerSpec` or the `predictionClass` field. Learn more about [using a custom service account](/ai-platform/prediction/docs/custom-service-account). */
		serviceAccount: FormControl<string | null | undefined>,

		/** Output only. The state of a version. */
		state: FormControl<GoogleCloudMlV1__VersionState | null | undefined>,
	}
	export function CreateGoogleCloudMlV1__VersionFormGroup() {
		return new FormGroup<GoogleCloudMlV1__VersionFormProperties>({
			createTime: new FormControl<string | null | undefined>(undefined),
			deploymentUri: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			errorMessage: new FormControl<string | null | undefined>(undefined),
			etag: new FormControl<string | null | undefined>(undefined),
			framework: new FormControl<GoogleCloudMlV1__VersionFramework | null | undefined>(undefined),
			isDefault: new FormControl<boolean | null | undefined>(undefined),
			labels: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			lastMigrationModelId: new FormControl<string | null | undefined>(undefined),
			lastMigrationTime: new FormControl<string | null | undefined>(undefined),
			lastUseTime: new FormControl<string | null | undefined>(undefined),
			machineType: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			predictionClass: new FormControl<string | null | undefined>(undefined),
			pythonVersion: new FormControl<string | null | undefined>(undefined),
			runtimeVersion: new FormControl<string | null | undefined>(undefined),
			serviceAccount: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<GoogleCloudMlV1__VersionState | null | undefined>(undefined),
		});

	}

	export enum GoogleCloudMlV1__VersionFramework { FRAMEWORK_UNSPECIFIED = 'FRAMEWORK_UNSPECIFIED', TENSORFLOW = 'TENSORFLOW', SCIKIT_LEARN = 'SCIKIT_LEARN', XGBOOST = 'XGBOOST' }


	/** Options for manually scaling a model. */
	export interface GoogleCloudMlV1__ManualScaling {

		/** The number of nodes to allocate for this model. These nodes are always up, starting from the time the model is deployed, so the cost of operating this model will be proportional to `nodes` * number of hours since last billing cycle plus the cost for each prediction performed. */
		nodes?: number | null;
	}

	/** Options for manually scaling a model. */
	export interface GoogleCloudMlV1__ManualScalingFormProperties {

		/** The number of nodes to allocate for this model. These nodes are always up, starting from the time the model is deployed, so the cost of operating this model will be proportional to `nodes` * number of hours since last billing cycle plus the cost for each prediction performed. */
		nodes: FormControl<number | null | undefined>,
	}
	export function CreateGoogleCloudMlV1__ManualScalingFormGroup() {
		return new FormGroup<GoogleCloudMlV1__ManualScalingFormProperties>({
			nodes: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Configuration for logging request-response pairs to a BigQuery table. Online prediction requests to a model version and the responses to these requests are converted to raw strings and saved to the specified BigQuery table. Logging is constrained by [BigQuery quotas and limits](/bigquery/quotas). If your project exceeds BigQuery quotas or limits, AI Platform Prediction does not log request-response pairs, but it continues to serve predictions. If you are using [continuous evaluation](/ml-engine/docs/continuous-evaluation/), you do not need to specify this configuration manually. Setting up continuous evaluation automatically enables logging of request-response pairs. */
	export interface GoogleCloudMlV1__RequestLoggingConfig {

		/** Required. Fully qualified BigQuery table name in the following format: " project_id.dataset_name.table_name" The specified table must already exist, and the "Cloud ML Service Agent" for your project must have permission to write to it. The table must have the following [schema](/bigquery/docs/schemas): Field nameType Mode model STRING REQUIRED model_version STRING REQUIRED time TIMESTAMP REQUIRED raw_data STRING REQUIRED raw_prediction STRING NULLABLE groundtruth STRING NULLABLE */
		bigqueryTableName?: string | null;

		/** Percentage of requests to be logged, expressed as a fraction from 0 to 1. For example, if you want to log 10% of requests, enter `0.1`. The sampling window is the lifetime of the model version. Defaults to 0. */
		samplingPercentage?: number | null;
	}

	/** Configuration for logging request-response pairs to a BigQuery table. Online prediction requests to a model version and the responses to these requests are converted to raw strings and saved to the specified BigQuery table. Logging is constrained by [BigQuery quotas and limits](/bigquery/quotas). If your project exceeds BigQuery quotas or limits, AI Platform Prediction does not log request-response pairs, but it continues to serve predictions. If you are using [continuous evaluation](/ml-engine/docs/continuous-evaluation/), you do not need to specify this configuration manually. Setting up continuous evaluation automatically enables logging of request-response pairs. */
	export interface GoogleCloudMlV1__RequestLoggingConfigFormProperties {

		/** Required. Fully qualified BigQuery table name in the following format: " project_id.dataset_name.table_name" The specified table must already exist, and the "Cloud ML Service Agent" for your project must have permission to write to it. The table must have the following [schema](/bigquery/docs/schemas): Field nameType Mode model STRING REQUIRED model_version STRING REQUIRED time TIMESTAMP REQUIRED raw_data STRING REQUIRED raw_prediction STRING NULLABLE groundtruth STRING NULLABLE */
		bigqueryTableName: FormControl<string | null | undefined>,

		/** Percentage of requests to be logged, expressed as a fraction from 0 to 1. For example, if you want to log 10% of requests, enter `0.1`. The sampling window is the lifetime of the model version. Defaults to 0. */
		samplingPercentage: FormControl<number | null | undefined>,
	}
	export function CreateGoogleCloudMlV1__RequestLoggingConfigFormGroup() {
		return new FormGroup<GoogleCloudMlV1__RequestLoggingConfigFormProperties>({
			bigqueryTableName: new FormControl<string | null | undefined>(undefined),
			samplingPercentage: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Specifies HTTP paths served by a custom container. AI Platform Prediction sends requests to these paths on the container; the custom container must run an HTTP server that responds to these requests with appropriate responses. Read [Custom container requirements](/ai-platform/prediction/docs/custom-container-requirements) for details on how to create your container image to meet these requirements. */
	export interface GoogleCloudMlV1__RouteMap {

		/** HTTP path on the container to send health checkss to. AI Platform Prediction intermittently sends GET requests to this path on the container's IP address and port to check that the container is healthy. Read more about [health checks](/ai-platform/prediction/docs/custom-container-requirements#checks). For example, if you set this field to `/bar`, then AI Platform Prediction intermittently sends a GET request to the `/bar` path on the port of your container specified by the first value of Version.container.ports. If you don't specify this field, it defaults to the following value: /v1/models/ MODEL/versions/VERSION The placeholders in this value are replaced as follows: * MODEL: The name of the parent Model. This does not include the "projects/PROJECT_ID/models/" prefix that the API returns in output; it is the bare model name, as provided to projects.models.create. * VERSION: The name of the model version. This does not include the "projects/PROJECT_ID /models/MODEL/versions/" prefix that the API returns in output; it is the bare version name, as provided to projects.models.versions.create. */
		health?: string | null;

		/** HTTP path on the container to send prediction requests to. AI Platform Prediction forwards requests sent using projects.predict to this path on the container's IP address and port. AI Platform Prediction then returns the container's response in the API response. For example, if you set this field to `/foo`, then when AI Platform Prediction receives a prediction request, it forwards the request body in a POST request to the `/foo` path on the port of your container specified by the first value of Version.container.ports. If you don't specify this field, it defaults to the following value: /v1/models/MODEL/versions/VERSION:predict The placeholders in this value are replaced as follows: * MODEL: The name of the parent Model. This does not include the "projects/PROJECT_ID/models/" prefix that the API returns in output; it is the bare model name, as provided to projects.models.create. * VERSION: The name of the model version. This does not include the "projects/PROJECT_ID/models/MODEL/versions/" prefix that the API returns in output; it is the bare version name, as provided to projects.models.versions.create. */
		predict?: string | null;
	}

	/** Specifies HTTP paths served by a custom container. AI Platform Prediction sends requests to these paths on the container; the custom container must run an HTTP server that responds to these requests with appropriate responses. Read [Custom container requirements](/ai-platform/prediction/docs/custom-container-requirements) for details on how to create your container image to meet these requirements. */
	export interface GoogleCloudMlV1__RouteMapFormProperties {

		/** HTTP path on the container to send health checkss to. AI Platform Prediction intermittently sends GET requests to this path on the container's IP address and port to check that the container is healthy. Read more about [health checks](/ai-platform/prediction/docs/custom-container-requirements#checks). For example, if you set this field to `/bar`, then AI Platform Prediction intermittently sends a GET request to the `/bar` path on the port of your container specified by the first value of Version.container.ports. If you don't specify this field, it defaults to the following value: /v1/models/ MODEL/versions/VERSION The placeholders in this value are replaced as follows: * MODEL: The name of the parent Model. This does not include the "projects/PROJECT_ID/models/" prefix that the API returns in output; it is the bare model name, as provided to projects.models.create. * VERSION: The name of the model version. This does not include the "projects/PROJECT_ID /models/MODEL/versions/" prefix that the API returns in output; it is the bare version name, as provided to projects.models.versions.create. */
		health: FormControl<string | null | undefined>,

		/** HTTP path on the container to send prediction requests to. AI Platform Prediction forwards requests sent using projects.predict to this path on the container's IP address and port. AI Platform Prediction then returns the container's response in the API response. For example, if you set this field to `/foo`, then when AI Platform Prediction receives a prediction request, it forwards the request body in a POST request to the `/foo` path on the port of your container specified by the first value of Version.container.ports. If you don't specify this field, it defaults to the following value: /v1/models/MODEL/versions/VERSION:predict The placeholders in this value are replaced as follows: * MODEL: The name of the parent Model. This does not include the "projects/PROJECT_ID/models/" prefix that the API returns in output; it is the bare model name, as provided to projects.models.create. * VERSION: The name of the model version. This does not include the "projects/PROJECT_ID/models/MODEL/versions/" prefix that the API returns in output; it is the bare version name, as provided to projects.models.versions.create. */
		predict: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudMlV1__RouteMapFormGroup() {
		return new FormGroup<GoogleCloudMlV1__RouteMapFormProperties>({
			health: new FormControl<string | null | undefined>(undefined),
			predict: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum GoogleCloudMlV1__VersionState { UNKNOWN = 'UNKNOWN', READY = 'READY', CREATING = 'CREATING', FAILED = 'FAILED', DELETING = 'DELETING', UPDATING = 'UPDATING' }


	/** The request message for the ListTrials service method. */
	export interface GoogleCloudMlV1__ListOptimalTrialsRequest {
	}

	/** The request message for the ListTrials service method. */
	export interface GoogleCloudMlV1__ListOptimalTrialsRequestFormProperties {
	}
	export function CreateGoogleCloudMlV1__ListOptimalTrialsRequestFormGroup() {
		return new FormGroup<GoogleCloudMlV1__ListOptimalTrialsRequestFormProperties>({
		});

	}


	/** The response message for the ListOptimalTrials method. */
	export interface GoogleCloudMlV1__ListOptimalTrialsResponse {

		/** The pareto-optimal trials for multiple objective study or the optimal trial for single objective study. The definition of pareto-optimal can be checked in wiki page. https://en.wikipedia.org/wiki/Pareto_efficiency */
		trials?: Array<GoogleCloudMlV1__Trial>;
	}

	/** The response message for the ListOptimalTrials method. */
	export interface GoogleCloudMlV1__ListOptimalTrialsResponseFormProperties {
	}
	export function CreateGoogleCloudMlV1__ListOptimalTrialsResponseFormGroup() {
		return new FormGroup<GoogleCloudMlV1__ListOptimalTrialsResponseFormProperties>({
		});

	}


	/** A message representing a trial. */
	export interface GoogleCloudMlV1__Trial {

		/** Output only. The identifier of the client that originally requested this trial. */
		clientId?: string | null;

		/** Output only. Time at which the trial's status changed to COMPLETED. */
		endTime?: string | null;

		/** A message representing a measurement. */
		finalMeasurement?: GoogleCloudMlV1__Measurement;

		/** Output only. A human readable string describing why the trial is infeasible. This should only be set if trial_infeasible is true. */
		infeasibleReason?: string | null;

		/** A list of measurements that are strictly lexicographically ordered by their induced tuples (steps, elapsed_time). These are used for early stopping computations. */
		measurements?: Array<GoogleCloudMlV1__Measurement>;

		/** Output only. Name of the trial assigned by the service. */
		name?: string | null;

		/** The parameters of the trial. */
		parameters?: Array<GoogleCloudMlV1_Trial_Parameter>;

		/** Output only. Time at which the trial was started. */
		startTime?: string | null;

		/** The detailed state of a trial. */
		state?: GoogleCloudMlV1__TrialState | null;

		/** Output only. If true, the parameters in this trial are not attempted again. */
		trialInfeasible?: boolean | null;
	}

	/** A message representing a trial. */
	export interface GoogleCloudMlV1__TrialFormProperties {

		/** Output only. The identifier of the client that originally requested this trial. */
		clientId: FormControl<string | null | undefined>,

		/** Output only. Time at which the trial's status changed to COMPLETED. */
		endTime: FormControl<string | null | undefined>,

		/** Output only. A human readable string describing why the trial is infeasible. This should only be set if trial_infeasible is true. */
		infeasibleReason: FormControl<string | null | undefined>,

		/** Output only. Name of the trial assigned by the service. */
		name: FormControl<string | null | undefined>,

		/** Output only. Time at which the trial was started. */
		startTime: FormControl<string | null | undefined>,

		/** The detailed state of a trial. */
		state: FormControl<GoogleCloudMlV1__TrialState | null | undefined>,

		/** Output only. If true, the parameters in this trial are not attempted again. */
		trialInfeasible: FormControl<boolean | null | undefined>,
	}
	export function CreateGoogleCloudMlV1__TrialFormGroup() {
		return new FormGroup<GoogleCloudMlV1__TrialFormProperties>({
			clientId: new FormControl<string | null | undefined>(undefined),
			endTime: new FormControl<string | null | undefined>(undefined),
			infeasibleReason: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			startTime: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<GoogleCloudMlV1__TrialState | null | undefined>(undefined),
			trialInfeasible: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export enum GoogleCloudMlV1__TrialState { STATE_UNSPECIFIED = 'STATE_UNSPECIFIED', REQUESTED = 'REQUESTED', ACTIVE = 'ACTIVE', COMPLETED = 'COMPLETED', STOPPING = 'STOPPING' }

	export interface GoogleCloudMlV1__ListStudiesResponse {

		/** The studies associated with the project. */
		studies?: Array<GoogleCloudMlV1__Study>;
	}
	export interface GoogleCloudMlV1__ListStudiesResponseFormProperties {
	}
	export function CreateGoogleCloudMlV1__ListStudiesResponseFormGroup() {
		return new FormGroup<GoogleCloudMlV1__ListStudiesResponseFormProperties>({
		});

	}


	/** A message representing a Study. */
	export interface GoogleCloudMlV1__Study {

		/** Output only. Time at which the study was created. */
		createTime?: string | null;

		/** Output only. A human readable reason why the Study is inactive. This should be empty if a study is ACTIVE or COMPLETED. */
		inactiveReason?: string | null;

		/** Output only. The name of a study. */
		name?: string | null;

		/** Output only. The detailed state of a study. */
		state?: GoogleCloudMlV1__StudyState | null;

		/** Represents configuration of a study. */
		studyConfig?: GoogleCloudMlV1__StudyConfig;
	}

	/** A message representing a Study. */
	export interface GoogleCloudMlV1__StudyFormProperties {

		/** Output only. Time at which the study was created. */
		createTime: FormControl<string | null | undefined>,

		/** Output only. A human readable reason why the Study is inactive. This should be empty if a study is ACTIVE or COMPLETED. */
		inactiveReason: FormControl<string | null | undefined>,

		/** Output only. The name of a study. */
		name: FormControl<string | null | undefined>,

		/** Output only. The detailed state of a study. */
		state: FormControl<GoogleCloudMlV1__StudyState | null | undefined>,
	}
	export function CreateGoogleCloudMlV1__StudyFormGroup() {
		return new FormGroup<GoogleCloudMlV1__StudyFormProperties>({
			createTime: new FormControl<string | null | undefined>(undefined),
			inactiveReason: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<GoogleCloudMlV1__StudyState | null | undefined>(undefined),
		});

	}

	export enum GoogleCloudMlV1__StudyState { STATE_UNSPECIFIED = 'STATE_UNSPECIFIED', ACTIVE = 'ACTIVE', INACTIVE = 'INACTIVE', COMPLETED = 'COMPLETED' }


	/** Represents configuration of a study. */
	export interface GoogleCloudMlV1__StudyConfig {

		/** The search algorithm specified for the study. */
		algorithm?: GoogleCloudMlV1__StudyConfigAlgorithm | null;

		/** Configuration for Automated Early Stopping of Trials. If no implementation_config is set, automated early stopping will not be run. */
		automatedStoppingConfig?: GoogleCloudMlV1__AutomatedStoppingConfig;

		/** Metric specs for the study. */
		metrics?: Array<GoogleCloudMlV1_StudyConfig_MetricSpec>;

		/** Required. The set of parameters to tune. */
		parameters?: Array<GoogleCloudMlV1_StudyConfig_ParameterSpec>;
	}

	/** Represents configuration of a study. */
	export interface GoogleCloudMlV1__StudyConfigFormProperties {

		/** The search algorithm specified for the study. */
		algorithm: FormControl<GoogleCloudMlV1__StudyConfigAlgorithm | null | undefined>,
	}
	export function CreateGoogleCloudMlV1__StudyConfigFormGroup() {
		return new FormGroup<GoogleCloudMlV1__StudyConfigFormProperties>({
			algorithm: new FormControl<GoogleCloudMlV1__StudyConfigAlgorithm | null | undefined>(undefined),
		});

	}

	export enum GoogleCloudMlV1__StudyConfigAlgorithm { ALGORITHM_UNSPECIFIED = 'ALGORITHM_UNSPECIFIED', GAUSSIAN_PROCESS_BANDIT = 'GAUSSIAN_PROCESS_BANDIT', GRID_SEARCH = 'GRID_SEARCH', RANDOM_SEARCH = 'RANDOM_SEARCH' }


	/** The response message for the ListTrials method. */
	export interface GoogleCloudMlV1__ListTrialsResponse {

		/** The trials associated with the study. */
		trials?: Array<GoogleCloudMlV1__Trial>;
	}

	/** The response message for the ListTrials method. */
	export interface GoogleCloudMlV1__ListTrialsResponseFormProperties {
	}
	export function CreateGoogleCloudMlV1__ListTrialsResponseFormGroup() {
		return new FormGroup<GoogleCloudMlV1__ListTrialsResponseFormProperties>({
		});

	}


	/** Response message for the ListVersions method. */
	export interface GoogleCloudMlV1__ListVersionsResponse {

		/** Optional. Pass this token as the `page_token` field of the request for a subsequent call. */
		nextPageToken?: string | null;

		/** The list of versions. */
		versions?: Array<GoogleCloudMlV1__Version>;
	}

	/** Response message for the ListVersions method. */
	export interface GoogleCloudMlV1__ListVersionsResponseFormProperties {

		/** Optional. Pass this token as the `page_token` field of the request for a subsequent call. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudMlV1__ListVersionsResponseFormGroup() {
		return new FormGroup<GoogleCloudMlV1__ListVersionsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents the metadata of the long-running operation. */
	export interface GoogleCloudMlV1__OperationMetadata {

		/** The time the operation was submitted. */
		createTime?: string | null;

		/** The time operation processing completed. */
		endTime?: string | null;

		/** Indicates whether a request to cancel this operation has been made. */
		isCancellationRequested?: boolean | null;

		/** The user labels, inherited from the model or the model version being operated on. */
		labels?: {[id: string]: string };

		/** Contains the name of the model associated with the operation. */
		modelName?: string | null;

		/** The operation type. */
		operationType?: GoogleCloudMlV1__OperationMetadataOperationType | null;

		/** Contains the project number associated with the operation. */
		projectNumber?: string | null;

		/** The time operation processing started. */
		startTime?: string | null;

		/** Represents a version of the model. Each version is a trained model deployed in the cloud, ready to handle prediction requests. A model can have multiple versions. You can get information about all of the versions of a given model by calling projects.models.versions.list. */
		version?: GoogleCloudMlV1__Version;
	}

	/** Represents the metadata of the long-running operation. */
	export interface GoogleCloudMlV1__OperationMetadataFormProperties {

		/** The time the operation was submitted. */
		createTime: FormControl<string | null | undefined>,

		/** The time operation processing completed. */
		endTime: FormControl<string | null | undefined>,

		/** Indicates whether a request to cancel this operation has been made. */
		isCancellationRequested: FormControl<boolean | null | undefined>,

		/** The user labels, inherited from the model or the model version being operated on. */
		labels: FormControl<{[id: string]: string } | null | undefined>,

		/** Contains the name of the model associated with the operation. */
		modelName: FormControl<string | null | undefined>,

		/** The operation type. */
		operationType: FormControl<GoogleCloudMlV1__OperationMetadataOperationType | null | undefined>,

		/** Contains the project number associated with the operation. */
		projectNumber: FormControl<string | null | undefined>,

		/** The time operation processing started. */
		startTime: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudMlV1__OperationMetadataFormGroup() {
		return new FormGroup<GoogleCloudMlV1__OperationMetadataFormProperties>({
			createTime: new FormControl<string | null | undefined>(undefined),
			endTime: new FormControl<string | null | undefined>(undefined),
			isCancellationRequested: new FormControl<boolean | null | undefined>(undefined),
			labels: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			modelName: new FormControl<string | null | undefined>(undefined),
			operationType: new FormControl<GoogleCloudMlV1__OperationMetadataOperationType | null | undefined>(undefined),
			projectNumber: new FormControl<string | null | undefined>(undefined),
			startTime: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum GoogleCloudMlV1__OperationMetadataOperationType { OPERATION_TYPE_UNSPECIFIED = 'OPERATION_TYPE_UNSPECIFIED', CREATE_VERSION = 'CREATE_VERSION', DELETE_VERSION = 'DELETE_VERSION', DELETE_MODEL = 'DELETE_MODEL', UPDATE_MODEL = 'UPDATE_MODEL', UPDATE_VERSION = 'UPDATE_VERSION', UPDATE_CONFIG = 'UPDATE_CONFIG' }


	/** Request for predictions to be issued against a trained model. */
	export interface GoogleCloudMlV1__PredictRequest {

		/** Message that represents an arbitrary HTTP body. It should only be used for payload formats that can't be represented as JSON, such as raw binary or an HTML page. This message can be used both in streaming and non-streaming API methods in the request as well as the response. It can be used as a top-level request field, which is convenient if one wants to extract parameters from either the URL or HTTP template into the request fields and also want access to the raw HTTP body. Example: message GetResourceRequest { // A unique request id. string request_id = 1; // The raw HTTP body is bound to this field. google.api.HttpBody http_body = 2; } service ResourceService { rpc GetResource(GetResourceRequest) returns (google.api.HttpBody); rpc UpdateResource(google.api.HttpBody) returns (google.protobuf.Empty); } Example with streaming methods: service CaldavService { rpc GetCalendar(stream google.api.HttpBody) returns (stream google.api.HttpBody); rpc UpdateCalendar(stream google.api.HttpBody) returns (stream google.api.HttpBody); } Use of this type only changes how the request and response bodies are handled, all other features will continue to work unchanged. */
		httpBody?: GoogleApi__HttpBody;
	}

	/** Request for predictions to be issued against a trained model. */
	export interface GoogleCloudMlV1__PredictRequestFormProperties {
	}
	export function CreateGoogleCloudMlV1__PredictRequestFormGroup() {
		return new FormGroup<GoogleCloudMlV1__PredictRequestFormProperties>({
		});

	}


	/** Request message for the SetDefaultVersion request. */
	export interface GoogleCloudMlV1__SetDefaultVersionRequest {
	}

	/** Request message for the SetDefaultVersion request. */
	export interface GoogleCloudMlV1__SetDefaultVersionRequestFormProperties {
	}
	export function CreateGoogleCloudMlV1__SetDefaultVersionRequestFormGroup() {
		return new FormGroup<GoogleCloudMlV1__SetDefaultVersionRequestFormProperties>({
		});

	}

	export interface GoogleCloudMlV1__StopTrialRequest {
	}
	export interface GoogleCloudMlV1__StopTrialRequestFormProperties {
	}
	export function CreateGoogleCloudMlV1__StopTrialRequestFormGroup() {
		return new FormGroup<GoogleCloudMlV1__StopTrialRequestFormProperties>({
		});

	}


	/** Metadata field of a google.longrunning.Operation associated with a SuggestTrialsRequest. */
	export interface GoogleCloudMlV1__SuggestTrialsMetadata {

		/** The identifier of the client that is requesting the suggestion. */
		clientId?: string | null;

		/** The time operation was submitted. */
		createTime?: string | null;

		/** The name of the study that the trial belongs to. */
		study?: string | null;

		/** The number of suggestions requested. */
		suggestionCount?: number | null;
	}

	/** Metadata field of a google.longrunning.Operation associated with a SuggestTrialsRequest. */
	export interface GoogleCloudMlV1__SuggestTrialsMetadataFormProperties {

		/** The identifier of the client that is requesting the suggestion. */
		clientId: FormControl<string | null | undefined>,

		/** The time operation was submitted. */
		createTime: FormControl<string | null | undefined>,

		/** The name of the study that the trial belongs to. */
		study: FormControl<string | null | undefined>,

		/** The number of suggestions requested. */
		suggestionCount: FormControl<number | null | undefined>,
	}
	export function CreateGoogleCloudMlV1__SuggestTrialsMetadataFormGroup() {
		return new FormGroup<GoogleCloudMlV1__SuggestTrialsMetadataFormProperties>({
			clientId: new FormControl<string | null | undefined>(undefined),
			createTime: new FormControl<string | null | undefined>(undefined),
			study: new FormControl<string | null | undefined>(undefined),
			suggestionCount: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** The request message for the SuggestTrial service method. */
	export interface GoogleCloudMlV1__SuggestTrialsRequest {

		/** Required. The identifier of the client that is requesting the suggestion. If multiple SuggestTrialsRequests have the same `client_id`, the service will return the identical suggested trial if the trial is pending, and provide a new trial if the last suggested trial was completed. */
		clientId?: string | null;

		/** Required. The number of suggestions requested. */
		suggestionCount?: number | null;
	}

	/** The request message for the SuggestTrial service method. */
	export interface GoogleCloudMlV1__SuggestTrialsRequestFormProperties {

		/** Required. The identifier of the client that is requesting the suggestion. If multiple SuggestTrialsRequests have the same `client_id`, the service will return the identical suggested trial if the trial is pending, and provide a new trial if the last suggested trial was completed. */
		clientId: FormControl<string | null | undefined>,

		/** Required. The number of suggestions requested. */
		suggestionCount: FormControl<number | null | undefined>,
	}
	export function CreateGoogleCloudMlV1__SuggestTrialsRequestFormGroup() {
		return new FormGroup<GoogleCloudMlV1__SuggestTrialsRequestFormProperties>({
			clientId: new FormControl<string | null | undefined>(undefined),
			suggestionCount: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** This message will be placed in the response field of a completed google.longrunning.Operation associated with a SuggestTrials request. */
	export interface GoogleCloudMlV1__SuggestTrialsResponse {

		/** The time at which operation processing completed. */
		endTime?: string | null;

		/** The time at which the operation was started. */
		startTime?: string | null;

		/** The state of the study. */
		studyState?: GoogleCloudMlV1__StudyState | null;

		/** A list of trials. */
		trials?: Array<GoogleCloudMlV1__Trial>;
	}

	/** This message will be placed in the response field of a completed google.longrunning.Operation associated with a SuggestTrials request. */
	export interface GoogleCloudMlV1__SuggestTrialsResponseFormProperties {

		/** The time at which operation processing completed. */
		endTime: FormControl<string | null | undefined>,

		/** The time at which the operation was started. */
		startTime: FormControl<string | null | undefined>,

		/** The state of the study. */
		studyState: FormControl<GoogleCloudMlV1__StudyState | null | undefined>,
	}
	export function CreateGoogleCloudMlV1__SuggestTrialsResponseFormGroup() {
		return new FormGroup<GoogleCloudMlV1__SuggestTrialsResponseFormProperties>({
			endTime: new FormControl<string | null | undefined>(undefined),
			startTime: new FormControl<string | null | undefined>(undefined),
			studyState: new FormControl<GoogleCloudMlV1__StudyState | null | undefined>(undefined),
		});

	}


	/** Specifies the audit configuration for a service. The configuration determines which permission types are logged, and what identities, if any, are exempted from logging. An AuditConfig must have one or more AuditLogConfigs. If there are AuditConfigs for both `allServices` and a specific service, the union of the two AuditConfigs is used for that service: the log_types specified in each AuditConfig are enabled, and the exempted_members in each AuditLogConfig are exempted. Example Policy with multiple AuditConfigs: { "audit_configs": [ { "service": "allServices", "audit_log_configs": [ { "log_type": "DATA_READ", "exempted_members": [ "user:jose@example.com" ] }, { "log_type": "DATA_WRITE" }, { "log_type": "ADMIN_READ" } ] }, { "service": "sampleservice.googleapis.com", "audit_log_configs": [ { "log_type": "DATA_READ" }, { "log_type": "DATA_WRITE", "exempted_members": [ "user:aliya@example.com" ] } ] } ] } For sampleservice, this policy enables DATA_READ, DATA_WRITE and ADMIN_READ logging. It also exempts `jose@example.com` from DATA_READ logging, and `aliya@example.com` from DATA_WRITE logging. */
	export interface GoogleIamV1__AuditConfig {

		/** The configuration for logging of each type of permission. */
		auditLogConfigs?: Array<GoogleIamV1__AuditLogConfig>;

		/** Specifies a service that will be enabled for audit logging. For example, `storage.googleapis.com`, `cloudsql.googleapis.com`. `allServices` is a special value that covers all services. */
		service?: string | null;
	}

	/** Specifies the audit configuration for a service. The configuration determines which permission types are logged, and what identities, if any, are exempted from logging. An AuditConfig must have one or more AuditLogConfigs. If there are AuditConfigs for both `allServices` and a specific service, the union of the two AuditConfigs is used for that service: the log_types specified in each AuditConfig are enabled, and the exempted_members in each AuditLogConfig are exempted. Example Policy with multiple AuditConfigs: { "audit_configs": [ { "service": "allServices", "audit_log_configs": [ { "log_type": "DATA_READ", "exempted_members": [ "user:jose@example.com" ] }, { "log_type": "DATA_WRITE" }, { "log_type": "ADMIN_READ" } ] }, { "service": "sampleservice.googleapis.com", "audit_log_configs": [ { "log_type": "DATA_READ" }, { "log_type": "DATA_WRITE", "exempted_members": [ "user:aliya@example.com" ] } ] } ] } For sampleservice, this policy enables DATA_READ, DATA_WRITE and ADMIN_READ logging. It also exempts `jose@example.com` from DATA_READ logging, and `aliya@example.com` from DATA_WRITE logging. */
	export interface GoogleIamV1__AuditConfigFormProperties {

		/** Specifies a service that will be enabled for audit logging. For example, `storage.googleapis.com`, `cloudsql.googleapis.com`. `allServices` is a special value that covers all services. */
		service: FormControl<string | null | undefined>,
	}
	export function CreateGoogleIamV1__AuditConfigFormGroup() {
		return new FormGroup<GoogleIamV1__AuditConfigFormProperties>({
			service: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Provides the configuration for logging a type of permissions. Example: { "audit_log_configs": [ { "log_type": "DATA_READ", "exempted_members": [ "user:jose@example.com" ] }, { "log_type": "DATA_WRITE" } ] } This enables 'DATA_READ' and 'DATA_WRITE' logging, while exempting jose@example.com from DATA_READ logging. */
	export interface GoogleIamV1__AuditLogConfig {

		/** Specifies the identities that do not cause logging for this type of permission. Follows the same format of Binding.members. */
		exemptedMembers?: Array<string>;

		/** The log type that this config enables. */
		logType?: GoogleIamV1__AuditLogConfigLogType | null;
	}

	/** Provides the configuration for logging a type of permissions. Example: { "audit_log_configs": [ { "log_type": "DATA_READ", "exempted_members": [ "user:jose@example.com" ] }, { "log_type": "DATA_WRITE" } ] } This enables 'DATA_READ' and 'DATA_WRITE' logging, while exempting jose@example.com from DATA_READ logging. */
	export interface GoogleIamV1__AuditLogConfigFormProperties {

		/** The log type that this config enables. */
		logType: FormControl<GoogleIamV1__AuditLogConfigLogType | null | undefined>,
	}
	export function CreateGoogleIamV1__AuditLogConfigFormGroup() {
		return new FormGroup<GoogleIamV1__AuditLogConfigFormProperties>({
			logType: new FormControl<GoogleIamV1__AuditLogConfigLogType | null | undefined>(undefined),
		});

	}

	export enum GoogleIamV1__AuditLogConfigLogType { LOG_TYPE_UNSPECIFIED = 'LOG_TYPE_UNSPECIFIED', ADMIN_READ = 'ADMIN_READ', DATA_WRITE = 'DATA_WRITE', DATA_READ = 'DATA_READ' }


	/** Associates `members`, or principals, with a `role`. */
	export interface GoogleIamV1__Binding {

		/** Represents a textual expression in the Common Expression Language (CEL) syntax. CEL is a C-like expression language. The syntax and semantics of CEL are documented at https://github.com/google/cel-spec. Example (Comparison): title: "Summary size limit" description: "Determines if a summary is less than 100 chars" expression: "document.summary.size() < 100" Example (Equality): title: "Requestor is owner" description: "Determines if requestor is the document owner" expression: "document.owner == request.auth.claims.email" Example (Logic): title: "Public documents" description: "Determine whether the document should be publicly visible" expression: "document.type != 'private' && document.type != 'internal'" Example (Data Manipulation): title: "Notification string" description: "Create a notification string with a timestamp." expression: "'New message received at ' + string(document.create_time)" The exact variables and functions that may be referenced within an expression are determined by the service that evaluates it. See the service documentation for additional information. */
		condition?: GoogleType__Expr;

		/** Specifies the principals requesting access for a Google Cloud resource. `members` can have the following values: * `allUsers`: A special identifier that represents anyone who is on the internet; with or without a Google account. * `allAuthenticatedUsers`: A special identifier that represents anyone who is authenticated with a Google account or a service account. Does not include identities that come from external identity providers (IdPs) through identity federation. * `user:{emailid}`: An email address that represents a specific Google account. For example, `alice@example.com` . * `serviceAccount:{emailid}`: An email address that represents a Google service account. For example, `my-other-app@appspot.gserviceaccount.com`. * `serviceAccount:{projectid}.svc.id.goog[{namespace}/{kubernetes-sa}]`: An identifier for a [Kubernetes service account](https://cloud.google.com/kubernetes-engine/docs/how-to/kubernetes-service-accounts). For example, `my-project.svc.id.goog[my-namespace/my-kubernetes-sa]`. * `group:{emailid}`: An email address that represents a Google group. For example, `admins@example.com`. * `domain:{domain}`: The G Suite domain (primary) that represents all the users of that domain. For example, `google.com` or `example.com`. * `deleted:user:{emailid}?uid={uniqueid}`: An email address (plus unique identifier) representing a user that has been recently deleted. For example, `alice@example.com?uid=123456789012345678901`. If the user is recovered, this value reverts to `user:{emailid}` and the recovered user retains the role in the binding. * `deleted:serviceAccount:{emailid}?uid={uniqueid}`: An email address (plus unique identifier) representing a service account that has been recently deleted. For example, `my-other-app@appspot.gserviceaccount.com?uid=123456789012345678901`. If the service account is undeleted, this value reverts to `serviceAccount:{emailid}` and the undeleted service account retains the role in the binding. * `deleted:group:{emailid}?uid={uniqueid}`: An email address (plus unique identifier) representing a Google group that has been recently deleted. For example, `admins@example.com?uid=123456789012345678901`. If the group is recovered, this value reverts to `group:{emailid}` and the recovered group retains the role in the binding. */
		members?: Array<string>;

		/** Role that is assigned to the list of `members`, or principals. For example, `roles/viewer`, `roles/editor`, or `roles/owner`. */
		role?: string | null;
	}

	/** Associates `members`, or principals, with a `role`. */
	export interface GoogleIamV1__BindingFormProperties {

		/** Role that is assigned to the list of `members`, or principals. For example, `roles/viewer`, `roles/editor`, or `roles/owner`. */
		role: FormControl<string | null | undefined>,
	}
	export function CreateGoogleIamV1__BindingFormGroup() {
		return new FormGroup<GoogleIamV1__BindingFormProperties>({
			role: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents a textual expression in the Common Expression Language (CEL) syntax. CEL is a C-like expression language. The syntax and semantics of CEL are documented at https://github.com/google/cel-spec. Example (Comparison): title: "Summary size limit" description: "Determines if a summary is less than 100 chars" expression: "document.summary.size() < 100" Example (Equality): title: "Requestor is owner" description: "Determines if requestor is the document owner" expression: "document.owner == request.auth.claims.email" Example (Logic): title: "Public documents" description: "Determine whether the document should be publicly visible" expression: "document.type != 'private' && document.type != 'internal'" Example (Data Manipulation): title: "Notification string" description: "Create a notification string with a timestamp." expression: "'New message received at ' + string(document.create_time)" The exact variables and functions that may be referenced within an expression are determined by the service that evaluates it. See the service documentation for additional information. */
	export interface GoogleType__Expr {

		/** Optional. Description of the expression. This is a longer text which describes the expression, e.g. when hovered over it in a UI. */
		description?: string | null;

		/** Textual representation of an expression in Common Expression Language syntax. */
		expression?: string | null;

		/** Optional. String indicating the location of the expression for error reporting, e.g. a file name and a position in the file. */
		location?: string | null;

		/** Optional. Title for the expression, i.e. a short string describing its purpose. This can be used e.g. in UIs which allow to enter the expression. */
		title?: string | null;
	}

	/** Represents a textual expression in the Common Expression Language (CEL) syntax. CEL is a C-like expression language. The syntax and semantics of CEL are documented at https://github.com/google/cel-spec. Example (Comparison): title: "Summary size limit" description: "Determines if a summary is less than 100 chars" expression: "document.summary.size() < 100" Example (Equality): title: "Requestor is owner" description: "Determines if requestor is the document owner" expression: "document.owner == request.auth.claims.email" Example (Logic): title: "Public documents" description: "Determine whether the document should be publicly visible" expression: "document.type != 'private' && document.type != 'internal'" Example (Data Manipulation): title: "Notification string" description: "Create a notification string with a timestamp." expression: "'New message received at ' + string(document.create_time)" The exact variables and functions that may be referenced within an expression are determined by the service that evaluates it. See the service documentation for additional information. */
	export interface GoogleType__ExprFormProperties {

		/** Optional. Description of the expression. This is a longer text which describes the expression, e.g. when hovered over it in a UI. */
		description: FormControl<string | null | undefined>,

		/** Textual representation of an expression in Common Expression Language syntax. */
		expression: FormControl<string | null | undefined>,

		/** Optional. String indicating the location of the expression for error reporting, e.g. a file name and a position in the file. */
		location: FormControl<string | null | undefined>,

		/** Optional. Title for the expression, i.e. a short string describing its purpose. This can be used e.g. in UIs which allow to enter the expression. */
		title: FormControl<string | null | undefined>,
	}
	export function CreateGoogleType__ExprFormGroup() {
		return new FormGroup<GoogleType__ExprFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			expression: new FormControl<string | null | undefined>(undefined),
			location: new FormControl<string | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An Identity and Access Management (IAM) policy, which specifies access controls for Google Cloud resources. A `Policy` is a collection of `bindings`. A `binding` binds one or more `members`, or principals, to a single `role`. Principals can be user accounts, service accounts, Google groups, and domains (such as G Suite). A `role` is a named list of permissions; each `role` can be an IAM predefined role or a user-created custom role. For some types of Google Cloud resources, a `binding` can also specify a `condition`, which is a logical expression that allows access to a resource only if the expression evaluates to `true`. A condition can add constraints based on attributes of the request, the resource, or both. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies). **JSON example:** ``` { "bindings": [ { "role": "roles/resourcemanager.organizationAdmin", "members": [ "user:mike@example.com", "group:admins@example.com", "domain:google.com", "serviceAccount:my-project-id@appspot.gserviceaccount.com" ] }, { "role": "roles/resourcemanager.organizationViewer", "members": [ "user:eve@example.com" ], "condition": { "title": "expirable access", "description": "Does not grant access after Sep 2020", "expression": "request.time < timestamp('2020-10-01T00:00:00.000Z')", } } ], "etag": "BwWWja0YfJA=", "version": 3 } ``` **YAML example:** ``` bindings: - members: - user:mike@example.com - group:admins@example.com - domain:google.com - serviceAccount:my-project-id@appspot.gserviceaccount.com role: roles/resourcemanager.organizationAdmin - members: - user:eve@example.com role: roles/resourcemanager.organizationViewer condition: title: expirable access description: Does not grant access after Sep 2020 expression: request.time < timestamp('2020-10-01T00:00:00.000Z') etag: BwWWja0YfJA= version: 3 ``` For a description of IAM and its features, see the [IAM documentation](https://cloud.google.com/iam/docs/). */
	export interface GoogleIamV1__Policy {

		/** Specifies cloud audit logging configuration for this policy. */
		auditConfigs?: Array<GoogleIamV1__AuditConfig>;

		/** Associates a list of `members`, or principals, with a `role`. Optionally, may specify a `condition` that determines how and when the `bindings` are applied. Each of the `bindings` must contain at least one principal. The `bindings` in a `Policy` can refer to up to 1,500 principals; up to 250 of these principals can be Google groups. Each occurrence of a principal counts towards these limits. For example, if the `bindings` grant 50 different roles to `user:alice@example.com`, and not to any other principal, then you can add another 1,450 principals to the `bindings` in the `Policy`. */
		bindings?: Array<GoogleIamV1__Binding>;

		/** `etag` is used for optimistic concurrency control as a way to help prevent simultaneous updates of a policy from overwriting each other. It is strongly suggested that systems make use of the `etag` in the read-modify-write cycle to perform policy updates in order to avoid race conditions: An `etag` is returned in the response to `getIamPolicy`, and systems are expected to put that etag in the request to `setIamPolicy` to ensure that their change will be applied to the same version of the policy. **Important:** If you use IAM Conditions, you must include the `etag` field whenever you call `setIamPolicy`. If you omit this field, then IAM allows you to overwrite a version `3` policy with a version `1` policy, and all of the conditions in the version `3` policy are lost. */
		etag?: string | null;

		/** Specifies the format of the policy. Valid values are `0`, `1`, and `3`. Requests that specify an invalid value are rejected. Any operation that affects conditional role bindings must specify version `3`. This requirement applies to the following operations: * Getting a policy that includes a conditional role binding * Adding a conditional role binding to a policy * Changing a conditional role binding in a policy * Removing any role binding, with or without a condition, from a policy that includes conditions **Important:** If you use IAM Conditions, you must include the `etag` field whenever you call `setIamPolicy`. If you omit this field, then IAM allows you to overwrite a version `3` policy with a version `1` policy, and all of the conditions in the version `3` policy are lost. If a policy does not include any conditions, operations on that policy may specify any valid version or leave the field unset. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies). */
		version?: number | null;
	}

	/** An Identity and Access Management (IAM) policy, which specifies access controls for Google Cloud resources. A `Policy` is a collection of `bindings`. A `binding` binds one or more `members`, or principals, to a single `role`. Principals can be user accounts, service accounts, Google groups, and domains (such as G Suite). A `role` is a named list of permissions; each `role` can be an IAM predefined role or a user-created custom role. For some types of Google Cloud resources, a `binding` can also specify a `condition`, which is a logical expression that allows access to a resource only if the expression evaluates to `true`. A condition can add constraints based on attributes of the request, the resource, or both. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies). **JSON example:** ``` { "bindings": [ { "role": "roles/resourcemanager.organizationAdmin", "members": [ "user:mike@example.com", "group:admins@example.com", "domain:google.com", "serviceAccount:my-project-id@appspot.gserviceaccount.com" ] }, { "role": "roles/resourcemanager.organizationViewer", "members": [ "user:eve@example.com" ], "condition": { "title": "expirable access", "description": "Does not grant access after Sep 2020", "expression": "request.time < timestamp('2020-10-01T00:00:00.000Z')", } } ], "etag": "BwWWja0YfJA=", "version": 3 } ``` **YAML example:** ``` bindings: - members: - user:mike@example.com - group:admins@example.com - domain:google.com - serviceAccount:my-project-id@appspot.gserviceaccount.com role: roles/resourcemanager.organizationAdmin - members: - user:eve@example.com role: roles/resourcemanager.organizationViewer condition: title: expirable access description: Does not grant access after Sep 2020 expression: request.time < timestamp('2020-10-01T00:00:00.000Z') etag: BwWWja0YfJA= version: 3 ``` For a description of IAM and its features, see the [IAM documentation](https://cloud.google.com/iam/docs/). */
	export interface GoogleIamV1__PolicyFormProperties {

		/** `etag` is used for optimistic concurrency control as a way to help prevent simultaneous updates of a policy from overwriting each other. It is strongly suggested that systems make use of the `etag` in the read-modify-write cycle to perform policy updates in order to avoid race conditions: An `etag` is returned in the response to `getIamPolicy`, and systems are expected to put that etag in the request to `setIamPolicy` to ensure that their change will be applied to the same version of the policy. **Important:** If you use IAM Conditions, you must include the `etag` field whenever you call `setIamPolicy`. If you omit this field, then IAM allows you to overwrite a version `3` policy with a version `1` policy, and all of the conditions in the version `3` policy are lost. */
		etag: FormControl<string | null | undefined>,

		/** Specifies the format of the policy. Valid values are `0`, `1`, and `3`. Requests that specify an invalid value are rejected. Any operation that affects conditional role bindings must specify version `3`. This requirement applies to the following operations: * Getting a policy that includes a conditional role binding * Adding a conditional role binding to a policy * Changing a conditional role binding in a policy * Removing any role binding, with or without a condition, from a policy that includes conditions **Important:** If you use IAM Conditions, you must include the `etag` field whenever you call `setIamPolicy`. If you omit this field, then IAM allows you to overwrite a version `3` policy with a version `1` policy, and all of the conditions in the version `3` policy are lost. If a policy does not include any conditions, operations on that policy may specify any valid version or leave the field unset. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies). */
		version: FormControl<number | null | undefined>,
	}
	export function CreateGoogleIamV1__PolicyFormGroup() {
		return new FormGroup<GoogleIamV1__PolicyFormProperties>({
			etag: new FormControl<string | null | undefined>(undefined),
			version: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Request message for `SetIamPolicy` method. */
	export interface GoogleIamV1__SetIamPolicyRequest {

		/** An Identity and Access Management (IAM) policy, which specifies access controls for Google Cloud resources. A `Policy` is a collection of `bindings`. A `binding` binds one or more `members`, or principals, to a single `role`. Principals can be user accounts, service accounts, Google groups, and domains (such as G Suite). A `role` is a named list of permissions; each `role` can be an IAM predefined role or a user-created custom role. For some types of Google Cloud resources, a `binding` can also specify a `condition`, which is a logical expression that allows access to a resource only if the expression evaluates to `true`. A condition can add constraints based on attributes of the request, the resource, or both. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies). **JSON example:** ``` { "bindings": [ { "role": "roles/resourcemanager.organizationAdmin", "members": [ "user:mike@example.com", "group:admins@example.com", "domain:google.com", "serviceAccount:my-project-id@appspot.gserviceaccount.com" ] }, { "role": "roles/resourcemanager.organizationViewer", "members": [ "user:eve@example.com" ], "condition": { "title": "expirable access", "description": "Does not grant access after Sep 2020", "expression": "request.time < timestamp('2020-10-01T00:00:00.000Z')", } } ], "etag": "BwWWja0YfJA=", "version": 3 } ``` **YAML example:** ``` bindings: - members: - user:mike@example.com - group:admins@example.com - domain:google.com - serviceAccount:my-project-id@appspot.gserviceaccount.com role: roles/resourcemanager.organizationAdmin - members: - user:eve@example.com role: roles/resourcemanager.organizationViewer condition: title: expirable access description: Does not grant access after Sep 2020 expression: request.time < timestamp('2020-10-01T00:00:00.000Z') etag: BwWWja0YfJA= version: 3 ``` For a description of IAM and its features, see the [IAM documentation](https://cloud.google.com/iam/docs/). */
		policy?: GoogleIamV1__Policy;

		/** OPTIONAL: A FieldMask specifying which fields of the policy to modify. Only the fields in the mask will be modified. If no mask is provided, the following default mask is used: `paths: "bindings, etag"` */
		updateMask?: string | null;
	}

	/** Request message for `SetIamPolicy` method. */
	export interface GoogleIamV1__SetIamPolicyRequestFormProperties {

		/** OPTIONAL: A FieldMask specifying which fields of the policy to modify. Only the fields in the mask will be modified. If no mask is provided, the following default mask is used: `paths: "bindings, etag"` */
		updateMask: FormControl<string | null | undefined>,
	}
	export function CreateGoogleIamV1__SetIamPolicyRequestFormGroup() {
		return new FormGroup<GoogleIamV1__SetIamPolicyRequestFormProperties>({
			updateMask: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Request message for `TestIamPermissions` method. */
	export interface GoogleIamV1__TestIamPermissionsRequest {

		/** The set of permissions to check for the `resource`. Permissions with wildcards (such as `*` or `storage.*`) are not allowed. For more information see [IAM Overview](https://cloud.google.com/iam/docs/overview#permissions). */
		permissions?: Array<string>;
	}

	/** Request message for `TestIamPermissions` method. */
	export interface GoogleIamV1__TestIamPermissionsRequestFormProperties {
	}
	export function CreateGoogleIamV1__TestIamPermissionsRequestFormGroup() {
		return new FormGroup<GoogleIamV1__TestIamPermissionsRequestFormProperties>({
		});

	}


	/** Response message for `TestIamPermissions` method. */
	export interface GoogleIamV1__TestIamPermissionsResponse {

		/** A subset of `TestPermissionsRequest.permissions` that the caller is allowed. */
		permissions?: Array<string>;
	}

	/** Response message for `TestIamPermissions` method. */
	export interface GoogleIamV1__TestIamPermissionsResponseFormProperties {
	}
	export function CreateGoogleIamV1__TestIamPermissionsResponseFormGroup() {
		return new FormGroup<GoogleIamV1__TestIamPermissionsResponseFormProperties>({
		});

	}


	/** The response message for Operations.ListOperations. */
	export interface GoogleLongrunning__ListOperationsResponse {

		/** The standard List next-page token. */
		nextPageToken?: string | null;

		/** A list of operations that matches the specified filter in the request. */
		operations?: Array<GoogleLongrunning__Operation>;
	}

	/** The response message for Operations.ListOperations. */
	export interface GoogleLongrunning__ListOperationsResponseFormProperties {

		/** The standard List next-page token. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateGoogleLongrunning__ListOperationsResponseFormGroup() {
		return new FormGroup<GoogleLongrunning__ListOperationsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** This resource represents a long-running operation that is the result of a network API call. */
	export interface GoogleLongrunning__Operation {

		/** If the value is `false`, it means the operation is still in progress. If `true`, the operation is completed, and either `error` or `response` is available. */
		done?: boolean | null;

		/** The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors). */
		error?: GoogleRpc__Status;

		/** Service-specific metadata associated with the operation. It typically contains progress information and common metadata such as create time. Some services might not provide such metadata. Any method that returns a long-running operation should document the metadata type, if any. */
		metadata?: {[id: string]: any };

		/** The server-assigned name, which is only unique within the same service that originally returns it. If you use the default HTTP mapping, the `name` should be a resource name ending with `operations/{unique_id}`. */
		name?: string | null;

		/** The normal, successful response of the operation. If the original method returns no data on success, such as `Delete`, the response is `google.protobuf.Empty`. If the original method is standard `Get`/`Create`/`Update`, the response should be the resource. For other methods, the response should have the type `XxxResponse`, where `Xxx` is the original method name. For example, if the original method name is `TakeSnapshot()`, the inferred response type is `TakeSnapshotResponse`. */
		response?: {[id: string]: any };
	}

	/** This resource represents a long-running operation that is the result of a network API call. */
	export interface GoogleLongrunning__OperationFormProperties {

		/** If the value is `false`, it means the operation is still in progress. If `true`, the operation is completed, and either `error` or `response` is available. */
		done: FormControl<boolean | null | undefined>,

		/** Service-specific metadata associated with the operation. It typically contains progress information and common metadata such as create time. Some services might not provide such metadata. Any method that returns a long-running operation should document the metadata type, if any. */
		metadata: FormControl<{[id: string]: any } | null | undefined>,

		/** The server-assigned name, which is only unique within the same service that originally returns it. If you use the default HTTP mapping, the `name` should be a resource name ending with `operations/{unique_id}`. */
		name: FormControl<string | null | undefined>,

		/** The normal, successful response of the operation. If the original method returns no data on success, such as `Delete`, the response is `google.protobuf.Empty`. If the original method is standard `Get`/`Create`/`Update`, the response should be the resource. For other methods, the response should have the type `XxxResponse`, where `Xxx` is the original method name. For example, if the original method name is `TakeSnapshot()`, the inferred response type is `TakeSnapshotResponse`. */
		response: FormControl<{[id: string]: any } | null | undefined>,
	}
	export function CreateGoogleLongrunning__OperationFormGroup() {
		return new FormGroup<GoogleLongrunning__OperationFormProperties>({
			done: new FormControl<boolean | null | undefined>(undefined),
			metadata: new FormControl<{[id: string]: any } | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			response: new FormControl<{[id: string]: any } | null | undefined>(undefined),
		});

	}


	/** The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors). */
	export interface GoogleRpc__Status {

		/** The status code, which should be an enum value of google.rpc.Code. */
		code?: number | null;

		/** A list of messages that carry the error details. There is a common set of message types for APIs to use. */
		details?: Array<string>;

		/** A developer-facing error message, which should be in English. Any user-facing error message should be localized and sent in the google.rpc.Status.details field, or localized by the client. */
		message?: string | null;
	}

	/** The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors). */
	export interface GoogleRpc__StatusFormProperties {

		/** The status code, which should be an enum value of google.rpc.Code. */
		code: FormControl<number | null | undefined>,

		/** A developer-facing error message, which should be in English. Any user-facing error message should be localized and sent in the google.rpc.Status.details field, or localized by the client. */
		message: FormControl<string | null | undefined>,
	}
	export function CreateGoogleRpc__StatusFormGroup() {
		return new FormGroup<GoogleRpc__StatusFormProperties>({
			code: new FormControl<number | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); } */
	export interface GoogleProtobuf__Empty {
	}

	/** A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); } */
	export interface GoogleProtobuf__EmptyFormProperties {
	}
	export function CreateGoogleProtobuf__EmptyFormGroup() {
		return new FormGroup<GoogleProtobuf__EmptyFormProperties>({
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Deletes a model version. Each model can have multiple versions deployed and in use at any given time. Use this method to remove a single version. Note: You cannot delete the version that is set as the default version of the model unless it is the only remaining version.
		 * Delete v1/{name}
		 * @param {string} name Required. The name of the version. You can get the names of all the versions of a model by calling projects.models.versions.list.
		 * @return {GoogleLongrunning__Operation} Successful response
		 */
		Ml_projects_models_versions_delete(name: string): Observable<GoogleLongrunning__Operation> {
			return this.http.delete<GoogleLongrunning__Operation>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)), {});
		}

		/**
		 * Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
		 * Get v1/{name}
		 * @param {string} name The name of the operation resource.
		 * @return {GoogleLongrunning__Operation} Successful response
		 */
		Ml_projects_operations_get(name: string): Observable<GoogleLongrunning__Operation> {
			return this.http.get<GoogleLongrunning__Operation>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)), {});
		}

		/**
		 * Updates the specified Version resource. Currently the only update-able fields are `description`, `requestLoggingConfig`, `autoScaling.minNodes`, and `manualScaling.nodes`.
		 * Patch v1/{name}
		 * @param {string} name Required. The name of the model.
		 * @param {string} updateMask Required. Specifies the path, relative to `Version`, of the field to update. Must be present and non-empty. For example, to change the description of a version to "foo", the `update_mask` parameter would be specified as `description`, and the `PATCH` request body would specify the new value, as follows: ``` { "description": "foo" } ``` Currently the only supported update mask fields are `description`, `requestLoggingConfig`, `autoScaling.minNodes`, and `manualScaling.nodes`. However, you can only update `manualScaling.nodes` if the version uses a [Compute Engine (N1) machine type](/ml-engine/docs/machine-types-online-prediction).
		 * @return {GoogleLongrunning__Operation} Successful response
		 */
		Ml_projects_models_versions_patch(name: string, updateMask: string | null | undefined, requestBody: GoogleCloudMlV1__Version): Observable<GoogleLongrunning__Operation> {
			return this.http.patch<GoogleLongrunning__Operation>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + '&updateMask=' + (updateMask == null ? '' : encodeURIComponent(updateMask)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
		 * Get v1/{name}/operations
		 * @param {string} name The name of the operation's parent resource.
		 * @param {string} filter The standard list filter.
		 * @param {number} pageSize The standard list page size.
		 * @param {string} pageToken The standard list page token.
		 * @return {GoogleLongrunning__ListOperationsResponse} Successful response
		 */
		Ml_projects_operations_list(name: string, filter: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<GoogleLongrunning__ListOperationsResponse> {
			return this.http.get<GoogleLongrunning__ListOperationsResponse>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + '/operations&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Adds a measurement of the objective metrics to a trial. This measurement is assumed to have been taken before the trial is complete.
		 * Post v1/{name}:addMeasurement
		 * @param {string} name Required. The trial name.
		 * @return {GoogleCloudMlV1__Trial} Successful response
		 */
		Ml_projects_locations_studies_trials_addMeasurement(name: string, requestBody: GoogleCloudMlV1__AddTrialMeasurementRequest): Observable<GoogleCloudMlV1__Trial> {
			return this.http.post<GoogleCloudMlV1__Trial>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + ':addMeasurement', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
		 * Post v1/{name}:cancel
		 * @param {string} name The name of the operation resource to be cancelled.
		 * @return {GoogleProtobuf__Empty} Successful response
		 */
		Ml_projects_operations_cancel(name: string, requestBody: GoogleCloudMlV1__CancelJobRequest): Observable<GoogleProtobuf__Empty> {
			return this.http.post<GoogleProtobuf__Empty>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + ':cancel', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Checks whether a trial should stop or not. Returns a long-running operation. When the operation is successful, it will contain a CheckTrialEarlyStoppingStateResponse.
		 * Post v1/{name}:checkEarlyStoppingState
		 * @param {string} name Required. The trial name.
		 * @return {GoogleLongrunning__Operation} Successful response
		 */
		Ml_projects_locations_studies_trials_checkEarlyStoppingState(name: string, requestBody: GoogleCloudMlV1__CheckTrialEarlyStoppingStateRequest): Observable<GoogleLongrunning__Operation> {
			return this.http.post<GoogleLongrunning__Operation>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + ':checkEarlyStoppingState', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Marks a trial as complete.
		 * Post v1/{name}:complete
		 * @param {string} name Required. The trial name.metat
		 * @return {GoogleCloudMlV1__Trial} Successful response
		 */
		Ml_projects_locations_studies_trials_complete(name: string, requestBody: GoogleCloudMlV1__CompleteTrialRequest): Observable<GoogleCloudMlV1__Trial> {
			return this.http.post<GoogleCloudMlV1__Trial>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + ':complete', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Performs explanation on the data in the request. {% dynamic include "/ai-platform/includes/___explain-request" %}
		 * Post v1/{name}:explain
		 * @param {string} name Required. The resource name of a model or a version. Authorization: requires the `predict` permission on the specified resource.
		 * @return {GoogleApi__HttpBody} Successful response
		 */
		Ml_projects_explain(name: string, requestBody: GoogleCloudMlV1__ExplainRequest): Observable<GoogleApi__HttpBody> {
			return this.http.post<GoogleApi__HttpBody>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + ':explain', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Get the service account information associated with your project. You need this information in order to grant the service account permissions for the Google Cloud Storage location where you put your model training code for training the model with Google Cloud Machine Learning.
		 * Get v1/{name}:getConfig
		 * @param {string} name Required. The project name.
		 * @return {GoogleCloudMlV1__GetConfigResponse} Successful response
		 */
		Ml_projects_getConfig(name: string): Observable<GoogleCloudMlV1__GetConfigResponse> {
			return this.http.get<GoogleCloudMlV1__GetConfigResponse>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + ':getConfig', {});
		}

		/**
		 * Performs online prediction on the data in the request. {% dynamic include "/ai-platform/includes/___predict-request" %}
		 * Post v1/{name}:predict
		 * @param {string} name Required. The resource name of a model or a version. Authorization: requires the `predict` permission on the specified resource.
		 * @return {GoogleApi__HttpBody} Successful response
		 */
		Ml_projects_predict(name: string, requestBody: GoogleCloudMlV1__PredictRequest): Observable<GoogleApi__HttpBody> {
			return this.http.post<GoogleApi__HttpBody>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + ':predict', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Designates a version to be the default for the model. The default version is used for prediction requests made against the model that don't specify a version. The first version to be created for a model is automatically set as the default. You must make any subsequent changes to the default version setting manually using this method.
		 * Post v1/{name}:setDefault
		 * @param {string} name Required. The name of the version to make the default for the model. You can get the names of all the versions of a model by calling projects.models.versions.list.
		 * @return {GoogleCloudMlV1__Version} Successful response
		 */
		Ml_projects_models_versions_setDefault(name: string, requestBody: GoogleCloudMlV1__SetDefaultVersionRequest): Observable<GoogleCloudMlV1__Version> {
			return this.http.post<GoogleCloudMlV1__Version>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + ':setDefault', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Stops a trial.
		 * Post v1/{name}:stop
		 * @param {string} name Required. The trial name.
		 * @return {GoogleCloudMlV1__Trial} Successful response
		 */
		Ml_projects_locations_studies_trials_stop(name: string, requestBody: GoogleCloudMlV1__StopTrialRequest): Observable<GoogleCloudMlV1__Trial> {
			return this.http.post<GoogleCloudMlV1__Trial>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + ':stop', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists the jobs in the project. If there are no jobs that match the request parameters, the list request returns an empty response body: {}.
		 * Get v1/{parent}/jobs
		 * @param {string} parent Required. The name of the project for which to list jobs.
		 * @param {string} filter Optional. Specifies the subset of jobs to retrieve. You can filter on the value of one or more attributes of the job object. For example, retrieve jobs with a job identifier that starts with 'census': gcloud ai-platform jobs list --filter='jobId:census*' List all failed jobs with names that start with 'rnn': gcloud ai-platform jobs list --filter='jobId:rnn* AND state:FAILED' For more examples, see the guide to monitoring jobs.
		 * @param {number} pageSize Optional. The number of jobs to retrieve per "page" of results. If there are more remaining results than this number, the response message will contain a valid value in the `next_page_token` field. The default value is 20, and the maximum page size is 100.
		 * @param {string} pageToken Optional. A page token to request the next page of results. You get the token from the `next_page_token` field of the response from the previous call.
		 * @return {GoogleCloudMlV1__ListJobsResponse} Successful response
		 */
		Ml_projects_jobs_list(parent: string, filter: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<GoogleCloudMlV1__ListJobsResponse> {
			return this.http.get<GoogleCloudMlV1__ListJobsResponse>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/jobs&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Creates a training or a batch prediction job.
		 * Post v1/{parent}/jobs
		 * @param {string} parent Required. The project name.
		 * @return {GoogleCloudMlV1__Job} Successful response
		 */
		Ml_projects_jobs_create(parent: string, requestBody: GoogleCloudMlV1__Job): Observable<GoogleCloudMlV1__Job> {
			return this.http.post<GoogleCloudMlV1__Job>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/jobs', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * List all locations that provides at least one type of CMLE capability.
		 * Get v1/{parent}/locations
		 * @param {string} parent Required. The name of the project for which available locations are to be listed (since some locations might be whitelisted for specific projects).
		 * @param {number} pageSize Optional. The number of locations to retrieve per "page" of results. If there are more remaining results than this number, the response message will contain a valid value in the `next_page_token` field. The default value is 20, and the maximum page size is 100.
		 * @param {string} pageToken Optional. A page token to request the next page of results. You get the token from the `next_page_token` field of the response from the previous call.
		 * @return {GoogleCloudMlV1__ListLocationsResponse} Successful response
		 */
		Ml_projects_locations_list(parent: string, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<GoogleCloudMlV1__ListLocationsResponse> {
			return this.http.get<GoogleCloudMlV1__ListLocationsResponse>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/locations&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Lists the models in a project. Each project can contain multiple models, and each model can have multiple versions. If there are no models that match the request parameters, the list request returns an empty response body: {}.
		 * Get v1/{parent}/models
		 * @param {string} parent Required. The name of the project whose models are to be listed.
		 * @param {string} filter Optional. Specifies the subset of models to retrieve.
		 * @param {number} pageSize Optional. The number of models to retrieve per "page" of results. If there are more remaining results than this number, the response message will contain a valid value in the `next_page_token` field. The default value is 20, and the maximum page size is 100.
		 * @param {string} pageToken Optional. A page token to request the next page of results. You get the token from the `next_page_token` field of the response from the previous call.
		 * @return {GoogleCloudMlV1__ListModelsResponse} Successful response
		 */
		Ml_projects_models_list(parent: string, filter: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<GoogleCloudMlV1__ListModelsResponse> {
			return this.http.get<GoogleCloudMlV1__ListModelsResponse>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/models&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Creates a model which will later contain one or more versions. You must add at least one version before you can request predictions from the model. Add versions by calling projects.models.versions.create.
		 * Post v1/{parent}/models
		 * @param {string} parent Required. The project name.
		 * @return {GoogleCloudMlV1__Model} Successful response
		 */
		Ml_projects_models_create(parent: string, requestBody: GoogleCloudMlV1__Model): Observable<GoogleCloudMlV1__Model> {
			return this.http.post<GoogleCloudMlV1__Model>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/models', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists all the studies in a region for an associated project.
		 * Get v1/{parent}/studies
		 * @param {string} parent Required. The project and location that the study belongs to. Format: projects/{project}/locations/{location}
		 * @return {GoogleCloudMlV1__ListStudiesResponse} Successful response
		 */
		Ml_projects_locations_studies_list(parent: string): Observable<GoogleCloudMlV1__ListStudiesResponse> {
			return this.http.get<GoogleCloudMlV1__ListStudiesResponse>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/studies', {});
		}

		/**
		 * Creates a study.
		 * Post v1/{parent}/studies
		 * @param {string} parent Required. The project and location that the study belongs to. Format: projects/{project}/locations/{location}
		 * @param {string} studyId Required. The ID to use for the study, which will become the final component of the study's resource name.
		 * @return {GoogleCloudMlV1__Study} Successful response
		 */
		Ml_projects_locations_studies_create(parent: string, studyId: string | null | undefined, requestBody: GoogleCloudMlV1__Study): Observable<GoogleCloudMlV1__Study> {
			return this.http.post<GoogleCloudMlV1__Study>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/studies&studyId=' + (studyId == null ? '' : encodeURIComponent(studyId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists the trials associated with a study.
		 * Get v1/{parent}/trials
		 * @param {string} parent Required. The name of the study that the trial belongs to.
		 * @return {GoogleCloudMlV1__ListTrialsResponse} Successful response
		 */
		Ml_projects_locations_studies_trials_list(parent: string): Observable<GoogleCloudMlV1__ListTrialsResponse> {
			return this.http.get<GoogleCloudMlV1__ListTrialsResponse>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/trials', {});
		}

		/**
		 * Adds a user provided trial to a study.
		 * Post v1/{parent}/trials
		 * @param {string} parent Required. The name of the study that the trial belongs to.
		 * @return {GoogleCloudMlV1__Trial} Successful response
		 */
		Ml_projects_locations_studies_trials_create(parent: string, requestBody: GoogleCloudMlV1__Trial): Observable<GoogleCloudMlV1__Trial> {
			return this.http.post<GoogleCloudMlV1__Trial>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/trials', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists the pareto-optimal trials for multi-objective study or the optimal trials for single-objective study. The definition of pareto-optimal can be checked in wiki page. https://en.wikipedia.org/wiki/Pareto_efficiency
		 * Post v1/{parent}/trials:listOptimalTrials
		 * @param {string} parent Required. The name of the study that the pareto-optimal trial belongs to.
		 * @return {GoogleCloudMlV1__ListOptimalTrialsResponse} Successful response
		 */
		Ml_projects_locations_studies_trials_listOptimalTrials(parent: string, requestBody: GoogleCloudMlV1__ListOptimalTrialsRequest): Observable<GoogleCloudMlV1__ListOptimalTrialsResponse> {
			return this.http.post<GoogleCloudMlV1__ListOptimalTrialsResponse>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/trials:listOptimalTrials', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Adds one or more trials to a study, with parameter values suggested by AI Platform Vizier. Returns a long-running operation associated with the generation of trial suggestions. When this long-running operation succeeds, it will contain a SuggestTrialsResponse.
		 * Post v1/{parent}/trials:suggest
		 * @param {string} parent Required. The name of the study that the trial belongs to.
		 * @return {GoogleLongrunning__Operation} Successful response
		 */
		Ml_projects_locations_studies_trials_suggest(parent: string, requestBody: GoogleCloudMlV1__SuggestTrialsRequest): Observable<GoogleLongrunning__Operation> {
			return this.http.post<GoogleLongrunning__Operation>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/trials:suggest', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets basic information about all the versions of a model. If you expect that a model has many versions, or if you need to handle only a limited number of results at a time, you can request that the list be retrieved in batches (called pages). If there are no versions that match the request parameters, the list request returns an empty response body: {}.
		 * Get v1/{parent}/versions
		 * @param {string} parent Required. The name of the model for which to list the version.
		 * @param {string} filter Optional. Specifies the subset of versions to retrieve.
		 * @param {number} pageSize Optional. The number of versions to retrieve per "page" of results. If there are more remaining results than this number, the response message will contain a valid value in the `next_page_token` field. The default value is 20, and the maximum page size is 100.
		 * @param {string} pageToken Optional. A page token to request the next page of results. You get the token from the `next_page_token` field of the response from the previous call.
		 * @return {GoogleCloudMlV1__ListVersionsResponse} Successful response
		 */
		Ml_projects_models_versions_list(parent: string, filter: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<GoogleCloudMlV1__ListVersionsResponse> {
			return this.http.get<GoogleCloudMlV1__ListVersionsResponse>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/versions&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Creates a new version of a model from a trained TensorFlow model. If the version created in the cloud by this call is the first deployed version of the specified model, it will be made the default version of the model. When you add a version to a model that already has one or more versions, the default version does not automatically change. If you want a new version to be the default, you must call projects.models.versions.setDefault.
		 * Post v1/{parent}/versions
		 * @param {string} parent Required. The name of the model.
		 * @return {GoogleLongrunning__Operation} Successful response
		 */
		Ml_projects_models_versions_create(parent: string, requestBody: GoogleCloudMlV1__Version): Observable<GoogleLongrunning__Operation> {
			return this.http.post<GoogleLongrunning__Operation>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/versions', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
		 * Get v1/{resource}:getIamPolicy
		 * @param {string} resource REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
		 * @param {number} options_requestedPolicyVersion Optional. The maximum policy version that will be used to format the policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset. The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies).
		 * @return {GoogleIamV1__Policy} Successful response
		 */
		Ml_projects_models_getIamPolicy(resource: string, options_requestedPolicyVersion: number | null | undefined): Observable<GoogleIamV1__Policy> {
			return this.http.get<GoogleIamV1__Policy>(this.baseUri + 'v1/' + (resource == null ? '' : encodeURIComponent(resource)) + ':getIamPolicy&options_requestedPolicyVersion=' + options_requestedPolicyVersion, {});
		}

		/**
		 * Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
		 * Post v1/{resource}:setIamPolicy
		 * @param {string} resource REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
		 * @return {GoogleIamV1__Policy} Successful response
		 */
		Ml_projects_models_setIamPolicy(resource: string, requestBody: GoogleIamV1__SetIamPolicyRequest): Observable<GoogleIamV1__Policy> {
			return this.http.post<GoogleIamV1__Policy>(this.baseUri + 'v1/' + (resource == null ? '' : encodeURIComponent(resource)) + ':setIamPolicy', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
		 * Post v1/{resource}:testIamPermissions
		 * @param {string} resource REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
		 * @return {GoogleIamV1__TestIamPermissionsResponse} Successful response
		 */
		Ml_projects_models_testIamPermissions(resource: string, requestBody: GoogleIamV1__TestIamPermissionsRequest): Observable<GoogleIamV1__TestIamPermissionsResponse> {
			return this.http.post<GoogleIamV1__TestIamPermissionsResponse>(this.baseUri + 'v1/' + (resource == null ? '' : encodeURIComponent(resource)) + ':testIamPermissions', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

}

