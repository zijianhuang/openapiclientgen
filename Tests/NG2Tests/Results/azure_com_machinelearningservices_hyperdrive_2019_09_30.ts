import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** Bandit Policy configuration. Please refer https://docs.microsoft.com/en-us/python/api/azureml-train-core/azureml.train.hyperdrive.banditpolicy?view=azure-ml-py for more information. */
	export interface HyperDriveBanditPolicy {
	}

	/** Bandit Policy configuration. Please refer https://docs.microsoft.com/en-us/python/api/azureml-train-core/azureml.train.hyperdrive.banditpolicy?view=azure-ml-py for more information. */
	export interface HyperDriveBanditPolicyFormProperties {
	}
	export function CreateHyperDriveBanditPolicyFormGroup() {
		return new FormGroup<HyperDriveBanditPolicyFormProperties>({
		});

	}


	/** Response for HyperDrive_CancelExperiment in case of success. */
	export interface HyperDriveCancelExperimentResponse {

		/**
		 * Response code.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		code: number;

		/**
		 * Message indicating operation success.
		 * Required
		 */
		result: string;
	}

	/** Response for HyperDrive_CancelExperiment in case of success. */
	export interface HyperDriveCancelExperimentResponseFormProperties {

		/**
		 * Response code.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		code: FormControl<number | null | undefined>,

		/**
		 * Message indicating operation success.
		 * Required
		 */
		result: FormControl<string | null | undefined>,
	}
	export function CreateHyperDriveCancelExperimentResponseFormGroup() {
		return new FormGroup<HyperDriveCancelExperimentResponseFormProperties>({
			code: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			result: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Part of request for HyperDrive_CreateExperiment. Contains configuration details required to create hyperdrive run. */
	export interface HyperDriveCreateExperiment {
	}

	/** Part of request for HyperDrive_CreateExperiment. Contains configuration details required to create hyperdrive run. */
	export interface HyperDriveCreateExperimentFormProperties {
	}
	export function CreateHyperDriveCreateExperimentFormGroup() {
		return new FormGroup<HyperDriveCreateExperimentFormProperties>({
		});

	}


	/** No early termination is applied in the case of DefaultPolicy */
	export interface HyperDriveDefaultPolicy {
	}

	/** No early termination is applied in the case of DefaultPolicy */
	export interface HyperDriveDefaultPolicyFormProperties {
	}
	export function CreateHyperDriveDefaultPolicyFormGroup() {
		return new FormGroup<HyperDriveDefaultPolicyFormProperties>({
		});

	}


	/** Response in case of an error. */
	export interface HyperDriveErrorResponse {

		/**
		 * Error response code.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		code: number;

		/**
		 * Error message.
		 * Required
		 */
		message: string;
	}

	/** Response in case of an error. */
	export interface HyperDriveErrorResponseFormProperties {

		/**
		 * Error response code.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		code: FormControl<number | null | undefined>,

		/**
		 * Error message.
		 * Required
		 */
		message: FormControl<string | null | undefined>,
	}
	export function CreateHyperDriveErrorResponseFormGroup() {
		return new FormGroup<HyperDriveErrorResponseFormProperties>({
			code: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			message: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Part of response for HyperDrive_CreateExperiment in case of success. Contains details about the created hyperdrive run. */
	export interface HyperDriveExperiment {
	}

	/** Part of response for HyperDrive_CreateExperiment in case of success. Contains details about the created hyperdrive run. */
	export interface HyperDriveExperimentFormProperties {
	}
	export function CreateHyperDriveExperimentFormGroup() {
		return new FormGroup<HyperDriveExperimentFormProperties>({
		});

	}


	/** Base object for both request and response of HyperDrive_CreateExperiment api. */
	export interface HyperDriveExperimentBase {

		/**
		 * The description for Hyperdrive run.
		 * Max length: 511
		 */
		description?: string | null;

		/**
		 * Hyperparameter space and the sampling method configuration.
		 * Required
		 */
		generator_config: HyperDriveExperimentBaseGenerator_config;

		/**
		 * Maximum number of runs to run concurrently.
		 * Minimum: 1
		 * Maximum: 100
		 */
		max_concurrent_jobs?: number | null;

		/**
		 * Maximum duration of the Hyperdrive run.
		 * Minimum: 1
		 * Maximum: 43200
		 */
		max_duration_minutes?: number | null;

		/**
		 * Maximum number of runs.
		 * Minimum: 1
		 * Maximum: 1000
		 */
		max_total_jobs?: number | null;

		/**
		 * Name of the Hyperdrive run.
		 * Required
		 * Max length: 255
		 */
		name: string;

		/**
		 * Platform of the Hyperdrive run.
		 * Required
		 */
		platform: HyperDriveExperimentBasePlatform;

		/**
		 * Platform config object specifying the run definition structure.
		 * Required
		 */
		platform_config: string;

		/**
		 * Early termination policy configuration.
		 * Required
		 */
		policy_config: HyperDrivePolicyConfigBase;

		/**
		 * Name of the primary metric and goal of optimizing.
		 * Required
		 */
		primary_metric_config: HyperDriveExperimentBasePrimary_metric_config;

		/**
		 * Study Id of the Hyperdrive run.
		 * Minimum: 0
		 */
		study_id?: number | null;
	}

	/** Base object for both request and response of HyperDrive_CreateExperiment api. */
	export interface HyperDriveExperimentBaseFormProperties {

		/**
		 * The description for Hyperdrive run.
		 * Max length: 511
		 */
		description: FormControl<string | null | undefined>,

		/**
		 * Maximum number of runs to run concurrently.
		 * Minimum: 1
		 * Maximum: 100
		 */
		max_concurrent_jobs: FormControl<number | null | undefined>,

		/**
		 * Maximum duration of the Hyperdrive run.
		 * Minimum: 1
		 * Maximum: 43200
		 */
		max_duration_minutes: FormControl<number | null | undefined>,

		/**
		 * Maximum number of runs.
		 * Minimum: 1
		 * Maximum: 1000
		 */
		max_total_jobs: FormControl<number | null | undefined>,

		/**
		 * Name of the Hyperdrive run.
		 * Required
		 * Max length: 255
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * Platform of the Hyperdrive run.
		 * Required
		 */
		platform: FormControl<HyperDriveExperimentBasePlatform | null | undefined>,

		/**
		 * Platform config object specifying the run definition structure.
		 * Required
		 */
		platform_config: FormControl<string | null | undefined>,

		/**
		 * Study Id of the Hyperdrive run.
		 * Minimum: 0
		 */
		study_id: FormControl<number | null | undefined>,
	}
	export function CreateHyperDriveExperimentBaseFormGroup() {
		return new FormGroup<HyperDriveExperimentBaseFormProperties>({
			description: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(511)]),
			max_concurrent_jobs: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(100)]),
			max_duration_minutes: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(43200)]),
			max_total_jobs: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(1000)]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(255)]),
			platform: new FormControl<HyperDriveExperimentBasePlatform | null | undefined>(undefined, [Validators.required]),
			platform_config: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			study_id: new FormControl<number | null | undefined>(undefined, [Validators.min(0)]),
		});

	}

	export interface HyperDriveExperimentBaseGenerator_config {

		/**
		 * Hyperparameter sampling method.
		 * Required
		 */
		name: HyperDriveExperimentBaseGenerator_configName;

		/**
		 * Dictionary specifying hyperparameter space.
		 * Required
		 */
		parameter_space: {[id: string]: Array<string> };
	}
	export interface HyperDriveExperimentBaseGenerator_configFormProperties {

		/**
		 * Hyperparameter sampling method.
		 * Required
		 */
		name: FormControl<HyperDriveExperimentBaseGenerator_configName | null | undefined>,

		/**
		 * Dictionary specifying hyperparameter space.
		 * Required
		 */
		parameter_space: FormControl<{[id: string]: Array<string> } | null | undefined>,
	}
	export function CreateHyperDriveExperimentBaseGenerator_configFormGroup() {
		return new FormGroup<HyperDriveExperimentBaseGenerator_configFormProperties>({
			name: new FormControl<HyperDriveExperimentBaseGenerator_configName | null | undefined>(undefined, [Validators.required]),
			parameter_space: new FormControl<{[id: string]: Array<string> } | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum HyperDriveExperimentBaseGenerator_configName { RANDOM = 'RANDOM', GRID = 'GRID', BAYESIANOPTIMIZATION = 'BAYESIANOPTIMIZATION' }

	export enum HyperDriveExperimentBasePlatform { AML = 'AML' }


	/** Early termination policy configuration. */
	export interface HyperDrivePolicyConfigBase {

		/**
		 * Type of early termination policy.
		 * Required
		 */
		name: HyperDrivePolicyConfigBaseName;
	}

	/** Early termination policy configuration. */
	export interface HyperDrivePolicyConfigBaseFormProperties {

		/**
		 * Type of early termination policy.
		 * Required
		 */
		name: FormControl<HyperDrivePolicyConfigBaseName | null | undefined>,
	}
	export function CreateHyperDrivePolicyConfigBaseFormGroup() {
		return new FormGroup<HyperDrivePolicyConfigBaseFormProperties>({
			name: new FormControl<HyperDrivePolicyConfigBaseName | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum HyperDrivePolicyConfigBaseName { Default = 'Default', Bandit = 'Bandit', MedianStopping = 'MedianStopping', TruncationSelection = 'TruncationSelection' }

	export interface HyperDriveExperimentBasePrimary_metric_config {

		/**
		 * Determines if the primary metric has to be minimized/maximized.
		 * Required
		 */
		goal: HyperDriveExperimentBasePrimary_metric_configGoal;

		/**
		 * Name of the primary metric reported by runs.
		 * Required
		 */
		name: string;
	}
	export interface HyperDriveExperimentBasePrimary_metric_configFormProperties {

		/**
		 * Determines if the primary metric has to be minimized/maximized.
		 * Required
		 */
		goal: FormControl<HyperDriveExperimentBasePrimary_metric_configGoal | null | undefined>,

		/**
		 * Name of the primary metric reported by runs.
		 * Required
		 */
		name: FormControl<string | null | undefined>,
	}
	export function CreateHyperDriveExperimentBasePrimary_metric_configFormGroup() {
		return new FormGroup<HyperDriveExperimentBasePrimary_metric_configFormProperties>({
			goal: new FormControl<HyperDriveExperimentBasePrimary_metric_configGoal | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum HyperDriveExperimentBasePrimary_metric_configGoal { MAXIMIZE = 'MAXIMIZE', MINIMIZE = 'MINIMIZE' }


	/** Response for HyperDrive_CreateExperiment in case of success. */
	export interface HyperDriveExperimentResponse {

		/**
		 * Response code.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		code: number;

		/**
		 * Part of response for HyperDrive_CreateExperiment in case of success. Contains details about the created hyperdrive run.
		 * Required
		 */
		result: HyperDriveExperiment;
	}

	/** Response for HyperDrive_CreateExperiment in case of success. */
	export interface HyperDriveExperimentResponseFormProperties {

		/**
		 * Response code.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		code: FormControl<number | null | undefined>,
	}
	export function CreateHyperDriveExperimentResponseFormGroup() {
		return new FormGroup<HyperDriveExperimentResponseFormProperties>({
			code: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Median stopping policy configuration. Please refer https://docs.microsoft.com/en-us/python/api/azureml-train-core/azureml.train.hyperdrive.medianstoppingpolicy?view=azure-ml-py for more information. */
	export interface HyperDriveMedianStoppingPolicy {
	}

	/** Median stopping policy configuration. Please refer https://docs.microsoft.com/en-us/python/api/azureml-train-core/azureml.train.hyperdrive.medianstoppingpolicy?view=azure-ml-py for more information. */
	export interface HyperDriveMedianStoppingPolicyFormProperties {
	}
	export function CreateHyperDriveMedianStoppingPolicyFormGroup() {
		return new FormGroup<HyperDriveMedianStoppingPolicyFormProperties>({
		});

	}


	/** Truncation selection policy configuration. Please refer https://docs.microsoft.com/en-us/python/api/azureml-train-core/azureml.train.hyperdrive.truncationselectionpolicy?view=azure-ml-py for more information. */
	export interface HyperDriveTruncationSelectionPolicy {
	}

	/** Truncation selection policy configuration. Please refer https://docs.microsoft.com/en-us/python/api/azureml-train-core/azureml.train.hyperdrive.truncationselectionpolicy?view=azure-ml-py for more information. */
	export interface HyperDriveTruncationSelectionPolicyFormProperties {
	}
	export function CreateHyperDriveTruncationSelectionPolicyFormGroup() {
		return new FormGroup<HyperDriveTruncationSelectionPolicyFormProperties>({
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Cancel an Experiment.
		 * Cancel a HyperDrive Experiment.
		 * Post hyperdrive/v1.0/{armScope}/runs/{runId}/cancel
		 * @param {string} armScope The ARM scope passed in through URL with format:
		 *             subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearningServices/workspaces/{workspaceName}/experiments/{experimentName}.
		 * @param {string} runId Hyperdrive run id to cancel.
		 * @return {HyperDriveCancelExperimentResponse} OK
		 */
		HyperparameterTuning_CancelExperiment(armScope: string, runId: string): Observable<HyperDriveCancelExperimentResponse> {
			return this.http.post<HyperDriveCancelExperimentResponse>(this.baseUri + 'hyperdrive/v1.0/' + (armScope == null ? '' : encodeURIComponent(armScope)) + '/runs/' + (runId == null ? '' : encodeURIComponent(runId)) + '/cancel', null, {});
		}
	}

}

