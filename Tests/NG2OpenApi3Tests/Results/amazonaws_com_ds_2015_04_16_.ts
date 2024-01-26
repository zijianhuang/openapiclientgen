import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface AcceptSharedDirectoryResult {
		SharedDirectory?: SharedDirectory;
	}
	export interface AcceptSharedDirectoryResultFormProperties {
	}
	export function CreateAcceptSharedDirectoryResultFormGroup() {
		return new FormGroup<AcceptSharedDirectoryResultFormProperties>({
		});

	}


	/** Details about the shared directory in the directory owner account for which the share request in the directory consumer account has been accepted. */
	export interface SharedDirectory {
		OwnerAccountId?: string;
		OwnerDirectoryId?: string;
		ShareMethod?: ShareMethod;
		SharedAccountId?: string;
		SharedDirectoryId?: string;
		ShareStatus?: ShareStatus;
		ShareNotes?: string;
		CreatedDateTime?: Date;
		LastUpdatedDateTime?: Date;
	}

	/** Details about the shared directory in the directory owner account for which the share request in the directory consumer account has been accepted. */
	export interface SharedDirectoryFormProperties {
		OwnerAccountId: FormControl<string | null | undefined>,
		OwnerDirectoryId: FormControl<string | null | undefined>,
		ShareMethod: FormControl<ShareMethod | null | undefined>,
		SharedAccountId: FormControl<string | null | undefined>,
		SharedDirectoryId: FormControl<string | null | undefined>,
		ShareStatus: FormControl<ShareStatus | null | undefined>,
		ShareNotes: FormControl<string | null | undefined>,
		CreatedDateTime: FormControl<Date | null | undefined>,
		LastUpdatedDateTime: FormControl<Date | null | undefined>,
	}
	export function CreateSharedDirectoryFormGroup() {
		return new FormGroup<SharedDirectoryFormProperties>({
			OwnerAccountId: new FormControl<string | null | undefined>(undefined),
			OwnerDirectoryId: new FormControl<string | null | undefined>(undefined),
			ShareMethod: new FormControl<ShareMethod | null | undefined>(undefined),
			SharedAccountId: new FormControl<string | null | undefined>(undefined),
			SharedDirectoryId: new FormControl<string | null | undefined>(undefined),
			ShareStatus: new FormControl<ShareStatus | null | undefined>(undefined),
			ShareNotes: new FormControl<string | null | undefined>(undefined),
			CreatedDateTime: new FormControl<Date | null | undefined>(undefined),
			LastUpdatedDateTime: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export enum ShareMethod { ORGANIZATIONS = 0, HANDSHAKE = 1 }

	export enum ShareStatus { Shared = 0, PendingAcceptance = 1, Rejected = 2, Rejecting = 3, RejectFailed = 4, Sharing = 5, ShareFailed = 6, Deleted = 7, Deleting = 8 }

	export interface AcceptSharedDirectoryRequest {

		/** Required */
		SharedDirectoryId: string;
	}
	export interface AcceptSharedDirectoryRequestFormProperties {

		/** Required */
		SharedDirectoryId: FormControl<string | null | undefined>,
	}
	export function CreateAcceptSharedDirectoryRequestFormGroup() {
		return new FormGroup<AcceptSharedDirectoryRequestFormProperties>({
			SharedDirectoryId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface InvalidParameterException {
	}
	export interface InvalidParameterExceptionFormProperties {
	}
	export function CreateInvalidParameterExceptionFormGroup() {
		return new FormGroup<InvalidParameterExceptionFormProperties>({
		});

	}

	export interface EntityDoesNotExistException {
	}
	export interface EntityDoesNotExistExceptionFormProperties {
	}
	export function CreateEntityDoesNotExistExceptionFormGroup() {
		return new FormGroup<EntityDoesNotExistExceptionFormProperties>({
		});

	}

	export interface DirectoryAlreadySharedException {
	}
	export interface DirectoryAlreadySharedExceptionFormProperties {
	}
	export function CreateDirectoryAlreadySharedExceptionFormGroup() {
		return new FormGroup<DirectoryAlreadySharedExceptionFormProperties>({
		});

	}

	export interface ClientException {
	}
	export interface ClientExceptionFormProperties {
	}
	export function CreateClientExceptionFormGroup() {
		return new FormGroup<ClientExceptionFormProperties>({
		});

	}

	export interface ServiceException {
	}
	export interface ServiceExceptionFormProperties {
	}
	export function CreateServiceExceptionFormGroup() {
		return new FormGroup<ServiceExceptionFormProperties>({
		});

	}

	export interface AddIpRoutesResult {
	}
	export interface AddIpRoutesResultFormProperties {
	}
	export function CreateAddIpRoutesResultFormGroup() {
		return new FormGroup<AddIpRoutesResultFormProperties>({
		});

	}

	export interface AddIpRoutesRequest {

		/** Required */
		DirectoryId: string;

		/** Required */
		IpRoutes: Array<IpRoute>;
		UpdateSecurityGroupForDirectoryControllers?: boolean | null;
	}
	export interface AddIpRoutesRequestFormProperties {

		/** Required */
		DirectoryId: FormControl<string | null | undefined>,
		UpdateSecurityGroupForDirectoryControllers: FormControl<boolean | null | undefined>,
	}
	export function CreateAddIpRoutesRequestFormGroup() {
		return new FormGroup<AddIpRoutesRequestFormProperties>({
			DirectoryId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			UpdateSecurityGroupForDirectoryControllers: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** IP address block. This is often the address block of the DNS server used for your self-managed domain.  */
	export interface IpRoute {
		CidrIp?: string;
		Description?: string;
	}

	/** IP address block. This is often the address block of the DNS server used for your self-managed domain.  */
	export interface IpRouteFormProperties {
		CidrIp: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
	}
	export function CreateIpRouteFormGroup() {
		return new FormGroup<IpRouteFormProperties>({
			CidrIp: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface EntityAlreadyExistsException {
	}
	export interface EntityAlreadyExistsExceptionFormProperties {
	}
	export function CreateEntityAlreadyExistsExceptionFormGroup() {
		return new FormGroup<EntityAlreadyExistsExceptionFormProperties>({
		});

	}

	export interface DirectoryUnavailableException {
	}
	export interface DirectoryUnavailableExceptionFormProperties {
	}
	export function CreateDirectoryUnavailableExceptionFormGroup() {
		return new FormGroup<DirectoryUnavailableExceptionFormProperties>({
		});

	}

	export interface IpRouteLimitExceededException {
	}
	export interface IpRouteLimitExceededExceptionFormProperties {
	}
	export function CreateIpRouteLimitExceededExceptionFormGroup() {
		return new FormGroup<IpRouteLimitExceededExceptionFormProperties>({
		});

	}

	export interface AddRegionResult {
	}
	export interface AddRegionResultFormProperties {
	}
	export function CreateAddRegionResultFormGroup() {
		return new FormGroup<AddRegionResultFormProperties>({
		});

	}

	export interface AddRegionRequest {

		/** Required */
		DirectoryId: string;

		/** Required */
		RegionName: string;

		/**
		 * Contains VPC information for the <a>CreateDirectory</a> or <a>CreateMicrosoftAD</a> operation.
		 * Required
		 */
		VPCSettings: DirectoryVpcSettings;
	}
	export interface AddRegionRequestFormProperties {

		/** Required */
		DirectoryId: FormControl<string | null | undefined>,

		/** Required */
		RegionName: FormControl<string | null | undefined>,
	}
	export function CreateAddRegionRequestFormGroup() {
		return new FormGroup<AddRegionRequestFormProperties>({
			DirectoryId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			RegionName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Contains VPC information for the <a>CreateDirectory</a> or <a>CreateMicrosoftAD</a> operation. */
	export interface DirectoryVpcSettings {

		/** Required */
		VpcId: string;

		/** Required */
		SubnetIds: Array<string>;
	}

	/** Contains VPC information for the <a>CreateDirectory</a> or <a>CreateMicrosoftAD</a> operation. */
	export interface DirectoryVpcSettingsFormProperties {

		/** Required */
		VpcId: FormControl<string | null | undefined>,
	}
	export function CreateDirectoryVpcSettingsFormGroup() {
		return new FormGroup<DirectoryVpcSettingsFormProperties>({
			VpcId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DirectoryAlreadyInRegionException {
	}
	export interface DirectoryAlreadyInRegionExceptionFormProperties {
	}
	export function CreateDirectoryAlreadyInRegionExceptionFormGroup() {
		return new FormGroup<DirectoryAlreadyInRegionExceptionFormProperties>({
		});

	}

	export interface UnsupportedOperationException {
	}
	export interface UnsupportedOperationExceptionFormProperties {
	}
	export function CreateUnsupportedOperationExceptionFormGroup() {
		return new FormGroup<UnsupportedOperationExceptionFormProperties>({
		});

	}

	export interface DirectoryDoesNotExistException {
	}
	export interface DirectoryDoesNotExistExceptionFormProperties {
	}
	export function CreateDirectoryDoesNotExistExceptionFormGroup() {
		return new FormGroup<DirectoryDoesNotExistExceptionFormProperties>({
		});

	}

	export interface RegionLimitExceededException {
	}
	export interface RegionLimitExceededExceptionFormProperties {
	}
	export function CreateRegionLimitExceededExceptionFormGroup() {
		return new FormGroup<RegionLimitExceededExceptionFormProperties>({
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

	export interface AddTagsToResourceResult {
	}
	export interface AddTagsToResourceResultFormProperties {
	}
	export function CreateAddTagsToResourceResultFormGroup() {
		return new FormGroup<AddTagsToResourceResultFormProperties>({
		});

	}

	export interface AddTagsToResourceRequest {

		/** Required */
		ResourceId: string;

		/** Required */
		Tags: Array<Tag>;
	}
	export interface AddTagsToResourceRequestFormProperties {

		/** Required */
		ResourceId: FormControl<string | null | undefined>,
	}
	export function CreateAddTagsToResourceRequestFormGroup() {
		return new FormGroup<AddTagsToResourceRequestFormProperties>({
			ResourceId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Metadata assigned to a directory consisting of a key-value pair. */
	export interface Tag {

		/** Required */
		Key: string;

		/** Required */
		Value: string;
	}

	/** Metadata assigned to a directory consisting of a key-value pair. */
	export interface TagFormProperties {

		/** Required */
		Key: FormControl<string | null | undefined>,

		/** Required */
		Value: FormControl<string | null | undefined>,
	}
	export function CreateTagFormGroup() {
		return new FormGroup<TagFormProperties>({
			Key: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Value: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface TagLimitExceededException {
	}
	export interface TagLimitExceededExceptionFormProperties {
	}
	export function CreateTagLimitExceededExceptionFormGroup() {
		return new FormGroup<TagLimitExceededExceptionFormProperties>({
		});

	}

	export interface CancelSchemaExtensionResult {
	}
	export interface CancelSchemaExtensionResultFormProperties {
	}
	export function CreateCancelSchemaExtensionResultFormGroup() {
		return new FormGroup<CancelSchemaExtensionResultFormProperties>({
		});

	}

	export interface CancelSchemaExtensionRequest {

		/** Required */
		DirectoryId: string;

		/** Required */
		SchemaExtensionId: string;
	}
	export interface CancelSchemaExtensionRequestFormProperties {

		/** Required */
		DirectoryId: FormControl<string | null | undefined>,

		/** Required */
		SchemaExtensionId: FormControl<string | null | undefined>,
	}
	export function CreateCancelSchemaExtensionRequestFormGroup() {
		return new FormGroup<CancelSchemaExtensionRequestFormProperties>({
			DirectoryId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			SchemaExtensionId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Contains the results of the <a>ConnectDirectory</a> operation. */
	export interface ConnectDirectoryResult {
		DirectoryId?: string;
	}

	/** Contains the results of the <a>ConnectDirectory</a> operation. */
	export interface ConnectDirectoryResultFormProperties {
		DirectoryId: FormControl<string | null | undefined>,
	}
	export function CreateConnectDirectoryResultFormGroup() {
		return new FormGroup<ConnectDirectoryResultFormProperties>({
			DirectoryId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains the inputs for the <a>ConnectDirectory</a> operation. */
	export interface ConnectDirectoryRequest {

		/** Required */
		Name: string;
		ShortName?: string;

		/** Required */
		Password: string;
		Description?: string;

		/** Required */
		Size: DirectorySize;

		/** Required */
		ConnectSettings: DirectoryConnectSettings;
		Tags?: Array<Tag>;
	}

	/** Contains the inputs for the <a>ConnectDirectory</a> operation. */
	export interface ConnectDirectoryRequestFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,
		ShortName: FormControl<string | null | undefined>,

		/** Required */
		Password: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,

		/** Required */
		Size: FormControl<DirectorySize | null | undefined>,
	}
	export function CreateConnectDirectoryRequestFormGroup() {
		return new FormGroup<ConnectDirectoryRequestFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ShortName: new FormControl<string | null | undefined>(undefined),
			Password: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Description: new FormControl<string | null | undefined>(undefined),
			Size: new FormControl<DirectorySize | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum DirectorySize { Small = 0, Large = 1 }


	/** Contains information for the <a>ConnectDirectory</a> operation when an AD Connector directory is being created. */
	export interface DirectoryConnectSettings {

		/** Required */
		VpcId: string;

		/** Required */
		SubnetIds: Array<string>;

		/** Required */
		CustomerDnsIps: Array<string>;

		/** Required */
		CustomerUserName: string;
	}

	/** Contains information for the <a>ConnectDirectory</a> operation when an AD Connector directory is being created. */
	export interface DirectoryConnectSettingsFormProperties {

		/** Required */
		VpcId: FormControl<string | null | undefined>,

		/** Required */
		CustomerUserName: FormControl<string | null | undefined>,
	}
	export function CreateDirectoryConnectSettingsFormGroup() {
		return new FormGroup<DirectoryConnectSettingsFormProperties>({
			VpcId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			CustomerUserName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DirectoryLimitExceededException {
	}
	export interface DirectoryLimitExceededExceptionFormProperties {
	}
	export function CreateDirectoryLimitExceededExceptionFormGroup() {
		return new FormGroup<DirectoryLimitExceededExceptionFormProperties>({
		});

	}


	/** Contains the results of the <a>CreateAlias</a> operation. */
	export interface CreateAliasResult {
		DirectoryId?: string;
		Alias?: string;
	}

	/** Contains the results of the <a>CreateAlias</a> operation. */
	export interface CreateAliasResultFormProperties {
		DirectoryId: FormControl<string | null | undefined>,
		Alias: FormControl<string | null | undefined>,
	}
	export function CreateCreateAliasResultFormGroup() {
		return new FormGroup<CreateAliasResultFormProperties>({
			DirectoryId: new FormControl<string | null | undefined>(undefined),
			Alias: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains the inputs for the <a>CreateAlias</a> operation. */
	export interface CreateAliasRequest {

		/** Required */
		DirectoryId: string;

		/** Required */
		Alias: string;
	}

	/** Contains the inputs for the <a>CreateAlias</a> operation. */
	export interface CreateAliasRequestFormProperties {

		/** Required */
		DirectoryId: FormControl<string | null | undefined>,

		/** Required */
		Alias: FormControl<string | null | undefined>,
	}
	export function CreateCreateAliasRequestFormGroup() {
		return new FormGroup<CreateAliasRequestFormProperties>({
			DirectoryId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Alias: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Contains the results for the <a>CreateComputer</a> operation. */
	export interface CreateComputerResult {
		Computer?: Computer;
	}

	/** Contains the results for the <a>CreateComputer</a> operation. */
	export interface CreateComputerResultFormProperties {
	}
	export function CreateCreateComputerResultFormGroup() {
		return new FormGroup<CreateComputerResultFormProperties>({
		});

	}


	/** Contains information about a computer account in a directory. */
	export interface Computer {
		ComputerId?: string;
		ComputerName?: string;
		ComputerAttributes?: Array<Attribute>;
	}

	/** Contains information about a computer account in a directory. */
	export interface ComputerFormProperties {
		ComputerId: FormControl<string | null | undefined>,
		ComputerName: FormControl<string | null | undefined>,
	}
	export function CreateComputerFormGroup() {
		return new FormGroup<ComputerFormProperties>({
			ComputerId: new FormControl<string | null | undefined>(undefined),
			ComputerName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents a named directory attribute. */
	export interface Attribute {
		Name?: string;
		Value?: string;
	}

	/** Represents a named directory attribute. */
	export interface AttributeFormProperties {
		Name: FormControl<string | null | undefined>,
		Value: FormControl<string | null | undefined>,
	}
	export function CreateAttributeFormGroup() {
		return new FormGroup<AttributeFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
			Value: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains the inputs for the <a>CreateComputer</a> operation. */
	export interface CreateComputerRequest {

		/** Required */
		DirectoryId: string;

		/** Required */
		ComputerName: string;

		/** Required */
		Password: string;
		OrganizationalUnitDistinguishedName?: string;
		ComputerAttributes?: Array<Attribute>;
	}

	/** Contains the inputs for the <a>CreateComputer</a> operation. */
	export interface CreateComputerRequestFormProperties {

		/** Required */
		DirectoryId: FormControl<string | null | undefined>,

		/** Required */
		ComputerName: FormControl<string | null | undefined>,

		/** Required */
		Password: FormControl<string | null | undefined>,
		OrganizationalUnitDistinguishedName: FormControl<string | null | undefined>,
	}
	export function CreateCreateComputerRequestFormGroup() {
		return new FormGroup<CreateComputerRequestFormProperties>({
			DirectoryId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ComputerName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Password: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			OrganizationalUnitDistinguishedName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface AuthenticationFailedException {
	}
	export interface AuthenticationFailedExceptionFormProperties {
	}
	export function CreateAuthenticationFailedExceptionFormGroup() {
		return new FormGroup<AuthenticationFailedExceptionFormProperties>({
		});

	}


	/** The result of a CreateConditinalForwarder request. */
	export interface CreateConditionalForwarderResult {
	}

	/** The result of a CreateConditinalForwarder request. */
	export interface CreateConditionalForwarderResultFormProperties {
	}
	export function CreateCreateConditionalForwarderResultFormGroup() {
		return new FormGroup<CreateConditionalForwarderResultFormProperties>({
		});

	}


	/** Initiates the creation of a conditional forwarder for your Directory Service for Microsoft Active Directory. Conditional forwarders are required in order to set up a trust relationship with another domain. */
	export interface CreateConditionalForwarderRequest {

		/** Required */
		DirectoryId: string;

		/** Required */
		RemoteDomainName: string;

		/** Required */
		DnsIpAddrs: Array<string>;
	}

	/** Initiates the creation of a conditional forwarder for your Directory Service for Microsoft Active Directory. Conditional forwarders are required in order to set up a trust relationship with another domain. */
	export interface CreateConditionalForwarderRequestFormProperties {

		/** Required */
		DirectoryId: FormControl<string | null | undefined>,

		/** Required */
		RemoteDomainName: FormControl<string | null | undefined>,
	}
	export function CreateCreateConditionalForwarderRequestFormGroup() {
		return new FormGroup<CreateConditionalForwarderRequestFormProperties>({
			DirectoryId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			RemoteDomainName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Contains the results of the <a>CreateDirectory</a> operation. */
	export interface CreateDirectoryResult {
		DirectoryId?: string;
	}

	/** Contains the results of the <a>CreateDirectory</a> operation. */
	export interface CreateDirectoryResultFormProperties {
		DirectoryId: FormControl<string | null | undefined>,
	}
	export function CreateCreateDirectoryResultFormGroup() {
		return new FormGroup<CreateDirectoryResultFormProperties>({
			DirectoryId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains the inputs for the <a>CreateDirectory</a> operation.  */
	export interface CreateDirectoryRequest {

		/** Required */
		Name: string;
		ShortName?: string;

		/** Required */
		Password: string;
		Description?: string;

		/** Required */
		Size: DirectorySize;
		VpcSettings?: DirectoryVpcSettings;
		Tags?: Array<Tag>;
	}

	/** Contains the inputs for the <a>CreateDirectory</a> operation.  */
	export interface CreateDirectoryRequestFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,
		ShortName: FormControl<string | null | undefined>,

		/** Required */
		Password: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,

		/** Required */
		Size: FormControl<DirectorySize | null | undefined>,
	}
	export function CreateCreateDirectoryRequestFormGroup() {
		return new FormGroup<CreateDirectoryRequestFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ShortName: new FormControl<string | null | undefined>(undefined),
			Password: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Description: new FormControl<string | null | undefined>(undefined),
			Size: new FormControl<DirectorySize | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateLogSubscriptionResult {
	}
	export interface CreateLogSubscriptionResultFormProperties {
	}
	export function CreateCreateLogSubscriptionResultFormGroup() {
		return new FormGroup<CreateLogSubscriptionResultFormProperties>({
		});

	}

	export interface CreateLogSubscriptionRequest {

		/** Required */
		DirectoryId: string;

		/** Required */
		LogGroupName: string;
	}
	export interface CreateLogSubscriptionRequestFormProperties {

		/** Required */
		DirectoryId: FormControl<string | null | undefined>,

		/** Required */
		LogGroupName: FormControl<string | null | undefined>,
	}
	export function CreateCreateLogSubscriptionRequestFormGroup() {
		return new FormGroup<CreateLogSubscriptionRequestFormProperties>({
			DirectoryId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			LogGroupName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface InsufficientPermissionsException {
	}
	export interface InsufficientPermissionsExceptionFormProperties {
	}
	export function CreateInsufficientPermissionsExceptionFormGroup() {
		return new FormGroup<InsufficientPermissionsExceptionFormProperties>({
		});

	}


	/** Result of a CreateMicrosoftAD request. */
	export interface CreateMicrosoftADResult {
		DirectoryId?: string;
	}

	/** Result of a CreateMicrosoftAD request. */
	export interface CreateMicrosoftADResultFormProperties {
		DirectoryId: FormControl<string | null | undefined>,
	}
	export function CreateCreateMicrosoftADResultFormGroup() {
		return new FormGroup<CreateMicrosoftADResultFormProperties>({
			DirectoryId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Creates an Managed Microsoft AD directory. */
	export interface CreateMicrosoftADRequest {

		/** Required */
		Name: string;
		ShortName?: string;

		/** Required */
		Password: string;
		Description?: string;

		/** Required */
		VpcSettings: DirectoryVpcSettings;
		Edition?: DirectoryEdition;
		Tags?: Array<Tag>;
	}

	/** Creates an Managed Microsoft AD directory. */
	export interface CreateMicrosoftADRequestFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,
		ShortName: FormControl<string | null | undefined>,

		/** Required */
		Password: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
		Edition: FormControl<DirectoryEdition | null | undefined>,
	}
	export function CreateCreateMicrosoftADRequestFormGroup() {
		return new FormGroup<CreateMicrosoftADRequestFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ShortName: new FormControl<string | null | undefined>(undefined),
			Password: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Description: new FormControl<string | null | undefined>(undefined),
			Edition: new FormControl<DirectoryEdition | null | undefined>(undefined),
		});

	}

	export enum DirectoryEdition { Enterprise = 0, Standard = 1 }


	/** Contains the results of the <a>CreateSnapshot</a> operation. */
	export interface CreateSnapshotResult {
		SnapshotId?: string;
	}

	/** Contains the results of the <a>CreateSnapshot</a> operation. */
	export interface CreateSnapshotResultFormProperties {
		SnapshotId: FormControl<string | null | undefined>,
	}
	export function CreateCreateSnapshotResultFormGroup() {
		return new FormGroup<CreateSnapshotResultFormProperties>({
			SnapshotId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains the inputs for the <a>CreateSnapshot</a> operation. */
	export interface CreateSnapshotRequest {

		/** Required */
		DirectoryId: string;
		Name?: string;
	}

	/** Contains the inputs for the <a>CreateSnapshot</a> operation. */
	export interface CreateSnapshotRequestFormProperties {

		/** Required */
		DirectoryId: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
	}
	export function CreateCreateSnapshotRequestFormGroup() {
		return new FormGroup<CreateSnapshotRequestFormProperties>({
			DirectoryId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface SnapshotLimitExceededException {
	}
	export interface SnapshotLimitExceededExceptionFormProperties {
	}
	export function CreateSnapshotLimitExceededExceptionFormGroup() {
		return new FormGroup<SnapshotLimitExceededExceptionFormProperties>({
		});

	}


	/** The result of a CreateTrust request. */
	export interface CreateTrustResult {
		TrustId?: string;
	}

	/** The result of a CreateTrust request. */
	export interface CreateTrustResultFormProperties {
		TrustId: FormControl<string | null | undefined>,
	}
	export function CreateCreateTrustResultFormGroup() {
		return new FormGroup<CreateTrustResultFormProperties>({
			TrustId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** <p>Directory Service for Microsoft Active Directory allows you to configure trust relationships. For example, you can establish a trust between your Managed Microsoft AD directory, and your existing self-managed Microsoft Active Directory. This would allow you to provide users and groups access to resources in either domain, with a single set of credentials.</p> <p>This action initiates the creation of the Amazon Web Services side of a trust relationship between an Managed Microsoft AD directory and an external domain.</p> */
	export interface CreateTrustRequest {

		/** Required */
		DirectoryId: string;

		/** Required */
		RemoteDomainName: string;

		/** Required */
		TrustPassword: string;

		/** Required */
		TrustDirection: TrustDirection;
		TrustType?: TrustType;
		ConditionalForwarderIpAddrs?: Array<string>;
		SelectiveAuth?: SelectiveAuth;
	}

	/** <p>Directory Service for Microsoft Active Directory allows you to configure trust relationships. For example, you can establish a trust between your Managed Microsoft AD directory, and your existing self-managed Microsoft Active Directory. This would allow you to provide users and groups access to resources in either domain, with a single set of credentials.</p> <p>This action initiates the creation of the Amazon Web Services side of a trust relationship between an Managed Microsoft AD directory and an external domain.</p> */
	export interface CreateTrustRequestFormProperties {

		/** Required */
		DirectoryId: FormControl<string | null | undefined>,

		/** Required */
		RemoteDomainName: FormControl<string | null | undefined>,

		/** Required */
		TrustPassword: FormControl<string | null | undefined>,

		/** Required */
		TrustDirection: FormControl<TrustDirection | null | undefined>,
		TrustType: FormControl<TrustType | null | undefined>,
		SelectiveAuth: FormControl<SelectiveAuth | null | undefined>,
	}
	export function CreateCreateTrustRequestFormGroup() {
		return new FormGroup<CreateTrustRequestFormProperties>({
			DirectoryId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			RemoteDomainName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			TrustPassword: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			TrustDirection: new FormControl<TrustDirection | null | undefined>(undefined, [Validators.required]),
			TrustType: new FormControl<TrustType | null | undefined>(undefined),
			SelectiveAuth: new FormControl<SelectiveAuth | null | undefined>(undefined),
		});

	}

	export enum TrustDirection { 'One-Way: Outgoing' = 0, 'One-Way: Incoming' = 1, 'Two-Way' = 2 }

	export enum TrustType { Forest = 0, External = 1 }

	export enum SelectiveAuth { Enabled = 0, Disabled = 1 }


	/** The result of a DeleteConditionalForwarder request. */
	export interface DeleteConditionalForwarderResult {
	}

	/** The result of a DeleteConditionalForwarder request. */
	export interface DeleteConditionalForwarderResultFormProperties {
	}
	export function CreateDeleteConditionalForwarderResultFormGroup() {
		return new FormGroup<DeleteConditionalForwarderResultFormProperties>({
		});

	}


	/** Deletes a conditional forwarder. */
	export interface DeleteConditionalForwarderRequest {

		/** Required */
		DirectoryId: string;

		/** Required */
		RemoteDomainName: string;
	}

	/** Deletes a conditional forwarder. */
	export interface DeleteConditionalForwarderRequestFormProperties {

		/** Required */
		DirectoryId: FormControl<string | null | undefined>,

		/** Required */
		RemoteDomainName: FormControl<string | null | undefined>,
	}
	export function CreateDeleteConditionalForwarderRequestFormGroup() {
		return new FormGroup<DeleteConditionalForwarderRequestFormProperties>({
			DirectoryId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			RemoteDomainName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Contains the results of the <a>DeleteDirectory</a> operation. */
	export interface DeleteDirectoryResult {
		DirectoryId?: string;
	}

	/** Contains the results of the <a>DeleteDirectory</a> operation. */
	export interface DeleteDirectoryResultFormProperties {
		DirectoryId: FormControl<string | null | undefined>,
	}
	export function CreateDeleteDirectoryResultFormGroup() {
		return new FormGroup<DeleteDirectoryResultFormProperties>({
			DirectoryId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains the inputs for the <a>DeleteDirectory</a> operation. */
	export interface DeleteDirectoryRequest {

		/** Required */
		DirectoryId: string;
	}

	/** Contains the inputs for the <a>DeleteDirectory</a> operation. */
	export interface DeleteDirectoryRequestFormProperties {

		/** Required */
		DirectoryId: FormControl<string | null | undefined>,
	}
	export function CreateDeleteDirectoryRequestFormGroup() {
		return new FormGroup<DeleteDirectoryRequestFormProperties>({
			DirectoryId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeleteLogSubscriptionResult {
	}
	export interface DeleteLogSubscriptionResultFormProperties {
	}
	export function CreateDeleteLogSubscriptionResultFormGroup() {
		return new FormGroup<DeleteLogSubscriptionResultFormProperties>({
		});

	}

	export interface DeleteLogSubscriptionRequest {

		/** Required */
		DirectoryId: string;
	}
	export interface DeleteLogSubscriptionRequestFormProperties {

		/** Required */
		DirectoryId: FormControl<string | null | undefined>,
	}
	export function CreateDeleteLogSubscriptionRequestFormGroup() {
		return new FormGroup<DeleteLogSubscriptionRequestFormProperties>({
			DirectoryId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Contains the results of the <a>DeleteSnapshot</a> operation. */
	export interface DeleteSnapshotResult {
		SnapshotId?: string;
	}

	/** Contains the results of the <a>DeleteSnapshot</a> operation. */
	export interface DeleteSnapshotResultFormProperties {
		SnapshotId: FormControl<string | null | undefined>,
	}
	export function CreateDeleteSnapshotResultFormGroup() {
		return new FormGroup<DeleteSnapshotResultFormProperties>({
			SnapshotId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains the inputs for the <a>DeleteSnapshot</a> operation. */
	export interface DeleteSnapshotRequest {

		/** Required */
		SnapshotId: string;
	}

	/** Contains the inputs for the <a>DeleteSnapshot</a> operation. */
	export interface DeleteSnapshotRequestFormProperties {

		/** Required */
		SnapshotId: FormControl<string | null | undefined>,
	}
	export function CreateDeleteSnapshotRequestFormGroup() {
		return new FormGroup<DeleteSnapshotRequestFormProperties>({
			SnapshotId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The result of a DeleteTrust request. */
	export interface DeleteTrustResult {
		TrustId?: string;
	}

	/** The result of a DeleteTrust request. */
	export interface DeleteTrustResultFormProperties {
		TrustId: FormControl<string | null | undefined>,
	}
	export function CreateDeleteTrustResultFormGroup() {
		return new FormGroup<DeleteTrustResultFormProperties>({
			TrustId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Deletes the local side of an existing trust relationship between the Managed Microsoft AD directory and the external domain. */
	export interface DeleteTrustRequest {

		/** Required */
		TrustId: string;
		DeleteAssociatedConditionalForwarder?: boolean | null;
	}

	/** Deletes the local side of an existing trust relationship between the Managed Microsoft AD directory and the external domain. */
	export interface DeleteTrustRequestFormProperties {

		/** Required */
		TrustId: FormControl<string | null | undefined>,
		DeleteAssociatedConditionalForwarder: FormControl<boolean | null | undefined>,
	}
	export function CreateDeleteTrustRequestFormGroup() {
		return new FormGroup<DeleteTrustRequestFormProperties>({
			TrustId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			DeleteAssociatedConditionalForwarder: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface DeregisterCertificateResult {
	}
	export interface DeregisterCertificateResultFormProperties {
	}
	export function CreateDeregisterCertificateResultFormGroup() {
		return new FormGroup<DeregisterCertificateResultFormProperties>({
		});

	}

	export interface DeregisterCertificateRequest {

		/** Required */
		DirectoryId: string;

		/** Required */
		CertificateId: string;
	}
	export interface DeregisterCertificateRequestFormProperties {

		/** Required */
		DirectoryId: FormControl<string | null | undefined>,

		/** Required */
		CertificateId: FormControl<string | null | undefined>,
	}
	export function CreateDeregisterCertificateRequestFormGroup() {
		return new FormGroup<DeregisterCertificateRequestFormProperties>({
			DirectoryId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			CertificateId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CertificateDoesNotExistException {
	}
	export interface CertificateDoesNotExistExceptionFormProperties {
	}
	export function CreateCertificateDoesNotExistExceptionFormGroup() {
		return new FormGroup<CertificateDoesNotExistExceptionFormProperties>({
		});

	}

	export interface CertificateInUseException {
	}
	export interface CertificateInUseExceptionFormProperties {
	}
	export function CreateCertificateInUseExceptionFormGroup() {
		return new FormGroup<CertificateInUseExceptionFormProperties>({
		});

	}


	/** The result of a DeregisterEventTopic request. */
	export interface DeregisterEventTopicResult {
	}

	/** The result of a DeregisterEventTopic request. */
	export interface DeregisterEventTopicResultFormProperties {
	}
	export function CreateDeregisterEventTopicResultFormGroup() {
		return new FormGroup<DeregisterEventTopicResultFormProperties>({
		});

	}


	/** Removes the specified directory as a publisher to the specified Amazon SNS topic. */
	export interface DeregisterEventTopicRequest {

		/** Required */
		DirectoryId: string;

		/** Required */
		TopicName: string;
	}

	/** Removes the specified directory as a publisher to the specified Amazon SNS topic. */
	export interface DeregisterEventTopicRequestFormProperties {

		/** Required */
		DirectoryId: FormControl<string | null | undefined>,

		/** Required */
		TopicName: FormControl<string | null | undefined>,
	}
	export function CreateDeregisterEventTopicRequestFormGroup() {
		return new FormGroup<DeregisterEventTopicRequestFormProperties>({
			DirectoryId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			TopicName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DescribeCertificateResult {
		Certificate?: Certificate;
	}
	export interface DescribeCertificateResultFormProperties {
	}
	export function CreateDescribeCertificateResultFormGroup() {
		return new FormGroup<DescribeCertificateResultFormProperties>({
		});

	}


	/** Information about the certificate. */
	export interface Certificate {
		CertificateId?: string;
		State?: CertificateState;
		StateReason?: string;
		CommonName?: string;
		RegisteredDateTime?: Date;
		ExpiryDateTime?: Date;
		Type?: CertificateType;
		ClientCertAuthSettings?: ClientCertAuthSettings;
	}

	/** Information about the certificate. */
	export interface CertificateFormProperties {
		CertificateId: FormControl<string | null | undefined>,
		State: FormControl<CertificateState | null | undefined>,
		StateReason: FormControl<string | null | undefined>,
		CommonName: FormControl<string | null | undefined>,
		RegisteredDateTime: FormControl<Date | null | undefined>,
		ExpiryDateTime: FormControl<Date | null | undefined>,
		Type: FormControl<CertificateType | null | undefined>,
	}
	export function CreateCertificateFormGroup() {
		return new FormGroup<CertificateFormProperties>({
			CertificateId: new FormControl<string | null | undefined>(undefined),
			State: new FormControl<CertificateState | null | undefined>(undefined),
			StateReason: new FormControl<string | null | undefined>(undefined),
			CommonName: new FormControl<string | null | undefined>(undefined),
			RegisteredDateTime: new FormControl<Date | null | undefined>(undefined),
			ExpiryDateTime: new FormControl<Date | null | undefined>(undefined),
			Type: new FormControl<CertificateType | null | undefined>(undefined),
		});

	}

	export enum CertificateState { Registering = 0, Registered = 1, RegisterFailed = 2, Deregistering = 3, Deregistered = 4, DeregisterFailed = 5 }

	export enum CertificateType { ClientCertAuth = 0, ClientLDAPS = 1 }


	/** Contains information about the client certificate authentication settings for the <code>RegisterCertificate</code> and <code>DescribeCertificate</code> operations.  */
	export interface ClientCertAuthSettings {
		OCSPUrl?: string;
	}

	/** Contains information about the client certificate authentication settings for the <code>RegisterCertificate</code> and <code>DescribeCertificate</code> operations.  */
	export interface ClientCertAuthSettingsFormProperties {
		OCSPUrl: FormControl<string | null | undefined>,
	}
	export function CreateClientCertAuthSettingsFormGroup() {
		return new FormGroup<ClientCertAuthSettingsFormProperties>({
			OCSPUrl: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeCertificateRequest {

		/** Required */
		DirectoryId: string;

		/** Required */
		CertificateId: string;
	}
	export interface DescribeCertificateRequestFormProperties {

		/** Required */
		DirectoryId: FormControl<string | null | undefined>,

		/** Required */
		CertificateId: FormControl<string | null | undefined>,
	}
	export function CreateDescribeCertificateRequestFormGroup() {
		return new FormGroup<DescribeCertificateRequestFormProperties>({
			DirectoryId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			CertificateId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DescribeClientAuthenticationSettingsResult {
		ClientAuthenticationSettingsInfo?: Array<ClientAuthenticationSettingInfo>;
		NextToken?: string;
	}
	export interface DescribeClientAuthenticationSettingsResultFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeClientAuthenticationSettingsResultFormGroup() {
		return new FormGroup<DescribeClientAuthenticationSettingsResultFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains information about a client authentication method for a directory. */
	export interface ClientAuthenticationSettingInfo {
		Type?: ClientAuthenticationType;
		Status?: SelectiveAuth;
		LastUpdatedDateTime?: Date;
	}

	/** Contains information about a client authentication method for a directory. */
	export interface ClientAuthenticationSettingInfoFormProperties {
		Type: FormControl<ClientAuthenticationType | null | undefined>,
		Status: FormControl<SelectiveAuth | null | undefined>,
		LastUpdatedDateTime: FormControl<Date | null | undefined>,
	}
	export function CreateClientAuthenticationSettingInfoFormGroup() {
		return new FormGroup<ClientAuthenticationSettingInfoFormProperties>({
			Type: new FormControl<ClientAuthenticationType | null | undefined>(undefined),
			Status: new FormControl<SelectiveAuth | null | undefined>(undefined),
			LastUpdatedDateTime: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export enum ClientAuthenticationType { SmartCard = 0, SmartCardOrPassword = 1 }

	export interface DescribeClientAuthenticationSettingsRequest {

		/** Required */
		DirectoryId: string;
		Type?: ClientAuthenticationType;
		NextToken?: string;
		Limit?: number | null;
	}
	export interface DescribeClientAuthenticationSettingsRequestFormProperties {

		/** Required */
		DirectoryId: FormControl<string | null | undefined>,
		Type: FormControl<ClientAuthenticationType | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
		Limit: FormControl<number | null | undefined>,
	}
	export function CreateDescribeClientAuthenticationSettingsRequestFormGroup() {
		return new FormGroup<DescribeClientAuthenticationSettingsRequestFormProperties>({
			DirectoryId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Type: new FormControl<ClientAuthenticationType | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
			Limit: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** The result of a DescribeConditionalForwarder request. */
	export interface DescribeConditionalForwardersResult {
		ConditionalForwarders?: Array<ConditionalForwarder>;
	}

	/** The result of a DescribeConditionalForwarder request. */
	export interface DescribeConditionalForwardersResultFormProperties {
	}
	export function CreateDescribeConditionalForwardersResultFormGroup() {
		return new FormGroup<DescribeConditionalForwardersResultFormProperties>({
		});

	}


	/** Points to a remote domain with which you are setting up a trust relationship. Conditional forwarders are required in order to set up a trust relationship with another domain. */
	export interface ConditionalForwarder {
		RemoteDomainName?: string;
		DnsIpAddrs?: Array<string>;
		ReplicationScope?: ReplicationScope;
	}

	/** Points to a remote domain with which you are setting up a trust relationship. Conditional forwarders are required in order to set up a trust relationship with another domain. */
	export interface ConditionalForwarderFormProperties {
		RemoteDomainName: FormControl<string | null | undefined>,
		ReplicationScope: FormControl<ReplicationScope | null | undefined>,
	}
	export function CreateConditionalForwarderFormGroup() {
		return new FormGroup<ConditionalForwarderFormProperties>({
			RemoteDomainName: new FormControl<string | null | undefined>(undefined),
			ReplicationScope: new FormControl<ReplicationScope | null | undefined>(undefined),
		});

	}

	export enum ReplicationScope { Domain = 0 }


	/** Describes a conditional forwarder. */
	export interface DescribeConditionalForwardersRequest {

		/** Required */
		DirectoryId: string;
		RemoteDomainNames?: Array<string>;
	}

	/** Describes a conditional forwarder. */
	export interface DescribeConditionalForwardersRequestFormProperties {

		/** Required */
		DirectoryId: FormControl<string | null | undefined>,
	}
	export function CreateDescribeConditionalForwardersRequestFormGroup() {
		return new FormGroup<DescribeConditionalForwardersRequestFormProperties>({
			DirectoryId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Contains the results of the <a>DescribeDirectories</a> operation. */
	export interface DescribeDirectoriesResult {
		DirectoryDescriptions?: Array<DirectoryDescription>;
		NextToken?: string;
	}

	/** Contains the results of the <a>DescribeDirectories</a> operation. */
	export interface DescribeDirectoriesResultFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeDirectoriesResultFormGroup() {
		return new FormGroup<DescribeDirectoriesResultFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains information about an Directory Service directory. */
	export interface DirectoryDescription {
		DirectoryId?: string;
		Name?: string;
		ShortName?: string;
		Size?: DirectorySize;
		Edition?: DirectoryEdition;
		Alias?: string;
		AccessUrl?: string;
		Description?: string;
		DnsIpAddrs?: Array<string>;
		Stage?: DirectoryStage;
		ShareStatus?: ShareStatus;
		ShareMethod?: ShareMethod;
		ShareNotes?: string;
		LaunchTime?: Date;
		StageLastUpdatedDateTime?: Date;
		Type?: DirectoryType;
		VpcSettings?: DirectoryVpcSettingsDescription;
		ConnectSettings?: DirectoryConnectSettingsDescription;
		RadiusSettings?: RadiusSettings;
		RadiusStatus?: RadiusStatus;
		StageReason?: string;
		SsoEnabled?: boolean | null;
		DesiredNumberOfDomainControllers?: number | null;
		OwnerDirectoryDescription?: OwnerDirectoryDescription;
		RegionsInfo?: RegionsInfo;
		OsVersion?: OSVersion;
	}

	/** Contains information about an Directory Service directory. */
	export interface DirectoryDescriptionFormProperties {
		DirectoryId: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
		ShortName: FormControl<string | null | undefined>,
		Size: FormControl<DirectorySize | null | undefined>,
		Edition: FormControl<DirectoryEdition | null | undefined>,
		Alias: FormControl<string | null | undefined>,
		AccessUrl: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
		Stage: FormControl<DirectoryStage | null | undefined>,
		ShareStatus: FormControl<ShareStatus | null | undefined>,
		ShareMethod: FormControl<ShareMethod | null | undefined>,
		ShareNotes: FormControl<string | null | undefined>,
		LaunchTime: FormControl<Date | null | undefined>,
		StageLastUpdatedDateTime: FormControl<Date | null | undefined>,
		Type: FormControl<DirectoryType | null | undefined>,
		RadiusStatus: FormControl<RadiusStatus | null | undefined>,
		StageReason: FormControl<string | null | undefined>,
		SsoEnabled: FormControl<boolean | null | undefined>,
		DesiredNumberOfDomainControllers: FormControl<number | null | undefined>,
		OsVersion: FormControl<OSVersion | null | undefined>,
	}
	export function CreateDirectoryDescriptionFormGroup() {
		return new FormGroup<DirectoryDescriptionFormProperties>({
			DirectoryId: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			ShortName: new FormControl<string | null | undefined>(undefined),
			Size: new FormControl<DirectorySize | null | undefined>(undefined),
			Edition: new FormControl<DirectoryEdition | null | undefined>(undefined),
			Alias: new FormControl<string | null | undefined>(undefined),
			AccessUrl: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			Stage: new FormControl<DirectoryStage | null | undefined>(undefined),
			ShareStatus: new FormControl<ShareStatus | null | undefined>(undefined),
			ShareMethod: new FormControl<ShareMethod | null | undefined>(undefined),
			ShareNotes: new FormControl<string | null | undefined>(undefined),
			LaunchTime: new FormControl<Date | null | undefined>(undefined),
			StageLastUpdatedDateTime: new FormControl<Date | null | undefined>(undefined),
			Type: new FormControl<DirectoryType | null | undefined>(undefined),
			RadiusStatus: new FormControl<RadiusStatus | null | undefined>(undefined),
			StageReason: new FormControl<string | null | undefined>(undefined),
			SsoEnabled: new FormControl<boolean | null | undefined>(undefined),
			DesiredNumberOfDomainControllers: new FormControl<number | null | undefined>(undefined),
			OsVersion: new FormControl<OSVersion | null | undefined>(undefined),
		});

	}

	export enum DirectoryStage { Requested = 0, Creating = 1, Created = 2, Active = 3, Inoperable = 4, Impaired = 5, Restoring = 6, RestoreFailed = 7, Deleting = 8, Deleted = 9, Failed = 10 }

	export enum DirectoryType { SimpleAD = 0, ADConnector = 1, MicrosoftAD = 2, SharedMicrosoftAD = 3 }


	/** Contains information about the directory. */
	export interface DirectoryVpcSettingsDescription {
		VpcId?: string;
		SubnetIds?: Array<string>;
		SecurityGroupId?: string;
		AvailabilityZones?: Array<string>;
	}

	/** Contains information about the directory. */
	export interface DirectoryVpcSettingsDescriptionFormProperties {
		VpcId: FormControl<string | null | undefined>,
		SecurityGroupId: FormControl<string | null | undefined>,
	}
	export function CreateDirectoryVpcSettingsDescriptionFormGroup() {
		return new FormGroup<DirectoryVpcSettingsDescriptionFormProperties>({
			VpcId: new FormControl<string | null | undefined>(undefined),
			SecurityGroupId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains information about an AD Connector directory. */
	export interface DirectoryConnectSettingsDescription {
		VpcId?: string;
		SubnetIds?: Array<string>;
		CustomerUserName?: string;
		SecurityGroupId?: string;
		AvailabilityZones?: Array<string>;
		ConnectIps?: Array<string>;
	}

	/** Contains information about an AD Connector directory. */
	export interface DirectoryConnectSettingsDescriptionFormProperties {
		VpcId: FormControl<string | null | undefined>,
		CustomerUserName: FormControl<string | null | undefined>,
		SecurityGroupId: FormControl<string | null | undefined>,
	}
	export function CreateDirectoryConnectSettingsDescriptionFormGroup() {
		return new FormGroup<DirectoryConnectSettingsDescriptionFormProperties>({
			VpcId: new FormControl<string | null | undefined>(undefined),
			CustomerUserName: new FormControl<string | null | undefined>(undefined),
			SecurityGroupId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains information about a Remote Authentication Dial In User Service (RADIUS) server. */
	export interface RadiusSettings {
		RadiusServers?: Array<string>;
		RadiusPort?: number | null;
		RadiusTimeout?: number | null;
		RadiusRetries?: number | null;
		SharedSecret?: string;
		AuthenticationProtocol?: RadiusAuthenticationProtocol;
		DisplayLabel?: string;
		UseSameUsername?: boolean | null;
	}

	/** Contains information about a Remote Authentication Dial In User Service (RADIUS) server. */
	export interface RadiusSettingsFormProperties {
		RadiusPort: FormControl<number | null | undefined>,
		RadiusTimeout: FormControl<number | null | undefined>,
		RadiusRetries: FormControl<number | null | undefined>,
		SharedSecret: FormControl<string | null | undefined>,
		AuthenticationProtocol: FormControl<RadiusAuthenticationProtocol | null | undefined>,
		DisplayLabel: FormControl<string | null | undefined>,
		UseSameUsername: FormControl<boolean | null | undefined>,
	}
	export function CreateRadiusSettingsFormGroup() {
		return new FormGroup<RadiusSettingsFormProperties>({
			RadiusPort: new FormControl<number | null | undefined>(undefined),
			RadiusTimeout: new FormControl<number | null | undefined>(undefined),
			RadiusRetries: new FormControl<number | null | undefined>(undefined),
			SharedSecret: new FormControl<string | null | undefined>(undefined),
			AuthenticationProtocol: new FormControl<RadiusAuthenticationProtocol | null | undefined>(undefined),
			DisplayLabel: new FormControl<string | null | undefined>(undefined),
			UseSameUsername: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export enum RadiusAuthenticationProtocol { PAP = 0, CHAP = 1, 'MS-CHAPv1' = 2, 'MS-CHAPv2' = 3 }

	export enum RadiusStatus { Creating = 0, Completed = 1, Failed = 2 }


	/** Describes the directory owner account details that have been shared to the directory consumer account. */
	export interface OwnerDirectoryDescription {
		DirectoryId?: string;
		AccountId?: string;
		DnsIpAddrs?: Array<string>;
		VpcSettings?: DirectoryVpcSettingsDescription;
		RadiusSettings?: RadiusSettings;
		RadiusStatus?: RadiusStatus;
	}

	/** Describes the directory owner account details that have been shared to the directory consumer account. */
	export interface OwnerDirectoryDescriptionFormProperties {
		DirectoryId: FormControl<string | null | undefined>,
		AccountId: FormControl<string | null | undefined>,
		RadiusStatus: FormControl<RadiusStatus | null | undefined>,
	}
	export function CreateOwnerDirectoryDescriptionFormGroup() {
		return new FormGroup<OwnerDirectoryDescriptionFormProperties>({
			DirectoryId: new FormControl<string | null | undefined>(undefined),
			AccountId: new FormControl<string | null | undefined>(undefined),
			RadiusStatus: new FormControl<RadiusStatus | null | undefined>(undefined),
		});

	}


	/** Provides information about the Regions that are configured for multi-Region replication. */
	export interface RegionsInfo {
		PrimaryRegion?: string;
		AdditionalRegions?: Array<string>;
	}

	/** Provides information about the Regions that are configured for multi-Region replication. */
	export interface RegionsInfoFormProperties {
		PrimaryRegion: FormControl<string | null | undefined>,
	}
	export function CreateRegionsInfoFormGroup() {
		return new FormGroup<RegionsInfoFormProperties>({
			PrimaryRegion: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum OSVersion { SERVER_2012 = 0, SERVER_2019 = 1 }


	/** Contains the inputs for the <a>DescribeDirectories</a> operation. */
	export interface DescribeDirectoriesRequest {
		DirectoryIds?: Array<string>;
		NextToken?: string;
		Limit?: number | null;
	}

	/** Contains the inputs for the <a>DescribeDirectories</a> operation. */
	export interface DescribeDirectoriesRequestFormProperties {
		NextToken: FormControl<string | null | undefined>,
		Limit: FormControl<number | null | undefined>,
	}
	export function CreateDescribeDirectoriesRequestFormGroup() {
		return new FormGroup<DescribeDirectoriesRequestFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
			Limit: new FormControl<number | null | undefined>(undefined),
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

	export interface DescribeDomainControllersResult {
		DomainControllers?: Array<DomainController>;
		NextToken?: string;
	}
	export interface DescribeDomainControllersResultFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeDomainControllersResultFormGroup() {
		return new FormGroup<DescribeDomainControllersResultFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains information about the domain controllers for a specified directory. */
	export interface DomainController {
		DirectoryId?: string;
		DomainControllerId?: string;
		DnsIpAddr?: string;
		VpcId?: string;
		SubnetId?: string;
		AvailabilityZone?: string;
		Status?: DomainControllerStatus;
		StatusReason?: string;
		LaunchTime?: Date;
		StatusLastUpdatedDateTime?: Date;
	}

	/** Contains information about the domain controllers for a specified directory. */
	export interface DomainControllerFormProperties {
		DirectoryId: FormControl<string | null | undefined>,
		DomainControllerId: FormControl<string | null | undefined>,
		DnsIpAddr: FormControl<string | null | undefined>,
		VpcId: FormControl<string | null | undefined>,
		SubnetId: FormControl<string | null | undefined>,
		AvailabilityZone: FormControl<string | null | undefined>,
		Status: FormControl<DomainControllerStatus | null | undefined>,
		StatusReason: FormControl<string | null | undefined>,
		LaunchTime: FormControl<Date | null | undefined>,
		StatusLastUpdatedDateTime: FormControl<Date | null | undefined>,
	}
	export function CreateDomainControllerFormGroup() {
		return new FormGroup<DomainControllerFormProperties>({
			DirectoryId: new FormControl<string | null | undefined>(undefined),
			DomainControllerId: new FormControl<string | null | undefined>(undefined),
			DnsIpAddr: new FormControl<string | null | undefined>(undefined),
			VpcId: new FormControl<string | null | undefined>(undefined),
			SubnetId: new FormControl<string | null | undefined>(undefined),
			AvailabilityZone: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<DomainControllerStatus | null | undefined>(undefined),
			StatusReason: new FormControl<string | null | undefined>(undefined),
			LaunchTime: new FormControl<Date | null | undefined>(undefined),
			StatusLastUpdatedDateTime: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export enum DomainControllerStatus { Creating = 0, Active = 1, Impaired = 2, Restoring = 3, Deleting = 4, Deleted = 5, Failed = 6 }

	export interface DescribeDomainControllersRequest {

		/** Required */
		DirectoryId: string;
		DomainControllerIds?: Array<string>;
		NextToken?: string;
		Limit?: number | null;
	}
	export interface DescribeDomainControllersRequestFormProperties {

		/** Required */
		DirectoryId: FormControl<string | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
		Limit: FormControl<number | null | undefined>,
	}
	export function CreateDescribeDomainControllersRequestFormGroup() {
		return new FormGroup<DescribeDomainControllersRequestFormProperties>({
			DirectoryId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			NextToken: new FormControl<string | null | undefined>(undefined),
			Limit: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** The result of a DescribeEventTopic request. */
	export interface DescribeEventTopicsResult {
		EventTopics?: Array<EventTopic>;
	}

	/** The result of a DescribeEventTopic request. */
	export interface DescribeEventTopicsResultFormProperties {
	}
	export function CreateDescribeEventTopicsResultFormGroup() {
		return new FormGroup<DescribeEventTopicsResultFormProperties>({
		});

	}


	/** Information about Amazon SNS topic and Directory Service directory associations. */
	export interface EventTopic {
		DirectoryId?: string;
		TopicName?: string;
		TopicArn?: string;
		CreatedDateTime?: Date;
		Status?: TopicStatus;
	}

	/** Information about Amazon SNS topic and Directory Service directory associations. */
	export interface EventTopicFormProperties {
		DirectoryId: FormControl<string | null | undefined>,
		TopicName: FormControl<string | null | undefined>,
		TopicArn: FormControl<string | null | undefined>,
		CreatedDateTime: FormControl<Date | null | undefined>,
		Status: FormControl<TopicStatus | null | undefined>,
	}
	export function CreateEventTopicFormGroup() {
		return new FormGroup<EventTopicFormProperties>({
			DirectoryId: new FormControl<string | null | undefined>(undefined),
			TopicName: new FormControl<string | null | undefined>(undefined),
			TopicArn: new FormControl<string | null | undefined>(undefined),
			CreatedDateTime: new FormControl<Date | null | undefined>(undefined),
			Status: new FormControl<TopicStatus | null | undefined>(undefined),
		});

	}

	export enum TopicStatus { Registered = 0, 'Topic not found' = 1, Failed = 2, Deleted = 3 }


	/** Describes event topics. */
	export interface DescribeEventTopicsRequest {
		DirectoryId?: string;
		TopicNames?: Array<string>;
	}

	/** Describes event topics. */
	export interface DescribeEventTopicsRequestFormProperties {
		DirectoryId: FormControl<string | null | undefined>,
	}
	export function CreateDescribeEventTopicsRequestFormGroup() {
		return new FormGroup<DescribeEventTopicsRequestFormProperties>({
			DirectoryId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeLDAPSSettingsResult {
		LDAPSSettingsInfo?: Array<LDAPSSettingInfo>;
		NextToken?: string;
	}
	export interface DescribeLDAPSSettingsResultFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeLDAPSSettingsResultFormGroup() {
		return new FormGroup<DescribeLDAPSSettingsResultFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains general information about the LDAPS settings. */
	export interface LDAPSSettingInfo {
		LDAPSStatus?: LDAPSStatus;
		LDAPSStatusReason?: string;
		LastUpdatedDateTime?: Date;
	}

	/** Contains general information about the LDAPS settings. */
	export interface LDAPSSettingInfoFormProperties {
		LDAPSStatus: FormControl<LDAPSStatus | null | undefined>,
		LDAPSStatusReason: FormControl<string | null | undefined>,
		LastUpdatedDateTime: FormControl<Date | null | undefined>,
	}
	export function CreateLDAPSSettingInfoFormGroup() {
		return new FormGroup<LDAPSSettingInfoFormProperties>({
			LDAPSStatus: new FormControl<LDAPSStatus | null | undefined>(undefined),
			LDAPSStatusReason: new FormControl<string | null | undefined>(undefined),
			LastUpdatedDateTime: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export enum LDAPSStatus { Enabling = 0, Enabled = 1, EnableFailed = 2, Disabled = 3 }

	export interface DescribeLDAPSSettingsRequest {

		/** Required */
		DirectoryId: string;
		Type?: LDAPSType;
		NextToken?: string;
		Limit?: number | null;
	}
	export interface DescribeLDAPSSettingsRequestFormProperties {

		/** Required */
		DirectoryId: FormControl<string | null | undefined>,
		Type: FormControl<LDAPSType | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
		Limit: FormControl<number | null | undefined>,
	}
	export function CreateDescribeLDAPSSettingsRequestFormGroup() {
		return new FormGroup<DescribeLDAPSSettingsRequestFormProperties>({
			DirectoryId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Type: new FormControl<LDAPSType | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
			Limit: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum LDAPSType { Client = 0 }

	export interface DescribeRegionsResult {
		RegionsDescription?: Array<RegionDescription>;
		NextToken?: string;
	}
	export interface DescribeRegionsResultFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeRegionsResultFormGroup() {
		return new FormGroup<DescribeRegionsResultFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The replicated Region information for a directory. */
	export interface RegionDescription {
		DirectoryId?: string;
		RegionName?: string;
		RegionType?: RegionType;
		Status?: DirectoryStage;

		/** Contains VPC information for the <a>CreateDirectory</a> or <a>CreateMicrosoftAD</a> operation. */
		VpcSettings?: DirectoryVpcSettings;
		DesiredNumberOfDomainControllers?: number | null;
		LaunchTime?: Date;
		StatusLastUpdatedDateTime?: Date;
		LastUpdatedDateTime?: Date;
	}

	/** The replicated Region information for a directory. */
	export interface RegionDescriptionFormProperties {
		DirectoryId: FormControl<string | null | undefined>,
		RegionName: FormControl<string | null | undefined>,
		RegionType: FormControl<RegionType | null | undefined>,
		Status: FormControl<DirectoryStage | null | undefined>,
		DesiredNumberOfDomainControllers: FormControl<number | null | undefined>,
		LaunchTime: FormControl<Date | null | undefined>,
		StatusLastUpdatedDateTime: FormControl<Date | null | undefined>,
		LastUpdatedDateTime: FormControl<Date | null | undefined>,
	}
	export function CreateRegionDescriptionFormGroup() {
		return new FormGroup<RegionDescriptionFormProperties>({
			DirectoryId: new FormControl<string | null | undefined>(undefined),
			RegionName: new FormControl<string | null | undefined>(undefined),
			RegionType: new FormControl<RegionType | null | undefined>(undefined),
			Status: new FormControl<DirectoryStage | null | undefined>(undefined),
			DesiredNumberOfDomainControllers: new FormControl<number | null | undefined>(undefined),
			LaunchTime: new FormControl<Date | null | undefined>(undefined),
			StatusLastUpdatedDateTime: new FormControl<Date | null | undefined>(undefined),
			LastUpdatedDateTime: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export enum RegionType { Primary = 0, Additional = 1 }

	export interface DescribeRegionsRequest {

		/** Required */
		DirectoryId: string;
		RegionName?: string;
		NextToken?: string;
	}
	export interface DescribeRegionsRequestFormProperties {

		/** Required */
		DirectoryId: FormControl<string | null | undefined>,
		RegionName: FormControl<string | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeRegionsRequestFormGroup() {
		return new FormGroup<DescribeRegionsRequestFormProperties>({
			DirectoryId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			RegionName: new FormControl<string | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeSettingsResult {
		DirectoryId?: string;
		SettingEntries?: Array<SettingEntry>;
		NextToken?: string;
	}
	export interface DescribeSettingsResultFormProperties {
		DirectoryId: FormControl<string | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeSettingsResultFormGroup() {
		return new FormGroup<DescribeSettingsResultFormProperties>({
			DirectoryId: new FormControl<string | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains information about the specified configurable setting for a directory. */
	export interface SettingEntry {
		Type?: string;
		Name?: string;
		AllowedValues?: string;
		AppliedValue?: string;
		RequestedValue?: string;
		RequestStatus?: DirectoryConfigurationStatus;
		RequestDetailedStatus?: DirectoryConfigurationSettingRequestDetailedStatus;
		RequestStatusMessage?: string;
		LastUpdatedDateTime?: Date;
		LastRequestedDateTime?: Date;
		DataType?: string;
	}

	/** Contains information about the specified configurable setting for a directory. */
	export interface SettingEntryFormProperties {
		Type: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
		AllowedValues: FormControl<string | null | undefined>,
		AppliedValue: FormControl<string | null | undefined>,
		RequestedValue: FormControl<string | null | undefined>,
		RequestStatus: FormControl<DirectoryConfigurationStatus | null | undefined>,
		RequestStatusMessage: FormControl<string | null | undefined>,
		LastUpdatedDateTime: FormControl<Date | null | undefined>,
		LastRequestedDateTime: FormControl<Date | null | undefined>,
		DataType: FormControl<string | null | undefined>,
	}
	export function CreateSettingEntryFormGroup() {
		return new FormGroup<SettingEntryFormProperties>({
			Type: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			AllowedValues: new FormControl<string | null | undefined>(undefined),
			AppliedValue: new FormControl<string | null | undefined>(undefined),
			RequestedValue: new FormControl<string | null | undefined>(undefined),
			RequestStatus: new FormControl<DirectoryConfigurationStatus | null | undefined>(undefined),
			RequestStatusMessage: new FormControl<string | null | undefined>(undefined),
			LastUpdatedDateTime: new FormControl<Date | null | undefined>(undefined),
			LastRequestedDateTime: new FormControl<Date | null | undefined>(undefined),
			DataType: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum DirectoryConfigurationStatus { Requested = 0, Updating = 1, Updated = 2, Failed = 3, Default = 4 }

	export interface DirectoryConfigurationSettingRequestDetailedStatus {
	}
	export interface DirectoryConfigurationSettingRequestDetailedStatusFormProperties {
	}
	export function CreateDirectoryConfigurationSettingRequestDetailedStatusFormGroup() {
		return new FormGroup<DirectoryConfigurationSettingRequestDetailedStatusFormProperties>({
		});

	}

	export interface DescribeSettingsRequest {

		/** Required */
		DirectoryId: string;
		Status?: DirectoryConfigurationStatus;
		NextToken?: string;
	}
	export interface DescribeSettingsRequestFormProperties {

		/** Required */
		DirectoryId: FormControl<string | null | undefined>,
		Status: FormControl<DirectoryConfigurationStatus | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeSettingsRequestFormGroup() {
		return new FormGroup<DescribeSettingsRequestFormProperties>({
			DirectoryId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Status: new FormControl<DirectoryConfigurationStatus | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeSharedDirectoriesResult {
		SharedDirectories?: Array<SharedDirectory>;
		NextToken?: string;
	}
	export interface DescribeSharedDirectoriesResultFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeSharedDirectoriesResultFormGroup() {
		return new FormGroup<DescribeSharedDirectoriesResultFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeSharedDirectoriesRequest {

		/** Required */
		OwnerDirectoryId: string;
		SharedDirectoryIds?: Array<string>;
		NextToken?: string;
		Limit?: number | null;
	}
	export interface DescribeSharedDirectoriesRequestFormProperties {

		/** Required */
		OwnerDirectoryId: FormControl<string | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
		Limit: FormControl<number | null | undefined>,
	}
	export function CreateDescribeSharedDirectoriesRequestFormGroup() {
		return new FormGroup<DescribeSharedDirectoriesRequestFormProperties>({
			OwnerDirectoryId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			NextToken: new FormControl<string | null | undefined>(undefined),
			Limit: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Contains the results of the <a>DescribeSnapshots</a> operation. */
	export interface DescribeSnapshotsResult {
		Snapshots?: Array<Snapshot>;
		NextToken?: string;
	}

	/** Contains the results of the <a>DescribeSnapshots</a> operation. */
	export interface DescribeSnapshotsResultFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeSnapshotsResultFormGroup() {
		return new FormGroup<DescribeSnapshotsResultFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Describes a directory snapshot. */
	export interface Snapshot {
		DirectoryId?: string;
		SnapshotId?: string;
		Type?: SnapshotType;
		Name?: string;
		Status?: RadiusStatus;
		StartTime?: Date;
	}

	/** Describes a directory snapshot. */
	export interface SnapshotFormProperties {
		DirectoryId: FormControl<string | null | undefined>,
		SnapshotId: FormControl<string | null | undefined>,
		Type: FormControl<SnapshotType | null | undefined>,
		Name: FormControl<string | null | undefined>,
		Status: FormControl<RadiusStatus | null | undefined>,
		StartTime: FormControl<Date | null | undefined>,
	}
	export function CreateSnapshotFormGroup() {
		return new FormGroup<SnapshotFormProperties>({
			DirectoryId: new FormControl<string | null | undefined>(undefined),
			SnapshotId: new FormControl<string | null | undefined>(undefined),
			Type: new FormControl<SnapshotType | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<RadiusStatus | null | undefined>(undefined),
			StartTime: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export enum SnapshotType { Auto = 0, Manual = 1 }


	/** Contains the inputs for the <a>DescribeSnapshots</a> operation. */
	export interface DescribeSnapshotsRequest {
		DirectoryId?: string;
		SnapshotIds?: Array<string>;
		NextToken?: string;
		Limit?: number | null;
	}

	/** Contains the inputs for the <a>DescribeSnapshots</a> operation. */
	export interface DescribeSnapshotsRequestFormProperties {
		DirectoryId: FormControl<string | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
		Limit: FormControl<number | null | undefined>,
	}
	export function CreateDescribeSnapshotsRequestFormGroup() {
		return new FormGroup<DescribeSnapshotsRequestFormProperties>({
			DirectoryId: new FormControl<string | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
			Limit: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** The result of a DescribeTrust request. */
	export interface DescribeTrustsResult {
		Trusts?: Array<Trust>;
		NextToken?: string;
	}

	/** The result of a DescribeTrust request. */
	export interface DescribeTrustsResultFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeTrustsResultFormGroup() {
		return new FormGroup<DescribeTrustsResultFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Describes a trust relationship between an Managed Microsoft AD directory and an external domain. */
	export interface Trust {
		DirectoryId?: string;
		TrustId?: string;
		RemoteDomainName?: string;
		TrustType?: TrustType;
		TrustDirection?: TrustDirection;
		TrustState?: TrustState;
		CreatedDateTime?: Date;
		LastUpdatedDateTime?: Date;
		StateLastUpdatedDateTime?: Date;
		TrustStateReason?: string;
		SelectiveAuth?: SelectiveAuth;
	}

	/** Describes a trust relationship between an Managed Microsoft AD directory and an external domain. */
	export interface TrustFormProperties {
		DirectoryId: FormControl<string | null | undefined>,
		TrustId: FormControl<string | null | undefined>,
		RemoteDomainName: FormControl<string | null | undefined>,
		TrustType: FormControl<TrustType | null | undefined>,
		TrustDirection: FormControl<TrustDirection | null | undefined>,
		TrustState: FormControl<TrustState | null | undefined>,
		CreatedDateTime: FormControl<Date | null | undefined>,
		LastUpdatedDateTime: FormControl<Date | null | undefined>,
		StateLastUpdatedDateTime: FormControl<Date | null | undefined>,
		TrustStateReason: FormControl<string | null | undefined>,
		SelectiveAuth: FormControl<SelectiveAuth | null | undefined>,
	}
	export function CreateTrustFormGroup() {
		return new FormGroup<TrustFormProperties>({
			DirectoryId: new FormControl<string | null | undefined>(undefined),
			TrustId: new FormControl<string | null | undefined>(undefined),
			RemoteDomainName: new FormControl<string | null | undefined>(undefined),
			TrustType: new FormControl<TrustType | null | undefined>(undefined),
			TrustDirection: new FormControl<TrustDirection | null | undefined>(undefined),
			TrustState: new FormControl<TrustState | null | undefined>(undefined),
			CreatedDateTime: new FormControl<Date | null | undefined>(undefined),
			LastUpdatedDateTime: new FormControl<Date | null | undefined>(undefined),
			StateLastUpdatedDateTime: new FormControl<Date | null | undefined>(undefined),
			TrustStateReason: new FormControl<string | null | undefined>(undefined),
			SelectiveAuth: new FormControl<SelectiveAuth | null | undefined>(undefined),
		});

	}

	export enum TrustState { Creating = 0, Created = 1, Verifying = 2, VerifyFailed = 3, Verified = 4, Updating = 5, UpdateFailed = 6, Updated = 7, Deleting = 8, Deleted = 9, Failed = 10 }


	/** Describes the trust relationships for a particular Managed Microsoft AD directory. If no input parameters are provided, such as directory ID or trust ID, this request describes all the trust relationships. */
	export interface DescribeTrustsRequest {
		DirectoryId?: string;
		TrustIds?: Array<string>;
		NextToken?: string;
		Limit?: number | null;
	}

	/** Describes the trust relationships for a particular Managed Microsoft AD directory. If no input parameters are provided, such as directory ID or trust ID, this request describes all the trust relationships. */
	export interface DescribeTrustsRequestFormProperties {
		DirectoryId: FormControl<string | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
		Limit: FormControl<number | null | undefined>,
	}
	export function CreateDescribeTrustsRequestFormGroup() {
		return new FormGroup<DescribeTrustsRequestFormProperties>({
			DirectoryId: new FormControl<string | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
			Limit: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface DescribeUpdateDirectoryResult {
		UpdateActivities?: Array<UpdateInfoEntry>;
		NextToken?: string;
	}
	export interface DescribeUpdateDirectoryResultFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeUpdateDirectoryResultFormGroup() {
		return new FormGroup<DescribeUpdateDirectoryResultFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**  An entry of update information related to a requested update type.  */
	export interface UpdateInfoEntry {
		Region?: string;
		Status?: UpdateStatus;
		StatusReason?: string;
		InitiatedBy?: string;
		NewValue?: UpdateValue;
		PreviousValue?: UpdateValue;
		StartTime?: Date;
		LastUpdatedDateTime?: Date;
	}

	/**  An entry of update information related to a requested update type.  */
	export interface UpdateInfoEntryFormProperties {
		Region: FormControl<string | null | undefined>,
		Status: FormControl<UpdateStatus | null | undefined>,
		StatusReason: FormControl<string | null | undefined>,
		InitiatedBy: FormControl<string | null | undefined>,
		StartTime: FormControl<Date | null | undefined>,
		LastUpdatedDateTime: FormControl<Date | null | undefined>,
	}
	export function CreateUpdateInfoEntryFormGroup() {
		return new FormGroup<UpdateInfoEntryFormProperties>({
			Region: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<UpdateStatus | null | undefined>(undefined),
			StatusReason: new FormControl<string | null | undefined>(undefined),
			InitiatedBy: new FormControl<string | null | undefined>(undefined),
			StartTime: new FormControl<Date | null | undefined>(undefined),
			LastUpdatedDateTime: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export enum UpdateStatus { Updated = 0, Updating = 1, UpdateFailed = 2 }


	/**  The value for a given type of <code>UpdateSettings</code>.  */
	export interface UpdateValue {
		OSUpdateSettings?: OSUpdateSettings;
	}

	/**  The value for a given type of <code>UpdateSettings</code>.  */
	export interface UpdateValueFormProperties {
	}
	export function CreateUpdateValueFormGroup() {
		return new FormGroup<UpdateValueFormProperties>({
		});

	}


	/**  OS version that the directory needs to be updated to.  */
	export interface OSUpdateSettings {
		OSVersion?: OSVersion;
	}

	/**  OS version that the directory needs to be updated to.  */
	export interface OSUpdateSettingsFormProperties {
		OSVersion: FormControl<OSVersion | null | undefined>,
	}
	export function CreateOSUpdateSettingsFormGroup() {
		return new FormGroup<OSUpdateSettingsFormProperties>({
			OSVersion: new FormControl<OSVersion | null | undefined>(undefined),
		});

	}

	export interface DescribeUpdateDirectoryRequest {

		/** Required */
		DirectoryId: string;

		/** Required */
		UpdateType: UpdateType;
		RegionName?: string;
		NextToken?: string;
	}
	export interface DescribeUpdateDirectoryRequestFormProperties {

		/** Required */
		DirectoryId: FormControl<string | null | undefined>,

		/** Required */
		UpdateType: FormControl<UpdateType | null | undefined>,
		RegionName: FormControl<string | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeUpdateDirectoryRequestFormGroup() {
		return new FormGroup<DescribeUpdateDirectoryRequestFormProperties>({
			DirectoryId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			UpdateType: new FormControl<UpdateType | null | undefined>(undefined, [Validators.required]),
			RegionName: new FormControl<string | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum UpdateType { OS = 0 }

	export interface DisableClientAuthenticationResult {
	}
	export interface DisableClientAuthenticationResultFormProperties {
	}
	export function CreateDisableClientAuthenticationResultFormGroup() {
		return new FormGroup<DisableClientAuthenticationResultFormProperties>({
		});

	}

	export interface DisableClientAuthenticationRequest {

		/** Required */
		DirectoryId: string;

		/** Required */
		Type: ClientAuthenticationType;
	}
	export interface DisableClientAuthenticationRequestFormProperties {

		/** Required */
		DirectoryId: FormControl<string | null | undefined>,

		/** Required */
		Type: FormControl<ClientAuthenticationType | null | undefined>,
	}
	export function CreateDisableClientAuthenticationRequestFormGroup() {
		return new FormGroup<DisableClientAuthenticationRequestFormProperties>({
			DirectoryId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Type: new FormControl<ClientAuthenticationType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface InvalidClientAuthStatusException {
	}
	export interface InvalidClientAuthStatusExceptionFormProperties {
	}
	export function CreateInvalidClientAuthStatusExceptionFormGroup() {
		return new FormGroup<InvalidClientAuthStatusExceptionFormProperties>({
		});

	}

	export interface DisableLDAPSResult {
	}
	export interface DisableLDAPSResultFormProperties {
	}
	export function CreateDisableLDAPSResultFormGroup() {
		return new FormGroup<DisableLDAPSResultFormProperties>({
		});

	}

	export interface DisableLDAPSRequest {

		/** Required */
		DirectoryId: string;

		/** Required */
		Type: LDAPSType;
	}
	export interface DisableLDAPSRequestFormProperties {

		/** Required */
		DirectoryId: FormControl<string | null | undefined>,

		/** Required */
		Type: FormControl<LDAPSType | null | undefined>,
	}
	export function CreateDisableLDAPSRequestFormGroup() {
		return new FormGroup<DisableLDAPSRequestFormProperties>({
			DirectoryId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Type: new FormControl<LDAPSType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface InvalidLDAPSStatusException {
	}
	export interface InvalidLDAPSStatusExceptionFormProperties {
	}
	export function CreateInvalidLDAPSStatusExceptionFormGroup() {
		return new FormGroup<InvalidLDAPSStatusExceptionFormProperties>({
		});

	}


	/** Contains the results of the <a>DisableRadius</a> operation. */
	export interface DisableRadiusResult {
	}

	/** Contains the results of the <a>DisableRadius</a> operation. */
	export interface DisableRadiusResultFormProperties {
	}
	export function CreateDisableRadiusResultFormGroup() {
		return new FormGroup<DisableRadiusResultFormProperties>({
		});

	}


	/** Contains the inputs for the <a>DisableRadius</a> operation. */
	export interface DisableRadiusRequest {

		/** Required */
		DirectoryId: string;
	}

	/** Contains the inputs for the <a>DisableRadius</a> operation. */
	export interface DisableRadiusRequestFormProperties {

		/** Required */
		DirectoryId: FormControl<string | null | undefined>,
	}
	export function CreateDisableRadiusRequestFormGroup() {
		return new FormGroup<DisableRadiusRequestFormProperties>({
			DirectoryId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Contains the results of the <a>DisableSso</a> operation. */
	export interface DisableSsoResult {
	}

	/** Contains the results of the <a>DisableSso</a> operation. */
	export interface DisableSsoResultFormProperties {
	}
	export function CreateDisableSsoResultFormGroup() {
		return new FormGroup<DisableSsoResultFormProperties>({
		});

	}


	/** Contains the inputs for the <a>DisableSso</a> operation. */
	export interface DisableSsoRequest {

		/** Required */
		DirectoryId: string;
		UserName?: string;
		Password?: string;
	}

	/** Contains the inputs for the <a>DisableSso</a> operation. */
	export interface DisableSsoRequestFormProperties {

		/** Required */
		DirectoryId: FormControl<string | null | undefined>,
		UserName: FormControl<string | null | undefined>,
		Password: FormControl<string | null | undefined>,
	}
	export function CreateDisableSsoRequestFormGroup() {
		return new FormGroup<DisableSsoRequestFormProperties>({
			DirectoryId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			UserName: new FormControl<string | null | undefined>(undefined),
			Password: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface EnableClientAuthenticationResult {
	}
	export interface EnableClientAuthenticationResultFormProperties {
	}
	export function CreateEnableClientAuthenticationResultFormGroup() {
		return new FormGroup<EnableClientAuthenticationResultFormProperties>({
		});

	}

	export interface EnableClientAuthenticationRequest {

		/** Required */
		DirectoryId: string;

		/** Required */
		Type: ClientAuthenticationType;
	}
	export interface EnableClientAuthenticationRequestFormProperties {

		/** Required */
		DirectoryId: FormControl<string | null | undefined>,

		/** Required */
		Type: FormControl<ClientAuthenticationType | null | undefined>,
	}
	export function CreateEnableClientAuthenticationRequestFormGroup() {
		return new FormGroup<EnableClientAuthenticationRequestFormProperties>({
			DirectoryId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Type: new FormControl<ClientAuthenticationType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface NoAvailableCertificateException {
	}
	export interface NoAvailableCertificateExceptionFormProperties {
	}
	export function CreateNoAvailableCertificateExceptionFormGroup() {
		return new FormGroup<NoAvailableCertificateExceptionFormProperties>({
		});

	}

	export interface EnableLDAPSResult {
	}
	export interface EnableLDAPSResultFormProperties {
	}
	export function CreateEnableLDAPSResultFormGroup() {
		return new FormGroup<EnableLDAPSResultFormProperties>({
		});

	}

	export interface EnableLDAPSRequest {

		/** Required */
		DirectoryId: string;

		/** Required */
		Type: LDAPSType;
	}
	export interface EnableLDAPSRequestFormProperties {

		/** Required */
		DirectoryId: FormControl<string | null | undefined>,

		/** Required */
		Type: FormControl<LDAPSType | null | undefined>,
	}
	export function CreateEnableLDAPSRequestFormGroup() {
		return new FormGroup<EnableLDAPSRequestFormProperties>({
			DirectoryId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Type: new FormControl<LDAPSType | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Contains the results of the <a>EnableRadius</a> operation. */
	export interface EnableRadiusResult {
	}

	/** Contains the results of the <a>EnableRadius</a> operation. */
	export interface EnableRadiusResultFormProperties {
	}
	export function CreateEnableRadiusResultFormGroup() {
		return new FormGroup<EnableRadiusResultFormProperties>({
		});

	}


	/** Contains the inputs for the <a>EnableRadius</a> operation. */
	export interface EnableRadiusRequest {

		/** Required */
		DirectoryId: string;

		/** Required */
		RadiusSettings: RadiusSettings;
	}

	/** Contains the inputs for the <a>EnableRadius</a> operation. */
	export interface EnableRadiusRequestFormProperties {

		/** Required */
		DirectoryId: FormControl<string | null | undefined>,
	}
	export function CreateEnableRadiusRequestFormGroup() {
		return new FormGroup<EnableRadiusRequestFormProperties>({
			DirectoryId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Contains the results of the <a>EnableSso</a> operation. */
	export interface EnableSsoResult {
	}

	/** Contains the results of the <a>EnableSso</a> operation. */
	export interface EnableSsoResultFormProperties {
	}
	export function CreateEnableSsoResultFormGroup() {
		return new FormGroup<EnableSsoResultFormProperties>({
		});

	}


	/** Contains the inputs for the <a>EnableSso</a> operation. */
	export interface EnableSsoRequest {

		/** Required */
		DirectoryId: string;
		UserName?: string;
		Password?: string;
	}

	/** Contains the inputs for the <a>EnableSso</a> operation. */
	export interface EnableSsoRequestFormProperties {

		/** Required */
		DirectoryId: FormControl<string | null | undefined>,
		UserName: FormControl<string | null | undefined>,
		Password: FormControl<string | null | undefined>,
	}
	export function CreateEnableSsoRequestFormGroup() {
		return new FormGroup<EnableSsoRequestFormProperties>({
			DirectoryId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			UserName: new FormControl<string | null | undefined>(undefined),
			Password: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains the results of the <a>GetDirectoryLimits</a> operation. */
	export interface GetDirectoryLimitsResult {
		DirectoryLimits?: DirectoryLimits;
	}

	/** Contains the results of the <a>GetDirectoryLimits</a> operation. */
	export interface GetDirectoryLimitsResultFormProperties {
	}
	export function CreateGetDirectoryLimitsResultFormGroup() {
		return new FormGroup<GetDirectoryLimitsResultFormProperties>({
		});

	}


	/** Contains directory limit information for a Region. */
	export interface DirectoryLimits {
		CloudOnlyDirectoriesLimit?: number | null;
		CloudOnlyDirectoriesCurrentCount?: number | null;
		CloudOnlyDirectoriesLimitReached?: boolean | null;
		CloudOnlyMicrosoftADLimit?: number | null;
		CloudOnlyMicrosoftADCurrentCount?: number | null;
		CloudOnlyMicrosoftADLimitReached?: boolean | null;
		ConnectedDirectoriesLimit?: number | null;
		ConnectedDirectoriesCurrentCount?: number | null;
		ConnectedDirectoriesLimitReached?: boolean | null;
	}

	/** Contains directory limit information for a Region. */
	export interface DirectoryLimitsFormProperties {
		CloudOnlyDirectoriesLimit: FormControl<number | null | undefined>,
		CloudOnlyDirectoriesCurrentCount: FormControl<number | null | undefined>,
		CloudOnlyDirectoriesLimitReached: FormControl<boolean | null | undefined>,
		CloudOnlyMicrosoftADLimit: FormControl<number | null | undefined>,
		CloudOnlyMicrosoftADCurrentCount: FormControl<number | null | undefined>,
		CloudOnlyMicrosoftADLimitReached: FormControl<boolean | null | undefined>,
		ConnectedDirectoriesLimit: FormControl<number | null | undefined>,
		ConnectedDirectoriesCurrentCount: FormControl<number | null | undefined>,
		ConnectedDirectoriesLimitReached: FormControl<boolean | null | undefined>,
	}
	export function CreateDirectoryLimitsFormGroup() {
		return new FormGroup<DirectoryLimitsFormProperties>({
			CloudOnlyDirectoriesLimit: new FormControl<number | null | undefined>(undefined),
			CloudOnlyDirectoriesCurrentCount: new FormControl<number | null | undefined>(undefined),
			CloudOnlyDirectoriesLimitReached: new FormControl<boolean | null | undefined>(undefined),
			CloudOnlyMicrosoftADLimit: new FormControl<number | null | undefined>(undefined),
			CloudOnlyMicrosoftADCurrentCount: new FormControl<number | null | undefined>(undefined),
			CloudOnlyMicrosoftADLimitReached: new FormControl<boolean | null | undefined>(undefined),
			ConnectedDirectoriesLimit: new FormControl<number | null | undefined>(undefined),
			ConnectedDirectoriesCurrentCount: new FormControl<number | null | undefined>(undefined),
			ConnectedDirectoriesLimitReached: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Contains the inputs for the <a>GetDirectoryLimits</a> operation. */
	export interface GetDirectoryLimitsRequest {
	}

	/** Contains the inputs for the <a>GetDirectoryLimits</a> operation. */
	export interface GetDirectoryLimitsRequestFormProperties {
	}
	export function CreateGetDirectoryLimitsRequestFormGroup() {
		return new FormGroup<GetDirectoryLimitsRequestFormProperties>({
		});

	}


	/** Contains the results of the <a>GetSnapshotLimits</a> operation. */
	export interface GetSnapshotLimitsResult {
		SnapshotLimits?: SnapshotLimits;
	}

	/** Contains the results of the <a>GetSnapshotLimits</a> operation. */
	export interface GetSnapshotLimitsResultFormProperties {
	}
	export function CreateGetSnapshotLimitsResultFormGroup() {
		return new FormGroup<GetSnapshotLimitsResultFormProperties>({
		});

	}


	/** Contains manual snapshot limit information for a directory. */
	export interface SnapshotLimits {
		ManualSnapshotsLimit?: number | null;
		ManualSnapshotsCurrentCount?: number | null;
		ManualSnapshotsLimitReached?: boolean | null;
	}

	/** Contains manual snapshot limit information for a directory. */
	export interface SnapshotLimitsFormProperties {
		ManualSnapshotsLimit: FormControl<number | null | undefined>,
		ManualSnapshotsCurrentCount: FormControl<number | null | undefined>,
		ManualSnapshotsLimitReached: FormControl<boolean | null | undefined>,
	}
	export function CreateSnapshotLimitsFormGroup() {
		return new FormGroup<SnapshotLimitsFormProperties>({
			ManualSnapshotsLimit: new FormControl<number | null | undefined>(undefined),
			ManualSnapshotsCurrentCount: new FormControl<number | null | undefined>(undefined),
			ManualSnapshotsLimitReached: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Contains the inputs for the <a>GetSnapshotLimits</a> operation. */
	export interface GetSnapshotLimitsRequest {

		/** Required */
		DirectoryId: string;
	}

	/** Contains the inputs for the <a>GetSnapshotLimits</a> operation. */
	export interface GetSnapshotLimitsRequestFormProperties {

		/** Required */
		DirectoryId: FormControl<string | null | undefined>,
	}
	export function CreateGetSnapshotLimitsRequestFormGroup() {
		return new FormGroup<GetSnapshotLimitsRequestFormProperties>({
			DirectoryId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ListCertificatesResult {
		NextToken?: string;
		CertificatesInfo?: Array<CertificateInfo>;
	}
	export interface ListCertificatesResultFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListCertificatesResultFormGroup() {
		return new FormGroup<ListCertificatesResultFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains general information about a certificate. */
	export interface CertificateInfo {
		CertificateId?: string;
		CommonName?: string;
		State?: CertificateState;
		ExpiryDateTime?: Date;
		Type?: CertificateType;
	}

	/** Contains general information about a certificate. */
	export interface CertificateInfoFormProperties {
		CertificateId: FormControl<string | null | undefined>,
		CommonName: FormControl<string | null | undefined>,
		State: FormControl<CertificateState | null | undefined>,
		ExpiryDateTime: FormControl<Date | null | undefined>,
		Type: FormControl<CertificateType | null | undefined>,
	}
	export function CreateCertificateInfoFormGroup() {
		return new FormGroup<CertificateInfoFormProperties>({
			CertificateId: new FormControl<string | null | undefined>(undefined),
			CommonName: new FormControl<string | null | undefined>(undefined),
			State: new FormControl<CertificateState | null | undefined>(undefined),
			ExpiryDateTime: new FormControl<Date | null | undefined>(undefined),
			Type: new FormControl<CertificateType | null | undefined>(undefined),
		});

	}

	export interface ListCertificatesRequest {

		/** Required */
		DirectoryId: string;
		NextToken?: string;
		Limit?: number | null;
	}
	export interface ListCertificatesRequestFormProperties {

		/** Required */
		DirectoryId: FormControl<string | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
		Limit: FormControl<number | null | undefined>,
	}
	export function CreateListCertificatesRequestFormGroup() {
		return new FormGroup<ListCertificatesRequestFormProperties>({
			DirectoryId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			NextToken: new FormControl<string | null | undefined>(undefined),
			Limit: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ListIpRoutesResult {
		IpRoutesInfo?: Array<IpRouteInfo>;
		NextToken?: string;
	}
	export interface ListIpRoutesResultFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListIpRoutesResultFormGroup() {
		return new FormGroup<ListIpRoutesResultFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Information about one or more IP address blocks. */
	export interface IpRouteInfo {
		DirectoryId?: string;
		CidrIp?: string;
		IpRouteStatusMsg?: IpRouteStatusMsg;
		AddedDateTime?: Date;
		IpRouteStatusReason?: string;
		Description?: string;
	}

	/** Information about one or more IP address blocks. */
	export interface IpRouteInfoFormProperties {
		DirectoryId: FormControl<string | null | undefined>,
		CidrIp: FormControl<string | null | undefined>,
		IpRouteStatusMsg: FormControl<IpRouteStatusMsg | null | undefined>,
		AddedDateTime: FormControl<Date | null | undefined>,
		IpRouteStatusReason: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
	}
	export function CreateIpRouteInfoFormGroup() {
		return new FormGroup<IpRouteInfoFormProperties>({
			DirectoryId: new FormControl<string | null | undefined>(undefined),
			CidrIp: new FormControl<string | null | undefined>(undefined),
			IpRouteStatusMsg: new FormControl<IpRouteStatusMsg | null | undefined>(undefined),
			AddedDateTime: new FormControl<Date | null | undefined>(undefined),
			IpRouteStatusReason: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum IpRouteStatusMsg { Adding = 0, Added = 1, Removing = 2, Removed = 3, AddFailed = 4, RemoveFailed = 5 }

	export interface ListIpRoutesRequest {

		/** Required */
		DirectoryId: string;
		NextToken?: string;
		Limit?: number | null;
	}
	export interface ListIpRoutesRequestFormProperties {

		/** Required */
		DirectoryId: FormControl<string | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
		Limit: FormControl<number | null | undefined>,
	}
	export function CreateListIpRoutesRequestFormGroup() {
		return new FormGroup<ListIpRoutesRequestFormProperties>({
			DirectoryId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			NextToken: new FormControl<string | null | undefined>(undefined),
			Limit: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ListLogSubscriptionsResult {
		LogSubscriptions?: Array<LogSubscription>;
		NextToken?: string;
	}
	export interface ListLogSubscriptionsResultFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListLogSubscriptionsResultFormGroup() {
		return new FormGroup<ListLogSubscriptionsResultFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents a log subscription, which tracks real-time data from a chosen log group to a specified destination. */
	export interface LogSubscription {
		DirectoryId?: string;
		LogGroupName?: string;
		SubscriptionCreatedDateTime?: Date;
	}

	/** Represents a log subscription, which tracks real-time data from a chosen log group to a specified destination. */
	export interface LogSubscriptionFormProperties {
		DirectoryId: FormControl<string | null | undefined>,
		LogGroupName: FormControl<string | null | undefined>,
		SubscriptionCreatedDateTime: FormControl<Date | null | undefined>,
	}
	export function CreateLogSubscriptionFormGroup() {
		return new FormGroup<LogSubscriptionFormProperties>({
			DirectoryId: new FormControl<string | null | undefined>(undefined),
			LogGroupName: new FormControl<string | null | undefined>(undefined),
			SubscriptionCreatedDateTime: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface ListLogSubscriptionsRequest {
		DirectoryId?: string;
		NextToken?: string;
		Limit?: number | null;
	}
	export interface ListLogSubscriptionsRequestFormProperties {
		DirectoryId: FormControl<string | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
		Limit: FormControl<number | null | undefined>,
	}
	export function CreateListLogSubscriptionsRequestFormGroup() {
		return new FormGroup<ListLogSubscriptionsRequestFormProperties>({
			DirectoryId: new FormControl<string | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
			Limit: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ListSchemaExtensionsResult {
		SchemaExtensionsInfo?: Array<SchemaExtensionInfo>;
		NextToken?: string;
	}
	export interface ListSchemaExtensionsResultFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListSchemaExtensionsResultFormGroup() {
		return new FormGroup<ListSchemaExtensionsResultFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Information about a schema extension. */
	export interface SchemaExtensionInfo {
		DirectoryId?: string;
		SchemaExtensionId?: string;
		Description?: string;
		SchemaExtensionStatus?: SchemaExtensionStatus;
		SchemaExtensionStatusReason?: string;
		StartDateTime?: Date;
		EndDateTime?: Date;
	}

	/** Information about a schema extension. */
	export interface SchemaExtensionInfoFormProperties {
		DirectoryId: FormControl<string | null | undefined>,
		SchemaExtensionId: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
		SchemaExtensionStatus: FormControl<SchemaExtensionStatus | null | undefined>,
		SchemaExtensionStatusReason: FormControl<string | null | undefined>,
		StartDateTime: FormControl<Date | null | undefined>,
		EndDateTime: FormControl<Date | null | undefined>,
	}
	export function CreateSchemaExtensionInfoFormGroup() {
		return new FormGroup<SchemaExtensionInfoFormProperties>({
			DirectoryId: new FormControl<string | null | undefined>(undefined),
			SchemaExtensionId: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			SchemaExtensionStatus: new FormControl<SchemaExtensionStatus | null | undefined>(undefined),
			SchemaExtensionStatusReason: new FormControl<string | null | undefined>(undefined),
			StartDateTime: new FormControl<Date | null | undefined>(undefined),
			EndDateTime: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export enum SchemaExtensionStatus { Initializing = 0, CreatingSnapshot = 1, UpdatingSchema = 2, Replicating = 3, CancelInProgress = 4, RollbackInProgress = 5, Cancelled = 6, Failed = 7, Completed = 8 }

	export interface ListSchemaExtensionsRequest {

		/** Required */
		DirectoryId: string;
		NextToken?: string;
		Limit?: number | null;
	}
	export interface ListSchemaExtensionsRequestFormProperties {

		/** Required */
		DirectoryId: FormControl<string | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
		Limit: FormControl<number | null | undefined>,
	}
	export function CreateListSchemaExtensionsRequestFormGroup() {
		return new FormGroup<ListSchemaExtensionsRequestFormProperties>({
			DirectoryId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			NextToken: new FormControl<string | null | undefined>(undefined),
			Limit: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ListTagsForResourceResult {
		Tags?: Array<Tag>;
		NextToken?: string;
	}
	export interface ListTagsForResourceResultFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListTagsForResourceResultFormGroup() {
		return new FormGroup<ListTagsForResourceResultFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListTagsForResourceRequest {

		/** Required */
		ResourceId: string;
		NextToken?: string;
		Limit?: number | null;
	}
	export interface ListTagsForResourceRequestFormProperties {

		/** Required */
		ResourceId: FormControl<string | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
		Limit: FormControl<number | null | undefined>,
	}
	export function CreateListTagsForResourceRequestFormGroup() {
		return new FormGroup<ListTagsForResourceRequestFormProperties>({
			ResourceId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			NextToken: new FormControl<string | null | undefined>(undefined),
			Limit: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface RegisterCertificateResult {
		CertificateId?: string;
	}
	export interface RegisterCertificateResultFormProperties {
		CertificateId: FormControl<string | null | undefined>,
	}
	export function CreateRegisterCertificateResultFormGroup() {
		return new FormGroup<RegisterCertificateResultFormProperties>({
			CertificateId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface RegisterCertificateRequest {

		/** Required */
		DirectoryId: string;

		/** Required */
		CertificateData: string;
		Type?: CertificateType;
		ClientCertAuthSettings?: ClientCertAuthSettings;
	}
	export interface RegisterCertificateRequestFormProperties {

		/** Required */
		DirectoryId: FormControl<string | null | undefined>,

		/** Required */
		CertificateData: FormControl<string | null | undefined>,
		Type: FormControl<CertificateType | null | undefined>,
	}
	export function CreateRegisterCertificateRequestFormGroup() {
		return new FormGroup<RegisterCertificateRequestFormProperties>({
			DirectoryId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			CertificateData: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Type: new FormControl<CertificateType | null | undefined>(undefined),
		});

	}

	export interface InvalidCertificateException {
	}
	export interface InvalidCertificateExceptionFormProperties {
	}
	export function CreateInvalidCertificateExceptionFormGroup() {
		return new FormGroup<InvalidCertificateExceptionFormProperties>({
		});

	}

	export interface CertificateLimitExceededException {
	}
	export interface CertificateLimitExceededExceptionFormProperties {
	}
	export function CreateCertificateLimitExceededExceptionFormGroup() {
		return new FormGroup<CertificateLimitExceededExceptionFormProperties>({
		});

	}

	export interface CertificateAlreadyExistsException {
	}
	export interface CertificateAlreadyExistsExceptionFormProperties {
	}
	export function CreateCertificateAlreadyExistsExceptionFormGroup() {
		return new FormGroup<CertificateAlreadyExistsExceptionFormProperties>({
		});

	}


	/** The result of a RegisterEventTopic request. */
	export interface RegisterEventTopicResult {
	}

	/** The result of a RegisterEventTopic request. */
	export interface RegisterEventTopicResultFormProperties {
	}
	export function CreateRegisterEventTopicResultFormGroup() {
		return new FormGroup<RegisterEventTopicResultFormProperties>({
		});

	}


	/** Registers a new event topic. */
	export interface RegisterEventTopicRequest {

		/** Required */
		DirectoryId: string;

		/** Required */
		TopicName: string;
	}

	/** Registers a new event topic. */
	export interface RegisterEventTopicRequestFormProperties {

		/** Required */
		DirectoryId: FormControl<string | null | undefined>,

		/** Required */
		TopicName: FormControl<string | null | undefined>,
	}
	export function CreateRegisterEventTopicRequestFormGroup() {
		return new FormGroup<RegisterEventTopicRequestFormProperties>({
			DirectoryId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			TopicName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface RejectSharedDirectoryResult {
		SharedDirectoryId?: string;
	}
	export interface RejectSharedDirectoryResultFormProperties {
		SharedDirectoryId: FormControl<string | null | undefined>,
	}
	export function CreateRejectSharedDirectoryResultFormGroup() {
		return new FormGroup<RejectSharedDirectoryResultFormProperties>({
			SharedDirectoryId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface RejectSharedDirectoryRequest {

		/** Required */
		SharedDirectoryId: string;
	}
	export interface RejectSharedDirectoryRequestFormProperties {

		/** Required */
		SharedDirectoryId: FormControl<string | null | undefined>,
	}
	export function CreateRejectSharedDirectoryRequestFormGroup() {
		return new FormGroup<RejectSharedDirectoryRequestFormProperties>({
			SharedDirectoryId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface RemoveIpRoutesResult {
	}
	export interface RemoveIpRoutesResultFormProperties {
	}
	export function CreateRemoveIpRoutesResultFormGroup() {
		return new FormGroup<RemoveIpRoutesResultFormProperties>({
		});

	}

	export interface RemoveIpRoutesRequest {

		/** Required */
		DirectoryId: string;

		/** Required */
		CidrIps: Array<string>;
	}
	export interface RemoveIpRoutesRequestFormProperties {

		/** Required */
		DirectoryId: FormControl<string | null | undefined>,
	}
	export function CreateRemoveIpRoutesRequestFormGroup() {
		return new FormGroup<RemoveIpRoutesRequestFormProperties>({
			DirectoryId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface RemoveRegionResult {
	}
	export interface RemoveRegionResultFormProperties {
	}
	export function CreateRemoveRegionResultFormGroup() {
		return new FormGroup<RemoveRegionResultFormProperties>({
		});

	}

	export interface RemoveRegionRequest {

		/** Required */
		DirectoryId: string;
	}
	export interface RemoveRegionRequestFormProperties {

		/** Required */
		DirectoryId: FormControl<string | null | undefined>,
	}
	export function CreateRemoveRegionRequestFormGroup() {
		return new FormGroup<RemoveRegionRequestFormProperties>({
			DirectoryId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface RemoveTagsFromResourceResult {
	}
	export interface RemoveTagsFromResourceResultFormProperties {
	}
	export function CreateRemoveTagsFromResourceResultFormGroup() {
		return new FormGroup<RemoveTagsFromResourceResultFormProperties>({
		});

	}

	export interface RemoveTagsFromResourceRequest {

		/** Required */
		ResourceId: string;

		/** Required */
		TagKeys: Array<string>;
	}
	export interface RemoveTagsFromResourceRequestFormProperties {

		/** Required */
		ResourceId: FormControl<string | null | undefined>,
	}
	export function CreateRemoveTagsFromResourceRequestFormGroup() {
		return new FormGroup<RemoveTagsFromResourceRequestFormProperties>({
			ResourceId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ResetUserPasswordResult {
	}
	export interface ResetUserPasswordResultFormProperties {
	}
	export function CreateResetUserPasswordResultFormGroup() {
		return new FormGroup<ResetUserPasswordResultFormProperties>({
		});

	}

	export interface ResetUserPasswordRequest {

		/** Required */
		DirectoryId: string;

		/** Required */
		UserName: string;

		/** Required */
		NewPassword: string;
	}
	export interface ResetUserPasswordRequestFormProperties {

		/** Required */
		DirectoryId: FormControl<string | null | undefined>,

		/** Required */
		UserName: FormControl<string | null | undefined>,

		/** Required */
		NewPassword: FormControl<string | null | undefined>,
	}
	export function CreateResetUserPasswordRequestFormGroup() {
		return new FormGroup<ResetUserPasswordRequestFormProperties>({
			DirectoryId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			UserName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			NewPassword: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UserDoesNotExistException {
	}
	export interface UserDoesNotExistExceptionFormProperties {
	}
	export function CreateUserDoesNotExistExceptionFormGroup() {
		return new FormGroup<UserDoesNotExistExceptionFormProperties>({
		});

	}

	export interface InvalidPasswordException {
	}
	export interface InvalidPasswordExceptionFormProperties {
	}
	export function CreateInvalidPasswordExceptionFormGroup() {
		return new FormGroup<InvalidPasswordExceptionFormProperties>({
		});

	}


	/** Contains the results of the <a>RestoreFromSnapshot</a> operation. */
	export interface RestoreFromSnapshotResult {
	}

	/** Contains the results of the <a>RestoreFromSnapshot</a> operation. */
	export interface RestoreFromSnapshotResultFormProperties {
	}
	export function CreateRestoreFromSnapshotResultFormGroup() {
		return new FormGroup<RestoreFromSnapshotResultFormProperties>({
		});

	}


	/** An object representing the inputs for the <a>RestoreFromSnapshot</a> operation. */
	export interface RestoreFromSnapshotRequest {

		/** Required */
		SnapshotId: string;
	}

	/** An object representing the inputs for the <a>RestoreFromSnapshot</a> operation. */
	export interface RestoreFromSnapshotRequestFormProperties {

		/** Required */
		SnapshotId: FormControl<string | null | undefined>,
	}
	export function CreateRestoreFromSnapshotRequestFormGroup() {
		return new FormGroup<RestoreFromSnapshotRequestFormProperties>({
			SnapshotId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ShareDirectoryResult {
		SharedDirectoryId?: string;
	}
	export interface ShareDirectoryResultFormProperties {
		SharedDirectoryId: FormControl<string | null | undefined>,
	}
	export function CreateShareDirectoryResultFormGroup() {
		return new FormGroup<ShareDirectoryResultFormProperties>({
			SharedDirectoryId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ShareDirectoryRequest {

		/** Required */
		DirectoryId: string;
		ShareNotes?: string;

		/** Required */
		ShareTarget: ShareTarget;

		/** Required */
		ShareMethod: ShareMethod;
	}
	export interface ShareDirectoryRequestFormProperties {

		/** Required */
		DirectoryId: FormControl<string | null | undefined>,
		ShareNotes: FormControl<string | null | undefined>,

		/** Required */
		ShareMethod: FormControl<ShareMethod | null | undefined>,
	}
	export function CreateShareDirectoryRequestFormGroup() {
		return new FormGroup<ShareDirectoryRequestFormProperties>({
			DirectoryId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ShareNotes: new FormControl<string | null | undefined>(undefined),
			ShareMethod: new FormControl<ShareMethod | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Identifier that contains details about the directory consumer account. */
	export interface ShareTarget {

		/** Required */
		Id: string;

		/** Required */
		Type: TargetType;
	}

	/** Identifier that contains details about the directory consumer account. */
	export interface ShareTargetFormProperties {

		/** Required */
		Id: FormControl<string | null | undefined>,

		/** Required */
		Type: FormControl<TargetType | null | undefined>,
	}
	export function CreateShareTargetFormGroup() {
		return new FormGroup<ShareTargetFormProperties>({
			Id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Type: new FormControl<TargetType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum TargetType { ACCOUNT = 0 }

	export interface InvalidTargetException {
	}
	export interface InvalidTargetExceptionFormProperties {
	}
	export function CreateInvalidTargetExceptionFormGroup() {
		return new FormGroup<InvalidTargetExceptionFormProperties>({
		});

	}

	export interface ShareLimitExceededException {
	}
	export interface ShareLimitExceededExceptionFormProperties {
	}
	export function CreateShareLimitExceededExceptionFormGroup() {
		return new FormGroup<ShareLimitExceededExceptionFormProperties>({
		});

	}

	export interface OrganizationsException {
	}
	export interface OrganizationsExceptionFormProperties {
	}
	export function CreateOrganizationsExceptionFormGroup() {
		return new FormGroup<OrganizationsExceptionFormProperties>({
		});

	}

	export interface StartSchemaExtensionResult {
		SchemaExtensionId?: string;
	}
	export interface StartSchemaExtensionResultFormProperties {
		SchemaExtensionId: FormControl<string | null | undefined>,
	}
	export function CreateStartSchemaExtensionResultFormGroup() {
		return new FormGroup<StartSchemaExtensionResultFormProperties>({
			SchemaExtensionId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface StartSchemaExtensionRequest {

		/** Required */
		DirectoryId: string;

		/** Required */
		CreateSnapshotBeforeSchemaExtension: boolean;

		/** Required */
		LdifContent: string;

		/** Required */
		Description: string;
	}
	export interface StartSchemaExtensionRequestFormProperties {

		/** Required */
		DirectoryId: FormControl<string | null | undefined>,

		/** Required */
		CreateSnapshotBeforeSchemaExtension: FormControl<boolean | null | undefined>,

		/** Required */
		LdifContent: FormControl<string | null | undefined>,

		/** Required */
		Description: FormControl<string | null | undefined>,
	}
	export function CreateStartSchemaExtensionRequestFormGroup() {
		return new FormGroup<StartSchemaExtensionRequestFormProperties>({
			DirectoryId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			CreateSnapshotBeforeSchemaExtension: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			LdifContent: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Description: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UnshareDirectoryResult {
		SharedDirectoryId?: string;
	}
	export interface UnshareDirectoryResultFormProperties {
		SharedDirectoryId: FormControl<string | null | undefined>,
	}
	export function CreateUnshareDirectoryResultFormGroup() {
		return new FormGroup<UnshareDirectoryResultFormProperties>({
			SharedDirectoryId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UnshareDirectoryRequest {

		/** Required */
		DirectoryId: string;

		/** Required */
		UnshareTarget: UnshareTarget;
	}
	export interface UnshareDirectoryRequestFormProperties {

		/** Required */
		DirectoryId: FormControl<string | null | undefined>,
	}
	export function CreateUnshareDirectoryRequestFormGroup() {
		return new FormGroup<UnshareDirectoryRequestFormProperties>({
			DirectoryId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Identifier that contains details about the directory consumer account with whom the directory is being unshared. */
	export interface UnshareTarget {

		/** Required */
		Id: string;

		/** Required */
		Type: TargetType;
	}

	/** Identifier that contains details about the directory consumer account with whom the directory is being unshared. */
	export interface UnshareTargetFormProperties {

		/** Required */
		Id: FormControl<string | null | undefined>,

		/** Required */
		Type: FormControl<TargetType | null | undefined>,
	}
	export function CreateUnshareTargetFormGroup() {
		return new FormGroup<UnshareTargetFormProperties>({
			Id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Type: new FormControl<TargetType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DirectoryNotSharedException {
	}
	export interface DirectoryNotSharedExceptionFormProperties {
	}
	export function CreateDirectoryNotSharedExceptionFormGroup() {
		return new FormGroup<DirectoryNotSharedExceptionFormProperties>({
		});

	}


	/** The result of an UpdateConditionalForwarder request. */
	export interface UpdateConditionalForwarderResult {
	}

	/** The result of an UpdateConditionalForwarder request. */
	export interface UpdateConditionalForwarderResultFormProperties {
	}
	export function CreateUpdateConditionalForwarderResultFormGroup() {
		return new FormGroup<UpdateConditionalForwarderResultFormProperties>({
		});

	}


	/** Updates a conditional forwarder. */
	export interface UpdateConditionalForwarderRequest {

		/** Required */
		DirectoryId: string;

		/** Required */
		RemoteDomainName: string;

		/** Required */
		DnsIpAddrs: Array<string>;
	}

	/** Updates a conditional forwarder. */
	export interface UpdateConditionalForwarderRequestFormProperties {

		/** Required */
		DirectoryId: FormControl<string | null | undefined>,

		/** Required */
		RemoteDomainName: FormControl<string | null | undefined>,
	}
	export function CreateUpdateConditionalForwarderRequestFormGroup() {
		return new FormGroup<UpdateConditionalForwarderRequestFormProperties>({
			DirectoryId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			RemoteDomainName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UpdateDirectorySetupResult {
	}
	export interface UpdateDirectorySetupResultFormProperties {
	}
	export function CreateUpdateDirectorySetupResultFormGroup() {
		return new FormGroup<UpdateDirectorySetupResultFormProperties>({
		});

	}

	export interface UpdateDirectorySetupRequest {

		/** Required */
		DirectoryId: string;

		/** Required */
		UpdateType: UpdateType;
		OSUpdateSettings?: OSUpdateSettings;
		CreateSnapshotBeforeUpdate?: boolean | null;
	}
	export interface UpdateDirectorySetupRequestFormProperties {

		/** Required */
		DirectoryId: FormControl<string | null | undefined>,

		/** Required */
		UpdateType: FormControl<UpdateType | null | undefined>,
		CreateSnapshotBeforeUpdate: FormControl<boolean | null | undefined>,
	}
	export function CreateUpdateDirectorySetupRequestFormGroup() {
		return new FormGroup<UpdateDirectorySetupRequestFormProperties>({
			DirectoryId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			UpdateType: new FormControl<UpdateType | null | undefined>(undefined, [Validators.required]),
			CreateSnapshotBeforeUpdate: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface DirectoryInDesiredStateException {
	}
	export interface DirectoryInDesiredStateExceptionFormProperties {
	}
	export function CreateDirectoryInDesiredStateExceptionFormGroup() {
		return new FormGroup<DirectoryInDesiredStateExceptionFormProperties>({
		});

	}

	export interface UpdateNumberOfDomainControllersResult {
	}
	export interface UpdateNumberOfDomainControllersResultFormProperties {
	}
	export function CreateUpdateNumberOfDomainControllersResultFormGroup() {
		return new FormGroup<UpdateNumberOfDomainControllersResultFormProperties>({
		});

	}

	export interface UpdateNumberOfDomainControllersRequest {

		/** Required */
		DirectoryId: string;

		/** Required */
		DesiredNumber: number;
	}
	export interface UpdateNumberOfDomainControllersRequestFormProperties {

		/** Required */
		DirectoryId: FormControl<string | null | undefined>,

		/** Required */
		DesiredNumber: FormControl<number | null | undefined>,
	}
	export function CreateUpdateNumberOfDomainControllersRequestFormGroup() {
		return new FormGroup<UpdateNumberOfDomainControllersRequestFormProperties>({
			DirectoryId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			DesiredNumber: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DomainControllerLimitExceededException {
	}
	export interface DomainControllerLimitExceededExceptionFormProperties {
	}
	export function CreateDomainControllerLimitExceededExceptionFormGroup() {
		return new FormGroup<DomainControllerLimitExceededExceptionFormProperties>({
		});

	}


	/** Contains the results of the <a>UpdateRadius</a> operation. */
	export interface UpdateRadiusResult {
	}

	/** Contains the results of the <a>UpdateRadius</a> operation. */
	export interface UpdateRadiusResultFormProperties {
	}
	export function CreateUpdateRadiusResultFormGroup() {
		return new FormGroup<UpdateRadiusResultFormProperties>({
		});

	}


	/** Contains the inputs for the <a>UpdateRadius</a> operation. */
	export interface UpdateRadiusRequest {

		/** Required */
		DirectoryId: string;

		/** Required */
		RadiusSettings: RadiusSettings;
	}

	/** Contains the inputs for the <a>UpdateRadius</a> operation. */
	export interface UpdateRadiusRequestFormProperties {

		/** Required */
		DirectoryId: FormControl<string | null | undefined>,
	}
	export function CreateUpdateRadiusRequestFormGroup() {
		return new FormGroup<UpdateRadiusRequestFormProperties>({
			DirectoryId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UpdateSettingsResult {
		DirectoryId?: string;
	}
	export interface UpdateSettingsResultFormProperties {
		DirectoryId: FormControl<string | null | undefined>,
	}
	export function CreateUpdateSettingsResultFormGroup() {
		return new FormGroup<UpdateSettingsResultFormProperties>({
			DirectoryId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateSettingsRequest {

		/** Required */
		DirectoryId: string;

		/** Required */
		Settings: Array<Setting>;
	}
	export interface UpdateSettingsRequestFormProperties {

		/** Required */
		DirectoryId: FormControl<string | null | undefined>,
	}
	export function CreateUpdateSettingsRequestFormGroup() {
		return new FormGroup<UpdateSettingsRequestFormProperties>({
			DirectoryId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Contains information about the configurable settings for a directory. */
	export interface Setting {

		/** Required */
		Name: string;

		/** Required */
		Value: string;
	}

	/** Contains information about the configurable settings for a directory. */
	export interface SettingFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,

		/** Required */
		Value: FormControl<string | null | undefined>,
	}
	export function CreateSettingFormGroup() {
		return new FormGroup<SettingFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Value: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface IncompatibleSettingsException {
	}
	export interface IncompatibleSettingsExceptionFormProperties {
	}
	export function CreateIncompatibleSettingsExceptionFormGroup() {
		return new FormGroup<IncompatibleSettingsExceptionFormProperties>({
		});

	}

	export interface UnsupportedSettingsException {
	}
	export interface UnsupportedSettingsExceptionFormProperties {
	}
	export function CreateUnsupportedSettingsExceptionFormGroup() {
		return new FormGroup<UnsupportedSettingsExceptionFormProperties>({
		});

	}

	export interface UpdateTrustResult {

		/** The Amazon Web Services request identifier. */
		RequestId?: string | null;
		TrustId?: string;
	}
	export interface UpdateTrustResultFormProperties {

		/** The Amazon Web Services request identifier. */
		RequestId: FormControl<string | null | undefined>,
		TrustId: FormControl<string | null | undefined>,
	}
	export function CreateUpdateTrustResultFormGroup() {
		return new FormGroup<UpdateTrustResultFormProperties>({
			RequestId: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^([A-Fa-f0-9]{8}-[A-Fa-f0-9]{4}-[A-Fa-f0-9]{4}-[A-Fa-f0-9]{4}-[A-Fa-f0-9]{12})$')]),
			TrustId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateTrustRequest {

		/** Required */
		TrustId: string;
		SelectiveAuth?: SelectiveAuth;
	}
	export interface UpdateTrustRequestFormProperties {

		/** Required */
		TrustId: FormControl<string | null | undefined>,
		SelectiveAuth: FormControl<SelectiveAuth | null | undefined>,
	}
	export function CreateUpdateTrustRequestFormGroup() {
		return new FormGroup<UpdateTrustRequestFormProperties>({
			TrustId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			SelectiveAuth: new FormControl<SelectiveAuth | null | undefined>(undefined),
		});

	}


	/** Result of a VerifyTrust request. */
	export interface VerifyTrustResult {
		TrustId?: string;
	}

	/** Result of a VerifyTrust request. */
	export interface VerifyTrustResultFormProperties {
		TrustId: FormControl<string | null | undefined>,
	}
	export function CreateVerifyTrustResultFormGroup() {
		return new FormGroup<VerifyTrustResultFormProperties>({
			TrustId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Initiates the verification of an existing trust relationship between an Managed Microsoft AD directory and an external domain. */
	export interface VerifyTrustRequest {

		/** Required */
		TrustId: string;
	}

	/** Initiates the verification of an existing trust relationship between an Managed Microsoft AD directory and an external domain. */
	export interface VerifyTrustRequestFormProperties {

		/** Required */
		TrustId: FormControl<string | null | undefined>,
	}
	export function CreateVerifyTrustRequestFormGroup() {
		return new FormGroup<VerifyTrustRequestFormProperties>({
			TrustId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum ClientAuthenticationStatus { Enabled = 0, Disabled = 1 }

	export enum SnapshotStatus { Creating = 0, Completed = 1, Failed = 2 }

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Accepts a directory sharing request that was sent from the directory owner account.
		 * Post #X-Amz-Target=DirectoryService_20150416.AcceptSharedDirectory
		 * @return {AcceptSharedDirectoryResult} Success
		 */
		AcceptSharedDirectory(requestBody: AcceptSharedDirectoryRequest): Observable<AcceptSharedDirectoryResult> {
			return this.http.post<AcceptSharedDirectoryResult>(this.baseUri + '#X-Amz-Target=DirectoryService_20150416.AcceptSharedDirectory', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>If the DNS server for your self-managed domain uses a publicly addressable IP address, you must add a CIDR address block to correctly route traffic to and from your Microsoft AD on Amazon Web Services. <i>AddIpRoutes</i> adds this address block. You can also use <i>AddIpRoutes</i> to facilitate routing traffic that uses public IP ranges from your Microsoft AD on Amazon Web Services to a peer VPC. </p> <p>Before you call <i>AddIpRoutes</i>, ensure that all of the required permissions have been explicitly granted through a policy. For details about what permissions are required to run the <i>AddIpRoutes</i> operation, see <a href="http://docs.aws.amazon.com/directoryservice/latest/admin-guide/UsingWithDS_IAM_ResourcePermissions.html">Directory Service API Permissions: Actions, Resources, and Conditions Reference</a>.</p>
		 * Post #X-Amz-Target=DirectoryService_20150416.AddIpRoutes
		 * @return {AddIpRoutesResult} Success
		 */
		AddIpRoutes(requestBody: AddIpRoutesRequest): Observable<AddIpRoutesResult> {
			return this.http.post<AddIpRoutesResult>(this.baseUri + '#X-Amz-Target=DirectoryService_20150416.AddIpRoutes', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Adds two domain controllers in the specified Region for the specified directory.
		 * Post #X-Amz-Target=DirectoryService_20150416.AddRegion
		 * @return {AddRegionResult} Success
		 */
		AddRegion(requestBody: AddRegionRequest): Observable<AddRegionResult> {
			return this.http.post<AddRegionResult>(this.baseUri + '#X-Amz-Target=DirectoryService_20150416.AddRegion', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Adds or overwrites one or more tags for the specified directory. Each directory can have a maximum of 50 tags. Each tag consists of a key and optional value. Tag keys must be unique to each resource.
		 * Post #X-Amz-Target=DirectoryService_20150416.AddTagsToResource
		 * @return {AddTagsToResourceResult} Success
		 */
		AddTagsToResource(requestBody: AddTagsToResourceRequest): Observable<AddTagsToResourceResult> {
			return this.http.post<AddTagsToResourceResult>(this.baseUri + '#X-Amz-Target=DirectoryService_20150416.AddTagsToResource', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Cancels an in-progress schema extension to a Microsoft AD directory. Once a schema extension has started replicating to all domain controllers, the task can no longer be canceled. A schema extension can be canceled during any of the following states; <code>Initializing</code>, <code>CreatingSnapshot</code>, and <code>UpdatingSchema</code>.
		 * Post #X-Amz-Target=DirectoryService_20150416.CancelSchemaExtension
		 * @return {CancelSchemaExtensionResult} Success
		 */
		CancelSchemaExtension(requestBody: CancelSchemaExtensionRequest): Observable<CancelSchemaExtensionResult> {
			return this.http.post<CancelSchemaExtensionResult>(this.baseUri + '#X-Amz-Target=DirectoryService_20150416.CancelSchemaExtension', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Creates an AD Connector to connect to a self-managed directory.</p> <p>Before you call <code>ConnectDirectory</code>, ensure that all of the required permissions have been explicitly granted through a policy. For details about what permissions are required to run the <code>ConnectDirectory</code> operation, see <a href="http://docs.aws.amazon.com/directoryservice/latest/admin-guide/UsingWithDS_IAM_ResourcePermissions.html">Directory Service API Permissions: Actions, Resources, and Conditions Reference</a>.</p>
		 * Post #X-Amz-Target=DirectoryService_20150416.ConnectDirectory
		 * @return {ConnectDirectoryResult} Success
		 */
		ConnectDirectory(requestBody: ConnectDirectoryRequest): Observable<ConnectDirectoryResult> {
			return this.http.post<ConnectDirectoryResult>(this.baseUri + '#X-Amz-Target=DirectoryService_20150416.ConnectDirectory', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Creates an alias for a directory and assigns the alias to the directory. The alias is used to construct the access URL for the directory, such as <code>http://&lt;alias&gt;.awsapps.com</code>.</p> <important> <p>After an alias has been created, it cannot be deleted or reused, so this operation should only be used when absolutely necessary.</p> </important>
		 * Post #X-Amz-Target=DirectoryService_20150416.CreateAlias
		 * @return {CreateAliasResult} Success
		 */
		CreateAlias(requestBody: CreateAliasRequest): Observable<CreateAliasResult> {
			return this.http.post<CreateAliasResult>(this.baseUri + '#X-Amz-Target=DirectoryService_20150416.CreateAlias', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Creates an Active Directory computer object in the specified directory.
		 * Post #X-Amz-Target=DirectoryService_20150416.CreateComputer
		 * @return {CreateComputerResult} Success
		 */
		CreateComputer(requestBody: CreateComputerRequest): Observable<CreateComputerResult> {
			return this.http.post<CreateComputerResult>(this.baseUri + '#X-Amz-Target=DirectoryService_20150416.CreateComputer', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Creates a conditional forwarder associated with your Amazon Web Services directory. Conditional forwarders are required in order to set up a trust relationship with another domain. The conditional forwarder points to the trusted domain.
		 * Post #X-Amz-Target=DirectoryService_20150416.CreateConditionalForwarder
		 * @return {CreateConditionalForwarderResult} Success
		 */
		CreateConditionalForwarder(requestBody: CreateConditionalForwarderRequest): Observable<CreateConditionalForwarderResult> {
			return this.http.post<CreateConditionalForwarderResult>(this.baseUri + '#X-Amz-Target=DirectoryService_20150416.CreateConditionalForwarder', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Creates a Simple AD directory. For more information, see <a href="https://docs.aws.amazon.com/directoryservice/latest/admin-guide/directory_simple_ad.html">Simple Active Directory</a> in the <i>Directory Service Admin Guide</i>.</p> <p>Before you call <code>CreateDirectory</code>, ensure that all of the required permissions have been explicitly granted through a policy. For details about what permissions are required to run the <code>CreateDirectory</code> operation, see <a href="http://docs.aws.amazon.com/directoryservice/latest/admin-guide/UsingWithDS_IAM_ResourcePermissions.html">Directory Service API Permissions: Actions, Resources, and Conditions Reference</a>.</p>
		 * Post #X-Amz-Target=DirectoryService_20150416.CreateDirectory
		 * @return {CreateDirectoryResult} Success
		 */
		CreateDirectory(requestBody: CreateDirectoryRequest): Observable<CreateDirectoryResult> {
			return this.http.post<CreateDirectoryResult>(this.baseUri + '#X-Amz-Target=DirectoryService_20150416.CreateDirectory', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Creates a subscription to forward real-time Directory Service domain controller security logs to the specified Amazon CloudWatch log group in your Amazon Web Services account.
		 * Post #X-Amz-Target=DirectoryService_20150416.CreateLogSubscription
		 * @return {CreateLogSubscriptionResult} Success
		 */
		CreateLogSubscription(requestBody: CreateLogSubscriptionRequest): Observable<CreateLogSubscriptionResult> {
			return this.http.post<CreateLogSubscriptionResult>(this.baseUri + '#X-Amz-Target=DirectoryService_20150416.CreateLogSubscription', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Creates a Microsoft AD directory in the Amazon Web Services Cloud. For more information, see <a href="https://docs.aws.amazon.com/directoryservice/latest/admin-guide/directory_microsoft_ad.html">Managed Microsoft AD</a> in the <i>Directory Service Admin Guide</i>.</p> <p>Before you call <i>CreateMicrosoftAD</i>, ensure that all of the required permissions have been explicitly granted through a policy. For details about what permissions are required to run the <i>CreateMicrosoftAD</i> operation, see <a href="http://docs.aws.amazon.com/directoryservice/latest/admin-guide/UsingWithDS_IAM_ResourcePermissions.html">Directory Service API Permissions: Actions, Resources, and Conditions Reference</a>.</p>
		 * Post #X-Amz-Target=DirectoryService_20150416.CreateMicrosoftAD
		 * @return {CreateMicrosoftADResult} Success
		 */
		CreateMicrosoftAD(requestBody: CreateMicrosoftADRequest): Observable<CreateMicrosoftADResult> {
			return this.http.post<CreateMicrosoftADResult>(this.baseUri + '#X-Amz-Target=DirectoryService_20150416.CreateMicrosoftAD', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Creates a snapshot of a Simple AD or Microsoft AD directory in the Amazon Web Services cloud.</p> <note> <p>You cannot take snapshots of AD Connector directories.</p> </note>
		 * Post #X-Amz-Target=DirectoryService_20150416.CreateSnapshot
		 * @return {CreateSnapshotResult} Success
		 */
		CreateSnapshot(requestBody: CreateSnapshotRequest): Observable<CreateSnapshotResult> {
			return this.http.post<CreateSnapshotResult>(this.baseUri + '#X-Amz-Target=DirectoryService_20150416.CreateSnapshot', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Directory Service for Microsoft Active Directory allows you to configure trust relationships. For example, you can establish a trust between your Managed Microsoft AD directory, and your existing self-managed Microsoft Active Directory. This would allow you to provide users and groups access to resources in either domain, with a single set of credentials.</p> <p>This action initiates the creation of the Amazon Web Services side of a trust relationship between an Managed Microsoft AD directory and an external domain. You can create either a forest trust or an external trust.</p>
		 * Post #X-Amz-Target=DirectoryService_20150416.CreateTrust
		 * @return {CreateTrustResult} Success
		 */
		CreateTrust(requestBody: CreateTrustRequest): Observable<CreateTrustResult> {
			return this.http.post<CreateTrustResult>(this.baseUri + '#X-Amz-Target=DirectoryService_20150416.CreateTrust', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a conditional forwarder that has been set up for your Amazon Web Services directory.
		 * Post #X-Amz-Target=DirectoryService_20150416.DeleteConditionalForwarder
		 * @return {DeleteConditionalForwarderResult} Success
		 */
		DeleteConditionalForwarder(requestBody: DeleteConditionalForwarderRequest): Observable<DeleteConditionalForwarderResult> {
			return this.http.post<DeleteConditionalForwarderResult>(this.baseUri + '#X-Amz-Target=DirectoryService_20150416.DeleteConditionalForwarder', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Deletes an Directory Service directory.</p> <p>Before you call <code>DeleteDirectory</code>, ensure that all of the required permissions have been explicitly granted through a policy. For details about what permissions are required to run the <code>DeleteDirectory</code> operation, see <a href="http://docs.aws.amazon.com/directoryservice/latest/admin-guide/UsingWithDS_IAM_ResourcePermissions.html">Directory Service API Permissions: Actions, Resources, and Conditions Reference</a>.</p>
		 * Post #X-Amz-Target=DirectoryService_20150416.DeleteDirectory
		 * @return {DeleteDirectoryResult} Success
		 */
		DeleteDirectory(requestBody: DeleteDirectoryRequest): Observable<DeleteDirectoryResult> {
			return this.http.post<DeleteDirectoryResult>(this.baseUri + '#X-Amz-Target=DirectoryService_20150416.DeleteDirectory', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes the specified log subscription.
		 * Post #X-Amz-Target=DirectoryService_20150416.DeleteLogSubscription
		 * @return {DeleteLogSubscriptionResult} Success
		 */
		DeleteLogSubscription(requestBody: DeleteLogSubscriptionRequest): Observable<DeleteLogSubscriptionResult> {
			return this.http.post<DeleteLogSubscriptionResult>(this.baseUri + '#X-Amz-Target=DirectoryService_20150416.DeleteLogSubscription', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a directory snapshot.
		 * Post #X-Amz-Target=DirectoryService_20150416.DeleteSnapshot
		 * @return {DeleteSnapshotResult} Success
		 */
		DeleteSnapshot(requestBody: DeleteSnapshotRequest): Observable<DeleteSnapshotResult> {
			return this.http.post<DeleteSnapshotResult>(this.baseUri + '#X-Amz-Target=DirectoryService_20150416.DeleteSnapshot', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes an existing trust relationship between your Managed Microsoft AD directory and an external domain.
		 * Post #X-Amz-Target=DirectoryService_20150416.DeleteTrust
		 * @return {DeleteTrustResult} Success
		 */
		DeleteTrust(requestBody: DeleteTrustRequest): Observable<DeleteTrustResult> {
			return this.http.post<DeleteTrustResult>(this.baseUri + '#X-Amz-Target=DirectoryService_20150416.DeleteTrust', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes from the system the certificate that was registered for secure LDAP or client certificate authentication.
		 * Post #X-Amz-Target=DirectoryService_20150416.DeregisterCertificate
		 * @return {DeregisterCertificateResult} Success
		 */
		DeregisterCertificate(requestBody: DeregisterCertificateRequest): Observable<DeregisterCertificateResult> {
			return this.http.post<DeregisterCertificateResult>(this.baseUri + '#X-Amz-Target=DirectoryService_20150416.DeregisterCertificate', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Removes the specified directory as a publisher to the specified Amazon SNS topic.
		 * Post #X-Amz-Target=DirectoryService_20150416.DeregisterEventTopic
		 * @return {DeregisterEventTopicResult} Success
		 */
		DeregisterEventTopic(requestBody: DeregisterEventTopicRequest): Observable<DeregisterEventTopicResult> {
			return this.http.post<DeregisterEventTopicResult>(this.baseUri + '#X-Amz-Target=DirectoryService_20150416.DeregisterEventTopic', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Displays information about the certificate registered for secure LDAP or client certificate authentication.
		 * Post #X-Amz-Target=DirectoryService_20150416.DescribeCertificate
		 * @return {DescribeCertificateResult} Success
		 */
		DescribeCertificate(requestBody: DescribeCertificateRequest): Observable<DescribeCertificateResult> {
			return this.http.post<DescribeCertificateResult>(this.baseUri + '#X-Amz-Target=DirectoryService_20150416.DescribeCertificate', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves information about the type of client authentication for the specified directory, if the type is specified. If no type is specified, information about all client authentication types that are supported for the specified directory is retrieved. Currently, only <code>SmartCard</code> is supported.
		 * Post #X-Amz-Target=DirectoryService_20150416.DescribeClientAuthenticationSettings
		 * @param {string} Limit Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {DescribeClientAuthenticationSettingsResult} Success
		 */
		DescribeClientAuthenticationSettings(Limit: string | null | undefined, NextToken: string | null | undefined, requestBody: DescribeClientAuthenticationSettingsRequest): Observable<DescribeClientAuthenticationSettingsResult> {
			return this.http.post<DescribeClientAuthenticationSettingsResult>(this.baseUri + '#X-Amz-Target=DirectoryService_20150416.DescribeClientAuthenticationSettings?Limit=' + (Limit == null ? '' : encodeURIComponent(Limit)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Obtains information about the conditional forwarders for this account.</p> <p>If no input parameters are provided for RemoteDomainNames, this request describes all conditional forwarders for the specified directory ID.</p>
		 * Post #X-Amz-Target=DirectoryService_20150416.DescribeConditionalForwarders
		 * @return {DescribeConditionalForwardersResult} Success
		 */
		DescribeConditionalForwarders(requestBody: DescribeConditionalForwardersRequest): Observable<DescribeConditionalForwardersResult> {
			return this.http.post<DescribeConditionalForwardersResult>(this.baseUri + '#X-Amz-Target=DirectoryService_20150416.DescribeConditionalForwarders', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Obtains information about the directories that belong to this account.</p> <p>You can retrieve information about specific directories by passing the directory identifiers in the <code>DirectoryIds</code> parameter. Otherwise, all directories that belong to the current account are returned.</p> <p>This operation supports pagination with the use of the <code>NextToken</code> request and response parameters. If more results are available, the <code>DescribeDirectoriesResult.NextToken</code> member contains a token that you pass in the next call to <a>DescribeDirectories</a> to retrieve the next set of items.</p> <p>You can also specify a maximum number of return results with the <code>Limit</code> parameter.</p>
		 * Post #X-Amz-Target=DirectoryService_20150416.DescribeDirectories
		 * @param {string} Limit Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {DescribeDirectoriesResult} Success
		 */
		DescribeDirectories(Limit: string | null | undefined, NextToken: string | null | undefined, requestBody: DescribeDirectoriesRequest): Observable<DescribeDirectoriesResult> {
			return this.http.post<DescribeDirectoriesResult>(this.baseUri + '#X-Amz-Target=DirectoryService_20150416.DescribeDirectories?Limit=' + (Limit == null ? '' : encodeURIComponent(Limit)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Provides information about any domain controllers in your directory.
		 * Post #X-Amz-Target=DirectoryService_20150416.DescribeDomainControllers
		 * @param {string} Limit Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {DescribeDomainControllersResult} Success
		 */
		DescribeDomainControllers(Limit: string | null | undefined, NextToken: string | null | undefined, requestBody: DescribeDomainControllersRequest): Observable<DescribeDomainControllersResult> {
			return this.http.post<DescribeDomainControllersResult>(this.baseUri + '#X-Amz-Target=DirectoryService_20150416.DescribeDomainControllers?Limit=' + (Limit == null ? '' : encodeURIComponent(Limit)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Obtains information about which Amazon SNS topics receive status messages from the specified directory.</p> <p>If no input parameters are provided, such as DirectoryId or TopicName, this request describes all of the associations in the account.</p>
		 * Post #X-Amz-Target=DirectoryService_20150416.DescribeEventTopics
		 * @return {DescribeEventTopicsResult} Success
		 */
		DescribeEventTopics(requestBody: DescribeEventTopicsRequest): Observable<DescribeEventTopicsResult> {
			return this.http.post<DescribeEventTopicsResult>(this.baseUri + '#X-Amz-Target=DirectoryService_20150416.DescribeEventTopics', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Describes the status of LDAP security for the specified directory.
		 * Post #X-Amz-Target=DirectoryService_20150416.DescribeLDAPSSettings
		 * @param {string} Limit Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {DescribeLDAPSSettingsResult} Success
		 */
		DescribeLDAPSSettings(Limit: string | null | undefined, NextToken: string | null | undefined, requestBody: DescribeLDAPSSettingsRequest): Observable<DescribeLDAPSSettingsResult> {
			return this.http.post<DescribeLDAPSSettingsResult>(this.baseUri + '#X-Amz-Target=DirectoryService_20150416.DescribeLDAPSSettings?Limit=' + (Limit == null ? '' : encodeURIComponent(Limit)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Provides information about the Regions that are configured for multi-Region replication.
		 * Post #X-Amz-Target=DirectoryService_20150416.DescribeRegions
		 * @param {string} NextToken Pagination token
		 * @return {DescribeRegionsResult} Success
		 */
		DescribeRegions(NextToken: string | null | undefined, requestBody: DescribeRegionsRequest): Observable<DescribeRegionsResult> {
			return this.http.post<DescribeRegionsResult>(this.baseUri + '#X-Amz-Target=DirectoryService_20150416.DescribeRegions?NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves information about the configurable settings for the specified directory.
		 * Post #X-Amz-Target=DirectoryService_20150416.DescribeSettings
		 * @return {DescribeSettingsResult} Success
		 */
		DescribeSettings(requestBody: DescribeSettingsRequest): Observable<DescribeSettingsResult> {
			return this.http.post<DescribeSettingsResult>(this.baseUri + '#X-Amz-Target=DirectoryService_20150416.DescribeSettings', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns the shared directories in your account.
		 * Post #X-Amz-Target=DirectoryService_20150416.DescribeSharedDirectories
		 * @param {string} Limit Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {DescribeSharedDirectoriesResult} Success
		 */
		DescribeSharedDirectories(Limit: string | null | undefined, NextToken: string | null | undefined, requestBody: DescribeSharedDirectoriesRequest): Observable<DescribeSharedDirectoriesResult> {
			return this.http.post<DescribeSharedDirectoriesResult>(this.baseUri + '#X-Amz-Target=DirectoryService_20150416.DescribeSharedDirectories?Limit=' + (Limit == null ? '' : encodeURIComponent(Limit)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Obtains information about the directory snapshots that belong to this account.</p> <p>This operation supports pagination with the use of the <i>NextToken</i> request and response parameters. If more results are available, the <i>DescribeSnapshots.NextToken</i> member contains a token that you pass in the next call to <a>DescribeSnapshots</a> to retrieve the next set of items.</p> <p>You can also specify a maximum number of return results with the <i>Limit</i> parameter.</p>
		 * Post #X-Amz-Target=DirectoryService_20150416.DescribeSnapshots
		 * @param {string} Limit Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {DescribeSnapshotsResult} Success
		 */
		DescribeSnapshots(Limit: string | null | undefined, NextToken: string | null | undefined, requestBody: DescribeSnapshotsRequest): Observable<DescribeSnapshotsResult> {
			return this.http.post<DescribeSnapshotsResult>(this.baseUri + '#X-Amz-Target=DirectoryService_20150416.DescribeSnapshots?Limit=' + (Limit == null ? '' : encodeURIComponent(Limit)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Obtains information about the trust relationships for this account.</p> <p>If no input parameters are provided, such as DirectoryId or TrustIds, this request describes all the trust relationships belonging to the account.</p>
		 * Post #X-Amz-Target=DirectoryService_20150416.DescribeTrusts
		 * @param {string} Limit Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {DescribeTrustsResult} Success
		 */
		DescribeTrusts(Limit: string | null | undefined, NextToken: string | null | undefined, requestBody: DescribeTrustsRequest): Observable<DescribeTrustsResult> {
			return this.http.post<DescribeTrustsResult>(this.baseUri + '#X-Amz-Target=DirectoryService_20150416.DescribeTrusts?Limit=' + (Limit == null ? '' : encodeURIComponent(Limit)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Describes the updates of a directory for a particular update type.
		 * Post #X-Amz-Target=DirectoryService_20150416.DescribeUpdateDirectory
		 * @param {string} NextToken Pagination token
		 * @return {DescribeUpdateDirectoryResult} Success
		 */
		DescribeUpdateDirectory(NextToken: string | null | undefined, requestBody: DescribeUpdateDirectoryRequest): Observable<DescribeUpdateDirectoryResult> {
			return this.http.post<DescribeUpdateDirectoryResult>(this.baseUri + '#X-Amz-Target=DirectoryService_20150416.DescribeUpdateDirectory?NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Disables alternative client authentication methods for the specified directory.
		 * Post #X-Amz-Target=DirectoryService_20150416.DisableClientAuthentication
		 * @return {DisableClientAuthenticationResult} Success
		 */
		DisableClientAuthentication(requestBody: DisableClientAuthenticationRequest): Observable<DisableClientAuthenticationResult> {
			return this.http.post<DisableClientAuthenticationResult>(this.baseUri + '#X-Amz-Target=DirectoryService_20150416.DisableClientAuthentication', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deactivates LDAP secure calls for the specified directory.
		 * Post #X-Amz-Target=DirectoryService_20150416.DisableLDAPS
		 * @return {DisableLDAPSResult} Success
		 */
		DisableLDAPS(requestBody: DisableLDAPSRequest): Observable<DisableLDAPSResult> {
			return this.http.post<DisableLDAPSResult>(this.baseUri + '#X-Amz-Target=DirectoryService_20150416.DisableLDAPS', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Disables multi-factor authentication (MFA) with the Remote Authentication Dial In User Service (RADIUS) server for an AD Connector or Microsoft AD directory.
		 * Post #X-Amz-Target=DirectoryService_20150416.DisableRadius
		 * @return {DisableRadiusResult} Success
		 */
		DisableRadius(requestBody: DisableRadiusRequest): Observable<DisableRadiusResult> {
			return this.http.post<DisableRadiusResult>(this.baseUri + '#X-Amz-Target=DirectoryService_20150416.DisableRadius', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Disables single-sign on for a directory.
		 * Post #X-Amz-Target=DirectoryService_20150416.DisableSso
		 * @return {DisableSsoResult} Success
		 */
		DisableSso(requestBody: DisableSsoRequest): Observable<DisableSsoResult> {
			return this.http.post<DisableSsoResult>(this.baseUri + '#X-Amz-Target=DirectoryService_20150416.DisableSso', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Enables alternative client authentication methods for the specified directory.
		 * Post #X-Amz-Target=DirectoryService_20150416.EnableClientAuthentication
		 * @return {EnableClientAuthenticationResult} Success
		 */
		EnableClientAuthentication(requestBody: EnableClientAuthenticationRequest): Observable<EnableClientAuthenticationResult> {
			return this.http.post<EnableClientAuthenticationResult>(this.baseUri + '#X-Amz-Target=DirectoryService_20150416.EnableClientAuthentication', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Activates the switch for the specific directory to always use LDAP secure calls.
		 * Post #X-Amz-Target=DirectoryService_20150416.EnableLDAPS
		 * @return {EnableLDAPSResult} Success
		 */
		EnableLDAPS(requestBody: EnableLDAPSRequest): Observable<EnableLDAPSResult> {
			return this.http.post<EnableLDAPSResult>(this.baseUri + '#X-Amz-Target=DirectoryService_20150416.EnableLDAPS', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Enables multi-factor authentication (MFA) with the Remote Authentication Dial In User Service (RADIUS) server for an AD Connector or Microsoft AD directory.
		 * Post #X-Amz-Target=DirectoryService_20150416.EnableRadius
		 * @return {EnableRadiusResult} Success
		 */
		EnableRadius(requestBody: EnableRadiusRequest): Observable<EnableRadiusResult> {
			return this.http.post<EnableRadiusResult>(this.baseUri + '#X-Amz-Target=DirectoryService_20150416.EnableRadius', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Enables single sign-on for a directory. Single sign-on allows users in your directory to access certain Amazon Web Services services from a computer joined to the directory without having to enter their credentials separately.
		 * Post #X-Amz-Target=DirectoryService_20150416.EnableSso
		 * @return {EnableSsoResult} Success
		 */
		EnableSso(requestBody: EnableSsoRequest): Observable<EnableSsoResult> {
			return this.http.post<EnableSsoResult>(this.baseUri + '#X-Amz-Target=DirectoryService_20150416.EnableSso', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Obtains directory limit information for the current Region.
		 * Post #X-Amz-Target=DirectoryService_20150416.GetDirectoryLimits
		 * @return {GetDirectoryLimitsResult} Success
		 */
		GetDirectoryLimits(requestBody: GetDirectoryLimitsRequest): Observable<GetDirectoryLimitsResult> {
			return this.http.post<GetDirectoryLimitsResult>(this.baseUri + '#X-Amz-Target=DirectoryService_20150416.GetDirectoryLimits', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Obtains the manual snapshot limits for a directory.
		 * Post #X-Amz-Target=DirectoryService_20150416.GetSnapshotLimits
		 * @return {GetSnapshotLimitsResult} Success
		 */
		GetSnapshotLimits(requestBody: GetSnapshotLimitsRequest): Observable<GetSnapshotLimitsResult> {
			return this.http.post<GetSnapshotLimitsResult>(this.baseUri + '#X-Amz-Target=DirectoryService_20150416.GetSnapshotLimits', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * For the specified directory, lists all the certificates registered for a secure LDAP or client certificate authentication.
		 * Post #X-Amz-Target=DirectoryService_20150416.ListCertificates
		 * @param {string} Limit Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListCertificatesResult} Success
		 */
		ListCertificates(Limit: string | null | undefined, NextToken: string | null | undefined, requestBody: ListCertificatesRequest): Observable<ListCertificatesResult> {
			return this.http.post<ListCertificatesResult>(this.baseUri + '#X-Amz-Target=DirectoryService_20150416.ListCertificates?Limit=' + (Limit == null ? '' : encodeURIComponent(Limit)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists the address blocks that you have added to a directory.
		 * Post #X-Amz-Target=DirectoryService_20150416.ListIpRoutes
		 * @param {string} Limit Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListIpRoutesResult} Success
		 */
		ListIpRoutes(Limit: string | null | undefined, NextToken: string | null | undefined, requestBody: ListIpRoutesRequest): Observable<ListIpRoutesResult> {
			return this.http.post<ListIpRoutesResult>(this.baseUri + '#X-Amz-Target=DirectoryService_20150416.ListIpRoutes?Limit=' + (Limit == null ? '' : encodeURIComponent(Limit)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists the active log subscriptions for the Amazon Web Services account.
		 * Post #X-Amz-Target=DirectoryService_20150416.ListLogSubscriptions
		 * @param {string} Limit Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListLogSubscriptionsResult} Success
		 */
		ListLogSubscriptions(Limit: string | null | undefined, NextToken: string | null | undefined, requestBody: ListLogSubscriptionsRequest): Observable<ListLogSubscriptionsResult> {
			return this.http.post<ListLogSubscriptionsResult>(this.baseUri + '#X-Amz-Target=DirectoryService_20150416.ListLogSubscriptions?Limit=' + (Limit == null ? '' : encodeURIComponent(Limit)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists all schema extensions applied to a Microsoft AD Directory.
		 * Post #X-Amz-Target=DirectoryService_20150416.ListSchemaExtensions
		 * @param {string} Limit Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListSchemaExtensionsResult} Success
		 */
		ListSchemaExtensions(Limit: string | null | undefined, NextToken: string | null | undefined, requestBody: ListSchemaExtensionsRequest): Observable<ListSchemaExtensionsResult> {
			return this.http.post<ListSchemaExtensionsResult>(this.baseUri + '#X-Amz-Target=DirectoryService_20150416.ListSchemaExtensions?Limit=' + (Limit == null ? '' : encodeURIComponent(Limit)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists all tags on a directory.
		 * Post #X-Amz-Target=DirectoryService_20150416.ListTagsForResource
		 * @param {string} Limit Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListTagsForResourceResult} Success
		 */
		ListTagsForResource(Limit: string | null | undefined, NextToken: string | null | undefined, requestBody: ListTagsForResourceRequest): Observable<ListTagsForResourceResult> {
			return this.http.post<ListTagsForResourceResult>(this.baseUri + '#X-Amz-Target=DirectoryService_20150416.ListTagsForResource?Limit=' + (Limit == null ? '' : encodeURIComponent(Limit)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Registers a certificate for a secure LDAP or client certificate authentication.
		 * Post #X-Amz-Target=DirectoryService_20150416.RegisterCertificate
		 * @return {RegisterCertificateResult} Success
		 */
		RegisterCertificate(requestBody: RegisterCertificateRequest): Observable<RegisterCertificateResult> {
			return this.http.post<RegisterCertificateResult>(this.baseUri + '#X-Amz-Target=DirectoryService_20150416.RegisterCertificate', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Associates a directory with an Amazon SNS topic. This establishes the directory as a publisher to the specified Amazon SNS topic. You can then receive email or text (SMS) messages when the status of your directory changes. You get notified if your directory goes from an Active status to an Impaired or Inoperable status. You also receive a notification when the directory returns to an Active status.
		 * Post #X-Amz-Target=DirectoryService_20150416.RegisterEventTopic
		 * @return {RegisterEventTopicResult} Success
		 */
		RegisterEventTopic(requestBody: RegisterEventTopicRequest): Observable<RegisterEventTopicResult> {
			return this.http.post<RegisterEventTopicResult>(this.baseUri + '#X-Amz-Target=DirectoryService_20150416.RegisterEventTopic', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Rejects a directory sharing request that was sent from the directory owner account.
		 * Post #X-Amz-Target=DirectoryService_20150416.RejectSharedDirectory
		 * @return {RejectSharedDirectoryResult} Success
		 */
		RejectSharedDirectory(requestBody: RejectSharedDirectoryRequest): Observable<RejectSharedDirectoryResult> {
			return this.http.post<RejectSharedDirectoryResult>(this.baseUri + '#X-Amz-Target=DirectoryService_20150416.RejectSharedDirectory', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Removes IP address blocks from a directory.
		 * Post #X-Amz-Target=DirectoryService_20150416.RemoveIpRoutes
		 * @return {RemoveIpRoutesResult} Success
		 */
		RemoveIpRoutes(requestBody: RemoveIpRoutesRequest): Observable<RemoveIpRoutesResult> {
			return this.http.post<RemoveIpRoutesResult>(this.baseUri + '#X-Amz-Target=DirectoryService_20150416.RemoveIpRoutes', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Stops all replication and removes the domain controllers from the specified Region. You cannot remove the primary Region with this operation. Instead, use the <code>DeleteDirectory</code> API.
		 * Post #X-Amz-Target=DirectoryService_20150416.RemoveRegion
		 * @return {RemoveRegionResult} Success
		 */
		RemoveRegion(requestBody: RemoveRegionRequest): Observable<RemoveRegionResult> {
			return this.http.post<RemoveRegionResult>(this.baseUri + '#X-Amz-Target=DirectoryService_20150416.RemoveRegion', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Removes tags from a directory.
		 * Post #X-Amz-Target=DirectoryService_20150416.RemoveTagsFromResource
		 * @return {RemoveTagsFromResourceResult} Success
		 */
		RemoveTagsFromResource(requestBody: RemoveTagsFromResourceRequest): Observable<RemoveTagsFromResourceResult> {
			return this.http.post<RemoveTagsFromResourceResult>(this.baseUri + '#X-Amz-Target=DirectoryService_20150416.RemoveTagsFromResource', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Resets the password for any user in your Managed Microsoft AD or Simple AD directory.</p> <p>You can reset the password for any user in your directory with the following exceptions:</p> <ul> <li> <p>For Simple AD, you cannot reset the password for any user that is a member of either the <b>Domain Admins</b> or <b>Enterprise Admins</b> group except for the administrator user.</p> </li> <li> <p>For Managed Microsoft AD, you can only reset the password for a user that is in an OU based off of the NetBIOS name that you typed when you created your directory. For example, you cannot reset the password for a user in the <b>Amazon Web Services Reserved</b> OU. For more information about the OU structure for an Managed Microsoft AD directory, see <a href="https://docs.aws.amazon.com/directoryservice/latest/admin-guide/ms_ad_getting_started_what_gets_created.html">What Gets Created</a> in the <i>Directory Service Administration Guide</i>.</p> </li> </ul>
		 * Post #X-Amz-Target=DirectoryService_20150416.ResetUserPassword
		 * @return {ResetUserPasswordResult} Success
		 */
		ResetUserPassword(requestBody: ResetUserPasswordRequest): Observable<ResetUserPasswordResult> {
			return this.http.post<ResetUserPasswordResult>(this.baseUri + '#X-Amz-Target=DirectoryService_20150416.ResetUserPassword', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Restores a directory using an existing directory snapshot.</p> <p>When you restore a directory from a snapshot, any changes made to the directory after the snapshot date are overwritten.</p> <p>This action returns as soon as the restore operation is initiated. You can monitor the progress of the restore operation by calling the <a>DescribeDirectories</a> operation with the directory identifier. When the <b>DirectoryDescription.Stage</b> value changes to <code>Active</code>, the restore operation is complete.</p>
		 * Post #X-Amz-Target=DirectoryService_20150416.RestoreFromSnapshot
		 * @return {RestoreFromSnapshotResult} Success
		 */
		RestoreFromSnapshot(requestBody: RestoreFromSnapshotRequest): Observable<RestoreFromSnapshotResult> {
			return this.http.post<RestoreFromSnapshotResult>(this.baseUri + '#X-Amz-Target=DirectoryService_20150416.RestoreFromSnapshot', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Shares a specified directory (<code>DirectoryId</code>) in your Amazon Web Services account (directory owner) with another Amazon Web Services account (directory consumer). With this operation you can use your directory from any Amazon Web Services account and from any Amazon VPC within an Amazon Web Services Region.</p> <p>When you share your Managed Microsoft AD directory, Directory Service creates a shared directory in the directory consumer account. This shared directory contains the metadata to provide access to the directory within the directory owner account. The shared directory is visible in all VPCs in the directory consumer account.</p> <p>The <code>ShareMethod</code> parameter determines whether the specified directory can be shared between Amazon Web Services accounts inside the same Amazon Web Services organization (<code>ORGANIZATIONS</code>). It also determines whether you can share the directory with any other Amazon Web Services account either inside or outside of the organization (<code>HANDSHAKE</code>).</p> <p>The <code>ShareNotes</code> parameter is only used when <code>HANDSHAKE</code> is called, which sends a directory sharing request to the directory consumer. </p>
		 * Post #X-Amz-Target=DirectoryService_20150416.ShareDirectory
		 * @return {ShareDirectoryResult} Success
		 */
		ShareDirectory(requestBody: ShareDirectoryRequest): Observable<ShareDirectoryResult> {
			return this.http.post<ShareDirectoryResult>(this.baseUri + '#X-Amz-Target=DirectoryService_20150416.ShareDirectory', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Applies a schema extension to a Microsoft AD directory.
		 * Post #X-Amz-Target=DirectoryService_20150416.StartSchemaExtension
		 * @return {StartSchemaExtensionResult} Success
		 */
		StartSchemaExtension(requestBody: StartSchemaExtensionRequest): Observable<StartSchemaExtensionResult> {
			return this.http.post<StartSchemaExtensionResult>(this.baseUri + '#X-Amz-Target=DirectoryService_20150416.StartSchemaExtension', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Stops the directory sharing between the directory owner and consumer accounts.
		 * Post #X-Amz-Target=DirectoryService_20150416.UnshareDirectory
		 * @return {UnshareDirectoryResult} Success
		 */
		UnshareDirectory(requestBody: UnshareDirectoryRequest): Observable<UnshareDirectoryResult> {
			return this.http.post<UnshareDirectoryResult>(this.baseUri + '#X-Amz-Target=DirectoryService_20150416.UnshareDirectory', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Updates a conditional forwarder that has been set up for your Amazon Web Services directory.
		 * Post #X-Amz-Target=DirectoryService_20150416.UpdateConditionalForwarder
		 * @return {UpdateConditionalForwarderResult} Success
		 */
		UpdateConditionalForwarder(requestBody: UpdateConditionalForwarderRequest): Observable<UpdateConditionalForwarderResult> {
			return this.http.post<UpdateConditionalForwarderResult>(this.baseUri + '#X-Amz-Target=DirectoryService_20150416.UpdateConditionalForwarder', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Updates the directory for a particular update type.
		 * Post #X-Amz-Target=DirectoryService_20150416.UpdateDirectorySetup
		 * @return {UpdateDirectorySetupResult} Success
		 */
		UpdateDirectorySetup(requestBody: UpdateDirectorySetupRequest): Observable<UpdateDirectorySetupResult> {
			return this.http.post<UpdateDirectorySetupResult>(this.baseUri + '#X-Amz-Target=DirectoryService_20150416.UpdateDirectorySetup', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Adds or removes domain controllers to or from the directory. Based on the difference between current value and new value (provided through this API call), domain controllers will be added or removed. It may take up to 45 minutes for any new domain controllers to become fully active once the requested number of domain controllers is updated. During this time, you cannot make another update request.
		 * Post #X-Amz-Target=DirectoryService_20150416.UpdateNumberOfDomainControllers
		 * @return {UpdateNumberOfDomainControllersResult} Success
		 */
		UpdateNumberOfDomainControllers(requestBody: UpdateNumberOfDomainControllersRequest): Observable<UpdateNumberOfDomainControllersResult> {
			return this.http.post<UpdateNumberOfDomainControllersResult>(this.baseUri + '#X-Amz-Target=DirectoryService_20150416.UpdateNumberOfDomainControllers', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Updates the Remote Authentication Dial In User Service (RADIUS) server information for an AD Connector or Microsoft AD directory.
		 * Post #X-Amz-Target=DirectoryService_20150416.UpdateRadius
		 * @return {UpdateRadiusResult} Success
		 */
		UpdateRadius(requestBody: UpdateRadiusRequest): Observable<UpdateRadiusResult> {
			return this.http.post<UpdateRadiusResult>(this.baseUri + '#X-Amz-Target=DirectoryService_20150416.UpdateRadius', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Updates the configurable settings for the specified directory.
		 * Post #X-Amz-Target=DirectoryService_20150416.UpdateSettings
		 * @return {UpdateSettingsResult} Success
		 */
		UpdateSettings(requestBody: UpdateSettingsRequest): Observable<UpdateSettingsResult> {
			return this.http.post<UpdateSettingsResult>(this.baseUri + '#X-Amz-Target=DirectoryService_20150416.UpdateSettings', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Updates the trust that has been set up between your Managed Microsoft AD directory and an self-managed Active Directory.
		 * Post #X-Amz-Target=DirectoryService_20150416.UpdateTrust
		 * @return {UpdateTrustResult} Success
		 */
		UpdateTrust(requestBody: UpdateTrustRequest): Observable<UpdateTrustResult> {
			return this.http.post<UpdateTrustResult>(this.baseUri + '#X-Amz-Target=DirectoryService_20150416.UpdateTrust', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Directory Service for Microsoft Active Directory allows you to configure and verify trust relationships.</p> <p>This action verifies a trust relationship between your Managed Microsoft AD directory and an external domain.</p>
		 * Post #X-Amz-Target=DirectoryService_20150416.VerifyTrust
		 * @return {VerifyTrustResult} Success
		 */
		VerifyTrust(requestBody: VerifyTrustRequest): Observable<VerifyTrustResult> {
			return this.http.post<VerifyTrustResult>(this.baseUri + '#X-Amz-Target=DirectoryService_20150416.VerifyTrust', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

	export enum AcceptSharedDirectoryX_Amz_Target { 'DirectoryService_20150416.AcceptSharedDirectory' = 0 }

	export enum AddIpRoutesX_Amz_Target { 'DirectoryService_20150416.AddIpRoutes' = 0 }

	export enum AddRegionX_Amz_Target { 'DirectoryService_20150416.AddRegion' = 0 }

	export enum AddTagsToResourceX_Amz_Target { 'DirectoryService_20150416.AddTagsToResource' = 0 }

	export enum CancelSchemaExtensionX_Amz_Target { 'DirectoryService_20150416.CancelSchemaExtension' = 0 }

	export enum ConnectDirectoryX_Amz_Target { 'DirectoryService_20150416.ConnectDirectory' = 0 }

	export enum CreateAliasX_Amz_Target { 'DirectoryService_20150416.CreateAlias' = 0 }

	export enum CreateComputerX_Amz_Target { 'DirectoryService_20150416.CreateComputer' = 0 }

	export enum CreateConditionalForwarderX_Amz_Target { 'DirectoryService_20150416.CreateConditionalForwarder' = 0 }

	export enum CreateDirectoryX_Amz_Target { 'DirectoryService_20150416.CreateDirectory' = 0 }

	export enum CreateLogSubscriptionX_Amz_Target { 'DirectoryService_20150416.CreateLogSubscription' = 0 }

	export enum CreateMicrosoftADX_Amz_Target { 'DirectoryService_20150416.CreateMicrosoftAD' = 0 }

	export enum CreateSnapshotX_Amz_Target { 'DirectoryService_20150416.CreateSnapshot' = 0 }

	export enum CreateTrustX_Amz_Target { 'DirectoryService_20150416.CreateTrust' = 0 }

	export enum DeleteConditionalForwarderX_Amz_Target { 'DirectoryService_20150416.DeleteConditionalForwarder' = 0 }

	export enum DeleteDirectoryX_Amz_Target { 'DirectoryService_20150416.DeleteDirectory' = 0 }

	export enum DeleteLogSubscriptionX_Amz_Target { 'DirectoryService_20150416.DeleteLogSubscription' = 0 }

	export enum DeleteSnapshotX_Amz_Target { 'DirectoryService_20150416.DeleteSnapshot' = 0 }

	export enum DeleteTrustX_Amz_Target { 'DirectoryService_20150416.DeleteTrust' = 0 }

	export enum DeregisterCertificateX_Amz_Target { 'DirectoryService_20150416.DeregisterCertificate' = 0 }

	export enum DeregisterEventTopicX_Amz_Target { 'DirectoryService_20150416.DeregisterEventTopic' = 0 }

	export enum DescribeCertificateX_Amz_Target { 'DirectoryService_20150416.DescribeCertificate' = 0 }

	export enum DescribeClientAuthenticationSettingsX_Amz_Target { 'DirectoryService_20150416.DescribeClientAuthenticationSettings' = 0 }

	export enum DescribeConditionalForwardersX_Amz_Target { 'DirectoryService_20150416.DescribeConditionalForwarders' = 0 }

	export enum DescribeDirectoriesX_Amz_Target { 'DirectoryService_20150416.DescribeDirectories' = 0 }

	export enum DescribeDomainControllersX_Amz_Target { 'DirectoryService_20150416.DescribeDomainControllers' = 0 }

	export enum DescribeEventTopicsX_Amz_Target { 'DirectoryService_20150416.DescribeEventTopics' = 0 }

	export enum DescribeLDAPSSettingsX_Amz_Target { 'DirectoryService_20150416.DescribeLDAPSSettings' = 0 }

	export enum DescribeRegionsX_Amz_Target { 'DirectoryService_20150416.DescribeRegions' = 0 }

	export enum DescribeSettingsX_Amz_Target { 'DirectoryService_20150416.DescribeSettings' = 0 }

	export enum DescribeSharedDirectoriesX_Amz_Target { 'DirectoryService_20150416.DescribeSharedDirectories' = 0 }

	export enum DescribeSnapshotsX_Amz_Target { 'DirectoryService_20150416.DescribeSnapshots' = 0 }

	export enum DescribeTrustsX_Amz_Target { 'DirectoryService_20150416.DescribeTrusts' = 0 }

	export enum DescribeUpdateDirectoryX_Amz_Target { 'DirectoryService_20150416.DescribeUpdateDirectory' = 0 }

	export enum DisableClientAuthenticationX_Amz_Target { 'DirectoryService_20150416.DisableClientAuthentication' = 0 }

	export enum DisableLDAPSX_Amz_Target { 'DirectoryService_20150416.DisableLDAPS' = 0 }

	export enum DisableRadiusX_Amz_Target { 'DirectoryService_20150416.DisableRadius' = 0 }

	export enum DisableSsoX_Amz_Target { 'DirectoryService_20150416.DisableSso' = 0 }

	export enum EnableClientAuthenticationX_Amz_Target { 'DirectoryService_20150416.EnableClientAuthentication' = 0 }

	export enum EnableLDAPSX_Amz_Target { 'DirectoryService_20150416.EnableLDAPS' = 0 }

	export enum EnableRadiusX_Amz_Target { 'DirectoryService_20150416.EnableRadius' = 0 }

	export enum EnableSsoX_Amz_Target { 'DirectoryService_20150416.EnableSso' = 0 }

	export enum GetDirectoryLimitsX_Amz_Target { 'DirectoryService_20150416.GetDirectoryLimits' = 0 }

	export enum GetSnapshotLimitsX_Amz_Target { 'DirectoryService_20150416.GetSnapshotLimits' = 0 }

	export enum ListCertificatesX_Amz_Target { 'DirectoryService_20150416.ListCertificates' = 0 }

	export enum ListIpRoutesX_Amz_Target { 'DirectoryService_20150416.ListIpRoutes' = 0 }

	export enum ListLogSubscriptionsX_Amz_Target { 'DirectoryService_20150416.ListLogSubscriptions' = 0 }

	export enum ListSchemaExtensionsX_Amz_Target { 'DirectoryService_20150416.ListSchemaExtensions' = 0 }

	export enum ListTagsForResourceX_Amz_Target { 'DirectoryService_20150416.ListTagsForResource' = 0 }

	export enum RegisterCertificateX_Amz_Target { 'DirectoryService_20150416.RegisterCertificate' = 0 }

	export enum RegisterEventTopicX_Amz_Target { 'DirectoryService_20150416.RegisterEventTopic' = 0 }

	export enum RejectSharedDirectoryX_Amz_Target { 'DirectoryService_20150416.RejectSharedDirectory' = 0 }

	export enum RemoveIpRoutesX_Amz_Target { 'DirectoryService_20150416.RemoveIpRoutes' = 0 }

	export enum RemoveRegionX_Amz_Target { 'DirectoryService_20150416.RemoveRegion' = 0 }

	export enum RemoveTagsFromResourceX_Amz_Target { 'DirectoryService_20150416.RemoveTagsFromResource' = 0 }

	export enum ResetUserPasswordX_Amz_Target { 'DirectoryService_20150416.ResetUserPassword' = 0 }

	export enum RestoreFromSnapshotX_Amz_Target { 'DirectoryService_20150416.RestoreFromSnapshot' = 0 }

	export enum ShareDirectoryX_Amz_Target { 'DirectoryService_20150416.ShareDirectory' = 0 }

	export enum StartSchemaExtensionX_Amz_Target { 'DirectoryService_20150416.StartSchemaExtension' = 0 }

	export enum UnshareDirectoryX_Amz_Target { 'DirectoryService_20150416.UnshareDirectory' = 0 }

	export enum UpdateConditionalForwarderX_Amz_Target { 'DirectoryService_20150416.UpdateConditionalForwarder' = 0 }

	export enum UpdateDirectorySetupX_Amz_Target { 'DirectoryService_20150416.UpdateDirectorySetup' = 0 }

	export enum UpdateNumberOfDomainControllersX_Amz_Target { 'DirectoryService_20150416.UpdateNumberOfDomainControllers' = 0 }

	export enum UpdateRadiusX_Amz_Target { 'DirectoryService_20150416.UpdateRadius' = 0 }

	export enum UpdateSettingsX_Amz_Target { 'DirectoryService_20150416.UpdateSettings' = 0 }

	export enum UpdateTrustX_Amz_Target { 'DirectoryService_20150416.UpdateTrust' = 0 }

	export enum VerifyTrustX_Amz_Target { 'DirectoryService_20150416.VerifyTrust' = 0 }

}

