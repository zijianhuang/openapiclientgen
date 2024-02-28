import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface ContainerStatus {
		apiStatus?: string | null;
		apiStatusMessage?: string | null;
		service?: string | null;
	}
	export interface ContainerStatusFormProperties {
		apiStatus: FormControl<string | null | undefined>,
		apiStatusMessage: FormControl<string | null | undefined>,
		service: FormControl<string | null | undefined>,
	}
	export function CreateContainerStatusFormGroup() {
		return new FormGroup<ContainerStatusFormProperties>({
			apiStatus: new FormControl<string | null | undefined>(undefined),
			apiStatusMessage: new FormControl<string | null | undefined>(undefined),
			service: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DateRange {
		from?: Date | null;
		to?: Date | null;
	}
	export interface DateRangeFormProperties {
		from: FormControl<Date | null | undefined>,
		to: FormControl<Date | null | undefined>,
	}
	export function CreateDateRangeFormGroup() {
		return new FormGroup<DateRangeFormProperties>({
			from: new FormControl<Date | null | undefined>(undefined),
			to: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/** Used to return an error to the client */
	export interface ErrorResponse {

		/**
		 * The error object.
		 * Required
		 */
		error: PersonalizerError;
	}

	/** Used to return an error to the client */
	export interface ErrorResponseFormProperties {
	}
	export function CreateErrorResponseFormGroup() {
		return new FormGroup<ErrorResponseFormProperties>({
		});

	}


	/** The error object. */
	export interface PersonalizerError {

		/**
		 * High level error code.
		 * Required
		 */
		code: PersonalizerErrorCode;

		/** An array of details about specific errors that led to this reported error. */
		details?: Array<PersonalizerError>;

		/** An object containing more specific information than the parent object about the error. */
		innerError?: InternalError;

		/**
		 * A message explaining the error reported by the service.
		 * Required
		 */
		message: string;

		/** Error source element. */
		target?: string | null;
	}

	/** The error object. */
	export interface PersonalizerErrorFormProperties {

		/**
		 * High level error code.
		 * Required
		 */
		code: FormControl<PersonalizerErrorCode | null | undefined>,

		/**
		 * A message explaining the error reported by the service.
		 * Required
		 */
		message: FormControl<string | null | undefined>,

		/** Error source element. */
		target: FormControl<string | null | undefined>,
	}
	export function CreatePersonalizerErrorFormGroup() {
		return new FormGroup<PersonalizerErrorFormProperties>({
			code: new FormControl<PersonalizerErrorCode | null | undefined>(undefined, [Validators.required]),
			message: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			target: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum PersonalizerErrorCode { BadRequest = 'BadRequest', ResourceNotFound = 'ResourceNotFound', InternalServerError = 'InternalServerError', InvalidServiceConfiguration = 'InvalidServiceConfiguration', InvalidPolicyConfiguration = 'InvalidPolicyConfiguration', InvalidPolicyContract = 'InvalidPolicyContract', InvalidEvaluationContract = 'InvalidEvaluationContract', InvalidRewardRequest = 'InvalidRewardRequest', InvalidEventIdToActivate = 'InvalidEventIdToActivate', InvalidRankRequest = 'InvalidRankRequest', InvalidExportLogsRequest = 'InvalidExportLogsRequest', InvalidContainer = 'InvalidContainer', FrontEndNotFound = 'FrontEndNotFound', EvaluationNotFound = 'EvaluationNotFound', LogsPropertiesNotFound = 'LogsPropertiesNotFound', RankNullResponse = 'RankNullResponse', UpdateConfigurationFailed = 'UpdateConfigurationFailed', ModelResetFailed = 'ModelResetFailed' }


	/** An object containing more specific information than the parent object about the error. */
	export interface InternalError {

		/** Detailed error code. */
		code?: string | null;

		/** An object containing more specific information than the parent object about the error. */
		innererror?: InternalError;
	}

	/** An object containing more specific information than the parent object about the error. */
	export interface InternalErrorFormProperties {

		/** Detailed error code. */
		code: FormControl<string | null | undefined>,
	}
	export function CreateInternalErrorFormGroup() {
		return new FormGroup<InternalErrorFormProperties>({
			code: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Evaluation {
		endTime?: Date | null;
		featureImportance?: Array<string>;

		/** Max length: 256 */
		id?: string | null;
		jobId?: string | null;

		/** Max length: 256 */
		name?: string | null;
		policyResults?: Array<PolicyResult>;
		startTime?: Date | null;
		status?: EvaluationStatus | null;
	}
	export interface EvaluationFormProperties {
		endTime: FormControl<Date | null | undefined>,

		/** Max length: 256 */
		id: FormControl<string | null | undefined>,
		jobId: FormControl<string | null | undefined>,

		/** Max length: 256 */
		name: FormControl<string | null | undefined>,
		startTime: FormControl<Date | null | undefined>,
		status: FormControl<EvaluationStatus | null | undefined>,
	}
	export function CreateEvaluationFormGroup() {
		return new FormGroup<EvaluationFormProperties>({
			endTime: new FormControl<Date | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(256)]),
			jobId: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(256)]),
			startTime: new FormControl<Date | null | undefined>(undefined),
			status: new FormControl<EvaluationStatus | null | undefined>(undefined),
		});

	}

	export interface PolicyResult {
		arguments?: string | null;
		name?: string | null;
		summary?: Array<PolicyResultSummary>;
		totalSummary?: PolicyResultSummary;
	}
	export interface PolicyResultFormProperties {
		arguments: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
	}
	export function CreatePolicyResultFormGroup() {
		return new FormGroup<PolicyResultFormProperties>({
			arguments: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PolicyResultSummary {
		aggregateTimeWindow?: string | null;

		/** Type: float */
		confidenceInterval?: number | null;

		/** Type: float */
		ipsEstimatorDenominator?: number | null;

		/** Type: float */
		ipsEstimatorNumerator?: number | null;

		/** Type: float */
		nonZeroProbability?: number | null;

		/** Type: float */
		snipsEstimatorDenominator?: number | null;

		/** Type: float */
		sumOfSquares?: number | null;
		timeStamp?: Date | null;
	}
	export interface PolicyResultSummaryFormProperties {
		aggregateTimeWindow: FormControl<string | null | undefined>,

		/** Type: float */
		confidenceInterval: FormControl<number | null | undefined>,

		/** Type: float */
		ipsEstimatorDenominator: FormControl<number | null | undefined>,

		/** Type: float */
		ipsEstimatorNumerator: FormControl<number | null | undefined>,

		/** Type: float */
		nonZeroProbability: FormControl<number | null | undefined>,

		/** Type: float */
		snipsEstimatorDenominator: FormControl<number | null | undefined>,

		/** Type: float */
		sumOfSquares: FormControl<number | null | undefined>,
		timeStamp: FormControl<Date | null | undefined>,
	}
	export function CreatePolicyResultSummaryFormGroup() {
		return new FormGroup<PolicyResultSummaryFormProperties>({
			aggregateTimeWindow: new FormControl<string | null | undefined>(undefined),
			confidenceInterval: new FormControl<number | null | undefined>(undefined),
			ipsEstimatorDenominator: new FormControl<number | null | undefined>(undefined),
			ipsEstimatorNumerator: new FormControl<number | null | undefined>(undefined),
			nonZeroProbability: new FormControl<number | null | undefined>(undefined),
			snipsEstimatorDenominator: new FormControl<number | null | undefined>(undefined),
			sumOfSquares: new FormControl<number | null | undefined>(undefined),
			timeStamp: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export enum EvaluationStatus { completed = 'completed', pending = 'pending', failed = 'failed', notSubmitted = 'notSubmitted' }


	/** A counterfactual evaluation. */
	export interface EvaluationContract {

		/** True if the evaluation should explore for a more optimal Learning settings. */
		enableOfflineExperimentation?: boolean | null;

		/**
		 * The end time of the evaluation.
		 * Required
		 */
		endTime: Date;

		/**
		 * The name of the evaluation.
		 * Required
		 * Max length: 256
		 */
		name: string;

		/**
		 * Additional Learning settings to evaluate.
		 * Required
		 */
		policies: Array<PolicyContract>;

		/**
		 * The start time of the evaluation.
		 * Required
		 */
		startTime: Date;
	}

	/** A counterfactual evaluation. */
	export interface EvaluationContractFormProperties {

		/** True if the evaluation should explore for a more optimal Learning settings. */
		enableOfflineExperimentation: FormControl<boolean | null | undefined>,

		/**
		 * The end time of the evaluation.
		 * Required
		 */
		endTime: FormControl<Date | null | undefined>,

		/**
		 * The name of the evaluation.
		 * Required
		 * Max length: 256
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * The start time of the evaluation.
		 * Required
		 */
		startTime: FormControl<Date | null | undefined>,
	}
	export function CreateEvaluationContractFormGroup() {
		return new FormGroup<EvaluationContractFormProperties>({
			enableOfflineExperimentation: new FormControl<boolean | null | undefined>(undefined),
			endTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(256)]),
			startTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Learning settings specifying how to train the model. */
	export interface PolicyContract {

		/**
		 * Arguments of the Learning settings.
		 * Required
		 * Max length: 1024
		 */
		arguments: string;

		/**
		 * Name of the Learning settings.
		 * Required
		 * Max length: 256
		 */
		name: string;
	}

	/** Learning settings specifying how to train the model. */
	export interface PolicyContractFormProperties {

		/**
		 * Arguments of the Learning settings.
		 * Required
		 * Max length: 1024
		 */
		arguments: FormControl<string | null | undefined>,

		/**
		 * Name of the Learning settings.
		 * Required
		 * Max length: 256
		 */
		name: FormControl<string | null | undefined>,
	}
	export function CreatePolicyContractFormGroup() {
		return new FormGroup<PolicyContractFormProperties>({
			arguments: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(1024)]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(256)]),
		});

	}

	export interface LogsProperties {
		dateRange?: DateRange;
	}
	export interface LogsPropertiesFormProperties {
	}
	export function CreateLogsPropertiesFormGroup() {
		return new FormGroup<LogsPropertiesFormProperties>({
		});

	}

	export interface ModelProperties {
		creationTime?: Date | null;
		lastModifiedTime?: Date | null;
	}
	export interface ModelPropertiesFormProperties {
		creationTime: FormControl<Date | null | undefined>,
		lastModifiedTime: FormControl<Date | null | undefined>,
	}
	export function CreateModelPropertiesFormGroup() {
		return new FormGroup<ModelPropertiesFormProperties>({
			creationTime: new FormControl<Date | null | undefined>(undefined),
			lastModifiedTime: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/** Request a set of actions to be ranked by the Personalizer service. */
	export interface RankRequest {

		/**
		 * The set of actions the Personalizer service can pick from.
		 * The set should not contain more than 50 actions.
		 * The order of the actions does not affect the rank result but the order
		 * should match the sequence your application would have used to display them.
		 * The first item in the array will be used as Baseline item in Offline evaluations.
		 * Required
		 */
		actions: Array<RankableAction>;

		/**
		 * Features of the context used for Personalizer as a
		 * dictionary of dictionaries. This depends on the application, and
		 * typically includes features about the current user, their
		 * device, profile information, aggregated data about time and date, etc.
		 * Features should not include personally identifiable information (PII),
		 * unique UserIDs, or precise timestamps.
		 */
		contextFeatures?: Array<string>;

		/**
		 * Send false if it is certain the rewardActionId in rank results will be shown to the user, therefore
		 * Personalizer will expect a Reward call, otherwise it will assign the default
		 * Reward to the event. Send true if it is possible the user will not see the
		 * action specified in the rank results, because the page is rendering later, or the Rank results may be
		 * overridden by code further downstream.
		 */
		deferActivation?: boolean | null;

		/**
		 * Optionally pass an eventId that uniquely identifies this Rank event.
		 * If null, the service generates a unique eventId. The eventId will be used for
		 * associating this request with its reward, as well as seeding the pseudo-random
		 * generator when making a Personalizer call.
		 * Max length: 256
		 */
		eventId?: string | null;

		/** The set of action ids to exclude from ranking. */
		excludedActions?: Array<string>;
	}

	/** Request a set of actions to be ranked by the Personalizer service. */
	export interface RankRequestFormProperties {

		/**
		 * Send false if it is certain the rewardActionId in rank results will be shown to the user, therefore
		 * Personalizer will expect a Reward call, otherwise it will assign the default
		 * Reward to the event. Send true if it is possible the user will not see the
		 * action specified in the rank results, because the page is rendering later, or the Rank results may be
		 * overridden by code further downstream.
		 */
		deferActivation: FormControl<boolean | null | undefined>,

		/**
		 * Optionally pass an eventId that uniquely identifies this Rank event.
		 * If null, the service generates a unique eventId. The eventId will be used for
		 * associating this request with its reward, as well as seeding the pseudo-random
		 * generator when making a Personalizer call.
		 * Max length: 256
		 */
		eventId: FormControl<string | null | undefined>,
	}
	export function CreateRankRequestFormGroup() {
		return new FormGroup<RankRequestFormProperties>({
			deferActivation: new FormControl<boolean | null | undefined>(undefined),
			eventId: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(256)]),
		});

	}


	/** An action with it's associated features used for ranking. */
	export interface RankableAction {

		/**
		 * List of dictionaries containing features.
		 * Required
		 */
		features: Array<string>;

		/**
		 * Id of the action.
		 * Required
		 * Max length: 256
		 */
		id: string;
	}

	/** An action with it's associated features used for ranking. */
	export interface RankableActionFormProperties {

		/**
		 * Id of the action.
		 * Required
		 * Max length: 256
		 */
		id: FormControl<string | null | undefined>,
	}
	export function CreateRankableActionFormGroup() {
		return new FormGroup<RankableActionFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(256)]),
		});

	}


	/** Returns which action to use as rewardActionId, and additional information about each action as a result of a Rank request. */
	export interface RankResponse {

		/**
		 * The eventId for the round trip from request to response.
		 * Max length: 256
		 */
		eventId?: string | null;

		/** The calculated ranking for the current request. */
		ranking?: Array<RankedAction>;

		/**
		 * The action chosen by the Personalizer service. This is the action your application should display, and for which to report the reward. This might not be the
		 * first found in 'ranking' if an action in the request in first position was part of the excluded ids.
		 * Max length: 256
		 */
		rewardActionId?: string | null;
	}

	/** Returns which action to use as rewardActionId, and additional information about each action as a result of a Rank request. */
	export interface RankResponseFormProperties {

		/**
		 * The eventId for the round trip from request to response.
		 * Max length: 256
		 */
		eventId: FormControl<string | null | undefined>,

		/**
		 * The action chosen by the Personalizer service. This is the action your application should display, and for which to report the reward. This might not be the
		 * first found in 'ranking' if an action in the request in first position was part of the excluded ids.
		 * Max length: 256
		 */
		rewardActionId: FormControl<string | null | undefined>,
	}
	export function CreateRankResponseFormGroup() {
		return new FormGroup<RankResponseFormProperties>({
			eventId: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(256)]),
			rewardActionId: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(256)]),
		});

	}


	/** A ranked action with its resulting probability. */
	export interface RankedAction {

		/**
		 * Id of the action
		 * Max length: 256
		 */
		id?: string | null;

		/**
		 * Probability of the action
		 * Minimum: 0
		 * Maximum: 1
		 */
		probability?: number | null;
	}

	/** A ranked action with its resulting probability. */
	export interface RankedActionFormProperties {

		/**
		 * Id of the action
		 * Max length: 256
		 */
		id: FormControl<string | null | undefined>,

		/**
		 * Probability of the action
		 * Minimum: 0
		 * Maximum: 1
		 */
		probability: FormControl<number | null | undefined>,
	}
	export function CreateRankedActionFormGroup() {
		return new FormGroup<RankedActionFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(256)]),
			probability: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(1)]),
		});

	}


	/** Reward given to a rank response. */
	export interface RewardRequest {

		/**
		 * Reward to be assigned to an action. Value should be between -1 and 1 inclusive.
		 * Required
		 * Type: float
		 */
		value: number;
	}

	/** Reward given to a rank response. */
	export interface RewardRequestFormProperties {

		/**
		 * Reward to be assigned to an action. Value should be between -1 and 1 inclusive.
		 * Required
		 * Type: float
		 */
		value: FormControl<number | null | undefined>,
	}
	export function CreateRewardRequestFormGroup() {
		return new FormGroup<RewardRequestFormProperties>({
			value: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The configuration of the service. */
	export interface ServiceConfiguration {

		/**
		 * The reward given if a reward is not received within the specified wait time.
		 * Required
		 * Minimum: -1
		 * Maximum: 1
		 */
		defaultReward: number;

		/**
		 * The percentage of rank responses that will use exploration.
		 * Required
		 * Minimum: 0
		 * Maximum: 1
		 */
		explorationPercentage: number;

		/** Flag indicates whether log mirroring is enabled. */
		logMirrorEnabled?: boolean | null;

		/** Azure storage account container SAS URI for log mirroring. */
		logMirrorSasUri?: string | null;

		/**
		 * Number of days historical logs are to be maintained. -1 implies the logs will never be deleted.
		 * Required
		 * Minimum: -1
		 * Maximum: 2147483647
		 */
		logRetentionDays: number;

		/**
		 * Personalizer will start using the most updated trained model for online ranks automatically every specified time period.
		 * For example, PT5M (5 mins). For information about the time format,
		 * see http://en.wikipedia.org/wiki/ISO_8601#Durations
		 * Required
		 */
		modelExportFrequency: string;

		/**
		 * The function used to process rewards, if multiple reward scores are received before rewardWaitTime is over.
		 * Required
		 * Max length: 256
		 */
		rewardAggregation: string;

		/**
		 * The time span waited until a request is marked with the default reward.
		 * For example, PT5M (5 mins). For information about the time format,
		 * see http://en.wikipedia.org/wiki/ISO_8601#Durations
		 * Required
		 */
		rewardWaitTime: string;
	}

	/** The configuration of the service. */
	export interface ServiceConfigurationFormProperties {

		/**
		 * The reward given if a reward is not received within the specified wait time.
		 * Required
		 * Minimum: -1
		 * Maximum: 1
		 */
		defaultReward: FormControl<number | null | undefined>,

		/**
		 * The percentage of rank responses that will use exploration.
		 * Required
		 * Minimum: 0
		 * Maximum: 1
		 */
		explorationPercentage: FormControl<number | null | undefined>,

		/** Flag indicates whether log mirroring is enabled. */
		logMirrorEnabled: FormControl<boolean | null | undefined>,

		/** Azure storage account container SAS URI for log mirroring. */
		logMirrorSasUri: FormControl<string | null | undefined>,

		/**
		 * Number of days historical logs are to be maintained. -1 implies the logs will never be deleted.
		 * Required
		 * Minimum: -1
		 * Maximum: 2147483647
		 */
		logRetentionDays: FormControl<number | null | undefined>,

		/**
		 * Personalizer will start using the most updated trained model for online ranks automatically every specified time period.
		 * For example, PT5M (5 mins). For information about the time format,
		 * see http://en.wikipedia.org/wiki/ISO_8601#Durations
		 * Required
		 */
		modelExportFrequency: FormControl<string | null | undefined>,

		/**
		 * The function used to process rewards, if multiple reward scores are received before rewardWaitTime is over.
		 * Required
		 * Max length: 256
		 */
		rewardAggregation: FormControl<string | null | undefined>,

		/**
		 * The time span waited until a request is marked with the default reward.
		 * For example, PT5M (5 mins). For information about the time format,
		 * see http://en.wikipedia.org/wiki/ISO_8601#Durations
		 * Required
		 */
		rewardWaitTime: FormControl<string | null | undefined>,
	}
	export function CreateServiceConfigurationFormGroup() {
		return new FormGroup<ServiceConfigurationFormProperties>({
			defaultReward: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(-1), Validators.max(1)]),
			explorationPercentage: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(0), Validators.max(1)]),
			logMirrorEnabled: new FormControl<boolean | null | undefined>(undefined),
			logMirrorSasUri: new FormControl<string | null | undefined>(undefined),
			logRetentionDays: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(-1), Validators.max(2147483647)]),
			modelExportFrequency: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			rewardAggregation: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(256)]),
			rewardWaitTime: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Get Policy.
		 * Get the Learning settings currently used by the Personalizer service.
		 * Get configurations/policy
		 * @return {PolicyContract} Success
		 */
		Policy_Get(): Observable<PolicyContract> {
			return this.http.get<PolicyContract>(this.baseUri + 'configurations/policy', {});
		}

		/**
		 * Update Policy.
		 * Update the Learning settings that the Personalizer service will use to train models.
		 * Put configurations/policy
		 * @param {PolicyContract} requestBody The Learning settings.
		 * @return {PolicyContract} Success
		 */
		Policy_Update(requestBody: PolicyContract): Observable<PolicyContract> {
			return this.http.put<PolicyContract>(this.baseUri + 'configurations/policy', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Reset Policy.
		 * Resets the Learning settings of the Personalizer service to default.
		 * Delete configurations/policy
		 * @return {PolicyContract} Success
		 */
		Policy_Reset(): Observable<PolicyContract> {
			return this.http.delete<PolicyContract>(this.baseUri + 'configurations/policy', {});
		}

		/**
		 * Get Service Configuration.
		 * Get the Personalizer service configuration.
		 * Get configurations/service
		 * @return {ServiceConfiguration} Success
		 */
		ServiceConfiguration_Get(): Observable<ServiceConfiguration> {
			return this.http.get<ServiceConfiguration>(this.baseUri + 'configurations/service', {});
		}

		/**
		 * Update Service Configuration.
		 * Update the Personalizer service configuration.
		 * Put configurations/service
		 * @param {ServiceConfiguration} requestBody The personalizer service configuration.
		 * @return {ServiceConfiguration} Success
		 */
		ServiceConfiguration_Update(requestBody: ServiceConfiguration): Observable<ServiceConfiguration> {
			return this.http.put<ServiceConfiguration>(this.baseUri + 'configurations/service', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * List Evaluations.
		 * List all the submitted evaluations.
		 * Get evaluations
		 * @return {Array<Evaluation>} Success
		 */
		Evaluations_List(): Observable<Array<Evaluation>> {
			return this.http.get<Array<Evaluation>>(this.baseUri + 'evaluations', {});
		}

		/**
		 * Create Evaluation.
		 * Submit a new evaluation job.
		 * Post evaluations
		 * @param {EvaluationContract} requestBody The evaluation job definition.
		 * @return {void} 
		 */
		Evaluations_Create(requestBody: EvaluationContract): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'evaluations', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get Evaluation.
		 * Get the evaluation associated with the Id.
		 * Get evaluations/{evaluationId}
		 * @param {string} evaluationId Id of the evaluation.
		 * @return {Evaluation} Success
		 */
		Evaluations_Get(evaluationId: string): Observable<Evaluation> {
			return this.http.get<Evaluation>(this.baseUri + 'evaluations/' + (evaluationId == null ? '' : encodeURIComponent(evaluationId)), {});
		}

		/**
		 * Delete Evaluation.
		 * Delete the evaluation associated with the Id.
		 * Delete evaluations/{evaluationId}
		 * @param {string} evaluationId Id of the evaluation to delete.
		 * @return {void} 
		 */
		Evaluations_Delete(evaluationId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'evaluations/' + (evaluationId == null ? '' : encodeURIComponent(evaluationId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Activate Event.
		 * Report that the specified event was actually displayed to the user and a reward should be expected for it
		 * Post events/{eventId}/activate
		 * @param {string} eventId The event ID this activation applies to.
		 * @return {void} 
		 */
		Events_Activate(eventId: string): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'events/' + (eventId == null ? '' : encodeURIComponent(eventId)) + '/activate', null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Post Reward.
		 * Report reward that resulted from using the action specified in rewardActionId for the specified event.
		 * Post events/{eventId}/reward
		 * @param {string} eventId The event id this reward applies to.
		 * @param {RewardRequest} requestBody The reward should be a floating point number, typically between 0 and 1.
		 * @return {void} 
		 */
		Events_Reward(eventId: string, requestBody: RewardRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'events/' + (eventId == null ? '' : encodeURIComponent(eventId)) + '/reward', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Deletes Logs.
		 * Delete all generated logs.
		 * Delete logs
		 * @return {void} 
		 */
		Log_Delete(): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'logs', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get Log Properties.
		 * Get properties of generated logs.
		 * Get logs/properties
		 * @return {LogsProperties} Success
		 */
		Log_GetProperties(): Observable<LogsProperties> {
			return this.http.get<LogsProperties>(this.baseUri + 'logs/properties', {});
		}

		/**
		 * Get Model.
		 * Get the model file generated by Personalizer service.
		 * Get model
		 * @return {void} Success
		 */
		Model_Get(): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'model', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Reset Model.
		 * Resets the model file generated by Personalizer service.
		 * Delete model
		 * @return {void} 
		 */
		Model_Reset(): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'model', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get Model Properties.
		 * Get properties of the model file generated by Personalizer service.
		 * Get model/properties
		 * @return {ModelProperties} Success
		 */
		Model_GetProperties(): Observable<ModelProperties> {
			return this.http.get<ModelProperties>(this.baseUri + 'model/properties', {});
		}

		/**
		 * Post Rank.
		 * Submit a Personalizer rank request, to get which of the provided actions should be used in the provided context.
		 * Post rank
		 * @param {RankRequest} requestBody A Personalizer request.
		 * @return {void} 
		 */
		Rank(requestBody: RankRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'rank', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}
	}

}

