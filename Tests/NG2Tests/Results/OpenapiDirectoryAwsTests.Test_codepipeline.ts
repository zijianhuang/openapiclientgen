import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** Represents the output of an AcknowledgeJob action. */
	export interface AcknowledgeJobOutput {
		status?: AcknowledgeJobOutputStatus | null;
	}

	/** Represents the output of an AcknowledgeJob action. */
	export interface AcknowledgeJobOutputFormProperties {
		status: FormControl<AcknowledgeJobOutputStatus | null | undefined>,
	}
	export function CreateAcknowledgeJobOutputFormGroup() {
		return new FormGroup<AcknowledgeJobOutputFormProperties>({
			status: new FormControl<AcknowledgeJobOutputStatus | null | undefined>(undefined),
		});

	}

	export enum AcknowledgeJobOutputStatus { Created = 0, Queued = 1, Dispatched = 2, InProgress = 3, TimedOut = 4, Succeeded = 5, Failed = 6 }


	/** Represents the input of an AcknowledgeJob action. */
	export interface AcknowledgeJobInput {
		jobId: string;
		nonce: string;
	}

	/** Represents the input of an AcknowledgeJob action. */
	export interface AcknowledgeJobInputFormProperties {
		jobId: FormControl<string | null | undefined>,
		nonce: FormControl<string | null | undefined>,
	}
	export function CreateAcknowledgeJobInputFormGroup() {
		return new FormGroup<AcknowledgeJobInputFormProperties>({
			jobId: new FormControl<string | null | undefined>(undefined),
			nonce: new FormControl<string | null | undefined>(undefined),
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
		status?: AcknowledgeJobOutputStatus | null;
	}

	/** Represents the output of an AcknowledgeThirdPartyJob action. */
	export interface AcknowledgeThirdPartyJobOutputFormProperties {
		status: FormControl<AcknowledgeJobOutputStatus | null | undefined>,
	}
	export function CreateAcknowledgeThirdPartyJobOutputFormGroup() {
		return new FormGroup<AcknowledgeThirdPartyJobOutputFormProperties>({
			status: new FormControl<AcknowledgeJobOutputStatus | null | undefined>(undefined),
		});

	}


	/** Represents the input of an AcknowledgeThirdPartyJob action. */
	export interface AcknowledgeThirdPartyJobInput {
		jobId: string;
		nonce: string;
		clientToken: string;
	}

	/** Represents the input of an AcknowledgeThirdPartyJob action. */
	export interface AcknowledgeThirdPartyJobInputFormProperties {
		jobId: FormControl<string | null | undefined>,
		nonce: FormControl<string | null | undefined>,
		clientToken: FormControl<string | null | undefined>,
	}
	export function CreateAcknowledgeThirdPartyJobInputFormGroup() {
		return new FormGroup<AcknowledgeThirdPartyJobInputFormProperties>({
			jobId: new FormControl<string | null | undefined>(undefined),
			nonce: new FormControl<string | null | undefined>(undefined),
			clientToken: new FormControl<string | null | undefined>(undefined),
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

		/**
		 * Returns information about the details of an action type.
		 * Required
		 */
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

		/**
		 * Represents information about an action type.
		 * Required
		 */
		id: ActionTypeId;

		/** Returns information about the settings for an action type. */
		settings?: ActionTypeSettings;
		actionConfigurationProperties?: Array<ActionConfigurationProperty>;

		/**
		 * Returns information about the details of an artifact.
		 * Required
		 */
		inputArtifactDetails: ArtifactDetails;

		/**
		 * Returns information about the details of an artifact.
		 * Required
		 */
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
		category: ActionTypeIdCategory;
		owner: ActionTypeIdOwner;
		provider: string;
		version: string;
	}

	/** Represents information about an action type. */
	export interface ActionTypeIdFormProperties {
		category: FormControl<ActionTypeIdCategory | null | undefined>,
		owner: FormControl<ActionTypeIdOwner | null | undefined>,
		provider: FormControl<string | null | undefined>,
		version: FormControl<string | null | undefined>,
	}
	export function CreateActionTypeIdFormGroup() {
		return new FormGroup<ActionTypeIdFormProperties>({
			category: new FormControl<ActionTypeIdCategory | null | undefined>(undefined),
			owner: new FormControl<ActionTypeIdOwner | null | undefined>(undefined),
			provider: new FormControl<string | null | undefined>(undefined),
			version: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ActionTypeIdCategory { Source = 0, Build = 1, Deploy = 2, Test = 3, Invoke = 4, Approval = 5 }

	export enum ActionTypeIdOwner { AWS = 0, ThirdParty = 1, Custom = 2 }


	/** Returns information about the settings for an action type. */
	export interface ActionTypeSettings {
		thirdPartyConfigurationUrl?: string | null;
		entityUrlTemplate?: string | null;
		executionUrlTemplate?: string | null;
		revisionUrlTemplate?: string | null;
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
		name: string;
		required: boolean;
		key: boolean;
		secret: boolean;
		queryable?: boolean | null;
		description?: string | null;
		type?: ActionConfigurationPropertyType | null;
	}

	/** Represents information about an action configuration property. */
	export interface ActionConfigurationPropertyFormProperties {
		name: FormControl<string | null | undefined>,
		required: FormControl<boolean | null | undefined>,
		key: FormControl<boolean | null | undefined>,
		secret: FormControl<boolean | null | undefined>,
		queryable: FormControl<boolean | null | undefined>,
		description: FormControl<string | null | undefined>,
		type: FormControl<ActionConfigurationPropertyType | null | undefined>,
	}
	export function CreateActionConfigurationPropertyFormGroup() {
		return new FormGroup<ActionConfigurationPropertyFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			required: new FormControl<boolean | null | undefined>(undefined),
			key: new FormControl<boolean | null | undefined>(undefined),
			secret: new FormControl<boolean | null | undefined>(undefined),
			queryable: new FormControl<boolean | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<ActionConfigurationPropertyType | null | undefined>(undefined),
		});

	}

	export enum ActionConfigurationPropertyType { String = 0, Number = 1, Boolean = 2 }


	/** Returns information about the details of an artifact. */
	export interface ArtifactDetails {
		minimumCount: number;
		maximumCount: number;
	}

	/** Returns information about the details of an artifact. */
	export interface ArtifactDetailsFormProperties {
		minimumCount: FormControl<number | null | undefined>,
		maximumCount: FormControl<number | null | undefined>,
	}
	export function CreateArtifactDetailsFormGroup() {
		return new FormGroup<ArtifactDetailsFormProperties>({
			minimumCount: new FormControl<number | null | undefined>(undefined),
			maximumCount: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** A tag is a key-value pair that is used to manage the resource. */
	export interface Tag {
		key: string;
		value: string;
	}

	/** A tag is a key-value pair that is used to manage the resource. */
	export interface TagFormProperties {
		key: FormControl<string | null | undefined>,
		value: FormControl<string | null | undefined>,
	}
	export function CreateTagFormGroup() {
		return new FormGroup<TagFormProperties>({
			key: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents the input of a CreateCustomActionType operation. */
	export interface CreateCustomActionTypeInput {
		category: ActionTypeIdCategory;
		provider: string;
		version: string;

		/** Returns information about the settings for an action type. */
		settings?: ActionTypeSettings;
		configurationProperties?: Array<ActionConfigurationProperty>;

		/**
		 * Returns information about the details of an artifact.
		 * Required
		 */
		inputArtifactDetails: ArtifactDetails;

		/**
		 * Returns information about the details of an artifact.
		 * Required
		 */
		outputArtifactDetails: ArtifactDetails;
		tags?: Array<Tag>;
	}

	/** Represents the input of a CreateCustomActionType operation. */
	export interface CreateCustomActionTypeInputFormProperties {
		category: FormControl<ActionTypeIdCategory | null | undefined>,
		provider: FormControl<string | null | undefined>,
		version: FormControl<string | null | undefined>,
	}
	export function CreateCreateCustomActionTypeInputFormGroup() {
		return new FormGroup<CreateCustomActionTypeInputFormProperties>({
			category: new FormControl<ActionTypeIdCategory | null | undefined>(undefined),
			provider: new FormControl<string | null | undefined>(undefined),
			version: new FormControl<string | null | undefined>(undefined),
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

		/** Represents the structure of actions and stages to be performed in the pipeline. */
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
		name: string;
		roleArn: string;

		/** <p>The S3 bucket where artifacts for the pipeline are stored.</p> <note> <p>You must include either <code>artifactStore</code> or <code>artifactStores</code> in your pipeline, but you cannot use both. If you create a cross-region action in your pipeline, you must use <code>artifactStores</code>.</p> </note> */
		artifactStore?: ArtifactStore;
		artifactStores?: ArtifactStoreMap;
		stages: Array<StageDeclaration>;
		version?: number | null;
	}

	/** Represents the structure of actions and stages to be performed in the pipeline. */
	export interface PipelineDeclarationFormProperties {
		name: FormControl<string | null | undefined>,
		roleArn: FormControl<string | null | undefined>,
		version: FormControl<number | null | undefined>,
	}
	export function CreatePipelineDeclarationFormGroup() {
		return new FormGroup<PipelineDeclarationFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			roleArn: new FormControl<string | null | undefined>(undefined),
			version: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** <p>The S3 bucket where artifacts for the pipeline are stored.</p> <note> <p>You must include either <code>artifactStore</code> or <code>artifactStores</code> in your pipeline, but you cannot use both. If you create a cross-region action in your pipeline, you must use <code>artifactStores</code>.</p> </note> */
	export interface ArtifactStore {
		type: ArtifactStoreType;
		location: string;

		/** Represents information about the key used to encrypt data in the artifact store, such as an AWS Key Management Service (AWS KMS) key. */
		encryptionKey?: EncryptionKey;
	}

	/** <p>The S3 bucket where artifacts for the pipeline are stored.</p> <note> <p>You must include either <code>artifactStore</code> or <code>artifactStores</code> in your pipeline, but you cannot use both. If you create a cross-region action in your pipeline, you must use <code>artifactStores</code>.</p> </note> */
	export interface ArtifactStoreFormProperties {
		type: FormControl<ArtifactStoreType | null | undefined>,
		location: FormControl<string | null | undefined>,
	}
	export function CreateArtifactStoreFormGroup() {
		return new FormGroup<ArtifactStoreFormProperties>({
			type: new FormControl<ArtifactStoreType | null | undefined>(undefined),
			location: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ArtifactStoreType { S3 = 0 }


	/** Represents information about the key used to encrypt data in the artifact store, such as an AWS Key Management Service (AWS KMS) key. */
	export interface EncryptionKey {
		id: string;
		type: EncryptionKeyType;
	}

	/** Represents information about the key used to encrypt data in the artifact store, such as an AWS Key Management Service (AWS KMS) key. */
	export interface EncryptionKeyFormProperties {
		id: FormControl<string | null | undefined>,
		type: FormControl<EncryptionKeyType | null | undefined>,
	}
	export function CreateEncryptionKeyFormGroup() {
		return new FormGroup<EncryptionKeyFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<EncryptionKeyType | null | undefined>(undefined),
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
		name: string;
		blockers?: Array<BlockerDeclaration>;
		actions: Array<ActionDeclaration>;
	}

	/** Represents information about a stage and its definition. */
	export interface StageDeclarationFormProperties {
		name: FormControl<string | null | undefined>,
	}
	export function CreateStageDeclarationFormGroup() {
		return new FormGroup<StageDeclarationFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Reserved for future use. */
	export interface BlockerDeclaration {
		name: string;
		type: BlockerDeclarationType;
	}

	/** Reserved for future use. */
	export interface BlockerDeclarationFormProperties {
		name: FormControl<string | null | undefined>,
		type: FormControl<BlockerDeclarationType | null | undefined>,
	}
	export function CreateBlockerDeclarationFormGroup() {
		return new FormGroup<BlockerDeclarationFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<BlockerDeclarationType | null | undefined>(undefined),
		});

	}

	export enum BlockerDeclarationType { Schedule = 0 }


	/** Represents information about an action declaration. */
	export interface ActionDeclaration {
		name: string;

		/**
		 * Represents information about an action type.
		 * Required
		 */
		actionTypeId: ActionTypeId;
		runOrder?: number | null;
		configuration?: ActionConfigurationMap;
		outputArtifacts?: Array<OutputArtifact>;
		inputArtifacts?: Array<InputArtifact>;
		roleArn?: string | null;
		region?: string | null;
		namespace?: string | null;
	}

	/** Represents information about an action declaration. */
	export interface ActionDeclarationFormProperties {
		name: FormControl<string | null | undefined>,
		runOrder: FormControl<number | null | undefined>,
		roleArn: FormControl<string | null | undefined>,
		region: FormControl<string | null | undefined>,
		namespace: FormControl<string | null | undefined>,
	}
	export function CreateActionDeclarationFormGroup() {
		return new FormGroup<ActionDeclarationFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
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
		name: string;
	}

	/** Represents information about the output of an action. */
	export interface OutputArtifactFormProperties {
		name: FormControl<string | null | undefined>,
	}
	export function CreateOutputArtifactFormGroup() {
		return new FormGroup<OutputArtifactFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents information about an artifact to be worked on, such as a test or build artifact. */
	export interface InputArtifact {
		name: string;
	}

	/** Represents information about an artifact to be worked on, such as a test or build artifact. */
	export interface InputArtifactFormProperties {
		name: FormControl<string | null | undefined>,
	}
	export function CreateInputArtifactFormGroup() {
		return new FormGroup<InputArtifactFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents the input of a <code>CreatePipeline</code> action. */
	export interface CreatePipelineInput {

		/**
		 * Represents the structure of actions and stages to be performed in the pipeline.
		 * Required
		 */
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
		category: ActionTypeIdCategory;
		provider: string;
		version: string;
	}

	/** Represents the input of a <code>DeleteCustomActionType</code> operation. The custom action will be marked as deleted. */
	export interface DeleteCustomActionTypeInputFormProperties {
		category: FormControl<ActionTypeIdCategory | null | undefined>,
		provider: FormControl<string | null | undefined>,
		version: FormControl<string | null | undefined>,
	}
	export function CreateDeleteCustomActionTypeInputFormGroup() {
		return new FormGroup<DeleteCustomActionTypeInputFormProperties>({
			category: new FormControl<ActionTypeIdCategory | null | undefined>(undefined),
			provider: new FormControl<string | null | undefined>(undefined),
			version: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents the input of a <code>DeletePipeline</code> action. */
	export interface DeletePipelineInput {
		name: string;
	}

	/** Represents the input of a <code>DeletePipeline</code> action. */
	export interface DeletePipelineInputFormProperties {
		name: FormControl<string | null | undefined>,
	}
	export function CreateDeletePipelineInputFormGroup() {
		return new FormGroup<DeletePipelineInputFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
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
		name: string;
	}
	export interface DeleteWebhookInputFormProperties {
		name: FormControl<string | null | undefined>,
	}
	export function CreateDeleteWebhookInputFormGroup() {
		return new FormGroup<DeleteWebhookInputFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
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
		webhookName?: string | null;
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
		pipelineName: string;
		stageName: string;
		transitionType: DisableStageTransitionInputTransitionType;
		reason: string;
	}

	/** Represents the input of a <code>DisableStageTransition</code> action. */
	export interface DisableStageTransitionInputFormProperties {
		pipelineName: FormControl<string | null | undefined>,
		stageName: FormControl<string | null | undefined>,
		transitionType: FormControl<DisableStageTransitionInputTransitionType | null | undefined>,
		reason: FormControl<string | null | undefined>,
	}
	export function CreateDisableStageTransitionInputFormGroup() {
		return new FormGroup<DisableStageTransitionInputFormProperties>({
			pipelineName: new FormControl<string | null | undefined>(undefined),
			stageName: new FormControl<string | null | undefined>(undefined),
			transitionType: new FormControl<DisableStageTransitionInputTransitionType | null | undefined>(undefined),
			reason: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum DisableStageTransitionInputTransitionType { Inbound = 0, Outbound = 1 }

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
		pipelineName: string;
		stageName: string;
		transitionType: DisableStageTransitionInputTransitionType;
	}

	/** Represents the input of an <code>EnableStageTransition</code> action. */
	export interface EnableStageTransitionInputFormProperties {
		pipelineName: FormControl<string | null | undefined>,
		stageName: FormControl<string | null | undefined>,
		transitionType: FormControl<DisableStageTransitionInputTransitionType | null | undefined>,
	}
	export function CreateEnableStageTransitionInputFormGroup() {
		return new FormGroup<EnableStageTransitionInputFormProperties>({
			pipelineName: new FormControl<string | null | undefined>(undefined),
			stageName: new FormControl<string | null | undefined>(undefined),
			transitionType: new FormControl<DisableStageTransitionInputTransitionType | null | undefined>(undefined),
		});

	}


	/** Represents the output of a <code>GetJobDetails</code> action. */
	export interface GetJobDetailsOutput {

		/** Represents information about the details of a job. */
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
		id?: string | null;

		/** Represents other information about a job required for a job worker to complete the job. */
		data?: JobData;
		accountId?: string | null;
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

		/** Represents information about an action type. */
		actionTypeId?: ActionTypeId;

		/** Represents information about an action configuration. */
		actionConfiguration?: ActionConfiguration;

		/** <p>Represents information about a pipeline to a job worker.</p> <note> <p>PipelineContext contains <code>pipelineArn</code> and <code>pipelineExecutionId</code> for custom action jobs. The <code>pipelineArn</code> and <code>pipelineExecutionId</code> fields are not populated for ThirdParty action jobs.</p> </note> */
		pipelineContext?: PipelineContext;
		inputArtifacts?: Array<Artifact>;
		outputArtifacts?: Array<Artifact>;

		/** Represents an AWS session credentials object. These credentials are temporary credentials that are issued by AWS Secure Token Service (STS). They can be used to access input and output artifacts in the S3 bucket used to store artifact for the pipeline in AWS CodePipeline. */
		artifactCredentials?: AWSSessionCredentials;
		continuationToken?: string | null;

		/** Represents information about the key used to encrypt data in the artifact store, such as an AWS Key Management Service (AWS KMS) key. */
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
		pipelineName?: string | null;

		/** Represents information about a stage to a job worker. */
		stage?: StageContext;

		/** Represents the context of an action in the stage of a pipeline to a job worker. */
		action?: ActionContext;
		pipelineArn?: string | null;
		pipelineExecutionId?: string | null;
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
		name?: string | null;
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
		name?: string | null;
		actionExecutionId?: string | null;
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


	/** Represents information about an artifact that is worked on by actions in the pipeline. */
	export interface Artifact {
		name?: string | null;
		revision?: string | null;

		/** Represents information about the location of an artifact. */
		location?: ArtifactLocation;
	}

	/** Represents information about an artifact that is worked on by actions in the pipeline. */
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
		type?: ArtifactStoreType | null;

		/** The location of the S3 bucket that contains a revision. */
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
		bucketName: string;
		objectKey: string;
	}

	/** The location of the S3 bucket that contains a revision. */
	export interface S3ArtifactLocationFormProperties {
		bucketName: FormControl<string | null | undefined>,
		objectKey: FormControl<string | null | undefined>,
	}
	export function CreateS3ArtifactLocationFormGroup() {
		return new FormGroup<S3ArtifactLocationFormProperties>({
			bucketName: new FormControl<string | null | undefined>(undefined),
			objectKey: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents an AWS session credentials object. These credentials are temporary credentials that are issued by AWS Secure Token Service (STS). They can be used to access input and output artifacts in the S3 bucket used to store artifact for the pipeline in AWS CodePipeline. */
	export interface AWSSessionCredentials {
		accessKeyId: string;
		secretAccessKey: string;
		sessionToken: string;
	}

	/** Represents an AWS session credentials object. These credentials are temporary credentials that are issued by AWS Secure Token Service (STS). They can be used to access input and output artifacts in the S3 bucket used to store artifact for the pipeline in AWS CodePipeline. */
	export interface AWSSessionCredentialsFormProperties {
		accessKeyId: FormControl<string | null | undefined>,
		secretAccessKey: FormControl<string | null | undefined>,
		sessionToken: FormControl<string | null | undefined>,
	}
	export function CreateAWSSessionCredentialsFormGroup() {
		return new FormGroup<AWSSessionCredentialsFormProperties>({
			accessKeyId: new FormControl<string | null | undefined>(undefined),
			secretAccessKey: new FormControl<string | null | undefined>(undefined),
			sessionToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents the input of a <code>GetJobDetails</code> action. */
	export interface GetJobDetailsInput {
		jobId: string;
	}

	/** Represents the input of a <code>GetJobDetails</code> action. */
	export interface GetJobDetailsInputFormProperties {
		jobId: FormControl<string | null | undefined>,
	}
	export function CreateGetJobDetailsInputFormGroup() {
		return new FormGroup<GetJobDetailsInputFormProperties>({
			jobId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents the output of a <code>GetPipeline</code> action. */
	export interface GetPipelineOutput {

		/** Represents the structure of actions and stages to be performed in the pipeline. */
		pipeline?: PipelineDeclaration;

		/** Information about a pipeline. */
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
		pipelineArn?: string | null;
		created?: Date | null;
		updated?: Date | null;
	}

	/** Information about a pipeline. */
	export interface PipelineMetadataFormProperties {
		pipelineArn: FormControl<string | null | undefined>,
		created: FormControl<Date | null | undefined>,
		updated: FormControl<Date | null | undefined>,
	}
	export function CreatePipelineMetadataFormGroup() {
		return new FormGroup<PipelineMetadataFormProperties>({
			pipelineArn: new FormControl<string | null | undefined>(undefined),
			created: new FormControl<Date | null | undefined>(undefined),
			updated: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/** Represents the input of a <code>GetPipeline</code> action. */
	export interface GetPipelineInput {
		name: string;
		version?: number | null;
	}

	/** Represents the input of a <code>GetPipeline</code> action. */
	export interface GetPipelineInputFormProperties {
		name: FormControl<string | null | undefined>,
		version: FormControl<number | null | undefined>,
	}
	export function CreateGetPipelineInputFormGroup() {
		return new FormGroup<GetPipelineInputFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
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

		/** Represents information about an execution of a pipeline. */
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
		pipelineName?: string | null;
		pipelineVersion?: number | null;
		pipelineExecutionId?: string | null;
		status?: PipelineExecutionStatus | null;
		artifactRevisions?: Array<ArtifactRevision>;
	}

	/** Represents information about an execution of a pipeline. */
	export interface PipelineExecutionFormProperties {
		pipelineName: FormControl<string | null | undefined>,
		pipelineVersion: FormControl<number | null | undefined>,
		pipelineExecutionId: FormControl<string | null | undefined>,
		status: FormControl<PipelineExecutionStatus | null | undefined>,
	}
	export function CreatePipelineExecutionFormGroup() {
		return new FormGroup<PipelineExecutionFormProperties>({
			pipelineName: new FormControl<string | null | undefined>(undefined),
			pipelineVersion: new FormControl<number | null | undefined>(undefined),
			pipelineExecutionId: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<PipelineExecutionStatus | null | undefined>(undefined),
		});

	}

	export enum PipelineExecutionStatus { InProgress = 0, Stopped = 1, Stopping = 2, Succeeded = 3, Superseded = 4, Failed = 5 }


	/** Represents revision details of an artifact.  */
	export interface ArtifactRevision {
		name?: string | null;
		revisionId?: string | null;
		revisionChangeIdentifier?: string | null;
		revisionSummary?: string | null;
		created?: Date | null;
		revisionUrl?: string | null;
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
		pipelineName: string;
		pipelineExecutionId: string;
	}

	/** Represents the input of a <code>GetPipelineExecution</code> action. */
	export interface GetPipelineExecutionInputFormProperties {
		pipelineName: FormControl<string | null | undefined>,
		pipelineExecutionId: FormControl<string | null | undefined>,
	}
	export function CreateGetPipelineExecutionInputFormGroup() {
		return new FormGroup<GetPipelineExecutionInputFormProperties>({
			pipelineName: new FormControl<string | null | undefined>(undefined),
			pipelineExecutionId: new FormControl<string | null | undefined>(undefined),
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
		pipelineName?: string | null;
		pipelineVersion?: number | null;
		stageStates?: Array<StageState>;
		created?: Date | null;
		updated?: Date | null;
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
		stageName?: string | null;

		/** Represents information about the state of transitions between one stage and another stage. */
		inboundTransitionState?: TransitionState;
		actionStates?: Array<ActionState>;

		/** Represents information about the run of a stage. */
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


	/** Represents information about the state of transitions between one stage and another stage. */
	export interface TransitionState {
		enabled?: boolean | null;
		lastChangedBy?: string | null;
		lastChangedAt?: Date | null;
		disabledReason?: string | null;
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
		actionName?: string | null;

		/** Represents information about the version (or revision) of an action. */
		currentRevision?: ActionRevision;

		/** Represents information about the run of an action. */
		latestExecution?: ActionExecution;
		entityUrl?: string | null;
		revisionUrl?: string | null;
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
		revisionId: string;
		revisionChangeId: string;
		created: Date;
	}

	/** Represents information about the version (or revision) of an action. */
	export interface ActionRevisionFormProperties {
		revisionId: FormControl<string | null | undefined>,
		revisionChangeId: FormControl<string | null | undefined>,
		created: FormControl<Date | null | undefined>,
	}
	export function CreateActionRevisionFormGroup() {
		return new FormGroup<ActionRevisionFormProperties>({
			revisionId: new FormControl<string | null | undefined>(undefined),
			revisionChangeId: new FormControl<string | null | undefined>(undefined),
			created: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/** Represents information about the run of an action. */
	export interface ActionExecution {
		status?: ActionExecutionStatus | null;
		summary?: string | null;
		lastStatusChange?: Date | null;
		token?: string | null;
		lastUpdatedBy?: string | null;
		externalExecutionId?: string | null;
		externalExecutionUrl?: string | null;
		percentComplete?: number | null;

		/** Represents information about an error in AWS CodePipeline. */
		errorDetails?: ErrorDetails;
	}

	/** Represents information about the run of an action. */
	export interface ActionExecutionFormProperties {
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


	/** Represents information about an error in AWS CodePipeline. */
	export interface ErrorDetails {
		code?: string | null;
		message?: string | null;
	}

	/** Represents information about an error in AWS CodePipeline. */
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


	/** Represents information about the run of a stage. */
	export interface StageExecution {
		pipelineExecutionId: string;
		status: StageExecutionStatus;
	}

	/** Represents information about the run of a stage. */
	export interface StageExecutionFormProperties {
		pipelineExecutionId: FormControl<string | null | undefined>,
		status: FormControl<StageExecutionStatus | null | undefined>,
	}
	export function CreateStageExecutionFormGroup() {
		return new FormGroup<StageExecutionFormProperties>({
			pipelineExecutionId: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<StageExecutionStatus | null | undefined>(undefined),
		});

	}

	export enum StageExecutionStatus { InProgress = 0, Failed = 1, Stopped = 2, Stopping = 3, Succeeded = 4 }


	/** Represents the input of a <code>GetPipelineState</code> action. */
	export interface GetPipelineStateInput {
		name: string;
	}

	/** Represents the input of a <code>GetPipelineState</code> action. */
	export interface GetPipelineStateInputFormProperties {
		name: FormControl<string | null | undefined>,
	}
	export function CreateGetPipelineStateInputFormGroup() {
		return new FormGroup<GetPipelineStateInputFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents the output of a <code>GetThirdPartyJobDetails</code> action. */
	export interface GetThirdPartyJobDetailsOutput {

		/** The details of a job sent in response to a <code>GetThirdPartyJobDetails</code> request. */
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
		id?: string | null;

		/** Represents information about the job data for a partner action. */
		data?: ThirdPartyJobData;
		nonce?: string | null;
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

		/** Represents information about an action type. */
		actionTypeId?: ActionTypeId;

		/** Represents information about an action configuration. */
		actionConfiguration?: ActionConfiguration;

		/** <p>Represents information about a pipeline to a job worker.</p> <note> <p>PipelineContext contains <code>pipelineArn</code> and <code>pipelineExecutionId</code> for custom action jobs. The <code>pipelineArn</code> and <code>pipelineExecutionId</code> fields are not populated for ThirdParty action jobs.</p> </note> */
		pipelineContext?: PipelineContext;
		inputArtifacts?: Array<Artifact>;
		outputArtifacts?: Array<Artifact>;

		/** Represents an AWS session credentials object. These credentials are temporary credentials that are issued by AWS Secure Token Service (STS). They can be used to access input and output artifacts in the S3 bucket used to store artifact for the pipeline in AWS CodePipeline. */
		artifactCredentials?: AWSSessionCredentials;
		continuationToken?: string | null;

		/** Represents information about the key used to encrypt data in the artifact store, such as an AWS Key Management Service (AWS KMS) key. */
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
		jobId: string;
		clientToken: string;
	}

	/** Represents the input of a <code>GetThirdPartyJobDetails</code> action. */
	export interface GetThirdPartyJobDetailsInputFormProperties {
		jobId: FormControl<string | null | undefined>,
		clientToken: FormControl<string | null | undefined>,
	}
	export function CreateGetThirdPartyJobDetailsInputFormGroup() {
		return new FormGroup<GetThirdPartyJobDetailsInputFormProperties>({
			jobId: new FormControl<string | null | undefined>(undefined),
			clientToken: new FormControl<string | null | undefined>(undefined),
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
		nextToken?: string | null;
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
		pipelineExecutionId?: string | null;
		actionExecutionId?: string | null;
		pipelineVersion?: number | null;
		stageName?: string | null;
		actionName?: string | null;
		startTime?: Date | null;
		lastUpdateTime?: Date | null;
		status?: ActionExecutionStatus | null;

		/** Input information used for an action execution. */
		input?: ActionExecutionInput;

		/** Output details listed for an action execution, such as the action execution result. */
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
		roleArn?: string | null;
		region?: string | null;
		inputArtifacts?: Array<ArtifactDetail>;
		namespace?: string | null;
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
		name?: string | null;

		/** The Amazon S3 artifact location for an action's artifacts. */
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
		bucket?: string | null;
		key?: string | null;
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

		/** Execution result information, such as the external execution ID. */
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
		externalExecutionId?: string | null;
		externalExecutionSummary?: string | null;
		externalExecutionUrl?: string | null;
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
		pipelineName: string;

		/** Filter values for the action execution. */
		filter?: ActionExecutionFilter;
		maxResults?: number | null;
		nextToken?: string | null;
	}
	export interface ListActionExecutionsInputFormProperties {
		pipelineName: FormControl<string | null | undefined>,
		maxResults: FormControl<number | null | undefined>,
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListActionExecutionsInputFormGroup() {
		return new FormGroup<ListActionExecutionsInputFormProperties>({
			pipelineName: new FormControl<string | null | undefined>(undefined),
			maxResults: new FormControl<number | null | undefined>(undefined),
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Filter values for the action execution. */
	export interface ActionExecutionFilter {
		pipelineExecutionId?: string | null;
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
		actionTypes: Array<ActionType>;
		nextToken?: string | null;
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
		actionOwnerFilter?: ActionTypeIdOwner | null;
		nextToken?: string | null;
	}

	/** Represents the input of a <code>ListActionTypes</code> action. */
	export interface ListActionTypesInputFormProperties {
		actionOwnerFilter: FormControl<ActionTypeIdOwner | null | undefined>,
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListActionTypesInputFormGroup() {
		return new FormGroup<ListActionTypesInputFormProperties>({
			actionOwnerFilter: new FormControl<ActionTypeIdOwner | null | undefined>(undefined),
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents the output of a <code>ListPipelineExecutions</code> action. */
	export interface ListPipelineExecutionsOutput {
		pipelineExecutionSummaries?: Array<PipelineExecutionSummary>;
		nextToken?: string | null;
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
		pipelineExecutionId?: string | null;
		status?: PipelineExecutionStatus | null;
		startTime?: Date | null;
		lastUpdateTime?: Date | null;
		sourceRevisions?: Array<SourceRevision>;

		/** The interaction or event that started a pipeline execution. */
		trigger?: ExecutionTrigger;

		/** The interaction that stopped a pipeline execution. */
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
		actionName: string;
		revisionId?: string | null;
		revisionSummary?: string | null;
		revisionUrl?: string | null;
	}

	/** Information about the version (or revision) of a source artifact that initiated a pipeline execution. */
	export interface SourceRevisionFormProperties {
		actionName: FormControl<string | null | undefined>,
		revisionId: FormControl<string | null | undefined>,
		revisionSummary: FormControl<string | null | undefined>,
		revisionUrl: FormControl<string | null | undefined>,
	}
	export function CreateSourceRevisionFormGroup() {
		return new FormGroup<SourceRevisionFormProperties>({
			actionName: new FormControl<string | null | undefined>(undefined),
			revisionId: new FormControl<string | null | undefined>(undefined),
			revisionSummary: new FormControl<string | null | undefined>(undefined),
			revisionUrl: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The interaction or event that started a pipeline execution. */
	export interface ExecutionTrigger {
		triggerType?: ExecutionTriggerTriggerType | null;
		triggerDetail?: string | null;
	}

	/** The interaction or event that started a pipeline execution. */
	export interface ExecutionTriggerFormProperties {
		triggerType: FormControl<ExecutionTriggerTriggerType | null | undefined>,
		triggerDetail: FormControl<string | null | undefined>,
	}
	export function CreateExecutionTriggerFormGroup() {
		return new FormGroup<ExecutionTriggerFormProperties>({
			triggerType: new FormControl<ExecutionTriggerTriggerType | null | undefined>(undefined),
			triggerDetail: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ExecutionTriggerTriggerType { CreatePipeline = 0, StartPipelineExecution = 1, PollForSourceChanges = 2, Webhook = 3, CloudWatchEvent = 4, PutActionRevision = 5 }


	/** The interaction that stopped a pipeline execution. */
	export interface StopExecutionTrigger {
		reason?: string | null;
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
		pipelineName: string;
		maxResults?: number | null;
		nextToken?: string | null;
	}

	/** Represents the input of a <code>ListPipelineExecutions</code> action. */
	export interface ListPipelineExecutionsInputFormProperties {
		pipelineName: FormControl<string | null | undefined>,
		maxResults: FormControl<number | null | undefined>,
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListPipelineExecutionsInputFormGroup() {
		return new FormGroup<ListPipelineExecutionsInputFormProperties>({
			pipelineName: new FormControl<string | null | undefined>(undefined),
			maxResults: new FormControl<number | null | undefined>(undefined),
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents the output of a <code>ListPipelines</code> action. */
	export interface ListPipelinesOutput {
		pipelines?: Array<PipelineSummary>;
		nextToken?: string | null;
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
		name?: string | null;
		version?: number | null;
		created?: Date | null;
		updated?: Date | null;
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
		nextToken?: string | null;
	}

	/** Represents the input of a <code>ListPipelines</code> action. */
	export interface ListPipelinesInputFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListPipelinesInputFormGroup() {
		return new FormGroup<ListPipelinesInputFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListTagsForResourceOutput {
		tags?: Array<Tag>;
		nextToken?: string | null;
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
		resourceArn: string;
		nextToken?: string | null;
		maxResults?: number | null;
	}
	export interface ListTagsForResourceInputFormProperties {
		resourceArn: FormControl<string | null | undefined>,
		nextToken: FormControl<string | null | undefined>,
		maxResults: FormControl<number | null | undefined>,
	}
	export function CreateListTagsForResourceInputFormGroup() {
		return new FormGroup<ListTagsForResourceInputFormProperties>({
			resourceArn: new FormControl<string | null | undefined>(undefined),
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
		NextToken?: string | null;
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

		/**
		 * Represents information about a webhook and its definition.
		 * Required
		 */
		definition: WebhookDefinition;
		url: string;
		errorMessage?: string | null;
		errorCode?: string | null;
		lastTriggered?: Date | null;
		arn?: string | null;
		tags?: Array<Tag>;
	}

	/** The detail returned for each webhook after listing webhooks, such as the webhook URL, the webhook name, and the webhook ARN. */
	export interface ListWebhookItemFormProperties {
		url: FormControl<string | null | undefined>,
		errorMessage: FormControl<string | null | undefined>,
		errorCode: FormControl<string | null | undefined>,
		lastTriggered: FormControl<Date | null | undefined>,
		arn: FormControl<string | null | undefined>,
	}
	export function CreateListWebhookItemFormGroup() {
		return new FormGroup<ListWebhookItemFormProperties>({
			url: new FormControl<string | null | undefined>(undefined),
			errorMessage: new FormControl<string | null | undefined>(undefined),
			errorCode: new FormControl<string | null | undefined>(undefined),
			lastTriggered: new FormControl<Date | null | undefined>(undefined),
			arn: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents information about a webhook and its definition. */
	export interface WebhookDefinition {
		name: string;
		targetPipeline: string;
		targetAction: string;
		filters: Array<WebhookFilterRule>;
		authentication: WebhookDefinitionAuthentication;

		/**
		 * The authentication applied to incoming webhook trigger requests.
		 * Required
		 */
		authenticationConfiguration: WebhookAuthConfiguration;
	}

	/** Represents information about a webhook and its definition. */
	export interface WebhookDefinitionFormProperties {
		name: FormControl<string | null | undefined>,
		targetPipeline: FormControl<string | null | undefined>,
		targetAction: FormControl<string | null | undefined>,
		authentication: FormControl<WebhookDefinitionAuthentication | null | undefined>,
	}
	export function CreateWebhookDefinitionFormGroup() {
		return new FormGroup<WebhookDefinitionFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			targetPipeline: new FormControl<string | null | undefined>(undefined),
			targetAction: new FormControl<string | null | undefined>(undefined),
			authentication: new FormControl<WebhookDefinitionAuthentication | null | undefined>(undefined),
		});

	}


	/** The event criteria that specify when a webhook notification is sent to your URL. */
	export interface WebhookFilterRule {
		jsonPath: string;
		matchEquals?: string | null;
	}

	/** The event criteria that specify when a webhook notification is sent to your URL. */
	export interface WebhookFilterRuleFormProperties {
		jsonPath: FormControl<string | null | undefined>,
		matchEquals: FormControl<string | null | undefined>,
	}
	export function CreateWebhookFilterRuleFormGroup() {
		return new FormGroup<WebhookFilterRuleFormProperties>({
			jsonPath: new FormControl<string | null | undefined>(undefined),
			matchEquals: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum WebhookDefinitionAuthentication { GITHUB_HMAC = 0, IP = 1, UNAUTHENTICATED = 2 }


	/** The authentication applied to incoming webhook trigger requests. */
	export interface WebhookAuthConfiguration {
		AllowedIPRange?: string | null;
		SecretToken?: string | null;
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
		NextToken?: string | null;
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
		id?: string | null;

		/** Represents other information about a job required for a job worker to complete the job. */
		data?: JobData;
		nonce?: string | null;
		accountId?: string | null;
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

		/**
		 * Represents information about an action type.
		 * Required
		 */
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

	export interface ActionTypeNotFoundException {
	}
	export interface ActionTypeNotFoundExceptionFormProperties {
	}
	export function CreateActionTypeNotFoundExceptionFormGroup() {
		return new FormGroup<ActionTypeNotFoundExceptionFormProperties>({
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


	/** A response to a <code>PollForThirdPartyJobs</code> request returned by AWS CodePipeline when there is a job to be worked on by a partner action. */
	export interface ThirdPartyJob {
		clientId?: string | null;
		jobId?: string | null;
	}

	/** A response to a <code>PollForThirdPartyJobs</code> request returned by AWS CodePipeline when there is a job to be worked on by a partner action. */
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

		/**
		 * Represents information about an action type.
		 * Required
		 */
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
		pipelineExecutionId?: string | null;
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
		pipelineName: string;
		stageName: string;
		actionName: string;

		/**
		 * Represents information about the version (or revision) of an action.
		 * Required
		 */
		actionRevision: ActionRevision;
	}

	/** Represents the input of a <code>PutActionRevision</code> action. */
	export interface PutActionRevisionInputFormProperties {
		pipelineName: FormControl<string | null | undefined>,
		stageName: FormControl<string | null | undefined>,
		actionName: FormControl<string | null | undefined>,
	}
	export function CreatePutActionRevisionInputFormGroup() {
		return new FormGroup<PutActionRevisionInputFormProperties>({
			pipelineName: new FormControl<string | null | undefined>(undefined),
			stageName: new FormControl<string | null | undefined>(undefined),
			actionName: new FormControl<string | null | undefined>(undefined),
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
		approvedAt?: Date | null;
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
		pipelineName: string;
		stageName: string;
		actionName: string;

		/**
		 * Represents information about the result of an approval request.
		 * Required
		 */
		result: ApprovalResult;
		token: string;
	}

	/** Represents the input of a <code>PutApprovalResult</code> action. */
	export interface PutApprovalResultInputFormProperties {
		pipelineName: FormControl<string | null | undefined>,
		stageName: FormControl<string | null | undefined>,
		actionName: FormControl<string | null | undefined>,
		token: FormControl<string | null | undefined>,
	}
	export function CreatePutApprovalResultInputFormGroup() {
		return new FormGroup<PutApprovalResultInputFormProperties>({
			pipelineName: new FormControl<string | null | undefined>(undefined),
			stageName: new FormControl<string | null | undefined>(undefined),
			actionName: new FormControl<string | null | undefined>(undefined),
			token: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents information about the result of an approval request. */
	export interface ApprovalResult {
		summary: string;
		status: ApprovalResultStatus;
	}

	/** Represents information about the result of an approval request. */
	export interface ApprovalResultFormProperties {
		summary: FormControl<string | null | undefined>,
		status: FormControl<ApprovalResultStatus | null | undefined>,
	}
	export function CreateApprovalResultFormGroup() {
		return new FormGroup<ApprovalResultFormProperties>({
			summary: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<ApprovalResultStatus | null | undefined>(undefined),
		});

	}

	export enum ApprovalResultStatus { Approved = 0, Rejected = 1 }

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
		jobId: string;

		/**
		 * Represents information about failure details.
		 * Required
		 */
		failureDetails: FailureDetails;
	}

	/** Represents the input of a <code>PutJobFailureResult</code> action. */
	export interface PutJobFailureResultInputFormProperties {
		jobId: FormControl<string | null | undefined>,
	}
	export function CreatePutJobFailureResultInputFormGroup() {
		return new FormGroup<PutJobFailureResultInputFormProperties>({
			jobId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents information about failure details. */
	export interface FailureDetails {
		type: FailureDetailsType;
		message: string;
		externalExecutionId?: string | null;
	}

	/** Represents information about failure details. */
	export interface FailureDetailsFormProperties {
		type: FormControl<FailureDetailsType | null | undefined>,
		message: FormControl<string | null | undefined>,
		externalExecutionId: FormControl<string | null | undefined>,
	}
	export function CreateFailureDetailsFormGroup() {
		return new FormGroup<FailureDetailsFormProperties>({
			type: new FormControl<FailureDetailsType | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
			externalExecutionId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum FailureDetailsType { JobFailed = 0, ConfigurationError = 1, PermissionError = 2, RevisionOutOfSync = 3, RevisionUnavailable = 4, SystemUnavailable = 5 }

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
		jobId: string;

		/** Represents information about a current revision. */
		currentRevision?: CurrentRevision;
		continuationToken?: string | null;

		/** The details of the actions taken and results produced on an artifact as it passes through stages in the pipeline. */
		executionDetails?: ExecutionDetails;
		outputVariables?: OutputVariablesMap;
	}

	/** Represents the input of a <code>PutJobSuccessResult</code> action. */
	export interface PutJobSuccessResultInputFormProperties {
		jobId: FormControl<string | null | undefined>,
		continuationToken: FormControl<string | null | undefined>,
	}
	export function CreatePutJobSuccessResultInputFormGroup() {
		return new FormGroup<PutJobSuccessResultInputFormProperties>({
			jobId: new FormControl<string | null | undefined>(undefined),
			continuationToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents information about a current revision. */
	export interface CurrentRevision {
		revision: string;
		changeIdentifier: string;
		created?: Date | null;
		revisionSummary?: string | null;
	}

	/** Represents information about a current revision. */
	export interface CurrentRevisionFormProperties {
		revision: FormControl<string | null | undefined>,
		changeIdentifier: FormControl<string | null | undefined>,
		created: FormControl<Date | null | undefined>,
		revisionSummary: FormControl<string | null | undefined>,
	}
	export function CreateCurrentRevisionFormGroup() {
		return new FormGroup<CurrentRevisionFormProperties>({
			revision: new FormControl<string | null | undefined>(undefined),
			changeIdentifier: new FormControl<string | null | undefined>(undefined),
			created: new FormControl<Date | null | undefined>(undefined),
			revisionSummary: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The details of the actions taken and results produced on an artifact as it passes through stages in the pipeline. */
	export interface ExecutionDetails {
		summary?: string | null;
		externalExecutionId?: string | null;
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
		jobId: string;
		clientToken: string;

		/**
		 * Represents information about failure details.
		 * Required
		 */
		failureDetails: FailureDetails;
	}

	/** Represents the input of a <code>PutThirdPartyJobFailureResult</code> action. */
	export interface PutThirdPartyJobFailureResultInputFormProperties {
		jobId: FormControl<string | null | undefined>,
		clientToken: FormControl<string | null | undefined>,
	}
	export function CreatePutThirdPartyJobFailureResultInputFormGroup() {
		return new FormGroup<PutThirdPartyJobFailureResultInputFormProperties>({
			jobId: new FormControl<string | null | undefined>(undefined),
			clientToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents the input of a <code>PutThirdPartyJobSuccessResult</code> action. */
	export interface PutThirdPartyJobSuccessResultInput {
		jobId: string;
		clientToken: string;

		/** Represents information about a current revision. */
		currentRevision?: CurrentRevision;
		continuationToken?: string | null;

		/** The details of the actions taken and results produced on an artifact as it passes through stages in the pipeline. */
		executionDetails?: ExecutionDetails;
	}

	/** Represents the input of a <code>PutThirdPartyJobSuccessResult</code> action. */
	export interface PutThirdPartyJobSuccessResultInputFormProperties {
		jobId: FormControl<string | null | undefined>,
		clientToken: FormControl<string | null | undefined>,
		continuationToken: FormControl<string | null | undefined>,
	}
	export function CreatePutThirdPartyJobSuccessResultInputFormGroup() {
		return new FormGroup<PutThirdPartyJobSuccessResultInputFormProperties>({
			jobId: new FormControl<string | null | undefined>(undefined),
			clientToken: new FormControl<string | null | undefined>(undefined),
			continuationToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PutWebhookOutput {

		/** The detail returned for each webhook after listing webhooks, such as the webhook URL, the webhook name, and the webhook ARN. */
		webhook?: ListWebhookItem;
	}
	export interface PutWebhookOutputFormProperties {
	}
	export function CreatePutWebhookOutputFormGroup() {
		return new FormGroup<PutWebhookOutputFormProperties>({
		});

	}

	export interface PutWebhookInput {

		/**
		 * Represents information about a webhook and its definition.
		 * Required
		 */
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
		webhookName?: string | null;
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
		pipelineExecutionId?: string | null;
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
		pipelineName: string;
		stageName: string;
		pipelineExecutionId: string;
		retryMode: RetryStageExecutionInputRetryMode;
	}

	/** Represents the input of a <code>RetryStageExecution</code> action. */
	export interface RetryStageExecutionInputFormProperties {
		pipelineName: FormControl<string | null | undefined>,
		stageName: FormControl<string | null | undefined>,
		pipelineExecutionId: FormControl<string | null | undefined>,
		retryMode: FormControl<RetryStageExecutionInputRetryMode | null | undefined>,
	}
	export function CreateRetryStageExecutionInputFormGroup() {
		return new FormGroup<RetryStageExecutionInputFormProperties>({
			pipelineName: new FormControl<string | null | undefined>(undefined),
			stageName: new FormControl<string | null | undefined>(undefined),
			pipelineExecutionId: new FormControl<string | null | undefined>(undefined),
			retryMode: new FormControl<RetryStageExecutionInputRetryMode | null | undefined>(undefined),
		});

	}

	export enum RetryStageExecutionInputRetryMode { FAILED_ACTIONS = 0 }

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
		pipelineExecutionId?: string | null;
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
		name: string;
		clientRequestToken?: string | null;
	}

	/** Represents the input of a <code>StartPipelineExecution</code> action. */
	export interface StartPipelineExecutionInputFormProperties {
		name: FormControl<string | null | undefined>,
		clientRequestToken: FormControl<string | null | undefined>,
	}
	export function CreateStartPipelineExecutionInputFormGroup() {
		return new FormGroup<StartPipelineExecutionInputFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			clientRequestToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface StopPipelineExecutionOutput {
		pipelineExecutionId?: string | null;
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
		pipelineName: string;
		pipelineExecutionId: string;
		abandon?: boolean | null;
		reason?: string | null;
	}
	export interface StopPipelineExecutionInputFormProperties {
		pipelineName: FormControl<string | null | undefined>,
		pipelineExecutionId: FormControl<string | null | undefined>,
		abandon: FormControl<boolean | null | undefined>,
		reason: FormControl<string | null | undefined>,
	}
	export function CreateStopPipelineExecutionInputFormGroup() {
		return new FormGroup<StopPipelineExecutionInputFormProperties>({
			pipelineName: new FormControl<string | null | undefined>(undefined),
			pipelineExecutionId: new FormControl<string | null | undefined>(undefined),
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
		resourceArn: string;
		tags: Array<Tag>;
	}
	export interface TagResourceInputFormProperties {
		resourceArn: FormControl<string | null | undefined>,
	}
	export function CreateTagResourceInputFormGroup() {
		return new FormGroup<TagResourceInputFormProperties>({
			resourceArn: new FormControl<string | null | undefined>(undefined),
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
		resourceArn: string;
		tagKeys: Array<string>;
	}
	export interface UntagResourceInputFormProperties {
		resourceArn: FormControl<string | null | undefined>,
	}
	export function CreateUntagResourceInputFormGroup() {
		return new FormGroup<UntagResourceInputFormProperties>({
			resourceArn: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents the output of an <code>UpdatePipeline</code> action. */
	export interface UpdatePipelineOutput {

		/** Represents the structure of actions and stages to be performed in the pipeline. */
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

		/**
		 * Represents the structure of actions and stages to be performed in the pipeline.
		 * Required
		 */
		pipeline: PipelineDeclaration;
	}

	/** Represents the input of an <code>UpdatePipeline</code> action. */
	export interface UpdatePipelineInputFormProperties {
	}
	export function CreateUpdatePipelineInputFormGroup() {
		return new FormGroup<UpdatePipelineInputFormProperties>({
		});

	}

	export enum JobStatus { Created = 0, Queued = 1, Dispatched = 2, InProgress = 3, TimedOut = 4, Succeeded = 5, Failed = 6 }

	export enum ActionCategory { Source = 0, Build = 1, Deploy = 2, Test = 3, Invoke = 4, Approval = 5 }

	export enum ActionOwner { AWS = 0, ThirdParty = 1, Custom = 2 }

	export enum ApprovalStatus { Approved = 0, Rejected = 1 }

	export enum ArtifactLocationType { S3 = 0 }

	export enum BlockerType { Schedule = 0 }

	export enum StageTransitionType { Inbound = 0, Outbound = 1 }

	export enum TriggerType { CreatePipeline = 0, StartPipelineExecution = 1, PollForSourceChanges = 2, Webhook = 3, CloudWatchEvent = 4, PutActionRevision = 5 }

	export enum FailureType { JobFailed = 0, ConfigurationError = 1, PermissionError = 2, RevisionOutOfSync = 3, RevisionUnavailable = 4, SystemUnavailable = 5 }

	export enum StageRetryMode { FAILED_ACTIONS = 0 }

	export enum WebhookAuthenticationType { GITHUB_HMAC = 0, IP = 1, UNAUTHENTICATED = 2 }

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
		 * Creates a new custom action that can be used in all pipelines associated with the AWS account. Only used for custom actions.
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
		 * Deletes a previously created webhook by name. Deleting the webhook stops AWS CodePipeline from starting a pipeline every time an external event occurs. The API returns successfully when trying to delete a webhook that is already deleted. If a deleted webhook is re-created by calling PutWebhook with the same name, it will have a different URL.
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
		 * <p>Returns information about a job. Used for custom actions only.</p> <important> <p>When this API is called, AWS CodePipeline returns temporary credentials for the S3 bucket used to store artifacts for the pipeline, if the action requires access to that S3 bucket for input or output artifacts. This API also returns any secret values defined for the action.</p> </important>
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
		 * <p>Requests the details of a job for a third party action. Used for partner actions only.</p> <important> <p>When this API is called, AWS CodePipeline returns temporary credentials for the S3 bucket used to store artifacts for the pipeline, if the action requires access to that S3 bucket for input or output artifacts. This API also returns any secret values defined for the action.</p> </important>
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
		 * Gets a summary of all AWS CodePipeline action types associated with your account.
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
		 * @param {string} nextToken Pagination token
		 * @return {ListPipelinesOutput} Success
		 */
		ListPipelines(nextToken: string | null | undefined, requestBody: ListPipelinesInput): Observable<ListPipelinesOutput> {
			return this.http.post<ListPipelinesOutput>(this.baseUri + '#X-Amz-Target=CodePipeline_20150709.ListPipelines?nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
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
		 * Gets a listing of all the webhooks in this AWS Region for this account. The output lists all webhooks and includes the webhook URL and ARN and the configuration for each webhook.
		 * Post #X-Amz-Target=CodePipeline_20150709.ListWebhooks
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListWebhooksOutput} Success
		 */
		ListWebhooks(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListWebhooksInput): Observable<ListWebhooksOutput> {
			return this.http.post<ListWebhooksOutput>(this.baseUri + '#X-Amz-Target=CodePipeline_20150709.ListWebhooks?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Returns information about any jobs for AWS CodePipeline to act on. <code>PollForJobs</code> is valid only for action types with "Custom" in the owner field. If the action type contains "AWS" or "ThirdParty" in the owner field, the <code>PollForJobs</code> action returns an error.</p> <important> <p>When this API is called, AWS CodePipeline returns temporary credentials for the S3 bucket used to store artifacts for the pipeline, if the action requires access to that S3 bucket for input or output artifacts. This API also returns any secret values defined for the action.</p> </important>
		 * Post #X-Amz-Target=CodePipeline_20150709.PollForJobs
		 * @return {PollForJobsOutput} Success
		 */
		PollForJobs(requestBody: PollForJobsInput): Observable<PollForJobsOutput> {
			return this.http.post<PollForJobsOutput>(this.baseUri + '#X-Amz-Target=CodePipeline_20150709.PollForJobs', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Determines whether there are any third party jobs for a job worker to act on. Used for partner actions only.</p> <important> <p>When this API is called, AWS CodePipeline returns temporary credentials for the S3 bucket used to store artifacts for the pipeline, if the action requires access to that S3 bucket for input or output artifacts.</p> </important>
		 * Post #X-Amz-Target=CodePipeline_20150709.PollForThirdPartyJobs
		 * @return {PollForThirdPartyJobsOutput} Success
		 */
		PollForThirdPartyJobs(requestBody: PollForThirdPartyJobsInput): Observable<PollForThirdPartyJobsOutput> {
			return this.http.post<PollForThirdPartyJobsOutput>(this.baseUri + '#X-Amz-Target=CodePipeline_20150709.PollForThirdPartyJobs', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Provides information to AWS CodePipeline about new revisions to a source.
		 * Post #X-Amz-Target=CodePipeline_20150709.PutActionRevision
		 * @return {PutActionRevisionOutput} Success
		 */
		PutActionRevision(requestBody: PutActionRevisionInput): Observable<PutActionRevisionOutput> {
			return this.http.post<PutActionRevisionOutput>(this.baseUri + '#X-Amz-Target=CodePipeline_20150709.PutActionRevision', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Provides the response to a manual approval request to AWS CodePipeline. Valid responses include Approved and Rejected.
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
		 * Removes tags from an AWS resource.
		 * Post #X-Amz-Target=CodePipeline_20150709.UntagResource
		 * @return {UntagResourceOutput} Success
		 */
		UntagResource(requestBody: UntagResourceInput): Observable<UntagResourceOutput> {
			return this.http.post<UntagResourceOutput>(this.baseUri + '#X-Amz-Target=CodePipeline_20150709.UntagResource', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
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

	export enum AcknowledgeJobX_Amz_Target { CodePipeline_20150709_AcknowledgeJob = 0 }

	export enum AcknowledgeThirdPartyJobX_Amz_Target { CodePipeline_20150709_AcknowledgeThirdPartyJob = 0 }

	export enum CreateCustomActionTypeX_Amz_Target { CodePipeline_20150709_CreateCustomActionType = 0 }

	export enum CreatePipelineX_Amz_Target { CodePipeline_20150709_CreatePipeline = 0 }

	export enum DeleteCustomActionTypeX_Amz_Target { CodePipeline_20150709_DeleteCustomActionType = 0 }

	export enum DeletePipelineX_Amz_Target { CodePipeline_20150709_DeletePipeline = 0 }

	export enum DeleteWebhookX_Amz_Target { CodePipeline_20150709_DeleteWebhook = 0 }

	export enum DeregisterWebhookWithThirdPartyX_Amz_Target { CodePipeline_20150709_DeregisterWebhookWithThirdParty = 0 }

	export enum DisableStageTransitionX_Amz_Target { CodePipeline_20150709_DisableStageTransition = 0 }

	export enum EnableStageTransitionX_Amz_Target { CodePipeline_20150709_EnableStageTransition = 0 }

	export enum GetJobDetailsX_Amz_Target { CodePipeline_20150709_GetJobDetails = 0 }

	export enum GetPipelineX_Amz_Target { CodePipeline_20150709_GetPipeline = 0 }

	export enum GetPipelineExecutionX_Amz_Target { CodePipeline_20150709_GetPipelineExecution = 0 }

	export enum GetPipelineStateX_Amz_Target { CodePipeline_20150709_GetPipelineState = 0 }

	export enum GetThirdPartyJobDetailsX_Amz_Target { CodePipeline_20150709_GetThirdPartyJobDetails = 0 }

	export enum ListActionExecutionsX_Amz_Target { CodePipeline_20150709_ListActionExecutions = 0 }

	export enum ListActionTypesX_Amz_Target { CodePipeline_20150709_ListActionTypes = 0 }

	export enum ListPipelineExecutionsX_Amz_Target { CodePipeline_20150709_ListPipelineExecutions = 0 }

	export enum ListPipelinesX_Amz_Target { CodePipeline_20150709_ListPipelines = 0 }

	export enum ListTagsForResourceX_Amz_Target { CodePipeline_20150709_ListTagsForResource = 0 }

	export enum ListWebhooksX_Amz_Target { CodePipeline_20150709_ListWebhooks = 0 }

	export enum PollForJobsX_Amz_Target { CodePipeline_20150709_PollForJobs = 0 }

	export enum PollForThirdPartyJobsX_Amz_Target { CodePipeline_20150709_PollForThirdPartyJobs = 0 }

	export enum PutActionRevisionX_Amz_Target { CodePipeline_20150709_PutActionRevision = 0 }

	export enum PutApprovalResultX_Amz_Target { CodePipeline_20150709_PutApprovalResult = 0 }

	export enum PutJobFailureResultX_Amz_Target { CodePipeline_20150709_PutJobFailureResult = 0 }

	export enum PutJobSuccessResultX_Amz_Target { CodePipeline_20150709_PutJobSuccessResult = 0 }

	export enum PutThirdPartyJobFailureResultX_Amz_Target { CodePipeline_20150709_PutThirdPartyJobFailureResult = 0 }

	export enum PutThirdPartyJobSuccessResultX_Amz_Target { CodePipeline_20150709_PutThirdPartyJobSuccessResult = 0 }

	export enum PutWebhookX_Amz_Target { CodePipeline_20150709_PutWebhook = 0 }

	export enum RegisterWebhookWithThirdPartyX_Amz_Target { CodePipeline_20150709_RegisterWebhookWithThirdParty = 0 }

	export enum RetryStageExecutionX_Amz_Target { CodePipeline_20150709_RetryStageExecution = 0 }

	export enum StartPipelineExecutionX_Amz_Target { CodePipeline_20150709_StartPipelineExecution = 0 }

	export enum StopPipelineExecutionX_Amz_Target { CodePipeline_20150709_StopPipelineExecution = 0 }

	export enum TagResourceX_Amz_Target { CodePipeline_20150709_TagResource = 0 }

	export enum UntagResourceX_Amz_Target { CodePipeline_20150709_UntagResource = 0 }

	export enum UpdatePipelineX_Amz_Target { CodePipeline_20150709_UpdatePipeline = 0 }

}

