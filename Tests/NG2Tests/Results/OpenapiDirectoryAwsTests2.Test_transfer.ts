import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface CreateServerResponse {

		/**
		 * Required
		 * Max length: 19
		 * Min length: 19
		 */
		ServerId: string;
	}
	export interface CreateServerResponseFormProperties {

		/**
		 * Required
		 * Max length: 19
		 * Min length: 19
		 */
		ServerId: FormControl<string | null | undefined>,
	}
	export function CreateCreateServerResponseFormGroup() {
		return new FormGroup<CreateServerResponseFormProperties>({
			ServerId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(19), Validators.minLength(19), Validators.pattern('^s-([0-9a-f]{17})$')]),
		});

	}

	export interface CreateServerRequest {

		/** Max length: 1600 */
		Certificate?: string | null;

		/** The virtual private cloud (VPC) endpoint settings that are configured for your file transfer protocol-enabled server. With a VPC endpoint, you can restrict access to your server and resources only within your VPC. To control incoming internet traffic, invoke the <code>UpdateServer</code> API and attach an Elastic IP to your server's endpoint. */
		EndpointDetails?: EndpointDetails;
		EndpointType?: CreateServerRequestEndpointType | null;

		/** Max length: 4096 */
		HostKey?: string | null;

		/** Returns information related to the type of user authentication that is in use for a file transfer protocol-enabled server's users. A server can have only one method of authentication. */
		IdentityProviderDetails?: IdentityProviderDetails;

		/** Returns information related to the type of user authentication that is in use for a file transfer protocol-enabled server's users. For <code>SERVICE_MANAGED</code> authentication, the Secure Shell (SSH) public keys are stored with a user on the server instance. For <code>API_GATEWAY</code> authentication, your custom authentication method is implemented by using an API call. The server can have only one method of authentication. */
		IdentityProviderType?: CreateServerRequestIdentityProviderType | null;

		/**
		 * Max length: 2048
		 * Min length: 20
		 */
		LoggingRole?: string | null;

		/**
		 * Minimum items: 1
		 * Maximum items: 3
		 */
		Protocols?: Array<Protocol>;

		/**
		 * Minimum items: 1
		 * Maximum items: 50
		 */
		Tags?: Array<Tag>;
	}
	export interface CreateServerRequestFormProperties {

		/** Max length: 1600 */
		Certificate: FormControl<string | null | undefined>,
		EndpointType: FormControl<CreateServerRequestEndpointType | null | undefined>,

		/** Max length: 4096 */
		HostKey: FormControl<string | null | undefined>,

		/** Returns information related to the type of user authentication that is in use for a file transfer protocol-enabled server's users. For <code>SERVICE_MANAGED</code> authentication, the Secure Shell (SSH) public keys are stored with a user on the server instance. For <code>API_GATEWAY</code> authentication, your custom authentication method is implemented by using an API call. The server can have only one method of authentication. */
		IdentityProviderType: FormControl<CreateServerRequestIdentityProviderType | null | undefined>,

		/**
		 * Max length: 2048
		 * Min length: 20
		 */
		LoggingRole: FormControl<string | null | undefined>,
	}
	export function CreateCreateServerRequestFormGroup() {
		return new FormGroup<CreateServerRequestFormProperties>({
			Certificate: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(1600)]),
			EndpointType: new FormControl<CreateServerRequestEndpointType | null | undefined>(undefined),
			HostKey: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(4096)]),
			IdentityProviderType: new FormControl<CreateServerRequestIdentityProviderType | null | undefined>(undefined),
			LoggingRole: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(2048), Validators.minLength(20), Validators.pattern('arn:.*role/.*')]),
		});

	}


	/** The virtual private cloud (VPC) endpoint settings that are configured for your file transfer protocol-enabled server. With a VPC endpoint, you can restrict access to your server and resources only within your VPC. To control incoming internet traffic, invoke the <code>UpdateServer</code> API and attach an Elastic IP to your server's endpoint. */
	export interface EndpointDetails {
		AddressAllocationIds?: Array<string>;
		SubnetIds?: Array<string>;

		/**
		 * Max length: 22
		 * Min length: 22
		 */
		VpcEndpointId?: string | null;
		VpcId?: string | null;
	}

	/** The virtual private cloud (VPC) endpoint settings that are configured for your file transfer protocol-enabled server. With a VPC endpoint, you can restrict access to your server and resources only within your VPC. To control incoming internet traffic, invoke the <code>UpdateServer</code> API and attach an Elastic IP to your server's endpoint. */
	export interface EndpointDetailsFormProperties {

		/**
		 * Max length: 22
		 * Min length: 22
		 */
		VpcEndpointId: FormControl<string | null | undefined>,
		VpcId: FormControl<string | null | undefined>,
	}
	export function CreateEndpointDetailsFormGroup() {
		return new FormGroup<EndpointDetailsFormProperties>({
			VpcEndpointId: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(22), Validators.minLength(22), Validators.pattern('^vpce-[0-9a-f]{17}$')]),
			VpcId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum CreateServerRequestEndpointType { PUBLIC = 0, VPC = 1, VPC_ENDPOINT = 2 }


	/** Returns information related to the type of user authentication that is in use for a file transfer protocol-enabled server's users. A server can have only one method of authentication. */
	export interface IdentityProviderDetails {

		/** Max length: 255 */
		Url?: string | null;

		/**
		 * Max length: 2048
		 * Min length: 20
		 */
		InvocationRole?: string | null;
	}

	/** Returns information related to the type of user authentication that is in use for a file transfer protocol-enabled server's users. A server can have only one method of authentication. */
	export interface IdentityProviderDetailsFormProperties {

		/** Max length: 255 */
		Url: FormControl<string | null | undefined>,

		/**
		 * Max length: 2048
		 * Min length: 20
		 */
		InvocationRole: FormControl<string | null | undefined>,
	}
	export function CreateIdentityProviderDetailsFormGroup() {
		return new FormGroup<IdentityProviderDetailsFormProperties>({
			Url: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(255)]),
			InvocationRole: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(2048), Validators.minLength(20), Validators.pattern('arn:.*role/.*')]),
		});

	}

	export enum CreateServerRequestIdentityProviderType { SERVICE_MANAGED = 0, API_GATEWAY = 1 }

	export enum Protocol { SFTP = 0, FTP = 1, FTPS = 2 }


	/** Creates a key-value pair for a specific resource. Tags are metadata that you can use to search for and group a resource for various purposes. You can apply tags to servers, users, and roles. A tag key can take more than one value. For example, to group servers for accounting purposes, you might create a tag called <code>Group</code> and assign the values <code>Research</code> and <code>Accounting</code> to that group. */
	export interface Tag {

		/**
		 * Required
		 * Max length: 128
		 */
		Key: string;

		/**
		 * Required
		 * Max length: 256
		 */
		Value: string;
	}

	/** Creates a key-value pair for a specific resource. Tags are metadata that you can use to search for and group a resource for various purposes. You can apply tags to servers, users, and roles. A tag key can take more than one value. For example, to group servers for accounting purposes, you might create a tag called <code>Group</code> and assign the values <code>Research</code> and <code>Accounting</code> to that group. */
	export interface TagFormProperties {

		/**
		 * Required
		 * Max length: 128
		 */
		Key: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 256
		 */
		Value: FormControl<string | null | undefined>,
	}
	export function CreateTagFormGroup() {
		return new FormGroup<TagFormProperties>({
			Key: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(128)]),
			Value: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(256)]),
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

	export interface ThrottlingException {
	}
	export interface ThrottlingExceptionFormProperties {
	}
	export function CreateThrottlingExceptionFormGroup() {
		return new FormGroup<ThrottlingExceptionFormProperties>({
		});

	}

	export interface CreateUserResponse {

		/**
		 * Required
		 * Max length: 19
		 * Min length: 19
		 */
		ServerId: string;

		/**
		 * Required
		 * Max length: 32
		 * Min length: 3
		 */
		UserName: string;
	}
	export interface CreateUserResponseFormProperties {

		/**
		 * Required
		 * Max length: 19
		 * Min length: 19
		 */
		ServerId: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 32
		 * Min length: 3
		 */
		UserName: FormControl<string | null | undefined>,
	}
	export function CreateCreateUserResponseFormGroup() {
		return new FormGroup<CreateUserResponseFormProperties>({
			ServerId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(19), Validators.minLength(19), Validators.pattern('^s-([0-9a-f]{17})$')]),
			UserName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(32), Validators.minLength(3), Validators.pattern('^[a-zA-Z0-9_][a-zA-Z0-9_-]{2,31}$')]),
		});

	}

	export interface CreateUserRequest {

		/** Max length: 1024 */
		HomeDirectory?: string | null;
		HomeDirectoryType?: CreateUserRequestHomeDirectoryType | null;

		/**
		 * Minimum items: 1
		 * Maximum items: 50
		 */
		HomeDirectoryMappings?: Array<HomeDirectoryMapEntry>;

		/** Max length: 2048 */
		Policy?: string | null;

		/**
		 * Required
		 * Max length: 2048
		 * Min length: 20
		 */
		Role: string;

		/**
		 * Required
		 * Max length: 19
		 * Min length: 19
		 */
		ServerId: string;

		/** Max length: 2048 */
		SshPublicKeyBody?: string | null;

		/**
		 * Minimum items: 1
		 * Maximum items: 50
		 */
		Tags?: Array<Tag>;

		/**
		 * Required
		 * Max length: 32
		 * Min length: 3
		 */
		UserName: string;
	}
	export interface CreateUserRequestFormProperties {

		/** Max length: 1024 */
		HomeDirectory: FormControl<string | null | undefined>,
		HomeDirectoryType: FormControl<CreateUserRequestHomeDirectoryType | null | undefined>,

		/** Max length: 2048 */
		Policy: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 2048
		 * Min length: 20
		 */
		Role: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 19
		 * Min length: 19
		 */
		ServerId: FormControl<string | null | undefined>,

		/** Max length: 2048 */
		SshPublicKeyBody: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 32
		 * Min length: 3
		 */
		UserName: FormControl<string | null | undefined>,
	}
	export function CreateCreateUserRequestFormGroup() {
		return new FormGroup<CreateUserRequestFormProperties>({
			HomeDirectory: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(1024), Validators.pattern('^$|/.*')]),
			HomeDirectoryType: new FormControl<CreateUserRequestHomeDirectoryType | null | undefined>(undefined),
			Policy: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(2048)]),
			Role: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(2048), Validators.minLength(20), Validators.pattern('arn:.*role/.*')]),
			ServerId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(19), Validators.minLength(19), Validators.pattern('^s-([0-9a-f]{17})$')]),
			SshPublicKeyBody: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(2048), Validators.pattern('^ssh-rsa\s+[A-Za-z0-9+/]+[=]{0,3}(\s+.+)?\s*$')]),
			UserName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(32), Validators.minLength(3), Validators.pattern('^[a-zA-Z0-9_][a-zA-Z0-9_-]{2,31}$')]),
		});

	}

	export enum CreateUserRequestHomeDirectoryType { PATH = 0, LOGICAL = 1 }


	/** Represents an object that contains entries and a targets for <code>HomeDirectoryMappings</code>. */
	export interface HomeDirectoryMapEntry {

		/**
		 * Required
		 * Max length: 1024
		 */
		Entry: string;

		/**
		 * Required
		 * Max length: 1024
		 */
		Target: string;
	}

	/** Represents an object that contains entries and a targets for <code>HomeDirectoryMappings</code>. */
	export interface HomeDirectoryMapEntryFormProperties {

		/**
		 * Required
		 * Max length: 1024
		 */
		Entry: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 1024
		 */
		Target: FormControl<string | null | undefined>,
	}
	export function CreateHomeDirectoryMapEntryFormGroup() {
		return new FormGroup<HomeDirectoryMapEntryFormProperties>({
			Entry: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(1024), Validators.pattern('^/.*')]),
			Target: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(1024), Validators.pattern('^/.*')]),
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

	export interface DeleteServerRequest {

		/**
		 * Required
		 * Max length: 19
		 * Min length: 19
		 */
		ServerId: string;
	}
	export interface DeleteServerRequestFormProperties {

		/**
		 * Required
		 * Max length: 19
		 * Min length: 19
		 */
		ServerId: FormControl<string | null | undefined>,
	}
	export function CreateDeleteServerRequestFormGroup() {
		return new FormGroup<DeleteServerRequestFormProperties>({
			ServerId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(19), Validators.minLength(19), Validators.pattern('^s-([0-9a-f]{17})$')]),
		});

	}

	export interface DeleteSshPublicKeyRequest {

		/**
		 * Required
		 * Max length: 19
		 * Min length: 19
		 */
		ServerId: string;

		/**
		 * Required
		 * Max length: 21
		 * Min length: 21
		 */
		SshPublicKeyId: string;

		/**
		 * Required
		 * Max length: 32
		 * Min length: 3
		 */
		UserName: string;
	}
	export interface DeleteSshPublicKeyRequestFormProperties {

		/**
		 * Required
		 * Max length: 19
		 * Min length: 19
		 */
		ServerId: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 21
		 * Min length: 21
		 */
		SshPublicKeyId: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 32
		 * Min length: 3
		 */
		UserName: FormControl<string | null | undefined>,
	}
	export function CreateDeleteSshPublicKeyRequestFormGroup() {
		return new FormGroup<DeleteSshPublicKeyRequestFormProperties>({
			ServerId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(19), Validators.minLength(19), Validators.pattern('^s-([0-9a-f]{17})$')]),
			SshPublicKeyId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(21), Validators.minLength(21), Validators.pattern('^key-[0-9a-f]{17}$')]),
			UserName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(32), Validators.minLength(3), Validators.pattern('^[a-zA-Z0-9_][a-zA-Z0-9_-]{2,31}$')]),
		});

	}

	export interface DeleteUserRequest {

		/**
		 * Required
		 * Max length: 19
		 * Min length: 19
		 */
		ServerId: string;

		/**
		 * Required
		 * Max length: 32
		 * Min length: 3
		 */
		UserName: string;
	}
	export interface DeleteUserRequestFormProperties {

		/**
		 * Required
		 * Max length: 19
		 * Min length: 19
		 */
		ServerId: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 32
		 * Min length: 3
		 */
		UserName: FormControl<string | null | undefined>,
	}
	export function CreateDeleteUserRequestFormGroup() {
		return new FormGroup<DeleteUserRequestFormProperties>({
			ServerId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(19), Validators.minLength(19), Validators.pattern('^s-([0-9a-f]{17})$')]),
			UserName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(32), Validators.minLength(3), Validators.pattern('^[a-zA-Z0-9_][a-zA-Z0-9_-]{2,31}$')]),
		});

	}

	export interface DescribeServerResponse {

		/**
		 * Describes the properties of a file transfer protocol-enabled server that was specified. Information returned includes the following: the server Amazon Resource Name (ARN), the certificate ARN (if the FTPS protocol was selected), the endpoint type and details, the authentication configuration and type, the logging role, the file transfer protocol or protocols, the server ID and state, and assigned tags or metadata.
		 * Required
		 */
		Server: DescribedServer;
	}
	export interface DescribeServerResponseFormProperties {
	}
	export function CreateDescribeServerResponseFormGroup() {
		return new FormGroup<DescribeServerResponseFormProperties>({
		});

	}


	/** Describes the properties of a file transfer protocol-enabled server that was specified. Information returned includes the following: the server Amazon Resource Name (ARN), the certificate ARN (if the FTPS protocol was selected), the endpoint type and details, the authentication configuration and type, the logging role, the file transfer protocol or protocols, the server ID and state, and assigned tags or metadata. */
	export interface DescribedServer {

		/**
		 * Required
		 * Max length: 1600
		 * Min length: 20
		 */
		Arn: string;

		/** Max length: 1600 */
		Certificate?: string | null;

		/** The virtual private cloud (VPC) endpoint settings that are configured for your file transfer protocol-enabled server. With a VPC endpoint, you can restrict access to your server and resources only within your VPC. To control incoming internet traffic, invoke the <code>UpdateServer</code> API and attach an Elastic IP to your server's endpoint. */
		EndpointDetails?: EndpointDetails;
		EndpointType?: CreateServerRequestEndpointType | null;
		HostKeyFingerprint?: string | null;

		/** Returns information related to the type of user authentication that is in use for a file transfer protocol-enabled server's users. A server can have only one method of authentication. */
		IdentityProviderDetails?: IdentityProviderDetails;

		/** Returns information related to the type of user authentication that is in use for a file transfer protocol-enabled server's users. For <code>SERVICE_MANAGED</code> authentication, the Secure Shell (SSH) public keys are stored with a user on the server instance. For <code>API_GATEWAY</code> authentication, your custom authentication method is implemented by using an API call. The server can have only one method of authentication. */
		IdentityProviderType?: CreateServerRequestIdentityProviderType | null;

		/**
		 * Max length: 2048
		 * Min length: 20
		 */
		LoggingRole?: string | null;

		/**
		 * Minimum items: 1
		 * Maximum items: 3
		 */
		Protocols?: Array<Protocol>;

		/**
		 * Max length: 19
		 * Min length: 19
		 */
		ServerId?: string | null;

		/** <p>Describes the condition of a file transfer protocol-enabled server with respect to its ability to perform file operations. There are six possible states: <code>OFFLINE</code>, <code>ONLINE</code>, <code>STARTING</code>, <code>STOPPING</code>, <code>START_FAILED</code>, and <code>STOP_FAILED</code>.</p> <p> <code>OFFLINE</code> indicates that the server exists, but that it is not available for file operations. <code>ONLINE</code> indicates that the server is available to perform file operations. <code>STARTING</code> indicates that the server's was instantiated, but the server is not yet available to perform file operations. Under normal conditions, it can take a couple of minutes for the server to be completely operational. Both <code>START_FAILED</code> and <code>STOP_FAILED</code> are error conditions.</p> */
		State?: DescribedServerState | null;

		/**
		 * Minimum items: 1
		 * Maximum items: 50
		 */
		Tags?: Array<Tag>;
		UserCount?: number | null;
	}

	/** Describes the properties of a file transfer protocol-enabled server that was specified. Information returned includes the following: the server Amazon Resource Name (ARN), the certificate ARN (if the FTPS protocol was selected), the endpoint type and details, the authentication configuration and type, the logging role, the file transfer protocol or protocols, the server ID and state, and assigned tags or metadata. */
	export interface DescribedServerFormProperties {

		/**
		 * Required
		 * Max length: 1600
		 * Min length: 20
		 */
		Arn: FormControl<string | null | undefined>,

		/** Max length: 1600 */
		Certificate: FormControl<string | null | undefined>,
		EndpointType: FormControl<CreateServerRequestEndpointType | null | undefined>,
		HostKeyFingerprint: FormControl<string | null | undefined>,

		/** Returns information related to the type of user authentication that is in use for a file transfer protocol-enabled server's users. For <code>SERVICE_MANAGED</code> authentication, the Secure Shell (SSH) public keys are stored with a user on the server instance. For <code>API_GATEWAY</code> authentication, your custom authentication method is implemented by using an API call. The server can have only one method of authentication. */
		IdentityProviderType: FormControl<CreateServerRequestIdentityProviderType | null | undefined>,

		/**
		 * Max length: 2048
		 * Min length: 20
		 */
		LoggingRole: FormControl<string | null | undefined>,

		/**
		 * Max length: 19
		 * Min length: 19
		 */
		ServerId: FormControl<string | null | undefined>,

		/** <p>Describes the condition of a file transfer protocol-enabled server with respect to its ability to perform file operations. There are six possible states: <code>OFFLINE</code>, <code>ONLINE</code>, <code>STARTING</code>, <code>STOPPING</code>, <code>START_FAILED</code>, and <code>STOP_FAILED</code>.</p> <p> <code>OFFLINE</code> indicates that the server exists, but that it is not available for file operations. <code>ONLINE</code> indicates that the server is available to perform file operations. <code>STARTING</code> indicates that the server's was instantiated, but the server is not yet available to perform file operations. Under normal conditions, it can take a couple of minutes for the server to be completely operational. Both <code>START_FAILED</code> and <code>STOP_FAILED</code> are error conditions.</p> */
		State: FormControl<DescribedServerState | null | undefined>,
		UserCount: FormControl<number | null | undefined>,
	}
	export function CreateDescribedServerFormGroup() {
		return new FormGroup<DescribedServerFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(1600), Validators.minLength(20), Validators.pattern('arn:.*')]),
			Certificate: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(1600)]),
			EndpointType: new FormControl<CreateServerRequestEndpointType | null | undefined>(undefined),
			HostKeyFingerprint: new FormControl<string | null | undefined>(undefined),
			IdentityProviderType: new FormControl<CreateServerRequestIdentityProviderType | null | undefined>(undefined),
			LoggingRole: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(2048), Validators.minLength(20), Validators.pattern('arn:.*role/.*')]),
			ServerId: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(19), Validators.minLength(19), Validators.pattern('^s-([0-9a-f]{17})$')]),
			State: new FormControl<DescribedServerState | null | undefined>(undefined),
			UserCount: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum DescribedServerState { OFFLINE = 0, ONLINE = 1, STARTING = 2, STOPPING = 3, START_FAILED = 4, STOP_FAILED = 5 }

	export interface DescribeServerRequest {

		/**
		 * Required
		 * Max length: 19
		 * Min length: 19
		 */
		ServerId: string;
	}
	export interface DescribeServerRequestFormProperties {

		/**
		 * Required
		 * Max length: 19
		 * Min length: 19
		 */
		ServerId: FormControl<string | null | undefined>,
	}
	export function CreateDescribeServerRequestFormGroup() {
		return new FormGroup<DescribeServerRequestFormProperties>({
			ServerId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(19), Validators.minLength(19), Validators.pattern('^s-([0-9a-f]{17})$')]),
		});

	}

	export interface DescribeUserResponse {

		/**
		 * Required
		 * Max length: 19
		 * Min length: 19
		 */
		ServerId: string;

		/**
		 * Returns properties of the user that you want to describe.
		 * Required
		 */
		User: DescribedUser;
	}
	export interface DescribeUserResponseFormProperties {

		/**
		 * Required
		 * Max length: 19
		 * Min length: 19
		 */
		ServerId: FormControl<string | null | undefined>,
	}
	export function CreateDescribeUserResponseFormGroup() {
		return new FormGroup<DescribeUserResponseFormProperties>({
			ServerId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(19), Validators.minLength(19), Validators.pattern('^s-([0-9a-f]{17})$')]),
		});

	}


	/** Returns properties of the user that you want to describe. */
	export interface DescribedUser {

		/**
		 * Required
		 * Max length: 1600
		 * Min length: 20
		 */
		Arn: string;

		/** Max length: 1024 */
		HomeDirectory?: string | null;

		/**
		 * Minimum items: 1
		 * Maximum items: 50
		 */
		HomeDirectoryMappings?: Array<HomeDirectoryMapEntry>;
		HomeDirectoryType?: CreateUserRequestHomeDirectoryType | null;

		/** Max length: 2048 */
		Policy?: string | null;

		/**
		 * Max length: 2048
		 * Min length: 20
		 */
		Role?: string | null;

		/** Maximum items: 5 */
		SshPublicKeys?: Array<SshPublicKey>;

		/**
		 * Minimum items: 1
		 * Maximum items: 50
		 */
		Tags?: Array<Tag>;

		/**
		 * Max length: 32
		 * Min length: 3
		 */
		UserName?: string | null;
	}

	/** Returns properties of the user that you want to describe. */
	export interface DescribedUserFormProperties {

		/**
		 * Required
		 * Max length: 1600
		 * Min length: 20
		 */
		Arn: FormControl<string | null | undefined>,

		/** Max length: 1024 */
		HomeDirectory: FormControl<string | null | undefined>,
		HomeDirectoryType: FormControl<CreateUserRequestHomeDirectoryType | null | undefined>,

		/** Max length: 2048 */
		Policy: FormControl<string | null | undefined>,

		/**
		 * Max length: 2048
		 * Min length: 20
		 */
		Role: FormControl<string | null | undefined>,

		/**
		 * Max length: 32
		 * Min length: 3
		 */
		UserName: FormControl<string | null | undefined>,
	}
	export function CreateDescribedUserFormGroup() {
		return new FormGroup<DescribedUserFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(1600), Validators.minLength(20), Validators.pattern('arn:.*')]),
			HomeDirectory: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(1024), Validators.pattern('^$|/.*')]),
			HomeDirectoryType: new FormControl<CreateUserRequestHomeDirectoryType | null | undefined>(undefined),
			Policy: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(2048)]),
			Role: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(2048), Validators.minLength(20), Validators.pattern('arn:.*role/.*')]),
			UserName: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(32), Validators.minLength(3), Validators.pattern('^[a-zA-Z0-9_][a-zA-Z0-9_-]{2,31}$')]),
		});

	}


	/** Provides information about the public Secure Shell (SSH) key that is associated with a user account for the specific file transfer protocol-enabled server (as identified by <code>ServerId</code>). The information returned includes the date the key was imported, the public key contents, and the public key ID. A user can store more than one SSH public key associated with their user name on a specific server. */
	export interface SshPublicKey {

		/** Required */
		DateImported: Date;

		/**
		 * Required
		 * Max length: 2048
		 */
		SshPublicKeyBody: string;

		/**
		 * Required
		 * Max length: 21
		 * Min length: 21
		 */
		SshPublicKeyId: string;
	}

	/** Provides information about the public Secure Shell (SSH) key that is associated with a user account for the specific file transfer protocol-enabled server (as identified by <code>ServerId</code>). The information returned includes the date the key was imported, the public key contents, and the public key ID. A user can store more than one SSH public key associated with their user name on a specific server. */
	export interface SshPublicKeyFormProperties {

		/** Required */
		DateImported: FormControl<Date | null | undefined>,

		/**
		 * Required
		 * Max length: 2048
		 */
		SshPublicKeyBody: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 21
		 * Min length: 21
		 */
		SshPublicKeyId: FormControl<string | null | undefined>,
	}
	export function CreateSshPublicKeyFormGroup() {
		return new FormGroup<SshPublicKeyFormProperties>({
			DateImported: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			SshPublicKeyBody: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(2048), Validators.pattern('^ssh-rsa\s+[A-Za-z0-9+/]+[=]{0,3}(\s+.+)?\s*$')]),
			SshPublicKeyId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(21), Validators.minLength(21), Validators.pattern('^key-[0-9a-f]{17}$')]),
		});

	}

	export interface DescribeUserRequest {

		/**
		 * Required
		 * Max length: 19
		 * Min length: 19
		 */
		ServerId: string;

		/**
		 * Required
		 * Max length: 32
		 * Min length: 3
		 */
		UserName: string;
	}
	export interface DescribeUserRequestFormProperties {

		/**
		 * Required
		 * Max length: 19
		 * Min length: 19
		 */
		ServerId: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 32
		 * Min length: 3
		 */
		UserName: FormControl<string | null | undefined>,
	}
	export function CreateDescribeUserRequestFormGroup() {
		return new FormGroup<DescribeUserRequestFormProperties>({
			ServerId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(19), Validators.minLength(19), Validators.pattern('^s-([0-9a-f]{17})$')]),
			UserName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(32), Validators.minLength(3), Validators.pattern('^[a-zA-Z0-9_][a-zA-Z0-9_-]{2,31}$')]),
		});

	}


	/** Identifies the user, the file transfer protocol-enabled server they belong to, and the identifier of the SSH public key associated with that user. A user can have more than one key on each server that they are associated with. */
	export interface ImportSshPublicKeyResponse {

		/**
		 * Required
		 * Max length: 19
		 * Min length: 19
		 */
		ServerId: string;

		/**
		 * Required
		 * Max length: 21
		 * Min length: 21
		 */
		SshPublicKeyId: string;

		/**
		 * Required
		 * Max length: 32
		 * Min length: 3
		 */
		UserName: string;
	}

	/** Identifies the user, the file transfer protocol-enabled server they belong to, and the identifier of the SSH public key associated with that user. A user can have more than one key on each server that they are associated with. */
	export interface ImportSshPublicKeyResponseFormProperties {

		/**
		 * Required
		 * Max length: 19
		 * Min length: 19
		 */
		ServerId: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 21
		 * Min length: 21
		 */
		SshPublicKeyId: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 32
		 * Min length: 3
		 */
		UserName: FormControl<string | null | undefined>,
	}
	export function CreateImportSshPublicKeyResponseFormGroup() {
		return new FormGroup<ImportSshPublicKeyResponseFormProperties>({
			ServerId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(19), Validators.minLength(19), Validators.pattern('^s-([0-9a-f]{17})$')]),
			SshPublicKeyId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(21), Validators.minLength(21), Validators.pattern('^key-[0-9a-f]{17}$')]),
			UserName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(32), Validators.minLength(3), Validators.pattern('^[a-zA-Z0-9_][a-zA-Z0-9_-]{2,31}$')]),
		});

	}

	export interface ImportSshPublicKeyRequest {

		/**
		 * Required
		 * Max length: 19
		 * Min length: 19
		 */
		ServerId: string;

		/**
		 * Required
		 * Max length: 2048
		 */
		SshPublicKeyBody: string;

		/**
		 * Required
		 * Max length: 32
		 * Min length: 3
		 */
		UserName: string;
	}
	export interface ImportSshPublicKeyRequestFormProperties {

		/**
		 * Required
		 * Max length: 19
		 * Min length: 19
		 */
		ServerId: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 2048
		 */
		SshPublicKeyBody: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 32
		 * Min length: 3
		 */
		UserName: FormControl<string | null | undefined>,
	}
	export function CreateImportSshPublicKeyRequestFormGroup() {
		return new FormGroup<ImportSshPublicKeyRequestFormProperties>({
			ServerId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(19), Validators.minLength(19), Validators.pattern('^s-([0-9a-f]{17})$')]),
			SshPublicKeyBody: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(2048), Validators.pattern('^ssh-rsa\s+[A-Za-z0-9+/]+[=]{0,3}(\s+.+)?\s*$')]),
			UserName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(32), Validators.minLength(3), Validators.pattern('^[a-zA-Z0-9_][a-zA-Z0-9_-]{2,31}$')]),
		});

	}

	export interface ListServersResponse {

		/**
		 * Max length: 6144
		 * Min length: 1
		 */
		NextToken?: string | null;

		/** Required */
		Servers: Array<ListedServer>;
	}
	export interface ListServersResponseFormProperties {

		/**
		 * Max length: 6144
		 * Min length: 1
		 */
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListServersResponseFormGroup() {
		return new FormGroup<ListServersResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(6144), Validators.minLength(1)]),
		});

	}


	/** Returns properties of a file transfer protocol-enabled server that was specified. */
	export interface ListedServer {

		/**
		 * Required
		 * Max length: 1600
		 * Min length: 20
		 */
		Arn: string;

		/** Returns information related to the type of user authentication that is in use for a file transfer protocol-enabled server's users. For <code>SERVICE_MANAGED</code> authentication, the Secure Shell (SSH) public keys are stored with a user on the server instance. For <code>API_GATEWAY</code> authentication, your custom authentication method is implemented by using an API call. The server can have only one method of authentication. */
		IdentityProviderType?: CreateServerRequestIdentityProviderType | null;
		EndpointType?: CreateServerRequestEndpointType | null;

		/**
		 * Max length: 2048
		 * Min length: 20
		 */
		LoggingRole?: string | null;

		/**
		 * Max length: 19
		 * Min length: 19
		 */
		ServerId?: string | null;

		/** <p>Describes the condition of a file transfer protocol-enabled server with respect to its ability to perform file operations. There are six possible states: <code>OFFLINE</code>, <code>ONLINE</code>, <code>STARTING</code>, <code>STOPPING</code>, <code>START_FAILED</code>, and <code>STOP_FAILED</code>.</p> <p> <code>OFFLINE</code> indicates that the server exists, but that it is not available for file operations. <code>ONLINE</code> indicates that the server is available to perform file operations. <code>STARTING</code> indicates that the server's was instantiated, but the server is not yet available to perform file operations. Under normal conditions, it can take a couple of minutes for the server to be completely operational. Both <code>START_FAILED</code> and <code>STOP_FAILED</code> are error conditions.</p> */
		State?: DescribedServerState | null;
		UserCount?: number | null;
	}

	/** Returns properties of a file transfer protocol-enabled server that was specified. */
	export interface ListedServerFormProperties {

		/**
		 * Required
		 * Max length: 1600
		 * Min length: 20
		 */
		Arn: FormControl<string | null | undefined>,

		/** Returns information related to the type of user authentication that is in use for a file transfer protocol-enabled server's users. For <code>SERVICE_MANAGED</code> authentication, the Secure Shell (SSH) public keys are stored with a user on the server instance. For <code>API_GATEWAY</code> authentication, your custom authentication method is implemented by using an API call. The server can have only one method of authentication. */
		IdentityProviderType: FormControl<CreateServerRequestIdentityProviderType | null | undefined>,
		EndpointType: FormControl<CreateServerRequestEndpointType | null | undefined>,

		/**
		 * Max length: 2048
		 * Min length: 20
		 */
		LoggingRole: FormControl<string | null | undefined>,

		/**
		 * Max length: 19
		 * Min length: 19
		 */
		ServerId: FormControl<string | null | undefined>,

		/** <p>Describes the condition of a file transfer protocol-enabled server with respect to its ability to perform file operations. There are six possible states: <code>OFFLINE</code>, <code>ONLINE</code>, <code>STARTING</code>, <code>STOPPING</code>, <code>START_FAILED</code>, and <code>STOP_FAILED</code>.</p> <p> <code>OFFLINE</code> indicates that the server exists, but that it is not available for file operations. <code>ONLINE</code> indicates that the server is available to perform file operations. <code>STARTING</code> indicates that the server's was instantiated, but the server is not yet available to perform file operations. Under normal conditions, it can take a couple of minutes for the server to be completely operational. Both <code>START_FAILED</code> and <code>STOP_FAILED</code> are error conditions.</p> */
		State: FormControl<DescribedServerState | null | undefined>,
		UserCount: FormControl<number | null | undefined>,
	}
	export function CreateListedServerFormGroup() {
		return new FormGroup<ListedServerFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(1600), Validators.minLength(20), Validators.pattern('arn:.*')]),
			IdentityProviderType: new FormControl<CreateServerRequestIdentityProviderType | null | undefined>(undefined),
			EndpointType: new FormControl<CreateServerRequestEndpointType | null | undefined>(undefined),
			LoggingRole: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(2048), Validators.minLength(20), Validators.pattern('arn:.*role/.*')]),
			ServerId: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(19), Validators.minLength(19), Validators.pattern('^s-([0-9a-f]{17})$')]),
			State: new FormControl<DescribedServerState | null | undefined>(undefined),
			UserCount: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ListServersRequest {

		/**
		 * Minimum: 1
		 * Maximum: 1000
		 */
		MaxResults?: number | null;

		/**
		 * Max length: 6144
		 * Min length: 1
		 */
		NextToken?: string | null;
	}
	export interface ListServersRequestFormProperties {

		/**
		 * Minimum: 1
		 * Maximum: 1000
		 */
		MaxResults: FormControl<number | null | undefined>,

		/**
		 * Max length: 6144
		 * Min length: 1
		 */
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListServersRequestFormGroup() {
		return new FormGroup<ListServersRequestFormProperties>({
			MaxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(1000)]),
			NextToken: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(6144), Validators.minLength(1)]),
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

	export interface ListTagsForResourceResponse {

		/**
		 * Max length: 1600
		 * Min length: 20
		 */
		Arn?: string | null;

		/**
		 * Max length: 6144
		 * Min length: 1
		 */
		NextToken?: string | null;

		/**
		 * Minimum items: 1
		 * Maximum items: 50
		 */
		Tags?: Array<Tag>;
	}
	export interface ListTagsForResourceResponseFormProperties {

		/**
		 * Max length: 1600
		 * Min length: 20
		 */
		Arn: FormControl<string | null | undefined>,

		/**
		 * Max length: 6144
		 * Min length: 1
		 */
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListTagsForResourceResponseFormGroup() {
		return new FormGroup<ListTagsForResourceResponseFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(1600), Validators.minLength(20), Validators.pattern('arn:.*')]),
			NextToken: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(6144), Validators.minLength(1)]),
		});

	}

	export interface ListTagsForResourceRequest {

		/**
		 * Required
		 * Max length: 1600
		 * Min length: 20
		 */
		Arn: string;

		/**
		 * Minimum: 1
		 * Maximum: 1000
		 */
		MaxResults?: number | null;

		/**
		 * Max length: 6144
		 * Min length: 1
		 */
		NextToken?: string | null;
	}
	export interface ListTagsForResourceRequestFormProperties {

		/**
		 * Required
		 * Max length: 1600
		 * Min length: 20
		 */
		Arn: FormControl<string | null | undefined>,

		/**
		 * Minimum: 1
		 * Maximum: 1000
		 */
		MaxResults: FormControl<number | null | undefined>,

		/**
		 * Max length: 6144
		 * Min length: 1
		 */
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListTagsForResourceRequestFormGroup() {
		return new FormGroup<ListTagsForResourceRequestFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(1600), Validators.minLength(20), Validators.pattern('arn:.*')]),
			MaxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(1000)]),
			NextToken: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(6144), Validators.minLength(1)]),
		});

	}

	export interface ListUsersResponse {

		/**
		 * Max length: 6144
		 * Min length: 1
		 */
		NextToken?: string | null;

		/**
		 * Required
		 * Max length: 19
		 * Min length: 19
		 */
		ServerId: string;

		/** Required */
		Users: Array<ListedUser>;
	}
	export interface ListUsersResponseFormProperties {

		/**
		 * Max length: 6144
		 * Min length: 1
		 */
		NextToken: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 19
		 * Min length: 19
		 */
		ServerId: FormControl<string | null | undefined>,
	}
	export function CreateListUsersResponseFormGroup() {
		return new FormGroup<ListUsersResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(6144), Validators.minLength(1)]),
			ServerId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(19), Validators.minLength(19), Validators.pattern('^s-([0-9a-f]{17})$')]),
		});

	}


	/** Returns properties of the user that you specify. */
	export interface ListedUser {

		/**
		 * Required
		 * Max length: 1600
		 * Min length: 20
		 */
		Arn: string;

		/** Max length: 1024 */
		HomeDirectory?: string | null;
		HomeDirectoryType?: CreateUserRequestHomeDirectoryType | null;

		/**
		 * Max length: 2048
		 * Min length: 20
		 */
		Role?: string | null;
		SshPublicKeyCount?: number | null;

		/**
		 * Max length: 32
		 * Min length: 3
		 */
		UserName?: string | null;
	}

	/** Returns properties of the user that you specify. */
	export interface ListedUserFormProperties {

		/**
		 * Required
		 * Max length: 1600
		 * Min length: 20
		 */
		Arn: FormControl<string | null | undefined>,

		/** Max length: 1024 */
		HomeDirectory: FormControl<string | null | undefined>,
		HomeDirectoryType: FormControl<CreateUserRequestHomeDirectoryType | null | undefined>,

		/**
		 * Max length: 2048
		 * Min length: 20
		 */
		Role: FormControl<string | null | undefined>,
		SshPublicKeyCount: FormControl<number | null | undefined>,

		/**
		 * Max length: 32
		 * Min length: 3
		 */
		UserName: FormControl<string | null | undefined>,
	}
	export function CreateListedUserFormGroup() {
		return new FormGroup<ListedUserFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(1600), Validators.minLength(20), Validators.pattern('arn:.*')]),
			HomeDirectory: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(1024), Validators.pattern('^$|/.*')]),
			HomeDirectoryType: new FormControl<CreateUserRequestHomeDirectoryType | null | undefined>(undefined),
			Role: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(2048), Validators.minLength(20), Validators.pattern('arn:.*role/.*')]),
			SshPublicKeyCount: new FormControl<number | null | undefined>(undefined),
			UserName: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(32), Validators.minLength(3), Validators.pattern('^[a-zA-Z0-9_][a-zA-Z0-9_-]{2,31}$')]),
		});

	}

	export interface ListUsersRequest {

		/**
		 * Minimum: 1
		 * Maximum: 1000
		 */
		MaxResults?: number | null;

		/**
		 * Max length: 6144
		 * Min length: 1
		 */
		NextToken?: string | null;

		/**
		 * Required
		 * Max length: 19
		 * Min length: 19
		 */
		ServerId: string;
	}
	export interface ListUsersRequestFormProperties {

		/**
		 * Minimum: 1
		 * Maximum: 1000
		 */
		MaxResults: FormControl<number | null | undefined>,

		/**
		 * Max length: 6144
		 * Min length: 1
		 */
		NextToken: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 19
		 * Min length: 19
		 */
		ServerId: FormControl<string | null | undefined>,
	}
	export function CreateListUsersRequestFormGroup() {
		return new FormGroup<ListUsersRequestFormProperties>({
			MaxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(1000)]),
			NextToken: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(6144), Validators.minLength(1)]),
			ServerId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(19), Validators.minLength(19), Validators.pattern('^s-([0-9a-f]{17})$')]),
		});

	}

	export interface StartServerRequest {

		/**
		 * Required
		 * Max length: 19
		 * Min length: 19
		 */
		ServerId: string;
	}
	export interface StartServerRequestFormProperties {

		/**
		 * Required
		 * Max length: 19
		 * Min length: 19
		 */
		ServerId: FormControl<string | null | undefined>,
	}
	export function CreateStartServerRequestFormGroup() {
		return new FormGroup<StartServerRequestFormProperties>({
			ServerId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(19), Validators.minLength(19), Validators.pattern('^s-([0-9a-f]{17})$')]),
		});

	}

	export interface StopServerRequest {

		/**
		 * Required
		 * Max length: 19
		 * Min length: 19
		 */
		ServerId: string;
	}
	export interface StopServerRequestFormProperties {

		/**
		 * Required
		 * Max length: 19
		 * Min length: 19
		 */
		ServerId: FormControl<string | null | undefined>,
	}
	export function CreateStopServerRequestFormGroup() {
		return new FormGroup<StopServerRequestFormProperties>({
			ServerId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(19), Validators.minLength(19), Validators.pattern('^s-([0-9a-f]{17})$')]),
		});

	}

	export interface TagResourceRequest {

		/**
		 * Required
		 * Max length: 1600
		 * Min length: 20
		 */
		Arn: string;

		/**
		 * Required
		 * Minimum items: 1
		 * Maximum items: 50
		 */
		Tags: Array<Tag>;
	}
	export interface TagResourceRequestFormProperties {

		/**
		 * Required
		 * Max length: 1600
		 * Min length: 20
		 */
		Arn: FormControl<string | null | undefined>,
	}
	export function CreateTagResourceRequestFormGroup() {
		return new FormGroup<TagResourceRequestFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(1600), Validators.minLength(20), Validators.pattern('arn:.*')]),
		});

	}

	export interface TestIdentityProviderResponse {
		Response?: string | null;

		/** Required */
		StatusCode: number;
		Message?: string | null;

		/**
		 * Required
		 * Max length: 255
		 */
		Url: string;
	}
	export interface TestIdentityProviderResponseFormProperties {
		Response: FormControl<string | null | undefined>,

		/** Required */
		StatusCode: FormControl<number | null | undefined>,
		Message: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 255
		 */
		Url: FormControl<string | null | undefined>,
	}
	export function CreateTestIdentityProviderResponseFormGroup() {
		return new FormGroup<TestIdentityProviderResponseFormProperties>({
			Response: new FormControl<string | null | undefined>(undefined),
			StatusCode: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			Message: new FormControl<string | null | undefined>(undefined),
			Url: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(255)]),
		});

	}

	export interface TestIdentityProviderRequest {

		/**
		 * Required
		 * Max length: 19
		 * Min length: 19
		 */
		ServerId: string;
		ServerProtocol?: Protocol | null;

		/** Max length: 32 */
		SourceIp?: string | null;

		/**
		 * Required
		 * Max length: 32
		 * Min length: 3
		 */
		UserName: string;

		/** Max length: 2048 */
		UserPassword?: string | null;
	}
	export interface TestIdentityProviderRequestFormProperties {

		/**
		 * Required
		 * Max length: 19
		 * Min length: 19
		 */
		ServerId: FormControl<string | null | undefined>,
		ServerProtocol: FormControl<Protocol | null | undefined>,

		/** Max length: 32 */
		SourceIp: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 32
		 * Min length: 3
		 */
		UserName: FormControl<string | null | undefined>,

		/** Max length: 2048 */
		UserPassword: FormControl<string | null | undefined>,
	}
	export function CreateTestIdentityProviderRequestFormGroup() {
		return new FormGroup<TestIdentityProviderRequestFormProperties>({
			ServerId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(19), Validators.minLength(19), Validators.pattern('^s-([0-9a-f]{17})$')]),
			ServerProtocol: new FormControl<Protocol | null | undefined>(undefined),
			SourceIp: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(32), Validators.pattern('^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$')]),
			UserName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(32), Validators.minLength(3), Validators.pattern('^[a-zA-Z0-9_][a-zA-Z0-9_-]{2,31}$')]),
			UserPassword: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(2048)]),
		});

	}

	export interface UntagResourceRequest {

		/**
		 * Required
		 * Max length: 1600
		 * Min length: 20
		 */
		Arn: string;

		/**
		 * Required
		 * Minimum items: 1
		 * Maximum items: 50
		 */
		TagKeys: Array<string>;
	}
	export interface UntagResourceRequestFormProperties {

		/**
		 * Required
		 * Max length: 1600
		 * Min length: 20
		 */
		Arn: FormControl<string | null | undefined>,
	}
	export function CreateUntagResourceRequestFormGroup() {
		return new FormGroup<UntagResourceRequestFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(1600), Validators.minLength(20), Validators.pattern('arn:.*')]),
		});

	}

	export interface UpdateServerResponse {

		/**
		 * Required
		 * Max length: 19
		 * Min length: 19
		 */
		ServerId: string;
	}
	export interface UpdateServerResponseFormProperties {

		/**
		 * Required
		 * Max length: 19
		 * Min length: 19
		 */
		ServerId: FormControl<string | null | undefined>,
	}
	export function CreateUpdateServerResponseFormGroup() {
		return new FormGroup<UpdateServerResponseFormProperties>({
			ServerId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(19), Validators.minLength(19), Validators.pattern('^s-([0-9a-f]{17})$')]),
		});

	}

	export interface UpdateServerRequest {

		/** Max length: 1600 */
		Certificate?: string | null;

		/** The virtual private cloud (VPC) endpoint settings that are configured for your file transfer protocol-enabled server. With a VPC endpoint, you can restrict access to your server and resources only within your VPC. To control incoming internet traffic, invoke the <code>UpdateServer</code> API and attach an Elastic IP to your server's endpoint. */
		EndpointDetails?: EndpointDetails;
		EndpointType?: CreateServerRequestEndpointType | null;

		/** Max length: 4096 */
		HostKey?: string | null;

		/** Returns information related to the type of user authentication that is in use for a file transfer protocol-enabled server's users. A server can have only one method of authentication. */
		IdentityProviderDetails?: IdentityProviderDetails;

		/** Max length: 2048 */
		LoggingRole?: string | null;

		/**
		 * Minimum items: 1
		 * Maximum items: 3
		 */
		Protocols?: Array<Protocol>;

		/**
		 * Required
		 * Max length: 19
		 * Min length: 19
		 */
		ServerId: string;
	}
	export interface UpdateServerRequestFormProperties {

		/** Max length: 1600 */
		Certificate: FormControl<string | null | undefined>,
		EndpointType: FormControl<CreateServerRequestEndpointType | null | undefined>,

		/** Max length: 4096 */
		HostKey: FormControl<string | null | undefined>,

		/** Max length: 2048 */
		LoggingRole: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 19
		 * Min length: 19
		 */
		ServerId: FormControl<string | null | undefined>,
	}
	export function CreateUpdateServerRequestFormGroup() {
		return new FormGroup<UpdateServerRequestFormProperties>({
			Certificate: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(1600)]),
			EndpointType: new FormControl<CreateServerRequestEndpointType | null | undefined>(undefined),
			HostKey: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(4096)]),
			LoggingRole: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(2048), Validators.pattern('^$|arn:.*role/.*')]),
			ServerId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(19), Validators.minLength(19), Validators.pattern('^s-([0-9a-f]{17})$')]),
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


	/**  <code>UpdateUserResponse</code> returns the user name and file transfer protocol-enabled server identifier for the request to update a user's properties. */
	export interface UpdateUserResponse {

		/**
		 * Required
		 * Max length: 19
		 * Min length: 19
		 */
		ServerId: string;

		/**
		 * Required
		 * Max length: 32
		 * Min length: 3
		 */
		UserName: string;
	}

	/**  <code>UpdateUserResponse</code> returns the user name and file transfer protocol-enabled server identifier for the request to update a user's properties. */
	export interface UpdateUserResponseFormProperties {

		/**
		 * Required
		 * Max length: 19
		 * Min length: 19
		 */
		ServerId: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 32
		 * Min length: 3
		 */
		UserName: FormControl<string | null | undefined>,
	}
	export function CreateUpdateUserResponseFormGroup() {
		return new FormGroup<UpdateUserResponseFormProperties>({
			ServerId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(19), Validators.minLength(19), Validators.pattern('^s-([0-9a-f]{17})$')]),
			UserName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(32), Validators.minLength(3), Validators.pattern('^[a-zA-Z0-9_][a-zA-Z0-9_-]{2,31}$')]),
		});

	}

	export interface UpdateUserRequest {

		/** Max length: 1024 */
		HomeDirectory?: string | null;
		HomeDirectoryType?: CreateUserRequestHomeDirectoryType | null;

		/**
		 * Minimum items: 1
		 * Maximum items: 50
		 */
		HomeDirectoryMappings?: Array<HomeDirectoryMapEntry>;

		/** Max length: 2048 */
		Policy?: string | null;

		/**
		 * Max length: 2048
		 * Min length: 20
		 */
		Role?: string | null;

		/**
		 * Required
		 * Max length: 19
		 * Min length: 19
		 */
		ServerId: string;

		/**
		 * Required
		 * Max length: 32
		 * Min length: 3
		 */
		UserName: string;
	}
	export interface UpdateUserRequestFormProperties {

		/** Max length: 1024 */
		HomeDirectory: FormControl<string | null | undefined>,
		HomeDirectoryType: FormControl<CreateUserRequestHomeDirectoryType | null | undefined>,

		/** Max length: 2048 */
		Policy: FormControl<string | null | undefined>,

		/**
		 * Max length: 2048
		 * Min length: 20
		 */
		Role: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 19
		 * Min length: 19
		 */
		ServerId: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 32
		 * Min length: 3
		 */
		UserName: FormControl<string | null | undefined>,
	}
	export function CreateUpdateUserRequestFormGroup() {
		return new FormGroup<UpdateUserRequestFormProperties>({
			HomeDirectory: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(1024), Validators.pattern('^$|/.*')]),
			HomeDirectoryType: new FormControl<CreateUserRequestHomeDirectoryType | null | undefined>(undefined),
			Policy: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(2048)]),
			Role: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(2048), Validators.minLength(20), Validators.pattern('arn:.*role/.*')]),
			ServerId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(19), Validators.minLength(19), Validators.pattern('^s-([0-9a-f]{17})$')]),
			UserName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(32), Validators.minLength(3), Validators.pattern('^[a-zA-Z0-9_][a-zA-Z0-9_-]{2,31}$')]),
		});

	}

	export enum EndpointType { PUBLIC = 0, VPC = 1, VPC_ENDPOINT = 2 }


	/** Returns information related to the type of user authentication that is in use for a file transfer protocol-enabled server's users. For <code>SERVICE_MANAGED</code> authentication, the Secure Shell (SSH) public keys are stored with a user on the server instance. For <code>API_GATEWAY</code> authentication, your custom authentication method is implemented by using an API call. The server can have only one method of authentication. */
	export enum IdentityProviderType { SERVICE_MANAGED = 0, API_GATEWAY = 1 }

	export enum HomeDirectoryType { PATH = 0, LOGICAL = 1 }


	/** <p>Describes the condition of a file transfer protocol-enabled server with respect to its ability to perform file operations. There are six possible states: <code>OFFLINE</code>, <code>ONLINE</code>, <code>STARTING</code>, <code>STOPPING</code>, <code>START_FAILED</code>, and <code>STOP_FAILED</code>.</p> <p> <code>OFFLINE</code> indicates that the server exists, but that it is not available for file operations. <code>ONLINE</code> indicates that the server is available to perform file operations. <code>STARTING</code> indicates that the server's was instantiated, but the server is not yet available to perform file operations. Under normal conditions, it can take a couple of minutes for the server to be completely operational. Both <code>START_FAILED</code> and <code>STOP_FAILED</code> are error conditions.</p> */
	export enum State { OFFLINE = 0, ONLINE = 1, STARTING = 2, STOPPING = 3, START_FAILED = 4, STOP_FAILED = 5 }

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Instantiates an autoscaling virtual server based on the selected file transfer protocol in AWS. When you make updates to your file transfer protocol-enabled server or when you work with users, use the service-generated <code>ServerId</code> property that is assigned to the newly created server.
		 * Post #X-Amz-Target=TransferService.CreateServer
		 * @return {CreateServerResponse} Success
		 */
		CreateServer(requestBody: CreateServerRequest): Observable<CreateServerResponse> {
			return this.http.post<CreateServerResponse>(this.baseUri + '#X-Amz-Target=TransferService.CreateServer', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Creates a user and associates them with an existing file transfer protocol-enabled server. You can only create and associate users with servers that have the <code>IdentityProviderType</code> set to <code>SERVICE_MANAGED</code>. Using parameters for <code>CreateUser</code>, you can specify the user name, set the home directory, store the user's public key, and assign the user's AWS Identity and Access Management (IAM) role. You can also optionally add a scope-down policy, and assign metadata with tags that can be used to group and search for users.
		 * Post #X-Amz-Target=TransferService.CreateUser
		 * @return {CreateUserResponse} Success
		 */
		CreateUser(requestBody: CreateUserRequest): Observable<CreateUserResponse> {
			return this.http.post<CreateUserResponse>(this.baseUri + '#X-Amz-Target=TransferService.CreateUser', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
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
		 * <p>Deletes a user's Secure Shell (SSH) public key.</p> <p>No response is returned from this operation.</p>
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
		 * <p>Adds a Secure Shell (SSH) public key to a user account identified by a <code>UserName</code> value assigned to the specific file transfer protocol-enabled server, identified by <code>ServerId</code>.</p> <p>The response returns the <code>UserName</code> value, the <code>ServerId</code> value, and the name of the <code>SshPublicKeyId</code>.</p>
		 * Post #X-Amz-Target=TransferService.ImportSshPublicKey
		 * @return {ImportSshPublicKeyResponse} Success
		 */
		ImportSshPublicKey(requestBody: ImportSshPublicKeyRequest): Observable<ImportSshPublicKeyResponse> {
			return this.http.post<ImportSshPublicKeyResponse>(this.baseUri + '#X-Amz-Target=TransferService.ImportSshPublicKey', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists the file transfer protocol-enabled servers that are associated with your AWS account.
		 * Post #X-Amz-Target=TransferService.ListServers
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListServersResponse} Success
		 */
		ListServers(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListServersRequest): Observable<ListServersResponse> {
			return this.http.post<ListServersResponse>(this.baseUri + '#X-Amz-Target=TransferService.ListServers?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists all of the tags associated with the Amazon Resource Number (ARN) you specify. The resource can be a user, server, or role.
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
		 * <p>Changes the state of a file transfer protocol-enabled server from <code>OFFLINE</code> to <code>ONLINE</code>. It has no impact on a server that is already <code>ONLINE</code>. An <code>ONLINE</code> server can accept and process file transfer jobs.</p> <p>The state of <code>STARTING</code> indicates that the server is in an intermediate state, either not fully able to respond, or not fully online. The values of <code>START_FAILED</code> can indicate an error condition.</p> <p>No response is returned from this call.</p>
		 * Post #X-Amz-Target=TransferService.StartServer
		 * @return {void} Success
		 */
		StartServer(requestBody: StartServerRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '#X-Amz-Target=TransferService.StartServer', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Changes the state of a file transfer protocol-enabled server from <code>ONLINE</code> to <code>OFFLINE</code>. An <code>OFFLINE</code> server cannot accept and process file transfer jobs. Information tied to your server, such as server and user properties, are not affected by stopping your server. Stopping the server will not reduce or impact your file transfer protocol endpoint billing.</p> <p>The state of <code>STOPPING</code> indicates that the server is in an intermediate state, either not fully able to respond, or not fully offline. The values of <code>STOP_FAILED</code> can indicate an error condition.</p> <p>No response is returned from this call.</p>
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
		 * If the <code>IdentityProviderType</code> of a file transfer protocol-enabled server is <code>API_Gateway</code>, tests whether your API Gateway is set up successfully. We highly recommend that you call this operation to test your authentication method as soon as you create your server. By doing so, you can troubleshoot issues with the API Gateway integration to ensure that your users can successfully use the service.
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

	export enum CreateServerX_Amz_Target { TransferService_CreateServer = 0 }

	export enum CreateUserX_Amz_Target { TransferService_CreateUser = 0 }

	export enum DeleteServerX_Amz_Target { TransferService_DeleteServer = 0 }

	export enum DeleteSshPublicKeyX_Amz_Target { TransferService_DeleteSshPublicKey = 0 }

	export enum DeleteUserX_Amz_Target { TransferService_DeleteUser = 0 }

	export enum DescribeServerX_Amz_Target { TransferService_DescribeServer = 0 }

	export enum DescribeUserX_Amz_Target { TransferService_DescribeUser = 0 }

	export enum ImportSshPublicKeyX_Amz_Target { TransferService_ImportSshPublicKey = 0 }

	export enum ListServersX_Amz_Target { TransferService_ListServers = 0 }

	export enum ListTagsForResourceX_Amz_Target { TransferService_ListTagsForResource = 0 }

	export enum ListUsersX_Amz_Target { TransferService_ListUsers = 0 }

	export enum StartServerX_Amz_Target { TransferService_StartServer = 0 }

	export enum StopServerX_Amz_Target { TransferService_StopServer = 0 }

	export enum TagResourceX_Amz_Target { TransferService_TagResource = 0 }

	export enum TestIdentityProviderX_Amz_Target { TransferService_TestIdentityProvider = 0 }

	export enum UntagResourceX_Amz_Target { TransferService_UntagResource = 0 }

	export enum UpdateServerX_Amz_Target { TransferService_UpdateServer = 0 }

	export enum UpdateUserX_Amz_Target { TransferService_UpdateUser = 0 }

}

