import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface AssociateConnectionAliasResult {
		ConnectionIdentifier?: string;
	}
	export interface AssociateConnectionAliasResultFormProperties {
		ConnectionIdentifier: FormControl<string | null | undefined>,
	}
	export function CreateAssociateConnectionAliasResultFormGroup() {
		return new FormGroup<AssociateConnectionAliasResultFormProperties>({
			ConnectionIdentifier: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface AssociateConnectionAliasRequest {

		/** Required */
		AliasId: string;

		/** Required */
		ResourceId: string;
	}
	export interface AssociateConnectionAliasRequestFormProperties {

		/** Required */
		AliasId: FormControl<string | null | undefined>,

		/** Required */
		ResourceId: FormControl<string | null | undefined>,
	}
	export function CreateAssociateConnectionAliasRequestFormGroup() {
		return new FormGroup<AssociateConnectionAliasRequestFormProperties>({
			AliasId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ResourceId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ResourceAssociatedException {
	}
	export interface ResourceAssociatedExceptionFormProperties {
	}
	export function CreateResourceAssociatedExceptionFormGroup() {
		return new FormGroup<ResourceAssociatedExceptionFormProperties>({
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

	export interface ResourceNotFoundException {
	}
	export interface ResourceNotFoundExceptionFormProperties {
	}
	export function CreateResourceNotFoundExceptionFormGroup() {
		return new FormGroup<ResourceNotFoundExceptionFormProperties>({
		});

	}

	export interface InvalidParameterValuesException {
	}
	export interface InvalidParameterValuesExceptionFormProperties {
	}
	export function CreateInvalidParameterValuesExceptionFormGroup() {
		return new FormGroup<InvalidParameterValuesExceptionFormProperties>({
		});

	}

	export interface InvalidResourceStateException {
	}
	export interface InvalidResourceStateExceptionFormProperties {
	}
	export function CreateInvalidResourceStateExceptionFormGroup() {
		return new FormGroup<InvalidResourceStateExceptionFormProperties>({
		});

	}

	export interface OperationNotSupportedException {
	}
	export interface OperationNotSupportedExceptionFormProperties {
	}
	export function CreateOperationNotSupportedExceptionFormGroup() {
		return new FormGroup<OperationNotSupportedExceptionFormProperties>({
		});

	}

	export interface AssociateIpGroupsResult {
	}
	export interface AssociateIpGroupsResultFormProperties {
	}
	export function CreateAssociateIpGroupsResultFormGroup() {
		return new FormGroup<AssociateIpGroupsResultFormProperties>({
		});

	}

	export interface AssociateIpGroupsRequest {

		/** Required */
		DirectoryId: string;

		/** Required */
		GroupIds: Array<string>;
	}
	export interface AssociateIpGroupsRequestFormProperties {

		/** Required */
		DirectoryId: FormControl<string | null | undefined>,
	}
	export function CreateAssociateIpGroupsRequestFormGroup() {
		return new FormGroup<AssociateIpGroupsRequestFormProperties>({
			DirectoryId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ResourceLimitExceededException {
	}
	export interface ResourceLimitExceededExceptionFormProperties {
	}
	export function CreateResourceLimitExceededExceptionFormGroup() {
		return new FormGroup<ResourceLimitExceededExceptionFormProperties>({
		});

	}

	export interface AuthorizeIpRulesResult {
	}
	export interface AuthorizeIpRulesResultFormProperties {
	}
	export function CreateAuthorizeIpRulesResultFormGroup() {
		return new FormGroup<AuthorizeIpRulesResultFormProperties>({
		});

	}

	export interface AuthorizeIpRulesRequest {

		/** Required */
		GroupId: string;

		/** Required */
		UserRules: Array<IpRuleItem>;
	}
	export interface AuthorizeIpRulesRequestFormProperties {

		/** Required */
		GroupId: FormControl<string | null | undefined>,
	}
	export function CreateAuthorizeIpRulesRequestFormGroup() {
		return new FormGroup<AuthorizeIpRulesRequestFormProperties>({
			GroupId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Describes a rule for an IP access control group. */
	export interface IpRuleItem {
		ipRule?: string;
		ruleDesc?: string;
	}

	/** Describes a rule for an IP access control group. */
	export interface IpRuleItemFormProperties {
		ipRule: FormControl<string | null | undefined>,
		ruleDesc: FormControl<string | null | undefined>,
	}
	export function CreateIpRuleItemFormGroup() {
		return new FormGroup<IpRuleItemFormProperties>({
			ipRule: new FormControl<string | null | undefined>(undefined),
			ruleDesc: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CopyWorkspaceImageResult {
		ImageId?: string;
	}
	export interface CopyWorkspaceImageResultFormProperties {
		ImageId: FormControl<string | null | undefined>,
	}
	export function CreateCopyWorkspaceImageResultFormGroup() {
		return new FormGroup<CopyWorkspaceImageResultFormProperties>({
			ImageId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CopyWorkspaceImageRequest {

		/** Required */
		Name: string;
		Description?: string;

		/** Required */
		SourceImageId: string;

		/** Required */
		SourceRegion: string;
		Tags?: Array<Tag>;
	}
	export interface CopyWorkspaceImageRequestFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,

		/** Required */
		SourceImageId: FormControl<string | null | undefined>,

		/** Required */
		SourceRegion: FormControl<string | null | undefined>,
	}
	export function CreateCopyWorkspaceImageRequestFormGroup() {
		return new FormGroup<CopyWorkspaceImageRequestFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Description: new FormControl<string | null | undefined>(undefined),
			SourceImageId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			SourceRegion: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Describes a tag. */
	export interface Tag {

		/** Required */
		Key: string;
		Value?: string;
	}

	/** Describes a tag. */
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

	export interface ResourceAlreadyExistsException {
	}
	export interface ResourceAlreadyExistsExceptionFormProperties {
	}
	export function CreateResourceAlreadyExistsExceptionFormGroup() {
		return new FormGroup<ResourceAlreadyExistsExceptionFormProperties>({
		});

	}

	export interface ResourceUnavailableException {
	}
	export interface ResourceUnavailableExceptionFormProperties {
	}
	export function CreateResourceUnavailableExceptionFormGroup() {
		return new FormGroup<ResourceUnavailableExceptionFormProperties>({
		});

	}

	export interface CreateConnectClientAddInResult {
		AddInId?: string;
	}
	export interface CreateConnectClientAddInResultFormProperties {
		AddInId: FormControl<string | null | undefined>,
	}
	export function CreateCreateConnectClientAddInResultFormGroup() {
		return new FormGroup<CreateConnectClientAddInResultFormProperties>({
			AddInId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateConnectClientAddInRequest {

		/** Required */
		ResourceId: string;

		/** Required */
		Name: string;

		/** Required */
		URL: string;
	}
	export interface CreateConnectClientAddInRequestFormProperties {

		/** Required */
		ResourceId: FormControl<string | null | undefined>,

		/** Required */
		Name: FormControl<string | null | undefined>,

		/** Required */
		URL: FormControl<string | null | undefined>,
	}
	export function CreateCreateConnectClientAddInRequestFormGroup() {
		return new FormGroup<CreateConnectClientAddInRequestFormProperties>({
			ResourceId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			URL: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ResourceCreationFailedException {
	}
	export interface ResourceCreationFailedExceptionFormProperties {
	}
	export function CreateResourceCreationFailedExceptionFormGroup() {
		return new FormGroup<ResourceCreationFailedExceptionFormProperties>({
		});

	}

	export interface CreateConnectionAliasResult {
		AliasId?: string;
	}
	export interface CreateConnectionAliasResultFormProperties {
		AliasId: FormControl<string | null | undefined>,
	}
	export function CreateCreateConnectionAliasResultFormGroup() {
		return new FormGroup<CreateConnectionAliasResultFormProperties>({
			AliasId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateConnectionAliasRequest {

		/** Required */
		ConnectionString: string;
		Tags?: Array<Tag>;
	}
	export interface CreateConnectionAliasRequestFormProperties {

		/** Required */
		ConnectionString: FormControl<string | null | undefined>,
	}
	export function CreateCreateConnectionAliasRequestFormGroup() {
		return new FormGroup<CreateConnectionAliasRequestFormProperties>({
			ConnectionString: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateIpGroupResult {
		GroupId?: string;
	}
	export interface CreateIpGroupResultFormProperties {
		GroupId: FormControl<string | null | undefined>,
	}
	export function CreateCreateIpGroupResultFormGroup() {
		return new FormGroup<CreateIpGroupResultFormProperties>({
			GroupId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateIpGroupRequest {

		/** Required */
		GroupName: string;
		GroupDesc?: string;
		UserRules?: Array<IpRuleItem>;
		Tags?: Array<Tag>;
	}
	export interface CreateIpGroupRequestFormProperties {

		/** Required */
		GroupName: FormControl<string | null | undefined>,
		GroupDesc: FormControl<string | null | undefined>,
	}
	export function CreateCreateIpGroupRequestFormGroup() {
		return new FormGroup<CreateIpGroupRequestFormProperties>({
			GroupName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			GroupDesc: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateStandbyWorkspacesResult {
		FailedStandbyRequests?: Array<FailedCreateStandbyWorkspacesRequest>;
		PendingStandbyRequests?: Array<PendingCreateStandbyWorkspacesRequest>;
	}
	export interface CreateStandbyWorkspacesResultFormProperties {
	}
	export function CreateCreateStandbyWorkspacesResultFormGroup() {
		return new FormGroup<CreateStandbyWorkspacesResultFormProperties>({
		});

	}


	/** Describes the standby WorkSpace that could not be created. */
	export interface FailedCreateStandbyWorkspacesRequest {
		StandbyWorkspaceRequest?: StandbyWorkspace;
		ErrorCode?: string;
		ErrorMessage?: string;
	}

	/** Describes the standby WorkSpace that could not be created. */
	export interface FailedCreateStandbyWorkspacesRequestFormProperties {
		ErrorCode: FormControl<string | null | undefined>,
		ErrorMessage: FormControl<string | null | undefined>,
	}
	export function CreateFailedCreateStandbyWorkspacesRequestFormGroup() {
		return new FormGroup<FailedCreateStandbyWorkspacesRequestFormProperties>({
			ErrorCode: new FormControl<string | null | undefined>(undefined),
			ErrorMessage: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Describes a standby WorkSpace. */
	export interface StandbyWorkspace {

		/** Required */
		PrimaryWorkspaceId: string;
		VolumeEncryptionKey?: string;

		/** Required */
		DirectoryId: string;
		Tags?: Array<Tag>;
	}

	/** Describes a standby WorkSpace. */
	export interface StandbyWorkspaceFormProperties {

		/** Required */
		PrimaryWorkspaceId: FormControl<string | null | undefined>,
		VolumeEncryptionKey: FormControl<string | null | undefined>,

		/** Required */
		DirectoryId: FormControl<string | null | undefined>,
	}
	export function CreateStandbyWorkspaceFormGroup() {
		return new FormGroup<StandbyWorkspaceFormProperties>({
			PrimaryWorkspaceId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			VolumeEncryptionKey: new FormControl<string | null | undefined>(undefined),
			DirectoryId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Information about the standby WorkSpace. */
	export interface PendingCreateStandbyWorkspacesRequest {
		UserName?: string;
		DirectoryId?: string;
		State?: WorkspaceState;
		WorkspaceId?: string;
	}

	/** Information about the standby WorkSpace. */
	export interface PendingCreateStandbyWorkspacesRequestFormProperties {
		UserName: FormControl<string | null | undefined>,
		DirectoryId: FormControl<string | null | undefined>,
		State: FormControl<WorkspaceState | null | undefined>,
		WorkspaceId: FormControl<string | null | undefined>,
	}
	export function CreatePendingCreateStandbyWorkspacesRequestFormGroup() {
		return new FormGroup<PendingCreateStandbyWorkspacesRequestFormProperties>({
			UserName: new FormControl<string | null | undefined>(undefined),
			DirectoryId: new FormControl<string | null | undefined>(undefined),
			State: new FormControl<WorkspaceState | null | undefined>(undefined),
			WorkspaceId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum WorkspaceState { PENDING = 'PENDING', AVAILABLE = 'AVAILABLE', IMPAIRED = 'IMPAIRED', UNHEALTHY = 'UNHEALTHY', REBOOTING = 'REBOOTING', STARTING = 'STARTING', REBUILDING = 'REBUILDING', RESTORING = 'RESTORING', MAINTENANCE = 'MAINTENANCE', ADMIN_MAINTENANCE = 'ADMIN_MAINTENANCE', TERMINATING = 'TERMINATING', TERMINATED = 'TERMINATED', SUSPENDED = 'SUSPENDED', UPDATING = 'UPDATING', STOPPING = 'STOPPING', STOPPED = 'STOPPED', ERROR = 'ERROR' }

	export interface CreateStandbyWorkspacesRequest {

		/** Required */
		PrimaryRegion: string;

		/** Required */
		StandbyWorkspaces: Array<StandbyWorkspace>;
	}
	export interface CreateStandbyWorkspacesRequestFormProperties {

		/** Required */
		PrimaryRegion: FormControl<string | null | undefined>,
	}
	export function CreateCreateStandbyWorkspacesRequestFormGroup() {
		return new FormGroup<CreateStandbyWorkspacesRequestFormProperties>({
			PrimaryRegion: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateTagsResult {
	}
	export interface CreateTagsResultFormProperties {
	}
	export function CreateCreateTagsResultFormGroup() {
		return new FormGroup<CreateTagsResultFormProperties>({
		});

	}

	export interface CreateTagsRequest {

		/** Required */
		ResourceId: string;

		/** Required */
		Tags: Array<Tag>;
	}
	export interface CreateTagsRequestFormProperties {

		/** Required */
		ResourceId: FormControl<string | null | undefined>,
	}
	export function CreateCreateTagsRequestFormGroup() {
		return new FormGroup<CreateTagsRequestFormProperties>({
			ResourceId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateUpdatedWorkspaceImageResult {
		ImageId?: string;
	}
	export interface CreateUpdatedWorkspaceImageResultFormProperties {
		ImageId: FormControl<string | null | undefined>,
	}
	export function CreateCreateUpdatedWorkspaceImageResultFormGroup() {
		return new FormGroup<CreateUpdatedWorkspaceImageResultFormProperties>({
			ImageId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateUpdatedWorkspaceImageRequest {

		/** Required */
		Name: string;

		/** Required */
		Description: string;

		/** Required */
		SourceImageId: string;
		Tags?: Array<Tag>;
	}
	export interface CreateUpdatedWorkspaceImageRequestFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,

		/** Required */
		Description: FormControl<string | null | undefined>,

		/** Required */
		SourceImageId: FormControl<string | null | undefined>,
	}
	export function CreateCreateUpdatedWorkspaceImageRequestFormGroup() {
		return new FormGroup<CreateUpdatedWorkspaceImageRequestFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Description: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			SourceImageId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateWorkspaceBundleResult {

		/** Describes a WorkSpace bundle. */
		WorkspaceBundle?: WorkspaceBundle;
	}
	export interface CreateWorkspaceBundleResultFormProperties {
	}
	export function CreateCreateWorkspaceBundleResultFormGroup() {
		return new FormGroup<CreateWorkspaceBundleResultFormProperties>({
		});

	}


	/** Describes a WorkSpace bundle. */
	export interface WorkspaceBundle {
		BundleId?: string;
		Name?: string;
		Owner?: string;
		Description?: string;
		ImageId?: string;
		RootStorage?: RootStorage;
		UserStorage?: UserStorage;
		ComputeType?: ComputeType;
		LastUpdatedTime?: Date;
		CreationTime?: Date;
		State?: WorkspaceBundleState;
		BundleType?: BundleType;
	}

	/** Describes a WorkSpace bundle. */
	export interface WorkspaceBundleFormProperties {
		BundleId: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
		Owner: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
		ImageId: FormControl<string | null | undefined>,
		LastUpdatedTime: FormControl<Date | null | undefined>,
		CreationTime: FormControl<Date | null | undefined>,
		State: FormControl<WorkspaceBundleState | null | undefined>,
		BundleType: FormControl<BundleType | null | undefined>,
	}
	export function CreateWorkspaceBundleFormGroup() {
		return new FormGroup<WorkspaceBundleFormProperties>({
			BundleId: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			Owner: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			ImageId: new FormControl<string | null | undefined>(undefined),
			LastUpdatedTime: new FormControl<Date | null | undefined>(undefined),
			CreationTime: new FormControl<Date | null | undefined>(undefined),
			State: new FormControl<WorkspaceBundleState | null | undefined>(undefined),
			BundleType: new FormControl<BundleType | null | undefined>(undefined),
		});

	}


	/** Describes the root volume for a WorkSpace bundle. */
	export interface RootStorage {
		Capacity?: string;
	}

	/** Describes the root volume for a WorkSpace bundle. */
	export interface RootStorageFormProperties {
		Capacity: FormControl<string | null | undefined>,
	}
	export function CreateRootStorageFormGroup() {
		return new FormGroup<RootStorageFormProperties>({
			Capacity: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Describes the user volume for a WorkSpace bundle. */
	export interface UserStorage {
		Capacity?: string;
	}

	/** Describes the user volume for a WorkSpace bundle. */
	export interface UserStorageFormProperties {
		Capacity: FormControl<string | null | undefined>,
	}
	export function CreateUserStorageFormGroup() {
		return new FormGroup<UserStorageFormProperties>({
			Capacity: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Describes the compute type of the bundle. */
	export interface ComputeType {
		Name?: Compute;
	}

	/** Describes the compute type of the bundle. */
	export interface ComputeTypeFormProperties {
		Name: FormControl<Compute | null | undefined>,
	}
	export function CreateComputeTypeFormGroup() {
		return new FormGroup<ComputeTypeFormProperties>({
			Name: new FormControl<Compute | null | undefined>(undefined),
		});

	}

	export enum Compute { VALUE = 'VALUE', STANDARD = 'STANDARD', PERFORMANCE = 'PERFORMANCE', POWER = 'POWER', GRAPHICS = 'GRAPHICS', POWERPRO = 'POWERPRO', GRAPHICSPRO = 'GRAPHICSPRO', GRAPHICS_G4DN = 'GRAPHICS_G4DN', GRAPHICSPRO_G4DN = 'GRAPHICSPRO_G4DN' }

	export enum WorkspaceBundleState { AVAILABLE = 'AVAILABLE', PENDING = 'PENDING', ERROR = 'ERROR' }

	export enum BundleType { REGULAR = 'REGULAR', STANDBY = 'STANDBY' }

	export interface CreateWorkspaceBundleRequest {

		/** Required */
		BundleName: string;

		/** Required */
		BundleDescription: string;

		/** Required */
		ImageId: string;

		/**
		 * Describes the compute type of the bundle.
		 * Required
		 */
		ComputeType: ComputeType;

		/**
		 * Describes the user volume for a WorkSpace bundle.
		 * Required
		 */
		UserStorage: UserStorage;

		/** Describes the root volume for a WorkSpace bundle. */
		RootStorage?: RootStorage;
		Tags?: Array<Tag>;
	}
	export interface CreateWorkspaceBundleRequestFormProperties {

		/** Required */
		BundleName: FormControl<string | null | undefined>,

		/** Required */
		BundleDescription: FormControl<string | null | undefined>,

		/** Required */
		ImageId: FormControl<string | null | undefined>,
	}
	export function CreateCreateWorkspaceBundleRequestFormGroup() {
		return new FormGroup<CreateWorkspaceBundleRequestFormProperties>({
			BundleName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			BundleDescription: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ImageId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateWorkspaceImageResult {
		ImageId?: string;
		Name?: string;
		Description?: string;
		OperatingSystem?: OperatingSystem;
		State?: WorkspaceBundleState;
		RequiredTenancy?: WorkspaceImageRequiredTenancy;
		Created?: Date;
		OwnerAccountId?: string;
	}
	export interface CreateWorkspaceImageResultFormProperties {
		ImageId: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
		State: FormControl<WorkspaceBundleState | null | undefined>,
		RequiredTenancy: FormControl<WorkspaceImageRequiredTenancy | null | undefined>,
		Created: FormControl<Date | null | undefined>,
		OwnerAccountId: FormControl<string | null | undefined>,
	}
	export function CreateCreateWorkspaceImageResultFormGroup() {
		return new FormGroup<CreateWorkspaceImageResultFormProperties>({
			ImageId: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			State: new FormControl<WorkspaceBundleState | null | undefined>(undefined),
			RequiredTenancy: new FormControl<WorkspaceImageRequiredTenancy | null | undefined>(undefined),
			Created: new FormControl<Date | null | undefined>(undefined),
			OwnerAccountId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The operating system that the image is running. */
	export interface OperatingSystem {
		Type?: OperatingSystemType;
	}

	/** The operating system that the image is running. */
	export interface OperatingSystemFormProperties {
		Type: FormControl<OperatingSystemType | null | undefined>,
	}
	export function CreateOperatingSystemFormGroup() {
		return new FormGroup<OperatingSystemFormProperties>({
			Type: new FormControl<OperatingSystemType | null | undefined>(undefined),
		});

	}

	export enum OperatingSystemType { WINDOWS = 'WINDOWS', LINUX = 'LINUX' }

	export enum WorkspaceImageRequiredTenancy { DEFAULT = 'DEFAULT', DEDICATED = 'DEDICATED' }

	export interface CreateWorkspaceImageRequest {

		/** Required */
		Name: string;

		/** Required */
		Description: string;

		/** Required */
		WorkspaceId: string;
		Tags?: Array<Tag>;
	}
	export interface CreateWorkspaceImageRequestFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,

		/** Required */
		Description: FormControl<string | null | undefined>,

		/** Required */
		WorkspaceId: FormControl<string | null | undefined>,
	}
	export function CreateCreateWorkspaceImageRequestFormGroup() {
		return new FormGroup<CreateWorkspaceImageRequestFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Description: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			WorkspaceId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateWorkspacesResult {
		FailedRequests?: Array<FailedCreateWorkspaceRequest>;
		PendingRequests?: Array<Workspace>;
	}
	export interface CreateWorkspacesResultFormProperties {
	}
	export function CreateCreateWorkspacesResultFormGroup() {
		return new FormGroup<CreateWorkspacesResultFormProperties>({
		});

	}


	/** Describes a WorkSpace that cannot be created. */
	export interface FailedCreateWorkspaceRequest {
		WorkspaceRequest?: WorkspaceRequest;
		ErrorCode?: string;
		ErrorMessage?: string;
	}

	/** Describes a WorkSpace that cannot be created. */
	export interface FailedCreateWorkspaceRequestFormProperties {
		ErrorCode: FormControl<string | null | undefined>,
		ErrorMessage: FormControl<string | null | undefined>,
	}
	export function CreateFailedCreateWorkspaceRequestFormGroup() {
		return new FormGroup<FailedCreateWorkspaceRequestFormProperties>({
			ErrorCode: new FormControl<string | null | undefined>(undefined),
			ErrorMessage: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Describes the information used to create a WorkSpace. */
	export interface WorkspaceRequest {

		/** Required */
		DirectoryId: string;

		/** Required */
		UserName: string;

		/** Required */
		BundleId: string;
		VolumeEncryptionKey?: string;
		UserVolumeEncryptionEnabled?: boolean | null;
		RootVolumeEncryptionEnabled?: boolean | null;
		WorkspaceProperties?: WorkspaceProperties;
		Tags?: Array<Tag>;
	}

	/** Describes the information used to create a WorkSpace. */
	export interface WorkspaceRequestFormProperties {

		/** Required */
		DirectoryId: FormControl<string | null | undefined>,

		/** Required */
		UserName: FormControl<string | null | undefined>,

		/** Required */
		BundleId: FormControl<string | null | undefined>,
		VolumeEncryptionKey: FormControl<string | null | undefined>,
		UserVolumeEncryptionEnabled: FormControl<boolean | null | undefined>,
		RootVolumeEncryptionEnabled: FormControl<boolean | null | undefined>,
	}
	export function CreateWorkspaceRequestFormGroup() {
		return new FormGroup<WorkspaceRequestFormProperties>({
			DirectoryId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			UserName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			BundleId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			VolumeEncryptionKey: new FormControl<string | null | undefined>(undefined),
			UserVolumeEncryptionEnabled: new FormControl<boolean | null | undefined>(undefined),
			RootVolumeEncryptionEnabled: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Describes a WorkSpace. */
	export interface WorkspaceProperties {
		RunningMode?: RunningMode;
		RunningModeAutoStopTimeoutInMinutes?: number | null;
		RootVolumeSizeGib?: number | null;
		UserVolumeSizeGib?: number | null;
		ComputeTypeName?: Compute;
		Protocols?: Array<Protocol>;
	}

	/** Describes a WorkSpace. */
	export interface WorkspacePropertiesFormProperties {
		RunningMode: FormControl<RunningMode | null | undefined>,
		RunningModeAutoStopTimeoutInMinutes: FormControl<number | null | undefined>,
		RootVolumeSizeGib: FormControl<number | null | undefined>,
		UserVolumeSizeGib: FormControl<number | null | undefined>,
		ComputeTypeName: FormControl<Compute | null | undefined>,
	}
	export function CreateWorkspacePropertiesFormGroup() {
		return new FormGroup<WorkspacePropertiesFormProperties>({
			RunningMode: new FormControl<RunningMode | null | undefined>(undefined),
			RunningModeAutoStopTimeoutInMinutes: new FormControl<number | null | undefined>(undefined),
			RootVolumeSizeGib: new FormControl<number | null | undefined>(undefined),
			UserVolumeSizeGib: new FormControl<number | null | undefined>(undefined),
			ComputeTypeName: new FormControl<Compute | null | undefined>(undefined),
		});

	}

	export enum RunningMode { AUTO_STOP = 'AUTO_STOP', ALWAYS_ON = 'ALWAYS_ON', MANUAL = 'MANUAL' }

	export enum Protocol { PCOIP = 'PCOIP', WSP = 'WSP' }


	/** Describes a WorkSpace. */
	export interface Workspace {
		WorkspaceId?: string;
		DirectoryId?: string;
		UserName?: string;
		IpAddress?: string;
		State?: WorkspaceState;
		BundleId?: string;
		SubnetId?: string;
		ErrorMessage?: string;
		ErrorCode?: string;
		ComputerName?: string;
		VolumeEncryptionKey?: string;
		UserVolumeEncryptionEnabled?: boolean | null;
		RootVolumeEncryptionEnabled?: boolean | null;
		WorkspaceProperties?: WorkspaceProperties;
		ModificationStates?: Array<ModificationState>;
		RelatedWorkspaces?: Array<RelatedWorkspaceProperties>;
	}

	/** Describes a WorkSpace. */
	export interface WorkspaceFormProperties {
		WorkspaceId: FormControl<string | null | undefined>,
		DirectoryId: FormControl<string | null | undefined>,
		UserName: FormControl<string | null | undefined>,
		IpAddress: FormControl<string | null | undefined>,
		State: FormControl<WorkspaceState | null | undefined>,
		BundleId: FormControl<string | null | undefined>,
		SubnetId: FormControl<string | null | undefined>,
		ErrorMessage: FormControl<string | null | undefined>,
		ErrorCode: FormControl<string | null | undefined>,
		ComputerName: FormControl<string | null | undefined>,
		VolumeEncryptionKey: FormControl<string | null | undefined>,
		UserVolumeEncryptionEnabled: FormControl<boolean | null | undefined>,
		RootVolumeEncryptionEnabled: FormControl<boolean | null | undefined>,
	}
	export function CreateWorkspaceFormGroup() {
		return new FormGroup<WorkspaceFormProperties>({
			WorkspaceId: new FormControl<string | null | undefined>(undefined),
			DirectoryId: new FormControl<string | null | undefined>(undefined),
			UserName: new FormControl<string | null | undefined>(undefined),
			IpAddress: new FormControl<string | null | undefined>(undefined),
			State: new FormControl<WorkspaceState | null | undefined>(undefined),
			BundleId: new FormControl<string | null | undefined>(undefined),
			SubnetId: new FormControl<string | null | undefined>(undefined),
			ErrorMessage: new FormControl<string | null | undefined>(undefined),
			ErrorCode: new FormControl<string | null | undefined>(undefined),
			ComputerName: new FormControl<string | null | undefined>(undefined),
			VolumeEncryptionKey: new FormControl<string | null | undefined>(undefined),
			UserVolumeEncryptionEnabled: new FormControl<boolean | null | undefined>(undefined),
			RootVolumeEncryptionEnabled: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Describes a WorkSpace modification. */
	export interface ModificationState {
		Resource?: ModificationResourceEnum;
		State?: ModificationStateEnum;
	}

	/** Describes a WorkSpace modification. */
	export interface ModificationStateFormProperties {
		Resource: FormControl<ModificationResourceEnum | null | undefined>,
		State: FormControl<ModificationStateEnum | null | undefined>,
	}
	export function CreateModificationStateFormGroup() {
		return new FormGroup<ModificationStateFormProperties>({
			Resource: new FormControl<ModificationResourceEnum | null | undefined>(undefined),
			State: new FormControl<ModificationStateEnum | null | undefined>(undefined),
		});

	}

	export enum ModificationResourceEnum { ROOT_VOLUME = 'ROOT_VOLUME', USER_VOLUME = 'USER_VOLUME', COMPUTE_TYPE = 'COMPUTE_TYPE' }

	export enum ModificationStateEnum { UPDATE_INITIATED = 'UPDATE_INITIATED', UPDATE_IN_PROGRESS = 'UPDATE_IN_PROGRESS' }


	/** Describes the related WorkSpace. The related WorkSpace could be a standby WorkSpace or primary WorkSpace related to the specified WorkSpace. */
	export interface RelatedWorkspaceProperties {
		WorkspaceId?: string;
		Region?: string;
		State?: WorkspaceState;
		Type?: StandbyWorkspaceRelationshipType;
	}

	/** Describes the related WorkSpace. The related WorkSpace could be a standby WorkSpace or primary WorkSpace related to the specified WorkSpace. */
	export interface RelatedWorkspacePropertiesFormProperties {
		WorkspaceId: FormControl<string | null | undefined>,
		Region: FormControl<string | null | undefined>,
		State: FormControl<WorkspaceState | null | undefined>,
		Type: FormControl<StandbyWorkspaceRelationshipType | null | undefined>,
	}
	export function CreateRelatedWorkspacePropertiesFormGroup() {
		return new FormGroup<RelatedWorkspacePropertiesFormProperties>({
			WorkspaceId: new FormControl<string | null | undefined>(undefined),
			Region: new FormControl<string | null | undefined>(undefined),
			State: new FormControl<WorkspaceState | null | undefined>(undefined),
			Type: new FormControl<StandbyWorkspaceRelationshipType | null | undefined>(undefined),
		});

	}

	export enum StandbyWorkspaceRelationshipType { PRIMARY = 'PRIMARY', STANDBY = 'STANDBY' }

	export interface CreateWorkspacesRequest {

		/** Required */
		Workspaces: Array<WorkspaceRequest>;
	}
	export interface CreateWorkspacesRequestFormProperties {
	}
	export function CreateCreateWorkspacesRequestFormGroup() {
		return new FormGroup<CreateWorkspacesRequestFormProperties>({
		});

	}

	export interface DeleteClientBrandingResult {
	}
	export interface DeleteClientBrandingResultFormProperties {
	}
	export function CreateDeleteClientBrandingResultFormGroup() {
		return new FormGroup<DeleteClientBrandingResultFormProperties>({
		});

	}

	export interface DeleteClientBrandingRequest {

		/** Required */
		ResourceId: string;

		/** Required */
		Platforms: Array<ClientDeviceType>;
	}
	export interface DeleteClientBrandingRequestFormProperties {

		/** Required */
		ResourceId: FormControl<string | null | undefined>,
	}
	export function CreateDeleteClientBrandingRequestFormGroup() {
		return new FormGroup<DeleteClientBrandingRequestFormProperties>({
			ResourceId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum ClientDeviceType { DeviceTypeWindows = 'DeviceTypeWindows', DeviceTypeOsx = 'DeviceTypeOsx', DeviceTypeAndroid = 'DeviceTypeAndroid', DeviceTypeIos = 'DeviceTypeIos', DeviceTypeLinux = 'DeviceTypeLinux', DeviceTypeWeb = 'DeviceTypeWeb' }

	export interface DeleteConnectClientAddInResult {
	}
	export interface DeleteConnectClientAddInResultFormProperties {
	}
	export function CreateDeleteConnectClientAddInResultFormGroup() {
		return new FormGroup<DeleteConnectClientAddInResultFormProperties>({
		});

	}

	export interface DeleteConnectClientAddInRequest {

		/** Required */
		AddInId: string;

		/** Required */
		ResourceId: string;
	}
	export interface DeleteConnectClientAddInRequestFormProperties {

		/** Required */
		AddInId: FormControl<string | null | undefined>,

		/** Required */
		ResourceId: FormControl<string | null | undefined>,
	}
	export function CreateDeleteConnectClientAddInRequestFormGroup() {
		return new FormGroup<DeleteConnectClientAddInRequestFormProperties>({
			AddInId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ResourceId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeleteConnectionAliasResult {
	}
	export interface DeleteConnectionAliasResultFormProperties {
	}
	export function CreateDeleteConnectionAliasResultFormGroup() {
		return new FormGroup<DeleteConnectionAliasResultFormProperties>({
		});

	}

	export interface DeleteConnectionAliasRequest {

		/** Required */
		AliasId: string;
	}
	export interface DeleteConnectionAliasRequestFormProperties {

		/** Required */
		AliasId: FormControl<string | null | undefined>,
	}
	export function CreateDeleteConnectionAliasRequestFormGroup() {
		return new FormGroup<DeleteConnectionAliasRequestFormProperties>({
			AliasId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeleteIpGroupResult {
	}
	export interface DeleteIpGroupResultFormProperties {
	}
	export function CreateDeleteIpGroupResultFormGroup() {
		return new FormGroup<DeleteIpGroupResultFormProperties>({
		});

	}

	export interface DeleteIpGroupRequest {

		/** Required */
		GroupId: string;
	}
	export interface DeleteIpGroupRequestFormProperties {

		/** Required */
		GroupId: FormControl<string | null | undefined>,
	}
	export function CreateDeleteIpGroupRequestFormGroup() {
		return new FormGroup<DeleteIpGroupRequestFormProperties>({
			GroupId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeleteTagsResult {
	}
	export interface DeleteTagsResultFormProperties {
	}
	export function CreateDeleteTagsResultFormGroup() {
		return new FormGroup<DeleteTagsResultFormProperties>({
		});

	}

	export interface DeleteTagsRequest {

		/** Required */
		ResourceId: string;

		/** Required */
		TagKeys: Array<string>;
	}
	export interface DeleteTagsRequestFormProperties {

		/** Required */
		ResourceId: FormControl<string | null | undefined>,
	}
	export function CreateDeleteTagsRequestFormGroup() {
		return new FormGroup<DeleteTagsRequestFormProperties>({
			ResourceId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeleteWorkspaceBundleResult {
	}
	export interface DeleteWorkspaceBundleResultFormProperties {
	}
	export function CreateDeleteWorkspaceBundleResultFormGroup() {
		return new FormGroup<DeleteWorkspaceBundleResultFormProperties>({
		});

	}

	export interface DeleteWorkspaceBundleRequest {
		BundleId?: string;
	}
	export interface DeleteWorkspaceBundleRequestFormProperties {
		BundleId: FormControl<string | null | undefined>,
	}
	export function CreateDeleteWorkspaceBundleRequestFormGroup() {
		return new FormGroup<DeleteWorkspaceBundleRequestFormProperties>({
			BundleId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DeleteWorkspaceImageResult {
	}
	export interface DeleteWorkspaceImageResultFormProperties {
	}
	export function CreateDeleteWorkspaceImageResultFormGroup() {
		return new FormGroup<DeleteWorkspaceImageResultFormProperties>({
		});

	}

	export interface DeleteWorkspaceImageRequest {

		/** Required */
		ImageId: string;
	}
	export interface DeleteWorkspaceImageRequestFormProperties {

		/** Required */
		ImageId: FormControl<string | null | undefined>,
	}
	export function CreateDeleteWorkspaceImageRequestFormGroup() {
		return new FormGroup<DeleteWorkspaceImageRequestFormProperties>({
			ImageId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeregisterWorkspaceDirectoryResult {
	}
	export interface DeregisterWorkspaceDirectoryResultFormProperties {
	}
	export function CreateDeregisterWorkspaceDirectoryResultFormGroup() {
		return new FormGroup<DeregisterWorkspaceDirectoryResultFormProperties>({
		});

	}

	export interface DeregisterWorkspaceDirectoryRequest {

		/** Required */
		DirectoryId: string;
	}
	export interface DeregisterWorkspaceDirectoryRequestFormProperties {

		/** Required */
		DirectoryId: FormControl<string | null | undefined>,
	}
	export function CreateDeregisterWorkspaceDirectoryRequestFormGroup() {
		return new FormGroup<DeregisterWorkspaceDirectoryRequestFormProperties>({
			DirectoryId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DescribeAccountResult {
		DedicatedTenancySupport?: DedicatedTenancySupportResultEnum;
		DedicatedTenancyManagementCidrRange?: string;
	}
	export interface DescribeAccountResultFormProperties {
		DedicatedTenancySupport: FormControl<DedicatedTenancySupportResultEnum | null | undefined>,
		DedicatedTenancyManagementCidrRange: FormControl<string | null | undefined>,
	}
	export function CreateDescribeAccountResultFormGroup() {
		return new FormGroup<DescribeAccountResultFormProperties>({
			DedicatedTenancySupport: new FormControl<DedicatedTenancySupportResultEnum | null | undefined>(undefined),
			DedicatedTenancyManagementCidrRange: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum DedicatedTenancySupportResultEnum { ENABLED = 'ENABLED', DISABLED = 'DISABLED' }

	export interface DescribeAccountRequest {
	}
	export interface DescribeAccountRequestFormProperties {
	}
	export function CreateDescribeAccountRequestFormGroup() {
		return new FormGroup<DescribeAccountRequestFormProperties>({
		});

	}

	export interface DescribeAccountModificationsResult {
		AccountModifications?: Array<AccountModification>;
		NextToken?: string;
	}
	export interface DescribeAccountModificationsResultFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeAccountModificationsResultFormGroup() {
		return new FormGroup<DescribeAccountModificationsResultFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Describes a modification to the configuration of Bring Your Own License (BYOL) for the specified account.  */
	export interface AccountModification {
		ModificationState?: DedicatedTenancyModificationStateEnum;
		DedicatedTenancySupport?: DedicatedTenancySupportResultEnum;
		DedicatedTenancyManagementCidrRange?: string;
		StartTime?: Date;
		ErrorCode?: string;
		ErrorMessage?: string;
	}

	/** Describes a modification to the configuration of Bring Your Own License (BYOL) for the specified account.  */
	export interface AccountModificationFormProperties {
		ModificationState: FormControl<DedicatedTenancyModificationStateEnum | null | undefined>,
		DedicatedTenancySupport: FormControl<DedicatedTenancySupportResultEnum | null | undefined>,
		DedicatedTenancyManagementCidrRange: FormControl<string | null | undefined>,
		StartTime: FormControl<Date | null | undefined>,
		ErrorCode: FormControl<string | null | undefined>,
		ErrorMessage: FormControl<string | null | undefined>,
	}
	export function CreateAccountModificationFormGroup() {
		return new FormGroup<AccountModificationFormProperties>({
			ModificationState: new FormControl<DedicatedTenancyModificationStateEnum | null | undefined>(undefined),
			DedicatedTenancySupport: new FormControl<DedicatedTenancySupportResultEnum | null | undefined>(undefined),
			DedicatedTenancyManagementCidrRange: new FormControl<string | null | undefined>(undefined),
			StartTime: new FormControl<Date | null | undefined>(undefined),
			ErrorCode: new FormControl<string | null | undefined>(undefined),
			ErrorMessage: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum DedicatedTenancyModificationStateEnum { PENDING = 'PENDING', COMPLETED = 'COMPLETED', FAILED = 'FAILED' }

	export interface DescribeAccountModificationsRequest {
		NextToken?: string;
	}
	export interface DescribeAccountModificationsRequestFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeAccountModificationsRequestFormGroup() {
		return new FormGroup<DescribeAccountModificationsRequestFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeClientBrandingResult {
		DeviceTypeWindows?: DefaultClientBrandingAttributes;
		DeviceTypeOsx?: DefaultClientBrandingAttributes;
		DeviceTypeAndroid?: DefaultClientBrandingAttributes;
		DeviceTypeIos?: IosClientBrandingAttributes;
		DeviceTypeLinux?: DefaultClientBrandingAttributes;
		DeviceTypeWeb?: DefaultClientBrandingAttributes;
	}
	export interface DescribeClientBrandingResultFormProperties {
	}
	export function CreateDescribeClientBrandingResultFormGroup() {
		return new FormGroup<DescribeClientBrandingResultFormProperties>({
		});

	}


	/** <p>Returns default client branding attributes that were imported. These attributes display on the client login screen.</p> <important> <p>Client branding attributes are public facing. Ensure that you don't include sensitive information.</p> </important> */
	export interface DefaultClientBrandingAttributes {
		LogoUrl?: string;
		SupportEmail?: string;
		SupportLink?: string;
		ForgotPasswordLink?: string;
		LoginMessage?: LoginMessage;
	}

	/** <p>Returns default client branding attributes that were imported. These attributes display on the client login screen.</p> <important> <p>Client branding attributes are public facing. Ensure that you don't include sensitive information.</p> </important> */
	export interface DefaultClientBrandingAttributesFormProperties {
		LogoUrl: FormControl<string | null | undefined>,
		SupportEmail: FormControl<string | null | undefined>,
		SupportLink: FormControl<string | null | undefined>,
		ForgotPasswordLink: FormControl<string | null | undefined>,
	}
	export function CreateDefaultClientBrandingAttributesFormGroup() {
		return new FormGroup<DefaultClientBrandingAttributesFormProperties>({
			LogoUrl: new FormControl<string | null | undefined>(undefined),
			SupportEmail: new FormControl<string | null | undefined>(undefined),
			SupportLink: new FormControl<string | null | undefined>(undefined),
			ForgotPasswordLink: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface LoginMessage {
	}
	export interface LoginMessageFormProperties {
	}
	export function CreateLoginMessageFormGroup() {
		return new FormGroup<LoginMessageFormProperties>({
		});

	}


	/** <p>The client branding attributes for iOS device types. These attributes are displayed on the iOS client login screen only.</p> <important> <p>Client branding attributes are public facing. Ensure you do not include sensitive information.</p> </important> */
	export interface IosClientBrandingAttributes {
		LogoUrl?: string;
		Logo2xUrl?: string;
		Logo3xUrl?: string;
		SupportEmail?: string;
		SupportLink?: string;
		ForgotPasswordLink?: string;
		LoginMessage?: LoginMessage;
	}

	/** <p>The client branding attributes for iOS device types. These attributes are displayed on the iOS client login screen only.</p> <important> <p>Client branding attributes are public facing. Ensure you do not include sensitive information.</p> </important> */
	export interface IosClientBrandingAttributesFormProperties {
		LogoUrl: FormControl<string | null | undefined>,
		Logo2xUrl: FormControl<string | null | undefined>,
		Logo3xUrl: FormControl<string | null | undefined>,
		SupportEmail: FormControl<string | null | undefined>,
		SupportLink: FormControl<string | null | undefined>,
		ForgotPasswordLink: FormControl<string | null | undefined>,
	}
	export function CreateIosClientBrandingAttributesFormGroup() {
		return new FormGroup<IosClientBrandingAttributesFormProperties>({
			LogoUrl: new FormControl<string | null | undefined>(undefined),
			Logo2xUrl: new FormControl<string | null | undefined>(undefined),
			Logo3xUrl: new FormControl<string | null | undefined>(undefined),
			SupportEmail: new FormControl<string | null | undefined>(undefined),
			SupportLink: new FormControl<string | null | undefined>(undefined),
			ForgotPasswordLink: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeClientBrandingRequest {

		/** Required */
		ResourceId: string;
	}
	export interface DescribeClientBrandingRequestFormProperties {

		/** Required */
		ResourceId: FormControl<string | null | undefined>,
	}
	export function CreateDescribeClientBrandingRequestFormGroup() {
		return new FormGroup<DescribeClientBrandingRequestFormProperties>({
			ResourceId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DescribeClientPropertiesResult {
		ClientPropertiesList?: Array<ClientPropertiesResult>;
	}
	export interface DescribeClientPropertiesResultFormProperties {
	}
	export function CreateDescribeClientPropertiesResultFormGroup() {
		return new FormGroup<DescribeClientPropertiesResultFormProperties>({
		});

	}


	/** Information about the Amazon WorkSpaces client. */
	export interface ClientPropertiesResult {
		ResourceId?: string;
		ClientProperties?: ClientProperties;
	}

	/** Information about the Amazon WorkSpaces client. */
	export interface ClientPropertiesResultFormProperties {
		ResourceId: FormControl<string | null | undefined>,
	}
	export function CreateClientPropertiesResultFormGroup() {
		return new FormGroup<ClientPropertiesResultFormProperties>({
			ResourceId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Describes an Amazon WorkSpaces client. */
	export interface ClientProperties {
		ReconnectEnabled?: DedicatedTenancySupportResultEnum;
		LogUploadEnabled?: DedicatedTenancySupportResultEnum;
	}

	/** Describes an Amazon WorkSpaces client. */
	export interface ClientPropertiesFormProperties {
		ReconnectEnabled: FormControl<DedicatedTenancySupportResultEnum | null | undefined>,
		LogUploadEnabled: FormControl<DedicatedTenancySupportResultEnum | null | undefined>,
	}
	export function CreateClientPropertiesFormGroup() {
		return new FormGroup<ClientPropertiesFormProperties>({
			ReconnectEnabled: new FormControl<DedicatedTenancySupportResultEnum | null | undefined>(undefined),
			LogUploadEnabled: new FormControl<DedicatedTenancySupportResultEnum | null | undefined>(undefined),
		});

	}

	export interface DescribeClientPropertiesRequest {

		/** Required */
		ResourceIds: Array<string>;
	}
	export interface DescribeClientPropertiesRequestFormProperties {
	}
	export function CreateDescribeClientPropertiesRequestFormGroup() {
		return new FormGroup<DescribeClientPropertiesRequestFormProperties>({
		});

	}

	export interface DescribeConnectClientAddInsResult {
		AddIns?: Array<ConnectClientAddIn>;
		NextToken?: string;
	}
	export interface DescribeConnectClientAddInsResultFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeConnectClientAddInsResultFormGroup() {
		return new FormGroup<DescribeConnectClientAddInsResultFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Describes an Amazon Connect client add-in. */
	export interface ConnectClientAddIn {
		AddInId?: string;
		ResourceId?: string;
		Name?: string;
		URL?: string;
	}

	/** Describes an Amazon Connect client add-in. */
	export interface ConnectClientAddInFormProperties {
		AddInId: FormControl<string | null | undefined>,
		ResourceId: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
		URL: FormControl<string | null | undefined>,
	}
	export function CreateConnectClientAddInFormGroup() {
		return new FormGroup<ConnectClientAddInFormProperties>({
			AddInId: new FormControl<string | null | undefined>(undefined),
			ResourceId: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			URL: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeConnectClientAddInsRequest {

		/** Required */
		ResourceId: string;
		NextToken?: string;
		MaxResults?: number | null;
	}
	export interface DescribeConnectClientAddInsRequestFormProperties {

		/** Required */
		ResourceId: FormControl<string | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateDescribeConnectClientAddInsRequestFormGroup() {
		return new FormGroup<DescribeConnectClientAddInsRequestFormProperties>({
			ResourceId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			NextToken: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface DescribeConnectionAliasPermissionsResult {
		AliasId?: string;
		ConnectionAliasPermissions?: Array<ConnectionAliasPermission>;
		NextToken?: string;
	}
	export interface DescribeConnectionAliasPermissionsResultFormProperties {
		AliasId: FormControl<string | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeConnectionAliasPermissionsResultFormGroup() {
		return new FormGroup<DescribeConnectionAliasPermissionsResultFormProperties>({
			AliasId: new FormControl<string | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Describes the permissions for a connection alias. Connection aliases are used for cross-Region redirection. For more information, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/cross-region-redirection.html"> Cross-Region Redirection for Amazon WorkSpaces</a>. */
	export interface ConnectionAliasPermission {

		/** Required */
		SharedAccountId: string;

		/** Required */
		AllowAssociation: boolean;
	}

	/** Describes the permissions for a connection alias. Connection aliases are used for cross-Region redirection. For more information, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/cross-region-redirection.html"> Cross-Region Redirection for Amazon WorkSpaces</a>. */
	export interface ConnectionAliasPermissionFormProperties {

		/** Required */
		SharedAccountId: FormControl<string | null | undefined>,

		/** Required */
		AllowAssociation: FormControl<boolean | null | undefined>,
	}
	export function CreateConnectionAliasPermissionFormGroup() {
		return new FormGroup<ConnectionAliasPermissionFormProperties>({
			SharedAccountId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			AllowAssociation: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DescribeConnectionAliasPermissionsRequest {

		/** Required */
		AliasId: string;
		NextToken?: string;
		MaxResults?: number | null;
	}
	export interface DescribeConnectionAliasPermissionsRequestFormProperties {

		/** Required */
		AliasId: FormControl<string | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateDescribeConnectionAliasPermissionsRequestFormGroup() {
		return new FormGroup<DescribeConnectionAliasPermissionsRequestFormProperties>({
			AliasId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			NextToken: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface DescribeConnectionAliasesResult {
		ConnectionAliases?: Array<ConnectionAlias>;
		NextToken?: string;
	}
	export interface DescribeConnectionAliasesResultFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeConnectionAliasesResultFormGroup() {
		return new FormGroup<DescribeConnectionAliasesResultFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Describes a connection alias. Connection aliases are used for cross-Region redirection. For more information, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/cross-region-redirection.html"> Cross-Region Redirection for Amazon WorkSpaces</a>. */
	export interface ConnectionAlias {
		ConnectionString?: string;
		AliasId?: string;
		State?: ConnectionAliasState;
		OwnerAccountId?: string;
		Associations?: Array<ConnectionAliasAssociation>;
	}

	/** Describes a connection alias. Connection aliases are used for cross-Region redirection. For more information, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/cross-region-redirection.html"> Cross-Region Redirection for Amazon WorkSpaces</a>. */
	export interface ConnectionAliasFormProperties {
		ConnectionString: FormControl<string | null | undefined>,
		AliasId: FormControl<string | null | undefined>,
		State: FormControl<ConnectionAliasState | null | undefined>,
		OwnerAccountId: FormControl<string | null | undefined>,
	}
	export function CreateConnectionAliasFormGroup() {
		return new FormGroup<ConnectionAliasFormProperties>({
			ConnectionString: new FormControl<string | null | undefined>(undefined),
			AliasId: new FormControl<string | null | undefined>(undefined),
			State: new FormControl<ConnectionAliasState | null | undefined>(undefined),
			OwnerAccountId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ConnectionAliasState { CREATING = 'CREATING', CREATED = 'CREATED', DELETING = 'DELETING' }


	/** Describes a connection alias association that is used for cross-Region redirection. For more information, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/cross-region-redirection.html"> Cross-Region Redirection for Amazon WorkSpaces</a>. */
	export interface ConnectionAliasAssociation {
		AssociationStatus?: AssociationStatus;
		AssociatedAccountId?: string;
		ResourceId?: string;
		ConnectionIdentifier?: string;
	}

	/** Describes a connection alias association that is used for cross-Region redirection. For more information, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/cross-region-redirection.html"> Cross-Region Redirection for Amazon WorkSpaces</a>. */
	export interface ConnectionAliasAssociationFormProperties {
		AssociationStatus: FormControl<AssociationStatus | null | undefined>,
		AssociatedAccountId: FormControl<string | null | undefined>,
		ResourceId: FormControl<string | null | undefined>,
		ConnectionIdentifier: FormControl<string | null | undefined>,
	}
	export function CreateConnectionAliasAssociationFormGroup() {
		return new FormGroup<ConnectionAliasAssociationFormProperties>({
			AssociationStatus: new FormControl<AssociationStatus | null | undefined>(undefined),
			AssociatedAccountId: new FormControl<string | null | undefined>(undefined),
			ResourceId: new FormControl<string | null | undefined>(undefined),
			ConnectionIdentifier: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum AssociationStatus { NOT_ASSOCIATED = 'NOT_ASSOCIATED', ASSOCIATED_WITH_OWNER_ACCOUNT = 'ASSOCIATED_WITH_OWNER_ACCOUNT', ASSOCIATED_WITH_SHARED_ACCOUNT = 'ASSOCIATED_WITH_SHARED_ACCOUNT', PENDING_ASSOCIATION = 'PENDING_ASSOCIATION', PENDING_DISASSOCIATION = 'PENDING_DISASSOCIATION' }

	export interface DescribeConnectionAliasesRequest {
		AliasIds?: Array<string>;
		ResourceId?: string;
		Limit?: number | null;
		NextToken?: string;
	}
	export interface DescribeConnectionAliasesRequestFormProperties {
		ResourceId: FormControl<string | null | undefined>,
		Limit: FormControl<number | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeConnectionAliasesRequestFormGroup() {
		return new FormGroup<DescribeConnectionAliasesRequestFormProperties>({
			ResourceId: new FormControl<string | null | undefined>(undefined),
			Limit: new FormControl<number | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeIpGroupsResult {
		Result?: Array<WorkspacesIpGroup>;
		NextToken?: string;
	}
	export interface DescribeIpGroupsResultFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeIpGroupsResultFormGroup() {
		return new FormGroup<DescribeIpGroupsResultFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Describes an IP access control group. */
	export interface WorkspacesIpGroup {
		groupId?: string;
		groupName?: string;
		groupDesc?: string;
		userRules?: Array<IpRuleItem>;
	}

	/** Describes an IP access control group. */
	export interface WorkspacesIpGroupFormProperties {
		groupId: FormControl<string | null | undefined>,
		groupName: FormControl<string | null | undefined>,
		groupDesc: FormControl<string | null | undefined>,
	}
	export function CreateWorkspacesIpGroupFormGroup() {
		return new FormGroup<WorkspacesIpGroupFormProperties>({
			groupId: new FormControl<string | null | undefined>(undefined),
			groupName: new FormControl<string | null | undefined>(undefined),
			groupDesc: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeIpGroupsRequest {
		GroupIds?: Array<string>;
		NextToken?: string;
		MaxResults?: number | null;
	}
	export interface DescribeIpGroupsRequestFormProperties {
		NextToken: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateDescribeIpGroupsRequestFormGroup() {
		return new FormGroup<DescribeIpGroupsRequestFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface DescribeTagsResult {
		TagList?: Array<Tag>;
	}
	export interface DescribeTagsResultFormProperties {
	}
	export function CreateDescribeTagsResultFormGroup() {
		return new FormGroup<DescribeTagsResultFormProperties>({
		});

	}

	export interface DescribeTagsRequest {

		/** Required */
		ResourceId: string;
	}
	export interface DescribeTagsRequestFormProperties {

		/** Required */
		ResourceId: FormControl<string | null | undefined>,
	}
	export function CreateDescribeTagsRequestFormGroup() {
		return new FormGroup<DescribeTagsRequestFormProperties>({
			ResourceId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DescribeWorkspaceBundlesResult {
		Bundles?: Array<WorkspaceBundle>;
		NextToken?: string;
	}
	export interface DescribeWorkspaceBundlesResultFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeWorkspaceBundlesResultFormGroup() {
		return new FormGroup<DescribeWorkspaceBundlesResultFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeWorkspaceBundlesRequest {
		BundleIds?: Array<string>;
		Owner?: string;
		NextToken?: string;
	}
	export interface DescribeWorkspaceBundlesRequestFormProperties {
		Owner: FormControl<string | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeWorkspaceBundlesRequestFormGroup() {
		return new FormGroup<DescribeWorkspaceBundlesRequestFormProperties>({
			Owner: new FormControl<string | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeWorkspaceDirectoriesResult {
		Directories?: Array<WorkspaceDirectory>;
		NextToken?: string;
	}
	export interface DescribeWorkspaceDirectoriesResultFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeWorkspaceDirectoriesResultFormGroup() {
		return new FormGroup<DescribeWorkspaceDirectoriesResultFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Describes a directory that is used with Amazon WorkSpaces. */
	export interface WorkspaceDirectory {
		DirectoryId?: string;
		Alias?: string;
		DirectoryName?: string;
		RegistrationCode?: string;
		SubnetIds?: Array<string>;
		DnsIpAddresses?: Array<string>;
		CustomerUserName?: string;
		IamRoleId?: string;
		DirectoryType?: WorkspaceDirectoryType;
		WorkspaceSecurityGroupId?: string;
		State?: WorkspaceDirectoryState;
		WorkspaceCreationProperties?: DefaultWorkspaceCreationProperties;
		ipGroupIds?: Array<string>;
		WorkspaceAccessProperties?: WorkspaceAccessProperties;
		Tenancy?: Tenancy;
		SelfservicePermissions?: SelfservicePermissions;
		SamlProperties?: SamlProperties;
		CertificateBasedAuthProperties?: CertificateBasedAuthProperties;
	}

	/** Describes a directory that is used with Amazon WorkSpaces. */
	export interface WorkspaceDirectoryFormProperties {
		DirectoryId: FormControl<string | null | undefined>,
		Alias: FormControl<string | null | undefined>,
		DirectoryName: FormControl<string | null | undefined>,
		RegistrationCode: FormControl<string | null | undefined>,
		CustomerUserName: FormControl<string | null | undefined>,
		IamRoleId: FormControl<string | null | undefined>,
		DirectoryType: FormControl<WorkspaceDirectoryType | null | undefined>,
		WorkspaceSecurityGroupId: FormControl<string | null | undefined>,
		State: FormControl<WorkspaceDirectoryState | null | undefined>,
		Tenancy: FormControl<Tenancy | null | undefined>,
	}
	export function CreateWorkspaceDirectoryFormGroup() {
		return new FormGroup<WorkspaceDirectoryFormProperties>({
			DirectoryId: new FormControl<string | null | undefined>(undefined),
			Alias: new FormControl<string | null | undefined>(undefined),
			DirectoryName: new FormControl<string | null | undefined>(undefined),
			RegistrationCode: new FormControl<string | null | undefined>(undefined),
			CustomerUserName: new FormControl<string | null | undefined>(undefined),
			IamRoleId: new FormControl<string | null | undefined>(undefined),
			DirectoryType: new FormControl<WorkspaceDirectoryType | null | undefined>(undefined),
			WorkspaceSecurityGroupId: new FormControl<string | null | undefined>(undefined),
			State: new FormControl<WorkspaceDirectoryState | null | undefined>(undefined),
			Tenancy: new FormControl<Tenancy | null | undefined>(undefined),
		});

	}

	export enum WorkspaceDirectoryType { SIMPLE_AD = 'SIMPLE_AD', AD_CONNECTOR = 'AD_CONNECTOR' }

	export enum WorkspaceDirectoryState { REGISTERING = 'REGISTERING', REGISTERED = 'REGISTERED', DEREGISTERING = 'DEREGISTERING', DEREGISTERED = 'DEREGISTERED', ERROR = 'ERROR' }


	/** Describes the default values that are used to create WorkSpaces. For more information, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/update-directory-details.html">Update Directory Details for Your WorkSpaces</a>. */
	export interface DefaultWorkspaceCreationProperties {
		EnableWorkDocs?: boolean | null;
		EnableInternetAccess?: boolean | null;
		DefaultOu?: string;
		CustomSecurityGroupId?: string;
		UserEnabledAsLocalAdministrator?: boolean | null;
		EnableMaintenanceMode?: boolean | null;
	}

	/** Describes the default values that are used to create WorkSpaces. For more information, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/update-directory-details.html">Update Directory Details for Your WorkSpaces</a>. */
	export interface DefaultWorkspaceCreationPropertiesFormProperties {
		EnableWorkDocs: FormControl<boolean | null | undefined>,
		EnableInternetAccess: FormControl<boolean | null | undefined>,
		DefaultOu: FormControl<string | null | undefined>,
		CustomSecurityGroupId: FormControl<string | null | undefined>,
		UserEnabledAsLocalAdministrator: FormControl<boolean | null | undefined>,
		EnableMaintenanceMode: FormControl<boolean | null | undefined>,
	}
	export function CreateDefaultWorkspaceCreationPropertiesFormGroup() {
		return new FormGroup<DefaultWorkspaceCreationPropertiesFormProperties>({
			EnableWorkDocs: new FormControl<boolean | null | undefined>(undefined),
			EnableInternetAccess: new FormControl<boolean | null | undefined>(undefined),
			DefaultOu: new FormControl<string | null | undefined>(undefined),
			CustomSecurityGroupId: new FormControl<string | null | undefined>(undefined),
			UserEnabledAsLocalAdministrator: new FormControl<boolean | null | undefined>(undefined),
			EnableMaintenanceMode: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** The device types and operating systems that can be used to access a WorkSpace. For more information, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/workspaces-network-requirements.html">Amazon WorkSpaces Client Network Requirements</a>. */
	export interface WorkspaceAccessProperties {
		DeviceTypeWindows?: AccessPropertyValue;
		DeviceTypeOsx?: AccessPropertyValue;
		DeviceTypeWeb?: AccessPropertyValue;
		DeviceTypeIos?: AccessPropertyValue;
		DeviceTypeAndroid?: AccessPropertyValue;
		DeviceTypeChromeOs?: AccessPropertyValue;
		DeviceTypeZeroClient?: AccessPropertyValue;
		DeviceTypeLinux?: AccessPropertyValue;
	}

	/** The device types and operating systems that can be used to access a WorkSpace. For more information, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/workspaces-network-requirements.html">Amazon WorkSpaces Client Network Requirements</a>. */
	export interface WorkspaceAccessPropertiesFormProperties {
		DeviceTypeWindows: FormControl<AccessPropertyValue | null | undefined>,
		DeviceTypeOsx: FormControl<AccessPropertyValue | null | undefined>,
		DeviceTypeWeb: FormControl<AccessPropertyValue | null | undefined>,
		DeviceTypeIos: FormControl<AccessPropertyValue | null | undefined>,
		DeviceTypeAndroid: FormControl<AccessPropertyValue | null | undefined>,
		DeviceTypeChromeOs: FormControl<AccessPropertyValue | null | undefined>,
		DeviceTypeZeroClient: FormControl<AccessPropertyValue | null | undefined>,
		DeviceTypeLinux: FormControl<AccessPropertyValue | null | undefined>,
	}
	export function CreateWorkspaceAccessPropertiesFormGroup() {
		return new FormGroup<WorkspaceAccessPropertiesFormProperties>({
			DeviceTypeWindows: new FormControl<AccessPropertyValue | null | undefined>(undefined),
			DeviceTypeOsx: new FormControl<AccessPropertyValue | null | undefined>(undefined),
			DeviceTypeWeb: new FormControl<AccessPropertyValue | null | undefined>(undefined),
			DeviceTypeIos: new FormControl<AccessPropertyValue | null | undefined>(undefined),
			DeviceTypeAndroid: new FormControl<AccessPropertyValue | null | undefined>(undefined),
			DeviceTypeChromeOs: new FormControl<AccessPropertyValue | null | undefined>(undefined),
			DeviceTypeZeroClient: new FormControl<AccessPropertyValue | null | undefined>(undefined),
			DeviceTypeLinux: new FormControl<AccessPropertyValue | null | undefined>(undefined),
		});

	}

	export enum AccessPropertyValue { ALLOW = 'ALLOW', DENY = 'DENY' }

	export enum Tenancy { DEDICATED = 'DEDICATED', SHARED = 'SHARED' }


	/** Describes the self-service permissions for a directory. For more information, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/enable-user-self-service-workspace-management.html">Enable Self-Service WorkSpace Management Capabilities for Your Users</a>. */
	export interface SelfservicePermissions {
		RestartWorkspace?: DedicatedTenancySupportResultEnum;
		IncreaseVolumeSize?: DedicatedTenancySupportResultEnum;
		ChangeComputeType?: DedicatedTenancySupportResultEnum;
		SwitchRunningMode?: DedicatedTenancySupportResultEnum;
		RebuildWorkspace?: DedicatedTenancySupportResultEnum;
	}

	/** Describes the self-service permissions for a directory. For more information, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/enable-user-self-service-workspace-management.html">Enable Self-Service WorkSpace Management Capabilities for Your Users</a>. */
	export interface SelfservicePermissionsFormProperties {
		RestartWorkspace: FormControl<DedicatedTenancySupportResultEnum | null | undefined>,
		IncreaseVolumeSize: FormControl<DedicatedTenancySupportResultEnum | null | undefined>,
		ChangeComputeType: FormControl<DedicatedTenancySupportResultEnum | null | undefined>,
		SwitchRunningMode: FormControl<DedicatedTenancySupportResultEnum | null | undefined>,
		RebuildWorkspace: FormControl<DedicatedTenancySupportResultEnum | null | undefined>,
	}
	export function CreateSelfservicePermissionsFormGroup() {
		return new FormGroup<SelfservicePermissionsFormProperties>({
			RestartWorkspace: new FormControl<DedicatedTenancySupportResultEnum | null | undefined>(undefined),
			IncreaseVolumeSize: new FormControl<DedicatedTenancySupportResultEnum | null | undefined>(undefined),
			ChangeComputeType: new FormControl<DedicatedTenancySupportResultEnum | null | undefined>(undefined),
			SwitchRunningMode: new FormControl<DedicatedTenancySupportResultEnum | null | undefined>(undefined),
			RebuildWorkspace: new FormControl<DedicatedTenancySupportResultEnum | null | undefined>(undefined),
		});

	}


	/** Describes the enablement status, user access URL, and relay state parameter name that are used for configuring federation with an SAML 2.0 identity provider. */
	export interface SamlProperties {
		Status?: SamlStatusEnum;
		UserAccessUrl?: string;
		RelayStateParameterName?: string;
	}

	/** Describes the enablement status, user access URL, and relay state parameter name that are used for configuring federation with an SAML 2.0 identity provider. */
	export interface SamlPropertiesFormProperties {
		Status: FormControl<SamlStatusEnum | null | undefined>,
		UserAccessUrl: FormControl<string | null | undefined>,
		RelayStateParameterName: FormControl<string | null | undefined>,
	}
	export function CreateSamlPropertiesFormGroup() {
		return new FormGroup<SamlPropertiesFormProperties>({
			Status: new FormControl<SamlStatusEnum | null | undefined>(undefined),
			UserAccessUrl: new FormControl<string | null | undefined>(undefined),
			RelayStateParameterName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum SamlStatusEnum { DISABLED = 'DISABLED', ENABLED = 'ENABLED', ENABLED_WITH_DIRECTORY_LOGIN_FALLBACK = 'ENABLED_WITH_DIRECTORY_LOGIN_FALLBACK' }


	/** Describes the properties of the certificate-based authentication you want to use with your WorkSpaces. */
	export interface CertificateBasedAuthProperties {
		Status?: CertificateBasedAuthStatusEnum;
		CertificateAuthorityArn?: string;
	}

	/** Describes the properties of the certificate-based authentication you want to use with your WorkSpaces. */
	export interface CertificateBasedAuthPropertiesFormProperties {
		Status: FormControl<CertificateBasedAuthStatusEnum | null | undefined>,
		CertificateAuthorityArn: FormControl<string | null | undefined>,
	}
	export function CreateCertificateBasedAuthPropertiesFormGroup() {
		return new FormGroup<CertificateBasedAuthPropertiesFormProperties>({
			Status: new FormControl<CertificateBasedAuthStatusEnum | null | undefined>(undefined),
			CertificateAuthorityArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum CertificateBasedAuthStatusEnum { DISABLED = 'DISABLED', ENABLED = 'ENABLED' }

	export interface DescribeWorkspaceDirectoriesRequest {
		DirectoryIds?: Array<string>;
		Limit?: number | null;
		NextToken?: string;
	}
	export interface DescribeWorkspaceDirectoriesRequestFormProperties {
		Limit: FormControl<number | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeWorkspaceDirectoriesRequestFormGroup() {
		return new FormGroup<DescribeWorkspaceDirectoriesRequestFormProperties>({
			Limit: new FormControl<number | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeWorkspaceImagePermissionsResult {
		ImageId?: string;
		ImagePermissions?: Array<ImagePermission>;
		NextToken?: string;
	}
	export interface DescribeWorkspaceImagePermissionsResultFormProperties {
		ImageId: FormControl<string | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeWorkspaceImagePermissionsResultFormGroup() {
		return new FormGroup<DescribeWorkspaceImagePermissionsResultFormProperties>({
			ImageId: new FormControl<string | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Describes the Amazon Web Services accounts that have been granted permission to use a shared image. For more information about sharing images, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/share-custom-image.html"> Share or Unshare a Custom WorkSpaces Image</a>. */
	export interface ImagePermission {
		SharedAccountId?: string;
	}

	/** Describes the Amazon Web Services accounts that have been granted permission to use a shared image. For more information about sharing images, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/share-custom-image.html"> Share or Unshare a Custom WorkSpaces Image</a>. */
	export interface ImagePermissionFormProperties {
		SharedAccountId: FormControl<string | null | undefined>,
	}
	export function CreateImagePermissionFormGroup() {
		return new FormGroup<ImagePermissionFormProperties>({
			SharedAccountId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeWorkspaceImagePermissionsRequest {

		/** Required */
		ImageId: string;
		NextToken?: string;
		MaxResults?: number | null;
	}
	export interface DescribeWorkspaceImagePermissionsRequestFormProperties {

		/** Required */
		ImageId: FormControl<string | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateDescribeWorkspaceImagePermissionsRequestFormGroup() {
		return new FormGroup<DescribeWorkspaceImagePermissionsRequestFormProperties>({
			ImageId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			NextToken: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface DescribeWorkspaceImagesResult {
		Images?: Array<WorkspaceImage>;
		NextToken?: string;
	}
	export interface DescribeWorkspaceImagesResultFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeWorkspaceImagesResultFormGroup() {
		return new FormGroup<DescribeWorkspaceImagesResultFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Describes a WorkSpace image. */
	export interface WorkspaceImage {
		ImageId?: string;
		Name?: string;
		Description?: string;
		OperatingSystem?: OperatingSystem;
		State?: WorkspaceBundleState;
		RequiredTenancy?: WorkspaceImageRequiredTenancy;
		ErrorCode?: string;
		ErrorMessage?: string;
		Created?: Date;
		OwnerAccountId?: string;
		Updates?: UpdateResult;
	}

	/** Describes a WorkSpace image. */
	export interface WorkspaceImageFormProperties {
		ImageId: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
		State: FormControl<WorkspaceBundleState | null | undefined>,
		RequiredTenancy: FormControl<WorkspaceImageRequiredTenancy | null | undefined>,
		ErrorCode: FormControl<string | null | undefined>,
		ErrorMessage: FormControl<string | null | undefined>,
		Created: FormControl<Date | null | undefined>,
		OwnerAccountId: FormControl<string | null | undefined>,
	}
	export function CreateWorkspaceImageFormGroup() {
		return new FormGroup<WorkspaceImageFormProperties>({
			ImageId: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			State: new FormControl<WorkspaceBundleState | null | undefined>(undefined),
			RequiredTenancy: new FormControl<WorkspaceImageRequiredTenancy | null | undefined>(undefined),
			ErrorCode: new FormControl<string | null | undefined>(undefined),
			ErrorMessage: new FormControl<string | null | undefined>(undefined),
			Created: new FormControl<Date | null | undefined>(undefined),
			OwnerAccountId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** <p>Describes whether a WorkSpace image needs to be updated with the latest drivers and other components required by Amazon WorkSpaces.</p> <note> <p>Only Windows 10 WorkSpace images can be programmatically updated at this time.</p> </note> */
	export interface UpdateResult {
		UpdateAvailable?: boolean | null;
		Description?: string;
	}

	/** <p>Describes whether a WorkSpace image needs to be updated with the latest drivers and other components required by Amazon WorkSpaces.</p> <note> <p>Only Windows 10 WorkSpace images can be programmatically updated at this time.</p> </note> */
	export interface UpdateResultFormProperties {
		UpdateAvailable: FormControl<boolean | null | undefined>,
		Description: FormControl<string | null | undefined>,
	}
	export function CreateUpdateResultFormGroup() {
		return new FormGroup<UpdateResultFormProperties>({
			UpdateAvailable: new FormControl<boolean | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeWorkspaceImagesRequest {
		ImageIds?: Array<string>;
		ImageType?: ImageType;
		NextToken?: string;
		MaxResults?: number | null;
	}
	export interface DescribeWorkspaceImagesRequestFormProperties {
		ImageType: FormControl<ImageType | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateDescribeWorkspaceImagesRequestFormGroup() {
		return new FormGroup<DescribeWorkspaceImagesRequestFormProperties>({
			ImageType: new FormControl<ImageType | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum ImageType { OWNED = 'OWNED', SHARED = 'SHARED' }

	export interface DescribeWorkspaceSnapshotsResult {
		RebuildSnapshots?: Array<Snapshot>;
		RestoreSnapshots?: Array<Snapshot>;
	}
	export interface DescribeWorkspaceSnapshotsResultFormProperties {
	}
	export function CreateDescribeWorkspaceSnapshotsResultFormGroup() {
		return new FormGroup<DescribeWorkspaceSnapshotsResultFormProperties>({
		});

	}


	/** Describes a snapshot. */
	export interface Snapshot {
		SnapshotTime?: Date;
	}

	/** Describes a snapshot. */
	export interface SnapshotFormProperties {
		SnapshotTime: FormControl<Date | null | undefined>,
	}
	export function CreateSnapshotFormGroup() {
		return new FormGroup<SnapshotFormProperties>({
			SnapshotTime: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface DescribeWorkspaceSnapshotsRequest {

		/** Required */
		WorkspaceId: string;
	}
	export interface DescribeWorkspaceSnapshotsRequestFormProperties {

		/** Required */
		WorkspaceId: FormControl<string | null | undefined>,
	}
	export function CreateDescribeWorkspaceSnapshotsRequestFormGroup() {
		return new FormGroup<DescribeWorkspaceSnapshotsRequestFormProperties>({
			WorkspaceId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DescribeWorkspacesResult {
		Workspaces?: Array<Workspace>;
		NextToken?: string;
	}
	export interface DescribeWorkspacesResultFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeWorkspacesResultFormGroup() {
		return new FormGroup<DescribeWorkspacesResultFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeWorkspacesRequest {
		WorkspaceIds?: Array<string>;
		DirectoryId?: string;
		UserName?: string;
		BundleId?: string;
		Limit?: number | null;
		NextToken?: string;
	}
	export interface DescribeWorkspacesRequestFormProperties {
		DirectoryId: FormControl<string | null | undefined>,
		UserName: FormControl<string | null | undefined>,
		BundleId: FormControl<string | null | undefined>,
		Limit: FormControl<number | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeWorkspacesRequestFormGroup() {
		return new FormGroup<DescribeWorkspacesRequestFormProperties>({
			DirectoryId: new FormControl<string | null | undefined>(undefined),
			UserName: new FormControl<string | null | undefined>(undefined),
			BundleId: new FormControl<string | null | undefined>(undefined),
			Limit: new FormControl<number | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeWorkspacesConnectionStatusResult {
		WorkspacesConnectionStatus?: Array<WorkspaceConnectionStatus>;
		NextToken?: string;
	}
	export interface DescribeWorkspacesConnectionStatusResultFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeWorkspacesConnectionStatusResultFormGroup() {
		return new FormGroup<DescribeWorkspacesConnectionStatusResultFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Describes the connection status of a WorkSpace. */
	export interface WorkspaceConnectionStatus {
		WorkspaceId?: string;
		ConnectionState?: ConnectionState;
		ConnectionStateCheckTimestamp?: Date;
		LastKnownUserConnectionTimestamp?: Date;
	}

	/** Describes the connection status of a WorkSpace. */
	export interface WorkspaceConnectionStatusFormProperties {
		WorkspaceId: FormControl<string | null | undefined>,
		ConnectionState: FormControl<ConnectionState | null | undefined>,
		ConnectionStateCheckTimestamp: FormControl<Date | null | undefined>,
		LastKnownUserConnectionTimestamp: FormControl<Date | null | undefined>,
	}
	export function CreateWorkspaceConnectionStatusFormGroup() {
		return new FormGroup<WorkspaceConnectionStatusFormProperties>({
			WorkspaceId: new FormControl<string | null | undefined>(undefined),
			ConnectionState: new FormControl<ConnectionState | null | undefined>(undefined),
			ConnectionStateCheckTimestamp: new FormControl<Date | null | undefined>(undefined),
			LastKnownUserConnectionTimestamp: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export enum ConnectionState { CONNECTED = 'CONNECTED', DISCONNECTED = 'DISCONNECTED', UNKNOWN = 'UNKNOWN' }

	export interface DescribeWorkspacesConnectionStatusRequest {
		WorkspaceIds?: Array<string>;
		NextToken?: string;
	}
	export interface DescribeWorkspacesConnectionStatusRequestFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeWorkspacesConnectionStatusRequestFormGroup() {
		return new FormGroup<DescribeWorkspacesConnectionStatusRequestFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DisassociateConnectionAliasResult {
	}
	export interface DisassociateConnectionAliasResultFormProperties {
	}
	export function CreateDisassociateConnectionAliasResultFormGroup() {
		return new FormGroup<DisassociateConnectionAliasResultFormProperties>({
		});

	}

	export interface DisassociateConnectionAliasRequest {

		/** Required */
		AliasId: string;
	}
	export interface DisassociateConnectionAliasRequestFormProperties {

		/** Required */
		AliasId: FormControl<string | null | undefined>,
	}
	export function CreateDisassociateConnectionAliasRequestFormGroup() {
		return new FormGroup<DisassociateConnectionAliasRequestFormProperties>({
			AliasId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DisassociateIpGroupsResult {
	}
	export interface DisassociateIpGroupsResultFormProperties {
	}
	export function CreateDisassociateIpGroupsResultFormGroup() {
		return new FormGroup<DisassociateIpGroupsResultFormProperties>({
		});

	}

	export interface DisassociateIpGroupsRequest {

		/** Required */
		DirectoryId: string;

		/** Required */
		GroupIds: Array<string>;
	}
	export interface DisassociateIpGroupsRequestFormProperties {

		/** Required */
		DirectoryId: FormControl<string | null | undefined>,
	}
	export function CreateDisassociateIpGroupsRequestFormGroup() {
		return new FormGroup<DisassociateIpGroupsRequestFormProperties>({
			DirectoryId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ImportClientBrandingResult {
		DeviceTypeWindows?: DefaultClientBrandingAttributes;
		DeviceTypeOsx?: DefaultClientBrandingAttributes;
		DeviceTypeAndroid?: DefaultClientBrandingAttributes;
		DeviceTypeIos?: IosClientBrandingAttributes;
		DeviceTypeLinux?: DefaultClientBrandingAttributes;
		DeviceTypeWeb?: DefaultClientBrandingAttributes;
	}
	export interface ImportClientBrandingResultFormProperties {
	}
	export function CreateImportClientBrandingResultFormGroup() {
		return new FormGroup<ImportClientBrandingResultFormProperties>({
		});

	}

	export interface ImportClientBrandingRequest {

		/** Required */
		ResourceId: string;
		DeviceTypeWindows?: DefaultImportClientBrandingAttributes;
		DeviceTypeOsx?: DefaultImportClientBrandingAttributes;
		DeviceTypeAndroid?: DefaultImportClientBrandingAttributes;
		DeviceTypeIos?: IosImportClientBrandingAttributes;
		DeviceTypeLinux?: DefaultImportClientBrandingAttributes;
		DeviceTypeWeb?: DefaultImportClientBrandingAttributes;
	}
	export interface ImportClientBrandingRequestFormProperties {

		/** Required */
		ResourceId: FormControl<string | null | undefined>,
	}
	export function CreateImportClientBrandingRequestFormGroup() {
		return new FormGroup<ImportClientBrandingRequestFormProperties>({
			ResourceId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** <p>The default client branding attributes to be imported. These attributes display on the client login screen.</p> <important> <p>Client branding attributes are public facing. Ensure that you do not include sensitive information.</p> </important> */
	export interface DefaultImportClientBrandingAttributes {
		Logo?: string;
		SupportEmail?: string;
		SupportLink?: string;
		ForgotPasswordLink?: string;
		LoginMessage?: LoginMessage;
	}

	/** <p>The default client branding attributes to be imported. These attributes display on the client login screen.</p> <important> <p>Client branding attributes are public facing. Ensure that you do not include sensitive information.</p> </important> */
	export interface DefaultImportClientBrandingAttributesFormProperties {
		Logo: FormControl<string | null | undefined>,
		SupportEmail: FormControl<string | null | undefined>,
		SupportLink: FormControl<string | null | undefined>,
		ForgotPasswordLink: FormControl<string | null | undefined>,
	}
	export function CreateDefaultImportClientBrandingAttributesFormGroup() {
		return new FormGroup<DefaultImportClientBrandingAttributesFormProperties>({
			Logo: new FormControl<string | null | undefined>(undefined),
			SupportEmail: new FormControl<string | null | undefined>(undefined),
			SupportLink: new FormControl<string | null | undefined>(undefined),
			ForgotPasswordLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** <p>The client branding attributes to import for iOS device types. These attributes are displayed on the iOS client login screen.</p> <important> <p>Client branding attributes are public facing. Ensure you do not include sensitive information.</p> </important> */
	export interface IosImportClientBrandingAttributes {
		Logo?: string;
		Logo2x?: string;
		Logo3x?: string;
		SupportEmail?: string;
		SupportLink?: string;
		ForgotPasswordLink?: string;
		LoginMessage?: LoginMessage;
	}

	/** <p>The client branding attributes to import for iOS device types. These attributes are displayed on the iOS client login screen.</p> <important> <p>Client branding attributes are public facing. Ensure you do not include sensitive information.</p> </important> */
	export interface IosImportClientBrandingAttributesFormProperties {
		Logo: FormControl<string | null | undefined>,
		Logo2x: FormControl<string | null | undefined>,
		Logo3x: FormControl<string | null | undefined>,
		SupportEmail: FormControl<string | null | undefined>,
		SupportLink: FormControl<string | null | undefined>,
		ForgotPasswordLink: FormControl<string | null | undefined>,
	}
	export function CreateIosImportClientBrandingAttributesFormGroup() {
		return new FormGroup<IosImportClientBrandingAttributesFormProperties>({
			Logo: new FormControl<string | null | undefined>(undefined),
			Logo2x: new FormControl<string | null | undefined>(undefined),
			Logo3x: new FormControl<string | null | undefined>(undefined),
			SupportEmail: new FormControl<string | null | undefined>(undefined),
			SupportLink: new FormControl<string | null | undefined>(undefined),
			ForgotPasswordLink: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ImportWorkspaceImageResult {
		ImageId?: string;
	}
	export interface ImportWorkspaceImageResultFormProperties {
		ImageId: FormControl<string | null | undefined>,
	}
	export function CreateImportWorkspaceImageResultFormGroup() {
		return new FormGroup<ImportWorkspaceImageResultFormProperties>({
			ImageId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ImportWorkspaceImageRequest {

		/** Required */
		Ec2ImageId: string;

		/** Required */
		IngestionProcess: WorkspaceImageIngestionProcess;

		/** Required */
		ImageName: string;

		/** Required */
		ImageDescription: string;
		Tags?: Array<Tag>;
		Applications?: Array<Application>;
	}
	export interface ImportWorkspaceImageRequestFormProperties {

		/** Required */
		Ec2ImageId: FormControl<string | null | undefined>,

		/** Required */
		IngestionProcess: FormControl<WorkspaceImageIngestionProcess | null | undefined>,

		/** Required */
		ImageName: FormControl<string | null | undefined>,

		/** Required */
		ImageDescription: FormControl<string | null | undefined>,
	}
	export function CreateImportWorkspaceImageRequestFormGroup() {
		return new FormGroup<ImportWorkspaceImageRequestFormProperties>({
			Ec2ImageId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			IngestionProcess: new FormControl<WorkspaceImageIngestionProcess | null | undefined>(undefined, [Validators.required]),
			ImageName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ImageDescription: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum WorkspaceImageIngestionProcess { BYOL_REGULAR = 'BYOL_REGULAR', BYOL_GRAPHICS = 'BYOL_GRAPHICS', BYOL_GRAPHICSPRO = 'BYOL_GRAPHICSPRO', BYOL_GRAPHICS_G4DN = 'BYOL_GRAPHICS_G4DN', BYOL_REGULAR_WSP = 'BYOL_REGULAR_WSP', BYOL_REGULAR_BYOP = 'BYOL_REGULAR_BYOP', BYOL_GRAPHICS_G4DN_BYOP = 'BYOL_GRAPHICS_G4DN_BYOP' }

	export enum Application { Microsoft_Office_2016 = 'Microsoft_Office_2016', Microsoft_Office_2019 = 'Microsoft_Office_2019' }

	export interface ListAvailableManagementCidrRangesResult {
		ManagementCidrRanges?: Array<string>;
		NextToken?: string;
	}
	export interface ListAvailableManagementCidrRangesResultFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListAvailableManagementCidrRangesResultFormGroup() {
		return new FormGroup<ListAvailableManagementCidrRangesResultFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListAvailableManagementCidrRangesRequest {

		/** Required */
		ManagementCidrRangeConstraint: string;
		MaxResults?: number | null;
		NextToken?: string;
	}
	export interface ListAvailableManagementCidrRangesRequestFormProperties {

		/** Required */
		ManagementCidrRangeConstraint: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListAvailableManagementCidrRangesRequestFormGroup() {
		return new FormGroup<ListAvailableManagementCidrRangesRequestFormProperties>({
			ManagementCidrRangeConstraint: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			MaxResults: new FormControl<number | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface MigrateWorkspaceResult {
		SourceWorkspaceId?: string;
		TargetWorkspaceId?: string;
	}
	export interface MigrateWorkspaceResultFormProperties {
		SourceWorkspaceId: FormControl<string | null | undefined>,
		TargetWorkspaceId: FormControl<string | null | undefined>,
	}
	export function CreateMigrateWorkspaceResultFormGroup() {
		return new FormGroup<MigrateWorkspaceResultFormProperties>({
			SourceWorkspaceId: new FormControl<string | null | undefined>(undefined),
			TargetWorkspaceId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface MigrateWorkspaceRequest {

		/** Required */
		SourceWorkspaceId: string;

		/** Required */
		BundleId: string;
	}
	export interface MigrateWorkspaceRequestFormProperties {

		/** Required */
		SourceWorkspaceId: FormControl<string | null | undefined>,

		/** Required */
		BundleId: FormControl<string | null | undefined>,
	}
	export function CreateMigrateWorkspaceRequestFormGroup() {
		return new FormGroup<MigrateWorkspaceRequestFormProperties>({
			SourceWorkspaceId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			BundleId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface OperationInProgressException {
	}
	export interface OperationInProgressExceptionFormProperties {
	}
	export function CreateOperationInProgressExceptionFormGroup() {
		return new FormGroup<OperationInProgressExceptionFormProperties>({
		});

	}

	export interface ModifyAccountResult {
	}
	export interface ModifyAccountResultFormProperties {
	}
	export function CreateModifyAccountResultFormGroup() {
		return new FormGroup<ModifyAccountResultFormProperties>({
		});

	}

	export interface ModifyAccountRequest {
		DedicatedTenancySupport?: DedicatedTenancySupportEnum;
		DedicatedTenancyManagementCidrRange?: string;
	}
	export interface ModifyAccountRequestFormProperties {
		DedicatedTenancySupport: FormControl<DedicatedTenancySupportEnum | null | undefined>,
		DedicatedTenancyManagementCidrRange: FormControl<string | null | undefined>,
	}
	export function CreateModifyAccountRequestFormGroup() {
		return new FormGroup<ModifyAccountRequestFormProperties>({
			DedicatedTenancySupport: new FormControl<DedicatedTenancySupportEnum | null | undefined>(undefined),
			DedicatedTenancyManagementCidrRange: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum DedicatedTenancySupportEnum { ENABLED = 'ENABLED' }

	export interface ModifyCertificateBasedAuthPropertiesResult {
	}
	export interface ModifyCertificateBasedAuthPropertiesResultFormProperties {
	}
	export function CreateModifyCertificateBasedAuthPropertiesResultFormGroup() {
		return new FormGroup<ModifyCertificateBasedAuthPropertiesResultFormProperties>({
		});

	}

	export interface ModifyCertificateBasedAuthPropertiesRequest {

		/** Required */
		ResourceId: string;
		CertificateBasedAuthProperties?: CertificateBasedAuthProperties;
		PropertiesToDelete?: Array<DeletableCertificateBasedAuthProperty>;
	}
	export interface ModifyCertificateBasedAuthPropertiesRequestFormProperties {

		/** Required */
		ResourceId: FormControl<string | null | undefined>,
	}
	export function CreateModifyCertificateBasedAuthPropertiesRequestFormGroup() {
		return new FormGroup<ModifyCertificateBasedAuthPropertiesRequestFormProperties>({
			ResourceId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum DeletableCertificateBasedAuthProperty { CERTIFICATE_BASED_AUTH_PROPERTIES_CERTIFICATE_AUTHORITY_ARN = 'CERTIFICATE_BASED_AUTH_PROPERTIES_CERTIFICATE_AUTHORITY_ARN' }

	export interface ModifyClientPropertiesResult {
	}
	export interface ModifyClientPropertiesResultFormProperties {
	}
	export function CreateModifyClientPropertiesResultFormGroup() {
		return new FormGroup<ModifyClientPropertiesResultFormProperties>({
		});

	}

	export interface ModifyClientPropertiesRequest {

		/** Required */
		ResourceId: string;

		/** Required */
		ClientProperties: ClientProperties;
	}
	export interface ModifyClientPropertiesRequestFormProperties {

		/** Required */
		ResourceId: FormControl<string | null | undefined>,
	}
	export function CreateModifyClientPropertiesRequestFormGroup() {
		return new FormGroup<ModifyClientPropertiesRequestFormProperties>({
			ResourceId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ModifySamlPropertiesResult {
	}
	export interface ModifySamlPropertiesResultFormProperties {
	}
	export function CreateModifySamlPropertiesResultFormGroup() {
		return new FormGroup<ModifySamlPropertiesResultFormProperties>({
		});

	}

	export interface ModifySamlPropertiesRequest {

		/** Required */
		ResourceId: string;
		SamlProperties?: SamlProperties;
		PropertiesToDelete?: Array<DeletableSamlProperty>;
	}
	export interface ModifySamlPropertiesRequestFormProperties {

		/** Required */
		ResourceId: FormControl<string | null | undefined>,
	}
	export function CreateModifySamlPropertiesRequestFormGroup() {
		return new FormGroup<ModifySamlPropertiesRequestFormProperties>({
			ResourceId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum DeletableSamlProperty { SAML_PROPERTIES_USER_ACCESS_URL = 'SAML_PROPERTIES_USER_ACCESS_URL', SAML_PROPERTIES_RELAY_STATE_PARAMETER_NAME = 'SAML_PROPERTIES_RELAY_STATE_PARAMETER_NAME' }

	export interface ModifySelfservicePermissionsResult {
	}
	export interface ModifySelfservicePermissionsResultFormProperties {
	}
	export function CreateModifySelfservicePermissionsResultFormGroup() {
		return new FormGroup<ModifySelfservicePermissionsResultFormProperties>({
		});

	}

	export interface ModifySelfservicePermissionsRequest {

		/** Required */
		ResourceId: string;

		/** Required */
		SelfservicePermissions: SelfservicePermissions;
	}
	export interface ModifySelfservicePermissionsRequestFormProperties {

		/** Required */
		ResourceId: FormControl<string | null | undefined>,
	}
	export function CreateModifySelfservicePermissionsRequestFormGroup() {
		return new FormGroup<ModifySelfservicePermissionsRequestFormProperties>({
			ResourceId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ModifyWorkspaceAccessPropertiesResult {
	}
	export interface ModifyWorkspaceAccessPropertiesResultFormProperties {
	}
	export function CreateModifyWorkspaceAccessPropertiesResultFormGroup() {
		return new FormGroup<ModifyWorkspaceAccessPropertiesResultFormProperties>({
		});

	}

	export interface ModifyWorkspaceAccessPropertiesRequest {

		/** Required */
		ResourceId: string;

		/** Required */
		WorkspaceAccessProperties: WorkspaceAccessProperties;
	}
	export interface ModifyWorkspaceAccessPropertiesRequestFormProperties {

		/** Required */
		ResourceId: FormControl<string | null | undefined>,
	}
	export function CreateModifyWorkspaceAccessPropertiesRequestFormGroup() {
		return new FormGroup<ModifyWorkspaceAccessPropertiesRequestFormProperties>({
			ResourceId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ModifyWorkspaceCreationPropertiesResult {
	}
	export interface ModifyWorkspaceCreationPropertiesResultFormProperties {
	}
	export function CreateModifyWorkspaceCreationPropertiesResultFormGroup() {
		return new FormGroup<ModifyWorkspaceCreationPropertiesResultFormProperties>({
		});

	}

	export interface ModifyWorkspaceCreationPropertiesRequest {

		/** Required */
		ResourceId: string;

		/** Required */
		WorkspaceCreationProperties: WorkspaceCreationProperties;
	}
	export interface ModifyWorkspaceCreationPropertiesRequestFormProperties {

		/** Required */
		ResourceId: FormControl<string | null | undefined>,
	}
	export function CreateModifyWorkspaceCreationPropertiesRequestFormGroup() {
		return new FormGroup<ModifyWorkspaceCreationPropertiesRequestFormProperties>({
			ResourceId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Describes the default properties that are used for creating WorkSpaces. For more information, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/update-directory-details.html">Update Directory Details for Your WorkSpaces</a>.  */
	export interface WorkspaceCreationProperties {
		EnableWorkDocs?: boolean | null;
		EnableInternetAccess?: boolean | null;
		DefaultOu?: string;
		CustomSecurityGroupId?: string;
		UserEnabledAsLocalAdministrator?: boolean | null;
		EnableMaintenanceMode?: boolean | null;
	}

	/** Describes the default properties that are used for creating WorkSpaces. For more information, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/update-directory-details.html">Update Directory Details for Your WorkSpaces</a>.  */
	export interface WorkspaceCreationPropertiesFormProperties {
		EnableWorkDocs: FormControl<boolean | null | undefined>,
		EnableInternetAccess: FormControl<boolean | null | undefined>,
		DefaultOu: FormControl<string | null | undefined>,
		CustomSecurityGroupId: FormControl<string | null | undefined>,
		UserEnabledAsLocalAdministrator: FormControl<boolean | null | undefined>,
		EnableMaintenanceMode: FormControl<boolean | null | undefined>,
	}
	export function CreateWorkspaceCreationPropertiesFormGroup() {
		return new FormGroup<WorkspaceCreationPropertiesFormProperties>({
			EnableWorkDocs: new FormControl<boolean | null | undefined>(undefined),
			EnableInternetAccess: new FormControl<boolean | null | undefined>(undefined),
			DefaultOu: new FormControl<string | null | undefined>(undefined),
			CustomSecurityGroupId: new FormControl<string | null | undefined>(undefined),
			UserEnabledAsLocalAdministrator: new FormControl<boolean | null | undefined>(undefined),
			EnableMaintenanceMode: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface ModifyWorkspacePropertiesResult {
	}
	export interface ModifyWorkspacePropertiesResultFormProperties {
	}
	export function CreateModifyWorkspacePropertiesResultFormGroup() {
		return new FormGroup<ModifyWorkspacePropertiesResultFormProperties>({
		});

	}

	export interface ModifyWorkspacePropertiesRequest {

		/** Required */
		WorkspaceId: string;

		/** Required */
		WorkspaceProperties: WorkspaceProperties;
	}
	export interface ModifyWorkspacePropertiesRequestFormProperties {

		/** Required */
		WorkspaceId: FormControl<string | null | undefined>,
	}
	export function CreateModifyWorkspacePropertiesRequestFormGroup() {
		return new FormGroup<ModifyWorkspacePropertiesRequestFormProperties>({
			WorkspaceId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UnsupportedWorkspaceConfigurationException {
	}
	export interface UnsupportedWorkspaceConfigurationExceptionFormProperties {
	}
	export function CreateUnsupportedWorkspaceConfigurationExceptionFormGroup() {
		return new FormGroup<UnsupportedWorkspaceConfigurationExceptionFormProperties>({
		});

	}

	export interface ModifyWorkspaceStateResult {
	}
	export interface ModifyWorkspaceStateResultFormProperties {
	}
	export function CreateModifyWorkspaceStateResultFormGroup() {
		return new FormGroup<ModifyWorkspaceStateResultFormProperties>({
		});

	}

	export interface ModifyWorkspaceStateRequest {

		/** Required */
		WorkspaceId: string;

		/** Required */
		WorkspaceState: TargetWorkspaceState;
	}
	export interface ModifyWorkspaceStateRequestFormProperties {

		/** Required */
		WorkspaceId: FormControl<string | null | undefined>,

		/** Required */
		WorkspaceState: FormControl<TargetWorkspaceState | null | undefined>,
	}
	export function CreateModifyWorkspaceStateRequestFormGroup() {
		return new FormGroup<ModifyWorkspaceStateRequestFormProperties>({
			WorkspaceId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			WorkspaceState: new FormControl<TargetWorkspaceState | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum TargetWorkspaceState { AVAILABLE = 'AVAILABLE', ADMIN_MAINTENANCE = 'ADMIN_MAINTENANCE' }

	export interface RebootWorkspacesResult {
		FailedRequests?: Array<FailedWorkspaceChangeRequest>;
	}
	export interface RebootWorkspacesResultFormProperties {
	}
	export function CreateRebootWorkspacesResultFormGroup() {
		return new FormGroup<RebootWorkspacesResultFormProperties>({
		});

	}


	/** Describes a WorkSpace that could not be rebooted. (<a>RebootWorkspaces</a>), rebuilt (<a>RebuildWorkspaces</a>), restored (<a>RestoreWorkspace</a>), terminated (<a>TerminateWorkspaces</a>), started (<a>StartWorkspaces</a>), or stopped (<a>StopWorkspaces</a>). */
	export interface FailedWorkspaceChangeRequest {
		WorkspaceId?: string;
		ErrorCode?: string;
		ErrorMessage?: string;
	}

	/** Describes a WorkSpace that could not be rebooted. (<a>RebootWorkspaces</a>), rebuilt (<a>RebuildWorkspaces</a>), restored (<a>RestoreWorkspace</a>), terminated (<a>TerminateWorkspaces</a>), started (<a>StartWorkspaces</a>), or stopped (<a>StopWorkspaces</a>). */
	export interface FailedWorkspaceChangeRequestFormProperties {
		WorkspaceId: FormControl<string | null | undefined>,
		ErrorCode: FormControl<string | null | undefined>,
		ErrorMessage: FormControl<string | null | undefined>,
	}
	export function CreateFailedWorkspaceChangeRequestFormGroup() {
		return new FormGroup<FailedWorkspaceChangeRequestFormProperties>({
			WorkspaceId: new FormControl<string | null | undefined>(undefined),
			ErrorCode: new FormControl<string | null | undefined>(undefined),
			ErrorMessage: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface RebootWorkspacesRequest {

		/** Required */
		RebootWorkspaceRequests: Array<RebootRequest>;
	}
	export interface RebootWorkspacesRequestFormProperties {
	}
	export function CreateRebootWorkspacesRequestFormGroup() {
		return new FormGroup<RebootWorkspacesRequestFormProperties>({
		});

	}


	/** Describes the information used to reboot a WorkSpace. */
	export interface RebootRequest {

		/** Required */
		WorkspaceId: string;
	}

	/** Describes the information used to reboot a WorkSpace. */
	export interface RebootRequestFormProperties {

		/** Required */
		WorkspaceId: FormControl<string | null | undefined>,
	}
	export function CreateRebootRequestFormGroup() {
		return new FormGroup<RebootRequestFormProperties>({
			WorkspaceId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface RebuildWorkspacesResult {
		FailedRequests?: Array<FailedWorkspaceChangeRequest>;
	}
	export interface RebuildWorkspacesResultFormProperties {
	}
	export function CreateRebuildWorkspacesResultFormGroup() {
		return new FormGroup<RebuildWorkspacesResultFormProperties>({
		});

	}

	export interface RebuildWorkspacesRequest {

		/** Required */
		RebuildWorkspaceRequests: Array<RebuildRequest>;
	}
	export interface RebuildWorkspacesRequestFormProperties {
	}
	export function CreateRebuildWorkspacesRequestFormGroup() {
		return new FormGroup<RebuildWorkspacesRequestFormProperties>({
		});

	}


	/** Describes the information used to rebuild a WorkSpace. */
	export interface RebuildRequest {

		/** Required */
		WorkspaceId: string;
	}

	/** Describes the information used to rebuild a WorkSpace. */
	export interface RebuildRequestFormProperties {

		/** Required */
		WorkspaceId: FormControl<string | null | undefined>,
	}
	export function CreateRebuildRequestFormGroup() {
		return new FormGroup<RebuildRequestFormProperties>({
			WorkspaceId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface RegisterWorkspaceDirectoryResult {
	}
	export interface RegisterWorkspaceDirectoryResultFormProperties {
	}
	export function CreateRegisterWorkspaceDirectoryResultFormGroup() {
		return new FormGroup<RegisterWorkspaceDirectoryResultFormProperties>({
		});

	}

	export interface RegisterWorkspaceDirectoryRequest {

		/** Required */
		DirectoryId: string;
		SubnetIds?: Array<string>;

		/** Required */
		EnableWorkDocs: boolean;
		EnableSelfService?: boolean | null;
		Tenancy?: Tenancy;
		Tags?: Array<Tag>;
	}
	export interface RegisterWorkspaceDirectoryRequestFormProperties {

		/** Required */
		DirectoryId: FormControl<string | null | undefined>,

		/** Required */
		EnableWorkDocs: FormControl<boolean | null | undefined>,
		EnableSelfService: FormControl<boolean | null | undefined>,
		Tenancy: FormControl<Tenancy | null | undefined>,
	}
	export function CreateRegisterWorkspaceDirectoryRequestFormGroup() {
		return new FormGroup<RegisterWorkspaceDirectoryRequestFormProperties>({
			DirectoryId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			EnableWorkDocs: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			EnableSelfService: new FormControl<boolean | null | undefined>(undefined),
			Tenancy: new FormControl<Tenancy | null | undefined>(undefined),
		});

	}

	export interface WorkspacesDefaultRoleNotFoundException {
	}
	export interface WorkspacesDefaultRoleNotFoundExceptionFormProperties {
	}
	export function CreateWorkspacesDefaultRoleNotFoundExceptionFormGroup() {
		return new FormGroup<WorkspacesDefaultRoleNotFoundExceptionFormProperties>({
		});

	}

	export interface UnsupportedNetworkConfigurationException {
	}
	export interface UnsupportedNetworkConfigurationExceptionFormProperties {
	}
	export function CreateUnsupportedNetworkConfigurationExceptionFormGroup() {
		return new FormGroup<UnsupportedNetworkConfigurationExceptionFormProperties>({
		});

	}

	export interface RestoreWorkspaceResult {
	}
	export interface RestoreWorkspaceResultFormProperties {
	}
	export function CreateRestoreWorkspaceResultFormGroup() {
		return new FormGroup<RestoreWorkspaceResultFormProperties>({
		});

	}

	export interface RestoreWorkspaceRequest {

		/** Required */
		WorkspaceId: string;
	}
	export interface RestoreWorkspaceRequestFormProperties {

		/** Required */
		WorkspaceId: FormControl<string | null | undefined>,
	}
	export function CreateRestoreWorkspaceRequestFormGroup() {
		return new FormGroup<RestoreWorkspaceRequestFormProperties>({
			WorkspaceId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface RevokeIpRulesResult {
	}
	export interface RevokeIpRulesResultFormProperties {
	}
	export function CreateRevokeIpRulesResultFormGroup() {
		return new FormGroup<RevokeIpRulesResultFormProperties>({
		});

	}

	export interface RevokeIpRulesRequest {

		/** Required */
		GroupId: string;

		/** Required */
		UserRules: Array<string>;
	}
	export interface RevokeIpRulesRequestFormProperties {

		/** Required */
		GroupId: FormControl<string | null | undefined>,
	}
	export function CreateRevokeIpRulesRequestFormGroup() {
		return new FormGroup<RevokeIpRulesRequestFormProperties>({
			GroupId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface StartWorkspacesResult {
		FailedRequests?: Array<FailedWorkspaceChangeRequest>;
	}
	export interface StartWorkspacesResultFormProperties {
	}
	export function CreateStartWorkspacesResultFormGroup() {
		return new FormGroup<StartWorkspacesResultFormProperties>({
		});

	}

	export interface StartWorkspacesRequest {

		/** Required */
		StartWorkspaceRequests: Array<StartRequest>;
	}
	export interface StartWorkspacesRequestFormProperties {
	}
	export function CreateStartWorkspacesRequestFormGroup() {
		return new FormGroup<StartWorkspacesRequestFormProperties>({
		});

	}


	/** Information used to start a WorkSpace. */
	export interface StartRequest {
		WorkspaceId?: string;
	}

	/** Information used to start a WorkSpace. */
	export interface StartRequestFormProperties {
		WorkspaceId: FormControl<string | null | undefined>,
	}
	export function CreateStartRequestFormGroup() {
		return new FormGroup<StartRequestFormProperties>({
			WorkspaceId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface StopWorkspacesResult {
		FailedRequests?: Array<FailedWorkspaceChangeRequest>;
	}
	export interface StopWorkspacesResultFormProperties {
	}
	export function CreateStopWorkspacesResultFormGroup() {
		return new FormGroup<StopWorkspacesResultFormProperties>({
		});

	}

	export interface StopWorkspacesRequest {

		/** Required */
		StopWorkspaceRequests: Array<StopRequest>;
	}
	export interface StopWorkspacesRequestFormProperties {
	}
	export function CreateStopWorkspacesRequestFormGroup() {
		return new FormGroup<StopWorkspacesRequestFormProperties>({
		});

	}


	/** Describes the information used to stop a WorkSpace. */
	export interface StopRequest {
		WorkspaceId?: string;
	}

	/** Describes the information used to stop a WorkSpace. */
	export interface StopRequestFormProperties {
		WorkspaceId: FormControl<string | null | undefined>,
	}
	export function CreateStopRequestFormGroup() {
		return new FormGroup<StopRequestFormProperties>({
			WorkspaceId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface TerminateWorkspacesResult {
		FailedRequests?: Array<FailedWorkspaceChangeRequest>;
	}
	export interface TerminateWorkspacesResultFormProperties {
	}
	export function CreateTerminateWorkspacesResultFormGroup() {
		return new FormGroup<TerminateWorkspacesResultFormProperties>({
		});

	}

	export interface TerminateWorkspacesRequest {

		/** Required */
		TerminateWorkspaceRequests: Array<TerminateRequest>;
	}
	export interface TerminateWorkspacesRequestFormProperties {
	}
	export function CreateTerminateWorkspacesRequestFormGroup() {
		return new FormGroup<TerminateWorkspacesRequestFormProperties>({
		});

	}


	/** Describes the information used to terminate a WorkSpace. */
	export interface TerminateRequest {

		/** Required */
		WorkspaceId: string;
	}

	/** Describes the information used to terminate a WorkSpace. */
	export interface TerminateRequestFormProperties {

		/** Required */
		WorkspaceId: FormControl<string | null | undefined>,
	}
	export function CreateTerminateRequestFormGroup() {
		return new FormGroup<TerminateRequestFormProperties>({
			WorkspaceId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UpdateConnectClientAddInResult {
	}
	export interface UpdateConnectClientAddInResultFormProperties {
	}
	export function CreateUpdateConnectClientAddInResultFormGroup() {
		return new FormGroup<UpdateConnectClientAddInResultFormProperties>({
		});

	}

	export interface UpdateConnectClientAddInRequest {

		/** Required */
		AddInId: string;

		/** Required */
		ResourceId: string;
		Name?: string;
		URL?: string;
	}
	export interface UpdateConnectClientAddInRequestFormProperties {

		/** Required */
		AddInId: FormControl<string | null | undefined>,

		/** Required */
		ResourceId: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
		URL: FormControl<string | null | undefined>,
	}
	export function CreateUpdateConnectClientAddInRequestFormGroup() {
		return new FormGroup<UpdateConnectClientAddInRequestFormProperties>({
			AddInId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ResourceId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Name: new FormControl<string | null | undefined>(undefined),
			URL: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateConnectionAliasPermissionResult {
	}
	export interface UpdateConnectionAliasPermissionResultFormProperties {
	}
	export function CreateUpdateConnectionAliasPermissionResultFormGroup() {
		return new FormGroup<UpdateConnectionAliasPermissionResultFormProperties>({
		});

	}

	export interface UpdateConnectionAliasPermissionRequest {

		/** Required */
		AliasId: string;

		/** Required */
		ConnectionAliasPermission: ConnectionAliasPermission;
	}
	export interface UpdateConnectionAliasPermissionRequestFormProperties {

		/** Required */
		AliasId: FormControl<string | null | undefined>,
	}
	export function CreateUpdateConnectionAliasPermissionRequestFormGroup() {
		return new FormGroup<UpdateConnectionAliasPermissionRequestFormProperties>({
			AliasId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UpdateRulesOfIpGroupResult {
	}
	export interface UpdateRulesOfIpGroupResultFormProperties {
	}
	export function CreateUpdateRulesOfIpGroupResultFormGroup() {
		return new FormGroup<UpdateRulesOfIpGroupResultFormProperties>({
		});

	}

	export interface UpdateRulesOfIpGroupRequest {

		/** Required */
		GroupId: string;

		/** Required */
		UserRules: Array<IpRuleItem>;
	}
	export interface UpdateRulesOfIpGroupRequestFormProperties {

		/** Required */
		GroupId: FormControl<string | null | undefined>,
	}
	export function CreateUpdateRulesOfIpGroupRequestFormGroup() {
		return new FormGroup<UpdateRulesOfIpGroupRequestFormProperties>({
			GroupId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UpdateWorkspaceBundleResult {
	}
	export interface UpdateWorkspaceBundleResultFormProperties {
	}
	export function CreateUpdateWorkspaceBundleResultFormGroup() {
		return new FormGroup<UpdateWorkspaceBundleResultFormProperties>({
		});

	}

	export interface UpdateWorkspaceBundleRequest {
		BundleId?: string;
		ImageId?: string;
	}
	export interface UpdateWorkspaceBundleRequestFormProperties {
		BundleId: FormControl<string | null | undefined>,
		ImageId: FormControl<string | null | undefined>,
	}
	export function CreateUpdateWorkspaceBundleRequestFormGroup() {
		return new FormGroup<UpdateWorkspaceBundleRequestFormProperties>({
			BundleId: new FormControl<string | null | undefined>(undefined),
			ImageId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateWorkspaceImagePermissionResult {
	}
	export interface UpdateWorkspaceImagePermissionResultFormProperties {
	}
	export function CreateUpdateWorkspaceImagePermissionResultFormGroup() {
		return new FormGroup<UpdateWorkspaceImagePermissionResultFormProperties>({
		});

	}

	export interface UpdateWorkspaceImagePermissionRequest {

		/** Required */
		ImageId: string;

		/** Required */
		AllowCopyImage: boolean;

		/** Required */
		SharedAccountId: string;
	}
	export interface UpdateWorkspaceImagePermissionRequestFormProperties {

		/** Required */
		ImageId: FormControl<string | null | undefined>,

		/** Required */
		AllowCopyImage: FormControl<boolean | null | undefined>,

		/** Required */
		SharedAccountId: FormControl<string | null | undefined>,
	}
	export function CreateUpdateWorkspaceImagePermissionRequestFormGroup() {
		return new FormGroup<UpdateWorkspaceImagePermissionRequestFormProperties>({
			ImageId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			AllowCopyImage: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			SharedAccountId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum ReconnectEnum { ENABLED = 'ENABLED', DISABLED = 'DISABLED' }

	export enum LogUploadEnum { ENABLED = 'ENABLED', DISABLED = 'DISABLED' }

	export enum WorkspaceImageState { AVAILABLE = 'AVAILABLE', PENDING = 'PENDING', ERROR = 'ERROR' }

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * <p>Associates the specified connection alias with the specified directory to enable cross-Region redirection. For more information, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/cross-region-redirection.html"> Cross-Region Redirection for Amazon WorkSpaces</a>.</p> <note> <p>Before performing this operation, call <a href="https://docs.aws.amazon.com/workspaces/latest/api/API_DescribeConnectionAliases.html"> DescribeConnectionAliases</a> to make sure that the current state of the connection alias is <code>CREATED</code>.</p> </note>
		 * Post #X-Amz-Target=WorkspacesService.AssociateConnectionAlias
		 * @return {AssociateConnectionAliasResult} Success
		 */
		AssociateConnectionAlias(requestBody: AssociateConnectionAliasRequest): Observable<AssociateConnectionAliasResult> {
			return this.http.post<AssociateConnectionAliasResult>(this.baseUri + '#X-Amz-Target=WorkspacesService.AssociateConnectionAlias', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Associates the specified IP access control group with the specified directory.
		 * Post #X-Amz-Target=WorkspacesService.AssociateIpGroups
		 * @return {AssociateIpGroupsResult} Success
		 */
		AssociateIpGroups(requestBody: AssociateIpGroupsRequest): Observable<AssociateIpGroupsResult> {
			return this.http.post<AssociateIpGroupsResult>(this.baseUri + '#X-Amz-Target=WorkspacesService.AssociateIpGroups', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Adds one or more rules to the specified IP access control group.</p> <p>This action gives users permission to access their WorkSpaces from the CIDR address ranges specified in the rules.</p>
		 * Post #X-Amz-Target=WorkspacesService.AuthorizeIpRules
		 * @return {AuthorizeIpRulesResult} Success
		 */
		AuthorizeIpRules(requestBody: AuthorizeIpRulesRequest): Observable<AuthorizeIpRulesResult> {
			return this.http.post<AuthorizeIpRulesResult>(this.baseUri + '#X-Amz-Target=WorkspacesService.AuthorizeIpRules', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Copies the specified image from the specified Region to the current Region. For more information about copying images, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/copy-custom-image.html"> Copy a Custom WorkSpaces Image</a>.</p> <p>In the China (Ningxia) Region, you can copy images only within the same Region.</p> <p>In Amazon Web Services GovCloud (US), to copy images to and from other Regions, contact Amazon Web Services Support.</p> <important> <p>Before copying a shared image, be sure to verify that it has been shared from the correct Amazon Web Services account. To determine if an image has been shared and to see the ID of the Amazon Web Services account that owns an image, use the <a href="https://docs.aws.amazon.com/workspaces/latest/api/API_DescribeWorkspaceImages.html">DescribeWorkSpaceImages</a> and <a href="https://docs.aws.amazon.com/workspaces/latest/api/API_DescribeWorkspaceImagePermissions.html">DescribeWorkspaceImagePermissions</a> API operations. </p> </important>
		 * Post #X-Amz-Target=WorkspacesService.CopyWorkspaceImage
		 * @return {CopyWorkspaceImageResult} Success
		 */
		CopyWorkspaceImage(requestBody: CopyWorkspaceImageRequest): Observable<CopyWorkspaceImageResult> {
			return this.http.post<CopyWorkspaceImageResult>(this.baseUri + '#X-Amz-Target=WorkspacesService.CopyWorkspaceImage', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Creates a client-add-in for Amazon Connect within a directory. You can create only one Amazon Connect client add-in within a directory.</p> <p>This client add-in allows WorkSpaces users to seamlessly connect to Amazon Connect.</p>
		 * Post #X-Amz-Target=WorkspacesService.CreateConnectClientAddIn
		 * @return {CreateConnectClientAddInResult} Success
		 */
		CreateConnectClientAddIn(requestBody: CreateConnectClientAddInRequest): Observable<CreateConnectClientAddInResult> {
			return this.http.post<CreateConnectClientAddInResult>(this.baseUri + '#X-Amz-Target=WorkspacesService.CreateConnectClientAddIn', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Creates the specified connection alias for use with cross-Region redirection. For more information, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/cross-region-redirection.html"> Cross-Region Redirection for Amazon WorkSpaces</a>.
		 * Post #X-Amz-Target=WorkspacesService.CreateConnectionAlias
		 * @return {CreateConnectionAliasResult} Success
		 */
		CreateConnectionAlias(requestBody: CreateConnectionAliasRequest): Observable<CreateConnectionAliasResult> {
			return this.http.post<CreateConnectionAliasResult>(this.baseUri + '#X-Amz-Target=WorkspacesService.CreateConnectionAlias', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Creates an IP access control group.</p> <p>An IP access control group provides you with the ability to control the IP addresses from which users are allowed to access their WorkSpaces. To specify the CIDR address ranges, add rules to your IP access control group and then associate the group with your directory. You can add rules when you create the group or at any time using <a>AuthorizeIpRules</a>.</p> <p>There is a default IP access control group associated with your directory. If you don't associate an IP access control group with your directory, the default group is used. The default group includes a default rule that allows users to access their WorkSpaces from anywhere. You cannot modify the default IP access control group for your directory.</p>
		 * Post #X-Amz-Target=WorkspacesService.CreateIpGroup
		 * @return {CreateIpGroupResult} Success
		 */
		CreateIpGroup(requestBody: CreateIpGroupRequest): Observable<CreateIpGroupResult> {
			return this.http.post<CreateIpGroupResult>(this.baseUri + '#X-Amz-Target=WorkspacesService.CreateIpGroup', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Creates a standby WorkSpace in a secondary Region.
		 * Post #X-Amz-Target=WorkspacesService.CreateStandbyWorkspaces
		 * @return {CreateStandbyWorkspacesResult} Success
		 */
		CreateStandbyWorkspaces(requestBody: CreateStandbyWorkspacesRequest): Observable<CreateStandbyWorkspacesResult> {
			return this.http.post<CreateStandbyWorkspacesResult>(this.baseUri + '#X-Amz-Target=WorkspacesService.CreateStandbyWorkspaces', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Creates the specified tags for the specified WorkSpaces resource.
		 * Post #X-Amz-Target=WorkspacesService.CreateTags
		 * @return {CreateTagsResult} Success
		 */
		CreateTags(requestBody: CreateTagsRequest): Observable<CreateTagsResult> {
			return this.http.post<CreateTagsResult>(this.baseUri + '#X-Amz-Target=WorkspacesService.CreateTags', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Creates a new updated WorkSpace image based on the specified source image. The new updated WorkSpace image has the latest drivers and other updates required by the Amazon WorkSpaces components.</p> <p>To determine which WorkSpace images need to be updated with the latest Amazon WorkSpaces requirements, use <a href="https://docs.aws.amazon.com/workspaces/latest/api/API_DescribeWorkspaceImages.html"> DescribeWorkspaceImages</a>.</p> <note> <ul> <li> <p>Only Windows 10, Windows Server 2016, and Windows Server 2019 WorkSpace images can be programmatically updated at this time.</p> </li> <li> <p>Microsoft Windows updates and other application updates are not included in the update process.</p> </li> <li> <p>The source WorkSpace image is not deleted. You can delete the source image after you've verified your new updated image and created a new bundle. </p> </li> </ul> </note>
		 * Post #X-Amz-Target=WorkspacesService.CreateUpdatedWorkspaceImage
		 * @return {CreateUpdatedWorkspaceImageResult} Success
		 */
		CreateUpdatedWorkspaceImage(requestBody: CreateUpdatedWorkspaceImageRequest): Observable<CreateUpdatedWorkspaceImageResult> {
			return this.http.post<CreateUpdatedWorkspaceImageResult>(this.baseUri + '#X-Amz-Target=WorkspacesService.CreateUpdatedWorkspaceImage', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Creates the specified WorkSpace bundle. For more information about creating WorkSpace bundles, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/create-custom-bundle.html"> Create a Custom WorkSpaces Image and Bundle</a>.
		 * Post #X-Amz-Target=WorkspacesService.CreateWorkspaceBundle
		 * @return {CreateWorkspaceBundleResult} Success
		 */
		CreateWorkspaceBundle(requestBody: CreateWorkspaceBundleRequest): Observable<CreateWorkspaceBundleResult> {
			return this.http.post<CreateWorkspaceBundleResult>(this.baseUri + '#X-Amz-Target=WorkspacesService.CreateWorkspaceBundle', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Creates a new WorkSpace image from an existing WorkSpace.
		 * Post #X-Amz-Target=WorkspacesService.CreateWorkspaceImage
		 * @return {CreateWorkspaceImageResult} Success
		 */
		CreateWorkspaceImage(requestBody: CreateWorkspaceImageRequest): Observable<CreateWorkspaceImageResult> {
			return this.http.post<CreateWorkspaceImageResult>(this.baseUri + '#X-Amz-Target=WorkspacesService.CreateWorkspaceImage', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Creates one or more WorkSpaces.</p> <p>This operation is asynchronous and returns before the WorkSpaces are created.</p> <note> <p>The <code>MANUAL</code> running mode value is only supported by Amazon WorkSpaces Core. Contact your account team to be allow-listed to use this value. For more information, see <a href="http://aws.amazon.com/workspaces/core/">Amazon WorkSpaces Core</a>.</p> </note>
		 * Post #X-Amz-Target=WorkspacesService.CreateWorkspaces
		 * @return {CreateWorkspacesResult} Success
		 */
		CreateWorkspaces(requestBody: CreateWorkspacesRequest): Observable<CreateWorkspacesResult> {
			return this.http.post<CreateWorkspacesResult>(this.baseUri + '#X-Amz-Target=WorkspacesService.CreateWorkspaces', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Deletes customized client branding. Client branding allows you to customize your WorkSpace's client login portal. You can tailor your login portal company logo, the support email address, support link, link to reset password, and a custom message for users trying to sign in.</p> <p>After you delete your customized client branding, your login portal reverts to the default client branding.</p>
		 * Post #X-Amz-Target=WorkspacesService.DeleteClientBranding
		 * @return {DeleteClientBrandingResult} Success
		 */
		DeleteClientBranding(requestBody: DeleteClientBrandingRequest): Observable<DeleteClientBrandingResult> {
			return this.http.post<DeleteClientBrandingResult>(this.baseUri + '#X-Amz-Target=WorkspacesService.DeleteClientBranding', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a client-add-in for Amazon Connect that is configured within a directory.
		 * Post #X-Amz-Target=WorkspacesService.DeleteConnectClientAddIn
		 * @return {DeleteConnectClientAddInResult} Success
		 */
		DeleteConnectClientAddIn(requestBody: DeleteConnectClientAddInRequest): Observable<DeleteConnectClientAddInResult> {
			return this.http.post<DeleteConnectClientAddInResult>(this.baseUri + '#X-Amz-Target=WorkspacesService.DeleteConnectClientAddIn', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Deletes the specified connection alias. For more information, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/cross-region-redirection.html"> Cross-Region Redirection for Amazon WorkSpaces</a>.</p> <important> <p> <b>If you will no longer be using a fully qualified domain name (FQDN) as the registration code for your WorkSpaces users, you must take certain precautions to prevent potential security issues.</b> For more information, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/cross-region-redirection.html#cross-region-redirection-security-considerations"> Security Considerations if You Stop Using Cross-Region Redirection</a>.</p> </important> <note> <p>To delete a connection alias that has been shared, the shared account must first disassociate the connection alias from any directories it has been associated with. Then you must unshare the connection alias from the account it has been shared with. You can delete a connection alias only after it is no longer shared with any accounts or associated with any directories.</p> </note>
		 * Post #X-Amz-Target=WorkspacesService.DeleteConnectionAlias
		 * @return {DeleteConnectionAliasResult} Success
		 */
		DeleteConnectionAlias(requestBody: DeleteConnectionAliasRequest): Observable<DeleteConnectionAliasResult> {
			return this.http.post<DeleteConnectionAliasResult>(this.baseUri + '#X-Amz-Target=WorkspacesService.DeleteConnectionAlias', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Deletes the specified IP access control group.</p> <p>You cannot delete an IP access control group that is associated with a directory.</p>
		 * Post #X-Amz-Target=WorkspacesService.DeleteIpGroup
		 * @return {DeleteIpGroupResult} Success
		 */
		DeleteIpGroup(requestBody: DeleteIpGroupRequest): Observable<DeleteIpGroupResult> {
			return this.http.post<DeleteIpGroupResult>(this.baseUri + '#X-Amz-Target=WorkspacesService.DeleteIpGroup', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes the specified tags from the specified WorkSpaces resource.
		 * Post #X-Amz-Target=WorkspacesService.DeleteTags
		 * @return {DeleteTagsResult} Success
		 */
		DeleteTags(requestBody: DeleteTagsRequest): Observable<DeleteTagsResult> {
			return this.http.post<DeleteTagsResult>(this.baseUri + '#X-Amz-Target=WorkspacesService.DeleteTags', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes the specified WorkSpace bundle. For more information about deleting WorkSpace bundles, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/delete_bundle.html"> Delete a Custom WorkSpaces Bundle or Image</a>.
		 * Post #X-Amz-Target=WorkspacesService.DeleteWorkspaceBundle
		 * @return {DeleteWorkspaceBundleResult} Success
		 */
		DeleteWorkspaceBundle(requestBody: DeleteWorkspaceBundleRequest): Observable<DeleteWorkspaceBundleResult> {
			return this.http.post<DeleteWorkspaceBundleResult>(this.baseUri + '#X-Amz-Target=WorkspacesService.DeleteWorkspaceBundle', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes the specified image from your account. To delete an image, you must first delete any bundles that are associated with the image and unshare the image if it is shared with other accounts.
		 * Post #X-Amz-Target=WorkspacesService.DeleteWorkspaceImage
		 * @return {DeleteWorkspaceImageResult} Success
		 */
		DeleteWorkspaceImage(requestBody: DeleteWorkspaceImageRequest): Observable<DeleteWorkspaceImageResult> {
			return this.http.post<DeleteWorkspaceImageResult>(this.baseUri + '#X-Amz-Target=WorkspacesService.DeleteWorkspaceImage', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Deregisters the specified directory. This operation is asynchronous and returns before the WorkSpace directory is deregistered. If any WorkSpaces are registered to this directory, you must remove them before you can deregister the directory.</p> <note> <p>Simple AD and AD Connector are made available to you free of charge to use with WorkSpaces. If there are no WorkSpaces being used with your Simple AD or AD Connector directory for 30 consecutive days, this directory will be automatically deregistered for use with Amazon WorkSpaces, and you will be charged for this directory as per the <a href="http://aws.amazon.com/directoryservice/pricing/">Directory Service pricing terms</a>.</p> <p>To delete empty directories, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/delete-workspaces-directory.html"> Delete the Directory for Your WorkSpaces</a>. If you delete your Simple AD or AD Connector directory, you can always create a new one when you want to start using WorkSpaces again.</p> </note>
		 * Post #X-Amz-Target=WorkspacesService.DeregisterWorkspaceDirectory
		 * @return {DeregisterWorkspaceDirectoryResult} Success
		 */
		DeregisterWorkspaceDirectory(requestBody: DeregisterWorkspaceDirectoryRequest): Observable<DeregisterWorkspaceDirectoryResult> {
			return this.http.post<DeregisterWorkspaceDirectoryResult>(this.baseUri + '#X-Amz-Target=WorkspacesService.DeregisterWorkspaceDirectory', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves a list that describes the configuration of Bring Your Own License (BYOL) for the specified account.
		 * Post #X-Amz-Target=WorkspacesService.DescribeAccount
		 * @return {DescribeAccountResult} Success
		 */
		DescribeAccount(requestBody: DescribeAccountRequest): Observable<DescribeAccountResult> {
			return this.http.post<DescribeAccountResult>(this.baseUri + '#X-Amz-Target=WorkspacesService.DescribeAccount', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves a list that describes modifications to the configuration of Bring Your Own License (BYOL) for the specified account.
		 * Post #X-Amz-Target=WorkspacesService.DescribeAccountModifications
		 * @return {DescribeAccountModificationsResult} Success
		 */
		DescribeAccountModifications(requestBody: DescribeAccountModificationsRequest): Observable<DescribeAccountModificationsResult> {
			return this.http.post<DescribeAccountModificationsResult>(this.baseUri + '#X-Amz-Target=WorkspacesService.DescribeAccountModifications', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Describes the specified client branding. Client branding allows you to customize the log in page of various device types for your users. You can add your company logo, the support email address, support link, link to reset password, and a custom message for users trying to sign in.</p> <note> <p>Only device types that have branding information configured will be shown in the response.</p> </note>
		 * Post #X-Amz-Target=WorkspacesService.DescribeClientBranding
		 * @return {DescribeClientBrandingResult} Success
		 */
		DescribeClientBranding(requestBody: DescribeClientBrandingRequest): Observable<DescribeClientBrandingResult> {
			return this.http.post<DescribeClientBrandingResult>(this.baseUri + '#X-Amz-Target=WorkspacesService.DescribeClientBranding', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves a list that describes one or more specified Amazon WorkSpaces clients.
		 * Post #X-Amz-Target=WorkspacesService.DescribeClientProperties
		 * @return {DescribeClientPropertiesResult} Success
		 */
		DescribeClientProperties(requestBody: DescribeClientPropertiesRequest): Observable<DescribeClientPropertiesResult> {
			return this.http.post<DescribeClientPropertiesResult>(this.baseUri + '#X-Amz-Target=WorkspacesService.DescribeClientProperties', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves a list of Amazon Connect client add-ins that have been created.
		 * Post #X-Amz-Target=WorkspacesService.DescribeConnectClientAddIns
		 * @return {DescribeConnectClientAddInsResult} Success
		 */
		DescribeConnectClientAddIns(requestBody: DescribeConnectClientAddInsRequest): Observable<DescribeConnectClientAddInsResult> {
			return this.http.post<DescribeConnectClientAddInsResult>(this.baseUri + '#X-Amz-Target=WorkspacesService.DescribeConnectClientAddIns', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Describes the permissions that the owner of a connection alias has granted to another Amazon Web Services account for the specified connection alias. For more information, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/cross-region-redirection.html"> Cross-Region Redirection for Amazon WorkSpaces</a>.
		 * Post #X-Amz-Target=WorkspacesService.DescribeConnectionAliasPermissions
		 * @return {DescribeConnectionAliasPermissionsResult} Success
		 */
		DescribeConnectionAliasPermissions(requestBody: DescribeConnectionAliasPermissionsRequest): Observable<DescribeConnectionAliasPermissionsResult> {
			return this.http.post<DescribeConnectionAliasPermissionsResult>(this.baseUri + '#X-Amz-Target=WorkspacesService.DescribeConnectionAliasPermissions', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves a list that describes the connection aliases used for cross-Region redirection. For more information, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/cross-region-redirection.html"> Cross-Region Redirection for Amazon WorkSpaces</a>.
		 * Post #X-Amz-Target=WorkspacesService.DescribeConnectionAliases
		 * @return {DescribeConnectionAliasesResult} Success
		 */
		DescribeConnectionAliases(requestBody: DescribeConnectionAliasesRequest): Observable<DescribeConnectionAliasesResult> {
			return this.http.post<DescribeConnectionAliasesResult>(this.baseUri + '#X-Amz-Target=WorkspacesService.DescribeConnectionAliases', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Describes one or more of your IP access control groups.
		 * Post #X-Amz-Target=WorkspacesService.DescribeIpGroups
		 * @return {DescribeIpGroupsResult} Success
		 */
		DescribeIpGroups(requestBody: DescribeIpGroupsRequest): Observable<DescribeIpGroupsResult> {
			return this.http.post<DescribeIpGroupsResult>(this.baseUri + '#X-Amz-Target=WorkspacesService.DescribeIpGroups', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Describes the specified tags for the specified WorkSpaces resource.
		 * Post #X-Amz-Target=WorkspacesService.DescribeTags
		 * @return {DescribeTagsResult} Success
		 */
		DescribeTags(requestBody: DescribeTagsRequest): Observable<DescribeTagsResult> {
			return this.http.post<DescribeTagsResult>(this.baseUri + '#X-Amz-Target=WorkspacesService.DescribeTags', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Retrieves a list that describes the available WorkSpace bundles.</p> <p>You can filter the results using either bundle ID or owner, but not both.</p>
		 * Post #X-Amz-Target=WorkspacesService.DescribeWorkspaceBundles
		 * @param {string} NextToken Pagination token
		 * @return {DescribeWorkspaceBundlesResult} Success
		 */
		DescribeWorkspaceBundles(NextToken: string | null | undefined, requestBody: DescribeWorkspaceBundlesRequest): Observable<DescribeWorkspaceBundlesResult> {
			return this.http.post<DescribeWorkspaceBundlesResult>(this.baseUri + '#X-Amz-Target=WorkspacesService.DescribeWorkspaceBundles?NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Describes the available directories that are registered with Amazon WorkSpaces.
		 * Post #X-Amz-Target=WorkspacesService.DescribeWorkspaceDirectories
		 * @param {string} NextToken Pagination token
		 * @return {DescribeWorkspaceDirectoriesResult} Success
		 */
		DescribeWorkspaceDirectories(NextToken: string | null | undefined, requestBody: DescribeWorkspaceDirectoriesRequest): Observable<DescribeWorkspaceDirectoriesResult> {
			return this.http.post<DescribeWorkspaceDirectoriesResult>(this.baseUri + '#X-Amz-Target=WorkspacesService.DescribeWorkspaceDirectories?NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Describes the permissions that the owner of an image has granted to other Amazon Web Services accounts for an image.
		 * Post #X-Amz-Target=WorkspacesService.DescribeWorkspaceImagePermissions
		 * @return {DescribeWorkspaceImagePermissionsResult} Success
		 */
		DescribeWorkspaceImagePermissions(requestBody: DescribeWorkspaceImagePermissionsRequest): Observable<DescribeWorkspaceImagePermissionsResult> {
			return this.http.post<DescribeWorkspaceImagePermissionsResult>(this.baseUri + '#X-Amz-Target=WorkspacesService.DescribeWorkspaceImagePermissions', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves a list that describes one or more specified images, if the image identifiers are provided. Otherwise, all images in the account are described.
		 * Post #X-Amz-Target=WorkspacesService.DescribeWorkspaceImages
		 * @return {DescribeWorkspaceImagesResult} Success
		 */
		DescribeWorkspaceImages(requestBody: DescribeWorkspaceImagesRequest): Observable<DescribeWorkspaceImagesResult> {
			return this.http.post<DescribeWorkspaceImagesResult>(this.baseUri + '#X-Amz-Target=WorkspacesService.DescribeWorkspaceImages', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Describes the snapshots for the specified WorkSpace.
		 * Post #X-Amz-Target=WorkspacesService.DescribeWorkspaceSnapshots
		 * @return {DescribeWorkspaceSnapshotsResult} Success
		 */
		DescribeWorkspaceSnapshots(requestBody: DescribeWorkspaceSnapshotsRequest): Observable<DescribeWorkspaceSnapshotsResult> {
			return this.http.post<DescribeWorkspaceSnapshotsResult>(this.baseUri + '#X-Amz-Target=WorkspacesService.DescribeWorkspaceSnapshots', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Describes the specified WorkSpaces.</p> <p>You can filter the results by using the bundle identifier, directory identifier, or owner, but you can specify only one filter at a time.</p>
		 * Post #X-Amz-Target=WorkspacesService.DescribeWorkspaces
		 * @param {string} Limit Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {DescribeWorkspacesResult} Success
		 */
		DescribeWorkspaces(Limit: string | null | undefined, NextToken: string | null | undefined, requestBody: DescribeWorkspacesRequest): Observable<DescribeWorkspacesResult> {
			return this.http.post<DescribeWorkspacesResult>(this.baseUri + '#X-Amz-Target=WorkspacesService.DescribeWorkspaces?Limit=' + (Limit == null ? '' : encodeURIComponent(Limit)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Describes the connection status of the specified WorkSpaces.
		 * Post #X-Amz-Target=WorkspacesService.DescribeWorkspacesConnectionStatus
		 * @return {DescribeWorkspacesConnectionStatusResult} Success
		 */
		DescribeWorkspacesConnectionStatus(requestBody: DescribeWorkspacesConnectionStatusRequest): Observable<DescribeWorkspacesConnectionStatusResult> {
			return this.http.post<DescribeWorkspacesConnectionStatusResult>(this.baseUri + '#X-Amz-Target=WorkspacesService.DescribeWorkspacesConnectionStatus', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Disassociates a connection alias from a directory. Disassociating a connection alias disables cross-Region redirection between two directories in different Regions. For more information, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/cross-region-redirection.html"> Cross-Region Redirection for Amazon WorkSpaces</a>.</p> <note> <p>Before performing this operation, call <a href="https://docs.aws.amazon.com/workspaces/latest/api/API_DescribeConnectionAliases.html"> DescribeConnectionAliases</a> to make sure that the current state of the connection alias is <code>CREATED</code>.</p> </note>
		 * Post #X-Amz-Target=WorkspacesService.DisassociateConnectionAlias
		 * @return {DisassociateConnectionAliasResult} Success
		 */
		DisassociateConnectionAlias(requestBody: DisassociateConnectionAliasRequest): Observable<DisassociateConnectionAliasResult> {
			return this.http.post<DisassociateConnectionAliasResult>(this.baseUri + '#X-Amz-Target=WorkspacesService.DisassociateConnectionAlias', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Disassociates the specified IP access control group from the specified directory.
		 * Post #X-Amz-Target=WorkspacesService.DisassociateIpGroups
		 * @return {DisassociateIpGroupsResult} Success
		 */
		DisassociateIpGroups(requestBody: DisassociateIpGroupsRequest): Observable<DisassociateIpGroupsResult> {
			return this.http.post<DisassociateIpGroupsResult>(this.baseUri + '#X-Amz-Target=WorkspacesService.DisassociateIpGroups', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Imports client branding. Client branding allows you to customize your WorkSpace's client login portal. You can tailor your login portal company logo, the support email address, support link, link to reset password, and a custom message for users trying to sign in.</p> <p>After you import client branding, the default branding experience for the specified platform type is replaced with the imported experience</p> <note> <ul> <li> <p>You must specify at least one platform type when importing client branding.</p> </li> <li> <p>You can import up to 6 MB of data with each request. If your request exceeds this limit, you can import client branding for different platform types using separate requests.</p> </li> <li> <p>In each platform type, the <code>SupportEmail</code> and <code>SupportLink</code> parameters are mutually exclusive. You can specify only one parameter for each platform type, but not both.</p> </li> <li> <p>Imported data can take up to a minute to appear in the WorkSpaces client.</p> </li> </ul> </note>
		 * Post #X-Amz-Target=WorkspacesService.ImportClientBranding
		 * @return {ImportClientBrandingResult} Success
		 */
		ImportClientBranding(requestBody: ImportClientBrandingRequest): Observable<ImportClientBrandingResult> {
			return this.http.post<ImportClientBrandingResult>(this.baseUri + '#X-Amz-Target=WorkspacesService.ImportClientBranding', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Imports the specified Windows 10 or 11 Bring Your Own License (BYOL) image into Amazon WorkSpaces. The image must be an already licensed Amazon EC2 image that is in your Amazon Web Services account, and you must own the image. For more information about creating BYOL images, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/byol-windows-images.html"> Bring Your Own Windows Desktop Licenses</a>.
		 * Post #X-Amz-Target=WorkspacesService.ImportWorkspaceImage
		 * @return {ImportWorkspaceImageResult} Success
		 */
		ImportWorkspaceImage(requestBody: ImportWorkspaceImageRequest): Observable<ImportWorkspaceImageResult> {
			return this.http.post<ImportWorkspaceImageResult>(this.baseUri + '#X-Amz-Target=WorkspacesService.ImportWorkspaceImage', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Retrieves a list of IP address ranges, specified as IPv4 CIDR blocks, that you can use for the network management interface when you enable Bring Your Own License (BYOL). </p> <p>This operation can be run only by Amazon Web Services accounts that are enabled for BYOL. If your account isn't enabled for BYOL, you'll receive an <code>AccessDeniedException</code> error.</p> <p>The management network interface is connected to a secure Amazon WorkSpaces management network. It is used for interactive streaming of the WorkSpace desktop to Amazon WorkSpaces clients, and to allow Amazon WorkSpaces to manage the WorkSpace.</p>
		 * Post #X-Amz-Target=WorkspacesService.ListAvailableManagementCidrRanges
		 * @return {ListAvailableManagementCidrRangesResult} Success
		 */
		ListAvailableManagementCidrRanges(requestBody: ListAvailableManagementCidrRangesRequest): Observable<ListAvailableManagementCidrRangesResult> {
			return this.http.post<ListAvailableManagementCidrRangesResult>(this.baseUri + '#X-Amz-Target=WorkspacesService.ListAvailableManagementCidrRanges', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Migrates a WorkSpace from one operating system or bundle type to another, while retaining the data on the user volume.</p> <p>The migration process recreates the WorkSpace by using a new root volume from the target bundle image and the user volume from the last available snapshot of the original WorkSpace. During migration, the original <code>D:\Users\%USERNAME%</code> user profile folder is renamed to <code>D:\Users\%USERNAME%MMddyyTHHmmss%.NotMigrated</code>. A new <code>D:\Users\%USERNAME%\</code> folder is generated by the new OS. Certain files in the old user profile are moved to the new user profile.</p> <p>For available migration scenarios, details about what happens during migration, and best practices, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/migrate-workspaces.html">Migrate a WorkSpace</a>.</p>
		 * Post #X-Amz-Target=WorkspacesService.MigrateWorkspace
		 * @return {MigrateWorkspaceResult} Success
		 */
		MigrateWorkspace(requestBody: MigrateWorkspaceRequest): Observable<MigrateWorkspaceResult> {
			return this.http.post<MigrateWorkspaceResult>(this.baseUri + '#X-Amz-Target=WorkspacesService.MigrateWorkspace', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Modifies the configuration of Bring Your Own License (BYOL) for the specified account.
		 * Post #X-Amz-Target=WorkspacesService.ModifyAccount
		 * @return {ModifyAccountResult} Success
		 */
		ModifyAccount(requestBody: ModifyAccountRequest): Observable<ModifyAccountResult> {
			return this.http.post<ModifyAccountResult>(this.baseUri + '#X-Amz-Target=WorkspacesService.ModifyAccount', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Modifies the properties of the certificate-based authentication you want to use with your WorkSpaces.
		 * Post #X-Amz-Target=WorkspacesService.ModifyCertificateBasedAuthProperties
		 * @return {ModifyCertificateBasedAuthPropertiesResult} Success
		 */
		ModifyCertificateBasedAuthProperties(requestBody: ModifyCertificateBasedAuthPropertiesRequest): Observable<ModifyCertificateBasedAuthPropertiesResult> {
			return this.http.post<ModifyCertificateBasedAuthPropertiesResult>(this.baseUri + '#X-Amz-Target=WorkspacesService.ModifyCertificateBasedAuthProperties', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Modifies the properties of the specified Amazon WorkSpaces clients.
		 * Post #X-Amz-Target=WorkspacesService.ModifyClientProperties
		 * @return {ModifyClientPropertiesResult} Success
		 */
		ModifyClientProperties(requestBody: ModifyClientPropertiesRequest): Observable<ModifyClientPropertiesResult> {
			return this.http.post<ModifyClientPropertiesResult>(this.baseUri + '#X-Amz-Target=WorkspacesService.ModifyClientProperties', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Modifies multiple properties related to SAML 2.0 authentication, including the enablement status, user access URL, and relay state parameter name that are used for configuring federation with an SAML 2.0 identity provider.
		 * Post #X-Amz-Target=WorkspacesService.ModifySamlProperties
		 * @return {ModifySamlPropertiesResult} Success
		 */
		ModifySamlProperties(requestBody: ModifySamlPropertiesRequest): Observable<ModifySamlPropertiesResult> {
			return this.http.post<ModifySamlPropertiesResult>(this.baseUri + '#X-Amz-Target=WorkspacesService.ModifySamlProperties', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Modifies the self-service WorkSpace management capabilities for your users. For more information, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/enable-user-self-service-workspace-management.html">Enable Self-Service WorkSpace Management Capabilities for Your Users</a>.
		 * Post #X-Amz-Target=WorkspacesService.ModifySelfservicePermissions
		 * @return {ModifySelfservicePermissionsResult} Success
		 */
		ModifySelfservicePermissions(requestBody: ModifySelfservicePermissionsRequest): Observable<ModifySelfservicePermissionsResult> {
			return this.http.post<ModifySelfservicePermissionsResult>(this.baseUri + '#X-Amz-Target=WorkspacesService.ModifySelfservicePermissions', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Specifies which devices and operating systems users can use to access their WorkSpaces. For more information, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/update-directory-details.html#control-device-access"> Control Device Access</a>.
		 * Post #X-Amz-Target=WorkspacesService.ModifyWorkspaceAccessProperties
		 * @return {ModifyWorkspaceAccessPropertiesResult} Success
		 */
		ModifyWorkspaceAccessProperties(requestBody: ModifyWorkspaceAccessPropertiesRequest): Observable<ModifyWorkspaceAccessPropertiesResult> {
			return this.http.post<ModifyWorkspaceAccessPropertiesResult>(this.baseUri + '#X-Amz-Target=WorkspacesService.ModifyWorkspaceAccessProperties', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Modify the default properties used to create WorkSpaces.
		 * Post #X-Amz-Target=WorkspacesService.ModifyWorkspaceCreationProperties
		 * @return {ModifyWorkspaceCreationPropertiesResult} Success
		 */
		ModifyWorkspaceCreationProperties(requestBody: ModifyWorkspaceCreationPropertiesRequest): Observable<ModifyWorkspaceCreationPropertiesResult> {
			return this.http.post<ModifyWorkspaceCreationPropertiesResult>(this.baseUri + '#X-Amz-Target=WorkspacesService.ModifyWorkspaceCreationProperties', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Modifies the specified WorkSpace properties. For important information about how to modify the size of the root and user volumes, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/modify-workspaces.html"> Modify a WorkSpace</a>. </p> <note> <p>The <code>MANUAL</code> running mode value is only supported by Amazon WorkSpaces Core. Contact your account team to be allow-listed to use this value. For more information, see <a href="http://aws.amazon.com/workspaces/core/">Amazon WorkSpaces Core</a>.</p> </note>
		 * Post #X-Amz-Target=WorkspacesService.ModifyWorkspaceProperties
		 * @return {ModifyWorkspacePropertiesResult} Success
		 */
		ModifyWorkspaceProperties(requestBody: ModifyWorkspacePropertiesRequest): Observable<ModifyWorkspacePropertiesResult> {
			return this.http.post<ModifyWorkspacePropertiesResult>(this.baseUri + '#X-Amz-Target=WorkspacesService.ModifyWorkspaceProperties', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Sets the state of the specified WorkSpace.</p> <p>To maintain a WorkSpace without being interrupted, set the WorkSpace state to <code>ADMIN_MAINTENANCE</code>. WorkSpaces in this state do not respond to requests to reboot, stop, start, rebuild, or restore. An AutoStop WorkSpace in this state is not stopped. Users cannot log into a WorkSpace in the <code>ADMIN_MAINTENANCE</code> state.</p>
		 * Post #X-Amz-Target=WorkspacesService.ModifyWorkspaceState
		 * @return {ModifyWorkspaceStateResult} Success
		 */
		ModifyWorkspaceState(requestBody: ModifyWorkspaceStateRequest): Observable<ModifyWorkspaceStateResult> {
			return this.http.post<ModifyWorkspaceStateResult>(this.baseUri + '#X-Amz-Target=WorkspacesService.ModifyWorkspaceState', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Reboots the specified WorkSpaces.</p> <p>You cannot reboot a WorkSpace unless its state is <code>AVAILABLE</code> or <code>UNHEALTHY</code>.</p> <p>This operation is asynchronous and returns before the WorkSpaces have rebooted.</p>
		 * Post #X-Amz-Target=WorkspacesService.RebootWorkspaces
		 * @return {RebootWorkspacesResult} Success
		 */
		RebootWorkspaces(requestBody: RebootWorkspacesRequest): Observable<RebootWorkspacesResult> {
			return this.http.post<RebootWorkspacesResult>(this.baseUri + '#X-Amz-Target=WorkspacesService.RebootWorkspaces', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Rebuilds the specified WorkSpace.</p> <p>You cannot rebuild a WorkSpace unless its state is <code>AVAILABLE</code>, <code>ERROR</code>, <code>UNHEALTHY</code>, <code>STOPPED</code>, or <code>REBOOTING</code>.</p> <p>Rebuilding a WorkSpace is a potentially destructive action that can result in the loss of data. For more information, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/reset-workspace.html">Rebuild a WorkSpace</a>.</p> <p>This operation is asynchronous and returns before the WorkSpaces have been completely rebuilt.</p>
		 * Post #X-Amz-Target=WorkspacesService.RebuildWorkspaces
		 * @return {RebuildWorkspacesResult} Success
		 */
		RebuildWorkspaces(requestBody: RebuildWorkspacesRequest): Observable<RebuildWorkspacesResult> {
			return this.http.post<RebuildWorkspacesResult>(this.baseUri + '#X-Amz-Target=WorkspacesService.RebuildWorkspaces', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Registers the specified directory. This operation is asynchronous and returns before the WorkSpace directory is registered. If this is the first time you are registering a directory, you will need to create the workspaces_DefaultRole role before you can register a directory. For more information, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/workspaces-access-control.html#create-default-role"> Creating the workspaces_DefaultRole Role</a>.
		 * Post #X-Amz-Target=WorkspacesService.RegisterWorkspaceDirectory
		 * @return {RegisterWorkspaceDirectoryResult} Success
		 */
		RegisterWorkspaceDirectory(requestBody: RegisterWorkspaceDirectoryRequest): Observable<RegisterWorkspaceDirectoryResult> {
			return this.http.post<RegisterWorkspaceDirectoryResult>(this.baseUri + '#X-Amz-Target=WorkspacesService.RegisterWorkspaceDirectory', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Restores the specified WorkSpace to its last known healthy state.</p> <p>You cannot restore a WorkSpace unless its state is <code> AVAILABLE</code>, <code>ERROR</code>, <code>UNHEALTHY</code>, or <code>STOPPED</code>.</p> <p>Restoring a WorkSpace is a potentially destructive action that can result in the loss of data. For more information, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/restore-workspace.html">Restore a WorkSpace</a>.</p> <p>This operation is asynchronous and returns before the WorkSpace is completely restored.</p>
		 * Post #X-Amz-Target=WorkspacesService.RestoreWorkspace
		 * @return {RestoreWorkspaceResult} Success
		 */
		RestoreWorkspace(requestBody: RestoreWorkspaceRequest): Observable<RestoreWorkspaceResult> {
			return this.http.post<RestoreWorkspaceResult>(this.baseUri + '#X-Amz-Target=WorkspacesService.RestoreWorkspace', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Removes one or more rules from the specified IP access control group.
		 * Post #X-Amz-Target=WorkspacesService.RevokeIpRules
		 * @return {RevokeIpRulesResult} Success
		 */
		RevokeIpRules(requestBody: RevokeIpRulesRequest): Observable<RevokeIpRulesResult> {
			return this.http.post<RevokeIpRulesResult>(this.baseUri + '#X-Amz-Target=WorkspacesService.RevokeIpRules', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Starts the specified WorkSpaces.</p> <p>You cannot start a WorkSpace unless it has a running mode of <code>AutoStop</code> and a state of <code>STOPPED</code>.</p>
		 * Post #X-Amz-Target=WorkspacesService.StartWorkspaces
		 * @return {StartWorkspacesResult} Success
		 */
		StartWorkspaces(requestBody: StartWorkspacesRequest): Observable<StartWorkspacesResult> {
			return this.http.post<StartWorkspacesResult>(this.baseUri + '#X-Amz-Target=WorkspacesService.StartWorkspaces', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p> Stops the specified WorkSpaces.</p> <p>You cannot stop a WorkSpace unless it has a running mode of <code>AutoStop</code> and a state of <code>AVAILABLE</code>, <code>IMPAIRED</code>, <code>UNHEALTHY</code>, or <code>ERROR</code>.</p>
		 * Post #X-Amz-Target=WorkspacesService.StopWorkspaces
		 * @return {StopWorkspacesResult} Success
		 */
		StopWorkspaces(requestBody: StopWorkspacesRequest): Observable<StopWorkspacesResult> {
			return this.http.post<StopWorkspacesResult>(this.baseUri + '#X-Amz-Target=WorkspacesService.StopWorkspaces', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Terminates the specified WorkSpaces.</p> <important> <p>Terminating a WorkSpace is a permanent action and cannot be undone. The user's data is destroyed. If you need to archive any user data, contact Amazon Web Services Support before terminating the WorkSpace.</p> </important> <p>You can terminate a WorkSpace that is in any state except <code>SUSPENDED</code>.</p> <p>This operation is asynchronous and returns before the WorkSpaces have been completely terminated. After a WorkSpace is terminated, the <code>TERMINATED</code> state is returned only briefly before the WorkSpace directory metadata is cleaned up, so this state is rarely returned. To confirm that a WorkSpace is terminated, check for the WorkSpace ID by using <a href="https://docs.aws.amazon.com/workspaces/latest/api/API_DescribeWorkspaces.html"> DescribeWorkSpaces</a>. If the WorkSpace ID isn't returned, then the WorkSpace has been successfully terminated.</p> <note> <p>Simple AD and AD Connector are made available to you free of charge to use with WorkSpaces. If there are no WorkSpaces being used with your Simple AD or AD Connector directory for 30 consecutive days, this directory will be automatically deregistered for use with Amazon WorkSpaces, and you will be charged for this directory as per the <a href="http://aws.amazon.com/directoryservice/pricing/">Directory Service pricing terms</a>.</p> <p>To delete empty directories, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/delete-workspaces-directory.html"> Delete the Directory for Your WorkSpaces</a>. If you delete your Simple AD or AD Connector directory, you can always create a new one when you want to start using WorkSpaces again.</p> </note>
		 * Post #X-Amz-Target=WorkspacesService.TerminateWorkspaces
		 * @return {TerminateWorkspacesResult} Success
		 */
		TerminateWorkspaces(requestBody: TerminateWorkspacesRequest): Observable<TerminateWorkspacesResult> {
			return this.http.post<TerminateWorkspacesResult>(this.baseUri + '#X-Amz-Target=WorkspacesService.TerminateWorkspaces', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Updates a Amazon Connect client add-in. Use this action to update the name and endpoint URL of a Amazon Connect client add-in.
		 * Post #X-Amz-Target=WorkspacesService.UpdateConnectClientAddIn
		 * @return {UpdateConnectClientAddInResult} Success
		 */
		UpdateConnectClientAddIn(requestBody: UpdateConnectClientAddInRequest): Observable<UpdateConnectClientAddInResult> {
			return this.http.post<UpdateConnectClientAddInResult>(this.baseUri + '#X-Amz-Target=WorkspacesService.UpdateConnectClientAddIn', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Shares or unshares a connection alias with one account by specifying whether that account has permission to associate the connection alias with a directory. If the association permission is granted, the connection alias is shared with that account. If the association permission is revoked, the connection alias is unshared with the account. For more information, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/cross-region-redirection.html"> Cross-Region Redirection for Amazon WorkSpaces</a>.</p> <note> <ul> <li> <p>Before performing this operation, call <a href="https://docs.aws.amazon.com/workspaces/latest/api/API_DescribeConnectionAliases.html"> DescribeConnectionAliases</a> to make sure that the current state of the connection alias is <code>CREATED</code>.</p> </li> <li> <p>To delete a connection alias that has been shared, the shared account must first disassociate the connection alias from any directories it has been associated with. Then you must unshare the connection alias from the account it has been shared with. You can delete a connection alias only after it is no longer shared with any accounts or associated with any directories.</p> </li> </ul> </note>
		 * Post #X-Amz-Target=WorkspacesService.UpdateConnectionAliasPermission
		 * @return {UpdateConnectionAliasPermissionResult} Success
		 */
		UpdateConnectionAliasPermission(requestBody: UpdateConnectionAliasPermissionRequest): Observable<UpdateConnectionAliasPermissionResult> {
			return this.http.post<UpdateConnectionAliasPermissionResult>(this.baseUri + '#X-Amz-Target=WorkspacesService.UpdateConnectionAliasPermission', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Replaces the current rules of the specified IP access control group with the specified rules.
		 * Post #X-Amz-Target=WorkspacesService.UpdateRulesOfIpGroup
		 * @return {UpdateRulesOfIpGroupResult} Success
		 */
		UpdateRulesOfIpGroup(requestBody: UpdateRulesOfIpGroupRequest): Observable<UpdateRulesOfIpGroupResult> {
			return this.http.post<UpdateRulesOfIpGroupResult>(this.baseUri + '#X-Amz-Target=WorkspacesService.UpdateRulesOfIpGroup', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Updates a WorkSpace bundle with a new image. For more information about updating WorkSpace bundles, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/update-custom-bundle.html"> Update a Custom WorkSpaces Bundle</a>.</p> <important> <p>Existing WorkSpaces aren't automatically updated when you update the bundle that they're based on. To update existing WorkSpaces that are based on a bundle that you've updated, you must either rebuild the WorkSpaces or delete and recreate them.</p> </important>
		 * Post #X-Amz-Target=WorkspacesService.UpdateWorkspaceBundle
		 * @return {UpdateWorkspaceBundleResult} Success
		 */
		UpdateWorkspaceBundle(requestBody: UpdateWorkspaceBundleRequest): Observable<UpdateWorkspaceBundleResult> {
			return this.http.post<UpdateWorkspaceBundleResult>(this.baseUri + '#X-Amz-Target=WorkspacesService.UpdateWorkspaceBundle', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Shares or unshares an image with one account in the same Amazon Web Services Region by specifying whether that account has permission to copy the image. If the copy image permission is granted, the image is shared with that account. If the copy image permission is revoked, the image is unshared with the account.</p> <p>After an image has been shared, the recipient account can copy the image to other Regions as needed.</p> <p>In the China (Ningxia) Region, you can copy images only within the same Region.</p> <p>In Amazon Web Services GovCloud (US), to copy images to and from other Regions, contact Amazon Web Services Support.</p> <p>For more information about sharing images, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/share-custom-image.html"> Share or Unshare a Custom WorkSpaces Image</a>.</p> <note> <ul> <li> <p>To delete an image that has been shared, you must unshare the image before you delete it.</p> </li> <li> <p>Sharing Bring Your Own License (BYOL) images across Amazon Web Services accounts isn't supported at this time in Amazon Web Services GovCloud (US). To share BYOL images across accounts in Amazon Web Services GovCloud (US), contact Amazon Web Services Support.</p> </li> </ul> </note>
		 * Post #X-Amz-Target=WorkspacesService.UpdateWorkspaceImagePermission
		 * @return {UpdateWorkspaceImagePermissionResult} Success
		 */
		UpdateWorkspaceImagePermission(requestBody: UpdateWorkspaceImagePermissionRequest): Observable<UpdateWorkspaceImagePermissionResult> {
			return this.http.post<UpdateWorkspaceImagePermissionResult>(this.baseUri + '#X-Amz-Target=WorkspacesService.UpdateWorkspaceImagePermission', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

	export enum AssociateConnectionAliasX_Amz_Target { 'WorkspacesService.AssociateConnectionAlias' = 'WorkspacesService.AssociateConnectionAlias' }

	export enum AssociateIpGroupsX_Amz_Target { 'WorkspacesService.AssociateIpGroups' = 'WorkspacesService.AssociateIpGroups' }

	export enum AuthorizeIpRulesX_Amz_Target { 'WorkspacesService.AuthorizeIpRules' = 'WorkspacesService.AuthorizeIpRules' }

	export enum CopyWorkspaceImageX_Amz_Target { 'WorkspacesService.CopyWorkspaceImage' = 'WorkspacesService.CopyWorkspaceImage' }

	export enum CreateConnectClientAddInX_Amz_Target { 'WorkspacesService.CreateConnectClientAddIn' = 'WorkspacesService.CreateConnectClientAddIn' }

	export enum CreateConnectionAliasX_Amz_Target { 'WorkspacesService.CreateConnectionAlias' = 'WorkspacesService.CreateConnectionAlias' }

	export enum CreateIpGroupX_Amz_Target { 'WorkspacesService.CreateIpGroup' = 'WorkspacesService.CreateIpGroup' }

	export enum CreateStandbyWorkspacesX_Amz_Target { 'WorkspacesService.CreateStandbyWorkspaces' = 'WorkspacesService.CreateStandbyWorkspaces' }

	export enum CreateTagsX_Amz_Target { 'WorkspacesService.CreateTags' = 'WorkspacesService.CreateTags' }

	export enum CreateUpdatedWorkspaceImageX_Amz_Target { 'WorkspacesService.CreateUpdatedWorkspaceImage' = 'WorkspacesService.CreateUpdatedWorkspaceImage' }

	export enum CreateWorkspaceBundleX_Amz_Target { 'WorkspacesService.CreateWorkspaceBundle' = 'WorkspacesService.CreateWorkspaceBundle' }

	export enum CreateWorkspaceImageX_Amz_Target { 'WorkspacesService.CreateWorkspaceImage' = 'WorkspacesService.CreateWorkspaceImage' }

	export enum CreateWorkspacesX_Amz_Target { 'WorkspacesService.CreateWorkspaces' = 'WorkspacesService.CreateWorkspaces' }

	export enum DeleteClientBrandingX_Amz_Target { 'WorkspacesService.DeleteClientBranding' = 'WorkspacesService.DeleteClientBranding' }

	export enum DeleteConnectClientAddInX_Amz_Target { 'WorkspacesService.DeleteConnectClientAddIn' = 'WorkspacesService.DeleteConnectClientAddIn' }

	export enum DeleteConnectionAliasX_Amz_Target { 'WorkspacesService.DeleteConnectionAlias' = 'WorkspacesService.DeleteConnectionAlias' }

	export enum DeleteIpGroupX_Amz_Target { 'WorkspacesService.DeleteIpGroup' = 'WorkspacesService.DeleteIpGroup' }

	export enum DeleteTagsX_Amz_Target { 'WorkspacesService.DeleteTags' = 'WorkspacesService.DeleteTags' }

	export enum DeleteWorkspaceBundleX_Amz_Target { 'WorkspacesService.DeleteWorkspaceBundle' = 'WorkspacesService.DeleteWorkspaceBundle' }

	export enum DeleteWorkspaceImageX_Amz_Target { 'WorkspacesService.DeleteWorkspaceImage' = 'WorkspacesService.DeleteWorkspaceImage' }

	export enum DeregisterWorkspaceDirectoryX_Amz_Target { 'WorkspacesService.DeregisterWorkspaceDirectory' = 'WorkspacesService.DeregisterWorkspaceDirectory' }

	export enum DescribeAccountX_Amz_Target { 'WorkspacesService.DescribeAccount' = 'WorkspacesService.DescribeAccount' }

	export enum DescribeAccountModificationsX_Amz_Target { 'WorkspacesService.DescribeAccountModifications' = 'WorkspacesService.DescribeAccountModifications' }

	export enum DescribeClientBrandingX_Amz_Target { 'WorkspacesService.DescribeClientBranding' = 'WorkspacesService.DescribeClientBranding' }

	export enum DescribeClientPropertiesX_Amz_Target { 'WorkspacesService.DescribeClientProperties' = 'WorkspacesService.DescribeClientProperties' }

	export enum DescribeConnectClientAddInsX_Amz_Target { 'WorkspacesService.DescribeConnectClientAddIns' = 'WorkspacesService.DescribeConnectClientAddIns' }

	export enum DescribeConnectionAliasPermissionsX_Amz_Target { 'WorkspacesService.DescribeConnectionAliasPermissions' = 'WorkspacesService.DescribeConnectionAliasPermissions' }

	export enum DescribeConnectionAliasesX_Amz_Target { 'WorkspacesService.DescribeConnectionAliases' = 'WorkspacesService.DescribeConnectionAliases' }

	export enum DescribeIpGroupsX_Amz_Target { 'WorkspacesService.DescribeIpGroups' = 'WorkspacesService.DescribeIpGroups' }

	export enum DescribeTagsX_Amz_Target { 'WorkspacesService.DescribeTags' = 'WorkspacesService.DescribeTags' }

	export enum DescribeWorkspaceBundlesX_Amz_Target { 'WorkspacesService.DescribeWorkspaceBundles' = 'WorkspacesService.DescribeWorkspaceBundles' }

	export enum DescribeWorkspaceDirectoriesX_Amz_Target { 'WorkspacesService.DescribeWorkspaceDirectories' = 'WorkspacesService.DescribeWorkspaceDirectories' }

	export enum DescribeWorkspaceImagePermissionsX_Amz_Target { 'WorkspacesService.DescribeWorkspaceImagePermissions' = 'WorkspacesService.DescribeWorkspaceImagePermissions' }

	export enum DescribeWorkspaceImagesX_Amz_Target { 'WorkspacesService.DescribeWorkspaceImages' = 'WorkspacesService.DescribeWorkspaceImages' }

	export enum DescribeWorkspaceSnapshotsX_Amz_Target { 'WorkspacesService.DescribeWorkspaceSnapshots' = 'WorkspacesService.DescribeWorkspaceSnapshots' }

	export enum DescribeWorkspacesX_Amz_Target { 'WorkspacesService.DescribeWorkspaces' = 'WorkspacesService.DescribeWorkspaces' }

	export enum DescribeWorkspacesConnectionStatusX_Amz_Target { 'WorkspacesService.DescribeWorkspacesConnectionStatus' = 'WorkspacesService.DescribeWorkspacesConnectionStatus' }

	export enum DisassociateConnectionAliasX_Amz_Target { 'WorkspacesService.DisassociateConnectionAlias' = 'WorkspacesService.DisassociateConnectionAlias' }

	export enum DisassociateIpGroupsX_Amz_Target { 'WorkspacesService.DisassociateIpGroups' = 'WorkspacesService.DisassociateIpGroups' }

	export enum ImportClientBrandingX_Amz_Target { 'WorkspacesService.ImportClientBranding' = 'WorkspacesService.ImportClientBranding' }

	export enum ImportWorkspaceImageX_Amz_Target { 'WorkspacesService.ImportWorkspaceImage' = 'WorkspacesService.ImportWorkspaceImage' }

	export enum ListAvailableManagementCidrRangesX_Amz_Target { 'WorkspacesService.ListAvailableManagementCidrRanges' = 'WorkspacesService.ListAvailableManagementCidrRanges' }

	export enum MigrateWorkspaceX_Amz_Target { 'WorkspacesService.MigrateWorkspace' = 'WorkspacesService.MigrateWorkspace' }

	export enum ModifyAccountX_Amz_Target { 'WorkspacesService.ModifyAccount' = 'WorkspacesService.ModifyAccount' }

	export enum ModifyCertificateBasedAuthPropertiesX_Amz_Target { 'WorkspacesService.ModifyCertificateBasedAuthProperties' = 'WorkspacesService.ModifyCertificateBasedAuthProperties' }

	export enum ModifyClientPropertiesX_Amz_Target { 'WorkspacesService.ModifyClientProperties' = 'WorkspacesService.ModifyClientProperties' }

	export enum ModifySamlPropertiesX_Amz_Target { 'WorkspacesService.ModifySamlProperties' = 'WorkspacesService.ModifySamlProperties' }

	export enum ModifySelfservicePermissionsX_Amz_Target { 'WorkspacesService.ModifySelfservicePermissions' = 'WorkspacesService.ModifySelfservicePermissions' }

	export enum ModifyWorkspaceAccessPropertiesX_Amz_Target { 'WorkspacesService.ModifyWorkspaceAccessProperties' = 'WorkspacesService.ModifyWorkspaceAccessProperties' }

	export enum ModifyWorkspaceCreationPropertiesX_Amz_Target { 'WorkspacesService.ModifyWorkspaceCreationProperties' = 'WorkspacesService.ModifyWorkspaceCreationProperties' }

	export enum ModifyWorkspacePropertiesX_Amz_Target { 'WorkspacesService.ModifyWorkspaceProperties' = 'WorkspacesService.ModifyWorkspaceProperties' }

	export enum ModifyWorkspaceStateX_Amz_Target { 'WorkspacesService.ModifyWorkspaceState' = 'WorkspacesService.ModifyWorkspaceState' }

	export enum RebootWorkspacesX_Amz_Target { 'WorkspacesService.RebootWorkspaces' = 'WorkspacesService.RebootWorkspaces' }

	export enum RebuildWorkspacesX_Amz_Target { 'WorkspacesService.RebuildWorkspaces' = 'WorkspacesService.RebuildWorkspaces' }

	export enum RegisterWorkspaceDirectoryX_Amz_Target { 'WorkspacesService.RegisterWorkspaceDirectory' = 'WorkspacesService.RegisterWorkspaceDirectory' }

	export enum RestoreWorkspaceX_Amz_Target { 'WorkspacesService.RestoreWorkspace' = 'WorkspacesService.RestoreWorkspace' }

	export enum RevokeIpRulesX_Amz_Target { 'WorkspacesService.RevokeIpRules' = 'WorkspacesService.RevokeIpRules' }

	export enum StartWorkspacesX_Amz_Target { 'WorkspacesService.StartWorkspaces' = 'WorkspacesService.StartWorkspaces' }

	export enum StopWorkspacesX_Amz_Target { 'WorkspacesService.StopWorkspaces' = 'WorkspacesService.StopWorkspaces' }

	export enum TerminateWorkspacesX_Amz_Target { 'WorkspacesService.TerminateWorkspaces' = 'WorkspacesService.TerminateWorkspaces' }

	export enum UpdateConnectClientAddInX_Amz_Target { 'WorkspacesService.UpdateConnectClientAddIn' = 'WorkspacesService.UpdateConnectClientAddIn' }

	export enum UpdateConnectionAliasPermissionX_Amz_Target { 'WorkspacesService.UpdateConnectionAliasPermission' = 'WorkspacesService.UpdateConnectionAliasPermission' }

	export enum UpdateRulesOfIpGroupX_Amz_Target { 'WorkspacesService.UpdateRulesOfIpGroup' = 'WorkspacesService.UpdateRulesOfIpGroup' }

	export enum UpdateWorkspaceBundleX_Amz_Target { 'WorkspacesService.UpdateWorkspaceBundle' = 'WorkspacesService.UpdateWorkspaceBundle' }

	export enum UpdateWorkspaceImagePermissionX_Amz_Target { 'WorkspacesService.UpdateWorkspaceImagePermission' = 'WorkspacesService.UpdateWorkspaceImagePermission' }

}

