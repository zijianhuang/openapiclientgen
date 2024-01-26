import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface CreateAccessResponse {

		/** Required */
		ServerId: string;

		/** Required */
		ExternalId: string;
	}
	export interface CreateAccessResponseFormProperties {

		/** Required */
		ServerId: FormControl<string | null | undefined>,

		/** Required */
		ExternalId: FormControl<string | null | undefined>,
	}
	export function CreateCreateAccessResponseFormGroup() {
		return new FormGroup<CreateAccessResponseFormProperties>({
			ServerId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ExternalId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateAccessRequest {
		HomeDirectory?: string;
		HomeDirectoryType?: HomeDirectoryType;
		HomeDirectoryMappings?: Array<HomeDirectoryMapEntry>;
		Policy?: string;

		/** The full POSIX identity, including user ID (<code>Uid</code>), group ID (<code>Gid</code>), and any secondary groups IDs (<code>SecondaryGids</code>), that controls your users' access to your Amazon EFS file systems. The POSIX permissions that are set on files and directories in your file system determine the level of access your users get when transferring files into and out of your Amazon EFS file systems. */
		PosixProfile?: PosixProfile;

		/** Required */
		Role: string;

		/** Required */
		ServerId: string;

		/** Required */
		ExternalId: string;
	}
	export interface CreateAccessRequestFormProperties {
		HomeDirectory: FormControl<string | null | undefined>,
		HomeDirectoryType: FormControl<HomeDirectoryType | null | undefined>,
		Policy: FormControl<string | null | undefined>,

		/** Required */
		Role: FormControl<string | null | undefined>,

		/** Required */
		ServerId: FormControl<string | null | undefined>,

		/** Required */
		ExternalId: FormControl<string | null | undefined>,
	}
	export function CreateCreateAccessRequestFormGroup() {
		return new FormGroup<CreateAccessRequestFormProperties>({
			HomeDirectory: new FormControl<string | null | undefined>(undefined),
			HomeDirectoryType: new FormControl<HomeDirectoryType | null | undefined>(undefined),
			Policy: new FormControl<string | null | undefined>(undefined),
			Role: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ServerId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ExternalId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum HomeDirectoryType { PATH = 0, LOGICAL = 1 }


	/** <p>Represents an object that contains entries and targets for <code>HomeDirectoryMappings</code>.</p> <p>The following is an <code>Entry</code> and <code>Target</code> pair example for <code>chroot</code>.</p> <p> <code>[ { "Entry": "/", "Target": "/bucket_name/home/mydirectory" } ]</code> </p> */
	export interface HomeDirectoryMapEntry {

		/** Required */
		Entry: string;

		/** Required */
		Target: string;
	}

	/** <p>Represents an object that contains entries and targets for <code>HomeDirectoryMappings</code>.</p> <p>The following is an <code>Entry</code> and <code>Target</code> pair example for <code>chroot</code>.</p> <p> <code>[ { "Entry": "/", "Target": "/bucket_name/home/mydirectory" } ]</code> </p> */
	export interface HomeDirectoryMapEntryFormProperties {

		/** Required */
		Entry: FormControl<string | null | undefined>,

		/** Required */
		Target: FormControl<string | null | undefined>,
	}
	export function CreateHomeDirectoryMapEntryFormGroup() {
		return new FormGroup<HomeDirectoryMapEntryFormProperties>({
			Entry: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Target: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The full POSIX identity, including user ID (<code>Uid</code>), group ID (<code>Gid</code>), and any secondary groups IDs (<code>SecondaryGids</code>), that controls your users' access to your Amazon EFS file systems. The POSIX permissions that are set on files and directories in your file system determine the level of access your users get when transferring files into and out of your Amazon EFS file systems. */
	export interface PosixProfile {

		/** Required */
		Uid: number;

		/** Required */
		Gid: number;
		SecondaryGids?: Array<number> | null;
	}

	/** The full POSIX identity, including user ID (<code>Uid</code>), group ID (<code>Gid</code>), and any secondary groups IDs (<code>SecondaryGids</code>), that controls your users' access to your Amazon EFS file systems. The POSIX permissions that are set on files and directories in your file system determine the level of access your users get when transferring files into and out of your Amazon EFS file systems. */
	export interface PosixProfileFormProperties {

		/** Required */
		Uid: FormControl<number | null | undefined>,

		/** Required */
		Gid: FormControl<number | null | undefined>,
	}
	export function CreatePosixProfileFormGroup() {
		return new FormGroup<PosixProfileFormProperties>({
			Uid: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			Gid: new FormControl<number | null | undefined>(undefined, [Validators.required]),
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

	export interface InternalServiceError {
	}
	export interface InternalServiceErrorFormProperties {
	}
	export function CreateInternalServiceErrorFormGroup() {
		return new FormGroup<InternalServiceErrorFormProperties>({
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

	export interface ResourceExistsException {
	}
	export interface ResourceExistsExceptionFormProperties {
	}
	export function CreateResourceExistsExceptionFormGroup() {
		return new FormGroup<ResourceExistsExceptionFormProperties>({
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

	export interface CreateAgreementResponse {

		/** Required */
		AgreementId: string;
	}
	export interface CreateAgreementResponseFormProperties {

		/** Required */
		AgreementId: FormControl<string | null | undefined>,
	}
	export function CreateCreateAgreementResponseFormGroup() {
		return new FormGroup<CreateAgreementResponseFormProperties>({
			AgreementId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateAgreementRequest {
		Description?: string;

		/** Required */
		ServerId: string;

		/** Required */
		LocalProfileId: string;

		/** Required */
		PartnerProfileId: string;

		/** Required */
		BaseDirectory: string;

		/** Required */
		AccessRole: string;
		Status?: AgreementStatusType;
		Tags?: Array<Tag>;
	}
	export interface CreateAgreementRequestFormProperties {
		Description: FormControl<string | null | undefined>,

		/** Required */
		ServerId: FormControl<string | null | undefined>,

		/** Required */
		LocalProfileId: FormControl<string | null | undefined>,

		/** Required */
		PartnerProfileId: FormControl<string | null | undefined>,

		/** Required */
		BaseDirectory: FormControl<string | null | undefined>,

		/** Required */
		AccessRole: FormControl<string | null | undefined>,
		Status: FormControl<AgreementStatusType | null | undefined>,
	}
	export function CreateCreateAgreementRequestFormGroup() {
		return new FormGroup<CreateAgreementRequestFormProperties>({
			Description: new FormControl<string | null | undefined>(undefined),
			ServerId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			LocalProfileId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			PartnerProfileId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			BaseDirectory: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			AccessRole: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Status: new FormControl<AgreementStatusType | null | undefined>(undefined),
		});

	}

	export enum AgreementStatusType { ACTIVE = 0, INACTIVE = 1 }


	/** Creates a key-value pair for a specific resource. Tags are metadata that you can use to search for and group a resource for various purposes. You can apply tags to servers, users, and roles. A tag key can take more than one value. For example, to group servers for accounting purposes, you might create a tag called <code>Group</code> and assign the values <code>Research</code> and <code>Accounting</code> to that group. */
	export interface Tag {

		/** Required */
		Key: string;

		/** Required */
		Value: string;
	}

	/** Creates a key-value pair for a specific resource. Tags are metadata that you can use to search for and group a resource for various purposes. You can apply tags to servers, users, and roles. A tag key can take more than one value. For example, to group servers for accounting purposes, you might create a tag called <code>Group</code> and assign the values <code>Research</code> and <code>Accounting</code> to that group. */
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

	export interface ThrottlingException {
	}
	export interface ThrottlingExceptionFormProperties {
	}
	export function CreateThrottlingExceptionFormGroup() {
		return new FormGroup<ThrottlingExceptionFormProperties>({
		});

	}

	export interface CreateConnectorResponse {

		/** Required */
		ConnectorId: string;
	}
	export interface CreateConnectorResponseFormProperties {

		/** Required */
		ConnectorId: FormControl<string | null | undefined>,
	}
	export function CreateCreateConnectorResponseFormGroup() {
		return new FormGroup<CreateConnectorResponseFormProperties>({
			ConnectorId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateConnectorRequest {

		/** Required */
		Url: string;
		As2Config?: As2ConnectorConfig;

		/** Required */
		AccessRole: string;
		LoggingRole?: string;
		Tags?: Array<Tag>;
		SftpConfig?: SftpConnectorConfig;
	}
	export interface CreateConnectorRequestFormProperties {

		/** Required */
		Url: FormControl<string | null | undefined>,

		/** Required */
		AccessRole: FormControl<string | null | undefined>,
		LoggingRole: FormControl<string | null | undefined>,
	}
	export function CreateCreateConnectorRequestFormGroup() {
		return new FormGroup<CreateConnectorRequestFormProperties>({
			Url: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			AccessRole: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			LoggingRole: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains the details for an AS2 connector object. The connector object is used for AS2 outbound processes, to connect the Transfer Family customer with the trading partner. */
	export interface As2ConnectorConfig {
		LocalProfileId?: string;
		PartnerProfileId?: string;
		MessageSubject?: string;
		Compression?: CompressionEnum;
		EncryptionAlgorithm?: EncryptionAlg;
		SigningAlgorithm?: SigningAlg;
		MdnSigningAlgorithm?: MdnSigningAlg;
		MdnResponse?: MdnResponse;
		BasicAuthSecretId?: string;
	}

	/** Contains the details for an AS2 connector object. The connector object is used for AS2 outbound processes, to connect the Transfer Family customer with the trading partner. */
	export interface As2ConnectorConfigFormProperties {
		LocalProfileId: FormControl<string | null | undefined>,
		PartnerProfileId: FormControl<string | null | undefined>,
		MessageSubject: FormControl<string | null | undefined>,
		Compression: FormControl<CompressionEnum | null | undefined>,
		EncryptionAlgorithm: FormControl<EncryptionAlg | null | undefined>,
		SigningAlgorithm: FormControl<SigningAlg | null | undefined>,
		MdnSigningAlgorithm: FormControl<MdnSigningAlg | null | undefined>,
		MdnResponse: FormControl<MdnResponse | null | undefined>,
		BasicAuthSecretId: FormControl<string | null | undefined>,
	}
	export function CreateAs2ConnectorConfigFormGroup() {
		return new FormGroup<As2ConnectorConfigFormProperties>({
			LocalProfileId: new FormControl<string | null | undefined>(undefined),
			PartnerProfileId: new FormControl<string | null | undefined>(undefined),
			MessageSubject: new FormControl<string | null | undefined>(undefined),
			Compression: new FormControl<CompressionEnum | null | undefined>(undefined),
			EncryptionAlgorithm: new FormControl<EncryptionAlg | null | undefined>(undefined),
			SigningAlgorithm: new FormControl<SigningAlg | null | undefined>(undefined),
			MdnSigningAlgorithm: new FormControl<MdnSigningAlg | null | undefined>(undefined),
			MdnResponse: new FormControl<MdnResponse | null | undefined>(undefined),
			BasicAuthSecretId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum CompressionEnum { ZLIB = 0, DISABLED = 1 }

	export enum EncryptionAlg { AES128_CBC = 0, AES192_CBC = 1, AES256_CBC = 2, NONE = 3 }

	export enum SigningAlg { SHA256 = 0, SHA384 = 1, SHA512 = 2, SHA1 = 3, NONE = 4 }

	export enum MdnSigningAlg { SHA256 = 0, SHA384 = 1, SHA512 = 2, SHA1 = 3, NONE = 4, DEFAULT = 5 }

	export enum MdnResponse { SYNC = 0, NONE = 1 }


	/** Contains the details for an SFTP connector object. The connector object is used for transferring files to and from a partner's SFTP server. */
	export interface SftpConnectorConfig {
		UserSecretId?: string;
		TrustedHostKeys?: Array<string>;
	}

	/** Contains the details for an SFTP connector object. The connector object is used for transferring files to and from a partner's SFTP server. */
	export interface SftpConnectorConfigFormProperties {
		UserSecretId: FormControl<string | null | undefined>,
	}
	export function CreateSftpConnectorConfigFormGroup() {
		return new FormGroup<SftpConnectorConfigFormProperties>({
			UserSecretId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateProfileResponse {

		/** Required */
		ProfileId: string;
	}
	export interface CreateProfileResponseFormProperties {

		/** Required */
		ProfileId: FormControl<string | null | undefined>,
	}
	export function CreateCreateProfileResponseFormGroup() {
		return new FormGroup<CreateProfileResponseFormProperties>({
			ProfileId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateProfileRequest {

		/** Required */
		As2Id: string;

		/** Required */
		ProfileType: ProfileType;
		CertificateIds?: Array<string>;
		Tags?: Array<Tag>;
	}
	export interface CreateProfileRequestFormProperties {

		/** Required */
		As2Id: FormControl<string | null | undefined>,

		/** Required */
		ProfileType: FormControl<ProfileType | null | undefined>,
	}
	export function CreateCreateProfileRequestFormGroup() {
		return new FormGroup<CreateProfileRequestFormProperties>({
			As2Id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ProfileType: new FormControl<ProfileType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum ProfileType { LOCAL = 0, PARTNER = 1 }

	export interface CreateServerResponse {

		/** Required */
		ServerId: string;
	}
	export interface CreateServerResponseFormProperties {

		/** Required */
		ServerId: FormControl<string | null | undefined>,
	}
	export function CreateCreateServerResponseFormGroup() {
		return new FormGroup<CreateServerResponseFormProperties>({
			ServerId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateServerRequest {
		Certificate?: string;
		Domain?: Domain;
		EndpointDetails?: EndpointDetails;
		EndpointType?: EndpointType;
		HostKey?: string;
		IdentityProviderDetails?: IdentityProviderDetails;
		IdentityProviderType?: IdentityProviderType;
		LoggingRole?: string;
		PostAuthenticationLoginBanner?: string;
		PreAuthenticationLoginBanner?: string;
		Protocols?: Array<Protocol>;
		ProtocolDetails?: ProtocolDetails;
		SecurityPolicyName?: string;
		Tags?: Array<Tag>;
		WorkflowDetails?: WorkflowDetails;
		StructuredLogDestinations?: Array<string>;
	}
	export interface CreateServerRequestFormProperties {
		Certificate: FormControl<string | null | undefined>,
		Domain: FormControl<Domain | null | undefined>,
		EndpointType: FormControl<EndpointType | null | undefined>,
		HostKey: FormControl<string | null | undefined>,
		IdentityProviderType: FormControl<IdentityProviderType | null | undefined>,
		LoggingRole: FormControl<string | null | undefined>,
		PostAuthenticationLoginBanner: FormControl<string | null | undefined>,
		PreAuthenticationLoginBanner: FormControl<string | null | undefined>,
		SecurityPolicyName: FormControl<string | null | undefined>,
	}
	export function CreateCreateServerRequestFormGroup() {
		return new FormGroup<CreateServerRequestFormProperties>({
			Certificate: new FormControl<string | null | undefined>(undefined),
			Domain: new FormControl<Domain | null | undefined>(undefined),
			EndpointType: new FormControl<EndpointType | null | undefined>(undefined),
			HostKey: new FormControl<string | null | undefined>(undefined),
			IdentityProviderType: new FormControl<IdentityProviderType | null | undefined>(undefined),
			LoggingRole: new FormControl<string | null | undefined>(undefined),
			PostAuthenticationLoginBanner: new FormControl<string | null | undefined>(undefined),
			PreAuthenticationLoginBanner: new FormControl<string | null | undefined>(undefined),
			SecurityPolicyName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum Domain { S3 = 0, EFS = 1 }


	/** <p>The virtual private cloud (VPC) endpoint settings that are configured for your file transfer protocol-enabled server. With a VPC endpoint, you can restrict access to your server and resources only within your VPC. To control incoming internet traffic, invoke the <code>UpdateServer</code> API and attach an Elastic IP address to your server's endpoint.</p> <note> <p> After May 19, 2021, you won't be able to create a server using <code>EndpointType=VPC_ENDPOINT</code> in your Amazon Web Servicesaccount if your account hasn't already done so before May 19, 2021. If you have already created servers with <code>EndpointType=VPC_ENDPOINT</code> in your Amazon Web Servicesaccount on or before May 19, 2021, you will not be affected. After this date, use <code>EndpointType</code>=<code>VPC</code>.</p> <p>For more information, see https://docs.aws.amazon.com/transfer/latest/userguide/create-server-in-vpc.html#deprecate-vpc-endpoint.</p> </note> */
	export interface EndpointDetails {
		AddressAllocationIds?: Array<string>;
		SubnetIds?: Array<string>;
		VpcEndpointId?: string;
		VpcId?: string;
		SecurityGroupIds?: Array<string>;
	}

	/** <p>The virtual private cloud (VPC) endpoint settings that are configured for your file transfer protocol-enabled server. With a VPC endpoint, you can restrict access to your server and resources only within your VPC. To control incoming internet traffic, invoke the <code>UpdateServer</code> API and attach an Elastic IP address to your server's endpoint.</p> <note> <p> After May 19, 2021, you won't be able to create a server using <code>EndpointType=VPC_ENDPOINT</code> in your Amazon Web Servicesaccount if your account hasn't already done so before May 19, 2021. If you have already created servers with <code>EndpointType=VPC_ENDPOINT</code> in your Amazon Web Servicesaccount on or before May 19, 2021, you will not be affected. After this date, use <code>EndpointType</code>=<code>VPC</code>.</p> <p>For more information, see https://docs.aws.amazon.com/transfer/latest/userguide/create-server-in-vpc.html#deprecate-vpc-endpoint.</p> </note> */
	export interface EndpointDetailsFormProperties {
		VpcEndpointId: FormControl<string | null | undefined>,
		VpcId: FormControl<string | null | undefined>,
	}
	export function CreateEndpointDetailsFormGroup() {
		return new FormGroup<EndpointDetailsFormProperties>({
			VpcEndpointId: new FormControl<string | null | undefined>(undefined),
			VpcId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum EndpointType { PUBLIC = 0, VPC = 1, VPC_ENDPOINT = 2 }


	/** Returns information related to the type of user authentication that is in use for a file transfer protocol-enabled server's users. A server can have only one method of authentication. */
	export interface IdentityProviderDetails {
		Url?: string;
		InvocationRole?: string;
		DirectoryId?: string;
		Function?: string;
		SftpAuthenticationMethods?: SftpAuthenticationMethods;
	}

	/** Returns information related to the type of user authentication that is in use for a file transfer protocol-enabled server's users. A server can have only one method of authentication. */
	export interface IdentityProviderDetailsFormProperties {
		Url: FormControl<string | null | undefined>,
		InvocationRole: FormControl<string | null | undefined>,
		DirectoryId: FormControl<string | null | undefined>,
		Function: FormControl<string | null | undefined>,
		SftpAuthenticationMethods: FormControl<SftpAuthenticationMethods | null | undefined>,
	}
	export function CreateIdentityProviderDetailsFormGroup() {
		return new FormGroup<IdentityProviderDetailsFormProperties>({
			Url: new FormControl<string | null | undefined>(undefined),
			InvocationRole: new FormControl<string | null | undefined>(undefined),
			DirectoryId: new FormControl<string | null | undefined>(undefined),
			Function: new FormControl<string | null | undefined>(undefined),
			SftpAuthenticationMethods: new FormControl<SftpAuthenticationMethods | null | undefined>(undefined),
		});

	}

	export enum SftpAuthenticationMethods { PASSWORD = 0, PUBLIC_KEY = 1, PUBLIC_KEY_OR_PASSWORD = 2, PUBLIC_KEY_AND_PASSWORD = 3 }


	/** <p>The mode of authentication for a server. The default value is <code>SERVICE_MANAGED</code>, which allows you to store and access user credentials within the Transfer Family service.</p> <p>Use <code>AWS_DIRECTORY_SERVICE</code> to provide access to Active Directory groups in Directory Service for Microsoft Active Directory or Microsoft Active Directory in your on-premises environment or in Amazon Web Services using AD Connector. This option also requires you to provide a Directory ID by using the <code>IdentityProviderDetails</code> parameter.</p> <p>Use the <code>API_GATEWAY</code> value to integrate with an identity provider of your choosing. The <code>API_GATEWAY</code> setting requires you to provide an Amazon API Gateway endpoint URL to call for authentication by using the <code>IdentityProviderDetails</code> parameter.</p> <p>Use the <code>AWS_LAMBDA</code> value to directly use an Lambda function as your identity provider. If you choose this value, you must specify the ARN for the Lambda function in the <code>Function</code> parameter for the <code>IdentityProviderDetails</code> data type.</p> */
	export enum IdentityProviderType { SERVICE_MANAGED = 0, API_GATEWAY = 1, AWS_DIRECTORY_SERVICE = 2, AWS_LAMBDA = 3 }

	export enum Protocol { SFTP = 0, FTP = 1, FTPS = 2, AS2 = 3 }


	/**  The protocol settings that are configured for your server.  */
	export interface ProtocolDetails {
		PassiveIp?: string;
		TlsSessionResumptionMode?: TlsSessionResumptionMode;
		SetStatOption?: SetStatOption;
		As2Transports?: Array<As2Transport>;
	}

	/**  The protocol settings that are configured for your server.  */
	export interface ProtocolDetailsFormProperties {
		PassiveIp: FormControl<string | null | undefined>,
		TlsSessionResumptionMode: FormControl<TlsSessionResumptionMode | null | undefined>,
		SetStatOption: FormControl<SetStatOption | null | undefined>,
	}
	export function CreateProtocolDetailsFormGroup() {
		return new FormGroup<ProtocolDetailsFormProperties>({
			PassiveIp: new FormControl<string | null | undefined>(undefined),
			TlsSessionResumptionMode: new FormControl<TlsSessionResumptionMode | null | undefined>(undefined),
			SetStatOption: new FormControl<SetStatOption | null | undefined>(undefined),
		});

	}

	export enum TlsSessionResumptionMode { DISABLED = 0, ENABLED = 1, ENFORCED = 2 }

	export enum SetStatOption { DEFAULT = 0, ENABLE_NO_OP = 1 }

	export enum As2Transport { HTTP = 0 }


	/** Container for the <code>WorkflowDetail</code> data type. It is used by actions that trigger a workflow to begin execution. */
	export interface WorkflowDetails {
		OnUpload?: Array<WorkflowDetail>;
		OnPartialUpload?: Array<WorkflowDetail>;
	}

	/** Container for the <code>WorkflowDetail</code> data type. It is used by actions that trigger a workflow to begin execution. */
	export interface WorkflowDetailsFormProperties {
	}
	export function CreateWorkflowDetailsFormGroup() {
		return new FormGroup<WorkflowDetailsFormProperties>({
		});

	}


	/** <p>Specifies the workflow ID for the workflow to assign and the execution role that's used for executing the workflow.</p> <p>In addition to a workflow to execute when a file is uploaded completely, <code>WorkflowDetails</code> can also contain a workflow ID (and execution role) for a workflow to execute on partial upload. A partial upload occurs when the server session disconnects while the file is still being uploaded.</p> */
	export interface WorkflowDetail {

		/** Required */
		WorkflowId: string;

		/** Required */
		ExecutionRole: string;
	}

	/** <p>Specifies the workflow ID for the workflow to assign and the execution role that's used for executing the workflow.</p> <p>In addition to a workflow to execute when a file is uploaded completely, <code>WorkflowDetails</code> can also contain a workflow ID (and execution role) for a workflow to execute on partial upload. A partial upload occurs when the server session disconnects while the file is still being uploaded.</p> */
	export interface WorkflowDetailFormProperties {

		/** Required */
		WorkflowId: FormControl<string | null | undefined>,

		/** Required */
		ExecutionRole: FormControl<string | null | undefined>,
	}
	export function CreateWorkflowDetailFormGroup() {
		return new FormGroup<WorkflowDetailFormProperties>({
			WorkflowId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ExecutionRole: new FormControl<string | null | undefined>(undefined, [Validators.required]),
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

	export interface CreateUserResponse {

		/** Required */
		ServerId: string;

		/** Required */
		UserName: string;
	}
	export interface CreateUserResponseFormProperties {

		/** Required */
		ServerId: FormControl<string | null | undefined>,

		/** Required */
		UserName: FormControl<string | null | undefined>,
	}
	export function CreateCreateUserResponseFormGroup() {
		return new FormGroup<CreateUserResponseFormProperties>({
			ServerId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			UserName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateUserRequest {
		HomeDirectory?: string;
		HomeDirectoryType?: HomeDirectoryType;
		HomeDirectoryMappings?: Array<HomeDirectoryMapEntry>;
		Policy?: string;
		PosixProfile?: PosixProfile;

		/** Required */
		Role: string;

		/** Required */
		ServerId: string;
		SshPublicKeyBody?: string;
		Tags?: Array<Tag>;

		/** Required */
		UserName: string;
	}
	export interface CreateUserRequestFormProperties {
		HomeDirectory: FormControl<string | null | undefined>,
		HomeDirectoryType: FormControl<HomeDirectoryType | null | undefined>,
		Policy: FormControl<string | null | undefined>,

		/** Required */
		Role: FormControl<string | null | undefined>,

		/** Required */
		ServerId: FormControl<string | null | undefined>,
		SshPublicKeyBody: FormControl<string | null | undefined>,

		/** Required */
		UserName: FormControl<string | null | undefined>,
	}
	export function CreateCreateUserRequestFormGroup() {
		return new FormGroup<CreateUserRequestFormProperties>({
			HomeDirectory: new FormControl<string | null | undefined>(undefined),
			HomeDirectoryType: new FormControl<HomeDirectoryType | null | undefined>(undefined),
			Policy: new FormControl<string | null | undefined>(undefined),
			Role: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ServerId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			SshPublicKeyBody: new FormControl<string | null | undefined>(undefined),
			UserName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateWorkflowResponse {

		/** Required */
		WorkflowId: string;
	}
	export interface CreateWorkflowResponseFormProperties {

		/** Required */
		WorkflowId: FormControl<string | null | undefined>,
	}
	export function CreateCreateWorkflowResponseFormGroup() {
		return new FormGroup<CreateWorkflowResponseFormProperties>({
			WorkflowId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateWorkflowRequest {
		Description?: string;

		/** Required */
		Steps: Array<WorkflowStep>;
		OnExceptionSteps?: Array<WorkflowStep>;
		Tags?: Array<Tag>;
	}
	export interface CreateWorkflowRequestFormProperties {
		Description: FormControl<string | null | undefined>,
	}
	export function CreateCreateWorkflowRequestFormGroup() {
		return new FormGroup<CreateWorkflowRequestFormProperties>({
			Description: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The basic building block of a workflow. */
	export interface WorkflowStep {
		Type?: WorkflowStepType;
		CopyStepDetails?: CopyStepDetails;
		CustomStepDetails?: CustomStepDetails;
		DeleteStepDetails?: DeleteStepDetails;
		TagStepDetails?: TagStepDetails;
		DecryptStepDetails?: DecryptStepDetails;
	}

	/** The basic building block of a workflow. */
	export interface WorkflowStepFormProperties {
		Type: FormControl<WorkflowStepType | null | undefined>,
	}
	export function CreateWorkflowStepFormGroup() {
		return new FormGroup<WorkflowStepFormProperties>({
			Type: new FormControl<WorkflowStepType | null | undefined>(undefined),
		});

	}

	export enum WorkflowStepType { COPY = 0, CUSTOM = 1, TAG = 2, DELETE = 3, DECRYPT = 4 }


	/** Each step type has its own <code>StepDetails</code> structure. */
	export interface CopyStepDetails {
		Name?: string;
		DestinationFileLocation?: InputFileLocation;
		OverwriteExisting?: OverwriteExisting;
		SourceFileLocation?: string;
	}

	/** Each step type has its own <code>StepDetails</code> structure. */
	export interface CopyStepDetailsFormProperties {
		Name: FormControl<string | null | undefined>,
		OverwriteExisting: FormControl<OverwriteExisting | null | undefined>,
		SourceFileLocation: FormControl<string | null | undefined>,
	}
	export function CreateCopyStepDetailsFormGroup() {
		return new FormGroup<CopyStepDetailsFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
			OverwriteExisting: new FormControl<OverwriteExisting | null | undefined>(undefined),
			SourceFileLocation: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Specifies the location for the file that's being processed. */
	export interface InputFileLocation {
		S3FileLocation?: S3InputFileLocation;
		EfsFileLocation?: EfsFileLocation;
	}

	/** Specifies the location for the file that's being processed. */
	export interface InputFileLocationFormProperties {
	}
	export function CreateInputFileLocationFormGroup() {
		return new FormGroup<InputFileLocationFormProperties>({
		});

	}


	/** <p>Specifies the customer input Amazon S3 file location. If it is used inside <code>copyStepDetails.DestinationFileLocation</code>, it should be the S3 copy destination.</p> <p> You need to provide the bucket and key. The key can represent either a path or a file. This is determined by whether or not you end the key value with the forward slash (/) character. If the final character is "/", then your file is copied to the folder, and its name does not change. If, rather, the final character is alphanumeric, your uploaded file is renamed to the path value. In this case, if a file with that name already exists, it is overwritten. </p> <p>For example, if your path is <code>shared-files/bob/</code>, your uploaded files are copied to the <code>shared-files/bob/</code>, folder. If your path is <code>shared-files/today</code>, each uploaded file is copied to the <code>shared-files</code> folder and named <code>today</code>: each upload overwrites the previous version of the <i>bob</i> file.</p> */
	export interface S3InputFileLocation {
		Bucket?: string;
		Key?: string;
	}

	/** <p>Specifies the customer input Amazon S3 file location. If it is used inside <code>copyStepDetails.DestinationFileLocation</code>, it should be the S3 copy destination.</p> <p> You need to provide the bucket and key. The key can represent either a path or a file. This is determined by whether or not you end the key value with the forward slash (/) character. If the final character is "/", then your file is copied to the folder, and its name does not change. If, rather, the final character is alphanumeric, your uploaded file is renamed to the path value. In this case, if a file with that name already exists, it is overwritten. </p> <p>For example, if your path is <code>shared-files/bob/</code>, your uploaded files are copied to the <code>shared-files/bob/</code>, folder. If your path is <code>shared-files/today</code>, each uploaded file is copied to the <code>shared-files</code> folder and named <code>today</code>: each upload overwrites the previous version of the <i>bob</i> file.</p> */
	export interface S3InputFileLocationFormProperties {
		Bucket: FormControl<string | null | undefined>,
		Key: FormControl<string | null | undefined>,
	}
	export function CreateS3InputFileLocationFormGroup() {
		return new FormGroup<S3InputFileLocationFormProperties>({
			Bucket: new FormControl<string | null | undefined>(undefined),
			Key: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** <p>Specifies the details for the file location for the file that's being used in the workflow. Only applicable if you are using Amazon Elastic File Systems (Amazon EFS) for storage.</p> <p> </p> */
	export interface EfsFileLocation {
		FileSystemId?: string;
		Path?: string;
	}

	/** <p>Specifies the details for the file location for the file that's being used in the workflow. Only applicable if you are using Amazon Elastic File Systems (Amazon EFS) for storage.</p> <p> </p> */
	export interface EfsFileLocationFormProperties {
		FileSystemId: FormControl<string | null | undefined>,
		Path: FormControl<string | null | undefined>,
	}
	export function CreateEfsFileLocationFormGroup() {
		return new FormGroup<EfsFileLocationFormProperties>({
			FileSystemId: new FormControl<string | null | undefined>(undefined),
			Path: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum OverwriteExisting { TRUE = 0, FALSE = 1 }


	/** Each step type has its own <code>StepDetails</code> structure. */
	export interface CustomStepDetails {
		Name?: string;
		Target?: string;
		TimeoutSeconds?: number | null;
		SourceFileLocation?: string;
	}

	/** Each step type has its own <code>StepDetails</code> structure. */
	export interface CustomStepDetailsFormProperties {
		Name: FormControl<string | null | undefined>,
		Target: FormControl<string | null | undefined>,
		TimeoutSeconds: FormControl<number | null | undefined>,
		SourceFileLocation: FormControl<string | null | undefined>,
	}
	export function CreateCustomStepDetailsFormGroup() {
		return new FormGroup<CustomStepDetailsFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
			Target: new FormControl<string | null | undefined>(undefined),
			TimeoutSeconds: new FormControl<number | null | undefined>(undefined),
			SourceFileLocation: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The name of the step, used to identify the delete step. */
	export interface DeleteStepDetails {
		Name?: string;
		SourceFileLocation?: string;
	}

	/** The name of the step, used to identify the delete step. */
	export interface DeleteStepDetailsFormProperties {
		Name: FormControl<string | null | undefined>,
		SourceFileLocation: FormControl<string | null | undefined>,
	}
	export function CreateDeleteStepDetailsFormGroup() {
		return new FormGroup<DeleteStepDetailsFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
			SourceFileLocation: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** <p>Each step type has its own <code>StepDetails</code> structure.</p> <p>The key/value pairs used to tag a file during the execution of a workflow step.</p> */
	export interface TagStepDetails {
		Name?: string;
		Tags?: Array<S3Tag>;
		SourceFileLocation?: string;
	}

	/** <p>Each step type has its own <code>StepDetails</code> structure.</p> <p>The key/value pairs used to tag a file during the execution of a workflow step.</p> */
	export interface TagStepDetailsFormProperties {
		Name: FormControl<string | null | undefined>,
		SourceFileLocation: FormControl<string | null | undefined>,
	}
	export function CreateTagStepDetailsFormGroup() {
		return new FormGroup<TagStepDetailsFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
			SourceFileLocation: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Specifies the key-value pair that are assigned to a file during the execution of a Tagging step. */
	export interface S3Tag {

		/** Required */
		Key: string;

		/** Required */
		Value: string;
	}

	/** Specifies the key-value pair that are assigned to a file during the execution of a Tagging step. */
	export interface S3TagFormProperties {

		/** Required */
		Key: FormControl<string | null | undefined>,

		/** Required */
		Value: FormControl<string | null | undefined>,
	}
	export function CreateS3TagFormGroup() {
		return new FormGroup<S3TagFormProperties>({
			Key: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Value: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Each step type has its own <code>StepDetails</code> structure. */
	export interface DecryptStepDetails {
		Name?: string;

		/** Required */
		Type: EncryptionType;
		SourceFileLocation?: string;
		OverwriteExisting?: OverwriteExisting;

		/** Required */
		DestinationFileLocation: InputFileLocation;
	}

	/** Each step type has its own <code>StepDetails</code> structure. */
	export interface DecryptStepDetailsFormProperties {
		Name: FormControl<string | null | undefined>,

		/** Required */
		Type: FormControl<EncryptionType | null | undefined>,
		SourceFileLocation: FormControl<string | null | undefined>,
		OverwriteExisting: FormControl<OverwriteExisting | null | undefined>,
	}
	export function CreateDecryptStepDetailsFormGroup() {
		return new FormGroup<DecryptStepDetailsFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
			Type: new FormControl<EncryptionType | null | undefined>(undefined, [Validators.required]),
			SourceFileLocation: new FormControl<string | null | undefined>(undefined),
			OverwriteExisting: new FormControl<OverwriteExisting | null | undefined>(undefined),
		});

	}

	export enum EncryptionType { PGP = 0 }

	export interface DeleteAccessRequest {

		/** Required */
		ServerId: string;

		/** Required */
		ExternalId: string;
	}
	export interface DeleteAccessRequestFormProperties {

		/** Required */
		ServerId: FormControl<string | null | undefined>,

		/** Required */
		ExternalId: FormControl<string | null | undefined>,
	}
	export function CreateDeleteAccessRequestFormGroup() {
		return new FormGroup<DeleteAccessRequestFormProperties>({
			ServerId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ExternalId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeleteAgreementRequest {

		/** Required */
		AgreementId: string;

		/** Required */
		ServerId: string;
	}
	export interface DeleteAgreementRequestFormProperties {

		/** Required */
		AgreementId: FormControl<string | null | undefined>,

		/** Required */
		ServerId: FormControl<string | null | undefined>,
	}
	export function CreateDeleteAgreementRequestFormGroup() {
		return new FormGroup<DeleteAgreementRequestFormProperties>({
			AgreementId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ServerId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeleteCertificateRequest {

		/** Required */
		CertificateId: string;
	}
	export interface DeleteCertificateRequestFormProperties {

		/** Required */
		CertificateId: FormControl<string | null | undefined>,
	}
	export function CreateDeleteCertificateRequestFormGroup() {
		return new FormGroup<DeleteCertificateRequestFormProperties>({
			CertificateId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeleteConnectorRequest {

		/** Required */
		ConnectorId: string;
	}
	export interface DeleteConnectorRequestFormProperties {

		/** Required */
		ConnectorId: FormControl<string | null | undefined>,
	}
	export function CreateDeleteConnectorRequestFormGroup() {
		return new FormGroup<DeleteConnectorRequestFormProperties>({
			ConnectorId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeleteHostKeyRequest {

		/** Required */
		ServerId: string;

		/** Required */
		HostKeyId: string;
	}
	export interface DeleteHostKeyRequestFormProperties {

		/** Required */
		ServerId: FormControl<string | null | undefined>,

		/** Required */
		HostKeyId: FormControl<string | null | undefined>,
	}
	export function CreateDeleteHostKeyRequestFormGroup() {
		return new FormGroup<DeleteHostKeyRequestFormProperties>({
			ServerId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			HostKeyId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeleteProfileRequest {

		/** Required */
		ProfileId: string;
	}
	export interface DeleteProfileRequestFormProperties {

		/** Required */
		ProfileId: FormControl<string | null | undefined>,
	}
	export function CreateDeleteProfileRequestFormGroup() {
		return new FormGroup<DeleteProfileRequestFormProperties>({
			ProfileId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeleteServerRequest {

		/** Required */
		ServerId: string;
	}
	export interface DeleteServerRequestFormProperties {

		/** Required */
		ServerId: FormControl<string | null | undefined>,
	}
	export function CreateDeleteServerRequestFormGroup() {
		return new FormGroup<DeleteServerRequestFormProperties>({
			ServerId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeleteSshPublicKeyRequest {

		/** Required */
		ServerId: string;

		/** Required */
		SshPublicKeyId: string;

		/** Required */
		UserName: string;
	}
	export interface DeleteSshPublicKeyRequestFormProperties {

		/** Required */
		ServerId: FormControl<string | null | undefined>,

		/** Required */
		SshPublicKeyId: FormControl<string | null | undefined>,

		/** Required */
		UserName: FormControl<string | null | undefined>,
	}
	export function CreateDeleteSshPublicKeyRequestFormGroup() {
		return new FormGroup<DeleteSshPublicKeyRequestFormProperties>({
			ServerId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			SshPublicKeyId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			UserName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeleteUserRequest {

		/** Required */
		ServerId: string;

		/** Required */
		UserName: string;
	}
	export interface DeleteUserRequestFormProperties {

		/** Required */
		ServerId: FormControl<string | null | undefined>,

		/** Required */
		UserName: FormControl<string | null | undefined>,
	}
	export function CreateDeleteUserRequestFormGroup() {
		return new FormGroup<DeleteUserRequestFormProperties>({
			ServerId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			UserName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeleteWorkflowRequest {

		/** Required */
		WorkflowId: string;
	}
	export interface DeleteWorkflowRequestFormProperties {

		/** Required */
		WorkflowId: FormControl<string | null | undefined>,
	}
	export function CreateDeleteWorkflowRequestFormGroup() {
		return new FormGroup<DeleteWorkflowRequestFormProperties>({
			WorkflowId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DescribeAccessResponse {

		/** Required */
		ServerId: string;

		/** Required */
		Access: DescribedAccess;
	}
	export interface DescribeAccessResponseFormProperties {

		/** Required */
		ServerId: FormControl<string | null | undefined>,
	}
	export function CreateDescribeAccessResponseFormGroup() {
		return new FormGroup<DescribeAccessResponseFormProperties>({
			ServerId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Describes the properties of the access that was specified. */
	export interface DescribedAccess {
		HomeDirectory?: string;
		HomeDirectoryMappings?: Array<HomeDirectoryMapEntry>;
		HomeDirectoryType?: HomeDirectoryType;
		Policy?: string;

		/** The full POSIX identity, including user ID (<code>Uid</code>), group ID (<code>Gid</code>), and any secondary groups IDs (<code>SecondaryGids</code>), that controls your users' access to your Amazon EFS file systems. The POSIX permissions that are set on files and directories in your file system determine the level of access your users get when transferring files into and out of your Amazon EFS file systems. */
		PosixProfile?: PosixProfile;
		Role?: string;
		ExternalId?: string;
	}

	/** Describes the properties of the access that was specified. */
	export interface DescribedAccessFormProperties {
		HomeDirectory: FormControl<string | null | undefined>,
		HomeDirectoryType: FormControl<HomeDirectoryType | null | undefined>,
		Policy: FormControl<string | null | undefined>,
		Role: FormControl<string | null | undefined>,
		ExternalId: FormControl<string | null | undefined>,
	}
	export function CreateDescribedAccessFormGroup() {
		return new FormGroup<DescribedAccessFormProperties>({
			HomeDirectory: new FormControl<string | null | undefined>(undefined),
			HomeDirectoryType: new FormControl<HomeDirectoryType | null | undefined>(undefined),
			Policy: new FormControl<string | null | undefined>(undefined),
			Role: new FormControl<string | null | undefined>(undefined),
			ExternalId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeAccessRequest {

		/** Required */
		ServerId: string;

		/** Required */
		ExternalId: string;
	}
	export interface DescribeAccessRequestFormProperties {

		/** Required */
		ServerId: FormControl<string | null | undefined>,

		/** Required */
		ExternalId: FormControl<string | null | undefined>,
	}
	export function CreateDescribeAccessRequestFormGroup() {
		return new FormGroup<DescribeAccessRequestFormProperties>({
			ServerId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ExternalId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DescribeAgreementResponse {

		/** Required */
		Agreement: DescribedAgreement;
	}
	export interface DescribeAgreementResponseFormProperties {
	}
	export function CreateDescribeAgreementResponseFormGroup() {
		return new FormGroup<DescribeAgreementResponseFormProperties>({
		});

	}


	/** Describes the properties of an agreement. */
	export interface DescribedAgreement {

		/** Required */
		Arn: string;
		AgreementId?: string;
		Description?: string;
		Status?: AgreementStatusType;
		ServerId?: string;
		LocalProfileId?: string;
		PartnerProfileId?: string;
		BaseDirectory?: string;
		AccessRole?: string;
		Tags?: Array<Tag>;
	}

	/** Describes the properties of an agreement. */
	export interface DescribedAgreementFormProperties {

		/** Required */
		Arn: FormControl<string | null | undefined>,
		AgreementId: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
		Status: FormControl<AgreementStatusType | null | undefined>,
		ServerId: FormControl<string | null | undefined>,
		LocalProfileId: FormControl<string | null | undefined>,
		PartnerProfileId: FormControl<string | null | undefined>,
		BaseDirectory: FormControl<string | null | undefined>,
		AccessRole: FormControl<string | null | undefined>,
	}
	export function CreateDescribedAgreementFormGroup() {
		return new FormGroup<DescribedAgreementFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			AgreementId: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<AgreementStatusType | null | undefined>(undefined),
			ServerId: new FormControl<string | null | undefined>(undefined),
			LocalProfileId: new FormControl<string | null | undefined>(undefined),
			PartnerProfileId: new FormControl<string | null | undefined>(undefined),
			BaseDirectory: new FormControl<string | null | undefined>(undefined),
			AccessRole: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeAgreementRequest {

		/** Required */
		AgreementId: string;

		/** Required */
		ServerId: string;
	}
	export interface DescribeAgreementRequestFormProperties {

		/** Required */
		AgreementId: FormControl<string | null | undefined>,

		/** Required */
		ServerId: FormControl<string | null | undefined>,
	}
	export function CreateDescribeAgreementRequestFormGroup() {
		return new FormGroup<DescribeAgreementRequestFormProperties>({
			AgreementId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ServerId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DescribeCertificateResponse {

		/** Required */
		Certificate: DescribedCertificate;
	}
	export interface DescribeCertificateResponseFormProperties {
	}
	export function CreateDescribeCertificateResponseFormGroup() {
		return new FormGroup<DescribeCertificateResponseFormProperties>({
		});

	}


	/** Describes the properties of a certificate. */
	export interface DescribedCertificate {

		/** Required */
		Arn: string;
		CertificateId?: string;
		Usage?: CertificateUsageType;
		Status?: CertificateStatusType;
		Certificate?: string;
		CertificateChain?: string;
		ActiveDate?: Date;
		InactiveDate?: Date;
		Serial?: string;
		NotBeforeDate?: Date;
		NotAfterDate?: Date;
		Type?: CertificateType;
		Description?: string;
		Tags?: Array<Tag>;
	}

	/** Describes the properties of a certificate. */
	export interface DescribedCertificateFormProperties {

		/** Required */
		Arn: FormControl<string | null | undefined>,
		CertificateId: FormControl<string | null | undefined>,
		Usage: FormControl<CertificateUsageType | null | undefined>,
		Status: FormControl<CertificateStatusType | null | undefined>,
		Certificate: FormControl<string | null | undefined>,
		CertificateChain: FormControl<string | null | undefined>,
		ActiveDate: FormControl<Date | null | undefined>,
		InactiveDate: FormControl<Date | null | undefined>,
		Serial: FormControl<string | null | undefined>,
		NotBeforeDate: FormControl<Date | null | undefined>,
		NotAfterDate: FormControl<Date | null | undefined>,
		Type: FormControl<CertificateType | null | undefined>,
		Description: FormControl<string | null | undefined>,
	}
	export function CreateDescribedCertificateFormGroup() {
		return new FormGroup<DescribedCertificateFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			CertificateId: new FormControl<string | null | undefined>(undefined),
			Usage: new FormControl<CertificateUsageType | null | undefined>(undefined),
			Status: new FormControl<CertificateStatusType | null | undefined>(undefined),
			Certificate: new FormControl<string | null | undefined>(undefined),
			CertificateChain: new FormControl<string | null | undefined>(undefined),
			ActiveDate: new FormControl<Date | null | undefined>(undefined),
			InactiveDate: new FormControl<Date | null | undefined>(undefined),
			Serial: new FormControl<string | null | undefined>(undefined),
			NotBeforeDate: new FormControl<Date | null | undefined>(undefined),
			NotAfterDate: new FormControl<Date | null | undefined>(undefined),
			Type: new FormControl<CertificateType | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum CertificateUsageType { SIGNING = 0, ENCRYPTION = 1 }

	export enum CertificateStatusType { ACTIVE = 0, PENDING_ROTATION = 1, INACTIVE = 2 }

	export enum CertificateType { CERTIFICATE = 0, CERTIFICATE_WITH_PRIVATE_KEY = 1 }

	export interface DescribeCertificateRequest {

		/** Required */
		CertificateId: string;
	}
	export interface DescribeCertificateRequestFormProperties {

		/** Required */
		CertificateId: FormControl<string | null | undefined>,
	}
	export function CreateDescribeCertificateRequestFormGroup() {
		return new FormGroup<DescribeCertificateRequestFormProperties>({
			CertificateId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DescribeConnectorResponse {

		/** Required */
		Connector: DescribedConnector;
	}
	export interface DescribeConnectorResponseFormProperties {
	}
	export function CreateDescribeConnectorResponseFormGroup() {
		return new FormGroup<DescribeConnectorResponseFormProperties>({
		});

	}


	/** Describes the parameters for the connector, as identified by the <code>ConnectorId</code>. */
	export interface DescribedConnector {

		/** Required */
		Arn: string;
		ConnectorId?: string;
		Url?: string;
		As2Config?: As2ConnectorConfig;
		AccessRole?: string;
		LoggingRole?: string;
		Tags?: Array<Tag>;
		SftpConfig?: SftpConnectorConfig;
	}

	/** Describes the parameters for the connector, as identified by the <code>ConnectorId</code>. */
	export interface DescribedConnectorFormProperties {

		/** Required */
		Arn: FormControl<string | null | undefined>,
		ConnectorId: FormControl<string | null | undefined>,
		Url: FormControl<string | null | undefined>,
		AccessRole: FormControl<string | null | undefined>,
		LoggingRole: FormControl<string | null | undefined>,
	}
	export function CreateDescribedConnectorFormGroup() {
		return new FormGroup<DescribedConnectorFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ConnectorId: new FormControl<string | null | undefined>(undefined),
			Url: new FormControl<string | null | undefined>(undefined),
			AccessRole: new FormControl<string | null | undefined>(undefined),
			LoggingRole: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeConnectorRequest {

		/** Required */
		ConnectorId: string;
	}
	export interface DescribeConnectorRequestFormProperties {

		/** Required */
		ConnectorId: FormControl<string | null | undefined>,
	}
	export function CreateDescribeConnectorRequestFormGroup() {
		return new FormGroup<DescribeConnectorRequestFormProperties>({
			ConnectorId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DescribeExecutionResponse {

		/** Required */
		WorkflowId: string;

		/** Required */
		Execution: DescribedExecution;
	}
	export interface DescribeExecutionResponseFormProperties {

		/** Required */
		WorkflowId: FormControl<string | null | undefined>,
	}
	export function CreateDescribeExecutionResponseFormGroup() {
		return new FormGroup<DescribeExecutionResponseFormProperties>({
			WorkflowId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The details for an execution object. */
	export interface DescribedExecution {
		ExecutionId?: string;
		InitialFileLocation?: FileLocation;
		ServiceMetadata?: ServiceMetadata;
		ExecutionRole?: string;
		LoggingConfiguration?: LoggingConfiguration;

		/** The full POSIX identity, including user ID (<code>Uid</code>), group ID (<code>Gid</code>), and any secondary groups IDs (<code>SecondaryGids</code>), that controls your users' access to your Amazon EFS file systems. The POSIX permissions that are set on files and directories in your file system determine the level of access your users get when transferring files into and out of your Amazon EFS file systems. */
		PosixProfile?: PosixProfile;
		Status?: ExecutionStatus;
		Results?: ExecutionResults;
	}

	/** The details for an execution object. */
	export interface DescribedExecutionFormProperties {
		ExecutionId: FormControl<string | null | undefined>,
		ExecutionRole: FormControl<string | null | undefined>,
		Status: FormControl<ExecutionStatus | null | undefined>,
	}
	export function CreateDescribedExecutionFormGroup() {
		return new FormGroup<DescribedExecutionFormProperties>({
			ExecutionId: new FormControl<string | null | undefined>(undefined),
			ExecutionRole: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<ExecutionStatus | null | undefined>(undefined),
		});

	}


	/** Specifies the Amazon S3 or EFS file details to be used in the step. */
	export interface FileLocation {
		S3FileLocation?: S3FileLocation;
		EfsFileLocation?: EfsFileLocation;
	}

	/** Specifies the Amazon S3 or EFS file details to be used in the step. */
	export interface FileLocationFormProperties {
	}
	export function CreateFileLocationFormGroup() {
		return new FormGroup<FileLocationFormProperties>({
		});

	}


	/** Specifies the details for the file location for the file that's being used in the workflow. Only applicable if you are using S3 storage. */
	export interface S3FileLocation {
		Bucket?: string;
		Key?: string;
		VersionId?: string;
		Etag?: string;
	}

	/** Specifies the details for the file location for the file that's being used in the workflow. Only applicable if you are using S3 storage. */
	export interface S3FileLocationFormProperties {
		Bucket: FormControl<string | null | undefined>,
		Key: FormControl<string | null | undefined>,
		VersionId: FormControl<string | null | undefined>,
		Etag: FormControl<string | null | undefined>,
	}
	export function CreateS3FileLocationFormGroup() {
		return new FormGroup<S3FileLocationFormProperties>({
			Bucket: new FormControl<string | null | undefined>(undefined),
			Key: new FormControl<string | null | undefined>(undefined),
			VersionId: new FormControl<string | null | undefined>(undefined),
			Etag: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A container object for the session details that are associated with a workflow. */
	export interface ServiceMetadata {

		/** Required */
		UserDetails: UserDetails;
	}

	/** A container object for the session details that are associated with a workflow. */
	export interface ServiceMetadataFormProperties {
	}
	export function CreateServiceMetadataFormGroup() {
		return new FormGroup<ServiceMetadataFormProperties>({
		});

	}


	/** Specifies the user name, server ID, and session ID for a workflow. */
	export interface UserDetails {

		/** Required */
		UserName: string;

		/** Required */
		ServerId: string;
		SessionId?: string;
	}

	/** Specifies the user name, server ID, and session ID for a workflow. */
	export interface UserDetailsFormProperties {

		/** Required */
		UserName: FormControl<string | null | undefined>,

		/** Required */
		ServerId: FormControl<string | null | undefined>,
		SessionId: FormControl<string | null | undefined>,
	}
	export function CreateUserDetailsFormGroup() {
		return new FormGroup<UserDetailsFormProperties>({
			UserName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ServerId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			SessionId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Consists of the logging role and the log group name. */
	export interface LoggingConfiguration {
		LoggingRole?: string;
		LogGroupName?: string;
	}

	/** Consists of the logging role and the log group name. */
	export interface LoggingConfigurationFormProperties {
		LoggingRole: FormControl<string | null | undefined>,
		LogGroupName: FormControl<string | null | undefined>,
	}
	export function CreateLoggingConfigurationFormGroup() {
		return new FormGroup<LoggingConfigurationFormProperties>({
			LoggingRole: new FormControl<string | null | undefined>(undefined),
			LogGroupName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ExecutionStatus { IN_PROGRESS = 0, COMPLETED = 1, EXCEPTION = 2, HANDLING_EXCEPTION = 3 }


	/** Specifies the steps in the workflow, as well as the steps to execute in case of any errors during workflow execution. */
	export interface ExecutionResults {
		Steps?: Array<ExecutionStepResult>;
		OnExceptionSteps?: Array<ExecutionStepResult>;
	}

	/** Specifies the steps in the workflow, as well as the steps to execute in case of any errors during workflow execution. */
	export interface ExecutionResultsFormProperties {
	}
	export function CreateExecutionResultsFormGroup() {
		return new FormGroup<ExecutionResultsFormProperties>({
		});

	}


	/** Specifies the following details for the step: error (if any), outputs (if any), and the step type. */
	export interface ExecutionStepResult {
		StepType?: WorkflowStepType;
		Outputs?: string;
		Error?: ExecutionError;
	}

	/** Specifies the following details for the step: error (if any), outputs (if any), and the step type. */
	export interface ExecutionStepResultFormProperties {
		StepType: FormControl<WorkflowStepType | null | undefined>,
		Outputs: FormControl<string | null | undefined>,
	}
	export function CreateExecutionStepResultFormGroup() {
		return new FormGroup<ExecutionStepResultFormProperties>({
			StepType: new FormControl<WorkflowStepType | null | undefined>(undefined),
			Outputs: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Specifies the error message and type, for an error that occurs during the execution of the workflow. */
	export interface ExecutionError {

		/** Required */
		Type: ExecutionErrorType;

		/** Required */
		Message: string;
	}

	/** Specifies the error message and type, for an error that occurs during the execution of the workflow. */
	export interface ExecutionErrorFormProperties {

		/** Required */
		Type: FormControl<ExecutionErrorType | null | undefined>,

		/** Required */
		Message: FormControl<string | null | undefined>,
	}
	export function CreateExecutionErrorFormGroup() {
		return new FormGroup<ExecutionErrorFormProperties>({
			Type: new FormControl<ExecutionErrorType | null | undefined>(undefined, [Validators.required]),
			Message: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum ExecutionErrorType { PERMISSION_DENIED = 0, CUSTOM_STEP_FAILED = 1, THROTTLED = 2, ALREADY_EXISTS = 3, NOT_FOUND = 4, BAD_REQUEST = 5, TIMEOUT = 6, INTERNAL_SERVER_ERROR = 7 }

	export interface DescribeExecutionRequest {

		/** Required */
		ExecutionId: string;

		/** Required */
		WorkflowId: string;
	}
	export interface DescribeExecutionRequestFormProperties {

		/** Required */
		ExecutionId: FormControl<string | null | undefined>,

		/** Required */
		WorkflowId: FormControl<string | null | undefined>,
	}
	export function CreateDescribeExecutionRequestFormGroup() {
		return new FormGroup<DescribeExecutionRequestFormProperties>({
			ExecutionId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			WorkflowId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DescribeHostKeyResponse {

		/** Required */
		HostKey: DescribedHostKey;
	}
	export interface DescribeHostKeyResponseFormProperties {
	}
	export function CreateDescribeHostKeyResponseFormGroup() {
		return new FormGroup<DescribeHostKeyResponseFormProperties>({
		});

	}


	/** The details for a server host key. */
	export interface DescribedHostKey {

		/** Required */
		Arn: string;
		HostKeyId?: string;
		HostKeyFingerprint?: string;
		Description?: string;
		Type?: string;
		DateImported?: Date;
		Tags?: Array<Tag>;
	}

	/** The details for a server host key. */
	export interface DescribedHostKeyFormProperties {

		/** Required */
		Arn: FormControl<string | null | undefined>,
		HostKeyId: FormControl<string | null | undefined>,
		HostKeyFingerprint: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
		Type: FormControl<string | null | undefined>,
		DateImported: FormControl<Date | null | undefined>,
	}
	export function CreateDescribedHostKeyFormGroup() {
		return new FormGroup<DescribedHostKeyFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			HostKeyId: new FormControl<string | null | undefined>(undefined),
			HostKeyFingerprint: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			Type: new FormControl<string | null | undefined>(undefined),
			DateImported: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface DescribeHostKeyRequest {

		/** Required */
		ServerId: string;

		/** Required */
		HostKeyId: string;
	}
	export interface DescribeHostKeyRequestFormProperties {

		/** Required */
		ServerId: FormControl<string | null | undefined>,

		/** Required */
		HostKeyId: FormControl<string | null | undefined>,
	}
	export function CreateDescribeHostKeyRequestFormGroup() {
		return new FormGroup<DescribeHostKeyRequestFormProperties>({
			ServerId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			HostKeyId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DescribeProfileResponse {

		/** Required */
		Profile: DescribedProfile;
	}
	export interface DescribeProfileResponseFormProperties {
	}
	export function CreateDescribeProfileResponseFormGroup() {
		return new FormGroup<DescribeProfileResponseFormProperties>({
		});

	}


	/** The details for a local or partner AS2 profile.  */
	export interface DescribedProfile {

		/** Required */
		Arn: string;
		ProfileId?: string;
		ProfileType?: ProfileType;
		As2Id?: string;
		CertificateIds?: Array<string>;
		Tags?: Array<Tag>;
	}

	/** The details for a local or partner AS2 profile.  */
	export interface DescribedProfileFormProperties {

		/** Required */
		Arn: FormControl<string | null | undefined>,
		ProfileId: FormControl<string | null | undefined>,
		ProfileType: FormControl<ProfileType | null | undefined>,
		As2Id: FormControl<string | null | undefined>,
	}
	export function CreateDescribedProfileFormGroup() {
		return new FormGroup<DescribedProfileFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ProfileId: new FormControl<string | null | undefined>(undefined),
			ProfileType: new FormControl<ProfileType | null | undefined>(undefined),
			As2Id: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeProfileRequest {

		/** Required */
		ProfileId: string;
	}
	export interface DescribeProfileRequestFormProperties {

		/** Required */
		ProfileId: FormControl<string | null | undefined>,
	}
	export function CreateDescribeProfileRequestFormGroup() {
		return new FormGroup<DescribeProfileRequestFormProperties>({
			ProfileId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DescribeSecurityPolicyResponse {

		/** Required */
		SecurityPolicy: DescribedSecurityPolicy;
	}
	export interface DescribeSecurityPolicyResponseFormProperties {
	}
	export function CreateDescribeSecurityPolicyResponseFormGroup() {
		return new FormGroup<DescribeSecurityPolicyResponseFormProperties>({
		});

	}


	/** Describes the properties of a security policy that was specified. For more information about security policies, see <a href="https://docs.aws.amazon.com/transfer/latest/userguide/security-policies.html">Working with security policies</a>. */
	export interface DescribedSecurityPolicy {
		Fips?: boolean | null;

		/** Required */
		SecurityPolicyName: string;
		SshCiphers?: Array<string>;
		SshKexs?: Array<string>;
		SshMacs?: Array<string>;
		TlsCiphers?: Array<string>;
	}

	/** Describes the properties of a security policy that was specified. For more information about security policies, see <a href="https://docs.aws.amazon.com/transfer/latest/userguide/security-policies.html">Working with security policies</a>. */
	export interface DescribedSecurityPolicyFormProperties {
		Fips: FormControl<boolean | null | undefined>,

		/** Required */
		SecurityPolicyName: FormControl<string | null | undefined>,
	}
	export function CreateDescribedSecurityPolicyFormGroup() {
		return new FormGroup<DescribedSecurityPolicyFormProperties>({
			Fips: new FormControl<boolean | null | undefined>(undefined),
			SecurityPolicyName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DescribeSecurityPolicyRequest {

		/** Required */
		SecurityPolicyName: string;
	}
	export interface DescribeSecurityPolicyRequestFormProperties {

		/** Required */
		SecurityPolicyName: FormControl<string | null | undefined>,
	}
	export function CreateDescribeSecurityPolicyRequestFormGroup() {
		return new FormGroup<DescribeSecurityPolicyRequestFormProperties>({
			SecurityPolicyName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DescribeServerResponse {

		/** Required */
		Server: DescribedServer;
	}
	export interface DescribeServerResponseFormProperties {
	}
	export function CreateDescribeServerResponseFormGroup() {
		return new FormGroup<DescribeServerResponseFormProperties>({
		});

	}


	/** Describes the properties of a file transfer protocol-enabled server that was specified. */
	export interface DescribedServer {

		/** Required */
		Arn: string;
		Certificate?: string;
		ProtocolDetails?: ProtocolDetails;
		Domain?: Domain;
		EndpointDetails?: EndpointDetails;
		EndpointType?: EndpointType;
		HostKeyFingerprint?: string;
		IdentityProviderDetails?: IdentityProviderDetails;
		IdentityProviderType?: IdentityProviderType;
		LoggingRole?: string;
		PostAuthenticationLoginBanner?: string;
		PreAuthenticationLoginBanner?: string;
		Protocols?: Array<Protocol>;
		SecurityPolicyName?: string;
		ServerId?: string;
		State?: State;
		Tags?: Array<Tag>;
		UserCount?: number | null;
		WorkflowDetails?: WorkflowDetails;
		StructuredLogDestinations?: Array<string>;
	}

	/** Describes the properties of a file transfer protocol-enabled server that was specified. */
	export interface DescribedServerFormProperties {

		/** Required */
		Arn: FormControl<string | null | undefined>,
		Certificate: FormControl<string | null | undefined>,
		Domain: FormControl<Domain | null | undefined>,
		EndpointType: FormControl<EndpointType | null | undefined>,
		HostKeyFingerprint: FormControl<string | null | undefined>,
		IdentityProviderType: FormControl<IdentityProviderType | null | undefined>,
		LoggingRole: FormControl<string | null | undefined>,
		PostAuthenticationLoginBanner: FormControl<string | null | undefined>,
		PreAuthenticationLoginBanner: FormControl<string | null | undefined>,
		SecurityPolicyName: FormControl<string | null | undefined>,
		ServerId: FormControl<string | null | undefined>,
		State: FormControl<State | null | undefined>,
		UserCount: FormControl<number | null | undefined>,
	}
	export function CreateDescribedServerFormGroup() {
		return new FormGroup<DescribedServerFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Certificate: new FormControl<string | null | undefined>(undefined),
			Domain: new FormControl<Domain | null | undefined>(undefined),
			EndpointType: new FormControl<EndpointType | null | undefined>(undefined),
			HostKeyFingerprint: new FormControl<string | null | undefined>(undefined),
			IdentityProviderType: new FormControl<IdentityProviderType | null | undefined>(undefined),
			LoggingRole: new FormControl<string | null | undefined>(undefined),
			PostAuthenticationLoginBanner: new FormControl<string | null | undefined>(undefined),
			PreAuthenticationLoginBanner: new FormControl<string | null | undefined>(undefined),
			SecurityPolicyName: new FormControl<string | null | undefined>(undefined),
			ServerId: new FormControl<string | null | undefined>(undefined),
			State: new FormControl<State | null | undefined>(undefined),
			UserCount: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** <p>Describes the condition of a file transfer protocol-enabled server with respect to its ability to perform file operations. There are six possible states: <code>OFFLINE</code>, <code>ONLINE</code>, <code>STARTING</code>, <code>STOPPING</code>, <code>START_FAILED</code>, and <code>STOP_FAILED</code>.</p> <p> <code>OFFLINE</code> indicates that the server exists, but that it is not available for file operations. <code>ONLINE</code> indicates that the server is available to perform file operations. <code>STARTING</code> indicates that the server's was instantiated, but the server is not yet available to perform file operations. Under normal conditions, it can take a couple of minutes for the server to be completely operational. Both <code>START_FAILED</code> and <code>STOP_FAILED</code> are error conditions.</p> */
	export enum State { OFFLINE = 0, ONLINE = 1, STARTING = 2, STOPPING = 3, START_FAILED = 4, STOP_FAILED = 5 }

	export interface DescribeServerRequest {

		/** Required */
		ServerId: string;
	}
	export interface DescribeServerRequestFormProperties {

		/** Required */
		ServerId: FormControl<string | null | undefined>,
	}
	export function CreateDescribeServerRequestFormGroup() {
		return new FormGroup<DescribeServerRequestFormProperties>({
			ServerId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DescribeUserResponse {

		/** Required */
		ServerId: string;

		/** Required */
		User: DescribedUser;
	}
	export interface DescribeUserResponseFormProperties {

		/** Required */
		ServerId: FormControl<string | null | undefined>,
	}
	export function CreateDescribeUserResponseFormGroup() {
		return new FormGroup<DescribeUserResponseFormProperties>({
			ServerId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Describes the properties of a user that was specified. */
	export interface DescribedUser {

		/** Required */
		Arn: string;
		HomeDirectory?: string;
		HomeDirectoryMappings?: Array<HomeDirectoryMapEntry>;
		HomeDirectoryType?: HomeDirectoryType;
		Policy?: string;
		PosixProfile?: PosixProfile;
		Role?: string;
		SshPublicKeys?: Array<SshPublicKey>;
		Tags?: Array<Tag>;
		UserName?: string;
	}

	/** Describes the properties of a user that was specified. */
	export interface DescribedUserFormProperties {

		/** Required */
		Arn: FormControl<string | null | undefined>,
		HomeDirectory: FormControl<string | null | undefined>,
		HomeDirectoryType: FormControl<HomeDirectoryType | null | undefined>,
		Policy: FormControl<string | null | undefined>,
		Role: FormControl<string | null | undefined>,
		UserName: FormControl<string | null | undefined>,
	}
	export function CreateDescribedUserFormGroup() {
		return new FormGroup<DescribedUserFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			HomeDirectory: new FormControl<string | null | undefined>(undefined),
			HomeDirectoryType: new FormControl<HomeDirectoryType | null | undefined>(undefined),
			Policy: new FormControl<string | null | undefined>(undefined),
			Role: new FormControl<string | null | undefined>(undefined),
			UserName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Provides information about the public Secure Shell (SSH) key that is associated with a Transfer Family user for the specific file transfer protocol-enabled server (as identified by <code>ServerId</code>). The information returned includes the date the key was imported, the public key contents, and the public key ID. A user can store more than one SSH public key associated with their user name on a specific server. */
	export interface SshPublicKey {

		/** Required */
		DateImported: Date;

		/** Required */
		SshPublicKeyBody: string;

		/** Required */
		SshPublicKeyId: string;
	}

	/** Provides information about the public Secure Shell (SSH) key that is associated with a Transfer Family user for the specific file transfer protocol-enabled server (as identified by <code>ServerId</code>). The information returned includes the date the key was imported, the public key contents, and the public key ID. A user can store more than one SSH public key associated with their user name on a specific server. */
	export interface SshPublicKeyFormProperties {

		/** Required */
		DateImported: FormControl<Date | null | undefined>,

		/** Required */
		SshPublicKeyBody: FormControl<string | null | undefined>,

		/** Required */
		SshPublicKeyId: FormControl<string | null | undefined>,
	}
	export function CreateSshPublicKeyFormGroup() {
		return new FormGroup<SshPublicKeyFormProperties>({
			DateImported: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			SshPublicKeyBody: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			SshPublicKeyId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DescribeUserRequest {

		/** Required */
		ServerId: string;

		/** Required */
		UserName: string;
	}
	export interface DescribeUserRequestFormProperties {

		/** Required */
		ServerId: FormControl<string | null | undefined>,

		/** Required */
		UserName: FormControl<string | null | undefined>,
	}
	export function CreateDescribeUserRequestFormGroup() {
		return new FormGroup<DescribeUserRequestFormProperties>({
			ServerId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			UserName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DescribeWorkflowResponse {

		/** Required */
		Workflow: DescribedWorkflow;
	}
	export interface DescribeWorkflowResponseFormProperties {
	}
	export function CreateDescribeWorkflowResponseFormGroup() {
		return new FormGroup<DescribeWorkflowResponseFormProperties>({
		});

	}


	/** Describes the properties of the specified workflow */
	export interface DescribedWorkflow {

		/** Required */
		Arn: string;
		Description?: string;
		Steps?: Array<WorkflowStep>;
		OnExceptionSteps?: Array<WorkflowStep>;
		WorkflowId?: string;
		Tags?: Array<Tag>;
	}

	/** Describes the properties of the specified workflow */
	export interface DescribedWorkflowFormProperties {

		/** Required */
		Arn: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
		WorkflowId: FormControl<string | null | undefined>,
	}
	export function CreateDescribedWorkflowFormGroup() {
		return new FormGroup<DescribedWorkflowFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Description: new FormControl<string | null | undefined>(undefined),
			WorkflowId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeWorkflowRequest {

		/** Required */
		WorkflowId: string;
	}
	export interface DescribeWorkflowRequestFormProperties {

		/** Required */
		WorkflowId: FormControl<string | null | undefined>,
	}
	export function CreateDescribeWorkflowRequestFormGroup() {
		return new FormGroup<DescribeWorkflowRequestFormProperties>({
			WorkflowId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ImportCertificateResponse {

		/** Required */
		CertificateId: string;
	}
	export interface ImportCertificateResponseFormProperties {

		/** Required */
		CertificateId: FormControl<string | null | undefined>,
	}
	export function CreateImportCertificateResponseFormGroup() {
		return new FormGroup<ImportCertificateResponseFormProperties>({
			CertificateId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ImportCertificateRequest {

		/** Required */
		Usage: CertificateUsageType;

		/** Required */
		Certificate: string;
		CertificateChain?: string;
		PrivateKey?: string;
		ActiveDate?: Date;
		InactiveDate?: Date;
		Description?: string;
		Tags?: Array<Tag>;
	}
	export interface ImportCertificateRequestFormProperties {

		/** Required */
		Usage: FormControl<CertificateUsageType | null | undefined>,

		/** Required */
		Certificate: FormControl<string | null | undefined>,
		CertificateChain: FormControl<string | null | undefined>,
		PrivateKey: FormControl<string | null | undefined>,
		ActiveDate: FormControl<Date | null | undefined>,
		InactiveDate: FormControl<Date | null | undefined>,
		Description: FormControl<string | null | undefined>,
	}
	export function CreateImportCertificateRequestFormGroup() {
		return new FormGroup<ImportCertificateRequestFormProperties>({
			Usage: new FormControl<CertificateUsageType | null | undefined>(undefined, [Validators.required]),
			Certificate: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			CertificateChain: new FormControl<string | null | undefined>(undefined),
			PrivateKey: new FormControl<string | null | undefined>(undefined),
			ActiveDate: new FormControl<Date | null | undefined>(undefined),
			InactiveDate: new FormControl<Date | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ImportHostKeyResponse {

		/** Required */
		ServerId: string;

		/** Required */
		HostKeyId: string;
	}
	export interface ImportHostKeyResponseFormProperties {

		/** Required */
		ServerId: FormControl<string | null | undefined>,

		/** Required */
		HostKeyId: FormControl<string | null | undefined>,
	}
	export function CreateImportHostKeyResponseFormGroup() {
		return new FormGroup<ImportHostKeyResponseFormProperties>({
			ServerId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			HostKeyId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ImportHostKeyRequest {

		/** Required */
		ServerId: string;

		/** Required */
		HostKeyBody: string;
		Description?: string;
		Tags?: Array<Tag>;
	}
	export interface ImportHostKeyRequestFormProperties {

		/** Required */
		ServerId: FormControl<string | null | undefined>,

		/** Required */
		HostKeyBody: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
	}
	export function CreateImportHostKeyRequestFormGroup() {
		return new FormGroup<ImportHostKeyRequestFormProperties>({
			ServerId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			HostKeyBody: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Description: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Identifies the user, the server they belong to, and the identifier of the SSH public key associated with that user. A user can have more than one key on each server that they are associated with. */
	export interface ImportSshPublicKeyResponse {

		/** Required */
		ServerId: string;

		/** Required */
		SshPublicKeyId: string;

		/** Required */
		UserName: string;
	}

	/** Identifies the user, the server they belong to, and the identifier of the SSH public key associated with that user. A user can have more than one key on each server that they are associated with. */
	export interface ImportSshPublicKeyResponseFormProperties {

		/** Required */
		ServerId: FormControl<string | null | undefined>,

		/** Required */
		SshPublicKeyId: FormControl<string | null | undefined>,

		/** Required */
		UserName: FormControl<string | null | undefined>,
	}
	export function CreateImportSshPublicKeyResponseFormGroup() {
		return new FormGroup<ImportSshPublicKeyResponseFormProperties>({
			ServerId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			SshPublicKeyId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			UserName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ImportSshPublicKeyRequest {

		/** Required */
		ServerId: string;

		/** Required */
		SshPublicKeyBody: string;

		/** Required */
		UserName: string;
	}
	export interface ImportSshPublicKeyRequestFormProperties {

		/** Required */
		ServerId: FormControl<string | null | undefined>,

		/** Required */
		SshPublicKeyBody: FormControl<string | null | undefined>,

		/** Required */
		UserName: FormControl<string | null | undefined>,
	}
	export function CreateImportSshPublicKeyRequestFormGroup() {
		return new FormGroup<ImportSshPublicKeyRequestFormProperties>({
			ServerId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			SshPublicKeyBody: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			UserName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ListAccessesResponse {
		NextToken?: string;

		/** Required */
		ServerId: string;

		/** Required */
		Accesses: Array<ListedAccess>;
	}
	export interface ListAccessesResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,

		/** Required */
		ServerId: FormControl<string | null | undefined>,
	}
	export function CreateListAccessesResponseFormGroup() {
		return new FormGroup<ListAccessesResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
			ServerId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Lists the properties for one or more specified associated accesses. */
	export interface ListedAccess {
		HomeDirectory?: string;
		HomeDirectoryType?: HomeDirectoryType;
		Role?: string;
		ExternalId?: string;
	}

	/** Lists the properties for one or more specified associated accesses. */
	export interface ListedAccessFormProperties {
		HomeDirectory: FormControl<string | null | undefined>,
		HomeDirectoryType: FormControl<HomeDirectoryType | null | undefined>,
		Role: FormControl<string | null | undefined>,
		ExternalId: FormControl<string | null | undefined>,
	}
	export function CreateListedAccessFormGroup() {
		return new FormGroup<ListedAccessFormProperties>({
			HomeDirectory: new FormControl<string | null | undefined>(undefined),
			HomeDirectoryType: new FormControl<HomeDirectoryType | null | undefined>(undefined),
			Role: new FormControl<string | null | undefined>(undefined),
			ExternalId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListAccessesRequest {
		MaxResults?: number | null;
		NextToken?: string;

		/** Required */
		ServerId: string;
	}
	export interface ListAccessesRequestFormProperties {
		MaxResults: FormControl<number | null | undefined>,
		NextToken: FormControl<string | null | undefined>,

		/** Required */
		ServerId: FormControl<string | null | undefined>,
	}
	export function CreateListAccessesRequestFormGroup() {
		return new FormGroup<ListAccessesRequestFormProperties>({
			MaxResults: new FormControl<number | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
			ServerId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
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

	export interface ListAgreementsResponse {
		NextToken?: string;

		/** Required */
		Agreements: Array<ListedAgreement>;
	}
	export interface ListAgreementsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListAgreementsResponseFormGroup() {
		return new FormGroup<ListAgreementsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Describes the properties of an agreement. */
	export interface ListedAgreement {
		Arn?: string;
		AgreementId?: string;
		Description?: string;
		Status?: AgreementStatusType;
		ServerId?: string;
		LocalProfileId?: string;
		PartnerProfileId?: string;
	}

	/** Describes the properties of an agreement. */
	export interface ListedAgreementFormProperties {
		Arn: FormControl<string | null | undefined>,
		AgreementId: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
		Status: FormControl<AgreementStatusType | null | undefined>,
		ServerId: FormControl<string | null | undefined>,
		LocalProfileId: FormControl<string | null | undefined>,
		PartnerProfileId: FormControl<string | null | undefined>,
	}
	export function CreateListedAgreementFormGroup() {
		return new FormGroup<ListedAgreementFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined),
			AgreementId: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<AgreementStatusType | null | undefined>(undefined),
			ServerId: new FormControl<string | null | undefined>(undefined),
			LocalProfileId: new FormControl<string | null | undefined>(undefined),
			PartnerProfileId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListAgreementsRequest {
		MaxResults?: number | null;
		NextToken?: string;

		/** Required */
		ServerId: string;
	}
	export interface ListAgreementsRequestFormProperties {
		MaxResults: FormControl<number | null | undefined>,
		NextToken: FormControl<string | null | undefined>,

		/** Required */
		ServerId: FormControl<string | null | undefined>,
	}
	export function CreateListAgreementsRequestFormGroup() {
		return new FormGroup<ListAgreementsRequestFormProperties>({
			MaxResults: new FormControl<number | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
			ServerId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ListCertificatesResponse {
		NextToken?: string;

		/** Required */
		Certificates: Array<ListedCertificate>;
	}
	export interface ListCertificatesResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListCertificatesResponseFormGroup() {
		return new FormGroup<ListCertificatesResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Describes the properties of a certificate. */
	export interface ListedCertificate {
		Arn?: string;
		CertificateId?: string;
		Usage?: CertificateUsageType;
		Status?: CertificateStatusType;
		ActiveDate?: Date;
		InactiveDate?: Date;
		Type?: CertificateType;
		Description?: string;
	}

	/** Describes the properties of a certificate. */
	export interface ListedCertificateFormProperties {
		Arn: FormControl<string | null | undefined>,
		CertificateId: FormControl<string | null | undefined>,
		Usage: FormControl<CertificateUsageType | null | undefined>,
		Status: FormControl<CertificateStatusType | null | undefined>,
		ActiveDate: FormControl<Date | null | undefined>,
		InactiveDate: FormControl<Date | null | undefined>,
		Type: FormControl<CertificateType | null | undefined>,
		Description: FormControl<string | null | undefined>,
	}
	export function CreateListedCertificateFormGroup() {
		return new FormGroup<ListedCertificateFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined),
			CertificateId: new FormControl<string | null | undefined>(undefined),
			Usage: new FormControl<CertificateUsageType | null | undefined>(undefined),
			Status: new FormControl<CertificateStatusType | null | undefined>(undefined),
			ActiveDate: new FormControl<Date | null | undefined>(undefined),
			InactiveDate: new FormControl<Date | null | undefined>(undefined),
			Type: new FormControl<CertificateType | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListCertificatesRequest {
		MaxResults?: number | null;
		NextToken?: string;
	}
	export interface ListCertificatesRequestFormProperties {
		MaxResults: FormControl<number | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListCertificatesRequestFormGroup() {
		return new FormGroup<ListCertificatesRequestFormProperties>({
			MaxResults: new FormControl<number | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListConnectorsResponse {
		NextToken?: string;

		/** Required */
		Connectors: Array<ListedConnector>;
	}
	export interface ListConnectorsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListConnectorsResponseFormGroup() {
		return new FormGroup<ListConnectorsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Returns details of the connector that is specified. */
	export interface ListedConnector {
		Arn?: string;
		ConnectorId?: string;
		Url?: string;
	}

	/** Returns details of the connector that is specified. */
	export interface ListedConnectorFormProperties {
		Arn: FormControl<string | null | undefined>,
		ConnectorId: FormControl<string | null | undefined>,
		Url: FormControl<string | null | undefined>,
	}
	export function CreateListedConnectorFormGroup() {
		return new FormGroup<ListedConnectorFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined),
			ConnectorId: new FormControl<string | null | undefined>(undefined),
			Url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListConnectorsRequest {
		MaxResults?: number | null;
		NextToken?: string;
	}
	export interface ListConnectorsRequestFormProperties {
		MaxResults: FormControl<number | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListConnectorsRequestFormGroup() {
		return new FormGroup<ListConnectorsRequestFormProperties>({
			MaxResults: new FormControl<number | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListExecutionsResponse {
		NextToken?: string;

		/** Required */
		WorkflowId: string;

		/** Required */
		Executions: Array<ListedExecution>;
	}
	export interface ListExecutionsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,

		/** Required */
		WorkflowId: FormControl<string | null | undefined>,
	}
	export function CreateListExecutionsResponseFormGroup() {
		return new FormGroup<ListExecutionsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
			WorkflowId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Returns properties of the execution that is specified. */
	export interface ListedExecution {
		ExecutionId?: string;
		InitialFileLocation?: FileLocation;
		ServiceMetadata?: ServiceMetadata;
		Status?: ExecutionStatus;
	}

	/** Returns properties of the execution that is specified. */
	export interface ListedExecutionFormProperties {
		ExecutionId: FormControl<string | null | undefined>,
		Status: FormControl<ExecutionStatus | null | undefined>,
	}
	export function CreateListedExecutionFormGroup() {
		return new FormGroup<ListedExecutionFormProperties>({
			ExecutionId: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<ExecutionStatus | null | undefined>(undefined),
		});

	}

	export interface ListExecutionsRequest {
		MaxResults?: number | null;
		NextToken?: string;

		/** Required */
		WorkflowId: string;
	}
	export interface ListExecutionsRequestFormProperties {
		MaxResults: FormControl<number | null | undefined>,
		NextToken: FormControl<string | null | undefined>,

		/** Required */
		WorkflowId: FormControl<string | null | undefined>,
	}
	export function CreateListExecutionsRequestFormGroup() {
		return new FormGroup<ListExecutionsRequestFormProperties>({
			MaxResults: new FormControl<number | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
			WorkflowId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ListHostKeysResponse {
		NextToken?: string;

		/** Required */
		ServerId: string;

		/** Required */
		HostKeys: Array<ListedHostKey>;
	}
	export interface ListHostKeysResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,

		/** Required */
		ServerId: FormControl<string | null | undefined>,
	}
	export function CreateListHostKeysResponseFormGroup() {
		return new FormGroup<ListHostKeysResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
			ServerId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Returns properties of the host key that's specified. */
	export interface ListedHostKey {

		/** Required */
		Arn: string;
		HostKeyId?: string;
		Fingerprint?: string;
		Description?: string;
		Type?: string;
		DateImported?: Date;
	}

	/** Returns properties of the host key that's specified. */
	export interface ListedHostKeyFormProperties {

		/** Required */
		Arn: FormControl<string | null | undefined>,
		HostKeyId: FormControl<string | null | undefined>,
		Fingerprint: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
		Type: FormControl<string | null | undefined>,
		DateImported: FormControl<Date | null | undefined>,
	}
	export function CreateListedHostKeyFormGroup() {
		return new FormGroup<ListedHostKeyFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			HostKeyId: new FormControl<string | null | undefined>(undefined),
			Fingerprint: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			Type: new FormControl<string | null | undefined>(undefined),
			DateImported: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface ListHostKeysRequest {
		MaxResults?: number | null;
		NextToken?: string;

		/** Required */
		ServerId: string;
	}
	export interface ListHostKeysRequestFormProperties {
		MaxResults: FormControl<number | null | undefined>,
		NextToken: FormControl<string | null | undefined>,

		/** Required */
		ServerId: FormControl<string | null | undefined>,
	}
	export function CreateListHostKeysRequestFormGroup() {
		return new FormGroup<ListHostKeysRequestFormProperties>({
			MaxResults: new FormControl<number | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
			ServerId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ListProfilesResponse {
		NextToken?: string;

		/** Required */
		Profiles: Array<ListedProfile>;
	}
	export interface ListProfilesResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListProfilesResponseFormGroup() {
		return new FormGroup<ListProfilesResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Returns the properties of the profile that was specified. */
	export interface ListedProfile {
		Arn?: string;
		ProfileId?: string;
		As2Id?: string;
		ProfileType?: ProfileType;
	}

	/** Returns the properties of the profile that was specified. */
	export interface ListedProfileFormProperties {
		Arn: FormControl<string | null | undefined>,
		ProfileId: FormControl<string | null | undefined>,
		As2Id: FormControl<string | null | undefined>,
		ProfileType: FormControl<ProfileType | null | undefined>,
	}
	export function CreateListedProfileFormGroup() {
		return new FormGroup<ListedProfileFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined),
			ProfileId: new FormControl<string | null | undefined>(undefined),
			As2Id: new FormControl<string | null | undefined>(undefined),
			ProfileType: new FormControl<ProfileType | null | undefined>(undefined),
		});

	}

	export interface ListProfilesRequest {
		MaxResults?: number | null;
		NextToken?: string;
		ProfileType?: ProfileType;
	}
	export interface ListProfilesRequestFormProperties {
		MaxResults: FormControl<number | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
		ProfileType: FormControl<ProfileType | null | undefined>,
	}
	export function CreateListProfilesRequestFormGroup() {
		return new FormGroup<ListProfilesRequestFormProperties>({
			MaxResults: new FormControl<number | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
			ProfileType: new FormControl<ProfileType | null | undefined>(undefined),
		});

	}

	export interface ListSecurityPoliciesResponse {
		NextToken?: string;

		/** Required */
		SecurityPolicyNames: Array<string>;
	}
	export interface ListSecurityPoliciesResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListSecurityPoliciesResponseFormGroup() {
		return new FormGroup<ListSecurityPoliciesResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListSecurityPoliciesRequest {
		MaxResults?: number | null;
		NextToken?: string;
	}
	export interface ListSecurityPoliciesRequestFormProperties {
		MaxResults: FormControl<number | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListSecurityPoliciesRequestFormGroup() {
		return new FormGroup<ListSecurityPoliciesRequestFormProperties>({
			MaxResults: new FormControl<number | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListServersResponse {
		NextToken?: string;

		/** Required */
		Servers: Array<ListedServer>;
	}
	export interface ListServersResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListServersResponseFormGroup() {
		return new FormGroup<ListServersResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Returns properties of a file transfer protocol-enabled server that was specified. */
	export interface ListedServer {

		/** Required */
		Arn: string;
		Domain?: Domain;
		IdentityProviderType?: IdentityProviderType;
		EndpointType?: EndpointType;
		LoggingRole?: string;
		ServerId?: string;
		State?: State;
		UserCount?: number | null;
	}

	/** Returns properties of a file transfer protocol-enabled server that was specified. */
	export interface ListedServerFormProperties {

		/** Required */
		Arn: FormControl<string | null | undefined>,
		Domain: FormControl<Domain | null | undefined>,
		IdentityProviderType: FormControl<IdentityProviderType | null | undefined>,
		EndpointType: FormControl<EndpointType | null | undefined>,
		LoggingRole: FormControl<string | null | undefined>,
		ServerId: FormControl<string | null | undefined>,
		State: FormControl<State | null | undefined>,
		UserCount: FormControl<number | null | undefined>,
	}
	export function CreateListedServerFormGroup() {
		return new FormGroup<ListedServerFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Domain: new FormControl<Domain | null | undefined>(undefined),
			IdentityProviderType: new FormControl<IdentityProviderType | null | undefined>(undefined),
			EndpointType: new FormControl<EndpointType | null | undefined>(undefined),
			LoggingRole: new FormControl<string | null | undefined>(undefined),
			ServerId: new FormControl<string | null | undefined>(undefined),
			State: new FormControl<State | null | undefined>(undefined),
			UserCount: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ListServersRequest {
		MaxResults?: number | null;
		NextToken?: string;
	}
	export interface ListServersRequestFormProperties {
		MaxResults: FormControl<number | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListServersRequestFormGroup() {
		return new FormGroup<ListServersRequestFormProperties>({
			MaxResults: new FormControl<number | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListTagsForResourceResponse {
		Arn?: string;
		NextToken?: string;
		Tags?: Array<Tag>;
	}
	export interface ListTagsForResourceResponseFormProperties {
		Arn: FormControl<string | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListTagsForResourceResponseFormGroup() {
		return new FormGroup<ListTagsForResourceResponseFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListTagsForResourceRequest {

		/** Required */
		Arn: string;
		MaxResults?: number | null;
		NextToken?: string;
	}
	export interface ListTagsForResourceRequestFormProperties {

		/** Required */
		Arn: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListTagsForResourceRequestFormGroup() {
		return new FormGroup<ListTagsForResourceRequestFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			MaxResults: new FormControl<number | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListUsersResponse {
		NextToken?: string;

		/** Required */
		ServerId: string;

		/** Required */
		Users: Array<ListedUser>;
	}
	export interface ListUsersResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,

		/** Required */
		ServerId: FormControl<string | null | undefined>,
	}
	export function CreateListUsersResponseFormGroup() {
		return new FormGroup<ListUsersResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
			ServerId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Returns properties of the user that you specify. */
	export interface ListedUser {

		/** Required */
		Arn: string;
		HomeDirectory?: string;
		HomeDirectoryType?: HomeDirectoryType;
		Role?: string;
		SshPublicKeyCount?: number | null;
		UserName?: string;
	}

	/** Returns properties of the user that you specify. */
	export interface ListedUserFormProperties {

		/** Required */
		Arn: FormControl<string | null | undefined>,
		HomeDirectory: FormControl<string | null | undefined>,
		HomeDirectoryType: FormControl<HomeDirectoryType | null | undefined>,
		Role: FormControl<string | null | undefined>,
		SshPublicKeyCount: FormControl<number | null | undefined>,
		UserName: FormControl<string | null | undefined>,
	}
	export function CreateListedUserFormGroup() {
		return new FormGroup<ListedUserFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			HomeDirectory: new FormControl<string | null | undefined>(undefined),
			HomeDirectoryType: new FormControl<HomeDirectoryType | null | undefined>(undefined),
			Role: new FormControl<string | null | undefined>(undefined),
			SshPublicKeyCount: new FormControl<number | null | undefined>(undefined),
			UserName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListUsersRequest {
		MaxResults?: number | null;
		NextToken?: string;

		/** Required */
		ServerId: string;
	}
	export interface ListUsersRequestFormProperties {
		MaxResults: FormControl<number | null | undefined>,
		NextToken: FormControl<string | null | undefined>,

		/** Required */
		ServerId: FormControl<string | null | undefined>,
	}
	export function CreateListUsersRequestFormGroup() {
		return new FormGroup<ListUsersRequestFormProperties>({
			MaxResults: new FormControl<number | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
			ServerId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ListWorkflowsResponse {
		NextToken?: string;

		/** Required */
		Workflows: Array<ListedWorkflow>;
	}
	export interface ListWorkflowsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListWorkflowsResponseFormGroup() {
		return new FormGroup<ListWorkflowsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains the identifier, text description, and Amazon Resource Name (ARN) for the workflow. */
	export interface ListedWorkflow {
		WorkflowId?: string;
		Description?: string;
		Arn?: string;
	}

	/** Contains the identifier, text description, and Amazon Resource Name (ARN) for the workflow. */
	export interface ListedWorkflowFormProperties {
		WorkflowId: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
		Arn: FormControl<string | null | undefined>,
	}
	export function CreateListedWorkflowFormGroup() {
		return new FormGroup<ListedWorkflowFormProperties>({
			WorkflowId: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			Arn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListWorkflowsRequest {
		MaxResults?: number | null;
		NextToken?: string;
	}
	export interface ListWorkflowsRequestFormProperties {
		MaxResults: FormControl<number | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListWorkflowsRequestFormGroup() {
		return new FormGroup<ListWorkflowsRequestFormProperties>({
			MaxResults: new FormControl<number | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface SendWorkflowStepStateResponse {
	}
	export interface SendWorkflowStepStateResponseFormProperties {
	}
	export function CreateSendWorkflowStepStateResponseFormGroup() {
		return new FormGroup<SendWorkflowStepStateResponseFormProperties>({
		});

	}

	export interface SendWorkflowStepStateRequest {

		/** Required */
		WorkflowId: string;

		/** Required */
		ExecutionId: string;

		/** Required */
		Token: string;

		/** Required */
		Status: CustomStepStatus;
	}
	export interface SendWorkflowStepStateRequestFormProperties {

		/** Required */
		WorkflowId: FormControl<string | null | undefined>,

		/** Required */
		ExecutionId: FormControl<string | null | undefined>,

		/** Required */
		Token: FormControl<string | null | undefined>,

		/** Required */
		Status: FormControl<CustomStepStatus | null | undefined>,
	}
	export function CreateSendWorkflowStepStateRequestFormGroup() {
		return new FormGroup<SendWorkflowStepStateRequestFormProperties>({
			WorkflowId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ExecutionId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Token: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Status: new FormControl<CustomStepStatus | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum CustomStepStatus { SUCCESS = 0, FAILURE = 1 }

	export interface StartFileTransferResponse {

		/** Required */
		TransferId: string;
	}
	export interface StartFileTransferResponseFormProperties {

		/** Required */
		TransferId: FormControl<string | null | undefined>,
	}
	export function CreateStartFileTransferResponseFormGroup() {
		return new FormGroup<StartFileTransferResponseFormProperties>({
			TransferId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface StartFileTransferRequest {

		/** Required */
		ConnectorId: string;
		SendFilePaths?: Array<string>;
		RetrieveFilePaths?: Array<string>;
		LocalDirectoryPath?: string;
		RemoteDirectoryPath?: string;
	}
	export interface StartFileTransferRequestFormProperties {

		/** Required */
		ConnectorId: FormControl<string | null | undefined>,
		LocalDirectoryPath: FormControl<string | null | undefined>,
		RemoteDirectoryPath: FormControl<string | null | undefined>,
	}
	export function CreateStartFileTransferRequestFormGroup() {
		return new FormGroup<StartFileTransferRequestFormProperties>({
			ConnectorId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			LocalDirectoryPath: new FormControl<string | null | undefined>(undefined),
			RemoteDirectoryPath: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface StartServerRequest {

		/** Required */
		ServerId: string;
	}
	export interface StartServerRequestFormProperties {

		/** Required */
		ServerId: FormControl<string | null | undefined>,
	}
	export function CreateStartServerRequestFormGroup() {
		return new FormGroup<StartServerRequestFormProperties>({
			ServerId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface StopServerRequest {

		/** Required */
		ServerId: string;
	}
	export interface StopServerRequestFormProperties {

		/** Required */
		ServerId: FormControl<string | null | undefined>,
	}
	export function CreateStopServerRequestFormGroup() {
		return new FormGroup<StopServerRequestFormProperties>({
			ServerId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface TagResourceRequest {

		/** Required */
		Arn: string;

		/** Required */
		Tags: Array<Tag>;
	}
	export interface TagResourceRequestFormProperties {

		/** Required */
		Arn: FormControl<string | null | undefined>,
	}
	export function CreateTagResourceRequestFormGroup() {
		return new FormGroup<TagResourceRequestFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface TestConnectionResponse {
		ConnectorId?: string;
		Status?: string;
		StatusMessage?: string;
	}
	export interface TestConnectionResponseFormProperties {
		ConnectorId: FormControl<string | null | undefined>,
		Status: FormControl<string | null | undefined>,
		StatusMessage: FormControl<string | null | undefined>,
	}
	export function CreateTestConnectionResponseFormGroup() {
		return new FormGroup<TestConnectionResponseFormProperties>({
			ConnectorId: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<string | null | undefined>(undefined),
			StatusMessage: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface TestConnectionRequest {

		/** Required */
		ConnectorId: string;
	}
	export interface TestConnectionRequestFormProperties {

		/** Required */
		ConnectorId: FormControl<string | null | undefined>,
	}
	export function CreateTestConnectionRequestFormGroup() {
		return new FormGroup<TestConnectionRequestFormProperties>({
			ConnectorId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface TestIdentityProviderResponse {
		Response?: string;

		/** Required */
		StatusCode: number;
		Message?: string;

		/** Required */
		Url: string;
	}
	export interface TestIdentityProviderResponseFormProperties {
		Response: FormControl<string | null | undefined>,

		/** Required */
		StatusCode: FormControl<number | null | undefined>,
		Message: FormControl<string | null | undefined>,

		/** Required */
		Url: FormControl<string | null | undefined>,
	}
	export function CreateTestIdentityProviderResponseFormGroup() {
		return new FormGroup<TestIdentityProviderResponseFormProperties>({
			Response: new FormControl<string | null | undefined>(undefined),
			StatusCode: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			Message: new FormControl<string | null | undefined>(undefined),
			Url: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface TestIdentityProviderRequest {

		/** Required */
		ServerId: string;
		ServerProtocol?: Protocol;
		SourceIp?: string;

		/** Required */
		UserName: string;
		UserPassword?: string;
	}
	export interface TestIdentityProviderRequestFormProperties {

		/** Required */
		ServerId: FormControl<string | null | undefined>,
		ServerProtocol: FormControl<Protocol | null | undefined>,
		SourceIp: FormControl<string | null | undefined>,

		/** Required */
		UserName: FormControl<string | null | undefined>,
		UserPassword: FormControl<string | null | undefined>,
	}
	export function CreateTestIdentityProviderRequestFormGroup() {
		return new FormGroup<TestIdentityProviderRequestFormProperties>({
			ServerId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ServerProtocol: new FormControl<Protocol | null | undefined>(undefined),
			SourceIp: new FormControl<string | null | undefined>(undefined),
			UserName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			UserPassword: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UntagResourceRequest {

		/** Required */
		Arn: string;

		/** Required */
		TagKeys: Array<string>;
	}
	export interface UntagResourceRequestFormProperties {

		/** Required */
		Arn: FormControl<string | null | undefined>,
	}
	export function CreateUntagResourceRequestFormGroup() {
		return new FormGroup<UntagResourceRequestFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UpdateAccessResponse {

		/** Required */
		ServerId: string;

		/** Required */
		ExternalId: string;
	}
	export interface UpdateAccessResponseFormProperties {

		/** Required */
		ServerId: FormControl<string | null | undefined>,

		/** Required */
		ExternalId: FormControl<string | null | undefined>,
	}
	export function CreateUpdateAccessResponseFormGroup() {
		return new FormGroup<UpdateAccessResponseFormProperties>({
			ServerId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ExternalId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UpdateAccessRequest {
		HomeDirectory?: string;
		HomeDirectoryType?: HomeDirectoryType;
		HomeDirectoryMappings?: Array<HomeDirectoryMapEntry>;
		Policy?: string;

		/** The full POSIX identity, including user ID (<code>Uid</code>), group ID (<code>Gid</code>), and any secondary groups IDs (<code>SecondaryGids</code>), that controls your users' access to your Amazon EFS file systems. The POSIX permissions that are set on files and directories in your file system determine the level of access your users get when transferring files into and out of your Amazon EFS file systems. */
		PosixProfile?: PosixProfile;
		Role?: string;

		/** Required */
		ServerId: string;

		/** Required */
		ExternalId: string;
	}
	export interface UpdateAccessRequestFormProperties {
		HomeDirectory: FormControl<string | null | undefined>,
		HomeDirectoryType: FormControl<HomeDirectoryType | null | undefined>,
		Policy: FormControl<string | null | undefined>,
		Role: FormControl<string | null | undefined>,

		/** Required */
		ServerId: FormControl<string | null | undefined>,

		/** Required */
		ExternalId: FormControl<string | null | undefined>,
	}
	export function CreateUpdateAccessRequestFormGroup() {
		return new FormGroup<UpdateAccessRequestFormProperties>({
			HomeDirectory: new FormControl<string | null | undefined>(undefined),
			HomeDirectoryType: new FormControl<HomeDirectoryType | null | undefined>(undefined),
			Policy: new FormControl<string | null | undefined>(undefined),
			Role: new FormControl<string | null | undefined>(undefined),
			ServerId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ExternalId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UpdateAgreementResponse {

		/** Required */
		AgreementId: string;
	}
	export interface UpdateAgreementResponseFormProperties {

		/** Required */
		AgreementId: FormControl<string | null | undefined>,
	}
	export function CreateUpdateAgreementResponseFormGroup() {
		return new FormGroup<UpdateAgreementResponseFormProperties>({
			AgreementId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UpdateAgreementRequest {

		/** Required */
		AgreementId: string;

		/** Required */
		ServerId: string;
		Description?: string;
		Status?: AgreementStatusType;
		LocalProfileId?: string;
		PartnerProfileId?: string;
		BaseDirectory?: string;
		AccessRole?: string;
	}
	export interface UpdateAgreementRequestFormProperties {

		/** Required */
		AgreementId: FormControl<string | null | undefined>,

		/** Required */
		ServerId: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
		Status: FormControl<AgreementStatusType | null | undefined>,
		LocalProfileId: FormControl<string | null | undefined>,
		PartnerProfileId: FormControl<string | null | undefined>,
		BaseDirectory: FormControl<string | null | undefined>,
		AccessRole: FormControl<string | null | undefined>,
	}
	export function CreateUpdateAgreementRequestFormGroup() {
		return new FormGroup<UpdateAgreementRequestFormProperties>({
			AgreementId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ServerId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Description: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<AgreementStatusType | null | undefined>(undefined),
			LocalProfileId: new FormControl<string | null | undefined>(undefined),
			PartnerProfileId: new FormControl<string | null | undefined>(undefined),
			BaseDirectory: new FormControl<string | null | undefined>(undefined),
			AccessRole: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateCertificateResponse {

		/** Required */
		CertificateId: string;
	}
	export interface UpdateCertificateResponseFormProperties {

		/** Required */
		CertificateId: FormControl<string | null | undefined>,
	}
	export function CreateUpdateCertificateResponseFormGroup() {
		return new FormGroup<UpdateCertificateResponseFormProperties>({
			CertificateId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UpdateCertificateRequest {

		/** Required */
		CertificateId: string;
		ActiveDate?: Date;
		InactiveDate?: Date;
		Description?: string;
	}
	export interface UpdateCertificateRequestFormProperties {

		/** Required */
		CertificateId: FormControl<string | null | undefined>,
		ActiveDate: FormControl<Date | null | undefined>,
		InactiveDate: FormControl<Date | null | undefined>,
		Description: FormControl<string | null | undefined>,
	}
	export function CreateUpdateCertificateRequestFormGroup() {
		return new FormGroup<UpdateCertificateRequestFormProperties>({
			CertificateId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ActiveDate: new FormControl<Date | null | undefined>(undefined),
			InactiveDate: new FormControl<Date | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateConnectorResponse {

		/** Required */
		ConnectorId: string;
	}
	export interface UpdateConnectorResponseFormProperties {

		/** Required */
		ConnectorId: FormControl<string | null | undefined>,
	}
	export function CreateUpdateConnectorResponseFormGroup() {
		return new FormGroup<UpdateConnectorResponseFormProperties>({
			ConnectorId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UpdateConnectorRequest {

		/** Required */
		ConnectorId: string;
		Url?: string;
		As2Config?: As2ConnectorConfig;
		AccessRole?: string;
		LoggingRole?: string;
		SftpConfig?: SftpConnectorConfig;
	}
	export interface UpdateConnectorRequestFormProperties {

		/** Required */
		ConnectorId: FormControl<string | null | undefined>,
		Url: FormControl<string | null | undefined>,
		AccessRole: FormControl<string | null | undefined>,
		LoggingRole: FormControl<string | null | undefined>,
	}
	export function CreateUpdateConnectorRequestFormGroup() {
		return new FormGroup<UpdateConnectorRequestFormProperties>({
			ConnectorId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Url: new FormControl<string | null | undefined>(undefined),
			AccessRole: new FormControl<string | null | undefined>(undefined),
			LoggingRole: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateHostKeyResponse {

		/** Required */
		ServerId: string;

		/** Required */
		HostKeyId: string;
	}
	export interface UpdateHostKeyResponseFormProperties {

		/** Required */
		ServerId: FormControl<string | null | undefined>,

		/** Required */
		HostKeyId: FormControl<string | null | undefined>,
	}
	export function CreateUpdateHostKeyResponseFormGroup() {
		return new FormGroup<UpdateHostKeyResponseFormProperties>({
			ServerId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			HostKeyId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UpdateHostKeyRequest {

		/** Required */
		ServerId: string;

		/** Required */
		HostKeyId: string;

		/** Required */
		Description: string;
	}
	export interface UpdateHostKeyRequestFormProperties {

		/** Required */
		ServerId: FormControl<string | null | undefined>,

		/** Required */
		HostKeyId: FormControl<string | null | undefined>,

		/** Required */
		Description: FormControl<string | null | undefined>,
	}
	export function CreateUpdateHostKeyRequestFormGroup() {
		return new FormGroup<UpdateHostKeyRequestFormProperties>({
			ServerId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			HostKeyId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Description: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UpdateProfileResponse {

		/** Required */
		ProfileId: string;
	}
	export interface UpdateProfileResponseFormProperties {

		/** Required */
		ProfileId: FormControl<string | null | undefined>,
	}
	export function CreateUpdateProfileResponseFormGroup() {
		return new FormGroup<UpdateProfileResponseFormProperties>({
			ProfileId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UpdateProfileRequest {

		/** Required */
		ProfileId: string;
		CertificateIds?: Array<string>;
	}
	export interface UpdateProfileRequestFormProperties {

		/** Required */
		ProfileId: FormControl<string | null | undefined>,
	}
	export function CreateUpdateProfileRequestFormGroup() {
		return new FormGroup<UpdateProfileRequestFormProperties>({
			ProfileId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UpdateServerResponse {

		/** Required */
		ServerId: string;
	}
	export interface UpdateServerResponseFormProperties {

		/** Required */
		ServerId: FormControl<string | null | undefined>,
	}
	export function CreateUpdateServerResponseFormGroup() {
		return new FormGroup<UpdateServerResponseFormProperties>({
			ServerId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UpdateServerRequest {
		Certificate?: string;
		ProtocolDetails?: ProtocolDetails;
		EndpointDetails?: EndpointDetails;
		EndpointType?: EndpointType;
		HostKey?: string;
		IdentityProviderDetails?: IdentityProviderDetails;
		LoggingRole?: string;
		PostAuthenticationLoginBanner?: string;
		PreAuthenticationLoginBanner?: string;
		Protocols?: Array<Protocol>;
		SecurityPolicyName?: string;

		/** Required */
		ServerId: string;
		WorkflowDetails?: WorkflowDetails;
		StructuredLogDestinations?: Array<string>;
	}
	export interface UpdateServerRequestFormProperties {
		Certificate: FormControl<string | null | undefined>,
		EndpointType: FormControl<EndpointType | null | undefined>,
		HostKey: FormControl<string | null | undefined>,
		LoggingRole: FormControl<string | null | undefined>,
		PostAuthenticationLoginBanner: FormControl<string | null | undefined>,
		PreAuthenticationLoginBanner: FormControl<string | null | undefined>,
		SecurityPolicyName: FormControl<string | null | undefined>,

		/** Required */
		ServerId: FormControl<string | null | undefined>,
	}
	export function CreateUpdateServerRequestFormGroup() {
		return new FormGroup<UpdateServerRequestFormProperties>({
			Certificate: new FormControl<string | null | undefined>(undefined),
			EndpointType: new FormControl<EndpointType | null | undefined>(undefined),
			HostKey: new FormControl<string | null | undefined>(undefined),
			LoggingRole: new FormControl<string | null | undefined>(undefined),
			PostAuthenticationLoginBanner: new FormControl<string | null | undefined>(undefined),
			PreAuthenticationLoginBanner: new FormControl<string | null | undefined>(undefined),
			SecurityPolicyName: new FormControl<string | null | undefined>(undefined),
			ServerId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
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


	/**  <code>UpdateUserResponse</code> returns the user name and identifier for the request to update a user's properties. */
	export interface UpdateUserResponse {

		/** Required */
		ServerId: string;

		/** Required */
		UserName: string;
	}

	/**  <code>UpdateUserResponse</code> returns the user name and identifier for the request to update a user's properties. */
	export interface UpdateUserResponseFormProperties {

		/** Required */
		ServerId: FormControl<string | null | undefined>,

		/** Required */
		UserName: FormControl<string | null | undefined>,
	}
	export function CreateUpdateUserResponseFormGroup() {
		return new FormGroup<UpdateUserResponseFormProperties>({
			ServerId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			UserName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UpdateUserRequest {
		HomeDirectory?: string;
		HomeDirectoryType?: HomeDirectoryType;
		HomeDirectoryMappings?: Array<HomeDirectoryMapEntry>;
		Policy?: string;
		PosixProfile?: PosixProfile;
		Role?: string;

		/** Required */
		ServerId: string;

		/** Required */
		UserName: string;
	}
	export interface UpdateUserRequestFormProperties {
		HomeDirectory: FormControl<string | null | undefined>,
		HomeDirectoryType: FormControl<HomeDirectoryType | null | undefined>,
		Policy: FormControl<string | null | undefined>,
		Role: FormControl<string | null | undefined>,

		/** Required */
		ServerId: FormControl<string | null | undefined>,

		/** Required */
		UserName: FormControl<string | null | undefined>,
	}
	export function CreateUpdateUserRequestFormGroup() {
		return new FormGroup<UpdateUserRequestFormProperties>({
			HomeDirectory: new FormControl<string | null | undefined>(undefined),
			HomeDirectoryType: new FormControl<HomeDirectoryType | null | undefined>(undefined),
			Policy: new FormControl<string | null | undefined>(undefined),
			Role: new FormControl<string | null | undefined>(undefined),
			ServerId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			UserName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Used by administrators to choose which groups in the directory should have access to upload and download files over the enabled protocols using Transfer Family. For example, a Microsoft Active Directory might contain 50,000 users, but only a small fraction might need the ability to transfer files to the server. An administrator can use <code>CreateAccess</code> to limit the access to the correct set of users who need this ability.
		 * Post #X-Amz-Target=TransferService.CreateAccess
		 * @return {CreateAccessResponse} Success
		 */
		CreateAccess(requestBody: CreateAccessRequest): Observable<CreateAccessResponse> {
			return this.http.post<CreateAccessResponse>(this.baseUri + '#X-Amz-Target=TransferService.CreateAccess', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Creates an agreement. An agreement is a bilateral trading partner agreement, or partnership, between an Transfer Family server and an AS2 process. The agreement defines the file and message transfer relationship between the server and the AS2 process. To define an agreement, Transfer Family combines a server, local profile, partner profile, certificate, and other attributes.</p> <p>The partner is identified with the <code>PartnerProfileId</code>, and the AS2 process is identified with the <code>LocalProfileId</code>.</p>
		 * Post #X-Amz-Target=TransferService.CreateAgreement
		 * @return {CreateAgreementResponse} Success
		 */
		CreateAgreement(requestBody: CreateAgreementRequest): Observable<CreateAgreementResponse> {
			return this.http.post<CreateAgreementResponse>(this.baseUri + '#X-Amz-Target=TransferService.CreateAgreement', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Creates the connector, which captures the parameters for an outbound connection for the AS2 or SFTP protocol. The connector is required for sending files to an externally hosted AS2 or SFTP server. For more details about AS2 connectors, see <a href="https://docs.aws.amazon.com/transfer/latest/userguide/create-b2b-server.html#configure-as2-connector">Create AS2 connectors</a>.</p> <note> <p>You must specify exactly one configuration object: either for AS2 (<code>As2Config</code>) or SFTP (<code>SftpConfig</code>).</p> </note>
		 * Post #X-Amz-Target=TransferService.CreateConnector
		 * @return {CreateConnectorResponse} Success
		 */
		CreateConnector(requestBody: CreateConnectorRequest): Observable<CreateConnectorResponse> {
			return this.http.post<CreateConnectorResponse>(this.baseUri + '#X-Amz-Target=TransferService.CreateConnector', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Creates the local or partner profile to use for AS2 transfers.
		 * Post #X-Amz-Target=TransferService.CreateProfile
		 * @return {CreateProfileResponse} Success
		 */
		CreateProfile(requestBody: CreateProfileRequest): Observable<CreateProfileResponse> {
			return this.http.post<CreateProfileResponse>(this.baseUri + '#X-Amz-Target=TransferService.CreateProfile', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Instantiates an auto-scaling virtual server based on the selected file transfer protocol in Amazon Web Services. When you make updates to your file transfer protocol-enabled server or when you work with users, use the service-generated <code>ServerId</code> property that is assigned to the newly created server.
		 * Post #X-Amz-Target=TransferService.CreateServer
		 * @return {CreateServerResponse} Success
		 */
		CreateServer(requestBody: CreateServerRequest): Observable<CreateServerResponse> {
			return this.http.post<CreateServerResponse>(this.baseUri + '#X-Amz-Target=TransferService.CreateServer', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Creates a user and associates them with an existing file transfer protocol-enabled server. You can only create and associate users with servers that have the <code>IdentityProviderType</code> set to <code>SERVICE_MANAGED</code>. Using parameters for <code>CreateUser</code>, you can specify the user name, set the home directory, store the user's public key, and assign the user's Identity and Access Management (IAM) role. You can also optionally add a session policy, and assign metadata with tags that can be used to group and search for users.
		 * Post #X-Amz-Target=TransferService.CreateUser
		 * @return {CreateUserResponse} Success
		 */
		CreateUser(requestBody: CreateUserRequest): Observable<CreateUserResponse> {
			return this.http.post<CreateUserResponse>(this.baseUri + '#X-Amz-Target=TransferService.CreateUser', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Allows you to create a workflow with specified steps and step details the workflow invokes after file transfer completes. After creating a workflow, you can associate the workflow created with any transfer servers by specifying the <code>workflow-details</code> field in <code>CreateServer</code> and <code>UpdateServer</code> operations.
		 * Post #X-Amz-Target=TransferService.CreateWorkflow
		 * @return {CreateWorkflowResponse} Success
		 */
		CreateWorkflow(requestBody: CreateWorkflowRequest): Observable<CreateWorkflowResponse> {
			return this.http.post<CreateWorkflowResponse>(this.baseUri + '#X-Amz-Target=TransferService.CreateWorkflow', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Allows you to delete the access specified in the <code>ServerID</code> and <code>ExternalID</code> parameters.
		 * Post #X-Amz-Target=TransferService.DeleteAccess
		 * @return {void} Success
		 */
		DeleteAccess(requestBody: DeleteAccessRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '#X-Amz-Target=TransferService.DeleteAccess', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete the agreement that's specified in the provided <code>AgreementId</code>.
		 * Post #X-Amz-Target=TransferService.DeleteAgreement
		 * @return {void} Success
		 */
		DeleteAgreement(requestBody: DeleteAgreementRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '#X-Amz-Target=TransferService.DeleteAgreement', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Deletes the certificate that's specified in the <code>CertificateId</code> parameter.
		 * Post #X-Amz-Target=TransferService.DeleteCertificate
		 * @return {void} Success
		 */
		DeleteCertificate(requestBody: DeleteCertificateRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '#X-Amz-Target=TransferService.DeleteCertificate', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Deletes the connector that's specified in the provided <code>ConnectorId</code>.
		 * Post #X-Amz-Target=TransferService.DeleteConnector
		 * @return {void} Success
		 */
		DeleteConnector(requestBody: DeleteConnectorRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '#X-Amz-Target=TransferService.DeleteConnector', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Deletes the host key that's specified in the <code>HostKeyId</code> parameter.
		 * Post #X-Amz-Target=TransferService.DeleteHostKey
		 * @return {void} Success
		 */
		DeleteHostKey(requestBody: DeleteHostKeyRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '#X-Amz-Target=TransferService.DeleteHostKey', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Deletes the profile that's specified in the <code>ProfileId</code> parameter.
		 * Post #X-Amz-Target=TransferService.DeleteProfile
		 * @return {void} Success
		 */
		DeleteProfile(requestBody: DeleteProfileRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '#X-Amz-Target=TransferService.DeleteProfile', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Deletes the file transfer protocol-enabled server that you specify.</p> <p>No response returns from this operation.</p>
		 * Post #X-Amz-Target=TransferService.DeleteServer
		 * @return {void} Success
		 */
		DeleteServer(requestBody: DeleteServerRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '#X-Amz-Target=TransferService.DeleteServer', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Deletes a user's Secure Shell (SSH) public key.
		 * Post #X-Amz-Target=TransferService.DeleteSshPublicKey
		 * @return {void} Success
		 */
		DeleteSshPublicKey(requestBody: DeleteSshPublicKeyRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '#X-Amz-Target=TransferService.DeleteSshPublicKey', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Deletes the user belonging to a file transfer protocol-enabled server you specify.</p> <p>No response returns from this operation.</p> <note> <p>When you delete a user from a server, the user's information is lost.</p> </note>
		 * Post #X-Amz-Target=TransferService.DeleteUser
		 * @return {void} Success
		 */
		DeleteUser(requestBody: DeleteUserRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '#X-Amz-Target=TransferService.DeleteUser', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Deletes the specified workflow.
		 * Post #X-Amz-Target=TransferService.DeleteWorkflow
		 * @return {void} Success
		 */
		DeleteWorkflow(requestBody: DeleteWorkflowRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '#X-Amz-Target=TransferService.DeleteWorkflow', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Describes the access that is assigned to the specific file transfer protocol-enabled server, as identified by its <code>ServerId</code> property and its <code>ExternalId</code>.</p> <p>The response from this call returns the properties of the access that is associated with the <code>ServerId</code> value that was specified.</p>
		 * Post #X-Amz-Target=TransferService.DescribeAccess
		 * @return {DescribeAccessResponse} Success
		 */
		DescribeAccess(requestBody: DescribeAccessRequest): Observable<DescribeAccessResponse> {
			return this.http.post<DescribeAccessResponse>(this.baseUri + '#X-Amz-Target=TransferService.DescribeAccess', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Describes the agreement that's identified by the <code>AgreementId</code>.
		 * Post #X-Amz-Target=TransferService.DescribeAgreement
		 * @return {DescribeAgreementResponse} Success
		 */
		DescribeAgreement(requestBody: DescribeAgreementRequest): Observable<DescribeAgreementResponse> {
			return this.http.post<DescribeAgreementResponse>(this.baseUri + '#X-Amz-Target=TransferService.DescribeAgreement', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Describes the certificate that's identified by the <code>CertificateId</code>.
		 * Post #X-Amz-Target=TransferService.DescribeCertificate
		 * @return {DescribeCertificateResponse} Success
		 */
		DescribeCertificate(requestBody: DescribeCertificateRequest): Observable<DescribeCertificateResponse> {
			return this.http.post<DescribeCertificateResponse>(this.baseUri + '#X-Amz-Target=TransferService.DescribeCertificate', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Describes the connector that's identified by the <code>ConnectorId.</code>
		 * Post #X-Amz-Target=TransferService.DescribeConnector
		 * @return {DescribeConnectorResponse} Success
		 */
		DescribeConnector(requestBody: DescribeConnectorRequest): Observable<DescribeConnectorResponse> {
			return this.http.post<DescribeConnectorResponse>(this.baseUri + '#X-Amz-Target=TransferService.DescribeConnector', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>You can use <code>DescribeExecution</code> to check the details of the execution of the specified workflow.</p> <note> <p>This API call only returns details for in-progress workflows.</p> <p> If you provide an ID for an execution that is not in progress, or if the execution doesn't match the specified workflow ID, you receive a <code>ResourceNotFound</code> exception.</p> </note>
		 * Post #X-Amz-Target=TransferService.DescribeExecution
		 * @return {DescribeExecutionResponse} Success
		 */
		DescribeExecution(requestBody: DescribeExecutionRequest): Observable<DescribeExecutionResponse> {
			return this.http.post<DescribeExecutionResponse>(this.baseUri + '#X-Amz-Target=TransferService.DescribeExecution', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns the details of the host key that's specified by the <code>HostKeyId</code> and <code>ServerId</code>.
		 * Post #X-Amz-Target=TransferService.DescribeHostKey
		 * @return {DescribeHostKeyResponse} Success
		 */
		DescribeHostKey(requestBody: DescribeHostKeyRequest): Observable<DescribeHostKeyResponse> {
			return this.http.post<DescribeHostKeyResponse>(this.baseUri + '#X-Amz-Target=TransferService.DescribeHostKey', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns the details of the profile that's specified by the <code>ProfileId</code>.
		 * Post #X-Amz-Target=TransferService.DescribeProfile
		 * @return {DescribeProfileResponse} Success
		 */
		DescribeProfile(requestBody: DescribeProfileRequest): Observable<DescribeProfileResponse> {
			return this.http.post<DescribeProfileResponse>(this.baseUri + '#X-Amz-Target=TransferService.DescribeProfile', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Describes the security policy that is attached to your file transfer protocol-enabled server. The response contains a description of the security policy's properties. For more information about security policies, see <a href="https://docs.aws.amazon.com/transfer/latest/userguide/security-policies.html">Working with security policies</a>.
		 * Post #X-Amz-Target=TransferService.DescribeSecurityPolicy
		 * @return {DescribeSecurityPolicyResponse} Success
		 */
		DescribeSecurityPolicy(requestBody: DescribeSecurityPolicyRequest): Observable<DescribeSecurityPolicyResponse> {
			return this.http.post<DescribeSecurityPolicyResponse>(this.baseUri + '#X-Amz-Target=TransferService.DescribeSecurityPolicy', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Describes a file transfer protocol-enabled server that you specify by passing the <code>ServerId</code> parameter.</p> <p>The response contains a description of a server's properties. When you set <code>EndpointType</code> to VPC, the response will contain the <code>EndpointDetails</code>.</p>
		 * Post #X-Amz-Target=TransferService.DescribeServer
		 * @return {DescribeServerResponse} Success
		 */
		DescribeServer(requestBody: DescribeServerRequest): Observable<DescribeServerResponse> {
			return this.http.post<DescribeServerResponse>(this.baseUri + '#X-Amz-Target=TransferService.DescribeServer', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Describes the user assigned to the specific file transfer protocol-enabled server, as identified by its <code>ServerId</code> property.</p> <p>The response from this call returns the properties of the user associated with the <code>ServerId</code> value that was specified.</p>
		 * Post #X-Amz-Target=TransferService.DescribeUser
		 * @return {DescribeUserResponse} Success
		 */
		DescribeUser(requestBody: DescribeUserRequest): Observable<DescribeUserResponse> {
			return this.http.post<DescribeUserResponse>(this.baseUri + '#X-Amz-Target=TransferService.DescribeUser', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Describes the specified workflow.
		 * Post #X-Amz-Target=TransferService.DescribeWorkflow
		 * @return {DescribeWorkflowResponse} Success
		 */
		DescribeWorkflow(requestBody: DescribeWorkflowRequest): Observable<DescribeWorkflowResponse> {
			return this.http.post<DescribeWorkflowResponse>(this.baseUri + '#X-Amz-Target=TransferService.DescribeWorkflow', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Imports the signing and encryption certificates that you need to create local (AS2) profiles and partner profiles.
		 * Post #X-Amz-Target=TransferService.ImportCertificate
		 * @return {ImportCertificateResponse} Success
		 */
		ImportCertificate(requestBody: ImportCertificateRequest): Observable<ImportCertificateResponse> {
			return this.http.post<ImportCertificateResponse>(this.baseUri + '#X-Amz-Target=TransferService.ImportCertificate', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Adds a host key to the server that's specified by the <code>ServerId</code> parameter.
		 * Post #X-Amz-Target=TransferService.ImportHostKey
		 * @return {ImportHostKeyResponse} Success
		 */
		ImportHostKey(requestBody: ImportHostKeyRequest): Observable<ImportHostKeyResponse> {
			return this.http.post<ImportHostKeyResponse>(this.baseUri + '#X-Amz-Target=TransferService.ImportHostKey', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Adds a Secure Shell (SSH) public key to a Transfer Family user identified by a <code>UserName</code> value assigned to the specific file transfer protocol-enabled server, identified by <code>ServerId</code>.</p> <p>The response returns the <code>UserName</code> value, the <code>ServerId</code> value, and the name of the <code>SshPublicKeyId</code>.</p>
		 * Post #X-Amz-Target=TransferService.ImportSshPublicKey
		 * @return {ImportSshPublicKeyResponse} Success
		 */
		ImportSshPublicKey(requestBody: ImportSshPublicKeyRequest): Observable<ImportSshPublicKeyResponse> {
			return this.http.post<ImportSshPublicKeyResponse>(this.baseUri + '#X-Amz-Target=TransferService.ImportSshPublicKey', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists the details for all the accesses you have on your server.
		 * Post #X-Amz-Target=TransferService.ListAccesses
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListAccessesResponse} Success
		 */
		ListAccesses(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListAccessesRequest): Observable<ListAccessesResponse> {
			return this.http.post<ListAccessesResponse>(this.baseUri + '#X-Amz-Target=TransferService.ListAccesses?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns a list of the agreements for the server that's identified by the <code>ServerId</code> that you supply. If you want to limit the results to a certain number, supply a value for the <code>MaxResults</code> parameter. If you ran the command previously and received a value for <code>NextToken</code>, you can supply that value to continue listing agreements from where you left off.
		 * Post #X-Amz-Target=TransferService.ListAgreements
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListAgreementsResponse} Success
		 */
		ListAgreements(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListAgreementsRequest): Observable<ListAgreementsResponse> {
			return this.http.post<ListAgreementsResponse>(this.baseUri + '#X-Amz-Target=TransferService.ListAgreements?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns a list of the current certificates that have been imported into Transfer Family. If you want to limit the results to a certain number, supply a value for the <code>MaxResults</code> parameter. If you ran the command previously and received a value for the <code>NextToken</code> parameter, you can supply that value to continue listing certificates from where you left off.
		 * Post #X-Amz-Target=TransferService.ListCertificates
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListCertificatesResponse} Success
		 */
		ListCertificates(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListCertificatesRequest): Observable<ListCertificatesResponse> {
			return this.http.post<ListCertificatesResponse>(this.baseUri + '#X-Amz-Target=TransferService.ListCertificates?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists the connectors for the specified Region.
		 * Post #X-Amz-Target=TransferService.ListConnectors
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListConnectorsResponse} Success
		 */
		ListConnectors(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListConnectorsRequest): Observable<ListConnectorsResponse> {
			return this.http.post<ListConnectorsResponse>(this.baseUri + '#X-Amz-Target=TransferService.ListConnectors?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Lists all in-progress executions for the specified workflow.</p> <note> <p>If the specified workflow ID cannot be found, <code>ListExecutions</code> returns a <code>ResourceNotFound</code> exception.</p> </note>
		 * Post #X-Amz-Target=TransferService.ListExecutions
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListExecutionsResponse} Success
		 */
		ListExecutions(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListExecutionsRequest): Observable<ListExecutionsResponse> {
			return this.http.post<ListExecutionsResponse>(this.baseUri + '#X-Amz-Target=TransferService.ListExecutions?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns a list of host keys for the server that's specified by the <code>ServerId</code> parameter.
		 * Post #X-Amz-Target=TransferService.ListHostKeys
		 * @return {ListHostKeysResponse} Success
		 */
		ListHostKeys(requestBody: ListHostKeysRequest): Observable<ListHostKeysResponse> {
			return this.http.post<ListHostKeysResponse>(this.baseUri + '#X-Amz-Target=TransferService.ListHostKeys', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns a list of the profiles for your system. If you want to limit the results to a certain number, supply a value for the <code>MaxResults</code> parameter. If you ran the command previously and received a value for <code>NextToken</code>, you can supply that value to continue listing profiles from where you left off.
		 * Post #X-Amz-Target=TransferService.ListProfiles
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListProfilesResponse} Success
		 */
		ListProfiles(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListProfilesRequest): Observable<ListProfilesResponse> {
			return this.http.post<ListProfilesResponse>(this.baseUri + '#X-Amz-Target=TransferService.ListProfiles?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists the security policies that are attached to your file transfer protocol-enabled servers.
		 * Post #X-Amz-Target=TransferService.ListSecurityPolicies
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListSecurityPoliciesResponse} Success
		 */
		ListSecurityPolicies(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListSecurityPoliciesRequest): Observable<ListSecurityPoliciesResponse> {
			return this.http.post<ListSecurityPoliciesResponse>(this.baseUri + '#X-Amz-Target=TransferService.ListSecurityPolicies?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists the file transfer protocol-enabled servers that are associated with your Amazon Web Services account.
		 * Post #X-Amz-Target=TransferService.ListServers
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListServersResponse} Success
		 */
		ListServers(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListServersRequest): Observable<ListServersResponse> {
			return this.http.post<ListServersResponse>(this.baseUri + '#X-Amz-Target=TransferService.ListServers?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists all of the tags associated with the Amazon Resource Name (ARN) that you specify. The resource can be a user, server, or role.
		 * Post #X-Amz-Target=TransferService.ListTagsForResource
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListTagsForResourceResponse} Success
		 */
		ListTagsForResource(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListTagsForResourceRequest): Observable<ListTagsForResourceResponse> {
			return this.http.post<ListTagsForResourceResponse>(this.baseUri + '#X-Amz-Target=TransferService.ListTagsForResource?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists the users for a file transfer protocol-enabled server that you specify by passing the <code>ServerId</code> parameter.
		 * Post #X-Amz-Target=TransferService.ListUsers
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListUsersResponse} Success
		 */
		ListUsers(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListUsersRequest): Observable<ListUsersResponse> {
			return this.http.post<ListUsersResponse>(this.baseUri + '#X-Amz-Target=TransferService.ListUsers?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists all workflows associated with your Amazon Web Services account for your current region.
		 * Post #X-Amz-Target=TransferService.ListWorkflows
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListWorkflowsResponse} Success
		 */
		ListWorkflows(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListWorkflowsRequest): Observable<ListWorkflowsResponse> {
			return this.http.post<ListWorkflowsResponse>(this.baseUri + '#X-Amz-Target=TransferService.ListWorkflows?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Sends a callback for asynchronous custom steps.</p> <p> The <code>ExecutionId</code>, <code>WorkflowId</code>, and <code>Token</code> are passed to the target resource during execution of a custom step of a workflow. You must include those with their callback as well as providing a status. </p>
		 * Post #X-Amz-Target=TransferService.SendWorkflowStepState
		 * @return {SendWorkflowStepStateResponse} Success
		 */
		SendWorkflowStepState(requestBody: SendWorkflowStepStateRequest): Observable<SendWorkflowStepStateResponse> {
			return this.http.post<SendWorkflowStepStateResponse>(this.baseUri + '#X-Amz-Target=TransferService.SendWorkflowStepState', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Begins a file transfer between local Amazon Web Services storage and a remote AS2 or SFTP server.</p> <ul> <li> <p>For an AS2 connector, you specify the <code>ConnectorId</code> and one or more <code>SendFilePaths</code> to identify the files you want to transfer.</p> </li> <li> <p>For an SFTP connector, the file transfer can be either outbound or inbound. In both cases, you specify the <code>ConnectorId</code>. Depending on the direction of the transfer, you also specify the following items:</p> <ul> <li> <p>If you are transferring file from a partner's SFTP server to a Transfer Family server, you specify one or more <code>RetreiveFilePaths</code> to identify the files you want to transfer, and a <code>LocalDirectoryPath</code> to specify the destination folder.</p> </li> <li> <p>If you are transferring file to a partner's SFTP server from Amazon Web Services storage, you specify one or more <code>SendFilePaths</code> to identify the files you want to transfer, and a <code>RemoteDirectoryPath</code> to specify the destination folder.</p> </li> </ul> </li> </ul>
		 * Post #X-Amz-Target=TransferService.StartFileTransfer
		 * @return {StartFileTransferResponse} Success
		 */
		StartFileTransfer(requestBody: StartFileTransferRequest): Observable<StartFileTransferResponse> {
			return this.http.post<StartFileTransferResponse>(this.baseUri + '#X-Amz-Target=TransferService.StartFileTransfer', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Changes the state of a file transfer protocol-enabled server from <code>OFFLINE</code> to <code>ONLINE</code>. It has no impact on a server that is already <code>ONLINE</code>. An <code>ONLINE</code> server can accept and process file transfer jobs.</p> <p>The state of <code>STARTING</code> indicates that the server is in an intermediate state, either not fully able to respond, or not fully online. The values of <code>START_FAILED</code> can indicate an error condition.</p> <p>No response is returned from this call.</p>
		 * Post #X-Amz-Target=TransferService.StartServer
		 * @return {void} Success
		 */
		StartServer(requestBody: StartServerRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '#X-Amz-Target=TransferService.StartServer', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Changes the state of a file transfer protocol-enabled server from <code>ONLINE</code> to <code>OFFLINE</code>. An <code>OFFLINE</code> server cannot accept and process file transfer jobs. Information tied to your server, such as server and user properties, are not affected by stopping your server.</p> <note> <p>Stopping the server does not reduce or impact your file transfer protocol endpoint billing; you must delete the server to stop being billed.</p> </note> <p>The state of <code>STOPPING</code> indicates that the server is in an intermediate state, either not fully able to respond, or not fully offline. The values of <code>STOP_FAILED</code> can indicate an error condition.</p> <p>No response is returned from this call.</p>
		 * Post #X-Amz-Target=TransferService.StopServer
		 * @return {void} Success
		 */
		StopServer(requestBody: StopServerRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '#X-Amz-Target=TransferService.StopServer', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Attaches a key-value pair to a resource, as identified by its Amazon Resource Name (ARN). Resources are users, servers, roles, and other entities.</p> <p>There is no response returned from this call.</p>
		 * Post #X-Amz-Target=TransferService.TagResource
		 * @return {void} Success
		 */
		TagResource(requestBody: TagResourceRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '#X-Amz-Target=TransferService.TagResource', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Tests whether your SFTP connector is set up successfully. We highly recommend that you call this operation to test your ability to transfer files between a Transfer Family server and a trading partner's SFTP server.
		 * Post #X-Amz-Target=TransferService.TestConnection
		 * @return {TestConnectionResponse} Success
		 */
		TestConnection(requestBody: TestConnectionRequest): Observable<TestConnectionResponse> {
			return this.http.post<TestConnectionResponse>(this.baseUri + '#X-Amz-Target=TransferService.TestConnection', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>If the <code>IdentityProviderType</code> of a file transfer protocol-enabled server is <code>AWS_DIRECTORY_SERVICE</code> or <code>API_Gateway</code>, tests whether your identity provider is set up successfully. We highly recommend that you call this operation to test your authentication method as soon as you create your server. By doing so, you can troubleshoot issues with the identity provider integration to ensure that your users can successfully use the service.</p> <p> The <code>ServerId</code> and <code>UserName</code> parameters are required. The <code>ServerProtocol</code>, <code>SourceIp</code>, and <code>UserPassword</code> are all optional. </p> <p>Note the following:</p> <ul> <li> <p> You cannot use <code>TestIdentityProvider</code> if the <code>IdentityProviderType</code> of your server is <code>SERVICE_MANAGED</code>.</p> </li> <li> <p> <code>TestIdentityProvider</code> does not work with keys: it only accepts passwords.</p> </li> <li> <p> <code>TestIdentityProvider</code> can test the password operation for a custom Identity Provider that handles keys and passwords.</p> </li> <li> <p> If you provide any incorrect values for any parameters, the <code>Response</code> field is empty. </p> </li> <li> <p> If you provide a server ID for a server that uses service-managed users, you get an error: </p> <p> <code> An error occurred (InvalidRequestException) when calling the TestIdentityProvider operation: s-<i>server-ID</i> not configured for external auth </code> </p> </li> <li> <p> If you enter a Server ID for the <code>--server-id</code> parameter that does not identify an actual Transfer server, you receive the following error: </p> <p> <code>An error occurred (ResourceNotFoundException) when calling the TestIdentityProvider operation: Unknown server</code>. </p> <p>It is possible your sever is in a different region. You can specify a region by adding the following: <code>--region region-code</code>, such as <code>--region us-east-2</code> to specify a server in <b>US East (Ohio)</b>.</p> </li> </ul>
		 * Post #X-Amz-Target=TransferService.TestIdentityProvider
		 * @return {TestIdentityProviderResponse} Success
		 */
		TestIdentityProvider(requestBody: TestIdentityProviderRequest): Observable<TestIdentityProviderResponse> {
			return this.http.post<TestIdentityProviderResponse>(this.baseUri + '#X-Amz-Target=TransferService.TestIdentityProvider', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Detaches a key-value pair from a resource, as identified by its Amazon Resource Name (ARN). Resources are users, servers, roles, and other entities.</p> <p>No response is returned from this call.</p>
		 * Post #X-Amz-Target=TransferService.UntagResource
		 * @return {void} Success
		 */
		UntagResource(requestBody: UntagResourceRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '#X-Amz-Target=TransferService.UntagResource', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Allows you to update parameters for the access specified in the <code>ServerID</code> and <code>ExternalID</code> parameters.
		 * Post #X-Amz-Target=TransferService.UpdateAccess
		 * @return {UpdateAccessResponse} Success
		 */
		UpdateAccess(requestBody: UpdateAccessRequest): Observable<UpdateAccessResponse> {
			return this.http.post<UpdateAccessResponse>(this.baseUri + '#X-Amz-Target=TransferService.UpdateAccess', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Updates some of the parameters for an existing agreement. Provide the <code>AgreementId</code> and the <code>ServerId</code> for the agreement that you want to update, along with the new values for the parameters to update.
		 * Post #X-Amz-Target=TransferService.UpdateAgreement
		 * @return {UpdateAgreementResponse} Success
		 */
		UpdateAgreement(requestBody: UpdateAgreementRequest): Observable<UpdateAgreementResponse> {
			return this.http.post<UpdateAgreementResponse>(this.baseUri + '#X-Amz-Target=TransferService.UpdateAgreement', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Updates the active and inactive dates for a certificate.
		 * Post #X-Amz-Target=TransferService.UpdateCertificate
		 * @return {UpdateCertificateResponse} Success
		 */
		UpdateCertificate(requestBody: UpdateCertificateRequest): Observable<UpdateCertificateResponse> {
			return this.http.post<UpdateCertificateResponse>(this.baseUri + '#X-Amz-Target=TransferService.UpdateCertificate', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Updates some of the parameters for an existing connector. Provide the <code>ConnectorId</code> for the connector that you want to update, along with the new values for the parameters to update.
		 * Post #X-Amz-Target=TransferService.UpdateConnector
		 * @return {UpdateConnectorResponse} Success
		 */
		UpdateConnector(requestBody: UpdateConnectorRequest): Observable<UpdateConnectorResponse> {
			return this.http.post<UpdateConnectorResponse>(this.baseUri + '#X-Amz-Target=TransferService.UpdateConnector', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Updates the description for the host key that's specified by the <code>ServerId</code> and <code>HostKeyId</code> parameters.
		 * Post #X-Amz-Target=TransferService.UpdateHostKey
		 * @return {UpdateHostKeyResponse} Success
		 */
		UpdateHostKey(requestBody: UpdateHostKeyRequest): Observable<UpdateHostKeyResponse> {
			return this.http.post<UpdateHostKeyResponse>(this.baseUri + '#X-Amz-Target=TransferService.UpdateHostKey', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Updates some of the parameters for an existing profile. Provide the <code>ProfileId</code> for the profile that you want to update, along with the new values for the parameters to update.
		 * Post #X-Amz-Target=TransferService.UpdateProfile
		 * @return {UpdateProfileResponse} Success
		 */
		UpdateProfile(requestBody: UpdateProfileRequest): Observable<UpdateProfileResponse> {
			return this.http.post<UpdateProfileResponse>(this.baseUri + '#X-Amz-Target=TransferService.UpdateProfile', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Updates the file transfer protocol-enabled server's properties after that server has been created.</p> <p>The <code>UpdateServer</code> call returns the <code>ServerId</code> of the server you updated.</p>
		 * Post #X-Amz-Target=TransferService.UpdateServer
		 * @return {UpdateServerResponse} Success
		 */
		UpdateServer(requestBody: UpdateServerRequest): Observable<UpdateServerResponse> {
			return this.http.post<UpdateServerResponse>(this.baseUri + '#X-Amz-Target=TransferService.UpdateServer', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Assigns new properties to a user. Parameters you pass modify any or all of the following: the home directory, role, and policy for the <code>UserName</code> and <code>ServerId</code> you specify.</p> <p>The response returns the <code>ServerId</code> and the <code>UserName</code> for the updated user.</p>
		 * Post #X-Amz-Target=TransferService.UpdateUser
		 * @return {UpdateUserResponse} Success
		 */
		UpdateUser(requestBody: UpdateUserRequest): Observable<UpdateUserResponse> {
			return this.http.post<UpdateUserResponse>(this.baseUri + '#X-Amz-Target=TransferService.UpdateUser', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

	export enum CreateAccessX_Amz_Target { 'TransferService.CreateAccess' = 0 }

	export enum CreateAgreementX_Amz_Target { 'TransferService.CreateAgreement' = 0 }

	export enum CreateConnectorX_Amz_Target { 'TransferService.CreateConnector' = 0 }

	export enum CreateProfileX_Amz_Target { 'TransferService.CreateProfile' = 0 }

	export enum CreateServerX_Amz_Target { 'TransferService.CreateServer' = 0 }

	export enum CreateUserX_Amz_Target { 'TransferService.CreateUser' = 0 }

	export enum CreateWorkflowX_Amz_Target { 'TransferService.CreateWorkflow' = 0 }

	export enum DeleteAccessX_Amz_Target { 'TransferService.DeleteAccess' = 0 }

	export enum DeleteAgreementX_Amz_Target { 'TransferService.DeleteAgreement' = 0 }

	export enum DeleteCertificateX_Amz_Target { 'TransferService.DeleteCertificate' = 0 }

	export enum DeleteConnectorX_Amz_Target { 'TransferService.DeleteConnector' = 0 }

	export enum DeleteHostKeyX_Amz_Target { 'TransferService.DeleteHostKey' = 0 }

	export enum DeleteProfileX_Amz_Target { 'TransferService.DeleteProfile' = 0 }

	export enum DeleteServerX_Amz_Target { 'TransferService.DeleteServer' = 0 }

	export enum DeleteSshPublicKeyX_Amz_Target { 'TransferService.DeleteSshPublicKey' = 0 }

	export enum DeleteUserX_Amz_Target { 'TransferService.DeleteUser' = 0 }

	export enum DeleteWorkflowX_Amz_Target { 'TransferService.DeleteWorkflow' = 0 }

	export enum DescribeAccessX_Amz_Target { 'TransferService.DescribeAccess' = 0 }

	export enum DescribeAgreementX_Amz_Target { 'TransferService.DescribeAgreement' = 0 }

	export enum DescribeCertificateX_Amz_Target { 'TransferService.DescribeCertificate' = 0 }

	export enum DescribeConnectorX_Amz_Target { 'TransferService.DescribeConnector' = 0 }

	export enum DescribeExecutionX_Amz_Target { 'TransferService.DescribeExecution' = 0 }

	export enum DescribeHostKeyX_Amz_Target { 'TransferService.DescribeHostKey' = 0 }

	export enum DescribeProfileX_Amz_Target { 'TransferService.DescribeProfile' = 0 }

	export enum DescribeSecurityPolicyX_Amz_Target { 'TransferService.DescribeSecurityPolicy' = 0 }

	export enum DescribeServerX_Amz_Target { 'TransferService.DescribeServer' = 0 }

	export enum DescribeUserX_Amz_Target { 'TransferService.DescribeUser' = 0 }

	export enum DescribeWorkflowX_Amz_Target { 'TransferService.DescribeWorkflow' = 0 }

	export enum ImportCertificateX_Amz_Target { 'TransferService.ImportCertificate' = 0 }

	export enum ImportHostKeyX_Amz_Target { 'TransferService.ImportHostKey' = 0 }

	export enum ImportSshPublicKeyX_Amz_Target { 'TransferService.ImportSshPublicKey' = 0 }

	export enum ListAccessesX_Amz_Target { 'TransferService.ListAccesses' = 0 }

	export enum ListAgreementsX_Amz_Target { 'TransferService.ListAgreements' = 0 }

	export enum ListCertificatesX_Amz_Target { 'TransferService.ListCertificates' = 0 }

	export enum ListConnectorsX_Amz_Target { 'TransferService.ListConnectors' = 0 }

	export enum ListExecutionsX_Amz_Target { 'TransferService.ListExecutions' = 0 }

	export enum ListHostKeysX_Amz_Target { 'TransferService.ListHostKeys' = 0 }

	export enum ListProfilesX_Amz_Target { 'TransferService.ListProfiles' = 0 }

	export enum ListSecurityPoliciesX_Amz_Target { 'TransferService.ListSecurityPolicies' = 0 }

	export enum ListServersX_Amz_Target { 'TransferService.ListServers' = 0 }

	export enum ListTagsForResourceX_Amz_Target { 'TransferService.ListTagsForResource' = 0 }

	export enum ListUsersX_Amz_Target { 'TransferService.ListUsers' = 0 }

	export enum ListWorkflowsX_Amz_Target { 'TransferService.ListWorkflows' = 0 }

	export enum SendWorkflowStepStateX_Amz_Target { 'TransferService.SendWorkflowStepState' = 0 }

	export enum StartFileTransferX_Amz_Target { 'TransferService.StartFileTransfer' = 0 }

	export enum StartServerX_Amz_Target { 'TransferService.StartServer' = 0 }

	export enum StopServerX_Amz_Target { 'TransferService.StopServer' = 0 }

	export enum TagResourceX_Amz_Target { 'TransferService.TagResource' = 0 }

	export enum TestConnectionX_Amz_Target { 'TransferService.TestConnection' = 0 }

	export enum TestIdentityProviderX_Amz_Target { 'TransferService.TestIdentityProvider' = 0 }

	export enum UntagResourceX_Amz_Target { 'TransferService.UntagResource' = 0 }

	export enum UpdateAccessX_Amz_Target { 'TransferService.UpdateAccess' = 0 }

	export enum UpdateAgreementX_Amz_Target { 'TransferService.UpdateAgreement' = 0 }

	export enum UpdateCertificateX_Amz_Target { 'TransferService.UpdateCertificate' = 0 }

	export enum UpdateConnectorX_Amz_Target { 'TransferService.UpdateConnector' = 0 }

	export enum UpdateHostKeyX_Amz_Target { 'TransferService.UpdateHostKey' = 0 }

	export enum UpdateProfileX_Amz_Target { 'TransferService.UpdateProfile' = 0 }

	export enum UpdateServerX_Amz_Target { 'TransferService.UpdateServer' = 0 }

	export enum UpdateUserX_Amz_Target { 'TransferService.UpdateUser' = 0 }

}

