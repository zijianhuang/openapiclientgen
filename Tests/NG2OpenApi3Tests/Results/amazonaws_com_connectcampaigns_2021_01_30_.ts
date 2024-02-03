import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** The response for Create Campaign API */
	export interface CreateCampaignResponse {

		/**
		 * The resource name of an Amazon Connect campaign.
		 * Max length: 500
		 * Min length: 20
		 */
		arn?: string | null;

		/**
		 * Identifier representing a Campaign
		 * Max length: 256
		 * Min length: 0
		 */
		id?: string | null;

		/** Tag map with key and value. */
		tags?: TagMap;
	}

	/** The response for Create Campaign API */
	export interface CreateCampaignResponseFormProperties {

		/**
		 * The resource name of an Amazon Connect campaign.
		 * Max length: 500
		 * Min length: 20
		 */
		arn: FormControl<string | null | undefined>,

		/**
		 * Identifier representing a Campaign
		 * Max length: 256
		 * Min length: 0
		 */
		id: FormControl<string | null | undefined>,
	}
	export function CreateCreateCampaignResponseFormGroup() {
		return new FormGroup<CreateCampaignResponseFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined, [Validators.minLength(20), Validators.maxLength(500)]),
			id: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(256)]),
		});

	}


	/** Tag map with key and value. */
	export interface TagMap {
	}

	/** Tag map with key and value. */
	export interface TagMapFormProperties {
	}
	export function CreateTagMapFormGroup() {
		return new FormGroup<TagMapFormProperties>({
		});

	}


	/** Predictive Dialer config */
	export interface PredictiveDialerConfig {

		/**
		 * The bandwidth allocation of a queue resource.
		 * Required
		 * Minimum: 0
		 * Maximum: 1
		 */
		bandwidthAllocation: number;
	}

	/** Predictive Dialer config */
	export interface PredictiveDialerConfigFormProperties {

		/**
		 * The bandwidth allocation of a queue resource.
		 * Required
		 * Minimum: 0
		 * Maximum: 1
		 */
		bandwidthAllocation: FormControl<number | null | undefined>,
	}
	export function CreatePredictiveDialerConfigFormGroup() {
		return new FormGroup<PredictiveDialerConfigFormProperties>({
			bandwidthAllocation: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(0), Validators.max(1)]),
		});

	}


	/** Progressive Dialer config */
	export interface ProgressiveDialerConfig {

		/**
		 * The bandwidth allocation of a queue resource.
		 * Required
		 * Minimum: 0
		 * Maximum: 1
		 */
		bandwidthAllocation: number;
	}

	/** Progressive Dialer config */
	export interface ProgressiveDialerConfigFormProperties {

		/**
		 * The bandwidth allocation of a queue resource.
		 * Required
		 * Minimum: 0
		 * Maximum: 1
		 */
		bandwidthAllocation: FormControl<number | null | undefined>,
	}
	export function CreateProgressiveDialerConfigFormGroup() {
		return new FormGroup<ProgressiveDialerConfigFormProperties>({
			bandwidthAllocation: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(0), Validators.max(1)]),
		});

	}


	/** Answering Machine Detection config */
	export interface AnswerMachineDetectionConfig {

		/** Required */
		enableAnswerMachineDetection: boolean;
	}

	/** Answering Machine Detection config */
	export interface AnswerMachineDetectionConfigFormProperties {

		/** Required */
		enableAnswerMachineDetection: FormControl<boolean | null | undefined>,
	}
	export function CreateAnswerMachineDetectionConfigFormGroup() {
		return new FormGroup<AnswerMachineDetectionConfigFormProperties>({
			enableAnswerMachineDetection: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
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

	export interface ResourceNotFoundException {
	}
	export interface ResourceNotFoundExceptionFormProperties {
	}
	export function CreateResourceNotFoundExceptionFormGroup() {
		return new FormGroup<ResourceNotFoundExceptionFormProperties>({
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

	export interface AccessDeniedException {
	}
	export interface AccessDeniedExceptionFormProperties {
	}
	export function CreateAccessDeniedExceptionFormGroup() {
		return new FormGroup<AccessDeniedExceptionFormProperties>({
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

	export interface ThrottlingException {
	}
	export interface ThrottlingExceptionFormProperties {
	}
	export function CreateThrottlingExceptionFormGroup() {
		return new FormGroup<ThrottlingExceptionFormProperties>({
		});

	}

	export interface InvalidStateException {
	}
	export interface InvalidStateExceptionFormProperties {
	}
	export function CreateInvalidStateExceptionFormGroup() {
		return new FormGroup<InvalidStateExceptionFormProperties>({
		});

	}


	/** DescribeCampaignResponse */
	export interface DescribeCampaignResponse {

		/** An Amazon Connect campaign. */
		campaign?: Campaign;
	}

	/** DescribeCampaignResponse */
	export interface DescribeCampaignResponseFormProperties {
	}
	export function CreateDescribeCampaignResponseFormGroup() {
		return new FormGroup<DescribeCampaignResponseFormProperties>({
		});

	}


	/** An Amazon Connect campaign. */
	export interface Campaign {

		/**
		 * The resource name of an Amazon Connect campaign.
		 * Required
		 * Max length: 500
		 * Min length: 20
		 */
		arn: string;

		/**
		 * Amazon Connect Instance Id
		 * Required
		 * Max length: 256
		 * Min length: 0
		 */
		connectInstanceId: string;

		/**
		 * The possible types of dialer config parameters
		 * Required
		 */
		dialerConfig: DialerConfig;

		/**
		 * Identifier representing a Campaign
		 * Required
		 * Max length: 256
		 * Min length: 0
		 */
		id: string;

		/**
		 * The name of an Amazon Connect Campaign name.
		 * Required
		 * Max length: 127
		 * Min length: 1
		 */
		name: string;

		/**
		 * The configuration used for outbound calls.
		 * Required
		 */
		outboundCallConfig: OutboundCallConfig;

		/** Tag map with key and value. */
		tags?: TagMap;
	}

	/** An Amazon Connect campaign. */
	export interface CampaignFormProperties {

		/**
		 * The resource name of an Amazon Connect campaign.
		 * Required
		 * Max length: 500
		 * Min length: 20
		 */
		arn: FormControl<string | null | undefined>,

		/**
		 * Amazon Connect Instance Id
		 * Required
		 * Max length: 256
		 * Min length: 0
		 */
		connectInstanceId: FormControl<string | null | undefined>,

		/**
		 * Identifier representing a Campaign
		 * Required
		 * Max length: 256
		 * Min length: 0
		 */
		id: FormControl<string | null | undefined>,

		/**
		 * The name of an Amazon Connect Campaign name.
		 * Required
		 * Max length: 127
		 * Min length: 1
		 */
		name: FormControl<string | null | undefined>,
	}
	export function CreateCampaignFormGroup() {
		return new FormGroup<CampaignFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(20), Validators.maxLength(500)]),
			connectInstanceId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(0), Validators.maxLength(256)]),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(0), Validators.maxLength(256)]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(127)]),
		});

	}


	/** The possible types of dialer config parameters */
	export interface DialerConfig {

		/** Predictive Dialer config */
		predictiveDialerConfig?: PredictiveDialerConfig;

		/** Progressive Dialer config */
		progressiveDialerConfig?: ProgressiveDialerConfig;
	}

	/** The possible types of dialer config parameters */
	export interface DialerConfigFormProperties {
	}
	export function CreateDialerConfigFormGroup() {
		return new FormGroup<DialerConfigFormProperties>({
		});

	}


	/** The configuration used for outbound calls. */
	export interface OutboundCallConfig {

		/** Answering Machine Detection config */
		answerMachineDetectionConfig?: AnswerMachineDetectionConfig;

		/**
		 * The identifier of the contact flow for the outbound call.
		 * Required
		 * Max length: 500
		 * Min length: 0
		 */
		connectContactFlowId: string;

		/**
		 * The queue for the call. If you specify a queue, the phone displayed for caller ID is the phone number specified in the queue. If you do not specify a queue, the queue defined in the contact flow is used. If you do not specify a queue, you must specify a source phone number.
		 * Required
		 * Max length: 500
		 * Min length: 0
		 */
		connectQueueId: string;

		/**
		 * The phone number associated with the Amazon Connect instance, in E.164 format. If you do not specify a source phone number, you must specify a queue.
		 * Max length: 100
		 * Min length: 0
		 */
		connectSourcePhoneNumber?: string | null;
	}

	/** The configuration used for outbound calls. */
	export interface OutboundCallConfigFormProperties {

		/**
		 * The identifier of the contact flow for the outbound call.
		 * Required
		 * Max length: 500
		 * Min length: 0
		 */
		connectContactFlowId: FormControl<string | null | undefined>,

		/**
		 * The queue for the call. If you specify a queue, the phone displayed for caller ID is the phone number specified in the queue. If you do not specify a queue, the queue defined in the contact flow is used. If you do not specify a queue, you must specify a source phone number.
		 * Required
		 * Max length: 500
		 * Min length: 0
		 */
		connectQueueId: FormControl<string | null | undefined>,

		/**
		 * The phone number associated with the Amazon Connect instance, in E.164 format. If you do not specify a source phone number, you must specify a queue.
		 * Max length: 100
		 * Min length: 0
		 */
		connectSourcePhoneNumber: FormControl<string | null | undefined>,
	}
	export function CreateOutboundCallConfigFormGroup() {
		return new FormGroup<OutboundCallConfigFormProperties>({
			connectContactFlowId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(0), Validators.maxLength(500)]),
			connectQueueId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(0), Validators.maxLength(500)]),
			connectSourcePhoneNumber: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(100)]),
		});

	}


	/** GetCampaignStateResponse */
	export interface GetCampaignStateResponse {

		/** State of a campaign */
		state?: GetCampaignStateResponseState | null;
	}

	/** GetCampaignStateResponse */
	export interface GetCampaignStateResponseFormProperties {

		/** State of a campaign */
		state: FormControl<GetCampaignStateResponseState | null | undefined>,
	}
	export function CreateGetCampaignStateResponseFormGroup() {
		return new FormGroup<GetCampaignStateResponseFormProperties>({
			state: new FormControl<GetCampaignStateResponseState | null | undefined>(undefined),
		});

	}

	export enum GetCampaignStateResponseState { Initialized = 'Initialized', Running = 'Running', Paused = 'Paused', Stopped = 'Stopped', Failed = 'Failed' }


	/** GetCampaignStateBatchResponse */
	export interface GetCampaignStateBatchResponse {

		/**
		 * List of failed requests of campaign state
		 * Minimum items: 0
		 * Maximum items: 25
		 */
		failedRequests?: Array<FailedCampaignStateResponse>;

		/**
		 * List of successful response of campaign state
		 * Minimum items: 0
		 * Maximum items: 25
		 */
		successfulRequests?: Array<SuccessfulCampaignStateResponse>;
	}

	/** GetCampaignStateBatchResponse */
	export interface GetCampaignStateBatchResponseFormProperties {
	}
	export function CreateGetCampaignStateBatchResponseFormGroup() {
		return new FormGroup<GetCampaignStateBatchResponseFormProperties>({
		});

	}


	/** Failed response of campaign state */
	export interface FailedCampaignStateResponse {

		/**
		 * Identifier representing a Campaign
		 * Max length: 256
		 * Min length: 0
		 */
		campaignId?: string | null;

		/** A predefined code indicating the error that caused the failure in getting state of campaigns */
		failureCode?: FailedCampaignStateResponseFailureCode | null;
	}

	/** Failed response of campaign state */
	export interface FailedCampaignStateResponseFormProperties {

		/**
		 * Identifier representing a Campaign
		 * Max length: 256
		 * Min length: 0
		 */
		campaignId: FormControl<string | null | undefined>,

		/** A predefined code indicating the error that caused the failure in getting state of campaigns */
		failureCode: FormControl<FailedCampaignStateResponseFailureCode | null | undefined>,
	}
	export function CreateFailedCampaignStateResponseFormGroup() {
		return new FormGroup<FailedCampaignStateResponseFormProperties>({
			campaignId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(256)]),
			failureCode: new FormControl<FailedCampaignStateResponseFailureCode | null | undefined>(undefined),
		});

	}

	export enum FailedCampaignStateResponseFailureCode { ResourceNotFound = 'ResourceNotFound', UnknownError = 'UnknownError' }


	/** Successful response of campaign state */
	export interface SuccessfulCampaignStateResponse {

		/**
		 * Identifier representing a Campaign
		 * Max length: 256
		 * Min length: 0
		 */
		campaignId?: string | null;

		/** State of a campaign */
		state?: GetCampaignStateResponseState | null;
	}

	/** Successful response of campaign state */
	export interface SuccessfulCampaignStateResponseFormProperties {

		/**
		 * Identifier representing a Campaign
		 * Max length: 256
		 * Min length: 0
		 */
		campaignId: FormControl<string | null | undefined>,

		/** State of a campaign */
		state: FormControl<GetCampaignStateResponseState | null | undefined>,
	}
	export function CreateSuccessfulCampaignStateResponseFormGroup() {
		return new FormGroup<SuccessfulCampaignStateResponseFormProperties>({
			campaignId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(256)]),
			state: new FormControl<GetCampaignStateResponseState | null | undefined>(undefined),
		});

	}


	/** GetConnectInstanceConfigResponse */
	export interface GetConnectInstanceConfigResponse {

		/** Instance config object */
		connectInstanceConfig?: InstanceConfig;
	}

	/** GetConnectInstanceConfigResponse */
	export interface GetConnectInstanceConfigResponseFormProperties {
	}
	export function CreateGetConnectInstanceConfigResponseFormGroup() {
		return new FormGroup<GetConnectInstanceConfigResponseFormProperties>({
		});

	}


	/** Instance config object */
	export interface InstanceConfig {

		/**
		 * Amazon Connect Instance Id
		 * Required
		 * Max length: 256
		 * Min length: 0
		 */
		connectInstanceId: string;

		/**
		 * Encryption config for Connect Instance. Note that sensitive data will always be encrypted. If disabled, service will perform encryption with its own key. If enabled, a KMS key id needs to be provided and KMS charges will apply. KMS is only type supported
		 * Required
		 */
		encryptionConfig: EncryptionConfig;

		/**
		 * Service linked role arn
		 * Required
		 * Max length: 256
		 * Min length: 0
		 */
		serviceLinkedRoleArn: string;
	}

	/** Instance config object */
	export interface InstanceConfigFormProperties {

		/**
		 * Amazon Connect Instance Id
		 * Required
		 * Max length: 256
		 * Min length: 0
		 */
		connectInstanceId: FormControl<string | null | undefined>,

		/**
		 * Service linked role arn
		 * Required
		 * Max length: 256
		 * Min length: 0
		 */
		serviceLinkedRoleArn: FormControl<string | null | undefined>,
	}
	export function CreateInstanceConfigFormGroup() {
		return new FormGroup<InstanceConfigFormProperties>({
			connectInstanceId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(0), Validators.maxLength(256)]),
			serviceLinkedRoleArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(0), Validators.maxLength(256)]),
		});

	}


	/** Encryption config for Connect Instance. Note that sensitive data will always be encrypted. If disabled, service will perform encryption with its own key. If enabled, a KMS key id needs to be provided and KMS charges will apply. KMS is only type supported */
	export interface EncryptionConfig {

		/**
		 * Boolean to indicate if custom encryption has been enabled.
		 * Required
		 */
		enabled: boolean;

		/** Server-side encryption type. */
		encryptionType?: EncryptionConfigEncryptionType | null;

		/**
		 * KMS key id/arn for encryption config.
		 * Max length: 500
		 * Min length: 0
		 */
		keyArn?: string | null;
	}

	/** Encryption config for Connect Instance. Note that sensitive data will always be encrypted. If disabled, service will perform encryption with its own key. If enabled, a KMS key id needs to be provided and KMS charges will apply. KMS is only type supported */
	export interface EncryptionConfigFormProperties {

		/**
		 * Boolean to indicate if custom encryption has been enabled.
		 * Required
		 */
		enabled: FormControl<boolean | null | undefined>,

		/** Server-side encryption type. */
		encryptionType: FormControl<EncryptionConfigEncryptionType | null | undefined>,

		/**
		 * KMS key id/arn for encryption config.
		 * Max length: 500
		 * Min length: 0
		 */
		keyArn: FormControl<string | null | undefined>,
	}
	export function CreateEncryptionConfigFormGroup() {
		return new FormGroup<EncryptionConfigFormProperties>({
			enabled: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			encryptionType: new FormControl<EncryptionConfigEncryptionType | null | undefined>(undefined),
			keyArn: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(500)]),
		});

	}

	export enum EncryptionConfigEncryptionType { KMS = 'KMS' }


	/** GetInstanceOnboardingJobStatusResponse */
	export interface GetInstanceOnboardingJobStatusResponse {

		/** Instance onboarding job status object */
		connectInstanceOnboardingJobStatus?: InstanceOnboardingJobStatus;
	}

	/** GetInstanceOnboardingJobStatusResponse */
	export interface GetInstanceOnboardingJobStatusResponseFormProperties {
	}
	export function CreateGetInstanceOnboardingJobStatusResponseFormGroup() {
		return new FormGroup<GetInstanceOnboardingJobStatusResponseFormProperties>({
		});

	}


	/** Instance onboarding job status object */
	export interface InstanceOnboardingJobStatus {

		/**
		 * Amazon Connect Instance Id
		 * Required
		 * Max length: 256
		 * Min length: 0
		 */
		connectInstanceId: string;

		/** Enumeration of the possible failure codes for instance onboarding job */
		failureCode?: InstanceOnboardingJobStatusFailureCode | null;

		/**
		 * Enumeration of the possible states for instance onboarding job
		 * Required
		 */
		status: InstanceOnboardingJobStatusStatus;
	}

	/** Instance onboarding job status object */
	export interface InstanceOnboardingJobStatusFormProperties {

		/**
		 * Amazon Connect Instance Id
		 * Required
		 * Max length: 256
		 * Min length: 0
		 */
		connectInstanceId: FormControl<string | null | undefined>,

		/** Enumeration of the possible failure codes for instance onboarding job */
		failureCode: FormControl<InstanceOnboardingJobStatusFailureCode | null | undefined>,

		/**
		 * Enumeration of the possible states for instance onboarding job
		 * Required
		 */
		status: FormControl<InstanceOnboardingJobStatusStatus | null | undefined>,
	}
	export function CreateInstanceOnboardingJobStatusFormGroup() {
		return new FormGroup<InstanceOnboardingJobStatusFormProperties>({
			connectInstanceId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(0), Validators.maxLength(256)]),
			failureCode: new FormControl<InstanceOnboardingJobStatusFailureCode | null | undefined>(undefined),
			status: new FormControl<InstanceOnboardingJobStatusStatus | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum InstanceOnboardingJobStatusFailureCode { EVENT_BRIDGE_ACCESS_DENIED = 'EVENT_BRIDGE_ACCESS_DENIED', EVENT_BRIDGE_MANAGED_RULE_LIMIT_EXCEEDED = 'EVENT_BRIDGE_MANAGED_RULE_LIMIT_EXCEEDED', IAM_ACCESS_DENIED = 'IAM_ACCESS_DENIED', KMS_ACCESS_DENIED = 'KMS_ACCESS_DENIED', KMS_KEY_NOT_FOUND = 'KMS_KEY_NOT_FOUND', INTERNAL_FAILURE = 'INTERNAL_FAILURE' }

	export enum InstanceOnboardingJobStatusStatus { IN_PROGRESS = 'IN_PROGRESS', SUCCEEDED = 'SUCCEEDED', FAILED = 'FAILED' }


	/** ListCampaignsResponse */
	export interface ListCampaignsResponse {

		/** A list of Amazon Connect campaigns. */
		campaignSummaryList?: Array<CampaignSummary>;

		/**
		 * The token for the next set of results.
		 * Max length: 1000
		 * Min length: 0
		 */
		nextToken?: string | null;
	}

	/** ListCampaignsResponse */
	export interface ListCampaignsResponseFormProperties {

		/**
		 * The token for the next set of results.
		 * Max length: 1000
		 * Min length: 0
		 */
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListCampaignsResponseFormGroup() {
		return new FormGroup<ListCampaignsResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(1000)]),
		});

	}


	/** An Amazon Connect campaign summary. */
	export interface CampaignSummary {

		/**
		 * The resource name of an Amazon Connect campaign.
		 * Required
		 * Max length: 500
		 * Min length: 20
		 */
		arn: string;

		/**
		 * Amazon Connect Instance Id
		 * Required
		 * Max length: 256
		 * Min length: 0
		 */
		connectInstanceId: string;

		/**
		 * Identifier representing a Campaign
		 * Required
		 * Max length: 256
		 * Min length: 0
		 */
		id: string;

		/**
		 * The name of an Amazon Connect Campaign name.
		 * Required
		 * Max length: 127
		 * Min length: 1
		 */
		name: string;
	}

	/** An Amazon Connect campaign summary. */
	export interface CampaignSummaryFormProperties {

		/**
		 * The resource name of an Amazon Connect campaign.
		 * Required
		 * Max length: 500
		 * Min length: 20
		 */
		arn: FormControl<string | null | undefined>,

		/**
		 * Amazon Connect Instance Id
		 * Required
		 * Max length: 256
		 * Min length: 0
		 */
		connectInstanceId: FormControl<string | null | undefined>,

		/**
		 * Identifier representing a Campaign
		 * Required
		 * Max length: 256
		 * Min length: 0
		 */
		id: FormControl<string | null | undefined>,

		/**
		 * The name of an Amazon Connect Campaign name.
		 * Required
		 * Max length: 127
		 * Min length: 1
		 */
		name: FormControl<string | null | undefined>,
	}
	export function CreateCampaignSummaryFormGroup() {
		return new FormGroup<CampaignSummaryFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(20), Validators.maxLength(500)]),
			connectInstanceId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(0), Validators.maxLength(256)]),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(0), Validators.maxLength(256)]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(127)]),
		});

	}


	/** Connect instance identifier filter */
	export interface InstanceIdFilter {

		/**
		 * Operators for Connect instance identifier filter
		 * Required
		 */
		operator: InstanceIdFilterOperator;

		/**
		 * Amazon Connect Instance Id
		 * Required
		 * Max length: 256
		 * Min length: 0
		 */
		value: string;
	}

	/** Connect instance identifier filter */
	export interface InstanceIdFilterFormProperties {

		/**
		 * Operators for Connect instance identifier filter
		 * Required
		 */
		operator: FormControl<InstanceIdFilterOperator | null | undefined>,

		/**
		 * Amazon Connect Instance Id
		 * Required
		 * Max length: 256
		 * Min length: 0
		 */
		value: FormControl<string | null | undefined>,
	}
	export function CreateInstanceIdFilterFormGroup() {
		return new FormGroup<InstanceIdFilterFormProperties>({
			operator: new FormControl<InstanceIdFilterOperator | null | undefined>(undefined, [Validators.required]),
			value: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(0), Validators.maxLength(256)]),
		});

	}

	export enum InstanceIdFilterOperator { Eq = 'Eq' }


	/** ListTagsForResponse */
	export interface ListTagsForResourceResponse {

		/** Tag map with key and value. */
		tags?: TagMap;
	}

	/** ListTagsForResponse */
	export interface ListTagsForResourceResponseFormProperties {
	}
	export function CreateListTagsForResourceResponseFormGroup() {
		return new FormGroup<ListTagsForResourceResponseFormProperties>({
		});

	}

	export interface InvalidCampaignStateException {
	}
	export interface InvalidCampaignStateExceptionFormProperties {
	}
	export function CreateInvalidCampaignStateExceptionFormGroup() {
		return new FormGroup<InvalidCampaignStateExceptionFormProperties>({
		});

	}


	/** PutDialRequestBatchResponse */
	export interface PutDialRequestBatchResponse {

		/**
		 * A list of failed requests.
		 * Minimum items: 0
		 * Maximum items: 25
		 */
		failedRequests?: Array<FailedRequest>;

		/**
		 * A list of successful requests identified by the unique client token.
		 * Minimum items: 0
		 * Maximum items: 25
		 */
		successfulRequests?: Array<SuccessfulRequest>;
	}

	/** PutDialRequestBatchResponse */
	export interface PutDialRequestBatchResponseFormProperties {
	}
	export function CreatePutDialRequestBatchResponseFormGroup() {
		return new FormGroup<PutDialRequestBatchResponseFormProperties>({
		});

	}


	/** A failed request identified by the unique client token. */
	export interface FailedRequest {

		/**
		 * Client provided parameter used for idempotency. Its value must be unique for each request.
		 * Max length: 64
		 * Min length: 0
		 */
		clientToken?: string | null;

		/** A predefined code indicating the error that caused the failure. */
		failureCode?: FailedRequestFailureCode | null;

		/** Identifier representing a Dial request */
		id?: string | null;
	}

	/** A failed request identified by the unique client token. */
	export interface FailedRequestFormProperties {

		/**
		 * Client provided parameter used for idempotency. Its value must be unique for each request.
		 * Max length: 64
		 * Min length: 0
		 */
		clientToken: FormControl<string | null | undefined>,

		/** A predefined code indicating the error that caused the failure. */
		failureCode: FormControl<FailedRequestFailureCode | null | undefined>,

		/** Identifier representing a Dial request */
		id: FormControl<string | null | undefined>,
	}
	export function CreateFailedRequestFormGroup() {
		return new FormGroup<FailedRequestFormProperties>({
			clientToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(64)]),
			failureCode: new FormControl<FailedRequestFailureCode | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum FailedRequestFailureCode { InvalidInput = 'InvalidInput', RequestThrottled = 'RequestThrottled', UnknownError = 'UnknownError' }


	/** A successful request identified by the unique client token. */
	export interface SuccessfulRequest {

		/**
		 * Client provided parameter used for idempotency. Its value must be unique for each request.
		 * Max length: 64
		 * Min length: 0
		 */
		clientToken?: string | null;

		/** Identifier representing a Dial request */
		id?: string | null;
	}

	/** A successful request identified by the unique client token. */
	export interface SuccessfulRequestFormProperties {

		/**
		 * Client provided parameter used for idempotency. Its value must be unique for each request.
		 * Max length: 64
		 * Min length: 0
		 */
		clientToken: FormControl<string | null | undefined>,

		/** Identifier representing a Dial request */
		id: FormControl<string | null | undefined>,
	}
	export function CreateSuccessfulRequestFormGroup() {
		return new FormGroup<SuccessfulRequestFormProperties>({
			clientToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(64)]),
			id: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A dial request for a campaign. */
	export interface DialRequest {

		/**
		 * A custom key-value pair using an attribute map. The attributes are standard Amazon Connect attributes, and can be accessed in contact flows just like any other contact attributes.
		 * Required
		 */
		attributes: Attributes;

		/**
		 * Client provided parameter used for idempotency. Its value must be unique for each request.
		 * Required
		 * Max length: 64
		 * Min length: 0
		 */
		clientToken: string;

		/**
		 * Timestamp with no UTC offset or timezone
		 * Required
		 */
		expirationTime: Date;

		/**
		 * The phone number of the customer, in E.164 format.
		 * Required
		 * Max length: 20
		 * Min length: 0
		 */
		phoneNumber: string;
	}

	/** A dial request for a campaign. */
	export interface DialRequestFormProperties {

		/**
		 * Client provided parameter used for idempotency. Its value must be unique for each request.
		 * Required
		 * Max length: 64
		 * Min length: 0
		 */
		clientToken: FormControl<string | null | undefined>,

		/**
		 * Timestamp with no UTC offset or timezone
		 * Required
		 */
		expirationTime: FormControl<Date | null | undefined>,

		/**
		 * The phone number of the customer, in E.164 format.
		 * Required
		 * Max length: 20
		 * Min length: 0
		 */
		phoneNumber: FormControl<string | null | undefined>,
	}
	export function CreateDialRequestFormGroup() {
		return new FormGroup<DialRequestFormProperties>({
			clientToken: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(0), Validators.maxLength(64)]),
			expirationTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			phoneNumber: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(0), Validators.maxLength(20)]),
		});

	}


	/** A custom key-value pair using an attribute map. The attributes are standard Amazon Connect attributes, and can be accessed in contact flows just like any other contact attributes. */
	export interface Attributes {
	}

	/** A custom key-value pair using an attribute map. The attributes are standard Amazon Connect attributes, and can be accessed in contact flows just like any other contact attributes. */
	export interface AttributesFormProperties {
	}
	export function CreateAttributesFormGroup() {
		return new FormGroup<AttributesFormProperties>({
		});

	}


	/** The response for StartInstanceOnboardingJob API. */
	export interface StartInstanceOnboardingJobResponse {

		/** Instance onboarding job status object */
		connectInstanceOnboardingJobStatus?: InstanceOnboardingJobStatus;
	}

	/** The response for StartInstanceOnboardingJob API. */
	export interface StartInstanceOnboardingJobResponseFormProperties {
	}
	export function CreateStartInstanceOnboardingJobResponseFormGroup() {
		return new FormGroup<StartInstanceOnboardingJobResponseFormProperties>({
		});

	}


	/** Server-side encryption type. */
	export enum EncryptionType { KMS = 'KMS' }


	/** Filter model by type */
	export interface CampaignFilters {

		/** Connect instance identifier filter */
		instanceIdFilter?: InstanceIdFilter;
	}

	/** Filter model by type */
	export interface CampaignFiltersFormProperties {
	}
	export function CreateCampaignFiltersFormGroup() {
		return new FormGroup<CampaignFiltersFormProperties>({
		});

	}


	/** State of a campaign */
	export enum CampaignState { Initialized = 'Initialized', Running = 'Running', Paused = 'Paused', Stopped = 'Stopped', Failed = 'Failed' }


	/** The request for Create Campaign API. */
	export interface CreateCampaignRequest {

		/**
		 * Amazon Connect Instance Id
		 * Required
		 * Max length: 256
		 * Min length: 0
		 */
		connectInstanceId: string;

		/**
		 * The possible types of dialer config parameters
		 * Required
		 */
		dialerConfig: DialerConfig;

		/**
		 * The name of an Amazon Connect Campaign name.
		 * Required
		 * Max length: 127
		 * Min length: 1
		 */
		name: string;

		/**
		 * The configuration used for outbound calls.
		 * Required
		 */
		outboundCallConfig: OutboundCallConfig;

		/** Tag map with key and value. */
		tags?: TagMap;
	}

	/** The request for Create Campaign API. */
	export interface CreateCampaignRequestFormProperties {

		/**
		 * Amazon Connect Instance Id
		 * Required
		 * Max length: 256
		 * Min length: 0
		 */
		connectInstanceId: FormControl<string | null | undefined>,

		/**
		 * The name of an Amazon Connect Campaign name.
		 * Required
		 * Max length: 127
		 * Min length: 1
		 */
		name: FormControl<string | null | undefined>,
	}
	export function CreateCreateCampaignRequestFormGroup() {
		return new FormGroup<CreateCampaignRequestFormProperties>({
			connectInstanceId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(0), Validators.maxLength(256)]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(127)]),
		});

	}


	/** DeleteCampaignRequest */
	export interface DeleteCampaignRequest {
	}

	/** DeleteCampaignRequest */
	export interface DeleteCampaignRequestFormProperties {
	}
	export function CreateDeleteCampaignRequestFormGroup() {
		return new FormGroup<DeleteCampaignRequestFormProperties>({
		});

	}


	/** DeleteCampaignRequest */
	export interface DeleteConnectInstanceConfigRequest {
	}

	/** DeleteCampaignRequest */
	export interface DeleteConnectInstanceConfigRequestFormProperties {
	}
	export function CreateDeleteConnectInstanceConfigRequestFormGroup() {
		return new FormGroup<DeleteConnectInstanceConfigRequestFormProperties>({
		});

	}


	/** The request for DeleteInstanceOnboardingJob API. */
	export interface DeleteInstanceOnboardingJobRequest {
	}

	/** The request for DeleteInstanceOnboardingJob API. */
	export interface DeleteInstanceOnboardingJobRequestFormProperties {
	}
	export function CreateDeleteInstanceOnboardingJobRequestFormGroup() {
		return new FormGroup<DeleteInstanceOnboardingJobRequestFormProperties>({
		});

	}


	/** DescribeCampaignRequests */
	export interface DescribeCampaignRequest {
	}

	/** DescribeCampaignRequests */
	export interface DescribeCampaignRequestFormProperties {
	}
	export function CreateDescribeCampaignRequestFormGroup() {
		return new FormGroup<DescribeCampaignRequestFormProperties>({
		});

	}


	/** A predefined code indicating the error that caused the failure in getting state of campaigns */
	export enum GetCampaignStateBatchFailureCode { ResourceNotFound = 'ResourceNotFound', UnknownError = 'UnknownError' }


	/** A predefined code indicating the error that caused the failure. */
	export enum FailureCode { InvalidInput = 'InvalidInput', RequestThrottled = 'RequestThrottled', UnknownError = 'UnknownError' }


	/** GetCampaignStateBatchRequest */
	export interface GetCampaignStateBatchRequest {

		/**
		 * List of CampaignId
		 * Required
		 * Minimum items: 1
		 * Maximum items: 25
		 */
		campaignIds: Array<string>;
	}

	/** GetCampaignStateBatchRequest */
	export interface GetCampaignStateBatchRequestFormProperties {
	}
	export function CreateGetCampaignStateBatchRequestFormGroup() {
		return new FormGroup<GetCampaignStateBatchRequestFormProperties>({
		});

	}


	/** GetCampaignStateRequest */
	export interface GetCampaignStateRequest {
	}

	/** GetCampaignStateRequest */
	export interface GetCampaignStateRequestFormProperties {
	}
	export function CreateGetCampaignStateRequestFormGroup() {
		return new FormGroup<GetCampaignStateRequestFormProperties>({
		});

	}


	/** GetConnectInstanceConfigRequest */
	export interface GetConnectInstanceConfigRequest {
	}

	/** GetConnectInstanceConfigRequest */
	export interface GetConnectInstanceConfigRequestFormProperties {
	}
	export function CreateGetConnectInstanceConfigRequestFormGroup() {
		return new FormGroup<GetConnectInstanceConfigRequestFormProperties>({
		});

	}


	/** GetInstanceOnboardingJobStatusRequest */
	export interface GetInstanceOnboardingJobStatusRequest {
	}

	/** GetInstanceOnboardingJobStatusRequest */
	export interface GetInstanceOnboardingJobStatusRequestFormProperties {
	}
	export function CreateGetInstanceOnboardingJobStatusRequestFormGroup() {
		return new FormGroup<GetInstanceOnboardingJobStatusRequestFormProperties>({
		});

	}


	/** Enumeration of the possible failure codes for instance onboarding job */
	export enum InstanceOnboardingJobFailureCode { EVENT_BRIDGE_ACCESS_DENIED = 'EVENT_BRIDGE_ACCESS_DENIED', EVENT_BRIDGE_MANAGED_RULE_LIMIT_EXCEEDED = 'EVENT_BRIDGE_MANAGED_RULE_LIMIT_EXCEEDED', IAM_ACCESS_DENIED = 'IAM_ACCESS_DENIED', KMS_ACCESS_DENIED = 'KMS_ACCESS_DENIED', KMS_KEY_NOT_FOUND = 'KMS_KEY_NOT_FOUND', INTERNAL_FAILURE = 'INTERNAL_FAILURE' }


	/** Enumeration of the possible states for instance onboarding job */
	export enum InstanceOnboardingJobStatusCode { IN_PROGRESS = 'IN_PROGRESS', SUCCEEDED = 'SUCCEEDED', FAILED = 'FAILED' }


	/** ListCampaignsRequest */
	export interface ListCampaignsRequest {

		/** Filter model by type */
		filters?: CampaignFilters;

		/**
		 * The maximum number of results to return per page.
		 * Minimum: 1
		 * Maximum: 50
		 */
		maxResults?: number | null;

		/**
		 * The token for the next set of results.
		 * Max length: 1000
		 * Min length: 0
		 */
		nextToken?: string | null;
	}

	/** ListCampaignsRequest */
	export interface ListCampaignsRequestFormProperties {

		/**
		 * The maximum number of results to return per page.
		 * Minimum: 1
		 * Maximum: 50
		 */
		maxResults: FormControl<number | null | undefined>,

		/**
		 * The token for the next set of results.
		 * Max length: 1000
		 * Min length: 0
		 */
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListCampaignsRequestFormGroup() {
		return new FormGroup<ListCampaignsRequestFormProperties>({
			maxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(50)]),
			nextToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(1000)]),
		});

	}


	/** ListTagsForResource */
	export interface ListTagsForResourceRequest {
	}

	/** ListTagsForResource */
	export interface ListTagsForResourceRequestFormProperties {
	}
	export function CreateListTagsForResourceRequestFormGroup() {
		return new FormGroup<ListTagsForResourceRequestFormProperties>({
		});

	}


	/** PauseCampaignRequest */
	export interface PauseCampaignRequest {
	}

	/** PauseCampaignRequest */
	export interface PauseCampaignRequestFormProperties {
	}
	export function CreatePauseCampaignRequestFormGroup() {
		return new FormGroup<PauseCampaignRequestFormProperties>({
		});

	}


	/** PutDialRequestBatchRequest */
	export interface PutDialRequestBatchRequest {

		/**
		 * A list of dial requests.
		 * Required
		 * Minimum items: 1
		 * Maximum items: 25
		 */
		dialRequests: Array<DialRequest>;
	}

	/** PutDialRequestBatchRequest */
	export interface PutDialRequestBatchRequestFormProperties {
	}
	export function CreatePutDialRequestBatchRequestFormGroup() {
		return new FormGroup<PutDialRequestBatchRequestFormProperties>({
		});

	}


	/** ResumeCampaignRequest */
	export interface ResumeCampaignRequest {
	}

	/** ResumeCampaignRequest */
	export interface ResumeCampaignRequestFormProperties {
	}
	export function CreateResumeCampaignRequestFormGroup() {
		return new FormGroup<ResumeCampaignRequestFormProperties>({
		});

	}


	/** StartCampaignRequest */
	export interface StartCampaignRequest {
	}

	/** StartCampaignRequest */
	export interface StartCampaignRequestFormProperties {
	}
	export function CreateStartCampaignRequestFormGroup() {
		return new FormGroup<StartCampaignRequestFormProperties>({
		});

	}


	/** The request for StartInstanceOnboardingJob API. */
	export interface StartInstanceOnboardingJobRequest {

		/**
		 * Encryption config for Connect Instance. Note that sensitive data will always be encrypted. If disabled, service will perform encryption with its own key. If enabled, a KMS key id needs to be provided and KMS charges will apply. KMS is only type supported
		 * Required
		 */
		encryptionConfig: EncryptionConfig;
	}

	/** The request for StartInstanceOnboardingJob API. */
	export interface StartInstanceOnboardingJobRequestFormProperties {
	}
	export function CreateStartInstanceOnboardingJobRequestFormGroup() {
		return new FormGroup<StartInstanceOnboardingJobRequestFormProperties>({
		});

	}


	/** StopCampaignRequest */
	export interface StopCampaignRequest {
	}

	/** StopCampaignRequest */
	export interface StopCampaignRequestFormProperties {
	}
	export function CreateStopCampaignRequestFormGroup() {
		return new FormGroup<StopCampaignRequestFormProperties>({
		});

	}


	/** TagResourceRequest */
	export interface TagResourceRequest {

		/**
		 * Tag map with key and value.
		 * Required
		 */
		tags: TagMap;
	}

	/** TagResourceRequest */
	export interface TagResourceRequestFormProperties {
	}
	export function CreateTagResourceRequestFormGroup() {
		return new FormGroup<TagResourceRequestFormProperties>({
		});

	}


	/** UntagResourceRequest */
	export interface UntagResourceRequest {
	}

	/** UntagResourceRequest */
	export interface UntagResourceRequestFormProperties {
	}
	export function CreateUntagResourceRequestFormGroup() {
		return new FormGroup<UntagResourceRequestFormProperties>({
		});

	}


	/** UpdateCampaignDialerConfigRequest */
	export interface UpdateCampaignDialerConfigRequest {

		/**
		 * The possible types of dialer config parameters
		 * Required
		 */
		dialerConfig: DialerConfig;
	}

	/** UpdateCampaignDialerConfigRequest */
	export interface UpdateCampaignDialerConfigRequestFormProperties {
	}
	export function CreateUpdateCampaignDialerConfigRequestFormGroup() {
		return new FormGroup<UpdateCampaignDialerConfigRequestFormProperties>({
		});

	}


	/** UpdateCampaignNameRequest */
	export interface UpdateCampaignNameRequest {

		/**
		 * The name of an Amazon Connect Campaign name.
		 * Required
		 * Max length: 127
		 * Min length: 1
		 */
		name: string;
	}

	/** UpdateCampaignNameRequest */
	export interface UpdateCampaignNameRequestFormProperties {

		/**
		 * The name of an Amazon Connect Campaign name.
		 * Required
		 * Max length: 127
		 * Min length: 1
		 */
		name: FormControl<string | null | undefined>,
	}
	export function CreateUpdateCampaignNameRequestFormGroup() {
		return new FormGroup<UpdateCampaignNameRequestFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(127)]),
		});

	}


	/** UpdateCampaignOutboundCallConfigRequest */
	export interface UpdateCampaignOutboundCallConfigRequest {

		/** Answering Machine Detection config */
		answerMachineDetectionConfig?: AnswerMachineDetectionConfig;

		/**
		 * The identifier of the contact flow for the outbound call.
		 * Max length: 500
		 * Min length: 0
		 */
		connectContactFlowId?: string | null;

		/**
		 * The phone number associated with the Amazon Connect instance, in E.164 format. If you do not specify a source phone number, you must specify a queue.
		 * Max length: 100
		 * Min length: 0
		 */
		connectSourcePhoneNumber?: string | null;
	}

	/** UpdateCampaignOutboundCallConfigRequest */
	export interface UpdateCampaignOutboundCallConfigRequestFormProperties {

		/**
		 * The identifier of the contact flow for the outbound call.
		 * Max length: 500
		 * Min length: 0
		 */
		connectContactFlowId: FormControl<string | null | undefined>,

		/**
		 * The phone number associated with the Amazon Connect instance, in E.164 format. If you do not specify a source phone number, you must specify a queue.
		 * Max length: 100
		 * Min length: 0
		 */
		connectSourcePhoneNumber: FormControl<string | null | undefined>,
	}
	export function CreateUpdateCampaignOutboundCallConfigRequestFormGroup() {
		return new FormGroup<UpdateCampaignOutboundCallConfigRequestFormProperties>({
			connectContactFlowId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(500)]),
			connectSourcePhoneNumber: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(100)]),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Creates a campaign for the specified Amazon Connect account. This API is idempotent.
		 * Put campaigns
		 * @return {CreateCampaignResponse} Success
		 */
		CreateCampaign(requestBody: CreateCampaignPutBody): Observable<CreateCampaignResponse> {
			return this.http.put<CreateCampaignResponse>(this.baseUri + 'campaigns', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a campaign from the specified Amazon Connect account.
		 * Delete campaigns/{id}
		 * @return {void} Success
		 */
		DeleteCampaign(id: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'campaigns/' + (id == null ? '' : encodeURIComponent(id)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Describes the specific campaign.
		 * Get campaigns/{id}
		 * @return {DescribeCampaignResponse} Success
		 */
		DescribeCampaign(id: string): Observable<DescribeCampaignResponse> {
			return this.http.get<DescribeCampaignResponse>(this.baseUri + 'campaigns/' + (id == null ? '' : encodeURIComponent(id)), {});
		}

		/**
		 * Deletes a connect instance config from the specified AWS account.
		 * Delete connect-instance/{connectInstanceId}/config
		 * @return {void} Success
		 */
		DeleteConnectInstanceConfig(connectInstanceId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'connect-instance/' + (connectInstanceId == null ? '' : encodeURIComponent(connectInstanceId)) + '/config', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get the specific Connect instance config.
		 * Get connect-instance/{connectInstanceId}/config
		 * @return {GetConnectInstanceConfigResponse} Success
		 */
		GetConnectInstanceConfig(connectInstanceId: string): Observable<GetConnectInstanceConfigResponse> {
			return this.http.get<GetConnectInstanceConfigResponse>(this.baseUri + 'connect-instance/' + (connectInstanceId == null ? '' : encodeURIComponent(connectInstanceId)) + '/config', {});
		}

		/**
		 * Delete the Connect Campaigns onboarding job for the specified Amazon Connect instance.
		 * Delete connect-instance/{connectInstanceId}/onboarding
		 * @return {void} Success
		 */
		DeleteInstanceOnboardingJob(connectInstanceId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'connect-instance/' + (connectInstanceId == null ? '' : encodeURIComponent(connectInstanceId)) + '/onboarding', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get the specific instance onboarding job status.
		 * Get connect-instance/{connectInstanceId}/onboarding
		 * @return {GetInstanceOnboardingJobStatusResponse} Success
		 */
		GetInstanceOnboardingJobStatus(connectInstanceId: string): Observable<GetInstanceOnboardingJobStatusResponse> {
			return this.http.get<GetInstanceOnboardingJobStatusResponse>(this.baseUri + 'connect-instance/' + (connectInstanceId == null ? '' : encodeURIComponent(connectInstanceId)) + '/onboarding', {});
		}

		/**
		 * Onboard the specific Amazon Connect instance to Connect Campaigns.
		 * Put connect-instance/{connectInstanceId}/onboarding
		 * @return {StartInstanceOnboardingJobResponse} Success
		 */
		StartInstanceOnboardingJob(connectInstanceId: string, requestBody: StartInstanceOnboardingJobPutBody): Observable<StartInstanceOnboardingJobResponse> {
			return this.http.put<StartInstanceOnboardingJobResponse>(this.baseUri + 'connect-instance/' + (connectInstanceId == null ? '' : encodeURIComponent(connectInstanceId)) + '/onboarding', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Get state of a campaign for the specified Amazon Connect account.
		 * Get campaigns/{id}/state
		 * @return {GetCampaignStateResponse} Success
		 */
		GetCampaignState(id: string): Observable<GetCampaignStateResponse> {
			return this.http.get<GetCampaignStateResponse>(this.baseUri + 'campaigns/' + (id == null ? '' : encodeURIComponent(id)) + '/state', {});
		}

		/**
		 * Get state of campaigns for the specified Amazon Connect account.
		 * Post campaigns-state
		 * @return {GetCampaignStateBatchResponse} Success
		 */
		GetCampaignStateBatch(requestBody: GetCampaignStateBatchPostBody): Observable<GetCampaignStateBatchResponse> {
			return this.http.post<GetCampaignStateBatchResponse>(this.baseUri + 'campaigns-state', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Provides summary information about the campaigns under the specified Amazon Connect account.
		 * Post campaigns-summary
		 * @param {string} maxResults Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {ListCampaignsResponse} Success
		 */
		ListCampaigns(maxResults: string | null | undefined, nextToken: string | null | undefined, requestBody: ListCampaignsPostBody): Observable<ListCampaignsResponse> {
			return this.http.post<ListCampaignsResponse>(this.baseUri + 'campaigns-summary?maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * List tags for a resource.
		 * Get tags/{arn}
		 * @return {ListTagsForResourceResponse} Success
		 */
		ListTagsForResource(arn: string): Observable<ListTagsForResourceResponse> {
			return this.http.get<ListTagsForResourceResponse>(this.baseUri + 'tags/' + (arn == null ? '' : encodeURIComponent(arn)), {});
		}

		/**
		 * Tag a resource.
		 * Post tags/{arn}
		 * @return {void} Success
		 */
		TagResource(arn: string, requestBody: TagResourcePostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'tags/' + (arn == null ? '' : encodeURIComponent(arn)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Pauses a campaign for the specified Amazon Connect account.
		 * Post campaigns/{id}/pause
		 * @return {void} Success
		 */
		PauseCampaign(id: string): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'campaigns/' + (id == null ? '' : encodeURIComponent(id)) + '/pause', null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Creates dials requests for the specified campaign Amazon Connect account. This API is idempotent.
		 * Put campaigns/{id}/dial-requests
		 * @return {PutDialRequestBatchResponse} Success
		 */
		PutDialRequestBatch(id: string, requestBody: PutDialRequestBatchPutBody): Observable<PutDialRequestBatchResponse> {
			return this.http.put<PutDialRequestBatchResponse>(this.baseUri + 'campaigns/' + (id == null ? '' : encodeURIComponent(id)) + '/dial-requests', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Stops a campaign for the specified Amazon Connect account.
		 * Post campaigns/{id}/resume
		 * @return {void} Success
		 */
		ResumeCampaign(id: string): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'campaigns/' + (id == null ? '' : encodeURIComponent(id)) + '/resume', null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Starts a campaign for the specified Amazon Connect account.
		 * Post campaigns/{id}/start
		 * @return {void} Success
		 */
		StartCampaign(id: string): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'campaigns/' + (id == null ? '' : encodeURIComponent(id)) + '/start', null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Stops a campaign for the specified Amazon Connect account.
		 * Post campaigns/{id}/stop
		 * @return {void} Success
		 */
		StopCampaign(id: string): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'campaigns/' + (id == null ? '' : encodeURIComponent(id)) + '/stop', null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Untag a resource.
		 * Delete tags/{arn}#tagKeys
		 * @return {void} Success
		 */
		UntagResource(arn: string, tagKeys: Array<string>): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'tags/' + (arn == null ? '' : encodeURIComponent(arn)) + '#tagKeys&' + tagKeys.map(z => `tagKeys=${encodeURIComponent(z)}`).join('&'), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Updates the dialer config of a campaign. This API is idempotent.
		 * Post campaigns/{id}/dialer-config
		 * @return {void} Success
		 */
		UpdateCampaignDialerConfig(id: string, requestBody: UpdateCampaignDialerConfigPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'campaigns/' + (id == null ? '' : encodeURIComponent(id)) + '/dialer-config', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Updates the name of a campaign. This API is idempotent.
		 * Post campaigns/{id}/name
		 * @return {void} Success
		 */
		UpdateCampaignName(id: string, requestBody: UpdateCampaignNamePostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'campaigns/' + (id == null ? '' : encodeURIComponent(id)) + '/name', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Updates the outbound call config of a campaign. This API is idempotent.
		 * Post campaigns/{id}/outbound-call-config
		 * @return {void} Success
		 */
		UpdateCampaignOutboundCallConfig(id: string, requestBody: UpdateCampaignOutboundCallConfigPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'campaigns/' + (id == null ? '' : encodeURIComponent(id)) + '/outbound-call-config', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}
	}

	export interface CreateCampaignPutBody {

		/**
		 * Amazon Connect Instance Id
		 * Required
		 * Max length: 256
		 * Min length: 0
		 */
		connectInstanceId: string;

		/**
		 * The possible types of dialer config parameters
		 * Required
		 */
		dialerConfig: CreateCampaignPutBodyDialerConfig;

		/**
		 * The name of an Amazon Connect Campaign name.
		 * Required
		 * Max length: 127
		 * Min length: 1
		 */
		name: string;

		/**
		 * The configuration used for outbound calls.
		 * Required
		 */
		outboundCallConfig: CreateCampaignPutBodyOutboundCallConfig;

		/** Tag map with key and value. */
		tags?: {[id: string]: string };
	}
	export interface CreateCampaignPutBodyFormProperties {

		/**
		 * Amazon Connect Instance Id
		 * Required
		 * Max length: 256
		 * Min length: 0
		 */
		connectInstanceId: FormControl<string | null | undefined>,

		/**
		 * The name of an Amazon Connect Campaign name.
		 * Required
		 * Max length: 127
		 * Min length: 1
		 */
		name: FormControl<string | null | undefined>,

		/** Tag map with key and value. */
		tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateCreateCampaignPutBodyFormGroup() {
		return new FormGroup<CreateCampaignPutBodyFormProperties>({
			connectInstanceId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(0), Validators.maxLength(256)]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(127)]),
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}

	export interface CreateCampaignPutBodyDialerConfig {

		/** Predictive Dialer config */
		predictiveDialerConfig?: PredictiveDialerConfig;

		/** Progressive Dialer config */
		progressiveDialerConfig?: ProgressiveDialerConfig;
	}
	export interface CreateCampaignPutBodyDialerConfigFormProperties {
	}
	export function CreateCreateCampaignPutBodyDialerConfigFormGroup() {
		return new FormGroup<CreateCampaignPutBodyDialerConfigFormProperties>({
		});

	}

	export interface CreateCampaignPutBodyOutboundCallConfig {

		/** Answering Machine Detection config */
		answerMachineDetectionConfig?: AnswerMachineDetectionConfig;

		/**
		 * The identifier of the contact flow for the outbound call.
		 * Max length: 500
		 * Min length: 0
		 */
		connectContactFlowId?: string | null;

		/**
		 * The queue for the call. If you specify a queue, the phone displayed for caller ID is the phone number specified in the queue. If you do not specify a queue, the queue defined in the contact flow is used. If you do not specify a queue, you must specify a source phone number.
		 * Max length: 500
		 * Min length: 0
		 */
		connectQueueId?: string | null;

		/**
		 * The phone number associated with the Amazon Connect instance, in E.164 format. If you do not specify a source phone number, you must specify a queue.
		 * Max length: 100
		 * Min length: 0
		 */
		connectSourcePhoneNumber?: string | null;
	}
	export interface CreateCampaignPutBodyOutboundCallConfigFormProperties {

		/**
		 * The identifier of the contact flow for the outbound call.
		 * Max length: 500
		 * Min length: 0
		 */
		connectContactFlowId: FormControl<string | null | undefined>,

		/**
		 * The queue for the call. If you specify a queue, the phone displayed for caller ID is the phone number specified in the queue. If you do not specify a queue, the queue defined in the contact flow is used. If you do not specify a queue, you must specify a source phone number.
		 * Max length: 500
		 * Min length: 0
		 */
		connectQueueId: FormControl<string | null | undefined>,

		/**
		 * The phone number associated with the Amazon Connect instance, in E.164 format. If you do not specify a source phone number, you must specify a queue.
		 * Max length: 100
		 * Min length: 0
		 */
		connectSourcePhoneNumber: FormControl<string | null | undefined>,
	}
	export function CreateCreateCampaignPutBodyOutboundCallConfigFormGroup() {
		return new FormGroup<CreateCampaignPutBodyOutboundCallConfigFormProperties>({
			connectContactFlowId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(500)]),
			connectQueueId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(500)]),
			connectSourcePhoneNumber: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(100)]),
		});

	}

	export interface StartInstanceOnboardingJobPutBody {

		/**
		 * Encryption config for Connect Instance. Note that sensitive data will always be encrypted. If disabled, service will perform encryption with its own key. If enabled, a KMS key id needs to be provided and KMS charges will apply. KMS is only type supported
		 * Required
		 */
		encryptionConfig: StartInstanceOnboardingJobPutBodyEncryptionConfig;
	}
	export interface StartInstanceOnboardingJobPutBodyFormProperties {
	}
	export function CreateStartInstanceOnboardingJobPutBodyFormGroup() {
		return new FormGroup<StartInstanceOnboardingJobPutBodyFormProperties>({
		});

	}

	export interface StartInstanceOnboardingJobPutBodyEncryptionConfig {

		/** Boolean to indicate if custom encryption has been enabled. */
		enabled?: boolean | null;

		/** Server-side encryption type. */
		encryptionType?: EncryptionConfigEncryptionType | null;

		/**
		 * KMS key id/arn for encryption config.
		 * Max length: 500
		 * Min length: 0
		 */
		keyArn?: string | null;
	}
	export interface StartInstanceOnboardingJobPutBodyEncryptionConfigFormProperties {

		/** Boolean to indicate if custom encryption has been enabled. */
		enabled: FormControl<boolean | null | undefined>,

		/** Server-side encryption type. */
		encryptionType: FormControl<EncryptionConfigEncryptionType | null | undefined>,

		/**
		 * KMS key id/arn for encryption config.
		 * Max length: 500
		 * Min length: 0
		 */
		keyArn: FormControl<string | null | undefined>,
	}
	export function CreateStartInstanceOnboardingJobPutBodyEncryptionConfigFormGroup() {
		return new FormGroup<StartInstanceOnboardingJobPutBodyEncryptionConfigFormProperties>({
			enabled: new FormControl<boolean | null | undefined>(undefined),
			encryptionType: new FormControl<EncryptionConfigEncryptionType | null | undefined>(undefined),
			keyArn: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(500)]),
		});

	}

	export interface GetCampaignStateBatchPostBody {

		/**
		 * List of CampaignId
		 * Required
		 * Minimum items: 1
		 * Maximum items: 25
		 */
		campaignIds: Array<string>;
	}
	export interface GetCampaignStateBatchPostBodyFormProperties {
	}
	export function CreateGetCampaignStateBatchPostBodyFormGroup() {
		return new FormGroup<GetCampaignStateBatchPostBodyFormProperties>({
		});

	}

	export interface ListCampaignsPostBody {

		/** Filter model by type */
		filters?: ListCampaignsPostBodyFilters;

		/**
		 * The maximum number of results to return per page.
		 * Minimum: 1
		 * Maximum: 50
		 */
		maxResults?: number | null;

		/**
		 * The token for the next set of results.
		 * Max length: 1000
		 * Min length: 0
		 */
		nextToken?: string | null;
	}
	export interface ListCampaignsPostBodyFormProperties {

		/**
		 * The maximum number of results to return per page.
		 * Minimum: 1
		 * Maximum: 50
		 */
		maxResults: FormControl<number | null | undefined>,

		/**
		 * The token for the next set of results.
		 * Max length: 1000
		 * Min length: 0
		 */
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListCampaignsPostBodyFormGroup() {
		return new FormGroup<ListCampaignsPostBodyFormProperties>({
			maxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(50)]),
			nextToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(1000)]),
		});

	}

	export interface ListCampaignsPostBodyFilters {

		/** Connect instance identifier filter */
		instanceIdFilter?: InstanceIdFilter;
	}
	export interface ListCampaignsPostBodyFiltersFormProperties {
	}
	export function CreateListCampaignsPostBodyFiltersFormGroup() {
		return new FormGroup<ListCampaignsPostBodyFiltersFormProperties>({
		});

	}

	export interface TagResourcePostBody {

		/**
		 * Tag map with key and value.
		 * Required
		 */
		tags: {[id: string]: string };
	}
	export interface TagResourcePostBodyFormProperties {

		/**
		 * Tag map with key and value.
		 * Required
		 */
		tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateTagResourcePostBodyFormGroup() {
		return new FormGroup<TagResourcePostBodyFormProperties>({
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface PutDialRequestBatchPutBody {

		/**
		 * A list of dial requests.
		 * Required
		 * Minimum items: 1
		 * Maximum items: 25
		 */
		dialRequests: Array<DialRequest>;
	}
	export interface PutDialRequestBatchPutBodyFormProperties {
	}
	export function CreatePutDialRequestBatchPutBodyFormGroup() {
		return new FormGroup<PutDialRequestBatchPutBodyFormProperties>({
		});

	}

	export interface UpdateCampaignDialerConfigPostBody {

		/**
		 * The possible types of dialer config parameters
		 * Required
		 */
		dialerConfig: UpdateCampaignDialerConfigPostBodyDialerConfig;
	}
	export interface UpdateCampaignDialerConfigPostBodyFormProperties {
	}
	export function CreateUpdateCampaignDialerConfigPostBodyFormGroup() {
		return new FormGroup<UpdateCampaignDialerConfigPostBodyFormProperties>({
		});

	}

	export interface UpdateCampaignDialerConfigPostBodyDialerConfig {

		/** Predictive Dialer config */
		predictiveDialerConfig?: PredictiveDialerConfig;

		/** Progressive Dialer config */
		progressiveDialerConfig?: ProgressiveDialerConfig;
	}
	export interface UpdateCampaignDialerConfigPostBodyDialerConfigFormProperties {
	}
	export function CreateUpdateCampaignDialerConfigPostBodyDialerConfigFormGroup() {
		return new FormGroup<UpdateCampaignDialerConfigPostBodyDialerConfigFormProperties>({
		});

	}

	export interface UpdateCampaignNamePostBody {

		/**
		 * The name of an Amazon Connect Campaign name.
		 * Required
		 * Max length: 127
		 * Min length: 1
		 */
		name: string;
	}
	export interface UpdateCampaignNamePostBodyFormProperties {

		/**
		 * The name of an Amazon Connect Campaign name.
		 * Required
		 * Max length: 127
		 * Min length: 1
		 */
		name: FormControl<string | null | undefined>,
	}
	export function CreateUpdateCampaignNamePostBodyFormGroup() {
		return new FormGroup<UpdateCampaignNamePostBodyFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(127)]),
		});

	}

	export interface UpdateCampaignOutboundCallConfigPostBody {

		/** Answering Machine Detection config */
		answerMachineDetectionConfig?: UpdateCampaignOutboundCallConfigPostBodyAnswerMachineDetectionConfig;

		/**
		 * The identifier of the contact flow for the outbound call.
		 * Max length: 500
		 * Min length: 0
		 */
		connectContactFlowId?: string | null;

		/**
		 * The phone number associated with the Amazon Connect instance, in E.164 format. If you do not specify a source phone number, you must specify a queue.
		 * Max length: 100
		 * Min length: 0
		 */
		connectSourcePhoneNumber?: string | null;
	}
	export interface UpdateCampaignOutboundCallConfigPostBodyFormProperties {

		/**
		 * The identifier of the contact flow for the outbound call.
		 * Max length: 500
		 * Min length: 0
		 */
		connectContactFlowId: FormControl<string | null | undefined>,

		/**
		 * The phone number associated with the Amazon Connect instance, in E.164 format. If you do not specify a source phone number, you must specify a queue.
		 * Max length: 100
		 * Min length: 0
		 */
		connectSourcePhoneNumber: FormControl<string | null | undefined>,
	}
	export function CreateUpdateCampaignOutboundCallConfigPostBodyFormGroup() {
		return new FormGroup<UpdateCampaignOutboundCallConfigPostBodyFormProperties>({
			connectContactFlowId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(500)]),
			connectSourcePhoneNumber: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(100)]),
		});

	}

	export interface UpdateCampaignOutboundCallConfigPostBodyAnswerMachineDetectionConfig {
		enableAnswerMachineDetection?: boolean | null;
	}
	export interface UpdateCampaignOutboundCallConfigPostBodyAnswerMachineDetectionConfigFormProperties {
		enableAnswerMachineDetection: FormControl<boolean | null | undefined>,
	}
	export function CreateUpdateCampaignOutboundCallConfigPostBodyAnswerMachineDetectionConfigFormGroup() {
		return new FormGroup<UpdateCampaignOutboundCallConfigPostBodyAnswerMachineDetectionConfigFormProperties>({
			enableAnswerMachineDetection: new FormControl<boolean | null | undefined>(undefined),
		});

	}

}

