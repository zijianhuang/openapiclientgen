import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** Represents the output of an AcknowledgeJob action. */
	export interface AcknowledgeJobOutput {
		status?: JobStatus;
	}

	/** Represents the output of an AcknowledgeJob action. */
	export interface AcknowledgeJobOutputFormProperties {
		status: FormControl<JobStatus | null | undefined>,
	}
	export function CreateAcknowledgeJobOutputFormGroup() {
		return new FormGroup<AcknowledgeJobOutputFormProperties>({
			status: new FormControl<JobStatus | null | undefined>(undefined),
		});

	}

	export enum JobStatus { Created = 0, Queued = 1, Dispatched = 2, InProgress = 3, TimedOut = 4, Succeeded = 5, Failed = 6 }


	/** Represents the input of an AcknowledgeJob action. */
	export interface AcknowledgeJobInput {

		/** Required */
		jobId: string;

		/** Required */
		nonce: string;
	}

	/** Represents the input of an AcknowledgeJob action. */
	export interface AcknowledgeJobInputFormProperties {

		/** Required */
		jobId: FormControl<string | null | undefined>,

		/** Required */
		nonce: FormControl<string | null | undefined>,
	}
	export function CreateAcknowledgeJobInputFormGroup() {
		return new FormGroup<AcknowledgeJobInputFormProperties>({
			jobId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			nonce: new FormControl<string | null | undefined>(undefined, [Validators.required]),
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

	export interface InvalidNonceException {
	}
	export interface InvalidNonceExceptionFormProperties {
	}
	export function CreateInvalidNonceExceptionFormGroup() {
		return new FormGroup<InvalidNonceExceptionFormProperties>({
		});

	}

	export interface JobNotFoundException {
	}
	export interface JobNotFoundExceptionFormProperties {
	}
	export function CreateJobNotFoundExceptionFormGroup() {
		return new FormGroup<JobNotFoundExceptionFormProperties>({
		});

	}


	/** Represents the output of an AcknowledgeThirdPartyJob action. */
	export interface AcknowledgeThirdPartyJobOutput {
		status?: JobStatus;
	}

	/** Represents the output of an AcknowledgeThirdPartyJob action. */
	export interface AcknowledgeThirdPartyJobOutputFormProperties {
		status: FormControl<JobStatus | null | undefined>,
	}
	export function CreateAcknowledgeThirdPartyJobOutputFormGroup() {
		return new FormGroup<AcknowledgeThirdPartyJobOutputFormProperties>({
			status: new FormControl<JobStatus | null | undefined>(undefined),
		});

	}


	/** Represents the input of an AcknowledgeThirdPartyJob action. */
	export interface AcknowledgeThirdPartyJobInput {

		/** Required */
		jobId: string;

		/** Required */
		nonce: string;

		/** Required */
		clientToken: string;
	}

	/** Represents the input of an AcknowledgeThirdPartyJob action. */
	export interface AcknowledgeThirdPartyJobInputFormProperties {

		/** Required */
		jobId: FormControl<string | null | undefined>,

		/** Required */
		nonce: FormControl<string | null | undefined>,

		/** Required */
		clientToken: FormControl<string | null | undefined>,
	}
	export function CreateAcknowledgeThirdPartyJobInputFormGroup() {
		return new FormGroup<AcknowledgeThirdPartyJobInputFormProperties>({
			jobId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			nonce: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			clientToken: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface InvalidClientTokenException {
	}
	export interface InvalidClientTokenExceptionFormProperties {
	}
	export function CreateInvalidClientTokenExceptionFormGroup() {
		return new FormGroup<InvalidClientTokenExceptionFormProperties>({
		});

	}


	/** Represents the output of a <code>CreateCustomActionType</code> operation. */
	export interface CreateCustomActionTypeOutput {

		/** Required */
		actionType: ActionType;
		tags?: Array<Tag>;
	}

	/** Represents the output of a <code>CreateCustomActionType</code> operation. */
	export interface CreateCustomActionTypeOutputFormProperties {
	}
	export function CreateCreateCustomActionTypeOutputFormGroup() {
		return new FormGroup<CreateCustomActionTypeOutputFormProperties>({
		});

	}


	/** Returns information about the details of an action type. */
	export interface ActionType {

		/** Required */
		id: ActionTypeId;
		settings?: ActionTypeSettings;
		actionConfigurationProperties?: Array<ActionConfigurationProperty>;

		/** Required */
		inputArtifactDetails: ArtifactDetails;

		/** Required */
		outputArtifactDetails: ArtifactDetails;
	}

	/** Returns information about the details of an action type. */
	export interface ActionTypeFormProperties {
	}
	export function CreateActionTypeFormGroup() {
		return new FormGroup<ActionTypeFormProperties>({
		});

	}


	/** Represents information about an action type. */
	export interface ActionTypeId {

		/** Required */
		category: ActionCategory;

		/** Required */
		owner: ActionOwner;

		/** Required */
		provider: string;

		/** Required */
		version: string;
	}

	/** Represents information about an action type. */
	export interface ActionTypeIdFormProperties {

		/** Required */
		category: FormControl<ActionCategory | null | undefined>,

		/** Required */
		owner: FormControl<ActionOwner | null | undefined>,

		/** Required */
		provider: FormControl<string | null | undefined>,

		/** Required */
		version: FormControl<string | null | undefined>,
	}
	export function CreateActionTypeIdFormGroup() {
		return new FormGroup<ActionTypeIdFormProperties>({
			category: new FormControl<ActionCategory | null | undefined>(undefined, [Validators.required]),
			owner: new FormControl<ActionOwner | null | undefined>(undefined, [Validators.required]),
			provider: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			version: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum ActionCategory { Source = 0, Build = 1, Deploy = 2, Test = 3, Invoke = 4, Approval = 5 }

	export enum ActionOwner { AWS = 0, ThirdParty = 1, Custom = 2 }


	/** Returns information about the settings for an action type. */
	export interface ActionTypeSettings {
		thirdPartyConfigurationUrl?: string;
		entityUrlTemplate?: string;
		executionUrlTemplate?: string;
		revisionUrlTemplate?: string;
	}

	/** Returns information about the settings for an action type. */
	export interface ActionTypeSettingsFormProperties {
		thirdPartyConfigurationUrl: FormControl<string | null | undefined>,
		entityUrlTemplate: FormControl<string | null | undefined>,
		executionUrlTemplate: FormControl<string | null | undefined>,
		revisionUrlTemplate: FormControl<string | null | undefined>,
	}
	export function CreateActionTypeSettingsFormGroup() {
		return new FormGroup<ActionTypeSettingsFormProperties>({
			thirdPartyConfigurationUrl: new FormControl<string | null | undefined>(undefined),
			entityUrlTemplate: new FormControl<string | null | undefined>(undefined),
			executionUrlTemplate: new FormControl<string | null | undefined>(undefined),
			revisionUrlTemplate: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents information about an action configuration property. */
	export interface ActionConfigurationProperty {

		/** Required */
		name: string;

		/** Required */
		required: boolean;

		/** Required */
		key: boolean;

		/** Required */
		secret: boolean;
		queryable?: boolean | null;
		description?: string;
		type?: ActionConfigurationPropertyType;
	}

	/** Represents information about an action configuration property. */
	export interface ActionConfigurationPropertyFormProperties {

		/** Required */
		name: FormControl<string | null | undefined>,

		/** Required */
		required: FormControl<boolean | null | undefined>,

		/** Required */
		key: FormControl<boolean | null | undefined>,

		/** Required */
		secret: FormControl<boolean | null | undefined>,
		queryable: FormControl<boolean | null | undefined>,
		description: FormControl<string | null | undefined>,
		type: FormControl<ActionConfigurationPropertyType | null | undefined>,
	}
	export function CreateActionConfigurationPropertyFormGroup() {
		return new FormGroup<ActionConfigurationPropertyFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			required: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			key: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			secret: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			queryable: new FormControl<boolean | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<ActionConfigurationPropertyType | null | undefined>(undefined),
		});

	}

	export enum ActionConfigurationPropertyType { String = 0, Number = 1, Boolean = 2 }


	/** Returns information about the details of an artifact. */
	export interface ArtifactDetails {

		/** Required */
		minimumCount: number;

		/** Required */
		maximumCount: number;
	}

	/** Returns information about the details of an artifact. */
	export interface ArtifactDetailsFormProperties {

		/** Required */
		minimumCount: FormControl<number | null | undefined>,

		/** Required */
		maximumCount: FormControl<number | null | undefined>,
	}
	export function CreateArtifactDetailsFormGroup() {
		return new FormGroup<ArtifactDetailsFormProperties>({
			minimumCount: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			maximumCount: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** A tag is a key-value pair that is used to manage the resource. */
	export interface Tag {

		/** Required */
		key: string;

		/** Required */
		value: string;
	}

	/** A tag is a key-value pair that is used to manage the resource. */
	export interface TagFormProperties {

		/** Required */
		key: FormControl<string | null | undefined>,

		/** Required */
		value: FormControl<string | null | undefined>,
	}
	export function CreateTagFormGroup() {
		return new FormGroup<TagFormProperties>({
			key: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			value: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Represents the input of a CreateCustomActionType operation. */
	export interface CreateCustomActionTypeInput {

		/** Required */
		category: ActionCategory;

		/** Required */
		provider: string;

		/** Required */
		version: string;
		settings?: ActionTypeSettings;
		configurationProperties?: Array<ActionConfigurationProperty>;

		/** Required */
		inputArtifactDetails: ArtifactDetails;

		/** Required */
		outputArtifactDetails: ArtifactDetails;
		tags?: Array<Tag>;
	}

	/** Represents the input of a CreateCustomActionType operation. */
	export interface CreateCustomActionTypeInputFormProperties {

		/** Required */
		category: FormControl<ActionCategory | null | undefined>,

		/** Required */
		provider: FormControl<string | null | undefined>,

		/** Required */
		version: FormControl<string | null | undefined>,
	}
	export function CreateCreateCustomActionTypeInputFormGroup() {
		return new FormGroup<CreateCustomActionTypeInputFormProperties>({
			category: new FormControl<ActionCategory | null | undefined>(undefined, [Validators.required]),
			provider: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			version: new FormControl<string | null | undefined>(undefined, [Validators.required]),
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

	export interface TooManyTagsException {
	}
	export interface TooManyTagsExceptionFormProperties {
	}
	export function CreateTooManyTagsExceptionFormGroup() {
		return new FormGroup<TooManyTagsExceptionFormProperties>({
		});

	}

	export interface InvalidTagsException {
	}
	export interface InvalidTagsExceptionFormProperties {
	}
	export function CreateInvalidTagsExceptionFormGroup() {
		return new FormGroup<InvalidTagsExceptionFormProperties>({
		});

	}

	export interface ConcurrentModificationException {
	}
	export interface ConcurrentModificationExceptionFormProperties {
	}
	export function CreateConcurrentModificationExceptionFormGroup() {
		return new FormGroup<ConcurrentModificationExceptionFormProperties>({
		});

	}


	/** Represents the output of a <code>CreatePipeline</code> action. */
	export interface CreatePipelineOutput {
		pipeline?: PipelineDeclaration;
		tags?: Array<Tag>;
	}

	/** Represents the output of a <code>CreatePipeline</code> action. */
	export interface CreatePipelineOutputFormProperties {
	}
	export function CreateCreatePipelineOutputFormGroup() {
		return new FormGroup<CreatePipelineOutputFormProperties>({
		});

	}


	/** Represents the structure of actions and stages to be performed in the pipeline. */
	export interface PipelineDeclaration {

		/** Required */
		name: string;

		/** Required */
		roleArn: string;
		artifactStore?: ArtifactStore;
		artifactStores?: ArtifactStoreMap;

		/** Required */
		stages: Array<StageDeclaration>;
		version?: number | null;
	}

	/** Represents the structure of actions and stages to be performed in the pipeline. */
	export interface PipelineDeclarationFormProperties {

		/** Required */
		name: FormControl<string | null | undefined>,

		/** Required */
		roleArn: FormControl<string | null | undefined>,
		version: FormControl<number | null | undefined>,
	}
	export function CreatePipelineDeclarationFormGroup() {
		return new FormGroup<PipelineDeclarationFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			roleArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			version: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** <p>The S3 bucket where artifacts for the pipeline are stored.</p> <note> <p>You must include either <code>artifactStore</code> or <code>artifactStores</code> in your pipeline, but you cannot use both. If you create a cross-region action in your pipeline, you must use <code>artifactStores</code>.</p> </note> */
	export interface ArtifactStore {

		/** Required */
		type: ArtifactStoreType;

		/** Required */
		location: string;
		encryptionKey?: EncryptionKey;
	}

	/** <p>The S3 bucket where artifacts for the pipeline are stored.</p> <note> <p>You must include either <code>artifactStore</code> or <code>artifactStores</code> in your pipeline, but you cannot use both. If you create a cross-region action in your pipeline, you must use <code>artifactStores</code>.</p> </note> */
	export interface ArtifactStoreFormProperties {

		/** Required */
		type: FormControl<ArtifactStoreType | null | undefined>,

		/** Required */
		location: FormControl<string | null | undefined>,
	}
	export function CreateArtifactStoreFormGroup() {
		return new FormGroup<ArtifactStoreFormProperties>({
			type: new FormControl<ArtifactStoreType | null | undefined>(undefined, [Validators.required]),
			location: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum ArtifactStoreType { S3 = 0 }


	/** Represents information about the key used to encrypt data in the artifact store, such as an Amazon Web Services Key Management Service (Key Management Service) key. */
	export interface EncryptionKey {

		/** Required */
		id: string;

		/** Required */
		type: EncryptionKeyType;
	}

	/** Represents information about the key used to encrypt data in the artifact store, such as an Amazon Web Services Key Management Service (Key Management Service) key. */
	export interface EncryptionKeyFormProperties {

		/** Required */
		id: FormControl<string | null | undefined>,

		/** Required */
		type: FormControl<EncryptionKeyType | null | undefined>,
	}
	export function CreateEncryptionKeyFormGroup() {
		return new FormGroup<EncryptionKeyFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<EncryptionKeyType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum EncryptionKeyType { KMS = 0 }

	export interface ArtifactStoreMap {
	}
	export interface ArtifactStoreMapFormProperties {
	}
	export function CreateArtifactStoreMapFormGroup() {
		return new FormGroup<ArtifactStoreMapFormProperties>({
		});

	}


	/** Represents information about a stage and its definition. */
	export interface StageDeclaration {

		/** Required */
		name: string;
		blockers?: Array<BlockerDeclaration>;

		/** Required */
		actions: Array<ActionDeclaration>;
	}

	/** Represents information about a stage and its definition. */
	export interface StageDeclarationFormProperties {

		/** Required */
		name: FormControl<string | null | undefined>,
	}
	export function CreateStageDeclarationFormGroup() {
		return new FormGroup<StageDeclarationFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Reserved for future use. */
	export interface BlockerDeclaration {

		/** Required */
		name: string;

		/** Required */
		type: BlockerType;
	}

	/** Reserved for future use. */
	export interface BlockerDeclarationFormProperties {

		/** Required */
		name: FormControl<string | null | undefined>,

		/** Required */
		type: FormControl<BlockerType | null | undefined>,
	}
	export function CreateBlockerDeclarationFormGroup() {
		return new FormGroup<BlockerDeclarationFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<BlockerType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum BlockerType { Schedule = 0 }


	/** Represents information about an action declaration. */
	export interface ActionDeclaration {

		/** Required */
		name: string;

		/** Required */
		actionTypeId: ActionTypeId;
		runOrder?: number | null;
		configuration?: ActionConfigurationMap;
		outputArtifacts?: Array<OutputArtifact>;
		inputArtifacts?: Array<InputArtifact>;
		roleArn?: string;
		region?: string;
		namespace?: string;
	}

	/** Represents information about an action declaration. */
	export interface ActionDeclarationFormProperties {

		/** Required */
		name: FormControl<string | null | undefined>,
		runOrder: FormControl<number | null | undefined>,
		roleArn: FormControl<string | null | undefined>,
		region: FormControl<string | null | undefined>,
		namespace: FormControl<string | null | undefined>,
	}
	export function CreateActionDeclarationFormGroup() {
		return new FormGroup<ActionDeclarationFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			runOrder: new FormControl<number | null | undefined>(undefined),
			roleArn: new FormControl<string | null | undefined>(undefined),
			region: new FormControl<string | null | undefined>(undefined),
			namespace: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ActionConfigurationMap {
	}
	export interface ActionConfigurationMapFormProperties {
	}
	export function CreateActionConfigurationMapFormGroup() {
		return new FormGroup<ActionConfigurationMapFormProperties>({
		});

	}


	/** Represents information about the output of an action. */
	export interface OutputArtifact {

		/** Required */
		name: string;
	}

	/** Represents information about the output of an action. */
	export interface OutputArtifactFormProperties {

		/** Required */
		name: FormControl<string | null | undefined>,
	}
	export function CreateOutputArtifactFormGroup() {
		return new FormGroup<OutputArtifactFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Represents information about an artifact to be worked on, such as a test or build artifact. */
	export interface InputArtifact {

		/** Required */
		name: string;
	}

	/** Represents information about an artifact to be worked on, such as a test or build artifact. */
	export interface InputArtifactFormProperties {

		/** Required */
		name: FormControl<string | null | undefined>,
	}
	export function CreateInputArtifactFormGroup() {
		return new FormGroup<InputArtifactFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Represents the input of a <code>CreatePipeline</code> action. */
	export interface CreatePipelineInput {

		/** Required */
		pipeline: PipelineDeclaration;
		tags?: Array<Tag>;
	}

	/** Represents the input of a <code>CreatePipeline</code> action. */
	export interface CreatePipelineInputFormProperties {
	}
	export function CreateCreatePipelineInputFormGroup() {
		return new FormGroup<CreatePipelineInputFormProperties>({
		});

	}

	export interface PipelineNameInUseException {
	}
	export interface PipelineNameInUseExceptionFormProperties {
	}
	export function CreatePipelineNameInUseExceptionFormGroup() {
		return new FormGroup<PipelineNameInUseExceptionFormProperties>({
		});

	}

	export interface InvalidStageDeclarationException {
	}
	export interface InvalidStageDeclarationExceptionFormProperties {
	}
	export function CreateInvalidStageDeclarationExceptionFormGroup() {
		return new FormGroup<InvalidStageDeclarationExceptionFormProperties>({
		});

	}

	export interface InvalidActionDeclarationException {
	}
	export interface InvalidActionDeclarationExceptionFormProperties {
	}
	export function CreateInvalidActionDeclarationExceptionFormGroup() {
		return new FormGroup<InvalidActionDeclarationExceptionFormProperties>({
		});

	}

	export interface InvalidBlockerDeclarationException {
	}
	export interface InvalidBlockerDeclarationExceptionFormProperties {
	}
	export function CreateInvalidBlockerDeclarationExceptionFormGroup() {
		return new FormGroup<InvalidBlockerDeclarationExceptionFormProperties>({
		});

	}

	export interface InvalidStructureException {
	}
	export interface InvalidStructureExceptionFormProperties {
	}
	export function CreateInvalidStructureExceptionFormGroup() {
		return new FormGroup<InvalidStructureExceptionFormProperties>({
		});

	}


	/** Represents the input of a <code>DeleteCustomActionType</code> operation. The custom action will be marked as deleted. */
	export interface DeleteCustomActionTypeInput {

		/** Required */
		category: ActionCategory;

		/** Required */
		provider: string;

		/** Required */
		version: string;
	}

	/** Represents the input of a <code>DeleteCustomActionType</code> operation. The custom action will be marked as deleted. */
	export interface DeleteCustomActionTypeInputFormProperties {

		/** Required */
		category: FormControl<ActionCategory | null | undefined>,

		/** Required */
		provider: FormControl<string | null | undefined>,

		/** Required */
		version: FormControl<string | null | undefined>,
	}
	export function CreateDeleteCustomActionTypeInputFormGroup() {
		return new FormGroup<DeleteCustomActionTypeInputFormProperties>({
			category: new FormControl<ActionCategory | null | undefined>(undefined, [Validators.required]),
			provider: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			version: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Represents the input of a <code>DeletePipeline</code> action. */
	export interface DeletePipelineInput {

		/** Required */
		name: string;
	}

	/** Represents the input of a <code>DeletePipeline</code> action. */
	export interface DeletePipelineInputFormProperties {

		/** Required */
		name: FormControl<string | null | undefined>,
	}
	export function CreateDeletePipelineInputFormGroup() {
		return new FormGroup<DeletePipelineInputFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeleteWebhookOutput {
	}
	export interface DeleteWebhookOutputFormProperties {
	}
	export function CreateDeleteWebhookOutputFormGroup() {
		return new FormGroup<DeleteWebhookOutputFormProperties>({
		});

	}

	export interface DeleteWebhookInput {

		/** Required */
		name: string;
	}
	export interface DeleteWebhookInputFormProperties {

		/** Required */
		name: FormControl<string | null | undefined>,
	}
	export function CreateDeleteWebhookInputFormGroup() {
		return new FormGroup<DeleteWebhookInputFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeregisterWebhookWithThirdPartyOutput {
	}
	export interface DeregisterWebhookWithThirdPartyOutputFormProperties {
	}
	export function CreateDeregisterWebhookWithThirdPartyOutputFormGroup() {
		return new FormGroup<DeregisterWebhookWithThirdPartyOutputFormProperties>({
		});

	}

	export interface DeregisterWebhookWithThirdPartyInput {
		webhookName?: string;
	}
	export interface DeregisterWebhookWithThirdPartyInputFormProperties {
		webhookName: FormControl<string | null | undefined>,
	}
	export function CreateDeregisterWebhookWithThirdPartyInputFormGroup() {
		return new FormGroup<DeregisterWebhookWithThirdPartyInputFormProperties>({
			webhookName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface WebhookNotFoundException {
	}
	export interface WebhookNotFoundExceptionFormProperties {
	}
	export function CreateWebhookNotFoundExceptionFormGroup() {
		return new FormGroup<WebhookNotFoundExceptionFormProperties>({
		});

	}


	/** Represents the input of a <code>DisableStageTransition</code> action. */
	export interface DisableStageTransitionInput {

		/** Required */
		pipelineName: string;

		/** Required */
		stageName: string;

		/** Required */
		transitionType: StageTransitionType;

		/** Required */
		reason: string;
	}

	/** Represents the input of a <code>DisableStageTransition</code> action. */
	export interface DisableStageTransitionInputFormProperties {

		/** Required */
		pipelineName: FormControl<string | null | undefined>,

		/** Required */
		stageName: FormControl<string | null | undefined>,

		/** Required */
		transitionType: FormControl<StageTransitionType | null | undefined>,

		/** Required */
		reason: FormControl<string | null | undefined>,
	}
	export function CreateDisableStageTransitionInputFormGroup() {
		return new FormGroup<DisableStageTransitionInputFormProperties>({
			pipelineName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			stageName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			transitionType: new FormControl<StageTransitionType | null | undefined>(undefined, [Validators.required]),
			reason: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum StageTransitionType { Inbound = 0, Outbound = 1 }

	export interface PipelineNotFoundException {
	}
	export interface PipelineNotFoundExceptionFormProperties {
	}
	export function CreatePipelineNotFoundExceptionFormGroup() {
		return new FormGroup<PipelineNotFoundExceptionFormProperties>({
		});

	}

	export interface StageNotFoundException {
	}
	export interface StageNotFoundExceptionFormProperties {
	}
	export function CreateStageNotFoundExceptionFormGroup() {
		return new FormGroup<StageNotFoundExceptionFormProperties>({
		});

	}


	/** Represents the input of an <code>EnableStageTransition</code> action. */
	export interface EnableStageTransitionInput {

		/** Required */
		pipelineName: string;

		/** Required */
		stageName: string;

		/** Required */
		transitionType: StageTransitionType;
	}

	/** Represents the input of an <code>EnableStageTransition</code> action. */
	export interface EnableStageTransitionInputFormProperties {

		/** Required */
		pipelineName: FormControl<string | null | undefined>,

		/** Required */
		stageName: FormControl<string | null | undefined>,

		/** Required */
		transitionType: FormControl<StageTransitionType | null | undefined>,
	}
	export function CreateEnableStageTransitionInputFormGroup() {
		return new FormGroup<EnableStageTransitionInputFormProperties>({
			pipelineName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			stageName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			transitionType: new FormControl<StageTransitionType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetActionTypeOutput {
		actionType?: ActionTypeDeclaration;
	}
	export interface GetActionTypeOutputFormProperties {
	}
	export function CreateGetActionTypeOutputFormGroup() {
		return new FormGroup<GetActionTypeOutputFormProperties>({
		});

	}


	/** The parameters for the action type definition that are provided when the action type is created or updated. */
	export interface ActionTypeDeclaration {
		description?: string;

		/** Required */
		executor: ActionTypeExecutor;

		/** Required */
		id: ActionTypeIdentifier;

		/** Required */
		inputArtifactDetails: ActionTypeArtifactDetails;

		/** Required */
		outputArtifactDetails: ActionTypeArtifactDetails;
		permissions?: ActionTypePermissions;

		/** The properties of the action type to be updated. */
		properties?: any;
		urls?: ActionTypeUrls;
	}

	/** The parameters for the action type definition that are provided when the action type is created or updated. */
	export interface ActionTypeDeclarationFormProperties {
		description: FormControl<string | null | undefined>,

		/** The properties of the action type to be updated. */
		properties: FormControl<any | null | undefined>,
	}
	export function CreateActionTypeDeclarationFormGroup() {
		return new FormGroup<ActionTypeDeclarationFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			properties: new FormControl<any | null | undefined>(undefined),
		});

	}


	/** The action engine, or executor, for an action type created for a provider, where the action is to be used by customers of the provider. The action engine is associated with the model used to create and update the action, such as the Lambda integration model. */
	export interface ActionTypeExecutor {

		/** Required */
		configuration: ExecutorConfiguration;

		/** Required */
		type: ExecutorType;
		policyStatementsTemplate?: string;
		jobTimeout?: number | null;
	}

	/** The action engine, or executor, for an action type created for a provider, where the action is to be used by customers of the provider. The action engine is associated with the model used to create and update the action, such as the Lambda integration model. */
	export interface ActionTypeExecutorFormProperties {

		/** Required */
		type: FormControl<ExecutorType | null | undefined>,
		policyStatementsTemplate: FormControl<string | null | undefined>,
		jobTimeout: FormControl<number | null | undefined>,
	}
	export function CreateActionTypeExecutorFormGroup() {
		return new FormGroup<ActionTypeExecutorFormProperties>({
			type: new FormControl<ExecutorType | null | undefined>(undefined, [Validators.required]),
			policyStatementsTemplate: new FormControl<string | null | undefined>(undefined),
			jobTimeout: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** The action engine, or executor, related to the supported integration model used to create and update the action type. The available executor types are <code>Lambda</code> and <code>JobWorker</code>. */
	export interface ExecutorConfiguration {
		lambdaExecutorConfiguration?: LambdaExecutorConfiguration;
		jobWorkerExecutorConfiguration?: JobWorkerExecutorConfiguration;
	}

	/** The action engine, or executor, related to the supported integration model used to create and update the action type. The available executor types are <code>Lambda</code> and <code>JobWorker</code>. */
	export interface ExecutorConfigurationFormProperties {
	}
	export function CreateExecutorConfigurationFormGroup() {
		return new FormGroup<ExecutorConfigurationFormProperties>({
		});

	}


	/** Details about the configuration for the <code>Lambda</code> action engine, or executor. */
	export interface LambdaExecutorConfiguration {

		/** Required */
		lambdaFunctionArn: string;
	}

	/** Details about the configuration for the <code>Lambda</code> action engine, or executor. */
	export interface LambdaExecutorConfigurationFormProperties {

		/** Required */
		lambdaFunctionArn: FormControl<string | null | undefined>,
	}
	export function CreateLambdaExecutorConfigurationFormGroup() {
		return new FormGroup<LambdaExecutorConfigurationFormProperties>({
			lambdaFunctionArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Details about the polling configuration for the <code>JobWorker</code> action engine, or executor. */
	export interface JobWorkerExecutorConfiguration {
		pollingAccounts?: Array<string>;
		pollingServicePrincipals?: Array<string>;
	}

	/** Details about the polling configuration for the <code>JobWorker</code> action engine, or executor. */
	export interface JobWorkerExecutorConfigurationFormProperties {
	}
	export function CreateJobWorkerExecutorConfigurationFormGroup() {
		return new FormGroup<JobWorkerExecutorConfigurationFormProperties>({
		});

	}

	export enum ExecutorType { JobWorker = 0, Lambda = 1 }


	/** Specifies the category, owner, provider, and version of the action type. */
	export interface ActionTypeIdentifier {

		/** Required */
		category: ActionCategory;

		/** Required */
		owner: string;

		/** Required */
		provider: string;

		/** Required */
		version: string;
	}

	/** Specifies the category, owner, provider, and version of the action type. */
	export interface ActionTypeIdentifierFormProperties {

		/** Required */
		category: FormControl<ActionCategory | null | undefined>,

		/** Required */
		owner: FormControl<string | null | undefined>,

		/** Required */
		provider: FormControl<string | null | undefined>,

		/** Required */
		version: FormControl<string | null | undefined>,
	}
	export function CreateActionTypeIdentifierFormGroup() {
		return new FormGroup<ActionTypeIdentifierFormProperties>({
			category: new FormControl<ActionCategory | null | undefined>(undefined, [Validators.required]),
			owner: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			provider: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			version: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Information about parameters for artifacts associated with the action type, such as the minimum and maximum artifacts allowed. */
	export interface ActionTypeArtifactDetails {

		/** Required */
		minimumCount: number;

		/** Required */
		maximumCount: number;
	}

	/** Information about parameters for artifacts associated with the action type, such as the minimum and maximum artifacts allowed. */
	export interface ActionTypeArtifactDetailsFormProperties {

		/** Required */
		minimumCount: FormControl<number | null | undefined>,

		/** Required */
		maximumCount: FormControl<number | null | undefined>,
	}
	export function CreateActionTypeArtifactDetailsFormGroup() {
		return new FormGroup<ActionTypeArtifactDetailsFormProperties>({
			minimumCount: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			maximumCount: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Details identifying the users with permissions to use the action type. */
	export interface ActionTypePermissions {

		/** Required */
		allowedAccounts: Array<string>;
	}

	/** Details identifying the users with permissions to use the action type. */
	export interface ActionTypePermissionsFormProperties {
	}
	export function CreateActionTypePermissionsFormGroup() {
		return new FormGroup<ActionTypePermissionsFormProperties>({
		});

	}


	/** Returns information about URLs for web pages that display to customers as links on the pipeline view, such as an external configuration page for the action type. */
	export interface ActionTypeUrls {
		configurationUrl?: string;
		entityUrlTemplate?: string;
		executionUrlTemplate?: string;
		revisionUrlTemplate?: string;
	}

	/** Returns information about URLs for web pages that display to customers as links on the pipeline view, such as an external configuration page for the action type. */
	export interface ActionTypeUrlsFormProperties {
		configurationUrl: FormControl<string | null | undefined>,
		entityUrlTemplate: FormControl<string | null | undefined>,
		executionUrlTemplate: FormControl<string | null | undefined>,
		revisionUrlTemplate: FormControl<string | null | undefined>,
	}
	export function CreateActionTypeUrlsFormGroup() {
		return new FormGroup<ActionTypeUrlsFormProperties>({
			configurationUrl: new FormControl<string | null | undefined>(undefined),
			entityUrlTemplate: new FormControl<string | null | undefined>(undefined),
			executionUrlTemplate: new FormControl<string | null | undefined>(undefined),
			revisionUrlTemplate: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetActionTypeInput {

		/** Required */
		category: ActionCategory;

		/** Required */
		owner: string;

		/** Required */
		provider: string;

		/** Required */
		version: string;
	}
	export interface GetActionTypeInputFormProperties {

		/** Required */
		category: FormControl<ActionCategory | null | undefined>,

		/** Required */
		owner: FormControl<string | null | undefined>,

		/** Required */
		provider: FormControl<string | null | undefined>,

		/** Required */
		version: FormControl<string | null | undefined>,
	}
	export function CreateGetActionTypeInputFormGroup() {
		return new FormGroup<GetActionTypeInputFormProperties>({
			category: new FormControl<ActionCategory | null | undefined>(undefined, [Validators.required]),
			owner: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			provider: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			version: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ActionTypeNotFoundException {
	}
	export interface ActionTypeNotFoundExceptionFormProperties {
	}
	export function CreateActionTypeNotFoundExceptionFormGroup() {
		return new FormGroup<ActionTypeNotFoundExceptionFormProperties>({
		});

	}


	/** Represents the output of a <code>GetJobDetails</code> action. */
	export interface GetJobDetailsOutput {
		jobDetails?: JobDetails;
	}

	/** Represents the output of a <code>GetJobDetails</code> action. */
	export interface GetJobDetailsOutputFormProperties {
	}
	export function CreateGetJobDetailsOutputFormGroup() {
		return new FormGroup<GetJobDetailsOutputFormProperties>({
		});

	}


	/** Represents information about the details of a job. */
	export interface JobDetails {
		id?: string;
		data?: JobData;
		accountId?: string;
	}

	/** Represents information about the details of a job. */
	export interface JobDetailsFormProperties {
		id: FormControl<string | null | undefined>,
		accountId: FormControl<string | null | undefined>,
	}
	export function CreateJobDetailsFormGroup() {
		return new FormGroup<JobDetailsFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			accountId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents other information about a job required for a job worker to complete the job. */
	export interface JobData {
		actionTypeId?: ActionTypeId;
		actionConfiguration?: ActionConfiguration;
		pipelineContext?: PipelineContext;
		inputArtifacts?: Array<Artifact>;
		outputArtifacts?: Array<Artifact>;
		artifactCredentials?: AWSSessionCredentials;
		continuationToken?: string;
		encryptionKey?: EncryptionKey;
	}

	/** Represents other information about a job required for a job worker to complete the job. */
	export interface JobDataFormProperties {
		continuationToken: FormControl<string | null | undefined>,
	}
	export function CreateJobDataFormGroup() {
		return new FormGroup<JobDataFormProperties>({
			continuationToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents information about an action configuration. */
	export interface ActionConfiguration {
		configuration?: ActionConfigurationMap;
	}

	/** Represents information about an action configuration. */
	export interface ActionConfigurationFormProperties {
	}
	export function CreateActionConfigurationFormGroup() {
		return new FormGroup<ActionConfigurationFormProperties>({
		});

	}


	/** <p>Represents information about a pipeline to a job worker.</p> <note> <p>PipelineContext contains <code>pipelineArn</code> and <code>pipelineExecutionId</code> for custom action jobs. The <code>pipelineArn</code> and <code>pipelineExecutionId</code> fields are not populated for ThirdParty action jobs.</p> </note> */
	export interface PipelineContext {
		pipelineName?: string;
		stage?: StageContext;
		action?: ActionContext;
		pipelineArn?: string;
		pipelineExecutionId?: string;
	}

	/** <p>Represents information about a pipeline to a job worker.</p> <note> <p>PipelineContext contains <code>pipelineArn</code> and <code>pipelineExecutionId</code> for custom action jobs. The <code>pipelineArn</code> and <code>pipelineExecutionId</code> fields are not populated for ThirdParty action jobs.</p> </note> */
	export interface PipelineContextFormProperties {
		pipelineName: FormControl<string | null | undefined>,
		pipelineArn: FormControl<string | null | undefined>,
		pipelineExecutionId: FormControl<string | null | undefined>,
	}
	export function CreatePipelineContextFormGroup() {
		return new FormGroup<PipelineContextFormProperties>({
			pipelineName: new FormControl<string | null | undefined>(undefined),
			pipelineArn: new FormControl<string | null | undefined>(undefined),
			pipelineExecutionId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents information about a stage to a job worker. */
	export interface StageContext {
		name?: string;
	}

	/** Represents information about a stage to a job worker. */
	export interface StageContextFormProperties {
		name: FormControl<string | null | undefined>,
	}
	export function CreateStageContextFormGroup() {
		return new FormGroup<StageContextFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents the context of an action in the stage of a pipeline to a job worker. */
	export interface ActionContext {
		name?: string;
		actionExecutionId?: string;
	}

	/** Represents the context of an action in the stage of a pipeline to a job worker. */
	export interface ActionContextFormProperties {
		name: FormControl<string | null | undefined>,
		actionExecutionId: FormControl<string | null | undefined>,
	}
	export function CreateActionContextFormGroup() {
		return new FormGroup<ActionContextFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			actionExecutionId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Artifacts are the files that are worked on by actions in the pipeline. See the action configuration for each action for details about artifact parameters. For example, the S3 source action artifact is a file name (or file path), and the files are generally provided as a ZIP file. Example artifact name: SampleApp_Windows.zip */
	export interface Artifact {
		name?: string;
		revision?: string;
		location?: ArtifactLocation;
	}

	/** Artifacts are the files that are worked on by actions in the pipeline. See the action configuration for each action for details about artifact parameters. For example, the S3 source action artifact is a file name (or file path), and the files are generally provided as a ZIP file. Example artifact name: SampleApp_Windows.zip */
	export interface ArtifactFormProperties {
		name: FormControl<string | null | undefined>,
		revision: FormControl<string | null | undefined>,
	}
	export function CreateArtifactFormGroup() {
		return new FormGroup<ArtifactFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			revision: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents information about the location of an artifact. */
	export interface ArtifactLocation {
		type?: ArtifactStoreType;
		s3Location?: S3ArtifactLocation;
	}

	/** Represents information about the location of an artifact. */
	export interface ArtifactLocationFormProperties {
		type: FormControl<ArtifactStoreType | null | undefined>,
	}
	export function CreateArtifactLocationFormGroup() {
		return new FormGroup<ArtifactLocationFormProperties>({
			type: new FormControl<ArtifactStoreType | null | undefined>(undefined),
		});

	}


	/** The location of the S3 bucket that contains a revision. */
	export interface S3ArtifactLocation {

		/** Required */
		bucketName: string;

		/** Required */
		objectKey: string;
	}

	/** The location of the S3 bucket that contains a revision. */
	export interface S3ArtifactLocationFormProperties {

		/** Required */
		bucketName: FormControl<string | null | undefined>,

		/** Required */
		objectKey: FormControl<string | null | undefined>,
	}
	export function CreateS3ArtifactLocationFormGroup() {
		return new FormGroup<S3ArtifactLocationFormProperties>({
			bucketName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			objectKey: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Represents an Amazon Web Services session credentials object. These credentials are temporary credentials that are issued by Amazon Web Services Secure Token Service (STS). They can be used to access input and output artifacts in the S3 bucket used to store artifact for the pipeline in CodePipeline. */
	export interface AWSSessionCredentials {

		/** Required */
		accessKeyId: string;

		/** Required */
		secretAccessKey: string;

		/** Required */
		sessionToken: string;
	}

	/** Represents an Amazon Web Services session credentials object. These credentials are temporary credentials that are issued by Amazon Web Services Secure Token Service (STS). They can be used to access input and output artifacts in the S3 bucket used to store artifact for the pipeline in CodePipeline. */
	export interface AWSSessionCredentialsFormProperties {

		/** Required */
		accessKeyId: FormControl<string | null | undefined>,

		/** Required */
		secretAccessKey: FormControl<string | null | undefined>,

		/** Required */
		sessionToken: FormControl<string | null | undefined>,
	}
	export function CreateAWSSessionCredentialsFormGroup() {
		return new FormGroup<AWSSessionCredentialsFormProperties>({
			accessKeyId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			secretAccessKey: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			sessionToken: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Represents the input of a <code>GetJobDetails</code> action. */
	export interface GetJobDetailsInput {

		/** Required */
		jobId: string;
	}

	/** Represents the input of a <code>GetJobDetails</code> action. */
	export interface GetJobDetailsInputFormProperties {

		/** Required */
		jobId: FormControl<string | null | undefined>,
	}
	export function CreateGetJobDetailsInputFormGroup() {
		return new FormGroup<GetJobDetailsInputFormProperties>({
			jobId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Represents the output of a <code>GetPipeline</code> action. */
	export interface GetPipelineOutput {
		pipeline?: PipelineDeclaration;
		metadata?: PipelineMetadata;
	}

	/** Represents the output of a <code>GetPipeline</code> action. */
	export interface GetPipelineOutputFormProperties {
	}
	export function CreateGetPipelineOutputFormGroup() {
		return new FormGroup<GetPipelineOutputFormProperties>({
		});

	}


	/** Information about a pipeline. */
	export interface PipelineMetadata {
		pipelineArn?: string;
		created?: Date;
		updated?: Date;
		pollingDisabledAt?: Date;
	}

	/** Information about a pipeline. */
	export interface PipelineMetadataFormProperties {
		pipelineArn: FormControl<string | null | undefined>,
		created: FormControl<Date | null | undefined>,
		updated: FormControl<Date | null | undefined>,
		pollingDisabledAt: FormControl<Date | null | undefined>,
	}
	export function CreatePipelineMetadataFormGroup() {
		return new FormGroup<PipelineMetadataFormProperties>({
			pipelineArn: new FormControl<string | null | undefined>(undefined),
			created: new FormControl<Date | null | undefined>(undefined),
			updated: new FormControl<Date | null | undefined>(undefined),
			pollingDisabledAt: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/** Represents the input of a <code>GetPipeline</code> action. */
	export interface GetPipelineInput {

		/** Required */
		name: string;
		version?: number | null;
	}

	/** Represents the input of a <code>GetPipeline</code> action. */
	export interface GetPipelineInputFormProperties {

		/** Required */
		name: FormControl<string | null | undefined>,
		version: FormControl<number | null | undefined>,
	}
	export function CreateGetPipelineInputFormGroup() {
		return new FormGroup<GetPipelineInputFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			version: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface PipelineVersionNotFoundException {
	}
	export interface PipelineVersionNotFoundExceptionFormProperties {
	}
	export function CreatePipelineVersionNotFoundExceptionFormGroup() {
		return new FormGroup<PipelineVersionNotFoundExceptionFormProperties>({
		});

	}


	/** Represents the output of a <code>GetPipelineExecution</code> action. */
	export interface GetPipelineExecutionOutput {
		pipelineExecution?: PipelineExecution;
	}

	/** Represents the output of a <code>GetPipelineExecution</code> action. */
	export interface GetPipelineExecutionOutputFormProperties {
	}
	export function CreateGetPipelineExecutionOutputFormGroup() {
		return new FormGroup<GetPipelineExecutionOutputFormProperties>({
		});

	}


	/** Represents information about an execution of a pipeline. */
	export interface PipelineExecution {
		pipelineName?: string;
		pipelineVersion?: number | null;
		pipelineExecutionId?: string;
		status?: PipelineExecutionStatus;
		statusSummary?: string;
		artifactRevisions?: Array<ArtifactRevision>;
	}

	/** Represents information about an execution of a pipeline. */
	export interface PipelineExecutionFormProperties {
		pipelineName: FormControl<string | null | undefined>,
		pipelineVersion: FormControl<number | null | undefined>,
		pipelineExecutionId: FormControl<string | null | undefined>,
		status: FormControl<PipelineExecutionStatus | null | undefined>,
		statusSummary: FormControl<string | null | undefined>,
	}
	export function CreatePipelineExecutionFormGroup() {
		return new FormGroup<PipelineExecutionFormProperties>({
			pipelineName: new FormControl<string | null | undefined>(undefined),
			pipelineVersion: new FormControl<number | null | undefined>(undefined),
			pipelineExecutionId: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<PipelineExecutionStatus | null | undefined>(undefined),
			statusSummary: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum PipelineExecutionStatus { Cancelled = 0, InProgress = 1, Stopped = 2, Stopping = 3, Succeeded = 4, Superseded = 5, Failed = 6 }


	/** Represents revision details of an artifact.  */
	export interface ArtifactRevision {
		name?: string;
		revisionId?: string;
		revisionChangeIdentifier?: string;
		revisionSummary?: string;
		created?: Date;
		revisionUrl?: string;
	}

	/** Represents revision details of an artifact.  */
	export interface ArtifactRevisionFormProperties {
		name: FormControl<string | null | undefined>,
		revisionId: FormControl<string | null | undefined>,
		revisionChangeIdentifier: FormControl<string | null | undefined>,
		revisionSummary: FormControl<string | null | undefined>,
		created: FormControl<Date | null | undefined>,
		revisionUrl: FormControl<string | null | undefined>,
	}
	export function CreateArtifactRevisionFormGroup() {
		return new FormGroup<ArtifactRevisionFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			revisionId: new FormControl<string | null | undefined>(undefined),
			revisionChangeIdentifier: new FormControl<string | null | undefined>(undefined),
			revisionSummary: new FormControl<string | null | undefined>(undefined),
			created: new FormControl<Date | null | undefined>(undefined),
			revisionUrl: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents the input of a <code>GetPipelineExecution</code> action. */
	export interface GetPipelineExecutionInput {

		/** Required */
		pipelineName: string;

		/** Required */
		pipelineExecutionId: string;
	}

	/** Represents the input of a <code>GetPipelineExecution</code> action. */
	export interface GetPipelineExecutionInputFormProperties {

		/** Required */
		pipelineName: FormControl<string | null | undefined>,

		/** Required */
		pipelineExecutionId: FormControl<string | null | undefined>,
	}
	export function CreateGetPipelineExecutionInputFormGroup() {
		return new FormGroup<GetPipelineExecutionInputFormProperties>({
			pipelineName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			pipelineExecutionId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface PipelineExecutionNotFoundException {
	}
	export interface PipelineExecutionNotFoundExceptionFormProperties {
	}
	export function CreatePipelineExecutionNotFoundExceptionFormGroup() {
		return new FormGroup<PipelineExecutionNotFoundExceptionFormProperties>({
		});

	}


	/** Represents the output of a <code>GetPipelineState</code> action. */
	export interface GetPipelineStateOutput {
		pipelineName?: string;
		pipelineVersion?: number | null;
		stageStates?: Array<StageState>;
		created?: Date;
		updated?: Date;
	}

	/** Represents the output of a <code>GetPipelineState</code> action. */
	export interface GetPipelineStateOutputFormProperties {
		pipelineName: FormControl<string | null | undefined>,
		pipelineVersion: FormControl<number | null | undefined>,
		created: FormControl<Date | null | undefined>,
		updated: FormControl<Date | null | undefined>,
	}
	export function CreateGetPipelineStateOutputFormGroup() {
		return new FormGroup<GetPipelineStateOutputFormProperties>({
			pipelineName: new FormControl<string | null | undefined>(undefined),
			pipelineVersion: new FormControl<number | null | undefined>(undefined),
			created: new FormControl<Date | null | undefined>(undefined),
			updated: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/** Represents information about the state of the stage. */
	export interface StageState {
		stageName?: string;

		/** Represents information about the run of a stage. */
		inboundExecution?: StageExecution;
		inboundTransitionState?: TransitionState;
		actionStates?: Array<ActionState>;
		latestExecution?: StageExecution;
	}

	/** Represents information about the state of the stage. */
	export interface StageStateFormProperties {
		stageName: FormControl<string | null | undefined>,
	}
	export function CreateStageStateFormGroup() {
		return new FormGroup<StageStateFormProperties>({
			stageName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents information about the run of a stage. */
	export interface StageExecution {

		/** Required */
		pipelineExecutionId: string;

		/** Required */
		status: StageExecutionStatus;
	}

	/** Represents information about the run of a stage. */
	export interface StageExecutionFormProperties {

		/** Required */
		pipelineExecutionId: FormControl<string | null | undefined>,

		/** Required */
		status: FormControl<StageExecutionStatus | null | undefined>,
	}
	export function CreateStageExecutionFormGroup() {
		return new FormGroup<StageExecutionFormProperties>({
			pipelineExecutionId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<StageExecutionStatus | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum StageExecutionStatus { Cancelled = 0, InProgress = 1, Failed = 2, Stopped = 3, Stopping = 4, Succeeded = 5 }


	/** Represents information about the state of transitions between one stage and another stage. */
	export interface TransitionState {
		enabled?: boolean | null;
		lastChangedBy?: string;
		lastChangedAt?: Date;
		disabledReason?: string;
	}

	/** Represents information about the state of transitions between one stage and another stage. */
	export interface TransitionStateFormProperties {
		enabled: FormControl<boolean | null | undefined>,
		lastChangedBy: FormControl<string | null | undefined>,
		lastChangedAt: FormControl<Date | null | undefined>,
		disabledReason: FormControl<string | null | undefined>,
	}
	export function CreateTransitionStateFormGroup() {
		return new FormGroup<TransitionStateFormProperties>({
			enabled: new FormControl<boolean | null | undefined>(undefined),
			lastChangedBy: new FormControl<string | null | undefined>(undefined),
			lastChangedAt: new FormControl<Date | null | undefined>(undefined),
			disabledReason: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents information about the state of an action. */
	export interface ActionState {
		actionName?: string;
		currentRevision?: ActionRevision;
		latestExecution?: ActionExecution;
		entityUrl?: string;
		revisionUrl?: string;
	}

	/** Represents information about the state of an action. */
	export interface ActionStateFormProperties {
		actionName: FormControl<string | null | undefined>,
		entityUrl: FormControl<string | null | undefined>,
		revisionUrl: FormControl<string | null | undefined>,
	}
	export function CreateActionStateFormGroup() {
		return new FormGroup<ActionStateFormProperties>({
			actionName: new FormControl<string | null | undefined>(undefined),
			entityUrl: new FormControl<string | null | undefined>(undefined),
			revisionUrl: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents information about the version (or revision) of an action. */
	export interface ActionRevision {

		/** Required */
		revisionId: string;

		/** Required */
		revisionChangeId: string;

		/** Required */
		created: Date;
	}

	/** Represents information about the version (or revision) of an action. */
	export interface ActionRevisionFormProperties {

		/** Required */
		revisionId: FormControl<string | null | undefined>,

		/** Required */
		revisionChangeId: FormControl<string | null | undefined>,

		/** Required */
		created: FormControl<Date | null | undefined>,
	}
	export function CreateActionRevisionFormGroup() {
		return new FormGroup<ActionRevisionFormProperties>({
			revisionId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			revisionChangeId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			created: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Represents information about the run of an action. */
	export interface ActionExecution {
		actionExecutionId?: string;
		status?: ActionExecutionStatus;
		summary?: string;
		lastStatusChange?: Date;
		token?: string;
		lastUpdatedBy?: string;
		externalExecutionId?: string;
		externalExecutionUrl?: string;
		percentComplete?: number | null;
		errorDetails?: ErrorDetails;
	}

	/** Represents information about the run of an action. */
	export interface ActionExecutionFormProperties {
		actionExecutionId: FormControl<string | null | undefined>,
		status: FormControl<ActionExecutionStatus | null | undefined>,
		summary: FormControl<string | null | undefined>,
		lastStatusChange: FormControl<Date | null | undefined>,
		token: FormControl<string | null | undefined>,
		lastUpdatedBy: FormControl<string | null | undefined>,
		externalExecutionId: FormControl<string | null | undefined>,
		externalExecutionUrl: FormControl<string | null | undefined>,
		percentComplete: FormControl<number | null | undefined>,
	}
	export function CreateActionExecutionFormGroup() {
		return new FormGroup<ActionExecutionFormProperties>({
			actionExecutionId: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<ActionExecutionStatus | null | undefined>(undefined),
			summary: new FormControl<string | null | undefined>(undefined),
			lastStatusChange: new FormControl<Date | null | undefined>(undefined),
			token: new FormControl<string | null | undefined>(undefined),
			lastUpdatedBy: new FormControl<string | null | undefined>(undefined),
			externalExecutionId: new FormControl<string | null | undefined>(undefined),
			externalExecutionUrl: new FormControl<string | null | undefined>(undefined),
			percentComplete: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum ActionExecutionStatus { InProgress = 0, Abandoned = 1, Succeeded = 2, Failed = 3 }


	/** Represents information about an error in CodePipeline. */
	export interface ErrorDetails {
		code?: string;
		message?: string;
	}

	/** Represents information about an error in CodePipeline. */
	export interface ErrorDetailsFormProperties {
		code: FormControl<string | null | undefined>,
		message: FormControl<string | null | undefined>,
	}
	export function CreateErrorDetailsFormGroup() {
		return new FormGroup<ErrorDetailsFormProperties>({
			code: new FormControl<string | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents the input of a <code>GetPipelineState</code> action. */
	export interface GetPipelineStateInput {

		/** Required */
		name: string;
	}

	/** Represents the input of a <code>GetPipelineState</code> action. */
	export interface GetPipelineStateInputFormProperties {

		/** Required */
		name: FormControl<string | null | undefined>,
	}
	export function CreateGetPipelineStateInputFormGroup() {
		return new FormGroup<GetPipelineStateInputFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Represents the output of a <code>GetThirdPartyJobDetails</code> action. */
	export interface GetThirdPartyJobDetailsOutput {
		jobDetails?: ThirdPartyJobDetails;
	}

	/** Represents the output of a <code>GetThirdPartyJobDetails</code> action. */
	export interface GetThirdPartyJobDetailsOutputFormProperties {
	}
	export function CreateGetThirdPartyJobDetailsOutputFormGroup() {
		return new FormGroup<GetThirdPartyJobDetailsOutputFormProperties>({
		});

	}


	/** The details of a job sent in response to a <code>GetThirdPartyJobDetails</code> request. */
	export interface ThirdPartyJobDetails {
		id?: string;
		data?: ThirdPartyJobData;
		nonce?: string;
	}

	/** The details of a job sent in response to a <code>GetThirdPartyJobDetails</code> request. */
	export interface ThirdPartyJobDetailsFormProperties {
		id: FormControl<string | null | undefined>,
		nonce: FormControl<string | null | undefined>,
	}
	export function CreateThirdPartyJobDetailsFormGroup() {
		return new FormGroup<ThirdPartyJobDetailsFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			nonce: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents information about the job data for a partner action. */
	export interface ThirdPartyJobData {
		actionTypeId?: ActionTypeId;
		actionConfiguration?: ActionConfiguration;
		pipelineContext?: PipelineContext;
		inputArtifacts?: Array<Artifact>;
		outputArtifacts?: Array<Artifact>;
		artifactCredentials?: AWSSessionCredentials;
		continuationToken?: string;
		encryptionKey?: EncryptionKey;
	}

	/** Represents information about the job data for a partner action. */
	export interface ThirdPartyJobDataFormProperties {
		continuationToken: FormControl<string | null | undefined>,
	}
	export function CreateThirdPartyJobDataFormGroup() {
		return new FormGroup<ThirdPartyJobDataFormProperties>({
			continuationToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents the input of a <code>GetThirdPartyJobDetails</code> action. */
	export interface GetThirdPartyJobDetailsInput {

		/** Required */
		jobId: string;

		/** Required */
		clientToken: string;
	}

	/** Represents the input of a <code>GetThirdPartyJobDetails</code> action. */
	export interface GetThirdPartyJobDetailsInputFormProperties {

		/** Required */
		jobId: FormControl<string | null | undefined>,

		/** Required */
		clientToken: FormControl<string | null | undefined>,
	}
	export function CreateGetThirdPartyJobDetailsInputFormGroup() {
		return new FormGroup<GetThirdPartyJobDetailsInputFormProperties>({
			jobId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			clientToken: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface InvalidJobException {
	}
	export interface InvalidJobExceptionFormProperties {
	}
	export function CreateInvalidJobExceptionFormGroup() {
		return new FormGroup<InvalidJobExceptionFormProperties>({
		});

	}

	export interface ListActionExecutionsOutput {
		actionExecutionDetails?: Array<ActionExecutionDetail>;
		nextToken?: string;
	}
	export interface ListActionExecutionsOutputFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListActionExecutionsOutputFormGroup() {
		return new FormGroup<ListActionExecutionsOutputFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Returns information about an execution of an action, including the action execution ID, and the name, version, and timing of the action.  */
	export interface ActionExecutionDetail {
		pipelineExecutionId?: string;
		actionExecutionId?: string;
		pipelineVersion?: number | null;
		stageName?: string;
		actionName?: string;
		startTime?: Date;
		lastUpdateTime?: Date;
		status?: ActionExecutionStatus;
		input?: ActionExecutionInput;
		output?: ActionExecutionOutput;
	}

	/** Returns information about an execution of an action, including the action execution ID, and the name, version, and timing of the action.  */
	export interface ActionExecutionDetailFormProperties {
		pipelineExecutionId: FormControl<string | null | undefined>,
		actionExecutionId: FormControl<string | null | undefined>,
		pipelineVersion: FormControl<number | null | undefined>,
		stageName: FormControl<string | null | undefined>,
		actionName: FormControl<string | null | undefined>,
		startTime: FormControl<Date | null | undefined>,
		lastUpdateTime: FormControl<Date | null | undefined>,
		status: FormControl<ActionExecutionStatus | null | undefined>,
	}
	export function CreateActionExecutionDetailFormGroup() {
		return new FormGroup<ActionExecutionDetailFormProperties>({
			pipelineExecutionId: new FormControl<string | null | undefined>(undefined),
			actionExecutionId: new FormControl<string | null | undefined>(undefined),
			pipelineVersion: new FormControl<number | null | undefined>(undefined),
			stageName: new FormControl<string | null | undefined>(undefined),
			actionName: new FormControl<string | null | undefined>(undefined),
			startTime: new FormControl<Date | null | undefined>(undefined),
			lastUpdateTime: new FormControl<Date | null | undefined>(undefined),
			status: new FormControl<ActionExecutionStatus | null | undefined>(undefined),
		});

	}


	/** Input information used for an action execution. */
	export interface ActionExecutionInput {

		/** Represents information about an action type. */
		actionTypeId?: ActionTypeId;
		configuration?: ActionConfigurationMap;
		resolvedConfiguration?: ResolvedActionConfigurationMap;
		roleArn?: string;
		region?: string;
		inputArtifacts?: Array<ArtifactDetail>;
		namespace?: string;
	}

	/** Input information used for an action execution. */
	export interface ActionExecutionInputFormProperties {
		roleArn: FormControl<string | null | undefined>,
		region: FormControl<string | null | undefined>,
		namespace: FormControl<string | null | undefined>,
	}
	export function CreateActionExecutionInputFormGroup() {
		return new FormGroup<ActionExecutionInputFormProperties>({
			roleArn: new FormControl<string | null | undefined>(undefined),
			region: new FormControl<string | null | undefined>(undefined),
			namespace: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ResolvedActionConfigurationMap {
	}
	export interface ResolvedActionConfigurationMapFormProperties {
	}
	export function CreateResolvedActionConfigurationMapFormGroup() {
		return new FormGroup<ResolvedActionConfigurationMapFormProperties>({
		});

	}


	/** Artifact details for the action execution, such as the artifact location. */
	export interface ArtifactDetail {
		name?: string;
		s3location?: S3Location;
	}

	/** Artifact details for the action execution, such as the artifact location. */
	export interface ArtifactDetailFormProperties {
		name: FormControl<string | null | undefined>,
	}
	export function CreateArtifactDetailFormGroup() {
		return new FormGroup<ArtifactDetailFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The Amazon S3 artifact location for an action's artifacts. */
	export interface S3Location {
		bucket?: string;
		key?: string;
	}

	/** The Amazon S3 artifact location for an action's artifacts. */
	export interface S3LocationFormProperties {
		bucket: FormControl<string | null | undefined>,
		key: FormControl<string | null | undefined>,
	}
	export function CreateS3LocationFormGroup() {
		return new FormGroup<S3LocationFormProperties>({
			bucket: new FormControl<string | null | undefined>(undefined),
			key: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Output details listed for an action execution, such as the action execution result. */
	export interface ActionExecutionOutput {
		outputArtifacts?: Array<ArtifactDetail>;
		executionResult?: ActionExecutionResult;
		outputVariables?: OutputVariablesMap;
	}

	/** Output details listed for an action execution, such as the action execution result. */
	export interface ActionExecutionOutputFormProperties {
	}
	export function CreateActionExecutionOutputFormGroup() {
		return new FormGroup<ActionExecutionOutputFormProperties>({
		});

	}


	/** Execution result information, such as the external execution ID. */
	export interface ActionExecutionResult {
		externalExecutionId?: string;
		externalExecutionSummary?: string;
		externalExecutionUrl?: string;
	}

	/** Execution result information, such as the external execution ID. */
	export interface ActionExecutionResultFormProperties {
		externalExecutionId: FormControl<string | null | undefined>,
		externalExecutionSummary: FormControl<string | null | undefined>,
		externalExecutionUrl: FormControl<string | null | undefined>,
	}
	export function CreateActionExecutionResultFormGroup() {
		return new FormGroup<ActionExecutionResultFormProperties>({
			externalExecutionId: new FormControl<string | null | undefined>(undefined),
			externalExecutionSummary: new FormControl<string | null | undefined>(undefined),
			externalExecutionUrl: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface OutputVariablesMap {
	}
	export interface OutputVariablesMapFormProperties {
	}
	export function CreateOutputVariablesMapFormGroup() {
		return new FormGroup<OutputVariablesMapFormProperties>({
		});

	}

	export interface ListActionExecutionsInput {

		/** Required */
		pipelineName: string;
		filter?: ActionExecutionFilter;
		maxResults?: number | null;
		nextToken?: string;
	}
	export interface ListActionExecutionsInputFormProperties {

		/** Required */
		pipelineName: FormControl<string | null | undefined>,
		maxResults: FormControl<number | null | undefined>,
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListActionExecutionsInputFormGroup() {
		return new FormGroup<ListActionExecutionsInputFormProperties>({
			pipelineName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			maxResults: new FormControl<number | null | undefined>(undefined),
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Filter values for the action execution. */
	export interface ActionExecutionFilter {
		pipelineExecutionId?: string;
	}

	/** Filter values for the action execution. */
	export interface ActionExecutionFilterFormProperties {
		pipelineExecutionId: FormControl<string | null | undefined>,
	}
	export function CreateActionExecutionFilterFormGroup() {
		return new FormGroup<ActionExecutionFilterFormProperties>({
			pipelineExecutionId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface InvalidNextTokenException {
	}
	export interface InvalidNextTokenExceptionFormProperties {
	}
	export function CreateInvalidNextTokenExceptionFormGroup() {
		return new FormGroup<InvalidNextTokenExceptionFormProperties>({
		});

	}


	/** Represents the output of a <code>ListActionTypes</code> action. */
	export interface ListActionTypesOutput {

		/** Required */
		actionTypes: Array<ActionType>;
		nextToken?: string;
	}

	/** Represents the output of a <code>ListActionTypes</code> action. */
	export interface ListActionTypesOutputFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListActionTypesOutputFormGroup() {
		return new FormGroup<ListActionTypesOutputFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents the input of a <code>ListActionTypes</code> action. */
	export interface ListActionTypesInput {
		actionOwnerFilter?: ActionOwner;
		nextToken?: string;
		regionFilter?: string;
	}

	/** Represents the input of a <code>ListActionTypes</code> action. */
	export interface ListActionTypesInputFormProperties {
		actionOwnerFilter: FormControl<ActionOwner | null | undefined>,
		nextToken: FormControl<string | null | undefined>,
		regionFilter: FormControl<string | null | undefined>,
	}
	export function CreateListActionTypesInputFormGroup() {
		return new FormGroup<ListActionTypesInputFormProperties>({
			actionOwnerFilter: new FormControl<ActionOwner | null | undefined>(undefined),
			nextToken: new FormControl<string | null | undefined>(undefined),
			regionFilter: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents the output of a <code>ListPipelineExecutions</code> action. */
	export interface ListPipelineExecutionsOutput {
		pipelineExecutionSummaries?: Array<PipelineExecutionSummary>;
		nextToken?: string;
	}

	/** Represents the output of a <code>ListPipelineExecutions</code> action. */
	export interface ListPipelineExecutionsOutputFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListPipelineExecutionsOutputFormGroup() {
		return new FormGroup<ListPipelineExecutionsOutputFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Summary information about a pipeline execution. */
	export interface PipelineExecutionSummary {
		pipelineExecutionId?: string;
		status?: PipelineExecutionStatus;
		startTime?: Date;
		lastUpdateTime?: Date;
		sourceRevisions?: Array<SourceRevision>;
		trigger?: ExecutionTrigger;
		stopTrigger?: StopExecutionTrigger;
	}

	/** Summary information about a pipeline execution. */
	export interface PipelineExecutionSummaryFormProperties {
		pipelineExecutionId: FormControl<string | null | undefined>,
		status: FormControl<PipelineExecutionStatus | null | undefined>,
		startTime: FormControl<Date | null | undefined>,
		lastUpdateTime: FormControl<Date | null | undefined>,
	}
	export function CreatePipelineExecutionSummaryFormGroup() {
		return new FormGroup<PipelineExecutionSummaryFormProperties>({
			pipelineExecutionId: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<PipelineExecutionStatus | null | undefined>(undefined),
			startTime: new FormControl<Date | null | undefined>(undefined),
			lastUpdateTime: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/** Information about the version (or revision) of a source artifact that initiated a pipeline execution. */
	export interface SourceRevision {

		/** Required */
		actionName: string;
		revisionId?: string;
		revisionSummary?: string;
		revisionUrl?: string;
	}

	/** Information about the version (or revision) of a source artifact that initiated a pipeline execution. */
	export interface SourceRevisionFormProperties {

		/** Required */
		actionName: FormControl<string | null | undefined>,
		revisionId: FormControl<string | null | undefined>,
		revisionSummary: FormControl<string | null | undefined>,
		revisionUrl: FormControl<string | null | undefined>,
	}
	export function CreateSourceRevisionFormGroup() {
		return new FormGroup<SourceRevisionFormProperties>({
			actionName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			revisionId: new FormControl<string | null | undefined>(undefined),
			revisionSummary: new FormControl<string | null | undefined>(undefined),
			revisionUrl: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The interaction or event that started a pipeline execution. */
	export interface ExecutionTrigger {
		triggerType?: TriggerType;
		triggerDetail?: string;
	}

	/** The interaction or event that started a pipeline execution. */
	export interface ExecutionTriggerFormProperties {
		triggerType: FormControl<TriggerType | null | undefined>,
		triggerDetail: FormControl<string | null | undefined>,
	}
	export function CreateExecutionTriggerFormGroup() {
		return new FormGroup<ExecutionTriggerFormProperties>({
			triggerType: new FormControl<TriggerType | null | undefined>(undefined),
			triggerDetail: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum TriggerType { CreatePipeline = 0, StartPipelineExecution = 1, PollForSourceChanges = 2, Webhook = 3, CloudWatchEvent = 4, PutActionRevision = 5 }


	/** The interaction that stopped a pipeline execution. */
	export interface StopExecutionTrigger {
		reason?: string;
	}

	/** The interaction that stopped a pipeline execution. */
	export interface StopExecutionTriggerFormProperties {
		reason: FormControl<string | null | undefined>,
	}
	export function CreateStopExecutionTriggerFormGroup() {
		return new FormGroup<StopExecutionTriggerFormProperties>({
			reason: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents the input of a <code>ListPipelineExecutions</code> action. */
	export interface ListPipelineExecutionsInput {

		/** Required */
		pipelineName: string;
		maxResults?: number | null;
		nextToken?: string;
	}

	/** Represents the input of a <code>ListPipelineExecutions</code> action. */
	export interface ListPipelineExecutionsInputFormProperties {

		/** Required */
		pipelineName: FormControl<string | null | undefined>,
		maxResults: FormControl<number | null | undefined>,
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListPipelineExecutionsInputFormGroup() {
		return new FormGroup<ListPipelineExecutionsInputFormProperties>({
			pipelineName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			maxResults: new FormControl<number | null | undefined>(undefined),
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents the output of a <code>ListPipelines</code> action. */
	export interface ListPipelinesOutput {
		pipelines?: Array<PipelineSummary>;
		nextToken?: string;
	}

	/** Represents the output of a <code>ListPipelines</code> action. */
	export interface ListPipelinesOutputFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListPipelinesOutputFormGroup() {
		return new FormGroup<ListPipelinesOutputFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Returns a summary of a pipeline. */
	export interface PipelineSummary {
		name?: string;
		version?: number | null;
		created?: Date;
		updated?: Date;
	}

	/** Returns a summary of a pipeline. */
	export interface PipelineSummaryFormProperties {
		name: FormControl<string | null | undefined>,
		version: FormControl<number | null | undefined>,
		created: FormControl<Date | null | undefined>,
		updated: FormControl<Date | null | undefined>,
	}
	export function CreatePipelineSummaryFormGroup() {
		return new FormGroup<PipelineSummaryFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			version: new FormControl<number | null | undefined>(undefined),
			created: new FormControl<Date | null | undefined>(undefined),
			updated: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/** Represents the input of a <code>ListPipelines</code> action. */
	export interface ListPipelinesInput {
		nextToken?: string;
		maxResults?: number | null;
	}

	/** Represents the input of a <code>ListPipelines</code> action. */
	export interface ListPipelinesInputFormProperties {
		nextToken: FormControl<string | null | undefined>,
		maxResults: FormControl<number | null | undefined>,
	}
	export function CreateListPipelinesInputFormGroup() {
		return new FormGroup<ListPipelinesInputFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
			maxResults: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ListTagsForResourceOutput {
		tags?: Array<Tag>;
		nextToken?: string;
	}
	export interface ListTagsForResourceOutputFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListTagsForResourceOutputFormGroup() {
		return new FormGroup<ListTagsForResourceOutputFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListTagsForResourceInput {

		/** Required */
		resourceArn: string;
		nextToken?: string;
		maxResults?: number | null;
	}
	export interface ListTagsForResourceInputFormProperties {

		/** Required */
		resourceArn: FormControl<string | null | undefined>,
		nextToken: FormControl<string | null | undefined>,
		maxResults: FormControl<number | null | undefined>,
	}
	export function CreateListTagsForResourceInputFormGroup() {
		return new FormGroup<ListTagsForResourceInputFormProperties>({
			resourceArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			nextToken: new FormControl<string | null | undefined>(undefined),
			maxResults: new FormControl<number | null | undefined>(undefined),
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

	export interface InvalidArnException {
	}
	export interface InvalidArnExceptionFormProperties {
	}
	export function CreateInvalidArnExceptionFormGroup() {
		return new FormGroup<InvalidArnExceptionFormProperties>({
		});

	}

	export interface ListWebhooksOutput {
		webhooks?: Array<ListWebhookItem>;
		NextToken?: string;
	}
	export interface ListWebhooksOutputFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListWebhooksOutputFormGroup() {
		return new FormGroup<ListWebhooksOutputFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The detail returned for each webhook after listing webhooks, such as the webhook URL, the webhook name, and the webhook ARN. */
	export interface ListWebhookItem {

		/** Required */
		definition: WebhookDefinition;

		/** Required */
		url: string;
		errorMessage?: string;
		errorCode?: string;
		lastTriggered?: Date;
		arn?: string;
		tags?: Array<Tag>;
	}

	/** The detail returned for each webhook after listing webhooks, such as the webhook URL, the webhook name, and the webhook ARN. */
	export interface ListWebhookItemFormProperties {

		/** Required */
		url: FormControl<string | null | undefined>,
		errorMessage: FormControl<string | null | undefined>,
		errorCode: FormControl<string | null | undefined>,
		lastTriggered: FormControl<Date | null | undefined>,
		arn: FormControl<string | null | undefined>,
	}
	export function CreateListWebhookItemFormGroup() {
		return new FormGroup<ListWebhookItemFormProperties>({
			url: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			errorMessage: new FormControl<string | null | undefined>(undefined),
			errorCode: new FormControl<string | null | undefined>(undefined),
			lastTriggered: new FormControl<Date | null | undefined>(undefined),
			arn: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents information about a webhook and its definition. */
	export interface WebhookDefinition {

		/** Required */
		name: string;

		/** Required */
		targetPipeline: string;

		/** Required */
		targetAction: string;

		/** Required */
		filters: Array<WebhookFilterRule>;

		/** Required */
		authentication: WebhookAuthenticationType;

		/** Required */
		authenticationConfiguration: WebhookAuthConfiguration;
	}

	/** Represents information about a webhook and its definition. */
	export interface WebhookDefinitionFormProperties {

		/** Required */
		name: FormControl<string | null | undefined>,

		/** Required */
		targetPipeline: FormControl<string | null | undefined>,

		/** Required */
		targetAction: FormControl<string | null | undefined>,

		/** Required */
		authentication: FormControl<WebhookAuthenticationType | null | undefined>,
	}
	export function CreateWebhookDefinitionFormGroup() {
		return new FormGroup<WebhookDefinitionFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			targetPipeline: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			targetAction: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			authentication: new FormControl<WebhookAuthenticationType | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The event criteria that specify when a webhook notification is sent to your URL. */
	export interface WebhookFilterRule {

		/** Required */
		jsonPath: string;
		matchEquals?: string;
	}

	/** The event criteria that specify when a webhook notification is sent to your URL. */
	export interface WebhookFilterRuleFormProperties {

		/** Required */
		jsonPath: FormControl<string | null | undefined>,
		matchEquals: FormControl<string | null | undefined>,
	}
	export function CreateWebhookFilterRuleFormGroup() {
		return new FormGroup<WebhookFilterRuleFormProperties>({
			jsonPath: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			matchEquals: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum WebhookAuthenticationType { GITHUB_HMAC = 0, IP = 1, UNAUTHENTICATED = 2 }


	/** The authentication applied to incoming webhook trigger requests. */
	export interface WebhookAuthConfiguration {
		AllowedIPRange?: string;
		SecretToken?: string;
	}

	/** The authentication applied to incoming webhook trigger requests. */
	export interface WebhookAuthConfigurationFormProperties {
		AllowedIPRange: FormControl<string | null | undefined>,
		SecretToken: FormControl<string | null | undefined>,
	}
	export function CreateWebhookAuthConfigurationFormGroup() {
		return new FormGroup<WebhookAuthConfigurationFormProperties>({
			AllowedIPRange: new FormControl<string | null | undefined>(undefined),
			SecretToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListWebhooksInput {
		NextToken?: string;
		MaxResults?: number | null;
	}
	export interface ListWebhooksInputFormProperties {
		NextToken: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateListWebhooksInputFormGroup() {
		return new FormGroup<ListWebhooksInputFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Represents the output of a <code>PollForJobs</code> action. */
	export interface PollForJobsOutput {
		jobs?: Array<Job>;
	}

	/** Represents the output of a <code>PollForJobs</code> action. */
	export interface PollForJobsOutputFormProperties {
	}
	export function CreatePollForJobsOutputFormGroup() {
		return new FormGroup<PollForJobsOutputFormProperties>({
		});

	}


	/** Represents information about a job. */
	export interface Job {
		id?: string;
		data?: JobData;
		nonce?: string;
		accountId?: string;
	}

	/** Represents information about a job. */
	export interface JobFormProperties {
		id: FormControl<string | null | undefined>,
		nonce: FormControl<string | null | undefined>,
		accountId: FormControl<string | null | undefined>,
	}
	export function CreateJobFormGroup() {
		return new FormGroup<JobFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			nonce: new FormControl<string | null | undefined>(undefined),
			accountId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents the input of a <code>PollForJobs</code> action. */
	export interface PollForJobsInput {

		/** Required */
		actionTypeId: ActionTypeId;
		maxBatchSize?: number | null;
		queryParam?: QueryParamMap;
	}

	/** Represents the input of a <code>PollForJobs</code> action. */
	export interface PollForJobsInputFormProperties {
		maxBatchSize: FormControl<number | null | undefined>,
	}
	export function CreatePollForJobsInputFormGroup() {
		return new FormGroup<PollForJobsInputFormProperties>({
			maxBatchSize: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface QueryParamMap {
	}
	export interface QueryParamMapFormProperties {
	}
	export function CreateQueryParamMapFormGroup() {
		return new FormGroup<QueryParamMapFormProperties>({
		});

	}


	/** Represents the output of a <code>PollForThirdPartyJobs</code> action. */
	export interface PollForThirdPartyJobsOutput {
		jobs?: Array<ThirdPartyJob>;
	}

	/** Represents the output of a <code>PollForThirdPartyJobs</code> action. */
	export interface PollForThirdPartyJobsOutputFormProperties {
	}
	export function CreatePollForThirdPartyJobsOutputFormGroup() {
		return new FormGroup<PollForThirdPartyJobsOutputFormProperties>({
		});

	}


	/** A response to a <code>PollForThirdPartyJobs</code> request returned by CodePipeline when there is a job to be worked on by a partner action. */
	export interface ThirdPartyJob {
		clientId?: string;
		jobId?: string;
	}

	/** A response to a <code>PollForThirdPartyJobs</code> request returned by CodePipeline when there is a job to be worked on by a partner action. */
	export interface ThirdPartyJobFormProperties {
		clientId: FormControl<string | null | undefined>,
		jobId: FormControl<string | null | undefined>,
	}
	export function CreateThirdPartyJobFormGroup() {
		return new FormGroup<ThirdPartyJobFormProperties>({
			clientId: new FormControl<string | null | undefined>(undefined),
			jobId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents the input of a <code>PollForThirdPartyJobs</code> action. */
	export interface PollForThirdPartyJobsInput {

		/** Required */
		actionTypeId: ActionTypeId;
		maxBatchSize?: number | null;
	}

	/** Represents the input of a <code>PollForThirdPartyJobs</code> action. */
	export interface PollForThirdPartyJobsInputFormProperties {
		maxBatchSize: FormControl<number | null | undefined>,
	}
	export function CreatePollForThirdPartyJobsInputFormGroup() {
		return new FormGroup<PollForThirdPartyJobsInputFormProperties>({
			maxBatchSize: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Represents the output of a <code>PutActionRevision</code> action. */
	export interface PutActionRevisionOutput {
		newRevision?: boolean | null;
		pipelineExecutionId?: string;
	}

	/** Represents the output of a <code>PutActionRevision</code> action. */
	export interface PutActionRevisionOutputFormProperties {
		newRevision: FormControl<boolean | null | undefined>,
		pipelineExecutionId: FormControl<string | null | undefined>,
	}
	export function CreatePutActionRevisionOutputFormGroup() {
		return new FormGroup<PutActionRevisionOutputFormProperties>({
			newRevision: new FormControl<boolean | null | undefined>(undefined),
			pipelineExecutionId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents the input of a <code>PutActionRevision</code> action. */
	export interface PutActionRevisionInput {

		/** Required */
		pipelineName: string;

		/** Required */
		stageName: string;

		/** Required */
		actionName: string;

		/** Required */
		actionRevision: ActionRevision;
	}

	/** Represents the input of a <code>PutActionRevision</code> action. */
	export interface PutActionRevisionInputFormProperties {

		/** Required */
		pipelineName: FormControl<string | null | undefined>,

		/** Required */
		stageName: FormControl<string | null | undefined>,

		/** Required */
		actionName: FormControl<string | null | undefined>,
	}
	export function CreatePutActionRevisionInputFormGroup() {
		return new FormGroup<PutActionRevisionInputFormProperties>({
			pipelineName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			stageName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			actionName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ActionNotFoundException {
	}
	export interface ActionNotFoundExceptionFormProperties {
	}
	export function CreateActionNotFoundExceptionFormGroup() {
		return new FormGroup<ActionNotFoundExceptionFormProperties>({
		});

	}


	/** Represents the output of a <code>PutApprovalResult</code> action. */
	export interface PutApprovalResultOutput {
		approvedAt?: Date;
	}

	/** Represents the output of a <code>PutApprovalResult</code> action. */
	export interface PutApprovalResultOutputFormProperties {
		approvedAt: FormControl<Date | null | undefined>,
	}
	export function CreatePutApprovalResultOutputFormGroup() {
		return new FormGroup<PutApprovalResultOutputFormProperties>({
			approvedAt: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/** Represents the input of a <code>PutApprovalResult</code> action. */
	export interface PutApprovalResultInput {

		/** Required */
		pipelineName: string;

		/** Required */
		stageName: string;

		/** Required */
		actionName: string;

		/** Required */
		result: ApprovalResult;

		/** Required */
		token: string;
	}

	/** Represents the input of a <code>PutApprovalResult</code> action. */
	export interface PutApprovalResultInputFormProperties {

		/** Required */
		pipelineName: FormControl<string | null | undefined>,

		/** Required */
		stageName: FormControl<string | null | undefined>,

		/** Required */
		actionName: FormControl<string | null | undefined>,

		/** Required */
		token: FormControl<string | null | undefined>,
	}
	export function CreatePutApprovalResultInputFormGroup() {
		return new FormGroup<PutApprovalResultInputFormProperties>({
			pipelineName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			stageName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			actionName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			token: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Represents information about the result of an approval request. */
	export interface ApprovalResult {

		/** Required */
		summary: string;

		/** Required */
		status: ApprovalStatus;
	}

	/** Represents information about the result of an approval request. */
	export interface ApprovalResultFormProperties {

		/** Required */
		summary: FormControl<string | null | undefined>,

		/** Required */
		status: FormControl<ApprovalStatus | null | undefined>,
	}
	export function CreateApprovalResultFormGroup() {
		return new FormGroup<ApprovalResultFormProperties>({
			summary: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<ApprovalStatus | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum ApprovalStatus { Approved = 0, Rejected = 1 }

	export interface InvalidApprovalTokenException {
	}
	export interface InvalidApprovalTokenExceptionFormProperties {
	}
	export function CreateInvalidApprovalTokenExceptionFormGroup() {
		return new FormGroup<InvalidApprovalTokenExceptionFormProperties>({
		});

	}

	export interface ApprovalAlreadyCompletedException {
	}
	export interface ApprovalAlreadyCompletedExceptionFormProperties {
	}
	export function CreateApprovalAlreadyCompletedExceptionFormGroup() {
		return new FormGroup<ApprovalAlreadyCompletedExceptionFormProperties>({
		});

	}


	/** Represents the input of a <code>PutJobFailureResult</code> action. */
	export interface PutJobFailureResultInput {

		/** Required */
		jobId: string;

		/** Required */
		failureDetails: FailureDetails;
	}

	/** Represents the input of a <code>PutJobFailureResult</code> action. */
	export interface PutJobFailureResultInputFormProperties {

		/** Required */
		jobId: FormControl<string | null | undefined>,
	}
	export function CreatePutJobFailureResultInputFormGroup() {
		return new FormGroup<PutJobFailureResultInputFormProperties>({
			jobId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Represents information about failure details. */
	export interface FailureDetails {

		/** Required */
		type: FailureType;

		/** Required */
		message: string;
		externalExecutionId?: string;
	}

	/** Represents information about failure details. */
	export interface FailureDetailsFormProperties {

		/** Required */
		type: FormControl<FailureType | null | undefined>,

		/** Required */
		message: FormControl<string | null | undefined>,
		externalExecutionId: FormControl<string | null | undefined>,
	}
	export function CreateFailureDetailsFormGroup() {
		return new FormGroup<FailureDetailsFormProperties>({
			type: new FormControl<FailureType | null | undefined>(undefined, [Validators.required]),
			message: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			externalExecutionId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum FailureType { JobFailed = 0, ConfigurationError = 1, PermissionError = 2, RevisionOutOfSync = 3, RevisionUnavailable = 4, SystemUnavailable = 5 }

	export interface InvalidJobStateException {
	}
	export interface InvalidJobStateExceptionFormProperties {
	}
	export function CreateInvalidJobStateExceptionFormGroup() {
		return new FormGroup<InvalidJobStateExceptionFormProperties>({
		});

	}


	/** Represents the input of a <code>PutJobSuccessResult</code> action. */
	export interface PutJobSuccessResultInput {

		/** Required */
		jobId: string;
		currentRevision?: CurrentRevision;
		continuationToken?: string;
		executionDetails?: ExecutionDetails;
		outputVariables?: OutputVariablesMap;
	}

	/** Represents the input of a <code>PutJobSuccessResult</code> action. */
	export interface PutJobSuccessResultInputFormProperties {

		/** Required */
		jobId: FormControl<string | null | undefined>,
		continuationToken: FormControl<string | null | undefined>,
	}
	export function CreatePutJobSuccessResultInputFormGroup() {
		return new FormGroup<PutJobSuccessResultInputFormProperties>({
			jobId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			continuationToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents information about a current revision. */
	export interface CurrentRevision {

		/** Required */
		revision: string;

		/** Required */
		changeIdentifier: string;
		created?: Date;
		revisionSummary?: string;
	}

	/** Represents information about a current revision. */
	export interface CurrentRevisionFormProperties {

		/** Required */
		revision: FormControl<string | null | undefined>,

		/** Required */
		changeIdentifier: FormControl<string | null | undefined>,
		created: FormControl<Date | null | undefined>,
		revisionSummary: FormControl<string | null | undefined>,
	}
	export function CreateCurrentRevisionFormGroup() {
		return new FormGroup<CurrentRevisionFormProperties>({
			revision: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			changeIdentifier: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			created: new FormControl<Date | null | undefined>(undefined),
			revisionSummary: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The details of the actions taken and results produced on an artifact as it passes through stages in the pipeline. */
	export interface ExecutionDetails {
		summary?: string;
		externalExecutionId?: string;
		percentComplete?: number | null;
	}

	/** The details of the actions taken and results produced on an artifact as it passes through stages in the pipeline. */
	export interface ExecutionDetailsFormProperties {
		summary: FormControl<string | null | undefined>,
		externalExecutionId: FormControl<string | null | undefined>,
		percentComplete: FormControl<number | null | undefined>,
	}
	export function CreateExecutionDetailsFormGroup() {
		return new FormGroup<ExecutionDetailsFormProperties>({
			summary: new FormControl<string | null | undefined>(undefined),
			externalExecutionId: new FormControl<string | null | undefined>(undefined),
			percentComplete: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface OutputVariablesSizeExceededException {
	}
	export interface OutputVariablesSizeExceededExceptionFormProperties {
	}
	export function CreateOutputVariablesSizeExceededExceptionFormGroup() {
		return new FormGroup<OutputVariablesSizeExceededExceptionFormProperties>({
		});

	}


	/** Represents the input of a <code>PutThirdPartyJobFailureResult</code> action. */
	export interface PutThirdPartyJobFailureResultInput {

		/** Required */
		jobId: string;

		/** Required */
		clientToken: string;

		/** Required */
		failureDetails: FailureDetails;
	}

	/** Represents the input of a <code>PutThirdPartyJobFailureResult</code> action. */
	export interface PutThirdPartyJobFailureResultInputFormProperties {

		/** Required */
		jobId: FormControl<string | null | undefined>,

		/** Required */
		clientToken: FormControl<string | null | undefined>,
	}
	export function CreatePutThirdPartyJobFailureResultInputFormGroup() {
		return new FormGroup<PutThirdPartyJobFailureResultInputFormProperties>({
			jobId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			clientToken: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Represents the input of a <code>PutThirdPartyJobSuccessResult</code> action. */
	export interface PutThirdPartyJobSuccessResultInput {

		/** Required */
		jobId: string;

		/** Required */
		clientToken: string;
		currentRevision?: CurrentRevision;
		continuationToken?: string;
		executionDetails?: ExecutionDetails;
	}

	/** Represents the input of a <code>PutThirdPartyJobSuccessResult</code> action. */
	export interface PutThirdPartyJobSuccessResultInputFormProperties {

		/** Required */
		jobId: FormControl<string | null | undefined>,

		/** Required */
		clientToken: FormControl<string | null | undefined>,
		continuationToken: FormControl<string | null | undefined>,
	}
	export function CreatePutThirdPartyJobSuccessResultInputFormGroup() {
		return new FormGroup<PutThirdPartyJobSuccessResultInputFormProperties>({
			jobId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			clientToken: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			continuationToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PutWebhookOutput {
		webhook?: ListWebhookItem;
	}
	export interface PutWebhookOutputFormProperties {
	}
	export function CreatePutWebhookOutputFormGroup() {
		return new FormGroup<PutWebhookOutputFormProperties>({
		});

	}

	export interface PutWebhookInput {

		/** Required */
		webhook: WebhookDefinition;
		tags?: Array<Tag>;
	}
	export interface PutWebhookInputFormProperties {
	}
	export function CreatePutWebhookInputFormGroup() {
		return new FormGroup<PutWebhookInputFormProperties>({
		});

	}

	export interface InvalidWebhookFilterPatternException {
	}
	export interface InvalidWebhookFilterPatternExceptionFormProperties {
	}
	export function CreateInvalidWebhookFilterPatternExceptionFormGroup() {
		return new FormGroup<InvalidWebhookFilterPatternExceptionFormProperties>({
		});

	}

	export interface InvalidWebhookAuthenticationParametersException {
	}
	export interface InvalidWebhookAuthenticationParametersExceptionFormProperties {
	}
	export function CreateInvalidWebhookAuthenticationParametersExceptionFormGroup() {
		return new FormGroup<InvalidWebhookAuthenticationParametersExceptionFormProperties>({
		});

	}

	export interface RegisterWebhookWithThirdPartyOutput {
	}
	export interface RegisterWebhookWithThirdPartyOutputFormProperties {
	}
	export function CreateRegisterWebhookWithThirdPartyOutputFormGroup() {
		return new FormGroup<RegisterWebhookWithThirdPartyOutputFormProperties>({
		});

	}

	export interface RegisterWebhookWithThirdPartyInput {
		webhookName?: string;
	}
	export interface RegisterWebhookWithThirdPartyInputFormProperties {
		webhookName: FormControl<string | null | undefined>,
	}
	export function CreateRegisterWebhookWithThirdPartyInputFormGroup() {
		return new FormGroup<RegisterWebhookWithThirdPartyInputFormProperties>({
			webhookName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents the output of a <code>RetryStageExecution</code> action. */
	export interface RetryStageExecutionOutput {
		pipelineExecutionId?: string;
	}

	/** Represents the output of a <code>RetryStageExecution</code> action. */
	export interface RetryStageExecutionOutputFormProperties {
		pipelineExecutionId: FormControl<string | null | undefined>,
	}
	export function CreateRetryStageExecutionOutputFormGroup() {
		return new FormGroup<RetryStageExecutionOutputFormProperties>({
			pipelineExecutionId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents the input of a <code>RetryStageExecution</code> action. */
	export interface RetryStageExecutionInput {

		/** Required */
		pipelineName: string;

		/** Required */
		stageName: string;

		/** Required */
		pipelineExecutionId: string;

		/** Required */
		retryMode: StageRetryMode;
	}

	/** Represents the input of a <code>RetryStageExecution</code> action. */
	export interface RetryStageExecutionInputFormProperties {

		/** Required */
		pipelineName: FormControl<string | null | undefined>,

		/** Required */
		stageName: FormControl<string | null | undefined>,

		/** Required */
		pipelineExecutionId: FormControl<string | null | undefined>,

		/** Required */
		retryMode: FormControl<StageRetryMode | null | undefined>,
	}
	export function CreateRetryStageExecutionInputFormGroup() {
		return new FormGroup<RetryStageExecutionInputFormProperties>({
			pipelineName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			stageName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			pipelineExecutionId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			retryMode: new FormControl<StageRetryMode | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum StageRetryMode { FAILED_ACTIONS = 0 }

	export interface ConflictException {
	}
	export interface ConflictExceptionFormProperties {
	}
	export function CreateConflictExceptionFormGroup() {
		return new FormGroup<ConflictExceptionFormProperties>({
		});

	}

	export interface StageNotRetryableException {
	}
	export interface StageNotRetryableExceptionFormProperties {
	}
	export function CreateStageNotRetryableExceptionFormGroup() {
		return new FormGroup<StageNotRetryableExceptionFormProperties>({
		});

	}

	export interface NotLatestPipelineExecutionException {
	}
	export interface NotLatestPipelineExecutionExceptionFormProperties {
	}
	export function CreateNotLatestPipelineExecutionExceptionFormGroup() {
		return new FormGroup<NotLatestPipelineExecutionExceptionFormProperties>({
		});

	}


	/** Represents the output of a <code>StartPipelineExecution</code> action. */
	export interface StartPipelineExecutionOutput {
		pipelineExecutionId?: string;
	}

	/** Represents the output of a <code>StartPipelineExecution</code> action. */
	export interface StartPipelineExecutionOutputFormProperties {
		pipelineExecutionId: FormControl<string | null | undefined>,
	}
	export function CreateStartPipelineExecutionOutputFormGroup() {
		return new FormGroup<StartPipelineExecutionOutputFormProperties>({
			pipelineExecutionId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents the input of a <code>StartPipelineExecution</code> action. */
	export interface StartPipelineExecutionInput {

		/** Required */
		name: string;
		clientRequestToken?: string;
	}

	/** Represents the input of a <code>StartPipelineExecution</code> action. */
	export interface StartPipelineExecutionInputFormProperties {

		/** Required */
		name: FormControl<string | null | undefined>,
		clientRequestToken: FormControl<string | null | undefined>,
	}
	export function CreateStartPipelineExecutionInputFormGroup() {
		return new FormGroup<StartPipelineExecutionInputFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			clientRequestToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface StopPipelineExecutionOutput {
		pipelineExecutionId?: string;
	}
	export interface StopPipelineExecutionOutputFormProperties {
		pipelineExecutionId: FormControl<string | null | undefined>,
	}
	export function CreateStopPipelineExecutionOutputFormGroup() {
		return new FormGroup<StopPipelineExecutionOutputFormProperties>({
			pipelineExecutionId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface StopPipelineExecutionInput {

		/** Required */
		pipelineName: string;

		/** Required */
		pipelineExecutionId: string;
		abandon?: boolean | null;
		reason?: string;
	}
	export interface StopPipelineExecutionInputFormProperties {

		/** Required */
		pipelineName: FormControl<string | null | undefined>,

		/** Required */
		pipelineExecutionId: FormControl<string | null | undefined>,
		abandon: FormControl<boolean | null | undefined>,
		reason: FormControl<string | null | undefined>,
	}
	export function CreateStopPipelineExecutionInputFormGroup() {
		return new FormGroup<StopPipelineExecutionInputFormProperties>({
			pipelineName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			pipelineExecutionId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			abandon: new FormControl<boolean | null | undefined>(undefined),
			reason: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PipelineExecutionNotStoppableException {
	}
	export interface PipelineExecutionNotStoppableExceptionFormProperties {
	}
	export function CreatePipelineExecutionNotStoppableExceptionFormGroup() {
		return new FormGroup<PipelineExecutionNotStoppableExceptionFormProperties>({
		});

	}

	export interface DuplicatedStopRequestException {
	}
	export interface DuplicatedStopRequestExceptionFormProperties {
	}
	export function CreateDuplicatedStopRequestExceptionFormGroup() {
		return new FormGroup<DuplicatedStopRequestExceptionFormProperties>({
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

	export interface TagResourceInput {

		/** Required */
		resourceArn: string;

		/** Required */
		tags: Array<Tag>;
	}
	export interface TagResourceInputFormProperties {

		/** Required */
		resourceArn: FormControl<string | null | undefined>,
	}
	export function CreateTagResourceInputFormGroup() {
		return new FormGroup<TagResourceInputFormProperties>({
			resourceArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
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

	export interface UntagResourceInput {

		/** Required */
		resourceArn: string;

		/** Required */
		tagKeys: Array<string>;
	}
	export interface UntagResourceInputFormProperties {

		/** Required */
		resourceArn: FormControl<string | null | undefined>,
	}
	export function CreateUntagResourceInputFormGroup() {
		return new FormGroup<UntagResourceInputFormProperties>({
			resourceArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UpdateActionTypeInput {

		/** Required */
		actionType: ActionTypeDeclaration;
	}
	export interface UpdateActionTypeInputFormProperties {
	}
	export function CreateUpdateActionTypeInputFormGroup() {
		return new FormGroup<UpdateActionTypeInputFormProperties>({
		});

	}

	export interface RequestFailedException {
	}
	export interface RequestFailedExceptionFormProperties {
	}
	export function CreateRequestFailedExceptionFormGroup() {
		return new FormGroup<RequestFailedExceptionFormProperties>({
		});

	}


	/** Represents the output of an <code>UpdatePipeline</code> action. */
	export interface UpdatePipelineOutput {
		pipeline?: PipelineDeclaration;
	}

	/** Represents the output of an <code>UpdatePipeline</code> action. */
	export interface UpdatePipelineOutputFormProperties {
	}
	export function CreateUpdatePipelineOutputFormGroup() {
		return new FormGroup<UpdatePipelineOutputFormProperties>({
		});

	}


	/** Represents the input of an <code>UpdatePipeline</code> action. */
	export interface UpdatePipelineInput {

		/** Required */
		pipeline: PipelineDeclaration;
	}

	/** Represents the input of an <code>UpdatePipeline</code> action. */
	export interface UpdatePipelineInputFormProperties {
	}
	export function CreateUpdatePipelineInputFormGroup() {
		return new FormGroup<UpdatePipelineInputFormProperties>({
		});

	}


	/** Represents information about each property specified in the action configuration, such as the description and key name that display for the customer using the action type. */
	export interface ActionTypeProperty {

		/** Required */
		name: string;

		/** Required */
		optional: boolean;

		/** Required */
		key: boolean;

		/** Required */
		noEcho: boolean;
		queryable?: boolean | null;
		description?: string;
	}

	/** Represents information about each property specified in the action configuration, such as the description and key name that display for the customer using the action type. */
	export interface ActionTypePropertyFormProperties {

		/** Required */
		name: FormControl<string | null | undefined>,

		/** Required */
		optional: FormControl<boolean | null | undefined>,

		/** Required */
		key: FormControl<boolean | null | undefined>,

		/** Required */
		noEcho: FormControl<boolean | null | undefined>,
		queryable: FormControl<boolean | null | undefined>,
		description: FormControl<string | null | undefined>,
	}
	export function CreateActionTypePropertyFormGroup() {
		return new FormGroup<ActionTypePropertyFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			optional: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			key: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			noEcho: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			queryable: new FormControl<boolean | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ArtifactLocationType { S3 = 0 }

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Returns information about a specified job and whether that job has been received by the job worker. Used for custom actions only.
		 * Post #X-Amz-Target=CodePipeline_20150709.AcknowledgeJob
		 * @return {AcknowledgeJobOutput} Success
		 */
		AcknowledgeJob(requestBody: AcknowledgeJobInput): Observable<AcknowledgeJobOutput> {
			return this.http.post<AcknowledgeJobOutput>(this.baseUri + '#X-Amz-Target=CodePipeline_20150709.AcknowledgeJob', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Confirms a job worker has received the specified job. Used for partner actions only.
		 * Post #X-Amz-Target=CodePipeline_20150709.AcknowledgeThirdPartyJob
		 * @return {AcknowledgeThirdPartyJobOutput} Success
		 */
		AcknowledgeThirdPartyJob(requestBody: AcknowledgeThirdPartyJobInput): Observable<AcknowledgeThirdPartyJobOutput> {
			return this.http.post<AcknowledgeThirdPartyJobOutput>(this.baseUri + '#X-Amz-Target=CodePipeline_20150709.AcknowledgeThirdPartyJob', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Creates a new custom action that can be used in all pipelines associated with the Amazon Web Services account. Only used for custom actions.
		 * Post #X-Amz-Target=CodePipeline_20150709.CreateCustomActionType
		 * @return {CreateCustomActionTypeOutput} Success
		 */
		CreateCustomActionType(requestBody: CreateCustomActionTypeInput): Observable<CreateCustomActionTypeOutput> {
			return this.http.post<CreateCustomActionTypeOutput>(this.baseUri + '#X-Amz-Target=CodePipeline_20150709.CreateCustomActionType', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Creates a pipeline.</p> <note> <p>In the pipeline structure, you must include either <code>artifactStore</code> or <code>artifactStores</code> in your pipeline, but you cannot use both. If you create a cross-region action in your pipeline, you must use <code>artifactStores</code>.</p> </note>
		 * Post #X-Amz-Target=CodePipeline_20150709.CreatePipeline
		 * @return {CreatePipelineOutput} Success
		 */
		CreatePipeline(requestBody: CreatePipelineInput): Observable<CreatePipelineOutput> {
			return this.http.post<CreatePipelineOutput>(this.baseUri + '#X-Amz-Target=CodePipeline_20150709.CreatePipeline', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Marks a custom action as deleted. <code>PollForJobs</code> for the custom action fails after the action is marked for deletion. Used for custom actions only.</p> <important> <p>To re-create a custom action after it has been deleted you must use a string in the version field that has never been used before. This string can be an incremented version number, for example. To restore a deleted custom action, use a JSON file that is identical to the deleted action, including the original string in the version field.</p> </important>
		 * Post #X-Amz-Target=CodePipeline_20150709.DeleteCustomActionType
		 * @return {void} Success
		 */
		DeleteCustomActionType(requestBody: DeleteCustomActionTypeInput): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '#X-Amz-Target=CodePipeline_20150709.DeleteCustomActionType', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Deletes the specified pipeline.
		 * Post #X-Amz-Target=CodePipeline_20150709.DeletePipeline
		 * @return {void} Success
		 */
		DeletePipeline(requestBody: DeletePipelineInput): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '#X-Amz-Target=CodePipeline_20150709.DeletePipeline', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Deletes a previously created webhook by name. Deleting the webhook stops CodePipeline from starting a pipeline every time an external event occurs. The API returns successfully when trying to delete a webhook that is already deleted. If a deleted webhook is re-created by calling PutWebhook with the same name, it will have a different URL.
		 * Post #X-Amz-Target=CodePipeline_20150709.DeleteWebhook
		 * @return {DeleteWebhookOutput} Success
		 */
		DeleteWebhook(requestBody: DeleteWebhookInput): Observable<DeleteWebhookOutput> {
			return this.http.post<DeleteWebhookOutput>(this.baseUri + '#X-Amz-Target=CodePipeline_20150709.DeleteWebhook', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Removes the connection between the webhook that was created by CodePipeline and the external tool with events to be detected. Currently supported only for webhooks that target an action type of GitHub.
		 * Post #X-Amz-Target=CodePipeline_20150709.DeregisterWebhookWithThirdParty
		 * @return {DeregisterWebhookWithThirdPartyOutput} Success
		 */
		DeregisterWebhookWithThirdParty(requestBody: DeregisterWebhookWithThirdPartyInput): Observable<DeregisterWebhookWithThirdPartyOutput> {
			return this.http.post<DeregisterWebhookWithThirdPartyOutput>(this.baseUri + '#X-Amz-Target=CodePipeline_20150709.DeregisterWebhookWithThirdParty', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Prevents artifacts in a pipeline from transitioning to the next stage in the pipeline.
		 * Post #X-Amz-Target=CodePipeline_20150709.DisableStageTransition
		 * @return {void} Success
		 */
		DisableStageTransition(requestBody: DisableStageTransitionInput): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '#X-Amz-Target=CodePipeline_20150709.DisableStageTransition', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Enables artifacts in a pipeline to transition to a stage in a pipeline.
		 * Post #X-Amz-Target=CodePipeline_20150709.EnableStageTransition
		 * @return {void} Success
		 */
		EnableStageTransition(requestBody: EnableStageTransitionInput): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '#X-Amz-Target=CodePipeline_20150709.EnableStageTransition', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns information about an action type created for an external provider, where the action is to be used by customers of the external provider. The action can be created with any supported integration model.
		 * Post #X-Amz-Target=CodePipeline_20150709.GetActionType
		 * @return {GetActionTypeOutput} Success
		 */
		GetActionType(requestBody: GetActionTypeInput): Observable<GetActionTypeOutput> {
			return this.http.post<GetActionTypeOutput>(this.baseUri + '#X-Amz-Target=CodePipeline_20150709.GetActionType', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Returns information about a job. Used for custom actions only.</p> <important> <p>When this API is called, CodePipeline returns temporary credentials for the S3 bucket used to store artifacts for the pipeline, if the action requires access to that S3 bucket for input or output artifacts. This API also returns any secret values defined for the action.</p> </important>
		 * Post #X-Amz-Target=CodePipeline_20150709.GetJobDetails
		 * @return {GetJobDetailsOutput} Success
		 */
		GetJobDetails(requestBody: GetJobDetailsInput): Observable<GetJobDetailsOutput> {
			return this.http.post<GetJobDetailsOutput>(this.baseUri + '#X-Amz-Target=CodePipeline_20150709.GetJobDetails', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns the metadata, structure, stages, and actions of a pipeline. Can be used to return the entire structure of a pipeline in JSON format, which can then be modified and used to update the pipeline structure with <a>UpdatePipeline</a>.
		 * Post #X-Amz-Target=CodePipeline_20150709.GetPipeline
		 * @return {GetPipelineOutput} Success
		 */
		GetPipeline(requestBody: GetPipelineInput): Observable<GetPipelineOutput> {
			return this.http.post<GetPipelineOutput>(this.baseUri + '#X-Amz-Target=CodePipeline_20150709.GetPipeline', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns information about an execution of a pipeline, including details about artifacts, the pipeline execution ID, and the name, version, and status of the pipeline.
		 * Post #X-Amz-Target=CodePipeline_20150709.GetPipelineExecution
		 * @return {GetPipelineExecutionOutput} Success
		 */
		GetPipelineExecution(requestBody: GetPipelineExecutionInput): Observable<GetPipelineExecutionOutput> {
			return this.http.post<GetPipelineExecutionOutput>(this.baseUri + '#X-Amz-Target=CodePipeline_20150709.GetPipelineExecution', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Returns information about the state of a pipeline, including the stages and actions.</p> <note> <p>Values returned in the <code>revisionId</code> and <code>revisionUrl</code> fields indicate the source revision information, such as the commit ID, for the current state.</p> </note>
		 * Post #X-Amz-Target=CodePipeline_20150709.GetPipelineState
		 * @return {GetPipelineStateOutput} Success
		 */
		GetPipelineState(requestBody: GetPipelineStateInput): Observable<GetPipelineStateOutput> {
			return this.http.post<GetPipelineStateOutput>(this.baseUri + '#X-Amz-Target=CodePipeline_20150709.GetPipelineState', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Requests the details of a job for a third party action. Used for partner actions only.</p> <important> <p>When this API is called, CodePipeline returns temporary credentials for the S3 bucket used to store artifacts for the pipeline, if the action requires access to that S3 bucket for input or output artifacts. This API also returns any secret values defined for the action.</p> </important>
		 * Post #X-Amz-Target=CodePipeline_20150709.GetThirdPartyJobDetails
		 * @return {GetThirdPartyJobDetailsOutput} Success
		 */
		GetThirdPartyJobDetails(requestBody: GetThirdPartyJobDetailsInput): Observable<GetThirdPartyJobDetailsOutput> {
			return this.http.post<GetThirdPartyJobDetailsOutput>(this.baseUri + '#X-Amz-Target=CodePipeline_20150709.GetThirdPartyJobDetails', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists the action executions that have occurred in a pipeline.
		 * Post #X-Amz-Target=CodePipeline_20150709.ListActionExecutions
		 * @param {string} maxResults Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {ListActionExecutionsOutput} Success
		 */
		ListActionExecutions(maxResults: string | null | undefined, nextToken: string | null | undefined, requestBody: ListActionExecutionsInput): Observable<ListActionExecutionsOutput> {
			return this.http.post<ListActionExecutionsOutput>(this.baseUri + '#X-Amz-Target=CodePipeline_20150709.ListActionExecutions?maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets a summary of all CodePipeline action types associated with your account.
		 * Post #X-Amz-Target=CodePipeline_20150709.ListActionTypes
		 * @param {string} nextToken Pagination token
		 * @return {ListActionTypesOutput} Success
		 */
		ListActionTypes(nextToken: string | null | undefined, requestBody: ListActionTypesInput): Observable<ListActionTypesOutput> {
			return this.http.post<ListActionTypesOutput>(this.baseUri + '#X-Amz-Target=CodePipeline_20150709.ListActionTypes?nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets a summary of the most recent executions for a pipeline.
		 * Post #X-Amz-Target=CodePipeline_20150709.ListPipelineExecutions
		 * @param {string} maxResults Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {ListPipelineExecutionsOutput} Success
		 */
		ListPipelineExecutions(maxResults: string | null | undefined, nextToken: string | null | undefined, requestBody: ListPipelineExecutionsInput): Observable<ListPipelineExecutionsOutput> {
			return this.http.post<ListPipelineExecutionsOutput>(this.baseUri + '#X-Amz-Target=CodePipeline_20150709.ListPipelineExecutions?maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets a summary of all of the pipelines associated with your account.
		 * Post #X-Amz-Target=CodePipeline_20150709.ListPipelines
		 * @param {string} maxResults Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {ListPipelinesOutput} Success
		 */
		ListPipelines(maxResults: string | null | undefined, nextToken: string | null | undefined, requestBody: ListPipelinesInput): Observable<ListPipelinesOutput> {
			return this.http.post<ListPipelinesOutput>(this.baseUri + '#X-Amz-Target=CodePipeline_20150709.ListPipelines?maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets the set of key-value pairs (metadata) that are used to manage the resource.
		 * Post #X-Amz-Target=CodePipeline_20150709.ListTagsForResource
		 * @param {string} maxResults Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {ListTagsForResourceOutput} Success
		 */
		ListTagsForResource(maxResults: string | null | undefined, nextToken: string | null | undefined, requestBody: ListTagsForResourceInput): Observable<ListTagsForResourceOutput> {
			return this.http.post<ListTagsForResourceOutput>(this.baseUri + '#X-Amz-Target=CodePipeline_20150709.ListTagsForResource?maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets a listing of all the webhooks in this Amazon Web Services Region for this account. The output lists all webhooks and includes the webhook URL and ARN and the configuration for each webhook.
		 * Post #X-Amz-Target=CodePipeline_20150709.ListWebhooks
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListWebhooksOutput} Success
		 */
		ListWebhooks(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListWebhooksInput): Observable<ListWebhooksOutput> {
			return this.http.post<ListWebhooksOutput>(this.baseUri + '#X-Amz-Target=CodePipeline_20150709.ListWebhooks?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Returns information about any jobs for CodePipeline to act on. <code>PollForJobs</code> is valid only for action types with "Custom" in the owner field. If the action type contains <code>AWS</code> or <code>ThirdParty</code> in the owner field, the <code>PollForJobs</code> action returns an error.</p> <important> <p>When this API is called, CodePipeline returns temporary credentials for the S3 bucket used to store artifacts for the pipeline, if the action requires access to that S3 bucket for input or output artifacts. This API also returns any secret values defined for the action.</p> </important>
		 * Post #X-Amz-Target=CodePipeline_20150709.PollForJobs
		 * @return {PollForJobsOutput} Success
		 */
		PollForJobs(requestBody: PollForJobsInput): Observable<PollForJobsOutput> {
			return this.http.post<PollForJobsOutput>(this.baseUri + '#X-Amz-Target=CodePipeline_20150709.PollForJobs', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Determines whether there are any third party jobs for a job worker to act on. Used for partner actions only.</p> <important> <p>When this API is called, CodePipeline returns temporary credentials for the S3 bucket used to store artifacts for the pipeline, if the action requires access to that S3 bucket for input or output artifacts.</p> </important>
		 * Post #X-Amz-Target=CodePipeline_20150709.PollForThirdPartyJobs
		 * @return {PollForThirdPartyJobsOutput} Success
		 */
		PollForThirdPartyJobs(requestBody: PollForThirdPartyJobsInput): Observable<PollForThirdPartyJobsOutput> {
			return this.http.post<PollForThirdPartyJobsOutput>(this.baseUri + '#X-Amz-Target=CodePipeline_20150709.PollForThirdPartyJobs', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Provides information to CodePipeline about new revisions to a source.
		 * Post #X-Amz-Target=CodePipeline_20150709.PutActionRevision
		 * @return {PutActionRevisionOutput} Success
		 */
		PutActionRevision(requestBody: PutActionRevisionInput): Observable<PutActionRevisionOutput> {
			return this.http.post<PutActionRevisionOutput>(this.baseUri + '#X-Amz-Target=CodePipeline_20150709.PutActionRevision', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Provides the response to a manual approval request to CodePipeline. Valid responses include Approved and Rejected.
		 * Post #X-Amz-Target=CodePipeline_20150709.PutApprovalResult
		 * @return {PutApprovalResultOutput} Success
		 */
		PutApprovalResult(requestBody: PutApprovalResultInput): Observable<PutApprovalResultOutput> {
			return this.http.post<PutApprovalResultOutput>(this.baseUri + '#X-Amz-Target=CodePipeline_20150709.PutApprovalResult', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Represents the failure of a job as returned to the pipeline by a job worker. Used for custom actions only.
		 * Post #X-Amz-Target=CodePipeline_20150709.PutJobFailureResult
		 * @return {void} Success
		 */
		PutJobFailureResult(requestBody: PutJobFailureResultInput): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '#X-Amz-Target=CodePipeline_20150709.PutJobFailureResult', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Represents the success of a job as returned to the pipeline by a job worker. Used for custom actions only.
		 * Post #X-Amz-Target=CodePipeline_20150709.PutJobSuccessResult
		 * @return {void} Success
		 */
		PutJobSuccessResult(requestBody: PutJobSuccessResultInput): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '#X-Amz-Target=CodePipeline_20150709.PutJobSuccessResult', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Represents the failure of a third party job as returned to the pipeline by a job worker. Used for partner actions only.
		 * Post #X-Amz-Target=CodePipeline_20150709.PutThirdPartyJobFailureResult
		 * @return {void} Success
		 */
		PutThirdPartyJobFailureResult(requestBody: PutThirdPartyJobFailureResultInput): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '#X-Amz-Target=CodePipeline_20150709.PutThirdPartyJobFailureResult', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Represents the success of a third party job as returned to the pipeline by a job worker. Used for partner actions only.
		 * Post #X-Amz-Target=CodePipeline_20150709.PutThirdPartyJobSuccessResult
		 * @return {void} Success
		 */
		PutThirdPartyJobSuccessResult(requestBody: PutThirdPartyJobSuccessResultInput): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '#X-Amz-Target=CodePipeline_20150709.PutThirdPartyJobSuccessResult', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Defines a webhook and returns a unique webhook URL generated by CodePipeline. This URL can be supplied to third party source hosting providers to call every time there's a code change. When CodePipeline receives a POST request on this URL, the pipeline defined in the webhook is started as long as the POST request satisfied the authentication and filtering requirements supplied when defining the webhook. RegisterWebhookWithThirdParty and DeregisterWebhookWithThirdParty APIs can be used to automatically configure supported third parties to call the generated webhook URL.
		 * Post #X-Amz-Target=CodePipeline_20150709.PutWebhook
		 * @return {PutWebhookOutput} Success
		 */
		PutWebhook(requestBody: PutWebhookInput): Observable<PutWebhookOutput> {
			return this.http.post<PutWebhookOutput>(this.baseUri + '#X-Amz-Target=CodePipeline_20150709.PutWebhook', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Configures a connection between the webhook that was created and the external tool with events to be detected.
		 * Post #X-Amz-Target=CodePipeline_20150709.RegisterWebhookWithThirdParty
		 * @return {RegisterWebhookWithThirdPartyOutput} Success
		 */
		RegisterWebhookWithThirdParty(requestBody: RegisterWebhookWithThirdPartyInput): Observable<RegisterWebhookWithThirdPartyOutput> {
			return this.http.post<RegisterWebhookWithThirdPartyOutput>(this.baseUri + '#X-Amz-Target=CodePipeline_20150709.RegisterWebhookWithThirdParty', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Resumes the pipeline execution by retrying the last failed actions in a stage. You can retry a stage immediately if any of the actions in the stage fail. When you retry, all actions that are still in progress continue working, and failed actions are triggered again.
		 * Post #X-Amz-Target=CodePipeline_20150709.RetryStageExecution
		 * @return {RetryStageExecutionOutput} Success
		 */
		RetryStageExecution(requestBody: RetryStageExecutionInput): Observable<RetryStageExecutionOutput> {
			return this.http.post<RetryStageExecutionOutput>(this.baseUri + '#X-Amz-Target=CodePipeline_20150709.RetryStageExecution', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Starts the specified pipeline. Specifically, it begins processing the latest commit to the source location specified as part of the pipeline.
		 * Post #X-Amz-Target=CodePipeline_20150709.StartPipelineExecution
		 * @return {StartPipelineExecutionOutput} Success
		 */
		StartPipelineExecution(requestBody: StartPipelineExecutionInput): Observable<StartPipelineExecutionOutput> {
			return this.http.post<StartPipelineExecutionOutput>(this.baseUri + '#X-Amz-Target=CodePipeline_20150709.StartPipelineExecution', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Stops the specified pipeline execution. You choose to either stop the pipeline execution by completing in-progress actions without starting subsequent actions, or by abandoning in-progress actions. While completing or abandoning in-progress actions, the pipeline execution is in a <code>Stopping</code> state. After all in-progress actions are completed or abandoned, the pipeline execution is in a <code>Stopped</code> state.
		 * Post #X-Amz-Target=CodePipeline_20150709.StopPipelineExecution
		 * @return {StopPipelineExecutionOutput} Success
		 */
		StopPipelineExecution(requestBody: StopPipelineExecutionInput): Observable<StopPipelineExecutionOutput> {
			return this.http.post<StopPipelineExecutionOutput>(this.baseUri + '#X-Amz-Target=CodePipeline_20150709.StopPipelineExecution', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Adds to or modifies the tags of the given resource. Tags are metadata that can be used to manage a resource.
		 * Post #X-Amz-Target=CodePipeline_20150709.TagResource
		 * @return {TagResourceOutput} Success
		 */
		TagResource(requestBody: TagResourceInput): Observable<TagResourceOutput> {
			return this.http.post<TagResourceOutput>(this.baseUri + '#X-Amz-Target=CodePipeline_20150709.TagResource', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Removes tags from an Amazon Web Services resource.
		 * Post #X-Amz-Target=CodePipeline_20150709.UntagResource
		 * @return {UntagResourceOutput} Success
		 */
		UntagResource(requestBody: UntagResourceInput): Observable<UntagResourceOutput> {
			return this.http.post<UntagResourceOutput>(this.baseUri + '#X-Amz-Target=CodePipeline_20150709.UntagResource', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Updates an action type that was created with any supported integration model, where the action type is to be used by customers of the action type provider. Use a JSON file with the action definition and <code>UpdateActionType</code> to provide the full structure.
		 * Post #X-Amz-Target=CodePipeline_20150709.UpdateActionType
		 * @return {void} Success
		 */
		UpdateActionType(requestBody: UpdateActionTypeInput): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '#X-Amz-Target=CodePipeline_20150709.UpdateActionType', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Updates a specified pipeline with edits or changes to its structure. Use a JSON file with the pipeline structure and <code>UpdatePipeline</code> to provide the full structure of the pipeline. Updating the pipeline increases the version number of the pipeline by 1.
		 * Post #X-Amz-Target=CodePipeline_20150709.UpdatePipeline
		 * @return {UpdatePipelineOutput} Success
		 */
		UpdatePipeline(requestBody: UpdatePipelineInput): Observable<UpdatePipelineOutput> {
			return this.http.post<UpdatePipelineOutput>(this.baseUri + '#X-Amz-Target=CodePipeline_20150709.UpdatePipeline', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

	export enum AcknowledgeJobX_Amz_Target { 'CodePipeline_20150709.AcknowledgeJob' = 0 }

	export enum AcknowledgeThirdPartyJobX_Amz_Target { 'CodePipeline_20150709.AcknowledgeThirdPartyJob' = 0 }

	export enum CreateCustomActionTypeX_Amz_Target { 'CodePipeline_20150709.CreateCustomActionType' = 0 }

	export enum CreatePipelineX_Amz_Target { 'CodePipeline_20150709.CreatePipeline' = 0 }

	export enum DeleteCustomActionTypeX_Amz_Target { 'CodePipeline_20150709.DeleteCustomActionType' = 0 }

	export enum DeletePipelineX_Amz_Target { 'CodePipeline_20150709.DeletePipeline' = 0 }

	export enum DeleteWebhookX_Amz_Target { 'CodePipeline_20150709.DeleteWebhook' = 0 }

	export enum DeregisterWebhookWithThirdPartyX_Amz_Target { 'CodePipeline_20150709.DeregisterWebhookWithThirdParty' = 0 }

	export enum DisableStageTransitionX_Amz_Target { 'CodePipeline_20150709.DisableStageTransition' = 0 }

	export enum EnableStageTransitionX_Amz_Target { 'CodePipeline_20150709.EnableStageTransition' = 0 }

	export enum GetActionTypeX_Amz_Target { 'CodePipeline_20150709.GetActionType' = 0 }

	export enum GetJobDetailsX_Amz_Target { 'CodePipeline_20150709.GetJobDetails' = 0 }

	export enum GetPipelineX_Amz_Target { 'CodePipeline_20150709.GetPipeline' = 0 }

	export enum GetPipelineExecutionX_Amz_Target { 'CodePipeline_20150709.GetPipelineExecution' = 0 }

	export enum GetPipelineStateX_Amz_Target { 'CodePipeline_20150709.GetPipelineState' = 0 }

	export enum GetThirdPartyJobDetailsX_Amz_Target { 'CodePipeline_20150709.GetThirdPartyJobDetails' = 0 }

	export enum ListActionExecutionsX_Amz_Target { 'CodePipeline_20150709.ListActionExecutions' = 0 }

	export enum ListActionTypesX_Amz_Target { 'CodePipeline_20150709.ListActionTypes' = 0 }

	export enum ListPipelineExecutionsX_Amz_Target { 'CodePipeline_20150709.ListPipelineExecutions' = 0 }

	export enum ListPipelinesX_Amz_Target { 'CodePipeline_20150709.ListPipelines' = 0 }

	export enum ListTagsForResourceX_Amz_Target { 'CodePipeline_20150709.ListTagsForResource' = 0 }

	export enum ListWebhooksX_Amz_Target { 'CodePipeline_20150709.ListWebhooks' = 0 }

	export enum PollForJobsX_Amz_Target { 'CodePipeline_20150709.PollForJobs' = 0 }

	export enum PollForThirdPartyJobsX_Amz_Target { 'CodePipeline_20150709.PollForThirdPartyJobs' = 0 }

	export enum PutActionRevisionX_Amz_Target { 'CodePipeline_20150709.PutActionRevision' = 0 }

	export enum PutApprovalResultX_Amz_Target { 'CodePipeline_20150709.PutApprovalResult' = 0 }

	export enum PutJobFailureResultX_Amz_Target { 'CodePipeline_20150709.PutJobFailureResult' = 0 }

	export enum PutJobSuccessResultX_Amz_Target { 'CodePipeline_20150709.PutJobSuccessResult' = 0 }

	export enum PutThirdPartyJobFailureResultX_Amz_Target { 'CodePipeline_20150709.PutThirdPartyJobFailureResult' = 0 }

	export enum PutThirdPartyJobSuccessResultX_Amz_Target { 'CodePipeline_20150709.PutThirdPartyJobSuccessResult' = 0 }

	export enum PutWebhookX_Amz_Target { 'CodePipeline_20150709.PutWebhook' = 0 }

	export enum RegisterWebhookWithThirdPartyX_Amz_Target { 'CodePipeline_20150709.RegisterWebhookWithThirdParty' = 0 }

	export enum RetryStageExecutionX_Amz_Target { 'CodePipeline_20150709.RetryStageExecution' = 0 }

	export enum StartPipelineExecutionX_Amz_Target { 'CodePipeline_20150709.StartPipelineExecution' = 0 }

	export enum StopPipelineExecutionX_Amz_Target { 'CodePipeline_20150709.StopPipelineExecution' = 0 }

	export enum TagResourceX_Amz_Target { 'CodePipeline_20150709.TagResource' = 0 }

	export enum UntagResourceX_Amz_Target { 'CodePipeline_20150709.UntagResource' = 0 }

	export enum UpdateActionTypeX_Amz_Target { 'CodePipeline_20150709.UpdateActionType' = 0 }

	export enum UpdatePipelineX_Amz_Target { 'CodePipeline_20150709.UpdatePipeline' = 0 }

}

