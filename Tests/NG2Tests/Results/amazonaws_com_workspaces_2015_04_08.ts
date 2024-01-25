import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface AssociateIpGroupsResult {
	}
	export interface AssociateIpGroupsResultFormProperties {
	}
	export function CreateAssociateIpGroupsResultFormGroup() {
		return new FormGroup<AssociateIpGroupsResultFormProperties>({
		});

	}

	export interface AssociateIpGroupsRequest {

		/**
		 * Required
		 * Max length: 65
		 * Min length: 10
		 */
		DirectoryId: string;

		/** Required */
		GroupIds: Array<string>;
	}
	export interface AssociateIpGroupsRequestFormProperties {

		/**
		 * Required
		 * Max length: 65
		 * Min length: 10
		 */
		DirectoryId: FormControl<string | null | undefined>,
	}
	export function CreateAssociateIpGroupsRequestFormGroup() {
		return new FormGroup<AssociateIpGroupsRequestFormProperties>({
			DirectoryId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(10), Validators.maxLength(65), Validators.pattern('^d-[0-9a-f]{8,63}$')]),
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

	export interface ResourceNotFoundException {
	}
	export interface ResourceNotFoundExceptionFormProperties {
	}
	export function CreateResourceNotFoundExceptionFormGroup() {
		return new FormGroup<ResourceNotFoundExceptionFormProperties>({
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

	export interface InvalidResourceStateException {
	}
	export interface InvalidResourceStateExceptionFormProperties {
	}
	export function CreateInvalidResourceStateExceptionFormGroup() {
		return new FormGroup<InvalidResourceStateExceptionFormProperties>({
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

	export interface OperationNotSupportedException {
	}
	export interface OperationNotSupportedExceptionFormProperties {
	}
	export function CreateOperationNotSupportedExceptionFormGroup() {
		return new FormGroup<OperationNotSupportedExceptionFormProperties>({
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
			GroupId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('wsipg-[0-9a-z]{8,63}$')]),
		});

	}


	/** Describes a rule for an IP access control group. */
	export interface IpRuleItem {
		ipRule?: string | null;
		ruleDesc?: string | null;
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
		ImageId?: string | null;
	}
	export interface CopyWorkspaceImageResultFormProperties {
		ImageId: FormControl<string | null | undefined>,
	}
	export function CreateCopyWorkspaceImageResultFormGroup() {
		return new FormGroup<CopyWorkspaceImageResultFormProperties>({
			ImageId: new FormControl<string | null | undefined>(undefined, [Validators.pattern('wsi-[0-9a-z]{9,63}$')]),
		});

	}

	export interface CopyWorkspaceImageRequest {

		/**
		 * Required
		 * Max length: 64
		 * Min length: 1
		 */
		Name: string;

		/**
		 * Max length: 256
		 * Min length: 1
		 */
		Description?: string | null;

		/** Required */
		SourceImageId: string;

		/**
		 * Required
		 * Max length: 31
		 * Min length: 1
		 */
		SourceRegion: string;
		Tags?: Array<Tag>;
	}
	export interface CopyWorkspaceImageRequestFormProperties {

		/**
		 * Required
		 * Max length: 64
		 * Min length: 1
		 */
		Name: FormControl<string | null | undefined>,

		/**
		 * Max length: 256
		 * Min length: 1
		 */
		Description: FormControl<string | null | undefined>,

		/** Required */
		SourceImageId: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 31
		 * Min length: 1
		 */
		SourceRegion: FormControl<string | null | undefined>,
	}
	export function CreateCopyWorkspaceImageRequestFormGroup() {
		return new FormGroup<CopyWorkspaceImageRequestFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(64), Validators.pattern('^[a-zA-Z0-9_./()\\-]+$')]),
			Description: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(256), Validators.pattern('^[a-zA-Z0-9_./() -]+$')]),
			SourceImageId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('wsi-[0-9a-z]{9,63}$')]),
			SourceRegion: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(31), Validators.pattern('^[-0-9a-z]{1,31}$')]),
		});

	}


	/** Describes a tag. */
	export interface Tag {

		/**
		 * Required
		 * Max length: 127
		 * Min length: 1
		 */
		Key: string;

		/** Max length: 255 */
		Value?: string | null;
	}

	/** Describes a tag. */
	export interface TagFormProperties {

		/**
		 * Required
		 * Max length: 127
		 * Min length: 1
		 */
		Key: FormControl<string | null | undefined>,

		/** Max length: 255 */
		Value: FormControl<string | null | undefined>,
	}
	export function CreateTagFormGroup() {
		return new FormGroup<TagFormProperties>({
			Key: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(127)]),
			Value: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(255)]),
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

	export interface CreateIpGroupResult {
		GroupId?: string | null;
	}
	export interface CreateIpGroupResultFormProperties {
		GroupId: FormControl<string | null | undefined>,
	}
	export function CreateCreateIpGroupResultFormGroup() {
		return new FormGroup<CreateIpGroupResultFormProperties>({
			GroupId: new FormControl<string | null | undefined>(undefined, [Validators.pattern('wsipg-[0-9a-z]{8,63}$')]),
		});

	}

	export interface CreateIpGroupRequest {

		/** Required */
		GroupName: string;
		GroupDesc?: string | null;
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

	export interface ResourceCreationFailedException {
	}
	export interface ResourceCreationFailedExceptionFormProperties {
	}
	export function CreateResourceCreationFailedExceptionFormGroup() {
		return new FormGroup<ResourceCreationFailedExceptionFormProperties>({
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

		/**
		 * Required
		 * Min length: 1
		 */
		ResourceId: string;

		/** Required */
		Tags: Array<Tag>;
	}
	export interface CreateTagsRequestFormProperties {

		/**
		 * Required
		 * Min length: 1
		 */
		ResourceId: FormControl<string | null | undefined>,
	}
	export function CreateCreateTagsRequestFormGroup() {
		return new FormGroup<CreateTagsRequestFormProperties>({
			ResourceId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1)]),
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

		/** Describes the information used to create a WorkSpace. */
		WorkspaceRequest?: WorkspaceRequest;
		ErrorCode?: string | null;
		ErrorMessage?: string | null;
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

		/**
		 * Required
		 * Max length: 65
		 * Min length: 10
		 */
		DirectoryId: string;

		/**
		 * Required
		 * Max length: 63
		 * Min length: 1
		 */
		UserName: string;

		/** Required */
		BundleId: string;
		VolumeEncryptionKey?: string | null;
		UserVolumeEncryptionEnabled?: boolean | null;
		RootVolumeEncryptionEnabled?: boolean | null;

		/** Describes a WorkSpace. */
		WorkspaceProperties?: WorkspaceProperties;
		Tags?: Array<Tag>;
	}

	/** Describes the information used to create a WorkSpace. */
	export interface WorkspaceRequestFormProperties {

		/**
		 * Required
		 * Max length: 65
		 * Min length: 10
		 */
		DirectoryId: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 63
		 * Min length: 1
		 */
		UserName: FormControl<string | null | undefined>,

		/** Required */
		BundleId: FormControl<string | null | undefined>,
		VolumeEncryptionKey: FormControl<string | null | undefined>,
		UserVolumeEncryptionEnabled: FormControl<boolean | null | undefined>,
		RootVolumeEncryptionEnabled: FormControl<boolean | null | undefined>,
	}
	export function CreateWorkspaceRequestFormGroup() {
		return new FormGroup<WorkspaceRequestFormProperties>({
			DirectoryId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(10), Validators.maxLength(65), Validators.pattern('^d-[0-9a-f]{8,63}$')]),
			UserName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(63)]),
			BundleId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^wsb-[0-9a-z]{8,63}$')]),
			VolumeEncryptionKey: new FormControl<string | null | undefined>(undefined),
			UserVolumeEncryptionEnabled: new FormControl<boolean | null | undefined>(undefined),
			RootVolumeEncryptionEnabled: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Describes a WorkSpace. */
	export interface WorkspaceProperties {
		RunningMode?: WorkspacePropertiesRunningMode | null;
		RunningModeAutoStopTimeoutInMinutes?: number | null;
		RootVolumeSizeGib?: number | null;
		UserVolumeSizeGib?: number | null;
		ComputeTypeName?: WorkspacePropertiesComputeTypeName | null;
	}

	/** Describes a WorkSpace. */
	export interface WorkspacePropertiesFormProperties {
		RunningMode: FormControl<WorkspacePropertiesRunningMode | null | undefined>,
		RunningModeAutoStopTimeoutInMinutes: FormControl<number | null | undefined>,
		RootVolumeSizeGib: FormControl<number | null | undefined>,
		UserVolumeSizeGib: FormControl<number | null | undefined>,
		ComputeTypeName: FormControl<WorkspacePropertiesComputeTypeName | null | undefined>,
	}
	export function CreateWorkspacePropertiesFormGroup() {
		return new FormGroup<WorkspacePropertiesFormProperties>({
			RunningMode: new FormControl<WorkspacePropertiesRunningMode | null | undefined>(undefined),
			RunningModeAutoStopTimeoutInMinutes: new FormControl<number | null | undefined>(undefined),
			RootVolumeSizeGib: new FormControl<number | null | undefined>(undefined),
			UserVolumeSizeGib: new FormControl<number | null | undefined>(undefined),
			ComputeTypeName: new FormControl<WorkspacePropertiesComputeTypeName | null | undefined>(undefined),
		});

	}

	export enum WorkspacePropertiesRunningMode { AUTO_STOP = 0, ALWAYS_ON = 1 }

	export enum WorkspacePropertiesComputeTypeName { VALUE = 0, STANDARD = 1, PERFORMANCE = 2, POWER = 3, GRAPHICS = 4, POWERPRO = 5, GRAPHICSPRO = 6 }


	/** Describes a WorkSpace. */
	export interface Workspace {
		WorkspaceId?: string | null;

		/**
		 * Max length: 65
		 * Min length: 10
		 */
		DirectoryId?: string | null;

		/**
		 * Max length: 63
		 * Min length: 1
		 */
		UserName?: string | null;
		IpAddress?: string | null;
		State?: WorkspaceState | null;
		BundleId?: string | null;

		/**
		 * Max length: 24
		 * Min length: 15
		 */
		SubnetId?: string | null;
		ErrorMessage?: string | null;
		ErrorCode?: string | null;
		ComputerName?: string | null;
		VolumeEncryptionKey?: string | null;
		UserVolumeEncryptionEnabled?: boolean | null;
		RootVolumeEncryptionEnabled?: boolean | null;

		/** Describes a WorkSpace. */
		WorkspaceProperties?: WorkspaceProperties;
		ModificationStates?: Array<ModificationState>;
	}

	/** Describes a WorkSpace. */
	export interface WorkspaceFormProperties {
		WorkspaceId: FormControl<string | null | undefined>,

		/**
		 * Max length: 65
		 * Min length: 10
		 */
		DirectoryId: FormControl<string | null | undefined>,

		/**
		 * Max length: 63
		 * Min length: 1
		 */
		UserName: FormControl<string | null | undefined>,
		IpAddress: FormControl<string | null | undefined>,
		State: FormControl<WorkspaceState | null | undefined>,
		BundleId: FormControl<string | null | undefined>,

		/**
		 * Max length: 24
		 * Min length: 15
		 */
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
			WorkspaceId: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^ws-[0-9a-z]{8,63}$')]),
			DirectoryId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(10), Validators.maxLength(65), Validators.pattern('^d-[0-9a-f]{8,63}$')]),
			UserName: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(63)]),
			IpAddress: new FormControl<string | null | undefined>(undefined),
			State: new FormControl<WorkspaceState | null | undefined>(undefined),
			BundleId: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^wsb-[0-9a-z]{8,63}$')]),
			SubnetId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(15), Validators.maxLength(24), Validators.pattern('^(subnet-([0-9a-f]{8}|[0-9a-f]{17}))$')]),
			ErrorMessage: new FormControl<string | null | undefined>(undefined),
			ErrorCode: new FormControl<string | null | undefined>(undefined),
			ComputerName: new FormControl<string | null | undefined>(undefined),
			VolumeEncryptionKey: new FormControl<string | null | undefined>(undefined),
			UserVolumeEncryptionEnabled: new FormControl<boolean | null | undefined>(undefined),
			RootVolumeEncryptionEnabled: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export enum WorkspaceState { PENDING = 0, AVAILABLE = 1, IMPAIRED = 2, UNHEALTHY = 3, REBOOTING = 4, STARTING = 5, REBUILDING = 6, RESTORING = 7, MAINTENANCE = 8, ADMIN_MAINTENANCE = 9, TERMINATING = 10, TERMINATED = 11, SUSPENDED = 12, UPDATING = 13, STOPPING = 14, STOPPED = 15, ERROR = 16 }


	/** Describes a WorkSpace modification. */
	export interface ModificationState {
		Resource?: ModificationStateResource | null;
		State?: ModificationStateState | null;
	}

	/** Describes a WorkSpace modification. */
	export interface ModificationStateFormProperties {
		Resource: FormControl<ModificationStateResource | null | undefined>,
		State: FormControl<ModificationStateState | null | undefined>,
	}
	export function CreateModificationStateFormGroup() {
		return new FormGroup<ModificationStateFormProperties>({
			Resource: new FormControl<ModificationStateResource | null | undefined>(undefined),
			State: new FormControl<ModificationStateState | null | undefined>(undefined),
		});

	}

	export enum ModificationStateResource { ROOT_VOLUME = 0, USER_VOLUME = 1, COMPUTE_TYPE = 2 }

	export enum ModificationStateState { UPDATE_INITIATED = 0, UPDATE_IN_PROGRESS = 1 }

	export interface CreateWorkspacesRequest {

		/**
		 * Required
		 * Minimum items: 1
		 * Maximum items: 25
		 */
		Workspaces: Array<WorkspaceRequest>;
	}
	export interface CreateWorkspacesRequestFormProperties {
	}
	export function CreateCreateWorkspacesRequestFormGroup() {
		return new FormGroup<CreateWorkspacesRequestFormProperties>({
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
			GroupId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('wsipg-[0-9a-z]{8,63}$')]),
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

	export interface DeleteTagsResult {
	}
	export interface DeleteTagsResultFormProperties {
	}
	export function CreateDeleteTagsResultFormGroup() {
		return new FormGroup<DeleteTagsResultFormProperties>({
		});

	}

	export interface DeleteTagsRequest {

		/**
		 * Required
		 * Min length: 1
		 */
		ResourceId: string;

		/** Required */
		TagKeys: Array<string>;
	}
	export interface DeleteTagsRequestFormProperties {

		/**
		 * Required
		 * Min length: 1
		 */
		ResourceId: FormControl<string | null | undefined>,
	}
	export function CreateDeleteTagsRequestFormGroup() {
		return new FormGroup<DeleteTagsRequestFormProperties>({
			ResourceId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1)]),
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
			ImageId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('wsi-[0-9a-z]{9,63}$')]),
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

		/**
		 * Required
		 * Max length: 65
		 * Min length: 10
		 */
		DirectoryId: string;
	}
	export interface DeregisterWorkspaceDirectoryRequestFormProperties {

		/**
		 * Required
		 * Max length: 65
		 * Min length: 10
		 */
		DirectoryId: FormControl<string | null | undefined>,
	}
	export function CreateDeregisterWorkspaceDirectoryRequestFormGroup() {
		return new FormGroup<DeregisterWorkspaceDirectoryRequestFormProperties>({
			DirectoryId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(10), Validators.maxLength(65), Validators.pattern('^d-[0-9a-f]{8,63}$')]),
		});

	}

	export interface DescribeAccountResult {
		DedicatedTenancySupport?: DescribeAccountResultDedicatedTenancySupport | null;
		DedicatedTenancyManagementCidrRange?: string | null;
	}
	export interface DescribeAccountResultFormProperties {
		DedicatedTenancySupport: FormControl<DescribeAccountResultDedicatedTenancySupport | null | undefined>,
		DedicatedTenancyManagementCidrRange: FormControl<string | null | undefined>,
	}
	export function CreateDescribeAccountResultFormGroup() {
		return new FormGroup<DescribeAccountResultFormProperties>({
			DedicatedTenancySupport: new FormControl<DescribeAccountResultDedicatedTenancySupport | null | undefined>(undefined),
			DedicatedTenancyManagementCidrRange: new FormControl<string | null | undefined>(undefined, [Validators.pattern('(^([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])\.([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])\.0\.0)(\/(16$))$')]),
		});

	}

	export enum DescribeAccountResultDedicatedTenancySupport { ENABLED = 0, DISABLED = 1 }

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

		/**
		 * Max length: 63
		 * Min length: 1
		 */
		NextToken?: string | null;
	}
	export interface DescribeAccountModificationsResultFormProperties {

		/**
		 * Max length: 63
		 * Min length: 1
		 */
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeAccountModificationsResultFormGroup() {
		return new FormGroup<DescribeAccountModificationsResultFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(63)]),
		});

	}


	/** Describes a modification to the configuration of Bring Your Own License (BYOL) for the specified account.  */
	export interface AccountModification {
		ModificationState?: AccountModificationModificationState | null;
		DedicatedTenancySupport?: DescribeAccountResultDedicatedTenancySupport | null;
		DedicatedTenancyManagementCidrRange?: string | null;
		StartTime?: Date | null;
		ErrorCode?: string | null;
		ErrorMessage?: string | null;
	}

	/** Describes a modification to the configuration of Bring Your Own License (BYOL) for the specified account.  */
	export interface AccountModificationFormProperties {
		ModificationState: FormControl<AccountModificationModificationState | null | undefined>,
		DedicatedTenancySupport: FormControl<DescribeAccountResultDedicatedTenancySupport | null | undefined>,
		DedicatedTenancyManagementCidrRange: FormControl<string | null | undefined>,
		StartTime: FormControl<Date | null | undefined>,
		ErrorCode: FormControl<string | null | undefined>,
		ErrorMessage: FormControl<string | null | undefined>,
	}
	export function CreateAccountModificationFormGroup() {
		return new FormGroup<AccountModificationFormProperties>({
			ModificationState: new FormControl<AccountModificationModificationState | null | undefined>(undefined),
			DedicatedTenancySupport: new FormControl<DescribeAccountResultDedicatedTenancySupport | null | undefined>(undefined),
			DedicatedTenancyManagementCidrRange: new FormControl<string | null | undefined>(undefined, [Validators.pattern('(^([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])\.([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])\.0\.0)(\/(16$))$')]),
			StartTime: new FormControl<Date | null | undefined>(undefined),
			ErrorCode: new FormControl<string | null | undefined>(undefined),
			ErrorMessage: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum AccountModificationModificationState { PENDING = 0, COMPLETED = 1, FAILED = 2 }

	export interface DescribeAccountModificationsRequest {

		/**
		 * Max length: 63
		 * Min length: 1
		 */
		NextToken?: string | null;
	}
	export interface DescribeAccountModificationsRequestFormProperties {

		/**
		 * Max length: 63
		 * Min length: 1
		 */
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeAccountModificationsRequestFormGroup() {
		return new FormGroup<DescribeAccountModificationsRequestFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(63)]),
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

		/** Min length: 1 */
		ResourceId?: string | null;

		/** Describes an Amazon WorkSpaces client. */
		ClientProperties?: ClientProperties;
	}

	/** Information about the Amazon WorkSpaces client. */
	export interface ClientPropertiesResultFormProperties {

		/** Min length: 1 */
		ResourceId: FormControl<string | null | undefined>,
	}
	export function CreateClientPropertiesResultFormGroup() {
		return new FormGroup<ClientPropertiesResultFormProperties>({
			ResourceId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1)]),
		});

	}


	/** Describes an Amazon WorkSpaces client. */
	export interface ClientProperties {
		ReconnectEnabled?: DescribeAccountResultDedicatedTenancySupport | null;
	}

	/** Describes an Amazon WorkSpaces client. */
	export interface ClientPropertiesFormProperties {
		ReconnectEnabled: FormControl<DescribeAccountResultDedicatedTenancySupport | null | undefined>,
	}
	export function CreateClientPropertiesFormGroup() {
		return new FormGroup<ClientPropertiesFormProperties>({
			ReconnectEnabled: new FormControl<DescribeAccountResultDedicatedTenancySupport | null | undefined>(undefined),
		});

	}

	export interface DescribeClientPropertiesRequest {

		/**
		 * Required
		 * Minimum items: 1
		 * Maximum items: 25
		 */
		ResourceIds: Array<string>;
	}
	export interface DescribeClientPropertiesRequestFormProperties {
	}
	export function CreateDescribeClientPropertiesRequestFormGroup() {
		return new FormGroup<DescribeClientPropertiesRequestFormProperties>({
		});

	}

	export interface DescribeIpGroupsResult {
		Result?: Array<WorkspacesIpGroup>;

		/**
		 * Max length: 63
		 * Min length: 1
		 */
		NextToken?: string | null;
	}
	export interface DescribeIpGroupsResultFormProperties {

		/**
		 * Max length: 63
		 * Min length: 1
		 */
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeIpGroupsResultFormGroup() {
		return new FormGroup<DescribeIpGroupsResultFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(63)]),
		});

	}


	/** Describes an IP access control group. */
	export interface WorkspacesIpGroup {
		groupId?: string | null;
		groupName?: string | null;
		groupDesc?: string | null;
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
			groupId: new FormControl<string | null | undefined>(undefined, [Validators.pattern('wsipg-[0-9a-z]{8,63}$')]),
			groupName: new FormControl<string | null | undefined>(undefined),
			groupDesc: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeIpGroupsRequest {
		GroupIds?: Array<string>;

		/**
		 * Max length: 63
		 * Min length: 1
		 */
		NextToken?: string | null;

		/**
		 * Minimum: 1
		 * Maximum: 25
		 */
		MaxResults?: number | null;
	}
	export interface DescribeIpGroupsRequestFormProperties {

		/**
		 * Max length: 63
		 * Min length: 1
		 */
		NextToken: FormControl<string | null | undefined>,

		/**
		 * Minimum: 1
		 * Maximum: 25
		 */
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateDescribeIpGroupsRequestFormGroup() {
		return new FormGroup<DescribeIpGroupsRequestFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(63)]),
			MaxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(25)]),
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

		/**
		 * Required
		 * Min length: 1
		 */
		ResourceId: string;
	}
	export interface DescribeTagsRequestFormProperties {

		/**
		 * Required
		 * Min length: 1
		 */
		ResourceId: FormControl<string | null | undefined>,
	}
	export function CreateDescribeTagsRequestFormGroup() {
		return new FormGroup<DescribeTagsRequestFormProperties>({
			ResourceId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1)]),
		});

	}

	export interface DescribeWorkspaceBundlesResult {
		Bundles?: Array<WorkspaceBundle>;

		/**
		 * Max length: 63
		 * Min length: 1
		 */
		NextToken?: string | null;
	}
	export interface DescribeWorkspaceBundlesResultFormProperties {

		/**
		 * Max length: 63
		 * Min length: 1
		 */
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeWorkspaceBundlesResultFormGroup() {
		return new FormGroup<DescribeWorkspaceBundlesResultFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(63)]),
		});

	}


	/** Describes a WorkSpace bundle. */
	export interface WorkspaceBundle {
		BundleId?: string | null;

		/** Min length: 1 */
		Name?: string | null;
		Owner?: string | null;
		Description?: string | null;
		ImageId?: string | null;

		/** Describes the root volume for a WorkSpace bundle. */
		RootStorage?: RootStorage;

		/** Describes the user storage for a WorkSpace bundle. */
		UserStorage?: UserStorage;

		/** Describes the compute type. */
		ComputeType?: ComputeType;
		LastUpdatedTime?: Date | null;
	}

	/** Describes a WorkSpace bundle. */
	export interface WorkspaceBundleFormProperties {
		BundleId: FormControl<string | null | undefined>,

		/** Min length: 1 */
		Name: FormControl<string | null | undefined>,
		Owner: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
		ImageId: FormControl<string | null | undefined>,
		LastUpdatedTime: FormControl<Date | null | undefined>,
	}
	export function CreateWorkspaceBundleFormGroup() {
		return new FormGroup<WorkspaceBundleFormProperties>({
			BundleId: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^wsb-[0-9a-z]{8,63}$')]),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1)]),
			Owner: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			ImageId: new FormControl<string | null | undefined>(undefined, [Validators.pattern('wsi-[0-9a-z]{9,63}$')]),
			LastUpdatedTime: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/** Describes the root volume for a WorkSpace bundle. */
	export interface RootStorage {

		/** Min length: 1 */
		Capacity?: string | null;
	}

	/** Describes the root volume for a WorkSpace bundle. */
	export interface RootStorageFormProperties {

		/** Min length: 1 */
		Capacity: FormControl<string | null | undefined>,
	}
	export function CreateRootStorageFormGroup() {
		return new FormGroup<RootStorageFormProperties>({
			Capacity: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1)]),
		});

	}


	/** Describes the user storage for a WorkSpace bundle. */
	export interface UserStorage {

		/** Min length: 1 */
		Capacity?: string | null;
	}

	/** Describes the user storage for a WorkSpace bundle. */
	export interface UserStorageFormProperties {

		/** Min length: 1 */
		Capacity: FormControl<string | null | undefined>,
	}
	export function CreateUserStorageFormGroup() {
		return new FormGroup<UserStorageFormProperties>({
			Capacity: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1)]),
		});

	}


	/** Describes the compute type. */
	export interface ComputeType {
		Name?: WorkspacePropertiesComputeTypeName | null;
	}

	/** Describes the compute type. */
	export interface ComputeTypeFormProperties {
		Name: FormControl<WorkspacePropertiesComputeTypeName | null | undefined>,
	}
	export function CreateComputeTypeFormGroup() {
		return new FormGroup<ComputeTypeFormProperties>({
			Name: new FormControl<WorkspacePropertiesComputeTypeName | null | undefined>(undefined),
		});

	}

	export interface DescribeWorkspaceBundlesRequest {

		/**
		 * Minimum items: 1
		 * Maximum items: 25
		 */
		BundleIds?: Array<string>;
		Owner?: string | null;

		/**
		 * Max length: 63
		 * Min length: 1
		 */
		NextToken?: string | null;
	}
	export interface DescribeWorkspaceBundlesRequestFormProperties {
		Owner: FormControl<string | null | undefined>,

		/**
		 * Max length: 63
		 * Min length: 1
		 */
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeWorkspaceBundlesRequestFormGroup() {
		return new FormGroup<DescribeWorkspaceBundlesRequestFormProperties>({
			Owner: new FormControl<string | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(63)]),
		});

	}

	export interface DescribeWorkspaceDirectoriesResult {
		Directories?: Array<WorkspaceDirectory>;

		/**
		 * Max length: 63
		 * Min length: 1
		 */
		NextToken?: string | null;
	}
	export interface DescribeWorkspaceDirectoriesResultFormProperties {

		/**
		 * Max length: 63
		 * Min length: 1
		 */
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeWorkspaceDirectoriesResultFormGroup() {
		return new FormGroup<DescribeWorkspaceDirectoriesResultFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(63)]),
		});

	}


	/** Describes a directory that is used with Amazon WorkSpaces. */
	export interface WorkspaceDirectory {

		/**
		 * Max length: 65
		 * Min length: 10
		 */
		DirectoryId?: string | null;
		Alias?: string | null;
		DirectoryName?: string | null;

		/**
		 * Max length: 20
		 * Min length: 1
		 */
		RegistrationCode?: string | null;

		/** Maximum items: 2 */
		SubnetIds?: Array<string>;
		DnsIpAddresses?: Array<string>;

		/**
		 * Max length: 63
		 * Min length: 1
		 */
		CustomerUserName?: string | null;
		IamRoleId?: string | null;
		DirectoryType?: WorkspaceDirectoryDirectoryType | null;

		/**
		 * Max length: 20
		 * Min length: 11
		 */
		WorkspaceSecurityGroupId?: string | null;
		State?: WorkspaceDirectoryState | null;

		/** Describes the default values that are used to create WorkSpaces. For more information, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/update-directory-details.html">Update Directory Details for Your WorkSpaces</a>. */
		WorkspaceCreationProperties?: DefaultWorkspaceCreationProperties;
		ipGroupIds?: Array<string>;

		/** The device types and operating systems that can be used to access a WorkSpace. For more information, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/workspaces-network-requirements.html">Amazon WorkSpaces Client Network Requirements</a>. */
		WorkspaceAccessProperties?: WorkspaceAccessProperties;
		Tenancy?: WorkspaceDirectoryTenancy | null;

		/** Describes the self-service permissions for a directory. For more information, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/enable-user-self-service-workspace-management.html">Enable Self-Service WorkSpace Management Capabilities for Your Users</a>. */
		SelfservicePermissions?: SelfservicePermissions;
	}

	/** Describes a directory that is used with Amazon WorkSpaces. */
	export interface WorkspaceDirectoryFormProperties {

		/**
		 * Max length: 65
		 * Min length: 10
		 */
		DirectoryId: FormControl<string | null | undefined>,
		Alias: FormControl<string | null | undefined>,
		DirectoryName: FormControl<string | null | undefined>,

		/**
		 * Max length: 20
		 * Min length: 1
		 */
		RegistrationCode: FormControl<string | null | undefined>,

		/**
		 * Max length: 63
		 * Min length: 1
		 */
		CustomerUserName: FormControl<string | null | undefined>,
		IamRoleId: FormControl<string | null | undefined>,
		DirectoryType: FormControl<WorkspaceDirectoryDirectoryType | null | undefined>,

		/**
		 * Max length: 20
		 * Min length: 11
		 */
		WorkspaceSecurityGroupId: FormControl<string | null | undefined>,
		State: FormControl<WorkspaceDirectoryState | null | undefined>,
		Tenancy: FormControl<WorkspaceDirectoryTenancy | null | undefined>,
	}
	export function CreateWorkspaceDirectoryFormGroup() {
		return new FormGroup<WorkspaceDirectoryFormProperties>({
			DirectoryId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(10), Validators.maxLength(65), Validators.pattern('^d-[0-9a-f]{8,63}$')]),
			Alias: new FormControl<string | null | undefined>(undefined),
			DirectoryName: new FormControl<string | null | undefined>(undefined),
			RegistrationCode: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(20)]),
			CustomerUserName: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(63)]),
			IamRoleId: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^arn:aws:[A-Za-z0-9][A-za-z0-9_/.-]{0,62}:[A-za-z0-9_/.-]{0,63}:[A-za-z0-9_/.-]{0,63}:[A-Za-z0-9][A-za-z0-9_/.-]{0,127}$')]),
			DirectoryType: new FormControl<WorkspaceDirectoryDirectoryType | null | undefined>(undefined),
			WorkspaceSecurityGroupId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(11), Validators.maxLength(20), Validators.pattern('^(sg-([0-9a-f]{8}|[0-9a-f]{17}))$')]),
			State: new FormControl<WorkspaceDirectoryState | null | undefined>(undefined),
			Tenancy: new FormControl<WorkspaceDirectoryTenancy | null | undefined>(undefined),
		});

	}

	export enum WorkspaceDirectoryDirectoryType { SIMPLE_AD = 0, AD_CONNECTOR = 1 }

	export enum WorkspaceDirectoryState { REGISTERING = 0, REGISTERED = 1, DEREGISTERING = 2, DEREGISTERED = 3, ERROR = 4 }


	/** Describes the default values that are used to create WorkSpaces. For more information, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/update-directory-details.html">Update Directory Details for Your WorkSpaces</a>. */
	export interface DefaultWorkspaceCreationProperties {
		EnableWorkDocs?: boolean | null;
		EnableInternetAccess?: boolean | null;
		DefaultOu?: string | null;

		/**
		 * Max length: 20
		 * Min length: 11
		 */
		CustomSecurityGroupId?: string | null;
		UserEnabledAsLocalAdministrator?: boolean | null;
		EnableMaintenanceMode?: boolean | null;
	}

	/** Describes the default values that are used to create WorkSpaces. For more information, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/update-directory-details.html">Update Directory Details for Your WorkSpaces</a>. */
	export interface DefaultWorkspaceCreationPropertiesFormProperties {
		EnableWorkDocs: FormControl<boolean | null | undefined>,
		EnableInternetAccess: FormControl<boolean | null | undefined>,
		DefaultOu: FormControl<string | null | undefined>,

		/**
		 * Max length: 20
		 * Min length: 11
		 */
		CustomSecurityGroupId: FormControl<string | null | undefined>,
		UserEnabledAsLocalAdministrator: FormControl<boolean | null | undefined>,
		EnableMaintenanceMode: FormControl<boolean | null | undefined>,
	}
	export function CreateDefaultWorkspaceCreationPropertiesFormGroup() {
		return new FormGroup<DefaultWorkspaceCreationPropertiesFormProperties>({
			EnableWorkDocs: new FormControl<boolean | null | undefined>(undefined),
			EnableInternetAccess: new FormControl<boolean | null | undefined>(undefined),
			DefaultOu: new FormControl<string | null | undefined>(undefined),
			CustomSecurityGroupId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(11), Validators.maxLength(20), Validators.pattern('^(sg-([0-9a-f]{8}|[0-9a-f]{17}))$')]),
			UserEnabledAsLocalAdministrator: new FormControl<boolean | null | undefined>(undefined),
			EnableMaintenanceMode: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** The device types and operating systems that can be used to access a WorkSpace. For more information, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/workspaces-network-requirements.html">Amazon WorkSpaces Client Network Requirements</a>. */
	export interface WorkspaceAccessProperties {
		DeviceTypeWindows?: WorkspaceAccessPropertiesDeviceTypeWindows | null;
		DeviceTypeOsx?: WorkspaceAccessPropertiesDeviceTypeWindows | null;
		DeviceTypeWeb?: WorkspaceAccessPropertiesDeviceTypeWindows | null;
		DeviceTypeIos?: WorkspaceAccessPropertiesDeviceTypeWindows | null;
		DeviceTypeAndroid?: WorkspaceAccessPropertiesDeviceTypeWindows | null;
		DeviceTypeChromeOs?: WorkspaceAccessPropertiesDeviceTypeWindows | null;
		DeviceTypeZeroClient?: WorkspaceAccessPropertiesDeviceTypeWindows | null;
	}

	/** The device types and operating systems that can be used to access a WorkSpace. For more information, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/workspaces-network-requirements.html">Amazon WorkSpaces Client Network Requirements</a>. */
	export interface WorkspaceAccessPropertiesFormProperties {
		DeviceTypeWindows: FormControl<WorkspaceAccessPropertiesDeviceTypeWindows | null | undefined>,
		DeviceTypeOsx: FormControl<WorkspaceAccessPropertiesDeviceTypeWindows | null | undefined>,
		DeviceTypeWeb: FormControl<WorkspaceAccessPropertiesDeviceTypeWindows | null | undefined>,
		DeviceTypeIos: FormControl<WorkspaceAccessPropertiesDeviceTypeWindows | null | undefined>,
		DeviceTypeAndroid: FormControl<WorkspaceAccessPropertiesDeviceTypeWindows | null | undefined>,
		DeviceTypeChromeOs: FormControl<WorkspaceAccessPropertiesDeviceTypeWindows | null | undefined>,
		DeviceTypeZeroClient: FormControl<WorkspaceAccessPropertiesDeviceTypeWindows | null | undefined>,
	}
	export function CreateWorkspaceAccessPropertiesFormGroup() {
		return new FormGroup<WorkspaceAccessPropertiesFormProperties>({
			DeviceTypeWindows: new FormControl<WorkspaceAccessPropertiesDeviceTypeWindows | null | undefined>(undefined),
			DeviceTypeOsx: new FormControl<WorkspaceAccessPropertiesDeviceTypeWindows | null | undefined>(undefined),
			DeviceTypeWeb: new FormControl<WorkspaceAccessPropertiesDeviceTypeWindows | null | undefined>(undefined),
			DeviceTypeIos: new FormControl<WorkspaceAccessPropertiesDeviceTypeWindows | null | undefined>(undefined),
			DeviceTypeAndroid: new FormControl<WorkspaceAccessPropertiesDeviceTypeWindows | null | undefined>(undefined),
			DeviceTypeChromeOs: new FormControl<WorkspaceAccessPropertiesDeviceTypeWindows | null | undefined>(undefined),
			DeviceTypeZeroClient: new FormControl<WorkspaceAccessPropertiesDeviceTypeWindows | null | undefined>(undefined),
		});

	}

	export enum WorkspaceAccessPropertiesDeviceTypeWindows { ALLOW = 0, DENY = 1 }

	export enum WorkspaceDirectoryTenancy { DEDICATED = 0, SHARED = 1 }


	/** Describes the self-service permissions for a directory. For more information, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/enable-user-self-service-workspace-management.html">Enable Self-Service WorkSpace Management Capabilities for Your Users</a>. */
	export interface SelfservicePermissions {
		RestartWorkspace?: DescribeAccountResultDedicatedTenancySupport | null;
		IncreaseVolumeSize?: DescribeAccountResultDedicatedTenancySupport | null;
		ChangeComputeType?: DescribeAccountResultDedicatedTenancySupport | null;
		SwitchRunningMode?: DescribeAccountResultDedicatedTenancySupport | null;
		RebuildWorkspace?: DescribeAccountResultDedicatedTenancySupport | null;
	}

	/** Describes the self-service permissions for a directory. For more information, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/enable-user-self-service-workspace-management.html">Enable Self-Service WorkSpace Management Capabilities for Your Users</a>. */
	export interface SelfservicePermissionsFormProperties {
		RestartWorkspace: FormControl<DescribeAccountResultDedicatedTenancySupport | null | undefined>,
		IncreaseVolumeSize: FormControl<DescribeAccountResultDedicatedTenancySupport | null | undefined>,
		ChangeComputeType: FormControl<DescribeAccountResultDedicatedTenancySupport | null | undefined>,
		SwitchRunningMode: FormControl<DescribeAccountResultDedicatedTenancySupport | null | undefined>,
		RebuildWorkspace: FormControl<DescribeAccountResultDedicatedTenancySupport | null | undefined>,
	}
	export function CreateSelfservicePermissionsFormGroup() {
		return new FormGroup<SelfservicePermissionsFormProperties>({
			RestartWorkspace: new FormControl<DescribeAccountResultDedicatedTenancySupport | null | undefined>(undefined),
			IncreaseVolumeSize: new FormControl<DescribeAccountResultDedicatedTenancySupport | null | undefined>(undefined),
			ChangeComputeType: new FormControl<DescribeAccountResultDedicatedTenancySupport | null | undefined>(undefined),
			SwitchRunningMode: new FormControl<DescribeAccountResultDedicatedTenancySupport | null | undefined>(undefined),
			RebuildWorkspace: new FormControl<DescribeAccountResultDedicatedTenancySupport | null | undefined>(undefined),
		});

	}

	export interface DescribeWorkspaceDirectoriesRequest {

		/**
		 * Minimum items: 1
		 * Maximum items: 25
		 */
		DirectoryIds?: Array<string>;

		/**
		 * Minimum: 1
		 * Maximum: 25
		 */
		Limit?: number | null;

		/**
		 * Max length: 63
		 * Min length: 1
		 */
		NextToken?: string | null;
	}
	export interface DescribeWorkspaceDirectoriesRequestFormProperties {

		/**
		 * Minimum: 1
		 * Maximum: 25
		 */
		Limit: FormControl<number | null | undefined>,

		/**
		 * Max length: 63
		 * Min length: 1
		 */
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeWorkspaceDirectoriesRequestFormGroup() {
		return new FormGroup<DescribeWorkspaceDirectoriesRequestFormProperties>({
			Limit: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(25)]),
			NextToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(63)]),
		});

	}

	export interface DescribeWorkspaceImagesResult {
		Images?: Array<WorkspaceImage>;

		/**
		 * Max length: 63
		 * Min length: 1
		 */
		NextToken?: string | null;
	}
	export interface DescribeWorkspaceImagesResultFormProperties {

		/**
		 * Max length: 63
		 * Min length: 1
		 */
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeWorkspaceImagesResultFormGroup() {
		return new FormGroup<DescribeWorkspaceImagesResultFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(63)]),
		});

	}


	/** Describes a WorkSpace image. */
	export interface WorkspaceImage {
		ImageId?: string | null;

		/**
		 * Max length: 64
		 * Min length: 1
		 */
		Name?: string | null;

		/**
		 * Max length: 256
		 * Min length: 1
		 */
		Description?: string | null;

		/** The operating system that the image is running. */
		OperatingSystem?: OperatingSystem;
		State?: WorkspaceImageState | null;
		RequiredTenancy?: WorkspaceImageRequiredTenancy | null;
		ErrorCode?: string | null;
		ErrorMessage?: string | null;
	}

	/** Describes a WorkSpace image. */
	export interface WorkspaceImageFormProperties {
		ImageId: FormControl<string | null | undefined>,

		/**
		 * Max length: 64
		 * Min length: 1
		 */
		Name: FormControl<string | null | undefined>,

		/**
		 * Max length: 256
		 * Min length: 1
		 */
		Description: FormControl<string | null | undefined>,
		State: FormControl<WorkspaceImageState | null | undefined>,
		RequiredTenancy: FormControl<WorkspaceImageRequiredTenancy | null | undefined>,
		ErrorCode: FormControl<string | null | undefined>,
		ErrorMessage: FormControl<string | null | undefined>,
	}
	export function CreateWorkspaceImageFormGroup() {
		return new FormGroup<WorkspaceImageFormProperties>({
			ImageId: new FormControl<string | null | undefined>(undefined, [Validators.pattern('wsi-[0-9a-z]{9,63}$')]),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(64), Validators.pattern('^[a-zA-Z0-9_./()\\-]+$')]),
			Description: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(256), Validators.pattern('^[a-zA-Z0-9_./() -]+$')]),
			State: new FormControl<WorkspaceImageState | null | undefined>(undefined),
			RequiredTenancy: new FormControl<WorkspaceImageRequiredTenancy | null | undefined>(undefined),
			ErrorCode: new FormControl<string | null | undefined>(undefined),
			ErrorMessage: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The operating system that the image is running. */
	export interface OperatingSystem {
		Type?: OperatingSystemType | null;
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

	export enum OperatingSystemType { WINDOWS = 0, LINUX = 1 }

	export enum WorkspaceImageState { AVAILABLE = 0, PENDING = 1, ERROR = 2 }

	export enum WorkspaceImageRequiredTenancy { DEFAULT = 0, DEDICATED = 1 }

	export interface DescribeWorkspaceImagesRequest {

		/**
		 * Minimum items: 1
		 * Maximum items: 25
		 */
		ImageIds?: Array<string>;

		/**
		 * Max length: 63
		 * Min length: 1
		 */
		NextToken?: string | null;

		/**
		 * Minimum: 1
		 * Maximum: 25
		 */
		MaxResults?: number | null;
	}
	export interface DescribeWorkspaceImagesRequestFormProperties {

		/**
		 * Max length: 63
		 * Min length: 1
		 */
		NextToken: FormControl<string | null | undefined>,

		/**
		 * Minimum: 1
		 * Maximum: 25
		 */
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateDescribeWorkspaceImagesRequestFormGroup() {
		return new FormGroup<DescribeWorkspaceImagesRequestFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(63)]),
			MaxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(25)]),
		});

	}

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
		SnapshotTime?: Date | null;
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
			WorkspaceId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^ws-[0-9a-z]{8,63}$')]),
		});

	}

	export interface DescribeWorkspacesResult {
		Workspaces?: Array<Workspace>;

		/**
		 * Max length: 63
		 * Min length: 1
		 */
		NextToken?: string | null;
	}
	export interface DescribeWorkspacesResultFormProperties {

		/**
		 * Max length: 63
		 * Min length: 1
		 */
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeWorkspacesResultFormGroup() {
		return new FormGroup<DescribeWorkspacesResultFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(63)]),
		});

	}

	export interface DescribeWorkspacesRequest {

		/**
		 * Minimum items: 1
		 * Maximum items: 25
		 */
		WorkspaceIds?: Array<string>;

		/**
		 * Max length: 65
		 * Min length: 10
		 */
		DirectoryId?: string | null;

		/**
		 * Max length: 63
		 * Min length: 1
		 */
		UserName?: string | null;
		BundleId?: string | null;

		/**
		 * Minimum: 1
		 * Maximum: 25
		 */
		Limit?: number | null;

		/**
		 * Max length: 63
		 * Min length: 1
		 */
		NextToken?: string | null;
	}
	export interface DescribeWorkspacesRequestFormProperties {

		/**
		 * Max length: 65
		 * Min length: 10
		 */
		DirectoryId: FormControl<string | null | undefined>,

		/**
		 * Max length: 63
		 * Min length: 1
		 */
		UserName: FormControl<string | null | undefined>,
		BundleId: FormControl<string | null | undefined>,

		/**
		 * Minimum: 1
		 * Maximum: 25
		 */
		Limit: FormControl<number | null | undefined>,

		/**
		 * Max length: 63
		 * Min length: 1
		 */
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeWorkspacesRequestFormGroup() {
		return new FormGroup<DescribeWorkspacesRequestFormProperties>({
			DirectoryId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(10), Validators.maxLength(65), Validators.pattern('^d-[0-9a-f]{8,63}$')]),
			UserName: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(63)]),
			BundleId: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^wsb-[0-9a-z]{8,63}$')]),
			Limit: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(25)]),
			NextToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(63)]),
		});

	}

	export interface DescribeWorkspacesConnectionStatusResult {
		WorkspacesConnectionStatus?: Array<WorkspaceConnectionStatus>;

		/**
		 * Max length: 63
		 * Min length: 1
		 */
		NextToken?: string | null;
	}
	export interface DescribeWorkspacesConnectionStatusResultFormProperties {

		/**
		 * Max length: 63
		 * Min length: 1
		 */
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeWorkspacesConnectionStatusResultFormGroup() {
		return new FormGroup<DescribeWorkspacesConnectionStatusResultFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(63)]),
		});

	}


	/** Describes the connection status of a WorkSpace. */
	export interface WorkspaceConnectionStatus {
		WorkspaceId?: string | null;
		ConnectionState?: WorkspaceConnectionStatusConnectionState | null;
		ConnectionStateCheckTimestamp?: Date | null;
		LastKnownUserConnectionTimestamp?: Date | null;
	}

	/** Describes the connection status of a WorkSpace. */
	export interface WorkspaceConnectionStatusFormProperties {
		WorkspaceId: FormControl<string | null | undefined>,
		ConnectionState: FormControl<WorkspaceConnectionStatusConnectionState | null | undefined>,
		ConnectionStateCheckTimestamp: FormControl<Date | null | undefined>,
		LastKnownUserConnectionTimestamp: FormControl<Date | null | undefined>,
	}
	export function CreateWorkspaceConnectionStatusFormGroup() {
		return new FormGroup<WorkspaceConnectionStatusFormProperties>({
			WorkspaceId: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^ws-[0-9a-z]{8,63}$')]),
			ConnectionState: new FormControl<WorkspaceConnectionStatusConnectionState | null | undefined>(undefined),
			ConnectionStateCheckTimestamp: new FormControl<Date | null | undefined>(undefined),
			LastKnownUserConnectionTimestamp: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export enum WorkspaceConnectionStatusConnectionState { CONNECTED = 0, DISCONNECTED = 1, UNKNOWN = 2 }

	export interface DescribeWorkspacesConnectionStatusRequest {

		/**
		 * Minimum items: 1
		 * Maximum items: 25
		 */
		WorkspaceIds?: Array<string>;

		/**
		 * Max length: 63
		 * Min length: 1
		 */
		NextToken?: string | null;
	}
	export interface DescribeWorkspacesConnectionStatusRequestFormProperties {

		/**
		 * Max length: 63
		 * Min length: 1
		 */
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeWorkspacesConnectionStatusRequestFormGroup() {
		return new FormGroup<DescribeWorkspacesConnectionStatusRequestFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(63)]),
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

		/**
		 * Required
		 * Max length: 65
		 * Min length: 10
		 */
		DirectoryId: string;

		/** Required */
		GroupIds: Array<string>;
	}
	export interface DisassociateIpGroupsRequestFormProperties {

		/**
		 * Required
		 * Max length: 65
		 * Min length: 10
		 */
		DirectoryId: FormControl<string | null | undefined>,
	}
	export function CreateDisassociateIpGroupsRequestFormGroup() {
		return new FormGroup<DisassociateIpGroupsRequestFormProperties>({
			DirectoryId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(10), Validators.maxLength(65), Validators.pattern('^d-[0-9a-f]{8,63}$')]),
		});

	}

	export interface ImportWorkspaceImageResult {
		ImageId?: string | null;
	}
	export interface ImportWorkspaceImageResultFormProperties {
		ImageId: FormControl<string | null | undefined>,
	}
	export function CreateImportWorkspaceImageResultFormGroup() {
		return new FormGroup<ImportWorkspaceImageResultFormProperties>({
			ImageId: new FormControl<string | null | undefined>(undefined, [Validators.pattern('wsi-[0-9a-z]{9,63}$')]),
		});

	}

	export interface ImportWorkspaceImageRequest {

		/** Required */
		Ec2ImageId: string;

		/** Required */
		IngestionProcess: ImportWorkspaceImageRequestIngestionProcess;

		/**
		 * Required
		 * Max length: 64
		 * Min length: 1
		 */
		ImageName: string;

		/**
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		ImageDescription: string;
		Tags?: Array<Tag>;
	}
	export interface ImportWorkspaceImageRequestFormProperties {

		/** Required */
		Ec2ImageId: FormControl<string | null | undefined>,

		/** Required */
		IngestionProcess: FormControl<ImportWorkspaceImageRequestIngestionProcess | null | undefined>,

		/**
		 * Required
		 * Max length: 64
		 * Min length: 1
		 */
		ImageName: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		ImageDescription: FormControl<string | null | undefined>,
	}
	export function CreateImportWorkspaceImageRequestFormGroup() {
		return new FormGroup<ImportWorkspaceImageRequestFormProperties>({
			Ec2ImageId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^ami\-([a-f0-9]{8}|[a-f0-9]{17})$')]),
			IngestionProcess: new FormControl<ImportWorkspaceImageRequestIngestionProcess | null | undefined>(undefined, [Validators.required]),
			ImageName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(64), Validators.pattern('^[a-zA-Z0-9_./()\\-]+$')]),
			ImageDescription: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(256), Validators.pattern('^[a-zA-Z0-9_./() -]+$')]),
		});

	}

	export enum ImportWorkspaceImageRequestIngestionProcess { BYOL_REGULAR = 0, BYOL_GRAPHICS = 1, BYOL_GRAPHICSPRO = 2 }

	export interface ListAvailableManagementCidrRangesResult {
		ManagementCidrRanges?: Array<string>;

		/**
		 * Max length: 63
		 * Min length: 1
		 */
		NextToken?: string | null;
	}
	export interface ListAvailableManagementCidrRangesResultFormProperties {

		/**
		 * Max length: 63
		 * Min length: 1
		 */
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListAvailableManagementCidrRangesResultFormGroup() {
		return new FormGroup<ListAvailableManagementCidrRangesResultFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(63)]),
		});

	}

	export interface ListAvailableManagementCidrRangesRequest {

		/** Required */
		ManagementCidrRangeConstraint: string;

		/**
		 * Minimum: 1
		 * Maximum: 5
		 */
		MaxResults?: number | null;

		/**
		 * Max length: 63
		 * Min length: 1
		 */
		NextToken?: string | null;
	}
	export interface ListAvailableManagementCidrRangesRequestFormProperties {

		/** Required */
		ManagementCidrRangeConstraint: FormControl<string | null | undefined>,

		/**
		 * Minimum: 1
		 * Maximum: 5
		 */
		MaxResults: FormControl<number | null | undefined>,

		/**
		 * Max length: 63
		 * Min length: 1
		 */
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListAvailableManagementCidrRangesRequestFormGroup() {
		return new FormGroup<ListAvailableManagementCidrRangesRequestFormProperties>({
			ManagementCidrRangeConstraint: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])(\/(3[0-2]|[1-2][0-9]|[0-9]))$')]),
			MaxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(5)]),
			NextToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(63)]),
		});

	}

	export interface MigrateWorkspaceResult {
		SourceWorkspaceId?: string | null;
		TargetWorkspaceId?: string | null;
	}
	export interface MigrateWorkspaceResultFormProperties {
		SourceWorkspaceId: FormControl<string | null | undefined>,
		TargetWorkspaceId: FormControl<string | null | undefined>,
	}
	export function CreateMigrateWorkspaceResultFormGroup() {
		return new FormGroup<MigrateWorkspaceResultFormProperties>({
			SourceWorkspaceId: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^ws-[0-9a-z]{8,63}$')]),
			TargetWorkspaceId: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^ws-[0-9a-z]{8,63}$')]),
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
			SourceWorkspaceId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^ws-[0-9a-z]{8,63}$')]),
			BundleId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^wsb-[0-9a-z]{8,63}$')]),
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
		DedicatedTenancySupport?: ModifyAccountRequestDedicatedTenancySupport | null;
		DedicatedTenancyManagementCidrRange?: string | null;
	}
	export interface ModifyAccountRequestFormProperties {
		DedicatedTenancySupport: FormControl<ModifyAccountRequestDedicatedTenancySupport | null | undefined>,
		DedicatedTenancyManagementCidrRange: FormControl<string | null | undefined>,
	}
	export function CreateModifyAccountRequestFormGroup() {
		return new FormGroup<ModifyAccountRequestFormProperties>({
			DedicatedTenancySupport: new FormControl<ModifyAccountRequestDedicatedTenancySupport | null | undefined>(undefined),
			DedicatedTenancyManagementCidrRange: new FormControl<string | null | undefined>(undefined, [Validators.pattern('(^([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])\.([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])\.0\.0)(\/(16$))$')]),
		});

	}

	export enum ModifyAccountRequestDedicatedTenancySupport { ENABLED = 0 }

	export interface ModifyClientPropertiesResult {
	}
	export interface ModifyClientPropertiesResultFormProperties {
	}
	export function CreateModifyClientPropertiesResultFormGroup() {
		return new FormGroup<ModifyClientPropertiesResultFormProperties>({
		});

	}

	export interface ModifyClientPropertiesRequest {

		/**
		 * Required
		 * Min length: 1
		 */
		ResourceId: string;

		/**
		 * Describes an Amazon WorkSpaces client.
		 * Required
		 */
		ClientProperties: ClientProperties;
	}
	export interface ModifyClientPropertiesRequestFormProperties {

		/**
		 * Required
		 * Min length: 1
		 */
		ResourceId: FormControl<string | null | undefined>,
	}
	export function CreateModifyClientPropertiesRequestFormGroup() {
		return new FormGroup<ModifyClientPropertiesRequestFormProperties>({
			ResourceId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1)]),
		});

	}

	export interface ModifySelfservicePermissionsResult {
	}
	export interface ModifySelfservicePermissionsResultFormProperties {
	}
	export function CreateModifySelfservicePermissionsResultFormGroup() {
		return new FormGroup<ModifySelfservicePermissionsResultFormProperties>({
		});

	}

	export interface ModifySelfservicePermissionsRequest {

		/**
		 * Required
		 * Max length: 65
		 * Min length: 10
		 */
		ResourceId: string;

		/**
		 * Describes the self-service permissions for a directory. For more information, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/enable-user-self-service-workspace-management.html">Enable Self-Service WorkSpace Management Capabilities for Your Users</a>.
		 * Required
		 */
		SelfservicePermissions: SelfservicePermissions;
	}
	export interface ModifySelfservicePermissionsRequestFormProperties {

		/**
		 * Required
		 * Max length: 65
		 * Min length: 10
		 */
		ResourceId: FormControl<string | null | undefined>,
	}
	export function CreateModifySelfservicePermissionsRequestFormGroup() {
		return new FormGroup<ModifySelfservicePermissionsRequestFormProperties>({
			ResourceId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(10), Validators.maxLength(65), Validators.pattern('^d-[0-9a-f]{8,63}$')]),
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

		/**
		 * Required
		 * Max length: 65
		 * Min length: 10
		 */
		ResourceId: string;

		/**
		 * The device types and operating systems that can be used to access a WorkSpace. For more information, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/workspaces-network-requirements.html">Amazon WorkSpaces Client Network Requirements</a>.
		 * Required
		 */
		WorkspaceAccessProperties: WorkspaceAccessProperties;
	}
	export interface ModifyWorkspaceAccessPropertiesRequestFormProperties {

		/**
		 * Required
		 * Max length: 65
		 * Min length: 10
		 */
		ResourceId: FormControl<string | null | undefined>,
	}
	export function CreateModifyWorkspaceAccessPropertiesRequestFormGroup() {
		return new FormGroup<ModifyWorkspaceAccessPropertiesRequestFormProperties>({
			ResourceId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(10), Validators.maxLength(65), Validators.pattern('^d-[0-9a-f]{8,63}$')]),
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

		/**
		 * Required
		 * Max length: 65
		 * Min length: 10
		 */
		ResourceId: string;

		/**
		 * Describes the default properties that are used for creating WorkSpaces. For more information, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/update-directory-details.html">Update Directory Details for Your WorkSpaces</a>.
		 * Required
		 */
		WorkspaceCreationProperties: WorkspaceCreationProperties;
	}
	export interface ModifyWorkspaceCreationPropertiesRequestFormProperties {

		/**
		 * Required
		 * Max length: 65
		 * Min length: 10
		 */
		ResourceId: FormControl<string | null | undefined>,
	}
	export function CreateModifyWorkspaceCreationPropertiesRequestFormGroup() {
		return new FormGroup<ModifyWorkspaceCreationPropertiesRequestFormProperties>({
			ResourceId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(10), Validators.maxLength(65), Validators.pattern('^d-[0-9a-f]{8,63}$')]),
		});

	}


	/** Describes the default properties that are used for creating WorkSpaces. For more information, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/update-directory-details.html">Update Directory Details for Your WorkSpaces</a>.  */
	export interface WorkspaceCreationProperties {
		EnableInternetAccess?: boolean | null;
		DefaultOu?: string | null;

		/**
		 * Max length: 20
		 * Min length: 11
		 */
		CustomSecurityGroupId?: string | null;
		UserEnabledAsLocalAdministrator?: boolean | null;
		EnableMaintenanceMode?: boolean | null;
	}

	/** Describes the default properties that are used for creating WorkSpaces. For more information, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/update-directory-details.html">Update Directory Details for Your WorkSpaces</a>.  */
	export interface WorkspaceCreationPropertiesFormProperties {
		EnableInternetAccess: FormControl<boolean | null | undefined>,
		DefaultOu: FormControl<string | null | undefined>,

		/**
		 * Max length: 20
		 * Min length: 11
		 */
		CustomSecurityGroupId: FormControl<string | null | undefined>,
		UserEnabledAsLocalAdministrator: FormControl<boolean | null | undefined>,
		EnableMaintenanceMode: FormControl<boolean | null | undefined>,
	}
	export function CreateWorkspaceCreationPropertiesFormGroup() {
		return new FormGroup<WorkspaceCreationPropertiesFormProperties>({
			EnableInternetAccess: new FormControl<boolean | null | undefined>(undefined),
			DefaultOu: new FormControl<string | null | undefined>(undefined),
			CustomSecurityGroupId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(11), Validators.maxLength(20), Validators.pattern('^(sg-([0-9a-f]{8}|[0-9a-f]{17}))$')]),
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

		/**
		 * Describes a WorkSpace.
		 * Required
		 */
		WorkspaceProperties: WorkspaceProperties;
	}
	export interface ModifyWorkspacePropertiesRequestFormProperties {

		/** Required */
		WorkspaceId: FormControl<string | null | undefined>,
	}
	export function CreateModifyWorkspacePropertiesRequestFormGroup() {
		return new FormGroup<ModifyWorkspacePropertiesRequestFormProperties>({
			WorkspaceId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^ws-[0-9a-z]{8,63}$')]),
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
		WorkspaceState: ModifyWorkspaceStateRequestWorkspaceState;
	}
	export interface ModifyWorkspaceStateRequestFormProperties {

		/** Required */
		WorkspaceId: FormControl<string | null | undefined>,

		/** Required */
		WorkspaceState: FormControl<ModifyWorkspaceStateRequestWorkspaceState | null | undefined>,
	}
	export function CreateModifyWorkspaceStateRequestFormGroup() {
		return new FormGroup<ModifyWorkspaceStateRequestFormProperties>({
			WorkspaceId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^ws-[0-9a-z]{8,63}$')]),
			WorkspaceState: new FormControl<ModifyWorkspaceStateRequestWorkspaceState | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum ModifyWorkspaceStateRequestWorkspaceState { AVAILABLE = 0, ADMIN_MAINTENANCE = 1 }

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
		WorkspaceId?: string | null;
		ErrorCode?: string | null;
		ErrorMessage?: string | null;
	}

	/** Describes a WorkSpace that could not be rebooted. (<a>RebootWorkspaces</a>), rebuilt (<a>RebuildWorkspaces</a>), restored (<a>RestoreWorkspace</a>), terminated (<a>TerminateWorkspaces</a>), started (<a>StartWorkspaces</a>), or stopped (<a>StopWorkspaces</a>). */
	export interface FailedWorkspaceChangeRequestFormProperties {
		WorkspaceId: FormControl<string | null | undefined>,
		ErrorCode: FormControl<string | null | undefined>,
		ErrorMessage: FormControl<string | null | undefined>,
	}
	export function CreateFailedWorkspaceChangeRequestFormGroup() {
		return new FormGroup<FailedWorkspaceChangeRequestFormProperties>({
			WorkspaceId: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^ws-[0-9a-z]{8,63}$')]),
			ErrorCode: new FormControl<string | null | undefined>(undefined),
			ErrorMessage: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface RebootWorkspacesRequest {

		/**
		 * Required
		 * Minimum items: 1
		 * Maximum items: 25
		 */
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
			WorkspaceId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^ws-[0-9a-z]{8,63}$')]),
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

		/**
		 * Required
		 * Minimum items: 1
		 * Maximum items: 1
		 */
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
			WorkspaceId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^ws-[0-9a-z]{8,63}$')]),
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

		/**
		 * Required
		 * Max length: 65
		 * Min length: 10
		 */
		DirectoryId: string;

		/** Maximum items: 2 */
		SubnetIds?: Array<string>;

		/** Required */
		EnableWorkDocs: boolean;
		EnableSelfService?: boolean | null;
		Tenancy?: WorkspaceDirectoryTenancy | null;
		Tags?: Array<Tag>;
	}
	export interface RegisterWorkspaceDirectoryRequestFormProperties {

		/**
		 * Required
		 * Max length: 65
		 * Min length: 10
		 */
		DirectoryId: FormControl<string | null | undefined>,

		/** Required */
		EnableWorkDocs: FormControl<boolean | null | undefined>,
		EnableSelfService: FormControl<boolean | null | undefined>,
		Tenancy: FormControl<WorkspaceDirectoryTenancy | null | undefined>,
	}
	export function CreateRegisterWorkspaceDirectoryRequestFormGroup() {
		return new FormGroup<RegisterWorkspaceDirectoryRequestFormProperties>({
			DirectoryId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(10), Validators.maxLength(65), Validators.pattern('^d-[0-9a-f]{8,63}$')]),
			EnableWorkDocs: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			EnableSelfService: new FormControl<boolean | null | undefined>(undefined),
			Tenancy: new FormControl<WorkspaceDirectoryTenancy | null | undefined>(undefined),
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
			WorkspaceId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^ws-[0-9a-z]{8,63}$')]),
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
			GroupId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('wsipg-[0-9a-z]{8,63}$')]),
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

		/**
		 * Required
		 * Minimum items: 1
		 * Maximum items: 25
		 */
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
		WorkspaceId?: string | null;
	}

	/** Information used to start a WorkSpace. */
	export interface StartRequestFormProperties {
		WorkspaceId: FormControl<string | null | undefined>,
	}
	export function CreateStartRequestFormGroup() {
		return new FormGroup<StartRequestFormProperties>({
			WorkspaceId: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^ws-[0-9a-z]{8,63}$')]),
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

		/**
		 * Required
		 * Minimum items: 1
		 * Maximum items: 25
		 */
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
		WorkspaceId?: string | null;
	}

	/** Describes the information used to stop a WorkSpace. */
	export interface StopRequestFormProperties {
		WorkspaceId: FormControl<string | null | undefined>,
	}
	export function CreateStopRequestFormGroup() {
		return new FormGroup<StopRequestFormProperties>({
			WorkspaceId: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^ws-[0-9a-z]{8,63}$')]),
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

		/**
		 * Required
		 * Minimum items: 1
		 * Maximum items: 25
		 */
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
			WorkspaceId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^ws-[0-9a-z]{8,63}$')]),
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
			GroupId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('wsipg-[0-9a-z]{8,63}$')]),
		});

	}

	export enum AccessPropertyValue { ALLOW = 0, DENY = 1 }

	export enum DedicatedTenancyModificationStateEnum { PENDING = 0, COMPLETED = 1, FAILED = 2 }

	export enum DedicatedTenancySupportResultEnum { ENABLED = 0, DISABLED = 1 }

	export enum ReconnectEnum { ENABLED = 0, DISABLED = 1 }

	export enum Compute { VALUE = 0, STANDARD = 1, PERFORMANCE = 2, POWER = 3, GRAPHICS = 4, POWERPRO = 5, GRAPHICSPRO = 6 }

	export enum ConnectionState { CONNECTED = 0, DISCONNECTED = 1, UNKNOWN = 2 }

	export enum DedicatedTenancySupportEnum { ENABLED = 0 }

	export enum WorkspaceImageIngestionProcess { BYOL_REGULAR = 0, BYOL_GRAPHICS = 1, BYOL_GRAPHICSPRO = 2 }

	export enum ModificationResourceEnum { ROOT_VOLUME = 0, USER_VOLUME = 1, COMPUTE_TYPE = 2 }

	export enum ModificationStateEnum { UPDATE_INITIATED = 0, UPDATE_IN_PROGRESS = 1 }

	export enum TargetWorkspaceState { AVAILABLE = 0, ADMIN_MAINTENANCE = 1 }

	export enum Tenancy { DEDICATED = 0, SHARED = 1 }

	export enum RunningMode { AUTO_STOP = 0, ALWAYS_ON = 1 }

	export enum WorkspaceDirectoryType { SIMPLE_AD = 0, AD_CONNECTOR = 1 }

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
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
		 * Copies the specified image from the specified Region to the current Region.
		 * Post #X-Amz-Target=WorkspacesService.CopyWorkspaceImage
		 * @return {CopyWorkspaceImageResult} Success
		 */
		CopyWorkspaceImage(requestBody: CopyWorkspaceImageRequest): Observable<CopyWorkspaceImageResult> {
			return this.http.post<CopyWorkspaceImageResult>(this.baseUri + '#X-Amz-Target=WorkspacesService.CopyWorkspaceImage', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
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
		 * Creates the specified tags for the specified WorkSpaces resource.
		 * Post #X-Amz-Target=WorkspacesService.CreateTags
		 * @return {CreateTagsResult} Success
		 */
		CreateTags(requestBody: CreateTagsRequest): Observable<CreateTagsResult> {
			return this.http.post<CreateTagsResult>(this.baseUri + '#X-Amz-Target=WorkspacesService.CreateTags', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Creates one or more WorkSpaces.</p> <p>This operation is asynchronous and returns before the WorkSpaces are created.</p>
		 * Post #X-Amz-Target=WorkspacesService.CreateWorkspaces
		 * @return {CreateWorkspacesResult} Success
		 */
		CreateWorkspaces(requestBody: CreateWorkspacesRequest): Observable<CreateWorkspacesResult> {
			return this.http.post<CreateWorkspacesResult>(this.baseUri + '#X-Amz-Target=WorkspacesService.CreateWorkspaces', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
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
		 * Deletes the specified image from your account. To delete an image, you must first delete any bundles that are associated with the image and un-share the image if it is shared with other accounts.
		 * Post #X-Amz-Target=WorkspacesService.DeleteWorkspaceImage
		 * @return {DeleteWorkspaceImageResult} Success
		 */
		DeleteWorkspaceImage(requestBody: DeleteWorkspaceImageRequest): Observable<DeleteWorkspaceImageResult> {
			return this.http.post<DeleteWorkspaceImageResult>(this.baseUri + '#X-Amz-Target=WorkspacesService.DeleteWorkspaceImage', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deregisters the specified directory. This operation is asynchronous and returns before the WorkSpace directory is deregistered. If any WorkSpaces are registered to this directory, you must remove them before you can deregister the directory.
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
		 * Retrieves a list that describes one or more specified Amazon WorkSpaces clients.
		 * Post #X-Amz-Target=WorkspacesService.DescribeClientProperties
		 * @return {DescribeClientPropertiesResult} Success
		 */
		DescribeClientProperties(requestBody: DescribeClientPropertiesRequest): Observable<DescribeClientPropertiesResult> {
			return this.http.post<DescribeClientPropertiesResult>(this.baseUri + '#X-Amz-Target=WorkspacesService.DescribeClientProperties', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
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
		 * Disassociates the specified IP access control group from the specified directory.
		 * Post #X-Amz-Target=WorkspacesService.DisassociateIpGroups
		 * @return {DisassociateIpGroupsResult} Success
		 */
		DisassociateIpGroups(requestBody: DisassociateIpGroupsRequest): Observable<DisassociateIpGroupsResult> {
			return this.http.post<DisassociateIpGroupsResult>(this.baseUri + '#X-Amz-Target=WorkspacesService.DisassociateIpGroups', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Imports the specified Windows 7 or Windows 10 Bring Your Own License (BYOL) image into Amazon WorkSpaces. The image must be an already licensed EC2 image that is in your AWS account, and you must own the image.
		 * Post #X-Amz-Target=WorkspacesService.ImportWorkspaceImage
		 * @return {ImportWorkspaceImageResult} Success
		 */
		ImportWorkspaceImage(requestBody: ImportWorkspaceImageRequest): Observable<ImportWorkspaceImageResult> {
			return this.http.post<ImportWorkspaceImageResult>(this.baseUri + '#X-Amz-Target=WorkspacesService.ImportWorkspaceImage', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Retrieves a list of IP address ranges, specified as IPv4 CIDR blocks, that you can use for the network management interface when you enable Bring Your Own License (BYOL). </p> <p>The management network interface is connected to a secure Amazon WorkSpaces management network. It is used for interactive streaming of the WorkSpace desktop to Amazon WorkSpaces clients, and to allow Amazon WorkSpaces to manage the WorkSpace.</p>
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
		 * Modifies the properties of the specified Amazon WorkSpaces clients.
		 * Post #X-Amz-Target=WorkspacesService.ModifyClientProperties
		 * @return {ModifyClientPropertiesResult} Success
		 */
		ModifyClientProperties(requestBody: ModifyClientPropertiesRequest): Observable<ModifyClientPropertiesResult> {
			return this.http.post<ModifyClientPropertiesResult>(this.baseUri + '#X-Amz-Target=WorkspacesService.ModifyClientProperties', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
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
		 * Modifies the specified WorkSpace properties.
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
		 * <p>Rebuilds the specified WorkSpace.</p> <p>You cannot rebuild a WorkSpace unless its state is <code>AVAILABLE</code>, <code>ERROR</code>, <code>UNHEALTHY</code>, or <code>STOPPED</code>.</p> <p>Rebuilding a WorkSpace is a potentially destructive action that can result in the loss of data. For more information, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/reset-workspace.html">Rebuild a WorkSpace</a>.</p> <p>This operation is asynchronous and returns before the WorkSpaces have been completely rebuilt.</p>
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
		 * <p>Terminates the specified WorkSpaces.</p> <p>Terminating a WorkSpace is a permanent action and cannot be undone. The user's data is destroyed. If you need to archive any user data, contact Amazon Web Services before terminating the WorkSpace.</p> <p>You can terminate a WorkSpace that is in any state except <code>SUSPENDED</code>.</p> <p>This operation is asynchronous and returns before the WorkSpaces have been completely terminated.</p>
		 * Post #X-Amz-Target=WorkspacesService.TerminateWorkspaces
		 * @return {TerminateWorkspacesResult} Success
		 */
		TerminateWorkspaces(requestBody: TerminateWorkspacesRequest): Observable<TerminateWorkspacesResult> {
			return this.http.post<TerminateWorkspacesResult>(this.baseUri + '#X-Amz-Target=WorkspacesService.TerminateWorkspaces', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Replaces the current rules of the specified IP access control group with the specified rules.
		 * Post #X-Amz-Target=WorkspacesService.UpdateRulesOfIpGroup
		 * @return {UpdateRulesOfIpGroupResult} Success
		 */
		UpdateRulesOfIpGroup(requestBody: UpdateRulesOfIpGroupRequest): Observable<UpdateRulesOfIpGroupResult> {
			return this.http.post<UpdateRulesOfIpGroupResult>(this.baseUri + '#X-Amz-Target=WorkspacesService.UpdateRulesOfIpGroup', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

	export enum AssociateIpGroupsX_Amz_Target { 'WorkspacesService.AssociateIpGroups' = 0 }

	export enum AuthorizeIpRulesX_Amz_Target { 'WorkspacesService.AuthorizeIpRules' = 0 }

	export enum CopyWorkspaceImageX_Amz_Target { 'WorkspacesService.CopyWorkspaceImage' = 0 }

	export enum CreateIpGroupX_Amz_Target { 'WorkspacesService.CreateIpGroup' = 0 }

	export enum CreateTagsX_Amz_Target { 'WorkspacesService.CreateTags' = 0 }

	export enum CreateWorkspacesX_Amz_Target { 'WorkspacesService.CreateWorkspaces' = 0 }

	export enum DeleteIpGroupX_Amz_Target { 'WorkspacesService.DeleteIpGroup' = 0 }

	export enum DeleteTagsX_Amz_Target { 'WorkspacesService.DeleteTags' = 0 }

	export enum DeleteWorkspaceImageX_Amz_Target { 'WorkspacesService.DeleteWorkspaceImage' = 0 }

	export enum DeregisterWorkspaceDirectoryX_Amz_Target { 'WorkspacesService.DeregisterWorkspaceDirectory' = 0 }

	export enum DescribeAccountX_Amz_Target { 'WorkspacesService.DescribeAccount' = 0 }

	export enum DescribeAccountModificationsX_Amz_Target { 'WorkspacesService.DescribeAccountModifications' = 0 }

	export enum DescribeClientPropertiesX_Amz_Target { 'WorkspacesService.DescribeClientProperties' = 0 }

	export enum DescribeIpGroupsX_Amz_Target { 'WorkspacesService.DescribeIpGroups' = 0 }

	export enum DescribeTagsX_Amz_Target { 'WorkspacesService.DescribeTags' = 0 }

	export enum DescribeWorkspaceBundlesX_Amz_Target { 'WorkspacesService.DescribeWorkspaceBundles' = 0 }

	export enum DescribeWorkspaceDirectoriesX_Amz_Target { 'WorkspacesService.DescribeWorkspaceDirectories' = 0 }

	export enum DescribeWorkspaceImagesX_Amz_Target { 'WorkspacesService.DescribeWorkspaceImages' = 0 }

	export enum DescribeWorkspaceSnapshotsX_Amz_Target { 'WorkspacesService.DescribeWorkspaceSnapshots' = 0 }

	export enum DescribeWorkspacesX_Amz_Target { 'WorkspacesService.DescribeWorkspaces' = 0 }

	export enum DescribeWorkspacesConnectionStatusX_Amz_Target { 'WorkspacesService.DescribeWorkspacesConnectionStatus' = 0 }

	export enum DisassociateIpGroupsX_Amz_Target { 'WorkspacesService.DisassociateIpGroups' = 0 }

	export enum ImportWorkspaceImageX_Amz_Target { 'WorkspacesService.ImportWorkspaceImage' = 0 }

	export enum ListAvailableManagementCidrRangesX_Amz_Target { 'WorkspacesService.ListAvailableManagementCidrRanges' = 0 }

	export enum MigrateWorkspaceX_Amz_Target { 'WorkspacesService.MigrateWorkspace' = 0 }

	export enum ModifyAccountX_Amz_Target { 'WorkspacesService.ModifyAccount' = 0 }

	export enum ModifyClientPropertiesX_Amz_Target { 'WorkspacesService.ModifyClientProperties' = 0 }

	export enum ModifySelfservicePermissionsX_Amz_Target { 'WorkspacesService.ModifySelfservicePermissions' = 0 }

	export enum ModifyWorkspaceAccessPropertiesX_Amz_Target { 'WorkspacesService.ModifyWorkspaceAccessProperties' = 0 }

	export enum ModifyWorkspaceCreationPropertiesX_Amz_Target { 'WorkspacesService.ModifyWorkspaceCreationProperties' = 0 }

	export enum ModifyWorkspacePropertiesX_Amz_Target { 'WorkspacesService.ModifyWorkspaceProperties' = 0 }

	export enum ModifyWorkspaceStateX_Amz_Target { 'WorkspacesService.ModifyWorkspaceState' = 0 }

	export enum RebootWorkspacesX_Amz_Target { 'WorkspacesService.RebootWorkspaces' = 0 }

	export enum RebuildWorkspacesX_Amz_Target { 'WorkspacesService.RebuildWorkspaces' = 0 }

	export enum RegisterWorkspaceDirectoryX_Amz_Target { 'WorkspacesService.RegisterWorkspaceDirectory' = 0 }

	export enum RestoreWorkspaceX_Amz_Target { 'WorkspacesService.RestoreWorkspace' = 0 }

	export enum RevokeIpRulesX_Amz_Target { 'WorkspacesService.RevokeIpRules' = 0 }

	export enum StartWorkspacesX_Amz_Target { 'WorkspacesService.StartWorkspaces' = 0 }

	export enum StopWorkspacesX_Amz_Target { 'WorkspacesService.StopWorkspaces' = 0 }

	export enum TerminateWorkspacesX_Amz_Target { 'WorkspacesService.TerminateWorkspaces' = 0 }

	export enum UpdateRulesOfIpGroupX_Amz_Target { 'WorkspacesService.UpdateRulesOfIpGroup' = 0 }

}

