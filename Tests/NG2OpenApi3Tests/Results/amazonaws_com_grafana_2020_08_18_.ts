import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface AssociateLicenseResponse {

		/** Required */
		workspace: WorkspaceDescription;
	}
	export interface AssociateLicenseResponseFormProperties {
	}
	export function CreateAssociateLicenseResponseFormGroup() {
		return new FormGroup<AssociateLicenseResponseFormProperties>({
		});

	}


	/** A structure containing information about an Amazon Managed Grafana workspace in your account. */
	export interface WorkspaceDescription {
		accountAccessType?: AccountAccessType;

		/** Required */
		authentication: AuthenticationSummary;

		/** Required */
		created: Date;

		/** Required */
		dataSources: Array<DataSourceType>;
		description?: string;

		/** Required */
		endpoint: string;
		freeTrialConsumed?: boolean | null;
		freeTrialExpiration?: Date;

		/** Required */
		grafanaVersion: string;

		/** Required */
		id: string;
		licenseExpiration?: Date;
		licenseType?: LicenseType;

		/** Required */
		modified: Date;
		name?: string;
		networkAccessControl?: NetworkAccessConfiguration;
		notificationDestinations?: Array<NotificationDestinationType>;
		organizationRoleName?: string;
		organizationalUnits?: Array<string>;
		permissionType?: PermissionType;
		stackSetName?: string;

		/** Required */
		status: WorkspaceStatus;
		tags?: TagMap;
		vpcConfiguration?: VpcConfiguration;
		workspaceRoleArn?: string;
	}

	/** A structure containing information about an Amazon Managed Grafana workspace in your account. */
	export interface WorkspaceDescriptionFormProperties {
		accountAccessType: FormControl<AccountAccessType | null | undefined>,

		/** Required */
		created: FormControl<Date | null | undefined>,
		description: FormControl<string | null | undefined>,

		/** Required */
		endpoint: FormControl<string | null | undefined>,
		freeTrialConsumed: FormControl<boolean | null | undefined>,
		freeTrialExpiration: FormControl<Date | null | undefined>,

		/** Required */
		grafanaVersion: FormControl<string | null | undefined>,

		/** Required */
		id: FormControl<string | null | undefined>,
		licenseExpiration: FormControl<Date | null | undefined>,
		licenseType: FormControl<LicenseType | null | undefined>,

		/** Required */
		modified: FormControl<Date | null | undefined>,
		name: FormControl<string | null | undefined>,
		organizationRoleName: FormControl<string | null | undefined>,
		permissionType: FormControl<PermissionType | null | undefined>,
		stackSetName: FormControl<string | null | undefined>,

		/** Required */
		status: FormControl<WorkspaceStatus | null | undefined>,
		workspaceRoleArn: FormControl<string | null | undefined>,
	}
	export function CreateWorkspaceDescriptionFormGroup() {
		return new FormGroup<WorkspaceDescriptionFormProperties>({
			accountAccessType: new FormControl<AccountAccessType | null | undefined>(undefined),
			created: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			description: new FormControl<string | null | undefined>(undefined),
			endpoint: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			freeTrialConsumed: new FormControl<boolean | null | undefined>(undefined),
			freeTrialExpiration: new FormControl<Date | null | undefined>(undefined),
			grafanaVersion: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			licenseExpiration: new FormControl<Date | null | undefined>(undefined),
			licenseType: new FormControl<LicenseType | null | undefined>(undefined),
			modified: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined),
			organizationRoleName: new FormControl<string | null | undefined>(undefined),
			permissionType: new FormControl<PermissionType | null | undefined>(undefined),
			stackSetName: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<WorkspaceStatus | null | undefined>(undefined, [Validators.required]),
			workspaceRoleArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum AccountAccessType { CURRENT_ACCOUNT = 'CURRENT_ACCOUNT', ORGANIZATION = 'ORGANIZATION' }


	/** A structure that describes whether the workspace uses SAML, IAM Identity Center, or both methods for user authentication, and whether that authentication is fully configured. */
	export interface AuthenticationSummary {

		/** Required */
		providers: Array<AuthenticationProviderTypes>;
		samlConfigurationStatus?: SamlConfigurationStatus;
	}

	/** A structure that describes whether the workspace uses SAML, IAM Identity Center, or both methods for user authentication, and whether that authentication is fully configured. */
	export interface AuthenticationSummaryFormProperties {
		samlConfigurationStatus: FormControl<SamlConfigurationStatus | null | undefined>,
	}
	export function CreateAuthenticationSummaryFormGroup() {
		return new FormGroup<AuthenticationSummaryFormProperties>({
			samlConfigurationStatus: new FormControl<SamlConfigurationStatus | null | undefined>(undefined),
		});

	}

	export enum AuthenticationProviderTypes { AWS_SSO = 'AWS_SSO', SAML = 'SAML' }

	export enum SamlConfigurationStatus { CONFIGURED = 'CONFIGURED', NOT_CONFIGURED = 'NOT_CONFIGURED' }

	export enum DataSourceType { AMAZON_OPENSEARCH_SERVICE = 'AMAZON_OPENSEARCH_SERVICE', CLOUDWATCH = 'CLOUDWATCH', PROMETHEUS = 'PROMETHEUS', XRAY = 'XRAY', TIMESTREAM = 'TIMESTREAM', SITEWISE = 'SITEWISE', ATHENA = 'ATHENA', REDSHIFT = 'REDSHIFT', TWINMAKER = 'TWINMAKER' }

	export enum LicenseType { ENTERPRISE = 'ENTERPRISE', ENTERPRISE_FREE_TRIAL = 'ENTERPRISE_FREE_TRIAL' }


	/** <p>The configuration settings for in-bound network access to your workspace.</p> <p>When this is configured, only listed IP addresses and VPC endpoints will be able to access your workspace. Standard Grafana authentication and authorization are still required.</p> <p>Access is granted to a caller that is in either the IP address list or the VPC endpoint list - they do not need to be in both.</p> <p>If this is not configured, or is removed, then all IP addresses and VPC endpoints are allowed. Standard Grafana authentication and authorization are still required.</p> <note> <p>While both <code>prefixListIds</code> and <code>vpceIds</code> are required, you can pass in an empty array of strings for either parameter if you do not want to allow any of that type.</p> <p>If both are passed as empty arrays, no traffic is allowed to the workspace, because only <i>explicitly</i> allowed connections are accepted.</p> </note> */
	export interface NetworkAccessConfiguration {

		/** Required */
		prefixListIds: Array<string>;

		/** Required */
		vpceIds: Array<string>;
	}

	/** <p>The configuration settings for in-bound network access to your workspace.</p> <p>When this is configured, only listed IP addresses and VPC endpoints will be able to access your workspace. Standard Grafana authentication and authorization are still required.</p> <p>Access is granted to a caller that is in either the IP address list or the VPC endpoint list - they do not need to be in both.</p> <p>If this is not configured, or is removed, then all IP addresses and VPC endpoints are allowed. Standard Grafana authentication and authorization are still required.</p> <note> <p>While both <code>prefixListIds</code> and <code>vpceIds</code> are required, you can pass in an empty array of strings for either parameter if you do not want to allow any of that type.</p> <p>If both are passed as empty arrays, no traffic is allowed to the workspace, because only <i>explicitly</i> allowed connections are accepted.</p> </note> */
	export interface NetworkAccessConfigurationFormProperties {
	}
	export function CreateNetworkAccessConfigurationFormGroup() {
		return new FormGroup<NetworkAccessConfigurationFormProperties>({
		});

	}

	export enum NotificationDestinationType { SNS = 'SNS' }

	export enum PermissionType { CUSTOMER_MANAGED = 'CUSTOMER_MANAGED', SERVICE_MANAGED = 'SERVICE_MANAGED' }

	export enum WorkspaceStatus { ACTIVE = 'ACTIVE', CREATING = 'CREATING', DELETING = 'DELETING', FAILED = 'FAILED', UPDATING = 'UPDATING', UPGRADING = 'UPGRADING', DELETION_FAILED = 'DELETION_FAILED', CREATION_FAILED = 'CREATION_FAILED', UPDATE_FAILED = 'UPDATE_FAILED', UPGRADE_FAILED = 'UPGRADE_FAILED', LICENSE_REMOVAL_FAILED = 'LICENSE_REMOVAL_FAILED', VERSION_UPDATING = 'VERSION_UPDATING', VERSION_UPDATE_FAILED = 'VERSION_UPDATE_FAILED' }

	export interface TagMap {
	}
	export interface TagMapFormProperties {
	}
	export function CreateTagMapFormGroup() {
		return new FormGroup<TagMapFormProperties>({
		});

	}


	/** <p>The configuration settings for an Amazon VPC that contains data sources for your Grafana workspace to connect to.</p> <note> <p>Provided <code>securityGroupIds</code> and <code>subnetIds</code> must be part of the same VPC.</p> <p>Connecting to a private VPC is not yet available in the Asia Pacific (Seoul) Region (ap-northeast-2).</p> </note> */
	export interface VpcConfiguration {

		/** Required */
		securityGroupIds: Array<string>;

		/** Required */
		subnetIds: Array<string>;
	}

	/** <p>The configuration settings for an Amazon VPC that contains data sources for your Grafana workspace to connect to.</p> <note> <p>Provided <code>securityGroupIds</code> and <code>subnetIds</code> must be part of the same VPC.</p> <p>Connecting to a private VPC is not yet available in the Asia Pacific (Seoul) Region (ap-northeast-2).</p> </note> */
	export interface VpcConfigurationFormProperties {
	}
	export function CreateVpcConfigurationFormGroup() {
		return new FormGroup<VpcConfigurationFormProperties>({
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

	export interface ThrottlingException {
	}
	export interface ThrottlingExceptionFormProperties {
	}
	export function CreateThrottlingExceptionFormGroup() {
		return new FormGroup<ThrottlingExceptionFormProperties>({
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

	export interface InternalServerException {
	}
	export interface InternalServerExceptionFormProperties {
	}
	export function CreateInternalServerExceptionFormGroup() {
		return new FormGroup<InternalServerExceptionFormProperties>({
		});

	}

	export interface CreateWorkspaceResponse {

		/** Required */
		workspace: WorkspaceDescription;
	}
	export interface CreateWorkspaceResponseFormProperties {
	}
	export function CreateCreateWorkspaceResponseFormGroup() {
		return new FormGroup<CreateWorkspaceResponseFormProperties>({
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

	export interface ServiceQuotaExceededException {
	}
	export interface ServiceQuotaExceededExceptionFormProperties {
	}
	export function CreateServiceQuotaExceededExceptionFormGroup() {
		return new FormGroup<ServiceQuotaExceededExceptionFormProperties>({
		});

	}

	export interface CreateWorkspaceApiKeyResponse {

		/** Required */
		key: string;

		/** Required */
		keyName: string;

		/** Required */
		workspaceId: string;
	}
	export interface CreateWorkspaceApiKeyResponseFormProperties {

		/** Required */
		key: FormControl<string | null | undefined>,

		/** Required */
		keyName: FormControl<string | null | undefined>,

		/** Required */
		workspaceId: FormControl<string | null | undefined>,
	}
	export function CreateCreateWorkspaceApiKeyResponseFormGroup() {
		return new FormGroup<CreateWorkspaceApiKeyResponseFormProperties>({
			key: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			keyName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			workspaceId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeleteWorkspaceResponse {

		/** Required */
		workspace: WorkspaceDescription;
	}
	export interface DeleteWorkspaceResponseFormProperties {
	}
	export function CreateDeleteWorkspaceResponseFormGroup() {
		return new FormGroup<DeleteWorkspaceResponseFormProperties>({
		});

	}

	export interface DeleteWorkspaceApiKeyResponse {

		/** Required */
		keyName: string;

		/** Required */
		workspaceId: string;
	}
	export interface DeleteWorkspaceApiKeyResponseFormProperties {

		/** Required */
		keyName: FormControl<string | null | undefined>,

		/** Required */
		workspaceId: FormControl<string | null | undefined>,
	}
	export function CreateDeleteWorkspaceApiKeyResponseFormGroup() {
		return new FormGroup<DeleteWorkspaceApiKeyResponseFormProperties>({
			keyName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			workspaceId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DescribeWorkspaceResponse {

		/** Required */
		workspace: WorkspaceDescription;
	}
	export interface DescribeWorkspaceResponseFormProperties {
	}
	export function CreateDescribeWorkspaceResponseFormGroup() {
		return new FormGroup<DescribeWorkspaceResponseFormProperties>({
		});

	}

	export interface DescribeWorkspaceAuthenticationResponse {

		/** Required */
		authentication: AuthenticationDescription;
	}
	export interface DescribeWorkspaceAuthenticationResponseFormProperties {
	}
	export function CreateDescribeWorkspaceAuthenticationResponseFormGroup() {
		return new FormGroup<DescribeWorkspaceAuthenticationResponseFormProperties>({
		});

	}


	/** A structure containing information about the user authentication methods used by the workspace. */
	export interface AuthenticationDescription {
		awsSso?: AwsSsoAuthentication;

		/** Required */
		providers: Array<AuthenticationProviderTypes>;
		saml?: SamlAuthentication;
	}

	/** A structure containing information about the user authentication methods used by the workspace. */
	export interface AuthenticationDescriptionFormProperties {
	}
	export function CreateAuthenticationDescriptionFormGroup() {
		return new FormGroup<AuthenticationDescriptionFormProperties>({
		});

	}


	/** A structure containing information about how this workspace works with IAM Identity Center.  */
	export interface AwsSsoAuthentication {
		ssoClientId?: string;
	}

	/** A structure containing information about how this workspace works with IAM Identity Center.  */
	export interface AwsSsoAuthenticationFormProperties {
		ssoClientId: FormControl<string | null | undefined>,
	}
	export function CreateAwsSsoAuthenticationFormGroup() {
		return new FormGroup<AwsSsoAuthenticationFormProperties>({
			ssoClientId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A structure containing information about how this workspace works with SAML.  */
	export interface SamlAuthentication {
		configuration?: SamlConfiguration;

		/** Required */
		status: SamlConfigurationStatus;
	}

	/** A structure containing information about how this workspace works with SAML.  */
	export interface SamlAuthenticationFormProperties {

		/** Required */
		status: FormControl<SamlConfigurationStatus | null | undefined>,
	}
	export function CreateSamlAuthenticationFormGroup() {
		return new FormGroup<SamlAuthenticationFormProperties>({
			status: new FormControl<SamlConfigurationStatus | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** A structure containing information about how this workspace works with SAML.  */
	export interface SamlConfiguration {
		allowedOrganizations?: Array<string>;
		assertionAttributes?: AssertionAttributes;

		/** Required */
		idpMetadata: IdpMetadata;
		loginValidityDuration?: number | null;
		roleValues?: RoleValues;
	}

	/** A structure containing information about how this workspace works with SAML.  */
	export interface SamlConfigurationFormProperties {
		loginValidityDuration: FormControl<number | null | undefined>,
	}
	export function CreateSamlConfigurationFormGroup() {
		return new FormGroup<SamlConfigurationFormProperties>({
			loginValidityDuration: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** A structure that defines which attributes in the IdP assertion are to be used to define information about the users authenticated by the IdP to use the workspace. */
	export interface AssertionAttributes {
		email?: string;
		groups?: string;
		login?: string;
		name?: string;
		org?: string;
		role?: string;
	}

	/** A structure that defines which attributes in the IdP assertion are to be used to define information about the users authenticated by the IdP to use the workspace. */
	export interface AssertionAttributesFormProperties {
		email: FormControl<string | null | undefined>,
		groups: FormControl<string | null | undefined>,
		login: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		org: FormControl<string | null | undefined>,
		role: FormControl<string | null | undefined>,
	}
	export function CreateAssertionAttributesFormGroup() {
		return new FormGroup<AssertionAttributesFormProperties>({
			email: new FormControl<string | null | undefined>(undefined),
			groups: new FormControl<string | null | undefined>(undefined),
			login: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			org: new FormControl<string | null | undefined>(undefined),
			role: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A structure containing the identity provider (IdP) metadata used to integrate the identity provider with this workspace. You can specify the metadata either by providing a URL to its location in the <code>url</code> parameter, or by specifying the full metadata in XML format in the <code>xml</code> parameter. Specifying both will cause an error. */
	export interface IdpMetadata {
		url?: string;
		xml?: string;
	}

	/** A structure containing the identity provider (IdP) metadata used to integrate the identity provider with this workspace. You can specify the metadata either by providing a URL to its location in the <code>url</code> parameter, or by specifying the full metadata in XML format in the <code>xml</code> parameter. Specifying both will cause an error. */
	export interface IdpMetadataFormProperties {
		url: FormControl<string | null | undefined>,
		xml: FormControl<string | null | undefined>,
	}
	export function CreateIdpMetadataFormGroup() {
		return new FormGroup<IdpMetadataFormProperties>({
			url: new FormControl<string | null | undefined>(undefined),
			xml: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** This structure defines which groups defined in the SAML assertion attribute are to be mapped to the Grafana <code>Admin</code> and <code>Editor</code> roles in the workspace. SAML authenticated users not part of <code>Admin</code> or <code>Editor</code> role groups have <code>Viewer</code> permission over the workspace. */
	export interface RoleValues {
		admin?: Array<string>;
		editor?: Array<string>;
	}

	/** This structure defines which groups defined in the SAML assertion attribute are to be mapped to the Grafana <code>Admin</code> and <code>Editor</code> roles in the workspace. SAML authenticated users not part of <code>Admin</code> or <code>Editor</code> role groups have <code>Viewer</code> permission over the workspace. */
	export interface RoleValuesFormProperties {
	}
	export function CreateRoleValuesFormGroup() {
		return new FormGroup<RoleValuesFormProperties>({
		});

	}

	export interface DescribeWorkspaceConfigurationResponse {

		/** Required */
		configuration: string;
		grafanaVersion?: string;
	}
	export interface DescribeWorkspaceConfigurationResponseFormProperties {

		/** Required */
		configuration: FormControl<string | null | undefined>,
		grafanaVersion: FormControl<string | null | undefined>,
	}
	export function CreateDescribeWorkspaceConfigurationResponseFormGroup() {
		return new FormGroup<DescribeWorkspaceConfigurationResponseFormProperties>({
			configuration: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			grafanaVersion: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DisassociateLicenseResponse {

		/** Required */
		workspace: WorkspaceDescription;
	}
	export interface DisassociateLicenseResponseFormProperties {
	}
	export function CreateDisassociateLicenseResponseFormGroup() {
		return new FormGroup<DisassociateLicenseResponseFormProperties>({
		});

	}

	export interface ListPermissionsResponse {
		nextToken?: string;

		/** Required */
		permissions: Array<PermissionEntry>;
	}
	export interface ListPermissionsResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListPermissionsResponseFormGroup() {
		return new FormGroup<ListPermissionsResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A structure containing the identity of one user or group and the <code>Admin</code>, <code>Editor</code>, or <code>Viewer</code> role that they have. */
	export interface PermissionEntry {

		/** Required */
		role: Role;

		/** Required */
		user: User;
	}

	/** A structure containing the identity of one user or group and the <code>Admin</code>, <code>Editor</code>, or <code>Viewer</code> role that they have. */
	export interface PermissionEntryFormProperties {

		/** Required */
		role: FormControl<Role | null | undefined>,
	}
	export function CreatePermissionEntryFormGroup() {
		return new FormGroup<PermissionEntryFormProperties>({
			role: new FormControl<Role | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum Role { ADMIN = 'ADMIN', EDITOR = 'EDITOR', VIEWER = 'VIEWER' }


	/** A structure that specifies one user or group in the workspace. */
	export interface User {

		/** Required */
		id: string;

		/** Required */
		type: UserType;
	}

	/** A structure that specifies one user or group in the workspace. */
	export interface UserFormProperties {

		/** Required */
		id: FormControl<string | null | undefined>,

		/** Required */
		type: FormControl<UserType | null | undefined>,
	}
	export function CreateUserFormGroup() {
		return new FormGroup<UserFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<UserType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum UserType { SSO_USER = 'SSO_USER', SSO_GROUP = 'SSO_GROUP' }

	export interface ListTagsForResourceResponse {
		tags?: TagMap;
	}
	export interface ListTagsForResourceResponseFormProperties {
	}
	export function CreateListTagsForResourceResponseFormGroup() {
		return new FormGroup<ListTagsForResourceResponseFormProperties>({
		});

	}

	export interface ListVersionsResponse {
		grafanaVersions?: Array<string>;
		nextToken?: string;
	}
	export interface ListVersionsResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListVersionsResponseFormGroup() {
		return new FormGroup<ListVersionsResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListWorkspacesResponse {
		nextToken?: string;

		/** Required */
		workspaces: Array<WorkspaceSummary>;
	}
	export interface ListWorkspacesResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListWorkspacesResponseFormGroup() {
		return new FormGroup<ListWorkspacesResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A structure that contains some information about one workspace in the account. */
	export interface WorkspaceSummary {

		/** Required */
		authentication: AuthenticationSummary;

		/** Required */
		created: Date;
		description?: string;

		/** Required */
		endpoint: string;

		/** Required */
		grafanaVersion: string;

		/** Required */
		id: string;

		/** Required */
		modified: Date;
		name?: string;
		notificationDestinations?: Array<NotificationDestinationType>;

		/** Required */
		status: WorkspaceStatus;
		tags?: TagMap;
	}

	/** A structure that contains some information about one workspace in the account. */
	export interface WorkspaceSummaryFormProperties {

		/** Required */
		created: FormControl<Date | null | undefined>,
		description: FormControl<string | null | undefined>,

		/** Required */
		endpoint: FormControl<string | null | undefined>,

		/** Required */
		grafanaVersion: FormControl<string | null | undefined>,

		/** Required */
		id: FormControl<string | null | undefined>,

		/** Required */
		modified: FormControl<Date | null | undefined>,
		name: FormControl<string | null | undefined>,

		/** Required */
		status: FormControl<WorkspaceStatus | null | undefined>,
	}
	export function CreateWorkspaceSummaryFormGroup() {
		return new FormGroup<WorkspaceSummaryFormProperties>({
			created: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			description: new FormControl<string | null | undefined>(undefined),
			endpoint: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			grafanaVersion: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			modified: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<WorkspaceStatus | null | undefined>(undefined, [Validators.required]),
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

	export interface UntagResourceResponse {
	}
	export interface UntagResourceResponseFormProperties {
	}
	export function CreateUntagResourceResponseFormGroup() {
		return new FormGroup<UntagResourceResponseFormProperties>({
		});

	}

	export interface UpdatePermissionsResponse {

		/** Required */
		errors: Array<UpdateError>;
	}
	export interface UpdatePermissionsResponseFormProperties {
	}
	export function CreateUpdatePermissionsResponseFormGroup() {
		return new FormGroup<UpdatePermissionsResponseFormProperties>({
		});

	}


	/** A structure containing information about one error encountered while performing an <a href="https://docs.aws.amazon.com/grafana/latest/APIReference/API_UpdatePermissions.html">UpdatePermissions</a> operation. */
	export interface UpdateError {

		/** Required */
		causedBy: UpdateInstruction;

		/** Required */
		code: number;

		/** Required */
		message: string;
	}

	/** A structure containing information about one error encountered while performing an <a href="https://docs.aws.amazon.com/grafana/latest/APIReference/API_UpdatePermissions.html">UpdatePermissions</a> operation. */
	export interface UpdateErrorFormProperties {

		/** Required */
		code: FormControl<number | null | undefined>,

		/** Required */
		message: FormControl<string | null | undefined>,
	}
	export function CreateUpdateErrorFormGroup() {
		return new FormGroup<UpdateErrorFormProperties>({
			code: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			message: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Contains the instructions for one Grafana role permission update in a <a href="https://docs.aws.amazon.com/grafana/latest/APIReference/API_UpdatePermissions.html">UpdatePermissions</a> operation. */
	export interface UpdateInstruction {

		/** Required */
		action: UpdateAction;

		/** Required */
		role: Role;

		/** Required */
		users: Array<User>;
	}

	/** Contains the instructions for one Grafana role permission update in a <a href="https://docs.aws.amazon.com/grafana/latest/APIReference/API_UpdatePermissions.html">UpdatePermissions</a> operation. */
	export interface UpdateInstructionFormProperties {

		/** Required */
		action: FormControl<UpdateAction | null | undefined>,

		/** Required */
		role: FormControl<Role | null | undefined>,
	}
	export function CreateUpdateInstructionFormGroup() {
		return new FormGroup<UpdateInstructionFormProperties>({
			action: new FormControl<UpdateAction | null | undefined>(undefined, [Validators.required]),
			role: new FormControl<Role | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum UpdateAction { ADD = 'ADD', REVOKE = 'REVOKE' }

	export interface UpdateWorkspaceResponse {

		/** Required */
		workspace: WorkspaceDescription;
	}
	export interface UpdateWorkspaceResponseFormProperties {
	}
	export function CreateUpdateWorkspaceResponseFormGroup() {
		return new FormGroup<UpdateWorkspaceResponseFormProperties>({
		});

	}

	export interface UpdateWorkspaceAuthenticationResponse {

		/** Required */
		authentication: AuthenticationDescription;
	}
	export interface UpdateWorkspaceAuthenticationResponseFormProperties {
	}
	export function CreateUpdateWorkspaceAuthenticationResponseFormGroup() {
		return new FormGroup<UpdateWorkspaceAuthenticationResponseFormProperties>({
		});

	}

	export interface UpdateWorkspaceConfigurationResponse {
	}
	export interface UpdateWorkspaceConfigurationResponseFormProperties {
	}
	export function CreateUpdateWorkspaceConfigurationResponseFormGroup() {
		return new FormGroup<UpdateWorkspaceConfigurationResponseFormProperties>({
		});

	}

	export interface AssociateLicenseRequest {
	}
	export interface AssociateLicenseRequestFormProperties {
	}
	export function CreateAssociateLicenseRequestFormGroup() {
		return new FormGroup<AssociateLicenseRequestFormProperties>({
		});

	}

	export interface CreateWorkspaceApiKeyRequest {

		/** Required */
		keyName: string;

		/** Required */
		keyRole: string;

		/** Required */
		secondsToLive: number;
	}
	export interface CreateWorkspaceApiKeyRequestFormProperties {

		/** Required */
		keyName: FormControl<string | null | undefined>,

		/** Required */
		keyRole: FormControl<string | null | undefined>,

		/** Required */
		secondsToLive: FormControl<number | null | undefined>,
	}
	export function CreateCreateWorkspaceApiKeyRequestFormGroup() {
		return new FormGroup<CreateWorkspaceApiKeyRequestFormProperties>({
			keyName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			keyRole: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			secondsToLive: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateWorkspaceRequest {

		/** Required */
		accountAccessType: AccountAccessType;

		/** Required */
		authenticationProviders: Array<AuthenticationProviderTypes>;
		clientToken?: string;
		configuration?: string;
		grafanaVersion?: string;
		networkAccessControl?: NetworkAccessConfiguration;
		organizationRoleName?: string;

		/** Required */
		permissionType: PermissionType;
		stackSetName?: string;
		tags?: TagMap;
		vpcConfiguration?: VpcConfiguration;
		workspaceDataSources?: Array<DataSourceType>;
		workspaceDescription?: string;
		workspaceName?: string;
		workspaceNotificationDestinations?: Array<NotificationDestinationType>;
		workspaceOrganizationalUnits?: Array<string>;
		workspaceRoleArn?: string;
	}
	export interface CreateWorkspaceRequestFormProperties {

		/** Required */
		accountAccessType: FormControl<AccountAccessType | null | undefined>,
		clientToken: FormControl<string | null | undefined>,
		configuration: FormControl<string | null | undefined>,
		grafanaVersion: FormControl<string | null | undefined>,
		organizationRoleName: FormControl<string | null | undefined>,

		/** Required */
		permissionType: FormControl<PermissionType | null | undefined>,
		stackSetName: FormControl<string | null | undefined>,
		workspaceDescription: FormControl<string | null | undefined>,
		workspaceName: FormControl<string | null | undefined>,
		workspaceRoleArn: FormControl<string | null | undefined>,
	}
	export function CreateCreateWorkspaceRequestFormGroup() {
		return new FormGroup<CreateWorkspaceRequestFormProperties>({
			accountAccessType: new FormControl<AccountAccessType | null | undefined>(undefined, [Validators.required]),
			clientToken: new FormControl<string | null | undefined>(undefined),
			configuration: new FormControl<string | null | undefined>(undefined),
			grafanaVersion: new FormControl<string | null | undefined>(undefined),
			organizationRoleName: new FormControl<string | null | undefined>(undefined),
			permissionType: new FormControl<PermissionType | null | undefined>(undefined, [Validators.required]),
			stackSetName: new FormControl<string | null | undefined>(undefined),
			workspaceDescription: new FormControl<string | null | undefined>(undefined),
			workspaceName: new FormControl<string | null | undefined>(undefined),
			workspaceRoleArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DeleteWorkspaceApiKeyRequest {
	}
	export interface DeleteWorkspaceApiKeyRequestFormProperties {
	}
	export function CreateDeleteWorkspaceApiKeyRequestFormGroup() {
		return new FormGroup<DeleteWorkspaceApiKeyRequestFormProperties>({
		});

	}

	export interface DeleteWorkspaceRequest {
	}
	export interface DeleteWorkspaceRequestFormProperties {
	}
	export function CreateDeleteWorkspaceRequestFormGroup() {
		return new FormGroup<DeleteWorkspaceRequestFormProperties>({
		});

	}

	export interface DescribeWorkspaceAuthenticationRequest {
	}
	export interface DescribeWorkspaceAuthenticationRequestFormProperties {
	}
	export function CreateDescribeWorkspaceAuthenticationRequestFormGroup() {
		return new FormGroup<DescribeWorkspaceAuthenticationRequestFormProperties>({
		});

	}

	export interface DescribeWorkspaceConfigurationRequest {
	}
	export interface DescribeWorkspaceConfigurationRequestFormProperties {
	}
	export function CreateDescribeWorkspaceConfigurationRequestFormGroup() {
		return new FormGroup<DescribeWorkspaceConfigurationRequestFormProperties>({
		});

	}

	export interface DescribeWorkspaceRequest {
	}
	export interface DescribeWorkspaceRequestFormProperties {
	}
	export function CreateDescribeWorkspaceRequestFormGroup() {
		return new FormGroup<DescribeWorkspaceRequestFormProperties>({
		});

	}

	export interface DisassociateLicenseRequest {
	}
	export interface DisassociateLicenseRequestFormProperties {
	}
	export function CreateDisassociateLicenseRequestFormGroup() {
		return new FormGroup<DisassociateLicenseRequestFormProperties>({
		});

	}

	export interface ListPermissionsRequest {
	}
	export interface ListPermissionsRequestFormProperties {
	}
	export function CreateListPermissionsRequestFormGroup() {
		return new FormGroup<ListPermissionsRequestFormProperties>({
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

	export interface ListVersionsRequest {
	}
	export interface ListVersionsRequestFormProperties {
	}
	export function CreateListVersionsRequestFormGroup() {
		return new FormGroup<ListVersionsRequestFormProperties>({
		});

	}

	export interface ListWorkspacesRequest {
	}
	export interface ListWorkspacesRequestFormProperties {
	}
	export function CreateListWorkspacesRequestFormGroup() {
		return new FormGroup<ListWorkspacesRequestFormProperties>({
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

	export interface UpdatePermissionsRequest {

		/** Required */
		updateInstructionBatch: Array<UpdateInstruction>;
	}
	export interface UpdatePermissionsRequestFormProperties {
	}
	export function CreateUpdatePermissionsRequestFormGroup() {
		return new FormGroup<UpdatePermissionsRequestFormProperties>({
		});

	}

	export interface UpdateWorkspaceAuthenticationRequest {

		/** Required */
		authenticationProviders: Array<AuthenticationProviderTypes>;
		samlConfiguration?: SamlConfiguration;
	}
	export interface UpdateWorkspaceAuthenticationRequestFormProperties {
	}
	export function CreateUpdateWorkspaceAuthenticationRequestFormGroup() {
		return new FormGroup<UpdateWorkspaceAuthenticationRequestFormProperties>({
		});

	}

	export interface UpdateWorkspaceConfigurationRequest {

		/** Required */
		configuration: string;
		grafanaVersion?: string;
	}
	export interface UpdateWorkspaceConfigurationRequestFormProperties {

		/** Required */
		configuration: FormControl<string | null | undefined>,
		grafanaVersion: FormControl<string | null | undefined>,
	}
	export function CreateUpdateWorkspaceConfigurationRequestFormGroup() {
		return new FormGroup<UpdateWorkspaceConfigurationRequestFormProperties>({
			configuration: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			grafanaVersion: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateWorkspaceRequest {
		accountAccessType?: AccountAccessType;
		networkAccessControl?: NetworkAccessConfiguration;
		organizationRoleName?: string;
		permissionType?: PermissionType;
		removeNetworkAccessConfiguration?: boolean | null;
		removeVpcConfiguration?: boolean | null;
		stackSetName?: string;
		vpcConfiguration?: VpcConfiguration;
		workspaceDataSources?: Array<DataSourceType>;
		workspaceDescription?: string;
		workspaceName?: string;
		workspaceNotificationDestinations?: Array<NotificationDestinationType>;
		workspaceOrganizationalUnits?: Array<string>;
		workspaceRoleArn?: string;
	}
	export interface UpdateWorkspaceRequestFormProperties {
		accountAccessType: FormControl<AccountAccessType | null | undefined>,
		organizationRoleName: FormControl<string | null | undefined>,
		permissionType: FormControl<PermissionType | null | undefined>,
		removeNetworkAccessConfiguration: FormControl<boolean | null | undefined>,
		removeVpcConfiguration: FormControl<boolean | null | undefined>,
		stackSetName: FormControl<string | null | undefined>,
		workspaceDescription: FormControl<string | null | undefined>,
		workspaceName: FormControl<string | null | undefined>,
		workspaceRoleArn: FormControl<string | null | undefined>,
	}
	export function CreateUpdateWorkspaceRequestFormGroup() {
		return new FormGroup<UpdateWorkspaceRequestFormProperties>({
			accountAccessType: new FormControl<AccountAccessType | null | undefined>(undefined),
			organizationRoleName: new FormControl<string | null | undefined>(undefined),
			permissionType: new FormControl<PermissionType | null | undefined>(undefined),
			removeNetworkAccessConfiguration: new FormControl<boolean | null | undefined>(undefined),
			removeVpcConfiguration: new FormControl<boolean | null | undefined>(undefined),
			stackSetName: new FormControl<string | null | undefined>(undefined),
			workspaceDescription: new FormControl<string | null | undefined>(undefined),
			workspaceName: new FormControl<string | null | undefined>(undefined),
			workspaceRoleArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Assigns a Grafana Enterprise license to a workspace. Upgrading to Grafana Enterprise incurs additional fees. For more information, see <a href="https://docs.aws.amazon.com/grafana/latest/userguide/upgrade-to-Grafana-Enterprise.html">Upgrade a workspace to Grafana Enterprise</a>.
		 * Post workspaces/{workspaceId}/licenses/{licenseType}
		 * @param {LicenseType} licenseType The type of license to associate with the workspace.
		 * @param {string} workspaceId The ID of the workspace to associate the license with.
		 * @return {void} 
		 */
		AssociateLicense(licenseType: LicenseType, workspaceId: string): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'workspaces/' + (workspaceId == null ? '' : encodeURIComponent(workspaceId)) + '/licenses/' + licenseType, null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Removes the Grafana Enterprise license from a workspace.
		 * Delete workspaces/{workspaceId}/licenses/{licenseType}
		 * @param {LicenseType} licenseType The type of license to remove from the workspace.
		 * @param {string} workspaceId The ID of the workspace to remove the Grafana Enterprise license from.
		 * @return {void} 
		 */
		DisassociateLicense(licenseType: LicenseType, workspaceId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'workspaces/' + (workspaceId == null ? '' : encodeURIComponent(workspaceId)) + '/licenses/' + licenseType, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Creates a <i>workspace</i>. In a workspace, you can create Grafana dashboards and visualizations to analyze your metrics, logs, and traces. You don't have to build, package, or deploy any hardware to run the Grafana server.</p> <p>Don't use <code>CreateWorkspace</code> to modify an existing workspace. Instead, use <a href="https://docs.aws.amazon.com/grafana/latest/APIReference/API_UpdateWorkspace.html">UpdateWorkspace</a>.</p>
		 * Post workspaces
		 * @return {void} 
		 */
		CreateWorkspace(requestBody: CreateWorkspacePostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'workspaces', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns a list of Amazon Managed Grafana workspaces in the account, with some information about each workspace. For more complete information about one workspace, use <a href="https://docs.aws.amazon.com/AAMG/latest/APIReference/API_DescribeWorkspace.html">DescribeWorkspace</a>.
		 * Get workspaces
		 * @param {number} maxResults The maximum number of workspaces to include in the results.
		 *     Minimum: 1    Maximum: 100
		 * @param {string} nextToken The token for the next set of workspaces to return. (You receive this token from a previous <code>ListWorkspaces</code> operation.)
		 * @return {ListWorkspacesResponse} Success
		 */
		ListWorkspaces(maxResults: number | null | undefined, nextToken: string | null | undefined): Observable<ListWorkspacesResponse> {
			return this.http.get<ListWorkspacesResponse>(this.baseUri + 'workspaces?maxResults=' + maxResults + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), {});
		}

		/**
		 * Creates a Grafana API key for the workspace. This key can be used to authenticate requests sent to the workspace's HTTP API. See <a href="https://docs.aws.amazon.com/grafana/latest/userguide/Using-Grafana-APIs.html">https://docs.aws.amazon.com/grafana/latest/userguide/Using-Grafana-APIs.html</a> for available APIs and example requests.
		 * Post workspaces/{workspaceId}/apikeys
		 * @param {string} workspaceId The ID of the workspace to create an API key.
		 * @return {CreateWorkspaceApiKeyResponse} Success
		 */
		CreateWorkspaceApiKey(workspaceId: string, requestBody: CreateWorkspaceApiKeyPostBody): Observable<CreateWorkspaceApiKeyResponse> {
			return this.http.post<CreateWorkspaceApiKeyResponse>(this.baseUri + 'workspaces/' + (workspaceId == null ? '' : encodeURIComponent(workspaceId)) + '/apikeys', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes an Amazon Managed Grafana workspace.
		 * Delete workspaces/{workspaceId}
		 * @param {string} workspaceId The ID of the workspace to delete.
		 * @return {void} 
		 */
		DeleteWorkspace(workspaceId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'workspaces/' + (workspaceId == null ? '' : encodeURIComponent(workspaceId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Displays information about one Amazon Managed Grafana workspace.
		 * Get workspaces/{workspaceId}
		 * @param {string} workspaceId The ID of the workspace to display information about.
		 * @return {DescribeWorkspaceResponse} Success
		 */
		DescribeWorkspace(workspaceId: string): Observable<DescribeWorkspaceResponse> {
			return this.http.get<DescribeWorkspaceResponse>(this.baseUri + 'workspaces/' + (workspaceId == null ? '' : encodeURIComponent(workspaceId)), {});
		}

		/**
		 * <p>Modifies an existing Amazon Managed Grafana workspace. If you use this operation and omit any optional parameters, the existing values of those parameters are not changed.</p> <p>To modify the user authentication methods that the workspace uses, such as SAML or IAM Identity Center, use <a href="https://docs.aws.amazon.com/grafana/latest/APIReference/API_UpdateWorkspaceAuthentication.html">UpdateWorkspaceAuthentication</a>.</p> <p>To modify which users in the workspace have the <code>Admin</code> and <code>Editor</code> Grafana roles, use <a href="https://docs.aws.amazon.com/grafana/latest/APIReference/API_UpdatePermissions.html">UpdatePermissions</a>.</p>
		 * Put workspaces/{workspaceId}
		 * @param {string} workspaceId The ID of the workspace to update.
		 * @return {void} 
		 */
		UpdateWorkspace(workspaceId: string, requestBody: UpdateWorkspacePutBody): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'workspaces/' + (workspaceId == null ? '' : encodeURIComponent(workspaceId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Deletes a Grafana API key for the workspace.
		 * Delete workspaces/{workspaceId}/apikeys/{keyName}
		 * @param {string} keyName The name of the API key to delete.
		 *     Min length: 1    Max length: 100
		 * @param {string} workspaceId The ID of the workspace to delete.
		 * @return {DeleteWorkspaceApiKeyResponse} Success
		 */
		DeleteWorkspaceApiKey(keyName: string, workspaceId: string): Observable<DeleteWorkspaceApiKeyResponse> {
			return this.http.delete<DeleteWorkspaceApiKeyResponse>(this.baseUri + 'workspaces/' + (workspaceId == null ? '' : encodeURIComponent(workspaceId)) + '/apikeys/' + (keyName == null ? '' : encodeURIComponent(keyName)), {});
		}

		/**
		 * Displays information about the authentication methods used in one Amazon Managed Grafana workspace.
		 * Get workspaces/{workspaceId}/authentication
		 * @param {string} workspaceId The ID of the workspace to return authentication information about.
		 * @return {DescribeWorkspaceAuthenticationResponse} Success
		 */
		DescribeWorkspaceAuthentication(workspaceId: string): Observable<DescribeWorkspaceAuthenticationResponse> {
			return this.http.get<DescribeWorkspaceAuthenticationResponse>(this.baseUri + 'workspaces/' + (workspaceId == null ? '' : encodeURIComponent(workspaceId)) + '/authentication', {});
		}

		/**
		 * <p>Use this operation to define the identity provider (IdP) that this workspace authenticates users from, using SAML. You can also map SAML assertion attributes to workspace user information and define which groups in the assertion attribute are to have the <code>Admin</code> and <code>Editor</code> roles in the workspace.</p> <note> <p>Changes to the authentication method for a workspace may take a few minutes to take effect.</p> </note>
		 * Post workspaces/{workspaceId}/authentication
		 * @param {string} workspaceId The ID of the workspace to update the authentication for.
		 * @return {UpdateWorkspaceAuthenticationResponse} Success
		 */
		UpdateWorkspaceAuthentication(workspaceId: string, requestBody: UpdateWorkspaceAuthenticationPostBody): Observable<UpdateWorkspaceAuthenticationResponse> {
			return this.http.post<UpdateWorkspaceAuthenticationResponse>(this.baseUri + 'workspaces/' + (workspaceId == null ? '' : encodeURIComponent(workspaceId)) + '/authentication', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets the current configuration string for the given workspace.
		 * Get workspaces/{workspaceId}/configuration
		 * @param {string} workspaceId The ID of the workspace to get configuration information for.
		 * @return {DescribeWorkspaceConfigurationResponse} Success
		 */
		DescribeWorkspaceConfiguration(workspaceId: string): Observable<DescribeWorkspaceConfigurationResponse> {
			return this.http.get<DescribeWorkspaceConfigurationResponse>(this.baseUri + 'workspaces/' + (workspaceId == null ? '' : encodeURIComponent(workspaceId)) + '/configuration', {});
		}

		/**
		 * Updates the configuration string for the given workspace
		 * Put workspaces/{workspaceId}/configuration
		 * @param {string} workspaceId The ID of the workspace to update.
		 * @return {void} 
		 */
		UpdateWorkspaceConfiguration(workspaceId: string, requestBody: UpdateWorkspaceConfigurationPutBody): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'workspaces/' + (workspaceId == null ? '' : encodeURIComponent(workspaceId)) + '/configuration', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Lists the users and groups who have the Grafana <code>Admin</code> and <code>Editor</code> roles in this workspace. If you use this operation without specifying <code>userId</code> or <code>groupId</code>, the operation returns the roles of all users and groups. If you specify a <code>userId</code> or a <code>groupId</code>, only the roles for that user or group are returned. If you do this, you can specify only one <code>userId</code> or one <code>groupId</code>.
		 * Get workspaces/{workspaceId}/permissions
		 * @param {string} groupId (Optional) Limits the results to only the group that matches this ID.
		 *     Min length: 1    Max length: 47
		 * @param {number} maxResults The maximum number of results to include in the response.
		 *     Minimum: 1    Maximum: 100
		 * @param {string} nextToken The token to use when requesting the next set of results. You received this token from a previous <code>ListPermissions</code> operation.
		 * @param {string} userId (Optional) Limits the results to only the user that matches this ID.
		 *     Min length: 1    Max length: 47
		 * @param {UserType} userType (Optional) If you specify <code>SSO_USER</code>, then only the permissions of IAM Identity Center users are returned. If you specify <code>SSO_GROUP</code>, only the permissions of IAM Identity Center groups are returned.
		 * @param {string} workspaceId The ID of the workspace to list permissions for. This parameter is required.
		 * @return {ListPermissionsResponse} Success
		 */
		ListPermissions(groupId: string | null | undefined, maxResults: number | null | undefined, nextToken: string | null | undefined, userId: string | null | undefined, userType: UserType | null | undefined, workspaceId: string): Observable<ListPermissionsResponse> {
			return this.http.get<ListPermissionsResponse>(this.baseUri + 'workspaces/' + (workspaceId == null ? '' : encodeURIComponent(workspaceId)) + '/permissions?groupId=' + (groupId == null ? '' : encodeURIComponent(groupId)) + '&maxResults=' + maxResults + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&userId=' + (userId == null ? '' : encodeURIComponent(userId)) + '&userType=' + userType, {});
		}

		/**
		 * Updates which users in a workspace have the Grafana <code>Admin</code> or <code>Editor</code> roles.
		 * Patch workspaces/{workspaceId}/permissions
		 * @param {string} workspaceId The ID of the workspace to update.
		 * @return {UpdatePermissionsResponse} Success
		 */
		UpdatePermissions(workspaceId: string, requestBody: UpdatePermissionsPatchBody): Observable<UpdatePermissionsResponse> {
			return this.http.patch<UpdatePermissionsResponse>(this.baseUri + 'workspaces/' + (workspaceId == null ? '' : encodeURIComponent(workspaceId)) + '/permissions', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * The <code>ListTagsForResource</code> operation returns the tags that are associated with the Amazon Managed Service for Grafana resource specified by the <code>resourceArn</code>. Currently, the only resource that can be tagged is a workspace.
		 * Get tags/{resourceArn}
		 * @param {string} resourceArn The ARN of the resource the list of tags are associated with.
		 * @return {ListTagsForResourceResponse} Success
		 */
		ListTagsForResource(resourceArn: string): Observable<ListTagsForResourceResponse> {
			return this.http.get<ListTagsForResourceResponse>(this.baseUri + 'tags/' + (resourceArn == null ? '' : encodeURIComponent(resourceArn)), {});
		}

		/**
		 * <p>The <code>TagResource</code> operation associates tags with an Amazon Managed Grafana resource. Currently, the only resource that can be tagged is workspaces. </p> <p>If you specify a new tag key for the resource, this tag is appended to the list of tags associated with the resource. If you specify a tag key that is already associated with the resource, the new tag value that you specify replaces the previous value for that tag.</p>
		 * Post tags/{resourceArn}
		 * @param {string} resourceArn The ARN of the resource the tag is associated with.
		 * @return {TagResourceResponse} Success
		 */
		TagResource(resourceArn: string, requestBody: TagResourcePostBody): Observable<TagResourceResponse> {
			return this.http.post<TagResourceResponse>(this.baseUri + 'tags/' + (resourceArn == null ? '' : encodeURIComponent(resourceArn)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists available versions of Grafana. These are available when calling <code>CreateWorkspace</code>. Optionally, include a workspace to list the versions to which it can be upgraded.
		 * Get versions
		 * @param {number} maxResults The maximum number of results to include in the response.
		 *     Minimum: 1    Maximum: 100
		 * @param {string} nextToken The token to use when requesting the next set of results. You receive this token from a previous <code>ListVersions</code> operation.
		 * @param {string} workspace_id The ID of the workspace to list the available upgrade versions. If not included, lists all versions of Grafana that are supported for <code>CreateWorkspace</code>.
		 * @return {ListVersionsResponse} Success
		 */
		ListVersions(maxResults: number | null | undefined, nextToken: string | null | undefined, workspace_id: string | null | undefined): Observable<ListVersionsResponse> {
			return this.http.get<ListVersionsResponse>(this.baseUri + 'versions?maxResults=' + maxResults + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&workspace_id=' + (workspace_id == null ? '' : encodeURIComponent(workspace_id)), {});
		}

		/**
		 * The <code>UntagResource</code> operation removes the association of the tag with the Amazon Managed Grafana resource.
		 * Delete tags/{resourceArn}#tagKeys
		 * @param {string} resourceArn The ARN of the resource the tag association is removed from. 
		 * @param {Array<string>} tagKeys The key values of the tag to be removed from the resource.
		 * @return {UntagResourceResponse} Success
		 */
		UntagResource(resourceArn: string, tagKeys: Array<string>): Observable<UntagResourceResponse> {
			return this.http.delete<UntagResourceResponse>(this.baseUri + 'tags/' + (resourceArn == null ? '' : encodeURIComponent(resourceArn)) + '#tagKeys&' + tagKeys.map(z => `tagKeys=${encodeURIComponent(z)}`).join('&'), {});
		}
	}

	export interface CreateWorkspacePostBody {

		/**
		 * Specifies whether the workspace can access Amazon Web Services resources in this Amazon Web Services account only, or whether it can also access Amazon Web Services resources in other accounts in the same organization. If you specify <code>ORGANIZATION</code>, you must specify which organizational units the workspace can access in the <code>workspaceOrganizationalUnits</code> parameter.
		 * Required
		 */
		accountAccessType: AccountAccessType;

		/**
		 * Specifies whether this workspace uses SAML 2.0, IAM Identity Center (successor to Single Sign-On), or both to authenticate users for using the Grafana console within a workspace. For more information, see <a href="https://docs.aws.amazon.com/grafana/latest/userguide/authentication-in-AMG.html">User authentication in Amazon Managed Grafana</a>.
		 * Required
		 */
		authenticationProviders: Array<AuthenticationProviderTypes>;

		/** A unique, case-sensitive, user-provided identifier to ensure the idempotency of the request. */
		clientToken?: string | null;

		/**
		 * The configuration string for the workspace that you create. For more information about the format and configuration options available, see <a href="https://docs.aws.amazon.com/grafana/latest/userguide/AMG-configure-workspace.html">Working in your Grafana workspace</a>.
		 * Min length: 2
		 * Max length: 65536
		 */
		configuration?: string | null;

		/**
		 * <p>Specifies the version of Grafana to support in the new workspace.</p> <p>To get a list of supported version, use the <code>ListVersions</code> operation.</p>
		 * Min length: 1
		 * Max length: 255
		 */
		grafanaVersion?: string | null;

		/** <p>The configuration settings for in-bound network access to your workspace.</p> <p>When this is configured, only listed IP addresses and VPC endpoints will be able to access your workspace. Standard Grafana authentication and authorization are still required.</p> <p>Access is granted to a caller that is in either the IP address list or the VPC endpoint list - they do not need to be in both.</p> <p>If this is not configured, or is removed, then all IP addresses and VPC endpoints are allowed. Standard Grafana authentication and authorization are still required.</p> <note> <p>While both <code>prefixListIds</code> and <code>vpceIds</code> are required, you can pass in an empty array of strings for either parameter if you do not want to allow any of that type.</p> <p>If both are passed as empty arrays, no traffic is allowed to the workspace, because only <i>explicitly</i> allowed connections are accepted.</p> </note> */
		networkAccessControl?: CreateWorkspacePostBodyNetworkAccessControl;

		/**
		 * The name of an IAM role that already exists to use with Organizations to access Amazon Web Services data sources and notification channels in other accounts in an organization.
		 * Min length: 1
		 * Max length: 2048
		 */
		organizationRoleName?: string | null;

		/**
		 * <p>When creating a workspace through the Amazon Web Services API, CLI or Amazon Web Services CloudFormation, you must manage IAM roles and provision the permissions that the workspace needs to use Amazon Web Services data sources and notification channels.</p> <p>You must also specify a <code>workspaceRoleArn</code> for a role that you will manage for the workspace to use when accessing those datasources and notification channels.</p> <p>The ability for Amazon Managed Grafana to create and update IAM roles on behalf of the user is supported only in the Amazon Managed Grafana console, where this value may be set to <code>SERVICE_MANAGED</code>.</p> <note> <p>Use only the <code>CUSTOMER_MANAGED</code> permission type when creating a workspace with the API, CLI or Amazon Web Services CloudFormation. </p> </note> <p>For more information, see <a href="https://docs.aws.amazon.com/grafana/latest/userguide/AMG-manage-permissions.html">Amazon Managed Grafana permissions and policies for Amazon Web Services data sources and notification channels</a>.</p>
		 * Required
		 */
		permissionType: PermissionType;

		/** The name of the CloudFormation stack set to use to generate IAM roles to be used for this workspace. */
		stackSetName?: string | null;

		/** The list of tags associated with the workspace. */
		tags?: {[id: string]: string };

		/** <p>The configuration settings for an Amazon VPC that contains data sources for your Grafana workspace to connect to.</p> <note> <p>Provided <code>securityGroupIds</code> and <code>subnetIds</code> must be part of the same VPC.</p> <p>Connecting to a private VPC is not yet available in the Asia Pacific (Seoul) Region (ap-northeast-2).</p> </note> */
		vpcConfiguration?: CreateWorkspacePostBodyVpcConfiguration;

		/** This parameter is for internal use only, and should not be used. */
		workspaceDataSources?: Array<DataSourceType>;

		/**
		 * <p>A description for the workspace. This is used only to help you identify this workspace.</p> <p>Pattern: <code>^[\\p{L}\\p{Z}\\p{N}\\p{P}]{0,2048}$</code> </p>
		 * Min length: 0
		 * Max length: 2048
		 */
		workspaceDescription?: string | null;

		/** The name for the workspace. It does not have to be unique. */
		workspaceName?: string | null;

		/** Specify the Amazon Web Services notification channels that you plan to use in this workspace. Specifying these data sources here enables Amazon Managed Grafana to create IAM roles and permissions that allow Amazon Managed Grafana to use these channels. */
		workspaceNotificationDestinations?: Array<NotificationDestinationType>;

		/** Specifies the organizational units that this workspace is allowed to use data sources from, if this workspace is in an account that is part of an organization. */
		workspaceOrganizationalUnits?: Array<string>;

		/**
		 * Specified the IAM role that grants permissions to the Amazon Web Services resources that the workspace will view data from, including both data sources and notification channels. You are responsible for managing the permissions for this role as new data sources or notification channels are added.
		 * Min length: 1
		 * Max length: 2048
		 */
		workspaceRoleArn?: string | null;
	}
	export interface CreateWorkspacePostBodyFormProperties {

		/**
		 * Specifies whether the workspace can access Amazon Web Services resources in this Amazon Web Services account only, or whether it can also access Amazon Web Services resources in other accounts in the same organization. If you specify <code>ORGANIZATION</code>, you must specify which organizational units the workspace can access in the <code>workspaceOrganizationalUnits</code> parameter.
		 * Required
		 */
		accountAccessType: FormControl<AccountAccessType | null | undefined>,

		/** A unique, case-sensitive, user-provided identifier to ensure the idempotency of the request. */
		clientToken: FormControl<string | null | undefined>,

		/**
		 * The configuration string for the workspace that you create. For more information about the format and configuration options available, see <a href="https://docs.aws.amazon.com/grafana/latest/userguide/AMG-configure-workspace.html">Working in your Grafana workspace</a>.
		 * Min length: 2
		 * Max length: 65536
		 */
		configuration: FormControl<string | null | undefined>,

		/**
		 * <p>Specifies the version of Grafana to support in the new workspace.</p> <p>To get a list of supported version, use the <code>ListVersions</code> operation.</p>
		 * Min length: 1
		 * Max length: 255
		 */
		grafanaVersion: FormControl<string | null | undefined>,

		/**
		 * The name of an IAM role that already exists to use with Organizations to access Amazon Web Services data sources and notification channels in other accounts in an organization.
		 * Min length: 1
		 * Max length: 2048
		 */
		organizationRoleName: FormControl<string | null | undefined>,

		/**
		 * <p>When creating a workspace through the Amazon Web Services API, CLI or Amazon Web Services CloudFormation, you must manage IAM roles and provision the permissions that the workspace needs to use Amazon Web Services data sources and notification channels.</p> <p>You must also specify a <code>workspaceRoleArn</code> for a role that you will manage for the workspace to use when accessing those datasources and notification channels.</p> <p>The ability for Amazon Managed Grafana to create and update IAM roles on behalf of the user is supported only in the Amazon Managed Grafana console, where this value may be set to <code>SERVICE_MANAGED</code>.</p> <note> <p>Use only the <code>CUSTOMER_MANAGED</code> permission type when creating a workspace with the API, CLI or Amazon Web Services CloudFormation. </p> </note> <p>For more information, see <a href="https://docs.aws.amazon.com/grafana/latest/userguide/AMG-manage-permissions.html">Amazon Managed Grafana permissions and policies for Amazon Web Services data sources and notification channels</a>.</p>
		 * Required
		 */
		permissionType: FormControl<PermissionType | null | undefined>,

		/** The name of the CloudFormation stack set to use to generate IAM roles to be used for this workspace. */
		stackSetName: FormControl<string | null | undefined>,

		/** The list of tags associated with the workspace. */
		tags: FormControl<{[id: string]: string } | null | undefined>,

		/**
		 * <p>A description for the workspace. This is used only to help you identify this workspace.</p> <p>Pattern: <code>^[\\p{L}\\p{Z}\\p{N}\\p{P}]{0,2048}$</code> </p>
		 * Min length: 0
		 * Max length: 2048
		 */
		workspaceDescription: FormControl<string | null | undefined>,

		/** The name for the workspace. It does not have to be unique. */
		workspaceName: FormControl<string | null | undefined>,

		/**
		 * Specified the IAM role that grants permissions to the Amazon Web Services resources that the workspace will view data from, including both data sources and notification channels. You are responsible for managing the permissions for this role as new data sources or notification channels are added.
		 * Min length: 1
		 * Max length: 2048
		 */
		workspaceRoleArn: FormControl<string | null | undefined>,
	}
	export function CreateCreateWorkspacePostBodyFormGroup() {
		return new FormGroup<CreateWorkspacePostBodyFormProperties>({
			accountAccessType: new FormControl<AccountAccessType | null | undefined>(undefined, [Validators.required]),
			clientToken: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^[!-~]{1,64}$')]),
			configuration: new FormControl<string | null | undefined>(undefined, [Validators.minLength(2), Validators.maxLength(65536)]),
			grafanaVersion: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(255)]),
			organizationRoleName: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(2048)]),
			permissionType: new FormControl<PermissionType | null | undefined>(undefined, [Validators.required]),
			stackSetName: new FormControl<string | null | undefined>(undefined),
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			workspaceDescription: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(2048)]),
			workspaceName: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^[a-zA-Z0-9-._~]{1,255}$')]),
			workspaceRoleArn: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(2048)]),
		});

	}

	export interface CreateWorkspacePostBodyNetworkAccessControl {
		prefixListIds?: Array<string>;
		vpceIds?: Array<string>;
	}
	export interface CreateWorkspacePostBodyNetworkAccessControlFormProperties {
	}
	export function CreateCreateWorkspacePostBodyNetworkAccessControlFormGroup() {
		return new FormGroup<CreateWorkspacePostBodyNetworkAccessControlFormProperties>({
		});

	}

	export interface CreateWorkspacePostBodyVpcConfiguration {
		securityGroupIds?: Array<string>;
		subnetIds?: Array<string>;
	}
	export interface CreateWorkspacePostBodyVpcConfigurationFormProperties {
	}
	export function CreateCreateWorkspacePostBodyVpcConfigurationFormGroup() {
		return new FormGroup<CreateWorkspacePostBodyVpcConfigurationFormProperties>({
		});

	}

	export interface CreateWorkspaceApiKeyPostBody {

		/**
		 * Specifies the name of the key. Keynames must be unique to the workspace.
		 * Required
		 * Min length: 1
		 * Max length: 100
		 */
		keyName: string;

		/**
		 * <p>Specifies the permission level of the key.</p> <p> Valid values: <code>VIEWER</code>|<code>EDITOR</code>|<code>ADMIN</code> </p>
		 * Required
		 */
		keyRole: string;

		/**
		 * Specifies the time in seconds until the key expires. Keys can be valid for up to 30 days.
		 * Required
		 * Minimum: 1
		 * Maximum: 2592000
		 */
		secondsToLive: number;
	}
	export interface CreateWorkspaceApiKeyPostBodyFormProperties {

		/**
		 * Specifies the name of the key. Keynames must be unique to the workspace.
		 * Required
		 * Min length: 1
		 * Max length: 100
		 */
		keyName: FormControl<string | null | undefined>,

		/**
		 * <p>Specifies the permission level of the key.</p> <p> Valid values: <code>VIEWER</code>|<code>EDITOR</code>|<code>ADMIN</code> </p>
		 * Required
		 */
		keyRole: FormControl<string | null | undefined>,

		/**
		 * Specifies the time in seconds until the key expires. Keys can be valid for up to 30 days.
		 * Required
		 * Minimum: 1
		 * Maximum: 2592000
		 */
		secondsToLive: FormControl<number | null | undefined>,
	}
	export function CreateCreateWorkspaceApiKeyPostBodyFormGroup() {
		return new FormGroup<CreateWorkspaceApiKeyPostBodyFormProperties>({
			keyName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(100)]),
			keyRole: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			secondsToLive: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(1), Validators.max(2592000)]),
		});

	}

	export interface UpdateWorkspacePutBody {

		/** Specifies whether the workspace can access Amazon Web Services resources in this Amazon Web Services account only, or whether it can also access Amazon Web Services resources in other accounts in the same organization. If you specify <code>ORGANIZATION</code>, you must specify which organizational units the workspace can access in the <code>workspaceOrganizationalUnits</code> parameter. */
		accountAccessType?: AccountAccessType | null;

		/** <p>The configuration settings for in-bound network access to your workspace.</p> <p>When this is configured, only listed IP addresses and VPC endpoints will be able to access your workspace. Standard Grafana authentication and authorization are still required.</p> <p>Access is granted to a caller that is in either the IP address list or the VPC endpoint list - they do not need to be in both.</p> <p>If this is not configured, or is removed, then all IP addresses and VPC endpoints are allowed. Standard Grafana authentication and authorization are still required.</p> <note> <p>While both <code>prefixListIds</code> and <code>vpceIds</code> are required, you can pass in an empty array of strings for either parameter if you do not want to allow any of that type.</p> <p>If both are passed as empty arrays, no traffic is allowed to the workspace, because only <i>explicitly</i> allowed connections are accepted.</p> </note> */
		networkAccessControl?: UpdateWorkspacePutBodyNetworkAccessControl;

		/**
		 * The name of an IAM role that already exists to use to access resources through Organizations. This can only be used with a workspace that has the <code>permissionType</code> set to <code>CUSTOMER_MANAGED</code>.
		 * Min length: 1
		 * Max length: 2048
		 */
		organizationRoleName?: string | null;

		/** <p>Use this parameter if you want to change a workspace from <code>SERVICE_MANAGED</code> to <code>CUSTOMER_MANAGED</code>. This allows you to manage the permissions that the workspace uses to access datasources and notification channels. If the workspace is in a member Amazon Web Services account of an organization, and that account is not a delegated administrator account, and you want the workspace to access data sources in other Amazon Web Services accounts in the organization, you must choose <code>CUSTOMER_MANAGED</code>.</p> <p>If you specify this as <code>CUSTOMER_MANAGED</code>, you must also specify a <code>workspaceRoleArn</code> that the workspace will use for accessing Amazon Web Services resources.</p> <p>For more information on the role and permissions needed, see <a href="https://docs.aws.amazon.com/grafana/latest/userguide/AMG-manage-permissions.html">Amazon Managed Grafana permissions and policies for Amazon Web Services data sources and notification channels</a> </p> <note> <p>Do not use this to convert a <code>CUSTOMER_MANAGED</code> workspace to <code>SERVICE_MANAGED</code>. Do not include this parameter if you want to leave the workspace as <code>SERVICE_MANAGED</code>.</p> <p>You can convert a <code>CUSTOMER_MANAGED</code> workspace to <code>SERVICE_MANAGED</code> using the Amazon Managed Grafana console. For more information, see <a href="https://docs.aws.amazon.com/grafana/latest/userguide/AMG-datasource-and-notification.html">Managing permissions for data sources and notification channels</a>.</p> </note> */
		permissionType?: PermissionType | null;

		/** <p>Whether to remove the network access configuration from the workspace.</p> <p>Setting this to <code>true</code> and providing a <code>networkAccessControl</code> to set will return an error.</p> <p>If you remove this configuration by setting this to <code>true</code>, then all IP addresses and VPC endpoints will be allowed. Standard Grafana authentication and authorization will still be required.</p> */
		removeNetworkAccessConfiguration?: boolean | null;

		/** <p>Whether to remove the VPC configuration from the workspace.</p> <p>Setting this to <code>true</code> and providing a <code>vpcConfiguration</code> to set will return an error.</p> */
		removeVpcConfiguration?: boolean | null;

		/** The name of the CloudFormation stack set to use to generate IAM roles to be used for this workspace. */
		stackSetName?: string | null;

		/** <p>The configuration settings for an Amazon VPC that contains data sources for your Grafana workspace to connect to.</p> <note> <p>Provided <code>securityGroupIds</code> and <code>subnetIds</code> must be part of the same VPC.</p> <p>Connecting to a private VPC is not yet available in the Asia Pacific (Seoul) Region (ap-northeast-2).</p> </note> */
		vpcConfiguration?: UpdateWorkspacePutBodyVpcConfiguration;

		/** This parameter is for internal use only, and should not be used. */
		workspaceDataSources?: Array<DataSourceType>;

		/**
		 * A description for the workspace. This is used only to help you identify this workspace.
		 * Min length: 0
		 * Max length: 2048
		 */
		workspaceDescription?: string | null;

		/** A new name for the workspace to update. */
		workspaceName?: string | null;

		/** Specify the Amazon Web Services notification channels that you plan to use in this workspace. Specifying these data sources here enables Amazon Managed Grafana to create IAM roles and permissions that allow Amazon Managed Grafana to use these channels. */
		workspaceNotificationDestinations?: Array<NotificationDestinationType>;

		/** Specifies the organizational units that this workspace is allowed to use data sources from, if this workspace is in an account that is part of an organization. */
		workspaceOrganizationalUnits?: Array<string>;

		/**
		 * Specifies an IAM role that grants permissions to Amazon Web Services resources that the workspace accesses, such as data sources and notification channels. If this workspace has <code>permissionType</code> <code>CUSTOMER_MANAGED</code>, then this role is required.
		 * Min length: 1
		 * Max length: 2048
		 */
		workspaceRoleArn?: string | null;
	}
	export interface UpdateWorkspacePutBodyFormProperties {

		/** Specifies whether the workspace can access Amazon Web Services resources in this Amazon Web Services account only, or whether it can also access Amazon Web Services resources in other accounts in the same organization. If you specify <code>ORGANIZATION</code>, you must specify which organizational units the workspace can access in the <code>workspaceOrganizationalUnits</code> parameter. */
		accountAccessType: FormControl<AccountAccessType | null | undefined>,

		/**
		 * The name of an IAM role that already exists to use to access resources through Organizations. This can only be used with a workspace that has the <code>permissionType</code> set to <code>CUSTOMER_MANAGED</code>.
		 * Min length: 1
		 * Max length: 2048
		 */
		organizationRoleName: FormControl<string | null | undefined>,

		/** <p>Use this parameter if you want to change a workspace from <code>SERVICE_MANAGED</code> to <code>CUSTOMER_MANAGED</code>. This allows you to manage the permissions that the workspace uses to access datasources and notification channels. If the workspace is in a member Amazon Web Services account of an organization, and that account is not a delegated administrator account, and you want the workspace to access data sources in other Amazon Web Services accounts in the organization, you must choose <code>CUSTOMER_MANAGED</code>.</p> <p>If you specify this as <code>CUSTOMER_MANAGED</code>, you must also specify a <code>workspaceRoleArn</code> that the workspace will use for accessing Amazon Web Services resources.</p> <p>For more information on the role and permissions needed, see <a href="https://docs.aws.amazon.com/grafana/latest/userguide/AMG-manage-permissions.html">Amazon Managed Grafana permissions and policies for Amazon Web Services data sources and notification channels</a> </p> <note> <p>Do not use this to convert a <code>CUSTOMER_MANAGED</code> workspace to <code>SERVICE_MANAGED</code>. Do not include this parameter if you want to leave the workspace as <code>SERVICE_MANAGED</code>.</p> <p>You can convert a <code>CUSTOMER_MANAGED</code> workspace to <code>SERVICE_MANAGED</code> using the Amazon Managed Grafana console. For more information, see <a href="https://docs.aws.amazon.com/grafana/latest/userguide/AMG-datasource-and-notification.html">Managing permissions for data sources and notification channels</a>.</p> </note> */
		permissionType: FormControl<PermissionType | null | undefined>,

		/** <p>Whether to remove the network access configuration from the workspace.</p> <p>Setting this to <code>true</code> and providing a <code>networkAccessControl</code> to set will return an error.</p> <p>If you remove this configuration by setting this to <code>true</code>, then all IP addresses and VPC endpoints will be allowed. Standard Grafana authentication and authorization will still be required.</p> */
		removeNetworkAccessConfiguration: FormControl<boolean | null | undefined>,

		/** <p>Whether to remove the VPC configuration from the workspace.</p> <p>Setting this to <code>true</code> and providing a <code>vpcConfiguration</code> to set will return an error.</p> */
		removeVpcConfiguration: FormControl<boolean | null | undefined>,

		/** The name of the CloudFormation stack set to use to generate IAM roles to be used for this workspace. */
		stackSetName: FormControl<string | null | undefined>,

		/**
		 * A description for the workspace. This is used only to help you identify this workspace.
		 * Min length: 0
		 * Max length: 2048
		 */
		workspaceDescription: FormControl<string | null | undefined>,

		/** A new name for the workspace to update. */
		workspaceName: FormControl<string | null | undefined>,

		/**
		 * Specifies an IAM role that grants permissions to Amazon Web Services resources that the workspace accesses, such as data sources and notification channels. If this workspace has <code>permissionType</code> <code>CUSTOMER_MANAGED</code>, then this role is required.
		 * Min length: 1
		 * Max length: 2048
		 */
		workspaceRoleArn: FormControl<string | null | undefined>,
	}
	export function CreateUpdateWorkspacePutBodyFormGroup() {
		return new FormGroup<UpdateWorkspacePutBodyFormProperties>({
			accountAccessType: new FormControl<AccountAccessType | null | undefined>(undefined),
			organizationRoleName: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(2048)]),
			permissionType: new FormControl<PermissionType | null | undefined>(undefined),
			removeNetworkAccessConfiguration: new FormControl<boolean | null | undefined>(undefined),
			removeVpcConfiguration: new FormControl<boolean | null | undefined>(undefined),
			stackSetName: new FormControl<string | null | undefined>(undefined),
			workspaceDescription: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(2048)]),
			workspaceName: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^[a-zA-Z0-9-._~]{1,255}$')]),
			workspaceRoleArn: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(2048)]),
		});

	}

	export interface UpdateWorkspacePutBodyNetworkAccessControl {
		prefixListIds?: Array<string>;
		vpceIds?: Array<string>;
	}
	export interface UpdateWorkspacePutBodyNetworkAccessControlFormProperties {
	}
	export function CreateUpdateWorkspacePutBodyNetworkAccessControlFormGroup() {
		return new FormGroup<UpdateWorkspacePutBodyNetworkAccessControlFormProperties>({
		});

	}

	export interface UpdateWorkspacePutBodyVpcConfiguration {
		securityGroupIds?: Array<string>;
		subnetIds?: Array<string>;
	}
	export interface UpdateWorkspacePutBodyVpcConfigurationFormProperties {
	}
	export function CreateUpdateWorkspacePutBodyVpcConfigurationFormGroup() {
		return new FormGroup<UpdateWorkspacePutBodyVpcConfigurationFormProperties>({
		});

	}

	export interface UpdateWorkspaceAuthenticationPostBody {

		/**
		 * Specifies whether this workspace uses SAML 2.0, IAM Identity Center (successor to Single Sign-On), or both to authenticate users for using the Grafana console within a workspace. For more information, see <a href="https://docs.aws.amazon.com/grafana/latest/userguide/authentication-in-AMG.html">User authentication in Amazon Managed Grafana</a>.
		 * Required
		 */
		authenticationProviders: Array<AuthenticationProviderTypes>;

		/** A structure containing information about how this workspace works with SAML. */
		samlConfiguration?: UpdateWorkspaceAuthenticationPostBodySamlConfiguration;
	}
	export interface UpdateWorkspaceAuthenticationPostBodyFormProperties {
	}
	export function CreateUpdateWorkspaceAuthenticationPostBodyFormGroup() {
		return new FormGroup<UpdateWorkspaceAuthenticationPostBodyFormProperties>({
		});

	}

	export interface UpdateWorkspaceAuthenticationPostBodySamlConfiguration {
		allowedOrganizations?: Array<string>;
		assertionAttributes?: AssertionAttributes;
		idpMetadata?: IdpMetadata;
		loginValidityDuration?: number | null;
		roleValues?: RoleValues;
	}
	export interface UpdateWorkspaceAuthenticationPostBodySamlConfigurationFormProperties {
		loginValidityDuration: FormControl<number | null | undefined>,
	}
	export function CreateUpdateWorkspaceAuthenticationPostBodySamlConfigurationFormGroup() {
		return new FormGroup<UpdateWorkspaceAuthenticationPostBodySamlConfigurationFormProperties>({
			loginValidityDuration: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface UpdateWorkspaceConfigurationPutBody {

		/**
		 * The new configuration string for the workspace. For more information about the format and configuration options available, see <a href="https://docs.aws.amazon.com/grafana/latest/userguide/AMG-configure-workspace.html">Working in your Grafana workspace</a>.
		 * Required
		 * Min length: 2
		 * Max length: 65536
		 */
		configuration: string;

		/**
		 * <p>Specifies the version of Grafana to support in the new workspace.</p> <p>Can only be used to upgrade (for example, from 8.4 to 9.4), not downgrade (for example, from 9.4 to 8.4).</p> <p>To know what versions are available to upgrade to for a specific workspace, see the <code>ListVersions</code> operation.</p>
		 * Min length: 1
		 * Max length: 255
		 */
		grafanaVersion?: string | null;
	}
	export interface UpdateWorkspaceConfigurationPutBodyFormProperties {

		/**
		 * The new configuration string for the workspace. For more information about the format and configuration options available, see <a href="https://docs.aws.amazon.com/grafana/latest/userguide/AMG-configure-workspace.html">Working in your Grafana workspace</a>.
		 * Required
		 * Min length: 2
		 * Max length: 65536
		 */
		configuration: FormControl<string | null | undefined>,

		/**
		 * <p>Specifies the version of Grafana to support in the new workspace.</p> <p>Can only be used to upgrade (for example, from 8.4 to 9.4), not downgrade (for example, from 9.4 to 8.4).</p> <p>To know what versions are available to upgrade to for a specific workspace, see the <code>ListVersions</code> operation.</p>
		 * Min length: 1
		 * Max length: 255
		 */
		grafanaVersion: FormControl<string | null | undefined>,
	}
	export function CreateUpdateWorkspaceConfigurationPutBodyFormGroup() {
		return new FormGroup<UpdateWorkspaceConfigurationPutBodyFormProperties>({
			configuration: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(2), Validators.maxLength(65536)]),
			grafanaVersion: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(255)]),
		});

	}

	export interface UpdatePermissionsPatchBody {

		/**
		 * An array of structures that contain the permission updates to make.
		 * Required
		 * Minimum items: 0
		 * Maximum items: 20
		 */
		updateInstructionBatch: Array<UpdateInstruction>;
	}
	export interface UpdatePermissionsPatchBodyFormProperties {
	}
	export function CreateUpdatePermissionsPatchBodyFormGroup() {
		return new FormGroup<UpdatePermissionsPatchBodyFormProperties>({
		});

	}

	export interface TagResourcePostBody {

		/**
		 * The list of tag keys and values to associate with the resource. You can associate tag keys only, tags (key and values) only or a combination of tag keys and tags.
		 * Required
		 */
		tags: {[id: string]: string };
	}
	export interface TagResourcePostBodyFormProperties {

		/**
		 * The list of tag keys and values to associate with the resource. You can associate tag keys only, tags (key and values) only or a combination of tag keys and tags.
		 * Required
		 */
		tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateTagResourcePostBodyFormGroup() {
		return new FormGroup<TagResourcePostBodyFormProperties>({
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined, [Validators.required]),
		});

	}

}

