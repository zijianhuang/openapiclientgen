import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface ResourceNotFoundException {
	}
	export interface ResourceNotFoundExceptionFormProperties {
	}
	export function CreateResourceNotFoundExceptionFormGroup() {
		return new FormGroup<ResourceNotFoundExceptionFormProperties>({
		});

	}

	export interface TransferAlreadyCompletedException {
	}
	export interface TransferAlreadyCompletedExceptionFormProperties {
	}
	export function CreateTransferAlreadyCompletedExceptionFormGroup() {
		return new FormGroup<TransferAlreadyCompletedExceptionFormProperties>({
		});

	}

	export interface InvalidRequestException {
	}
	export interface InvalidRequestExceptionFormProperties {
	}
	export function CreateInvalidRequestExceptionFormGroup() {
		return new FormGroup<InvalidRequestExceptionFormProperties>({
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

	export interface UnauthorizedException {
	}
	export interface UnauthorizedExceptionFormProperties {
	}
	export function CreateUnauthorizedExceptionFormGroup() {
		return new FormGroup<UnauthorizedExceptionFormProperties>({
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

	export interface InternalFailureException {
	}
	export interface InternalFailureExceptionFormProperties {
	}
	export function CreateInternalFailureExceptionFormGroup() {
		return new FormGroup<InternalFailureExceptionFormProperties>({
		});

	}

	export interface AddThingToBillingGroupResponse {
	}
	export interface AddThingToBillingGroupResponseFormProperties {
	}
	export function CreateAddThingToBillingGroupResponseFormGroup() {
		return new FormGroup<AddThingToBillingGroupResponseFormProperties>({
		});

	}

	export interface AddThingToThingGroupResponse {
	}
	export interface AddThingToThingGroupResponseFormProperties {
	}
	export function CreateAddThingToThingGroupResponseFormGroup() {
		return new FormGroup<AddThingToThingGroupResponseFormProperties>({
		});

	}

	export interface AssociateTargetsWithJobResponse {
		jobArn?: string | null;

		/**
		 * Max length: 64
		 * Min length: 1
		 */
		jobId?: string | null;

		/** Max length: 2028 */
		description?: string | null;
	}
	export interface AssociateTargetsWithJobResponseFormProperties {
		jobArn: FormControl<string | null | undefined>,

		/**
		 * Max length: 64
		 * Min length: 1
		 */
		jobId: FormControl<string | null | undefined>,

		/** Max length: 2028 */
		description: FormControl<string | null | undefined>,
	}
	export function CreateAssociateTargetsWithJobResponseFormGroup() {
		return new FormGroup<AssociateTargetsWithJobResponseFormProperties>({
			jobArn: new FormControl<string | null | undefined>(undefined),
			jobId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(64), Validators.pattern('[a-zA-Z0-9_-]+')]),
			description: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(2028), Validators.pattern('[^\p{C}]+')]),
		});

	}

	export interface LimitExceededException {
	}
	export interface LimitExceededExceptionFormProperties {
	}
	export function CreateLimitExceededExceptionFormGroup() {
		return new FormGroup<LimitExceededExceptionFormProperties>({
		});

	}

	export interface AttachSecurityProfileResponse {
	}
	export interface AttachSecurityProfileResponseFormProperties {
	}
	export function CreateAttachSecurityProfileResponseFormGroup() {
		return new FormGroup<AttachSecurityProfileResponseFormProperties>({
		});

	}

	export interface VersionConflictException {
	}
	export interface VersionConflictExceptionFormProperties {
	}
	export function CreateVersionConflictExceptionFormGroup() {
		return new FormGroup<VersionConflictExceptionFormProperties>({
		});

	}


	/** The output from the AttachThingPrincipal operation. */
	export interface AttachThingPrincipalResponse {
	}

	/** The output from the AttachThingPrincipal operation. */
	export interface AttachThingPrincipalResponseFormProperties {
	}
	export function CreateAttachThingPrincipalResponseFormGroup() {
		return new FormGroup<AttachThingPrincipalResponseFormProperties>({
		});

	}

	export interface CancelAuditMitigationActionsTaskResponse {
	}
	export interface CancelAuditMitigationActionsTaskResponseFormProperties {
	}
	export function CreateCancelAuditMitigationActionsTaskResponseFormGroup() {
		return new FormGroup<CancelAuditMitigationActionsTaskResponseFormProperties>({
		});

	}

	export interface CancelAuditTaskResponse {
	}
	export interface CancelAuditTaskResponseFormProperties {
	}
	export function CreateCancelAuditTaskResponseFormGroup() {
		return new FormGroup<CancelAuditTaskResponseFormProperties>({
		});

	}

	export interface CancelJobResponse {
		jobArn?: string | null;

		/**
		 * Max length: 64
		 * Min length: 1
		 */
		jobId?: string | null;

		/** Max length: 2028 */
		description?: string | null;
	}
	export interface CancelJobResponseFormProperties {
		jobArn: FormControl<string | null | undefined>,

		/**
		 * Max length: 64
		 * Min length: 1
		 */
		jobId: FormControl<string | null | undefined>,

		/** Max length: 2028 */
		description: FormControl<string | null | undefined>,
	}
	export function CreateCancelJobResponseFormGroup() {
		return new FormGroup<CancelJobResponseFormProperties>({
			jobArn: new FormControl<string | null | undefined>(undefined),
			jobId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(64), Validators.pattern('[a-zA-Z0-9_-]+')]),
			description: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(2028), Validators.pattern('[^\p{C}]+')]),
		});

	}

	export interface InvalidStateTransitionException {
	}
	export interface InvalidStateTransitionExceptionFormProperties {
	}
	export function CreateInvalidStateTransitionExceptionFormGroup() {
		return new FormGroup<InvalidStateTransitionExceptionFormProperties>({
		});

	}

	export interface ClearDefaultAuthorizerResponse {
	}
	export interface ClearDefaultAuthorizerResponseFormProperties {
	}
	export function CreateClearDefaultAuthorizerResponseFormGroup() {
		return new FormGroup<ClearDefaultAuthorizerResponseFormProperties>({
		});

	}

	export interface ConfirmTopicRuleDestinationResponse {
	}
	export interface ConfirmTopicRuleDestinationResponseFormProperties {
	}
	export function CreateConfirmTopicRuleDestinationResponseFormGroup() {
		return new FormGroup<ConfirmTopicRuleDestinationResponseFormProperties>({
		});

	}

	export interface InternalException {
	}
	export interface InternalExceptionFormProperties {
	}
	export function CreateInternalExceptionFormGroup() {
		return new FormGroup<InternalExceptionFormProperties>({
		});

	}

	export interface ConflictingResourceUpdateException {
	}
	export interface ConflictingResourceUpdateExceptionFormProperties {
	}
	export function CreateConflictingResourceUpdateExceptionFormGroup() {
		return new FormGroup<ConflictingResourceUpdateExceptionFormProperties>({
		});

	}

	export interface CreateAuthorizerResponse {

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		authorizerName?: string | null;
		authorizerArn?: string | null;
	}
	export interface CreateAuthorizerResponseFormProperties {

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		authorizerName: FormControl<string | null | undefined>,
		authorizerArn: FormControl<string | null | undefined>,
	}
	export function CreateCreateAuthorizerResponseFormGroup() {
		return new FormGroup<CreateAuthorizerResponseFormProperties>({
			authorizerName: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(128), Validators.pattern('[\w=,@-]+')]),
			authorizerArn: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A set of key/value pairs that are used to manage the resource. */
	export interface Tag {

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		Key: string;

		/**
		 * Max length: 256
		 * Min length: 1
		 */
		Value?: string | null;
	}

	/** A set of key/value pairs that are used to manage the resource. */
	export interface TagFormProperties {

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		Key: FormControl<string | null | undefined>,

		/**
		 * Max length: 256
		 * Min length: 1
		 */
		Value: FormControl<string | null | undefined>,
	}
	export function CreateTagFormGroup() {
		return new FormGroup<TagFormProperties>({
			Key: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(128), Validators.pattern('^([\p{L}\p{Z}\p{N}_.:/=+\-@]*)$')]),
			Value: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(256)]),
		});

	}

	export interface ResourceAlreadyExistsException {
	}
	export interface ResourceAlreadyExistsExceptionFormProperties {
	}
	export function CreateResourceAlreadyExistsExceptionFormGroup() {
		return new FormGroup<ResourceAlreadyExistsExceptionFormProperties>({
		});

	}

	export interface CreateBillingGroupResponse {

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		billingGroupName?: string | null;
		billingGroupArn?: string | null;

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		billingGroupId?: string | null;
	}
	export interface CreateBillingGroupResponseFormProperties {

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		billingGroupName: FormControl<string | null | undefined>,
		billingGroupArn: FormControl<string | null | undefined>,

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		billingGroupId: FormControl<string | null | undefined>,
	}
	export function CreateCreateBillingGroupResponseFormGroup() {
		return new FormGroup<CreateBillingGroupResponseFormProperties>({
			billingGroupName: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(128), Validators.pattern('[a-zA-Z0-9:_-]+')]),
			billingGroupArn: new FormControl<string | null | undefined>(undefined),
			billingGroupId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(128), Validators.pattern('[a-zA-Z0-9\-]+')]),
		});

	}


	/** The output from the CreateCertificateFromCsr operation. */
	export interface CreateCertificateFromCsrResponse {
		certificateArn?: string | null;

		/**
		 * Max length: 64
		 * Min length: 64
		 */
		certificateId?: string | null;

		/**
		 * The PEM of a certificate.
		 * Max length: 65536
		 * Min length: 1
		 */
		certificatePem?: string | null;
	}

	/** The output from the CreateCertificateFromCsr operation. */
	export interface CreateCertificateFromCsrResponseFormProperties {
		certificateArn: FormControl<string | null | undefined>,

		/**
		 * Max length: 64
		 * Min length: 64
		 */
		certificateId: FormControl<string | null | undefined>,

		/**
		 * The PEM of a certificate.
		 * Max length: 65536
		 * Min length: 1
		 */
		certificatePem: FormControl<string | null | undefined>,
	}
	export function CreateCreateCertificateFromCsrResponseFormGroup() {
		return new FormGroup<CreateCertificateFromCsrResponseFormProperties>({
			certificateArn: new FormControl<string | null | undefined>(undefined),
			certificateId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(64), Validators.maxLength(64), Validators.pattern('(0x)?[a-fA-F0-9]+')]),
			certificatePem: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(65536)]),
		});

	}

	export interface CreateDimensionResponse {

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		name?: string | null;
		arn?: string | null;
	}
	export interface CreateDimensionResponseFormProperties {

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		name: FormControl<string | null | undefined>,
		arn: FormControl<string | null | undefined>,
	}
	export function CreateCreateDimensionResponseFormGroup() {
		return new FormGroup<CreateDimensionResponseFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(128), Validators.pattern('[a-zA-Z0-9:_-]+')]),
			arn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateDomainConfigurationResponse {

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		domainConfigurationName?: string | null;
		domainConfigurationArn?: string | null;
	}
	export interface CreateDomainConfigurationResponseFormProperties {

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		domainConfigurationName: FormControl<string | null | undefined>,
		domainConfigurationArn: FormControl<string | null | undefined>,
	}
	export function CreateCreateDomainConfigurationResponseFormGroup() {
		return new FormGroup<CreateDomainConfigurationResponseFormProperties>({
			domainConfigurationName: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(128), Validators.pattern('[\w.-]+')]),
			domainConfigurationArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CertificateValidationException {
	}
	export interface CertificateValidationExceptionFormProperties {
	}
	export function CreateCertificateValidationExceptionFormGroup() {
		return new FormGroup<CertificateValidationExceptionFormProperties>({
		});

	}

	export interface CreateDynamicThingGroupResponse {

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		thingGroupName?: string | null;
		thingGroupArn?: string | null;

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		thingGroupId?: string | null;

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		indexName?: string | null;

		/** Min length: 1 */
		queryString?: string | null;
		queryVersion?: string | null;
	}
	export interface CreateDynamicThingGroupResponseFormProperties {

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		thingGroupName: FormControl<string | null | undefined>,
		thingGroupArn: FormControl<string | null | undefined>,

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		thingGroupId: FormControl<string | null | undefined>,

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		indexName: FormControl<string | null | undefined>,

		/** Min length: 1 */
		queryString: FormControl<string | null | undefined>,
		queryVersion: FormControl<string | null | undefined>,
	}
	export function CreateCreateDynamicThingGroupResponseFormGroup() {
		return new FormGroup<CreateDynamicThingGroupResponseFormProperties>({
			thingGroupName: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(128), Validators.pattern('[a-zA-Z0-9:_-]+')]),
			thingGroupArn: new FormControl<string | null | undefined>(undefined),
			thingGroupId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(128), Validators.pattern('[a-zA-Z0-9\-]+')]),
			indexName: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(128), Validators.pattern('[a-zA-Z0-9:_-]+')]),
			queryString: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1)]),
			queryVersion: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The attribute payload. */
	export interface AttributePayload {
		attributes?: Attributes;
		merge?: boolean | null;
	}

	/** The attribute payload. */
	export interface AttributePayloadFormProperties {
		merge: FormControl<boolean | null | undefined>,
	}
	export function CreateAttributePayloadFormGroup() {
		return new FormGroup<AttributePayloadFormProperties>({
			merge: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface Attributes {
	}
	export interface AttributesFormProperties {
	}
	export function CreateAttributesFormGroup() {
		return new FormGroup<AttributesFormProperties>({
		});

	}

	export interface InvalidQueryException {
	}
	export interface InvalidQueryExceptionFormProperties {
	}
	export function CreateInvalidQueryExceptionFormGroup() {
		return new FormGroup<InvalidQueryExceptionFormProperties>({
		});

	}

	export interface CreateJobResponse {
		jobArn?: string | null;

		/**
		 * Max length: 64
		 * Min length: 1
		 */
		jobId?: string | null;

		/** Max length: 2028 */
		description?: string | null;
	}
	export interface CreateJobResponseFormProperties {
		jobArn: FormControl<string | null | undefined>,

		/**
		 * Max length: 64
		 * Min length: 1
		 */
		jobId: FormControl<string | null | undefined>,

		/** Max length: 2028 */
		description: FormControl<string | null | undefined>,
	}
	export function CreateCreateJobResponseFormGroup() {
		return new FormGroup<CreateJobResponseFormProperties>({
			jobArn: new FormControl<string | null | undefined>(undefined),
			jobId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(64), Validators.pattern('[a-zA-Z0-9_-]+')]),
			description: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(2028), Validators.pattern('[^\p{C}]+')]),
		});

	}


	/** Allows you to create an exponential rate of rollout for a job. */
	export interface ExponentialRolloutRate {

		/**
		 * Required
		 * Minimum: 1
		 * Maximum: 1000
		 */
		baseRatePerMinute: number;

		/**
		 * Required
		 * Minimum: 1
		 * Maximum: 5
		 */
		incrementFactor: number;

		/**
		 * Allows you to define a criteria to initiate the increase in rate of rollout for a job.
		 * Required
		 */
		rateIncreaseCriteria: RateIncreaseCriteria;
	}

	/** Allows you to create an exponential rate of rollout for a job. */
	export interface ExponentialRolloutRateFormProperties {

		/**
		 * Required
		 * Minimum: 1
		 * Maximum: 1000
		 */
		baseRatePerMinute: FormControl<number | null | undefined>,

		/**
		 * Required
		 * Minimum: 1
		 * Maximum: 5
		 */
		incrementFactor: FormControl<number | null | undefined>,
	}
	export function CreateExponentialRolloutRateFormGroup() {
		return new FormGroup<ExponentialRolloutRateFormProperties>({
			baseRatePerMinute: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(1), Validators.max(1000)]),
			incrementFactor: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(1), Validators.max(5)]),
		});

	}


	/** Allows you to define a criteria to initiate the increase in rate of rollout for a job. */
	export interface RateIncreaseCriteria {

		/** Minimum: 1 */
		numberOfNotifiedThings?: number | null;

		/** Minimum: 1 */
		numberOfSucceededThings?: number | null;
	}

	/** Allows you to define a criteria to initiate the increase in rate of rollout for a job. */
	export interface RateIncreaseCriteriaFormProperties {

		/** Minimum: 1 */
		numberOfNotifiedThings: FormControl<number | null | undefined>,

		/** Minimum: 1 */
		numberOfSucceededThings: FormControl<number | null | undefined>,
	}
	export function CreateRateIncreaseCriteriaFormGroup() {
		return new FormGroup<RateIncreaseCriteriaFormProperties>({
			numberOfNotifiedThings: new FormControl<number | null | undefined>(undefined, [Validators.min(1)]),
			numberOfSucceededThings: new FormControl<number | null | undefined>(undefined, [Validators.min(1)]),
		});

	}


	/** Details of abort criteria to define rules to abort the job. */
	export interface AbortCriteria {

		/** Required */
		failureType: AbortCriteriaFailureType;

		/** Required */
		action: AbortCriteriaAction;

		/**
		 * Required
		 * Maximum: 100
		 */
		thresholdPercentage: number;

		/**
		 * Required
		 * Minimum: 1
		 */
		minNumberOfExecutedThings: number;
	}

	/** Details of abort criteria to define rules to abort the job. */
	export interface AbortCriteriaFormProperties {

		/** Required */
		failureType: FormControl<AbortCriteriaFailureType | null | undefined>,

		/** Required */
		action: FormControl<AbortCriteriaAction | null | undefined>,

		/**
		 * Required
		 * Maximum: 100
		 */
		thresholdPercentage: FormControl<number | null | undefined>,

		/**
		 * Required
		 * Minimum: 1
		 */
		minNumberOfExecutedThings: FormControl<number | null | undefined>,
	}
	export function CreateAbortCriteriaFormGroup() {
		return new FormGroup<AbortCriteriaFormProperties>({
			failureType: new FormControl<AbortCriteriaFailureType | null | undefined>(undefined, [Validators.required]),
			action: new FormControl<AbortCriteriaAction | null | undefined>(undefined, [Validators.required]),
			thresholdPercentage: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.max(100)]),
			minNumberOfExecutedThings: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(1)]),
		});

	}

	export enum AbortCriteriaFailureType { FAILED = 0, REJECTED = 1, TIMED_OUT = 2, ALL = 3 }

	export enum AbortCriteriaAction { CANCEL = 0 }


	/** The output of the CreateKeysAndCertificate operation. */
	export interface CreateKeysAndCertificateResponse {
		certificateArn?: string | null;

		/**
		 * Max length: 64
		 * Min length: 64
		 */
		certificateId?: string | null;

		/**
		 * The PEM of a certificate.
		 * Max length: 65536
		 * Min length: 1
		 */
		certificatePem?: string | null;

		/** Describes a key pair. */
		keyPair?: KeyPair;
	}

	/** The output of the CreateKeysAndCertificate operation. */
	export interface CreateKeysAndCertificateResponseFormProperties {
		certificateArn: FormControl<string | null | undefined>,

		/**
		 * Max length: 64
		 * Min length: 64
		 */
		certificateId: FormControl<string | null | undefined>,

		/**
		 * The PEM of a certificate.
		 * Max length: 65536
		 * Min length: 1
		 */
		certificatePem: FormControl<string | null | undefined>,
	}
	export function CreateCreateKeysAndCertificateResponseFormGroup() {
		return new FormGroup<CreateKeysAndCertificateResponseFormProperties>({
			certificateArn: new FormControl<string | null | undefined>(undefined),
			certificateId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(64), Validators.maxLength(64), Validators.pattern('(0x)?[a-fA-F0-9]+')]),
			certificatePem: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(65536)]),
		});

	}


	/** Describes a key pair. */
	export interface KeyPair {

		/** Min length: 1 */
		PublicKey?: string | null;

		/** Min length: 1 */
		PrivateKey?: string | null;
	}

	/** Describes a key pair. */
	export interface KeyPairFormProperties {

		/** Min length: 1 */
		PublicKey: FormControl<string | null | undefined>,

		/** Min length: 1 */
		PrivateKey: FormControl<string | null | undefined>,
	}
	export function CreateKeyPairFormGroup() {
		return new FormGroup<KeyPairFormProperties>({
			PublicKey: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1)]),
			PrivateKey: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1)]),
		});

	}

	export interface CreateMitigationActionResponse {
		actionArn?: string | null;
		actionId?: string | null;
	}
	export interface CreateMitigationActionResponseFormProperties {
		actionArn: FormControl<string | null | undefined>,
		actionId: FormControl<string | null | undefined>,
	}
	export function CreateCreateMitigationActionResponseFormGroup() {
		return new FormGroup<CreateMitigationActionResponseFormProperties>({
			actionArn: new FormControl<string | null | undefined>(undefined),
			actionId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Parameters to define a mitigation action that changes the state of the device certificate to inactive. */
	export interface UpdateDeviceCertificateParams {

		/** Required */
		action: UpdateDeviceCertificateParamsAction;
	}

	/** Parameters to define a mitigation action that changes the state of the device certificate to inactive. */
	export interface UpdateDeviceCertificateParamsFormProperties {

		/** Required */
		action: FormControl<UpdateDeviceCertificateParamsAction | null | undefined>,
	}
	export function CreateUpdateDeviceCertificateParamsFormGroup() {
		return new FormGroup<UpdateDeviceCertificateParamsFormProperties>({
			action: new FormControl<UpdateDeviceCertificateParamsAction | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum UpdateDeviceCertificateParamsAction { DEACTIVATE = 0 }


	/** Parameters to define a mitigation action that changes the state of the CA certificate to inactive. */
	export interface UpdateCACertificateParams {

		/** Required */
		action: UpdateDeviceCertificateParamsAction;
	}

	/** Parameters to define a mitigation action that changes the state of the CA certificate to inactive. */
	export interface UpdateCACertificateParamsFormProperties {

		/** Required */
		action: FormControl<UpdateDeviceCertificateParamsAction | null | undefined>,
	}
	export function CreateUpdateCACertificateParamsFormGroup() {
		return new FormGroup<UpdateCACertificateParamsFormProperties>({
			action: new FormControl<UpdateDeviceCertificateParamsAction | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Parameters used when defining a mitigation action that move a set of things to a thing group. */
	export interface AddThingsToThingGroupParams {

		/**
		 * Required
		 * Minimum items: 1
		 * Maximum items: 10
		 */
		thingGroupNames: Array<string>;
		overrideDynamicGroups?: boolean | null;
	}

	/** Parameters used when defining a mitigation action that move a set of things to a thing group. */
	export interface AddThingsToThingGroupParamsFormProperties {
		overrideDynamicGroups: FormControl<boolean | null | undefined>,
	}
	export function CreateAddThingsToThingGroupParamsFormGroup() {
		return new FormGroup<AddThingsToThingGroupParamsFormProperties>({
			overrideDynamicGroups: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Parameters to define a mitigation action that adds a blank policy to restrict permissions. */
	export interface ReplaceDefaultPolicyVersionParams {

		/** Required */
		templateName: ReplaceDefaultPolicyVersionParamsTemplateName;
	}

	/** Parameters to define a mitigation action that adds a blank policy to restrict permissions. */
	export interface ReplaceDefaultPolicyVersionParamsFormProperties {

		/** Required */
		templateName: FormControl<ReplaceDefaultPolicyVersionParamsTemplateName | null | undefined>,
	}
	export function CreateReplaceDefaultPolicyVersionParamsFormGroup() {
		return new FormGroup<ReplaceDefaultPolicyVersionParamsFormProperties>({
			templateName: new FormControl<ReplaceDefaultPolicyVersionParamsTemplateName | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum ReplaceDefaultPolicyVersionParamsTemplateName { BLANK_POLICY = 0 }


	/** Parameters used when defining a mitigation action that enable AWS IoT logging. */
	export interface EnableIoTLoggingParams {

		/**
		 * Required
		 * Max length: 2048
		 * Min length: 20
		 */
		roleArnForLogging: string;

		/** Required */
		logLevel: EnableIoTLoggingParamsLogLevel;
	}

	/** Parameters used when defining a mitigation action that enable AWS IoT logging. */
	export interface EnableIoTLoggingParamsFormProperties {

		/**
		 * Required
		 * Max length: 2048
		 * Min length: 20
		 */
		roleArnForLogging: FormControl<string | null | undefined>,

		/** Required */
		logLevel: FormControl<EnableIoTLoggingParamsLogLevel | null | undefined>,
	}
	export function CreateEnableIoTLoggingParamsFormGroup() {
		return new FormGroup<EnableIoTLoggingParamsFormProperties>({
			roleArnForLogging: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(20), Validators.maxLength(2048)]),
			logLevel: new FormControl<EnableIoTLoggingParamsLogLevel | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum EnableIoTLoggingParamsLogLevel { DEBUG = 0, INFO = 1, ERROR = 2, WARN = 3, DISABLED = 4 }


	/** Parameters to define a mitigation action that publishes findings to Amazon SNS. You can implement your own custom actions in response to the Amazon SNS messages. */
	export interface PublishFindingToSnsParams {

		/**
		 * Required
		 * Max length: 350
		 */
		topicArn: string;
	}

	/** Parameters to define a mitigation action that publishes findings to Amazon SNS. You can implement your own custom actions in response to the Amazon SNS messages. */
	export interface PublishFindingToSnsParamsFormProperties {

		/**
		 * Required
		 * Max length: 350
		 */
		topicArn: FormControl<string | null | undefined>,
	}
	export function CreatePublishFindingToSnsParamsFormGroup() {
		return new FormGroup<PublishFindingToSnsParamsFormProperties>({
			topicArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(350)]),
		});

	}

	export interface CreateOTAUpdateResponse {

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		otaUpdateId?: string | null;
		awsIotJobId?: string | null;
		otaUpdateArn?: string | null;
		awsIotJobArn?: string | null;
		otaUpdateStatus?: CreateOTAUpdateResponseOtaUpdateStatus | null;
	}
	export interface CreateOTAUpdateResponseFormProperties {

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		otaUpdateId: FormControl<string | null | undefined>,
		awsIotJobId: FormControl<string | null | undefined>,
		otaUpdateArn: FormControl<string | null | undefined>,
		awsIotJobArn: FormControl<string | null | undefined>,
		otaUpdateStatus: FormControl<CreateOTAUpdateResponseOtaUpdateStatus | null | undefined>,
	}
	export function CreateCreateOTAUpdateResponseFormGroup() {
		return new FormGroup<CreateOTAUpdateResponseFormProperties>({
			otaUpdateId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(128), Validators.pattern('[a-zA-Z0-9_-]+')]),
			awsIotJobId: new FormControl<string | null | undefined>(undefined),
			otaUpdateArn: new FormControl<string | null | undefined>(undefined),
			awsIotJobArn: new FormControl<string | null | undefined>(undefined),
			otaUpdateStatus: new FormControl<CreateOTAUpdateResponseOtaUpdateStatus | null | undefined>(undefined),
		});

	}

	export enum CreateOTAUpdateResponseOtaUpdateStatus { CREATE_PENDING = 0, CREATE_IN_PROGRESS = 1, CREATE_COMPLETE = 2, CREATE_FAILED = 3 }

	export enum Protocol { MQTT = 0, HTTP = 1 }


	/** Describes a file to be associated with an OTA update. */
	export interface OTAUpdateFile {
		fileName?: string | null;
		fileVersion?: string | null;

		/** The location of the OTA update. */
		fileLocation?: FileLocation;

		/** Describes the method to use when code signing a file. */
		codeSigning?: CodeSigning;
		attributes?: AttributesMap;
	}

	/** Describes a file to be associated with an OTA update. */
	export interface OTAUpdateFileFormProperties {
		fileName: FormControl<string | null | undefined>,
		fileVersion: FormControl<string | null | undefined>,
	}
	export function CreateOTAUpdateFileFormGroup() {
		return new FormGroup<OTAUpdateFileFormProperties>({
			fileName: new FormControl<string | null | undefined>(undefined),
			fileVersion: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The location of the OTA update. */
	export interface FileLocation {

		/** Describes a group of files that can be streamed. */
		stream?: Stream;

		/** The S3 location. */
		s3Location?: S3Location;
	}

	/** The location of the OTA update. */
	export interface FileLocationFormProperties {
	}
	export function CreateFileLocationFormGroup() {
		return new FormGroup<FileLocationFormProperties>({
		});

	}


	/** Describes a group of files that can be streamed. */
	export interface Stream {

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		streamId?: string | null;

		/**
		 * Minimum: 0
		 * Maximum: 255
		 */
		fileId?: number | null;
	}

	/** Describes a group of files that can be streamed. */
	export interface StreamFormProperties {

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		streamId: FormControl<string | null | undefined>,

		/**
		 * Minimum: 0
		 * Maximum: 255
		 */
		fileId: FormControl<number | null | undefined>,
	}
	export function CreateStreamFormGroup() {
		return new FormGroup<StreamFormProperties>({
			streamId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(128), Validators.pattern('[a-zA-Z0-9_-]+')]),
			fileId: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(255)]),
		});

	}


	/** The S3 location. */
	export interface S3Location {

		/** Min length: 1 */
		bucket?: string | null;

		/** Min length: 1 */
		key?: string | null;
		version?: string | null;
	}

	/** The S3 location. */
	export interface S3LocationFormProperties {

		/** Min length: 1 */
		bucket: FormControl<string | null | undefined>,

		/** Min length: 1 */
		key: FormControl<string | null | undefined>,
		version: FormControl<string | null | undefined>,
	}
	export function CreateS3LocationFormGroup() {
		return new FormGroup<S3LocationFormProperties>({
			bucket: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1)]),
			key: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1)]),
			version: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Describes the method to use when code signing a file. */
	export interface CodeSigning {
		awsSignerJobId?: string | null;

		/** Information required to start a signing job. */
		startSigningJobParameter?: StartSigningJobParameter;

		/** Describes a custom method used to code sign a file. */
		customCodeSigning?: CustomCodeSigning;
	}

	/** Describes the method to use when code signing a file. */
	export interface CodeSigningFormProperties {
		awsSignerJobId: FormControl<string | null | undefined>,
	}
	export function CreateCodeSigningFormGroup() {
		return new FormGroup<CodeSigningFormProperties>({
			awsSignerJobId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Information required to start a signing job. */
	export interface StartSigningJobParameter {

		/** Describes the code-signing profile. */
		signingProfileParameter?: SigningProfileParameter;
		signingProfileName?: string | null;

		/** Describes the location of the updated firmware. */
		destination?: Destination;
	}

	/** Information required to start a signing job. */
	export interface StartSigningJobParameterFormProperties {
		signingProfileName: FormControl<string | null | undefined>,
	}
	export function CreateStartSigningJobParameterFormGroup() {
		return new FormGroup<StartSigningJobParameterFormProperties>({
			signingProfileName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Describes the code-signing profile. */
	export interface SigningProfileParameter {
		certificateArn?: string | null;
		platform?: string | null;
		certificatePathOnDevice?: string | null;
	}

	/** Describes the code-signing profile. */
	export interface SigningProfileParameterFormProperties {
		certificateArn: FormControl<string | null | undefined>,
		platform: FormControl<string | null | undefined>,
		certificatePathOnDevice: FormControl<string | null | undefined>,
	}
	export function CreateSigningProfileParameterFormGroup() {
		return new FormGroup<SigningProfileParameterFormProperties>({
			certificateArn: new FormControl<string | null | undefined>(undefined),
			platform: new FormControl<string | null | undefined>(undefined),
			certificatePathOnDevice: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Describes the location of the updated firmware. */
	export interface Destination {

		/** Describes the location of updated firmware in S3. */
		s3Destination?: S3Destination;
	}

	/** Describes the location of the updated firmware. */
	export interface DestinationFormProperties {
	}
	export function CreateDestinationFormGroup() {
		return new FormGroup<DestinationFormProperties>({
		});

	}


	/** Describes the location of updated firmware in S3. */
	export interface S3Destination {

		/** Min length: 1 */
		bucket?: string | null;
		prefix?: string | null;
	}

	/** Describes the location of updated firmware in S3. */
	export interface S3DestinationFormProperties {

		/** Min length: 1 */
		bucket: FormControl<string | null | undefined>,
		prefix: FormControl<string | null | undefined>,
	}
	export function CreateS3DestinationFormGroup() {
		return new FormGroup<S3DestinationFormProperties>({
			bucket: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1)]),
			prefix: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Describes a custom method used to code sign a file. */
	export interface CustomCodeSigning {

		/** Describes the signature for a file. */
		signature?: CodeSigningSignature;

		/** Describes the certificate chain being used when code signing a file. */
		certificateChain?: CodeSigningCertificateChain;
		hashAlgorithm?: string | null;
		signatureAlgorithm?: string | null;
	}

	/** Describes a custom method used to code sign a file. */
	export interface CustomCodeSigningFormProperties {
		hashAlgorithm: FormControl<string | null | undefined>,
		signatureAlgorithm: FormControl<string | null | undefined>,
	}
	export function CreateCustomCodeSigningFormGroup() {
		return new FormGroup<CustomCodeSigningFormProperties>({
			hashAlgorithm: new FormControl<string | null | undefined>(undefined),
			signatureAlgorithm: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Describes the signature for a file. */
	export interface CodeSigningSignature {
		inlineDocument?: string | null;
	}

	/** Describes the signature for a file. */
	export interface CodeSigningSignatureFormProperties {
		inlineDocument: FormControl<string | null | undefined>,
	}
	export function CreateCodeSigningSignatureFormGroup() {
		return new FormGroup<CodeSigningSignatureFormProperties>({
			inlineDocument: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Describes the certificate chain being used when code signing a file. */
	export interface CodeSigningCertificateChain {
		certificateName?: string | null;
		inlineDocument?: string | null;
	}

	/** Describes the certificate chain being used when code signing a file. */
	export interface CodeSigningCertificateChainFormProperties {
		certificateName: FormControl<string | null | undefined>,
		inlineDocument: FormControl<string | null | undefined>,
	}
	export function CreateCodeSigningCertificateChainFormGroup() {
		return new FormGroup<CodeSigningCertificateChainFormProperties>({
			certificateName: new FormControl<string | null | undefined>(undefined),
			inlineDocument: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface AttributesMap {
	}
	export interface AttributesMapFormProperties {
	}
	export function CreateAttributesMapFormGroup() {
		return new FormGroup<AttributesMapFormProperties>({
		});

	}


	/** The output from the CreatePolicy operation. */
	export interface CreatePolicyResponse {

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		policyName?: string | null;
		policyArn?: string | null;
		policyDocument?: string | null;
		policyVersionId?: string | null;
	}

	/** The output from the CreatePolicy operation. */
	export interface CreatePolicyResponseFormProperties {

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		policyName: FormControl<string | null | undefined>,
		policyArn: FormControl<string | null | undefined>,
		policyDocument: FormControl<string | null | undefined>,
		policyVersionId: FormControl<string | null | undefined>,
	}
	export function CreateCreatePolicyResponseFormGroup() {
		return new FormGroup<CreatePolicyResponseFormProperties>({
			policyName: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(128), Validators.pattern('[\w+=,.@-]+')]),
			policyArn: new FormControl<string | null | undefined>(undefined),
			policyDocument: new FormControl<string | null | undefined>(undefined),
			policyVersionId: new FormControl<string | null | undefined>(undefined, [Validators.pattern('[0-9]+')]),
		});

	}

	export interface MalformedPolicyException {
	}
	export interface MalformedPolicyExceptionFormProperties {
	}
	export function CreateMalformedPolicyExceptionFormGroup() {
		return new FormGroup<MalformedPolicyExceptionFormProperties>({
		});

	}


	/** The output of the CreatePolicyVersion operation. */
	export interface CreatePolicyVersionResponse {
		policyArn?: string | null;
		policyDocument?: string | null;
		policyVersionId?: string | null;
		isDefaultVersion?: boolean | null;
	}

	/** The output of the CreatePolicyVersion operation. */
	export interface CreatePolicyVersionResponseFormProperties {
		policyArn: FormControl<string | null | undefined>,
		policyDocument: FormControl<string | null | undefined>,
		policyVersionId: FormControl<string | null | undefined>,
		isDefaultVersion: FormControl<boolean | null | undefined>,
	}
	export function CreateCreatePolicyVersionResponseFormGroup() {
		return new FormGroup<CreatePolicyVersionResponseFormProperties>({
			policyArn: new FormControl<string | null | undefined>(undefined),
			policyDocument: new FormControl<string | null | undefined>(undefined),
			policyVersionId: new FormControl<string | null | undefined>(undefined, [Validators.pattern('[0-9]+')]),
			isDefaultVersion: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface VersionsLimitExceededException {
	}
	export interface VersionsLimitExceededExceptionFormProperties {
	}
	export function CreateVersionsLimitExceededExceptionFormGroup() {
		return new FormGroup<VersionsLimitExceededExceptionFormProperties>({
		});

	}

	export interface CreateProvisioningClaimResponse {

		/**
		 * Max length: 64
		 * Min length: 64
		 */
		certificateId?: string | null;

		/**
		 * The PEM of a certificate.
		 * Max length: 65536
		 * Min length: 1
		 */
		certificatePem?: string | null;

		/** Describes a key pair. */
		keyPair?: KeyPair;
		expiration?: Date | null;
	}
	export interface CreateProvisioningClaimResponseFormProperties {

		/**
		 * Max length: 64
		 * Min length: 64
		 */
		certificateId: FormControl<string | null | undefined>,

		/**
		 * The PEM of a certificate.
		 * Max length: 65536
		 * Min length: 1
		 */
		certificatePem: FormControl<string | null | undefined>,
		expiration: FormControl<Date | null | undefined>,
	}
	export function CreateCreateProvisioningClaimResponseFormGroup() {
		return new FormGroup<CreateProvisioningClaimResponseFormProperties>({
			certificateId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(64), Validators.maxLength(64), Validators.pattern('(0x)?[a-fA-F0-9]+')]),
			certificatePem: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(65536)]),
			expiration: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface CreateProvisioningTemplateResponse {
		templateArn?: string | null;

		/**
		 * Max length: 36
		 * Min length: 1
		 */
		templateName?: string | null;
		defaultVersionId?: number | null;
	}
	export interface CreateProvisioningTemplateResponseFormProperties {
		templateArn: FormControl<string | null | undefined>,

		/**
		 * Max length: 36
		 * Min length: 1
		 */
		templateName: FormControl<string | null | undefined>,
		defaultVersionId: FormControl<number | null | undefined>,
	}
	export function CreateCreateProvisioningTemplateResponseFormGroup() {
		return new FormGroup<CreateProvisioningTemplateResponseFormProperties>({
			templateArn: new FormControl<string | null | undefined>(undefined),
			templateName: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(36), Validators.pattern('^[0-9A-Za-z_-]+$')]),
			defaultVersionId: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface CreateProvisioningTemplateVersionResponse {
		templateArn?: string | null;

		/**
		 * Max length: 36
		 * Min length: 1
		 */
		templateName?: string | null;
		versionId?: number | null;
		isDefaultVersion?: boolean | null;
	}
	export interface CreateProvisioningTemplateVersionResponseFormProperties {
		templateArn: FormControl<string | null | undefined>,

		/**
		 * Max length: 36
		 * Min length: 1
		 */
		templateName: FormControl<string | null | undefined>,
		versionId: FormControl<number | null | undefined>,
		isDefaultVersion: FormControl<boolean | null | undefined>,
	}
	export function CreateCreateProvisioningTemplateVersionResponseFormGroup() {
		return new FormGroup<CreateProvisioningTemplateVersionResponseFormProperties>({
			templateArn: new FormControl<string | null | undefined>(undefined),
			templateName: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(36), Validators.pattern('^[0-9A-Za-z_-]+$')]),
			versionId: new FormControl<number | null | undefined>(undefined),
			isDefaultVersion: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface CreateRoleAliasResponse {

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		roleAlias?: string | null;

		/**
		 * Max length: 2048
		 * Min length: 1
		 */
		roleAliasArn?: string | null;
	}
	export interface CreateRoleAliasResponseFormProperties {

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		roleAlias: FormControl<string | null | undefined>,

		/**
		 * Max length: 2048
		 * Min length: 1
		 */
		roleAliasArn: FormControl<string | null | undefined>,
	}
	export function CreateCreateRoleAliasResponseFormGroup() {
		return new FormGroup<CreateRoleAliasResponseFormProperties>({
			roleAlias: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(128), Validators.pattern('[\w=,@-]+')]),
			roleAliasArn: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(2048)]),
		});

	}

	export interface CreateScheduledAuditResponse {
		scheduledAuditArn?: string | null;
	}
	export interface CreateScheduledAuditResponseFormProperties {
		scheduledAuditArn: FormControl<string | null | undefined>,
	}
	export function CreateCreateScheduledAuditResponseFormGroup() {
		return new FormGroup<CreateScheduledAuditResponseFormProperties>({
			scheduledAuditArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateSecurityProfileResponse {

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		securityProfileName?: string | null;
		securityProfileArn?: string | null;
	}
	export interface CreateSecurityProfileResponseFormProperties {

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		securityProfileName: FormControl<string | null | undefined>,
		securityProfileArn: FormControl<string | null | undefined>,
	}
	export function CreateCreateSecurityProfileResponseFormGroup() {
		return new FormGroup<CreateSecurityProfileResponseFormProperties>({
			securityProfileName: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(128), Validators.pattern('[a-zA-Z0-9:_-]+')]),
			securityProfileArn: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A Device Defender security profile behavior. */
	export interface Behavior {

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		name: string;
		metric?: string | null;

		/** The dimension of a metric. */
		metricDimension?: MetricDimension;

		/** The criteria by which the behavior is determined to be normal. */
		criteria?: BehaviorCriteria;
	}

	/** A Device Defender security profile behavior. */
	export interface BehaviorFormProperties {

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		name: FormControl<string | null | undefined>,
		metric: FormControl<string | null | undefined>,
	}
	export function CreateBehaviorFormGroup() {
		return new FormGroup<BehaviorFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(128), Validators.pattern('[a-zA-Z0-9:_-]+')]),
			metric: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The dimension of a metric. */
	export interface MetricDimension {

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		dimensionName: string;
		operator?: MetricDimensionOperator | null;
	}

	/** The dimension of a metric. */
	export interface MetricDimensionFormProperties {

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		dimensionName: FormControl<string | null | undefined>,
		operator: FormControl<MetricDimensionOperator | null | undefined>,
	}
	export function CreateMetricDimensionFormGroup() {
		return new FormGroup<MetricDimensionFormProperties>({
			dimensionName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(128), Validators.pattern('[a-zA-Z0-9:_-]+')]),
			operator: new FormControl<MetricDimensionOperator | null | undefined>(undefined),
		});

	}

	export enum MetricDimensionOperator { IN = 0, NOT_IN = 1 }


	/** The criteria by which the behavior is determined to be normal. */
	export interface BehaviorCriteria {
		comparisonOperator?: BehaviorCriteriaComparisonOperator | null;

		/** The value to be compared with the <code>metric</code>. */
		value?: MetricValue;
		durationSeconds?: number | null;

		/**
		 * Minimum: 1
		 * Maximum: 10
		 */
		consecutiveDatapointsToAlarm?: number | null;

		/**
		 * Minimum: 1
		 * Maximum: 10
		 */
		consecutiveDatapointsToClear?: number | null;

		/** A statistical ranking (percentile) which indicates a threshold value by which a behavior is determined to be in compliance or in violation of the behavior. */
		statisticalThreshold?: StatisticalThreshold;
	}

	/** The criteria by which the behavior is determined to be normal. */
	export interface BehaviorCriteriaFormProperties {
		comparisonOperator: FormControl<BehaviorCriteriaComparisonOperator | null | undefined>,
		durationSeconds: FormControl<number | null | undefined>,

		/**
		 * Minimum: 1
		 * Maximum: 10
		 */
		consecutiveDatapointsToAlarm: FormControl<number | null | undefined>,

		/**
		 * Minimum: 1
		 * Maximum: 10
		 */
		consecutiveDatapointsToClear: FormControl<number | null | undefined>,
	}
	export function CreateBehaviorCriteriaFormGroup() {
		return new FormGroup<BehaviorCriteriaFormProperties>({
			comparisonOperator: new FormControl<BehaviorCriteriaComparisonOperator | null | undefined>(undefined),
			durationSeconds: new FormControl<number | null | undefined>(undefined),
			consecutiveDatapointsToAlarm: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(10)]),
			consecutiveDatapointsToClear: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(10)]),
		});

	}

	export enum BehaviorCriteriaComparisonOperator { 'less-than' = 0, 'less-than-equals' = 1, 'greater-than' = 2, 'greater-than-equals' = 3, 'in-cidr-set' = 4, 'not-in-cidr-set' = 5, 'in-port-set' = 6, 'not-in-port-set' = 7 }


	/** The value to be compared with the <code>metric</code>. */
	export interface MetricValue {

		/** Minimum: 0 */
		count?: number | null;
		cidrs?: Array<string>;
		ports?: Array<number>;
	}

	/** The value to be compared with the <code>metric</code>. */
	export interface MetricValueFormProperties {

		/** Minimum: 0 */
		count: FormControl<number | null | undefined>,
	}
	export function CreateMetricValueFormGroup() {
		return new FormGroup<MetricValueFormProperties>({
			count: new FormControl<number | null | undefined>(undefined, [Validators.min(0)]),
		});

	}


	/** A statistical ranking (percentile) which indicates a threshold value by which a behavior is determined to be in compliance or in violation of the behavior. */
	export interface StatisticalThreshold {
		statistic?: string | null;
	}

	/** A statistical ranking (percentile) which indicates a threshold value by which a behavior is determined to be in compliance or in violation of the behavior. */
	export interface StatisticalThresholdFormProperties {
		statistic: FormControl<string | null | undefined>,
	}
	export function CreateStatisticalThresholdFormGroup() {
		return new FormGroup<StatisticalThresholdFormProperties>({
			statistic: new FormControl<string | null | undefined>(undefined, [Validators.pattern('(p0|p0\.1|p0\.01|p1|p10|p50|p90|p99|p99\.9|p99\.99|p100)')]),
		});

	}


	/** A structure containing the alert target ARN and the role ARN. */
	export interface AlertTarget {

		/** Required */
		alertTargetArn: string;

		/**
		 * Required
		 * Max length: 2048
		 * Min length: 20
		 */
		roleArn: string;
	}

	/** A structure containing the alert target ARN and the role ARN. */
	export interface AlertTargetFormProperties {

		/** Required */
		alertTargetArn: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 2048
		 * Min length: 20
		 */
		roleArn: FormControl<string | null | undefined>,
	}
	export function CreateAlertTargetFormGroup() {
		return new FormGroup<AlertTargetFormProperties>({
			alertTargetArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			roleArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(20), Validators.maxLength(2048)]),
		});

	}


	/** The metric you want to retain. Dimensions are optional. */
	export interface MetricToRetain {

		/** Required */
		metric: string;

		/** The dimension of a metric. */
		metricDimension?: MetricDimension;
	}

	/** The metric you want to retain. Dimensions are optional. */
	export interface MetricToRetainFormProperties {

		/** Required */
		metric: FormControl<string | null | undefined>,
	}
	export function CreateMetricToRetainFormGroup() {
		return new FormGroup<MetricToRetainFormProperties>({
			metric: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateStreamResponse {

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		streamId?: string | null;
		streamArn?: string | null;

		/** Max length: 2028 */
		description?: string | null;

		/**
		 * Minimum: 0
		 * Maximum: 65535
		 */
		streamVersion?: number | null;
	}
	export interface CreateStreamResponseFormProperties {

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		streamId: FormControl<string | null | undefined>,
		streamArn: FormControl<string | null | undefined>,

		/** Max length: 2028 */
		description: FormControl<string | null | undefined>,

		/**
		 * Minimum: 0
		 * Maximum: 65535
		 */
		streamVersion: FormControl<number | null | undefined>,
	}
	export function CreateCreateStreamResponseFormGroup() {
		return new FormGroup<CreateStreamResponseFormProperties>({
			streamId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(128), Validators.pattern('[a-zA-Z0-9_-]+')]),
			streamArn: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(2028), Validators.pattern('[^\p{C}]+')]),
			streamVersion: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(65535)]),
		});

	}


	/** Represents a file to stream. */
	export interface StreamFile {

		/**
		 * Minimum: 0
		 * Maximum: 255
		 */
		fileId?: number | null;

		/** The S3 location. */
		s3Location?: S3Location;
	}

	/** Represents a file to stream. */
	export interface StreamFileFormProperties {

		/**
		 * Minimum: 0
		 * Maximum: 255
		 */
		fileId: FormControl<number | null | undefined>,
	}
	export function CreateStreamFileFormGroup() {
		return new FormGroup<StreamFileFormProperties>({
			fileId: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(255)]),
		});

	}


	/** The output of the CreateThing operation. */
	export interface CreateThingResponse {

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		thingName?: string | null;
		thingArn?: string | null;
		thingId?: string | null;
	}

	/** The output of the CreateThing operation. */
	export interface CreateThingResponseFormProperties {

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		thingName: FormControl<string | null | undefined>,
		thingArn: FormControl<string | null | undefined>,
		thingId: FormControl<string | null | undefined>,
	}
	export function CreateCreateThingResponseFormGroup() {
		return new FormGroup<CreateThingResponseFormProperties>({
			thingName: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(128), Validators.pattern('[a-zA-Z0-9:_-]+')]),
			thingArn: new FormControl<string | null | undefined>(undefined),
			thingId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateThingGroupResponse {

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		thingGroupName?: string | null;
		thingGroupArn?: string | null;

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		thingGroupId?: string | null;
	}
	export interface CreateThingGroupResponseFormProperties {

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		thingGroupName: FormControl<string | null | undefined>,
		thingGroupArn: FormControl<string | null | undefined>,

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		thingGroupId: FormControl<string | null | undefined>,
	}
	export function CreateCreateThingGroupResponseFormGroup() {
		return new FormGroup<CreateThingGroupResponseFormProperties>({
			thingGroupName: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(128), Validators.pattern('[a-zA-Z0-9:_-]+')]),
			thingGroupArn: new FormControl<string | null | undefined>(undefined),
			thingGroupId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(128), Validators.pattern('[a-zA-Z0-9\-]+')]),
		});

	}


	/** The output of the CreateThingType operation. */
	export interface CreateThingTypeResponse {

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		thingTypeName?: string | null;
		thingTypeArn?: string | null;
		thingTypeId?: string | null;
	}

	/** The output of the CreateThingType operation. */
	export interface CreateThingTypeResponseFormProperties {

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		thingTypeName: FormControl<string | null | undefined>,
		thingTypeArn: FormControl<string | null | undefined>,
		thingTypeId: FormControl<string | null | undefined>,
	}
	export function CreateCreateThingTypeResponseFormGroup() {
		return new FormGroup<CreateThingTypeResponseFormProperties>({
			thingTypeName: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(128), Validators.pattern('[a-zA-Z0-9:_-]+')]),
			thingTypeArn: new FormControl<string | null | undefined>(undefined),
			thingTypeId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Describes the actions associated with a rule. */
	export interface Action {

		/** <p>Describes an action to write to a DynamoDB table.</p> <p>The <code>tableName</code>, <code>hashKeyField</code>, and <code>rangeKeyField</code> values must match the values used when you created the table.</p> <p>The <code>hashKeyValue</code> and <code>rangeKeyvalue</code> fields use a substitution template syntax. These templates provide data at runtime. The syntax is as follows: ${<i>sql-expression</i>}.</p> <p>You can specify any valid expression in a WHERE or SELECT clause, including JSON properties, comparisons, calculations, and functions. For example, the following field uses the third level of the topic:</p> <p> <code>"hashKeyValue": "${topic(3)}"</code> </p> <p>The following field uses the timestamp:</p> <p> <code>"rangeKeyValue": "${timestamp()}"</code> </p> */
		dynamoDB?: DynamoDBAction;

		/** <p>Describes an action to write to a DynamoDB table.</p> <p>This DynamoDB action writes each attribute in the message payload into it's own column in the DynamoDB table.</p> */
		dynamoDBv2?: DynamoDBv2Action;

		/** Describes an action to invoke a Lambda function. */
		lambda?: LambdaAction;

		/** Describes an action to publish to an Amazon SNS topic. */
		sns?: SnsAction;

		/** Describes an action to publish data to an Amazon SQS queue. */
		sqs?: SqsAction;

		/** Describes an action to write data to an Amazon Kinesis stream. */
		kinesis?: KinesisAction;

		/** Describes an action to republish to another topic. */
		republish?: RepublishAction;

		/** Describes an action to write data to an Amazon S3 bucket. */
		s3?: S3Action;

		/** Describes an action that writes data to an Amazon Kinesis Firehose stream. */
		firehose?: FirehoseAction;

		/** Describes an action that captures a CloudWatch metric. */
		cloudwatchMetric?: CloudwatchMetricAction;

		/** Describes an action that updates a CloudWatch alarm. */
		cloudwatchAlarm?: CloudwatchAlarmAction;

		/** Describes an action that sends data to CloudWatch Logs. */
		cloudwatchLogs?: CloudwatchLogsAction;

		/** Describes an action that writes data to an Amazon Elasticsearch Service domain. */
		elasticsearch?: ElasticsearchAction;

		/** Describes an action to write a message to a Salesforce IoT Cloud Input Stream. */
		salesforce?: SalesforceAction;

		/** Sends message data to an AWS IoT Analytics channel. */
		iotAnalytics?: IotAnalyticsAction;

		/** Sends an input to an AWS IoT Events detector. */
		iotEvents?: IotEventsAction;

		/** Describes an action to send data from an MQTT message that triggered the rule to AWS IoT SiteWise asset properties. */
		iotSiteWise?: IotSiteWiseAction;

		/** Starts execution of a Step Functions state machine. */
		stepFunctions?: StepFunctionsAction;

		/** Send data to an HTTPS endpoint. */
		http?: HttpAction;
	}

	/** Describes the actions associated with a rule. */
	export interface ActionFormProperties {
	}
	export function CreateActionFormGroup() {
		return new FormGroup<ActionFormProperties>({
		});

	}


	/** <p>Describes an action to write to a DynamoDB table.</p> <p>The <code>tableName</code>, <code>hashKeyField</code>, and <code>rangeKeyField</code> values must match the values used when you created the table.</p> <p>The <code>hashKeyValue</code> and <code>rangeKeyvalue</code> fields use a substitution template syntax. These templates provide data at runtime. The syntax is as follows: ${<i>sql-expression</i>}.</p> <p>You can specify any valid expression in a WHERE or SELECT clause, including JSON properties, comparisons, calculations, and functions. For example, the following field uses the third level of the topic:</p> <p> <code>"hashKeyValue": "${topic(3)}"</code> </p> <p>The following field uses the timestamp:</p> <p> <code>"rangeKeyValue": "${timestamp()}"</code> </p> */
	export interface DynamoDBAction {

		/** Required */
		tableName: string;

		/** Required */
		roleArn: string;
		operation?: string | null;

		/** Required */
		hashKeyField: string;

		/** Required */
		hashKeyValue: string;
		hashKeyType?: DynamoDBActionHashKeyType | null;
		rangeKeyField?: string | null;
		rangeKeyValue?: string | null;
		rangeKeyType?: DynamoDBActionHashKeyType | null;
		payloadField?: string | null;
	}

	/** <p>Describes an action to write to a DynamoDB table.</p> <p>The <code>tableName</code>, <code>hashKeyField</code>, and <code>rangeKeyField</code> values must match the values used when you created the table.</p> <p>The <code>hashKeyValue</code> and <code>rangeKeyvalue</code> fields use a substitution template syntax. These templates provide data at runtime. The syntax is as follows: ${<i>sql-expression</i>}.</p> <p>You can specify any valid expression in a WHERE or SELECT clause, including JSON properties, comparisons, calculations, and functions. For example, the following field uses the third level of the topic:</p> <p> <code>"hashKeyValue": "${topic(3)}"</code> </p> <p>The following field uses the timestamp:</p> <p> <code>"rangeKeyValue": "${timestamp()}"</code> </p> */
	export interface DynamoDBActionFormProperties {

		/** Required */
		tableName: FormControl<string | null | undefined>,

		/** Required */
		roleArn: FormControl<string | null | undefined>,
		operation: FormControl<string | null | undefined>,

		/** Required */
		hashKeyField: FormControl<string | null | undefined>,

		/** Required */
		hashKeyValue: FormControl<string | null | undefined>,
		hashKeyType: FormControl<DynamoDBActionHashKeyType | null | undefined>,
		rangeKeyField: FormControl<string | null | undefined>,
		rangeKeyValue: FormControl<string | null | undefined>,
		rangeKeyType: FormControl<DynamoDBActionHashKeyType | null | undefined>,
		payloadField: FormControl<string | null | undefined>,
	}
	export function CreateDynamoDBActionFormGroup() {
		return new FormGroup<DynamoDBActionFormProperties>({
			tableName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			roleArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			operation: new FormControl<string | null | undefined>(undefined),
			hashKeyField: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			hashKeyValue: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			hashKeyType: new FormControl<DynamoDBActionHashKeyType | null | undefined>(undefined),
			rangeKeyField: new FormControl<string | null | undefined>(undefined),
			rangeKeyValue: new FormControl<string | null | undefined>(undefined),
			rangeKeyType: new FormControl<DynamoDBActionHashKeyType | null | undefined>(undefined),
			payloadField: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum DynamoDBActionHashKeyType { STRING = 0, NUMBER = 1 }


	/** <p>Describes an action to write to a DynamoDB table.</p> <p>This DynamoDB action writes each attribute in the message payload into it's own column in the DynamoDB table.</p> */
	export interface DynamoDBv2Action {

		/** Required */
		roleArn: string;

		/**
		 * The input for the DynamoActionVS action that specifies the DynamoDB table to which the message data will be written.
		 * Required
		 */
		putItem: PutItemInput;
	}

	/** <p>Describes an action to write to a DynamoDB table.</p> <p>This DynamoDB action writes each attribute in the message payload into it's own column in the DynamoDB table.</p> */
	export interface DynamoDBv2ActionFormProperties {

		/** Required */
		roleArn: FormControl<string | null | undefined>,
	}
	export function CreateDynamoDBv2ActionFormGroup() {
		return new FormGroup<DynamoDBv2ActionFormProperties>({
			roleArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The input for the DynamoActionVS action that specifies the DynamoDB table to which the message data will be written. */
	export interface PutItemInput {

		/** Required */
		tableName: string;
	}

	/** The input for the DynamoActionVS action that specifies the DynamoDB table to which the message data will be written. */
	export interface PutItemInputFormProperties {

		/** Required */
		tableName: FormControl<string | null | undefined>,
	}
	export function CreatePutItemInputFormGroup() {
		return new FormGroup<PutItemInputFormProperties>({
			tableName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Describes an action to invoke a Lambda function. */
	export interface LambdaAction {

		/** Required */
		functionArn: string;
	}

	/** Describes an action to invoke a Lambda function. */
	export interface LambdaActionFormProperties {

		/** Required */
		functionArn: FormControl<string | null | undefined>,
	}
	export function CreateLambdaActionFormGroup() {
		return new FormGroup<LambdaActionFormProperties>({
			functionArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Describes an action to publish to an Amazon SNS topic. */
	export interface SnsAction {

		/** Required */
		targetArn: string;

		/** Required */
		roleArn: string;
		messageFormat?: SnsActionMessageFormat | null;
	}

	/** Describes an action to publish to an Amazon SNS topic. */
	export interface SnsActionFormProperties {

		/** Required */
		targetArn: FormControl<string | null | undefined>,

		/** Required */
		roleArn: FormControl<string | null | undefined>,
		messageFormat: FormControl<SnsActionMessageFormat | null | undefined>,
	}
	export function CreateSnsActionFormGroup() {
		return new FormGroup<SnsActionFormProperties>({
			targetArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			roleArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			messageFormat: new FormControl<SnsActionMessageFormat | null | undefined>(undefined),
		});

	}

	export enum SnsActionMessageFormat { RAW = 0, JSON = 1 }


	/** Describes an action to publish data to an Amazon SQS queue. */
	export interface SqsAction {

		/** Required */
		roleArn: string;

		/** Required */
		queueUrl: string;
		useBase64?: boolean | null;
	}

	/** Describes an action to publish data to an Amazon SQS queue. */
	export interface SqsActionFormProperties {

		/** Required */
		roleArn: FormControl<string | null | undefined>,

		/** Required */
		queueUrl: FormControl<string | null | undefined>,
		useBase64: FormControl<boolean | null | undefined>,
	}
	export function CreateSqsActionFormGroup() {
		return new FormGroup<SqsActionFormProperties>({
			roleArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			queueUrl: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			useBase64: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Describes an action to write data to an Amazon Kinesis stream. */
	export interface KinesisAction {

		/** Required */
		roleArn: string;

		/** Required */
		streamName: string;
		partitionKey?: string | null;
	}

	/** Describes an action to write data to an Amazon Kinesis stream. */
	export interface KinesisActionFormProperties {

		/** Required */
		roleArn: FormControl<string | null | undefined>,

		/** Required */
		streamName: FormControl<string | null | undefined>,
		partitionKey: FormControl<string | null | undefined>,
	}
	export function CreateKinesisActionFormGroup() {
		return new FormGroup<KinesisActionFormProperties>({
			roleArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			streamName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			partitionKey: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Describes an action to republish to another topic. */
	export interface RepublishAction {

		/** Required */
		roleArn: string;

		/** Required */
		topic: string;

		/**
		 * Minimum: 0
		 * Maximum: 1
		 */
		qos?: number | null;
	}

	/** Describes an action to republish to another topic. */
	export interface RepublishActionFormProperties {

		/** Required */
		roleArn: FormControl<string | null | undefined>,

		/** Required */
		topic: FormControl<string | null | undefined>,

		/**
		 * Minimum: 0
		 * Maximum: 1
		 */
		qos: FormControl<number | null | undefined>,
	}
	export function CreateRepublishActionFormGroup() {
		return new FormGroup<RepublishActionFormProperties>({
			roleArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			topic: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			qos: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(1)]),
		});

	}


	/** Describes an action to write data to an Amazon S3 bucket. */
	export interface S3Action {

		/** Required */
		roleArn: string;

		/** Required */
		bucketName: string;

		/** Required */
		key: string;
		cannedAcl?: S3ActionCannedAcl | null;
	}

	/** Describes an action to write data to an Amazon S3 bucket. */
	export interface S3ActionFormProperties {

		/** Required */
		roleArn: FormControl<string | null | undefined>,

		/** Required */
		bucketName: FormControl<string | null | undefined>,

		/** Required */
		key: FormControl<string | null | undefined>,
		cannedAcl: FormControl<S3ActionCannedAcl | null | undefined>,
	}
	export function CreateS3ActionFormGroup() {
		return new FormGroup<S3ActionFormProperties>({
			roleArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			bucketName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			key: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			cannedAcl: new FormControl<S3ActionCannedAcl | null | undefined>(undefined),
		});

	}

	export enum S3ActionCannedAcl { private = 0, 'public-read' = 1, 'public-read-write' = 2, 'aws-exec-read' = 3, 'authenticated-read' = 4, 'bucket-owner-read' = 5, 'bucket-owner-full-control' = 6, 'log-delivery-write' = 7 }


	/** Describes an action that writes data to an Amazon Kinesis Firehose stream. */
	export interface FirehoseAction {

		/** Required */
		roleArn: string;

		/** Required */
		deliveryStreamName: string;
		separator?: string | null;
	}

	/** Describes an action that writes data to an Amazon Kinesis Firehose stream. */
	export interface FirehoseActionFormProperties {

		/** Required */
		roleArn: FormControl<string | null | undefined>,

		/** Required */
		deliveryStreamName: FormControl<string | null | undefined>,
		separator: FormControl<string | null | undefined>,
	}
	export function CreateFirehoseActionFormGroup() {
		return new FormGroup<FirehoseActionFormProperties>({
			roleArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			deliveryStreamName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			separator: new FormControl<string | null | undefined>(undefined, [Validators.pattern('([\n\t])|(\r\n)|(,)')]),
		});

	}


	/** Describes an action that captures a CloudWatch metric. */
	export interface CloudwatchMetricAction {

		/** Required */
		roleArn: string;

		/** Required */
		metricNamespace: string;

		/** Required */
		metricName: string;

		/** Required */
		metricValue: string;

		/** Required */
		metricUnit: string;
		metricTimestamp?: string | null;
	}

	/** Describes an action that captures a CloudWatch metric. */
	export interface CloudwatchMetricActionFormProperties {

		/** Required */
		roleArn: FormControl<string | null | undefined>,

		/** Required */
		metricNamespace: FormControl<string | null | undefined>,

		/** Required */
		metricName: FormControl<string | null | undefined>,

		/** Required */
		metricValue: FormControl<string | null | undefined>,

		/** Required */
		metricUnit: FormControl<string | null | undefined>,
		metricTimestamp: FormControl<string | null | undefined>,
	}
	export function CreateCloudwatchMetricActionFormGroup() {
		return new FormGroup<CloudwatchMetricActionFormProperties>({
			roleArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			metricNamespace: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			metricName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			metricValue: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			metricUnit: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			metricTimestamp: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Describes an action that updates a CloudWatch alarm. */
	export interface CloudwatchAlarmAction {

		/** Required */
		roleArn: string;

		/** Required */
		alarmName: string;

		/** Required */
		stateReason: string;

		/** Required */
		stateValue: string;
	}

	/** Describes an action that updates a CloudWatch alarm. */
	export interface CloudwatchAlarmActionFormProperties {

		/** Required */
		roleArn: FormControl<string | null | undefined>,

		/** Required */
		alarmName: FormControl<string | null | undefined>,

		/** Required */
		stateReason: FormControl<string | null | undefined>,

		/** Required */
		stateValue: FormControl<string | null | undefined>,
	}
	export function CreateCloudwatchAlarmActionFormGroup() {
		return new FormGroup<CloudwatchAlarmActionFormProperties>({
			roleArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			alarmName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			stateReason: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			stateValue: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Describes an action that sends data to CloudWatch Logs. */
	export interface CloudwatchLogsAction {

		/** Required */
		roleArn: string;

		/** Required */
		logGroupName: string;
	}

	/** Describes an action that sends data to CloudWatch Logs. */
	export interface CloudwatchLogsActionFormProperties {

		/** Required */
		roleArn: FormControl<string | null | undefined>,

		/** Required */
		logGroupName: FormControl<string | null | undefined>,
	}
	export function CreateCloudwatchLogsActionFormGroup() {
		return new FormGroup<CloudwatchLogsActionFormProperties>({
			roleArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			logGroupName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Describes an action that writes data to an Amazon Elasticsearch Service domain. */
	export interface ElasticsearchAction {

		/** Required */
		roleArn: string;

		/** Required */
		endpoint: string;

		/** Required */
		index: string;

		/** Required */
		type: string;

		/** Required */
		id: string;
	}

	/** Describes an action that writes data to an Amazon Elasticsearch Service domain. */
	export interface ElasticsearchActionFormProperties {

		/** Required */
		roleArn: FormControl<string | null | undefined>,

		/** Required */
		endpoint: FormControl<string | null | undefined>,

		/** Required */
		index: FormControl<string | null | undefined>,

		/** Required */
		type: FormControl<string | null | undefined>,

		/** Required */
		id: FormControl<string | null | undefined>,
	}
	export function CreateElasticsearchActionFormGroup() {
		return new FormGroup<ElasticsearchActionFormProperties>({
			roleArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			endpoint: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('https?://.*')]),
			index: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Describes an action to write a message to a Salesforce IoT Cloud Input Stream. */
	export interface SalesforceAction {

		/**
		 * Required
		 * Min length: 40
		 */
		token: string;

		/**
		 * Required
		 * Max length: 2000
		 */
		url: string;
	}

	/** Describes an action to write a message to a Salesforce IoT Cloud Input Stream. */
	export interface SalesforceActionFormProperties {

		/**
		 * Required
		 * Min length: 40
		 */
		token: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 2000
		 */
		url: FormControl<string | null | undefined>,
	}
	export function CreateSalesforceActionFormGroup() {
		return new FormGroup<SalesforceActionFormProperties>({
			token: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(40)]),
			url: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(2000), Validators.pattern('https://ingestion-[a-zA-Z0-9]{1,12}\.[a-zA-Z0-9]+\.((sfdc-matrix\.net)|(sfdcnow\.com))/streams/\w{1,20}/\w{1,20}/event')]),
		});

	}


	/** Sends message data to an AWS IoT Analytics channel. */
	export interface IotAnalyticsAction {
		channelArn?: string | null;
		channelName?: string | null;
		roleArn?: string | null;
	}

	/** Sends message data to an AWS IoT Analytics channel. */
	export interface IotAnalyticsActionFormProperties {
		channelArn: FormControl<string | null | undefined>,
		channelName: FormControl<string | null | undefined>,
		roleArn: FormControl<string | null | undefined>,
	}
	export function CreateIotAnalyticsActionFormGroup() {
		return new FormGroup<IotAnalyticsActionFormProperties>({
			channelArn: new FormControl<string | null | undefined>(undefined),
			channelName: new FormControl<string | null | undefined>(undefined),
			roleArn: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Sends an input to an AWS IoT Events detector. */
	export interface IotEventsAction {

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		inputName: string;

		/** Max length: 128 */
		messageId?: string | null;

		/** Required */
		roleArn: string;
	}

	/** Sends an input to an AWS IoT Events detector. */
	export interface IotEventsActionFormProperties {

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		inputName: FormControl<string | null | undefined>,

		/** Max length: 128 */
		messageId: FormControl<string | null | undefined>,

		/** Required */
		roleArn: FormControl<string | null | undefined>,
	}
	export function CreateIotEventsActionFormGroup() {
		return new FormGroup<IotEventsActionFormProperties>({
			inputName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(128)]),
			messageId: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(128)]),
			roleArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Describes an action to send data from an MQTT message that triggered the rule to AWS IoT SiteWise asset properties. */
	export interface IotSiteWiseAction {

		/**
		 * Required
		 * Minimum items: 1
		 */
		putAssetPropertyValueEntries: Array<PutAssetPropertyValueEntry>;

		/** Required */
		roleArn: string;
	}

	/** Describes an action to send data from an MQTT message that triggered the rule to AWS IoT SiteWise asset properties. */
	export interface IotSiteWiseActionFormProperties {

		/** Required */
		roleArn: FormControl<string | null | undefined>,
	}
	export function CreateIotSiteWiseActionFormGroup() {
		return new FormGroup<IotSiteWiseActionFormProperties>({
			roleArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** An asset property value entry containing the following information. */
	export interface PutAssetPropertyValueEntry {
		entryId?: string | null;
		assetId?: string | null;
		propertyId?: string | null;

		/**
		 * Max length: 2048
		 * Min length: 1
		 */
		propertyAlias?: string | null;

		/**
		 * Required
		 * Minimum items: 1
		 */
		propertyValues: Array<AssetPropertyValue>;
	}

	/** An asset property value entry containing the following information. */
	export interface PutAssetPropertyValueEntryFormProperties {
		entryId: FormControl<string | null | undefined>,
		assetId: FormControl<string | null | undefined>,
		propertyId: FormControl<string | null | undefined>,

		/**
		 * Max length: 2048
		 * Min length: 1
		 */
		propertyAlias: FormControl<string | null | undefined>,
	}
	export function CreatePutAssetPropertyValueEntryFormGroup() {
		return new FormGroup<PutAssetPropertyValueEntryFormProperties>({
			entryId: new FormControl<string | null | undefined>(undefined),
			assetId: new FormControl<string | null | undefined>(undefined),
			propertyId: new FormControl<string | null | undefined>(undefined),
			propertyAlias: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(2048)]),
		});

	}


	/** An asset property value entry containing the following information. */
	export interface AssetPropertyValue {

		/**
		 * Contains an asset property value (of a single type).
		 * Required
		 */
		value: AssetPropertyVariant;

		/**
		 * An asset property timestamp entry containing the following information.
		 * Required
		 */
		timestamp: AssetPropertyTimestamp;
		quality?: string | null;
	}

	/** An asset property value entry containing the following information. */
	export interface AssetPropertyValueFormProperties {
		quality: FormControl<string | null | undefined>,
	}
	export function CreateAssetPropertyValueFormGroup() {
		return new FormGroup<AssetPropertyValueFormProperties>({
			quality: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains an asset property value (of a single type). */
	export interface AssetPropertyVariant {

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		stringValue?: string | null;
		integerValue?: string | null;
		doubleValue?: string | null;
		booleanValue?: string | null;
	}

	/** Contains an asset property value (of a single type). */
	export interface AssetPropertyVariantFormProperties {

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		stringValue: FormControl<string | null | undefined>,
		integerValue: FormControl<string | null | undefined>,
		doubleValue: FormControl<string | null | undefined>,
		booleanValue: FormControl<string | null | undefined>,
	}
	export function CreateAssetPropertyVariantFormGroup() {
		return new FormGroup<AssetPropertyVariantFormProperties>({
			stringValue: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(1024)]),
			integerValue: new FormControl<string | null | undefined>(undefined),
			doubleValue: new FormControl<string | null | undefined>(undefined),
			booleanValue: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An asset property timestamp entry containing the following information. */
	export interface AssetPropertyTimestamp {

		/** Required */
		timeInSeconds: string;
		offsetInNanos?: string | null;
	}

	/** An asset property timestamp entry containing the following information. */
	export interface AssetPropertyTimestampFormProperties {

		/** Required */
		timeInSeconds: FormControl<string | null | undefined>,
		offsetInNanos: FormControl<string | null | undefined>,
	}
	export function CreateAssetPropertyTimestampFormGroup() {
		return new FormGroup<AssetPropertyTimestampFormProperties>({
			timeInSeconds: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			offsetInNanos: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Starts execution of a Step Functions state machine. */
	export interface StepFunctionsAction {
		executionNamePrefix?: string | null;

		/** Required */
		stateMachineName: string;

		/** Required */
		roleArn: string;
	}

	/** Starts execution of a Step Functions state machine. */
	export interface StepFunctionsActionFormProperties {
		executionNamePrefix: FormControl<string | null | undefined>,

		/** Required */
		stateMachineName: FormControl<string | null | undefined>,

		/** Required */
		roleArn: FormControl<string | null | undefined>,
	}
	export function CreateStepFunctionsActionFormGroup() {
		return new FormGroup<StepFunctionsActionFormProperties>({
			executionNamePrefix: new FormControl<string | null | undefined>(undefined),
			stateMachineName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			roleArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Send data to an HTTPS endpoint. */
	export interface HttpAction {

		/**
		 * Required
		 * Max length: 2000
		 */
		url: string;

		/** Max length: 2000 */
		confirmationUrl?: string | null;

		/**
		 * Minimum items: 0
		 * Maximum items: 100
		 */
		headers?: Array<HttpActionHeader>;

		/** The authorization method used to send messages. */
		auth?: HttpAuthorization;
	}

	/** Send data to an HTTPS endpoint. */
	export interface HttpActionFormProperties {

		/**
		 * Required
		 * Max length: 2000
		 */
		url: FormControl<string | null | undefined>,

		/** Max length: 2000 */
		confirmationUrl: FormControl<string | null | undefined>,
	}
	export function CreateHttpActionFormGroup() {
		return new FormGroup<HttpActionFormProperties>({
			url: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(2000)]),
			confirmationUrl: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(2000)]),
		});

	}


	/** The HTTP action header. */
	export interface HttpActionHeader {

		/**
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		key: string;

		/** Required */
		value: string;
	}

	/** The HTTP action header. */
	export interface HttpActionHeaderFormProperties {

		/**
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		key: FormControl<string | null | undefined>,

		/** Required */
		value: FormControl<string | null | undefined>,
	}
	export function CreateHttpActionHeaderFormGroup() {
		return new FormGroup<HttpActionHeaderFormProperties>({
			key: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(256)]),
			value: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The authorization method used to send messages. */
	export interface HttpAuthorization {

		/** Use Sig V4 authorization. */
		sigv4?: SigV4Authorization;
	}

	/** The authorization method used to send messages. */
	export interface HttpAuthorizationFormProperties {
	}
	export function CreateHttpAuthorizationFormGroup() {
		return new FormGroup<HttpAuthorizationFormProperties>({
		});

	}


	/** Use Sig V4 authorization. */
	export interface SigV4Authorization {

		/** Required */
		signingRegion: string;

		/** Required */
		serviceName: string;

		/** Required */
		roleArn: string;
	}

	/** Use Sig V4 authorization. */
	export interface SigV4AuthorizationFormProperties {

		/** Required */
		signingRegion: FormControl<string | null | undefined>,

		/** Required */
		serviceName: FormControl<string | null | undefined>,

		/** Required */
		roleArn: FormControl<string | null | undefined>,
	}
	export function CreateSigV4AuthorizationFormGroup() {
		return new FormGroup<SigV4AuthorizationFormProperties>({
			signingRegion: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			serviceName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			roleArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface SqlParseException {
	}
	export interface SqlParseExceptionFormProperties {
	}
	export function CreateSqlParseExceptionFormGroup() {
		return new FormGroup<SqlParseExceptionFormProperties>({
		});

	}

	export interface CreateTopicRuleDestinationResponse {

		/** A topic rule destination. */
		topicRuleDestination?: TopicRuleDestination;
	}
	export interface CreateTopicRuleDestinationResponseFormProperties {
	}
	export function CreateCreateTopicRuleDestinationResponseFormGroup() {
		return new FormGroup<CreateTopicRuleDestinationResponseFormProperties>({
		});

	}


	/** A topic rule destination. */
	export interface TopicRuleDestination {
		arn?: string | null;
		status?: TopicRuleDestinationStatus | null;
		statusReason?: string | null;

		/** HTTP URL destination properties. */
		httpUrlProperties?: HttpUrlDestinationProperties;
	}

	/** A topic rule destination. */
	export interface TopicRuleDestinationFormProperties {
		arn: FormControl<string | null | undefined>,
		status: FormControl<TopicRuleDestinationStatus | null | undefined>,
		statusReason: FormControl<string | null | undefined>,
	}
	export function CreateTopicRuleDestinationFormGroup() {
		return new FormGroup<TopicRuleDestinationFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<TopicRuleDestinationStatus | null | undefined>(undefined),
			statusReason: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum TopicRuleDestinationStatus { ENABLED = 0, IN_PROGRESS = 1, DISABLED = 2, ERROR = 3 }


	/** HTTP URL destination properties. */
	export interface HttpUrlDestinationProperties {

		/** Max length: 2000 */
		confirmationUrl?: string | null;
	}

	/** HTTP URL destination properties. */
	export interface HttpUrlDestinationPropertiesFormProperties {

		/** Max length: 2000 */
		confirmationUrl: FormControl<string | null | undefined>,
	}
	export function CreateHttpUrlDestinationPropertiesFormGroup() {
		return new FormGroup<HttpUrlDestinationPropertiesFormProperties>({
			confirmationUrl: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(2000)]),
		});

	}


	/** HTTP URL destination configuration used by the topic rule's HTTP action. */
	export interface HttpUrlDestinationConfiguration {

		/**
		 * Required
		 * Max length: 2000
		 */
		confirmationUrl: string;
	}

	/** HTTP URL destination configuration used by the topic rule's HTTP action. */
	export interface HttpUrlDestinationConfigurationFormProperties {

		/**
		 * Required
		 * Max length: 2000
		 */
		confirmationUrl: FormControl<string | null | undefined>,
	}
	export function CreateHttpUrlDestinationConfigurationFormGroup() {
		return new FormGroup<HttpUrlDestinationConfigurationFormProperties>({
			confirmationUrl: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(2000)]),
		});

	}

	export interface DeleteAccountAuditConfigurationResponse {
	}
	export interface DeleteAccountAuditConfigurationResponseFormProperties {
	}
	export function CreateDeleteAccountAuditConfigurationResponseFormGroup() {
		return new FormGroup<DeleteAccountAuditConfigurationResponseFormProperties>({
		});

	}

	export interface DeleteAuthorizerResponse {
	}
	export interface DeleteAuthorizerResponseFormProperties {
	}
	export function CreateDeleteAuthorizerResponseFormGroup() {
		return new FormGroup<DeleteAuthorizerResponseFormProperties>({
		});

	}

	export interface DeleteConflictException {
	}
	export interface DeleteConflictExceptionFormProperties {
	}
	export function CreateDeleteConflictExceptionFormGroup() {
		return new FormGroup<DeleteConflictExceptionFormProperties>({
		});

	}

	export interface DeleteBillingGroupResponse {
	}
	export interface DeleteBillingGroupResponseFormProperties {
	}
	export function CreateDeleteBillingGroupResponseFormGroup() {
		return new FormGroup<DeleteBillingGroupResponseFormProperties>({
		});

	}


	/** The output for the DeleteCACertificate operation. */
	export interface DeleteCACertificateResponse {
	}

	/** The output for the DeleteCACertificate operation. */
	export interface DeleteCACertificateResponseFormProperties {
	}
	export function CreateDeleteCACertificateResponseFormGroup() {
		return new FormGroup<DeleteCACertificateResponseFormProperties>({
		});

	}

	export interface CertificateStateException {
	}
	export interface CertificateStateExceptionFormProperties {
	}
	export function CreateCertificateStateExceptionFormGroup() {
		return new FormGroup<CertificateStateExceptionFormProperties>({
		});

	}

	export interface DeleteDimensionResponse {
	}
	export interface DeleteDimensionResponseFormProperties {
	}
	export function CreateDeleteDimensionResponseFormGroup() {
		return new FormGroup<DeleteDimensionResponseFormProperties>({
		});

	}

	export interface DeleteDomainConfigurationResponse {
	}
	export interface DeleteDomainConfigurationResponseFormProperties {
	}
	export function CreateDeleteDomainConfigurationResponseFormGroup() {
		return new FormGroup<DeleteDomainConfigurationResponseFormProperties>({
		});

	}

	export interface DeleteDynamicThingGroupResponse {
	}
	export interface DeleteDynamicThingGroupResponseFormProperties {
	}
	export function CreateDeleteDynamicThingGroupResponseFormGroup() {
		return new FormGroup<DeleteDynamicThingGroupResponseFormProperties>({
		});

	}

	export interface DeleteMitigationActionResponse {
	}
	export interface DeleteMitigationActionResponseFormProperties {
	}
	export function CreateDeleteMitigationActionResponseFormGroup() {
		return new FormGroup<DeleteMitigationActionResponseFormProperties>({
		});

	}

	export interface DeleteOTAUpdateResponse {
	}
	export interface DeleteOTAUpdateResponseFormProperties {
	}
	export function CreateDeleteOTAUpdateResponseFormGroup() {
		return new FormGroup<DeleteOTAUpdateResponseFormProperties>({
		});

	}

	export interface DeleteProvisioningTemplateResponse {
	}
	export interface DeleteProvisioningTemplateResponseFormProperties {
	}
	export function CreateDeleteProvisioningTemplateResponseFormGroup() {
		return new FormGroup<DeleteProvisioningTemplateResponseFormProperties>({
		});

	}

	export interface DeleteProvisioningTemplateVersionResponse {
	}
	export interface DeleteProvisioningTemplateVersionResponseFormProperties {
	}
	export function CreateDeleteProvisioningTemplateVersionResponseFormGroup() {
		return new FormGroup<DeleteProvisioningTemplateVersionResponseFormProperties>({
		});

	}


	/** The output for the DeleteRegistrationCode operation. */
	export interface DeleteRegistrationCodeResponse {
	}

	/** The output for the DeleteRegistrationCode operation. */
	export interface DeleteRegistrationCodeResponseFormProperties {
	}
	export function CreateDeleteRegistrationCodeResponseFormGroup() {
		return new FormGroup<DeleteRegistrationCodeResponseFormProperties>({
		});

	}

	export interface DeleteRoleAliasResponse {
	}
	export interface DeleteRoleAliasResponseFormProperties {
	}
	export function CreateDeleteRoleAliasResponseFormGroup() {
		return new FormGroup<DeleteRoleAliasResponseFormProperties>({
		});

	}

	export interface DeleteScheduledAuditResponse {
	}
	export interface DeleteScheduledAuditResponseFormProperties {
	}
	export function CreateDeleteScheduledAuditResponseFormGroup() {
		return new FormGroup<DeleteScheduledAuditResponseFormProperties>({
		});

	}

	export interface DeleteSecurityProfileResponse {
	}
	export interface DeleteSecurityProfileResponseFormProperties {
	}
	export function CreateDeleteSecurityProfileResponseFormGroup() {
		return new FormGroup<DeleteSecurityProfileResponseFormProperties>({
		});

	}

	export interface DeleteStreamResponse {
	}
	export interface DeleteStreamResponseFormProperties {
	}
	export function CreateDeleteStreamResponseFormGroup() {
		return new FormGroup<DeleteStreamResponseFormProperties>({
		});

	}


	/** The output of the DeleteThing operation. */
	export interface DeleteThingResponse {
	}

	/** The output of the DeleteThing operation. */
	export interface DeleteThingResponseFormProperties {
	}
	export function CreateDeleteThingResponseFormGroup() {
		return new FormGroup<DeleteThingResponseFormProperties>({
		});

	}

	export interface DeleteThingGroupResponse {
	}
	export interface DeleteThingGroupResponseFormProperties {
	}
	export function CreateDeleteThingGroupResponseFormGroup() {
		return new FormGroup<DeleteThingGroupResponseFormProperties>({
		});

	}


	/** The output for the DeleteThingType operation. */
	export interface DeleteThingTypeResponse {
	}

	/** The output for the DeleteThingType operation. */
	export interface DeleteThingTypeResponseFormProperties {
	}
	export function CreateDeleteThingTypeResponseFormGroup() {
		return new FormGroup<DeleteThingTypeResponseFormProperties>({
		});

	}

	export interface DeleteTopicRuleDestinationResponse {
	}
	export interface DeleteTopicRuleDestinationResponseFormProperties {
	}
	export function CreateDeleteTopicRuleDestinationResponseFormGroup() {
		return new FormGroup<DeleteTopicRuleDestinationResponseFormProperties>({
		});

	}


	/** The output for the DeprecateThingType operation. */
	export interface DeprecateThingTypeResponse {
	}

	/** The output for the DeprecateThingType operation. */
	export interface DeprecateThingTypeResponseFormProperties {
	}
	export function CreateDeprecateThingTypeResponseFormGroup() {
		return new FormGroup<DeprecateThingTypeResponseFormProperties>({
		});

	}

	export interface DescribeAccountAuditConfigurationResponse {

		/**
		 * Max length: 2048
		 * Min length: 20
		 */
		roleArn?: string | null;
		auditNotificationTargetConfigurations?: AuditNotificationTargetConfigurations;
		auditCheckConfigurations?: AuditCheckConfigurations;
	}
	export interface DescribeAccountAuditConfigurationResponseFormProperties {

		/**
		 * Max length: 2048
		 * Min length: 20
		 */
		roleArn: FormControl<string | null | undefined>,
	}
	export function CreateDescribeAccountAuditConfigurationResponseFormGroup() {
		return new FormGroup<DescribeAccountAuditConfigurationResponseFormProperties>({
			roleArn: new FormControl<string | null | undefined>(undefined, [Validators.minLength(20), Validators.maxLength(2048)]),
		});

	}

	export interface AuditNotificationTargetConfigurations {
	}
	export interface AuditNotificationTargetConfigurationsFormProperties {
	}
	export function CreateAuditNotificationTargetConfigurationsFormGroup() {
		return new FormGroup<AuditNotificationTargetConfigurationsFormProperties>({
		});

	}

	export interface AuditCheckConfigurations {
	}
	export interface AuditCheckConfigurationsFormProperties {
	}
	export function CreateAuditCheckConfigurationsFormGroup() {
		return new FormGroup<AuditCheckConfigurationsFormProperties>({
		});

	}

	export interface DescribeAuditFindingResponse {

		/** The findings (results) of the audit. */
		finding?: AuditFinding;
	}
	export interface DescribeAuditFindingResponseFormProperties {
	}
	export function CreateDescribeAuditFindingResponseFormGroup() {
		return new FormGroup<DescribeAuditFindingResponseFormProperties>({
		});

	}


	/** The findings (results) of the audit. */
	export interface AuditFinding {

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		findingId?: string | null;

		/**
		 * Max length: 40
		 * Min length: 1
		 */
		taskId?: string | null;

		/** An audit check name. Checks must be enabled for your account. (Use <code>DescribeAccountAuditConfiguration</code> to see the list of all checks, including those that are enabled or use <code>UpdateAccountAuditConfiguration</code> to select which checks are enabled.) */
		checkName?: string | null;
		taskStartTime?: Date | null;
		findingTime?: Date | null;
		severity?: AuditFindingSeverity | null;

		/** Information about the resource that was noncompliant with the audit check. */
		nonCompliantResource?: NonCompliantResource;
		relatedResources?: Array<RelatedResource>;
		reasonForNonCompliance?: string | null;
		reasonForNonComplianceCode?: string | null;
	}

	/** The findings (results) of the audit. */
	export interface AuditFindingFormProperties {

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		findingId: FormControl<string | null | undefined>,

		/**
		 * Max length: 40
		 * Min length: 1
		 */
		taskId: FormControl<string | null | undefined>,

		/** An audit check name. Checks must be enabled for your account. (Use <code>DescribeAccountAuditConfiguration</code> to see the list of all checks, including those that are enabled or use <code>UpdateAccountAuditConfiguration</code> to select which checks are enabled.) */
		checkName: FormControl<string | null | undefined>,
		taskStartTime: FormControl<Date | null | undefined>,
		findingTime: FormControl<Date | null | undefined>,
		severity: FormControl<AuditFindingSeverity | null | undefined>,
		reasonForNonCompliance: FormControl<string | null | undefined>,
		reasonForNonComplianceCode: FormControl<string | null | undefined>,
	}
	export function CreateAuditFindingFormGroup() {
		return new FormGroup<AuditFindingFormProperties>({
			findingId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(128), Validators.pattern('[a-zA-Z0-9_-]+')]),
			taskId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(40), Validators.pattern('[a-zA-Z0-9\-]+')]),
			checkName: new FormControl<string | null | undefined>(undefined),
			taskStartTime: new FormControl<Date | null | undefined>(undefined),
			findingTime: new FormControl<Date | null | undefined>(undefined),
			severity: new FormControl<AuditFindingSeverity | null | undefined>(undefined),
			reasonForNonCompliance: new FormControl<string | null | undefined>(undefined),
			reasonForNonComplianceCode: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum AuditFindingSeverity { CRITICAL = 0, HIGH = 1, MEDIUM = 2, LOW = 3 }


	/** Information about the resource that was noncompliant with the audit check. */
	export interface NonCompliantResource {
		resourceType?: NonCompliantResourceResourceType | null;

		/** Information that identifies the noncompliant resource. */
		resourceIdentifier?: ResourceIdentifier;
		additionalInfo?: StringMap;
	}

	/** Information about the resource that was noncompliant with the audit check. */
	export interface NonCompliantResourceFormProperties {
		resourceType: FormControl<NonCompliantResourceResourceType | null | undefined>,
	}
	export function CreateNonCompliantResourceFormGroup() {
		return new FormGroup<NonCompliantResourceFormProperties>({
			resourceType: new FormControl<NonCompliantResourceResourceType | null | undefined>(undefined),
		});

	}

	export enum NonCompliantResourceResourceType { DEVICE_CERTIFICATE = 0, CA_CERTIFICATE = 1, IOT_POLICY = 2, COGNITO_IDENTITY_POOL = 3, CLIENT_ID = 4, ACCOUNT_SETTINGS = 5, ROLE_ALIAS = 6, IAM_ROLE = 7 }


	/** Information that identifies the noncompliant resource. */
	export interface ResourceIdentifier {

		/**
		 * Max length: 64
		 * Min length: 64
		 */
		deviceCertificateId?: string | null;

		/**
		 * Max length: 64
		 * Min length: 64
		 */
		caCertificateId?: string | null;
		cognitoIdentityPoolId?: string | null;
		clientId?: string | null;

		/** Information about the version of the policy associated with the resource. */
		policyVersionIdentifier?: PolicyVersionIdentifier;

		/**
		 * Max length: 12
		 * Min length: 12
		 */
		account?: string | null;

		/**
		 * Max length: 2048
		 * Min length: 20
		 */
		iamRoleArn?: string | null;

		/**
		 * Max length: 2048
		 * Min length: 1
		 */
		roleAliasArn?: string | null;
	}

	/** Information that identifies the noncompliant resource. */
	export interface ResourceIdentifierFormProperties {

		/**
		 * Max length: 64
		 * Min length: 64
		 */
		deviceCertificateId: FormControl<string | null | undefined>,

		/**
		 * Max length: 64
		 * Min length: 64
		 */
		caCertificateId: FormControl<string | null | undefined>,
		cognitoIdentityPoolId: FormControl<string | null | undefined>,
		clientId: FormControl<string | null | undefined>,

		/**
		 * Max length: 12
		 * Min length: 12
		 */
		account: FormControl<string | null | undefined>,

		/**
		 * Max length: 2048
		 * Min length: 20
		 */
		iamRoleArn: FormControl<string | null | undefined>,

		/**
		 * Max length: 2048
		 * Min length: 1
		 */
		roleAliasArn: FormControl<string | null | undefined>,
	}
	export function CreateResourceIdentifierFormGroup() {
		return new FormGroup<ResourceIdentifierFormProperties>({
			deviceCertificateId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(64), Validators.maxLength(64), Validators.pattern('(0x)?[a-fA-F0-9]+')]),
			caCertificateId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(64), Validators.maxLength(64), Validators.pattern('(0x)?[a-fA-F0-9]+')]),
			cognitoIdentityPoolId: new FormControl<string | null | undefined>(undefined),
			clientId: new FormControl<string | null | undefined>(undefined),
			account: new FormControl<string | null | undefined>(undefined, [Validators.minLength(12), Validators.maxLength(12), Validators.pattern('[0-9]+')]),
			iamRoleArn: new FormControl<string | null | undefined>(undefined, [Validators.minLength(20), Validators.maxLength(2048)]),
			roleAliasArn: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(2048)]),
		});

	}


	/** Information about the version of the policy associated with the resource. */
	export interface PolicyVersionIdentifier {

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		policyName?: string | null;
		policyVersionId?: string | null;
	}

	/** Information about the version of the policy associated with the resource. */
	export interface PolicyVersionIdentifierFormProperties {

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		policyName: FormControl<string | null | undefined>,
		policyVersionId: FormControl<string | null | undefined>,
	}
	export function CreatePolicyVersionIdentifierFormGroup() {
		return new FormGroup<PolicyVersionIdentifierFormProperties>({
			policyName: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(128), Validators.pattern('[\w+=,.@-]+')]),
			policyVersionId: new FormControl<string | null | undefined>(undefined, [Validators.pattern('[0-9]+')]),
		});

	}

	export interface StringMap {
	}
	export interface StringMapFormProperties {
	}
	export function CreateStringMapFormGroup() {
		return new FormGroup<StringMapFormProperties>({
		});

	}


	/** Information about a related resource. */
	export interface RelatedResource {
		resourceType?: NonCompliantResourceResourceType | null;

		/** Information that identifies the noncompliant resource. */
		resourceIdentifier?: ResourceIdentifier;
		additionalInfo?: StringMap;
	}

	/** Information about a related resource. */
	export interface RelatedResourceFormProperties {
		resourceType: FormControl<NonCompliantResourceResourceType | null | undefined>,
	}
	export function CreateRelatedResourceFormGroup() {
		return new FormGroup<RelatedResourceFormProperties>({
			resourceType: new FormControl<NonCompliantResourceResourceType | null | undefined>(undefined),
		});

	}

	export interface DescribeAuditMitigationActionsTaskResponse {
		taskStatus?: DescribeAuditMitigationActionsTaskResponseTaskStatus | null;
		startTime?: Date | null;
		endTime?: Date | null;
		taskStatistics?: AuditMitigationActionsTaskStatistics;

		/** Used in MitigationActionParams, this information identifies the target findings to which the mitigation actions are applied. Only one entry appears. */
		target?: AuditMitigationActionsTaskTarget;
		auditCheckToActionsMapping?: AuditCheckToActionsMapping;
		actionsDefinition?: Array<MitigationAction>;
	}
	export interface DescribeAuditMitigationActionsTaskResponseFormProperties {
		taskStatus: FormControl<DescribeAuditMitigationActionsTaskResponseTaskStatus | null | undefined>,
		startTime: FormControl<Date | null | undefined>,
		endTime: FormControl<Date | null | undefined>,
	}
	export function CreateDescribeAuditMitigationActionsTaskResponseFormGroup() {
		return new FormGroup<DescribeAuditMitigationActionsTaskResponseFormProperties>({
			taskStatus: new FormControl<DescribeAuditMitigationActionsTaskResponseTaskStatus | null | undefined>(undefined),
			startTime: new FormControl<Date | null | undefined>(undefined),
			endTime: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export enum DescribeAuditMitigationActionsTaskResponseTaskStatus { IN_PROGRESS = 0, COMPLETED = 1, FAILED = 2, CANCELED = 3 }

	export interface AuditMitigationActionsTaskStatistics {
	}
	export interface AuditMitigationActionsTaskStatisticsFormProperties {
	}
	export function CreateAuditMitigationActionsTaskStatisticsFormGroup() {
		return new FormGroup<AuditMitigationActionsTaskStatisticsFormProperties>({
		});

	}


	/** Used in MitigationActionParams, this information identifies the target findings to which the mitigation actions are applied. Only one entry appears. */
	export interface AuditMitigationActionsTaskTarget {

		/**
		 * Max length: 40
		 * Min length: 1
		 */
		auditTaskId?: string | null;

		/**
		 * Minimum items: 1
		 * Maximum items: 25
		 */
		findingIds?: Array<string>;
		auditCheckToReasonCodeFilter?: AuditCheckToReasonCodeFilter;
	}

	/** Used in MitigationActionParams, this information identifies the target findings to which the mitigation actions are applied. Only one entry appears. */
	export interface AuditMitigationActionsTaskTargetFormProperties {

		/**
		 * Max length: 40
		 * Min length: 1
		 */
		auditTaskId: FormControl<string | null | undefined>,
	}
	export function CreateAuditMitigationActionsTaskTargetFormGroup() {
		return new FormGroup<AuditMitigationActionsTaskTargetFormProperties>({
			auditTaskId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(40), Validators.pattern('[a-zA-Z0-9\-]+')]),
		});

	}

	export interface AuditCheckToReasonCodeFilter {
	}
	export interface AuditCheckToReasonCodeFilterFormProperties {
	}
	export function CreateAuditCheckToReasonCodeFilterFormGroup() {
		return new FormGroup<AuditCheckToReasonCodeFilterFormProperties>({
		});

	}

	export interface AuditCheckToActionsMapping {
	}
	export interface AuditCheckToActionsMappingFormProperties {
	}
	export function CreateAuditCheckToActionsMappingFormGroup() {
		return new FormGroup<AuditCheckToActionsMappingFormProperties>({
		});

	}


	/** Describes which changes should be applied as part of a mitigation action. */
	export interface MitigationAction {

		/** Max length: 128 */
		name?: string | null;
		id?: string | null;

		/**
		 * Max length: 2048
		 * Min length: 20
		 */
		roleArn?: string | null;

		/** The set of parameters for this mitigation action. You can specify only one type of parameter (in other words, you can apply only one action for each defined mitigation action). */
		actionParams?: MitigationActionParams;
	}

	/** Describes which changes should be applied as part of a mitigation action. */
	export interface MitigationActionFormProperties {

		/** Max length: 128 */
		name: FormControl<string | null | undefined>,
		id: FormControl<string | null | undefined>,

		/**
		 * Max length: 2048
		 * Min length: 20
		 */
		roleArn: FormControl<string | null | undefined>,
	}
	export function CreateMitigationActionFormGroup() {
		return new FormGroup<MitigationActionFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(128), Validators.pattern('[a-zA-Z0-9_-]+')]),
			id: new FormControl<string | null | undefined>(undefined),
			roleArn: new FormControl<string | null | undefined>(undefined, [Validators.minLength(20), Validators.maxLength(2048)]),
		});

	}


	/** The set of parameters for this mitigation action. You can specify only one type of parameter (in other words, you can apply only one action for each defined mitigation action). */
	export interface MitigationActionParams {

		/** Parameters to define a mitigation action that changes the state of the device certificate to inactive. */
		updateDeviceCertificateParams?: UpdateDeviceCertificateParams;

		/** Parameters to define a mitigation action that changes the state of the CA certificate to inactive. */
		updateCACertificateParams?: UpdateCACertificateParams;

		/** Parameters used when defining a mitigation action that move a set of things to a thing group. */
		addThingsToThingGroupParams?: AddThingsToThingGroupParams;

		/** Parameters to define a mitigation action that adds a blank policy to restrict permissions. */
		replaceDefaultPolicyVersionParams?: ReplaceDefaultPolicyVersionParams;

		/** Parameters used when defining a mitigation action that enable AWS IoT logging. */
		enableIoTLoggingParams?: EnableIoTLoggingParams;

		/** Parameters to define a mitigation action that publishes findings to Amazon SNS. You can implement your own custom actions in response to the Amazon SNS messages. */
		publishFindingToSnsParams?: PublishFindingToSnsParams;
	}

	/** The set of parameters for this mitigation action. You can specify only one type of parameter (in other words, you can apply only one action for each defined mitigation action). */
	export interface MitigationActionParamsFormProperties {
	}
	export function CreateMitigationActionParamsFormGroup() {
		return new FormGroup<MitigationActionParamsFormProperties>({
		});

	}

	export interface DescribeAuditTaskResponse {
		taskStatus?: DescribeAuditMitigationActionsTaskResponseTaskStatus | null;
		taskType?: DescribeAuditTaskResponseTaskType | null;
		taskStartTime?: Date | null;

		/** Statistics for the checks performed during the audit. */
		taskStatistics?: TaskStatistics;

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		scheduledAuditName?: string | null;
		auditDetails?: AuditDetails;
	}
	export interface DescribeAuditTaskResponseFormProperties {
		taskStatus: FormControl<DescribeAuditMitigationActionsTaskResponseTaskStatus | null | undefined>,
		taskType: FormControl<DescribeAuditTaskResponseTaskType | null | undefined>,
		taskStartTime: FormControl<Date | null | undefined>,

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		scheduledAuditName: FormControl<string | null | undefined>,
	}
	export function CreateDescribeAuditTaskResponseFormGroup() {
		return new FormGroup<DescribeAuditTaskResponseFormProperties>({
			taskStatus: new FormControl<DescribeAuditMitigationActionsTaskResponseTaskStatus | null | undefined>(undefined),
			taskType: new FormControl<DescribeAuditTaskResponseTaskType | null | undefined>(undefined),
			taskStartTime: new FormControl<Date | null | undefined>(undefined),
			scheduledAuditName: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(128), Validators.pattern('[a-zA-Z0-9_-]+')]),
		});

	}

	export enum DescribeAuditTaskResponseTaskType { ON_DEMAND_AUDIT_TASK = 0, SCHEDULED_AUDIT_TASK = 1 }


	/** Statistics for the checks performed during the audit. */
	export interface TaskStatistics {
		totalChecks?: number | null;
		inProgressChecks?: number | null;
		waitingForDataCollectionChecks?: number | null;
		compliantChecks?: number | null;
		nonCompliantChecks?: number | null;
		failedChecks?: number | null;
		canceledChecks?: number | null;
	}

	/** Statistics for the checks performed during the audit. */
	export interface TaskStatisticsFormProperties {
		totalChecks: FormControl<number | null | undefined>,
		inProgressChecks: FormControl<number | null | undefined>,
		waitingForDataCollectionChecks: FormControl<number | null | undefined>,
		compliantChecks: FormControl<number | null | undefined>,
		nonCompliantChecks: FormControl<number | null | undefined>,
		failedChecks: FormControl<number | null | undefined>,
		canceledChecks: FormControl<number | null | undefined>,
	}
	export function CreateTaskStatisticsFormGroup() {
		return new FormGroup<TaskStatisticsFormProperties>({
			totalChecks: new FormControl<number | null | undefined>(undefined),
			inProgressChecks: new FormControl<number | null | undefined>(undefined),
			waitingForDataCollectionChecks: new FormControl<number | null | undefined>(undefined),
			compliantChecks: new FormControl<number | null | undefined>(undefined),
			nonCompliantChecks: new FormControl<number | null | undefined>(undefined),
			failedChecks: new FormControl<number | null | undefined>(undefined),
			canceledChecks: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface AuditDetails {
	}
	export interface AuditDetailsFormProperties {
	}
	export function CreateAuditDetailsFormGroup() {
		return new FormGroup<AuditDetailsFormProperties>({
		});

	}

	export interface DescribeAuthorizerResponse {

		/** The authorizer description. */
		authorizerDescription?: AuthorizerDescription;
	}
	export interface DescribeAuthorizerResponseFormProperties {
	}
	export function CreateDescribeAuthorizerResponseFormGroup() {
		return new FormGroup<DescribeAuthorizerResponseFormProperties>({
		});

	}


	/** The authorizer description. */
	export interface AuthorizerDescription {

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		authorizerName?: string | null;
		authorizerArn?: string | null;
		authorizerFunctionArn?: string | null;

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		tokenKeyName?: string | null;
		tokenSigningPublicKeys?: PublicKeyMap;
		status?: AuthorizerDescriptionStatus | null;
		creationDate?: Date | null;
		lastModifiedDate?: Date | null;
		signingDisabled?: boolean | null;
	}

	/** The authorizer description. */
	export interface AuthorizerDescriptionFormProperties {

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		authorizerName: FormControl<string | null | undefined>,
		authorizerArn: FormControl<string | null | undefined>,
		authorizerFunctionArn: FormControl<string | null | undefined>,

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		tokenKeyName: FormControl<string | null | undefined>,
		status: FormControl<AuthorizerDescriptionStatus | null | undefined>,
		creationDate: FormControl<Date | null | undefined>,
		lastModifiedDate: FormControl<Date | null | undefined>,
		signingDisabled: FormControl<boolean | null | undefined>,
	}
	export function CreateAuthorizerDescriptionFormGroup() {
		return new FormGroup<AuthorizerDescriptionFormProperties>({
			authorizerName: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(128), Validators.pattern('[\w=,@-]+')]),
			authorizerArn: new FormControl<string | null | undefined>(undefined),
			authorizerFunctionArn: new FormControl<string | null | undefined>(undefined),
			tokenKeyName: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(128), Validators.pattern('[a-zA-Z0-9_-]+')]),
			status: new FormControl<AuthorizerDescriptionStatus | null | undefined>(undefined),
			creationDate: new FormControl<Date | null | undefined>(undefined),
			lastModifiedDate: new FormControl<Date | null | undefined>(undefined),
			signingDisabled: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface PublicKeyMap {
	}
	export interface PublicKeyMapFormProperties {
	}
	export function CreatePublicKeyMapFormGroup() {
		return new FormGroup<PublicKeyMapFormProperties>({
		});

	}

	export enum AuthorizerDescriptionStatus { ACTIVE = 0, INACTIVE = 1 }

	export interface DescribeBillingGroupResponse {

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		billingGroupName?: string | null;

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		billingGroupId?: string | null;
		billingGroupArn?: string | null;
		version?: number | null;

		/** The properties of a billing group. */
		billingGroupProperties?: BillingGroupProperties;

		/** Additional information about the billing group. */
		billingGroupMetadata?: BillingGroupMetadata;
	}
	export interface DescribeBillingGroupResponseFormProperties {

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		billingGroupName: FormControl<string | null | undefined>,

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		billingGroupId: FormControl<string | null | undefined>,
		billingGroupArn: FormControl<string | null | undefined>,
		version: FormControl<number | null | undefined>,
	}
	export function CreateDescribeBillingGroupResponseFormGroup() {
		return new FormGroup<DescribeBillingGroupResponseFormProperties>({
			billingGroupName: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(128), Validators.pattern('[a-zA-Z0-9:_-]+')]),
			billingGroupId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(128), Validators.pattern('[a-zA-Z0-9\-]+')]),
			billingGroupArn: new FormControl<string | null | undefined>(undefined),
			version: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** The properties of a billing group. */
	export interface BillingGroupProperties {

		/** Max length: 2028 */
		billingGroupDescription?: string | null;
	}

	/** The properties of a billing group. */
	export interface BillingGroupPropertiesFormProperties {

		/** Max length: 2028 */
		billingGroupDescription: FormControl<string | null | undefined>,
	}
	export function CreateBillingGroupPropertiesFormGroup() {
		return new FormGroup<BillingGroupPropertiesFormProperties>({
			billingGroupDescription: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(2028), Validators.pattern('[\p{Graph}\x20]*')]),
		});

	}


	/** Additional information about the billing group. */
	export interface BillingGroupMetadata {
		creationDate?: Date | null;
	}

	/** Additional information about the billing group. */
	export interface BillingGroupMetadataFormProperties {
		creationDate: FormControl<Date | null | undefined>,
	}
	export function CreateBillingGroupMetadataFormGroup() {
		return new FormGroup<BillingGroupMetadataFormProperties>({
			creationDate: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/** The output from the DescribeCACertificate operation. */
	export interface DescribeCACertificateResponse {

		/** Describes a CA certificate. */
		certificateDescription?: CACertificateDescription;

		/** The registration configuration. */
		registrationConfig?: RegistrationConfig;
	}

	/** The output from the DescribeCACertificate operation. */
	export interface DescribeCACertificateResponseFormProperties {
	}
	export function CreateDescribeCACertificateResponseFormGroup() {
		return new FormGroup<DescribeCACertificateResponseFormProperties>({
		});

	}


	/** Describes a CA certificate. */
	export interface CACertificateDescription {
		certificateArn?: string | null;

		/**
		 * Max length: 64
		 * Min length: 64
		 */
		certificateId?: string | null;
		status?: AuthorizerDescriptionStatus | null;

		/**
		 * The PEM of a certificate.
		 * Max length: 65536
		 * Min length: 1
		 */
		certificatePem?: string | null;

		/**
		 * Max length: 12
		 * Min length: 12
		 */
		ownedBy?: string | null;
		creationDate?: Date | null;
		autoRegistrationStatus?: CACertificateDescriptionAutoRegistrationStatus | null;
		lastModifiedDate?: Date | null;

		/** Minimum: 1 */
		customerVersion?: number | null;
		generationId?: string | null;

		/** When the certificate is valid. */
		validity?: CertificateValidity;
	}

	/** Describes a CA certificate. */
	export interface CACertificateDescriptionFormProperties {
		certificateArn: FormControl<string | null | undefined>,

		/**
		 * Max length: 64
		 * Min length: 64
		 */
		certificateId: FormControl<string | null | undefined>,
		status: FormControl<AuthorizerDescriptionStatus | null | undefined>,

		/**
		 * The PEM of a certificate.
		 * Max length: 65536
		 * Min length: 1
		 */
		certificatePem: FormControl<string | null | undefined>,

		/**
		 * Max length: 12
		 * Min length: 12
		 */
		ownedBy: FormControl<string | null | undefined>,
		creationDate: FormControl<Date | null | undefined>,
		autoRegistrationStatus: FormControl<CACertificateDescriptionAutoRegistrationStatus | null | undefined>,
		lastModifiedDate: FormControl<Date | null | undefined>,

		/** Minimum: 1 */
		customerVersion: FormControl<number | null | undefined>,
		generationId: FormControl<string | null | undefined>,
	}
	export function CreateCACertificateDescriptionFormGroup() {
		return new FormGroup<CACertificateDescriptionFormProperties>({
			certificateArn: new FormControl<string | null | undefined>(undefined),
			certificateId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(64), Validators.maxLength(64), Validators.pattern('(0x)?[a-fA-F0-9]+')]),
			status: new FormControl<AuthorizerDescriptionStatus | null | undefined>(undefined),
			certificatePem: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(65536)]),
			ownedBy: new FormControl<string | null | undefined>(undefined, [Validators.minLength(12), Validators.maxLength(12), Validators.pattern('[0-9]+')]),
			creationDate: new FormControl<Date | null | undefined>(undefined),
			autoRegistrationStatus: new FormControl<CACertificateDescriptionAutoRegistrationStatus | null | undefined>(undefined),
			lastModifiedDate: new FormControl<Date | null | undefined>(undefined),
			customerVersion: new FormControl<number | null | undefined>(undefined, [Validators.min(1)]),
			generationId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum CACertificateDescriptionAutoRegistrationStatus { ENABLE = 0, DISABLE = 1 }


	/** When the certificate is valid. */
	export interface CertificateValidity {
		notBefore?: Date | null;
		notAfter?: Date | null;
	}

	/** When the certificate is valid. */
	export interface CertificateValidityFormProperties {
		notBefore: FormControl<Date | null | undefined>,
		notAfter: FormControl<Date | null | undefined>,
	}
	export function CreateCertificateValidityFormGroup() {
		return new FormGroup<CertificateValidityFormProperties>({
			notBefore: new FormControl<Date | null | undefined>(undefined),
			notAfter: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/** The registration configuration. */
	export interface RegistrationConfig {
		templateBody?: string | null;

		/**
		 * Max length: 2048
		 * Min length: 20
		 */
		roleArn?: string | null;
	}

	/** The registration configuration. */
	export interface RegistrationConfigFormProperties {
		templateBody: FormControl<string | null | undefined>,

		/**
		 * Max length: 2048
		 * Min length: 20
		 */
		roleArn: FormControl<string | null | undefined>,
	}
	export function CreateRegistrationConfigFormGroup() {
		return new FormGroup<RegistrationConfigFormProperties>({
			templateBody: new FormControl<string | null | undefined>(undefined),
			roleArn: new FormControl<string | null | undefined>(undefined, [Validators.minLength(20), Validators.maxLength(2048)]),
		});

	}


	/** The output of the DescribeCertificate operation. */
	export interface DescribeCertificateResponse {

		/** Describes a certificate. */
		certificateDescription?: CertificateDescription;
	}

	/** The output of the DescribeCertificate operation. */
	export interface DescribeCertificateResponseFormProperties {
	}
	export function CreateDescribeCertificateResponseFormGroup() {
		return new FormGroup<DescribeCertificateResponseFormProperties>({
		});

	}


	/** Describes a certificate. */
	export interface CertificateDescription {
		certificateArn?: string | null;

		/**
		 * Max length: 64
		 * Min length: 64
		 */
		certificateId?: string | null;

		/**
		 * Max length: 64
		 * Min length: 64
		 */
		caCertificateId?: string | null;
		status?: CertificateDescriptionStatus | null;

		/**
		 * The PEM of a certificate.
		 * Max length: 65536
		 * Min length: 1
		 */
		certificatePem?: string | null;

		/**
		 * Max length: 12
		 * Min length: 12
		 */
		ownedBy?: string | null;

		/**
		 * Max length: 12
		 * Min length: 12
		 */
		previousOwnedBy?: string | null;
		creationDate?: Date | null;
		lastModifiedDate?: Date | null;

		/** Minimum: 1 */
		customerVersion?: number | null;

		/** Data used to transfer a certificate to an AWS account. */
		transferData?: TransferData;
		generationId?: string | null;

		/** When the certificate is valid. */
		validity?: CertificateValidity;
		certificateMode?: CertificateDescriptionCertificateMode | null;
	}

	/** Describes a certificate. */
	export interface CertificateDescriptionFormProperties {
		certificateArn: FormControl<string | null | undefined>,

		/**
		 * Max length: 64
		 * Min length: 64
		 */
		certificateId: FormControl<string | null | undefined>,

		/**
		 * Max length: 64
		 * Min length: 64
		 */
		caCertificateId: FormControl<string | null | undefined>,
		status: FormControl<CertificateDescriptionStatus | null | undefined>,

		/**
		 * The PEM of a certificate.
		 * Max length: 65536
		 * Min length: 1
		 */
		certificatePem: FormControl<string | null | undefined>,

		/**
		 * Max length: 12
		 * Min length: 12
		 */
		ownedBy: FormControl<string | null | undefined>,

		/**
		 * Max length: 12
		 * Min length: 12
		 */
		previousOwnedBy: FormControl<string | null | undefined>,
		creationDate: FormControl<Date | null | undefined>,
		lastModifiedDate: FormControl<Date | null | undefined>,

		/** Minimum: 1 */
		customerVersion: FormControl<number | null | undefined>,
		generationId: FormControl<string | null | undefined>,
		certificateMode: FormControl<CertificateDescriptionCertificateMode | null | undefined>,
	}
	export function CreateCertificateDescriptionFormGroup() {
		return new FormGroup<CertificateDescriptionFormProperties>({
			certificateArn: new FormControl<string | null | undefined>(undefined),
			certificateId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(64), Validators.maxLength(64), Validators.pattern('(0x)?[a-fA-F0-9]+')]),
			caCertificateId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(64), Validators.maxLength(64), Validators.pattern('(0x)?[a-fA-F0-9]+')]),
			status: new FormControl<CertificateDescriptionStatus | null | undefined>(undefined),
			certificatePem: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(65536)]),
			ownedBy: new FormControl<string | null | undefined>(undefined, [Validators.minLength(12), Validators.maxLength(12), Validators.pattern('[0-9]+')]),
			previousOwnedBy: new FormControl<string | null | undefined>(undefined, [Validators.minLength(12), Validators.maxLength(12), Validators.pattern('[0-9]+')]),
			creationDate: new FormControl<Date | null | undefined>(undefined),
			lastModifiedDate: new FormControl<Date | null | undefined>(undefined),
			customerVersion: new FormControl<number | null | undefined>(undefined, [Validators.min(1)]),
			generationId: new FormControl<string | null | undefined>(undefined),
			certificateMode: new FormControl<CertificateDescriptionCertificateMode | null | undefined>(undefined),
		});

	}

	export enum CertificateDescriptionStatus { ACTIVE = 0, INACTIVE = 1, REVOKED = 2, PENDING_TRANSFER = 3, REGISTER_INACTIVE = 4, PENDING_ACTIVATION = 5 }


	/** Data used to transfer a certificate to an AWS account. */
	export interface TransferData {

		/** Max length: 128 */
		transferMessage?: string | null;

		/** Max length: 128 */
		rejectReason?: string | null;
		transferDate?: Date | null;
		acceptDate?: Date | null;
		rejectDate?: Date | null;
	}

	/** Data used to transfer a certificate to an AWS account. */
	export interface TransferDataFormProperties {

		/** Max length: 128 */
		transferMessage: FormControl<string | null | undefined>,

		/** Max length: 128 */
		rejectReason: FormControl<string | null | undefined>,
		transferDate: FormControl<Date | null | undefined>,
		acceptDate: FormControl<Date | null | undefined>,
		rejectDate: FormControl<Date | null | undefined>,
	}
	export function CreateTransferDataFormGroup() {
		return new FormGroup<TransferDataFormProperties>({
			transferMessage: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(128)]),
			rejectReason: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(128)]),
			transferDate: new FormControl<Date | null | undefined>(undefined),
			acceptDate: new FormControl<Date | null | undefined>(undefined),
			rejectDate: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export enum CertificateDescriptionCertificateMode { DEFAULT = 0, SNI_ONLY = 1 }

	export interface DescribeDefaultAuthorizerResponse {

		/** The authorizer description. */
		authorizerDescription?: AuthorizerDescription;
	}
	export interface DescribeDefaultAuthorizerResponseFormProperties {
	}
	export function CreateDescribeDefaultAuthorizerResponseFormGroup() {
		return new FormGroup<DescribeDefaultAuthorizerResponseFormProperties>({
		});

	}

	export interface DescribeDimensionResponse {

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		name?: string | null;
		arn?: string | null;
		type?: DescribeDimensionResponseType | null;

		/**
		 * Minimum items: 1
		 * Maximum items: 100
		 */
		stringValues?: Array<string>;
		creationDate?: Date | null;
		lastModifiedDate?: Date | null;
	}
	export interface DescribeDimensionResponseFormProperties {

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		name: FormControl<string | null | undefined>,
		arn: FormControl<string | null | undefined>,
		type: FormControl<DescribeDimensionResponseType | null | undefined>,
		creationDate: FormControl<Date | null | undefined>,
		lastModifiedDate: FormControl<Date | null | undefined>,
	}
	export function CreateDescribeDimensionResponseFormGroup() {
		return new FormGroup<DescribeDimensionResponseFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(128), Validators.pattern('[a-zA-Z0-9:_-]+')]),
			arn: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<DescribeDimensionResponseType | null | undefined>(undefined),
			creationDate: new FormControl<Date | null | undefined>(undefined),
			lastModifiedDate: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export enum DescribeDimensionResponseType { TOPIC_FILTER = 0 }

	export interface DescribeDomainConfigurationResponse {

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		domainConfigurationName?: string | null;
		domainConfigurationArn?: string | null;

		/**
		 * Max length: 253
		 * Min length: 1
		 */
		domainName?: string | null;
		serverCertificates?: Array<ServerCertificateSummary>;

		/** An object that specifies the authorization service for a domain. */
		authorizerConfig?: AuthorizerConfig;
		domainConfigurationStatus?: DescribeDomainConfigurationResponseDomainConfigurationStatus | null;
		serviceType?: DescribeDomainConfigurationResponseServiceType | null;
		domainType?: DescribeDomainConfigurationResponseDomainType | null;
	}
	export interface DescribeDomainConfigurationResponseFormProperties {

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		domainConfigurationName: FormControl<string | null | undefined>,
		domainConfigurationArn: FormControl<string | null | undefined>,

		/**
		 * Max length: 253
		 * Min length: 1
		 */
		domainName: FormControl<string | null | undefined>,
		domainConfigurationStatus: FormControl<DescribeDomainConfigurationResponseDomainConfigurationStatus | null | undefined>,
		serviceType: FormControl<DescribeDomainConfigurationResponseServiceType | null | undefined>,
		domainType: FormControl<DescribeDomainConfigurationResponseDomainType | null | undefined>,
	}
	export function CreateDescribeDomainConfigurationResponseFormGroup() {
		return new FormGroup<DescribeDomainConfigurationResponseFormProperties>({
			domainConfigurationName: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(128), Validators.pattern('[\w.:-]+')]),
			domainConfigurationArn: new FormControl<string | null | undefined>(undefined),
			domainName: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(253)]),
			domainConfigurationStatus: new FormControl<DescribeDomainConfigurationResponseDomainConfigurationStatus | null | undefined>(undefined),
			serviceType: new FormControl<DescribeDomainConfigurationResponseServiceType | null | undefined>(undefined),
			domainType: new FormControl<DescribeDomainConfigurationResponseDomainType | null | undefined>(undefined),
		});

	}


	/** An object that contains information about a server certificate. */
	export interface ServerCertificateSummary {

		/**
		 * Max length: 2048
		 * Min length: 1
		 */
		serverCertificateArn?: string | null;
		serverCertificateStatus?: ServerCertificateSummaryServerCertificateStatus | null;
		serverCertificateStatusDetail?: string | null;
	}

	/** An object that contains information about a server certificate. */
	export interface ServerCertificateSummaryFormProperties {

		/**
		 * Max length: 2048
		 * Min length: 1
		 */
		serverCertificateArn: FormControl<string | null | undefined>,
		serverCertificateStatus: FormControl<ServerCertificateSummaryServerCertificateStatus | null | undefined>,
		serverCertificateStatusDetail: FormControl<string | null | undefined>,
	}
	export function CreateServerCertificateSummaryFormGroup() {
		return new FormGroup<ServerCertificateSummaryFormProperties>({
			serverCertificateArn: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(2048), Validators.pattern('arn:aws:acm:[a-z]{2}-(gov-)?[a-z]{4,9}-\d{1}:\d{12}:certificate/?[a-zA-Z0-9/-]+')]),
			serverCertificateStatus: new FormControl<ServerCertificateSummaryServerCertificateStatus | null | undefined>(undefined),
			serverCertificateStatusDetail: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ServerCertificateSummaryServerCertificateStatus { INVALID = 0, VALID = 1 }


	/** An object that specifies the authorization service for a domain. */
	export interface AuthorizerConfig {

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		defaultAuthorizerName?: string | null;
		allowAuthorizerOverride?: boolean | null;
	}

	/** An object that specifies the authorization service for a domain. */
	export interface AuthorizerConfigFormProperties {

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		defaultAuthorizerName: FormControl<string | null | undefined>,
		allowAuthorizerOverride: FormControl<boolean | null | undefined>,
	}
	export function CreateAuthorizerConfigFormGroup() {
		return new FormGroup<AuthorizerConfigFormProperties>({
			defaultAuthorizerName: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(128), Validators.pattern('[\w=,@-]+')]),
			allowAuthorizerOverride: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export enum DescribeDomainConfigurationResponseDomainConfigurationStatus { ENABLED = 0, DISABLED = 1 }

	export enum DescribeDomainConfigurationResponseServiceType { DATA = 0, CREDENTIAL_PROVIDER = 1, JOBS = 2 }

	export enum DescribeDomainConfigurationResponseDomainType { ENDPOINT = 0, AWS_MANAGED = 1, CUSTOMER_MANAGED = 2 }


	/** The output from the DescribeEndpoint operation. */
	export interface DescribeEndpointResponse {
		endpointAddress?: string | null;
	}

	/** The output from the DescribeEndpoint operation. */
	export interface DescribeEndpointResponseFormProperties {
		endpointAddress: FormControl<string | null | undefined>,
	}
	export function CreateDescribeEndpointResponseFormGroup() {
		return new FormGroup<DescribeEndpointResponseFormProperties>({
			endpointAddress: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeEventConfigurationsResponse {
		eventConfigurations?: EventConfigurations;
		creationDate?: Date | null;
		lastModifiedDate?: Date | null;
	}
	export interface DescribeEventConfigurationsResponseFormProperties {
		creationDate: FormControl<Date | null | undefined>,
		lastModifiedDate: FormControl<Date | null | undefined>,
	}
	export function CreateDescribeEventConfigurationsResponseFormGroup() {
		return new FormGroup<DescribeEventConfigurationsResponseFormProperties>({
			creationDate: new FormControl<Date | null | undefined>(undefined),
			lastModifiedDate: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface EventConfigurations {
	}
	export interface EventConfigurationsFormProperties {
	}
	export function CreateEventConfigurationsFormGroup() {
		return new FormGroup<EventConfigurationsFormProperties>({
		});

	}

	export interface DescribeIndexResponse {

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		indexName?: string | null;
		indexStatus?: DescribeIndexResponseIndexStatus | null;
		schema?: string | null;
	}
	export interface DescribeIndexResponseFormProperties {

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		indexName: FormControl<string | null | undefined>,
		indexStatus: FormControl<DescribeIndexResponseIndexStatus | null | undefined>,
		schema: FormControl<string | null | undefined>,
	}
	export function CreateDescribeIndexResponseFormGroup() {
		return new FormGroup<DescribeIndexResponseFormProperties>({
			indexName: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(128), Validators.pattern('[a-zA-Z0-9:_-]+')]),
			indexStatus: new FormControl<DescribeIndexResponseIndexStatus | null | undefined>(undefined),
			schema: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum DescribeIndexResponseIndexStatus { ACTIVE = 0, BUILDING = 1, REBUILDING = 2 }

	export interface DescribeJobResponse {

		/**
		 * Max length: 1350
		 * Min length: 1
		 */
		documentSource?: string | null;

		/** The <code>Job</code> object contains details about a job. */
		job?: Job;
	}
	export interface DescribeJobResponseFormProperties {

		/**
		 * Max length: 1350
		 * Min length: 1
		 */
		documentSource: FormControl<string | null | undefined>,
	}
	export function CreateDescribeJobResponseFormGroup() {
		return new FormGroup<DescribeJobResponseFormProperties>({
			documentSource: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(1350)]),
		});

	}


	/** The <code>Job</code> object contains details about a job. */
	export interface Job {
		jobArn?: string | null;

		/**
		 * Max length: 64
		 * Min length: 1
		 */
		jobId?: string | null;
		targetSelection?: JobTargetSelection | null;
		status?: JobStatus | null;
		forceCanceled?: boolean | null;

		/** Max length: 128 */
		reasonCode?: string | null;

		/** Max length: 2028 */
		comment?: string | null;

		/** Minimum items: 1 */
		targets?: Array<string>;

		/** Max length: 2028 */
		description?: string | null;

		/** Configuration for pre-signed S3 URLs. */
		presignedUrlConfig?: PresignedUrlConfig;

		/** Allows you to create a staged rollout of a job. */
		jobExecutionsRolloutConfig?: JobExecutionsRolloutConfig;

		/** Details of abort criteria to abort the job. */
		abortConfig?: AbortConfig;
		createdAt?: Date | null;
		lastUpdatedAt?: Date | null;
		completedAt?: Date | null;

		/** The job process details. */
		jobProcessDetails?: JobProcessDetails;

		/** Specifies the amount of time each device has to finish its execution of the job. A timer is started when the job execution status is set to <code>IN_PROGRESS</code>. If the job execution status is not set to another terminal state before the timer expires, it will be automatically set to <code>TIMED_OUT</code>. */
		timeoutConfig?: TimeoutConfig;
	}

	/** The <code>Job</code> object contains details about a job. */
	export interface JobFormProperties {
		jobArn: FormControl<string | null | undefined>,

		/**
		 * Max length: 64
		 * Min length: 1
		 */
		jobId: FormControl<string | null | undefined>,
		targetSelection: FormControl<JobTargetSelection | null | undefined>,
		status: FormControl<JobStatus | null | undefined>,
		forceCanceled: FormControl<boolean | null | undefined>,

		/** Max length: 128 */
		reasonCode: FormControl<string | null | undefined>,

		/** Max length: 2028 */
		comment: FormControl<string | null | undefined>,

		/** Max length: 2028 */
		description: FormControl<string | null | undefined>,
		createdAt: FormControl<Date | null | undefined>,
		lastUpdatedAt: FormControl<Date | null | undefined>,
		completedAt: FormControl<Date | null | undefined>,
	}
	export function CreateJobFormGroup() {
		return new FormGroup<JobFormProperties>({
			jobArn: new FormControl<string | null | undefined>(undefined),
			jobId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(64), Validators.pattern('[a-zA-Z0-9_-]+')]),
			targetSelection: new FormControl<JobTargetSelection | null | undefined>(undefined),
			status: new FormControl<JobStatus | null | undefined>(undefined),
			forceCanceled: new FormControl<boolean | null | undefined>(undefined),
			reasonCode: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(128), Validators.pattern('[\p{Upper}\p{Digit}_]+')]),
			comment: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(2028), Validators.pattern('[^\p{C}]+')]),
			description: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(2028), Validators.pattern('[^\p{C}]+')]),
			createdAt: new FormControl<Date | null | undefined>(undefined),
			lastUpdatedAt: new FormControl<Date | null | undefined>(undefined),
			completedAt: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export enum JobTargetSelection { CONTINUOUS = 0, SNAPSHOT = 1 }

	export enum JobStatus { IN_PROGRESS = 0, CANCELED = 1, COMPLETED = 2, DELETION_IN_PROGRESS = 3 }


	/** Configuration for pre-signed S3 URLs. */
	export interface PresignedUrlConfig {

		/**
		 * Max length: 2048
		 * Min length: 20
		 */
		roleArn?: string | null;

		/**
		 * Minimum: 60
		 * Maximum: 3600
		 */
		expiresInSec?: number | null;
	}

	/** Configuration for pre-signed S3 URLs. */
	export interface PresignedUrlConfigFormProperties {

		/**
		 * Max length: 2048
		 * Min length: 20
		 */
		roleArn: FormControl<string | null | undefined>,

		/**
		 * Minimum: 60
		 * Maximum: 3600
		 */
		expiresInSec: FormControl<number | null | undefined>,
	}
	export function CreatePresignedUrlConfigFormGroup() {
		return new FormGroup<PresignedUrlConfigFormProperties>({
			roleArn: new FormControl<string | null | undefined>(undefined, [Validators.minLength(20), Validators.maxLength(2048)]),
			expiresInSec: new FormControl<number | null | undefined>(undefined, [Validators.min(60), Validators.max(3600)]),
		});

	}


	/** Allows you to create a staged rollout of a job. */
	export interface JobExecutionsRolloutConfig {

		/**
		 * Minimum: 1
		 * Maximum: 1000
		 */
		maximumPerMinute?: number | null;

		/** Allows you to create an exponential rate of rollout for a job. */
		exponentialRate?: ExponentialRolloutRate;
	}

	/** Allows you to create a staged rollout of a job. */
	export interface JobExecutionsRolloutConfigFormProperties {

		/**
		 * Minimum: 1
		 * Maximum: 1000
		 */
		maximumPerMinute: FormControl<number | null | undefined>,
	}
	export function CreateJobExecutionsRolloutConfigFormGroup() {
		return new FormGroup<JobExecutionsRolloutConfigFormProperties>({
			maximumPerMinute: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(1000)]),
		});

	}


	/** Details of abort criteria to abort the job. */
	export interface AbortConfig {

		/**
		 * Required
		 * Minimum items: 1
		 */
		criteriaList: Array<AbortCriteria>;
	}

	/** Details of abort criteria to abort the job. */
	export interface AbortConfigFormProperties {
	}
	export function CreateAbortConfigFormGroup() {
		return new FormGroup<AbortConfigFormProperties>({
		});

	}


	/** The job process details. */
	export interface JobProcessDetails {
		processingTargets?: Array<string>;
		numberOfCanceledThings?: number | null;
		numberOfSucceededThings?: number | null;
		numberOfFailedThings?: number | null;
		numberOfRejectedThings?: number | null;
		numberOfQueuedThings?: number | null;
		numberOfInProgressThings?: number | null;
		numberOfRemovedThings?: number | null;
		numberOfTimedOutThings?: number | null;
	}

	/** The job process details. */
	export interface JobProcessDetailsFormProperties {
		numberOfCanceledThings: FormControl<number | null | undefined>,
		numberOfSucceededThings: FormControl<number | null | undefined>,
		numberOfFailedThings: FormControl<number | null | undefined>,
		numberOfRejectedThings: FormControl<number | null | undefined>,
		numberOfQueuedThings: FormControl<number | null | undefined>,
		numberOfInProgressThings: FormControl<number | null | undefined>,
		numberOfRemovedThings: FormControl<number | null | undefined>,
		numberOfTimedOutThings: FormControl<number | null | undefined>,
	}
	export function CreateJobProcessDetailsFormGroup() {
		return new FormGroup<JobProcessDetailsFormProperties>({
			numberOfCanceledThings: new FormControl<number | null | undefined>(undefined),
			numberOfSucceededThings: new FormControl<number | null | undefined>(undefined),
			numberOfFailedThings: new FormControl<number | null | undefined>(undefined),
			numberOfRejectedThings: new FormControl<number | null | undefined>(undefined),
			numberOfQueuedThings: new FormControl<number | null | undefined>(undefined),
			numberOfInProgressThings: new FormControl<number | null | undefined>(undefined),
			numberOfRemovedThings: new FormControl<number | null | undefined>(undefined),
			numberOfTimedOutThings: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Specifies the amount of time each device has to finish its execution of the job. A timer is started when the job execution status is set to <code>IN_PROGRESS</code>. If the job execution status is not set to another terminal state before the timer expires, it will be automatically set to <code>TIMED_OUT</code>. */
	export interface TimeoutConfig {
		inProgressTimeoutInMinutes?: number | null;
	}

	/** Specifies the amount of time each device has to finish its execution of the job. A timer is started when the job execution status is set to <code>IN_PROGRESS</code>. If the job execution status is not set to another terminal state before the timer expires, it will be automatically set to <code>TIMED_OUT</code>. */
	export interface TimeoutConfigFormProperties {
		inProgressTimeoutInMinutes: FormControl<number | null | undefined>,
	}
	export function CreateTimeoutConfigFormGroup() {
		return new FormGroup<TimeoutConfigFormProperties>({
			inProgressTimeoutInMinutes: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface DescribeJobExecutionResponse {

		/** The job execution object represents the execution of a job on a particular device. */
		execution?: JobExecution;
	}
	export interface DescribeJobExecutionResponseFormProperties {
	}
	export function CreateDescribeJobExecutionResponseFormGroup() {
		return new FormGroup<DescribeJobExecutionResponseFormProperties>({
		});

	}


	/** The job execution object represents the execution of a job on a particular device. */
	export interface JobExecution {

		/**
		 * Max length: 64
		 * Min length: 1
		 */
		jobId?: string | null;
		status?: JobExecutionStatus | null;
		forceCanceled?: boolean | null;

		/** Details of the job execution status. */
		statusDetails?: JobExecutionStatusDetails;
		thingArn?: string | null;
		queuedAt?: Date | null;
		startedAt?: Date | null;
		lastUpdatedAt?: Date | null;
		executionNumber?: number | null;
		versionNumber?: number | null;
		approximateSecondsBeforeTimedOut?: number | null;
	}

	/** The job execution object represents the execution of a job on a particular device. */
	export interface JobExecutionFormProperties {

		/**
		 * Max length: 64
		 * Min length: 1
		 */
		jobId: FormControl<string | null | undefined>,
		status: FormControl<JobExecutionStatus | null | undefined>,
		forceCanceled: FormControl<boolean | null | undefined>,
		thingArn: FormControl<string | null | undefined>,
		queuedAt: FormControl<Date | null | undefined>,
		startedAt: FormControl<Date | null | undefined>,
		lastUpdatedAt: FormControl<Date | null | undefined>,
		executionNumber: FormControl<number | null | undefined>,
		versionNumber: FormControl<number | null | undefined>,
		approximateSecondsBeforeTimedOut: FormControl<number | null | undefined>,
	}
	export function CreateJobExecutionFormGroup() {
		return new FormGroup<JobExecutionFormProperties>({
			jobId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(64), Validators.pattern('[a-zA-Z0-9_-]+')]),
			status: new FormControl<JobExecutionStatus | null | undefined>(undefined),
			forceCanceled: new FormControl<boolean | null | undefined>(undefined),
			thingArn: new FormControl<string | null | undefined>(undefined),
			queuedAt: new FormControl<Date | null | undefined>(undefined),
			startedAt: new FormControl<Date | null | undefined>(undefined),
			lastUpdatedAt: new FormControl<Date | null | undefined>(undefined),
			executionNumber: new FormControl<number | null | undefined>(undefined),
			versionNumber: new FormControl<number | null | undefined>(undefined),
			approximateSecondsBeforeTimedOut: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum JobExecutionStatus { QUEUED = 0, IN_PROGRESS = 1, SUCCEEDED = 2, FAILED = 3, TIMED_OUT = 4, REJECTED = 5, REMOVED = 6, CANCELED = 7 }


	/** Details of the job execution status. */
	export interface JobExecutionStatusDetails {
		detailsMap?: DetailsMap;
	}

	/** Details of the job execution status. */
	export interface JobExecutionStatusDetailsFormProperties {
	}
	export function CreateJobExecutionStatusDetailsFormGroup() {
		return new FormGroup<JobExecutionStatusDetailsFormProperties>({
		});

	}

	export interface DetailsMap {
	}
	export interface DetailsMapFormProperties {
	}
	export function CreateDetailsMapFormGroup() {
		return new FormGroup<DetailsMapFormProperties>({
		});

	}

	export interface DescribeMitigationActionResponse {

		/** Max length: 128 */
		actionName?: string | null;
		actionType?: DescribeMitigationActionResponseActionType | null;
		actionArn?: string | null;
		actionId?: string | null;

		/**
		 * Max length: 2048
		 * Min length: 20
		 */
		roleArn?: string | null;

		/** The set of parameters for this mitigation action. You can specify only one type of parameter (in other words, you can apply only one action for each defined mitigation action). */
		actionParams?: MitigationActionParams;
		creationDate?: Date | null;
		lastModifiedDate?: Date | null;
	}
	export interface DescribeMitigationActionResponseFormProperties {

		/** Max length: 128 */
		actionName: FormControl<string | null | undefined>,
		actionType: FormControl<DescribeMitigationActionResponseActionType | null | undefined>,
		actionArn: FormControl<string | null | undefined>,
		actionId: FormControl<string | null | undefined>,

		/**
		 * Max length: 2048
		 * Min length: 20
		 */
		roleArn: FormControl<string | null | undefined>,
		creationDate: FormControl<Date | null | undefined>,
		lastModifiedDate: FormControl<Date | null | undefined>,
	}
	export function CreateDescribeMitigationActionResponseFormGroup() {
		return new FormGroup<DescribeMitigationActionResponseFormProperties>({
			actionName: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(128), Validators.pattern('[a-zA-Z0-9_-]+')]),
			actionType: new FormControl<DescribeMitigationActionResponseActionType | null | undefined>(undefined),
			actionArn: new FormControl<string | null | undefined>(undefined),
			actionId: new FormControl<string | null | undefined>(undefined),
			roleArn: new FormControl<string | null | undefined>(undefined, [Validators.minLength(20), Validators.maxLength(2048)]),
			creationDate: new FormControl<Date | null | undefined>(undefined),
			lastModifiedDate: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export enum DescribeMitigationActionResponseActionType { UPDATE_DEVICE_CERTIFICATE = 0, UPDATE_CA_CERTIFICATE = 1, ADD_THINGS_TO_THING_GROUP = 2, REPLACE_DEFAULT_POLICY_VERSION = 3, ENABLE_IOT_LOGGING = 4, PUBLISH_FINDING_TO_SNS = 5 }

	export interface DescribeProvisioningTemplateResponse {
		templateArn?: string | null;

		/**
		 * Max length: 36
		 * Min length: 1
		 */
		templateName?: string | null;

		/**
		 * Max length: 500
		 * Min length: 0
		 */
		description?: string | null;
		creationDate?: Date | null;
		lastModifiedDate?: Date | null;
		defaultVersionId?: number | null;
		templateBody?: string | null;
		enabled?: boolean | null;

		/**
		 * Max length: 2048
		 * Min length: 20
		 */
		provisioningRoleArn?: string | null;

		/** Structure that contains <code>payloadVersion</code> and <code>targetArn</code>. */
		preProvisioningHook?: ProvisioningHook;
	}
	export interface DescribeProvisioningTemplateResponseFormProperties {
		templateArn: FormControl<string | null | undefined>,

		/**
		 * Max length: 36
		 * Min length: 1
		 */
		templateName: FormControl<string | null | undefined>,

		/**
		 * Max length: 500
		 * Min length: 0
		 */
		description: FormControl<string | null | undefined>,
		creationDate: FormControl<Date | null | undefined>,
		lastModifiedDate: FormControl<Date | null | undefined>,
		defaultVersionId: FormControl<number | null | undefined>,
		templateBody: FormControl<string | null | undefined>,
		enabled: FormControl<boolean | null | undefined>,

		/**
		 * Max length: 2048
		 * Min length: 20
		 */
		provisioningRoleArn: FormControl<string | null | undefined>,
	}
	export function CreateDescribeProvisioningTemplateResponseFormGroup() {
		return new FormGroup<DescribeProvisioningTemplateResponseFormProperties>({
			templateArn: new FormControl<string | null | undefined>(undefined),
			templateName: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(36), Validators.pattern('^[0-9A-Za-z_-]+$')]),
			description: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(500), Validators.pattern('[^\p{C}]*')]),
			creationDate: new FormControl<Date | null | undefined>(undefined),
			lastModifiedDate: new FormControl<Date | null | undefined>(undefined),
			defaultVersionId: new FormControl<number | null | undefined>(undefined),
			templateBody: new FormControl<string | null | undefined>(undefined),
			enabled: new FormControl<boolean | null | undefined>(undefined),
			provisioningRoleArn: new FormControl<string | null | undefined>(undefined, [Validators.minLength(20), Validators.maxLength(2048)]),
		});

	}


	/** Structure that contains <code>payloadVersion</code> and <code>targetArn</code>. */
	export interface ProvisioningHook {

		/**
		 * Max length: 32
		 * Min length: 10
		 */
		payloadVersion?: string | null;

		/**
		 * Required
		 * Max length: 2048
		 */
		targetArn: string;
	}

	/** Structure that contains <code>payloadVersion</code> and <code>targetArn</code>. */
	export interface ProvisioningHookFormProperties {

		/**
		 * Max length: 32
		 * Min length: 10
		 */
		payloadVersion: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 2048
		 */
		targetArn: FormControl<string | null | undefined>,
	}
	export function CreateProvisioningHookFormGroup() {
		return new FormGroup<ProvisioningHookFormProperties>({
			payloadVersion: new FormControl<string | null | undefined>(undefined, [Validators.minLength(10), Validators.maxLength(32), Validators.pattern('^[0-9-]+$')]),
			targetArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(2048)]),
		});

	}

	export interface DescribeProvisioningTemplateVersionResponse {
		versionId?: number | null;
		creationDate?: Date | null;
		templateBody?: string | null;
		isDefaultVersion?: boolean | null;
	}
	export interface DescribeProvisioningTemplateVersionResponseFormProperties {
		versionId: FormControl<number | null | undefined>,
		creationDate: FormControl<Date | null | undefined>,
		templateBody: FormControl<string | null | undefined>,
		isDefaultVersion: FormControl<boolean | null | undefined>,
	}
	export function CreateDescribeProvisioningTemplateVersionResponseFormGroup() {
		return new FormGroup<DescribeProvisioningTemplateVersionResponseFormProperties>({
			versionId: new FormControl<number | null | undefined>(undefined),
			creationDate: new FormControl<Date | null | undefined>(undefined),
			templateBody: new FormControl<string | null | undefined>(undefined),
			isDefaultVersion: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface DescribeRoleAliasResponse {

		/** Role alias description. */
		roleAliasDescription?: RoleAliasDescription;
	}
	export interface DescribeRoleAliasResponseFormProperties {
	}
	export function CreateDescribeRoleAliasResponseFormGroup() {
		return new FormGroup<DescribeRoleAliasResponseFormProperties>({
		});

	}


	/** Role alias description. */
	export interface RoleAliasDescription {

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		roleAlias?: string | null;

		/**
		 * Max length: 2048
		 * Min length: 1
		 */
		roleAliasArn?: string | null;

		/**
		 * Max length: 2048
		 * Min length: 20
		 */
		roleArn?: string | null;

		/**
		 * Max length: 12
		 * Min length: 12
		 */
		owner?: string | null;

		/**
		 * Minimum: 900
		 * Maximum: 3600
		 */
		credentialDurationSeconds?: number | null;
		creationDate?: Date | null;
		lastModifiedDate?: Date | null;
	}

	/** Role alias description. */
	export interface RoleAliasDescriptionFormProperties {

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		roleAlias: FormControl<string | null | undefined>,

		/**
		 * Max length: 2048
		 * Min length: 1
		 */
		roleAliasArn: FormControl<string | null | undefined>,

		/**
		 * Max length: 2048
		 * Min length: 20
		 */
		roleArn: FormControl<string | null | undefined>,

		/**
		 * Max length: 12
		 * Min length: 12
		 */
		owner: FormControl<string | null | undefined>,

		/**
		 * Minimum: 900
		 * Maximum: 3600
		 */
		credentialDurationSeconds: FormControl<number | null | undefined>,
		creationDate: FormControl<Date | null | undefined>,
		lastModifiedDate: FormControl<Date | null | undefined>,
	}
	export function CreateRoleAliasDescriptionFormGroup() {
		return new FormGroup<RoleAliasDescriptionFormProperties>({
			roleAlias: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(128), Validators.pattern('[\w=,@-]+')]),
			roleAliasArn: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(2048)]),
			roleArn: new FormControl<string | null | undefined>(undefined, [Validators.minLength(20), Validators.maxLength(2048)]),
			owner: new FormControl<string | null | undefined>(undefined, [Validators.minLength(12), Validators.maxLength(12), Validators.pattern('[0-9]+')]),
			credentialDurationSeconds: new FormControl<number | null | undefined>(undefined, [Validators.min(900), Validators.max(3600)]),
			creationDate: new FormControl<Date | null | undefined>(undefined),
			lastModifiedDate: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface DescribeScheduledAuditResponse {
		frequency?: DescribeScheduledAuditResponseFrequency | null;
		dayOfMonth?: string | null;
		dayOfWeek?: DescribeScheduledAuditResponseDayOfWeek | null;
		targetCheckNames?: Array<string>;

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		scheduledAuditName?: string | null;
		scheduledAuditArn?: string | null;
	}
	export interface DescribeScheduledAuditResponseFormProperties {
		frequency: FormControl<DescribeScheduledAuditResponseFrequency | null | undefined>,
		dayOfMonth: FormControl<string | null | undefined>,
		dayOfWeek: FormControl<DescribeScheduledAuditResponseDayOfWeek | null | undefined>,

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		scheduledAuditName: FormControl<string | null | undefined>,
		scheduledAuditArn: FormControl<string | null | undefined>,
	}
	export function CreateDescribeScheduledAuditResponseFormGroup() {
		return new FormGroup<DescribeScheduledAuditResponseFormProperties>({
			frequency: new FormControl<DescribeScheduledAuditResponseFrequency | null | undefined>(undefined),
			dayOfMonth: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^([1-9]|[12][0-9]|3[01])$|^LAST$')]),
			dayOfWeek: new FormControl<DescribeScheduledAuditResponseDayOfWeek | null | undefined>(undefined),
			scheduledAuditName: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(128), Validators.pattern('[a-zA-Z0-9_-]+')]),
			scheduledAuditArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum DescribeScheduledAuditResponseFrequency { DAILY = 0, WEEKLY = 1, BIWEEKLY = 2, MONTHLY = 3 }

	export enum DescribeScheduledAuditResponseDayOfWeek { SUN = 0, MON = 1, TUE = 2, WED = 3, THU = 4, FRI = 5, SAT = 6 }

	export interface DescribeSecurityProfileResponse {

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		securityProfileName?: string | null;
		securityProfileArn?: string | null;

		/** Max length: 1000 */
		securityProfileDescription?: string | null;

		/** Maximum items: 100 */
		behaviors?: Array<Behavior>;
		alertTargets?: AlertTargets;
		additionalMetricsToRetain?: Array<string>;
		additionalMetricsToRetainV2?: Array<MetricToRetain>;
		version?: number | null;
		creationDate?: Date | null;
		lastModifiedDate?: Date | null;
	}
	export interface DescribeSecurityProfileResponseFormProperties {

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		securityProfileName: FormControl<string | null | undefined>,
		securityProfileArn: FormControl<string | null | undefined>,

		/** Max length: 1000 */
		securityProfileDescription: FormControl<string | null | undefined>,
		version: FormControl<number | null | undefined>,
		creationDate: FormControl<Date | null | undefined>,
		lastModifiedDate: FormControl<Date | null | undefined>,
	}
	export function CreateDescribeSecurityProfileResponseFormGroup() {
		return new FormGroup<DescribeSecurityProfileResponseFormProperties>({
			securityProfileName: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(128), Validators.pattern('[a-zA-Z0-9:_-]+')]),
			securityProfileArn: new FormControl<string | null | undefined>(undefined),
			securityProfileDescription: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(1000), Validators.pattern('[\p{Graph}\x20]*')]),
			version: new FormControl<number | null | undefined>(undefined),
			creationDate: new FormControl<Date | null | undefined>(undefined),
			lastModifiedDate: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface AlertTargets {
	}
	export interface AlertTargetsFormProperties {
	}
	export function CreateAlertTargetsFormGroup() {
		return new FormGroup<AlertTargetsFormProperties>({
		});

	}

	export interface DescribeStreamResponse {

		/** Information about a stream. */
		streamInfo?: StreamInfo;
	}
	export interface DescribeStreamResponseFormProperties {
	}
	export function CreateDescribeStreamResponseFormGroup() {
		return new FormGroup<DescribeStreamResponseFormProperties>({
		});

	}


	/** Information about a stream. */
	export interface StreamInfo {

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		streamId?: string | null;
		streamArn?: string | null;

		/**
		 * Minimum: 0
		 * Maximum: 65535
		 */
		streamVersion?: number | null;

		/** Max length: 2028 */
		description?: string | null;

		/**
		 * Minimum items: 1
		 * Maximum items: 50
		 */
		files?: Array<StreamFile>;
		createdAt?: Date | null;
		lastUpdatedAt?: Date | null;

		/**
		 * Max length: 2048
		 * Min length: 20
		 */
		roleArn?: string | null;
	}

	/** Information about a stream. */
	export interface StreamInfoFormProperties {

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		streamId: FormControl<string | null | undefined>,
		streamArn: FormControl<string | null | undefined>,

		/**
		 * Minimum: 0
		 * Maximum: 65535
		 */
		streamVersion: FormControl<number | null | undefined>,

		/** Max length: 2028 */
		description: FormControl<string | null | undefined>,
		createdAt: FormControl<Date | null | undefined>,
		lastUpdatedAt: FormControl<Date | null | undefined>,

		/**
		 * Max length: 2048
		 * Min length: 20
		 */
		roleArn: FormControl<string | null | undefined>,
	}
	export function CreateStreamInfoFormGroup() {
		return new FormGroup<StreamInfoFormProperties>({
			streamId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(128), Validators.pattern('[a-zA-Z0-9_-]+')]),
			streamArn: new FormControl<string | null | undefined>(undefined),
			streamVersion: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(65535)]),
			description: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(2028), Validators.pattern('[^\p{C}]+')]),
			createdAt: new FormControl<Date | null | undefined>(undefined),
			lastUpdatedAt: new FormControl<Date | null | undefined>(undefined),
			roleArn: new FormControl<string | null | undefined>(undefined, [Validators.minLength(20), Validators.maxLength(2048)]),
		});

	}


	/** The output from the DescribeThing operation. */
	export interface DescribeThingResponse {
		defaultClientId?: string | null;

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		thingName?: string | null;
		thingId?: string | null;
		thingArn?: string | null;

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		thingTypeName?: string | null;
		attributes?: Attributes;
		version?: number | null;

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		billingGroupName?: string | null;
	}

	/** The output from the DescribeThing operation. */
	export interface DescribeThingResponseFormProperties {
		defaultClientId: FormControl<string | null | undefined>,

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		thingName: FormControl<string | null | undefined>,
		thingId: FormControl<string | null | undefined>,
		thingArn: FormControl<string | null | undefined>,

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		thingTypeName: FormControl<string | null | undefined>,
		version: FormControl<number | null | undefined>,

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		billingGroupName: FormControl<string | null | undefined>,
	}
	export function CreateDescribeThingResponseFormGroup() {
		return new FormGroup<DescribeThingResponseFormProperties>({
			defaultClientId: new FormControl<string | null | undefined>(undefined),
			thingName: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(128), Validators.pattern('[a-zA-Z0-9:_-]+')]),
			thingId: new FormControl<string | null | undefined>(undefined),
			thingArn: new FormControl<string | null | undefined>(undefined),
			thingTypeName: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(128), Validators.pattern('[a-zA-Z0-9:_-]+')]),
			version: new FormControl<number | null | undefined>(undefined),
			billingGroupName: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(128), Validators.pattern('[a-zA-Z0-9:_-]+')]),
		});

	}

	export interface DescribeThingGroupResponse {

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		thingGroupName?: string | null;

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		thingGroupId?: string | null;
		thingGroupArn?: string | null;
		version?: number | null;

		/** Thing group properties. */
		thingGroupProperties?: ThingGroupProperties;

		/** Thing group metadata. */
		thingGroupMetadata?: ThingGroupMetadata;

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		indexName?: string | null;

		/** Min length: 1 */
		queryString?: string | null;
		queryVersion?: string | null;
		status?: DescribeIndexResponseIndexStatus | null;
	}
	export interface DescribeThingGroupResponseFormProperties {

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		thingGroupName: FormControl<string | null | undefined>,

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		thingGroupId: FormControl<string | null | undefined>,
		thingGroupArn: FormControl<string | null | undefined>,
		version: FormControl<number | null | undefined>,

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		indexName: FormControl<string | null | undefined>,

		/** Min length: 1 */
		queryString: FormControl<string | null | undefined>,
		queryVersion: FormControl<string | null | undefined>,
		status: FormControl<DescribeIndexResponseIndexStatus | null | undefined>,
	}
	export function CreateDescribeThingGroupResponseFormGroup() {
		return new FormGroup<DescribeThingGroupResponseFormProperties>({
			thingGroupName: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(128), Validators.pattern('[a-zA-Z0-9:_-]+')]),
			thingGroupId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(128), Validators.pattern('[a-zA-Z0-9\-]+')]),
			thingGroupArn: new FormControl<string | null | undefined>(undefined),
			version: new FormControl<number | null | undefined>(undefined),
			indexName: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(128), Validators.pattern('[a-zA-Z0-9:_-]+')]),
			queryString: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1)]),
			queryVersion: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<DescribeIndexResponseIndexStatus | null | undefined>(undefined),
		});

	}


	/** Thing group properties. */
	export interface ThingGroupProperties {

		/** Max length: 2028 */
		thingGroupDescription?: string | null;

		/** The attribute payload. */
		attributePayload?: AttributePayload;
	}

	/** Thing group properties. */
	export interface ThingGroupPropertiesFormProperties {

		/** Max length: 2028 */
		thingGroupDescription: FormControl<string | null | undefined>,
	}
	export function CreateThingGroupPropertiesFormGroup() {
		return new FormGroup<ThingGroupPropertiesFormProperties>({
			thingGroupDescription: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(2028), Validators.pattern('[\p{Graph}\x20]*')]),
		});

	}


	/** Thing group metadata. */
	export interface ThingGroupMetadata {

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		parentGroupName?: string | null;
		rootToParentThingGroups?: Array<GroupNameAndArn>;
		creationDate?: Date | null;
	}

	/** Thing group metadata. */
	export interface ThingGroupMetadataFormProperties {

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		parentGroupName: FormControl<string | null | undefined>,
		creationDate: FormControl<Date | null | undefined>,
	}
	export function CreateThingGroupMetadataFormGroup() {
		return new FormGroup<ThingGroupMetadataFormProperties>({
			parentGroupName: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(128), Validators.pattern('[a-zA-Z0-9:_-]+')]),
			creationDate: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/** The name and ARN of a group. */
	export interface GroupNameAndArn {

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		groupName?: string | null;
		groupArn?: string | null;
	}

	/** The name and ARN of a group. */
	export interface GroupNameAndArnFormProperties {

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		groupName: FormControl<string | null | undefined>,
		groupArn: FormControl<string | null | undefined>,
	}
	export function CreateGroupNameAndArnFormGroup() {
		return new FormGroup<GroupNameAndArnFormProperties>({
			groupName: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(128), Validators.pattern('[a-zA-Z0-9:_-]+')]),
			groupArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeThingRegistrationTaskResponse {

		/** Max length: 40 */
		taskId?: string | null;
		creationDate?: Date | null;
		lastModifiedDate?: Date | null;
		templateBody?: string | null;

		/**
		 * Max length: 256
		 * Min length: 3
		 */
		inputFileBucket?: string | null;

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		inputFileKey?: string | null;

		/**
		 * Max length: 2048
		 * Min length: 20
		 */
		roleArn?: string | null;
		status?: DescribeThingRegistrationTaskResponseStatus | null;

		/** Max length: 2048 */
		message?: string | null;
		successCount?: number | null;
		failureCount?: number | null;

		/**
		 * Minimum: 0
		 * Maximum: 100
		 */
		percentageProgress?: number | null;
	}
	export interface DescribeThingRegistrationTaskResponseFormProperties {

		/** Max length: 40 */
		taskId: FormControl<string | null | undefined>,
		creationDate: FormControl<Date | null | undefined>,
		lastModifiedDate: FormControl<Date | null | undefined>,
		templateBody: FormControl<string | null | undefined>,

		/**
		 * Max length: 256
		 * Min length: 3
		 */
		inputFileBucket: FormControl<string | null | undefined>,

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		inputFileKey: FormControl<string | null | undefined>,

		/**
		 * Max length: 2048
		 * Min length: 20
		 */
		roleArn: FormControl<string | null | undefined>,
		status: FormControl<DescribeThingRegistrationTaskResponseStatus | null | undefined>,

		/** Max length: 2048 */
		message: FormControl<string | null | undefined>,
		successCount: FormControl<number | null | undefined>,
		failureCount: FormControl<number | null | undefined>,

		/**
		 * Minimum: 0
		 * Maximum: 100
		 */
		percentageProgress: FormControl<number | null | undefined>,
	}
	export function CreateDescribeThingRegistrationTaskResponseFormGroup() {
		return new FormGroup<DescribeThingRegistrationTaskResponseFormProperties>({
			taskId: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(40)]),
			creationDate: new FormControl<Date | null | undefined>(undefined),
			lastModifiedDate: new FormControl<Date | null | undefined>(undefined),
			templateBody: new FormControl<string | null | undefined>(undefined),
			inputFileBucket: new FormControl<string | null | undefined>(undefined, [Validators.minLength(3), Validators.maxLength(256), Validators.pattern('[a-zA-Z0-9._-]+')]),
			inputFileKey: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(1024), Validators.pattern('[a-zA-Z0-9!_.*\'()-\/]+')]),
			roleArn: new FormControl<string | null | undefined>(undefined, [Validators.minLength(20), Validators.maxLength(2048)]),
			status: new FormControl<DescribeThingRegistrationTaskResponseStatus | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(2048)]),
			successCount: new FormControl<number | null | undefined>(undefined),
			failureCount: new FormControl<number | null | undefined>(undefined),
			percentageProgress: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(100)]),
		});

	}

	export enum DescribeThingRegistrationTaskResponseStatus { InProgress = 0, Completed = 1, Failed = 2, Cancelled = 3, Cancelling = 4 }


	/** The output for the DescribeThingType operation. */
	export interface DescribeThingTypeResponse {

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		thingTypeName?: string | null;
		thingTypeId?: string | null;
		thingTypeArn?: string | null;

		/** The ThingTypeProperties contains information about the thing type including: a thing type description, and a list of searchable thing attribute names. */
		thingTypeProperties?: ThingTypeProperties;

		/** The ThingTypeMetadata contains additional information about the thing type including: creation date and time, a value indicating whether the thing type is deprecated, and a date and time when time was deprecated. */
		thingTypeMetadata?: ThingTypeMetadata;
	}

	/** The output for the DescribeThingType operation. */
	export interface DescribeThingTypeResponseFormProperties {

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		thingTypeName: FormControl<string | null | undefined>,
		thingTypeId: FormControl<string | null | undefined>,
		thingTypeArn: FormControl<string | null | undefined>,
	}
	export function CreateDescribeThingTypeResponseFormGroup() {
		return new FormGroup<DescribeThingTypeResponseFormProperties>({
			thingTypeName: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(128), Validators.pattern('[a-zA-Z0-9:_-]+')]),
			thingTypeId: new FormControl<string | null | undefined>(undefined),
			thingTypeArn: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The ThingTypeProperties contains information about the thing type including: a thing type description, and a list of searchable thing attribute names. */
	export interface ThingTypeProperties {

		/** Max length: 2028 */
		thingTypeDescription?: string | null;
		searchableAttributes?: Array<string>;
	}

	/** The ThingTypeProperties contains information about the thing type including: a thing type description, and a list of searchable thing attribute names. */
	export interface ThingTypePropertiesFormProperties {

		/** Max length: 2028 */
		thingTypeDescription: FormControl<string | null | undefined>,
	}
	export function CreateThingTypePropertiesFormGroup() {
		return new FormGroup<ThingTypePropertiesFormProperties>({
			thingTypeDescription: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(2028), Validators.pattern('[\p{Graph}\x20]*')]),
		});

	}


	/** The ThingTypeMetadata contains additional information about the thing type including: creation date and time, a value indicating whether the thing type is deprecated, and a date and time when time was deprecated. */
	export interface ThingTypeMetadata {
		deprecated?: boolean | null;
		deprecationDate?: Date | null;
		creationDate?: Date | null;
	}

	/** The ThingTypeMetadata contains additional information about the thing type including: creation date and time, a value indicating whether the thing type is deprecated, and a date and time when time was deprecated. */
	export interface ThingTypeMetadataFormProperties {
		deprecated: FormControl<boolean | null | undefined>,
		deprecationDate: FormControl<Date | null | undefined>,
		creationDate: FormControl<Date | null | undefined>,
	}
	export function CreateThingTypeMetadataFormGroup() {
		return new FormGroup<ThingTypeMetadataFormProperties>({
			deprecated: new FormControl<boolean | null | undefined>(undefined),
			deprecationDate: new FormControl<Date | null | undefined>(undefined),
			creationDate: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface DetachSecurityProfileResponse {
	}
	export interface DetachSecurityProfileResponseFormProperties {
	}
	export function CreateDetachSecurityProfileResponseFormGroup() {
		return new FormGroup<DetachSecurityProfileResponseFormProperties>({
		});

	}


	/** The output from the DetachThingPrincipal operation. */
	export interface DetachThingPrincipalResponse {
	}

	/** The output from the DetachThingPrincipal operation. */
	export interface DetachThingPrincipalResponseFormProperties {
	}
	export function CreateDetachThingPrincipalResponseFormGroup() {
		return new FormGroup<DetachThingPrincipalResponseFormProperties>({
		});

	}

	export interface GetCardinalityResponse {
		cardinality?: number | null;
	}
	export interface GetCardinalityResponseFormProperties {
		cardinality: FormControl<number | null | undefined>,
	}
	export function CreateGetCardinalityResponseFormGroup() {
		return new FormGroup<GetCardinalityResponseFormProperties>({
			cardinality: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface InvalidAggregationException {
	}
	export interface InvalidAggregationExceptionFormProperties {
	}
	export function CreateInvalidAggregationExceptionFormGroup() {
		return new FormGroup<InvalidAggregationExceptionFormProperties>({
		});

	}

	export interface IndexNotReadyException {
	}
	export interface IndexNotReadyExceptionFormProperties {
	}
	export function CreateIndexNotReadyExceptionFormGroup() {
		return new FormGroup<IndexNotReadyExceptionFormProperties>({
		});

	}

	export interface GetEffectivePoliciesResponse {
		effectivePolicies?: Array<EffectivePolicy>;
	}
	export interface GetEffectivePoliciesResponseFormProperties {
	}
	export function CreateGetEffectivePoliciesResponseFormGroup() {
		return new FormGroup<GetEffectivePoliciesResponseFormProperties>({
		});

	}


	/** The policy that has the effect on the authorization results. */
	export interface EffectivePolicy {

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		policyName?: string | null;
		policyArn?: string | null;
		policyDocument?: string | null;
	}

	/** The policy that has the effect on the authorization results. */
	export interface EffectivePolicyFormProperties {

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		policyName: FormControl<string | null | undefined>,
		policyArn: FormControl<string | null | undefined>,
		policyDocument: FormControl<string | null | undefined>,
	}
	export function CreateEffectivePolicyFormGroup() {
		return new FormGroup<EffectivePolicyFormProperties>({
			policyName: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(128), Validators.pattern('[\w+=,.@-]+')]),
			policyArn: new FormControl<string | null | undefined>(undefined),
			policyDocument: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetIndexingConfigurationResponse {

		/** The thing indexing configuration. For more information, see <a href="https://docs.aws.amazon.com/iot/latest/developerguide/managing-index.html">Managing Thing Indexing</a>. */
		thingIndexingConfiguration?: ThingIndexingConfiguration;

		/** Thing group indexing configuration. */
		thingGroupIndexingConfiguration?: ThingGroupIndexingConfiguration;
	}
	export interface GetIndexingConfigurationResponseFormProperties {
	}
	export function CreateGetIndexingConfigurationResponseFormGroup() {
		return new FormGroup<GetIndexingConfigurationResponseFormProperties>({
		});

	}


	/** The thing indexing configuration. For more information, see <a href="https://docs.aws.amazon.com/iot/latest/developerguide/managing-index.html">Managing Thing Indexing</a>. */
	export interface ThingIndexingConfiguration {

		/** Required */
		thingIndexingMode: ThingIndexingConfigurationThingIndexingMode;
		thingConnectivityIndexingMode?: ThingIndexingConfigurationThingConnectivityIndexingMode | null;
		managedFields?: Array<Field>;
		customFields?: Array<Field>;
	}

	/** The thing indexing configuration. For more information, see <a href="https://docs.aws.amazon.com/iot/latest/developerguide/managing-index.html">Managing Thing Indexing</a>. */
	export interface ThingIndexingConfigurationFormProperties {

		/** Required */
		thingIndexingMode: FormControl<ThingIndexingConfigurationThingIndexingMode | null | undefined>,
		thingConnectivityIndexingMode: FormControl<ThingIndexingConfigurationThingConnectivityIndexingMode | null | undefined>,
	}
	export function CreateThingIndexingConfigurationFormGroup() {
		return new FormGroup<ThingIndexingConfigurationFormProperties>({
			thingIndexingMode: new FormControl<ThingIndexingConfigurationThingIndexingMode | null | undefined>(undefined, [Validators.required]),
			thingConnectivityIndexingMode: new FormControl<ThingIndexingConfigurationThingConnectivityIndexingMode | null | undefined>(undefined),
		});

	}

	export enum ThingIndexingConfigurationThingIndexingMode { OFF = 0, REGISTRY = 1, REGISTRY_AND_SHADOW = 2 }

	export enum ThingIndexingConfigurationThingConnectivityIndexingMode { OFF = 0, STATUS = 1 }


	/** Describes the name and data type at a field. */
	export interface Field {
		name?: string | null;
		type?: FieldType | null;
	}

	/** Describes the name and data type at a field. */
	export interface FieldFormProperties {
		name: FormControl<string | null | undefined>,
		type: FormControl<FieldType | null | undefined>,
	}
	export function CreateFieldFormGroup() {
		return new FormGroup<FieldFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<FieldType | null | undefined>(undefined),
		});

	}

	export enum FieldType { Number = 0, String = 1, Boolean = 2 }


	/** Thing group indexing configuration. */
	export interface ThingGroupIndexingConfiguration {

		/** Required */
		thingGroupIndexingMode: ThingGroupIndexingConfigurationThingGroupIndexingMode;
		managedFields?: Array<Field>;
		customFields?: Array<Field>;
	}

	/** Thing group indexing configuration. */
	export interface ThingGroupIndexingConfigurationFormProperties {

		/** Required */
		thingGroupIndexingMode: FormControl<ThingGroupIndexingConfigurationThingGroupIndexingMode | null | undefined>,
	}
	export function CreateThingGroupIndexingConfigurationFormGroup() {
		return new FormGroup<ThingGroupIndexingConfigurationFormProperties>({
			thingGroupIndexingMode: new FormControl<ThingGroupIndexingConfigurationThingGroupIndexingMode | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum ThingGroupIndexingConfigurationThingGroupIndexingMode { OFF = 0, ON = 1 }

	export interface GetJobDocumentResponse {

		/** Max length: 32768 */
		document?: string | null;
	}
	export interface GetJobDocumentResponseFormProperties {

		/** Max length: 32768 */
		document: FormControl<string | null | undefined>,
	}
	export function CreateGetJobDocumentResponseFormGroup() {
		return new FormGroup<GetJobDocumentResponseFormProperties>({
			document: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(32768)]),
		});

	}


	/** The output from the GetLoggingOptions operation. */
	export interface GetLoggingOptionsResponse {
		roleArn?: string | null;
		logLevel?: EnableIoTLoggingParamsLogLevel | null;
	}

	/** The output from the GetLoggingOptions operation. */
	export interface GetLoggingOptionsResponseFormProperties {
		roleArn: FormControl<string | null | undefined>,
		logLevel: FormControl<EnableIoTLoggingParamsLogLevel | null | undefined>,
	}
	export function CreateGetLoggingOptionsResponseFormGroup() {
		return new FormGroup<GetLoggingOptionsResponseFormProperties>({
			roleArn: new FormControl<string | null | undefined>(undefined),
			logLevel: new FormControl<EnableIoTLoggingParamsLogLevel | null | undefined>(undefined),
		});

	}

	export interface GetOTAUpdateResponse {

		/** Information about an OTA update. */
		otaUpdateInfo?: OTAUpdateInfo;
	}
	export interface GetOTAUpdateResponseFormProperties {
	}
	export function CreateGetOTAUpdateResponseFormGroup() {
		return new FormGroup<GetOTAUpdateResponseFormProperties>({
		});

	}


	/** Information about an OTA update. */
	export interface OTAUpdateInfo {

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		otaUpdateId?: string | null;
		otaUpdateArn?: string | null;
		creationDate?: Date | null;
		lastModifiedDate?: Date | null;

		/** Max length: 2028 */
		description?: string | null;

		/** Minimum items: 1 */
		targets?: Array<string>;

		/**
		 * Minimum items: 1
		 * Maximum items: 2
		 */
		protocols?: Array<Protocol>;

		/** Configuration for the rollout of OTA updates. */
		awsJobExecutionsRolloutConfig?: AwsJobExecutionsRolloutConfig;

		/** Configuration information for pre-signed URLs. Valid when <code>protocols</code> contains HTTP. */
		awsJobPresignedUrlConfig?: AwsJobPresignedUrlConfig;
		targetSelection?: JobTargetSelection | null;

		/**
		 * Minimum items: 1
		 * Maximum items: 50
		 */
		otaUpdateFiles?: Array<OTAUpdateFile>;
		otaUpdateStatus?: CreateOTAUpdateResponseOtaUpdateStatus | null;
		awsIotJobId?: string | null;
		awsIotJobArn?: string | null;

		/** Error information. */
		errorInfo?: ErrorInfo;
		additionalParameters?: AdditionalParameterMap;
	}

	/** Information about an OTA update. */
	export interface OTAUpdateInfoFormProperties {

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		otaUpdateId: FormControl<string | null | undefined>,
		otaUpdateArn: FormControl<string | null | undefined>,
		creationDate: FormControl<Date | null | undefined>,
		lastModifiedDate: FormControl<Date | null | undefined>,

		/** Max length: 2028 */
		description: FormControl<string | null | undefined>,
		targetSelection: FormControl<JobTargetSelection | null | undefined>,
		otaUpdateStatus: FormControl<CreateOTAUpdateResponseOtaUpdateStatus | null | undefined>,
		awsIotJobId: FormControl<string | null | undefined>,
		awsIotJobArn: FormControl<string | null | undefined>,
	}
	export function CreateOTAUpdateInfoFormGroup() {
		return new FormGroup<OTAUpdateInfoFormProperties>({
			otaUpdateId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(128), Validators.pattern('[a-zA-Z0-9_-]+')]),
			otaUpdateArn: new FormControl<string | null | undefined>(undefined),
			creationDate: new FormControl<Date | null | undefined>(undefined),
			lastModifiedDate: new FormControl<Date | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(2028), Validators.pattern('[^\p{C}]+')]),
			targetSelection: new FormControl<JobTargetSelection | null | undefined>(undefined),
			otaUpdateStatus: new FormControl<CreateOTAUpdateResponseOtaUpdateStatus | null | undefined>(undefined),
			awsIotJobId: new FormControl<string | null | undefined>(undefined),
			awsIotJobArn: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Configuration for the rollout of OTA updates. */
	export interface AwsJobExecutionsRolloutConfig {

		/**
		 * Minimum: 1
		 * Maximum: 1000
		 */
		maximumPerMinute?: number | null;
	}

	/** Configuration for the rollout of OTA updates. */
	export interface AwsJobExecutionsRolloutConfigFormProperties {

		/**
		 * Minimum: 1
		 * Maximum: 1000
		 */
		maximumPerMinute: FormControl<number | null | undefined>,
	}
	export function CreateAwsJobExecutionsRolloutConfigFormGroup() {
		return new FormGroup<AwsJobExecutionsRolloutConfigFormProperties>({
			maximumPerMinute: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(1000)]),
		});

	}


	/** Configuration information for pre-signed URLs. Valid when <code>protocols</code> contains HTTP. */
	export interface AwsJobPresignedUrlConfig {
		expiresInSec?: number | null;
	}

	/** Configuration information for pre-signed URLs. Valid when <code>protocols</code> contains HTTP. */
	export interface AwsJobPresignedUrlConfigFormProperties {
		expiresInSec: FormControl<number | null | undefined>,
	}
	export function CreateAwsJobPresignedUrlConfigFormGroup() {
		return new FormGroup<AwsJobPresignedUrlConfigFormProperties>({
			expiresInSec: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Error information. */
	export interface ErrorInfo {
		code?: string | null;
		message?: string | null;
	}

	/** Error information. */
	export interface ErrorInfoFormProperties {
		code: FormControl<string | null | undefined>,
		message: FormControl<string | null | undefined>,
	}
	export function CreateErrorInfoFormGroup() {
		return new FormGroup<ErrorInfoFormProperties>({
			code: new FormControl<string | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface AdditionalParameterMap {
	}
	export interface AdditionalParameterMapFormProperties {
	}
	export function CreateAdditionalParameterMapFormGroup() {
		return new FormGroup<AdditionalParameterMapFormProperties>({
		});

	}

	export interface GetPercentilesResponse {
		percentiles?: Array<PercentPair>;
	}
	export interface GetPercentilesResponseFormProperties {
	}
	export function CreateGetPercentilesResponseFormGroup() {
		return new FormGroup<GetPercentilesResponseFormProperties>({
		});

	}


	/** Describes the percentile and percentile value. */
	export interface PercentPair {

		/**
		 * Minimum: 0
		 * Maximum: 100
		 */
		percent?: number | null;
		value?: number | null;
	}

	/** Describes the percentile and percentile value. */
	export interface PercentPairFormProperties {

		/**
		 * Minimum: 0
		 * Maximum: 100
		 */
		percent: FormControl<number | null | undefined>,
		value: FormControl<number | null | undefined>,
	}
	export function CreatePercentPairFormGroup() {
		return new FormGroup<PercentPairFormProperties>({
			percent: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(100)]),
			value: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** The output from the GetPolicy operation. */
	export interface GetPolicyResponse {

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		policyName?: string | null;
		policyArn?: string | null;
		policyDocument?: string | null;
		defaultVersionId?: string | null;
		creationDate?: Date | null;
		lastModifiedDate?: Date | null;
		generationId?: string | null;
	}

	/** The output from the GetPolicy operation. */
	export interface GetPolicyResponseFormProperties {

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		policyName: FormControl<string | null | undefined>,
		policyArn: FormControl<string | null | undefined>,
		policyDocument: FormControl<string | null | undefined>,
		defaultVersionId: FormControl<string | null | undefined>,
		creationDate: FormControl<Date | null | undefined>,
		lastModifiedDate: FormControl<Date | null | undefined>,
		generationId: FormControl<string | null | undefined>,
	}
	export function CreateGetPolicyResponseFormGroup() {
		return new FormGroup<GetPolicyResponseFormProperties>({
			policyName: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(128), Validators.pattern('[\w+=,.@-]+')]),
			policyArn: new FormControl<string | null | undefined>(undefined),
			policyDocument: new FormControl<string | null | undefined>(undefined),
			defaultVersionId: new FormControl<string | null | undefined>(undefined, [Validators.pattern('[0-9]+')]),
			creationDate: new FormControl<Date | null | undefined>(undefined),
			lastModifiedDate: new FormControl<Date | null | undefined>(undefined),
			generationId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The output from the GetPolicyVersion operation. */
	export interface GetPolicyVersionResponse {
		policyArn?: string | null;

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		policyName?: string | null;
		policyDocument?: string | null;
		policyVersionId?: string | null;
		isDefaultVersion?: boolean | null;
		creationDate?: Date | null;
		lastModifiedDate?: Date | null;
		generationId?: string | null;
	}

	/** The output from the GetPolicyVersion operation. */
	export interface GetPolicyVersionResponseFormProperties {
		policyArn: FormControl<string | null | undefined>,

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		policyName: FormControl<string | null | undefined>,
		policyDocument: FormControl<string | null | undefined>,
		policyVersionId: FormControl<string | null | undefined>,
		isDefaultVersion: FormControl<boolean | null | undefined>,
		creationDate: FormControl<Date | null | undefined>,
		lastModifiedDate: FormControl<Date | null | undefined>,
		generationId: FormControl<string | null | undefined>,
	}
	export function CreateGetPolicyVersionResponseFormGroup() {
		return new FormGroup<GetPolicyVersionResponseFormProperties>({
			policyArn: new FormControl<string | null | undefined>(undefined),
			policyName: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(128), Validators.pattern('[\w+=,.@-]+')]),
			policyDocument: new FormControl<string | null | undefined>(undefined),
			policyVersionId: new FormControl<string | null | undefined>(undefined, [Validators.pattern('[0-9]+')]),
			isDefaultVersion: new FormControl<boolean | null | undefined>(undefined),
			creationDate: new FormControl<Date | null | undefined>(undefined),
			lastModifiedDate: new FormControl<Date | null | undefined>(undefined),
			generationId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The output from the GetRegistrationCode operation. */
	export interface GetRegistrationCodeResponse {

		/**
		 * Max length: 64
		 * Min length: 64
		 */
		registrationCode?: string | null;
	}

	/** The output from the GetRegistrationCode operation. */
	export interface GetRegistrationCodeResponseFormProperties {

		/**
		 * Max length: 64
		 * Min length: 64
		 */
		registrationCode: FormControl<string | null | undefined>,
	}
	export function CreateGetRegistrationCodeResponseFormGroup() {
		return new FormGroup<GetRegistrationCodeResponseFormProperties>({
			registrationCode: new FormControl<string | null | undefined>(undefined, [Validators.minLength(64), Validators.maxLength(64), Validators.pattern('(0x)?[a-fA-F0-9]+')]),
		});

	}

	export interface GetStatisticsResponse {

		/** A map of key-value pairs for all supported statistics. Currently, only count is supported. */
		statistics?: Statistics;
	}
	export interface GetStatisticsResponseFormProperties {
	}
	export function CreateGetStatisticsResponseFormGroup() {
		return new FormGroup<GetStatisticsResponseFormProperties>({
		});

	}


	/** A map of key-value pairs for all supported statistics. Currently, only count is supported. */
	export interface Statistics {
		count?: number | null;
		average?: number | null;
		sum?: number | null;
		minimum?: number | null;
		maximum?: number | null;
		sumOfSquares?: number | null;
		variance?: number | null;
		stdDeviation?: number | null;
	}

	/** A map of key-value pairs for all supported statistics. Currently, only count is supported. */
	export interface StatisticsFormProperties {
		count: FormControl<number | null | undefined>,
		average: FormControl<number | null | undefined>,
		sum: FormControl<number | null | undefined>,
		minimum: FormControl<number | null | undefined>,
		maximum: FormControl<number | null | undefined>,
		sumOfSquares: FormControl<number | null | undefined>,
		variance: FormControl<number | null | undefined>,
		stdDeviation: FormControl<number | null | undefined>,
	}
	export function CreateStatisticsFormGroup() {
		return new FormGroup<StatisticsFormProperties>({
			count: new FormControl<number | null | undefined>(undefined),
			average: new FormControl<number | null | undefined>(undefined),
			sum: new FormControl<number | null | undefined>(undefined),
			minimum: new FormControl<number | null | undefined>(undefined),
			maximum: new FormControl<number | null | undefined>(undefined),
			sumOfSquares: new FormControl<number | null | undefined>(undefined),
			variance: new FormControl<number | null | undefined>(undefined),
			stdDeviation: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** The output from the GetTopicRule operation. */
	export interface GetTopicRuleResponse {
		ruleArn?: string | null;

		/** Describes a rule. */
		rule?: TopicRule;
	}

	/** The output from the GetTopicRule operation. */
	export interface GetTopicRuleResponseFormProperties {
		ruleArn: FormControl<string | null | undefined>,
	}
	export function CreateGetTopicRuleResponseFormGroup() {
		return new FormGroup<GetTopicRuleResponseFormProperties>({
			ruleArn: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Describes a rule. */
	export interface TopicRule {

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		ruleName?: string | null;
		sql?: string | null;
		description?: string | null;
		createdAt?: Date | null;

		/**
		 * Minimum items: 0
		 * Maximum items: 10
		 */
		actions?: Array<Action>;
		ruleDisabled?: boolean | null;
		awsIotSqlVersion?: string | null;

		/** Describes the actions associated with a rule. */
		errorAction?: Action;
	}

	/** Describes a rule. */
	export interface TopicRuleFormProperties {

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		ruleName: FormControl<string | null | undefined>,
		sql: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,
		createdAt: FormControl<Date | null | undefined>,
		ruleDisabled: FormControl<boolean | null | undefined>,
		awsIotSqlVersion: FormControl<string | null | undefined>,
	}
	export function CreateTopicRuleFormGroup() {
		return new FormGroup<TopicRuleFormProperties>({
			ruleName: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(128), Validators.pattern('^[a-zA-Z0-9_]+$')]),
			sql: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			createdAt: new FormControl<Date | null | undefined>(undefined),
			ruleDisabled: new FormControl<boolean | null | undefined>(undefined),
			awsIotSqlVersion: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetTopicRuleDestinationResponse {

		/** A topic rule destination. */
		topicRuleDestination?: TopicRuleDestination;
	}
	export interface GetTopicRuleDestinationResponseFormProperties {
	}
	export function CreateGetTopicRuleDestinationResponseFormGroup() {
		return new FormGroup<GetTopicRuleDestinationResponseFormProperties>({
		});

	}

	export interface GetV2LoggingOptionsResponse {
		roleArn?: string | null;
		defaultLogLevel?: EnableIoTLoggingParamsLogLevel | null;
		disableAllLogs?: boolean | null;
	}
	export interface GetV2LoggingOptionsResponseFormProperties {
		roleArn: FormControl<string | null | undefined>,
		defaultLogLevel: FormControl<EnableIoTLoggingParamsLogLevel | null | undefined>,
		disableAllLogs: FormControl<boolean | null | undefined>,
	}
	export function CreateGetV2LoggingOptionsResponseFormGroup() {
		return new FormGroup<GetV2LoggingOptionsResponseFormProperties>({
			roleArn: new FormControl<string | null | undefined>(undefined),
			defaultLogLevel: new FormControl<EnableIoTLoggingParamsLogLevel | null | undefined>(undefined),
			disableAllLogs: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface NotConfiguredException {
	}
	export interface NotConfiguredExceptionFormProperties {
	}
	export function CreateNotConfiguredExceptionFormGroup() {
		return new FormGroup<NotConfiguredExceptionFormProperties>({
		});

	}

	export interface ListActiveViolationsResponse {
		activeViolations?: Array<ActiveViolation>;
		nextToken?: string | null;
	}
	export interface ListActiveViolationsResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListActiveViolationsResponseFormGroup() {
		return new FormGroup<ListActiveViolationsResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Information about an active Device Defender security profile behavior violation. */
	export interface ActiveViolation {

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		violationId?: string | null;

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		thingName?: string | null;

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		securityProfileName?: string | null;

		/** A Device Defender security profile behavior. */
		behavior?: Behavior;

		/** The value to be compared with the <code>metric</code>. */
		lastViolationValue?: MetricValue;
		lastViolationTime?: Date | null;
		violationStartTime?: Date | null;
	}

	/** Information about an active Device Defender security profile behavior violation. */
	export interface ActiveViolationFormProperties {

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		violationId: FormControl<string | null | undefined>,

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		thingName: FormControl<string | null | undefined>,

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		securityProfileName: FormControl<string | null | undefined>,
		lastViolationTime: FormControl<Date | null | undefined>,
		violationStartTime: FormControl<Date | null | undefined>,
	}
	export function CreateActiveViolationFormGroup() {
		return new FormGroup<ActiveViolationFormProperties>({
			violationId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(128), Validators.pattern('[a-zA-Z0-9\-]+')]),
			thingName: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(128)]),
			securityProfileName: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(128), Validators.pattern('[a-zA-Z0-9:_-]+')]),
			lastViolationTime: new FormControl<Date | null | undefined>(undefined),
			violationStartTime: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface ListAttachedPoliciesResponse {
		policies?: Array<Policy>;
		nextMarker?: string | null;
	}
	export interface ListAttachedPoliciesResponseFormProperties {
		nextMarker: FormControl<string | null | undefined>,
	}
	export function CreateListAttachedPoliciesResponseFormGroup() {
		return new FormGroup<ListAttachedPoliciesResponseFormProperties>({
			nextMarker: new FormControl<string | null | undefined>(undefined, [Validators.pattern('[A-Za-z0-9+/]+={0,2}')]),
		});

	}


	/** Describes an AWS IoT policy. */
	export interface Policy {

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		policyName?: string | null;
		policyArn?: string | null;
	}

	/** Describes an AWS IoT policy. */
	export interface PolicyFormProperties {

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		policyName: FormControl<string | null | undefined>,
		policyArn: FormControl<string | null | undefined>,
	}
	export function CreatePolicyFormGroup() {
		return new FormGroup<PolicyFormProperties>({
			policyName: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(128), Validators.pattern('[\w+=,.@-]+')]),
			policyArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListAuditFindingsResponse {
		findings?: Array<AuditFinding>;
		nextToken?: string | null;
	}
	export interface ListAuditFindingsResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListAuditFindingsResponseFormGroup() {
		return new FormGroup<ListAuditFindingsResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListAuditMitigationActionsExecutionsResponse {
		actionsExecutions?: Array<AuditMitigationActionExecutionMetadata>;
		nextToken?: string | null;
	}
	export interface ListAuditMitigationActionsExecutionsResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListAuditMitigationActionsExecutionsResponseFormGroup() {
		return new FormGroup<ListAuditMitigationActionsExecutionsResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Returned by ListAuditMitigationActionsTask, this object contains information that describes a mitigation action that has been started. */
	export interface AuditMitigationActionExecutionMetadata {

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		taskId?: string | null;

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		findingId?: string | null;

		/** Max length: 128 */
		actionName?: string | null;
		actionId?: string | null;
		status?: AuditMitigationActionExecutionMetadataStatus | null;
		startTime?: Date | null;
		endTime?: Date | null;
		errorCode?: string | null;

		/** Max length: 2048 */
		message?: string | null;
	}

	/** Returned by ListAuditMitigationActionsTask, this object contains information that describes a mitigation action that has been started. */
	export interface AuditMitigationActionExecutionMetadataFormProperties {

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		taskId: FormControl<string | null | undefined>,

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		findingId: FormControl<string | null | undefined>,

		/** Max length: 128 */
		actionName: FormControl<string | null | undefined>,
		actionId: FormControl<string | null | undefined>,
		status: FormControl<AuditMitigationActionExecutionMetadataStatus | null | undefined>,
		startTime: FormControl<Date | null | undefined>,
		endTime: FormControl<Date | null | undefined>,
		errorCode: FormControl<string | null | undefined>,

		/** Max length: 2048 */
		message: FormControl<string | null | undefined>,
	}
	export function CreateAuditMitigationActionExecutionMetadataFormGroup() {
		return new FormGroup<AuditMitigationActionExecutionMetadataFormProperties>({
			taskId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(128), Validators.pattern('[a-zA-Z0-9_-]+')]),
			findingId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(128), Validators.pattern('[a-zA-Z0-9_-]+')]),
			actionName: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(128), Validators.pattern('[a-zA-Z0-9_-]+')]),
			actionId: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<AuditMitigationActionExecutionMetadataStatus | null | undefined>(undefined),
			startTime: new FormControl<Date | null | undefined>(undefined),
			endTime: new FormControl<Date | null | undefined>(undefined),
			errorCode: new FormControl<string | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(2048)]),
		});

	}

	export enum AuditMitigationActionExecutionMetadataStatus { IN_PROGRESS = 0, COMPLETED = 1, FAILED = 2, CANCELED = 3, SKIPPED = 4, PENDING = 5 }

	export interface ListAuditMitigationActionsTasksResponse {
		tasks?: Array<AuditMitigationActionsTaskMetadata>;
		nextToken?: string | null;
	}
	export interface ListAuditMitigationActionsTasksResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListAuditMitigationActionsTasksResponseFormGroup() {
		return new FormGroup<ListAuditMitigationActionsTasksResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Information about an audit mitigation actions task that is returned by <code>ListAuditMitigationActionsTasks</code>. */
	export interface AuditMitigationActionsTaskMetadata {

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		taskId?: string | null;
		startTime?: Date | null;
		taskStatus?: DescribeAuditMitigationActionsTaskResponseTaskStatus | null;
	}

	/** Information about an audit mitigation actions task that is returned by <code>ListAuditMitigationActionsTasks</code>. */
	export interface AuditMitigationActionsTaskMetadataFormProperties {

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		taskId: FormControl<string | null | undefined>,
		startTime: FormControl<Date | null | undefined>,
		taskStatus: FormControl<DescribeAuditMitigationActionsTaskResponseTaskStatus | null | undefined>,
	}
	export function CreateAuditMitigationActionsTaskMetadataFormGroup() {
		return new FormGroup<AuditMitigationActionsTaskMetadataFormProperties>({
			taskId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(128), Validators.pattern('[a-zA-Z0-9_-]+')]),
			startTime: new FormControl<Date | null | undefined>(undefined),
			taskStatus: new FormControl<DescribeAuditMitigationActionsTaskResponseTaskStatus | null | undefined>(undefined),
		});

	}

	export interface ListAuditTasksResponse {
		tasks?: Array<AuditTaskMetadata>;
		nextToken?: string | null;
	}
	export interface ListAuditTasksResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListAuditTasksResponseFormGroup() {
		return new FormGroup<ListAuditTasksResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The audits that were performed. */
	export interface AuditTaskMetadata {

		/**
		 * Max length: 40
		 * Min length: 1
		 */
		taskId?: string | null;
		taskStatus?: DescribeAuditMitigationActionsTaskResponseTaskStatus | null;
		taskType?: DescribeAuditTaskResponseTaskType | null;
	}

	/** The audits that were performed. */
	export interface AuditTaskMetadataFormProperties {

		/**
		 * Max length: 40
		 * Min length: 1
		 */
		taskId: FormControl<string | null | undefined>,
		taskStatus: FormControl<DescribeAuditMitigationActionsTaskResponseTaskStatus | null | undefined>,
		taskType: FormControl<DescribeAuditTaskResponseTaskType | null | undefined>,
	}
	export function CreateAuditTaskMetadataFormGroup() {
		return new FormGroup<AuditTaskMetadataFormProperties>({
			taskId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(40), Validators.pattern('[a-zA-Z0-9\-]+')]),
			taskStatus: new FormControl<DescribeAuditMitigationActionsTaskResponseTaskStatus | null | undefined>(undefined),
			taskType: new FormControl<DescribeAuditTaskResponseTaskType | null | undefined>(undefined),
		});

	}

	export interface ListAuthorizersResponse {
		authorizers?: Array<AuthorizerSummary>;
		nextMarker?: string | null;
	}
	export interface ListAuthorizersResponseFormProperties {
		nextMarker: FormControl<string | null | undefined>,
	}
	export function CreateListAuthorizersResponseFormGroup() {
		return new FormGroup<ListAuthorizersResponseFormProperties>({
			nextMarker: new FormControl<string | null | undefined>(undefined, [Validators.pattern('[A-Za-z0-9+/]+={0,2}')]),
		});

	}


	/** The authorizer summary. */
	export interface AuthorizerSummary {

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		authorizerName?: string | null;
		authorizerArn?: string | null;
	}

	/** The authorizer summary. */
	export interface AuthorizerSummaryFormProperties {

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		authorizerName: FormControl<string | null | undefined>,
		authorizerArn: FormControl<string | null | undefined>,
	}
	export function CreateAuthorizerSummaryFormGroup() {
		return new FormGroup<AuthorizerSummaryFormProperties>({
			authorizerName: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(128), Validators.pattern('[\w=,@-]+')]),
			authorizerArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListBillingGroupsResponse {
		billingGroups?: Array<GroupNameAndArn>;
		nextToken?: string | null;
	}
	export interface ListBillingGroupsResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListBillingGroupsResponseFormGroup() {
		return new FormGroup<ListBillingGroupsResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The output from the ListCACertificates operation. */
	export interface ListCACertificatesResponse {
		certificates?: Array<CACertificate>;
		nextMarker?: string | null;
	}

	/** The output from the ListCACertificates operation. */
	export interface ListCACertificatesResponseFormProperties {
		nextMarker: FormControl<string | null | undefined>,
	}
	export function CreateListCACertificatesResponseFormGroup() {
		return new FormGroup<ListCACertificatesResponseFormProperties>({
			nextMarker: new FormControl<string | null | undefined>(undefined, [Validators.pattern('[A-Za-z0-9+/]+={0,2}')]),
		});

	}


	/** A CA certificate. */
	export interface CACertificate {
		certificateArn?: string | null;

		/**
		 * Max length: 64
		 * Min length: 64
		 */
		certificateId?: string | null;
		status?: AuthorizerDescriptionStatus | null;
		creationDate?: Date | null;
	}

	/** A CA certificate. */
	export interface CACertificateFormProperties {
		certificateArn: FormControl<string | null | undefined>,

		/**
		 * Max length: 64
		 * Min length: 64
		 */
		certificateId: FormControl<string | null | undefined>,
		status: FormControl<AuthorizerDescriptionStatus | null | undefined>,
		creationDate: FormControl<Date | null | undefined>,
	}
	export function CreateCACertificateFormGroup() {
		return new FormGroup<CACertificateFormProperties>({
			certificateArn: new FormControl<string | null | undefined>(undefined),
			certificateId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(64), Validators.maxLength(64), Validators.pattern('(0x)?[a-fA-F0-9]+')]),
			status: new FormControl<AuthorizerDescriptionStatus | null | undefined>(undefined),
			creationDate: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/** The output of the ListCertificates operation. */
	export interface ListCertificatesResponse {
		certificates?: Array<Certificate>;
		nextMarker?: string | null;
	}

	/** The output of the ListCertificates operation. */
	export interface ListCertificatesResponseFormProperties {
		nextMarker: FormControl<string | null | undefined>,
	}
	export function CreateListCertificatesResponseFormGroup() {
		return new FormGroup<ListCertificatesResponseFormProperties>({
			nextMarker: new FormControl<string | null | undefined>(undefined, [Validators.pattern('[A-Za-z0-9+/]+={0,2}')]),
		});

	}


	/** Information about a certificate. */
	export interface Certificate {
		certificateArn?: string | null;

		/**
		 * Max length: 64
		 * Min length: 64
		 */
		certificateId?: string | null;
		status?: CertificateDescriptionStatus | null;
		certificateMode?: CertificateDescriptionCertificateMode | null;
		creationDate?: Date | null;
	}

	/** Information about a certificate. */
	export interface CertificateFormProperties {
		certificateArn: FormControl<string | null | undefined>,

		/**
		 * Max length: 64
		 * Min length: 64
		 */
		certificateId: FormControl<string | null | undefined>,
		status: FormControl<CertificateDescriptionStatus | null | undefined>,
		certificateMode: FormControl<CertificateDescriptionCertificateMode | null | undefined>,
		creationDate: FormControl<Date | null | undefined>,
	}
	export function CreateCertificateFormGroup() {
		return new FormGroup<CertificateFormProperties>({
			certificateArn: new FormControl<string | null | undefined>(undefined),
			certificateId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(64), Validators.maxLength(64), Validators.pattern('(0x)?[a-fA-F0-9]+')]),
			status: new FormControl<CertificateDescriptionStatus | null | undefined>(undefined),
			certificateMode: new FormControl<CertificateDescriptionCertificateMode | null | undefined>(undefined),
			creationDate: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/** The output of the ListCertificatesByCA operation. */
	export interface ListCertificatesByCAResponse {
		certificates?: Array<Certificate>;
		nextMarker?: string | null;
	}

	/** The output of the ListCertificatesByCA operation. */
	export interface ListCertificatesByCAResponseFormProperties {
		nextMarker: FormControl<string | null | undefined>,
	}
	export function CreateListCertificatesByCAResponseFormGroup() {
		return new FormGroup<ListCertificatesByCAResponseFormProperties>({
			nextMarker: new FormControl<string | null | undefined>(undefined, [Validators.pattern('[A-Za-z0-9+/]+={0,2}')]),
		});

	}

	export interface ListDimensionsResponse {
		dimensionNames?: Array<string>;
		nextToken?: string | null;
	}
	export interface ListDimensionsResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListDimensionsResponseFormGroup() {
		return new FormGroup<ListDimensionsResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListDomainConfigurationsResponse {
		domainConfigurations?: Array<DomainConfigurationSummary>;
		nextMarker?: string | null;
	}
	export interface ListDomainConfigurationsResponseFormProperties {
		nextMarker: FormControl<string | null | undefined>,
	}
	export function CreateListDomainConfigurationsResponseFormGroup() {
		return new FormGroup<ListDomainConfigurationsResponseFormProperties>({
			nextMarker: new FormControl<string | null | undefined>(undefined, [Validators.pattern('[A-Za-z0-9+/]+={0,2}')]),
		});

	}


	/** <p>The summary of a domain configuration. A domain configuration specifies custom IoT-specific information about a domain. A domain configuration can be associated with an AWS-managed domain (for example, dbc123defghijk.iot.us-west-2.amazonaws.com), a customer managed domain, or a default endpoint.</p> <ul> <li> <p>Data</p> </li> <li> <p>Jobs</p> </li> <li> <p>CredentialProvider</p> </li> </ul> <note> <p>The domain configuration feature is in public preview and is subject to change.</p> </note> */
	export interface DomainConfigurationSummary {

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		domainConfigurationName?: string | null;
		domainConfigurationArn?: string | null;
		serviceType?: DescribeDomainConfigurationResponseServiceType | null;
	}

	/** <p>The summary of a domain configuration. A domain configuration specifies custom IoT-specific information about a domain. A domain configuration can be associated with an AWS-managed domain (for example, dbc123defghijk.iot.us-west-2.amazonaws.com), a customer managed domain, or a default endpoint.</p> <ul> <li> <p>Data</p> </li> <li> <p>Jobs</p> </li> <li> <p>CredentialProvider</p> </li> </ul> <note> <p>The domain configuration feature is in public preview and is subject to change.</p> </note> */
	export interface DomainConfigurationSummaryFormProperties {

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		domainConfigurationName: FormControl<string | null | undefined>,
		domainConfigurationArn: FormControl<string | null | undefined>,
		serviceType: FormControl<DescribeDomainConfigurationResponseServiceType | null | undefined>,
	}
	export function CreateDomainConfigurationSummaryFormGroup() {
		return new FormGroup<DomainConfigurationSummaryFormProperties>({
			domainConfigurationName: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(128), Validators.pattern('[\w.:-]+')]),
			domainConfigurationArn: new FormControl<string | null | undefined>(undefined),
			serviceType: new FormControl<DescribeDomainConfigurationResponseServiceType | null | undefined>(undefined),
		});

	}

	export interface ListIndicesResponse {
		indexNames?: Array<string>;
		nextToken?: string | null;
	}
	export interface ListIndicesResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListIndicesResponseFormGroup() {
		return new FormGroup<ListIndicesResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListJobExecutionsForJobResponse {
		executionSummaries?: Array<JobExecutionSummaryForJob>;
		nextToken?: string | null;
	}
	export interface ListJobExecutionsForJobResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListJobExecutionsForJobResponseFormGroup() {
		return new FormGroup<ListJobExecutionsForJobResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains a summary of information about job executions for a specific job. */
	export interface JobExecutionSummaryForJob {
		thingArn?: string | null;

		/** The job execution summary. */
		jobExecutionSummary?: JobExecutionSummary;
	}

	/** Contains a summary of information about job executions for a specific job. */
	export interface JobExecutionSummaryForJobFormProperties {
		thingArn: FormControl<string | null | undefined>,
	}
	export function CreateJobExecutionSummaryForJobFormGroup() {
		return new FormGroup<JobExecutionSummaryForJobFormProperties>({
			thingArn: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The job execution summary. */
	export interface JobExecutionSummary {
		status?: JobExecutionStatus | null;
		queuedAt?: Date | null;
		startedAt?: Date | null;
		lastUpdatedAt?: Date | null;
		executionNumber?: number | null;
	}

	/** The job execution summary. */
	export interface JobExecutionSummaryFormProperties {
		status: FormControl<JobExecutionStatus | null | undefined>,
		queuedAt: FormControl<Date | null | undefined>,
		startedAt: FormControl<Date | null | undefined>,
		lastUpdatedAt: FormControl<Date | null | undefined>,
		executionNumber: FormControl<number | null | undefined>,
	}
	export function CreateJobExecutionSummaryFormGroup() {
		return new FormGroup<JobExecutionSummaryFormProperties>({
			status: new FormControl<JobExecutionStatus | null | undefined>(undefined),
			queuedAt: new FormControl<Date | null | undefined>(undefined),
			startedAt: new FormControl<Date | null | undefined>(undefined),
			lastUpdatedAt: new FormControl<Date | null | undefined>(undefined),
			executionNumber: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ListJobExecutionsForThingResponse {
		executionSummaries?: Array<JobExecutionSummaryForThing>;
		nextToken?: string | null;
	}
	export interface ListJobExecutionsForThingResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListJobExecutionsForThingResponseFormGroup() {
		return new FormGroup<ListJobExecutionsForThingResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The job execution summary for a thing. */
	export interface JobExecutionSummaryForThing {

		/**
		 * Max length: 64
		 * Min length: 1
		 */
		jobId?: string | null;

		/** The job execution summary. */
		jobExecutionSummary?: JobExecutionSummary;
	}

	/** The job execution summary for a thing. */
	export interface JobExecutionSummaryForThingFormProperties {

		/**
		 * Max length: 64
		 * Min length: 1
		 */
		jobId: FormControl<string | null | undefined>,
	}
	export function CreateJobExecutionSummaryForThingFormGroup() {
		return new FormGroup<JobExecutionSummaryForThingFormProperties>({
			jobId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(64), Validators.pattern('[a-zA-Z0-9_-]+')]),
		});

	}

	export interface ListJobsResponse {
		jobs?: Array<JobSummary>;
		nextToken?: string | null;
	}
	export interface ListJobsResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListJobsResponseFormGroup() {
		return new FormGroup<ListJobsResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The job summary. */
	export interface JobSummary {
		jobArn?: string | null;

		/**
		 * Max length: 64
		 * Min length: 1
		 */
		jobId?: string | null;

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		thingGroupId?: string | null;
		targetSelection?: JobTargetSelection | null;
		status?: JobStatus | null;
		createdAt?: Date | null;
		lastUpdatedAt?: Date | null;
		completedAt?: Date | null;
	}

	/** The job summary. */
	export interface JobSummaryFormProperties {
		jobArn: FormControl<string | null | undefined>,

		/**
		 * Max length: 64
		 * Min length: 1
		 */
		jobId: FormControl<string | null | undefined>,

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		thingGroupId: FormControl<string | null | undefined>,
		targetSelection: FormControl<JobTargetSelection | null | undefined>,
		status: FormControl<JobStatus | null | undefined>,
		createdAt: FormControl<Date | null | undefined>,
		lastUpdatedAt: FormControl<Date | null | undefined>,
		completedAt: FormControl<Date | null | undefined>,
	}
	export function CreateJobSummaryFormGroup() {
		return new FormGroup<JobSummaryFormProperties>({
			jobArn: new FormControl<string | null | undefined>(undefined),
			jobId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(64), Validators.pattern('[a-zA-Z0-9_-]+')]),
			thingGroupId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(128), Validators.pattern('[a-zA-Z0-9\-]+')]),
			targetSelection: new FormControl<JobTargetSelection | null | undefined>(undefined),
			status: new FormControl<JobStatus | null | undefined>(undefined),
			createdAt: new FormControl<Date | null | undefined>(undefined),
			lastUpdatedAt: new FormControl<Date | null | undefined>(undefined),
			completedAt: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface ListMitigationActionsResponse {
		actionIdentifiers?: Array<MitigationActionIdentifier>;
		nextToken?: string | null;
	}
	export interface ListMitigationActionsResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListMitigationActionsResponseFormGroup() {
		return new FormGroup<ListMitigationActionsResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Information that identifies a mitigation action. This information is returned by ListMitigationActions. */
	export interface MitigationActionIdentifier {

		/** Max length: 128 */
		actionName?: string | null;
		actionArn?: string | null;
		creationDate?: Date | null;
	}

	/** Information that identifies a mitigation action. This information is returned by ListMitigationActions. */
	export interface MitigationActionIdentifierFormProperties {

		/** Max length: 128 */
		actionName: FormControl<string | null | undefined>,
		actionArn: FormControl<string | null | undefined>,
		creationDate: FormControl<Date | null | undefined>,
	}
	export function CreateMitigationActionIdentifierFormGroup() {
		return new FormGroup<MitigationActionIdentifierFormProperties>({
			actionName: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(128), Validators.pattern('[a-zA-Z0-9_-]+')]),
			actionArn: new FormControl<string | null | undefined>(undefined),
			creationDate: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface ListOTAUpdatesResponse {
		otaUpdates?: Array<OTAUpdateSummary>;
		nextToken?: string | null;
	}
	export interface ListOTAUpdatesResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListOTAUpdatesResponseFormGroup() {
		return new FormGroup<ListOTAUpdatesResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An OTA update summary. */
	export interface OTAUpdateSummary {

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		otaUpdateId?: string | null;
		otaUpdateArn?: string | null;
		creationDate?: Date | null;
	}

	/** An OTA update summary. */
	export interface OTAUpdateSummaryFormProperties {

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		otaUpdateId: FormControl<string | null | undefined>,
		otaUpdateArn: FormControl<string | null | undefined>,
		creationDate: FormControl<Date | null | undefined>,
	}
	export function CreateOTAUpdateSummaryFormGroup() {
		return new FormGroup<OTAUpdateSummaryFormProperties>({
			otaUpdateId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(128), Validators.pattern('[a-zA-Z0-9_-]+')]),
			otaUpdateArn: new FormControl<string | null | undefined>(undefined),
			creationDate: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/** The output from the ListOutgoingCertificates operation. */
	export interface ListOutgoingCertificatesResponse {
		outgoingCertificates?: Array<OutgoingCertificate>;
		nextMarker?: string | null;
	}

	/** The output from the ListOutgoingCertificates operation. */
	export interface ListOutgoingCertificatesResponseFormProperties {
		nextMarker: FormControl<string | null | undefined>,
	}
	export function CreateListOutgoingCertificatesResponseFormGroup() {
		return new FormGroup<ListOutgoingCertificatesResponseFormProperties>({
			nextMarker: new FormControl<string | null | undefined>(undefined, [Validators.pattern('[A-Za-z0-9+/]+={0,2}')]),
		});

	}


	/** A certificate that has been transferred but not yet accepted. */
	export interface OutgoingCertificate {
		certificateArn?: string | null;

		/**
		 * Max length: 64
		 * Min length: 64
		 */
		certificateId?: string | null;

		/**
		 * Max length: 12
		 * Min length: 12
		 */
		transferredTo?: string | null;
		transferDate?: Date | null;

		/** Max length: 128 */
		transferMessage?: string | null;
		creationDate?: Date | null;
	}

	/** A certificate that has been transferred but not yet accepted. */
	export interface OutgoingCertificateFormProperties {
		certificateArn: FormControl<string | null | undefined>,

		/**
		 * Max length: 64
		 * Min length: 64
		 */
		certificateId: FormControl<string | null | undefined>,

		/**
		 * Max length: 12
		 * Min length: 12
		 */
		transferredTo: FormControl<string | null | undefined>,
		transferDate: FormControl<Date | null | undefined>,

		/** Max length: 128 */
		transferMessage: FormControl<string | null | undefined>,
		creationDate: FormControl<Date | null | undefined>,
	}
	export function CreateOutgoingCertificateFormGroup() {
		return new FormGroup<OutgoingCertificateFormProperties>({
			certificateArn: new FormControl<string | null | undefined>(undefined),
			certificateId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(64), Validators.maxLength(64), Validators.pattern('(0x)?[a-fA-F0-9]+')]),
			transferredTo: new FormControl<string | null | undefined>(undefined, [Validators.minLength(12), Validators.maxLength(12), Validators.pattern('[0-9]+')]),
			transferDate: new FormControl<Date | null | undefined>(undefined),
			transferMessage: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(128)]),
			creationDate: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/** The output from the ListPolicies operation. */
	export interface ListPoliciesResponse {
		policies?: Array<Policy>;
		nextMarker?: string | null;
	}

	/** The output from the ListPolicies operation. */
	export interface ListPoliciesResponseFormProperties {
		nextMarker: FormControl<string | null | undefined>,
	}
	export function CreateListPoliciesResponseFormGroup() {
		return new FormGroup<ListPoliciesResponseFormProperties>({
			nextMarker: new FormControl<string | null | undefined>(undefined, [Validators.pattern('[A-Za-z0-9+/]+={0,2}')]),
		});

	}


	/** The output from the ListPolicyPrincipals operation. */
	export interface ListPolicyPrincipalsResponse {
		principals?: Array<string>;
		nextMarker?: string | null;
	}

	/** The output from the ListPolicyPrincipals operation. */
	export interface ListPolicyPrincipalsResponseFormProperties {
		nextMarker: FormControl<string | null | undefined>,
	}
	export function CreateListPolicyPrincipalsResponseFormGroup() {
		return new FormGroup<ListPolicyPrincipalsResponseFormProperties>({
			nextMarker: new FormControl<string | null | undefined>(undefined, [Validators.pattern('[A-Za-z0-9+/]+={0,2}')]),
		});

	}


	/** The output from the ListPolicyVersions operation. */
	export interface ListPolicyVersionsResponse {
		policyVersions?: Array<PolicyVersion>;
	}

	/** The output from the ListPolicyVersions operation. */
	export interface ListPolicyVersionsResponseFormProperties {
	}
	export function CreateListPolicyVersionsResponseFormGroup() {
		return new FormGroup<ListPolicyVersionsResponseFormProperties>({
		});

	}


	/** Describes a policy version. */
	export interface PolicyVersion {
		versionId?: string | null;
		isDefaultVersion?: boolean | null;
		createDate?: Date | null;
	}

	/** Describes a policy version. */
	export interface PolicyVersionFormProperties {
		versionId: FormControl<string | null | undefined>,
		isDefaultVersion: FormControl<boolean | null | undefined>,
		createDate: FormControl<Date | null | undefined>,
	}
	export function CreatePolicyVersionFormGroup() {
		return new FormGroup<PolicyVersionFormProperties>({
			versionId: new FormControl<string | null | undefined>(undefined, [Validators.pattern('[0-9]+')]),
			isDefaultVersion: new FormControl<boolean | null | undefined>(undefined),
			createDate: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/** The output from the ListPrincipalPolicies operation. */
	export interface ListPrincipalPoliciesResponse {
		policies?: Array<Policy>;
		nextMarker?: string | null;
	}

	/** The output from the ListPrincipalPolicies operation. */
	export interface ListPrincipalPoliciesResponseFormProperties {
		nextMarker: FormControl<string | null | undefined>,
	}
	export function CreateListPrincipalPoliciesResponseFormGroup() {
		return new FormGroup<ListPrincipalPoliciesResponseFormProperties>({
			nextMarker: new FormControl<string | null | undefined>(undefined, [Validators.pattern('[A-Za-z0-9+/]+={0,2}')]),
		});

	}


	/** The output from the ListPrincipalThings operation. */
	export interface ListPrincipalThingsResponse {
		things?: Array<string>;
		nextToken?: string | null;
	}

	/** The output from the ListPrincipalThings operation. */
	export interface ListPrincipalThingsResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListPrincipalThingsResponseFormGroup() {
		return new FormGroup<ListPrincipalThingsResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListProvisioningTemplateVersionsResponse {
		versions?: Array<ProvisioningTemplateVersionSummary>;
		nextToken?: string | null;
	}
	export interface ListProvisioningTemplateVersionsResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListProvisioningTemplateVersionsResponseFormGroup() {
		return new FormGroup<ListProvisioningTemplateVersionsResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A summary of information about a fleet provision template version. */
	export interface ProvisioningTemplateVersionSummary {
		versionId?: number | null;
		creationDate?: Date | null;
		isDefaultVersion?: boolean | null;
	}

	/** A summary of information about a fleet provision template version. */
	export interface ProvisioningTemplateVersionSummaryFormProperties {
		versionId: FormControl<number | null | undefined>,
		creationDate: FormControl<Date | null | undefined>,
		isDefaultVersion: FormControl<boolean | null | undefined>,
	}
	export function CreateProvisioningTemplateVersionSummaryFormGroup() {
		return new FormGroup<ProvisioningTemplateVersionSummaryFormProperties>({
			versionId: new FormControl<number | null | undefined>(undefined),
			creationDate: new FormControl<Date | null | undefined>(undefined),
			isDefaultVersion: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface ListProvisioningTemplatesResponse {
		templates?: Array<ProvisioningTemplateSummary>;
		nextToken?: string | null;
	}
	export interface ListProvisioningTemplatesResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListProvisioningTemplatesResponseFormGroup() {
		return new FormGroup<ListProvisioningTemplatesResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A summary of information about a fleet provisioning template. */
	export interface ProvisioningTemplateSummary {
		templateArn?: string | null;

		/**
		 * Max length: 36
		 * Min length: 1
		 */
		templateName?: string | null;

		/**
		 * Max length: 500
		 * Min length: 0
		 */
		description?: string | null;
		creationDate?: Date | null;
		lastModifiedDate?: Date | null;
		enabled?: boolean | null;
	}

	/** A summary of information about a fleet provisioning template. */
	export interface ProvisioningTemplateSummaryFormProperties {
		templateArn: FormControl<string | null | undefined>,

		/**
		 * Max length: 36
		 * Min length: 1
		 */
		templateName: FormControl<string | null | undefined>,

		/**
		 * Max length: 500
		 * Min length: 0
		 */
		description: FormControl<string | null | undefined>,
		creationDate: FormControl<Date | null | undefined>,
		lastModifiedDate: FormControl<Date | null | undefined>,
		enabled: FormControl<boolean | null | undefined>,
	}
	export function CreateProvisioningTemplateSummaryFormGroup() {
		return new FormGroup<ProvisioningTemplateSummaryFormProperties>({
			templateArn: new FormControl<string | null | undefined>(undefined),
			templateName: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(36), Validators.pattern('^[0-9A-Za-z_-]+$')]),
			description: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(500), Validators.pattern('[^\p{C}]*')]),
			creationDate: new FormControl<Date | null | undefined>(undefined),
			lastModifiedDate: new FormControl<Date | null | undefined>(undefined),
			enabled: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface ListRoleAliasesResponse {
		roleAliases?: Array<string>;
		nextMarker?: string | null;
	}
	export interface ListRoleAliasesResponseFormProperties {
		nextMarker: FormControl<string | null | undefined>,
	}
	export function CreateListRoleAliasesResponseFormGroup() {
		return new FormGroup<ListRoleAliasesResponseFormProperties>({
			nextMarker: new FormControl<string | null | undefined>(undefined, [Validators.pattern('[A-Za-z0-9+/]+={0,2}')]),
		});

	}

	export interface ListScheduledAuditsResponse {
		scheduledAudits?: Array<ScheduledAuditMetadata>;
		nextToken?: string | null;
	}
	export interface ListScheduledAuditsResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListScheduledAuditsResponseFormGroup() {
		return new FormGroup<ListScheduledAuditsResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Information about the scheduled audit. */
	export interface ScheduledAuditMetadata {

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		scheduledAuditName?: string | null;
		scheduledAuditArn?: string | null;
		frequency?: DescribeScheduledAuditResponseFrequency | null;
		dayOfMonth?: string | null;
		dayOfWeek?: DescribeScheduledAuditResponseDayOfWeek | null;
	}

	/** Information about the scheduled audit. */
	export interface ScheduledAuditMetadataFormProperties {

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		scheduledAuditName: FormControl<string | null | undefined>,
		scheduledAuditArn: FormControl<string | null | undefined>,
		frequency: FormControl<DescribeScheduledAuditResponseFrequency | null | undefined>,
		dayOfMonth: FormControl<string | null | undefined>,
		dayOfWeek: FormControl<DescribeScheduledAuditResponseDayOfWeek | null | undefined>,
	}
	export function CreateScheduledAuditMetadataFormGroup() {
		return new FormGroup<ScheduledAuditMetadataFormProperties>({
			scheduledAuditName: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(128), Validators.pattern('[a-zA-Z0-9_-]+')]),
			scheduledAuditArn: new FormControl<string | null | undefined>(undefined),
			frequency: new FormControl<DescribeScheduledAuditResponseFrequency | null | undefined>(undefined),
			dayOfMonth: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^([1-9]|[12][0-9]|3[01])$|^LAST$')]),
			dayOfWeek: new FormControl<DescribeScheduledAuditResponseDayOfWeek | null | undefined>(undefined),
		});

	}

	export interface ListSecurityProfilesResponse {
		securityProfileIdentifiers?: Array<SecurityProfileIdentifier>;
		nextToken?: string | null;
	}
	export interface ListSecurityProfilesResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListSecurityProfilesResponseFormGroup() {
		return new FormGroup<ListSecurityProfilesResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Identifying information for a Device Defender security profile. */
	export interface SecurityProfileIdentifier {

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		name: string;

		/** Required */
		arn: string;
	}

	/** Identifying information for a Device Defender security profile. */
	export interface SecurityProfileIdentifierFormProperties {

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		name: FormControl<string | null | undefined>,

		/** Required */
		arn: FormControl<string | null | undefined>,
	}
	export function CreateSecurityProfileIdentifierFormGroup() {
		return new FormGroup<SecurityProfileIdentifierFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(128), Validators.pattern('[a-zA-Z0-9:_-]+')]),
			arn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ListSecurityProfilesForTargetResponse {
		securityProfileTargetMappings?: Array<SecurityProfileTargetMapping>;
		nextToken?: string | null;
	}
	export interface ListSecurityProfilesForTargetResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListSecurityProfilesForTargetResponseFormGroup() {
		return new FormGroup<ListSecurityProfilesForTargetResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Information about a security profile and the target associated with it. */
	export interface SecurityProfileTargetMapping {

		/** Identifying information for a Device Defender security profile. */
		securityProfileIdentifier?: SecurityProfileIdentifier;

		/** A target to which an alert is sent when a security profile behavior is violated. */
		target?: SecurityProfileTarget;
	}

	/** Information about a security profile and the target associated with it. */
	export interface SecurityProfileTargetMappingFormProperties {
	}
	export function CreateSecurityProfileTargetMappingFormGroup() {
		return new FormGroup<SecurityProfileTargetMappingFormProperties>({
		});

	}


	/** A target to which an alert is sent when a security profile behavior is violated. */
	export interface SecurityProfileTarget {

		/** Required */
		arn: string;
	}

	/** A target to which an alert is sent when a security profile behavior is violated. */
	export interface SecurityProfileTargetFormProperties {

		/** Required */
		arn: FormControl<string | null | undefined>,
	}
	export function CreateSecurityProfileTargetFormGroup() {
		return new FormGroup<SecurityProfileTargetFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ListStreamsResponse {
		streams?: Array<StreamSummary>;
		nextToken?: string | null;
	}
	export interface ListStreamsResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListStreamsResponseFormGroup() {
		return new FormGroup<ListStreamsResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A summary of a stream. */
	export interface StreamSummary {

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		streamId?: string | null;
		streamArn?: string | null;

		/**
		 * Minimum: 0
		 * Maximum: 65535
		 */
		streamVersion?: number | null;

		/** Max length: 2028 */
		description?: string | null;
	}

	/** A summary of a stream. */
	export interface StreamSummaryFormProperties {

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		streamId: FormControl<string | null | undefined>,
		streamArn: FormControl<string | null | undefined>,

		/**
		 * Minimum: 0
		 * Maximum: 65535
		 */
		streamVersion: FormControl<number | null | undefined>,

		/** Max length: 2028 */
		description: FormControl<string | null | undefined>,
	}
	export function CreateStreamSummaryFormGroup() {
		return new FormGroup<StreamSummaryFormProperties>({
			streamId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(128), Validators.pattern('[a-zA-Z0-9_-]+')]),
			streamArn: new FormControl<string | null | undefined>(undefined),
			streamVersion: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(65535)]),
			description: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(2028), Validators.pattern('[^\p{C}]+')]),
		});

	}

	export interface ListTagsForResourceResponse {
		tags?: Array<Tag>;
		nextToken?: string | null;
	}
	export interface ListTagsForResourceResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListTagsForResourceResponseFormGroup() {
		return new FormGroup<ListTagsForResourceResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListTargetsForPolicyResponse {
		targets?: Array<string>;
		nextMarker?: string | null;
	}
	export interface ListTargetsForPolicyResponseFormProperties {
		nextMarker: FormControl<string | null | undefined>,
	}
	export function CreateListTargetsForPolicyResponseFormGroup() {
		return new FormGroup<ListTargetsForPolicyResponseFormProperties>({
			nextMarker: new FormControl<string | null | undefined>(undefined, [Validators.pattern('[A-Za-z0-9+/]+={0,2}')]),
		});

	}

	export interface ListTargetsForSecurityProfileResponse {
		securityProfileTargets?: Array<SecurityProfileTarget>;
		nextToken?: string | null;
	}
	export interface ListTargetsForSecurityProfileResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListTargetsForSecurityProfileResponseFormGroup() {
		return new FormGroup<ListTargetsForSecurityProfileResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListThingGroupsResponse {
		thingGroups?: Array<GroupNameAndArn>;
		nextToken?: string | null;
	}
	export interface ListThingGroupsResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListThingGroupsResponseFormGroup() {
		return new FormGroup<ListThingGroupsResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListThingGroupsForThingResponse {
		thingGroups?: Array<GroupNameAndArn>;
		nextToken?: string | null;
	}
	export interface ListThingGroupsForThingResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListThingGroupsForThingResponseFormGroup() {
		return new FormGroup<ListThingGroupsForThingResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The output from the ListThingPrincipals operation. */
	export interface ListThingPrincipalsResponse {
		principals?: Array<string>;
	}

	/** The output from the ListThingPrincipals operation. */
	export interface ListThingPrincipalsResponseFormProperties {
	}
	export function CreateListThingPrincipalsResponseFormGroup() {
		return new FormGroup<ListThingPrincipalsResponseFormProperties>({
		});

	}

	export interface ListThingRegistrationTaskReportsResponse {
		resourceLinks?: Array<string>;
		reportType?: ListThingRegistrationTaskReportsResponseReportType | null;
		nextToken?: string | null;
	}
	export interface ListThingRegistrationTaskReportsResponseFormProperties {
		reportType: FormControl<ListThingRegistrationTaskReportsResponseReportType | null | undefined>,
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListThingRegistrationTaskReportsResponseFormGroup() {
		return new FormGroup<ListThingRegistrationTaskReportsResponseFormProperties>({
			reportType: new FormControl<ListThingRegistrationTaskReportsResponseReportType | null | undefined>(undefined),
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ListThingRegistrationTaskReportsResponseReportType { ERRORS = 0, RESULTS = 1 }

	export interface ListThingRegistrationTasksResponse {
		taskIds?: Array<string>;
		nextToken?: string | null;
	}
	export interface ListThingRegistrationTasksResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListThingRegistrationTasksResponseFormGroup() {
		return new FormGroup<ListThingRegistrationTasksResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The output for the ListThingTypes operation. */
	export interface ListThingTypesResponse {
		thingTypes?: Array<ThingTypeDefinition>;
		nextToken?: string | null;
	}

	/** The output for the ListThingTypes operation. */
	export interface ListThingTypesResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListThingTypesResponseFormGroup() {
		return new FormGroup<ListThingTypesResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The definition of the thing type, including thing type name and description. */
	export interface ThingTypeDefinition {

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		thingTypeName?: string | null;
		thingTypeArn?: string | null;

		/** The ThingTypeProperties contains information about the thing type including: a thing type description, and a list of searchable thing attribute names. */
		thingTypeProperties?: ThingTypeProperties;

		/** The ThingTypeMetadata contains additional information about the thing type including: creation date and time, a value indicating whether the thing type is deprecated, and a date and time when time was deprecated. */
		thingTypeMetadata?: ThingTypeMetadata;
	}

	/** The definition of the thing type, including thing type name and description. */
	export interface ThingTypeDefinitionFormProperties {

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		thingTypeName: FormControl<string | null | undefined>,
		thingTypeArn: FormControl<string | null | undefined>,
	}
	export function CreateThingTypeDefinitionFormGroup() {
		return new FormGroup<ThingTypeDefinitionFormProperties>({
			thingTypeName: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(128), Validators.pattern('[a-zA-Z0-9:_-]+')]),
			thingTypeArn: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The output from the ListThings operation. */
	export interface ListThingsResponse {
		things?: Array<ThingAttribute>;
		nextToken?: string | null;
	}

	/** The output from the ListThings operation. */
	export interface ListThingsResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListThingsResponseFormGroup() {
		return new FormGroup<ListThingsResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The properties of the thing, including thing name, thing type name, and a list of thing attributes. */
	export interface ThingAttribute {

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		thingName?: string | null;

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		thingTypeName?: string | null;
		thingArn?: string | null;
		attributes?: Attributes;
		version?: number | null;
	}

	/** The properties of the thing, including thing name, thing type name, and a list of thing attributes. */
	export interface ThingAttributeFormProperties {

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		thingName: FormControl<string | null | undefined>,

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		thingTypeName: FormControl<string | null | undefined>,
		thingArn: FormControl<string | null | undefined>,
		version: FormControl<number | null | undefined>,
	}
	export function CreateThingAttributeFormGroup() {
		return new FormGroup<ThingAttributeFormProperties>({
			thingName: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(128), Validators.pattern('[a-zA-Z0-9:_-]+')]),
			thingTypeName: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(128), Validators.pattern('[a-zA-Z0-9:_-]+')]),
			thingArn: new FormControl<string | null | undefined>(undefined),
			version: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ListThingsInBillingGroupResponse {
		things?: Array<string>;
		nextToken?: string | null;
	}
	export interface ListThingsInBillingGroupResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListThingsInBillingGroupResponseFormGroup() {
		return new FormGroup<ListThingsInBillingGroupResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListThingsInThingGroupResponse {
		things?: Array<string>;
		nextToken?: string | null;
	}
	export interface ListThingsInThingGroupResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListThingsInThingGroupResponseFormGroup() {
		return new FormGroup<ListThingsInThingGroupResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListTopicRuleDestinationsResponse {
		destinationSummaries?: Array<TopicRuleDestinationSummary>;
		nextToken?: string | null;
	}
	export interface ListTopicRuleDestinationsResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListTopicRuleDestinationsResponseFormGroup() {
		return new FormGroup<ListTopicRuleDestinationsResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Information about the topic rule destination. */
	export interface TopicRuleDestinationSummary {
		arn?: string | null;
		status?: TopicRuleDestinationStatus | null;
		statusReason?: string | null;

		/** Information about an HTTP URL destination. */
		httpUrlSummary?: HttpUrlDestinationSummary;
	}

	/** Information about the topic rule destination. */
	export interface TopicRuleDestinationSummaryFormProperties {
		arn: FormControl<string | null | undefined>,
		status: FormControl<TopicRuleDestinationStatus | null | undefined>,
		statusReason: FormControl<string | null | undefined>,
	}
	export function CreateTopicRuleDestinationSummaryFormGroup() {
		return new FormGroup<TopicRuleDestinationSummaryFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<TopicRuleDestinationStatus | null | undefined>(undefined),
			statusReason: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Information about an HTTP URL destination. */
	export interface HttpUrlDestinationSummary {

		/** Max length: 2000 */
		confirmationUrl?: string | null;
	}

	/** Information about an HTTP URL destination. */
	export interface HttpUrlDestinationSummaryFormProperties {

		/** Max length: 2000 */
		confirmationUrl: FormControl<string | null | undefined>,
	}
	export function CreateHttpUrlDestinationSummaryFormGroup() {
		return new FormGroup<HttpUrlDestinationSummaryFormProperties>({
			confirmationUrl: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(2000)]),
		});

	}


	/** The output from the ListTopicRules operation. */
	export interface ListTopicRulesResponse {
		rules?: Array<TopicRuleListItem>;
		nextToken?: string | null;
	}

	/** The output from the ListTopicRules operation. */
	export interface ListTopicRulesResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListTopicRulesResponseFormGroup() {
		return new FormGroup<ListTopicRulesResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Describes a rule. */
	export interface TopicRuleListItem {
		ruleArn?: string | null;

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		ruleName?: string | null;
		topicPattern?: string | null;
		createdAt?: Date | null;
		ruleDisabled?: boolean | null;
	}

	/** Describes a rule. */
	export interface TopicRuleListItemFormProperties {
		ruleArn: FormControl<string | null | undefined>,

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		ruleName: FormControl<string | null | undefined>,
		topicPattern: FormControl<string | null | undefined>,
		createdAt: FormControl<Date | null | undefined>,
		ruleDisabled: FormControl<boolean | null | undefined>,
	}
	export function CreateTopicRuleListItemFormGroup() {
		return new FormGroup<TopicRuleListItemFormProperties>({
			ruleArn: new FormControl<string | null | undefined>(undefined),
			ruleName: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(128), Validators.pattern('^[a-zA-Z0-9_]+$')]),
			topicPattern: new FormControl<string | null | undefined>(undefined),
			createdAt: new FormControl<Date | null | undefined>(undefined),
			ruleDisabled: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface ListV2LoggingLevelsResponse {
		logTargetConfigurations?: Array<LogTargetConfiguration>;
		nextToken?: string | null;
	}
	export interface ListV2LoggingLevelsResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListV2LoggingLevelsResponseFormGroup() {
		return new FormGroup<ListV2LoggingLevelsResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The target configuration. */
	export interface LogTargetConfiguration {

		/** A log target. */
		logTarget?: LogTarget;
		logLevel?: EnableIoTLoggingParamsLogLevel | null;
	}

	/** The target configuration. */
	export interface LogTargetConfigurationFormProperties {
		logLevel: FormControl<EnableIoTLoggingParamsLogLevel | null | undefined>,
	}
	export function CreateLogTargetConfigurationFormGroup() {
		return new FormGroup<LogTargetConfigurationFormProperties>({
			logLevel: new FormControl<EnableIoTLoggingParamsLogLevel | null | undefined>(undefined),
		});

	}


	/** A log target. */
	export interface LogTarget {

		/** Required */
		targetType: LogTargetTargetType;
		targetName?: string | null;
	}

	/** A log target. */
	export interface LogTargetFormProperties {

		/** Required */
		targetType: FormControl<LogTargetTargetType | null | undefined>,
		targetName: FormControl<string | null | undefined>,
	}
	export function CreateLogTargetFormGroup() {
		return new FormGroup<LogTargetFormProperties>({
			targetType: new FormControl<LogTargetTargetType | null | undefined>(undefined, [Validators.required]),
			targetName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum LogTargetTargetType { DEFAULT = 0, THING_GROUP = 1 }

	export interface ListViolationEventsResponse {
		violationEvents?: Array<ViolationEvent>;
		nextToken?: string | null;
	}
	export interface ListViolationEventsResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListViolationEventsResponseFormGroup() {
		return new FormGroup<ListViolationEventsResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Information about a Device Defender security profile behavior violation. */
	export interface ViolationEvent {

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		violationId?: string | null;

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		thingName?: string | null;

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		securityProfileName?: string | null;

		/** A Device Defender security profile behavior. */
		behavior?: Behavior;

		/** The value to be compared with the <code>metric</code>. */
		metricValue?: MetricValue;
		violationEventType?: ViolationEventViolationEventType | null;
		violationEventTime?: Date | null;
	}

	/** Information about a Device Defender security profile behavior violation. */
	export interface ViolationEventFormProperties {

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		violationId: FormControl<string | null | undefined>,

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		thingName: FormControl<string | null | undefined>,

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		securityProfileName: FormControl<string | null | undefined>,
		violationEventType: FormControl<ViolationEventViolationEventType | null | undefined>,
		violationEventTime: FormControl<Date | null | undefined>,
	}
	export function CreateViolationEventFormGroup() {
		return new FormGroup<ViolationEventFormProperties>({
			violationId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(128), Validators.pattern('[a-zA-Z0-9\-]+')]),
			thingName: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(128)]),
			securityProfileName: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(128), Validators.pattern('[a-zA-Z0-9:_-]+')]),
			violationEventType: new FormControl<ViolationEventViolationEventType | null | undefined>(undefined),
			violationEventTime: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export enum ViolationEventViolationEventType { 'in-alarm' = 0, 'alarm-cleared' = 1, 'alarm-invalidated' = 2 }


	/** The output from the RegisterCACertificateResponse operation. */
	export interface RegisterCACertificateResponse {
		certificateArn?: string | null;

		/**
		 * Max length: 64
		 * Min length: 64
		 */
		certificateId?: string | null;
	}

	/** The output from the RegisterCACertificateResponse operation. */
	export interface RegisterCACertificateResponseFormProperties {
		certificateArn: FormControl<string | null | undefined>,

		/**
		 * Max length: 64
		 * Min length: 64
		 */
		certificateId: FormControl<string | null | undefined>,
	}
	export function CreateRegisterCACertificateResponseFormGroup() {
		return new FormGroup<RegisterCACertificateResponseFormProperties>({
			certificateArn: new FormControl<string | null | undefined>(undefined),
			certificateId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(64), Validators.maxLength(64), Validators.pattern('(0x)?[a-fA-F0-9]+')]),
		});

	}

	export interface RegistrationCodeValidationException {
	}
	export interface RegistrationCodeValidationExceptionFormProperties {
	}
	export function CreateRegistrationCodeValidationExceptionFormGroup() {
		return new FormGroup<RegistrationCodeValidationExceptionFormProperties>({
		});

	}


	/** The output from the RegisterCertificate operation. */
	export interface RegisterCertificateResponse {
		certificateArn?: string | null;

		/**
		 * Max length: 64
		 * Min length: 64
		 */
		certificateId?: string | null;
	}

	/** The output from the RegisterCertificate operation. */
	export interface RegisterCertificateResponseFormProperties {
		certificateArn: FormControl<string | null | undefined>,

		/**
		 * Max length: 64
		 * Min length: 64
		 */
		certificateId: FormControl<string | null | undefined>,
	}
	export function CreateRegisterCertificateResponseFormGroup() {
		return new FormGroup<RegisterCertificateResponseFormProperties>({
			certificateArn: new FormControl<string | null | undefined>(undefined),
			certificateId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(64), Validators.maxLength(64), Validators.pattern('(0x)?[a-fA-F0-9]+')]),
		});

	}

	export interface CertificateConflictException {
	}
	export interface CertificateConflictExceptionFormProperties {
	}
	export function CreateCertificateConflictExceptionFormGroup() {
		return new FormGroup<CertificateConflictExceptionFormProperties>({
		});

	}

	export interface RegisterCertificateWithoutCAResponse {
		certificateArn?: string | null;

		/**
		 * Max length: 64
		 * Min length: 64
		 */
		certificateId?: string | null;
	}
	export interface RegisterCertificateWithoutCAResponseFormProperties {
		certificateArn: FormControl<string | null | undefined>,

		/**
		 * Max length: 64
		 * Min length: 64
		 */
		certificateId: FormControl<string | null | undefined>,
	}
	export function CreateRegisterCertificateWithoutCAResponseFormGroup() {
		return new FormGroup<RegisterCertificateWithoutCAResponseFormProperties>({
			certificateArn: new FormControl<string | null | undefined>(undefined),
			certificateId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(64), Validators.maxLength(64), Validators.pattern('(0x)?[a-fA-F0-9]+')]),
		});

	}

	export interface RegisterThingResponse {

		/**
		 * The PEM of a certificate.
		 * Max length: 65536
		 * Min length: 1
		 */
		certificatePem?: string | null;
		resourceArns?: ResourceArns;
	}
	export interface RegisterThingResponseFormProperties {

		/**
		 * The PEM of a certificate.
		 * Max length: 65536
		 * Min length: 1
		 */
		certificatePem: FormControl<string | null | undefined>,
	}
	export function CreateRegisterThingResponseFormGroup() {
		return new FormGroup<RegisterThingResponseFormProperties>({
			certificatePem: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(65536)]),
		});

	}

	export interface ResourceArns {
	}
	export interface ResourceArnsFormProperties {
	}
	export function CreateResourceArnsFormGroup() {
		return new FormGroup<ResourceArnsFormProperties>({
		});

	}

	export interface ResourceRegistrationFailureException {
	}
	export interface ResourceRegistrationFailureExceptionFormProperties {
	}
	export function CreateResourceRegistrationFailureExceptionFormGroup() {
		return new FormGroup<ResourceRegistrationFailureExceptionFormProperties>({
		});

	}

	export interface RemoveThingFromBillingGroupResponse {
	}
	export interface RemoveThingFromBillingGroupResponseFormProperties {
	}
	export function CreateRemoveThingFromBillingGroupResponseFormGroup() {
		return new FormGroup<RemoveThingFromBillingGroupResponseFormProperties>({
		});

	}

	export interface RemoveThingFromThingGroupResponse {
	}
	export interface RemoveThingFromThingGroupResponseFormProperties {
	}
	export function CreateRemoveThingFromThingGroupResponseFormGroup() {
		return new FormGroup<RemoveThingFromThingGroupResponseFormProperties>({
		});

	}

	export interface SearchIndexResponse {
		nextToken?: string | null;
		things?: Array<ThingDocument>;
		thingGroups?: Array<ThingGroupDocument>;
	}
	export interface SearchIndexResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateSearchIndexResponseFormGroup() {
		return new FormGroup<SearchIndexResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The thing search index document. */
	export interface ThingDocument {

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		thingName?: string | null;
		thingId?: string | null;

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		thingTypeName?: string | null;
		thingGroupNames?: Array<string>;
		attributes?: Attributes;
		shadow?: string | null;

		/** The connectivity status of the thing. */
		connectivity?: ThingConnectivity;
	}

	/** The thing search index document. */
	export interface ThingDocumentFormProperties {

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		thingName: FormControl<string | null | undefined>,
		thingId: FormControl<string | null | undefined>,

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		thingTypeName: FormControl<string | null | undefined>,
		shadow: FormControl<string | null | undefined>,
	}
	export function CreateThingDocumentFormGroup() {
		return new FormGroup<ThingDocumentFormProperties>({
			thingName: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(128), Validators.pattern('[a-zA-Z0-9:_-]+')]),
			thingId: new FormControl<string | null | undefined>(undefined),
			thingTypeName: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(128), Validators.pattern('[a-zA-Z0-9:_-]+')]),
			shadow: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The connectivity status of the thing. */
	export interface ThingConnectivity {
		connected?: boolean | null;
		timestamp?: number | null;
	}

	/** The connectivity status of the thing. */
	export interface ThingConnectivityFormProperties {
		connected: FormControl<boolean | null | undefined>,
		timestamp: FormControl<number | null | undefined>,
	}
	export function CreateThingConnectivityFormGroup() {
		return new FormGroup<ThingConnectivityFormProperties>({
			connected: new FormControl<boolean | null | undefined>(undefined),
			timestamp: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** The thing group search index document. */
	export interface ThingGroupDocument {

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		thingGroupName?: string | null;

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		thingGroupId?: string | null;

		/** Max length: 2028 */
		thingGroupDescription?: string | null;
		attributes?: Attributes;
		parentGroupNames?: Array<string>;
	}

	/** The thing group search index document. */
	export interface ThingGroupDocumentFormProperties {

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		thingGroupName: FormControl<string | null | undefined>,

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		thingGroupId: FormControl<string | null | undefined>,

		/** Max length: 2028 */
		thingGroupDescription: FormControl<string | null | undefined>,
	}
	export function CreateThingGroupDocumentFormGroup() {
		return new FormGroup<ThingGroupDocumentFormProperties>({
			thingGroupName: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(128), Validators.pattern('[a-zA-Z0-9:_-]+')]),
			thingGroupId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(128), Validators.pattern('[a-zA-Z0-9\-]+')]),
			thingGroupDescription: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(2028), Validators.pattern('[\p{Graph}\x20]*')]),
		});

	}

	export interface SetDefaultAuthorizerResponse {

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		authorizerName?: string | null;
		authorizerArn?: string | null;
	}
	export interface SetDefaultAuthorizerResponseFormProperties {

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		authorizerName: FormControl<string | null | undefined>,
		authorizerArn: FormControl<string | null | undefined>,
	}
	export function CreateSetDefaultAuthorizerResponseFormGroup() {
		return new FormGroup<SetDefaultAuthorizerResponseFormProperties>({
			authorizerName: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(128), Validators.pattern('[\w=,@-]+')]),
			authorizerArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum LogLevel { DEBUG = 0, INFO = 1, ERROR = 2, WARN = 3, DISABLED = 4 }

	export enum LogTargetType { DEFAULT = 0, THING_GROUP = 1 }

	export interface StartAuditMitigationActionsTaskResponse {

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		taskId?: string | null;
	}
	export interface StartAuditMitigationActionsTaskResponseFormProperties {

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		taskId: FormControl<string | null | undefined>,
	}
	export function CreateStartAuditMitigationActionsTaskResponseFormGroup() {
		return new FormGroup<StartAuditMitigationActionsTaskResponseFormProperties>({
			taskId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(128), Validators.pattern('[a-zA-Z0-9_-]+')]),
		});

	}

	export interface TaskAlreadyExistsException {
	}
	export interface TaskAlreadyExistsExceptionFormProperties {
	}
	export function CreateTaskAlreadyExistsExceptionFormGroup() {
		return new FormGroup<TaskAlreadyExistsExceptionFormProperties>({
		});

	}

	export interface StartOnDemandAuditTaskResponse {

		/**
		 * Max length: 40
		 * Min length: 1
		 */
		taskId?: string | null;
	}
	export interface StartOnDemandAuditTaskResponseFormProperties {

		/**
		 * Max length: 40
		 * Min length: 1
		 */
		taskId: FormControl<string | null | undefined>,
	}
	export function CreateStartOnDemandAuditTaskResponseFormGroup() {
		return new FormGroup<StartOnDemandAuditTaskResponseFormProperties>({
			taskId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(40), Validators.pattern('[a-zA-Z0-9\-]+')]),
		});

	}

	export interface StartThingRegistrationTaskResponse {

		/** Max length: 40 */
		taskId?: string | null;
	}
	export interface StartThingRegistrationTaskResponseFormProperties {

		/** Max length: 40 */
		taskId: FormControl<string | null | undefined>,
	}
	export function CreateStartThingRegistrationTaskResponseFormGroup() {
		return new FormGroup<StartThingRegistrationTaskResponseFormProperties>({
			taskId: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(40)]),
		});

	}

	export interface StopThingRegistrationTaskResponse {
	}
	export interface StopThingRegistrationTaskResponseFormProperties {
	}
	export function CreateStopThingRegistrationTaskResponseFormGroup() {
		return new FormGroup<StopThingRegistrationTaskResponseFormProperties>({
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

	export interface TestAuthorizationResponse {
		authResults?: Array<AuthResult>;
	}
	export interface TestAuthorizationResponseFormProperties {
	}
	export function CreateTestAuthorizationResponseFormGroup() {
		return new FormGroup<TestAuthorizationResponseFormProperties>({
		});

	}


	/** The authorizer result. */
	export interface AuthResult {

		/** A collection of authorization information. */
		authInfo?: AuthInfo;

		/** Contains information that allowed the authorization. */
		allowed?: Allowed;

		/** Contains information that denied the authorization. */
		denied?: Denied;
		authDecision?: AuthResultAuthDecision | null;
		missingContextValues?: Array<string>;
	}

	/** The authorizer result. */
	export interface AuthResultFormProperties {
		authDecision: FormControl<AuthResultAuthDecision | null | undefined>,
	}
	export function CreateAuthResultFormGroup() {
		return new FormGroup<AuthResultFormProperties>({
			authDecision: new FormControl<AuthResultAuthDecision | null | undefined>(undefined),
		});

	}


	/** A collection of authorization information. */
	export interface AuthInfo {
		actionType?: AuthInfoActionType | null;

		/** Required */
		resources: Array<string>;
	}

	/** A collection of authorization information. */
	export interface AuthInfoFormProperties {
		actionType: FormControl<AuthInfoActionType | null | undefined>,
	}
	export function CreateAuthInfoFormGroup() {
		return new FormGroup<AuthInfoFormProperties>({
			actionType: new FormControl<AuthInfoActionType | null | undefined>(undefined),
		});

	}

	export enum AuthInfoActionType { PUBLISH = 0, SUBSCRIBE = 1, RECEIVE = 2, CONNECT = 3 }


	/** Contains information that allowed the authorization. */
	export interface Allowed {
		policies?: Array<Policy>;
	}

	/** Contains information that allowed the authorization. */
	export interface AllowedFormProperties {
	}
	export function CreateAllowedFormGroup() {
		return new FormGroup<AllowedFormProperties>({
		});

	}


	/** Contains information that denied the authorization. */
	export interface Denied {

		/** Information that implicitly denies authorization. When policy doesn't explicitly deny or allow an action on a resource it is considered an implicit deny. */
		implicitDeny?: ImplicitDeny;

		/** Information that explicitly denies authorization. */
		explicitDeny?: ExplicitDeny;
	}

	/** Contains information that denied the authorization. */
	export interface DeniedFormProperties {
	}
	export function CreateDeniedFormGroup() {
		return new FormGroup<DeniedFormProperties>({
		});

	}


	/** Information that implicitly denies authorization. When policy doesn't explicitly deny or allow an action on a resource it is considered an implicit deny. */
	export interface ImplicitDeny {
		policies?: Array<Policy>;
	}

	/** Information that implicitly denies authorization. When policy doesn't explicitly deny or allow an action on a resource it is considered an implicit deny. */
	export interface ImplicitDenyFormProperties {
	}
	export function CreateImplicitDenyFormGroup() {
		return new FormGroup<ImplicitDenyFormProperties>({
		});

	}


	/** Information that explicitly denies authorization. */
	export interface ExplicitDeny {
		policies?: Array<Policy>;
	}

	/** Information that explicitly denies authorization. */
	export interface ExplicitDenyFormProperties {
	}
	export function CreateExplicitDenyFormGroup() {
		return new FormGroup<ExplicitDenyFormProperties>({
		});

	}

	export enum AuthResultAuthDecision { ALLOWED = 0, EXPLICIT_DENY = 1, IMPLICIT_DENY = 2 }

	export interface TestInvokeAuthorizerResponse {
		isAuthenticated?: boolean | null;

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		principalId?: string | null;
		policyDocuments?: Array<string>;
		refreshAfterInSeconds?: number | null;
		disconnectAfterInSeconds?: number | null;
	}
	export interface TestInvokeAuthorizerResponseFormProperties {
		isAuthenticated: FormControl<boolean | null | undefined>,

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		principalId: FormControl<string | null | undefined>,
		refreshAfterInSeconds: FormControl<number | null | undefined>,
		disconnectAfterInSeconds: FormControl<number | null | undefined>,
	}
	export function CreateTestInvokeAuthorizerResponseFormGroup() {
		return new FormGroup<TestInvokeAuthorizerResponseFormProperties>({
			isAuthenticated: new FormControl<boolean | null | undefined>(undefined),
			principalId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(128), Validators.pattern('[a-zA-Z0-9]+')]),
			refreshAfterInSeconds: new FormControl<number | null | undefined>(undefined),
			disconnectAfterInSeconds: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface HttpHeaders {
	}
	export interface HttpHeadersFormProperties {
	}
	export function CreateHttpHeadersFormGroup() {
		return new FormGroup<HttpHeadersFormProperties>({
		});

	}

	export interface InvalidResponseException {
	}
	export interface InvalidResponseExceptionFormProperties {
	}
	export function CreateInvalidResponseExceptionFormGroup() {
		return new FormGroup<InvalidResponseExceptionFormProperties>({
		});

	}


	/** The output from the TransferCertificate operation. */
	export interface TransferCertificateResponse {
		transferredCertificateArn?: string | null;
	}

	/** The output from the TransferCertificate operation. */
	export interface TransferCertificateResponseFormProperties {
		transferredCertificateArn: FormControl<string | null | undefined>,
	}
	export function CreateTransferCertificateResponseFormGroup() {
		return new FormGroup<TransferCertificateResponseFormProperties>({
			transferredCertificateArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface TransferConflictException {
	}
	export interface TransferConflictExceptionFormProperties {
	}
	export function CreateTransferConflictExceptionFormGroup() {
		return new FormGroup<TransferConflictExceptionFormProperties>({
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

	export interface UpdateAccountAuditConfigurationResponse {
	}
	export interface UpdateAccountAuditConfigurationResponseFormProperties {
	}
	export function CreateUpdateAccountAuditConfigurationResponseFormGroup() {
		return new FormGroup<UpdateAccountAuditConfigurationResponseFormProperties>({
		});

	}


	/** Information about the targets to which audit notifications are sent. */
	export interface AuditNotificationTarget {

		/** Max length: 2048 */
		targetArn?: string | null;

		/**
		 * Max length: 2048
		 * Min length: 20
		 */
		roleArn?: string | null;
		enabled?: boolean | null;
	}

	/** Information about the targets to which audit notifications are sent. */
	export interface AuditNotificationTargetFormProperties {

		/** Max length: 2048 */
		targetArn: FormControl<string | null | undefined>,

		/**
		 * Max length: 2048
		 * Min length: 20
		 */
		roleArn: FormControl<string | null | undefined>,
		enabled: FormControl<boolean | null | undefined>,
	}
	export function CreateAuditNotificationTargetFormGroup() {
		return new FormGroup<AuditNotificationTargetFormProperties>({
			targetArn: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(2048)]),
			roleArn: new FormControl<string | null | undefined>(undefined, [Validators.minLength(20), Validators.maxLength(2048)]),
			enabled: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Which audit checks are enabled and disabled for this account. */
	export interface AuditCheckConfiguration {
		enabled?: boolean | null;
	}

	/** Which audit checks are enabled and disabled for this account. */
	export interface AuditCheckConfigurationFormProperties {
		enabled: FormControl<boolean | null | undefined>,
	}
	export function CreateAuditCheckConfigurationFormGroup() {
		return new FormGroup<AuditCheckConfigurationFormProperties>({
			enabled: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface UpdateAuthorizerResponse {

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		authorizerName?: string | null;
		authorizerArn?: string | null;
	}
	export interface UpdateAuthorizerResponseFormProperties {

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		authorizerName: FormControl<string | null | undefined>,
		authorizerArn: FormControl<string | null | undefined>,
	}
	export function CreateUpdateAuthorizerResponseFormGroup() {
		return new FormGroup<UpdateAuthorizerResponseFormProperties>({
			authorizerName: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(128), Validators.pattern('[\w=,@-]+')]),
			authorizerArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateBillingGroupResponse {
		version?: number | null;
	}
	export interface UpdateBillingGroupResponseFormProperties {
		version: FormControl<number | null | undefined>,
	}
	export function CreateUpdateBillingGroupResponseFormGroup() {
		return new FormGroup<UpdateBillingGroupResponseFormProperties>({
			version: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface UpdateDimensionResponse {

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		name?: string | null;
		arn?: string | null;
		type?: DescribeDimensionResponseType | null;

		/**
		 * Minimum items: 1
		 * Maximum items: 100
		 */
		stringValues?: Array<string>;
		creationDate?: Date | null;
		lastModifiedDate?: Date | null;
	}
	export interface UpdateDimensionResponseFormProperties {

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		name: FormControl<string | null | undefined>,
		arn: FormControl<string | null | undefined>,
		type: FormControl<DescribeDimensionResponseType | null | undefined>,
		creationDate: FormControl<Date | null | undefined>,
		lastModifiedDate: FormControl<Date | null | undefined>,
	}
	export function CreateUpdateDimensionResponseFormGroup() {
		return new FormGroup<UpdateDimensionResponseFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(128), Validators.pattern('[a-zA-Z0-9:_-]+')]),
			arn: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<DescribeDimensionResponseType | null | undefined>(undefined),
			creationDate: new FormControl<Date | null | undefined>(undefined),
			lastModifiedDate: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface UpdateDomainConfigurationResponse {

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		domainConfigurationName?: string | null;
		domainConfigurationArn?: string | null;
	}
	export interface UpdateDomainConfigurationResponseFormProperties {

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		domainConfigurationName: FormControl<string | null | undefined>,
		domainConfigurationArn: FormControl<string | null | undefined>,
	}
	export function CreateUpdateDomainConfigurationResponseFormGroup() {
		return new FormGroup<UpdateDomainConfigurationResponseFormProperties>({
			domainConfigurationName: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(128), Validators.pattern('[\w.:-]+')]),
			domainConfigurationArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateDynamicThingGroupResponse {
		version?: number | null;
	}
	export interface UpdateDynamicThingGroupResponseFormProperties {
		version: FormControl<number | null | undefined>,
	}
	export function CreateUpdateDynamicThingGroupResponseFormGroup() {
		return new FormGroup<UpdateDynamicThingGroupResponseFormProperties>({
			version: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface UpdateEventConfigurationsResponse {
	}
	export interface UpdateEventConfigurationsResponseFormProperties {
	}
	export function CreateUpdateEventConfigurationsResponseFormGroup() {
		return new FormGroup<UpdateEventConfigurationsResponseFormProperties>({
		});

	}


	/** Configuration. */
	export interface Configuration {
		Enabled?: boolean | null;
	}

	/** Configuration. */
	export interface ConfigurationFormProperties {
		Enabled: FormControl<boolean | null | undefined>,
	}
	export function CreateConfigurationFormGroup() {
		return new FormGroup<ConfigurationFormProperties>({
			Enabled: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface UpdateIndexingConfigurationResponse {
	}
	export interface UpdateIndexingConfigurationResponseFormProperties {
	}
	export function CreateUpdateIndexingConfigurationResponseFormGroup() {
		return new FormGroup<UpdateIndexingConfigurationResponseFormProperties>({
		});

	}

	export enum ThingIndexingMode { OFF = 0, REGISTRY = 1, REGISTRY_AND_SHADOW = 2 }

	export enum ThingConnectivityIndexingMode { OFF = 0, STATUS = 1 }

	export enum ThingGroupIndexingMode { OFF = 0, ON = 1 }

	export interface UpdateMitigationActionResponse {
		actionArn?: string | null;
		actionId?: string | null;
	}
	export interface UpdateMitigationActionResponseFormProperties {
		actionArn: FormControl<string | null | undefined>,
		actionId: FormControl<string | null | undefined>,
	}
	export function CreateUpdateMitigationActionResponseFormGroup() {
		return new FormGroup<UpdateMitigationActionResponseFormProperties>({
			actionArn: new FormControl<string | null | undefined>(undefined),
			actionId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateProvisioningTemplateResponse {
	}
	export interface UpdateProvisioningTemplateResponseFormProperties {
	}
	export function CreateUpdateProvisioningTemplateResponseFormGroup() {
		return new FormGroup<UpdateProvisioningTemplateResponseFormProperties>({
		});

	}

	export interface UpdateRoleAliasResponse {

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		roleAlias?: string | null;

		/**
		 * Max length: 2048
		 * Min length: 1
		 */
		roleAliasArn?: string | null;
	}
	export interface UpdateRoleAliasResponseFormProperties {

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		roleAlias: FormControl<string | null | undefined>,

		/**
		 * Max length: 2048
		 * Min length: 1
		 */
		roleAliasArn: FormControl<string | null | undefined>,
	}
	export function CreateUpdateRoleAliasResponseFormGroup() {
		return new FormGroup<UpdateRoleAliasResponseFormProperties>({
			roleAlias: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(128), Validators.pattern('[\w=,@-]+')]),
			roleAliasArn: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(2048)]),
		});

	}

	export interface UpdateScheduledAuditResponse {
		scheduledAuditArn?: string | null;
	}
	export interface UpdateScheduledAuditResponseFormProperties {
		scheduledAuditArn: FormControl<string | null | undefined>,
	}
	export function CreateUpdateScheduledAuditResponseFormGroup() {
		return new FormGroup<UpdateScheduledAuditResponseFormProperties>({
			scheduledAuditArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateSecurityProfileResponse {

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		securityProfileName?: string | null;
		securityProfileArn?: string | null;

		/** Max length: 1000 */
		securityProfileDescription?: string | null;

		/** Maximum items: 100 */
		behaviors?: Array<Behavior>;
		alertTargets?: AlertTargets;
		additionalMetricsToRetain?: Array<string>;
		additionalMetricsToRetainV2?: Array<MetricToRetain>;
		version?: number | null;
		creationDate?: Date | null;
		lastModifiedDate?: Date | null;
	}
	export interface UpdateSecurityProfileResponseFormProperties {

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		securityProfileName: FormControl<string | null | undefined>,
		securityProfileArn: FormControl<string | null | undefined>,

		/** Max length: 1000 */
		securityProfileDescription: FormControl<string | null | undefined>,
		version: FormControl<number | null | undefined>,
		creationDate: FormControl<Date | null | undefined>,
		lastModifiedDate: FormControl<Date | null | undefined>,
	}
	export function CreateUpdateSecurityProfileResponseFormGroup() {
		return new FormGroup<UpdateSecurityProfileResponseFormProperties>({
			securityProfileName: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(128), Validators.pattern('[a-zA-Z0-9:_-]+')]),
			securityProfileArn: new FormControl<string | null | undefined>(undefined),
			securityProfileDescription: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(1000), Validators.pattern('[\p{Graph}\x20]*')]),
			version: new FormControl<number | null | undefined>(undefined),
			creationDate: new FormControl<Date | null | undefined>(undefined),
			lastModifiedDate: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface UpdateStreamResponse {

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		streamId?: string | null;
		streamArn?: string | null;

		/** Max length: 2028 */
		description?: string | null;

		/**
		 * Minimum: 0
		 * Maximum: 65535
		 */
		streamVersion?: number | null;
	}
	export interface UpdateStreamResponseFormProperties {

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		streamId: FormControl<string | null | undefined>,
		streamArn: FormControl<string | null | undefined>,

		/** Max length: 2028 */
		description: FormControl<string | null | undefined>,

		/**
		 * Minimum: 0
		 * Maximum: 65535
		 */
		streamVersion: FormControl<number | null | undefined>,
	}
	export function CreateUpdateStreamResponseFormGroup() {
		return new FormGroup<UpdateStreamResponseFormProperties>({
			streamId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(128), Validators.pattern('[a-zA-Z0-9_-]+')]),
			streamArn: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(2028), Validators.pattern('[^\p{C}]+')]),
			streamVersion: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(65535)]),
		});

	}


	/** The output from the UpdateThing operation. */
	export interface UpdateThingResponse {
	}

	/** The output from the UpdateThing operation. */
	export interface UpdateThingResponseFormProperties {
	}
	export function CreateUpdateThingResponseFormGroup() {
		return new FormGroup<UpdateThingResponseFormProperties>({
		});

	}

	export interface UpdateThingGroupResponse {
		version?: number | null;
	}
	export interface UpdateThingGroupResponseFormProperties {
		version: FormControl<number | null | undefined>,
	}
	export function CreateUpdateThingGroupResponseFormGroup() {
		return new FormGroup<UpdateThingGroupResponseFormProperties>({
			version: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface UpdateThingGroupsForThingResponse {
	}
	export interface UpdateThingGroupsForThingResponseFormProperties {
	}
	export function CreateUpdateThingGroupsForThingResponseFormGroup() {
		return new FormGroup<UpdateThingGroupsForThingResponseFormProperties>({
		});

	}

	export interface UpdateTopicRuleDestinationResponse {
	}
	export interface UpdateTopicRuleDestinationResponseFormProperties {
	}
	export function CreateUpdateTopicRuleDestinationResponseFormGroup() {
		return new FormGroup<UpdateTopicRuleDestinationResponseFormProperties>({
		});

	}

	export interface ValidateSecurityProfileBehaviorsResponse {
		valid?: boolean | null;
		validationErrors?: Array<ValidationError>;
	}
	export interface ValidateSecurityProfileBehaviorsResponseFormProperties {
		valid: FormControl<boolean | null | undefined>,
	}
	export function CreateValidateSecurityProfileBehaviorsResponseFormGroup() {
		return new FormGroup<ValidateSecurityProfileBehaviorsResponseFormProperties>({
			valid: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Information about an error found in a behavior specification. */
	export interface ValidationError {

		/** Max length: 2048 */
		errorMessage?: string | null;
	}

	/** Information about an error found in a behavior specification. */
	export interface ValidationErrorFormProperties {

		/** Max length: 2048 */
		errorMessage: FormControl<string | null | undefined>,
	}
	export function CreateValidationErrorFormGroup() {
		return new FormGroup<ValidationErrorFormProperties>({
			errorMessage: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(2048)]),
		});

	}

	export enum AbortAction { CANCEL = 0 }

	export enum JobExecutionFailureType { FAILED = 0, REJECTED = 1, TIMED_OUT = 2, ALL = 3 }


	/** The input for the AcceptCertificateTransfer operation. */
	export interface AcceptCertificateTransferRequest {
	}

	/** The input for the AcceptCertificateTransfer operation. */
	export interface AcceptCertificateTransferRequestFormProperties {
	}
	export function CreateAcceptCertificateTransferRequestFormGroup() {
		return new FormGroup<AcceptCertificateTransferRequestFormProperties>({
		});

	}

	export enum ActionType { PUBLISH = 0, SUBSCRIBE = 1, RECEIVE = 2, CONNECT = 3 }

	export interface AddThingToBillingGroupRequest {

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		billingGroupName?: string | null;
		billingGroupArn?: string | null;

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		thingName?: string | null;
		thingArn?: string | null;
	}
	export interface AddThingToBillingGroupRequestFormProperties {

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		billingGroupName: FormControl<string | null | undefined>,
		billingGroupArn: FormControl<string | null | undefined>,

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		thingName: FormControl<string | null | undefined>,
		thingArn: FormControl<string | null | undefined>,
	}
	export function CreateAddThingToBillingGroupRequestFormGroup() {
		return new FormGroup<AddThingToBillingGroupRequestFormProperties>({
			billingGroupName: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(128), Validators.pattern('[a-zA-Z0-9:_-]+')]),
			billingGroupArn: new FormControl<string | null | undefined>(undefined),
			thingName: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(128), Validators.pattern('[a-zA-Z0-9:_-]+')]),
			thingArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface AddThingToThingGroupRequest {

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		thingGroupName?: string | null;
		thingGroupArn?: string | null;

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		thingName?: string | null;
		thingArn?: string | null;
		overrideDynamicGroups?: boolean | null;
	}
	export interface AddThingToThingGroupRequestFormProperties {

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		thingGroupName: FormControl<string | null | undefined>,
		thingGroupArn: FormControl<string | null | undefined>,

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		thingName: FormControl<string | null | undefined>,
		thingArn: FormControl<string | null | undefined>,
		overrideDynamicGroups: FormControl<boolean | null | undefined>,
	}
	export function CreateAddThingToThingGroupRequestFormGroup() {
		return new FormGroup<AddThingToThingGroupRequestFormProperties>({
			thingGroupName: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(128), Validators.pattern('[a-zA-Z0-9:_-]+')]),
			thingGroupArn: new FormControl<string | null | undefined>(undefined),
			thingName: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(128), Validators.pattern('[a-zA-Z0-9:_-]+')]),
			thingArn: new FormControl<string | null | undefined>(undefined),
			overrideDynamicGroups: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** The type of alert target: one of "SNS". */
	export enum AlertTargetType { SNS = 0 }

	export interface AssociateTargetsWithJobRequest {

		/**
		 * Required
		 * Minimum items: 1
		 */
		targets: Array<string>;

		/** Max length: 2028 */
		comment?: string | null;
	}
	export interface AssociateTargetsWithJobRequestFormProperties {

		/** Max length: 2028 */
		comment: FormControl<string | null | undefined>,
	}
	export function CreateAssociateTargetsWithJobRequestFormGroup() {
		return new FormGroup<AssociateTargetsWithJobRequestFormProperties>({
			comment: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(2028), Validators.pattern('[^\p{C}]+')]),
		});

	}

	export interface AttachPolicyRequest {

		/** Required */
		target: string;
	}
	export interface AttachPolicyRequestFormProperties {

		/** Required */
		target: FormControl<string | null | undefined>,
	}
	export function CreateAttachPolicyRequestFormGroup() {
		return new FormGroup<AttachPolicyRequestFormProperties>({
			target: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The input for the AttachPrincipalPolicy operation. */
	export interface AttachPrincipalPolicyRequest {
	}

	/** The input for the AttachPrincipalPolicy operation. */
	export interface AttachPrincipalPolicyRequestFormProperties {
	}
	export function CreateAttachPrincipalPolicyRequestFormGroup() {
		return new FormGroup<AttachPrincipalPolicyRequestFormProperties>({
		});

	}

	export interface AttachSecurityProfileRequest {
	}
	export interface AttachSecurityProfileRequestFormProperties {
	}
	export function CreateAttachSecurityProfileRequestFormGroup() {
		return new FormGroup<AttachSecurityProfileRequestFormProperties>({
		});

	}


	/** The input for the AttachThingPrincipal operation. */
	export interface AttachThingPrincipalRequest {
	}

	/** The input for the AttachThingPrincipal operation. */
	export interface AttachThingPrincipalRequestFormProperties {
	}
	export function CreateAttachThingPrincipalRequestFormGroup() {
		return new FormGroup<AttachThingPrincipalRequestFormProperties>({
		});

	}

	export enum AuditCheckRunStatus { IN_PROGRESS = 0, WAITING_FOR_DATA_COLLECTION = 1, CANCELED = 2, COMPLETED_COMPLIANT = 3, COMPLETED_NON_COMPLIANT = 4, FAILED = 5 }


	/** Information about the audit check. */
	export interface AuditCheckDetails {
		checkRunStatus?: AuditCheckRunStatus | null;
		checkCompliant?: boolean | null;
		totalResourcesCount?: number | null;
		nonCompliantResourcesCount?: number | null;
		errorCode?: string | null;

		/** Max length: 2048 */
		message?: string | null;
	}

	/** Information about the audit check. */
	export interface AuditCheckDetailsFormProperties {
		checkRunStatus: FormControl<AuditCheckRunStatus | null | undefined>,
		checkCompliant: FormControl<boolean | null | undefined>,
		totalResourcesCount: FormControl<number | null | undefined>,
		nonCompliantResourcesCount: FormControl<number | null | undefined>,
		errorCode: FormControl<string | null | undefined>,

		/** Max length: 2048 */
		message: FormControl<string | null | undefined>,
	}
	export function CreateAuditCheckDetailsFormGroup() {
		return new FormGroup<AuditCheckDetailsFormProperties>({
			checkRunStatus: new FormControl<AuditCheckRunStatus | null | undefined>(undefined),
			checkCompliant: new FormControl<boolean | null | undefined>(undefined),
			totalResourcesCount: new FormControl<number | null | undefined>(undefined),
			nonCompliantResourcesCount: new FormControl<number | null | undefined>(undefined),
			errorCode: new FormControl<string | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(2048)]),
		});

	}

	export enum AuditFrequency { DAILY = 0, WEEKLY = 1, BIWEEKLY = 2, MONTHLY = 3 }

	export enum AuditMitigationActionsExecutionStatus { IN_PROGRESS = 0, COMPLETED = 1, FAILED = 2, CANCELED = 3, SKIPPED = 4, PENDING = 5 }

	export enum AuditMitigationActionsTaskStatus { IN_PROGRESS = 0, COMPLETED = 1, FAILED = 2, CANCELED = 3 }


	/** Provides summary counts of how many tasks for findings are in a particular state. This information is included in the response from DescribeAuditMitigationActionsTask. */
	export interface TaskStatisticsForAuditCheck {
		totalFindingsCount?: number | null;
		failedFindingsCount?: number | null;
		succeededFindingsCount?: number | null;
		skippedFindingsCount?: number | null;
		canceledFindingsCount?: number | null;
	}

	/** Provides summary counts of how many tasks for findings are in a particular state. This information is included in the response from DescribeAuditMitigationActionsTask. */
	export interface TaskStatisticsForAuditCheckFormProperties {
		totalFindingsCount: FormControl<number | null | undefined>,
		failedFindingsCount: FormControl<number | null | undefined>,
		succeededFindingsCount: FormControl<number | null | undefined>,
		skippedFindingsCount: FormControl<number | null | undefined>,
		canceledFindingsCount: FormControl<number | null | undefined>,
	}
	export function CreateTaskStatisticsForAuditCheckFormGroup() {
		return new FormGroup<TaskStatisticsForAuditCheckFormProperties>({
			totalFindingsCount: new FormControl<number | null | undefined>(undefined),
			failedFindingsCount: new FormControl<number | null | undefined>(undefined),
			succeededFindingsCount: new FormControl<number | null | undefined>(undefined),
			skippedFindingsCount: new FormControl<number | null | undefined>(undefined),
			canceledFindingsCount: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum AuditNotificationType { SNS = 0 }

	export enum AuditTaskStatus { IN_PROGRESS = 0, COMPLETED = 1, FAILED = 2, CANCELED = 3 }

	export enum AuditTaskType { ON_DEMAND_AUDIT_TASK = 0, SCHEDULED_AUDIT_TASK = 1 }

	export enum AuthDecision { ALLOWED = 0, EXPLICIT_DENY = 1, IMPLICIT_DENY = 2 }

	export enum AuthorizerStatus { ACTIVE = 0, INACTIVE = 1 }

	export enum AutoRegistrationStatus { ENABLE = 0, DISABLE = 1 }

	export enum ComparisonOperator { 'less-than' = 0, 'less-than-equals' = 1, 'greater-than' = 2, 'greater-than-equals' = 3, 'in-cidr-set' = 4, 'not-in-cidr-set' = 5, 'in-port-set' = 6, 'not-in-port-set' = 7 }

	export enum CACertificateStatus { ACTIVE = 0, INACTIVE = 1 }

	export enum CACertificateUpdateAction { DEACTIVATE = 0 }

	export interface CancelAuditMitigationActionsTaskRequest {
	}
	export interface CancelAuditMitigationActionsTaskRequestFormProperties {
	}
	export function CreateCancelAuditMitigationActionsTaskRequestFormGroup() {
		return new FormGroup<CancelAuditMitigationActionsTaskRequestFormProperties>({
		});

	}

	export interface CancelAuditTaskRequest {
	}
	export interface CancelAuditTaskRequestFormProperties {
	}
	export function CreateCancelAuditTaskRequestFormGroup() {
		return new FormGroup<CancelAuditTaskRequestFormProperties>({
		});

	}


	/** The input for the CancelCertificateTransfer operation. */
	export interface CancelCertificateTransferRequest {
	}

	/** The input for the CancelCertificateTransfer operation. */
	export interface CancelCertificateTransferRequestFormProperties {
	}
	export function CreateCancelCertificateTransferRequestFormGroup() {
		return new FormGroup<CancelCertificateTransferRequestFormProperties>({
		});

	}

	export interface CancelJobExecutionRequest {
		expectedVersion?: number | null;
		statusDetails?: DetailsMap;
	}
	export interface CancelJobExecutionRequestFormProperties {
		expectedVersion: FormControl<number | null | undefined>,
	}
	export function CreateCancelJobExecutionRequestFormGroup() {
		return new FormGroup<CancelJobExecutionRequestFormProperties>({
			expectedVersion: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface CancelJobRequest {

		/** Max length: 128 */
		reasonCode?: string | null;

		/** Max length: 2028 */
		comment?: string | null;
	}
	export interface CancelJobRequestFormProperties {

		/** Max length: 128 */
		reasonCode: FormControl<string | null | undefined>,

		/** Max length: 2028 */
		comment: FormControl<string | null | undefined>,
	}
	export function CreateCancelJobRequestFormGroup() {
		return new FormGroup<CancelJobRequestFormProperties>({
			reasonCode: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(128), Validators.pattern('[\p{Upper}\p{Digit}_]+')]),
			comment: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(2028), Validators.pattern('[^\p{C}]+')]),
		});

	}

	export enum CannedAccessControlList { private = 0, 'public-read' = 1, 'public-read-write' = 2, 'aws-exec-read' = 3, 'authenticated-read' = 4, 'bucket-owner-read' = 5, 'bucket-owner-full-control' = 6, 'log-delivery-write' = 7 }

	export enum CertificateStatus { ACTIVE = 0, INACTIVE = 1, REVOKED = 2, PENDING_TRANSFER = 3, REGISTER_INACTIVE = 4, PENDING_ACTIVATION = 5 }

	export enum CertificateMode { DEFAULT = 0, SNI_ONLY = 1 }

	export interface ClearDefaultAuthorizerRequest {
	}
	export interface ClearDefaultAuthorizerRequestFormProperties {
	}
	export function CreateClearDefaultAuthorizerRequestFormGroup() {
		return new FormGroup<ClearDefaultAuthorizerRequestFormProperties>({
		});

	}

	export interface ConfirmTopicRuleDestinationRequest {
	}
	export interface ConfirmTopicRuleDestinationRequestFormProperties {
	}
	export function CreateConfirmTopicRuleDestinationRequestFormGroup() {
		return new FormGroup<ConfirmTopicRuleDestinationRequestFormProperties>({
		});

	}

	export interface CreateAuthorizerRequest {

		/** Required */
		authorizerFunctionArn: string;

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		tokenKeyName?: string | null;
		tokenSigningPublicKeys?: PublicKeyMap;
		status?: AuthorizerDescriptionStatus | null;
		tags?: Array<Tag>;
		signingDisabled?: boolean | null;
	}
	export interface CreateAuthorizerRequestFormProperties {

		/** Required */
		authorizerFunctionArn: FormControl<string | null | undefined>,

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		tokenKeyName: FormControl<string | null | undefined>,
		status: FormControl<AuthorizerDescriptionStatus | null | undefined>,
		signingDisabled: FormControl<boolean | null | undefined>,
	}
	export function CreateCreateAuthorizerRequestFormGroup() {
		return new FormGroup<CreateAuthorizerRequestFormProperties>({
			authorizerFunctionArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			tokenKeyName: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(128), Validators.pattern('[a-zA-Z0-9_-]+')]),
			status: new FormControl<AuthorizerDescriptionStatus | null | undefined>(undefined),
			signingDisabled: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface CreateBillingGroupRequest {

		/** The properties of a billing group. */
		billingGroupProperties?: BillingGroupProperties;
		tags?: Array<Tag>;
	}
	export interface CreateBillingGroupRequestFormProperties {
	}
	export function CreateCreateBillingGroupRequestFormGroup() {
		return new FormGroup<CreateBillingGroupRequestFormProperties>({
		});

	}


	/** The input for the CreateCertificateFromCsr operation. */
	export interface CreateCertificateFromCsrRequest {

		/**
		 * Required
		 * Min length: 1
		 */
		certificateSigningRequest: string;
	}

	/** The input for the CreateCertificateFromCsr operation. */
	export interface CreateCertificateFromCsrRequestFormProperties {

		/**
		 * Required
		 * Min length: 1
		 */
		certificateSigningRequest: FormControl<string | null | undefined>,
	}
	export function CreateCreateCertificateFromCsrRequestFormGroup() {
		return new FormGroup<CreateCertificateFromCsrRequestFormProperties>({
			certificateSigningRequest: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1)]),
		});

	}

	export enum DimensionType { TOPIC_FILTER = 0 }

	export interface CreateDimensionRequest {

		/** Required */
		type: DescribeDimensionResponseType;

		/**
		 * Required
		 * Minimum items: 1
		 * Maximum items: 100
		 */
		stringValues: Array<string>;
		tags?: Array<Tag>;

		/**
		 * Required
		 * Max length: 64
		 * Min length: 1
		 */
		clientRequestToken: string;
	}
	export interface CreateDimensionRequestFormProperties {

		/** Required */
		type: FormControl<DescribeDimensionResponseType | null | undefined>,

		/**
		 * Required
		 * Max length: 64
		 * Min length: 1
		 */
		clientRequestToken: FormControl<string | null | undefined>,
	}
	export function CreateCreateDimensionRequestFormGroup() {
		return new FormGroup<CreateDimensionRequestFormProperties>({
			type: new FormControl<DescribeDimensionResponseType | null | undefined>(undefined, [Validators.required]),
			clientRequestToken: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(64), Validators.pattern('^[a-zA-Z0-9-_]+$')]),
		});

	}

	export enum ServiceType { DATA = 0, CREDENTIAL_PROVIDER = 1, JOBS = 2 }

	export interface CreateDomainConfigurationRequest {

		/**
		 * Max length: 253
		 * Min length: 1
		 */
		domainName?: string | null;

		/**
		 * Minimum items: 0
		 * Maximum items: 1
		 */
		serverCertificateArns?: Array<string>;

		/**
		 * Max length: 2048
		 * Min length: 1
		 */
		validationCertificateArn?: string | null;

		/** An object that specifies the authorization service for a domain. */
		authorizerConfig?: AuthorizerConfig;
		serviceType?: DescribeDomainConfigurationResponseServiceType | null;
		tags?: Array<Tag>;
	}
	export interface CreateDomainConfigurationRequestFormProperties {

		/**
		 * Max length: 253
		 * Min length: 1
		 */
		domainName: FormControl<string | null | undefined>,

		/**
		 * Max length: 2048
		 * Min length: 1
		 */
		validationCertificateArn: FormControl<string | null | undefined>,
		serviceType: FormControl<DescribeDomainConfigurationResponseServiceType | null | undefined>,
	}
	export function CreateCreateDomainConfigurationRequestFormGroup() {
		return new FormGroup<CreateDomainConfigurationRequestFormProperties>({
			domainName: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(253)]),
			validationCertificateArn: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(2048), Validators.pattern('arn:aws:acm:[a-z]{2}-(gov-)?[a-z]{4,9}-\d{1}:\d{12}:certificate/?[a-zA-Z0-9/-]+')]),
			serviceType: new FormControl<DescribeDomainConfigurationResponseServiceType | null | undefined>(undefined),
		});

	}

	export interface CreateDynamicThingGroupRequest {

		/** Thing group properties. */
		thingGroupProperties?: ThingGroupProperties;

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		indexName?: string | null;

		/**
		 * Required
		 * Min length: 1
		 */
		queryString: string;
		queryVersion?: string | null;
		tags?: Array<Tag>;
	}
	export interface CreateDynamicThingGroupRequestFormProperties {

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		indexName: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Min length: 1
		 */
		queryString: FormControl<string | null | undefined>,
		queryVersion: FormControl<string | null | undefined>,
	}
	export function CreateCreateDynamicThingGroupRequestFormGroup() {
		return new FormGroup<CreateDynamicThingGroupRequestFormProperties>({
			indexName: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(128), Validators.pattern('[a-zA-Z0-9:_-]+')]),
			queryString: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1)]),
			queryVersion: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum TargetSelection { CONTINUOUS = 0, SNAPSHOT = 1 }

	export interface CreateJobRequest {

		/**
		 * Required
		 * Minimum items: 1
		 */
		targets: Array<string>;

		/**
		 * Max length: 1350
		 * Min length: 1
		 */
		documentSource?: string | null;

		/** Max length: 32768 */
		document?: string | null;

		/** Max length: 2028 */
		description?: string | null;

		/** Configuration for pre-signed S3 URLs. */
		presignedUrlConfig?: PresignedUrlConfig;
		targetSelection?: JobTargetSelection | null;

		/** Allows you to create a staged rollout of a job. */
		jobExecutionsRolloutConfig?: JobExecutionsRolloutConfig;

		/** Details of abort criteria to abort the job. */
		abortConfig?: AbortConfig;

		/** Specifies the amount of time each device has to finish its execution of the job. A timer is started when the job execution status is set to <code>IN_PROGRESS</code>. If the job execution status is not set to another terminal state before the timer expires, it will be automatically set to <code>TIMED_OUT</code>. */
		timeoutConfig?: TimeoutConfig;
		tags?: Array<Tag>;
	}
	export interface CreateJobRequestFormProperties {

		/**
		 * Max length: 1350
		 * Min length: 1
		 */
		documentSource: FormControl<string | null | undefined>,

		/** Max length: 32768 */
		document: FormControl<string | null | undefined>,

		/** Max length: 2028 */
		description: FormControl<string | null | undefined>,
		targetSelection: FormControl<JobTargetSelection | null | undefined>,
	}
	export function CreateCreateJobRequestFormGroup() {
		return new FormGroup<CreateJobRequestFormProperties>({
			documentSource: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(1350)]),
			document: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(32768)]),
			description: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(2028), Validators.pattern('[^\p{C}]+')]),
			targetSelection: new FormControl<JobTargetSelection | null | undefined>(undefined),
		});

	}


	/** The input for the CreateKeysAndCertificate operation. */
	export interface CreateKeysAndCertificateRequest {
	}

	/** The input for the CreateKeysAndCertificate operation. */
	export interface CreateKeysAndCertificateRequestFormProperties {
	}
	export function CreateCreateKeysAndCertificateRequestFormGroup() {
		return new FormGroup<CreateKeysAndCertificateRequestFormProperties>({
		});

	}

	export interface CreateMitigationActionRequest {

		/**
		 * Required
		 * Max length: 2048
		 * Min length: 20
		 */
		roleArn: string;

		/**
		 * The set of parameters for this mitigation action. You can specify only one type of parameter (in other words, you can apply only one action for each defined mitigation action).
		 * Required
		 */
		actionParams: MitigationActionParams;
		tags?: Array<Tag>;
	}
	export interface CreateMitigationActionRequestFormProperties {

		/**
		 * Required
		 * Max length: 2048
		 * Min length: 20
		 */
		roleArn: FormControl<string | null | undefined>,
	}
	export function CreateCreateMitigationActionRequestFormGroup() {
		return new FormGroup<CreateMitigationActionRequestFormProperties>({
			roleArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(20), Validators.maxLength(2048)]),
		});

	}

	export interface CreateOTAUpdateRequest {

		/** Max length: 2028 */
		description?: string | null;

		/**
		 * Required
		 * Minimum items: 1
		 */
		targets: Array<string>;

		/**
		 * Minimum items: 1
		 * Maximum items: 2
		 */
		protocols?: Array<Protocol>;
		targetSelection?: JobTargetSelection | null;

		/** Configuration for the rollout of OTA updates. */
		awsJobExecutionsRolloutConfig?: AwsJobExecutionsRolloutConfig;

		/** Configuration information for pre-signed URLs. Valid when <code>protocols</code> contains HTTP. */
		awsJobPresignedUrlConfig?: AwsJobPresignedUrlConfig;

		/**
		 * Required
		 * Minimum items: 1
		 * Maximum items: 50
		 */
		files: Array<OTAUpdateFile>;

		/**
		 * Required
		 * Max length: 2048
		 * Min length: 20
		 */
		roleArn: string;
		additionalParameters?: AdditionalParameterMap;
		tags?: Array<Tag>;
	}
	export interface CreateOTAUpdateRequestFormProperties {

		/** Max length: 2028 */
		description: FormControl<string | null | undefined>,
		targetSelection: FormControl<JobTargetSelection | null | undefined>,

		/**
		 * Required
		 * Max length: 2048
		 * Min length: 20
		 */
		roleArn: FormControl<string | null | undefined>,
	}
	export function CreateCreateOTAUpdateRequestFormGroup() {
		return new FormGroup<CreateOTAUpdateRequestFormProperties>({
			description: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(2028), Validators.pattern('[^\p{C}]+')]),
			targetSelection: new FormControl<JobTargetSelection | null | undefined>(undefined),
			roleArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(20), Validators.maxLength(2048)]),
		});

	}

	export enum OTAUpdateStatus { CREATE_PENDING = 0, CREATE_IN_PROGRESS = 1, CREATE_COMPLETE = 2, CREATE_FAILED = 3 }


	/** The input for the CreatePolicy operation. */
	export interface CreatePolicyRequest {

		/** Required */
		policyDocument: string;
		tags?: Array<Tag>;
	}

	/** The input for the CreatePolicy operation. */
	export interface CreatePolicyRequestFormProperties {

		/** Required */
		policyDocument: FormControl<string | null | undefined>,
	}
	export function CreateCreatePolicyRequestFormGroup() {
		return new FormGroup<CreatePolicyRequestFormProperties>({
			policyDocument: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The input for the CreatePolicyVersion operation. */
	export interface CreatePolicyVersionRequest {

		/** Required */
		policyDocument: string;
	}

	/** The input for the CreatePolicyVersion operation. */
	export interface CreatePolicyVersionRequestFormProperties {

		/** Required */
		policyDocument: FormControl<string | null | undefined>,
	}
	export function CreateCreatePolicyVersionRequestFormGroup() {
		return new FormGroup<CreatePolicyVersionRequestFormProperties>({
			policyDocument: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateProvisioningClaimRequest {
	}
	export interface CreateProvisioningClaimRequestFormProperties {
	}
	export function CreateCreateProvisioningClaimRequestFormGroup() {
		return new FormGroup<CreateProvisioningClaimRequestFormProperties>({
		});

	}

	export interface CreateProvisioningTemplateRequest {

		/**
		 * Required
		 * Max length: 36
		 * Min length: 1
		 */
		templateName: string;

		/**
		 * Max length: 500
		 * Min length: 0
		 */
		description?: string | null;

		/** Required */
		templateBody: string;
		enabled?: boolean | null;

		/**
		 * Required
		 * Max length: 2048
		 * Min length: 20
		 */
		provisioningRoleArn: string;

		/** Structure that contains <code>payloadVersion</code> and <code>targetArn</code>. */
		preProvisioningHook?: ProvisioningHook;
		tags?: Array<Tag>;
	}
	export interface CreateProvisioningTemplateRequestFormProperties {

		/**
		 * Required
		 * Max length: 36
		 * Min length: 1
		 */
		templateName: FormControl<string | null | undefined>,

		/**
		 * Max length: 500
		 * Min length: 0
		 */
		description: FormControl<string | null | undefined>,

		/** Required */
		templateBody: FormControl<string | null | undefined>,
		enabled: FormControl<boolean | null | undefined>,

		/**
		 * Required
		 * Max length: 2048
		 * Min length: 20
		 */
		provisioningRoleArn: FormControl<string | null | undefined>,
	}
	export function CreateCreateProvisioningTemplateRequestFormGroup() {
		return new FormGroup<CreateProvisioningTemplateRequestFormProperties>({
			templateName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(36), Validators.pattern('^[0-9A-Za-z_-]+$')]),
			description: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(500), Validators.pattern('[^\p{C}]*')]),
			templateBody: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			enabled: new FormControl<boolean | null | undefined>(undefined),
			provisioningRoleArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(20), Validators.maxLength(2048)]),
		});

	}

	export interface CreateProvisioningTemplateVersionRequest {

		/** Required */
		templateBody: string;
	}
	export interface CreateProvisioningTemplateVersionRequestFormProperties {

		/** Required */
		templateBody: FormControl<string | null | undefined>,
	}
	export function CreateCreateProvisioningTemplateVersionRequestFormGroup() {
		return new FormGroup<CreateProvisioningTemplateVersionRequestFormProperties>({
			templateBody: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateRoleAliasRequest {

		/**
		 * Required
		 * Max length: 2048
		 * Min length: 20
		 */
		roleArn: string;

		/**
		 * Minimum: 900
		 * Maximum: 3600
		 */
		credentialDurationSeconds?: number | null;
		tags?: Array<Tag>;
	}
	export interface CreateRoleAliasRequestFormProperties {

		/**
		 * Required
		 * Max length: 2048
		 * Min length: 20
		 */
		roleArn: FormControl<string | null | undefined>,

		/**
		 * Minimum: 900
		 * Maximum: 3600
		 */
		credentialDurationSeconds: FormControl<number | null | undefined>,
	}
	export function CreateCreateRoleAliasRequestFormGroup() {
		return new FormGroup<CreateRoleAliasRequestFormProperties>({
			roleArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(20), Validators.maxLength(2048)]),
			credentialDurationSeconds: new FormControl<number | null | undefined>(undefined, [Validators.min(900), Validators.max(3600)]),
		});

	}

	export enum DayOfWeek { SUN = 0, MON = 1, TUE = 2, WED = 3, THU = 4, FRI = 5, SAT = 6 }

	export interface CreateScheduledAuditRequest {

		/** Required */
		frequency: DescribeScheduledAuditResponseFrequency;
		dayOfMonth?: string | null;
		dayOfWeek?: DescribeScheduledAuditResponseDayOfWeek | null;

		/** Required */
		targetCheckNames: Array<string>;
		tags?: Array<Tag>;
	}
	export interface CreateScheduledAuditRequestFormProperties {

		/** Required */
		frequency: FormControl<DescribeScheduledAuditResponseFrequency | null | undefined>,
		dayOfMonth: FormControl<string | null | undefined>,
		dayOfWeek: FormControl<DescribeScheduledAuditResponseDayOfWeek | null | undefined>,
	}
	export function CreateCreateScheduledAuditRequestFormGroup() {
		return new FormGroup<CreateScheduledAuditRequestFormProperties>({
			frequency: new FormControl<DescribeScheduledAuditResponseFrequency | null | undefined>(undefined, [Validators.required]),
			dayOfMonth: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^([1-9]|[12][0-9]|3[01])$|^LAST$')]),
			dayOfWeek: new FormControl<DescribeScheduledAuditResponseDayOfWeek | null | undefined>(undefined),
		});

	}

	export interface CreateSecurityProfileRequest {

		/** Max length: 1000 */
		securityProfileDescription?: string | null;

		/** Maximum items: 100 */
		behaviors?: Array<Behavior>;
		alertTargets?: AlertTargets;
		additionalMetricsToRetain?: Array<string>;
		additionalMetricsToRetainV2?: Array<MetricToRetain>;
		tags?: Array<Tag>;
	}
	export interface CreateSecurityProfileRequestFormProperties {

		/** Max length: 1000 */
		securityProfileDescription: FormControl<string | null | undefined>,
	}
	export function CreateCreateSecurityProfileRequestFormGroup() {
		return new FormGroup<CreateSecurityProfileRequestFormProperties>({
			securityProfileDescription: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(1000), Validators.pattern('[\p{Graph}\x20]*')]),
		});

	}

	export interface CreateStreamRequest {

		/** Max length: 2028 */
		description?: string | null;

		/**
		 * Required
		 * Minimum items: 1
		 * Maximum items: 50
		 */
		files: Array<StreamFile>;

		/**
		 * Required
		 * Max length: 2048
		 * Min length: 20
		 */
		roleArn: string;
		tags?: Array<Tag>;
	}
	export interface CreateStreamRequestFormProperties {

		/** Max length: 2028 */
		description: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 2048
		 * Min length: 20
		 */
		roleArn: FormControl<string | null | undefined>,
	}
	export function CreateCreateStreamRequestFormGroup() {
		return new FormGroup<CreateStreamRequestFormProperties>({
			description: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(2028), Validators.pattern('[^\p{C}]+')]),
			roleArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(20), Validators.maxLength(2048)]),
		});

	}

	export interface CreateThingGroupRequest {

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		parentGroupName?: string | null;

		/** Thing group properties. */
		thingGroupProperties?: ThingGroupProperties;
		tags?: Array<Tag>;
	}
	export interface CreateThingGroupRequestFormProperties {

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		parentGroupName: FormControl<string | null | undefined>,
	}
	export function CreateCreateThingGroupRequestFormGroup() {
		return new FormGroup<CreateThingGroupRequestFormProperties>({
			parentGroupName: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(128), Validators.pattern('[a-zA-Z0-9:_-]+')]),
		});

	}


	/** The input for the CreateThing operation. */
	export interface CreateThingRequest {

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		thingTypeName?: string | null;

		/** The attribute payload. */
		attributePayload?: AttributePayload;

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		billingGroupName?: string | null;
	}

	/** The input for the CreateThing operation. */
	export interface CreateThingRequestFormProperties {

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		thingTypeName: FormControl<string | null | undefined>,

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		billingGroupName: FormControl<string | null | undefined>,
	}
	export function CreateCreateThingRequestFormGroup() {
		return new FormGroup<CreateThingRequestFormProperties>({
			thingTypeName: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(128), Validators.pattern('[a-zA-Z0-9:_-]+')]),
			billingGroupName: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(128), Validators.pattern('[a-zA-Z0-9:_-]+')]),
		});

	}


	/** The input for the CreateThingType operation. */
	export interface CreateThingTypeRequest {

		/** The ThingTypeProperties contains information about the thing type including: a thing type description, and a list of searchable thing attribute names. */
		thingTypeProperties?: ThingTypeProperties;
		tags?: Array<Tag>;
	}

	/** The input for the CreateThingType operation. */
	export interface CreateThingTypeRequestFormProperties {
	}
	export function CreateCreateThingTypeRequestFormGroup() {
		return new FormGroup<CreateThingTypeRequestFormProperties>({
		});

	}


	/** Configuration of the topic rule destination. */
	export interface TopicRuleDestinationConfiguration {

		/** HTTP URL destination configuration used by the topic rule's HTTP action. */
		httpUrlConfiguration?: HttpUrlDestinationConfiguration;
	}

	/** Configuration of the topic rule destination. */
	export interface TopicRuleDestinationConfigurationFormProperties {
	}
	export function CreateTopicRuleDestinationConfigurationFormGroup() {
		return new FormGroup<TopicRuleDestinationConfigurationFormProperties>({
		});

	}

	export interface CreateTopicRuleDestinationRequest {

		/**
		 * Configuration of the topic rule destination.
		 * Required
		 */
		destinationConfiguration: TopicRuleDestinationConfiguration;
	}
	export interface CreateTopicRuleDestinationRequestFormProperties {
	}
	export function CreateCreateTopicRuleDestinationRequestFormGroup() {
		return new FormGroup<CreateTopicRuleDestinationRequestFormProperties>({
		});

	}


	/** Describes a rule. */
	export interface TopicRulePayload {

		/** Required */
		sql: string;
		description?: string | null;

		/**
		 * Required
		 * Minimum items: 0
		 * Maximum items: 10
		 */
		actions: Array<Action>;
		ruleDisabled?: boolean | null;
		awsIotSqlVersion?: string | null;

		/** Describes the actions associated with a rule. */
		errorAction?: Action;
	}

	/** Describes a rule. */
	export interface TopicRulePayloadFormProperties {

		/** Required */
		sql: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,
		ruleDisabled: FormControl<boolean | null | undefined>,
		awsIotSqlVersion: FormControl<string | null | undefined>,
	}
	export function CreateTopicRulePayloadFormGroup() {
		return new FormGroup<TopicRulePayloadFormProperties>({
			sql: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			description: new FormControl<string | null | undefined>(undefined),
			ruleDisabled: new FormControl<boolean | null | undefined>(undefined),
			awsIotSqlVersion: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The input for the CreateTopicRule operation. */
	export interface CreateTopicRuleRequest {

		/**
		 * Describes a rule.
		 * Required
		 */
		topicRulePayload: TopicRulePayload;
	}

	/** The input for the CreateTopicRule operation. */
	export interface CreateTopicRuleRequestFormProperties {
	}
	export function CreateCreateTopicRuleRequestFormGroup() {
		return new FormGroup<CreateTopicRuleRequestFormProperties>({
		});

	}

	export interface DeleteAccountAuditConfigurationRequest {
	}
	export interface DeleteAccountAuditConfigurationRequestFormProperties {
	}
	export function CreateDeleteAccountAuditConfigurationRequestFormGroup() {
		return new FormGroup<DeleteAccountAuditConfigurationRequestFormProperties>({
		});

	}

	export interface DeleteAuthorizerRequest {
	}
	export interface DeleteAuthorizerRequestFormProperties {
	}
	export function CreateDeleteAuthorizerRequestFormGroup() {
		return new FormGroup<DeleteAuthorizerRequestFormProperties>({
		});

	}

	export interface DeleteBillingGroupRequest {
	}
	export interface DeleteBillingGroupRequestFormProperties {
	}
	export function CreateDeleteBillingGroupRequestFormGroup() {
		return new FormGroup<DeleteBillingGroupRequestFormProperties>({
		});

	}


	/** Input for the DeleteCACertificate operation. */
	export interface DeleteCACertificateRequest {
	}

	/** Input for the DeleteCACertificate operation. */
	export interface DeleteCACertificateRequestFormProperties {
	}
	export function CreateDeleteCACertificateRequestFormGroup() {
		return new FormGroup<DeleteCACertificateRequestFormProperties>({
		});

	}


	/** The input for the DeleteCertificate operation. */
	export interface DeleteCertificateRequest {
	}

	/** The input for the DeleteCertificate operation. */
	export interface DeleteCertificateRequestFormProperties {
	}
	export function CreateDeleteCertificateRequestFormGroup() {
		return new FormGroup<DeleteCertificateRequestFormProperties>({
		});

	}

	export interface DeleteDimensionRequest {
	}
	export interface DeleteDimensionRequestFormProperties {
	}
	export function CreateDeleteDimensionRequestFormGroup() {
		return new FormGroup<DeleteDimensionRequestFormProperties>({
		});

	}

	export interface DeleteDomainConfigurationRequest {
	}
	export interface DeleteDomainConfigurationRequestFormProperties {
	}
	export function CreateDeleteDomainConfigurationRequestFormGroup() {
		return new FormGroup<DeleteDomainConfigurationRequestFormProperties>({
		});

	}

	export interface DeleteDynamicThingGroupRequest {
	}
	export interface DeleteDynamicThingGroupRequestFormProperties {
	}
	export function CreateDeleteDynamicThingGroupRequestFormGroup() {
		return new FormGroup<DeleteDynamicThingGroupRequestFormProperties>({
		});

	}

	export interface DeleteJobExecutionRequest {
	}
	export interface DeleteJobExecutionRequestFormProperties {
	}
	export function CreateDeleteJobExecutionRequestFormGroup() {
		return new FormGroup<DeleteJobExecutionRequestFormProperties>({
		});

	}

	export interface DeleteJobRequest {
	}
	export interface DeleteJobRequestFormProperties {
	}
	export function CreateDeleteJobRequestFormGroup() {
		return new FormGroup<DeleteJobRequestFormProperties>({
		});

	}

	export interface DeleteMitigationActionRequest {
	}
	export interface DeleteMitigationActionRequestFormProperties {
	}
	export function CreateDeleteMitigationActionRequestFormGroup() {
		return new FormGroup<DeleteMitigationActionRequestFormProperties>({
		});

	}

	export interface DeleteOTAUpdateRequest {
	}
	export interface DeleteOTAUpdateRequestFormProperties {
	}
	export function CreateDeleteOTAUpdateRequestFormGroup() {
		return new FormGroup<DeleteOTAUpdateRequestFormProperties>({
		});

	}


	/** The input for the DeletePolicy operation. */
	export interface DeletePolicyRequest {
	}

	/** The input for the DeletePolicy operation. */
	export interface DeletePolicyRequestFormProperties {
	}
	export function CreateDeletePolicyRequestFormGroup() {
		return new FormGroup<DeletePolicyRequestFormProperties>({
		});

	}


	/** The input for the DeletePolicyVersion operation. */
	export interface DeletePolicyVersionRequest {
	}

	/** The input for the DeletePolicyVersion operation. */
	export interface DeletePolicyVersionRequestFormProperties {
	}
	export function CreateDeletePolicyVersionRequestFormGroup() {
		return new FormGroup<DeletePolicyVersionRequestFormProperties>({
		});

	}

	export interface DeleteProvisioningTemplateRequest {
	}
	export interface DeleteProvisioningTemplateRequestFormProperties {
	}
	export function CreateDeleteProvisioningTemplateRequestFormGroup() {
		return new FormGroup<DeleteProvisioningTemplateRequestFormProperties>({
		});

	}

	export interface DeleteProvisioningTemplateVersionRequest {
	}
	export interface DeleteProvisioningTemplateVersionRequestFormProperties {
	}
	export function CreateDeleteProvisioningTemplateVersionRequestFormGroup() {
		return new FormGroup<DeleteProvisioningTemplateVersionRequestFormProperties>({
		});

	}


	/** The input for the DeleteRegistrationCode operation. */
	export interface DeleteRegistrationCodeRequest {
	}

	/** The input for the DeleteRegistrationCode operation. */
	export interface DeleteRegistrationCodeRequestFormProperties {
	}
	export function CreateDeleteRegistrationCodeRequestFormGroup() {
		return new FormGroup<DeleteRegistrationCodeRequestFormProperties>({
		});

	}

	export interface DeleteRoleAliasRequest {
	}
	export interface DeleteRoleAliasRequestFormProperties {
	}
	export function CreateDeleteRoleAliasRequestFormGroup() {
		return new FormGroup<DeleteRoleAliasRequestFormProperties>({
		});

	}

	export interface DeleteScheduledAuditRequest {
	}
	export interface DeleteScheduledAuditRequestFormProperties {
	}
	export function CreateDeleteScheduledAuditRequestFormGroup() {
		return new FormGroup<DeleteScheduledAuditRequestFormProperties>({
		});

	}

	export interface DeleteSecurityProfileRequest {
	}
	export interface DeleteSecurityProfileRequestFormProperties {
	}
	export function CreateDeleteSecurityProfileRequestFormGroup() {
		return new FormGroup<DeleteSecurityProfileRequestFormProperties>({
		});

	}

	export interface DeleteStreamRequest {
	}
	export interface DeleteStreamRequestFormProperties {
	}
	export function CreateDeleteStreamRequestFormGroup() {
		return new FormGroup<DeleteStreamRequestFormProperties>({
		});

	}

	export interface DeleteThingGroupRequest {
	}
	export interface DeleteThingGroupRequestFormProperties {
	}
	export function CreateDeleteThingGroupRequestFormGroup() {
		return new FormGroup<DeleteThingGroupRequestFormProperties>({
		});

	}


	/** The input for the DeleteThing operation. */
	export interface DeleteThingRequest {
	}

	/** The input for the DeleteThing operation. */
	export interface DeleteThingRequestFormProperties {
	}
	export function CreateDeleteThingRequestFormGroup() {
		return new FormGroup<DeleteThingRequestFormProperties>({
		});

	}


	/** The input for the DeleteThingType operation. */
	export interface DeleteThingTypeRequest {
	}

	/** The input for the DeleteThingType operation. */
	export interface DeleteThingTypeRequestFormProperties {
	}
	export function CreateDeleteThingTypeRequestFormGroup() {
		return new FormGroup<DeleteThingTypeRequestFormProperties>({
		});

	}

	export interface DeleteTopicRuleDestinationRequest {
	}
	export interface DeleteTopicRuleDestinationRequestFormProperties {
	}
	export function CreateDeleteTopicRuleDestinationRequestFormGroup() {
		return new FormGroup<DeleteTopicRuleDestinationRequestFormProperties>({
		});

	}


	/** The input for the DeleteTopicRule operation. */
	export interface DeleteTopicRuleRequest {
	}

	/** The input for the DeleteTopicRule operation. */
	export interface DeleteTopicRuleRequestFormProperties {
	}
	export function CreateDeleteTopicRuleRequestFormGroup() {
		return new FormGroup<DeleteTopicRuleRequestFormProperties>({
		});

	}

	export interface DeleteV2LoggingLevelRequest {
	}
	export interface DeleteV2LoggingLevelRequestFormProperties {
	}
	export function CreateDeleteV2LoggingLevelRequestFormGroup() {
		return new FormGroup<DeleteV2LoggingLevelRequestFormProperties>({
		});

	}


	/** The input for the DeprecateThingType operation. */
	export interface DeprecateThingTypeRequest {
		undoDeprecate?: boolean | null;
	}

	/** The input for the DeprecateThingType operation. */
	export interface DeprecateThingTypeRequestFormProperties {
		undoDeprecate: FormControl<boolean | null | undefined>,
	}
	export function CreateDeprecateThingTypeRequestFormGroup() {
		return new FormGroup<DeprecateThingTypeRequestFormProperties>({
			undoDeprecate: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface DescribeAccountAuditConfigurationRequest {
	}
	export interface DescribeAccountAuditConfigurationRequestFormProperties {
	}
	export function CreateDescribeAccountAuditConfigurationRequestFormGroup() {
		return new FormGroup<DescribeAccountAuditConfigurationRequestFormProperties>({
		});

	}

	export interface DescribeAuditFindingRequest {
	}
	export interface DescribeAuditFindingRequestFormProperties {
	}
	export function CreateDescribeAuditFindingRequestFormGroup() {
		return new FormGroup<DescribeAuditFindingRequestFormProperties>({
		});

	}

	export interface DescribeAuditMitigationActionsTaskRequest {
	}
	export interface DescribeAuditMitigationActionsTaskRequestFormProperties {
	}
	export function CreateDescribeAuditMitigationActionsTaskRequestFormGroup() {
		return new FormGroup<DescribeAuditMitigationActionsTaskRequestFormProperties>({
		});

	}

	export interface DescribeAuditTaskRequest {
	}
	export interface DescribeAuditTaskRequestFormProperties {
	}
	export function CreateDescribeAuditTaskRequestFormGroup() {
		return new FormGroup<DescribeAuditTaskRequestFormProperties>({
		});

	}

	export interface DescribeAuthorizerRequest {
	}
	export interface DescribeAuthorizerRequestFormProperties {
	}
	export function CreateDescribeAuthorizerRequestFormGroup() {
		return new FormGroup<DescribeAuthorizerRequestFormProperties>({
		});

	}

	export interface DescribeBillingGroupRequest {
	}
	export interface DescribeBillingGroupRequestFormProperties {
	}
	export function CreateDescribeBillingGroupRequestFormGroup() {
		return new FormGroup<DescribeBillingGroupRequestFormProperties>({
		});

	}


	/** The input for the DescribeCACertificate operation. */
	export interface DescribeCACertificateRequest {
	}

	/** The input for the DescribeCACertificate operation. */
	export interface DescribeCACertificateRequestFormProperties {
	}
	export function CreateDescribeCACertificateRequestFormGroup() {
		return new FormGroup<DescribeCACertificateRequestFormProperties>({
		});

	}


	/** The input for the DescribeCertificate operation. */
	export interface DescribeCertificateRequest {
	}

	/** The input for the DescribeCertificate operation. */
	export interface DescribeCertificateRequestFormProperties {
	}
	export function CreateDescribeCertificateRequestFormGroup() {
		return new FormGroup<DescribeCertificateRequestFormProperties>({
		});

	}

	export interface DescribeDefaultAuthorizerRequest {
	}
	export interface DescribeDefaultAuthorizerRequestFormProperties {
	}
	export function CreateDescribeDefaultAuthorizerRequestFormGroup() {
		return new FormGroup<DescribeDefaultAuthorizerRequestFormProperties>({
		});

	}

	export interface DescribeDimensionRequest {
	}
	export interface DescribeDimensionRequestFormProperties {
	}
	export function CreateDescribeDimensionRequestFormGroup() {
		return new FormGroup<DescribeDimensionRequestFormProperties>({
		});

	}

	export interface DescribeDomainConfigurationRequest {
	}
	export interface DescribeDomainConfigurationRequestFormProperties {
	}
	export function CreateDescribeDomainConfigurationRequestFormGroup() {
		return new FormGroup<DescribeDomainConfigurationRequestFormProperties>({
		});

	}

	export enum DomainConfigurationStatus { ENABLED = 0, DISABLED = 1 }

	export enum DomainType { ENDPOINT = 0, AWS_MANAGED = 1, CUSTOMER_MANAGED = 2 }


	/** The input for the DescribeEndpoint operation. */
	export interface DescribeEndpointRequest {
	}

	/** The input for the DescribeEndpoint operation. */
	export interface DescribeEndpointRequestFormProperties {
	}
	export function CreateDescribeEndpointRequestFormGroup() {
		return new FormGroup<DescribeEndpointRequestFormProperties>({
		});

	}

	export interface DescribeEventConfigurationsRequest {
	}
	export interface DescribeEventConfigurationsRequestFormProperties {
	}
	export function CreateDescribeEventConfigurationsRequestFormGroup() {
		return new FormGroup<DescribeEventConfigurationsRequestFormProperties>({
		});

	}

	export interface DescribeIndexRequest {
	}
	export interface DescribeIndexRequestFormProperties {
	}
	export function CreateDescribeIndexRequestFormGroup() {
		return new FormGroup<DescribeIndexRequestFormProperties>({
		});

	}

	export enum IndexStatus { ACTIVE = 0, BUILDING = 1, REBUILDING = 2 }

	export interface DescribeJobExecutionRequest {
	}
	export interface DescribeJobExecutionRequestFormProperties {
	}
	export function CreateDescribeJobExecutionRequestFormGroup() {
		return new FormGroup<DescribeJobExecutionRequestFormProperties>({
		});

	}

	export interface DescribeJobRequest {
	}
	export interface DescribeJobRequestFormProperties {
	}
	export function CreateDescribeJobRequestFormGroup() {
		return new FormGroup<DescribeJobRequestFormProperties>({
		});

	}

	export interface DescribeMitigationActionRequest {
	}
	export interface DescribeMitigationActionRequestFormProperties {
	}
	export function CreateDescribeMitigationActionRequestFormGroup() {
		return new FormGroup<DescribeMitigationActionRequestFormProperties>({
		});

	}

	export enum MitigationActionType { UPDATE_DEVICE_CERTIFICATE = 0, UPDATE_CA_CERTIFICATE = 1, ADD_THINGS_TO_THING_GROUP = 2, REPLACE_DEFAULT_POLICY_VERSION = 3, ENABLE_IOT_LOGGING = 4, PUBLISH_FINDING_TO_SNS = 5 }

	export interface DescribeProvisioningTemplateRequest {
	}
	export interface DescribeProvisioningTemplateRequestFormProperties {
	}
	export function CreateDescribeProvisioningTemplateRequestFormGroup() {
		return new FormGroup<DescribeProvisioningTemplateRequestFormProperties>({
		});

	}

	export interface DescribeProvisioningTemplateVersionRequest {
	}
	export interface DescribeProvisioningTemplateVersionRequestFormProperties {
	}
	export function CreateDescribeProvisioningTemplateVersionRequestFormGroup() {
		return new FormGroup<DescribeProvisioningTemplateVersionRequestFormProperties>({
		});

	}

	export interface DescribeRoleAliasRequest {
	}
	export interface DescribeRoleAliasRequestFormProperties {
	}
	export function CreateDescribeRoleAliasRequestFormGroup() {
		return new FormGroup<DescribeRoleAliasRequestFormProperties>({
		});

	}

	export interface DescribeScheduledAuditRequest {
	}
	export interface DescribeScheduledAuditRequestFormProperties {
	}
	export function CreateDescribeScheduledAuditRequestFormGroup() {
		return new FormGroup<DescribeScheduledAuditRequestFormProperties>({
		});

	}

	export interface DescribeSecurityProfileRequest {
	}
	export interface DescribeSecurityProfileRequestFormProperties {
	}
	export function CreateDescribeSecurityProfileRequestFormGroup() {
		return new FormGroup<DescribeSecurityProfileRequestFormProperties>({
		});

	}

	export interface DescribeStreamRequest {
	}
	export interface DescribeStreamRequestFormProperties {
	}
	export function CreateDescribeStreamRequestFormGroup() {
		return new FormGroup<DescribeStreamRequestFormProperties>({
		});

	}

	export interface DescribeThingGroupRequest {
	}
	export interface DescribeThingGroupRequestFormProperties {
	}
	export function CreateDescribeThingGroupRequestFormGroup() {
		return new FormGroup<DescribeThingGroupRequestFormProperties>({
		});

	}

	export enum DynamicGroupStatus { ACTIVE = 0, BUILDING = 1, REBUILDING = 2 }

	export interface DescribeThingRegistrationTaskRequest {
	}
	export interface DescribeThingRegistrationTaskRequestFormProperties {
	}
	export function CreateDescribeThingRegistrationTaskRequestFormGroup() {
		return new FormGroup<DescribeThingRegistrationTaskRequestFormProperties>({
		});

	}

	export enum Status { InProgress = 0, Completed = 1, Failed = 2, Cancelled = 3, Cancelling = 4 }


	/** The input for the DescribeThing operation. */
	export interface DescribeThingRequest {
	}

	/** The input for the DescribeThing operation. */
	export interface DescribeThingRequestFormProperties {
	}
	export function CreateDescribeThingRequestFormGroup() {
		return new FormGroup<DescribeThingRequestFormProperties>({
		});

	}


	/** The input for the DescribeThingType operation. */
	export interface DescribeThingTypeRequest {
	}

	/** The input for the DescribeThingType operation. */
	export interface DescribeThingTypeRequestFormProperties {
	}
	export function CreateDescribeThingTypeRequestFormGroup() {
		return new FormGroup<DescribeThingTypeRequestFormProperties>({
		});

	}

	export interface DetachPolicyRequest {

		/** Required */
		target: string;
	}
	export interface DetachPolicyRequestFormProperties {

		/** Required */
		target: FormControl<string | null | undefined>,
	}
	export function CreateDetachPolicyRequestFormGroup() {
		return new FormGroup<DetachPolicyRequestFormProperties>({
			target: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The input for the DetachPrincipalPolicy operation. */
	export interface DetachPrincipalPolicyRequest {
	}

	/** The input for the DetachPrincipalPolicy operation. */
	export interface DetachPrincipalPolicyRequestFormProperties {
	}
	export function CreateDetachPrincipalPolicyRequestFormGroup() {
		return new FormGroup<DetachPrincipalPolicyRequestFormProperties>({
		});

	}

	export interface DetachSecurityProfileRequest {
	}
	export interface DetachSecurityProfileRequestFormProperties {
	}
	export function CreateDetachSecurityProfileRequestFormGroup() {
		return new FormGroup<DetachSecurityProfileRequestFormProperties>({
		});

	}


	/** The input for the DetachThingPrincipal operation. */
	export interface DetachThingPrincipalRequest {
	}

	/** The input for the DetachThingPrincipal operation. */
	export interface DetachThingPrincipalRequestFormProperties {
	}
	export function CreateDetachThingPrincipalRequestFormGroup() {
		return new FormGroup<DetachThingPrincipalRequestFormProperties>({
		});

	}

	export enum DeviceCertificateUpdateAction { DEACTIVATE = 0 }

	export enum DimensionValueOperator { IN = 0, NOT_IN = 1 }


	/** The input for the DisableTopicRuleRequest operation. */
	export interface DisableTopicRuleRequest {
	}

	/** The input for the DisableTopicRuleRequest operation. */
	export interface DisableTopicRuleRequestFormProperties {
	}
	export function CreateDisableTopicRuleRequestFormGroup() {
		return new FormGroup<DisableTopicRuleRequestFormProperties>({
		});

	}

	export enum DynamoKeyType { STRING = 0, NUMBER = 1 }


	/** The input for the EnableTopicRuleRequest operation. */
	export interface EnableTopicRuleRequest {
	}

	/** The input for the EnableTopicRuleRequest operation. */
	export interface EnableTopicRuleRequestFormProperties {
	}
	export function CreateEnableTopicRuleRequestFormGroup() {
		return new FormGroup<EnableTopicRuleRequestFormProperties>({
		});

	}

	export enum EventType { THING = 0, THING_GROUP = 1, THING_TYPE = 2, THING_GROUP_MEMBERSHIP = 3, THING_GROUP_HIERARCHY = 4, THING_TYPE_ASSOCIATION = 5, JOB = 6, JOB_EXECUTION = 7, POLICY = 8, CERTIFICATE = 9, CA_CERTIFICATE = 10 }

	export interface GetCardinalityRequest {

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		indexName?: string | null;

		/**
		 * Required
		 * Min length: 1
		 */
		queryString: string;

		/** Min length: 1 */
		aggregationField?: string | null;
		queryVersion?: string | null;
	}
	export interface GetCardinalityRequestFormProperties {

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		indexName: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Min length: 1
		 */
		queryString: FormControl<string | null | undefined>,

		/** Min length: 1 */
		aggregationField: FormControl<string | null | undefined>,
		queryVersion: FormControl<string | null | undefined>,
	}
	export function CreateGetCardinalityRequestFormGroup() {
		return new FormGroup<GetCardinalityRequestFormProperties>({
			indexName: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(128), Validators.pattern('[a-zA-Z0-9:_-]+')]),
			queryString: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1)]),
			aggregationField: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1)]),
			queryVersion: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetEffectivePoliciesRequest {
		principal?: string | null;
		cognitoIdentityPoolId?: string | null;
	}
	export interface GetEffectivePoliciesRequestFormProperties {
		principal: FormControl<string | null | undefined>,
		cognitoIdentityPoolId: FormControl<string | null | undefined>,
	}
	export function CreateGetEffectivePoliciesRequestFormGroup() {
		return new FormGroup<GetEffectivePoliciesRequestFormProperties>({
			principal: new FormControl<string | null | undefined>(undefined),
			cognitoIdentityPoolId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetIndexingConfigurationRequest {
	}
	export interface GetIndexingConfigurationRequestFormProperties {
	}
	export function CreateGetIndexingConfigurationRequestFormGroup() {
		return new FormGroup<GetIndexingConfigurationRequestFormProperties>({
		});

	}

	export interface GetJobDocumentRequest {
	}
	export interface GetJobDocumentRequestFormProperties {
	}
	export function CreateGetJobDocumentRequestFormGroup() {
		return new FormGroup<GetJobDocumentRequestFormProperties>({
		});

	}


	/** The input for the GetLoggingOptions operation. */
	export interface GetLoggingOptionsRequest {
	}

	/** The input for the GetLoggingOptions operation. */
	export interface GetLoggingOptionsRequestFormProperties {
	}
	export function CreateGetLoggingOptionsRequestFormGroup() {
		return new FormGroup<GetLoggingOptionsRequestFormProperties>({
		});

	}

	export interface GetOTAUpdateRequest {
	}
	export interface GetOTAUpdateRequestFormProperties {
	}
	export function CreateGetOTAUpdateRequestFormGroup() {
		return new FormGroup<GetOTAUpdateRequestFormProperties>({
		});

	}

	export interface GetPercentilesRequest {

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		indexName?: string | null;

		/**
		 * Required
		 * Min length: 1
		 */
		queryString: string;

		/** Min length: 1 */
		aggregationField?: string | null;
		queryVersion?: string | null;
		percents?: Array<number>;
	}
	export interface GetPercentilesRequestFormProperties {

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		indexName: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Min length: 1
		 */
		queryString: FormControl<string | null | undefined>,

		/** Min length: 1 */
		aggregationField: FormControl<string | null | undefined>,
		queryVersion: FormControl<string | null | undefined>,
	}
	export function CreateGetPercentilesRequestFormGroup() {
		return new FormGroup<GetPercentilesRequestFormProperties>({
			indexName: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(128), Validators.pattern('[a-zA-Z0-9:_-]+')]),
			queryString: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1)]),
			aggregationField: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1)]),
			queryVersion: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The input for the GetPolicy operation. */
	export interface GetPolicyRequest {
	}

	/** The input for the GetPolicy operation. */
	export interface GetPolicyRequestFormProperties {
	}
	export function CreateGetPolicyRequestFormGroup() {
		return new FormGroup<GetPolicyRequestFormProperties>({
		});

	}


	/** The input for the GetPolicyVersion operation. */
	export interface GetPolicyVersionRequest {
	}

	/** The input for the GetPolicyVersion operation. */
	export interface GetPolicyVersionRequestFormProperties {
	}
	export function CreateGetPolicyVersionRequestFormGroup() {
		return new FormGroup<GetPolicyVersionRequestFormProperties>({
		});

	}


	/** The input to the GetRegistrationCode operation. */
	export interface GetRegistrationCodeRequest {
	}

	/** The input to the GetRegistrationCode operation. */
	export interface GetRegistrationCodeRequestFormProperties {
	}
	export function CreateGetRegistrationCodeRequestFormGroup() {
		return new FormGroup<GetRegistrationCodeRequestFormProperties>({
		});

	}

	export interface GetStatisticsRequest {

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		indexName?: string | null;

		/**
		 * Required
		 * Min length: 1
		 */
		queryString: string;

		/** Min length: 1 */
		aggregationField?: string | null;
		queryVersion?: string | null;
	}
	export interface GetStatisticsRequestFormProperties {

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		indexName: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Min length: 1
		 */
		queryString: FormControl<string | null | undefined>,

		/** Min length: 1 */
		aggregationField: FormControl<string | null | undefined>,
		queryVersion: FormControl<string | null | undefined>,
	}
	export function CreateGetStatisticsRequestFormGroup() {
		return new FormGroup<GetStatisticsRequestFormProperties>({
			indexName: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(128), Validators.pattern('[a-zA-Z0-9:_-]+')]),
			queryString: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1)]),
			aggregationField: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1)]),
			queryVersion: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetTopicRuleDestinationRequest {
	}
	export interface GetTopicRuleDestinationRequestFormProperties {
	}
	export function CreateGetTopicRuleDestinationRequestFormGroup() {
		return new FormGroup<GetTopicRuleDestinationRequestFormProperties>({
		});

	}


	/** The input for the GetTopicRule operation. */
	export interface GetTopicRuleRequest {
	}

	/** The input for the GetTopicRule operation. */
	export interface GetTopicRuleRequestFormProperties {
	}
	export function CreateGetTopicRuleRequestFormGroup() {
		return new FormGroup<GetTopicRuleRequestFormProperties>({
		});

	}

	export interface GetV2LoggingOptionsRequest {
	}
	export interface GetV2LoggingOptionsRequestFormProperties {
	}
	export function CreateGetV2LoggingOptionsRequestFormGroup() {
		return new FormGroup<GetV2LoggingOptionsRequestFormProperties>({
		});

	}


	/** Specifies the HTTP context to use for the test authorizer request. */
	export interface HttpContext {
		headers?: HttpHeaders;

		/**
		 * Max length: 4096
		 * Min length: 1
		 */
		queryString?: string | null;
	}

	/** Specifies the HTTP context to use for the test authorizer request. */
	export interface HttpContextFormProperties {

		/**
		 * Max length: 4096
		 * Min length: 1
		 */
		queryString: FormControl<string | null | undefined>,
	}
	export function CreateHttpContextFormGroup() {
		return new FormGroup<HttpContextFormProperties>({
			queryString: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(4096)]),
		});

	}

	export interface ListActiveViolationsRequest {
	}
	export interface ListActiveViolationsRequestFormProperties {
	}
	export function CreateListActiveViolationsRequestFormGroup() {
		return new FormGroup<ListActiveViolationsRequestFormProperties>({
		});

	}

	export interface ListAttachedPoliciesRequest {
	}
	export interface ListAttachedPoliciesRequestFormProperties {
	}
	export function CreateListAttachedPoliciesRequestFormGroup() {
		return new FormGroup<ListAttachedPoliciesRequestFormProperties>({
		});

	}

	export interface ListAuditFindingsRequest {

		/**
		 * Max length: 40
		 * Min length: 1
		 */
		taskId?: string | null;

		/** An audit check name. Checks must be enabled for your account. (Use <code>DescribeAccountAuditConfiguration</code> to see the list of all checks, including those that are enabled or use <code>UpdateAccountAuditConfiguration</code> to select which checks are enabled.) */
		checkName?: string | null;

		/** Information that identifies the noncompliant resource. */
		resourceIdentifier?: ResourceIdentifier;

		/**
		 * Minimum: 1
		 * Maximum: 250
		 */
		maxResults?: number | null;
		nextToken?: string | null;
		startTime?: Date | null;
		endTime?: Date | null;
	}
	export interface ListAuditFindingsRequestFormProperties {

		/**
		 * Max length: 40
		 * Min length: 1
		 */
		taskId: FormControl<string | null | undefined>,

		/** An audit check name. Checks must be enabled for your account. (Use <code>DescribeAccountAuditConfiguration</code> to see the list of all checks, including those that are enabled or use <code>UpdateAccountAuditConfiguration</code> to select which checks are enabled.) */
		checkName: FormControl<string | null | undefined>,

		/**
		 * Minimum: 1
		 * Maximum: 250
		 */
		maxResults: FormControl<number | null | undefined>,
		nextToken: FormControl<string | null | undefined>,
		startTime: FormControl<Date | null | undefined>,
		endTime: FormControl<Date | null | undefined>,
	}
	export function CreateListAuditFindingsRequestFormGroup() {
		return new FormGroup<ListAuditFindingsRequestFormProperties>({
			taskId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(40), Validators.pattern('[a-zA-Z0-9\-]+')]),
			checkName: new FormControl<string | null | undefined>(undefined),
			maxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(250)]),
			nextToken: new FormControl<string | null | undefined>(undefined),
			startTime: new FormControl<Date | null | undefined>(undefined),
			endTime: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface ListAuditMitigationActionsExecutionsRequest {
	}
	export interface ListAuditMitigationActionsExecutionsRequestFormProperties {
	}
	export function CreateListAuditMitigationActionsExecutionsRequestFormGroup() {
		return new FormGroup<ListAuditMitigationActionsExecutionsRequestFormProperties>({
		});

	}

	export interface ListAuditMitigationActionsTasksRequest {
	}
	export interface ListAuditMitigationActionsTasksRequestFormProperties {
	}
	export function CreateListAuditMitigationActionsTasksRequestFormGroup() {
		return new FormGroup<ListAuditMitigationActionsTasksRequestFormProperties>({
		});

	}

	export interface ListAuditTasksRequest {
	}
	export interface ListAuditTasksRequestFormProperties {
	}
	export function CreateListAuditTasksRequestFormGroup() {
		return new FormGroup<ListAuditTasksRequestFormProperties>({
		});

	}

	export interface ListAuthorizersRequest {
	}
	export interface ListAuthorizersRequestFormProperties {
	}
	export function CreateListAuthorizersRequestFormGroup() {
		return new FormGroup<ListAuthorizersRequestFormProperties>({
		});

	}

	export interface ListBillingGroupsRequest {
	}
	export interface ListBillingGroupsRequestFormProperties {
	}
	export function CreateListBillingGroupsRequestFormGroup() {
		return new FormGroup<ListBillingGroupsRequestFormProperties>({
		});

	}


	/** Input for the ListCACertificates operation. */
	export interface ListCACertificatesRequest {
	}

	/** Input for the ListCACertificates operation. */
	export interface ListCACertificatesRequestFormProperties {
	}
	export function CreateListCACertificatesRequestFormGroup() {
		return new FormGroup<ListCACertificatesRequestFormProperties>({
		});

	}


	/** The input to the ListCertificatesByCA operation. */
	export interface ListCertificatesByCARequest {
	}

	/** The input to the ListCertificatesByCA operation. */
	export interface ListCertificatesByCARequestFormProperties {
	}
	export function CreateListCertificatesByCARequestFormGroup() {
		return new FormGroup<ListCertificatesByCARequestFormProperties>({
		});

	}


	/** The input for the ListCertificates operation. */
	export interface ListCertificatesRequest {
	}

	/** The input for the ListCertificates operation. */
	export interface ListCertificatesRequestFormProperties {
	}
	export function CreateListCertificatesRequestFormGroup() {
		return new FormGroup<ListCertificatesRequestFormProperties>({
		});

	}

	export interface ListDimensionsRequest {
	}
	export interface ListDimensionsRequestFormProperties {
	}
	export function CreateListDimensionsRequestFormGroup() {
		return new FormGroup<ListDimensionsRequestFormProperties>({
		});

	}

	export interface ListDomainConfigurationsRequest {
	}
	export interface ListDomainConfigurationsRequestFormProperties {
	}
	export function CreateListDomainConfigurationsRequestFormGroup() {
		return new FormGroup<ListDomainConfigurationsRequestFormProperties>({
		});

	}

	export interface ListIndicesRequest {
	}
	export interface ListIndicesRequestFormProperties {
	}
	export function CreateListIndicesRequestFormGroup() {
		return new FormGroup<ListIndicesRequestFormProperties>({
		});

	}

	export interface ListJobExecutionsForJobRequest {
	}
	export interface ListJobExecutionsForJobRequestFormProperties {
	}
	export function CreateListJobExecutionsForJobRequestFormGroup() {
		return new FormGroup<ListJobExecutionsForJobRequestFormProperties>({
		});

	}

	export interface ListJobExecutionsForThingRequest {
	}
	export interface ListJobExecutionsForThingRequestFormProperties {
	}
	export function CreateListJobExecutionsForThingRequestFormGroup() {
		return new FormGroup<ListJobExecutionsForThingRequestFormProperties>({
		});

	}

	export interface ListJobsRequest {
	}
	export interface ListJobsRequestFormProperties {
	}
	export function CreateListJobsRequestFormGroup() {
		return new FormGroup<ListJobsRequestFormProperties>({
		});

	}

	export interface ListMitigationActionsRequest {
	}
	export interface ListMitigationActionsRequestFormProperties {
	}
	export function CreateListMitigationActionsRequestFormGroup() {
		return new FormGroup<ListMitigationActionsRequestFormProperties>({
		});

	}

	export interface ListOTAUpdatesRequest {
	}
	export interface ListOTAUpdatesRequestFormProperties {
	}
	export function CreateListOTAUpdatesRequestFormGroup() {
		return new FormGroup<ListOTAUpdatesRequestFormProperties>({
		});

	}


	/** The input to the ListOutgoingCertificates operation. */
	export interface ListOutgoingCertificatesRequest {
	}

	/** The input to the ListOutgoingCertificates operation. */
	export interface ListOutgoingCertificatesRequestFormProperties {
	}
	export function CreateListOutgoingCertificatesRequestFormGroup() {
		return new FormGroup<ListOutgoingCertificatesRequestFormProperties>({
		});

	}


	/** The input for the ListPolicies operation. */
	export interface ListPoliciesRequest {
	}

	/** The input for the ListPolicies operation. */
	export interface ListPoliciesRequestFormProperties {
	}
	export function CreateListPoliciesRequestFormGroup() {
		return new FormGroup<ListPoliciesRequestFormProperties>({
		});

	}


	/** The input for the ListPolicyPrincipals operation. */
	export interface ListPolicyPrincipalsRequest {
	}

	/** The input for the ListPolicyPrincipals operation. */
	export interface ListPolicyPrincipalsRequestFormProperties {
	}
	export function CreateListPolicyPrincipalsRequestFormGroup() {
		return new FormGroup<ListPolicyPrincipalsRequestFormProperties>({
		});

	}


	/** The input for the ListPolicyVersions operation. */
	export interface ListPolicyVersionsRequest {
	}

	/** The input for the ListPolicyVersions operation. */
	export interface ListPolicyVersionsRequestFormProperties {
	}
	export function CreateListPolicyVersionsRequestFormGroup() {
		return new FormGroup<ListPolicyVersionsRequestFormProperties>({
		});

	}


	/** The input for the ListPrincipalPolicies operation. */
	export interface ListPrincipalPoliciesRequest {
	}

	/** The input for the ListPrincipalPolicies operation. */
	export interface ListPrincipalPoliciesRequestFormProperties {
	}
	export function CreateListPrincipalPoliciesRequestFormGroup() {
		return new FormGroup<ListPrincipalPoliciesRequestFormProperties>({
		});

	}


	/** The input for the ListPrincipalThings operation. */
	export interface ListPrincipalThingsRequest {
	}

	/** The input for the ListPrincipalThings operation. */
	export interface ListPrincipalThingsRequestFormProperties {
	}
	export function CreateListPrincipalThingsRequestFormGroup() {
		return new FormGroup<ListPrincipalThingsRequestFormProperties>({
		});

	}

	export interface ListProvisioningTemplateVersionsRequest {
	}
	export interface ListProvisioningTemplateVersionsRequestFormProperties {
	}
	export function CreateListProvisioningTemplateVersionsRequestFormGroup() {
		return new FormGroup<ListProvisioningTemplateVersionsRequestFormProperties>({
		});

	}

	export interface ListProvisioningTemplatesRequest {
	}
	export interface ListProvisioningTemplatesRequestFormProperties {
	}
	export function CreateListProvisioningTemplatesRequestFormGroup() {
		return new FormGroup<ListProvisioningTemplatesRequestFormProperties>({
		});

	}

	export interface ListRoleAliasesRequest {
	}
	export interface ListRoleAliasesRequestFormProperties {
	}
	export function CreateListRoleAliasesRequestFormGroup() {
		return new FormGroup<ListRoleAliasesRequestFormProperties>({
		});

	}

	export interface ListScheduledAuditsRequest {
	}
	export interface ListScheduledAuditsRequestFormProperties {
	}
	export function CreateListScheduledAuditsRequestFormGroup() {
		return new FormGroup<ListScheduledAuditsRequestFormProperties>({
		});

	}

	export interface ListSecurityProfilesForTargetRequest {
	}
	export interface ListSecurityProfilesForTargetRequestFormProperties {
	}
	export function CreateListSecurityProfilesForTargetRequestFormGroup() {
		return new FormGroup<ListSecurityProfilesForTargetRequestFormProperties>({
		});

	}

	export interface ListSecurityProfilesRequest {
	}
	export interface ListSecurityProfilesRequestFormProperties {
	}
	export function CreateListSecurityProfilesRequestFormGroup() {
		return new FormGroup<ListSecurityProfilesRequestFormProperties>({
		});

	}

	export interface ListStreamsRequest {
	}
	export interface ListStreamsRequestFormProperties {
	}
	export function CreateListStreamsRequestFormGroup() {
		return new FormGroup<ListStreamsRequestFormProperties>({
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

	export interface ListTargetsForPolicyRequest {
	}
	export interface ListTargetsForPolicyRequestFormProperties {
	}
	export function CreateListTargetsForPolicyRequestFormGroup() {
		return new FormGroup<ListTargetsForPolicyRequestFormProperties>({
		});

	}

	export interface ListTargetsForSecurityProfileRequest {
	}
	export interface ListTargetsForSecurityProfileRequestFormProperties {
	}
	export function CreateListTargetsForSecurityProfileRequestFormGroup() {
		return new FormGroup<ListTargetsForSecurityProfileRequestFormProperties>({
		});

	}

	export interface ListThingGroupsForThingRequest {
	}
	export interface ListThingGroupsForThingRequestFormProperties {
	}
	export function CreateListThingGroupsForThingRequestFormGroup() {
		return new FormGroup<ListThingGroupsForThingRequestFormProperties>({
		});

	}

	export interface ListThingGroupsRequest {
	}
	export interface ListThingGroupsRequestFormProperties {
	}
	export function CreateListThingGroupsRequestFormGroup() {
		return new FormGroup<ListThingGroupsRequestFormProperties>({
		});

	}


	/** The input for the ListThingPrincipal operation. */
	export interface ListThingPrincipalsRequest {
	}

	/** The input for the ListThingPrincipal operation. */
	export interface ListThingPrincipalsRequestFormProperties {
	}
	export function CreateListThingPrincipalsRequestFormGroup() {
		return new FormGroup<ListThingPrincipalsRequestFormProperties>({
		});

	}

	export enum ReportType { ERRORS = 0, RESULTS = 1 }

	export interface ListThingRegistrationTaskReportsRequest {
	}
	export interface ListThingRegistrationTaskReportsRequestFormProperties {
	}
	export function CreateListThingRegistrationTaskReportsRequestFormGroup() {
		return new FormGroup<ListThingRegistrationTaskReportsRequestFormProperties>({
		});

	}

	export interface ListThingRegistrationTasksRequest {
	}
	export interface ListThingRegistrationTasksRequestFormProperties {
	}
	export function CreateListThingRegistrationTasksRequestFormGroup() {
		return new FormGroup<ListThingRegistrationTasksRequestFormProperties>({
		});

	}


	/** The input for the ListThingTypes operation. */
	export interface ListThingTypesRequest {
	}

	/** The input for the ListThingTypes operation. */
	export interface ListThingTypesRequestFormProperties {
	}
	export function CreateListThingTypesRequestFormGroup() {
		return new FormGroup<ListThingTypesRequestFormProperties>({
		});

	}

	export interface ListThingsInBillingGroupRequest {
	}
	export interface ListThingsInBillingGroupRequestFormProperties {
	}
	export function CreateListThingsInBillingGroupRequestFormGroup() {
		return new FormGroup<ListThingsInBillingGroupRequestFormProperties>({
		});

	}

	export interface ListThingsInThingGroupRequest {
	}
	export interface ListThingsInThingGroupRequestFormProperties {
	}
	export function CreateListThingsInThingGroupRequestFormGroup() {
		return new FormGroup<ListThingsInThingGroupRequestFormProperties>({
		});

	}


	/** The input for the ListThings operation. */
	export interface ListThingsRequest {
	}

	/** The input for the ListThings operation. */
	export interface ListThingsRequestFormProperties {
	}
	export function CreateListThingsRequestFormGroup() {
		return new FormGroup<ListThingsRequestFormProperties>({
		});

	}

	export interface ListTopicRuleDestinationsRequest {
	}
	export interface ListTopicRuleDestinationsRequestFormProperties {
	}
	export function CreateListTopicRuleDestinationsRequestFormGroup() {
		return new FormGroup<ListTopicRuleDestinationsRequestFormProperties>({
		});

	}


	/** The input for the ListTopicRules operation. */
	export interface ListTopicRulesRequest {
	}

	/** The input for the ListTopicRules operation. */
	export interface ListTopicRulesRequestFormProperties {
	}
	export function CreateListTopicRulesRequestFormGroup() {
		return new FormGroup<ListTopicRulesRequestFormProperties>({
		});

	}

	export interface ListV2LoggingLevelsRequest {
	}
	export interface ListV2LoggingLevelsRequestFormProperties {
	}
	export function CreateListV2LoggingLevelsRequestFormGroup() {
		return new FormGroup<ListV2LoggingLevelsRequestFormProperties>({
		});

	}

	export interface ListViolationEventsRequest {
	}
	export interface ListViolationEventsRequestFormProperties {
	}
	export function CreateListViolationEventsRequestFormGroup() {
		return new FormGroup<ListViolationEventsRequestFormProperties>({
		});

	}


	/** Describes the logging options payload. */
	export interface LoggingOptionsPayload {

		/** Required */
		roleArn: string;
		logLevel?: EnableIoTLoggingParamsLogLevel | null;
	}

	/** Describes the logging options payload. */
	export interface LoggingOptionsPayloadFormProperties {

		/** Required */
		roleArn: FormControl<string | null | undefined>,
		logLevel: FormControl<EnableIoTLoggingParamsLogLevel | null | undefined>,
	}
	export function CreateLoggingOptionsPayloadFormGroup() {
		return new FormGroup<LoggingOptionsPayloadFormProperties>({
			roleArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			logLevel: new FormControl<EnableIoTLoggingParamsLogLevel | null | undefined>(undefined),
		});

	}

	export enum MessageFormat { RAW = 0, JSON = 1 }


	/** Specifies the MQTT context to use for the test authorizer request */
	export interface MqttContext {

		/**
		 * Max length: 65535
		 * Min length: 1
		 */
		username?: string | null;

		/**
		 * Max length: 65535
		 * Min length: 1
		 */
		password?: string | null;

		/**
		 * Max length: 65535
		 * Min length: 1
		 */
		clientId?: string | null;
	}

	/** Specifies the MQTT context to use for the test authorizer request */
	export interface MqttContextFormProperties {

		/**
		 * Max length: 65535
		 * Min length: 1
		 */
		username: FormControl<string | null | undefined>,

		/**
		 * Max length: 65535
		 * Min length: 1
		 */
		password: FormControl<string | null | undefined>,

		/**
		 * Max length: 65535
		 * Min length: 1
		 */
		clientId: FormControl<string | null | undefined>,
	}
	export function CreateMqttContextFormGroup() {
		return new FormGroup<MqttContextFormProperties>({
			username: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(65535)]),
			password: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(65535)]),
			clientId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(65535)]),
		});

	}

	export enum ResourceType { DEVICE_CERTIFICATE = 0, CA_CERTIFICATE = 1, IOT_POLICY = 2, COGNITO_IDENTITY_POOL = 3, CLIENT_ID = 4, ACCOUNT_SETTINGS = 5, ROLE_ALIAS = 6, IAM_ROLE = 7 }

	export interface Parameters {
	}
	export interface ParametersFormProperties {
	}
	export function CreateParametersFormGroup() {
		return new FormGroup<ParametersFormProperties>({
		});

	}

	export enum PolicyTemplateName { BLANK_POLICY = 0 }


	/** The input to the RegisterCACertificate operation. */
	export interface RegisterCACertificateRequest {

		/**
		 * The PEM of a certificate.
		 * Required
		 * Max length: 65536
		 * Min length: 1
		 */
		caCertificate: string;

		/**
		 * The PEM of a certificate.
		 * Required
		 * Max length: 65536
		 * Min length: 1
		 */
		verificationCertificate: string;

		/** The registration configuration. */
		registrationConfig?: RegistrationConfig;
		tags?: Array<Tag>;
	}

	/** The input to the RegisterCACertificate operation. */
	export interface RegisterCACertificateRequestFormProperties {

		/**
		 * The PEM of a certificate.
		 * Required
		 * Max length: 65536
		 * Min length: 1
		 */
		caCertificate: FormControl<string | null | undefined>,

		/**
		 * The PEM of a certificate.
		 * Required
		 * Max length: 65536
		 * Min length: 1
		 */
		verificationCertificate: FormControl<string | null | undefined>,
	}
	export function CreateRegisterCACertificateRequestFormGroup() {
		return new FormGroup<RegisterCACertificateRequestFormProperties>({
			caCertificate: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(65536)]),
			verificationCertificate: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(65536)]),
		});

	}


	/** The input to the RegisterCertificate operation. */
	export interface RegisterCertificateRequest {

		/**
		 * The PEM of a certificate.
		 * Required
		 * Max length: 65536
		 * Min length: 1
		 */
		certificatePem: string;

		/**
		 * The PEM of a certificate.
		 * Max length: 65536
		 * Min length: 1
		 */
		caCertificatePem?: string | null;
		status?: CertificateDescriptionStatus | null;
	}

	/** The input to the RegisterCertificate operation. */
	export interface RegisterCertificateRequestFormProperties {

		/**
		 * The PEM of a certificate.
		 * Required
		 * Max length: 65536
		 * Min length: 1
		 */
		certificatePem: FormControl<string | null | undefined>,

		/**
		 * The PEM of a certificate.
		 * Max length: 65536
		 * Min length: 1
		 */
		caCertificatePem: FormControl<string | null | undefined>,
		status: FormControl<CertificateDescriptionStatus | null | undefined>,
	}
	export function CreateRegisterCertificateRequestFormGroup() {
		return new FormGroup<RegisterCertificateRequestFormProperties>({
			certificatePem: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(65536)]),
			caCertificatePem: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(65536)]),
			status: new FormControl<CertificateDescriptionStatus | null | undefined>(undefined),
		});

	}

	export interface RegisterCertificateWithoutCARequest {

		/**
		 * The PEM of a certificate.
		 * Required
		 * Max length: 65536
		 * Min length: 1
		 */
		certificatePem: string;
		status?: CertificateDescriptionStatus | null;
	}
	export interface RegisterCertificateWithoutCARequestFormProperties {

		/**
		 * The PEM of a certificate.
		 * Required
		 * Max length: 65536
		 * Min length: 1
		 */
		certificatePem: FormControl<string | null | undefined>,
		status: FormControl<CertificateDescriptionStatus | null | undefined>,
	}
	export function CreateRegisterCertificateWithoutCARequestFormGroup() {
		return new FormGroup<RegisterCertificateWithoutCARequestFormProperties>({
			certificatePem: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(65536)]),
			status: new FormControl<CertificateDescriptionStatus | null | undefined>(undefined),
		});

	}

	export interface RegisterThingRequest {

		/** Required */
		templateBody: string;
		parameters?: Parameters;
	}
	export interface RegisterThingRequestFormProperties {

		/** Required */
		templateBody: FormControl<string | null | undefined>,
	}
	export function CreateRegisterThingRequestFormGroup() {
		return new FormGroup<RegisterThingRequestFormProperties>({
			templateBody: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The input for the RejectCertificateTransfer operation. */
	export interface RejectCertificateTransferRequest {

		/** Max length: 128 */
		rejectReason?: string | null;
	}

	/** The input for the RejectCertificateTransfer operation. */
	export interface RejectCertificateTransferRequestFormProperties {

		/** Max length: 128 */
		rejectReason: FormControl<string | null | undefined>,
	}
	export function CreateRejectCertificateTransferRequestFormGroup() {
		return new FormGroup<RejectCertificateTransferRequestFormProperties>({
			rejectReason: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(128)]),
		});

	}

	export interface RemoveThingFromBillingGroupRequest {

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		billingGroupName?: string | null;
		billingGroupArn?: string | null;

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		thingName?: string | null;
		thingArn?: string | null;
	}
	export interface RemoveThingFromBillingGroupRequestFormProperties {

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		billingGroupName: FormControl<string | null | undefined>,
		billingGroupArn: FormControl<string | null | undefined>,

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		thingName: FormControl<string | null | undefined>,
		thingArn: FormControl<string | null | undefined>,
	}
	export function CreateRemoveThingFromBillingGroupRequestFormGroup() {
		return new FormGroup<RemoveThingFromBillingGroupRequestFormProperties>({
			billingGroupName: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(128), Validators.pattern('[a-zA-Z0-9:_-]+')]),
			billingGroupArn: new FormControl<string | null | undefined>(undefined),
			thingName: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(128), Validators.pattern('[a-zA-Z0-9:_-]+')]),
			thingArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface RemoveThingFromThingGroupRequest {

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		thingGroupName?: string | null;
		thingGroupArn?: string | null;

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		thingName?: string | null;
		thingArn?: string | null;
	}
	export interface RemoveThingFromThingGroupRequestFormProperties {

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		thingGroupName: FormControl<string | null | undefined>,
		thingGroupArn: FormControl<string | null | undefined>,

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		thingName: FormControl<string | null | undefined>,
		thingArn: FormControl<string | null | undefined>,
	}
	export function CreateRemoveThingFromThingGroupRequestFormGroup() {
		return new FormGroup<RemoveThingFromThingGroupRequestFormProperties>({
			thingGroupName: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(128), Validators.pattern('[a-zA-Z0-9:_-]+')]),
			thingGroupArn: new FormControl<string | null | undefined>(undefined),
			thingName: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(128), Validators.pattern('[a-zA-Z0-9:_-]+')]),
			thingArn: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The input for the ReplaceTopicRule operation. */
	export interface ReplaceTopicRuleRequest {

		/**
		 * Describes a rule.
		 * Required
		 */
		topicRulePayload: TopicRulePayload;
	}

	/** The input for the ReplaceTopicRule operation. */
	export interface ReplaceTopicRuleRequestFormProperties {
	}
	export function CreateReplaceTopicRuleRequestFormGroup() {
		return new FormGroup<ReplaceTopicRuleRequestFormProperties>({
		});

	}

	export interface SearchIndexRequest {

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		indexName?: string | null;

		/**
		 * Required
		 * Min length: 1
		 */
		queryString: string;
		nextToken?: string | null;

		/**
		 * Minimum: 1
		 * Maximum: 500
		 */
		maxResults?: number | null;
		queryVersion?: string | null;
	}
	export interface SearchIndexRequestFormProperties {

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		indexName: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Min length: 1
		 */
		queryString: FormControl<string | null | undefined>,
		nextToken: FormControl<string | null | undefined>,

		/**
		 * Minimum: 1
		 * Maximum: 500
		 */
		maxResults: FormControl<number | null | undefined>,
		queryVersion: FormControl<string | null | undefined>,
	}
	export function CreateSearchIndexRequestFormGroup() {
		return new FormGroup<SearchIndexRequestFormProperties>({
			indexName: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(128), Validators.pattern('[a-zA-Z0-9:_-]+')]),
			queryString: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1)]),
			nextToken: new FormControl<string | null | undefined>(undefined),
			maxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(500)]),
			queryVersion: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ServerCertificateStatus { INVALID = 0, VALID = 1 }

	export interface SetDefaultAuthorizerRequest {

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		authorizerName: string;
	}
	export interface SetDefaultAuthorizerRequestFormProperties {

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		authorizerName: FormControl<string | null | undefined>,
	}
	export function CreateSetDefaultAuthorizerRequestFormGroup() {
		return new FormGroup<SetDefaultAuthorizerRequestFormProperties>({
			authorizerName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(128), Validators.pattern('[\w=,@-]+')]),
		});

	}


	/** The input for the SetDefaultPolicyVersion operation. */
	export interface SetDefaultPolicyVersionRequest {
	}

	/** The input for the SetDefaultPolicyVersion operation. */
	export interface SetDefaultPolicyVersionRequestFormProperties {
	}
	export function CreateSetDefaultPolicyVersionRequestFormGroup() {
		return new FormGroup<SetDefaultPolicyVersionRequestFormProperties>({
		});

	}


	/** The input for the SetLoggingOptions operation. */
	export interface SetLoggingOptionsRequest {

		/**
		 * Describes the logging options payload.
		 * Required
		 */
		loggingOptionsPayload: LoggingOptionsPayload;
	}

	/** The input for the SetLoggingOptions operation. */
	export interface SetLoggingOptionsRequestFormProperties {
	}
	export function CreateSetLoggingOptionsRequestFormGroup() {
		return new FormGroup<SetLoggingOptionsRequestFormProperties>({
		});

	}

	export interface SetV2LoggingLevelRequest {

		/**
		 * A log target.
		 * Required
		 */
		logTarget: LogTarget;

		/** Required */
		logLevel: EnableIoTLoggingParamsLogLevel;
	}
	export interface SetV2LoggingLevelRequestFormProperties {

		/** Required */
		logLevel: FormControl<EnableIoTLoggingParamsLogLevel | null | undefined>,
	}
	export function CreateSetV2LoggingLevelRequestFormGroup() {
		return new FormGroup<SetV2LoggingLevelRequestFormProperties>({
			logLevel: new FormControl<EnableIoTLoggingParamsLogLevel | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface SetV2LoggingOptionsRequest {
		roleArn?: string | null;
		defaultLogLevel?: EnableIoTLoggingParamsLogLevel | null;
		disableAllLogs?: boolean | null;
	}
	export interface SetV2LoggingOptionsRequestFormProperties {
		roleArn: FormControl<string | null | undefined>,
		defaultLogLevel: FormControl<EnableIoTLoggingParamsLogLevel | null | undefined>,
		disableAllLogs: FormControl<boolean | null | undefined>,
	}
	export function CreateSetV2LoggingOptionsRequestFormGroup() {
		return new FormGroup<SetV2LoggingOptionsRequestFormProperties>({
			roleArn: new FormControl<string | null | undefined>(undefined),
			defaultLogLevel: new FormControl<EnableIoTLoggingParamsLogLevel | null | undefined>(undefined),
			disableAllLogs: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface StartAuditMitigationActionsTaskRequest {

		/**
		 * Used in MitigationActionParams, this information identifies the target findings to which the mitigation actions are applied. Only one entry appears.
		 * Required
		 */
		target: AuditMitigationActionsTaskTarget;

		/** Required */
		auditCheckToActionsMapping: AuditCheckToActionsMapping;

		/**
		 * Required
		 * Max length: 64
		 * Min length: 1
		 */
		clientRequestToken: string;
	}
	export interface StartAuditMitigationActionsTaskRequestFormProperties {

		/**
		 * Required
		 * Max length: 64
		 * Min length: 1
		 */
		clientRequestToken: FormControl<string | null | undefined>,
	}
	export function CreateStartAuditMitigationActionsTaskRequestFormGroup() {
		return new FormGroup<StartAuditMitigationActionsTaskRequestFormProperties>({
			clientRequestToken: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(64), Validators.pattern('^[a-zA-Z0-9-_]+$')]),
		});

	}

	export interface StartOnDemandAuditTaskRequest {

		/** Required */
		targetCheckNames: Array<string>;
	}
	export interface StartOnDemandAuditTaskRequestFormProperties {
	}
	export function CreateStartOnDemandAuditTaskRequestFormGroup() {
		return new FormGroup<StartOnDemandAuditTaskRequestFormProperties>({
		});

	}

	export interface StartThingRegistrationTaskRequest {

		/** Required */
		templateBody: string;

		/**
		 * Required
		 * Max length: 256
		 * Min length: 3
		 */
		inputFileBucket: string;

		/**
		 * Required
		 * Max length: 1024
		 * Min length: 1
		 */
		inputFileKey: string;

		/**
		 * Required
		 * Max length: 2048
		 * Min length: 20
		 */
		roleArn: string;
	}
	export interface StartThingRegistrationTaskRequestFormProperties {

		/** Required */
		templateBody: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 256
		 * Min length: 3
		 */
		inputFileBucket: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 1024
		 * Min length: 1
		 */
		inputFileKey: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 2048
		 * Min length: 20
		 */
		roleArn: FormControl<string | null | undefined>,
	}
	export function CreateStartThingRegistrationTaskRequestFormGroup() {
		return new FormGroup<StartThingRegistrationTaskRequestFormProperties>({
			templateBody: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			inputFileBucket: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(3), Validators.maxLength(256), Validators.pattern('[a-zA-Z0-9._-]+')]),
			inputFileKey: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(1024), Validators.pattern('[a-zA-Z0-9!_.*\'()-\/]+')]),
			roleArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(20), Validators.maxLength(2048)]),
		});

	}

	export interface StopThingRegistrationTaskRequest {
	}
	export interface StopThingRegistrationTaskRequestFormProperties {
	}
	export function CreateStopThingRegistrationTaskRequestFormGroup() {
		return new FormGroup<StopThingRegistrationTaskRequestFormProperties>({
		});

	}

	export interface TagResourceRequest {

		/** Required */
		resourceArn: string;

		/** Required */
		tags: Array<Tag>;
	}
	export interface TagResourceRequestFormProperties {

		/** Required */
		resourceArn: FormControl<string | null | undefined>,
	}
	export function CreateTagResourceRequestFormGroup() {
		return new FormGroup<TagResourceRequestFormProperties>({
			resourceArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface TestAuthorizationRequest {
		principal?: string | null;
		cognitoIdentityPoolId?: string | null;

		/**
		 * Required
		 * Minimum items: 1
		 * Maximum items: 10
		 */
		authInfos: Array<AuthInfo>;
		policyNamesToAdd?: Array<string>;
		policyNamesToSkip?: Array<string>;
	}
	export interface TestAuthorizationRequestFormProperties {
		principal: FormControl<string | null | undefined>,
		cognitoIdentityPoolId: FormControl<string | null | undefined>,
	}
	export function CreateTestAuthorizationRequestFormGroup() {
		return new FormGroup<TestAuthorizationRequestFormProperties>({
			principal: new FormControl<string | null | undefined>(undefined),
			cognitoIdentityPoolId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Specifies the TLS context to use for the test authorizer request. */
	export interface TlsContext {

		/**
		 * Max length: 253
		 * Min length: 1
		 */
		serverName?: string | null;
	}

	/** Specifies the TLS context to use for the test authorizer request. */
	export interface TlsContextFormProperties {

		/**
		 * Max length: 253
		 * Min length: 1
		 */
		serverName: FormControl<string | null | undefined>,
	}
	export function CreateTlsContextFormGroup() {
		return new FormGroup<TlsContextFormProperties>({
			serverName: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(253)]),
		});

	}

	export interface TestInvokeAuthorizerRequest {

		/**
		 * Max length: 6144
		 * Min length: 1
		 */
		token?: string | null;

		/**
		 * Max length: 2560
		 * Min length: 1
		 */
		tokenSignature?: string | null;

		/** Specifies the HTTP context to use for the test authorizer request. */
		httpContext?: HttpContext;

		/** Specifies the MQTT context to use for the test authorizer request */
		mqttContext?: MqttContext;

		/** Specifies the TLS context to use for the test authorizer request. */
		tlsContext?: TlsContext;
	}
	export interface TestInvokeAuthorizerRequestFormProperties {

		/**
		 * Max length: 6144
		 * Min length: 1
		 */
		token: FormControl<string | null | undefined>,

		/**
		 * Max length: 2560
		 * Min length: 1
		 */
		tokenSignature: FormControl<string | null | undefined>,
	}
	export function CreateTestInvokeAuthorizerRequestFormGroup() {
		return new FormGroup<TestInvokeAuthorizerRequestFormProperties>({
			token: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(6144)]),
			tokenSignature: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(2560), Validators.pattern('[A-Za-z0-9+/]+={0,2}')]),
		});

	}


	/** The input for the TransferCertificate operation. */
	export interface TransferCertificateRequest {

		/** Max length: 128 */
		transferMessage?: string | null;
	}

	/** The input for the TransferCertificate operation. */
	export interface TransferCertificateRequestFormProperties {

		/** Max length: 128 */
		transferMessage: FormControl<string | null | undefined>,
	}
	export function CreateTransferCertificateRequestFormGroup() {
		return new FormGroup<TransferCertificateRequestFormProperties>({
			transferMessage: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(128)]),
		});

	}

	export interface UntagResourceRequest {

		/** Required */
		resourceArn: string;

		/** Required */
		tagKeys: Array<string>;
	}
	export interface UntagResourceRequestFormProperties {

		/** Required */
		resourceArn: FormControl<string | null | undefined>,
	}
	export function CreateUntagResourceRequestFormGroup() {
		return new FormGroup<UntagResourceRequestFormProperties>({
			resourceArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UpdateAccountAuditConfigurationRequest {

		/**
		 * Max length: 2048
		 * Min length: 20
		 */
		roleArn?: string | null;
		auditNotificationTargetConfigurations?: AuditNotificationTargetConfigurations;
		auditCheckConfigurations?: AuditCheckConfigurations;
	}
	export interface UpdateAccountAuditConfigurationRequestFormProperties {

		/**
		 * Max length: 2048
		 * Min length: 20
		 */
		roleArn: FormControl<string | null | undefined>,
	}
	export function CreateUpdateAccountAuditConfigurationRequestFormGroup() {
		return new FormGroup<UpdateAccountAuditConfigurationRequestFormProperties>({
			roleArn: new FormControl<string | null | undefined>(undefined, [Validators.minLength(20), Validators.maxLength(2048)]),
		});

	}

	export interface UpdateAuthorizerRequest {
		authorizerFunctionArn?: string | null;

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		tokenKeyName?: string | null;
		tokenSigningPublicKeys?: PublicKeyMap;
		status?: AuthorizerDescriptionStatus | null;
	}
	export interface UpdateAuthorizerRequestFormProperties {
		authorizerFunctionArn: FormControl<string | null | undefined>,

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		tokenKeyName: FormControl<string | null | undefined>,
		status: FormControl<AuthorizerDescriptionStatus | null | undefined>,
	}
	export function CreateUpdateAuthorizerRequestFormGroup() {
		return new FormGroup<UpdateAuthorizerRequestFormProperties>({
			authorizerFunctionArn: new FormControl<string | null | undefined>(undefined),
			tokenKeyName: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(128), Validators.pattern('[a-zA-Z0-9_-]+')]),
			status: new FormControl<AuthorizerDescriptionStatus | null | undefined>(undefined),
		});

	}

	export interface UpdateBillingGroupRequest {

		/**
		 * The properties of a billing group.
		 * Required
		 */
		billingGroupProperties: BillingGroupProperties;
		expectedVersion?: number | null;
	}
	export interface UpdateBillingGroupRequestFormProperties {
		expectedVersion: FormControl<number | null | undefined>,
	}
	export function CreateUpdateBillingGroupRequestFormGroup() {
		return new FormGroup<UpdateBillingGroupRequestFormProperties>({
			expectedVersion: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** The input to the UpdateCACertificate operation. */
	export interface UpdateCACertificateRequest {

		/** The registration configuration. */
		registrationConfig?: RegistrationConfig;
		removeAutoRegistration?: boolean | null;
	}

	/** The input to the UpdateCACertificate operation. */
	export interface UpdateCACertificateRequestFormProperties {
		removeAutoRegistration: FormControl<boolean | null | undefined>,
	}
	export function CreateUpdateCACertificateRequestFormGroup() {
		return new FormGroup<UpdateCACertificateRequestFormProperties>({
			removeAutoRegistration: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** The input for the UpdateCertificate operation. */
	export interface UpdateCertificateRequest {
	}

	/** The input for the UpdateCertificate operation. */
	export interface UpdateCertificateRequestFormProperties {
	}
	export function CreateUpdateCertificateRequestFormGroup() {
		return new FormGroup<UpdateCertificateRequestFormProperties>({
		});

	}

	export interface UpdateDimensionRequest {

		/**
		 * Required
		 * Minimum items: 1
		 * Maximum items: 100
		 */
		stringValues: Array<string>;
	}
	export interface UpdateDimensionRequestFormProperties {
	}
	export function CreateUpdateDimensionRequestFormGroup() {
		return new FormGroup<UpdateDimensionRequestFormProperties>({
		});

	}

	export interface UpdateDomainConfigurationRequest {

		/** An object that specifies the authorization service for a domain. */
		authorizerConfig?: AuthorizerConfig;
		domainConfigurationStatus?: DescribeDomainConfigurationResponseDomainConfigurationStatus | null;
		removeAuthorizerConfig?: boolean | null;
	}
	export interface UpdateDomainConfigurationRequestFormProperties {
		domainConfigurationStatus: FormControl<DescribeDomainConfigurationResponseDomainConfigurationStatus | null | undefined>,
		removeAuthorizerConfig: FormControl<boolean | null | undefined>,
	}
	export function CreateUpdateDomainConfigurationRequestFormGroup() {
		return new FormGroup<UpdateDomainConfigurationRequestFormProperties>({
			domainConfigurationStatus: new FormControl<DescribeDomainConfigurationResponseDomainConfigurationStatus | null | undefined>(undefined),
			removeAuthorizerConfig: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface UpdateDynamicThingGroupRequest {

		/**
		 * Thing group properties.
		 * Required
		 */
		thingGroupProperties: ThingGroupProperties;
		expectedVersion?: number | null;

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		indexName?: string | null;

		/** Min length: 1 */
		queryString?: string | null;
		queryVersion?: string | null;
	}
	export interface UpdateDynamicThingGroupRequestFormProperties {
		expectedVersion: FormControl<number | null | undefined>,

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		indexName: FormControl<string | null | undefined>,

		/** Min length: 1 */
		queryString: FormControl<string | null | undefined>,
		queryVersion: FormControl<string | null | undefined>,
	}
	export function CreateUpdateDynamicThingGroupRequestFormGroup() {
		return new FormGroup<UpdateDynamicThingGroupRequestFormProperties>({
			expectedVersion: new FormControl<number | null | undefined>(undefined),
			indexName: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(128), Validators.pattern('[a-zA-Z0-9:_-]+')]),
			queryString: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1)]),
			queryVersion: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateEventConfigurationsRequest {
		eventConfigurations?: EventConfigurations;
	}
	export interface UpdateEventConfigurationsRequestFormProperties {
	}
	export function CreateUpdateEventConfigurationsRequestFormGroup() {
		return new FormGroup<UpdateEventConfigurationsRequestFormProperties>({
		});

	}

	export interface UpdateIndexingConfigurationRequest {

		/** The thing indexing configuration. For more information, see <a href="https://docs.aws.amazon.com/iot/latest/developerguide/managing-index.html">Managing Thing Indexing</a>. */
		thingIndexingConfiguration?: ThingIndexingConfiguration;

		/** Thing group indexing configuration. */
		thingGroupIndexingConfiguration?: ThingGroupIndexingConfiguration;
	}
	export interface UpdateIndexingConfigurationRequestFormProperties {
	}
	export function CreateUpdateIndexingConfigurationRequestFormGroup() {
		return new FormGroup<UpdateIndexingConfigurationRequestFormProperties>({
		});

	}

	export interface UpdateJobRequest {

		/** Max length: 2028 */
		description?: string | null;

		/** Configuration for pre-signed S3 URLs. */
		presignedUrlConfig?: PresignedUrlConfig;

		/** Allows you to create a staged rollout of a job. */
		jobExecutionsRolloutConfig?: JobExecutionsRolloutConfig;

		/** Details of abort criteria to abort the job. */
		abortConfig?: AbortConfig;

		/** Specifies the amount of time each device has to finish its execution of the job. A timer is started when the job execution status is set to <code>IN_PROGRESS</code>. If the job execution status is not set to another terminal state before the timer expires, it will be automatically set to <code>TIMED_OUT</code>. */
		timeoutConfig?: TimeoutConfig;
	}
	export interface UpdateJobRequestFormProperties {

		/** Max length: 2028 */
		description: FormControl<string | null | undefined>,
	}
	export function CreateUpdateJobRequestFormGroup() {
		return new FormGroup<UpdateJobRequestFormProperties>({
			description: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(2028), Validators.pattern('[^\p{C}]+')]),
		});

	}

	export interface UpdateMitigationActionRequest {

		/**
		 * Max length: 2048
		 * Min length: 20
		 */
		roleArn?: string | null;

		/** The set of parameters for this mitigation action. You can specify only one type of parameter (in other words, you can apply only one action for each defined mitigation action). */
		actionParams?: MitigationActionParams;
	}
	export interface UpdateMitigationActionRequestFormProperties {

		/**
		 * Max length: 2048
		 * Min length: 20
		 */
		roleArn: FormControl<string | null | undefined>,
	}
	export function CreateUpdateMitigationActionRequestFormGroup() {
		return new FormGroup<UpdateMitigationActionRequestFormProperties>({
			roleArn: new FormControl<string | null | undefined>(undefined, [Validators.minLength(20), Validators.maxLength(2048)]),
		});

	}

	export interface UpdateProvisioningTemplateRequest {

		/**
		 * Max length: 500
		 * Min length: 0
		 */
		description?: string | null;
		enabled?: boolean | null;
		defaultVersionId?: number | null;

		/**
		 * Max length: 2048
		 * Min length: 20
		 */
		provisioningRoleArn?: string | null;

		/** Structure that contains <code>payloadVersion</code> and <code>targetArn</code>. */
		preProvisioningHook?: ProvisioningHook;
		removePreProvisioningHook?: boolean | null;
	}
	export interface UpdateProvisioningTemplateRequestFormProperties {

		/**
		 * Max length: 500
		 * Min length: 0
		 */
		description: FormControl<string | null | undefined>,
		enabled: FormControl<boolean | null | undefined>,
		defaultVersionId: FormControl<number | null | undefined>,

		/**
		 * Max length: 2048
		 * Min length: 20
		 */
		provisioningRoleArn: FormControl<string | null | undefined>,
		removePreProvisioningHook: FormControl<boolean | null | undefined>,
	}
	export function CreateUpdateProvisioningTemplateRequestFormGroup() {
		return new FormGroup<UpdateProvisioningTemplateRequestFormProperties>({
			description: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(500), Validators.pattern('[^\p{C}]*')]),
			enabled: new FormControl<boolean | null | undefined>(undefined),
			defaultVersionId: new FormControl<number | null | undefined>(undefined),
			provisioningRoleArn: new FormControl<string | null | undefined>(undefined, [Validators.minLength(20), Validators.maxLength(2048)]),
			removePreProvisioningHook: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface UpdateRoleAliasRequest {

		/**
		 * Max length: 2048
		 * Min length: 20
		 */
		roleArn?: string | null;

		/**
		 * Minimum: 900
		 * Maximum: 3600
		 */
		credentialDurationSeconds?: number | null;
	}
	export interface UpdateRoleAliasRequestFormProperties {

		/**
		 * Max length: 2048
		 * Min length: 20
		 */
		roleArn: FormControl<string | null | undefined>,

		/**
		 * Minimum: 900
		 * Maximum: 3600
		 */
		credentialDurationSeconds: FormControl<number | null | undefined>,
	}
	export function CreateUpdateRoleAliasRequestFormGroup() {
		return new FormGroup<UpdateRoleAliasRequestFormProperties>({
			roleArn: new FormControl<string | null | undefined>(undefined, [Validators.minLength(20), Validators.maxLength(2048)]),
			credentialDurationSeconds: new FormControl<number | null | undefined>(undefined, [Validators.min(900), Validators.max(3600)]),
		});

	}

	export interface UpdateScheduledAuditRequest {
		frequency?: DescribeScheduledAuditResponseFrequency | null;
		dayOfMonth?: string | null;
		dayOfWeek?: DescribeScheduledAuditResponseDayOfWeek | null;
		targetCheckNames?: Array<string>;
	}
	export interface UpdateScheduledAuditRequestFormProperties {
		frequency: FormControl<DescribeScheduledAuditResponseFrequency | null | undefined>,
		dayOfMonth: FormControl<string | null | undefined>,
		dayOfWeek: FormControl<DescribeScheduledAuditResponseDayOfWeek | null | undefined>,
	}
	export function CreateUpdateScheduledAuditRequestFormGroup() {
		return new FormGroup<UpdateScheduledAuditRequestFormProperties>({
			frequency: new FormControl<DescribeScheduledAuditResponseFrequency | null | undefined>(undefined),
			dayOfMonth: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^([1-9]|[12][0-9]|3[01])$|^LAST$')]),
			dayOfWeek: new FormControl<DescribeScheduledAuditResponseDayOfWeek | null | undefined>(undefined),
		});

	}

	export interface UpdateSecurityProfileRequest {

		/** Max length: 1000 */
		securityProfileDescription?: string | null;

		/** Maximum items: 100 */
		behaviors?: Array<Behavior>;
		alertTargets?: AlertTargets;
		additionalMetricsToRetain?: Array<string>;
		additionalMetricsToRetainV2?: Array<MetricToRetain>;
		deleteBehaviors?: boolean | null;
		deleteAlertTargets?: boolean | null;
		deleteAdditionalMetricsToRetain?: boolean | null;
	}
	export interface UpdateSecurityProfileRequestFormProperties {

		/** Max length: 1000 */
		securityProfileDescription: FormControl<string | null | undefined>,
		deleteBehaviors: FormControl<boolean | null | undefined>,
		deleteAlertTargets: FormControl<boolean | null | undefined>,
		deleteAdditionalMetricsToRetain: FormControl<boolean | null | undefined>,
	}
	export function CreateUpdateSecurityProfileRequestFormGroup() {
		return new FormGroup<UpdateSecurityProfileRequestFormProperties>({
			securityProfileDescription: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(1000), Validators.pattern('[\p{Graph}\x20]*')]),
			deleteBehaviors: new FormControl<boolean | null | undefined>(undefined),
			deleteAlertTargets: new FormControl<boolean | null | undefined>(undefined),
			deleteAdditionalMetricsToRetain: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface UpdateStreamRequest {

		/** Max length: 2028 */
		description?: string | null;

		/**
		 * Minimum items: 1
		 * Maximum items: 50
		 */
		files?: Array<StreamFile>;

		/**
		 * Max length: 2048
		 * Min length: 20
		 */
		roleArn?: string | null;
	}
	export interface UpdateStreamRequestFormProperties {

		/** Max length: 2028 */
		description: FormControl<string | null | undefined>,

		/**
		 * Max length: 2048
		 * Min length: 20
		 */
		roleArn: FormControl<string | null | undefined>,
	}
	export function CreateUpdateStreamRequestFormGroup() {
		return new FormGroup<UpdateStreamRequestFormProperties>({
			description: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(2028), Validators.pattern('[^\p{C}]+')]),
			roleArn: new FormControl<string | null | undefined>(undefined, [Validators.minLength(20), Validators.maxLength(2048)]),
		});

	}

	export interface UpdateThingGroupRequest {

		/**
		 * Thing group properties.
		 * Required
		 */
		thingGroupProperties: ThingGroupProperties;
		expectedVersion?: number | null;
	}
	export interface UpdateThingGroupRequestFormProperties {
		expectedVersion: FormControl<number | null | undefined>,
	}
	export function CreateUpdateThingGroupRequestFormGroup() {
		return new FormGroup<UpdateThingGroupRequestFormProperties>({
			expectedVersion: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface UpdateThingGroupsForThingRequest {

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		thingName?: string | null;
		thingGroupsToAdd?: Array<string>;
		thingGroupsToRemove?: Array<string>;
		overrideDynamicGroups?: boolean | null;
	}
	export interface UpdateThingGroupsForThingRequestFormProperties {

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		thingName: FormControl<string | null | undefined>,
		overrideDynamicGroups: FormControl<boolean | null | undefined>,
	}
	export function CreateUpdateThingGroupsForThingRequestFormGroup() {
		return new FormGroup<UpdateThingGroupsForThingRequestFormProperties>({
			thingName: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(128), Validators.pattern('[a-zA-Z0-9:_-]+')]),
			overrideDynamicGroups: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** The input for the UpdateThing operation. */
	export interface UpdateThingRequest {

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		thingTypeName?: string | null;

		/** The attribute payload. */
		attributePayload?: AttributePayload;
		expectedVersion?: number | null;
		removeThingType?: boolean | null;
	}

	/** The input for the UpdateThing operation. */
	export interface UpdateThingRequestFormProperties {

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		thingTypeName: FormControl<string | null | undefined>,
		expectedVersion: FormControl<number | null | undefined>,
		removeThingType: FormControl<boolean | null | undefined>,
	}
	export function CreateUpdateThingRequestFormGroup() {
		return new FormGroup<UpdateThingRequestFormProperties>({
			thingTypeName: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(128), Validators.pattern('[a-zA-Z0-9:_-]+')]),
			expectedVersion: new FormControl<number | null | undefined>(undefined),
			removeThingType: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface UpdateTopicRuleDestinationRequest {

		/** Required */
		arn: string;

		/** Required */
		status: TopicRuleDestinationStatus;
	}
	export interface UpdateTopicRuleDestinationRequestFormProperties {

		/** Required */
		arn: FormControl<string | null | undefined>,

		/** Required */
		status: FormControl<TopicRuleDestinationStatus | null | undefined>,
	}
	export function CreateUpdateTopicRuleDestinationRequestFormGroup() {
		return new FormGroup<UpdateTopicRuleDestinationRequestFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<TopicRuleDestinationStatus | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ValidateSecurityProfileBehaviorsRequest {

		/**
		 * Required
		 * Maximum items: 100
		 */
		behaviors: Array<Behavior>;
	}
	export interface ValidateSecurityProfileBehaviorsRequestFormProperties {
	}
	export function CreateValidateSecurityProfileBehaviorsRequestFormGroup() {
		return new FormGroup<ValidateSecurityProfileBehaviorsRequestFormProperties>({
		});

	}

	export enum ViolationEventType { 'in-alarm' = 0, 'alarm-cleared' = 1, 'alarm-invalidated' = 2 }

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * <p>Accepts a pending certificate transfer. The default state of the certificate is INACTIVE.</p> <p>To check for pending certificate transfers, call <a>ListCertificates</a> to enumerate your certificates.</p>
		 * Patch accept-certificate-transfer/{certificateId}
		 * @param {string} certificateId The ID of the certificate. (The last part of the certificate ARN contains the certificate ID.)
		 * @param {boolean} setAsActive Specifies whether the certificate is active.
		 * @return {void} Success
		 */
		AcceptCertificateTransfer(certificateId: string, setAsActive: boolean | null | undefined): Observable<HttpResponse<string>> {
			return this.http.patch(this.baseUri + 'accept-certificate-transfer/' + (certificateId == null ? '' : encodeURIComponent(certificateId)) + '&setAsActive=' + setAsActive, null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Adds a thing to a billing group.
		 * Put billing-groups/addThingToBillingGroup
		 * @return {AddThingToBillingGroupResponse} Success
		 */
		AddThingToBillingGroup(requestBody: AddThingToBillingGroupPutBody): Observable<AddThingToBillingGroupResponse> {
			return this.http.put<AddThingToBillingGroupResponse>(this.baseUri + 'billing-groups/addThingToBillingGroup', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Adds a thing to a thing group.
		 * Put thing-groups/addThingToThingGroup
		 * @return {AddThingToThingGroupResponse} Success
		 */
		AddThingToThingGroup(requestBody: AddThingToThingGroupPutBody): Observable<AddThingToThingGroupResponse> {
			return this.http.put<AddThingToThingGroupResponse>(this.baseUri + 'thing-groups/addThingToThingGroup', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Associates a group with a continuous job. The following criteria must be met: </p> <ul> <li> <p>The job must have been created with the <code>targetSelection</code> field set to "CONTINUOUS".</p> </li> <li> <p>The job status must currently be "IN_PROGRESS".</p> </li> <li> <p>The total number of targets associated with a job must not exceed 100.</p> </li> </ul>
		 * Post jobs/{jobId}/targets
		 * @param {string} jobId The unique identifier you assigned to this job when it was created.
		 * @return {AssociateTargetsWithJobResponse} Success
		 */
		AssociateTargetsWithJob(jobId: string, requestBody: AssociateTargetsWithJobPostBody): Observable<AssociateTargetsWithJobResponse> {
			return this.http.post<AssociateTargetsWithJobResponse>(this.baseUri + 'jobs/' + (jobId == null ? '' : encodeURIComponent(jobId)) + '/targets', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Attaches a policy to the specified target.
		 * Put target-policies/{policyName}
		 * @param {string} policyName The name of the policy to attach.
		 * @return {void} Success
		 */
		AttachPolicy(policyName: string, requestBody: AttachPolicyPutBody): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'target-policies/' + (policyName == null ? '' : encodeURIComponent(policyName)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Detaches a policy from the specified target.
		 * Post target-policies/{policyName}
		 * @param {string} policyName The policy to detach.
		 * @return {void} Success
		 */
		DetachPolicy(policyName: string, requestBody: DetachPolicyPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'target-policies/' + (policyName == null ? '' : encodeURIComponent(policyName)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Attaches the specified policy to the specified principal (certificate or other credential).</p> <p> <b>Note:</b> This API is deprecated. Please use <a>AttachPolicy</a> instead.</p>
		 * Put principal-policies/{policyName}#x-amzn-iot-principal
		 * @param {string} policyName The policy name.
		 * @return {void} Success
		 */
		AttachPrincipalPolicy(policyName: string): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'principal-policies/' + (policyName == null ? '' : encodeURIComponent(policyName)) + '#x-amzn-iot-principal', null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Removes the specified policy from the specified certificate.</p> <p> <b>Note:</b> This API is deprecated. Please use <a>DetachPolicy</a> instead.</p>
		 * Delete principal-policies/{policyName}#x-amzn-iot-principal
		 * @param {string} policyName The name of the policy to detach.
		 * @return {void} Success
		 */
		DetachPrincipalPolicy(policyName: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'principal-policies/' + (policyName == null ? '' : encodeURIComponent(policyName)) + '#x-amzn-iot-principal', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Associates a Device Defender security profile with a thing group or this account. Each thing group or account can have up to five security profiles associated with it.
		 * Put security-profiles/{securityProfileName}/targets#securityProfileTargetArn
		 * @param {string} securityProfileName The security profile that is attached.
		 * @param {string} securityProfileTargetArn The ARN of the target (thing group) to which the security profile is attached.
		 * @return {AttachSecurityProfileResponse} Success
		 */
		AttachSecurityProfile(securityProfileName: string, securityProfileTargetArn: string): Observable<AttachSecurityProfileResponse> {
			return this.http.put<AttachSecurityProfileResponse>(this.baseUri + 'security-profiles/' + (securityProfileName == null ? '' : encodeURIComponent(securityProfileName)) + '/targets#securityProfileTargetArn&securityProfileTargetArn=' + (securityProfileTargetArn == null ? '' : encodeURIComponent(securityProfileTargetArn)), null, {});
		}

		/**
		 * Disassociates a Device Defender security profile from a thing group or from this account.
		 * Delete security-profiles/{securityProfileName}/targets#securityProfileTargetArn
		 * @param {string} securityProfileName The security profile that is detached.
		 * @param {string} securityProfileTargetArn The ARN of the thing group from which the security profile is detached.
		 * @return {DetachSecurityProfileResponse} Success
		 */
		DetachSecurityProfile(securityProfileName: string, securityProfileTargetArn: string): Observable<DetachSecurityProfileResponse> {
			return this.http.delete<DetachSecurityProfileResponse>(this.baseUri + 'security-profiles/' + (securityProfileName == null ? '' : encodeURIComponent(securityProfileName)) + '/targets#securityProfileTargetArn&securityProfileTargetArn=' + (securityProfileTargetArn == null ? '' : encodeURIComponent(securityProfileTargetArn)), {});
		}

		/**
		 * Attaches the specified principal to the specified thing. A principal can be X.509 certificates, IAM users, groups, and roles, Amazon Cognito identities or federated identities.
		 * Put things/{thingName}/principals#x-amzn-principal
		 * @param {string} thingName The name of the thing.
		 * @return {AttachThingPrincipalResponse} Success
		 */
		AttachThingPrincipal(thingName: string): Observable<AttachThingPrincipalResponse> {
			return this.http.put<AttachThingPrincipalResponse>(this.baseUri + 'things/' + (thingName == null ? '' : encodeURIComponent(thingName)) + '/principals#x-amzn-principal', null, {});
		}

		/**
		 * <p>Detaches the specified principal from the specified thing. A principal can be X.509 certificates, IAM users, groups, and roles, Amazon Cognito identities or federated identities.</p> <note> <p>This call is asynchronous. It might take several seconds for the detachment to propagate.</p> </note>
		 * Delete things/{thingName}/principals#x-amzn-principal
		 * @param {string} thingName The name of the thing.
		 * @return {DetachThingPrincipalResponse} Success
		 */
		DetachThingPrincipal(thingName: string): Observable<DetachThingPrincipalResponse> {
			return this.http.delete<DetachThingPrincipalResponse>(this.baseUri + 'things/' + (thingName == null ? '' : encodeURIComponent(thingName)) + '/principals#x-amzn-principal', {});
		}

		/**
		 * Cancels a mitigation action task that is in progress. If the task is not in progress, an InvalidRequestException occurs.
		 * Put audit/mitigationactions/tasks/{taskId}/cancel
		 * @param {string} taskId The unique identifier for the task that you want to cancel. 
		 * @return {CancelAuditMitigationActionsTaskResponse} Success
		 */
		CancelAuditMitigationActionsTask(taskId: string): Observable<CancelAuditMitigationActionsTaskResponse> {
			return this.http.put<CancelAuditMitigationActionsTaskResponse>(this.baseUri + 'audit/mitigationactions/tasks/' + (taskId == null ? '' : encodeURIComponent(taskId)) + '/cancel', null, {});
		}

		/**
		 * Cancels an audit that is in progress. The audit can be either scheduled or on-demand. If the audit is not in progress, an "InvalidRequestException" occurs.
		 * Put audit/tasks/{taskId}/cancel
		 * @param {string} taskId The ID of the audit you want to cancel. You can only cancel an audit that is "IN_PROGRESS".
		 * @return {CancelAuditTaskResponse} Success
		 */
		CancelAuditTask(taskId: string): Observable<CancelAuditTaskResponse> {
			return this.http.put<CancelAuditTaskResponse>(this.baseUri + 'audit/tasks/' + (taskId == null ? '' : encodeURIComponent(taskId)) + '/cancel', null, {});
		}

		/**
		 * <p>Cancels a pending transfer for the specified certificate.</p> <p> <b>Note</b> Only the transfer source account can use this operation to cancel a transfer. (Transfer destinations can use <a>RejectCertificateTransfer</a> instead.) After transfer, AWS IoT returns the certificate to the source account in the INACTIVE state. After the destination account has accepted the transfer, the transfer cannot be cancelled.</p> <p>After a certificate transfer is cancelled, the status of the certificate changes from PENDING_TRANSFER to INACTIVE.</p>
		 * Patch cancel-certificate-transfer/{certificateId}
		 * @param {string} certificateId The ID of the certificate. (The last part of the certificate ARN contains the certificate ID.)
		 * @return {void} Success
		 */
		CancelCertificateTransfer(certificateId: string): Observable<HttpResponse<string>> {
			return this.http.patch(this.baseUri + 'cancel-certificate-transfer/' + (certificateId == null ? '' : encodeURIComponent(certificateId)), null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Cancels a job.
		 * Put jobs/{jobId}/cancel
		 * @param {string} jobId The unique identifier you assigned to this job when it was created.
		 * @param {boolean} force <p>(Optional) If <code>true</code> job executions with status "IN_PROGRESS" and "QUEUED" are canceled, otherwise only job executions with status "QUEUED" are canceled. The default is <code>false</code>.</p> <p>Canceling a job which is "IN_PROGRESS", will cause a device which is executing the job to be unable to update the job execution status. Use caution and ensure that each device executing a job which is canceled is able to recover to a valid state.</p>
		 * @return {CancelJobResponse} Success
		 */
		CancelJob(jobId: string, force: boolean | null | undefined, requestBody: CancelJobPutBody): Observable<CancelJobResponse> {
			return this.http.put<CancelJobResponse>(this.baseUri + 'jobs/' + (jobId == null ? '' : encodeURIComponent(jobId)) + '/cancel&force=' + force, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Cancels the execution of a job for a given thing.
		 * Put things/{thingName}/jobs/{jobId}/cancel
		 * @param {string} jobId The ID of the job to be canceled.
		 * @param {string} thingName The name of the thing whose execution of the job will be canceled.
		 * @param {boolean} force <p>(Optional) If <code>true</code> the job execution will be canceled if it has status IN_PROGRESS or QUEUED, otherwise the job execution will be canceled only if it has status QUEUED. If you attempt to cancel a job execution that is IN_PROGRESS, and you do not set <code>force</code> to <code>true</code>, then an <code>InvalidStateTransitionException</code> will be thrown. The default is <code>false</code>.</p> <p>Canceling a job execution which is "IN_PROGRESS", will cause the device to be unable to update the job execution status. Use caution and ensure that the device is able to recover to a valid state.</p>
		 * @return {void} Success
		 */
		CancelJobExecution(jobId: string, thingName: string, force: boolean | null | undefined, requestBody: CancelJobExecutionPutBody): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'things/' + (thingName == null ? '' : encodeURIComponent(thingName)) + '/jobs/' + (jobId == null ? '' : encodeURIComponent(jobId)) + '/cancel&force=' + force, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Clears the default authorizer.
		 * Delete default-authorizer
		 * @return {ClearDefaultAuthorizerResponse} Success
		 */
		ClearDefaultAuthorizer(): Observable<ClearDefaultAuthorizerResponse> {
			return this.http.delete<ClearDefaultAuthorizerResponse>(this.baseUri + 'default-authorizer', {});
		}

		/**
		 * Describes the default authorizer.
		 * Get default-authorizer
		 * @return {DescribeDefaultAuthorizerResponse} Success
		 */
		DescribeDefaultAuthorizer(): Observable<DescribeDefaultAuthorizerResponse> {
			return this.http.get<DescribeDefaultAuthorizerResponse>(this.baseUri + 'default-authorizer', {});
		}

		/**
		 * Sets the default authorizer. This will be used if a websocket connection is made without specifying an authorizer.
		 * Post default-authorizer
		 * @return {SetDefaultAuthorizerResponse} Success
		 */
		SetDefaultAuthorizer(requestBody: SetDefaultAuthorizerPostBody): Observable<SetDefaultAuthorizerResponse> {
			return this.http.post<SetDefaultAuthorizerResponse>(this.baseUri + 'default-authorizer', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Confirms a topic rule destination. When you create a rule requiring a destination, AWS IoT sends a confirmation message to the endpoint or base address you specify. The message includes a token which you pass back when calling <code>ConfirmTopicRuleDestination</code> to confirm that you own or have access to the endpoint.
		 * Get confirmdestination/{confirmationToken}
		 * @param {string} confirmationToken The token used to confirm ownership or access to the topic rule confirmation URL.
		 * @return {ConfirmTopicRuleDestinationResponse} Success
		 */
		ConfirmTopicRuleDestination(confirmationToken: string): Observable<ConfirmTopicRuleDestinationResponse> {
			return this.http.get<ConfirmTopicRuleDestinationResponse>(this.baseUri + 'confirmdestination/' + (confirmationToken == null ? '' : encodeURIComponent(confirmationToken)), {});
		}

		/**
		 * Creates an authorizer.
		 * Post authorizer/{authorizerName}
		 * @param {string} authorizerName The authorizer name.
		 * @return {CreateAuthorizerResponse} Success
		 */
		CreateAuthorizer(authorizerName: string, requestBody: CreateAuthorizerPostBody): Observable<CreateAuthorizerResponse> {
			return this.http.post<CreateAuthorizerResponse>(this.baseUri + 'authorizer/' + (authorizerName == null ? '' : encodeURIComponent(authorizerName)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes an authorizer.
		 * Delete authorizer/{authorizerName}
		 * @param {string} authorizerName The name of the authorizer to delete.
		 * @return {DeleteAuthorizerResponse} Success
		 */
		DeleteAuthorizer(authorizerName: string): Observable<DeleteAuthorizerResponse> {
			return this.http.delete<DeleteAuthorizerResponse>(this.baseUri + 'authorizer/' + (authorizerName == null ? '' : encodeURIComponent(authorizerName)), {});
		}

		/**
		 * Describes an authorizer.
		 * Get authorizer/{authorizerName}
		 * @param {string} authorizerName The name of the authorizer to describe.
		 * @return {DescribeAuthorizerResponse} Success
		 */
		DescribeAuthorizer(authorizerName: string): Observable<DescribeAuthorizerResponse> {
			return this.http.get<DescribeAuthorizerResponse>(this.baseUri + 'authorizer/' + (authorizerName == null ? '' : encodeURIComponent(authorizerName)), {});
		}

		/**
		 * Updates an authorizer.
		 * Put authorizer/{authorizerName}
		 * @param {string} authorizerName The authorizer name.
		 * @return {UpdateAuthorizerResponse} Success
		 */
		UpdateAuthorizer(authorizerName: string, requestBody: UpdateAuthorizerPutBody): Observable<UpdateAuthorizerResponse> {
			return this.http.put<UpdateAuthorizerResponse>(this.baseUri + 'authorizer/' + (authorizerName == null ? '' : encodeURIComponent(authorizerName)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Creates a billing group.
		 * Post billing-groups/{billingGroupName}
		 * @param {string} billingGroupName The name you wish to give to the billing group.
		 * @return {CreateBillingGroupResponse} Success
		 */
		CreateBillingGroup(billingGroupName: string, requestBody: CreateBillingGroupPostBody): Observable<CreateBillingGroupResponse> {
			return this.http.post<CreateBillingGroupResponse>(this.baseUri + 'billing-groups/' + (billingGroupName == null ? '' : encodeURIComponent(billingGroupName)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes the billing group.
		 * Delete billing-groups/{billingGroupName}
		 * @param {string} billingGroupName The name of the billing group.
		 * @param {number} expectedVersion The expected version of the billing group. If the version of the billing group does not match the expected version specified in the request, the <code>DeleteBillingGroup</code> request is rejected with a <code>VersionConflictException</code>.
		 * @return {DeleteBillingGroupResponse} Success
		 */
		DeleteBillingGroup(billingGroupName: string, expectedVersion: number | null | undefined): Observable<DeleteBillingGroupResponse> {
			return this.http.delete<DeleteBillingGroupResponse>(this.baseUri + 'billing-groups/' + (billingGroupName == null ? '' : encodeURIComponent(billingGroupName)) + '&expectedVersion=' + expectedVersion, {});
		}

		/**
		 * Returns information about a billing group.
		 * Get billing-groups/{billingGroupName}
		 * @param {string} billingGroupName The name of the billing group.
		 * @return {DescribeBillingGroupResponse} Success
		 */
		DescribeBillingGroup(billingGroupName: string): Observable<DescribeBillingGroupResponse> {
			return this.http.get<DescribeBillingGroupResponse>(this.baseUri + 'billing-groups/' + (billingGroupName == null ? '' : encodeURIComponent(billingGroupName)), {});
		}

		/**
		 * Updates information about the billing group.
		 * Patch billing-groups/{billingGroupName}
		 * @param {string} billingGroupName The name of the billing group.
		 * @return {UpdateBillingGroupResponse} Success
		 */
		UpdateBillingGroup(billingGroupName: string, requestBody: UpdateBillingGroupPatchBody): Observable<UpdateBillingGroupResponse> {
			return this.http.patch<UpdateBillingGroupResponse>(this.baseUri + 'billing-groups/' + (billingGroupName == null ? '' : encodeURIComponent(billingGroupName)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Creates an X.509 certificate using the specified certificate signing request.</p> <p> <b>Note:</b> The CSR must include a public key that is either an RSA key with a length of at least 2048 bits or an ECC key from NIST P-256 or NIST P-384 curves. </p> <p> <b>Note:</b> Reusing the same certificate signing request (CSR) results in a distinct certificate.</p> <p>You can create multiple certificates in a batch by creating a directory, copying multiple .csr files into that directory, and then specifying that directory on the command line. The following commands show how to create a batch of certificates given a batch of CSRs.</p> <p>Assuming a set of CSRs are located inside of the directory my-csr-directory:</p> <p>On Linux and OS X, the command is:</p> <p>$ ls my-csr-directory/ | xargs -I {} aws iot create-certificate-from-csr --certificate-signing-request file://my-csr-directory/{}</p> <p>This command lists all of the CSRs in my-csr-directory and pipes each CSR file name to the aws iot create-certificate-from-csr AWS CLI command to create a certificate for the corresponding CSR.</p> <p>The aws iot create-certificate-from-csr part of the command can also be run in parallel to speed up the certificate creation process:</p> <p>$ ls my-csr-directory/ | xargs -P 10 -I {} aws iot create-certificate-from-csr --certificate-signing-request file://my-csr-directory/{}</p> <p>On Windows PowerShell, the command to create certificates for all CSRs in my-csr-directory is:</p> <p>&gt; ls -Name my-csr-directory | %{aws iot create-certificate-from-csr --certificate-signing-request file://my-csr-directory/$_}</p> <p>On a Windows command prompt, the command to create certificates for all CSRs in my-csr-directory is:</p> <p>&gt; forfiles /p my-csr-directory /c "cmd /c aws iot create-certificate-from-csr --certificate-signing-request file://@path"</p>
		 * Post certificates
		 * @param {boolean} setAsActive Specifies whether the certificate is active.
		 * @return {CreateCertificateFromCsrResponse} Success
		 */
		CreateCertificateFromCsr(setAsActive: boolean | null | undefined, requestBody: CreateCertificateFromCsrPostBody): Observable<CreateCertificateFromCsrResponse> {
			return this.http.post<CreateCertificateFromCsrResponse>(this.baseUri + 'certificates?setAsActive=' + setAsActive, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Lists the certificates registered in your AWS account.</p> <p>The results are paginated with a default page size of 25. You can use the returned marker to retrieve additional results.</p>
		 * Get certificates
		 * @param {number} pageSize The result page size.
		 * @param {string} marker The marker for the next set of results.
		 * @param {boolean} isAscendingOrder Specifies the order for results. If True, the results are returned in ascending order, based on the creation date.
		 * @return {ListCertificatesResponse} Success
		 */
		ListCertificates(pageSize: number | null | undefined, marker: string | null | undefined, isAscendingOrder: boolean | null | undefined): Observable<ListCertificatesResponse> {
			return this.http.get<ListCertificatesResponse>(this.baseUri + 'certificates?pageSize=' + pageSize + '&marker=' + (marker == null ? '' : encodeURIComponent(marker)) + '&isAscendingOrder=' + isAscendingOrder, {});
		}

		/**
		 * Create a dimension that you can use to limit the scope of a metric used in a security profile for AWS IoT Device Defender. For example, using a <code>TOPIC_FILTER</code> dimension, you can narrow down the scope of the metric only to MQTT topics whose name match the pattern specified in the dimension.
		 * Post dimensions/{name}
		 * @param {string} name A unique identifier for the dimension. Choose something that describes the type and value to make it easy to remember what it does.
		 * @return {CreateDimensionResponse} Success
		 */
		CreateDimension(name: string, requestBody: CreateDimensionPostBody): Observable<CreateDimensionResponse> {
			return this.http.post<CreateDimensionResponse>(this.baseUri + 'dimensions/' + (name == null ? '' : encodeURIComponent(name)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Removes the specified dimension from your AWS account.
		 * Delete dimensions/{name}
		 * @param {string} name The unique identifier for the dimension that you want to delete.
		 * @return {DeleteDimensionResponse} Success
		 */
		DeleteDimension(name: string): Observable<DeleteDimensionResponse> {
			return this.http.delete<DeleteDimensionResponse>(this.baseUri + 'dimensions/' + (name == null ? '' : encodeURIComponent(name)), {});
		}

		/**
		 * Provides details about a dimension that is defined in your AWS account.
		 * Get dimensions/{name}
		 * @param {string} name The unique identifier for the dimension.
		 * @return {DescribeDimensionResponse} Success
		 */
		DescribeDimension(name: string): Observable<DescribeDimensionResponse> {
			return this.http.get<DescribeDimensionResponse>(this.baseUri + 'dimensions/' + (name == null ? '' : encodeURIComponent(name)), {});
		}

		/**
		 * Updates the definition for a dimension. You cannot change the type of a dimension after it is created (you can delete it and re-create it).
		 * Patch dimensions/{name}
		 * @param {string} name A unique identifier for the dimension. Choose something that describes the type and value to make it easy to remember what it does.
		 * @return {UpdateDimensionResponse} Success
		 */
		UpdateDimension(name: string, requestBody: UpdateDimensionPatchBody): Observable<UpdateDimensionResponse> {
			return this.http.patch<UpdateDimensionResponse>(this.baseUri + 'dimensions/' + (name == null ? '' : encodeURIComponent(name)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Creates a domain configuration.</p> <note> <p>The domain configuration feature is in public preview and is subject to change.</p> </note>
		 * Post domainConfigurations/{domainConfigurationName}
		 * @param {string} domainConfigurationName The name of the domain configuration. This value must be unique to a region.
		 * @return {CreateDomainConfigurationResponse} Success
		 */
		CreateDomainConfiguration(domainConfigurationName: string, requestBody: CreateDomainConfigurationPostBody): Observable<CreateDomainConfigurationResponse> {
			return this.http.post<CreateDomainConfigurationResponse>(this.baseUri + 'domainConfigurations/' + (domainConfigurationName == null ? '' : encodeURIComponent(domainConfigurationName)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Deletes the specified domain configuration.</p> <note> <p>The domain configuration feature is in public preview and is subject to change.</p> </note>
		 * Delete domainConfigurations/{domainConfigurationName}
		 * @param {string} domainConfigurationName The name of the domain configuration to be deleted.
		 * @return {DeleteDomainConfigurationResponse} Success
		 */
		DeleteDomainConfiguration(domainConfigurationName: string): Observable<DeleteDomainConfigurationResponse> {
			return this.http.delete<DeleteDomainConfigurationResponse>(this.baseUri + 'domainConfigurations/' + (domainConfigurationName == null ? '' : encodeURIComponent(domainConfigurationName)), {});
		}

		/**
		 * <p>Gets summary information about a domain configuration.</p> <note> <p>The domain configuration feature is in public preview and is subject to change.</p> </note>
		 * Get domainConfigurations/{domainConfigurationName}
		 * @param {string} domainConfigurationName The name of the domain configuration.
		 * @return {DescribeDomainConfigurationResponse} Success
		 */
		DescribeDomainConfiguration(domainConfigurationName: string): Observable<DescribeDomainConfigurationResponse> {
			return this.http.get<DescribeDomainConfigurationResponse>(this.baseUri + 'domainConfigurations/' + (domainConfigurationName == null ? '' : encodeURIComponent(domainConfigurationName)), {});
		}

		/**
		 * <p>Updates values stored in the domain configuration. Domain configurations for default endpoints can't be updated.</p> <note> <p>The domain configuration feature is in public preview and is subject to change.</p> </note>
		 * Put domainConfigurations/{domainConfigurationName}
		 * @param {string} domainConfigurationName The name of the domain configuration to be updated.
		 * @return {UpdateDomainConfigurationResponse} Success
		 */
		UpdateDomainConfiguration(domainConfigurationName: string, requestBody: UpdateDomainConfigurationPutBody): Observable<UpdateDomainConfigurationResponse> {
			return this.http.put<UpdateDomainConfigurationResponse>(this.baseUri + 'domainConfigurations/' + (domainConfigurationName == null ? '' : encodeURIComponent(domainConfigurationName)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Creates a dynamic thing group.
		 * Post dynamic-thing-groups/{thingGroupName}
		 * @param {string} thingGroupName The dynamic thing group name to create.
		 * @return {CreateDynamicThingGroupResponse} Success
		 */
		CreateDynamicThingGroup(thingGroupName: string, requestBody: CreateDynamicThingGroupPostBody): Observable<CreateDynamicThingGroupResponse> {
			return this.http.post<CreateDynamicThingGroupResponse>(this.baseUri + 'dynamic-thing-groups/' + (thingGroupName == null ? '' : encodeURIComponent(thingGroupName)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a dynamic thing group.
		 * Delete dynamic-thing-groups/{thingGroupName}
		 * @param {string} thingGroupName The name of the dynamic thing group to delete.
		 * @param {number} expectedVersion The expected version of the dynamic thing group to delete.
		 * @return {DeleteDynamicThingGroupResponse} Success
		 */
		DeleteDynamicThingGroup(thingGroupName: string, expectedVersion: number | null | undefined): Observable<DeleteDynamicThingGroupResponse> {
			return this.http.delete<DeleteDynamicThingGroupResponse>(this.baseUri + 'dynamic-thing-groups/' + (thingGroupName == null ? '' : encodeURIComponent(thingGroupName)) + '&expectedVersion=' + expectedVersion, {});
		}

		/**
		 * Updates a dynamic thing group.
		 * Patch dynamic-thing-groups/{thingGroupName}
		 * @param {string} thingGroupName The name of the dynamic thing group to update.
		 * @return {UpdateDynamicThingGroupResponse} Success
		 */
		UpdateDynamicThingGroup(thingGroupName: string, requestBody: UpdateDynamicThingGroupPatchBody): Observable<UpdateDynamicThingGroupResponse> {
			return this.http.patch<UpdateDynamicThingGroupResponse>(this.baseUri + 'dynamic-thing-groups/' + (thingGroupName == null ? '' : encodeURIComponent(thingGroupName)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Creates a job.
		 * Put jobs/{jobId}
		 * @param {string} jobId A job identifier which must be unique for your AWS account. We recommend using a UUID. Alpha-numeric characters, "-" and "_" are valid for use here.
		 * @return {CreateJobResponse} Success
		 */
		CreateJob(jobId: string, requestBody: CreateJobPutBody): Observable<CreateJobResponse> {
			return this.http.put<CreateJobResponse>(this.baseUri + 'jobs/' + (jobId == null ? '' : encodeURIComponent(jobId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Deletes a job and its related job executions.</p> <p>Deleting a job may take time, depending on the number of job executions created for the job and various other factors. While the job is being deleted, the status of the job will be shown as "DELETION_IN_PROGRESS". Attempting to delete or cancel a job whose status is already "DELETION_IN_PROGRESS" will result in an error.</p> <p>Only 10 jobs may have status "DELETION_IN_PROGRESS" at the same time, or a LimitExceededException will occur.</p>
		 * Delete jobs/{jobId}
		 * @param {string} jobId <p>The ID of the job to be deleted.</p> <p>After a job deletion is completed, you may reuse this jobId when you create a new job. However, this is not recommended, and you must ensure that your devices are not using the jobId to refer to the deleted job.</p>
		 * @param {boolean} force <p>(Optional) When true, you can delete a job which is "IN_PROGRESS". Otherwise, you can only delete a job which is in a terminal state ("COMPLETED" or "CANCELED") or an exception will occur. The default is false.</p> <note> <p>Deleting a job which is "IN_PROGRESS", will cause a device which is executing the job to be unable to access job information or update the job execution status. Use caution and ensure that each device executing a job which is deleted is able to recover to a valid state.</p> </note>
		 * @return {void} Success
		 */
		DeleteJob(jobId: string, force: boolean | null | undefined): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'jobs/' + (jobId == null ? '' : encodeURIComponent(jobId)) + '&force=' + force, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Describes a job.
		 * Get jobs/{jobId}
		 * @param {string} jobId The unique identifier you assigned to this job when it was created.
		 * @return {DescribeJobResponse} Success
		 */
		DescribeJob(jobId: string): Observable<DescribeJobResponse> {
			return this.http.get<DescribeJobResponse>(this.baseUri + 'jobs/' + (jobId == null ? '' : encodeURIComponent(jobId)), {});
		}

		/**
		 * Updates supported fields of the specified job.
		 * Patch jobs/{jobId}
		 * @param {string} jobId The ID of the job to be updated.
		 * @return {void} Success
		 */
		UpdateJob(jobId: string, requestBody: UpdateJobPatchBody): Observable<HttpResponse<string>> {
			return this.http.patch(this.baseUri + 'jobs/' + (jobId == null ? '' : encodeURIComponent(jobId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Creates a 2048-bit RSA key pair and issues an X.509 certificate using the issued public key. You can also call <code>CreateKeysAndCertificate</code> over MQTT from a device, for more information, see <a href="https://docs.aws.amazon.com/iot/latest/developerguide/provision-wo-cert.html#provision-mqtt-api">Provisioning MQTT API</a>.</p> <p> <b>Note</b> This is the only time AWS IoT issues the private key for this certificate, so it is important to keep it in a secure location.</p>
		 * Post keys-and-certificate
		 * @param {boolean} setAsActive Specifies whether the certificate is active.
		 * @return {CreateKeysAndCertificateResponse} Success
		 */
		CreateKeysAndCertificate(setAsActive: boolean | null | undefined): Observable<CreateKeysAndCertificateResponse> {
			return this.http.post<CreateKeysAndCertificateResponse>(this.baseUri + 'keys-and-certificate?setAsActive=' + setAsActive, null, {});
		}

		/**
		 * Defines an action that can be applied to audit findings by using StartAuditMitigationActionsTask. Each mitigation action can apply only one type of change.
		 * Post mitigationactions/actions/{actionName}
		 * @param {string} actionName A friendly name for the action. Choose a friendly name that accurately describes the action (for example, <code>EnableLoggingAction</code>).
		 * @return {CreateMitigationActionResponse} Success
		 */
		CreateMitigationAction(actionName: string, requestBody: CreateMitigationActionPostBody): Observable<CreateMitigationActionResponse> {
			return this.http.post<CreateMitigationActionResponse>(this.baseUri + 'mitigationactions/actions/' + (actionName == null ? '' : encodeURIComponent(actionName)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a defined mitigation action from your AWS account.
		 * Delete mitigationactions/actions/{actionName}
		 * @param {string} actionName The name of the mitigation action that you want to delete.
		 * @return {DeleteMitigationActionResponse} Success
		 */
		DeleteMitigationAction(actionName: string): Observable<DeleteMitigationActionResponse> {
			return this.http.delete<DeleteMitigationActionResponse>(this.baseUri + 'mitigationactions/actions/' + (actionName == null ? '' : encodeURIComponent(actionName)), {});
		}

		/**
		 * Gets information about a mitigation action.
		 * Get mitigationactions/actions/{actionName}
		 * @param {string} actionName The friendly name that uniquely identifies the mitigation action.
		 * @return {DescribeMitigationActionResponse} Success
		 */
		DescribeMitigationAction(actionName: string): Observable<DescribeMitigationActionResponse> {
			return this.http.get<DescribeMitigationActionResponse>(this.baseUri + 'mitigationactions/actions/' + (actionName == null ? '' : encodeURIComponent(actionName)), {});
		}

		/**
		 * Updates the definition for the specified mitigation action.
		 * Patch mitigationactions/actions/{actionName}
		 * @param {string} actionName The friendly name for the mitigation action. You can't change the name by using <code>UpdateMitigationAction</code>. Instead, you must delete and re-create the mitigation action with the new name.
		 * @return {UpdateMitigationActionResponse} Success
		 */
		UpdateMitigationAction(actionName: string, requestBody: UpdateMitigationActionPatchBody): Observable<UpdateMitigationActionResponse> {
			return this.http.patch<UpdateMitigationActionResponse>(this.baseUri + 'mitigationactions/actions/' + (actionName == null ? '' : encodeURIComponent(actionName)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Creates an AWS IoT OTAUpdate on a target group of things or groups.
		 * Post otaUpdates/{otaUpdateId}
		 * @param {string} otaUpdateId The ID of the OTA update to be created.
		 * @return {CreateOTAUpdateResponse} Success
		 */
		CreateOTAUpdate(otaUpdateId: string, requestBody: CreateOTAUpdatePostBody): Observable<CreateOTAUpdateResponse> {
			return this.http.post<CreateOTAUpdateResponse>(this.baseUri + 'otaUpdates/' + (otaUpdateId == null ? '' : encodeURIComponent(otaUpdateId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Delete an OTA update.
		 * Delete otaUpdates/{otaUpdateId}
		 * @param {string} otaUpdateId The OTA update ID to delete.
		 * @param {boolean} deleteStream Specifies if the stream associated with an OTA update should be deleted when the OTA update is deleted.
		 * @param {boolean} forceDeleteAWSJob Specifies if the AWS Job associated with the OTA update should be deleted with the OTA update is deleted.
		 * @return {DeleteOTAUpdateResponse} Success
		 */
		DeleteOTAUpdate(otaUpdateId: string, deleteStream: boolean | null | undefined, forceDeleteAWSJob: boolean | null | undefined): Observable<DeleteOTAUpdateResponse> {
			return this.http.delete<DeleteOTAUpdateResponse>(this.baseUri + 'otaUpdates/' + (otaUpdateId == null ? '' : encodeURIComponent(otaUpdateId)) + '&deleteStream=' + deleteStream + '&forceDeleteAWSJob=' + forceDeleteAWSJob, {});
		}

		/**
		 * Gets an OTA update.
		 * Get otaUpdates/{otaUpdateId}
		 * @param {string} otaUpdateId The OTA update ID.
		 * @return {GetOTAUpdateResponse} Success
		 */
		GetOTAUpdate(otaUpdateId: string): Observable<GetOTAUpdateResponse> {
			return this.http.get<GetOTAUpdateResponse>(this.baseUri + 'otaUpdates/' + (otaUpdateId == null ? '' : encodeURIComponent(otaUpdateId)), {});
		}

		/**
		 * <p>Creates an AWS IoT policy.</p> <p>The created policy is the default version for the policy. This operation creates a policy version with a version identifier of <b>1</b> and sets <b>1</b> as the policy's default version.</p>
		 * Post policies/{policyName}
		 * @param {string} policyName The policy name.
		 * @return {CreatePolicyResponse} Success
		 */
		CreatePolicy(policyName: string, requestBody: CreatePolicyPostBody): Observable<CreatePolicyResponse> {
			return this.http.post<CreatePolicyResponse>(this.baseUri + 'policies/' + (policyName == null ? '' : encodeURIComponent(policyName)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Deletes the specified policy.</p> <p>A policy cannot be deleted if it has non-default versions or it is attached to any certificate.</p> <p>To delete a policy, use the DeletePolicyVersion API to delete all non-default versions of the policy; use the DetachPrincipalPolicy API to detach the policy from any certificate; and then use the DeletePolicy API to delete the policy.</p> <p>When a policy is deleted using DeletePolicy, its default version is deleted with it.</p>
		 * Delete policies/{policyName}
		 * @param {string} policyName The name of the policy to delete.
		 * @return {void} Success
		 */
		DeletePolicy(policyName: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'policies/' + (policyName == null ? '' : encodeURIComponent(policyName)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets information about the specified policy with the policy document of the default version.
		 * Get policies/{policyName}
		 * @param {string} policyName The name of the policy.
		 * @return {GetPolicyResponse} Success
		 */
		GetPolicy(policyName: string): Observable<GetPolicyResponse> {
			return this.http.get<GetPolicyResponse>(this.baseUri + 'policies/' + (policyName == null ? '' : encodeURIComponent(policyName)), {});
		}

		/**
		 * <p>Creates a new version of the specified AWS IoT policy. To update a policy, create a new policy version. A managed policy can have up to five versions. If the policy has five versions, you must use <a>DeletePolicyVersion</a> to delete an existing version before you create a new one.</p> <p>Optionally, you can set the new version as the policy's default version. The default version is the operative version (that is, the version that is in effect for the certificates to which the policy is attached).</p>
		 * Post policies/{policyName}/version
		 * @param {string} policyName The policy name.
		 * @param {boolean} setAsDefault Specifies whether the policy version is set as the default. When this parameter is true, the new policy version becomes the operative version (that is, the version that is in effect for the certificates to which the policy is attached).
		 * @return {CreatePolicyVersionResponse} Success
		 */
		CreatePolicyVersion(policyName: string, setAsDefault: boolean | null | undefined, requestBody: CreatePolicyVersionPostBody): Observable<CreatePolicyVersionResponse> {
			return this.http.post<CreatePolicyVersionResponse>(this.baseUri + 'policies/' + (policyName == null ? '' : encodeURIComponent(policyName)) + '/version&setAsDefault=' + setAsDefault, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists the versions of the specified policy and identifies the default version.
		 * Get policies/{policyName}/version
		 * @param {string} policyName The policy name.
		 * @return {ListPolicyVersionsResponse} Success
		 */
		ListPolicyVersions(policyName: string): Observable<ListPolicyVersionsResponse> {
			return this.http.get<ListPolicyVersionsResponse>(this.baseUri + 'policies/' + (policyName == null ? '' : encodeURIComponent(policyName)) + '/version', {});
		}

		/**
		 * Creates a provisioning claim.
		 * Post provisioning-templates/{templateName}/provisioning-claim
		 * @param {string} templateName The name of the provisioning template to use.
		 * @return {CreateProvisioningClaimResponse} Success
		 */
		CreateProvisioningClaim(templateName: string): Observable<CreateProvisioningClaimResponse> {
			return this.http.post<CreateProvisioningClaimResponse>(this.baseUri + 'provisioning-templates/' + (templateName == null ? '' : encodeURIComponent(templateName)) + '/provisioning-claim', null, {});
		}

		/**
		 * Creates a fleet provisioning template.
		 * Post provisioning-templates
		 * @return {CreateProvisioningTemplateResponse} Success
		 */
		CreateProvisioningTemplate(requestBody: CreateProvisioningTemplatePostBody): Observable<CreateProvisioningTemplateResponse> {
			return this.http.post<CreateProvisioningTemplateResponse>(this.baseUri + 'provisioning-templates', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists the fleet provisioning templates in your AWS account.
		 * Get provisioning-templates
		 * @param {number} maxResults The maximum number of results to return at one time.
		 * @param {string} nextToken A token to retrieve the next set of results.
		 * @return {ListProvisioningTemplatesResponse} Success
		 */
		ListProvisioningTemplates(maxResults: number | null | undefined, nextToken: string | null | undefined): Observable<ListProvisioningTemplatesResponse> {
			return this.http.get<ListProvisioningTemplatesResponse>(this.baseUri + 'provisioning-templates?maxResults=' + maxResults + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), {});
		}

		/**
		 * Creates a new version of a fleet provisioning template.
		 * Post provisioning-templates/{templateName}/versions
		 * @param {string} templateName The name of the fleet provisioning template.
		 * @param {boolean} setAsDefault Sets a fleet provision template version as the default version.
		 * @return {CreateProvisioningTemplateVersionResponse} Success
		 */
		CreateProvisioningTemplateVersion(templateName: string, setAsDefault: boolean | null | undefined, requestBody: CreateProvisioningTemplateVersionPostBody): Observable<CreateProvisioningTemplateVersionResponse> {
			return this.http.post<CreateProvisioningTemplateVersionResponse>(this.baseUri + 'provisioning-templates/' + (templateName == null ? '' : encodeURIComponent(templateName)) + '/versions&setAsDefault=' + setAsDefault, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * A list of fleet provisioning template versions.
		 * Get provisioning-templates/{templateName}/versions
		 * @param {string} templateName The name of the fleet provisioning template.
		 * @param {number} maxResults The maximum number of results to return at one time.
		 * @param {string} nextToken A token to retrieve the next set of results.
		 * @return {ListProvisioningTemplateVersionsResponse} Success
		 */
		ListProvisioningTemplateVersions(templateName: string, maxResults: number | null | undefined, nextToken: string | null | undefined): Observable<ListProvisioningTemplateVersionsResponse> {
			return this.http.get<ListProvisioningTemplateVersionsResponse>(this.baseUri + 'provisioning-templates/' + (templateName == null ? '' : encodeURIComponent(templateName)) + '/versions&maxResults=' + maxResults + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), {});
		}

		/**
		 * Creates a role alias.
		 * Post role-aliases/{roleAlias}
		 * @param {string} roleAlias The role alias that points to a role ARN. This allows you to change the role without having to update the device.
		 * @return {CreateRoleAliasResponse} Success
		 */
		CreateRoleAlias(roleAlias: string, requestBody: CreateRoleAliasPostBody): Observable<CreateRoleAliasResponse> {
			return this.http.post<CreateRoleAliasResponse>(this.baseUri + 'role-aliases/' + (roleAlias == null ? '' : encodeURIComponent(roleAlias)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a role alias
		 * Delete role-aliases/{roleAlias}
		 * @param {string} roleAlias The role alias to delete.
		 * @return {DeleteRoleAliasResponse} Success
		 */
		DeleteRoleAlias(roleAlias: string): Observable<DeleteRoleAliasResponse> {
			return this.http.delete<DeleteRoleAliasResponse>(this.baseUri + 'role-aliases/' + (roleAlias == null ? '' : encodeURIComponent(roleAlias)), {});
		}

		/**
		 * Describes a role alias.
		 * Get role-aliases/{roleAlias}
		 * @param {string} roleAlias The role alias to describe.
		 * @return {DescribeRoleAliasResponse} Success
		 */
		DescribeRoleAlias(roleAlias: string): Observable<DescribeRoleAliasResponse> {
			return this.http.get<DescribeRoleAliasResponse>(this.baseUri + 'role-aliases/' + (roleAlias == null ? '' : encodeURIComponent(roleAlias)), {});
		}

		/**
		 * Updates a role alias.
		 * Put role-aliases/{roleAlias}
		 * @param {string} roleAlias The role alias to update.
		 * @return {UpdateRoleAliasResponse} Success
		 */
		UpdateRoleAlias(roleAlias: string, requestBody: UpdateRoleAliasPutBody): Observable<UpdateRoleAliasResponse> {
			return this.http.put<UpdateRoleAliasResponse>(this.baseUri + 'role-aliases/' + (roleAlias == null ? '' : encodeURIComponent(roleAlias)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Creates a scheduled audit that is run at a specified time interval.
		 * Post audit/scheduledaudits/{scheduledAuditName}
		 * @param {string} scheduledAuditName The name you want to give to the scheduled audit. (Max. 128 chars)
		 * @return {CreateScheduledAuditResponse} Success
		 */
		CreateScheduledAudit(scheduledAuditName: string, requestBody: CreateScheduledAuditPostBody): Observable<CreateScheduledAuditResponse> {
			return this.http.post<CreateScheduledAuditResponse>(this.baseUri + 'audit/scheduledaudits/' + (scheduledAuditName == null ? '' : encodeURIComponent(scheduledAuditName)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a scheduled audit.
		 * Delete audit/scheduledaudits/{scheduledAuditName}
		 * @param {string} scheduledAuditName The name of the scheduled audit you want to delete.
		 * @return {DeleteScheduledAuditResponse} Success
		 */
		DeleteScheduledAudit(scheduledAuditName: string): Observable<DeleteScheduledAuditResponse> {
			return this.http.delete<DeleteScheduledAuditResponse>(this.baseUri + 'audit/scheduledaudits/' + (scheduledAuditName == null ? '' : encodeURIComponent(scheduledAuditName)), {});
		}

		/**
		 * Gets information about a scheduled audit.
		 * Get audit/scheduledaudits/{scheduledAuditName}
		 * @param {string} scheduledAuditName The name of the scheduled audit whose information you want to get.
		 * @return {DescribeScheduledAuditResponse} Success
		 */
		DescribeScheduledAudit(scheduledAuditName: string): Observable<DescribeScheduledAuditResponse> {
			return this.http.get<DescribeScheduledAuditResponse>(this.baseUri + 'audit/scheduledaudits/' + (scheduledAuditName == null ? '' : encodeURIComponent(scheduledAuditName)), {});
		}

		/**
		 * Updates a scheduled audit, including which checks are performed and how often the audit takes place.
		 * Patch audit/scheduledaudits/{scheduledAuditName}
		 * @param {string} scheduledAuditName The name of the scheduled audit. (Max. 128 chars)
		 * @return {UpdateScheduledAuditResponse} Success
		 */
		UpdateScheduledAudit(scheduledAuditName: string, requestBody: UpdateScheduledAuditPatchBody): Observable<UpdateScheduledAuditResponse> {
			return this.http.patch<UpdateScheduledAuditResponse>(this.baseUri + 'audit/scheduledaudits/' + (scheduledAuditName == null ? '' : encodeURIComponent(scheduledAuditName)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Creates a Device Defender security profile.
		 * Post security-profiles/{securityProfileName}
		 * @param {string} securityProfileName The name you are giving to the security profile.
		 * @return {CreateSecurityProfileResponse} Success
		 */
		CreateSecurityProfile(securityProfileName: string, requestBody: CreateSecurityProfilePostBody): Observable<CreateSecurityProfileResponse> {
			return this.http.post<CreateSecurityProfileResponse>(this.baseUri + 'security-profiles/' + (securityProfileName == null ? '' : encodeURIComponent(securityProfileName)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a Device Defender security profile.
		 * Delete security-profiles/{securityProfileName}
		 * @param {string} securityProfileName The name of the security profile to be deleted.
		 * @param {number} expectedVersion The expected version of the security profile. A new version is generated whenever the security profile is updated. If you specify a value that is different from the actual version, a <code>VersionConflictException</code> is thrown.
		 * @return {DeleteSecurityProfileResponse} Success
		 */
		DeleteSecurityProfile(securityProfileName: string, expectedVersion: number | null | undefined): Observable<DeleteSecurityProfileResponse> {
			return this.http.delete<DeleteSecurityProfileResponse>(this.baseUri + 'security-profiles/' + (securityProfileName == null ? '' : encodeURIComponent(securityProfileName)) + '&expectedVersion=' + expectedVersion, {});
		}

		/**
		 * Gets information about a Device Defender security profile.
		 * Get security-profiles/{securityProfileName}
		 * @param {string} securityProfileName The name of the security profile whose information you want to get.
		 * @return {DescribeSecurityProfileResponse} Success
		 */
		DescribeSecurityProfile(securityProfileName: string): Observable<DescribeSecurityProfileResponse> {
			return this.http.get<DescribeSecurityProfileResponse>(this.baseUri + 'security-profiles/' + (securityProfileName == null ? '' : encodeURIComponent(securityProfileName)), {});
		}

		/**
		 * Updates a Device Defender security profile.
		 * Patch security-profiles/{securityProfileName}
		 * @param {string} securityProfileName The name of the security profile you want to update.
		 * @param {number} expectedVersion The expected version of the security profile. A new version is generated whenever the security profile is updated. If you specify a value that is different from the actual version, a <code>VersionConflictException</code> is thrown.
		 * @return {UpdateSecurityProfileResponse} Success
		 */
		UpdateSecurityProfile(securityProfileName: string, expectedVersion: number | null | undefined, requestBody: UpdateSecurityProfilePatchBody): Observable<UpdateSecurityProfileResponse> {
			return this.http.patch<UpdateSecurityProfileResponse>(this.baseUri + 'security-profiles/' + (securityProfileName == null ? '' : encodeURIComponent(securityProfileName)) + '&expectedVersion=' + expectedVersion, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Creates a stream for delivering one or more large files in chunks over MQTT. A stream transports data bytes in chunks or blocks packaged as MQTT messages from a source like S3. You can have one or more files associated with a stream.
		 * Post streams/{streamId}
		 * @param {string} streamId The stream ID.
		 * @return {CreateStreamResponse} Success
		 */
		CreateStream(streamId: string, requestBody: CreateStreamPostBody): Observable<CreateStreamResponse> {
			return this.http.post<CreateStreamResponse>(this.baseUri + 'streams/' + (streamId == null ? '' : encodeURIComponent(streamId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a stream.
		 * Delete streams/{streamId}
		 * @param {string} streamId The stream ID.
		 * @return {DeleteStreamResponse} Success
		 */
		DeleteStream(streamId: string): Observable<DeleteStreamResponse> {
			return this.http.delete<DeleteStreamResponse>(this.baseUri + 'streams/' + (streamId == null ? '' : encodeURIComponent(streamId)), {});
		}

		/**
		 * Gets information about a stream.
		 * Get streams/{streamId}
		 * @param {string} streamId The stream ID.
		 * @return {DescribeStreamResponse} Success
		 */
		DescribeStream(streamId: string): Observable<DescribeStreamResponse> {
			return this.http.get<DescribeStreamResponse>(this.baseUri + 'streams/' + (streamId == null ? '' : encodeURIComponent(streamId)), {});
		}

		/**
		 * Updates an existing stream. The stream version will be incremented by one.
		 * Put streams/{streamId}
		 * @param {string} streamId The stream ID.
		 * @return {UpdateStreamResponse} Success
		 */
		UpdateStream(streamId: string, requestBody: UpdateStreamPutBody): Observable<UpdateStreamResponse> {
			return this.http.put<UpdateStreamResponse>(this.baseUri + 'streams/' + (streamId == null ? '' : encodeURIComponent(streamId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Creates a thing record in the registry. If this call is made multiple times using the same thing name and configuration, the call will succeed. If this call is made with the same thing name but different configuration a <code>ResourceAlreadyExistsException</code> is thrown.</p> <note> <p>This is a control plane operation. See <a href="https://docs.aws.amazon.com/iot/latest/developerguide/iot-authorization.html">Authorization</a> for information about authorizing control plane actions.</p> </note>
		 * Post things/{thingName}
		 * @param {string} thingName <p>The name of the thing to create.</p> <p>You can't change a thing's name after you create it. To change a thing's name, you must create a new thing, give it the new name, and then delete the old thing.</p>
		 * @return {CreateThingResponse} Success
		 */
		CreateThing(thingName: string, requestBody: CreateThingPostBody): Observable<CreateThingResponse> {
			return this.http.post<CreateThingResponse>(this.baseUri + 'things/' + (thingName == null ? '' : encodeURIComponent(thingName)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes the specified thing. Returns successfully with no error if the deletion is successful or you specify a thing that doesn't exist.
		 * Delete things/{thingName}
		 * @param {string} thingName The name of the thing to delete.
		 * @param {number} expectedVersion The expected version of the thing record in the registry. If the version of the record in the registry does not match the expected version specified in the request, the <code>DeleteThing</code> request is rejected with a <code>VersionConflictException</code>.
		 * @return {DeleteThingResponse} Success
		 */
		DeleteThing(thingName: string, expectedVersion: number | null | undefined): Observable<DeleteThingResponse> {
			return this.http.delete<DeleteThingResponse>(this.baseUri + 'things/' + (thingName == null ? '' : encodeURIComponent(thingName)) + '&expectedVersion=' + expectedVersion, {});
		}

		/**
		 * Gets information about the specified thing.
		 * Get things/{thingName}
		 * @param {string} thingName The name of the thing.
		 * @return {DescribeThingResponse} Success
		 */
		DescribeThing(thingName: string): Observable<DescribeThingResponse> {
			return this.http.get<DescribeThingResponse>(this.baseUri + 'things/' + (thingName == null ? '' : encodeURIComponent(thingName)), {});
		}

		/**
		 * Updates the data for a thing.
		 * Patch things/{thingName}
		 * @param {string} thingName <p>The name of the thing to update.</p> <p>You can't change a thing's name. To change a thing's name, you must create a new thing, give it the new name, and then delete the old thing.</p>
		 * @return {UpdateThingResponse} Success
		 */
		UpdateThing(thingName: string, requestBody: UpdateThingPatchBody): Observable<UpdateThingResponse> {
			return this.http.patch<UpdateThingResponse>(this.baseUri + 'things/' + (thingName == null ? '' : encodeURIComponent(thingName)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Create a thing group.</p> <note> <p>This is a control plane operation. See <a href="https://docs.aws.amazon.com/iot/latest/developerguide/iot-authorization.html">Authorization</a> for information about authorizing control plane actions.</p> </note>
		 * Post thing-groups/{thingGroupName}
		 * @param {string} thingGroupName The thing group name to create.
		 * @return {CreateThingGroupResponse} Success
		 */
		CreateThingGroup(thingGroupName: string, requestBody: CreateThingGroupPostBody): Observable<CreateThingGroupResponse> {
			return this.http.post<CreateThingGroupResponse>(this.baseUri + 'thing-groups/' + (thingGroupName == null ? '' : encodeURIComponent(thingGroupName)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a thing group.
		 * Delete thing-groups/{thingGroupName}
		 * @param {string} thingGroupName The name of the thing group to delete.
		 * @param {number} expectedVersion The expected version of the thing group to delete.
		 * @return {DeleteThingGroupResponse} Success
		 */
		DeleteThingGroup(thingGroupName: string, expectedVersion: number | null | undefined): Observable<DeleteThingGroupResponse> {
			return this.http.delete<DeleteThingGroupResponse>(this.baseUri + 'thing-groups/' + (thingGroupName == null ? '' : encodeURIComponent(thingGroupName)) + '&expectedVersion=' + expectedVersion, {});
		}

		/**
		 * Describe a thing group.
		 * Get thing-groups/{thingGroupName}
		 * @param {string} thingGroupName The name of the thing group.
		 * @return {DescribeThingGroupResponse} Success
		 */
		DescribeThingGroup(thingGroupName: string): Observable<DescribeThingGroupResponse> {
			return this.http.get<DescribeThingGroupResponse>(this.baseUri + 'thing-groups/' + (thingGroupName == null ? '' : encodeURIComponent(thingGroupName)), {});
		}

		/**
		 * Update a thing group.
		 * Patch thing-groups/{thingGroupName}
		 * @param {string} thingGroupName The thing group to update.
		 * @return {UpdateThingGroupResponse} Success
		 */
		UpdateThingGroup(thingGroupName: string, requestBody: UpdateThingGroupPatchBody): Observable<UpdateThingGroupResponse> {
			return this.http.patch<UpdateThingGroupResponse>(this.baseUri + 'thing-groups/' + (thingGroupName == null ? '' : encodeURIComponent(thingGroupName)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Creates a new thing type.
		 * Post thing-types/{thingTypeName}
		 * @param {string} thingTypeName The name of the thing type.
		 * @return {CreateThingTypeResponse} Success
		 */
		CreateThingType(thingTypeName: string, requestBody: CreateThingTypePostBody): Observable<CreateThingTypeResponse> {
			return this.http.post<CreateThingTypeResponse>(this.baseUri + 'thing-types/' + (thingTypeName == null ? '' : encodeURIComponent(thingTypeName)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes the specified thing type. You cannot delete a thing type if it has things associated with it. To delete a thing type, first mark it as deprecated by calling <a>DeprecateThingType</a>, then remove any associated things by calling <a>UpdateThing</a> to change the thing type on any associated thing, and finally use <a>DeleteThingType</a> to delete the thing type.
		 * Delete thing-types/{thingTypeName}
		 * @param {string} thingTypeName The name of the thing type.
		 * @return {DeleteThingTypeResponse} Success
		 */
		DeleteThingType(thingTypeName: string): Observable<DeleteThingTypeResponse> {
			return this.http.delete<DeleteThingTypeResponse>(this.baseUri + 'thing-types/' + (thingTypeName == null ? '' : encodeURIComponent(thingTypeName)), {});
		}

		/**
		 * Gets information about the specified thing type.
		 * Get thing-types/{thingTypeName}
		 * @param {string} thingTypeName The name of the thing type.
		 * @return {DescribeThingTypeResponse} Success
		 */
		DescribeThingType(thingTypeName: string): Observable<DescribeThingTypeResponse> {
			return this.http.get<DescribeThingTypeResponse>(this.baseUri + 'thing-types/' + (thingTypeName == null ? '' : encodeURIComponent(thingTypeName)), {});
		}

		/**
		 * Creates a rule. Creating rules is an administrator-level action. Any user who has permission to create rules will be able to access data processed by the rule.
		 * Post rules/{ruleName}
		 * @param {string} ruleName The name of the rule.
		 * @return {void} Success
		 */
		CreateTopicRule(ruleName: string, requestBody: CreateTopicRulePostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'rules/' + (ruleName == null ? '' : encodeURIComponent(ruleName)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Deletes the rule.
		 * Delete rules/{ruleName}
		 * @param {string} ruleName The name of the rule.
		 * @return {void} Success
		 */
		DeleteTopicRule(ruleName: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'rules/' + (ruleName == null ? '' : encodeURIComponent(ruleName)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets information about the rule.
		 * Get rules/{ruleName}
		 * @param {string} ruleName The name of the rule.
		 * @return {GetTopicRuleResponse} Success
		 */
		GetTopicRule(ruleName: string): Observable<GetTopicRuleResponse> {
			return this.http.get<GetTopicRuleResponse>(this.baseUri + 'rules/' + (ruleName == null ? '' : encodeURIComponent(ruleName)), {});
		}

		/**
		 * Replaces the rule. You must specify all parameters for the new rule. Creating rules is an administrator-level action. Any user who has permission to create rules will be able to access data processed by the rule.
		 * Patch rules/{ruleName}
		 * @param {string} ruleName The name of the rule.
		 * @return {void} Success
		 */
		ReplaceTopicRule(ruleName: string, requestBody: ReplaceTopicRulePatchBody): Observable<HttpResponse<string>> {
			return this.http.patch(this.baseUri + 'rules/' + (ruleName == null ? '' : encodeURIComponent(ruleName)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Creates a topic rule destination. The destination must be confirmed prior to use.
		 * Post destinations
		 * @return {CreateTopicRuleDestinationResponse} Success
		 */
		CreateTopicRuleDestination(requestBody: CreateTopicRuleDestinationPostBody): Observable<CreateTopicRuleDestinationResponse> {
			return this.http.post<CreateTopicRuleDestinationResponse>(this.baseUri + 'destinations', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists all the topic rule destinations in your AWS account.
		 * Get destinations
		 * @param {number} maxResults The maximum number of results to return at one time.
		 * @param {string} nextToken The token to retrieve the next set of results.
		 * @return {ListTopicRuleDestinationsResponse} Success
		 */
		ListTopicRuleDestinations(maxResults: number | null | undefined, nextToken: string | null | undefined): Observable<ListTopicRuleDestinationsResponse> {
			return this.http.get<ListTopicRuleDestinationsResponse>(this.baseUri + 'destinations?maxResults=' + maxResults + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), {});
		}

		/**
		 * Updates a topic rule destination. You use this to change the status, endpoint URL, or confirmation URL of the destination.
		 * Patch destinations
		 * @return {UpdateTopicRuleDestinationResponse} Success
		 */
		UpdateTopicRuleDestination(requestBody: UpdateTopicRuleDestinationPatchBody): Observable<UpdateTopicRuleDestinationResponse> {
			return this.http.patch<UpdateTopicRuleDestinationResponse>(this.baseUri + 'destinations', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Restores the default settings for Device Defender audits for this account. Any configuration data you entered is deleted and all audit checks are reset to disabled.
		 * Delete audit/configuration
		 * @param {boolean} deleteScheduledAudits If true, all scheduled audits are deleted.
		 * @return {DeleteAccountAuditConfigurationResponse} Success
		 */
		DeleteAccountAuditConfiguration(deleteScheduledAudits: boolean | null | undefined): Observable<DeleteAccountAuditConfigurationResponse> {
			return this.http.delete<DeleteAccountAuditConfigurationResponse>(this.baseUri + 'audit/configuration?deleteScheduledAudits=' + deleteScheduledAudits, {});
		}

		/**
		 * Gets information about the Device Defender audit settings for this account. Settings include how audit notifications are sent and which audit checks are enabled or disabled.
		 * Get audit/configuration
		 * @return {DescribeAccountAuditConfigurationResponse} Success
		 */
		DescribeAccountAuditConfiguration(): Observable<DescribeAccountAuditConfigurationResponse> {
			return this.http.get<DescribeAccountAuditConfigurationResponse>(this.baseUri + 'audit/configuration', {});
		}

		/**
		 * Configures or reconfigures the Device Defender audit settings for this account. Settings include how audit notifications are sent and which audit checks are enabled or disabled.
		 * Patch audit/configuration
		 * @return {UpdateAccountAuditConfigurationResponse} Success
		 */
		UpdateAccountAuditConfiguration(requestBody: UpdateAccountAuditConfigurationPatchBody): Observable<UpdateAccountAuditConfigurationResponse> {
			return this.http.patch<UpdateAccountAuditConfigurationResponse>(this.baseUri + 'audit/configuration', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a registered CA certificate.
		 * Delete cacertificate/{caCertificateId}
		 * @param {string} caCertificateId The ID of the certificate to delete. (The last part of the certificate ARN contains the certificate ID.)
		 * @return {DeleteCACertificateResponse} Success
		 */
		DeleteCACertificate(caCertificateId: string): Observable<DeleteCACertificateResponse> {
			return this.http.delete<DeleteCACertificateResponse>(this.baseUri + 'cacertificate/' + (caCertificateId == null ? '' : encodeURIComponent(caCertificateId)), {});
		}

		/**
		 * Describes a registered CA certificate.
		 * Get cacertificate/{caCertificateId}
		 * @param {string} caCertificateId The CA certificate identifier.
		 * @return {DescribeCACertificateResponse} Success
		 */
		DescribeCACertificate(caCertificateId: string): Observable<DescribeCACertificateResponse> {
			return this.http.get<DescribeCACertificateResponse>(this.baseUri + 'cacertificate/' + (caCertificateId == null ? '' : encodeURIComponent(caCertificateId)), {});
		}

		/**
		 * Updates a registered CA certificate.
		 * Put cacertificate/{caCertificateId}
		 * @param {string} caCertificateId The CA certificate identifier.
		 * @param {AuthorizerDescriptionStatus} newStatus <p>The updated status of the CA certificate.</p> <p> <b>Note:</b> The status value REGISTER_INACTIVE is deprecated and should not be used.</p>
		 * @param {CACertificateDescriptionAutoRegistrationStatus} newAutoRegistrationStatus The new value for the auto registration status. Valid values are: "ENABLE" or "DISABLE".
		 * @return {void} Success
		 */
		UpdateCACertificate(caCertificateId: string, newStatus: AuthorizerDescriptionStatus | null | undefined, newAutoRegistrationStatus: CACertificateDescriptionAutoRegistrationStatus | null | undefined, requestBody: UpdateCACertificatePutBody): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'cacertificate/' + (caCertificateId == null ? '' : encodeURIComponent(caCertificateId)) + '&newStatus=' + newStatus + '&newAutoRegistrationStatus=' + newAutoRegistrationStatus, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Deletes the specified certificate.</p> <p>A certificate cannot be deleted if it has a policy or IoT thing attached to it or if its status is set to ACTIVE. To delete a certificate, first use the <a>DetachPrincipalPolicy</a> API to detach all policies. Next, use the <a>UpdateCertificate</a> API to set the certificate to the INACTIVE status.</p>
		 * Delete certificates/{certificateId}
		 * @param {string} certificateId The ID of the certificate. (The last part of the certificate ARN contains the certificate ID.)
		 * @param {boolean} forceDelete Forces the deletion of a certificate if it is inactive and is not attached to an IoT thing.
		 * @return {void} Success
		 */
		DeleteCertificate(certificateId: string, forceDelete: boolean | null | undefined): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'certificates/' + (certificateId == null ? '' : encodeURIComponent(certificateId)) + '&forceDelete=' + forceDelete, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets information about the specified certificate.
		 * Get certificates/{certificateId}
		 * @param {string} certificateId The ID of the certificate. (The last part of the certificate ARN contains the certificate ID.)
		 * @return {DescribeCertificateResponse} Success
		 */
		DescribeCertificate(certificateId: string): Observable<DescribeCertificateResponse> {
			return this.http.get<DescribeCertificateResponse>(this.baseUri + 'certificates/' + (certificateId == null ? '' : encodeURIComponent(certificateId)), {});
		}

		/**
		 * Deletes a job execution.
		 * Delete things/{thingName}/jobs/{jobId}/executionNumber/{executionNumber}
		 * @param {string} jobId The ID of the job whose execution on a particular device will be deleted.
		 * @param {string} thingName The name of the thing whose job execution will be deleted.
		 * @param {number} executionNumber <p>The ID of the job execution to be deleted. The <code>executionNumber</code> refers to the execution of a particular job on a particular device.</p> <p>Note that once a job execution is deleted, the <code>executionNumber</code> may be reused by IoT, so be sure you get and use the correct value here.</p>
		 * @param {boolean} force <p>(Optional) When true, you can delete a job execution which is "IN_PROGRESS". Otherwise, you can only delete a job execution which is in a terminal state ("SUCCEEDED", "FAILED", "REJECTED", "REMOVED" or "CANCELED") or an exception will occur. The default is false.</p> <note> <p>Deleting a job execution which is "IN_PROGRESS", will cause the device to be unable to access job information or update the job execution status. Use caution and ensure that the device is able to recover to a valid state.</p> </note>
		 * @return {void} Success
		 */
		DeleteJobExecution(jobId: string, thingName: string, executionNumber: number, force: boolean | null | undefined): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'things/' + (thingName == null ? '' : encodeURIComponent(thingName)) + '/jobs/' + (jobId == null ? '' : encodeURIComponent(jobId)) + '/executionNumber/' + executionNumber + '&force=' + force, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Deletes the specified version of the specified policy. You cannot delete the default version of a policy using this API. To delete the default version of a policy, use <a>DeletePolicy</a>. To find out which version of a policy is marked as the default version, use ListPolicyVersions.
		 * Delete policies/{policyName}/version/{policyVersionId}
		 * @param {string} policyName The name of the policy.
		 * @param {string} policyVersionId The policy version ID.
		 * @return {void} Success
		 */
		DeletePolicyVersion(policyName: string, policyVersionId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'policies/' + (policyName == null ? '' : encodeURIComponent(policyName)) + '/version/' + (policyVersionId == null ? '' : encodeURIComponent(policyVersionId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets information about the specified policy version.
		 * Get policies/{policyName}/version/{policyVersionId}
		 * @param {string} policyName The name of the policy.
		 * @param {string} policyVersionId The policy version ID.
		 * @return {GetPolicyVersionResponse} Success
		 */
		GetPolicyVersion(policyName: string, policyVersionId: string): Observable<GetPolicyVersionResponse> {
			return this.http.get<GetPolicyVersionResponse>(this.baseUri + 'policies/' + (policyName == null ? '' : encodeURIComponent(policyName)) + '/version/' + (policyVersionId == null ? '' : encodeURIComponent(policyVersionId)), {});
		}

		/**
		 * Sets the specified version of the specified policy as the policy's default (operative) version. This action affects all certificates to which the policy is attached. To list the principals the policy is attached to, use the ListPrincipalPolicy API.
		 * Patch policies/{policyName}/version/{policyVersionId}
		 * @param {string} policyName The policy name.
		 * @param {string} policyVersionId The policy version ID.
		 * @return {void} Success
		 */
		SetDefaultPolicyVersion(policyName: string, policyVersionId: string): Observable<HttpResponse<string>> {
			return this.http.patch(this.baseUri + 'policies/' + (policyName == null ? '' : encodeURIComponent(policyName)) + '/version/' + (policyVersionId == null ? '' : encodeURIComponent(policyVersionId)), null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Deletes a fleet provisioning template.
		 * Delete provisioning-templates/{templateName}
		 * @param {string} templateName The name of the fleet provision template to delete.
		 * @return {DeleteProvisioningTemplateResponse} Success
		 */
		DeleteProvisioningTemplate(templateName: string): Observable<DeleteProvisioningTemplateResponse> {
			return this.http.delete<DeleteProvisioningTemplateResponse>(this.baseUri + 'provisioning-templates/' + (templateName == null ? '' : encodeURIComponent(templateName)), {});
		}

		/**
		 * Returns information about a fleet provisioning template.
		 * Get provisioning-templates/{templateName}
		 * @param {string} templateName The name of the fleet provisioning template.
		 * @return {DescribeProvisioningTemplateResponse} Success
		 */
		DescribeProvisioningTemplate(templateName: string): Observable<DescribeProvisioningTemplateResponse> {
			return this.http.get<DescribeProvisioningTemplateResponse>(this.baseUri + 'provisioning-templates/' + (templateName == null ? '' : encodeURIComponent(templateName)), {});
		}

		/**
		 * Updates a fleet provisioning template.
		 * Patch provisioning-templates/{templateName}
		 * @param {string} templateName The name of the fleet provisioning template.
		 * @return {UpdateProvisioningTemplateResponse} Success
		 */
		UpdateProvisioningTemplate(templateName: string, requestBody: UpdateProvisioningTemplatePatchBody): Observable<UpdateProvisioningTemplateResponse> {
			return this.http.patch<UpdateProvisioningTemplateResponse>(this.baseUri + 'provisioning-templates/' + (templateName == null ? '' : encodeURIComponent(templateName)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a fleet provisioning template version.
		 * Delete provisioning-templates/{templateName}/versions/{versionId}
		 * @param {string} templateName The name of the fleet provisioning template version to delete.
		 * @param {number} versionId The fleet provisioning template version ID to delete.
		 * @return {DeleteProvisioningTemplateVersionResponse} Success
		 */
		DeleteProvisioningTemplateVersion(templateName: string, versionId: number): Observable<DeleteProvisioningTemplateVersionResponse> {
			return this.http.delete<DeleteProvisioningTemplateVersionResponse>(this.baseUri + 'provisioning-templates/' + (templateName == null ? '' : encodeURIComponent(templateName)) + '/versions/' + versionId, {});
		}

		/**
		 * Returns information about a fleet provisioning template version.
		 * Get provisioning-templates/{templateName}/versions/{versionId}
		 * @param {string} templateName The template name.
		 * @param {number} versionId The fleet provisioning template version ID.
		 * @return {DescribeProvisioningTemplateVersionResponse} Success
		 */
		DescribeProvisioningTemplateVersion(templateName: string, versionId: number): Observable<DescribeProvisioningTemplateVersionResponse> {
			return this.http.get<DescribeProvisioningTemplateVersionResponse>(this.baseUri + 'provisioning-templates/' + (templateName == null ? '' : encodeURIComponent(templateName)) + '/versions/' + versionId, {});
		}

		/**
		 * Deletes a CA certificate registration code.
		 * Delete registrationcode
		 * @return {DeleteRegistrationCodeResponse} Success
		 */
		DeleteRegistrationCode(): Observable<DeleteRegistrationCodeResponse> {
			return this.http.delete<DeleteRegistrationCodeResponse>(this.baseUri + 'registrationcode', {});
		}

		/**
		 * Gets a registration code used to register a CA certificate with AWS IoT.
		 * Get registrationcode
		 * @return {GetRegistrationCodeResponse} Success
		 */
		GetRegistrationCode(): Observable<GetRegistrationCodeResponse> {
			return this.http.get<GetRegistrationCodeResponse>(this.baseUri + 'registrationcode', {});
		}

		/**
		 * Deletes a topic rule destination.
		 * Delete destinations/{arn}
		 * @param {string} arn The ARN of the topic rule destination to delete.
		 * @return {DeleteTopicRuleDestinationResponse} Success
		 */
		DeleteTopicRuleDestination(arn: string): Observable<DeleteTopicRuleDestinationResponse> {
			return this.http.delete<DeleteTopicRuleDestinationResponse>(this.baseUri + 'destinations/' + (arn == null ? '' : encodeURIComponent(arn)), {});
		}

		/**
		 * Gets information about a topic rule destination.
		 * Get destinations/{arn}
		 * @param {string} arn The ARN of the topic rule destination.
		 * @return {GetTopicRuleDestinationResponse} Success
		 */
		GetTopicRuleDestination(arn: string): Observable<GetTopicRuleDestinationResponse> {
			return this.http.get<GetTopicRuleDestinationResponse>(this.baseUri + 'destinations/' + (arn == null ? '' : encodeURIComponent(arn)), {});
		}

		/**
		 * Deletes a logging level.
		 * Delete v2LoggingLevel#targetType&targetName
		 * @param {LogTargetTargetType} targetType The type of resource for which you are configuring logging. Must be <code>THING_Group</code>.
		 * @param {string} targetName The name of the resource for which you are configuring logging.
		 * @return {void} Success
		 */
		DeleteV2LoggingLevel(targetType: LogTargetTargetType, targetName: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'v2LoggingLevel#targetType&targetName?targetType=' + targetType + '&targetName=' + (targetName == null ? '' : encodeURIComponent(targetName)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Deprecates a thing type. You can not associate new things with deprecated thing type.
		 * Post thing-types/{thingTypeName}/deprecate
		 * @param {string} thingTypeName The name of the thing type to deprecate.
		 * @return {DeprecateThingTypeResponse} Success
		 */
		DeprecateThingType(thingTypeName: string, requestBody: DeprecateThingTypePostBody): Observable<DeprecateThingTypeResponse> {
			return this.http.post<DeprecateThingTypeResponse>(this.baseUri + 'thing-types/' + (thingTypeName == null ? '' : encodeURIComponent(thingTypeName)) + '/deprecate', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets information about a single audit finding. Properties include the reason for noncompliance, the severity of the issue, and when the audit that returned the finding was started.
		 * Get audit/findings/{findingId}
		 * @param {string} findingId A unique identifier for a single audit finding. You can use this identifier to apply mitigation actions to the finding.
		 * @return {DescribeAuditFindingResponse} Success
		 */
		DescribeAuditFinding(findingId: string): Observable<DescribeAuditFindingResponse> {
			return this.http.get<DescribeAuditFindingResponse>(this.baseUri + 'audit/findings/' + (findingId == null ? '' : encodeURIComponent(findingId)), {});
		}

		/**
		 * Gets information about an audit mitigation task that is used to apply mitigation actions to a set of audit findings. Properties include the actions being applied, the audit checks to which they're being applied, the task status, and aggregated task statistics.
		 * Get audit/mitigationactions/tasks/{taskId}
		 * @param {string} taskId The unique identifier for the audit mitigation task.
		 * @return {DescribeAuditMitigationActionsTaskResponse} Success
		 */
		DescribeAuditMitigationActionsTask(taskId: string): Observable<DescribeAuditMitigationActionsTaskResponse> {
			return this.http.get<DescribeAuditMitigationActionsTaskResponse>(this.baseUri + 'audit/mitigationactions/tasks/' + (taskId == null ? '' : encodeURIComponent(taskId)), {});
		}

		/**
		 * Starts a task that applies a set of mitigation actions to the specified target.
		 * Post audit/mitigationactions/tasks/{taskId}
		 * @param {string} taskId A unique identifier for the task. You can use this identifier to check the status of the task or to cancel it.
		 * @return {StartAuditMitigationActionsTaskResponse} Success
		 */
		StartAuditMitigationActionsTask(taskId: string, requestBody: StartAuditMitigationActionsTaskPostBody): Observable<StartAuditMitigationActionsTaskResponse> {
			return this.http.post<StartAuditMitigationActionsTaskResponse>(this.baseUri + 'audit/mitigationactions/tasks/' + (taskId == null ? '' : encodeURIComponent(taskId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets information about a Device Defender audit.
		 * Get audit/tasks/{taskId}
		 * @param {string} taskId The ID of the audit whose information you want to get.
		 * @return {DescribeAuditTaskResponse} Success
		 */
		DescribeAuditTask(taskId: string): Observable<DescribeAuditTaskResponse> {
			return this.http.get<DescribeAuditTaskResponse>(this.baseUri + 'audit/tasks/' + (taskId == null ? '' : encodeURIComponent(taskId)), {});
		}

		/**
		 * Returns a unique endpoint specific to the AWS account making the call.
		 * Get endpoint
		 * @param {string} endpointType <p>The endpoint type. Valid endpoint types include:</p> <ul> <li> <p> <code>iot:Data</code> - Returns a VeriSign signed data endpoint.</p> </li> </ul> <ul> <li> <p> <code>iot:Data-ATS</code> - Returns an ATS signed data endpoint.</p> </li> </ul> <ul> <li> <p> <code>iot:CredentialProvider</code> - Returns an AWS IoT credentials provider API endpoint.</p> </li> </ul> <ul> <li> <p> <code>iot:Jobs</code> - Returns an AWS IoT device management Jobs API endpoint.</p> </li> </ul> <p>We strongly recommend that customers use the newer <code>iot:Data-ATS</code> endpoint type to avoid issues related to the widespread distrust of Symantec certificate authorities.</p>
		 * @return {DescribeEndpointResponse} Success
		 */
		DescribeEndpoint(endpointType: string | null | undefined): Observable<DescribeEndpointResponse> {
			return this.http.get<DescribeEndpointResponse>(this.baseUri + 'endpoint?endpointType=' + (endpointType == null ? '' : encodeURIComponent(endpointType)), {});
		}

		/**
		 * Describes event configurations.
		 * Get event-configurations
		 * @return {DescribeEventConfigurationsResponse} Success
		 */
		DescribeEventConfigurations(): Observable<DescribeEventConfigurationsResponse> {
			return this.http.get<DescribeEventConfigurationsResponse>(this.baseUri + 'event-configurations', {});
		}

		/**
		 * Updates the event configurations.
		 * Patch event-configurations
		 * @return {UpdateEventConfigurationsResponse} Success
		 */
		UpdateEventConfigurations(requestBody: UpdateEventConfigurationsPatchBody): Observable<UpdateEventConfigurationsResponse> {
			return this.http.patch<UpdateEventConfigurationsResponse>(this.baseUri + 'event-configurations', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Describes a search index.
		 * Get indices/{indexName}
		 * @param {string} indexName The index name.
		 * @return {DescribeIndexResponse} Success
		 */
		DescribeIndex(indexName: string): Observable<DescribeIndexResponse> {
			return this.http.get<DescribeIndexResponse>(this.baseUri + 'indices/' + (indexName == null ? '' : encodeURIComponent(indexName)), {});
		}

		/**
		 * Describes a job execution.
		 * Get things/{thingName}/jobs/{jobId}
		 * @param {string} jobId The unique identifier you assigned to this job when it was created.
		 * @param {string} thingName The name of the thing on which the job execution is running.
		 * @param {number} executionNumber A string (consisting of the digits "0" through "9" which is used to specify a particular job execution on a particular device.
		 * @return {DescribeJobExecutionResponse} Success
		 */
		DescribeJobExecution(jobId: string, thingName: string, executionNumber: number | null | undefined): Observable<DescribeJobExecutionResponse> {
			return this.http.get<DescribeJobExecutionResponse>(this.baseUri + 'things/' + (thingName == null ? '' : encodeURIComponent(thingName)) + '/jobs/' + (jobId == null ? '' : encodeURIComponent(jobId)) + '&executionNumber=' + executionNumber, {});
		}

		/**
		 * Describes a bulk thing provisioning task.
		 * Get thing-registration-tasks/{taskId}
		 * @param {string} taskId The task ID.
		 * @return {DescribeThingRegistrationTaskResponse} Success
		 */
		DescribeThingRegistrationTask(taskId: string): Observable<DescribeThingRegistrationTaskResponse> {
			return this.http.get<DescribeThingRegistrationTaskResponse>(this.baseUri + 'thing-registration-tasks/' + (taskId == null ? '' : encodeURIComponent(taskId)), {});
		}

		/**
		 * Disables the rule.
		 * Post rules/{ruleName}/disable
		 * @param {string} ruleName The name of the rule to disable.
		 * @return {void} Success
		 */
		DisableTopicRule(ruleName: string): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'rules/' + (ruleName == null ? '' : encodeURIComponent(ruleName)) + '/disable', null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Enables the rule.
		 * Post rules/{ruleName}/enable
		 * @param {string} ruleName The name of the topic rule to enable.
		 * @return {void} Success
		 */
		EnableTopicRule(ruleName: string): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'rules/' + (ruleName == null ? '' : encodeURIComponent(ruleName)) + '/enable', null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns the approximate count of unique values that match the query.
		 * Post indices/cardinality
		 * @return {GetCardinalityResponse} Success
		 */
		GetCardinality(requestBody: GetCardinalityPostBody): Observable<GetCardinalityResponse> {
			return this.http.post<GetCardinalityResponse>(this.baseUri + 'indices/cardinality', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets a list of the policies that have an effect on the authorization behavior of the specified device when it connects to the AWS IoT device gateway.
		 * Post effective-policies
		 * @param {string} thingName The thing name.
		 * @return {GetEffectivePoliciesResponse} Success
		 */
		GetEffectivePolicies(thingName: string | null | undefined, requestBody: GetEffectivePoliciesPostBody): Observable<GetEffectivePoliciesResponse> {
			return this.http.post<GetEffectivePoliciesResponse>(this.baseUri + 'effective-policies?thingName=' + (thingName == null ? '' : encodeURIComponent(thingName)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets the indexing configuration.
		 * Get indexing/config
		 * @return {GetIndexingConfigurationResponse} Success
		 */
		GetIndexingConfiguration(): Observable<GetIndexingConfigurationResponse> {
			return this.http.get<GetIndexingConfigurationResponse>(this.baseUri + 'indexing/config', {});
		}

		/**
		 * Updates the search configuration.
		 * Post indexing/config
		 * @return {UpdateIndexingConfigurationResponse} Success
		 */
		UpdateIndexingConfiguration(requestBody: UpdateIndexingConfigurationPostBody): Observable<UpdateIndexingConfigurationResponse> {
			return this.http.post<UpdateIndexingConfigurationResponse>(this.baseUri + 'indexing/config', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets a job document.
		 * Get jobs/{jobId}/job-document
		 * @param {string} jobId The unique identifier you assigned to this job when it was created.
		 * @return {GetJobDocumentResponse} Success
		 */
		GetJobDocument(jobId: string): Observable<GetJobDocumentResponse> {
			return this.http.get<GetJobDocumentResponse>(this.baseUri + 'jobs/' + (jobId == null ? '' : encodeURIComponent(jobId)) + '/job-document', {});
		}

		/**
		 * <p>Gets the logging options.</p> <p>NOTE: use of this command is not recommended. Use <code>GetV2LoggingOptions</code> instead.</p>
		 * Get loggingOptions
		 * @return {GetLoggingOptionsResponse} Success
		 */
		GetLoggingOptions(): Observable<GetLoggingOptionsResponse> {
			return this.http.get<GetLoggingOptionsResponse>(this.baseUri + 'loggingOptions', {});
		}

		/**
		 * <p>Sets the logging options.</p> <p>NOTE: use of this command is not recommended. Use <code>SetV2LoggingOptions</code> instead.</p>
		 * Post loggingOptions
		 * @return {void} Success
		 */
		SetLoggingOptions(requestBody: SetLoggingOptionsPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'loggingOptions', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Groups the aggregated values that match the query into percentile groupings. The default percentile groupings are: 1,5,25,50,75,95,99, although you can specify your own when you call <code>GetPercentiles</code>. This function returns a value for each percentile group specified (or the default percentile groupings). The percentile group "1" contains the aggregated field value that occurs in approximately one percent of the values that match the query. The percentile group "5" contains the aggregated field value that occurs in approximately five percent of the values that match the query, and so on. The result is an approximation, the more values that match the query, the more accurate the percentile values.
		 * Post indices/percentiles
		 * @return {GetPercentilesResponse} Success
		 */
		GetPercentiles(requestBody: GetPercentilesPostBody): Observable<GetPercentilesResponse> {
			return this.http.post<GetPercentilesResponse>(this.baseUri + 'indices/percentiles', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns the count, average, sum, minimum, maximum, sum of squares, variance, and standard deviation for the specified aggregated field. If the aggregation field is of type <code>String</code>, only the count statistic is returned.
		 * Post indices/statistics
		 * @return {GetStatisticsResponse} Success
		 */
		GetStatistics(requestBody: GetStatisticsPostBody): Observable<GetStatisticsResponse> {
			return this.http.post<GetStatisticsResponse>(this.baseUri + 'indices/statistics', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets the fine grained logging options.
		 * Get v2LoggingOptions
		 * @return {GetV2LoggingOptionsResponse} Success
		 */
		GetV2LoggingOptions(): Observable<GetV2LoggingOptionsResponse> {
			return this.http.get<GetV2LoggingOptionsResponse>(this.baseUri + 'v2LoggingOptions', {});
		}

		/**
		 * Sets the logging options for the V2 logging service.
		 * Post v2LoggingOptions
		 * @return {void} Success
		 */
		SetV2LoggingOptions(requestBody: SetV2LoggingOptionsPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v2LoggingOptions', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Lists the active violations for a given Device Defender security profile.
		 * Get active-violations
		 * @param {string} thingName The name of the thing whose active violations are listed.
		 * @param {string} securityProfileName The name of the Device Defender security profile for which violations are listed.
		 * @param {string} nextToken The token for the next set of results.
		 * @param {number} maxResults The maximum number of results to return at one time.
		 * @return {ListActiveViolationsResponse} Success
		 */
		ListActiveViolations(thingName: string | null | undefined, securityProfileName: string | null | undefined, nextToken: string | null | undefined, maxResults: number | null | undefined): Observable<ListActiveViolationsResponse> {
			return this.http.get<ListActiveViolationsResponse>(this.baseUri + 'active-violations?thingName=' + (thingName == null ? '' : encodeURIComponent(thingName)) + '&securityProfileName=' + (securityProfileName == null ? '' : encodeURIComponent(securityProfileName)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&maxResults=' + maxResults, {});
		}

		/**
		 * Lists the policies attached to the specified thing group.
		 * Post attached-policies/{target}
		 * @param {string} target The group or principal for which the policies will be listed.
		 * @param {boolean} recursive When true, recursively list attached policies.
		 * @param {string} marker The token to retrieve the next set of results.
		 * @param {number} pageSize The maximum number of results to be returned per request.
		 * @return {ListAttachedPoliciesResponse} Success
		 */
		ListAttachedPolicies(target: string, recursive: boolean | null | undefined, marker: string | null | undefined, pageSize: number | null | undefined): Observable<ListAttachedPoliciesResponse> {
			return this.http.post<ListAttachedPoliciesResponse>(this.baseUri + 'attached-policies/' + (target == null ? '' : encodeURIComponent(target)) + '&recursive=' + recursive + '&marker=' + (marker == null ? '' : encodeURIComponent(marker)) + '&pageSize=' + pageSize, null, {});
		}

		/**
		 * Lists the findings (results) of a Device Defender audit or of the audits performed during a specified time period. (Findings are retained for 180 days.)
		 * Post audit/findings
		 * @return {ListAuditFindingsResponse} Success
		 */
		ListAuditFindings(requestBody: ListAuditFindingsPostBody): Observable<ListAuditFindingsResponse> {
			return this.http.post<ListAuditFindingsResponse>(this.baseUri + 'audit/findings', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets the status of audit mitigation action tasks that were executed.
		 * Get audit/mitigationactions/executions#taskId&findingId
		 * @param {string} taskId Specify this filter to limit results to actions for a specific audit mitigation actions task.
		 * @param {AuditMitigationActionExecutionMetadataStatus} actionStatus Specify this filter to limit results to those with a specific status.
		 * @param {string} findingId Specify this filter to limit results to those that were applied to a specific audit finding.
		 * @param {number} maxResults The maximum number of results to return at one time. The default is 25.
		 * @param {string} nextToken The token for the next set of results.
		 * @return {ListAuditMitigationActionsExecutionsResponse} Success
		 */
		ListAuditMitigationActionsExecutions(taskId: string, actionStatus: AuditMitigationActionExecutionMetadataStatus | null | undefined, findingId: string, maxResults: number | null | undefined, nextToken: string | null | undefined): Observable<ListAuditMitigationActionsExecutionsResponse> {
			return this.http.get<ListAuditMitigationActionsExecutionsResponse>(this.baseUri + 'audit/mitigationactions/executions#taskId&findingId?taskId=' + (taskId == null ? '' : encodeURIComponent(taskId)) + '&actionStatus=' + actionStatus + '&findingId=' + (findingId == null ? '' : encodeURIComponent(findingId)) + '&maxResults=' + maxResults + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), {});
		}

		/**
		 * Gets a list of audit mitigation action tasks that match the specified filters.
		 * Get audit/mitigationactions/tasks#startTime&endTime
		 * @param {string} auditTaskId Specify this filter to limit results to tasks that were applied to results for a specific audit.
		 * @param {string} findingId Specify this filter to limit results to tasks that were applied to a specific audit finding.
		 * @param {DescribeAuditMitigationActionsTaskResponseTaskStatus} taskStatus Specify this filter to limit results to tasks that are in a specific state.
		 * @param {number} maxResults The maximum number of results to return at one time. The default is 25.
		 * @param {string} nextToken The token for the next set of results.
		 * @param {Date} startTime Specify this filter to limit results to tasks that began on or after a specific date and time.
		 * @param {Date} endTime Specify this filter to limit results to tasks that were completed or canceled on or before a specific date and time.
		 * @return {ListAuditMitigationActionsTasksResponse} Success
		 */
		ListAuditMitigationActionsTasks(auditTaskId: string | null | undefined, findingId: string | null | undefined, taskStatus: DescribeAuditMitigationActionsTaskResponseTaskStatus | null | undefined, maxResults: number | null | undefined, nextToken: string | null | undefined, startTime: Date, endTime: Date): Observable<ListAuditMitigationActionsTasksResponse> {
			return this.http.get<ListAuditMitigationActionsTasksResponse>(this.baseUri + 'audit/mitigationactions/tasks#startTime&endTime?auditTaskId=' + (auditTaskId == null ? '' : encodeURIComponent(auditTaskId)) + '&findingId=' + (findingId == null ? '' : encodeURIComponent(findingId)) + '&taskStatus=' + taskStatus + '&maxResults=' + maxResults + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&startTime=' + startTime.toISOString() + '&endTime=' + endTime.toISOString(), {});
		}

		/**
		 * Lists the Device Defender audits that have been performed during a given time period.
		 * Get audit/tasks#startTime&endTime
		 * @param {Date} startTime The beginning of the time period. Audit information is retained for a limited time (180 days). Requesting a start time prior to what is retained results in an "InvalidRequestException".
		 * @param {Date} endTime The end of the time period.
		 * @param {DescribeAuditTaskResponseTaskType} taskType A filter to limit the output to the specified type of audit: can be one of "ON_DEMAND_AUDIT_TASK" or "SCHEDULED__AUDIT_TASK".
		 * @param {DescribeAuditMitigationActionsTaskResponseTaskStatus} taskStatus A filter to limit the output to audits with the specified completion status: can be one of "IN_PROGRESS", "COMPLETED", "FAILED", or "CANCELED".
		 * @param {string} nextToken The token for the next set of results.
		 * @param {number} maxResults The maximum number of results to return at one time. The default is 25.
		 * @return {ListAuditTasksResponse} Success
		 */
		ListAuditTasks(startTime: Date, endTime: Date, taskType: DescribeAuditTaskResponseTaskType | null | undefined, taskStatus: DescribeAuditMitigationActionsTaskResponseTaskStatus | null | undefined, nextToken: string | null | undefined, maxResults: number | null | undefined): Observable<ListAuditTasksResponse> {
			return this.http.get<ListAuditTasksResponse>(this.baseUri + 'audit/tasks#startTime&endTime?startTime=' + startTime.toISOString() + '&endTime=' + endTime.toISOString() + '&taskType=' + taskType + '&taskStatus=' + taskStatus + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&maxResults=' + maxResults, {});
		}

		/**
		 * Lists the authorizers registered in your account.
		 * Get authorizers/
		 * @param {number} pageSize The maximum number of results to return at one time.
		 * @param {string} marker A marker used to get the next set of results.
		 * @param {boolean} isAscendingOrder Return the list of authorizers in ascending alphabetical order.
		 * @param {AuthorizerDescriptionStatus} status The status of the list authorizers request.
		 * @return {ListAuthorizersResponse} Success
		 */
		ListAuthorizers(pageSize: number | null | undefined, marker: string | null | undefined, isAscendingOrder: boolean | null | undefined, status: AuthorizerDescriptionStatus | null | undefined): Observable<ListAuthorizersResponse> {
			return this.http.get<ListAuthorizersResponse>(this.baseUri + 'authorizers/?pageSize=' + pageSize + '&marker=' + (marker == null ? '' : encodeURIComponent(marker)) + '&isAscendingOrder=' + isAscendingOrder + '&status=' + status, {});
		}

		/**
		 * Lists the billing groups you have created.
		 * Get billing-groups
		 * @param {string} nextToken The token to retrieve the next set of results.
		 * @param {number} maxResults The maximum number of results to return per request.
		 * @param {string} namePrefixFilter Limit the results to billing groups whose names have the given prefix.
		 * @return {ListBillingGroupsResponse} Success
		 */
		ListBillingGroups(nextToken: string | null | undefined, maxResults: number | null | undefined, namePrefixFilter: string | null | undefined): Observable<ListBillingGroupsResponse> {
			return this.http.get<ListBillingGroupsResponse>(this.baseUri + 'billing-groups?nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&maxResults=' + maxResults + '&namePrefixFilter=' + (namePrefixFilter == null ? '' : encodeURIComponent(namePrefixFilter)), {});
		}

		/**
		 * <p>Lists the CA certificates registered for your AWS account.</p> <p>The results are paginated with a default page size of 25. You can use the returned marker to retrieve additional results.</p>
		 * Get cacertificates
		 * @param {number} pageSize The result page size.
		 * @param {string} marker The marker for the next set of results.
		 * @param {boolean} isAscendingOrder Determines the order of the results.
		 * @return {ListCACertificatesResponse} Success
		 */
		ListCACertificates(pageSize: number | null | undefined, marker: string | null | undefined, isAscendingOrder: boolean | null | undefined): Observable<ListCACertificatesResponse> {
			return this.http.get<ListCACertificatesResponse>(this.baseUri + 'cacertificates?pageSize=' + pageSize + '&marker=' + (marker == null ? '' : encodeURIComponent(marker)) + '&isAscendingOrder=' + isAscendingOrder, {});
		}

		/**
		 * List the device certificates signed by the specified CA certificate.
		 * Get certificates-by-ca/{caCertificateId}
		 * @param {string} caCertificateId The ID of the CA certificate. This operation will list all registered device certificate that were signed by this CA certificate.
		 * @param {number} pageSize The result page size.
		 * @param {string} marker The marker for the next set of results.
		 * @param {boolean} isAscendingOrder Specifies the order for results. If True, the results are returned in ascending order, based on the creation date.
		 * @return {ListCertificatesByCAResponse} Success
		 */
		ListCertificatesByCA(caCertificateId: string, pageSize: number | null | undefined, marker: string | null | undefined, isAscendingOrder: boolean | null | undefined): Observable<ListCertificatesByCAResponse> {
			return this.http.get<ListCertificatesByCAResponse>(this.baseUri + 'certificates-by-ca/' + (caCertificateId == null ? '' : encodeURIComponent(caCertificateId)) + '&pageSize=' + pageSize + '&marker=' + (marker == null ? '' : encodeURIComponent(marker)) + '&isAscendingOrder=' + isAscendingOrder, {});
		}

		/**
		 * List the set of dimensions that are defined for your AWS account.
		 * Get dimensions
		 * @param {string} nextToken The token for the next set of results.
		 * @param {number} maxResults The maximum number of results to retrieve at one time.
		 * @return {ListDimensionsResponse} Success
		 */
		ListDimensions(nextToken: string | null | undefined, maxResults: number | null | undefined): Observable<ListDimensionsResponse> {
			return this.http.get<ListDimensionsResponse>(this.baseUri + 'dimensions?nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&maxResults=' + maxResults, {});
		}

		/**
		 * <p>Gets a list of domain configurations for the user. This list is sorted alphabetically by domain configuration name.</p> <note> <p>The domain configuration feature is in public preview and is subject to change.</p> </note>
		 * Get domainConfigurations
		 * @param {string} marker The marker for the next set of results.
		 * @param {number} pageSize The result page size.
		 * @param {DescribeDomainConfigurationResponseServiceType} serviceType The type of service delivered by the endpoint.
		 * @return {ListDomainConfigurationsResponse} Success
		 */
		ListDomainConfigurations(marker: string | null | undefined, pageSize: number | null | undefined, serviceType: DescribeDomainConfigurationResponseServiceType | null | undefined): Observable<ListDomainConfigurationsResponse> {
			return this.http.get<ListDomainConfigurationsResponse>(this.baseUri + 'domainConfigurations?marker=' + (marker == null ? '' : encodeURIComponent(marker)) + '&pageSize=' + pageSize + '&serviceType=' + serviceType, {});
		}

		/**
		 * Lists the search indices.
		 * Get indices
		 * @param {string} nextToken The token used to get the next set of results, or <code>null</code> if there are no additional results.
		 * @param {number} maxResults The maximum number of results to return at one time.
		 * @return {ListIndicesResponse} Success
		 */
		ListIndices(nextToken: string | null | undefined, maxResults: number | null | undefined): Observable<ListIndicesResponse> {
			return this.http.get<ListIndicesResponse>(this.baseUri + 'indices?nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&maxResults=' + maxResults, {});
		}

		/**
		 * Lists the job executions for a job.
		 * Get jobs/{jobId}/things
		 * @param {string} jobId The unique identifier you assigned to this job when it was created.
		 * @param {JobExecutionStatus} status The status of the job.
		 * @param {number} maxResults The maximum number of results to be returned per request.
		 * @param {string} nextToken The token to retrieve the next set of results.
		 * @return {ListJobExecutionsForJobResponse} Success
		 */
		ListJobExecutionsForJob(jobId: string, status: JobExecutionStatus | null | undefined, maxResults: number | null | undefined, nextToken: string | null | undefined): Observable<ListJobExecutionsForJobResponse> {
			return this.http.get<ListJobExecutionsForJobResponse>(this.baseUri + 'jobs/' + (jobId == null ? '' : encodeURIComponent(jobId)) + '/things&status=' + status + '&maxResults=' + maxResults + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), {});
		}

		/**
		 * Lists the job executions for the specified thing.
		 * Get things/{thingName}/jobs
		 * @param {string} thingName The thing name.
		 * @param {JobExecutionStatus} status An optional filter that lets you search for jobs that have the specified status.
		 * @param {number} maxResults The maximum number of results to be returned per request.
		 * @param {string} nextToken The token to retrieve the next set of results.
		 * @return {ListJobExecutionsForThingResponse} Success
		 */
		ListJobExecutionsForThing(thingName: string, status: JobExecutionStatus | null | undefined, maxResults: number | null | undefined, nextToken: string | null | undefined): Observable<ListJobExecutionsForThingResponse> {
			return this.http.get<ListJobExecutionsForThingResponse>(this.baseUri + 'things/' + (thingName == null ? '' : encodeURIComponent(thingName)) + '/jobs&status=' + status + '&maxResults=' + maxResults + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), {});
		}

		/**
		 * Lists jobs.
		 * Get jobs
		 * @param {JobStatus} status An optional filter that lets you search for jobs that have the specified status.
		 * @param {JobTargetSelection} targetSelection Specifies whether the job will continue to run (CONTINUOUS), or will be complete after all those things specified as targets have completed the job (SNAPSHOT). If continuous, the job may also be run on a thing when a change is detected in a target. For example, a job will run on a thing when the thing is added to a target group, even after the job was completed by all things originally in the group. 
		 * @param {number} maxResults The maximum number of results to return per request.
		 * @param {string} nextToken The token to retrieve the next set of results.
		 * @param {string} thingGroupName A filter that limits the returned jobs to those for the specified group.
		 * @param {string} thingGroupId A filter that limits the returned jobs to those for the specified group.
		 * @return {ListJobsResponse} Success
		 */
		ListJobs(status: JobStatus | null | undefined, targetSelection: JobTargetSelection | null | undefined, maxResults: number | null | undefined, nextToken: string | null | undefined, thingGroupName: string | null | undefined, thingGroupId: string | null | undefined): Observable<ListJobsResponse> {
			return this.http.get<ListJobsResponse>(this.baseUri + 'jobs?status=' + status + '&targetSelection=' + targetSelection + '&maxResults=' + maxResults + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&thingGroupName=' + (thingGroupName == null ? '' : encodeURIComponent(thingGroupName)) + '&thingGroupId=' + (thingGroupId == null ? '' : encodeURIComponent(thingGroupId)), {});
		}

		/**
		 * Gets a list of all mitigation actions that match the specified filter criteria.
		 * Get mitigationactions/actions
		 * @param {DescribeMitigationActionResponseActionType} actionType Specify a value to limit the result to mitigation actions with a specific action type.
		 * @param {number} maxResults The maximum number of results to return at one time. The default is 25.
		 * @param {string} nextToken The token for the next set of results.
		 * @return {ListMitigationActionsResponse} Success
		 */
		ListMitigationActions(actionType: DescribeMitigationActionResponseActionType | null | undefined, maxResults: number | null | undefined, nextToken: string | null | undefined): Observable<ListMitigationActionsResponse> {
			return this.http.get<ListMitigationActionsResponse>(this.baseUri + 'mitigationactions/actions?actionType=' + actionType + '&maxResults=' + maxResults + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), {});
		}

		/**
		 * Lists OTA updates.
		 * Get otaUpdates
		 * @param {number} maxResults The maximum number of results to return at one time.
		 * @param {string} nextToken A token used to retrieve the next set of results.
		 * @param {CreateOTAUpdateResponseOtaUpdateStatus} otaUpdateStatus The OTA update job status.
		 * @return {ListOTAUpdatesResponse} Success
		 */
		ListOTAUpdates(maxResults: number | null | undefined, nextToken: string | null | undefined, otaUpdateStatus: CreateOTAUpdateResponseOtaUpdateStatus | null | undefined): Observable<ListOTAUpdatesResponse> {
			return this.http.get<ListOTAUpdatesResponse>(this.baseUri + 'otaUpdates?maxResults=' + maxResults + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&otaUpdateStatus=' + otaUpdateStatus, {});
		}

		/**
		 * Lists certificates that are being transferred but not yet accepted.
		 * Get certificates-out-going
		 * @param {number} pageSize The result page size.
		 * @param {string} marker The marker for the next set of results.
		 * @param {boolean} isAscendingOrder Specifies the order for results. If True, the results are returned in ascending order, based on the creation date.
		 * @return {ListOutgoingCertificatesResponse} Success
		 */
		ListOutgoingCertificates(pageSize: number | null | undefined, marker: string | null | undefined, isAscendingOrder: boolean | null | undefined): Observable<ListOutgoingCertificatesResponse> {
			return this.http.get<ListOutgoingCertificatesResponse>(this.baseUri + 'certificates-out-going?pageSize=' + pageSize + '&marker=' + (marker == null ? '' : encodeURIComponent(marker)) + '&isAscendingOrder=' + isAscendingOrder, {});
		}

		/**
		 * Lists your policies.
		 * Get policies
		 * @param {string} marker The marker for the next set of results.
		 * @param {number} pageSize The result page size.
		 * @param {boolean} isAscendingOrder Specifies the order for results. If true, the results are returned in ascending creation order.
		 * @return {ListPoliciesResponse} Success
		 */
		ListPolicies(marker: string | null | undefined, pageSize: number | null | undefined, isAscendingOrder: boolean | null | undefined): Observable<ListPoliciesResponse> {
			return this.http.get<ListPoliciesResponse>(this.baseUri + 'policies?marker=' + (marker == null ? '' : encodeURIComponent(marker)) + '&pageSize=' + pageSize + '&isAscendingOrder=' + isAscendingOrder, {});
		}

		/**
		 * <p>Lists the principals associated with the specified policy.</p> <p> <b>Note:</b> This API is deprecated. Please use <a>ListTargetsForPolicy</a> instead.</p>
		 * Get policy-principals#x-amzn-iot-policy
		 * @param {string} marker The marker for the next set of results.
		 * @param {number} pageSize The result page size.
		 * @param {boolean} isAscendingOrder Specifies the order for results. If true, the results are returned in ascending creation order.
		 * @return {ListPolicyPrincipalsResponse} Success
		 */
		ListPolicyPrincipals(marker: string | null | undefined, pageSize: number | null | undefined, isAscendingOrder: boolean | null | undefined): Observable<ListPolicyPrincipalsResponse> {
			return this.http.get<ListPolicyPrincipalsResponse>(this.baseUri + 'policy-principals#x-amzn-iot-policy?marker=' + (marker == null ? '' : encodeURIComponent(marker)) + '&pageSize=' + pageSize + '&isAscendingOrder=' + isAscendingOrder, {});
		}

		/**
		 * <p>Lists the policies attached to the specified principal. If you use an Cognito identity, the ID must be in <a href="https://docs.aws.amazon.com/cognitoidentity/latest/APIReference/API_GetCredentialsForIdentity.html#API_GetCredentialsForIdentity_RequestSyntax">AmazonCognito Identity format</a>.</p> <p> <b>Note:</b> This API is deprecated. Please use <a>ListAttachedPolicies</a> instead.</p>
		 * Get principal-policies#x-amzn-iot-principal
		 * @param {string} marker The marker for the next set of results.
		 * @param {number} pageSize The result page size.
		 * @param {boolean} isAscendingOrder Specifies the order for results. If true, results are returned in ascending creation order.
		 * @return {ListPrincipalPoliciesResponse} Success
		 */
		ListPrincipalPolicies(marker: string | null | undefined, pageSize: number | null | undefined, isAscendingOrder: boolean | null | undefined): Observable<ListPrincipalPoliciesResponse> {
			return this.http.get<ListPrincipalPoliciesResponse>(this.baseUri + 'principal-policies#x-amzn-iot-principal?marker=' + (marker == null ? '' : encodeURIComponent(marker)) + '&pageSize=' + pageSize + '&isAscendingOrder=' + isAscendingOrder, {});
		}

		/**
		 * Lists the things associated with the specified principal. A principal can be X.509 certificates, IAM users, groups, and roles, Amazon Cognito identities or federated identities.
		 * Get principals/things#x-amzn-principal
		 * @param {string} nextToken The token to retrieve the next set of results.
		 * @param {number} maxResults The maximum number of results to return in this operation.
		 * @return {ListPrincipalThingsResponse} Success
		 */
		ListPrincipalThings(nextToken: string | null | undefined, maxResults: number | null | undefined): Observable<ListPrincipalThingsResponse> {
			return this.http.get<ListPrincipalThingsResponse>(this.baseUri + 'principals/things#x-amzn-principal?nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&maxResults=' + maxResults, {});
		}

		/**
		 * Lists the role aliases registered in your account.
		 * Get role-aliases
		 * @param {number} pageSize The maximum number of results to return at one time.
		 * @param {string} marker A marker used to get the next set of results.
		 * @param {boolean} isAscendingOrder Return the list of role aliases in ascending alphabetical order.
		 * @return {ListRoleAliasesResponse} Success
		 */
		ListRoleAliases(pageSize: number | null | undefined, marker: string | null | undefined, isAscendingOrder: boolean | null | undefined): Observable<ListRoleAliasesResponse> {
			return this.http.get<ListRoleAliasesResponse>(this.baseUri + 'role-aliases?pageSize=' + pageSize + '&marker=' + (marker == null ? '' : encodeURIComponent(marker)) + '&isAscendingOrder=' + isAscendingOrder, {});
		}

		/**
		 * Lists all of your scheduled audits.
		 * Get audit/scheduledaudits
		 * @param {string} nextToken The token for the next set of results.
		 * @param {number} maxResults The maximum number of results to return at one time. The default is 25.
		 * @return {ListScheduledAuditsResponse} Success
		 */
		ListScheduledAudits(nextToken: string | null | undefined, maxResults: number | null | undefined): Observable<ListScheduledAuditsResponse> {
			return this.http.get<ListScheduledAuditsResponse>(this.baseUri + 'audit/scheduledaudits?nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&maxResults=' + maxResults, {});
		}

		/**
		 * Lists the Device Defender security profiles you have created. You can use filters to list only those security profiles associated with a thing group or only those associated with your account.
		 * Get security-profiles
		 * @param {string} nextToken The token for the next set of results.
		 * @param {number} maxResults The maximum number of results to return at one time.
		 * @param {string} dimensionName A filter to limit results to the security profiles that use the defined dimension.
		 * @return {ListSecurityProfilesResponse} Success
		 */
		ListSecurityProfiles(nextToken: string | null | undefined, maxResults: number | null | undefined, dimensionName: string | null | undefined): Observable<ListSecurityProfilesResponse> {
			return this.http.get<ListSecurityProfilesResponse>(this.baseUri + 'security-profiles?nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&maxResults=' + maxResults + '&dimensionName=' + (dimensionName == null ? '' : encodeURIComponent(dimensionName)), {});
		}

		/**
		 * Lists the Device Defender security profiles attached to a target (thing group).
		 * Get security-profiles-for-target#securityProfileTargetArn
		 * @param {string} nextToken The token for the next set of results.
		 * @param {number} maxResults The maximum number of results to return at one time.
		 * @param {boolean} recursive If true, return child groups too.
		 * @param {string} securityProfileTargetArn The ARN of the target (thing group) whose attached security profiles you want to get.
		 * @return {ListSecurityProfilesForTargetResponse} Success
		 */
		ListSecurityProfilesForTarget(nextToken: string | null | undefined, maxResults: number | null | undefined, recursive: boolean | null | undefined, securityProfileTargetArn: string): Observable<ListSecurityProfilesForTargetResponse> {
			return this.http.get<ListSecurityProfilesForTargetResponse>(this.baseUri + 'security-profiles-for-target#securityProfileTargetArn?nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&maxResults=' + maxResults + '&recursive=' + recursive + '&securityProfileTargetArn=' + (securityProfileTargetArn == null ? '' : encodeURIComponent(securityProfileTargetArn)), {});
		}

		/**
		 * Lists all of the streams in your AWS account.
		 * Get streams
		 * @param {number} maxResults The maximum number of results to return at a time.
		 * @param {string} nextToken A token used to get the next set of results.
		 * @param {boolean} isAscendingOrder Set to true to return the list of streams in ascending order.
		 * @return {ListStreamsResponse} Success
		 */
		ListStreams(maxResults: number | null | undefined, nextToken: string | null | undefined, isAscendingOrder: boolean | null | undefined): Observable<ListStreamsResponse> {
			return this.http.get<ListStreamsResponse>(this.baseUri + 'streams?maxResults=' + maxResults + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&isAscendingOrder=' + isAscendingOrder, {});
		}

		/**
		 * Lists the tags (metadata) you have assigned to the resource.
		 * Get tags#resourceArn
		 * @param {string} resourceArn The ARN of the resource.
		 * @param {string} nextToken The token to retrieve the next set of results.
		 * @return {ListTagsForResourceResponse} Success
		 */
		ListTagsForResource(resourceArn: string, nextToken: string | null | undefined): Observable<ListTagsForResourceResponse> {
			return this.http.get<ListTagsForResourceResponse>(this.baseUri + 'tags#resourceArn?resourceArn=' + (resourceArn == null ? '' : encodeURIComponent(resourceArn)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), {});
		}

		/**
		 * List targets for the specified policy.
		 * Post policy-targets/{policyName}
		 * @param {string} policyName The policy name.
		 * @param {string} marker A marker used to get the next set of results.
		 * @param {number} pageSize The maximum number of results to return at one time.
		 * @return {ListTargetsForPolicyResponse} Success
		 */
		ListTargetsForPolicy(policyName: string, marker: string | null | undefined, pageSize: number | null | undefined): Observable<ListTargetsForPolicyResponse> {
			return this.http.post<ListTargetsForPolicyResponse>(this.baseUri + 'policy-targets/' + (policyName == null ? '' : encodeURIComponent(policyName)) + '&marker=' + (marker == null ? '' : encodeURIComponent(marker)) + '&pageSize=' + pageSize, null, {});
		}

		/**
		 * Lists the targets (thing groups) associated with a given Device Defender security profile.
		 * Get security-profiles/{securityProfileName}/targets
		 * @param {string} securityProfileName The security profile.
		 * @param {string} nextToken The token for the next set of results.
		 * @param {number} maxResults The maximum number of results to return at one time.
		 * @return {ListTargetsForSecurityProfileResponse} Success
		 */
		ListTargetsForSecurityProfile(securityProfileName: string, nextToken: string | null | undefined, maxResults: number | null | undefined): Observable<ListTargetsForSecurityProfileResponse> {
			return this.http.get<ListTargetsForSecurityProfileResponse>(this.baseUri + 'security-profiles/' + (securityProfileName == null ? '' : encodeURIComponent(securityProfileName)) + '/targets&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&maxResults=' + maxResults, {});
		}

		/**
		 * List the thing groups in your account.
		 * Get thing-groups
		 * @param {string} nextToken The token to retrieve the next set of results.
		 * @param {number} maxResults The maximum number of results to return at one time.
		 * @param {string} parentGroup A filter that limits the results to those with the specified parent group.
		 * @param {string} namePrefixFilter A filter that limits the results to those with the specified name prefix.
		 * @param {boolean} recursive If true, return child groups as well.
		 * @return {ListThingGroupsResponse} Success
		 */
		ListThingGroups(nextToken: string | null | undefined, maxResults: number | null | undefined, parentGroup: string | null | undefined, namePrefixFilter: string | null | undefined, recursive: boolean | null | undefined): Observable<ListThingGroupsResponse> {
			return this.http.get<ListThingGroupsResponse>(this.baseUri + 'thing-groups?nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&maxResults=' + maxResults + '&parentGroup=' + (parentGroup == null ? '' : encodeURIComponent(parentGroup)) + '&namePrefixFilter=' + (namePrefixFilter == null ? '' : encodeURIComponent(namePrefixFilter)) + '&recursive=' + recursive, {});
		}

		/**
		 * List the thing groups to which the specified thing belongs.
		 * Get things/{thingName}/thing-groups
		 * @param {string} thingName The thing name.
		 * @param {string} nextToken The token to retrieve the next set of results.
		 * @param {number} maxResults The maximum number of results to return at one time.
		 * @return {ListThingGroupsForThingResponse} Success
		 */
		ListThingGroupsForThing(thingName: string, nextToken: string | null | undefined, maxResults: number | null | undefined): Observable<ListThingGroupsForThingResponse> {
			return this.http.get<ListThingGroupsForThingResponse>(this.baseUri + 'things/' + (thingName == null ? '' : encodeURIComponent(thingName)) + '/thing-groups&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&maxResults=' + maxResults, {});
		}

		/**
		 * Lists the principals associated with the specified thing. A principal can be X.509 certificates, IAM users, groups, and roles, Amazon Cognito identities or federated identities.
		 * Get things/{thingName}/principals
		 * @param {string} thingName The name of the thing.
		 * @return {ListThingPrincipalsResponse} Success
		 */
		ListThingPrincipals(thingName: string): Observable<ListThingPrincipalsResponse> {
			return this.http.get<ListThingPrincipalsResponse>(this.baseUri + 'things/' + (thingName == null ? '' : encodeURIComponent(thingName)) + '/principals', {});
		}

		/**
		 * Information about the thing registration tasks.
		 * Get thing-registration-tasks/{taskId}/reports#reportType
		 * @param {string} taskId The id of the task.
		 * @param {ListThingRegistrationTaskReportsResponseReportType} reportType The type of task report.
		 * @param {string} nextToken The token to retrieve the next set of results.
		 * @param {number} maxResults The maximum number of results to return per request.
		 * @return {ListThingRegistrationTaskReportsResponse} Success
		 */
		ListThingRegistrationTaskReports(taskId: string, reportType: ListThingRegistrationTaskReportsResponseReportType, nextToken: string | null | undefined, maxResults: number | null | undefined): Observable<ListThingRegistrationTaskReportsResponse> {
			return this.http.get<ListThingRegistrationTaskReportsResponse>(this.baseUri + 'thing-registration-tasks/' + (taskId == null ? '' : encodeURIComponent(taskId)) + '/reports#reportType&reportType=' + reportType + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&maxResults=' + maxResults, {});
		}

		/**
		 * List bulk thing provisioning tasks.
		 * Get thing-registration-tasks
		 * @param {string} nextToken The token to retrieve the next set of results.
		 * @param {number} maxResults The maximum number of results to return at one time.
		 * @param {DescribeThingRegistrationTaskResponseStatus} status The status of the bulk thing provisioning task.
		 * @return {ListThingRegistrationTasksResponse} Success
		 */
		ListThingRegistrationTasks(nextToken: string | null | undefined, maxResults: number | null | undefined, status: DescribeThingRegistrationTaskResponseStatus | null | undefined): Observable<ListThingRegistrationTasksResponse> {
			return this.http.get<ListThingRegistrationTasksResponse>(this.baseUri + 'thing-registration-tasks?nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&maxResults=' + maxResults + '&status=' + status, {});
		}

		/**
		 * Creates a bulk thing provisioning task.
		 * Post thing-registration-tasks
		 * @return {StartThingRegistrationTaskResponse} Success
		 */
		StartThingRegistrationTask(requestBody: StartThingRegistrationTaskPostBody): Observable<StartThingRegistrationTaskResponse> {
			return this.http.post<StartThingRegistrationTaskResponse>(this.baseUri + 'thing-registration-tasks', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists the existing thing types.
		 * Get thing-types
		 * @param {string} nextToken The token to retrieve the next set of results.
		 * @param {number} maxResults The maximum number of results to return in this operation.
		 * @param {string} thingTypeName The name of the thing type.
		 * @return {ListThingTypesResponse} Success
		 */
		ListThingTypes(nextToken: string | null | undefined, maxResults: number | null | undefined, thingTypeName: string | null | undefined): Observable<ListThingTypesResponse> {
			return this.http.get<ListThingTypesResponse>(this.baseUri + 'thing-types?nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&maxResults=' + maxResults + '&thingTypeName=' + (thingTypeName == null ? '' : encodeURIComponent(thingTypeName)), {});
		}

		/**
		 * Lists your things. Use the <b>attributeName</b> and <b>attributeValue</b> parameters to filter your things. For example, calling <code>ListThings</code> with attributeName=Color and attributeValue=Red retrieves all things in the registry that contain an attribute <b>Color</b> with the value <b>Red</b>.
		 * Get things
		 * @param {string} nextToken The token to retrieve the next set of results.
		 * @param {number} maxResults The maximum number of results to return in this operation.
		 * @param {string} attributeName The attribute name used to search for things.
		 * @param {string} attributeValue The attribute value used to search for things.
		 * @param {string} thingTypeName The name of the thing type used to search for things.
		 * @return {ListThingsResponse} Success
		 */
		ListThings(nextToken: string | null | undefined, maxResults: number | null | undefined, attributeName: string | null | undefined, attributeValue: string | null | undefined, thingTypeName: string | null | undefined): Observable<ListThingsResponse> {
			return this.http.get<ListThingsResponse>(this.baseUri + 'things?nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&maxResults=' + maxResults + '&attributeName=' + (attributeName == null ? '' : encodeURIComponent(attributeName)) + '&attributeValue=' + (attributeValue == null ? '' : encodeURIComponent(attributeValue)) + '&thingTypeName=' + (thingTypeName == null ? '' : encodeURIComponent(thingTypeName)), {});
		}

		/**
		 * Provisions a thing in the device registry. RegisterThing calls other AWS IoT control plane APIs. These calls might exceed your account level <a href="https://docs.aws.amazon.com/general/latest/gr/aws_service_limits.html#limits_iot"> AWS IoT Throttling Limits</a> and cause throttle errors. Please contact <a href="https://console.aws.amazon.com/support/home">AWS Customer Support</a> to raise your throttling limits if necessary.
		 * Post things
		 * @return {RegisterThingResponse} Success
		 */
		RegisterThing(requestBody: RegisterThingPostBody): Observable<RegisterThingResponse> {
			return this.http.post<RegisterThingResponse>(this.baseUri + 'things', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists the things you have added to the given billing group.
		 * Get billing-groups/{billingGroupName}/things
		 * @param {string} billingGroupName The name of the billing group.
		 * @param {string} nextToken The token to retrieve the next set of results.
		 * @param {number} maxResults The maximum number of results to return per request.
		 * @return {ListThingsInBillingGroupResponse} Success
		 */
		ListThingsInBillingGroup(billingGroupName: string, nextToken: string | null | undefined, maxResults: number | null | undefined): Observable<ListThingsInBillingGroupResponse> {
			return this.http.get<ListThingsInBillingGroupResponse>(this.baseUri + 'billing-groups/' + (billingGroupName == null ? '' : encodeURIComponent(billingGroupName)) + '/things&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&maxResults=' + maxResults, {});
		}

		/**
		 * Lists the things in the specified group.
		 * Get thing-groups/{thingGroupName}/things
		 * @param {string} thingGroupName The thing group name.
		 * @param {boolean} recursive When true, list things in this thing group and in all child groups as well.
		 * @param {string} nextToken The token to retrieve the next set of results.
		 * @param {number} maxResults The maximum number of results to return at one time.
		 * @return {ListThingsInThingGroupResponse} Success
		 */
		ListThingsInThingGroup(thingGroupName: string, recursive: boolean | null | undefined, nextToken: string | null | undefined, maxResults: number | null | undefined): Observable<ListThingsInThingGroupResponse> {
			return this.http.get<ListThingsInThingGroupResponse>(this.baseUri + 'thing-groups/' + (thingGroupName == null ? '' : encodeURIComponent(thingGroupName)) + '/things&recursive=' + recursive + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&maxResults=' + maxResults, {});
		}

		/**
		 * Lists the rules for the specific topic.
		 * Get rules
		 * @param {string} topic The topic.
		 * @param {number} maxResults The maximum number of results to return.
		 * @param {string} nextToken A token used to retrieve the next value.
		 * @param {boolean} ruleDisabled Specifies whether the rule is disabled.
		 * @return {ListTopicRulesResponse} Success
		 */
		ListTopicRules(topic: string | null | undefined, maxResults: number | null | undefined, nextToken: string | null | undefined, ruleDisabled: boolean | null | undefined): Observable<ListTopicRulesResponse> {
			return this.http.get<ListTopicRulesResponse>(this.baseUri + 'rules?topic=' + (topic == null ? '' : encodeURIComponent(topic)) + '&maxResults=' + maxResults + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&ruleDisabled=' + ruleDisabled, {});
		}

		/**
		 * Lists logging levels.
		 * Get v2LoggingLevel
		 * @param {LogTargetTargetType} targetType The type of resource for which you are configuring logging. Must be <code>THING_Group</code>.
		 * @param {string} nextToken The token used to get the next set of results, or <b>null</b> if there are no additional results.
		 * @param {number} maxResults The maximum number of results to return at one time.
		 * @return {ListV2LoggingLevelsResponse} Success
		 */
		ListV2LoggingLevels(targetType: LogTargetTargetType | null | undefined, nextToken: string | null | undefined, maxResults: number | null | undefined): Observable<ListV2LoggingLevelsResponse> {
			return this.http.get<ListV2LoggingLevelsResponse>(this.baseUri + 'v2LoggingLevel?targetType=' + targetType + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&maxResults=' + maxResults, {});
		}

		/**
		 * Sets the logging level.
		 * Post v2LoggingLevel
		 * @return {void} Success
		 */
		SetV2LoggingLevel(requestBody: SetV2LoggingLevelPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v2LoggingLevel', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Lists the Device Defender security profile violations discovered during the given time period. You can use filters to limit the results to those alerts issued for a particular security profile, behavior, or thing (device).
		 * Get violation-events#startTime&endTime
		 * @param {Date} startTime The start time for the alerts to be listed.
		 * @param {Date} endTime The end time for the alerts to be listed.
		 * @param {string} thingName A filter to limit results to those alerts caused by the specified thing.
		 * @param {string} securityProfileName A filter to limit results to those alerts generated by the specified security profile.
		 * @param {string} nextToken The token for the next set of results.
		 * @param {number} maxResults The maximum number of results to return at one time.
		 * @return {ListViolationEventsResponse} Success
		 */
		ListViolationEvents(startTime: Date, endTime: Date, thingName: string | null | undefined, securityProfileName: string | null | undefined, nextToken: string | null | undefined, maxResults: number | null | undefined): Observable<ListViolationEventsResponse> {
			return this.http.get<ListViolationEventsResponse>(this.baseUri + 'violation-events#startTime&endTime?startTime=' + startTime.toISOString() + '&endTime=' + endTime.toISOString() + '&thingName=' + (thingName == null ? '' : encodeURIComponent(thingName)) + '&securityProfileName=' + (securityProfileName == null ? '' : encodeURIComponent(securityProfileName)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&maxResults=' + maxResults, {});
		}

		/**
		 * Registers a CA certificate with AWS IoT. This CA certificate can then be used to sign device certificates, which can be then registered with AWS IoT. You can register up to 10 CA certificates per AWS account that have the same subject field. This enables you to have up to 10 certificate authorities sign your device certificates. If you have more than one CA certificate registered, make sure you pass the CA certificate when you register your device certificates with the RegisterCertificate API.
		 * Post cacertificate
		 * @param {boolean} setAsActive A boolean value that specifies if the CA certificate is set to active.
		 * @param {boolean} allowAutoRegistration Allows this CA certificate to be used for auto registration of device certificates.
		 * @return {RegisterCACertificateResponse} Success
		 */
		RegisterCACertificate(setAsActive: boolean | null | undefined, allowAutoRegistration: boolean | null | undefined, requestBody: RegisterCACertificatePostBody): Observable<RegisterCACertificateResponse> {
			return this.http.post<RegisterCACertificateResponse>(this.baseUri + 'cacertificate?setAsActive=' + setAsActive + '&allowAutoRegistration=' + allowAutoRegistration, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Registers a device certificate with AWS IoT. If you have more than one CA certificate that has the same subject field, you must specify the CA certificate that was used to sign the device certificate being registered.
		 * Post certificate/register
		 * @param {boolean} setAsActive A boolean value that specifies if the certificate is set to active.
		 * @return {RegisterCertificateResponse} Success
		 */
		RegisterCertificate(setAsActive: boolean | null | undefined, requestBody: RegisterCertificatePostBody): Observable<RegisterCertificateResponse> {
			return this.http.post<RegisterCertificateResponse>(this.baseUri + 'certificate/register?setAsActive=' + setAsActive, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Register a certificate that does not have a certificate authority (CA).
		 * Post certificate/register-no-ca
		 * @return {RegisterCertificateWithoutCAResponse} Success
		 */
		RegisterCertificateWithoutCA(requestBody: RegisterCertificateWithoutCAPostBody): Observable<RegisterCertificateWithoutCAResponse> {
			return this.http.post<RegisterCertificateWithoutCAResponse>(this.baseUri + 'certificate/register-no-ca', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Rejects a pending certificate transfer. After AWS IoT rejects a certificate transfer, the certificate status changes from <b>PENDING_TRANSFER</b> to <b>INACTIVE</b>.</p> <p>To check for pending certificate transfers, call <a>ListCertificates</a> to enumerate your certificates.</p> <p>This operation can only be called by the transfer destination. After it is called, the certificate will be returned to the source's account in the INACTIVE state.</p>
		 * Patch reject-certificate-transfer/{certificateId}
		 * @param {string} certificateId The ID of the certificate. (The last part of the certificate ARN contains the certificate ID.)
		 * @return {void} Success
		 */
		RejectCertificateTransfer(certificateId: string, requestBody: RejectCertificateTransferPatchBody): Observable<HttpResponse<string>> {
			return this.http.patch(this.baseUri + 'reject-certificate-transfer/' + (certificateId == null ? '' : encodeURIComponent(certificateId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Removes the given thing from the billing group.
		 * Put billing-groups/removeThingFromBillingGroup
		 * @return {RemoveThingFromBillingGroupResponse} Success
		 */
		RemoveThingFromBillingGroup(requestBody: RemoveThingFromBillingGroupPutBody): Observable<RemoveThingFromBillingGroupResponse> {
			return this.http.put<RemoveThingFromBillingGroupResponse>(this.baseUri + 'billing-groups/removeThingFromBillingGroup', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Remove the specified thing from the specified group.
		 * Put thing-groups/removeThingFromThingGroup
		 * @return {RemoveThingFromThingGroupResponse} Success
		 */
		RemoveThingFromThingGroup(requestBody: RemoveThingFromThingGroupPutBody): Observable<RemoveThingFromThingGroupResponse> {
			return this.http.put<RemoveThingFromThingGroupResponse>(this.baseUri + 'thing-groups/removeThingFromThingGroup', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * The query search index.
		 * Post indices/search
		 * @return {SearchIndexResponse} Success
		 */
		SearchIndex(requestBody: SearchIndexPostBody): Observable<SearchIndexResponse> {
			return this.http.post<SearchIndexResponse>(this.baseUri + 'indices/search', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Starts an on-demand Device Defender audit.
		 * Post audit/tasks
		 * @return {StartOnDemandAuditTaskResponse} Success
		 */
		StartOnDemandAuditTask(requestBody: StartOnDemandAuditTaskPostBody): Observable<StartOnDemandAuditTaskResponse> {
			return this.http.post<StartOnDemandAuditTaskResponse>(this.baseUri + 'audit/tasks', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Cancels a bulk thing provisioning task.
		 * Put thing-registration-tasks/{taskId}/cancel
		 * @param {string} taskId The bulk thing provisioning task ID.
		 * @return {StopThingRegistrationTaskResponse} Success
		 */
		StopThingRegistrationTask(taskId: string): Observable<StopThingRegistrationTaskResponse> {
			return this.http.put<StopThingRegistrationTaskResponse>(this.baseUri + 'thing-registration-tasks/' + (taskId == null ? '' : encodeURIComponent(taskId)) + '/cancel', null, {});
		}

		/**
		 * Adds to or modifies the tags of the given resource. Tags are metadata which can be used to manage a resource.
		 * Post tags
		 * @return {TagResourceResponse} Success
		 */
		TagResource(requestBody: TagResourcePostBody): Observable<TagResourceResponse> {
			return this.http.post<TagResourceResponse>(this.baseUri + 'tags', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Tests if a specified principal is authorized to perform an AWS IoT action on a specified resource. Use this to test and debug the authorization behavior of devices that connect to the AWS IoT device gateway.
		 * Post test-authorization
		 * @param {string} clientId The MQTT client ID.
		 * @return {TestAuthorizationResponse} Success
		 */
		TestAuthorization(clientId: string | null | undefined, requestBody: TestAuthorizationPostBody): Observable<TestAuthorizationResponse> {
			return this.http.post<TestAuthorizationResponse>(this.baseUri + 'test-authorization?clientId=' + (clientId == null ? '' : encodeURIComponent(clientId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Tests a custom authorization behavior by invoking a specified custom authorizer. Use this to test and debug the custom authorization behavior of devices that connect to the AWS IoT device gateway.
		 * Post authorizer/{authorizerName}/test
		 * @param {string} authorizerName The custom authorizer name.
		 * @return {TestInvokeAuthorizerResponse} Success
		 */
		TestInvokeAuthorizer(authorizerName: string, requestBody: TestInvokeAuthorizerPostBody): Observable<TestInvokeAuthorizerResponse> {
			return this.http.post<TestInvokeAuthorizerResponse>(this.baseUri + 'authorizer/' + (authorizerName == null ? '' : encodeURIComponent(authorizerName)) + '/test', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Transfers the specified certificate to the specified AWS account.</p> <p>You can cancel the transfer until it is acknowledged by the recipient.</p> <p>No notification is sent to the transfer destination's account. It is up to the caller to notify the transfer target.</p> <p>The certificate being transferred must not be in the ACTIVE state. You can use the UpdateCertificate API to deactivate it.</p> <p>The certificate must not have any policies attached to it. You can use the DetachPrincipalPolicy API to detach them.</p>
		 * Patch transfer-certificate/{certificateId}#targetAwsAccount
		 * @param {string} certificateId The ID of the certificate. (The last part of the certificate ARN contains the certificate ID.)
		 * @param {string} targetAwsAccount The AWS account.
		 * @return {TransferCertificateResponse} Success
		 */
		TransferCertificate(certificateId: string, targetAwsAccount: string, requestBody: TransferCertificatePatchBody): Observable<TransferCertificateResponse> {
			return this.http.patch<TransferCertificateResponse>(this.baseUri + 'transfer-certificate/' + (certificateId == null ? '' : encodeURIComponent(certificateId)) + '#targetAwsAccount&targetAwsAccount=' + (targetAwsAccount == null ? '' : encodeURIComponent(targetAwsAccount)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Removes the given tags (metadata) from the resource.
		 * Post untag
		 * @return {UntagResourceResponse} Success
		 */
		UntagResource(requestBody: UntagResourcePostBody): Observable<UntagResourceResponse> {
			return this.http.post<UntagResourceResponse>(this.baseUri + 'untag', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Updates the status of the specified certificate. This operation is idempotent.</p> <p>Moving a certificate from the ACTIVE state (including REVOKED) will not disconnect currently connected devices, but these devices will be unable to reconnect.</p> <p>The ACTIVE state is required to authenticate devices connecting to AWS IoT using a certificate.</p>
		 * Put certificates/{certificateId}#newStatus
		 * @param {string} certificateId The ID of the certificate. (The last part of the certificate ARN contains the certificate ID.)
		 * @param {CertificateDescriptionStatus} newStatus <p>The new status.</p> <p> <b>Note:</b> Setting the status to PENDING_TRANSFER or PENDING_ACTIVATION will result in an exception being thrown. PENDING_TRANSFER and PENDING_ACTIVATION are statuses used internally by AWS IoT. They are not intended for developer use.</p> <p> <b>Note:</b> The status value REGISTER_INACTIVE is deprecated and should not be used.</p>
		 * @return {void} Success
		 */
		UpdateCertificate(certificateId: string, newStatus: CertificateDescriptionStatus): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'certificates/' + (certificateId == null ? '' : encodeURIComponent(certificateId)) + '#newStatus&newStatus=' + newStatus, null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Updates the groups to which the thing belongs.
		 * Put thing-groups/updateThingGroupsForThing
		 * @return {UpdateThingGroupsForThingResponse} Success
		 */
		UpdateThingGroupsForThing(requestBody: UpdateThingGroupsForThingPutBody): Observable<UpdateThingGroupsForThingResponse> {
			return this.http.put<UpdateThingGroupsForThingResponse>(this.baseUri + 'thing-groups/updateThingGroupsForThing', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Validates a Device Defender security profile behaviors specification.
		 * Post security-profile-behaviors/validate
		 * @return {ValidateSecurityProfileBehaviorsResponse} Success
		 */
		ValidateSecurityProfileBehaviors(requestBody: ValidateSecurityProfileBehaviorsPostBody): Observable<ValidateSecurityProfileBehaviorsResponse> {
			return this.http.post<ValidateSecurityProfileBehaviorsResponse>(this.baseUri + 'security-profile-behaviors/validate', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

	export interface AddThingToBillingGroupPutBody {

		/**
		 * The name of the billing group.
		 * Max length: 128
		 * Min length: 1
		 */
		billingGroupName?: string | null;

		/** The ARN of the billing group. */
		billingGroupArn?: string | null;

		/**
		 * The name of the thing to be added to the billing group.
		 * Max length: 128
		 * Min length: 1
		 */
		thingName?: string | null;

		/** The ARN of the thing to be added to the billing group. */
		thingArn?: string | null;
	}
	export interface AddThingToBillingGroupPutBodyFormProperties {

		/**
		 * The name of the billing group.
		 * Max length: 128
		 * Min length: 1
		 */
		billingGroupName: FormControl<string | null | undefined>,

		/** The ARN of the billing group. */
		billingGroupArn: FormControl<string | null | undefined>,

		/**
		 * The name of the thing to be added to the billing group.
		 * Max length: 128
		 * Min length: 1
		 */
		thingName: FormControl<string | null | undefined>,

		/** The ARN of the thing to be added to the billing group. */
		thingArn: FormControl<string | null | undefined>,
	}
	export function CreateAddThingToBillingGroupPutBodyFormGroup() {
		return new FormGroup<AddThingToBillingGroupPutBodyFormProperties>({
			billingGroupName: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(128), Validators.pattern('[a-zA-Z0-9:_-]+')]),
			billingGroupArn: new FormControl<string | null | undefined>(undefined),
			thingName: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(128), Validators.pattern('[a-zA-Z0-9:_-]+')]),
			thingArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface AddThingToThingGroupPutBody {

		/**
		 * The name of the group to which you are adding a thing.
		 * Max length: 128
		 * Min length: 1
		 */
		thingGroupName?: string | null;

		/** The ARN of the group to which you are adding a thing. */
		thingGroupArn?: string | null;

		/**
		 * The name of the thing to add to a group.
		 * Max length: 128
		 * Min length: 1
		 */
		thingName?: string | null;

		/** The ARN of the thing to add to a group. */
		thingArn?: string | null;

		/** Override dynamic thing groups with static thing groups when 10-group limit is reached. If a thing belongs to 10 thing groups, and one or more of those groups are dynamic thing groups, adding a thing to a static group removes the thing from the last dynamic group. */
		overrideDynamicGroups?: boolean | null;
	}
	export interface AddThingToThingGroupPutBodyFormProperties {

		/**
		 * The name of the group to which you are adding a thing.
		 * Max length: 128
		 * Min length: 1
		 */
		thingGroupName: FormControl<string | null | undefined>,

		/** The ARN of the group to which you are adding a thing. */
		thingGroupArn: FormControl<string | null | undefined>,

		/**
		 * The name of the thing to add to a group.
		 * Max length: 128
		 * Min length: 1
		 */
		thingName: FormControl<string | null | undefined>,

		/** The ARN of the thing to add to a group. */
		thingArn: FormControl<string | null | undefined>,

		/** Override dynamic thing groups with static thing groups when 10-group limit is reached. If a thing belongs to 10 thing groups, and one or more of those groups are dynamic thing groups, adding a thing to a static group removes the thing from the last dynamic group. */
		overrideDynamicGroups: FormControl<boolean | null | undefined>,
	}
	export function CreateAddThingToThingGroupPutBodyFormGroup() {
		return new FormGroup<AddThingToThingGroupPutBodyFormProperties>({
			thingGroupName: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(128), Validators.pattern('[a-zA-Z0-9:_-]+')]),
			thingGroupArn: new FormControl<string | null | undefined>(undefined),
			thingName: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(128), Validators.pattern('[a-zA-Z0-9:_-]+')]),
			thingArn: new FormControl<string | null | undefined>(undefined),
			overrideDynamicGroups: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface AssociateTargetsWithJobPostBody {

		/**
		 * A list of thing group ARNs that define the targets of the job.
		 * Required
		 * Minimum items: 1
		 */
		targets: Array<string>;

		/**
		 * An optional comment string describing why the job was associated with the targets.
		 * Max length: 2028
		 */
		comment?: string | null;
	}
	export interface AssociateTargetsWithJobPostBodyFormProperties {

		/**
		 * An optional comment string describing why the job was associated with the targets.
		 * Max length: 2028
		 */
		comment: FormControl<string | null | undefined>,
	}
	export function CreateAssociateTargetsWithJobPostBodyFormGroup() {
		return new FormGroup<AssociateTargetsWithJobPostBodyFormProperties>({
			comment: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(2028), Validators.pattern('[^\p{C}]+')]),
		});

	}

	export interface AttachPolicyPutBody {

		/**
		 * The <a href="https://docs.aws.amazon.com/iot/latest/developerguide/iot-security-identity.html">identity</a> to which the policy is attached.
		 * Required
		 */
		target: string;
	}
	export interface AttachPolicyPutBodyFormProperties {

		/**
		 * The <a href="https://docs.aws.amazon.com/iot/latest/developerguide/iot-security-identity.html">identity</a> to which the policy is attached.
		 * Required
		 */
		target: FormControl<string | null | undefined>,
	}
	export function CreateAttachPolicyPutBodyFormGroup() {
		return new FormGroup<AttachPolicyPutBodyFormProperties>({
			target: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DetachPolicyPostBody {

		/**
		 * The target from which the policy will be detached.
		 * Required
		 */
		target: string;
	}
	export interface DetachPolicyPostBodyFormProperties {

		/**
		 * The target from which the policy will be detached.
		 * Required
		 */
		target: FormControl<string | null | undefined>,
	}
	export function CreateDetachPolicyPostBodyFormGroup() {
		return new FormGroup<DetachPolicyPostBodyFormProperties>({
			target: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CancelJobPutBody {

		/**
		 * (Optional)A reason code string that explains why the job was canceled.
		 * Max length: 128
		 */
		reasonCode?: string | null;

		/**
		 * An optional comment string describing why the job was canceled.
		 * Max length: 2028
		 */
		comment?: string | null;
	}
	export interface CancelJobPutBodyFormProperties {

		/**
		 * (Optional)A reason code string that explains why the job was canceled.
		 * Max length: 128
		 */
		reasonCode: FormControl<string | null | undefined>,

		/**
		 * An optional comment string describing why the job was canceled.
		 * Max length: 2028
		 */
		comment: FormControl<string | null | undefined>,
	}
	export function CreateCancelJobPutBodyFormGroup() {
		return new FormGroup<CancelJobPutBodyFormProperties>({
			reasonCode: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(128), Validators.pattern('[\p{Upper}\p{Digit}_]+')]),
			comment: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(2028), Validators.pattern('[^\p{C}]+')]),
		});

	}

	export interface CancelJobExecutionPutBody {

		/** (Optional) The expected current version of the job execution. Each time you update the job execution, its version is incremented. If the version of the job execution stored in Jobs does not match, the update is rejected with a VersionMismatch error, and an ErrorResponse that contains the current job execution status data is returned. (This makes it unnecessary to perform a separate DescribeJobExecution request in order to obtain the job execution status data.) */
		expectedVersion?: number | null;

		/** A collection of name/value pairs that describe the status of the job execution. If not specified, the statusDetails are unchanged. You can specify at most 10 name/value pairs. */
		statusDetails?: {[id: string]: string };
	}
	export interface CancelJobExecutionPutBodyFormProperties {

		/** (Optional) The expected current version of the job execution. Each time you update the job execution, its version is incremented. If the version of the job execution stored in Jobs does not match, the update is rejected with a VersionMismatch error, and an ErrorResponse that contains the current job execution status data is returned. (This makes it unnecessary to perform a separate DescribeJobExecution request in order to obtain the job execution status data.) */
		expectedVersion: FormControl<number | null | undefined>,

		/** A collection of name/value pairs that describe the status of the job execution. If not specified, the statusDetails are unchanged. You can specify at most 10 name/value pairs. */
		statusDetails: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateCancelJobExecutionPutBodyFormGroup() {
		return new FormGroup<CancelJobExecutionPutBodyFormProperties>({
			expectedVersion: new FormControl<number | null | undefined>(undefined),
			statusDetails: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}

	export interface SetDefaultAuthorizerPostBody {

		/**
		 * The authorizer name.
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		authorizerName: string;
	}
	export interface SetDefaultAuthorizerPostBodyFormProperties {

		/**
		 * The authorizer name.
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		authorizerName: FormControl<string | null | undefined>,
	}
	export function CreateSetDefaultAuthorizerPostBodyFormGroup() {
		return new FormGroup<SetDefaultAuthorizerPostBodyFormProperties>({
			authorizerName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(128), Validators.pattern('[\w=,@-]+')]),
		});

	}

	export interface CreateAuthorizerPostBody {

		/**
		 * The ARN of the authorizer's Lambda function.
		 * Required
		 */
		authorizerFunctionArn: string;

		/**
		 * The name of the token key used to extract the token from the HTTP headers.
		 * Max length: 128
		 * Min length: 1
		 */
		tokenKeyName?: string | null;

		/** The public keys used to verify the digital signature returned by your custom authentication service. */
		tokenSigningPublicKeys?: {[id: string]: string };

		/** The status of the create authorizer request. */
		status?: AuthorizerDescriptionStatus | null;

		/** <p>Metadata which can be used to manage the custom authorizer.</p> <note> <p>For URI Request parameters use format: ...key1=value1&amp;key2=value2...</p> <p>For the CLI command-line parameter use format: &amp;&amp;tags "key1=value1&amp;key2=value2..."</p> <p>For the cli-input-json file use format: "tags": "key1=value1&amp;key2=value2..."</p> </note> */
		tags?: Array<Tag>;

		/** Specifies whether AWS IoT validates the token signature in an authorization request. */
		signingDisabled?: boolean | null;
	}
	export interface CreateAuthorizerPostBodyFormProperties {

		/**
		 * The ARN of the authorizer's Lambda function.
		 * Required
		 */
		authorizerFunctionArn: FormControl<string | null | undefined>,

		/**
		 * The name of the token key used to extract the token from the HTTP headers.
		 * Max length: 128
		 * Min length: 1
		 */
		tokenKeyName: FormControl<string | null | undefined>,

		/** The public keys used to verify the digital signature returned by your custom authentication service. */
		tokenSigningPublicKeys: FormControl<{[id: string]: string } | null | undefined>,

		/** The status of the create authorizer request. */
		status: FormControl<AuthorizerDescriptionStatus | null | undefined>,

		/** Specifies whether AWS IoT validates the token signature in an authorization request. */
		signingDisabled: FormControl<boolean | null | undefined>,
	}
	export function CreateCreateAuthorizerPostBodyFormGroup() {
		return new FormGroup<CreateAuthorizerPostBodyFormProperties>({
			authorizerFunctionArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			tokenKeyName: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(128), Validators.pattern('[a-zA-Z0-9_-]+')]),
			tokenSigningPublicKeys: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			status: new FormControl<AuthorizerDescriptionStatus | null | undefined>(undefined),
			signingDisabled: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface UpdateAuthorizerPutBody {

		/** The ARN of the authorizer's Lambda function. */
		authorizerFunctionArn?: string | null;

		/**
		 * The key used to extract the token from the HTTP headers.
		 * Max length: 128
		 * Min length: 1
		 */
		tokenKeyName?: string | null;

		/** The public keys used to verify the token signature. */
		tokenSigningPublicKeys?: {[id: string]: string };

		/** The status of the update authorizer request. */
		status?: AuthorizerDescriptionStatus | null;
	}
	export interface UpdateAuthorizerPutBodyFormProperties {

		/** The ARN of the authorizer's Lambda function. */
		authorizerFunctionArn: FormControl<string | null | undefined>,

		/**
		 * The key used to extract the token from the HTTP headers.
		 * Max length: 128
		 * Min length: 1
		 */
		tokenKeyName: FormControl<string | null | undefined>,

		/** The public keys used to verify the token signature. */
		tokenSigningPublicKeys: FormControl<{[id: string]: string } | null | undefined>,

		/** The status of the update authorizer request. */
		status: FormControl<AuthorizerDescriptionStatus | null | undefined>,
	}
	export function CreateUpdateAuthorizerPutBodyFormGroup() {
		return new FormGroup<UpdateAuthorizerPutBodyFormProperties>({
			authorizerFunctionArn: new FormControl<string | null | undefined>(undefined),
			tokenKeyName: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(128), Validators.pattern('[a-zA-Z0-9_-]+')]),
			tokenSigningPublicKeys: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			status: new FormControl<AuthorizerDescriptionStatus | null | undefined>(undefined),
		});

	}

	export interface CreateBillingGroupPostBody {

		/** The properties of a billing group. */
		billingGroupProperties?: CreateBillingGroupPostBodyBillingGroupProperties;

		/** Metadata which can be used to manage the billing group. */
		tags?: Array<Tag>;
	}
	export interface CreateBillingGroupPostBodyFormProperties {
	}
	export function CreateCreateBillingGroupPostBodyFormGroup() {
		return new FormGroup<CreateBillingGroupPostBodyFormProperties>({
		});

	}

	export interface CreateBillingGroupPostBodyBillingGroupProperties {

		/** Max length: 2028 */
		billingGroupDescription?: string | null;
	}
	export interface CreateBillingGroupPostBodyBillingGroupPropertiesFormProperties {

		/** Max length: 2028 */
		billingGroupDescription: FormControl<string | null | undefined>,
	}
	export function CreateCreateBillingGroupPostBodyBillingGroupPropertiesFormGroup() {
		return new FormGroup<CreateBillingGroupPostBodyBillingGroupPropertiesFormProperties>({
			billingGroupDescription: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(2028), Validators.pattern('[\p{Graph}\x20]*')]),
		});

	}

	export interface UpdateBillingGroupPatchBody {

		/**
		 * The properties of a billing group.
		 * Required
		 */
		billingGroupProperties: UpdateBillingGroupPatchBodyBillingGroupProperties;

		/** The expected version of the billing group. If the version of the billing group does not match the expected version specified in the request, the <code>UpdateBillingGroup</code> request is rejected with a <code>VersionConflictException</code>. */
		expectedVersion?: number | null;
	}
	export interface UpdateBillingGroupPatchBodyFormProperties {

		/** The expected version of the billing group. If the version of the billing group does not match the expected version specified in the request, the <code>UpdateBillingGroup</code> request is rejected with a <code>VersionConflictException</code>. */
		expectedVersion: FormControl<number | null | undefined>,
	}
	export function CreateUpdateBillingGroupPatchBodyFormGroup() {
		return new FormGroup<UpdateBillingGroupPatchBodyFormProperties>({
			expectedVersion: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface UpdateBillingGroupPatchBodyBillingGroupProperties {

		/** Max length: 2028 */
		billingGroupDescription?: string | null;
	}
	export interface UpdateBillingGroupPatchBodyBillingGroupPropertiesFormProperties {

		/** Max length: 2028 */
		billingGroupDescription: FormControl<string | null | undefined>,
	}
	export function CreateUpdateBillingGroupPatchBodyBillingGroupPropertiesFormGroup() {
		return new FormGroup<UpdateBillingGroupPatchBodyBillingGroupPropertiesFormProperties>({
			billingGroupDescription: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(2028), Validators.pattern('[\p{Graph}\x20]*')]),
		});

	}

	export interface CreateCertificateFromCsrPostBody {

		/**
		 * The certificate signing request (CSR).
		 * Required
		 * Min length: 1
		 */
		certificateSigningRequest: string;
	}
	export interface CreateCertificateFromCsrPostBodyFormProperties {

		/**
		 * The certificate signing request (CSR).
		 * Required
		 * Min length: 1
		 */
		certificateSigningRequest: FormControl<string | null | undefined>,
	}
	export function CreateCreateCertificateFromCsrPostBodyFormGroup() {
		return new FormGroup<CreateCertificateFromCsrPostBodyFormProperties>({
			certificateSigningRequest: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1)]),
		});

	}

	export interface CreateDimensionPostBody {

		/**
		 * Specifies the type of dimension. Supported types: <code>TOPIC_FILTER.</code>
		 * Required
		 */
		type: DescribeDimensionResponseType;

		/**
		 * Specifies the value or list of values for the dimension. For <code>TOPIC_FILTER</code> dimensions, this is a pattern used to match the MQTT topic (for example, "admin/#").
		 * Required
		 * Minimum items: 1
		 * Maximum items: 100
		 */
		stringValues: Array<string>;

		/** Metadata that can be used to manage the dimension. */
		tags?: Array<Tag>;

		/**
		 * Each dimension must have a unique client request token. If you try to create a new dimension with the same token as a dimension that already exists, an exception occurs. If you omit this value, AWS SDKs will automatically generate a unique client request.
		 * Required
		 * Max length: 64
		 * Min length: 1
		 */
		clientRequestToken: string;
	}
	export interface CreateDimensionPostBodyFormProperties {

		/**
		 * Specifies the type of dimension. Supported types: <code>TOPIC_FILTER.</code>
		 * Required
		 */
		type: FormControl<DescribeDimensionResponseType | null | undefined>,

		/**
		 * Each dimension must have a unique client request token. If you try to create a new dimension with the same token as a dimension that already exists, an exception occurs. If you omit this value, AWS SDKs will automatically generate a unique client request.
		 * Required
		 * Max length: 64
		 * Min length: 1
		 */
		clientRequestToken: FormControl<string | null | undefined>,
	}
	export function CreateCreateDimensionPostBodyFormGroup() {
		return new FormGroup<CreateDimensionPostBodyFormProperties>({
			type: new FormControl<DescribeDimensionResponseType | null | undefined>(undefined, [Validators.required]),
			clientRequestToken: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(64), Validators.pattern('^[a-zA-Z0-9-_]+$')]),
		});

	}

	export interface UpdateDimensionPatchBody {

		/**
		 * Specifies the value or list of values for the dimension. For <code>TOPIC_FILTER</code> dimensions, this is a pattern used to match the MQTT topic (for example, "admin/#").
		 * Required
		 * Minimum items: 1
		 * Maximum items: 100
		 */
		stringValues: Array<string>;
	}
	export interface UpdateDimensionPatchBodyFormProperties {
	}
	export function CreateUpdateDimensionPatchBodyFormGroup() {
		return new FormGroup<UpdateDimensionPatchBodyFormProperties>({
		});

	}

	export interface CreateDomainConfigurationPostBody {

		/**
		 * The name of the domain.
		 * Max length: 253
		 * Min length: 1
		 */
		domainName?: string | null;

		/**
		 * The ARNs of the certificates that AWS IoT passes to the device during the TLS handshake. Currently you can specify only one certificate ARN. This value is not required for AWS-managed domains.
		 * Minimum items: 0
		 * Maximum items: 1
		 */
		serverCertificateArns?: Array<string>;

		/**
		 * The certificate used to validate the server certificate and prove domain name ownership. This certificate must be signed by a public certificate authority. This value is not required for AWS-managed domains.
		 * Max length: 2048
		 * Min length: 1
		 */
		validationCertificateArn?: string | null;

		/** An object that specifies the authorization service for a domain. */
		authorizerConfig?: CreateDomainConfigurationPostBodyAuthorizerConfig;

		/** <p>The type of service delivered by the endpoint.</p> <note> <p>AWS IoT Core currently supports only the <code>DATA</code> service type.</p> </note> */
		serviceType?: DescribeDomainConfigurationResponseServiceType | null;

		/** <p>Metadata which can be used to manage the domain configuration.</p> <note> <p>For URI Request parameters use format: ...key1=value1&amp;key2=value2...</p> <p>For the CLI command-line parameter use format: &amp;&amp;tags "key1=value1&amp;key2=value2..."</p> <p>For the cli-input-json file use format: "tags": "key1=value1&amp;key2=value2..."</p> </note> */
		tags?: Array<Tag>;
	}
	export interface CreateDomainConfigurationPostBodyFormProperties {

		/**
		 * The name of the domain.
		 * Max length: 253
		 * Min length: 1
		 */
		domainName: FormControl<string | null | undefined>,

		/**
		 * The certificate used to validate the server certificate and prove domain name ownership. This certificate must be signed by a public certificate authority. This value is not required for AWS-managed domains.
		 * Max length: 2048
		 * Min length: 1
		 */
		validationCertificateArn: FormControl<string | null | undefined>,

		/** <p>The type of service delivered by the endpoint.</p> <note> <p>AWS IoT Core currently supports only the <code>DATA</code> service type.</p> </note> */
		serviceType: FormControl<DescribeDomainConfigurationResponseServiceType | null | undefined>,
	}
	export function CreateCreateDomainConfigurationPostBodyFormGroup() {
		return new FormGroup<CreateDomainConfigurationPostBodyFormProperties>({
			domainName: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(253)]),
			validationCertificateArn: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(2048), Validators.pattern('arn:aws:acm:[a-z]{2}-(gov-)?[a-z]{4,9}-\d{1}:\d{12}:certificate/?[a-zA-Z0-9/-]+')]),
			serviceType: new FormControl<DescribeDomainConfigurationResponseServiceType | null | undefined>(undefined),
		});

	}

	export interface CreateDomainConfigurationPostBodyAuthorizerConfig {

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		defaultAuthorizerName?: string | null;
		allowAuthorizerOverride?: boolean | null;
	}
	export interface CreateDomainConfigurationPostBodyAuthorizerConfigFormProperties {

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		defaultAuthorizerName: FormControl<string | null | undefined>,
		allowAuthorizerOverride: FormControl<boolean | null | undefined>,
	}
	export function CreateCreateDomainConfigurationPostBodyAuthorizerConfigFormGroup() {
		return new FormGroup<CreateDomainConfigurationPostBodyAuthorizerConfigFormProperties>({
			defaultAuthorizerName: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(128), Validators.pattern('[\w=,@-]+')]),
			allowAuthorizerOverride: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface UpdateDomainConfigurationPutBody {

		/** An object that specifies the authorization service for a domain. */
		authorizerConfig?: UpdateDomainConfigurationPutBodyAuthorizerConfig;

		/** The status to which the domain configuration should be updated. */
		domainConfigurationStatus?: DescribeDomainConfigurationResponseDomainConfigurationStatus | null;

		/** Removes the authorization configuration from a domain. */
		removeAuthorizerConfig?: boolean | null;
	}
	export interface UpdateDomainConfigurationPutBodyFormProperties {

		/** The status to which the domain configuration should be updated. */
		domainConfigurationStatus: FormControl<DescribeDomainConfigurationResponseDomainConfigurationStatus | null | undefined>,

		/** Removes the authorization configuration from a domain. */
		removeAuthorizerConfig: FormControl<boolean | null | undefined>,
	}
	export function CreateUpdateDomainConfigurationPutBodyFormGroup() {
		return new FormGroup<UpdateDomainConfigurationPutBodyFormProperties>({
			domainConfigurationStatus: new FormControl<DescribeDomainConfigurationResponseDomainConfigurationStatus | null | undefined>(undefined),
			removeAuthorizerConfig: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface UpdateDomainConfigurationPutBodyAuthorizerConfig {

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		defaultAuthorizerName?: string | null;
		allowAuthorizerOverride?: boolean | null;
	}
	export interface UpdateDomainConfigurationPutBodyAuthorizerConfigFormProperties {

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		defaultAuthorizerName: FormControl<string | null | undefined>,
		allowAuthorizerOverride: FormControl<boolean | null | undefined>,
	}
	export function CreateUpdateDomainConfigurationPutBodyAuthorizerConfigFormGroup() {
		return new FormGroup<UpdateDomainConfigurationPutBodyAuthorizerConfigFormProperties>({
			defaultAuthorizerName: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(128), Validators.pattern('[\w=,@-]+')]),
			allowAuthorizerOverride: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface CreateDynamicThingGroupPostBody {

		/** Thing group properties. */
		thingGroupProperties?: CreateDynamicThingGroupPostBodyThingGroupProperties;

		/**
		 * <p>The dynamic thing group index name.</p> <note> <p>Currently one index is supported: "AWS_Things".</p> </note>
		 * Max length: 128
		 * Min length: 1
		 */
		indexName?: string | null;

		/**
		 * <p>The dynamic thing group search query string.</p> <p>See <a href="https://docs.aws.amazon.com/iot/latest/developerguide/query-syntax.html">Query Syntax</a> for information about query string syntax.</p>
		 * Required
		 * Min length: 1
		 */
		queryString: string;

		/** <p>The dynamic thing group query version.</p> <note> <p>Currently one query version is supported: "2017-09-30". If not specified, the query version defaults to this value.</p> </note> */
		queryVersion?: string | null;

		/** Metadata which can be used to manage the dynamic thing group. */
		tags?: Array<Tag>;
	}
	export interface CreateDynamicThingGroupPostBodyFormProperties {

		/**
		 * <p>The dynamic thing group index name.</p> <note> <p>Currently one index is supported: "AWS_Things".</p> </note>
		 * Max length: 128
		 * Min length: 1
		 */
		indexName: FormControl<string | null | undefined>,

		/**
		 * <p>The dynamic thing group search query string.</p> <p>See <a href="https://docs.aws.amazon.com/iot/latest/developerguide/query-syntax.html">Query Syntax</a> for information about query string syntax.</p>
		 * Required
		 * Min length: 1
		 */
		queryString: FormControl<string | null | undefined>,

		/** <p>The dynamic thing group query version.</p> <note> <p>Currently one query version is supported: "2017-09-30". If not specified, the query version defaults to this value.</p> </note> */
		queryVersion: FormControl<string | null | undefined>,
	}
	export function CreateCreateDynamicThingGroupPostBodyFormGroup() {
		return new FormGroup<CreateDynamicThingGroupPostBodyFormProperties>({
			indexName: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(128), Validators.pattern('[a-zA-Z0-9:_-]+')]),
			queryString: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1)]),
			queryVersion: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateDynamicThingGroupPostBodyThingGroupProperties {

		/** Max length: 2028 */
		thingGroupDescription?: string | null;

		/** The attribute payload. */
		attributePayload?: AttributePayload;
	}
	export interface CreateDynamicThingGroupPostBodyThingGroupPropertiesFormProperties {

		/** Max length: 2028 */
		thingGroupDescription: FormControl<string | null | undefined>,
	}
	export function CreateCreateDynamicThingGroupPostBodyThingGroupPropertiesFormGroup() {
		return new FormGroup<CreateDynamicThingGroupPostBodyThingGroupPropertiesFormProperties>({
			thingGroupDescription: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(2028), Validators.pattern('[\p{Graph}\x20]*')]),
		});

	}

	export interface UpdateDynamicThingGroupPatchBody {

		/**
		 * Thing group properties.
		 * Required
		 */
		thingGroupProperties: UpdateDynamicThingGroupPatchBodyThingGroupProperties;

		/** The expected version of the dynamic thing group to update. */
		expectedVersion?: number | null;

		/**
		 * <p>The dynamic thing group index to update.</p> <note> <p>Currently one index is supported: 'AWS_Things'.</p> </note>
		 * Max length: 128
		 * Min length: 1
		 */
		indexName?: string | null;

		/**
		 * The dynamic thing group search query string to update.
		 * Min length: 1
		 */
		queryString?: string | null;

		/** <p>The dynamic thing group query version to update.</p> <note> <p>Currently one query version is supported: "2017-09-30". If not specified, the query version defaults to this value.</p> </note> */
		queryVersion?: string | null;
	}
	export interface UpdateDynamicThingGroupPatchBodyFormProperties {

		/** The expected version of the dynamic thing group to update. */
		expectedVersion: FormControl<number | null | undefined>,

		/**
		 * <p>The dynamic thing group index to update.</p> <note> <p>Currently one index is supported: 'AWS_Things'.</p> </note>
		 * Max length: 128
		 * Min length: 1
		 */
		indexName: FormControl<string | null | undefined>,

		/**
		 * The dynamic thing group search query string to update.
		 * Min length: 1
		 */
		queryString: FormControl<string | null | undefined>,

		/** <p>The dynamic thing group query version to update.</p> <note> <p>Currently one query version is supported: "2017-09-30". If not specified, the query version defaults to this value.</p> </note> */
		queryVersion: FormControl<string | null | undefined>,
	}
	export function CreateUpdateDynamicThingGroupPatchBodyFormGroup() {
		return new FormGroup<UpdateDynamicThingGroupPatchBodyFormProperties>({
			expectedVersion: new FormControl<number | null | undefined>(undefined),
			indexName: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(128), Validators.pattern('[a-zA-Z0-9:_-]+')]),
			queryString: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1)]),
			queryVersion: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateDynamicThingGroupPatchBodyThingGroupProperties {

		/** Max length: 2028 */
		thingGroupDescription?: string | null;

		/** The attribute payload. */
		attributePayload?: AttributePayload;
	}
	export interface UpdateDynamicThingGroupPatchBodyThingGroupPropertiesFormProperties {

		/** Max length: 2028 */
		thingGroupDescription: FormControl<string | null | undefined>,
	}
	export function CreateUpdateDynamicThingGroupPatchBodyThingGroupPropertiesFormGroup() {
		return new FormGroup<UpdateDynamicThingGroupPatchBodyThingGroupPropertiesFormProperties>({
			thingGroupDescription: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(2028), Validators.pattern('[\p{Graph}\x20]*')]),
		});

	}

	export interface CreateJobPutBody {

		/**
		 * A list of things and thing groups to which the job should be sent.
		 * Required
		 * Minimum items: 1
		 */
		targets: Array<string>;

		/**
		 * An S3 link to the job document.
		 * Max length: 1350
		 * Min length: 1
		 */
		documentSource?: string | null;

		/**
		 * <p>The job document.</p> <note> <p>If the job document resides in an S3 bucket, you must use a placeholder link when specifying the document.</p> <p>The placeholder link is of the following form:</p> <p> <code>${aws:iot:s3-presigned-url:https://s3.amazonaws.com/<i>bucket</i>/<i>key</i>}</code> </p> <p>where <i>bucket</i> is your bucket name and <i>key</i> is the object in the bucket to which you are linking.</p> </note>
		 * Max length: 32768
		 */
		document?: string | null;

		/**
		 * A short text description of the job.
		 * Max length: 2028
		 */
		description?: string | null;

		/** Configuration for pre-signed S3 URLs. */
		presignedUrlConfig?: CreateJobPutBodyPresignedUrlConfig;

		/** Specifies whether the job will continue to run (CONTINUOUS), or will be complete after all those things specified as targets have completed the job (SNAPSHOT). If continuous, the job may also be run on a thing when a change is detected in a target. For example, a job will run on a thing when the thing is added to a target group, even after the job was completed by all things originally in the group. */
		targetSelection?: JobTargetSelection | null;

		/** Allows you to create a staged rollout of a job. */
		jobExecutionsRolloutConfig?: CreateJobPutBodyJobExecutionsRolloutConfig;

		/** Details of abort criteria to abort the job. */
		abortConfig?: CreateJobPutBodyAbortConfig;

		/** Specifies the amount of time each device has to finish its execution of the job. A timer is started when the job execution status is set to <code>IN_PROGRESS</code>. If the job execution status is not set to another terminal state before the timer expires, it will be automatically set to <code>TIMED_OUT</code>. */
		timeoutConfig?: CreateJobPutBodyTimeoutConfig;

		/** Metadata which can be used to manage the job. */
		tags?: Array<Tag>;
	}
	export interface CreateJobPutBodyFormProperties {

		/**
		 * An S3 link to the job document.
		 * Max length: 1350
		 * Min length: 1
		 */
		documentSource: FormControl<string | null | undefined>,

		/**
		 * <p>The job document.</p> <note> <p>If the job document resides in an S3 bucket, you must use a placeholder link when specifying the document.</p> <p>The placeholder link is of the following form:</p> <p> <code>${aws:iot:s3-presigned-url:https://s3.amazonaws.com/<i>bucket</i>/<i>key</i>}</code> </p> <p>where <i>bucket</i> is your bucket name and <i>key</i> is the object in the bucket to which you are linking.</p> </note>
		 * Max length: 32768
		 */
		document: FormControl<string | null | undefined>,

		/**
		 * A short text description of the job.
		 * Max length: 2028
		 */
		description: FormControl<string | null | undefined>,

		/** Specifies whether the job will continue to run (CONTINUOUS), or will be complete after all those things specified as targets have completed the job (SNAPSHOT). If continuous, the job may also be run on a thing when a change is detected in a target. For example, a job will run on a thing when the thing is added to a target group, even after the job was completed by all things originally in the group. */
		targetSelection: FormControl<JobTargetSelection | null | undefined>,
	}
	export function CreateCreateJobPutBodyFormGroup() {
		return new FormGroup<CreateJobPutBodyFormProperties>({
			documentSource: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(1350)]),
			document: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(32768)]),
			description: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(2028), Validators.pattern('[^\p{C}]+')]),
			targetSelection: new FormControl<JobTargetSelection | null | undefined>(undefined),
		});

	}

	export interface CreateJobPutBodyPresignedUrlConfig {

		/**
		 * Max length: 2048
		 * Min length: 20
		 */
		roleArn?: string | null;

		/**
		 * Minimum: 60
		 * Maximum: 3600
		 */
		expiresInSec?: number | null;
	}
	export interface CreateJobPutBodyPresignedUrlConfigFormProperties {

		/**
		 * Max length: 2048
		 * Min length: 20
		 */
		roleArn: FormControl<string | null | undefined>,

		/**
		 * Minimum: 60
		 * Maximum: 3600
		 */
		expiresInSec: FormControl<number | null | undefined>,
	}
	export function CreateCreateJobPutBodyPresignedUrlConfigFormGroup() {
		return new FormGroup<CreateJobPutBodyPresignedUrlConfigFormProperties>({
			roleArn: new FormControl<string | null | undefined>(undefined, [Validators.minLength(20), Validators.maxLength(2048)]),
			expiresInSec: new FormControl<number | null | undefined>(undefined, [Validators.min(60), Validators.max(3600)]),
		});

	}

	export interface CreateJobPutBodyJobExecutionsRolloutConfig {

		/**
		 * Minimum: 1
		 * Maximum: 1000
		 */
		maximumPerMinute?: number | null;

		/** Allows you to create an exponential rate of rollout for a job. */
		exponentialRate?: ExponentialRolloutRate;
	}
	export interface CreateJobPutBodyJobExecutionsRolloutConfigFormProperties {

		/**
		 * Minimum: 1
		 * Maximum: 1000
		 */
		maximumPerMinute: FormControl<number | null | undefined>,
	}
	export function CreateCreateJobPutBodyJobExecutionsRolloutConfigFormGroup() {
		return new FormGroup<CreateJobPutBodyJobExecutionsRolloutConfigFormProperties>({
			maximumPerMinute: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(1000)]),
		});

	}

	export interface CreateJobPutBodyAbortConfig {

		/** Minimum items: 1 */
		criteriaList?: Array<AbortCriteria>;
	}
	export interface CreateJobPutBodyAbortConfigFormProperties {
	}
	export function CreateCreateJobPutBodyAbortConfigFormGroup() {
		return new FormGroup<CreateJobPutBodyAbortConfigFormProperties>({
		});

	}

	export interface CreateJobPutBodyTimeoutConfig {
		inProgressTimeoutInMinutes?: number | null;
	}
	export interface CreateJobPutBodyTimeoutConfigFormProperties {
		inProgressTimeoutInMinutes: FormControl<number | null | undefined>,
	}
	export function CreateCreateJobPutBodyTimeoutConfigFormGroup() {
		return new FormGroup<CreateJobPutBodyTimeoutConfigFormProperties>({
			inProgressTimeoutInMinutes: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface UpdateJobPatchBody {

		/**
		 * A short text description of the job.
		 * Max length: 2028
		 */
		description?: string | null;

		/** Configuration for pre-signed S3 URLs. */
		presignedUrlConfig?: UpdateJobPatchBodyPresignedUrlConfig;

		/** Allows you to create a staged rollout of a job. */
		jobExecutionsRolloutConfig?: UpdateJobPatchBodyJobExecutionsRolloutConfig;

		/** Details of abort criteria to abort the job. */
		abortConfig?: UpdateJobPatchBodyAbortConfig;

		/** Specifies the amount of time each device has to finish its execution of the job. A timer is started when the job execution status is set to <code>IN_PROGRESS</code>. If the job execution status is not set to another terminal state before the timer expires, it will be automatically set to <code>TIMED_OUT</code>. */
		timeoutConfig?: UpdateJobPatchBodyTimeoutConfig;
	}
	export interface UpdateJobPatchBodyFormProperties {

		/**
		 * A short text description of the job.
		 * Max length: 2028
		 */
		description: FormControl<string | null | undefined>,
	}
	export function CreateUpdateJobPatchBodyFormGroup() {
		return new FormGroup<UpdateJobPatchBodyFormProperties>({
			description: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(2028), Validators.pattern('[^\p{C}]+')]),
		});

	}

	export interface UpdateJobPatchBodyPresignedUrlConfig {

		/**
		 * Max length: 2048
		 * Min length: 20
		 */
		roleArn?: string | null;

		/**
		 * Minimum: 60
		 * Maximum: 3600
		 */
		expiresInSec?: number | null;
	}
	export interface UpdateJobPatchBodyPresignedUrlConfigFormProperties {

		/**
		 * Max length: 2048
		 * Min length: 20
		 */
		roleArn: FormControl<string | null | undefined>,

		/**
		 * Minimum: 60
		 * Maximum: 3600
		 */
		expiresInSec: FormControl<number | null | undefined>,
	}
	export function CreateUpdateJobPatchBodyPresignedUrlConfigFormGroup() {
		return new FormGroup<UpdateJobPatchBodyPresignedUrlConfigFormProperties>({
			roleArn: new FormControl<string | null | undefined>(undefined, [Validators.minLength(20), Validators.maxLength(2048)]),
			expiresInSec: new FormControl<number | null | undefined>(undefined, [Validators.min(60), Validators.max(3600)]),
		});

	}

	export interface UpdateJobPatchBodyJobExecutionsRolloutConfig {

		/**
		 * Minimum: 1
		 * Maximum: 1000
		 */
		maximumPerMinute?: number | null;

		/** Allows you to create an exponential rate of rollout for a job. */
		exponentialRate?: ExponentialRolloutRate;
	}
	export interface UpdateJobPatchBodyJobExecutionsRolloutConfigFormProperties {

		/**
		 * Minimum: 1
		 * Maximum: 1000
		 */
		maximumPerMinute: FormControl<number | null | undefined>,
	}
	export function CreateUpdateJobPatchBodyJobExecutionsRolloutConfigFormGroup() {
		return new FormGroup<UpdateJobPatchBodyJobExecutionsRolloutConfigFormProperties>({
			maximumPerMinute: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(1000)]),
		});

	}

	export interface UpdateJobPatchBodyAbortConfig {

		/** Minimum items: 1 */
		criteriaList?: Array<AbortCriteria>;
	}
	export interface UpdateJobPatchBodyAbortConfigFormProperties {
	}
	export function CreateUpdateJobPatchBodyAbortConfigFormGroup() {
		return new FormGroup<UpdateJobPatchBodyAbortConfigFormProperties>({
		});

	}

	export interface UpdateJobPatchBodyTimeoutConfig {
		inProgressTimeoutInMinutes?: number | null;
	}
	export interface UpdateJobPatchBodyTimeoutConfigFormProperties {
		inProgressTimeoutInMinutes: FormControl<number | null | undefined>,
	}
	export function CreateUpdateJobPatchBodyTimeoutConfigFormGroup() {
		return new FormGroup<UpdateJobPatchBodyTimeoutConfigFormProperties>({
			inProgressTimeoutInMinutes: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface CreateMitigationActionPostBody {

		/**
		 * The ARN of the IAM role that is used to apply the mitigation action.
		 * Required
		 * Max length: 2048
		 * Min length: 20
		 */
		roleArn: string;

		/**
		 * The set of parameters for this mitigation action. You can specify only one type of parameter (in other words, you can apply only one action for each defined mitigation action).
		 * Required
		 */
		actionParams: CreateMitigationActionPostBodyActionParams;

		/** Metadata that can be used to manage the mitigation action. */
		tags?: Array<Tag>;
	}
	export interface CreateMitigationActionPostBodyFormProperties {

		/**
		 * The ARN of the IAM role that is used to apply the mitigation action.
		 * Required
		 * Max length: 2048
		 * Min length: 20
		 */
		roleArn: FormControl<string | null | undefined>,
	}
	export function CreateCreateMitigationActionPostBodyFormGroup() {
		return new FormGroup<CreateMitigationActionPostBodyFormProperties>({
			roleArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(20), Validators.maxLength(2048)]),
		});

	}

	export interface CreateMitigationActionPostBodyActionParams {

		/** Parameters to define a mitigation action that changes the state of the device certificate to inactive. */
		updateDeviceCertificateParams?: UpdateDeviceCertificateParams;

		/** Parameters to define a mitigation action that changes the state of the CA certificate to inactive. */
		updateCACertificateParams?: UpdateCACertificateParams;

		/** Parameters used when defining a mitigation action that move a set of things to a thing group. */
		addThingsToThingGroupParams?: AddThingsToThingGroupParams;

		/** Parameters to define a mitigation action that adds a blank policy to restrict permissions. */
		replaceDefaultPolicyVersionParams?: ReplaceDefaultPolicyVersionParams;

		/** Parameters used when defining a mitigation action that enable AWS IoT logging. */
		enableIoTLoggingParams?: EnableIoTLoggingParams;

		/** Parameters to define a mitigation action that publishes findings to Amazon SNS. You can implement your own custom actions in response to the Amazon SNS messages. */
		publishFindingToSnsParams?: PublishFindingToSnsParams;
	}
	export interface CreateMitigationActionPostBodyActionParamsFormProperties {
	}
	export function CreateCreateMitigationActionPostBodyActionParamsFormGroup() {
		return new FormGroup<CreateMitigationActionPostBodyActionParamsFormProperties>({
		});

	}

	export interface UpdateMitigationActionPatchBody {

		/**
		 * The ARN of the IAM role that is used to apply the mitigation action.
		 * Max length: 2048
		 * Min length: 20
		 */
		roleArn?: string | null;

		/** The set of parameters for this mitigation action. You can specify only one type of parameter (in other words, you can apply only one action for each defined mitigation action). */
		actionParams?: UpdateMitigationActionPatchBodyActionParams;
	}
	export interface UpdateMitigationActionPatchBodyFormProperties {

		/**
		 * The ARN of the IAM role that is used to apply the mitigation action.
		 * Max length: 2048
		 * Min length: 20
		 */
		roleArn: FormControl<string | null | undefined>,
	}
	export function CreateUpdateMitigationActionPatchBodyFormGroup() {
		return new FormGroup<UpdateMitigationActionPatchBodyFormProperties>({
			roleArn: new FormControl<string | null | undefined>(undefined, [Validators.minLength(20), Validators.maxLength(2048)]),
		});

	}

	export interface UpdateMitigationActionPatchBodyActionParams {

		/** Parameters to define a mitigation action that changes the state of the device certificate to inactive. */
		updateDeviceCertificateParams?: UpdateDeviceCertificateParams;

		/** Parameters to define a mitigation action that changes the state of the CA certificate to inactive. */
		updateCACertificateParams?: UpdateCACertificateParams;

		/** Parameters used when defining a mitigation action that move a set of things to a thing group. */
		addThingsToThingGroupParams?: AddThingsToThingGroupParams;

		/** Parameters to define a mitigation action that adds a blank policy to restrict permissions. */
		replaceDefaultPolicyVersionParams?: ReplaceDefaultPolicyVersionParams;

		/** Parameters used when defining a mitigation action that enable AWS IoT logging. */
		enableIoTLoggingParams?: EnableIoTLoggingParams;

		/** Parameters to define a mitigation action that publishes findings to Amazon SNS. You can implement your own custom actions in response to the Amazon SNS messages. */
		publishFindingToSnsParams?: PublishFindingToSnsParams;
	}
	export interface UpdateMitigationActionPatchBodyActionParamsFormProperties {
	}
	export function CreateUpdateMitigationActionPatchBodyActionParamsFormGroup() {
		return new FormGroup<UpdateMitigationActionPatchBodyActionParamsFormProperties>({
		});

	}

	export interface CreateOTAUpdatePostBody {

		/**
		 * The description of the OTA update.
		 * Max length: 2028
		 */
		description?: string | null;

		/**
		 * The targeted devices to receive OTA updates.
		 * Required
		 * Minimum items: 1
		 */
		targets: Array<string>;

		/**
		 * The protocol used to transfer the OTA update image. Valid values are [HTTP], [MQTT], [HTTP, MQTT]. When both HTTP and MQTT are specified, the target device can choose the protocol.
		 * Minimum items: 1
		 * Maximum items: 2
		 */
		protocols?: Array<Protocol>;

		/** Specifies whether the update will continue to run (CONTINUOUS), or will be complete after all the things specified as targets have completed the update (SNAPSHOT). If continuous, the update may also be run on a thing when a change is detected in a target. For example, an update will run on a thing when the thing is added to a target group, even after the update was completed by all things originally in the group. Valid values: CONTINUOUS | SNAPSHOT. */
		targetSelection?: JobTargetSelection | null;

		/** Configuration for the rollout of OTA updates. */
		awsJobExecutionsRolloutConfig?: CreateOTAUpdatePostBodyAwsJobExecutionsRolloutConfig;

		/** Configuration information for pre-signed URLs. Valid when <code>protocols</code> contains HTTP. */
		awsJobPresignedUrlConfig?: CreateOTAUpdatePostBodyAwsJobPresignedUrlConfig;

		/**
		 * The files to be streamed by the OTA update.
		 * Required
		 * Minimum items: 1
		 * Maximum items: 50
		 */
		files: Array<OTAUpdateFile>;

		/**
		 * The IAM role that allows access to the AWS IoT Jobs service.
		 * Required
		 * Max length: 2048
		 * Min length: 20
		 */
		roleArn: string;

		/** A list of additional OTA update parameters which are name-value pairs. */
		additionalParameters?: {[id: string]: string };

		/** Metadata which can be used to manage updates. */
		tags?: Array<Tag>;
	}
	export interface CreateOTAUpdatePostBodyFormProperties {

		/**
		 * The description of the OTA update.
		 * Max length: 2028
		 */
		description: FormControl<string | null | undefined>,

		/** Specifies whether the update will continue to run (CONTINUOUS), or will be complete after all the things specified as targets have completed the update (SNAPSHOT). If continuous, the update may also be run on a thing when a change is detected in a target. For example, an update will run on a thing when the thing is added to a target group, even after the update was completed by all things originally in the group. Valid values: CONTINUOUS | SNAPSHOT. */
		targetSelection: FormControl<JobTargetSelection | null | undefined>,

		/**
		 * The IAM role that allows access to the AWS IoT Jobs service.
		 * Required
		 * Max length: 2048
		 * Min length: 20
		 */
		roleArn: FormControl<string | null | undefined>,

		/** A list of additional OTA update parameters which are name-value pairs. */
		additionalParameters: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateCreateOTAUpdatePostBodyFormGroup() {
		return new FormGroup<CreateOTAUpdatePostBodyFormProperties>({
			description: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(2028), Validators.pattern('[^\p{C}]+')]),
			targetSelection: new FormControl<JobTargetSelection | null | undefined>(undefined),
			roleArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(20), Validators.maxLength(2048)]),
			additionalParameters: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}

	export interface CreateOTAUpdatePostBodyAwsJobExecutionsRolloutConfig {

		/**
		 * Minimum: 1
		 * Maximum: 1000
		 */
		maximumPerMinute?: number | null;
	}
	export interface CreateOTAUpdatePostBodyAwsJobExecutionsRolloutConfigFormProperties {

		/**
		 * Minimum: 1
		 * Maximum: 1000
		 */
		maximumPerMinute: FormControl<number | null | undefined>,
	}
	export function CreateCreateOTAUpdatePostBodyAwsJobExecutionsRolloutConfigFormGroup() {
		return new FormGroup<CreateOTAUpdatePostBodyAwsJobExecutionsRolloutConfigFormProperties>({
			maximumPerMinute: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(1000)]),
		});

	}

	export interface CreateOTAUpdatePostBodyAwsJobPresignedUrlConfig {
		expiresInSec?: number | null;
	}
	export interface CreateOTAUpdatePostBodyAwsJobPresignedUrlConfigFormProperties {
		expiresInSec: FormControl<number | null | undefined>,
	}
	export function CreateCreateOTAUpdatePostBodyAwsJobPresignedUrlConfigFormGroup() {
		return new FormGroup<CreateOTAUpdatePostBodyAwsJobPresignedUrlConfigFormProperties>({
			expiresInSec: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface CreatePolicyPostBody {

		/**
		 * The JSON document that describes the policy. <b>policyDocument</b> must have a minimum length of 1, with a maximum length of 2048, excluding whitespace.
		 * Required
		 */
		policyDocument: string;

		/** <p>Metadata which can be used to manage the policy.</p> <note> <p>For URI Request parameters use format: ...key1=value1&amp;key2=value2...</p> <p>For the CLI command-line parameter use format: &amp;&amp;tags "key1=value1&amp;key2=value2..."</p> <p>For the cli-input-json file use format: "tags": "key1=value1&amp;key2=value2..."</p> </note> */
		tags?: Array<Tag>;
	}
	export interface CreatePolicyPostBodyFormProperties {

		/**
		 * The JSON document that describes the policy. <b>policyDocument</b> must have a minimum length of 1, with a maximum length of 2048, excluding whitespace.
		 * Required
		 */
		policyDocument: FormControl<string | null | undefined>,
	}
	export function CreateCreatePolicyPostBodyFormGroup() {
		return new FormGroup<CreatePolicyPostBodyFormProperties>({
			policyDocument: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreatePolicyVersionPostBody {

		/**
		 * The JSON document that describes the policy. Minimum length of 1. Maximum length of 2048, excluding whitespace.
		 * Required
		 */
		policyDocument: string;
	}
	export interface CreatePolicyVersionPostBodyFormProperties {

		/**
		 * The JSON document that describes the policy. Minimum length of 1. Maximum length of 2048, excluding whitespace.
		 * Required
		 */
		policyDocument: FormControl<string | null | undefined>,
	}
	export function CreateCreatePolicyVersionPostBodyFormGroup() {
		return new FormGroup<CreatePolicyVersionPostBodyFormProperties>({
			policyDocument: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateProvisioningTemplatePostBody {

		/**
		 * The name of the fleet provisioning template.
		 * Required
		 * Max length: 36
		 * Min length: 1
		 */
		templateName: string;

		/**
		 * The description of the fleet provisioning template.
		 * Max length: 500
		 * Min length: 0
		 */
		description?: string | null;

		/**
		 * The JSON formatted contents of the fleet provisioning template.
		 * Required
		 */
		templateBody: string;

		/** True to enable the fleet provisioning template, otherwise false. */
		enabled?: boolean | null;

		/**
		 * The role ARN for the role associated with the fleet provisioning template. This IoT role grants permission to provision a device.
		 * Required
		 * Max length: 2048
		 * Min length: 20
		 */
		provisioningRoleArn: string;

		/** Structure that contains <code>payloadVersion</code> and <code>targetArn</code>. */
		preProvisioningHook?: CreateProvisioningTemplatePostBodyPreProvisioningHook;

		/** <p>Metadata which can be used to manage the fleet provisioning template.</p> <note> <p>For URI Request parameters use format: ...key1=value1&amp;key2=value2...</p> <p>For the CLI command-line parameter use format: &amp;&amp;tags "key1=value1&amp;key2=value2..."</p> <p>For the cli-input-json file use format: "tags": "key1=value1&amp;key2=value2..."</p> </note> */
		tags?: Array<Tag>;
	}
	export interface CreateProvisioningTemplatePostBodyFormProperties {

		/**
		 * The name of the fleet provisioning template.
		 * Required
		 * Max length: 36
		 * Min length: 1
		 */
		templateName: FormControl<string | null | undefined>,

		/**
		 * The description of the fleet provisioning template.
		 * Max length: 500
		 * Min length: 0
		 */
		description: FormControl<string | null | undefined>,

		/**
		 * The JSON formatted contents of the fleet provisioning template.
		 * Required
		 */
		templateBody: FormControl<string | null | undefined>,

		/** True to enable the fleet provisioning template, otherwise false. */
		enabled: FormControl<boolean | null | undefined>,

		/**
		 * The role ARN for the role associated with the fleet provisioning template. This IoT role grants permission to provision a device.
		 * Required
		 * Max length: 2048
		 * Min length: 20
		 */
		provisioningRoleArn: FormControl<string | null | undefined>,
	}
	export function CreateCreateProvisioningTemplatePostBodyFormGroup() {
		return new FormGroup<CreateProvisioningTemplatePostBodyFormProperties>({
			templateName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(36), Validators.pattern('^[0-9A-Za-z_-]+$')]),
			description: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(500), Validators.pattern('[^\p{C}]*')]),
			templateBody: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			enabled: new FormControl<boolean | null | undefined>(undefined),
			provisioningRoleArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(20), Validators.maxLength(2048)]),
		});

	}

	export interface CreateProvisioningTemplatePostBodyPreProvisioningHook {

		/**
		 * Max length: 32
		 * Min length: 10
		 */
		payloadVersion?: string | null;

		/** Max length: 2048 */
		targetArn?: string | null;
	}
	export interface CreateProvisioningTemplatePostBodyPreProvisioningHookFormProperties {

		/**
		 * Max length: 32
		 * Min length: 10
		 */
		payloadVersion: FormControl<string | null | undefined>,

		/** Max length: 2048 */
		targetArn: FormControl<string | null | undefined>,
	}
	export function CreateCreateProvisioningTemplatePostBodyPreProvisioningHookFormGroup() {
		return new FormGroup<CreateProvisioningTemplatePostBodyPreProvisioningHookFormProperties>({
			payloadVersion: new FormControl<string | null | undefined>(undefined, [Validators.minLength(10), Validators.maxLength(32), Validators.pattern('^[0-9-]+$')]),
			targetArn: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(2048)]),
		});

	}

	export interface CreateProvisioningTemplateVersionPostBody {

		/**
		 * The JSON formatted contents of the fleet provisioning template.
		 * Required
		 */
		templateBody: string;
	}
	export interface CreateProvisioningTemplateVersionPostBodyFormProperties {

		/**
		 * The JSON formatted contents of the fleet provisioning template.
		 * Required
		 */
		templateBody: FormControl<string | null | undefined>,
	}
	export function CreateCreateProvisioningTemplateVersionPostBodyFormGroup() {
		return new FormGroup<CreateProvisioningTemplateVersionPostBodyFormProperties>({
			templateBody: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateRoleAliasPostBody {

		/**
		 * The role ARN.
		 * Required
		 * Max length: 2048
		 * Min length: 20
		 */
		roleArn: string;

		/**
		 * How long (in seconds) the credentials will be valid.
		 * Minimum: 900
		 * Maximum: 3600
		 */
		credentialDurationSeconds?: number | null;

		/** <p>Metadata which can be used to manage the role alias.</p> <note> <p>For URI Request parameters use format: ...key1=value1&amp;key2=value2...</p> <p>For the CLI command-line parameter use format: &amp;&amp;tags "key1=value1&amp;key2=value2..."</p> <p>For the cli-input-json file use format: "tags": "key1=value1&amp;key2=value2..."</p> </note> */
		tags?: Array<Tag>;
	}
	export interface CreateRoleAliasPostBodyFormProperties {

		/**
		 * The role ARN.
		 * Required
		 * Max length: 2048
		 * Min length: 20
		 */
		roleArn: FormControl<string | null | undefined>,

		/**
		 * How long (in seconds) the credentials will be valid.
		 * Minimum: 900
		 * Maximum: 3600
		 */
		credentialDurationSeconds: FormControl<number | null | undefined>,
	}
	export function CreateCreateRoleAliasPostBodyFormGroup() {
		return new FormGroup<CreateRoleAliasPostBodyFormProperties>({
			roleArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(20), Validators.maxLength(2048)]),
			credentialDurationSeconds: new FormControl<number | null | undefined>(undefined, [Validators.min(900), Validators.max(3600)]),
		});

	}

	export interface UpdateRoleAliasPutBody {

		/**
		 * The role ARN.
		 * Max length: 2048
		 * Min length: 20
		 */
		roleArn?: string | null;

		/**
		 * The number of seconds the credential will be valid.
		 * Minimum: 900
		 * Maximum: 3600
		 */
		credentialDurationSeconds?: number | null;
	}
	export interface UpdateRoleAliasPutBodyFormProperties {

		/**
		 * The role ARN.
		 * Max length: 2048
		 * Min length: 20
		 */
		roleArn: FormControl<string | null | undefined>,

		/**
		 * The number of seconds the credential will be valid.
		 * Minimum: 900
		 * Maximum: 3600
		 */
		credentialDurationSeconds: FormControl<number | null | undefined>,
	}
	export function CreateUpdateRoleAliasPutBodyFormGroup() {
		return new FormGroup<UpdateRoleAliasPutBodyFormProperties>({
			roleArn: new FormControl<string | null | undefined>(undefined, [Validators.minLength(20), Validators.maxLength(2048)]),
			credentialDurationSeconds: new FormControl<number | null | undefined>(undefined, [Validators.min(900), Validators.max(3600)]),
		});

	}

	export interface CreateScheduledAuditPostBody {

		/**
		 * How often the scheduled audit takes place. Can be one of "DAILY", "WEEKLY", "BIWEEKLY" or "MONTHLY". The start time of each audit is determined by the system.
		 * Required
		 */
		frequency: DescribeScheduledAuditResponseFrequency;

		/** The day of the month on which the scheduled audit takes place. Can be "1" through "31" or "LAST". This field is required if the "frequency" parameter is set to "MONTHLY". If days 29-31 are specified, and the month does not have that many days, the audit takes place on the "LAST" day of the month. */
		dayOfMonth?: string | null;

		/** The day of the week on which the scheduled audit takes place. Can be one of "SUN", "MON", "TUE", "WED", "THU", "FRI", or "SAT". This field is required if the "frequency" parameter is set to "WEEKLY" or "BIWEEKLY". */
		dayOfWeek?: DescribeScheduledAuditResponseDayOfWeek | null;

		/**
		 * Which checks are performed during the scheduled audit. Checks must be enabled for your account. (Use <code>DescribeAccountAuditConfiguration</code> to see the list of all checks, including those that are enabled or use <code>UpdateAccountAuditConfiguration</code> to select which checks are enabled.)
		 * Required
		 */
		targetCheckNames: Array<string>;

		/** Metadata that can be used to manage the scheduled audit. */
		tags?: Array<Tag>;
	}
	export interface CreateScheduledAuditPostBodyFormProperties {

		/**
		 * How often the scheduled audit takes place. Can be one of "DAILY", "WEEKLY", "BIWEEKLY" or "MONTHLY". The start time of each audit is determined by the system.
		 * Required
		 */
		frequency: FormControl<DescribeScheduledAuditResponseFrequency | null | undefined>,

		/** The day of the month on which the scheduled audit takes place. Can be "1" through "31" or "LAST". This field is required if the "frequency" parameter is set to "MONTHLY". If days 29-31 are specified, and the month does not have that many days, the audit takes place on the "LAST" day of the month. */
		dayOfMonth: FormControl<string | null | undefined>,

		/** The day of the week on which the scheduled audit takes place. Can be one of "SUN", "MON", "TUE", "WED", "THU", "FRI", or "SAT". This field is required if the "frequency" parameter is set to "WEEKLY" or "BIWEEKLY". */
		dayOfWeek: FormControl<DescribeScheduledAuditResponseDayOfWeek | null | undefined>,
	}
	export function CreateCreateScheduledAuditPostBodyFormGroup() {
		return new FormGroup<CreateScheduledAuditPostBodyFormProperties>({
			frequency: new FormControl<DescribeScheduledAuditResponseFrequency | null | undefined>(undefined, [Validators.required]),
			dayOfMonth: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^([1-9]|[12][0-9]|3[01])$|^LAST$')]),
			dayOfWeek: new FormControl<DescribeScheduledAuditResponseDayOfWeek | null | undefined>(undefined),
		});

	}

	export interface UpdateScheduledAuditPatchBody {

		/** How often the scheduled audit takes place. Can be one of "DAILY", "WEEKLY", "BIWEEKLY", or "MONTHLY". The start time of each audit is determined by the system. */
		frequency?: DescribeScheduledAuditResponseFrequency | null;

		/** The day of the month on which the scheduled audit takes place. Can be "1" through "31" or "LAST". This field is required if the "frequency" parameter is set to "MONTHLY". If days 29-31 are specified, and the month does not have that many days, the audit takes place on the "LAST" day of the month. */
		dayOfMonth?: string | null;

		/** The day of the week on which the scheduled audit takes place. Can be one of "SUN", "MON", "TUE", "WED", "THU", "FRI", or "SAT". This field is required if the "frequency" parameter is set to "WEEKLY" or "BIWEEKLY". */
		dayOfWeek?: DescribeScheduledAuditResponseDayOfWeek | null;

		/** Which checks are performed during the scheduled audit. Checks must be enabled for your account. (Use <code>DescribeAccountAuditConfiguration</code> to see the list of all checks, including those that are enabled or use <code>UpdateAccountAuditConfiguration</code> to select which checks are enabled.) */
		targetCheckNames?: Array<string>;
	}
	export interface UpdateScheduledAuditPatchBodyFormProperties {

		/** How often the scheduled audit takes place. Can be one of "DAILY", "WEEKLY", "BIWEEKLY", or "MONTHLY". The start time of each audit is determined by the system. */
		frequency: FormControl<DescribeScheduledAuditResponseFrequency | null | undefined>,

		/** The day of the month on which the scheduled audit takes place. Can be "1" through "31" or "LAST". This field is required if the "frequency" parameter is set to "MONTHLY". If days 29-31 are specified, and the month does not have that many days, the audit takes place on the "LAST" day of the month. */
		dayOfMonth: FormControl<string | null | undefined>,

		/** The day of the week on which the scheduled audit takes place. Can be one of "SUN", "MON", "TUE", "WED", "THU", "FRI", or "SAT". This field is required if the "frequency" parameter is set to "WEEKLY" or "BIWEEKLY". */
		dayOfWeek: FormControl<DescribeScheduledAuditResponseDayOfWeek | null | undefined>,
	}
	export function CreateUpdateScheduledAuditPatchBodyFormGroup() {
		return new FormGroup<UpdateScheduledAuditPatchBodyFormProperties>({
			frequency: new FormControl<DescribeScheduledAuditResponseFrequency | null | undefined>(undefined),
			dayOfMonth: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^([1-9]|[12][0-9]|3[01])$|^LAST$')]),
			dayOfWeek: new FormControl<DescribeScheduledAuditResponseDayOfWeek | null | undefined>(undefined),
		});

	}

	export interface CreateSecurityProfilePostBody {

		/**
		 * A description of the security profile.
		 * Max length: 1000
		 */
		securityProfileDescription?: string | null;

		/**
		 * Specifies the behaviors that, when violated by a device (thing), cause an alert.
		 * Maximum items: 100
		 */
		behaviors?: Array<Behavior>;

		/** Specifies the destinations to which alerts are sent. (Alerts are always sent to the console.) Alerts are generated when a device (thing) violates a behavior. */
		alertTargets?: {[id: string]: AlertTarget };

		/** <p>A list of metrics whose data is retained (stored). By default, data is retained for any metric used in the profile's <code>behaviors</code>, but it is also retained for any metric specified here.</p> <p> <b>Note:</b> This API field is deprecated. Please use <a>CreateSecurityProfileRequest$additionalMetricsToRetainV2</a> instead.</p> */
		additionalMetricsToRetain?: Array<string>;

		/** A list of metrics whose data is retained (stored). By default, data is retained for any metric used in the profile's <code>behaviors</code>, but it is also retained for any metric specified here. */
		additionalMetricsToRetainV2?: Array<MetricToRetain>;

		/** Metadata that can be used to manage the security profile. */
		tags?: Array<Tag>;
	}
	export interface CreateSecurityProfilePostBodyFormProperties {

		/**
		 * A description of the security profile.
		 * Max length: 1000
		 */
		securityProfileDescription: FormControl<string | null | undefined>,

		/** Specifies the destinations to which alerts are sent. (Alerts are always sent to the console.) Alerts are generated when a device (thing) violates a behavior. */
		alertTargets: FormControl<{[id: string]: AlertTarget } | null | undefined>,
	}
	export function CreateCreateSecurityProfilePostBodyFormGroup() {
		return new FormGroup<CreateSecurityProfilePostBodyFormProperties>({
			securityProfileDescription: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(1000), Validators.pattern('[\p{Graph}\x20]*')]),
			alertTargets: new FormControl<{[id: string]: AlertTarget } | null | undefined>(undefined),
		});

	}

	export interface UpdateSecurityProfilePatchBody {

		/**
		 * A description of the security profile.
		 * Max length: 1000
		 */
		securityProfileDescription?: string | null;

		/**
		 * Specifies the behaviors that, when violated by a device (thing), cause an alert.
		 * Maximum items: 100
		 */
		behaviors?: Array<Behavior>;

		/** Where the alerts are sent. (Alerts are always sent to the console.) */
		alertTargets?: {[id: string]: AlertTarget };

		/** <p>A list of metrics whose data is retained (stored). By default, data is retained for any metric used in the profile's <code>behaviors</code>, but it is also retained for any metric specified here.</p> <p> <b>Note:</b> This API field is deprecated. Please use <a>UpdateSecurityProfileRequest$additionalMetricsToRetainV2</a> instead.</p> */
		additionalMetricsToRetain?: Array<string>;

		/** A list of metrics whose data is retained (stored). By default, data is retained for any metric used in the profile's behaviors, but it is also retained for any metric specified here. */
		additionalMetricsToRetainV2?: Array<MetricToRetain>;

		/** If true, delete all <code>behaviors</code> defined for this security profile. If any <code>behaviors</code> are defined in the current invocation, an exception occurs. */
		deleteBehaviors?: boolean | null;

		/** If true, delete all <code>alertTargets</code> defined for this security profile. If any <code>alertTargets</code> are defined in the current invocation, an exception occurs. */
		deleteAlertTargets?: boolean | null;

		/** If true, delete all <code>additionalMetricsToRetain</code> defined for this security profile. If any <code>additionalMetricsToRetain</code> are defined in the current invocation, an exception occurs. */
		deleteAdditionalMetricsToRetain?: boolean | null;
	}
	export interface UpdateSecurityProfilePatchBodyFormProperties {

		/**
		 * A description of the security profile.
		 * Max length: 1000
		 */
		securityProfileDescription: FormControl<string | null | undefined>,

		/** Where the alerts are sent. (Alerts are always sent to the console.) */
		alertTargets: FormControl<{[id: string]: AlertTarget } | null | undefined>,

		/** If true, delete all <code>behaviors</code> defined for this security profile. If any <code>behaviors</code> are defined in the current invocation, an exception occurs. */
		deleteBehaviors: FormControl<boolean | null | undefined>,

		/** If true, delete all <code>alertTargets</code> defined for this security profile. If any <code>alertTargets</code> are defined in the current invocation, an exception occurs. */
		deleteAlertTargets: FormControl<boolean | null | undefined>,

		/** If true, delete all <code>additionalMetricsToRetain</code> defined for this security profile. If any <code>additionalMetricsToRetain</code> are defined in the current invocation, an exception occurs. */
		deleteAdditionalMetricsToRetain: FormControl<boolean | null | undefined>,
	}
	export function CreateUpdateSecurityProfilePatchBodyFormGroup() {
		return new FormGroup<UpdateSecurityProfilePatchBodyFormProperties>({
			securityProfileDescription: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(1000), Validators.pattern('[\p{Graph}\x20]*')]),
			alertTargets: new FormControl<{[id: string]: AlertTarget } | null | undefined>(undefined),
			deleteBehaviors: new FormControl<boolean | null | undefined>(undefined),
			deleteAlertTargets: new FormControl<boolean | null | undefined>(undefined),
			deleteAdditionalMetricsToRetain: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface CreateStreamPostBody {

		/**
		 * A description of the stream.
		 * Max length: 2028
		 */
		description?: string | null;

		/**
		 * The files to stream.
		 * Required
		 * Minimum items: 1
		 * Maximum items: 50
		 */
		files: Array<StreamFile>;

		/**
		 * An IAM role that allows the IoT service principal assumes to access your S3 files.
		 * Required
		 * Max length: 2048
		 * Min length: 20
		 */
		roleArn: string;

		/** Metadata which can be used to manage streams. */
		tags?: Array<Tag>;
	}
	export interface CreateStreamPostBodyFormProperties {

		/**
		 * A description of the stream.
		 * Max length: 2028
		 */
		description: FormControl<string | null | undefined>,

		/**
		 * An IAM role that allows the IoT service principal assumes to access your S3 files.
		 * Required
		 * Max length: 2048
		 * Min length: 20
		 */
		roleArn: FormControl<string | null | undefined>,
	}
	export function CreateCreateStreamPostBodyFormGroup() {
		return new FormGroup<CreateStreamPostBodyFormProperties>({
			description: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(2028), Validators.pattern('[^\p{C}]+')]),
			roleArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(20), Validators.maxLength(2048)]),
		});

	}

	export interface UpdateStreamPutBody {

		/**
		 * The description of the stream.
		 * Max length: 2028
		 */
		description?: string | null;

		/**
		 * The files associated with the stream.
		 * Minimum items: 1
		 * Maximum items: 50
		 */
		files?: Array<StreamFile>;

		/**
		 * An IAM role that allows the IoT service principal assumes to access your S3 files.
		 * Max length: 2048
		 * Min length: 20
		 */
		roleArn?: string | null;
	}
	export interface UpdateStreamPutBodyFormProperties {

		/**
		 * The description of the stream.
		 * Max length: 2028
		 */
		description: FormControl<string | null | undefined>,

		/**
		 * An IAM role that allows the IoT service principal assumes to access your S3 files.
		 * Max length: 2048
		 * Min length: 20
		 */
		roleArn: FormControl<string | null | undefined>,
	}
	export function CreateUpdateStreamPutBodyFormGroup() {
		return new FormGroup<UpdateStreamPutBodyFormProperties>({
			description: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(2028), Validators.pattern('[^\p{C}]+')]),
			roleArn: new FormControl<string | null | undefined>(undefined, [Validators.minLength(20), Validators.maxLength(2048)]),
		});

	}

	export interface CreateThingPostBody {

		/**
		 * The name of the thing type associated with the new thing.
		 * Max length: 128
		 * Min length: 1
		 */
		thingTypeName?: string | null;

		/** The attribute payload. */
		attributePayload?: CreateThingPostBodyAttributePayload;

		/**
		 * The name of the billing group the thing will be added to.
		 * Max length: 128
		 * Min length: 1
		 */
		billingGroupName?: string | null;
	}
	export interface CreateThingPostBodyFormProperties {

		/**
		 * The name of the thing type associated with the new thing.
		 * Max length: 128
		 * Min length: 1
		 */
		thingTypeName: FormControl<string | null | undefined>,

		/**
		 * The name of the billing group the thing will be added to.
		 * Max length: 128
		 * Min length: 1
		 */
		billingGroupName: FormControl<string | null | undefined>,
	}
	export function CreateCreateThingPostBodyFormGroup() {
		return new FormGroup<CreateThingPostBodyFormProperties>({
			thingTypeName: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(128), Validators.pattern('[a-zA-Z0-9:_-]+')]),
			billingGroupName: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(128), Validators.pattern('[a-zA-Z0-9:_-]+')]),
		});

	}

	export interface CreateThingPostBodyAttributePayload {
		attributes?: Attributes;
		merge?: boolean | null;
	}
	export interface CreateThingPostBodyAttributePayloadFormProperties {
		merge: FormControl<boolean | null | undefined>,
	}
	export function CreateCreateThingPostBodyAttributePayloadFormGroup() {
		return new FormGroup<CreateThingPostBodyAttributePayloadFormProperties>({
			merge: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface UpdateThingPatchBody {

		/**
		 * The name of the thing type.
		 * Max length: 128
		 * Min length: 1
		 */
		thingTypeName?: string | null;

		/** The attribute payload. */
		attributePayload?: UpdateThingPatchBodyAttributePayload;

		/** The expected version of the thing record in the registry. If the version of the record in the registry does not match the expected version specified in the request, the <code>UpdateThing</code> request is rejected with a <code>VersionConflictException</code>. */
		expectedVersion?: number | null;

		/** Remove a thing type association. If <b>true</b>, the association is removed. */
		removeThingType?: boolean | null;
	}
	export interface UpdateThingPatchBodyFormProperties {

		/**
		 * The name of the thing type.
		 * Max length: 128
		 * Min length: 1
		 */
		thingTypeName: FormControl<string | null | undefined>,

		/** The expected version of the thing record in the registry. If the version of the record in the registry does not match the expected version specified in the request, the <code>UpdateThing</code> request is rejected with a <code>VersionConflictException</code>. */
		expectedVersion: FormControl<number | null | undefined>,

		/** Remove a thing type association. If <b>true</b>, the association is removed. */
		removeThingType: FormControl<boolean | null | undefined>,
	}
	export function CreateUpdateThingPatchBodyFormGroup() {
		return new FormGroup<UpdateThingPatchBodyFormProperties>({
			thingTypeName: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(128), Validators.pattern('[a-zA-Z0-9:_-]+')]),
			expectedVersion: new FormControl<number | null | undefined>(undefined),
			removeThingType: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface UpdateThingPatchBodyAttributePayload {
		attributes?: Attributes;
		merge?: boolean | null;
	}
	export interface UpdateThingPatchBodyAttributePayloadFormProperties {
		merge: FormControl<boolean | null | undefined>,
	}
	export function CreateUpdateThingPatchBodyAttributePayloadFormGroup() {
		return new FormGroup<UpdateThingPatchBodyAttributePayloadFormProperties>({
			merge: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface CreateThingGroupPostBody {

		/**
		 * The name of the parent thing group.
		 * Max length: 128
		 * Min length: 1
		 */
		parentGroupName?: string | null;

		/** Thing group properties. */
		thingGroupProperties?: CreateThingGroupPostBodyThingGroupProperties;

		/** Metadata which can be used to manage the thing group. */
		tags?: Array<Tag>;
	}
	export interface CreateThingGroupPostBodyFormProperties {

		/**
		 * The name of the parent thing group.
		 * Max length: 128
		 * Min length: 1
		 */
		parentGroupName: FormControl<string | null | undefined>,
	}
	export function CreateCreateThingGroupPostBodyFormGroup() {
		return new FormGroup<CreateThingGroupPostBodyFormProperties>({
			parentGroupName: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(128), Validators.pattern('[a-zA-Z0-9:_-]+')]),
		});

	}

	export interface CreateThingGroupPostBodyThingGroupProperties {

		/** Max length: 2028 */
		thingGroupDescription?: string | null;

		/** The attribute payload. */
		attributePayload?: AttributePayload;
	}
	export interface CreateThingGroupPostBodyThingGroupPropertiesFormProperties {

		/** Max length: 2028 */
		thingGroupDescription: FormControl<string | null | undefined>,
	}
	export function CreateCreateThingGroupPostBodyThingGroupPropertiesFormGroup() {
		return new FormGroup<CreateThingGroupPostBodyThingGroupPropertiesFormProperties>({
			thingGroupDescription: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(2028), Validators.pattern('[\p{Graph}\x20]*')]),
		});

	}

	export interface UpdateThingGroupPatchBody {

		/**
		 * Thing group properties.
		 * Required
		 */
		thingGroupProperties: UpdateThingGroupPatchBodyThingGroupProperties;

		/** The expected version of the thing group. If this does not match the version of the thing group being updated, the update will fail. */
		expectedVersion?: number | null;
	}
	export interface UpdateThingGroupPatchBodyFormProperties {

		/** The expected version of the thing group. If this does not match the version of the thing group being updated, the update will fail. */
		expectedVersion: FormControl<number | null | undefined>,
	}
	export function CreateUpdateThingGroupPatchBodyFormGroup() {
		return new FormGroup<UpdateThingGroupPatchBodyFormProperties>({
			expectedVersion: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface UpdateThingGroupPatchBodyThingGroupProperties {

		/** Max length: 2028 */
		thingGroupDescription?: string | null;

		/** The attribute payload. */
		attributePayload?: AttributePayload;
	}
	export interface UpdateThingGroupPatchBodyThingGroupPropertiesFormProperties {

		/** Max length: 2028 */
		thingGroupDescription: FormControl<string | null | undefined>,
	}
	export function CreateUpdateThingGroupPatchBodyThingGroupPropertiesFormGroup() {
		return new FormGroup<UpdateThingGroupPatchBodyThingGroupPropertiesFormProperties>({
			thingGroupDescription: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(2028), Validators.pattern('[\p{Graph}\x20]*')]),
		});

	}

	export interface CreateThingTypePostBody {

		/** The ThingTypeProperties contains information about the thing type including: a thing type description, and a list of searchable thing attribute names. */
		thingTypeProperties?: CreateThingTypePostBodyThingTypeProperties;

		/** Metadata which can be used to manage the thing type. */
		tags?: Array<Tag>;
	}
	export interface CreateThingTypePostBodyFormProperties {
	}
	export function CreateCreateThingTypePostBodyFormGroup() {
		return new FormGroup<CreateThingTypePostBodyFormProperties>({
		});

	}

	export interface CreateThingTypePostBodyThingTypeProperties {

		/** Max length: 2028 */
		thingTypeDescription?: string | null;
		searchableAttributes?: Array<string>;
	}
	export interface CreateThingTypePostBodyThingTypePropertiesFormProperties {

		/** Max length: 2028 */
		thingTypeDescription: FormControl<string | null | undefined>,
	}
	export function CreateCreateThingTypePostBodyThingTypePropertiesFormGroup() {
		return new FormGroup<CreateThingTypePostBodyThingTypePropertiesFormProperties>({
			thingTypeDescription: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(2028), Validators.pattern('[\p{Graph}\x20]*')]),
		});

	}

	export interface CreateTopicRulePostBody {

		/**
		 * Describes a rule.
		 * Required
		 */
		topicRulePayload: CreateTopicRulePostBodyTopicRulePayload;
	}
	export interface CreateTopicRulePostBodyFormProperties {
	}
	export function CreateCreateTopicRulePostBodyFormGroup() {
		return new FormGroup<CreateTopicRulePostBodyFormProperties>({
		});

	}

	export interface CreateTopicRulePostBodyTopicRulePayload {
		sql?: string | null;
		description?: string | null;

		/**
		 * Minimum items: 0
		 * Maximum items: 10
		 */
		actions?: Array<Action>;
		ruleDisabled?: boolean | null;
		awsIotSqlVersion?: string | null;

		/** Describes the actions associated with a rule. */
		errorAction?: Action;
	}
	export interface CreateTopicRulePostBodyTopicRulePayloadFormProperties {
		sql: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,
		ruleDisabled: FormControl<boolean | null | undefined>,
		awsIotSqlVersion: FormControl<string | null | undefined>,
	}
	export function CreateCreateTopicRulePostBodyTopicRulePayloadFormGroup() {
		return new FormGroup<CreateTopicRulePostBodyTopicRulePayloadFormProperties>({
			sql: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			ruleDisabled: new FormControl<boolean | null | undefined>(undefined),
			awsIotSqlVersion: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ReplaceTopicRulePatchBody {

		/**
		 * Describes a rule.
		 * Required
		 */
		topicRulePayload: ReplaceTopicRulePatchBodyTopicRulePayload;
	}
	export interface ReplaceTopicRulePatchBodyFormProperties {
	}
	export function CreateReplaceTopicRulePatchBodyFormGroup() {
		return new FormGroup<ReplaceTopicRulePatchBodyFormProperties>({
		});

	}

	export interface ReplaceTopicRulePatchBodyTopicRulePayload {
		sql?: string | null;
		description?: string | null;

		/**
		 * Minimum items: 0
		 * Maximum items: 10
		 */
		actions?: Array<Action>;
		ruleDisabled?: boolean | null;
		awsIotSqlVersion?: string | null;

		/** Describes the actions associated with a rule. */
		errorAction?: Action;
	}
	export interface ReplaceTopicRulePatchBodyTopicRulePayloadFormProperties {
		sql: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,
		ruleDisabled: FormControl<boolean | null | undefined>,
		awsIotSqlVersion: FormControl<string | null | undefined>,
	}
	export function CreateReplaceTopicRulePatchBodyTopicRulePayloadFormGroup() {
		return new FormGroup<ReplaceTopicRulePatchBodyTopicRulePayloadFormProperties>({
			sql: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			ruleDisabled: new FormControl<boolean | null | undefined>(undefined),
			awsIotSqlVersion: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateTopicRuleDestinationPostBody {

		/**
		 * Configuration of the topic rule destination.
		 * Required
		 */
		destinationConfiguration: CreateTopicRuleDestinationPostBodyDestinationConfiguration;
	}
	export interface CreateTopicRuleDestinationPostBodyFormProperties {
	}
	export function CreateCreateTopicRuleDestinationPostBodyFormGroup() {
		return new FormGroup<CreateTopicRuleDestinationPostBodyFormProperties>({
		});

	}

	export interface CreateTopicRuleDestinationPostBodyDestinationConfiguration {

		/** HTTP URL destination configuration used by the topic rule's HTTP action. */
		httpUrlConfiguration?: HttpUrlDestinationConfiguration;
	}
	export interface CreateTopicRuleDestinationPostBodyDestinationConfigurationFormProperties {
	}
	export function CreateCreateTopicRuleDestinationPostBodyDestinationConfigurationFormGroup() {
		return new FormGroup<CreateTopicRuleDestinationPostBodyDestinationConfigurationFormProperties>({
		});

	}

	export interface UpdateTopicRuleDestinationPatchBody {

		/**
		 * The ARN of the topic rule destination.
		 * Required
		 */
		arn: string;

		/**
		 * <p>The status of the topic rule destination. Valid values are:</p> <dl> <dt>IN_PROGRESS</dt> <dd> <p>A topic rule destination was created but has not been confirmed. You can set <code>status</code> to <code>IN_PROGRESS</code> by calling <code>UpdateTopicRuleDestination</code>. Calling <code>UpdateTopicRuleDestination</code> causes a new confirmation challenge to be sent to your confirmation endpoint.</p> </dd> <dt>ENABLED</dt> <dd> <p>Confirmation was completed, and traffic to this destination is allowed. You can set <code>status</code> to <code>DISABLED</code> by calling <code>UpdateTopicRuleDestination</code>.</p> </dd> <dt>DISABLED</dt> <dd> <p>Confirmation was completed, and traffic to this destination is not allowed. You can set <code>status</code> to <code>ENABLED</code> by calling <code>UpdateTopicRuleDestination</code>.</p> </dd> <dt>ERROR</dt> <dd> <p>Confirmation could not be completed, for example if the confirmation timed out. You can call <code>GetTopicRuleDestination</code> for details about the error. You can set <code>status</code> to <code>IN_PROGRESS</code> by calling <code>UpdateTopicRuleDestination</code>. Calling <code>UpdateTopicRuleDestination</code> causes a new confirmation challenge to be sent to your confirmation endpoint.</p> </dd> </dl>
		 * Required
		 */
		status: TopicRuleDestinationStatus;
	}
	export interface UpdateTopicRuleDestinationPatchBodyFormProperties {

		/**
		 * The ARN of the topic rule destination.
		 * Required
		 */
		arn: FormControl<string | null | undefined>,

		/**
		 * <p>The status of the topic rule destination. Valid values are:</p> <dl> <dt>IN_PROGRESS</dt> <dd> <p>A topic rule destination was created but has not been confirmed. You can set <code>status</code> to <code>IN_PROGRESS</code> by calling <code>UpdateTopicRuleDestination</code>. Calling <code>UpdateTopicRuleDestination</code> causes a new confirmation challenge to be sent to your confirmation endpoint.</p> </dd> <dt>ENABLED</dt> <dd> <p>Confirmation was completed, and traffic to this destination is allowed. You can set <code>status</code> to <code>DISABLED</code> by calling <code>UpdateTopicRuleDestination</code>.</p> </dd> <dt>DISABLED</dt> <dd> <p>Confirmation was completed, and traffic to this destination is not allowed. You can set <code>status</code> to <code>ENABLED</code> by calling <code>UpdateTopicRuleDestination</code>.</p> </dd> <dt>ERROR</dt> <dd> <p>Confirmation could not be completed, for example if the confirmation timed out. You can call <code>GetTopicRuleDestination</code> for details about the error. You can set <code>status</code> to <code>IN_PROGRESS</code> by calling <code>UpdateTopicRuleDestination</code>. Calling <code>UpdateTopicRuleDestination</code> causes a new confirmation challenge to be sent to your confirmation endpoint.</p> </dd> </dl>
		 * Required
		 */
		status: FormControl<TopicRuleDestinationStatus | null | undefined>,
	}
	export function CreateUpdateTopicRuleDestinationPatchBodyFormGroup() {
		return new FormGroup<UpdateTopicRuleDestinationPatchBodyFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<TopicRuleDestinationStatus | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UpdateAccountAuditConfigurationPatchBody {

		/**
		 * The ARN of the role that grants permission to AWS IoT to access information about your devices, policies, certificates and other items as required when performing an audit.
		 * Max length: 2048
		 * Min length: 20
		 */
		roleArn?: string | null;

		/** Information about the targets to which audit notifications are sent. */
		auditNotificationTargetConfigurations?: {[id: string]: AuditNotificationTarget };

		/** <p>Specifies which audit checks are enabled and disabled for this account. Use <code>DescribeAccountAuditConfiguration</code> to see the list of all checks, including those that are currently enabled.</p> <p>Some data collection might start immediately when certain checks are enabled. When a check is disabled, any data collected so far in relation to the check is deleted.</p> <p>You cannot disable a check if it is used by any scheduled audit. You must first delete the check from the scheduled audit or delete the scheduled audit itself.</p> <p>On the first call to <code>UpdateAccountAuditConfiguration</code>, this parameter is required and must specify at least one enabled check.</p> */
		auditCheckConfigurations?: {[id: string]: AuditCheckConfiguration };
	}
	export interface UpdateAccountAuditConfigurationPatchBodyFormProperties {

		/**
		 * The ARN of the role that grants permission to AWS IoT to access information about your devices, policies, certificates and other items as required when performing an audit.
		 * Max length: 2048
		 * Min length: 20
		 */
		roleArn: FormControl<string | null | undefined>,

		/** Information about the targets to which audit notifications are sent. */
		auditNotificationTargetConfigurations: FormControl<{[id: string]: AuditNotificationTarget } | null | undefined>,

		/** <p>Specifies which audit checks are enabled and disabled for this account. Use <code>DescribeAccountAuditConfiguration</code> to see the list of all checks, including those that are currently enabled.</p> <p>Some data collection might start immediately when certain checks are enabled. When a check is disabled, any data collected so far in relation to the check is deleted.</p> <p>You cannot disable a check if it is used by any scheduled audit. You must first delete the check from the scheduled audit or delete the scheduled audit itself.</p> <p>On the first call to <code>UpdateAccountAuditConfiguration</code>, this parameter is required and must specify at least one enabled check.</p> */
		auditCheckConfigurations: FormControl<{[id: string]: AuditCheckConfiguration } | null | undefined>,
	}
	export function CreateUpdateAccountAuditConfigurationPatchBodyFormGroup() {
		return new FormGroup<UpdateAccountAuditConfigurationPatchBodyFormProperties>({
			roleArn: new FormControl<string | null | undefined>(undefined, [Validators.minLength(20), Validators.maxLength(2048)]),
			auditNotificationTargetConfigurations: new FormControl<{[id: string]: AuditNotificationTarget } | null | undefined>(undefined),
			auditCheckConfigurations: new FormControl<{[id: string]: AuditCheckConfiguration } | null | undefined>(undefined),
		});

	}

	export interface UpdateCACertificatePutBody {

		/** The registration configuration. */
		registrationConfig?: UpdateCACertificatePutBodyRegistrationConfig;

		/** If true, removes auto registration. */
		removeAutoRegistration?: boolean | null;
	}
	export interface UpdateCACertificatePutBodyFormProperties {

		/** If true, removes auto registration. */
		removeAutoRegistration: FormControl<boolean | null | undefined>,
	}
	export function CreateUpdateCACertificatePutBodyFormGroup() {
		return new FormGroup<UpdateCACertificatePutBodyFormProperties>({
			removeAutoRegistration: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface UpdateCACertificatePutBodyRegistrationConfig {
		templateBody?: string | null;

		/**
		 * Max length: 2048
		 * Min length: 20
		 */
		roleArn?: string | null;
	}
	export interface UpdateCACertificatePutBodyRegistrationConfigFormProperties {
		templateBody: FormControl<string | null | undefined>,

		/**
		 * Max length: 2048
		 * Min length: 20
		 */
		roleArn: FormControl<string | null | undefined>,
	}
	export function CreateUpdateCACertificatePutBodyRegistrationConfigFormGroup() {
		return new FormGroup<UpdateCACertificatePutBodyRegistrationConfigFormProperties>({
			templateBody: new FormControl<string | null | undefined>(undefined),
			roleArn: new FormControl<string | null | undefined>(undefined, [Validators.minLength(20), Validators.maxLength(2048)]),
		});

	}

	export interface UpdateProvisioningTemplatePatchBody {

		/**
		 * The description of the fleet provisioning template.
		 * Max length: 500
		 * Min length: 0
		 */
		description?: string | null;

		/** True to enable the fleet provisioning template, otherwise false. */
		enabled?: boolean | null;

		/** The ID of the default provisioning template version. */
		defaultVersionId?: number | null;

		/**
		 * The ARN of the role associated with the provisioning template. This IoT role grants permission to provision a device.
		 * Max length: 2048
		 * Min length: 20
		 */
		provisioningRoleArn?: string | null;

		/** Structure that contains <code>payloadVersion</code> and <code>targetArn</code>. */
		preProvisioningHook?: UpdateProvisioningTemplatePatchBodyPreProvisioningHook;

		/** Removes pre-provisioning hook template. */
		removePreProvisioningHook?: boolean | null;
	}
	export interface UpdateProvisioningTemplatePatchBodyFormProperties {

		/**
		 * The description of the fleet provisioning template.
		 * Max length: 500
		 * Min length: 0
		 */
		description: FormControl<string | null | undefined>,

		/** True to enable the fleet provisioning template, otherwise false. */
		enabled: FormControl<boolean | null | undefined>,

		/** The ID of the default provisioning template version. */
		defaultVersionId: FormControl<number | null | undefined>,

		/**
		 * The ARN of the role associated with the provisioning template. This IoT role grants permission to provision a device.
		 * Max length: 2048
		 * Min length: 20
		 */
		provisioningRoleArn: FormControl<string | null | undefined>,

		/** Removes pre-provisioning hook template. */
		removePreProvisioningHook: FormControl<boolean | null | undefined>,
	}
	export function CreateUpdateProvisioningTemplatePatchBodyFormGroup() {
		return new FormGroup<UpdateProvisioningTemplatePatchBodyFormProperties>({
			description: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(500), Validators.pattern('[^\p{C}]*')]),
			enabled: new FormControl<boolean | null | undefined>(undefined),
			defaultVersionId: new FormControl<number | null | undefined>(undefined),
			provisioningRoleArn: new FormControl<string | null | undefined>(undefined, [Validators.minLength(20), Validators.maxLength(2048)]),
			removePreProvisioningHook: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface UpdateProvisioningTemplatePatchBodyPreProvisioningHook {

		/**
		 * Max length: 32
		 * Min length: 10
		 */
		payloadVersion?: string | null;

		/** Max length: 2048 */
		targetArn?: string | null;
	}
	export interface UpdateProvisioningTemplatePatchBodyPreProvisioningHookFormProperties {

		/**
		 * Max length: 32
		 * Min length: 10
		 */
		payloadVersion: FormControl<string | null | undefined>,

		/** Max length: 2048 */
		targetArn: FormControl<string | null | undefined>,
	}
	export function CreateUpdateProvisioningTemplatePatchBodyPreProvisioningHookFormGroup() {
		return new FormGroup<UpdateProvisioningTemplatePatchBodyPreProvisioningHookFormProperties>({
			payloadVersion: new FormControl<string | null | undefined>(undefined, [Validators.minLength(10), Validators.maxLength(32), Validators.pattern('^[0-9-]+$')]),
			targetArn: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(2048)]),
		});

	}

	export interface DeprecateThingTypePostBody {

		/** Whether to undeprecate a deprecated thing type. If <b>true</b>, the thing type will not be deprecated anymore and you can associate it with things. */
		undoDeprecate?: boolean | null;
	}
	export interface DeprecateThingTypePostBodyFormProperties {

		/** Whether to undeprecate a deprecated thing type. If <b>true</b>, the thing type will not be deprecated anymore and you can associate it with things. */
		undoDeprecate: FormControl<boolean | null | undefined>,
	}
	export function CreateDeprecateThingTypePostBodyFormGroup() {
		return new FormGroup<DeprecateThingTypePostBodyFormProperties>({
			undoDeprecate: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface StartAuditMitigationActionsTaskPostBody {

		/**
		 * Used in MitigationActionParams, this information identifies the target findings to which the mitigation actions are applied. Only one entry appears.
		 * Required
		 */
		target: StartAuditMitigationActionsTaskPostBodyTarget;

		/**
		 * For an audit check, specifies which mitigation actions to apply. Those actions must be defined in your AWS account.
		 * Required
		 */
		auditCheckToActionsMapping: {[id: string]: Array<string> };

		/**
		 * Each audit mitigation task must have a unique client request token. If you try to start a new task with the same token as a task that already exists, an exception occurs. If you omit this value, a unique client request token is generated automatically.
		 * Required
		 * Max length: 64
		 * Min length: 1
		 */
		clientRequestToken: string;
	}
	export interface StartAuditMitigationActionsTaskPostBodyFormProperties {

		/**
		 * For an audit check, specifies which mitigation actions to apply. Those actions must be defined in your AWS account.
		 * Required
		 */
		auditCheckToActionsMapping: FormControl<{[id: string]: Array<string> } | null | undefined>,

		/**
		 * Each audit mitigation task must have a unique client request token. If you try to start a new task with the same token as a task that already exists, an exception occurs. If you omit this value, a unique client request token is generated automatically.
		 * Required
		 * Max length: 64
		 * Min length: 1
		 */
		clientRequestToken: FormControl<string | null | undefined>,
	}
	export function CreateStartAuditMitigationActionsTaskPostBodyFormGroup() {
		return new FormGroup<StartAuditMitigationActionsTaskPostBodyFormProperties>({
			auditCheckToActionsMapping: new FormControl<{[id: string]: Array<string> } | null | undefined>(undefined, [Validators.required]),
			clientRequestToken: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(64), Validators.pattern('^[a-zA-Z0-9-_]+$')]),
		});

	}

	export interface StartAuditMitigationActionsTaskPostBodyTarget {

		/**
		 * Max length: 40
		 * Min length: 1
		 */
		auditTaskId?: string | null;

		/**
		 * Minimum items: 1
		 * Maximum items: 25
		 */
		findingIds?: Array<string>;
		auditCheckToReasonCodeFilter?: AuditCheckToReasonCodeFilter;
	}
	export interface StartAuditMitigationActionsTaskPostBodyTargetFormProperties {

		/**
		 * Max length: 40
		 * Min length: 1
		 */
		auditTaskId: FormControl<string | null | undefined>,
	}
	export function CreateStartAuditMitigationActionsTaskPostBodyTargetFormGroup() {
		return new FormGroup<StartAuditMitigationActionsTaskPostBodyTargetFormProperties>({
			auditTaskId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(40), Validators.pattern('[a-zA-Z0-9\-]+')]),
		});

	}

	export interface UpdateEventConfigurationsPatchBody {

		/** The new event configuration values. */
		eventConfigurations?: {[id: string]: Configuration };
	}
	export interface UpdateEventConfigurationsPatchBodyFormProperties {

		/** The new event configuration values. */
		eventConfigurations: FormControl<{[id: string]: Configuration } | null | undefined>,
	}
	export function CreateUpdateEventConfigurationsPatchBodyFormGroup() {
		return new FormGroup<UpdateEventConfigurationsPatchBodyFormProperties>({
			eventConfigurations: new FormControl<{[id: string]: Configuration } | null | undefined>(undefined),
		});

	}

	export interface GetCardinalityPostBody {

		/**
		 * The name of the index to search.
		 * Max length: 128
		 * Min length: 1
		 */
		indexName?: string | null;

		/**
		 * The search query.
		 * Required
		 * Min length: 1
		 */
		queryString: string;

		/**
		 * The field to aggregate.
		 * Min length: 1
		 */
		aggregationField?: string | null;

		/** The query version. */
		queryVersion?: string | null;
	}
	export interface GetCardinalityPostBodyFormProperties {

		/**
		 * The name of the index to search.
		 * Max length: 128
		 * Min length: 1
		 */
		indexName: FormControl<string | null | undefined>,

		/**
		 * The search query.
		 * Required
		 * Min length: 1
		 */
		queryString: FormControl<string | null | undefined>,

		/**
		 * The field to aggregate.
		 * Min length: 1
		 */
		aggregationField: FormControl<string | null | undefined>,

		/** The query version. */
		queryVersion: FormControl<string | null | undefined>,
	}
	export function CreateGetCardinalityPostBodyFormGroup() {
		return new FormGroup<GetCardinalityPostBodyFormProperties>({
			indexName: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(128), Validators.pattern('[a-zA-Z0-9:_-]+')]),
			queryString: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1)]),
			aggregationField: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1)]),
			queryVersion: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetEffectivePoliciesPostBody {

		/** The principal. */
		principal?: string | null;

		/** The Cognito identity pool ID. */
		cognitoIdentityPoolId?: string | null;
	}
	export interface GetEffectivePoliciesPostBodyFormProperties {

		/** The principal. */
		principal: FormControl<string | null | undefined>,

		/** The Cognito identity pool ID. */
		cognitoIdentityPoolId: FormControl<string | null | undefined>,
	}
	export function CreateGetEffectivePoliciesPostBodyFormGroup() {
		return new FormGroup<GetEffectivePoliciesPostBodyFormProperties>({
			principal: new FormControl<string | null | undefined>(undefined),
			cognitoIdentityPoolId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateIndexingConfigurationPostBody {

		/** The thing indexing configuration. For more information, see <a href="https://docs.aws.amazon.com/iot/latest/developerguide/managing-index.html">Managing Thing Indexing</a>. */
		thingIndexingConfiguration?: UpdateIndexingConfigurationPostBodyThingIndexingConfiguration;

		/** Thing group indexing configuration. */
		thingGroupIndexingConfiguration?: UpdateIndexingConfigurationPostBodyThingGroupIndexingConfiguration;
	}
	export interface UpdateIndexingConfigurationPostBodyFormProperties {
	}
	export function CreateUpdateIndexingConfigurationPostBodyFormGroup() {
		return new FormGroup<UpdateIndexingConfigurationPostBodyFormProperties>({
		});

	}

	export interface UpdateIndexingConfigurationPostBodyThingIndexingConfiguration {
		thingIndexingMode?: ThingIndexingConfigurationThingIndexingMode | null;
		thingConnectivityIndexingMode?: ThingIndexingConfigurationThingConnectivityIndexingMode | null;
		managedFields?: Array<Field>;
		customFields?: Array<Field>;
	}
	export interface UpdateIndexingConfigurationPostBodyThingIndexingConfigurationFormProperties {
		thingIndexingMode: FormControl<ThingIndexingConfigurationThingIndexingMode | null | undefined>,
		thingConnectivityIndexingMode: FormControl<ThingIndexingConfigurationThingConnectivityIndexingMode | null | undefined>,
	}
	export function CreateUpdateIndexingConfigurationPostBodyThingIndexingConfigurationFormGroup() {
		return new FormGroup<UpdateIndexingConfigurationPostBodyThingIndexingConfigurationFormProperties>({
			thingIndexingMode: new FormControl<ThingIndexingConfigurationThingIndexingMode | null | undefined>(undefined),
			thingConnectivityIndexingMode: new FormControl<ThingIndexingConfigurationThingConnectivityIndexingMode | null | undefined>(undefined),
		});

	}

	export interface UpdateIndexingConfigurationPostBodyThingGroupIndexingConfiguration {
		thingGroupIndexingMode?: ThingGroupIndexingConfigurationThingGroupIndexingMode | null;
		managedFields?: Array<Field>;
		customFields?: Array<Field>;
	}
	export interface UpdateIndexingConfigurationPostBodyThingGroupIndexingConfigurationFormProperties {
		thingGroupIndexingMode: FormControl<ThingGroupIndexingConfigurationThingGroupIndexingMode | null | undefined>,
	}
	export function CreateUpdateIndexingConfigurationPostBodyThingGroupIndexingConfigurationFormGroup() {
		return new FormGroup<UpdateIndexingConfigurationPostBodyThingGroupIndexingConfigurationFormProperties>({
			thingGroupIndexingMode: new FormControl<ThingGroupIndexingConfigurationThingGroupIndexingMode | null | undefined>(undefined),
		});

	}

	export interface SetLoggingOptionsPostBody {

		/**
		 * Describes the logging options payload.
		 * Required
		 */
		loggingOptionsPayload: SetLoggingOptionsPostBodyLoggingOptionsPayload;
	}
	export interface SetLoggingOptionsPostBodyFormProperties {
	}
	export function CreateSetLoggingOptionsPostBodyFormGroup() {
		return new FormGroup<SetLoggingOptionsPostBodyFormProperties>({
		});

	}

	export interface SetLoggingOptionsPostBodyLoggingOptionsPayload {
		roleArn?: string | null;
		logLevel?: EnableIoTLoggingParamsLogLevel | null;
	}
	export interface SetLoggingOptionsPostBodyLoggingOptionsPayloadFormProperties {
		roleArn: FormControl<string | null | undefined>,
		logLevel: FormControl<EnableIoTLoggingParamsLogLevel | null | undefined>,
	}
	export function CreateSetLoggingOptionsPostBodyLoggingOptionsPayloadFormGroup() {
		return new FormGroup<SetLoggingOptionsPostBodyLoggingOptionsPayloadFormProperties>({
			roleArn: new FormControl<string | null | undefined>(undefined),
			logLevel: new FormControl<EnableIoTLoggingParamsLogLevel | null | undefined>(undefined),
		});

	}

	export interface GetPercentilesPostBody {

		/**
		 * The name of the index to search.
		 * Max length: 128
		 * Min length: 1
		 */
		indexName?: string | null;

		/**
		 * The query string.
		 * Required
		 * Min length: 1
		 */
		queryString: string;

		/**
		 * The field to aggregate.
		 * Min length: 1
		 */
		aggregationField?: string | null;

		/** The query version. */
		queryVersion?: string | null;

		/** The percentile groups returned. */
		percents?: Array<number>;
	}
	export interface GetPercentilesPostBodyFormProperties {

		/**
		 * The name of the index to search.
		 * Max length: 128
		 * Min length: 1
		 */
		indexName: FormControl<string | null | undefined>,

		/**
		 * The query string.
		 * Required
		 * Min length: 1
		 */
		queryString: FormControl<string | null | undefined>,

		/**
		 * The field to aggregate.
		 * Min length: 1
		 */
		aggregationField: FormControl<string | null | undefined>,

		/** The query version. */
		queryVersion: FormControl<string | null | undefined>,
	}
	export function CreateGetPercentilesPostBodyFormGroup() {
		return new FormGroup<GetPercentilesPostBodyFormProperties>({
			indexName: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(128), Validators.pattern('[a-zA-Z0-9:_-]+')]),
			queryString: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1)]),
			aggregationField: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1)]),
			queryVersion: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetStatisticsPostBody {

		/**
		 * The name of the index to search. The default value is <code>AWS_Things</code>.
		 * Max length: 128
		 * Min length: 1
		 */
		indexName?: string | null;

		/**
		 * The query used to search. You can specify "*" for the query string to get the count of all indexed things in your AWS account.
		 * Required
		 * Min length: 1
		 */
		queryString: string;

		/**
		 * The aggregation field name.
		 * Min length: 1
		 */
		aggregationField?: string | null;

		/** The version of the query used to search. */
		queryVersion?: string | null;
	}
	export interface GetStatisticsPostBodyFormProperties {

		/**
		 * The name of the index to search. The default value is <code>AWS_Things</code>.
		 * Max length: 128
		 * Min length: 1
		 */
		indexName: FormControl<string | null | undefined>,

		/**
		 * The query used to search. You can specify "*" for the query string to get the count of all indexed things in your AWS account.
		 * Required
		 * Min length: 1
		 */
		queryString: FormControl<string | null | undefined>,

		/**
		 * The aggregation field name.
		 * Min length: 1
		 */
		aggregationField: FormControl<string | null | undefined>,

		/** The version of the query used to search. */
		queryVersion: FormControl<string | null | undefined>,
	}
	export function CreateGetStatisticsPostBodyFormGroup() {
		return new FormGroup<GetStatisticsPostBodyFormProperties>({
			indexName: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(128), Validators.pattern('[a-zA-Z0-9:_-]+')]),
			queryString: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1)]),
			aggregationField: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1)]),
			queryVersion: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface SetV2LoggingOptionsPostBody {

		/** The ARN of the role that allows IoT to write to Cloudwatch logs. */
		roleArn?: string | null;

		/** The default logging level. */
		defaultLogLevel?: EnableIoTLoggingParamsLogLevel | null;

		/** If true all logs are disabled. The default is false. */
		disableAllLogs?: boolean | null;
	}
	export interface SetV2LoggingOptionsPostBodyFormProperties {

		/** The ARN of the role that allows IoT to write to Cloudwatch logs. */
		roleArn: FormControl<string | null | undefined>,

		/** The default logging level. */
		defaultLogLevel: FormControl<EnableIoTLoggingParamsLogLevel | null | undefined>,

		/** If true all logs are disabled. The default is false. */
		disableAllLogs: FormControl<boolean | null | undefined>,
	}
	export function CreateSetV2LoggingOptionsPostBodyFormGroup() {
		return new FormGroup<SetV2LoggingOptionsPostBodyFormProperties>({
			roleArn: new FormControl<string | null | undefined>(undefined),
			defaultLogLevel: new FormControl<EnableIoTLoggingParamsLogLevel | null | undefined>(undefined),
			disableAllLogs: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface ListAuditFindingsPostBody {

		/**
		 * A filter to limit results to the audit with the specified ID. You must specify either the taskId or the startTime and endTime, but not both.
		 * Max length: 40
		 * Min length: 1
		 */
		taskId?: string | null;

		/** An audit check name. Checks must be enabled for your account. (Use <code>DescribeAccountAuditConfiguration</code> to see the list of all checks, including those that are enabled or use <code>UpdateAccountAuditConfiguration</code> to select which checks are enabled.) */
		checkName?: string | null;

		/** Information that identifies the noncompliant resource. */
		resourceIdentifier?: ListAuditFindingsPostBodyResourceIdentifier;

		/**
		 * The maximum number of results to return at one time. The default is 25.
		 * Minimum: 1
		 * Maximum: 250
		 */
		maxResults?: number | null;

		/** The token for the next set of results. */
		nextToken?: string | null;

		/** A filter to limit results to those found after the specified time. You must specify either the startTime and endTime or the taskId, but not both. */
		startTime?: Date | null;

		/** A filter to limit results to those found before the specified time. You must specify either the startTime and endTime or the taskId, but not both. */
		endTime?: Date | null;
	}
	export interface ListAuditFindingsPostBodyFormProperties {

		/**
		 * A filter to limit results to the audit with the specified ID. You must specify either the taskId or the startTime and endTime, but not both.
		 * Max length: 40
		 * Min length: 1
		 */
		taskId: FormControl<string | null | undefined>,

		/** An audit check name. Checks must be enabled for your account. (Use <code>DescribeAccountAuditConfiguration</code> to see the list of all checks, including those that are enabled or use <code>UpdateAccountAuditConfiguration</code> to select which checks are enabled.) */
		checkName: FormControl<string | null | undefined>,

		/**
		 * The maximum number of results to return at one time. The default is 25.
		 * Minimum: 1
		 * Maximum: 250
		 */
		maxResults: FormControl<number | null | undefined>,

		/** The token for the next set of results. */
		nextToken: FormControl<string | null | undefined>,

		/** A filter to limit results to those found after the specified time. You must specify either the startTime and endTime or the taskId, but not both. */
		startTime: FormControl<Date | null | undefined>,

		/** A filter to limit results to those found before the specified time. You must specify either the startTime and endTime or the taskId, but not both. */
		endTime: FormControl<Date | null | undefined>,
	}
	export function CreateListAuditFindingsPostBodyFormGroup() {
		return new FormGroup<ListAuditFindingsPostBodyFormProperties>({
			taskId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(40), Validators.pattern('[a-zA-Z0-9\-]+')]),
			checkName: new FormControl<string | null | undefined>(undefined),
			maxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(250)]),
			nextToken: new FormControl<string | null | undefined>(undefined),
			startTime: new FormControl<Date | null | undefined>(undefined),
			endTime: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface ListAuditFindingsPostBodyResourceIdentifier {

		/**
		 * Max length: 64
		 * Min length: 64
		 */
		deviceCertificateId?: string | null;

		/**
		 * Max length: 64
		 * Min length: 64
		 */
		caCertificateId?: string | null;
		cognitoIdentityPoolId?: string | null;
		clientId?: string | null;

		/** Information about the version of the policy associated with the resource. */
		policyVersionIdentifier?: PolicyVersionIdentifier;

		/**
		 * Max length: 12
		 * Min length: 12
		 */
		account?: string | null;

		/**
		 * Max length: 2048
		 * Min length: 20
		 */
		iamRoleArn?: string | null;

		/**
		 * Max length: 2048
		 * Min length: 1
		 */
		roleAliasArn?: string | null;
	}
	export interface ListAuditFindingsPostBodyResourceIdentifierFormProperties {

		/**
		 * Max length: 64
		 * Min length: 64
		 */
		deviceCertificateId: FormControl<string | null | undefined>,

		/**
		 * Max length: 64
		 * Min length: 64
		 */
		caCertificateId: FormControl<string | null | undefined>,
		cognitoIdentityPoolId: FormControl<string | null | undefined>,
		clientId: FormControl<string | null | undefined>,

		/**
		 * Max length: 12
		 * Min length: 12
		 */
		account: FormControl<string | null | undefined>,

		/**
		 * Max length: 2048
		 * Min length: 20
		 */
		iamRoleArn: FormControl<string | null | undefined>,

		/**
		 * Max length: 2048
		 * Min length: 1
		 */
		roleAliasArn: FormControl<string | null | undefined>,
	}
	export function CreateListAuditFindingsPostBodyResourceIdentifierFormGroup() {
		return new FormGroup<ListAuditFindingsPostBodyResourceIdentifierFormProperties>({
			deviceCertificateId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(64), Validators.maxLength(64), Validators.pattern('(0x)?[a-fA-F0-9]+')]),
			caCertificateId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(64), Validators.maxLength(64), Validators.pattern('(0x)?[a-fA-F0-9]+')]),
			cognitoIdentityPoolId: new FormControl<string | null | undefined>(undefined),
			clientId: new FormControl<string | null | undefined>(undefined),
			account: new FormControl<string | null | undefined>(undefined, [Validators.minLength(12), Validators.maxLength(12), Validators.pattern('[0-9]+')]),
			iamRoleArn: new FormControl<string | null | undefined>(undefined, [Validators.minLength(20), Validators.maxLength(2048)]),
			roleAliasArn: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(2048)]),
		});

	}

	export interface StartThingRegistrationTaskPostBody {

		/**
		 * The provisioning template.
		 * Required
		 */
		templateBody: string;

		/**
		 * The S3 bucket that contains the input file.
		 * Required
		 * Max length: 256
		 * Min length: 3
		 */
		inputFileBucket: string;

		/**
		 * The name of input file within the S3 bucket. This file contains a newline delimited JSON file. Each line contains the parameter values to provision one device (thing).
		 * Required
		 * Max length: 1024
		 * Min length: 1
		 */
		inputFileKey: string;

		/**
		 * The IAM role ARN that grants permission the input file.
		 * Required
		 * Max length: 2048
		 * Min length: 20
		 */
		roleArn: string;
	}
	export interface StartThingRegistrationTaskPostBodyFormProperties {

		/**
		 * The provisioning template.
		 * Required
		 */
		templateBody: FormControl<string | null | undefined>,

		/**
		 * The S3 bucket that contains the input file.
		 * Required
		 * Max length: 256
		 * Min length: 3
		 */
		inputFileBucket: FormControl<string | null | undefined>,

		/**
		 * The name of input file within the S3 bucket. This file contains a newline delimited JSON file. Each line contains the parameter values to provision one device (thing).
		 * Required
		 * Max length: 1024
		 * Min length: 1
		 */
		inputFileKey: FormControl<string | null | undefined>,

		/**
		 * The IAM role ARN that grants permission the input file.
		 * Required
		 * Max length: 2048
		 * Min length: 20
		 */
		roleArn: FormControl<string | null | undefined>,
	}
	export function CreateStartThingRegistrationTaskPostBodyFormGroup() {
		return new FormGroup<StartThingRegistrationTaskPostBodyFormProperties>({
			templateBody: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			inputFileBucket: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(3), Validators.maxLength(256), Validators.pattern('[a-zA-Z0-9._-]+')]),
			inputFileKey: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(1024), Validators.pattern('[a-zA-Z0-9!_.*\'()-\/]+')]),
			roleArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(20), Validators.maxLength(2048)]),
		});

	}

	export interface RegisterThingPostBody {

		/**
		 * The provisioning template. See <a href="https://docs.aws.amazon.com/iot/latest/developerguide/provision-w-cert.html">Provisioning Devices That Have Device Certificates</a> for more information.
		 * Required
		 */
		templateBody: string;

		/** The parameters for provisioning a thing. See <a href="https://docs.aws.amazon.com/iot/latest/developerguide/provision-template.html">Provisioning Templates</a> for more information. */
		parameters?: {[id: string]: string };
	}
	export interface RegisterThingPostBodyFormProperties {

		/**
		 * The provisioning template. See <a href="https://docs.aws.amazon.com/iot/latest/developerguide/provision-w-cert.html">Provisioning Devices That Have Device Certificates</a> for more information.
		 * Required
		 */
		templateBody: FormControl<string | null | undefined>,

		/** The parameters for provisioning a thing. See <a href="https://docs.aws.amazon.com/iot/latest/developerguide/provision-template.html">Provisioning Templates</a> for more information. */
		parameters: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateRegisterThingPostBodyFormGroup() {
		return new FormGroup<RegisterThingPostBodyFormProperties>({
			templateBody: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			parameters: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}

	export interface SetV2LoggingLevelPostBody {

		/**
		 * A log target.
		 * Required
		 */
		logTarget: SetV2LoggingLevelPostBodyLogTarget;

		/**
		 * The log level.
		 * Required
		 */
		logLevel: EnableIoTLoggingParamsLogLevel;
	}
	export interface SetV2LoggingLevelPostBodyFormProperties {

		/**
		 * The log level.
		 * Required
		 */
		logLevel: FormControl<EnableIoTLoggingParamsLogLevel | null | undefined>,
	}
	export function CreateSetV2LoggingLevelPostBodyFormGroup() {
		return new FormGroup<SetV2LoggingLevelPostBodyFormProperties>({
			logLevel: new FormControl<EnableIoTLoggingParamsLogLevel | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface SetV2LoggingLevelPostBodyLogTarget {
		targetType?: LogTargetTargetType | null;
		targetName?: string | null;
	}
	export interface SetV2LoggingLevelPostBodyLogTargetFormProperties {
		targetType: FormControl<LogTargetTargetType | null | undefined>,
		targetName: FormControl<string | null | undefined>,
	}
	export function CreateSetV2LoggingLevelPostBodyLogTargetFormGroup() {
		return new FormGroup<SetV2LoggingLevelPostBodyLogTargetFormProperties>({
			targetType: new FormControl<LogTargetTargetType | null | undefined>(undefined),
			targetName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface RegisterCACertificatePostBody {

		/**
		 * The PEM of a certificate.
		 * Required
		 * Max length: 65536
		 * Min length: 1
		 */
		caCertificate: string;

		/**
		 * The PEM of a certificate.
		 * Required
		 * Max length: 65536
		 * Min length: 1
		 */
		verificationCertificate: string;

		/** The registration configuration. */
		registrationConfig?: RegisterCACertificatePostBodyRegistrationConfig;

		/** <p>Metadata which can be used to manage the CA certificate.</p> <note> <p>For URI Request parameters use format: ...key1=value1&amp;key2=value2...</p> <p>For the CLI command-line parameter use format: &amp;&amp;tags "key1=value1&amp;key2=value2..."</p> <p>For the cli-input-json file use format: "tags": "key1=value1&amp;key2=value2..."</p> </note> */
		tags?: Array<Tag>;
	}
	export interface RegisterCACertificatePostBodyFormProperties {

		/**
		 * The PEM of a certificate.
		 * Required
		 * Max length: 65536
		 * Min length: 1
		 */
		caCertificate: FormControl<string | null | undefined>,

		/**
		 * The PEM of a certificate.
		 * Required
		 * Max length: 65536
		 * Min length: 1
		 */
		verificationCertificate: FormControl<string | null | undefined>,
	}
	export function CreateRegisterCACertificatePostBodyFormGroup() {
		return new FormGroup<RegisterCACertificatePostBodyFormProperties>({
			caCertificate: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(65536)]),
			verificationCertificate: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(65536)]),
		});

	}

	export interface RegisterCACertificatePostBodyRegistrationConfig {
		templateBody?: string | null;

		/**
		 * Max length: 2048
		 * Min length: 20
		 */
		roleArn?: string | null;
	}
	export interface RegisterCACertificatePostBodyRegistrationConfigFormProperties {
		templateBody: FormControl<string | null | undefined>,

		/**
		 * Max length: 2048
		 * Min length: 20
		 */
		roleArn: FormControl<string | null | undefined>,
	}
	export function CreateRegisterCACertificatePostBodyRegistrationConfigFormGroup() {
		return new FormGroup<RegisterCACertificatePostBodyRegistrationConfigFormProperties>({
			templateBody: new FormControl<string | null | undefined>(undefined),
			roleArn: new FormControl<string | null | undefined>(undefined, [Validators.minLength(20), Validators.maxLength(2048)]),
		});

	}

	export interface RegisterCertificatePostBody {

		/**
		 * The PEM of a certificate.
		 * Required
		 * Max length: 65536
		 * Min length: 1
		 */
		certificatePem: string;

		/**
		 * The PEM of a certificate.
		 * Max length: 65536
		 * Min length: 1
		 */
		caCertificatePem?: string | null;

		/** The status of the register certificate request. */
		status?: CertificateDescriptionStatus | null;
	}
	export interface RegisterCertificatePostBodyFormProperties {

		/**
		 * The PEM of a certificate.
		 * Required
		 * Max length: 65536
		 * Min length: 1
		 */
		certificatePem: FormControl<string | null | undefined>,

		/**
		 * The PEM of a certificate.
		 * Max length: 65536
		 * Min length: 1
		 */
		caCertificatePem: FormControl<string | null | undefined>,

		/** The status of the register certificate request. */
		status: FormControl<CertificateDescriptionStatus | null | undefined>,
	}
	export function CreateRegisterCertificatePostBodyFormGroup() {
		return new FormGroup<RegisterCertificatePostBodyFormProperties>({
			certificatePem: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(65536)]),
			caCertificatePem: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(65536)]),
			status: new FormControl<CertificateDescriptionStatus | null | undefined>(undefined),
		});

	}

	export interface RegisterCertificateWithoutCAPostBody {

		/**
		 * The PEM of a certificate.
		 * Required
		 * Max length: 65536
		 * Min length: 1
		 */
		certificatePem: string;

		/** The status of the register certificate request. */
		status?: CertificateDescriptionStatus | null;
	}
	export interface RegisterCertificateWithoutCAPostBodyFormProperties {

		/**
		 * The PEM of a certificate.
		 * Required
		 * Max length: 65536
		 * Min length: 1
		 */
		certificatePem: FormControl<string | null | undefined>,

		/** The status of the register certificate request. */
		status: FormControl<CertificateDescriptionStatus | null | undefined>,
	}
	export function CreateRegisterCertificateWithoutCAPostBodyFormGroup() {
		return new FormGroup<RegisterCertificateWithoutCAPostBodyFormProperties>({
			certificatePem: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(65536)]),
			status: new FormControl<CertificateDescriptionStatus | null | undefined>(undefined),
		});

	}

	export interface RejectCertificateTransferPatchBody {

		/**
		 * The reason the certificate transfer was rejected.
		 * Max length: 128
		 */
		rejectReason?: string | null;
	}
	export interface RejectCertificateTransferPatchBodyFormProperties {

		/**
		 * The reason the certificate transfer was rejected.
		 * Max length: 128
		 */
		rejectReason: FormControl<string | null | undefined>,
	}
	export function CreateRejectCertificateTransferPatchBodyFormGroup() {
		return new FormGroup<RejectCertificateTransferPatchBodyFormProperties>({
			rejectReason: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(128)]),
		});

	}

	export interface RemoveThingFromBillingGroupPutBody {

		/**
		 * The name of the billing group.
		 * Max length: 128
		 * Min length: 1
		 */
		billingGroupName?: string | null;

		/** The ARN of the billing group. */
		billingGroupArn?: string | null;

		/**
		 * The name of the thing to be removed from the billing group.
		 * Max length: 128
		 * Min length: 1
		 */
		thingName?: string | null;

		/** The ARN of the thing to be removed from the billing group. */
		thingArn?: string | null;
	}
	export interface RemoveThingFromBillingGroupPutBodyFormProperties {

		/**
		 * The name of the billing group.
		 * Max length: 128
		 * Min length: 1
		 */
		billingGroupName: FormControl<string | null | undefined>,

		/** The ARN of the billing group. */
		billingGroupArn: FormControl<string | null | undefined>,

		/**
		 * The name of the thing to be removed from the billing group.
		 * Max length: 128
		 * Min length: 1
		 */
		thingName: FormControl<string | null | undefined>,

		/** The ARN of the thing to be removed from the billing group. */
		thingArn: FormControl<string | null | undefined>,
	}
	export function CreateRemoveThingFromBillingGroupPutBodyFormGroup() {
		return new FormGroup<RemoveThingFromBillingGroupPutBodyFormProperties>({
			billingGroupName: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(128), Validators.pattern('[a-zA-Z0-9:_-]+')]),
			billingGroupArn: new FormControl<string | null | undefined>(undefined),
			thingName: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(128), Validators.pattern('[a-zA-Z0-9:_-]+')]),
			thingArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface RemoveThingFromThingGroupPutBody {

		/**
		 * The group name.
		 * Max length: 128
		 * Min length: 1
		 */
		thingGroupName?: string | null;

		/** The group ARN. */
		thingGroupArn?: string | null;

		/**
		 * The name of the thing to remove from the group.
		 * Max length: 128
		 * Min length: 1
		 */
		thingName?: string | null;

		/** The ARN of the thing to remove from the group. */
		thingArn?: string | null;
	}
	export interface RemoveThingFromThingGroupPutBodyFormProperties {

		/**
		 * The group name.
		 * Max length: 128
		 * Min length: 1
		 */
		thingGroupName: FormControl<string | null | undefined>,

		/** The group ARN. */
		thingGroupArn: FormControl<string | null | undefined>,

		/**
		 * The name of the thing to remove from the group.
		 * Max length: 128
		 * Min length: 1
		 */
		thingName: FormControl<string | null | undefined>,

		/** The ARN of the thing to remove from the group. */
		thingArn: FormControl<string | null | undefined>,
	}
	export function CreateRemoveThingFromThingGroupPutBodyFormGroup() {
		return new FormGroup<RemoveThingFromThingGroupPutBodyFormProperties>({
			thingGroupName: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(128), Validators.pattern('[a-zA-Z0-9:_-]+')]),
			thingGroupArn: new FormControl<string | null | undefined>(undefined),
			thingName: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(128), Validators.pattern('[a-zA-Z0-9:_-]+')]),
			thingArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface SearchIndexPostBody {

		/**
		 * The search index name.
		 * Max length: 128
		 * Min length: 1
		 */
		indexName?: string | null;

		/**
		 * The search query string.
		 * Required
		 * Min length: 1
		 */
		queryString: string;

		/** The token used to get the next set of results, or <code>null</code> if there are no additional results. */
		nextToken?: string | null;

		/**
		 * The maximum number of results to return at one time.
		 * Minimum: 1
		 * Maximum: 500
		 */
		maxResults?: number | null;

		/** The query version. */
		queryVersion?: string | null;
	}
	export interface SearchIndexPostBodyFormProperties {

		/**
		 * The search index name.
		 * Max length: 128
		 * Min length: 1
		 */
		indexName: FormControl<string | null | undefined>,

		/**
		 * The search query string.
		 * Required
		 * Min length: 1
		 */
		queryString: FormControl<string | null | undefined>,

		/** The token used to get the next set of results, or <code>null</code> if there are no additional results. */
		nextToken: FormControl<string | null | undefined>,

		/**
		 * The maximum number of results to return at one time.
		 * Minimum: 1
		 * Maximum: 500
		 */
		maxResults: FormControl<number | null | undefined>,

		/** The query version. */
		queryVersion: FormControl<string | null | undefined>,
	}
	export function CreateSearchIndexPostBodyFormGroup() {
		return new FormGroup<SearchIndexPostBodyFormProperties>({
			indexName: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(128), Validators.pattern('[a-zA-Z0-9:_-]+')]),
			queryString: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1)]),
			nextToken: new FormControl<string | null | undefined>(undefined),
			maxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(500)]),
			queryVersion: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface StartOnDemandAuditTaskPostBody {

		/**
		 * Which checks are performed during the audit. The checks you specify must be enabled for your account or an exception occurs. Use <code>DescribeAccountAuditConfiguration</code> to see the list of all checks, including those that are enabled or <code>UpdateAccountAuditConfiguration</code> to select which checks are enabled.
		 * Required
		 */
		targetCheckNames: Array<string>;
	}
	export interface StartOnDemandAuditTaskPostBodyFormProperties {
	}
	export function CreateStartOnDemandAuditTaskPostBodyFormGroup() {
		return new FormGroup<StartOnDemandAuditTaskPostBodyFormProperties>({
		});

	}

	export interface TagResourcePostBody {

		/**
		 * The ARN of the resource.
		 * Required
		 */
		resourceArn: string;

		/**
		 * The new or modified tags for the resource.
		 * Required
		 */
		tags: Array<Tag>;
	}
	export interface TagResourcePostBodyFormProperties {

		/**
		 * The ARN of the resource.
		 * Required
		 */
		resourceArn: FormControl<string | null | undefined>,
	}
	export function CreateTagResourcePostBodyFormGroup() {
		return new FormGroup<TagResourcePostBodyFormProperties>({
			resourceArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface TestAuthorizationPostBody {

		/** The principal. */
		principal?: string | null;

		/** The Cognito identity pool ID. */
		cognitoIdentityPoolId?: string | null;

		/**
		 * A list of authorization info objects. Simulating authorization will create a response for each <code>authInfo</code> object in the list.
		 * Required
		 * Minimum items: 1
		 * Maximum items: 10
		 */
		authInfos: Array<AuthInfo>;

		/** When testing custom authorization, the policies specified here are treated as if they are attached to the principal being authorized. */
		policyNamesToAdd?: Array<string>;

		/** When testing custom authorization, the policies specified here are treated as if they are not attached to the principal being authorized. */
		policyNamesToSkip?: Array<string>;
	}
	export interface TestAuthorizationPostBodyFormProperties {

		/** The principal. */
		principal: FormControl<string | null | undefined>,

		/** The Cognito identity pool ID. */
		cognitoIdentityPoolId: FormControl<string | null | undefined>,
	}
	export function CreateTestAuthorizationPostBodyFormGroup() {
		return new FormGroup<TestAuthorizationPostBodyFormProperties>({
			principal: new FormControl<string | null | undefined>(undefined),
			cognitoIdentityPoolId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface TestInvokeAuthorizerPostBody {

		/**
		 * The token returned by your custom authentication service.
		 * Max length: 6144
		 * Min length: 1
		 */
		token?: string | null;

		/**
		 * The signature made with the token and your custom authentication service's private key. This value must be Base-64-encoded.
		 * Max length: 2560
		 * Min length: 1
		 */
		tokenSignature?: string | null;

		/** Specifies the HTTP context to use for the test authorizer request. */
		httpContext?: TestInvokeAuthorizerPostBodyHttpContext;

		/** Specifies the MQTT context to use for the test authorizer request */
		mqttContext?: TestInvokeAuthorizerPostBodyMqttContext;

		/** Specifies the TLS context to use for the test authorizer request. */
		tlsContext?: TestInvokeAuthorizerPostBodyTlsContext;
	}
	export interface TestInvokeAuthorizerPostBodyFormProperties {

		/**
		 * The token returned by your custom authentication service.
		 * Max length: 6144
		 * Min length: 1
		 */
		token: FormControl<string | null | undefined>,

		/**
		 * The signature made with the token and your custom authentication service's private key. This value must be Base-64-encoded.
		 * Max length: 2560
		 * Min length: 1
		 */
		tokenSignature: FormControl<string | null | undefined>,
	}
	export function CreateTestInvokeAuthorizerPostBodyFormGroup() {
		return new FormGroup<TestInvokeAuthorizerPostBodyFormProperties>({
			token: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(6144)]),
			tokenSignature: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(2560), Validators.pattern('[A-Za-z0-9+/]+={0,2}')]),
		});

	}

	export interface TestInvokeAuthorizerPostBodyHttpContext {
		headers?: HttpHeaders;

		/**
		 * Max length: 4096
		 * Min length: 1
		 */
		queryString?: string | null;
	}
	export interface TestInvokeAuthorizerPostBodyHttpContextFormProperties {

		/**
		 * Max length: 4096
		 * Min length: 1
		 */
		queryString: FormControl<string | null | undefined>,
	}
	export function CreateTestInvokeAuthorizerPostBodyHttpContextFormGroup() {
		return new FormGroup<TestInvokeAuthorizerPostBodyHttpContextFormProperties>({
			queryString: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(4096)]),
		});

	}

	export interface TestInvokeAuthorizerPostBodyMqttContext {

		/**
		 * Max length: 65535
		 * Min length: 1
		 */
		username?: string | null;

		/**
		 * Max length: 65535
		 * Min length: 1
		 */
		password?: string | null;

		/**
		 * Max length: 65535
		 * Min length: 1
		 */
		clientId?: string | null;
	}
	export interface TestInvokeAuthorizerPostBodyMqttContextFormProperties {

		/**
		 * Max length: 65535
		 * Min length: 1
		 */
		username: FormControl<string | null | undefined>,

		/**
		 * Max length: 65535
		 * Min length: 1
		 */
		password: FormControl<string | null | undefined>,

		/**
		 * Max length: 65535
		 * Min length: 1
		 */
		clientId: FormControl<string | null | undefined>,
	}
	export function CreateTestInvokeAuthorizerPostBodyMqttContextFormGroup() {
		return new FormGroup<TestInvokeAuthorizerPostBodyMqttContextFormProperties>({
			username: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(65535)]),
			password: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(65535)]),
			clientId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(65535)]),
		});

	}

	export interface TestInvokeAuthorizerPostBodyTlsContext {

		/**
		 * Max length: 253
		 * Min length: 1
		 */
		serverName?: string | null;
	}
	export interface TestInvokeAuthorizerPostBodyTlsContextFormProperties {

		/**
		 * Max length: 253
		 * Min length: 1
		 */
		serverName: FormControl<string | null | undefined>,
	}
	export function CreateTestInvokeAuthorizerPostBodyTlsContextFormGroup() {
		return new FormGroup<TestInvokeAuthorizerPostBodyTlsContextFormProperties>({
			serverName: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(253)]),
		});

	}

	export interface TransferCertificatePatchBody {

		/**
		 * The transfer message.
		 * Max length: 128
		 */
		transferMessage?: string | null;
	}
	export interface TransferCertificatePatchBodyFormProperties {

		/**
		 * The transfer message.
		 * Max length: 128
		 */
		transferMessage: FormControl<string | null | undefined>,
	}
	export function CreateTransferCertificatePatchBodyFormGroup() {
		return new FormGroup<TransferCertificatePatchBodyFormProperties>({
			transferMessage: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(128)]),
		});

	}

	export interface UntagResourcePostBody {

		/**
		 * The ARN of the resource.
		 * Required
		 */
		resourceArn: string;

		/**
		 * A list of the keys of the tags to be removed from the resource.
		 * Required
		 */
		tagKeys: Array<string>;
	}
	export interface UntagResourcePostBodyFormProperties {

		/**
		 * The ARN of the resource.
		 * Required
		 */
		resourceArn: FormControl<string | null | undefined>,
	}
	export function CreateUntagResourcePostBodyFormGroup() {
		return new FormGroup<UntagResourcePostBodyFormProperties>({
			resourceArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UpdateThingGroupsForThingPutBody {

		/**
		 * The thing whose group memberships will be updated.
		 * Max length: 128
		 * Min length: 1
		 */
		thingName?: string | null;

		/** The groups to which the thing will be added. */
		thingGroupsToAdd?: Array<string>;

		/** The groups from which the thing will be removed. */
		thingGroupsToRemove?: Array<string>;

		/** Override dynamic thing groups with static thing groups when 10-group limit is reached. If a thing belongs to 10 thing groups, and one or more of those groups are dynamic thing groups, adding a thing to a static group removes the thing from the last dynamic group. */
		overrideDynamicGroups?: boolean | null;
	}
	export interface UpdateThingGroupsForThingPutBodyFormProperties {

		/**
		 * The thing whose group memberships will be updated.
		 * Max length: 128
		 * Min length: 1
		 */
		thingName: FormControl<string | null | undefined>,

		/** Override dynamic thing groups with static thing groups when 10-group limit is reached. If a thing belongs to 10 thing groups, and one or more of those groups are dynamic thing groups, adding a thing to a static group removes the thing from the last dynamic group. */
		overrideDynamicGroups: FormControl<boolean | null | undefined>,
	}
	export function CreateUpdateThingGroupsForThingPutBodyFormGroup() {
		return new FormGroup<UpdateThingGroupsForThingPutBodyFormProperties>({
			thingName: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(128), Validators.pattern('[a-zA-Z0-9:_-]+')]),
			overrideDynamicGroups: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface ValidateSecurityProfileBehaviorsPostBody {

		/**
		 * Specifies the behaviors that, when violated by a device (thing), cause an alert.
		 * Required
		 * Maximum items: 100
		 */
		behaviors: Array<Behavior>;
	}
	export interface ValidateSecurityProfileBehaviorsPostBodyFormProperties {
	}
	export function CreateValidateSecurityProfileBehaviorsPostBodyFormGroup() {
		return new FormGroup<ValidateSecurityProfileBehaviorsPostBodyFormProperties>({
		});

	}

}

