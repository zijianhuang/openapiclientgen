import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface AcceptSharedDirectoryResult {

		/** Details about the shared directory in the directory owner account for which the share request in the directory consumer account has been accepted. */
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
		OwnerAccountId?: string | null;
		OwnerDirectoryId?: string | null;
		ShareMethod?: SharedDirectoryShareMethod | null;
		SharedAccountId?: string | null;
		SharedDirectoryId?: string | null;
		ShareStatus?: SharedDirectoryShareStatus | null;

		/** Max length: 1024 */
		ShareNotes?: string | null;
		CreatedDateTime?: Date | null;
		LastUpdatedDateTime?: Date | null;
	}

	/** Details about the shared directory in the directory owner account for which the share request in the directory consumer account has been accepted. */
	export interface SharedDirectoryFormProperties {
		OwnerAccountId: FormControl<string | null | undefined>,
		OwnerDirectoryId: FormControl<string | null | undefined>,
		ShareMethod: FormControl<SharedDirectoryShareMethod | null | undefined>,
		SharedAccountId: FormControl<string | null | undefined>,
		SharedDirectoryId: FormControl<string | null | undefined>,
		ShareStatus: FormControl<SharedDirectoryShareStatus | null | undefined>,

		/** Max length: 1024 */
		ShareNotes: FormControl<string | null | undefined>,
		CreatedDateTime: FormControl<Date | null | undefined>,
		LastUpdatedDateTime: FormControl<Date | null | undefined>,
	}
	export function CreateSharedDirectoryFormGroup() {
		return new FormGroup<SharedDirectoryFormProperties>({
			OwnerAccountId: new FormControl<string | null | undefined>(undefined),
			OwnerDirectoryId: new FormControl<string | null | undefined>(undefined),
			ShareMethod: new FormControl<SharedDirectoryShareMethod | null | undefined>(undefined),
			SharedAccountId: new FormControl<string | null | undefined>(undefined),
			SharedDirectoryId: new FormControl<string | null | undefined>(undefined),
			ShareStatus: new FormControl<SharedDirectoryShareStatus | null | undefined>(undefined),
			ShareNotes: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(1024)]),
			CreatedDateTime: new FormControl<Date | null | undefined>(undefined),
			LastUpdatedDateTime: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export enum SharedDirectoryShareMethod { ORGANIZATIONS = 0, HANDSHAKE = 1 }

	export enum SharedDirectoryShareStatus { Shared = 0, PendingAcceptance = 1, Rejected = 2, Rejecting = 3, RejectFailed = 4, Sharing = 5, ShareFailed = 6, Deleted = 7, Deleting = 8 }

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


	/** IP address block. This is often the address block of the DNS server used for your on-premises domain.  */
	export interface IpRoute {
		CidrIp?: string | null;

		/**
		 * Max length: 128
		 * Min length: 0
		 */
		Description?: string | null;
	}

	/** IP address block. This is often the address block of the DNS server used for your on-premises domain.  */
	export interface IpRouteFormProperties {
		CidrIp: FormControl<string | null | undefined>,

		/**
		 * Max length: 128
		 * Min length: 0
		 */
		Description: FormControl<string | null | undefined>,
	}
	export function CreateIpRouteFormGroup() {
		return new FormGroup<IpRouteFormProperties>({
			CidrIp: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(128), Validators.minLength(0), Validators.pattern('^([a-zA-Z0-9_])[\\a-zA-Z0-9_@#%*+=:?./!\s-]*$')]),
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

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		Key: string;

		/**
		 * Required
		 * Max length: 256
		 * Min length: 0
		 */
		Value: string;
	}

	/** Metadata assigned to a directory consisting of a key-value pair. */
	export interface TagFormProperties {

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		Key: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 256
		 * Min length: 0
		 */
		Value: FormControl<string | null | undefined>,
	}
	export function CreateTagFormGroup() {
		return new FormGroup<TagFormProperties>({
			Key: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(128), Validators.minLength(1), Validators.pattern('^([\p{L}\p{Z}\p{N}_.:/=+\-@]*)$')]),
			Value: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(256), Validators.minLength(0), Validators.pattern('^([\p{L}\p{Z}\p{N}_.:/=+\-@]*)$')]),
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
		DirectoryId?: string | null;
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
		ShortName?: string | null;

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		Password: string;

		/**
		 * Max length: 128
		 * Min length: 0
		 */
		Description?: string | null;

		/** Required */
		Size: ConnectDirectoryRequestSize;

		/**
		 * Contains information for the <a>ConnectDirectory</a> operation when an AD Connector directory is being created.
		 * Required
		 */
		ConnectSettings: DirectoryConnectSettings;
		Tags?: Array<Tag>;
	}

	/** Contains the inputs for the <a>ConnectDirectory</a> operation. */
	export interface ConnectDirectoryRequestFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,
		ShortName: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		Password: FormControl<string | null | undefined>,

		/**
		 * Max length: 128
		 * Min length: 0
		 */
		Description: FormControl<string | null | undefined>,

		/** Required */
		Size: FormControl<ConnectDirectoryRequestSize | null | undefined>,
	}
	export function CreateConnectDirectoryRequestFormGroup() {
		return new FormGroup<ConnectDirectoryRequestFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ShortName: new FormControl<string | null | undefined>(undefined),
			Password: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(128), Validators.minLength(1)]),
			Description: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(128), Validators.minLength(0), Validators.pattern('^([a-zA-Z0-9_])[\\a-zA-Z0-9_@#%*+=:?./!\s-]*$')]),
			Size: new FormControl<ConnectDirectoryRequestSize | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum ConnectDirectoryRequestSize { Small = 0, Large = 1 }


	/** Contains information for the <a>ConnectDirectory</a> operation when an AD Connector directory is being created. */
	export interface DirectoryConnectSettings {

		/** Required */
		VpcId: string;

		/** Required */
		SubnetIds: Array<string>;

		/** Required */
		CustomerDnsIps: Array<string>;

		/**
		 * Required
		 * Min length: 1
		 */
		CustomerUserName: string;
	}

	/** Contains information for the <a>ConnectDirectory</a> operation when an AD Connector directory is being created. */
	export interface DirectoryConnectSettingsFormProperties {

		/** Required */
		VpcId: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Min length: 1
		 */
		CustomerUserName: FormControl<string | null | undefined>,
	}
	export function CreateDirectoryConnectSettingsFormGroup() {
		return new FormGroup<DirectoryConnectSettingsFormProperties>({
			VpcId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			CustomerUserName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.pattern('[a-zA-Z0-9._-]+')]),
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
		DirectoryId?: string | null;

		/**
		 * Max length: 62
		 * Min length: 1
		 */
		Alias?: string | null;
	}

	/** Contains the results of the <a>CreateAlias</a> operation. */
	export interface CreateAliasResultFormProperties {
		DirectoryId: FormControl<string | null | undefined>,

		/**
		 * Max length: 62
		 * Min length: 1
		 */
		Alias: FormControl<string | null | undefined>,
	}
	export function CreateCreateAliasResultFormGroup() {
		return new FormGroup<CreateAliasResultFormProperties>({
			DirectoryId: new FormControl<string | null | undefined>(undefined),
			Alias: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(62), Validators.minLength(1), Validators.pattern('^(?!d-)([\da-zA-Z]+)([-]*[\da-zA-Z])*')]),
		});

	}


	/** Contains the inputs for the <a>CreateAlias</a> operation. */
	export interface CreateAliasRequest {

		/** Required */
		DirectoryId: string;

		/**
		 * Required
		 * Max length: 62
		 * Min length: 1
		 */
		Alias: string;
	}

	/** Contains the inputs for the <a>CreateAlias</a> operation. */
	export interface CreateAliasRequestFormProperties {

		/** Required */
		DirectoryId: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 62
		 * Min length: 1
		 */
		Alias: FormControl<string | null | undefined>,
	}
	export function CreateCreateAliasRequestFormGroup() {
		return new FormGroup<CreateAliasRequestFormProperties>({
			DirectoryId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Alias: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(62), Validators.minLength(1), Validators.pattern('^(?!d-)([\da-zA-Z]+)([-]*[\da-zA-Z])*')]),
		});

	}


	/** Contains the results for the <a>CreateComputer</a> operation. */
	export interface CreateComputerResult {

		/** Contains information about a computer account in a directory. */
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

		/**
		 * Max length: 256
		 * Min length: 1
		 */
		ComputerId?: string | null;

		/**
		 * Max length: 15
		 * Min length: 1
		 */
		ComputerName?: string | null;
		ComputerAttributes?: Array<Attribute>;
	}

	/** Contains information about a computer account in a directory. */
	export interface ComputerFormProperties {

		/**
		 * Max length: 256
		 * Min length: 1
		 */
		ComputerId: FormControl<string | null | undefined>,

		/**
		 * Max length: 15
		 * Min length: 1
		 */
		ComputerName: FormControl<string | null | undefined>,
	}
	export function CreateComputerFormGroup() {
		return new FormGroup<ComputerFormProperties>({
			ComputerId: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(256), Validators.minLength(1), Validators.pattern('[&\w+-.@]+')]),
			ComputerName: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(15), Validators.minLength(1)]),
		});

	}


	/** Represents a named directory attribute. */
	export interface Attribute {

		/** Min length: 1 */
		Name?: string | null;
		Value?: string | null;
	}

	/** Represents a named directory attribute. */
	export interface AttributeFormProperties {

		/** Min length: 1 */
		Name: FormControl<string | null | undefined>,
		Value: FormControl<string | null | undefined>,
	}
	export function CreateAttributeFormGroup() {
		return new FormGroup<AttributeFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1)]),
			Value: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains the inputs for the <a>CreateComputer</a> operation. */
	export interface CreateComputerRequest {

		/** Required */
		DirectoryId: string;

		/**
		 * Required
		 * Max length: 15
		 * Min length: 1
		 */
		ComputerName: string;

		/**
		 * Required
		 * Max length: 64
		 * Min length: 8
		 */
		Password: string;

		/**
		 * Max length: 2000
		 * Min length: 1
		 */
		OrganizationalUnitDistinguishedName?: string | null;
		ComputerAttributes?: Array<Attribute>;
	}

	/** Contains the inputs for the <a>CreateComputer</a> operation. */
	export interface CreateComputerRequestFormProperties {

		/** Required */
		DirectoryId: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 15
		 * Min length: 1
		 */
		ComputerName: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 64
		 * Min length: 8
		 */
		Password: FormControl<string | null | undefined>,

		/**
		 * Max length: 2000
		 * Min length: 1
		 */
		OrganizationalUnitDistinguishedName: FormControl<string | null | undefined>,
	}
	export function CreateCreateComputerRequestFormGroup() {
		return new FormGroup<CreateComputerRequestFormProperties>({
			DirectoryId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ComputerName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(15), Validators.minLength(1)]),
			Password: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(64), Validators.minLength(8), Validators.pattern('[\u0020-\u00FF]+')]),
			OrganizationalUnitDistinguishedName: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(2000), Validators.minLength(1)]),
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

	export interface UnsupportedOperationException {
	}
	export interface UnsupportedOperationExceptionFormProperties {
	}
	export function CreateUnsupportedOperationExceptionFormGroup() {
		return new FormGroup<UnsupportedOperationExceptionFormProperties>({
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


	/** Initiates the creation of a conditional forwarder for your AWS Directory Service for Microsoft Active Directory. Conditional forwarders are required in order to set up a trust relationship with another domain. */
	export interface CreateConditionalForwarderRequest {

		/** Required */
		DirectoryId: string;

		/** Required */
		RemoteDomainName: string;

		/** Required */
		DnsIpAddrs: Array<string>;
	}

	/** Initiates the creation of a conditional forwarder for your AWS Directory Service for Microsoft Active Directory. Conditional forwarders are required in order to set up a trust relationship with another domain. */
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
		DirectoryId?: string | null;
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
		ShortName?: string | null;

		/** Required */
		Password: string;

		/**
		 * Max length: 128
		 * Min length: 0
		 */
		Description?: string | null;

		/** Required */
		Size: ConnectDirectoryRequestSize;

		/** Contains VPC information for the <a>CreateDirectory</a> or <a>CreateMicrosoftAD</a> operation. */
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

		/**
		 * Max length: 128
		 * Min length: 0
		 */
		Description: FormControl<string | null | undefined>,

		/** Required */
		Size: FormControl<ConnectDirectoryRequestSize | null | undefined>,
	}
	export function CreateCreateDirectoryRequestFormGroup() {
		return new FormGroup<CreateDirectoryRequestFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ShortName: new FormControl<string | null | undefined>(undefined),
			Password: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Description: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(128), Validators.minLength(0), Validators.pattern('^([a-zA-Z0-9_])[\\a-zA-Z0-9_@#%*+=:?./!\s-]*$')]),
			Size: new FormControl<ConnectDirectoryRequestSize | null | undefined>(undefined, [Validators.required]),
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

		/**
		 * Required
		 * Max length: 512
		 * Min length: 1
		 */
		LogGroupName: string;
	}
	export interface CreateLogSubscriptionRequestFormProperties {

		/** Required */
		DirectoryId: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 512
		 * Min length: 1
		 */
		LogGroupName: FormControl<string | null | undefined>,
	}
	export function CreateCreateLogSubscriptionRequestFormGroup() {
		return new FormGroup<CreateLogSubscriptionRequestFormProperties>({
			DirectoryId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			LogGroupName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(512), Validators.minLength(1), Validators.pattern('[-._/#A-Za-z0-9]+')]),
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
		DirectoryId?: string | null;
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


	/** Creates an AWS Managed Microsoft AD directory. */
	export interface CreateMicrosoftADRequest {

		/** Required */
		Name: string;
		ShortName?: string | null;

		/** Required */
		Password: string;

		/**
		 * Max length: 128
		 * Min length: 0
		 */
		Description?: string | null;

		/**
		 * Contains VPC information for the <a>CreateDirectory</a> or <a>CreateMicrosoftAD</a> operation.
		 * Required
		 */
		VpcSettings: DirectoryVpcSettings;
		Edition?: CreateMicrosoftADRequestEdition | null;
		Tags?: Array<Tag>;
	}

	/** Creates an AWS Managed Microsoft AD directory. */
	export interface CreateMicrosoftADRequestFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,
		ShortName: FormControl<string | null | undefined>,

		/** Required */
		Password: FormControl<string | null | undefined>,

		/**
		 * Max length: 128
		 * Min length: 0
		 */
		Description: FormControl<string | null | undefined>,
		Edition: FormControl<CreateMicrosoftADRequestEdition | null | undefined>,
	}
	export function CreateCreateMicrosoftADRequestFormGroup() {
		return new FormGroup<CreateMicrosoftADRequestFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ShortName: new FormControl<string | null | undefined>(undefined),
			Password: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Description: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(128), Validators.minLength(0), Validators.pattern('^([a-zA-Z0-9_])[\\a-zA-Z0-9_@#%*+=:?./!\s-]*$')]),
			Edition: new FormControl<CreateMicrosoftADRequestEdition | null | undefined>(undefined),
		});

	}

	export enum CreateMicrosoftADRequestEdition { Enterprise = 0, Standard = 1 }


	/** Contains the results of the <a>CreateSnapshot</a> operation. */
	export interface CreateSnapshotResult {
		SnapshotId?: string | null;
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

		/**
		 * Max length: 128
		 * Min length: 0
		 */
		Name?: string | null;
	}

	/** Contains the inputs for the <a>CreateSnapshot</a> operation. */
	export interface CreateSnapshotRequestFormProperties {

		/** Required */
		DirectoryId: FormControl<string | null | undefined>,

		/**
		 * Max length: 128
		 * Min length: 0
		 */
		Name: FormControl<string | null | undefined>,
	}
	export function CreateCreateSnapshotRequestFormGroup() {
		return new FormGroup<CreateSnapshotRequestFormProperties>({
			DirectoryId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(128), Validators.minLength(0), Validators.pattern('^([a-zA-Z0-9_])[\\a-zA-Z0-9_@#%*+=:?./!\s-]*$')]),
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
		TrustId?: string | null;
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


	/** <p>AWS Directory Service for Microsoft Active Directory allows you to configure trust relationships. For example, you can establish a trust between your AWS Managed Microsoft AD directory, and your existing on-premises Microsoft Active Directory. This would allow you to provide users and groups access to resources in either domain, with a single set of credentials.</p> <p>This action initiates the creation of the AWS side of a trust relationship between an AWS Managed Microsoft AD directory and an external domain.</p> */
	export interface CreateTrustRequest {

		/** Required */
		DirectoryId: string;

		/** Required */
		RemoteDomainName: string;

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		TrustPassword: string;

		/** Required */
		TrustDirection: CreateTrustRequestTrustDirection;
		TrustType?: CreateTrustRequestTrustType | null;
		ConditionalForwarderIpAddrs?: Array<string>;
		SelectiveAuth?: CreateTrustRequestSelectiveAuth | null;
	}

	/** <p>AWS Directory Service for Microsoft Active Directory allows you to configure trust relationships. For example, you can establish a trust between your AWS Managed Microsoft AD directory, and your existing on-premises Microsoft Active Directory. This would allow you to provide users and groups access to resources in either domain, with a single set of credentials.</p> <p>This action initiates the creation of the AWS side of a trust relationship between an AWS Managed Microsoft AD directory and an external domain.</p> */
	export interface CreateTrustRequestFormProperties {

		/** Required */
		DirectoryId: FormControl<string | null | undefined>,

		/** Required */
		RemoteDomainName: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		TrustPassword: FormControl<string | null | undefined>,

		/** Required */
		TrustDirection: FormControl<CreateTrustRequestTrustDirection | null | undefined>,
		TrustType: FormControl<CreateTrustRequestTrustType | null | undefined>,
		SelectiveAuth: FormControl<CreateTrustRequestSelectiveAuth | null | undefined>,
	}
	export function CreateCreateTrustRequestFormGroup() {
		return new FormGroup<CreateTrustRequestFormProperties>({
			DirectoryId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			RemoteDomainName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			TrustPassword: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(128), Validators.minLength(1), Validators.pattern('(.|\s)*\S(.|\s)*')]),
			TrustDirection: new FormControl<CreateTrustRequestTrustDirection | null | undefined>(undefined, [Validators.required]),
			TrustType: new FormControl<CreateTrustRequestTrustType | null | undefined>(undefined),
			SelectiveAuth: new FormControl<CreateTrustRequestSelectiveAuth | null | undefined>(undefined),
		});

	}

	export enum CreateTrustRequestTrustDirection { One_Way_Outgoing = 0, One_Way_Incoming = 1, Two_Way = 2 }

	export enum CreateTrustRequestTrustType { Forest = 0, External = 1 }

	export enum CreateTrustRequestSelectiveAuth { Enabled = 0, Disabled = 1 }


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
		DirectoryId?: string | null;
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
		SnapshotId?: string | null;
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
		TrustId?: string | null;
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


	/** Deletes the local side of an existing trust relationship between the AWS Managed Microsoft AD directory and the external domain. */
	export interface DeleteTrustRequest {

		/** Required */
		TrustId: string;
		DeleteAssociatedConditionalForwarder?: boolean | null;
	}

	/** Deletes the local side of an existing trust relationship between the AWS Managed Microsoft AD directory and the external domain. */
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

	export interface DirectoryDoesNotExistException {
	}
	export interface DirectoryDoesNotExistExceptionFormProperties {
	}
	export function CreateDirectoryDoesNotExistExceptionFormGroup() {
		return new FormGroup<DirectoryDoesNotExistExceptionFormProperties>({
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


	/** Removes the specified directory as a publisher to the specified SNS topic. */
	export interface DeregisterEventTopicRequest {

		/** Required */
		DirectoryId: string;

		/**
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		TopicName: string;
	}

	/** Removes the specified directory as a publisher to the specified SNS topic. */
	export interface DeregisterEventTopicRequestFormProperties {

		/** Required */
		DirectoryId: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		TopicName: FormControl<string | null | undefined>,
	}
	export function CreateDeregisterEventTopicRequestFormGroup() {
		return new FormGroup<DeregisterEventTopicRequestFormProperties>({
			DirectoryId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			TopicName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(256), Validators.minLength(1), Validators.pattern('[a-zA-Z0-9_-]+')]),
		});

	}

	export interface DescribeCertificateResult {

		/** Information about the certificate. */
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
		CertificateId?: string | null;
		State?: CertificateState | null;
		StateReason?: string | null;
		CommonName?: string | null;
		RegisteredDateTime?: Date | null;
		ExpiryDateTime?: Date | null;
	}

	/** Information about the certificate. */
	export interface CertificateFormProperties {
		CertificateId: FormControl<string | null | undefined>,
		State: FormControl<CertificateState | null | undefined>,
		StateReason: FormControl<string | null | undefined>,
		CommonName: FormControl<string | null | undefined>,
		RegisteredDateTime: FormControl<Date | null | undefined>,
		ExpiryDateTime: FormControl<Date | null | undefined>,
	}
	export function CreateCertificateFormGroup() {
		return new FormGroup<CertificateFormProperties>({
			CertificateId: new FormControl<string | null | undefined>(undefined),
			State: new FormControl<CertificateState | null | undefined>(undefined),
			StateReason: new FormControl<string | null | undefined>(undefined),
			CommonName: new FormControl<string | null | undefined>(undefined),
			RegisteredDateTime: new FormControl<Date | null | undefined>(undefined),
			ExpiryDateTime: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export enum CertificateState { Registering = 0, Registered = 1, RegisterFailed = 2, Deregistering = 3, Deregistered = 4, DeregisterFailed = 5 }

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
		RemoteDomainName?: string | null;
		DnsIpAddrs?: Array<string>;
		ReplicationScope?: ConditionalForwarderReplicationScope | null;
	}

	/** Points to a remote domain with which you are setting up a trust relationship. Conditional forwarders are required in order to set up a trust relationship with another domain. */
	export interface ConditionalForwarderFormProperties {
		RemoteDomainName: FormControl<string | null | undefined>,
		ReplicationScope: FormControl<ConditionalForwarderReplicationScope | null | undefined>,
	}
	export function CreateConditionalForwarderFormGroup() {
		return new FormGroup<ConditionalForwarderFormProperties>({
			RemoteDomainName: new FormControl<string | null | undefined>(undefined),
			ReplicationScope: new FormControl<ConditionalForwarderReplicationScope | null | undefined>(undefined),
		});

	}

	export enum ConditionalForwarderReplicationScope { Domain = 0 }


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

		/** A list of directory descriptions. */
		DirectoryDescriptions?: Array<DirectoryDescription>;
		NextToken?: string | null;
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


	/** Contains information about an AWS Directory Service directory. */
	export interface DirectoryDescription {
		DirectoryId?: string | null;
		Name?: string | null;
		ShortName?: string | null;
		Size?: ConnectDirectoryRequestSize | null;
		Edition?: CreateMicrosoftADRequestEdition | null;

		/**
		 * Max length: 62
		 * Min length: 1
		 */
		Alias?: string | null;

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		AccessUrl?: string | null;

		/**
		 * Max length: 128
		 * Min length: 0
		 */
		Description?: string | null;
		DnsIpAddrs?: Array<string>;
		Stage?: DirectoryDescriptionStage | null;
		ShareStatus?: SharedDirectoryShareStatus | null;
		ShareMethod?: SharedDirectoryShareMethod | null;

		/** Max length: 1024 */
		ShareNotes?: string | null;
		LaunchTime?: Date | null;
		StageLastUpdatedDateTime?: Date | null;
		Type?: DirectoryDescriptionType | null;

		/** Contains information about the directory. */
		VpcSettings?: DirectoryVpcSettingsDescription;

		/** Contains information about an AD Connector directory. */
		ConnectSettings?: DirectoryConnectSettingsDescription;

		/** Contains information about a Remote Authentication Dial In User Service (RADIUS) server. */
		RadiusSettings?: RadiusSettings;
		RadiusStatus?: DirectoryDescriptionRadiusStatus | null;
		StageReason?: string | null;
		SsoEnabled?: boolean | null;

		/** Minimum: 2 */
		DesiredNumberOfDomainControllers?: number | null;

		/** Describes the directory owner account details that have been shared to the directory consumer account. */
		OwnerDirectoryDescription?: OwnerDirectoryDescription;
	}

	/** Contains information about an AWS Directory Service directory. */
	export interface DirectoryDescriptionFormProperties {
		DirectoryId: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
		ShortName: FormControl<string | null | undefined>,
		Size: FormControl<ConnectDirectoryRequestSize | null | undefined>,
		Edition: FormControl<CreateMicrosoftADRequestEdition | null | undefined>,

		/**
		 * Max length: 62
		 * Min length: 1
		 */
		Alias: FormControl<string | null | undefined>,

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		AccessUrl: FormControl<string | null | undefined>,

		/**
		 * Max length: 128
		 * Min length: 0
		 */
		Description: FormControl<string | null | undefined>,
		Stage: FormControl<DirectoryDescriptionStage | null | undefined>,
		ShareStatus: FormControl<SharedDirectoryShareStatus | null | undefined>,
		ShareMethod: FormControl<SharedDirectoryShareMethod | null | undefined>,

		/** Max length: 1024 */
		ShareNotes: FormControl<string | null | undefined>,
		LaunchTime: FormControl<Date | null | undefined>,
		StageLastUpdatedDateTime: FormControl<Date | null | undefined>,
		Type: FormControl<DirectoryDescriptionType | null | undefined>,
		RadiusStatus: FormControl<DirectoryDescriptionRadiusStatus | null | undefined>,
		StageReason: FormControl<string | null | undefined>,
		SsoEnabled: FormControl<boolean | null | undefined>,

		/** Minimum: 2 */
		DesiredNumberOfDomainControllers: FormControl<number | null | undefined>,
	}
	export function CreateDirectoryDescriptionFormGroup() {
		return new FormGroup<DirectoryDescriptionFormProperties>({
			DirectoryId: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			ShortName: new FormControl<string | null | undefined>(undefined),
			Size: new FormControl<ConnectDirectoryRequestSize | null | undefined>(undefined),
			Edition: new FormControl<CreateMicrosoftADRequestEdition | null | undefined>(undefined),
			Alias: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(62), Validators.minLength(1), Validators.pattern('^(?!d-)([\da-zA-Z]+)([-]*[\da-zA-Z])*')]),
			AccessUrl: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(128), Validators.minLength(1)]),
			Description: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(128), Validators.minLength(0), Validators.pattern('^([a-zA-Z0-9_])[\\a-zA-Z0-9_@#%*+=:?./!\s-]*$')]),
			Stage: new FormControl<DirectoryDescriptionStage | null | undefined>(undefined),
			ShareStatus: new FormControl<SharedDirectoryShareStatus | null | undefined>(undefined),
			ShareMethod: new FormControl<SharedDirectoryShareMethod | null | undefined>(undefined),
			ShareNotes: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(1024)]),
			LaunchTime: new FormControl<Date | null | undefined>(undefined),
			StageLastUpdatedDateTime: new FormControl<Date | null | undefined>(undefined),
			Type: new FormControl<DirectoryDescriptionType | null | undefined>(undefined),
			RadiusStatus: new FormControl<DirectoryDescriptionRadiusStatus | null | undefined>(undefined),
			StageReason: new FormControl<string | null | undefined>(undefined),
			SsoEnabled: new FormControl<boolean | null | undefined>(undefined),
			DesiredNumberOfDomainControllers: new FormControl<number | null | undefined>(undefined, [Validators.min(2)]),
		});

	}

	export enum DirectoryDescriptionStage { Requested = 0, Creating = 1, Created = 2, Active = 3, Inoperable = 4, Impaired = 5, Restoring = 6, RestoreFailed = 7, Deleting = 8, Deleted = 9, Failed = 10 }

	export enum DirectoryDescriptionType { SimpleAD = 0, ADConnector = 1, MicrosoftAD = 2, SharedMicrosoftAD = 3 }


	/** Contains information about the directory. */
	export interface DirectoryVpcSettingsDescription {
		VpcId?: string | null;
		SubnetIds?: Array<string>;
		SecurityGroupId?: string | null;
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
		VpcId?: string | null;
		SubnetIds?: Array<string>;

		/** Min length: 1 */
		CustomerUserName?: string | null;
		SecurityGroupId?: string | null;
		AvailabilityZones?: Array<string>;
		ConnectIps?: Array<string>;
	}

	/** Contains information about an AD Connector directory. */
	export interface DirectoryConnectSettingsDescriptionFormProperties {
		VpcId: FormControl<string | null | undefined>,

		/** Min length: 1 */
		CustomerUserName: FormControl<string | null | undefined>,
		SecurityGroupId: FormControl<string | null | undefined>,
	}
	export function CreateDirectoryConnectSettingsDescriptionFormGroup() {
		return new FormGroup<DirectoryConnectSettingsDescriptionFormProperties>({
			VpcId: new FormControl<string | null | undefined>(undefined),
			CustomerUserName: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.pattern('[a-zA-Z0-9._-]+')]),
			SecurityGroupId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains information about a Remote Authentication Dial In User Service (RADIUS) server. */
	export interface RadiusSettings {
		RadiusServers?: Array<string>;

		/**
		 * Minimum: 1025
		 * Maximum: 65535
		 */
		RadiusPort?: number | null;

		/**
		 * Minimum: 1
		 * Maximum: 20
		 */
		RadiusTimeout?: number | null;

		/**
		 * Minimum: 0
		 * Maximum: 10
		 */
		RadiusRetries?: number | null;

		/**
		 * Max length: 512
		 * Min length: 8
		 */
		SharedSecret?: string | null;
		AuthenticationProtocol?: RadiusSettingsAuthenticationProtocol | null;

		/**
		 * Max length: 64
		 * Min length: 1
		 */
		DisplayLabel?: string | null;
		UseSameUsername?: boolean | null;
	}

	/** Contains information about a Remote Authentication Dial In User Service (RADIUS) server. */
	export interface RadiusSettingsFormProperties {

		/**
		 * Minimum: 1025
		 * Maximum: 65535
		 */
		RadiusPort: FormControl<number | null | undefined>,

		/**
		 * Minimum: 1
		 * Maximum: 20
		 */
		RadiusTimeout: FormControl<number | null | undefined>,

		/**
		 * Minimum: 0
		 * Maximum: 10
		 */
		RadiusRetries: FormControl<number | null | undefined>,

		/**
		 * Max length: 512
		 * Min length: 8
		 */
		SharedSecret: FormControl<string | null | undefined>,
		AuthenticationProtocol: FormControl<RadiusSettingsAuthenticationProtocol | null | undefined>,

		/**
		 * Max length: 64
		 * Min length: 1
		 */
		DisplayLabel: FormControl<string | null | undefined>,
		UseSameUsername: FormControl<boolean | null | undefined>,
	}
	export function CreateRadiusSettingsFormGroup() {
		return new FormGroup<RadiusSettingsFormProperties>({
			RadiusPort: new FormControl<number | null | undefined>(undefined, [Validators.min(1025), Validators.max(65535)]),
			RadiusTimeout: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(20)]),
			RadiusRetries: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(10)]),
			SharedSecret: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(512), Validators.minLength(8)]),
			AuthenticationProtocol: new FormControl<RadiusSettingsAuthenticationProtocol | null | undefined>(undefined),
			DisplayLabel: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(64), Validators.minLength(1)]),
			UseSameUsername: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export enum RadiusSettingsAuthenticationProtocol { PAP = 0, CHAP = 1, MS_CHAPv1 = 2, MS_CHAPv2 = 3 }

	export enum DirectoryDescriptionRadiusStatus { Creating = 0, Completed = 1, Failed = 2 }


	/** Describes the directory owner account details that have been shared to the directory consumer account. */
	export interface OwnerDirectoryDescription {
		DirectoryId?: string | null;
		AccountId?: string | null;
		DnsIpAddrs?: Array<string>;

		/** Contains information about the directory. */
		VpcSettings?: DirectoryVpcSettingsDescription;

		/** Contains information about a Remote Authentication Dial In User Service (RADIUS) server. */
		RadiusSettings?: RadiusSettings;
		RadiusStatus?: DirectoryDescriptionRadiusStatus | null;
	}

	/** Describes the directory owner account details that have been shared to the directory consumer account. */
	export interface OwnerDirectoryDescriptionFormProperties {
		DirectoryId: FormControl<string | null | undefined>,
		AccountId: FormControl<string | null | undefined>,
		RadiusStatus: FormControl<DirectoryDescriptionRadiusStatus | null | undefined>,
	}
	export function CreateOwnerDirectoryDescriptionFormGroup() {
		return new FormGroup<OwnerDirectoryDescriptionFormProperties>({
			DirectoryId: new FormControl<string | null | undefined>(undefined),
			AccountId: new FormControl<string | null | undefined>(undefined),
			RadiusStatus: new FormControl<DirectoryDescriptionRadiusStatus | null | undefined>(undefined),
		});

	}


	/** Contains the inputs for the <a>DescribeDirectories</a> operation. */
	export interface DescribeDirectoriesRequest {

		/** A list of directory identifiers. */
		DirectoryIds?: Array<string>;
		NextToken?: string | null;

		/** Minimum: 0 */
		Limit?: number | null;
	}

	/** Contains the inputs for the <a>DescribeDirectories</a> operation. */
	export interface DescribeDirectoriesRequestFormProperties {
		NextToken: FormControl<string | null | undefined>,

		/** Minimum: 0 */
		Limit: FormControl<number | null | undefined>,
	}
	export function CreateDescribeDirectoriesRequestFormGroup() {
		return new FormGroup<DescribeDirectoriesRequestFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
			Limit: new FormControl<number | null | undefined>(undefined, [Validators.min(0)]),
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
		NextToken?: string | null;
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
		DirectoryId?: string | null;
		DomainControllerId?: string | null;
		DnsIpAddr?: string | null;
		VpcId?: string | null;
		SubnetId?: string | null;
		AvailabilityZone?: string | null;
		Status?: DomainControllerStatus | null;
		StatusReason?: string | null;
		LaunchTime?: Date | null;
		StatusLastUpdatedDateTime?: Date | null;
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
		NextToken?: string | null;

		/** Minimum: 0 */
		Limit?: number | null;
	}
	export interface DescribeDomainControllersRequestFormProperties {

		/** Required */
		DirectoryId: FormControl<string | null | undefined>,
		NextToken: FormControl<string | null | undefined>,

		/** Minimum: 0 */
		Limit: FormControl<number | null | undefined>,
	}
	export function CreateDescribeDomainControllersRequestFormGroup() {
		return new FormGroup<DescribeDomainControllersRequestFormProperties>({
			DirectoryId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			NextToken: new FormControl<string | null | undefined>(undefined),
			Limit: new FormControl<number | null | undefined>(undefined, [Validators.min(0)]),
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


	/** Information about SNS topic and AWS Directory Service directory associations. */
	export interface EventTopic {
		DirectoryId?: string | null;

		/**
		 * Max length: 256
		 * Min length: 1
		 */
		TopicName?: string | null;
		TopicArn?: string | null;
		CreatedDateTime?: Date | null;
		Status?: EventTopicStatus | null;
	}

	/** Information about SNS topic and AWS Directory Service directory associations. */
	export interface EventTopicFormProperties {
		DirectoryId: FormControl<string | null | undefined>,

		/**
		 * Max length: 256
		 * Min length: 1
		 */
		TopicName: FormControl<string | null | undefined>,
		TopicArn: FormControl<string | null | undefined>,
		CreatedDateTime: FormControl<Date | null | undefined>,
		Status: FormControl<EventTopicStatus | null | undefined>,
	}
	export function CreateEventTopicFormGroup() {
		return new FormGroup<EventTopicFormProperties>({
			DirectoryId: new FormControl<string | null | undefined>(undefined),
			TopicName: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(256), Validators.minLength(1), Validators.pattern('[a-zA-Z0-9_-]+')]),
			TopicArn: new FormControl<string | null | undefined>(undefined),
			CreatedDateTime: new FormControl<Date | null | undefined>(undefined),
			Status: new FormControl<EventTopicStatus | null | undefined>(undefined),
		});

	}

	export enum EventTopicStatus { Registered = 0, Topic_not_found = 1, Failed = 2, Deleted = 3 }


	/** Describes event topics. */
	export interface DescribeEventTopicsRequest {
		DirectoryId?: string | null;
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
		NextToken?: string | null;
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
		LDAPSStatus?: LDAPSSettingInfoLDAPSStatus | null;
		LDAPSStatusReason?: string | null;
		LastUpdatedDateTime?: Date | null;
	}

	/** Contains general information about the LDAPS settings. */
	export interface LDAPSSettingInfoFormProperties {
		LDAPSStatus: FormControl<LDAPSSettingInfoLDAPSStatus | null | undefined>,
		LDAPSStatusReason: FormControl<string | null | undefined>,
		LastUpdatedDateTime: FormControl<Date | null | undefined>,
	}
	export function CreateLDAPSSettingInfoFormGroup() {
		return new FormGroup<LDAPSSettingInfoFormProperties>({
			LDAPSStatus: new FormControl<LDAPSSettingInfoLDAPSStatus | null | undefined>(undefined),
			LDAPSStatusReason: new FormControl<string | null | undefined>(undefined),
			LastUpdatedDateTime: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export enum LDAPSSettingInfoLDAPSStatus { Enabling = 0, Enabled = 1, EnableFailed = 2, Disabled = 3 }

	export interface DescribeLDAPSSettingsRequest {

		/** Required */
		DirectoryId: string;
		Type?: DescribeLDAPSSettingsRequestType | null;
		NextToken?: string | null;

		/**
		 * Minimum: 1
		 * Maximum: 50
		 */
		Limit?: number | null;
	}
	export interface DescribeLDAPSSettingsRequestFormProperties {

		/** Required */
		DirectoryId: FormControl<string | null | undefined>,
		Type: FormControl<DescribeLDAPSSettingsRequestType | null | undefined>,
		NextToken: FormControl<string | null | undefined>,

		/**
		 * Minimum: 1
		 * Maximum: 50
		 */
		Limit: FormControl<number | null | undefined>,
	}
	export function CreateDescribeLDAPSSettingsRequestFormGroup() {
		return new FormGroup<DescribeLDAPSSettingsRequestFormProperties>({
			DirectoryId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Type: new FormControl<DescribeLDAPSSettingsRequestType | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
			Limit: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(50)]),
		});

	}

	export enum DescribeLDAPSSettingsRequestType { Client = 0 }

	export interface DescribeSharedDirectoriesResult {
		SharedDirectories?: Array<SharedDirectory>;
		NextToken?: string | null;
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

		/** A list of directory identifiers. */
		SharedDirectoryIds?: Array<string>;
		NextToken?: string | null;

		/** Minimum: 0 */
		Limit?: number | null;
	}
	export interface DescribeSharedDirectoriesRequestFormProperties {

		/** Required */
		OwnerDirectoryId: FormControl<string | null | undefined>,
		NextToken: FormControl<string | null | undefined>,

		/** Minimum: 0 */
		Limit: FormControl<number | null | undefined>,
	}
	export function CreateDescribeSharedDirectoriesRequestFormGroup() {
		return new FormGroup<DescribeSharedDirectoriesRequestFormProperties>({
			OwnerDirectoryId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			NextToken: new FormControl<string | null | undefined>(undefined),
			Limit: new FormControl<number | null | undefined>(undefined, [Validators.min(0)]),
		});

	}


	/** Contains the results of the <a>DescribeSnapshots</a> operation. */
	export interface DescribeSnapshotsResult {

		/** A list of descriptions of directory snapshots. */
		Snapshots?: Array<Snapshot>;
		NextToken?: string | null;
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
		DirectoryId?: string | null;
		SnapshotId?: string | null;
		Type?: SnapshotType | null;

		/**
		 * Max length: 128
		 * Min length: 0
		 */
		Name?: string | null;
		Status?: DirectoryDescriptionRadiusStatus | null;
		StartTime?: Date | null;
	}

	/** Describes a directory snapshot. */
	export interface SnapshotFormProperties {
		DirectoryId: FormControl<string | null | undefined>,
		SnapshotId: FormControl<string | null | undefined>,
		Type: FormControl<SnapshotType | null | undefined>,

		/**
		 * Max length: 128
		 * Min length: 0
		 */
		Name: FormControl<string | null | undefined>,
		Status: FormControl<DirectoryDescriptionRadiusStatus | null | undefined>,
		StartTime: FormControl<Date | null | undefined>,
	}
	export function CreateSnapshotFormGroup() {
		return new FormGroup<SnapshotFormProperties>({
			DirectoryId: new FormControl<string | null | undefined>(undefined),
			SnapshotId: new FormControl<string | null | undefined>(undefined),
			Type: new FormControl<SnapshotType | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(128), Validators.minLength(0), Validators.pattern('^([a-zA-Z0-9_])[\\a-zA-Z0-9_@#%*+=:?./!\s-]*$')]),
			Status: new FormControl<DirectoryDescriptionRadiusStatus | null | undefined>(undefined),
			StartTime: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export enum SnapshotType { Auto = 0, Manual = 1 }


	/** Contains the inputs for the <a>DescribeSnapshots</a> operation. */
	export interface DescribeSnapshotsRequest {
		DirectoryId?: string | null;

		/** A list of directory snapshot identifiers. */
		SnapshotIds?: Array<string>;
		NextToken?: string | null;

		/** Minimum: 0 */
		Limit?: number | null;
	}

	/** Contains the inputs for the <a>DescribeSnapshots</a> operation. */
	export interface DescribeSnapshotsRequestFormProperties {
		DirectoryId: FormControl<string | null | undefined>,
		NextToken: FormControl<string | null | undefined>,

		/** Minimum: 0 */
		Limit: FormControl<number | null | undefined>,
	}
	export function CreateDescribeSnapshotsRequestFormGroup() {
		return new FormGroup<DescribeSnapshotsRequestFormProperties>({
			DirectoryId: new FormControl<string | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
			Limit: new FormControl<number | null | undefined>(undefined, [Validators.min(0)]),
		});

	}


	/** The result of a DescribeTrust request. */
	export interface DescribeTrustsResult {
		Trusts?: Array<Trust>;
		NextToken?: string | null;
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


	/** Describes a trust relationship between an AWS Managed Microsoft AD directory and an external domain. */
	export interface Trust {
		DirectoryId?: string | null;
		TrustId?: string | null;
		RemoteDomainName?: string | null;
		TrustType?: CreateTrustRequestTrustType | null;
		TrustDirection?: TrustTrustDirection | null;
		TrustState?: TrustTrustState | null;
		CreatedDateTime?: Date | null;
		LastUpdatedDateTime?: Date | null;
		StateLastUpdatedDateTime?: Date | null;
		TrustStateReason?: string | null;
		SelectiveAuth?: CreateTrustRequestSelectiveAuth | null;
	}

	/** Describes a trust relationship between an AWS Managed Microsoft AD directory and an external domain. */
	export interface TrustFormProperties {
		DirectoryId: FormControl<string | null | undefined>,
		TrustId: FormControl<string | null | undefined>,
		RemoteDomainName: FormControl<string | null | undefined>,
		TrustType: FormControl<CreateTrustRequestTrustType | null | undefined>,
		TrustDirection: FormControl<TrustTrustDirection | null | undefined>,
		TrustState: FormControl<TrustTrustState | null | undefined>,
		CreatedDateTime: FormControl<Date | null | undefined>,
		LastUpdatedDateTime: FormControl<Date | null | undefined>,
		StateLastUpdatedDateTime: FormControl<Date | null | undefined>,
		TrustStateReason: FormControl<string | null | undefined>,
		SelectiveAuth: FormControl<CreateTrustRequestSelectiveAuth | null | undefined>,
	}
	export function CreateTrustFormGroup() {
		return new FormGroup<TrustFormProperties>({
			DirectoryId: new FormControl<string | null | undefined>(undefined),
			TrustId: new FormControl<string | null | undefined>(undefined),
			RemoteDomainName: new FormControl<string | null | undefined>(undefined),
			TrustType: new FormControl<CreateTrustRequestTrustType | null | undefined>(undefined),
			TrustDirection: new FormControl<TrustTrustDirection | null | undefined>(undefined),
			TrustState: new FormControl<TrustTrustState | null | undefined>(undefined),
			CreatedDateTime: new FormControl<Date | null | undefined>(undefined),
			LastUpdatedDateTime: new FormControl<Date | null | undefined>(undefined),
			StateLastUpdatedDateTime: new FormControl<Date | null | undefined>(undefined),
			TrustStateReason: new FormControl<string | null | undefined>(undefined),
			SelectiveAuth: new FormControl<CreateTrustRequestSelectiveAuth | null | undefined>(undefined),
		});

	}

	export enum TrustTrustDirection { One_Way_Outgoing = 0, One_Way_Incoming = 1, Two_Way = 2 }

	export enum TrustTrustState { Creating = 0, Created = 1, Verifying = 2, VerifyFailed = 3, Verified = 4, Updating = 5, UpdateFailed = 6, Updated = 7, Deleting = 8, Deleted = 9, Failed = 10 }


	/** Describes the trust relationships for a particular AWS Managed Microsoft AD directory. If no input parameters are are provided, such as directory ID or trust ID, this request describes all the trust relationships. */
	export interface DescribeTrustsRequest {
		DirectoryId?: string | null;
		TrustIds?: Array<string>;
		NextToken?: string | null;

		/** Minimum: 0 */
		Limit?: number | null;
	}

	/** Describes the trust relationships for a particular AWS Managed Microsoft AD directory. If no input parameters are are provided, such as directory ID or trust ID, this request describes all the trust relationships. */
	export interface DescribeTrustsRequestFormProperties {
		DirectoryId: FormControl<string | null | undefined>,
		NextToken: FormControl<string | null | undefined>,

		/** Minimum: 0 */
		Limit: FormControl<number | null | undefined>,
	}
	export function CreateDescribeTrustsRequestFormGroup() {
		return new FormGroup<DescribeTrustsRequestFormProperties>({
			DirectoryId: new FormControl<string | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
			Limit: new FormControl<number | null | undefined>(undefined, [Validators.min(0)]),
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
		Type: DescribeLDAPSSettingsRequestType;
	}
	export interface DisableLDAPSRequestFormProperties {

		/** Required */
		DirectoryId: FormControl<string | null | undefined>,

		/** Required */
		Type: FormControl<DescribeLDAPSSettingsRequestType | null | undefined>,
	}
	export function CreateDisableLDAPSRequestFormGroup() {
		return new FormGroup<DisableLDAPSRequestFormProperties>({
			DirectoryId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Type: new FormControl<DescribeLDAPSSettingsRequestType | null | undefined>(undefined, [Validators.required]),
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

		/** Min length: 1 */
		UserName?: string | null;

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		Password?: string | null;
	}

	/** Contains the inputs for the <a>DisableSso</a> operation. */
	export interface DisableSsoRequestFormProperties {

		/** Required */
		DirectoryId: FormControl<string | null | undefined>,

		/** Min length: 1 */
		UserName: FormControl<string | null | undefined>,

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		Password: FormControl<string | null | undefined>,
	}
	export function CreateDisableSsoRequestFormGroup() {
		return new FormGroup<DisableSsoRequestFormProperties>({
			DirectoryId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			UserName: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.pattern('[a-zA-Z0-9._-]+')]),
			Password: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(128), Validators.minLength(1)]),
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
		Type: DescribeLDAPSSettingsRequestType;
	}
	export interface EnableLDAPSRequestFormProperties {

		/** Required */
		DirectoryId: FormControl<string | null | undefined>,

		/** Required */
		Type: FormControl<DescribeLDAPSSettingsRequestType | null | undefined>,
	}
	export function CreateEnableLDAPSRequestFormGroup() {
		return new FormGroup<EnableLDAPSRequestFormProperties>({
			DirectoryId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Type: new FormControl<DescribeLDAPSSettingsRequestType | null | undefined>(undefined, [Validators.required]),
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

		/**
		 * Contains information about a Remote Authentication Dial In User Service (RADIUS) server.
		 * Required
		 */
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

		/** Min length: 1 */
		UserName?: string | null;

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		Password?: string | null;
	}

	/** Contains the inputs for the <a>EnableSso</a> operation. */
	export interface EnableSsoRequestFormProperties {

		/** Required */
		DirectoryId: FormControl<string | null | undefined>,

		/** Min length: 1 */
		UserName: FormControl<string | null | undefined>,

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		Password: FormControl<string | null | undefined>,
	}
	export function CreateEnableSsoRequestFormGroup() {
		return new FormGroup<EnableSsoRequestFormProperties>({
			DirectoryId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			UserName: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.pattern('[a-zA-Z0-9._-]+')]),
			Password: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(128), Validators.minLength(1)]),
		});

	}


	/** Contains the results of the <a>GetDirectoryLimits</a> operation. */
	export interface GetDirectoryLimitsResult {

		/** Contains directory limit information for a Region. */
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

		/** Minimum: 0 */
		CloudOnlyDirectoriesLimit?: number | null;

		/** Minimum: 0 */
		CloudOnlyDirectoriesCurrentCount?: number | null;
		CloudOnlyDirectoriesLimitReached?: boolean | null;

		/** Minimum: 0 */
		CloudOnlyMicrosoftADLimit?: number | null;

		/** Minimum: 0 */
		CloudOnlyMicrosoftADCurrentCount?: number | null;
		CloudOnlyMicrosoftADLimitReached?: boolean | null;

		/** Minimum: 0 */
		ConnectedDirectoriesLimit?: number | null;

		/** Minimum: 0 */
		ConnectedDirectoriesCurrentCount?: number | null;
		ConnectedDirectoriesLimitReached?: boolean | null;
	}

	/** Contains directory limit information for a Region. */
	export interface DirectoryLimitsFormProperties {

		/** Minimum: 0 */
		CloudOnlyDirectoriesLimit: FormControl<number | null | undefined>,

		/** Minimum: 0 */
		CloudOnlyDirectoriesCurrentCount: FormControl<number | null | undefined>,
		CloudOnlyDirectoriesLimitReached: FormControl<boolean | null | undefined>,

		/** Minimum: 0 */
		CloudOnlyMicrosoftADLimit: FormControl<number | null | undefined>,

		/** Minimum: 0 */
		CloudOnlyMicrosoftADCurrentCount: FormControl<number | null | undefined>,
		CloudOnlyMicrosoftADLimitReached: FormControl<boolean | null | undefined>,

		/** Minimum: 0 */
		ConnectedDirectoriesLimit: FormControl<number | null | undefined>,

		/** Minimum: 0 */
		ConnectedDirectoriesCurrentCount: FormControl<number | null | undefined>,
		ConnectedDirectoriesLimitReached: FormControl<boolean | null | undefined>,
	}
	export function CreateDirectoryLimitsFormGroup() {
		return new FormGroup<DirectoryLimitsFormProperties>({
			CloudOnlyDirectoriesLimit: new FormControl<number | null | undefined>(undefined, [Validators.min(0)]),
			CloudOnlyDirectoriesCurrentCount: new FormControl<number | null | undefined>(undefined, [Validators.min(0)]),
			CloudOnlyDirectoriesLimitReached: new FormControl<boolean | null | undefined>(undefined),
			CloudOnlyMicrosoftADLimit: new FormControl<number | null | undefined>(undefined, [Validators.min(0)]),
			CloudOnlyMicrosoftADCurrentCount: new FormControl<number | null | undefined>(undefined, [Validators.min(0)]),
			CloudOnlyMicrosoftADLimitReached: new FormControl<boolean | null | undefined>(undefined),
			ConnectedDirectoriesLimit: new FormControl<number | null | undefined>(undefined, [Validators.min(0)]),
			ConnectedDirectoriesCurrentCount: new FormControl<number | null | undefined>(undefined, [Validators.min(0)]),
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

		/** Contains manual snapshot limit information for a directory. */
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

		/** Minimum: 0 */
		ManualSnapshotsLimit?: number | null;

		/** Minimum: 0 */
		ManualSnapshotsCurrentCount?: number | null;
		ManualSnapshotsLimitReached?: boolean | null;
	}

	/** Contains manual snapshot limit information for a directory. */
	export interface SnapshotLimitsFormProperties {

		/** Minimum: 0 */
		ManualSnapshotsLimit: FormControl<number | null | undefined>,

		/** Minimum: 0 */
		ManualSnapshotsCurrentCount: FormControl<number | null | undefined>,
		ManualSnapshotsLimitReached: FormControl<boolean | null | undefined>,
	}
	export function CreateSnapshotLimitsFormGroup() {
		return new FormGroup<SnapshotLimitsFormProperties>({
			ManualSnapshotsLimit: new FormControl<number | null | undefined>(undefined, [Validators.min(0)]),
			ManualSnapshotsCurrentCount: new FormControl<number | null | undefined>(undefined, [Validators.min(0)]),
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
		NextToken?: string | null;
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
		CertificateId?: string | null;
		CommonName?: string | null;
		State?: CertificateState | null;
		ExpiryDateTime?: Date | null;
	}

	/** Contains general information about a certificate. */
	export interface CertificateInfoFormProperties {
		CertificateId: FormControl<string | null | undefined>,
		CommonName: FormControl<string | null | undefined>,
		State: FormControl<CertificateState | null | undefined>,
		ExpiryDateTime: FormControl<Date | null | undefined>,
	}
	export function CreateCertificateInfoFormGroup() {
		return new FormGroup<CertificateInfoFormProperties>({
			CertificateId: new FormControl<string | null | undefined>(undefined),
			CommonName: new FormControl<string | null | undefined>(undefined),
			State: new FormControl<CertificateState | null | undefined>(undefined),
			ExpiryDateTime: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface ListCertificatesRequest {

		/** Required */
		DirectoryId: string;
		NextToken?: string | null;

		/**
		 * Minimum: 1
		 * Maximum: 50
		 */
		Limit?: number | null;
	}
	export interface ListCertificatesRequestFormProperties {

		/** Required */
		DirectoryId: FormControl<string | null | undefined>,
		NextToken: FormControl<string | null | undefined>,

		/**
		 * Minimum: 1
		 * Maximum: 50
		 */
		Limit: FormControl<number | null | undefined>,
	}
	export function CreateListCertificatesRequestFormGroup() {
		return new FormGroup<ListCertificatesRequestFormProperties>({
			DirectoryId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			NextToken: new FormControl<string | null | undefined>(undefined),
			Limit: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(50)]),
		});

	}

	export interface ListIpRoutesResult {
		IpRoutesInfo?: Array<IpRouteInfo>;
		NextToken?: string | null;
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
		DirectoryId?: string | null;
		CidrIp?: string | null;
		IpRouteStatusMsg?: IpRouteInfoIpRouteStatusMsg | null;
		AddedDateTime?: Date | null;
		IpRouteStatusReason?: string | null;

		/**
		 * Max length: 128
		 * Min length: 0
		 */
		Description?: string | null;
	}

	/** Information about one or more IP address blocks. */
	export interface IpRouteInfoFormProperties {
		DirectoryId: FormControl<string | null | undefined>,
		CidrIp: FormControl<string | null | undefined>,
		IpRouteStatusMsg: FormControl<IpRouteInfoIpRouteStatusMsg | null | undefined>,
		AddedDateTime: FormControl<Date | null | undefined>,
		IpRouteStatusReason: FormControl<string | null | undefined>,

		/**
		 * Max length: 128
		 * Min length: 0
		 */
		Description: FormControl<string | null | undefined>,
	}
	export function CreateIpRouteInfoFormGroup() {
		return new FormGroup<IpRouteInfoFormProperties>({
			DirectoryId: new FormControl<string | null | undefined>(undefined),
			CidrIp: new FormControl<string | null | undefined>(undefined),
			IpRouteStatusMsg: new FormControl<IpRouteInfoIpRouteStatusMsg | null | undefined>(undefined),
			AddedDateTime: new FormControl<Date | null | undefined>(undefined),
			IpRouteStatusReason: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(128), Validators.minLength(0), Validators.pattern('^([a-zA-Z0-9_])[\\a-zA-Z0-9_@#%*+=:?./!\s-]*$')]),
		});

	}

	export enum IpRouteInfoIpRouteStatusMsg { Adding = 0, Added = 1, Removing = 2, Removed = 3, AddFailed = 4, RemoveFailed = 5 }

	export interface ListIpRoutesRequest {

		/** Required */
		DirectoryId: string;
		NextToken?: string | null;

		/** Minimum: 0 */
		Limit?: number | null;
	}
	export interface ListIpRoutesRequestFormProperties {

		/** Required */
		DirectoryId: FormControl<string | null | undefined>,
		NextToken: FormControl<string | null | undefined>,

		/** Minimum: 0 */
		Limit: FormControl<number | null | undefined>,
	}
	export function CreateListIpRoutesRequestFormGroup() {
		return new FormGroup<ListIpRoutesRequestFormProperties>({
			DirectoryId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			NextToken: new FormControl<string | null | undefined>(undefined),
			Limit: new FormControl<number | null | undefined>(undefined, [Validators.min(0)]),
		});

	}

	export interface ListLogSubscriptionsResult {
		LogSubscriptions?: Array<LogSubscription>;
		NextToken?: string | null;
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
		DirectoryId?: string | null;

		/**
		 * Max length: 512
		 * Min length: 1
		 */
		LogGroupName?: string | null;
		SubscriptionCreatedDateTime?: Date | null;
	}

	/** Represents a log subscription, which tracks real-time data from a chosen log group to a specified destination. */
	export interface LogSubscriptionFormProperties {
		DirectoryId: FormControl<string | null | undefined>,

		/**
		 * Max length: 512
		 * Min length: 1
		 */
		LogGroupName: FormControl<string | null | undefined>,
		SubscriptionCreatedDateTime: FormControl<Date | null | undefined>,
	}
	export function CreateLogSubscriptionFormGroup() {
		return new FormGroup<LogSubscriptionFormProperties>({
			DirectoryId: new FormControl<string | null | undefined>(undefined),
			LogGroupName: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(512), Validators.minLength(1), Validators.pattern('[-._/#A-Za-z0-9]+')]),
			SubscriptionCreatedDateTime: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface ListLogSubscriptionsRequest {
		DirectoryId?: string | null;
		NextToken?: string | null;

		/** Minimum: 0 */
		Limit?: number | null;
	}
	export interface ListLogSubscriptionsRequestFormProperties {
		DirectoryId: FormControl<string | null | undefined>,
		NextToken: FormControl<string | null | undefined>,

		/** Minimum: 0 */
		Limit: FormControl<number | null | undefined>,
	}
	export function CreateListLogSubscriptionsRequestFormGroup() {
		return new FormGroup<ListLogSubscriptionsRequestFormProperties>({
			DirectoryId: new FormControl<string | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
			Limit: new FormControl<number | null | undefined>(undefined, [Validators.min(0)]),
		});

	}

	export interface ListSchemaExtensionsResult {
		SchemaExtensionsInfo?: Array<SchemaExtensionInfo>;
		NextToken?: string | null;
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
		DirectoryId?: string | null;
		SchemaExtensionId?: string | null;

		/**
		 * Max length: 128
		 * Min length: 0
		 */
		Description?: string | null;
		SchemaExtensionStatus?: SchemaExtensionInfoSchemaExtensionStatus | null;
		SchemaExtensionStatusReason?: string | null;
		StartDateTime?: Date | null;
		EndDateTime?: Date | null;
	}

	/** Information about a schema extension. */
	export interface SchemaExtensionInfoFormProperties {
		DirectoryId: FormControl<string | null | undefined>,
		SchemaExtensionId: FormControl<string | null | undefined>,

		/**
		 * Max length: 128
		 * Min length: 0
		 */
		Description: FormControl<string | null | undefined>,
		SchemaExtensionStatus: FormControl<SchemaExtensionInfoSchemaExtensionStatus | null | undefined>,
		SchemaExtensionStatusReason: FormControl<string | null | undefined>,
		StartDateTime: FormControl<Date | null | undefined>,
		EndDateTime: FormControl<Date | null | undefined>,
	}
	export function CreateSchemaExtensionInfoFormGroup() {
		return new FormGroup<SchemaExtensionInfoFormProperties>({
			DirectoryId: new FormControl<string | null | undefined>(undefined),
			SchemaExtensionId: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(128), Validators.minLength(0), Validators.pattern('^([a-zA-Z0-9_])[\\a-zA-Z0-9_@#%*+=:?./!\s-]*$')]),
			SchemaExtensionStatus: new FormControl<SchemaExtensionInfoSchemaExtensionStatus | null | undefined>(undefined),
			SchemaExtensionStatusReason: new FormControl<string | null | undefined>(undefined),
			StartDateTime: new FormControl<Date | null | undefined>(undefined),
			EndDateTime: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export enum SchemaExtensionInfoSchemaExtensionStatus { Initializing = 0, CreatingSnapshot = 1, UpdatingSchema = 2, Replicating = 3, CancelInProgress = 4, RollbackInProgress = 5, Cancelled = 6, Failed = 7, Completed = 8 }

	export interface ListSchemaExtensionsRequest {

		/** Required */
		DirectoryId: string;
		NextToken?: string | null;

		/** Minimum: 0 */
		Limit?: number | null;
	}
	export interface ListSchemaExtensionsRequestFormProperties {

		/** Required */
		DirectoryId: FormControl<string | null | undefined>,
		NextToken: FormControl<string | null | undefined>,

		/** Minimum: 0 */
		Limit: FormControl<number | null | undefined>,
	}
	export function CreateListSchemaExtensionsRequestFormGroup() {
		return new FormGroup<ListSchemaExtensionsRequestFormProperties>({
			DirectoryId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			NextToken: new FormControl<string | null | undefined>(undefined),
			Limit: new FormControl<number | null | undefined>(undefined, [Validators.min(0)]),
		});

	}

	export interface ListTagsForResourceResult {
		Tags?: Array<Tag>;
		NextToken?: string | null;
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
		NextToken?: string | null;

		/** Minimum: 0 */
		Limit?: number | null;
	}
	export interface ListTagsForResourceRequestFormProperties {

		/** Required */
		ResourceId: FormControl<string | null | undefined>,
		NextToken: FormControl<string | null | undefined>,

		/** Minimum: 0 */
		Limit: FormControl<number | null | undefined>,
	}
	export function CreateListTagsForResourceRequestFormGroup() {
		return new FormGroup<ListTagsForResourceRequestFormProperties>({
			ResourceId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			NextToken: new FormControl<string | null | undefined>(undefined),
			Limit: new FormControl<number | null | undefined>(undefined, [Validators.min(0)]),
		});

	}

	export interface RegisterCertificateResult {
		CertificateId?: string | null;
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

		/**
		 * Required
		 * Max length: 8192
		 * Min length: 1
		 */
		CertificateData: string;
	}
	export interface RegisterCertificateRequestFormProperties {

		/** Required */
		DirectoryId: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 8192
		 * Min length: 1
		 */
		CertificateData: FormControl<string | null | undefined>,
	}
	export function CreateRegisterCertificateRequestFormGroup() {
		return new FormGroup<RegisterCertificateRequestFormProperties>({
			DirectoryId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			CertificateData: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(8192), Validators.minLength(1)]),
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

		/**
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		TopicName: string;
	}

	/** Registers a new event topic. */
	export interface RegisterEventTopicRequestFormProperties {

		/** Required */
		DirectoryId: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		TopicName: FormControl<string | null | undefined>,
	}
	export function CreateRegisterEventTopicRequestFormGroup() {
		return new FormGroup<RegisterEventTopicRequestFormProperties>({
			DirectoryId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			TopicName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(256), Validators.minLength(1), Validators.pattern('[a-zA-Z0-9_-]+')]),
		});

	}

	export interface RejectSharedDirectoryResult {
		SharedDirectoryId?: string | null;
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

		/**
		 * Required
		 * Max length: 64
		 * Min length: 1
		 */
		UserName: string;

		/**
		 * Required
		 * Max length: 127
		 * Min length: 1
		 */
		NewPassword: string;
	}
	export interface ResetUserPasswordRequestFormProperties {

		/** Required */
		DirectoryId: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 64
		 * Min length: 1
		 */
		UserName: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 127
		 * Min length: 1
		 */
		NewPassword: FormControl<string | null | undefined>,
	}
	export function CreateResetUserPasswordRequestFormGroup() {
		return new FormGroup<ResetUserPasswordRequestFormProperties>({
			DirectoryId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			UserName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(64), Validators.minLength(1), Validators.pattern('^(?!.*\\|.*"|.*\/|.*\[|.*\]|.*:|.*;|.*\||.*=|.*,|.*\+|.*\*|.*\?|.*<|.*>|.*@).*$')]),
			NewPassword: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(127), Validators.minLength(1)]),
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
		SharedDirectoryId?: string | null;
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

		/** Max length: 1024 */
		ShareNotes?: string | null;

		/**
		 * Identifier that contains details about the directory consumer account.
		 * Required
		 */
		ShareTarget: ShareTarget;

		/** Required */
		ShareMethod: SharedDirectoryShareMethod;
	}
	export interface ShareDirectoryRequestFormProperties {

		/** Required */
		DirectoryId: FormControl<string | null | undefined>,

		/** Max length: 1024 */
		ShareNotes: FormControl<string | null | undefined>,

		/** Required */
		ShareMethod: FormControl<SharedDirectoryShareMethod | null | undefined>,
	}
	export function CreateShareDirectoryRequestFormGroup() {
		return new FormGroup<ShareDirectoryRequestFormProperties>({
			DirectoryId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ShareNotes: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(1024)]),
			ShareMethod: new FormControl<SharedDirectoryShareMethod | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Identifier that contains details about the directory consumer account. */
	export interface ShareTarget {

		/**
		 * Required
		 * Max length: 64
		 * Min length: 1
		 */
		Id: string;

		/** Required */
		Type: ShareTargetType;
	}

	/** Identifier that contains details about the directory consumer account. */
	export interface ShareTargetFormProperties {

		/**
		 * Required
		 * Max length: 64
		 * Min length: 1
		 */
		Id: FormControl<string | null | undefined>,

		/** Required */
		Type: FormControl<ShareTargetType | null | undefined>,
	}
	export function CreateShareTargetFormGroup() {
		return new FormGroup<ShareTargetFormProperties>({
			Id: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(64), Validators.minLength(1)]),
			Type: new FormControl<ShareTargetType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum ShareTargetType { ACCOUNT = 0 }

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

	export interface AccessDeniedException {
	}
	export interface AccessDeniedExceptionFormProperties {
	}
	export function CreateAccessDeniedExceptionFormGroup() {
		return new FormGroup<AccessDeniedExceptionFormProperties>({
		});

	}

	export interface StartSchemaExtensionResult {
		SchemaExtensionId?: string | null;
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

		/**
		 * Required
		 * Max length: 500000
		 * Min length: 1
		 */
		LdifContent: string;

		/**
		 * Required
		 * Max length: 128
		 * Min length: 0
		 */
		Description: string;
	}
	export interface StartSchemaExtensionRequestFormProperties {

		/** Required */
		DirectoryId: FormControl<string | null | undefined>,

		/** Required */
		CreateSnapshotBeforeSchemaExtension: FormControl<boolean | null | undefined>,

		/**
		 * Required
		 * Max length: 500000
		 * Min length: 1
		 */
		LdifContent: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 128
		 * Min length: 0
		 */
		Description: FormControl<string | null | undefined>,
	}
	export function CreateStartSchemaExtensionRequestFormGroup() {
		return new FormGroup<StartSchemaExtensionRequestFormProperties>({
			DirectoryId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			CreateSnapshotBeforeSchemaExtension: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			LdifContent: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(500000), Validators.minLength(1)]),
			Description: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(128), Validators.minLength(0), Validators.pattern('^([a-zA-Z0-9_])[\\a-zA-Z0-9_@#%*+=:?./!\s-]*$')]),
		});

	}

	export interface UnshareDirectoryResult {
		SharedDirectoryId?: string | null;
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

		/**
		 * Identifier that contains details about the directory consumer account with whom the directory is being unshared.
		 * Required
		 */
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

		/**
		 * Required
		 * Max length: 64
		 * Min length: 1
		 */
		Id: string;

		/** Required */
		Type: ShareTargetType;
	}

	/** Identifier that contains details about the directory consumer account with whom the directory is being unshared. */
	export interface UnshareTargetFormProperties {

		/**
		 * Required
		 * Max length: 64
		 * Min length: 1
		 */
		Id: FormControl<string | null | undefined>,

		/** Required */
		Type: FormControl<ShareTargetType | null | undefined>,
	}
	export function CreateUnshareTargetFormGroup() {
		return new FormGroup<UnshareTargetFormProperties>({
			Id: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(64), Validators.minLength(1)]),
			Type: new FormControl<ShareTargetType | null | undefined>(undefined, [Validators.required]),
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

		/**
		 * Required
		 * Minimum: 2
		 */
		DesiredNumber: number;
	}
	export interface UpdateNumberOfDomainControllersRequestFormProperties {

		/** Required */
		DirectoryId: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Minimum: 2
		 */
		DesiredNumber: FormControl<number | null | undefined>,
	}
	export function CreateUpdateNumberOfDomainControllersRequestFormGroup() {
		return new FormGroup<UpdateNumberOfDomainControllersRequestFormProperties>({
			DirectoryId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			DesiredNumber: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(2)]),
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

		/**
		 * Contains information about a Remote Authentication Dial In User Service (RADIUS) server.
		 * Required
		 */
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

	export interface UpdateTrustResult {

		/** The AWS request identifier. */
		RequestId?: string | null;
		TrustId?: string | null;
	}
	export interface UpdateTrustResultFormProperties {

		/** The AWS request identifier. */
		RequestId: FormControl<string | null | undefined>,
		TrustId: FormControl<string | null | undefined>,
	}
	export function CreateUpdateTrustResultFormGroup() {
		return new FormGroup<UpdateTrustResultFormProperties>({
			RequestId: new FormControl<string | null | undefined>(undefined),
			TrustId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateTrustRequest {

		/** Required */
		TrustId: string;
		SelectiveAuth?: CreateTrustRequestSelectiveAuth | null;
	}
	export interface UpdateTrustRequestFormProperties {

		/** Required */
		TrustId: FormControl<string | null | undefined>,
		SelectiveAuth: FormControl<CreateTrustRequestSelectiveAuth | null | undefined>,
	}
	export function CreateUpdateTrustRequestFormGroup() {
		return new FormGroup<UpdateTrustRequestFormProperties>({
			TrustId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			SelectiveAuth: new FormControl<CreateTrustRequestSelectiveAuth | null | undefined>(undefined),
		});

	}


	/** Result of a VerifyTrust request. */
	export interface VerifyTrustResult {
		TrustId?: string | null;
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


	/** Initiates the verification of an existing trust relationship between an AWS Managed Microsoft AD directory and an external domain. */
	export interface VerifyTrustRequest {

		/** Required */
		TrustId: string;
	}

	/** Initiates the verification of an existing trust relationship between an AWS Managed Microsoft AD directory and an external domain. */
	export interface VerifyTrustRequestFormProperties {

		/** Required */
		TrustId: FormControl<string | null | undefined>,
	}
	export function CreateVerifyTrustRequestFormGroup() {
		return new FormGroup<VerifyTrustRequestFormProperties>({
			TrustId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum ReplicationScope { Domain = 0 }

	export enum DirectorySize { Small = 0, Large = 1 }

	export enum DirectoryEdition { Enterprise = 0, Standard = 1 }

	export enum TrustDirection { One_Way_Outgoing = 0, One_Way_Incoming = 1, Two_Way = 2 }

	export enum TrustType { Forest = 0, External = 1 }

	export enum SelectiveAuth { Enabled = 0, Disabled = 1 }

	export enum LDAPSType { Client = 0 }

	export enum DirectoryStage { Requested = 0, Creating = 1, Created = 2, Active = 3, Inoperable = 4, Impaired = 5, Restoring = 6, RestoreFailed = 7, Deleting = 8, Deleted = 9, Failed = 10 }

	export enum ShareStatus { Shared = 0, PendingAcceptance = 1, Rejected = 2, Rejecting = 3, RejectFailed = 4, Sharing = 5, ShareFailed = 6, Deleted = 7, Deleting = 8 }

	export enum ShareMethod { ORGANIZATIONS = 0, HANDSHAKE = 1 }

	export enum DirectoryType { SimpleAD = 0, ADConnector = 1, MicrosoftAD = 2, SharedMicrosoftAD = 3 }

	export enum RadiusStatus { Creating = 0, Completed = 1, Failed = 2 }

	export enum TopicStatus { Registered = 0, Topic_not_found = 1, Failed = 2, Deleted = 3 }

	export enum IpRouteStatusMsg { Adding = 0, Added = 1, Removing = 2, Removed = 3, AddFailed = 4, RemoveFailed = 5 }

	export enum LDAPSStatus { Enabling = 0, Enabled = 1, EnableFailed = 2, Disabled = 3 }

	export enum RadiusAuthenticationProtocol { PAP = 0, CHAP = 1, MS_CHAPv1 = 2, MS_CHAPv2 = 3 }

	export enum SchemaExtensionStatus { Initializing = 0, CreatingSnapshot = 1, UpdatingSchema = 2, Replicating = 3, CancelInProgress = 4, RollbackInProgress = 5, Cancelled = 6, Failed = 7, Completed = 8 }

	export enum TargetType { ACCOUNT = 0 }

	export enum SnapshotStatus { Creating = 0, Completed = 1, Failed = 2 }

	export enum TrustState { Creating = 0, Created = 1, Verifying = 2, VerifyFailed = 3, Verified = 4, Updating = 5, UpdateFailed = 6, Updated = 7, Deleting = 8, Deleted = 9, Failed = 10 }

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
		 * <p>If the DNS server for your on-premises domain uses a publicly addressable IP address, you must add a CIDR address block to correctly route traffic to and from your Microsoft AD on Amazon Web Services. <i>AddIpRoutes</i> adds this address block. You can also use <i>AddIpRoutes</i> to facilitate routing traffic that uses public IP ranges from your Microsoft AD on AWS to a peer VPC. </p> <p>Before you call <i>AddIpRoutes</i>, ensure that all of the required permissions have been explicitly granted through a policy. For details about what permissions are required to run the <i>AddIpRoutes</i> operation, see <a href="http://docs.aws.amazon.com/directoryservice/latest/admin-guide/UsingWithDS_IAM_ResourcePermissions.html">AWS Directory Service API Permissions: Actions, Resources, and Conditions Reference</a>.</p>
		 * Post #X-Amz-Target=DirectoryService_20150416.AddIpRoutes
		 * @return {AddIpRoutesResult} Success
		 */
		AddIpRoutes(requestBody: AddIpRoutesRequest): Observable<AddIpRoutesResult> {
			return this.http.post<AddIpRoutesResult>(this.baseUri + '#X-Amz-Target=DirectoryService_20150416.AddIpRoutes', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
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
		 * <p>Creates an AD Connector to connect to an on-premises directory.</p> <p>Before you call <code>ConnectDirectory</code>, ensure that all of the required permissions have been explicitly granted through a policy. For details about what permissions are required to run the <code>ConnectDirectory</code> operation, see <a href="http://docs.aws.amazon.com/directoryservice/latest/admin-guide/UsingWithDS_IAM_ResourcePermissions.html">AWS Directory Service API Permissions: Actions, Resources, and Conditions Reference</a>.</p>
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
		 * Creates a computer account in the specified directory, and joins the computer to the directory.
		 * Post #X-Amz-Target=DirectoryService_20150416.CreateComputer
		 * @return {CreateComputerResult} Success
		 */
		CreateComputer(requestBody: CreateComputerRequest): Observable<CreateComputerResult> {
			return this.http.post<CreateComputerResult>(this.baseUri + '#X-Amz-Target=DirectoryService_20150416.CreateComputer', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Creates a conditional forwarder associated with your AWS directory. Conditional forwarders are required in order to set up a trust relationship with another domain. The conditional forwarder points to the trusted domain.
		 * Post #X-Amz-Target=DirectoryService_20150416.CreateConditionalForwarder
		 * @return {CreateConditionalForwarderResult} Success
		 */
		CreateConditionalForwarder(requestBody: CreateConditionalForwarderRequest): Observable<CreateConditionalForwarderResult> {
			return this.http.post<CreateConditionalForwarderResult>(this.baseUri + '#X-Amz-Target=DirectoryService_20150416.CreateConditionalForwarder', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Creates a Simple AD directory. For more information, see <a href="https://docs.aws.amazon.com/directoryservice/latest/admin-guide/directory_simple_ad.html">Simple Active Directory</a> in the <i>AWS Directory Service Admin Guide</i>.</p> <p>Before you call <code>CreateDirectory</code>, ensure that all of the required permissions have been explicitly granted through a policy. For details about what permissions are required to run the <code>CreateDirectory</code> operation, see <a href="http://docs.aws.amazon.com/directoryservice/latest/admin-guide/UsingWithDS_IAM_ResourcePermissions.html">AWS Directory Service API Permissions: Actions, Resources, and Conditions Reference</a>.</p>
		 * Post #X-Amz-Target=DirectoryService_20150416.CreateDirectory
		 * @return {CreateDirectoryResult} Success
		 */
		CreateDirectory(requestBody: CreateDirectoryRequest): Observable<CreateDirectoryResult> {
			return this.http.post<CreateDirectoryResult>(this.baseUri + '#X-Amz-Target=DirectoryService_20150416.CreateDirectory', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Creates a subscription to forward real-time Directory Service domain controller security logs to the specified Amazon CloudWatch log group in your AWS account.
		 * Post #X-Amz-Target=DirectoryService_20150416.CreateLogSubscription
		 * @return {CreateLogSubscriptionResult} Success
		 */
		CreateLogSubscription(requestBody: CreateLogSubscriptionRequest): Observable<CreateLogSubscriptionResult> {
			return this.http.post<CreateLogSubscriptionResult>(this.baseUri + '#X-Amz-Target=DirectoryService_20150416.CreateLogSubscription', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Creates a Microsoft AD directory in the AWS Cloud. For more information, see <a href="https://docs.aws.amazon.com/directoryservice/latest/admin-guide/directory_microsoft_ad.html">AWS Managed Microsoft AD</a> in the <i>AWS Directory Service Admin Guide</i>.</p> <p>Before you call <i>CreateMicrosoftAD</i>, ensure that all of the required permissions have been explicitly granted through a policy. For details about what permissions are required to run the <i>CreateMicrosoftAD</i> operation, see <a href="http://docs.aws.amazon.com/directoryservice/latest/admin-guide/UsingWithDS_IAM_ResourcePermissions.html">AWS Directory Service API Permissions: Actions, Resources, and Conditions Reference</a>.</p>
		 * Post #X-Amz-Target=DirectoryService_20150416.CreateMicrosoftAD
		 * @return {CreateMicrosoftADResult} Success
		 */
		CreateMicrosoftAD(requestBody: CreateMicrosoftADRequest): Observable<CreateMicrosoftADResult> {
			return this.http.post<CreateMicrosoftADResult>(this.baseUri + '#X-Amz-Target=DirectoryService_20150416.CreateMicrosoftAD', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Creates a snapshot of a Simple AD or Microsoft AD directory in the AWS cloud.</p> <note> <p>You cannot take snapshots of AD Connector directories.</p> </note>
		 * Post #X-Amz-Target=DirectoryService_20150416.CreateSnapshot
		 * @return {CreateSnapshotResult} Success
		 */
		CreateSnapshot(requestBody: CreateSnapshotRequest): Observable<CreateSnapshotResult> {
			return this.http.post<CreateSnapshotResult>(this.baseUri + '#X-Amz-Target=DirectoryService_20150416.CreateSnapshot', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>AWS Directory Service for Microsoft Active Directory allows you to configure trust relationships. For example, you can establish a trust between your AWS Managed Microsoft AD directory, and your existing on-premises Microsoft Active Directory. This would allow you to provide users and groups access to resources in either domain, with a single set of credentials.</p> <p>This action initiates the creation of the AWS side of a trust relationship between an AWS Managed Microsoft AD directory and an external domain. You can create either a forest trust or an external trust.</p>
		 * Post #X-Amz-Target=DirectoryService_20150416.CreateTrust
		 * @return {CreateTrustResult} Success
		 */
		CreateTrust(requestBody: CreateTrustRequest): Observable<CreateTrustResult> {
			return this.http.post<CreateTrustResult>(this.baseUri + '#X-Amz-Target=DirectoryService_20150416.CreateTrust', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a conditional forwarder that has been set up for your AWS directory.
		 * Post #X-Amz-Target=DirectoryService_20150416.DeleteConditionalForwarder
		 * @return {DeleteConditionalForwarderResult} Success
		 */
		DeleteConditionalForwarder(requestBody: DeleteConditionalForwarderRequest): Observable<DeleteConditionalForwarderResult> {
			return this.http.post<DeleteConditionalForwarderResult>(this.baseUri + '#X-Amz-Target=DirectoryService_20150416.DeleteConditionalForwarder', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Deletes an AWS Directory Service directory.</p> <p>Before you call <code>DeleteDirectory</code>, ensure that all of the required permissions have been explicitly granted through a policy. For details about what permissions are required to run the <code>DeleteDirectory</code> operation, see <a href="http://docs.aws.amazon.com/directoryservice/latest/admin-guide/UsingWithDS_IAM_ResourcePermissions.html">AWS Directory Service API Permissions: Actions, Resources, and Conditions Reference</a>.</p>
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
		 * Deletes an existing trust relationship between your AWS Managed Microsoft AD directory and an external domain.
		 * Post #X-Amz-Target=DirectoryService_20150416.DeleteTrust
		 * @return {DeleteTrustResult} Success
		 */
		DeleteTrust(requestBody: DeleteTrustRequest): Observable<DeleteTrustResult> {
			return this.http.post<DeleteTrustResult>(this.baseUri + '#X-Amz-Target=DirectoryService_20150416.DeleteTrust', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes from the system the certificate that was registered for a secured LDAP connection.
		 * Post #X-Amz-Target=DirectoryService_20150416.DeregisterCertificate
		 * @return {DeregisterCertificateResult} Success
		 */
		DeregisterCertificate(requestBody: DeregisterCertificateRequest): Observable<DeregisterCertificateResult> {
			return this.http.post<DeregisterCertificateResult>(this.baseUri + '#X-Amz-Target=DirectoryService_20150416.DeregisterCertificate', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Removes the specified directory as a publisher to the specified SNS topic.
		 * Post #X-Amz-Target=DirectoryService_20150416.DeregisterEventTopic
		 * @return {DeregisterEventTopicResult} Success
		 */
		DeregisterEventTopic(requestBody: DeregisterEventTopicRequest): Observable<DeregisterEventTopicResult> {
			return this.http.post<DeregisterEventTopicResult>(this.baseUri + '#X-Amz-Target=DirectoryService_20150416.DeregisterEventTopic', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Displays information about the certificate registered for a secured LDAP connection.
		 * Post #X-Amz-Target=DirectoryService_20150416.DescribeCertificate
		 * @return {DescribeCertificateResult} Success
		 */
		DescribeCertificate(requestBody: DescribeCertificateRequest): Observable<DescribeCertificateResult> {
			return this.http.post<DescribeCertificateResult>(this.baseUri + '#X-Amz-Target=DirectoryService_20150416.DescribeCertificate', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
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
		 * @return {DescribeDirectoriesResult} Success
		 */
		DescribeDirectories(requestBody: DescribeDirectoriesRequest): Observable<DescribeDirectoriesResult> {
			return this.http.post<DescribeDirectoriesResult>(this.baseUri + '#X-Amz-Target=DirectoryService_20150416.DescribeDirectories', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
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
		 * <p>Obtains information about which SNS topics receive status messages from the specified directory.</p> <p>If no input parameters are provided, such as DirectoryId or TopicName, this request describes all of the associations in the account.</p>
		 * Post #X-Amz-Target=DirectoryService_20150416.DescribeEventTopics
		 * @return {DescribeEventTopicsResult} Success
		 */
		DescribeEventTopics(requestBody: DescribeEventTopicsRequest): Observable<DescribeEventTopicsResult> {
			return this.http.post<DescribeEventTopicsResult>(this.baseUri + '#X-Amz-Target=DirectoryService_20150416.DescribeEventTopics', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Describes the status of LDAP security for the specified directory.
		 * Post #X-Amz-Target=DirectoryService_20150416.DescribeLDAPSSettings
		 * @return {DescribeLDAPSSettingsResult} Success
		 */
		DescribeLDAPSSettings(requestBody: DescribeLDAPSSettingsRequest): Observable<DescribeLDAPSSettingsResult> {
			return this.http.post<DescribeLDAPSSettingsResult>(this.baseUri + '#X-Amz-Target=DirectoryService_20150416.DescribeLDAPSSettings', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns the shared directories in your account.
		 * Post #X-Amz-Target=DirectoryService_20150416.DescribeSharedDirectories
		 * @return {DescribeSharedDirectoriesResult} Success
		 */
		DescribeSharedDirectories(requestBody: DescribeSharedDirectoriesRequest): Observable<DescribeSharedDirectoriesResult> {
			return this.http.post<DescribeSharedDirectoriesResult>(this.baseUri + '#X-Amz-Target=DirectoryService_20150416.DescribeSharedDirectories', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Obtains information about the directory snapshots that belong to this account.</p> <p>This operation supports pagination with the use of the <i>NextToken</i> request and response parameters. If more results are available, the <i>DescribeSnapshots.NextToken</i> member contains a token that you pass in the next call to <a>DescribeSnapshots</a> to retrieve the next set of items.</p> <p>You can also specify a maximum number of return results with the <i>Limit</i> parameter.</p>
		 * Post #X-Amz-Target=DirectoryService_20150416.DescribeSnapshots
		 * @return {DescribeSnapshotsResult} Success
		 */
		DescribeSnapshots(requestBody: DescribeSnapshotsRequest): Observable<DescribeSnapshotsResult> {
			return this.http.post<DescribeSnapshotsResult>(this.baseUri + '#X-Amz-Target=DirectoryService_20150416.DescribeSnapshots', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Obtains information about the trust relationships for this account.</p> <p>If no input parameters are provided, such as DirectoryId or TrustIds, this request describes all the trust relationships belonging to the account.</p>
		 * Post #X-Amz-Target=DirectoryService_20150416.DescribeTrusts
		 * @return {DescribeTrustsResult} Success
		 */
		DescribeTrusts(requestBody: DescribeTrustsRequest): Observable<DescribeTrustsResult> {
			return this.http.post<DescribeTrustsResult>(this.baseUri + '#X-Amz-Target=DirectoryService_20150416.DescribeTrusts', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
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
		 * Enables single sign-on for a directory. Single sign-on allows users in your directory to access certain AWS services from a computer joined to the directory without having to enter their credentials separately.
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
		 * For the specified directory, lists all the certificates registered for a secured LDAP connection.
		 * Post #X-Amz-Target=DirectoryService_20150416.ListCertificates
		 * @return {ListCertificatesResult} Success
		 */
		ListCertificates(requestBody: ListCertificatesRequest): Observable<ListCertificatesResult> {
			return this.http.post<ListCertificatesResult>(this.baseUri + '#X-Amz-Target=DirectoryService_20150416.ListCertificates', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists the address blocks that you have added to a directory.
		 * Post #X-Amz-Target=DirectoryService_20150416.ListIpRoutes
		 * @return {ListIpRoutesResult} Success
		 */
		ListIpRoutes(requestBody: ListIpRoutesRequest): Observable<ListIpRoutesResult> {
			return this.http.post<ListIpRoutesResult>(this.baseUri + '#X-Amz-Target=DirectoryService_20150416.ListIpRoutes', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists the active log subscriptions for the AWS account.
		 * Post #X-Amz-Target=DirectoryService_20150416.ListLogSubscriptions
		 * @return {ListLogSubscriptionsResult} Success
		 */
		ListLogSubscriptions(requestBody: ListLogSubscriptionsRequest): Observable<ListLogSubscriptionsResult> {
			return this.http.post<ListLogSubscriptionsResult>(this.baseUri + '#X-Amz-Target=DirectoryService_20150416.ListLogSubscriptions', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists all schema extensions applied to a Microsoft AD Directory.
		 * Post #X-Amz-Target=DirectoryService_20150416.ListSchemaExtensions
		 * @return {ListSchemaExtensionsResult} Success
		 */
		ListSchemaExtensions(requestBody: ListSchemaExtensionsRequest): Observable<ListSchemaExtensionsResult> {
			return this.http.post<ListSchemaExtensionsResult>(this.baseUri + '#X-Amz-Target=DirectoryService_20150416.ListSchemaExtensions', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists all tags on a directory.
		 * Post #X-Amz-Target=DirectoryService_20150416.ListTagsForResource
		 * @return {ListTagsForResourceResult} Success
		 */
		ListTagsForResource(requestBody: ListTagsForResourceRequest): Observable<ListTagsForResourceResult> {
			return this.http.post<ListTagsForResourceResult>(this.baseUri + '#X-Amz-Target=DirectoryService_20150416.ListTagsForResource', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Registers a certificate for secured LDAP connection.
		 * Post #X-Amz-Target=DirectoryService_20150416.RegisterCertificate
		 * @return {RegisterCertificateResult} Success
		 */
		RegisterCertificate(requestBody: RegisterCertificateRequest): Observable<RegisterCertificateResult> {
			return this.http.post<RegisterCertificateResult>(this.baseUri + '#X-Amz-Target=DirectoryService_20150416.RegisterCertificate', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Associates a directory with an SNS topic. This establishes the directory as a publisher to the specified SNS topic. You can then receive email or text (SMS) messages when the status of your directory changes. You get notified if your directory goes from an Active status to an Impaired or Inoperable status. You also receive a notification when the directory returns to an Active status.
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
		 * Removes tags from a directory.
		 * Post #X-Amz-Target=DirectoryService_20150416.RemoveTagsFromResource
		 * @return {RemoveTagsFromResourceResult} Success
		 */
		RemoveTagsFromResource(requestBody: RemoveTagsFromResourceRequest): Observable<RemoveTagsFromResourceResult> {
			return this.http.post<RemoveTagsFromResourceResult>(this.baseUri + '#X-Amz-Target=DirectoryService_20150416.RemoveTagsFromResource', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Resets the password for any user in your AWS Managed Microsoft AD or Simple AD directory.</p> <p>You can reset the password for any user in your directory with the following exceptions:</p> <ul> <li> <p>For Simple AD, you cannot reset the password for any user that is a member of either the <b>Domain Admins</b> or <b>Enterprise Admins</b> group except for the administrator user.</p> </li> <li> <p>For AWS Managed Microsoft AD, you can only reset the password for a user that is in an OU based off of the NetBIOS name that you typed when you created your directory. For example, you cannot reset the password for a user in the <b>AWS Reserved</b> OU. For more information about the OU structure for an AWS Managed Microsoft AD directory, see <a href="https://docs.aws.amazon.com/directoryservice/latest/admin-guide/ms_ad_getting_started_what_gets_created.html">What Gets Created</a> in the <i>AWS Directory Service Administration Guide</i>.</p> </li> </ul>
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
		 * <p>Shares a specified directory (<code>DirectoryId</code>) in your AWS account (directory owner) with another AWS account (directory consumer). With this operation you can use your directory from any AWS account and from any Amazon VPC within an AWS Region.</p> <p>When you share your AWS Managed Microsoft AD directory, AWS Directory Service creates a shared directory in the directory consumer account. This shared directory contains the metadata to provide access to the directory within the directory owner account. The shared directory is visible in all VPCs in the directory consumer account.</p> <p>The <code>ShareMethod</code> parameter determines whether the specified directory can be shared between AWS accounts inside the same AWS organization (<code>ORGANIZATIONS</code>). It also determines whether you can share the directory with any other AWS account either inside or outside of the organization (<code>HANDSHAKE</code>).</p> <p>The <code>ShareNotes</code> parameter is only used when <code>HANDSHAKE</code> is called, which sends a directory sharing request to the directory consumer. </p>
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
		 * Updates a conditional forwarder that has been set up for your AWS directory.
		 * Post #X-Amz-Target=DirectoryService_20150416.UpdateConditionalForwarder
		 * @return {UpdateConditionalForwarderResult} Success
		 */
		UpdateConditionalForwarder(requestBody: UpdateConditionalForwarderRequest): Observable<UpdateConditionalForwarderResult> {
			return this.http.post<UpdateConditionalForwarderResult>(this.baseUri + '#X-Amz-Target=DirectoryService_20150416.UpdateConditionalForwarder', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
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
		 * Updates the trust that has been set up between your AWS Managed Microsoft AD directory and an on-premises Active Directory.
		 * Post #X-Amz-Target=DirectoryService_20150416.UpdateTrust
		 * @return {UpdateTrustResult} Success
		 */
		UpdateTrust(requestBody: UpdateTrustRequest): Observable<UpdateTrustResult> {
			return this.http.post<UpdateTrustResult>(this.baseUri + '#X-Amz-Target=DirectoryService_20150416.UpdateTrust', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>AWS Directory Service for Microsoft Active Directory allows you to configure and verify trust relationships.</p> <p>This action verifies a trust relationship between your AWS Managed Microsoft AD directory and an external domain.</p>
		 * Post #X-Amz-Target=DirectoryService_20150416.VerifyTrust
		 * @return {VerifyTrustResult} Success
		 */
		VerifyTrust(requestBody: VerifyTrustRequest): Observable<VerifyTrustResult> {
			return this.http.post<VerifyTrustResult>(this.baseUri + '#X-Amz-Target=DirectoryService_20150416.VerifyTrust', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

	export enum AcceptSharedDirectoryX_Amz_Target { DirectoryService_20150416_AcceptSharedDirectory = 0 }

	export enum AddIpRoutesX_Amz_Target { DirectoryService_20150416_AddIpRoutes = 0 }

	export enum AddTagsToResourceX_Amz_Target { DirectoryService_20150416_AddTagsToResource = 0 }

	export enum CancelSchemaExtensionX_Amz_Target { DirectoryService_20150416_CancelSchemaExtension = 0 }

	export enum ConnectDirectoryX_Amz_Target { DirectoryService_20150416_ConnectDirectory = 0 }

	export enum CreateAliasX_Amz_Target { DirectoryService_20150416_CreateAlias = 0 }

	export enum CreateComputerX_Amz_Target { DirectoryService_20150416_CreateComputer = 0 }

	export enum CreateConditionalForwarderX_Amz_Target { DirectoryService_20150416_CreateConditionalForwarder = 0 }

	export enum CreateDirectoryX_Amz_Target { DirectoryService_20150416_CreateDirectory = 0 }

	export enum CreateLogSubscriptionX_Amz_Target { DirectoryService_20150416_CreateLogSubscription = 0 }

	export enum CreateMicrosoftADX_Amz_Target { DirectoryService_20150416_CreateMicrosoftAD = 0 }

	export enum CreateSnapshotX_Amz_Target { DirectoryService_20150416_CreateSnapshot = 0 }

	export enum CreateTrustX_Amz_Target { DirectoryService_20150416_CreateTrust = 0 }

	export enum DeleteConditionalForwarderX_Amz_Target { DirectoryService_20150416_DeleteConditionalForwarder = 0 }

	export enum DeleteDirectoryX_Amz_Target { DirectoryService_20150416_DeleteDirectory = 0 }

	export enum DeleteLogSubscriptionX_Amz_Target { DirectoryService_20150416_DeleteLogSubscription = 0 }

	export enum DeleteSnapshotX_Amz_Target { DirectoryService_20150416_DeleteSnapshot = 0 }

	export enum DeleteTrustX_Amz_Target { DirectoryService_20150416_DeleteTrust = 0 }

	export enum DeregisterCertificateX_Amz_Target { DirectoryService_20150416_DeregisterCertificate = 0 }

	export enum DeregisterEventTopicX_Amz_Target { DirectoryService_20150416_DeregisterEventTopic = 0 }

	export enum DescribeCertificateX_Amz_Target { DirectoryService_20150416_DescribeCertificate = 0 }

	export enum DescribeConditionalForwardersX_Amz_Target { DirectoryService_20150416_DescribeConditionalForwarders = 0 }

	export enum DescribeDirectoriesX_Amz_Target { DirectoryService_20150416_DescribeDirectories = 0 }

	export enum DescribeDomainControllersX_Amz_Target { DirectoryService_20150416_DescribeDomainControllers = 0 }

	export enum DescribeEventTopicsX_Amz_Target { DirectoryService_20150416_DescribeEventTopics = 0 }

	export enum DescribeLDAPSSettingsX_Amz_Target { DirectoryService_20150416_DescribeLDAPSSettings = 0 }

	export enum DescribeSharedDirectoriesX_Amz_Target { DirectoryService_20150416_DescribeSharedDirectories = 0 }

	export enum DescribeSnapshotsX_Amz_Target { DirectoryService_20150416_DescribeSnapshots = 0 }

	export enum DescribeTrustsX_Amz_Target { DirectoryService_20150416_DescribeTrusts = 0 }

	export enum DisableLDAPSX_Amz_Target { DirectoryService_20150416_DisableLDAPS = 0 }

	export enum DisableRadiusX_Amz_Target { DirectoryService_20150416_DisableRadius = 0 }

	export enum DisableSsoX_Amz_Target { DirectoryService_20150416_DisableSso = 0 }

	export enum EnableLDAPSX_Amz_Target { DirectoryService_20150416_EnableLDAPS = 0 }

	export enum EnableRadiusX_Amz_Target { DirectoryService_20150416_EnableRadius = 0 }

	export enum EnableSsoX_Amz_Target { DirectoryService_20150416_EnableSso = 0 }

	export enum GetDirectoryLimitsX_Amz_Target { DirectoryService_20150416_GetDirectoryLimits = 0 }

	export enum GetSnapshotLimitsX_Amz_Target { DirectoryService_20150416_GetSnapshotLimits = 0 }

	export enum ListCertificatesX_Amz_Target { DirectoryService_20150416_ListCertificates = 0 }

	export enum ListIpRoutesX_Amz_Target { DirectoryService_20150416_ListIpRoutes = 0 }

	export enum ListLogSubscriptionsX_Amz_Target { DirectoryService_20150416_ListLogSubscriptions = 0 }

	export enum ListSchemaExtensionsX_Amz_Target { DirectoryService_20150416_ListSchemaExtensions = 0 }

	export enum ListTagsForResourceX_Amz_Target { DirectoryService_20150416_ListTagsForResource = 0 }

	export enum RegisterCertificateX_Amz_Target { DirectoryService_20150416_RegisterCertificate = 0 }

	export enum RegisterEventTopicX_Amz_Target { DirectoryService_20150416_RegisterEventTopic = 0 }

	export enum RejectSharedDirectoryX_Amz_Target { DirectoryService_20150416_RejectSharedDirectory = 0 }

	export enum RemoveIpRoutesX_Amz_Target { DirectoryService_20150416_RemoveIpRoutes = 0 }

	export enum RemoveTagsFromResourceX_Amz_Target { DirectoryService_20150416_RemoveTagsFromResource = 0 }

	export enum ResetUserPasswordX_Amz_Target { DirectoryService_20150416_ResetUserPassword = 0 }

	export enum RestoreFromSnapshotX_Amz_Target { DirectoryService_20150416_RestoreFromSnapshot = 0 }

	export enum ShareDirectoryX_Amz_Target { DirectoryService_20150416_ShareDirectory = 0 }

	export enum StartSchemaExtensionX_Amz_Target { DirectoryService_20150416_StartSchemaExtension = 0 }

	export enum UnshareDirectoryX_Amz_Target { DirectoryService_20150416_UnshareDirectory = 0 }

	export enum UpdateConditionalForwarderX_Amz_Target { DirectoryService_20150416_UpdateConditionalForwarder = 0 }

	export enum UpdateNumberOfDomainControllersX_Amz_Target { DirectoryService_20150416_UpdateNumberOfDomainControllers = 0 }

	export enum UpdateRadiusX_Amz_Target { DirectoryService_20150416_UpdateRadius = 0 }

	export enum UpdateTrustX_Amz_Target { DirectoryService_20150416_UpdateTrust = 0 }

	export enum VerifyTrustX_Amz_Target { DirectoryService_20150416_VerifyTrust = 0 }

}

