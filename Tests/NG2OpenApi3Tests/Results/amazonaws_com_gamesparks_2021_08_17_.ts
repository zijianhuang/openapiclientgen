import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface CreateGameResult {
		Game?: GameDetails;
	}
	export interface CreateGameResultFormProperties {
	}
	export function CreateCreateGameResultFormGroup() {
		return new FormGroup<CreateGameResultFormProperties>({
		});

	}


	/** Details about a game. */
	export interface GameDetails {
		Arn?: string;
		Created?: Date;
		Description?: string;
		EnableTerminationProtection?: boolean | null;
		LastUpdated?: Date;
		Name?: string;
		State?: GameState;
		Tags?: TagMap;
	}

	/** Details about a game. */
	export interface GameDetailsFormProperties {
		Arn: FormControl<string | null | undefined>,
		Created: FormControl<Date | null | undefined>,
		Description: FormControl<string | null | undefined>,
		EnableTerminationProtection: FormControl<boolean | null | undefined>,
		LastUpdated: FormControl<Date | null | undefined>,
		Name: FormControl<string | null | undefined>,
		State: FormControl<GameState | null | undefined>,
	}
	export function CreateGameDetailsFormGroup() {
		return new FormGroup<GameDetailsFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined),
			Created: new FormControl<Date | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			EnableTerminationProtection: new FormControl<boolean | null | undefined>(undefined),
			LastUpdated: new FormControl<Date | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			State: new FormControl<GameState | null | undefined>(undefined),
		});

	}

	export enum GameState { ACTIVE = 'ACTIVE', DELETING = 'DELETING' }

	export interface TagMap {
	}
	export interface TagMapFormProperties {
	}
	export function CreateTagMapFormGroup() {
		return new FormGroup<TagMapFormProperties>({
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

	export interface AccessDeniedException {
	}
	export interface AccessDeniedExceptionFormProperties {
	}
	export function CreateAccessDeniedExceptionFormGroup() {
		return new FormGroup<AccessDeniedExceptionFormProperties>({
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

	export interface ConflictException {
	}
	export interface ConflictExceptionFormProperties {
	}
	export function CreateConflictExceptionFormGroup() {
		return new FormGroup<ConflictExceptionFormProperties>({
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

	export interface ServiceQuotaExceededException {
	}
	export interface ServiceQuotaExceededExceptionFormProperties {
	}
	export function CreateServiceQuotaExceededExceptionFormGroup() {
		return new FormGroup<ServiceQuotaExceededExceptionFormProperties>({
		});

	}

	export interface CreateSnapshotResult {
		Snapshot?: SnapshotDetails;
	}
	export interface CreateSnapshotResultFormProperties {
	}
	export function CreateCreateSnapshotResultFormGroup() {
		return new FormGroup<CreateSnapshotResultFormProperties>({
		});

	}


	/** Properties that provide details of a snapshot. */
	export interface SnapshotDetails {
		Created?: Date;
		Description?: string;
		Id?: string;
		LastUpdated?: Date;
		Sections?: Sections;
	}

	/** Properties that provide details of a snapshot. */
	export interface SnapshotDetailsFormProperties {
		Created: FormControl<Date | null | undefined>,
		Description: FormControl<string | null | undefined>,
		Id: FormControl<string | null | undefined>,
		LastUpdated: FormControl<Date | null | undefined>,
	}
	export function CreateSnapshotDetailsFormGroup() {
		return new FormGroup<SnapshotDetailsFormProperties>({
			Created: new FormControl<Date | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			Id: new FormControl<string | null | undefined>(undefined),
			LastUpdated: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface Sections {
	}
	export interface SectionsFormProperties {
	}
	export function CreateSectionsFormGroup() {
		return new FormGroup<SectionsFormProperties>({
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

	export interface CreateStageResult {
		Stage?: StageDetails;
	}
	export interface CreateStageResultFormProperties {
	}
	export function CreateCreateStageResultFormGroup() {
		return new FormGroup<CreateStageResultFormProperties>({
		});

	}


	/** Properties that provide details of a stage. */
	export interface StageDetails {
		Arn?: string;
		Created?: Date;
		Description?: string;
		GameKey?: string;
		LastUpdated?: Date;
		LogGroup?: string;
		Name?: string;
		Role?: string;
		State?: GameState;
		Tags?: TagMap;
	}

	/** Properties that provide details of a stage. */
	export interface StageDetailsFormProperties {
		Arn: FormControl<string | null | undefined>,
		Created: FormControl<Date | null | undefined>,
		Description: FormControl<string | null | undefined>,
		GameKey: FormControl<string | null | undefined>,
		LastUpdated: FormControl<Date | null | undefined>,
		LogGroup: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
		Role: FormControl<string | null | undefined>,
		State: FormControl<GameState | null | undefined>,
	}
	export function CreateStageDetailsFormGroup() {
		return new FormGroup<StageDetailsFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined),
			Created: new FormControl<Date | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			GameKey: new FormControl<string | null | undefined>(undefined),
			LastUpdated: new FormControl<Date | null | undefined>(undefined),
			LogGroup: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			Role: new FormControl<string | null | undefined>(undefined),
			State: new FormControl<GameState | null | undefined>(undefined),
		});

	}

	export interface DeleteGameResult {
	}
	export interface DeleteGameResultFormProperties {
	}
	export function CreateDeleteGameResultFormGroup() {
		return new FormGroup<DeleteGameResultFormProperties>({
		});

	}

	export interface DeleteStageResult {
	}
	export interface DeleteStageResultFormProperties {
	}
	export function CreateDeleteStageResultFormGroup() {
		return new FormGroup<DeleteStageResultFormProperties>({
		});

	}

	export interface DisconnectPlayerResult {
		DisconnectFailures?: Array<string>;
		DisconnectSuccesses?: Array<string>;
	}
	export interface DisconnectPlayerResultFormProperties {
	}
	export function CreateDisconnectPlayerResultFormGroup() {
		return new FormGroup<DisconnectPlayerResultFormProperties>({
		});

	}

	export interface ExportSnapshotResult {
		S3Url?: string;
	}
	export interface ExportSnapshotResultFormProperties {
		S3Url: FormControl<string | null | undefined>,
	}
	export function CreateExportSnapshotResultFormGroup() {
		return new FormGroup<ExportSnapshotResultFormProperties>({
			S3Url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetExtensionResult {
		Extension?: ExtensionDetails;
	}
	export interface GetExtensionResultFormProperties {
	}
	export function CreateGetExtensionResultFormGroup() {
		return new FormGroup<GetExtensionResultFormProperties>({
		});

	}


	/** Details about the extension. */
	export interface ExtensionDetails {
		Description?: string;
		Name?: string;
		Namespace?: string;
	}

	/** Details about the extension. */
	export interface ExtensionDetailsFormProperties {
		Description: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
		Namespace: FormControl<string | null | undefined>,
	}
	export function CreateExtensionDetailsFormGroup() {
		return new FormGroup<ExtensionDetailsFormProperties>({
			Description: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			Namespace: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetExtensionVersionResult {
		ExtensionVersion?: ExtensionVersionDetails;
	}
	export interface GetExtensionVersionResultFormProperties {
	}
	export function CreateGetExtensionVersionResultFormGroup() {
		return new FormGroup<GetExtensionVersionResultFormProperties>({
		});

	}


	/** Details about the extension version. */
	export interface ExtensionVersionDetails {
		Name?: string;
		Namespace?: string;
		Schema?: string;
		Version?: string;
	}

	/** Details about the extension version. */
	export interface ExtensionVersionDetailsFormProperties {
		Name: FormControl<string | null | undefined>,
		Namespace: FormControl<string | null | undefined>,
		Schema: FormControl<string | null | undefined>,
		Version: FormControl<string | null | undefined>,
	}
	export function CreateExtensionVersionDetailsFormGroup() {
		return new FormGroup<ExtensionVersionDetailsFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
			Namespace: new FormControl<string | null | undefined>(undefined),
			Schema: new FormControl<string | null | undefined>(undefined),
			Version: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetGameResult {
		Game?: GameDetails;
	}
	export interface GetGameResultFormProperties {
	}
	export function CreateGetGameResultFormGroup() {
		return new FormGroup<GetGameResultFormProperties>({
		});

	}

	export interface GetGameConfigurationResult {
		GameConfiguration?: GameConfigurationDetails;
	}
	export interface GetGameConfigurationResultFormProperties {
	}
	export function CreateGetGameConfigurationResultFormGroup() {
		return new FormGroup<GetGameConfigurationResultFormProperties>({
		});

	}


	/** <p>Details about the game configuration.</p> <p> The game configuration is organized into named sections, where the schema of each section is defined by an extension. The schema for these sections can be retrieved using the <code>GetExtensionVersion</code> operation. </p> */
	export interface GameConfigurationDetails {
		Created?: Date;
		LastUpdated?: Date;
		Sections?: Sections;
	}

	/** <p>Details about the game configuration.</p> <p> The game configuration is organized into named sections, where the schema of each section is defined by an extension. The schema for these sections can be retrieved using the <code>GetExtensionVersion</code> operation. </p> */
	export interface GameConfigurationDetailsFormProperties {
		Created: FormControl<Date | null | undefined>,
		LastUpdated: FormControl<Date | null | undefined>,
	}
	export function CreateGameConfigurationDetailsFormGroup() {
		return new FormGroup<GameConfigurationDetailsFormProperties>({
			Created: new FormControl<Date | null | undefined>(undefined),
			LastUpdated: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface GetGeneratedCodeJobResult {
		GeneratedCodeJob?: GeneratedCodeJobDetails;
	}
	export interface GetGeneratedCodeJobResultFormProperties {
	}
	export function CreateGetGeneratedCodeJobResultFormGroup() {
		return new FormGroup<GetGeneratedCodeJobResultFormProperties>({
		});

	}


	/** Details about a generated code job. */
	export interface GeneratedCodeJobDetails {
		Description?: string;
		ExpirationTime?: Date;
		GeneratedCodeJobId?: string;
		S3Url?: string;
		Status?: GeneratedCodeJobState;
	}

	/** Details about a generated code job. */
	export interface GeneratedCodeJobDetailsFormProperties {
		Description: FormControl<string | null | undefined>,
		ExpirationTime: FormControl<Date | null | undefined>,
		GeneratedCodeJobId: FormControl<string | null | undefined>,
		S3Url: FormControl<string | null | undefined>,
		Status: FormControl<GeneratedCodeJobState | null | undefined>,
	}
	export function CreateGeneratedCodeJobDetailsFormGroup() {
		return new FormGroup<GeneratedCodeJobDetailsFormProperties>({
			Description: new FormControl<string | null | undefined>(undefined),
			ExpirationTime: new FormControl<Date | null | undefined>(undefined),
			GeneratedCodeJobId: new FormControl<string | null | undefined>(undefined),
			S3Url: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<GeneratedCodeJobState | null | undefined>(undefined),
		});

	}

	export enum GeneratedCodeJobState { IN_PROGRESS = 'IN_PROGRESS', COMPLETED = 'COMPLETED', FAILED = 'FAILED', PENDING = 'PENDING' }

	export interface GetPlayerConnectionStatusResult {
		Connections?: Array<Connection>;
	}
	export interface GetPlayerConnectionStatusResultFormProperties {
	}
	export function CreateGetPlayerConnectionStatusResultFormGroup() {
		return new FormGroup<GetPlayerConnectionStatusResultFormProperties>({
		});

	}


	/** Details about a WebSocket connection. */
	export interface Connection {
		Created?: Date;
		Id?: string;
	}

	/** Details about a WebSocket connection. */
	export interface ConnectionFormProperties {
		Created: FormControl<Date | null | undefined>,
		Id: FormControl<string | null | undefined>,
	}
	export function CreateConnectionFormGroup() {
		return new FormGroup<ConnectionFormProperties>({
			Created: new FormControl<Date | null | undefined>(undefined),
			Id: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetSnapshotResult {
		Snapshot?: SnapshotDetails;
	}
	export interface GetSnapshotResultFormProperties {
	}
	export function CreateGetSnapshotResultFormGroup() {
		return new FormGroup<GetSnapshotResultFormProperties>({
		});

	}

	export interface GetStageResult {
		Stage?: StageDetails;
	}
	export interface GetStageResultFormProperties {
	}
	export function CreateGetStageResultFormGroup() {
		return new FormGroup<GetStageResultFormProperties>({
		});

	}

	export interface GetStageDeploymentResult {
		StageDeployment?: StageDeploymentDetails;
	}
	export interface GetStageDeploymentResultFormProperties {
	}
	export function CreateGetStageDeploymentResultFormGroup() {
		return new FormGroup<GetStageDeploymentResultFormProperties>({
		});

	}


	/** Properties that provide details of a stage deployment. */
	export interface StageDeploymentDetails {
		Created?: Date;
		DeploymentAction?: DeploymentAction;
		DeploymentId?: string;
		DeploymentResult?: DeploymentResult;
		DeploymentState?: DeploymentState;
		LastUpdated?: Date;
		SnapshotId?: string;
	}

	/** Properties that provide details of a stage deployment. */
	export interface StageDeploymentDetailsFormProperties {
		Created: FormControl<Date | null | undefined>,
		DeploymentAction: FormControl<DeploymentAction | null | undefined>,
		DeploymentId: FormControl<string | null | undefined>,
		DeploymentState: FormControl<DeploymentState | null | undefined>,
		LastUpdated: FormControl<Date | null | undefined>,
		SnapshotId: FormControl<string | null | undefined>,
	}
	export function CreateStageDeploymentDetailsFormGroup() {
		return new FormGroup<StageDeploymentDetailsFormProperties>({
			Created: new FormControl<Date | null | undefined>(undefined),
			DeploymentAction: new FormControl<DeploymentAction | null | undefined>(undefined),
			DeploymentId: new FormControl<string | null | undefined>(undefined),
			DeploymentState: new FormControl<DeploymentState | null | undefined>(undefined),
			LastUpdated: new FormControl<Date | null | undefined>(undefined),
			SnapshotId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum DeploymentAction { DEPLOY = 'DEPLOY', UNDEPLOY = 'UNDEPLOY' }


	/** The result of the deployment. */
	export interface DeploymentResult {
		Message?: string;
		ResultCode?: ResultCode;
	}

	/** The result of the deployment. */
	export interface DeploymentResultFormProperties {
		Message: FormControl<string | null | undefined>,
		ResultCode: FormControl<ResultCode | null | undefined>,
	}
	export function CreateDeploymentResultFormGroup() {
		return new FormGroup<DeploymentResultFormProperties>({
			Message: new FormControl<string | null | undefined>(undefined),
			ResultCode: new FormControl<ResultCode | null | undefined>(undefined),
		});

	}

	export enum ResultCode { SUCCESS = 'SUCCESS', INVALID_ROLE_FAILURE = 'INVALID_ROLE_FAILURE', UNSPECIFIED_FAILURE = 'UNSPECIFIED_FAILURE' }

	export enum DeploymentState { PENDING = 'PENDING', IN_PROGRESS = 'IN_PROGRESS', COMPLETED = 'COMPLETED', FAILED = 'FAILED' }

	export interface ImportGameConfigurationResult {
		GameConfiguration?: GameConfigurationDetails;
	}
	export interface ImportGameConfigurationResultFormProperties {
	}
	export function CreateImportGameConfigurationResultFormGroup() {
		return new FormGroup<ImportGameConfigurationResultFormProperties>({
		});

	}

	export interface ListExtensionVersionsResult {
		ExtensionVersions?: Array<ExtensionVersionDetails>;
		NextToken?: string;
	}
	export interface ListExtensionVersionsResultFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListExtensionVersionsResultFormGroup() {
		return new FormGroup<ListExtensionVersionsResultFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListExtensionsResult {
		Extensions?: Array<ExtensionDetails>;
		NextToken?: string;
	}
	export interface ListExtensionsResultFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListExtensionsResultFormGroup() {
		return new FormGroup<ListExtensionsResultFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListGamesResult {
		Games?: Array<GameSummary>;
		NextToken?: string;
	}
	export interface ListGamesResultFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListGamesResultFormGroup() {
		return new FormGroup<ListGamesResultFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The summary of the properties of a game. */
	export interface GameSummary {
		Description?: string;
		Name?: string;
		State?: GameState;
		Tags?: TagMap;
	}

	/** The summary of the properties of a game. */
	export interface GameSummaryFormProperties {
		Description: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
		State: FormControl<GameState | null | undefined>,
	}
	export function CreateGameSummaryFormGroup() {
		return new FormGroup<GameSummaryFormProperties>({
			Description: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			State: new FormControl<GameState | null | undefined>(undefined),
		});

	}

	export interface ListGeneratedCodeJobsResult {
		GeneratedCodeJobs?: Array<GeneratedCodeJobDetails>;
		NextToken?: string;
	}
	export interface ListGeneratedCodeJobsResultFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListGeneratedCodeJobsResultFormGroup() {
		return new FormGroup<ListGeneratedCodeJobsResultFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListSnapshotsResult {
		NextToken?: string;
		Snapshots?: Array<SnapshotSummary>;
	}
	export interface ListSnapshotsResultFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListSnapshotsResultFormGroup() {
		return new FormGroup<ListSnapshotsResultFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The summary of the properties of a snapshot. */
	export interface SnapshotSummary {
		Created?: Date;
		Description?: string;
		Id?: string;
		LastUpdated?: Date;
	}

	/** The summary of the properties of a snapshot. */
	export interface SnapshotSummaryFormProperties {
		Created: FormControl<Date | null | undefined>,
		Description: FormControl<string | null | undefined>,
		Id: FormControl<string | null | undefined>,
		LastUpdated: FormControl<Date | null | undefined>,
	}
	export function CreateSnapshotSummaryFormGroup() {
		return new FormGroup<SnapshotSummaryFormProperties>({
			Created: new FormControl<Date | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			Id: new FormControl<string | null | undefined>(undefined),
			LastUpdated: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface ListStageDeploymentsResult {
		NextToken?: string;
		StageDeployments?: Array<StageDeploymentSummary>;
	}
	export interface ListStageDeploymentsResultFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListStageDeploymentsResultFormGroup() {
		return new FormGroup<ListStageDeploymentsResultFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The summary of the properties of a stage deployment. */
	export interface StageDeploymentSummary {
		DeploymentAction?: DeploymentAction;
		DeploymentId?: string;
		DeploymentResult?: DeploymentResult;
		DeploymentState?: DeploymentState;
		LastUpdated?: Date;
		SnapshotId?: string;
	}

	/** The summary of the properties of a stage deployment. */
	export interface StageDeploymentSummaryFormProperties {
		DeploymentAction: FormControl<DeploymentAction | null | undefined>,
		DeploymentId: FormControl<string | null | undefined>,
		DeploymentState: FormControl<DeploymentState | null | undefined>,
		LastUpdated: FormControl<Date | null | undefined>,
		SnapshotId: FormControl<string | null | undefined>,
	}
	export function CreateStageDeploymentSummaryFormGroup() {
		return new FormGroup<StageDeploymentSummaryFormProperties>({
			DeploymentAction: new FormControl<DeploymentAction | null | undefined>(undefined),
			DeploymentId: new FormControl<string | null | undefined>(undefined),
			DeploymentState: new FormControl<DeploymentState | null | undefined>(undefined),
			LastUpdated: new FormControl<Date | null | undefined>(undefined),
			SnapshotId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListStagesResult {
		NextToken?: string;
		Stages?: Array<StageSummary>;
	}
	export interface ListStagesResultFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListStagesResultFormGroup() {
		return new FormGroup<ListStagesResultFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The summary of the properties of a stage. */
	export interface StageSummary {
		Description?: string;
		GameKey?: string;
		Name?: string;
		State?: GameState;
		Tags?: TagMap;
	}

	/** The summary of the properties of a stage. */
	export interface StageSummaryFormProperties {
		Description: FormControl<string | null | undefined>,
		GameKey: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
		State: FormControl<GameState | null | undefined>,
	}
	export function CreateStageSummaryFormGroup() {
		return new FormGroup<StageSummaryFormProperties>({
			Description: new FormControl<string | null | undefined>(undefined),
			GameKey: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			State: new FormControl<GameState | null | undefined>(undefined),
		});

	}

	export interface ListTagsForResourceResult {
		tags?: TagMap;
	}
	export interface ListTagsForResourceResultFormProperties {
	}
	export function CreateListTagsForResourceResultFormGroup() {
		return new FormGroup<ListTagsForResourceResultFormProperties>({
		});

	}

	export interface StartGeneratedCodeJobResult {
		GeneratedCodeJobId?: string;
	}
	export interface StartGeneratedCodeJobResultFormProperties {
		GeneratedCodeJobId: FormControl<string | null | undefined>,
	}
	export function CreateStartGeneratedCodeJobResultFormGroup() {
		return new FormGroup<StartGeneratedCodeJobResultFormProperties>({
			GeneratedCodeJobId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface StartStageDeploymentResult {
		StageDeployment?: StageDeploymentDetails;
	}
	export interface StartStageDeploymentResultFormProperties {
	}
	export function CreateStartStageDeploymentResultFormGroup() {
		return new FormGroup<StartStageDeploymentResultFormProperties>({
		});

	}

	export interface TagResourceResult {
	}
	export interface TagResourceResultFormProperties {
	}
	export function CreateTagResourceResultFormGroup() {
		return new FormGroup<TagResourceResultFormProperties>({
		});

	}

	export interface UntagResourceResult {
	}
	export interface UntagResourceResultFormProperties {
	}
	export function CreateUntagResourceResultFormGroup() {
		return new FormGroup<UntagResourceResultFormProperties>({
		});

	}

	export interface UpdateGameResult {
		Game?: GameDetails;
	}
	export interface UpdateGameResultFormProperties {
	}
	export function CreateUpdateGameResultFormGroup() {
		return new FormGroup<UpdateGameResultFormProperties>({
		});

	}

	export interface UpdateGameConfigurationResult {
		GameConfiguration?: GameConfigurationDetails;
	}
	export interface UpdateGameConfigurationResultFormProperties {
	}
	export function CreateUpdateGameConfigurationResultFormGroup() {
		return new FormGroup<UpdateGameConfigurationResultFormProperties>({
		});

	}


	/** A single modification to the configuration section. */
	export interface SectionModification {

		/** Required */
		Operation: Operation;

		/** Required */
		Path: string;

		/** Required */
		Section: string;
		Value?: Document;
	}

	/** A single modification to the configuration section. */
	export interface SectionModificationFormProperties {

		/** Required */
		Operation: FormControl<Operation | null | undefined>,

		/** Required */
		Path: FormControl<string | null | undefined>,

		/** Required */
		Section: FormControl<string | null | undefined>,
	}
	export function CreateSectionModificationFormGroup() {
		return new FormGroup<SectionModificationFormProperties>({
			Operation: new FormControl<Operation | null | undefined>(undefined, [Validators.required]),
			Path: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Section: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum Operation { ADD = 'ADD', REMOVE = 'REMOVE', REPLACE = 'REPLACE' }


	/** <p/> */
	export interface Document {
	}

	/** <p/> */
	export interface DocumentFormProperties {
	}
	export function CreateDocumentFormGroup() {
		return new FormGroup<DocumentFormProperties>({
		});

	}

	export interface UpdateSnapshotResult {
		Snapshot?: SnapshotDetails;
	}
	export interface UpdateSnapshotResultFormProperties {
	}
	export function CreateUpdateSnapshotResultFormGroup() {
		return new FormGroup<UpdateSnapshotResultFormProperties>({
		});

	}

	export interface UpdateStageResult {
		Stage?: StageDetails;
	}
	export interface UpdateStageResultFormProperties {
	}
	export function CreateUpdateStageResultFormGroup() {
		return new FormGroup<UpdateStageResultFormProperties>({
		});

	}

	export interface CreateGameRequest {
		ClientToken?: string;
		Description?: string;

		/** Required */
		GameName: string;
		Tags?: TagMap;
	}
	export interface CreateGameRequestFormProperties {
		ClientToken: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,

		/** Required */
		GameName: FormControl<string | null | undefined>,
	}
	export function CreateCreateGameRequestFormGroup() {
		return new FormGroup<CreateGameRequestFormProperties>({
			ClientToken: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			GameName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateSnapshotRequest {
		Description?: string;
	}
	export interface CreateSnapshotRequestFormProperties {
		Description: FormControl<string | null | undefined>,
	}
	export function CreateCreateSnapshotRequestFormGroup() {
		return new FormGroup<CreateSnapshotRequestFormProperties>({
			Description: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateStageRequest {
		ClientToken?: string;
		Description?: string;

		/** Required */
		Role: string;

		/** Required */
		StageName: string;
		Tags?: TagMap;
	}
	export interface CreateStageRequestFormProperties {
		ClientToken: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,

		/** Required */
		Role: FormControl<string | null | undefined>,

		/** Required */
		StageName: FormControl<string | null | undefined>,
	}
	export function CreateCreateStageRequestFormGroup() {
		return new FormGroup<CreateStageRequestFormProperties>({
			ClientToken: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			Role: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			StageName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeleteGameRequest {
	}
	export interface DeleteGameRequestFormProperties {
	}
	export function CreateDeleteGameRequestFormGroup() {
		return new FormGroup<DeleteGameRequestFormProperties>({
		});

	}

	export interface DeleteStageRequest {
	}
	export interface DeleteStageRequestFormProperties {
	}
	export function CreateDeleteStageRequestFormGroup() {
		return new FormGroup<DeleteStageRequestFormProperties>({
		});

	}

	export interface DisconnectPlayerRequest {
	}
	export interface DisconnectPlayerRequestFormProperties {
	}
	export function CreateDisconnectPlayerRequestFormGroup() {
		return new FormGroup<DisconnectPlayerRequestFormProperties>({
		});

	}

	export interface ExportSnapshotRequest {
	}
	export interface ExportSnapshotRequestFormProperties {
	}
	export function CreateExportSnapshotRequestFormGroup() {
		return new FormGroup<ExportSnapshotRequestFormProperties>({
		});

	}


	/** Properties that specify the code generator for a generated code job. */
	export interface Generator {
		GameSdkVersion?: string;
		Language?: string;
		TargetPlatform?: string;
	}

	/** Properties that specify the code generator for a generated code job. */
	export interface GeneratorFormProperties {
		GameSdkVersion: FormControl<string | null | undefined>,
		Language: FormControl<string | null | undefined>,
		TargetPlatform: FormControl<string | null | undefined>,
	}
	export function CreateGeneratorFormGroup() {
		return new FormGroup<GeneratorFormProperties>({
			GameSdkVersion: new FormControl<string | null | undefined>(undefined),
			Language: new FormControl<string | null | undefined>(undefined),
			TargetPlatform: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetExtensionRequest {
	}
	export interface GetExtensionRequestFormProperties {
	}
	export function CreateGetExtensionRequestFormGroup() {
		return new FormGroup<GetExtensionRequestFormProperties>({
		});

	}

	export interface GetExtensionVersionRequest {
	}
	export interface GetExtensionVersionRequestFormProperties {
	}
	export function CreateGetExtensionVersionRequestFormGroup() {
		return new FormGroup<GetExtensionVersionRequestFormProperties>({
		});

	}

	export interface GetGameConfigurationRequest {
	}
	export interface GetGameConfigurationRequestFormProperties {
	}
	export function CreateGetGameConfigurationRequestFormGroup() {
		return new FormGroup<GetGameConfigurationRequestFormProperties>({
		});

	}

	export interface GetGameRequest {
	}
	export interface GetGameRequestFormProperties {
	}
	export function CreateGetGameRequestFormGroup() {
		return new FormGroup<GetGameRequestFormProperties>({
		});

	}

	export interface GetGeneratedCodeJobRequest {
	}
	export interface GetGeneratedCodeJobRequestFormProperties {
	}
	export function CreateGetGeneratedCodeJobRequestFormGroup() {
		return new FormGroup<GetGeneratedCodeJobRequestFormProperties>({
		});

	}

	export interface GetPlayerConnectionStatusRequest {
	}
	export interface GetPlayerConnectionStatusRequestFormProperties {
	}
	export function CreateGetPlayerConnectionStatusRequestFormGroup() {
		return new FormGroup<GetPlayerConnectionStatusRequestFormProperties>({
		});

	}

	export interface GetSnapshotRequest {
	}
	export interface GetSnapshotRequestFormProperties {
	}
	export function CreateGetSnapshotRequestFormGroup() {
		return new FormGroup<GetSnapshotRequestFormProperties>({
		});

	}

	export interface GetStageDeploymentRequest {
	}
	export interface GetStageDeploymentRequestFormProperties {
	}
	export function CreateGetStageDeploymentRequestFormGroup() {
		return new FormGroup<GetStageDeploymentRequestFormProperties>({
		});

	}

	export interface GetStageRequest {
	}
	export interface GetStageRequestFormProperties {
	}
	export function CreateGetStageRequestFormGroup() {
		return new FormGroup<GetStageRequestFormProperties>({
		});

	}


	/** The source used to import configuration sections. */
	export interface ImportGameConfigurationSource {

		/** Required */
		File: string;
	}

	/** The source used to import configuration sections. */
	export interface ImportGameConfigurationSourceFormProperties {

		/** Required */
		File: FormControl<string | null | undefined>,
	}
	export function CreateImportGameConfigurationSourceFormGroup() {
		return new FormGroup<ImportGameConfigurationSourceFormProperties>({
			File: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ImportGameConfigurationRequest {

		/** Required */
		ImportSource: ImportGameConfigurationSource;
	}
	export interface ImportGameConfigurationRequestFormProperties {
	}
	export function CreateImportGameConfigurationRequestFormGroup() {
		return new FormGroup<ImportGameConfigurationRequestFormProperties>({
		});

	}

	export interface ListExtensionVersionsRequest {
	}
	export interface ListExtensionVersionsRequestFormProperties {
	}
	export function CreateListExtensionVersionsRequestFormGroup() {
		return new FormGroup<ListExtensionVersionsRequestFormProperties>({
		});

	}

	export interface ListExtensionsRequest {
	}
	export interface ListExtensionsRequestFormProperties {
	}
	export function CreateListExtensionsRequestFormGroup() {
		return new FormGroup<ListExtensionsRequestFormProperties>({
		});

	}

	export interface ListGamesRequest {
	}
	export interface ListGamesRequestFormProperties {
	}
	export function CreateListGamesRequestFormGroup() {
		return new FormGroup<ListGamesRequestFormProperties>({
		});

	}

	export interface ListGeneratedCodeJobsRequest {
	}
	export interface ListGeneratedCodeJobsRequestFormProperties {
	}
	export function CreateListGeneratedCodeJobsRequestFormGroup() {
		return new FormGroup<ListGeneratedCodeJobsRequestFormProperties>({
		});

	}

	export interface ListSnapshotsRequest {
	}
	export interface ListSnapshotsRequestFormProperties {
	}
	export function CreateListSnapshotsRequestFormGroup() {
		return new FormGroup<ListSnapshotsRequestFormProperties>({
		});

	}

	export interface ListStageDeploymentsRequest {
	}
	export interface ListStageDeploymentsRequestFormProperties {
	}
	export function CreateListStageDeploymentsRequestFormGroup() {
		return new FormGroup<ListStageDeploymentsRequestFormProperties>({
		});

	}

	export interface ListStagesRequest {
	}
	export interface ListStagesRequestFormProperties {
	}
	export function CreateListStagesRequestFormGroup() {
		return new FormGroup<ListStagesRequestFormProperties>({
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


	/** The configuration section. */
	export interface Section {
		Attributes?: Document;
		Name?: string;
		Size?: number | null;
	}

	/** The configuration section. */
	export interface SectionFormProperties {
		Name: FormControl<string | null | undefined>,
		Size: FormControl<number | null | undefined>,
	}
	export function CreateSectionFormGroup() {
		return new FormGroup<SectionFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
			Size: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum StageState { ACTIVE = 'ACTIVE', DELETING = 'DELETING' }

	export interface StartGeneratedCodeJobRequest {

		/** Required */
		Generator: Generator;
	}
	export interface StartGeneratedCodeJobRequestFormProperties {
	}
	export function CreateStartGeneratedCodeJobRequestFormGroup() {
		return new FormGroup<StartGeneratedCodeJobRequestFormProperties>({
		});

	}

	export interface StartStageDeploymentRequest {
		ClientToken?: string;

		/** Required */
		SnapshotId: string;
	}
	export interface StartStageDeploymentRequestFormProperties {
		ClientToken: FormControl<string | null | undefined>,

		/** Required */
		SnapshotId: FormControl<string | null | undefined>,
	}
	export function CreateStartStageDeploymentRequestFormGroup() {
		return new FormGroup<StartStageDeploymentRequestFormProperties>({
			ClientToken: new FormControl<string | null | undefined>(undefined),
			SnapshotId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
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

	export interface UntagResourceRequest {
	}
	export interface UntagResourceRequestFormProperties {
	}
	export function CreateUntagResourceRequestFormGroup() {
		return new FormGroup<UntagResourceRequestFormProperties>({
		});

	}

	export interface UpdateGameConfigurationRequest {

		/** Required */
		Modifications: Array<SectionModification>;
	}
	export interface UpdateGameConfigurationRequestFormProperties {
	}
	export function CreateUpdateGameConfigurationRequestFormGroup() {
		return new FormGroup<UpdateGameConfigurationRequestFormProperties>({
		});

	}

	export interface UpdateGameRequest {
		Description?: string;
	}
	export interface UpdateGameRequestFormProperties {
		Description: FormControl<string | null | undefined>,
	}
	export function CreateUpdateGameRequestFormGroup() {
		return new FormGroup<UpdateGameRequestFormProperties>({
			Description: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateSnapshotRequest {
		Description?: string;
	}
	export interface UpdateSnapshotRequestFormProperties {
		Description: FormControl<string | null | undefined>,
	}
	export function CreateUpdateSnapshotRequestFormGroup() {
		return new FormGroup<UpdateSnapshotRequestFormProperties>({
			Description: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateStageRequest {
		Description?: string;
		Role?: string;
	}
	export interface UpdateStageRequestFormProperties {
		Description: FormControl<string | null | undefined>,
		Role: FormControl<string | null | undefined>,
	}
	export function CreateUpdateStageRequestFormGroup() {
		return new FormGroup<UpdateStageRequestFormProperties>({
			Description: new FormControl<string | null | undefined>(undefined),
			Role: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Creates a new game with an empty configuration. After creating your game, you can update the configuration using <code>UpdateGameConfiguration</code> or <code>ImportGameConfiguration</code>.
		 * Post game
		 * @return {CreateGameResult} Success
		 */
		CreateGame(requestBody: CreateGamePostBody): Observable<CreateGameResult> {
			return this.http.post<CreateGameResult>(this.baseUri + 'game', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets a paginated list of games.
		 * Get game
		 * @param {number} MaxResults <p>The maximum number of results to return.</p> <p> Use this parameter with NextToken to get results as a set of sequential pages. </p>
		 * @param {string} NextToken <p>The token that indicates the start of the next sequential page of results.</p> <p> Use the token that is returned with a previous call to this operation. To start at the beginning of the result set, do not specify a value. </p>
		 * @return {ListGamesResult} Success
		 */
		ListGames(MaxResults: number | null | undefined, NextToken: string | null | undefined): Observable<ListGamesResult> {
			return this.http.get<ListGamesResult>(this.baseUri + 'game?MaxResults=' + MaxResults + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), {});
		}

		/**
		 * Creates a snapshot of the game configuration.
		 * Post game/{GameName}/snapshot
		 * @param {string} GameName The name of the game.
		 * @return {CreateSnapshotResult} Success
		 */
		CreateSnapshot(GameName: string, requestBody: CreateSnapshotPostBody): Observable<CreateSnapshotResult> {
			return this.http.post<CreateSnapshotResult>(this.baseUri + 'game/' + (GameName == null ? '' : encodeURIComponent(GameName)) + '/snapshot', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets a paginated list of snapshot summaries from the game.
		 * Get game/{GameName}/snapshot
		 * @param {string} GameName The name of the game.
		 * @param {number} MaxResults <p>The maximum number of results to return.</p> <p> Use this parameter with NextToken to get results as a set of sequential pages. </p>
		 * @param {string} NextToken <p>The token that indicates the start of the next sequential page of results.</p> <p> Use the token that is returned with a previous call to this operation. To start at the beginning of the result set, do not specify a value. </p>
		 * @return {ListSnapshotsResult} Success
		 */
		ListSnapshots(GameName: string, MaxResults: number | null | undefined, NextToken: string | null | undefined): Observable<ListSnapshotsResult> {
			return this.http.get<ListSnapshotsResult>(this.baseUri + 'game/' + (GameName == null ? '' : encodeURIComponent(GameName)) + '/snapshot&MaxResults=' + MaxResults + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), {});
		}

		/**
		 * Creates a new stage for stage-by-stage game development and deployment.
		 * Post game/{GameName}/stage
		 * @param {string} GameName The name of the game.
		 * @return {CreateStageResult} Success
		 */
		CreateStage(GameName: string, requestBody: CreateStagePostBody): Observable<CreateStageResult> {
			return this.http.post<CreateStageResult>(this.baseUri + 'game/' + (GameName == null ? '' : encodeURIComponent(GameName)) + '/stage', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets a paginated list of stage summaries from the game.
		 * Get game/{GameName}/stage
		 * @param {string} GameName The name of the game.
		 * @param {number} MaxResults <p>The maximum number of results to return.</p> <p> Use this parameter with NextToken to get results as a set of sequential pages. </p>
		 * @param {string} NextToken <p>The token that indicates the start of the next sequential page of results.</p> <p> Use the token that is returned with a previous call to this operation. To start at the beginning of the result set, do not specify a value. </p>
		 * @return {ListStagesResult} Success
		 */
		ListStages(GameName: string, MaxResults: number | null | undefined, NextToken: string | null | undefined): Observable<ListStagesResult> {
			return this.http.get<ListStagesResult>(this.baseUri + 'game/' + (GameName == null ? '' : encodeURIComponent(GameName)) + '/stage&MaxResults=' + MaxResults + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), {});
		}

		/**
		 * Deletes a game.
		 * Delete game/{GameName}
		 * @param {string} GameName The name of the game to delete.
		 * @return {DeleteGameResult} Success
		 */
		DeleteGame(GameName: string): Observable<DeleteGameResult> {
			return this.http.delete<DeleteGameResult>(this.baseUri + 'game/' + (GameName == null ? '' : encodeURIComponent(GameName)), {});
		}

		/**
		 * Gets details about a game.
		 * Get game/{GameName}
		 * @param {string} GameName The name of the game.
		 * @return {GetGameResult} Success
		 */
		GetGame(GameName: string): Observable<GetGameResult> {
			return this.http.get<GetGameResult>(this.baseUri + 'game/' + (GameName == null ? '' : encodeURIComponent(GameName)), {});
		}

		/**
		 * Updates details of the game.
		 * Patch game/{GameName}
		 * @param {string} GameName The name of the game.
		 * @return {UpdateGameResult} Success
		 */
		UpdateGame(GameName: string, requestBody: UpdateGamePatchBody): Observable<UpdateGameResult> {
			return this.http.patch<UpdateGameResult>(this.baseUri + 'game/' + (GameName == null ? '' : encodeURIComponent(GameName)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a stage from a game, along with the associated game runtime.
		 * Delete game/{GameName}/stage/{StageName}
		 * @param {string} GameName The name of the game.
		 * @param {string} StageName The name of the stage to delete.
		 * @return {DeleteStageResult} Success
		 */
		DeleteStage(GameName: string, StageName: string): Observable<DeleteStageResult> {
			return this.http.delete<DeleteStageResult>(this.baseUri + 'game/' + (GameName == null ? '' : encodeURIComponent(GameName)) + '/stage/' + (StageName == null ? '' : encodeURIComponent(StageName)), {});
		}

		/**
		 * Gets information about a stage.
		 * Get game/{GameName}/stage/{StageName}
		 * @param {string} GameName The name of the game.
		 * @param {string} StageName The name of the stage.
		 * @return {GetStageResult} Success
		 */
		GetStage(GameName: string, StageName: string): Observable<GetStageResult> {
			return this.http.get<GetStageResult>(this.baseUri + 'game/' + (GameName == null ? '' : encodeURIComponent(GameName)) + '/stage/' + (StageName == null ? '' : encodeURIComponent(StageName)), {});
		}

		/**
		 * Updates the metadata of a stage.
		 * Patch game/{GameName}/stage/{StageName}
		 * @param {string} GameName The name of the game.
		 * @param {string} StageName The name of the stage.
		 * @return {UpdateStageResult} Success
		 */
		UpdateStage(GameName: string, StageName: string, requestBody: UpdateStagePatchBody): Observable<UpdateStageResult> {
			return this.http.patch<UpdateStageResult>(this.baseUri + 'game/' + (GameName == null ? '' : encodeURIComponent(GameName)) + '/stage/' + (StageName == null ? '' : encodeURIComponent(StageName)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Disconnects a player from the game runtime.</p> <p> If a player has multiple connections, this operation attempts to close all of them. </p>
		 * Post runtime/game/{GameName}/stage/{StageName}/player/{PlayerId}/disconnect
		 * @param {string} GameName The name of the game.
		 * @param {string} PlayerId The unique identifier representing a player.
		 * @param {string} StageName The name of the stage.
		 * @return {DisconnectPlayerResult} Success
		 */
		DisconnectPlayer(GameName: string, PlayerId: string, StageName: string): Observable<DisconnectPlayerResult> {
			return this.http.post<DisconnectPlayerResult>(this.baseUri + 'runtime/game/' + (GameName == null ? '' : encodeURIComponent(GameName)) + '/stage/' + (StageName == null ? '' : encodeURIComponent(StageName)) + '/player/' + (PlayerId == null ? '' : encodeURIComponent(PlayerId)) + '/disconnect', null, {});
		}

		/**
		 * Exports a game configuration snapshot.
		 * Get game/{GameName}/snapshot/{SnapshotId}/export
		 * @param {string} GameName The name of the game.
		 * @param {string} SnapshotId The identifier of the snapshot to export.
		 * @return {ExportSnapshotResult} Success
		 */
		ExportSnapshot(GameName: string, SnapshotId: string): Observable<ExportSnapshotResult> {
			return this.http.get<ExportSnapshotResult>(this.baseUri + 'game/' + (GameName == null ? '' : encodeURIComponent(GameName)) + '/snapshot/' + (SnapshotId == null ? '' : encodeURIComponent(SnapshotId)) + '/export', {});
		}

		/**
		 * Gets details about a specified extension.
		 * Get extension/{Namespace}/{Name}
		 * @param {string} Name The name of the extension.
		 * @param {string} Namespace The namespace (qualifier) of the extension.
		 * @return {GetExtensionResult} Success
		 */
		GetExtension(Name: string, Namespace: string): Observable<GetExtensionResult> {
			return this.http.get<GetExtensionResult>(this.baseUri + 'extension/' + (Namespace == null ? '' : encodeURIComponent(Namespace)) + '/' + (Name == null ? '' : encodeURIComponent(Name)), {});
		}

		/**
		 * Gets details about a specified extension version.
		 * Get extension/{Namespace}/{Name}/version/{ExtensionVersion}
		 * @param {string} ExtensionVersion The version of the extension.
		 * @param {string} Name The name of the extension.
		 * @param {string} Namespace The namespace (qualifier) of the extension.
		 * @return {GetExtensionVersionResult} Success
		 */
		GetExtensionVersion(ExtensionVersion: string, Name: string, Namespace: string): Observable<GetExtensionVersionResult> {
			return this.http.get<GetExtensionVersionResult>(this.baseUri + 'extension/' + (Namespace == null ? '' : encodeURIComponent(Namespace)) + '/' + (Name == null ? '' : encodeURIComponent(Name)) + '/version/' + (ExtensionVersion == null ? '' : encodeURIComponent(ExtensionVersion)), {});
		}

		/**
		 * Gets the configuration of the game.
		 * Get game/{GameName}/configuration
		 * @param {string} GameName The name of the game.
		 * @param {Array<string>} Sections The list of sections to return.
		 * @return {GetGameConfigurationResult} Success
		 */
		GetGameConfiguration(GameName: string, Sections: Array<string> | null | undefined): Observable<GetGameConfigurationResult> {
			return this.http.get<GetGameConfigurationResult>(this.baseUri + 'game/' + (GameName == null ? '' : encodeURIComponent(GameName)) + '/configuration&' + Sections?.map(z => `Sections=${encodeURIComponent(z)}`).join('&'), {});
		}

		/**
		 * <p>Imports a game configuration.</p> <p> This operation replaces the current configuration of the game with the provided input. This is not a reversible operation. If you want to preserve the previous configuration, use <code>CreateSnapshot</code> to make a new snapshot before importing. </p>
		 * Put game/{GameName}/configuration
		 * @param {string} GameName The name of the game.
		 * @return {ImportGameConfigurationResult} Success
		 */
		ImportGameConfiguration(GameName: string, requestBody: ImportGameConfigurationPutBody): Observable<ImportGameConfigurationResult> {
			return this.http.put<ImportGameConfigurationResult>(this.baseUri + 'game/' + (GameName == null ? '' : encodeURIComponent(GameName)) + '/configuration', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Updates one or more sections of the game configuration.
		 * Patch game/{GameName}/configuration
		 * @param {string} GameName The name of the game.
		 * @return {UpdateGameConfigurationResult} Success
		 */
		UpdateGameConfiguration(GameName: string, requestBody: UpdateGameConfigurationPatchBody): Observable<UpdateGameConfigurationResult> {
			return this.http.patch<UpdateGameConfigurationResult>(this.baseUri + 'game/' + (GameName == null ? '' : encodeURIComponent(GameName)) + '/configuration', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets details about a job that is generating code for a snapshot.
		 * Get game/{GameName}/snapshot/{SnapshotId}/generated-sdk-code-job/{JobId}
		 * @param {string} GameName The name of the game.
		 * @param {string} JobId The identifier of the code generation job.
		 * @param {string} SnapshotId The identifier of the snapshot for the code generation job.
		 * @return {GetGeneratedCodeJobResult} Success
		 */
		GetGeneratedCodeJob(GameName: string, JobId: string, SnapshotId: string): Observable<GetGeneratedCodeJobResult> {
			return this.http.get<GetGeneratedCodeJobResult>(this.baseUri + 'game/' + (GameName == null ? '' : encodeURIComponent(GameName)) + '/snapshot/' + (SnapshotId == null ? '' : encodeURIComponent(SnapshotId)) + '/generated-sdk-code-job/' + (JobId == null ? '' : encodeURIComponent(JobId)), {});
		}

		/**
		 * <p>Gets the status of a player's connection to the game runtime.</p> <p> It's possible for a single player to have multiple connections to the game runtime. If a player is not connected, this operation returns an empty list. </p>
		 * Get runtime/game/{GameName}/stage/{StageName}/player/{PlayerId}/connection
		 * @param {string} GameName The name of the game.
		 * @param {string} PlayerId The unique identifier representing a player.
		 * @param {string} StageName The name of the stage.
		 * @return {GetPlayerConnectionStatusResult} Success
		 */
		GetPlayerConnectionStatus(GameName: string, PlayerId: string, StageName: string): Observable<GetPlayerConnectionStatusResult> {
			return this.http.get<GetPlayerConnectionStatusResult>(this.baseUri + 'runtime/game/' + (GameName == null ? '' : encodeURIComponent(GameName)) + '/stage/' + (StageName == null ? '' : encodeURIComponent(StageName)) + '/player/' + (PlayerId == null ? '' : encodeURIComponent(PlayerId)) + '/connection', {});
		}

		/**
		 * Gets a copy of the game configuration in a snapshot.
		 * Get game/{GameName}/snapshot/{SnapshotId}
		 * @param {string} GameName The name of the game.
		 * @param {Array<string>} Sections The list of game configuration sections to be described.
		 * @param {string} SnapshotId The identifier of the snapshot.
		 * @return {GetSnapshotResult} Success
		 */
		GetSnapshot(GameName: string, Sections: Array<string> | null | undefined, SnapshotId: string): Observable<GetSnapshotResult> {
			return this.http.get<GetSnapshotResult>(this.baseUri + 'game/' + (GameName == null ? '' : encodeURIComponent(GameName)) + '/snapshot/' + (SnapshotId == null ? '' : encodeURIComponent(SnapshotId)) + '&' + Sections?.map(z => `Sections=${encodeURIComponent(z)}`).join('&'), {});
		}

		/**
		 * Updates the metadata of a GameSparks snapshot.
		 * Patch game/{GameName}/snapshot/{SnapshotId}
		 * @param {string} GameName The name of the game.
		 * @param {string} SnapshotId The identifier of the snapshot.
		 * @return {UpdateSnapshotResult} Success
		 */
		UpdateSnapshot(GameName: string, SnapshotId: string, requestBody: UpdateSnapshotPatchBody): Observable<UpdateSnapshotResult> {
			return this.http.patch<UpdateSnapshotResult>(this.baseUri + 'game/' + (GameName == null ? '' : encodeURIComponent(GameName)) + '/snapshot/' + (SnapshotId == null ? '' : encodeURIComponent(SnapshotId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets information about a stage deployment.
		 * Get game/{GameName}/stage/{StageName}/deployment
		 * @param {string} DeploymentId  The identifier of the stage deployment. <code>StartStageDeployment</code> returns the identifier that you use here. 
		 * @param {string} GameName The name of the game.
		 * @param {string} StageName The name of the stage.
		 * @return {GetStageDeploymentResult} Success
		 */
		GetStageDeployment(DeploymentId: string | null | undefined, GameName: string, StageName: string): Observable<GetStageDeploymentResult> {
			return this.http.get<GetStageDeploymentResult>(this.baseUri + 'game/' + (GameName == null ? '' : encodeURIComponent(GameName)) + '/stage/' + (StageName == null ? '' : encodeURIComponent(StageName)) + '/deployment?DeploymentId=' + (DeploymentId == null ? '' : encodeURIComponent(DeploymentId)), {});
		}

		/**
		 * <p>Deploys a snapshot to the stage and creates a new game runtime.</p> <p> After you call this operation, you can check the deployment status by using <code>GetStageDeployment</code>. </p> <p> If there are any players connected to the previous game runtime, then both runtimes persist. Existing connections to the previous runtime are maintained. When players disconnect and reconnect, they connect to the new runtime. After there are no connections to the previous game runtime, it is deleted. </p>
		 * Post game/{GameName}/stage/{StageName}/deployment
		 * @param {string} GameName The name of the game.
		 * @param {string} StageName The name of the stage to deploy the snapshot onto.
		 * @return {StartStageDeploymentResult} Success
		 */
		StartStageDeployment(GameName: string, StageName: string, requestBody: StartStageDeploymentPostBody): Observable<StartStageDeploymentResult> {
			return this.http.post<StartStageDeploymentResult>(this.baseUri + 'game/' + (GameName == null ? '' : encodeURIComponent(GameName)) + '/stage/' + (StageName == null ? '' : encodeURIComponent(StageName)) + '/deployment', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Gets a paginated list of available versions for the extension.</p> <p> Each time an API change is made to an extension, the version is incremented. The list retrieved by this operation shows the versions that are currently available. </p>
		 * Get extension/{Namespace}/{Name}/version
		 * @param {number} MaxResults <p>The maximum number of results to return.</p> <p> Use this parameter with NextToken to get results as a set of sequential pages. </p>
		 * @param {string} Name The name of the extension.
		 * @param {string} Namespace The namespace (qualifier) of the extension.
		 * @param {string} NextToken <p>The token that indicates the start of the next sequential page of results.</p> <p> Use the token that is returned with a previous call to this operation. To start at the beginning of the result set, do not specify a value. </p>
		 * @return {ListExtensionVersionsResult} Success
		 */
		ListExtensionVersions(MaxResults: number | null | undefined, Name: string, Namespace: string, NextToken: string | null | undefined): Observable<ListExtensionVersionsResult> {
			return this.http.get<ListExtensionVersionsResult>(this.baseUri + 'extension/' + (Namespace == null ? '' : encodeURIComponent(Namespace)) + '/' + (Name == null ? '' : encodeURIComponent(Name)) + '/version?MaxResults=' + MaxResults + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), {});
		}

		/**
		 * <p>Gets a paginated list of available extensions.</p> <p> Extensions provide features that games can use from scripts. </p>
		 * Get extension
		 * @param {number} MaxResults <p>The maximum number of results to return.</p> <p> Use this parameter with NextToken to get results as a set of sequential pages. </p>
		 * @param {string} NextToken <p>The token that indicates the start of the next sequential page of results.</p> <p> Use the token that is returned with a previous call to this operation. To start at the beginning of the result set, do not specify a value. </p>
		 * @return {ListExtensionsResult} Success
		 */
		ListExtensions(MaxResults: number | null | undefined, NextToken: string | null | undefined): Observable<ListExtensionsResult> {
			return this.http.get<ListExtensionsResult>(this.baseUri + 'extension?MaxResults=' + MaxResults + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), {});
		}

		/**
		 * Gets a paginated list of code generation jobs for a snapshot.
		 * Get game/{GameName}/snapshot/{SnapshotId}/generated-sdk-code-jobs
		 * @param {string} GameName The name of the game.
		 * @param {number} MaxResults <p>The maximum number of results to return.</p> <p> Use this parameter with NextToken to get results as a set of sequential pages. </p>
		 * @param {string} NextToken <p>The token that indicates the start of the next sequential page of results.</p> <p> Use the token that is returned with a previous call to this operation. To start at the beginning of the result set, do not specify a value. </p>
		 * @param {string} SnapshotId The identifier of the snapshot.
		 * @return {ListGeneratedCodeJobsResult} Success
		 */
		ListGeneratedCodeJobs(GameName: string, MaxResults: number | null | undefined, NextToken: string | null | undefined, SnapshotId: string): Observable<ListGeneratedCodeJobsResult> {
			return this.http.get<ListGeneratedCodeJobsResult>(this.baseUri + 'game/' + (GameName == null ? '' : encodeURIComponent(GameName)) + '/snapshot/' + (SnapshotId == null ? '' : encodeURIComponent(SnapshotId)) + '/generated-sdk-code-jobs&MaxResults=' + MaxResults + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), {});
		}

		/**
		 * Gets a paginated list of stage deployment summaries from the game.
		 * Get game/{GameName}/stage/{StageName}/deployments
		 * @param {string} GameName The name of the game.
		 * @param {number} MaxResults <p>The maximum number of results to return.</p> <p> Use this parameter with NextToken to get results as a set of sequential pages. </p>
		 * @param {string} NextToken <p>The token that indicates the start of the next sequential page of results.</p> <p> Use the token that is returned with a previous call to this operation. To start at the beginning of the result set, do not specify a value. </p>
		 * @param {string} StageName The name of the stage.
		 * @return {ListStageDeploymentsResult} Success
		 */
		ListStageDeployments(GameName: string, MaxResults: number | null | undefined, NextToken: string | null | undefined, StageName: string): Observable<ListStageDeploymentsResult> {
			return this.http.get<ListStageDeploymentsResult>(this.baseUri + 'game/' + (GameName == null ? '' : encodeURIComponent(GameName)) + '/stage/' + (StageName == null ? '' : encodeURIComponent(StageName)) + '/deployments&MaxResults=' + MaxResults + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), {});
		}

		/**
		 * Lists the tags associated with a GameSparks resource.
		 * Get tags/{ResourceArn}
		 * @param {string} ResourceArn The Amazon Resource Name (ARN) of the GameSparks resource.
		 * @return {ListTagsForResourceResult} Success
		 */
		ListTagsForResource(ResourceArn: string): Observable<ListTagsForResourceResult> {
			return this.http.get<ListTagsForResourceResult>(this.baseUri + 'tags/' + (ResourceArn == null ? '' : encodeURIComponent(ResourceArn)), {});
		}

		/**
		 * Adds tags to a GameSparks resource.
		 * Post tags/{ResourceArn}
		 * @param {string} ResourceArn The Amazon Resource Name (ARN) of the resource to add the tags to.
		 * @return {TagResourceResult} Success
		 */
		TagResource(ResourceArn: string, requestBody: TagResourcePostBody): Observable<TagResourceResult> {
			return this.http.post<TagResourceResult>(this.baseUri + 'tags/' + (ResourceArn == null ? '' : encodeURIComponent(ResourceArn)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Starts an asynchronous process that generates client code for system-defined and custom messages. The resulting code is collected as a .zip file and uploaded to a pre-signed Amazon S3 URL.
		 * Post game/{GameName}/snapshot/{SnapshotId}/generated-sdk-code-job
		 * @param {string} GameName The name of the game.
		 * @param {string} SnapshotId The identifier of the snapshot for which to generate code.
		 * @return {StartGeneratedCodeJobResult} Success
		 */
		StartGeneratedCodeJob(GameName: string, SnapshotId: string, requestBody: StartGeneratedCodeJobPostBody): Observable<StartGeneratedCodeJobResult> {
			return this.http.post<StartGeneratedCodeJobResult>(this.baseUri + 'game/' + (GameName == null ? '' : encodeURIComponent(GameName)) + '/snapshot/' + (SnapshotId == null ? '' : encodeURIComponent(SnapshotId)) + '/generated-sdk-code-job', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Removes tags from a GameSparks resource.
		 * Delete tags/{ResourceArn}#tagKeys
		 * @param {string} ResourceArn The Amazon Resource Name (ARN) of the resource to remove the tags from.
		 * @param {Array<string>} tagKeys The keys of the tags to remove.
		 * @return {UntagResourceResult} Success
		 */
		UntagResource(ResourceArn: string, tagKeys: Array<string>): Observable<UntagResourceResult> {
			return this.http.delete<UntagResourceResult>(this.baseUri + 'tags/' + (ResourceArn == null ? '' : encodeURIComponent(ResourceArn)) + '#tagKeys&' + tagKeys.map(z => `tagKeys=${encodeURIComponent(z)}`).join('&'), {});
		}
	}

	export interface CreateGamePostBody {

		/**
		 * A client-defined token. With an active client token in the request, this action is idempotent.
		 * Max length: 126
		 * Min length: 33
		 */
		ClientToken?: string | null;

		/**
		 * The description of the game.
		 * Max length: 250
		 * Min length: 0
		 */
		Description?: string | null;

		/**
		 * The name of the game.
		 * Required
		 * Max length: 36
		 * Min length: 1
		 */
		GameName: string;

		/** The list of tags to apply to the game. */
		Tags?: {[id: string]: string };
	}
	export interface CreateGamePostBodyFormProperties {

		/**
		 * A client-defined token. With an active client token in the request, this action is idempotent.
		 * Max length: 126
		 * Min length: 33
		 */
		ClientToken: FormControl<string | null | undefined>,

		/**
		 * The description of the game.
		 * Max length: 250
		 * Min length: 0
		 */
		Description: FormControl<string | null | undefined>,

		/**
		 * The name of the game.
		 * Required
		 * Max length: 36
		 * Min length: 1
		 */
		GameName: FormControl<string | null | undefined>,

		/** The list of tags to apply to the game. */
		Tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateCreateGamePostBodyFormGroup() {
		return new FormGroup<CreateGamePostBodyFormProperties>({
			ClientToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(33), Validators.maxLength(126)]),
			Description: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(250), Validators.pattern('^\S(.*\S)?$|^$')]),
			GameName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(36), Validators.pattern('^[a-zA-Z0-9_-]+$')]),
			Tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}

	export interface CreateSnapshotPostBody {

		/**
		 * The description of the snapshot.
		 * Max length: 250
		 * Min length: 0
		 */
		Description?: string | null;
	}
	export interface CreateSnapshotPostBodyFormProperties {

		/**
		 * The description of the snapshot.
		 * Max length: 250
		 * Min length: 0
		 */
		Description: FormControl<string | null | undefined>,
	}
	export function CreateCreateSnapshotPostBodyFormGroup() {
		return new FormGroup<CreateSnapshotPostBodyFormProperties>({
			Description: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(250), Validators.pattern('^\S(.*\S)?$|^$')]),
		});

	}

	export interface CreateStagePostBody {

		/**
		 * A client-defined token. With an active client token in the request, this action is idempotent.
		 * Max length: 126
		 * Min length: 33
		 */
		ClientToken?: string | null;

		/**
		 * The description of the stage.
		 * Max length: 250
		 * Min length: 0
		 */
		Description?: string | null;

		/**
		 * The Amazon Resource Name (ARN) of the role to run the game with. This role can be a game-defined role or the default role that GameSparks created.
		 * Required
		 * Max length: 2048
		 * Min length: 20
		 */
		Role: string;

		/**
		 * The name of the stage.
		 * Required
		 * Max length: 36
		 * Min length: 1
		 */
		StageName: string;

		/** The list of tags to apply to the stage. */
		Tags?: {[id: string]: string };
	}
	export interface CreateStagePostBodyFormProperties {

		/**
		 * A client-defined token. With an active client token in the request, this action is idempotent.
		 * Max length: 126
		 * Min length: 33
		 */
		ClientToken: FormControl<string | null | undefined>,

		/**
		 * The description of the stage.
		 * Max length: 250
		 * Min length: 0
		 */
		Description: FormControl<string | null | undefined>,

		/**
		 * The Amazon Resource Name (ARN) of the role to run the game with. This role can be a game-defined role or the default role that GameSparks created.
		 * Required
		 * Max length: 2048
		 * Min length: 20
		 */
		Role: FormControl<string | null | undefined>,

		/**
		 * The name of the stage.
		 * Required
		 * Max length: 36
		 * Min length: 1
		 */
		StageName: FormControl<string | null | undefined>,

		/** The list of tags to apply to the stage. */
		Tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateCreateStagePostBodyFormGroup() {
		return new FormGroup<CreateStagePostBodyFormProperties>({
			ClientToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(33), Validators.maxLength(126)]),
			Description: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(250), Validators.pattern('^\S(.*\S)?$|^$')]),
			Role: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(20), Validators.maxLength(2048), Validators.pattern('^arn:(aws[a-zA-Z-]*)?:iam::\d{12}:role/.+$')]),
			StageName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(36), Validators.pattern('^[a-zA-Z0-9_-]+$')]),
			Tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}

	export interface UpdateGamePatchBody {

		/**
		 * The description of the game.
		 * Max length: 250
		 * Min length: 0
		 */
		Description?: string | null;
	}
	export interface UpdateGamePatchBodyFormProperties {

		/**
		 * The description of the game.
		 * Max length: 250
		 * Min length: 0
		 */
		Description: FormControl<string | null | undefined>,
	}
	export function CreateUpdateGamePatchBodyFormGroup() {
		return new FormGroup<UpdateGamePatchBodyFormProperties>({
			Description: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(250), Validators.pattern('^\S(.*\S)?$|^$')]),
		});

	}

	export interface UpdateStagePatchBody {

		/**
		 * The description of the stage.
		 * Max length: 250
		 * Min length: 0
		 */
		Description?: string | null;

		/**
		 * The Amazon Resource Name (ARN) of the role to use for the game snapshots deployed to this stage.
		 * Max length: 2048
		 * Min length: 20
		 */
		Role?: string | null;
	}
	export interface UpdateStagePatchBodyFormProperties {

		/**
		 * The description of the stage.
		 * Max length: 250
		 * Min length: 0
		 */
		Description: FormControl<string | null | undefined>,

		/**
		 * The Amazon Resource Name (ARN) of the role to use for the game snapshots deployed to this stage.
		 * Max length: 2048
		 * Min length: 20
		 */
		Role: FormControl<string | null | undefined>,
	}
	export function CreateUpdateStagePatchBodyFormGroup() {
		return new FormGroup<UpdateStagePatchBodyFormProperties>({
			Description: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(250), Validators.pattern('^\S(.*\S)?$|^$')]),
			Role: new FormControl<string | null | undefined>(undefined, [Validators.minLength(20), Validators.maxLength(2048), Validators.pattern('^arn:(aws[a-zA-Z-]*)?:iam::\d{12}:role/.+$')]),
		});

	}

	export interface ImportGameConfigurationPutBody {

		/**
		 * The source used to import configuration sections.
		 * Required
		 */
		ImportSource: ImportGameConfigurationPutBodyImportSource;
	}
	export interface ImportGameConfigurationPutBodyFormProperties {
	}
	export function CreateImportGameConfigurationPutBodyFormGroup() {
		return new FormGroup<ImportGameConfigurationPutBodyFormProperties>({
		});

	}

	export interface ImportGameConfigurationPutBodyImportSource {
		File?: string;
	}
	export interface ImportGameConfigurationPutBodyImportSourceFormProperties {
		File: FormControl<string | null | undefined>,
	}
	export function CreateImportGameConfigurationPutBodyImportSourceFormGroup() {
		return new FormGroup<ImportGameConfigurationPutBodyImportSourceFormProperties>({
			File: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateGameConfigurationPatchBody {

		/**
		 * The list of modifications to make.
		 * Required
		 * Minimum items: 1
		 * Maximum items: 100
		 */
		Modifications: Array<SectionModification>;
	}
	export interface UpdateGameConfigurationPatchBodyFormProperties {
	}
	export function CreateUpdateGameConfigurationPatchBodyFormGroup() {
		return new FormGroup<UpdateGameConfigurationPatchBodyFormProperties>({
		});

	}

	export interface UpdateSnapshotPatchBody {

		/**
		 * The description of the snapshot.
		 * Max length: 250
		 * Min length: 0
		 */
		Description?: string | null;
	}
	export interface UpdateSnapshotPatchBodyFormProperties {

		/**
		 * The description of the snapshot.
		 * Max length: 250
		 * Min length: 0
		 */
		Description: FormControl<string | null | undefined>,
	}
	export function CreateUpdateSnapshotPatchBodyFormGroup() {
		return new FormGroup<UpdateSnapshotPatchBodyFormProperties>({
			Description: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(250), Validators.pattern('^\S(.*\S)?$|^$')]),
		});

	}

	export interface StartStageDeploymentPostBody {

		/**
		 * A client-defined token. With an active client token in the request, this action is idempotent.
		 * Max length: 126
		 * Min length: 33
		 */
		ClientToken?: string | null;

		/**
		 * The identifier of the snapshot to deploy.
		 * Required
		 * Max length: 36
		 * Min length: 33
		 */
		SnapshotId: string;
	}
	export interface StartStageDeploymentPostBodyFormProperties {

		/**
		 * A client-defined token. With an active client token in the request, this action is idempotent.
		 * Max length: 126
		 * Min length: 33
		 */
		ClientToken: FormControl<string | null | undefined>,

		/**
		 * The identifier of the snapshot to deploy.
		 * Required
		 * Max length: 36
		 * Min length: 33
		 */
		SnapshotId: FormControl<string | null | undefined>,
	}
	export function CreateStartStageDeploymentPostBodyFormGroup() {
		return new FormGroup<StartStageDeploymentPostBodyFormProperties>({
			ClientToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(33), Validators.maxLength(126)]),
			SnapshotId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(33), Validators.maxLength(36), Validators.pattern('^Snapshot_\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3,6}Z$')]),
		});

	}

	export interface TagResourcePostBody {

		/**
		 * The tags to add to the resource.
		 * Required
		 */
		tags: {[id: string]: string };
	}
	export interface TagResourcePostBodyFormProperties {

		/**
		 * The tags to add to the resource.
		 * Required
		 */
		tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateTagResourcePostBodyFormGroup() {
		return new FormGroup<TagResourcePostBodyFormProperties>({
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface StartGeneratedCodeJobPostBody {

		/**
		 * Properties that specify the code generator for a generated code job.
		 * Required
		 */
		Generator: StartGeneratedCodeJobPostBodyGenerator;
	}
	export interface StartGeneratedCodeJobPostBodyFormProperties {
	}
	export function CreateStartGeneratedCodeJobPostBodyFormGroup() {
		return new FormGroup<StartGeneratedCodeJobPostBodyFormProperties>({
		});

	}

	export interface StartGeneratedCodeJobPostBodyGenerator {
		GameSdkVersion?: string;
		Language?: string;
		TargetPlatform?: string;
	}
	export interface StartGeneratedCodeJobPostBodyGeneratorFormProperties {
		GameSdkVersion: FormControl<string | null | undefined>,
		Language: FormControl<string | null | undefined>,
		TargetPlatform: FormControl<string | null | undefined>,
	}
	export function CreateStartGeneratedCodeJobPostBodyGeneratorFormGroup() {
		return new FormGroup<StartGeneratedCodeJobPostBodyGeneratorFormProperties>({
			GameSdkVersion: new FormControl<string | null | undefined>(undefined),
			Language: new FormControl<string | null | undefined>(undefined),
			TargetPlatform: new FormControl<string | null | undefined>(undefined),
		});

	}

}

