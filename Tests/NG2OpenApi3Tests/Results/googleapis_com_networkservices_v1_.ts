import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** Specifies the audit configuration for a service. The configuration determines which permission types are logged, and what identities, if any, are exempted from logging. An AuditConfig must have one or more AuditLogConfigs. If there are AuditConfigs for both `allServices` and a specific service, the union of the two AuditConfigs is used for that service: the log_types specified in each AuditConfig are enabled, and the exempted_members in each AuditLogConfig are exempted. Example Policy with multiple AuditConfigs: { "audit_configs": [ { "service": "allServices", "audit_log_configs": [ { "log_type": "DATA_READ", "exempted_members": [ "user:jose@example.com" ] }, { "log_type": "DATA_WRITE" }, { "log_type": "ADMIN_READ" } ] }, { "service": "sampleservice.googleapis.com", "audit_log_configs": [ { "log_type": "DATA_READ" }, { "log_type": "DATA_WRITE", "exempted_members": [ "user:aliya@example.com" ] } ] } ] } For sampleservice, this policy enables DATA_READ, DATA_WRITE and ADMIN_READ logging. It also exempts `jose@example.com` from DATA_READ logging, and `aliya@example.com` from DATA_WRITE logging. */
	export interface AuditConfig {

		/** The configuration for logging of each type of permission. */
		auditLogConfigs?: Array<AuditLogConfig>;

		/** Specifies a service that will be enabled for audit logging. For example, `storage.googleapis.com`, `cloudsql.googleapis.com`. `allServices` is a special value that covers all services. */
		service?: string | null;
	}

	/** Specifies the audit configuration for a service. The configuration determines which permission types are logged, and what identities, if any, are exempted from logging. An AuditConfig must have one or more AuditLogConfigs. If there are AuditConfigs for both `allServices` and a specific service, the union of the two AuditConfigs is used for that service: the log_types specified in each AuditConfig are enabled, and the exempted_members in each AuditLogConfig are exempted. Example Policy with multiple AuditConfigs: { "audit_configs": [ { "service": "allServices", "audit_log_configs": [ { "log_type": "DATA_READ", "exempted_members": [ "user:jose@example.com" ] }, { "log_type": "DATA_WRITE" }, { "log_type": "ADMIN_READ" } ] }, { "service": "sampleservice.googleapis.com", "audit_log_configs": [ { "log_type": "DATA_READ" }, { "log_type": "DATA_WRITE", "exempted_members": [ "user:aliya@example.com" ] } ] } ] } For sampleservice, this policy enables DATA_READ, DATA_WRITE and ADMIN_READ logging. It also exempts `jose@example.com` from DATA_READ logging, and `aliya@example.com` from DATA_WRITE logging. */
	export interface AuditConfigFormProperties {

		/** Specifies a service that will be enabled for audit logging. For example, `storage.googleapis.com`, `cloudsql.googleapis.com`. `allServices` is a special value that covers all services. */
		service: FormControl<string | null | undefined>,
	}
	export function CreateAuditConfigFormGroup() {
		return new FormGroup<AuditConfigFormProperties>({
			service: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Provides the configuration for logging a type of permissions. Example: { "audit_log_configs": [ { "log_type": "DATA_READ", "exempted_members": [ "user:jose@example.com" ] }, { "log_type": "DATA_WRITE" } ] } This enables 'DATA_READ' and 'DATA_WRITE' logging, while exempting jose@example.com from DATA_READ logging. */
	export interface AuditLogConfig {

		/** Specifies the identities that do not cause logging for this type of permission. Follows the same format of Binding.members. */
		exemptedMembers?: Array<string>;

		/** The log type that this config enables. */
		logType?: AuditLogConfigLogType | null;
	}

	/** Provides the configuration for logging a type of permissions. Example: { "audit_log_configs": [ { "log_type": "DATA_READ", "exempted_members": [ "user:jose@example.com" ] }, { "log_type": "DATA_WRITE" } ] } This enables 'DATA_READ' and 'DATA_WRITE' logging, while exempting jose@example.com from DATA_READ logging. */
	export interface AuditLogConfigFormProperties {

		/** The log type that this config enables. */
		logType: FormControl<AuditLogConfigLogType | null | undefined>,
	}
	export function CreateAuditLogConfigFormGroup() {
		return new FormGroup<AuditLogConfigFormProperties>({
			logType: new FormControl<AuditLogConfigLogType | null | undefined>(undefined),
		});

	}

	export enum AuditLogConfigLogType { LOG_TYPE_UNSPECIFIED = 'LOG_TYPE_UNSPECIFIED', ADMIN_READ = 'ADMIN_READ', DATA_WRITE = 'DATA_WRITE', DATA_READ = 'DATA_READ' }


	/** Associates `members`, or principals, with a `role`. */
	export interface Binding {

		/** Represents a textual expression in the Common Expression Language (CEL) syntax. CEL is a C-like expression language. The syntax and semantics of CEL are documented at https://github.com/google/cel-spec. Example (Comparison): title: "Summary size limit" description: "Determines if a summary is less than 100 chars" expression: "document.summary.size() < 100" Example (Equality): title: "Requestor is owner" description: "Determines if requestor is the document owner" expression: "document.owner == request.auth.claims.email" Example (Logic): title: "Public documents" description: "Determine whether the document should be publicly visible" expression: "document.type != 'private' && document.type != 'internal'" Example (Data Manipulation): title: "Notification string" description: "Create a notification string with a timestamp." expression: "'New message received at ' + string(document.create_time)" The exact variables and functions that may be referenced within an expression are determined by the service that evaluates it. See the service documentation for additional information. */
		condition?: Expr;

		/** Specifies the principals requesting access for a Google Cloud resource. `members` can have the following values: * `allUsers`: A special identifier that represents anyone who is on the internet; with or without a Google account. * `allAuthenticatedUsers`: A special identifier that represents anyone who is authenticated with a Google account or a service account. Does not include identities that come from external identity providers (IdPs) through identity federation. * `user:{emailid}`: An email address that represents a specific Google account. For example, `alice@example.com` . * `serviceAccount:{emailid}`: An email address that represents a Google service account. For example, `my-other-app@appspot.gserviceaccount.com`. * `serviceAccount:{projectid}.svc.id.goog[{namespace}/{kubernetes-sa}]`: An identifier for a [Kubernetes service account](https://cloud.google.com/kubernetes-engine/docs/how-to/kubernetes-service-accounts). For example, `my-project.svc.id.goog[my-namespace/my-kubernetes-sa]`. * `group:{emailid}`: An email address that represents a Google group. For example, `admins@example.com`. * `domain:{domain}`: The G Suite domain (primary) that represents all the users of that domain. For example, `google.com` or `example.com`. * `deleted:user:{emailid}?uid={uniqueid}`: An email address (plus unique identifier) representing a user that has been recently deleted. For example, `alice@example.com?uid=123456789012345678901`. If the user is recovered, this value reverts to `user:{emailid}` and the recovered user retains the role in the binding. * `deleted:serviceAccount:{emailid}?uid={uniqueid}`: An email address (plus unique identifier) representing a service account that has been recently deleted. For example, `my-other-app@appspot.gserviceaccount.com?uid=123456789012345678901`. If the service account is undeleted, this value reverts to `serviceAccount:{emailid}` and the undeleted service account retains the role in the binding. * `deleted:group:{emailid}?uid={uniqueid}`: An email address (plus unique identifier) representing a Google group that has been recently deleted. For example, `admins@example.com?uid=123456789012345678901`. If the group is recovered, this value reverts to `group:{emailid}` and the recovered group retains the role in the binding. */
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


	/** A definition of a matcher that selects endpoints to which the policies should be applied. */
	export interface EndpointMatcher {

		/** The matcher that is based on node metadata presented by xDS clients. */
		metadataLabelMatcher?: EndpointMatcherMetadataLabelMatcher;
	}

	/** A definition of a matcher that selects endpoints to which the policies should be applied. */
	export interface EndpointMatcherFormProperties {
	}
	export function CreateEndpointMatcherFormGroup() {
		return new FormGroup<EndpointMatcherFormProperties>({
		});

	}


	/** The matcher that is based on node metadata presented by xDS clients. */
	export interface EndpointMatcherMetadataLabelMatcher {

		/** Specifies how matching should be done. Supported values are: MATCH_ANY: At least one of the Labels specified in the matcher should match the metadata presented by xDS client. MATCH_ALL: The metadata presented by the xDS client should contain all of the labels specified here. The selection is determined based on the best match. For example, suppose there are three EndpointPolicy resources P1, P2 and P3 and if P1 has a the matcher as MATCH_ANY , P2 has MATCH_ALL , and P3 has MATCH_ALL . If a client with label connects, the config from P1 will be selected. If a client with label connects, the config from P2 will be selected. If a client with label connects, the config from P3 will be selected. If there is more than one best match, (for example, if a config P4 with selector exists and if a client with label connects), an error will be thrown. */
		metadataLabelMatchCriteria?: EndpointMatcherMetadataLabelMatcherMetadataLabelMatchCriteria | null;

		/** The list of label value pairs that must match labels in the provided metadata based on filterMatchCriteria This list can have at most 64 entries. The list can be empty if the match criteria is MATCH_ANY, to specify a wildcard match (i.e this matches any client). */
		metadataLabels?: Array<EndpointMatcherMetadataLabelMatcherMetadataLabels>;
	}

	/** The matcher that is based on node metadata presented by xDS clients. */
	export interface EndpointMatcherMetadataLabelMatcherFormProperties {

		/** Specifies how matching should be done. Supported values are: MATCH_ANY: At least one of the Labels specified in the matcher should match the metadata presented by xDS client. MATCH_ALL: The metadata presented by the xDS client should contain all of the labels specified here. The selection is determined based on the best match. For example, suppose there are three EndpointPolicy resources P1, P2 and P3 and if P1 has a the matcher as MATCH_ANY , P2 has MATCH_ALL , and P3 has MATCH_ALL . If a client with label connects, the config from P1 will be selected. If a client with label connects, the config from P2 will be selected. If a client with label connects, the config from P3 will be selected. If there is more than one best match, (for example, if a config P4 with selector exists and if a client with label connects), an error will be thrown. */
		metadataLabelMatchCriteria: FormControl<EndpointMatcherMetadataLabelMatcherMetadataLabelMatchCriteria | null | undefined>,
	}
	export function CreateEndpointMatcherMetadataLabelMatcherFormGroup() {
		return new FormGroup<EndpointMatcherMetadataLabelMatcherFormProperties>({
			metadataLabelMatchCriteria: new FormControl<EndpointMatcherMetadataLabelMatcherMetadataLabelMatchCriteria | null | undefined>(undefined),
		});

	}

	export enum EndpointMatcherMetadataLabelMatcherMetadataLabelMatchCriteria { METADATA_LABEL_MATCH_CRITERIA_UNSPECIFIED = 'METADATA_LABEL_MATCH_CRITERIA_UNSPECIFIED', MATCH_ANY = 'MATCH_ANY', MATCH_ALL = 'MATCH_ALL' }


	/** Defines a name-pair value for a single label. */
	export interface EndpointMatcherMetadataLabelMatcherMetadataLabels {

		/** Required. Label name presented as key in xDS Node Metadata. */
		labelName?: string | null;

		/** Required. Label value presented as value corresponding to the above key, in xDS Node Metadata. */
		labelValue?: string | null;
	}

	/** Defines a name-pair value for a single label. */
	export interface EndpointMatcherMetadataLabelMatcherMetadataLabelsFormProperties {

		/** Required. Label name presented as key in xDS Node Metadata. */
		labelName: FormControl<string | null | undefined>,

		/** Required. Label value presented as value corresponding to the above key, in xDS Node Metadata. */
		labelValue: FormControl<string | null | undefined>,
	}
	export function CreateEndpointMatcherMetadataLabelMatcherMetadataLabelsFormGroup() {
		return new FormGroup<EndpointMatcherMetadataLabelMatcherMetadataLabelsFormProperties>({
			labelName: new FormControl<string | null | undefined>(undefined),
			labelValue: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** EndpointPolicy is a resource that helps apply desired configuration on the endpoints that match specific criteria. For example, this resource can be used to apply "authentication config" an all endpoints that serve on port 8080. */
	export interface EndpointPolicy {

		/** Optional. This field specifies the URL of AuthorizationPolicy resource that applies authorization policies to the inbound traffic at the matched endpoints. Refer to Authorization. If this field is not specified, authorization is disabled(no authz checks) for this endpoint. */
		authorizationPolicy?: string | null;

		/** Optional. A URL referring to a ClientTlsPolicy resource. ClientTlsPolicy can be set to specify the authentication for traffic from the proxy to the actual endpoints. More specifically, it is applied to the outgoing traffic from the proxy to the endpoint. This is typically used for sidecar model where the proxy identifies itself as endpoint to the control plane, with the connection between sidecar and endpoint requiring authentication. If this field is not set, authentication is disabled(open). Applicable only when EndpointPolicyType is SIDECAR_PROXY. */
		clientTlsPolicy?: string | null;

		/** Output only. The timestamp when the resource was created. */
		createTime?: string | null;

		/** Optional. A free-text description of the resource. Max length 1024 characters. */
		description?: string | null;

		/** A definition of a matcher that selects endpoints to which the policies should be applied. */
		endpointMatcher?: EndpointMatcher;

		/** Optional. Set of label tags associated with the EndpointPolicy resource. */
		labels?: {[id: string]: string };

		/** Required. Name of the EndpointPolicy resource. It matches pattern `projects/{project}/locations/global/endpointPolicies/{endpoint_policy}`. */
		name?: string | null;

		/** Optional. A URL referring to ServerTlsPolicy resource. ServerTlsPolicy is used to determine the authentication policy to be applied to terminate the inbound traffic at the identified backends. If this field is not set, authentication is disabled(open) for this endpoint. */
		serverTlsPolicy?: string | null;

		/** Specification of a port-based selector. */
		trafficPortSelector?: TrafficPortSelector;

		/** Required. The type of endpoint policy. This is primarily used to validate the configuration. */
		type?: EndpointPolicyType | null;

		/** Output only. The timestamp when the resource was updated. */
		updateTime?: string | null;
	}

	/** EndpointPolicy is a resource that helps apply desired configuration on the endpoints that match specific criteria. For example, this resource can be used to apply "authentication config" an all endpoints that serve on port 8080. */
	export interface EndpointPolicyFormProperties {

		/** Optional. This field specifies the URL of AuthorizationPolicy resource that applies authorization policies to the inbound traffic at the matched endpoints. Refer to Authorization. If this field is not specified, authorization is disabled(no authz checks) for this endpoint. */
		authorizationPolicy: FormControl<string | null | undefined>,

		/** Optional. A URL referring to a ClientTlsPolicy resource. ClientTlsPolicy can be set to specify the authentication for traffic from the proxy to the actual endpoints. More specifically, it is applied to the outgoing traffic from the proxy to the endpoint. This is typically used for sidecar model where the proxy identifies itself as endpoint to the control plane, with the connection between sidecar and endpoint requiring authentication. If this field is not set, authentication is disabled(open). Applicable only when EndpointPolicyType is SIDECAR_PROXY. */
		clientTlsPolicy: FormControl<string | null | undefined>,

		/** Output only. The timestamp when the resource was created. */
		createTime: FormControl<string | null | undefined>,

		/** Optional. A free-text description of the resource. Max length 1024 characters. */
		description: FormControl<string | null | undefined>,

		/** Optional. Set of label tags associated with the EndpointPolicy resource. */
		labels: FormControl<{[id: string]: string } | null | undefined>,

		/** Required. Name of the EndpointPolicy resource. It matches pattern `projects/{project}/locations/global/endpointPolicies/{endpoint_policy}`. */
		name: FormControl<string | null | undefined>,

		/** Optional. A URL referring to ServerTlsPolicy resource. ServerTlsPolicy is used to determine the authentication policy to be applied to terminate the inbound traffic at the identified backends. If this field is not set, authentication is disabled(open) for this endpoint. */
		serverTlsPolicy: FormControl<string | null | undefined>,

		/** Required. The type of endpoint policy. This is primarily used to validate the configuration. */
		type: FormControl<EndpointPolicyType | null | undefined>,

		/** Output only. The timestamp when the resource was updated. */
		updateTime: FormControl<string | null | undefined>,
	}
	export function CreateEndpointPolicyFormGroup() {
		return new FormGroup<EndpointPolicyFormProperties>({
			authorizationPolicy: new FormControl<string | null | undefined>(undefined),
			clientTlsPolicy: new FormControl<string | null | undefined>(undefined),
			createTime: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			labels: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			serverTlsPolicy: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<EndpointPolicyType | null | undefined>(undefined),
			updateTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Specification of a port-based selector. */
	export interface TrafficPortSelector {

		/** Optional. A list of ports. Can be port numbers or port range (example, [80-90] specifies all ports from 80 to 90, including 80 and 90) or named ports or * to specify all ports. If the list is empty, all ports are selected. */
		ports?: Array<string>;
	}

	/** Specification of a port-based selector. */
	export interface TrafficPortSelectorFormProperties {
	}
	export function CreateTrafficPortSelectorFormGroup() {
		return new FormGroup<TrafficPortSelectorFormProperties>({
		});

	}

	export enum EndpointPolicyType { ENDPOINT_POLICY_TYPE_UNSPECIFIED = 'ENDPOINT_POLICY_TYPE_UNSPECIFIED', SIDECAR_PROXY = 'SIDECAR_PROXY', GRPC_SERVER = 'GRPC_SERVER' }


	/** Gateway represents the configuration for a proxy, typically a load balancer. It captures the ip:port over which the services are exposed by the proxy, along with any policy configurations. Routes have reference to to Gateways to dictate how requests should be routed by this Gateway. Next id: 29 */
	export interface Gateway {

		/** Optional. Zero or one IPv4 or IPv6 address on which the Gateway will receive the traffic. When no address is provided, an IP from the subnetwork is allocated This field only applies to gateways of type 'SECURE_WEB_GATEWAY'. Gateways of type 'OPEN_MESH' listen on 0.0.0.0 for IPv4 and :: for IPv6. */
		addresses?: Array<string>;

		/** Optional. A fully-qualified Certificates URL reference. The proxy presents a Certificate (selected based on SNI) when establishing a TLS connection. This feature only applies to gateways of type 'SECURE_WEB_GATEWAY'. */
		certificateUrls?: Array<string>;

		/** Output only. The timestamp when the resource was created. */
		createTime?: string | null;

		/** Optional. A free-text description of the resource. Max length 1024 characters. */
		description?: string | null;

		/** Optional. Determines if envoy will insert internal debug headers into upstream requests. Other Envoy headers may still be injected. By default, envoy will not insert any debug headers. */
		envoyHeaders?: GatewayEnvoyHeaders | null;

		/** Optional. A fully-qualified GatewaySecurityPolicy URL reference. Defines how a server should apply security policy to inbound (VM to Proxy) initiated connections. For example: `projects/locations/gatewaySecurityPolicies/swg-policy`. This policy is specific to gateways of type 'SECURE_WEB_GATEWAY'. */
		gatewaySecurityPolicy?: string | null;

		/** Optional. The IP Version that will be used by this gateway. Valid options are IPV4 or IPV6. Default is IPV4. */
		ipVersion?: GatewayIpVersion | null;

		/** Optional. Set of label tags associated with the Gateway resource. */
		labels?: {[id: string]: string };

		/** Required. Name of the Gateway resource. It matches pattern `projects/locations/gateways/`. */
		name?: string | null;

		/** Optional. The relative resource name identifying the VPC network that is using this configuration. For example: `projects/global/networks/network-1`. Currently, this field is specific to gateways of type 'SECURE_WEB_GATEWAY'. */
		network?: string | null;

		/** Required. One or more port numbers (1-65535), on which the Gateway will receive traffic. The proxy binds to the specified ports. Gateways of type 'SECURE_WEB_GATEWAY' are limited to 1 port. Gateways of type 'OPEN_MESH' listen on 0.0.0.0 for IPv4 and :: for IPv6 and support multiple ports. */
		ports?: Array<number>;

		/** Optional. Scope determines how configuration across multiple Gateway instances are merged. The configuration for multiple Gateway instances with the same scope will be merged as presented as a single coniguration to the proxy/load balancer. Max length 64 characters. Scope should start with a letter and can only have letters, numbers, hyphens. */
		scope?: string | null;

		/** Output only. Server-defined URL of this resource */
		selfLink?: string | null;

		/** Optional. A fully-qualified ServerTLSPolicy URL reference. Specifies how TLS traffic is terminated. If empty, TLS termination is disabled. */
		serverTlsPolicy?: string | null;

		/** Optional. The relative resource name identifying the subnetwork in which this SWG is allocated. For example: `projects/regions/us-central1/subnetworks/network-1` Currently, this field is specific to gateways of type 'SECURE_WEB_GATEWAY". */
		subnetwork?: string | null;

		/** Immutable. The type of the customer managed gateway. This field is required. If unspecified, an error is returned. */
		type?: GatewayType | null;

		/** Output only. The timestamp when the resource was updated. */
		updateTime?: string | null;
	}

	/** Gateway represents the configuration for a proxy, typically a load balancer. It captures the ip:port over which the services are exposed by the proxy, along with any policy configurations. Routes have reference to to Gateways to dictate how requests should be routed by this Gateway. Next id: 29 */
	export interface GatewayFormProperties {

		/** Output only. The timestamp when the resource was created. */
		createTime: FormControl<string | null | undefined>,

		/** Optional. A free-text description of the resource. Max length 1024 characters. */
		description: FormControl<string | null | undefined>,

		/** Optional. Determines if envoy will insert internal debug headers into upstream requests. Other Envoy headers may still be injected. By default, envoy will not insert any debug headers. */
		envoyHeaders: FormControl<GatewayEnvoyHeaders | null | undefined>,

		/** Optional. A fully-qualified GatewaySecurityPolicy URL reference. Defines how a server should apply security policy to inbound (VM to Proxy) initiated connections. For example: `projects/locations/gatewaySecurityPolicies/swg-policy`. This policy is specific to gateways of type 'SECURE_WEB_GATEWAY'. */
		gatewaySecurityPolicy: FormControl<string | null | undefined>,

		/** Optional. The IP Version that will be used by this gateway. Valid options are IPV4 or IPV6. Default is IPV4. */
		ipVersion: FormControl<GatewayIpVersion | null | undefined>,

		/** Optional. Set of label tags associated with the Gateway resource. */
		labels: FormControl<{[id: string]: string } | null | undefined>,

		/** Required. Name of the Gateway resource. It matches pattern `projects/locations/gateways/`. */
		name: FormControl<string | null | undefined>,

		/** Optional. The relative resource name identifying the VPC network that is using this configuration. For example: `projects/global/networks/network-1`. Currently, this field is specific to gateways of type 'SECURE_WEB_GATEWAY'. */
		network: FormControl<string | null | undefined>,

		/** Optional. Scope determines how configuration across multiple Gateway instances are merged. The configuration for multiple Gateway instances with the same scope will be merged as presented as a single coniguration to the proxy/load balancer. Max length 64 characters. Scope should start with a letter and can only have letters, numbers, hyphens. */
		scope: FormControl<string | null | undefined>,

		/** Output only. Server-defined URL of this resource */
		selfLink: FormControl<string | null | undefined>,

		/** Optional. A fully-qualified ServerTLSPolicy URL reference. Specifies how TLS traffic is terminated. If empty, TLS termination is disabled. */
		serverTlsPolicy: FormControl<string | null | undefined>,

		/** Optional. The relative resource name identifying the subnetwork in which this SWG is allocated. For example: `projects/regions/us-central1/subnetworks/network-1` Currently, this field is specific to gateways of type 'SECURE_WEB_GATEWAY". */
		subnetwork: FormControl<string | null | undefined>,

		/** Immutable. The type of the customer managed gateway. This field is required. If unspecified, an error is returned. */
		type: FormControl<GatewayType | null | undefined>,

		/** Output only. The timestamp when the resource was updated. */
		updateTime: FormControl<string | null | undefined>,
	}
	export function CreateGatewayFormGroup() {
		return new FormGroup<GatewayFormProperties>({
			createTime: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			envoyHeaders: new FormControl<GatewayEnvoyHeaders | null | undefined>(undefined),
			gatewaySecurityPolicy: new FormControl<string | null | undefined>(undefined),
			ipVersion: new FormControl<GatewayIpVersion | null | undefined>(undefined),
			labels: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			network: new FormControl<string | null | undefined>(undefined),
			scope: new FormControl<string | null | undefined>(undefined),
			selfLink: new FormControl<string | null | undefined>(undefined),
			serverTlsPolicy: new FormControl<string | null | undefined>(undefined),
			subnetwork: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<GatewayType | null | undefined>(undefined),
			updateTime: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum GatewayEnvoyHeaders { ENVOY_HEADERS_UNSPECIFIED = 'ENVOY_HEADERS_UNSPECIFIED', NONE = 'NONE', DEBUG_HEADERS = 'DEBUG_HEADERS' }

	export enum GatewayIpVersion { IP_VERSION_UNSPECIFIED = 'IP_VERSION_UNSPECIFIED', IPV4 = 'IPV4', IPV6 = 'IPV6' }

	export enum GatewayType { TYPE_UNSPECIFIED = 'TYPE_UNSPECIFIED', OPEN_MESH = 'OPEN_MESH', SECURE_WEB_GATEWAY = 'SECURE_WEB_GATEWAY' }


	/** GrpcRoute is the resource defining how gRPC traffic routed by a Mesh or Gateway resource is routed. */
	export interface GrpcRoute {

		/** Output only. The timestamp when the resource was created. */
		createTime?: string | null;

		/** Optional. A free-text description of the resource. Max length 1024 characters. */
		description?: string | null;

		/** Optional. Gateways defines a list of gateways this GrpcRoute is attached to, as one of the routing rules to route the requests served by the gateway. Each gateway reference should match the pattern: `projects/locations/global/gateways/` */
		gateways?: Array<string>;

		/** Required. Service hostnames with an optional port for which this route describes traffic. Format: [:] Hostname is the fully qualified domain name of a network host. This matches the RFC 1123 definition of a hostname with 2 notable exceptions: - IPs are not allowed. - A hostname may be prefixed with a wildcard label (`*.`). The wildcard label must appear by itself as the first label. Hostname can be "precise" which is a domain name without the terminating dot of a network host (e.g. `foo.example.com`) or "wildcard", which is a domain name prefixed with a single wildcard label (e.g. `*.example.com`). Note that as per RFC1035 and RFC1123, a label must consist of lower case alphanumeric characters or '-', and must start and end with an alphanumeric character. No other punctuation is allowed. The routes associated with a Mesh or Gateway must have unique hostnames. If you attempt to attach multiple routes with conflicting hostnames, the configuration will be rejected. For example, while it is acceptable for routes for the hostnames `*.foo.bar.com` and `*.bar.com` to be associated with the same route, it is not possible to associate two routes both with `*.bar.com` or both with `bar.com`. If a port is specified, then gRPC clients must use the channel URI with the port to match this rule (i.e. "xds:///service:123"), otherwise they must supply the URI without a port (i.e. "xds:///service"). */
		hostnames?: Array<string>;

		/** Optional. Set of label tags associated with the GrpcRoute resource. */
		labels?: {[id: string]: string };

		/** Optional. Meshes defines a list of meshes this GrpcRoute is attached to, as one of the routing rules to route the requests served by the mesh. Each mesh reference should match the pattern: `projects/locations/global/meshes/` */
		meshes?: Array<string>;

		/** Required. Name of the GrpcRoute resource. It matches pattern `projects/locations/global/grpcRoutes/` */
		name?: string | null;

		/** Required. A list of detailed rules defining how to route traffic. Within a single GrpcRoute, the GrpcRoute.RouteAction associated with the first matching GrpcRoute.RouteRule will be executed. At least one rule must be supplied. */
		rules?: Array<GrpcRouteRouteRule>;

		/** Output only. Server-defined URL of this resource */
		selfLink?: string | null;

		/** Output only. The timestamp when the resource was updated. */
		updateTime?: string | null;
	}

	/** GrpcRoute is the resource defining how gRPC traffic routed by a Mesh or Gateway resource is routed. */
	export interface GrpcRouteFormProperties {

		/** Output only. The timestamp when the resource was created. */
		createTime: FormControl<string | null | undefined>,

		/** Optional. A free-text description of the resource. Max length 1024 characters. */
		description: FormControl<string | null | undefined>,

		/** Optional. Set of label tags associated with the GrpcRoute resource. */
		labels: FormControl<{[id: string]: string } | null | undefined>,

		/** Required. Name of the GrpcRoute resource. It matches pattern `projects/locations/global/grpcRoutes/` */
		name: FormControl<string | null | undefined>,

		/** Output only. Server-defined URL of this resource */
		selfLink: FormControl<string | null | undefined>,

		/** Output only. The timestamp when the resource was updated. */
		updateTime: FormControl<string | null | undefined>,
	}
	export function CreateGrpcRouteFormGroup() {
		return new FormGroup<GrpcRouteFormProperties>({
			createTime: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			labels: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			selfLink: new FormControl<string | null | undefined>(undefined),
			updateTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Describes how to route traffic. */
	export interface GrpcRouteRouteRule {

		/** Specifies how to route matched traffic. */
		action?: GrpcRouteRouteAction;

		/** Optional. Matches define conditions used for matching the rule against incoming gRPC requests. Each match is independent, i.e. this rule will be matched if ANY one of the matches is satisfied. If no matches field is specified, this rule will unconditionally match traffic. */
		matches?: Array<GrpcRouteRouteMatch>;
	}

	/** Describes how to route traffic. */
	export interface GrpcRouteRouteRuleFormProperties {
	}
	export function CreateGrpcRouteRouteRuleFormGroup() {
		return new FormGroup<GrpcRouteRouteRuleFormProperties>({
		});

	}


	/** Specifies how to route matched traffic. */
	export interface GrpcRouteRouteAction {

		/** Optional. The destination services to which traffic should be forwarded. If multiple destinations are specified, traffic will be split between Backend Service(s) according to the weight field of these destinations. */
		destinations?: Array<GrpcRouteDestination>;

		/** The specification for fault injection introduced into traffic to test the resiliency of clients to destination service failure. As part of fault injection, when clients send requests to a destination, delays can be introduced on a percentage of requests before sending those requests to the destination service. Similarly requests from clients can be aborted by for a percentage of requests. */
		faultInjectionPolicy?: GrpcRouteFaultInjectionPolicy;

		/** Optional. Specifies the idle timeout for the selected route. The idle timeout is defined as the period in which there are no bytes sent or received on either the upstream or downstream connection. If not set, the default idle timeout is 1 hour. If set to 0s, the timeout will be disabled. */
		idleTimeout?: string | null;

		/** The specifications for retries. */
		retryPolicy?: GrpcRouteRetryPolicy;

		/** The specification for cookie-based stateful session affinity where the date plane supplies a “session cookie” with the name "GSSA" which encodes a specific destination host and each request containing that cookie will be directed to that host as long as the destination host remains up and healthy. The gRPC proxyless mesh library or sidecar proxy will manage the session cookie but the client application code is responsible for copying the cookie from each RPC in the session to the next. */
		statefulSessionAffinity?: GrpcRouteStatefulSessionAffinityPolicy;

		/** Optional. Specifies the timeout for selected route. Timeout is computed from the time the request has been fully processed (i.e. end of stream) up until the response has been completely processed. Timeout includes all retries. */
		timeout?: string | null;
	}

	/** Specifies how to route matched traffic. */
	export interface GrpcRouteRouteActionFormProperties {

		/** Optional. Specifies the idle timeout for the selected route. The idle timeout is defined as the period in which there are no bytes sent or received on either the upstream or downstream connection. If not set, the default idle timeout is 1 hour. If set to 0s, the timeout will be disabled. */
		idleTimeout: FormControl<string | null | undefined>,

		/** Optional. Specifies the timeout for selected route. Timeout is computed from the time the request has been fully processed (i.e. end of stream) up until the response has been completely processed. Timeout includes all retries. */
		timeout: FormControl<string | null | undefined>,
	}
	export function CreateGrpcRouteRouteActionFormGroup() {
		return new FormGroup<GrpcRouteRouteActionFormProperties>({
			idleTimeout: new FormControl<string | null | undefined>(undefined),
			timeout: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The destination to which traffic will be routed. */
	export interface GrpcRouteDestination {

		/** Required. The URL of a destination service to which to route traffic. Must refer to either a BackendService or ServiceDirectoryService. */
		serviceName?: string | null;

		/**
		 * Optional. Specifies the proportion of requests forwarded to the backend referenced by the serviceName field. This is computed as: - weight/Sum(weights in this destination list). For non-zero values, there may be some epsilon from the exact proportion defined here depending on the precision an implementation supports. If only one serviceName is specified and it has a weight greater than 0, 100% of the traffic is forwarded to that backend. If weights are specified for any one service name, they need to be specified for all of them. If weights are unspecified for all services, then, traffic is distributed in equal proportions to all of them.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		weight?: number | null;
	}

	/** The destination to which traffic will be routed. */
	export interface GrpcRouteDestinationFormProperties {

		/** Required. The URL of a destination service to which to route traffic. Must refer to either a BackendService or ServiceDirectoryService. */
		serviceName: FormControl<string | null | undefined>,

		/**
		 * Optional. Specifies the proportion of requests forwarded to the backend referenced by the serviceName field. This is computed as: - weight/Sum(weights in this destination list). For non-zero values, there may be some epsilon from the exact proportion defined here depending on the precision an implementation supports. If only one serviceName is specified and it has a weight greater than 0, 100% of the traffic is forwarded to that backend. If weights are specified for any one service name, they need to be specified for all of them. If weights are unspecified for all services, then, traffic is distributed in equal proportions to all of them.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		weight: FormControl<number | null | undefined>,
	}
	export function CreateGrpcRouteDestinationFormGroup() {
		return new FormGroup<GrpcRouteDestinationFormProperties>({
			serviceName: new FormControl<string | null | undefined>(undefined),
			weight: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** The specification for fault injection introduced into traffic to test the resiliency of clients to destination service failure. As part of fault injection, when clients send requests to a destination, delays can be introduced on a percentage of requests before sending those requests to the destination service. Similarly requests from clients can be aborted by for a percentage of requests. */
	export interface GrpcRouteFaultInjectionPolicy {

		/** Specification of how client requests are aborted as part of fault injection before being sent to a destination. */
		abort?: GrpcRouteFaultInjectionPolicyAbort;

		/** Specification of how client requests are delayed as part of fault injection before being sent to a destination. */
		delay?: GrpcRouteFaultInjectionPolicyDelay;
	}

	/** The specification for fault injection introduced into traffic to test the resiliency of clients to destination service failure. As part of fault injection, when clients send requests to a destination, delays can be introduced on a percentage of requests before sending those requests to the destination service. Similarly requests from clients can be aborted by for a percentage of requests. */
	export interface GrpcRouteFaultInjectionPolicyFormProperties {
	}
	export function CreateGrpcRouteFaultInjectionPolicyFormGroup() {
		return new FormGroup<GrpcRouteFaultInjectionPolicyFormProperties>({
		});

	}


	/** Specification of how client requests are aborted as part of fault injection before being sent to a destination. */
	export interface GrpcRouteFaultInjectionPolicyAbort {

		/**
		 * The HTTP status code used to abort the request. The value must be between 200 and 599 inclusive.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		httpStatus?: number | null;

		/**
		 * The percentage of traffic which will be aborted. The value must be between [0, 100]
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		percentage?: number | null;
	}

	/** Specification of how client requests are aborted as part of fault injection before being sent to a destination. */
	export interface GrpcRouteFaultInjectionPolicyAbortFormProperties {

		/**
		 * The HTTP status code used to abort the request. The value must be between 200 and 599 inclusive.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		httpStatus: FormControl<number | null | undefined>,

		/**
		 * The percentage of traffic which will be aborted. The value must be between [0, 100]
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		percentage: FormControl<number | null | undefined>,
	}
	export function CreateGrpcRouteFaultInjectionPolicyAbortFormGroup() {
		return new FormGroup<GrpcRouteFaultInjectionPolicyAbortFormProperties>({
			httpStatus: new FormControl<number | null | undefined>(undefined),
			percentage: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Specification of how client requests are delayed as part of fault injection before being sent to a destination. */
	export interface GrpcRouteFaultInjectionPolicyDelay {

		/** Specify a fixed delay before forwarding the request. */
		fixedDelay?: string | null;

		/**
		 * The percentage of traffic on which delay will be injected. The value must be between [0, 100]
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		percentage?: number | null;
	}

	/** Specification of how client requests are delayed as part of fault injection before being sent to a destination. */
	export interface GrpcRouteFaultInjectionPolicyDelayFormProperties {

		/** Specify a fixed delay before forwarding the request. */
		fixedDelay: FormControl<string | null | undefined>,

		/**
		 * The percentage of traffic on which delay will be injected. The value must be between [0, 100]
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		percentage: FormControl<number | null | undefined>,
	}
	export function CreateGrpcRouteFaultInjectionPolicyDelayFormGroup() {
		return new FormGroup<GrpcRouteFaultInjectionPolicyDelayFormProperties>({
			fixedDelay: new FormControl<string | null | undefined>(undefined),
			percentage: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** The specifications for retries. */
	export interface GrpcRouteRetryPolicy {

		/**
		 * Specifies the allowed number of retries. This number must be > 0. If not specified, default to 1.
		 * Type: uint, 0 to 4,294,967,295
		 */
		numRetries?: number | null;

		/** - connect-failure: Router will retry on failures connecting to Backend Services, for example due to connection timeouts. - refused-stream: Router will retry if the backend service resets the stream with a REFUSED_STREAM error code. This reset type indicates that it is safe to retry. - cancelled: Router will retry if the gRPC status code in the response header is set to cancelled - deadline-exceeded: Router will retry if the gRPC status code in the response header is set to deadline-exceeded - resource-exhausted: Router will retry if the gRPC status code in the response header is set to resource-exhausted - unavailable: Router will retry if the gRPC status code in the response header is set to unavailable */
		retryConditions?: Array<string>;
	}

	/** The specifications for retries. */
	export interface GrpcRouteRetryPolicyFormProperties {

		/**
		 * Specifies the allowed number of retries. This number must be > 0. If not specified, default to 1.
		 * Type: uint, 0 to 4,294,967,295
		 */
		numRetries: FormControl<number | null | undefined>,
	}
	export function CreateGrpcRouteRetryPolicyFormGroup() {
		return new FormGroup<GrpcRouteRetryPolicyFormProperties>({
			numRetries: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** The specification for cookie-based stateful session affinity where the date plane supplies a “session cookie” with the name "GSSA" which encodes a specific destination host and each request containing that cookie will be directed to that host as long as the destination host remains up and healthy. The gRPC proxyless mesh library or sidecar proxy will manage the session cookie but the client application code is responsible for copying the cookie from each RPC in the session to the next. */
	export interface GrpcRouteStatefulSessionAffinityPolicy {

		/** Required. The cookie TTL value for the Set-Cookie header generated by the data plane. The lifetime of the cookie may be set to a value from 1 to 86400 seconds (24 hours) inclusive. */
		cookieTtl?: string | null;
	}

	/** The specification for cookie-based stateful session affinity where the date plane supplies a “session cookie” with the name "GSSA" which encodes a specific destination host and each request containing that cookie will be directed to that host as long as the destination host remains up and healthy. The gRPC proxyless mesh library or sidecar proxy will manage the session cookie but the client application code is responsible for copying the cookie from each RPC in the session to the next. */
	export interface GrpcRouteStatefulSessionAffinityPolicyFormProperties {

		/** Required. The cookie TTL value for the Set-Cookie header generated by the data plane. The lifetime of the cookie may be set to a value from 1 to 86400 seconds (24 hours) inclusive. */
		cookieTtl: FormControl<string | null | undefined>,
	}
	export function CreateGrpcRouteStatefulSessionAffinityPolicyFormGroup() {
		return new FormGroup<GrpcRouteStatefulSessionAffinityPolicyFormProperties>({
			cookieTtl: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Criteria for matching traffic. A RouteMatch will be considered to match when all supplied fields match. */
	export interface GrpcRouteRouteMatch {

		/** Optional. Specifies a collection of headers to match. */
		headers?: Array<GrpcRouteHeaderMatch>;

		/** Specifies a match against a method. */
		method?: GrpcRouteMethodMatch;
	}

	/** Criteria for matching traffic. A RouteMatch will be considered to match when all supplied fields match. */
	export interface GrpcRouteRouteMatchFormProperties {
	}
	export function CreateGrpcRouteRouteMatchFormGroup() {
		return new FormGroup<GrpcRouteRouteMatchFormProperties>({
		});

	}


	/** A match against a collection of headers. */
	export interface GrpcRouteHeaderMatch {

		/** Required. The key of the header. */
		key?: string | null;

		/** Optional. Specifies how to match against the value of the header. If not specified, a default value of EXACT is used. */
		type?: GrpcRouteHeaderMatchType | null;

		/** Required. The value of the header. */
		value?: string | null;
	}

	/** A match against a collection of headers. */
	export interface GrpcRouteHeaderMatchFormProperties {

		/** Required. The key of the header. */
		key: FormControl<string | null | undefined>,

		/** Optional. Specifies how to match against the value of the header. If not specified, a default value of EXACT is used. */
		type: FormControl<GrpcRouteHeaderMatchType | null | undefined>,

		/** Required. The value of the header. */
		value: FormControl<string | null | undefined>,
	}
	export function CreateGrpcRouteHeaderMatchFormGroup() {
		return new FormGroup<GrpcRouteHeaderMatchFormProperties>({
			key: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<GrpcRouteHeaderMatchType | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum GrpcRouteHeaderMatchType { TYPE_UNSPECIFIED = 'TYPE_UNSPECIFIED', EXACT = 'EXACT', REGULAR_EXPRESSION = 'REGULAR_EXPRESSION' }


	/** Specifies a match against a method. */
	export interface GrpcRouteMethodMatch {

		/** Optional. Specifies that matches are case sensitive. The default value is true. case_sensitive must not be used with a type of REGULAR_EXPRESSION. */
		caseSensitive?: boolean | null;

		/** Required. Name of the method to match against. If unspecified, will match all methods. */
		grpcMethod?: string | null;

		/** Required. Name of the service to match against. If unspecified, will match all services. */
		grpcService?: string | null;

		/** Optional. Specifies how to match against the name. If not specified, a default value of "EXACT" is used. */
		type?: GrpcRouteHeaderMatchType | null;
	}

	/** Specifies a match against a method. */
	export interface GrpcRouteMethodMatchFormProperties {

		/** Optional. Specifies that matches are case sensitive. The default value is true. case_sensitive must not be used with a type of REGULAR_EXPRESSION. */
		caseSensitive: FormControl<boolean | null | undefined>,

		/** Required. Name of the method to match against. If unspecified, will match all methods. */
		grpcMethod: FormControl<string | null | undefined>,

		/** Required. Name of the service to match against. If unspecified, will match all services. */
		grpcService: FormControl<string | null | undefined>,

		/** Optional. Specifies how to match against the name. If not specified, a default value of "EXACT" is used. */
		type: FormControl<GrpcRouteHeaderMatchType | null | undefined>,
	}
	export function CreateGrpcRouteMethodMatchFormGroup() {
		return new FormGroup<GrpcRouteMethodMatchFormProperties>({
			caseSensitive: new FormControl<boolean | null | undefined>(undefined),
			grpcMethod: new FormControl<string | null | undefined>(undefined),
			grpcService: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<GrpcRouteHeaderMatchType | null | undefined>(undefined),
		});

	}


	/** HttpRoute is the resource defining how HTTP traffic should be routed by a Mesh or Gateway resource. */
	export interface HttpRoute {

		/** Output only. The timestamp when the resource was created. */
		createTime?: string | null;

		/** Optional. A free-text description of the resource. Max length 1024 characters. */
		description?: string | null;

		/** Optional. Gateways defines a list of gateways this HttpRoute is attached to, as one of the routing rules to route the requests served by the gateway. Each gateway reference should match the pattern: `projects/locations/global/gateways/` */
		gateways?: Array<string>;

		/** Required. Hostnames define a set of hosts that should match against the HTTP host header to select a HttpRoute to process the request. Hostname is the fully qualified domain name of a network host, as defined by RFC 1123 with the exception that: - IPs are not allowed. - A hostname may be prefixed with a wildcard label (`*.`). The wildcard label must appear by itself as the first label. Hostname can be "precise" which is a domain name without the terminating dot of a network host (e.g. `foo.example.com`) or "wildcard", which is a domain name prefixed with a single wildcard label (e.g. `*.example.com`). Note that as per RFC1035 and RFC1123, a label must consist of lower case alphanumeric characters or '-', and must start and end with an alphanumeric character. No other punctuation is allowed. The routes associated with a Mesh or Gateways must have unique hostnames. If you attempt to attach multiple routes with conflicting hostnames, the configuration will be rejected. For example, while it is acceptable for routes for the hostnames `*.foo.bar.com` and `*.bar.com` to be associated with the same Mesh (or Gateways under the same scope), it is not possible to associate two routes both with `*.bar.com` or both with `bar.com`. */
		hostnames?: Array<string>;

		/** Optional. Set of label tags associated with the HttpRoute resource. */
		labels?: {[id: string]: string };

		/** Optional. Meshes defines a list of meshes this HttpRoute is attached to, as one of the routing rules to route the requests served by the mesh. Each mesh reference should match the pattern: `projects/locations/global/meshes/` The attached Mesh should be of a type SIDECAR */
		meshes?: Array<string>;

		/** Required. Name of the HttpRoute resource. It matches pattern `projects/locations/global/httpRoutes/http_route_name>`. */
		name?: string | null;

		/** Required. Rules that define how traffic is routed and handled. Rules will be matched sequentially based on the RouteMatch specified for the rule. */
		rules?: Array<HttpRouteRouteRule>;

		/** Output only. Server-defined URL of this resource */
		selfLink?: string | null;

		/** Output only. The timestamp when the resource was updated. */
		updateTime?: string | null;
	}

	/** HttpRoute is the resource defining how HTTP traffic should be routed by a Mesh or Gateway resource. */
	export interface HttpRouteFormProperties {

		/** Output only. The timestamp when the resource was created. */
		createTime: FormControl<string | null | undefined>,

		/** Optional. A free-text description of the resource. Max length 1024 characters. */
		description: FormControl<string | null | undefined>,

		/** Optional. Set of label tags associated with the HttpRoute resource. */
		labels: FormControl<{[id: string]: string } | null | undefined>,

		/** Required. Name of the HttpRoute resource. It matches pattern `projects/locations/global/httpRoutes/http_route_name>`. */
		name: FormControl<string | null | undefined>,

		/** Output only. Server-defined URL of this resource */
		selfLink: FormControl<string | null | undefined>,

		/** Output only. The timestamp when the resource was updated. */
		updateTime: FormControl<string | null | undefined>,
	}
	export function CreateHttpRouteFormGroup() {
		return new FormGroup<HttpRouteFormProperties>({
			createTime: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			labels: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			selfLink: new FormControl<string | null | undefined>(undefined),
			updateTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Specifies how to match traffic and how to route traffic when traffic is matched. */
	export interface HttpRouteRouteRule {

		/** The specifications for routing traffic and applying associated policies. */
		action?: HttpRouteRouteAction;

		/** A list of matches define conditions used for matching the rule against incoming HTTP requests. Each match is independent, i.e. this rule will be matched if ANY one of the matches is satisfied. If no matches field is specified, this rule will unconditionally match traffic. If a default rule is desired to be configured, add a rule with no matches specified to the end of the rules list. */
		matches?: Array<HttpRouteRouteMatch>;
	}

	/** Specifies how to match traffic and how to route traffic when traffic is matched. */
	export interface HttpRouteRouteRuleFormProperties {
	}
	export function CreateHttpRouteRouteRuleFormGroup() {
		return new FormGroup<HttpRouteRouteRuleFormProperties>({
		});

	}


	/** The specifications for routing traffic and applying associated policies. */
	export interface HttpRouteRouteAction {

		/** The Specification for allowing client side cross-origin requests. */
		corsPolicy?: HttpRouteCorsPolicy;

		/** The destination to which traffic should be forwarded. */
		destinations?: Array<HttpRouteDestination>;

		/** Static HTTP response object to be returned. */
		directResponse?: HttpRouteHttpDirectResponse;

		/** The specification for fault injection introduced into traffic to test the resiliency of clients to destination service failure. As part of fault injection, when clients send requests to a destination, delays can be introduced by client proxy on a percentage of requests before sending those requests to the destination service. Similarly requests can be aborted by client proxy for a percentage of requests. */
		faultInjectionPolicy?: HttpRouteFaultInjectionPolicy;

		/** Optional. Specifies the idle timeout for the selected route. The idle timeout is defined as the period in which there are no bytes sent or received on either the upstream or downstream connection. If not set, the default idle timeout is 1 hour. If set to 0s, the timeout will be disabled. */
		idleTimeout?: string | null;

		/** The specification for redirecting traffic. */
		redirect?: HttpRouteRedirect;

		/** The specification for modifying HTTP header in HTTP request and HTTP response. */
		requestHeaderModifier?: HttpRouteHeaderModifier;

		/** Specifies the policy on how requests are shadowed to a separate mirrored destination service. The proxy does not wait for responses from the shadow service. Prior to sending traffic to the shadow service, the host/authority header is suffixed with -shadow. */
		requestMirrorPolicy?: HttpRouteRequestMirrorPolicy;

		/** The specification for modifying HTTP header in HTTP request and HTTP response. */
		responseHeaderModifier?: HttpRouteHeaderModifier;

		/** The specifications for retries. */
		retryPolicy?: HttpRouteRetryPolicy;

		/** The specification for cookie-based stateful session affinity where the date plane supplies a “session cookie” with the name "GSSA" which encodes a specific destination host and each request containing that cookie will be directed to that host as long as the destination host remains up and healthy. The gRPC proxyless mesh library or sidecar proxy will manage the session cookie but the client application code is responsible for copying the cookie from each RPC in the session to the next. */
		statefulSessionAffinity?: HttpRouteStatefulSessionAffinityPolicy;

		/** Specifies the timeout for selected route. Timeout is computed from the time the request has been fully processed (i.e. end of stream) up until the response has been completely processed. Timeout includes all retries. */
		timeout?: string | null;

		/** The specification for modifying the URL of the request, prior to forwarding the request to the destination. */
		urlRewrite?: HttpRouteURLRewrite;
	}

	/** The specifications for routing traffic and applying associated policies. */
	export interface HttpRouteRouteActionFormProperties {

		/** Optional. Specifies the idle timeout for the selected route. The idle timeout is defined as the period in which there are no bytes sent or received on either the upstream or downstream connection. If not set, the default idle timeout is 1 hour. If set to 0s, the timeout will be disabled. */
		idleTimeout: FormControl<string | null | undefined>,

		/** Specifies the timeout for selected route. Timeout is computed from the time the request has been fully processed (i.e. end of stream) up until the response has been completely processed. Timeout includes all retries. */
		timeout: FormControl<string | null | undefined>,
	}
	export function CreateHttpRouteRouteActionFormGroup() {
		return new FormGroup<HttpRouteRouteActionFormProperties>({
			idleTimeout: new FormControl<string | null | undefined>(undefined),
			timeout: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The Specification for allowing client side cross-origin requests. */
	export interface HttpRouteCorsPolicy {

		/** In response to a preflight request, setting this to true indicates that the actual request can include user credentials. This translates to the Access-Control-Allow-Credentials header. Default value is false. */
		allowCredentials?: boolean | null;

		/** Specifies the content for Access-Control-Allow-Headers header. */
		allowHeaders?: Array<string>;

		/** Specifies the content for Access-Control-Allow-Methods header. */
		allowMethods?: Array<string>;

		/** Specifies the regular expression patterns that match allowed origins. For regular expression grammar, please see https://github.com/google/re2/wiki/Syntax. */
		allowOriginRegexes?: Array<string>;

		/** Specifies the list of origins that will be allowed to do CORS requests. An origin is allowed if it matches either an item in allow_origins or an item in allow_origin_regexes. */
		allowOrigins?: Array<string>;

		/** If true, the CORS policy is disabled. The default value is false, which indicates that the CORS policy is in effect. */
		disabled?: boolean | null;

		/** Specifies the content for Access-Control-Expose-Headers header. */
		exposeHeaders?: Array<string>;

		/** Specifies how long result of a preflight request can be cached in seconds. This translates to the Access-Control-Max-Age header. */
		maxAge?: string | null;
	}

	/** The Specification for allowing client side cross-origin requests. */
	export interface HttpRouteCorsPolicyFormProperties {

		/** In response to a preflight request, setting this to true indicates that the actual request can include user credentials. This translates to the Access-Control-Allow-Credentials header. Default value is false. */
		allowCredentials: FormControl<boolean | null | undefined>,

		/** If true, the CORS policy is disabled. The default value is false, which indicates that the CORS policy is in effect. */
		disabled: FormControl<boolean | null | undefined>,

		/** Specifies how long result of a preflight request can be cached in seconds. This translates to the Access-Control-Max-Age header. */
		maxAge: FormControl<string | null | undefined>,
	}
	export function CreateHttpRouteCorsPolicyFormGroup() {
		return new FormGroup<HttpRouteCorsPolicyFormProperties>({
			allowCredentials: new FormControl<boolean | null | undefined>(undefined),
			disabled: new FormControl<boolean | null | undefined>(undefined),
			maxAge: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Specifications of a destination to which the request should be routed to. */
	export interface HttpRouteDestination {

		/** The specification for modifying HTTP header in HTTP request and HTTP response. */
		requestHeaderModifier?: HttpRouteHeaderModifier;

		/** The specification for modifying HTTP header in HTTP request and HTTP response. */
		responseHeaderModifier?: HttpRouteHeaderModifier;

		/** The URL of a BackendService to route traffic to. */
		serviceName?: string | null;

		/**
		 * Specifies the proportion of requests forwarded to the backend referenced by the serviceName field. This is computed as: - weight/Sum(weights in this destination list). For non-zero values, there may be some epsilon from the exact proportion defined here depending on the precision an implementation supports. If only one serviceName is specified and it has a weight greater than 0, 100% of the traffic is forwarded to that backend. If weights are specified for any one service name, they need to be specified for all of them. If weights are unspecified for all services, then, traffic is distributed in equal proportions to all of them.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		weight?: number | null;
	}

	/** Specifications of a destination to which the request should be routed to. */
	export interface HttpRouteDestinationFormProperties {

		/** The URL of a BackendService to route traffic to. */
		serviceName: FormControl<string | null | undefined>,

		/**
		 * Specifies the proportion of requests forwarded to the backend referenced by the serviceName field. This is computed as: - weight/Sum(weights in this destination list). For non-zero values, there may be some epsilon from the exact proportion defined here depending on the precision an implementation supports. If only one serviceName is specified and it has a weight greater than 0, 100% of the traffic is forwarded to that backend. If weights are specified for any one service name, they need to be specified for all of them. If weights are unspecified for all services, then, traffic is distributed in equal proportions to all of them.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		weight: FormControl<number | null | undefined>,
	}
	export function CreateHttpRouteDestinationFormGroup() {
		return new FormGroup<HttpRouteDestinationFormProperties>({
			serviceName: new FormControl<string | null | undefined>(undefined),
			weight: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** The specification for modifying HTTP header in HTTP request and HTTP response. */
	export interface HttpRouteHeaderModifier {

		/** Add the headers with given map where key is the name of the header, value is the value of the header. */
		add?: {[id: string]: string };

		/** Remove headers (matching by header names) specified in the list. */
		remove?: Array<string>;

		/** Completely overwrite/replace the headers with given map where key is the name of the header, value is the value of the header. */
		set?: {[id: string]: string };
	}

	/** The specification for modifying HTTP header in HTTP request and HTTP response. */
	export interface HttpRouteHeaderModifierFormProperties {

		/** Add the headers with given map where key is the name of the header, value is the value of the header. */
		add: FormControl<{[id: string]: string } | null | undefined>,

		/** Completely overwrite/replace the headers with given map where key is the name of the header, value is the value of the header. */
		set: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateHttpRouteHeaderModifierFormGroup() {
		return new FormGroup<HttpRouteHeaderModifierFormProperties>({
			add: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			set: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}


	/** Static HTTP response object to be returned. */
	export interface HttpRouteHttpDirectResponse {

		/** Optional. Response body as bytes. Maximum body size is 4096B. */
		bytesBody?: string | null;

		/**
		 * Required. Status to return as part of HTTP Response. Must be a positive integer.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		status?: number | null;

		/** Optional. Response body as a string. Maximum body length is 1024 characters. */
		stringBody?: string | null;
	}

	/** Static HTTP response object to be returned. */
	export interface HttpRouteHttpDirectResponseFormProperties {

		/** Optional. Response body as bytes. Maximum body size is 4096B. */
		bytesBody: FormControl<string | null | undefined>,

		/**
		 * Required. Status to return as part of HTTP Response. Must be a positive integer.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		status: FormControl<number | null | undefined>,

		/** Optional. Response body as a string. Maximum body length is 1024 characters. */
		stringBody: FormControl<string | null | undefined>,
	}
	export function CreateHttpRouteHttpDirectResponseFormGroup() {
		return new FormGroup<HttpRouteHttpDirectResponseFormProperties>({
			bytesBody: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<number | null | undefined>(undefined),
			stringBody: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The specification for fault injection introduced into traffic to test the resiliency of clients to destination service failure. As part of fault injection, when clients send requests to a destination, delays can be introduced by client proxy on a percentage of requests before sending those requests to the destination service. Similarly requests can be aborted by client proxy for a percentage of requests. */
	export interface HttpRouteFaultInjectionPolicy {

		/** Specification of how client requests are aborted as part of fault injection before being sent to a destination. */
		abort?: HttpRouteFaultInjectionPolicyAbort;

		/** Specification of how client requests are delayed as part of fault injection before being sent to a destination. */
		delay?: HttpRouteFaultInjectionPolicyDelay;
	}

	/** The specification for fault injection introduced into traffic to test the resiliency of clients to destination service failure. As part of fault injection, when clients send requests to a destination, delays can be introduced by client proxy on a percentage of requests before sending those requests to the destination service. Similarly requests can be aborted by client proxy for a percentage of requests. */
	export interface HttpRouteFaultInjectionPolicyFormProperties {
	}
	export function CreateHttpRouteFaultInjectionPolicyFormGroup() {
		return new FormGroup<HttpRouteFaultInjectionPolicyFormProperties>({
		});

	}


	/** Specification of how client requests are aborted as part of fault injection before being sent to a destination. */
	export interface HttpRouteFaultInjectionPolicyAbort {

		/**
		 * The HTTP status code used to abort the request. The value must be between 200 and 599 inclusive.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		httpStatus?: number | null;

		/**
		 * The percentage of traffic which will be aborted. The value must be between [0, 100]
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		percentage?: number | null;
	}

	/** Specification of how client requests are aborted as part of fault injection before being sent to a destination. */
	export interface HttpRouteFaultInjectionPolicyAbortFormProperties {

		/**
		 * The HTTP status code used to abort the request. The value must be between 200 and 599 inclusive.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		httpStatus: FormControl<number | null | undefined>,

		/**
		 * The percentage of traffic which will be aborted. The value must be between [0, 100]
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		percentage: FormControl<number | null | undefined>,
	}
	export function CreateHttpRouteFaultInjectionPolicyAbortFormGroup() {
		return new FormGroup<HttpRouteFaultInjectionPolicyAbortFormProperties>({
			httpStatus: new FormControl<number | null | undefined>(undefined),
			percentage: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Specification of how client requests are delayed as part of fault injection before being sent to a destination. */
	export interface HttpRouteFaultInjectionPolicyDelay {

		/** Specify a fixed delay before forwarding the request. */
		fixedDelay?: string | null;

		/**
		 * The percentage of traffic on which delay will be injected. The value must be between [0, 100]
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		percentage?: number | null;
	}

	/** Specification of how client requests are delayed as part of fault injection before being sent to a destination. */
	export interface HttpRouteFaultInjectionPolicyDelayFormProperties {

		/** Specify a fixed delay before forwarding the request. */
		fixedDelay: FormControl<string | null | undefined>,

		/**
		 * The percentage of traffic on which delay will be injected. The value must be between [0, 100]
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		percentage: FormControl<number | null | undefined>,
	}
	export function CreateHttpRouteFaultInjectionPolicyDelayFormGroup() {
		return new FormGroup<HttpRouteFaultInjectionPolicyDelayFormProperties>({
			fixedDelay: new FormControl<string | null | undefined>(undefined),
			percentage: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** The specification for redirecting traffic. */
	export interface HttpRouteRedirect {

		/** The host that will be used in the redirect response instead of the one that was supplied in the request. */
		hostRedirect?: string | null;

		/** If set to true, the URL scheme in the redirected request is set to https. If set to false, the URL scheme of the redirected request will remain the same as that of the request. The default is set to false. */
		httpsRedirect?: boolean | null;

		/** The path that will be used in the redirect response instead of the one that was supplied in the request. path_redirect can not be supplied together with prefix_redirect. Supply one alone or neither. If neither is supplied, the path of the original request will be used for the redirect. */
		pathRedirect?: string | null;

		/**
		 * The port that will be used in the redirected request instead of the one that was supplied in the request.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		portRedirect?: number | null;

		/** Indicates that during redirection, the matched prefix (or path) should be swapped with this value. This option allows URLs be dynamically created based on the request. */
		prefixRewrite?: string | null;

		/** The HTTP Status code to use for the redirect. */
		responseCode?: HttpRouteRedirectResponseCode | null;

		/** if set to true, any accompanying query portion of the original URL is removed prior to redirecting the request. If set to false, the query portion of the original URL is retained. The default is set to false. */
		stripQuery?: boolean | null;
	}

	/** The specification for redirecting traffic. */
	export interface HttpRouteRedirectFormProperties {

		/** The host that will be used in the redirect response instead of the one that was supplied in the request. */
		hostRedirect: FormControl<string | null | undefined>,

		/** If set to true, the URL scheme in the redirected request is set to https. If set to false, the URL scheme of the redirected request will remain the same as that of the request. The default is set to false. */
		httpsRedirect: FormControl<boolean | null | undefined>,

		/** The path that will be used in the redirect response instead of the one that was supplied in the request. path_redirect can not be supplied together with prefix_redirect. Supply one alone or neither. If neither is supplied, the path of the original request will be used for the redirect. */
		pathRedirect: FormControl<string | null | undefined>,

		/**
		 * The port that will be used in the redirected request instead of the one that was supplied in the request.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		portRedirect: FormControl<number | null | undefined>,

		/** Indicates that during redirection, the matched prefix (or path) should be swapped with this value. This option allows URLs be dynamically created based on the request. */
		prefixRewrite: FormControl<string | null | undefined>,

		/** The HTTP Status code to use for the redirect. */
		responseCode: FormControl<HttpRouteRedirectResponseCode | null | undefined>,

		/** if set to true, any accompanying query portion of the original URL is removed prior to redirecting the request. If set to false, the query portion of the original URL is retained. The default is set to false. */
		stripQuery: FormControl<boolean | null | undefined>,
	}
	export function CreateHttpRouteRedirectFormGroup() {
		return new FormGroup<HttpRouteRedirectFormProperties>({
			hostRedirect: new FormControl<string | null | undefined>(undefined),
			httpsRedirect: new FormControl<boolean | null | undefined>(undefined),
			pathRedirect: new FormControl<string | null | undefined>(undefined),
			portRedirect: new FormControl<number | null | undefined>(undefined),
			prefixRewrite: new FormControl<string | null | undefined>(undefined),
			responseCode: new FormControl<HttpRouteRedirectResponseCode | null | undefined>(undefined),
			stripQuery: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export enum HttpRouteRedirectResponseCode { RESPONSE_CODE_UNSPECIFIED = 'RESPONSE_CODE_UNSPECIFIED', MOVED_PERMANENTLY_DEFAULT = 'MOVED_PERMANENTLY_DEFAULT', FOUND = 'FOUND', SEE_OTHER = 'SEE_OTHER', TEMPORARY_REDIRECT = 'TEMPORARY_REDIRECT', PERMANENT_REDIRECT = 'PERMANENT_REDIRECT' }


	/** Specifies the policy on how requests are shadowed to a separate mirrored destination service. The proxy does not wait for responses from the shadow service. Prior to sending traffic to the shadow service, the host/authority header is suffixed with -shadow. */
	export interface HttpRouteRequestMirrorPolicy {

		/** Specifications of a destination to which the request should be routed to. */
		destination?: HttpRouteDestination;

		/**
		 * Optional. The percentage of requests to get mirrored to the desired destination.
		 * Type: float
		 */
		mirrorPercent?: number | null;
	}

	/** Specifies the policy on how requests are shadowed to a separate mirrored destination service. The proxy does not wait for responses from the shadow service. Prior to sending traffic to the shadow service, the host/authority header is suffixed with -shadow. */
	export interface HttpRouteRequestMirrorPolicyFormProperties {

		/**
		 * Optional. The percentage of requests to get mirrored to the desired destination.
		 * Type: float
		 */
		mirrorPercent: FormControl<number | null | undefined>,
	}
	export function CreateHttpRouteRequestMirrorPolicyFormGroup() {
		return new FormGroup<HttpRouteRequestMirrorPolicyFormProperties>({
			mirrorPercent: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** The specifications for retries. */
	export interface HttpRouteRetryPolicy {

		/**
		 * Specifies the allowed number of retries. This number must be > 0. If not specified, default to 1.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		numRetries?: number | null;

		/** Specifies a non-zero timeout per retry attempt. */
		perTryTimeout?: string | null;

		/** Specifies one or more conditions when this retry policy applies. Valid values are: 5xx: Proxy will attempt a retry if the destination service responds with any 5xx response code, of if the destination service does not respond at all, example: disconnect, reset, read timeout, connection failure and refused streams. gateway-error: Similar to 5xx, but only applies to response codes 502, 503, 504. reset: Proxy will attempt a retry if the destination service does not respond at all (disconnect/reset/read timeout) connect-failure: Proxy will retry on failures connecting to destination for example due to connection timeouts. retriable-4xx: Proxy will retry fro retriable 4xx response codes. Currently the only retriable error supported is 409. refused-stream: Proxy will retry if the destination resets the stream with a REFUSED_STREAM error code. This reset type indicates that it is safe to retry. */
		retryConditions?: Array<string>;
	}

	/** The specifications for retries. */
	export interface HttpRouteRetryPolicyFormProperties {

		/**
		 * Specifies the allowed number of retries. This number must be > 0. If not specified, default to 1.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		numRetries: FormControl<number | null | undefined>,

		/** Specifies a non-zero timeout per retry attempt. */
		perTryTimeout: FormControl<string | null | undefined>,
	}
	export function CreateHttpRouteRetryPolicyFormGroup() {
		return new FormGroup<HttpRouteRetryPolicyFormProperties>({
			numRetries: new FormControl<number | null | undefined>(undefined),
			perTryTimeout: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The specification for cookie-based stateful session affinity where the date plane supplies a “session cookie” with the name "GSSA" which encodes a specific destination host and each request containing that cookie will be directed to that host as long as the destination host remains up and healthy. The gRPC proxyless mesh library or sidecar proxy will manage the session cookie but the client application code is responsible for copying the cookie from each RPC in the session to the next. */
	export interface HttpRouteStatefulSessionAffinityPolicy {

		/** Required. The cookie TTL value for the Set-Cookie header generated by the data plane. The lifetime of the cookie may be set to a value from 1 to 86400 seconds (24 hours) inclusive. */
		cookieTtl?: string | null;
	}

	/** The specification for cookie-based stateful session affinity where the date plane supplies a “session cookie” with the name "GSSA" which encodes a specific destination host and each request containing that cookie will be directed to that host as long as the destination host remains up and healthy. The gRPC proxyless mesh library or sidecar proxy will manage the session cookie but the client application code is responsible for copying the cookie from each RPC in the session to the next. */
	export interface HttpRouteStatefulSessionAffinityPolicyFormProperties {

		/** Required. The cookie TTL value for the Set-Cookie header generated by the data plane. The lifetime of the cookie may be set to a value from 1 to 86400 seconds (24 hours) inclusive. */
		cookieTtl: FormControl<string | null | undefined>,
	}
	export function CreateHttpRouteStatefulSessionAffinityPolicyFormGroup() {
		return new FormGroup<HttpRouteStatefulSessionAffinityPolicyFormProperties>({
			cookieTtl: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The specification for modifying the URL of the request, prior to forwarding the request to the destination. */
	export interface HttpRouteURLRewrite {

		/** Prior to forwarding the request to the selected destination, the requests host header is replaced by this value. */
		hostRewrite?: string | null;

		/** Prior to forwarding the request to the selected destination, the matching portion of the requests path is replaced by this value. */
		pathPrefixRewrite?: string | null;
	}

	/** The specification for modifying the URL of the request, prior to forwarding the request to the destination. */
	export interface HttpRouteURLRewriteFormProperties {

		/** Prior to forwarding the request to the selected destination, the requests host header is replaced by this value. */
		hostRewrite: FormControl<string | null | undefined>,

		/** Prior to forwarding the request to the selected destination, the matching portion of the requests path is replaced by this value. */
		pathPrefixRewrite: FormControl<string | null | undefined>,
	}
	export function CreateHttpRouteURLRewriteFormGroup() {
		return new FormGroup<HttpRouteURLRewriteFormProperties>({
			hostRewrite: new FormControl<string | null | undefined>(undefined),
			pathPrefixRewrite: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** RouteMatch defines specifications used to match requests. If multiple match types are set, this RouteMatch will match if ALL type of matches are matched. */
	export interface HttpRouteRouteMatch {

		/** The HTTP request path value should exactly match this value. Only one of full_path_match, prefix_match, or regex_match should be used. */
		fullPathMatch?: string | null;

		/** Specifies a list of HTTP request headers to match against. ALL of the supplied headers must be matched. */
		headers?: Array<HttpRouteHeaderMatch>;

		/** Specifies if prefix_match and full_path_match matches are case sensitive. The default value is false. */
		ignoreCase?: boolean | null;

		/** The HTTP request path value must begin with specified prefix_match. prefix_match must begin with a /. Only one of full_path_match, prefix_match, or regex_match should be used. */
		prefixMatch?: string | null;

		/** Specifies a list of query parameters to match against. ALL of the query parameters must be matched. */
		queryParameters?: Array<HttpRouteQueryParameterMatch>;

		/** The HTTP request path value must satisfy the regular expression specified by regex_match after removing any query parameters and anchor supplied with the original URL. For regular expression grammar, please see https://github.com/google/re2/wiki/Syntax Only one of full_path_match, prefix_match, or regex_match should be used. */
		regexMatch?: string | null;
	}

	/** RouteMatch defines specifications used to match requests. If multiple match types are set, this RouteMatch will match if ALL type of matches are matched. */
	export interface HttpRouteRouteMatchFormProperties {

		/** The HTTP request path value should exactly match this value. Only one of full_path_match, prefix_match, or regex_match should be used. */
		fullPathMatch: FormControl<string | null | undefined>,

		/** Specifies if prefix_match and full_path_match matches are case sensitive. The default value is false. */
		ignoreCase: FormControl<boolean | null | undefined>,

		/** The HTTP request path value must begin with specified prefix_match. prefix_match must begin with a /. Only one of full_path_match, prefix_match, or regex_match should be used. */
		prefixMatch: FormControl<string | null | undefined>,

		/** The HTTP request path value must satisfy the regular expression specified by regex_match after removing any query parameters and anchor supplied with the original URL. For regular expression grammar, please see https://github.com/google/re2/wiki/Syntax Only one of full_path_match, prefix_match, or regex_match should be used. */
		regexMatch: FormControl<string | null | undefined>,
	}
	export function CreateHttpRouteRouteMatchFormGroup() {
		return new FormGroup<HttpRouteRouteMatchFormProperties>({
			fullPathMatch: new FormControl<string | null | undefined>(undefined),
			ignoreCase: new FormControl<boolean | null | undefined>(undefined),
			prefixMatch: new FormControl<string | null | undefined>(undefined),
			regexMatch: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Specifies how to select a route rule based on HTTP request headers. */
	export interface HttpRouteHeaderMatch {

		/** The value of the header should match exactly the content of exact_match. */
		exactMatch?: string | null;

		/** The name of the HTTP header to match against. */
		header?: string | null;

		/** If specified, the match result will be inverted before checking. Default value is set to false. */
		invertMatch?: boolean | null;

		/** The value of the header must start with the contents of prefix_match. */
		prefixMatch?: string | null;

		/** A header with header_name must exist. The match takes place whether or not the header has a value. */
		presentMatch?: boolean | null;

		/** Represents an integer value range. */
		rangeMatch?: HttpRouteHeaderMatchIntegerRange;

		/** The value of the header must match the regular expression specified in regex_match. For regular expression grammar, please see: https://github.com/google/re2/wiki/Syntax */
		regexMatch?: string | null;

		/** The value of the header must end with the contents of suffix_match. */
		suffixMatch?: string | null;
	}

	/** Specifies how to select a route rule based on HTTP request headers. */
	export interface HttpRouteHeaderMatchFormProperties {

		/** The value of the header should match exactly the content of exact_match. */
		exactMatch: FormControl<string | null | undefined>,

		/** The name of the HTTP header to match against. */
		header: FormControl<string | null | undefined>,

		/** If specified, the match result will be inverted before checking. Default value is set to false. */
		invertMatch: FormControl<boolean | null | undefined>,

		/** The value of the header must start with the contents of prefix_match. */
		prefixMatch: FormControl<string | null | undefined>,

		/** A header with header_name must exist. The match takes place whether or not the header has a value. */
		presentMatch: FormControl<boolean | null | undefined>,

		/** The value of the header must match the regular expression specified in regex_match. For regular expression grammar, please see: https://github.com/google/re2/wiki/Syntax */
		regexMatch: FormControl<string | null | undefined>,

		/** The value of the header must end with the contents of suffix_match. */
		suffixMatch: FormControl<string | null | undefined>,
	}
	export function CreateHttpRouteHeaderMatchFormGroup() {
		return new FormGroup<HttpRouteHeaderMatchFormProperties>({
			exactMatch: new FormControl<string | null | undefined>(undefined),
			header: new FormControl<string | null | undefined>(undefined),
			invertMatch: new FormControl<boolean | null | undefined>(undefined),
			prefixMatch: new FormControl<string | null | undefined>(undefined),
			presentMatch: new FormControl<boolean | null | undefined>(undefined),
			regexMatch: new FormControl<string | null | undefined>(undefined),
			suffixMatch: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents an integer value range. */
	export interface HttpRouteHeaderMatchIntegerRange {

		/**
		 * End of the range (exclusive)
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		end?: number | null;

		/**
		 * Start of the range (inclusive)
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		start?: number | null;
	}

	/** Represents an integer value range. */
	export interface HttpRouteHeaderMatchIntegerRangeFormProperties {

		/**
		 * End of the range (exclusive)
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		end: FormControl<number | null | undefined>,

		/**
		 * Start of the range (inclusive)
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		start: FormControl<number | null | undefined>,
	}
	export function CreateHttpRouteHeaderMatchIntegerRangeFormGroup() {
		return new FormGroup<HttpRouteHeaderMatchIntegerRangeFormProperties>({
			end: new FormControl<number | null | undefined>(undefined),
			start: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Specifications to match a query parameter in the request. */
	export interface HttpRouteQueryParameterMatch {

		/** The value of the query parameter must exactly match the contents of exact_match. Only one of exact_match, regex_match, or present_match must be set. */
		exactMatch?: string | null;

		/** Specifies that the QueryParameterMatcher matches if request contains query parameter, irrespective of whether the parameter has a value or not. Only one of exact_match, regex_match, or present_match must be set. */
		presentMatch?: boolean | null;

		/** The name of the query parameter to match. */
		queryParameter?: string | null;

		/** The value of the query parameter must match the regular expression specified by regex_match. For regular expression grammar, please see https://github.com/google/re2/wiki/Syntax Only one of exact_match, regex_match, or present_match must be set. */
		regexMatch?: string | null;
	}

	/** Specifications to match a query parameter in the request. */
	export interface HttpRouteQueryParameterMatchFormProperties {

		/** The value of the query parameter must exactly match the contents of exact_match. Only one of exact_match, regex_match, or present_match must be set. */
		exactMatch: FormControl<string | null | undefined>,

		/** Specifies that the QueryParameterMatcher matches if request contains query parameter, irrespective of whether the parameter has a value or not. Only one of exact_match, regex_match, or present_match must be set. */
		presentMatch: FormControl<boolean | null | undefined>,

		/** The name of the query parameter to match. */
		queryParameter: FormControl<string | null | undefined>,

		/** The value of the query parameter must match the regular expression specified by regex_match. For regular expression grammar, please see https://github.com/google/re2/wiki/Syntax Only one of exact_match, regex_match, or present_match must be set. */
		regexMatch: FormControl<string | null | undefined>,
	}
	export function CreateHttpRouteQueryParameterMatchFormGroup() {
		return new FormGroup<HttpRouteQueryParameterMatchFormProperties>({
			exactMatch: new FormControl<string | null | undefined>(undefined),
			presentMatch: new FormControl<boolean | null | undefined>(undefined),
			queryParameter: new FormControl<string | null | undefined>(undefined),
			regexMatch: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response returned by the ListEndpointPolicies method. */
	export interface ListEndpointPoliciesResponse {

		/** List of EndpointPolicy resources. */
		endpointPolicies?: Array<EndpointPolicy>;

		/** If there might be more results than those appearing in this response, then `next_page_token` is included. To get the next set of results, call this method again using the value of `next_page_token` as `page_token`. */
		nextPageToken?: string | null;
	}

	/** Response returned by the ListEndpointPolicies method. */
	export interface ListEndpointPoliciesResponseFormProperties {

		/** If there might be more results than those appearing in this response, then `next_page_token` is included. To get the next set of results, call this method again using the value of `next_page_token` as `page_token`. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListEndpointPoliciesResponseFormGroup() {
		return new FormGroup<ListEndpointPoliciesResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response returned by the ListGateways method. */
	export interface ListGatewaysResponse {

		/** List of Gateway resources. */
		gateways?: Array<Gateway>;

		/** If there might be more results than those appearing in this response, then `next_page_token` is included. To get the next set of results, call this method again using the value of `next_page_token` as `page_token`. */
		nextPageToken?: string | null;

		/** Locations that could not be reached. */
		unreachable?: Array<string>;
	}

	/** Response returned by the ListGateways method. */
	export interface ListGatewaysResponseFormProperties {

		/** If there might be more results than those appearing in this response, then `next_page_token` is included. To get the next set of results, call this method again using the value of `next_page_token` as `page_token`. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListGatewaysResponseFormGroup() {
		return new FormGroup<ListGatewaysResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response returned by the ListGrpcRoutes method. */
	export interface ListGrpcRoutesResponse {

		/** List of GrpcRoute resources. */
		grpcRoutes?: Array<GrpcRoute>;

		/** If there might be more results than those appearing in this response, then `next_page_token` is included. To get the next set of results, call this method again using the value of `next_page_token` as `page_token`. */
		nextPageToken?: string | null;
	}

	/** Response returned by the ListGrpcRoutes method. */
	export interface ListGrpcRoutesResponseFormProperties {

		/** If there might be more results than those appearing in this response, then `next_page_token` is included. To get the next set of results, call this method again using the value of `next_page_token` as `page_token`. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListGrpcRoutesResponseFormGroup() {
		return new FormGroup<ListGrpcRoutesResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response returned by the ListHttpRoutes method. */
	export interface ListHttpRoutesResponse {

		/** List of HttpRoute resources. */
		httpRoutes?: Array<HttpRoute>;

		/** If there might be more results than those appearing in this response, then `next_page_token` is included. To get the next set of results, call this method again using the value of `next_page_token` as `page_token`. */
		nextPageToken?: string | null;
	}

	/** Response returned by the ListHttpRoutes method. */
	export interface ListHttpRoutesResponseFormProperties {

		/** If there might be more results than those appearing in this response, then `next_page_token` is included. To get the next set of results, call this method again using the value of `next_page_token` as `page_token`. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListHttpRoutesResponseFormGroup() {
		return new FormGroup<ListHttpRoutesResponseFormProperties>({
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


	/** Response returned by the ListMeshes method. */
	export interface ListMeshesResponse {

		/** List of Mesh resources. */
		meshes?: Array<Mesh>;

		/** If there might be more results than those appearing in this response, then `next_page_token` is included. To get the next set of results, call this method again using the value of `next_page_token` as `page_token`. */
		nextPageToken?: string | null;
	}

	/** Response returned by the ListMeshes method. */
	export interface ListMeshesResponseFormProperties {

		/** If there might be more results than those appearing in this response, then `next_page_token` is included. To get the next set of results, call this method again using the value of `next_page_token` as `page_token`. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListMeshesResponseFormGroup() {
		return new FormGroup<ListMeshesResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Mesh represents a logical configuration grouping for workload to workload communication within a service mesh. Routes that point to mesh dictate how requests are routed within this logical mesh boundary. */
	export interface Mesh {

		/** Output only. The timestamp when the resource was created. */
		createTime?: string | null;

		/** Optional. A free-text description of the resource. Max length 1024 characters. */
		description?: string | null;

		/** Optional. Determines if envoy will insert internal debug headers into upstream requests. Other Envoy headers may still be injected. By default, envoy will not insert any debug headers. */
		envoyHeaders?: GatewayEnvoyHeaders | null;

		/**
		 * Optional. If set to a valid TCP port (1-65535), instructs the SIDECAR proxy to listen on the specified port of localhost (127.0.0.1) address. The SIDECAR proxy will expect all traffic to be redirected to this port regardless of its actual ip:port destination. If unset, a port '15001' is used as the interception port. This is applicable only for sidecar proxy deployments.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		interceptionPort?: number | null;

		/** Optional. Set of label tags associated with the Mesh resource. */
		labels?: {[id: string]: string };

		/** Required. Name of the Mesh resource. It matches pattern `projects/locations/global/meshes/`. */
		name?: string | null;

		/** Output only. Server-defined URL of this resource */
		selfLink?: string | null;

		/** Output only. The timestamp when the resource was updated. */
		updateTime?: string | null;
	}

	/** Mesh represents a logical configuration grouping for workload to workload communication within a service mesh. Routes that point to mesh dictate how requests are routed within this logical mesh boundary. */
	export interface MeshFormProperties {

		/** Output only. The timestamp when the resource was created. */
		createTime: FormControl<string | null | undefined>,

		/** Optional. A free-text description of the resource. Max length 1024 characters. */
		description: FormControl<string | null | undefined>,

		/** Optional. Determines if envoy will insert internal debug headers into upstream requests. Other Envoy headers may still be injected. By default, envoy will not insert any debug headers. */
		envoyHeaders: FormControl<GatewayEnvoyHeaders | null | undefined>,

		/**
		 * Optional. If set to a valid TCP port (1-65535), instructs the SIDECAR proxy to listen on the specified port of localhost (127.0.0.1) address. The SIDECAR proxy will expect all traffic to be redirected to this port regardless of its actual ip:port destination. If unset, a port '15001' is used as the interception port. This is applicable only for sidecar proxy deployments.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		interceptionPort: FormControl<number | null | undefined>,

		/** Optional. Set of label tags associated with the Mesh resource. */
		labels: FormControl<{[id: string]: string } | null | undefined>,

		/** Required. Name of the Mesh resource. It matches pattern `projects/locations/global/meshes/`. */
		name: FormControl<string | null | undefined>,

		/** Output only. Server-defined URL of this resource */
		selfLink: FormControl<string | null | undefined>,

		/** Output only. The timestamp when the resource was updated. */
		updateTime: FormControl<string | null | undefined>,
	}
	export function CreateMeshFormGroup() {
		return new FormGroup<MeshFormProperties>({
			createTime: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			envoyHeaders: new FormControl<GatewayEnvoyHeaders | null | undefined>(undefined),
			interceptionPort: new FormControl<number | null | undefined>(undefined),
			labels: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			selfLink: new FormControl<string | null | undefined>(undefined),
			updateTime: new FormControl<string | null | undefined>(undefined),
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


	/** Response returned by the ListServiceBindings method. */
	export interface ListServiceBindingsResponse {

		/** If there might be more results than those appearing in this response, then `next_page_token` is included. To get the next set of results, call this method again using the value of `next_page_token` as `page_token`. */
		nextPageToken?: string | null;

		/** List of ServiceBinding resources. */
		serviceBindings?: Array<ServiceBinding>;
	}

	/** Response returned by the ListServiceBindings method. */
	export interface ListServiceBindingsResponseFormProperties {

		/** If there might be more results than those appearing in this response, then `next_page_token` is included. To get the next set of results, call this method again using the value of `next_page_token` as `page_token`. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListServiceBindingsResponseFormGroup() {
		return new FormGroup<ListServiceBindingsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** ServiceBinding is the resource that defines a Service Directory Service to be used in a BackendService resource. */
	export interface ServiceBinding {

		/** Output only. The timestamp when the resource was created. */
		createTime?: string | null;

		/** Optional. A free-text description of the resource. Max length 1024 characters. */
		description?: string | null;

		/** Optional. Set of label tags associated with the ServiceBinding resource. */
		labels?: {[id: string]: string };

		/** Required. Name of the ServiceBinding resource. It matches pattern `projects/locations/global/serviceBindings/service_binding_name`. */
		name?: string | null;

		/** Required. The full Service Directory Service name of the format projects/locations/namespaces/services/* */
		service?: string | null;

		/** Output only. The unique identifier of the Service Directory Service against which the Service Binding resource is validated. This is populated when the Service Binding resource is used in another resource (like Backend Service). This is of the UUID4 format. */
		serviceId?: string | null;

		/** Output only. The timestamp when the resource was updated. */
		updateTime?: string | null;
	}

	/** ServiceBinding is the resource that defines a Service Directory Service to be used in a BackendService resource. */
	export interface ServiceBindingFormProperties {

		/** Output only. The timestamp when the resource was created. */
		createTime: FormControl<string | null | undefined>,

		/** Optional. A free-text description of the resource. Max length 1024 characters. */
		description: FormControl<string | null | undefined>,

		/** Optional. Set of label tags associated with the ServiceBinding resource. */
		labels: FormControl<{[id: string]: string } | null | undefined>,

		/** Required. Name of the ServiceBinding resource. It matches pattern `projects/locations/global/serviceBindings/service_binding_name`. */
		name: FormControl<string | null | undefined>,

		/** Required. The full Service Directory Service name of the format projects/locations/namespaces/services/* */
		service: FormControl<string | null | undefined>,

		/** Output only. The unique identifier of the Service Directory Service against which the Service Binding resource is validated. This is populated when the Service Binding resource is used in another resource (like Backend Service). This is of the UUID4 format. */
		serviceId: FormControl<string | null | undefined>,

		/** Output only. The timestamp when the resource was updated. */
		updateTime: FormControl<string | null | undefined>,
	}
	export function CreateServiceBindingFormGroup() {
		return new FormGroup<ServiceBindingFormProperties>({
			createTime: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			labels: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			service: new FormControl<string | null | undefined>(undefined),
			serviceId: new FormControl<string | null | undefined>(undefined),
			updateTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response returned by the ListTcpRoutes method. */
	export interface ListTcpRoutesResponse {

		/** If there might be more results than those appearing in this response, then `next_page_token` is included. To get the next set of results, call this method again using the value of `next_page_token` as `page_token`. */
		nextPageToken?: string | null;

		/** List of TcpRoute resources. */
		tcpRoutes?: Array<TcpRoute>;
	}

	/** Response returned by the ListTcpRoutes method. */
	export interface ListTcpRoutesResponseFormProperties {

		/** If there might be more results than those appearing in this response, then `next_page_token` is included. To get the next set of results, call this method again using the value of `next_page_token` as `page_token`. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListTcpRoutesResponseFormGroup() {
		return new FormGroup<ListTcpRoutesResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** TcpRoute is the resource defining how TCP traffic should be routed by a Mesh/Gateway resource. */
	export interface TcpRoute {

		/** Output only. The timestamp when the resource was created. */
		createTime?: string | null;

		/** Optional. A free-text description of the resource. Max length 1024 characters. */
		description?: string | null;

		/** Optional. Gateways defines a list of gateways this TcpRoute is attached to, as one of the routing rules to route the requests served by the gateway. Each gateway reference should match the pattern: `projects/locations/global/gateways/` */
		gateways?: Array<string>;

		/** Optional. Set of label tags associated with the TcpRoute resource. */
		labels?: {[id: string]: string };

		/** Optional. Meshes defines a list of meshes this TcpRoute is attached to, as one of the routing rules to route the requests served by the mesh. Each mesh reference should match the pattern: `projects/locations/global/meshes/` The attached Mesh should be of a type SIDECAR */
		meshes?: Array<string>;

		/** Required. Name of the TcpRoute resource. It matches pattern `projects/locations/global/tcpRoutes/tcp_route_name>`. */
		name?: string | null;

		/** Required. Rules that define how traffic is routed and handled. At least one RouteRule must be supplied. If there are multiple rules then the action taken will be the first rule to match. */
		rules?: Array<TcpRouteRouteRule>;

		/** Output only. Server-defined URL of this resource */
		selfLink?: string | null;

		/** Output only. The timestamp when the resource was updated. */
		updateTime?: string | null;
	}

	/** TcpRoute is the resource defining how TCP traffic should be routed by a Mesh/Gateway resource. */
	export interface TcpRouteFormProperties {

		/** Output only. The timestamp when the resource was created. */
		createTime: FormControl<string | null | undefined>,

		/** Optional. A free-text description of the resource. Max length 1024 characters. */
		description: FormControl<string | null | undefined>,

		/** Optional. Set of label tags associated with the TcpRoute resource. */
		labels: FormControl<{[id: string]: string } | null | undefined>,

		/** Required. Name of the TcpRoute resource. It matches pattern `projects/locations/global/tcpRoutes/tcp_route_name>`. */
		name: FormControl<string | null | undefined>,

		/** Output only. Server-defined URL of this resource */
		selfLink: FormControl<string | null | undefined>,

		/** Output only. The timestamp when the resource was updated. */
		updateTime: FormControl<string | null | undefined>,
	}
	export function CreateTcpRouteFormGroup() {
		return new FormGroup<TcpRouteFormProperties>({
			createTime: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			labels: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			selfLink: new FormControl<string | null | undefined>(undefined),
			updateTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Specifies how to match traffic and how to route traffic when traffic is matched. */
	export interface TcpRouteRouteRule {

		/** The specifications for routing traffic and applying associated policies. */
		action?: TcpRouteRouteAction;

		/** Optional. RouteMatch defines the predicate used to match requests to a given action. Multiple match types are "OR"ed for evaluation. If no routeMatch field is specified, this rule will unconditionally match traffic. */
		matches?: Array<TcpRouteRouteMatch>;
	}

	/** Specifies how to match traffic and how to route traffic when traffic is matched. */
	export interface TcpRouteRouteRuleFormProperties {
	}
	export function CreateTcpRouteRouteRuleFormGroup() {
		return new FormGroup<TcpRouteRouteRuleFormProperties>({
		});

	}


	/** The specifications for routing traffic and applying associated policies. */
	export interface TcpRouteRouteAction {

		/** Optional. The destination services to which traffic should be forwarded. At least one destination service is required. Only one of route destination or original destination can be set. */
		destinations?: Array<TcpRouteRouteDestination>;

		/** Optional. Specifies the idle timeout for the selected route. The idle timeout is defined as the period in which there are no bytes sent or received on either the upstream or downstream connection. If not set, the default idle timeout is 30 seconds. If set to 0s, the timeout will be disabled. */
		idleTimeout?: string | null;

		/** Optional. If true, Router will use the destination IP and port of the original connection as the destination of the request. Default is false. Only one of route destinations or original destination can be set. */
		originalDestination?: boolean | null;
	}

	/** The specifications for routing traffic and applying associated policies. */
	export interface TcpRouteRouteActionFormProperties {

		/** Optional. Specifies the idle timeout for the selected route. The idle timeout is defined as the period in which there are no bytes sent or received on either the upstream or downstream connection. If not set, the default idle timeout is 30 seconds. If set to 0s, the timeout will be disabled. */
		idleTimeout: FormControl<string | null | undefined>,

		/** Optional. If true, Router will use the destination IP and port of the original connection as the destination of the request. Default is false. Only one of route destinations or original destination can be set. */
		originalDestination: FormControl<boolean | null | undefined>,
	}
	export function CreateTcpRouteRouteActionFormGroup() {
		return new FormGroup<TcpRouteRouteActionFormProperties>({
			idleTimeout: new FormControl<string | null | undefined>(undefined),
			originalDestination: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Describe the destination for traffic to be routed to. */
	export interface TcpRouteRouteDestination {

		/** Required. The URL of a BackendService to route traffic to. */
		serviceName?: string | null;

		/**
		 * Optional. Specifies the proportion of requests forwarded to the backend referenced by the serviceName field. This is computed as: - weight/Sum(weights in this destination list). For non-zero values, there may be some epsilon from the exact proportion defined here depending on the precision an implementation supports. If only one serviceName is specified and it has a weight greater than 0, 100% of the traffic is forwarded to that backend. If weights are specified for any one service name, they need to be specified for all of them. If weights are unspecified for all services, then, traffic is distributed in equal proportions to all of them.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		weight?: number | null;
	}

	/** Describe the destination for traffic to be routed to. */
	export interface TcpRouteRouteDestinationFormProperties {

		/** Required. The URL of a BackendService to route traffic to. */
		serviceName: FormControl<string | null | undefined>,

		/**
		 * Optional. Specifies the proportion of requests forwarded to the backend referenced by the serviceName field. This is computed as: - weight/Sum(weights in this destination list). For non-zero values, there may be some epsilon from the exact proportion defined here depending on the precision an implementation supports. If only one serviceName is specified and it has a weight greater than 0, 100% of the traffic is forwarded to that backend. If weights are specified for any one service name, they need to be specified for all of them. If weights are unspecified for all services, then, traffic is distributed in equal proportions to all of them.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		weight: FormControl<number | null | undefined>,
	}
	export function CreateTcpRouteRouteDestinationFormGroup() {
		return new FormGroup<TcpRouteRouteDestinationFormProperties>({
			serviceName: new FormControl<string | null | undefined>(undefined),
			weight: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** RouteMatch defines the predicate used to match requests to a given action. Multiple match types are "OR"ed for evaluation. If no routeMatch field is specified, this rule will unconditionally match traffic. */
	export interface TcpRouteRouteMatch {

		/** Required. Must be specified in the CIDR range format. A CIDR range consists of an IP Address and a prefix length to construct the subnet mask. By default, the prefix length is 32 (i.e. matches a single IP address). Only IPV4 addresses are supported. Examples: "10.0.0.1" - matches against this exact IP address. "10.0.0.0/8" - matches against any IP address within the 10.0.0.0 subnet and 255.255.255.0 mask. "0.0.0.0/0" - matches against any IP address'. */
		address?: string | null;

		/** Required. Specifies the destination port to match against. */
		port?: string | null;
	}

	/** RouteMatch defines the predicate used to match requests to a given action. Multiple match types are "OR"ed for evaluation. If no routeMatch field is specified, this rule will unconditionally match traffic. */
	export interface TcpRouteRouteMatchFormProperties {

		/** Required. Must be specified in the CIDR range format. A CIDR range consists of an IP Address and a prefix length to construct the subnet mask. By default, the prefix length is 32 (i.e. matches a single IP address). Only IPV4 addresses are supported. Examples: "10.0.0.1" - matches against this exact IP address. "10.0.0.0/8" - matches against any IP address within the 10.0.0.0 subnet and 255.255.255.0 mask. "0.0.0.0/0" - matches against any IP address'. */
		address: FormControl<string | null | undefined>,

		/** Required. Specifies the destination port to match against. */
		port: FormControl<string | null | undefined>,
	}
	export function CreateTcpRouteRouteMatchFormGroup() {
		return new FormGroup<TcpRouteRouteMatchFormProperties>({
			address: new FormControl<string | null | undefined>(undefined),
			port: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response returned by the ListTlsRoutes method. */
	export interface ListTlsRoutesResponse {

		/** If there might be more results than those appearing in this response, then `next_page_token` is included. To get the next set of results, call this method again using the value of `next_page_token` as `page_token`. */
		nextPageToken?: string | null;

		/** List of TlsRoute resources. */
		tlsRoutes?: Array<TlsRoute>;
	}

	/** Response returned by the ListTlsRoutes method. */
	export interface ListTlsRoutesResponseFormProperties {

		/** If there might be more results than those appearing in this response, then `next_page_token` is included. To get the next set of results, call this method again using the value of `next_page_token` as `page_token`. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListTlsRoutesResponseFormGroup() {
		return new FormGroup<ListTlsRoutesResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** TlsRoute defines how traffic should be routed based on SNI and other matching L3 attributes. */
	export interface TlsRoute {

		/** Output only. The timestamp when the resource was created. */
		createTime?: string | null;

		/** Optional. A free-text description of the resource. Max length 1024 characters. */
		description?: string | null;

		/** Optional. Gateways defines a list of gateways this TlsRoute is attached to, as one of the routing rules to route the requests served by the gateway. Each gateway reference should match the pattern: `projects/locations/global/gateways/` */
		gateways?: Array<string>;

		/** Optional. Set of label tags associated with the TlsRoute resource. */
		labels?: {[id: string]: string };

		/** Optional. Meshes defines a list of meshes this TlsRoute is attached to, as one of the routing rules to route the requests served by the mesh. Each mesh reference should match the pattern: `projects/locations/global/meshes/` The attached Mesh should be of a type SIDECAR */
		meshes?: Array<string>;

		/** Required. Name of the TlsRoute resource. It matches pattern `projects/locations/global/tlsRoutes/tls_route_name>`. */
		name?: string | null;

		/** Required. Rules that define how traffic is routed and handled. At least one RouteRule must be supplied. If there are multiple rules then the action taken will be the first rule to match. */
		rules?: Array<TlsRouteRouteRule>;

		/** Output only. Server-defined URL of this resource */
		selfLink?: string | null;

		/** Output only. The timestamp when the resource was updated. */
		updateTime?: string | null;
	}

	/** TlsRoute defines how traffic should be routed based on SNI and other matching L3 attributes. */
	export interface TlsRouteFormProperties {

		/** Output only. The timestamp when the resource was created. */
		createTime: FormControl<string | null | undefined>,

		/** Optional. A free-text description of the resource. Max length 1024 characters. */
		description: FormControl<string | null | undefined>,

		/** Optional. Set of label tags associated with the TlsRoute resource. */
		labels: FormControl<{[id: string]: string } | null | undefined>,

		/** Required. Name of the TlsRoute resource. It matches pattern `projects/locations/global/tlsRoutes/tls_route_name>`. */
		name: FormControl<string | null | undefined>,

		/** Output only. Server-defined URL of this resource */
		selfLink: FormControl<string | null | undefined>,

		/** Output only. The timestamp when the resource was updated. */
		updateTime: FormControl<string | null | undefined>,
	}
	export function CreateTlsRouteFormGroup() {
		return new FormGroup<TlsRouteFormProperties>({
			createTime: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			labels: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			selfLink: new FormControl<string | null | undefined>(undefined),
			updateTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Specifies how to match traffic and how to route traffic when traffic is matched. */
	export interface TlsRouteRouteRule {

		/** The specifications for routing traffic and applying associated policies. */
		action?: TlsRouteRouteAction;

		/** Required. RouteMatch defines the predicate used to match requests to a given action. Multiple match types are "OR"ed for evaluation. */
		matches?: Array<TlsRouteRouteMatch>;
	}

	/** Specifies how to match traffic and how to route traffic when traffic is matched. */
	export interface TlsRouteRouteRuleFormProperties {
	}
	export function CreateTlsRouteRouteRuleFormGroup() {
		return new FormGroup<TlsRouteRouteRuleFormProperties>({
		});

	}


	/** The specifications for routing traffic and applying associated policies. */
	export interface TlsRouteRouteAction {

		/** Required. The destination services to which traffic should be forwarded. At least one destination service is required. */
		destinations?: Array<TlsRouteRouteDestination>;

		/** Optional. Specifies the idle timeout for the selected route. The idle timeout is defined as the period in which there are no bytes sent or received on either the upstream or downstream connection. If not set, the default idle timeout is 1 hour. If set to 0s, the timeout will be disabled. */
		idleTimeout?: string | null;
	}

	/** The specifications for routing traffic and applying associated policies. */
	export interface TlsRouteRouteActionFormProperties {

		/** Optional. Specifies the idle timeout for the selected route. The idle timeout is defined as the period in which there are no bytes sent or received on either the upstream or downstream connection. If not set, the default idle timeout is 1 hour. If set to 0s, the timeout will be disabled. */
		idleTimeout: FormControl<string | null | undefined>,
	}
	export function CreateTlsRouteRouteActionFormGroup() {
		return new FormGroup<TlsRouteRouteActionFormProperties>({
			idleTimeout: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Describe the destination for traffic to be routed to. */
	export interface TlsRouteRouteDestination {

		/** Required. The URL of a BackendService to route traffic to. */
		serviceName?: string | null;

		/**
		 * Optional. Specifies the proportion of requests forwareded to the backend referenced by the service_name field. This is computed as: - weight/Sum(weights in destinations) Weights in all destinations does not need to sum up to 100.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		weight?: number | null;
	}

	/** Describe the destination for traffic to be routed to. */
	export interface TlsRouteRouteDestinationFormProperties {

		/** Required. The URL of a BackendService to route traffic to. */
		serviceName: FormControl<string | null | undefined>,

		/**
		 * Optional. Specifies the proportion of requests forwareded to the backend referenced by the service_name field. This is computed as: - weight/Sum(weights in destinations) Weights in all destinations does not need to sum up to 100.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		weight: FormControl<number | null | undefined>,
	}
	export function CreateTlsRouteRouteDestinationFormGroup() {
		return new FormGroup<TlsRouteRouteDestinationFormProperties>({
			serviceName: new FormControl<string | null | undefined>(undefined),
			weight: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** RouteMatch defines the predicate used to match requests to a given action. Multiple match types are "AND"ed for evaluation. If no routeMatch field is specified, this rule will unconditionally match traffic. */
	export interface TlsRouteRouteMatch {

		/** Optional. ALPN (Application-Layer Protocol Negotiation) to match against. Examples: "http/1.1", "h2". At least one of sni_host and alpn is required. Up to 5 alpns across all matches can be set. */
		alpn?: Array<string>;

		/** Optional. SNI (server name indicator) to match against. SNI will be matched against all wildcard domains, i.e. `www.example.com` will be first matched against `www.example.com`, then `*.example.com`, then `*.com.` Partial wildcards are not supported, and values like *w.example.com are invalid. At least one of sni_host and alpn is required. Up to 5 sni hosts across all matches can be set. */
		sniHost?: Array<string>;
	}

	/** RouteMatch defines the predicate used to match requests to a given action. Multiple match types are "AND"ed for evaluation. If no routeMatch field is specified, this rule will unconditionally match traffic. */
	export interface TlsRouteRouteMatchFormProperties {
	}
	export function CreateTlsRouteRouteMatchFormGroup() {
		return new FormGroup<TlsRouteRouteMatchFormProperties>({
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


	/** An Identity and Access Management (IAM) policy, which specifies access controls for Google Cloud resources. A `Policy` is a collection of `bindings`. A `binding` binds one or more `members`, or principals, to a single `role`. Principals can be user accounts, service accounts, Google groups, and domains (such as G Suite). A `role` is a named list of permissions; each `role` can be an IAM predefined role or a user-created custom role. For some types of Google Cloud resources, a `binding` can also specify a `condition`, which is a logical expression that allows access to a resource only if the expression evaluates to `true`. A condition can add constraints based on attributes of the request, the resource, or both. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies). **JSON example:** ``` { "bindings": [ { "role": "roles/resourcemanager.organizationAdmin", "members": [ "user:mike@example.com", "group:admins@example.com", "domain:google.com", "serviceAccount:my-project-id@appspot.gserviceaccount.com" ] }, { "role": "roles/resourcemanager.organizationViewer", "members": [ "user:eve@example.com" ], "condition": { "title": "expirable access", "description": "Does not grant access after Sep 2020", "expression": "request.time < timestamp('2020-10-01T00:00:00.000Z')", } } ], "etag": "BwWWja0YfJA=", "version": 3 } ``` **YAML example:** ``` bindings: - members: - user:mike@example.com - group:admins@example.com - domain:google.com - serviceAccount:my-project-id@appspot.gserviceaccount.com role: roles/resourcemanager.organizationAdmin - members: - user:eve@example.com role: roles/resourcemanager.organizationViewer condition: title: expirable access description: Does not grant access after Sep 2020 expression: request.time < timestamp('2020-10-01T00:00:00.000Z') etag: BwWWja0YfJA= version: 3 ``` For a description of IAM and its features, see the [IAM documentation](https://cloud.google.com/iam/docs/). */
	export interface Policy {

		/** Specifies cloud audit logging configuration for this policy. */
		auditConfigs?: Array<AuditConfig>;

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


	/** Request message for `SetIamPolicy` method. */
	export interface SetIamPolicyRequest {

		/** An Identity and Access Management (IAM) policy, which specifies access controls for Google Cloud resources. A `Policy` is a collection of `bindings`. A `binding` binds one or more `members`, or principals, to a single `role`. Principals can be user accounts, service accounts, Google groups, and domains (such as G Suite). A `role` is a named list of permissions; each `role` can be an IAM predefined role or a user-created custom role. For some types of Google Cloud resources, a `binding` can also specify a `condition`, which is a logical expression that allows access to a resource only if the expression evaluates to `true`. A condition can add constraints based on attributes of the request, the resource, or both. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies). **JSON example:** ``` { "bindings": [ { "role": "roles/resourcemanager.organizationAdmin", "members": [ "user:mike@example.com", "group:admins@example.com", "domain:google.com", "serviceAccount:my-project-id@appspot.gserviceaccount.com" ] }, { "role": "roles/resourcemanager.organizationViewer", "members": [ "user:eve@example.com" ], "condition": { "title": "expirable access", "description": "Does not grant access after Sep 2020", "expression": "request.time < timestamp('2020-10-01T00:00:00.000Z')", } } ], "etag": "BwWWja0YfJA=", "version": 3 } ``` **YAML example:** ``` bindings: - members: - user:mike@example.com - group:admins@example.com - domain:google.com - serviceAccount:my-project-id@appspot.gserviceaccount.com role: roles/resourcemanager.organizationAdmin - members: - user:eve@example.com role: roles/resourcemanager.organizationViewer condition: title: expirable access description: Does not grant access after Sep 2020 expression: request.time < timestamp('2020-10-01T00:00:00.000Z') etag: BwWWja0YfJA= version: 3 ``` For a description of IAM and its features, see the [IAM documentation](https://cloud.google.com/iam/docs/). */
		policy?: Policy;

		/** OPTIONAL: A FieldMask specifying which fields of the policy to modify. Only the fields in the mask will be modified. If no mask is provided, the following default mask is used: `paths: "bindings, etag"` */
		updateMask?: string | null;
	}

	/** Request message for `SetIamPolicy` method. */
	export interface SetIamPolicyRequestFormProperties {

		/** OPTIONAL: A FieldMask specifying which fields of the policy to modify. Only the fields in the mask will be modified. If no mask is provided, the following default mask is used: `paths: "bindings, etag"` */
		updateMask: FormControl<string | null | undefined>,
	}
	export function CreateSetIamPolicyRequestFormGroup() {
		return new FormGroup<SetIamPolicyRequestFormProperties>({
			updateMask: new FormControl<string | null | undefined>(undefined),
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
		 * Deletes a single TlsRoute.
		 * Delete v1/{name}
		 * @param {string} name Required. A name of the TlsRoute to delete. Must be in the format `projects/locations/global/tlsRoutes/*`.
		 * @return {Operation} Successful response
		 */
		Networkservices_projects_locations_tlsRoutes_delete(name: string): Observable<Operation> {
			return this.http.delete<Operation>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)), {});
		}

		/**
		 * Gets details of a single TlsRoute.
		 * Get v1/{name}
		 * @param {string} name Required. A name of the TlsRoute to get. Must be in the format `projects/locations/global/tlsRoutes/*`.
		 * @return {TlsRoute} Successful response
		 */
		Networkservices_projects_locations_tlsRoutes_get(name: string): Observable<TlsRoute> {
			return this.http.get<TlsRoute>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)), {});
		}

		/**
		 * Updates the parameters of a single TlsRoute.
		 * Patch v1/{name}
		 * @param {string} name Required. Name of the TlsRoute resource. It matches pattern `projects/locations/global/tlsRoutes/tls_route_name>`.
		 * @param {string} updateMask Optional. Field mask is used to specify the fields to be overwritten in the TlsRoute resource by the update. The fields specified in the update_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask. If the user does not provide a mask then all fields will be overwritten.
		 * @return {Operation} Successful response
		 */
		Networkservices_projects_locations_tlsRoutes_patch(name: string, updateMask: string | null | undefined, requestBody: TlsRoute): Observable<Operation> {
			return this.http.patch<Operation>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + '&updateMask=' + (updateMask == null ? '' : encodeURIComponent(updateMask)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
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
		Networkservices_projects_locations_list(name: string, filter: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListLocationsResponse> {
			return this.http.get<ListLocationsResponse>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + '/locations&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
		 * Get v1/{name}/operations
		 * @param {string} name The name of the operation's parent resource.
		 * @param {string} filter The standard list filter.
		 * @param {number} pageSize The standard list page size.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} pageToken The standard list page token.
		 * @return {ListOperationsResponse} Successful response
		 */
		Networkservices_projects_locations_operations_list(name: string, filter: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListOperationsResponse> {
			return this.http.get<ListOperationsResponse>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + '/operations&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
		 * Post v1/{name}:cancel
		 * @param {string} name The name of the operation resource to be cancelled.
		 * @return {Empty} Successful response
		 */
		Networkservices_projects_locations_operations_cancel(name: string, requestBody: CancelOperationRequest): Observable<Empty> {
			return this.http.post<Empty>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + ':cancel', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists EndpointPolicies in a given project and location.
		 * Get v1/{parent}/endpointPolicies
		 * @param {string} parent Required. The project and location from which the EndpointPolicies should be listed, specified in the format `projects/locations/global`.
		 * @param {number} pageSize Maximum number of EndpointPolicies to return per call.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} pageToken The value returned by the last `ListEndpointPoliciesResponse` Indicates that this is a continuation of a prior `ListEndpointPolicies` call, and that the system should return the next page of data.
		 * @return {ListEndpointPoliciesResponse} Successful response
		 */
		Networkservices_projects_locations_endpointPolicies_list(parent: string, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListEndpointPoliciesResponse> {
			return this.http.get<ListEndpointPoliciesResponse>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/endpointPolicies&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Creates a new EndpointPolicy in a given project and location.
		 * Post v1/{parent}/endpointPolicies
		 * @param {string} parent Required. The parent resource of the EndpointPolicy. Must be in the format `projects/locations/global`.
		 * @param {string} endpointPolicyId Required. Short name of the EndpointPolicy resource to be created. E.g. "CustomECS".
		 * @return {Operation} Successful response
		 */
		Networkservices_projects_locations_endpointPolicies_create(parent: string, endpointPolicyId: string | null | undefined, requestBody: EndpointPolicy): Observable<Operation> {
			return this.http.post<Operation>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/endpointPolicies&endpointPolicyId=' + (endpointPolicyId == null ? '' : encodeURIComponent(endpointPolicyId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists Gateways in a given project and location.
		 * Get v1/{parent}/gateways
		 * @param {string} parent Required. The project and location from which the Gateways should be listed, specified in the format `projects/locations/*`.
		 * @param {number} pageSize Maximum number of Gateways to return per call.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} pageToken The value returned by the last `ListGatewaysResponse` Indicates that this is a continuation of a prior `ListGateways` call, and that the system should return the next page of data.
		 * @return {ListGatewaysResponse} Successful response
		 */
		Networkservices_projects_locations_gateways_list(parent: string, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListGatewaysResponse> {
			return this.http.get<ListGatewaysResponse>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/gateways&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Creates a new Gateway in a given project and location.
		 * Post v1/{parent}/gateways
		 * @param {string} parent Required. The parent resource of the Gateway. Must be in the format `projects/locations/*`.
		 * @param {string} gatewayId Required. Short name of the Gateway resource to be created.
		 * @return {Operation} Successful response
		 */
		Networkservices_projects_locations_gateways_create(parent: string, gatewayId: string | null | undefined, requestBody: Gateway): Observable<Operation> {
			return this.http.post<Operation>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/gateways&gatewayId=' + (gatewayId == null ? '' : encodeURIComponent(gatewayId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists GrpcRoutes in a given project and location.
		 * Get v1/{parent}/grpcRoutes
		 * @param {string} parent Required. The project and location from which the GrpcRoutes should be listed, specified in the format `projects/locations/global`.
		 * @param {number} pageSize Maximum number of GrpcRoutes to return per call.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} pageToken The value returned by the last `ListGrpcRoutesResponse` Indicates that this is a continuation of a prior `ListGrpcRoutes` call, and that the system should return the next page of data.
		 * @return {ListGrpcRoutesResponse} Successful response
		 */
		Networkservices_projects_locations_grpcRoutes_list(parent: string, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListGrpcRoutesResponse> {
			return this.http.get<ListGrpcRoutesResponse>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/grpcRoutes&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Creates a new GrpcRoute in a given project and location.
		 * Post v1/{parent}/grpcRoutes
		 * @param {string} parent Required. The parent resource of the GrpcRoute. Must be in the format `projects/locations/global`.
		 * @param {string} grpcRouteId Required. Short name of the GrpcRoute resource to be created.
		 * @return {Operation} Successful response
		 */
		Networkservices_projects_locations_grpcRoutes_create(parent: string, grpcRouteId: string | null | undefined, requestBody: GrpcRoute): Observable<Operation> {
			return this.http.post<Operation>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/grpcRoutes&grpcRouteId=' + (grpcRouteId == null ? '' : encodeURIComponent(grpcRouteId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists HttpRoute in a given project and location.
		 * Get v1/{parent}/httpRoutes
		 * @param {string} parent Required. The project and location from which the HttpRoutes should be listed, specified in the format `projects/locations/global`.
		 * @param {number} pageSize Maximum number of HttpRoutes to return per call.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} pageToken The value returned by the last `ListHttpRoutesResponse` Indicates that this is a continuation of a prior `ListHttpRoutes` call, and that the system should return the next page of data.
		 * @return {ListHttpRoutesResponse} Successful response
		 */
		Networkservices_projects_locations_httpRoutes_list(parent: string, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListHttpRoutesResponse> {
			return this.http.get<ListHttpRoutesResponse>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/httpRoutes&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Creates a new HttpRoute in a given project and location.
		 * Post v1/{parent}/httpRoutes
		 * @param {string} parent Required. The parent resource of the HttpRoute. Must be in the format `projects/locations/global`.
		 * @param {string} httpRouteId Required. Short name of the HttpRoute resource to be created.
		 * @return {Operation} Successful response
		 */
		Networkservices_projects_locations_httpRoutes_create(parent: string, httpRouteId: string | null | undefined, requestBody: HttpRoute): Observable<Operation> {
			return this.http.post<Operation>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/httpRoutes&httpRouteId=' + (httpRouteId == null ? '' : encodeURIComponent(httpRouteId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists Meshes in a given project and location.
		 * Get v1/{parent}/meshes
		 * @param {string} parent Required. The project and location from which the Meshes should be listed, specified in the format `projects/locations/global`.
		 * @param {number} pageSize Maximum number of Meshes to return per call.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} pageToken The value returned by the last `ListMeshesResponse` Indicates that this is a continuation of a prior `ListMeshes` call, and that the system should return the next page of data.
		 * @return {ListMeshesResponse} Successful response
		 */
		Networkservices_projects_locations_meshes_list(parent: string, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListMeshesResponse> {
			return this.http.get<ListMeshesResponse>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/meshes&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Creates a new Mesh in a given project and location.
		 * Post v1/{parent}/meshes
		 * @param {string} parent Required. The parent resource of the Mesh. Must be in the format `projects/locations/global`.
		 * @param {string} meshId Required. Short name of the Mesh resource to be created.
		 * @return {Operation} Successful response
		 */
		Networkservices_projects_locations_meshes_create(parent: string, meshId: string | null | undefined, requestBody: Mesh): Observable<Operation> {
			return this.http.post<Operation>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/meshes&meshId=' + (meshId == null ? '' : encodeURIComponent(meshId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists ServiceBinding in a given project and location.
		 * Get v1/{parent}/serviceBindings
		 * @param {string} parent Required. The project and location from which the ServiceBindings should be listed, specified in the format `projects/locations/global`.
		 * @param {number} pageSize Maximum number of ServiceBindings to return per call.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} pageToken The value returned by the last `ListServiceBindingsResponse` Indicates that this is a continuation of a prior `ListRouters` call, and that the system should return the next page of data.
		 * @return {ListServiceBindingsResponse} Successful response
		 */
		Networkservices_projects_locations_serviceBindings_list(parent: string, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListServiceBindingsResponse> {
			return this.http.get<ListServiceBindingsResponse>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/serviceBindings&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Creates a new ServiceBinding in a given project and location.
		 * Post v1/{parent}/serviceBindings
		 * @param {string} parent Required. The parent resource of the ServiceBinding. Must be in the format `projects/locations/global`.
		 * @param {string} serviceBindingId Required. Short name of the ServiceBinding resource to be created.
		 * @return {Operation} Successful response
		 */
		Networkservices_projects_locations_serviceBindings_create(parent: string, serviceBindingId: string | null | undefined, requestBody: ServiceBinding): Observable<Operation> {
			return this.http.post<Operation>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/serviceBindings&serviceBindingId=' + (serviceBindingId == null ? '' : encodeURIComponent(serviceBindingId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists TcpRoute in a given project and location.
		 * Get v1/{parent}/tcpRoutes
		 * @param {string} parent Required. The project and location from which the TcpRoutes should be listed, specified in the format `projects/locations/global`.
		 * @param {number} pageSize Maximum number of TcpRoutes to return per call.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} pageToken The value returned by the last `ListTcpRoutesResponse` Indicates that this is a continuation of a prior `ListTcpRoutes` call, and that the system should return the next page of data.
		 * @return {ListTcpRoutesResponse} Successful response
		 */
		Networkservices_projects_locations_tcpRoutes_list(parent: string, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListTcpRoutesResponse> {
			return this.http.get<ListTcpRoutesResponse>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/tcpRoutes&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Creates a new TcpRoute in a given project and location.
		 * Post v1/{parent}/tcpRoutes
		 * @param {string} parent Required. The parent resource of the TcpRoute. Must be in the format `projects/locations/global`.
		 * @param {string} tcpRouteId Required. Short name of the TcpRoute resource to be created.
		 * @return {Operation} Successful response
		 */
		Networkservices_projects_locations_tcpRoutes_create(parent: string, tcpRouteId: string | null | undefined, requestBody: TcpRoute): Observable<Operation> {
			return this.http.post<Operation>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/tcpRoutes&tcpRouteId=' + (tcpRouteId == null ? '' : encodeURIComponent(tcpRouteId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists TlsRoute in a given project and location.
		 * Get v1/{parent}/tlsRoutes
		 * @param {string} parent Required. The project and location from which the TlsRoutes should be listed, specified in the format `projects/locations/global`.
		 * @param {number} pageSize Maximum number of TlsRoutes to return per call.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} pageToken The value returned by the last `ListTlsRoutesResponse` Indicates that this is a continuation of a prior `ListTlsRoutes` call, and that the system should return the next page of data.
		 * @return {ListTlsRoutesResponse} Successful response
		 */
		Networkservices_projects_locations_tlsRoutes_list(parent: string, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListTlsRoutesResponse> {
			return this.http.get<ListTlsRoutesResponse>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/tlsRoutes&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Creates a new TlsRoute in a given project and location.
		 * Post v1/{parent}/tlsRoutes
		 * @param {string} parent Required. The parent resource of the TlsRoute. Must be in the format `projects/locations/global`.
		 * @param {string} tlsRouteId Required. Short name of the TlsRoute resource to be created.
		 * @return {Operation} Successful response
		 */
		Networkservices_projects_locations_tlsRoutes_create(parent: string, tlsRouteId: string | null | undefined, requestBody: TlsRoute): Observable<Operation> {
			return this.http.post<Operation>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/tlsRoutes&tlsRouteId=' + (tlsRouteId == null ? '' : encodeURIComponent(tlsRouteId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
		 * Get v1/{resource}:getIamPolicy
		 * @param {string} resource REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
		 * @param {number} options_requestedPolicyVersion Optional. The maximum policy version that will be used to format the policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset. The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies).
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {Policy} Successful response
		 */
		Networkservices_projects_locations_serviceBindings_getIamPolicy(resource: string, options_requestedPolicyVersion: number | null | undefined): Observable<Policy> {
			return this.http.get<Policy>(this.baseUri + 'v1/' + (resource == null ? '' : encodeURIComponent(resource)) + ':getIamPolicy&options_requestedPolicyVersion=' + options_requestedPolicyVersion, {});
		}

		/**
		 * Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
		 * Post v1/{resource}:setIamPolicy
		 * @param {string} resource REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
		 * @return {Policy} Successful response
		 */
		Networkservices_projects_locations_serviceBindings_setIamPolicy(resource: string, requestBody: SetIamPolicyRequest): Observable<Policy> {
			return this.http.post<Policy>(this.baseUri + 'v1/' + (resource == null ? '' : encodeURIComponent(resource)) + ':setIamPolicy', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
		 * Post v1/{resource}:testIamPermissions
		 * @param {string} resource REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
		 * @return {TestIamPermissionsResponse} Successful response
		 */
		Networkservices_projects_locations_serviceBindings_testIamPermissions(resource: string, requestBody: TestIamPermissionsRequest): Observable<TestIamPermissionsResponse> {
			return this.http.post<TestIamPermissionsResponse>(this.baseUri + 'v1/' + (resource == null ? '' : encodeURIComponent(resource)) + ':testIamPermissions', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

}
