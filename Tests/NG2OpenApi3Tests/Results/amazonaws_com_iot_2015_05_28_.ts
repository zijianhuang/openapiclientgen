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
		jobArn?: string;
		jobId?: string;
		description?: string;
	}
	export interface AssociateTargetsWithJobResponseFormProperties {
		jobArn: FormControl<string | null | undefined>,
		jobId: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,
	}
	export function CreateAssociateTargetsWithJobResponseFormGroup() {
		return new FormGroup<AssociateTargetsWithJobResponseFormProperties>({
			jobArn: new FormControl<string | null | undefined>(undefined),
			jobId: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
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

	export interface CancelDetectMitigationActionsTaskResponse {
	}
	export interface CancelDetectMitigationActionsTaskResponseFormProperties {
	}
	export function CreateCancelDetectMitigationActionsTaskResponseFormGroup() {
		return new FormGroup<CancelDetectMitigationActionsTaskResponseFormProperties>({
		});

	}

	export interface CancelJobResponse {
		jobArn?: string;
		jobId?: string;
		description?: string;
	}
	export interface CancelJobResponseFormProperties {
		jobArn: FormControl<string | null | undefined>,
		jobId: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,
	}
	export function CreateCancelJobResponseFormGroup() {
		return new FormGroup<CancelJobResponseFormProperties>({
			jobArn: new FormControl<string | null | undefined>(undefined),
			jobId: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
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

	export interface CreateAuditSuppressionResponse {
	}
	export interface CreateAuditSuppressionResponseFormProperties {
	}
	export function CreateCreateAuditSuppressionResponseFormGroup() {
		return new FormGroup<CreateAuditSuppressionResponseFormProperties>({
		});

	}


	/** Information about the version of the policy associated with the resource. */
	export interface PolicyVersionIdentifier {
		policyName?: string;
		policyVersionId?: string;
	}

	/** Information about the version of the policy associated with the resource. */
	export interface PolicyVersionIdentifierFormProperties {
		policyName: FormControl<string | null | undefined>,
		policyVersionId: FormControl<string | null | undefined>,
	}
	export function CreatePolicyVersionIdentifierFormGroup() {
		return new FormGroup<PolicyVersionIdentifierFormProperties>({
			policyName: new FormControl<string | null | undefined>(undefined),
			policyVersionId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The certificate issuer indentifier. */
	export interface IssuerCertificateIdentifier {
		issuerCertificateSubject?: string;
		issuerId?: string;
		issuerCertificateSerialNumber?: string;
	}

	/** The certificate issuer indentifier. */
	export interface IssuerCertificateIdentifierFormProperties {
		issuerCertificateSubject: FormControl<string | null | undefined>,
		issuerId: FormControl<string | null | undefined>,
		issuerCertificateSerialNumber: FormControl<string | null | undefined>,
	}
	export function CreateIssuerCertificateIdentifierFormGroup() {
		return new FormGroup<IssuerCertificateIdentifierFormProperties>({
			issuerCertificateSubject: new FormControl<string | null | undefined>(undefined),
			issuerId: new FormControl<string | null | undefined>(undefined),
			issuerCertificateSerialNumber: new FormControl<string | null | undefined>(undefined),
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

	export interface CreateAuthorizerResponse {
		authorizerName?: string;
		authorizerArn?: string;
	}
	export interface CreateAuthorizerResponseFormProperties {
		authorizerName: FormControl<string | null | undefined>,
		authorizerArn: FormControl<string | null | undefined>,
	}
	export function CreateCreateAuthorizerResponseFormGroup() {
		return new FormGroup<CreateAuthorizerResponseFormProperties>({
			authorizerName: new FormControl<string | null | undefined>(undefined),
			authorizerArn: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A set of key/value pairs that are used to manage the resource. */
	export interface Tag {

		/** Required */
		Key: string;
		Value?: string;
	}

	/** A set of key/value pairs that are used to manage the resource. */
	export interface TagFormProperties {

		/** Required */
		Key: FormControl<string | null | undefined>,
		Value: FormControl<string | null | undefined>,
	}
	export function CreateTagFormGroup() {
		return new FormGroup<TagFormProperties>({
			Key: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Value: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateBillingGroupResponse {
		billingGroupName?: string;
		billingGroupArn?: string;
		billingGroupId?: string;
	}
	export interface CreateBillingGroupResponseFormProperties {
		billingGroupName: FormControl<string | null | undefined>,
		billingGroupArn: FormControl<string | null | undefined>,
		billingGroupId: FormControl<string | null | undefined>,
	}
	export function CreateCreateBillingGroupResponseFormGroup() {
		return new FormGroup<CreateBillingGroupResponseFormProperties>({
			billingGroupName: new FormControl<string | null | undefined>(undefined),
			billingGroupArn: new FormControl<string | null | undefined>(undefined),
			billingGroupId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The output from the CreateCertificateFromCsr operation. */
	export interface CreateCertificateFromCsrResponse {
		certificateArn?: string;
		certificateId?: string;
		certificatePem?: string;
	}

	/** The output from the CreateCertificateFromCsr operation. */
	export interface CreateCertificateFromCsrResponseFormProperties {
		certificateArn: FormControl<string | null | undefined>,
		certificateId: FormControl<string | null | undefined>,
		certificatePem: FormControl<string | null | undefined>,
	}
	export function CreateCreateCertificateFromCsrResponseFormGroup() {
		return new FormGroup<CreateCertificateFromCsrResponseFormProperties>({
			certificateArn: new FormControl<string | null | undefined>(undefined),
			certificateId: new FormControl<string | null | undefined>(undefined),
			certificatePem: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateCustomMetricResponse {
		metricName?: string;
		metricArn?: string;
	}
	export interface CreateCustomMetricResponseFormProperties {
		metricName: FormControl<string | null | undefined>,
		metricArn: FormControl<string | null | undefined>,
	}
	export function CreateCreateCustomMetricResponseFormGroup() {
		return new FormGroup<CreateCustomMetricResponseFormProperties>({
			metricName: new FormControl<string | null | undefined>(undefined),
			metricArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateDimensionResponse {
		name?: string;
		arn?: string;
	}
	export interface CreateDimensionResponseFormProperties {
		name: FormControl<string | null | undefined>,
		arn: FormControl<string | null | undefined>,
	}
	export function CreateCreateDimensionResponseFormGroup() {
		return new FormGroup<CreateDimensionResponseFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			arn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateDomainConfigurationResponse {
		domainConfigurationName?: string;
		domainConfigurationArn?: string;
	}
	export interface CreateDomainConfigurationResponseFormProperties {
		domainConfigurationName: FormControl<string | null | undefined>,
		domainConfigurationArn: FormControl<string | null | undefined>,
	}
	export function CreateCreateDomainConfigurationResponseFormGroup() {
		return new FormGroup<CreateDomainConfigurationResponseFormProperties>({
			domainConfigurationName: new FormControl<string | null | undefined>(undefined),
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
		thingGroupName?: string;
		thingGroupArn?: string;
		thingGroupId?: string;
		indexName?: string;
		queryString?: string;
		queryVersion?: string;
	}
	export interface CreateDynamicThingGroupResponseFormProperties {
		thingGroupName: FormControl<string | null | undefined>,
		thingGroupArn: FormControl<string | null | undefined>,
		thingGroupId: FormControl<string | null | undefined>,
		indexName: FormControl<string | null | undefined>,
		queryString: FormControl<string | null | undefined>,
		queryVersion: FormControl<string | null | undefined>,
	}
	export function CreateCreateDynamicThingGroupResponseFormGroup() {
		return new FormGroup<CreateDynamicThingGroupResponseFormProperties>({
			thingGroupName: new FormControl<string | null | undefined>(undefined),
			thingGroupArn: new FormControl<string | null | undefined>(undefined),
			thingGroupId: new FormControl<string | null | undefined>(undefined),
			indexName: new FormControl<string | null | undefined>(undefined),
			queryString: new FormControl<string | null | undefined>(undefined),
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

	export interface CreateFleetMetricResponse {
		metricName?: string;
		metricArn?: string;
	}
	export interface CreateFleetMetricResponseFormProperties {
		metricName: FormControl<string | null | undefined>,
		metricArn: FormControl<string | null | undefined>,
	}
	export function CreateCreateFleetMetricResponseFormGroup() {
		return new FormGroup<CreateFleetMetricResponseFormProperties>({
			metricName: new FormControl<string | null | undefined>(undefined),
			metricArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum AggregationTypeName { Statistics = 'Statistics', Percentiles = 'Percentiles', Cardinality = 'Cardinality' }

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

	export interface CreateJobResponse {
		jobArn?: string;
		jobId?: string;
		description?: string;
	}
	export interface CreateJobResponseFormProperties {
		jobArn: FormControl<string | null | undefined>,
		jobId: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,
	}
	export function CreateCreateJobResponseFormGroup() {
		return new FormGroup<CreateJobResponseFormProperties>({
			jobArn: new FormControl<string | null | undefined>(undefined),
			jobId: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Allows you to create an exponential rate of rollout for a job. */
	export interface ExponentialRolloutRate {

		/** Required */
		baseRatePerMinute: number;

		/** Required */
		incrementFactor: number;

		/** Required */
		rateIncreaseCriteria: RateIncreaseCriteria;
	}

	/** Allows you to create an exponential rate of rollout for a job. */
	export interface ExponentialRolloutRateFormProperties {

		/** Required */
		baseRatePerMinute: FormControl<number | null | undefined>,

		/** Required */
		incrementFactor: FormControl<number | null | undefined>,
	}
	export function CreateExponentialRolloutRateFormGroup() {
		return new FormGroup<ExponentialRolloutRateFormProperties>({
			baseRatePerMinute: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			incrementFactor: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Allows you to define a criteria to initiate the increase in rate of rollout for a job. */
	export interface RateIncreaseCriteria {
		numberOfNotifiedThings?: number | null;
		numberOfSucceededThings?: number | null;
	}

	/** Allows you to define a criteria to initiate the increase in rate of rollout for a job. */
	export interface RateIncreaseCriteriaFormProperties {
		numberOfNotifiedThings: FormControl<number | null | undefined>,
		numberOfSucceededThings: FormControl<number | null | undefined>,
	}
	export function CreateRateIncreaseCriteriaFormGroup() {
		return new FormGroup<RateIncreaseCriteriaFormProperties>({
			numberOfNotifiedThings: new FormControl<number | null | undefined>(undefined),
			numberOfSucceededThings: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** The criteria that determine when and how a job abort takes place. */
	export interface AbortCriteria {

		/** Required */
		failureType: JobExecutionFailureType;

		/** Required */
		action: AbortAction;

		/** Required */
		thresholdPercentage: number;

		/** Required */
		minNumberOfExecutedThings: number;
	}

	/** The criteria that determine when and how a job abort takes place. */
	export interface AbortCriteriaFormProperties {

		/** Required */
		failureType: FormControl<JobExecutionFailureType | null | undefined>,

		/** Required */
		action: FormControl<AbortAction | null | undefined>,

		/** Required */
		thresholdPercentage: FormControl<number | null | undefined>,

		/** Required */
		minNumberOfExecutedThings: FormControl<number | null | undefined>,
	}
	export function CreateAbortCriteriaFormGroup() {
		return new FormGroup<AbortCriteriaFormProperties>({
			failureType: new FormControl<JobExecutionFailureType | null | undefined>(undefined, [Validators.required]),
			action: new FormControl<AbortAction | null | undefined>(undefined, [Validators.required]),
			thresholdPercentage: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			minNumberOfExecutedThings: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum JobExecutionFailureType { FAILED = 'FAILED', REJECTED = 'REJECTED', TIMED_OUT = 'TIMED_OUT', ALL = 'ALL' }

	export enum AbortAction { CANCEL = 'CANCEL' }


	/** The criteria that determines how many retries are allowed for each failure type for a job. */
	export interface RetryCriteria {

		/** Required */
		failureType: RetryableFailureType;

		/** Required */
		numberOfRetries: number;
	}

	/** The criteria that determines how many retries are allowed for each failure type for a job. */
	export interface RetryCriteriaFormProperties {

		/** Required */
		failureType: FormControl<RetryableFailureType | null | undefined>,

		/** Required */
		numberOfRetries: FormControl<number | null | undefined>,
	}
	export function CreateRetryCriteriaFormGroup() {
		return new FormGroup<RetryCriteriaFormProperties>({
			failureType: new FormControl<RetryableFailureType | null | undefined>(undefined, [Validators.required]),
			numberOfRetries: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum RetryableFailureType { FAILED = 'FAILED', TIMED_OUT = 'TIMED_OUT', ALL = 'ALL' }

	export enum JobEndBehavior { STOP_ROLLOUT = 'STOP_ROLLOUT', CANCEL = 'CANCEL', FORCE_CANCEL = 'FORCE_CANCEL' }


	/** An optional configuration within the <code>SchedulingConfig</code> to setup a recurring maintenance window with a predetermined start time and duration for the rollout of a job document to all devices in a target group for a job. */
	export interface MaintenanceWindow {

		/** Required */
		startTime: string;

		/** Required */
		durationInMinutes: number;
	}

	/** An optional configuration within the <code>SchedulingConfig</code> to setup a recurring maintenance window with a predetermined start time and duration for the rollout of a job document to all devices in a target group for a job. */
	export interface MaintenanceWindowFormProperties {

		/** Required */
		startTime: FormControl<string | null | undefined>,

		/** Required */
		durationInMinutes: FormControl<number | null | undefined>,
	}
	export function CreateMaintenanceWindowFormGroup() {
		return new FormGroup<MaintenanceWindowFormProperties>({
			startTime: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			durationInMinutes: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateJobTemplateResponse {
		jobTemplateArn?: string;
		jobTemplateId?: string;
	}
	export interface CreateJobTemplateResponseFormProperties {
		jobTemplateArn: FormControl<string | null | undefined>,
		jobTemplateId: FormControl<string | null | undefined>,
	}
	export function CreateCreateJobTemplateResponseFormGroup() {
		return new FormGroup<CreateJobTemplateResponseFormProperties>({
			jobTemplateArn: new FormControl<string | null | undefined>(undefined),
			jobTemplateId: new FormControl<string | null | undefined>(undefined),
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


	/** The output of the CreateKeysAndCertificate operation. */
	export interface CreateKeysAndCertificateResponse {
		certificateArn?: string;
		certificateId?: string;
		certificatePem?: string;
		keyPair?: KeyPair;
	}

	/** The output of the CreateKeysAndCertificate operation. */
	export interface CreateKeysAndCertificateResponseFormProperties {
		certificateArn: FormControl<string | null | undefined>,
		certificateId: FormControl<string | null | undefined>,
		certificatePem: FormControl<string | null | undefined>,
	}
	export function CreateCreateKeysAndCertificateResponseFormGroup() {
		return new FormGroup<CreateKeysAndCertificateResponseFormProperties>({
			certificateArn: new FormControl<string | null | undefined>(undefined),
			certificateId: new FormControl<string | null | undefined>(undefined),
			certificatePem: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Describes a key pair. */
	export interface KeyPair {
		PublicKey?: string;
		PrivateKey?: string;
	}

	/** Describes a key pair. */
	export interface KeyPairFormProperties {
		PublicKey: FormControl<string | null | undefined>,
		PrivateKey: FormControl<string | null | undefined>,
	}
	export function CreateKeyPairFormGroup() {
		return new FormGroup<KeyPairFormProperties>({
			PublicKey: new FormControl<string | null | undefined>(undefined),
			PrivateKey: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateMitigationActionResponse {
		actionArn?: string;
		actionId?: string;
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
		action: DeviceCertificateUpdateAction;
	}

	/** Parameters to define a mitigation action that changes the state of the device certificate to inactive. */
	export interface UpdateDeviceCertificateParamsFormProperties {

		/** Required */
		action: FormControl<DeviceCertificateUpdateAction | null | undefined>,
	}
	export function CreateUpdateDeviceCertificateParamsFormGroup() {
		return new FormGroup<UpdateDeviceCertificateParamsFormProperties>({
			action: new FormControl<DeviceCertificateUpdateAction | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum DeviceCertificateUpdateAction { DEACTIVATE = 'DEACTIVATE' }


	/** Parameters to define a mitigation action that changes the state of the CA certificate to inactive. */
	export interface UpdateCACertificateParams {

		/** Required */
		action: DeviceCertificateUpdateAction;
	}

	/** Parameters to define a mitigation action that changes the state of the CA certificate to inactive. */
	export interface UpdateCACertificateParamsFormProperties {

		/** Required */
		action: FormControl<DeviceCertificateUpdateAction | null | undefined>,
	}
	export function CreateUpdateCACertificateParamsFormGroup() {
		return new FormGroup<UpdateCACertificateParamsFormProperties>({
			action: new FormControl<DeviceCertificateUpdateAction | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Parameters used when defining a mitigation action that move a set of things to a thing group. */
	export interface AddThingsToThingGroupParams {

		/** Required */
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
		templateName: PolicyTemplateName;
	}

	/** Parameters to define a mitigation action that adds a blank policy to restrict permissions. */
	export interface ReplaceDefaultPolicyVersionParamsFormProperties {

		/** Required */
		templateName: FormControl<PolicyTemplateName | null | undefined>,
	}
	export function CreateReplaceDefaultPolicyVersionParamsFormGroup() {
		return new FormGroup<ReplaceDefaultPolicyVersionParamsFormProperties>({
			templateName: new FormControl<PolicyTemplateName | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum PolicyTemplateName { BLANK_POLICY = 'BLANK_POLICY' }


	/** Parameters used when defining a mitigation action that enable Amazon Web Services IoT Core logging. */
	export interface EnableIoTLoggingParams {

		/** Required */
		roleArnForLogging: string;

		/** Required */
		logLevel: LogLevel;
	}

	/** Parameters used when defining a mitigation action that enable Amazon Web Services IoT Core logging. */
	export interface EnableIoTLoggingParamsFormProperties {

		/** Required */
		roleArnForLogging: FormControl<string | null | undefined>,

		/** Required */
		logLevel: FormControl<LogLevel | null | undefined>,
	}
	export function CreateEnableIoTLoggingParamsFormGroup() {
		return new FormGroup<EnableIoTLoggingParamsFormProperties>({
			roleArnForLogging: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			logLevel: new FormControl<LogLevel | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum LogLevel { DEBUG = 'DEBUG', INFO = 'INFO', ERROR = 'ERROR', WARN = 'WARN', DISABLED = 'DISABLED' }


	/** Parameters to define a mitigation action that publishes findings to Amazon SNS. You can implement your own custom actions in response to the Amazon SNS messages. */
	export interface PublishFindingToSnsParams {

		/** Required */
		topicArn: string;
	}

	/** Parameters to define a mitigation action that publishes findings to Amazon SNS. You can implement your own custom actions in response to the Amazon SNS messages. */
	export interface PublishFindingToSnsParamsFormProperties {

		/** Required */
		topicArn: FormControl<string | null | undefined>,
	}
	export function CreatePublishFindingToSnsParamsFormGroup() {
		return new FormGroup<PublishFindingToSnsParamsFormProperties>({
			topicArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateOTAUpdateResponse {
		otaUpdateId?: string;
		awsIotJobId?: string;
		otaUpdateArn?: string;
		awsIotJobArn?: string;
		otaUpdateStatus?: OTAUpdateStatus;
	}
	export interface CreateOTAUpdateResponseFormProperties {
		otaUpdateId: FormControl<string | null | undefined>,
		awsIotJobId: FormControl<string | null | undefined>,
		otaUpdateArn: FormControl<string | null | undefined>,
		awsIotJobArn: FormControl<string | null | undefined>,
		otaUpdateStatus: FormControl<OTAUpdateStatus | null | undefined>,
	}
	export function CreateCreateOTAUpdateResponseFormGroup() {
		return new FormGroup<CreateOTAUpdateResponseFormProperties>({
			otaUpdateId: new FormControl<string | null | undefined>(undefined),
			awsIotJobId: new FormControl<string | null | undefined>(undefined),
			otaUpdateArn: new FormControl<string | null | undefined>(undefined),
			awsIotJobArn: new FormControl<string | null | undefined>(undefined),
			otaUpdateStatus: new FormControl<OTAUpdateStatus | null | undefined>(undefined),
		});

	}

	export enum OTAUpdateStatus { CREATE_PENDING = 'CREATE_PENDING', CREATE_IN_PROGRESS = 'CREATE_IN_PROGRESS', CREATE_COMPLETE = 'CREATE_COMPLETE', CREATE_FAILED = 'CREATE_FAILED', DELETE_IN_PROGRESS = 'DELETE_IN_PROGRESS', DELETE_FAILED = 'DELETE_FAILED' }

	export enum Protocol { MQTT = 'MQTT', HTTP = 'HTTP' }


	/** The rate of increase for a job rollout. This parameter allows you to define an exponential rate increase for a job rollout. */
	export interface AwsJobExponentialRolloutRate {

		/** Required */
		baseRatePerMinute: number;

		/** Required */
		incrementFactor: number;

		/** Required */
		rateIncreaseCriteria: AwsJobRateIncreaseCriteria;
	}

	/** The rate of increase for a job rollout. This parameter allows you to define an exponential rate increase for a job rollout. */
	export interface AwsJobExponentialRolloutRateFormProperties {

		/** Required */
		baseRatePerMinute: FormControl<number | null | undefined>,

		/** Required */
		incrementFactor: FormControl<number | null | undefined>,
	}
	export function CreateAwsJobExponentialRolloutRateFormGroup() {
		return new FormGroup<AwsJobExponentialRolloutRateFormProperties>({
			baseRatePerMinute: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			incrementFactor: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The criteria to initiate the increase in rate of rollout for a job. */
	export interface AwsJobRateIncreaseCriteria {
		numberOfNotifiedThings?: number | null;
		numberOfSucceededThings?: number | null;
	}

	/** The criteria to initiate the increase in rate of rollout for a job. */
	export interface AwsJobRateIncreaseCriteriaFormProperties {
		numberOfNotifiedThings: FormControl<number | null | undefined>,
		numberOfSucceededThings: FormControl<number | null | undefined>,
	}
	export function CreateAwsJobRateIncreaseCriteriaFormGroup() {
		return new FormGroup<AwsJobRateIncreaseCriteriaFormProperties>({
			numberOfNotifiedThings: new FormControl<number | null | undefined>(undefined),
			numberOfSucceededThings: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** The criteria that determine when and how a job abort takes place. */
	export interface AwsJobAbortCriteria {

		/** Required */
		failureType: JobExecutionFailureType;

		/** Required */
		action: AbortAction;

		/** Required */
		thresholdPercentage: number;

		/** Required */
		minNumberOfExecutedThings: number;
	}

	/** The criteria that determine when and how a job abort takes place. */
	export interface AwsJobAbortCriteriaFormProperties {

		/** Required */
		failureType: FormControl<JobExecutionFailureType | null | undefined>,

		/** Required */
		action: FormControl<AbortAction | null | undefined>,

		/** Required */
		thresholdPercentage: FormControl<number | null | undefined>,

		/** Required */
		minNumberOfExecutedThings: FormControl<number | null | undefined>,
	}
	export function CreateAwsJobAbortCriteriaFormGroup() {
		return new FormGroup<AwsJobAbortCriteriaFormProperties>({
			failureType: new FormControl<JobExecutionFailureType | null | undefined>(undefined, [Validators.required]),
			action: new FormControl<AbortAction | null | undefined>(undefined, [Validators.required]),
			thresholdPercentage: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			minNumberOfExecutedThings: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Describes a file to be associated with an OTA update. */
	export interface OTAUpdateFile {
		fileName?: string;
		fileType?: number | null;
		fileVersion?: string;
		fileLocation?: FileLocation;
		codeSigning?: CodeSigning;
		attributes?: AttributesMap;
	}

	/** Describes a file to be associated with an OTA update. */
	export interface OTAUpdateFileFormProperties {
		fileName: FormControl<string | null | undefined>,
		fileType: FormControl<number | null | undefined>,
		fileVersion: FormControl<string | null | undefined>,
	}
	export function CreateOTAUpdateFileFormGroup() {
		return new FormGroup<OTAUpdateFileFormProperties>({
			fileName: new FormControl<string | null | undefined>(undefined),
			fileType: new FormControl<number | null | undefined>(undefined),
			fileVersion: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The location of the OTA update. */
	export interface FileLocation {
		stream?: Stream;
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
		streamId?: string;
		fileId?: number | null;
	}

	/** Describes a group of files that can be streamed. */
	export interface StreamFormProperties {
		streamId: FormControl<string | null | undefined>,
		fileId: FormControl<number | null | undefined>,
	}
	export function CreateStreamFormGroup() {
		return new FormGroup<StreamFormProperties>({
			streamId: new FormControl<string | null | undefined>(undefined),
			fileId: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** The S3 location. */
	export interface S3Location {
		bucket?: string;
		key?: string;
		version?: string;
	}

	/** The S3 location. */
	export interface S3LocationFormProperties {
		bucket: FormControl<string | null | undefined>,
		key: FormControl<string | null | undefined>,
		version: FormControl<string | null | undefined>,
	}
	export function CreateS3LocationFormGroup() {
		return new FormGroup<S3LocationFormProperties>({
			bucket: new FormControl<string | null | undefined>(undefined),
			key: new FormControl<string | null | undefined>(undefined),
			version: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Describes the method to use when code signing a file. */
	export interface CodeSigning {
		awsSignerJobId?: string;
		startSigningJobParameter?: StartSigningJobParameter;
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
		signingProfileParameter?: SigningProfileParameter;
		signingProfileName?: string;
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
		certificateArn?: string;
		platform?: string;
		certificatePathOnDevice?: string;
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
		bucket?: string;
		prefix?: string;
	}

	/** Describes the location of updated firmware in S3. */
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


	/** Describes a custom method used to code sign a file. */
	export interface CustomCodeSigning {
		signature?: CodeSigningSignature;
		certificateChain?: CodeSigningCertificateChain;
		hashAlgorithm?: string;
		signatureAlgorithm?: string;
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
		inlineDocument?: string;
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
		certificateName?: string;
		inlineDocument?: string;
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

	export interface CreatePackageResponse {
		packageName?: string;
		packageArn?: string;
		description?: string;
	}
	export interface CreatePackageResponseFormProperties {
		packageName: FormControl<string | null | undefined>,
		packageArn: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,
	}
	export function CreateCreatePackageResponseFormGroup() {
		return new FormGroup<CreatePackageResponseFormProperties>({
			packageName: new FormControl<string | null | undefined>(undefined),
			packageArn: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
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

	export interface ServiceQuotaExceededException {
	}
	export interface ServiceQuotaExceededExceptionFormProperties {
	}
	export function CreateServiceQuotaExceededExceptionFormGroup() {
		return new FormGroup<ServiceQuotaExceededExceptionFormProperties>({
		});

	}

	export interface CreatePackageVersionResponse {
		packageVersionArn?: string;
		packageName?: string;
		versionName?: string;
		description?: string;
		attributes?: ResourceAttributes;
		status?: PackageVersionStatus;
		errorReason?: string;
	}
	export interface CreatePackageVersionResponseFormProperties {
		packageVersionArn: FormControl<string | null | undefined>,
		packageName: FormControl<string | null | undefined>,
		versionName: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,
		status: FormControl<PackageVersionStatus | null | undefined>,
		errorReason: FormControl<string | null | undefined>,
	}
	export function CreateCreatePackageVersionResponseFormGroup() {
		return new FormGroup<CreatePackageVersionResponseFormProperties>({
			packageVersionArn: new FormControl<string | null | undefined>(undefined),
			packageName: new FormControl<string | null | undefined>(undefined),
			versionName: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<PackageVersionStatus | null | undefined>(undefined),
			errorReason: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ResourceAttributes {
	}
	export interface ResourceAttributesFormProperties {
	}
	export function CreateResourceAttributesFormGroup() {
		return new FormGroup<ResourceAttributesFormProperties>({
		});

	}

	export enum PackageVersionStatus { DRAFT = 'DRAFT', PUBLISHED = 'PUBLISHED', DEPRECATED = 'DEPRECATED' }


	/** The output from the CreatePolicy operation. */
	export interface CreatePolicyResponse {
		policyName?: string;
		policyArn?: string;
		policyDocument?: string;
		policyVersionId?: string;
	}

	/** The output from the CreatePolicy operation. */
	export interface CreatePolicyResponseFormProperties {
		policyName: FormControl<string | null | undefined>,
		policyArn: FormControl<string | null | undefined>,
		policyDocument: FormControl<string | null | undefined>,
		policyVersionId: FormControl<string | null | undefined>,
	}
	export function CreateCreatePolicyResponseFormGroup() {
		return new FormGroup<CreatePolicyResponseFormProperties>({
			policyName: new FormControl<string | null | undefined>(undefined),
			policyArn: new FormControl<string | null | undefined>(undefined),
			policyDocument: new FormControl<string | null | undefined>(undefined),
			policyVersionId: new FormControl<string | null | undefined>(undefined),
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
		policyArn?: string;
		policyDocument?: string;
		policyVersionId?: string;
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
			policyVersionId: new FormControl<string | null | undefined>(undefined),
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
		certificateId?: string;
		certificatePem?: string;
		keyPair?: KeyPair;
		expiration?: Date;
	}
	export interface CreateProvisioningClaimResponseFormProperties {
		certificateId: FormControl<string | null | undefined>,
		certificatePem: FormControl<string | null | undefined>,
		expiration: FormControl<Date | null | undefined>,
	}
	export function CreateCreateProvisioningClaimResponseFormGroup() {
		return new FormGroup<CreateProvisioningClaimResponseFormProperties>({
			certificateId: new FormControl<string | null | undefined>(undefined),
			certificatePem: new FormControl<string | null | undefined>(undefined),
			expiration: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface CreateProvisioningTemplateResponse {
		templateArn?: string;
		templateName?: string;
		defaultVersionId?: number | null;
	}
	export interface CreateProvisioningTemplateResponseFormProperties {
		templateArn: FormControl<string | null | undefined>,
		templateName: FormControl<string | null | undefined>,
		defaultVersionId: FormControl<number | null | undefined>,
	}
	export function CreateCreateProvisioningTemplateResponseFormGroup() {
		return new FormGroup<CreateProvisioningTemplateResponseFormProperties>({
			templateArn: new FormControl<string | null | undefined>(undefined),
			templateName: new FormControl<string | null | undefined>(undefined),
			defaultVersionId: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface CreateProvisioningTemplateVersionResponse {
		templateArn?: string;
		templateName?: string;
		versionId?: number | null;
		isDefaultVersion?: boolean | null;
	}
	export interface CreateProvisioningTemplateVersionResponseFormProperties {
		templateArn: FormControl<string | null | undefined>,
		templateName: FormControl<string | null | undefined>,
		versionId: FormControl<number | null | undefined>,
		isDefaultVersion: FormControl<boolean | null | undefined>,
	}
	export function CreateCreateProvisioningTemplateVersionResponseFormGroup() {
		return new FormGroup<CreateProvisioningTemplateVersionResponseFormProperties>({
			templateArn: new FormControl<string | null | undefined>(undefined),
			templateName: new FormControl<string | null | undefined>(undefined),
			versionId: new FormControl<number | null | undefined>(undefined),
			isDefaultVersion: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface CreateRoleAliasResponse {
		roleAlias?: string;
		roleAliasArn?: string;
	}
	export interface CreateRoleAliasResponseFormProperties {
		roleAlias: FormControl<string | null | undefined>,
		roleAliasArn: FormControl<string | null | undefined>,
	}
	export function CreateCreateRoleAliasResponseFormGroup() {
		return new FormGroup<CreateRoleAliasResponseFormProperties>({
			roleAlias: new FormControl<string | null | undefined>(undefined),
			roleAliasArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateScheduledAuditResponse {
		scheduledAuditArn?: string;
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
		securityProfileName?: string;
		securityProfileArn?: string;
	}
	export interface CreateSecurityProfileResponseFormProperties {
		securityProfileName: FormControl<string | null | undefined>,
		securityProfileArn: FormControl<string | null | undefined>,
	}
	export function CreateCreateSecurityProfileResponseFormGroup() {
		return new FormGroup<CreateSecurityProfileResponseFormProperties>({
			securityProfileName: new FormControl<string | null | undefined>(undefined),
			securityProfileArn: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A Device Defender security profile behavior. */
	export interface Behavior {

		/** Required */
		name: string;
		metric?: string;
		metricDimension?: MetricDimension;
		criteria?: BehaviorCriteria;
		suppressAlerts?: boolean | null;
	}

	/** A Device Defender security profile behavior. */
	export interface BehaviorFormProperties {

		/** Required */
		name: FormControl<string | null | undefined>,
		metric: FormControl<string | null | undefined>,
		suppressAlerts: FormControl<boolean | null | undefined>,
	}
	export function CreateBehaviorFormGroup() {
		return new FormGroup<BehaviorFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			metric: new FormControl<string | null | undefined>(undefined),
			suppressAlerts: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** The dimension of a metric. */
	export interface MetricDimension {

		/** Required */
		dimensionName: string;
		operator?: DimensionValueOperator;
	}

	/** The dimension of a metric. */
	export interface MetricDimensionFormProperties {

		/** Required */
		dimensionName: FormControl<string | null | undefined>,
		operator: FormControl<DimensionValueOperator | null | undefined>,
	}
	export function CreateMetricDimensionFormGroup() {
		return new FormGroup<MetricDimensionFormProperties>({
			dimensionName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			operator: new FormControl<DimensionValueOperator | null | undefined>(undefined),
		});

	}

	export enum DimensionValueOperator { IN = 'IN', NOT_IN = 'NOT_IN' }


	/** The criteria by which the behavior is determined to be normal. */
	export interface BehaviorCriteria {
		comparisonOperator?: ComparisonOperator;
		value?: MetricValue;
		durationSeconds?: number | null;
		consecutiveDatapointsToAlarm?: number | null;
		consecutiveDatapointsToClear?: number | null;
		statisticalThreshold?: StatisticalThreshold;
		mlDetectionConfig?: MachineLearningDetectionConfig;
	}

	/** The criteria by which the behavior is determined to be normal. */
	export interface BehaviorCriteriaFormProperties {
		comparisonOperator: FormControl<ComparisonOperator | null | undefined>,
		durationSeconds: FormControl<number | null | undefined>,
		consecutiveDatapointsToAlarm: FormControl<number | null | undefined>,
		consecutiveDatapointsToClear: FormControl<number | null | undefined>,
	}
	export function CreateBehaviorCriteriaFormGroup() {
		return new FormGroup<BehaviorCriteriaFormProperties>({
			comparisonOperator: new FormControl<ComparisonOperator | null | undefined>(undefined),
			durationSeconds: new FormControl<number | null | undefined>(undefined),
			consecutiveDatapointsToAlarm: new FormControl<number | null | undefined>(undefined),
			consecutiveDatapointsToClear: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum ComparisonOperator { 'less-than' = 'less-than', 'less-than-equals' = 'less-than-equals', 'greater-than' = 'greater-than', 'greater-than-equals' = 'greater-than-equals', 'in-cidr-set' = 'in-cidr-set', 'not-in-cidr-set' = 'not-in-cidr-set', 'in-port-set' = 'in-port-set', 'not-in-port-set' = 'not-in-port-set', 'in-set' = 'in-set', 'not-in-set' = 'not-in-set' }


	/** The value to be compared with the <code>metric</code>. */
	export interface MetricValue {
		count?: number | null;
		cidrs?: Array<string>;
		ports?: Array<number> | null;
		number?: number | null;
		numbers?: Array<number> | null;
		strings?: Array<string>;
	}

	/** The value to be compared with the <code>metric</code>. */
	export interface MetricValueFormProperties {
		count: FormControl<number | null | undefined>,
		number: FormControl<number | null | undefined>,
	}
	export function CreateMetricValueFormGroup() {
		return new FormGroup<MetricValueFormProperties>({
			count: new FormControl<number | null | undefined>(undefined),
			number: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** A statistical ranking (percentile) that indicates a threshold value by which a behavior is determined to be in compliance or in violation of the behavior. */
	export interface StatisticalThreshold {
		statistic?: string;
	}

	/** A statistical ranking (percentile) that indicates a threshold value by which a behavior is determined to be in compliance or in violation of the behavior. */
	export interface StatisticalThresholdFormProperties {
		statistic: FormControl<string | null | undefined>,
	}
	export function CreateStatisticalThresholdFormGroup() {
		return new FormGroup<StatisticalThresholdFormProperties>({
			statistic: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**  The configuration of an ML Detect Security Profile.  */
	export interface MachineLearningDetectionConfig {

		/** Required */
		confidenceLevel: ConfidenceLevel;
	}

	/**  The configuration of an ML Detect Security Profile.  */
	export interface MachineLearningDetectionConfigFormProperties {

		/** Required */
		confidenceLevel: FormControl<ConfidenceLevel | null | undefined>,
	}
	export function CreateMachineLearningDetectionConfigFormGroup() {
		return new FormGroup<MachineLearningDetectionConfigFormProperties>({
			confidenceLevel: new FormControl<ConfidenceLevel | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum ConfidenceLevel { LOW = 'LOW', MEDIUM = 'MEDIUM', HIGH = 'HIGH' }


	/** A structure containing the alert target ARN and the role ARN. */
	export interface AlertTarget {

		/** Required */
		alertTargetArn: string;

		/** Required */
		roleArn: string;
	}

	/** A structure containing the alert target ARN and the role ARN. */
	export interface AlertTargetFormProperties {

		/** Required */
		alertTargetArn: FormControl<string | null | undefined>,

		/** Required */
		roleArn: FormControl<string | null | undefined>,
	}
	export function CreateAlertTargetFormGroup() {
		return new FormGroup<AlertTargetFormProperties>({
			alertTargetArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			roleArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The metric you want to retain. Dimensions are optional. */
	export interface MetricToRetain {

		/** Required */
		metric: string;
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
		streamId?: string;
		streamArn?: string;
		description?: string;
		streamVersion?: number | null;
	}
	export interface CreateStreamResponseFormProperties {
		streamId: FormControl<string | null | undefined>,
		streamArn: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,
		streamVersion: FormControl<number | null | undefined>,
	}
	export function CreateCreateStreamResponseFormGroup() {
		return new FormGroup<CreateStreamResponseFormProperties>({
			streamId: new FormControl<string | null | undefined>(undefined),
			streamArn: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			streamVersion: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Represents a file to stream. */
	export interface StreamFile {
		fileId?: number | null;
		s3Location?: S3Location;
	}

	/** Represents a file to stream. */
	export interface StreamFileFormProperties {
		fileId: FormControl<number | null | undefined>,
	}
	export function CreateStreamFileFormGroup() {
		return new FormGroup<StreamFileFormProperties>({
			fileId: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** The output of the CreateThing operation. */
	export interface CreateThingResponse {
		thingName?: string;
		thingArn?: string;
		thingId?: string;
	}

	/** The output of the CreateThing operation. */
	export interface CreateThingResponseFormProperties {
		thingName: FormControl<string | null | undefined>,
		thingArn: FormControl<string | null | undefined>,
		thingId: FormControl<string | null | undefined>,
	}
	export function CreateCreateThingResponseFormGroup() {
		return new FormGroup<CreateThingResponseFormProperties>({
			thingName: new FormControl<string | null | undefined>(undefined),
			thingArn: new FormControl<string | null | undefined>(undefined),
			thingId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateThingGroupResponse {
		thingGroupName?: string;
		thingGroupArn?: string;
		thingGroupId?: string;
	}
	export interface CreateThingGroupResponseFormProperties {
		thingGroupName: FormControl<string | null | undefined>,
		thingGroupArn: FormControl<string | null | undefined>,
		thingGroupId: FormControl<string | null | undefined>,
	}
	export function CreateCreateThingGroupResponseFormGroup() {
		return new FormGroup<CreateThingGroupResponseFormProperties>({
			thingGroupName: new FormControl<string | null | undefined>(undefined),
			thingGroupArn: new FormControl<string | null | undefined>(undefined),
			thingGroupId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The output of the CreateThingType operation. */
	export interface CreateThingTypeResponse {
		thingTypeName?: string;
		thingTypeArn?: string;
		thingTypeId?: string;
	}

	/** The output of the CreateThingType operation. */
	export interface CreateThingTypeResponseFormProperties {
		thingTypeName: FormControl<string | null | undefined>,
		thingTypeArn: FormControl<string | null | undefined>,
		thingTypeId: FormControl<string | null | undefined>,
	}
	export function CreateCreateThingTypeResponseFormGroup() {
		return new FormGroup<CreateThingTypeResponseFormProperties>({
			thingTypeName: new FormControl<string | null | undefined>(undefined),
			thingTypeArn: new FormControl<string | null | undefined>(undefined),
			thingTypeId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Describes the actions associated with a rule. */
	export interface Action {
		dynamoDB?: DynamoDBAction;
		dynamoDBv2?: DynamoDBv2Action;
		lambda?: LambdaAction;
		sns?: SnsAction;
		sqs?: SqsAction;
		kinesis?: KinesisAction;
		republish?: RepublishAction;
		s3?: S3Action;
		firehose?: FirehoseAction;
		cloudwatchMetric?: CloudwatchMetricAction;
		cloudwatchAlarm?: CloudwatchAlarmAction;
		cloudwatchLogs?: CloudwatchLogsAction;
		elasticsearch?: ElasticsearchAction;
		salesforce?: SalesforceAction;
		iotAnalytics?: IotAnalyticsAction;
		iotEvents?: IotEventsAction;
		iotSiteWise?: IotSiteWiseAction;
		stepFunctions?: StepFunctionsAction;
		timestream?: TimestreamAction;
		http?: HttpAction;
		kafka?: KafkaAction;
		openSearch?: OpenSearchAction;
		location?: LocationAction;
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
		operation?: string;

		/** Required */
		hashKeyField: string;

		/** Required */
		hashKeyValue: string;
		hashKeyType?: DynamoKeyType;
		rangeKeyField?: string;
		rangeKeyValue?: string;
		rangeKeyType?: DynamoKeyType;
		payloadField?: string;
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
		hashKeyType: FormControl<DynamoKeyType | null | undefined>,
		rangeKeyField: FormControl<string | null | undefined>,
		rangeKeyValue: FormControl<string | null | undefined>,
		rangeKeyType: FormControl<DynamoKeyType | null | undefined>,
		payloadField: FormControl<string | null | undefined>,
	}
	export function CreateDynamoDBActionFormGroup() {
		return new FormGroup<DynamoDBActionFormProperties>({
			tableName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			roleArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			operation: new FormControl<string | null | undefined>(undefined),
			hashKeyField: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			hashKeyValue: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			hashKeyType: new FormControl<DynamoKeyType | null | undefined>(undefined),
			rangeKeyField: new FormControl<string | null | undefined>(undefined),
			rangeKeyValue: new FormControl<string | null | undefined>(undefined),
			rangeKeyType: new FormControl<DynamoKeyType | null | undefined>(undefined),
			payloadField: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum DynamoKeyType { STRING = 'STRING', NUMBER = 'NUMBER' }


	/** <p>Describes an action to write to a DynamoDB table.</p> <p>This DynamoDB action writes each attribute in the message payload into it's own column in the DynamoDB table.</p> */
	export interface DynamoDBv2Action {

		/** Required */
		roleArn: string;

		/** Required */
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
		messageFormat?: MessageFormat;
	}

	/** Describes an action to publish to an Amazon SNS topic. */
	export interface SnsActionFormProperties {

		/** Required */
		targetArn: FormControl<string | null | undefined>,

		/** Required */
		roleArn: FormControl<string | null | undefined>,
		messageFormat: FormControl<MessageFormat | null | undefined>,
	}
	export function CreateSnsActionFormGroup() {
		return new FormGroup<SnsActionFormProperties>({
			targetArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			roleArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			messageFormat: new FormControl<MessageFormat | null | undefined>(undefined),
		});

	}

	export enum MessageFormat { RAW = 'RAW', JSON = 'JSON' }


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
		partitionKey?: string;
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
		qos?: number | null;
		headers?: MqttHeaders;
	}

	/** Describes an action to republish to another topic. */
	export interface RepublishActionFormProperties {

		/** Required */
		roleArn: FormControl<string | null | undefined>,

		/** Required */
		topic: FormControl<string | null | undefined>,
		qos: FormControl<number | null | undefined>,
	}
	export function CreateRepublishActionFormGroup() {
		return new FormGroup<RepublishActionFormProperties>({
			roleArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			topic: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			qos: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Specifies MQTT Version 5.0 headers information. For more information, see <a href="https://docs.aws.amazon.com/iot/latest/developerguide/mqtt.html"> MQTT</a> from Amazon Web Services IoT Core Developer Guide. */
	export interface MqttHeaders {
		payloadFormatIndicator?: string;
		contentType?: string;
		responseTopic?: string;
		correlationData?: string;
		messageExpiry?: string;
		userProperties?: Array<UserProperty>;
	}

	/** Specifies MQTT Version 5.0 headers information. For more information, see <a href="https://docs.aws.amazon.com/iot/latest/developerguide/mqtt.html"> MQTT</a> from Amazon Web Services IoT Core Developer Guide. */
	export interface MqttHeadersFormProperties {
		payloadFormatIndicator: FormControl<string | null | undefined>,
		contentType: FormControl<string | null | undefined>,
		responseTopic: FormControl<string | null | undefined>,
		correlationData: FormControl<string | null | undefined>,
		messageExpiry: FormControl<string | null | undefined>,
	}
	export function CreateMqttHeadersFormGroup() {
		return new FormGroup<MqttHeadersFormProperties>({
			payloadFormatIndicator: new FormControl<string | null | undefined>(undefined),
			contentType: new FormControl<string | null | undefined>(undefined),
			responseTopic: new FormControl<string | null | undefined>(undefined),
			correlationData: new FormControl<string | null | undefined>(undefined),
			messageExpiry: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A key-value pair that you define in the header. Both the key and the value are either literal strings or valid <a href="https://docs.aws.amazon.com/iot/latest/developerguide/iot-substitution-templates.html">substitution templates</a>. */
	export interface UserProperty {

		/** Required */
		key: string;

		/** Required */
		value: string;
	}

	/** A key-value pair that you define in the header. Both the key and the value are either literal strings or valid <a href="https://docs.aws.amazon.com/iot/latest/developerguide/iot-substitution-templates.html">substitution templates</a>. */
	export interface UserPropertyFormProperties {

		/** Required */
		key: FormControl<string | null | undefined>,

		/** Required */
		value: FormControl<string | null | undefined>,
	}
	export function CreateUserPropertyFormGroup() {
		return new FormGroup<UserPropertyFormProperties>({
			key: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			value: new FormControl<string | null | undefined>(undefined, [Validators.required]),
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
		cannedAcl?: CannedAccessControlList;
	}

	/** Describes an action to write data to an Amazon S3 bucket. */
	export interface S3ActionFormProperties {

		/** Required */
		roleArn: FormControl<string | null | undefined>,

		/** Required */
		bucketName: FormControl<string | null | undefined>,

		/** Required */
		key: FormControl<string | null | undefined>,
		cannedAcl: FormControl<CannedAccessControlList | null | undefined>,
	}
	export function CreateS3ActionFormGroup() {
		return new FormGroup<S3ActionFormProperties>({
			roleArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			bucketName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			key: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			cannedAcl: new FormControl<CannedAccessControlList | null | undefined>(undefined),
		});

	}

	export enum CannedAccessControlList { private = 'private', 'public-read' = 'public-read', 'public-read-write' = 'public-read-write', 'aws-exec-read' = 'aws-exec-read', 'authenticated-read' = 'authenticated-read', 'bucket-owner-read' = 'bucket-owner-read', 'bucket-owner-full-control' = 'bucket-owner-full-control', 'log-delivery-write' = 'log-delivery-write' }


	/** Describes an action that writes data to an Amazon Kinesis Firehose stream. */
	export interface FirehoseAction {

		/** Required */
		roleArn: string;

		/** Required */
		deliveryStreamName: string;
		separator?: string;
		batchMode?: boolean | null;
	}

	/** Describes an action that writes data to an Amazon Kinesis Firehose stream. */
	export interface FirehoseActionFormProperties {

		/** Required */
		roleArn: FormControl<string | null | undefined>,

		/** Required */
		deliveryStreamName: FormControl<string | null | undefined>,
		separator: FormControl<string | null | undefined>,
		batchMode: FormControl<boolean | null | undefined>,
	}
	export function CreateFirehoseActionFormGroup() {
		return new FormGroup<FirehoseActionFormProperties>({
			roleArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			deliveryStreamName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			separator: new FormControl<string | null | undefined>(undefined),
			batchMode: new FormControl<boolean | null | undefined>(undefined),
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
		metricTimestamp?: string;
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
		batchMode?: boolean | null;
	}

	/** Describes an action that sends data to CloudWatch Logs. */
	export interface CloudwatchLogsActionFormProperties {

		/** Required */
		roleArn: FormControl<string | null | undefined>,

		/** Required */
		logGroupName: FormControl<string | null | undefined>,
		batchMode: FormControl<boolean | null | undefined>,
	}
	export function CreateCloudwatchLogsActionFormGroup() {
		return new FormGroup<CloudwatchLogsActionFormProperties>({
			roleArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			logGroupName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			batchMode: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** <p>Describes an action that writes data to an Amazon OpenSearch Service domain.</p> <note> <p>The <code>Elasticsearch</code> action can only be used by existing rule actions. To create a new rule action or to update an existing rule action, use the <code>OpenSearch</code> rule action instead. For more information, see <a href="https://docs.aws.amazon.com/iot/latest/apireference/API_OpenSearchAction.html">OpenSearchAction</a>.</p> </note> */
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

	/** <p>Describes an action that writes data to an Amazon OpenSearch Service domain.</p> <note> <p>The <code>Elasticsearch</code> action can only be used by existing rule actions. To create a new rule action or to update an existing rule action, use the <code>OpenSearch</code> rule action instead. For more information, see <a href="https://docs.aws.amazon.com/iot/latest/apireference/API_OpenSearchAction.html">OpenSearchAction</a>.</p> </note> */
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
			endpoint: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			index: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Describes an action to write a message to a Salesforce IoT Cloud Input Stream. */
	export interface SalesforceAction {

		/** Required */
		token: string;

		/** Required */
		url: string;
	}

	/** Describes an action to write a message to a Salesforce IoT Cloud Input Stream. */
	export interface SalesforceActionFormProperties {

		/** Required */
		token: FormControl<string | null | undefined>,

		/** Required */
		url: FormControl<string | null | undefined>,
	}
	export function CreateSalesforceActionFormGroup() {
		return new FormGroup<SalesforceActionFormProperties>({
			token: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			url: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Sends message data to an IoT Analytics channel. */
	export interface IotAnalyticsAction {
		channelArn?: string;
		channelName?: string;
		batchMode?: boolean | null;
		roleArn?: string;
	}

	/** Sends message data to an IoT Analytics channel. */
	export interface IotAnalyticsActionFormProperties {
		channelArn: FormControl<string | null | undefined>,
		channelName: FormControl<string | null | undefined>,
		batchMode: FormControl<boolean | null | undefined>,
		roleArn: FormControl<string | null | undefined>,
	}
	export function CreateIotAnalyticsActionFormGroup() {
		return new FormGroup<IotAnalyticsActionFormProperties>({
			channelArn: new FormControl<string | null | undefined>(undefined),
			channelName: new FormControl<string | null | undefined>(undefined),
			batchMode: new FormControl<boolean | null | undefined>(undefined),
			roleArn: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Sends an input to an IoT Events detector. */
	export interface IotEventsAction {

		/** Required */
		inputName: string;
		messageId?: string;
		batchMode?: boolean | null;

		/** Required */
		roleArn: string;
	}

	/** Sends an input to an IoT Events detector. */
	export interface IotEventsActionFormProperties {

		/** Required */
		inputName: FormControl<string | null | undefined>,
		messageId: FormControl<string | null | undefined>,
		batchMode: FormControl<boolean | null | undefined>,

		/** Required */
		roleArn: FormControl<string | null | undefined>,
	}
	export function CreateIotEventsActionFormGroup() {
		return new FormGroup<IotEventsActionFormProperties>({
			inputName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			messageId: new FormControl<string | null | undefined>(undefined),
			batchMode: new FormControl<boolean | null | undefined>(undefined),
			roleArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Describes an action to send data from an MQTT message that triggered the rule to IoT SiteWise asset properties. */
	export interface IotSiteWiseAction {

		/** Required */
		putAssetPropertyValueEntries: Array<PutAssetPropertyValueEntry>;

		/** Required */
		roleArn: string;
	}

	/** Describes an action to send data from an MQTT message that triggered the rule to IoT SiteWise asset properties. */
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
		entryId?: string;
		assetId?: string;
		propertyId?: string;
		propertyAlias?: string;

		/** Required */
		propertyValues: Array<AssetPropertyValue>;
	}

	/** An asset property value entry containing the following information. */
	export interface PutAssetPropertyValueEntryFormProperties {
		entryId: FormControl<string | null | undefined>,
		assetId: FormControl<string | null | undefined>,
		propertyId: FormControl<string | null | undefined>,
		propertyAlias: FormControl<string | null | undefined>,
	}
	export function CreatePutAssetPropertyValueEntryFormGroup() {
		return new FormGroup<PutAssetPropertyValueEntryFormProperties>({
			entryId: new FormControl<string | null | undefined>(undefined),
			assetId: new FormControl<string | null | undefined>(undefined),
			propertyId: new FormControl<string | null | undefined>(undefined),
			propertyAlias: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An asset property value entry containing the following information. */
	export interface AssetPropertyValue {

		/** Required */
		value: AssetPropertyVariant;

		/** Required */
		timestamp: AssetPropertyTimestamp;
		quality?: string;
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
		stringValue?: string;
		integerValue?: string;
		doubleValue?: string;
		booleanValue?: string;
	}

	/** Contains an asset property value (of a single type). */
	export interface AssetPropertyVariantFormProperties {
		stringValue: FormControl<string | null | undefined>,
		integerValue: FormControl<string | null | undefined>,
		doubleValue: FormControl<string | null | undefined>,
		booleanValue: FormControl<string | null | undefined>,
	}
	export function CreateAssetPropertyVariantFormGroup() {
		return new FormGroup<AssetPropertyVariantFormProperties>({
			stringValue: new FormControl<string | null | undefined>(undefined),
			integerValue: new FormControl<string | null | undefined>(undefined),
			doubleValue: new FormControl<string | null | undefined>(undefined),
			booleanValue: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An asset property timestamp entry containing the following information. */
	export interface AssetPropertyTimestamp {

		/** Required */
		timeInSeconds: string;
		offsetInNanos?: string;
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
		executionNamePrefix?: string;

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


	/** The Timestream rule action writes attributes (measures) from an MQTT message into an Amazon Timestream table. For more information, see the <a href="https://docs.aws.amazon.com/iot/latest/developerguide/timestream-rule-action.html">Timestream</a> topic rule action documentation. */
	export interface TimestreamAction {

		/** Required */
		roleArn: string;

		/** Required */
		databaseName: string;

		/** Required */
		tableName: string;

		/** Required */
		dimensions: Array<TimestreamDimension>;
		timestamp?: TimestreamTimestamp;
	}

	/** The Timestream rule action writes attributes (measures) from an MQTT message into an Amazon Timestream table. For more information, see the <a href="https://docs.aws.amazon.com/iot/latest/developerguide/timestream-rule-action.html">Timestream</a> topic rule action documentation. */
	export interface TimestreamActionFormProperties {

		/** Required */
		roleArn: FormControl<string | null | undefined>,

		/** Required */
		databaseName: FormControl<string | null | undefined>,

		/** Required */
		tableName: FormControl<string | null | undefined>,
	}
	export function CreateTimestreamActionFormGroup() {
		return new FormGroup<TimestreamActionFormProperties>({
			roleArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			databaseName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			tableName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Metadata attributes of the time series that are written in each measure record. */
	export interface TimestreamDimension {

		/** Required */
		name: string;

		/** Required */
		value: string;
	}

	/** Metadata attributes of the time series that are written in each measure record. */
	export interface TimestreamDimensionFormProperties {

		/** Required */
		name: FormControl<string | null | undefined>,

		/** Required */
		value: FormControl<string | null | undefined>,
	}
	export function CreateTimestreamDimensionFormGroup() {
		return new FormGroup<TimestreamDimensionFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			value: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Describes how to interpret an application-defined timestamp value from an MQTT message payload and the precision of that value. */
	export interface TimestreamTimestamp {

		/** Required */
		value: string;

		/** Required */
		unit: string;
	}

	/** Describes how to interpret an application-defined timestamp value from an MQTT message payload and the precision of that value. */
	export interface TimestreamTimestampFormProperties {

		/** Required */
		value: FormControl<string | null | undefined>,

		/** Required */
		unit: FormControl<string | null | undefined>,
	}
	export function CreateTimestreamTimestampFormGroup() {
		return new FormGroup<TimestreamTimestampFormProperties>({
			value: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			unit: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Send data to an HTTPS endpoint. */
	export interface HttpAction {

		/** Required */
		url: string;
		confirmationUrl?: string;
		headers?: Array<HttpActionHeader>;
		auth?: HttpAuthorization;
	}

	/** Send data to an HTTPS endpoint. */
	export interface HttpActionFormProperties {

		/** Required */
		url: FormControl<string | null | undefined>,
		confirmationUrl: FormControl<string | null | undefined>,
	}
	export function CreateHttpActionFormGroup() {
		return new FormGroup<HttpActionFormProperties>({
			url: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			confirmationUrl: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The HTTP action header. */
	export interface HttpActionHeader {

		/** Required */
		key: string;

		/** Required */
		value: string;
	}

	/** The HTTP action header. */
	export interface HttpActionHeaderFormProperties {

		/** Required */
		key: FormControl<string | null | undefined>,

		/** Required */
		value: FormControl<string | null | undefined>,
	}
	export function CreateHttpActionHeaderFormGroup() {
		return new FormGroup<HttpActionHeaderFormProperties>({
			key: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			value: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The authorization method used to send messages. */
	export interface HttpAuthorization {
		sigv4?: SigV4Authorization;
	}

	/** The authorization method used to send messages. */
	export interface HttpAuthorizationFormProperties {
	}
	export function CreateHttpAuthorizationFormGroup() {
		return new FormGroup<HttpAuthorizationFormProperties>({
		});

	}


	/** For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/signature-version-4.html">Signature Version 4 signing process</a>. */
	export interface SigV4Authorization {

		/** Required */
		signingRegion: string;

		/** Required */
		serviceName: string;

		/** Required */
		roleArn: string;
	}

	/** For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/signature-version-4.html">Signature Version 4 signing process</a>. */
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


	/** Send messages to an Amazon Managed Streaming for Apache Kafka (Amazon MSK) or self-managed Apache Kafka cluster. */
	export interface KafkaAction {

		/** Required */
		destinationArn: string;

		/** Required */
		topic: string;
		key?: string;
		partition?: string;

		/** Required */
		clientProperties: ClientProperties;
	}

	/** Send messages to an Amazon Managed Streaming for Apache Kafka (Amazon MSK) or self-managed Apache Kafka cluster. */
	export interface KafkaActionFormProperties {

		/** Required */
		destinationArn: FormControl<string | null | undefined>,

		/** Required */
		topic: FormControl<string | null | undefined>,
		key: FormControl<string | null | undefined>,
		partition: FormControl<string | null | undefined>,
	}
	export function CreateKafkaActionFormGroup() {
		return new FormGroup<KafkaActionFormProperties>({
			destinationArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			topic: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			key: new FormControl<string | null | undefined>(undefined),
			partition: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ClientProperties {
	}
	export interface ClientPropertiesFormProperties {
	}
	export function CreateClientPropertiesFormGroup() {
		return new FormGroup<ClientPropertiesFormProperties>({
		});

	}


	/** Describes an action that writes data to an Amazon OpenSearch Service domain. */
	export interface OpenSearchAction {

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

	/** Describes an action that writes data to an Amazon OpenSearch Service domain. */
	export interface OpenSearchActionFormProperties {

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
	export function CreateOpenSearchActionFormGroup() {
		return new FormGroup<OpenSearchActionFormProperties>({
			roleArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			endpoint: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			index: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The Amazon Location rule action sends device location updates from an MQTT message to an Amazon Location tracker resource. */
	export interface LocationAction {

		/** Required */
		roleArn: string;

		/** Required */
		trackerName: string;

		/** Required */
		deviceId: string;
		timestamp?: LocationTimestamp;

		/** Required */
		latitude: string;

		/** Required */
		longitude: string;
	}

	/** The Amazon Location rule action sends device location updates from an MQTT message to an Amazon Location tracker resource. */
	export interface LocationActionFormProperties {

		/** Required */
		roleArn: FormControl<string | null | undefined>,

		/** Required */
		trackerName: FormControl<string | null | undefined>,

		/** Required */
		deviceId: FormControl<string | null | undefined>,

		/** Required */
		latitude: FormControl<string | null | undefined>,

		/** Required */
		longitude: FormControl<string | null | undefined>,
	}
	export function CreateLocationActionFormGroup() {
		return new FormGroup<LocationActionFormProperties>({
			roleArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			trackerName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			deviceId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			latitude: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			longitude: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Describes how to interpret an application-defined timestamp value from an MQTT message payload and the precision of that value. */
	export interface LocationTimestamp {

		/** Required */
		value: string;
		unit?: string;
	}

	/** Describes how to interpret an application-defined timestamp value from an MQTT message payload and the precision of that value. */
	export interface LocationTimestampFormProperties {

		/** Required */
		value: FormControl<string | null | undefined>,
		unit: FormControl<string | null | undefined>,
	}
	export function CreateLocationTimestampFormGroup() {
		return new FormGroup<LocationTimestampFormProperties>({
			value: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			unit: new FormControl<string | null | undefined>(undefined),
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
		arn?: string;
		status?: TopicRuleDestinationStatus;
		createdAt?: Date;
		lastUpdatedAt?: Date;
		statusReason?: string;
		httpUrlProperties?: HttpUrlDestinationProperties;
		vpcProperties?: VpcDestinationProperties;
	}

	/** A topic rule destination. */
	export interface TopicRuleDestinationFormProperties {
		arn: FormControl<string | null | undefined>,
		status: FormControl<TopicRuleDestinationStatus | null | undefined>,
		createdAt: FormControl<Date | null | undefined>,
		lastUpdatedAt: FormControl<Date | null | undefined>,
		statusReason: FormControl<string | null | undefined>,
	}
	export function CreateTopicRuleDestinationFormGroup() {
		return new FormGroup<TopicRuleDestinationFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<TopicRuleDestinationStatus | null | undefined>(undefined),
			createdAt: new FormControl<Date | null | undefined>(undefined),
			lastUpdatedAt: new FormControl<Date | null | undefined>(undefined),
			statusReason: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum TopicRuleDestinationStatus { ENABLED = 'ENABLED', IN_PROGRESS = 'IN_PROGRESS', DISABLED = 'DISABLED', ERROR = 'ERROR', DELETING = 'DELETING' }


	/** HTTP URL destination properties. */
	export interface HttpUrlDestinationProperties {
		confirmationUrl?: string;
	}

	/** HTTP URL destination properties. */
	export interface HttpUrlDestinationPropertiesFormProperties {
		confirmationUrl: FormControl<string | null | undefined>,
	}
	export function CreateHttpUrlDestinationPropertiesFormGroup() {
		return new FormGroup<HttpUrlDestinationPropertiesFormProperties>({
			confirmationUrl: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The properties of a virtual private cloud (VPC) destination. */
	export interface VpcDestinationProperties {
		subnetIds?: Array<string>;
		securityGroups?: Array<string>;
		vpcId?: string;
		roleArn?: string;
	}

	/** The properties of a virtual private cloud (VPC) destination. */
	export interface VpcDestinationPropertiesFormProperties {
		vpcId: FormControl<string | null | undefined>,
		roleArn: FormControl<string | null | undefined>,
	}
	export function CreateVpcDestinationPropertiesFormGroup() {
		return new FormGroup<VpcDestinationPropertiesFormProperties>({
			vpcId: new FormControl<string | null | undefined>(undefined),
			roleArn: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** HTTP URL destination configuration used by the topic rule's HTTP action. */
	export interface HttpUrlDestinationConfiguration {

		/** Required */
		confirmationUrl: string;
	}

	/** HTTP URL destination configuration used by the topic rule's HTTP action. */
	export interface HttpUrlDestinationConfigurationFormProperties {

		/** Required */
		confirmationUrl: FormControl<string | null | undefined>,
	}
	export function CreateHttpUrlDestinationConfigurationFormGroup() {
		return new FormGroup<HttpUrlDestinationConfigurationFormProperties>({
			confirmationUrl: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The configuration information for a virtual private cloud (VPC) destination. */
	export interface VpcDestinationConfiguration {

		/** Required */
		subnetIds: Array<string>;
		securityGroups?: Array<string>;

		/** Required */
		vpcId: string;

		/** Required */
		roleArn: string;
	}

	/** The configuration information for a virtual private cloud (VPC) destination. */
	export interface VpcDestinationConfigurationFormProperties {

		/** Required */
		vpcId: FormControl<string | null | undefined>,

		/** Required */
		roleArn: FormControl<string | null | undefined>,
	}
	export function CreateVpcDestinationConfigurationFormGroup() {
		return new FormGroup<VpcDestinationConfigurationFormProperties>({
			vpcId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			roleArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
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

	export interface DeleteAuditSuppressionResponse {
	}
	export interface DeleteAuditSuppressionResponseFormProperties {
	}
	export function CreateDeleteAuditSuppressionResponseFormGroup() {
		return new FormGroup<DeleteAuditSuppressionResponseFormProperties>({
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

	export interface DeleteCustomMetricResponse {
	}
	export interface DeleteCustomMetricResponseFormProperties {
	}
	export function CreateDeleteCustomMetricResponseFormGroup() {
		return new FormGroup<DeleteCustomMetricResponseFormProperties>({
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

	export interface DeletePackageResponse {
	}
	export interface DeletePackageResponseFormProperties {
	}
	export function CreateDeletePackageResponseFormGroup() {
		return new FormGroup<DeletePackageResponseFormProperties>({
		});

	}

	export interface DeletePackageVersionResponse {
	}
	export interface DeletePackageVersionResponseFormProperties {
	}
	export function CreateDeletePackageVersionResponseFormGroup() {
		return new FormGroup<DeletePackageVersionResponseFormProperties>({
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
		roleArn?: string;
		auditNotificationTargetConfigurations?: AuditNotificationTargetConfigurations;
		auditCheckConfigurations?: AuditCheckConfigurations;
	}
	export interface DescribeAccountAuditConfigurationResponseFormProperties {
		roleArn: FormControl<string | null | undefined>,
	}
	export function CreateDescribeAccountAuditConfigurationResponseFormGroup() {
		return new FormGroup<DescribeAccountAuditConfigurationResponseFormProperties>({
			roleArn: new FormControl<string | null | undefined>(undefined),
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
		findingId?: string;
		taskId?: string;
		checkName?: string;
		taskStartTime?: Date;
		findingTime?: Date;
		severity?: AuditFindingSeverity;
		nonCompliantResource?: NonCompliantResource;
		relatedResources?: Array<RelatedResource>;
		reasonForNonCompliance?: string;
		reasonForNonComplianceCode?: string;
		isSuppressed?: boolean | null;
	}

	/** The findings (results) of the audit. */
	export interface AuditFindingFormProperties {
		findingId: FormControl<string | null | undefined>,
		taskId: FormControl<string | null | undefined>,
		checkName: FormControl<string | null | undefined>,
		taskStartTime: FormControl<Date | null | undefined>,
		findingTime: FormControl<Date | null | undefined>,
		severity: FormControl<AuditFindingSeverity | null | undefined>,
		reasonForNonCompliance: FormControl<string | null | undefined>,
		reasonForNonComplianceCode: FormControl<string | null | undefined>,
		isSuppressed: FormControl<boolean | null | undefined>,
	}
	export function CreateAuditFindingFormGroup() {
		return new FormGroup<AuditFindingFormProperties>({
			findingId: new FormControl<string | null | undefined>(undefined),
			taskId: new FormControl<string | null | undefined>(undefined),
			checkName: new FormControl<string | null | undefined>(undefined),
			taskStartTime: new FormControl<Date | null | undefined>(undefined),
			findingTime: new FormControl<Date | null | undefined>(undefined),
			severity: new FormControl<AuditFindingSeverity | null | undefined>(undefined),
			reasonForNonCompliance: new FormControl<string | null | undefined>(undefined),
			reasonForNonComplianceCode: new FormControl<string | null | undefined>(undefined),
			isSuppressed: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export enum AuditFindingSeverity { CRITICAL = 'CRITICAL', HIGH = 'HIGH', MEDIUM = 'MEDIUM', LOW = 'LOW' }


	/** Information about the resource that was noncompliant with the audit check. */
	export interface NonCompliantResource {
		resourceType?: ResourceType;
		resourceIdentifier?: ResourceIdentifier;
		additionalInfo?: StringMap;
	}

	/** Information about the resource that was noncompliant with the audit check. */
	export interface NonCompliantResourceFormProperties {
		resourceType: FormControl<ResourceType | null | undefined>,
	}
	export function CreateNonCompliantResourceFormGroup() {
		return new FormGroup<NonCompliantResourceFormProperties>({
			resourceType: new FormControl<ResourceType | null | undefined>(undefined),
		});

	}

	export enum ResourceType { DEVICE_CERTIFICATE = 'DEVICE_CERTIFICATE', CA_CERTIFICATE = 'CA_CERTIFICATE', IOT_POLICY = 'IOT_POLICY', COGNITO_IDENTITY_POOL = 'COGNITO_IDENTITY_POOL', CLIENT_ID = 'CLIENT_ID', ACCOUNT_SETTINGS = 'ACCOUNT_SETTINGS', ROLE_ALIAS = 'ROLE_ALIAS', IAM_ROLE = 'IAM_ROLE', ISSUER_CERTIFICATE = 'ISSUER_CERTIFICATE' }


	/** Information that identifies the noncompliant resource. */
	export interface ResourceIdentifier {
		deviceCertificateId?: string;
		caCertificateId?: string;
		cognitoIdentityPoolId?: string;
		clientId?: string;
		policyVersionIdentifier?: PolicyVersionIdentifier;
		account?: string;
		iamRoleArn?: string;
		roleAliasArn?: string;
		issuerCertificateIdentifier?: IssuerCertificateIdentifier;
		deviceCertificateArn?: string;
	}

	/** Information that identifies the noncompliant resource. */
	export interface ResourceIdentifierFormProperties {
		deviceCertificateId: FormControl<string | null | undefined>,
		caCertificateId: FormControl<string | null | undefined>,
		cognitoIdentityPoolId: FormControl<string | null | undefined>,
		clientId: FormControl<string | null | undefined>,
		account: FormControl<string | null | undefined>,
		iamRoleArn: FormControl<string | null | undefined>,
		roleAliasArn: FormControl<string | null | undefined>,
		deviceCertificateArn: FormControl<string | null | undefined>,
	}
	export function CreateResourceIdentifierFormGroup() {
		return new FormGroup<ResourceIdentifierFormProperties>({
			deviceCertificateId: new FormControl<string | null | undefined>(undefined),
			caCertificateId: new FormControl<string | null | undefined>(undefined),
			cognitoIdentityPoolId: new FormControl<string | null | undefined>(undefined),
			clientId: new FormControl<string | null | undefined>(undefined),
			account: new FormControl<string | null | undefined>(undefined),
			iamRoleArn: new FormControl<string | null | undefined>(undefined),
			roleAliasArn: new FormControl<string | null | undefined>(undefined),
			deviceCertificateArn: new FormControl<string | null | undefined>(undefined),
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
		resourceType?: ResourceType;
		resourceIdentifier?: ResourceIdentifier;
		additionalInfo?: StringMap;
	}

	/** Information about a related resource. */
	export interface RelatedResourceFormProperties {
		resourceType: FormControl<ResourceType | null | undefined>,
	}
	export function CreateRelatedResourceFormGroup() {
		return new FormGroup<RelatedResourceFormProperties>({
			resourceType: new FormControl<ResourceType | null | undefined>(undefined),
		});

	}

	export interface DescribeAuditMitigationActionsTaskResponse {
		taskStatus?: AuditMitigationActionsTaskStatus;
		startTime?: Date;
		endTime?: Date;
		taskStatistics?: AuditMitigationActionsTaskStatistics;
		target?: AuditMitigationActionsTaskTarget;
		auditCheckToActionsMapping?: AuditCheckToActionsMapping;
		actionsDefinition?: Array<MitigationAction>;
	}
	export interface DescribeAuditMitigationActionsTaskResponseFormProperties {
		taskStatus: FormControl<AuditMitigationActionsTaskStatus | null | undefined>,
		startTime: FormControl<Date | null | undefined>,
		endTime: FormControl<Date | null | undefined>,
	}
	export function CreateDescribeAuditMitigationActionsTaskResponseFormGroup() {
		return new FormGroup<DescribeAuditMitigationActionsTaskResponseFormProperties>({
			taskStatus: new FormControl<AuditMitigationActionsTaskStatus | null | undefined>(undefined),
			startTime: new FormControl<Date | null | undefined>(undefined),
			endTime: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export enum AuditMitigationActionsTaskStatus { IN_PROGRESS = 'IN_PROGRESS', COMPLETED = 'COMPLETED', FAILED = 'FAILED', CANCELED = 'CANCELED' }

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
		auditTaskId?: string;
		findingIds?: Array<string>;
		auditCheckToReasonCodeFilter?: AuditCheckToReasonCodeFilter;
	}

	/** Used in MitigationActionParams, this information identifies the target findings to which the mitigation actions are applied. Only one entry appears. */
	export interface AuditMitigationActionsTaskTargetFormProperties {
		auditTaskId: FormControl<string | null | undefined>,
	}
	export function CreateAuditMitigationActionsTaskTargetFormGroup() {
		return new FormGroup<AuditMitigationActionsTaskTargetFormProperties>({
			auditTaskId: new FormControl<string | null | undefined>(undefined),
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
		name?: string;
		id?: string;
		roleArn?: string;
		actionParams?: MitigationActionParams;
	}

	/** Describes which changes should be applied as part of a mitigation action. */
	export interface MitigationActionFormProperties {
		name: FormControl<string | null | undefined>,
		id: FormControl<string | null | undefined>,
		roleArn: FormControl<string | null | undefined>,
	}
	export function CreateMitigationActionFormGroup() {
		return new FormGroup<MitigationActionFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			roleArn: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The set of parameters for this mitigation action. You can specify only one type of parameter (in other words, you can apply only one action for each defined mitigation action). */
	export interface MitigationActionParams {
		updateDeviceCertificateParams?: UpdateDeviceCertificateParams;
		updateCACertificateParams?: UpdateCACertificateParams;
		addThingsToThingGroupParams?: AddThingsToThingGroupParams;
		replaceDefaultPolicyVersionParams?: ReplaceDefaultPolicyVersionParams;
		enableIoTLoggingParams?: EnableIoTLoggingParams;
		publishFindingToSnsParams?: PublishFindingToSnsParams;
	}

	/** The set of parameters for this mitigation action. You can specify only one type of parameter (in other words, you can apply only one action for each defined mitigation action). */
	export interface MitigationActionParamsFormProperties {
	}
	export function CreateMitigationActionParamsFormGroup() {
		return new FormGroup<MitigationActionParamsFormProperties>({
		});

	}

	export interface DescribeAuditSuppressionResponse {

		/** An audit check name. Checks must be enabled for your account. (Use <code>DescribeAccountAuditConfiguration</code> to see the list of all checks, including those that are enabled or use <code>UpdateAccountAuditConfiguration</code> to select which checks are enabled.) */
		checkName?: string | null;

		/** Information that identifies the noncompliant resource. */
		resourceIdentifier?: ResourceIdentifier;
		expirationDate?: Date;
		suppressIndefinitely?: boolean | null;
		description?: string;
	}
	export interface DescribeAuditSuppressionResponseFormProperties {

		/** An audit check name. Checks must be enabled for your account. (Use <code>DescribeAccountAuditConfiguration</code> to see the list of all checks, including those that are enabled or use <code>UpdateAccountAuditConfiguration</code> to select which checks are enabled.) */
		checkName: FormControl<string | null | undefined>,
		expirationDate: FormControl<Date | null | undefined>,
		suppressIndefinitely: FormControl<boolean | null | undefined>,
		description: FormControl<string | null | undefined>,
	}
	export function CreateDescribeAuditSuppressionResponseFormGroup() {
		return new FormGroup<DescribeAuditSuppressionResponseFormProperties>({
			checkName: new FormControl<string | null | undefined>(undefined),
			expirationDate: new FormControl<Date | null | undefined>(undefined),
			suppressIndefinitely: new FormControl<boolean | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeAuditTaskResponse {
		taskStatus?: AuditMitigationActionsTaskStatus;
		taskType?: AuditTaskType;
		taskStartTime?: Date;
		taskStatistics?: TaskStatistics;
		scheduledAuditName?: string;
		auditDetails?: AuditDetails;
	}
	export interface DescribeAuditTaskResponseFormProperties {
		taskStatus: FormControl<AuditMitigationActionsTaskStatus | null | undefined>,
		taskType: FormControl<AuditTaskType | null | undefined>,
		taskStartTime: FormControl<Date | null | undefined>,
		scheduledAuditName: FormControl<string | null | undefined>,
	}
	export function CreateDescribeAuditTaskResponseFormGroup() {
		return new FormGroup<DescribeAuditTaskResponseFormProperties>({
			taskStatus: new FormControl<AuditMitigationActionsTaskStatus | null | undefined>(undefined),
			taskType: new FormControl<AuditTaskType | null | undefined>(undefined),
			taskStartTime: new FormControl<Date | null | undefined>(undefined),
			scheduledAuditName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum AuditTaskType { ON_DEMAND_AUDIT_TASK = 'ON_DEMAND_AUDIT_TASK', SCHEDULED_AUDIT_TASK = 'SCHEDULED_AUDIT_TASK' }


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
		authorizerName?: string;
		authorizerArn?: string;
		authorizerFunctionArn?: string;
		tokenKeyName?: string;
		tokenSigningPublicKeys?: PublicKeyMap;
		status?: AuthorizerStatus;
		creationDate?: Date;
		lastModifiedDate?: Date;
		signingDisabled?: boolean | null;
		enableCachingForHttp?: boolean | null;
	}

	/** The authorizer description. */
	export interface AuthorizerDescriptionFormProperties {
		authorizerName: FormControl<string | null | undefined>,
		authorizerArn: FormControl<string | null | undefined>,
		authorizerFunctionArn: FormControl<string | null | undefined>,
		tokenKeyName: FormControl<string | null | undefined>,
		status: FormControl<AuthorizerStatus | null | undefined>,
		creationDate: FormControl<Date | null | undefined>,
		lastModifiedDate: FormControl<Date | null | undefined>,
		signingDisabled: FormControl<boolean | null | undefined>,
		enableCachingForHttp: FormControl<boolean | null | undefined>,
	}
	export function CreateAuthorizerDescriptionFormGroup() {
		return new FormGroup<AuthorizerDescriptionFormProperties>({
			authorizerName: new FormControl<string | null | undefined>(undefined),
			authorizerArn: new FormControl<string | null | undefined>(undefined),
			authorizerFunctionArn: new FormControl<string | null | undefined>(undefined),
			tokenKeyName: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<AuthorizerStatus | null | undefined>(undefined),
			creationDate: new FormControl<Date | null | undefined>(undefined),
			lastModifiedDate: new FormControl<Date | null | undefined>(undefined),
			signingDisabled: new FormControl<boolean | null | undefined>(undefined),
			enableCachingForHttp: new FormControl<boolean | null | undefined>(undefined),
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

	export enum AuthorizerStatus { ACTIVE = 'ACTIVE', INACTIVE = 'INACTIVE' }

	export interface DescribeBillingGroupResponse {
		billingGroupName?: string;
		billingGroupId?: string;
		billingGroupArn?: string;
		version?: number | null;
		billingGroupProperties?: BillingGroupProperties;
		billingGroupMetadata?: BillingGroupMetadata;
	}
	export interface DescribeBillingGroupResponseFormProperties {
		billingGroupName: FormControl<string | null | undefined>,
		billingGroupId: FormControl<string | null | undefined>,
		billingGroupArn: FormControl<string | null | undefined>,
		version: FormControl<number | null | undefined>,
	}
	export function CreateDescribeBillingGroupResponseFormGroup() {
		return new FormGroup<DescribeBillingGroupResponseFormProperties>({
			billingGroupName: new FormControl<string | null | undefined>(undefined),
			billingGroupId: new FormControl<string | null | undefined>(undefined),
			billingGroupArn: new FormControl<string | null | undefined>(undefined),
			version: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** The properties of a billing group. */
	export interface BillingGroupProperties {
		billingGroupDescription?: string;
	}

	/** The properties of a billing group. */
	export interface BillingGroupPropertiesFormProperties {
		billingGroupDescription: FormControl<string | null | undefined>,
	}
	export function CreateBillingGroupPropertiesFormGroup() {
		return new FormGroup<BillingGroupPropertiesFormProperties>({
			billingGroupDescription: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Additional information about the billing group. */
	export interface BillingGroupMetadata {
		creationDate?: Date;
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
		certificateDescription?: CACertificateDescription;
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
		certificateArn?: string;
		certificateId?: string;
		status?: AuthorizerStatus;
		certificatePem?: string;
		ownedBy?: string;
		creationDate?: Date;
		autoRegistrationStatus?: AutoRegistrationStatus;
		lastModifiedDate?: Date;
		customerVersion?: number | null;
		generationId?: string;
		validity?: CertificateValidity;
		certificateMode?: CertificateMode;
	}

	/** Describes a CA certificate. */
	export interface CACertificateDescriptionFormProperties {
		certificateArn: FormControl<string | null | undefined>,
		certificateId: FormControl<string | null | undefined>,
		status: FormControl<AuthorizerStatus | null | undefined>,
		certificatePem: FormControl<string | null | undefined>,
		ownedBy: FormControl<string | null | undefined>,
		creationDate: FormControl<Date | null | undefined>,
		autoRegistrationStatus: FormControl<AutoRegistrationStatus | null | undefined>,
		lastModifiedDate: FormControl<Date | null | undefined>,
		customerVersion: FormControl<number | null | undefined>,
		generationId: FormControl<string | null | undefined>,
		certificateMode: FormControl<CertificateMode | null | undefined>,
	}
	export function CreateCACertificateDescriptionFormGroup() {
		return new FormGroup<CACertificateDescriptionFormProperties>({
			certificateArn: new FormControl<string | null | undefined>(undefined),
			certificateId: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<AuthorizerStatus | null | undefined>(undefined),
			certificatePem: new FormControl<string | null | undefined>(undefined),
			ownedBy: new FormControl<string | null | undefined>(undefined),
			creationDate: new FormControl<Date | null | undefined>(undefined),
			autoRegistrationStatus: new FormControl<AutoRegistrationStatus | null | undefined>(undefined),
			lastModifiedDate: new FormControl<Date | null | undefined>(undefined),
			customerVersion: new FormControl<number | null | undefined>(undefined),
			generationId: new FormControl<string | null | undefined>(undefined),
			certificateMode: new FormControl<CertificateMode | null | undefined>(undefined),
		});

	}

	export enum AutoRegistrationStatus { ENABLE = 'ENABLE', DISABLE = 'DISABLE' }


	/** When the certificate is valid. */
	export interface CertificateValidity {
		notBefore?: Date;
		notAfter?: Date;
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

	export enum CertificateMode { DEFAULT = 'DEFAULT', SNI_ONLY = 'SNI_ONLY' }


	/** The registration configuration. */
	export interface RegistrationConfig {
		templateBody?: string;
		roleArn?: string;
		templateName?: string;
	}

	/** The registration configuration. */
	export interface RegistrationConfigFormProperties {
		templateBody: FormControl<string | null | undefined>,
		roleArn: FormControl<string | null | undefined>,
		templateName: FormControl<string | null | undefined>,
	}
	export function CreateRegistrationConfigFormGroup() {
		return new FormGroup<RegistrationConfigFormProperties>({
			templateBody: new FormControl<string | null | undefined>(undefined),
			roleArn: new FormControl<string | null | undefined>(undefined),
			templateName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The output of the DescribeCertificate operation. */
	export interface DescribeCertificateResponse {
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
		certificateArn?: string;
		certificateId?: string;
		caCertificateId?: string;
		status?: CertificateStatus;
		certificatePem?: string;
		ownedBy?: string;
		previousOwnedBy?: string;
		creationDate?: Date;
		lastModifiedDate?: Date;
		customerVersion?: number | null;
		transferData?: TransferData;
		generationId?: string;
		validity?: CertificateValidity;
		certificateMode?: CertificateMode;
	}

	/** Describes a certificate. */
	export interface CertificateDescriptionFormProperties {
		certificateArn: FormControl<string | null | undefined>,
		certificateId: FormControl<string | null | undefined>,
		caCertificateId: FormControl<string | null | undefined>,
		status: FormControl<CertificateStatus | null | undefined>,
		certificatePem: FormControl<string | null | undefined>,
		ownedBy: FormControl<string | null | undefined>,
		previousOwnedBy: FormControl<string | null | undefined>,
		creationDate: FormControl<Date | null | undefined>,
		lastModifiedDate: FormControl<Date | null | undefined>,
		customerVersion: FormControl<number | null | undefined>,
		generationId: FormControl<string | null | undefined>,
		certificateMode: FormControl<CertificateMode | null | undefined>,
	}
	export function CreateCertificateDescriptionFormGroup() {
		return new FormGroup<CertificateDescriptionFormProperties>({
			certificateArn: new FormControl<string | null | undefined>(undefined),
			certificateId: new FormControl<string | null | undefined>(undefined),
			caCertificateId: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<CertificateStatus | null | undefined>(undefined),
			certificatePem: new FormControl<string | null | undefined>(undefined),
			ownedBy: new FormControl<string | null | undefined>(undefined),
			previousOwnedBy: new FormControl<string | null | undefined>(undefined),
			creationDate: new FormControl<Date | null | undefined>(undefined),
			lastModifiedDate: new FormControl<Date | null | undefined>(undefined),
			customerVersion: new FormControl<number | null | undefined>(undefined),
			generationId: new FormControl<string | null | undefined>(undefined),
			certificateMode: new FormControl<CertificateMode | null | undefined>(undefined),
		});

	}

	export enum CertificateStatus { ACTIVE = 'ACTIVE', INACTIVE = 'INACTIVE', REVOKED = 'REVOKED', PENDING_TRANSFER = 'PENDING_TRANSFER', REGISTER_INACTIVE = 'REGISTER_INACTIVE', PENDING_ACTIVATION = 'PENDING_ACTIVATION' }


	/** Data used to transfer a certificate to an Amazon Web Services account. */
	export interface TransferData {
		transferMessage?: string;
		rejectReason?: string;
		transferDate?: Date;
		acceptDate?: Date;
		rejectDate?: Date;
	}

	/** Data used to transfer a certificate to an Amazon Web Services account. */
	export interface TransferDataFormProperties {
		transferMessage: FormControl<string | null | undefined>,
		rejectReason: FormControl<string | null | undefined>,
		transferDate: FormControl<Date | null | undefined>,
		acceptDate: FormControl<Date | null | undefined>,
		rejectDate: FormControl<Date | null | undefined>,
	}
	export function CreateTransferDataFormGroup() {
		return new FormGroup<TransferDataFormProperties>({
			transferMessage: new FormControl<string | null | undefined>(undefined),
			rejectReason: new FormControl<string | null | undefined>(undefined),
			transferDate: new FormControl<Date | null | undefined>(undefined),
			acceptDate: new FormControl<Date | null | undefined>(undefined),
			rejectDate: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface DescribeCustomMetricResponse {
		metricName?: string;
		metricArn?: string;
		metricType?: CustomMetricType;
		displayName?: string;
		creationDate?: Date;
		lastModifiedDate?: Date;
	}
	export interface DescribeCustomMetricResponseFormProperties {
		metricName: FormControl<string | null | undefined>,
		metricArn: FormControl<string | null | undefined>,
		metricType: FormControl<CustomMetricType | null | undefined>,
		displayName: FormControl<string | null | undefined>,
		creationDate: FormControl<Date | null | undefined>,
		lastModifiedDate: FormControl<Date | null | undefined>,
	}
	export function CreateDescribeCustomMetricResponseFormGroup() {
		return new FormGroup<DescribeCustomMetricResponseFormProperties>({
			metricName: new FormControl<string | null | undefined>(undefined),
			metricArn: new FormControl<string | null | undefined>(undefined),
			metricType: new FormControl<CustomMetricType | null | undefined>(undefined),
			displayName: new FormControl<string | null | undefined>(undefined),
			creationDate: new FormControl<Date | null | undefined>(undefined),
			lastModifiedDate: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export enum CustomMetricType { 'string-list' = 'string-list', 'ip-address-list' = 'ip-address-list', 'number-list' = 'number-list', number = 'number' }

	export interface DescribeDefaultAuthorizerResponse {
		authorizerDescription?: AuthorizerDescription;
	}
	export interface DescribeDefaultAuthorizerResponseFormProperties {
	}
	export function CreateDescribeDefaultAuthorizerResponseFormGroup() {
		return new FormGroup<DescribeDefaultAuthorizerResponseFormProperties>({
		});

	}

	export interface DescribeDetectMitigationActionsTaskResponse {
		taskSummary?: DetectMitigationActionsTaskSummary;
	}
	export interface DescribeDetectMitigationActionsTaskResponseFormProperties {
	}
	export function CreateDescribeDetectMitigationActionsTaskResponseFormGroup() {
		return new FormGroup<DescribeDetectMitigationActionsTaskResponseFormProperties>({
		});

	}


	/**  The summary of the mitigation action tasks.  */
	export interface DetectMitigationActionsTaskSummary {
		taskId?: string;
		taskStatus?: DetectMitigationActionsTaskStatus;
		taskStartTime?: Date;
		taskEndTime?: Date;
		target?: DetectMitigationActionsTaskTarget;
		violationEventOccurrenceRange?: ViolationEventOccurrenceRange;
		onlyActiveViolationsIncluded?: boolean | null;
		suppressedAlertsIncluded?: boolean | null;
		actionsDefinition?: Array<MitigationAction>;
		taskStatistics?: DetectMitigationActionsTaskStatistics;
	}

	/**  The summary of the mitigation action tasks.  */
	export interface DetectMitigationActionsTaskSummaryFormProperties {
		taskId: FormControl<string | null | undefined>,
		taskStatus: FormControl<DetectMitigationActionsTaskStatus | null | undefined>,
		taskStartTime: FormControl<Date | null | undefined>,
		taskEndTime: FormControl<Date | null | undefined>,
		onlyActiveViolationsIncluded: FormControl<boolean | null | undefined>,
		suppressedAlertsIncluded: FormControl<boolean | null | undefined>,
	}
	export function CreateDetectMitigationActionsTaskSummaryFormGroup() {
		return new FormGroup<DetectMitigationActionsTaskSummaryFormProperties>({
			taskId: new FormControl<string | null | undefined>(undefined),
			taskStatus: new FormControl<DetectMitigationActionsTaskStatus | null | undefined>(undefined),
			taskStartTime: new FormControl<Date | null | undefined>(undefined),
			taskEndTime: new FormControl<Date | null | undefined>(undefined),
			onlyActiveViolationsIncluded: new FormControl<boolean | null | undefined>(undefined),
			suppressedAlertsIncluded: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export enum DetectMitigationActionsTaskStatus { IN_PROGRESS = 'IN_PROGRESS', SUCCESSFUL = 'SUCCESSFUL', FAILED = 'FAILED', CANCELED = 'CANCELED' }


	/**  The target of a mitigation action task.  */
	export interface DetectMitigationActionsTaskTarget {
		violationIds?: Array<string>;
		securityProfileName?: string;
		behaviorName?: string;
	}

	/**  The target of a mitigation action task.  */
	export interface DetectMitigationActionsTaskTargetFormProperties {
		securityProfileName: FormControl<string | null | undefined>,
		behaviorName: FormControl<string | null | undefined>,
	}
	export function CreateDetectMitigationActionsTaskTargetFormGroup() {
		return new FormGroup<DetectMitigationActionsTaskTargetFormProperties>({
			securityProfileName: new FormControl<string | null | undefined>(undefined),
			behaviorName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**  Specifies the time period of which violation events occurred between.  */
	export interface ViolationEventOccurrenceRange {

		/** Required */
		startTime: Date;

		/** Required */
		endTime: Date;
	}

	/**  Specifies the time period of which violation events occurred between.  */
	export interface ViolationEventOccurrenceRangeFormProperties {

		/** Required */
		startTime: FormControl<Date | null | undefined>,

		/** Required */
		endTime: FormControl<Date | null | undefined>,
	}
	export function CreateViolationEventOccurrenceRangeFormGroup() {
		return new FormGroup<ViolationEventOccurrenceRangeFormProperties>({
			startTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			endTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
		});

	}


	/**  The statistics of a mitigation action task.  */
	export interface DetectMitigationActionsTaskStatistics {
		actionsExecuted?: number | null;
		actionsSkipped?: number | null;
		actionsFailed?: number | null;
	}

	/**  The statistics of a mitigation action task.  */
	export interface DetectMitigationActionsTaskStatisticsFormProperties {
		actionsExecuted: FormControl<number | null | undefined>,
		actionsSkipped: FormControl<number | null | undefined>,
		actionsFailed: FormControl<number | null | undefined>,
	}
	export function CreateDetectMitigationActionsTaskStatisticsFormGroup() {
		return new FormGroup<DetectMitigationActionsTaskStatisticsFormProperties>({
			actionsExecuted: new FormControl<number | null | undefined>(undefined),
			actionsSkipped: new FormControl<number | null | undefined>(undefined),
			actionsFailed: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface DescribeDimensionResponse {
		name?: string;
		arn?: string;
		type?: DimensionType;
		stringValues?: Array<string>;
		creationDate?: Date;
		lastModifiedDate?: Date;
	}
	export interface DescribeDimensionResponseFormProperties {
		name: FormControl<string | null | undefined>,
		arn: FormControl<string | null | undefined>,
		type: FormControl<DimensionType | null | undefined>,
		creationDate: FormControl<Date | null | undefined>,
		lastModifiedDate: FormControl<Date | null | undefined>,
	}
	export function CreateDescribeDimensionResponseFormGroup() {
		return new FormGroup<DescribeDimensionResponseFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			arn: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<DimensionType | null | undefined>(undefined),
			creationDate: new FormControl<Date | null | undefined>(undefined),
			lastModifiedDate: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export enum DimensionType { TOPIC_FILTER = 'TOPIC_FILTER' }

	export interface DescribeDomainConfigurationResponse {
		domainConfigurationName?: string;
		domainConfigurationArn?: string;
		domainName?: string;
		serverCertificates?: Array<ServerCertificateSummary>;
		authorizerConfig?: AuthorizerConfig;
		domainConfigurationStatus?: DomainConfigurationStatus;
		serviceType?: ServiceType;
		domainType?: DomainType;
		lastStatusChangeDate?: Date;
		tlsConfig?: TlsConfig;
	}
	export interface DescribeDomainConfigurationResponseFormProperties {
		domainConfigurationName: FormControl<string | null | undefined>,
		domainConfigurationArn: FormControl<string | null | undefined>,
		domainName: FormControl<string | null | undefined>,
		domainConfigurationStatus: FormControl<DomainConfigurationStatus | null | undefined>,
		serviceType: FormControl<ServiceType | null | undefined>,
		domainType: FormControl<DomainType | null | undefined>,
		lastStatusChangeDate: FormControl<Date | null | undefined>,
	}
	export function CreateDescribeDomainConfigurationResponseFormGroup() {
		return new FormGroup<DescribeDomainConfigurationResponseFormProperties>({
			domainConfigurationName: new FormControl<string | null | undefined>(undefined),
			domainConfigurationArn: new FormControl<string | null | undefined>(undefined),
			domainName: new FormControl<string | null | undefined>(undefined),
			domainConfigurationStatus: new FormControl<DomainConfigurationStatus | null | undefined>(undefined),
			serviceType: new FormControl<ServiceType | null | undefined>(undefined),
			domainType: new FormControl<DomainType | null | undefined>(undefined),
			lastStatusChangeDate: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/** An object that contains information about a server certificate. */
	export interface ServerCertificateSummary {
		serverCertificateArn?: string;
		serverCertificateStatus?: ServerCertificateStatus;
		serverCertificateStatusDetail?: string;
	}

	/** An object that contains information about a server certificate. */
	export interface ServerCertificateSummaryFormProperties {
		serverCertificateArn: FormControl<string | null | undefined>,
		serverCertificateStatus: FormControl<ServerCertificateStatus | null | undefined>,
		serverCertificateStatusDetail: FormControl<string | null | undefined>,
	}
	export function CreateServerCertificateSummaryFormGroup() {
		return new FormGroup<ServerCertificateSummaryFormProperties>({
			serverCertificateArn: new FormControl<string | null | undefined>(undefined),
			serverCertificateStatus: new FormControl<ServerCertificateStatus | null | undefined>(undefined),
			serverCertificateStatusDetail: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ServerCertificateStatus { INVALID = 'INVALID', VALID = 'VALID' }


	/** An object that specifies the authorization service for a domain. */
	export interface AuthorizerConfig {
		defaultAuthorizerName?: string;
		allowAuthorizerOverride?: boolean | null;
	}

	/** An object that specifies the authorization service for a domain. */
	export interface AuthorizerConfigFormProperties {
		defaultAuthorizerName: FormControl<string | null | undefined>,
		allowAuthorizerOverride: FormControl<boolean | null | undefined>,
	}
	export function CreateAuthorizerConfigFormGroup() {
		return new FormGroup<AuthorizerConfigFormProperties>({
			defaultAuthorizerName: new FormControl<string | null | undefined>(undefined),
			allowAuthorizerOverride: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export enum DomainConfigurationStatus { ENABLED = 'ENABLED', DISABLED = 'DISABLED' }

	export enum ServiceType { DATA = 'DATA', CREDENTIAL_PROVIDER = 'CREDENTIAL_PROVIDER', JOBS = 'JOBS' }

	export enum DomainType { ENDPOINT = 'ENDPOINT', AWS_MANAGED = 'AWS_MANAGED', CUSTOMER_MANAGED = 'CUSTOMER_MANAGED' }


	/** An object that specifies the TLS configuration for a domain. */
	export interface TlsConfig {
		securityPolicy?: string;
	}

	/** An object that specifies the TLS configuration for a domain. */
	export interface TlsConfigFormProperties {
		securityPolicy: FormControl<string | null | undefined>,
	}
	export function CreateTlsConfigFormGroup() {
		return new FormGroup<TlsConfigFormProperties>({
			securityPolicy: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The output from the DescribeEndpoint operation. */
	export interface DescribeEndpointResponse {
		endpointAddress?: string;
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
		creationDate?: Date;
		lastModifiedDate?: Date;
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

	export interface DescribeFleetMetricResponse {
		metricName?: string;
		queryString?: string;
		aggregationType?: AggregationType;
		period?: number | null;
		aggregationField?: string;
		description?: string;
		queryVersion?: string;
		indexName?: string;
		creationDate?: Date;
		lastModifiedDate?: Date;
		unit?: FleetMetricUnit;
		version?: number | null;
		metricArn?: string;
	}
	export interface DescribeFleetMetricResponseFormProperties {
		metricName: FormControl<string | null | undefined>,
		queryString: FormControl<string | null | undefined>,
		period: FormControl<number | null | undefined>,
		aggregationField: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,
		queryVersion: FormControl<string | null | undefined>,
		indexName: FormControl<string | null | undefined>,
		creationDate: FormControl<Date | null | undefined>,
		lastModifiedDate: FormControl<Date | null | undefined>,
		unit: FormControl<FleetMetricUnit | null | undefined>,
		version: FormControl<number | null | undefined>,
		metricArn: FormControl<string | null | undefined>,
	}
	export function CreateDescribeFleetMetricResponseFormGroup() {
		return new FormGroup<DescribeFleetMetricResponseFormProperties>({
			metricName: new FormControl<string | null | undefined>(undefined),
			queryString: new FormControl<string | null | undefined>(undefined),
			period: new FormControl<number | null | undefined>(undefined),
			aggregationField: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			queryVersion: new FormControl<string | null | undefined>(undefined),
			indexName: new FormControl<string | null | undefined>(undefined),
			creationDate: new FormControl<Date | null | undefined>(undefined),
			lastModifiedDate: new FormControl<Date | null | undefined>(undefined),
			unit: new FormControl<FleetMetricUnit | null | undefined>(undefined),
			version: new FormControl<number | null | undefined>(undefined),
			metricArn: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The type of aggregation queries. */
	export interface AggregationType {

		/** Required */
		name: AggregationTypeName;
		values?: Array<string>;
	}

	/** The type of aggregation queries. */
	export interface AggregationTypeFormProperties {

		/** Required */
		name: FormControl<AggregationTypeName | null | undefined>,
	}
	export function CreateAggregationTypeFormGroup() {
		return new FormGroup<AggregationTypeFormProperties>({
			name: new FormControl<AggregationTypeName | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum FleetMetricUnit { Seconds = 'Seconds', Microseconds = 'Microseconds', Milliseconds = 'Milliseconds', Bytes = 'Bytes', Kilobytes = 'Kilobytes', Megabytes = 'Megabytes', Gigabytes = 'Gigabytes', Terabytes = 'Terabytes', Bits = 'Bits', Kilobits = 'Kilobits', Megabits = 'Megabits', Gigabits = 'Gigabits', Terabits = 'Terabits', Percent = 'Percent', Count = 'Count', 'Bytes/Second' = 'Bytes/Second', 'Kilobytes/Second' = 'Kilobytes/Second', 'Megabytes/Second' = 'Megabytes/Second', 'Gigabytes/Second' = 'Gigabytes/Second', 'Terabytes/Second' = 'Terabytes/Second', 'Bits/Second' = 'Bits/Second', 'Kilobits/Second' = 'Kilobits/Second', 'Megabits/Second' = 'Megabits/Second', 'Gigabits/Second' = 'Gigabits/Second', 'Terabits/Second' = 'Terabits/Second', 'Count/Second' = 'Count/Second', None = 'None' }

	export interface DescribeIndexResponse {
		indexName?: string;
		indexStatus?: IndexStatus;
		schema?: string;
	}
	export interface DescribeIndexResponseFormProperties {
		indexName: FormControl<string | null | undefined>,
		indexStatus: FormControl<IndexStatus | null | undefined>,
		schema: FormControl<string | null | undefined>,
	}
	export function CreateDescribeIndexResponseFormGroup() {
		return new FormGroup<DescribeIndexResponseFormProperties>({
			indexName: new FormControl<string | null | undefined>(undefined),
			indexStatus: new FormControl<IndexStatus | null | undefined>(undefined),
			schema: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum IndexStatus { ACTIVE = 'ACTIVE', BUILDING = 'BUILDING', REBUILDING = 'REBUILDING' }

	export interface DescribeJobResponse {
		documentSource?: string;
		job?: Job;
	}
	export interface DescribeJobResponseFormProperties {
		documentSource: FormControl<string | null | undefined>,
	}
	export function CreateDescribeJobResponseFormGroup() {
		return new FormGroup<DescribeJobResponseFormProperties>({
			documentSource: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The <code>Job</code> object contains details about a job. */
	export interface Job {
		jobArn?: string;
		jobId?: string;
		targetSelection?: TargetSelection;
		status?: JobStatus;
		forceCanceled?: boolean | null;
		reasonCode?: string;
		comment?: string;
		targets?: Array<string>;
		description?: string;
		presignedUrlConfig?: PresignedUrlConfig;
		jobExecutionsRolloutConfig?: JobExecutionsRolloutConfig;
		abortConfig?: AbortConfig;
		createdAt?: Date;
		lastUpdatedAt?: Date;
		completedAt?: Date;
		jobProcessDetails?: JobProcessDetails;
		timeoutConfig?: TimeoutConfig;
		namespaceId?: string;
		jobTemplateArn?: string;
		jobExecutionsRetryConfig?: JobExecutionsRetryConfig;
		documentParameters?: ParameterMap;
		isConcurrent?: boolean | null;
		schedulingConfig?: SchedulingConfig;
		scheduledJobRollouts?: Array<ScheduledJobRollout>;
		destinationPackageVersions?: Array<string>;
	}

	/** The <code>Job</code> object contains details about a job. */
	export interface JobFormProperties {
		jobArn: FormControl<string | null | undefined>,
		jobId: FormControl<string | null | undefined>,
		targetSelection: FormControl<TargetSelection | null | undefined>,
		status: FormControl<JobStatus | null | undefined>,
		forceCanceled: FormControl<boolean | null | undefined>,
		reasonCode: FormControl<string | null | undefined>,
		comment: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,
		createdAt: FormControl<Date | null | undefined>,
		lastUpdatedAt: FormControl<Date | null | undefined>,
		completedAt: FormControl<Date | null | undefined>,
		namespaceId: FormControl<string | null | undefined>,
		jobTemplateArn: FormControl<string | null | undefined>,
		isConcurrent: FormControl<boolean | null | undefined>,
	}
	export function CreateJobFormGroup() {
		return new FormGroup<JobFormProperties>({
			jobArn: new FormControl<string | null | undefined>(undefined),
			jobId: new FormControl<string | null | undefined>(undefined),
			targetSelection: new FormControl<TargetSelection | null | undefined>(undefined),
			status: new FormControl<JobStatus | null | undefined>(undefined),
			forceCanceled: new FormControl<boolean | null | undefined>(undefined),
			reasonCode: new FormControl<string | null | undefined>(undefined),
			comment: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			createdAt: new FormControl<Date | null | undefined>(undefined),
			lastUpdatedAt: new FormControl<Date | null | undefined>(undefined),
			completedAt: new FormControl<Date | null | undefined>(undefined),
			namespaceId: new FormControl<string | null | undefined>(undefined),
			jobTemplateArn: new FormControl<string | null | undefined>(undefined),
			isConcurrent: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export enum TargetSelection { CONTINUOUS = 'CONTINUOUS', SNAPSHOT = 'SNAPSHOT' }

	export enum JobStatus { IN_PROGRESS = 'IN_PROGRESS', CANCELED = 'CANCELED', COMPLETED = 'COMPLETED', DELETION_IN_PROGRESS = 'DELETION_IN_PROGRESS', SCHEDULED = 'SCHEDULED' }


	/** Configuration for pre-signed S3 URLs. */
	export interface PresignedUrlConfig {
		roleArn?: string;
		expiresInSec?: number | null;
	}

	/** Configuration for pre-signed S3 URLs. */
	export interface PresignedUrlConfigFormProperties {
		roleArn: FormControl<string | null | undefined>,
		expiresInSec: FormControl<number | null | undefined>,
	}
	export function CreatePresignedUrlConfigFormGroup() {
		return new FormGroup<PresignedUrlConfigFormProperties>({
			roleArn: new FormControl<string | null | undefined>(undefined),
			expiresInSec: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Allows you to create a staged rollout of a job. */
	export interface JobExecutionsRolloutConfig {
		maximumPerMinute?: number | null;
		exponentialRate?: ExponentialRolloutRate;
	}

	/** Allows you to create a staged rollout of a job. */
	export interface JobExecutionsRolloutConfigFormProperties {
		maximumPerMinute: FormControl<number | null | undefined>,
	}
	export function CreateJobExecutionsRolloutConfigFormGroup() {
		return new FormGroup<JobExecutionsRolloutConfigFormProperties>({
			maximumPerMinute: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** The criteria that determine when and how a job abort takes place. */
	export interface AbortConfig {

		/** Required */
		criteriaList: Array<AbortCriteria>;
	}

	/** The criteria that determine when and how a job abort takes place. */
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


	/** The configuration that determines how many retries are allowed for each failure type for a job. */
	export interface JobExecutionsRetryConfig {

		/** Required */
		criteriaList: Array<RetryCriteria>;
	}

	/** The configuration that determines how many retries are allowed for each failure type for a job. */
	export interface JobExecutionsRetryConfigFormProperties {
	}
	export function CreateJobExecutionsRetryConfigFormGroup() {
		return new FormGroup<JobExecutionsRetryConfigFormProperties>({
		});

	}

	export interface ParameterMap {
	}
	export interface ParameterMapFormProperties {
	}
	export function CreateParameterMapFormGroup() {
		return new FormGroup<ParameterMapFormProperties>({
		});

	}


	/** Specifies the date and time that a job will begin the rollout of the job document to all devices in the target group. Additionally, you can specify the end behavior for each job execution when it reaches the scheduled end time. */
	export interface SchedulingConfig {
		startTime?: string;
		endTime?: string;
		endBehavior?: JobEndBehavior;
		maintenanceWindows?: Array<MaintenanceWindow>;
	}

	/** Specifies the date and time that a job will begin the rollout of the job document to all devices in the target group. Additionally, you can specify the end behavior for each job execution when it reaches the scheduled end time. */
	export interface SchedulingConfigFormProperties {
		startTime: FormControl<string | null | undefined>,
		endTime: FormControl<string | null | undefined>,
		endBehavior: FormControl<JobEndBehavior | null | undefined>,
	}
	export function CreateSchedulingConfigFormGroup() {
		return new FormGroup<SchedulingConfigFormProperties>({
			startTime: new FormControl<string | null | undefined>(undefined),
			endTime: new FormControl<string | null | undefined>(undefined),
			endBehavior: new FormControl<JobEndBehavior | null | undefined>(undefined),
		});

	}


	/** Displays the next seven maintenance window occurrences and their start times. */
	export interface ScheduledJobRollout {
		startTime?: string;
	}

	/** Displays the next seven maintenance window occurrences and their start times. */
	export interface ScheduledJobRolloutFormProperties {
		startTime: FormControl<string | null | undefined>,
	}
	export function CreateScheduledJobRolloutFormGroup() {
		return new FormGroup<ScheduledJobRolloutFormProperties>({
			startTime: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeJobExecutionResponse {
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
		jobId?: string;
		status?: JobExecutionStatus;
		forceCanceled?: boolean | null;
		statusDetails?: JobExecutionStatusDetails;
		thingArn?: string;
		queuedAt?: Date;
		startedAt?: Date;
		lastUpdatedAt?: Date;
		executionNumber?: number | null;
		versionNumber?: number | null;
		approximateSecondsBeforeTimedOut?: number | null;
	}

	/** The job execution object represents the execution of a job on a particular device. */
	export interface JobExecutionFormProperties {
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
			jobId: new FormControl<string | null | undefined>(undefined),
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

	export enum JobExecutionStatus { QUEUED = 'QUEUED', IN_PROGRESS = 'IN_PROGRESS', SUCCEEDED = 'SUCCEEDED', FAILED = 'FAILED', TIMED_OUT = 'TIMED_OUT', REJECTED = 'REJECTED', REMOVED = 'REMOVED', CANCELED = 'CANCELED' }


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

	export interface DescribeJobTemplateResponse {
		jobTemplateArn?: string;
		jobTemplateId?: string;
		description?: string;
		documentSource?: string;
		document?: string;
		createdAt?: Date;

		/** Configuration for pre-signed S3 URLs. */
		presignedUrlConfig?: PresignedUrlConfig;

		/** Allows you to create a staged rollout of a job. */
		jobExecutionsRolloutConfig?: JobExecutionsRolloutConfig;

		/** The criteria that determine when and how a job abort takes place. */
		abortConfig?: AbortConfig;

		/** Specifies the amount of time each device has to finish its execution of the job. A timer is started when the job execution status is set to <code>IN_PROGRESS</code>. If the job execution status is not set to another terminal state before the timer expires, it will be automatically set to <code>TIMED_OUT</code>. */
		timeoutConfig?: TimeoutConfig;
		jobExecutionsRetryConfig?: JobExecutionsRetryConfig;
		maintenanceWindows?: Array<MaintenanceWindow>;
		destinationPackageVersions?: Array<string>;
	}
	export interface DescribeJobTemplateResponseFormProperties {
		jobTemplateArn: FormControl<string | null | undefined>,
		jobTemplateId: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,
		documentSource: FormControl<string | null | undefined>,
		document: FormControl<string | null | undefined>,
		createdAt: FormControl<Date | null | undefined>,
	}
	export function CreateDescribeJobTemplateResponseFormGroup() {
		return new FormGroup<DescribeJobTemplateResponseFormProperties>({
			jobTemplateArn: new FormControl<string | null | undefined>(undefined),
			jobTemplateId: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			documentSource: new FormControl<string | null | undefined>(undefined),
			document: new FormControl<string | null | undefined>(undefined),
			createdAt: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface DescribeManagedJobTemplateResponse {
		templateName?: string;
		templateArn?: string;
		description?: string;
		templateVersion?: string;
		environments?: Array<string>;
		documentParameters?: Array<DocumentParameter>;
		document?: string;
	}
	export interface DescribeManagedJobTemplateResponseFormProperties {
		templateName: FormControl<string | null | undefined>,
		templateArn: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,
		templateVersion: FormControl<string | null | undefined>,
		document: FormControl<string | null | undefined>,
	}
	export function CreateDescribeManagedJobTemplateResponseFormGroup() {
		return new FormGroup<DescribeManagedJobTemplateResponseFormProperties>({
			templateName: new FormControl<string | null | undefined>(undefined),
			templateArn: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			templateVersion: new FormControl<string | null | undefined>(undefined),
			document: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** <p>A map of key-value pairs containing the patterns that need to be replaced in a managed template job document schema. You can use the description of each key as a guidance to specify the inputs during runtime when creating a job.</p> <note> <p> <code>documentParameters</code> can only be used when creating jobs from Amazon Web Services managed templates. This parameter can't be used with custom job templates or to create jobs from them.</p> </note> */
	export interface DocumentParameter {
		key?: string;
		description?: string;
		regex?: string;
		example?: string;
		optional?: boolean | null;
	}

	/** <p>A map of key-value pairs containing the patterns that need to be replaced in a managed template job document schema. You can use the description of each key as a guidance to specify the inputs during runtime when creating a job.</p> <note> <p> <code>documentParameters</code> can only be used when creating jobs from Amazon Web Services managed templates. This parameter can't be used with custom job templates or to create jobs from them.</p> </note> */
	export interface DocumentParameterFormProperties {
		key: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,
		regex: FormControl<string | null | undefined>,
		example: FormControl<string | null | undefined>,
		optional: FormControl<boolean | null | undefined>,
	}
	export function CreateDocumentParameterFormGroup() {
		return new FormGroup<DocumentParameterFormProperties>({
			key: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			regex: new FormControl<string | null | undefined>(undefined),
			example: new FormControl<string | null | undefined>(undefined),
			optional: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface DescribeMitigationActionResponse {
		actionName?: string;
		actionType?: MitigationActionType;
		actionArn?: string;
		actionId?: string;
		roleArn?: string;
		actionParams?: MitigationActionParams;
		creationDate?: Date;
		lastModifiedDate?: Date;
	}
	export interface DescribeMitigationActionResponseFormProperties {
		actionName: FormControl<string | null | undefined>,
		actionType: FormControl<MitigationActionType | null | undefined>,
		actionArn: FormControl<string | null | undefined>,
		actionId: FormControl<string | null | undefined>,
		roleArn: FormControl<string | null | undefined>,
		creationDate: FormControl<Date | null | undefined>,
		lastModifiedDate: FormControl<Date | null | undefined>,
	}
	export function CreateDescribeMitigationActionResponseFormGroup() {
		return new FormGroup<DescribeMitigationActionResponseFormProperties>({
			actionName: new FormControl<string | null | undefined>(undefined),
			actionType: new FormControl<MitigationActionType | null | undefined>(undefined),
			actionArn: new FormControl<string | null | undefined>(undefined),
			actionId: new FormControl<string | null | undefined>(undefined),
			roleArn: new FormControl<string | null | undefined>(undefined),
			creationDate: new FormControl<Date | null | undefined>(undefined),
			lastModifiedDate: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export enum MitigationActionType { UPDATE_DEVICE_CERTIFICATE = 'UPDATE_DEVICE_CERTIFICATE', UPDATE_CA_CERTIFICATE = 'UPDATE_CA_CERTIFICATE', ADD_THINGS_TO_THING_GROUP = 'ADD_THINGS_TO_THING_GROUP', REPLACE_DEFAULT_POLICY_VERSION = 'REPLACE_DEFAULT_POLICY_VERSION', ENABLE_IOT_LOGGING = 'ENABLE_IOT_LOGGING', PUBLISH_FINDING_TO_SNS = 'PUBLISH_FINDING_TO_SNS' }

	export interface DescribeProvisioningTemplateResponse {
		templateArn?: string;
		templateName?: string;
		description?: string;
		creationDate?: Date;
		lastModifiedDate?: Date;
		defaultVersionId?: number | null;
		templateBody?: string;
		enabled?: boolean | null;
		provisioningRoleArn?: string;
		preProvisioningHook?: ProvisioningHook;
		type?: TemplateType;
	}
	export interface DescribeProvisioningTemplateResponseFormProperties {
		templateArn: FormControl<string | null | undefined>,
		templateName: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,
		creationDate: FormControl<Date | null | undefined>,
		lastModifiedDate: FormControl<Date | null | undefined>,
		defaultVersionId: FormControl<number | null | undefined>,
		templateBody: FormControl<string | null | undefined>,
		enabled: FormControl<boolean | null | undefined>,
		provisioningRoleArn: FormControl<string | null | undefined>,
		type: FormControl<TemplateType | null | undefined>,
	}
	export function CreateDescribeProvisioningTemplateResponseFormGroup() {
		return new FormGroup<DescribeProvisioningTemplateResponseFormProperties>({
			templateArn: new FormControl<string | null | undefined>(undefined),
			templateName: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			creationDate: new FormControl<Date | null | undefined>(undefined),
			lastModifiedDate: new FormControl<Date | null | undefined>(undefined),
			defaultVersionId: new FormControl<number | null | undefined>(undefined),
			templateBody: new FormControl<string | null | undefined>(undefined),
			enabled: new FormControl<boolean | null | undefined>(undefined),
			provisioningRoleArn: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<TemplateType | null | undefined>(undefined),
		});

	}


	/** Structure that contains <code>payloadVersion</code> and <code>targetArn</code>. */
	export interface ProvisioningHook {
		payloadVersion?: string;

		/** Required */
		targetArn: string;
	}

	/** Structure that contains <code>payloadVersion</code> and <code>targetArn</code>. */
	export interface ProvisioningHookFormProperties {
		payloadVersion: FormControl<string | null | undefined>,

		/** Required */
		targetArn: FormControl<string | null | undefined>,
	}
	export function CreateProvisioningHookFormGroup() {
		return new FormGroup<ProvisioningHookFormProperties>({
			payloadVersion: new FormControl<string | null | undefined>(undefined),
			targetArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum TemplateType { FLEET_PROVISIONING = 'FLEET_PROVISIONING', JITP = 'JITP' }

	export interface DescribeProvisioningTemplateVersionResponse {
		versionId?: number | null;
		creationDate?: Date;
		templateBody?: string;
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
		roleAlias?: string;
		roleAliasArn?: string;
		roleArn?: string;
		owner?: string;
		credentialDurationSeconds?: number | null;
		creationDate?: Date;
		lastModifiedDate?: Date;
	}

	/** Role alias description. */
	export interface RoleAliasDescriptionFormProperties {
		roleAlias: FormControl<string | null | undefined>,
		roleAliasArn: FormControl<string | null | undefined>,
		roleArn: FormControl<string | null | undefined>,
		owner: FormControl<string | null | undefined>,
		credentialDurationSeconds: FormControl<number | null | undefined>,
		creationDate: FormControl<Date | null | undefined>,
		lastModifiedDate: FormControl<Date | null | undefined>,
	}
	export function CreateRoleAliasDescriptionFormGroup() {
		return new FormGroup<RoleAliasDescriptionFormProperties>({
			roleAlias: new FormControl<string | null | undefined>(undefined),
			roleAliasArn: new FormControl<string | null | undefined>(undefined),
			roleArn: new FormControl<string | null | undefined>(undefined),
			owner: new FormControl<string | null | undefined>(undefined),
			credentialDurationSeconds: new FormControl<number | null | undefined>(undefined),
			creationDate: new FormControl<Date | null | undefined>(undefined),
			lastModifiedDate: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface DescribeScheduledAuditResponse {
		frequency?: AuditFrequency;
		dayOfMonth?: string;
		dayOfWeek?: DayOfWeek;
		targetCheckNames?: Array<string>;
		scheduledAuditName?: string;
		scheduledAuditArn?: string;
	}
	export interface DescribeScheduledAuditResponseFormProperties {
		frequency: FormControl<AuditFrequency | null | undefined>,
		dayOfMonth: FormControl<string | null | undefined>,
		dayOfWeek: FormControl<DayOfWeek | null | undefined>,
		scheduledAuditName: FormControl<string | null | undefined>,
		scheduledAuditArn: FormControl<string | null | undefined>,
	}
	export function CreateDescribeScheduledAuditResponseFormGroup() {
		return new FormGroup<DescribeScheduledAuditResponseFormProperties>({
			frequency: new FormControl<AuditFrequency | null | undefined>(undefined),
			dayOfMonth: new FormControl<string | null | undefined>(undefined),
			dayOfWeek: new FormControl<DayOfWeek | null | undefined>(undefined),
			scheduledAuditName: new FormControl<string | null | undefined>(undefined),
			scheduledAuditArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum AuditFrequency { DAILY = 'DAILY', WEEKLY = 'WEEKLY', BIWEEKLY = 'BIWEEKLY', MONTHLY = 'MONTHLY' }

	export enum DayOfWeek { SUN = 'SUN', MON = 'MON', TUE = 'TUE', WED = 'WED', THU = 'THU', FRI = 'FRI', SAT = 'SAT' }

	export interface DescribeSecurityProfileResponse {
		securityProfileName?: string;
		securityProfileArn?: string;
		securityProfileDescription?: string;
		behaviors?: Array<Behavior>;
		alertTargets?: AlertTargets;
		additionalMetricsToRetain?: Array<string>;
		additionalMetricsToRetainV2?: Array<MetricToRetain>;
		version?: number | null;
		creationDate?: Date;
		lastModifiedDate?: Date;
	}
	export interface DescribeSecurityProfileResponseFormProperties {
		securityProfileName: FormControl<string | null | undefined>,
		securityProfileArn: FormControl<string | null | undefined>,
		securityProfileDescription: FormControl<string | null | undefined>,
		version: FormControl<number | null | undefined>,
		creationDate: FormControl<Date | null | undefined>,
		lastModifiedDate: FormControl<Date | null | undefined>,
	}
	export function CreateDescribeSecurityProfileResponseFormGroup() {
		return new FormGroup<DescribeSecurityProfileResponseFormProperties>({
			securityProfileName: new FormControl<string | null | undefined>(undefined),
			securityProfileArn: new FormControl<string | null | undefined>(undefined),
			securityProfileDescription: new FormControl<string | null | undefined>(undefined),
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
		streamId?: string;
		streamArn?: string;
		streamVersion?: number | null;
		description?: string;
		files?: Array<StreamFile>;
		createdAt?: Date;
		lastUpdatedAt?: Date;
		roleArn?: string;
	}

	/** Information about a stream. */
	export interface StreamInfoFormProperties {
		streamId: FormControl<string | null | undefined>,
		streamArn: FormControl<string | null | undefined>,
		streamVersion: FormControl<number | null | undefined>,
		description: FormControl<string | null | undefined>,
		createdAt: FormControl<Date | null | undefined>,
		lastUpdatedAt: FormControl<Date | null | undefined>,
		roleArn: FormControl<string | null | undefined>,
	}
	export function CreateStreamInfoFormGroup() {
		return new FormGroup<StreamInfoFormProperties>({
			streamId: new FormControl<string | null | undefined>(undefined),
			streamArn: new FormControl<string | null | undefined>(undefined),
			streamVersion: new FormControl<number | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			createdAt: new FormControl<Date | null | undefined>(undefined),
			lastUpdatedAt: new FormControl<Date | null | undefined>(undefined),
			roleArn: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The output from the DescribeThing operation. */
	export interface DescribeThingResponse {
		defaultClientId?: string;
		thingName?: string;
		thingId?: string;
		thingArn?: string;
		thingTypeName?: string;
		attributes?: Attributes;
		version?: number | null;
		billingGroupName?: string;
	}

	/** The output from the DescribeThing operation. */
	export interface DescribeThingResponseFormProperties {
		defaultClientId: FormControl<string | null | undefined>,
		thingName: FormControl<string | null | undefined>,
		thingId: FormControl<string | null | undefined>,
		thingArn: FormControl<string | null | undefined>,
		thingTypeName: FormControl<string | null | undefined>,
		version: FormControl<number | null | undefined>,
		billingGroupName: FormControl<string | null | undefined>,
	}
	export function CreateDescribeThingResponseFormGroup() {
		return new FormGroup<DescribeThingResponseFormProperties>({
			defaultClientId: new FormControl<string | null | undefined>(undefined),
			thingName: new FormControl<string | null | undefined>(undefined),
			thingId: new FormControl<string | null | undefined>(undefined),
			thingArn: new FormControl<string | null | undefined>(undefined),
			thingTypeName: new FormControl<string | null | undefined>(undefined),
			version: new FormControl<number | null | undefined>(undefined),
			billingGroupName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeThingGroupResponse {
		thingGroupName?: string;
		thingGroupId?: string;
		thingGroupArn?: string;
		version?: number | null;
		thingGroupProperties?: ThingGroupProperties;
		thingGroupMetadata?: ThingGroupMetadata;
		indexName?: string;
		queryString?: string;
		queryVersion?: string;
		status?: IndexStatus;
	}
	export interface DescribeThingGroupResponseFormProperties {
		thingGroupName: FormControl<string | null | undefined>,
		thingGroupId: FormControl<string | null | undefined>,
		thingGroupArn: FormControl<string | null | undefined>,
		version: FormControl<number | null | undefined>,
		indexName: FormControl<string | null | undefined>,
		queryString: FormControl<string | null | undefined>,
		queryVersion: FormControl<string | null | undefined>,
		status: FormControl<IndexStatus | null | undefined>,
	}
	export function CreateDescribeThingGroupResponseFormGroup() {
		return new FormGroup<DescribeThingGroupResponseFormProperties>({
			thingGroupName: new FormControl<string | null | undefined>(undefined),
			thingGroupId: new FormControl<string | null | undefined>(undefined),
			thingGroupArn: new FormControl<string | null | undefined>(undefined),
			version: new FormControl<number | null | undefined>(undefined),
			indexName: new FormControl<string | null | undefined>(undefined),
			queryString: new FormControl<string | null | undefined>(undefined),
			queryVersion: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<IndexStatus | null | undefined>(undefined),
		});

	}


	/** Thing group properties. */
	export interface ThingGroupProperties {
		thingGroupDescription?: string;
		attributePayload?: AttributePayload;
	}

	/** Thing group properties. */
	export interface ThingGroupPropertiesFormProperties {
		thingGroupDescription: FormControl<string | null | undefined>,
	}
	export function CreateThingGroupPropertiesFormGroup() {
		return new FormGroup<ThingGroupPropertiesFormProperties>({
			thingGroupDescription: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Thing group metadata. */
	export interface ThingGroupMetadata {
		parentGroupName?: string;
		rootToParentThingGroups?: Array<GroupNameAndArn>;
		creationDate?: Date;
	}

	/** Thing group metadata. */
	export interface ThingGroupMetadataFormProperties {
		parentGroupName: FormControl<string | null | undefined>,
		creationDate: FormControl<Date | null | undefined>,
	}
	export function CreateThingGroupMetadataFormGroup() {
		return new FormGroup<ThingGroupMetadataFormProperties>({
			parentGroupName: new FormControl<string | null | undefined>(undefined),
			creationDate: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/** The name and ARN of a group. */
	export interface GroupNameAndArn {
		groupName?: string;
		groupArn?: string;
	}

	/** The name and ARN of a group. */
	export interface GroupNameAndArnFormProperties {
		groupName: FormControl<string | null | undefined>,
		groupArn: FormControl<string | null | undefined>,
	}
	export function CreateGroupNameAndArnFormGroup() {
		return new FormGroup<GroupNameAndArnFormProperties>({
			groupName: new FormControl<string | null | undefined>(undefined),
			groupArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeThingRegistrationTaskResponse {
		taskId?: string;
		creationDate?: Date;
		lastModifiedDate?: Date;
		templateBody?: string;
		inputFileBucket?: string;
		inputFileKey?: string;
		roleArn?: string;
		status?: Status;
		message?: string;
		successCount?: number | null;
		failureCount?: number | null;
		percentageProgress?: number | null;
	}
	export interface DescribeThingRegistrationTaskResponseFormProperties {
		taskId: FormControl<string | null | undefined>,
		creationDate: FormControl<Date | null | undefined>,
		lastModifiedDate: FormControl<Date | null | undefined>,
		templateBody: FormControl<string | null | undefined>,
		inputFileBucket: FormControl<string | null | undefined>,
		inputFileKey: FormControl<string | null | undefined>,
		roleArn: FormControl<string | null | undefined>,
		status: FormControl<Status | null | undefined>,
		message: FormControl<string | null | undefined>,
		successCount: FormControl<number | null | undefined>,
		failureCount: FormControl<number | null | undefined>,
		percentageProgress: FormControl<number | null | undefined>,
	}
	export function CreateDescribeThingRegistrationTaskResponseFormGroup() {
		return new FormGroup<DescribeThingRegistrationTaskResponseFormProperties>({
			taskId: new FormControl<string | null | undefined>(undefined),
			creationDate: new FormControl<Date | null | undefined>(undefined),
			lastModifiedDate: new FormControl<Date | null | undefined>(undefined),
			templateBody: new FormControl<string | null | undefined>(undefined),
			inputFileBucket: new FormControl<string | null | undefined>(undefined),
			inputFileKey: new FormControl<string | null | undefined>(undefined),
			roleArn: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<Status | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
			successCount: new FormControl<number | null | undefined>(undefined),
			failureCount: new FormControl<number | null | undefined>(undefined),
			percentageProgress: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum Status { InProgress = 'InProgress', Completed = 'Completed', Failed = 'Failed', Cancelled = 'Cancelled', Cancelling = 'Cancelling' }


	/** The output for the DescribeThingType operation. */
	export interface DescribeThingTypeResponse {
		thingTypeName?: string;
		thingTypeId?: string;
		thingTypeArn?: string;
		thingTypeProperties?: ThingTypeProperties;
		thingTypeMetadata?: ThingTypeMetadata;
	}

	/** The output for the DescribeThingType operation. */
	export interface DescribeThingTypeResponseFormProperties {
		thingTypeName: FormControl<string | null | undefined>,
		thingTypeId: FormControl<string | null | undefined>,
		thingTypeArn: FormControl<string | null | undefined>,
	}
	export function CreateDescribeThingTypeResponseFormGroup() {
		return new FormGroup<DescribeThingTypeResponseFormProperties>({
			thingTypeName: new FormControl<string | null | undefined>(undefined),
			thingTypeId: new FormControl<string | null | undefined>(undefined),
			thingTypeArn: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The ThingTypeProperties contains information about the thing type including: a thing type description, and a list of searchable thing attribute names. */
	export interface ThingTypeProperties {
		thingTypeDescription?: string;
		searchableAttributes?: Array<string>;
	}

	/** The ThingTypeProperties contains information about the thing type including: a thing type description, and a list of searchable thing attribute names. */
	export interface ThingTypePropertiesFormProperties {
		thingTypeDescription: FormControl<string | null | undefined>,
	}
	export function CreateThingTypePropertiesFormGroup() {
		return new FormGroup<ThingTypePropertiesFormProperties>({
			thingTypeDescription: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The ThingTypeMetadata contains additional information about the thing type including: creation date and time, a value indicating whether the thing type is deprecated, and a date and time when time was deprecated. */
	export interface ThingTypeMetadata {
		deprecated?: boolean | null;
		deprecationDate?: Date;
		creationDate?: Date;
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

	export interface GetBehaviorModelTrainingSummariesResponse {
		summaries?: Array<BehaviorModelTrainingSummary>;
		nextToken?: string;
	}
	export interface GetBehaviorModelTrainingSummariesResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateGetBehaviorModelTrainingSummariesResponseFormGroup() {
		return new FormGroup<GetBehaviorModelTrainingSummariesResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**  The summary of an ML Detect behavior model.  */
	export interface BehaviorModelTrainingSummary {
		securityProfileName?: string;
		behaviorName?: string;
		trainingDataCollectionStartDate?: Date;
		modelStatus?: ModelStatus;
		datapointsCollectionPercentage?: number | null;
		lastModelRefreshDate?: Date;
	}

	/**  The summary of an ML Detect behavior model.  */
	export interface BehaviorModelTrainingSummaryFormProperties {
		securityProfileName: FormControl<string | null | undefined>,
		behaviorName: FormControl<string | null | undefined>,
		trainingDataCollectionStartDate: FormControl<Date | null | undefined>,
		modelStatus: FormControl<ModelStatus | null | undefined>,
		datapointsCollectionPercentage: FormControl<number | null | undefined>,
		lastModelRefreshDate: FormControl<Date | null | undefined>,
	}
	export function CreateBehaviorModelTrainingSummaryFormGroup() {
		return new FormGroup<BehaviorModelTrainingSummaryFormProperties>({
			securityProfileName: new FormControl<string | null | undefined>(undefined),
			behaviorName: new FormControl<string | null | undefined>(undefined),
			trainingDataCollectionStartDate: new FormControl<Date | null | undefined>(undefined),
			modelStatus: new FormControl<ModelStatus | null | undefined>(undefined),
			datapointsCollectionPercentage: new FormControl<number | null | undefined>(undefined),
			lastModelRefreshDate: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export enum ModelStatus { PENDING_BUILD = 'PENDING_BUILD', ACTIVE = 'ACTIVE', EXPIRED = 'EXPIRED' }

	export interface GetBucketsAggregationResponse {
		totalCount?: number | null;
		buckets?: Array<Bucket>;
	}
	export interface GetBucketsAggregationResponseFormProperties {
		totalCount: FormControl<number | null | undefined>,
	}
	export function CreateGetBucketsAggregationResponseFormGroup() {
		return new FormGroup<GetBucketsAggregationResponseFormProperties>({
			totalCount: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** A count of documents that meets a specific aggregation criteria. */
	export interface Bucket {
		keyValue?: string;
		count?: number | null;
	}

	/** A count of documents that meets a specific aggregation criteria. */
	export interface BucketFormProperties {
		keyValue: FormControl<string | null | undefined>,
		count: FormControl<number | null | undefined>,
	}
	export function CreateBucketFormGroup() {
		return new FormGroup<BucketFormProperties>({
			keyValue: new FormControl<string | null | undefined>(undefined),
			count: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Performs an aggregation that will return a list of buckets. The list of buckets is a ranked list of the number of occurrences of an aggregation field value. */
	export interface TermsAggregation {
		maxBuckets?: number | null;
	}

	/** Performs an aggregation that will return a list of buckets. The list of buckets is a ranked list of the number of occurrences of an aggregation field value. */
	export interface TermsAggregationFormProperties {
		maxBuckets: FormControl<number | null | undefined>,
	}
	export function CreateTermsAggregationFormGroup() {
		return new FormGroup<TermsAggregationFormProperties>({
			maxBuckets: new FormControl<number | null | undefined>(undefined),
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
		policyName?: string;
		policyArn?: string;
		policyDocument?: string;
	}

	/** The policy that has the effect on the authorization results. */
	export interface EffectivePolicyFormProperties {
		policyName: FormControl<string | null | undefined>,
		policyArn: FormControl<string | null | undefined>,
		policyDocument: FormControl<string | null | undefined>,
	}
	export function CreateEffectivePolicyFormGroup() {
		return new FormGroup<EffectivePolicyFormProperties>({
			policyName: new FormControl<string | null | undefined>(undefined),
			policyArn: new FormControl<string | null | undefined>(undefined),
			policyDocument: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetIndexingConfigurationResponse {
		thingIndexingConfiguration?: ThingIndexingConfiguration;
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
		thingIndexingMode: ThingIndexingMode;
		thingConnectivityIndexingMode?: ThingConnectivityIndexingMode;
		deviceDefenderIndexingMode?: DeviceDefenderIndexingMode;
		namedShadowIndexingMode?: NamedShadowIndexingMode;
		managedFields?: Array<Field>;
		customFields?: Array<Field>;
		filter?: IndexingFilter;
	}

	/** The thing indexing configuration. For more information, see <a href="https://docs.aws.amazon.com/iot/latest/developerguide/managing-index.html">Managing Thing Indexing</a>. */
	export interface ThingIndexingConfigurationFormProperties {

		/** Required */
		thingIndexingMode: FormControl<ThingIndexingMode | null | undefined>,
		thingConnectivityIndexingMode: FormControl<ThingConnectivityIndexingMode | null | undefined>,
		deviceDefenderIndexingMode: FormControl<DeviceDefenderIndexingMode | null | undefined>,
		namedShadowIndexingMode: FormControl<NamedShadowIndexingMode | null | undefined>,
	}
	export function CreateThingIndexingConfigurationFormGroup() {
		return new FormGroup<ThingIndexingConfigurationFormProperties>({
			thingIndexingMode: new FormControl<ThingIndexingMode | null | undefined>(undefined, [Validators.required]),
			thingConnectivityIndexingMode: new FormControl<ThingConnectivityIndexingMode | null | undefined>(undefined),
			deviceDefenderIndexingMode: new FormControl<DeviceDefenderIndexingMode | null | undefined>(undefined),
			namedShadowIndexingMode: new FormControl<NamedShadowIndexingMode | null | undefined>(undefined),
		});

	}

	export enum ThingIndexingMode { OFF = 'OFF', REGISTRY = 'REGISTRY', REGISTRY_AND_SHADOW = 'REGISTRY_AND_SHADOW' }

	export enum ThingConnectivityIndexingMode { OFF = 'OFF', STATUS = 'STATUS' }

	export enum DeviceDefenderIndexingMode { OFF = 'OFF', VIOLATIONS = 'VIOLATIONS' }

	export enum NamedShadowIndexingMode { OFF = 'OFF', ON = 'ON' }


	/** Describes the name and data type at a field. */
	export interface Field {
		name?: string;
		type?: FieldType;
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

	export enum FieldType { Number = 'Number', String = 'String', Boolean = 'Boolean' }


	/** Provides additional filters for specific data sources. Named shadow is the only data source that currently supports and requires a filter. To add named shadows to your fleet indexing configuration, set <code>namedShadowIndexingMode</code> to be <code>ON</code> and specify your shadow names in <code>filter</code>. */
	export interface IndexingFilter {
		namedShadowNames?: Array<string>;
	}

	/** Provides additional filters for specific data sources. Named shadow is the only data source that currently supports and requires a filter. To add named shadows to your fleet indexing configuration, set <code>namedShadowIndexingMode</code> to be <code>ON</code> and specify your shadow names in <code>filter</code>. */
	export interface IndexingFilterFormProperties {
	}
	export function CreateIndexingFilterFormGroup() {
		return new FormGroup<IndexingFilterFormProperties>({
		});

	}


	/** Thing group indexing configuration. */
	export interface ThingGroupIndexingConfiguration {

		/** Required */
		thingGroupIndexingMode: NamedShadowIndexingMode;
		managedFields?: Array<Field>;
		customFields?: Array<Field>;
	}

	/** Thing group indexing configuration. */
	export interface ThingGroupIndexingConfigurationFormProperties {

		/** Required */
		thingGroupIndexingMode: FormControl<NamedShadowIndexingMode | null | undefined>,
	}
	export function CreateThingGroupIndexingConfigurationFormGroup() {
		return new FormGroup<ThingGroupIndexingConfigurationFormProperties>({
			thingGroupIndexingMode: new FormControl<NamedShadowIndexingMode | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetJobDocumentResponse {
		document?: string;
	}
	export interface GetJobDocumentResponseFormProperties {
		document: FormControl<string | null | undefined>,
	}
	export function CreateGetJobDocumentResponseFormGroup() {
		return new FormGroup<GetJobDocumentResponseFormProperties>({
			document: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The output from the GetLoggingOptions operation. */
	export interface GetLoggingOptionsResponse {
		roleArn?: string;
		logLevel?: LogLevel;
	}

	/** The output from the GetLoggingOptions operation. */
	export interface GetLoggingOptionsResponseFormProperties {
		roleArn: FormControl<string | null | undefined>,
		logLevel: FormControl<LogLevel | null | undefined>,
	}
	export function CreateGetLoggingOptionsResponseFormGroup() {
		return new FormGroup<GetLoggingOptionsResponseFormProperties>({
			roleArn: new FormControl<string | null | undefined>(undefined),
			logLevel: new FormControl<LogLevel | null | undefined>(undefined),
		});

	}

	export interface GetOTAUpdateResponse {
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
		otaUpdateId?: string;
		otaUpdateArn?: string;
		creationDate?: Date;
		lastModifiedDate?: Date;
		description?: string;
		targets?: Array<string>;
		protocols?: Array<Protocol>;
		awsJobExecutionsRolloutConfig?: AwsJobExecutionsRolloutConfig;
		awsJobPresignedUrlConfig?: AwsJobPresignedUrlConfig;
		targetSelection?: TargetSelection;
		otaUpdateFiles?: Array<OTAUpdateFile>;
		otaUpdateStatus?: OTAUpdateStatus;
		awsIotJobId?: string;
		awsIotJobArn?: string;
		errorInfo?: ErrorInfo;
		additionalParameters?: AdditionalParameterMap;
	}

	/** Information about an OTA update. */
	export interface OTAUpdateInfoFormProperties {
		otaUpdateId: FormControl<string | null | undefined>,
		otaUpdateArn: FormControl<string | null | undefined>,
		creationDate: FormControl<Date | null | undefined>,
		lastModifiedDate: FormControl<Date | null | undefined>,
		description: FormControl<string | null | undefined>,
		targetSelection: FormControl<TargetSelection | null | undefined>,
		otaUpdateStatus: FormControl<OTAUpdateStatus | null | undefined>,
		awsIotJobId: FormControl<string | null | undefined>,
		awsIotJobArn: FormControl<string | null | undefined>,
	}
	export function CreateOTAUpdateInfoFormGroup() {
		return new FormGroup<OTAUpdateInfoFormProperties>({
			otaUpdateId: new FormControl<string | null | undefined>(undefined),
			otaUpdateArn: new FormControl<string | null | undefined>(undefined),
			creationDate: new FormControl<Date | null | undefined>(undefined),
			lastModifiedDate: new FormControl<Date | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			targetSelection: new FormControl<TargetSelection | null | undefined>(undefined),
			otaUpdateStatus: new FormControl<OTAUpdateStatus | null | undefined>(undefined),
			awsIotJobId: new FormControl<string | null | undefined>(undefined),
			awsIotJobArn: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Configuration for the rollout of OTA updates. */
	export interface AwsJobExecutionsRolloutConfig {
		maximumPerMinute?: number | null;
		exponentialRate?: AwsJobExponentialRolloutRate;
	}

	/** Configuration for the rollout of OTA updates. */
	export interface AwsJobExecutionsRolloutConfigFormProperties {
		maximumPerMinute: FormControl<number | null | undefined>,
	}
	export function CreateAwsJobExecutionsRolloutConfigFormGroup() {
		return new FormGroup<AwsJobExecutionsRolloutConfigFormProperties>({
			maximumPerMinute: new FormControl<number | null | undefined>(undefined),
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
		code?: string;
		message?: string;
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

	export interface GetPackageResponse {
		packageName?: string;
		packageArn?: string;
		description?: string;
		defaultVersionName?: string;
		creationDate?: Date;
		lastModifiedDate?: Date;
	}
	export interface GetPackageResponseFormProperties {
		packageName: FormControl<string | null | undefined>,
		packageArn: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,
		defaultVersionName: FormControl<string | null | undefined>,
		creationDate: FormControl<Date | null | undefined>,
		lastModifiedDate: FormControl<Date | null | undefined>,
	}
	export function CreateGetPackageResponseFormGroup() {
		return new FormGroup<GetPackageResponseFormProperties>({
			packageName: new FormControl<string | null | undefined>(undefined),
			packageArn: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			defaultVersionName: new FormControl<string | null | undefined>(undefined),
			creationDate: new FormControl<Date | null | undefined>(undefined),
			lastModifiedDate: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface GetPackageConfigurationResponse {
		versionUpdateByJobsConfig?: VersionUpdateByJobsConfig;
	}
	export interface GetPackageConfigurationResponseFormProperties {
	}
	export function CreateGetPackageConfigurationResponseFormGroup() {
		return new FormGroup<GetPackageConfigurationResponseFormProperties>({
		});

	}


	/** <p>Configuration to manage IoT Job's package version reporting. If configured, Jobs updates the thing's reserved named shadow with the package version information up on successful job completion.</p> <p> <b>Note:</b> For each job, the destinationPackageVersions attribute has to be set with the correct data for Jobs to report to the thing shadow. </p> */
	export interface VersionUpdateByJobsConfig {
		enabled?: boolean | null;
		roleArn?: string;
	}

	/** <p>Configuration to manage IoT Job's package version reporting. If configured, Jobs updates the thing's reserved named shadow with the package version information up on successful job completion.</p> <p> <b>Note:</b> For each job, the destinationPackageVersions attribute has to be set with the correct data for Jobs to report to the thing shadow. </p> */
	export interface VersionUpdateByJobsConfigFormProperties {
		enabled: FormControl<boolean | null | undefined>,
		roleArn: FormControl<string | null | undefined>,
	}
	export function CreateVersionUpdateByJobsConfigFormGroup() {
		return new FormGroup<VersionUpdateByJobsConfigFormProperties>({
			enabled: new FormControl<boolean | null | undefined>(undefined),
			roleArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetPackageVersionResponse {
		packageVersionArn?: string;
		packageName?: string;
		versionName?: string;
		description?: string;
		attributes?: ResourceAttributes;
		status?: PackageVersionStatus;
		errorReason?: string;
		creationDate?: Date;
		lastModifiedDate?: Date;
	}
	export interface GetPackageVersionResponseFormProperties {
		packageVersionArn: FormControl<string | null | undefined>,
		packageName: FormControl<string | null | undefined>,
		versionName: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,
		status: FormControl<PackageVersionStatus | null | undefined>,
		errorReason: FormControl<string | null | undefined>,
		creationDate: FormControl<Date | null | undefined>,
		lastModifiedDate: FormControl<Date | null | undefined>,
	}
	export function CreateGetPackageVersionResponseFormGroup() {
		return new FormGroup<GetPackageVersionResponseFormProperties>({
			packageVersionArn: new FormControl<string | null | undefined>(undefined),
			packageName: new FormControl<string | null | undefined>(undefined),
			versionName: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<PackageVersionStatus | null | undefined>(undefined),
			errorReason: new FormControl<string | null | undefined>(undefined),
			creationDate: new FormControl<Date | null | undefined>(undefined),
			lastModifiedDate: new FormControl<Date | null | undefined>(undefined),
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
		percent?: number | null;
		value?: number | null;
	}

	/** Describes the percentile and percentile value. */
	export interface PercentPairFormProperties {
		percent: FormControl<number | null | undefined>,
		value: FormControl<number | null | undefined>,
	}
	export function CreatePercentPairFormGroup() {
		return new FormGroup<PercentPairFormProperties>({
			percent: new FormControl<number | null | undefined>(undefined),
			value: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** The output from the GetPolicy operation. */
	export interface GetPolicyResponse {
		policyName?: string;
		policyArn?: string;
		policyDocument?: string;
		defaultVersionId?: string;
		creationDate?: Date;
		lastModifiedDate?: Date;
		generationId?: string;
	}

	/** The output from the GetPolicy operation. */
	export interface GetPolicyResponseFormProperties {
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
			policyName: new FormControl<string | null | undefined>(undefined),
			policyArn: new FormControl<string | null | undefined>(undefined),
			policyDocument: new FormControl<string | null | undefined>(undefined),
			defaultVersionId: new FormControl<string | null | undefined>(undefined),
			creationDate: new FormControl<Date | null | undefined>(undefined),
			lastModifiedDate: new FormControl<Date | null | undefined>(undefined),
			generationId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The output from the GetPolicyVersion operation. */
	export interface GetPolicyVersionResponse {
		policyArn?: string;
		policyName?: string;
		policyDocument?: string;
		policyVersionId?: string;
		isDefaultVersion?: boolean | null;
		creationDate?: Date;
		lastModifiedDate?: Date;
		generationId?: string;
	}

	/** The output from the GetPolicyVersion operation. */
	export interface GetPolicyVersionResponseFormProperties {
		policyArn: FormControl<string | null | undefined>,
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
			policyName: new FormControl<string | null | undefined>(undefined),
			policyDocument: new FormControl<string | null | undefined>(undefined),
			policyVersionId: new FormControl<string | null | undefined>(undefined),
			isDefaultVersion: new FormControl<boolean | null | undefined>(undefined),
			creationDate: new FormControl<Date | null | undefined>(undefined),
			lastModifiedDate: new FormControl<Date | null | undefined>(undefined),
			generationId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The output from the GetRegistrationCode operation. */
	export interface GetRegistrationCodeResponse {
		registrationCode?: string;
	}

	/** The output from the GetRegistrationCode operation. */
	export interface GetRegistrationCodeResponseFormProperties {
		registrationCode: FormControl<string | null | undefined>,
	}
	export function CreateGetRegistrationCodeResponseFormGroup() {
		return new FormGroup<GetRegistrationCodeResponseFormProperties>({
			registrationCode: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetStatisticsResponse {
		statistics?: Statistics;
	}
	export interface GetStatisticsResponseFormProperties {
	}
	export function CreateGetStatisticsResponseFormGroup() {
		return new FormGroup<GetStatisticsResponseFormProperties>({
		});

	}


	/** A map of key-value pairs for all supported statistics. For issues with missing or unexpected values for this API, consult <a href="https://docs.aws.amazon.com/iot/latest/developerguide/fleet-indexing-troubleshooting.html"> Fleet indexing troubleshooting guide</a>. */
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

	/** A map of key-value pairs for all supported statistics. For issues with missing or unexpected values for this API, consult <a href="https://docs.aws.amazon.com/iot/latest/developerguide/fleet-indexing-troubleshooting.html"> Fleet indexing troubleshooting guide</a>. */
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
		ruleArn?: string;
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
		ruleName?: string;
		sql?: string;
		description?: string;
		createdAt?: Date;
		actions?: Array<Action>;
		ruleDisabled?: boolean | null;
		awsIotSqlVersion?: string;
		errorAction?: Action;
	}

	/** Describes a rule. */
	export interface TopicRuleFormProperties {
		ruleName: FormControl<string | null | undefined>,
		sql: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,
		createdAt: FormControl<Date | null | undefined>,
		ruleDisabled: FormControl<boolean | null | undefined>,
		awsIotSqlVersion: FormControl<string | null | undefined>,
	}
	export function CreateTopicRuleFormGroup() {
		return new FormGroup<TopicRuleFormProperties>({
			ruleName: new FormControl<string | null | undefined>(undefined),
			sql: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			createdAt: new FormControl<Date | null | undefined>(undefined),
			ruleDisabled: new FormControl<boolean | null | undefined>(undefined),
			awsIotSqlVersion: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetTopicRuleDestinationResponse {
		topicRuleDestination?: TopicRuleDestination;
	}
	export interface GetTopicRuleDestinationResponseFormProperties {
	}
	export function CreateGetTopicRuleDestinationResponseFormGroup() {
		return new FormGroup<GetTopicRuleDestinationResponseFormProperties>({
		});

	}

	export interface GetV2LoggingOptionsResponse {
		roleArn?: string;
		defaultLogLevel?: LogLevel;
		disableAllLogs?: boolean | null;
	}
	export interface GetV2LoggingOptionsResponseFormProperties {
		roleArn: FormControl<string | null | undefined>,
		defaultLogLevel: FormControl<LogLevel | null | undefined>,
		disableAllLogs: FormControl<boolean | null | undefined>,
	}
	export function CreateGetV2LoggingOptionsResponseFormGroup() {
		return new FormGroup<GetV2LoggingOptionsResponseFormProperties>({
			roleArn: new FormControl<string | null | undefined>(undefined),
			defaultLogLevel: new FormControl<LogLevel | null | undefined>(undefined),
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
		nextToken?: string;
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
		violationId?: string;
		thingName?: string;
		securityProfileName?: string;
		behavior?: Behavior;
		lastViolationValue?: MetricValue;
		violationEventAdditionalInfo?: ViolationEventAdditionalInfo;
		verificationState?: VerificationState;
		verificationStateDescription?: string;
		lastViolationTime?: Date;
		violationStartTime?: Date;
	}

	/** Information about an active Device Defender security profile behavior violation. */
	export interface ActiveViolationFormProperties {
		violationId: FormControl<string | null | undefined>,
		thingName: FormControl<string | null | undefined>,
		securityProfileName: FormControl<string | null | undefined>,
		verificationState: FormControl<VerificationState | null | undefined>,
		verificationStateDescription: FormControl<string | null | undefined>,
		lastViolationTime: FormControl<Date | null | undefined>,
		violationStartTime: FormControl<Date | null | undefined>,
	}
	export function CreateActiveViolationFormGroup() {
		return new FormGroup<ActiveViolationFormProperties>({
			violationId: new FormControl<string | null | undefined>(undefined),
			thingName: new FormControl<string | null | undefined>(undefined),
			securityProfileName: new FormControl<string | null | undefined>(undefined),
			verificationState: new FormControl<VerificationState | null | undefined>(undefined),
			verificationStateDescription: new FormControl<string | null | undefined>(undefined),
			lastViolationTime: new FormControl<Date | null | undefined>(undefined),
			violationStartTime: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/**  The details of a violation event.  */
	export interface ViolationEventAdditionalInfo {
		confidenceLevel?: ConfidenceLevel;
	}

	/**  The details of a violation event.  */
	export interface ViolationEventAdditionalInfoFormProperties {
		confidenceLevel: FormControl<ConfidenceLevel | null | undefined>,
	}
	export function CreateViolationEventAdditionalInfoFormGroup() {
		return new FormGroup<ViolationEventAdditionalInfoFormProperties>({
			confidenceLevel: new FormControl<ConfidenceLevel | null | undefined>(undefined),
		});

	}

	export enum VerificationState { FALSE_POSITIVE = 'FALSE_POSITIVE', BENIGN_POSITIVE = 'BENIGN_POSITIVE', TRUE_POSITIVE = 'TRUE_POSITIVE', UNKNOWN = 'UNKNOWN' }

	export interface ListAttachedPoliciesResponse {
		policies?: Array<Policy>;
		nextMarker?: string;
	}
	export interface ListAttachedPoliciesResponseFormProperties {
		nextMarker: FormControl<string | null | undefined>,
	}
	export function CreateListAttachedPoliciesResponseFormGroup() {
		return new FormGroup<ListAttachedPoliciesResponseFormProperties>({
			nextMarker: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Describes an IoT policy. */
	export interface Policy {
		policyName?: string;
		policyArn?: string;
	}

	/** Describes an IoT policy. */
	export interface PolicyFormProperties {
		policyName: FormControl<string | null | undefined>,
		policyArn: FormControl<string | null | undefined>,
	}
	export function CreatePolicyFormGroup() {
		return new FormGroup<PolicyFormProperties>({
			policyName: new FormControl<string | null | undefined>(undefined),
			policyArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListAuditFindingsResponse {
		findings?: Array<AuditFinding>;
		nextToken?: string;
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
		nextToken?: string;
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
		taskId?: string;
		findingId?: string;
		actionName?: string;
		actionId?: string;
		status?: AuditMitigationActionsExecutionStatus;
		startTime?: Date;
		endTime?: Date;
		errorCode?: string;
		message?: string;
	}

	/** Returned by ListAuditMitigationActionsTask, this object contains information that describes a mitigation action that has been started. */
	export interface AuditMitigationActionExecutionMetadataFormProperties {
		taskId: FormControl<string | null | undefined>,
		findingId: FormControl<string | null | undefined>,
		actionName: FormControl<string | null | undefined>,
		actionId: FormControl<string | null | undefined>,
		status: FormControl<AuditMitigationActionsExecutionStatus | null | undefined>,
		startTime: FormControl<Date | null | undefined>,
		endTime: FormControl<Date | null | undefined>,
		errorCode: FormControl<string | null | undefined>,
		message: FormControl<string | null | undefined>,
	}
	export function CreateAuditMitigationActionExecutionMetadataFormGroup() {
		return new FormGroup<AuditMitigationActionExecutionMetadataFormProperties>({
			taskId: new FormControl<string | null | undefined>(undefined),
			findingId: new FormControl<string | null | undefined>(undefined),
			actionName: new FormControl<string | null | undefined>(undefined),
			actionId: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<AuditMitigationActionsExecutionStatus | null | undefined>(undefined),
			startTime: new FormControl<Date | null | undefined>(undefined),
			endTime: new FormControl<Date | null | undefined>(undefined),
			errorCode: new FormControl<string | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum AuditMitigationActionsExecutionStatus { IN_PROGRESS = 'IN_PROGRESS', COMPLETED = 'COMPLETED', FAILED = 'FAILED', CANCELED = 'CANCELED', SKIPPED = 'SKIPPED', PENDING = 'PENDING' }

	export interface ListAuditMitigationActionsTasksResponse {
		tasks?: Array<AuditMitigationActionsTaskMetadata>;
		nextToken?: string;
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
		taskId?: string;
		startTime?: Date;
		taskStatus?: AuditMitigationActionsTaskStatus;
	}

	/** Information about an audit mitigation actions task that is returned by <code>ListAuditMitigationActionsTasks</code>. */
	export interface AuditMitigationActionsTaskMetadataFormProperties {
		taskId: FormControl<string | null | undefined>,
		startTime: FormControl<Date | null | undefined>,
		taskStatus: FormControl<AuditMitigationActionsTaskStatus | null | undefined>,
	}
	export function CreateAuditMitigationActionsTaskMetadataFormGroup() {
		return new FormGroup<AuditMitigationActionsTaskMetadataFormProperties>({
			taskId: new FormControl<string | null | undefined>(undefined),
			startTime: new FormControl<Date | null | undefined>(undefined),
			taskStatus: new FormControl<AuditMitigationActionsTaskStatus | null | undefined>(undefined),
		});

	}

	export interface ListAuditSuppressionsResponse {
		suppressions?: Array<AuditSuppression>;
		nextToken?: string;
	}
	export interface ListAuditSuppressionsResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListAuditSuppressionsResponseFormGroup() {
		return new FormGroup<ListAuditSuppressionsResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**  Filters out specific findings of a Device Defender audit.  */
	export interface AuditSuppression {

		/**
		 * An audit check name. Checks must be enabled for your account. (Use <code>DescribeAccountAuditConfiguration</code> to see the list of all checks, including those that are enabled or use <code>UpdateAccountAuditConfiguration</code> to select which checks are enabled.)
		 * Required
		 */
		checkName: string;

		/**
		 * Information that identifies the noncompliant resource.
		 * Required
		 */
		resourceIdentifier: ResourceIdentifier;
		expirationDate?: Date;
		suppressIndefinitely?: boolean | null;
		description?: string;
	}

	/**  Filters out specific findings of a Device Defender audit.  */
	export interface AuditSuppressionFormProperties {

		/**
		 * An audit check name. Checks must be enabled for your account. (Use <code>DescribeAccountAuditConfiguration</code> to see the list of all checks, including those that are enabled or use <code>UpdateAccountAuditConfiguration</code> to select which checks are enabled.)
		 * Required
		 */
		checkName: FormControl<string | null | undefined>,
		expirationDate: FormControl<Date | null | undefined>,
		suppressIndefinitely: FormControl<boolean | null | undefined>,
		description: FormControl<string | null | undefined>,
	}
	export function CreateAuditSuppressionFormGroup() {
		return new FormGroup<AuditSuppressionFormProperties>({
			checkName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			expirationDate: new FormControl<Date | null | undefined>(undefined),
			suppressIndefinitely: new FormControl<boolean | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListAuditTasksResponse {
		tasks?: Array<AuditTaskMetadata>;
		nextToken?: string;
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
		taskId?: string;
		taskStatus?: AuditMitigationActionsTaskStatus;
		taskType?: AuditTaskType;
	}

	/** The audits that were performed. */
	export interface AuditTaskMetadataFormProperties {
		taskId: FormControl<string | null | undefined>,
		taskStatus: FormControl<AuditMitigationActionsTaskStatus | null | undefined>,
		taskType: FormControl<AuditTaskType | null | undefined>,
	}
	export function CreateAuditTaskMetadataFormGroup() {
		return new FormGroup<AuditTaskMetadataFormProperties>({
			taskId: new FormControl<string | null | undefined>(undefined),
			taskStatus: new FormControl<AuditMitigationActionsTaskStatus | null | undefined>(undefined),
			taskType: new FormControl<AuditTaskType | null | undefined>(undefined),
		});

	}

	export interface ListAuthorizersResponse {
		authorizers?: Array<AuthorizerSummary>;
		nextMarker?: string;
	}
	export interface ListAuthorizersResponseFormProperties {
		nextMarker: FormControl<string | null | undefined>,
	}
	export function CreateListAuthorizersResponseFormGroup() {
		return new FormGroup<ListAuthorizersResponseFormProperties>({
			nextMarker: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The authorizer summary. */
	export interface AuthorizerSummary {
		authorizerName?: string;
		authorizerArn?: string;
	}

	/** The authorizer summary. */
	export interface AuthorizerSummaryFormProperties {
		authorizerName: FormControl<string | null | undefined>,
		authorizerArn: FormControl<string | null | undefined>,
	}
	export function CreateAuthorizerSummaryFormGroup() {
		return new FormGroup<AuthorizerSummaryFormProperties>({
			authorizerName: new FormControl<string | null | undefined>(undefined),
			authorizerArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListBillingGroupsResponse {
		billingGroups?: Array<GroupNameAndArn>;
		nextToken?: string;
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
		nextMarker?: string;
	}

	/** The output from the ListCACertificates operation. */
	export interface ListCACertificatesResponseFormProperties {
		nextMarker: FormControl<string | null | undefined>,
	}
	export function CreateListCACertificatesResponseFormGroup() {
		return new FormGroup<ListCACertificatesResponseFormProperties>({
			nextMarker: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A CA certificate. */
	export interface CACertificate {
		certificateArn?: string;
		certificateId?: string;
		status?: AuthorizerStatus;
		creationDate?: Date;
	}

	/** A CA certificate. */
	export interface CACertificateFormProperties {
		certificateArn: FormControl<string | null | undefined>,
		certificateId: FormControl<string | null | undefined>,
		status: FormControl<AuthorizerStatus | null | undefined>,
		creationDate: FormControl<Date | null | undefined>,
	}
	export function CreateCACertificateFormGroup() {
		return new FormGroup<CACertificateFormProperties>({
			certificateArn: new FormControl<string | null | undefined>(undefined),
			certificateId: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<AuthorizerStatus | null | undefined>(undefined),
			creationDate: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/** The output of the ListCertificates operation. */
	export interface ListCertificatesResponse {
		certificates?: Array<Certificate>;
		nextMarker?: string;
	}

	/** The output of the ListCertificates operation. */
	export interface ListCertificatesResponseFormProperties {
		nextMarker: FormControl<string | null | undefined>,
	}
	export function CreateListCertificatesResponseFormGroup() {
		return new FormGroup<ListCertificatesResponseFormProperties>({
			nextMarker: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Information about a certificate. */
	export interface Certificate {
		certificateArn?: string;
		certificateId?: string;
		status?: CertificateStatus;
		certificateMode?: CertificateMode;
		creationDate?: Date;
	}

	/** Information about a certificate. */
	export interface CertificateFormProperties {
		certificateArn: FormControl<string | null | undefined>,
		certificateId: FormControl<string | null | undefined>,
		status: FormControl<CertificateStatus | null | undefined>,
		certificateMode: FormControl<CertificateMode | null | undefined>,
		creationDate: FormControl<Date | null | undefined>,
	}
	export function CreateCertificateFormGroup() {
		return new FormGroup<CertificateFormProperties>({
			certificateArn: new FormControl<string | null | undefined>(undefined),
			certificateId: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<CertificateStatus | null | undefined>(undefined),
			certificateMode: new FormControl<CertificateMode | null | undefined>(undefined),
			creationDate: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/** The output of the ListCertificatesByCA operation. */
	export interface ListCertificatesByCAResponse {
		certificates?: Array<Certificate>;
		nextMarker?: string;
	}

	/** The output of the ListCertificatesByCA operation. */
	export interface ListCertificatesByCAResponseFormProperties {
		nextMarker: FormControl<string | null | undefined>,
	}
	export function CreateListCertificatesByCAResponseFormGroup() {
		return new FormGroup<ListCertificatesByCAResponseFormProperties>({
			nextMarker: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListCustomMetricsResponse {
		metricNames?: Array<string>;
		nextToken?: string;
	}
	export interface ListCustomMetricsResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListCustomMetricsResponseFormGroup() {
		return new FormGroup<ListCustomMetricsResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListDetectMitigationActionsExecutionsResponse {
		actionsExecutions?: Array<DetectMitigationActionExecution>;
		nextToken?: string;
	}
	export interface ListDetectMitigationActionsExecutionsResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListDetectMitigationActionsExecutionsResponseFormGroup() {
		return new FormGroup<ListDetectMitigationActionsExecutionsResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**  Describes which mitigation actions should be executed.  */
	export interface DetectMitigationActionExecution {
		taskId?: string;
		violationId?: string;
		actionName?: string;
		thingName?: string;
		executionStartDate?: Date;
		executionEndDate?: Date;
		status?: DetectMitigationActionExecutionStatus;
		errorCode?: string;
		message?: string;
	}

	/**  Describes which mitigation actions should be executed.  */
	export interface DetectMitigationActionExecutionFormProperties {
		taskId: FormControl<string | null | undefined>,
		violationId: FormControl<string | null | undefined>,
		actionName: FormControl<string | null | undefined>,
		thingName: FormControl<string | null | undefined>,
		executionStartDate: FormControl<Date | null | undefined>,
		executionEndDate: FormControl<Date | null | undefined>,
		status: FormControl<DetectMitigationActionExecutionStatus | null | undefined>,
		errorCode: FormControl<string | null | undefined>,
		message: FormControl<string | null | undefined>,
	}
	export function CreateDetectMitigationActionExecutionFormGroup() {
		return new FormGroup<DetectMitigationActionExecutionFormProperties>({
			taskId: new FormControl<string | null | undefined>(undefined),
			violationId: new FormControl<string | null | undefined>(undefined),
			actionName: new FormControl<string | null | undefined>(undefined),
			thingName: new FormControl<string | null | undefined>(undefined),
			executionStartDate: new FormControl<Date | null | undefined>(undefined),
			executionEndDate: new FormControl<Date | null | undefined>(undefined),
			status: new FormControl<DetectMitigationActionExecutionStatus | null | undefined>(undefined),
			errorCode: new FormControl<string | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum DetectMitigationActionExecutionStatus { IN_PROGRESS = 'IN_PROGRESS', SUCCESSFUL = 'SUCCESSFUL', FAILED = 'FAILED', SKIPPED = 'SKIPPED' }

	export interface ListDetectMitigationActionsTasksResponse {
		tasks?: Array<DetectMitigationActionsTaskSummary>;
		nextToken?: string;
	}
	export interface ListDetectMitigationActionsTasksResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListDetectMitigationActionsTasksResponseFormGroup() {
		return new FormGroup<ListDetectMitigationActionsTasksResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListDimensionsResponse {
		dimensionNames?: Array<string>;
		nextToken?: string;
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
		nextMarker?: string;
	}
	export interface ListDomainConfigurationsResponseFormProperties {
		nextMarker: FormControl<string | null | undefined>,
	}
	export function CreateListDomainConfigurationsResponseFormGroup() {
		return new FormGroup<ListDomainConfigurationsResponseFormProperties>({
			nextMarker: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** <p>The summary of a domain configuration. A domain configuration specifies custom IoT-specific information about a domain. A domain configuration can be associated with an Amazon Web Services-managed domain (for example, dbc123defghijk.iot.us-west-2.amazonaws.com), a customer managed domain, or a default endpoint.</p> <ul> <li> <p>Data</p> </li> <li> <p>Jobs</p> </li> <li> <p>CredentialProvider</p> </li> </ul> */
	export interface DomainConfigurationSummary {
		domainConfigurationName?: string;
		domainConfigurationArn?: string;
		serviceType?: ServiceType;
	}

	/** <p>The summary of a domain configuration. A domain configuration specifies custom IoT-specific information about a domain. A domain configuration can be associated with an Amazon Web Services-managed domain (for example, dbc123defghijk.iot.us-west-2.amazonaws.com), a customer managed domain, or a default endpoint.</p> <ul> <li> <p>Data</p> </li> <li> <p>Jobs</p> </li> <li> <p>CredentialProvider</p> </li> </ul> */
	export interface DomainConfigurationSummaryFormProperties {
		domainConfigurationName: FormControl<string | null | undefined>,
		domainConfigurationArn: FormControl<string | null | undefined>,
		serviceType: FormControl<ServiceType | null | undefined>,
	}
	export function CreateDomainConfigurationSummaryFormGroup() {
		return new FormGroup<DomainConfigurationSummaryFormProperties>({
			domainConfigurationName: new FormControl<string | null | undefined>(undefined),
			domainConfigurationArn: new FormControl<string | null | undefined>(undefined),
			serviceType: new FormControl<ServiceType | null | undefined>(undefined),
		});

	}

	export interface ListFleetMetricsResponse {
		fleetMetrics?: Array<FleetMetricNameAndArn>;
		nextToken?: string;
	}
	export interface ListFleetMetricsResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListFleetMetricsResponseFormGroup() {
		return new FormGroup<ListFleetMetricsResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The name and ARN of a fleet metric. */
	export interface FleetMetricNameAndArn {
		metricName?: string;
		metricArn?: string;
	}

	/** The name and ARN of a fleet metric. */
	export interface FleetMetricNameAndArnFormProperties {
		metricName: FormControl<string | null | undefined>,
		metricArn: FormControl<string | null | undefined>,
	}
	export function CreateFleetMetricNameAndArnFormGroup() {
		return new FormGroup<FleetMetricNameAndArnFormProperties>({
			metricName: new FormControl<string | null | undefined>(undefined),
			metricArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListIndicesResponse {
		indexNames?: Array<string>;
		nextToken?: string;
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
		nextToken?: string;
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
		thingArn?: string;
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
		status?: JobExecutionStatus;
		queuedAt?: Date;
		startedAt?: Date;
		lastUpdatedAt?: Date;
		executionNumber?: number | null;
		retryAttempt?: number | null;
	}

	/** The job execution summary. */
	export interface JobExecutionSummaryFormProperties {
		status: FormControl<JobExecutionStatus | null | undefined>,
		queuedAt: FormControl<Date | null | undefined>,
		startedAt: FormControl<Date | null | undefined>,
		lastUpdatedAt: FormControl<Date | null | undefined>,
		executionNumber: FormControl<number | null | undefined>,
		retryAttempt: FormControl<number | null | undefined>,
	}
	export function CreateJobExecutionSummaryFormGroup() {
		return new FormGroup<JobExecutionSummaryFormProperties>({
			status: new FormControl<JobExecutionStatus | null | undefined>(undefined),
			queuedAt: new FormControl<Date | null | undefined>(undefined),
			startedAt: new FormControl<Date | null | undefined>(undefined),
			lastUpdatedAt: new FormControl<Date | null | undefined>(undefined),
			executionNumber: new FormControl<number | null | undefined>(undefined),
			retryAttempt: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ListJobExecutionsForThingResponse {
		executionSummaries?: Array<JobExecutionSummaryForThing>;
		nextToken?: string;
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
		jobId?: string;
		jobExecutionSummary?: JobExecutionSummary;
	}

	/** The job execution summary for a thing. */
	export interface JobExecutionSummaryForThingFormProperties {
		jobId: FormControl<string | null | undefined>,
	}
	export function CreateJobExecutionSummaryForThingFormGroup() {
		return new FormGroup<JobExecutionSummaryForThingFormProperties>({
			jobId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListJobTemplatesResponse {
		jobTemplates?: Array<JobTemplateSummary>;
		nextToken?: string;
	}
	export interface ListJobTemplatesResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListJobTemplatesResponseFormGroup() {
		return new FormGroup<ListJobTemplatesResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An object that contains information about the job template. */
	export interface JobTemplateSummary {
		jobTemplateArn?: string;
		jobTemplateId?: string;
		description?: string;
		createdAt?: Date;
	}

	/** An object that contains information about the job template. */
	export interface JobTemplateSummaryFormProperties {
		jobTemplateArn: FormControl<string | null | undefined>,
		jobTemplateId: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,
		createdAt: FormControl<Date | null | undefined>,
	}
	export function CreateJobTemplateSummaryFormGroup() {
		return new FormGroup<JobTemplateSummaryFormProperties>({
			jobTemplateArn: new FormControl<string | null | undefined>(undefined),
			jobTemplateId: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			createdAt: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface ListJobsResponse {
		jobs?: Array<JobSummary>;
		nextToken?: string;
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
		jobArn?: string;
		jobId?: string;
		thingGroupId?: string;
		targetSelection?: TargetSelection;
		status?: JobStatus;
		createdAt?: Date;
		lastUpdatedAt?: Date;
		completedAt?: Date;
		isConcurrent?: boolean | null;
	}

	/** The job summary. */
	export interface JobSummaryFormProperties {
		jobArn: FormControl<string | null | undefined>,
		jobId: FormControl<string | null | undefined>,
		thingGroupId: FormControl<string | null | undefined>,
		targetSelection: FormControl<TargetSelection | null | undefined>,
		status: FormControl<JobStatus | null | undefined>,
		createdAt: FormControl<Date | null | undefined>,
		lastUpdatedAt: FormControl<Date | null | undefined>,
		completedAt: FormControl<Date | null | undefined>,
		isConcurrent: FormControl<boolean | null | undefined>,
	}
	export function CreateJobSummaryFormGroup() {
		return new FormGroup<JobSummaryFormProperties>({
			jobArn: new FormControl<string | null | undefined>(undefined),
			jobId: new FormControl<string | null | undefined>(undefined),
			thingGroupId: new FormControl<string | null | undefined>(undefined),
			targetSelection: new FormControl<TargetSelection | null | undefined>(undefined),
			status: new FormControl<JobStatus | null | undefined>(undefined),
			createdAt: new FormControl<Date | null | undefined>(undefined),
			lastUpdatedAt: new FormControl<Date | null | undefined>(undefined),
			completedAt: new FormControl<Date | null | undefined>(undefined),
			isConcurrent: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface ListManagedJobTemplatesResponse {
		managedJobTemplates?: Array<ManagedJobTemplateSummary>;
		nextToken?: string;
	}
	export interface ListManagedJobTemplatesResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListManagedJobTemplatesResponseFormGroup() {
		return new FormGroup<ListManagedJobTemplatesResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An object that contains information about the managed template. */
	export interface ManagedJobTemplateSummary {
		templateArn?: string;
		templateName?: string;
		description?: string;
		environments?: Array<string>;
		templateVersion?: string;
	}

	/** An object that contains information about the managed template. */
	export interface ManagedJobTemplateSummaryFormProperties {
		templateArn: FormControl<string | null | undefined>,
		templateName: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,
		templateVersion: FormControl<string | null | undefined>,
	}
	export function CreateManagedJobTemplateSummaryFormGroup() {
		return new FormGroup<ManagedJobTemplateSummaryFormProperties>({
			templateArn: new FormControl<string | null | undefined>(undefined),
			templateName: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			templateVersion: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListMetricValuesResponse {
		metricDatumList?: Array<MetricDatum>;
		nextToken?: string;
	}
	export interface ListMetricValuesResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListMetricValuesResponseFormGroup() {
		return new FormGroup<ListMetricValuesResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A metric. */
	export interface MetricDatum {
		timestamp?: Date;
		value?: MetricValue;
	}

	/** A metric. */
	export interface MetricDatumFormProperties {
		timestamp: FormControl<Date | null | undefined>,
	}
	export function CreateMetricDatumFormGroup() {
		return new FormGroup<MetricDatumFormProperties>({
			timestamp: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface ListMitigationActionsResponse {
		actionIdentifiers?: Array<MitigationActionIdentifier>;
		nextToken?: string;
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
		actionName?: string;
		actionArn?: string;
		creationDate?: Date;
	}

	/** Information that identifies a mitigation action. This information is returned by ListMitigationActions. */
	export interface MitigationActionIdentifierFormProperties {
		actionName: FormControl<string | null | undefined>,
		actionArn: FormControl<string | null | undefined>,
		creationDate: FormControl<Date | null | undefined>,
	}
	export function CreateMitigationActionIdentifierFormGroup() {
		return new FormGroup<MitigationActionIdentifierFormProperties>({
			actionName: new FormControl<string | null | undefined>(undefined),
			actionArn: new FormControl<string | null | undefined>(undefined),
			creationDate: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface ListOTAUpdatesResponse {
		otaUpdates?: Array<OTAUpdateSummary>;
		nextToken?: string;
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
		otaUpdateId?: string;
		otaUpdateArn?: string;
		creationDate?: Date;
	}

	/** An OTA update summary. */
	export interface OTAUpdateSummaryFormProperties {
		otaUpdateId: FormControl<string | null | undefined>,
		otaUpdateArn: FormControl<string | null | undefined>,
		creationDate: FormControl<Date | null | undefined>,
	}
	export function CreateOTAUpdateSummaryFormGroup() {
		return new FormGroup<OTAUpdateSummaryFormProperties>({
			otaUpdateId: new FormControl<string | null | undefined>(undefined),
			otaUpdateArn: new FormControl<string | null | undefined>(undefined),
			creationDate: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/** The output from the ListOutgoingCertificates operation. */
	export interface ListOutgoingCertificatesResponse {
		outgoingCertificates?: Array<OutgoingCertificate>;
		nextMarker?: string;
	}

	/** The output from the ListOutgoingCertificates operation. */
	export interface ListOutgoingCertificatesResponseFormProperties {
		nextMarker: FormControl<string | null | undefined>,
	}
	export function CreateListOutgoingCertificatesResponseFormGroup() {
		return new FormGroup<ListOutgoingCertificatesResponseFormProperties>({
			nextMarker: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A certificate that has been transferred but not yet accepted. */
	export interface OutgoingCertificate {
		certificateArn?: string;
		certificateId?: string;
		transferredTo?: string;
		transferDate?: Date;
		transferMessage?: string;
		creationDate?: Date;
	}

	/** A certificate that has been transferred but not yet accepted. */
	export interface OutgoingCertificateFormProperties {
		certificateArn: FormControl<string | null | undefined>,
		certificateId: FormControl<string | null | undefined>,
		transferredTo: FormControl<string | null | undefined>,
		transferDate: FormControl<Date | null | undefined>,
		transferMessage: FormControl<string | null | undefined>,
		creationDate: FormControl<Date | null | undefined>,
	}
	export function CreateOutgoingCertificateFormGroup() {
		return new FormGroup<OutgoingCertificateFormProperties>({
			certificateArn: new FormControl<string | null | undefined>(undefined),
			certificateId: new FormControl<string | null | undefined>(undefined),
			transferredTo: new FormControl<string | null | undefined>(undefined),
			transferDate: new FormControl<Date | null | undefined>(undefined),
			transferMessage: new FormControl<string | null | undefined>(undefined),
			creationDate: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface ListPackageVersionsResponse {
		packageVersionSummaries?: Array<PackageVersionSummary>;
		nextToken?: string;
	}
	export interface ListPackageVersionsResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListPackageVersionsResponseFormGroup() {
		return new FormGroup<ListPackageVersionsResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A summary of information about a package version. */
	export interface PackageVersionSummary {
		packageName?: string;
		versionName?: string;
		status?: PackageVersionStatus;
		creationDate?: Date;
		lastModifiedDate?: Date;
	}

	/** A summary of information about a package version. */
	export interface PackageVersionSummaryFormProperties {
		packageName: FormControl<string | null | undefined>,
		versionName: FormControl<string | null | undefined>,
		status: FormControl<PackageVersionStatus | null | undefined>,
		creationDate: FormControl<Date | null | undefined>,
		lastModifiedDate: FormControl<Date | null | undefined>,
	}
	export function CreatePackageVersionSummaryFormGroup() {
		return new FormGroup<PackageVersionSummaryFormProperties>({
			packageName: new FormControl<string | null | undefined>(undefined),
			versionName: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<PackageVersionStatus | null | undefined>(undefined),
			creationDate: new FormControl<Date | null | undefined>(undefined),
			lastModifiedDate: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface ListPackagesResponse {
		packageSummaries?: Array<PackageSummary>;
		nextToken?: string;
	}
	export interface ListPackagesResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListPackagesResponseFormGroup() {
		return new FormGroup<ListPackagesResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A summary of information about a software package. */
	export interface PackageSummary {
		packageName?: string;
		defaultVersionName?: string;
		creationDate?: Date;
		lastModifiedDate?: Date;
	}

	/** A summary of information about a software package. */
	export interface PackageSummaryFormProperties {
		packageName: FormControl<string | null | undefined>,
		defaultVersionName: FormControl<string | null | undefined>,
		creationDate: FormControl<Date | null | undefined>,
		lastModifiedDate: FormControl<Date | null | undefined>,
	}
	export function CreatePackageSummaryFormGroup() {
		return new FormGroup<PackageSummaryFormProperties>({
			packageName: new FormControl<string | null | undefined>(undefined),
			defaultVersionName: new FormControl<string | null | undefined>(undefined),
			creationDate: new FormControl<Date | null | undefined>(undefined),
			lastModifiedDate: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/** The output from the ListPolicies operation. */
	export interface ListPoliciesResponse {
		policies?: Array<Policy>;
		nextMarker?: string;
	}

	/** The output from the ListPolicies operation. */
	export interface ListPoliciesResponseFormProperties {
		nextMarker: FormControl<string | null | undefined>,
	}
	export function CreateListPoliciesResponseFormGroup() {
		return new FormGroup<ListPoliciesResponseFormProperties>({
			nextMarker: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The output from the ListPolicyPrincipals operation. */
	export interface ListPolicyPrincipalsResponse {
		principals?: Array<string>;
		nextMarker?: string;
	}

	/** The output from the ListPolicyPrincipals operation. */
	export interface ListPolicyPrincipalsResponseFormProperties {
		nextMarker: FormControl<string | null | undefined>,
	}
	export function CreateListPolicyPrincipalsResponseFormGroup() {
		return new FormGroup<ListPolicyPrincipalsResponseFormProperties>({
			nextMarker: new FormControl<string | null | undefined>(undefined),
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
		versionId?: string;
		isDefaultVersion?: boolean | null;
		createDate?: Date;
	}

	/** Describes a policy version. */
	export interface PolicyVersionFormProperties {
		versionId: FormControl<string | null | undefined>,
		isDefaultVersion: FormControl<boolean | null | undefined>,
		createDate: FormControl<Date | null | undefined>,
	}
	export function CreatePolicyVersionFormGroup() {
		return new FormGroup<PolicyVersionFormProperties>({
			versionId: new FormControl<string | null | undefined>(undefined),
			isDefaultVersion: new FormControl<boolean | null | undefined>(undefined),
			createDate: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/** The output from the ListPrincipalPolicies operation. */
	export interface ListPrincipalPoliciesResponse {
		policies?: Array<Policy>;
		nextMarker?: string;
	}

	/** The output from the ListPrincipalPolicies operation. */
	export interface ListPrincipalPoliciesResponseFormProperties {
		nextMarker: FormControl<string | null | undefined>,
	}
	export function CreateListPrincipalPoliciesResponseFormGroup() {
		return new FormGroup<ListPrincipalPoliciesResponseFormProperties>({
			nextMarker: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The output from the ListPrincipalThings operation. */
	export interface ListPrincipalThingsResponse {
		things?: Array<string>;
		nextToken?: string;
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
		nextToken?: string;
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
		creationDate?: Date;
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
		nextToken?: string;
	}
	export interface ListProvisioningTemplatesResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListProvisioningTemplatesResponseFormGroup() {
		return new FormGroup<ListProvisioningTemplatesResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A summary of information about a provisioning template. */
	export interface ProvisioningTemplateSummary {
		templateArn?: string;
		templateName?: string;
		description?: string;
		creationDate?: Date;
		lastModifiedDate?: Date;
		enabled?: boolean | null;
		type?: TemplateType;
	}

	/** A summary of information about a provisioning template. */
	export interface ProvisioningTemplateSummaryFormProperties {
		templateArn: FormControl<string | null | undefined>,
		templateName: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,
		creationDate: FormControl<Date | null | undefined>,
		lastModifiedDate: FormControl<Date | null | undefined>,
		enabled: FormControl<boolean | null | undefined>,
		type: FormControl<TemplateType | null | undefined>,
	}
	export function CreateProvisioningTemplateSummaryFormGroup() {
		return new FormGroup<ProvisioningTemplateSummaryFormProperties>({
			templateArn: new FormControl<string | null | undefined>(undefined),
			templateName: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			creationDate: new FormControl<Date | null | undefined>(undefined),
			lastModifiedDate: new FormControl<Date | null | undefined>(undefined),
			enabled: new FormControl<boolean | null | undefined>(undefined),
			type: new FormControl<TemplateType | null | undefined>(undefined),
		});

	}

	export interface ListRelatedResourcesForAuditFindingResponse {
		relatedResources?: Array<RelatedResource>;
		nextToken?: string;
	}
	export interface ListRelatedResourcesForAuditFindingResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListRelatedResourcesForAuditFindingResponseFormGroup() {
		return new FormGroup<ListRelatedResourcesForAuditFindingResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListRoleAliasesResponse {
		roleAliases?: Array<string>;
		nextMarker?: string;
	}
	export interface ListRoleAliasesResponseFormProperties {
		nextMarker: FormControl<string | null | undefined>,
	}
	export function CreateListRoleAliasesResponseFormGroup() {
		return new FormGroup<ListRoleAliasesResponseFormProperties>({
			nextMarker: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListScheduledAuditsResponse {
		scheduledAudits?: Array<ScheduledAuditMetadata>;
		nextToken?: string;
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
		scheduledAuditName?: string;
		scheduledAuditArn?: string;
		frequency?: AuditFrequency;
		dayOfMonth?: string;
		dayOfWeek?: DayOfWeek;
	}

	/** Information about the scheduled audit. */
	export interface ScheduledAuditMetadataFormProperties {
		scheduledAuditName: FormControl<string | null | undefined>,
		scheduledAuditArn: FormControl<string | null | undefined>,
		frequency: FormControl<AuditFrequency | null | undefined>,
		dayOfMonth: FormControl<string | null | undefined>,
		dayOfWeek: FormControl<DayOfWeek | null | undefined>,
	}
	export function CreateScheduledAuditMetadataFormGroup() {
		return new FormGroup<ScheduledAuditMetadataFormProperties>({
			scheduledAuditName: new FormControl<string | null | undefined>(undefined),
			scheduledAuditArn: new FormControl<string | null | undefined>(undefined),
			frequency: new FormControl<AuditFrequency | null | undefined>(undefined),
			dayOfMonth: new FormControl<string | null | undefined>(undefined),
			dayOfWeek: new FormControl<DayOfWeek | null | undefined>(undefined),
		});

	}

	export interface ListSecurityProfilesResponse {
		securityProfileIdentifiers?: Array<SecurityProfileIdentifier>;
		nextToken?: string;
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

		/** Required */
		name: string;

		/** Required */
		arn: string;
	}

	/** Identifying information for a Device Defender security profile. */
	export interface SecurityProfileIdentifierFormProperties {

		/** Required */
		name: FormControl<string | null | undefined>,

		/** Required */
		arn: FormControl<string | null | undefined>,
	}
	export function CreateSecurityProfileIdentifierFormGroup() {
		return new FormGroup<SecurityProfileIdentifierFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			arn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ListSecurityProfilesForTargetResponse {
		securityProfileTargetMappings?: Array<SecurityProfileTargetMapping>;
		nextToken?: string;
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
		securityProfileIdentifier?: SecurityProfileIdentifier;
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
		nextToken?: string;
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
		streamId?: string;
		streamArn?: string;
		streamVersion?: number | null;
		description?: string;
	}

	/** A summary of a stream. */
	export interface StreamSummaryFormProperties {
		streamId: FormControl<string | null | undefined>,
		streamArn: FormControl<string | null | undefined>,
		streamVersion: FormControl<number | null | undefined>,
		description: FormControl<string | null | undefined>,
	}
	export function CreateStreamSummaryFormGroup() {
		return new FormGroup<StreamSummaryFormProperties>({
			streamId: new FormControl<string | null | undefined>(undefined),
			streamArn: new FormControl<string | null | undefined>(undefined),
			streamVersion: new FormControl<number | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListTagsForResourceResponse {
		tags?: Array<Tag>;
		nextToken?: string;
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
		nextMarker?: string;
	}
	export interface ListTargetsForPolicyResponseFormProperties {
		nextMarker: FormControl<string | null | undefined>,
	}
	export function CreateListTargetsForPolicyResponseFormGroup() {
		return new FormGroup<ListTargetsForPolicyResponseFormProperties>({
			nextMarker: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListTargetsForSecurityProfileResponse {
		securityProfileTargets?: Array<SecurityProfileTarget>;
		nextToken?: string;
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
		nextToken?: string;
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
		nextToken?: string;
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
		nextToken?: string;
	}

	/** The output from the ListThingPrincipals operation. */
	export interface ListThingPrincipalsResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListThingPrincipalsResponseFormGroup() {
		return new FormGroup<ListThingPrincipalsResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListThingRegistrationTaskReportsResponse {
		resourceLinks?: Array<string>;
		reportType?: ReportType;
		nextToken?: string;
	}
	export interface ListThingRegistrationTaskReportsResponseFormProperties {
		reportType: FormControl<ReportType | null | undefined>,
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListThingRegistrationTaskReportsResponseFormGroup() {
		return new FormGroup<ListThingRegistrationTaskReportsResponseFormProperties>({
			reportType: new FormControl<ReportType | null | undefined>(undefined),
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ReportType { ERRORS = 'ERRORS', RESULTS = 'RESULTS' }

	export interface ListThingRegistrationTasksResponse {
		taskIds?: Array<string>;
		nextToken?: string;
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
		nextToken?: string;
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
		thingTypeName?: string;
		thingTypeArn?: string;
		thingTypeProperties?: ThingTypeProperties;
		thingTypeMetadata?: ThingTypeMetadata;
	}

	/** The definition of the thing type, including thing type name and description. */
	export interface ThingTypeDefinitionFormProperties {
		thingTypeName: FormControl<string | null | undefined>,
		thingTypeArn: FormControl<string | null | undefined>,
	}
	export function CreateThingTypeDefinitionFormGroup() {
		return new FormGroup<ThingTypeDefinitionFormProperties>({
			thingTypeName: new FormControl<string | null | undefined>(undefined),
			thingTypeArn: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The output from the ListThings operation. */
	export interface ListThingsResponse {
		things?: Array<ThingAttribute>;
		nextToken?: string;
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
		thingName?: string;
		thingTypeName?: string;
		thingArn?: string;
		attributes?: Attributes;
		version?: number | null;
	}

	/** The properties of the thing, including thing name, thing type name, and a list of thing attributes. */
	export interface ThingAttributeFormProperties {
		thingName: FormControl<string | null | undefined>,
		thingTypeName: FormControl<string | null | undefined>,
		thingArn: FormControl<string | null | undefined>,
		version: FormControl<number | null | undefined>,
	}
	export function CreateThingAttributeFormGroup() {
		return new FormGroup<ThingAttributeFormProperties>({
			thingName: new FormControl<string | null | undefined>(undefined),
			thingTypeName: new FormControl<string | null | undefined>(undefined),
			thingArn: new FormControl<string | null | undefined>(undefined),
			version: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ListThingsInBillingGroupResponse {
		things?: Array<string>;
		nextToken?: string;
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
		nextToken?: string;
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
		nextToken?: string;
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
		arn?: string;
		status?: TopicRuleDestinationStatus;
		createdAt?: Date;
		lastUpdatedAt?: Date;
		statusReason?: string;
		httpUrlSummary?: HttpUrlDestinationSummary;
		vpcDestinationSummary?: VpcDestinationSummary;
	}

	/** Information about the topic rule destination. */
	export interface TopicRuleDestinationSummaryFormProperties {
		arn: FormControl<string | null | undefined>,
		status: FormControl<TopicRuleDestinationStatus | null | undefined>,
		createdAt: FormControl<Date | null | undefined>,
		lastUpdatedAt: FormControl<Date | null | undefined>,
		statusReason: FormControl<string | null | undefined>,
	}
	export function CreateTopicRuleDestinationSummaryFormGroup() {
		return new FormGroup<TopicRuleDestinationSummaryFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<TopicRuleDestinationStatus | null | undefined>(undefined),
			createdAt: new FormControl<Date | null | undefined>(undefined),
			lastUpdatedAt: new FormControl<Date | null | undefined>(undefined),
			statusReason: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Information about an HTTP URL destination. */
	export interface HttpUrlDestinationSummary {
		confirmationUrl?: string;
	}

	/** Information about an HTTP URL destination. */
	export interface HttpUrlDestinationSummaryFormProperties {
		confirmationUrl: FormControl<string | null | undefined>,
	}
	export function CreateHttpUrlDestinationSummaryFormGroup() {
		return new FormGroup<HttpUrlDestinationSummaryFormProperties>({
			confirmationUrl: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The summary of a virtual private cloud (VPC) destination. */
	export interface VpcDestinationSummary {
		subnetIds?: Array<string>;
		securityGroups?: Array<string>;
		vpcId?: string;
		roleArn?: string;
	}

	/** The summary of a virtual private cloud (VPC) destination. */
	export interface VpcDestinationSummaryFormProperties {
		vpcId: FormControl<string | null | undefined>,
		roleArn: FormControl<string | null | undefined>,
	}
	export function CreateVpcDestinationSummaryFormGroup() {
		return new FormGroup<VpcDestinationSummaryFormProperties>({
			vpcId: new FormControl<string | null | undefined>(undefined),
			roleArn: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The output from the ListTopicRules operation. */
	export interface ListTopicRulesResponse {
		rules?: Array<TopicRuleListItem>;
		nextToken?: string;
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
		ruleArn?: string;
		ruleName?: string;
		topicPattern?: string;
		createdAt?: Date;
		ruleDisabled?: boolean | null;
	}

	/** Describes a rule. */
	export interface TopicRuleListItemFormProperties {
		ruleArn: FormControl<string | null | undefined>,
		ruleName: FormControl<string | null | undefined>,
		topicPattern: FormControl<string | null | undefined>,
		createdAt: FormControl<Date | null | undefined>,
		ruleDisabled: FormControl<boolean | null | undefined>,
	}
	export function CreateTopicRuleListItemFormGroup() {
		return new FormGroup<TopicRuleListItemFormProperties>({
			ruleArn: new FormControl<string | null | undefined>(undefined),
			ruleName: new FormControl<string | null | undefined>(undefined),
			topicPattern: new FormControl<string | null | undefined>(undefined),
			createdAt: new FormControl<Date | null | undefined>(undefined),
			ruleDisabled: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface ListV2LoggingLevelsResponse {
		logTargetConfigurations?: Array<LogTargetConfiguration>;
		nextToken?: string;
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
		logTarget?: LogTarget;
		logLevel?: LogLevel;
	}

	/** The target configuration. */
	export interface LogTargetConfigurationFormProperties {
		logLevel: FormControl<LogLevel | null | undefined>,
	}
	export function CreateLogTargetConfigurationFormGroup() {
		return new FormGroup<LogTargetConfigurationFormProperties>({
			logLevel: new FormControl<LogLevel | null | undefined>(undefined),
		});

	}


	/** A log target. */
	export interface LogTarget {

		/** Required */
		targetType: LogTargetType;
		targetName?: string;
	}

	/** A log target. */
	export interface LogTargetFormProperties {

		/** Required */
		targetType: FormControl<LogTargetType | null | undefined>,
		targetName: FormControl<string | null | undefined>,
	}
	export function CreateLogTargetFormGroup() {
		return new FormGroup<LogTargetFormProperties>({
			targetType: new FormControl<LogTargetType | null | undefined>(undefined, [Validators.required]),
			targetName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum LogTargetType { DEFAULT = 'DEFAULT', THING_GROUP = 'THING_GROUP', CLIENT_ID = 'CLIENT_ID', SOURCE_IP = 'SOURCE_IP', PRINCIPAL_ID = 'PRINCIPAL_ID' }

	export interface ListViolationEventsResponse {
		violationEvents?: Array<ViolationEvent>;
		nextToken?: string;
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
		violationId?: string;
		thingName?: string;
		securityProfileName?: string;
		behavior?: Behavior;
		metricValue?: MetricValue;
		violationEventAdditionalInfo?: ViolationEventAdditionalInfo;
		violationEventType?: ViolationEventType;
		verificationState?: VerificationState;
		verificationStateDescription?: string;
		violationEventTime?: Date;
	}

	/** Information about a Device Defender security profile behavior violation. */
	export interface ViolationEventFormProperties {
		violationId: FormControl<string | null | undefined>,
		thingName: FormControl<string | null | undefined>,
		securityProfileName: FormControl<string | null | undefined>,
		violationEventType: FormControl<ViolationEventType | null | undefined>,
		verificationState: FormControl<VerificationState | null | undefined>,
		verificationStateDescription: FormControl<string | null | undefined>,
		violationEventTime: FormControl<Date | null | undefined>,
	}
	export function CreateViolationEventFormGroup() {
		return new FormGroup<ViolationEventFormProperties>({
			violationId: new FormControl<string | null | undefined>(undefined),
			thingName: new FormControl<string | null | undefined>(undefined),
			securityProfileName: new FormControl<string | null | undefined>(undefined),
			violationEventType: new FormControl<ViolationEventType | null | undefined>(undefined),
			verificationState: new FormControl<VerificationState | null | undefined>(undefined),
			verificationStateDescription: new FormControl<string | null | undefined>(undefined),
			violationEventTime: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export enum ViolationEventType { 'in-alarm' = 'in-alarm', 'alarm-cleared' = 'alarm-cleared', 'alarm-invalidated' = 'alarm-invalidated' }

	export interface PutVerificationStateOnViolationResponse {
	}
	export interface PutVerificationStateOnViolationResponseFormProperties {
	}
	export function CreatePutVerificationStateOnViolationResponseFormGroup() {
		return new FormGroup<PutVerificationStateOnViolationResponseFormProperties>({
		});

	}


	/** The output from the RegisterCACertificateResponse operation. */
	export interface RegisterCACertificateResponse {
		certificateArn?: string;
		certificateId?: string;
	}

	/** The output from the RegisterCACertificateResponse operation. */
	export interface RegisterCACertificateResponseFormProperties {
		certificateArn: FormControl<string | null | undefined>,
		certificateId: FormControl<string | null | undefined>,
	}
	export function CreateRegisterCACertificateResponseFormGroup() {
		return new FormGroup<RegisterCACertificateResponseFormProperties>({
			certificateArn: new FormControl<string | null | undefined>(undefined),
			certificateId: new FormControl<string | null | undefined>(undefined),
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
		certificateArn?: string;
		certificateId?: string;
	}

	/** The output from the RegisterCertificate operation. */
	export interface RegisterCertificateResponseFormProperties {
		certificateArn: FormControl<string | null | undefined>,
		certificateId: FormControl<string | null | undefined>,
	}
	export function CreateRegisterCertificateResponseFormGroup() {
		return new FormGroup<RegisterCertificateResponseFormProperties>({
			certificateArn: new FormControl<string | null | undefined>(undefined),
			certificateId: new FormControl<string | null | undefined>(undefined),
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
		certificateArn?: string;
		certificateId?: string;
	}
	export interface RegisterCertificateWithoutCAResponseFormProperties {
		certificateArn: FormControl<string | null | undefined>,
		certificateId: FormControl<string | null | undefined>,
	}
	export function CreateRegisterCertificateWithoutCAResponseFormGroup() {
		return new FormGroup<RegisterCertificateWithoutCAResponseFormProperties>({
			certificateArn: new FormControl<string | null | undefined>(undefined),
			certificateId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface RegisterThingResponse {
		certificatePem?: string;
		resourceArns?: ResourceArns;
	}
	export interface RegisterThingResponseFormProperties {
		certificatePem: FormControl<string | null | undefined>,
	}
	export function CreateRegisterThingResponseFormGroup() {
		return new FormGroup<RegisterThingResponseFormProperties>({
			certificatePem: new FormControl<string | null | undefined>(undefined),
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
		nextToken?: string;
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
		thingName?: string;
		thingId?: string;
		thingTypeName?: string;
		thingGroupNames?: Array<string>;
		attributes?: Attributes;
		shadow?: string;
		deviceDefender?: string;
		connectivity?: ThingConnectivity;
	}

	/** The thing search index document. */
	export interface ThingDocumentFormProperties {
		thingName: FormControl<string | null | undefined>,
		thingId: FormControl<string | null | undefined>,
		thingTypeName: FormControl<string | null | undefined>,
		shadow: FormControl<string | null | undefined>,
		deviceDefender: FormControl<string | null | undefined>,
	}
	export function CreateThingDocumentFormGroup() {
		return new FormGroup<ThingDocumentFormProperties>({
			thingName: new FormControl<string | null | undefined>(undefined),
			thingId: new FormControl<string | null | undefined>(undefined),
			thingTypeName: new FormControl<string | null | undefined>(undefined),
			shadow: new FormControl<string | null | undefined>(undefined),
			deviceDefender: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The connectivity status of the thing. */
	export interface ThingConnectivity {
		connected?: boolean | null;
		timestamp?: number | null;
		disconnectReason?: string;
	}

	/** The connectivity status of the thing. */
	export interface ThingConnectivityFormProperties {
		connected: FormControl<boolean | null | undefined>,
		timestamp: FormControl<number | null | undefined>,
		disconnectReason: FormControl<string | null | undefined>,
	}
	export function CreateThingConnectivityFormGroup() {
		return new FormGroup<ThingConnectivityFormProperties>({
			connected: new FormControl<boolean | null | undefined>(undefined),
			timestamp: new FormControl<number | null | undefined>(undefined),
			disconnectReason: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The thing group search index document. */
	export interface ThingGroupDocument {
		thingGroupName?: string;
		thingGroupId?: string;
		thingGroupDescription?: string;
		attributes?: Attributes;
		parentGroupNames?: Array<string>;
	}

	/** The thing group search index document. */
	export interface ThingGroupDocumentFormProperties {
		thingGroupName: FormControl<string | null | undefined>,
		thingGroupId: FormControl<string | null | undefined>,
		thingGroupDescription: FormControl<string | null | undefined>,
	}
	export function CreateThingGroupDocumentFormGroup() {
		return new FormGroup<ThingGroupDocumentFormProperties>({
			thingGroupName: new FormControl<string | null | undefined>(undefined),
			thingGroupId: new FormControl<string | null | undefined>(undefined),
			thingGroupDescription: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface SetDefaultAuthorizerResponse {
		authorizerName?: string;
		authorizerArn?: string;
	}
	export interface SetDefaultAuthorizerResponseFormProperties {
		authorizerName: FormControl<string | null | undefined>,
		authorizerArn: FormControl<string | null | undefined>,
	}
	export function CreateSetDefaultAuthorizerResponseFormGroup() {
		return new FormGroup<SetDefaultAuthorizerResponseFormProperties>({
			authorizerName: new FormControl<string | null | undefined>(undefined),
			authorizerArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface StartAuditMitigationActionsTaskResponse {
		taskId?: string;
	}
	export interface StartAuditMitigationActionsTaskResponseFormProperties {
		taskId: FormControl<string | null | undefined>,
	}
	export function CreateStartAuditMitigationActionsTaskResponseFormGroup() {
		return new FormGroup<StartAuditMitigationActionsTaskResponseFormProperties>({
			taskId: new FormControl<string | null | undefined>(undefined),
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

	export interface StartDetectMitigationActionsTaskResponse {
		taskId?: string;
	}
	export interface StartDetectMitigationActionsTaskResponseFormProperties {
		taskId: FormControl<string | null | undefined>,
	}
	export function CreateStartDetectMitigationActionsTaskResponseFormGroup() {
		return new FormGroup<StartDetectMitigationActionsTaskResponseFormProperties>({
			taskId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface StartOnDemandAuditTaskResponse {
		taskId?: string;
	}
	export interface StartOnDemandAuditTaskResponseFormProperties {
		taskId: FormControl<string | null | undefined>,
	}
	export function CreateStartOnDemandAuditTaskResponseFormGroup() {
		return new FormGroup<StartOnDemandAuditTaskResponseFormProperties>({
			taskId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface StartThingRegistrationTaskResponse {
		taskId?: string;
	}
	export interface StartThingRegistrationTaskResponseFormProperties {
		taskId: FormControl<string | null | undefined>,
	}
	export function CreateStartThingRegistrationTaskResponseFormGroup() {
		return new FormGroup<StartThingRegistrationTaskResponseFormProperties>({
			taskId: new FormControl<string | null | undefined>(undefined),
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
		authInfo?: AuthInfo;
		allowed?: Allowed;
		denied?: Denied;
		authDecision?: AuthDecision;
		missingContextValues?: Array<string>;
	}

	/** The authorizer result. */
	export interface AuthResultFormProperties {
		authDecision: FormControl<AuthDecision | null | undefined>,
	}
	export function CreateAuthResultFormGroup() {
		return new FormGroup<AuthResultFormProperties>({
			authDecision: new FormControl<AuthDecision | null | undefined>(undefined),
		});

	}


	/** A collection of authorization information. */
	export interface AuthInfo {
		actionType?: ActionType;

		/** Required */
		resources: Array<string>;
	}

	/** A collection of authorization information. */
	export interface AuthInfoFormProperties {
		actionType: FormControl<ActionType | null | undefined>,
	}
	export function CreateAuthInfoFormGroup() {
		return new FormGroup<AuthInfoFormProperties>({
			actionType: new FormControl<ActionType | null | undefined>(undefined),
		});

	}

	export enum ActionType { PUBLISH = 'PUBLISH', SUBSCRIBE = 'SUBSCRIBE', RECEIVE = 'RECEIVE', CONNECT = 'CONNECT' }


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
		implicitDeny?: ImplicitDeny;
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

	export enum AuthDecision { ALLOWED = 'ALLOWED', EXPLICIT_DENY = 'EXPLICIT_DENY', IMPLICIT_DENY = 'IMPLICIT_DENY' }

	export interface TestInvokeAuthorizerResponse {
		isAuthenticated?: boolean | null;
		principalId?: string;
		policyDocuments?: Array<string>;
		refreshAfterInSeconds?: number | null;
		disconnectAfterInSeconds?: number | null;
	}
	export interface TestInvokeAuthorizerResponseFormProperties {
		isAuthenticated: FormControl<boolean | null | undefined>,
		principalId: FormControl<string | null | undefined>,
		refreshAfterInSeconds: FormControl<number | null | undefined>,
		disconnectAfterInSeconds: FormControl<number | null | undefined>,
	}
	export function CreateTestInvokeAuthorizerResponseFormGroup() {
		return new FormGroup<TestInvokeAuthorizerResponseFormProperties>({
			isAuthenticated: new FormControl<boolean | null | undefined>(undefined),
			principalId: new FormControl<string | null | undefined>(undefined),
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
		transferredCertificateArn?: string;
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
		targetArn?: string;
		roleArn?: string;
		enabled?: boolean | null;
	}

	/** Information about the targets to which audit notifications are sent. */
	export interface AuditNotificationTargetFormProperties {
		targetArn: FormControl<string | null | undefined>,
		roleArn: FormControl<string | null | undefined>,
		enabled: FormControl<boolean | null | undefined>,
	}
	export function CreateAuditNotificationTargetFormGroup() {
		return new FormGroup<AuditNotificationTargetFormProperties>({
			targetArn: new FormControl<string | null | undefined>(undefined),
			roleArn: new FormControl<string | null | undefined>(undefined),
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

	export interface UpdateAuditSuppressionResponse {
	}
	export interface UpdateAuditSuppressionResponseFormProperties {
	}
	export function CreateUpdateAuditSuppressionResponseFormGroup() {
		return new FormGroup<UpdateAuditSuppressionResponseFormProperties>({
		});

	}

	export interface UpdateAuthorizerResponse {
		authorizerName?: string;
		authorizerArn?: string;
	}
	export interface UpdateAuthorizerResponseFormProperties {
		authorizerName: FormControl<string | null | undefined>,
		authorizerArn: FormControl<string | null | undefined>,
	}
	export function CreateUpdateAuthorizerResponseFormGroup() {
		return new FormGroup<UpdateAuthorizerResponseFormProperties>({
			authorizerName: new FormControl<string | null | undefined>(undefined),
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

	export interface UpdateCustomMetricResponse {
		metricName?: string;
		metricArn?: string;
		metricType?: CustomMetricType;
		displayName?: string;
		creationDate?: Date;
		lastModifiedDate?: Date;
	}
	export interface UpdateCustomMetricResponseFormProperties {
		metricName: FormControl<string | null | undefined>,
		metricArn: FormControl<string | null | undefined>,
		metricType: FormControl<CustomMetricType | null | undefined>,
		displayName: FormControl<string | null | undefined>,
		creationDate: FormControl<Date | null | undefined>,
		lastModifiedDate: FormControl<Date | null | undefined>,
	}
	export function CreateUpdateCustomMetricResponseFormGroup() {
		return new FormGroup<UpdateCustomMetricResponseFormProperties>({
			metricName: new FormControl<string | null | undefined>(undefined),
			metricArn: new FormControl<string | null | undefined>(undefined),
			metricType: new FormControl<CustomMetricType | null | undefined>(undefined),
			displayName: new FormControl<string | null | undefined>(undefined),
			creationDate: new FormControl<Date | null | undefined>(undefined),
			lastModifiedDate: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface UpdateDimensionResponse {
		name?: string;
		arn?: string;
		type?: DimensionType;
		stringValues?: Array<string>;
		creationDate?: Date;
		lastModifiedDate?: Date;
	}
	export interface UpdateDimensionResponseFormProperties {
		name: FormControl<string | null | undefined>,
		arn: FormControl<string | null | undefined>,
		type: FormControl<DimensionType | null | undefined>,
		creationDate: FormControl<Date | null | undefined>,
		lastModifiedDate: FormControl<Date | null | undefined>,
	}
	export function CreateUpdateDimensionResponseFormGroup() {
		return new FormGroup<UpdateDimensionResponseFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			arn: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<DimensionType | null | undefined>(undefined),
			creationDate: new FormControl<Date | null | undefined>(undefined),
			lastModifiedDate: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface UpdateDomainConfigurationResponse {
		domainConfigurationName?: string;
		domainConfigurationArn?: string;
	}
	export interface UpdateDomainConfigurationResponseFormProperties {
		domainConfigurationName: FormControl<string | null | undefined>,
		domainConfigurationArn: FormControl<string | null | undefined>,
	}
	export function CreateUpdateDomainConfigurationResponseFormGroup() {
		return new FormGroup<UpdateDomainConfigurationResponseFormProperties>({
			domainConfigurationName: new FormControl<string | null | undefined>(undefined),
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

	export enum ThingGroupIndexingMode { OFF = 'OFF', ON = 'ON' }

	export interface UpdateMitigationActionResponse {
		actionArn?: string;
		actionId?: string;
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

	export interface UpdatePackageResponse {
	}
	export interface UpdatePackageResponseFormProperties {
	}
	export function CreateUpdatePackageResponseFormGroup() {
		return new FormGroup<UpdatePackageResponseFormProperties>({
		});

	}

	export interface UpdatePackageConfigurationResponse {
	}
	export interface UpdatePackageConfigurationResponseFormProperties {
	}
	export function CreateUpdatePackageConfigurationResponseFormGroup() {
		return new FormGroup<UpdatePackageConfigurationResponseFormProperties>({
		});

	}

	export interface UpdatePackageVersionResponse {
	}
	export interface UpdatePackageVersionResponseFormProperties {
	}
	export function CreateUpdatePackageVersionResponseFormGroup() {
		return new FormGroup<UpdatePackageVersionResponseFormProperties>({
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
		roleAlias?: string;
		roleAliasArn?: string;
	}
	export interface UpdateRoleAliasResponseFormProperties {
		roleAlias: FormControl<string | null | undefined>,
		roleAliasArn: FormControl<string | null | undefined>,
	}
	export function CreateUpdateRoleAliasResponseFormGroup() {
		return new FormGroup<UpdateRoleAliasResponseFormProperties>({
			roleAlias: new FormControl<string | null | undefined>(undefined),
			roleAliasArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateScheduledAuditResponse {
		scheduledAuditArn?: string;
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
		securityProfileName?: string;
		securityProfileArn?: string;
		securityProfileDescription?: string;
		behaviors?: Array<Behavior>;
		alertTargets?: AlertTargets;
		additionalMetricsToRetain?: Array<string>;
		additionalMetricsToRetainV2?: Array<MetricToRetain>;
		version?: number | null;
		creationDate?: Date;
		lastModifiedDate?: Date;
	}
	export interface UpdateSecurityProfileResponseFormProperties {
		securityProfileName: FormControl<string | null | undefined>,
		securityProfileArn: FormControl<string | null | undefined>,
		securityProfileDescription: FormControl<string | null | undefined>,
		version: FormControl<number | null | undefined>,
		creationDate: FormControl<Date | null | undefined>,
		lastModifiedDate: FormControl<Date | null | undefined>,
	}
	export function CreateUpdateSecurityProfileResponseFormGroup() {
		return new FormGroup<UpdateSecurityProfileResponseFormProperties>({
			securityProfileName: new FormControl<string | null | undefined>(undefined),
			securityProfileArn: new FormControl<string | null | undefined>(undefined),
			securityProfileDescription: new FormControl<string | null | undefined>(undefined),
			version: new FormControl<number | null | undefined>(undefined),
			creationDate: new FormControl<Date | null | undefined>(undefined),
			lastModifiedDate: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface UpdateStreamResponse {
		streamId?: string;
		streamArn?: string;
		description?: string;
		streamVersion?: number | null;
	}
	export interface UpdateStreamResponseFormProperties {
		streamId: FormControl<string | null | undefined>,
		streamArn: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,
		streamVersion: FormControl<number | null | undefined>,
	}
	export function CreateUpdateStreamResponseFormGroup() {
		return new FormGroup<UpdateStreamResponseFormProperties>({
			streamId: new FormControl<string | null | undefined>(undefined),
			streamArn: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			streamVersion: new FormControl<number | null | undefined>(undefined),
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
		errorMessage?: string;
	}

	/** Information about an error found in a behavior specification. */
	export interface ValidationErrorFormProperties {
		errorMessage: FormControl<string | null | undefined>,
	}
	export function CreateValidationErrorFormGroup() {
		return new FormGroup<ValidationErrorFormProperties>({
			errorMessage: new FormControl<string | null | undefined>(undefined),
		});

	}


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

	export interface AddThingToBillingGroupRequest {
		billingGroupName?: string;
		billingGroupArn?: string;
		thingName?: string;
		thingArn?: string;
	}
	export interface AddThingToBillingGroupRequestFormProperties {
		billingGroupName: FormControl<string | null | undefined>,
		billingGroupArn: FormControl<string | null | undefined>,
		thingName: FormControl<string | null | undefined>,
		thingArn: FormControl<string | null | undefined>,
	}
	export function CreateAddThingToBillingGroupRequestFormGroup() {
		return new FormGroup<AddThingToBillingGroupRequestFormProperties>({
			billingGroupName: new FormControl<string | null | undefined>(undefined),
			billingGroupArn: new FormControl<string | null | undefined>(undefined),
			thingName: new FormControl<string | null | undefined>(undefined),
			thingArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface AddThingToThingGroupRequest {
		thingGroupName?: string;
		thingGroupArn?: string;
		thingName?: string;
		thingArn?: string;
		overrideDynamicGroups?: boolean | null;
	}
	export interface AddThingToThingGroupRequestFormProperties {
		thingGroupName: FormControl<string | null | undefined>,
		thingGroupArn: FormControl<string | null | undefined>,
		thingName: FormControl<string | null | undefined>,
		thingArn: FormControl<string | null | undefined>,
		overrideDynamicGroups: FormControl<boolean | null | undefined>,
	}
	export function CreateAddThingToThingGroupRequestFormGroup() {
		return new FormGroup<AddThingToThingGroupRequestFormProperties>({
			thingGroupName: new FormControl<string | null | undefined>(undefined),
			thingGroupArn: new FormControl<string | null | undefined>(undefined),
			thingName: new FormControl<string | null | undefined>(undefined),
			thingArn: new FormControl<string | null | undefined>(undefined),
			overrideDynamicGroups: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** The type of alert target: one of "SNS". */
	export enum AlertTargetType { SNS = 'SNS' }

	export interface AssociateTargetsWithJobRequest {

		/** Required */
		targets: Array<string>;
		comment?: string;
	}
	export interface AssociateTargetsWithJobRequestFormProperties {
		comment: FormControl<string | null | undefined>,
	}
	export function CreateAssociateTargetsWithJobRequestFormGroup() {
		return new FormGroup<AssociateTargetsWithJobRequestFormProperties>({
			comment: new FormControl<string | null | undefined>(undefined),
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

	export enum AuditCheckRunStatus { IN_PROGRESS = 'IN_PROGRESS', WAITING_FOR_DATA_COLLECTION = 'WAITING_FOR_DATA_COLLECTION', CANCELED = 'CANCELED', COMPLETED_COMPLIANT = 'COMPLETED_COMPLIANT', COMPLETED_NON_COMPLIANT = 'COMPLETED_NON_COMPLIANT', FAILED = 'FAILED' }


	/** Information about the audit check. */
	export interface AuditCheckDetails {
		checkRunStatus?: AuditCheckRunStatus;
		checkCompliant?: boolean | null;
		totalResourcesCount?: number | null;
		nonCompliantResourcesCount?: number | null;
		suppressedNonCompliantResourcesCount?: number | null;
		errorCode?: string;
		message?: string;
	}

	/** Information about the audit check. */
	export interface AuditCheckDetailsFormProperties {
		checkRunStatus: FormControl<AuditCheckRunStatus | null | undefined>,
		checkCompliant: FormControl<boolean | null | undefined>,
		totalResourcesCount: FormControl<number | null | undefined>,
		nonCompliantResourcesCount: FormControl<number | null | undefined>,
		suppressedNonCompliantResourcesCount: FormControl<number | null | undefined>,
		errorCode: FormControl<string | null | undefined>,
		message: FormControl<string | null | undefined>,
	}
	export function CreateAuditCheckDetailsFormGroup() {
		return new FormGroup<AuditCheckDetailsFormProperties>({
			checkRunStatus: new FormControl<AuditCheckRunStatus | null | undefined>(undefined),
			checkCompliant: new FormControl<boolean | null | undefined>(undefined),
			totalResourcesCount: new FormControl<number | null | undefined>(undefined),
			nonCompliantResourcesCount: new FormControl<number | null | undefined>(undefined),
			suppressedNonCompliantResourcesCount: new FormControl<number | null | undefined>(undefined),
			errorCode: new FormControl<string | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
		});

	}


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

	export enum AuditNotificationType { SNS = 'SNS' }

	export enum AuditTaskStatus { IN_PROGRESS = 'IN_PROGRESS', COMPLETED = 'COMPLETED', FAILED = 'FAILED', CANCELED = 'CANCELED' }


	/** The criteria that determine when and how a job abort takes place. */
	export interface AwsJobAbortConfig {

		/** Required */
		abortCriteriaList: Array<AwsJobAbortCriteria>;
	}

	/** The criteria that determine when and how a job abort takes place. */
	export interface AwsJobAbortConfigFormProperties {
	}
	export function CreateAwsJobAbortConfigFormGroup() {
		return new FormGroup<AwsJobAbortConfigFormProperties>({
		});

	}

	export enum AwsJobAbortCriteriaFailureType { FAILED = 'FAILED', REJECTED = 'REJECTED', TIMED_OUT = 'TIMED_OUT', ALL = 'ALL' }

	export enum AwsJobAbortCriteriaAbortAction { CANCEL = 'CANCEL' }


	/** Specifies the amount of time each device has to finish its execution of the job. A timer is started when the job execution status is set to <code>IN_PROGRESS</code>. If the job execution status is not set to another terminal state before the timer expires, it will be automatically set to <code>TIMED_OUT</code>. */
	export interface AwsJobTimeoutConfig {
		inProgressTimeoutInMinutes?: number | null;
	}

	/** Specifies the amount of time each device has to finish its execution of the job. A timer is started when the job execution status is set to <code>IN_PROGRESS</code>. If the job execution status is not set to another terminal state before the timer expires, it will be automatically set to <code>TIMED_OUT</code>. */
	export interface AwsJobTimeoutConfigFormProperties {
		inProgressTimeoutInMinutes: FormControl<number | null | undefined>,
	}
	export function CreateAwsJobTimeoutConfigFormGroup() {
		return new FormGroup<AwsJobTimeoutConfigFormProperties>({
			inProgressTimeoutInMinutes: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum BehaviorCriteriaType { STATIC = 'STATIC', STATISTICAL = 'STATISTICAL', MACHINE_LEARNING = 'MACHINE_LEARNING' }


	/** The type of bucketed aggregation performed. */
	export interface BucketsAggregationType {
		termsAggregation?: TermsAggregation;
	}

	/** The type of bucketed aggregation performed. */
	export interface BucketsAggregationTypeFormProperties {
	}
	export function CreateBucketsAggregationTypeFormGroup() {
		return new FormGroup<BucketsAggregationTypeFormProperties>({
		});

	}

	export enum CACertificateStatus { ACTIVE = 'ACTIVE', INACTIVE = 'INACTIVE' }

	export enum CACertificateUpdateAction { DEACTIVATE = 'DEACTIVATE' }

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

	export interface CancelDetectMitigationActionsTaskRequest {
	}
	export interface CancelDetectMitigationActionsTaskRequestFormProperties {
	}
	export function CreateCancelDetectMitigationActionsTaskRequestFormGroup() {
		return new FormGroup<CancelDetectMitigationActionsTaskRequestFormProperties>({
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
		reasonCode?: string;
		comment?: string;
	}
	export interface CancelJobRequestFormProperties {
		reasonCode: FormControl<string | null | undefined>,
		comment: FormControl<string | null | undefined>,
	}
	export function CreateCancelJobRequestFormGroup() {
		return new FormGroup<CancelJobRequestFormProperties>({
			reasonCode: new FormControl<string | null | undefined>(undefined),
			comment: new FormControl<string | null | undefined>(undefined),
		});

	}

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

	export interface CreateAuditSuppressionRequest {

		/**
		 * An audit check name. Checks must be enabled for your account. (Use <code>DescribeAccountAuditConfiguration</code> to see the list of all checks, including those that are enabled or use <code>UpdateAccountAuditConfiguration</code> to select which checks are enabled.)
		 * Required
		 */
		checkName: string;

		/**
		 * Information that identifies the noncompliant resource.
		 * Required
		 */
		resourceIdentifier: ResourceIdentifier;
		expirationDate?: Date;
		suppressIndefinitely?: boolean | null;
		description?: string;

		/** Required */
		clientRequestToken: string;
	}
	export interface CreateAuditSuppressionRequestFormProperties {

		/**
		 * An audit check name. Checks must be enabled for your account. (Use <code>DescribeAccountAuditConfiguration</code> to see the list of all checks, including those that are enabled or use <code>UpdateAccountAuditConfiguration</code> to select which checks are enabled.)
		 * Required
		 */
		checkName: FormControl<string | null | undefined>,
		expirationDate: FormControl<Date | null | undefined>,
		suppressIndefinitely: FormControl<boolean | null | undefined>,
		description: FormControl<string | null | undefined>,

		/** Required */
		clientRequestToken: FormControl<string | null | undefined>,
	}
	export function CreateCreateAuditSuppressionRequestFormGroup() {
		return new FormGroup<CreateAuditSuppressionRequestFormProperties>({
			checkName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			expirationDate: new FormControl<Date | null | undefined>(undefined),
			suppressIndefinitely: new FormControl<boolean | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			clientRequestToken: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateAuthorizerRequest {

		/** Required */
		authorizerFunctionArn: string;
		tokenKeyName?: string;
		tokenSigningPublicKeys?: PublicKeyMap;
		status?: AuthorizerStatus;
		tags?: Array<Tag>;
		signingDisabled?: boolean | null;
		enableCachingForHttp?: boolean | null;
	}
	export interface CreateAuthorizerRequestFormProperties {

		/** Required */
		authorizerFunctionArn: FormControl<string | null | undefined>,
		tokenKeyName: FormControl<string | null | undefined>,
		status: FormControl<AuthorizerStatus | null | undefined>,
		signingDisabled: FormControl<boolean | null | undefined>,
		enableCachingForHttp: FormControl<boolean | null | undefined>,
	}
	export function CreateCreateAuthorizerRequestFormGroup() {
		return new FormGroup<CreateAuthorizerRequestFormProperties>({
			authorizerFunctionArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			tokenKeyName: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<AuthorizerStatus | null | undefined>(undefined),
			signingDisabled: new FormControl<boolean | null | undefined>(undefined),
			enableCachingForHttp: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface CreateBillingGroupRequest {
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

		/** Required */
		certificateSigningRequest: string;
	}

	/** The input for the CreateCertificateFromCsr operation. */
	export interface CreateCertificateFromCsrRequestFormProperties {

		/** Required */
		certificateSigningRequest: FormControl<string | null | undefined>,
	}
	export function CreateCreateCertificateFromCsrRequestFormGroup() {
		return new FormGroup<CreateCertificateFromCsrRequestFormProperties>({
			certificateSigningRequest: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateCustomMetricRequest {
		displayName?: string;

		/** Required */
		metricType: CustomMetricType;
		tags?: Array<Tag>;

		/** Required */
		clientRequestToken: string;
	}
	export interface CreateCustomMetricRequestFormProperties {
		displayName: FormControl<string | null | undefined>,

		/** Required */
		metricType: FormControl<CustomMetricType | null | undefined>,

		/** Required */
		clientRequestToken: FormControl<string | null | undefined>,
	}
	export function CreateCreateCustomMetricRequestFormGroup() {
		return new FormGroup<CreateCustomMetricRequestFormProperties>({
			displayName: new FormControl<string | null | undefined>(undefined),
			metricType: new FormControl<CustomMetricType | null | undefined>(undefined, [Validators.required]),
			clientRequestToken: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateDimensionRequest {

		/** Required */
		type: DimensionType;

		/** Required */
		stringValues: Array<string>;
		tags?: Array<Tag>;

		/** Required */
		clientRequestToken: string;
	}
	export interface CreateDimensionRequestFormProperties {

		/** Required */
		type: FormControl<DimensionType | null | undefined>,

		/** Required */
		clientRequestToken: FormControl<string | null | undefined>,
	}
	export function CreateCreateDimensionRequestFormGroup() {
		return new FormGroup<CreateDimensionRequestFormProperties>({
			type: new FormControl<DimensionType | null | undefined>(undefined, [Validators.required]),
			clientRequestToken: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateDomainConfigurationRequest {
		domainName?: string;
		serverCertificateArns?: Array<string>;
		validationCertificateArn?: string;
		authorizerConfig?: AuthorizerConfig;
		serviceType?: ServiceType;
		tags?: Array<Tag>;
		tlsConfig?: TlsConfig;
	}
	export interface CreateDomainConfigurationRequestFormProperties {
		domainName: FormControl<string | null | undefined>,
		validationCertificateArn: FormControl<string | null | undefined>,
		serviceType: FormControl<ServiceType | null | undefined>,
	}
	export function CreateCreateDomainConfigurationRequestFormGroup() {
		return new FormGroup<CreateDomainConfigurationRequestFormProperties>({
			domainName: new FormControl<string | null | undefined>(undefined),
			validationCertificateArn: new FormControl<string | null | undefined>(undefined),
			serviceType: new FormControl<ServiceType | null | undefined>(undefined),
		});

	}

	export interface CreateDynamicThingGroupRequest {
		thingGroupProperties?: ThingGroupProperties;
		indexName?: string;

		/** Required */
		queryString: string;
		queryVersion?: string;
		tags?: Array<Tag>;
	}
	export interface CreateDynamicThingGroupRequestFormProperties {
		indexName: FormControl<string | null | undefined>,

		/** Required */
		queryString: FormControl<string | null | undefined>,
		queryVersion: FormControl<string | null | undefined>,
	}
	export function CreateCreateDynamicThingGroupRequestFormGroup() {
		return new FormGroup<CreateDynamicThingGroupRequestFormProperties>({
			indexName: new FormControl<string | null | undefined>(undefined),
			queryString: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			queryVersion: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateFleetMetricRequest {

		/** Required */
		queryString: string;

		/** Required */
		aggregationType: AggregationType;

		/** Required */
		period: number;

		/** Required */
		aggregationField: string;
		description?: string;
		queryVersion?: string;
		indexName?: string;
		unit?: FleetMetricUnit;
		tags?: Array<Tag>;
	}
	export interface CreateFleetMetricRequestFormProperties {

		/** Required */
		queryString: FormControl<string | null | undefined>,

		/** Required */
		period: FormControl<number | null | undefined>,

		/** Required */
		aggregationField: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,
		queryVersion: FormControl<string | null | undefined>,
		indexName: FormControl<string | null | undefined>,
		unit: FormControl<FleetMetricUnit | null | undefined>,
	}
	export function CreateCreateFleetMetricRequestFormGroup() {
		return new FormGroup<CreateFleetMetricRequestFormProperties>({
			queryString: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			period: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			aggregationField: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			description: new FormControl<string | null | undefined>(undefined),
			queryVersion: new FormControl<string | null | undefined>(undefined),
			indexName: new FormControl<string | null | undefined>(undefined),
			unit: new FormControl<FleetMetricUnit | null | undefined>(undefined),
		});

	}

	export interface CreateJobRequest {

		/** Required */
		targets: Array<string>;
		documentSource?: string;
		document?: string;
		description?: string;
		presignedUrlConfig?: PresignedUrlConfig;
		targetSelection?: TargetSelection;
		jobExecutionsRolloutConfig?: JobExecutionsRolloutConfig;
		abortConfig?: AbortConfig;
		timeoutConfig?: TimeoutConfig;
		tags?: Array<Tag>;
		namespaceId?: string;
		jobTemplateArn?: string;
		jobExecutionsRetryConfig?: JobExecutionsRetryConfig;
		documentParameters?: ParameterMap;
		schedulingConfig?: SchedulingConfig;
		destinationPackageVersions?: Array<string>;
	}
	export interface CreateJobRequestFormProperties {
		documentSource: FormControl<string | null | undefined>,
		document: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,
		targetSelection: FormControl<TargetSelection | null | undefined>,
		namespaceId: FormControl<string | null | undefined>,
		jobTemplateArn: FormControl<string | null | undefined>,
	}
	export function CreateCreateJobRequestFormGroup() {
		return new FormGroup<CreateJobRequestFormProperties>({
			documentSource: new FormControl<string | null | undefined>(undefined),
			document: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			targetSelection: new FormControl<TargetSelection | null | undefined>(undefined),
			namespaceId: new FormControl<string | null | undefined>(undefined),
			jobTemplateArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateJobTemplateRequest {
		jobArn?: string;
		documentSource?: string;
		document?: string;

		/** Required */
		description: string;

		/** Configuration for pre-signed S3 URLs. */
		presignedUrlConfig?: PresignedUrlConfig;

		/** Allows you to create a staged rollout of a job. */
		jobExecutionsRolloutConfig?: JobExecutionsRolloutConfig;

		/** The criteria that determine when and how a job abort takes place. */
		abortConfig?: AbortConfig;

		/** Specifies the amount of time each device has to finish its execution of the job. A timer is started when the job execution status is set to <code>IN_PROGRESS</code>. If the job execution status is not set to another terminal state before the timer expires, it will be automatically set to <code>TIMED_OUT</code>. */
		timeoutConfig?: TimeoutConfig;
		tags?: Array<Tag>;
		jobExecutionsRetryConfig?: JobExecutionsRetryConfig;
		maintenanceWindows?: Array<MaintenanceWindow>;
		destinationPackageVersions?: Array<string>;
	}
	export interface CreateJobTemplateRequestFormProperties {
		jobArn: FormControl<string | null | undefined>,
		documentSource: FormControl<string | null | undefined>,
		document: FormControl<string | null | undefined>,

		/** Required */
		description: FormControl<string | null | undefined>,
	}
	export function CreateCreateJobTemplateRequestFormGroup() {
		return new FormGroup<CreateJobTemplateRequestFormProperties>({
			jobArn: new FormControl<string | null | undefined>(undefined),
			documentSource: new FormControl<string | null | undefined>(undefined),
			document: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** <p>The input for the CreateKeysAndCertificate operation.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">CreateKeysAndCertificateRequest</a> action.</p> */
	export interface CreateKeysAndCertificateRequest {
	}

	/** <p>The input for the CreateKeysAndCertificate operation.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">CreateKeysAndCertificateRequest</a> action.</p> */
	export interface CreateKeysAndCertificateRequestFormProperties {
	}
	export function CreateCreateKeysAndCertificateRequestFormGroup() {
		return new FormGroup<CreateKeysAndCertificateRequestFormProperties>({
		});

	}

	export interface CreateMitigationActionRequest {

		/** Required */
		roleArn: string;

		/** Required */
		actionParams: MitigationActionParams;
		tags?: Array<Tag>;
	}
	export interface CreateMitigationActionRequestFormProperties {

		/** Required */
		roleArn: FormControl<string | null | undefined>,
	}
	export function CreateCreateMitigationActionRequestFormGroup() {
		return new FormGroup<CreateMitigationActionRequestFormProperties>({
			roleArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateOTAUpdateRequest {
		description?: string;

		/** Required */
		targets: Array<string>;
		protocols?: Array<Protocol>;
		targetSelection?: TargetSelection;
		awsJobExecutionsRolloutConfig?: AwsJobExecutionsRolloutConfig;
		awsJobPresignedUrlConfig?: AwsJobPresignedUrlConfig;
		awsJobAbortConfig?: AwsJobAbortConfig;
		awsJobTimeoutConfig?: AwsJobTimeoutConfig;

		/** Required */
		files: Array<OTAUpdateFile>;

		/** Required */
		roleArn: string;
		additionalParameters?: AdditionalParameterMap;
		tags?: Array<Tag>;
	}
	export interface CreateOTAUpdateRequestFormProperties {
		description: FormControl<string | null | undefined>,
		targetSelection: FormControl<TargetSelection | null | undefined>,

		/** Required */
		roleArn: FormControl<string | null | undefined>,
	}
	export function CreateCreateOTAUpdateRequestFormGroup() {
		return new FormGroup<CreateOTAUpdateRequestFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			targetSelection: new FormControl<TargetSelection | null | undefined>(undefined),
			roleArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
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

	export interface CreatePackageRequest {
		description?: string;
		tags?: TagMap;
	}
	export interface CreatePackageRequestFormProperties {
		description: FormControl<string | null | undefined>,
	}
	export function CreateCreatePackageRequestFormGroup() {
		return new FormGroup<CreatePackageRequestFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreatePackageVersionRequest {
		description?: string;
		attributes?: ResourceAttributes;
		tags?: TagMap;
	}
	export interface CreatePackageVersionRequestFormProperties {
		description: FormControl<string | null | undefined>,
	}
	export function CreateCreatePackageVersionRequestFormGroup() {
		return new FormGroup<CreatePackageVersionRequestFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
		});

	}


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

		/** Required */
		templateName: string;
		description?: string;

		/** Required */
		templateBody: string;
		enabled?: boolean | null;

		/** Required */
		provisioningRoleArn: string;
		preProvisioningHook?: ProvisioningHook;
		tags?: Array<Tag>;
		type?: TemplateType;
	}
	export interface CreateProvisioningTemplateRequestFormProperties {

		/** Required */
		templateName: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,

		/** Required */
		templateBody: FormControl<string | null | undefined>,
		enabled: FormControl<boolean | null | undefined>,

		/** Required */
		provisioningRoleArn: FormControl<string | null | undefined>,
		type: FormControl<TemplateType | null | undefined>,
	}
	export function CreateCreateProvisioningTemplateRequestFormGroup() {
		return new FormGroup<CreateProvisioningTemplateRequestFormProperties>({
			templateName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			description: new FormControl<string | null | undefined>(undefined),
			templateBody: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			enabled: new FormControl<boolean | null | undefined>(undefined),
			provisioningRoleArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<TemplateType | null | undefined>(undefined),
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

		/** Required */
		roleArn: string;
		credentialDurationSeconds?: number | null;
		tags?: Array<Tag>;
	}
	export interface CreateRoleAliasRequestFormProperties {

		/** Required */
		roleArn: FormControl<string | null | undefined>,
		credentialDurationSeconds: FormControl<number | null | undefined>,
	}
	export function CreateCreateRoleAliasRequestFormGroup() {
		return new FormGroup<CreateRoleAliasRequestFormProperties>({
			roleArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			credentialDurationSeconds: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface CreateScheduledAuditRequest {

		/** Required */
		frequency: AuditFrequency;
		dayOfMonth?: string;
		dayOfWeek?: DayOfWeek;

		/** Required */
		targetCheckNames: Array<string>;
		tags?: Array<Tag>;
	}
	export interface CreateScheduledAuditRequestFormProperties {

		/** Required */
		frequency: FormControl<AuditFrequency | null | undefined>,
		dayOfMonth: FormControl<string | null | undefined>,
		dayOfWeek: FormControl<DayOfWeek | null | undefined>,
	}
	export function CreateCreateScheduledAuditRequestFormGroup() {
		return new FormGroup<CreateScheduledAuditRequestFormProperties>({
			frequency: new FormControl<AuditFrequency | null | undefined>(undefined, [Validators.required]),
			dayOfMonth: new FormControl<string | null | undefined>(undefined),
			dayOfWeek: new FormControl<DayOfWeek | null | undefined>(undefined),
		});

	}

	export interface CreateSecurityProfileRequest {
		securityProfileDescription?: string;
		behaviors?: Array<Behavior>;
		alertTargets?: AlertTargets;
		additionalMetricsToRetain?: Array<string>;
		additionalMetricsToRetainV2?: Array<MetricToRetain>;
		tags?: Array<Tag>;
	}
	export interface CreateSecurityProfileRequestFormProperties {
		securityProfileDescription: FormControl<string | null | undefined>,
	}
	export function CreateCreateSecurityProfileRequestFormGroup() {
		return new FormGroup<CreateSecurityProfileRequestFormProperties>({
			securityProfileDescription: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateStreamRequest {
		description?: string;

		/** Required */
		files: Array<StreamFile>;

		/** Required */
		roleArn: string;
		tags?: Array<Tag>;
	}
	export interface CreateStreamRequestFormProperties {
		description: FormControl<string | null | undefined>,

		/** Required */
		roleArn: FormControl<string | null | undefined>,
	}
	export function CreateCreateStreamRequestFormGroup() {
		return new FormGroup<CreateStreamRequestFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			roleArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateThingGroupRequest {
		parentGroupName?: string;
		thingGroupProperties?: ThingGroupProperties;
		tags?: Array<Tag>;
	}
	export interface CreateThingGroupRequestFormProperties {
		parentGroupName: FormControl<string | null | undefined>,
	}
	export function CreateCreateThingGroupRequestFormGroup() {
		return new FormGroup<CreateThingGroupRequestFormProperties>({
			parentGroupName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The input for the CreateThing operation. */
	export interface CreateThingRequest {
		thingTypeName?: string;
		attributePayload?: AttributePayload;
		billingGroupName?: string;
	}

	/** The input for the CreateThing operation. */
	export interface CreateThingRequestFormProperties {
		thingTypeName: FormControl<string | null | undefined>,
		billingGroupName: FormControl<string | null | undefined>,
	}
	export function CreateCreateThingRequestFormGroup() {
		return new FormGroup<CreateThingRequestFormProperties>({
			thingTypeName: new FormControl<string | null | undefined>(undefined),
			billingGroupName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The input for the CreateThingType operation. */
	export interface CreateThingTypeRequest {
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
		httpUrlConfiguration?: HttpUrlDestinationConfiguration;
		vpcConfiguration?: VpcDestinationConfiguration;
	}

	/** Configuration of the topic rule destination. */
	export interface TopicRuleDestinationConfigurationFormProperties {
	}
	export function CreateTopicRuleDestinationConfigurationFormGroup() {
		return new FormGroup<TopicRuleDestinationConfigurationFormProperties>({
		});

	}

	export interface CreateTopicRuleDestinationRequest {

		/** Required */
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
		description?: string;

		/** Required */
		actions: Array<Action>;
		ruleDisabled?: boolean | null;
		awsIotSqlVersion?: string;
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

		/** Required */
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

	export interface DeleteAuditSuppressionRequest {

		/**
		 * An audit check name. Checks must be enabled for your account. (Use <code>DescribeAccountAuditConfiguration</code> to see the list of all checks, including those that are enabled or use <code>UpdateAccountAuditConfiguration</code> to select which checks are enabled.)
		 * Required
		 */
		checkName: string;

		/**
		 * Information that identifies the noncompliant resource.
		 * Required
		 */
		resourceIdentifier: ResourceIdentifier;
	}
	export interface DeleteAuditSuppressionRequestFormProperties {

		/**
		 * An audit check name. Checks must be enabled for your account. (Use <code>DescribeAccountAuditConfiguration</code> to see the list of all checks, including those that are enabled or use <code>UpdateAccountAuditConfiguration</code> to select which checks are enabled.)
		 * Required
		 */
		checkName: FormControl<string | null | undefined>,
	}
	export function CreateDeleteAuditSuppressionRequestFormGroup() {
		return new FormGroup<DeleteAuditSuppressionRequestFormProperties>({
			checkName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
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

	export interface DeleteCustomMetricRequest {
	}
	export interface DeleteCustomMetricRequestFormProperties {
	}
	export function CreateDeleteCustomMetricRequestFormGroup() {
		return new FormGroup<DeleteCustomMetricRequestFormProperties>({
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

	export interface DeleteFleetMetricRequest {
	}
	export interface DeleteFleetMetricRequestFormProperties {
	}
	export function CreateDeleteFleetMetricRequestFormGroup() {
		return new FormGroup<DeleteFleetMetricRequestFormProperties>({
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

	export interface DeleteJobTemplateRequest {
	}
	export interface DeleteJobTemplateRequestFormProperties {
	}
	export function CreateDeleteJobTemplateRequestFormGroup() {
		return new FormGroup<DeleteJobTemplateRequestFormProperties>({
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

	export interface DeletePackageRequest {
	}
	export interface DeletePackageRequestFormProperties {
	}
	export function CreateDeletePackageRequestFormGroup() {
		return new FormGroup<DeletePackageRequestFormProperties>({
		});

	}

	export interface DeletePackageVersionRequest {
	}
	export interface DeletePackageVersionRequestFormProperties {
	}
	export function CreateDeletePackageVersionRequestFormGroup() {
		return new FormGroup<DeletePackageVersionRequestFormProperties>({
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

	export interface DescribeAuditSuppressionRequest {

		/**
		 * An audit check name. Checks must be enabled for your account. (Use <code>DescribeAccountAuditConfiguration</code> to see the list of all checks, including those that are enabled or use <code>UpdateAccountAuditConfiguration</code> to select which checks are enabled.)
		 * Required
		 */
		checkName: string;

		/**
		 * Information that identifies the noncompliant resource.
		 * Required
		 */
		resourceIdentifier: ResourceIdentifier;
	}
	export interface DescribeAuditSuppressionRequestFormProperties {

		/**
		 * An audit check name. Checks must be enabled for your account. (Use <code>DescribeAccountAuditConfiguration</code> to see the list of all checks, including those that are enabled or use <code>UpdateAccountAuditConfiguration</code> to select which checks are enabled.)
		 * Required
		 */
		checkName: FormControl<string | null | undefined>,
	}
	export function CreateDescribeAuditSuppressionRequestFormGroup() {
		return new FormGroup<DescribeAuditSuppressionRequestFormProperties>({
			checkName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
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

	export interface DescribeCustomMetricRequest {
	}
	export interface DescribeCustomMetricRequestFormProperties {
	}
	export function CreateDescribeCustomMetricRequestFormGroup() {
		return new FormGroup<DescribeCustomMetricRequestFormProperties>({
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

	export interface DescribeDetectMitigationActionsTaskRequest {
	}
	export interface DescribeDetectMitigationActionsTaskRequestFormProperties {
	}
	export function CreateDescribeDetectMitigationActionsTaskRequestFormGroup() {
		return new FormGroup<DescribeDetectMitigationActionsTaskRequestFormProperties>({
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

	export interface DescribeFleetMetricRequest {
	}
	export interface DescribeFleetMetricRequestFormProperties {
	}
	export function CreateDescribeFleetMetricRequestFormGroup() {
		return new FormGroup<DescribeFleetMetricRequestFormProperties>({
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

	export interface DescribeJobTemplateRequest {
	}
	export interface DescribeJobTemplateRequestFormProperties {
	}
	export function CreateDescribeJobTemplateRequestFormGroup() {
		return new FormGroup<DescribeJobTemplateRequestFormProperties>({
		});

	}

	export interface DescribeManagedJobTemplateRequest {
	}
	export interface DescribeManagedJobTemplateRequestFormProperties {
	}
	export function CreateDescribeManagedJobTemplateRequestFormGroup() {
		return new FormGroup<DescribeManagedJobTemplateRequestFormProperties>({
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

	export enum DynamicGroupStatus { ACTIVE = 'ACTIVE', BUILDING = 'BUILDING', REBUILDING = 'REBUILDING' }

	export interface DescribeThingRegistrationTaskRequest {
	}
	export interface DescribeThingRegistrationTaskRequestFormProperties {
	}
	export function CreateDescribeThingRegistrationTaskRequestFormGroup() {
		return new FormGroup<DescribeThingRegistrationTaskRequestFormProperties>({
		});

	}


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

	export enum EventType { THING = 'THING', THING_GROUP = 'THING_GROUP', THING_TYPE = 'THING_TYPE', THING_GROUP_MEMBERSHIP = 'THING_GROUP_MEMBERSHIP', THING_GROUP_HIERARCHY = 'THING_GROUP_HIERARCHY', THING_TYPE_ASSOCIATION = 'THING_TYPE_ASSOCIATION', JOB = 'JOB', JOB_EXECUTION = 'JOB_EXECUTION', POLICY = 'POLICY', CERTIFICATE = 'CERTIFICATE', CA_CERTIFICATE = 'CA_CERTIFICATE' }

	export interface GetBehaviorModelTrainingSummariesRequest {
	}
	export interface GetBehaviorModelTrainingSummariesRequestFormProperties {
	}
	export function CreateGetBehaviorModelTrainingSummariesRequestFormGroup() {
		return new FormGroup<GetBehaviorModelTrainingSummariesRequestFormProperties>({
		});

	}

	export interface GetBucketsAggregationRequest {
		indexName?: string;

		/** Required */
		queryString: string;

		/** Required */
		aggregationField: string;
		queryVersion?: string;

		/** Required */
		bucketsAggregationType: BucketsAggregationType;
	}
	export interface GetBucketsAggregationRequestFormProperties {
		indexName: FormControl<string | null | undefined>,

		/** Required */
		queryString: FormControl<string | null | undefined>,

		/** Required */
		aggregationField: FormControl<string | null | undefined>,
		queryVersion: FormControl<string | null | undefined>,
	}
	export function CreateGetBucketsAggregationRequestFormGroup() {
		return new FormGroup<GetBucketsAggregationRequestFormProperties>({
			indexName: new FormControl<string | null | undefined>(undefined),
			queryString: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			aggregationField: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			queryVersion: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetCardinalityRequest {
		indexName?: string;

		/** Required */
		queryString: string;
		aggregationField?: string;
		queryVersion?: string;
	}
	export interface GetCardinalityRequestFormProperties {
		indexName: FormControl<string | null | undefined>,

		/** Required */
		queryString: FormControl<string | null | undefined>,
		aggregationField: FormControl<string | null | undefined>,
		queryVersion: FormControl<string | null | undefined>,
	}
	export function CreateGetCardinalityRequestFormGroup() {
		return new FormGroup<GetCardinalityRequestFormProperties>({
			indexName: new FormControl<string | null | undefined>(undefined),
			queryString: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			aggregationField: new FormControl<string | null | undefined>(undefined),
			queryVersion: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetEffectivePoliciesRequest {
		principal?: string;
		cognitoIdentityPoolId?: string;
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

	export interface GetPackageConfigurationRequest {
	}
	export interface GetPackageConfigurationRequestFormProperties {
	}
	export function CreateGetPackageConfigurationRequestFormGroup() {
		return new FormGroup<GetPackageConfigurationRequestFormProperties>({
		});

	}

	export interface GetPackageRequest {
	}
	export interface GetPackageRequestFormProperties {
	}
	export function CreateGetPackageRequestFormGroup() {
		return new FormGroup<GetPackageRequestFormProperties>({
		});

	}

	export interface GetPackageVersionRequest {
	}
	export interface GetPackageVersionRequestFormProperties {
	}
	export function CreateGetPackageVersionRequestFormGroup() {
		return new FormGroup<GetPackageVersionRequestFormProperties>({
		});

	}

	export interface GetPercentilesRequest {
		indexName?: string;

		/** Required */
		queryString: string;
		aggregationField?: string;
		queryVersion?: string;
		percents?: Array<number> | null;
	}
	export interface GetPercentilesRequestFormProperties {
		indexName: FormControl<string | null | undefined>,

		/** Required */
		queryString: FormControl<string | null | undefined>,
		aggregationField: FormControl<string | null | undefined>,
		queryVersion: FormControl<string | null | undefined>,
	}
	export function CreateGetPercentilesRequestFormGroup() {
		return new FormGroup<GetPercentilesRequestFormProperties>({
			indexName: new FormControl<string | null | undefined>(undefined),
			queryString: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			aggregationField: new FormControl<string | null | undefined>(undefined),
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
		indexName?: string;

		/** Required */
		queryString: string;
		aggregationField?: string;
		queryVersion?: string;
	}
	export interface GetStatisticsRequestFormProperties {
		indexName: FormControl<string | null | undefined>,

		/** Required */
		queryString: FormControl<string | null | undefined>,
		aggregationField: FormControl<string | null | undefined>,
		queryVersion: FormControl<string | null | undefined>,
	}
	export function CreateGetStatisticsRequestFormGroup() {
		return new FormGroup<GetStatisticsRequestFormProperties>({
			indexName: new FormControl<string | null | undefined>(undefined),
			queryString: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			aggregationField: new FormControl<string | null | undefined>(undefined),
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
		queryString?: string;
	}

	/** Specifies the HTTP context to use for the test authorizer request. */
	export interface HttpContextFormProperties {
		queryString: FormControl<string | null | undefined>,
	}
	export function CreateHttpContextFormGroup() {
		return new FormGroup<HttpContextFormProperties>({
			queryString: new FormControl<string | null | undefined>(undefined),
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
		taskId?: string;
		checkName?: string;
		resourceIdentifier?: ResourceIdentifier;
		maxResults?: number | null;
		nextToken?: string;
		startTime?: Date;
		endTime?: Date;
		listSuppressedFindings?: boolean | null;
	}
	export interface ListAuditFindingsRequestFormProperties {
		taskId: FormControl<string | null | undefined>,
		checkName: FormControl<string | null | undefined>,
		maxResults: FormControl<number | null | undefined>,
		nextToken: FormControl<string | null | undefined>,
		startTime: FormControl<Date | null | undefined>,
		endTime: FormControl<Date | null | undefined>,
		listSuppressedFindings: FormControl<boolean | null | undefined>,
	}
	export function CreateListAuditFindingsRequestFormGroup() {
		return new FormGroup<ListAuditFindingsRequestFormProperties>({
			taskId: new FormControl<string | null | undefined>(undefined),
			checkName: new FormControl<string | null | undefined>(undefined),
			maxResults: new FormControl<number | null | undefined>(undefined),
			nextToken: new FormControl<string | null | undefined>(undefined),
			startTime: new FormControl<Date | null | undefined>(undefined),
			endTime: new FormControl<Date | null | undefined>(undefined),
			listSuppressedFindings: new FormControl<boolean | null | undefined>(undefined),
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

	export interface ListAuditSuppressionsRequest {

		/** An audit check name. Checks must be enabled for your account. (Use <code>DescribeAccountAuditConfiguration</code> to see the list of all checks, including those that are enabled or use <code>UpdateAccountAuditConfiguration</code> to select which checks are enabled.) */
		checkName?: string | null;

		/** Information that identifies the noncompliant resource. */
		resourceIdentifier?: ResourceIdentifier;
		ascendingOrder?: boolean | null;
		nextToken?: string;
		maxResults?: number | null;
	}
	export interface ListAuditSuppressionsRequestFormProperties {

		/** An audit check name. Checks must be enabled for your account. (Use <code>DescribeAccountAuditConfiguration</code> to see the list of all checks, including those that are enabled or use <code>UpdateAccountAuditConfiguration</code> to select which checks are enabled.) */
		checkName: FormControl<string | null | undefined>,
		ascendingOrder: FormControl<boolean | null | undefined>,
		nextToken: FormControl<string | null | undefined>,
		maxResults: FormControl<number | null | undefined>,
	}
	export function CreateListAuditSuppressionsRequestFormGroup() {
		return new FormGroup<ListAuditSuppressionsRequestFormProperties>({
			checkName: new FormControl<string | null | undefined>(undefined),
			ascendingOrder: new FormControl<boolean | null | undefined>(undefined),
			nextToken: new FormControl<string | null | undefined>(undefined),
			maxResults: new FormControl<number | null | undefined>(undefined),
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

	export interface ListCustomMetricsRequest {
	}
	export interface ListCustomMetricsRequestFormProperties {
	}
	export function CreateListCustomMetricsRequestFormGroup() {
		return new FormGroup<ListCustomMetricsRequestFormProperties>({
		});

	}

	export interface ListDetectMitigationActionsExecutionsRequest {
	}
	export interface ListDetectMitigationActionsExecutionsRequestFormProperties {
	}
	export function CreateListDetectMitigationActionsExecutionsRequestFormGroup() {
		return new FormGroup<ListDetectMitigationActionsExecutionsRequestFormProperties>({
		});

	}

	export interface ListDetectMitigationActionsTasksRequest {
	}
	export interface ListDetectMitigationActionsTasksRequestFormProperties {
	}
	export function CreateListDetectMitigationActionsTasksRequestFormGroup() {
		return new FormGroup<ListDetectMitigationActionsTasksRequestFormProperties>({
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

	export interface ListFleetMetricsRequest {
	}
	export interface ListFleetMetricsRequestFormProperties {
	}
	export function CreateListFleetMetricsRequestFormGroup() {
		return new FormGroup<ListFleetMetricsRequestFormProperties>({
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

	export interface ListJobTemplatesRequest {
	}
	export interface ListJobTemplatesRequestFormProperties {
	}
	export function CreateListJobTemplatesRequestFormGroup() {
		return new FormGroup<ListJobTemplatesRequestFormProperties>({
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

	export interface ListManagedJobTemplatesRequest {
	}
	export interface ListManagedJobTemplatesRequestFormProperties {
	}
	export function CreateListManagedJobTemplatesRequestFormGroup() {
		return new FormGroup<ListManagedJobTemplatesRequestFormProperties>({
		});

	}

	export interface ListMetricValuesRequest {
	}
	export interface ListMetricValuesRequestFormProperties {
	}
	export function CreateListMetricValuesRequestFormGroup() {
		return new FormGroup<ListMetricValuesRequestFormProperties>({
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

	export interface ListPackageVersionsRequest {
	}
	export interface ListPackageVersionsRequestFormProperties {
	}
	export function CreateListPackageVersionsRequestFormGroup() {
		return new FormGroup<ListPackageVersionsRequestFormProperties>({
		});

	}

	export interface ListPackagesRequest {
	}
	export interface ListPackagesRequestFormProperties {
	}
	export function CreateListPackagesRequestFormGroup() {
		return new FormGroup<ListPackagesRequestFormProperties>({
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

	export interface ListRelatedResourcesForAuditFindingRequest {
	}
	export interface ListRelatedResourcesForAuditFindingRequestFormProperties {
	}
	export function CreateListRelatedResourcesForAuditFindingRequestFormGroup() {
		return new FormGroup<ListRelatedResourcesForAuditFindingRequestFormProperties>({
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
		logLevel?: LogLevel;
	}

	/** Describes the logging options payload. */
	export interface LoggingOptionsPayloadFormProperties {

		/** Required */
		roleArn: FormControl<string | null | undefined>,
		logLevel: FormControl<LogLevel | null | undefined>,
	}
	export function CreateLoggingOptionsPayloadFormGroup() {
		return new FormGroup<LoggingOptionsPayloadFormProperties>({
			roleArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			logLevel: new FormControl<LogLevel | null | undefined>(undefined),
		});

	}


	/** Specifies the MQTT context to use for the test authorizer request */
	export interface MqttContext {
		username?: string;
		password?: string;
		clientId?: string;
	}

	/** Specifies the MQTT context to use for the test authorizer request */
	export interface MqttContextFormProperties {
		username: FormControl<string | null | undefined>,
		password: FormControl<string | null | undefined>,
		clientId: FormControl<string | null | undefined>,
	}
	export function CreateMqttContextFormGroup() {
		return new FormGroup<MqttContextFormProperties>({
			username: new FormControl<string | null | undefined>(undefined),
			password: new FormControl<string | null | undefined>(undefined),
			clientId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum PackageVersionAction { PUBLISH = 'PUBLISH', DEPRECATE = 'DEPRECATE' }

	export interface Parameters {
	}
	export interface ParametersFormProperties {
	}
	export function CreateParametersFormGroup() {
		return new FormGroup<ParametersFormProperties>({
		});

	}

	export interface PutVerificationStateOnViolationRequest {

		/** Required */
		verificationState: VerificationState;
		verificationStateDescription?: string;
	}
	export interface PutVerificationStateOnViolationRequestFormProperties {

		/** Required */
		verificationState: FormControl<VerificationState | null | undefined>,
		verificationStateDescription: FormControl<string | null | undefined>,
	}
	export function CreatePutVerificationStateOnViolationRequestFormGroup() {
		return new FormGroup<PutVerificationStateOnViolationRequestFormProperties>({
			verificationState: new FormControl<VerificationState | null | undefined>(undefined, [Validators.required]),
			verificationStateDescription: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The input to the RegisterCACertificate operation. */
	export interface RegisterCACertificateRequest {

		/** Required */
		caCertificate: string;
		verificationCertificate?: string;
		registrationConfig?: RegistrationConfig;
		tags?: Array<Tag>;
		certificateMode?: CertificateMode;
	}

	/** The input to the RegisterCACertificate operation. */
	export interface RegisterCACertificateRequestFormProperties {

		/** Required */
		caCertificate: FormControl<string | null | undefined>,
		verificationCertificate: FormControl<string | null | undefined>,
		certificateMode: FormControl<CertificateMode | null | undefined>,
	}
	export function CreateRegisterCACertificateRequestFormGroup() {
		return new FormGroup<RegisterCACertificateRequestFormProperties>({
			caCertificate: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			verificationCertificate: new FormControl<string | null | undefined>(undefined),
			certificateMode: new FormControl<CertificateMode | null | undefined>(undefined),
		});

	}


	/** The input to the RegisterCertificate operation. */
	export interface RegisterCertificateRequest {

		/** Required */
		certificatePem: string;
		caCertificatePem?: string;
		status?: CertificateStatus;
	}

	/** The input to the RegisterCertificate operation. */
	export interface RegisterCertificateRequestFormProperties {

		/** Required */
		certificatePem: FormControl<string | null | undefined>,
		caCertificatePem: FormControl<string | null | undefined>,
		status: FormControl<CertificateStatus | null | undefined>,
	}
	export function CreateRegisterCertificateRequestFormGroup() {
		return new FormGroup<RegisterCertificateRequestFormProperties>({
			certificatePem: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			caCertificatePem: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<CertificateStatus | null | undefined>(undefined),
		});

	}

	export interface RegisterCertificateWithoutCARequest {

		/** Required */
		certificatePem: string;
		status?: CertificateStatus;
	}
	export interface RegisterCertificateWithoutCARequestFormProperties {

		/** Required */
		certificatePem: FormControl<string | null | undefined>,
		status: FormControl<CertificateStatus | null | undefined>,
	}
	export function CreateRegisterCertificateWithoutCARequestFormGroup() {
		return new FormGroup<RegisterCertificateWithoutCARequestFormProperties>({
			certificatePem: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<CertificateStatus | null | undefined>(undefined),
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
		rejectReason?: string;
	}

	/** The input for the RejectCertificateTransfer operation. */
	export interface RejectCertificateTransferRequestFormProperties {
		rejectReason: FormControl<string | null | undefined>,
	}
	export function CreateRejectCertificateTransferRequestFormGroup() {
		return new FormGroup<RejectCertificateTransferRequestFormProperties>({
			rejectReason: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface RemoveThingFromBillingGroupRequest {
		billingGroupName?: string;
		billingGroupArn?: string;
		thingName?: string;
		thingArn?: string;
	}
	export interface RemoveThingFromBillingGroupRequestFormProperties {
		billingGroupName: FormControl<string | null | undefined>,
		billingGroupArn: FormControl<string | null | undefined>,
		thingName: FormControl<string | null | undefined>,
		thingArn: FormControl<string | null | undefined>,
	}
	export function CreateRemoveThingFromBillingGroupRequestFormGroup() {
		return new FormGroup<RemoveThingFromBillingGroupRequestFormProperties>({
			billingGroupName: new FormControl<string | null | undefined>(undefined),
			billingGroupArn: new FormControl<string | null | undefined>(undefined),
			thingName: new FormControl<string | null | undefined>(undefined),
			thingArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface RemoveThingFromThingGroupRequest {
		thingGroupName?: string;
		thingGroupArn?: string;
		thingName?: string;
		thingArn?: string;
	}
	export interface RemoveThingFromThingGroupRequestFormProperties {
		thingGroupName: FormControl<string | null | undefined>,
		thingGroupArn: FormControl<string | null | undefined>,
		thingName: FormControl<string | null | undefined>,
		thingArn: FormControl<string | null | undefined>,
	}
	export function CreateRemoveThingFromThingGroupRequestFormGroup() {
		return new FormGroup<RemoveThingFromThingGroupRequestFormProperties>({
			thingGroupName: new FormControl<string | null | undefined>(undefined),
			thingGroupArn: new FormControl<string | null | undefined>(undefined),
			thingName: new FormControl<string | null | undefined>(undefined),
			thingArn: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The input for the ReplaceTopicRule operation. */
	export interface ReplaceTopicRuleRequest {

		/** Required */
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
		indexName?: string;

		/** Required */
		queryString: string;
		nextToken?: string;
		maxResults?: number | null;
		queryVersion?: string;
	}
	export interface SearchIndexRequestFormProperties {
		indexName: FormControl<string | null | undefined>,

		/** Required */
		queryString: FormControl<string | null | undefined>,
		nextToken: FormControl<string | null | undefined>,
		maxResults: FormControl<number | null | undefined>,
		queryVersion: FormControl<string | null | undefined>,
	}
	export function CreateSearchIndexRequestFormGroup() {
		return new FormGroup<SearchIndexRequestFormProperties>({
			indexName: new FormControl<string | null | undefined>(undefined),
			queryString: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			nextToken: new FormControl<string | null | undefined>(undefined),
			maxResults: new FormControl<number | null | undefined>(undefined),
			queryVersion: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface SetDefaultAuthorizerRequest {

		/** Required */
		authorizerName: string;
	}
	export interface SetDefaultAuthorizerRequestFormProperties {

		/** Required */
		authorizerName: FormControl<string | null | undefined>,
	}
	export function CreateSetDefaultAuthorizerRequestFormGroup() {
		return new FormGroup<SetDefaultAuthorizerRequestFormProperties>({
			authorizerName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
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

		/** Required */
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

		/** Required */
		logTarget: LogTarget;

		/** Required */
		logLevel: LogLevel;
	}
	export interface SetV2LoggingLevelRequestFormProperties {

		/** Required */
		logLevel: FormControl<LogLevel | null | undefined>,
	}
	export function CreateSetV2LoggingLevelRequestFormGroup() {
		return new FormGroup<SetV2LoggingLevelRequestFormProperties>({
			logLevel: new FormControl<LogLevel | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface SetV2LoggingOptionsRequest {
		roleArn?: string;
		defaultLogLevel?: LogLevel;
		disableAllLogs?: boolean | null;
	}
	export interface SetV2LoggingOptionsRequestFormProperties {
		roleArn: FormControl<string | null | undefined>,
		defaultLogLevel: FormControl<LogLevel | null | undefined>,
		disableAllLogs: FormControl<boolean | null | undefined>,
	}
	export function CreateSetV2LoggingOptionsRequestFormGroup() {
		return new FormGroup<SetV2LoggingOptionsRequestFormProperties>({
			roleArn: new FormControl<string | null | undefined>(undefined),
			defaultLogLevel: new FormControl<LogLevel | null | undefined>(undefined),
			disableAllLogs: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface StartAuditMitigationActionsTaskRequest {

		/** Required */
		target: AuditMitigationActionsTaskTarget;

		/** Required */
		auditCheckToActionsMapping: AuditCheckToActionsMapping;

		/** Required */
		clientRequestToken: string;
	}
	export interface StartAuditMitigationActionsTaskRequestFormProperties {

		/** Required */
		clientRequestToken: FormControl<string | null | undefined>,
	}
	export function CreateStartAuditMitigationActionsTaskRequestFormGroup() {
		return new FormGroup<StartAuditMitigationActionsTaskRequestFormProperties>({
			clientRequestToken: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface StartDetectMitigationActionsTaskRequest {

		/** Required */
		target: DetectMitigationActionsTaskTarget;

		/** Required */
		actions: Array<string>;
		violationEventOccurrenceRange?: ViolationEventOccurrenceRange;
		includeOnlyActiveViolations?: boolean | null;
		includeSuppressedAlerts?: boolean | null;

		/** Required */
		clientRequestToken: string;
	}
	export interface StartDetectMitigationActionsTaskRequestFormProperties {
		includeOnlyActiveViolations: FormControl<boolean | null | undefined>,
		includeSuppressedAlerts: FormControl<boolean | null | undefined>,

		/** Required */
		clientRequestToken: FormControl<string | null | undefined>,
	}
	export function CreateStartDetectMitigationActionsTaskRequestFormGroup() {
		return new FormGroup<StartDetectMitigationActionsTaskRequestFormProperties>({
			includeOnlyActiveViolations: new FormControl<boolean | null | undefined>(undefined),
			includeSuppressedAlerts: new FormControl<boolean | null | undefined>(undefined),
			clientRequestToken: new FormControl<string | null | undefined>(undefined, [Validators.required]),
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

		/** Required */
		inputFileBucket: string;

		/** Required */
		inputFileKey: string;

		/** Required */
		roleArn: string;
	}
	export interface StartThingRegistrationTaskRequestFormProperties {

		/** Required */
		templateBody: FormControl<string | null | undefined>,

		/** Required */
		inputFileBucket: FormControl<string | null | undefined>,

		/** Required */
		inputFileKey: FormControl<string | null | undefined>,

		/** Required */
		roleArn: FormControl<string | null | undefined>,
	}
	export function CreateStartThingRegistrationTaskRequestFormGroup() {
		return new FormGroup<StartThingRegistrationTaskRequestFormProperties>({
			templateBody: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			inputFileBucket: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			inputFileKey: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			roleArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
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
		principal?: string;
		cognitoIdentityPoolId?: string;

		/** Required */
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
		serverName?: string;
	}

	/** Specifies the TLS context to use for the test authorizer request. */
	export interface TlsContextFormProperties {
		serverName: FormControl<string | null | undefined>,
	}
	export function CreateTlsContextFormGroup() {
		return new FormGroup<TlsContextFormProperties>({
			serverName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface TestInvokeAuthorizerRequest {
		token?: string;
		tokenSignature?: string;
		httpContext?: HttpContext;
		mqttContext?: MqttContext;
		tlsContext?: TlsContext;
	}
	export interface TestInvokeAuthorizerRequestFormProperties {
		token: FormControl<string | null | undefined>,
		tokenSignature: FormControl<string | null | undefined>,
	}
	export function CreateTestInvokeAuthorizerRequestFormGroup() {
		return new FormGroup<TestInvokeAuthorizerRequestFormProperties>({
			token: new FormControl<string | null | undefined>(undefined),
			tokenSignature: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The input for the TransferCertificate operation. */
	export interface TransferCertificateRequest {
		transferMessage?: string;
	}

	/** The input for the TransferCertificate operation. */
	export interface TransferCertificateRequestFormProperties {
		transferMessage: FormControl<string | null | undefined>,
	}
	export function CreateTransferCertificateRequestFormGroup() {
		return new FormGroup<TransferCertificateRequestFormProperties>({
			transferMessage: new FormControl<string | null | undefined>(undefined),
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
		roleArn?: string;
		auditNotificationTargetConfigurations?: AuditNotificationTargetConfigurations;
		auditCheckConfigurations?: AuditCheckConfigurations;
	}
	export interface UpdateAccountAuditConfigurationRequestFormProperties {
		roleArn: FormControl<string | null | undefined>,
	}
	export function CreateUpdateAccountAuditConfigurationRequestFormGroup() {
		return new FormGroup<UpdateAccountAuditConfigurationRequestFormProperties>({
			roleArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateAuditSuppressionRequest {

		/**
		 * An audit check name. Checks must be enabled for your account. (Use <code>DescribeAccountAuditConfiguration</code> to see the list of all checks, including those that are enabled or use <code>UpdateAccountAuditConfiguration</code> to select which checks are enabled.)
		 * Required
		 */
		checkName: string;

		/**
		 * Information that identifies the noncompliant resource.
		 * Required
		 */
		resourceIdentifier: ResourceIdentifier;
		expirationDate?: Date;
		suppressIndefinitely?: boolean | null;
		description?: string;
	}
	export interface UpdateAuditSuppressionRequestFormProperties {

		/**
		 * An audit check name. Checks must be enabled for your account. (Use <code>DescribeAccountAuditConfiguration</code> to see the list of all checks, including those that are enabled or use <code>UpdateAccountAuditConfiguration</code> to select which checks are enabled.)
		 * Required
		 */
		checkName: FormControl<string | null | undefined>,
		expirationDate: FormControl<Date | null | undefined>,
		suppressIndefinitely: FormControl<boolean | null | undefined>,
		description: FormControl<string | null | undefined>,
	}
	export function CreateUpdateAuditSuppressionRequestFormGroup() {
		return new FormGroup<UpdateAuditSuppressionRequestFormProperties>({
			checkName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			expirationDate: new FormControl<Date | null | undefined>(undefined),
			suppressIndefinitely: new FormControl<boolean | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateAuthorizerRequest {
		authorizerFunctionArn?: string;
		tokenKeyName?: string;
		tokenSigningPublicKeys?: PublicKeyMap;
		status?: AuthorizerStatus;
		enableCachingForHttp?: boolean | null;
	}
	export interface UpdateAuthorizerRequestFormProperties {
		authorizerFunctionArn: FormControl<string | null | undefined>,
		tokenKeyName: FormControl<string | null | undefined>,
		status: FormControl<AuthorizerStatus | null | undefined>,
		enableCachingForHttp: FormControl<boolean | null | undefined>,
	}
	export function CreateUpdateAuthorizerRequestFormGroup() {
		return new FormGroup<UpdateAuthorizerRequestFormProperties>({
			authorizerFunctionArn: new FormControl<string | null | undefined>(undefined),
			tokenKeyName: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<AuthorizerStatus | null | undefined>(undefined),
			enableCachingForHttp: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface UpdateBillingGroupRequest {

		/** Required */
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

	export interface UpdateCustomMetricRequest {

		/** Required */
		displayName: string;
	}
	export interface UpdateCustomMetricRequestFormProperties {

		/** Required */
		displayName: FormControl<string | null | undefined>,
	}
	export function CreateUpdateCustomMetricRequestFormGroup() {
		return new FormGroup<UpdateCustomMetricRequestFormProperties>({
			displayName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UpdateDimensionRequest {

		/** Required */
		stringValues: Array<string>;
	}
	export interface UpdateDimensionRequestFormProperties {
	}
	export function CreateUpdateDimensionRequestFormGroup() {
		return new FormGroup<UpdateDimensionRequestFormProperties>({
		});

	}

	export interface UpdateDomainConfigurationRequest {
		authorizerConfig?: AuthorizerConfig;
		domainConfigurationStatus?: DomainConfigurationStatus;
		removeAuthorizerConfig?: boolean | null;
		tlsConfig?: TlsConfig;
	}
	export interface UpdateDomainConfigurationRequestFormProperties {
		domainConfigurationStatus: FormControl<DomainConfigurationStatus | null | undefined>,
		removeAuthorizerConfig: FormControl<boolean | null | undefined>,
	}
	export function CreateUpdateDomainConfigurationRequestFormGroup() {
		return new FormGroup<UpdateDomainConfigurationRequestFormProperties>({
			domainConfigurationStatus: new FormControl<DomainConfigurationStatus | null | undefined>(undefined),
			removeAuthorizerConfig: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface UpdateDynamicThingGroupRequest {

		/** Required */
		thingGroupProperties: ThingGroupProperties;
		expectedVersion?: number | null;
		indexName?: string;
		queryString?: string;
		queryVersion?: string;
	}
	export interface UpdateDynamicThingGroupRequestFormProperties {
		expectedVersion: FormControl<number | null | undefined>,
		indexName: FormControl<string | null | undefined>,
		queryString: FormControl<string | null | undefined>,
		queryVersion: FormControl<string | null | undefined>,
	}
	export function CreateUpdateDynamicThingGroupRequestFormGroup() {
		return new FormGroup<UpdateDynamicThingGroupRequestFormProperties>({
			expectedVersion: new FormControl<number | null | undefined>(undefined),
			indexName: new FormControl<string | null | undefined>(undefined),
			queryString: new FormControl<string | null | undefined>(undefined),
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

	export interface UpdateFleetMetricRequest {
		queryString?: string;
		aggregationType?: AggregationType;
		period?: number | null;
		aggregationField?: string;
		description?: string;
		queryVersion?: string;

		/** Required */
		indexName: string;
		unit?: FleetMetricUnit;
		expectedVersion?: number | null;
	}
	export interface UpdateFleetMetricRequestFormProperties {
		queryString: FormControl<string | null | undefined>,
		period: FormControl<number | null | undefined>,
		aggregationField: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,
		queryVersion: FormControl<string | null | undefined>,

		/** Required */
		indexName: FormControl<string | null | undefined>,
		unit: FormControl<FleetMetricUnit | null | undefined>,
		expectedVersion: FormControl<number | null | undefined>,
	}
	export function CreateUpdateFleetMetricRequestFormGroup() {
		return new FormGroup<UpdateFleetMetricRequestFormProperties>({
			queryString: new FormControl<string | null | undefined>(undefined),
			period: new FormControl<number | null | undefined>(undefined),
			aggregationField: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			queryVersion: new FormControl<string | null | undefined>(undefined),
			indexName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			unit: new FormControl<FleetMetricUnit | null | undefined>(undefined),
			expectedVersion: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface UpdateIndexingConfigurationRequest {
		thingIndexingConfiguration?: ThingIndexingConfiguration;
		thingGroupIndexingConfiguration?: ThingGroupIndexingConfiguration;
	}
	export interface UpdateIndexingConfigurationRequestFormProperties {
	}
	export function CreateUpdateIndexingConfigurationRequestFormGroup() {
		return new FormGroup<UpdateIndexingConfigurationRequestFormProperties>({
		});

	}

	export interface UpdateJobRequest {
		description?: string;
		presignedUrlConfig?: PresignedUrlConfig;
		jobExecutionsRolloutConfig?: JobExecutionsRolloutConfig;
		abortConfig?: AbortConfig;
		timeoutConfig?: TimeoutConfig;
		jobExecutionsRetryConfig?: JobExecutionsRetryConfig;
	}
	export interface UpdateJobRequestFormProperties {
		description: FormControl<string | null | undefined>,
	}
	export function CreateUpdateJobRequestFormGroup() {
		return new FormGroup<UpdateJobRequestFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateMitigationActionRequest {
		roleArn?: string;
		actionParams?: MitigationActionParams;
	}
	export interface UpdateMitigationActionRequestFormProperties {
		roleArn: FormControl<string | null | undefined>,
	}
	export function CreateUpdateMitigationActionRequestFormGroup() {
		return new FormGroup<UpdateMitigationActionRequestFormProperties>({
			roleArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdatePackageConfigurationRequest {
		versionUpdateByJobsConfig?: VersionUpdateByJobsConfig;
	}
	export interface UpdatePackageConfigurationRequestFormProperties {
	}
	export function CreateUpdatePackageConfigurationRequestFormGroup() {
		return new FormGroup<UpdatePackageConfigurationRequestFormProperties>({
		});

	}

	export interface UpdatePackageRequest {
		description?: string;
		defaultVersionName?: string;
		unsetDefaultVersion?: boolean | null;
	}
	export interface UpdatePackageRequestFormProperties {
		description: FormControl<string | null | undefined>,
		defaultVersionName: FormControl<string | null | undefined>,
		unsetDefaultVersion: FormControl<boolean | null | undefined>,
	}
	export function CreateUpdatePackageRequestFormGroup() {
		return new FormGroup<UpdatePackageRequestFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			defaultVersionName: new FormControl<string | null | undefined>(undefined),
			unsetDefaultVersion: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface UpdatePackageVersionRequest {
		description?: string;
		attributes?: ResourceAttributes;
		action?: PackageVersionAction;
	}
	export interface UpdatePackageVersionRequestFormProperties {
		description: FormControl<string | null | undefined>,
		action: FormControl<PackageVersionAction | null | undefined>,
	}
	export function CreateUpdatePackageVersionRequestFormGroup() {
		return new FormGroup<UpdatePackageVersionRequestFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			action: new FormControl<PackageVersionAction | null | undefined>(undefined),
		});

	}

	export interface UpdateProvisioningTemplateRequest {
		description?: string;
		enabled?: boolean | null;
		defaultVersionId?: number | null;
		provisioningRoleArn?: string;
		preProvisioningHook?: ProvisioningHook;
		removePreProvisioningHook?: boolean | null;
	}
	export interface UpdateProvisioningTemplateRequestFormProperties {
		description: FormControl<string | null | undefined>,
		enabled: FormControl<boolean | null | undefined>,
		defaultVersionId: FormControl<number | null | undefined>,
		provisioningRoleArn: FormControl<string | null | undefined>,
		removePreProvisioningHook: FormControl<boolean | null | undefined>,
	}
	export function CreateUpdateProvisioningTemplateRequestFormGroup() {
		return new FormGroup<UpdateProvisioningTemplateRequestFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			enabled: new FormControl<boolean | null | undefined>(undefined),
			defaultVersionId: new FormControl<number | null | undefined>(undefined),
			provisioningRoleArn: new FormControl<string | null | undefined>(undefined),
			removePreProvisioningHook: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface UpdateRoleAliasRequest {
		roleArn?: string;
		credentialDurationSeconds?: number | null;
	}
	export interface UpdateRoleAliasRequestFormProperties {
		roleArn: FormControl<string | null | undefined>,
		credentialDurationSeconds: FormControl<number | null | undefined>,
	}
	export function CreateUpdateRoleAliasRequestFormGroup() {
		return new FormGroup<UpdateRoleAliasRequestFormProperties>({
			roleArn: new FormControl<string | null | undefined>(undefined),
			credentialDurationSeconds: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface UpdateScheduledAuditRequest {
		frequency?: AuditFrequency;
		dayOfMonth?: string;
		dayOfWeek?: DayOfWeek;
		targetCheckNames?: Array<string>;
	}
	export interface UpdateScheduledAuditRequestFormProperties {
		frequency: FormControl<AuditFrequency | null | undefined>,
		dayOfMonth: FormControl<string | null | undefined>,
		dayOfWeek: FormControl<DayOfWeek | null | undefined>,
	}
	export function CreateUpdateScheduledAuditRequestFormGroup() {
		return new FormGroup<UpdateScheduledAuditRequestFormProperties>({
			frequency: new FormControl<AuditFrequency | null | undefined>(undefined),
			dayOfMonth: new FormControl<string | null | undefined>(undefined),
			dayOfWeek: new FormControl<DayOfWeek | null | undefined>(undefined),
		});

	}

	export interface UpdateSecurityProfileRequest {
		securityProfileDescription?: string;
		behaviors?: Array<Behavior>;
		alertTargets?: AlertTargets;
		additionalMetricsToRetain?: Array<string>;
		additionalMetricsToRetainV2?: Array<MetricToRetain>;
		deleteBehaviors?: boolean | null;
		deleteAlertTargets?: boolean | null;
		deleteAdditionalMetricsToRetain?: boolean | null;
	}
	export interface UpdateSecurityProfileRequestFormProperties {
		securityProfileDescription: FormControl<string | null | undefined>,
		deleteBehaviors: FormControl<boolean | null | undefined>,
		deleteAlertTargets: FormControl<boolean | null | undefined>,
		deleteAdditionalMetricsToRetain: FormControl<boolean | null | undefined>,
	}
	export function CreateUpdateSecurityProfileRequestFormGroup() {
		return new FormGroup<UpdateSecurityProfileRequestFormProperties>({
			securityProfileDescription: new FormControl<string | null | undefined>(undefined),
			deleteBehaviors: new FormControl<boolean | null | undefined>(undefined),
			deleteAlertTargets: new FormControl<boolean | null | undefined>(undefined),
			deleteAdditionalMetricsToRetain: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface UpdateStreamRequest {
		description?: string;
		files?: Array<StreamFile>;
		roleArn?: string;
	}
	export interface UpdateStreamRequestFormProperties {
		description: FormControl<string | null | undefined>,
		roleArn: FormControl<string | null | undefined>,
	}
	export function CreateUpdateStreamRequestFormGroup() {
		return new FormGroup<UpdateStreamRequestFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			roleArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateThingGroupRequest {

		/** Required */
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
		thingName?: string;
		thingGroupsToAdd?: Array<string>;
		thingGroupsToRemove?: Array<string>;
		overrideDynamicGroups?: boolean | null;
	}
	export interface UpdateThingGroupsForThingRequestFormProperties {
		thingName: FormControl<string | null | undefined>,
		overrideDynamicGroups: FormControl<boolean | null | undefined>,
	}
	export function CreateUpdateThingGroupsForThingRequestFormGroup() {
		return new FormGroup<UpdateThingGroupsForThingRequestFormProperties>({
			thingName: new FormControl<string | null | undefined>(undefined),
			overrideDynamicGroups: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** The input for the UpdateThing operation. */
	export interface UpdateThingRequest {
		thingTypeName?: string;
		attributePayload?: AttributePayload;
		expectedVersion?: number | null;
		removeThingType?: boolean | null;
	}

	/** The input for the UpdateThing operation. */
	export interface UpdateThingRequestFormProperties {
		thingTypeName: FormControl<string | null | undefined>,
		expectedVersion: FormControl<number | null | undefined>,
		removeThingType: FormControl<boolean | null | undefined>,
	}
	export function CreateUpdateThingRequestFormGroup() {
		return new FormGroup<UpdateThingRequestFormProperties>({
			thingTypeName: new FormControl<string | null | undefined>(undefined),
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

		/** Required */
		behaviors: Array<Behavior>;
	}
	export interface ValidateSecurityProfileBehaviorsRequestFormProperties {
	}
	export function CreateValidateSecurityProfileBehaviorsRequestFormGroup() {
		return new FormGroup<ValidateSecurityProfileBehaviorsRequestFormProperties>({
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * <p>Accepts a pending certificate transfer. The default state of the certificate is INACTIVE.</p> <p>To check for pending certificate transfers, call <a>ListCertificates</a> to enumerate your certificates.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">AcceptCertificateTransfer</a> action.</p>
		 * Patch accept-certificate-transfer/{certificateId}
		 * @param {string} certificateId The ID of the certificate. (The last part of the certificate ARN contains the certificate ID.)
		 * @param {boolean} setAsActive Specifies whether the certificate is active.
		 * @return {void} Success
		 */
		AcceptCertificateTransfer(certificateId: string, setAsActive: boolean | null | undefined): Observable<HttpResponse<string>> {
			return this.http.patch(this.baseUri + 'accept-certificate-transfer/' + (certificateId == null ? '' : encodeURIComponent(certificateId)) + '&setAsActive=' + setAsActive, null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Adds a thing to a billing group.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">AddThingToBillingGroup</a> action.</p>
		 * Put billing-groups/addThingToBillingGroup
		 * @return {AddThingToBillingGroupResponse} Success
		 */
		AddThingToBillingGroup(requestBody: AddThingToBillingGroupPutBody): Observable<AddThingToBillingGroupResponse> {
			return this.http.put<AddThingToBillingGroupResponse>(this.baseUri + 'billing-groups/addThingToBillingGroup', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Adds a thing to a thing group.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">AddThingToThingGroup</a> action.</p>
		 * Put thing-groups/addThingToThingGroup
		 * @return {AddThingToThingGroupResponse} Success
		 */
		AddThingToThingGroup(requestBody: AddThingToThingGroupPutBody): Observable<AddThingToThingGroupResponse> {
			return this.http.put<AddThingToThingGroupResponse>(this.baseUri + 'thing-groups/addThingToThingGroup', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Associates a group with a continuous job. The following criteria must be met: </p> <ul> <li> <p>The job must have been created with the <code>targetSelection</code> field set to "CONTINUOUS".</p> </li> <li> <p>The job status must currently be "IN_PROGRESS".</p> </li> <li> <p>The total number of targets associated with a job must not exceed 100.</p> </li> </ul> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">AssociateTargetsWithJob</a> action.</p>
		 * Post jobs/{jobId}/targets
		 * @param {string} jobId The unique identifier you assigned to this job when it was created.
		 * @param {string} namespaceId <p>The namespace used to indicate that a job is a customer-managed job.</p> <p>When you specify a value for this parameter, Amazon Web Services IoT Core sends jobs notifications to MQTT topics that contain the value in the following format.</p> <p> <code>$aws/things/<i>THING_NAME</i>/jobs/<i>JOB_ID</i>/notify-namespace-<i>NAMESPACE_ID</i>/</code> </p> <note> <p>The <code>namespaceId</code> feature is in public preview.</p> </note>
		 * @return {AssociateTargetsWithJobResponse} Success
		 */
		AssociateTargetsWithJob(jobId: string, namespaceId: string | null | undefined, requestBody: AssociateTargetsWithJobPostBody): Observable<AssociateTargetsWithJobResponse> {
			return this.http.post<AssociateTargetsWithJobResponse>(this.baseUri + 'jobs/' + (jobId == null ? '' : encodeURIComponent(jobId)) + '/targets&namespaceId=' + (namespaceId == null ? '' : encodeURIComponent(namespaceId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Attaches the specified policy to the specified principal (certificate or other credential).</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">AttachPolicy</a> action.</p>
		 * Put target-policies/{policyName}
		 * @param {string} policyName The name of the policy to attach.
		 * @return {void} Success
		 */
		AttachPolicy(policyName: string, requestBody: AttachPolicyPutBody): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'target-policies/' + (policyName == null ? '' : encodeURIComponent(policyName)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Detaches a policy from the specified target.</p> <note> <p>Because of the distributed nature of Amazon Web Services, it can take up to five minutes after a policy is detached before it's ready to be deleted.</p> </note> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DetachPolicy</a> action.</p>
		 * Post target-policies/{policyName}
		 * @param {string} policyName The policy to detach.
		 * @return {void} Success
		 */
		DetachPolicy(policyName: string, requestBody: DetachPolicyPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'target-policies/' + (policyName == null ? '' : encodeURIComponent(policyName)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Attaches the specified policy to the specified principal (certificate or other credential).</p> <p> <b>Note:</b> This action is deprecated and works as expected for backward compatibility, but we won't add enhancements. Use <a>AttachPolicy</a> instead.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">AttachPrincipalPolicy</a> action.</p>
		 * Put principal-policies/{policyName}#x-amzn-iot-principal
		 * @param {string} policyName The policy name.
		 * @return {void} Success
		 */
		AttachPrincipalPolicy(policyName: string): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'principal-policies/' + (policyName == null ? '' : encodeURIComponent(policyName)) + '#x-amzn-iot-principal', null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Removes the specified policy from the specified certificate.</p> <p> <b>Note:</b> This action is deprecated and works as expected for backward compatibility, but we won't add enhancements. Use <a>DetachPolicy</a> instead.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DetachPrincipalPolicy</a> action.</p>
		 * Delete principal-policies/{policyName}#x-amzn-iot-principal
		 * @param {string} policyName The name of the policy to detach.
		 * @return {void} Success
		 */
		DetachPrincipalPolicy(policyName: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'principal-policies/' + (policyName == null ? '' : encodeURIComponent(policyName)) + '#x-amzn-iot-principal', { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Associates a Device Defender security profile with a thing group or this account. Each thing group or account can have up to five security profiles associated with it.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">AttachSecurityProfile</a> action.</p>
		 * Put security-profiles/{securityProfileName}/targets#securityProfileTargetArn
		 * @param {string} securityProfileName The security profile that is attached.
		 * @param {string} securityProfileTargetArn The ARN of the target (thing group) to which the security profile is attached.
		 * @return {AttachSecurityProfileResponse} Success
		 */
		AttachSecurityProfile(securityProfileName: string, securityProfileTargetArn: string): Observable<AttachSecurityProfileResponse> {
			return this.http.put<AttachSecurityProfileResponse>(this.baseUri + 'security-profiles/' + (securityProfileName == null ? '' : encodeURIComponent(securityProfileName)) + '/targets#securityProfileTargetArn&securityProfileTargetArn=' + (securityProfileTargetArn == null ? '' : encodeURIComponent(securityProfileTargetArn)), null, {});
		}

		/**
		 * <p>Disassociates a Device Defender security profile from a thing group or from this account.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DetachSecurityProfile</a> action.</p>
		 * Delete security-profiles/{securityProfileName}/targets#securityProfileTargetArn
		 * @param {string} securityProfileName The security profile that is detached.
		 * @param {string} securityProfileTargetArn The ARN of the thing group from which the security profile is detached.
		 * @return {DetachSecurityProfileResponse} Success
		 */
		DetachSecurityProfile(securityProfileName: string, securityProfileTargetArn: string): Observable<DetachSecurityProfileResponse> {
			return this.http.delete<DetachSecurityProfileResponse>(this.baseUri + 'security-profiles/' + (securityProfileName == null ? '' : encodeURIComponent(securityProfileName)) + '/targets#securityProfileTargetArn&securityProfileTargetArn=' + (securityProfileTargetArn == null ? '' : encodeURIComponent(securityProfileTargetArn)), {});
		}

		/**
		 * <p>Attaches the specified principal to the specified thing. A principal can be X.509 certificates, Amazon Cognito identities or federated identities.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">AttachThingPrincipal</a> action.</p>
		 * Put things/{thingName}/principals#x-amzn-principal
		 * @param {string} thingName The name of the thing.
		 * @return {AttachThingPrincipalResponse} Success
		 */
		AttachThingPrincipal(thingName: string): Observable<AttachThingPrincipalResponse> {
			return this.http.put<AttachThingPrincipalResponse>(this.baseUri + 'things/' + (thingName == null ? '' : encodeURIComponent(thingName)) + '/principals#x-amzn-principal', null, {});
		}

		/**
		 * <p>Detaches the specified principal from the specified thing. A principal can be X.509 certificates, IAM users, groups, and roles, Amazon Cognito identities or federated identities.</p> <note> <p>This call is asynchronous. It might take several seconds for the detachment to propagate.</p> </note> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DetachThingPrincipal</a> action.</p>
		 * Delete things/{thingName}/principals#x-amzn-principal
		 * @param {string} thingName The name of the thing.
		 * @return {DetachThingPrincipalResponse} Success
		 */
		DetachThingPrincipal(thingName: string): Observable<DetachThingPrincipalResponse> {
			return this.http.delete<DetachThingPrincipalResponse>(this.baseUri + 'things/' + (thingName == null ? '' : encodeURIComponent(thingName)) + '/principals#x-amzn-principal', {});
		}

		/**
		 * <p>Cancels a mitigation action task that is in progress. If the task is not in progress, an InvalidRequestException occurs.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">CancelAuditMitigationActionsTask</a> action.</p>
		 * Put audit/mitigationactions/tasks/{taskId}/cancel
		 * @param {string} taskId The unique identifier for the task that you want to cancel. 
		 * @return {CancelAuditMitigationActionsTaskResponse} Success
		 */
		CancelAuditMitigationActionsTask(taskId: string): Observable<CancelAuditMitigationActionsTaskResponse> {
			return this.http.put<CancelAuditMitigationActionsTaskResponse>(this.baseUri + 'audit/mitigationactions/tasks/' + (taskId == null ? '' : encodeURIComponent(taskId)) + '/cancel', null, {});
		}

		/**
		 * <p>Cancels an audit that is in progress. The audit can be either scheduled or on demand. If the audit isn't in progress, an "InvalidRequestException" occurs.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">CancelAuditTask</a> action.</p>
		 * Put audit/tasks/{taskId}/cancel
		 * @param {string} taskId The ID of the audit you want to cancel. You can only cancel an audit that is "IN_PROGRESS".
		 * @return {CancelAuditTaskResponse} Success
		 */
		CancelAuditTask(taskId: string): Observable<CancelAuditTaskResponse> {
			return this.http.put<CancelAuditTaskResponse>(this.baseUri + 'audit/tasks/' + (taskId == null ? '' : encodeURIComponent(taskId)) + '/cancel', null, {});
		}

		/**
		 * <p>Cancels a pending transfer for the specified certificate.</p> <p> <b>Note</b> Only the transfer source account can use this operation to cancel a transfer. (Transfer destinations can use <a>RejectCertificateTransfer</a> instead.) After transfer, IoT returns the certificate to the source account in the INACTIVE state. After the destination account has accepted the transfer, the transfer cannot be cancelled.</p> <p>After a certificate transfer is cancelled, the status of the certificate changes from PENDING_TRANSFER to INACTIVE.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">CancelCertificateTransfer</a> action.</p>
		 * Patch cancel-certificate-transfer/{certificateId}
		 * @param {string} certificateId The ID of the certificate. (The last part of the certificate ARN contains the certificate ID.)
		 * @return {void} Success
		 */
		CancelCertificateTransfer(certificateId: string): Observable<HttpResponse<string>> {
			return this.http.patch(this.baseUri + 'cancel-certificate-transfer/' + (certificateId == null ? '' : encodeURIComponent(certificateId)), null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p> Cancels a Device Defender ML Detect mitigation action. </p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">CancelDetectMitigationActionsTask</a> action.</p>
		 * Put detect/mitigationactions/tasks/{taskId}/cancel
		 * @param {string} taskId  The unique identifier of the task. 
		 * @return {CancelDetectMitigationActionsTaskResponse} Success
		 */
		CancelDetectMitigationActionsTask(taskId: string): Observable<CancelDetectMitigationActionsTaskResponse> {
			return this.http.put<CancelDetectMitigationActionsTaskResponse>(this.baseUri + 'detect/mitigationactions/tasks/' + (taskId == null ? '' : encodeURIComponent(taskId)) + '/cancel', null, {});
		}

		/**
		 * <p>Cancels a job.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">CancelJob</a> action.</p>
		 * Put jobs/{jobId}/cancel
		 * @param {string} jobId The unique identifier you assigned to this job when it was created.
		 * @param {boolean} force <p>(Optional) If <code>true</code> job executions with status "IN_PROGRESS" and "QUEUED" are canceled, otherwise only job executions with status "QUEUED" are canceled. The default is <code>false</code>.</p> <p>Canceling a job which is "IN_PROGRESS", will cause a device which is executing the job to be unable to update the job execution status. Use caution and ensure that each device executing a job which is canceled is able to recover to a valid state.</p>
		 * @return {CancelJobResponse} Success
		 */
		CancelJob(jobId: string, force: boolean | null | undefined, requestBody: CancelJobPutBody): Observable<CancelJobResponse> {
			return this.http.put<CancelJobResponse>(this.baseUri + 'jobs/' + (jobId == null ? '' : encodeURIComponent(jobId)) + '/cancel&force=' + force, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Cancels the execution of a job for a given thing.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">CancelJobExecution</a> action.</p>
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
		 * <p>Clears the default authorizer.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ClearDefaultAuthorizer</a> action.</p>
		 * Delete default-authorizer
		 * @return {ClearDefaultAuthorizerResponse} Success
		 */
		ClearDefaultAuthorizer(): Observable<ClearDefaultAuthorizerResponse> {
			return this.http.delete<ClearDefaultAuthorizerResponse>(this.baseUri + 'default-authorizer', {});
		}

		/**
		 * <p>Describes the default authorizer.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DescribeDefaultAuthorizer</a> action.</p>
		 * Get default-authorizer
		 * @return {DescribeDefaultAuthorizerResponse} Success
		 */
		DescribeDefaultAuthorizer(): Observable<DescribeDefaultAuthorizerResponse> {
			return this.http.get<DescribeDefaultAuthorizerResponse>(this.baseUri + 'default-authorizer', {});
		}

		/**
		 * <p>Sets the default authorizer. This will be used if a websocket connection is made without specifying an authorizer.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">SetDefaultAuthorizer</a> action.</p>
		 * Post default-authorizer
		 * @return {SetDefaultAuthorizerResponse} Success
		 */
		SetDefaultAuthorizer(requestBody: SetDefaultAuthorizerPostBody): Observable<SetDefaultAuthorizerResponse> {
			return this.http.post<SetDefaultAuthorizerResponse>(this.baseUri + 'default-authorizer', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Confirms a topic rule destination. When you create a rule requiring a destination, IoT sends a confirmation message to the endpoint or base address you specify. The message includes a token which you pass back when calling <code>ConfirmTopicRuleDestination</code> to confirm that you own or have access to the endpoint.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ConfirmTopicRuleDestination</a> action.</p>
		 * Get confirmdestination/{confirmationToken}
		 * @param {string} confirmationToken The token used to confirm ownership or access to the topic rule confirmation URL.
		 * @return {ConfirmTopicRuleDestinationResponse} Success
		 */
		ConfirmTopicRuleDestination(confirmationToken: string): Observable<ConfirmTopicRuleDestinationResponse> {
			return this.http.get<ConfirmTopicRuleDestinationResponse>(this.baseUri + 'confirmdestination/' + (confirmationToken == null ? '' : encodeURIComponent(confirmationToken)), {});
		}

		/**
		 * <p> Creates a Device Defender audit suppression. </p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">CreateAuditSuppression</a> action.</p>
		 * Post audit/suppressions/create
		 * @return {CreateAuditSuppressionResponse} Success
		 */
		CreateAuditSuppression(requestBody: CreateAuditSuppressionPostBody): Observable<CreateAuditSuppressionResponse> {
			return this.http.post<CreateAuditSuppressionResponse>(this.baseUri + 'audit/suppressions/create', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Creates an authorizer.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">CreateAuthorizer</a> action.</p>
		 * Post authorizer/{authorizerName}
		 * @param {string} authorizerName The authorizer name.
		 * @return {CreateAuthorizerResponse} Success
		 */
		CreateAuthorizer(authorizerName: string, requestBody: CreateAuthorizerPostBody): Observable<CreateAuthorizerResponse> {
			return this.http.post<CreateAuthorizerResponse>(this.baseUri + 'authorizer/' + (authorizerName == null ? '' : encodeURIComponent(authorizerName)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Deletes an authorizer.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DeleteAuthorizer</a> action.</p>
		 * Delete authorizer/{authorizerName}
		 * @param {string} authorizerName The name of the authorizer to delete.
		 * @return {DeleteAuthorizerResponse} Success
		 */
		DeleteAuthorizer(authorizerName: string): Observable<DeleteAuthorizerResponse> {
			return this.http.delete<DeleteAuthorizerResponse>(this.baseUri + 'authorizer/' + (authorizerName == null ? '' : encodeURIComponent(authorizerName)), {});
		}

		/**
		 * <p>Describes an authorizer.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DescribeAuthorizer</a> action.</p>
		 * Get authorizer/{authorizerName}
		 * @param {string} authorizerName The name of the authorizer to describe.
		 * @return {DescribeAuthorizerResponse} Success
		 */
		DescribeAuthorizer(authorizerName: string): Observable<DescribeAuthorizerResponse> {
			return this.http.get<DescribeAuthorizerResponse>(this.baseUri + 'authorizer/' + (authorizerName == null ? '' : encodeURIComponent(authorizerName)), {});
		}

		/**
		 * <p>Updates an authorizer.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">UpdateAuthorizer</a> action.</p>
		 * Put authorizer/{authorizerName}
		 * @param {string} authorizerName The authorizer name.
		 * @return {UpdateAuthorizerResponse} Success
		 */
		UpdateAuthorizer(authorizerName: string, requestBody: UpdateAuthorizerPutBody): Observable<UpdateAuthorizerResponse> {
			return this.http.put<UpdateAuthorizerResponse>(this.baseUri + 'authorizer/' + (authorizerName == null ? '' : encodeURIComponent(authorizerName)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Creates a billing group.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">CreateBillingGroup</a> action.</p>
		 * Post billing-groups/{billingGroupName}
		 * @param {string} billingGroupName The name you wish to give to the billing group.
		 * @return {CreateBillingGroupResponse} Success
		 */
		CreateBillingGroup(billingGroupName: string, requestBody: CreateBillingGroupPostBody): Observable<CreateBillingGroupResponse> {
			return this.http.post<CreateBillingGroupResponse>(this.baseUri + 'billing-groups/' + (billingGroupName == null ? '' : encodeURIComponent(billingGroupName)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Deletes the billing group.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DeleteBillingGroup</a> action.</p>
		 * Delete billing-groups/{billingGroupName}
		 * @param {string} billingGroupName The name of the billing group.
		 * @param {number} expectedVersion The expected version of the billing group. If the version of the billing group does not match the expected version specified in the request, the <code>DeleteBillingGroup</code> request is rejected with a <code>VersionConflictException</code>.
		 * @return {DeleteBillingGroupResponse} Success
		 */
		DeleteBillingGroup(billingGroupName: string, expectedVersion: number | null | undefined): Observable<DeleteBillingGroupResponse> {
			return this.http.delete<DeleteBillingGroupResponse>(this.baseUri + 'billing-groups/' + (billingGroupName == null ? '' : encodeURIComponent(billingGroupName)) + '&expectedVersion=' + expectedVersion, {});
		}

		/**
		 * <p>Returns information about a billing group.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DescribeBillingGroup</a> action.</p>
		 * Get billing-groups/{billingGroupName}
		 * @param {string} billingGroupName The name of the billing group.
		 * @return {DescribeBillingGroupResponse} Success
		 */
		DescribeBillingGroup(billingGroupName: string): Observable<DescribeBillingGroupResponse> {
			return this.http.get<DescribeBillingGroupResponse>(this.baseUri + 'billing-groups/' + (billingGroupName == null ? '' : encodeURIComponent(billingGroupName)), {});
		}

		/**
		 * <p>Updates information about the billing group.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">UpdateBillingGroup</a> action.</p>
		 * Patch billing-groups/{billingGroupName}
		 * @param {string} billingGroupName The name of the billing group.
		 * @return {UpdateBillingGroupResponse} Success
		 */
		UpdateBillingGroup(billingGroupName: string, requestBody: UpdateBillingGroupPatchBody): Observable<UpdateBillingGroupResponse> {
			return this.http.patch<UpdateBillingGroupResponse>(this.baseUri + 'billing-groups/' + (billingGroupName == null ? '' : encodeURIComponent(billingGroupName)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Creates an X.509 certificate using the specified certificate signing request. </p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">CreateCertificateFromCsr</a> action. </p> <note> <p>The CSR must include a public key that is either an RSA key with a length of at least 2048 bits or an ECC key from NIST P-256 or NIST P-384 curves. For supported certificates, consult <a href="https://docs.aws.amazon.com/iot/latest/developerguide/x509-client-certs.html#x509-cert-algorithms"> Certificate signing algorithms supported by IoT</a>. </p> </note> <note> <p>Reusing the same certificate signing request (CSR) results in a distinct certificate.</p> </note> <p>You can create multiple certificates in a batch by creating a directory, copying multiple <code>.csr</code> files into that directory, and then specifying that directory on the command line. The following commands show how to create a batch of certificates given a batch of CSRs. In the following commands, we assume that a set of CSRs are located inside of the directory my-csr-directory:</p> <p>On Linux and OS X, the command is: </p> <p> <code>$ ls my-csr-directory/ | xargs -I {} aws iot create-certificate-from-csr --certificate-signing-request file://my-csr-directory/{}</code> </p> <p>This command lists all of the CSRs in my-csr-directory and pipes each CSR file name to the <code>aws iot create-certificate-from-csr</code> Amazon Web Services CLI command to create a certificate for the corresponding CSR. </p> <p>You can also run the <code>aws iot create-certificate-from-csr</code> part of the command in parallel to speed up the certificate creation process:</p> <p> <code>$ ls my-csr-directory/ | xargs -P 10 -I {} aws iot create-certificate-from-csr --certificate-signing-request file://my-csr-directory/{} </code> </p> <p>On Windows PowerShell, the command to create certificates for all CSRs in my-csr-directory is:</p> <p> <code>&gt; ls -Name my-csr-directory | %{aws iot create-certificate-from-csr --certificate-signing-request file://my-csr-directory/$_} </code> </p> <p>On a Windows command prompt, the command to create certificates for all CSRs in my-csr-directory is:</p> <p> <code>&gt; forfiles /p my-csr-directory /c "cmd /c aws iot create-certificate-from-csr --certificate-signing-request file://@path" </code> </p>
		 * Post certificates
		 * @param {boolean} setAsActive Specifies whether the certificate is active.
		 * @return {CreateCertificateFromCsrResponse} Success
		 */
		CreateCertificateFromCsr(setAsActive: boolean | null | undefined, requestBody: CreateCertificateFromCsrPostBody): Observable<CreateCertificateFromCsrResponse> {
			return this.http.post<CreateCertificateFromCsrResponse>(this.baseUri + 'certificates?setAsActive=' + setAsActive, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Lists the certificates registered in your Amazon Web Services account.</p> <p>The results are paginated with a default page size of 25. You can use the returned marker to retrieve additional results.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ListCertificates</a> action.</p>
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
		 * <p> Use this API to define a Custom Metric published by your devices to Device Defender. </p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">CreateCustomMetric</a> action.</p>
		 * Post custom-metric/{metricName}
		 * @param {string} metricName  The name of the custom metric. This will be used in the metric report submitted from the device/thing. The name can't begin with <code>aws:</code>. You can't change the name after you define it.
		 * @return {CreateCustomMetricResponse} Success
		 */
		CreateCustomMetric(metricName: string, requestBody: CreateCustomMetricPostBody): Observable<CreateCustomMetricResponse> {
			return this.http.post<CreateCustomMetricResponse>(this.baseUri + 'custom-metric/' + (metricName == null ? '' : encodeURIComponent(metricName)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p> Deletes a Device Defender detect custom metric. </p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DeleteCustomMetric</a> action.</p> <note> <p>Before you can delete a custom metric, you must first remove the custom metric from all security profiles it's a part of. The security profile associated with the custom metric can be found using the <a href="https://docs.aws.amazon.com/iot/latest/apireference/API_ListSecurityProfiles.html">ListSecurityProfiles</a> API with <code>metricName</code> set to your custom metric name.</p> </note>
		 * Delete custom-metric/{metricName}
		 * @param {string} metricName  The name of the custom metric. 
		 * @return {DeleteCustomMetricResponse} Success
		 */
		DeleteCustomMetric(metricName: string): Observable<DeleteCustomMetricResponse> {
			return this.http.delete<DeleteCustomMetricResponse>(this.baseUri + 'custom-metric/' + (metricName == null ? '' : encodeURIComponent(metricName)), {});
		}

		/**
		 * <p> Gets information about a Device Defender detect custom metric. </p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DescribeCustomMetric</a> action.</p>
		 * Get custom-metric/{metricName}
		 * @param {string} metricName  The name of the custom metric. 
		 * @return {DescribeCustomMetricResponse} Success
		 */
		DescribeCustomMetric(metricName: string): Observable<DescribeCustomMetricResponse> {
			return this.http.get<DescribeCustomMetricResponse>(this.baseUri + 'custom-metric/' + (metricName == null ? '' : encodeURIComponent(metricName)), {});
		}

		/**
		 * <p>Updates a Device Defender detect custom metric. </p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">UpdateCustomMetric</a> action.</p>
		 * Patch custom-metric/{metricName}
		 * @param {string} metricName  The name of the custom metric. Cannot be updated. 
		 * @return {UpdateCustomMetricResponse} Success
		 */
		UpdateCustomMetric(metricName: string, requestBody: UpdateCustomMetricPatchBody): Observable<UpdateCustomMetricResponse> {
			return this.http.patch<UpdateCustomMetricResponse>(this.baseUri + 'custom-metric/' + (metricName == null ? '' : encodeURIComponent(metricName)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Create a dimension that you can use to limit the scope of a metric used in a security profile for IoT Device Defender. For example, using a <code>TOPIC_FILTER</code> dimension, you can narrow down the scope of the metric only to MQTT topics whose name match the pattern specified in the dimension.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">CreateDimension</a> action.</p>
		 * Post dimensions/{name}
		 * @param {string} name A unique identifier for the dimension. Choose something that describes the type and value to make it easy to remember what it does.
		 * @return {CreateDimensionResponse} Success
		 */
		CreateDimension(name: string, requestBody: CreateDimensionPostBody): Observable<CreateDimensionResponse> {
			return this.http.post<CreateDimensionResponse>(this.baseUri + 'dimensions/' + (name == null ? '' : encodeURIComponent(name)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Removes the specified dimension from your Amazon Web Services accounts.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DeleteDimension</a> action.</p>
		 * Delete dimensions/{name}
		 * @param {string} name The unique identifier for the dimension that you want to delete.
		 * @return {DeleteDimensionResponse} Success
		 */
		DeleteDimension(name: string): Observable<DeleteDimensionResponse> {
			return this.http.delete<DeleteDimensionResponse>(this.baseUri + 'dimensions/' + (name == null ? '' : encodeURIComponent(name)), {});
		}

		/**
		 * <p>Provides details about a dimension that is defined in your Amazon Web Services accounts.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DescribeDimension</a> action.</p>
		 * Get dimensions/{name}
		 * @param {string} name The unique identifier for the dimension.
		 * @return {DescribeDimensionResponse} Success
		 */
		DescribeDimension(name: string): Observable<DescribeDimensionResponse> {
			return this.http.get<DescribeDimensionResponse>(this.baseUri + 'dimensions/' + (name == null ? '' : encodeURIComponent(name)), {});
		}

		/**
		 * <p>Updates the definition for a dimension. You cannot change the type of a dimension after it is created (you can delete it and recreate it).</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">UpdateDimension</a> action.</p>
		 * Patch dimensions/{name}
		 * @param {string} name A unique identifier for the dimension. Choose something that describes the type and value to make it easy to remember what it does.
		 * @return {UpdateDimensionResponse} Success
		 */
		UpdateDimension(name: string, requestBody: UpdateDimensionPatchBody): Observable<UpdateDimensionResponse> {
			return this.http.patch<UpdateDimensionResponse>(this.baseUri + 'dimensions/' + (name == null ? '' : encodeURIComponent(name)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Creates a domain configuration.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">CreateDomainConfiguration</a> action.</p>
		 * Post domainConfigurations/{domainConfigurationName}
		 * @param {string} domainConfigurationName The name of the domain configuration. This value must be unique to a region.
		 * @return {CreateDomainConfigurationResponse} Success
		 */
		CreateDomainConfiguration(domainConfigurationName: string, requestBody: CreateDomainConfigurationPostBody): Observable<CreateDomainConfigurationResponse> {
			return this.http.post<CreateDomainConfigurationResponse>(this.baseUri + 'domainConfigurations/' + (domainConfigurationName == null ? '' : encodeURIComponent(domainConfigurationName)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Deletes the specified domain configuration.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DeleteDomainConfiguration</a> action.</p>
		 * Delete domainConfigurations/{domainConfigurationName}
		 * @param {string} domainConfigurationName The name of the domain configuration to be deleted.
		 * @return {DeleteDomainConfigurationResponse} Success
		 */
		DeleteDomainConfiguration(domainConfigurationName: string): Observable<DeleteDomainConfigurationResponse> {
			return this.http.delete<DeleteDomainConfigurationResponse>(this.baseUri + 'domainConfigurations/' + (domainConfigurationName == null ? '' : encodeURIComponent(domainConfigurationName)), {});
		}

		/**
		 * <p>Gets summary information about a domain configuration.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DescribeDomainConfiguration</a> action.</p>
		 * Get domainConfigurations/{domainConfigurationName}
		 * @param {string} domainConfigurationName The name of the domain configuration.
		 * @return {DescribeDomainConfigurationResponse} Success
		 */
		DescribeDomainConfiguration(domainConfigurationName: string): Observable<DescribeDomainConfigurationResponse> {
			return this.http.get<DescribeDomainConfigurationResponse>(this.baseUri + 'domainConfigurations/' + (domainConfigurationName == null ? '' : encodeURIComponent(domainConfigurationName)), {});
		}

		/**
		 * <p>Updates values stored in the domain configuration. Domain configurations for default endpoints can't be updated.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">UpdateDomainConfiguration</a> action.</p>
		 * Put domainConfigurations/{domainConfigurationName}
		 * @param {string} domainConfigurationName The name of the domain configuration to be updated.
		 * @return {UpdateDomainConfigurationResponse} Success
		 */
		UpdateDomainConfiguration(domainConfigurationName: string, requestBody: UpdateDomainConfigurationPutBody): Observable<UpdateDomainConfigurationResponse> {
			return this.http.put<UpdateDomainConfigurationResponse>(this.baseUri + 'domainConfigurations/' + (domainConfigurationName == null ? '' : encodeURIComponent(domainConfigurationName)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Creates a dynamic thing group.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">CreateDynamicThingGroup</a> action.</p>
		 * Post dynamic-thing-groups/{thingGroupName}
		 * @param {string} thingGroupName The dynamic thing group name to create.
		 * @return {CreateDynamicThingGroupResponse} Success
		 */
		CreateDynamicThingGroup(thingGroupName: string, requestBody: CreateDynamicThingGroupPostBody): Observable<CreateDynamicThingGroupResponse> {
			return this.http.post<CreateDynamicThingGroupResponse>(this.baseUri + 'dynamic-thing-groups/' + (thingGroupName == null ? '' : encodeURIComponent(thingGroupName)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Deletes a dynamic thing group.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DeleteDynamicThingGroup</a> action.</p>
		 * Delete dynamic-thing-groups/{thingGroupName}
		 * @param {string} thingGroupName The name of the dynamic thing group to delete.
		 * @param {number} expectedVersion The expected version of the dynamic thing group to delete.
		 * @return {DeleteDynamicThingGroupResponse} Success
		 */
		DeleteDynamicThingGroup(thingGroupName: string, expectedVersion: number | null | undefined): Observable<DeleteDynamicThingGroupResponse> {
			return this.http.delete<DeleteDynamicThingGroupResponse>(this.baseUri + 'dynamic-thing-groups/' + (thingGroupName == null ? '' : encodeURIComponent(thingGroupName)) + '&expectedVersion=' + expectedVersion, {});
		}

		/**
		 * <p>Updates a dynamic thing group.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">UpdateDynamicThingGroup</a> action.</p>
		 * Patch dynamic-thing-groups/{thingGroupName}
		 * @param {string} thingGroupName The name of the dynamic thing group to update.
		 * @return {UpdateDynamicThingGroupResponse} Success
		 */
		UpdateDynamicThingGroup(thingGroupName: string, requestBody: UpdateDynamicThingGroupPatchBody): Observable<UpdateDynamicThingGroupResponse> {
			return this.http.patch<UpdateDynamicThingGroupResponse>(this.baseUri + 'dynamic-thing-groups/' + (thingGroupName == null ? '' : encodeURIComponent(thingGroupName)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Creates a fleet metric.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">CreateFleetMetric</a> action.</p>
		 * Put fleet-metric/{metricName}
		 * @param {string} metricName The name of the fleet metric to create.
		 * @return {CreateFleetMetricResponse} Success
		 */
		CreateFleetMetric(metricName: string, requestBody: CreateFleetMetricPutBody): Observable<CreateFleetMetricResponse> {
			return this.http.put<CreateFleetMetricResponse>(this.baseUri + 'fleet-metric/' + (metricName == null ? '' : encodeURIComponent(metricName)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Deletes the specified fleet metric. Returns successfully with no error if the deletion is successful or you specify a fleet metric that doesn't exist.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DeleteFleetMetric</a> action.</p>
		 * Delete fleet-metric/{metricName}
		 * @param {string} metricName The name of the fleet metric to delete.
		 * @param {number} expectedVersion The expected version of the fleet metric to delete.
		 * @return {void} Success
		 */
		DeleteFleetMetric(metricName: string, expectedVersion: number | null | undefined): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'fleet-metric/' + (metricName == null ? '' : encodeURIComponent(metricName)) + '&expectedVersion=' + expectedVersion, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Gets information about the specified fleet metric.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DescribeFleetMetric</a> action.</p>
		 * Get fleet-metric/{metricName}
		 * @param {string} metricName The name of the fleet metric to describe.
		 * @return {DescribeFleetMetricResponse} Success
		 */
		DescribeFleetMetric(metricName: string): Observable<DescribeFleetMetricResponse> {
			return this.http.get<DescribeFleetMetricResponse>(this.baseUri + 'fleet-metric/' + (metricName == null ? '' : encodeURIComponent(metricName)), {});
		}

		/**
		 * <p>Updates the data for a fleet metric.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">UpdateFleetMetric</a> action.</p>
		 * Patch fleet-metric/{metricName}
		 * @param {string} metricName The name of the fleet metric to update.
		 * @return {void} Success
		 */
		UpdateFleetMetric(metricName: string, requestBody: UpdateFleetMetricPatchBody): Observable<HttpResponse<string>> {
			return this.http.patch(this.baseUri + 'fleet-metric/' + (metricName == null ? '' : encodeURIComponent(metricName)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Creates a job.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">CreateJob</a> action.</p>
		 * Put jobs/{jobId}
		 * @param {string} jobId A job identifier which must be unique for your Amazon Web Services account. We recommend using a UUID. Alpha-numeric characters, "-" and "_" are valid for use here.
		 * @return {CreateJobResponse} Success
		 */
		CreateJob(jobId: string, requestBody: CreateJobPutBody): Observable<CreateJobResponse> {
			return this.http.put<CreateJobResponse>(this.baseUri + 'jobs/' + (jobId == null ? '' : encodeURIComponent(jobId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Deletes a job and its related job executions.</p> <p>Deleting a job may take time, depending on the number of job executions created for the job and various other factors. While the job is being deleted, the status of the job will be shown as "DELETION_IN_PROGRESS". Attempting to delete or cancel a job whose status is already "DELETION_IN_PROGRESS" will result in an error.</p> <p>Only 10 jobs may have status "DELETION_IN_PROGRESS" at the same time, or a LimitExceededException will occur.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DeleteJob</a> action.</p>
		 * Delete jobs/{jobId}
		 * @param {string} jobId <p>The ID of the job to be deleted.</p> <p>After a job deletion is completed, you may reuse this jobId when you create a new job. However, this is not recommended, and you must ensure that your devices are not using the jobId to refer to the deleted job.</p>
		 * @param {boolean} force <p>(Optional) When true, you can delete a job which is "IN_PROGRESS". Otherwise, you can only delete a job which is in a terminal state ("COMPLETED" or "CANCELED") or an exception will occur. The default is false.</p> <note> <p>Deleting a job which is "IN_PROGRESS", will cause a device which is executing the job to be unable to access job information or update the job execution status. Use caution and ensure that each device executing a job which is deleted is able to recover to a valid state.</p> </note>
		 * @param {string} namespaceId <p>The namespace used to indicate that a job is a customer-managed job.</p> <p>When you specify a value for this parameter, Amazon Web Services IoT Core sends jobs notifications to MQTT topics that contain the value in the following format.</p> <p> <code>$aws/things/<i>THING_NAME</i>/jobs/<i>JOB_ID</i>/notify-namespace-<i>NAMESPACE_ID</i>/</code> </p> <note> <p>The <code>namespaceId</code> feature is in public preview.</p> </note>
		 * @return {void} Success
		 */
		DeleteJob(jobId: string, force: boolean | null | undefined, namespaceId: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'jobs/' + (jobId == null ? '' : encodeURIComponent(jobId)) + '&force=' + force + '&namespaceId=' + (namespaceId == null ? '' : encodeURIComponent(namespaceId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Describes a job.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DescribeJob</a> action.</p>
		 * Get jobs/{jobId}
		 * @param {string} jobId The unique identifier you assigned to this job when it was created.
		 * @return {DescribeJobResponse} Success
		 */
		DescribeJob(jobId: string): Observable<DescribeJobResponse> {
			return this.http.get<DescribeJobResponse>(this.baseUri + 'jobs/' + (jobId == null ? '' : encodeURIComponent(jobId)), {});
		}

		/**
		 * <p>Updates supported fields of the specified job.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">UpdateJob</a> action.</p>
		 * Patch jobs/{jobId}
		 * @param {string} jobId The ID of the job to be updated.
		 * @param {string} namespaceId <p>The namespace used to indicate that a job is a customer-managed job.</p> <p>When you specify a value for this parameter, Amazon Web Services IoT Core sends jobs notifications to MQTT topics that contain the value in the following format.</p> <p> <code>$aws/things/<i>THING_NAME</i>/jobs/<i>JOB_ID</i>/notify-namespace-<i>NAMESPACE_ID</i>/</code> </p> <note> <p>The <code>namespaceId</code> feature is in public preview.</p> </note>
		 * @return {void} Success
		 */
		UpdateJob(jobId: string, namespaceId: string | null | undefined, requestBody: UpdateJobPatchBody): Observable<HttpResponse<string>> {
			return this.http.patch(this.baseUri + 'jobs/' + (jobId == null ? '' : encodeURIComponent(jobId)) + '&namespaceId=' + (namespaceId == null ? '' : encodeURIComponent(namespaceId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Creates a job template.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">CreateJobTemplate</a> action.</p>
		 * Put job-templates/{jobTemplateId}
		 * @param {string} jobTemplateId A unique identifier for the job template. We recommend using a UUID. Alpha-numeric characters, "-", and "_" are valid for use here.
		 * @return {CreateJobTemplateResponse} Success
		 */
		CreateJobTemplate(jobTemplateId: string, requestBody: CreateJobTemplatePutBody): Observable<CreateJobTemplateResponse> {
			return this.http.put<CreateJobTemplateResponse>(this.baseUri + 'job-templates/' + (jobTemplateId == null ? '' : encodeURIComponent(jobTemplateId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes the specified job template.
		 * Delete job-templates/{jobTemplateId}
		 * @param {string} jobTemplateId The unique identifier of the job template to delete.
		 * @return {void} Success
		 */
		DeleteJobTemplate(jobTemplateId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'job-templates/' + (jobTemplateId == null ? '' : encodeURIComponent(jobTemplateId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns information about a job template.
		 * Get job-templates/{jobTemplateId}
		 * @param {string} jobTemplateId The unique identifier of the job template.
		 * @return {DescribeJobTemplateResponse} Success
		 */
		DescribeJobTemplate(jobTemplateId: string): Observable<DescribeJobTemplateResponse> {
			return this.http.get<DescribeJobTemplateResponse>(this.baseUri + 'job-templates/' + (jobTemplateId == null ? '' : encodeURIComponent(jobTemplateId)), {});
		}

		/**
		 * <p>Creates a 2048-bit RSA key pair and issues an X.509 certificate using the issued public key. You can also call <code>CreateKeysAndCertificate</code> over MQTT from a device, for more information, see <a href="https://docs.aws.amazon.com/iot/latest/developerguide/provision-wo-cert.html#provision-mqtt-api">Provisioning MQTT API</a>.</p> <p> <b>Note</b> This is the only time IoT issues the private key for this certificate, so it is important to keep it in a secure location.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">CreateKeysAndCertificate</a> action.</p>
		 * Post keys-and-certificate
		 * @param {boolean} setAsActive Specifies whether the certificate is active.
		 * @return {CreateKeysAndCertificateResponse} Success
		 */
		CreateKeysAndCertificate(setAsActive: boolean | null | undefined): Observable<CreateKeysAndCertificateResponse> {
			return this.http.post<CreateKeysAndCertificateResponse>(this.baseUri + 'keys-and-certificate?setAsActive=' + setAsActive, null, {});
		}

		/**
		 * <p>Defines an action that can be applied to audit findings by using StartAuditMitigationActionsTask. Only certain types of mitigation actions can be applied to specific check names. For more information, see <a href="https://docs.aws.amazon.com/iot/latest/developerguide/device-defender-mitigation-actions.html">Mitigation actions</a>. Each mitigation action can apply only one type of change.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">CreateMitigationAction</a> action.</p>
		 * Post mitigationactions/actions/{actionName}
		 * @param {string} actionName A friendly name for the action. Choose a friendly name that accurately describes the action (for example, <code>EnableLoggingAction</code>).
		 * @return {CreateMitigationActionResponse} Success
		 */
		CreateMitigationAction(actionName: string, requestBody: CreateMitigationActionPostBody): Observable<CreateMitigationActionResponse> {
			return this.http.post<CreateMitigationActionResponse>(this.baseUri + 'mitigationactions/actions/' + (actionName == null ? '' : encodeURIComponent(actionName)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Deletes a defined mitigation action from your Amazon Web Services accounts.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DeleteMitigationAction</a> action.</p>
		 * Delete mitigationactions/actions/{actionName}
		 * @param {string} actionName The name of the mitigation action that you want to delete.
		 * @return {DeleteMitigationActionResponse} Success
		 */
		DeleteMitigationAction(actionName: string): Observable<DeleteMitigationActionResponse> {
			return this.http.delete<DeleteMitigationActionResponse>(this.baseUri + 'mitigationactions/actions/' + (actionName == null ? '' : encodeURIComponent(actionName)), {});
		}

		/**
		 * <p>Gets information about a mitigation action.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DescribeMitigationAction</a> action.</p>
		 * Get mitigationactions/actions/{actionName}
		 * @param {string} actionName The friendly name that uniquely identifies the mitigation action.
		 * @return {DescribeMitigationActionResponse} Success
		 */
		DescribeMitigationAction(actionName: string): Observable<DescribeMitigationActionResponse> {
			return this.http.get<DescribeMitigationActionResponse>(this.baseUri + 'mitigationactions/actions/' + (actionName == null ? '' : encodeURIComponent(actionName)), {});
		}

		/**
		 * <p>Updates the definition for the specified mitigation action.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">UpdateMitigationAction</a> action.</p>
		 * Patch mitigationactions/actions/{actionName}
		 * @param {string} actionName The friendly name for the mitigation action. You cannot change the name by using <code>UpdateMitigationAction</code>. Instead, you must delete and recreate the mitigation action with the new name.
		 * @return {UpdateMitigationActionResponse} Success
		 */
		UpdateMitigationAction(actionName: string, requestBody: UpdateMitigationActionPatchBody): Observable<UpdateMitigationActionResponse> {
			return this.http.patch<UpdateMitigationActionResponse>(this.baseUri + 'mitigationactions/actions/' + (actionName == null ? '' : encodeURIComponent(actionName)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Creates an IoT OTA update on a target group of things or groups.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">CreateOTAUpdate</a> action.</p>
		 * Post otaUpdates/{otaUpdateId}
		 * @param {string} otaUpdateId The ID of the OTA update to be created.
		 * @return {CreateOTAUpdateResponse} Success
		 */
		CreateOTAUpdate(otaUpdateId: string, requestBody: CreateOTAUpdatePostBody): Observable<CreateOTAUpdateResponse> {
			return this.http.post<CreateOTAUpdateResponse>(this.baseUri + 'otaUpdates/' + (otaUpdateId == null ? '' : encodeURIComponent(otaUpdateId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Delete an OTA update.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DeleteOTAUpdate</a> action.</p>
		 * Delete otaUpdates/{otaUpdateId}
		 * @param {string} otaUpdateId The ID of the OTA update to delete.
		 * @param {boolean} deleteStream When true, the stream created by the OTAUpdate process is deleted when the OTA update is deleted. Ignored if the stream specified in the OTAUpdate is supplied by the user.
		 * @param {boolean} forceDeleteAWSJob When true, deletes the IoT job created by the OTAUpdate process even if it is "IN_PROGRESS". Otherwise, if the job is not in a terminal state ("COMPLETED" or "CANCELED") an exception will occur. The default is false.
		 * @return {DeleteOTAUpdateResponse} Success
		 */
		DeleteOTAUpdate(otaUpdateId: string, deleteStream: boolean | null | undefined, forceDeleteAWSJob: boolean | null | undefined): Observable<DeleteOTAUpdateResponse> {
			return this.http.delete<DeleteOTAUpdateResponse>(this.baseUri + 'otaUpdates/' + (otaUpdateId == null ? '' : encodeURIComponent(otaUpdateId)) + '&deleteStream=' + deleteStream + '&forceDeleteAWSJob=' + forceDeleteAWSJob, {});
		}

		/**
		 * <p>Gets an OTA update.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">GetOTAUpdate</a> action.</p>
		 * Get otaUpdates/{otaUpdateId}
		 * @param {string} otaUpdateId The OTA update ID.
		 * @return {GetOTAUpdateResponse} Success
		 */
		GetOTAUpdate(otaUpdateId: string): Observable<GetOTAUpdateResponse> {
			return this.http.get<GetOTAUpdateResponse>(this.baseUri + 'otaUpdates/' + (otaUpdateId == null ? '' : encodeURIComponent(otaUpdateId)), {});
		}

		/**
		 * <p>Creates an IoT software package that can be deployed to your fleet.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">CreatePackage</a> and <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">GetIndexingConfiguration</a> actions.</p>
		 * Put packages/{packageName}
		 * @param {string} packageName The name of the new package.
		 * @param {string} clientToken A unique case-sensitive identifier that you can provide to ensure the idempotency of the request. Don't reuse this client token if a new idempotent request is required.
		 * @return {CreatePackageResponse} Success
		 */
		CreatePackage(packageName: string, clientToken: string | null | undefined, requestBody: CreatePackagePutBody): Observable<CreatePackageResponse> {
			return this.http.put<CreatePackageResponse>(this.baseUri + 'packages/' + (packageName == null ? '' : encodeURIComponent(packageName)) + '&clientToken=' + (clientToken == null ? '' : encodeURIComponent(clientToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Deletes a specific version from a software package.</p> <p> <b>Note:</b> All package versions must be deleted before deleting the software package.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DeletePackageVersion</a> action.</p>
		 * Delete packages/{packageName}
		 * @param {string} packageName The name of the target package.
		 * @param {string} clientToken A unique case-sensitive identifier that you can provide to ensure the idempotency of the request. Don't reuse this client token if a new idempotent request is required.
		 * @return {DeletePackageResponse} Success
		 */
		DeletePackage(packageName: string, clientToken: string | null | undefined): Observable<DeletePackageResponse> {
			return this.http.delete<DeletePackageResponse>(this.baseUri + 'packages/' + (packageName == null ? '' : encodeURIComponent(packageName)) + '&clientToken=' + (clientToken == null ? '' : encodeURIComponent(clientToken)), {});
		}

		/**
		 * <p>Gets information about the specified software package.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">GetPackage</a> action.</p>
		 * Get packages/{packageName}
		 * @param {string} packageName The name of the target package.
		 * @return {GetPackageResponse} Success
		 */
		GetPackage(packageName: string): Observable<GetPackageResponse> {
			return this.http.get<GetPackageResponse>(this.baseUri + 'packages/' + (packageName == null ? '' : encodeURIComponent(packageName)), {});
		}

		/**
		 * <p>Updates the supported fields for a specific package.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">UpdatePackage</a> and <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">GetIndexingConfiguration</a> actions.</p>
		 * Patch packages/{packageName}
		 * @param {string} packageName The name of the target package.
		 * @param {string} clientToken A unique case-sensitive identifier that you can provide to ensure the idempotency of the request. Don't reuse this client token if a new idempotent request is required.
		 * @return {UpdatePackageResponse} Success
		 */
		UpdatePackage(packageName: string, clientToken: string | null | undefined, requestBody: UpdatePackagePatchBody): Observable<UpdatePackageResponse> {
			return this.http.patch<UpdatePackageResponse>(this.baseUri + 'packages/' + (packageName == null ? '' : encodeURIComponent(packageName)) + '&clientToken=' + (clientToken == null ? '' : encodeURIComponent(clientToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Creates a new version for an existing IoT software package.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">CreatePackageVersion</a> and <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">GetIndexingConfiguration</a> actions.</p>
		 * Put packages/{packageName}/versions/{versionName}
		 * @param {string} packageName The name of the associated package.
		 * @param {string} versionName The name of the new package version.
		 * @param {string} clientToken A unique case-sensitive identifier that you can provide to ensure the idempotency of the request. Don't reuse this client token if a new idempotent request is required.
		 * @return {CreatePackageVersionResponse} Success
		 */
		CreatePackageVersion(packageName: string, versionName: string, clientToken: string | null | undefined, requestBody: CreatePackageVersionPutBody): Observable<CreatePackageVersionResponse> {
			return this.http.put<CreatePackageVersionResponse>(this.baseUri + 'packages/' + (packageName == null ? '' : encodeURIComponent(packageName)) + '/versions/' + (versionName == null ? '' : encodeURIComponent(versionName)) + '&clientToken=' + (clientToken == null ? '' : encodeURIComponent(clientToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Deletes a specific version from a software package.</p> <p> <b>Note:</b> If a package version is designated as default, you must remove the designation from the package using the <a>UpdatePackage</a> action.</p>
		 * Delete packages/{packageName}/versions/{versionName}
		 * @param {string} packageName The name of the associated package.
		 * @param {string} versionName The name of the target package version.
		 * @param {string} clientToken A unique case-sensitive identifier that you can provide to ensure the idempotency of the request. Don't reuse this client token if a new idempotent request is required.
		 * @return {DeletePackageVersionResponse} Success
		 */
		DeletePackageVersion(packageName: string, versionName: string, clientToken: string | null | undefined): Observable<DeletePackageVersionResponse> {
			return this.http.delete<DeletePackageVersionResponse>(this.baseUri + 'packages/' + (packageName == null ? '' : encodeURIComponent(packageName)) + '/versions/' + (versionName == null ? '' : encodeURIComponent(versionName)) + '&clientToken=' + (clientToken == null ? '' : encodeURIComponent(clientToken)), {});
		}

		/**
		 * <p>Gets information about the specified package version. </p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">GetPackageVersion</a> action.</p>
		 * Get packages/{packageName}/versions/{versionName}
		 * @param {string} packageName The name of the associated package.
		 * @param {string} versionName The name of the target package version.
		 * @return {GetPackageVersionResponse} Success
		 */
		GetPackageVersion(packageName: string, versionName: string): Observable<GetPackageVersionResponse> {
			return this.http.get<GetPackageVersionResponse>(this.baseUri + 'packages/' + (packageName == null ? '' : encodeURIComponent(packageName)) + '/versions/' + (versionName == null ? '' : encodeURIComponent(versionName)), {});
		}

		/**
		 * <p>Updates the supported fields for a specific package version.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">UpdatePackageVersion</a> and <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">GetIndexingConfiguration</a> actions.</p>
		 * Patch packages/{packageName}/versions/{versionName}
		 * @param {string} packageName The name of the associated software package.
		 * @param {string} versionName The name of the target package version.
		 * @param {string} clientToken A unique case-sensitive identifier that you can provide to ensure the idempotency of the request. Don't reuse this client token if a new idempotent request is required.
		 * @return {UpdatePackageVersionResponse} Success
		 */
		UpdatePackageVersion(packageName: string, versionName: string, clientToken: string | null | undefined, requestBody: UpdatePackageVersionPatchBody): Observable<UpdatePackageVersionResponse> {
			return this.http.patch<UpdatePackageVersionResponse>(this.baseUri + 'packages/' + (packageName == null ? '' : encodeURIComponent(packageName)) + '/versions/' + (versionName == null ? '' : encodeURIComponent(versionName)) + '&clientToken=' + (clientToken == null ? '' : encodeURIComponent(clientToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Creates an IoT policy.</p> <p>The created policy is the default version for the policy. This operation creates a policy version with a version identifier of <b>1</b> and sets <b>1</b> as the policy's default version.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">CreatePolicy</a> action.</p>
		 * Post policies/{policyName}
		 * @param {string} policyName The policy name.
		 * @return {CreatePolicyResponse} Success
		 */
		CreatePolicy(policyName: string, requestBody: CreatePolicyPostBody): Observable<CreatePolicyResponse> {
			return this.http.post<CreatePolicyResponse>(this.baseUri + 'policies/' + (policyName == null ? '' : encodeURIComponent(policyName)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Deletes the specified policy.</p> <p>A policy cannot be deleted if it has non-default versions or it is attached to any certificate.</p> <p>To delete a policy, use the <a>DeletePolicyVersion</a> action to delete all non-default versions of the policy; use the <a>DetachPolicy</a> action to detach the policy from any certificate; and then use the DeletePolicy action to delete the policy.</p> <p>When a policy is deleted using DeletePolicy, its default version is deleted with it.</p> <note> <p>Because of the distributed nature of Amazon Web Services, it can take up to five minutes after a policy is detached before it's ready to be deleted.</p> </note> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DeletePolicy</a> action.</p>
		 * Delete policies/{policyName}
		 * @param {string} policyName The name of the policy to delete.
		 * @return {void} Success
		 */
		DeletePolicy(policyName: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'policies/' + (policyName == null ? '' : encodeURIComponent(policyName)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Gets information about the specified policy with the policy document of the default version.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">GetPolicy</a> action.</p>
		 * Get policies/{policyName}
		 * @param {string} policyName The name of the policy.
		 * @return {GetPolicyResponse} Success
		 */
		GetPolicy(policyName: string): Observable<GetPolicyResponse> {
			return this.http.get<GetPolicyResponse>(this.baseUri + 'policies/' + (policyName == null ? '' : encodeURIComponent(policyName)), {});
		}

		/**
		 * <p>Creates a new version of the specified IoT policy. To update a policy, create a new policy version. A managed policy can have up to five versions. If the policy has five versions, you must use <a>DeletePolicyVersion</a> to delete an existing version before you create a new one.</p> <p>Optionally, you can set the new version as the policy's default version. The default version is the operative version (that is, the version that is in effect for the certificates to which the policy is attached).</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">CreatePolicyVersion</a> action.</p>
		 * Post policies/{policyName}/version
		 * @param {string} policyName The policy name.
		 * @param {boolean} setAsDefault Specifies whether the policy version is set as the default. When this parameter is true, the new policy version becomes the operative version (that is, the version that is in effect for the certificates to which the policy is attached).
		 * @return {CreatePolicyVersionResponse} Success
		 */
		CreatePolicyVersion(policyName: string, setAsDefault: boolean | null | undefined, requestBody: CreatePolicyVersionPostBody): Observable<CreatePolicyVersionResponse> {
			return this.http.post<CreatePolicyVersionResponse>(this.baseUri + 'policies/' + (policyName == null ? '' : encodeURIComponent(policyName)) + '/version&setAsDefault=' + setAsDefault, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Lists the versions of the specified policy and identifies the default version.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ListPolicyVersions</a> action.</p>
		 * Get policies/{policyName}/version
		 * @param {string} policyName The policy name.
		 * @return {ListPolicyVersionsResponse} Success
		 */
		ListPolicyVersions(policyName: string): Observable<ListPolicyVersionsResponse> {
			return this.http.get<ListPolicyVersionsResponse>(this.baseUri + 'policies/' + (policyName == null ? '' : encodeURIComponent(policyName)) + '/version', {});
		}

		/**
		 * <p>Creates a provisioning claim.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">CreateProvisioningClaim</a> action.</p>
		 * Post provisioning-templates/{templateName}/provisioning-claim
		 * @param {string} templateName The name of the provisioning template to use.
		 * @return {CreateProvisioningClaimResponse} Success
		 */
		CreateProvisioningClaim(templateName: string): Observable<CreateProvisioningClaimResponse> {
			return this.http.post<CreateProvisioningClaimResponse>(this.baseUri + 'provisioning-templates/' + (templateName == null ? '' : encodeURIComponent(templateName)) + '/provisioning-claim', null, {});
		}

		/**
		 * <p>Creates a provisioning template.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">CreateProvisioningTemplate</a> action.</p>
		 * Post provisioning-templates
		 * @return {CreateProvisioningTemplateResponse} Success
		 */
		CreateProvisioningTemplate(requestBody: CreateProvisioningTemplatePostBody): Observable<CreateProvisioningTemplateResponse> {
			return this.http.post<CreateProvisioningTemplateResponse>(this.baseUri + 'provisioning-templates', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Lists the provisioning templates in your Amazon Web Services account.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ListProvisioningTemplates</a> action.</p>
		 * Get provisioning-templates
		 * @param {number} maxResults The maximum number of results to return at one time.
		 * @param {string} nextToken A token to retrieve the next set of results.
		 * @return {ListProvisioningTemplatesResponse} Success
		 */
		ListProvisioningTemplates(maxResults: number | null | undefined, nextToken: string | null | undefined): Observable<ListProvisioningTemplatesResponse> {
			return this.http.get<ListProvisioningTemplatesResponse>(this.baseUri + 'provisioning-templates?maxResults=' + maxResults + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), {});
		}

		/**
		 * <p>Creates a new version of a provisioning template.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">CreateProvisioningTemplateVersion</a> action.</p>
		 * Post provisioning-templates/{templateName}/versions
		 * @param {string} templateName The name of the provisioning template.
		 * @param {boolean} setAsDefault Sets a fleet provision template version as the default version.
		 * @return {CreateProvisioningTemplateVersionResponse} Success
		 */
		CreateProvisioningTemplateVersion(templateName: string, setAsDefault: boolean | null | undefined, requestBody: CreateProvisioningTemplateVersionPostBody): Observable<CreateProvisioningTemplateVersionResponse> {
			return this.http.post<CreateProvisioningTemplateVersionResponse>(this.baseUri + 'provisioning-templates/' + (templateName == null ? '' : encodeURIComponent(templateName)) + '/versions&setAsDefault=' + setAsDefault, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>A list of provisioning template versions.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ListProvisioningTemplateVersions</a> action.</p>
		 * Get provisioning-templates/{templateName}/versions
		 * @param {string} templateName The name of the provisioning template.
		 * @param {number} maxResults The maximum number of results to return at one time.
		 * @param {string} nextToken A token to retrieve the next set of results.
		 * @return {ListProvisioningTemplateVersionsResponse} Success
		 */
		ListProvisioningTemplateVersions(templateName: string, maxResults: number | null | undefined, nextToken: string | null | undefined): Observable<ListProvisioningTemplateVersionsResponse> {
			return this.http.get<ListProvisioningTemplateVersionsResponse>(this.baseUri + 'provisioning-templates/' + (templateName == null ? '' : encodeURIComponent(templateName)) + '/versions&maxResults=' + maxResults + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), {});
		}

		/**
		 * <p>Creates a role alias.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">CreateRoleAlias</a> action.</p>
		 * Post role-aliases/{roleAlias}
		 * @param {string} roleAlias The role alias that points to a role ARN. This allows you to change the role without having to update the device.
		 * @return {CreateRoleAliasResponse} Success
		 */
		CreateRoleAlias(roleAlias: string, requestBody: CreateRoleAliasPostBody): Observable<CreateRoleAliasResponse> {
			return this.http.post<CreateRoleAliasResponse>(this.baseUri + 'role-aliases/' + (roleAlias == null ? '' : encodeURIComponent(roleAlias)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Deletes a role alias</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DeleteRoleAlias</a> action.</p>
		 * Delete role-aliases/{roleAlias}
		 * @param {string} roleAlias The role alias to delete.
		 * @return {DeleteRoleAliasResponse} Success
		 */
		DeleteRoleAlias(roleAlias: string): Observable<DeleteRoleAliasResponse> {
			return this.http.delete<DeleteRoleAliasResponse>(this.baseUri + 'role-aliases/' + (roleAlias == null ? '' : encodeURIComponent(roleAlias)), {});
		}

		/**
		 * <p>Describes a role alias.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DescribeRoleAlias</a> action.</p>
		 * Get role-aliases/{roleAlias}
		 * @param {string} roleAlias The role alias to describe.
		 * @return {DescribeRoleAliasResponse} Success
		 */
		DescribeRoleAlias(roleAlias: string): Observable<DescribeRoleAliasResponse> {
			return this.http.get<DescribeRoleAliasResponse>(this.baseUri + 'role-aliases/' + (roleAlias == null ? '' : encodeURIComponent(roleAlias)), {});
		}

		/**
		 * <p>Updates a role alias.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">UpdateRoleAlias</a> action.</p>
		 * Put role-aliases/{roleAlias}
		 * @param {string} roleAlias The role alias to update.
		 * @return {UpdateRoleAliasResponse} Success
		 */
		UpdateRoleAlias(roleAlias: string, requestBody: UpdateRoleAliasPutBody): Observable<UpdateRoleAliasResponse> {
			return this.http.put<UpdateRoleAliasResponse>(this.baseUri + 'role-aliases/' + (roleAlias == null ? '' : encodeURIComponent(roleAlias)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Creates a scheduled audit that is run at a specified time interval.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">CreateScheduledAudit</a> action.</p>
		 * Post audit/scheduledaudits/{scheduledAuditName}
		 * @param {string} scheduledAuditName The name you want to give to the scheduled audit. (Max. 128 chars)
		 * @return {CreateScheduledAuditResponse} Success
		 */
		CreateScheduledAudit(scheduledAuditName: string, requestBody: CreateScheduledAuditPostBody): Observable<CreateScheduledAuditResponse> {
			return this.http.post<CreateScheduledAuditResponse>(this.baseUri + 'audit/scheduledaudits/' + (scheduledAuditName == null ? '' : encodeURIComponent(scheduledAuditName)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Deletes a scheduled audit.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DeleteScheduledAudit</a> action.</p>
		 * Delete audit/scheduledaudits/{scheduledAuditName}
		 * @param {string} scheduledAuditName The name of the scheduled audit you want to delete.
		 * @return {DeleteScheduledAuditResponse} Success
		 */
		DeleteScheduledAudit(scheduledAuditName: string): Observable<DeleteScheduledAuditResponse> {
			return this.http.delete<DeleteScheduledAuditResponse>(this.baseUri + 'audit/scheduledaudits/' + (scheduledAuditName == null ? '' : encodeURIComponent(scheduledAuditName)), {});
		}

		/**
		 * <p>Gets information about a scheduled audit.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DescribeScheduledAudit</a> action.</p>
		 * Get audit/scheduledaudits/{scheduledAuditName}
		 * @param {string} scheduledAuditName The name of the scheduled audit whose information you want to get.
		 * @return {DescribeScheduledAuditResponse} Success
		 */
		DescribeScheduledAudit(scheduledAuditName: string): Observable<DescribeScheduledAuditResponse> {
			return this.http.get<DescribeScheduledAuditResponse>(this.baseUri + 'audit/scheduledaudits/' + (scheduledAuditName == null ? '' : encodeURIComponent(scheduledAuditName)), {});
		}

		/**
		 * <p>Updates a scheduled audit, including which checks are performed and how often the audit takes place.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">UpdateScheduledAudit</a> action.</p>
		 * Patch audit/scheduledaudits/{scheduledAuditName}
		 * @param {string} scheduledAuditName The name of the scheduled audit. (Max. 128 chars)
		 * @return {UpdateScheduledAuditResponse} Success
		 */
		UpdateScheduledAudit(scheduledAuditName: string, requestBody: UpdateScheduledAuditPatchBody): Observable<UpdateScheduledAuditResponse> {
			return this.http.patch<UpdateScheduledAuditResponse>(this.baseUri + 'audit/scheduledaudits/' + (scheduledAuditName == null ? '' : encodeURIComponent(scheduledAuditName)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Creates a Device Defender security profile.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">CreateSecurityProfile</a> action.</p>
		 * Post security-profiles/{securityProfileName}
		 * @param {string} securityProfileName The name you are giving to the security profile.
		 * @return {CreateSecurityProfileResponse} Success
		 */
		CreateSecurityProfile(securityProfileName: string, requestBody: CreateSecurityProfilePostBody): Observable<CreateSecurityProfileResponse> {
			return this.http.post<CreateSecurityProfileResponse>(this.baseUri + 'security-profiles/' + (securityProfileName == null ? '' : encodeURIComponent(securityProfileName)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Deletes a Device Defender security profile.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DeleteSecurityProfile</a> action.</p>
		 * Delete security-profiles/{securityProfileName}
		 * @param {string} securityProfileName The name of the security profile to be deleted.
		 * @param {number} expectedVersion The expected version of the security profile. A new version is generated whenever the security profile is updated. If you specify a value that is different from the actual version, a <code>VersionConflictException</code> is thrown.
		 * @return {DeleteSecurityProfileResponse} Success
		 */
		DeleteSecurityProfile(securityProfileName: string, expectedVersion: number | null | undefined): Observable<DeleteSecurityProfileResponse> {
			return this.http.delete<DeleteSecurityProfileResponse>(this.baseUri + 'security-profiles/' + (securityProfileName == null ? '' : encodeURIComponent(securityProfileName)) + '&expectedVersion=' + expectedVersion, {});
		}

		/**
		 * <p>Gets information about a Device Defender security profile.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DescribeSecurityProfile</a> action.</p>
		 * Get security-profiles/{securityProfileName}
		 * @param {string} securityProfileName The name of the security profile whose information you want to get.
		 * @return {DescribeSecurityProfileResponse} Success
		 */
		DescribeSecurityProfile(securityProfileName: string): Observable<DescribeSecurityProfileResponse> {
			return this.http.get<DescribeSecurityProfileResponse>(this.baseUri + 'security-profiles/' + (securityProfileName == null ? '' : encodeURIComponent(securityProfileName)), {});
		}

		/**
		 * <p>Updates a Device Defender security profile.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">UpdateSecurityProfile</a> action.</p>
		 * Patch security-profiles/{securityProfileName}
		 * @param {string} securityProfileName The name of the security profile you want to update.
		 * @param {number} expectedVersion The expected version of the security profile. A new version is generated whenever the security profile is updated. If you specify a value that is different from the actual version, a <code>VersionConflictException</code> is thrown.
		 * @return {UpdateSecurityProfileResponse} Success
		 */
		UpdateSecurityProfile(securityProfileName: string, expectedVersion: number | null | undefined, requestBody: UpdateSecurityProfilePatchBody): Observable<UpdateSecurityProfileResponse> {
			return this.http.patch<UpdateSecurityProfileResponse>(this.baseUri + 'security-profiles/' + (securityProfileName == null ? '' : encodeURIComponent(securityProfileName)) + '&expectedVersion=' + expectedVersion, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Creates a stream for delivering one or more large files in chunks over MQTT. A stream transports data bytes in chunks or blocks packaged as MQTT messages from a source like S3. You can have one or more files associated with a stream.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">CreateStream</a> action.</p>
		 * Post streams/{streamId}
		 * @param {string} streamId The stream ID.
		 * @return {CreateStreamResponse} Success
		 */
		CreateStream(streamId: string, requestBody: CreateStreamPostBody): Observable<CreateStreamResponse> {
			return this.http.post<CreateStreamResponse>(this.baseUri + 'streams/' + (streamId == null ? '' : encodeURIComponent(streamId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Deletes a stream.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DeleteStream</a> action.</p>
		 * Delete streams/{streamId}
		 * @param {string} streamId The stream ID.
		 * @return {DeleteStreamResponse} Success
		 */
		DeleteStream(streamId: string): Observable<DeleteStreamResponse> {
			return this.http.delete<DeleteStreamResponse>(this.baseUri + 'streams/' + (streamId == null ? '' : encodeURIComponent(streamId)), {});
		}

		/**
		 * <p>Gets information about a stream.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DescribeStream</a> action.</p>
		 * Get streams/{streamId}
		 * @param {string} streamId The stream ID.
		 * @return {DescribeStreamResponse} Success
		 */
		DescribeStream(streamId: string): Observable<DescribeStreamResponse> {
			return this.http.get<DescribeStreamResponse>(this.baseUri + 'streams/' + (streamId == null ? '' : encodeURIComponent(streamId)), {});
		}

		/**
		 * <p>Updates an existing stream. The stream version will be incremented by one.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">UpdateStream</a> action.</p>
		 * Put streams/{streamId}
		 * @param {string} streamId The stream ID.
		 * @return {UpdateStreamResponse} Success
		 */
		UpdateStream(streamId: string, requestBody: UpdateStreamPutBody): Observable<UpdateStreamResponse> {
			return this.http.put<UpdateStreamResponse>(this.baseUri + 'streams/' + (streamId == null ? '' : encodeURIComponent(streamId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Creates a thing record in the registry. If this call is made multiple times using the same thing name and configuration, the call will succeed. If this call is made with the same thing name but different configuration a <code>ResourceAlreadyExistsException</code> is thrown.</p> <note> <p>This is a control plane operation. See <a href="https://docs.aws.amazon.com/iot/latest/developerguide/iot-authorization.html">Authorization</a> for information about authorizing control plane actions.</p> </note> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">CreateThing</a> action.</p>
		 * Post things/{thingName}
		 * @param {string} thingName <p>The name of the thing to create.</p> <p>You can't change a thing's name after you create it. To change a thing's name, you must create a new thing, give it the new name, and then delete the old thing.</p>
		 * @return {CreateThingResponse} Success
		 */
		CreateThing(thingName: string, requestBody: CreateThingPostBody): Observable<CreateThingResponse> {
			return this.http.post<CreateThingResponse>(this.baseUri + 'things/' + (thingName == null ? '' : encodeURIComponent(thingName)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Deletes the specified thing. Returns successfully with no error if the deletion is successful or you specify a thing that doesn't exist.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DeleteThing</a> action.</p>
		 * Delete things/{thingName}
		 * @param {string} thingName The name of the thing to delete.
		 * @param {number} expectedVersion The expected version of the thing record in the registry. If the version of the record in the registry does not match the expected version specified in the request, the <code>DeleteThing</code> request is rejected with a <code>VersionConflictException</code>.
		 * @return {DeleteThingResponse} Success
		 */
		DeleteThing(thingName: string, expectedVersion: number | null | undefined): Observable<DeleteThingResponse> {
			return this.http.delete<DeleteThingResponse>(this.baseUri + 'things/' + (thingName == null ? '' : encodeURIComponent(thingName)) + '&expectedVersion=' + expectedVersion, {});
		}

		/**
		 * <p>Gets information about the specified thing.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DescribeThing</a> action.</p>
		 * Get things/{thingName}
		 * @param {string} thingName The name of the thing.
		 * @return {DescribeThingResponse} Success
		 */
		DescribeThing(thingName: string): Observable<DescribeThingResponse> {
			return this.http.get<DescribeThingResponse>(this.baseUri + 'things/' + (thingName == null ? '' : encodeURIComponent(thingName)), {});
		}

		/**
		 * <p>Updates the data for a thing.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">UpdateThing</a> action.</p>
		 * Patch things/{thingName}
		 * @param {string} thingName <p>The name of the thing to update.</p> <p>You can't change a thing's name. To change a thing's name, you must create a new thing, give it the new name, and then delete the old thing.</p>
		 * @return {UpdateThingResponse} Success
		 */
		UpdateThing(thingName: string, requestBody: UpdateThingPatchBody): Observable<UpdateThingResponse> {
			return this.http.patch<UpdateThingResponse>(this.baseUri + 'things/' + (thingName == null ? '' : encodeURIComponent(thingName)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Create a thing group.</p> <note> <p>This is a control plane operation. See <a href="https://docs.aws.amazon.com/iot/latest/developerguide/iot-authorization.html">Authorization</a> for information about authorizing control plane actions.</p> </note> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">CreateThingGroup</a> action.</p>
		 * Post thing-groups/{thingGroupName}
		 * @param {string} thingGroupName The thing group name to create.
		 * @return {CreateThingGroupResponse} Success
		 */
		CreateThingGroup(thingGroupName: string, requestBody: CreateThingGroupPostBody): Observable<CreateThingGroupResponse> {
			return this.http.post<CreateThingGroupResponse>(this.baseUri + 'thing-groups/' + (thingGroupName == null ? '' : encodeURIComponent(thingGroupName)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Deletes a thing group.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DeleteThingGroup</a> action.</p>
		 * Delete thing-groups/{thingGroupName}
		 * @param {string} thingGroupName The name of the thing group to delete.
		 * @param {number} expectedVersion The expected version of the thing group to delete.
		 * @return {DeleteThingGroupResponse} Success
		 */
		DeleteThingGroup(thingGroupName: string, expectedVersion: number | null | undefined): Observable<DeleteThingGroupResponse> {
			return this.http.delete<DeleteThingGroupResponse>(this.baseUri + 'thing-groups/' + (thingGroupName == null ? '' : encodeURIComponent(thingGroupName)) + '&expectedVersion=' + expectedVersion, {});
		}

		/**
		 * <p>Describe a thing group.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DescribeThingGroup</a> action.</p>
		 * Get thing-groups/{thingGroupName}
		 * @param {string} thingGroupName The name of the thing group.
		 * @return {DescribeThingGroupResponse} Success
		 */
		DescribeThingGroup(thingGroupName: string): Observable<DescribeThingGroupResponse> {
			return this.http.get<DescribeThingGroupResponse>(this.baseUri + 'thing-groups/' + (thingGroupName == null ? '' : encodeURIComponent(thingGroupName)), {});
		}

		/**
		 * <p>Update a thing group.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">UpdateThingGroup</a> action.</p>
		 * Patch thing-groups/{thingGroupName}
		 * @param {string} thingGroupName The thing group to update.
		 * @return {UpdateThingGroupResponse} Success
		 */
		UpdateThingGroup(thingGroupName: string, requestBody: UpdateThingGroupPatchBody): Observable<UpdateThingGroupResponse> {
			return this.http.patch<UpdateThingGroupResponse>(this.baseUri + 'thing-groups/' + (thingGroupName == null ? '' : encodeURIComponent(thingGroupName)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Creates a new thing type.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">CreateThingType</a> action.</p>
		 * Post thing-types/{thingTypeName}
		 * @param {string} thingTypeName The name of the thing type.
		 * @return {CreateThingTypeResponse} Success
		 */
		CreateThingType(thingTypeName: string, requestBody: CreateThingTypePostBody): Observable<CreateThingTypeResponse> {
			return this.http.post<CreateThingTypeResponse>(this.baseUri + 'thing-types/' + (thingTypeName == null ? '' : encodeURIComponent(thingTypeName)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Deletes the specified thing type. You cannot delete a thing type if it has things associated with it. To delete a thing type, first mark it as deprecated by calling <a>DeprecateThingType</a>, then remove any associated things by calling <a>UpdateThing</a> to change the thing type on any associated thing, and finally use <a>DeleteThingType</a> to delete the thing type.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DeleteThingType</a> action.</p>
		 * Delete thing-types/{thingTypeName}
		 * @param {string} thingTypeName The name of the thing type.
		 * @return {DeleteThingTypeResponse} Success
		 */
		DeleteThingType(thingTypeName: string): Observable<DeleteThingTypeResponse> {
			return this.http.delete<DeleteThingTypeResponse>(this.baseUri + 'thing-types/' + (thingTypeName == null ? '' : encodeURIComponent(thingTypeName)), {});
		}

		/**
		 * <p>Gets information about the specified thing type.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DescribeThingType</a> action.</p>
		 * Get thing-types/{thingTypeName}
		 * @param {string} thingTypeName The name of the thing type.
		 * @return {DescribeThingTypeResponse} Success
		 */
		DescribeThingType(thingTypeName: string): Observable<DescribeThingTypeResponse> {
			return this.http.get<DescribeThingTypeResponse>(this.baseUri + 'thing-types/' + (thingTypeName == null ? '' : encodeURIComponent(thingTypeName)), {});
		}

		/**
		 * <p>Creates a rule. Creating rules is an administrator-level action. Any user who has permission to create rules will be able to access data processed by the rule.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">CreateTopicRule</a> action.</p>
		 * Post rules/{ruleName}
		 * @param {string} ruleName The name of the rule.
		 * @return {void} Success
		 */
		CreateTopicRule(ruleName: string, requestBody: CreateTopicRulePostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'rules/' + (ruleName == null ? '' : encodeURIComponent(ruleName)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Deletes the rule.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DeleteTopicRule</a> action.</p>
		 * Delete rules/{ruleName}
		 * @param {string} ruleName The name of the rule.
		 * @return {void} Success
		 */
		DeleteTopicRule(ruleName: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'rules/' + (ruleName == null ? '' : encodeURIComponent(ruleName)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Gets information about the rule.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">GetTopicRule</a> action.</p>
		 * Get rules/{ruleName}
		 * @param {string} ruleName The name of the rule.
		 * @return {GetTopicRuleResponse} Success
		 */
		GetTopicRule(ruleName: string): Observable<GetTopicRuleResponse> {
			return this.http.get<GetTopicRuleResponse>(this.baseUri + 'rules/' + (ruleName == null ? '' : encodeURIComponent(ruleName)), {});
		}

		/**
		 * <p>Replaces the rule. You must specify all parameters for the new rule. Creating rules is an administrator-level action. Any user who has permission to create rules will be able to access data processed by the rule.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ReplaceTopicRule</a> action.</p>
		 * Patch rules/{ruleName}
		 * @param {string} ruleName The name of the rule.
		 * @return {void} Success
		 */
		ReplaceTopicRule(ruleName: string, requestBody: ReplaceTopicRulePatchBody): Observable<HttpResponse<string>> {
			return this.http.patch(this.baseUri + 'rules/' + (ruleName == null ? '' : encodeURIComponent(ruleName)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Creates a topic rule destination. The destination must be confirmed prior to use.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">CreateTopicRuleDestination</a> action.</p>
		 * Post destinations
		 * @return {CreateTopicRuleDestinationResponse} Success
		 */
		CreateTopicRuleDestination(requestBody: CreateTopicRuleDestinationPostBody): Observable<CreateTopicRuleDestinationResponse> {
			return this.http.post<CreateTopicRuleDestinationResponse>(this.baseUri + 'destinations', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Lists all the topic rule destinations in your Amazon Web Services account.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ListTopicRuleDestinations</a> action.</p>
		 * Get destinations
		 * @param {number} maxResults The maximum number of results to return at one time.
		 * @param {string} nextToken To retrieve the next set of results, the <code>nextToken</code> value from a previous response; otherwise <b>null</b> to receive the first set of results.
		 * @return {ListTopicRuleDestinationsResponse} Success
		 */
		ListTopicRuleDestinations(maxResults: number | null | undefined, nextToken: string | null | undefined): Observable<ListTopicRuleDestinationsResponse> {
			return this.http.get<ListTopicRuleDestinationsResponse>(this.baseUri + 'destinations?maxResults=' + maxResults + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), {});
		}

		/**
		 * <p>Updates a topic rule destination. You use this to change the status, endpoint URL, or confirmation URL of the destination.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">UpdateTopicRuleDestination</a> action.</p>
		 * Patch destinations
		 * @return {UpdateTopicRuleDestinationResponse} Success
		 */
		UpdateTopicRuleDestination(requestBody: UpdateTopicRuleDestinationPatchBody): Observable<UpdateTopicRuleDestinationResponse> {
			return this.http.patch<UpdateTopicRuleDestinationResponse>(this.baseUri + 'destinations', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Restores the default settings for Device Defender audits for this account. Any configuration data you entered is deleted and all audit checks are reset to disabled. </p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DeleteAccountAuditConfiguration</a> action.</p>
		 * Delete audit/configuration
		 * @param {boolean} deleteScheduledAudits If true, all scheduled audits are deleted.
		 * @return {DeleteAccountAuditConfigurationResponse} Success
		 */
		DeleteAccountAuditConfiguration(deleteScheduledAudits: boolean | null | undefined): Observable<DeleteAccountAuditConfigurationResponse> {
			return this.http.delete<DeleteAccountAuditConfigurationResponse>(this.baseUri + 'audit/configuration?deleteScheduledAudits=' + deleteScheduledAudits, {});
		}

		/**
		 * <p>Gets information about the Device Defender audit settings for this account. Settings include how audit notifications are sent and which audit checks are enabled or disabled.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DescribeAccountAuditConfiguration</a> action.</p>
		 * Get audit/configuration
		 * @return {DescribeAccountAuditConfigurationResponse} Success
		 */
		DescribeAccountAuditConfiguration(): Observable<DescribeAccountAuditConfigurationResponse> {
			return this.http.get<DescribeAccountAuditConfigurationResponse>(this.baseUri + 'audit/configuration', {});
		}

		/**
		 * <p>Configures or reconfigures the Device Defender audit settings for this account. Settings include how audit notifications are sent and which audit checks are enabled or disabled.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">UpdateAccountAuditConfiguration</a> action.</p>
		 * Patch audit/configuration
		 * @return {UpdateAccountAuditConfigurationResponse} Success
		 */
		UpdateAccountAuditConfiguration(requestBody: UpdateAccountAuditConfigurationPatchBody): Observable<UpdateAccountAuditConfigurationResponse> {
			return this.http.patch<UpdateAccountAuditConfigurationResponse>(this.baseUri + 'audit/configuration', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p> Deletes a Device Defender audit suppression. </p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DeleteAuditSuppression</a> action.</p>
		 * Post audit/suppressions/delete
		 * @return {DeleteAuditSuppressionResponse} Success
		 */
		DeleteAuditSuppression(requestBody: DeleteAuditSuppressionPostBody): Observable<DeleteAuditSuppressionResponse> {
			return this.http.post<DeleteAuditSuppressionResponse>(this.baseUri + 'audit/suppressions/delete', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Deletes a registered CA certificate.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DeleteCACertificate</a> action.</p>
		 * Delete cacertificate/{caCertificateId}
		 * @param {string} caCertificateId The ID of the certificate to delete. (The last part of the certificate ARN contains the certificate ID.)
		 * @return {DeleteCACertificateResponse} Success
		 */
		DeleteCACertificate(caCertificateId: string): Observable<DeleteCACertificateResponse> {
			return this.http.delete<DeleteCACertificateResponse>(this.baseUri + 'cacertificate/' + (caCertificateId == null ? '' : encodeURIComponent(caCertificateId)), {});
		}

		/**
		 * <p>Describes a registered CA certificate.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DescribeCACertificate</a> action.</p>
		 * Get cacertificate/{caCertificateId}
		 * @param {string} caCertificateId The CA certificate identifier.
		 * @return {DescribeCACertificateResponse} Success
		 */
		DescribeCACertificate(caCertificateId: string): Observable<DescribeCACertificateResponse> {
			return this.http.get<DescribeCACertificateResponse>(this.baseUri + 'cacertificate/' + (caCertificateId == null ? '' : encodeURIComponent(caCertificateId)), {});
		}

		/**
		 * <p>Updates a registered CA certificate.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">UpdateCACertificate</a> action.</p>
		 * Put cacertificate/{caCertificateId}
		 * @param {string} caCertificateId The CA certificate identifier.
		 * @param {AuthorizerStatus} newStatus <p>The updated status of the CA certificate.</p> <p> <b>Note:</b> The status value REGISTER_INACTIVE is deprecated and should not be used.</p>
		 * @param {AutoRegistrationStatus} newAutoRegistrationStatus The new value for the auto registration status. Valid values are: "ENABLE" or "DISABLE".
		 * @return {void} Success
		 */
		UpdateCACertificate(caCertificateId: string, newStatus: AuthorizerStatus | null | undefined, newAutoRegistrationStatus: AutoRegistrationStatus | null | undefined, requestBody: UpdateCACertificatePutBody): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'cacertificate/' + (caCertificateId == null ? '' : encodeURIComponent(caCertificateId)) + '&newStatus=' + newStatus + '&newAutoRegistrationStatus=' + newAutoRegistrationStatus, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Deletes the specified certificate.</p> <p>A certificate cannot be deleted if it has a policy or IoT thing attached to it or if its status is set to ACTIVE. To delete a certificate, first use the <a>DetachPolicy</a> action to detach all policies. Next, use the <a>UpdateCertificate</a> action to set the certificate to the INACTIVE status.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DeleteCertificate</a> action.</p>
		 * Delete certificates/{certificateId}
		 * @param {string} certificateId The ID of the certificate. (The last part of the certificate ARN contains the certificate ID.)
		 * @param {boolean} forceDelete Forces the deletion of a certificate if it is inactive and is not attached to an IoT thing.
		 * @return {void} Success
		 */
		DeleteCertificate(certificateId: string, forceDelete: boolean | null | undefined): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'certificates/' + (certificateId == null ? '' : encodeURIComponent(certificateId)) + '&forceDelete=' + forceDelete, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Gets information about the specified certificate.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DescribeCertificate</a> action.</p>
		 * Get certificates/{certificateId}
		 * @param {string} certificateId The ID of the certificate. (The last part of the certificate ARN contains the certificate ID.)
		 * @return {DescribeCertificateResponse} Success
		 */
		DescribeCertificate(certificateId: string): Observable<DescribeCertificateResponse> {
			return this.http.get<DescribeCertificateResponse>(this.baseUri + 'certificates/' + (certificateId == null ? '' : encodeURIComponent(certificateId)), {});
		}

		/**
		 * <p>Deletes a job execution.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DeleteJobExecution</a> action.</p>
		 * Delete things/{thingName}/jobs/{jobId}/executionNumber/{executionNumber}
		 * @param {string} jobId The ID of the job whose execution on a particular device will be deleted.
		 * @param {string} thingName The name of the thing whose job execution will be deleted.
		 * @param {number} executionNumber <p>The ID of the job execution to be deleted. The <code>executionNumber</code> refers to the execution of a particular job on a particular device.</p> <p>Note that once a job execution is deleted, the <code>executionNumber</code> may be reused by IoT, so be sure you get and use the correct value here.</p>
		 * @param {boolean} force <p>(Optional) When true, you can delete a job execution which is "IN_PROGRESS". Otherwise, you can only delete a job execution which is in a terminal state ("SUCCEEDED", "FAILED", "REJECTED", "REMOVED" or "CANCELED") or an exception will occur. The default is false.</p> <note> <p>Deleting a job execution which is "IN_PROGRESS", will cause the device to be unable to access job information or update the job execution status. Use caution and ensure that the device is able to recover to a valid state.</p> </note>
		 * @param {string} namespaceId <p>The namespace used to indicate that a job is a customer-managed job.</p> <p>When you specify a value for this parameter, Amazon Web Services IoT Core sends jobs notifications to MQTT topics that contain the value in the following format.</p> <p> <code>$aws/things/<i>THING_NAME</i>/jobs/<i>JOB_ID</i>/notify-namespace-<i>NAMESPACE_ID</i>/</code> </p> <note> <p>The <code>namespaceId</code> feature is in public preview.</p> </note>
		 * @return {void} Success
		 */
		DeleteJobExecution(jobId: string, thingName: string, executionNumber: number, force: boolean | null | undefined, namespaceId: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'things/' + (thingName == null ? '' : encodeURIComponent(thingName)) + '/jobs/' + (jobId == null ? '' : encodeURIComponent(jobId)) + '/executionNumber/' + executionNumber + '&force=' + force + '&namespaceId=' + (namespaceId == null ? '' : encodeURIComponent(namespaceId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Deletes the specified version of the specified policy. You cannot delete the default version of a policy using this action. To delete the default version of a policy, use <a>DeletePolicy</a>. To find out which version of a policy is marked as the default version, use ListPolicyVersions.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DeletePolicyVersion</a> action.</p>
		 * Delete policies/{policyName}/version/{policyVersionId}
		 * @param {string} policyName The name of the policy.
		 * @param {string} policyVersionId The policy version ID.
		 * @return {void} Success
		 */
		DeletePolicyVersion(policyName: string, policyVersionId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'policies/' + (policyName == null ? '' : encodeURIComponent(policyName)) + '/version/' + (policyVersionId == null ? '' : encodeURIComponent(policyVersionId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Gets information about the specified policy version.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">GetPolicyVersion</a> action.</p>
		 * Get policies/{policyName}/version/{policyVersionId}
		 * @param {string} policyName The name of the policy.
		 * @param {string} policyVersionId The policy version ID.
		 * @return {GetPolicyVersionResponse} Success
		 */
		GetPolicyVersion(policyName: string, policyVersionId: string): Observable<GetPolicyVersionResponse> {
			return this.http.get<GetPolicyVersionResponse>(this.baseUri + 'policies/' + (policyName == null ? '' : encodeURIComponent(policyName)) + '/version/' + (policyVersionId == null ? '' : encodeURIComponent(policyVersionId)), {});
		}

		/**
		 * <p>Sets the specified version of the specified policy as the policy's default (operative) version. This action affects all certificates to which the policy is attached. To list the principals the policy is attached to, use the <a>ListPrincipalPolicies</a> action.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">SetDefaultPolicyVersion</a> action.</p>
		 * Patch policies/{policyName}/version/{policyVersionId}
		 * @param {string} policyName The policy name.
		 * @param {string} policyVersionId The policy version ID.
		 * @return {void} Success
		 */
		SetDefaultPolicyVersion(policyName: string, policyVersionId: string): Observable<HttpResponse<string>> {
			return this.http.patch(this.baseUri + 'policies/' + (policyName == null ? '' : encodeURIComponent(policyName)) + '/version/' + (policyVersionId == null ? '' : encodeURIComponent(policyVersionId)), null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Deletes a provisioning template.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DeleteProvisioningTemplate</a> action.</p>
		 * Delete provisioning-templates/{templateName}
		 * @param {string} templateName The name of the fleet provision template to delete.
		 * @return {DeleteProvisioningTemplateResponse} Success
		 */
		DeleteProvisioningTemplate(templateName: string): Observable<DeleteProvisioningTemplateResponse> {
			return this.http.delete<DeleteProvisioningTemplateResponse>(this.baseUri + 'provisioning-templates/' + (templateName == null ? '' : encodeURIComponent(templateName)), {});
		}

		/**
		 * <p>Returns information about a provisioning template.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DescribeProvisioningTemplate</a> action.</p>
		 * Get provisioning-templates/{templateName}
		 * @param {string} templateName The name of the provisioning template.
		 * @return {DescribeProvisioningTemplateResponse} Success
		 */
		DescribeProvisioningTemplate(templateName: string): Observable<DescribeProvisioningTemplateResponse> {
			return this.http.get<DescribeProvisioningTemplateResponse>(this.baseUri + 'provisioning-templates/' + (templateName == null ? '' : encodeURIComponent(templateName)), {});
		}

		/**
		 * <p>Updates a provisioning template.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">UpdateProvisioningTemplate</a> action.</p>
		 * Patch provisioning-templates/{templateName}
		 * @param {string} templateName The name of the provisioning template.
		 * @return {UpdateProvisioningTemplateResponse} Success
		 */
		UpdateProvisioningTemplate(templateName: string, requestBody: UpdateProvisioningTemplatePatchBody): Observable<UpdateProvisioningTemplateResponse> {
			return this.http.patch<UpdateProvisioningTemplateResponse>(this.baseUri + 'provisioning-templates/' + (templateName == null ? '' : encodeURIComponent(templateName)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Deletes a provisioning template version.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DeleteProvisioningTemplateVersion</a> action.</p>
		 * Delete provisioning-templates/{templateName}/versions/{versionId}
		 * @param {string} templateName The name of the provisioning template version to delete.
		 * @param {number} versionId The provisioning template version ID to delete.
		 * @return {DeleteProvisioningTemplateVersionResponse} Success
		 */
		DeleteProvisioningTemplateVersion(templateName: string, versionId: number): Observable<DeleteProvisioningTemplateVersionResponse> {
			return this.http.delete<DeleteProvisioningTemplateVersionResponse>(this.baseUri + 'provisioning-templates/' + (templateName == null ? '' : encodeURIComponent(templateName)) + '/versions/' + versionId, {});
		}

		/**
		 * <p>Returns information about a provisioning template version.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DescribeProvisioningTemplateVersion</a> action.</p>
		 * Get provisioning-templates/{templateName}/versions/{versionId}
		 * @param {string} templateName The template name.
		 * @param {number} versionId The provisioning template version ID.
		 * @return {DescribeProvisioningTemplateVersionResponse} Success
		 */
		DescribeProvisioningTemplateVersion(templateName: string, versionId: number): Observable<DescribeProvisioningTemplateVersionResponse> {
			return this.http.get<DescribeProvisioningTemplateVersionResponse>(this.baseUri + 'provisioning-templates/' + (templateName == null ? '' : encodeURIComponent(templateName)) + '/versions/' + versionId, {});
		}

		/**
		 * <p>Deletes a CA certificate registration code.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DeleteRegistrationCode</a> action.</p>
		 * Delete registrationcode
		 * @return {DeleteRegistrationCodeResponse} Success
		 */
		DeleteRegistrationCode(): Observable<DeleteRegistrationCodeResponse> {
			return this.http.delete<DeleteRegistrationCodeResponse>(this.baseUri + 'registrationcode', {});
		}

		/**
		 * <p>Gets a registration code used to register a CA certificate with IoT.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">GetRegistrationCode</a> action.</p>
		 * Get registrationcode
		 * @return {GetRegistrationCodeResponse} Success
		 */
		GetRegistrationCode(): Observable<GetRegistrationCodeResponse> {
			return this.http.get<GetRegistrationCodeResponse>(this.baseUri + 'registrationcode', {});
		}

		/**
		 * <p>Deletes a topic rule destination.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DeleteTopicRuleDestination</a> action.</p>
		 * Delete destinations/{arn}
		 * @param {string} arn The ARN of the topic rule destination to delete.
		 * @return {DeleteTopicRuleDestinationResponse} Success
		 */
		DeleteTopicRuleDestination(arn: string): Observable<DeleteTopicRuleDestinationResponse> {
			return this.http.delete<DeleteTopicRuleDestinationResponse>(this.baseUri + 'destinations/' + (arn == null ? '' : encodeURIComponent(arn)), {});
		}

		/**
		 * <p>Gets information about a topic rule destination.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">GetTopicRuleDestination</a> action.</p>
		 * Get destinations/{arn}
		 * @param {string} arn The ARN of the topic rule destination.
		 * @return {GetTopicRuleDestinationResponse} Success
		 */
		GetTopicRuleDestination(arn: string): Observable<GetTopicRuleDestinationResponse> {
			return this.http.get<GetTopicRuleDestinationResponse>(this.baseUri + 'destinations/' + (arn == null ? '' : encodeURIComponent(arn)), {});
		}

		/**
		 * <p>Deletes a logging level.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DeleteV2LoggingLevel</a> action.</p>
		 * Delete v2LoggingLevel#targetType&targetName
		 * @param {LogTargetType} targetType The type of resource for which you are configuring logging. Must be <code>THING_Group</code>.
		 * @param {string} targetName The name of the resource for which you are configuring logging.
		 * @return {void} Success
		 */
		DeleteV2LoggingLevel(targetType: LogTargetType, targetName: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'v2LoggingLevel#targetType&targetName?targetType=' + targetType + '&targetName=' + (targetName == null ? '' : encodeURIComponent(targetName)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Deprecates a thing type. You can not associate new things with deprecated thing type.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DeprecateThingType</a> action.</p>
		 * Post thing-types/{thingTypeName}/deprecate
		 * @param {string} thingTypeName The name of the thing type to deprecate.
		 * @return {DeprecateThingTypeResponse} Success
		 */
		DeprecateThingType(thingTypeName: string, requestBody: DeprecateThingTypePostBody): Observable<DeprecateThingTypeResponse> {
			return this.http.post<DeprecateThingTypeResponse>(this.baseUri + 'thing-types/' + (thingTypeName == null ? '' : encodeURIComponent(thingTypeName)) + '/deprecate', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Gets information about a single audit finding. Properties include the reason for noncompliance, the severity of the issue, and the start time when the audit that returned the finding.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DescribeAuditFinding</a> action.</p>
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
		 * <p>Starts a task that applies a set of mitigation actions to the specified target.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">StartAuditMitigationActionsTask</a> action.</p>
		 * Post audit/mitigationactions/tasks/{taskId}
		 * @param {string} taskId A unique identifier for the task. You can use this identifier to check the status of the task or to cancel it.
		 * @return {StartAuditMitigationActionsTaskResponse} Success
		 */
		StartAuditMitigationActionsTask(taskId: string, requestBody: StartAuditMitigationActionsTaskPostBody): Observable<StartAuditMitigationActionsTaskResponse> {
			return this.http.post<StartAuditMitigationActionsTaskResponse>(this.baseUri + 'audit/mitigationactions/tasks/' + (taskId == null ? '' : encodeURIComponent(taskId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets information about a Device Defender audit suppression.
		 * Post audit/suppressions/describe
		 * @return {DescribeAuditSuppressionResponse} Success
		 */
		DescribeAuditSuppression(requestBody: DescribeAuditSuppressionPostBody): Observable<DescribeAuditSuppressionResponse> {
			return this.http.post<DescribeAuditSuppressionResponse>(this.baseUri + 'audit/suppressions/describe', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Gets information about a Device Defender audit.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DescribeAuditTask</a> action.</p>
		 * Get audit/tasks/{taskId}
		 * @param {string} taskId The ID of the audit whose information you want to get.
		 * @return {DescribeAuditTaskResponse} Success
		 */
		DescribeAuditTask(taskId: string): Observable<DescribeAuditTaskResponse> {
			return this.http.get<DescribeAuditTaskResponse>(this.baseUri + 'audit/tasks/' + (taskId == null ? '' : encodeURIComponent(taskId)), {});
		}

		/**
		 * <p> Gets information about a Device Defender ML Detect mitigation action. </p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DescribeDetectMitigationActionsTask</a> action.</p>
		 * Get detect/mitigationactions/tasks/{taskId}
		 * @param {string} taskId  The unique identifier of the task. 
		 * @return {DescribeDetectMitigationActionsTaskResponse} Success
		 */
		DescribeDetectMitigationActionsTask(taskId: string): Observable<DescribeDetectMitigationActionsTaskResponse> {
			return this.http.get<DescribeDetectMitigationActionsTaskResponse>(this.baseUri + 'detect/mitigationactions/tasks/' + (taskId == null ? '' : encodeURIComponent(taskId)), {});
		}

		/**
		 * <p> Starts a Device Defender ML Detect mitigation actions task. </p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">StartDetectMitigationActionsTask</a> action.</p>
		 * Put detect/mitigationactions/tasks/{taskId}
		 * @param {string} taskId  The unique identifier of the task. 
		 * @return {StartDetectMitigationActionsTaskResponse} Success
		 */
		StartDetectMitigationActionsTask(taskId: string, requestBody: StartDetectMitigationActionsTaskPutBody): Observable<StartDetectMitigationActionsTaskResponse> {
			return this.http.put<StartDetectMitigationActionsTaskResponse>(this.baseUri + 'detect/mitigationactions/tasks/' + (taskId == null ? '' : encodeURIComponent(taskId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Returns a unique endpoint specific to the Amazon Web Services account making the call.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DescribeEndpoint</a> action.</p>
		 * Get endpoint
		 * @param {string} endpointType <p>The endpoint type. Valid endpoint types include:</p> <ul> <li> <p> <code>iot:Data</code> - Returns a VeriSign signed data endpoint.</p> </li> </ul> <ul> <li> <p> <code>iot:Data-ATS</code> - Returns an ATS signed data endpoint.</p> </li> </ul> <ul> <li> <p> <code>iot:CredentialProvider</code> - Returns an IoT credentials provider API endpoint.</p> </li> </ul> <ul> <li> <p> <code>iot:Jobs</code> - Returns an IoT device management Jobs API endpoint.</p> </li> </ul> <p>We strongly recommend that customers use the newer <code>iot:Data-ATS</code> endpoint type to avoid issues related to the widespread distrust of Symantec certificate authorities.</p>
		 * @return {DescribeEndpointResponse} Success
		 */
		DescribeEndpoint(endpointType: string | null | undefined): Observable<DescribeEndpointResponse> {
			return this.http.get<DescribeEndpointResponse>(this.baseUri + 'endpoint?endpointType=' + (endpointType == null ? '' : encodeURIComponent(endpointType)), {});
		}

		/**
		 * <p>Describes event configurations.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DescribeEventConfigurations</a> action.</p>
		 * Get event-configurations
		 * @return {DescribeEventConfigurationsResponse} Success
		 */
		DescribeEventConfigurations(): Observable<DescribeEventConfigurationsResponse> {
			return this.http.get<DescribeEventConfigurationsResponse>(this.baseUri + 'event-configurations', {});
		}

		/**
		 * <p>Updates the event configurations.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">UpdateEventConfigurations</a> action.</p>
		 * Patch event-configurations
		 * @return {UpdateEventConfigurationsResponse} Success
		 */
		UpdateEventConfigurations(requestBody: UpdateEventConfigurationsPatchBody): Observable<UpdateEventConfigurationsResponse> {
			return this.http.patch<UpdateEventConfigurationsResponse>(this.baseUri + 'event-configurations', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Describes a search index.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DescribeIndex</a> action.</p>
		 * Get indices/{indexName}
		 * @param {string} indexName The index name.
		 * @return {DescribeIndexResponse} Success
		 */
		DescribeIndex(indexName: string): Observable<DescribeIndexResponse> {
			return this.http.get<DescribeIndexResponse>(this.baseUri + 'indices/' + (indexName == null ? '' : encodeURIComponent(indexName)), {});
		}

		/**
		 * <p>Describes a job execution.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DescribeJobExecution</a> action.</p>
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
		 * View details of a managed job template.
		 * Get managed-job-templates/{templateName}
		 * @param {string} templateName The unique name of a managed job template, which is required.
		 * @param {string} templateVersion An optional parameter to specify version of a managed template. If not specified, the pre-defined default version is returned.
		 * @return {DescribeManagedJobTemplateResponse} Success
		 */
		DescribeManagedJobTemplate(templateName: string, templateVersion: string | null | undefined): Observable<DescribeManagedJobTemplateResponse> {
			return this.http.get<DescribeManagedJobTemplateResponse>(this.baseUri + 'managed-job-templates/' + (templateName == null ? '' : encodeURIComponent(templateName)) + '&templateVersion=' + (templateVersion == null ? '' : encodeURIComponent(templateVersion)), {});
		}

		/**
		 * <p>Describes a bulk thing provisioning task.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DescribeThingRegistrationTask</a> action.</p>
		 * Get thing-registration-tasks/{taskId}
		 * @param {string} taskId The task ID.
		 * @return {DescribeThingRegistrationTaskResponse} Success
		 */
		DescribeThingRegistrationTask(taskId: string): Observable<DescribeThingRegistrationTaskResponse> {
			return this.http.get<DescribeThingRegistrationTaskResponse>(this.baseUri + 'thing-registration-tasks/' + (taskId == null ? '' : encodeURIComponent(taskId)), {});
		}

		/**
		 * <p>Disables the rule.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DisableTopicRule</a> action.</p>
		 * Post rules/{ruleName}/disable
		 * @param {string} ruleName The name of the rule to disable.
		 * @return {void} Success
		 */
		DisableTopicRule(ruleName: string): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'rules/' + (ruleName == null ? '' : encodeURIComponent(ruleName)) + '/disable', null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Enables the rule.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">EnableTopicRule</a> action.</p>
		 * Post rules/{ruleName}/enable
		 * @param {string} ruleName The name of the topic rule to enable.
		 * @return {void} Success
		 */
		EnableTopicRule(ruleName: string): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'rules/' + (ruleName == null ? '' : encodeURIComponent(ruleName)) + '/enable', null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p> Returns a Device Defender's ML Detect Security Profile training model's status. </p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">GetBehaviorModelTrainingSummaries</a> action.</p>
		 * Get behavior-model-training/summaries
		 * @param {string} securityProfileName  The name of the security profile. 
		 * @param {number} maxResults  The maximum number of results to return at one time. The default is 10. 
		 * @param {string} nextToken  The token for the next set of results. 
		 * @return {GetBehaviorModelTrainingSummariesResponse} Success
		 */
		GetBehaviorModelTrainingSummaries(securityProfileName: string | null | undefined, maxResults: number | null | undefined, nextToken: string | null | undefined): Observable<GetBehaviorModelTrainingSummariesResponse> {
			return this.http.get<GetBehaviorModelTrainingSummariesResponse>(this.baseUri + 'behavior-model-training/summaries?securityProfileName=' + (securityProfileName == null ? '' : encodeURIComponent(securityProfileName)) + '&maxResults=' + maxResults + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), {});
		}

		/**
		 * <p>Aggregates on indexed data with search queries pertaining to particular fields. </p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">GetBucketsAggregation</a> action.</p>
		 * Post indices/buckets
		 * @return {GetBucketsAggregationResponse} Success
		 */
		GetBucketsAggregation(requestBody: GetBucketsAggregationPostBody): Observable<GetBucketsAggregationResponse> {
			return this.http.post<GetBucketsAggregationResponse>(this.baseUri + 'indices/buckets', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Returns the approximate count of unique values that match the query.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">GetCardinality</a> action.</p>
		 * Post indices/cardinality
		 * @return {GetCardinalityResponse} Success
		 */
		GetCardinality(requestBody: GetCardinalityPostBody): Observable<GetCardinalityResponse> {
			return this.http.post<GetCardinalityResponse>(this.baseUri + 'indices/cardinality', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Gets a list of the policies that have an effect on the authorization behavior of the specified device when it connects to the IoT device gateway.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">GetEffectivePolicies</a> action.</p>
		 * Post effective-policies
		 * @param {string} thingName The thing name.
		 * @return {GetEffectivePoliciesResponse} Success
		 */
		GetEffectivePolicies(thingName: string | null | undefined, requestBody: GetEffectivePoliciesPostBody): Observable<GetEffectivePoliciesResponse> {
			return this.http.post<GetEffectivePoliciesResponse>(this.baseUri + 'effective-policies?thingName=' + (thingName == null ? '' : encodeURIComponent(thingName)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Gets the indexing configuration.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">GetIndexingConfiguration</a> action.</p>
		 * Get indexing/config
		 * @return {GetIndexingConfigurationResponse} Success
		 */
		GetIndexingConfiguration(): Observable<GetIndexingConfigurationResponse> {
			return this.http.get<GetIndexingConfigurationResponse>(this.baseUri + 'indexing/config', {});
		}

		/**
		 * <p>Updates the search configuration.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">UpdateIndexingConfiguration</a> action.</p>
		 * Post indexing/config
		 * @return {UpdateIndexingConfigurationResponse} Success
		 */
		UpdateIndexingConfiguration(requestBody: UpdateIndexingConfigurationPostBody): Observable<UpdateIndexingConfigurationResponse> {
			return this.http.post<UpdateIndexingConfigurationResponse>(this.baseUri + 'indexing/config', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Gets a job document.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">GetJobDocument</a> action.</p>
		 * Get jobs/{jobId}/job-document
		 * @param {string} jobId The unique identifier you assigned to this job when it was created.
		 * @return {GetJobDocumentResponse} Success
		 */
		GetJobDocument(jobId: string): Observable<GetJobDocumentResponse> {
			return this.http.get<GetJobDocumentResponse>(this.baseUri + 'jobs/' + (jobId == null ? '' : encodeURIComponent(jobId)) + '/job-document', {});
		}

		/**
		 * <p>Gets the logging options.</p> <p>NOTE: use of this command is not recommended. Use <code>GetV2LoggingOptions</code> instead.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">GetLoggingOptions</a> action.</p>
		 * Get loggingOptions
		 * @return {GetLoggingOptionsResponse} Success
		 */
		GetLoggingOptions(): Observable<GetLoggingOptionsResponse> {
			return this.http.get<GetLoggingOptionsResponse>(this.baseUri + 'loggingOptions', {});
		}

		/**
		 * <p>Sets the logging options.</p> <p>NOTE: use of this command is not recommended. Use <code>SetV2LoggingOptions</code> instead.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">SetLoggingOptions</a> action.</p>
		 * Post loggingOptions
		 * @return {void} Success
		 */
		SetLoggingOptions(requestBody: SetLoggingOptionsPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'loggingOptions', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Gets information about the specified software package's configuration.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">GetPackageConfiguration</a> action.</p>
		 * Get package-configuration
		 * @return {GetPackageConfigurationResponse} Success
		 */
		GetPackageConfiguration(): Observable<GetPackageConfigurationResponse> {
			return this.http.get<GetPackageConfigurationResponse>(this.baseUri + 'package-configuration', {});
		}

		/**
		 * <p>Updates the package configuration.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">UpdatePackageConfiguration</a> and <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_use_passrole.html">iam:PassRole</a> actions.</p>
		 * Patch package-configuration
		 * @param {string} clientToken A unique case-sensitive identifier that you can provide to ensure the idempotency of the request. Don't reuse this client token if a new idempotent request is required.
		 * @return {UpdatePackageConfigurationResponse} Success
		 */
		UpdatePackageConfiguration(clientToken: string | null | undefined, requestBody: UpdatePackageConfigurationPatchBody): Observable<UpdatePackageConfigurationResponse> {
			return this.http.patch<UpdatePackageConfigurationResponse>(this.baseUri + 'package-configuration?clientToken=' + (clientToken == null ? '' : encodeURIComponent(clientToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Groups the aggregated values that match the query into percentile groupings. The default percentile groupings are: 1,5,25,50,75,95,99, although you can specify your own when you call <code>GetPercentiles</code>. This function returns a value for each percentile group specified (or the default percentile groupings). The percentile group "1" contains the aggregated field value that occurs in approximately one percent of the values that match the query. The percentile group "5" contains the aggregated field value that occurs in approximately five percent of the values that match the query, and so on. The result is an approximation, the more values that match the query, the more accurate the percentile values.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">GetPercentiles</a> action.</p>
		 * Post indices/percentiles
		 * @return {GetPercentilesResponse} Success
		 */
		GetPercentiles(requestBody: GetPercentilesPostBody): Observable<GetPercentilesResponse> {
			return this.http.post<GetPercentilesResponse>(this.baseUri + 'indices/percentiles', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Returns the count, average, sum, minimum, maximum, sum of squares, variance, and standard deviation for the specified aggregated field. If the aggregation field is of type <code>String</code>, only the count statistic is returned.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">GetStatistics</a> action.</p>
		 * Post indices/statistics
		 * @return {GetStatisticsResponse} Success
		 */
		GetStatistics(requestBody: GetStatisticsPostBody): Observable<GetStatisticsResponse> {
			return this.http.post<GetStatisticsResponse>(this.baseUri + 'indices/statistics', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Gets the fine grained logging options.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">GetV2LoggingOptions</a> action.</p>
		 * Get v2LoggingOptions
		 * @return {GetV2LoggingOptionsResponse} Success
		 */
		GetV2LoggingOptions(): Observable<GetV2LoggingOptionsResponse> {
			return this.http.get<GetV2LoggingOptionsResponse>(this.baseUri + 'v2LoggingOptions', {});
		}

		/**
		 * <p>Sets the logging options for the V2 logging service.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">SetV2LoggingOptions</a> action.</p>
		 * Post v2LoggingOptions
		 * @return {void} Success
		 */
		SetV2LoggingOptions(requestBody: SetV2LoggingOptionsPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v2LoggingOptions', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Lists the active violations for a given Device Defender security profile.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ListActiveViolations</a> action.</p>
		 * Get active-violations
		 * @param {string} thingName The name of the thing whose active violations are listed.
		 * @param {string} securityProfileName The name of the Device Defender security profile for which violations are listed.
		 * @param {BehaviorCriteriaType} behaviorCriteriaType  The criteria for a behavior. 
		 * @param {boolean} listSuppressedAlerts  A list of all suppressed alerts. 
		 * @param {VerificationState} verificationState The verification state of the violation (detect alarm).
		 * @param {string} nextToken The token for the next set of results.
		 * @param {number} maxResults The maximum number of results to return at one time.
		 * @return {ListActiveViolationsResponse} Success
		 */
		ListActiveViolations(thingName: string | null | undefined, securityProfileName: string | null | undefined, behaviorCriteriaType: BehaviorCriteriaType | null | undefined, listSuppressedAlerts: boolean | null | undefined, verificationState: VerificationState | null | undefined, nextToken: string | null | undefined, maxResults: number | null | undefined): Observable<ListActiveViolationsResponse> {
			return this.http.get<ListActiveViolationsResponse>(this.baseUri + 'active-violations?thingName=' + (thingName == null ? '' : encodeURIComponent(thingName)) + '&securityProfileName=' + (securityProfileName == null ? '' : encodeURIComponent(securityProfileName)) + '&behaviorCriteriaType=' + behaviorCriteriaType + '&listSuppressedAlerts=' + listSuppressedAlerts + '&verificationState=' + verificationState + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&maxResults=' + maxResults, {});
		}

		/**
		 * <p>Lists the policies attached to the specified thing group.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ListAttachedPolicies</a> action.</p>
		 * Post attached-policies/{target}
		 * @param {string} target The group or principal for which the policies will be listed. Valid principals are CertificateArn (arn:aws:iot:<i>region</i>:<i>accountId</i>:cert/<i>certificateId</i>), thingGroupArn (arn:aws:iot:<i>region</i>:<i>accountId</i>:thinggroup/<i>groupName</i>) and CognitoId (<i>region</i>:<i>id</i>).
		 * @param {boolean} recursive When true, recursively list attached policies.
		 * @param {string} marker The token to retrieve the next set of results.
		 * @param {number} pageSize The maximum number of results to be returned per request.
		 * @return {ListAttachedPoliciesResponse} Success
		 */
		ListAttachedPolicies(target: string, recursive: boolean | null | undefined, marker: string | null | undefined, pageSize: number | null | undefined): Observable<ListAttachedPoliciesResponse> {
			return this.http.post<ListAttachedPoliciesResponse>(this.baseUri + 'attached-policies/' + (target == null ? '' : encodeURIComponent(target)) + '&recursive=' + recursive + '&marker=' + (marker == null ? '' : encodeURIComponent(marker)) + '&pageSize=' + pageSize, null, {});
		}

		/**
		 * <p>Lists the findings (results) of a Device Defender audit or of the audits performed during a specified time period. (Findings are retained for 90 days.)</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ListAuditFindings</a> action.</p>
		 * Post audit/findings
		 * @param {string} maxResults Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {ListAuditFindingsResponse} Success
		 */
		ListAuditFindings(maxResults: string | null | undefined, nextToken: string | null | undefined, requestBody: ListAuditFindingsPostBody): Observable<ListAuditFindingsResponse> {
			return this.http.post<ListAuditFindingsResponse>(this.baseUri + 'audit/findings?maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Gets the status of audit mitigation action tasks that were executed.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ListAuditMitigationActionsExecutions</a> action.</p>
		 * Get audit/mitigationactions/executions#taskId&findingId
		 * @param {string} taskId Specify this filter to limit results to actions for a specific audit mitigation actions task.
		 * @param {AuditMitigationActionsExecutionStatus} actionStatus Specify this filter to limit results to those with a specific status.
		 * @param {string} findingId Specify this filter to limit results to those that were applied to a specific audit finding.
		 * @param {number} maxResults The maximum number of results to return at one time. The default is 25.
		 * @param {string} nextToken The token for the next set of results.
		 * @return {ListAuditMitigationActionsExecutionsResponse} Success
		 */
		ListAuditMitigationActionsExecutions(taskId: string, actionStatus: AuditMitigationActionsExecutionStatus | null | undefined, findingId: string, maxResults: number | null | undefined, nextToken: string | null | undefined): Observable<ListAuditMitigationActionsExecutionsResponse> {
			return this.http.get<ListAuditMitigationActionsExecutionsResponse>(this.baseUri + 'audit/mitigationactions/executions#taskId&findingId?taskId=' + (taskId == null ? '' : encodeURIComponent(taskId)) + '&actionStatus=' + actionStatus + '&findingId=' + (findingId == null ? '' : encodeURIComponent(findingId)) + '&maxResults=' + maxResults + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), {});
		}

		/**
		 * <p>Gets a list of audit mitigation action tasks that match the specified filters.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ListAuditMitigationActionsTasks</a> action.</p>
		 * Get audit/mitigationactions/tasks#startTime&endTime
		 * @param {string} auditTaskId Specify this filter to limit results to tasks that were applied to results for a specific audit.
		 * @param {string} findingId Specify this filter to limit results to tasks that were applied to a specific audit finding.
		 * @param {AuditMitigationActionsTaskStatus} taskStatus Specify this filter to limit results to tasks that are in a specific state.
		 * @param {number} maxResults The maximum number of results to return at one time. The default is 25.
		 * @param {string} nextToken The token for the next set of results.
		 * @param {Date} startTime Specify this filter to limit results to tasks that began on or after a specific date and time.
		 * @param {Date} endTime Specify this filter to limit results to tasks that were completed or canceled on or before a specific date and time.
		 * @return {ListAuditMitigationActionsTasksResponse} Success
		 */
		ListAuditMitigationActionsTasks(auditTaskId: string | null | undefined, findingId: string | null | undefined, taskStatus: AuditMitigationActionsTaskStatus | null | undefined, maxResults: number | null | undefined, nextToken: string | null | undefined, startTime: Date, endTime: Date): Observable<ListAuditMitigationActionsTasksResponse> {
			return this.http.get<ListAuditMitigationActionsTasksResponse>(this.baseUri + 'audit/mitigationactions/tasks#startTime&endTime?auditTaskId=' + (auditTaskId == null ? '' : encodeURIComponent(auditTaskId)) + '&findingId=' + (findingId == null ? '' : encodeURIComponent(findingId)) + '&taskStatus=' + taskStatus + '&maxResults=' + maxResults + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&startTime=' + startTime.toISOString() + '&endTime=' + endTime.toISOString(), {});
		}

		/**
		 * <p> Lists your Device Defender audit listings. </p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ListAuditSuppressions</a> action.</p>
		 * Post audit/suppressions/list
		 * @param {string} maxResults Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {ListAuditSuppressionsResponse} Success
		 */
		ListAuditSuppressions(maxResults: string | null | undefined, nextToken: string | null | undefined, requestBody: ListAuditSuppressionsPostBody): Observable<ListAuditSuppressionsResponse> {
			return this.http.post<ListAuditSuppressionsResponse>(this.baseUri + 'audit/suppressions/list?maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Lists the Device Defender audits that have been performed during a given time period.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ListAuditTasks</a> action.</p>
		 * Get audit/tasks#startTime&endTime
		 * @param {Date} startTime The beginning of the time period. Audit information is retained for a limited time (90 days). Requesting a start time prior to what is retained results in an "InvalidRequestException".
		 * @param {Date} endTime The end of the time period.
		 * @param {AuditTaskType} taskType A filter to limit the output to the specified type of audit: can be one of "ON_DEMAND_AUDIT_TASK" or "SCHEDULED__AUDIT_TASK".
		 * @param {AuditMitigationActionsTaskStatus} taskStatus A filter to limit the output to audits with the specified completion status: can be one of "IN_PROGRESS", "COMPLETED", "FAILED", or "CANCELED".
		 * @param {string} nextToken The token for the next set of results.
		 * @param {number} maxResults The maximum number of results to return at one time. The default is 25.
		 * @return {ListAuditTasksResponse} Success
		 */
		ListAuditTasks(startTime: Date, endTime: Date, taskType: AuditTaskType | null | undefined, taskStatus: AuditMitigationActionsTaskStatus | null | undefined, nextToken: string | null | undefined, maxResults: number | null | undefined): Observable<ListAuditTasksResponse> {
			return this.http.get<ListAuditTasksResponse>(this.baseUri + 'audit/tasks#startTime&endTime?startTime=' + startTime.toISOString() + '&endTime=' + endTime.toISOString() + '&taskType=' + taskType + '&taskStatus=' + taskStatus + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&maxResults=' + maxResults, {});
		}

		/**
		 * <p>Lists the authorizers registered in your account.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ListAuthorizers</a> action.</p>
		 * Get authorizers/
		 * @param {number} pageSize The maximum number of results to return at one time.
		 * @param {string} marker A marker used to get the next set of results.
		 * @param {boolean} isAscendingOrder Return the list of authorizers in ascending alphabetical order.
		 * @param {AuthorizerStatus} status The status of the list authorizers request.
		 * @return {ListAuthorizersResponse} Success
		 */
		ListAuthorizers(pageSize: number | null | undefined, marker: string | null | undefined, isAscendingOrder: boolean | null | undefined, status: AuthorizerStatus | null | undefined): Observable<ListAuthorizersResponse> {
			return this.http.get<ListAuthorizersResponse>(this.baseUri + 'authorizers/?pageSize=' + pageSize + '&marker=' + (marker == null ? '' : encodeURIComponent(marker)) + '&isAscendingOrder=' + isAscendingOrder + '&status=' + status, {});
		}

		/**
		 * <p>Lists the billing groups you have created.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ListBillingGroups</a> action.</p>
		 * Get billing-groups
		 * @param {string} nextToken To retrieve the next set of results, the <code>nextToken</code> value from a previous response; otherwise <b>null</b> to receive the first set of results.
		 * @param {number} maxResults The maximum number of results to return per request.
		 * @param {string} namePrefixFilter Limit the results to billing groups whose names have the given prefix.
		 * @return {ListBillingGroupsResponse} Success
		 */
		ListBillingGroups(nextToken: string | null | undefined, maxResults: number | null | undefined, namePrefixFilter: string | null | undefined): Observable<ListBillingGroupsResponse> {
			return this.http.get<ListBillingGroupsResponse>(this.baseUri + 'billing-groups?nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&maxResults=' + maxResults + '&namePrefixFilter=' + (namePrefixFilter == null ? '' : encodeURIComponent(namePrefixFilter)), {});
		}

		/**
		 * <p>Lists the CA certificates registered for your Amazon Web Services account.</p> <p>The results are paginated with a default page size of 25. You can use the returned marker to retrieve additional results.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ListCACertificates</a> action.</p>
		 * Get cacertificates
		 * @param {number} pageSize The result page size.
		 * @param {string} marker The marker for the next set of results.
		 * @param {boolean} isAscendingOrder Determines the order of the results.
		 * @param {string} templateName The name of the provisioning template.
		 * @return {ListCACertificatesResponse} Success
		 */
		ListCACertificates(pageSize: number | null | undefined, marker: string | null | undefined, isAscendingOrder: boolean | null | undefined, templateName: string | null | undefined): Observable<ListCACertificatesResponse> {
			return this.http.get<ListCACertificatesResponse>(this.baseUri + 'cacertificates?pageSize=' + pageSize + '&marker=' + (marker == null ? '' : encodeURIComponent(marker)) + '&isAscendingOrder=' + isAscendingOrder + '&templateName=' + (templateName == null ? '' : encodeURIComponent(templateName)), {});
		}

		/**
		 * <p>List the device certificates signed by the specified CA certificate.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ListCertificatesByCA</a> action.</p>
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
		 * <p> Lists your Device Defender detect custom metrics. </p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ListCustomMetrics</a> action.</p>
		 * Get custom-metrics
		 * @param {string} nextToken  The token for the next set of results. 
		 * @param {number} maxResults  The maximum number of results to return at one time. The default is 25. 
		 * @return {ListCustomMetricsResponse} Success
		 */
		ListCustomMetrics(nextToken: string | null | undefined, maxResults: number | null | undefined): Observable<ListCustomMetricsResponse> {
			return this.http.get<ListCustomMetricsResponse>(this.baseUri + 'custom-metrics?nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&maxResults=' + maxResults, {});
		}

		/**
		 * <p> Lists mitigation actions executions for a Device Defender ML Detect Security Profile. </p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ListDetectMitigationActionsExecutions</a> action.</p>
		 * Get detect/mitigationactions/executions
		 * @param {string} taskId  The unique identifier of the task. 
		 * @param {string} violationId  The unique identifier of the violation. 
		 * @param {string} thingName  The name of the thing whose mitigation actions are listed. 
		 * @param {Date} startTime  A filter to limit results to those found after the specified time. You must specify either the startTime and endTime or the taskId, but not both. 
		 * @param {Date} endTime  The end of the time period for which ML Detect mitigation actions executions are returned. 
		 * @param {number} maxResults  The maximum number of results to return at one time. The default is 25. 
		 * @param {string} nextToken  The token for the next set of results. 
		 * @return {ListDetectMitigationActionsExecutionsResponse} Success
		 */
		ListDetectMitigationActionsExecutions(taskId: string | null | undefined, violationId: string | null | undefined, thingName: string | null | undefined, startTime: Date | null | undefined, endTime: Date | null | undefined, maxResults: number | null | undefined, nextToken: string | null | undefined): Observable<ListDetectMitigationActionsExecutionsResponse> {
			return this.http.get<ListDetectMitigationActionsExecutionsResponse>(this.baseUri + 'detect/mitigationactions/executions?taskId=' + (taskId == null ? '' : encodeURIComponent(taskId)) + '&violationId=' + (violationId == null ? '' : encodeURIComponent(violationId)) + '&thingName=' + (thingName == null ? '' : encodeURIComponent(thingName)) + '&startTime=' + startTime?.toISOString() + '&endTime=' + endTime?.toISOString() + '&maxResults=' + maxResults + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), {});
		}

		/**
		 * <p> List of Device Defender ML Detect mitigation actions tasks. </p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ListDetectMitigationActionsTasks</a> action.</p>
		 * Get detect/mitigationactions/tasks#startTime&endTime
		 * @param {number} maxResults The maximum number of results to return at one time. The default is 25.
		 * @param {string} nextToken  The token for the next set of results. 
		 * @param {Date} startTime  A filter to limit results to those found after the specified time. You must specify either the startTime and endTime or the taskId, but not both. 
		 * @param {Date} endTime  The end of the time period for which ML Detect mitigation actions tasks are returned. 
		 * @return {ListDetectMitigationActionsTasksResponse} Success
		 */
		ListDetectMitigationActionsTasks(maxResults: number | null | undefined, nextToken: string | null | undefined, startTime: Date, endTime: Date): Observable<ListDetectMitigationActionsTasksResponse> {
			return this.http.get<ListDetectMitigationActionsTasksResponse>(this.baseUri + 'detect/mitigationactions/tasks#startTime&endTime?maxResults=' + maxResults + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&startTime=' + startTime.toISOString() + '&endTime=' + endTime.toISOString(), {});
		}

		/**
		 * <p>List the set of dimensions that are defined for your Amazon Web Services accounts.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ListDimensions</a> action.</p>
		 * Get dimensions
		 * @param {string} nextToken The token for the next set of results.
		 * @param {number} maxResults The maximum number of results to retrieve at one time.
		 * @return {ListDimensionsResponse} Success
		 */
		ListDimensions(nextToken: string | null | undefined, maxResults: number | null | undefined): Observable<ListDimensionsResponse> {
			return this.http.get<ListDimensionsResponse>(this.baseUri + 'dimensions?nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&maxResults=' + maxResults, {});
		}

		/**
		 * <p>Gets a list of domain configurations for the user. This list is sorted alphabetically by domain configuration name.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ListDomainConfigurations</a> action.</p>
		 * Get domainConfigurations
		 * @param {string} marker The marker for the next set of results.
		 * @param {number} pageSize The result page size.
		 * @param {ServiceType} serviceType The type of service delivered by the endpoint.
		 * @return {ListDomainConfigurationsResponse} Success
		 */
		ListDomainConfigurations(marker: string | null | undefined, pageSize: number | null | undefined, serviceType: ServiceType | null | undefined): Observable<ListDomainConfigurationsResponse> {
			return this.http.get<ListDomainConfigurationsResponse>(this.baseUri + 'domainConfigurations?marker=' + (marker == null ? '' : encodeURIComponent(marker)) + '&pageSize=' + pageSize + '&serviceType=' + serviceType, {});
		}

		/**
		 * <p>Lists all your fleet metrics. </p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ListFleetMetrics</a> action.</p>
		 * Get fleet-metrics
		 * @param {string} nextToken To retrieve the next set of results, the <code>nextToken</code> value from a previous response; otherwise <code>null</code> to receive the first set of results.
		 * @param {number} maxResults The maximum number of results to return in this operation.
		 * @return {ListFleetMetricsResponse} Success
		 */
		ListFleetMetrics(nextToken: string | null | undefined, maxResults: number | null | undefined): Observable<ListFleetMetricsResponse> {
			return this.http.get<ListFleetMetricsResponse>(this.baseUri + 'fleet-metrics?nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&maxResults=' + maxResults, {});
		}

		/**
		 * <p>Lists the search indices.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ListIndices</a> action.</p>
		 * Get indices
		 * @param {string} nextToken The token used to get the next set of results, or <code>null</code> if there are no additional results.
		 * @param {number} maxResults The maximum number of results to return at one time.
		 * @return {ListIndicesResponse} Success
		 */
		ListIndices(nextToken: string | null | undefined, maxResults: number | null | undefined): Observable<ListIndicesResponse> {
			return this.http.get<ListIndicesResponse>(this.baseUri + 'indices?nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&maxResults=' + maxResults, {});
		}

		/**
		 * <p>Lists the job executions for a job.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ListJobExecutionsForJob</a> action.</p>
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
		 * <p>Lists the job executions for the specified thing.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ListJobExecutionsForThing</a> action.</p>
		 * Get things/{thingName}/jobs
		 * @param {string} thingName The thing name.
		 * @param {JobExecutionStatus} status An optional filter that lets you search for jobs that have the specified status.
		 * @param {string} namespaceId <p>The namespace used to indicate that a job is a customer-managed job.</p> <p>When you specify a value for this parameter, Amazon Web Services IoT Core sends jobs notifications to MQTT topics that contain the value in the following format.</p> <p> <code>$aws/things/<i>THING_NAME</i>/jobs/<i>JOB_ID</i>/notify-namespace-<i>NAMESPACE_ID</i>/</code> </p> <note> <p>The <code>namespaceId</code> feature is in public preview.</p> </note>
		 * @param {number} maxResults The maximum number of results to be returned per request.
		 * @param {string} nextToken The token to retrieve the next set of results.
		 * @param {string} jobId The unique identifier you assigned to this job when it was created.
		 * @return {ListJobExecutionsForThingResponse} Success
		 */
		ListJobExecutionsForThing(thingName: string, status: JobExecutionStatus | null | undefined, namespaceId: string | null | undefined, maxResults: number | null | undefined, nextToken: string | null | undefined, jobId: string | null | undefined): Observable<ListJobExecutionsForThingResponse> {
			return this.http.get<ListJobExecutionsForThingResponse>(this.baseUri + 'things/' + (thingName == null ? '' : encodeURIComponent(thingName)) + '/jobs&status=' + status + '&namespaceId=' + (namespaceId == null ? '' : encodeURIComponent(namespaceId)) + '&maxResults=' + maxResults + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&jobId=' + (jobId == null ? '' : encodeURIComponent(jobId)), {});
		}

		/**
		 * <p>Returns a list of job templates.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ListJobTemplates</a> action.</p>
		 * Get job-templates
		 * @param {number} maxResults The maximum number of results to return in the list.
		 * @param {string} nextToken The token to use to return the next set of results in the list.
		 * @return {ListJobTemplatesResponse} Success
		 */
		ListJobTemplates(maxResults: number | null | undefined, nextToken: string | null | undefined): Observable<ListJobTemplatesResponse> {
			return this.http.get<ListJobTemplatesResponse>(this.baseUri + 'job-templates?maxResults=' + maxResults + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), {});
		}

		/**
		 * <p>Lists jobs.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ListJobs</a> action.</p>
		 * Get jobs
		 * @param {JobStatus} status An optional filter that lets you search for jobs that have the specified status.
		 * @param {TargetSelection} targetSelection <p>Specifies whether the job will continue to run (CONTINUOUS), or will be complete after all those things specified as targets have completed the job (SNAPSHOT). If continuous, the job may also be run on a thing when a change is detected in a target. For example, a job will run on a thing when the thing is added to a target group, even after the job was completed by all things originally in the group. </p> <note> <p>We recommend that you use continuous jobs instead of snapshot jobs for dynamic thing group targets. By using continuous jobs, devices that join the group receive the job execution even after the job has been created.</p> </note>
		 * @param {number} maxResults The maximum number of results to return per request.
		 * @param {string} nextToken The token to retrieve the next set of results.
		 * @param {string} thingGroupName A filter that limits the returned jobs to those for the specified group.
		 * @param {string} thingGroupId A filter that limits the returned jobs to those for the specified group.
		 * @param {string} namespaceId <p>The namespace used to indicate that a job is a customer-managed job.</p> <p>When you specify a value for this parameter, Amazon Web Services IoT Core sends jobs notifications to MQTT topics that contain the value in the following format.</p> <p> <code>$aws/things/<i>THING_NAME</i>/jobs/<i>JOB_ID</i>/notify-namespace-<i>NAMESPACE_ID</i>/</code> </p> <note> <p>The <code>namespaceId</code> feature is in public preview.</p> </note>
		 * @return {ListJobsResponse} Success
		 */
		ListJobs(status: JobStatus | null | undefined, targetSelection: TargetSelection | null | undefined, maxResults: number | null | undefined, nextToken: string | null | undefined, thingGroupName: string | null | undefined, thingGroupId: string | null | undefined, namespaceId: string | null | undefined): Observable<ListJobsResponse> {
			return this.http.get<ListJobsResponse>(this.baseUri + 'jobs?status=' + status + '&targetSelection=' + targetSelection + '&maxResults=' + maxResults + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&thingGroupName=' + (thingGroupName == null ? '' : encodeURIComponent(thingGroupName)) + '&thingGroupId=' + (thingGroupId == null ? '' : encodeURIComponent(thingGroupId)) + '&namespaceId=' + (namespaceId == null ? '' : encodeURIComponent(namespaceId)), {});
		}

		/**
		 * Returns a list of managed job templates.
		 * Get managed-job-templates
		 * @param {string} templateName An optional parameter for template name. If specified, only the versions of the managed job templates that have the specified template name will be returned.
		 * @param {number} maxResults Maximum number of entries that can be returned.
		 * @param {string} nextToken The token to retrieve the next set of results.
		 * @return {ListManagedJobTemplatesResponse} Success
		 */
		ListManagedJobTemplates(templateName: string | null | undefined, maxResults: number | null | undefined, nextToken: string | null | undefined): Observable<ListManagedJobTemplatesResponse> {
			return this.http.get<ListManagedJobTemplatesResponse>(this.baseUri + 'managed-job-templates?templateName=' + (templateName == null ? '' : encodeURIComponent(templateName)) + '&maxResults=' + maxResults + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), {});
		}

		/**
		 * Lists the values reported for an IoT Device Defender metric (device-side metric, cloud-side metric, or custom metric) by the given thing during the specified time period.
		 * Get metric-values#thingName&metricName&startTime&endTime
		 * @param {string} thingName The name of the thing for which security profile metric values are returned.
		 * @param {string} metricName The name of the security profile metric for which values are returned.
		 * @param {string} dimensionName The dimension name.
		 * @param {DimensionValueOperator} dimensionValueOperator The dimension value operator.
		 * @param {Date} startTime The start of the time period for which metric values are returned.
		 * @param {Date} endTime The end of the time period for which metric values are returned.
		 * @param {number} maxResults The maximum number of results to return at one time.
		 * @param {string} nextToken The token for the next set of results.
		 * @return {ListMetricValuesResponse} Success
		 */
		ListMetricValues(thingName: string, metricName: string, dimensionName: string | null | undefined, dimensionValueOperator: DimensionValueOperator | null | undefined, startTime: Date, endTime: Date, maxResults: number | null | undefined, nextToken: string | null | undefined): Observable<ListMetricValuesResponse> {
			return this.http.get<ListMetricValuesResponse>(this.baseUri + 'metric-values#thingName&metricName&startTime&endTime?thingName=' + (thingName == null ? '' : encodeURIComponent(thingName)) + '&metricName=' + (metricName == null ? '' : encodeURIComponent(metricName)) + '&dimensionName=' + (dimensionName == null ? '' : encodeURIComponent(dimensionName)) + '&dimensionValueOperator=' + dimensionValueOperator + '&startTime=' + startTime.toISOString() + '&endTime=' + endTime.toISOString() + '&maxResults=' + maxResults + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), {});
		}

		/**
		 * <p>Gets a list of all mitigation actions that match the specified filter criteria.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ListMitigationActions</a> action.</p>
		 * Get mitigationactions/actions
		 * @param {MitigationActionType} actionType Specify a value to limit the result to mitigation actions with a specific action type.
		 * @param {number} maxResults The maximum number of results to return at one time. The default is 25.
		 * @param {string} nextToken The token for the next set of results.
		 * @return {ListMitigationActionsResponse} Success
		 */
		ListMitigationActions(actionType: MitigationActionType | null | undefined, maxResults: number | null | undefined, nextToken: string | null | undefined): Observable<ListMitigationActionsResponse> {
			return this.http.get<ListMitigationActionsResponse>(this.baseUri + 'mitigationactions/actions?actionType=' + actionType + '&maxResults=' + maxResults + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), {});
		}

		/**
		 * <p>Lists OTA updates.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ListOTAUpdates</a> action.</p>
		 * Get otaUpdates
		 * @param {number} maxResults The maximum number of results to return at one time.
		 * @param {string} nextToken A token used to retrieve the next set of results.
		 * @param {OTAUpdateStatus} otaUpdateStatus The OTA update job status.
		 * @return {ListOTAUpdatesResponse} Success
		 */
		ListOTAUpdates(maxResults: number | null | undefined, nextToken: string | null | undefined, otaUpdateStatus: OTAUpdateStatus | null | undefined): Observable<ListOTAUpdatesResponse> {
			return this.http.get<ListOTAUpdatesResponse>(this.baseUri + 'otaUpdates?maxResults=' + maxResults + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&otaUpdateStatus=' + otaUpdateStatus, {});
		}

		/**
		 * <p>Lists certificates that are being transferred but not yet accepted.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ListOutgoingCertificates</a> action.</p>
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
		 * <p>Lists the software package versions associated to the account.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ListPackageVersions</a> action.</p>
		 * Get packages/{packageName}/versions
		 * @param {string} packageName The name of the target package.
		 * @param {PackageVersionStatus} status The status of the package version. For more information, see <a href="https://docs.aws.amazon.com/iot/latest/developerguide/preparing-to-use-software-package-catalog.html#package-version-lifecycle">Package version lifecycle</a>.
		 * @param {number} maxResults The maximum number of results to return at one time.
		 * @param {string} nextToken The token for the next set of results.
		 * @return {ListPackageVersionsResponse} Success
		 */
		ListPackageVersions(packageName: string, status: PackageVersionStatus | null | undefined, maxResults: number | null | undefined, nextToken: string | null | undefined): Observable<ListPackageVersionsResponse> {
			return this.http.get<ListPackageVersionsResponse>(this.baseUri + 'packages/' + (packageName == null ? '' : encodeURIComponent(packageName)) + '/versions&status=' + status + '&maxResults=' + maxResults + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), {});
		}

		/**
		 * <p>Lists the software packages associated to the account.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ListPackages</a> action.</p>
		 * Get packages
		 * @param {number} maxResults The maximum number of results returned at one time.
		 * @param {string} nextToken The token for the next set of results.
		 * @return {ListPackagesResponse} Success
		 */
		ListPackages(maxResults: number | null | undefined, nextToken: string | null | undefined): Observable<ListPackagesResponse> {
			return this.http.get<ListPackagesResponse>(this.baseUri + 'packages?maxResults=' + maxResults + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), {});
		}

		/**
		 * <p>Lists your policies.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ListPolicies</a> action.</p>
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
		 * <p>Lists the principals associated with the specified policy.</p> <p> <b>Note:</b> This action is deprecated and works as expected for backward compatibility, but we won't add enhancements. Use <a>ListTargetsForPolicy</a> instead.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ListPolicyPrincipals</a> action.</p>
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
		 * <p>Lists the policies attached to the specified principal. If you use an Cognito identity, the ID must be in <a href="https://docs.aws.amazon.com/cognitoidentity/latest/APIReference/API_GetCredentialsForIdentity.html#API_GetCredentialsForIdentity_RequestSyntax">AmazonCognito Identity format</a>.</p> <p> <b>Note:</b> This action is deprecated and works as expected for backward compatibility, but we won't add enhancements. Use <a>ListAttachedPolicies</a> instead.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ListPrincipalPolicies</a> action.</p>
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
		 * <p>Lists the things associated with the specified principal. A principal can be X.509 certificates, IAM users, groups, and roles, Amazon Cognito identities or federated identities. </p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ListPrincipalThings</a> action.</p>
		 * Get principals/things#x-amzn-principal
		 * @param {string} nextToken To retrieve the next set of results, the <code>nextToken</code> value from a previous response; otherwise <b>null</b> to receive the first set of results.
		 * @param {number} maxResults The maximum number of results to return in this operation.
		 * @return {ListPrincipalThingsResponse} Success
		 */
		ListPrincipalThings(nextToken: string | null | undefined, maxResults: number | null | undefined): Observable<ListPrincipalThingsResponse> {
			return this.http.get<ListPrincipalThingsResponse>(this.baseUri + 'principals/things#x-amzn-principal?nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&maxResults=' + maxResults, {});
		}

		/**
		 * <p>The related resources of an Audit finding. The following resources can be returned from calling this API:</p> <ul> <li> <p>DEVICE_CERTIFICATE</p> </li> <li> <p>CA_CERTIFICATE</p> </li> <li> <p>IOT_POLICY</p> </li> <li> <p>COGNITO_IDENTITY_POOL</p> </li> <li> <p>CLIENT_ID</p> </li> <li> <p>ACCOUNT_SETTINGS</p> </li> <li> <p>ROLE_ALIAS</p> </li> <li> <p>IAM_ROLE</p> </li> <li> <p>ISSUER_CERTIFICATE</p> </li> </ul> <note> <p>This API is similar to DescribeAuditFinding's <a href="https://docs.aws.amazon.com/iot/latest/apireference/API_DescribeAuditFinding.html">RelatedResources</a> but provides pagination and is not limited to 10 resources. When calling <a href="https://docs.aws.amazon.com/iot/latest/apireference/API_DescribeAuditFinding.html">DescribeAuditFinding</a> for the intermediate CA revoked for active device certificates check, RelatedResources will not be populated. You must use this API, ListRelatedResourcesForAuditFinding, to list the certificates.</p> </note>
		 * Get audit/relatedResources#findingId
		 * @param {string} findingId The finding Id.
		 * @param {string} nextToken A token that can be used to retrieve the next set of results, or <code>null</code> if there are no additional results.
		 * @param {number} maxResults The maximum number of results to return at one time.
		 * @return {ListRelatedResourcesForAuditFindingResponse} Success
		 */
		ListRelatedResourcesForAuditFinding(findingId: string, nextToken: string | null | undefined, maxResults: number | null | undefined): Observable<ListRelatedResourcesForAuditFindingResponse> {
			return this.http.get<ListRelatedResourcesForAuditFindingResponse>(this.baseUri + 'audit/relatedResources#findingId?findingId=' + (findingId == null ? '' : encodeURIComponent(findingId)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&maxResults=' + maxResults, {});
		}

		/**
		 * <p>Lists the role aliases registered in your account.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ListRoleAliases</a> action.</p>
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
		 * <p>Lists all of your scheduled audits.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ListScheduledAudits</a> action.</p>
		 * Get audit/scheduledaudits
		 * @param {string} nextToken The token for the next set of results.
		 * @param {number} maxResults The maximum number of results to return at one time. The default is 25.
		 * @return {ListScheduledAuditsResponse} Success
		 */
		ListScheduledAudits(nextToken: string | null | undefined, maxResults: number | null | undefined): Observable<ListScheduledAuditsResponse> {
			return this.http.get<ListScheduledAuditsResponse>(this.baseUri + 'audit/scheduledaudits?nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&maxResults=' + maxResults, {});
		}

		/**
		 * <p>Lists the Device Defender security profiles you've created. You can filter security profiles by dimension or custom metric.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ListSecurityProfiles</a> action.</p> <note> <p> <code>dimensionName</code> and <code>metricName</code> cannot be used in the same request.</p> </note>
		 * Get security-profiles
		 * @param {string} nextToken The token for the next set of results.
		 * @param {number} maxResults The maximum number of results to return at one time.
		 * @param {string} dimensionName A filter to limit results to the security profiles that use the defined dimension. Cannot be used with <code>metricName</code> 
		 * @param {string} metricName  The name of the custom metric. Cannot be used with <code>dimensionName</code>. 
		 * @return {ListSecurityProfilesResponse} Success
		 */
		ListSecurityProfiles(nextToken: string | null | undefined, maxResults: number | null | undefined, dimensionName: string | null | undefined, metricName: string | null | undefined): Observable<ListSecurityProfilesResponse> {
			return this.http.get<ListSecurityProfilesResponse>(this.baseUri + 'security-profiles?nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&maxResults=' + maxResults + '&dimensionName=' + (dimensionName == null ? '' : encodeURIComponent(dimensionName)) + '&metricName=' + (metricName == null ? '' : encodeURIComponent(metricName)), {});
		}

		/**
		 * <p>Lists the Device Defender security profiles attached to a target (thing group).</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ListSecurityProfilesForTarget</a> action.</p>
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
		 * <p>Lists all of the streams in your Amazon Web Services account.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ListStreams</a> action.</p>
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
		 * <p>Lists the tags (metadata) you have assigned to the resource.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ListTagsForResource</a> action.</p>
		 * Get tags#resourceArn
		 * @param {string} resourceArn The ARN of the resource.
		 * @param {string} nextToken To retrieve the next set of results, the <code>nextToken</code> value from a previous response; otherwise <b>null</b> to receive the first set of results.
		 * @return {ListTagsForResourceResponse} Success
		 */
		ListTagsForResource(resourceArn: string, nextToken: string | null | undefined): Observable<ListTagsForResourceResponse> {
			return this.http.get<ListTagsForResourceResponse>(this.baseUri + 'tags#resourceArn?resourceArn=' + (resourceArn == null ? '' : encodeURIComponent(resourceArn)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), {});
		}

		/**
		 * <p>List targets for the specified policy.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ListTargetsForPolicy</a> action.</p>
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
		 * <p>Lists the targets (thing groups) associated with a given Device Defender security profile.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ListTargetsForSecurityProfile</a> action.</p>
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
		 * <p>List the thing groups in your account.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ListThingGroups</a> action.</p>
		 * Get thing-groups
		 * @param {string} nextToken To retrieve the next set of results, the <code>nextToken</code> value from a previous response; otherwise <b>null</b> to receive the first set of results.
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
		 * <p>List the thing groups to which the specified thing belongs.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ListThingGroupsForThing</a> action.</p>
		 * Get things/{thingName}/thing-groups
		 * @param {string} thingName The thing name.
		 * @param {string} nextToken To retrieve the next set of results, the <code>nextToken</code> value from a previous response; otherwise <b>null</b> to receive the first set of results.
		 * @param {number} maxResults The maximum number of results to return at one time.
		 * @return {ListThingGroupsForThingResponse} Success
		 */
		ListThingGroupsForThing(thingName: string, nextToken: string | null | undefined, maxResults: number | null | undefined): Observable<ListThingGroupsForThingResponse> {
			return this.http.get<ListThingGroupsForThingResponse>(this.baseUri + 'things/' + (thingName == null ? '' : encodeURIComponent(thingName)) + '/thing-groups&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&maxResults=' + maxResults, {});
		}

		/**
		 * <p>Lists the principals associated with the specified thing. A principal can be X.509 certificates, IAM users, groups, and roles, Amazon Cognito identities or federated identities.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ListThingPrincipals</a> action.</p>
		 * Get things/{thingName}/principals
		 * @param {string} nextToken To retrieve the next set of results, the <code>nextToken</code> value from a previous response; otherwise <b>null</b> to receive the first set of results.
		 * @param {number} maxResults The maximum number of results to return in this operation.
		 * @param {string} thingName The name of the thing.
		 * @return {ListThingPrincipalsResponse} Success
		 */
		ListThingPrincipals(nextToken: string | null | undefined, maxResults: number | null | undefined, thingName: string): Observable<ListThingPrincipalsResponse> {
			return this.http.get<ListThingPrincipalsResponse>(this.baseUri + 'things/' + (thingName == null ? '' : encodeURIComponent(thingName)) + '/principals?nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&maxResults=' + maxResults, {});
		}

		/**
		 * Information about the thing registration tasks.
		 * Get thing-registration-tasks/{taskId}/reports#reportType
		 * @param {string} taskId The id of the task.
		 * @param {ReportType} reportType The type of task report.
		 * @param {string} nextToken To retrieve the next set of results, the <code>nextToken</code> value from a previous response; otherwise <b>null</b> to receive the first set of results.
		 * @param {number} maxResults The maximum number of results to return per request.
		 * @return {ListThingRegistrationTaskReportsResponse} Success
		 */
		ListThingRegistrationTaskReports(taskId: string, reportType: ReportType, nextToken: string | null | undefined, maxResults: number | null | undefined): Observable<ListThingRegistrationTaskReportsResponse> {
			return this.http.get<ListThingRegistrationTaskReportsResponse>(this.baseUri + 'thing-registration-tasks/' + (taskId == null ? '' : encodeURIComponent(taskId)) + '/reports#reportType&reportType=' + reportType + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&maxResults=' + maxResults, {});
		}

		/**
		 * <p>List bulk thing provisioning tasks.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ListThingRegistrationTasks</a> action.</p>
		 * Get thing-registration-tasks
		 * @param {string} nextToken To retrieve the next set of results, the <code>nextToken</code> value from a previous response; otherwise <b>null</b> to receive the first set of results.
		 * @param {number} maxResults The maximum number of results to return at one time.
		 * @param {Status} status The status of the bulk thing provisioning task.
		 * @return {ListThingRegistrationTasksResponse} Success
		 */
		ListThingRegistrationTasks(nextToken: string | null | undefined, maxResults: number | null | undefined, status: Status | null | undefined): Observable<ListThingRegistrationTasksResponse> {
			return this.http.get<ListThingRegistrationTasksResponse>(this.baseUri + 'thing-registration-tasks?nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&maxResults=' + maxResults + '&status=' + status, {});
		}

		/**
		 * <p>Creates a bulk thing provisioning task.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">StartThingRegistrationTask</a> action.</p>
		 * Post thing-registration-tasks
		 * @return {StartThingRegistrationTaskResponse} Success
		 */
		StartThingRegistrationTask(requestBody: StartThingRegistrationTaskPostBody): Observable<StartThingRegistrationTaskResponse> {
			return this.http.post<StartThingRegistrationTaskResponse>(this.baseUri + 'thing-registration-tasks', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Lists the existing thing types.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ListThingTypes</a> action.</p>
		 * Get thing-types
		 * @param {string} nextToken To retrieve the next set of results, the <code>nextToken</code> value from a previous response; otherwise <b>null</b> to receive the first set of results.
		 * @param {number} maxResults The maximum number of results to return in this operation.
		 * @param {string} thingTypeName The name of the thing type.
		 * @return {ListThingTypesResponse} Success
		 */
		ListThingTypes(nextToken: string | null | undefined, maxResults: number | null | undefined, thingTypeName: string | null | undefined): Observable<ListThingTypesResponse> {
			return this.http.get<ListThingTypesResponse>(this.baseUri + 'thing-types?nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&maxResults=' + maxResults + '&thingTypeName=' + (thingTypeName == null ? '' : encodeURIComponent(thingTypeName)), {});
		}

		/**
		 * <p>Lists your things. Use the <b>attributeName</b> and <b>attributeValue</b> parameters to filter your things. For example, calling <code>ListThings</code> with attributeName=Color and attributeValue=Red retrieves all things in the registry that contain an attribute <b>Color</b> with the value <b>Red</b>. For more information, see <a href="https://docs.aws.amazon.com/iot/latest/developerguide/thing-registry.html#list-things">List Things</a> from the <i>Amazon Web Services IoT Core Developer Guide</i>.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ListThings</a> action.</p> <note> <p>You will not be charged for calling this API if an <code>Access denied</code> error is returned. You will also not be charged if no attributes or pagination token was provided in request and no pagination token and no results were returned.</p> </note>
		 * Get things
		 * @param {string} nextToken To retrieve the next set of results, the <code>nextToken</code> value from a previous response; otherwise <b>null</b> to receive the first set of results.
		 * @param {number} maxResults The maximum number of results to return in this operation.
		 * @param {string} attributeName The attribute name used to search for things.
		 * @param {string} attributeValue The attribute value used to search for things.
		 * @param {string} thingTypeName The name of the thing type used to search for things.
		 * @param {boolean} usePrefixAttributeValue <p>When <code>true</code>, the action returns the thing resources with attribute values that start with the <code>attributeValue</code> provided.</p> <p>When <code>false</code>, or not present, the action returns only the thing resources with attribute values that match the entire <code>attributeValue</code> provided. </p>
		 * @return {ListThingsResponse} Success
		 */
		ListThings(nextToken: string | null | undefined, maxResults: number | null | undefined, attributeName: string | null | undefined, attributeValue: string | null | undefined, thingTypeName: string | null | undefined, usePrefixAttributeValue: boolean | null | undefined): Observable<ListThingsResponse> {
			return this.http.get<ListThingsResponse>(this.baseUri + 'things?nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&maxResults=' + maxResults + '&attributeName=' + (attributeName == null ? '' : encodeURIComponent(attributeName)) + '&attributeValue=' + (attributeValue == null ? '' : encodeURIComponent(attributeValue)) + '&thingTypeName=' + (thingTypeName == null ? '' : encodeURIComponent(thingTypeName)) + '&usePrefixAttributeValue=' + usePrefixAttributeValue, {});
		}

		/**
		 * <p>Provisions a thing in the device registry. RegisterThing calls other IoT control plane APIs. These calls might exceed your account level <a href="https://docs.aws.amazon.com/general/latest/gr/aws_service_limits.html#limits_iot"> IoT Throttling Limits</a> and cause throttle errors. Please contact <a href="https://console.aws.amazon.com/support/home">Amazon Web Services Customer Support</a> to raise your throttling limits if necessary.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">RegisterThing</a> action.</p>
		 * Post things
		 * @return {RegisterThingResponse} Success
		 */
		RegisterThing(requestBody: RegisterThingPostBody): Observable<RegisterThingResponse> {
			return this.http.post<RegisterThingResponse>(this.baseUri + 'things', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Lists the things you have added to the given billing group.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ListThingsInBillingGroup</a> action.</p>
		 * Get billing-groups/{billingGroupName}/things
		 * @param {string} billingGroupName The name of the billing group.
		 * @param {string} nextToken To retrieve the next set of results, the <code>nextToken</code> value from a previous response; otherwise <b>null</b> to receive the first set of results.
		 * @param {number} maxResults The maximum number of results to return per request.
		 * @return {ListThingsInBillingGroupResponse} Success
		 */
		ListThingsInBillingGroup(billingGroupName: string, nextToken: string | null | undefined, maxResults: number | null | undefined): Observable<ListThingsInBillingGroupResponse> {
			return this.http.get<ListThingsInBillingGroupResponse>(this.baseUri + 'billing-groups/' + (billingGroupName == null ? '' : encodeURIComponent(billingGroupName)) + '/things&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&maxResults=' + maxResults, {});
		}

		/**
		 * <p>Lists the things in the specified group.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ListThingsInThingGroup</a> action.</p>
		 * Get thing-groups/{thingGroupName}/things
		 * @param {string} thingGroupName The thing group name.
		 * @param {boolean} recursive When true, list things in this thing group and in all child groups as well.
		 * @param {string} nextToken To retrieve the next set of results, the <code>nextToken</code> value from a previous response; otherwise <b>null</b> to receive the first set of results.
		 * @param {number} maxResults The maximum number of results to return at one time.
		 * @return {ListThingsInThingGroupResponse} Success
		 */
		ListThingsInThingGroup(thingGroupName: string, recursive: boolean | null | undefined, nextToken: string | null | undefined, maxResults: number | null | undefined): Observable<ListThingsInThingGroupResponse> {
			return this.http.get<ListThingsInThingGroupResponse>(this.baseUri + 'thing-groups/' + (thingGroupName == null ? '' : encodeURIComponent(thingGroupName)) + '/things&recursive=' + recursive + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&maxResults=' + maxResults, {});
		}

		/**
		 * <p>Lists the rules for the specific topic.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ListTopicRules</a> action.</p>
		 * Get rules
		 * @param {string} topic The topic.
		 * @param {number} maxResults The maximum number of results to return.
		 * @param {string} nextToken To retrieve the next set of results, the <code>nextToken</code> value from a previous response; otherwise <b>null</b> to receive the first set of results.
		 * @param {boolean} ruleDisabled Specifies whether the rule is disabled.
		 * @return {ListTopicRulesResponse} Success
		 */
		ListTopicRules(topic: string | null | undefined, maxResults: number | null | undefined, nextToken: string | null | undefined, ruleDisabled: boolean | null | undefined): Observable<ListTopicRulesResponse> {
			return this.http.get<ListTopicRulesResponse>(this.baseUri + 'rules?topic=' + (topic == null ? '' : encodeURIComponent(topic)) + '&maxResults=' + maxResults + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&ruleDisabled=' + ruleDisabled, {});
		}

		/**
		 * <p>Lists logging levels.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ListV2LoggingLevels</a> action.</p>
		 * Get v2LoggingLevel
		 * @param {LogTargetType} targetType The type of resource for which you are configuring logging. Must be <code>THING_Group</code>.
		 * @param {string} nextToken To retrieve the next set of results, the <code>nextToken</code> value from a previous response; otherwise <b>null</b> to receive the first set of results.
		 * @param {number} maxResults The maximum number of results to return at one time.
		 * @return {ListV2LoggingLevelsResponse} Success
		 */
		ListV2LoggingLevels(targetType: LogTargetType | null | undefined, nextToken: string | null | undefined, maxResults: number | null | undefined): Observable<ListV2LoggingLevelsResponse> {
			return this.http.get<ListV2LoggingLevelsResponse>(this.baseUri + 'v2LoggingLevel?targetType=' + targetType + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&maxResults=' + maxResults, {});
		}

		/**
		 * <p>Sets the logging level.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">SetV2LoggingLevel</a> action.</p>
		 * Post v2LoggingLevel
		 * @return {void} Success
		 */
		SetV2LoggingLevel(requestBody: SetV2LoggingLevelPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v2LoggingLevel', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Lists the Device Defender security profile violations discovered during the given time period. You can use filters to limit the results to those alerts issued for a particular security profile, behavior, or thing (device).</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ListViolationEvents</a> action.</p>
		 * Get violation-events#startTime&endTime
		 * @param {Date} startTime The start time for the alerts to be listed.
		 * @param {Date} endTime The end time for the alerts to be listed.
		 * @param {string} thingName A filter to limit results to those alerts caused by the specified thing.
		 * @param {string} securityProfileName A filter to limit results to those alerts generated by the specified security profile.
		 * @param {BehaviorCriteriaType} behaviorCriteriaType  The criteria for a behavior. 
		 * @param {boolean} listSuppressedAlerts  A list of all suppressed alerts. 
		 * @param {VerificationState} verificationState The verification state of the violation (detect alarm).
		 * @param {string} nextToken The token for the next set of results.
		 * @param {number} maxResults The maximum number of results to return at one time.
		 * @return {ListViolationEventsResponse} Success
		 */
		ListViolationEvents(startTime: Date, endTime: Date, thingName: string | null | undefined, securityProfileName: string | null | undefined, behaviorCriteriaType: BehaviorCriteriaType | null | undefined, listSuppressedAlerts: boolean | null | undefined, verificationState: VerificationState | null | undefined, nextToken: string | null | undefined, maxResults: number | null | undefined): Observable<ListViolationEventsResponse> {
			return this.http.get<ListViolationEventsResponse>(this.baseUri + 'violation-events#startTime&endTime?startTime=' + startTime.toISOString() + '&endTime=' + endTime.toISOString() + '&thingName=' + (thingName == null ? '' : encodeURIComponent(thingName)) + '&securityProfileName=' + (securityProfileName == null ? '' : encodeURIComponent(securityProfileName)) + '&behaviorCriteriaType=' + behaviorCriteriaType + '&listSuppressedAlerts=' + listSuppressedAlerts + '&verificationState=' + verificationState + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&maxResults=' + maxResults, {});
		}

		/**
		 * Set a verification state and provide a description of that verification state on a violation (detect alarm).
		 * Post violations/verification-state/{violationId}
		 * @param {string} violationId The violation ID.
		 * @return {PutVerificationStateOnViolationResponse} Success
		 */
		PutVerificationStateOnViolation(violationId: string, requestBody: PutVerificationStateOnViolationPostBody): Observable<PutVerificationStateOnViolationResponse> {
			return this.http.post<PutVerificationStateOnViolationResponse>(this.baseUri + 'violations/verification-state/' + (violationId == null ? '' : encodeURIComponent(violationId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Registers a CA certificate with Amazon Web Services IoT Core. There is no limit to the number of CA certificates you can register in your Amazon Web Services account. You can register up to 10 CA certificates with the same <code>CA subject field</code> per Amazon Web Services account.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">RegisterCACertificate</a> action.</p>
		 * Post cacertificate
		 * @param {boolean} setAsActive <p>A boolean value that specifies if the CA certificate is set to active.</p> <p>Valid values: <code>ACTIVE | INACTIVE</code> </p>
		 * @param {boolean} allowAutoRegistration Allows this CA certificate to be used for auto registration of device certificates.
		 * @return {RegisterCACertificateResponse} Success
		 */
		RegisterCACertificate(setAsActive: boolean | null | undefined, allowAutoRegistration: boolean | null | undefined, requestBody: RegisterCACertificatePostBody): Observable<RegisterCACertificateResponse> {
			return this.http.post<RegisterCACertificateResponse>(this.baseUri + 'cacertificate?setAsActive=' + setAsActive + '&allowAutoRegistration=' + allowAutoRegistration, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Registers a device certificate with IoT in the same <a href="https://docs.aws.amazon.com/iot/latest/apireference/API_CertificateDescription.html#iot-Type-CertificateDescription-certificateMode">certificate mode</a> as the signing CA. If you have more than one CA certificate that has the same subject field, you must specify the CA certificate that was used to sign the device certificate being registered.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">RegisterCertificate</a> action.</p>
		 * Post certificate/register
		 * @param {boolean} setAsActive <p>A boolean value that specifies if the certificate is set to active.</p> <p>Valid values: <code>ACTIVE | INACTIVE</code> </p>
		 * @return {RegisterCertificateResponse} Success
		 */
		RegisterCertificate(setAsActive: boolean | null | undefined, requestBody: RegisterCertificatePostBody): Observable<RegisterCertificateResponse> {
			return this.http.post<RegisterCertificateResponse>(this.baseUri + 'certificate/register?setAsActive=' + setAsActive, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Register a certificate that does not have a certificate authority (CA). For supported certificates, consult <a href="https://docs.aws.amazon.com/iot/latest/developerguide/x509-client-certs.html#x509-cert-algorithms"> Certificate signing algorithms supported by IoT</a>.
		 * Post certificate/register-no-ca
		 * @return {RegisterCertificateWithoutCAResponse} Success
		 */
		RegisterCertificateWithoutCA(requestBody: RegisterCertificateWithoutCAPostBody): Observable<RegisterCertificateWithoutCAResponse> {
			return this.http.post<RegisterCertificateWithoutCAResponse>(this.baseUri + 'certificate/register-no-ca', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Rejects a pending certificate transfer. After IoT rejects a certificate transfer, the certificate status changes from <b>PENDING_TRANSFER</b> to <b>INACTIVE</b>.</p> <p>To check for pending certificate transfers, call <a>ListCertificates</a> to enumerate your certificates.</p> <p>This operation can only be called by the transfer destination. After it is called, the certificate will be returned to the source's account in the INACTIVE state.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">RejectCertificateTransfer</a> action.</p>
		 * Patch reject-certificate-transfer/{certificateId}
		 * @param {string} certificateId The ID of the certificate. (The last part of the certificate ARN contains the certificate ID.)
		 * @return {void} Success
		 */
		RejectCertificateTransfer(certificateId: string, requestBody: RejectCertificateTransferPatchBody): Observable<HttpResponse<string>> {
			return this.http.patch(this.baseUri + 'reject-certificate-transfer/' + (certificateId == null ? '' : encodeURIComponent(certificateId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Removes the given thing from the billing group.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">RemoveThingFromBillingGroup</a> action.</p> <note> <p>This call is asynchronous. It might take several seconds for the detachment to propagate.</p> </note>
		 * Put billing-groups/removeThingFromBillingGroup
		 * @return {RemoveThingFromBillingGroupResponse} Success
		 */
		RemoveThingFromBillingGroup(requestBody: RemoveThingFromBillingGroupPutBody): Observable<RemoveThingFromBillingGroupResponse> {
			return this.http.put<RemoveThingFromBillingGroupResponse>(this.baseUri + 'billing-groups/removeThingFromBillingGroup', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Remove the specified thing from the specified group.</p> <p>You must specify either a <code>thingGroupArn</code> or a <code>thingGroupName</code> to identify the thing group and either a <code>thingArn</code> or a <code>thingName</code> to identify the thing to remove from the thing group. </p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">RemoveThingFromThingGroup</a> action.</p>
		 * Put thing-groups/removeThingFromThingGroup
		 * @return {RemoveThingFromThingGroupResponse} Success
		 */
		RemoveThingFromThingGroup(requestBody: RemoveThingFromThingGroupPutBody): Observable<RemoveThingFromThingGroupResponse> {
			return this.http.put<RemoveThingFromThingGroupResponse>(this.baseUri + 'thing-groups/removeThingFromThingGroup', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>The query search index.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">SearchIndex</a> action.</p>
		 * Post indices/search
		 * @return {SearchIndexResponse} Success
		 */
		SearchIndex(requestBody: SearchIndexPostBody): Observable<SearchIndexResponse> {
			return this.http.post<SearchIndexResponse>(this.baseUri + 'indices/search', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Starts an on-demand Device Defender audit.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">StartOnDemandAuditTask</a> action.</p>
		 * Post audit/tasks
		 * @return {StartOnDemandAuditTaskResponse} Success
		 */
		StartOnDemandAuditTask(requestBody: StartOnDemandAuditTaskPostBody): Observable<StartOnDemandAuditTaskResponse> {
			return this.http.post<StartOnDemandAuditTaskResponse>(this.baseUri + 'audit/tasks', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Cancels a bulk thing provisioning task.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">StopThingRegistrationTask</a> action.</p>
		 * Put thing-registration-tasks/{taskId}/cancel
		 * @param {string} taskId The bulk thing provisioning task ID.
		 * @return {StopThingRegistrationTaskResponse} Success
		 */
		StopThingRegistrationTask(taskId: string): Observable<StopThingRegistrationTaskResponse> {
			return this.http.put<StopThingRegistrationTaskResponse>(this.baseUri + 'thing-registration-tasks/' + (taskId == null ? '' : encodeURIComponent(taskId)) + '/cancel', null, {});
		}

		/**
		 * <p>Adds to or modifies the tags of the given resource. Tags are metadata which can be used to manage a resource.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">TagResource</a> action.</p>
		 * Post tags
		 * @return {TagResourceResponse} Success
		 */
		TagResource(requestBody: TagResourcePostBody): Observable<TagResourceResponse> {
			return this.http.post<TagResourceResponse>(this.baseUri + 'tags', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Tests if a specified principal is authorized to perform an IoT action on a specified resource. Use this to test and debug the authorization behavior of devices that connect to the IoT device gateway.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">TestAuthorization</a> action.</p>
		 * Post test-authorization
		 * @param {string} clientId The MQTT client ID.
		 * @return {TestAuthorizationResponse} Success
		 */
		TestAuthorization(clientId: string | null | undefined, requestBody: TestAuthorizationPostBody): Observable<TestAuthorizationResponse> {
			return this.http.post<TestAuthorizationResponse>(this.baseUri + 'test-authorization?clientId=' + (clientId == null ? '' : encodeURIComponent(clientId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Tests a custom authorization behavior by invoking a specified custom authorizer. Use this to test and debug the custom authorization behavior of devices that connect to the IoT device gateway.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">TestInvokeAuthorizer</a> action.</p>
		 * Post authorizer/{authorizerName}/test
		 * @param {string} authorizerName The custom authorizer name.
		 * @return {TestInvokeAuthorizerResponse} Success
		 */
		TestInvokeAuthorizer(authorizerName: string, requestBody: TestInvokeAuthorizerPostBody): Observable<TestInvokeAuthorizerResponse> {
			return this.http.post<TestInvokeAuthorizerResponse>(this.baseUri + 'authorizer/' + (authorizerName == null ? '' : encodeURIComponent(authorizerName)) + '/test', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Transfers the specified certificate to the specified Amazon Web Services account.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">TransferCertificate</a> action.</p> <p>You can cancel the transfer until it is acknowledged by the recipient.</p> <p>No notification is sent to the transfer destination's account. It is up to the caller to notify the transfer target.</p> <p>The certificate being transferred must not be in the ACTIVE state. You can use the <a>UpdateCertificate</a> action to deactivate it.</p> <p>The certificate must not have any policies attached to it. You can use the <a>DetachPolicy</a> action to detach them.</p>
		 * Patch transfer-certificate/{certificateId}#targetAwsAccount
		 * @param {string} certificateId The ID of the certificate. (The last part of the certificate ARN contains the certificate ID.)
		 * @param {string} targetAwsAccount The Amazon Web Services account.
		 * @return {TransferCertificateResponse} Success
		 */
		TransferCertificate(certificateId: string, targetAwsAccount: string, requestBody: TransferCertificatePatchBody): Observable<TransferCertificateResponse> {
			return this.http.patch<TransferCertificateResponse>(this.baseUri + 'transfer-certificate/' + (certificateId == null ? '' : encodeURIComponent(certificateId)) + '#targetAwsAccount&targetAwsAccount=' + (targetAwsAccount == null ? '' : encodeURIComponent(targetAwsAccount)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Removes the given tags (metadata) from the resource.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">UntagResource</a> action.</p>
		 * Post untag
		 * @return {UntagResourceResponse} Success
		 */
		UntagResource(requestBody: UntagResourcePostBody): Observable<UntagResourceResponse> {
			return this.http.post<UntagResourceResponse>(this.baseUri + 'untag', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Updates a Device Defender audit suppression.
		 * Patch audit/suppressions/update
		 * @return {UpdateAuditSuppressionResponse} Success
		 */
		UpdateAuditSuppression(requestBody: UpdateAuditSuppressionPatchBody): Observable<UpdateAuditSuppressionResponse> {
			return this.http.patch<UpdateAuditSuppressionResponse>(this.baseUri + 'audit/suppressions/update', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Updates the status of the specified certificate. This operation is idempotent.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">UpdateCertificate</a> action.</p> <p>Certificates must be in the ACTIVE state to authenticate devices that use a certificate to connect to IoT.</p> <p>Within a few minutes of updating a certificate from the ACTIVE state to any other state, IoT disconnects all devices that used that certificate to connect. Devices cannot use a certificate that is not in the ACTIVE state to reconnect.</p>
		 * Put certificates/{certificateId}#newStatus
		 * @param {string} certificateId The ID of the certificate. (The last part of the certificate ARN contains the certificate ID.)
		 * @param {CertificateStatus} newStatus <p>The new status.</p> <p> <b>Note:</b> Setting the status to PENDING_TRANSFER or PENDING_ACTIVATION will result in an exception being thrown. PENDING_TRANSFER and PENDING_ACTIVATION are statuses used internally by IoT. They are not intended for developer use.</p> <p> <b>Note:</b> The status value REGISTER_INACTIVE is deprecated and should not be used.</p>
		 * @return {void} Success
		 */
		UpdateCertificate(certificateId: string, newStatus: CertificateStatus): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'certificates/' + (certificateId == null ? '' : encodeURIComponent(certificateId)) + '#newStatus&newStatus=' + newStatus, null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Updates the groups to which the thing belongs.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">UpdateThingGroupsForThing</a> action.</p>
		 * Put thing-groups/updateThingGroupsForThing
		 * @return {UpdateThingGroupsForThingResponse} Success
		 */
		UpdateThingGroupsForThing(requestBody: UpdateThingGroupsForThingPutBody): Observable<UpdateThingGroupsForThingResponse> {
			return this.http.put<UpdateThingGroupsForThingResponse>(this.baseUri + 'thing-groups/updateThingGroupsForThing', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Validates a Device Defender security profile behaviors specification.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ValidateSecurityProfileBehaviors</a> action.</p>
		 * Post security-profile-behaviors/validate
		 * @return {ValidateSecurityProfileBehaviorsResponse} Success
		 */
		ValidateSecurityProfileBehaviors(requestBody: ValidateSecurityProfileBehaviorsPostBody): Observable<ValidateSecurityProfileBehaviorsResponse> {
			return this.http.post<ValidateSecurityProfileBehaviorsResponse>(this.baseUri + 'security-profile-behaviors/validate', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

	export interface AddThingToBillingGroupPutBody {

		/**
		 * <p>The name of the billing group.</p> <note> <p>This call is asynchronous. It might take several seconds for the detachment to propagate.</p> </note>
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
		 * <p>The name of the billing group.</p> <note> <p>This call is asynchronous. It might take several seconds for the detachment to propagate.</p> </note>
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
		 * The <a href="https://docs.aws.amazon.com/iot/latest/developerguide/security-iam.html">identity</a> to which the policy is attached. For example, a thing group or a certificate.
		 * Required
		 */
		target: string;
	}
	export interface AttachPolicyPutBodyFormProperties {

		/**
		 * The <a href="https://docs.aws.amazon.com/iot/latest/developerguide/security-iam.html">identity</a> to which the policy is attached. For example, a thing group or a certificate.
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

	export interface CreateAuditSuppressionPostBody {

		/**
		 * An audit check name. Checks must be enabled for your account. (Use <code>DescribeAccountAuditConfiguration</code> to see the list of all checks, including those that are enabled or use <code>UpdateAccountAuditConfiguration</code> to select which checks are enabled.)
		 * Required
		 */
		checkName: string;

		/**
		 * Information that identifies the noncompliant resource.
		 * Required
		 */
		resourceIdentifier: CreateAuditSuppressionPostBodyResourceIdentifier;

		/** The epoch timestamp in seconds at which this suppression expires. */
		expirationDate?: Date | null;

		/** Indicates whether a suppression should exist indefinitely or not. */
		suppressIndefinitely?: boolean | null;

		/**
		 * The description of the audit suppression.
		 * Max length: 1000
		 */
		description?: string | null;

		/**
		 * Each audit supression must have a unique client request token. If you try to create a new audit suppression with the same token as one that already exists, an exception occurs. If you omit this value, Amazon Web Services SDKs will automatically generate a unique client request.
		 * Required
		 * Max length: 64
		 * Min length: 1
		 */
		clientRequestToken: string;
	}
	export interface CreateAuditSuppressionPostBodyFormProperties {

		/**
		 * An audit check name. Checks must be enabled for your account. (Use <code>DescribeAccountAuditConfiguration</code> to see the list of all checks, including those that are enabled or use <code>UpdateAccountAuditConfiguration</code> to select which checks are enabled.)
		 * Required
		 */
		checkName: FormControl<string | null | undefined>,

		/** The epoch timestamp in seconds at which this suppression expires. */
		expirationDate: FormControl<Date | null | undefined>,

		/** Indicates whether a suppression should exist indefinitely or not. */
		suppressIndefinitely: FormControl<boolean | null | undefined>,

		/**
		 * The description of the audit suppression.
		 * Max length: 1000
		 */
		description: FormControl<string | null | undefined>,

		/**
		 * Each audit supression must have a unique client request token. If you try to create a new audit suppression with the same token as one that already exists, an exception occurs. If you omit this value, Amazon Web Services SDKs will automatically generate a unique client request.
		 * Required
		 * Max length: 64
		 * Min length: 1
		 */
		clientRequestToken: FormControl<string | null | undefined>,
	}
	export function CreateCreateAuditSuppressionPostBodyFormGroup() {
		return new FormGroup<CreateAuditSuppressionPostBodyFormProperties>({
			checkName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			expirationDate: new FormControl<Date | null | undefined>(undefined),
			suppressIndefinitely: new FormControl<boolean | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(1000), Validators.pattern('[\p{Graph}\x20]*')]),
			clientRequestToken: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(64), Validators.pattern('^[a-zA-Z0-9-_]+$')]),
		});

	}

	export interface CreateAuditSuppressionPostBodyResourceIdentifier {
		deviceCertificateId?: string;
		caCertificateId?: string;
		cognitoIdentityPoolId?: string;
		clientId?: string;
		policyVersionIdentifier?: PolicyVersionIdentifier;
		account?: string;
		iamRoleArn?: string;
		roleAliasArn?: string;
		issuerCertificateIdentifier?: IssuerCertificateIdentifier;
		deviceCertificateArn?: string;
	}
	export interface CreateAuditSuppressionPostBodyResourceIdentifierFormProperties {
		deviceCertificateId: FormControl<string | null | undefined>,
		caCertificateId: FormControl<string | null | undefined>,
		cognitoIdentityPoolId: FormControl<string | null | undefined>,
		clientId: FormControl<string | null | undefined>,
		account: FormControl<string | null | undefined>,
		iamRoleArn: FormControl<string | null | undefined>,
		roleAliasArn: FormControl<string | null | undefined>,
		deviceCertificateArn: FormControl<string | null | undefined>,
	}
	export function CreateCreateAuditSuppressionPostBodyResourceIdentifierFormGroup() {
		return new FormGroup<CreateAuditSuppressionPostBodyResourceIdentifierFormProperties>({
			deviceCertificateId: new FormControl<string | null | undefined>(undefined),
			caCertificateId: new FormControl<string | null | undefined>(undefined),
			cognitoIdentityPoolId: new FormControl<string | null | undefined>(undefined),
			clientId: new FormControl<string | null | undefined>(undefined),
			account: new FormControl<string | null | undefined>(undefined),
			iamRoleArn: new FormControl<string | null | undefined>(undefined),
			roleAliasArn: new FormControl<string | null | undefined>(undefined),
			deviceCertificateArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateAuthorizerPostBody {

		/**
		 * The ARN of the authorizer's Lambda function.
		 * Required
		 * Max length: 2048
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
		status?: AuthorizerStatus | null;

		/** <p>Metadata which can be used to manage the custom authorizer.</p> <note> <p>For URI Request parameters use format: ...key1=value1&amp;key2=value2...</p> <p>For the CLI command-line parameter use format: &amp;&amp;tags "key1=value1&amp;key2=value2..."</p> <p>For the cli-input-json file use format: "tags": "key1=value1&amp;key2=value2..."</p> </note> */
		tags?: Array<Tag>;

		/** Specifies whether IoT validates the token signature in an authorization request. */
		signingDisabled?: boolean | null;

		/** <p>When <code>true</code>, the result from the authorizer’s Lambda function is cached for clients that use persistent HTTP connections. The results are cached for the time specified by the Lambda function in <code>refreshAfterInSeconds</code>. This value does not affect authorization of clients that use MQTT connections.</p> <p>The default value is <code>false</code>.</p> */
		enableCachingForHttp?: boolean | null;
	}
	export interface CreateAuthorizerPostBodyFormProperties {

		/**
		 * The ARN of the authorizer's Lambda function.
		 * Required
		 * Max length: 2048
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
		status: FormControl<AuthorizerStatus | null | undefined>,

		/** Specifies whether IoT validates the token signature in an authorization request. */
		signingDisabled: FormControl<boolean | null | undefined>,

		/** <p>When <code>true</code>, the result from the authorizer’s Lambda function is cached for clients that use persistent HTTP connections. The results are cached for the time specified by the Lambda function in <code>refreshAfterInSeconds</code>. This value does not affect authorization of clients that use MQTT connections.</p> <p>The default value is <code>false</code>.</p> */
		enableCachingForHttp: FormControl<boolean | null | undefined>,
	}
	export function CreateCreateAuthorizerPostBodyFormGroup() {
		return new FormGroup<CreateAuthorizerPostBodyFormProperties>({
			authorizerFunctionArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(2048), Validators.pattern('[\s\S]*')]),
			tokenKeyName: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(128), Validators.pattern('[a-zA-Z0-9_-]+')]),
			tokenSigningPublicKeys: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			status: new FormControl<AuthorizerStatus | null | undefined>(undefined),
			signingDisabled: new FormControl<boolean | null | undefined>(undefined),
			enableCachingForHttp: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface UpdateAuthorizerPutBody {

		/**
		 * The ARN of the authorizer's Lambda function.
		 * Max length: 2048
		 */
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
		status?: AuthorizerStatus | null;

		/** When <code>true</code>, the result from the authorizer’s Lambda function is cached for the time specified in <code>refreshAfterInSeconds</code>. The cached result is used while the device reuses the same HTTP connection. */
		enableCachingForHttp?: boolean | null;
	}
	export interface UpdateAuthorizerPutBodyFormProperties {

		/**
		 * The ARN of the authorizer's Lambda function.
		 * Max length: 2048
		 */
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
		status: FormControl<AuthorizerStatus | null | undefined>,

		/** When <code>true</code>, the result from the authorizer’s Lambda function is cached for the time specified in <code>refreshAfterInSeconds</code>. The cached result is used while the device reuses the same HTTP connection. */
		enableCachingForHttp: FormControl<boolean | null | undefined>,
	}
	export function CreateUpdateAuthorizerPutBodyFormGroup() {
		return new FormGroup<UpdateAuthorizerPutBodyFormProperties>({
			authorizerFunctionArn: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(2048), Validators.pattern('[\s\S]*')]),
			tokenKeyName: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(128), Validators.pattern('[a-zA-Z0-9_-]+')]),
			tokenSigningPublicKeys: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			status: new FormControl<AuthorizerStatus | null | undefined>(undefined),
			enableCachingForHttp: new FormControl<boolean | null | undefined>(undefined),
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
		billingGroupDescription?: string;
	}
	export interface CreateBillingGroupPostBodyBillingGroupPropertiesFormProperties {
		billingGroupDescription: FormControl<string | null | undefined>,
	}
	export function CreateCreateBillingGroupPostBodyBillingGroupPropertiesFormGroup() {
		return new FormGroup<CreateBillingGroupPostBodyBillingGroupPropertiesFormProperties>({
			billingGroupDescription: new FormControl<string | null | undefined>(undefined),
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
		billingGroupDescription?: string;
	}
	export interface UpdateBillingGroupPatchBodyBillingGroupPropertiesFormProperties {
		billingGroupDescription: FormControl<string | null | undefined>,
	}
	export function CreateUpdateBillingGroupPatchBodyBillingGroupPropertiesFormGroup() {
		return new FormGroup<UpdateBillingGroupPatchBodyBillingGroupPropertiesFormProperties>({
			billingGroupDescription: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateCertificateFromCsrPostBody {

		/**
		 * The certificate signing request (CSR).
		 * Required
		 * Max length: 4096
		 * Min length: 1
		 */
		certificateSigningRequest: string;
	}
	export interface CreateCertificateFromCsrPostBodyFormProperties {

		/**
		 * The certificate signing request (CSR).
		 * Required
		 * Max length: 4096
		 * Min length: 1
		 */
		certificateSigningRequest: FormControl<string | null | undefined>,
	}
	export function CreateCreateCertificateFromCsrPostBodyFormGroup() {
		return new FormGroup<CreateCertificateFromCsrPostBodyFormProperties>({
			certificateSigningRequest: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(4096), Validators.pattern('[\s\S]*')]),
		});

	}

	export interface CreateCustomMetricPostBody {

		/**
		 * The friendly name in the console for the custom metric. This name doesn't have to be unique. Don't use this name as the metric identifier in the device metric report. You can update the friendly name after you define it.
		 * Max length: 128
		 */
		displayName?: string | null;

		/**
		 * <p> The type of the custom metric. </p> <important> <p>The type <code>number</code> only takes a single metric value as an input, but when you submit the metrics value in the DeviceMetrics report, you must pass it as an array with a single value.</p> </important>
		 * Required
		 */
		metricType: CustomMetricType;

		/** Metadata that can be used to manage the custom metric. */
		tags?: Array<Tag>;

		/**
		 * Each custom metric must have a unique client request token. If you try to create a new custom metric that already exists with a different token, an exception occurs. If you omit this value, Amazon Web Services SDKs will automatically generate a unique client request.
		 * Required
		 * Max length: 64
		 * Min length: 1
		 */
		clientRequestToken: string;
	}
	export interface CreateCustomMetricPostBodyFormProperties {

		/**
		 * The friendly name in the console for the custom metric. This name doesn't have to be unique. Don't use this name as the metric identifier in the device metric report. You can update the friendly name after you define it.
		 * Max length: 128
		 */
		displayName: FormControl<string | null | undefined>,

		/**
		 * <p> The type of the custom metric. </p> <important> <p>The type <code>number</code> only takes a single metric value as an input, but when you submit the metrics value in the DeviceMetrics report, you must pass it as an array with a single value.</p> </important>
		 * Required
		 */
		metricType: FormControl<CustomMetricType | null | undefined>,

		/**
		 * Each custom metric must have a unique client request token. If you try to create a new custom metric that already exists with a different token, an exception occurs. If you omit this value, Amazon Web Services SDKs will automatically generate a unique client request.
		 * Required
		 * Max length: 64
		 * Min length: 1
		 */
		clientRequestToken: FormControl<string | null | undefined>,
	}
	export function CreateCreateCustomMetricPostBodyFormGroup() {
		return new FormGroup<CreateCustomMetricPostBodyFormProperties>({
			displayName: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(128), Validators.pattern('[\p{Graph}\x20]*')]),
			metricType: new FormControl<CustomMetricType | null | undefined>(undefined, [Validators.required]),
			clientRequestToken: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(64), Validators.pattern('^[a-zA-Z0-9-_]+$')]),
		});

	}

	export interface UpdateCustomMetricPatchBody {

		/**
		 * Field represents a friendly name in the console for the custom metric, it doesn't have to be unique. Don't use this name as the metric identifier in the device metric report. Can be updated.
		 * Required
		 * Max length: 128
		 */
		displayName: string;
	}
	export interface UpdateCustomMetricPatchBodyFormProperties {

		/**
		 * Field represents a friendly name in the console for the custom metric, it doesn't have to be unique. Don't use this name as the metric identifier in the device metric report. Can be updated.
		 * Required
		 * Max length: 128
		 */
		displayName: FormControl<string | null | undefined>,
	}
	export function CreateUpdateCustomMetricPatchBodyFormGroup() {
		return new FormGroup<UpdateCustomMetricPatchBodyFormProperties>({
			displayName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(128), Validators.pattern('[\p{Graph}\x20]*')]),
		});

	}

	export interface CreateDimensionPostBody {

		/**
		 * Specifies the type of dimension. Supported types: <code>TOPIC_FILTER.</code>
		 * Required
		 */
		type: DimensionType;

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
		 * Each dimension must have a unique client request token. If you try to create a new dimension with the same token as a dimension that already exists, an exception occurs. If you omit this value, Amazon Web Services SDKs will automatically generate a unique client request.
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
		type: FormControl<DimensionType | null | undefined>,

		/**
		 * Each dimension must have a unique client request token. If you try to create a new dimension with the same token as a dimension that already exists, an exception occurs. If you omit this value, Amazon Web Services SDKs will automatically generate a unique client request.
		 * Required
		 * Max length: 64
		 * Min length: 1
		 */
		clientRequestToken: FormControl<string | null | undefined>,
	}
	export function CreateCreateDimensionPostBodyFormGroup() {
		return new FormGroup<CreateDimensionPostBodyFormProperties>({
			type: new FormControl<DimensionType | null | undefined>(undefined, [Validators.required]),
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
		 * The ARNs of the certificates that IoT passes to the device during the TLS handshake. Currently you can specify only one certificate ARN. This value is not required for Amazon Web Services-managed domains.
		 * Minimum items: 0
		 * Maximum items: 1
		 */
		serverCertificateArns?: Array<string>;

		/**
		 * The certificate used to validate the server certificate and prove domain name ownership. This certificate must be signed by a public certificate authority. This value is not required for Amazon Web Services-managed domains.
		 * Max length: 2048
		 * Min length: 1
		 */
		validationCertificateArn?: string | null;

		/** An object that specifies the authorization service for a domain. */
		authorizerConfig?: CreateDomainConfigurationPostBodyAuthorizerConfig;

		/** <p>The type of service delivered by the endpoint.</p> <note> <p>Amazon Web Services IoT Core currently supports only the <code>DATA</code> service type.</p> </note> */
		serviceType?: ServiceType | null;

		/** <p>Metadata which can be used to manage the domain configuration.</p> <note> <p>For URI Request parameters use format: ...key1=value1&amp;key2=value2...</p> <p>For the CLI command-line parameter use format: &amp;&amp;tags "key1=value1&amp;key2=value2..."</p> <p>For the cli-input-json file use format: "tags": "key1=value1&amp;key2=value2..."</p> </note> */
		tags?: Array<Tag>;

		/** An object that specifies the TLS configuration for a domain. */
		tlsConfig?: CreateDomainConfigurationPostBodyTlsConfig;
	}
	export interface CreateDomainConfigurationPostBodyFormProperties {

		/**
		 * The name of the domain.
		 * Max length: 253
		 * Min length: 1
		 */
		domainName: FormControl<string | null | undefined>,

		/**
		 * The certificate used to validate the server certificate and prove domain name ownership. This certificate must be signed by a public certificate authority. This value is not required for Amazon Web Services-managed domains.
		 * Max length: 2048
		 * Min length: 1
		 */
		validationCertificateArn: FormControl<string | null | undefined>,

		/** <p>The type of service delivered by the endpoint.</p> <note> <p>Amazon Web Services IoT Core currently supports only the <code>DATA</code> service type.</p> </note> */
		serviceType: FormControl<ServiceType | null | undefined>,
	}
	export function CreateCreateDomainConfigurationPostBodyFormGroup() {
		return new FormGroup<CreateDomainConfigurationPostBodyFormProperties>({
			domainName: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(253), Validators.pattern('[\s\S]*')]),
			validationCertificateArn: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(2048), Validators.pattern('arn:aws(-cn|-us-gov|-iso-b|-iso)?:acm:[a-z]{2}-(gov-|iso-|isob-)?[a-z]{4,9}-\d{1}:\d{12}:certificate/[a-zA-Z0-9/-]+')]),
			serviceType: new FormControl<ServiceType | null | undefined>(undefined),
		});

	}

	export interface CreateDomainConfigurationPostBodyAuthorizerConfig {
		defaultAuthorizerName?: string;
		allowAuthorizerOverride?: boolean | null;
	}
	export interface CreateDomainConfigurationPostBodyAuthorizerConfigFormProperties {
		defaultAuthorizerName: FormControl<string | null | undefined>,
		allowAuthorizerOverride: FormControl<boolean | null | undefined>,
	}
	export function CreateCreateDomainConfigurationPostBodyAuthorizerConfigFormGroup() {
		return new FormGroup<CreateDomainConfigurationPostBodyAuthorizerConfigFormProperties>({
			defaultAuthorizerName: new FormControl<string | null | undefined>(undefined),
			allowAuthorizerOverride: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface CreateDomainConfigurationPostBodyTlsConfig {
		securityPolicy?: string;
	}
	export interface CreateDomainConfigurationPostBodyTlsConfigFormProperties {
		securityPolicy: FormControl<string | null | undefined>,
	}
	export function CreateCreateDomainConfigurationPostBodyTlsConfigFormGroup() {
		return new FormGroup<CreateDomainConfigurationPostBodyTlsConfigFormProperties>({
			securityPolicy: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateDomainConfigurationPutBody {

		/** An object that specifies the authorization service for a domain. */
		authorizerConfig?: UpdateDomainConfigurationPutBodyAuthorizerConfig;

		/** The status to which the domain configuration should be updated. */
		domainConfigurationStatus?: DomainConfigurationStatus | null;

		/** Removes the authorization configuration from a domain. */
		removeAuthorizerConfig?: boolean | null;

		/** An object that specifies the TLS configuration for a domain. */
		tlsConfig?: UpdateDomainConfigurationPutBodyTlsConfig;
	}
	export interface UpdateDomainConfigurationPutBodyFormProperties {

		/** The status to which the domain configuration should be updated. */
		domainConfigurationStatus: FormControl<DomainConfigurationStatus | null | undefined>,

		/** Removes the authorization configuration from a domain. */
		removeAuthorizerConfig: FormControl<boolean | null | undefined>,
	}
	export function CreateUpdateDomainConfigurationPutBodyFormGroup() {
		return new FormGroup<UpdateDomainConfigurationPutBodyFormProperties>({
			domainConfigurationStatus: new FormControl<DomainConfigurationStatus | null | undefined>(undefined),
			removeAuthorizerConfig: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface UpdateDomainConfigurationPutBodyAuthorizerConfig {
		defaultAuthorizerName?: string;
		allowAuthorizerOverride?: boolean | null;
	}
	export interface UpdateDomainConfigurationPutBodyAuthorizerConfigFormProperties {
		defaultAuthorizerName: FormControl<string | null | undefined>,
		allowAuthorizerOverride: FormControl<boolean | null | undefined>,
	}
	export function CreateUpdateDomainConfigurationPutBodyAuthorizerConfigFormGroup() {
		return new FormGroup<UpdateDomainConfigurationPutBodyAuthorizerConfigFormProperties>({
			defaultAuthorizerName: new FormControl<string | null | undefined>(undefined),
			allowAuthorizerOverride: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface UpdateDomainConfigurationPutBodyTlsConfig {
		securityPolicy?: string;
	}
	export interface UpdateDomainConfigurationPutBodyTlsConfigFormProperties {
		securityPolicy: FormControl<string | null | undefined>,
	}
	export function CreateUpdateDomainConfigurationPutBodyTlsConfigFormGroup() {
		return new FormGroup<UpdateDomainConfigurationPutBodyTlsConfigFormProperties>({
			securityPolicy: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateDynamicThingGroupPostBody {

		/** Thing group properties. */
		thingGroupProperties?: CreateDynamicThingGroupPostBodyThingGroupProperties;

		/**
		 * <p>The dynamic thing group index name.</p> <note> <p>Currently one index is supported: <code>AWS_Things</code>.</p> </note>
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
		 * <p>The dynamic thing group index name.</p> <note> <p>Currently one index is supported: <code>AWS_Things</code>.</p> </note>
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
		thingGroupDescription?: string;
		attributePayload?: AttributePayload;
	}
	export interface CreateDynamicThingGroupPostBodyThingGroupPropertiesFormProperties {
		thingGroupDescription: FormControl<string | null | undefined>,
	}
	export function CreateCreateDynamicThingGroupPostBodyThingGroupPropertiesFormGroup() {
		return new FormGroup<CreateDynamicThingGroupPostBodyThingGroupPropertiesFormProperties>({
			thingGroupDescription: new FormControl<string | null | undefined>(undefined),
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
		 * <p>The dynamic thing group index to update.</p> <note> <p>Currently one index is supported: <code>AWS_Things</code>.</p> </note>
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
		 * <p>The dynamic thing group index to update.</p> <note> <p>Currently one index is supported: <code>AWS_Things</code>.</p> </note>
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
		thingGroupDescription?: string;
		attributePayload?: AttributePayload;
	}
	export interface UpdateDynamicThingGroupPatchBodyThingGroupPropertiesFormProperties {
		thingGroupDescription: FormControl<string | null | undefined>,
	}
	export function CreateUpdateDynamicThingGroupPatchBodyThingGroupPropertiesFormGroup() {
		return new FormGroup<UpdateDynamicThingGroupPatchBodyThingGroupPropertiesFormProperties>({
			thingGroupDescription: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateFleetMetricPutBody {

		/**
		 * The search query string.
		 * Required
		 * Min length: 1
		 */
		queryString: string;

		/**
		 * The type of aggregation queries.
		 * Required
		 */
		aggregationType: CreateFleetMetricPutBodyAggregationType;

		/**
		 * The time in seconds between fleet metric emissions. Range [60(1 min), 86400(1 day)] and must be multiple of 60.
		 * Required
		 * Minimum: 60
		 * Maximum: 86400
		 */
		period: number;

		/**
		 * The field to aggregate.
		 * Required
		 * Min length: 1
		 */
		aggregationField: string;

		/**
		 * The fleet metric description.
		 * Max length: 1024
		 */
		description?: string | null;

		/** The query version. */
		queryVersion?: string | null;

		/**
		 * The name of the index to search.
		 * Max length: 128
		 * Min length: 1
		 */
		indexName?: string | null;

		/** Used to support unit transformation such as milliseconds to seconds. The unit must be supported by <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_MetricDatum.html">CW metric</a>. Default to null. */
		unit?: FleetMetricUnit | null;

		/** Metadata, which can be used to manage the fleet metric. */
		tags?: Array<Tag>;
	}
	export interface CreateFleetMetricPutBodyFormProperties {

		/**
		 * The search query string.
		 * Required
		 * Min length: 1
		 */
		queryString: FormControl<string | null | undefined>,

		/**
		 * The time in seconds between fleet metric emissions. Range [60(1 min), 86400(1 day)] and must be multiple of 60.
		 * Required
		 * Minimum: 60
		 * Maximum: 86400
		 */
		period: FormControl<number | null | undefined>,

		/**
		 * The field to aggregate.
		 * Required
		 * Min length: 1
		 */
		aggregationField: FormControl<string | null | undefined>,

		/**
		 * The fleet metric description.
		 * Max length: 1024
		 */
		description: FormControl<string | null | undefined>,

		/** The query version. */
		queryVersion: FormControl<string | null | undefined>,

		/**
		 * The name of the index to search.
		 * Max length: 128
		 * Min length: 1
		 */
		indexName: FormControl<string | null | undefined>,

		/** Used to support unit transformation such as milliseconds to seconds. The unit must be supported by <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_MetricDatum.html">CW metric</a>. Default to null. */
		unit: FormControl<FleetMetricUnit | null | undefined>,
	}
	export function CreateCreateFleetMetricPutBodyFormGroup() {
		return new FormGroup<CreateFleetMetricPutBodyFormProperties>({
			queryString: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1)]),
			period: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(60), Validators.max(86400)]),
			aggregationField: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1)]),
			description: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(1024), Validators.pattern('[\p{Graph}\x20]*')]),
			queryVersion: new FormControl<string | null | undefined>(undefined),
			indexName: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(128), Validators.pattern('[a-zA-Z0-9:_-]+')]),
			unit: new FormControl<FleetMetricUnit | null | undefined>(undefined),
		});

	}

	export interface CreateFleetMetricPutBodyAggregationType {
		name?: AggregationTypeName;
		values?: Array<string>;
	}
	export interface CreateFleetMetricPutBodyAggregationTypeFormProperties {
		name: FormControl<AggregationTypeName | null | undefined>,
	}
	export function CreateCreateFleetMetricPutBodyAggregationTypeFormGroup() {
		return new FormGroup<CreateFleetMetricPutBodyAggregationTypeFormProperties>({
			name: new FormControl<AggregationTypeName | null | undefined>(undefined),
		});

	}

	export interface UpdateFleetMetricPatchBody {

		/**
		 * The search query string.
		 * Min length: 1
		 */
		queryString?: string | null;

		/** The type of aggregation queries. */
		aggregationType?: UpdateFleetMetricPatchBodyAggregationType;

		/**
		 * The time in seconds between fleet metric emissions. Range [60(1 min), 86400(1 day)] and must be multiple of 60.
		 * Minimum: 60
		 * Maximum: 86400
		 */
		period?: number | null;

		/**
		 * The field to aggregate.
		 * Min length: 1
		 */
		aggregationField?: string | null;

		/**
		 * The description of the fleet metric.
		 * Max length: 1024
		 */
		description?: string | null;

		/** The version of the query. */
		queryVersion?: string | null;

		/**
		 * The name of the index to search.
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		indexName: string;

		/** Used to support unit transformation such as milliseconds to seconds. The unit must be supported by <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_MetricDatum.html">CW metric</a>. */
		unit?: FleetMetricUnit | null;

		/** The expected version of the fleet metric record in the registry. */
		expectedVersion?: number | null;
	}
	export interface UpdateFleetMetricPatchBodyFormProperties {

		/**
		 * The search query string.
		 * Min length: 1
		 */
		queryString: FormControl<string | null | undefined>,

		/**
		 * The time in seconds between fleet metric emissions. Range [60(1 min), 86400(1 day)] and must be multiple of 60.
		 * Minimum: 60
		 * Maximum: 86400
		 */
		period: FormControl<number | null | undefined>,

		/**
		 * The field to aggregate.
		 * Min length: 1
		 */
		aggregationField: FormControl<string | null | undefined>,

		/**
		 * The description of the fleet metric.
		 * Max length: 1024
		 */
		description: FormControl<string | null | undefined>,

		/** The version of the query. */
		queryVersion: FormControl<string | null | undefined>,

		/**
		 * The name of the index to search.
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		indexName: FormControl<string | null | undefined>,

		/** Used to support unit transformation such as milliseconds to seconds. The unit must be supported by <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_MetricDatum.html">CW metric</a>. */
		unit: FormControl<FleetMetricUnit | null | undefined>,

		/** The expected version of the fleet metric record in the registry. */
		expectedVersion: FormControl<number | null | undefined>,
	}
	export function CreateUpdateFleetMetricPatchBodyFormGroup() {
		return new FormGroup<UpdateFleetMetricPatchBodyFormProperties>({
			queryString: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1)]),
			period: new FormControl<number | null | undefined>(undefined, [Validators.min(60), Validators.max(86400)]),
			aggregationField: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1)]),
			description: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(1024), Validators.pattern('[\p{Graph}\x20]*')]),
			queryVersion: new FormControl<string | null | undefined>(undefined),
			indexName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(128), Validators.pattern('[a-zA-Z0-9:_-]+')]),
			unit: new FormControl<FleetMetricUnit | null | undefined>(undefined),
			expectedVersion: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface UpdateFleetMetricPatchBodyAggregationType {
		name?: AggregationTypeName;
		values?: Array<string>;
	}
	export interface UpdateFleetMetricPatchBodyAggregationTypeFormProperties {
		name: FormControl<AggregationTypeName | null | undefined>,
	}
	export function CreateUpdateFleetMetricPatchBodyAggregationTypeFormGroup() {
		return new FormGroup<UpdateFleetMetricPatchBodyAggregationTypeFormProperties>({
			name: new FormControl<AggregationTypeName | null | undefined>(undefined),
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
		 * <p>An S3 link, or S3 object URL, to the job document. The link is an Amazon S3 object URL and is required if you don't specify a value for <code>document</code>.</p> <p>For example, <code>--document-source https://s3.<i>region-code</i>.amazonaws.com/example-firmware/device-firmware.1.0</code> </p> <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/access-bucket-intro.html">Methods for accessing a bucket</a>.</p>
		 * Max length: 1350
		 * Min length: 1
		 */
		documentSource?: string | null;

		/**
		 * The job document. Required if you don't specify a value for <code>documentSource</code>.
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

		/** <p>Specifies whether the job will continue to run (CONTINUOUS), or will be complete after all those things specified as targets have completed the job (SNAPSHOT). If continuous, the job may also be run on a thing when a change is detected in a target. For example, a job will run on a thing when the thing is added to a target group, even after the job was completed by all things originally in the group.</p> <note> <p>We recommend that you use continuous jobs instead of snapshot jobs for dynamic thing group targets. By using continuous jobs, devices that join the group receive the job execution even after the job has been created.</p> </note> */
		targetSelection?: TargetSelection | null;

		/** Allows you to create a staged rollout of a job. */
		jobExecutionsRolloutConfig?: CreateJobPutBodyJobExecutionsRolloutConfig;

		/** The criteria that determine when and how a job abort takes place. */
		abortConfig?: CreateJobPutBodyAbortConfig;

		/** Specifies the amount of time each device has to finish its execution of the job. A timer is started when the job execution status is set to <code>IN_PROGRESS</code>. If the job execution status is not set to another terminal state before the timer expires, it will be automatically set to <code>TIMED_OUT</code>. */
		timeoutConfig?: CreateJobPutBodyTimeoutConfig;

		/** Metadata which can be used to manage the job. */
		tags?: Array<Tag>;

		/** <p>The namespace used to indicate that a job is a customer-managed job.</p> <p>When you specify a value for this parameter, Amazon Web Services IoT Core sends jobs notifications to MQTT topics that contain the value in the following format.</p> <p> <code>$aws/things/<i>THING_NAME</i>/jobs/<i>JOB_ID</i>/notify-namespace-<i>NAMESPACE_ID</i>/</code> </p> <note> <p>The <code>namespaceId</code> feature is in public preview.</p> </note> */
		namespaceId?: string | null;

		/**
		 * The ARN of the job template used to create the job.
		 * Max length: 1600
		 * Min length: 1
		 */
		jobTemplateArn?: string | null;

		/** The configuration that determines how many retries are allowed for each failure type for a job. */
		jobExecutionsRetryConfig?: CreateJobPutBodyJobExecutionsRetryConfig;

		/** <p>Parameters of an Amazon Web Services managed template that you can specify to create the job document.</p> <note> <p> <code>documentParameters</code> can only be used when creating jobs from Amazon Web Services managed templates. This parameter can't be used with custom job templates or to create jobs from them.</p> </note> */
		documentParameters?: {[id: string]: string };

		/** Specifies the date and time that a job will begin the rollout of the job document to all devices in the target group. Additionally, you can specify the end behavior for each job execution when it reaches the scheduled end time. */
		schedulingConfig?: CreateJobPutBodySchedulingConfig;

		/** <p>The package version Amazon Resource Names (ARNs) that are installed on the device when the job successfully completes. </p> <p> <b>Note:</b>The following Length Constraints relates to a single string. Up to five strings are allowed.</p> */
		destinationPackageVersions?: Array<string>;
	}
	export interface CreateJobPutBodyFormProperties {

		/**
		 * <p>An S3 link, or S3 object URL, to the job document. The link is an Amazon S3 object URL and is required if you don't specify a value for <code>document</code>.</p> <p>For example, <code>--document-source https://s3.<i>region-code</i>.amazonaws.com/example-firmware/device-firmware.1.0</code> </p> <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/access-bucket-intro.html">Methods for accessing a bucket</a>.</p>
		 * Max length: 1350
		 * Min length: 1
		 */
		documentSource: FormControl<string | null | undefined>,

		/**
		 * The job document. Required if you don't specify a value for <code>documentSource</code>.
		 * Max length: 32768
		 */
		document: FormControl<string | null | undefined>,

		/**
		 * A short text description of the job.
		 * Max length: 2028
		 */
		description: FormControl<string | null | undefined>,

		/** <p>Specifies whether the job will continue to run (CONTINUOUS), or will be complete after all those things specified as targets have completed the job (SNAPSHOT). If continuous, the job may also be run on a thing when a change is detected in a target. For example, a job will run on a thing when the thing is added to a target group, even after the job was completed by all things originally in the group.</p> <note> <p>We recommend that you use continuous jobs instead of snapshot jobs for dynamic thing group targets. By using continuous jobs, devices that join the group receive the job execution even after the job has been created.</p> </note> */
		targetSelection: FormControl<TargetSelection | null | undefined>,

		/** <p>The namespace used to indicate that a job is a customer-managed job.</p> <p>When you specify a value for this parameter, Amazon Web Services IoT Core sends jobs notifications to MQTT topics that contain the value in the following format.</p> <p> <code>$aws/things/<i>THING_NAME</i>/jobs/<i>JOB_ID</i>/notify-namespace-<i>NAMESPACE_ID</i>/</code> </p> <note> <p>The <code>namespaceId</code> feature is in public preview.</p> </note> */
		namespaceId: FormControl<string | null | undefined>,

		/**
		 * The ARN of the job template used to create the job.
		 * Max length: 1600
		 * Min length: 1
		 */
		jobTemplateArn: FormControl<string | null | undefined>,

		/** <p>Parameters of an Amazon Web Services managed template that you can specify to create the job document.</p> <note> <p> <code>documentParameters</code> can only be used when creating jobs from Amazon Web Services managed templates. This parameter can't be used with custom job templates or to create jobs from them.</p> </note> */
		documentParameters: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateCreateJobPutBodyFormGroup() {
		return new FormGroup<CreateJobPutBodyFormProperties>({
			documentSource: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(1350)]),
			document: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(32768)]),
			description: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(2028), Validators.pattern('[^\p{C}]+')]),
			targetSelection: new FormControl<TargetSelection | null | undefined>(undefined),
			namespaceId: new FormControl<string | null | undefined>(undefined, [Validators.pattern('[a-zA-Z0-9_-]+')]),
			jobTemplateArn: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(1600), Validators.pattern('^arn:[!-~]+$')]),
			documentParameters: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}

	export interface CreateJobPutBodyPresignedUrlConfig {
		roleArn?: string;
		expiresInSec?: number | null;
	}
	export interface CreateJobPutBodyPresignedUrlConfigFormProperties {
		roleArn: FormControl<string | null | undefined>,
		expiresInSec: FormControl<number | null | undefined>,
	}
	export function CreateCreateJobPutBodyPresignedUrlConfigFormGroup() {
		return new FormGroup<CreateJobPutBodyPresignedUrlConfigFormProperties>({
			roleArn: new FormControl<string | null | undefined>(undefined),
			expiresInSec: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface CreateJobPutBodyJobExecutionsRolloutConfig {
		maximumPerMinute?: number | null;
		exponentialRate?: ExponentialRolloutRate;
	}
	export interface CreateJobPutBodyJobExecutionsRolloutConfigFormProperties {
		maximumPerMinute: FormControl<number | null | undefined>,
	}
	export function CreateCreateJobPutBodyJobExecutionsRolloutConfigFormGroup() {
		return new FormGroup<CreateJobPutBodyJobExecutionsRolloutConfigFormProperties>({
			maximumPerMinute: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface CreateJobPutBodyAbortConfig {
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

	export interface CreateJobPutBodyJobExecutionsRetryConfig {
		criteriaList?: Array<RetryCriteria>;
	}
	export interface CreateJobPutBodyJobExecutionsRetryConfigFormProperties {
	}
	export function CreateCreateJobPutBodyJobExecutionsRetryConfigFormGroup() {
		return new FormGroup<CreateJobPutBodyJobExecutionsRetryConfigFormProperties>({
		});

	}

	export interface CreateJobPutBodySchedulingConfig {
		startTime?: string;
		endTime?: string;
		endBehavior?: JobEndBehavior;
		maintenanceWindows?: Array<MaintenanceWindow>;
	}
	export interface CreateJobPutBodySchedulingConfigFormProperties {
		startTime: FormControl<string | null | undefined>,
		endTime: FormControl<string | null | undefined>,
		endBehavior: FormControl<JobEndBehavior | null | undefined>,
	}
	export function CreateCreateJobPutBodySchedulingConfigFormGroup() {
		return new FormGroup<CreateJobPutBodySchedulingConfigFormProperties>({
			startTime: new FormControl<string | null | undefined>(undefined),
			endTime: new FormControl<string | null | undefined>(undefined),
			endBehavior: new FormControl<JobEndBehavior | null | undefined>(undefined),
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

		/** The criteria that determine when and how a job abort takes place. */
		abortConfig?: UpdateJobPatchBodyAbortConfig;

		/** Specifies the amount of time each device has to finish its execution of the job. A timer is started when the job execution status is set to <code>IN_PROGRESS</code>. If the job execution status is not set to another terminal state before the timer expires, it will be automatically set to <code>TIMED_OUT</code>. */
		timeoutConfig?: UpdateJobPatchBodyTimeoutConfig;

		/** The configuration that determines how many retries are allowed for each failure type for a job. */
		jobExecutionsRetryConfig?: UpdateJobPatchBodyJobExecutionsRetryConfig;
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
		roleArn?: string;
		expiresInSec?: number | null;
	}
	export interface UpdateJobPatchBodyPresignedUrlConfigFormProperties {
		roleArn: FormControl<string | null | undefined>,
		expiresInSec: FormControl<number | null | undefined>,
	}
	export function CreateUpdateJobPatchBodyPresignedUrlConfigFormGroup() {
		return new FormGroup<UpdateJobPatchBodyPresignedUrlConfigFormProperties>({
			roleArn: new FormControl<string | null | undefined>(undefined),
			expiresInSec: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface UpdateJobPatchBodyJobExecutionsRolloutConfig {
		maximumPerMinute?: number | null;
		exponentialRate?: ExponentialRolloutRate;
	}
	export interface UpdateJobPatchBodyJobExecutionsRolloutConfigFormProperties {
		maximumPerMinute: FormControl<number | null | undefined>,
	}
	export function CreateUpdateJobPatchBodyJobExecutionsRolloutConfigFormGroup() {
		return new FormGroup<UpdateJobPatchBodyJobExecutionsRolloutConfigFormProperties>({
			maximumPerMinute: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface UpdateJobPatchBodyAbortConfig {
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

	export interface UpdateJobPatchBodyJobExecutionsRetryConfig {
		criteriaList?: Array<RetryCriteria>;
	}
	export interface UpdateJobPatchBodyJobExecutionsRetryConfigFormProperties {
	}
	export function CreateUpdateJobPatchBodyJobExecutionsRetryConfigFormGroup() {
		return new FormGroup<UpdateJobPatchBodyJobExecutionsRetryConfigFormProperties>({
		});

	}

	export interface CreateJobTemplatePutBody {

		/** The ARN of the job to use as the basis for the job template. */
		jobArn?: string | null;

		/**
		 * <p>An S3 link to the job document to use in the template. Required if you don't specify a value for <code>document</code>.</p> <note> <p>If the job document resides in an S3 bucket, you must use a placeholder link when specifying the document.</p> <p>The placeholder link is of the following form:</p> <p> <code>${aws:iot:s3-presigned-url:https://s3.amazonaws.com/<i>bucket</i>/<i>key</i>}</code> </p> <p>where <i>bucket</i> is your bucket name and <i>key</i> is the object in the bucket to which you are linking.</p> </note>
		 * Max length: 1350
		 * Min length: 1
		 */
		documentSource?: string | null;

		/**
		 * The job document. Required if you don't specify a value for <code>documentSource</code>.
		 * Max length: 32768
		 */
		document?: string | null;

		/**
		 * A description of the job document.
		 * Required
		 * Max length: 2028
		 */
		description: string;

		/** Configuration for pre-signed S3 URLs. */
		presignedUrlConfig?: CreateJobTemplatePutBodyPresignedUrlConfig;

		/** Allows you to create a staged rollout of a job. */
		jobExecutionsRolloutConfig?: CreateJobTemplatePutBodyJobExecutionsRolloutConfig;

		/** The criteria that determine when and how a job abort takes place. */
		abortConfig?: CreateJobTemplatePutBodyAbortConfig;

		/** Specifies the amount of time each device has to finish its execution of the job. A timer is started when the job execution status is set to <code>IN_PROGRESS</code>. If the job execution status is not set to another terminal state before the timer expires, it will be automatically set to <code>TIMED_OUT</code>. */
		timeoutConfig?: CreateJobTemplatePutBodyTimeoutConfig;

		/** Metadata that can be used to manage the job template. */
		tags?: Array<Tag>;

		/** The configuration that determines how many retries are allowed for each failure type for a job. */
		jobExecutionsRetryConfig?: CreateJobTemplatePutBodyJobExecutionsRetryConfig;

		/** Allows you to configure an optional maintenance window for the rollout of a job document to all devices in the target group for a job. */
		maintenanceWindows?: Array<MaintenanceWindow>;

		/** <p>The package version Amazon Resource Names (ARNs) that are installed on the device when the job successfully completes. </p> <p> <b>Note:</b>The following Length Constraints relates to a single string. Up to five strings are allowed.</p> */
		destinationPackageVersions?: Array<string>;
	}
	export interface CreateJobTemplatePutBodyFormProperties {

		/** The ARN of the job to use as the basis for the job template. */
		jobArn: FormControl<string | null | undefined>,

		/**
		 * <p>An S3 link to the job document to use in the template. Required if you don't specify a value for <code>document</code>.</p> <note> <p>If the job document resides in an S3 bucket, you must use a placeholder link when specifying the document.</p> <p>The placeholder link is of the following form:</p> <p> <code>${aws:iot:s3-presigned-url:https://s3.amazonaws.com/<i>bucket</i>/<i>key</i>}</code> </p> <p>where <i>bucket</i> is your bucket name and <i>key</i> is the object in the bucket to which you are linking.</p> </note>
		 * Max length: 1350
		 * Min length: 1
		 */
		documentSource: FormControl<string | null | undefined>,

		/**
		 * The job document. Required if you don't specify a value for <code>documentSource</code>.
		 * Max length: 32768
		 */
		document: FormControl<string | null | undefined>,

		/**
		 * A description of the job document.
		 * Required
		 * Max length: 2028
		 */
		description: FormControl<string | null | undefined>,
	}
	export function CreateCreateJobTemplatePutBodyFormGroup() {
		return new FormGroup<CreateJobTemplatePutBodyFormProperties>({
			jobArn: new FormControl<string | null | undefined>(undefined),
			documentSource: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(1350)]),
			document: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(32768)]),
			description: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(2028), Validators.pattern('[^\p{C}]+')]),
		});

	}

	export interface CreateJobTemplatePutBodyPresignedUrlConfig {
		roleArn?: string;
		expiresInSec?: number | null;
	}
	export interface CreateJobTemplatePutBodyPresignedUrlConfigFormProperties {
		roleArn: FormControl<string | null | undefined>,
		expiresInSec: FormControl<number | null | undefined>,
	}
	export function CreateCreateJobTemplatePutBodyPresignedUrlConfigFormGroup() {
		return new FormGroup<CreateJobTemplatePutBodyPresignedUrlConfigFormProperties>({
			roleArn: new FormControl<string | null | undefined>(undefined),
			expiresInSec: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface CreateJobTemplatePutBodyJobExecutionsRolloutConfig {
		maximumPerMinute?: number | null;
		exponentialRate?: ExponentialRolloutRate;
	}
	export interface CreateJobTemplatePutBodyJobExecutionsRolloutConfigFormProperties {
		maximumPerMinute: FormControl<number | null | undefined>,
	}
	export function CreateCreateJobTemplatePutBodyJobExecutionsRolloutConfigFormGroup() {
		return new FormGroup<CreateJobTemplatePutBodyJobExecutionsRolloutConfigFormProperties>({
			maximumPerMinute: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface CreateJobTemplatePutBodyAbortConfig {
		criteriaList?: Array<AbortCriteria>;
	}
	export interface CreateJobTemplatePutBodyAbortConfigFormProperties {
	}
	export function CreateCreateJobTemplatePutBodyAbortConfigFormGroup() {
		return new FormGroup<CreateJobTemplatePutBodyAbortConfigFormProperties>({
		});

	}

	export interface CreateJobTemplatePutBodyTimeoutConfig {
		inProgressTimeoutInMinutes?: number | null;
	}
	export interface CreateJobTemplatePutBodyTimeoutConfigFormProperties {
		inProgressTimeoutInMinutes: FormControl<number | null | undefined>,
	}
	export function CreateCreateJobTemplatePutBodyTimeoutConfigFormGroup() {
		return new FormGroup<CreateJobTemplatePutBodyTimeoutConfigFormProperties>({
			inProgressTimeoutInMinutes: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface CreateJobTemplatePutBodyJobExecutionsRetryConfig {
		criteriaList?: Array<RetryCriteria>;
	}
	export interface CreateJobTemplatePutBodyJobExecutionsRetryConfigFormProperties {
	}
	export function CreateCreateJobTemplatePutBodyJobExecutionsRetryConfigFormGroup() {
		return new FormGroup<CreateJobTemplatePutBodyJobExecutionsRetryConfigFormProperties>({
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
		updateDeviceCertificateParams?: UpdateDeviceCertificateParams;
		updateCACertificateParams?: UpdateCACertificateParams;
		addThingsToThingGroupParams?: AddThingsToThingGroupParams;
		replaceDefaultPolicyVersionParams?: ReplaceDefaultPolicyVersionParams;
		enableIoTLoggingParams?: EnableIoTLoggingParams;
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
		updateDeviceCertificateParams?: UpdateDeviceCertificateParams;
		updateCACertificateParams?: UpdateCACertificateParams;
		addThingsToThingGroupParams?: AddThingsToThingGroupParams;
		replaceDefaultPolicyVersionParams?: ReplaceDefaultPolicyVersionParams;
		enableIoTLoggingParams?: EnableIoTLoggingParams;
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
		 * The devices targeted to receive OTA updates.
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
		targetSelection?: TargetSelection | null;

		/** Configuration for the rollout of OTA updates. */
		awsJobExecutionsRolloutConfig?: CreateOTAUpdatePostBodyAwsJobExecutionsRolloutConfig;

		/** Configuration information for pre-signed URLs. Valid when <code>protocols</code> contains HTTP. */
		awsJobPresignedUrlConfig?: CreateOTAUpdatePostBodyAwsJobPresignedUrlConfig;

		/** The criteria that determine when and how a job abort takes place. */
		awsJobAbortConfig?: CreateOTAUpdatePostBodyAwsJobAbortConfig;

		/** Specifies the amount of time each device has to finish its execution of the job. A timer is started when the job execution status is set to <code>IN_PROGRESS</code>. If the job execution status is not set to another terminal state before the timer expires, it will be automatically set to <code>TIMED_OUT</code>. */
		awsJobTimeoutConfig?: CreateOTAUpdatePostBodyAwsJobTimeoutConfig;

		/**
		 * The files to be streamed by the OTA update.
		 * Required
		 * Minimum items: 1
		 */
		files: Array<OTAUpdateFile>;

		/**
		 * The IAM role that grants Amazon Web Services IoT Core access to the Amazon S3, IoT jobs and Amazon Web Services Code Signing resources to create an OTA update job.
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
		targetSelection: FormControl<TargetSelection | null | undefined>,

		/**
		 * The IAM role that grants Amazon Web Services IoT Core access to the Amazon S3, IoT jobs and Amazon Web Services Code Signing resources to create an OTA update job.
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
			targetSelection: new FormControl<TargetSelection | null | undefined>(undefined),
			roleArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(20), Validators.maxLength(2048)]),
			additionalParameters: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}

	export interface CreateOTAUpdatePostBodyAwsJobExecutionsRolloutConfig {
		maximumPerMinute?: number | null;
		exponentialRate?: AwsJobExponentialRolloutRate;
	}
	export interface CreateOTAUpdatePostBodyAwsJobExecutionsRolloutConfigFormProperties {
		maximumPerMinute: FormControl<number | null | undefined>,
	}
	export function CreateCreateOTAUpdatePostBodyAwsJobExecutionsRolloutConfigFormGroup() {
		return new FormGroup<CreateOTAUpdatePostBodyAwsJobExecutionsRolloutConfigFormProperties>({
			maximumPerMinute: new FormControl<number | null | undefined>(undefined),
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

	export interface CreateOTAUpdatePostBodyAwsJobAbortConfig {
		abortCriteriaList?: Array<AwsJobAbortCriteria>;
	}
	export interface CreateOTAUpdatePostBodyAwsJobAbortConfigFormProperties {
	}
	export function CreateCreateOTAUpdatePostBodyAwsJobAbortConfigFormGroup() {
		return new FormGroup<CreateOTAUpdatePostBodyAwsJobAbortConfigFormProperties>({
		});

	}

	export interface CreateOTAUpdatePostBodyAwsJobTimeoutConfig {
		inProgressTimeoutInMinutes?: number | null;
	}
	export interface CreateOTAUpdatePostBodyAwsJobTimeoutConfigFormProperties {
		inProgressTimeoutInMinutes: FormControl<number | null | undefined>,
	}
	export function CreateCreateOTAUpdatePostBodyAwsJobTimeoutConfigFormGroup() {
		return new FormGroup<CreateOTAUpdatePostBodyAwsJobTimeoutConfigFormProperties>({
			inProgressTimeoutInMinutes: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface CreatePackagePutBody {

		/**
		 * A summary of the package being created. This can be used to outline the package's contents or purpose.
		 * Max length: 1024
		 * Min length: 0
		 */
		description?: string | null;

		/** Metadata that can be used to manage the package. */
		tags?: {[id: string]: string };
	}
	export interface CreatePackagePutBodyFormProperties {

		/**
		 * A summary of the package being created. This can be used to outline the package's contents or purpose.
		 * Max length: 1024
		 * Min length: 0
		 */
		description: FormControl<string | null | undefined>,

		/** Metadata that can be used to manage the package. */
		tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateCreatePackagePutBodyFormGroup() {
		return new FormGroup<CreatePackagePutBodyFormProperties>({
			description: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(1024), Validators.pattern('[^\p{C}]+')]),
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}

	export interface UpdatePackagePatchBody {

		/**
		 * The package description.
		 * Max length: 1024
		 * Min length: 0
		 */
		description?: string | null;

		/**
		 * <p>The name of the default package version.</p> <p> <b>Note:</b> You cannot name a <code>defaultVersion</code> and set <code>unsetDefaultVersion</code> equal to <code>true</code> at the same time.</p>
		 * Max length: 64
		 * Min length: 1
		 */
		defaultVersionName?: string | null;

		/** <p>Indicates whether you want to remove the named default package version from the software package. Set as <code>true</code> to remove the default package version. </p> <p> <b>Note:</b> You cannot name a <code>defaultVersion</code> and set <code>unsetDefaultVersion</code> equal to <code>true</code> at the same time.</p> */
		unsetDefaultVersion?: boolean | null;
	}
	export interface UpdatePackagePatchBodyFormProperties {

		/**
		 * The package description.
		 * Max length: 1024
		 * Min length: 0
		 */
		description: FormControl<string | null | undefined>,

		/**
		 * <p>The name of the default package version.</p> <p> <b>Note:</b> You cannot name a <code>defaultVersion</code> and set <code>unsetDefaultVersion</code> equal to <code>true</code> at the same time.</p>
		 * Max length: 64
		 * Min length: 1
		 */
		defaultVersionName: FormControl<string | null | undefined>,

		/** <p>Indicates whether you want to remove the named default package version from the software package. Set as <code>true</code> to remove the default package version. </p> <p> <b>Note:</b> You cannot name a <code>defaultVersion</code> and set <code>unsetDefaultVersion</code> equal to <code>true</code> at the same time.</p> */
		unsetDefaultVersion: FormControl<boolean | null | undefined>,
	}
	export function CreateUpdatePackagePatchBodyFormGroup() {
		return new FormGroup<UpdatePackagePatchBodyFormProperties>({
			description: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(1024), Validators.pattern('[^\p{C}]+')]),
			defaultVersionName: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(64), Validators.pattern('[a-zA-Z0-9-_.]+')]),
			unsetDefaultVersion: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface CreatePackageVersionPutBody {

		/**
		 * A summary of the package version being created. This can be used to outline the package's contents or purpose.
		 * Max length: 1024
		 * Min length: 0
		 */
		description?: string | null;

		/** <p>Metadata that can be used to define a package version’s configuration. For example, the S3 file location, configuration options that are being sent to the device or fleet.</p> <p>The combined size of all the attributes on a package version is limited to 3KB.</p> */
		attributes?: {[id: string]: string };

		/** Metadata that can be used to manage the package version. */
		tags?: {[id: string]: string };
	}
	export interface CreatePackageVersionPutBodyFormProperties {

		/**
		 * A summary of the package version being created. This can be used to outline the package's contents or purpose.
		 * Max length: 1024
		 * Min length: 0
		 */
		description: FormControl<string | null | undefined>,

		/** <p>Metadata that can be used to define a package version’s configuration. For example, the S3 file location, configuration options that are being sent to the device or fleet.</p> <p>The combined size of all the attributes on a package version is limited to 3KB.</p> */
		attributes: FormControl<{[id: string]: string } | null | undefined>,

		/** Metadata that can be used to manage the package version. */
		tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateCreatePackageVersionPutBodyFormGroup() {
		return new FormGroup<CreatePackageVersionPutBodyFormProperties>({
			description: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(1024), Validators.pattern('[^\p{C}]+')]),
			attributes: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}

	export interface UpdatePackageVersionPatchBody {

		/**
		 * The package version description.
		 * Max length: 1024
		 * Min length: 0
		 */
		description?: string | null;

		/** <p>Metadata that can be used to define a package version’s configuration. For example, the S3 file location, configuration options that are being sent to the device or fleet. </p> <p> <b>Note:</b> Attributes can be updated only when the package version is in a draft state.</p> <p>The combined size of all the attributes on a package version is limited to 3KB.</p> */
		attributes?: {[id: string]: string };

		/** The status that the package version should be assigned. For more information, see <a href="https://docs.aws.amazon.com/iot/latest/developerguide/preparing-to-use-software-package-catalog.html#package-version-lifecycle">Package version lifecycle</a>. */
		action?: PackageVersionAction | null;
	}
	export interface UpdatePackageVersionPatchBodyFormProperties {

		/**
		 * The package version description.
		 * Max length: 1024
		 * Min length: 0
		 */
		description: FormControl<string | null | undefined>,

		/** <p>Metadata that can be used to define a package version’s configuration. For example, the S3 file location, configuration options that are being sent to the device or fleet. </p> <p> <b>Note:</b> Attributes can be updated only when the package version is in a draft state.</p> <p>The combined size of all the attributes on a package version is limited to 3KB.</p> */
		attributes: FormControl<{[id: string]: string } | null | undefined>,

		/** The status that the package version should be assigned. For more information, see <a href="https://docs.aws.amazon.com/iot/latest/developerguide/preparing-to-use-software-package-catalog.html#package-version-lifecycle">Package version lifecycle</a>. */
		action: FormControl<PackageVersionAction | null | undefined>,
	}
	export function CreateUpdatePackageVersionPatchBodyFormGroup() {
		return new FormGroup<UpdatePackageVersionPatchBodyFormProperties>({
			description: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(1024), Validators.pattern('[^\p{C}]+')]),
			attributes: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			action: new FormControl<PackageVersionAction | null | undefined>(undefined),
		});

	}

	export interface CreatePolicyPostBody {

		/**
		 * The JSON document that describes the policy. <b>policyDocument</b> must have a minimum length of 1, with a maximum length of 2048, excluding whitespace.
		 * Required
		 * Max length: 404600
		 * Min length: 0
		 */
		policyDocument: string;

		/** <p>Metadata which can be used to manage the policy.</p> <note> <p>For URI Request parameters use format: ...key1=value1&amp;key2=value2...</p> <p>For the CLI command-line parameter use format: &amp;&amp;tags "key1=value1&amp;key2=value2..."</p> <p>For the cli-input-json file use format: "tags": "key1=value1&amp;key2=value2..."</p> </note> */
		tags?: Array<Tag>;
	}
	export interface CreatePolicyPostBodyFormProperties {

		/**
		 * The JSON document that describes the policy. <b>policyDocument</b> must have a minimum length of 1, with a maximum length of 2048, excluding whitespace.
		 * Required
		 * Max length: 404600
		 * Min length: 0
		 */
		policyDocument: FormControl<string | null | undefined>,
	}
	export function CreateCreatePolicyPostBodyFormGroup() {
		return new FormGroup<CreatePolicyPostBodyFormProperties>({
			policyDocument: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(0), Validators.maxLength(404600), Validators.pattern('[\s\S]*')]),
		});

	}

	export interface CreatePolicyVersionPostBody {

		/**
		 * The JSON document that describes the policy. Minimum length of 1. Maximum length of 2048, excluding whitespace.
		 * Required
		 * Max length: 404600
		 * Min length: 0
		 */
		policyDocument: string;
	}
	export interface CreatePolicyVersionPostBodyFormProperties {

		/**
		 * The JSON document that describes the policy. Minimum length of 1. Maximum length of 2048, excluding whitespace.
		 * Required
		 * Max length: 404600
		 * Min length: 0
		 */
		policyDocument: FormControl<string | null | undefined>,
	}
	export function CreateCreatePolicyVersionPostBodyFormGroup() {
		return new FormGroup<CreatePolicyVersionPostBodyFormProperties>({
			policyDocument: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(0), Validators.maxLength(404600), Validators.pattern('[\s\S]*')]),
		});

	}

	export interface CreateProvisioningTemplatePostBody {

		/**
		 * The name of the provisioning template.
		 * Required
		 * Max length: 36
		 * Min length: 1
		 */
		templateName: string;

		/**
		 * The description of the provisioning template.
		 * Max length: 500
		 * Min length: 0
		 */
		description?: string | null;

		/**
		 * The JSON formatted contents of the provisioning template.
		 * Required
		 * Max length: 10240
		 * Min length: 0
		 */
		templateBody: string;

		/** True to enable the provisioning template, otherwise false. */
		enabled?: boolean | null;

		/**
		 * The role ARN for the role associated with the provisioning template. This IoT role grants permission to provision a device.
		 * Required
		 * Max length: 2048
		 * Min length: 20
		 */
		provisioningRoleArn: string;

		/** Structure that contains <code>payloadVersion</code> and <code>targetArn</code>. */
		preProvisioningHook?: CreateProvisioningTemplatePostBodyPreProvisioningHook;

		/** <p>Metadata which can be used to manage the provisioning template.</p> <note> <p>For URI Request parameters use format: ...key1=value1&amp;key2=value2...</p> <p>For the CLI command-line parameter use format: &amp;&amp;tags "key1=value1&amp;key2=value2..."</p> <p>For the cli-input-json file use format: "tags": "key1=value1&amp;key2=value2..."</p> </note> */
		tags?: Array<Tag>;

		/** The type you define in a provisioning template. You can create a template with only one type. You can't change the template type after its creation. The default value is <code>FLEET_PROVISIONING</code>. For more information about provisioning template, see: <a href="https://docs.aws.amazon.com/iot/latest/developerguide/provision-template.html">Provisioning template</a>. */
		type?: TemplateType | null;
	}
	export interface CreateProvisioningTemplatePostBodyFormProperties {

		/**
		 * The name of the provisioning template.
		 * Required
		 * Max length: 36
		 * Min length: 1
		 */
		templateName: FormControl<string | null | undefined>,

		/**
		 * The description of the provisioning template.
		 * Max length: 500
		 * Min length: 0
		 */
		description: FormControl<string | null | undefined>,

		/**
		 * The JSON formatted contents of the provisioning template.
		 * Required
		 * Max length: 10240
		 * Min length: 0
		 */
		templateBody: FormControl<string | null | undefined>,

		/** True to enable the provisioning template, otherwise false. */
		enabled: FormControl<boolean | null | undefined>,

		/**
		 * The role ARN for the role associated with the provisioning template. This IoT role grants permission to provision a device.
		 * Required
		 * Max length: 2048
		 * Min length: 20
		 */
		provisioningRoleArn: FormControl<string | null | undefined>,

		/** The type you define in a provisioning template. You can create a template with only one type. You can't change the template type after its creation. The default value is <code>FLEET_PROVISIONING</code>. For more information about provisioning template, see: <a href="https://docs.aws.amazon.com/iot/latest/developerguide/provision-template.html">Provisioning template</a>. */
		type: FormControl<TemplateType | null | undefined>,
	}
	export function CreateCreateProvisioningTemplatePostBodyFormGroup() {
		return new FormGroup<CreateProvisioningTemplatePostBodyFormProperties>({
			templateName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(36), Validators.pattern('^[0-9A-Za-z_-]+$')]),
			description: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(500), Validators.pattern('[^\p{C}]*')]),
			templateBody: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(0), Validators.maxLength(10240), Validators.pattern('[\s\S]*')]),
			enabled: new FormControl<boolean | null | undefined>(undefined),
			provisioningRoleArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(20), Validators.maxLength(2048)]),
			type: new FormControl<TemplateType | null | undefined>(undefined),
		});

	}

	export interface CreateProvisioningTemplatePostBodyPreProvisioningHook {
		payloadVersion?: string;
		targetArn?: string;
	}
	export interface CreateProvisioningTemplatePostBodyPreProvisioningHookFormProperties {
		payloadVersion: FormControl<string | null | undefined>,
		targetArn: FormControl<string | null | undefined>,
	}
	export function CreateCreateProvisioningTemplatePostBodyPreProvisioningHookFormGroup() {
		return new FormGroup<CreateProvisioningTemplatePostBodyPreProvisioningHookFormProperties>({
			payloadVersion: new FormControl<string | null | undefined>(undefined),
			targetArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateProvisioningTemplateVersionPostBody {

		/**
		 * The JSON formatted contents of the provisioning template.
		 * Required
		 * Max length: 10240
		 * Min length: 0
		 */
		templateBody: string;
	}
	export interface CreateProvisioningTemplateVersionPostBodyFormProperties {

		/**
		 * The JSON formatted contents of the provisioning template.
		 * Required
		 * Max length: 10240
		 * Min length: 0
		 */
		templateBody: FormControl<string | null | undefined>,
	}
	export function CreateCreateProvisioningTemplateVersionPostBodyFormGroup() {
		return new FormGroup<CreateProvisioningTemplateVersionPostBodyFormProperties>({
			templateBody: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(0), Validators.maxLength(10240), Validators.pattern('[\s\S]*')]),
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
		 * <p>How long (in seconds) the credentials will be valid. The default value is 3,600 seconds.</p> <p>This value must be less than or equal to the maximum session duration of the IAM role that the role alias references.</p>
		 * Minimum: 900
		 * Maximum: 43200
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
		 * <p>How long (in seconds) the credentials will be valid. The default value is 3,600 seconds.</p> <p>This value must be less than or equal to the maximum session duration of the IAM role that the role alias references.</p>
		 * Minimum: 900
		 * Maximum: 43200
		 */
		credentialDurationSeconds: FormControl<number | null | undefined>,
	}
	export function CreateCreateRoleAliasPostBodyFormGroup() {
		return new FormGroup<CreateRoleAliasPostBodyFormProperties>({
			roleArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(20), Validators.maxLength(2048)]),
			credentialDurationSeconds: new FormControl<number | null | undefined>(undefined, [Validators.min(900), Validators.max(43200)]),
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
		 * <p>The number of seconds the credential will be valid.</p> <p>This value must be less than or equal to the maximum session duration of the IAM role that the role alias references.</p>
		 * Minimum: 900
		 * Maximum: 43200
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
		 * <p>The number of seconds the credential will be valid.</p> <p>This value must be less than or equal to the maximum session duration of the IAM role that the role alias references.</p>
		 * Minimum: 900
		 * Maximum: 43200
		 */
		credentialDurationSeconds: FormControl<number | null | undefined>,
	}
	export function CreateUpdateRoleAliasPutBodyFormGroup() {
		return new FormGroup<UpdateRoleAliasPutBodyFormProperties>({
			roleArn: new FormControl<string | null | undefined>(undefined, [Validators.minLength(20), Validators.maxLength(2048)]),
			credentialDurationSeconds: new FormControl<number | null | undefined>(undefined, [Validators.min(900), Validators.max(43200)]),
		});

	}

	export interface CreateScheduledAuditPostBody {

		/**
		 * How often the scheduled audit takes place, either <code>DAILY</code>, <code>WEEKLY</code>, <code>BIWEEKLY</code> or <code>MONTHLY</code>. The start time of each audit is determined by the system.
		 * Required
		 */
		frequency: AuditFrequency;

		/** The day of the month on which the scheduled audit takes place. This can be "1" through "31" or "LAST". This field is required if the "frequency" parameter is set to <code>MONTHLY</code>. If days 29 to 31 are specified, and the month doesn't have that many days, the audit takes place on the <code>LAST</code> day of the month. */
		dayOfMonth?: string | null;

		/** The day of the week on which the scheduled audit takes place, either <code>SUN</code>, <code>MON</code>, <code>TUE</code>, <code>WED</code>, <code>THU</code>, <code>FRI</code>, or <code>SAT</code>. This field is required if the <code>frequency</code> parameter is set to <code>WEEKLY</code> or <code>BIWEEKLY</code>. */
		dayOfWeek?: DayOfWeek | null;

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
		 * How often the scheduled audit takes place, either <code>DAILY</code>, <code>WEEKLY</code>, <code>BIWEEKLY</code> or <code>MONTHLY</code>. The start time of each audit is determined by the system.
		 * Required
		 */
		frequency: FormControl<AuditFrequency | null | undefined>,

		/** The day of the month on which the scheduled audit takes place. This can be "1" through "31" or "LAST". This field is required if the "frequency" parameter is set to <code>MONTHLY</code>. If days 29 to 31 are specified, and the month doesn't have that many days, the audit takes place on the <code>LAST</code> day of the month. */
		dayOfMonth: FormControl<string | null | undefined>,

		/** The day of the week on which the scheduled audit takes place, either <code>SUN</code>, <code>MON</code>, <code>TUE</code>, <code>WED</code>, <code>THU</code>, <code>FRI</code>, or <code>SAT</code>. This field is required if the <code>frequency</code> parameter is set to <code>WEEKLY</code> or <code>BIWEEKLY</code>. */
		dayOfWeek: FormControl<DayOfWeek | null | undefined>,
	}
	export function CreateCreateScheduledAuditPostBodyFormGroup() {
		return new FormGroup<CreateScheduledAuditPostBodyFormProperties>({
			frequency: new FormControl<AuditFrequency | null | undefined>(undefined, [Validators.required]),
			dayOfMonth: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^([1-9]|[12][0-9]|3[01])$|^LAST$')]),
			dayOfWeek: new FormControl<DayOfWeek | null | undefined>(undefined),
		});

	}

	export interface UpdateScheduledAuditPatchBody {

		/** How often the scheduled audit takes place, either <code>DAILY</code>, <code>WEEKLY</code>, <code>BIWEEKLY</code>, or <code>MONTHLY</code>. The start time of each audit is determined by the system. */
		frequency?: AuditFrequency | null;

		/** The day of the month on which the scheduled audit takes place. This can be <code>1</code> through <code>31</code> or <code>LAST</code>. This field is required if the <code>frequency</code> parameter is set to <code>MONTHLY</code>. If days 29-31 are specified, and the month does not have that many days, the audit takes place on the "LAST" day of the month. */
		dayOfMonth?: string | null;

		/** The day of the week on which the scheduled audit takes place. This can be one of <code>SUN</code>, <code>MON</code>, <code>TUE</code>, <code>WED</code>, <code>THU</code>, <code>FRI</code>, or <code>SAT</code>. This field is required if the "frequency" parameter is set to <code>WEEKLY</code> or <code>BIWEEKLY</code>. */
		dayOfWeek?: DayOfWeek | null;

		/** Which checks are performed during the scheduled audit. Checks must be enabled for your account. (Use <code>DescribeAccountAuditConfiguration</code> to see the list of all checks, including those that are enabled or use <code>UpdateAccountAuditConfiguration</code> to select which checks are enabled.) */
		targetCheckNames?: Array<string>;
	}
	export interface UpdateScheduledAuditPatchBodyFormProperties {

		/** How often the scheduled audit takes place, either <code>DAILY</code>, <code>WEEKLY</code>, <code>BIWEEKLY</code>, or <code>MONTHLY</code>. The start time of each audit is determined by the system. */
		frequency: FormControl<AuditFrequency | null | undefined>,

		/** The day of the month on which the scheduled audit takes place. This can be <code>1</code> through <code>31</code> or <code>LAST</code>. This field is required if the <code>frequency</code> parameter is set to <code>MONTHLY</code>. If days 29-31 are specified, and the month does not have that many days, the audit takes place on the "LAST" day of the month. */
		dayOfMonth: FormControl<string | null | undefined>,

		/** The day of the week on which the scheduled audit takes place. This can be one of <code>SUN</code>, <code>MON</code>, <code>TUE</code>, <code>WED</code>, <code>THU</code>, <code>FRI</code>, or <code>SAT</code>. This field is required if the "frequency" parameter is set to <code>WEEKLY</code> or <code>BIWEEKLY</code>. */
		dayOfWeek: FormControl<DayOfWeek | null | undefined>,
	}
	export function CreateUpdateScheduledAuditPatchBodyFormGroup() {
		return new FormGroup<UpdateScheduledAuditPatchBodyFormProperties>({
			frequency: new FormControl<AuditFrequency | null | undefined>(undefined),
			dayOfMonth: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^([1-9]|[12][0-9]|3[01])$|^LAST$')]),
			dayOfWeek: new FormControl<DayOfWeek | null | undefined>(undefined),
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

		/** <p> <i>Please use <a>CreateSecurityProfileRequest$additionalMetricsToRetainV2</a> instead.</i> </p> <p>A list of metrics whose data is retained (stored). By default, data is retained for any metric used in the profile's <code>behaviors</code>, but it is also retained for any metric specified here. Can be used with custom metrics; cannot be used with dimensions.</p> */
		additionalMetricsToRetain?: Array<string>;

		/** A list of metrics whose data is retained (stored). By default, data is retained for any metric used in the profile's <code>behaviors</code>, but it is also retained for any metric specified here. Can be used with custom metrics; cannot be used with dimensions. */
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

		/** <p> <i>Please use <a>UpdateSecurityProfileRequest$additionalMetricsToRetainV2</a> instead.</i> </p> <p>A list of metrics whose data is retained (stored). By default, data is retained for any metric used in the profile's <code>behaviors</code>, but it is also retained for any metric specified here. Can be used with custom metrics; cannot be used with dimensions.</p> */
		additionalMetricsToRetain?: Array<string>;

		/** A list of metrics whose data is retained (stored). By default, data is retained for any metric used in the profile's behaviors, but it is also retained for any metric specified here. Can be used with custom metrics; cannot be used with dimensions. */
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
		 * An IAM role that allows the IoT service principal to access your S3 files.
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
		 * An IAM role that allows the IoT service principal to access your S3 files.
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
		thingGroupDescription?: string;
		attributePayload?: AttributePayload;
	}
	export interface CreateThingGroupPostBodyThingGroupPropertiesFormProperties {
		thingGroupDescription: FormControl<string | null | undefined>,
	}
	export function CreateCreateThingGroupPostBodyThingGroupPropertiesFormGroup() {
		return new FormGroup<CreateThingGroupPostBodyThingGroupPropertiesFormProperties>({
			thingGroupDescription: new FormControl<string | null | undefined>(undefined),
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
		thingGroupDescription?: string;
		attributePayload?: AttributePayload;
	}
	export interface UpdateThingGroupPatchBodyThingGroupPropertiesFormProperties {
		thingGroupDescription: FormControl<string | null | undefined>,
	}
	export function CreateUpdateThingGroupPatchBodyThingGroupPropertiesFormGroup() {
		return new FormGroup<UpdateThingGroupPatchBodyThingGroupPropertiesFormProperties>({
			thingGroupDescription: new FormControl<string | null | undefined>(undefined),
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
		thingTypeDescription?: string;
		searchableAttributes?: Array<string>;
	}
	export interface CreateThingTypePostBodyThingTypePropertiesFormProperties {
		thingTypeDescription: FormControl<string | null | undefined>,
	}
	export function CreateCreateThingTypePostBodyThingTypePropertiesFormGroup() {
		return new FormGroup<CreateThingTypePostBodyThingTypePropertiesFormProperties>({
			thingTypeDescription: new FormControl<string | null | undefined>(undefined),
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
		sql?: string;
		description?: string;
		actions?: Array<Action>;
		ruleDisabled?: boolean | null;
		awsIotSqlVersion?: string;
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
		sql?: string;
		description?: string;
		actions?: Array<Action>;
		ruleDisabled?: boolean | null;
		awsIotSqlVersion?: string;
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
		httpUrlConfiguration?: HttpUrlDestinationConfiguration;
		vpcConfiguration?: VpcDestinationConfiguration;
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
		 * The Amazon Resource Name (ARN) of the role that grants permission to IoT to access information about your devices, policies, certificates, and other items as required when performing an audit.
		 * Max length: 2048
		 * Min length: 20
		 */
		roleArn?: string | null;

		/** Information about the targets to which audit notifications are sent. */
		auditNotificationTargetConfigurations?: {[id: string]: AuditNotificationTarget };

		/** <p>Specifies which audit checks are enabled and disabled for this account. Use <code>DescribeAccountAuditConfiguration</code> to see the list of all checks, including those that are currently enabled.</p> <p>Some data collection might start immediately when certain checks are enabled. When a check is disabled, any data collected so far in relation to the check is deleted.</p> <p>You cannot disable a check if it's used by any scheduled audit. You must first delete the check from the scheduled audit or delete the scheduled audit itself.</p> <p>On the first call to <code>UpdateAccountAuditConfiguration</code>, this parameter is required and must specify at least one enabled check.</p> */
		auditCheckConfigurations?: {[id: string]: AuditCheckConfiguration };
	}
	export interface UpdateAccountAuditConfigurationPatchBodyFormProperties {

		/**
		 * The Amazon Resource Name (ARN) of the role that grants permission to IoT to access information about your devices, policies, certificates, and other items as required when performing an audit.
		 * Max length: 2048
		 * Min length: 20
		 */
		roleArn: FormControl<string | null | undefined>,

		/** Information about the targets to which audit notifications are sent. */
		auditNotificationTargetConfigurations: FormControl<{[id: string]: AuditNotificationTarget } | null | undefined>,

		/** <p>Specifies which audit checks are enabled and disabled for this account. Use <code>DescribeAccountAuditConfiguration</code> to see the list of all checks, including those that are currently enabled.</p> <p>Some data collection might start immediately when certain checks are enabled. When a check is disabled, any data collected so far in relation to the check is deleted.</p> <p>You cannot disable a check if it's used by any scheduled audit. You must first delete the check from the scheduled audit or delete the scheduled audit itself.</p> <p>On the first call to <code>UpdateAccountAuditConfiguration</code>, this parameter is required and must specify at least one enabled check.</p> */
		auditCheckConfigurations: FormControl<{[id: string]: AuditCheckConfiguration } | null | undefined>,
	}
	export function CreateUpdateAccountAuditConfigurationPatchBodyFormGroup() {
		return new FormGroup<UpdateAccountAuditConfigurationPatchBodyFormProperties>({
			roleArn: new FormControl<string | null | undefined>(undefined, [Validators.minLength(20), Validators.maxLength(2048)]),
			auditNotificationTargetConfigurations: new FormControl<{[id: string]: AuditNotificationTarget } | null | undefined>(undefined),
			auditCheckConfigurations: new FormControl<{[id: string]: AuditCheckConfiguration } | null | undefined>(undefined),
		});

	}

	export interface DeleteAuditSuppressionPostBody {

		/**
		 * An audit check name. Checks must be enabled for your account. (Use <code>DescribeAccountAuditConfiguration</code> to see the list of all checks, including those that are enabled or use <code>UpdateAccountAuditConfiguration</code> to select which checks are enabled.)
		 * Required
		 */
		checkName: string;

		/**
		 * Information that identifies the noncompliant resource.
		 * Required
		 */
		resourceIdentifier: DeleteAuditSuppressionPostBodyResourceIdentifier;
	}
	export interface DeleteAuditSuppressionPostBodyFormProperties {

		/**
		 * An audit check name. Checks must be enabled for your account. (Use <code>DescribeAccountAuditConfiguration</code> to see the list of all checks, including those that are enabled or use <code>UpdateAccountAuditConfiguration</code> to select which checks are enabled.)
		 * Required
		 */
		checkName: FormControl<string | null | undefined>,
	}
	export function CreateDeleteAuditSuppressionPostBodyFormGroup() {
		return new FormGroup<DeleteAuditSuppressionPostBodyFormProperties>({
			checkName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeleteAuditSuppressionPostBodyResourceIdentifier {
		deviceCertificateId?: string;
		caCertificateId?: string;
		cognitoIdentityPoolId?: string;
		clientId?: string;
		policyVersionIdentifier?: PolicyVersionIdentifier;
		account?: string;
		iamRoleArn?: string;
		roleAliasArn?: string;
		issuerCertificateIdentifier?: IssuerCertificateIdentifier;
		deviceCertificateArn?: string;
	}
	export interface DeleteAuditSuppressionPostBodyResourceIdentifierFormProperties {
		deviceCertificateId: FormControl<string | null | undefined>,
		caCertificateId: FormControl<string | null | undefined>,
		cognitoIdentityPoolId: FormControl<string | null | undefined>,
		clientId: FormControl<string | null | undefined>,
		account: FormControl<string | null | undefined>,
		iamRoleArn: FormControl<string | null | undefined>,
		roleAliasArn: FormControl<string | null | undefined>,
		deviceCertificateArn: FormControl<string | null | undefined>,
	}
	export function CreateDeleteAuditSuppressionPostBodyResourceIdentifierFormGroup() {
		return new FormGroup<DeleteAuditSuppressionPostBodyResourceIdentifierFormProperties>({
			deviceCertificateId: new FormControl<string | null | undefined>(undefined),
			caCertificateId: new FormControl<string | null | undefined>(undefined),
			cognitoIdentityPoolId: new FormControl<string | null | undefined>(undefined),
			clientId: new FormControl<string | null | undefined>(undefined),
			account: new FormControl<string | null | undefined>(undefined),
			iamRoleArn: new FormControl<string | null | undefined>(undefined),
			roleAliasArn: new FormControl<string | null | undefined>(undefined),
			deviceCertificateArn: new FormControl<string | null | undefined>(undefined),
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
		templateBody?: string;
		roleArn?: string;
		templateName?: string;
	}
	export interface UpdateCACertificatePutBodyRegistrationConfigFormProperties {
		templateBody: FormControl<string | null | undefined>,
		roleArn: FormControl<string | null | undefined>,
		templateName: FormControl<string | null | undefined>,
	}
	export function CreateUpdateCACertificatePutBodyRegistrationConfigFormGroup() {
		return new FormGroup<UpdateCACertificatePutBodyRegistrationConfigFormProperties>({
			templateBody: new FormControl<string | null | undefined>(undefined),
			roleArn: new FormControl<string | null | undefined>(undefined),
			templateName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateProvisioningTemplatePatchBody {

		/**
		 * The description of the provisioning template.
		 * Max length: 500
		 * Min length: 0
		 */
		description?: string | null;

		/** True to enable the provisioning template, otherwise false. */
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
		 * The description of the provisioning template.
		 * Max length: 500
		 * Min length: 0
		 */
		description: FormControl<string | null | undefined>,

		/** True to enable the provisioning template, otherwise false. */
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
		payloadVersion?: string;
		targetArn?: string;
	}
	export interface UpdateProvisioningTemplatePatchBodyPreProvisioningHookFormProperties {
		payloadVersion: FormControl<string | null | undefined>,
		targetArn: FormControl<string | null | undefined>,
	}
	export function CreateUpdateProvisioningTemplatePatchBodyPreProvisioningHookFormGroup() {
		return new FormGroup<UpdateProvisioningTemplatePatchBodyPreProvisioningHookFormProperties>({
			payloadVersion: new FormControl<string | null | undefined>(undefined),
			targetArn: new FormControl<string | null | undefined>(undefined),
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
		 * For an audit check, specifies which mitigation actions to apply. Those actions must be defined in your Amazon Web Services accounts.
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
		 * For an audit check, specifies which mitigation actions to apply. Those actions must be defined in your Amazon Web Services accounts.
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
		auditTaskId?: string;
		findingIds?: Array<string>;
		auditCheckToReasonCodeFilter?: AuditCheckToReasonCodeFilter;
	}
	export interface StartAuditMitigationActionsTaskPostBodyTargetFormProperties {
		auditTaskId: FormControl<string | null | undefined>,
	}
	export function CreateStartAuditMitigationActionsTaskPostBodyTargetFormGroup() {
		return new FormGroup<StartAuditMitigationActionsTaskPostBodyTargetFormProperties>({
			auditTaskId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeAuditSuppressionPostBody {

		/**
		 * An audit check name. Checks must be enabled for your account. (Use <code>DescribeAccountAuditConfiguration</code> to see the list of all checks, including those that are enabled or use <code>UpdateAccountAuditConfiguration</code> to select which checks are enabled.)
		 * Required
		 */
		checkName: string;

		/**
		 * Information that identifies the noncompliant resource.
		 * Required
		 */
		resourceIdentifier: DescribeAuditSuppressionPostBodyResourceIdentifier;
	}
	export interface DescribeAuditSuppressionPostBodyFormProperties {

		/**
		 * An audit check name. Checks must be enabled for your account. (Use <code>DescribeAccountAuditConfiguration</code> to see the list of all checks, including those that are enabled or use <code>UpdateAccountAuditConfiguration</code> to select which checks are enabled.)
		 * Required
		 */
		checkName: FormControl<string | null | undefined>,
	}
	export function CreateDescribeAuditSuppressionPostBodyFormGroup() {
		return new FormGroup<DescribeAuditSuppressionPostBodyFormProperties>({
			checkName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DescribeAuditSuppressionPostBodyResourceIdentifier {
		deviceCertificateId?: string;
		caCertificateId?: string;
		cognitoIdentityPoolId?: string;
		clientId?: string;
		policyVersionIdentifier?: PolicyVersionIdentifier;
		account?: string;
		iamRoleArn?: string;
		roleAliasArn?: string;
		issuerCertificateIdentifier?: IssuerCertificateIdentifier;
		deviceCertificateArn?: string;
	}
	export interface DescribeAuditSuppressionPostBodyResourceIdentifierFormProperties {
		deviceCertificateId: FormControl<string | null | undefined>,
		caCertificateId: FormControl<string | null | undefined>,
		cognitoIdentityPoolId: FormControl<string | null | undefined>,
		clientId: FormControl<string | null | undefined>,
		account: FormControl<string | null | undefined>,
		iamRoleArn: FormControl<string | null | undefined>,
		roleAliasArn: FormControl<string | null | undefined>,
		deviceCertificateArn: FormControl<string | null | undefined>,
	}
	export function CreateDescribeAuditSuppressionPostBodyResourceIdentifierFormGroup() {
		return new FormGroup<DescribeAuditSuppressionPostBodyResourceIdentifierFormProperties>({
			deviceCertificateId: new FormControl<string | null | undefined>(undefined),
			caCertificateId: new FormControl<string | null | undefined>(undefined),
			cognitoIdentityPoolId: new FormControl<string | null | undefined>(undefined),
			clientId: new FormControl<string | null | undefined>(undefined),
			account: new FormControl<string | null | undefined>(undefined),
			iamRoleArn: new FormControl<string | null | undefined>(undefined),
			roleAliasArn: new FormControl<string | null | undefined>(undefined),
			deviceCertificateArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface StartDetectMitigationActionsTaskPutBody {

		/**
		 * The target of a mitigation action task.
		 * Required
		 */
		target: StartDetectMitigationActionsTaskPutBodyTarget;

		/**
		 * The actions to be performed when a device has unexpected behavior.
		 * Required
		 * Minimum items: 1
		 * Maximum items: 5
		 */
		actions: Array<string>;

		/** Specifies the time period of which violation events occurred between. */
		violationEventOccurrenceRange?: StartDetectMitigationActionsTaskPutBodyViolationEventOccurrenceRange;

		/** Specifies to list only active violations. */
		includeOnlyActiveViolations?: boolean | null;

		/** Specifies to include suppressed alerts. */
		includeSuppressedAlerts?: boolean | null;

		/**
		 * Each mitigation action task must have a unique client request token. If you try to create a new task with the same token as a task that already exists, an exception occurs. If you omit this value, Amazon Web Services SDKs will automatically generate a unique client request.
		 * Required
		 * Max length: 64
		 * Min length: 1
		 */
		clientRequestToken: string;
	}
	export interface StartDetectMitigationActionsTaskPutBodyFormProperties {

		/** Specifies to list only active violations. */
		includeOnlyActiveViolations: FormControl<boolean | null | undefined>,

		/** Specifies to include suppressed alerts. */
		includeSuppressedAlerts: FormControl<boolean | null | undefined>,

		/**
		 * Each mitigation action task must have a unique client request token. If you try to create a new task with the same token as a task that already exists, an exception occurs. If you omit this value, Amazon Web Services SDKs will automatically generate a unique client request.
		 * Required
		 * Max length: 64
		 * Min length: 1
		 */
		clientRequestToken: FormControl<string | null | undefined>,
	}
	export function CreateStartDetectMitigationActionsTaskPutBodyFormGroup() {
		return new FormGroup<StartDetectMitigationActionsTaskPutBodyFormProperties>({
			includeOnlyActiveViolations: new FormControl<boolean | null | undefined>(undefined),
			includeSuppressedAlerts: new FormControl<boolean | null | undefined>(undefined),
			clientRequestToken: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(64), Validators.pattern('^[a-zA-Z0-9-_]+$')]),
		});

	}

	export interface StartDetectMitigationActionsTaskPutBodyTarget {
		violationIds?: Array<string>;
		securityProfileName?: string;
		behaviorName?: string;
	}
	export interface StartDetectMitigationActionsTaskPutBodyTargetFormProperties {
		securityProfileName: FormControl<string | null | undefined>,
		behaviorName: FormControl<string | null | undefined>,
	}
	export function CreateStartDetectMitigationActionsTaskPutBodyTargetFormGroup() {
		return new FormGroup<StartDetectMitigationActionsTaskPutBodyTargetFormProperties>({
			securityProfileName: new FormControl<string | null | undefined>(undefined),
			behaviorName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface StartDetectMitigationActionsTaskPutBodyViolationEventOccurrenceRange {
		startTime?: Date;
		endTime?: Date;
	}
	export interface StartDetectMitigationActionsTaskPutBodyViolationEventOccurrenceRangeFormProperties {
		startTime: FormControl<Date | null | undefined>,
		endTime: FormControl<Date | null | undefined>,
	}
	export function CreateStartDetectMitigationActionsTaskPutBodyViolationEventOccurrenceRangeFormGroup() {
		return new FormGroup<StartDetectMitigationActionsTaskPutBodyViolationEventOccurrenceRangeFormProperties>({
			startTime: new FormControl<Date | null | undefined>(undefined),
			endTime: new FormControl<Date | null | undefined>(undefined),
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

	export interface GetBucketsAggregationPostBody {

		/**
		 * The name of the index to search.
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

		/**
		 * The aggregation field.
		 * Required
		 * Min length: 1
		 */
		aggregationField: string;

		/** The version of the query. */
		queryVersion?: string | null;

		/**
		 * The type of bucketed aggregation performed.
		 * Required
		 */
		bucketsAggregationType: GetBucketsAggregationPostBodyBucketsAggregationType;
	}
	export interface GetBucketsAggregationPostBodyFormProperties {

		/**
		 * The name of the index to search.
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

		/**
		 * The aggregation field.
		 * Required
		 * Min length: 1
		 */
		aggregationField: FormControl<string | null | undefined>,

		/** The version of the query. */
		queryVersion: FormControl<string | null | undefined>,
	}
	export function CreateGetBucketsAggregationPostBodyFormGroup() {
		return new FormGroup<GetBucketsAggregationPostBodyFormProperties>({
			indexName: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(128), Validators.pattern('[a-zA-Z0-9:_-]+')]),
			queryString: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1)]),
			aggregationField: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1)]),
			queryVersion: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetBucketsAggregationPostBodyBucketsAggregationType {
		termsAggregation?: TermsAggregation;
	}
	export interface GetBucketsAggregationPostBodyBucketsAggregationTypeFormProperties {
	}
	export function CreateGetBucketsAggregationPostBodyBucketsAggregationTypeFormGroup() {
		return new FormGroup<GetBucketsAggregationPostBodyBucketsAggregationTypeFormProperties>({
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
		 * The search query string.
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
		 * The search query string.
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

		/** The principal. Valid principals are CertificateArn (arn:aws:iot:<i>region</i>:<i>accountId</i>:cert/<i>certificateId</i>), thingGroupArn (arn:aws:iot:<i>region</i>:<i>accountId</i>:thinggroup/<i>groupName</i>) and CognitoId (<i>region</i>:<i>id</i>). */
		principal?: string | null;

		/** The Cognito identity pool ID. */
		cognitoIdentityPoolId?: string | null;
	}
	export interface GetEffectivePoliciesPostBodyFormProperties {

		/** The principal. Valid principals are CertificateArn (arn:aws:iot:<i>region</i>:<i>accountId</i>:cert/<i>certificateId</i>), thingGroupArn (arn:aws:iot:<i>region</i>:<i>accountId</i>:thinggroup/<i>groupName</i>) and CognitoId (<i>region</i>:<i>id</i>). */
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
		thingIndexingMode?: ThingIndexingMode;
		thingConnectivityIndexingMode?: ThingConnectivityIndexingMode;
		deviceDefenderIndexingMode?: DeviceDefenderIndexingMode;
		namedShadowIndexingMode?: NamedShadowIndexingMode;
		managedFields?: Array<Field>;
		customFields?: Array<Field>;
		filter?: IndexingFilter;
	}
	export interface UpdateIndexingConfigurationPostBodyThingIndexingConfigurationFormProperties {
		thingIndexingMode: FormControl<ThingIndexingMode | null | undefined>,
		thingConnectivityIndexingMode: FormControl<ThingConnectivityIndexingMode | null | undefined>,
		deviceDefenderIndexingMode: FormControl<DeviceDefenderIndexingMode | null | undefined>,
		namedShadowIndexingMode: FormControl<NamedShadowIndexingMode | null | undefined>,
	}
	export function CreateUpdateIndexingConfigurationPostBodyThingIndexingConfigurationFormGroup() {
		return new FormGroup<UpdateIndexingConfigurationPostBodyThingIndexingConfigurationFormProperties>({
			thingIndexingMode: new FormControl<ThingIndexingMode | null | undefined>(undefined),
			thingConnectivityIndexingMode: new FormControl<ThingConnectivityIndexingMode | null | undefined>(undefined),
			deviceDefenderIndexingMode: new FormControl<DeviceDefenderIndexingMode | null | undefined>(undefined),
			namedShadowIndexingMode: new FormControl<NamedShadowIndexingMode | null | undefined>(undefined),
		});

	}

	export interface UpdateIndexingConfigurationPostBodyThingGroupIndexingConfiguration {
		thingGroupIndexingMode?: NamedShadowIndexingMode;
		managedFields?: Array<Field>;
		customFields?: Array<Field>;
	}
	export interface UpdateIndexingConfigurationPostBodyThingGroupIndexingConfigurationFormProperties {
		thingGroupIndexingMode: FormControl<NamedShadowIndexingMode | null | undefined>,
	}
	export function CreateUpdateIndexingConfigurationPostBodyThingGroupIndexingConfigurationFormGroup() {
		return new FormGroup<UpdateIndexingConfigurationPostBodyThingGroupIndexingConfigurationFormProperties>({
			thingGroupIndexingMode: new FormControl<NamedShadowIndexingMode | null | undefined>(undefined),
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
		roleArn?: string;
		logLevel?: LogLevel;
	}
	export interface SetLoggingOptionsPostBodyLoggingOptionsPayloadFormProperties {
		roleArn: FormControl<string | null | undefined>,
		logLevel: FormControl<LogLevel | null | undefined>,
	}
	export function CreateSetLoggingOptionsPostBodyLoggingOptionsPayloadFormGroup() {
		return new FormGroup<SetLoggingOptionsPostBodyLoggingOptionsPayloadFormProperties>({
			roleArn: new FormControl<string | null | undefined>(undefined),
			logLevel: new FormControl<LogLevel | null | undefined>(undefined),
		});

	}

	export interface UpdatePackageConfigurationPatchBody {

		/** <p>Configuration to manage IoT Job's package version reporting. If configured, Jobs updates the thing's reserved named shadow with the package version information up on successful job completion.</p> <p> <b>Note:</b> For each job, the destinationPackageVersions attribute has to be set with the correct data for Jobs to report to the thing shadow. </p> */
		versionUpdateByJobsConfig?: UpdatePackageConfigurationPatchBodyVersionUpdateByJobsConfig;
	}
	export interface UpdatePackageConfigurationPatchBodyFormProperties {
	}
	export function CreateUpdatePackageConfigurationPatchBodyFormGroup() {
		return new FormGroup<UpdatePackageConfigurationPatchBodyFormProperties>({
		});

	}

	export interface UpdatePackageConfigurationPatchBodyVersionUpdateByJobsConfig {
		enabled?: boolean | null;
		roleArn?: string;
	}
	export interface UpdatePackageConfigurationPatchBodyVersionUpdateByJobsConfigFormProperties {
		enabled: FormControl<boolean | null | undefined>,
		roleArn: FormControl<string | null | undefined>,
	}
	export function CreateUpdatePackageConfigurationPatchBodyVersionUpdateByJobsConfigFormGroup() {
		return new FormGroup<UpdatePackageConfigurationPatchBodyVersionUpdateByJobsConfigFormProperties>({
			enabled: new FormControl<boolean | null | undefined>(undefined),
			roleArn: new FormControl<string | null | undefined>(undefined),
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
		 * The search query string.
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
		 * The search query string.
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
		 * The query used to search. You can specify "*" for the query string to get the count of all indexed things in your Amazon Web Services account.
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
		 * The query used to search. You can specify "*" for the query string to get the count of all indexed things in your Amazon Web Services account.
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
		defaultLogLevel?: LogLevel | null;

		/** If true all logs are disabled. The default is false. */
		disableAllLogs?: boolean | null;
	}
	export interface SetV2LoggingOptionsPostBodyFormProperties {

		/** The ARN of the role that allows IoT to write to Cloudwatch logs. */
		roleArn: FormControl<string | null | undefined>,

		/** The default logging level. */
		defaultLogLevel: FormControl<LogLevel | null | undefined>,

		/** If true all logs are disabled. The default is false. */
		disableAllLogs: FormControl<boolean | null | undefined>,
	}
	export function CreateSetV2LoggingOptionsPostBodyFormGroup() {
		return new FormGroup<SetV2LoggingOptionsPostBodyFormProperties>({
			roleArn: new FormControl<string | null | undefined>(undefined),
			defaultLogLevel: new FormControl<LogLevel | null | undefined>(undefined),
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

		/** Boolean flag indicating whether only the suppressed findings or the unsuppressed findings should be listed. If this parameter isn't provided, the response will list both suppressed and unsuppressed findings. */
		listSuppressedFindings?: boolean | null;
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

		/** Boolean flag indicating whether only the suppressed findings or the unsuppressed findings should be listed. If this parameter isn't provided, the response will list both suppressed and unsuppressed findings. */
		listSuppressedFindings: FormControl<boolean | null | undefined>,
	}
	export function CreateListAuditFindingsPostBodyFormGroup() {
		return new FormGroup<ListAuditFindingsPostBodyFormProperties>({
			taskId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(40), Validators.pattern('[a-zA-Z0-9\-]+')]),
			checkName: new FormControl<string | null | undefined>(undefined),
			maxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(250)]),
			nextToken: new FormControl<string | null | undefined>(undefined),
			startTime: new FormControl<Date | null | undefined>(undefined),
			endTime: new FormControl<Date | null | undefined>(undefined),
			listSuppressedFindings: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface ListAuditFindingsPostBodyResourceIdentifier {
		deviceCertificateId?: string;
		caCertificateId?: string;
		cognitoIdentityPoolId?: string;
		clientId?: string;
		policyVersionIdentifier?: PolicyVersionIdentifier;
		account?: string;
		iamRoleArn?: string;
		roleAliasArn?: string;
		issuerCertificateIdentifier?: IssuerCertificateIdentifier;
		deviceCertificateArn?: string;
	}
	export interface ListAuditFindingsPostBodyResourceIdentifierFormProperties {
		deviceCertificateId: FormControl<string | null | undefined>,
		caCertificateId: FormControl<string | null | undefined>,
		cognitoIdentityPoolId: FormControl<string | null | undefined>,
		clientId: FormControl<string | null | undefined>,
		account: FormControl<string | null | undefined>,
		iamRoleArn: FormControl<string | null | undefined>,
		roleAliasArn: FormControl<string | null | undefined>,
		deviceCertificateArn: FormControl<string | null | undefined>,
	}
	export function CreateListAuditFindingsPostBodyResourceIdentifierFormGroup() {
		return new FormGroup<ListAuditFindingsPostBodyResourceIdentifierFormProperties>({
			deviceCertificateId: new FormControl<string | null | undefined>(undefined),
			caCertificateId: new FormControl<string | null | undefined>(undefined),
			cognitoIdentityPoolId: new FormControl<string | null | undefined>(undefined),
			clientId: new FormControl<string | null | undefined>(undefined),
			account: new FormControl<string | null | undefined>(undefined),
			iamRoleArn: new FormControl<string | null | undefined>(undefined),
			roleAliasArn: new FormControl<string | null | undefined>(undefined),
			deviceCertificateArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListAuditSuppressionsPostBody {

		/** An audit check name. Checks must be enabled for your account. (Use <code>DescribeAccountAuditConfiguration</code> to see the list of all checks, including those that are enabled or use <code>UpdateAccountAuditConfiguration</code> to select which checks are enabled.) */
		checkName?: string | null;

		/** Information that identifies the noncompliant resource. */
		resourceIdentifier?: ListAuditSuppressionsPostBodyResourceIdentifier;

		/** Determines whether suppressions are listed in ascending order by expiration date or not. If parameter isn't provided, <code>ascendingOrder=true</code>. */
		ascendingOrder?: boolean | null;

		/** The token for the next set of results. */
		nextToken?: string | null;

		/**
		 * The maximum number of results to return at one time. The default is 25.
		 * Minimum: 1
		 * Maximum: 250
		 */
		maxResults?: number | null;
	}
	export interface ListAuditSuppressionsPostBodyFormProperties {

		/** An audit check name. Checks must be enabled for your account. (Use <code>DescribeAccountAuditConfiguration</code> to see the list of all checks, including those that are enabled or use <code>UpdateAccountAuditConfiguration</code> to select which checks are enabled.) */
		checkName: FormControl<string | null | undefined>,

		/** Determines whether suppressions are listed in ascending order by expiration date or not. If parameter isn't provided, <code>ascendingOrder=true</code>. */
		ascendingOrder: FormControl<boolean | null | undefined>,

		/** The token for the next set of results. */
		nextToken: FormControl<string | null | undefined>,

		/**
		 * The maximum number of results to return at one time. The default is 25.
		 * Minimum: 1
		 * Maximum: 250
		 */
		maxResults: FormControl<number | null | undefined>,
	}
	export function CreateListAuditSuppressionsPostBodyFormGroup() {
		return new FormGroup<ListAuditSuppressionsPostBodyFormProperties>({
			checkName: new FormControl<string | null | undefined>(undefined),
			ascendingOrder: new FormControl<boolean | null | undefined>(undefined),
			nextToken: new FormControl<string | null | undefined>(undefined),
			maxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(250)]),
		});

	}

	export interface ListAuditSuppressionsPostBodyResourceIdentifier {
		deviceCertificateId?: string;
		caCertificateId?: string;
		cognitoIdentityPoolId?: string;
		clientId?: string;
		policyVersionIdentifier?: PolicyVersionIdentifier;
		account?: string;
		iamRoleArn?: string;
		roleAliasArn?: string;
		issuerCertificateIdentifier?: IssuerCertificateIdentifier;
		deviceCertificateArn?: string;
	}
	export interface ListAuditSuppressionsPostBodyResourceIdentifierFormProperties {
		deviceCertificateId: FormControl<string | null | undefined>,
		caCertificateId: FormControl<string | null | undefined>,
		cognitoIdentityPoolId: FormControl<string | null | undefined>,
		clientId: FormControl<string | null | undefined>,
		account: FormControl<string | null | undefined>,
		iamRoleArn: FormControl<string | null | undefined>,
		roleAliasArn: FormControl<string | null | undefined>,
		deviceCertificateArn: FormControl<string | null | undefined>,
	}
	export function CreateListAuditSuppressionsPostBodyResourceIdentifierFormGroup() {
		return new FormGroup<ListAuditSuppressionsPostBodyResourceIdentifierFormProperties>({
			deviceCertificateId: new FormControl<string | null | undefined>(undefined),
			caCertificateId: new FormControl<string | null | undefined>(undefined),
			cognitoIdentityPoolId: new FormControl<string | null | undefined>(undefined),
			clientId: new FormControl<string | null | undefined>(undefined),
			account: new FormControl<string | null | undefined>(undefined),
			iamRoleArn: new FormControl<string | null | undefined>(undefined),
			roleAliasArn: new FormControl<string | null | undefined>(undefined),
			deviceCertificateArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface StartThingRegistrationTaskPostBody {

		/**
		 * The provisioning template.
		 * Required
		 * Max length: 10240
		 * Min length: 0
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
		 * Max length: 10240
		 * Min length: 0
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
			templateBody: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(0), Validators.maxLength(10240), Validators.pattern('[\s\S]*')]),
			inputFileBucket: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(3), Validators.maxLength(256), Validators.pattern('[a-zA-Z0-9._-]+')]),
			inputFileKey: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(1024), Validators.pattern('[a-zA-Z0-9!_.*\'()-\/]+')]),
			roleArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(20), Validators.maxLength(2048)]),
		});

	}

	export interface RegisterThingPostBody {

		/**
		 * The provisioning template. See <a href="https://docs.aws.amazon.com/iot/latest/developerguide/provision-w-cert.html">Provisioning Devices That Have Device Certificates</a> for more information.
		 * Required
		 * Max length: 10240
		 * Min length: 0
		 */
		templateBody: string;

		/** The parameters for provisioning a thing. See <a href="https://docs.aws.amazon.com/iot/latest/developerguide/provision-template.html">Provisioning Templates</a> for more information. */
		parameters?: {[id: string]: string };
	}
	export interface RegisterThingPostBodyFormProperties {

		/**
		 * The provisioning template. See <a href="https://docs.aws.amazon.com/iot/latest/developerguide/provision-w-cert.html">Provisioning Devices That Have Device Certificates</a> for more information.
		 * Required
		 * Max length: 10240
		 * Min length: 0
		 */
		templateBody: FormControl<string | null | undefined>,

		/** The parameters for provisioning a thing. See <a href="https://docs.aws.amazon.com/iot/latest/developerguide/provision-template.html">Provisioning Templates</a> for more information. */
		parameters: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateRegisterThingPostBodyFormGroup() {
		return new FormGroup<RegisterThingPostBodyFormProperties>({
			templateBody: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(0), Validators.maxLength(10240), Validators.pattern('[\s\S]*')]),
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
		logLevel: LogLevel;
	}
	export interface SetV2LoggingLevelPostBodyFormProperties {

		/**
		 * The log level.
		 * Required
		 */
		logLevel: FormControl<LogLevel | null | undefined>,
	}
	export function CreateSetV2LoggingLevelPostBodyFormGroup() {
		return new FormGroup<SetV2LoggingLevelPostBodyFormProperties>({
			logLevel: new FormControl<LogLevel | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface SetV2LoggingLevelPostBodyLogTarget {
		targetType?: LogTargetType;
		targetName?: string;
	}
	export interface SetV2LoggingLevelPostBodyLogTargetFormProperties {
		targetType: FormControl<LogTargetType | null | undefined>,
		targetName: FormControl<string | null | undefined>,
	}
	export function CreateSetV2LoggingLevelPostBodyLogTargetFormGroup() {
		return new FormGroup<SetV2LoggingLevelPostBodyLogTargetFormProperties>({
			targetType: new FormControl<LogTargetType | null | undefined>(undefined),
			targetName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PutVerificationStateOnViolationPostBody {

		/**
		 * The verification state of the violation.
		 * Required
		 */
		verificationState: VerificationState;

		/**
		 * The description of the verification state of the violation (detect alarm).
		 * Max length: 1000
		 */
		verificationStateDescription?: string | null;
	}
	export interface PutVerificationStateOnViolationPostBodyFormProperties {

		/**
		 * The verification state of the violation.
		 * Required
		 */
		verificationState: FormControl<VerificationState | null | undefined>,

		/**
		 * The description of the verification state of the violation (detect alarm).
		 * Max length: 1000
		 */
		verificationStateDescription: FormControl<string | null | undefined>,
	}
	export function CreatePutVerificationStateOnViolationPostBodyFormGroup() {
		return new FormGroup<PutVerificationStateOnViolationPostBodyFormProperties>({
			verificationState: new FormControl<VerificationState | null | undefined>(undefined, [Validators.required]),
			verificationStateDescription: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(1000), Validators.pattern('[^\p{Cntrl}]*')]),
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
		 * Max length: 65536
		 * Min length: 1
		 */
		verificationCertificate?: string | null;

		/** The registration configuration. */
		registrationConfig?: RegisterCACertificatePostBodyRegistrationConfig;

		/** <p>Metadata which can be used to manage the CA certificate.</p> <note> <p>For URI Request parameters use format: ...key1=value1&amp;key2=value2...</p> <p>For the CLI command-line parameter use format: &amp;&amp;tags "key1=value1&amp;key2=value2..."</p> <p>For the cli-input-json file use format: "tags": "key1=value1&amp;key2=value2..."</p> </note> */
		tags?: Array<Tag>;

		/** Describes the certificate mode in which the Certificate Authority (CA) will be registered. If the <code>verificationCertificate</code> field is not provided, set <code>certificateMode</code> to be <code>SNI_ONLY</code>. If the <code>verificationCertificate</code> field is provided, set <code>certificateMode</code> to be <code>DEFAULT</code>. When <code>certificateMode</code> is not provided, it defaults to <code>DEFAULT</code>. All the device certificates that are registered using this CA will be registered in the same certificate mode as the CA. For more information about certificate mode for device certificates, see <a href="https://docs.aws.amazon.com/iot/latest/apireference/API_CertificateDescription.html#iot-Type-CertificateDescription-certificateMode"> certificate mode</a>. */
		certificateMode?: CertificateMode | null;
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
		 * Max length: 65536
		 * Min length: 1
		 */
		verificationCertificate: FormControl<string | null | undefined>,

		/** Describes the certificate mode in which the Certificate Authority (CA) will be registered. If the <code>verificationCertificate</code> field is not provided, set <code>certificateMode</code> to be <code>SNI_ONLY</code>. If the <code>verificationCertificate</code> field is provided, set <code>certificateMode</code> to be <code>DEFAULT</code>. When <code>certificateMode</code> is not provided, it defaults to <code>DEFAULT</code>. All the device certificates that are registered using this CA will be registered in the same certificate mode as the CA. For more information about certificate mode for device certificates, see <a href="https://docs.aws.amazon.com/iot/latest/apireference/API_CertificateDescription.html#iot-Type-CertificateDescription-certificateMode"> certificate mode</a>. */
		certificateMode: FormControl<CertificateMode | null | undefined>,
	}
	export function CreateRegisterCACertificatePostBodyFormGroup() {
		return new FormGroup<RegisterCACertificatePostBodyFormProperties>({
			caCertificate: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(65536), Validators.pattern('[\s\S]*')]),
			verificationCertificate: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(65536), Validators.pattern('[\s\S]*')]),
			certificateMode: new FormControl<CertificateMode | null | undefined>(undefined),
		});

	}

	export interface RegisterCACertificatePostBodyRegistrationConfig {
		templateBody?: string;
		roleArn?: string;
		templateName?: string;
	}
	export interface RegisterCACertificatePostBodyRegistrationConfigFormProperties {
		templateBody: FormControl<string | null | undefined>,
		roleArn: FormControl<string | null | undefined>,
		templateName: FormControl<string | null | undefined>,
	}
	export function CreateRegisterCACertificatePostBodyRegistrationConfigFormGroup() {
		return new FormGroup<RegisterCACertificatePostBodyRegistrationConfigFormProperties>({
			templateBody: new FormControl<string | null | undefined>(undefined),
			roleArn: new FormControl<string | null | undefined>(undefined),
			templateName: new FormControl<string | null | undefined>(undefined),
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

		/** The status of the register certificate request. Valid values that you can use include <code>ACTIVE</code>, <code>INACTIVE</code>, and <code>REVOKED</code>. */
		status?: CertificateStatus | null;
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

		/** The status of the register certificate request. Valid values that you can use include <code>ACTIVE</code>, <code>INACTIVE</code>, and <code>REVOKED</code>. */
		status: FormControl<CertificateStatus | null | undefined>,
	}
	export function CreateRegisterCertificatePostBodyFormGroup() {
		return new FormGroup<RegisterCertificatePostBodyFormProperties>({
			certificatePem: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(65536), Validators.pattern('[\s\S]*')]),
			caCertificatePem: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(65536), Validators.pattern('[\s\S]*')]),
			status: new FormControl<CertificateStatus | null | undefined>(undefined),
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
		status?: CertificateStatus | null;
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
		status: FormControl<CertificateStatus | null | undefined>,
	}
	export function CreateRegisterCertificateWithoutCAPostBodyFormGroup() {
		return new FormGroup<RegisterCertificateWithoutCAPostBodyFormProperties>({
			certificatePem: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(65536), Validators.pattern('[\s\S]*')]),
			status: new FormControl<CertificateStatus | null | undefined>(undefined),
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
			rejectReason: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(128), Validators.pattern('[\s\S]*')]),
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
		 * The search query string. For more information about the search query syntax, see <a href="https://docs.aws.amazon.com/iot/latest/developerguide/query-syntax.html">Query syntax</a>.
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
		 * The search query string. For more information about the search query syntax, see <a href="https://docs.aws.amazon.com/iot/latest/developerguide/query-syntax.html">Query syntax</a>.
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

		/** The principal. Valid principals are CertificateArn (arn:aws:iot:<i>region</i>:<i>accountId</i>:cert/<i>certificateId</i>), thingGroupArn (arn:aws:iot:<i>region</i>:<i>accountId</i>:thinggroup/<i>groupName</i>) and CognitoId (<i>region</i>:<i>id</i>). */
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

		/** The principal. Valid principals are CertificateArn (arn:aws:iot:<i>region</i>:<i>accountId</i>:cert/<i>certificateId</i>), thingGroupArn (arn:aws:iot:<i>region</i>:<i>accountId</i>:thinggroup/<i>groupName</i>) and CognitoId (<i>region</i>:<i>id</i>). */
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
			token: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(6144), Validators.pattern('[\s\S]*')]),
			tokenSignature: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(2560), Validators.pattern('[A-Za-z0-9+/]+={0,2}')]),
		});

	}

	export interface TestInvokeAuthorizerPostBodyHttpContext {
		headers?: HttpHeaders;
		queryString?: string;
	}
	export interface TestInvokeAuthorizerPostBodyHttpContextFormProperties {
		queryString: FormControl<string | null | undefined>,
	}
	export function CreateTestInvokeAuthorizerPostBodyHttpContextFormGroup() {
		return new FormGroup<TestInvokeAuthorizerPostBodyHttpContextFormProperties>({
			queryString: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface TestInvokeAuthorizerPostBodyMqttContext {
		username?: string;
		password?: string;
		clientId?: string;
	}
	export interface TestInvokeAuthorizerPostBodyMqttContextFormProperties {
		username: FormControl<string | null | undefined>,
		password: FormControl<string | null | undefined>,
		clientId: FormControl<string | null | undefined>,
	}
	export function CreateTestInvokeAuthorizerPostBodyMqttContextFormGroup() {
		return new FormGroup<TestInvokeAuthorizerPostBodyMqttContextFormProperties>({
			username: new FormControl<string | null | undefined>(undefined),
			password: new FormControl<string | null | undefined>(undefined),
			clientId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface TestInvokeAuthorizerPostBodyTlsContext {
		serverName?: string;
	}
	export interface TestInvokeAuthorizerPostBodyTlsContextFormProperties {
		serverName: FormControl<string | null | undefined>,
	}
	export function CreateTestInvokeAuthorizerPostBodyTlsContextFormGroup() {
		return new FormGroup<TestInvokeAuthorizerPostBodyTlsContextFormProperties>({
			serverName: new FormControl<string | null | undefined>(undefined),
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
			transferMessage: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(128), Validators.pattern('[\s\S]*')]),
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

	export interface UpdateAuditSuppressionPatchBody {

		/**
		 * An audit check name. Checks must be enabled for your account. (Use <code>DescribeAccountAuditConfiguration</code> to see the list of all checks, including those that are enabled or use <code>UpdateAccountAuditConfiguration</code> to select which checks are enabled.)
		 * Required
		 */
		checkName: string;

		/**
		 * Information that identifies the noncompliant resource.
		 * Required
		 */
		resourceIdentifier: UpdateAuditSuppressionPatchBodyResourceIdentifier;

		/** The expiration date (epoch timestamp in seconds) that you want the suppression to adhere to. */
		expirationDate?: Date | null;

		/** Indicates whether a suppression should exist indefinitely or not. */
		suppressIndefinitely?: boolean | null;

		/**
		 * The description of the audit suppression.
		 * Max length: 1000
		 */
		description?: string | null;
	}
	export interface UpdateAuditSuppressionPatchBodyFormProperties {

		/**
		 * An audit check name. Checks must be enabled for your account. (Use <code>DescribeAccountAuditConfiguration</code> to see the list of all checks, including those that are enabled or use <code>UpdateAccountAuditConfiguration</code> to select which checks are enabled.)
		 * Required
		 */
		checkName: FormControl<string | null | undefined>,

		/** The expiration date (epoch timestamp in seconds) that you want the suppression to adhere to. */
		expirationDate: FormControl<Date | null | undefined>,

		/** Indicates whether a suppression should exist indefinitely or not. */
		suppressIndefinitely: FormControl<boolean | null | undefined>,

		/**
		 * The description of the audit suppression.
		 * Max length: 1000
		 */
		description: FormControl<string | null | undefined>,
	}
	export function CreateUpdateAuditSuppressionPatchBodyFormGroup() {
		return new FormGroup<UpdateAuditSuppressionPatchBodyFormProperties>({
			checkName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			expirationDate: new FormControl<Date | null | undefined>(undefined),
			suppressIndefinitely: new FormControl<boolean | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(1000), Validators.pattern('[\p{Graph}\x20]*')]),
		});

	}

	export interface UpdateAuditSuppressionPatchBodyResourceIdentifier {
		deviceCertificateId?: string;
		caCertificateId?: string;
		cognitoIdentityPoolId?: string;
		clientId?: string;
		policyVersionIdentifier?: PolicyVersionIdentifier;
		account?: string;
		iamRoleArn?: string;
		roleAliasArn?: string;
		issuerCertificateIdentifier?: IssuerCertificateIdentifier;
		deviceCertificateArn?: string;
	}
	export interface UpdateAuditSuppressionPatchBodyResourceIdentifierFormProperties {
		deviceCertificateId: FormControl<string | null | undefined>,
		caCertificateId: FormControl<string | null | undefined>,
		cognitoIdentityPoolId: FormControl<string | null | undefined>,
		clientId: FormControl<string | null | undefined>,
		account: FormControl<string | null | undefined>,
		iamRoleArn: FormControl<string | null | undefined>,
		roleAliasArn: FormControl<string | null | undefined>,
		deviceCertificateArn: FormControl<string | null | undefined>,
	}
	export function CreateUpdateAuditSuppressionPatchBodyResourceIdentifierFormGroup() {
		return new FormGroup<UpdateAuditSuppressionPatchBodyResourceIdentifierFormProperties>({
			deviceCertificateId: new FormControl<string | null | undefined>(undefined),
			caCertificateId: new FormControl<string | null | undefined>(undefined),
			cognitoIdentityPoolId: new FormControl<string | null | undefined>(undefined),
			clientId: new FormControl<string | null | undefined>(undefined),
			account: new FormControl<string | null | undefined>(undefined),
			iamRoleArn: new FormControl<string | null | undefined>(undefined),
			roleAliasArn: new FormControl<string | null | undefined>(undefined),
			deviceCertificateArn: new FormControl<string | null | undefined>(undefined),
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

