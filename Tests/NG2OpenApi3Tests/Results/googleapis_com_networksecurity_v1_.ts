import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** Request used by the AddAddressGroupItems method. */
	export interface AddAddressGroupItemsRequest {

		/** Required. List of items to add. */
		items?: Array<string>;

		/** Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
		requestId?: string | null;
	}

	/** Request used by the AddAddressGroupItems method. */
	export interface AddAddressGroupItemsRequestFormProperties {

		/** Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
		requestId: FormControl<string | null | undefined>,
	}
	export function CreateAddAddressGroupItemsRequestFormGroup() {
		return new FormGroup<AddAddressGroupItemsRequestFormProperties>({
			requestId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** AddressGroup is a resource that specifies how a collection of IP/DNS used in Firewall Policy. */
	export interface AddressGroup {

		/** Required. Capacity of the Address Group */
		capacity?: number | null;

		/** Output only. The timestamp when the resource was created. */
		createTime?: string | null;

		/** Optional. Free-text description of the resource. */
		description?: string | null;

		/** Optional. List of items. */
		items?: Array<string>;

		/** Optional. Set of label tags associated with the AddressGroup resource. */
		labels?: {[id: string]: string };

		/** Required. Name of the AddressGroup resource. It matches pattern `projects/locations/{location}/addressGroups/`. */
		name?: string | null;

		/** Output only. Server-defined fully-qualified URL for this resource. */
		selfLink?: string | null;

		/** Required. The type of the Address Group. Possible values are "IPv4" or "IPV6". */
		type?: AddressGroupType | null;

		/** Output only. The timestamp when the resource was updated. */
		updateTime?: string | null;
	}

	/** AddressGroup is a resource that specifies how a collection of IP/DNS used in Firewall Policy. */
	export interface AddressGroupFormProperties {

		/** Required. Capacity of the Address Group */
		capacity: FormControl<number | null | undefined>,

		/** Output only. The timestamp when the resource was created. */
		createTime: FormControl<string | null | undefined>,

		/** Optional. Free-text description of the resource. */
		description: FormControl<string | null | undefined>,

		/** Optional. Set of label tags associated with the AddressGroup resource. */
		labels: FormControl<{[id: string]: string } | null | undefined>,

		/** Required. Name of the AddressGroup resource. It matches pattern `projects/locations/{location}/addressGroups/`. */
		name: FormControl<string | null | undefined>,

		/** Output only. Server-defined fully-qualified URL for this resource. */
		selfLink: FormControl<string | null | undefined>,

		/** Required. The type of the Address Group. Possible values are "IPv4" or "IPV6". */
		type: FormControl<AddressGroupType | null | undefined>,

		/** Output only. The timestamp when the resource was updated. */
		updateTime: FormControl<string | null | undefined>,
	}
	export function CreateAddressGroupFormGroup() {
		return new FormGroup<AddressGroupFormProperties>({
			capacity: new FormControl<number | null | undefined>(undefined),
			createTime: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			labels: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			selfLink: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<AddressGroupType | null | undefined>(undefined),
			updateTime: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum AddressGroupType { TYPE_UNSPECIFIED = 'TYPE_UNSPECIFIED', IPV4 = 'IPV4', IPV6 = 'IPV6' }


	/** AuthorizationPolicy is a resource that specifies how a server should authorize incoming connections. This resource in itself does not change the configuration unless it's attached to a target https proxy or endpoint config selector resource. */
	export interface AuthorizationPolicy {

		/** Required. The action to take when a rule match is found. Possible values are "ALLOW" or "DENY". */
		action?: AuthorizationPolicyAction | null;

		/** Output only. The timestamp when the resource was created. */
		createTime?: string | null;

		/** Optional. Free-text description of the resource. */
		description?: string | null;

		/** Optional. Set of label tags associated with the AuthorizationPolicy resource. */
		labels?: {[id: string]: string };

		/** Required. Name of the AuthorizationPolicy resource. It matches pattern `projects/{project}/locations/{location}/authorizationPolicies/`. */
		name?: string | null;

		/** Optional. List of rules to match. Note that at least one of the rules must match in order for the action specified in the 'action' field to be taken. A rule is a match if there is a matching source and destination. If left blank, the action specified in the `action` field will be applied on every request. */
		rules?: Array<Rule>;

		/** Output only. The timestamp when the resource was updated. */
		updateTime?: string | null;
	}

	/** AuthorizationPolicy is a resource that specifies how a server should authorize incoming connections. This resource in itself does not change the configuration unless it's attached to a target https proxy or endpoint config selector resource. */
	export interface AuthorizationPolicyFormProperties {

		/** Required. The action to take when a rule match is found. Possible values are "ALLOW" or "DENY". */
		action: FormControl<AuthorizationPolicyAction | null | undefined>,

		/** Output only. The timestamp when the resource was created. */
		createTime: FormControl<string | null | undefined>,

		/** Optional. Free-text description of the resource. */
		description: FormControl<string | null | undefined>,

		/** Optional. Set of label tags associated with the AuthorizationPolicy resource. */
		labels: FormControl<{[id: string]: string } | null | undefined>,

		/** Required. Name of the AuthorizationPolicy resource. It matches pattern `projects/{project}/locations/{location}/authorizationPolicies/`. */
		name: FormControl<string | null | undefined>,

		/** Output only. The timestamp when the resource was updated. */
		updateTime: FormControl<string | null | undefined>,
	}
	export function CreateAuthorizationPolicyFormGroup() {
		return new FormGroup<AuthorizationPolicyFormProperties>({
			action: new FormControl<AuthorizationPolicyAction | null | undefined>(undefined),
			createTime: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			labels: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			updateTime: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum AuthorizationPolicyAction { ACTION_UNSPECIFIED = 'ACTION_UNSPECIFIED', ALLOW = 'ALLOW', DENY = 'DENY' }


	/** Specification of rules. */
	export interface Rule {

		/** Optional. List of attributes for the traffic destination. All of the destinations must match. A destination is a match if a request matches all the specified hosts, ports, methods and headers. If not set, the action specified in the 'action' field will be applied without any rule checks for the destination. */
		destinations?: Array<Destination>;

		/** Optional. List of attributes for the traffic source. All of the sources must match. A source is a match if both principals and ip_blocks match. If not set, the action specified in the 'action' field will be applied without any rule checks for the source. */
		sources?: Array<Source>;
	}

	/** Specification of rules. */
	export interface RuleFormProperties {
	}
	export function CreateRuleFormGroup() {
		return new FormGroup<RuleFormProperties>({
		});

	}


	/** Specification of traffic destination attributes. */
	export interface Destination {

		/** Required. List of host names to match. Matched against the ":authority" header in http requests. At least one host should match. Each host can be an exact match, or a prefix match (example "mydomain.*") or a suffix match (example "*.myorg.com") or a presence (any) match "*". */
		hosts?: Array<string>;

		/** Specification of HTTP header match attributes. */
		httpHeaderMatch?: HttpHeaderMatch;

		/** Optional. A list of HTTP methods to match. At least one method should match. Should not be set for gRPC services. */
		methods?: Array<string>;

		/** Required. List of destination ports to match. At least one port should match. */
		ports?: Array<number>;
	}

	/** Specification of traffic destination attributes. */
	export interface DestinationFormProperties {
	}
	export function CreateDestinationFormGroup() {
		return new FormGroup<DestinationFormProperties>({
		});

	}


	/** Specification of HTTP header match attributes. */
	export interface HttpHeaderMatch {

		/** Required. The name of the HTTP header to match. For matching against the HTTP request's authority, use a headerMatch with the header name ":authority". For matching a request's method, use the headerName ":method". */
		headerName?: string | null;

		/** Required. The value of the header must match the regular expression specified in regexMatch. For regular expression grammar, please see: en.cppreference.com/w/cpp/regex/ecmascript For matching against a port specified in the HTTP request, use a headerMatch with headerName set to Host and a regular expression that satisfies the RFC2616 Host header's port specifier. */
		regexMatch?: string | null;
	}

	/** Specification of HTTP header match attributes. */
	export interface HttpHeaderMatchFormProperties {

		/** Required. The name of the HTTP header to match. For matching against the HTTP request's authority, use a headerMatch with the header name ":authority". For matching a request's method, use the headerName ":method". */
		headerName: FormControl<string | null | undefined>,

		/** Required. The value of the header must match the regular expression specified in regexMatch. For regular expression grammar, please see: en.cppreference.com/w/cpp/regex/ecmascript For matching against a port specified in the HTTP request, use a headerMatch with headerName set to Host and a regular expression that satisfies the RFC2616 Host header's port specifier. */
		regexMatch: FormControl<string | null | undefined>,
	}
	export function CreateHttpHeaderMatchFormGroup() {
		return new FormGroup<HttpHeaderMatchFormProperties>({
			headerName: new FormControl<string | null | undefined>(undefined),
			regexMatch: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Specification of traffic source attributes. */
	export interface Source {

		/** Optional. List of CIDR ranges to match based on source IP address. At least one IP block should match. Single IP (e.g., "1.2.3.4") and CIDR (e.g., "1.2.3.0/24") are supported. Authorization based on source IP alone should be avoided. The IP addresses of any load balancers or proxies should be considered untrusted. */
		ipBlocks?: Array<string>;

		/** Optional. List of peer identities to match for authorization. At least one principal should match. Each peer can be an exact match, or a prefix match (example, "namespace/*") or a suffix match (example, "service-account") or a presence match "*". Authorization based on the principal name without certificate validation (configured by ServerTlsPolicy resource) is considered insecure. */
		principals?: Array<string>;
	}

	/** Specification of traffic source attributes. */
	export interface SourceFormProperties {
	}
	export function CreateSourceFormGroup() {
		return new FormGroup<SourceFormProperties>({
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


	/** Specification of a TLS certificate provider instance. Workloads may have one or more CertificateProvider instances (plugins) and one of them is enabled and configured by specifying this message. Workloads use the values from this message to locate and load the CertificateProvider instance configuration. */
	export interface CertificateProviderInstance {

		/** Required. Plugin instance name, used to locate and load CertificateProvider instance configuration. Set to "google_cloud_private_spiffe" to use Certificate Authority Service certificate provider instance. */
		pluginInstance?: string | null;
	}

	/** Specification of a TLS certificate provider instance. Workloads may have one or more CertificateProvider instances (plugins) and one of them is enabled and configured by specifying this message. Workloads use the values from this message to locate and load the CertificateProvider instance configuration. */
	export interface CertificateProviderInstanceFormProperties {

		/** Required. Plugin instance name, used to locate and load CertificateProvider instance configuration. Set to "google_cloud_private_spiffe" to use Certificate Authority Service certificate provider instance. */
		pluginInstance: FormControl<string | null | undefined>,
	}
	export function CreateCertificateProviderInstanceFormGroup() {
		return new FormGroup<CertificateProviderInstanceFormProperties>({
			pluginInstance: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** ClientTlsPolicy is a resource that specifies how a client should authenticate connections to backends of a service. This resource itself does not affect configuration unless it is attached to a backend service resource. */
	export interface ClientTlsPolicy {

		/** Specification of certificate provider. Defines the mechanism to obtain the certificate and private key for peer to peer authentication. */
		clientCertificate?: GoogleCloudNetworksecurityV1CertificateProvider;

		/** Output only. The timestamp when the resource was created. */
		createTime?: string | null;

		/** Optional. Free-text description of the resource. */
		description?: string | null;

		/** Optional. Set of label tags associated with the resource. */
		labels?: {[id: string]: string };

		/** Required. Name of the ClientTlsPolicy resource. It matches the pattern `projects/locations/{location}/clientTlsPolicies/{client_tls_policy}` */
		name?: string | null;

		/** Optional. Defines the mechanism to obtain the Certificate Authority certificate to validate the server certificate. If empty, client does not validate the server certificate. */
		serverValidationCa?: Array<ValidationCA>;

		/** Optional. Server Name Indication string to present to the server during TLS handshake. E.g: "secure.example.com". */
		sni?: string | null;

		/** Output only. The timestamp when the resource was updated. */
		updateTime?: string | null;
	}

	/** ClientTlsPolicy is a resource that specifies how a client should authenticate connections to backends of a service. This resource itself does not affect configuration unless it is attached to a backend service resource. */
	export interface ClientTlsPolicyFormProperties {

		/** Output only. The timestamp when the resource was created. */
		createTime: FormControl<string | null | undefined>,

		/** Optional. Free-text description of the resource. */
		description: FormControl<string | null | undefined>,

		/** Optional. Set of label tags associated with the resource. */
		labels: FormControl<{[id: string]: string } | null | undefined>,

		/** Required. Name of the ClientTlsPolicy resource. It matches the pattern `projects/locations/{location}/clientTlsPolicies/{client_tls_policy}` */
		name: FormControl<string | null | undefined>,

		/** Optional. Server Name Indication string to present to the server during TLS handshake. E.g: "secure.example.com". */
		sni: FormControl<string | null | undefined>,

		/** Output only. The timestamp when the resource was updated. */
		updateTime: FormControl<string | null | undefined>,
	}
	export function CreateClientTlsPolicyFormGroup() {
		return new FormGroup<ClientTlsPolicyFormProperties>({
			createTime: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			labels: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			sni: new FormControl<string | null | undefined>(undefined),
			updateTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Specification of certificate provider. Defines the mechanism to obtain the certificate and private key for peer to peer authentication. */
	export interface GoogleCloudNetworksecurityV1CertificateProvider {

		/** Specification of a TLS certificate provider instance. Workloads may have one or more CertificateProvider instances (plugins) and one of them is enabled and configured by specifying this message. Workloads use the values from this message to locate and load the CertificateProvider instance configuration. */
		certificateProviderInstance?: CertificateProviderInstance;

		/** Specification of the GRPC Endpoint. */
		grpcEndpoint?: GoogleCloudNetworksecurityV1GrpcEndpoint;
	}

	/** Specification of certificate provider. Defines the mechanism to obtain the certificate and private key for peer to peer authentication. */
	export interface GoogleCloudNetworksecurityV1CertificateProviderFormProperties {
	}
	export function CreateGoogleCloudNetworksecurityV1CertificateProviderFormGroup() {
		return new FormGroup<GoogleCloudNetworksecurityV1CertificateProviderFormProperties>({
		});

	}


	/** Specification of the GRPC Endpoint. */
	export interface GoogleCloudNetworksecurityV1GrpcEndpoint {

		/** Required. The target URI of the gRPC endpoint. Only UDS path is supported, and should start with "unix:". */
		targetUri?: string | null;
	}

	/** Specification of the GRPC Endpoint. */
	export interface GoogleCloudNetworksecurityV1GrpcEndpointFormProperties {

		/** Required. The target URI of the gRPC endpoint. Only UDS path is supported, and should start with "unix:". */
		targetUri: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudNetworksecurityV1GrpcEndpointFormGroup() {
		return new FormGroup<GoogleCloudNetworksecurityV1GrpcEndpointFormProperties>({
			targetUri: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Specification of ValidationCA. Defines the mechanism to obtain the Certificate Authority certificate to validate the peer certificate. */
	export interface ValidationCA {

		/** Specification of a TLS certificate provider instance. Workloads may have one or more CertificateProvider instances (plugins) and one of them is enabled and configured by specifying this message. Workloads use the values from this message to locate and load the CertificateProvider instance configuration. */
		certificateProviderInstance?: CertificateProviderInstance;

		/** Specification of the GRPC Endpoint. */
		grpcEndpoint?: GoogleCloudNetworksecurityV1GrpcEndpoint;
	}

	/** Specification of ValidationCA. Defines the mechanism to obtain the Certificate Authority certificate to validate the peer certificate. */
	export interface ValidationCAFormProperties {
	}
	export function CreateValidationCAFormGroup() {
		return new FormGroup<ValidationCAFormProperties>({
		});

	}


	/** Request used by the CloneAddressGroupItems method. */
	export interface CloneAddressGroupItemsRequest {

		/** Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
		requestId?: string | null;

		/** Required. Source address group to clone items from. */
		sourceAddressGroup?: string | null;
	}

	/** Request used by the CloneAddressGroupItems method. */
	export interface CloneAddressGroupItemsRequestFormProperties {

		/** Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
		requestId: FormControl<string | null | undefined>,

		/** Required. Source address group to clone items from. */
		sourceAddressGroup: FormControl<string | null | undefined>,
	}
	export function CreateCloneAddressGroupItemsRequestFormGroup() {
		return new FormGroup<CloneAddressGroupItemsRequestFormProperties>({
			requestId: new FormControl<string | null | undefined>(undefined),
			sourceAddressGroup: new FormControl<string | null | undefined>(undefined),
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


	/** The GatewaySecurityPolicy resource contains a collection of GatewaySecurityPolicyRules and associated metadata. */
	export interface GatewaySecurityPolicy {

		/** Output only. The timestamp when the resource was created. */
		createTime?: string | null;

		/** Optional. Free-text description of the resource. */
		description?: string | null;

		/** Required. Name of the resource. Name is of the form projects/{project}/locations/{location}/gatewaySecurityPolicies/{gateway_security_policy} gateway_security_policy should match the pattern:(^[a-z]([a-z0-9-]{0,61}[a-z0-9])?$). */
		name?: string | null;

		/** Optional. Name of a TLS Inspection Policy resource that defines how TLS inspection will be performed for any rule(s) which enables it. */
		tlsInspectionPolicy?: string | null;

		/** Output only. The timestamp when the resource was updated. */
		updateTime?: string | null;
	}

	/** The GatewaySecurityPolicy resource contains a collection of GatewaySecurityPolicyRules and associated metadata. */
	export interface GatewaySecurityPolicyFormProperties {

		/** Output only. The timestamp when the resource was created. */
		createTime: FormControl<string | null | undefined>,

		/** Optional. Free-text description of the resource. */
		description: FormControl<string | null | undefined>,

		/** Required. Name of the resource. Name is of the form projects/{project}/locations/{location}/gatewaySecurityPolicies/{gateway_security_policy} gateway_security_policy should match the pattern:(^[a-z]([a-z0-9-]{0,61}[a-z0-9])?$). */
		name: FormControl<string | null | undefined>,

		/** Optional. Name of a TLS Inspection Policy resource that defines how TLS inspection will be performed for any rule(s) which enables it. */
		tlsInspectionPolicy: FormControl<string | null | undefined>,

		/** Output only. The timestamp when the resource was updated. */
		updateTime: FormControl<string | null | undefined>,
	}
	export function CreateGatewaySecurityPolicyFormGroup() {
		return new FormGroup<GatewaySecurityPolicyFormProperties>({
			createTime: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			tlsInspectionPolicy: new FormControl<string | null | undefined>(undefined),
			updateTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The GatewaySecurityPolicyRule resource is in a nested collection within a GatewaySecurityPolicy and represents a traffic matching condition and associated action to perform. */
	export interface GatewaySecurityPolicyRule {

		/** Optional. CEL expression for matching on L7/application level criteria. */
		applicationMatcher?: string | null;

		/** Required. Profile which tells what the primitive action should be. */
		basicProfile?: GatewaySecurityPolicyRuleBasicProfile | null;

		/** Output only. Time when the rule was created. */
		createTime?: string | null;

		/** Optional. Free-text description of the resource. */
		description?: string | null;

		/** Required. Whether the rule is enforced. */
		enabled?: boolean | null;

		/** Required. Immutable. Name of the resource. ame is the full resource name so projects/{project}/locations/{location}/gatewaySecurityPolicies/{gateway_security_policy}/rules/{rule} rule should match the pattern: (^[a-z]([a-z0-9-]{0,61}[a-z0-9])?$). */
		name?: string | null;

		/** Required. Priority of the rule. Lower number corresponds to higher precedence. */
		priority?: number | null;

		/** Required. CEL expression for matching on session criteria. */
		sessionMatcher?: string | null;

		/** Optional. Flag to enable TLS inspection of traffic matching on , can only be true if the parent GatewaySecurityPolicy references a TLSInspectionConfig. */
		tlsInspectionEnabled?: boolean | null;

		/** Output only. Time when the rule was updated. */
		updateTime?: string | null;
	}

	/** The GatewaySecurityPolicyRule resource is in a nested collection within a GatewaySecurityPolicy and represents a traffic matching condition and associated action to perform. */
	export interface GatewaySecurityPolicyRuleFormProperties {

		/** Optional. CEL expression for matching on L7/application level criteria. */
		applicationMatcher: FormControl<string | null | undefined>,

		/** Required. Profile which tells what the primitive action should be. */
		basicProfile: FormControl<GatewaySecurityPolicyRuleBasicProfile | null | undefined>,

		/** Output only. Time when the rule was created. */
		createTime: FormControl<string | null | undefined>,

		/** Optional. Free-text description of the resource. */
		description: FormControl<string | null | undefined>,

		/** Required. Whether the rule is enforced. */
		enabled: FormControl<boolean | null | undefined>,

		/** Required. Immutable. Name of the resource. ame is the full resource name so projects/{project}/locations/{location}/gatewaySecurityPolicies/{gateway_security_policy}/rules/{rule} rule should match the pattern: (^[a-z]([a-z0-9-]{0,61}[a-z0-9])?$). */
		name: FormControl<string | null | undefined>,

		/** Required. Priority of the rule. Lower number corresponds to higher precedence. */
		priority: FormControl<number | null | undefined>,

		/** Required. CEL expression for matching on session criteria. */
		sessionMatcher: FormControl<string | null | undefined>,

		/** Optional. Flag to enable TLS inspection of traffic matching on , can only be true if the parent GatewaySecurityPolicy references a TLSInspectionConfig. */
		tlsInspectionEnabled: FormControl<boolean | null | undefined>,

		/** Output only. Time when the rule was updated. */
		updateTime: FormControl<string | null | undefined>,
	}
	export function CreateGatewaySecurityPolicyRuleFormGroup() {
		return new FormGroup<GatewaySecurityPolicyRuleFormProperties>({
			applicationMatcher: new FormControl<string | null | undefined>(undefined),
			basicProfile: new FormControl<GatewaySecurityPolicyRuleBasicProfile | null | undefined>(undefined),
			createTime: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			enabled: new FormControl<boolean | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			priority: new FormControl<number | null | undefined>(undefined),
			sessionMatcher: new FormControl<string | null | undefined>(undefined),
			tlsInspectionEnabled: new FormControl<boolean | null | undefined>(undefined),
			updateTime: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum GatewaySecurityPolicyRuleBasicProfile { BASIC_PROFILE_UNSPECIFIED = 'BASIC_PROFILE_UNSPECIFIED', ALLOW = 'ALLOW', DENY = 'DENY' }


	/** Specifies the audit configuration for a service. The configuration determines which permission types are logged, and what identities, if any, are exempted from logging. An AuditConfig must have one or more AuditLogConfigs. If there are AuditConfigs for both `allServices` and a specific service, the union of the two AuditConfigs is used for that service: the log_types specified in each AuditConfig are enabled, and the exempted_members in each AuditLogConfig are exempted. Example Policy with multiple AuditConfigs: { "audit_configs": [ { "service": "allServices", "audit_log_configs": [ { "log_type": "DATA_READ", "exempted_members": [ "user:jose@example.com" ] }, { "log_type": "DATA_WRITE" }, { "log_type": "ADMIN_READ" } ] }, { "service": "sampleservice.googleapis.com", "audit_log_configs": [ { "log_type": "DATA_READ" }, { "log_type": "DATA_WRITE", "exempted_members": [ "user:aliya@example.com" ] } ] } ] } For sampleservice, this policy enables DATA_READ, DATA_WRITE and ADMIN_READ logging. It also exempts `jose@example.com` from DATA_READ logging, and `aliya@example.com` from DATA_WRITE logging. */
	export interface GoogleIamV1AuditConfig {

		/** The configuration for logging of each type of permission. */
		auditLogConfigs?: Array<GoogleIamV1AuditLogConfig>;

		/** Specifies a service that will be enabled for audit logging. For example, `storage.googleapis.com`, `cloudsql.googleapis.com`. `allServices` is a special value that covers all services. */
		service?: string | null;
	}

	/** Specifies the audit configuration for a service. The configuration determines which permission types are logged, and what identities, if any, are exempted from logging. An AuditConfig must have one or more AuditLogConfigs. If there are AuditConfigs for both `allServices` and a specific service, the union of the two AuditConfigs is used for that service: the log_types specified in each AuditConfig are enabled, and the exempted_members in each AuditLogConfig are exempted. Example Policy with multiple AuditConfigs: { "audit_configs": [ { "service": "allServices", "audit_log_configs": [ { "log_type": "DATA_READ", "exempted_members": [ "user:jose@example.com" ] }, { "log_type": "DATA_WRITE" }, { "log_type": "ADMIN_READ" } ] }, { "service": "sampleservice.googleapis.com", "audit_log_configs": [ { "log_type": "DATA_READ" }, { "log_type": "DATA_WRITE", "exempted_members": [ "user:aliya@example.com" ] } ] } ] } For sampleservice, this policy enables DATA_READ, DATA_WRITE and ADMIN_READ logging. It also exempts `jose@example.com` from DATA_READ logging, and `aliya@example.com` from DATA_WRITE logging. */
	export interface GoogleIamV1AuditConfigFormProperties {

		/** Specifies a service that will be enabled for audit logging. For example, `storage.googleapis.com`, `cloudsql.googleapis.com`. `allServices` is a special value that covers all services. */
		service: FormControl<string | null | undefined>,
	}
	export function CreateGoogleIamV1AuditConfigFormGroup() {
		return new FormGroup<GoogleIamV1AuditConfigFormProperties>({
			service: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Provides the configuration for logging a type of permissions. Example: { "audit_log_configs": [ { "log_type": "DATA_READ", "exempted_members": [ "user:jose@example.com" ] }, { "log_type": "DATA_WRITE" } ] } This enables 'DATA_READ' and 'DATA_WRITE' logging, while exempting jose@example.com from DATA_READ logging. */
	export interface GoogleIamV1AuditLogConfig {

		/** Specifies the identities that do not cause logging for this type of permission. Follows the same format of Binding.members. */
		exemptedMembers?: Array<string>;

		/** The log type that this config enables. */
		logType?: GoogleIamV1AuditLogConfigLogType | null;
	}

	/** Provides the configuration for logging a type of permissions. Example: { "audit_log_configs": [ { "log_type": "DATA_READ", "exempted_members": [ "user:jose@example.com" ] }, { "log_type": "DATA_WRITE" } ] } This enables 'DATA_READ' and 'DATA_WRITE' logging, while exempting jose@example.com from DATA_READ logging. */
	export interface GoogleIamV1AuditLogConfigFormProperties {

		/** The log type that this config enables. */
		logType: FormControl<GoogleIamV1AuditLogConfigLogType | null | undefined>,
	}
	export function CreateGoogleIamV1AuditLogConfigFormGroup() {
		return new FormGroup<GoogleIamV1AuditLogConfigFormProperties>({
			logType: new FormControl<GoogleIamV1AuditLogConfigLogType | null | undefined>(undefined),
		});

	}

	export enum GoogleIamV1AuditLogConfigLogType { LOG_TYPE_UNSPECIFIED = 'LOG_TYPE_UNSPECIFIED', ADMIN_READ = 'ADMIN_READ', DATA_WRITE = 'DATA_WRITE', DATA_READ = 'DATA_READ' }


	/** Associates `members`, or principals, with a `role`. */
	export interface GoogleIamV1Binding {

		/** Represents a textual expression in the Common Expression Language (CEL) syntax. CEL is a C-like expression language. The syntax and semantics of CEL are documented at https://github.com/google/cel-spec. Example (Comparison): title: "Summary size limit" description: "Determines if a summary is less than 100 chars" expression: "document.summary.size() < 100" Example (Equality): title: "Requestor is owner" description: "Determines if requestor is the document owner" expression: "document.owner == request.auth.claims.email" Example (Logic): title: "Public documents" description: "Determine whether the document should be publicly visible" expression: "document.type != 'private' && document.type != 'internal'" Example (Data Manipulation): title: "Notification string" description: "Create a notification string with a timestamp." expression: "'New message received at ' + string(document.create_time)" The exact variables and functions that may be referenced within an expression are determined by the service that evaluates it. See the service documentation for additional information. */
		condition?: Expr;

		/** Specifies the principals requesting access for a Google Cloud resource. `members` can have the following values: * `allUsers`: A special identifier that represents anyone who is on the internet; with or without a Google account. * `allAuthenticatedUsers`: A special identifier that represents anyone who is authenticated with a Google account or a service account. Does not include identities that come from external identity providers (IdPs) through identity federation. * `user:{emailid}`: An email address that represents a specific Google account. For example, `alice@example.com` . * `serviceAccount:{emailid}`: An email address that represents a Google service account. For example, `my-other-app@appspot.gserviceaccount.com`. * `serviceAccount:{projectid}.svc.id.goog[{namespace}/{kubernetes-sa}]`: An identifier for a [Kubernetes service account](https://cloud.google.com/kubernetes-engine/docs/how-to/kubernetes-service-accounts). For example, `my-project.svc.id.goog[my-namespace/my-kubernetes-sa]`. * `group:{emailid}`: An email address that represents a Google group. For example, `admins@example.com`. * `domain:{domain}`: The G Suite domain (primary) that represents all the users of that domain. For example, `google.com` or `example.com`. * `deleted:user:{emailid}?uid={uniqueid}`: An email address (plus unique identifier) representing a user that has been recently deleted. For example, `alice@example.com?uid=123456789012345678901`. If the user is recovered, this value reverts to `user:{emailid}` and the recovered user retains the role in the binding. * `deleted:serviceAccount:{emailid}?uid={uniqueid}`: An email address (plus unique identifier) representing a service account that has been recently deleted. For example, `my-other-app@appspot.gserviceaccount.com?uid=123456789012345678901`. If the service account is undeleted, this value reverts to `serviceAccount:{emailid}` and the undeleted service account retains the role in the binding. * `deleted:group:{emailid}?uid={uniqueid}`: An email address (plus unique identifier) representing a Google group that has been recently deleted. For example, `admins@example.com?uid=123456789012345678901`. If the group is recovered, this value reverts to `group:{emailid}` and the recovered group retains the role in the binding. */
		members?: Array<string>;

		/** Role that is assigned to the list of `members`, or principals. For example, `roles/viewer`, `roles/editor`, or `roles/owner`. */
		role?: string | null;
	}

	/** Associates `members`, or principals, with a `role`. */
	export interface GoogleIamV1BindingFormProperties {

		/** Role that is assigned to the list of `members`, or principals. For example, `roles/viewer`, `roles/editor`, or `roles/owner`. */
		role: FormControl<string | null | undefined>,
	}
	export function CreateGoogleIamV1BindingFormGroup() {
		return new FormGroup<GoogleIamV1BindingFormProperties>({
			role: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An Identity and Access Management (IAM) policy, which specifies access controls for Google Cloud resources. A `Policy` is a collection of `bindings`. A `binding` binds one or more `members`, or principals, to a single `role`. Principals can be user accounts, service accounts, Google groups, and domains (such as G Suite). A `role` is a named list of permissions; each `role` can be an IAM predefined role or a user-created custom role. For some types of Google Cloud resources, a `binding` can also specify a `condition`, which is a logical expression that allows access to a resource only if the expression evaluates to `true`. A condition can add constraints based on attributes of the request, the resource, or both. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies). **JSON example:** ``` { "bindings": [ { "role": "roles/resourcemanager.organizationAdmin", "members": [ "user:mike@example.com", "group:admins@example.com", "domain:google.com", "serviceAccount:my-project-id@appspot.gserviceaccount.com" ] }, { "role": "roles/resourcemanager.organizationViewer", "members": [ "user:eve@example.com" ], "condition": { "title": "expirable access", "description": "Does not grant access after Sep 2020", "expression": "request.time < timestamp('2020-10-01T00:00:00.000Z')", } } ], "etag": "BwWWja0YfJA=", "version": 3 } ``` **YAML example:** ``` bindings: - members: - user:mike@example.com - group:admins@example.com - domain:google.com - serviceAccount:my-project-id@appspot.gserviceaccount.com role: roles/resourcemanager.organizationAdmin - members: - user:eve@example.com role: roles/resourcemanager.organizationViewer condition: title: expirable access description: Does not grant access after Sep 2020 expression: request.time < timestamp('2020-10-01T00:00:00.000Z') etag: BwWWja0YfJA= version: 3 ``` For a description of IAM and its features, see the [IAM documentation](https://cloud.google.com/iam/docs/). */
	export interface GoogleIamV1Policy {

		/** Specifies cloud audit logging configuration for this policy. */
		auditConfigs?: Array<GoogleIamV1AuditConfig>;

		/** Associates a list of `members`, or principals, with a `role`. Optionally, may specify a `condition` that determines how and when the `bindings` are applied. Each of the `bindings` must contain at least one principal. The `bindings` in a `Policy` can refer to up to 1,500 principals; up to 250 of these principals can be Google groups. Each occurrence of a principal counts towards these limits. For example, if the `bindings` grant 50 different roles to `user:alice@example.com`, and not to any other principal, then you can add another 1,450 principals to the `bindings` in the `Policy`. */
		bindings?: Array<GoogleIamV1Binding>;

		/** `etag` is used for optimistic concurrency control as a way to help prevent simultaneous updates of a policy from overwriting each other. It is strongly suggested that systems make use of the `etag` in the read-modify-write cycle to perform policy updates in order to avoid race conditions: An `etag` is returned in the response to `getIamPolicy`, and systems are expected to put that etag in the request to `setIamPolicy` to ensure that their change will be applied to the same version of the policy. **Important:** If you use IAM Conditions, you must include the `etag` field whenever you call `setIamPolicy`. If you omit this field, then IAM allows you to overwrite a version `3` policy with a version `1` policy, and all of the conditions in the version `3` policy are lost. */
		etag?: string | null;

		/** Specifies the format of the policy. Valid values are `0`, `1`, and `3`. Requests that specify an invalid value are rejected. Any operation that affects conditional role bindings must specify version `3`. This requirement applies to the following operations: * Getting a policy that includes a conditional role binding * Adding a conditional role binding to a policy * Changing a conditional role binding in a policy * Removing any role binding, with or without a condition, from a policy that includes conditions **Important:** If you use IAM Conditions, you must include the `etag` field whenever you call `setIamPolicy`. If you omit this field, then IAM allows you to overwrite a version `3` policy with a version `1` policy, and all of the conditions in the version `3` policy are lost. If a policy does not include any conditions, operations on that policy may specify any valid version or leave the field unset. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies). */
		version?: number | null;
	}

	/** An Identity and Access Management (IAM) policy, which specifies access controls for Google Cloud resources. A `Policy` is a collection of `bindings`. A `binding` binds one or more `members`, or principals, to a single `role`. Principals can be user accounts, service accounts, Google groups, and domains (such as G Suite). A `role` is a named list of permissions; each `role` can be an IAM predefined role or a user-created custom role. For some types of Google Cloud resources, a `binding` can also specify a `condition`, which is a logical expression that allows access to a resource only if the expression evaluates to `true`. A condition can add constraints based on attributes of the request, the resource, or both. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies). **JSON example:** ``` { "bindings": [ { "role": "roles/resourcemanager.organizationAdmin", "members": [ "user:mike@example.com", "group:admins@example.com", "domain:google.com", "serviceAccount:my-project-id@appspot.gserviceaccount.com" ] }, { "role": "roles/resourcemanager.organizationViewer", "members": [ "user:eve@example.com" ], "condition": { "title": "expirable access", "description": "Does not grant access after Sep 2020", "expression": "request.time < timestamp('2020-10-01T00:00:00.000Z')", } } ], "etag": "BwWWja0YfJA=", "version": 3 } ``` **YAML example:** ``` bindings: - members: - user:mike@example.com - group:admins@example.com - domain:google.com - serviceAccount:my-project-id@appspot.gserviceaccount.com role: roles/resourcemanager.organizationAdmin - members: - user:eve@example.com role: roles/resourcemanager.organizationViewer condition: title: expirable access description: Does not grant access after Sep 2020 expression: request.time < timestamp('2020-10-01T00:00:00.000Z') etag: BwWWja0YfJA= version: 3 ``` For a description of IAM and its features, see the [IAM documentation](https://cloud.google.com/iam/docs/). */
	export interface GoogleIamV1PolicyFormProperties {

		/** `etag` is used for optimistic concurrency control as a way to help prevent simultaneous updates of a policy from overwriting each other. It is strongly suggested that systems make use of the `etag` in the read-modify-write cycle to perform policy updates in order to avoid race conditions: An `etag` is returned in the response to `getIamPolicy`, and systems are expected to put that etag in the request to `setIamPolicy` to ensure that their change will be applied to the same version of the policy. **Important:** If you use IAM Conditions, you must include the `etag` field whenever you call `setIamPolicy`. If you omit this field, then IAM allows you to overwrite a version `3` policy with a version `1` policy, and all of the conditions in the version `3` policy are lost. */
		etag: FormControl<string | null | undefined>,

		/** Specifies the format of the policy. Valid values are `0`, `1`, and `3`. Requests that specify an invalid value are rejected. Any operation that affects conditional role bindings must specify version `3`. This requirement applies to the following operations: * Getting a policy that includes a conditional role binding * Adding a conditional role binding to a policy * Changing a conditional role binding in a policy * Removing any role binding, with or without a condition, from a policy that includes conditions **Important:** If you use IAM Conditions, you must include the `etag` field whenever you call `setIamPolicy`. If you omit this field, then IAM allows you to overwrite a version `3` policy with a version `1` policy, and all of the conditions in the version `3` policy are lost. If a policy does not include any conditions, operations on that policy may specify any valid version or leave the field unset. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies). */
		version: FormControl<number | null | undefined>,
	}
	export function CreateGoogleIamV1PolicyFormGroup() {
		return new FormGroup<GoogleIamV1PolicyFormProperties>({
			etag: new FormControl<string | null | undefined>(undefined),
			version: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Request message for `SetIamPolicy` method. */
	export interface GoogleIamV1SetIamPolicyRequest {

		/** An Identity and Access Management (IAM) policy, which specifies access controls for Google Cloud resources. A `Policy` is a collection of `bindings`. A `binding` binds one or more `members`, or principals, to a single `role`. Principals can be user accounts, service accounts, Google groups, and domains (such as G Suite). A `role` is a named list of permissions; each `role` can be an IAM predefined role or a user-created custom role. For some types of Google Cloud resources, a `binding` can also specify a `condition`, which is a logical expression that allows access to a resource only if the expression evaluates to `true`. A condition can add constraints based on attributes of the request, the resource, or both. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies). **JSON example:** ``` { "bindings": [ { "role": "roles/resourcemanager.organizationAdmin", "members": [ "user:mike@example.com", "group:admins@example.com", "domain:google.com", "serviceAccount:my-project-id@appspot.gserviceaccount.com" ] }, { "role": "roles/resourcemanager.organizationViewer", "members": [ "user:eve@example.com" ], "condition": { "title": "expirable access", "description": "Does not grant access after Sep 2020", "expression": "request.time < timestamp('2020-10-01T00:00:00.000Z')", } } ], "etag": "BwWWja0YfJA=", "version": 3 } ``` **YAML example:** ``` bindings: - members: - user:mike@example.com - group:admins@example.com - domain:google.com - serviceAccount:my-project-id@appspot.gserviceaccount.com role: roles/resourcemanager.organizationAdmin - members: - user:eve@example.com role: roles/resourcemanager.organizationViewer condition: title: expirable access description: Does not grant access after Sep 2020 expression: request.time < timestamp('2020-10-01T00:00:00.000Z') etag: BwWWja0YfJA= version: 3 ``` For a description of IAM and its features, see the [IAM documentation](https://cloud.google.com/iam/docs/). */
		policy?: GoogleIamV1Policy;

		/** OPTIONAL: A FieldMask specifying which fields of the policy to modify. Only the fields in the mask will be modified. If no mask is provided, the following default mask is used: `paths: "bindings, etag"` */
		updateMask?: string | null;
	}

	/** Request message for `SetIamPolicy` method. */
	export interface GoogleIamV1SetIamPolicyRequestFormProperties {

		/** OPTIONAL: A FieldMask specifying which fields of the policy to modify. Only the fields in the mask will be modified. If no mask is provided, the following default mask is used: `paths: "bindings, etag"` */
		updateMask: FormControl<string | null | undefined>,
	}
	export function CreateGoogleIamV1SetIamPolicyRequestFormGroup() {
		return new FormGroup<GoogleIamV1SetIamPolicyRequestFormProperties>({
			updateMask: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Request message for `TestIamPermissions` method. */
	export interface GoogleIamV1TestIamPermissionsRequest {

		/** The set of permissions to check for the `resource`. Permissions with wildcards (such as `*` or `storage.*`) are not allowed. For more information see [IAM Overview](https://cloud.google.com/iam/docs/overview#permissions). */
		permissions?: Array<string>;
	}

	/** Request message for `TestIamPermissions` method. */
	export interface GoogleIamV1TestIamPermissionsRequestFormProperties {
	}
	export function CreateGoogleIamV1TestIamPermissionsRequestFormGroup() {
		return new FormGroup<GoogleIamV1TestIamPermissionsRequestFormProperties>({
		});

	}


	/** Response message for `TestIamPermissions` method. */
	export interface GoogleIamV1TestIamPermissionsResponse {

		/** A subset of `TestPermissionsRequest.permissions` that the caller is allowed. */
		permissions?: Array<string>;
	}

	/** Response message for `TestIamPermissions` method. */
	export interface GoogleIamV1TestIamPermissionsResponseFormProperties {
	}
	export function CreateGoogleIamV1TestIamPermissionsResponseFormGroup() {
		return new FormGroup<GoogleIamV1TestIamPermissionsResponseFormProperties>({
		});

	}


	/** Response of the ListAddressGroupReferences method. */
	export interface ListAddressGroupReferencesResponse {

		/** A list of references that matches the specified filter in the request. */
		addressGroupReferences?: Array<ListAddressGroupReferencesResponseAddressGroupReference>;

		/** If there might be more results than those appearing in this response, then `next_page_token` is included. To get the next set of results, call this method again using the value of `next_page_token` as `page_token`. */
		nextPageToken?: string | null;
	}

	/** Response of the ListAddressGroupReferences method. */
	export interface ListAddressGroupReferencesResponseFormProperties {

		/** If there might be more results than those appearing in this response, then `next_page_token` is included. To get the next set of results, call this method again using the value of `next_page_token` as `page_token`. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListAddressGroupReferencesResponseFormGroup() {
		return new FormGroup<ListAddressGroupReferencesResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The Reference of AddressGroup. */
	export interface ListAddressGroupReferencesResponseAddressGroupReference {

		/** FirewallPolicy that is using the Address Group. */
		firewallPolicy?: string | null;

		/** Rule priority of the FirewallPolicy that is using the Address Group. */
		rulePriority?: number | null;
	}

	/** The Reference of AddressGroup. */
	export interface ListAddressGroupReferencesResponseAddressGroupReferenceFormProperties {

		/** FirewallPolicy that is using the Address Group. */
		firewallPolicy: FormControl<string | null | undefined>,

		/** Rule priority of the FirewallPolicy that is using the Address Group. */
		rulePriority: FormControl<number | null | undefined>,
	}
	export function CreateListAddressGroupReferencesResponseAddressGroupReferenceFormGroup() {
		return new FormGroup<ListAddressGroupReferencesResponseAddressGroupReferenceFormProperties>({
			firewallPolicy: new FormControl<string | null | undefined>(undefined),
			rulePriority: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Response returned by the ListAddressGroups method. */
	export interface ListAddressGroupsResponse {

		/** List of AddressGroups resources. */
		addressGroups?: Array<AddressGroup>;

		/** If there might be more results than those appearing in this response, then `next_page_token` is included. To get the next set of results, call this method again using the value of `next_page_token` as `page_token`. */
		nextPageToken?: string | null;
	}

	/** Response returned by the ListAddressGroups method. */
	export interface ListAddressGroupsResponseFormProperties {

		/** If there might be more results than those appearing in this response, then `next_page_token` is included. To get the next set of results, call this method again using the value of `next_page_token` as `page_token`. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListAddressGroupsResponseFormGroup() {
		return new FormGroup<ListAddressGroupsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response returned by the ListAuthorizationPolicies method. */
	export interface ListAuthorizationPoliciesResponse {

		/** List of AuthorizationPolicies resources. */
		authorizationPolicies?: Array<AuthorizationPolicy>;

		/** If there might be more results than those appearing in this response, then `next_page_token` is included. To get the next set of results, call this method again using the value of `next_page_token` as `page_token`. */
		nextPageToken?: string | null;
	}

	/** Response returned by the ListAuthorizationPolicies method. */
	export interface ListAuthorizationPoliciesResponseFormProperties {

		/** If there might be more results than those appearing in this response, then `next_page_token` is included. To get the next set of results, call this method again using the value of `next_page_token` as `page_token`. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListAuthorizationPoliciesResponseFormGroup() {
		return new FormGroup<ListAuthorizationPoliciesResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response returned by the ListClientTlsPolicies method. */
	export interface ListClientTlsPoliciesResponse {

		/** List of ClientTlsPolicy resources. */
		clientTlsPolicies?: Array<ClientTlsPolicy>;

		/** If there might be more results than those appearing in this response, then `next_page_token` is included. To get the next set of results, call this method again using the value of `next_page_token` as `page_token`. */
		nextPageToken?: string | null;
	}

	/** Response returned by the ListClientTlsPolicies method. */
	export interface ListClientTlsPoliciesResponseFormProperties {

		/** If there might be more results than those appearing in this response, then `next_page_token` is included. To get the next set of results, call this method again using the value of `next_page_token` as `page_token`. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListClientTlsPoliciesResponseFormGroup() {
		return new FormGroup<ListClientTlsPoliciesResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response returned by the ListGatewaySecurityPolicies method. */
	export interface ListGatewaySecurityPoliciesResponse {

		/** List of GatewaySecurityPolicies resources. */
		gatewaySecurityPolicies?: Array<GatewaySecurityPolicy>;

		/** If there might be more results than those appearing in this response, then 'next_page_token' is included. To get the next set of results, call this method again using the value of 'next_page_token' as 'page_token'. */
		nextPageToken?: string | null;

		/** Locations that could not be reached. */
		unreachable?: Array<string>;
	}

	/** Response returned by the ListGatewaySecurityPolicies method. */
	export interface ListGatewaySecurityPoliciesResponseFormProperties {

		/** If there might be more results than those appearing in this response, then 'next_page_token' is included. To get the next set of results, call this method again using the value of 'next_page_token' as 'page_token'. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListGatewaySecurityPoliciesResponseFormGroup() {
		return new FormGroup<ListGatewaySecurityPoliciesResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response returned by the ListGatewaySecurityPolicyRules method. */
	export interface ListGatewaySecurityPolicyRulesResponse {

		/** List of GatewaySecurityPolicyRule resources. */
		gatewaySecurityPolicyRules?: Array<GatewaySecurityPolicyRule>;

		/** If there might be more results than those appearing in this response, then 'next_page_token' is included. To get the next set of results, call this method again using the value of 'next_page_token' as 'page_token'. */
		nextPageToken?: string | null;

		/** Locations that could not be reached. */
		unreachable?: Array<string>;
	}

	/** Response returned by the ListGatewaySecurityPolicyRules method. */
	export interface ListGatewaySecurityPolicyRulesResponseFormProperties {

		/** If there might be more results than those appearing in this response, then 'next_page_token' is included. To get the next set of results, call this method again using the value of 'next_page_token' as 'page_token'. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListGatewaySecurityPolicyRulesResponseFormGroup() {
		return new FormGroup<ListGatewaySecurityPolicyRulesResponseFormProperties>({
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


	/** Response returned by the ListServerTlsPolicies method. */
	export interface ListServerTlsPoliciesResponse {

		/** If there might be more results than those appearing in this response, then `next_page_token` is included. To get the next set of results, call this method again using the value of `next_page_token` as `page_token`. */
		nextPageToken?: string | null;

		/** List of ServerTlsPolicy resources. */
		serverTlsPolicies?: Array<ServerTlsPolicy>;
	}

	/** Response returned by the ListServerTlsPolicies method. */
	export interface ListServerTlsPoliciesResponseFormProperties {

		/** If there might be more results than those appearing in this response, then `next_page_token` is included. To get the next set of results, call this method again using the value of `next_page_token` as `page_token`. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListServerTlsPoliciesResponseFormGroup() {
		return new FormGroup<ListServerTlsPoliciesResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** ServerTlsPolicy is a resource that specifies how a server should authenticate incoming requests. This resource itself does not affect configuration unless it is attached to a target HTTPS proxy or endpoint config selector resource. ServerTlsPolicy in the form accepted by external HTTPS load balancers can be attached only to TargetHttpsProxy with an `EXTERNAL` or `EXTERNAL_MANAGED` load balancing scheme. Traffic Director compatible ServerTlsPolicies can be attached to EndpointPolicy and TargetHttpsProxy with Traffic Director `INTERNAL_SELF_MANAGED` load balancing scheme. */
	export interface ServerTlsPolicy {

		/** This field applies only for Traffic Director policies. It is must be set to false for external HTTPS load balancer policies. Determines if server allows plaintext connections. If set to true, server allows plain text connections. By default, it is set to false. This setting is not exclusive of other encryption modes. For example, if `allow_open` and `mtls_policy` are set, server allows both plain text and mTLS connections. See documentation of other encryption modes to confirm compatibility. Consider using it if you wish to upgrade in place your deployment to TLS while having mixed TLS and non-TLS traffic reaching port :80. */
		allowOpen?: boolean | null;

		/** Output only. The timestamp when the resource was created. */
		createTime?: string | null;

		/** Free-text description of the resource. */
		description?: string | null;

		/** Set of label tags associated with the resource. */
		labels?: {[id: string]: string };

		/** Specification of the MTLSPolicy. */
		mtlsPolicy?: MTLSPolicy;

		/** Required. Name of the ServerTlsPolicy resource. It matches the pattern `projects/locations/{location}/serverTlsPolicies/{server_tls_policy}` */
		name?: string | null;

		/** Specification of certificate provider. Defines the mechanism to obtain the certificate and private key for peer to peer authentication. */
		serverCertificate?: GoogleCloudNetworksecurityV1CertificateProvider;

		/** Output only. The timestamp when the resource was updated. */
		updateTime?: string | null;
	}

	/** ServerTlsPolicy is a resource that specifies how a server should authenticate incoming requests. This resource itself does not affect configuration unless it is attached to a target HTTPS proxy or endpoint config selector resource. ServerTlsPolicy in the form accepted by external HTTPS load balancers can be attached only to TargetHttpsProxy with an `EXTERNAL` or `EXTERNAL_MANAGED` load balancing scheme. Traffic Director compatible ServerTlsPolicies can be attached to EndpointPolicy and TargetHttpsProxy with Traffic Director `INTERNAL_SELF_MANAGED` load balancing scheme. */
	export interface ServerTlsPolicyFormProperties {

		/** This field applies only for Traffic Director policies. It is must be set to false for external HTTPS load balancer policies. Determines if server allows plaintext connections. If set to true, server allows plain text connections. By default, it is set to false. This setting is not exclusive of other encryption modes. For example, if `allow_open` and `mtls_policy` are set, server allows both plain text and mTLS connections. See documentation of other encryption modes to confirm compatibility. Consider using it if you wish to upgrade in place your deployment to TLS while having mixed TLS and non-TLS traffic reaching port :80. */
		allowOpen: FormControl<boolean | null | undefined>,

		/** Output only. The timestamp when the resource was created. */
		createTime: FormControl<string | null | undefined>,

		/** Free-text description of the resource. */
		description: FormControl<string | null | undefined>,

		/** Set of label tags associated with the resource. */
		labels: FormControl<{[id: string]: string } | null | undefined>,

		/** Required. Name of the ServerTlsPolicy resource. It matches the pattern `projects/locations/{location}/serverTlsPolicies/{server_tls_policy}` */
		name: FormControl<string | null | undefined>,

		/** Output only. The timestamp when the resource was updated. */
		updateTime: FormControl<string | null | undefined>,
	}
	export function CreateServerTlsPolicyFormGroup() {
		return new FormGroup<ServerTlsPolicyFormProperties>({
			allowOpen: new FormControl<boolean | null | undefined>(undefined),
			createTime: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			labels: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			updateTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Specification of the MTLSPolicy. */
	export interface MTLSPolicy {

		/** Required if the policy is to be used with Traffic Director. For external HTTPS load balancers it must be empty. Defines the mechanism to obtain the Certificate Authority certificate to validate the client certificate. */
		clientValidationCa?: Array<ValidationCA>;

		/** When the client presents an invalid certificate or no certificate to the load balancer, the `client_validation_mode` specifies how the client connection is handled. Required if the policy is to be used with the external HTTPS load balancing. For Traffic Director it must be empty. */
		clientValidationMode?: MTLSPolicyClientValidationMode | null;

		/** Reference to the TrustConfig from certificatemanager.googleapis.com namespace. If specified, the chain validation will be performed against certificates configured in the given TrustConfig. Allowed only if the policy is to be used with external HTTPS load balancers. */
		clientValidationTrustConfig?: string | null;
	}

	/** Specification of the MTLSPolicy. */
	export interface MTLSPolicyFormProperties {

		/** When the client presents an invalid certificate or no certificate to the load balancer, the `client_validation_mode` specifies how the client connection is handled. Required if the policy is to be used with the external HTTPS load balancing. For Traffic Director it must be empty. */
		clientValidationMode: FormControl<MTLSPolicyClientValidationMode | null | undefined>,

		/** Reference to the TrustConfig from certificatemanager.googleapis.com namespace. If specified, the chain validation will be performed against certificates configured in the given TrustConfig. Allowed only if the policy is to be used with external HTTPS load balancers. */
		clientValidationTrustConfig: FormControl<string | null | undefined>,
	}
	export function CreateMTLSPolicyFormGroup() {
		return new FormGroup<MTLSPolicyFormProperties>({
			clientValidationMode: new FormControl<MTLSPolicyClientValidationMode | null | undefined>(undefined),
			clientValidationTrustConfig: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum MTLSPolicyClientValidationMode { CLIENT_VALIDATION_MODE_UNSPECIFIED = 'CLIENT_VALIDATION_MODE_UNSPECIFIED', ALLOW_INVALID_OR_MISSING_CLIENT_CERT = 'ALLOW_INVALID_OR_MISSING_CLIENT_CERT', REJECT_INVALID = 'REJECT_INVALID' }


	/** Response returned by the ListTlsInspectionPolicies method. */
	export interface ListTlsInspectionPoliciesResponse {

		/** If there might be more results than those appearing in this response, then 'next_page_token' is included. To get the next set of results, call this method again using the value of 'next_page_token' as 'page_token'. */
		nextPageToken?: string | null;

		/** List of TlsInspectionPolicies resources. */
		tlsInspectionPolicies?: Array<TlsInspectionPolicy>;

		/** Locations that could not be reached. */
		unreachable?: Array<string>;
	}

	/** Response returned by the ListTlsInspectionPolicies method. */
	export interface ListTlsInspectionPoliciesResponseFormProperties {

		/** If there might be more results than those appearing in this response, then 'next_page_token' is included. To get the next set of results, call this method again using the value of 'next_page_token' as 'page_token'. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListTlsInspectionPoliciesResponseFormGroup() {
		return new FormGroup<ListTlsInspectionPoliciesResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The TlsInspectionPolicy resource contains references to CA pools in Certificate Authority Service and associated metadata. */
	export interface TlsInspectionPolicy {

		/** Required. A CA pool resource used to issue interception certificates. The CA pool string has a relative resource path following the form "projects/{project}/locations/{location}/caPools/{ca_pool}". */
		caPool?: string | null;

		/** Output only. The timestamp when the resource was created. */
		createTime?: string | null;

		/** Optional. List of custom TLS cipher suites selected. This field is valid only if the selected tls_feature_profile is CUSTOM. The compute.SslPoliciesService.ListAvailableFeatures method returns the set of features that can be specified in this list. Note that Secure Web Proxy does not yet honor this field. */
		customTlsFeatures?: Array<string>;

		/** Optional. Free-text description of the resource. */
		description?: string | null;

		/** Optional. If FALSE (the default), use our default set of public CAs in addition to any CAs specified in trust_config. These public CAs are currently based on the Mozilla Root Program and are subject to change over time. If TRUE, do not accept our default set of public CAs. Only CAs specified in trust_config will be accepted. This defaults to FALSE (use public CAs in addition to trust_config) for backwards compatibility, but trusting public root CAs is *not recommended* unless the traffic in question is outbound to public web servers. When possible, prefer setting this to "false" and explicitly specifying trusted CAs and certificates in a TrustConfig. Note that Secure Web Proxy does not yet honor this field. */
		excludePublicCaSet?: boolean | null;

		/** Optional. Minimum TLS version that the firewall should use when negotiating connections with both clients and servers. If this is not set, then the default value is to allow the broadest set of clients and servers (TLS 1.0 or higher). Setting this to more restrictive values may improve security, but may also prevent the firewall from connecting to some clients or servers. Note that Secure Web Proxy does not yet honor this field. */
		minTlsVersion?: TlsInspectionPolicyMinTlsVersion | null;

		/** Required. Name of the resource. Name is of the form projects/{project}/locations/{location}/tlsInspectionPolicies/{tls_inspection_policy} tls_inspection_policy should match the pattern:(^[a-z]([a-z0-9-]{0,61}[a-z0-9])?$). */
		name?: string | null;

		/** Optional. The selected Profile. If this is not set, then the default value is to allow the broadest set of clients and servers ("PROFILE_COMPATIBLE"). Setting this to more restrictive values may improve security, but may also prevent the TLS inspection proxy from connecting to some clients or servers. Note that Secure Web Proxy does not yet honor this field. */
		tlsFeatureProfile?: TlsInspectionPolicyTlsFeatureProfile | null;

		/** Optional. A TrustConfig resource used when making a connection to the TLS server. This is a relative resource path following the form "projects/{project}/locations/{location}/trustConfigs/{trust_config}". This is necessary to intercept TLS connections to servers with certificates signed by a private CA or self-signed certificates. Note that Secure Web Proxy does not yet honor this field. */
		trustConfig?: string | null;

		/** Output only. The timestamp when the resource was updated. */
		updateTime?: string | null;
	}

	/** The TlsInspectionPolicy resource contains references to CA pools in Certificate Authority Service and associated metadata. */
	export interface TlsInspectionPolicyFormProperties {

		/** Required. A CA pool resource used to issue interception certificates. The CA pool string has a relative resource path following the form "projects/{project}/locations/{location}/caPools/{ca_pool}". */
		caPool: FormControl<string | null | undefined>,

		/** Output only. The timestamp when the resource was created. */
		createTime: FormControl<string | null | undefined>,

		/** Optional. Free-text description of the resource. */
		description: FormControl<string | null | undefined>,

		/** Optional. If FALSE (the default), use our default set of public CAs in addition to any CAs specified in trust_config. These public CAs are currently based on the Mozilla Root Program and are subject to change over time. If TRUE, do not accept our default set of public CAs. Only CAs specified in trust_config will be accepted. This defaults to FALSE (use public CAs in addition to trust_config) for backwards compatibility, but trusting public root CAs is *not recommended* unless the traffic in question is outbound to public web servers. When possible, prefer setting this to "false" and explicitly specifying trusted CAs and certificates in a TrustConfig. Note that Secure Web Proxy does not yet honor this field. */
		excludePublicCaSet: FormControl<boolean | null | undefined>,

		/** Optional. Minimum TLS version that the firewall should use when negotiating connections with both clients and servers. If this is not set, then the default value is to allow the broadest set of clients and servers (TLS 1.0 or higher). Setting this to more restrictive values may improve security, but may also prevent the firewall from connecting to some clients or servers. Note that Secure Web Proxy does not yet honor this field. */
		minTlsVersion: FormControl<TlsInspectionPolicyMinTlsVersion | null | undefined>,

		/** Required. Name of the resource. Name is of the form projects/{project}/locations/{location}/tlsInspectionPolicies/{tls_inspection_policy} tls_inspection_policy should match the pattern:(^[a-z]([a-z0-9-]{0,61}[a-z0-9])?$). */
		name: FormControl<string | null | undefined>,

		/** Optional. The selected Profile. If this is not set, then the default value is to allow the broadest set of clients and servers ("PROFILE_COMPATIBLE"). Setting this to more restrictive values may improve security, but may also prevent the TLS inspection proxy from connecting to some clients or servers. Note that Secure Web Proxy does not yet honor this field. */
		tlsFeatureProfile: FormControl<TlsInspectionPolicyTlsFeatureProfile | null | undefined>,

		/** Optional. A TrustConfig resource used when making a connection to the TLS server. This is a relative resource path following the form "projects/{project}/locations/{location}/trustConfigs/{trust_config}". This is necessary to intercept TLS connections to servers with certificates signed by a private CA or self-signed certificates. Note that Secure Web Proxy does not yet honor this field. */
		trustConfig: FormControl<string | null | undefined>,

		/** Output only. The timestamp when the resource was updated. */
		updateTime: FormControl<string | null | undefined>,
	}
	export function CreateTlsInspectionPolicyFormGroup() {
		return new FormGroup<TlsInspectionPolicyFormProperties>({
			caPool: new FormControl<string | null | undefined>(undefined),
			createTime: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			excludePublicCaSet: new FormControl<boolean | null | undefined>(undefined),
			minTlsVersion: new FormControl<TlsInspectionPolicyMinTlsVersion | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			tlsFeatureProfile: new FormControl<TlsInspectionPolicyTlsFeatureProfile | null | undefined>(undefined),
			trustConfig: new FormControl<string | null | undefined>(undefined),
			updateTime: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum TlsInspectionPolicyMinTlsVersion { TLS_VERSION_UNSPECIFIED = 'TLS_VERSION_UNSPECIFIED', TLS_1_0 = 'TLS_1_0', TLS_1_1 = 'TLS_1_1', TLS_1_2 = 'TLS_1_2', TLS_1_3 = 'TLS_1_3' }

	export enum TlsInspectionPolicyTlsFeatureProfile { PROFILE_UNSPECIFIED = 'PROFILE_UNSPECIFIED', PROFILE_COMPATIBLE = 'PROFILE_COMPATIBLE', PROFILE_MODERN = 'PROFILE_MODERN', PROFILE_RESTRICTED = 'PROFILE_RESTRICTED', PROFILE_CUSTOM = 'PROFILE_CUSTOM' }


	/** Response returned by the ListUrlLists method. */
	export interface ListUrlListsResponse {

		/** If there might be more results than those appearing in this response, then `next_page_token` is included. To get the next set of results, call this method again using the value of `next_page_token` as `page_token`. */
		nextPageToken?: string | null;

		/** Locations that could not be reached. */
		unreachable?: Array<string>;

		/** List of UrlList resources. */
		urlLists?: Array<UrlList>;
	}

	/** Response returned by the ListUrlLists method. */
	export interface ListUrlListsResponseFormProperties {

		/** If there might be more results than those appearing in this response, then `next_page_token` is included. To get the next set of results, call this method again using the value of `next_page_token` as `page_token`. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListUrlListsResponseFormGroup() {
		return new FormGroup<ListUrlListsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** UrlList proto helps users to set reusable, independently manageable lists of hosts, host patterns, URLs, URL patterns. */
	export interface UrlList {

		/** Output only. Time when the security policy was created. */
		createTime?: string | null;

		/** Optional. Free-text description of the resource. */
		description?: string | null;

		/** Required. Name of the resource provided by the user. Name is of the form projects/{project}/locations/{location}/urlLists/{url_list} url_list should match the pattern:(^[a-z]([a-z0-9-]{0,61}[a-z0-9])?$). */
		name?: string | null;

		/** Output only. Time when the security policy was updated. */
		updateTime?: string | null;

		/** Required. FQDNs and URLs. */
		values?: Array<string>;
	}

	/** UrlList proto helps users to set reusable, independently manageable lists of hosts, host patterns, URLs, URL patterns. */
	export interface UrlListFormProperties {

		/** Output only. Time when the security policy was created. */
		createTime: FormControl<string | null | undefined>,

		/** Optional. Free-text description of the resource. */
		description: FormControl<string | null | undefined>,

		/** Required. Name of the resource provided by the user. Name is of the form projects/{project}/locations/{location}/urlLists/{url_list} url_list should match the pattern:(^[a-z]([a-z0-9-]{0,61}[a-z0-9])?$). */
		name: FormControl<string | null | undefined>,

		/** Output only. Time when the security policy was updated. */
		updateTime: FormControl<string | null | undefined>,
	}
	export function CreateUrlListFormGroup() {
		return new FormGroup<UrlListFormProperties>({
			createTime: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			updateTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents the metadata of the long-running operation. */
	export interface OperationMetadata {

		/** Output only. API version used to start the operation. */
		apiVersion?: string | null;

		/** Output only. The time the operation was created. */
		createTime?: string | null;

		/** Output only. The time the operation finished running. */
		endTime?: string | null;

		/** Output only. Identifies whether the user has requested cancellation of the operation. Operations that have successfully been cancelled have Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`. */
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

		/** Output only. Identifies whether the user has requested cancellation of the operation. Operations that have successfully been cancelled have Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`. */
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


	/** Request used by the RemoveAddressGroupItems method. */
	export interface RemoveAddressGroupItemsRequest {

		/** Required. List of items to remove. */
		items?: Array<string>;

		/** Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
		requestId?: string | null;
	}

	/** Request used by the RemoveAddressGroupItems method. */
	export interface RemoveAddressGroupItemsRequestFormProperties {

		/** Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
		requestId: FormControl<string | null | undefined>,
	}
	export function CreateRemoveAddressGroupItemsRequestFormGroup() {
		return new FormGroup<RemoveAddressGroupItemsRequestFormProperties>({
			requestId: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Adds items to an address group.
		 * Post v1/{addressGroup}:addItems
		 * @param {string} addressGroup Required. A name of the AddressGroup to add items to. Must be in the format `projects|organization/locations/{location}/addressGroups/*`.
		 * @return {Operation} Successful response
		 */
		Networksecurity_projects_locations_addressGroups_addItems(addressGroup: string, requestBody: AddAddressGroupItemsRequest): Observable<Operation> {
			return this.http.post<Operation>(this.baseUri + 'v1/' + (addressGroup == null ? '' : encodeURIComponent(addressGroup)) + ':addItems', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Clones items from one address group to another.
		 * Post v1/{addressGroup}:cloneItems
		 * @param {string} addressGroup Required. A name of the AddressGroup to clone items to. Must be in the format `projects|organization/locations/{location}/addressGroups/*`.
		 * @return {Operation} Successful response
		 */
		Networksecurity_projects_locations_addressGroups_cloneItems(addressGroup: string, requestBody: CloneAddressGroupItemsRequest): Observable<Operation> {
			return this.http.post<Operation>(this.baseUri + 'v1/' + (addressGroup == null ? '' : encodeURIComponent(addressGroup)) + ':cloneItems', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists references of an address group.
		 * Get v1/{addressGroup}:listReferences
		 * @param {string} addressGroup Required. A name of the AddressGroup to clone items to. Must be in the format `projects|organization/locations/{location}/addressGroups/*`.
		 * @param {number} pageSize The maximum number of references to return. If unspecified, server will pick an appropriate default. Server may return fewer items than requested. A caller should only rely on response's next_page_token to determine if there are more AddressGroupUsers left to be queried.
		 * @param {string} pageToken The next_page_token value returned from a previous List request, if any.
		 * @return {ListAddressGroupReferencesResponse} Successful response
		 */
		Networksecurity_projects_locations_addressGroups_listReferences(addressGroup: string, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListAddressGroupReferencesResponse> {
			return this.http.get<ListAddressGroupReferencesResponse>(this.baseUri + 'v1/' + (addressGroup == null ? '' : encodeURIComponent(addressGroup)) + ':listReferences&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Removes items from an address group.
		 * Post v1/{addressGroup}:removeItems
		 * @param {string} addressGroup Required. A name of the AddressGroup to remove items from. Must be in the format `projects|organization/locations/{location}/addressGroups/*`.
		 * @return {Operation} Successful response
		 */
		Networksecurity_projects_locations_addressGroups_removeItems(addressGroup: string, requestBody: RemoveAddressGroupItemsRequest): Observable<Operation> {
			return this.http.post<Operation>(this.baseUri + 'v1/' + (addressGroup == null ? '' : encodeURIComponent(addressGroup)) + ':removeItems', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a single UrlList.
		 * Delete v1/{name}
		 * @param {string} name Required. A name of the UrlList to delete. Must be in the format `projects/locations/{location}/urlLists/*`.
		 * @param {boolean} force If set to true, any rules for this TlsInspectionPolicy will also be deleted. (Otherwise, the request will only work if the TlsInspectionPolicy has no rules.)
		 * @return {Operation} Successful response
		 */
		Networksecurity_projects_locations_urlLists_delete(name: string, force: boolean | null | undefined): Observable<Operation> {
			return this.http.delete<Operation>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + '&force=' + force, {});
		}

		/**
		 * Gets details of a single UrlList.
		 * Get v1/{name}
		 * @param {string} name Required. A name of the UrlList to get. Must be in the format `projects/locations/{location}/urlLists/*`.
		 * @return {UrlList} Successful response
		 */
		Networksecurity_projects_locations_urlLists_get(name: string): Observable<UrlList> {
			return this.http.get<UrlList>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)), {});
		}

		/**
		 * Updates the parameters of a single UrlList.
		 * Patch v1/{name}
		 * @param {string} name Required. Name of the resource provided by the user. Name is of the form projects/{project}/locations/{location}/urlLists/{url_list} url_list should match the pattern:(^[a-z]([a-z0-9-]{0,61}[a-z0-9])?$).
		 * @param {string} updateMask Optional. Field mask is used to specify the fields to be overwritten in the UrlList resource by the update. The fields specified in the update_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask. If the user does not provide a mask then all fields will be overwritten.
		 * @return {Operation} Successful response
		 */
		Networksecurity_projects_locations_urlLists_patch(name: string, updateMask: string | null | undefined, requestBody: UrlList): Observable<Operation> {
			return this.http.patch<Operation>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + '&updateMask=' + (updateMask == null ? '' : encodeURIComponent(updateMask)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists information about the supported locations for this service.
		 * Get v1/{name}/locations
		 * @param {string} name The resource that owns the locations collection, if applicable.
		 * @param {string} filter A filter to narrow down results to a preferred subset. The filtering language accepts strings like `"displayName=tokyo"`, and is documented in more detail in [AIP-160](https://google.aip.dev/160).
		 * @param {number} pageSize The maximum number of results to return. If not set, the service selects a default.
		 * @param {string} pageToken A page token received from the `next_page_token` field in the response. Send that page token to receive the subsequent page.
		 * @return {ListLocationsResponse} Successful response
		 */
		Networksecurity_projects_locations_list(name: string, filter: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListLocationsResponse> {
			return this.http.get<ListLocationsResponse>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + '/locations&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
		 * Get v1/{name}/operations
		 * @param {string} name The name of the operation's parent resource.
		 * @param {string} filter The standard list filter.
		 * @param {number} pageSize The standard list page size.
		 * @param {string} pageToken The standard list page token.
		 * @return {ListOperationsResponse} Successful response
		 */
		Networksecurity_projects_locations_operations_list(name: string, filter: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListOperationsResponse> {
			return this.http.get<ListOperationsResponse>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + '/operations&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
		 * Post v1/{name}:cancel
		 * @param {string} name The name of the operation resource to be cancelled.
		 * @return {Empty} Successful response
		 */
		Networksecurity_projects_locations_operations_cancel(name: string, requestBody: CancelOperationRequest): Observable<Empty> {
			return this.http.post<Empty>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + ':cancel', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists address groups in a given project and location.
		 * Get v1/{parent}/addressGroups
		 * @param {string} parent Required. The project and location from which the AddressGroups should be listed, specified in the format `projects/locations/{location}`.
		 * @param {number} pageSize Maximum number of AddressGroups to return per call.
		 * @param {string} pageToken The value returned by the last `ListAddressGroupsResponse` Indicates that this is a continuation of a prior `ListAddressGroups` call, and that the system should return the next page of data.
		 * @return {ListAddressGroupsResponse} Successful response
		 */
		Networksecurity_projects_locations_addressGroups_list(parent: string, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListAddressGroupsResponse> {
			return this.http.get<ListAddressGroupsResponse>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/addressGroups&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Creates a new address group in a given project and location.
		 * Post v1/{parent}/addressGroups
		 * @param {string} parent Required. The parent resource of the AddressGroup. Must be in the format `projects/locations/{location}`.
		 * @param {string} addressGroupId Required. Short name of the AddressGroup resource to be created. This value should be 1-63 characters long, containing only letters, numbers, hyphens, and underscores, and should not start with a number. E.g. "authz_policy".
		 * @param {string} requestId Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
		 * @return {Operation} Successful response
		 */
		Networksecurity_projects_locations_addressGroups_create(parent: string, addressGroupId: string | null | undefined, requestId: string | null | undefined, requestBody: AddressGroup): Observable<Operation> {
			return this.http.post<Operation>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/addressGroups&addressGroupId=' + (addressGroupId == null ? '' : encodeURIComponent(addressGroupId)) + '&requestId=' + (requestId == null ? '' : encodeURIComponent(requestId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists AuthorizationPolicies in a given project and location.
		 * Get v1/{parent}/authorizationPolicies
		 * @param {string} parent Required. The project and location from which the AuthorizationPolicies should be listed, specified in the format `projects/{project}/locations/{location}`.
		 * @param {number} pageSize Maximum number of AuthorizationPolicies to return per call.
		 * @param {string} pageToken The value returned by the last `ListAuthorizationPoliciesResponse` Indicates that this is a continuation of a prior `ListAuthorizationPolicies` call, and that the system should return the next page of data.
		 * @return {ListAuthorizationPoliciesResponse} Successful response
		 */
		Networksecurity_projects_locations_authorizationPolicies_list(parent: string, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListAuthorizationPoliciesResponse> {
			return this.http.get<ListAuthorizationPoliciesResponse>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/authorizationPolicies&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Creates a new AuthorizationPolicy in a given project and location.
		 * Post v1/{parent}/authorizationPolicies
		 * @param {string} parent Required. The parent resource of the AuthorizationPolicy. Must be in the format `projects/{project}/locations/{location}`.
		 * @param {string} authorizationPolicyId Required. Short name of the AuthorizationPolicy resource to be created. This value should be 1-63 characters long, containing only letters, numbers, hyphens, and underscores, and should not start with a number. E.g. "authz_policy".
		 * @return {Operation} Successful response
		 */
		Networksecurity_projects_locations_authorizationPolicies_create(parent: string, authorizationPolicyId: string | null | undefined, requestBody: AuthorizationPolicy): Observable<Operation> {
			return this.http.post<Operation>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/authorizationPolicies&authorizationPolicyId=' + (authorizationPolicyId == null ? '' : encodeURIComponent(authorizationPolicyId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists ClientTlsPolicies in a given project and location.
		 * Get v1/{parent}/clientTlsPolicies
		 * @param {string} parent Required. The project and location from which the ClientTlsPolicies should be listed, specified in the format `projects/locations/{location}`.
		 * @param {number} pageSize Maximum number of ClientTlsPolicies to return per call.
		 * @param {string} pageToken The value returned by the last `ListClientTlsPoliciesResponse` Indicates that this is a continuation of a prior `ListClientTlsPolicies` call, and that the system should return the next page of data.
		 * @return {ListClientTlsPoliciesResponse} Successful response
		 */
		Networksecurity_projects_locations_clientTlsPolicies_list(parent: string, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListClientTlsPoliciesResponse> {
			return this.http.get<ListClientTlsPoliciesResponse>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/clientTlsPolicies&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Creates a new ClientTlsPolicy in a given project and location.
		 * Post v1/{parent}/clientTlsPolicies
		 * @param {string} parent Required. The parent resource of the ClientTlsPolicy. Must be in the format `projects/locations/{location}`.
		 * @param {string} clientTlsPolicyId Required. Short name of the ClientTlsPolicy resource to be created. This value should be 1-63 characters long, containing only letters, numbers, hyphens, and underscores, and should not start with a number. E.g. "client_mtls_policy".
		 * @return {Operation} Successful response
		 */
		Networksecurity_projects_locations_clientTlsPolicies_create(parent: string, clientTlsPolicyId: string | null | undefined, requestBody: ClientTlsPolicy): Observable<Operation> {
			return this.http.post<Operation>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/clientTlsPolicies&clientTlsPolicyId=' + (clientTlsPolicyId == null ? '' : encodeURIComponent(clientTlsPolicyId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists GatewaySecurityPolicies in a given project and location.
		 * Get v1/{parent}/gatewaySecurityPolicies
		 * @param {string} parent Required. The project and location from which the GatewaySecurityPolicies should be listed, specified in the format `projects/{project}/locations/{location}`.
		 * @param {number} pageSize Maximum number of GatewaySecurityPolicies to return per call.
		 * @param {string} pageToken The value returned by the last 'ListGatewaySecurityPoliciesResponse' Indicates that this is a continuation of a prior 'ListGatewaySecurityPolicies' call, and that the system should return the next page of data.
		 * @return {ListGatewaySecurityPoliciesResponse} Successful response
		 */
		Networksecurity_projects_locations_gatewaySecurityPolicies_list(parent: string, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListGatewaySecurityPoliciesResponse> {
			return this.http.get<ListGatewaySecurityPoliciesResponse>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/gatewaySecurityPolicies&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Creates a new GatewaySecurityPolicy in a given project and location.
		 * Post v1/{parent}/gatewaySecurityPolicies
		 * @param {string} parent Required. The parent resource of the GatewaySecurityPolicy. Must be in the format `projects/{project}/locations/{location}`.
		 * @param {string} gatewaySecurityPolicyId Required. Short name of the GatewaySecurityPolicy resource to be created. This value should be 1-63 characters long, containing only letters, numbers, hyphens, and underscores, and should not start with a number. E.g. "gateway_security_policy1".
		 * @return {Operation} Successful response
		 */
		Networksecurity_projects_locations_gatewaySecurityPolicies_create(parent: string, gatewaySecurityPolicyId: string | null | undefined, requestBody: GatewaySecurityPolicy): Observable<Operation> {
			return this.http.post<Operation>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/gatewaySecurityPolicies&gatewaySecurityPolicyId=' + (gatewaySecurityPolicyId == null ? '' : encodeURIComponent(gatewaySecurityPolicyId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists GatewaySecurityPolicyRules in a given project and location.
		 * Get v1/{parent}/rules
		 * @param {string} parent Required. The project, location and GatewaySecurityPolicy from which the GatewaySecurityPolicyRules should be listed, specified in the format `projects/{project}/locations/{location}/gatewaySecurityPolicies/{gatewaySecurityPolicy}`.
		 * @param {number} pageSize Maximum number of GatewaySecurityPolicyRules to return per call.
		 * @param {string} pageToken The value returned by the last 'ListGatewaySecurityPolicyRulesResponse' Indicates that this is a continuation of a prior 'ListGatewaySecurityPolicyRules' call, and that the system should return the next page of data.
		 * @return {ListGatewaySecurityPolicyRulesResponse} Successful response
		 */
		Networksecurity_projects_locations_gatewaySecurityPolicies_rules_list(parent: string, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListGatewaySecurityPolicyRulesResponse> {
			return this.http.get<ListGatewaySecurityPolicyRulesResponse>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/rules&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Creates a new GatewaySecurityPolicy in a given project and location.
		 * Post v1/{parent}/rules
		 * @param {string} parent Required. The parent where this rule will be created. Format : projects/{project}/location/{location}/gatewaySecurityPolicies/*
		 * @param {string} gatewaySecurityPolicyRuleId The ID to use for the rule, which will become the final component of the rule's resource name. This value should be 4-63 characters, and valid characters are /a-z-/.
		 * @return {Operation} Successful response
		 */
		Networksecurity_projects_locations_gatewaySecurityPolicies_rules_create(parent: string, gatewaySecurityPolicyRuleId: string | null | undefined, requestBody: GatewaySecurityPolicyRule): Observable<Operation> {
			return this.http.post<Operation>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/rules&gatewaySecurityPolicyRuleId=' + (gatewaySecurityPolicyRuleId == null ? '' : encodeURIComponent(gatewaySecurityPolicyRuleId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists ServerTlsPolicies in a given project and location.
		 * Get v1/{parent}/serverTlsPolicies
		 * @param {string} parent Required. The project and location from which the ServerTlsPolicies should be listed, specified in the format `projects/locations/{location}`.
		 * @param {number} pageSize Maximum number of ServerTlsPolicies to return per call.
		 * @param {string} pageToken The value returned by the last `ListServerTlsPoliciesResponse` Indicates that this is a continuation of a prior `ListServerTlsPolicies` call, and that the system should return the next page of data.
		 * @return {ListServerTlsPoliciesResponse} Successful response
		 */
		Networksecurity_projects_locations_serverTlsPolicies_list(parent: string, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListServerTlsPoliciesResponse> {
			return this.http.get<ListServerTlsPoliciesResponse>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/serverTlsPolicies&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Creates a new ServerTlsPolicy in a given project and location.
		 * Post v1/{parent}/serverTlsPolicies
		 * @param {string} parent Required. The parent resource of the ServerTlsPolicy. Must be in the format `projects/locations/{location}`.
		 * @param {string} serverTlsPolicyId Required. Short name of the ServerTlsPolicy resource to be created. This value should be 1-63 characters long, containing only letters, numbers, hyphens, and underscores, and should not start with a number. E.g. "server_mtls_policy".
		 * @return {Operation} Successful response
		 */
		Networksecurity_projects_locations_serverTlsPolicies_create(parent: string, serverTlsPolicyId: string | null | undefined, requestBody: ServerTlsPolicy): Observable<Operation> {
			return this.http.post<Operation>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/serverTlsPolicies&serverTlsPolicyId=' + (serverTlsPolicyId == null ? '' : encodeURIComponent(serverTlsPolicyId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists TlsInspectionPolicies in a given project and location.
		 * Get v1/{parent}/tlsInspectionPolicies
		 * @param {string} parent Required. The project and location from which the TlsInspectionPolicies should be listed, specified in the format `projects/{project}/locations/{location}`.
		 * @param {number} pageSize Maximum number of TlsInspectionPolicies to return per call.
		 * @param {string} pageToken The value returned by the last 'ListTlsInspectionPoliciesResponse' Indicates that this is a continuation of a prior 'ListTlsInspectionPolicies' call, and that the system should return the next page of data.
		 * @return {ListTlsInspectionPoliciesResponse} Successful response
		 */
		Networksecurity_projects_locations_tlsInspectionPolicies_list(parent: string, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListTlsInspectionPoliciesResponse> {
			return this.http.get<ListTlsInspectionPoliciesResponse>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/tlsInspectionPolicies&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Creates a new TlsInspectionPolicy in a given project and location.
		 * Post v1/{parent}/tlsInspectionPolicies
		 * @param {string} parent Required. The parent resource of the TlsInspectionPolicy. Must be in the format `projects/{project}/locations/{location}`.
		 * @param {string} tlsInspectionPolicyId Required. Short name of the TlsInspectionPolicy resource to be created. This value should be 1-63 characters long, containing only letters, numbers, hyphens, and underscores, and should not start with a number. E.g. "tls_inspection_policy1".
		 * @return {Operation} Successful response
		 */
		Networksecurity_projects_locations_tlsInspectionPolicies_create(parent: string, tlsInspectionPolicyId: string | null | undefined, requestBody: TlsInspectionPolicy): Observable<Operation> {
			return this.http.post<Operation>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/tlsInspectionPolicies&tlsInspectionPolicyId=' + (tlsInspectionPolicyId == null ? '' : encodeURIComponent(tlsInspectionPolicyId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists UrlLists in a given project and location.
		 * Get v1/{parent}/urlLists
		 * @param {string} parent Required. The project and location from which the UrlLists should be listed, specified in the format `projects/{project}/locations/{location}`.
		 * @param {number} pageSize Maximum number of UrlLists to return per call.
		 * @param {string} pageToken The value returned by the last `ListUrlListsResponse` Indicates that this is a continuation of a prior `ListUrlLists` call, and that the system should return the next page of data.
		 * @return {ListUrlListsResponse} Successful response
		 */
		Networksecurity_projects_locations_urlLists_list(parent: string, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListUrlListsResponse> {
			return this.http.get<ListUrlListsResponse>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/urlLists&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Creates a new UrlList in a given project and location.
		 * Post v1/{parent}/urlLists
		 * @param {string} parent Required. The parent resource of the UrlList. Must be in the format `projects/locations/{location}`.
		 * @param {string} urlListId Required. Short name of the UrlList resource to be created. This value should be 1-63 characters long, containing only letters, numbers, hyphens, and underscores, and should not start with a number. E.g. "url_list".
		 * @return {Operation} Successful response
		 */
		Networksecurity_projects_locations_urlLists_create(parent: string, urlListId: string | null | undefined, requestBody: UrlList): Observable<Operation> {
			return this.http.post<Operation>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/urlLists&urlListId=' + (urlListId == null ? '' : encodeURIComponent(urlListId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
		 * Get v1/{resource}:getIamPolicy
		 * @param {string} resource REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
		 * @param {number} options_requestedPolicyVersion Optional. The maximum policy version that will be used to format the policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset. The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies).
		 * @return {GoogleIamV1Policy} Successful response
		 */
		Networksecurity_projects_locations_serverTlsPolicies_getIamPolicy(resource: string, options_requestedPolicyVersion: number | null | undefined): Observable<GoogleIamV1Policy> {
			return this.http.get<GoogleIamV1Policy>(this.baseUri + 'v1/' + (resource == null ? '' : encodeURIComponent(resource)) + ':getIamPolicy&options_requestedPolicyVersion=' + options_requestedPolicyVersion, {});
		}

		/**
		 * Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
		 * Post v1/{resource}:setIamPolicy
		 * @param {string} resource REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
		 * @return {GoogleIamV1Policy} Successful response
		 */
		Networksecurity_projects_locations_serverTlsPolicies_setIamPolicy(resource: string, requestBody: GoogleIamV1SetIamPolicyRequest): Observable<GoogleIamV1Policy> {
			return this.http.post<GoogleIamV1Policy>(this.baseUri + 'v1/' + (resource == null ? '' : encodeURIComponent(resource)) + ':setIamPolicy', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
		 * Post v1/{resource}:testIamPermissions
		 * @param {string} resource REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
		 * @return {GoogleIamV1TestIamPermissionsResponse} Successful response
		 */
		Networksecurity_projects_locations_serverTlsPolicies_testIamPermissions(resource: string, requestBody: GoogleIamV1TestIamPermissionsRequest): Observable<GoogleIamV1TestIamPermissionsResponse> {
			return this.http.post<GoogleIamV1TestIamPermissionsResponse>(this.baseUri + 'v1/' + (resource == null ? '' : encodeURIComponent(resource)) + ':testIamPermissions', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

}

