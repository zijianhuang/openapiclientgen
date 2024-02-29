import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** Message storing info about the first admin user. Next ID: 3 */
	export interface AdminUser {

		/** Optional. Last/family name of the first admin user. */
		familyName?: string | null;

		/** Optional. First/given name of the first admin user. */
		givenName?: string | null;
	}

	/** Message storing info about the first admin user. Next ID: 3 */
	export interface AdminUserFormProperties {

		/** Optional. Last/family name of the first admin user. */
		familyName: FormControl<string | null | undefined>,

		/** Optional. First/given name of the first admin user. */
		givenName: FormControl<string | null | undefined>,
	}
	export function CreateAdminUserFormGroup() {
		return new FormGroup<AdminUserFormProperties>({
			familyName: new FormControl<string | null | undefined>(undefined),
			givenName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The request message for Operations.CancelOperation. */
	export interface CancelOperationRequest {
	}

	/** The request message for Operations.CancelOperation. */
	export interface CancelOperationRequestFormProperties {
	}
	export function CreateCancelOperationRequestFormGroup() {
		return new FormGroup<CancelOperationRequestFormProperties>({
		});

	}


	/** Message describing ContactCenter object Next ID: 18 */
	export interface ContactCenter {

		/** Message storing info about the first admin user. Next ID: 3 */
		adminUser?: AdminUser;

		/** Optional. Whether to enable users to be created in the CCAIP-instance concurrently to having users in Cloud identity */
		ccaipManagedUsers?: boolean | null;

		/** Output only. [Output only] Create time stamp */
		createTime?: string | null;

		/** Required. Immutable. At least 2 and max 16 char long, must conform to [RFC 1035](https://www.ietf.org/rfc/rfc1035.txt). */
		customerDomainPrefix?: string | null;

		/** Required. A user friendly name for the ContactCenter. */
		displayName?: string | null;

		/** Message storing the instance configuration. */
		instanceConfig?: InstanceConfig;

		/** Immutable. The KMS key name to encrypt the user input (`ContactCenter`). */
		kmsKey?: string | null;

		/** Labels as key value pairs */
		labels?: {[id: string]: string };

		/** name of resource */
		name?: string | null;

		/** Output only. A list of UJET components that should be privately accessed. This field is set by reading settings from the data plane. For more information about the format of the component please refer to go/ccaip-vpc-sc-org-policy. This field is must be fully populated only for Create/Update resource operations. The main use case for this field is OrgPolicy checks via CPE. */
		privateComponents?: Array<string>;

		/** Message storing SAML params to enable Google as IDP. */
		samlParams?: SAMLParams;

		/** Output only. The state of this contact center. */
		state?: ContactCenterState | null;

		/** Output only. [Output only] Update time stamp */
		updateTime?: string | null;

		/** Message storing the URIs of the ContactCenter. */
		uris?: URIs;

		/** Optional. Email address of the first admin user. */
		userEmail?: string | null;
	}

	/** Message describing ContactCenter object Next ID: 18 */
	export interface ContactCenterFormProperties {

		/** Optional. Whether to enable users to be created in the CCAIP-instance concurrently to having users in Cloud identity */
		ccaipManagedUsers: FormControl<boolean | null | undefined>,

		/** Output only. [Output only] Create time stamp */
		createTime: FormControl<string | null | undefined>,

		/** Required. Immutable. At least 2 and max 16 char long, must conform to [RFC 1035](https://www.ietf.org/rfc/rfc1035.txt). */
		customerDomainPrefix: FormControl<string | null | undefined>,

		/** Required. A user friendly name for the ContactCenter. */
		displayName: FormControl<string | null | undefined>,

		/** Immutable. The KMS key name to encrypt the user input (`ContactCenter`). */
		kmsKey: FormControl<string | null | undefined>,

		/** Labels as key value pairs */
		labels: FormControl<{[id: string]: string } | null | undefined>,

		/** name of resource */
		name: FormControl<string | null | undefined>,

		/** Output only. The state of this contact center. */
		state: FormControl<ContactCenterState | null | undefined>,

		/** Output only. [Output only] Update time stamp */
		updateTime: FormControl<string | null | undefined>,

		/** Optional. Email address of the first admin user. */
		userEmail: FormControl<string | null | undefined>,
	}
	export function CreateContactCenterFormGroup() {
		return new FormGroup<ContactCenterFormProperties>({
			ccaipManagedUsers: new FormControl<boolean | null | undefined>(undefined),
			createTime: new FormControl<string | null | undefined>(undefined),
			customerDomainPrefix: new FormControl<string | null | undefined>(undefined),
			displayName: new FormControl<string | null | undefined>(undefined),
			kmsKey: new FormControl<string | null | undefined>(undefined),
			labels: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<ContactCenterState | null | undefined>(undefined),
			updateTime: new FormControl<string | null | undefined>(undefined),
			userEmail: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Message storing the instance configuration. */
	export interface InstanceConfig {

		/** The instance size of this the instance configuration. */
		instanceSize?: InstanceConfigInstanceSize | null;
	}

	/** Message storing the instance configuration. */
	export interface InstanceConfigFormProperties {

		/** The instance size of this the instance configuration. */
		instanceSize: FormControl<InstanceConfigInstanceSize | null | undefined>,
	}
	export function CreateInstanceConfigFormGroup() {
		return new FormGroup<InstanceConfigFormProperties>({
			instanceSize: new FormControl<InstanceConfigInstanceSize | null | undefined>(undefined),
		});

	}

	export enum InstanceConfigInstanceSize { INSTANCE_SIZE_UNSPECIFIED = 'INSTANCE_SIZE_UNSPECIFIED', STANDARD_SMALL = 'STANDARD_SMALL', STANDARD_MEDIUM = 'STANDARD_MEDIUM', STANDARD_LARGE = 'STANDARD_LARGE', STANDARD_XLARGE = 'STANDARD_XLARGE', STANDARD_2XLARGE = 'STANDARD_2XLARGE', STANDARD_3XLARGE = 'STANDARD_3XLARGE', DEV_XSMALL = 'DEV_XSMALL' }


	/** Message storing SAML params to enable Google as IDP. */
	export interface SAMLParams {

		/** SAML certificate */
		certificate?: string | null;

		/** IdP field that maps to the user’s email address */
		emailMapping?: string | null;

		/** Entity id URL */
		entityId?: string | null;

		/** Single sign-on URL */
		ssoUri?: string | null;

		/** Email address of the first admin users. */
		userEmail?: string | null;
	}

	/** Message storing SAML params to enable Google as IDP. */
	export interface SAMLParamsFormProperties {

		/** SAML certificate */
		certificate: FormControl<string | null | undefined>,

		/** IdP field that maps to the user’s email address */
		emailMapping: FormControl<string | null | undefined>,

		/** Entity id URL */
		entityId: FormControl<string | null | undefined>,

		/** Single sign-on URL */
		ssoUri: FormControl<string | null | undefined>,

		/** Email address of the first admin users. */
		userEmail: FormControl<string | null | undefined>,
	}
	export function CreateSAMLParamsFormGroup() {
		return new FormGroup<SAMLParamsFormProperties>({
			certificate: new FormControl<string | null | undefined>(undefined),
			emailMapping: new FormControl<string | null | undefined>(undefined),
			entityId: new FormControl<string | null | undefined>(undefined),
			ssoUri: new FormControl<string | null | undefined>(undefined),
			userEmail: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ContactCenterState { STATE_UNSPECIFIED = 'STATE_UNSPECIFIED', STATE_DEPLOYING = 'STATE_DEPLOYING', STATE_DEPLOYED = 'STATE_DEPLOYED', STATE_TERMINATING = 'STATE_TERMINATING', STATE_FAILED = 'STATE_FAILED', STATE_TERMINATING_FAILED = 'STATE_TERMINATING_FAILED', STATE_TERMINATED = 'STATE_TERMINATED', STATE_IN_GRACE_PERIOD = 'STATE_IN_GRACE_PERIOD' }


	/** Message storing the URIs of the ContactCenter. */
	export interface URIs {

		/** Chat Bot Uri of the ContactCenter */
		chatBotUri?: string | null;

		/** Media Uri of the ContactCenter. */
		mediaUri?: string | null;

		/** Root Uri of the ContactCenter. */
		rootUri?: string | null;

		/** Virtual Agent Streaming Service Uri of the ContactCenter. */
		virtualAgentStreamingServiceUri?: string | null;
	}

	/** Message storing the URIs of the ContactCenter. */
	export interface URIsFormProperties {

		/** Chat Bot Uri of the ContactCenter */
		chatBotUri: FormControl<string | null | undefined>,

		/** Media Uri of the ContactCenter. */
		mediaUri: FormControl<string | null | undefined>,

		/** Root Uri of the ContactCenter. */
		rootUri: FormControl<string | null | undefined>,

		/** Virtual Agent Streaming Service Uri of the ContactCenter. */
		virtualAgentStreamingServiceUri: FormControl<string | null | undefined>,
	}
	export function CreateURIsFormGroup() {
		return new FormGroup<URIsFormProperties>({
			chatBotUri: new FormControl<string | null | undefined>(undefined),
			mediaUri: new FormControl<string | null | undefined>(undefined),
			rootUri: new FormControl<string | null | undefined>(undefined),
			virtualAgentStreamingServiceUri: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents a quota for contact centers. */
	export interface ContactCenterQuota {

		/**
		 * Deprecated: Use the Quota fields instead. Reflects the count limit of contact centers on a billing account.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		contactCenterCountLimit?: number | null;

		/**
		 * Deprecated: Use the Quota fields instead. Reflects the count sum of contact centers on a billing account.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		contactCenterCountSum?: number | null;

		/** Quota details per contact center instance type. */
		quotas?: Array<Quota>;
	}

	/** Represents a quota for contact centers. */
	export interface ContactCenterQuotaFormProperties {

		/**
		 * Deprecated: Use the Quota fields instead. Reflects the count limit of contact centers on a billing account.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		contactCenterCountLimit: FormControl<number | null | undefined>,

		/**
		 * Deprecated: Use the Quota fields instead. Reflects the count sum of contact centers on a billing account.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		contactCenterCountSum: FormControl<number | null | undefined>,
	}
	export function CreateContactCenterQuotaFormGroup() {
		return new FormGroup<ContactCenterQuotaFormProperties>({
			contactCenterCountLimit: new FormControl<number | null | undefined>(undefined),
			contactCenterCountSum: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Quota details. */
	export interface Quota {

		/**
		 * Reflects the count limit of contact centers on a billing account.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		contactCenterCountLimit?: number | null;

		/**
		 * Reflects the count sum of contact centers on a billing account.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		contactCenterCountSum?: number | null;

		/** Contact center instance type. */
		contactCenterInstanceSize?: InstanceConfigInstanceSize | null;
	}

	/** Quota details. */
	export interface QuotaFormProperties {

		/**
		 * Reflects the count limit of contact centers on a billing account.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		contactCenterCountLimit: FormControl<number | null | undefined>,

		/**
		 * Reflects the count sum of contact centers on a billing account.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		contactCenterCountSum: FormControl<number | null | undefined>,

		/** Contact center instance type. */
		contactCenterInstanceSize: FormControl<InstanceConfigInstanceSize | null | undefined>,
	}
	export function CreateQuotaFormGroup() {
		return new FormGroup<QuotaFormProperties>({
			contactCenterCountLimit: new FormControl<number | null | undefined>(undefined),
			contactCenterCountSum: new FormControl<number | null | undefined>(undefined),
			contactCenterInstanceSize: new FormControl<InstanceConfigInstanceSize | null | undefined>(undefined),
		});

	}


	/** A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); } */
	export interface Empty {
	}

	/** A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); } */
	export interface EmptyFormProperties {
	}
	export function CreateEmptyFormGroup() {
		return new FormGroup<EmptyFormProperties>({
		});

	}


	/** Represents the metadata of the long-running operation. */
	export interface GoogleCloudCommonOperationMetadata {

		/** Output only. API version used to start the operation. */
		apiVersion?: string | null;

		/** Output only. Identifies whether the user has requested cancellation of the operation. Operations that have been cancelled successfully have Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`. */
		cancelRequested?: boolean | null;

		/** Output only. The time the operation was created. */
		createTime?: string | null;

		/** Output only. The time the operation finished running. */
		endTime?: string | null;

		/** Output only. Human-readable status of the operation, if any. */
		statusDetail?: string | null;

		/** Output only. Server-defined resource path for the target of the operation. */
		target?: string | null;

		/** Output only. Name of the verb executed by the operation. */
		verb?: string | null;
	}

	/** Represents the metadata of the long-running operation. */
	export interface GoogleCloudCommonOperationMetadataFormProperties {

		/** Output only. API version used to start the operation. */
		apiVersion: FormControl<string | null | undefined>,

		/** Output only. Identifies whether the user has requested cancellation of the operation. Operations that have been cancelled successfully have Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`. */
		cancelRequested: FormControl<boolean | null | undefined>,

		/** Output only. The time the operation was created. */
		createTime: FormControl<string | null | undefined>,

		/** Output only. The time the operation finished running. */
		endTime: FormControl<string | null | undefined>,

		/** Output only. Human-readable status of the operation, if any. */
		statusDetail: FormControl<string | null | undefined>,

		/** Output only. Server-defined resource path for the target of the operation. */
		target: FormControl<string | null | undefined>,

		/** Output only. Name of the verb executed by the operation. */
		verb: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudCommonOperationMetadataFormGroup() {
		return new FormGroup<GoogleCloudCommonOperationMetadataFormProperties>({
			apiVersion: new FormControl<string | null | undefined>(undefined),
			cancelRequested: new FormControl<boolean | null | undefined>(undefined),
			createTime: new FormControl<string | null | undefined>(undefined),
			endTime: new FormControl<string | null | undefined>(undefined),
			statusDetail: new FormControl<string | null | undefined>(undefined),
			target: new FormControl<string | null | undefined>(undefined),
			verb: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Message for response to listing ContactCenters */
	export interface ListContactCentersResponse {

		/** The list of ContactCenter */
		contactCenters?: Array<ContactCenter>;

		/** A token identifying a page of results the server should return. */
		nextPageToken?: string | null;

		/** Locations that could not be reached. */
		unreachable?: Array<string>;
	}

	/** Message for response to listing ContactCenters */
	export interface ListContactCentersResponseFormProperties {

		/** A token identifying a page of results the server should return. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListContactCentersResponseFormGroup() {
		return new FormGroup<ListContactCentersResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The response message for Locations.ListLocations. */
	export interface ListLocationsResponse {

		/** A list of locations that matches the specified filter in the request. */
		locations?: Array<Location>;

		/** The standard List next-page token. */
		nextPageToken?: string | null;
	}

	/** The response message for Locations.ListLocations. */
	export interface ListLocationsResponseFormProperties {

		/** The standard List next-page token. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListLocationsResponseFormGroup() {
		return new FormGroup<ListLocationsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A resource that represents a Google Cloud location. */
	export interface Location {

		/** The friendly name for this location, typically a nearby city name. For example, "Tokyo". */
		displayName?: string | null;

		/** Cross-service attributes for the location. For example {"cloud.googleapis.com/region": "us-east1"} */
		labels?: {[id: string]: string };

		/** The canonical id for this location. For example: `"us-east1"`. */
		locationId?: string | null;

		/** Service-specific metadata. For example the available capacity at the given location. */
		metadata?: {[id: string]: any };

		/** Resource name for the location, which may vary between implementations. For example: `"projects/example-project/locations/us-east1"` */
		name?: string | null;
	}

	/** A resource that represents a Google Cloud location. */
	export interface LocationFormProperties {

		/** The friendly name for this location, typically a nearby city name. For example, "Tokyo". */
		displayName: FormControl<string | null | undefined>,

		/** Cross-service attributes for the location. For example {"cloud.googleapis.com/region": "us-east1"} */
		labels: FormControl<{[id: string]: string } | null | undefined>,

		/** The canonical id for this location. For example: `"us-east1"`. */
		locationId: FormControl<string | null | undefined>,

		/** Service-specific metadata. For example the available capacity at the given location. */
		metadata: FormControl<{[id: string]: any } | null | undefined>,

		/** Resource name for the location, which may vary between implementations. For example: `"projects/example-project/locations/us-east1"` */
		name: FormControl<string | null | undefined>,
	}
	export function CreateLocationFormGroup() {
		return new FormGroup<LocationFormProperties>({
			displayName: new FormControl<string | null | undefined>(undefined),
			labels: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			locationId: new FormControl<string | null | undefined>(undefined),
			metadata: new FormControl<{[id: string]: any } | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The response message for Operations.ListOperations. */
	export interface ListOperationsResponse {

		/** The standard List next-page token. */
		nextPageToken?: string | null;

		/** A list of operations that matches the specified filter in the request. */
		operations?: Array<Operation>;
	}

	/** The response message for Operations.ListOperations. */
	export interface ListOperationsResponseFormProperties {

		/** The standard List next-page token. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListOperationsResponseFormGroup() {
		return new FormGroup<ListOperationsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** This resource represents a long-running operation that is the result of a network API call. */
	export interface Operation {

		/** If the value is `false`, it means the operation is still in progress. If `true`, the operation is completed, and either `error` or `response` is available. */
		done?: boolean | null;

		/** The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors). */
		error?: Status;

		/** Service-specific metadata associated with the operation. It typically contains progress information and common metadata such as create time. Some services might not provide such metadata. Any method that returns a long-running operation should document the metadata type, if any. */
		metadata?: {[id: string]: any };

		/** The server-assigned name, which is only unique within the same service that originally returns it. If you use the default HTTP mapping, the `name` should be a resource name ending with `operations/{unique_id}`. */
		name?: string | null;

		/** The normal, successful response of the operation. If the original method returns no data on success, such as `Delete`, the response is `google.protobuf.Empty`. If the original method is standard `Get`/`Create`/`Update`, the response should be the resource. For other methods, the response should have the type `XxxResponse`, where `Xxx` is the original method name. For example, if the original method name is `TakeSnapshot()`, the inferred response type is `TakeSnapshotResponse`. */
		response?: {[id: string]: any };
	}

	/** This resource represents a long-running operation that is the result of a network API call. */
	export interface OperationFormProperties {

		/** If the value is `false`, it means the operation is still in progress. If `true`, the operation is completed, and either `error` or `response` is available. */
		done: FormControl<boolean | null | undefined>,

		/** Service-specific metadata associated with the operation. It typically contains progress information and common metadata such as create time. Some services might not provide such metadata. Any method that returns a long-running operation should document the metadata type, if any. */
		metadata: FormControl<{[id: string]: any } | null | undefined>,

		/** The server-assigned name, which is only unique within the same service that originally returns it. If you use the default HTTP mapping, the `name` should be a resource name ending with `operations/{unique_id}`. */
		name: FormControl<string | null | undefined>,

		/** The normal, successful response of the operation. If the original method returns no data on success, such as `Delete`, the response is `google.protobuf.Empty`. If the original method is standard `Get`/`Create`/`Update`, the response should be the resource. For other methods, the response should have the type `XxxResponse`, where `Xxx` is the original method name. For example, if the original method name is `TakeSnapshot()`, the inferred response type is `TakeSnapshotResponse`. */
		response: FormControl<{[id: string]: any } | null | undefined>,
	}
	export function CreateOperationFormGroup() {
		return new FormGroup<OperationFormProperties>({
			done: new FormControl<boolean | null | undefined>(undefined),
			metadata: new FormControl<{[id: string]: any } | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			response: new FormControl<{[id: string]: any } | null | undefined>(undefined),
		});

	}


	/** The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors). */
	export interface Status {

		/**
		 * The status code, which should be an enum value of google.rpc.Code.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		code?: number | null;

		/** A list of messages that carry the error details. There is a common set of message types for APIs to use. */
		details?: Array<string>;

		/** A developer-facing error message, which should be in English. Any user-facing error message should be localized and sent in the google.rpc.Status.details field, or localized by the client. */
		message?: string | null;
	}

	/** The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors). */
	export interface StatusFormProperties {

		/**
		 * The status code, which should be an enum value of google.rpc.Code.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		code: FormControl<number | null | undefined>,

		/** A developer-facing error message, which should be in English. Any user-facing error message should be localized and sent in the google.rpc.Status.details field, or localized by the client. */
		message: FormControl<string | null | undefined>,
	}
	export function CreateStatusFormGroup() {
		return new FormGroup<StatusFormProperties>({
			code: new FormControl<number | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents the metadata of the long-running operation. */
	export interface OperationMetadata {

		/** Output only. API version used to start the operation. */
		apiVersion?: string | null;

		/** Message describing ContactCenter object Next ID: 18 */
		contactCenter?: ContactCenter;

		/** Output only. The time the operation was created. */
		createTime?: string | null;

		/** Output only. The time the operation finished running. */
		endTime?: string | null;

		/** Output only. Identifies whether the user has requested cancellation of the operation. Operations that have been cancelled successfully have Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`. */
		requestedCancellation?: boolean | null;

		/** Output only. Human-readable status of the operation, if any. */
		statusMessage?: string | null;

		/** Output only. Server-defined resource path for the target of the operation. */
		target?: string | null;

		/** Output only. Name of the verb executed by the operation. */
		verb?: string | null;
	}

	/** Represents the metadata of the long-running operation. */
	export interface OperationMetadataFormProperties {

		/** Output only. API version used to start the operation. */
		apiVersion: FormControl<string | null | undefined>,

		/** Output only. The time the operation was created. */
		createTime: FormControl<string | null | undefined>,

		/** Output only. The time the operation finished running. */
		endTime: FormControl<string | null | undefined>,

		/** Output only. Identifies whether the user has requested cancellation of the operation. Operations that have been cancelled successfully have Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`. */
		requestedCancellation: FormControl<boolean | null | undefined>,

		/** Output only. Human-readable status of the operation, if any. */
		statusMessage: FormControl<string | null | undefined>,

		/** Output only. Server-defined resource path for the target of the operation. */
		target: FormControl<string | null | undefined>,

		/** Output only. Name of the verb executed by the operation. */
		verb: FormControl<string | null | undefined>,
	}
	export function CreateOperationMetadataFormGroup() {
		return new FormGroup<OperationMetadataFormProperties>({
			apiVersion: new FormControl<string | null | undefined>(undefined),
			createTime: new FormControl<string | null | undefined>(undefined),
			endTime: new FormControl<string | null | undefined>(undefined),
			requestedCancellation: new FormControl<boolean | null | undefined>(undefined),
			statusMessage: new FormControl<string | null | undefined>(undefined),
			target: new FormControl<string | null | undefined>(undefined),
			verb: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
		 * Delete v1alpha1/{name}
		 * @param {string} name The name of the operation resource to be deleted.
		 * @param {string} requestId Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes after the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
		 * @return {Empty} Successful response
		 */
		Contactcenteraiplatform_projects_locations_operations_delete(name: string, requestId: string | null | undefined): Observable<Empty> {
			return this.http.delete<Empty>(this.baseUri + 'v1alpha1/' + (name == null ? '' : encodeURIComponent(name)) + '&requestId=' + (requestId == null ? '' : encodeURIComponent(requestId)), {});
		}

		/**
		 * Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
		 * Get v1alpha1/{name}
		 * @param {string} name The name of the operation resource.
		 * @return {Operation} Successful response
		 */
		Contactcenteraiplatform_projects_locations_operations_get(name: string): Observable<Operation> {
			return this.http.get<Operation>(this.baseUri + 'v1alpha1/' + (name == null ? '' : encodeURIComponent(name)), {});
		}

		/**
		 * Updates the parameters of a single ContactCenter.
		 * Patch v1alpha1/{name}
		 * @param {string} name name of resource
		 * @param {string} requestId Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
		 * @param {string} updateMask Required. Field mask is used to specify the fields to be overwritten in the ContactCenter resource by the update. The fields specified in the update_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask. If the user does not provide a mask then all fields will be overwritten.
		 * @return {Operation} Successful response
		 */
		Contactcenteraiplatform_projects_locations_contactCenters_patch(name: string, requestId: string | null | undefined, updateMask: string | null | undefined, requestBody: ContactCenter): Observable<Operation> {
			return this.http.patch<Operation>(this.baseUri + 'v1alpha1/' + (name == null ? '' : encodeURIComponent(name)) + '&requestId=' + (requestId == null ? '' : encodeURIComponent(requestId)) + '&updateMask=' + (updateMask == null ? '' : encodeURIComponent(updateMask)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists information about the supported locations for this service.
		 * Get v1alpha1/{name}/locations
		 * @param {string} name The resource that owns the locations collection, if applicable.
		 * @param {string} filter A filter to narrow down results to a preferred subset. The filtering language accepts strings like `"displayName=tokyo"`, and is documented in more detail in [AIP-160](https://google.aip.dev/160).
		 * @param {number} pageSize The maximum number of results to return. If not set, the service selects a default.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} pageToken A page token received from the `next_page_token` field in the response. Send that page token to receive the subsequent page.
		 * @return {ListLocationsResponse} Successful response
		 */
		Contactcenteraiplatform_projects_locations_list(name: string, filter: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListLocationsResponse> {
			return this.http.get<ListLocationsResponse>(this.baseUri + 'v1alpha1/' + (name == null ? '' : encodeURIComponent(name)) + '/locations&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
		 * Get v1alpha1/{name}/operations
		 * @param {string} name The name of the operation's parent resource.
		 * @param {string} filter The standard list filter.
		 * @param {number} pageSize The standard list page size.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} pageToken The standard list page token.
		 * @return {ListOperationsResponse} Successful response
		 */
		Contactcenteraiplatform_projects_locations_operations_list(name: string, filter: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListOperationsResponse> {
			return this.http.get<ListOperationsResponse>(this.baseUri + 'v1alpha1/' + (name == null ? '' : encodeURIComponent(name)) + '/operations&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
		 * Post v1alpha1/{name}:cancel
		 * @param {string} name The name of the operation resource to be cancelled.
		 * @return {Empty} Successful response
		 */
		Contactcenteraiplatform_projects_locations_operations_cancel(name: string, requestBody: CancelOperationRequest): Observable<Empty> {
			return this.http.post<Empty>(this.baseUri + 'v1alpha1/' + (name == null ? '' : encodeURIComponent(name)) + ':cancel', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists ContactCenters in a given project and location.
		 * Get v1alpha1/{parent}/contactCenters
		 * @param {string} parent Required. Parent value for ListContactCentersRequest
		 * @param {string} filter Filtering results
		 * @param {string} orderBy Hint for how to order the results
		 * @param {number} pageSize Requested page size. Server may return fewer items than requested. If unspecified, server will pick an appropriate default.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} pageToken A token identifying a page of results the server should return.
		 * @return {ListContactCentersResponse} Successful response
		 */
		Contactcenteraiplatform_projects_locations_contactCenters_list(parent: string, filter: string | null | undefined, orderBy: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListContactCentersResponse> {
			return this.http.get<ListContactCentersResponse>(this.baseUri + 'v1alpha1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/contactCenters&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&orderBy=' + (orderBy == null ? '' : encodeURIComponent(orderBy)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Creates a new ContactCenter in a given project and location.
		 * Post v1alpha1/{parent}/contactCenters
		 * @param {string} parent Required. Value for parent.
		 * @param {string} contactCenterId Required. Id of the requesting object If auto-generating Id server-side, remove this field and contact_center_id from the method_signature of Create RPC
		 * @param {string} requestId Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
		 * @return {Operation} Successful response
		 */
		Contactcenteraiplatform_projects_locations_contactCenters_create(parent: string, contactCenterId: string | null | undefined, requestId: string | null | undefined, requestBody: ContactCenter): Observable<Operation> {
			return this.http.post<Operation>(this.baseUri + 'v1alpha1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/contactCenters&contactCenterId=' + (contactCenterId == null ? '' : encodeURIComponent(contactCenterId)) + '&requestId=' + (requestId == null ? '' : encodeURIComponent(requestId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Queries the contact center quota, an aggregation over all the projects, that belongs to the billing account, which the input project belongs to.
		 * Get v1alpha1/{parent}:queryContactCenterQuota
		 * @param {string} parent Required. Parent project resource id.
		 * @return {ContactCenterQuota} Successful response
		 */
		Contactcenteraiplatform_projects_locations_queryContactCenterQuota(parent: string): Observable<ContactCenterQuota> {
			return this.http.get<ContactCenterQuota>(this.baseUri + 'v1alpha1/' + (parent == null ? '' : encodeURIComponent(parent)) + ':queryContactCenterQuota', {});
		}
	}

}

