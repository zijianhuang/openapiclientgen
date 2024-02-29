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


	/** A cluster in a private cloud. */
	export interface Cluster {

		/** Output only. Creation time of this resource. */
		createTime?: string | null;

		/** Output only. True if the cluster is a management cluster; false otherwise. There can only be one management cluster in a private cloud and it has to be the first one. */
		management?: boolean | null;

		/** Output only. The resource name of this cluster. Resource names are schemeless URIs that follow the conventions in https://cloud.google.com/apis/design/resource_names. For example: `projects/my-project/locations/us-central1-a/privateClouds/my-cloud/clusters/my-cluster` */
		name?: string | null;

		/** Required. The map of cluster node types in this cluster, where the key is canonical identifier of the node type (corresponds to the `NodeType`). */
		nodeTypeConfigs?: {[id: string]: NodeTypeConfig };

		/** Output only. State of the resource. */
		state?: ClusterState | null;

		/** Configuration of a stretched cluster. */
		stretchedClusterConfig?: StretchedClusterConfig;

		/** Output only. System-generated unique identifier for the resource. */
		uid?: string | null;

		/** Output only. Last update time of this resource. */
		updateTime?: string | null;
	}

	/** A cluster in a private cloud. */
	export interface ClusterFormProperties {

		/** Output only. Creation time of this resource. */
		createTime: FormControl<string | null | undefined>,

		/** Output only. True if the cluster is a management cluster; false otherwise. There can only be one management cluster in a private cloud and it has to be the first one. */
		management: FormControl<boolean | null | undefined>,

		/** Output only. The resource name of this cluster. Resource names are schemeless URIs that follow the conventions in https://cloud.google.com/apis/design/resource_names. For example: `projects/my-project/locations/us-central1-a/privateClouds/my-cloud/clusters/my-cluster` */
		name: FormControl<string | null | undefined>,

		/** Required. The map of cluster node types in this cluster, where the key is canonical identifier of the node type (corresponds to the `NodeType`). */
		nodeTypeConfigs: FormControl<{[id: string]: NodeTypeConfig } | null | undefined>,

		/** Output only. State of the resource. */
		state: FormControl<ClusterState | null | undefined>,

		/** Output only. System-generated unique identifier for the resource. */
		uid: FormControl<string | null | undefined>,

		/** Output only. Last update time of this resource. */
		updateTime: FormControl<string | null | undefined>,
	}
	export function CreateClusterFormGroup() {
		return new FormGroup<ClusterFormProperties>({
			createTime: new FormControl<string | null | undefined>(undefined),
			management: new FormControl<boolean | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			nodeTypeConfigs: new FormControl<{[id: string]: NodeTypeConfig } | null | undefined>(undefined),
			state: new FormControl<ClusterState | null | undefined>(undefined),
			uid: new FormControl<string | null | undefined>(undefined),
			updateTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Information about the type and number of nodes associated with the cluster. */
	export interface NodeTypeConfig {

		/**
		 * Optional. Customized number of cores available to each node of the type. This number must always be one of `nodeType.availableCustomCoreCounts`. If zero is provided max value from `nodeType.availableCustomCoreCounts` will be used.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		customCoreCount?: number | null;

		/**
		 * Required. The number of nodes of this type in the cluster
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		nodeCount?: number | null;
	}

	/** Information about the type and number of nodes associated with the cluster. */
	export interface NodeTypeConfigFormProperties {

		/**
		 * Optional. Customized number of cores available to each node of the type. This number must always be one of `nodeType.availableCustomCoreCounts`. If zero is provided max value from `nodeType.availableCustomCoreCounts` will be used.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		customCoreCount: FormControl<number | null | undefined>,

		/**
		 * Required. The number of nodes of this type in the cluster
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		nodeCount: FormControl<number | null | undefined>,
	}
	export function CreateNodeTypeConfigFormGroup() {
		return new FormGroup<NodeTypeConfigFormProperties>({
			customCoreCount: new FormControl<number | null | undefined>(undefined),
			nodeCount: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum ClusterState { STATE_UNSPECIFIED = 'STATE_UNSPECIFIED', ACTIVE = 'ACTIVE', CREATING = 'CREATING', UPDATING = 'UPDATING', DELETING = 'DELETING', REPAIRING = 'REPAIRING' }


	/** Configuration of a stretched cluster. */
	export interface StretchedClusterConfig {

		/** Required. Zone that will remain operational when connection between the two zones is lost. Specify the resource name of a zone that belongs to the region of the private cloud. For example: `projects/{project}/locations/europe-west3-a` where `{project}` can either be a project number or a project ID. */
		preferredLocation?: string | null;

		/** Required. Additional zone for a higher level of availability and load balancing. Specify the resource name of a zone that belongs to the region of the private cloud. For example: `projects/{project}/locations/europe-west3-b` where `{project}` can either be a project number or a project ID. */
		secondaryLocation?: string | null;
	}

	/** Configuration of a stretched cluster. */
	export interface StretchedClusterConfigFormProperties {

		/** Required. Zone that will remain operational when connection between the two zones is lost. Specify the resource name of a zone that belongs to the region of the private cloud. For example: `projects/{project}/locations/europe-west3-a` where `{project}` can either be a project number or a project ID. */
		preferredLocation: FormControl<string | null | undefined>,

		/** Required. Additional zone for a higher level of availability and load balancing. Specify the resource name of a zone that belongs to the region of the private cloud. For example: `projects/{project}/locations/europe-west3-b` where `{project}` can either be a project number or a project ID. */
		secondaryLocation: FormControl<string | null | undefined>,
	}
	export function CreateStretchedClusterConfigFormGroup() {
		return new FormGroup<StretchedClusterConfigFormProperties>({
			preferredLocation: new FormControl<string | null | undefined>(undefined),
			secondaryLocation: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Credentials for a private cloud. */
	export interface Credentials {

		/** Initial password. */
		password?: string | null;

		/** Initial username. */
		username?: string | null;
	}

	/** Credentials for a private cloud. */
	export interface CredentialsFormProperties {

		/** Initial password. */
		password: FormControl<string | null | undefined>,

		/** Initial username. */
		username: FormControl<string | null | undefined>,
	}
	export function CreateCredentialsFormGroup() {
		return new FormGroup<CredentialsFormProperties>({
			password: new FormControl<string | null | undefined>(undefined),
			username: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** DnsBindPermission resource that contains the accounts having the consumer DNS bind permission on the corresponding intranet VPC of the consumer project. */
	export interface DnsBindPermission {

		/** Required. Output only. The name of the resource which stores the users/service accounts having the permission to bind to the corresponding intranet VPC of the consumer project. DnsBindPermission is a global resource. Resource names are schemeless URIs that follow the conventions in https://cloud.google.com/apis/design/resource_names. For example: `projects/my-project/locations/global/dnsBindPermission` */
		name?: string | null;

		/** Output only. Users/Service accounts which have access for binding on the intranet VPC project corresponding to the consumer project. */
		principals?: Array<Principal>;
	}

	/** DnsBindPermission resource that contains the accounts having the consumer DNS bind permission on the corresponding intranet VPC of the consumer project. */
	export interface DnsBindPermissionFormProperties {

		/** Required. Output only. The name of the resource which stores the users/service accounts having the permission to bind to the corresponding intranet VPC of the consumer project. DnsBindPermission is a global resource. Resource names are schemeless URIs that follow the conventions in https://cloud.google.com/apis/design/resource_names. For example: `projects/my-project/locations/global/dnsBindPermission` */
		name: FormControl<string | null | undefined>,
	}
	export function CreateDnsBindPermissionFormGroup() {
		return new FormGroup<DnsBindPermissionFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Users/Service accounts which have access for DNS binding on the intranet VPC corresponding to the consumer project. */
	export interface Principal {

		/** The service account which needs to be granted the permission. */
		serviceAccount?: string | null;

		/** The user who needs to be granted permission. */
		user?: string | null;
	}

	/** Users/Service accounts which have access for DNS binding on the intranet VPC corresponding to the consumer project. */
	export interface PrincipalFormProperties {

		/** The service account which needs to be granted the permission. */
		serviceAccount: FormControl<string | null | undefined>,

		/** The user who needs to be granted permission. */
		user: FormControl<string | null | undefined>,
	}
	export function CreatePrincipalFormGroup() {
		return new FormGroup<PrincipalFormProperties>({
			serviceAccount: new FormControl<string | null | undefined>(undefined),
			user: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** DNS forwarding config. This config defines a list of domain to name server mappings, and is attached to the private cloud for custom domain resolution. */
	export interface DnsForwarding {

		/** Output only. Creation time of this resource. */
		createTime?: string | null;

		/** Required. List of domain mappings to configure */
		forwardingRules?: Array<ForwardingRule>;

		/** Output only. The resource name of this DNS profile. Resource names are schemeless URIs that follow the conventions in https://cloud.google.com/apis/design/resource_names. For example: `projects/my-project/locations/us-central1-a/privateClouds/my-cloud/dnsForwarding` */
		name?: string | null;

		/** Output only. Last update time of this resource. */
		updateTime?: string | null;
	}

	/** DNS forwarding config. This config defines a list of domain to name server mappings, and is attached to the private cloud for custom domain resolution. */
	export interface DnsForwardingFormProperties {

		/** Output only. Creation time of this resource. */
		createTime: FormControl<string | null | undefined>,

		/** Output only. The resource name of this DNS profile. Resource names are schemeless URIs that follow the conventions in https://cloud.google.com/apis/design/resource_names. For example: `projects/my-project/locations/us-central1-a/privateClouds/my-cloud/dnsForwarding` */
		name: FormControl<string | null | undefined>,

		/** Output only. Last update time of this resource. */
		updateTime: FormControl<string | null | undefined>,
	}
	export function CreateDnsForwardingFormGroup() {
		return new FormGroup<DnsForwardingFormProperties>({
			createTime: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			updateTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A forwarding rule is a mapping of a `domain` to `name_servers`. This mapping allows VMware Engine to resolve domains for attached private clouds by forwarding DNS requests for a given domain to the specified nameservers. */
	export interface ForwardingRule {

		/** Required. Domain used to resolve a `name_servers` list. */
		domain?: string | null;

		/** Required. List of DNS servers to use for domain resolution */
		nameServers?: Array<string>;
	}

	/** A forwarding rule is a mapping of a `domain` to `name_servers`. This mapping allows VMware Engine to resolve domains for attached private clouds by forwarding DNS requests for a given domain to the specified nameservers. */
	export interface ForwardingRuleFormProperties {

		/** Required. Domain used to resolve a `name_servers` list. */
		domain: FormControl<string | null | undefined>,
	}
	export function CreateForwardingRuleFormGroup() {
		return new FormGroup<ForwardingRuleFormProperties>({
			domain: new FormControl<string | null | undefined>(undefined),
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


	/** External access firewall rules for filtering incoming traffic destined to `ExternalAddress` resources. */
	export interface ExternalAccessRule {

		/** The action that the external access rule performs. */
		action?: ExternalAccessRuleAction | null;

		/** Output only. Creation time of this resource. */
		createTime?: string | null;

		/** User-provided description for this external access rule. */
		description?: string | null;

		/** If destination ranges are specified, the external access rule applies only to the traffic that has a destination IP address in these ranges. The specified IP addresses must have reserved external IP addresses in the scope of the parent network policy. To match all external IP addresses in the scope of the parent network policy, specify `0.0.0.0/0`. To match a specific external IP address, specify it using the `IpRange.external_address` property. */
		destinationIpRanges?: Array<IpRange>;

		/** A list of destination ports to which the external access rule applies. This field is only applicable for the UDP or TCP protocol. Each entry must be either an integer or a range. For example: `["22"]`, `["80","443"]`, or `["12345-12349"]`. To match all destination ports, specify `["0-65535"]`. */
		destinationPorts?: Array<string>;

		/** The IP protocol to which the external access rule applies. This value can be one of the following three protocol strings (not case-sensitive): `tcp`, `udp`, or `icmp`. */
		ipProtocol?: string | null;

		/** Output only. The resource name of this external access rule. Resource names are schemeless URIs that follow the conventions in https://cloud.google.com/apis/design/resource_names. For example: `projects/my-project/locations/us-central1/networkPolicies/my-policy/externalAccessRules/my-rule` */
		name?: string | null;

		/**
		 * External access rule priority, which determines the external access rule to use when multiple rules apply. If multiple rules have the same priority, their ordering is non-deterministic. If specific ordering is required, assign unique priorities to enforce such ordering. The external access rule priority is an integer from 100 to 4096, both inclusive. Lower integers indicate higher precedence. For example, a rule with priority `100` has higher precedence than a rule with priority `101`.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		priority?: number | null;

		/** If source ranges are specified, the external access rule applies only to traffic that has a source IP address in these ranges. These ranges can either be expressed in the CIDR format or as an IP address. As only inbound rules are supported, `ExternalAddress` resources cannot be the source IP addresses of an external access rule. To match all source addresses, specify `0.0.0.0/0`. */
		sourceIpRanges?: Array<IpRange>;

		/** A list of source ports to which the external access rule applies. This field is only applicable for the UDP or TCP protocol. Each entry must be either an integer or a range. For example: `["22"]`, `["80","443"]`, or `["12345-12349"]`. To match all source ports, specify `["0-65535"]`. */
		sourcePorts?: Array<string>;

		/** Output only. The state of the resource. */
		state?: ExternalAccessRuleState | null;

		/** Output only. System-generated unique identifier for the resource. */
		uid?: string | null;

		/** Output only. Last update time of this resource. */
		updateTime?: string | null;
	}

	/** External access firewall rules for filtering incoming traffic destined to `ExternalAddress` resources. */
	export interface ExternalAccessRuleFormProperties {

		/** The action that the external access rule performs. */
		action: FormControl<ExternalAccessRuleAction | null | undefined>,

		/** Output only. Creation time of this resource. */
		createTime: FormControl<string | null | undefined>,

		/** User-provided description for this external access rule. */
		description: FormControl<string | null | undefined>,

		/** The IP protocol to which the external access rule applies. This value can be one of the following three protocol strings (not case-sensitive): `tcp`, `udp`, or `icmp`. */
		ipProtocol: FormControl<string | null | undefined>,

		/** Output only. The resource name of this external access rule. Resource names are schemeless URIs that follow the conventions in https://cloud.google.com/apis/design/resource_names. For example: `projects/my-project/locations/us-central1/networkPolicies/my-policy/externalAccessRules/my-rule` */
		name: FormControl<string | null | undefined>,

		/**
		 * External access rule priority, which determines the external access rule to use when multiple rules apply. If multiple rules have the same priority, their ordering is non-deterministic. If specific ordering is required, assign unique priorities to enforce such ordering. The external access rule priority is an integer from 100 to 4096, both inclusive. Lower integers indicate higher precedence. For example, a rule with priority `100` has higher precedence than a rule with priority `101`.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		priority: FormControl<number | null | undefined>,

		/** Output only. The state of the resource. */
		state: FormControl<ExternalAccessRuleState | null | undefined>,

		/** Output only. System-generated unique identifier for the resource. */
		uid: FormControl<string | null | undefined>,

		/** Output only. Last update time of this resource. */
		updateTime: FormControl<string | null | undefined>,
	}
	export function CreateExternalAccessRuleFormGroup() {
		return new FormGroup<ExternalAccessRuleFormProperties>({
			action: new FormControl<ExternalAccessRuleAction | null | undefined>(undefined),
			createTime: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			ipProtocol: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			priority: new FormControl<number | null | undefined>(undefined),
			state: new FormControl<ExternalAccessRuleState | null | undefined>(undefined),
			uid: new FormControl<string | null | undefined>(undefined),
			updateTime: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ExternalAccessRuleAction { ACTION_UNSPECIFIED = 'ACTION_UNSPECIFIED', ALLOW = 'ALLOW', DENY = 'DENY' }


	/** An IP range provided in any one of the supported formats. */
	export interface IpRange {

		/** The name of an `ExternalAddress` resource. The external address must have been reserved in the scope of this external access rule's parent network policy. Provide the external address name in the form of `projects/{project}/locations/{location}/privateClouds/{private_cloud}/externalAddresses/{external_address}`. For example: `projects/my-project/locations/us-central1-a/privateClouds/my-cloud/externalAddresses/my-address`. */
		externalAddress?: string | null;

		/** A single IP address. For example: `10.0.0.5`. */
		ipAddress?: string | null;

		/** An IP address range in the CIDR format. For example: `10.0.0.0/24`. */
		ipAddressRange?: string | null;
	}

	/** An IP range provided in any one of the supported formats. */
	export interface IpRangeFormProperties {

		/** The name of an `ExternalAddress` resource. The external address must have been reserved in the scope of this external access rule's parent network policy. Provide the external address name in the form of `projects/{project}/locations/{location}/privateClouds/{private_cloud}/externalAddresses/{external_address}`. For example: `projects/my-project/locations/us-central1-a/privateClouds/my-cloud/externalAddresses/my-address`. */
		externalAddress: FormControl<string | null | undefined>,

		/** A single IP address. For example: `10.0.0.5`. */
		ipAddress: FormControl<string | null | undefined>,

		/** An IP address range in the CIDR format. For example: `10.0.0.0/24`. */
		ipAddressRange: FormControl<string | null | undefined>,
	}
	export function CreateIpRangeFormGroup() {
		return new FormGroup<IpRangeFormProperties>({
			externalAddress: new FormControl<string | null | undefined>(undefined),
			ipAddress: new FormControl<string | null | undefined>(undefined),
			ipAddressRange: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ExternalAccessRuleState { STATE_UNSPECIFIED = 'STATE_UNSPECIFIED', ACTIVE = 'ACTIVE', CREATING = 'CREATING', UPDATING = 'UPDATING', DELETING = 'DELETING' }


	/** Represents an allocated external IP address and its corresponding internal IP address in a private cloud. */
	export interface ExternalAddress {

		/** Output only. Creation time of this resource. */
		createTime?: string | null;

		/** User-provided description for this resource. */
		description?: string | null;

		/** Output only. The external IP address of a workload VM. */
		externalIp?: string | null;

		/** The internal IP address of a workload VM. */
		internalIp?: string | null;

		/** Output only. The resource name of this external IP address. Resource names are schemeless URIs that follow the conventions in https://cloud.google.com/apis/design/resource_names. For example: `projects/my-project/locations/us-central1-a/privateClouds/my-cloud/externalAddresses/my-address` */
		name?: string | null;

		/** Output only. The state of the resource. */
		state?: ExternalAccessRuleState | null;

		/** Output only. System-generated unique identifier for the resource. */
		uid?: string | null;

		/** Output only. Last update time of this resource. */
		updateTime?: string | null;
	}

	/** Represents an allocated external IP address and its corresponding internal IP address in a private cloud. */
	export interface ExternalAddressFormProperties {

		/** Output only. Creation time of this resource. */
		createTime: FormControl<string | null | undefined>,

		/** User-provided description for this resource. */
		description: FormControl<string | null | undefined>,

		/** Output only. The external IP address of a workload VM. */
		externalIp: FormControl<string | null | undefined>,

		/** The internal IP address of a workload VM. */
		internalIp: FormControl<string | null | undefined>,

		/** Output only. The resource name of this external IP address. Resource names are schemeless URIs that follow the conventions in https://cloud.google.com/apis/design/resource_names. For example: `projects/my-project/locations/us-central1-a/privateClouds/my-cloud/externalAddresses/my-address` */
		name: FormControl<string | null | undefined>,

		/** Output only. The state of the resource. */
		state: FormControl<ExternalAccessRuleState | null | undefined>,

		/** Output only. System-generated unique identifier for the resource. */
		uid: FormControl<string | null | undefined>,

		/** Output only. Last update time of this resource. */
		updateTime: FormControl<string | null | undefined>,
	}
	export function CreateExternalAddressFormGroup() {
		return new FormGroup<ExternalAddressFormProperties>({
			createTime: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			externalIp: new FormControl<string | null | undefined>(undefined),
			internalIp: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<ExternalAccessRuleState | null | undefined>(undefined),
			uid: new FormControl<string | null | undefined>(undefined),
			updateTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response message for VmwareEngine.FetchNetworkPolicyExternalAddresses */
	export interface FetchNetworkPolicyExternalAddressesResponse {

		/** A list of external IP addresses assigned to VMware workload VMs within the scope of the given network policy. */
		externalAddresses?: Array<ExternalAddress>;

		/** A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
		nextPageToken?: string | null;
	}

	/** Response message for VmwareEngine.FetchNetworkPolicyExternalAddresses */
	export interface FetchNetworkPolicyExternalAddressesResponseFormProperties {

		/** A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateFetchNetworkPolicyExternalAddressesResponseFormGroup() {
		return new FormGroup<FetchNetworkPolicyExternalAddressesResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Request message for VmwareEngine.GrantDnsBindPermission */
	export interface GrantDnsBindPermissionRequest {

		/** Users/Service accounts which have access for DNS binding on the intranet VPC corresponding to the consumer project. */
		principal?: Principal;

		/** Optional. A request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server guarantees that a request doesn't result in creation of duplicate commitments for at least 60 minutes. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
		requestId?: string | null;
	}

	/** Request message for VmwareEngine.GrantDnsBindPermission */
	export interface GrantDnsBindPermissionRequestFormProperties {

		/** Optional. A request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server guarantees that a request doesn't result in creation of duplicate commitments for at least 60 minutes. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
		requestId: FormControl<string | null | undefined>,
	}
	export function CreateGrantDnsBindPermissionRequestFormGroup() {
		return new FormGroup<GrantDnsBindPermissionRequestFormProperties>({
			requestId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Details about a HCX Cloud Manager appliance. */
	export interface Hcx {

		/** Fully qualified domain name of the appliance. */
		fqdn?: string | null;

		/** Internal IP address of the appliance. */
		internalIp?: string | null;

		/** Output only. The state of the appliance. */
		state?: HcxState | null;

		/** Version of the appliance. */
		version?: string | null;
	}

	/** Details about a HCX Cloud Manager appliance. */
	export interface HcxFormProperties {

		/** Fully qualified domain name of the appliance. */
		fqdn: FormControl<string | null | undefined>,

		/** Internal IP address of the appliance. */
		internalIp: FormControl<string | null | undefined>,

		/** Output only. The state of the appliance. */
		state: FormControl<HcxState | null | undefined>,

		/** Version of the appliance. */
		version: FormControl<string | null | undefined>,
	}
	export function CreateHcxFormGroup() {
		return new FormGroup<HcxFormProperties>({
			fqdn: new FormControl<string | null | undefined>(undefined),
			internalIp: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<HcxState | null | undefined>(undefined),
			version: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum HcxState { STATE_UNSPECIFIED = 'STATE_UNSPECIFIED', ACTIVE = 'ACTIVE', CREATING = 'CREATING' }


	/** HCX activation key. A default key is created during private cloud provisioning, but this behavior is subject to change and you should always verify active keys. Use VmwareEngine.ListHcxActivationKeys to retrieve existing keys and VmwareEngine.CreateHcxActivationKey to create new ones. */
	export interface HcxActivationKey {

		/** Output only. HCX activation key. */
		activationKey?: string | null;

		/** Output only. Creation time of HCX activation key. */
		createTime?: string | null;

		/** Output only. The resource name of this HcxActivationKey. Resource names are schemeless URIs that follow the conventions in https://cloud.google.com/apis/design/resource_names. For example: `projects/my-project/locations/us-central1/privateClouds/my-cloud/hcxActivationKeys/my-key` */
		name?: string | null;

		/** Output only. State of HCX activation key. */
		state?: HcxActivationKeyState | null;

		/** Output only. System-generated unique identifier for the resource. */
		uid?: string | null;
	}

	/** HCX activation key. A default key is created during private cloud provisioning, but this behavior is subject to change and you should always verify active keys. Use VmwareEngine.ListHcxActivationKeys to retrieve existing keys and VmwareEngine.CreateHcxActivationKey to create new ones. */
	export interface HcxActivationKeyFormProperties {

		/** Output only. HCX activation key. */
		activationKey: FormControl<string | null | undefined>,

		/** Output only. Creation time of HCX activation key. */
		createTime: FormControl<string | null | undefined>,

		/** Output only. The resource name of this HcxActivationKey. Resource names are schemeless URIs that follow the conventions in https://cloud.google.com/apis/design/resource_names. For example: `projects/my-project/locations/us-central1/privateClouds/my-cloud/hcxActivationKeys/my-key` */
		name: FormControl<string | null | undefined>,

		/** Output only. State of HCX activation key. */
		state: FormControl<HcxActivationKeyState | null | undefined>,

		/** Output only. System-generated unique identifier for the resource. */
		uid: FormControl<string | null | undefined>,
	}
	export function CreateHcxActivationKeyFormGroup() {
		return new FormGroup<HcxActivationKeyFormProperties>({
			activationKey: new FormControl<string | null | undefined>(undefined),
			createTime: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<HcxActivationKeyState | null | undefined>(undefined),
			uid: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum HcxActivationKeyState { STATE_UNSPECIFIED = 'STATE_UNSPECIFIED', AVAILABLE = 'AVAILABLE', CONSUMED = 'CONSUMED', CREATING = 'CREATING' }


	/** Response message for VmwareEngine.ListClusters */
	export interface ListClustersResponse {

		/** A list of private cloud clusters. */
		clusters?: Array<Cluster>;

		/** A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
		nextPageToken?: string | null;

		/** Locations that could not be reached when making an aggregated query using wildcards. */
		unreachable?: Array<string>;
	}

	/** Response message for VmwareEngine.ListClusters */
	export interface ListClustersResponseFormProperties {

		/** A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListClustersResponseFormGroup() {
		return new FormGroup<ListClustersResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response message for VmwareEngine.ListExternalAccessRules */
	export interface ListExternalAccessRulesResponse {

		/** A list of external access firewall rules. */
		externalAccessRules?: Array<ExternalAccessRule>;

		/** A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
		nextPageToken?: string | null;

		/** Locations that could not be reached when making an aggregated query using wildcards. */
		unreachable?: Array<string>;
	}

	/** Response message for VmwareEngine.ListExternalAccessRules */
	export interface ListExternalAccessRulesResponseFormProperties {

		/** A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListExternalAccessRulesResponseFormGroup() {
		return new FormGroup<ListExternalAccessRulesResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response message for VmwareEngine.ListExternalAddresses */
	export interface ListExternalAddressesResponse {

		/** A list of external IP addresses. */
		externalAddresses?: Array<ExternalAddress>;

		/** A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
		nextPageToken?: string | null;

		/** Locations that could not be reached when making an aggregated query using wildcards. */
		unreachable?: Array<string>;
	}

	/** Response message for VmwareEngine.ListExternalAddresses */
	export interface ListExternalAddressesResponseFormProperties {

		/** A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListExternalAddressesResponseFormGroup() {
		return new FormGroup<ListExternalAddressesResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response message for VmwareEngine.ListHcxActivationKeys */
	export interface ListHcxActivationKeysResponse {

		/** List of HCX activation keys. */
		hcxActivationKeys?: Array<HcxActivationKey>;

		/** A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
		nextPageToken?: string | null;

		/** Locations that could not be reached when making an aggregated query using wildcards. */
		unreachable?: Array<string>;
	}

	/** Response message for VmwareEngine.ListHcxActivationKeys */
	export interface ListHcxActivationKeysResponseFormProperties {

		/** A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListHcxActivationKeysResponseFormGroup() {
		return new FormGroup<ListHcxActivationKeysResponseFormProperties>({
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


	/** Response message for VmwareEngine.ListLoggingServers */
	export interface ListLoggingServersResponse {

		/** A list of Logging Servers. */
		loggingServers?: Array<LoggingServer>;

		/** A token, which can be send as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
		nextPageToken?: string | null;

		/** Locations that could not be reached when making an aggregated query using wildcards. */
		unreachable?: Array<string>;
	}

	/** Response message for VmwareEngine.ListLoggingServers */
	export interface ListLoggingServersResponseFormProperties {

		/** A token, which can be send as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListLoggingServersResponseFormGroup() {
		return new FormGroup<ListLoggingServersResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Logging server to receive vCenter or ESXi logs. */
	export interface LoggingServer {

		/** Output only. Creation time of this resource. */
		createTime?: string | null;

		/** Required. Fully-qualified domain name (FQDN) or IP Address of the logging server. */
		hostname?: string | null;

		/** Output only. The resource name of this logging server. Resource names are schemeless URIs that follow the conventions in https://cloud.google.com/apis/design/resource_names. For example: `projects/my-project/locations/us-central1-a/privateClouds/my-cloud/loggingServers/my-logging-server` */
		name?: string | null;

		/**
		 * Required. Port number at which the logging server receives logs.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		port?: number | null;

		/** Required. Protocol used by vCenter to send logs to a logging server. */
		protocol?: LoggingServerProtocol | null;

		/** Required. The type of component that produces logs that will be forwarded to this logging server. */
		sourceType?: LoggingServerSourceType | null;

		/** Output only. System-generated unique identifier for the resource. */
		uid?: string | null;

		/** Output only. Last update time of this resource. */
		updateTime?: string | null;
	}

	/** Logging server to receive vCenter or ESXi logs. */
	export interface LoggingServerFormProperties {

		/** Output only. Creation time of this resource. */
		createTime: FormControl<string | null | undefined>,

		/** Required. Fully-qualified domain name (FQDN) or IP Address of the logging server. */
		hostname: FormControl<string | null | undefined>,

		/** Output only. The resource name of this logging server. Resource names are schemeless URIs that follow the conventions in https://cloud.google.com/apis/design/resource_names. For example: `projects/my-project/locations/us-central1-a/privateClouds/my-cloud/loggingServers/my-logging-server` */
		name: FormControl<string | null | undefined>,

		/**
		 * Required. Port number at which the logging server receives logs.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		port: FormControl<number | null | undefined>,

		/** Required. Protocol used by vCenter to send logs to a logging server. */
		protocol: FormControl<LoggingServerProtocol | null | undefined>,

		/** Required. The type of component that produces logs that will be forwarded to this logging server. */
		sourceType: FormControl<LoggingServerSourceType | null | undefined>,

		/** Output only. System-generated unique identifier for the resource. */
		uid: FormControl<string | null | undefined>,

		/** Output only. Last update time of this resource. */
		updateTime: FormControl<string | null | undefined>,
	}
	export function CreateLoggingServerFormGroup() {
		return new FormGroup<LoggingServerFormProperties>({
			createTime: new FormControl<string | null | undefined>(undefined),
			hostname: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			port: new FormControl<number | null | undefined>(undefined),
			protocol: new FormControl<LoggingServerProtocol | null | undefined>(undefined),
			sourceType: new FormControl<LoggingServerSourceType | null | undefined>(undefined),
			uid: new FormControl<string | null | undefined>(undefined),
			updateTime: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum LoggingServerProtocol { PROTOCOL_UNSPECIFIED = 'PROTOCOL_UNSPECIFIED', UDP = 'UDP', TCP = 'TCP' }

	export enum LoggingServerSourceType { SOURCE_TYPE_UNSPECIFIED = 'SOURCE_TYPE_UNSPECIFIED', ESXI = 'ESXI', VCSA = 'VCSA' }


	/** Response message for VmwareEngine.ListManagementDnsZoneBindings */
	export interface ListManagementDnsZoneBindingsResponse {

		/** A list of management DNS zone bindings. */
		managementDnsZoneBindings?: Array<ManagementDnsZoneBinding>;

		/** A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
		nextPageToken?: string | null;

		/** Locations that could not be reached when making an aggregated query using wildcards. */
		unreachable?: Array<string>;
	}

	/** Response message for VmwareEngine.ListManagementDnsZoneBindings */
	export interface ListManagementDnsZoneBindingsResponseFormProperties {

		/** A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListManagementDnsZoneBindingsResponseFormGroup() {
		return new FormGroup<ListManagementDnsZoneBindingsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents a binding between a network and the management DNS zone. A management DNS zone is the Cloud DNS cross-project binding zone that VMware Engine creates for each private cloud. It contains FQDNs and corresponding IP addresses for the private cloud's ESXi hosts and management VM appliances like vCenter and NSX Manager. */
	export interface ManagementDnsZoneBinding {

		/** Output only. Creation time of this resource. */
		createTime?: string | null;

		/** User-provided description for this resource. */
		description?: string | null;

		/** Output only. The resource name of this binding. Resource names are schemeless URIs that follow the conventions in https://cloud.google.com/apis/design/resource_names. For example: `projects/my-project/locations/us-central1-a/privateClouds/my-cloud/managementDnsZoneBindings/my-management-dns-zone-binding` */
		name?: string | null;

		/** Output only. The state of the resource. */
		state?: ManagementDnsZoneBindingState | null;

		/** Output only. System-generated unique identifier for the resource. */
		uid?: string | null;

		/** Output only. Last update time of this resource. */
		updateTime?: string | null;

		/** Network to bind is a VMware Engine network. Specify the name in the following form for VMware engine network: `projects/{project}/locations/global/vmwareEngineNetworks/{vmware_engine_network_id}`. `{project}` can either be a project number or a project ID. */
		vmwareEngineNetwork?: string | null;

		/** Network to bind is a standard consumer VPC. Specify the name in the following form for consumer VPC network: `projects/{project}/global/networks/{network_id}`. `{project}` can either be a project number or a project ID. */
		vpcNetwork?: string | null;
	}

	/** Represents a binding between a network and the management DNS zone. A management DNS zone is the Cloud DNS cross-project binding zone that VMware Engine creates for each private cloud. It contains FQDNs and corresponding IP addresses for the private cloud's ESXi hosts and management VM appliances like vCenter and NSX Manager. */
	export interface ManagementDnsZoneBindingFormProperties {

		/** Output only. Creation time of this resource. */
		createTime: FormControl<string | null | undefined>,

		/** User-provided description for this resource. */
		description: FormControl<string | null | undefined>,

		/** Output only. The resource name of this binding. Resource names are schemeless URIs that follow the conventions in https://cloud.google.com/apis/design/resource_names. For example: `projects/my-project/locations/us-central1-a/privateClouds/my-cloud/managementDnsZoneBindings/my-management-dns-zone-binding` */
		name: FormControl<string | null | undefined>,

		/** Output only. The state of the resource. */
		state: FormControl<ManagementDnsZoneBindingState | null | undefined>,

		/** Output only. System-generated unique identifier for the resource. */
		uid: FormControl<string | null | undefined>,

		/** Output only. Last update time of this resource. */
		updateTime: FormControl<string | null | undefined>,

		/** Network to bind is a VMware Engine network. Specify the name in the following form for VMware engine network: `projects/{project}/locations/global/vmwareEngineNetworks/{vmware_engine_network_id}`. `{project}` can either be a project number or a project ID. */
		vmwareEngineNetwork: FormControl<string | null | undefined>,

		/** Network to bind is a standard consumer VPC. Specify the name in the following form for consumer VPC network: `projects/{project}/global/networks/{network_id}`. `{project}` can either be a project number or a project ID. */
		vpcNetwork: FormControl<string | null | undefined>,
	}
	export function CreateManagementDnsZoneBindingFormGroup() {
		return new FormGroup<ManagementDnsZoneBindingFormProperties>({
			createTime: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<ManagementDnsZoneBindingState | null | undefined>(undefined),
			uid: new FormControl<string | null | undefined>(undefined),
			updateTime: new FormControl<string | null | undefined>(undefined),
			vmwareEngineNetwork: new FormControl<string | null | undefined>(undefined),
			vpcNetwork: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ManagementDnsZoneBindingState { STATE_UNSPECIFIED = 'STATE_UNSPECIFIED', ACTIVE = 'ACTIVE', CREATING = 'CREATING', UPDATING = 'UPDATING', DELETING = 'DELETING', FAILED = 'FAILED' }


	/** Response message for VmwareEngine.ListNetworkPeerings */
	export interface ListNetworkPeeringsResponse {

		/** A list of network peerings. */
		networkPeerings?: Array<NetworkPeering>;

		/** A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
		nextPageToken?: string | null;

		/** Unreachable resources. */
		unreachable?: Array<string>;
	}

	/** Response message for VmwareEngine.ListNetworkPeerings */
	export interface ListNetworkPeeringsResponseFormProperties {

		/** A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListNetworkPeeringsResponseFormGroup() {
		return new FormGroup<ListNetworkPeeringsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Details of a network peering. */
	export interface NetworkPeering {

		/** Output only. Creation time of this resource. */
		createTime?: string | null;

		/** Optional. User-provided description for this network peering. */
		description?: string | null;

		/** Optional. True if full mesh connectivity is created and managed automatically between peered networks; false otherwise. Currently this field is always true because Google Compute Engine automatically creates and manages subnetwork routes between two VPC networks when peering state is 'ACTIVE'. */
		exchangeSubnetRoutes?: boolean | null;

		/** Optional. True if custom routes are exported to the peered network; false otherwise. The default value is true. */
		exportCustomRoutes?: boolean | null;

		/** Optional. True if all subnet routes with a public IP address range are exported; false otherwise. The default value is true. IPv4 special-use ranges (https://en.wikipedia.org/wiki/IPv4#Special_addresses) are always exported to peers and are not controlled by this field. */
		exportCustomRoutesWithPublicIp?: boolean | null;

		/** Optional. True if custom routes are imported from the peered network; false otherwise. The default value is true. */
		importCustomRoutes?: boolean | null;

		/** Optional. True if all subnet routes with public IP address range are imported; false otherwise. The default value is true. IPv4 special-use ranges (https://en.wikipedia.org/wiki/IPv4#Special_addresses) are always imported to peers and are not controlled by this field. */
		importCustomRoutesWithPublicIp?: boolean | null;

		/** Output only. The resource name of the network peering. Resource names are scheme-less URIs that follow the conventions in https://cloud.google.com/apis/design/resource_names. For example: `projects/my-project/locations/global/networkPeerings/my-peering` */
		name?: string | null;

		/**
		 * Optional. Maximum transmission unit (MTU) in bytes. The default value is `1500`. If a value of `0` is provided for this field, VMware Engine uses the default value instead.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		peerMtu?: number | null;

		/** Required. The relative resource name of the network to peer with a standard VMware Engine network. The provided network can be a consumer VPC network or another standard VMware Engine network. If the `peer_network_type` is VMWARE_ENGINE_NETWORK, specify the name in the form: `projects/{project}/locations/global/vmwareEngineNetworks/{vmware_engine_network_id}`. Otherwise specify the name in the form: `projects/{project}/global/networks/{network_id}`, where `{project}` can either be a project number or a project ID. */
		peerNetwork?: string | null;

		/** Required. The type of the network to peer with the VMware Engine network. */
		peerNetworkType?: NetworkPeeringPeerNetworkType | null;

		/** Output only. State of the network peering. This field has a value of 'ACTIVE' when there's a matching configuration in the peer network. New values may be added to this enum when appropriate. */
		state?: NetworkPeeringState | null;

		/** Output only. Output Only. Details about the current state of the network peering. */
		stateDetails?: string | null;

		/** Output only. System-generated unique identifier for the resource. */
		uid?: string | null;

		/** Output only. Last update time of this resource. */
		updateTime?: string | null;

		/** Required. The relative resource name of the VMware Engine network. Specify the name in the following form: `projects/{project}/locations/{location}/vmwareEngineNetworks/{vmware_engine_network_id}` where `{project}` can either be a project number or a project ID. */
		vmwareEngineNetwork?: string | null;
	}

	/** Details of a network peering. */
	export interface NetworkPeeringFormProperties {

		/** Output only. Creation time of this resource. */
		createTime: FormControl<string | null | undefined>,

		/** Optional. User-provided description for this network peering. */
		description: FormControl<string | null | undefined>,

		/** Optional. True if full mesh connectivity is created and managed automatically between peered networks; false otherwise. Currently this field is always true because Google Compute Engine automatically creates and manages subnetwork routes between two VPC networks when peering state is 'ACTIVE'. */
		exchangeSubnetRoutes: FormControl<boolean | null | undefined>,

		/** Optional. True if custom routes are exported to the peered network; false otherwise. The default value is true. */
		exportCustomRoutes: FormControl<boolean | null | undefined>,

		/** Optional. True if all subnet routes with a public IP address range are exported; false otherwise. The default value is true. IPv4 special-use ranges (https://en.wikipedia.org/wiki/IPv4#Special_addresses) are always exported to peers and are not controlled by this field. */
		exportCustomRoutesWithPublicIp: FormControl<boolean | null | undefined>,

		/** Optional. True if custom routes are imported from the peered network; false otherwise. The default value is true. */
		importCustomRoutes: FormControl<boolean | null | undefined>,

		/** Optional. True if all subnet routes with public IP address range are imported; false otherwise. The default value is true. IPv4 special-use ranges (https://en.wikipedia.org/wiki/IPv4#Special_addresses) are always imported to peers and are not controlled by this field. */
		importCustomRoutesWithPublicIp: FormControl<boolean | null | undefined>,

		/** Output only. The resource name of the network peering. Resource names are scheme-less URIs that follow the conventions in https://cloud.google.com/apis/design/resource_names. For example: `projects/my-project/locations/global/networkPeerings/my-peering` */
		name: FormControl<string | null | undefined>,

		/**
		 * Optional. Maximum transmission unit (MTU) in bytes. The default value is `1500`. If a value of `0` is provided for this field, VMware Engine uses the default value instead.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		peerMtu: FormControl<number | null | undefined>,

		/** Required. The relative resource name of the network to peer with a standard VMware Engine network. The provided network can be a consumer VPC network or another standard VMware Engine network. If the `peer_network_type` is VMWARE_ENGINE_NETWORK, specify the name in the form: `projects/{project}/locations/global/vmwareEngineNetworks/{vmware_engine_network_id}`. Otherwise specify the name in the form: `projects/{project}/global/networks/{network_id}`, where `{project}` can either be a project number or a project ID. */
		peerNetwork: FormControl<string | null | undefined>,

		/** Required. The type of the network to peer with the VMware Engine network. */
		peerNetworkType: FormControl<NetworkPeeringPeerNetworkType | null | undefined>,

		/** Output only. State of the network peering. This field has a value of 'ACTIVE' when there's a matching configuration in the peer network. New values may be added to this enum when appropriate. */
		state: FormControl<NetworkPeeringState | null | undefined>,

		/** Output only. Output Only. Details about the current state of the network peering. */
		stateDetails: FormControl<string | null | undefined>,

		/** Output only. System-generated unique identifier for the resource. */
		uid: FormControl<string | null | undefined>,

		/** Output only. Last update time of this resource. */
		updateTime: FormControl<string | null | undefined>,

		/** Required. The relative resource name of the VMware Engine network. Specify the name in the following form: `projects/{project}/locations/{location}/vmwareEngineNetworks/{vmware_engine_network_id}` where `{project}` can either be a project number or a project ID. */
		vmwareEngineNetwork: FormControl<string | null | undefined>,
	}
	export function CreateNetworkPeeringFormGroup() {
		return new FormGroup<NetworkPeeringFormProperties>({
			createTime: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			exchangeSubnetRoutes: new FormControl<boolean | null | undefined>(undefined),
			exportCustomRoutes: new FormControl<boolean | null | undefined>(undefined),
			exportCustomRoutesWithPublicIp: new FormControl<boolean | null | undefined>(undefined),
			importCustomRoutes: new FormControl<boolean | null | undefined>(undefined),
			importCustomRoutesWithPublicIp: new FormControl<boolean | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			peerMtu: new FormControl<number | null | undefined>(undefined),
			peerNetwork: new FormControl<string | null | undefined>(undefined),
			peerNetworkType: new FormControl<NetworkPeeringPeerNetworkType | null | undefined>(undefined),
			state: new FormControl<NetworkPeeringState | null | undefined>(undefined),
			stateDetails: new FormControl<string | null | undefined>(undefined),
			uid: new FormControl<string | null | undefined>(undefined),
			updateTime: new FormControl<string | null | undefined>(undefined),
			vmwareEngineNetwork: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum NetworkPeeringPeerNetworkType { PEER_NETWORK_TYPE_UNSPECIFIED = 'PEER_NETWORK_TYPE_UNSPECIFIED', STANDARD = 'STANDARD', VMWARE_ENGINE_NETWORK = 'VMWARE_ENGINE_NETWORK', PRIVATE_SERVICES_ACCESS = 'PRIVATE_SERVICES_ACCESS', NETAPP_CLOUD_VOLUMES = 'NETAPP_CLOUD_VOLUMES', THIRD_PARTY_SERVICE = 'THIRD_PARTY_SERVICE', DELL_POWERSCALE = 'DELL_POWERSCALE' }

	export enum NetworkPeeringState { STATE_UNSPECIFIED = 'STATE_UNSPECIFIED', INACTIVE = 'INACTIVE', ACTIVE = 'ACTIVE', CREATING = 'CREATING', DELETING = 'DELETING' }


	/** Response message for VmwareEngine.ListNetworkPolicies */
	export interface ListNetworkPoliciesResponse {

		/** A list of network policies. */
		networkPolicies?: Array<NetworkPolicy>;

		/** A token, which can be send as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
		nextPageToken?: string | null;

		/** Locations that could not be reached when making an aggregated query using wildcards. */
		unreachable?: Array<string>;
	}

	/** Response message for VmwareEngine.ListNetworkPolicies */
	export interface ListNetworkPoliciesResponseFormProperties {

		/** A token, which can be send as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListNetworkPoliciesResponseFormGroup() {
		return new FormGroup<ListNetworkPoliciesResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents a network policy resource. Network policies are regional resources. You can use a network policy to enable or disable internet access and external IP access. Network policies are associated with a VMware Engine network, which might span across regions. For a given region, a network policy applies to all private clouds in the VMware Engine network associated with the policy. */
	export interface NetworkPolicy {

		/** Output only. Creation time of this resource. */
		createTime?: string | null;

		/** Optional. User-provided description for this network policy. */
		description?: string | null;

		/** Required. IP address range in CIDR notation used to create internet access and external IP access. An RFC 1918 CIDR block, with a "/26" prefix, is required. The range cannot overlap with any prefixes either in the consumer VPC network or in use by the private clouds attached to that VPC network. */
		edgeServicesCidr?: string | null;

		/** Represents a network service that is managed by a `NetworkPolicy` resource. A network service provides a way to control an aspect of external access to VMware workloads. For example, whether the VMware workloads in the private clouds governed by a network policy can access or be accessed from the internet. */
		externalIp?: NetworkService;

		/** Represents a network service that is managed by a `NetworkPolicy` resource. A network service provides a way to control an aspect of external access to VMware workloads. For example, whether the VMware workloads in the private clouds governed by a network policy can access or be accessed from the internet. */
		internetAccess?: NetworkService;

		/** Output only. The resource name of this network policy. Resource names are schemeless URIs that follow the conventions in https://cloud.google.com/apis/design/resource_names. For example: `projects/my-project/locations/us-central1/networkPolicies/my-network-policy` */
		name?: string | null;

		/** Output only. System-generated unique identifier for the resource. */
		uid?: string | null;

		/** Output only. Last update time of this resource. */
		updateTime?: string | null;

		/** Optional. The relative resource name of the VMware Engine network. Specify the name in the following form: `projects/{project}/locations/{location}/vmwareEngineNetworks/{vmware_engine_network_id}` where `{project}` can either be a project number or a project ID. */
		vmwareEngineNetwork?: string | null;

		/** Output only. The canonical name of the VMware Engine network in the form: `projects/{project_number}/locations/{location}/vmwareEngineNetworks/{vmware_engine_network_id}` */
		vmwareEngineNetworkCanonical?: string | null;
	}

	/** Represents a network policy resource. Network policies are regional resources. You can use a network policy to enable or disable internet access and external IP access. Network policies are associated with a VMware Engine network, which might span across regions. For a given region, a network policy applies to all private clouds in the VMware Engine network associated with the policy. */
	export interface NetworkPolicyFormProperties {

		/** Output only. Creation time of this resource. */
		createTime: FormControl<string | null | undefined>,

		/** Optional. User-provided description for this network policy. */
		description: FormControl<string | null | undefined>,

		/** Required. IP address range in CIDR notation used to create internet access and external IP access. An RFC 1918 CIDR block, with a "/26" prefix, is required. The range cannot overlap with any prefixes either in the consumer VPC network or in use by the private clouds attached to that VPC network. */
		edgeServicesCidr: FormControl<string | null | undefined>,

		/** Output only. The resource name of this network policy. Resource names are schemeless URIs that follow the conventions in https://cloud.google.com/apis/design/resource_names. For example: `projects/my-project/locations/us-central1/networkPolicies/my-network-policy` */
		name: FormControl<string | null | undefined>,

		/** Output only. System-generated unique identifier for the resource. */
		uid: FormControl<string | null | undefined>,

		/** Output only. Last update time of this resource. */
		updateTime: FormControl<string | null | undefined>,

		/** Optional. The relative resource name of the VMware Engine network. Specify the name in the following form: `projects/{project}/locations/{location}/vmwareEngineNetworks/{vmware_engine_network_id}` where `{project}` can either be a project number or a project ID. */
		vmwareEngineNetwork: FormControl<string | null | undefined>,

		/** Output only. The canonical name of the VMware Engine network in the form: `projects/{project_number}/locations/{location}/vmwareEngineNetworks/{vmware_engine_network_id}` */
		vmwareEngineNetworkCanonical: FormControl<string | null | undefined>,
	}
	export function CreateNetworkPolicyFormGroup() {
		return new FormGroup<NetworkPolicyFormProperties>({
			createTime: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			edgeServicesCidr: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			uid: new FormControl<string | null | undefined>(undefined),
			updateTime: new FormControl<string | null | undefined>(undefined),
			vmwareEngineNetwork: new FormControl<string | null | undefined>(undefined),
			vmwareEngineNetworkCanonical: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents a network service that is managed by a `NetworkPolicy` resource. A network service provides a way to control an aspect of external access to VMware workloads. For example, whether the VMware workloads in the private clouds governed by a network policy can access or be accessed from the internet. */
	export interface NetworkService {

		/** True if the service is enabled; false otherwise. */
		enabled?: boolean | null;

		/** Output only. State of the service. New values may be added to this enum when appropriate. */
		state?: NetworkServiceState | null;
	}

	/** Represents a network service that is managed by a `NetworkPolicy` resource. A network service provides a way to control an aspect of external access to VMware workloads. For example, whether the VMware workloads in the private clouds governed by a network policy can access or be accessed from the internet. */
	export interface NetworkServiceFormProperties {

		/** True if the service is enabled; false otherwise. */
		enabled: FormControl<boolean | null | undefined>,

		/** Output only. State of the service. New values may be added to this enum when appropriate. */
		state: FormControl<NetworkServiceState | null | undefined>,
	}
	export function CreateNetworkServiceFormGroup() {
		return new FormGroup<NetworkServiceFormProperties>({
			enabled: new FormControl<boolean | null | undefined>(undefined),
			state: new FormControl<NetworkServiceState | null | undefined>(undefined),
		});

	}

	export enum NetworkServiceState { STATE_UNSPECIFIED = 'STATE_UNSPECIFIED', UNPROVISIONED = 'UNPROVISIONED', RECONCILING = 'RECONCILING', ACTIVE = 'ACTIVE' }


	/** Response message for VmwareEngine.ListNodeTypes */
	export interface ListNodeTypesResponse {

		/** A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
		nextPageToken?: string | null;

		/** A list of Node Types. */
		nodeTypes?: Array<NodeType>;

		/** Locations that could not be reached when making an aggregated query using wildcards. */
		unreachable?: Array<string>;
	}

	/** Response message for VmwareEngine.ListNodeTypes */
	export interface ListNodeTypesResponseFormProperties {

		/** A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListNodeTypesResponseFormGroup() {
		return new FormGroup<ListNodeTypesResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Describes node type. */
	export interface NodeType {

		/** Output only. List of possible values of custom core count. */
		availableCustomCoreCounts?: Array<number>;

		/** Output only. Capabilities of this node type. */
		capabilities?: Array<string>;

		/**
		 * Output only. The amount of storage available, defined in GB.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		diskSizeGb?: number | null;

		/** Output only. The friendly name for this node type. For example: ve1-standard-72 */
		displayName?: string | null;

		/**
		 * Output only. The amount of physical memory available, defined in GB.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		memoryGb?: number | null;

		/** Output only. The resource name of this node type. Resource names are schemeless URIs that follow the conventions in https://cloud.google.com/apis/design/resource_names. For example: `projects/my-proj/locations/us-central1-a/nodeTypes/standard-72` */
		name?: string | null;

		/** Output only. The canonical identifier of the node type (corresponds to the `NodeType`). For example: standard-72. */
		nodeTypeId?: string | null;

		/**
		 * Output only. The total number of CPU cores in a single node.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		totalCoreCount?: number | null;

		/**
		 * Output only. The total number of virtual CPUs in a single node.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		virtualCpuCount?: number | null;
	}

	/** Describes node type. */
	export interface NodeTypeFormProperties {

		/**
		 * Output only. The amount of storage available, defined in GB.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		diskSizeGb: FormControl<number | null | undefined>,

		/** Output only. The friendly name for this node type. For example: ve1-standard-72 */
		displayName: FormControl<string | null | undefined>,

		/**
		 * Output only. The amount of physical memory available, defined in GB.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		memoryGb: FormControl<number | null | undefined>,

		/** Output only. The resource name of this node type. Resource names are schemeless URIs that follow the conventions in https://cloud.google.com/apis/design/resource_names. For example: `projects/my-proj/locations/us-central1-a/nodeTypes/standard-72` */
		name: FormControl<string | null | undefined>,

		/** Output only. The canonical identifier of the node type (corresponds to the `NodeType`). For example: standard-72. */
		nodeTypeId: FormControl<string | null | undefined>,

		/**
		 * Output only. The total number of CPU cores in a single node.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		totalCoreCount: FormControl<number | null | undefined>,

		/**
		 * Output only. The total number of virtual CPUs in a single node.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		virtualCpuCount: FormControl<number | null | undefined>,
	}
	export function CreateNodeTypeFormGroup() {
		return new FormGroup<NodeTypeFormProperties>({
			diskSizeGb: new FormControl<number | null | undefined>(undefined),
			displayName: new FormControl<string | null | undefined>(undefined),
			memoryGb: new FormControl<number | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			nodeTypeId: new FormControl<string | null | undefined>(undefined),
			totalCoreCount: new FormControl<number | null | undefined>(undefined),
			virtualCpuCount: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Response message for VmwareEngine.ListNodes */
	export interface ListNodesResponse {

		/** A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
		nextPageToken?: string | null;

		/** The nodes. */
		nodes?: Array<Node>;
	}

	/** Response message for VmwareEngine.ListNodes */
	export interface ListNodesResponseFormProperties {

		/** A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListNodesResponseFormGroup() {
		return new FormGroup<ListNodesResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Node in a cluster. */
	export interface Node {

		/** Output only. Customized number of cores */
		customCoreCount?: string | null;

		/** Output only. Fully qualified domain name of the node. */
		fqdn?: string | null;

		/** Output only. Internal IP address of the node. */
		internalIp?: string | null;

		/** Output only. The resource name of this node. Resource names are schemeless URIs that follow the conventions in https://cloud.google.com/apis/design/resource_names. For example: projects/my-project/locations/us-central1-a/privateClouds/my-cloud/clusters/my-cluster/nodes/my-node */
		name?: string | null;

		/** Output only. The canonical identifier of the node type (corresponds to the `NodeType`). For example: standard-72. */
		nodeTypeId?: string | null;

		/** Output only. The state of the appliance. */
		state?: NodeState | null;

		/** Output only. The version number of the VMware ESXi management component in this cluster. */
		version?: string | null;
	}

	/** Node in a cluster. */
	export interface NodeFormProperties {

		/** Output only. Customized number of cores */
		customCoreCount: FormControl<string | null | undefined>,

		/** Output only. Fully qualified domain name of the node. */
		fqdn: FormControl<string | null | undefined>,

		/** Output only. Internal IP address of the node. */
		internalIp: FormControl<string | null | undefined>,

		/** Output only. The resource name of this node. Resource names are schemeless URIs that follow the conventions in https://cloud.google.com/apis/design/resource_names. For example: projects/my-project/locations/us-central1-a/privateClouds/my-cloud/clusters/my-cluster/nodes/my-node */
		name: FormControl<string | null | undefined>,

		/** Output only. The canonical identifier of the node type (corresponds to the `NodeType`). For example: standard-72. */
		nodeTypeId: FormControl<string | null | undefined>,

		/** Output only. The state of the appliance. */
		state: FormControl<NodeState | null | undefined>,

		/** Output only. The version number of the VMware ESXi management component in this cluster. */
		version: FormControl<string | null | undefined>,
	}
	export function CreateNodeFormGroup() {
		return new FormGroup<NodeFormProperties>({
			customCoreCount: new FormControl<string | null | undefined>(undefined),
			fqdn: new FormControl<string | null | undefined>(undefined),
			internalIp: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			nodeTypeId: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<NodeState | null | undefined>(undefined),
			version: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum NodeState { STATE_UNSPECIFIED = 'STATE_UNSPECIFIED', ACTIVE = 'ACTIVE', CREATING = 'CREATING', FAILED = 'FAILED', UPGRADING = 'UPGRADING' }


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


	/** Response message for VmwareEngine.ListPeeringRoutes */
	export interface ListPeeringRoutesResponse {

		/** A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
		nextPageToken?: string | null;

		/** A list of peering routes. */
		peeringRoutes?: Array<PeeringRoute>;
	}

	/** Response message for VmwareEngine.ListPeeringRoutes */
	export interface ListPeeringRoutesResponseFormProperties {

		/** A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListPeeringRoutesResponseFormGroup() {
		return new FormGroup<ListPeeringRoutesResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Exchanged network peering route. */
	export interface PeeringRoute {

		/** Output only. Destination range of the peering route in CIDR notation. */
		destRange?: string | null;

		/** Output only. Direction of the routes exchanged with the peer network, from the VMware Engine network perspective: * Routes of direction `INCOMING` are imported from the peer network. * Routes of direction `OUTGOING` are exported from the intranet VPC network of the VMware Engine network. */
		direction?: PeeringRouteDirection | null;

		/** Output only. True if the peering route has been imported from a peered VPC network; false otherwise. The import happens if the field `NetworkPeering.importCustomRoutes` is true for this network, `NetworkPeering.exportCustomRoutes` is true for the peer VPC network, and the import does not result in a route conflict. */
		imported?: boolean | null;

		/** Output only. Region containing the next hop of the peering route. This field only applies to dynamic routes in the peer VPC network. */
		nextHopRegion?: string | null;

		/** Output only. The priority of the peering route. */
		priority?: string | null;

		/** Output only. Type of the route in the peer VPC network. */
		type?: PeeringRouteType | null;
	}

	/** Exchanged network peering route. */
	export interface PeeringRouteFormProperties {

		/** Output only. Destination range of the peering route in CIDR notation. */
		destRange: FormControl<string | null | undefined>,

		/** Output only. Direction of the routes exchanged with the peer network, from the VMware Engine network perspective: * Routes of direction `INCOMING` are imported from the peer network. * Routes of direction `OUTGOING` are exported from the intranet VPC network of the VMware Engine network. */
		direction: FormControl<PeeringRouteDirection | null | undefined>,

		/** Output only. True if the peering route has been imported from a peered VPC network; false otherwise. The import happens if the field `NetworkPeering.importCustomRoutes` is true for this network, `NetworkPeering.exportCustomRoutes` is true for the peer VPC network, and the import does not result in a route conflict. */
		imported: FormControl<boolean | null | undefined>,

		/** Output only. Region containing the next hop of the peering route. This field only applies to dynamic routes in the peer VPC network. */
		nextHopRegion: FormControl<string | null | undefined>,

		/** Output only. The priority of the peering route. */
		priority: FormControl<string | null | undefined>,

		/** Output only. Type of the route in the peer VPC network. */
		type: FormControl<PeeringRouteType | null | undefined>,
	}
	export function CreatePeeringRouteFormGroup() {
		return new FormGroup<PeeringRouteFormProperties>({
			destRange: new FormControl<string | null | undefined>(undefined),
			direction: new FormControl<PeeringRouteDirection | null | undefined>(undefined),
			imported: new FormControl<boolean | null | undefined>(undefined),
			nextHopRegion: new FormControl<string | null | undefined>(undefined),
			priority: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<PeeringRouteType | null | undefined>(undefined),
		});

	}

	export enum PeeringRouteDirection { DIRECTION_UNSPECIFIED = 'DIRECTION_UNSPECIFIED', INCOMING = 'INCOMING', OUTGOING = 'OUTGOING' }

	export enum PeeringRouteType { TYPE_UNSPECIFIED = 'TYPE_UNSPECIFIED', DYNAMIC_PEERING_ROUTE = 'DYNAMIC_PEERING_ROUTE', STATIC_PEERING_ROUTE = 'STATIC_PEERING_ROUTE', SUBNET_PEERING_ROUTE = 'SUBNET_PEERING_ROUTE' }


	/** Response message for VmwareEngine.ListPrivateClouds */
	export interface ListPrivateCloudsResponse {

		/** A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
		nextPageToken?: string | null;

		/** A list of private clouds. */
		privateClouds?: Array<PrivateCloud>;

		/** Locations that could not be reached when making an aggregated query using wildcards. */
		unreachable?: Array<string>;
	}

	/** Response message for VmwareEngine.ListPrivateClouds */
	export interface ListPrivateCloudsResponseFormProperties {

		/** A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListPrivateCloudsResponseFormGroup() {
		return new FormGroup<ListPrivateCloudsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents a private cloud resource. Private clouds of type `STANDARD` and `TIME_LIMITED` are zonal resources, `STRETCHED` private clouds are regional. */
	export interface PrivateCloud {

		/** Output only. Creation time of this resource. */
		createTime?: string | null;

		/** Output only. Time when the resource was scheduled for deletion. */
		deleteTime?: string | null;

		/** User-provided description for this private cloud. */
		description?: string | null;

		/** Output only. Time when the resource will be irreversibly deleted. */
		expireTime?: string | null;

		/** Details about a HCX Cloud Manager appliance. */
		hcx?: Hcx;

		/** Management cluster configuration. */
		managementCluster?: ManagementCluster;

		/** Output only. The resource name of this private cloud. Resource names are schemeless URIs that follow the conventions in https://cloud.google.com/apis/design/resource_names. For example: `projects/my-project/locations/us-central1-a/privateClouds/my-cloud` */
		name?: string | null;

		/** Network configuration in the consumer project with which the peering has to be done. */
		networkConfig?: NetworkConfig;

		/** Details about a NSX Manager appliance. */
		nsx?: Nsx;

		/** Output only. State of the resource. New values may be added to this enum when appropriate. */
		state?: PrivateCloudState | null;

		/** Optional. Type of the private cloud. Defaults to STANDARD. */
		type?: PrivateCloudType | null;

		/** Output only. System-generated unique identifier for the resource. */
		uid?: string | null;

		/** Output only. Last update time of this resource. */
		updateTime?: string | null;

		/** Details about a vCenter Server management appliance. */
		vcenter?: Vcenter;
	}

	/** Represents a private cloud resource. Private clouds of type `STANDARD` and `TIME_LIMITED` are zonal resources, `STRETCHED` private clouds are regional. */
	export interface PrivateCloudFormProperties {

		/** Output only. Creation time of this resource. */
		createTime: FormControl<string | null | undefined>,

		/** Output only. Time when the resource was scheduled for deletion. */
		deleteTime: FormControl<string | null | undefined>,

		/** User-provided description for this private cloud. */
		description: FormControl<string | null | undefined>,

		/** Output only. Time when the resource will be irreversibly deleted. */
		expireTime: FormControl<string | null | undefined>,

		/** Output only. The resource name of this private cloud. Resource names are schemeless URIs that follow the conventions in https://cloud.google.com/apis/design/resource_names. For example: `projects/my-project/locations/us-central1-a/privateClouds/my-cloud` */
		name: FormControl<string | null | undefined>,

		/** Output only. State of the resource. New values may be added to this enum when appropriate. */
		state: FormControl<PrivateCloudState | null | undefined>,

		/** Optional. Type of the private cloud. Defaults to STANDARD. */
		type: FormControl<PrivateCloudType | null | undefined>,

		/** Output only. System-generated unique identifier for the resource. */
		uid: FormControl<string | null | undefined>,

		/** Output only. Last update time of this resource. */
		updateTime: FormControl<string | null | undefined>,
	}
	export function CreatePrivateCloudFormGroup() {
		return new FormGroup<PrivateCloudFormProperties>({
			createTime: new FormControl<string | null | undefined>(undefined),
			deleteTime: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			expireTime: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<PrivateCloudState | null | undefined>(undefined),
			type: new FormControl<PrivateCloudType | null | undefined>(undefined),
			uid: new FormControl<string | null | undefined>(undefined),
			updateTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Management cluster configuration. */
	export interface ManagementCluster {

		/** Required. The user-provided identifier of the new `Cluster`. The identifier must meet the following requirements: * Only contains 1-63 alphanumeric characters and hyphens * Begins with an alphabetical character * Ends with a non-hyphen character * Not formatted as a UUID * Complies with [RFC 1034](https://datatracker.ietf.org/doc/html/rfc1034) (section 3.5) */
		clusterId?: string | null;

		/** Required. The map of cluster node types in this cluster, where the key is canonical identifier of the node type (corresponds to the `NodeType`). */
		nodeTypeConfigs?: {[id: string]: NodeTypeConfig };

		/** Configuration of a stretched cluster. */
		stretchedClusterConfig?: StretchedClusterConfig;
	}

	/** Management cluster configuration. */
	export interface ManagementClusterFormProperties {

		/** Required. The user-provided identifier of the new `Cluster`. The identifier must meet the following requirements: * Only contains 1-63 alphanumeric characters and hyphens * Begins with an alphabetical character * Ends with a non-hyphen character * Not formatted as a UUID * Complies with [RFC 1034](https://datatracker.ietf.org/doc/html/rfc1034) (section 3.5) */
		clusterId: FormControl<string | null | undefined>,

		/** Required. The map of cluster node types in this cluster, where the key is canonical identifier of the node type (corresponds to the `NodeType`). */
		nodeTypeConfigs: FormControl<{[id: string]: NodeTypeConfig } | null | undefined>,
	}
	export function CreateManagementClusterFormGroup() {
		return new FormGroup<ManagementClusterFormProperties>({
			clusterId: new FormControl<string | null | undefined>(undefined),
			nodeTypeConfigs: new FormControl<{[id: string]: NodeTypeConfig } | null | undefined>(undefined),
		});

	}


	/** Network configuration in the consumer project with which the peering has to be done. */
	export interface NetworkConfig {

		/** Output only. DNS Server IP of the Private Cloud. All DNS queries can be forwarded to this address for name resolution of Private Cloud's management entities like vCenter, NSX-T Manager and ESXi hosts. */
		dnsServerIp?: string | null;

		/** Required. Management CIDR used by VMware management appliances. */
		managementCidr?: string | null;

		/**
		 * Output only. The IP address layout version of the management IP address range. Possible versions include: * `managementIpAddressLayoutVersion=1`: Indicates the legacy IP address layout used by some existing private clouds. This is no longer supported for new private clouds as it does not support all features. * `managementIpAddressLayoutVersion=2`: Indicates the latest IP address layout used by all newly created private clouds. This version supports all current features.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		managementIpAddressLayoutVersion?: number | null;

		/** Optional. The relative resource name of the VMware Engine network attached to the private cloud. Specify the name in the following form: `projects/{project}/locations/{location}/vmwareEngineNetworks/{vmware_engine_network_id}` where `{project}` can either be a project number or a project ID. */
		vmwareEngineNetwork?: string | null;

		/** Output only. The canonical name of the VMware Engine network in the form: `projects/{project_number}/locations/{location}/vmwareEngineNetworks/{vmware_engine_network_id}` */
		vmwareEngineNetworkCanonical?: string | null;
	}

	/** Network configuration in the consumer project with which the peering has to be done. */
	export interface NetworkConfigFormProperties {

		/** Output only. DNS Server IP of the Private Cloud. All DNS queries can be forwarded to this address for name resolution of Private Cloud's management entities like vCenter, NSX-T Manager and ESXi hosts. */
		dnsServerIp: FormControl<string | null | undefined>,

		/** Required. Management CIDR used by VMware management appliances. */
		managementCidr: FormControl<string | null | undefined>,

		/**
		 * Output only. The IP address layout version of the management IP address range. Possible versions include: * `managementIpAddressLayoutVersion=1`: Indicates the legacy IP address layout used by some existing private clouds. This is no longer supported for new private clouds as it does not support all features. * `managementIpAddressLayoutVersion=2`: Indicates the latest IP address layout used by all newly created private clouds. This version supports all current features.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		managementIpAddressLayoutVersion: FormControl<number | null | undefined>,

		/** Optional. The relative resource name of the VMware Engine network attached to the private cloud. Specify the name in the following form: `projects/{project}/locations/{location}/vmwareEngineNetworks/{vmware_engine_network_id}` where `{project}` can either be a project number or a project ID. */
		vmwareEngineNetwork: FormControl<string | null | undefined>,

		/** Output only. The canonical name of the VMware Engine network in the form: `projects/{project_number}/locations/{location}/vmwareEngineNetworks/{vmware_engine_network_id}` */
		vmwareEngineNetworkCanonical: FormControl<string | null | undefined>,
	}
	export function CreateNetworkConfigFormGroup() {
		return new FormGroup<NetworkConfigFormProperties>({
			dnsServerIp: new FormControl<string | null | undefined>(undefined),
			managementCidr: new FormControl<string | null | undefined>(undefined),
			managementIpAddressLayoutVersion: new FormControl<number | null | undefined>(undefined),
			vmwareEngineNetwork: new FormControl<string | null | undefined>(undefined),
			vmwareEngineNetworkCanonical: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Details about a NSX Manager appliance. */
	export interface Nsx {

		/** Fully qualified domain name of the appliance. */
		fqdn?: string | null;

		/** Internal IP address of the appliance. */
		internalIp?: string | null;

		/** Output only. The state of the appliance. */
		state?: HcxState | null;

		/** Version of the appliance. */
		version?: string | null;
	}

	/** Details about a NSX Manager appliance. */
	export interface NsxFormProperties {

		/** Fully qualified domain name of the appliance. */
		fqdn: FormControl<string | null | undefined>,

		/** Internal IP address of the appliance. */
		internalIp: FormControl<string | null | undefined>,

		/** Output only. The state of the appliance. */
		state: FormControl<HcxState | null | undefined>,

		/** Version of the appliance. */
		version: FormControl<string | null | undefined>,
	}
	export function CreateNsxFormGroup() {
		return new FormGroup<NsxFormProperties>({
			fqdn: new FormControl<string | null | undefined>(undefined),
			internalIp: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<HcxState | null | undefined>(undefined),
			version: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum PrivateCloudState { STATE_UNSPECIFIED = 'STATE_UNSPECIFIED', ACTIVE = 'ACTIVE', CREATING = 'CREATING', UPDATING = 'UPDATING', FAILED = 'FAILED', DELETED = 'DELETED', PURGING = 'PURGING' }

	export enum PrivateCloudType { STANDARD = 'STANDARD', TIME_LIMITED = 'TIME_LIMITED', STRETCHED = 'STRETCHED' }


	/** Details about a vCenter Server management appliance. */
	export interface Vcenter {

		/** Fully qualified domain name of the appliance. */
		fqdn?: string | null;

		/** Internal IP address of the appliance. */
		internalIp?: string | null;

		/** Output only. The state of the appliance. */
		state?: HcxState | null;

		/** Version of the appliance. */
		version?: string | null;
	}

	/** Details about a vCenter Server management appliance. */
	export interface VcenterFormProperties {

		/** Fully qualified domain name of the appliance. */
		fqdn: FormControl<string | null | undefined>,

		/** Internal IP address of the appliance. */
		internalIp: FormControl<string | null | undefined>,

		/** Output only. The state of the appliance. */
		state: FormControl<HcxState | null | undefined>,

		/** Version of the appliance. */
		version: FormControl<string | null | undefined>,
	}
	export function CreateVcenterFormGroup() {
		return new FormGroup<VcenterFormProperties>({
			fqdn: new FormControl<string | null | undefined>(undefined),
			internalIp: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<HcxState | null | undefined>(undefined),
			version: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response message for VmwareEngine.ListPrivateConnectionPeeringRoutes */
	export interface ListPrivateConnectionPeeringRoutesResponse {

		/** A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
		nextPageToken?: string | null;

		/** A list of peering routes. */
		peeringRoutes?: Array<PeeringRoute>;
	}

	/** Response message for VmwareEngine.ListPrivateConnectionPeeringRoutes */
	export interface ListPrivateConnectionPeeringRoutesResponseFormProperties {

		/** A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListPrivateConnectionPeeringRoutesResponseFormGroup() {
		return new FormGroup<ListPrivateConnectionPeeringRoutesResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response message for VmwareEngine.ListPrivateConnections */
	export interface ListPrivateConnectionsResponse {

		/** A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
		nextPageToken?: string | null;

		/** A list of private connections. */
		privateConnections?: Array<PrivateConnection>;

		/** Unreachable resources. */
		unreachable?: Array<string>;
	}

	/** Response message for VmwareEngine.ListPrivateConnections */
	export interface ListPrivateConnectionsResponseFormProperties {

		/** A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListPrivateConnectionsResponseFormGroup() {
		return new FormGroup<ListPrivateConnectionsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Private connection resource that provides connectivity for VMware Engine private clouds. */
	export interface PrivateConnection {

		/** Output only. Creation time of this resource. */
		createTime?: string | null;

		/** Optional. User-provided description for this private connection. */
		description?: string | null;

		/** Output only. The resource name of the private connection. Resource names are schemeless URIs that follow the conventions in https://cloud.google.com/apis/design/resource_names. For example: `projects/my-project/locations/us-central1/privateConnections/my-connection` */
		name?: string | null;

		/** Output only. VPC network peering id between given network VPC and VMwareEngineNetwork. */
		peeringId?: string | null;

		/** Output only. Peering state between service network and VMware Engine network. */
		peeringState?: PrivateConnectionPeeringState | null;

		/** Optional. Routing Mode. Default value is set to GLOBAL. For type = PRIVATE_SERVICE_ACCESS, this field can be set to GLOBAL or REGIONAL, for other types only GLOBAL is supported. */
		routingMode?: PrivateConnectionRoutingMode | null;

		/** Required. Service network to create private connection. Specify the name in the following form: `projects/{project}/global/networks/{network_id}` For type = PRIVATE_SERVICE_ACCESS, this field represents servicenetworking VPC, e.g. projects/project-tp/global/networks/servicenetworking. For type = NETAPP_CLOUD_VOLUME, this field represents NetApp service VPC, e.g. projects/project-tp/global/networks/netapp-tenant-vpc. For type = DELL_POWERSCALE, this field represent Dell service VPC, e.g. projects/project-tp/global/networks/dell-tenant-vpc. For type= THIRD_PARTY_SERVICE, this field could represent a consumer VPC or any other producer VPC to which the VMware Engine Network needs to be connected, e.g. projects/project/global/networks/vpc. */
		serviceNetwork?: string | null;

		/** Output only. State of the private connection. */
		state?: PrivateConnectionState | null;

		/** Required. Private connection type. */
		type?: PrivateConnectionType | null;

		/** Output only. System-generated unique identifier for the resource. */
		uid?: string | null;

		/** Output only. Last update time of this resource. */
		updateTime?: string | null;

		/** Required. The relative resource name of Legacy VMware Engine network. Specify the name in the following form: `projects/{project}/locations/{location}/vmwareEngineNetworks/{vmware_engine_network_id}` where `{project}`, `{location}` will be same as specified in private connection resource name and `{vmware_engine_network_id}` will be in the form of `{location}`-default e.g. projects/project/locations/us-central1/vmwareEngineNetworks/us-central1-default. */
		vmwareEngineNetwork?: string | null;

		/** Output only. The canonical name of the VMware Engine network in the form: `projects/{project_number}/locations/{location}/vmwareEngineNetworks/{vmware_engine_network_id}` */
		vmwareEngineNetworkCanonical?: string | null;
	}

	/** Private connection resource that provides connectivity for VMware Engine private clouds. */
	export interface PrivateConnectionFormProperties {

		/** Output only. Creation time of this resource. */
		createTime: FormControl<string | null | undefined>,

		/** Optional. User-provided description for this private connection. */
		description: FormControl<string | null | undefined>,

		/** Output only. The resource name of the private connection. Resource names are schemeless URIs that follow the conventions in https://cloud.google.com/apis/design/resource_names. For example: `projects/my-project/locations/us-central1/privateConnections/my-connection` */
		name: FormControl<string | null | undefined>,

		/** Output only. VPC network peering id between given network VPC and VMwareEngineNetwork. */
		peeringId: FormControl<string | null | undefined>,

		/** Output only. Peering state between service network and VMware Engine network. */
		peeringState: FormControl<PrivateConnectionPeeringState | null | undefined>,

		/** Optional. Routing Mode. Default value is set to GLOBAL. For type = PRIVATE_SERVICE_ACCESS, this field can be set to GLOBAL or REGIONAL, for other types only GLOBAL is supported. */
		routingMode: FormControl<PrivateConnectionRoutingMode | null | undefined>,

		/** Required. Service network to create private connection. Specify the name in the following form: `projects/{project}/global/networks/{network_id}` For type = PRIVATE_SERVICE_ACCESS, this field represents servicenetworking VPC, e.g. projects/project-tp/global/networks/servicenetworking. For type = NETAPP_CLOUD_VOLUME, this field represents NetApp service VPC, e.g. projects/project-tp/global/networks/netapp-tenant-vpc. For type = DELL_POWERSCALE, this field represent Dell service VPC, e.g. projects/project-tp/global/networks/dell-tenant-vpc. For type= THIRD_PARTY_SERVICE, this field could represent a consumer VPC or any other producer VPC to which the VMware Engine Network needs to be connected, e.g. projects/project/global/networks/vpc. */
		serviceNetwork: FormControl<string | null | undefined>,

		/** Output only. State of the private connection. */
		state: FormControl<PrivateConnectionState | null | undefined>,

		/** Required. Private connection type. */
		type: FormControl<PrivateConnectionType | null | undefined>,

		/** Output only. System-generated unique identifier for the resource. */
		uid: FormControl<string | null | undefined>,

		/** Output only. Last update time of this resource. */
		updateTime: FormControl<string | null | undefined>,

		/** Required. The relative resource name of Legacy VMware Engine network. Specify the name in the following form: `projects/{project}/locations/{location}/vmwareEngineNetworks/{vmware_engine_network_id}` where `{project}`, `{location}` will be same as specified in private connection resource name and `{vmware_engine_network_id}` will be in the form of `{location}`-default e.g. projects/project/locations/us-central1/vmwareEngineNetworks/us-central1-default. */
		vmwareEngineNetwork: FormControl<string | null | undefined>,

		/** Output only. The canonical name of the VMware Engine network in the form: `projects/{project_number}/locations/{location}/vmwareEngineNetworks/{vmware_engine_network_id}` */
		vmwareEngineNetworkCanonical: FormControl<string | null | undefined>,
	}
	export function CreatePrivateConnectionFormGroup() {
		return new FormGroup<PrivateConnectionFormProperties>({
			createTime: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			peeringId: new FormControl<string | null | undefined>(undefined),
			peeringState: new FormControl<PrivateConnectionPeeringState | null | undefined>(undefined),
			routingMode: new FormControl<PrivateConnectionRoutingMode | null | undefined>(undefined),
			serviceNetwork: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<PrivateConnectionState | null | undefined>(undefined),
			type: new FormControl<PrivateConnectionType | null | undefined>(undefined),
			uid: new FormControl<string | null | undefined>(undefined),
			updateTime: new FormControl<string | null | undefined>(undefined),
			vmwareEngineNetwork: new FormControl<string | null | undefined>(undefined),
			vmwareEngineNetworkCanonical: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum PrivateConnectionPeeringState { PEERING_STATE_UNSPECIFIED = 'PEERING_STATE_UNSPECIFIED', PEERING_ACTIVE = 'PEERING_ACTIVE', PEERING_INACTIVE = 'PEERING_INACTIVE' }

	export enum PrivateConnectionRoutingMode { ROUTING_MODE_UNSPECIFIED = 'ROUTING_MODE_UNSPECIFIED', GLOBAL = 'GLOBAL', REGIONAL = 'REGIONAL' }

	export enum PrivateConnectionState { STATE_UNSPECIFIED = 'STATE_UNSPECIFIED', CREATING = 'CREATING', ACTIVE = 'ACTIVE', UPDATING = 'UPDATING', DELETING = 'DELETING', UNPROVISIONED = 'UNPROVISIONED', FAILED = 'FAILED' }

	export enum PrivateConnectionType { TYPE_UNSPECIFIED = 'TYPE_UNSPECIFIED', PRIVATE_SERVICE_ACCESS = 'PRIVATE_SERVICE_ACCESS', NETAPP_CLOUD_VOLUMES = 'NETAPP_CLOUD_VOLUMES', DELL_POWERSCALE = 'DELL_POWERSCALE', THIRD_PARTY_SERVICE = 'THIRD_PARTY_SERVICE' }


	/** Response message for VmwareEngine.ListSubnets */
	export interface ListSubnetsResponse {

		/** A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
		nextPageToken?: string | null;

		/** A list of subnets. */
		subnets?: Array<Subnet>;

		/** Locations that could not be reached when making an aggregated query using wildcards. */
		unreachable?: Array<string>;
	}

	/** Response message for VmwareEngine.ListSubnets */
	export interface ListSubnetsResponseFormProperties {

		/** A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListSubnetsResponseFormGroup() {
		return new FormGroup<ListSubnetsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Subnet in a private cloud. Either `management` subnets (such as vMotion) that are read-only, or `userDefined`, which can also be updated. */
	export interface Subnet {

		/** The IP address of the gateway of this subnet. Must fall within the IP prefix defined above. */
		gatewayIp?: string | null;

		/** The IP address range of the subnet in CIDR format '10.0.0.0/24'. */
		ipCidrRange?: string | null;

		/** Output only. The resource name of this subnet. Resource names are schemeless URIs that follow the conventions in https://cloud.google.com/apis/design/resource_names. For example: `projects/my-project/locations/us-central1-a/privateClouds/my-cloud/subnets/my-subnet` */
		name?: string | null;

		/** Output only. The state of the resource. */
		state?: SubnetState | null;

		/** Output only. The type of the subnet. For example "management" or "userDefined". */
		type?: string | null;

		/**
		 * Output only. VLAN ID of the VLAN on which the subnet is configured
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		vlanId?: number | null;
	}

	/** Subnet in a private cloud. Either `management` subnets (such as vMotion) that are read-only, or `userDefined`, which can also be updated. */
	export interface SubnetFormProperties {

		/** The IP address of the gateway of this subnet. Must fall within the IP prefix defined above. */
		gatewayIp: FormControl<string | null | undefined>,

		/** The IP address range of the subnet in CIDR format '10.0.0.0/24'. */
		ipCidrRange: FormControl<string | null | undefined>,

		/** Output only. The resource name of this subnet. Resource names are schemeless URIs that follow the conventions in https://cloud.google.com/apis/design/resource_names. For example: `projects/my-project/locations/us-central1-a/privateClouds/my-cloud/subnets/my-subnet` */
		name: FormControl<string | null | undefined>,

		/** Output only. The state of the resource. */
		state: FormControl<SubnetState | null | undefined>,

		/** Output only. The type of the subnet. For example "management" or "userDefined". */
		type: FormControl<string | null | undefined>,

		/**
		 * Output only. VLAN ID of the VLAN on which the subnet is configured
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		vlanId: FormControl<number | null | undefined>,
	}
	export function CreateSubnetFormGroup() {
		return new FormGroup<SubnetFormProperties>({
			gatewayIp: new FormControl<string | null | undefined>(undefined),
			ipCidrRange: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<SubnetState | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
			vlanId: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum SubnetState { STATE_UNSPECIFIED = 'STATE_UNSPECIFIED', ACTIVE = 'ACTIVE', CREATING = 'CREATING', UPDATING = 'UPDATING', DELETING = 'DELETING', RECONCILING = 'RECONCILING', FAILED = 'FAILED' }


	/** Response message for VmwareEngine.ListVmwareEngineNetworks */
	export interface ListVmwareEngineNetworksResponse {

		/** A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
		nextPageToken?: string | null;

		/** Unreachable resources. */
		unreachable?: Array<string>;

		/** A list of VMware Engine networks. */
		vmwareEngineNetworks?: Array<VmwareEngineNetwork>;
	}

	/** Response message for VmwareEngine.ListVmwareEngineNetworks */
	export interface ListVmwareEngineNetworksResponseFormProperties {

		/** A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListVmwareEngineNetworksResponseFormGroup() {
		return new FormGroup<ListVmwareEngineNetworksResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** VMware Engine network resource that provides connectivity for VMware Engine private clouds. */
	export interface VmwareEngineNetwork {

		/** Output only. Creation time of this resource. */
		createTime?: string | null;

		/** User-provided description for this VMware Engine network. */
		description?: string | null;

		/** Checksum that may be sent on update and delete requests to ensure that the user-provided value is up to date before the server processes a request. The server computes checksums based on the value of other fields in the request. */
		etag?: string | null;

		/** Output only. The resource name of the VMware Engine network. Resource names are schemeless URIs that follow the conventions in https://cloud.google.com/apis/design/resource_names. For example: `projects/my-project/locations/global/vmwareEngineNetworks/my-network` */
		name?: string | null;

		/** Output only. State of the VMware Engine network. */
		state?: VmwareEngineNetworkState | null;

		/** Required. VMware Engine network type. */
		type?: VmwareEngineNetworkType | null;

		/** Output only. System-generated unique identifier for the resource. */
		uid?: string | null;

		/** Output only. Last update time of this resource. */
		updateTime?: string | null;

		/** Output only. VMware Engine service VPC networks that provide connectivity from a private cloud to customer projects, the internet, and other Google Cloud services. */
		vpcNetworks?: Array<VpcNetwork>;
	}

	/** VMware Engine network resource that provides connectivity for VMware Engine private clouds. */
	export interface VmwareEngineNetworkFormProperties {

		/** Output only. Creation time of this resource. */
		createTime: FormControl<string | null | undefined>,

		/** User-provided description for this VMware Engine network. */
		description: FormControl<string | null | undefined>,

		/** Checksum that may be sent on update and delete requests to ensure that the user-provided value is up to date before the server processes a request. The server computes checksums based on the value of other fields in the request. */
		etag: FormControl<string | null | undefined>,

		/** Output only. The resource name of the VMware Engine network. Resource names are schemeless URIs that follow the conventions in https://cloud.google.com/apis/design/resource_names. For example: `projects/my-project/locations/global/vmwareEngineNetworks/my-network` */
		name: FormControl<string | null | undefined>,

		/** Output only. State of the VMware Engine network. */
		state: FormControl<VmwareEngineNetworkState | null | undefined>,

		/** Required. VMware Engine network type. */
		type: FormControl<VmwareEngineNetworkType | null | undefined>,

		/** Output only. System-generated unique identifier for the resource. */
		uid: FormControl<string | null | undefined>,

		/** Output only. Last update time of this resource. */
		updateTime: FormControl<string | null | undefined>,
	}
	export function CreateVmwareEngineNetworkFormGroup() {
		return new FormGroup<VmwareEngineNetworkFormProperties>({
			createTime: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			etag: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<VmwareEngineNetworkState | null | undefined>(undefined),
			type: new FormControl<VmwareEngineNetworkType | null | undefined>(undefined),
			uid: new FormControl<string | null | undefined>(undefined),
			updateTime: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum VmwareEngineNetworkState { STATE_UNSPECIFIED = 'STATE_UNSPECIFIED', CREATING = 'CREATING', ACTIVE = 'ACTIVE', UPDATING = 'UPDATING', DELETING = 'DELETING' }

	export enum VmwareEngineNetworkType { TYPE_UNSPECIFIED = 'TYPE_UNSPECIFIED', LEGACY = 'LEGACY', STANDARD = 'STANDARD' }


	/** Represents a VMware Engine VPC network that is managed by a VMware Engine network resource. */
	export interface VpcNetwork {

		/** Output only. The relative resource name of the service VPC network this VMware Engine network is attached to. For example: `projects/123123/global/networks/my-network` */
		network?: string | null;

		/** Output only. Type of VPC network (INTRANET, INTERNET, or GOOGLE_CLOUD) */
		type?: VpcNetworkType | null;
	}

	/** Represents a VMware Engine VPC network that is managed by a VMware Engine network resource. */
	export interface VpcNetworkFormProperties {

		/** Output only. The relative resource name of the service VPC network this VMware Engine network is attached to. For example: `projects/123123/global/networks/my-network` */
		network: FormControl<string | null | undefined>,

		/** Output only. Type of VPC network (INTRANET, INTERNET, or GOOGLE_CLOUD) */
		type: FormControl<VpcNetworkType | null | undefined>,
	}
	export function CreateVpcNetworkFormGroup() {
		return new FormGroup<VpcNetworkFormProperties>({
			network: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<VpcNetworkType | null | undefined>(undefined),
		});

	}

	export enum VpcNetworkType { TYPE_UNSPECIFIED = 'TYPE_UNSPECIFIED', INTRANET = 'INTRANET', INTERNET = 'INTERNET', GOOGLE_CLOUD = 'GOOGLE_CLOUD' }


	/** VmwareEngine specific metadata for the given google.cloud.location.Location. It is returned as a content of the `google.cloud.location.Location.metadata` field. */
	export interface LocationMetadata {

		/** Output only. Capabilities of this location. */
		capabilities?: Array<string>;
	}

	/** VmwareEngine specific metadata for the given google.cloud.location.Location. It is returned as a content of the `google.cloud.location.Location.metadata` field. */
	export interface LocationMetadataFormProperties {
	}
	export function CreateLocationMetadataFormGroup() {
		return new FormGroup<LocationMetadataFormProperties>({
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

		/** Output only. True if the user has requested cancellation of the operation; false otherwise. Operations that have successfully been cancelled have Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`. */
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

		/** Output only. True if the user has requested cancellation of the operation; false otherwise. Operations that have successfully been cancelled have Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`. */
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


	/** Request message for VmwareEngine.RepairManagementDnsZoneBindings */
	export interface RepairManagementDnsZoneBindingRequest {

		/** Optional. A request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server guarantees that a request doesn't result in creation of duplicate commitments for at least 60 minutes. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if the original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
		requestId?: string | null;
	}

	/** Request message for VmwareEngine.RepairManagementDnsZoneBindings */
	export interface RepairManagementDnsZoneBindingRequestFormProperties {

		/** Optional. A request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server guarantees that a request doesn't result in creation of duplicate commitments for at least 60 minutes. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if the original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
		requestId: FormControl<string | null | undefined>,
	}
	export function CreateRepairManagementDnsZoneBindingRequestFormGroup() {
		return new FormGroup<RepairManagementDnsZoneBindingRequestFormProperties>({
			requestId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Request message for VmwareEngine.ResetNsxCredentials */
	export interface ResetNsxCredentialsRequest {

		/** Optional. A request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server guarantees that a request doesn't result in creation of duplicate commitments for at least 60 minutes. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
		requestId?: string | null;
	}

	/** Request message for VmwareEngine.ResetNsxCredentials */
	export interface ResetNsxCredentialsRequestFormProperties {

		/** Optional. A request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server guarantees that a request doesn't result in creation of duplicate commitments for at least 60 minutes. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
		requestId: FormControl<string | null | undefined>,
	}
	export function CreateResetNsxCredentialsRequestFormGroup() {
		return new FormGroup<ResetNsxCredentialsRequestFormProperties>({
			requestId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Request message for VmwareEngine.ResetVcenterCredentials */
	export interface ResetVcenterCredentialsRequest {

		/** Optional. A request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server guarantees that a request doesn't result in creation of duplicate commitments for at least 60 minutes. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
		requestId?: string | null;

		/** Optional. The username of the user to be to reset the credentials. The default value of this field is CloudOwner@gve.local. The provided value should be one of the following: solution-user-01@gve.local, solution-user-02@gve.local, solution-user-03@gve.local, solution-user-04@gve.local, solution-user-05@gve.local, zertoadmin@gve.local. */
		username?: string | null;
	}

	/** Request message for VmwareEngine.ResetVcenterCredentials */
	export interface ResetVcenterCredentialsRequestFormProperties {

		/** Optional. A request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server guarantees that a request doesn't result in creation of duplicate commitments for at least 60 minutes. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
		requestId: FormControl<string | null | undefined>,

		/** Optional. The username of the user to be to reset the credentials. The default value of this field is CloudOwner@gve.local. The provided value should be one of the following: solution-user-01@gve.local, solution-user-02@gve.local, solution-user-03@gve.local, solution-user-04@gve.local, solution-user-05@gve.local, zertoadmin@gve.local. */
		username: FormControl<string | null | undefined>,
	}
	export function CreateResetVcenterCredentialsRequestFormGroup() {
		return new FormGroup<ResetVcenterCredentialsRequestFormProperties>({
			requestId: new FormControl<string | null | undefined>(undefined),
			username: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Request message for VmwareEngine.RevokeDnsBindPermission */
	export interface RevokeDnsBindPermissionRequest {

		/** Users/Service accounts which have access for DNS binding on the intranet VPC corresponding to the consumer project. */
		principal?: Principal;

		/** Optional. A request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server guarantees that a request doesn't result in creation of duplicate commitments for at least 60 minutes. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
		requestId?: string | null;
	}

	/** Request message for VmwareEngine.RevokeDnsBindPermission */
	export interface RevokeDnsBindPermissionRequestFormProperties {

		/** Optional. A request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server guarantees that a request doesn't result in creation of duplicate commitments for at least 60 minutes. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
		requestId: FormControl<string | null | undefined>,
	}
	export function CreateRevokeDnsBindPermissionRequestFormGroup() {
		return new FormGroup<RevokeDnsBindPermissionRequestFormProperties>({
			requestId: new FormControl<string | null | undefined>(undefined),
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


	/** Request message for VmwareEngine.UndeletePrivateCloud */
	export interface UndeletePrivateCloudRequest {

		/** Optional. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
		requestId?: string | null;
	}

	/** Request message for VmwareEngine.UndeletePrivateCloud */
	export interface UndeletePrivateCloudRequestFormProperties {

		/** Optional. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
		requestId: FormControl<string | null | undefined>,
	}
	export function CreateUndeletePrivateCloudRequestFormGroup() {
		return new FormGroup<UndeletePrivateCloudRequestFormProperties>({
			requestId: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Deletes a `VmwareEngineNetwork` resource. You can only delete a VMware Engine network after all resources that refer to it are deleted. For example, a private cloud, a network peering, and a network policy can all refer to the same VMware Engine network.
		 * Delete v1/{name}
		 * @param {string} name Required. The resource name of the VMware Engine network to be deleted. Resource names are schemeless URIs that follow the conventions in https://cloud.google.com/apis/design/resource_names. For example: `projects/my-project/locations/global/vmwareEngineNetworks/my-network`
		 * @param {string} etag Optional. Checksum used to ensure that the user-provided value is up to date before the server processes the request. The server compares provided checksum with the current checksum of the resource. If the user-provided value is out of date, this request returns an `ABORTED` error.
		 * @param {string} requestId Optional. A request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server guarantees that a request doesn't result in creation of duplicate commitments for at least 60 minutes. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
		 * @return {Operation} Successful response
		 */
		Vmwareengine_projects_locations_vmwareEngineNetworks_delete(name: string, etag: string | null | undefined, requestId: string | null | undefined): Observable<Operation> {
			return this.http.delete<Operation>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + '&etag=' + (etag == null ? '' : encodeURIComponent(etag)) + '&requestId=' + (requestId == null ? '' : encodeURIComponent(requestId)), {});
		}

		/**
		 * Retrieves a `VmwareEngineNetwork` resource by its resource name. The resource contains details of the VMware Engine network, such as its VMware Engine network type, peered networks in a service project, and state (for example, `CREATING`, `ACTIVE`, `DELETING`).
		 * Get v1/{name}
		 * @param {string} name Required. The resource name of the VMware Engine network to retrieve. Resource names are schemeless URIs that follow the conventions in https://cloud.google.com/apis/design/resource_names. For example: `projects/my-project/locations/global/vmwareEngineNetworks/my-network`
		 * @return {VmwareEngineNetwork} Successful response
		 */
		Vmwareengine_projects_locations_vmwareEngineNetworks_get(name: string): Observable<VmwareEngineNetwork> {
			return this.http.get<VmwareEngineNetwork>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)), {});
		}

		/**
		 * Modifies a VMware Engine network resource. Only the following fields can be updated: `description`. Only fields specified in `updateMask` are applied.
		 * Patch v1/{name}
		 * @param {string} name Output only. The resource name of the VMware Engine network. Resource names are schemeless URIs that follow the conventions in https://cloud.google.com/apis/design/resource_names. For example: `projects/my-project/locations/global/vmwareEngineNetworks/my-network`
		 * @param {string} requestId Optional. A request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server guarantees that a request doesn't result in creation of duplicate commitments for at least 60 minutes. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
		 * @param {string} updateMask Required. Field mask is used to specify the fields to be overwritten in the VMware Engine network resource by the update. The fields specified in the `update_mask` are relative to the resource, not the full request. A field will be overwritten if it is in the mask. If the user does not provide a mask then all fields will be overwritten. Only the following fields can be updated: `description`.
		 * @param {boolean} validateOnly Optional. True if you want the request to be validated and not executed; false otherwise.
		 * @return {Operation} Successful response
		 */
		Vmwareengine_projects_locations_vmwareEngineNetworks_patch(name: string, requestId: string | null | undefined, updateMask: string | null | undefined, validateOnly: boolean | null | undefined, requestBody: VmwareEngineNetwork): Observable<Operation> {
			return this.http.patch<Operation>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + '&requestId=' + (requestId == null ? '' : encodeURIComponent(requestId)) + '&updateMask=' + (updateMask == null ? '' : encodeURIComponent(updateMask)) + '&validateOnly=' + validateOnly, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
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
		Vmwareengine_projects_locations_list(name: string, filter: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListLocationsResponse> {
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
		Vmwareengine_projects_locations_operations_list(name: string, filter: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListOperationsResponse> {
			return this.http.get<ListOperationsResponse>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + '/operations&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Grants the bind permission to the customer provided principal(user / service account) to bind their DNS zone with the intranet VPC associated with the project.
		 * Post v1/{name}:grant
		 * @param {string} name Required. The name of the resource which stores the users/service accounts having the permission to bind to the corresponding intranet VPC of the consumer project. DnsBindPermission is a global resource. Resource names are schemeless URIs that follow the conventions in https://cloud.google.com/apis/design/resource_names. For example: `projects/my-project/locations/global/dnsBindPermission`
		 * @return {Operation} Successful response
		 */
		Vmwareengine_projects_locations_global_dnsBindPermission_grant(name: string, requestBody: GrantDnsBindPermissionRequest): Observable<Operation> {
			return this.http.post<Operation>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + ':grant', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retries to create a `ManagementDnsZoneBinding` resource that is in failed state.
		 * Post v1/{name}:repair
		 * @param {string} name Required. The resource name of the management DNS zone binding to repair. Resource names are schemeless URIs that follow the conventions in https://cloud.google.com/apis/design/resource_names. For example: `projects/my-project/locations/us-central1-a/privateClouds/my-cloud/managementDnsZoneBindings/my-management-dns-zone-binding`
		 * @return {Operation} Successful response
		 */
		Vmwareengine_projects_locations_privateClouds_managementDnsZoneBindings_repair(name: string, requestBody: RepairManagementDnsZoneBindingRequest): Observable<Operation> {
			return this.http.post<Operation>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + ':repair', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Revokes the bind permission from the customer provided principal(user / service account) on the intranet VPC associated with the consumer project.
		 * Post v1/{name}:revoke
		 * @param {string} name Required. The name of the resource which stores the users/service accounts having the permission to bind to the corresponding intranet VPC of the consumer project. DnsBindPermission is a global resource. Resource names are schemeless URIs that follow the conventions in https://cloud.google.com/apis/design/resource_names. For example: `projects/my-project/locations/global/dnsBindPermission`
		 * @return {Operation} Successful response
		 */
		Vmwareengine_projects_locations_global_dnsBindPermission_revoke(name: string, requestBody: RevokeDnsBindPermissionRequest): Observable<Operation> {
			return this.http.post<Operation>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + ':revoke', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Restores a private cloud that was previously scheduled for deletion by `DeletePrivateCloud`. A `PrivateCloud` resource scheduled for deletion has `PrivateCloud.state` set to `DELETED` and `PrivateCloud.expireTime` set to the time when deletion can no longer be reversed.
		 * Post v1/{name}:undelete
		 * @param {string} name Required. The resource name of the private cloud scheduled for deletion. Resource names are schemeless URIs that follow the conventions in https://cloud.google.com/apis/design/resource_names. For example: `projects/my-project/locations/us-central1-a/privateClouds/my-cloud`
		 * @return {Operation} Successful response
		 */
		Vmwareengine_projects_locations_privateClouds_undelete(name: string, requestBody: UndeletePrivateCloudRequest): Observable<Operation> {
			return this.http.post<Operation>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + ':undelete', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists external IP addresses assigned to VMware workload VMs within the scope of the given network policy.
		 * Get v1/{networkPolicy}:fetchExternalAddresses
		 * @param {string} networkPolicy Required. The resource name of the network policy to query for assigned external IP addresses. Resource names are schemeless URIs that follow the conventions in https://cloud.google.com/apis/design/resource_names. For example: `projects/my-project/locations/us-central1/networkPolicies/my-policy`
		 * @param {number} pageSize The maximum number of external IP addresses to return in one page. The service may return fewer than this value. The maximum value is coerced to 1000. The default value of this field is 500.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} pageToken A page token, received from a previous `FetchNetworkPolicyExternalAddresses` call. Provide this to retrieve the subsequent page. When paginating, all parameters provided to `FetchNetworkPolicyExternalAddresses`, except for `page_size` and `page_token`, must match the call that provided the page token.
		 * @return {FetchNetworkPolicyExternalAddressesResponse} Successful response
		 */
		Vmwareengine_projects_locations_networkPolicies_fetchExternalAddresses(networkPolicy: string, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<FetchNetworkPolicyExternalAddressesResponse> {
			return this.http.get<FetchNetworkPolicyExternalAddressesResponse>(this.baseUri + 'v1/' + (networkPolicy == null ? '' : encodeURIComponent(networkPolicy)) + ':fetchExternalAddresses&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Lists `Cluster` resources in a given private cloud.
		 * Get v1/{parent}/clusters
		 * @param {string} parent Required. The resource name of the private cloud to query for clusters. Resource names are schemeless URIs that follow the conventions in https://cloud.google.com/apis/design/resource_names. For example: `projects/my-project/locations/us-central1-a/privateClouds/my-cloud`
		 * @param {string} filter  To filter on multiple expressions, provide each separate expression within parentheses. For example: ``` (name = "example-cluster") (nodeCount = "3") ``` By default, each expression is an `AND` expression. However, you can include `AND` and `OR` expressions explicitly. For example: ``` (name = "example-cluster-1") AND (createTime > "2021-04-12T08:15:10.40Z") OR (name = "example-cluster-2") ```
		 * @param {string} orderBy Sorts list results by a certain order. By default, returned results are ordered by `name` in ascending order. You can also sort results in descending order based on the `name` value using `orderBy="name desc"`. Currently, only ordering by `name` is supported.
		 * @param {number} pageSize The maximum number of clusters to return in one page. The service may return fewer than this value. The maximum value is coerced to 1000. The default value of this field is 500.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} pageToken A page token, received from a previous `ListClusters` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListClusters` must match the call that provided the page token.
		 * @return {ListClustersResponse} Successful response
		 */
		Vmwareengine_projects_locations_privateClouds_clusters_list(parent: string, filter: string | null | undefined, orderBy: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListClustersResponse> {
			return this.http.get<ListClustersResponse>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/clusters&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&orderBy=' + (orderBy == null ? '' : encodeURIComponent(orderBy)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Creates a new cluster in a given private cloud. Creating a new cluster provides additional nodes for use in the parent private cloud and requires sufficient [node quota](https://cloud.google.com/vmware-engine/quotas).
		 * Post v1/{parent}/clusters
		 * @param {string} parent Required. The resource name of the private cloud to create a new cluster in. Resource names are schemeless URIs that follow the conventions in https://cloud.google.com/apis/design/resource_names. For example: `projects/my-project/locations/us-central1-a/privateClouds/my-cloud`
		 * @param {string} clusterId Required. The user-provided identifier of the new `Cluster`. This identifier must be unique among clusters within the parent and becomes the final token in the name URI. The identifier must meet the following requirements: * Only contains 1-63 alphanumeric characters and hyphens * Begins with an alphabetical character * Ends with a non-hyphen character * Not formatted as a UUID * Complies with [RFC 1034](https://datatracker.ietf.org/doc/html/rfc1034) (section 3.5)
		 * @param {string} requestId Optional. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
		 * @param {boolean} validateOnly Optional. True if you want the request to be validated and not executed; false otherwise.
		 * @return {Operation} Successful response
		 */
		Vmwareengine_projects_locations_privateClouds_clusters_create(parent: string, clusterId: string | null | undefined, requestId: string | null | undefined, validateOnly: boolean | null | undefined, requestBody: Cluster): Observable<Operation> {
			return this.http.post<Operation>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/clusters&clusterId=' + (clusterId == null ? '' : encodeURIComponent(clusterId)) + '&requestId=' + (requestId == null ? '' : encodeURIComponent(requestId)) + '&validateOnly=' + validateOnly, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists `ExternalAccessRule` resources in the specified network policy.
		 * Get v1/{parent}/externalAccessRules
		 * @param {string} parent Required. The resource name of the network policy to query for external access firewall rules. Resource names are schemeless URIs that follow the conventions in https://cloud.google.com/apis/design/resource_names. For example: `projects/my-project/locations/us-central1/networkPolicies/my-policy`
		 * @param {string} filter A filter expression that matches resources returned in the response. The expression must specify the field name, a comparison operator, and the value that you want to use for filtering. The value must be a string, a number, or a boolean. The comparison operator must be `=`, `!=`, `>`, or `<`. For example, if you are filtering a list of external access rules, you can exclude the ones named `example-rule` by specifying `name != "example-rule"`. To filter on multiple expressions, provide each separate expression within parentheses. For example: ``` (name = "example-rule") (createTime > "2021-04-12T08:15:10.40Z") ``` By default, each expression is an `AND` expression. However, you can include `AND` and `OR` expressions explicitly. For example: ``` (name = "example-rule-1") AND (createTime > "2021-04-12T08:15:10.40Z") OR (name = "example-rule-2") ```
		 * @param {string} orderBy Sorts list results by a certain order. By default, returned results are ordered by `name` in ascending order. You can also sort results in descending order based on the `name` value using `orderBy="name desc"`. Currently, only ordering by `name` is supported.
		 * @param {number} pageSize The maximum number of external access rules to return in one page. The service may return fewer than this value. The maximum value is coerced to 1000. The default value of this field is 500.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} pageToken A page token, received from a previous `ListExternalAccessRulesRequest` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListExternalAccessRulesRequest` must match the call that provided the page token.
		 * @return {ListExternalAccessRulesResponse} Successful response
		 */
		Vmwareengine_projects_locations_networkPolicies_externalAccessRules_list(parent: string, filter: string | null | undefined, orderBy: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListExternalAccessRulesResponse> {
			return this.http.get<ListExternalAccessRulesResponse>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/externalAccessRules&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&orderBy=' + (orderBy == null ? '' : encodeURIComponent(orderBy)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Creates a new external access rule in a given network policy.
		 * Post v1/{parent}/externalAccessRules
		 * @param {string} parent Required. The resource name of the network policy to create a new external access firewall rule in. Resource names are schemeless URIs that follow the conventions in https://cloud.google.com/apis/design/resource_names. For example: `projects/my-project/locations/us-central1/networkPolicies/my-policy`
		 * @param {string} externalAccessRuleId Required. The user-provided identifier of the `ExternalAccessRule` to be created. This identifier must be unique among `ExternalAccessRule` resources within the parent and becomes the final token in the name URI. The identifier must meet the following requirements: * Only contains 1-63 alphanumeric characters and hyphens * Begins with an alphabetical character * Ends with a non-hyphen character * Not formatted as a UUID * Complies with [RFC 1034](https://datatracker.ietf.org/doc/html/rfc1034) (section 3.5)
		 * @param {string} requestId A request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server guarantees that a request doesn't result in creation of duplicate commitments for at least 60 minutes. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if the original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
		 * @return {Operation} Successful response
		 */
		Vmwareengine_projects_locations_networkPolicies_externalAccessRules_create(parent: string, externalAccessRuleId: string | null | undefined, requestId: string | null | undefined, requestBody: ExternalAccessRule): Observable<Operation> {
			return this.http.post<Operation>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/externalAccessRules&externalAccessRuleId=' + (externalAccessRuleId == null ? '' : encodeURIComponent(externalAccessRuleId)) + '&requestId=' + (requestId == null ? '' : encodeURIComponent(requestId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists external IP addresses assigned to VMware workload VMs in a given private cloud.
		 * Get v1/{parent}/externalAddresses
		 * @param {string} parent Required. The resource name of the private cloud to be queried for external IP addresses. Resource names are schemeless URIs that follow the conventions in https://cloud.google.com/apis/design/resource_names. For example: `projects/my-project/locations/us-central1-a/privateClouds/my-cloud`
		 * @param {string} filter A filter expression that matches resources returned in the response. The expression must specify the field name, a comparison operator, and the value that you want to use for filtering. The value must be a string, a number, or a boolean. The comparison operator must be `=`, `!=`, `>`, or `<`. For example, if you are filtering a list of IP addresses, you can exclude the ones named `example-ip` by specifying `name != "example-ip"`. To filter on multiple expressions, provide each separate expression within parentheses. For example: ``` (name = "example-ip") (createTime > "2021-04-12T08:15:10.40Z") ``` By default, each expression is an `AND` expression. However, you can include `AND` and `OR` expressions explicitly. For example: ``` (name = "example-ip-1") AND (createTime > "2021-04-12T08:15:10.40Z") OR (name = "example-ip-2") ```
		 * @param {string} orderBy Sorts list results by a certain order. By default, returned results are ordered by `name` in ascending order. You can also sort results in descending order based on the `name` value using `orderBy="name desc"`. Currently, only ordering by `name` is supported.
		 * @param {number} pageSize The maximum number of external IP addresses to return in one page. The service may return fewer than this value. The maximum value is coerced to 1000. The default value of this field is 500.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} pageToken A page token, received from a previous `ListExternalAddresses` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListExternalAddresses` must match the call that provided the page token.
		 * @return {ListExternalAddressesResponse} Successful response
		 */
		Vmwareengine_projects_locations_privateClouds_externalAddresses_list(parent: string, filter: string | null | undefined, orderBy: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListExternalAddressesResponse> {
			return this.http.get<ListExternalAddressesResponse>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/externalAddresses&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&orderBy=' + (orderBy == null ? '' : encodeURIComponent(orderBy)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Creates a new `ExternalAddress` resource in a given private cloud. The network policy that corresponds to the private cloud must have the external IP address network service enabled (`NetworkPolicy.external_ip`).
		 * Post v1/{parent}/externalAddresses
		 * @param {string} parent Required. The resource name of the private cloud to create a new external IP address in. Resource names are schemeless URIs that follow the conventions in https://cloud.google.com/apis/design/resource_names. For example: `projects/my-project/locations/us-central1-a/privateClouds/my-cloud`
		 * @param {string} externalAddressId Required. The user-provided identifier of the `ExternalAddress` to be created. This identifier must be unique among `ExternalAddress` resources within the parent and becomes the final token in the name URI. The identifier must meet the following requirements: * Only contains 1-63 alphanumeric characters and hyphens * Begins with an alphabetical character * Ends with a non-hyphen character * Not formatted as a UUID * Complies with [RFC 1034](https://datatracker.ietf.org/doc/html/rfc1034) (section 3.5)
		 * @param {string} requestId Optional. A request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server guarantees that a request doesn't result in creation of duplicate commitments for at least 60 minutes. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if the original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
		 * @return {Operation} Successful response
		 */
		Vmwareengine_projects_locations_privateClouds_externalAddresses_create(parent: string, externalAddressId: string | null | undefined, requestId: string | null | undefined, requestBody: ExternalAddress): Observable<Operation> {
			return this.http.post<Operation>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/externalAddresses&externalAddressId=' + (externalAddressId == null ? '' : encodeURIComponent(externalAddressId)) + '&requestId=' + (requestId == null ? '' : encodeURIComponent(requestId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists `HcxActivationKey` resources in a given private cloud.
		 * Get v1/{parent}/hcxActivationKeys
		 * @param {string} parent Required. The resource name of the private cloud to be queried for HCX activation keys. Resource names are schemeless URIs that follow the conventions in https://cloud.google.com/apis/design/resource_names. For example: `projects/my-project/locations/us-central1/privateClouds/my-cloud`
		 * @param {number} pageSize The maximum number of HCX activation keys to return in one page. The service may return fewer than this value. The maximum value is coerced to 1000. The default value of this field is 500.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} pageToken A page token, received from a previous `ListHcxActivationKeys` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListHcxActivationKeys` must match the call that provided the page token.
		 * @return {ListHcxActivationKeysResponse} Successful response
		 */
		Vmwareengine_projects_locations_privateClouds_hcxActivationKeys_list(parent: string, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListHcxActivationKeysResponse> {
			return this.http.get<ListHcxActivationKeysResponse>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/hcxActivationKeys&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Creates a new HCX activation key in a given private cloud.
		 * Post v1/{parent}/hcxActivationKeys
		 * @param {string} parent Required. The resource name of the private cloud to create the key for. Resource names are schemeless URIs that follow the conventions in https://cloud.google.com/apis/design/resource_names. For example: `projects/my-project/locations/us-central1/privateClouds/my-cloud`
		 * @param {string} hcxActivationKeyId Required. The user-provided identifier of the `HcxActivationKey` to be created. This identifier must be unique among `HcxActivationKey` resources within the parent and becomes the final token in the name URI. The identifier must meet the following requirements: * Only contains 1-63 alphanumeric characters and hyphens * Begins with an alphabetical character * Ends with a non-hyphen character * Not formatted as a UUID * Complies with [RFC 1034](https://datatracker.ietf.org/doc/html/rfc1034) (section 3.5)
		 * @param {string} requestId A request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server guarantees that a request doesn't result in creation of duplicate commitments for at least 60 minutes. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
		 * @return {Operation} Successful response
		 */
		Vmwareengine_projects_locations_privateClouds_hcxActivationKeys_create(parent: string, hcxActivationKeyId: string | null | undefined, requestId: string | null | undefined, requestBody: HcxActivationKey): Observable<Operation> {
			return this.http.post<Operation>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/hcxActivationKeys&hcxActivationKeyId=' + (hcxActivationKeyId == null ? '' : encodeURIComponent(hcxActivationKeyId)) + '&requestId=' + (requestId == null ? '' : encodeURIComponent(requestId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists logging servers configured for a given private cloud.
		 * Get v1/{parent}/loggingServers
		 * @param {string} parent Required. The resource name of the private cloud to be queried for logging servers. Resource names are schemeless URIs that follow the conventions in https://cloud.google.com/apis/design/resource_names. For example: `projects/my-project/locations/us-central1-a/privateClouds/my-cloud`
		 * @param {string} filter A filter expression that matches resources returned in the response. The expression must specify the field name, a comparison operator, and the value that you want to use for filtering. The value must be a string, a number, or a boolean. The comparison operator must be `=`, `!=`, `>`, or `<`. For example, if you are filtering a list of logging servers, you can exclude the ones named `example-server` by specifying `name != "example-server"`. To filter on multiple expressions, provide each separate expression within parentheses. For example: ``` (name = "example-server") (createTime > "2021-04-12T08:15:10.40Z") ``` By default, each expression is an `AND` expression. However, you can include `AND` and `OR` expressions explicitly. For example: ``` (name = "example-server-1") AND (createTime > "2021-04-12T08:15:10.40Z") OR (name = "example-server-2") ```
		 * @param {string} orderBy Sorts list results by a certain order. By default, returned results are ordered by `name` in ascending order. You can also sort results in descending order based on the `name` value using `orderBy="name desc"`. Currently, only ordering by `name` is supported.
		 * @param {number} pageSize The maximum number of logging servers to return in one page. The service may return fewer than this value. The maximum value is coerced to 1000. The default value of this field is 500.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} pageToken A page token, received from a previous `ListLoggingServersRequest` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListLoggingServersRequest` must match the call that provided the page token.
		 * @return {ListLoggingServersResponse} Successful response
		 */
		Vmwareengine_projects_locations_privateClouds_loggingServers_list(parent: string, filter: string | null | undefined, orderBy: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListLoggingServersResponse> {
			return this.http.get<ListLoggingServersResponse>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/loggingServers&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&orderBy=' + (orderBy == null ? '' : encodeURIComponent(orderBy)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Create a new logging server for a given private cloud.
		 * Post v1/{parent}/loggingServers
		 * @param {string} parent Required. The resource name of the private cloud to create a new Logging Server in. Resource names are schemeless URIs that follow the conventions in https://cloud.google.com/apis/design/resource_names. For example: `projects/my-project/locations/us-central1-a/privateClouds/my-cloud`
		 * @param {string} loggingServerId Required. The user-provided identifier of the `LoggingServer` to be created. This identifier must be unique among `LoggingServer` resources within the parent and becomes the final token in the name URI. The identifier must meet the following requirements: * Only contains 1-63 alphanumeric characters and hyphens * Begins with an alphabetical character * Ends with a non-hyphen character * Not formatted as a UUID * Complies with [RFC 1034](https://datatracker.ietf.org/doc/html/rfc1034) (section 3.5)
		 * @param {string} requestId Optional. A request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server guarantees that a request doesn't result in creation of duplicate commitments for at least 60 minutes. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
		 * @return {Operation} Successful response
		 */
		Vmwareengine_projects_locations_privateClouds_loggingServers_create(parent: string, loggingServerId: string | null | undefined, requestId: string | null | undefined, requestBody: LoggingServer): Observable<Operation> {
			return this.http.post<Operation>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/loggingServers&loggingServerId=' + (loggingServerId == null ? '' : encodeURIComponent(loggingServerId)) + '&requestId=' + (requestId == null ? '' : encodeURIComponent(requestId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists Consumer VPCs bound to Management DNS Zone of a given private cloud.
		 * Get v1/{parent}/managementDnsZoneBindings
		 * @param {string} parent Required. The resource name of the private cloud to be queried for management DNS zone bindings. Resource names are schemeless URIs that follow the conventions in https://cloud.google.com/apis/design/resource_names. For example: `projects/my-project/locations/us-central1-a/privateClouds/my-cloud`
		 * @param {string} filter A filter expression that matches resources returned in the response. The expression must specify the field name, a comparison operator, and the value that you want to use for filtering. The value must be a string, a number, or a boolean. The comparison operator must be `=`, `!=`, `>`, or `<`. For example, if you are filtering a list of Management DNS Zone Bindings, you can exclude the ones named `example-management-dns-zone-binding` by specifying `name != "example-management-dns-zone-binding"`. To filter on multiple expressions, provide each separate expression within parentheses. For example: ``` (name = "example-management-dns-zone-binding") (createTime > "2021-04-12T08:15:10.40Z") ``` By default, each expression is an `AND` expression. However, you can include `AND` and `OR` expressions explicitly. For example: ``` (name = "example-management-dns-zone-binding-1") AND (createTime > "2021-04-12T08:15:10.40Z") OR (name = "example-management-dns-zone-binding-2") ```
		 * @param {string} orderBy Sorts list results by a certain order. By default, returned results are ordered by `name` in ascending order. You can also sort results in descending order based on the `name` value using `orderBy="name desc"`. Currently, only ordering by `name` is supported.
		 * @param {number} pageSize The maximum number of management DNS zone bindings to return in one page. The service may return fewer than this value. The maximum value is coerced to 1000. The default value of this field is 500.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} pageToken A page token, received from a previous `ListManagementDnsZoneBindings` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListManagementDnsZoneBindings` must match the call that provided the page token.
		 * @return {ListManagementDnsZoneBindingsResponse} Successful response
		 */
		Vmwareengine_projects_locations_privateClouds_managementDnsZoneBindings_list(parent: string, filter: string | null | undefined, orderBy: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListManagementDnsZoneBindingsResponse> {
			return this.http.get<ListManagementDnsZoneBindingsResponse>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/managementDnsZoneBindings&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&orderBy=' + (orderBy == null ? '' : encodeURIComponent(orderBy)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Creates a new `ManagementDnsZoneBinding` resource in a private cloud. This RPC creates the DNS binding and the resource that represents the DNS binding of the consumer VPC network to the management DNS zone. A management DNS zone is the Cloud DNS cross-project binding zone that VMware Engine creates for each private cloud. It contains FQDNs and corresponding IP addresses for the private cloud's ESXi hosts and management VM appliances like vCenter and NSX Manager.
		 * Post v1/{parent}/managementDnsZoneBindings
		 * @param {string} parent Required. The resource name of the private cloud to create a new management DNS zone binding for. Resource names are schemeless URIs that follow the conventions in https://cloud.google.com/apis/design/resource_names. For example: `projects/my-project/locations/us-central1-a/privateClouds/my-cloud`
		 * @param {string} managementDnsZoneBindingId Required. The user-provided identifier of the `ManagementDnsZoneBinding` resource to be created. This identifier must be unique among `ManagementDnsZoneBinding` resources within the parent and becomes the final token in the name URI. The identifier must meet the following requirements: * Only contains 1-63 alphanumeric characters and hyphens * Begins with an alphabetical character * Ends with a non-hyphen character * Not formatted as a UUID * Complies with [RFC 1034](https://datatracker.ietf.org/doc/html/rfc1034) (section 3.5)
		 * @param {string} requestId Optional. A request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server guarantees that a request doesn't result in creation of duplicate commitments for at least 60 minutes. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if the original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
		 * @return {Operation} Successful response
		 */
		Vmwareengine_projects_locations_privateClouds_managementDnsZoneBindings_create(parent: string, managementDnsZoneBindingId: string | null | undefined, requestId: string | null | undefined, requestBody: ManagementDnsZoneBinding): Observable<Operation> {
			return this.http.post<Operation>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/managementDnsZoneBindings&managementDnsZoneBindingId=' + (managementDnsZoneBindingId == null ? '' : encodeURIComponent(managementDnsZoneBindingId)) + '&requestId=' + (requestId == null ? '' : encodeURIComponent(requestId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists `NetworkPeering` resources in a given project.
		 * Get v1/{parent}/networkPeerings
		 * @param {string} parent Required. The resource name of the location (global) to query for network peerings. Resource names are schemeless URIs that follow the conventions in https://cloud.google.com/apis/design/resource_names. For example: `projects/my-project/locations/global`
		 * @param {string} filter A filter expression that matches resources returned in the response. The expression must specify the field name, a comparison operator, and the value that you want to use for filtering. The value must be a string, a number, or a boolean. The comparison operator must be `=`, `!=`, `>`, or `<`. For example, if you are filtering a list of network peerings, you can exclude the ones named `example-peering` by specifying `name != "example-peering"`. To filter on multiple expressions, provide each separate expression within parentheses. For example: ``` (name = "example-peering") (createTime > "2021-04-12T08:15:10.40Z") ``` By default, each expression is an `AND` expression. However, you can include `AND` and `OR` expressions explicitly. For example: ``` (name = "example-peering-1") AND (createTime > "2021-04-12T08:15:10.40Z") OR (name = "example-peering-2") ```
		 * @param {string} orderBy Sorts list results by a certain order. By default, returned results are ordered by `name` in ascending order. You can also sort results in descending order based on the `name` value using `orderBy="name desc"`. Currently, only ordering by `name` is supported.
		 * @param {number} pageSize The maximum number of network peerings to return in one page. The maximum value is coerced to 1000. The default value of this field is 500.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} pageToken A page token, received from a previous `ListNetworkPeerings` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListNetworkPeerings` must match the call that provided the page token.
		 * @return {ListNetworkPeeringsResponse} Successful response
		 */
		Vmwareengine_projects_locations_global_networkPeerings_list(parent: string, filter: string | null | undefined, orderBy: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListNetworkPeeringsResponse> {
			return this.http.get<ListNetworkPeeringsResponse>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/networkPeerings&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&orderBy=' + (orderBy == null ? '' : encodeURIComponent(orderBy)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Creates a new network peering between the peer network and VMware Engine network provided in a `NetworkPeering` resource.
		 * Post v1/{parent}/networkPeerings
		 * @param {string} parent Required. The resource name of the location to create the new network peering in. This value is always `global`, because `NetworkPeering` is a global resource. Resource names are schemeless URIs that follow the conventions in https://cloud.google.com/apis/design/resource_names. For example: `projects/my-project/locations/global`
		 * @param {string} networkPeeringId Required. The user-provided identifier of the new `NetworkPeering`. This identifier must be unique among `NetworkPeering` resources within the parent and becomes the final token in the name URI. The identifier must meet the following requirements: * Only contains 1-63 alphanumeric characters and hyphens * Begins with an alphabetical character * Ends with a non-hyphen character * Not formatted as a UUID * Complies with [RFC 1034](https://datatracker.ietf.org/doc/html/rfc1034) (section 3.5)
		 * @param {string} requestId Optional. A request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server guarantees that a request doesn't result in creation of duplicate commitments for at least 60 minutes. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
		 * @return {Operation} Successful response
		 */
		Vmwareengine_projects_locations_global_networkPeerings_create(parent: string, networkPeeringId: string | null | undefined, requestId: string | null | undefined, requestBody: NetworkPeering): Observable<Operation> {
			return this.http.post<Operation>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/networkPeerings&networkPeeringId=' + (networkPeeringId == null ? '' : encodeURIComponent(networkPeeringId)) + '&requestId=' + (requestId == null ? '' : encodeURIComponent(requestId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists `NetworkPolicy` resources in a specified project and location.
		 * Get v1/{parent}/networkPolicies
		 * @param {string} parent Required. The resource name of the location (region) to query for network policies. Resource names are schemeless URIs that follow the conventions in https://cloud.google.com/apis/design/resource_names. For example: `projects/my-project/locations/us-central1`
		 * @param {string} filter A filter expression that matches resources returned in the response. The expression must specify the field name, a comparison operator, and the value that you want to use for filtering. The value must be a string, a number, or a boolean. The comparison operator must be `=`, `!=`, `>`, or `<`. For example, if you are filtering a list of network policies, you can exclude the ones named `example-policy` by specifying `name != "example-policy"`. To filter on multiple expressions, provide each separate expression within parentheses. For example: ``` (name = "example-policy") (createTime > "2021-04-12T08:15:10.40Z") ``` By default, each expression is an `AND` expression. However, you can include `AND` and `OR` expressions explicitly. For example: ``` (name = "example-policy-1") AND (createTime > "2021-04-12T08:15:10.40Z") OR (name = "example-policy-2") ```
		 * @param {string} orderBy Sorts list results by a certain order. By default, returned results are ordered by `name` in ascending order. You can also sort results in descending order based on the `name` value using `orderBy="name desc"`. Currently, only ordering by `name` is supported.
		 * @param {number} pageSize The maximum number of network policies to return in one page. The service may return fewer than this value. The maximum value is coerced to 1000. The default value of this field is 500.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} pageToken A page token, received from a previous `ListNetworkPolicies` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListNetworkPolicies` must match the call that provided the page token.
		 * @return {ListNetworkPoliciesResponse} Successful response
		 */
		Vmwareengine_projects_locations_networkPolicies_list(parent: string, filter: string | null | undefined, orderBy: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListNetworkPoliciesResponse> {
			return this.http.get<ListNetworkPoliciesResponse>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/networkPolicies&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&orderBy=' + (orderBy == null ? '' : encodeURIComponent(orderBy)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Creates a new network policy in a given VMware Engine network of a project and location (region). A new network policy cannot be created if another network policy already exists in the same scope.
		 * Post v1/{parent}/networkPolicies
		 * @param {string} parent Required. The resource name of the location (region) to create the new network policy in. Resource names are schemeless URIs that follow the conventions in https://cloud.google.com/apis/design/resource_names. For example: `projects/my-project/locations/us-central1`
		 * @param {string} networkPolicyId Required. The user-provided identifier of the network policy to be created. This identifier must be unique within parent `projects/{my-project}/locations/{us-central1}/networkPolicies` and becomes the final token in the name URI. The identifier must meet the following requirements: * Only contains 1-63 alphanumeric characters and hyphens * Begins with an alphabetical character * Ends with a non-hyphen character * Not formatted as a UUID * Complies with [RFC 1034](https://datatracker.ietf.org/doc/html/rfc1034) (section 3.5)
		 * @param {string} requestId Optional. A request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server guarantees that a request doesn't result in creation of duplicate commitments for at least 60 minutes. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
		 * @return {Operation} Successful response
		 */
		Vmwareengine_projects_locations_networkPolicies_create(parent: string, networkPolicyId: string | null | undefined, requestId: string | null | undefined, requestBody: NetworkPolicy): Observable<Operation> {
			return this.http.post<Operation>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/networkPolicies&networkPolicyId=' + (networkPolicyId == null ? '' : encodeURIComponent(networkPolicyId)) + '&requestId=' + (requestId == null ? '' : encodeURIComponent(requestId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists node types
		 * Get v1/{parent}/nodeTypes
		 * @param {string} parent Required. The resource name of the location to be queried for node types. Resource names are schemeless URIs that follow the conventions in https://cloud.google.com/apis/design/resource_names. For example: `projects/my-project/locations/us-central1-a`
		 * @param {string} filter A filter expression that matches resources returned in the response. The expression must specify the field name, a comparison operator, and the value that you want to use for filtering. The value must be a string, a number, or a boolean. The comparison operator must be `=`, `!=`, `>`, or `<`. For example, if you are filtering a list of node types, you can exclude the ones named `standard-72` by specifying `name != "standard-72"`. To filter on multiple expressions, provide each separate expression within parentheses. For example: ``` (name = "standard-72") (virtual_cpu_count > 2) ``` By default, each expression is an `AND` expression. However, you can include `AND` and `OR` expressions explicitly. For example: ``` (name = "standard-96") AND (virtual_cpu_count > 2) OR (name = "standard-72") ```
		 * @param {number} pageSize The maximum number of node types to return in one page. The service may return fewer than this value. The maximum value is coerced to 1000. The default value of this field is 500.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} pageToken A page token, received from a previous `ListNodeTypes` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListNodeTypes` must match the call that provided the page token.
		 * @return {ListNodeTypesResponse} Successful response
		 */
		Vmwareengine_projects_locations_nodeTypes_list(parent: string, filter: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListNodeTypesResponse> {
			return this.http.get<ListNodeTypesResponse>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/nodeTypes&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Lists nodes in a given cluster.
		 * Get v1/{parent}/nodes
		 * @param {string} parent Required. The resource name of the cluster to be queried for nodes. Resource names are schemeless URIs that follow the conventions in https://cloud.google.com/apis/design/resource_names. For example: `projects/my-project/locations/us-central1-a/privateClouds/my-cloud/clusters/my-cluster`
		 * @param {number} pageSize The maximum number of nodes to return in one page. The service may return fewer than this value. The maximum value is coerced to 1000. The default value of this field is 500.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} pageToken A page token, received from a previous `ListNodes` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListNodes` must match the call that provided the page token.
		 * @return {ListNodesResponse} Successful response
		 */
		Vmwareengine_projects_locations_privateClouds_clusters_nodes_list(parent: string, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListNodesResponse> {
			return this.http.get<ListNodesResponse>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/nodes&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Lists the private connection routes exchanged over a peering connection.
		 * Get v1/{parent}/peeringRoutes
		 * @param {string} parent Required. The resource name of the private connection to retrieve peering routes from. Resource names are schemeless URIs that follow the conventions in https://cloud.google.com/apis/design/resource_names. For example: `projects/my-project/locations/us-west1/privateConnections/my-connection`
		 * @param {number} pageSize The maximum number of peering routes to return in one page. The service may return fewer than this value. The maximum value is coerced to 1000. The default value of this field is 500.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} pageToken A page token, received from a previous `ListPrivateConnectionPeeringRoutes` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListPrivateConnectionPeeringRoutes` must match the call that provided the page token.
		 * @return {ListPrivateConnectionPeeringRoutesResponse} Successful response
		 */
		Vmwareengine_projects_locations_privateConnections_peeringRoutes_list(parent: string, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListPrivateConnectionPeeringRoutesResponse> {
			return this.http.get<ListPrivateConnectionPeeringRoutesResponse>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/peeringRoutes&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Lists `PrivateCloud` resources in a given project and location.
		 * Get v1/{parent}/privateClouds
		 * @param {string} parent Required. The resource name of the private cloud to be queried for clusters. Resource names are schemeless URIs that follow the conventions in https://cloud.google.com/apis/design/resource_names. For example: `projects/my-project/locations/us-central1-a`
		 * @param {string} filter A filter expression that matches resources returned in the response. The expression must specify the field name, a comparison operator, and the value that you want to use for filtering. The value must be a string, a number, or a boolean. The comparison operator must be `=`, `!=`, `>`, or `<`. For example, if you are filtering a list of private clouds, you can exclude the ones named `example-pc` by specifying `name != "example-pc"`. You can also filter nested fields. For example, you could specify `networkConfig.managementCidr = "192.168.0.0/24"` to include private clouds only if they have a matching address in their network configuration. To filter on multiple expressions, provide each separate expression within parentheses. For example: ``` (name = "example-pc") (createTime > "2021-04-12T08:15:10.40Z") ``` By default, each expression is an `AND` expression. However, you can include `AND` and `OR` expressions explicitly. For example: ``` (name = "private-cloud-1") AND (createTime > "2021-04-12T08:15:10.40Z") OR (name = "private-cloud-2") ```
		 * @param {string} orderBy Sorts list results by a certain order. By default, returned results are ordered by `name` in ascending order. You can also sort results in descending order based on the `name` value using `orderBy="name desc"`. Currently, only ordering by `name` is supported.
		 * @param {number} pageSize The maximum number of private clouds to return in one page. The service may return fewer than this value. The maximum value is coerced to 1000. The default value of this field is 500.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} pageToken A page token, received from a previous `ListPrivateClouds` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListPrivateClouds` must match the call that provided the page token.
		 * @return {ListPrivateCloudsResponse} Successful response
		 */
		Vmwareengine_projects_locations_privateClouds_list(parent: string, filter: string | null | undefined, orderBy: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListPrivateCloudsResponse> {
			return this.http.get<ListPrivateCloudsResponse>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/privateClouds&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&orderBy=' + (orderBy == null ? '' : encodeURIComponent(orderBy)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Creates a new `PrivateCloud` resource in a given project and location. Private clouds of type `STANDARD` and `TIME_LIMITED` are zonal resources, `STRETCHED` private clouds are regional. Creating a private cloud also creates a [management cluster](https://cloud.google.com/vmware-engine/docs/concepts-vmware-components) for that private cloud.
		 * Post v1/{parent}/privateClouds
		 * @param {string} parent Required. The resource name of the location to create the new private cloud in. Resource names are schemeless URIs that follow the conventions in https://cloud.google.com/apis/design/resource_names. For example: `projects/my-project/locations/us-central1-a`
		 * @param {string} privateCloudId Required. The user-provided identifier of the private cloud to be created. This identifier must be unique among each `PrivateCloud` within the parent and becomes the final token in the name URI. The identifier must meet the following requirements: * Only contains 1-63 alphanumeric characters and hyphens * Begins with an alphabetical character * Ends with a non-hyphen character * Not formatted as a UUID * Complies with [RFC 1034](https://datatracker.ietf.org/doc/html/rfc1034) (section 3.5)
		 * @param {string} requestId Optional. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
		 * @param {boolean} validateOnly Optional. True if you want the request to be validated and not executed; false otherwise.
		 * @return {Operation} Successful response
		 */
		Vmwareengine_projects_locations_privateClouds_create(parent: string, privateCloudId: string | null | undefined, requestId: string | null | undefined, validateOnly: boolean | null | undefined, requestBody: PrivateCloud): Observable<Operation> {
			return this.http.post<Operation>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/privateClouds&privateCloudId=' + (privateCloudId == null ? '' : encodeURIComponent(privateCloudId)) + '&requestId=' + (requestId == null ? '' : encodeURIComponent(requestId)) + '&validateOnly=' + validateOnly, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists `PrivateConnection` resources in a given project and location.
		 * Get v1/{parent}/privateConnections
		 * @param {string} parent Required. The resource name of the location to query for private connections. Resource names are schemeless URIs that follow the conventions in https://cloud.google.com/apis/design/resource_names. For example: `projects/my-project/locations/us-central1`
		 * @param {string} filter A filter expression that matches resources returned in the response. The expression must specify the field name, a comparison operator, and the value that you want to use for filtering. The value must be a string, a number, or a boolean. The comparison operator must be `=`, `!=`, `>`, or `<`. For example, if you are filtering a list of private connections, you can exclude the ones named `example-connection` by specifying `name != "example-connection"`. To filter on multiple expressions, provide each separate expression within parentheses. For example: ``` (name = "example-connection") (createTime > "2022-09-22T08:15:10.40Z") ``` By default, each expression is an `AND` expression. However, you can include `AND` and `OR` expressions explicitly. For example: ``` (name = "example-connection-1") AND (createTime > "2021-04-12T08:15:10.40Z") OR (name = "example-connection-2") ```
		 * @param {string} orderBy Sorts list results by a certain order. By default, returned results are ordered by `name` in ascending order. You can also sort results in descending order based on the `name` value using `orderBy="name desc"`. Currently, only ordering by `name` is supported.
		 * @param {number} pageSize The maximum number of private connections to return in one page. The maximum value is coerced to 1000. The default value of this field is 500.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} pageToken A page token, received from a previous `ListPrivateConnections` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListPrivateConnections` must match the call that provided the page token.
		 * @return {ListPrivateConnectionsResponse} Successful response
		 */
		Vmwareengine_projects_locations_privateConnections_list(parent: string, filter: string | null | undefined, orderBy: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListPrivateConnectionsResponse> {
			return this.http.get<ListPrivateConnectionsResponse>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/privateConnections&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&orderBy=' + (orderBy == null ? '' : encodeURIComponent(orderBy)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Creates a new private connection that can be used for accessing private Clouds.
		 * Post v1/{parent}/privateConnections
		 * @param {string} parent Required. The resource name of the location to create the new private connection in. Private connection is a regional resource. Resource names are schemeless URIs that follow the conventions in https://cloud.google.com/apis/design/resource_names. For example: `projects/my-project/locations/us-central1`
		 * @param {string} privateConnectionId Required. The user-provided identifier of the new private connection. This identifier must be unique among private connection resources within the parent and becomes the final token in the name URI. The identifier must meet the following requirements: * Only contains 1-63 alphanumeric characters and hyphens * Begins with an alphabetical character * Ends with a non-hyphen character * Not formatted as a UUID * Complies with [RFC 1034](https://datatracker.ietf.org/doc/html/rfc1034) (section 3.5)
		 * @param {string} requestId Optional. A request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server guarantees that a request doesn't result in creation of duplicate commitments for at least 60 minutes. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
		 * @return {Operation} Successful response
		 */
		Vmwareengine_projects_locations_privateConnections_create(parent: string, privateConnectionId: string | null | undefined, requestId: string | null | undefined, requestBody: PrivateConnection): Observable<Operation> {
			return this.http.post<Operation>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/privateConnections&privateConnectionId=' + (privateConnectionId == null ? '' : encodeURIComponent(privateConnectionId)) + '&requestId=' + (requestId == null ? '' : encodeURIComponent(requestId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists subnets in a given private cloud.
		 * Get v1/{parent}/subnets
		 * @param {string} parent Required. The resource name of the private cloud to be queried for subnets. Resource names are schemeless URIs that follow the conventions in https://cloud.google.com/apis/design/resource_names. For example: `projects/my-project/locations/us-central1-a/privateClouds/my-cloud`
		 * @param {number} pageSize The maximum number of subnets to return in one page. The service may return fewer than this value. The maximum value is coerced to 1000. The default value of this field is 500.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} pageToken A page token, received from a previous `ListSubnetsRequest` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListSubnetsRequest` must match the call that provided the page token.
		 * @return {ListSubnetsResponse} Successful response
		 */
		Vmwareengine_projects_locations_privateClouds_subnets_list(parent: string, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListSubnetsResponse> {
			return this.http.get<ListSubnetsResponse>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/subnets&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Lists `VmwareEngineNetwork` resources in a given project and location.
		 * Get v1/{parent}/vmwareEngineNetworks
		 * @param {string} parent Required. The resource name of the location to query for VMware Engine networks. Resource names are schemeless URIs that follow the conventions in https://cloud.google.com/apis/design/resource_names. For example: `projects/my-project/locations/global`
		 * @param {string} filter A filter expression that matches resources returned in the response. The expression must specify the field name, a comparison operator, and the value that you want to use for filtering. The value must be a string, a number, or a boolean. The comparison operator must be `=`, `!=`, `>`, or `<`. For example, if you are filtering a list of network peerings, you can exclude the ones named `example-network` by specifying `name != "example-network"`. To filter on multiple expressions, provide each separate expression within parentheses. For example: ``` (name = "example-network") (createTime > "2021-04-12T08:15:10.40Z") ``` By default, each expression is an `AND` expression. However, you can include `AND` and `OR` expressions explicitly. For example: ``` (name = "example-network-1") AND (createTime > "2021-04-12T08:15:10.40Z") OR (name = "example-network-2") ```
		 * @param {string} orderBy Sorts list results by a certain order. By default, returned results are ordered by `name` in ascending order. You can also sort results in descending order based on the `name` value using `orderBy="name desc"`. Currently, only ordering by `name` is supported.
		 * @param {number} pageSize The maximum number of results to return in one page. The maximum value is coerced to 1000. The default value of this field is 500.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} pageToken A page token, received from a previous `ListVmwareEngineNetworks` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListVmwareEngineNetworks` must match the call that provided the page token.
		 * @return {ListVmwareEngineNetworksResponse} Successful response
		 */
		Vmwareengine_projects_locations_vmwareEngineNetworks_list(parent: string, filter: string | null | undefined, orderBy: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListVmwareEngineNetworksResponse> {
			return this.http.get<ListVmwareEngineNetworksResponse>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/vmwareEngineNetworks&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&orderBy=' + (orderBy == null ? '' : encodeURIComponent(orderBy)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Creates a new VMware Engine network that can be used by a private cloud.
		 * Post v1/{parent}/vmwareEngineNetworks
		 * @param {string} parent Required. The resource name of the location to create the new VMware Engine network in. A VMware Engine network of type `LEGACY` is a regional resource, and a VMware Engine network of type `STANDARD` is a global resource. Resource names are schemeless URIs that follow the conventions in https://cloud.google.com/apis/design/resource_names. For example: `projects/my-project/locations/global`
		 * @param {string} requestId Optional. A request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server guarantees that a request doesn't result in creation of duplicate commitments for at least 60 minutes. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
		 * @param {string} vmwareEngineNetworkId Required. The user-provided identifier of the new VMware Engine network. This identifier must be unique among VMware Engine network resources within the parent and becomes the final token in the name URI. The identifier must meet the following requirements: * For networks of type LEGACY, adheres to the format: `{region-id}-default`. Replace `{region-id}` with the region where you want to create the VMware Engine network. For example, "us-central1-default". * Only contains 1-63 alphanumeric characters and hyphens * Begins with an alphabetical character * Ends with a non-hyphen character * Not formatted as a UUID * Complies with [RFC 1034](https://datatracker.ietf.org/doc/html/rfc1034) (section 3.5)
		 * @return {Operation} Successful response
		 */
		Vmwareengine_projects_locations_vmwareEngineNetworks_create(parent: string, requestId: string | null | undefined, vmwareEngineNetworkId: string | null | undefined, requestBody: VmwareEngineNetwork): Observable<Operation> {
			return this.http.post<Operation>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/vmwareEngineNetworks&requestId=' + (requestId == null ? '' : encodeURIComponent(requestId)) + '&vmwareEngineNetworkId=' + (vmwareEngineNetworkId == null ? '' : encodeURIComponent(vmwareEngineNetworkId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Resets credentials of the NSX appliance.
		 * Post v1/{privateCloud}:resetNsxCredentials
		 * @param {string} privateCloud Required. The resource name of the private cloud to reset credentials for. Resource names are schemeless URIs that follow the conventions in https://cloud.google.com/apis/design/resource_names. For example: `projects/my-project/locations/us-central1-a/privateClouds/my-cloud`
		 * @return {Operation} Successful response
		 */
		Vmwareengine_projects_locations_privateClouds_resetNsxCredentials(privateCloud: string, requestBody: ResetNsxCredentialsRequest): Observable<Operation> {
			return this.http.post<Operation>(this.baseUri + 'v1/' + (privateCloud == null ? '' : encodeURIComponent(privateCloud)) + ':resetNsxCredentials', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Resets credentials of the Vcenter appliance.
		 * Post v1/{privateCloud}:resetVcenterCredentials
		 * @param {string} privateCloud Required. The resource name of the private cloud to reset credentials for. Resource names are schemeless URIs that follow the conventions in https://cloud.google.com/apis/design/resource_names. For example: `projects/my-project/locations/us-central1-a/privateClouds/my-cloud`
		 * @return {Operation} Successful response
		 */
		Vmwareengine_projects_locations_privateClouds_resetVcenterCredentials(privateCloud: string, requestBody: ResetVcenterCredentialsRequest): Observable<Operation> {
			return this.http.post<Operation>(this.baseUri + 'v1/' + (privateCloud == null ? '' : encodeURIComponent(privateCloud)) + ':resetVcenterCredentials', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets details of credentials for NSX appliance.
		 * Get v1/{privateCloud}:showNsxCredentials
		 * @param {string} privateCloud Required. The resource name of the private cloud to be queried for credentials. Resource names are schemeless URIs that follow the conventions in https://cloud.google.com/apis/design/resource_names. For example: `projects/my-project/locations/us-central1-a/privateClouds/my-cloud`
		 * @return {Credentials} Successful response
		 */
		Vmwareengine_projects_locations_privateClouds_showNsxCredentials(privateCloud: string): Observable<Credentials> {
			return this.http.get<Credentials>(this.baseUri + 'v1/' + (privateCloud == null ? '' : encodeURIComponent(privateCloud)) + ':showNsxCredentials', {});
		}

		/**
		 * Gets details of credentials for Vcenter appliance.
		 * Get v1/{privateCloud}:showVcenterCredentials
		 * @param {string} privateCloud Required. The resource name of the private cloud to be queried for credentials. Resource names are schemeless URIs that follow the conventions in https://cloud.google.com/apis/design/resource_names. For example: `projects/my-project/locations/us-central1-a/privateClouds/my-cloud`
		 * @param {string} username Optional. The username of the user to be queried for credentials. The default value of this field is CloudOwner@gve.local. The provided value must be one of the following: CloudOwner@gve.local, solution-user-01@gve.local, solution-user-02@gve.local, solution-user-03@gve.local, solution-user-04@gve.local, solution-user-05@gve.local, zertoadmin@gve.local.
		 * @return {Credentials} Successful response
		 */
		Vmwareengine_projects_locations_privateClouds_showVcenterCredentials(privateCloud: string, username: string | null | undefined): Observable<Credentials> {
			return this.http.get<Credentials>(this.baseUri + 'v1/' + (privateCloud == null ? '' : encodeURIComponent(privateCloud)) + ':showVcenterCredentials&username=' + (username == null ? '' : encodeURIComponent(username)), {});
		}

		/**
		 * Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
		 * Get v1/{resource}:getIamPolicy
		 * @param {string} resource REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
		 * @param {number} options_requestedPolicyVersion Optional. The maximum policy version that will be used to format the policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset. The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies).
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {Policy} Successful response
		 */
		Vmwareengine_projects_locations_privateClouds_hcxActivationKeys_getIamPolicy(resource: string, options_requestedPolicyVersion: number | null | undefined): Observable<Policy> {
			return this.http.get<Policy>(this.baseUri + 'v1/' + (resource == null ? '' : encodeURIComponent(resource)) + ':getIamPolicy&options_requestedPolicyVersion=' + options_requestedPolicyVersion, {});
		}

		/**
		 * Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
		 * Post v1/{resource}:setIamPolicy
		 * @param {string} resource REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
		 * @return {Policy} Successful response
		 */
		Vmwareengine_projects_locations_privateClouds_hcxActivationKeys_setIamPolicy(resource: string, requestBody: SetIamPolicyRequest): Observable<Policy> {
			return this.http.post<Policy>(this.baseUri + 'v1/' + (resource == null ? '' : encodeURIComponent(resource)) + ':setIamPolicy', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
		 * Post v1/{resource}:testIamPermissions
		 * @param {string} resource REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
		 * @return {TestIamPermissionsResponse} Successful response
		 */
		Vmwareengine_projects_locations_privateClouds_hcxActivationKeys_testIamPermissions(resource: string, requestBody: TestIamPermissionsRequest): Observable<TestIamPermissionsResponse> {
			return this.http.post<TestIamPermissionsResponse>(this.baseUri + 'v1/' + (resource == null ? '' : encodeURIComponent(resource)) + ':testIamPermissions', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

}

