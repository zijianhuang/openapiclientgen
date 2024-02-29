import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** Associates `members`, or principals, with a `role`. */
	export interface Binding {

		/** Represents a textual expression in the Common Expression Language (CEL) syntax. CEL is a C-like expression language. The syntax and semantics of CEL are documented at https://github.com/google/cel-spec. Example (Comparison): title: "Summary size limit" description: "Determines if a summary is less than 100 chars" expression: "document.summary.size() < 100" Example (Equality): title: "Requestor is owner" description: "Determines if requestor is the document owner" expression: "document.owner == request.auth.claims.email" Example (Logic): title: "Public documents" description: "Determine whether the document should be publicly visible" expression: "document.type != 'private' && document.type != 'internal'" Example (Data Manipulation): title: "Notification string" description: "Create a notification string with a timestamp." expression: "'New message received at ' + string(document.create_time)" The exact variables and functions that may be referenced within an expression are determined by the service that evaluates it. See the service documentation for additional information. */
		condition?: Expr;

		/** Specifies the principals requesting access for a Google Cloud resource. `members` can have the following values: * `allUsers`: A special identifier that represents anyone who is on the internet; with or without a Google account. * `allAuthenticatedUsers`: A special identifier that represents anyone who is authenticated with a Google account or a service account. Does not include identities that come from external identity providers (IdPs) through identity federation. * `user:{emailid}`: An email address that represents a specific Google account. For example, `alice@example.com` . * `serviceAccount:{emailid}`: An email address that represents a Google service account. For example, `my-other-app@appspot.gserviceaccount.com`. * `serviceAccount:{projectid}.svc.id.goog[{namespace}/{kubernetes-sa}]`: An identifier for a [Kubernetes service account](https://cloud.google.com/kubernetes-engine/docs/how-to/kubernetes-service-accounts). For example, `my-project.svc.id.goog[my-namespace/my-kubernetes-sa]`. * `group:{emailid}`: An email address that represents a Google group. For example, `admins@example.com`. * `domain:{domain}`: The G Suite domain (primary) that represents all the users of that domain. For example, `google.com` or `example.com`. * `principal://iam.googleapis.com/locations/global/workforcePools/{pool_id}/subject/{subject_attribute_value}`: A single identity in a workforce identity pool. * `principalSet://iam.googleapis.com/locations/global/workforcePools/{pool_id}/group/{group_id}`: All workforce identities in a group. * `principalSet://iam.googleapis.com/locations/global/workforcePools/{pool_id}/attribute.{attribute_name}/{attribute_value}`: All workforce identities with a specific attribute value. * `principalSet://iam.googleapis.com/locations/global/workforcePools/{pool_id}/*`: All identities in a workforce identity pool. * `principal://iam.googleapis.com/projects/{project_number}/locations/global/workloadIdentityPools/{pool_id}/subject/{subject_attribute_value}`: A single identity in a workload identity pool. * `principalSet://iam.googleapis.com/projects/{project_number}/locations/global/workloadIdentityPools/{pool_id}/group/{group_id}`: A workload identity pool group. * `principalSet://iam.googleapis.com/projects/{project_number}/locations/global/workloadIdentityPools/{pool_id}/attribute.{attribute_name}/{attribute_value}`: All identities in a workload identity pool with a certain attribute. * `principalSet://iam.googleapis.com/projects/{project_number}/locations/global/workloadIdentityPools/{pool_id}/*`: All identities in a workload identity pool. * `deleted:user:{emailid}?uid={uniqueid}`: An email address (plus unique identifier) representing a user that has been recently deleted. For example, `alice@example.com?uid=123456789012345678901`. If the user is recovered, this value reverts to `user:{emailid}` and the recovered user retains the role in the binding. * `deleted:serviceAccount:{emailid}?uid={uniqueid}`: An email address (plus unique identifier) representing a service account that has been recently deleted. For example, `my-other-app@appspot.gserviceaccount.com?uid=123456789012345678901`. If the service account is undeleted, this value reverts to `serviceAccount:{emailid}` and the undeleted service account retains the role in the binding. * `deleted:group:{emailid}?uid={uniqueid}`: An email address (plus unique identifier) representing a Google group that has been recently deleted. For example, `admins@example.com?uid=123456789012345678901`. If the group is recovered, this value reverts to `group:{emailid}` and the recovered group retains the role in the binding. * `deleted:principal://iam.googleapis.com/locations/global/workforcePools/{pool_id}/subject/{subject_attribute_value}`: Deleted single identity in a workforce identity pool. For example, `deleted:principal://iam.googleapis.com/locations/global/workforcePools/my-pool-id/subject/my-subject-attribute-value`. */
		members?: Array<string>;

		/** Role that is assigned to the list of `members`, or principals. For example, `roles/viewer`, `roles/editor`, or `roles/owner`. */
		role?: string | null;
	}

	/** Associates `members`, or principals, with a `role`. */
	export interface BindingFormProperties {

		/** Role that is assigned to the list of `members`, or principals. For example, `roles/viewer`, `roles/editor`, or `roles/owner`. */
		role: FormControl<string | null | undefined>,
	}
	export function CreateBindingFormGroup() {
		return new FormGroup<BindingFormProperties>({
			role: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents a textual expression in the Common Expression Language (CEL) syntax. CEL is a C-like expression language. The syntax and semantics of CEL are documented at https://github.com/google/cel-spec. Example (Comparison): title: "Summary size limit" description: "Determines if a summary is less than 100 chars" expression: "document.summary.size() < 100" Example (Equality): title: "Requestor is owner" description: "Determines if requestor is the document owner" expression: "document.owner == request.auth.claims.email" Example (Logic): title: "Public documents" description: "Determine whether the document should be publicly visible" expression: "document.type != 'private' && document.type != 'internal'" Example (Data Manipulation): title: "Notification string" description: "Create a notification string with a timestamp." expression: "'New message received at ' + string(document.create_time)" The exact variables and functions that may be referenced within an expression are determined by the service that evaluates it. See the service documentation for additional information. */
	export interface Expr {

		/** Optional. Description of the expression. This is a longer text which describes the expression, e.g. when hovered over it in a UI. */
		description?: string | null;

		/** Textual representation of an expression in Common Expression Language syntax. */
		expression?: string | null;

		/** Optional. String indicating the location of the expression for error reporting, e.g. a file name and a position in the file. */
		location?: string | null;

		/** Optional. Title for the expression, i.e. a short string describing its purpose. This can be used e.g. in UIs which allow to enter the expression. */
		title?: string | null;
	}

	/** Represents a textual expression in the Common Expression Language (CEL) syntax. CEL is a C-like expression language. The syntax and semantics of CEL are documented at https://github.com/google/cel-spec. Example (Comparison): title: "Summary size limit" description: "Determines if a summary is less than 100 chars" expression: "document.summary.size() < 100" Example (Equality): title: "Requestor is owner" description: "Determines if requestor is the document owner" expression: "document.owner == request.auth.claims.email" Example (Logic): title: "Public documents" description: "Determine whether the document should be publicly visible" expression: "document.type != 'private' && document.type != 'internal'" Example (Data Manipulation): title: "Notification string" description: "Create a notification string with a timestamp." expression: "'New message received at ' + string(document.create_time)" The exact variables and functions that may be referenced within an expression are determined by the service that evaluates it. See the service documentation for additional information. */
	export interface ExprFormProperties {

		/** Optional. Description of the expression. This is a longer text which describes the expression, e.g. when hovered over it in a UI. */
		description: FormControl<string | null | undefined>,

		/** Textual representation of an expression in Common Expression Language syntax. */
		expression: FormControl<string | null | undefined>,

		/** Optional. String indicating the location of the expression for error reporting, e.g. a file name and a position in the file. */
		location: FormControl<string | null | undefined>,

		/** Optional. Title for the expression, i.e. a short string describing its purpose. This can be used e.g. in UIs which allow to enter the expression. */
		title: FormControl<string | null | undefined>,
	}
	export function CreateExprFormGroup() {
		return new FormGroup<ExprFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			expression: new FormControl<string | null | undefined>(undefined),
			location: new FormControl<string | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
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


	/** An individual endpoint that provides a service. The service must already exist to create an endpoint. */
	export interface Endpoint {

		/** Optional. An IPv4 or IPv6 address. Service Directory rejects bad addresses like: * `8.8.8` * `8.8.8.8:53` * `test:bad:address` * `[::1]` * `[::1]:8080` Limited to 45 characters. */
		address?: string | null;

		/** Optional. Annotations for the endpoint. This data can be consumed by service clients. Restrictions: * The entire annotations dictionary may contain up to 512 characters, spread accoss all key-value pairs. Annotations that go beyond this limit are rejected * Valid annotation keys have two segments: an optional prefix and name, separated by a slash (/). The name segment is required and must be 63 characters or less, beginning and ending with an alphanumeric character ([a-z0-9A-Z]) with dashes (-), underscores (_), dots (.), and alphanumerics between. The prefix is optional. If specified, the prefix must be a DNS subdomain: a series of DNS labels separated by dots (.), not longer than 253 characters in total, followed by a slash (/) Annotations that fails to meet these requirements are rejected. Note: This field is equivalent to the `metadata` field in the v1beta1 API. They have the same syntax and read/write to the same location in Service Directory. */
		annotations?: {[id: string]: string };

		/** Immutable. The resource name for the endpoint in the format `projects/locations/namespaces/services/endpoints/*`. */
		name?: string | null;

		/** Immutable. The Google Compute Engine network (VPC) of the endpoint in the format `projects//locations/global/networks/*`. The project must be specified by project number (project id is rejected). Incorrectly formatted networks are rejected, we also check to make sure that you have the servicedirectory.networks.attach permission on the project specified. */
		network?: string | null;

		/**
		 * Optional. Service Directory rejects values outside of `[0, 65535]`.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		port?: number | null;

		/** Output only. The globally unique identifier of the endpoint in the UUID4 format. */
		uid?: string | null;
	}

	/** An individual endpoint that provides a service. The service must already exist to create an endpoint. */
	export interface EndpointFormProperties {

		/** Optional. An IPv4 or IPv6 address. Service Directory rejects bad addresses like: * `8.8.8` * `8.8.8.8:53` * `test:bad:address` * `[::1]` * `[::1]:8080` Limited to 45 characters. */
		address: FormControl<string | null | undefined>,

		/** Optional. Annotations for the endpoint. This data can be consumed by service clients. Restrictions: * The entire annotations dictionary may contain up to 512 characters, spread accoss all key-value pairs. Annotations that go beyond this limit are rejected * Valid annotation keys have two segments: an optional prefix and name, separated by a slash (/). The name segment is required and must be 63 characters or less, beginning and ending with an alphanumeric character ([a-z0-9A-Z]) with dashes (-), underscores (_), dots (.), and alphanumerics between. The prefix is optional. If specified, the prefix must be a DNS subdomain: a series of DNS labels separated by dots (.), not longer than 253 characters in total, followed by a slash (/) Annotations that fails to meet these requirements are rejected. Note: This field is equivalent to the `metadata` field in the v1beta1 API. They have the same syntax and read/write to the same location in Service Directory. */
		annotations: FormControl<{[id: string]: string } | null | undefined>,

		/** Immutable. The resource name for the endpoint in the format `projects/locations/namespaces/services/endpoints/*`. */
		name: FormControl<string | null | undefined>,

		/** Immutable. The Google Compute Engine network (VPC) of the endpoint in the format `projects//locations/global/networks/*`. The project must be specified by project number (project id is rejected). Incorrectly formatted networks are rejected, we also check to make sure that you have the servicedirectory.networks.attach permission on the project specified. */
		network: FormControl<string | null | undefined>,

		/**
		 * Optional. Service Directory rejects values outside of `[0, 65535]`.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		port: FormControl<number | null | undefined>,

		/** Output only. The globally unique identifier of the endpoint in the UUID4 format. */
		uid: FormControl<string | null | undefined>,
	}
	export function CreateEndpointFormGroup() {
		return new FormGroup<EndpointFormProperties>({
			address: new FormControl<string | null | undefined>(undefined),
			annotations: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			network: new FormControl<string | null | undefined>(undefined),
			port: new FormControl<number | null | undefined>(undefined),
			uid: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Request message for `GetIamPolicy` method. */
	export interface GetIamPolicyRequest {

		/** Encapsulates settings provided to GetIamPolicy. */
		options?: GetPolicyOptions;
	}

	/** Request message for `GetIamPolicy` method. */
	export interface GetIamPolicyRequestFormProperties {
	}
	export function CreateGetIamPolicyRequestFormGroup() {
		return new FormGroup<GetIamPolicyRequestFormProperties>({
		});

	}


	/** Encapsulates settings provided to GetIamPolicy. */
	export interface GetPolicyOptions {

		/**
		 * Optional. The maximum policy version that will be used to format the policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset. The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies).
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		requestedPolicyVersion?: number | null;
	}

	/** Encapsulates settings provided to GetIamPolicy. */
	export interface GetPolicyOptionsFormProperties {

		/**
		 * Optional. The maximum policy version that will be used to format the policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset. The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies).
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		requestedPolicyVersion: FormControl<number | null | undefined>,
	}
	export function CreateGetPolicyOptionsFormGroup() {
		return new FormGroup<GetPolicyOptionsFormProperties>({
			requestedPolicyVersion: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** The response message for RegistrationService.ListEndpoints. */
	export interface ListEndpointsResponse {

		/** The list of endpoints. */
		endpoints?: Array<Endpoint>;

		/** Token to retrieve the next page of results, or empty if there are no more results in the list. */
		nextPageToken?: string | null;
	}

	/** The response message for RegistrationService.ListEndpoints. */
	export interface ListEndpointsResponseFormProperties {

		/** Token to retrieve the next page of results, or empty if there are no more results in the list. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListEndpointsResponseFormGroup() {
		return new FormGroup<ListEndpointsResponseFormProperties>({
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


	/** The response message for RegistrationService.ListNamespaces. */
	export interface ListNamespacesResponse {

		/** The list of namespaces. */
		namespaces?: Array<Namespace>;

		/** Token to retrieve the next page of results, or empty if there are no more results in the list. */
		nextPageToken?: string | null;
	}

	/** The response message for RegistrationService.ListNamespaces. */
	export interface ListNamespacesResponseFormProperties {

		/** Token to retrieve the next page of results, or empty if there are no more results in the list. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListNamespacesResponseFormGroup() {
		return new FormGroup<ListNamespacesResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A container for services. Namespaces allow administrators to group services together and define permissions for a collection of services. */
	export interface Namespace {

		/** Optional. Resource labels associated with this namespace. No more than 64 user labels can be associated with a given resource. Label keys and values can be no longer than 63 characters. */
		labels?: {[id: string]: string };

		/** Immutable. The resource name for the namespace in the format `projects/locations/namespaces/*`. */
		name?: string | null;

		/** Output only. The globally unique identifier of the namespace in the UUID4 format. */
		uid?: string | null;
	}

	/** A container for services. Namespaces allow administrators to group services together and define permissions for a collection of services. */
	export interface NamespaceFormProperties {

		/** Optional. Resource labels associated with this namespace. No more than 64 user labels can be associated with a given resource. Label keys and values can be no longer than 63 characters. */
		labels: FormControl<{[id: string]: string } | null | undefined>,

		/** Immutable. The resource name for the namespace in the format `projects/locations/namespaces/*`. */
		name: FormControl<string | null | undefined>,

		/** Output only. The globally unique identifier of the namespace in the UUID4 format. */
		uid: FormControl<string | null | undefined>,
	}
	export function CreateNamespaceFormGroup() {
		return new FormGroup<NamespaceFormProperties>({
			labels: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			uid: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The response message for RegistrationService.ListServices. */
	export interface ListServicesResponse {

		/** Token to retrieve the next page of results, or empty if there are no more results in the list. */
		nextPageToken?: string | null;

		/** The list of services. */
		services?: Array<Service>;
	}

	/** The response message for RegistrationService.ListServices. */
	export interface ListServicesResponseFormProperties {

		/** Token to retrieve the next page of results, or empty if there are no more results in the list. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListServicesResponseFormGroup() {
		return new FormGroup<ListServicesResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An individual service. A service contains a name and optional metadata. A service must exist before endpoints can be added to it. */
	export interface Service {

		/** Optional. Annotations for the service. This data can be consumed by service clients. Restrictions: * The entire annotations dictionary may contain up to 2000 characters, spread accoss all key-value pairs. Annotations that go beyond this limit are rejected * Valid annotation keys have two segments: an optional prefix and name, separated by a slash (/). The name segment is required and must be 63 characters or less, beginning and ending with an alphanumeric character ([a-z0-9A-Z]) with dashes (-), underscores (_), dots (.), and alphanumerics between. The prefix is optional. If specified, the prefix must be a DNS subdomain: a series of DNS labels separated by dots (.), not longer than 253 characters in total, followed by a slash (/). Annotations that fails to meet these requirements are rejected Note: This field is equivalent to the `metadata` field in the v1beta1 API. They have the same syntax and read/write to the same location in Service Directory. */
		annotations?: {[id: string]: string };

		/** Output only. Endpoints associated with this service. Returned on LookupService.ResolveService. Control plane clients should use RegistrationService.ListEndpoints. */
		endpoints?: Array<Endpoint>;

		/** Immutable. The resource name for the service in the format `projects/locations/namespaces/services/*`. */
		name?: string | null;

		/** Output only. The globally unique identifier of the service in the UUID4 format. */
		uid?: string | null;
	}

	/** An individual service. A service contains a name and optional metadata. A service must exist before endpoints can be added to it. */
	export interface ServiceFormProperties {

		/** Optional. Annotations for the service. This data can be consumed by service clients. Restrictions: * The entire annotations dictionary may contain up to 2000 characters, spread accoss all key-value pairs. Annotations that go beyond this limit are rejected * Valid annotation keys have two segments: an optional prefix and name, separated by a slash (/). The name segment is required and must be 63 characters or less, beginning and ending with an alphanumeric character ([a-z0-9A-Z]) with dashes (-), underscores (_), dots (.), and alphanumerics between. The prefix is optional. If specified, the prefix must be a DNS subdomain: a series of DNS labels separated by dots (.), not longer than 253 characters in total, followed by a slash (/). Annotations that fails to meet these requirements are rejected Note: This field is equivalent to the `metadata` field in the v1beta1 API. They have the same syntax and read/write to the same location in Service Directory. */
		annotations: FormControl<{[id: string]: string } | null | undefined>,

		/** Immutable. The resource name for the service in the format `projects/locations/namespaces/services/*`. */
		name: FormControl<string | null | undefined>,

		/** Output only. The globally unique identifier of the service in the UUID4 format. */
		uid: FormControl<string | null | undefined>,
	}
	export function CreateServiceFormGroup() {
		return new FormGroup<ServiceFormProperties>({
			annotations: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			uid: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An Identity and Access Management (IAM) policy, which specifies access controls for Google Cloud resources. A `Policy` is a collection of `bindings`. A `binding` binds one or more `members`, or principals, to a single `role`. Principals can be user accounts, service accounts, Google groups, and domains (such as G Suite). A `role` is a named list of permissions; each `role` can be an IAM predefined role or a user-created custom role. For some types of Google Cloud resources, a `binding` can also specify a `condition`, which is a logical expression that allows access to a resource only if the expression evaluates to `true`. A condition can add constraints based on attributes of the request, the resource, or both. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies). **JSON example:** ``` { "bindings": [ { "role": "roles/resourcemanager.organizationAdmin", "members": [ "user:mike@example.com", "group:admins@example.com", "domain:google.com", "serviceAccount:my-project-id@appspot.gserviceaccount.com" ] }, { "role": "roles/resourcemanager.organizationViewer", "members": [ "user:eve@example.com" ], "condition": { "title": "expirable access", "description": "Does not grant access after Sep 2020", "expression": "request.time < timestamp('2020-10-01T00:00:00.000Z')", } } ], "etag": "BwWWja0YfJA=", "version": 3 } ``` **YAML example:** ``` bindings: - members: - user:mike@example.com - group:admins@example.com - domain:google.com - serviceAccount:my-project-id@appspot.gserviceaccount.com role: roles/resourcemanager.organizationAdmin - members: - user:eve@example.com role: roles/resourcemanager.organizationViewer condition: title: expirable access description: Does not grant access after Sep 2020 expression: request.time < timestamp('2020-10-01T00:00:00.000Z') etag: BwWWja0YfJA= version: 3 ``` For a description of IAM and its features, see the [IAM documentation](https://cloud.google.com/iam/docs/). */
	export interface Policy {

		/** Associates a list of `members`, or principals, with a `role`. Optionally, may specify a `condition` that determines how and when the `bindings` are applied. Each of the `bindings` must contain at least one principal. The `bindings` in a `Policy` can refer to up to 1,500 principals; up to 250 of these principals can be Google groups. Each occurrence of a principal counts towards these limits. For example, if the `bindings` grant 50 different roles to `user:alice@example.com`, and not to any other principal, then you can add another 1,450 principals to the `bindings` in the `Policy`. */
		bindings?: Array<Binding>;

		/** `etag` is used for optimistic concurrency control as a way to help prevent simultaneous updates of a policy from overwriting each other. It is strongly suggested that systems make use of the `etag` in the read-modify-write cycle to perform policy updates in order to avoid race conditions: An `etag` is returned in the response to `getIamPolicy`, and systems are expected to put that etag in the request to `setIamPolicy` to ensure that their change will be applied to the same version of the policy. **Important:** If you use IAM Conditions, you must include the `etag` field whenever you call `setIamPolicy`. If you omit this field, then IAM allows you to overwrite a version `3` policy with a version `1` policy, and all of the conditions in the version `3` policy are lost. */
		etag?: string | null;

		/**
		 * Specifies the format of the policy. Valid values are `0`, `1`, and `3`. Requests that specify an invalid value are rejected. Any operation that affects conditional role bindings must specify version `3`. This requirement applies to the following operations: * Getting a policy that includes a conditional role binding * Adding a conditional role binding to a policy * Changing a conditional role binding in a policy * Removing any role binding, with or without a condition, from a policy that includes conditions **Important:** If you use IAM Conditions, you must include the `etag` field whenever you call `setIamPolicy`. If you omit this field, then IAM allows you to overwrite a version `3` policy with a version `1` policy, and all of the conditions in the version `3` policy are lost. If a policy does not include any conditions, operations on that policy may specify any valid version or leave the field unset. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies).
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		version?: number | null;
	}

	/** An Identity and Access Management (IAM) policy, which specifies access controls for Google Cloud resources. A `Policy` is a collection of `bindings`. A `binding` binds one or more `members`, or principals, to a single `role`. Principals can be user accounts, service accounts, Google groups, and domains (such as G Suite). A `role` is a named list of permissions; each `role` can be an IAM predefined role or a user-created custom role. For some types of Google Cloud resources, a `binding` can also specify a `condition`, which is a logical expression that allows access to a resource only if the expression evaluates to `true`. A condition can add constraints based on attributes of the request, the resource, or both. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies). **JSON example:** ``` { "bindings": [ { "role": "roles/resourcemanager.organizationAdmin", "members": [ "user:mike@example.com", "group:admins@example.com", "domain:google.com", "serviceAccount:my-project-id@appspot.gserviceaccount.com" ] }, { "role": "roles/resourcemanager.organizationViewer", "members": [ "user:eve@example.com" ], "condition": { "title": "expirable access", "description": "Does not grant access after Sep 2020", "expression": "request.time < timestamp('2020-10-01T00:00:00.000Z')", } } ], "etag": "BwWWja0YfJA=", "version": 3 } ``` **YAML example:** ``` bindings: - members: - user:mike@example.com - group:admins@example.com - domain:google.com - serviceAccount:my-project-id@appspot.gserviceaccount.com role: roles/resourcemanager.organizationAdmin - members: - user:eve@example.com role: roles/resourcemanager.organizationViewer condition: title: expirable access description: Does not grant access after Sep 2020 expression: request.time < timestamp('2020-10-01T00:00:00.000Z') etag: BwWWja0YfJA= version: 3 ``` For a description of IAM and its features, see the [IAM documentation](https://cloud.google.com/iam/docs/). */
	export interface PolicyFormProperties {

		/** `etag` is used for optimistic concurrency control as a way to help prevent simultaneous updates of a policy from overwriting each other. It is strongly suggested that systems make use of the `etag` in the read-modify-write cycle to perform policy updates in order to avoid race conditions: An `etag` is returned in the response to `getIamPolicy`, and systems are expected to put that etag in the request to `setIamPolicy` to ensure that their change will be applied to the same version of the policy. **Important:** If you use IAM Conditions, you must include the `etag` field whenever you call `setIamPolicy`. If you omit this field, then IAM allows you to overwrite a version `3` policy with a version `1` policy, and all of the conditions in the version `3` policy are lost. */
		etag: FormControl<string | null | undefined>,

		/**
		 * Specifies the format of the policy. Valid values are `0`, `1`, and `3`. Requests that specify an invalid value are rejected. Any operation that affects conditional role bindings must specify version `3`. This requirement applies to the following operations: * Getting a policy that includes a conditional role binding * Adding a conditional role binding to a policy * Changing a conditional role binding in a policy * Removing any role binding, with or without a condition, from a policy that includes conditions **Important:** If you use IAM Conditions, you must include the `etag` field whenever you call `setIamPolicy`. If you omit this field, then IAM allows you to overwrite a version `3` policy with a version `1` policy, and all of the conditions in the version `3` policy are lost. If a policy does not include any conditions, operations on that policy may specify any valid version or leave the field unset. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies).
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		version: FormControl<number | null | undefined>,
	}
	export function CreatePolicyFormGroup() {
		return new FormGroup<PolicyFormProperties>({
			etag: new FormControl<string | null | undefined>(undefined),
			version: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** The request message for LookupService.ResolveService. Looks up a service by its name, returns the service and its endpoints. */
	export interface ResolveServiceRequest {

		/** Optional. The filter applied to the endpoints of the resolved service. General `filter` string syntax: ` ()` * `` can be `name`, `address`, `port`, or `annotations.` for map field * `` can be `<`, `>`, `<=`, `>=`, `!=`, `=`, `:`. Of which `:` means `HAS`, and is roughly the same as `=` * `` must be the same data type as field * `` can be `AND`, `OR`, `NOT` Examples of valid filters: * `annotations.owner` returns endpoints that have a annotation with the key `owner`, this is the same as `annotations:owner` * `annotations.protocol=gRPC` returns endpoints that have key/value `protocol=gRPC` * `address=192.108.1.105` returns endpoints that have this address * `port>8080` returns endpoints that have port number larger than 8080 * `name>projects/my-project/locations/us-east1/namespaces/my-namespace/services/my-service/endpoints/endpoint-c` returns endpoints that have name that is alphabetically later than the string, so "endpoint-e" is returned but "endpoint-a" is not * `name=projects/my-project/locations/us-central1/namespaces/my-namespace/services/my-service/endpoints/ep-1` returns the endpoint that has an endpoint_id equal to `ep-1` * `annotations.owner!=sd AND annotations.foo=bar` returns endpoints that have `owner` in annotation key but value is not `sd` AND have key/value `foo=bar` * `doesnotexist.foo=bar` returns an empty list. Note that endpoint doesn't have a field called "doesnotexist". Since the filter does not match any endpoint, it returns no results For more information about filtering, see [API Filtering](https://aip.dev/160). */
		endpointFilter?: string | null;

		/**
		 * Optional. The maximum number of endpoints to return. Defaults to 25. Maximum is 100. If a value less than one is specified, the Default is used. If a value greater than the Maximum is specified, the Maximum is used.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		maxEndpoints?: number | null;
	}

	/** The request message for LookupService.ResolveService. Looks up a service by its name, returns the service and its endpoints. */
	export interface ResolveServiceRequestFormProperties {

		/** Optional. The filter applied to the endpoints of the resolved service. General `filter` string syntax: ` ()` * `` can be `name`, `address`, `port`, or `annotations.` for map field * `` can be `<`, `>`, `<=`, `>=`, `!=`, `=`, `:`. Of which `:` means `HAS`, and is roughly the same as `=` * `` must be the same data type as field * `` can be `AND`, `OR`, `NOT` Examples of valid filters: * `annotations.owner` returns endpoints that have a annotation with the key `owner`, this is the same as `annotations:owner` * `annotations.protocol=gRPC` returns endpoints that have key/value `protocol=gRPC` * `address=192.108.1.105` returns endpoints that have this address * `port>8080` returns endpoints that have port number larger than 8080 * `name>projects/my-project/locations/us-east1/namespaces/my-namespace/services/my-service/endpoints/endpoint-c` returns endpoints that have name that is alphabetically later than the string, so "endpoint-e" is returned but "endpoint-a" is not * `name=projects/my-project/locations/us-central1/namespaces/my-namespace/services/my-service/endpoints/ep-1` returns the endpoint that has an endpoint_id equal to `ep-1` * `annotations.owner!=sd AND annotations.foo=bar` returns endpoints that have `owner` in annotation key but value is not `sd` AND have key/value `foo=bar` * `doesnotexist.foo=bar` returns an empty list. Note that endpoint doesn't have a field called "doesnotexist". Since the filter does not match any endpoint, it returns no results For more information about filtering, see [API Filtering](https://aip.dev/160). */
		endpointFilter: FormControl<string | null | undefined>,

		/**
		 * Optional. The maximum number of endpoints to return. Defaults to 25. Maximum is 100. If a value less than one is specified, the Default is used. If a value greater than the Maximum is specified, the Maximum is used.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		maxEndpoints: FormControl<number | null | undefined>,
	}
	export function CreateResolveServiceRequestFormGroup() {
		return new FormGroup<ResolveServiceRequestFormProperties>({
			endpointFilter: new FormControl<string | null | undefined>(undefined),
			maxEndpoints: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** The response message for LookupService.ResolveService. */
	export interface ResolveServiceResponse {

		/** An individual service. A service contains a name and optional metadata. A service must exist before endpoints can be added to it. */
		service?: Service;
	}

	/** The response message for LookupService.ResolveService. */
	export interface ResolveServiceResponseFormProperties {
	}
	export function CreateResolveServiceResponseFormGroup() {
		return new FormGroup<ResolveServiceResponseFormProperties>({
		});

	}


	/** Request message for `SetIamPolicy` method. */
	export interface SetIamPolicyRequest {

		/** An Identity and Access Management (IAM) policy, which specifies access controls for Google Cloud resources. A `Policy` is a collection of `bindings`. A `binding` binds one or more `members`, or principals, to a single `role`. Principals can be user accounts, service accounts, Google groups, and domains (such as G Suite). A `role` is a named list of permissions; each `role` can be an IAM predefined role or a user-created custom role. For some types of Google Cloud resources, a `binding` can also specify a `condition`, which is a logical expression that allows access to a resource only if the expression evaluates to `true`. A condition can add constraints based on attributes of the request, the resource, or both. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies). **JSON example:** ``` { "bindings": [ { "role": "roles/resourcemanager.organizationAdmin", "members": [ "user:mike@example.com", "group:admins@example.com", "domain:google.com", "serviceAccount:my-project-id@appspot.gserviceaccount.com" ] }, { "role": "roles/resourcemanager.organizationViewer", "members": [ "user:eve@example.com" ], "condition": { "title": "expirable access", "description": "Does not grant access after Sep 2020", "expression": "request.time < timestamp('2020-10-01T00:00:00.000Z')", } } ], "etag": "BwWWja0YfJA=", "version": 3 } ``` **YAML example:** ``` bindings: - members: - user:mike@example.com - group:admins@example.com - domain:google.com - serviceAccount:my-project-id@appspot.gserviceaccount.com role: roles/resourcemanager.organizationAdmin - members: - user:eve@example.com role: roles/resourcemanager.organizationViewer condition: title: expirable access description: Does not grant access after Sep 2020 expression: request.time < timestamp('2020-10-01T00:00:00.000Z') etag: BwWWja0YfJA= version: 3 ``` For a description of IAM and its features, see the [IAM documentation](https://cloud.google.com/iam/docs/). */
		policy?: Policy;
	}

	/** Request message for `SetIamPolicy` method. */
	export interface SetIamPolicyRequestFormProperties {
	}
	export function CreateSetIamPolicyRequestFormGroup() {
		return new FormGroup<SetIamPolicyRequestFormProperties>({
		});

	}


	/** Request message for `TestIamPermissions` method. */
	export interface TestIamPermissionsRequest {

		/** The set of permissions to check for the `resource`. Permissions with wildcards (such as `*` or `storage.*`) are not allowed. For more information see [IAM Overview](https://cloud.google.com/iam/docs/overview#permissions). */
		permissions?: Array<string>;
	}

	/** Request message for `TestIamPermissions` method. */
	export interface TestIamPermissionsRequestFormProperties {
	}
	export function CreateTestIamPermissionsRequestFormGroup() {
		return new FormGroup<TestIamPermissionsRequestFormProperties>({
		});

	}


	/** Response message for `TestIamPermissions` method. */
	export interface TestIamPermissionsResponse {

		/** A subset of `TestPermissionsRequest.permissions` that the caller is allowed. */
		permissions?: Array<string>;
	}

	/** Response message for `TestIamPermissions` method. */
	export interface TestIamPermissionsResponseFormProperties {
	}
	export function CreateTestIamPermissionsResponseFormGroup() {
		return new FormGroup<TestIamPermissionsResponseFormProperties>({
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Deletes an endpoint.
		 * Delete v1/{name}
		 * @param {string} name Required. The name of the endpoint to delete.
		 * @return {Empty} Successful response
		 */
		Servicedirectory_projects_locations_namespaces_services_endpoints_delete(name: string): Observable<Empty> {
			return this.http.delete<Empty>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)), {});
		}

		/**
		 * Gets an endpoint.
		 * Get v1/{name}
		 * @param {string} name Required. The name of the endpoint to get.
		 * @return {Endpoint} Successful response
		 */
		Servicedirectory_projects_locations_namespaces_services_endpoints_get(name: string): Observable<Endpoint> {
			return this.http.get<Endpoint>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)), {});
		}

		/**
		 * Updates an endpoint.
		 * Patch v1/{name}
		 * @param {string} name Immutable. The resource name for the endpoint in the format `projects/locations/namespaces/services/endpoints/*`.
		 * @param {string} updateMask Required. List of fields to be updated in this request.
		 * @return {Endpoint} Successful response
		 */
		Servicedirectory_projects_locations_namespaces_services_endpoints_patch(name: string, updateMask: string | null | undefined, requestBody: Endpoint): Observable<Endpoint> {
			return this.http.patch<Endpoint>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + '&updateMask=' + (updateMask == null ? '' : encodeURIComponent(updateMask)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists information about the supported locations for this service.
		 * Get v1/{name}/locations
		 * @param {string} name The resource that owns the locations collection, if applicable.
		 * @param {string} filter A filter to narrow down results to a preferred subset. The filtering language accepts strings like `"displayName=tokyo"`, and is documented in more detail in [AIP-160](https://google.aip.dev/160).
		 * @param {number} pageSize The maximum number of results to return. If not set, the service selects a default.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} pageToken A page token received from the `next_page_token` field in the response. Send that page token to receive the subsequent page.
		 * @return {ListLocationsResponse} Successful response
		 */
		Servicedirectory_projects_locations_list(name: string, filter: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListLocationsResponse> {
			return this.http.get<ListLocationsResponse>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + '/locations&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Returns a service and its associated endpoints. Resolving a service is not considered an active developer method.
		 * Post v1/{name}:resolve
		 * @param {string} name Required. The name of the service to resolve.
		 * @return {ResolveServiceResponse} Successful response
		 */
		Servicedirectory_projects_locations_namespaces_services_resolve(name: string, requestBody: ResolveServiceRequest): Observable<ResolveServiceResponse> {
			return this.http.post<ResolveServiceResponse>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + ':resolve', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists all endpoints.
		 * Get v1/{parent}/endpoints
		 * @param {string} parent Required. The resource name of the service whose endpoints you'd like to list.
		 * @param {string} filter Optional. The filter to list results by. General `filter` string syntax: ` ()` * `` can be `name`, `address`, `port`, or `annotations.` for map field * `` can be `<`, `>`, `<=`, `>=`, `!=`, `=`, `:`. Of which `:` means `HAS`, and is roughly the same as `=` * `` must be the same data type as field * `` can be `AND`, `OR`, `NOT` Examples of valid filters: * `annotations.owner` returns endpoints that have a annotation with the key `owner`, this is the same as `annotations:owner` * `annotations.protocol=gRPC` returns endpoints that have key/value `protocol=gRPC` * `address=192.108.1.105` returns endpoints that have this address * `port>8080` returns endpoints that have port number larger than 8080 * `name>projects/my-project/locations/us-east1/namespaces/my-namespace/services/my-service/endpoints/endpoint-c` returns endpoints that have name that is alphabetically later than the string, so "endpoint-e" is returned but "endpoint-a" is not * `annotations.owner!=sd AND annotations.foo=bar` returns endpoints that have `owner` in annotation key but value is not `sd` AND have key/value `foo=bar` * `doesnotexist.foo=bar` returns an empty list. Note that endpoint doesn't have a field called "doesnotexist". Since the filter does not match any endpoints, it returns no results For more information about filtering, see [API Filtering](https://aip.dev/160).
		 * @param {string} orderBy Optional. The order to list results by. General `order_by` string syntax: ` () (,)` * `` allows values: `name`, `address`, `port` * `` ascending or descending order by ``. If this is left blank, `asc` is used Note that an empty `order_by` string results in default order, which is order by `name` in ascending order.
		 * @param {number} pageSize Optional. The maximum number of items to return.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} pageToken Optional. The next_page_token value returned from a previous List request, if any.
		 * @return {ListEndpointsResponse} Successful response
		 */
		Servicedirectory_projects_locations_namespaces_services_endpoints_list(parent: string, filter: string | null | undefined, orderBy: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListEndpointsResponse> {
			return this.http.get<ListEndpointsResponse>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/endpoints&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&orderBy=' + (orderBy == null ? '' : encodeURIComponent(orderBy)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Creates an endpoint, and returns the new endpoint.
		 * Post v1/{parent}/endpoints
		 * @param {string} parent Required. The resource name of the service that this endpoint provides.
		 * @param {string} endpointId Required. The Resource ID must be 1-63 characters long, and comply with RFC1035. Specifically, the name must be 1-63 characters long and match the regular expression `[a-z](?:[-a-z0-9]{0,61}[a-z0-9])?` which means the first character must be a lowercase letter, and all following characters must be a dash, lowercase letter, or digit, except the last character, which cannot be a dash.
		 * @return {Endpoint} Successful response
		 */
		Servicedirectory_projects_locations_namespaces_services_endpoints_create(parent: string, endpointId: string | null | undefined, requestBody: Endpoint): Observable<Endpoint> {
			return this.http.post<Endpoint>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/endpoints&endpointId=' + (endpointId == null ? '' : encodeURIComponent(endpointId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists all namespaces.
		 * Get v1/{parent}/namespaces
		 * @param {string} parent Required. The resource name of the project and location whose namespaces you'd like to list.
		 * @param {string} filter Optional. The filter to list results by. General `filter` string syntax: ` ()` * `` can be `name` or `labels.` for map field * `` can be `<`, `>`, `<=`, `>=`, `!=`, `=`, `:`. Of which `:` means `HAS`, and is roughly the same as `=` * `` must be the same data type as field * `` can be `AND`, `OR`, `NOT` Examples of valid filters: * `labels.owner` returns namespaces that have a label with the key `owner`, this is the same as `labels:owner` * `labels.owner=sd` returns namespaces that have key/value `owner=sd` * `name>projects/my-project/locations/us-east1/namespaces/namespace-c` returns namespaces that have name that is alphabetically later than the string, so "namespace-e" is returned but "namespace-a" is not * `labels.owner!=sd AND labels.foo=bar` returns namespaces that have `owner` in label key but value is not `sd` AND have key/value `foo=bar` * `doesnotexist.foo=bar` returns an empty list. Note that namespace doesn't have a field called "doesnotexist". Since the filter does not match any namespaces, it returns no results For more information about filtering, see [API Filtering](https://aip.dev/160).
		 * @param {string} orderBy Optional. The order to list results by. General `order_by` string syntax: ` () (,)` * `` allows value: `name` * `` ascending or descending order by ``. If this is left blank, `asc` is used Note that an empty `order_by` string results in default order, which is order by `name` in ascending order.
		 * @param {number} pageSize Optional. The maximum number of items to return.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} pageToken Optional. The next_page_token value returned from a previous List request, if any.
		 * @return {ListNamespacesResponse} Successful response
		 */
		Servicedirectory_projects_locations_namespaces_list(parent: string, filter: string | null | undefined, orderBy: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListNamespacesResponse> {
			return this.http.get<ListNamespacesResponse>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/namespaces&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&orderBy=' + (orderBy == null ? '' : encodeURIComponent(orderBy)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Creates a namespace, and returns the new namespace.
		 * Post v1/{parent}/namespaces
		 * @param {string} parent Required. The resource name of the project and location the namespace will be created in.
		 * @param {string} namespaceId Required. The Resource ID must be 1-63 characters long, and comply with RFC1035. Specifically, the name must be 1-63 characters long and match the regular expression `[a-z](?:[-a-z0-9]{0,61}[a-z0-9])?` which means the first character must be a lowercase letter, and all following characters must be a dash, lowercase letter, or digit, except the last character, which cannot be a dash.
		 * @return {Namespace} Successful response
		 */
		Servicedirectory_projects_locations_namespaces_create(parent: string, namespaceId: string | null | undefined, requestBody: Namespace): Observable<Namespace> {
			return this.http.post<Namespace>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/namespaces&namespaceId=' + (namespaceId == null ? '' : encodeURIComponent(namespaceId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists all services belonging to a namespace.
		 * Get v1/{parent}/services
		 * @param {string} parent Required. The resource name of the namespace whose services you'd like to list.
		 * @param {string} filter Optional. The filter to list results by. General `filter` string syntax: ` ()` * `` can be `name` or `annotations.` for map field * `` can be `<`, `>`, `<=`, `>=`, `!=`, `=`, `:`. Of which `:` means `HAS`, and is roughly the same as `=` * `` must be the same data type as field * `` can be `AND`, `OR`, `NOT` Examples of valid filters: * `annotations.owner` returns services that have a annotation with the key `owner`, this is the same as `annotations:owner` * `annotations.protocol=gRPC` returns services that have key/value `protocol=gRPC` * `name>projects/my-project/locations/us-east1/namespaces/my-namespace/services/service-c` returns services that have name that is alphabetically later than the string, so "service-e" is returned but "service-a" is not * `annotations.owner!=sd AND annotations.foo=bar` returns services that have `owner` in annotation key but value is not `sd` AND have key/value `foo=bar` * `doesnotexist.foo=bar` returns an empty list. Note that service doesn't have a field called "doesnotexist". Since the filter does not match any services, it returns no results For more information about filtering, see [API Filtering](https://aip.dev/160).
		 * @param {string} orderBy Optional. The order to list results by. General `order_by` string syntax: ` () (,)` * `` allows value: `name` * `` ascending or descending order by ``. If this is left blank, `asc` is used Note that an empty `order_by` string results in default order, which is order by `name` in ascending order.
		 * @param {number} pageSize Optional. The maximum number of items to return.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} pageToken Optional. The next_page_token value returned from a previous List request, if any.
		 * @return {ListServicesResponse} Successful response
		 */
		Servicedirectory_projects_locations_namespaces_services_list(parent: string, filter: string | null | undefined, orderBy: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListServicesResponse> {
			return this.http.get<ListServicesResponse>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/services&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&orderBy=' + (orderBy == null ? '' : encodeURIComponent(orderBy)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Creates a service, and returns the new service.
		 * Post v1/{parent}/services
		 * @param {string} parent Required. The resource name of the namespace this service will belong to.
		 * @param {string} serviceId Required. The Resource ID must be 1-63 characters long, and comply with RFC1035. Specifically, the name must be 1-63 characters long and match the regular expression `[a-z](?:[-a-z0-9]{0,61}[a-z0-9])?` which means the first character must be a lowercase letter, and all following characters must be a dash, lowercase letter, or digit, except the last character, which cannot be a dash.
		 * @return {Service} Successful response
		 */
		Servicedirectory_projects_locations_namespaces_services_create(parent: string, serviceId: string | null | undefined, requestBody: Service): Observable<Service> {
			return this.http.post<Service>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/services&serviceId=' + (serviceId == null ? '' : encodeURIComponent(serviceId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets the IAM Policy for a resource (namespace or service only).
		 * Post v1/{resource}:getIamPolicy
		 * @param {string} resource REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
		 * @return {Policy} Successful response
		 */
		Servicedirectory_projects_locations_namespaces_services_getIamPolicy(resource: string, requestBody: GetIamPolicyRequest): Observable<Policy> {
			return this.http.post<Policy>(this.baseUri + 'v1/' + (resource == null ? '' : encodeURIComponent(resource)) + ':getIamPolicy', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Sets the IAM Policy for a resource (namespace or service only).
		 * Post v1/{resource}:setIamPolicy
		 * @param {string} resource REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
		 * @return {Policy} Successful response
		 */
		Servicedirectory_projects_locations_namespaces_services_setIamPolicy(resource: string, requestBody: SetIamPolicyRequest): Observable<Policy> {
			return this.http.post<Policy>(this.baseUri + 'v1/' + (resource == null ? '' : encodeURIComponent(resource)) + ':setIamPolicy', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Tests IAM permissions for a resource (namespace or service only).
		 * Post v1/{resource}:testIamPermissions
		 * @param {string} resource REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
		 * @return {TestIamPermissionsResponse} Successful response
		 */
		Servicedirectory_projects_locations_namespaces_services_testIamPermissions(resource: string, requestBody: TestIamPermissionsRequest): Observable<TestIamPermissionsResponse> {
			return this.http.post<TestIamPermissionsResponse>(this.baseUri + 'v1/' + (resource == null ? '' : encodeURIComponent(resource)) + ':testIamPermissions', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

}

