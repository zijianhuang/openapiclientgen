import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

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


	/** A set of ACME challenges you can use to allow Hosting to create an SSL certificate for your domain name before directing traffic to Hosting servers. Use either the DNS or HTTP challenge; it's not necessary to provide both. */
	export interface CertVerification {

		/** A set of DNS record updates that you should make to allow Hosting to serve secure content in response to requests against your domain name. These updates present the current state of your domain name's DNS records when Hosting last queried them, and the desired set of records that Hosting needs to see before your custom domain can be fully active. */
		dns?: DnsUpdates;

		/** A file you can add to your existing, non-Hosting hosting service that confirms your intent to allow Hosting's Certificate Authorities to create an SSL certificate for your domain. */
		http?: HttpUpdate;
	}

	/** A set of ACME challenges you can use to allow Hosting to create an SSL certificate for your domain name before directing traffic to Hosting servers. Use either the DNS or HTTP challenge; it's not necessary to provide both. */
	export interface CertVerificationFormProperties {
	}
	export function CreateCertVerificationFormGroup() {
		return new FormGroup<CertVerificationFormProperties>({
		});

	}


	/** A set of DNS record updates that you should make to allow Hosting to serve secure content in response to requests against your domain name. These updates present the current state of your domain name's DNS records when Hosting last queried them, and the desired set of records that Hosting needs to see before your custom domain can be fully active. */
	export interface DnsUpdates {

		/** The last time Hosting checked your custom domain's DNS records. */
		checkTime?: string | null;

		/** The set of DNS records Hosting needs to serve secure content on the domain. */
		desired?: Array<DnsRecordSet>;

		/** The set of DNS records Hosting discovered when inspecting a domain. */
		discovered?: Array<DnsRecordSet>;
	}

	/** A set of DNS record updates that you should make to allow Hosting to serve secure content in response to requests against your domain name. These updates present the current state of your domain name's DNS records when Hosting last queried them, and the desired set of records that Hosting needs to see before your custom domain can be fully active. */
	export interface DnsUpdatesFormProperties {

		/** The last time Hosting checked your custom domain's DNS records. */
		checkTime: FormControl<string | null | undefined>,
	}
	export function CreateDnsUpdatesFormGroup() {
		return new FormGroup<DnsUpdatesFormProperties>({
			checkTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A set of DNS records relevant to the setup and maintenance of a custom domain in Firebase Hosting. */
	export interface DnsRecordSet {

		/** The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors). */
		checkError?: Status;

		/** Output only. The domain name the record set pertains to. */
		domainName?: string | null;

		/** Output only. Records on the domain. */
		records?: Array<DnsRecord>;
	}

	/** A set of DNS records relevant to the setup and maintenance of a custom domain in Firebase Hosting. */
	export interface DnsRecordSetFormProperties {

		/** Output only. The domain name the record set pertains to. */
		domainName: FormControl<string | null | undefined>,
	}
	export function CreateDnsRecordSetFormGroup() {
		return new FormGroup<DnsRecordSetFormProperties>({
			domainName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors). */
	export interface Status {

		/** The status code, which should be an enum value of google.rpc.Code. */
		code?: number | null;

		/** A list of messages that carry the error details. There is a common set of message types for APIs to use. */
		details?: Array<string>;

		/** A developer-facing error message, which should be in English. Any user-facing error message should be localized and sent in the google.rpc.Status.details field, or localized by the client. */
		message?: string | null;
	}

	/** The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors). */
	export interface StatusFormProperties {

		/** The status code, which should be an enum value of google.rpc.Code. */
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


	/** DNS records are resource records that define how systems and services should behave when handling requests for a domain name. For example, when you add `A` records to your domain name's DNS records, you're informing other systems (such as your users' web browsers) to contact those IPv4 addresses to retrieve resources relevant to your domain name (such as your Hosting site files). */
	export interface DnsRecord {

		/** Output only. The domain name the record pertains to, e.g. `foo.bar.com.`. */
		domainName?: string | null;

		/** Output only. The data of the record. The meaning of the value depends on record type: - A and AAAA: IP addresses for the domain name. - CNAME: Another domain to check for records. - TXT: Arbitrary text strings associated with the domain name. Hosting uses TXT records to determine which Firebase projects have permission to act on the domain name's behalf. - CAA: The record's flags, tag, and value, e.g. `0 issue "pki.goog"`. */
		rdata?: string | null;

		/** Output only. An enum that indicates the a required action for this record. */
		requiredAction?: DnsRecordRequiredAction | null;

		/** Output only. The record's type, which determines what data the record contains. */
		type?: DnsRecordType | null;
	}

	/** DNS records are resource records that define how systems and services should behave when handling requests for a domain name. For example, when you add `A` records to your domain name's DNS records, you're informing other systems (such as your users' web browsers) to contact those IPv4 addresses to retrieve resources relevant to your domain name (such as your Hosting site files). */
	export interface DnsRecordFormProperties {

		/** Output only. The domain name the record pertains to, e.g. `foo.bar.com.`. */
		domainName: FormControl<string | null | undefined>,

		/** Output only. The data of the record. The meaning of the value depends on record type: - A and AAAA: IP addresses for the domain name. - CNAME: Another domain to check for records. - TXT: Arbitrary text strings associated with the domain name. Hosting uses TXT records to determine which Firebase projects have permission to act on the domain name's behalf. - CAA: The record's flags, tag, and value, e.g. `0 issue "pki.goog"`. */
		rdata: FormControl<string | null | undefined>,

		/** Output only. An enum that indicates the a required action for this record. */
		requiredAction: FormControl<DnsRecordRequiredAction | null | undefined>,

		/** Output only. The record's type, which determines what data the record contains. */
		type: FormControl<DnsRecordType | null | undefined>,
	}
	export function CreateDnsRecordFormGroup() {
		return new FormGroup<DnsRecordFormProperties>({
			domainName: new FormControl<string | null | undefined>(undefined),
			rdata: new FormControl<string | null | undefined>(undefined),
			requiredAction: new FormControl<DnsRecordRequiredAction | null | undefined>(undefined),
			type: new FormControl<DnsRecordType | null | undefined>(undefined),
		});

	}

	export enum DnsRecordRequiredAction { NONE = 'NONE', ADD = 'ADD', REMOVE = 'REMOVE' }

	export enum DnsRecordType { TYPE_UNSPECIFIED = 'TYPE_UNSPECIFIED', A = 'A', CNAME = 'CNAME', TXT = 'TXT', AAAA = 'AAAA', CAA = 'CAA' }


	/** A file you can add to your existing, non-Hosting hosting service that confirms your intent to allow Hosting's Certificate Authorities to create an SSL certificate for your domain. */
	export interface HttpUpdate {

		/** The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors). */
		checkError?: Status;

		/** Output only. A text string to serve at the path. */
		desired?: string | null;

		/** Output only. Whether Hosting was able to find the required file contents on the specified path during its last check. */
		discovered?: string | null;

		/** Output only. The last time Hosting systems checked for the file contents. */
		lastCheckTime?: string | null;

		/** Output only. The path to the file. */
		path?: string | null;
	}

	/** A file you can add to your existing, non-Hosting hosting service that confirms your intent to allow Hosting's Certificate Authorities to create an SSL certificate for your domain. */
	export interface HttpUpdateFormProperties {

		/** Output only. A text string to serve at the path. */
		desired: FormControl<string | null | undefined>,

		/** Output only. Whether Hosting was able to find the required file contents on the specified path during its last check. */
		discovered: FormControl<string | null | undefined>,

		/** Output only. The last time Hosting systems checked for the file contents. */
		lastCheckTime: FormControl<string | null | undefined>,

		/** Output only. The path to the file. */
		path: FormControl<string | null | undefined>,
	}
	export function CreateHttpUpdateFormGroup() {
		return new FormGroup<HttpUpdateFormProperties>({
			desired: new FormControl<string | null | undefined>(undefined),
			discovered: new FormControl<string | null | undefined>(undefined),
			lastCheckTime: new FormControl<string | null | undefined>(undefined),
			path: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Metadata associated with a`CustomDomain` operation. */
	export interface CustomDomainMetadata {

		/** The `CertState` of the domain name's SSL certificate. */
		certState?: CustomDomainMetadataCertState | null;

		/** The `HostState` of the domain name this `CustomDomain` refers to. */
		hostState?: CustomDomainMetadataHostState | null;

		/** A list of issues that are currently preventing Hosting from completing the operation. These are generally DNS-related issues that Hosting encounters when querying a domain name's records or attempting to mint an SSL certificate. */
		issues?: Array<Status>;

		/** A set of DNS record updates and ACME challenges that allow you to transition domain names to Firebase Hosting with zero downtime. These updates allow Hosting to create an SSL certificate and establish ownership for your custom domain before Hosting begins serving traffic on it. If your domain name is already in active use with another provider, add one of the challenges and make the recommended DNS updates. After adding challenges and adjusting DNS records as necessary, wait for the `ownershipState` to be `OWNERSHIP_ACTIVE` and the `certState` to be `CERT_ACTIVE` before sending traffic to Hosting. */
		liveMigrationSteps?: Array<LiveMigrationStep>;

		/** The `OwnershipState` of the domain name this `CustomDomain` refers to. */
		ownershipState?: CustomDomainMetadataOwnershipState | null;

		/** A set of DNS record updates that you should make to allow Hosting to serve secure content in response to requests against your domain name. These updates present the current state of your domain name's DNS records when Hosting last queried them, and the desired set of records that Hosting needs to see before your custom domain can be fully active. */
		quickSetupUpdates?: DnsUpdates;
	}

	/** Metadata associated with a`CustomDomain` operation. */
	export interface CustomDomainMetadataFormProperties {

		/** The `CertState` of the domain name's SSL certificate. */
		certState: FormControl<CustomDomainMetadataCertState | null | undefined>,

		/** The `HostState` of the domain name this `CustomDomain` refers to. */
		hostState: FormControl<CustomDomainMetadataHostState | null | undefined>,

		/** The `OwnershipState` of the domain name this `CustomDomain` refers to. */
		ownershipState: FormControl<CustomDomainMetadataOwnershipState | null | undefined>,
	}
	export function CreateCustomDomainMetadataFormGroup() {
		return new FormGroup<CustomDomainMetadataFormProperties>({
			certState: new FormControl<CustomDomainMetadataCertState | null | undefined>(undefined),
			hostState: new FormControl<CustomDomainMetadataHostState | null | undefined>(undefined),
			ownershipState: new FormControl<CustomDomainMetadataOwnershipState | null | undefined>(undefined),
		});

	}

	export enum CustomDomainMetadataCertState { CERT_STATE_UNSPECIFIED = 'CERT_STATE_UNSPECIFIED', CERT_PREPARING = 'CERT_PREPARING', CERT_VALIDATING = 'CERT_VALIDATING', CERT_PROPAGATING = 'CERT_PROPAGATING', CERT_ACTIVE = 'CERT_ACTIVE', CERT_EXPIRING_SOON = 'CERT_EXPIRING_SOON', CERT_EXPIRED = 'CERT_EXPIRED' }

	export enum CustomDomainMetadataHostState { HOST_STATE_UNSPECIFIED = 'HOST_STATE_UNSPECIFIED', HOST_UNHOSTED = 'HOST_UNHOSTED', HOST_UNREACHABLE = 'HOST_UNREACHABLE', HOST_MISMATCH = 'HOST_MISMATCH', HOST_CONFLICT = 'HOST_CONFLICT', HOST_ACTIVE = 'HOST_ACTIVE' }


	/** A set of updates including ACME challenges and DNS records that allow Hosting to create an SSL certificate and establish project ownership for your domain name before you direct traffic to Hosting servers. Use these updates to facilitate zero downtime migrations to Hosting from other services. After you've made the recommended updates, check your custom domain's `ownershipState` and `certState`. To avoid downtime, they should be `OWNERSHIP_ACTIVE` and `CERT_ACTIVE`, respectively, before you update your `A` and `AAAA` records. */
	export interface LiveMigrationStep {

		/** A set of ACME challenges you can use to allow Hosting to create an SSL certificate for your domain name before directing traffic to Hosting servers. Use either the DNS or HTTP challenge; it's not necessary to provide both. */
		certVerification?: CertVerification;

		/** A set of DNS record updates that you should make to allow Hosting to serve secure content in response to requests against your domain name. These updates present the current state of your domain name's DNS records when Hosting last queried them, and the desired set of records that Hosting needs to see before your custom domain can be fully active. */
		dnsUpdates?: DnsUpdates;

		/** Output only. Issues that prevent the current step from completing. */
		issues?: Array<Status>;

		/** Output only. The state of the live migration step, indicates whether you should work to complete the step now, in the future, or have already completed it. */
		state?: LiveMigrationStepState | null;
	}

	/** A set of updates including ACME challenges and DNS records that allow Hosting to create an SSL certificate and establish project ownership for your domain name before you direct traffic to Hosting servers. Use these updates to facilitate zero downtime migrations to Hosting from other services. After you've made the recommended updates, check your custom domain's `ownershipState` and `certState`. To avoid downtime, they should be `OWNERSHIP_ACTIVE` and `CERT_ACTIVE`, respectively, before you update your `A` and `AAAA` records. */
	export interface LiveMigrationStepFormProperties {

		/** Output only. The state of the live migration step, indicates whether you should work to complete the step now, in the future, or have already completed it. */
		state: FormControl<LiveMigrationStepState | null | undefined>,
	}
	export function CreateLiveMigrationStepFormGroup() {
		return new FormGroup<LiveMigrationStepFormProperties>({
			state: new FormControl<LiveMigrationStepState | null | undefined>(undefined),
		});

	}

	export enum LiveMigrationStepState { STATE_UNSPECIFIED = 'STATE_UNSPECIFIED', PREPARING = 'PREPARING', PENDING = 'PENDING', INCOMPLETE = 'INCOMPLETE', PROCESSING = 'PROCESSING', COMPLETE = 'COMPLETE' }

	export enum CustomDomainMetadataOwnershipState { OWNERSHIP_STATE_UNSPECIFIED = 'OWNERSHIP_STATE_UNSPECIFIED', OWNERSHIP_MISSING = 'OWNERSHIP_MISSING', OWNERSHIP_UNREACHABLE = 'OWNERSHIP_UNREACHABLE', OWNERSHIP_MISMATCH = 'OWNERSHIP_MISMATCH', OWNERSHIP_CONFLICT = 'OWNERSHIP_CONFLICT', OWNERSHIP_PENDING = 'OWNERSHIP_PENDING', OWNERSHIP_ACTIVE = 'OWNERSHIP_ACTIVE' }


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

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * DeleteOperation is a part of the google.longrunning.Operations interface, but is not implemented for CustomDomain resources.
		 * Delete v1/{name}
		 * @param {string} name The name of the operation resource to be deleted.
		 * @return {Empty} Successful response
		 */
		Firebasehosting_projects_sites_customDomains_operations_delete(name: string): Observable<Empty> {
			return this.http.delete<Empty>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)), {});
		}

		/**
		 * Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
		 * Get v1/{name}
		 * @param {string} name The name of the operation's parent resource.
		 * @param {string} filter The standard list filter.
		 * @param {number} pageSize The standard list page size.
		 * @param {string} pageToken The standard list page token.
		 * @return {ListOperationsResponse} Successful response
		 */
		Firebasehosting_operations_list(name: string, filter: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListOperationsResponse> {
			return this.http.get<ListOperationsResponse>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + '&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * CancelOperation is a part of the google.longrunning.Operations interface, but is not implemented for CustomDomain resources.
		 * Post v1/{name}:cancel
		 * @param {string} name The name of the operation resource to be cancelled.
		 * @return {Empty} Successful response
		 */
		Firebasehosting_projects_sites_customDomains_operations_cancel(name: string, requestBody: CancelOperationRequest): Observable<Empty> {
			return this.http.post<Empty>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + ':cancel', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

}

