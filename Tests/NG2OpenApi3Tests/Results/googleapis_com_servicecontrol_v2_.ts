import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** This message defines attributes associated with API operations, such as a network API request. The terminology is based on the conventions used by Google APIs, Istio, and OpenAPI. */
	export interface Api {

		/** The API operation name. For gRPC requests, it is the fully qualified API method name, such as "google.pubsub.v1.Publisher.Publish". For OpenAPI requests, it is the `operationId`, such as "getPet". */
		operation?: string | null;

		/** The API protocol used for sending the request, such as "http", "https", "grpc", or "internal". */
		protocol?: string | null;

		/** The API service name. It is a logical identifier for a networked API, such as "pubsub.googleapis.com". The naming syntax depends on the API management system being used for handling the request. */
		service?: string | null;

		/** The API version associated with the API operation above, such as "v1" or "v1alpha1". */
		version?: string | null;
	}

	/** This message defines attributes associated with API operations, such as a network API request. The terminology is based on the conventions used by Google APIs, Istio, and OpenAPI. */
	export interface ApiFormProperties {

		/** The API operation name. For gRPC requests, it is the fully qualified API method name, such as "google.pubsub.v1.Publisher.Publish". For OpenAPI requests, it is the `operationId`, such as "getPet". */
		operation: FormControl<string | null | undefined>,

		/** The API protocol used for sending the request, such as "http", "https", "grpc", or "internal". */
		protocol: FormControl<string | null | undefined>,

		/** The API service name. It is a logical identifier for a networked API, such as "pubsub.googleapis.com". The naming syntax depends on the API management system being used for handling the request. */
		service: FormControl<string | null | undefined>,

		/** The API version associated with the API operation above, such as "v1" or "v1alpha1". */
		version: FormControl<string | null | undefined>,
	}
	export function CreateApiFormGroup() {
		return new FormGroup<ApiFormProperties>({
			operation: new FormControl<string | null | undefined>(undefined),
			protocol: new FormControl<string | null | undefined>(undefined),
			service: new FormControl<string | null | undefined>(undefined),
			version: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** This message defines the standard attribute vocabulary for Google APIs. An attribute is a piece of metadata that describes an activity on a network service. For example, the size of an HTTP request, or the status code of an HTTP response. Each attribute has a type and a name, which is logically defined as a proto message field in `AttributeContext`. The field type becomes the attribute type, and the field path becomes the attribute name. For example, the attribute `source.ip` maps to field `AttributeContext.source.ip`. This message definition is guaranteed not to have any wire breaking change. So you can use it directly for passing attributes across different systems. NOTE: Different system may generate different subset of attributes. Please verify the system specification before relying on an attribute generated a system. */
	export interface AttributeContext {

		/** This message defines attributes associated with API operations, such as a network API request. The terminology is based on the conventions used by Google APIs, Istio, and OpenAPI. */
		api?: Api;

		/** This message defines attributes for a node that handles a network request. The node can be either a service or an application that sends, forwards, or receives the request. Service peers should fill in `principal` and `labels` as appropriate. */
		destination?: Peer;

		/** Supports extensions for advanced use cases, such as logs and metrics. */
		extensions?: Array<string>;

		/** This message defines attributes for a node that handles a network request. The node can be either a service or an application that sends, forwards, or receives the request. Service peers should fill in `principal` and `labels` as appropriate. */
		origin?: Peer;

		/** This message defines attributes for an HTTP request. If the actual request is not an HTTP request, the runtime system should try to map the actual request to an equivalent HTTP request. */
		request?: Request;

		/** This message defines core attributes for a resource. A resource is an addressable (named) entity provided by the destination service. For example, a file stored on a network storage service. */
		resource?: Resource;

		/** This message defines attributes for a typical network response. It generally models semantics of an HTTP response. */
		response?: Response;

		/** This message defines attributes for a node that handles a network request. The node can be either a service or an application that sends, forwards, or receives the request. Service peers should fill in `principal` and `labels` as appropriate. */
		source?: Peer;
	}

	/** This message defines the standard attribute vocabulary for Google APIs. An attribute is a piece of metadata that describes an activity on a network service. For example, the size of an HTTP request, or the status code of an HTTP response. Each attribute has a type and a name, which is logically defined as a proto message field in `AttributeContext`. The field type becomes the attribute type, and the field path becomes the attribute name. For example, the attribute `source.ip` maps to field `AttributeContext.source.ip`. This message definition is guaranteed not to have any wire breaking change. So you can use it directly for passing attributes across different systems. NOTE: Different system may generate different subset of attributes. Please verify the system specification before relying on an attribute generated a system. */
	export interface AttributeContextFormProperties {
	}
	export function CreateAttributeContextFormGroup() {
		return new FormGroup<AttributeContextFormProperties>({
		});

	}


	/** This message defines attributes for a node that handles a network request. The node can be either a service or an application that sends, forwards, or receives the request. Service peers should fill in `principal` and `labels` as appropriate. */
	export interface Peer {

		/** The IP address of the peer. */
		ip?: string | null;

		/** The labels associated with the peer. */
		labels?: {[id: string]: string };

		/** The network port of the peer. */
		port?: string | null;

		/** The identity of this peer. Similar to `Request.auth.principal`, but relative to the peer instead of the request. For example, the identity associated with a load balancer that forwarded the request. */
		principal?: string | null;

		/** The CLDR country/region code associated with the above IP address. If the IP address is private, the `region_code` should reflect the physical location where this peer is running. */
		regionCode?: string | null;
	}

	/** This message defines attributes for a node that handles a network request. The node can be either a service or an application that sends, forwards, or receives the request. Service peers should fill in `principal` and `labels` as appropriate. */
	export interface PeerFormProperties {

		/** The IP address of the peer. */
		ip: FormControl<string | null | undefined>,

		/** The labels associated with the peer. */
		labels: FormControl<{[id: string]: string } | null | undefined>,

		/** The network port of the peer. */
		port: FormControl<string | null | undefined>,

		/** The identity of this peer. Similar to `Request.auth.principal`, but relative to the peer instead of the request. For example, the identity associated with a load balancer that forwarded the request. */
		principal: FormControl<string | null | undefined>,

		/** The CLDR country/region code associated with the above IP address. If the IP address is private, the `region_code` should reflect the physical location where this peer is running. */
		regionCode: FormControl<string | null | undefined>,
	}
	export function CreatePeerFormGroup() {
		return new FormGroup<PeerFormProperties>({
			ip: new FormControl<string | null | undefined>(undefined),
			labels: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			port: new FormControl<string | null | undefined>(undefined),
			principal: new FormControl<string | null | undefined>(undefined),
			regionCode: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** This message defines attributes for an HTTP request. If the actual request is not an HTTP request, the runtime system should try to map the actual request to an equivalent HTTP request. */
	export interface Request {

		/** This message defines request authentication attributes. Terminology is based on the JSON Web Token (JWT) standard, but the terms also correlate to concepts in other standards. */
		auth?: Auth;

		/** The HTTP request headers. If multiple headers share the same key, they must be merged according to the HTTP spec. All header keys must be lowercased, because HTTP header keys are case-insensitive. */
		headers?: {[id: string]: string };

		/** The HTTP request `Host` header value. */
		host?: string | null;

		/** The unique ID for a request, which can be propagated to downstream systems. The ID should have low probability of collision within a single day for a specific service. */
		id?: string | null;

		/** The HTTP request method, such as `GET`, `POST`. */
		method?: string | null;

		/** The HTTP URL path, excluding the query parameters. */
		path?: string | null;

		/** The network protocol used with the request, such as "http/1.1", "spdy/3", "h2", "h2c", "webrtc", "tcp", "udp", "quic". See https://www.iana.org/assignments/tls-extensiontype-values/tls-extensiontype-values.xhtml#alpn-protocol-ids for details. */
		protocol?: string | null;

		/** The HTTP URL query in the format of `name1=value1&name2=value2`, as it appears in the first line of the HTTP request. No decoding is performed. */
		query?: string | null;

		/** A special parameter for request reason. It is used by security systems to associate auditing information with a request. */
		reason?: string | null;

		/** The HTTP URL scheme, such as `http` and `https`. */
		scheme?: string | null;

		/** The HTTP request size in bytes. If unknown, it must be -1. */
		size?: string | null;

		/** The timestamp when the `destination` service receives the last byte of the request. */
		time?: string | null;
	}

	/** This message defines attributes for an HTTP request. If the actual request is not an HTTP request, the runtime system should try to map the actual request to an equivalent HTTP request. */
	export interface RequestFormProperties {

		/** The HTTP request headers. If multiple headers share the same key, they must be merged according to the HTTP spec. All header keys must be lowercased, because HTTP header keys are case-insensitive. */
		headers: FormControl<{[id: string]: string } | null | undefined>,

		/** The HTTP request `Host` header value. */
		host: FormControl<string | null | undefined>,

		/** The unique ID for a request, which can be propagated to downstream systems. The ID should have low probability of collision within a single day for a specific service. */
		id: FormControl<string | null | undefined>,

		/** The HTTP request method, such as `GET`, `POST`. */
		method: FormControl<string | null | undefined>,

		/** The HTTP URL path, excluding the query parameters. */
		path: FormControl<string | null | undefined>,

		/** The network protocol used with the request, such as "http/1.1", "spdy/3", "h2", "h2c", "webrtc", "tcp", "udp", "quic". See https://www.iana.org/assignments/tls-extensiontype-values/tls-extensiontype-values.xhtml#alpn-protocol-ids for details. */
		protocol: FormControl<string | null | undefined>,

		/** The HTTP URL query in the format of `name1=value1&name2=value2`, as it appears in the first line of the HTTP request. No decoding is performed. */
		query: FormControl<string | null | undefined>,

		/** A special parameter for request reason. It is used by security systems to associate auditing information with a request. */
		reason: FormControl<string | null | undefined>,

		/** The HTTP URL scheme, such as `http` and `https`. */
		scheme: FormControl<string | null | undefined>,

		/** The HTTP request size in bytes. If unknown, it must be -1. */
		size: FormControl<string | null | undefined>,

		/** The timestamp when the `destination` service receives the last byte of the request. */
		time: FormControl<string | null | undefined>,
	}
	export function CreateRequestFormGroup() {
		return new FormGroup<RequestFormProperties>({
			headers: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			host: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			method: new FormControl<string | null | undefined>(undefined),
			path: new FormControl<string | null | undefined>(undefined),
			protocol: new FormControl<string | null | undefined>(undefined),
			query: new FormControl<string | null | undefined>(undefined),
			reason: new FormControl<string | null | undefined>(undefined),
			scheme: new FormControl<string | null | undefined>(undefined),
			size: new FormControl<string | null | undefined>(undefined),
			time: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** This message defines request authentication attributes. Terminology is based on the JSON Web Token (JWT) standard, but the terms also correlate to concepts in other standards. */
	export interface Auth {

		/** A list of access level resource names that allow resources to be accessed by authenticated requester. It is part of Secure GCP processing for the incoming request. An access level string has the format: "//{api_service_name}/accessPolicies/{policy_id}/accessLevels/{short_name}" Example: "//accesscontextmanager.googleapis.com/accessPolicies/MY_POLICY_ID/accessLevels/MY_LEVEL" */
		accessLevels?: Array<string>;

		/** The intended audience(s) for this authentication information. Reflects the audience (`aud`) claim within a JWT. The audience value(s) depends on the `issuer`, but typically include one or more of the following pieces of information: * The services intended to receive the credential. For example, ["https://pubsub.googleapis.com/", "https://storage.googleapis.com/"]. * A set of service-based scopes. For example, ["https://www.googleapis.com/auth/cloud-platform"]. * The client id of an app, such as the Firebase project id for JWTs from Firebase Auth. Consult the documentation for the credential issuer to determine the information provided. */
		audiences?: Array<string>;

		/** Structured claims presented with the credential. JWTs include `{key: value}` pairs for standard and private claims. The following is a subset of the standard required and optional claims that would typically be presented for a Google-based JWT: {'iss': 'accounts.google.com', 'sub': '113289723416554971153', 'aud': ['123456789012', 'pubsub.googleapis.com'], 'azp': '123456789012.apps.googleusercontent.com', 'email': 'jsmith@example.com', 'iat': 1353601026, 'exp': 1353604926} SAML assertions are similarly specified, but with an identity provider dependent structure. */
		claims?: {[id: string]: any };

		/** The authorized presenter of the credential. Reflects the optional Authorized Presenter (`azp`) claim within a JWT or the OAuth client id. For example, a Google Cloud Platform client id looks as follows: "123456789012.apps.googleusercontent.com". */
		presenter?: string | null;

		/** The authenticated principal. Reflects the issuer (`iss`) and subject (`sub`) claims within a JWT. The issuer and subject should be `/` delimited, with `/` percent-encoded within the subject fragment. For Google accounts, the principal format is: "https://accounts.google.com/{id}" */
		principal?: string | null;
	}

	/** This message defines request authentication attributes. Terminology is based on the JSON Web Token (JWT) standard, but the terms also correlate to concepts in other standards. */
	export interface AuthFormProperties {

		/** Structured claims presented with the credential. JWTs include `{key: value}` pairs for standard and private claims. The following is a subset of the standard required and optional claims that would typically be presented for a Google-based JWT: {'iss': 'accounts.google.com', 'sub': '113289723416554971153', 'aud': ['123456789012', 'pubsub.googleapis.com'], 'azp': '123456789012.apps.googleusercontent.com', 'email': 'jsmith@example.com', 'iat': 1353601026, 'exp': 1353604926} SAML assertions are similarly specified, but with an identity provider dependent structure. */
		claims: FormControl<{[id: string]: any } | null | undefined>,

		/** The authorized presenter of the credential. Reflects the optional Authorized Presenter (`azp`) claim within a JWT or the OAuth client id. For example, a Google Cloud Platform client id looks as follows: "123456789012.apps.googleusercontent.com". */
		presenter: FormControl<string | null | undefined>,

		/** The authenticated principal. Reflects the issuer (`iss`) and subject (`sub`) claims within a JWT. The issuer and subject should be `/` delimited, with `/` percent-encoded within the subject fragment. For Google accounts, the principal format is: "https://accounts.google.com/{id}" */
		principal: FormControl<string | null | undefined>,
	}
	export function CreateAuthFormGroup() {
		return new FormGroup<AuthFormProperties>({
			claims: new FormControl<{[id: string]: any } | null | undefined>(undefined),
			presenter: new FormControl<string | null | undefined>(undefined),
			principal: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** This message defines core attributes for a resource. A resource is an addressable (named) entity provided by the destination service. For example, a file stored on a network storage service. */
	export interface Resource {

		/** Annotations is an unstructured key-value map stored with a resource that may be set by external tools to store and retrieve arbitrary metadata. They are not queryable and should be preserved when modifying objects. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ */
		annotations?: {[id: string]: string };

		/** Output only. The timestamp when the resource was created. This may be either the time creation was initiated or when it was completed. */
		createTime?: string | null;

		/** Output only. The timestamp when the resource was deleted. If the resource is not deleted, this must be empty. */
		deleteTime?: string | null;

		/** Mutable. The display name set by clients. Must be <= 63 characters. */
		displayName?: string | null;

		/** Output only. An opaque value that uniquely identifies a version or generation of a resource. It can be used to confirm that the client and server agree on the ordering of a resource being written. */
		etag?: string | null;

		/** The labels or tags on the resource, such as AWS resource tags and Kubernetes resource labels. */
		labels?: {[id: string]: string };

		/** Immutable. The location of the resource. The location encoding is specific to the service provider, and new encoding may be introduced as the service evolves. For Google Cloud products, the encoding is what is used by Google Cloud APIs, such as `us-east1`, `aws-us-east-1`, and `azure-eastus2`. The semantics of `location` is identical to the `cloud.googleapis.com/location` label used by some Google Cloud APIs. */
		location?: string | null;

		/** The stable identifier (name) of a resource on the `service`. A resource can be logically identified as "//{resource.service}/{resource.name}". The differences between a resource name and a URI are: * Resource name is a logical identifier, independent of network protocol and API version. For example, `//pubsub.googleapis.com/projects/123/topics/news-feed`. * URI often includes protocol and version information, so it can be used directly by applications. For example, `https://pubsub.googleapis.com/v1/projects/123/topics/news-feed`. See https://cloud.google.com/apis/design/resource_names for details. */
		name?: string | null;

		/** The name of the service that this resource belongs to, such as `pubsub.googleapis.com`. The service may be different from the DNS hostname that actually serves the request. */
		service?: string | null;

		/** The type of the resource. The syntax is platform-specific because different platforms define their resources differently. For Google APIs, the type format must be "{service}/{kind}", such as "pubsub.googleapis.com/Topic". */
		type?: string | null;

		/** The unique identifier of the resource. UID is unique in the time and space for this resource within the scope of the service. It is typically generated by the server on successful creation of a resource and must not be changed. UID is used to uniquely identify resources with resource name reuses. This should be a UUID4. */
		uid?: string | null;

		/** Output only. The timestamp when the resource was last updated. Any change to the resource made by users must refresh this value. Changes to a resource made by the service should refresh this value. */
		updateTime?: string | null;
	}

	/** This message defines core attributes for a resource. A resource is an addressable (named) entity provided by the destination service. For example, a file stored on a network storage service. */
	export interface ResourceFormProperties {

		/** Annotations is an unstructured key-value map stored with a resource that may be set by external tools to store and retrieve arbitrary metadata. They are not queryable and should be preserved when modifying objects. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ */
		annotations: FormControl<{[id: string]: string } | null | undefined>,

		/** Output only. The timestamp when the resource was created. This may be either the time creation was initiated or when it was completed. */
		createTime: FormControl<string | null | undefined>,

		/** Output only. The timestamp when the resource was deleted. If the resource is not deleted, this must be empty. */
		deleteTime: FormControl<string | null | undefined>,

		/** Mutable. The display name set by clients. Must be <= 63 characters. */
		displayName: FormControl<string | null | undefined>,

		/** Output only. An opaque value that uniquely identifies a version or generation of a resource. It can be used to confirm that the client and server agree on the ordering of a resource being written. */
		etag: FormControl<string | null | undefined>,

		/** The labels or tags on the resource, such as AWS resource tags and Kubernetes resource labels. */
		labels: FormControl<{[id: string]: string } | null | undefined>,

		/** Immutable. The location of the resource. The location encoding is specific to the service provider, and new encoding may be introduced as the service evolves. For Google Cloud products, the encoding is what is used by Google Cloud APIs, such as `us-east1`, `aws-us-east-1`, and `azure-eastus2`. The semantics of `location` is identical to the `cloud.googleapis.com/location` label used by some Google Cloud APIs. */
		location: FormControl<string | null | undefined>,

		/** The stable identifier (name) of a resource on the `service`. A resource can be logically identified as "//{resource.service}/{resource.name}". The differences between a resource name and a URI are: * Resource name is a logical identifier, independent of network protocol and API version. For example, `//pubsub.googleapis.com/projects/123/topics/news-feed`. * URI often includes protocol and version information, so it can be used directly by applications. For example, `https://pubsub.googleapis.com/v1/projects/123/topics/news-feed`. See https://cloud.google.com/apis/design/resource_names for details. */
		name: FormControl<string | null | undefined>,

		/** The name of the service that this resource belongs to, such as `pubsub.googleapis.com`. The service may be different from the DNS hostname that actually serves the request. */
		service: FormControl<string | null | undefined>,

		/** The type of the resource. The syntax is platform-specific because different platforms define their resources differently. For Google APIs, the type format must be "{service}/{kind}", such as "pubsub.googleapis.com/Topic". */
		type: FormControl<string | null | undefined>,

		/** The unique identifier of the resource. UID is unique in the time and space for this resource within the scope of the service. It is typically generated by the server on successful creation of a resource and must not be changed. UID is used to uniquely identify resources with resource name reuses. This should be a UUID4. */
		uid: FormControl<string | null | undefined>,

		/** Output only. The timestamp when the resource was last updated. Any change to the resource made by users must refresh this value. Changes to a resource made by the service should refresh this value. */
		updateTime: FormControl<string | null | undefined>,
	}
	export function CreateResourceFormGroup() {
		return new FormGroup<ResourceFormProperties>({
			annotations: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			createTime: new FormControl<string | null | undefined>(undefined),
			deleteTime: new FormControl<string | null | undefined>(undefined),
			displayName: new FormControl<string | null | undefined>(undefined),
			etag: new FormControl<string | null | undefined>(undefined),
			labels: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			location: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			service: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
			uid: new FormControl<string | null | undefined>(undefined),
			updateTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** This message defines attributes for a typical network response. It generally models semantics of an HTTP response. */
	export interface Response {

		/** The amount of time it takes the backend service to fully respond to a request. Measured from when the destination service starts to send the request to the backend until when the destination service receives the complete response from the backend. */
		backendLatency?: string | null;

		/** The HTTP response status code, such as `200` and `404`. */
		code?: string | null;

		/** The HTTP response headers. If multiple headers share the same key, they must be merged according to HTTP spec. All header keys must be lowercased, because HTTP header keys are case-insensitive. */
		headers?: {[id: string]: string };

		/** The HTTP response size in bytes. If unknown, it must be -1. */
		size?: string | null;

		/** The timestamp when the `destination` service sends the last byte of the response. */
		time?: string | null;
	}

	/** This message defines attributes for a typical network response. It generally models semantics of an HTTP response. */
	export interface ResponseFormProperties {

		/** The amount of time it takes the backend service to fully respond to a request. Measured from when the destination service starts to send the request to the backend until when the destination service receives the complete response from the backend. */
		backendLatency: FormControl<string | null | undefined>,

		/** The HTTP response status code, such as `200` and `404`. */
		code: FormControl<string | null | undefined>,

		/** The HTTP response headers. If multiple headers share the same key, they must be merged according to HTTP spec. All header keys must be lowercased, because HTTP header keys are case-insensitive. */
		headers: FormControl<{[id: string]: string } | null | undefined>,

		/** The HTTP response size in bytes. If unknown, it must be -1. */
		size: FormControl<string | null | undefined>,

		/** The timestamp when the `destination` service sends the last byte of the response. */
		time: FormControl<string | null | undefined>,
	}
	export function CreateResponseFormGroup() {
		return new FormGroup<ResponseFormProperties>({
			backendLatency: new FormControl<string | null | undefined>(undefined),
			code: new FormControl<string | null | undefined>(undefined),
			headers: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			size: new FormControl<string | null | undefined>(undefined),
			time: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Common audit log format for Google Cloud Platform API operations.  */
	export interface AuditLog {

		/** Authentication information for the operation. */
		authenticationInfo?: AuthenticationInfo;

		/** Authorization information. If there are multiple resources or permissions involved, then there is one AuthorizationInfo element for each {resource, permission} tuple. */
		authorizationInfo?: Array<AuthorizationInfo>;

		/** Other service-specific data about the request, response, and other information associated with the current audited event. */
		metadata?: {[id: string]: any };

		/** The name of the service method or operation. For API calls, this should be the name of the API method. For example, "google.cloud.bigquery.v2.TableService.InsertTable" "google.logging.v2.ConfigServiceV2.CreateSink" */
		methodName?: string | null;

		/** The number of items returned from a List or Query API method, if applicable. */
		numResponseItems?: string | null;

		/** Information related to policy violations for this request. */
		policyViolationInfo?: PolicyViolationInfo;

		/** The operation request. This may not include all request parameters, such as those that are too large, privacy-sensitive, or duplicated elsewhere in the log record. It should never include user-generated data, such as file contents. When the JSON object represented here has a proto equivalent, the proto name will be indicated in the `@type` property. */
		request?: {[id: string]: any };

		/** Metadata about the request. */
		requestMetadata?: RequestMetadata;

		/** Location information about a resource. */
		resourceLocation?: ResourceLocation;

		/** The resource or collection that is the target of the operation. The name is a scheme-less URI, not including the API service name. For example: "projects/PROJECT_ID/zones/us-central1-a/instances" "projects/PROJECT_ID/datasets/DATASET_ID" */
		resourceName?: string | null;

		/** The resource's original state before mutation. Present only for operations which have successfully modified the targeted resource(s). In general, this field should contain all changed fields, except those that are already been included in `request`, `response`, `metadata` or `service_data` fields. When the JSON object represented here has a proto equivalent, the proto name will be indicated in the `@type` property. */
		resourceOriginalState?: {[id: string]: any };

		/** The operation response. This may not include all response elements, such as those that are too large, privacy-sensitive, or duplicated elsewhere in the log record. It should never include user-generated data, such as file contents. When the JSON object represented here has a proto equivalent, the proto name will be indicated in the `@type` property. */
		response?: {[id: string]: any };

		/** Deprecated. Use the `metadata` field instead. Other service-specific data about the request, response, and other activities. */
		serviceData?: {[id: string]: any };

		/** The name of the API service performing the operation. For example, `"compute.googleapis.com"`. */
		serviceName?: string | null;

		/** The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors). */
		status?: Status;
	}

	/** Common audit log format for Google Cloud Platform API operations.  */
	export interface AuditLogFormProperties {

		/** Other service-specific data about the request, response, and other information associated with the current audited event. */
		metadata: FormControl<{[id: string]: any } | null | undefined>,

		/** The name of the service method or operation. For API calls, this should be the name of the API method. For example, "google.cloud.bigquery.v2.TableService.InsertTable" "google.logging.v2.ConfigServiceV2.CreateSink" */
		methodName: FormControl<string | null | undefined>,

		/** The number of items returned from a List or Query API method, if applicable. */
		numResponseItems: FormControl<string | null | undefined>,

		/** The operation request. This may not include all request parameters, such as those that are too large, privacy-sensitive, or duplicated elsewhere in the log record. It should never include user-generated data, such as file contents. When the JSON object represented here has a proto equivalent, the proto name will be indicated in the `@type` property. */
		request: FormControl<{[id: string]: any } | null | undefined>,

		/** The resource or collection that is the target of the operation. The name is a scheme-less URI, not including the API service name. For example: "projects/PROJECT_ID/zones/us-central1-a/instances" "projects/PROJECT_ID/datasets/DATASET_ID" */
		resourceName: FormControl<string | null | undefined>,

		/** The resource's original state before mutation. Present only for operations which have successfully modified the targeted resource(s). In general, this field should contain all changed fields, except those that are already been included in `request`, `response`, `metadata` or `service_data` fields. When the JSON object represented here has a proto equivalent, the proto name will be indicated in the `@type` property. */
		resourceOriginalState: FormControl<{[id: string]: any } | null | undefined>,

		/** The operation response. This may not include all response elements, such as those that are too large, privacy-sensitive, or duplicated elsewhere in the log record. It should never include user-generated data, such as file contents. When the JSON object represented here has a proto equivalent, the proto name will be indicated in the `@type` property. */
		response: FormControl<{[id: string]: any } | null | undefined>,

		/** Deprecated. Use the `metadata` field instead. Other service-specific data about the request, response, and other activities. */
		serviceData: FormControl<{[id: string]: any } | null | undefined>,

		/** The name of the API service performing the operation. For example, `"compute.googleapis.com"`. */
		serviceName: FormControl<string | null | undefined>,
	}
	export function CreateAuditLogFormGroup() {
		return new FormGroup<AuditLogFormProperties>({
			metadata: new FormControl<{[id: string]: any } | null | undefined>(undefined),
			methodName: new FormControl<string | null | undefined>(undefined),
			numResponseItems: new FormControl<string | null | undefined>(undefined),
			request: new FormControl<{[id: string]: any } | null | undefined>(undefined),
			resourceName: new FormControl<string | null | undefined>(undefined),
			resourceOriginalState: new FormControl<{[id: string]: any } | null | undefined>(undefined),
			response: new FormControl<{[id: string]: any } | null | undefined>(undefined),
			serviceData: new FormControl<{[id: string]: any } | null | undefined>(undefined),
			serviceName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Authentication information for the operation. */
	export interface AuthenticationInfo {

		/** The authority selector specified by the requestor, if any. It is not guaranteed that the principal was allowed to use this authority. */
		authoritySelector?: string | null;

		/** The email address of the authenticated user (or service account on behalf of third party principal) making the request. For third party identity callers, the `principal_subject` field is populated instead of this field. For privacy reasons, the principal email address is sometimes redacted. For more information, see [Caller identities in audit logs](https://cloud.google.com/logging/docs/audit#user-id). */
		principalEmail?: string | null;

		/** String representation of identity of requesting party. Populated for both first and third party identities. */
		principalSubject?: string | null;

		/** Identity delegation history of an authenticated service account that makes the request. It contains information on the real authorities that try to access GCP resources by delegating on a service account. When multiple authorities present, they are guaranteed to be sorted based on the original ordering of the identity delegation events. */
		serviceAccountDelegationInfo?: Array<ServiceAccountDelegationInfo>;

		/** The name of the service account key used to create or exchange credentials for authenticating the service account making the request. This is a scheme-less URI full resource name. For example: "//iam.googleapis.com/projects/{PROJECT_ID}/serviceAccounts/{ACCOUNT}/keys/{key}" */
		serviceAccountKeyName?: string | null;

		/** The history of delegation across multiple services as the result of the original user's action. Such as "service A uses its own account to do something for user B". This differs from ServiceAccountDelegationInfo, which only tracks the history of direct token exchanges (impersonation). */
		serviceDelegationHistory?: ServiceDelegationHistory;

		/** The third party identification (if any) of the authenticated user making the request. When the JSON object represented here has a proto equivalent, the proto name will be indicated in the `@type` property. */
		thirdPartyPrincipal?: {[id: string]: any };
	}

	/** Authentication information for the operation. */
	export interface AuthenticationInfoFormProperties {

		/** The authority selector specified by the requestor, if any. It is not guaranteed that the principal was allowed to use this authority. */
		authoritySelector: FormControl<string | null | undefined>,

		/** The email address of the authenticated user (or service account on behalf of third party principal) making the request. For third party identity callers, the `principal_subject` field is populated instead of this field. For privacy reasons, the principal email address is sometimes redacted. For more information, see [Caller identities in audit logs](https://cloud.google.com/logging/docs/audit#user-id). */
		principalEmail: FormControl<string | null | undefined>,

		/** String representation of identity of requesting party. Populated for both first and third party identities. */
		principalSubject: FormControl<string | null | undefined>,

		/** The name of the service account key used to create or exchange credentials for authenticating the service account making the request. This is a scheme-less URI full resource name. For example: "//iam.googleapis.com/projects/{PROJECT_ID}/serviceAccounts/{ACCOUNT}/keys/{key}" */
		serviceAccountKeyName: FormControl<string | null | undefined>,

		/** The third party identification (if any) of the authenticated user making the request. When the JSON object represented here has a proto equivalent, the proto name will be indicated in the `@type` property. */
		thirdPartyPrincipal: FormControl<{[id: string]: any } | null | undefined>,
	}
	export function CreateAuthenticationInfoFormGroup() {
		return new FormGroup<AuthenticationInfoFormProperties>({
			authoritySelector: new FormControl<string | null | undefined>(undefined),
			principalEmail: new FormControl<string | null | undefined>(undefined),
			principalSubject: new FormControl<string | null | undefined>(undefined),
			serviceAccountKeyName: new FormControl<string | null | undefined>(undefined),
			thirdPartyPrincipal: new FormControl<{[id: string]: any } | null | undefined>(undefined),
		});

	}


	/** Identity delegation history of an authenticated service account. */
	export interface ServiceAccountDelegationInfo {

		/** First party identity principal. */
		firstPartyPrincipal?: FirstPartyPrincipal;

		/** A string representing the principal_subject associated with the identity. For most identities, the format will be `principal://iam.googleapis.com/{identity pool name}/subject/{subject)` except for some GKE identities (GKE_WORKLOAD, FREEFORM, GKE_HUB_WORKLOAD) that are still in the legacy format `serviceAccount:{identity pool name}[{subject}]` */
		principalSubject?: string | null;

		/** Third party identity principal. */
		thirdPartyPrincipal?: ThirdPartyPrincipal;
	}

	/** Identity delegation history of an authenticated service account. */
	export interface ServiceAccountDelegationInfoFormProperties {

		/** A string representing the principal_subject associated with the identity. For most identities, the format will be `principal://iam.googleapis.com/{identity pool name}/subject/{subject)` except for some GKE identities (GKE_WORKLOAD, FREEFORM, GKE_HUB_WORKLOAD) that are still in the legacy format `serviceAccount:{identity pool name}[{subject}]` */
		principalSubject: FormControl<string | null | undefined>,
	}
	export function CreateServiceAccountDelegationInfoFormGroup() {
		return new FormGroup<ServiceAccountDelegationInfoFormProperties>({
			principalSubject: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** First party identity principal. */
	export interface FirstPartyPrincipal {

		/** The email address of a Google account. . */
		principalEmail?: string | null;

		/** Metadata about the service that uses the service account. . */
		serviceMetadata?: {[id: string]: any };
	}

	/** First party identity principal. */
	export interface FirstPartyPrincipalFormProperties {

		/** The email address of a Google account. . */
		principalEmail: FormControl<string | null | undefined>,

		/** Metadata about the service that uses the service account. . */
		serviceMetadata: FormControl<{[id: string]: any } | null | undefined>,
	}
	export function CreateFirstPartyPrincipalFormGroup() {
		return new FormGroup<FirstPartyPrincipalFormProperties>({
			principalEmail: new FormControl<string | null | undefined>(undefined),
			serviceMetadata: new FormControl<{[id: string]: any } | null | undefined>(undefined),
		});

	}


	/** Third party identity principal. */
	export interface ThirdPartyPrincipal {

		/** Metadata about third party identity. */
		thirdPartyClaims?: {[id: string]: any };
	}

	/** Third party identity principal. */
	export interface ThirdPartyPrincipalFormProperties {

		/** Metadata about third party identity. */
		thirdPartyClaims: FormControl<{[id: string]: any } | null | undefined>,
	}
	export function CreateThirdPartyPrincipalFormGroup() {
		return new FormGroup<ThirdPartyPrincipalFormProperties>({
			thirdPartyClaims: new FormControl<{[id: string]: any } | null | undefined>(undefined),
		});

	}


	/** The history of delegation across multiple services as the result of the original user's action. Such as "service A uses its own account to do something for user B". This differs from ServiceAccountDelegationInfo, which only tracks the history of direct token exchanges (impersonation). */
	export interface ServiceDelegationHistory {

		/** The original end user who initiated the request to GCP. */
		originalPrincipal?: string | null;

		/** Data identifying the service specific jobs or units of work that were involved in a chain of service calls. */
		serviceMetadata?: Array<ServiceMetadata>;
	}

	/** The history of delegation across multiple services as the result of the original user's action. Such as "service A uses its own account to do something for user B". This differs from ServiceAccountDelegationInfo, which only tracks the history of direct token exchanges (impersonation). */
	export interface ServiceDelegationHistoryFormProperties {

		/** The original end user who initiated the request to GCP. */
		originalPrincipal: FormControl<string | null | undefined>,
	}
	export function CreateServiceDelegationHistoryFormGroup() {
		return new FormGroup<ServiceDelegationHistoryFormProperties>({
			originalPrincipal: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Metadata describing the service and additional service specific information used to identify the job or unit of work at hand. */
	export interface ServiceMetadata {

		/** Additional metadata provided by service teams to describe service specific job information that was triggered by the original principal. */
		jobMetadata?: {[id: string]: any };

		/** A string representing the principal_subject associated with the identity. For most identities, the format will be `principal://iam.googleapis.com/{identity pool name}/subject/{subject)` except for some GKE identities (GKE_WORKLOAD, FREEFORM, GKE_HUB_WORKLOAD) that are still in the legacy format `serviceAccount:{identity pool name}[{subject}]` If the identity is a Google account (e.g. workspace user account or service account), this will be the email of the prefixed by `serviceAccount:`. For example: `serviceAccount:my-service-account@project-1.iam.gserviceaccount.com`. If the identity is an individual user, the identity will be formatted as: `user:user_ABC@email.com`. */
		principalSubject?: string | null;

		/** The service's fully qualified domain name, e.g. "dataproc.googleapis.com". */
		serviceDomain?: string | null;
	}

	/** Metadata describing the service and additional service specific information used to identify the job or unit of work at hand. */
	export interface ServiceMetadataFormProperties {

		/** Additional metadata provided by service teams to describe service specific job information that was triggered by the original principal. */
		jobMetadata: FormControl<{[id: string]: any } | null | undefined>,

		/** A string representing the principal_subject associated with the identity. For most identities, the format will be `principal://iam.googleapis.com/{identity pool name}/subject/{subject)` except for some GKE identities (GKE_WORKLOAD, FREEFORM, GKE_HUB_WORKLOAD) that are still in the legacy format `serviceAccount:{identity pool name}[{subject}]` If the identity is a Google account (e.g. workspace user account or service account), this will be the email of the prefixed by `serviceAccount:`. For example: `serviceAccount:my-service-account@project-1.iam.gserviceaccount.com`. If the identity is an individual user, the identity will be formatted as: `user:user_ABC@email.com`. */
		principalSubject: FormControl<string | null | undefined>,

		/** The service's fully qualified domain name, e.g. "dataproc.googleapis.com". */
		serviceDomain: FormControl<string | null | undefined>,
	}
	export function CreateServiceMetadataFormGroup() {
		return new FormGroup<ServiceMetadataFormProperties>({
			jobMetadata: new FormControl<{[id: string]: any } | null | undefined>(undefined),
			principalSubject: new FormControl<string | null | undefined>(undefined),
			serviceDomain: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Authorization information for the operation. */
	export interface AuthorizationInfo {

		/** Whether or not authorization for `resource` and `permission` was granted. */
		granted?: boolean | null;

		/** The required IAM permission. */
		permission?: string | null;

		/** The resource being accessed, as a REST-style or cloud resource string. For example: bigquery.googleapis.com/projects/PROJECTID/datasets/DATASETID or projects/PROJECTID/datasets/DATASETID */
		resource?: string | null;

		/** This message defines core attributes for a resource. A resource is an addressable (named) entity provided by the destination service. For example, a file stored on a network storage service. */
		resourceAttributes?: Resource;
	}

	/** Authorization information for the operation. */
	export interface AuthorizationInfoFormProperties {

		/** Whether or not authorization for `resource` and `permission` was granted. */
		granted: FormControl<boolean | null | undefined>,

		/** The required IAM permission. */
		permission: FormControl<string | null | undefined>,

		/** The resource being accessed, as a REST-style or cloud resource string. For example: bigquery.googleapis.com/projects/PROJECTID/datasets/DATASETID or projects/PROJECTID/datasets/DATASETID */
		resource: FormControl<string | null | undefined>,
	}
	export function CreateAuthorizationInfoFormGroup() {
		return new FormGroup<AuthorizationInfoFormProperties>({
			granted: new FormControl<boolean | null | undefined>(undefined),
			permission: new FormControl<string | null | undefined>(undefined),
			resource: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Information related to policy violations for this request. */
	export interface PolicyViolationInfo {

		/** Represents OrgPolicy Violation information. */
		orgPolicyViolationInfo?: OrgPolicyViolationInfo;
	}

	/** Information related to policy violations for this request. */
	export interface PolicyViolationInfoFormProperties {
	}
	export function CreatePolicyViolationInfoFormGroup() {
		return new FormGroup<PolicyViolationInfoFormProperties>({
		});

	}


	/** Represents OrgPolicy Violation information. */
	export interface OrgPolicyViolationInfo {

		/** Optional. Resource payload that is currently in scope and is subjected to orgpolicy conditions. This payload may be the subset of the actual Resource that may come in the request. This payload should not contain any core content. */
		payload?: {[id: string]: any };

		/** Optional. Tags referenced on the resource at the time of evaluation. These also include the federated tags, if they are supplied in the CheckOrgPolicy or CheckCustomConstraints Requests. Optional field as of now. These tags are the Cloud tags that are available on the resource during the policy evaluation and will be available as part of the OrgPolicy check response for logging purposes. */
		resourceTags?: {[id: string]: string };

		/** Optional. Resource type that the orgpolicy is checked against. Example: compute.googleapis.com/Instance, store.googleapis.com/bucket */
		resourceType?: string | null;

		/** Optional. Policy violations */
		violationInfo?: Array<ViolationInfo>;
	}

	/** Represents OrgPolicy Violation information. */
	export interface OrgPolicyViolationInfoFormProperties {

		/** Optional. Resource payload that is currently in scope and is subjected to orgpolicy conditions. This payload may be the subset of the actual Resource that may come in the request. This payload should not contain any core content. */
		payload: FormControl<{[id: string]: any } | null | undefined>,

		/** Optional. Tags referenced on the resource at the time of evaluation. These also include the federated tags, if they are supplied in the CheckOrgPolicy or CheckCustomConstraints Requests. Optional field as of now. These tags are the Cloud tags that are available on the resource during the policy evaluation and will be available as part of the OrgPolicy check response for logging purposes. */
		resourceTags: FormControl<{[id: string]: string } | null | undefined>,

		/** Optional. Resource type that the orgpolicy is checked against. Example: compute.googleapis.com/Instance, store.googleapis.com/bucket */
		resourceType: FormControl<string | null | undefined>,
	}
	export function CreateOrgPolicyViolationInfoFormGroup() {
		return new FormGroup<OrgPolicyViolationInfoFormProperties>({
			payload: new FormControl<{[id: string]: any } | null | undefined>(undefined),
			resourceTags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			resourceType: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Provides information about the Policy violation info for this request. */
	export interface ViolationInfo {

		/** Optional. Value that is being checked for the policy. This could be in encrypted form (if pii sensitive). This field will only be emitted in LIST_POLICY types */
		checkedValue?: string | null;

		/** Optional. Constraint name */
		constraint?: string | null;

		/** Optional. Error message that policy is indicating. */
		errorMessage?: string | null;

		/** Optional. Indicates the type of the policy. */
		policyType?: ViolationInfoPolicyType | null;
	}

	/** Provides information about the Policy violation info for this request. */
	export interface ViolationInfoFormProperties {

		/** Optional. Value that is being checked for the policy. This could be in encrypted form (if pii sensitive). This field will only be emitted in LIST_POLICY types */
		checkedValue: FormControl<string | null | undefined>,

		/** Optional. Constraint name */
		constraint: FormControl<string | null | undefined>,

		/** Optional. Error message that policy is indicating. */
		errorMessage: FormControl<string | null | undefined>,

		/** Optional. Indicates the type of the policy. */
		policyType: FormControl<ViolationInfoPolicyType | null | undefined>,
	}
	export function CreateViolationInfoFormGroup() {
		return new FormGroup<ViolationInfoFormProperties>({
			checkedValue: new FormControl<string | null | undefined>(undefined),
			constraint: new FormControl<string | null | undefined>(undefined),
			errorMessage: new FormControl<string | null | undefined>(undefined),
			policyType: new FormControl<ViolationInfoPolicyType | null | undefined>(undefined),
		});

	}

	export enum ViolationInfoPolicyType { POLICY_TYPE_UNSPECIFIED = 'POLICY_TYPE_UNSPECIFIED', BOOLEAN_CONSTRAINT = 'BOOLEAN_CONSTRAINT', LIST_CONSTRAINT = 'LIST_CONSTRAINT', CUSTOM_CONSTRAINT = 'CUSTOM_CONSTRAINT' }


	/** Metadata about the request. */
	export interface RequestMetadata {

		/** The IP address of the caller. For a caller from the internet, this will be the public IPv4 or IPv6 address. For calls made from inside Google's internal production network from one GCP service to another, `caller_ip` will be redacted to "private". For a caller from a Compute Engine VM with a external IP address, `caller_ip` will be the VM's external IP address. For a caller from a Compute Engine VM without a external IP address, if the VM is in the same organization (or project) as the accessed resource, `caller_ip` will be the VM's internal IPv4 address, otherwise `caller_ip` will be redacted to "gce-internal-ip". See https://cloud.google.com/compute/docs/vpc/ for more information. */
		callerIp?: string | null;

		/** The network of the caller. Set only if the network host project is part of the same GCP organization (or project) as the accessed resource. See https://cloud.google.com/compute/docs/vpc/ for more information. This is a scheme-less URI full resource name. For example: "//compute.googleapis.com/projects/PROJECT_ID/global/networks/NETWORK_ID" */
		callerNetwork?: string | null;

		/** The user agent of the caller. This information is not authenticated and should be treated accordingly. For example: + `google-api-python-client/1.4.0`: The request was made by the Google API client for Python. + `Cloud SDK Command Line Tool apitools-client/1.0 gcloud/0.9.62`: The request was made by the Google Cloud SDK CLI (gcloud). + `AppEngine-Google; (+http://code.google.com/appengine; appid: s~my-project`: The request was made from the `my-project` App Engine app. */
		callerSuppliedUserAgent?: string | null;

		/** This message defines attributes for a node that handles a network request. The node can be either a service or an application that sends, forwards, or receives the request. Service peers should fill in `principal` and `labels` as appropriate. */
		destinationAttributes?: Peer;

		/** This message defines attributes for an HTTP request. If the actual request is not an HTTP request, the runtime system should try to map the actual request to an equivalent HTTP request. */
		requestAttributes?: Request;
	}

	/** Metadata about the request. */
	export interface RequestMetadataFormProperties {

		/** The IP address of the caller. For a caller from the internet, this will be the public IPv4 or IPv6 address. For calls made from inside Google's internal production network from one GCP service to another, `caller_ip` will be redacted to "private". For a caller from a Compute Engine VM with a external IP address, `caller_ip` will be the VM's external IP address. For a caller from a Compute Engine VM without a external IP address, if the VM is in the same organization (or project) as the accessed resource, `caller_ip` will be the VM's internal IPv4 address, otherwise `caller_ip` will be redacted to "gce-internal-ip". See https://cloud.google.com/compute/docs/vpc/ for more information. */
		callerIp: FormControl<string | null | undefined>,

		/** The network of the caller. Set only if the network host project is part of the same GCP organization (or project) as the accessed resource. See https://cloud.google.com/compute/docs/vpc/ for more information. This is a scheme-less URI full resource name. For example: "//compute.googleapis.com/projects/PROJECT_ID/global/networks/NETWORK_ID" */
		callerNetwork: FormControl<string | null | undefined>,

		/** The user agent of the caller. This information is not authenticated and should be treated accordingly. For example: + `google-api-python-client/1.4.0`: The request was made by the Google API client for Python. + `Cloud SDK Command Line Tool apitools-client/1.0 gcloud/0.9.62`: The request was made by the Google Cloud SDK CLI (gcloud). + `AppEngine-Google; (+http://code.google.com/appengine; appid: s~my-project`: The request was made from the `my-project` App Engine app. */
		callerSuppliedUserAgent: FormControl<string | null | undefined>,
	}
	export function CreateRequestMetadataFormGroup() {
		return new FormGroup<RequestMetadataFormProperties>({
			callerIp: new FormControl<string | null | undefined>(undefined),
			callerNetwork: new FormControl<string | null | undefined>(undefined),
			callerSuppliedUserAgent: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Location information about a resource. */
	export interface ResourceLocation {

		/** The locations of a resource after the execution of the operation. Requests to create or delete a location based resource must populate the 'current_locations' field and not the 'original_locations' field. For example: "europe-west1-a" "us-east1" "nam3" */
		currentLocations?: Array<string>;

		/** The locations of a resource prior to the execution of the operation. Requests that mutate the resource's location must populate both the 'original_locations' as well as the 'current_locations' fields. For example: "europe-west1-a" "us-east1" "nam3" */
		originalLocations?: Array<string>;
	}

	/** Location information about a resource. */
	export interface ResourceLocationFormProperties {
	}
	export function CreateResourceLocationFormGroup() {
		return new FormGroup<ResourceLocationFormProperties>({
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


	/** Request message for the Check method. */
	export interface CheckRequest {

		/** This message defines the standard attribute vocabulary for Google APIs. An attribute is a piece of metadata that describes an activity on a network service. For example, the size of an HTTP request, or the status code of an HTTP response. Each attribute has a type and a name, which is logically defined as a proto message field in `AttributeContext`. The field type becomes the attribute type, and the field path becomes the attribute name. For example, the attribute `source.ip` maps to field `AttributeContext.source.ip`. This message definition is guaranteed not to have any wire breaking change. So you can use it directly for passing attributes across different systems. NOTE: Different system may generate different subset of attributes. Please verify the system specification before relying on an attribute generated a system. */
		attributes?: AttributeContext;

		/** Optional. Contains a comma-separated list of flags. */
		flags?: string | null;

		/** Describes the resources and the policies applied to each resource. */
		resources?: Array<ResourceInfo>;

		/** Specifies the version of the service configuration that should be used to process the request. Must not be empty. Set this field to 'latest' to specify using the latest configuration. */
		serviceConfigId?: string | null;
	}

	/** Request message for the Check method. */
	export interface CheckRequestFormProperties {

		/** Optional. Contains a comma-separated list of flags. */
		flags: FormControl<string | null | undefined>,

		/** Specifies the version of the service configuration that should be used to process the request. Must not be empty. Set this field to 'latest' to specify using the latest configuration. */
		serviceConfigId: FormControl<string | null | undefined>,
	}
	export function CreateCheckRequestFormGroup() {
		return new FormGroup<CheckRequestFormProperties>({
			flags: new FormControl<string | null | undefined>(undefined),
			serviceConfigId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Describes a resource referenced in the request. */
	export interface ResourceInfo {

		/** Optional. The identifier of the container of this resource. For Google Cloud APIs, the resource container must be one of the following formats: - `projects/` - `folders/` - `organizations/` Required for the policy enforcement on the container level (e.g. VPCSC, Location Policy check, Org Policy check). */
		container?: string | null;

		/** Optional. The location of the resource, it must be a valid zone, region or multiregion, for example: "europe-west4", "northamerica-northeast1-a". Required for location policy check. */
		location?: string | null;

		/** The name of the resource referenced in the request. */
		name?: string | null;

		/** The resource permission needed for this request. The format must be "{service}/{plural}.{verb}". */
		permission?: string | null;

		/** The resource type in the format of "{service}/{kind}". */
		type?: string | null;
	}

	/** Describes a resource referenced in the request. */
	export interface ResourceInfoFormProperties {

		/** Optional. The identifier of the container of this resource. For Google Cloud APIs, the resource container must be one of the following formats: - `projects/` - `folders/` - `organizations/` Required for the policy enforcement on the container level (e.g. VPCSC, Location Policy check, Org Policy check). */
		container: FormControl<string | null | undefined>,

		/** Optional. The location of the resource, it must be a valid zone, region or multiregion, for example: "europe-west4", "northamerica-northeast1-a". Required for location policy check. */
		location: FormControl<string | null | undefined>,

		/** The name of the resource referenced in the request. */
		name: FormControl<string | null | undefined>,

		/** The resource permission needed for this request. The format must be "{service}/{plural}.{verb}". */
		permission: FormControl<string | null | undefined>,

		/** The resource type in the format of "{service}/{kind}". */
		type: FormControl<string | null | undefined>,
	}
	export function CreateResourceInfoFormGroup() {
		return new FormGroup<ResourceInfoFormProperties>({
			container: new FormControl<string | null | undefined>(undefined),
			location: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			permission: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response message for the Check method. */
	export interface CheckResponse {

		/** Returns a set of request contexts generated from the `CheckRequest`. */
		headers?: {[id: string]: string };

		/** The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors). */
		status?: Status;
	}

	/** Response message for the Check method. */
	export interface CheckResponseFormProperties {

		/** Returns a set of request contexts generated from the `CheckRequest`. */
		headers: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateCheckResponseFormGroup() {
		return new FormGroup<CheckResponseFormProperties>({
			headers: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}


	/** Request message for the Report method. */
	export interface ReportRequest {

		/** Describes the list of operations to be reported. Each operation is represented as an AttributeContext, and contains all attributes around an API access. */
		operations?: Array<AttributeContext>;

		/** Specifies the version of the service configuration that should be used to process the request. Must not be empty. Set this field to 'latest' to specify using the latest configuration. */
		serviceConfigId?: string | null;
	}

	/** Request message for the Report method. */
	export interface ReportRequestFormProperties {

		/** Specifies the version of the service configuration that should be used to process the request. Must not be empty. Set this field to 'latest' to specify using the latest configuration. */
		serviceConfigId: FormControl<string | null | undefined>,
	}
	export function CreateReportRequestFormGroup() {
		return new FormGroup<ReportRequestFormProperties>({
			serviceConfigId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response message for the Report method. */
	export interface ReportResponse {
	}

	/** Response message for the Report method. */
	export interface ReportResponseFormProperties {
	}
	export function CreateReportResponseFormGroup() {
		return new FormGroup<ReportResponseFormProperties>({
		});

	}


	/** The context of a span. This is attached to an Exemplar in Distribution values during aggregation. It contains the name of a span with format: projects/[PROJECT_ID_OR_NUMBER]/traces/[TRACE_ID]/spans/[SPAN_ID] */
	export interface SpanContext {

		/** The resource name of the span. The format is: projects/[PROJECT_ID_OR_NUMBER]/traces/[TRACE_ID]/spans/[SPAN_ID] `[TRACE_ID]` is a unique identifier for a trace within a project; it is a 32-character hexadecimal encoding of a 16-byte array. `[SPAN_ID]` is a unique identifier for a span within a trace; it is a 16-character hexadecimal encoding of an 8-byte array. */
		spanName?: string | null;
	}

	/** The context of a span. This is attached to an Exemplar in Distribution values during aggregation. It contains the name of a span with format: projects/[PROJECT_ID_OR_NUMBER]/traces/[TRACE_ID]/spans/[SPAN_ID] */
	export interface SpanContextFormProperties {

		/** The resource name of the span. The format is: projects/[PROJECT_ID_OR_NUMBER]/traces/[TRACE_ID]/spans/[SPAN_ID] `[TRACE_ID]` is a unique identifier for a trace within a project; it is a 32-character hexadecimal encoding of a 16-byte array. `[SPAN_ID]` is a unique identifier for a span within a trace; it is a 16-character hexadecimal encoding of an 8-byte array. */
		spanName: FormControl<string | null | undefined>,
	}
	export function CreateSpanContextFormGroup() {
		return new FormGroup<SpanContextFormProperties>({
			spanName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A common proto for logging HTTP requests. Only contains semantics defined by the HTTP specification. Product-specific logging information MUST be defined in a separate message. */
	export interface V2HttpRequest {

		/** The number of HTTP response bytes inserted into cache. Set only when a cache fill was attempted. */
		cacheFillBytes?: string | null;

		/** Whether or not an entity was served from cache (with or without validation). */
		cacheHit?: boolean | null;

		/** Whether or not a cache lookup was attempted. */
		cacheLookup?: boolean | null;

		/** Whether or not the response was validated with the origin server before being served from cache. This field is only meaningful if `cache_hit` is True. */
		cacheValidatedWithOriginServer?: boolean | null;

		/** The request processing latency on the server, from the time the request was received until the response was sent. */
		latency?: string | null;

		/** Protocol used for the request. Examples: "HTTP/1.1", "HTTP/2", "websocket" */
		protocol?: string | null;

		/** The referer URL of the request, as defined in [HTTP/1.1 Header Field Definitions](http://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html). */
		referer?: string | null;

		/** The IP address (IPv4 or IPv6) of the client that issued the HTTP request. Examples: `"192.168.1.1"`, `"FE80::0202:B3FF:FE1E:8329"`. */
		remoteIp?: string | null;

		/** The request method. Examples: `"GET"`, `"HEAD"`, `"PUT"`, `"POST"`. */
		requestMethod?: string | null;

		/** The size of the HTTP request message in bytes, including the request headers and the request body. */
		requestSize?: string | null;

		/** The scheme (http, https), the host name, the path, and the query portion of the URL that was requested. Example: `"http://example.com/some/info?color=red"`. */
		requestUrl?: string | null;

		/** The size of the HTTP response message sent back to the client, in bytes, including the response headers and the response body. */
		responseSize?: string | null;

		/** The IP address (IPv4 or IPv6) of the origin server that the request was sent to. */
		serverIp?: string | null;

		/**
		 * The response code indicating the status of the response. Examples: 200, 404.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		status?: number | null;

		/** The user agent sent by the client. Example: `"Mozilla/4.0 (compatible; MSIE 6.0; Windows 98; Q312461; .NET CLR 1.0.3705)"`. */
		userAgent?: string | null;
	}

	/** A common proto for logging HTTP requests. Only contains semantics defined by the HTTP specification. Product-specific logging information MUST be defined in a separate message. */
	export interface V2HttpRequestFormProperties {

		/** The number of HTTP response bytes inserted into cache. Set only when a cache fill was attempted. */
		cacheFillBytes: FormControl<string | null | undefined>,

		/** Whether or not an entity was served from cache (with or without validation). */
		cacheHit: FormControl<boolean | null | undefined>,

		/** Whether or not a cache lookup was attempted. */
		cacheLookup: FormControl<boolean | null | undefined>,

		/** Whether or not the response was validated with the origin server before being served from cache. This field is only meaningful if `cache_hit` is True. */
		cacheValidatedWithOriginServer: FormControl<boolean | null | undefined>,

		/** The request processing latency on the server, from the time the request was received until the response was sent. */
		latency: FormControl<string | null | undefined>,

		/** Protocol used for the request. Examples: "HTTP/1.1", "HTTP/2", "websocket" */
		protocol: FormControl<string | null | undefined>,

		/** The referer URL of the request, as defined in [HTTP/1.1 Header Field Definitions](http://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html). */
		referer: FormControl<string | null | undefined>,

		/** The IP address (IPv4 or IPv6) of the client that issued the HTTP request. Examples: `"192.168.1.1"`, `"FE80::0202:B3FF:FE1E:8329"`. */
		remoteIp: FormControl<string | null | undefined>,

		/** The request method. Examples: `"GET"`, `"HEAD"`, `"PUT"`, `"POST"`. */
		requestMethod: FormControl<string | null | undefined>,

		/** The size of the HTTP request message in bytes, including the request headers and the request body. */
		requestSize: FormControl<string | null | undefined>,

		/** The scheme (http, https), the host name, the path, and the query portion of the URL that was requested. Example: `"http://example.com/some/info?color=red"`. */
		requestUrl: FormControl<string | null | undefined>,

		/** The size of the HTTP response message sent back to the client, in bytes, including the response headers and the response body. */
		responseSize: FormControl<string | null | undefined>,

		/** The IP address (IPv4 or IPv6) of the origin server that the request was sent to. */
		serverIp: FormControl<string | null | undefined>,

		/**
		 * The response code indicating the status of the response. Examples: 200, 404.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		status: FormControl<number | null | undefined>,

		/** The user agent sent by the client. Example: `"Mozilla/4.0 (compatible; MSIE 6.0; Windows 98; Q312461; .NET CLR 1.0.3705)"`. */
		userAgent: FormControl<string | null | undefined>,
	}
	export function CreateV2HttpRequestFormGroup() {
		return new FormGroup<V2HttpRequestFormProperties>({
			cacheFillBytes: new FormControl<string | null | undefined>(undefined),
			cacheHit: new FormControl<boolean | null | undefined>(undefined),
			cacheLookup: new FormControl<boolean | null | undefined>(undefined),
			cacheValidatedWithOriginServer: new FormControl<boolean | null | undefined>(undefined),
			latency: new FormControl<string | null | undefined>(undefined),
			protocol: new FormControl<string | null | undefined>(undefined),
			referer: new FormControl<string | null | undefined>(undefined),
			remoteIp: new FormControl<string | null | undefined>(undefined),
			requestMethod: new FormControl<string | null | undefined>(undefined),
			requestSize: new FormControl<string | null | undefined>(undefined),
			requestUrl: new FormControl<string | null | undefined>(undefined),
			responseSize: new FormControl<string | null | undefined>(undefined),
			serverIp: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<number | null | undefined>(undefined),
			userAgent: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An individual log entry. */
	export interface V2LogEntry {

		/** A common proto for logging HTTP requests. Only contains semantics defined by the HTTP specification. Product-specific logging information MUST be defined in a separate message. */
		httpRequest?: V2HttpRequest;

		/** A unique ID for the log entry used for deduplication. If omitted, the implementation will generate one based on operation_id. */
		insertId?: string | null;

		/** A set of user-defined (key, value) data that provides additional information about the log entry. */
		labels?: {[id: string]: string };

		/** A set of user-defined (key, value) data that provides additional information about the moniotored resource that the log entry belongs to. */
		monitoredResourceLabels?: {[id: string]: string };

		/** Required. The log to which this log entry belongs. Examples: `"syslog"`, `"book_log"`. */
		name?: string | null;

		/** Additional information about a potentially long-running operation with which a log entry is associated. */
		operation?: V2LogEntryOperation;

		/** The log entry payload, represented as a protocol buffer that is expressed as a JSON object. The only accepted type currently is AuditLog. */
		protoPayload?: {[id: string]: any };

		/** The severity of the log entry. The default value is `LogSeverity.DEFAULT`. */
		severity?: V2LogEntrySeverity | null;

		/** Additional information about the source code location that produced the log entry. */
		sourceLocation?: V2LogEntrySourceLocation;

		/** The log entry payload, represented as a structure that is expressed as a JSON object. */
		structPayload?: {[id: string]: any };

		/** The log entry payload, represented as a Unicode string (UTF-8). */
		textPayload?: string | null;

		/** The time the event described by the log entry occurred. If omitted, defaults to operation start time. */
		timestamp?: string | null;

		/** Optional. Resource name of the trace associated with the log entry, if any. If this field contains a relative resource name, you can assume the name is relative to `//tracing.googleapis.com`. Example: `projects/my-projectid/traces/06796866738c859f2f19b7cfb3214824` */
		trace?: string | null;
	}

	/** An individual log entry. */
	export interface V2LogEntryFormProperties {

		/** A unique ID for the log entry used for deduplication. If omitted, the implementation will generate one based on operation_id. */
		insertId: FormControl<string | null | undefined>,

		/** A set of user-defined (key, value) data that provides additional information about the log entry. */
		labels: FormControl<{[id: string]: string } | null | undefined>,

		/** A set of user-defined (key, value) data that provides additional information about the moniotored resource that the log entry belongs to. */
		monitoredResourceLabels: FormControl<{[id: string]: string } | null | undefined>,

		/** Required. The log to which this log entry belongs. Examples: `"syslog"`, `"book_log"`. */
		name: FormControl<string | null | undefined>,

		/** The log entry payload, represented as a protocol buffer that is expressed as a JSON object. The only accepted type currently is AuditLog. */
		protoPayload: FormControl<{[id: string]: any } | null | undefined>,

		/** The severity of the log entry. The default value is `LogSeverity.DEFAULT`. */
		severity: FormControl<V2LogEntrySeverity | null | undefined>,

		/** The log entry payload, represented as a structure that is expressed as a JSON object. */
		structPayload: FormControl<{[id: string]: any } | null | undefined>,

		/** The log entry payload, represented as a Unicode string (UTF-8). */
		textPayload: FormControl<string | null | undefined>,

		/** The time the event described by the log entry occurred. If omitted, defaults to operation start time. */
		timestamp: FormControl<string | null | undefined>,

		/** Optional. Resource name of the trace associated with the log entry, if any. If this field contains a relative resource name, you can assume the name is relative to `//tracing.googleapis.com`. Example: `projects/my-projectid/traces/06796866738c859f2f19b7cfb3214824` */
		trace: FormControl<string | null | undefined>,
	}
	export function CreateV2LogEntryFormGroup() {
		return new FormGroup<V2LogEntryFormProperties>({
			insertId: new FormControl<string | null | undefined>(undefined),
			labels: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			monitoredResourceLabels: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			protoPayload: new FormControl<{[id: string]: any } | null | undefined>(undefined),
			severity: new FormControl<V2LogEntrySeverity | null | undefined>(undefined),
			structPayload: new FormControl<{[id: string]: any } | null | undefined>(undefined),
			textPayload: new FormControl<string | null | undefined>(undefined),
			timestamp: new FormControl<string | null | undefined>(undefined),
			trace: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Additional information about a potentially long-running operation with which a log entry is associated. */
	export interface V2LogEntryOperation {

		/** Optional. Set this to True if this is the first log entry in the operation. */
		first?: boolean | null;

		/** Optional. An arbitrary operation identifier. Log entries with the same identifier are assumed to be part of the same operation. */
		id?: string | null;

		/** Optional. Set this to True if this is the last log entry in the operation. */
		last?: boolean | null;

		/** Optional. An arbitrary producer identifier. The combination of `id` and `producer` must be globally unique. Examples for `producer`: `"MyDivision.MyBigCompany.com"`, `"github.com/MyProject/MyApplication"`. */
		producer?: string | null;
	}

	/** Additional information about a potentially long-running operation with which a log entry is associated. */
	export interface V2LogEntryOperationFormProperties {

		/** Optional. Set this to True if this is the first log entry in the operation. */
		first: FormControl<boolean | null | undefined>,

		/** Optional. An arbitrary operation identifier. Log entries with the same identifier are assumed to be part of the same operation. */
		id: FormControl<string | null | undefined>,

		/** Optional. Set this to True if this is the last log entry in the operation. */
		last: FormControl<boolean | null | undefined>,

		/** Optional. An arbitrary producer identifier. The combination of `id` and `producer` must be globally unique. Examples for `producer`: `"MyDivision.MyBigCompany.com"`, `"github.com/MyProject/MyApplication"`. */
		producer: FormControl<string | null | undefined>,
	}
	export function CreateV2LogEntryOperationFormGroup() {
		return new FormGroup<V2LogEntryOperationFormProperties>({
			first: new FormControl<boolean | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			last: new FormControl<boolean | null | undefined>(undefined),
			producer: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum V2LogEntrySeverity { DEFAULT = 'DEFAULT', DEBUG = 'DEBUG', INFO = 'INFO', NOTICE = 'NOTICE', WARNING = 'WARNING', ERROR = 'ERROR', CRITICAL = 'CRITICAL', ALERT = 'ALERT', EMERGENCY = 'EMERGENCY' }


	/** Additional information about the source code location that produced the log entry. */
	export interface V2LogEntrySourceLocation {

		/** Optional. Source file name. Depending on the runtime environment, this might be a simple name or a fully-qualified name. */
		file?: string | null;

		/** Optional. Human-readable name of the function or method being invoked, with optional context such as the class or package name. This information may be used in contexts such as the logs viewer, where a file and line number are less meaningful. The format can vary by language. For example: `qual.if.ied.Class.method` (Java), `dir/package.func` (Go), `function` (Python). */
		function?: string | null;

		/** Optional. Line within the source file. 1-based; 0 indicates no line number available. */
		line?: string | null;
	}

	/** Additional information about the source code location that produced the log entry. */
	export interface V2LogEntrySourceLocationFormProperties {

		/** Optional. Source file name. Depending on the runtime environment, this might be a simple name or a fully-qualified name. */
		file: FormControl<string | null | undefined>,

		/** Optional. Human-readable name of the function or method being invoked, with optional context such as the class or package name. This information may be used in contexts such as the logs viewer, where a file and line number are less meaningful. The format can vary by language. For example: `qual.if.ied.Class.method` (Java), `dir/package.func` (Go), `function` (Python). */
		function: FormControl<string | null | undefined>,

		/** Optional. Line within the source file. 1-based; 0 indicates no line number available. */
		line: FormControl<string | null | undefined>,
	}
	export function CreateV2LogEntrySourceLocationFormGroup() {
		return new FormGroup<V2LogEntrySourceLocationFormProperties>({
			file: new FormControl<string | null | undefined>(undefined),
			function: new FormControl<string | null | undefined>(undefined),
			line: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Private Preview. This feature is only available for approved services. This method provides admission control for services that are integrated with [Service Infrastructure](https://cloud.google.com/service-infrastructure). It checks whether an operation should be allowed based on the service configuration and relevant policies. It must be called before the operation is executed. For more information, see [Admission Control](https://cloud.google.com/service-infrastructure/docs/admission-control). NOTE: The admission control has an expected policy propagation delay of 60s. The caller **must** not depend on the most recent policy changes. NOTE: The admission control has a hard limit of 1 referenced resources per call. If an operation refers to more than 1 resources, the caller must call the Check method multiple times. This method requires the `servicemanagement.services.check` permission on the specified service. For more information, see [Service Control API Access Control](https://cloud.google.com/service-infrastructure/docs/service-control/access-control).
		 * Post v2/services/{serviceName}:check
		 * @param {string} serviceName The service name as specified in its service configuration. For example, `"pubsub.googleapis.com"`. See [google.api.Service](https://cloud.google.com/service-management/reference/rpc/google.api#google.api.Service) for the definition of a service name.
		 * @return {CheckResponse} Successful response
		 */
		Servicecontrol_services_check(serviceName: string, requestBody: CheckRequest): Observable<CheckResponse> {
			return this.http.post<CheckResponse>(this.baseUri + 'v2/services/' + (serviceName == null ? '' : encodeURIComponent(serviceName)) + ':check', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Private Preview. This feature is only available for approved services. This method provides telemetry reporting for services that are integrated with [Service Infrastructure](https://cloud.google.com/service-infrastructure). It reports a list of operations that have occurred on a service. It must be called after the operations have been executed. For more information, see [Telemetry Reporting](https://cloud.google.com/service-infrastructure/docs/telemetry-reporting). NOTE: The telemetry reporting has a hard limit of 1000 operations and 1MB per Report call. It is recommended to have no more than 100 operations per call. This method requires the `servicemanagement.services.report` permission on the specified service. For more information, see [Service Control API Access Control](https://cloud.google.com/service-infrastructure/docs/service-control/access-control).
		 * Post v2/services/{serviceName}:report
		 * @param {string} serviceName The service name as specified in its service configuration. For example, `"pubsub.googleapis.com"`. See [google.api.Service](https://cloud.google.com/service-management/reference/rpc/google.api#google.api.Service) for the definition of a service name.
		 * @return {ReportResponse} Successful response
		 */
		Servicecontrol_services_report(serviceName: string, requestBody: ReportRequest): Observable<ReportResponse> {
			return this.http.post<ReportResponse>(this.baseUri + 'v2/services/' + (serviceName == null ? '' : encodeURIComponent(serviceName)) + ':report', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

}

