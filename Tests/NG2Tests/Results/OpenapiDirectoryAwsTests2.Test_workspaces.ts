import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
export namespace MyNS {
	export interface AssociateIpGroupsResult {
	}

	export interface AssociateIpGroupsRequest {
		DirectoryId: string;
		GroupIds: Array<string>;
	}

	export interface InvalidParameterValuesException {
	}

	export interface ResourceNotFoundException {
	}

	export interface ResourceLimitExceededException {
	}

	export interface InvalidResourceStateException {
	}

	export interface AccessDeniedException {
	}

	export interface OperationNotSupportedException {
	}

	export interface AuthorizeIpRulesResult {
	}

	export interface AuthorizeIpRulesRequest {
		GroupId: string;
		UserRules: Array<IpRuleItem>;
	}


	/** Describes a rule for an IP access control group. */
	export interface IpRuleItem {
		ipRule?: string;
		ruleDesc?: string;
	}

	export interface CopyWorkspaceImageResult {
		ImageId?: string;
	}

	export interface CopyWorkspaceImageRequest {
		Name: string;
		Description?: string;
		SourceImageId: string;
		SourceRegion: string;
		Tags?: Array<Tag>;
	}


	/** Describes a tag. */
	export interface Tag {
		Key: string;
		Value?: string;
	}

	export interface ResourceAlreadyExistsException {
	}

	export interface ResourceUnavailableException {
	}

	export interface CreateIpGroupResult {
		GroupId?: string;
	}

	export interface CreateIpGroupRequest {
		GroupName: string;
		GroupDesc?: string;
		UserRules?: Array<IpRuleItem>;
		Tags?: Array<Tag>;
	}

	export interface ResourceCreationFailedException {
	}

	export interface CreateTagsResult {
	}

	export interface CreateTagsRequest {
		ResourceId: string;
		Tags: Array<Tag>;
	}

	export interface CreateWorkspacesResult {
		FailedRequests?: Array<FailedCreateWorkspaceRequest>;
		PendingRequests?: Array<Workspace>;
	}


	/** Describes a WorkSpace that cannot be created. */
	export interface FailedCreateWorkspaceRequest {

		/** Describes the information used to create a WorkSpace. */
		WorkspaceRequest?: WorkspaceRequest;
		ErrorCode?: string;
		ErrorMessage?: string;
	}


	/** Describes the information used to create a WorkSpace. */
	export interface WorkspaceRequest {
		DirectoryId: string;
		UserName: string;
		BundleId: string;
		VolumeEncryptionKey?: string;
		UserVolumeEncryptionEnabled?: boolean;
		RootVolumeEncryptionEnabled?: boolean;

		/** Describes a WorkSpace. */
		WorkspaceProperties?: WorkspaceProperties;
		Tags?: Array<Tag>;
	}


	/** Describes a WorkSpace. */
	export interface WorkspaceProperties {
		RunningMode?: WorkspacePropertiesRunningMode;
		RunningModeAutoStopTimeoutInMinutes?: number;
		RootVolumeSizeGib?: number;
		UserVolumeSizeGib?: number;
		ComputeTypeName?: WorkspacePropertiesComputeTypeName;
	}

	export enum WorkspacePropertiesRunningMode { AUTO_STOP = 0, ALWAYS_ON = 1 }

	export enum WorkspacePropertiesComputeTypeName { VALUE = 0, STANDARD = 1, PERFORMANCE = 2, POWER = 3, GRAPHICS = 4, POWERPRO = 5, GRAPHICSPRO = 6 }


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
		UserVolumeEncryptionEnabled?: boolean;
		RootVolumeEncryptionEnabled?: boolean;

		/** Describes a WorkSpace. */
		WorkspaceProperties?: WorkspaceProperties;
		ModificationStates?: Array<ModificationState>;
	}

	export enum WorkspaceState { PENDING = 0, AVAILABLE = 1, IMPAIRED = 2, UNHEALTHY = 3, REBOOTING = 4, STARTING = 5, REBUILDING = 6, RESTORING = 7, MAINTENANCE = 8, ADMIN_MAINTENANCE = 9, TERMINATING = 10, TERMINATED = 11, SUSPENDED = 12, UPDATING = 13, STOPPING = 14, STOPPED = 15, ERROR = 16 }


	/** Describes a WorkSpace modification. */
	export interface ModificationState {
		Resource?: ModificationStateResource;
		State?: ModificationStateState;
	}

	export enum ModificationStateResource { ROOT_VOLUME = 0, USER_VOLUME = 1, COMPUTE_TYPE = 2 }

	export enum ModificationStateState { UPDATE_INITIATED = 0, UPDATE_IN_PROGRESS = 1 }

	export interface CreateWorkspacesRequest {
		Workspaces: Array<WorkspaceRequest>;
	}

	export interface DeleteIpGroupResult {
	}

	export interface DeleteIpGroupRequest {
		GroupId: string;
	}

	export interface ResourceAssociatedException {
	}

	export interface DeleteTagsResult {
	}

	export interface DeleteTagsRequest {
		ResourceId: string;
		TagKeys: Array<string>;
	}

	export interface DeleteWorkspaceImageResult {
	}

	export interface DeleteWorkspaceImageRequest {
		ImageId: string;
	}

	export interface DeregisterWorkspaceDirectoryResult {
	}

	export interface DeregisterWorkspaceDirectoryRequest {
		DirectoryId: string;
	}

	export interface DescribeAccountResult {
		DedicatedTenancySupport?: DescribeAccountResultDedicatedTenancySupport;
		DedicatedTenancyManagementCidrRange?: string;
	}

	export enum DescribeAccountResultDedicatedTenancySupport { ENABLED = 0, DISABLED = 1 }

	export interface DescribeAccountRequest {
	}

	export interface DescribeAccountModificationsResult {
		AccountModifications?: Array<AccountModification>;
		NextToken?: string;
	}


	/** Describes a modification to the configuration of Bring Your Own License (BYOL) for the specified account.  */
	export interface AccountModification {
		ModificationState?: AccountModificationModificationState;
		DedicatedTenancySupport?: DescribeAccountResultDedicatedTenancySupport;
		DedicatedTenancyManagementCidrRange?: string;
		StartTime?: Date;
		ErrorCode?: string;
		ErrorMessage?: string;
	}

	export enum AccountModificationModificationState { PENDING = 0, COMPLETED = 1, FAILED = 2 }

	export interface DescribeAccountModificationsRequest {
		NextToken?: string;
	}

	export interface DescribeClientPropertiesResult {
		ClientPropertiesList?: Array<ClientPropertiesResult>;
	}


	/** Information about the Amazon WorkSpaces client. */
	export interface ClientPropertiesResult {
		ResourceId?: string;

		/** Describes an Amazon WorkSpaces client. */
		ClientProperties?: ClientProperties;
	}


	/** Describes an Amazon WorkSpaces client. */
	export interface ClientProperties {
		ReconnectEnabled?: DescribeAccountResultDedicatedTenancySupport;
	}

	export interface DescribeClientPropertiesRequest {
		ResourceIds: Array<string>;
	}

	export interface DescribeIpGroupsResult {
		Result?: Array<WorkspacesIpGroup>;
		NextToken?: string;
	}


	/** Describes an IP access control group. */
	export interface WorkspacesIpGroup {
		groupId?: string;
		groupName?: string;
		groupDesc?: string;
		userRules?: Array<IpRuleItem>;
	}

	export interface DescribeIpGroupsRequest {
		GroupIds?: Array<string>;
		NextToken?: string;
		MaxResults?: number;
	}

	export interface DescribeTagsResult {
		TagList?: Array<Tag>;
	}

	export interface DescribeTagsRequest {
		ResourceId: string;
	}

	export interface DescribeWorkspaceBundlesResult {
		Bundles?: Array<WorkspaceBundle>;
		NextToken?: string;
	}


	/** Describes a WorkSpace bundle. */
	export interface WorkspaceBundle {
		BundleId?: string;
		Name?: string;
		Owner?: string;
		Description?: string;
		ImageId?: string;

		/** Describes the root volume for a WorkSpace bundle. */
		RootStorage?: RootStorage;

		/** Describes the user storage for a WorkSpace bundle. */
		UserStorage?: UserStorage;

		/** Describes the compute type. */
		ComputeType?: ComputeType;
		LastUpdatedTime?: Date;
	}


	/** Describes the root volume for a WorkSpace bundle. */
	export interface RootStorage {
		Capacity?: string;
	}


	/** Describes the user storage for a WorkSpace bundle. */
	export interface UserStorage {
		Capacity?: string;
	}


	/** Describes the compute type. */
	export interface ComputeType {
		Name?: WorkspacePropertiesComputeTypeName;
	}

	export interface DescribeWorkspaceBundlesRequest {
		BundleIds?: Array<string>;
		Owner?: string;
		NextToken?: string;
	}

	export interface DescribeWorkspaceDirectoriesResult {
		Directories?: Array<WorkspaceDirectory>;
		NextToken?: string;
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
		DirectoryType?: WorkspaceDirectoryDirectoryType;
		WorkspaceSecurityGroupId?: string;
		State?: WorkspaceDirectoryState;

		/** Describes the default values that are used to create WorkSpaces. For more information, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/update-directory-details.html">Update Directory Details for Your WorkSpaces</a>. */
		WorkspaceCreationProperties?: DefaultWorkspaceCreationProperties;
		ipGroupIds?: Array<string>;

		/** The device types and operating systems that can be used to access a WorkSpace. For more information, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/workspaces-network-requirements.html">Amazon WorkSpaces Client Network Requirements</a>. */
		WorkspaceAccessProperties?: WorkspaceAccessProperties;
		Tenancy?: WorkspaceDirectoryTenancy;

		/** Describes the self-service permissions for a directory. For more information, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/enable-user-self-service-workspace-management.html">Enable Self-Service WorkSpace Management Capabilities for Your Users</a>. */
		SelfservicePermissions?: SelfservicePermissions;
	}

	export enum WorkspaceDirectoryDirectoryType { SIMPLE_AD = 0, AD_CONNECTOR = 1 }

	export enum WorkspaceDirectoryState { REGISTERING = 0, REGISTERED = 1, DEREGISTERING = 2, DEREGISTERED = 3, ERROR = 4 }


	/** Describes the default values that are used to create WorkSpaces. For more information, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/update-directory-details.html">Update Directory Details for Your WorkSpaces</a>. */
	export interface DefaultWorkspaceCreationProperties {
		EnableWorkDocs?: boolean;
		EnableInternetAccess?: boolean;
		DefaultOu?: string;
		CustomSecurityGroupId?: string;
		UserEnabledAsLocalAdministrator?: boolean;
		EnableMaintenanceMode?: boolean;
	}


	/** The device types and operating systems that can be used to access a WorkSpace. For more information, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/workspaces-network-requirements.html">Amazon WorkSpaces Client Network Requirements</a>. */
	export interface WorkspaceAccessProperties {
		DeviceTypeWindows?: WorkspaceAccessPropertiesDeviceTypeWindows;
		DeviceTypeOsx?: WorkspaceAccessPropertiesDeviceTypeWindows;
		DeviceTypeWeb?: WorkspaceAccessPropertiesDeviceTypeWindows;
		DeviceTypeIos?: WorkspaceAccessPropertiesDeviceTypeWindows;
		DeviceTypeAndroid?: WorkspaceAccessPropertiesDeviceTypeWindows;
		DeviceTypeChromeOs?: WorkspaceAccessPropertiesDeviceTypeWindows;
		DeviceTypeZeroClient?: WorkspaceAccessPropertiesDeviceTypeWindows;
	}

	export enum WorkspaceAccessPropertiesDeviceTypeWindows { ALLOW = 0, DENY = 1 }

	export enum WorkspaceDirectoryTenancy { DEDICATED = 0, SHARED = 1 }


	/** Describes the self-service permissions for a directory. For more information, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/enable-user-self-service-workspace-management.html">Enable Self-Service WorkSpace Management Capabilities for Your Users</a>. */
	export interface SelfservicePermissions {
		RestartWorkspace?: DescribeAccountResultDedicatedTenancySupport;
		IncreaseVolumeSize?: DescribeAccountResultDedicatedTenancySupport;
		ChangeComputeType?: DescribeAccountResultDedicatedTenancySupport;
		SwitchRunningMode?: DescribeAccountResultDedicatedTenancySupport;
		RebuildWorkspace?: DescribeAccountResultDedicatedTenancySupport;
	}

	export interface DescribeWorkspaceDirectoriesRequest {
		DirectoryIds?: Array<string>;
		Limit?: number;
		NextToken?: string;
	}

	export interface DescribeWorkspaceImagesResult {
		Images?: Array<WorkspaceImage>;
		NextToken?: string;
	}


	/** Describes a WorkSpace image. */
	export interface WorkspaceImage {
		ImageId?: string;
		Name?: string;
		Description?: string;

		/** The operating system that the image is running. */
		OperatingSystem?: OperatingSystem;
		State?: WorkspaceImageState;
		RequiredTenancy?: WorkspaceImageRequiredTenancy;
		ErrorCode?: string;
		ErrorMessage?: string;
	}


	/** The operating system that the image is running. */
	export interface OperatingSystem {
		Type?: OperatingSystemType;
	}

	export enum OperatingSystemType { WINDOWS = 0, LINUX = 1 }

	export enum WorkspaceImageState { AVAILABLE = 0, PENDING = 1, ERROR = 2 }

	export enum WorkspaceImageRequiredTenancy { DEFAULT = 0, DEDICATED = 1 }

	export interface DescribeWorkspaceImagesRequest {
		ImageIds?: Array<string>;
		NextToken?: string;
		MaxResults?: number;
	}

	export interface DescribeWorkspaceSnapshotsResult {
		RebuildSnapshots?: Array<Snapshot>;
		RestoreSnapshots?: Array<Snapshot>;
	}


	/** Describes a snapshot. */
	export interface Snapshot {
		SnapshotTime?: Date;
	}

	export interface DescribeWorkspaceSnapshotsRequest {
		WorkspaceId: string;
	}

	export interface DescribeWorkspacesResult {
		Workspaces?: Array<Workspace>;
		NextToken?: string;
	}

	export interface DescribeWorkspacesRequest {
		WorkspaceIds?: Array<string>;
		DirectoryId?: string;
		UserName?: string;
		BundleId?: string;
		Limit?: number;
		NextToken?: string;
	}

	export interface DescribeWorkspacesConnectionStatusResult {
		WorkspacesConnectionStatus?: Array<WorkspaceConnectionStatus>;
		NextToken?: string;
	}


	/** Describes the connection status of a WorkSpace. */
	export interface WorkspaceConnectionStatus {
		WorkspaceId?: string;
		ConnectionState?: WorkspaceConnectionStatusConnectionState;
		ConnectionStateCheckTimestamp?: Date;
		LastKnownUserConnectionTimestamp?: Date;
	}

	export enum WorkspaceConnectionStatusConnectionState { CONNECTED = 0, DISCONNECTED = 1, UNKNOWN = 2 }

	export interface DescribeWorkspacesConnectionStatusRequest {
		WorkspaceIds?: Array<string>;
		NextToken?: string;
	}

	export interface DisassociateIpGroupsResult {
	}

	export interface DisassociateIpGroupsRequest {
		DirectoryId: string;
		GroupIds: Array<string>;
	}

	export interface ImportWorkspaceImageResult {
		ImageId?: string;
	}

	export interface ImportWorkspaceImageRequest {
		Ec2ImageId: string;
		IngestionProcess: ImportWorkspaceImageRequestIngestionProcess;
		ImageName: string;
		ImageDescription: string;
		Tags?: Array<Tag>;
	}

	export enum ImportWorkspaceImageRequestIngestionProcess { BYOL_REGULAR = 0, BYOL_GRAPHICS = 1, BYOL_GRAPHICSPRO = 2 }

	export interface ListAvailableManagementCidrRangesResult {
		ManagementCidrRanges?: Array<string>;
		NextToken?: string;
	}

	export interface ListAvailableManagementCidrRangesRequest {
		ManagementCidrRangeConstraint: string;
		MaxResults?: number;
		NextToken?: string;
	}

	export interface MigrateWorkspaceResult {
		SourceWorkspaceId?: string;
		TargetWorkspaceId?: string;
	}

	export interface MigrateWorkspaceRequest {
		SourceWorkspaceId: string;
		BundleId: string;
	}

	export interface OperationInProgressException {
	}

	export interface ModifyAccountResult {
	}

	export interface ModifyAccountRequest {
		DedicatedTenancySupport?: ModifyAccountRequestDedicatedTenancySupport;
		DedicatedTenancyManagementCidrRange?: string;
	}

	export enum ModifyAccountRequestDedicatedTenancySupport { ENABLED = 0 }

	export interface ModifyClientPropertiesResult {
	}

	export interface ModifyClientPropertiesRequest {
		ResourceId: string;

		/**
		 * Describes an Amazon WorkSpaces client.
		 * Required
		 */
		ClientProperties: ClientProperties;
	}

	export interface ModifySelfservicePermissionsResult {
	}

	export interface ModifySelfservicePermissionsRequest {
		ResourceId: string;

		/**
		 * Describes the self-service permissions for a directory. For more information, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/enable-user-self-service-workspace-management.html">Enable Self-Service WorkSpace Management Capabilities for Your Users</a>.
		 * Required
		 */
		SelfservicePermissions: SelfservicePermissions;
	}

	export interface ModifyWorkspaceAccessPropertiesResult {
	}

	export interface ModifyWorkspaceAccessPropertiesRequest {
		ResourceId: string;

		/**
		 * The device types and operating systems that can be used to access a WorkSpace. For more information, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/workspaces-network-requirements.html">Amazon WorkSpaces Client Network Requirements</a>.
		 * Required
		 */
		WorkspaceAccessProperties: WorkspaceAccessProperties;
	}

	export interface ModifyWorkspaceCreationPropertiesResult {
	}

	export interface ModifyWorkspaceCreationPropertiesRequest {
		ResourceId: string;

		/**
		 * Describes the default properties that are used for creating WorkSpaces. For more information, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/update-directory-details.html">Update Directory Details for Your WorkSpaces</a>.
		 * Required
		 */
		WorkspaceCreationProperties: WorkspaceCreationProperties;
	}


	/** Describes the default properties that are used for creating WorkSpaces. For more information, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/update-directory-details.html">Update Directory Details for Your WorkSpaces</a>.  */
	export interface WorkspaceCreationProperties {
		EnableInternetAccess?: boolean;
		DefaultOu?: string;
		CustomSecurityGroupId?: string;
		UserEnabledAsLocalAdministrator?: boolean;
		EnableMaintenanceMode?: boolean;
	}

	export interface ModifyWorkspacePropertiesResult {
	}

	export interface ModifyWorkspacePropertiesRequest {
		WorkspaceId: string;

		/**
		 * Describes a WorkSpace.
		 * Required
		 */
		WorkspaceProperties: WorkspaceProperties;
	}

	export interface UnsupportedWorkspaceConfigurationException {
	}

	export interface ModifyWorkspaceStateResult {
	}

	export interface ModifyWorkspaceStateRequest {
		WorkspaceId: string;
		WorkspaceState: ModifyWorkspaceStateRequestWorkspaceState;
	}

	export enum ModifyWorkspaceStateRequestWorkspaceState { AVAILABLE = 0, ADMIN_MAINTENANCE = 1 }

	export interface RebootWorkspacesResult {
		FailedRequests?: Array<FailedWorkspaceChangeRequest>;
	}


	/** Describes a WorkSpace that could not be rebooted. (<a>RebootWorkspaces</a>), rebuilt (<a>RebuildWorkspaces</a>), restored (<a>RestoreWorkspace</a>), terminated (<a>TerminateWorkspaces</a>), started (<a>StartWorkspaces</a>), or stopped (<a>StopWorkspaces</a>). */
	export interface FailedWorkspaceChangeRequest {
		WorkspaceId?: string;
		ErrorCode?: string;
		ErrorMessage?: string;
	}

	export interface RebootWorkspacesRequest {
		RebootWorkspaceRequests: Array<RebootRequest>;
	}


	/** Describes the information used to reboot a WorkSpace. */
	export interface RebootRequest {
		WorkspaceId: string;
	}

	export interface RebuildWorkspacesResult {
		FailedRequests?: Array<FailedWorkspaceChangeRequest>;
	}

	export interface RebuildWorkspacesRequest {
		RebuildWorkspaceRequests: Array<RebuildRequest>;
	}


	/** Describes the information used to rebuild a WorkSpace. */
	export interface RebuildRequest {
		WorkspaceId: string;
	}

	export interface RegisterWorkspaceDirectoryResult {
	}

	export interface RegisterWorkspaceDirectoryRequest {
		DirectoryId: string;
		SubnetIds?: Array<string>;
		EnableWorkDocs: boolean;
		EnableSelfService?: boolean;
		Tenancy?: WorkspaceDirectoryTenancy;
		Tags?: Array<Tag>;
	}

	export interface WorkspacesDefaultRoleNotFoundException {
	}

	export interface UnsupportedNetworkConfigurationException {
	}

	export interface RestoreWorkspaceResult {
	}

	export interface RestoreWorkspaceRequest {
		WorkspaceId: string;
	}

	export interface RevokeIpRulesResult {
	}

	export interface RevokeIpRulesRequest {
		GroupId: string;
		UserRules: Array<string>;
	}

	export interface StartWorkspacesResult {
		FailedRequests?: Array<FailedWorkspaceChangeRequest>;
	}

	export interface StartWorkspacesRequest {
		StartWorkspaceRequests: Array<StartRequest>;
	}


	/** Information used to start a WorkSpace. */
	export interface StartRequest {
		WorkspaceId?: string;
	}

	export interface StopWorkspacesResult {
		FailedRequests?: Array<FailedWorkspaceChangeRequest>;
	}

	export interface StopWorkspacesRequest {
		StopWorkspaceRequests: Array<StopRequest>;
	}


	/** Describes the information used to stop a WorkSpace. */
	export interface StopRequest {
		WorkspaceId?: string;
	}

	export interface TerminateWorkspacesResult {
		FailedRequests?: Array<FailedWorkspaceChangeRequest>;
	}

	export interface TerminateWorkspacesRequest {
		TerminateWorkspaceRequests: Array<TerminateRequest>;
	}


	/** Describes the information used to terminate a WorkSpace. */
	export interface TerminateRequest {
		WorkspaceId: string;
	}

	export interface UpdateRulesOfIpGroupResult {
	}

	export interface UpdateRulesOfIpGroupRequest {
		GroupId: string;
		UserRules: Array<IpRuleItem>;
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
		DescribeWorkspaceBundles(NextToken: string, requestBody: DescribeWorkspaceBundlesRequest): Observable<DescribeWorkspaceBundlesResult> {
			return this.http.post<DescribeWorkspaceBundlesResult>(this.baseUri + '#X-Amz-Target=WorkspacesService.DescribeWorkspaceBundles?NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Describes the available directories that are registered with Amazon WorkSpaces.
		 * Post #X-Amz-Target=WorkspacesService.DescribeWorkspaceDirectories
		 * @param {string} NextToken Pagination token
		 * @return {DescribeWorkspaceDirectoriesResult} Success
		 */
		DescribeWorkspaceDirectories(NextToken: string, requestBody: DescribeWorkspaceDirectoriesRequest): Observable<DescribeWorkspaceDirectoriesResult> {
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
		DescribeWorkspaces(Limit: string, NextToken: string, requestBody: DescribeWorkspacesRequest): Observable<DescribeWorkspacesResult> {
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

	export enum AssociateIpGroupsX_Amz_Target { WorkspacesService_AssociateIpGroups = 0 }

	export enum AuthorizeIpRulesX_Amz_Target { WorkspacesService_AuthorizeIpRules = 0 }

	export enum CopyWorkspaceImageX_Amz_Target { WorkspacesService_CopyWorkspaceImage = 0 }

	export enum CreateIpGroupX_Amz_Target { WorkspacesService_CreateIpGroup = 0 }

	export enum CreateTagsX_Amz_Target { WorkspacesService_CreateTags = 0 }

	export enum CreateWorkspacesX_Amz_Target { WorkspacesService_CreateWorkspaces = 0 }

	export enum DeleteIpGroupX_Amz_Target { WorkspacesService_DeleteIpGroup = 0 }

	export enum DeleteTagsX_Amz_Target { WorkspacesService_DeleteTags = 0 }

	export enum DeleteWorkspaceImageX_Amz_Target { WorkspacesService_DeleteWorkspaceImage = 0 }

	export enum DeregisterWorkspaceDirectoryX_Amz_Target { WorkspacesService_DeregisterWorkspaceDirectory = 0 }

	export enum DescribeAccountX_Amz_Target { WorkspacesService_DescribeAccount = 0 }

	export enum DescribeAccountModificationsX_Amz_Target { WorkspacesService_DescribeAccountModifications = 0 }

	export enum DescribeClientPropertiesX_Amz_Target { WorkspacesService_DescribeClientProperties = 0 }

	export enum DescribeIpGroupsX_Amz_Target { WorkspacesService_DescribeIpGroups = 0 }

	export enum DescribeTagsX_Amz_Target { WorkspacesService_DescribeTags = 0 }

	export enum DescribeWorkspaceBundlesX_Amz_Target { WorkspacesService_DescribeWorkspaceBundles = 0 }

	export enum DescribeWorkspaceDirectoriesX_Amz_Target { WorkspacesService_DescribeWorkspaceDirectories = 0 }

	export enum DescribeWorkspaceImagesX_Amz_Target { WorkspacesService_DescribeWorkspaceImages = 0 }

	export enum DescribeWorkspaceSnapshotsX_Amz_Target { WorkspacesService_DescribeWorkspaceSnapshots = 0 }

	export enum DescribeWorkspacesX_Amz_Target { WorkspacesService_DescribeWorkspaces = 0 }

	export enum DescribeWorkspacesConnectionStatusX_Amz_Target { WorkspacesService_DescribeWorkspacesConnectionStatus = 0 }

	export enum DisassociateIpGroupsX_Amz_Target { WorkspacesService_DisassociateIpGroups = 0 }

	export enum ImportWorkspaceImageX_Amz_Target { WorkspacesService_ImportWorkspaceImage = 0 }

	export enum ListAvailableManagementCidrRangesX_Amz_Target { WorkspacesService_ListAvailableManagementCidrRanges = 0 }

	export enum MigrateWorkspaceX_Amz_Target { WorkspacesService_MigrateWorkspace = 0 }

	export enum ModifyAccountX_Amz_Target { WorkspacesService_ModifyAccount = 0 }

	export enum ModifyClientPropertiesX_Amz_Target { WorkspacesService_ModifyClientProperties = 0 }

	export enum ModifySelfservicePermissionsX_Amz_Target { WorkspacesService_ModifySelfservicePermissions = 0 }

	export enum ModifyWorkspaceAccessPropertiesX_Amz_Target { WorkspacesService_ModifyWorkspaceAccessProperties = 0 }

	export enum ModifyWorkspaceCreationPropertiesX_Amz_Target { WorkspacesService_ModifyWorkspaceCreationProperties = 0 }

	export enum ModifyWorkspacePropertiesX_Amz_Target { WorkspacesService_ModifyWorkspaceProperties = 0 }

	export enum ModifyWorkspaceStateX_Amz_Target { WorkspacesService_ModifyWorkspaceState = 0 }

	export enum RebootWorkspacesX_Amz_Target { WorkspacesService_RebootWorkspaces = 0 }

	export enum RebuildWorkspacesX_Amz_Target { WorkspacesService_RebuildWorkspaces = 0 }

	export enum RegisterWorkspaceDirectoryX_Amz_Target { WorkspacesService_RegisterWorkspaceDirectory = 0 }

	export enum RestoreWorkspaceX_Amz_Target { WorkspacesService_RestoreWorkspace = 0 }

	export enum RevokeIpRulesX_Amz_Target { WorkspacesService_RevokeIpRules = 0 }

	export enum StartWorkspacesX_Amz_Target { WorkspacesService_StartWorkspaces = 0 }

	export enum StopWorkspacesX_Amz_Target { WorkspacesService_StopWorkspaces = 0 }

	export enum TerminateWorkspacesX_Amz_Target { WorkspacesService_TerminateWorkspaces = 0 }

	export enum UpdateRulesOfIpGroupX_Amz_Target { WorkspacesService_UpdateRulesOfIpGroup = 0 }

}

