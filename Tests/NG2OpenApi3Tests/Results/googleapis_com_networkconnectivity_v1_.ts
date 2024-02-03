import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** The request for HubService.AcceptHubSpoke. */
	export interface AcceptHubSpokeRequest {

		/** Optional. A request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server knows to ignore the request if it has already been completed. The server guarantees that a request doesn't result in creation of duplicate commitments for at least 60 minutes. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check to see whether the original operation was received. If it was, the server ignores the second request. This behavior prevents clients from mistakenly creating duplicate commitments. The request ID must be a valid UUID, with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
		requestId?: string | null;

		/** Required. The URI of the spoke to accept into the hub. */
		spokeUri?: string | null;
	}

	/** The request for HubService.AcceptHubSpoke. */
	export interface AcceptHubSpokeRequestFormProperties {

		/** Optional. A request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server knows to ignore the request if it has already been completed. The server guarantees that a request doesn't result in creation of duplicate commitments for at least 60 minutes. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check to see whether the original operation was received. If it was, the server ignores the second request. This behavior prevents clients from mistakenly creating duplicate commitments. The request ID must be a valid UUID, with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
		requestId: FormControl<string | null | undefined>,

		/** Required. The URI of the spoke to accept into the hub. */
		spokeUri: FormControl<string | null | undefined>,
	}
	export function CreateAcceptHubSpokeRequestFormGroup() {
		return new FormGroup<AcceptHubSpokeRequestFormProperties>({
			requestId: new FormControl<string | null | undefined>(undefined),
			spokeUri: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The response for HubService.AcceptHubSpoke. */
	export interface AcceptHubSpokeResponse {

		/** A Network Connectivity Center spoke represents one or more network connectivity resources. When you create a spoke, you associate it with a hub. You must also identify a value for exactly one of the following fields: * linked_vpn_tunnels * linked_interconnect_attachments * linked_router_appliance_instances * linked_vpc_network */
		spoke?: Spoke;
	}

	/** The response for HubService.AcceptHubSpoke. */
	export interface AcceptHubSpokeResponseFormProperties {
	}
	export function CreateAcceptHubSpokeResponseFormGroup() {
		return new FormGroup<AcceptHubSpokeResponseFormProperties>({
		});

	}


	/** A Network Connectivity Center spoke represents one or more network connectivity resources. When you create a spoke, you associate it with a hub. You must also identify a value for exactly one of the following fields: * linked_vpn_tunnels * linked_interconnect_attachments * linked_router_appliance_instances * linked_vpc_network */
	export interface Spoke {

		/** Output only. The time the spoke was created. */
		createTime?: string | null;

		/** An optional description of the spoke. */
		description?: string | null;

		/** Optional. The name of the group that this spoke is associated with. */
		group?: string | null;

		/** Immutable. The name of the hub that this spoke is attached to. */
		hub?: string | null;

		/** Optional labels in key-value pair format. For more information about labels, see [Requirements for labels](https://cloud.google.com/resource-manager/docs/creating-managing-labels#requirements). */
		labels?: {[id: string]: string };

		/** A collection of VLAN attachment resources. These resources should be redundant attachments that all advertise the same prefixes to Google Cloud. Alternatively, in active/passive configurations, all attachments should be capable of advertising the same prefixes. */
		linkedInterconnectAttachments?: LinkedInterconnectAttachments;

		/** A collection of router appliance instances. If you configure multiple router appliance instances to receive data from the same set of sites outside of Google Cloud, we recommend that you associate those instances with the same spoke. */
		linkedRouterApplianceInstances?: LinkedRouterApplianceInstances;

		/** An existing VPC network. */
		linkedVpcNetwork?: LinkedVpcNetwork;

		/** A collection of Cloud VPN tunnel resources. These resources should be redundant HA VPN tunnels that all advertise the same prefixes to Google Cloud. Alternatively, in a passive/active configuration, all tunnels should be capable of advertising the same prefixes. */
		linkedVpnTunnels?: LinkedVpnTunnels;

		/** Immutable. The name of the spoke. Spoke names must be unique. They use the following form: `projects/{project_number}/locations/{region}/spokes/{spoke_id}` */
		name?: string | null;

		/** Output only. The reasons for current state of the spoke. Only present when the spoke is in the `INACTIVE` state. */
		reasons?: Array<StateReason>;

		/** Output only. The type of resource associated with the spoke. */
		spokeType?: SpokeSpokeType | null;

		/** Output only. The current lifecycle state of this spoke. */
		state?: SpokeState | null;

		/** Output only. The Google-generated UUID for the spoke. This value is unique across all spoke resources. If a spoke is deleted and another with the same name is created, the new spoke is assigned a different `unique_id`. */
		uniqueId?: string | null;

		/** Output only. The time the spoke was last updated. */
		updateTime?: string | null;
	}

	/** A Network Connectivity Center spoke represents one or more network connectivity resources. When you create a spoke, you associate it with a hub. You must also identify a value for exactly one of the following fields: * linked_vpn_tunnels * linked_interconnect_attachments * linked_router_appliance_instances * linked_vpc_network */
	export interface SpokeFormProperties {

		/** Output only. The time the spoke was created. */
		createTime: FormControl<string | null | undefined>,

		/** An optional description of the spoke. */
		description: FormControl<string | null | undefined>,

		/** Optional. The name of the group that this spoke is associated with. */
		group: FormControl<string | null | undefined>,

		/** Immutable. The name of the hub that this spoke is attached to. */
		hub: FormControl<string | null | undefined>,

		/** Optional labels in key-value pair format. For more information about labels, see [Requirements for labels](https://cloud.google.com/resource-manager/docs/creating-managing-labels#requirements). */
		labels: FormControl<{[id: string]: string } | null | undefined>,

		/** Immutable. The name of the spoke. Spoke names must be unique. They use the following form: `projects/{project_number}/locations/{region}/spokes/{spoke_id}` */
		name: FormControl<string | null | undefined>,

		/** Output only. The type of resource associated with the spoke. */
		spokeType: FormControl<SpokeSpokeType | null | undefined>,

		/** Output only. The current lifecycle state of this spoke. */
		state: FormControl<SpokeState | null | undefined>,

		/** Output only. The Google-generated UUID for the spoke. This value is unique across all spoke resources. If a spoke is deleted and another with the same name is created, the new spoke is assigned a different `unique_id`. */
		uniqueId: FormControl<string | null | undefined>,

		/** Output only. The time the spoke was last updated. */
		updateTime: FormControl<string | null | undefined>,
	}
	export function CreateSpokeFormGroup() {
		return new FormGroup<SpokeFormProperties>({
			createTime: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			group: new FormControl<string | null | undefined>(undefined),
			hub: new FormControl<string | null | undefined>(undefined),
			labels: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			spokeType: new FormControl<SpokeSpokeType | null | undefined>(undefined),
			state: new FormControl<SpokeState | null | undefined>(undefined),
			uniqueId: new FormControl<string | null | undefined>(undefined),
			updateTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A collection of VLAN attachment resources. These resources should be redundant attachments that all advertise the same prefixes to Google Cloud. Alternatively, in active/passive configurations, all attachments should be capable of advertising the same prefixes. */
	export interface LinkedInterconnectAttachments {

		/** A value that controls whether site-to-site data transfer is enabled for these resources. Data transfer is available only in [supported locations](https://cloud.google.com/network-connectivity/docs/network-connectivity-center/concepts/locations). */
		siteToSiteDataTransfer?: boolean | null;

		/** The URIs of linked interconnect attachment resources */
		uris?: Array<string>;

		/** Output only. The VPC network where these VLAN attachments are located. */
		vpcNetwork?: string | null;
	}

	/** A collection of VLAN attachment resources. These resources should be redundant attachments that all advertise the same prefixes to Google Cloud. Alternatively, in active/passive configurations, all attachments should be capable of advertising the same prefixes. */
	export interface LinkedInterconnectAttachmentsFormProperties {

		/** A value that controls whether site-to-site data transfer is enabled for these resources. Data transfer is available only in [supported locations](https://cloud.google.com/network-connectivity/docs/network-connectivity-center/concepts/locations). */
		siteToSiteDataTransfer: FormControl<boolean | null | undefined>,

		/** Output only. The VPC network where these VLAN attachments are located. */
		vpcNetwork: FormControl<string | null | undefined>,
	}
	export function CreateLinkedInterconnectAttachmentsFormGroup() {
		return new FormGroup<LinkedInterconnectAttachmentsFormProperties>({
			siteToSiteDataTransfer: new FormControl<boolean | null | undefined>(undefined),
			vpcNetwork: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A collection of router appliance instances. If you configure multiple router appliance instances to receive data from the same set of sites outside of Google Cloud, we recommend that you associate those instances with the same spoke. */
	export interface LinkedRouterApplianceInstances {

		/** The list of router appliance instances. */
		instances?: Array<RouterApplianceInstance>;

		/** A value that controls whether site-to-site data transfer is enabled for these resources. Data transfer is available only in [supported locations](https://cloud.google.com/network-connectivity/docs/network-connectivity-center/concepts/locations). */
		siteToSiteDataTransfer?: boolean | null;

		/** Output only. The VPC network where these router appliance instances are located. */
		vpcNetwork?: string | null;
	}

	/** A collection of router appliance instances. If you configure multiple router appliance instances to receive data from the same set of sites outside of Google Cloud, we recommend that you associate those instances with the same spoke. */
	export interface LinkedRouterApplianceInstancesFormProperties {

		/** A value that controls whether site-to-site data transfer is enabled for these resources. Data transfer is available only in [supported locations](https://cloud.google.com/network-connectivity/docs/network-connectivity-center/concepts/locations). */
		siteToSiteDataTransfer: FormControl<boolean | null | undefined>,

		/** Output only. The VPC network where these router appliance instances are located. */
		vpcNetwork: FormControl<string | null | undefined>,
	}
	export function CreateLinkedRouterApplianceInstancesFormGroup() {
		return new FormGroup<LinkedRouterApplianceInstancesFormProperties>({
			siteToSiteDataTransfer: new FormControl<boolean | null | undefined>(undefined),
			vpcNetwork: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A router appliance instance is a Compute Engine virtual machine (VM) instance that acts as a BGP speaker. A router appliance instance is specified by the URI of the VM and the internal IP address of one of the VM's network interfaces. */
	export interface RouterApplianceInstance {

		/** The IP address on the VM to use for peering. */
		ipAddress?: string | null;

		/** The URI of the VM. */
		virtualMachine?: string | null;
	}

	/** A router appliance instance is a Compute Engine virtual machine (VM) instance that acts as a BGP speaker. A router appliance instance is specified by the URI of the VM and the internal IP address of one of the VM's network interfaces. */
	export interface RouterApplianceInstanceFormProperties {

		/** The IP address on the VM to use for peering. */
		ipAddress: FormControl<string | null | undefined>,

		/** The URI of the VM. */
		virtualMachine: FormControl<string | null | undefined>,
	}
	export function CreateRouterApplianceInstanceFormGroup() {
		return new FormGroup<RouterApplianceInstanceFormProperties>({
			ipAddress: new FormControl<string | null | undefined>(undefined),
			virtualMachine: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An existing VPC network. */
	export interface LinkedVpcNetwork {

		/** Optional. IP ranges encompassing the subnets to be excluded from peering. */
		excludeExportRanges?: Array<string>;

		/** Required. The URI of the VPC network resource. */
		uri?: string | null;
	}

	/** An existing VPC network. */
	export interface LinkedVpcNetworkFormProperties {

		/** Required. The URI of the VPC network resource. */
		uri: FormControl<string | null | undefined>,
	}
	export function CreateLinkedVpcNetworkFormGroup() {
		return new FormGroup<LinkedVpcNetworkFormProperties>({
			uri: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A collection of Cloud VPN tunnel resources. These resources should be redundant HA VPN tunnels that all advertise the same prefixes to Google Cloud. Alternatively, in a passive/active configuration, all tunnels should be capable of advertising the same prefixes. */
	export interface LinkedVpnTunnels {

		/** A value that controls whether site-to-site data transfer is enabled for these resources. Data transfer is available only in [supported locations](https://cloud.google.com/network-connectivity/docs/network-connectivity-center/concepts/locations). */
		siteToSiteDataTransfer?: boolean | null;

		/** The URIs of linked VPN tunnel resources. */
		uris?: Array<string>;

		/** Output only. The VPC network where these VPN tunnels are located. */
		vpcNetwork?: string | null;
	}

	/** A collection of Cloud VPN tunnel resources. These resources should be redundant HA VPN tunnels that all advertise the same prefixes to Google Cloud. Alternatively, in a passive/active configuration, all tunnels should be capable of advertising the same prefixes. */
	export interface LinkedVpnTunnelsFormProperties {

		/** A value that controls whether site-to-site data transfer is enabled for these resources. Data transfer is available only in [supported locations](https://cloud.google.com/network-connectivity/docs/network-connectivity-center/concepts/locations). */
		siteToSiteDataTransfer: FormControl<boolean | null | undefined>,

		/** Output only. The VPC network where these VPN tunnels are located. */
		vpcNetwork: FormControl<string | null | undefined>,
	}
	export function CreateLinkedVpnTunnelsFormGroup() {
		return new FormGroup<LinkedVpnTunnelsFormProperties>({
			siteToSiteDataTransfer: new FormControl<boolean | null | undefined>(undefined),
			vpcNetwork: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The reason a spoke is inactive. */
	export interface StateReason {

		/** The code associated with this reason. */
		code?: StateReasonCode | null;

		/** Human-readable details about this reason. */
		message?: string | null;

		/** Additional information provided by the user in the RejectSpoke call. */
		userDetails?: string | null;
	}

	/** The reason a spoke is inactive. */
	export interface StateReasonFormProperties {

		/** The code associated with this reason. */
		code: FormControl<StateReasonCode | null | undefined>,

		/** Human-readable details about this reason. */
		message: FormControl<string | null | undefined>,

		/** Additional information provided by the user in the RejectSpoke call. */
		userDetails: FormControl<string | null | undefined>,
	}
	export function CreateStateReasonFormGroup() {
		return new FormGroup<StateReasonFormProperties>({
			code: new FormControl<StateReasonCode | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
			userDetails: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum StateReasonCode { CODE_UNSPECIFIED = 'CODE_UNSPECIFIED', PENDING_REVIEW = 'PENDING_REVIEW', REJECTED = 'REJECTED', PAUSED = 'PAUSED', FAILED = 'FAILED' }

	export enum SpokeSpokeType { SPOKE_TYPE_UNSPECIFIED = 'SPOKE_TYPE_UNSPECIFIED', VPN_TUNNEL = 'VPN_TUNNEL', INTERCONNECT_ATTACHMENT = 'INTERCONNECT_ATTACHMENT', ROUTER_APPLIANCE = 'ROUTER_APPLIANCE', VPC_NETWORK = 'VPC_NETWORK' }

	export enum SpokeState { STATE_UNSPECIFIED = 'STATE_UNSPECIFIED', CREATING = 'CREATING', ACTIVE = 'ACTIVE', DELETING = 'DELETING', ACCEPTING = 'ACCEPTING', REJECTING = 'REJECTING', UPDATING = 'UPDATING', INACTIVE = 'INACTIVE', OBSOLETE = 'OBSOLETE' }


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


	/** Allow the producer to specify which consumers can connect to it. */
	export interface ConsumerPscConfig {

		/** This is used in PSC consumer ForwardingRule to control whether the PSC endpoint can be accessed from another region. */
		disableGlobalAccess?: boolean | null;

		/** The resource path of the consumer network where PSC connections are allowed to be created in. Note, this network does not need be in the ConsumerPscConfig.project in the case of SharedVPC. Example: projects/{projectNumOrId}/global/networks/{networkId}. */
		network?: string | null;

		/** The consumer project where PSC connections are allowed to be created in. */
		project?: string | null;

		/** Output only. Overall state of PSC Connections management for this consumer psc config. */
		state?: ConsumerPscConfigState | null;
	}

	/** Allow the producer to specify which consumers can connect to it. */
	export interface ConsumerPscConfigFormProperties {

		/** This is used in PSC consumer ForwardingRule to control whether the PSC endpoint can be accessed from another region. */
		disableGlobalAccess: FormControl<boolean | null | undefined>,

		/** The resource path of the consumer network where PSC connections are allowed to be created in. Note, this network does not need be in the ConsumerPscConfig.project in the case of SharedVPC. Example: projects/{projectNumOrId}/global/networks/{networkId}. */
		network: FormControl<string | null | undefined>,

		/** The consumer project where PSC connections are allowed to be created in. */
		project: FormControl<string | null | undefined>,

		/** Output only. Overall state of PSC Connections management for this consumer psc config. */
		state: FormControl<ConsumerPscConfigState | null | undefined>,
	}
	export function CreateConsumerPscConfigFormGroup() {
		return new FormGroup<ConsumerPscConfigFormProperties>({
			disableGlobalAccess: new FormControl<boolean | null | undefined>(undefined),
			network: new FormControl<string | null | undefined>(undefined),
			project: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<ConsumerPscConfigState | null | undefined>(undefined),
		});

	}

	export enum ConsumerPscConfigState { STATE_UNSPECIFIED = 'STATE_UNSPECIFIED', VALID = 'VALID', CONNECTION_POLICY_MISSING = 'CONNECTION_POLICY_MISSING', POLICY_LIMIT_REACHED = 'POLICY_LIMIT_REACHED' }


	/** PSC connection details on consumer side. */
	export interface ConsumerPscConnection {

		/** The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors). */
		error?: GoogleRpcStatus;

		/** Describes the cause of the error with structured details. Example of an error when contacting the "pubsub.googleapis.com" API when it is not enabled: { "reason": "API_DISABLED" "domain": "googleapis.com" "metadata": { "resource": "projects/123", "service": "pubsub.googleapis.com" } } This response indicates that the pubsub.googleapis.com API is not enabled. Example of an error that is returned when attempting to create a Spanner instance in a region that is out of stock: { "reason": "STOCKOUT" "domain": "spanner.googleapis.com", "metadata": { "availableRegions": "us-central1,us-east2" } } */
		errorInfo?: GoogleRpcErrorInfo;

		/** The error type indicates whether the error is consumer facing, producer facing or system internal. */
		errorType?: ConsumerPscConnectionErrorType | null;

		/** The URI of the consumer forwarding rule created. Example: projects/{projectNumOrId}/regions/us-east1/networks/{resourceId}. */
		forwardingRule?: string | null;

		/** The last Compute Engine operation to setup PSC connection. */
		gceOperation?: string | null;

		/** The IP literal allocated on the consumer network for the PSC forwarding rule that is created to connect to the producer service attachment in this service connection map. */
		ip?: string | null;

		/** The consumer network whose PSC forwarding rule is connected to the service attachments in this service connection map. Note that the network could be on a different project (shared VPC). */
		network?: string | null;

		/** The consumer project whose PSC forwarding rule is connected to the service attachments in this service connection map. */
		project?: string | null;

		/** The PSC connection id of the PSC forwarding rule connected to the service attachments in this service connection map. */
		pscConnectionId?: string | null;

		/** The URI of a service attachment which is the target of the PSC connection. */
		serviceAttachmentUri?: string | null;

		/** The state of the PSC connection. */
		state?: ConsumerPscConnectionState | null;
	}

	/** PSC connection details on consumer side. */
	export interface ConsumerPscConnectionFormProperties {

		/** The error type indicates whether the error is consumer facing, producer facing or system internal. */
		errorType: FormControl<ConsumerPscConnectionErrorType | null | undefined>,

		/** The URI of the consumer forwarding rule created. Example: projects/{projectNumOrId}/regions/us-east1/networks/{resourceId}. */
		forwardingRule: FormControl<string | null | undefined>,

		/** The last Compute Engine operation to setup PSC connection. */
		gceOperation: FormControl<string | null | undefined>,

		/** The IP literal allocated on the consumer network for the PSC forwarding rule that is created to connect to the producer service attachment in this service connection map. */
		ip: FormControl<string | null | undefined>,

		/** The consumer network whose PSC forwarding rule is connected to the service attachments in this service connection map. Note that the network could be on a different project (shared VPC). */
		network: FormControl<string | null | undefined>,

		/** The consumer project whose PSC forwarding rule is connected to the service attachments in this service connection map. */
		project: FormControl<string | null | undefined>,

		/** The PSC connection id of the PSC forwarding rule connected to the service attachments in this service connection map. */
		pscConnectionId: FormControl<string | null | undefined>,

		/** The URI of a service attachment which is the target of the PSC connection. */
		serviceAttachmentUri: FormControl<string | null | undefined>,

		/** The state of the PSC connection. */
		state: FormControl<ConsumerPscConnectionState | null | undefined>,
	}
	export function CreateConsumerPscConnectionFormGroup() {
		return new FormGroup<ConsumerPscConnectionFormProperties>({
			errorType: new FormControl<ConsumerPscConnectionErrorType | null | undefined>(undefined),
			forwardingRule: new FormControl<string | null | undefined>(undefined),
			gceOperation: new FormControl<string | null | undefined>(undefined),
			ip: new FormControl<string | null | undefined>(undefined),
			network: new FormControl<string | null | undefined>(undefined),
			project: new FormControl<string | null | undefined>(undefined),
			pscConnectionId: new FormControl<string | null | undefined>(undefined),
			serviceAttachmentUri: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<ConsumerPscConnectionState | null | undefined>(undefined),
		});

	}


	/** The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors). */
	export interface GoogleRpcStatus {

		/** The status code, which should be an enum value of google.rpc.Code. */
		code?: number | null;

		/** A list of messages that carry the error details. There is a common set of message types for APIs to use. */
		details?: Array<string>;

		/** A developer-facing error message, which should be in English. Any user-facing error message should be localized and sent in the google.rpc.Status.details field, or localized by the client. */
		message?: string | null;
	}

	/** The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors). */
	export interface GoogleRpcStatusFormProperties {

		/** The status code, which should be an enum value of google.rpc.Code. */
		code: FormControl<number | null | undefined>,

		/** A developer-facing error message, which should be in English. Any user-facing error message should be localized and sent in the google.rpc.Status.details field, or localized by the client. */
		message: FormControl<string | null | undefined>,
	}
	export function CreateGoogleRpcStatusFormGroup() {
		return new FormGroup<GoogleRpcStatusFormProperties>({
			code: new FormControl<number | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Describes the cause of the error with structured details. Example of an error when contacting the "pubsub.googleapis.com" API when it is not enabled: { "reason": "API_DISABLED" "domain": "googleapis.com" "metadata": { "resource": "projects/123", "service": "pubsub.googleapis.com" } } This response indicates that the pubsub.googleapis.com API is not enabled. Example of an error that is returned when attempting to create a Spanner instance in a region that is out of stock: { "reason": "STOCKOUT" "domain": "spanner.googleapis.com", "metadata": { "availableRegions": "us-central1,us-east2" } } */
	export interface GoogleRpcErrorInfo {

		/** The logical grouping to which the "reason" belongs. The error domain is typically the registered service name of the tool or product that generates the error. Example: "pubsub.googleapis.com". If the error is generated by some common infrastructure, the error domain must be a globally unique value that identifies the infrastructure. For Google API infrastructure, the error domain is "googleapis.com". */
		domain?: string | null;

		/** Additional structured details about this error. Keys should match /[a-zA-Z0-9-_]/ and be limited to 64 characters in length. When identifying the current value of an exceeded limit, the units should be contained in the key, not the value. For example, rather than {"instanceLimit": "100/request"}, should be returned as, {"instanceLimitPerRequest": "100"}, if the client exceeds the number of instances that can be created in a single (batch) request. */
		metadata?: {[id: string]: string };

		/** The reason of the error. This is a constant value that identifies the proximate cause of the error. Error reasons are unique within a particular domain of errors. This should be at most 63 characters and match a regular expression of `A-Z+[A-Z0-9]`, which represents UPPER_SNAKE_CASE. */
		reason?: string | null;
	}

	/** Describes the cause of the error with structured details. Example of an error when contacting the "pubsub.googleapis.com" API when it is not enabled: { "reason": "API_DISABLED" "domain": "googleapis.com" "metadata": { "resource": "projects/123", "service": "pubsub.googleapis.com" } } This response indicates that the pubsub.googleapis.com API is not enabled. Example of an error that is returned when attempting to create a Spanner instance in a region that is out of stock: { "reason": "STOCKOUT" "domain": "spanner.googleapis.com", "metadata": { "availableRegions": "us-central1,us-east2" } } */
	export interface GoogleRpcErrorInfoFormProperties {

		/** The logical grouping to which the "reason" belongs. The error domain is typically the registered service name of the tool or product that generates the error. Example: "pubsub.googleapis.com". If the error is generated by some common infrastructure, the error domain must be a globally unique value that identifies the infrastructure. For Google API infrastructure, the error domain is "googleapis.com". */
		domain: FormControl<string | null | undefined>,

		/** Additional structured details about this error. Keys should match /[a-zA-Z0-9-_]/ and be limited to 64 characters in length. When identifying the current value of an exceeded limit, the units should be contained in the key, not the value. For example, rather than {"instanceLimit": "100/request"}, should be returned as, {"instanceLimitPerRequest": "100"}, if the client exceeds the number of instances that can be created in a single (batch) request. */
		metadata: FormControl<{[id: string]: string } | null | undefined>,

		/** The reason of the error. This is a constant value that identifies the proximate cause of the error. Error reasons are unique within a particular domain of errors. This should be at most 63 characters and match a regular expression of `A-Z+[A-Z0-9]`, which represents UPPER_SNAKE_CASE. */
		reason: FormControl<string | null | undefined>,
	}
	export function CreateGoogleRpcErrorInfoFormGroup() {
		return new FormGroup<GoogleRpcErrorInfoFormProperties>({
			domain: new FormControl<string | null | undefined>(undefined),
			metadata: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			reason: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ConsumerPscConnectionErrorType { CONNECTION_ERROR_TYPE_UNSPECIFIED = 'CONNECTION_ERROR_TYPE_UNSPECIFIED', ERROR_INTERNAL = 'ERROR_INTERNAL', ERROR_CONSUMER_SIDE = 'ERROR_CONSUMER_SIDE', ERROR_PRODUCER_SIDE = 'ERROR_PRODUCER_SIDE' }

	export enum ConsumerPscConnectionState { STATE_UNSPECIFIED = 'STATE_UNSPECIFIED', ACTIVE = 'ACTIVE', FAILED = 'FAILED', CREATING = 'CREATING', DELETING = 'DELETING' }


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


	/** Filter matches L4 traffic. */
	export interface Filter {

		/** Optional. The destination IP range of outgoing packets that this policy-based route applies to. Default is "0.0.0.0/0" if protocol version is IPv4. */
		destRange?: string | null;

		/** Optional. The IP protocol that this policy-based route applies to. Valid values are 'TCP', 'UDP', and 'ALL'. Default is 'ALL'. */
		ipProtocol?: string | null;

		/** Required. Internet protocol versions this policy-based route applies to. For this version, only IPV4 is supported. */
		protocolVersion?: FilterProtocolVersion | null;

		/** Optional. The source IP range of outgoing packets that this policy-based route applies to. Default is "0.0.0.0/0" if protocol version is IPv4. */
		srcRange?: string | null;
	}

	/** Filter matches L4 traffic. */
	export interface FilterFormProperties {

		/** Optional. The destination IP range of outgoing packets that this policy-based route applies to. Default is "0.0.0.0/0" if protocol version is IPv4. */
		destRange: FormControl<string | null | undefined>,

		/** Optional. The IP protocol that this policy-based route applies to. Valid values are 'TCP', 'UDP', and 'ALL'. Default is 'ALL'. */
		ipProtocol: FormControl<string | null | undefined>,

		/** Required. Internet protocol versions this policy-based route applies to. For this version, only IPV4 is supported. */
		protocolVersion: FormControl<FilterProtocolVersion | null | undefined>,

		/** Optional. The source IP range of outgoing packets that this policy-based route applies to. Default is "0.0.0.0/0" if protocol version is IPv4. */
		srcRange: FormControl<string | null | undefined>,
	}
	export function CreateFilterFormGroup() {
		return new FormGroup<FilterFormProperties>({
			destRange: new FormControl<string | null | undefined>(undefined),
			ipProtocol: new FormControl<string | null | undefined>(undefined),
			protocolVersion: new FormControl<FilterProtocolVersion | null | undefined>(undefined),
			srcRange: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum FilterProtocolVersion { PROTOCOL_VERSION_UNSPECIFIED = 'PROTOCOL_VERSION_UNSPECIFIED', IPV4 = 'IPV4' }


	/** The request message for Operations.CancelOperation. */
	export interface GoogleLongrunningCancelOperationRequest {
	}

	/** The request message for Operations.CancelOperation. */
	export interface GoogleLongrunningCancelOperationRequestFormProperties {
	}
	export function CreateGoogleLongrunningCancelOperationRequestFormGroup() {
		return new FormGroup<GoogleLongrunningCancelOperationRequestFormProperties>({
		});

	}


	/** The response message for Operations.ListOperations. */
	export interface GoogleLongrunningListOperationsResponse {

		/** The standard List next-page token. */
		nextPageToken?: string | null;

		/** A list of operations that matches the specified filter in the request. */
		operations?: Array<GoogleLongrunningOperation>;
	}

	/** The response message for Operations.ListOperations. */
	export interface GoogleLongrunningListOperationsResponseFormProperties {

		/** The standard List next-page token. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateGoogleLongrunningListOperationsResponseFormGroup() {
		return new FormGroup<GoogleLongrunningListOperationsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** This resource represents a long-running operation that is the result of a network API call. */
	export interface GoogleLongrunningOperation {

		/** If the value is `false`, it means the operation is still in progress. If `true`, the operation is completed, and either `error` or `response` is available. */
		done?: boolean | null;

		/** The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors). */
		error?: GoogleRpcStatus;

		/** Service-specific metadata associated with the operation. It typically contains progress information and common metadata such as create time. Some services might not provide such metadata. Any method that returns a long-running operation should document the metadata type, if any. */
		metadata?: {[id: string]: any };

		/** The server-assigned name, which is only unique within the same service that originally returns it. If you use the default HTTP mapping, the `name` should be a resource name ending with `operations/{unique_id}`. */
		name?: string | null;

		/** The normal, successful response of the operation. If the original method returns no data on success, such as `Delete`, the response is `google.protobuf.Empty`. If the original method is standard `Get`/`Create`/`Update`, the response should be the resource. For other methods, the response should have the type `XxxResponse`, where `Xxx` is the original method name. For example, if the original method name is `TakeSnapshot()`, the inferred response type is `TakeSnapshotResponse`. */
		response?: {[id: string]: any };
	}

	/** This resource represents a long-running operation that is the result of a network API call. */
	export interface GoogleLongrunningOperationFormProperties {

		/** If the value is `false`, it means the operation is still in progress. If `true`, the operation is completed, and either `error` or `response` is available. */
		done: FormControl<boolean | null | undefined>,

		/** Service-specific metadata associated with the operation. It typically contains progress information and common metadata such as create time. Some services might not provide such metadata. Any method that returns a long-running operation should document the metadata type, if any. */
		metadata: FormControl<{[id: string]: any } | null | undefined>,

		/** The server-assigned name, which is only unique within the same service that originally returns it. If you use the default HTTP mapping, the `name` should be a resource name ending with `operations/{unique_id}`. */
		name: FormControl<string | null | undefined>,

		/** The normal, successful response of the operation. If the original method returns no data on success, such as `Delete`, the response is `google.protobuf.Empty`. If the original method is standard `Get`/`Create`/`Update`, the response should be the resource. For other methods, the response should have the type `XxxResponse`, where `Xxx` is the original method name. For example, if the original method name is `TakeSnapshot()`, the inferred response type is `TakeSnapshotResponse`. */
		response: FormControl<{[id: string]: any } | null | undefined>,
	}
	export function CreateGoogleLongrunningOperationFormGroup() {
		return new FormGroup<GoogleLongrunningOperationFormProperties>({
			done: new FormControl<boolean | null | undefined>(undefined),
			metadata: new FormControl<{[id: string]: any } | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			response: new FormControl<{[id: string]: any } | null | undefined>(undefined),
		});

	}


	/** A group represents a subset of spokes attached to a hub. */
	export interface Group {

		/** Output only. The time the group was created. */
		createTime?: string | null;

		/** Optional. The description of the group. */
		description?: string | null;

		/** Optional. Labels in key-value pair format. For more information about labels, see [Requirements for labels](https://cloud.google.com/resource-manager/docs/creating-managing-labels#requirements). */
		labels?: {[id: string]: string };

		/** Immutable. The name of the group. Group names must be unique. They use the following form: `projects/{project_number}/locations/global/hubs/{hub}/groups/{group_id}` */
		name?: string | null;

		/** Output only. The current lifecycle state of this group. */
		state?: SpokeState | null;

		/** Output only. The Google-generated UUID for the group. This value is unique across all group resources. If a group is deleted and another with the same name is created, the new route table is assigned a different unique_id. */
		uid?: string | null;

		/** Output only. The time the group was last updated. */
		updateTime?: string | null;
	}

	/** A group represents a subset of spokes attached to a hub. */
	export interface GroupFormProperties {

		/** Output only. The time the group was created. */
		createTime: FormControl<string | null | undefined>,

		/** Optional. The description of the group. */
		description: FormControl<string | null | undefined>,

		/** Optional. Labels in key-value pair format. For more information about labels, see [Requirements for labels](https://cloud.google.com/resource-manager/docs/creating-managing-labels#requirements). */
		labels: FormControl<{[id: string]: string } | null | undefined>,

		/** Immutable. The name of the group. Group names must be unique. They use the following form: `projects/{project_number}/locations/global/hubs/{hub}/groups/{group_id}` */
		name: FormControl<string | null | undefined>,

		/** Output only. The current lifecycle state of this group. */
		state: FormControl<SpokeState | null | undefined>,

		/** Output only. The Google-generated UUID for the group. This value is unique across all group resources. If a group is deleted and another with the same name is created, the new route table is assigned a different unique_id. */
		uid: FormControl<string | null | undefined>,

		/** Output only. The time the group was last updated. */
		updateTime: FormControl<string | null | undefined>,
	}
	export function CreateGroupFormGroup() {
		return new FormGroup<GroupFormProperties>({
			createTime: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			labels: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<SpokeState | null | undefined>(undefined),
			uid: new FormControl<string | null | undefined>(undefined),
			updateTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A Network Connectivity Center hub is a global management resource to which you attach spokes. A single hub can contain spokes from multiple regions. However, if any of a hub's spokes use the site-to-site data transfer feature, the resources associated with those spokes must all be in the same VPC network. Spokes that do not use site-to-site data transfer can be associated with any VPC network in your project. */
	export interface Hub {

		/** Output only. The time the hub was created. */
		createTime?: string | null;

		/** An optional description of the hub. */
		description?: string | null;

		/** Optional labels in key-value pair format. For more information about labels, see [Requirements for labels](https://cloud.google.com/resource-manager/docs/creating-managing-labels#requirements). */
		labels?: {[id: string]: string };

		/** Immutable. The name of the hub. Hub names must be unique. They use the following form: `projects/{project_number}/locations/global/hubs/{hub_id}` */
		name?: string | null;

		/** Output only. The route tables that belong to this hub. They use the following form: `projects/{project_number}/locations/global/hubs/{hub_id}/routeTables/{route_table_id}` This field is read-only. Network Connectivity Center automatically populates it based on the route tables nested under the hub. */
		routeTables?: Array<string>;

		/** The VPC networks associated with this hub's spokes. This field is read-only. Network Connectivity Center automatically populates it based on the set of spokes attached to the hub. */
		routingVpcs?: Array<RoutingVPC>;

		/** Summarizes information about the spokes associated with a hub. The summary includes a count of spokes according to type and according to state. If any spokes are inactive, the summary also lists the reasons they are inactive, including a count for each reason. */
		spokeSummary?: SpokeSummary;

		/** Output only. The current lifecycle state of this hub. */
		state?: SpokeState | null;

		/** Output only. The Google-generated UUID for the hub. This value is unique across all hub resources. If a hub is deleted and another with the same name is created, the new hub is assigned a different unique_id. */
		uniqueId?: string | null;

		/** Output only. The time the hub was last updated. */
		updateTime?: string | null;
	}

	/** A Network Connectivity Center hub is a global management resource to which you attach spokes. A single hub can contain spokes from multiple regions. However, if any of a hub's spokes use the site-to-site data transfer feature, the resources associated with those spokes must all be in the same VPC network. Spokes that do not use site-to-site data transfer can be associated with any VPC network in your project. */
	export interface HubFormProperties {

		/** Output only. The time the hub was created. */
		createTime: FormControl<string | null | undefined>,

		/** An optional description of the hub. */
		description: FormControl<string | null | undefined>,

		/** Optional labels in key-value pair format. For more information about labels, see [Requirements for labels](https://cloud.google.com/resource-manager/docs/creating-managing-labels#requirements). */
		labels: FormControl<{[id: string]: string } | null | undefined>,

		/** Immutable. The name of the hub. Hub names must be unique. They use the following form: `projects/{project_number}/locations/global/hubs/{hub_id}` */
		name: FormControl<string | null | undefined>,

		/** Output only. The current lifecycle state of this hub. */
		state: FormControl<SpokeState | null | undefined>,

		/** Output only. The Google-generated UUID for the hub. This value is unique across all hub resources. If a hub is deleted and another with the same name is created, the new hub is assigned a different unique_id. */
		uniqueId: FormControl<string | null | undefined>,

		/** Output only. The time the hub was last updated. */
		updateTime: FormControl<string | null | undefined>,
	}
	export function CreateHubFormGroup() {
		return new FormGroup<HubFormProperties>({
			createTime: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			labels: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<SpokeState | null | undefined>(undefined),
			uniqueId: new FormControl<string | null | undefined>(undefined),
			updateTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** RoutingVPC contains information about the VPC networks associated with the spokes of a Network Connectivity Center hub. */
	export interface RoutingVPC {

		/** Output only. If true, indicates that this VPC network is currently associated with spokes that use the data transfer feature (spokes where the site_to_site_data_transfer field is set to true). If you create new spokes that use data transfer, they must be associated with this VPC network. At most, one VPC network will have this field set to true. */
		requiredForNewSiteToSiteDataTransferSpokes?: boolean | null;

		/** The URI of the VPC network. */
		uri?: string | null;
	}

	/** RoutingVPC contains information about the VPC networks associated with the spokes of a Network Connectivity Center hub. */
	export interface RoutingVPCFormProperties {

		/** Output only. If true, indicates that this VPC network is currently associated with spokes that use the data transfer feature (spokes where the site_to_site_data_transfer field is set to true). If you create new spokes that use data transfer, they must be associated with this VPC network. At most, one VPC network will have this field set to true. */
		requiredForNewSiteToSiteDataTransferSpokes: FormControl<boolean | null | undefined>,

		/** The URI of the VPC network. */
		uri: FormControl<string | null | undefined>,
	}
	export function CreateRoutingVPCFormGroup() {
		return new FormGroup<RoutingVPCFormProperties>({
			requiredForNewSiteToSiteDataTransferSpokes: new FormControl<boolean | null | undefined>(undefined),
			uri: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Summarizes information about the spokes associated with a hub. The summary includes a count of spokes according to type and according to state. If any spokes are inactive, the summary also lists the reasons they are inactive, including a count for each reason. */
	export interface SpokeSummary {

		/** Output only. Counts the number of spokes that are in each state and associated with a given hub. */
		spokeStateCounts?: Array<SpokeStateCount>;

		/** Output only. Counts the number of spokes that are inactive for each possible reason and associated with a given hub. */
		spokeStateReasonCounts?: Array<SpokeStateReasonCount>;

		/** Output only. Counts the number of spokes of each type that are associated with a specific hub. */
		spokeTypeCounts?: Array<SpokeTypeCount>;
	}

	/** Summarizes information about the spokes associated with a hub. The summary includes a count of spokes according to type and according to state. If any spokes are inactive, the summary also lists the reasons they are inactive, including a count for each reason. */
	export interface SpokeSummaryFormProperties {
	}
	export function CreateSpokeSummaryFormGroup() {
		return new FormGroup<SpokeSummaryFormProperties>({
		});

	}


	/** The number of spokes that are in a particular state and associated with a given hub. */
	export interface SpokeStateCount {

		/** Output only. The total number of spokes that are in this state and associated with a given hub. */
		count?: string | null;

		/** Output only. The state of the spokes. */
		state?: SpokeState | null;
	}

	/** The number of spokes that are in a particular state and associated with a given hub. */
	export interface SpokeStateCountFormProperties {

		/** Output only. The total number of spokes that are in this state and associated with a given hub. */
		count: FormControl<string | null | undefined>,

		/** Output only. The state of the spokes. */
		state: FormControl<SpokeState | null | undefined>,
	}
	export function CreateSpokeStateCountFormGroup() {
		return new FormGroup<SpokeStateCountFormProperties>({
			count: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<SpokeState | null | undefined>(undefined),
		});

	}


	/** The number of spokes in the hub that are inactive for this reason. */
	export interface SpokeStateReasonCount {

		/** Output only. The total number of spokes that are inactive for a particular reason and associated with a given hub. */
		count?: string | null;

		/** Output only. The reason that a spoke is inactive. */
		stateReasonCode?: StateReasonCode | null;
	}

	/** The number of spokes in the hub that are inactive for this reason. */
	export interface SpokeStateReasonCountFormProperties {

		/** Output only. The total number of spokes that are inactive for a particular reason and associated with a given hub. */
		count: FormControl<string | null | undefined>,

		/** Output only. The reason that a spoke is inactive. */
		stateReasonCode: FormControl<StateReasonCode | null | undefined>,
	}
	export function CreateSpokeStateReasonCountFormGroup() {
		return new FormGroup<SpokeStateReasonCountFormProperties>({
			count: new FormControl<string | null | undefined>(undefined),
			stateReasonCode: new FormControl<StateReasonCode | null | undefined>(undefined),
		});

	}


	/** The number of spokes of a given type that are associated with a specific hub. The type indicates what kind of resource is associated with the spoke. */
	export interface SpokeTypeCount {

		/** Output only. The total number of spokes of this type that are associated with the hub. */
		count?: string | null;

		/** Output only. The type of the spokes. */
		spokeType?: SpokeSpokeType | null;
	}

	/** The number of spokes of a given type that are associated with a specific hub. The type indicates what kind of resource is associated with the spoke. */
	export interface SpokeTypeCountFormProperties {

		/** Output only. The total number of spokes of this type that are associated with the hub. */
		count: FormControl<string | null | undefined>,

		/** Output only. The type of the spokes. */
		spokeType: FormControl<SpokeSpokeType | null | undefined>,
	}
	export function CreateSpokeTypeCountFormGroup() {
		return new FormGroup<SpokeTypeCountFormProperties>({
			count: new FormControl<string | null | undefined>(undefined),
			spokeType: new FormControl<SpokeSpokeType | null | undefined>(undefined),
		});

	}


	/** InterconnectAttachment that this route applies to. */
	export interface InterconnectAttachment {

		/** Optional. Cloud region to install this policy-based route on interconnect attachment. Use `all` to install it on all interconnect attachments. */
		region?: string | null;
	}

	/** InterconnectAttachment that this route applies to. */
	export interface InterconnectAttachmentFormProperties {

		/** Optional. Cloud region to install this policy-based route on interconnect attachment. Use `all` to install it on all interconnect attachments. */
		region: FormControl<string | null | undefined>,
	}
	export function CreateInterconnectAttachmentFormGroup() {
		return new FormGroup<InterconnectAttachmentFormProperties>({
			region: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The internal range resource for IPAM operations within a VPC network. Used to represent a private address range along with behavioral characterstics of that range (its usage and peering behavior). Networking resources can link to this range if they are created as belonging to it. */
	export interface InternalRange {

		/** Time when the internal range was created. */
		createTime?: string | null;

		/** A description of this resource. */
		description?: string | null;

		/** The IP range that this internal range defines. */
		ipCidrRange?: string | null;

		/** User-defined labels. */
		labels?: {[id: string]: string };

		/** Immutable. The name of an internal range. Format: projects/{project}/locations/{location}/internalRanges/{internal_range} See: https://google.aip.dev/122#fields-representing-resource-names */
		name?: string | null;

		/** The URL or resource ID of the network in which to reserve the internal range. The network cannot be deleted if there are any reserved internal ranges referring to it. Legacy networks are not supported. This can only be specified for a global internal address. Example: - URL: /compute/v1/projects/{project}/global/networks/{resourceId} - ID: network123 */
		network?: string | null;

		/** Optional. Types of resources that are allowed to overlap with the current internal range. */
		overlaps?: Array<string>;

		/** The type of peering set for this internal range. */
		peering?: InternalRangePeering | null;

		/** An alternate to ip_cidr_range. Can be set when trying to create a reservation that automatically finds a free range of the given size. If both ip_cidr_range and prefix_length are set, there is an error if the range sizes do not match. Can also be used during updates to change the range size. */
		prefixLength?: number | null;

		/** Optional. Can be set to narrow down or pick a different address space while searching for a free range. If not set, defaults to the "10.0.0.0/8" address space. This can be used to search in other rfc-1918 address spaces like "172.16.0.0/12" and "192.168.0.0/16" or non-rfc-1918 address spaces used in the VPC. */
		targetCidrRange?: Array<string>;

		/** Time when the internal range was updated. */
		updateTime?: string | null;

		/** The type of usage set for this InternalRange. */
		usage?: InternalRangeUsage | null;

		/** Output only. The list of resources that refer to this internal range. Resources that use the internal range for their range allocation are referred to as users of the range. Other resources mark themselves as users while doing so by creating a reference to this internal range. Having a user, based on this reference, prevents deletion of the internal range referred to. Can be empty. */
		users?: Array<string>;
	}

	/** The internal range resource for IPAM operations within a VPC network. Used to represent a private address range along with behavioral characterstics of that range (its usage and peering behavior). Networking resources can link to this range if they are created as belonging to it. */
	export interface InternalRangeFormProperties {

		/** Time when the internal range was created. */
		createTime: FormControl<string | null | undefined>,

		/** A description of this resource. */
		description: FormControl<string | null | undefined>,

		/** The IP range that this internal range defines. */
		ipCidrRange: FormControl<string | null | undefined>,

		/** User-defined labels. */
		labels: FormControl<{[id: string]: string } | null | undefined>,

		/** Immutable. The name of an internal range. Format: projects/{project}/locations/{location}/internalRanges/{internal_range} See: https://google.aip.dev/122#fields-representing-resource-names */
		name: FormControl<string | null | undefined>,

		/** The URL or resource ID of the network in which to reserve the internal range. The network cannot be deleted if there are any reserved internal ranges referring to it. Legacy networks are not supported. This can only be specified for a global internal address. Example: - URL: /compute/v1/projects/{project}/global/networks/{resourceId} - ID: network123 */
		network: FormControl<string | null | undefined>,

		/** The type of peering set for this internal range. */
		peering: FormControl<InternalRangePeering | null | undefined>,

		/** An alternate to ip_cidr_range. Can be set when trying to create a reservation that automatically finds a free range of the given size. If both ip_cidr_range and prefix_length are set, there is an error if the range sizes do not match. Can also be used during updates to change the range size. */
		prefixLength: FormControl<number | null | undefined>,

		/** Time when the internal range was updated. */
		updateTime: FormControl<string | null | undefined>,

		/** The type of usage set for this InternalRange. */
		usage: FormControl<InternalRangeUsage | null | undefined>,
	}
	export function CreateInternalRangeFormGroup() {
		return new FormGroup<InternalRangeFormProperties>({
			createTime: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			ipCidrRange: new FormControl<string | null | undefined>(undefined),
			labels: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			network: new FormControl<string | null | undefined>(undefined),
			peering: new FormControl<InternalRangePeering | null | undefined>(undefined),
			prefixLength: new FormControl<number | null | undefined>(undefined),
			updateTime: new FormControl<string | null | undefined>(undefined),
			usage: new FormControl<InternalRangeUsage | null | undefined>(undefined),
		});

	}

	export enum InternalRangePeering { PEERING_UNSPECIFIED = 'PEERING_UNSPECIFIED', FOR_SELF = 'FOR_SELF', FOR_PEER = 'FOR_PEER', NOT_SHARED = 'NOT_SHARED' }

	export enum InternalRangeUsage { USAGE_UNSPECIFIED = 'USAGE_UNSPECIFIED', FOR_VPC = 'FOR_VPC', EXTERNAL_TO_VPC = 'EXTERNAL_TO_VPC' }


	/** Response for HubService.ListGroups method. */
	export interface ListGroupsResponse {

		/** The requested groups. */
		groups?: Array<Group>;

		/** The token for the next page of the response. To see more results, use this value as the page_token for your next request. If this value is empty, there are no more results. */
		nextPageToken?: string | null;

		/** Hubs that could not be reached. */
		unreachable?: Array<string>;
	}

	/** Response for HubService.ListGroups method. */
	export interface ListGroupsResponseFormProperties {

		/** The token for the next page of the response. To see more results, use this value as the page_token for your next request. If this value is empty, there are no more results. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListGroupsResponseFormGroup() {
		return new FormGroup<ListGroupsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The response for HubService.ListHubSpokes. */
	export interface ListHubSpokesResponse {

		/** The token for the next page of the response. To see more results, use this value as the page_token for your next request. If this value is empty, there are no more results. */
		nextPageToken?: string | null;

		/** The requested spokes. The spoke fields can be partially populated based on the `view` field in the request message. */
		spokes?: Array<Spoke>;

		/** Locations that could not be reached. */
		unreachable?: Array<string>;
	}

	/** The response for HubService.ListHubSpokes. */
	export interface ListHubSpokesResponseFormProperties {

		/** The token for the next page of the response. To see more results, use this value as the page_token for your next request. If this value is empty, there are no more results. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListHubSpokesResponseFormGroup() {
		return new FormGroup<ListHubSpokesResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response for HubService.ListHubs method. */
	export interface ListHubsResponse {

		/** The requested hubs. */
		hubs?: Array<Hub>;

		/** The token for the next page of the response. To see more results, use this value as the page_token for your next request. If this value is empty, there are no more results. */
		nextPageToken?: string | null;

		/** Locations that could not be reached. */
		unreachable?: Array<string>;
	}

	/** Response for HubService.ListHubs method. */
	export interface ListHubsResponseFormProperties {

		/** The token for the next page of the response. To see more results, use this value as the page_token for your next request. If this value is empty, there are no more results. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListHubsResponseFormGroup() {
		return new FormGroup<ListHubsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response for InternalRange.ListInternalRanges */
	export interface ListInternalRangesResponse {

		/** Internal ranges to be returned. */
		internalRanges?: Array<InternalRange>;

		/** The next pagination token in the List response. It should be used as page_token for the following request. An empty value means no more result. */
		nextPageToken?: string | null;

		/** Locations that could not be reached. */
		unreachable?: Array<string>;
	}

	/** Response for InternalRange.ListInternalRanges */
	export interface ListInternalRangesResponseFormProperties {

		/** The next pagination token in the List response. It should be used as page_token for the following request. An empty value means no more result. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListInternalRangesResponseFormGroup() {
		return new FormGroup<ListInternalRangesResponseFormProperties>({
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


	/** Response for PolicyBasedRouting.ListPolicyBasedRoutes method. */
	export interface ListPolicyBasedRoutesResponse {

		/** The next pagination token in the List response. It should be used as page_token for the following request. An empty value means no more result. */
		nextPageToken?: string | null;

		/** Policy-based routes to be returned. */
		policyBasedRoutes?: Array<PolicyBasedRoute>;

		/** Locations that could not be reached. */
		unreachable?: Array<string>;
	}

	/** Response for PolicyBasedRouting.ListPolicyBasedRoutes method. */
	export interface ListPolicyBasedRoutesResponseFormProperties {

		/** The next pagination token in the List response. It should be used as page_token for the following request. An empty value means no more result. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListPolicyBasedRoutesResponseFormGroup() {
		return new FormGroup<ListPolicyBasedRoutesResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Policy-based routes route L4 network traffic based on not just destination IP address, but also source IP address, protocol, and more. If a policy-based route conflicts with other types of routes, the policy-based route always take precedence. */
	export interface PolicyBasedRoute {

		/** Output only. Time when the policy-based route was created. */
		createTime?: string | null;

		/** Optional. An optional description of this resource. Provide this field when you create the resource. */
		description?: string | null;

		/** Filter matches L4 traffic. */
		filter?: Filter;

		/** InterconnectAttachment that this route applies to. */
		interconnectAttachment?: InterconnectAttachment;

		/** Output only. Type of this resource. Always networkconnectivity#policyBasedRoute for policy-based Route resources. */
		kind?: string | null;

		/** User-defined labels. */
		labels?: {[id: string]: string };

		/** Immutable. A unique name of the resource in the form of `projects/{project_number}/locations/global/PolicyBasedRoutes/{policy_based_route_id}` */
		name?: string | null;

		/** Required. Fully-qualified URL of the network that this route applies to, for example: projects/my-project/global/networks/my-network. */
		network?: string | null;

		/** Optional. The IP address of a global-access-enabled L4 ILB that is the next hop for matching packets. For this version, only nextHopIlbIp is supported. */
		nextHopIlbIp?: string | null;

		/** Optional. Other routes that will be referenced to determine the next hop of the packet. */
		nextHopOtherRoutes?: PolicyBasedRouteNextHopOtherRoutes | null;

		/** Optional. The priority of this policy-based route. Priority is used to break ties in cases where there are more than one matching policy-based routes found. In cases where multiple policy-based routes are matched, the one with the lowest-numbered priority value wins. The default value is 1000. The priority value must be from 1 to 65535, inclusive. */
		priority?: number | null;

		/** Output only. Server-defined fully-qualified URL for this resource. */
		selfLink?: string | null;

		/** Output only. Time when the policy-based route was updated. */
		updateTime?: string | null;

		/** VM instances to which this policy-based route applies to. */
		virtualMachine?: VirtualMachine;

		/** Output only. If potential misconfigurations are detected for this route, this field will be populated with warning messages. */
		warnings?: Array<Warnings>;
	}

	/** Policy-based routes route L4 network traffic based on not just destination IP address, but also source IP address, protocol, and more. If a policy-based route conflicts with other types of routes, the policy-based route always take precedence. */
	export interface PolicyBasedRouteFormProperties {

		/** Output only. Time when the policy-based route was created. */
		createTime: FormControl<string | null | undefined>,

		/** Optional. An optional description of this resource. Provide this field when you create the resource. */
		description: FormControl<string | null | undefined>,

		/** Output only. Type of this resource. Always networkconnectivity#policyBasedRoute for policy-based Route resources. */
		kind: FormControl<string | null | undefined>,

		/** User-defined labels. */
		labels: FormControl<{[id: string]: string } | null | undefined>,

		/** Immutable. A unique name of the resource in the form of `projects/{project_number}/locations/global/PolicyBasedRoutes/{policy_based_route_id}` */
		name: FormControl<string | null | undefined>,

		/** Required. Fully-qualified URL of the network that this route applies to, for example: projects/my-project/global/networks/my-network. */
		network: FormControl<string | null | undefined>,

		/** Optional. The IP address of a global-access-enabled L4 ILB that is the next hop for matching packets. For this version, only nextHopIlbIp is supported. */
		nextHopIlbIp: FormControl<string | null | undefined>,

		/** Optional. Other routes that will be referenced to determine the next hop of the packet. */
		nextHopOtherRoutes: FormControl<PolicyBasedRouteNextHopOtherRoutes | null | undefined>,

		/** Optional. The priority of this policy-based route. Priority is used to break ties in cases where there are more than one matching policy-based routes found. In cases where multiple policy-based routes are matched, the one with the lowest-numbered priority value wins. The default value is 1000. The priority value must be from 1 to 65535, inclusive. */
		priority: FormControl<number | null | undefined>,

		/** Output only. Server-defined fully-qualified URL for this resource. */
		selfLink: FormControl<string | null | undefined>,

		/** Output only. Time when the policy-based route was updated. */
		updateTime: FormControl<string | null | undefined>,
	}
	export function CreatePolicyBasedRouteFormGroup() {
		return new FormGroup<PolicyBasedRouteFormProperties>({
			createTime: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			labels: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			network: new FormControl<string | null | undefined>(undefined),
			nextHopIlbIp: new FormControl<string | null | undefined>(undefined),
			nextHopOtherRoutes: new FormControl<PolicyBasedRouteNextHopOtherRoutes | null | undefined>(undefined),
			priority: new FormControl<number | null | undefined>(undefined),
			selfLink: new FormControl<string | null | undefined>(undefined),
			updateTime: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum PolicyBasedRouteNextHopOtherRoutes { OTHER_ROUTES_UNSPECIFIED = 'OTHER_ROUTES_UNSPECIFIED', DEFAULT_ROUTING = 'DEFAULT_ROUTING' }


	/** VM instances to which this policy-based route applies to. */
	export interface VirtualMachine {

		/** Optional. A list of VM instance tags the this policy-based route applies to. VM instances that have ANY of tags specified here will install this PBR. */
		tags?: Array<string>;
	}

	/** VM instances to which this policy-based route applies to. */
	export interface VirtualMachineFormProperties {
	}
	export function CreateVirtualMachineFormGroup() {
		return new FormGroup<VirtualMachineFormProperties>({
		});

	}


	/** Informational warning message. */
	export interface Warnings {

		/** Output only. A warning code, if applicable. */
		code?: WarningsCode | null;

		/** Output only. Metadata about this warning in key: value format. The key should provides more detail on the warning being returned. For example, for warnings where there are no results in a list request for a particular zone, this key might be scope and the key value might be the zone name. Other examples might be a key indicating a deprecated resource and a suggested replacement. */
		data?: {[id: string]: string };

		/** Output only. A human-readable description of the warning code. */
		warningMessage?: string | null;
	}

	/** Informational warning message. */
	export interface WarningsFormProperties {

		/** Output only. A warning code, if applicable. */
		code: FormControl<WarningsCode | null | undefined>,

		/** Output only. Metadata about this warning in key: value format. The key should provides more detail on the warning being returned. For example, for warnings where there are no results in a list request for a particular zone, this key might be scope and the key value might be the zone name. Other examples might be a key indicating a deprecated resource and a suggested replacement. */
		data: FormControl<{[id: string]: string } | null | undefined>,

		/** Output only. A human-readable description of the warning code. */
		warningMessage: FormControl<string | null | undefined>,
	}
	export function CreateWarningsFormGroup() {
		return new FormGroup<WarningsFormProperties>({
			code: new FormControl<WarningsCode | null | undefined>(undefined),
			data: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			warningMessage: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum WarningsCode { WARNING_UNSPECIFIED = 'WARNING_UNSPECIFIED', RESOURCE_NOT_ACTIVE = 'RESOURCE_NOT_ACTIVE', RESOURCE_BEING_MODIFIED = 'RESOURCE_BEING_MODIFIED' }


	/** Response for HubService.ListRouteTables method. */
	export interface ListRouteTablesResponse {

		/** The token for the next page of the response. To see more results, use this value as the page_token for your next request. If this value is empty, there are no more results. */
		nextPageToken?: string | null;

		/** The requested route tables. */
		routeTables?: Array<RouteTable>;

		/** Hubs that could not be reached. */
		unreachable?: Array<string>;
	}

	/** Response for HubService.ListRouteTables method. */
	export interface ListRouteTablesResponseFormProperties {

		/** The token for the next page of the response. To see more results, use this value as the page_token for your next request. If this value is empty, there are no more results. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListRouteTablesResponseFormGroup() {
		return new FormGroup<ListRouteTablesResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface RouteTable {

		/** Output only. The time the route table was created. */
		createTime?: string | null;

		/** An optional description of the route table. */
		description?: string | null;

		/** Optional labels in key-value pair format. For more information about labels, see [Requirements for labels](https://cloud.google.com/resource-manager/docs/creating-managing-labels#requirements). */
		labels?: {[id: string]: string };

		/** Immutable. The name of the route table. Route table names must be unique. They use the following form: `projects/{project_number}/locations/global/hubs/{hub}/routeTables/{route_table_id}` */
		name?: string | null;

		/** Output only. The current lifecycle state of this route table. */
		state?: SpokeState | null;

		/** Output only. The Google-generated UUID for the route table. This value is unique across all route table resources. If a route table is deleted and another with the same name is created, the new route table is assigned a different `uid`. */
		uid?: string | null;

		/** Output only. The time the route table was last updated. */
		updateTime?: string | null;
	}
	export interface RouteTableFormProperties {

		/** Output only. The time the route table was created. */
		createTime: FormControl<string | null | undefined>,

		/** An optional description of the route table. */
		description: FormControl<string | null | undefined>,

		/** Optional labels in key-value pair format. For more information about labels, see [Requirements for labels](https://cloud.google.com/resource-manager/docs/creating-managing-labels#requirements). */
		labels: FormControl<{[id: string]: string } | null | undefined>,

		/** Immutable. The name of the route table. Route table names must be unique. They use the following form: `projects/{project_number}/locations/global/hubs/{hub}/routeTables/{route_table_id}` */
		name: FormControl<string | null | undefined>,

		/** Output only. The current lifecycle state of this route table. */
		state: FormControl<SpokeState | null | undefined>,

		/** Output only. The Google-generated UUID for the route table. This value is unique across all route table resources. If a route table is deleted and another with the same name is created, the new route table is assigned a different `uid`. */
		uid: FormControl<string | null | undefined>,

		/** Output only. The time the route table was last updated. */
		updateTime: FormControl<string | null | undefined>,
	}
	export function CreateRouteTableFormGroup() {
		return new FormGroup<RouteTableFormProperties>({
			createTime: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			labels: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<SpokeState | null | undefined>(undefined),
			uid: new FormControl<string | null | undefined>(undefined),
			updateTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response for HubService.ListRoutes method. */
	export interface ListRoutesResponse {

		/** The token for the next page of the response. To see more results, use this value as the page_token for your next request. If this value is empty, there are no more results. */
		nextPageToken?: string | null;

		/** The requested routes. */
		routes?: Array<Route>;

		/** RouteTables that could not be reached. */
		unreachable?: Array<string>;
	}

	/** Response for HubService.ListRoutes method. */
	export interface ListRoutesResponseFormProperties {

		/** The token for the next page of the response. To see more results, use this value as the page_token for your next request. If this value is empty, there are no more results. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListRoutesResponseFormGroup() {
		return new FormGroup<ListRoutesResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A route defines a path from VM instances within a spoke to a specific destination resource. Only VPC spokes have routes. */
	export interface Route {

		/** Output only. The time the route was created. */
		createTime?: string | null;

		/** An optional description of the route. */
		description?: string | null;

		/** The destination IP address range. */
		ipCidrRange?: string | null;

		/** Optional labels in key-value pair format. For more information about labels, see [Requirements for labels](https://cloud.google.com/resource-manager/docs/creating-managing-labels#requirements). */
		labels?: {[id: string]: string };

		/** Output only. The location of the route. Uses the following form: "projects/{project}/locations/{location}" Example: projects/1234/locations/us-central1 */
		location?: string | null;

		/** Immutable. The name of the route. Route names must be unique. Route names use the following form: `projects/{project_number}/locations/global/hubs/{hub}/routeTables/{route_table_id}/routes/{route_id}` */
		name?: string | null;
		nextHopVpcNetwork?: NextHopVpcNetwork;

		/** Immutable. The spoke that this route leads to. Example: projects/12345/locations/global/spokes/SPOKE */
		spoke?: string | null;

		/** Output only. The current lifecycle state of the route. */
		state?: SpokeState | null;

		/** Output only. The route's type. Its type is determined by the properties of its IP address range. */
		type?: RouteType | null;

		/** Output only. The Google-generated UUID for the route. This value is unique across all Network Connectivity Center route resources. If a route is deleted and another with the same name is created, the new route is assigned a different `uid`. */
		uid?: string | null;

		/** Output only. The time the route was last updated. */
		updateTime?: string | null;
	}

	/** A route defines a path from VM instances within a spoke to a specific destination resource. Only VPC spokes have routes. */
	export interface RouteFormProperties {

		/** Output only. The time the route was created. */
		createTime: FormControl<string | null | undefined>,

		/** An optional description of the route. */
		description: FormControl<string | null | undefined>,

		/** The destination IP address range. */
		ipCidrRange: FormControl<string | null | undefined>,

		/** Optional labels in key-value pair format. For more information about labels, see [Requirements for labels](https://cloud.google.com/resource-manager/docs/creating-managing-labels#requirements). */
		labels: FormControl<{[id: string]: string } | null | undefined>,

		/** Output only. The location of the route. Uses the following form: "projects/{project}/locations/{location}" Example: projects/1234/locations/us-central1 */
		location: FormControl<string | null | undefined>,

		/** Immutable. The name of the route. Route names must be unique. Route names use the following form: `projects/{project_number}/locations/global/hubs/{hub}/routeTables/{route_table_id}/routes/{route_id}` */
		name: FormControl<string | null | undefined>,

		/** Immutable. The spoke that this route leads to. Example: projects/12345/locations/global/spokes/SPOKE */
		spoke: FormControl<string | null | undefined>,

		/** Output only. The current lifecycle state of the route. */
		state: FormControl<SpokeState | null | undefined>,

		/** Output only. The route's type. Its type is determined by the properties of its IP address range. */
		type: FormControl<RouteType | null | undefined>,

		/** Output only. The Google-generated UUID for the route. This value is unique across all Network Connectivity Center route resources. If a route is deleted and another with the same name is created, the new route is assigned a different `uid`. */
		uid: FormControl<string | null | undefined>,

		/** Output only. The time the route was last updated. */
		updateTime: FormControl<string | null | undefined>,
	}
	export function CreateRouteFormGroup() {
		return new FormGroup<RouteFormProperties>({
			createTime: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			ipCidrRange: new FormControl<string | null | undefined>(undefined),
			labels: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			location: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			spoke: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<SpokeState | null | undefined>(undefined),
			type: new FormControl<RouteType | null | undefined>(undefined),
			uid: new FormControl<string | null | undefined>(undefined),
			updateTime: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface NextHopVpcNetwork {

		/** The URI of the VPC network resource */
		uri?: string | null;
	}
	export interface NextHopVpcNetworkFormProperties {

		/** The URI of the VPC network resource */
		uri: FormControl<string | null | undefined>,
	}
	export function CreateNextHopVpcNetworkFormGroup() {
		return new FormGroup<NextHopVpcNetworkFormProperties>({
			uri: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum RouteType { ROUTE_TYPE_UNSPECIFIED = 'ROUTE_TYPE_UNSPECIFIED', VPC_PRIMARY_SUBNET = 'VPC_PRIMARY_SUBNET', VPC_SECONDARY_SUBNET = 'VPC_SECONDARY_SUBNET' }


	/** Response for ListServiceClasses. */
	export interface ListServiceClassesResponse {

		/** The next pagination token in the List response. It should be used as page_token for the following request. An empty value means no more result. */
		nextPageToken?: string | null;

		/** ServiceClasses to be returned. */
		serviceClasses?: Array<ServiceClass>;

		/** Locations that could not be reached. */
		unreachable?: Array<string>;
	}

	/** Response for ListServiceClasses. */
	export interface ListServiceClassesResponseFormProperties {

		/** The next pagination token in the List response. It should be used as page_token for the following request. An empty value means no more result. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListServiceClassesResponseFormGroup() {
		return new FormGroup<ListServiceClassesResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The ServiceClass resource. Next id: 9 */
	export interface ServiceClass {

		/** Output only. Time when the ServiceClass was created. */
		createTime?: string | null;

		/** A description of this resource. */
		description?: string | null;

		/** Optional. The etag is computed by the server, and may be sent on update and delete requests to ensure the client has an up-to-date value before proceeding. */
		etag?: string | null;

		/** User-defined labels. */
		labels?: {[id: string]: string };

		/** Immutable. The name of a ServiceClass resource. Format: projects/{project}/locations/{location}/serviceClasses/{service_class} See: https://google.aip.dev/122#fields-representing-resource-names */
		name?: string | null;

		/** Output only. The generated service class name. Use this name to refer to the Service class in Service Connection Maps and Service Connection Policies. */
		serviceClass?: string | null;

		/** Output only. Time when the ServiceClass was updated. */
		updateTime?: string | null;
	}

	/** The ServiceClass resource. Next id: 9 */
	export interface ServiceClassFormProperties {

		/** Output only. Time when the ServiceClass was created. */
		createTime: FormControl<string | null | undefined>,

		/** A description of this resource. */
		description: FormControl<string | null | undefined>,

		/** Optional. The etag is computed by the server, and may be sent on update and delete requests to ensure the client has an up-to-date value before proceeding. */
		etag: FormControl<string | null | undefined>,

		/** User-defined labels. */
		labels: FormControl<{[id: string]: string } | null | undefined>,

		/** Immutable. The name of a ServiceClass resource. Format: projects/{project}/locations/{location}/serviceClasses/{service_class} See: https://google.aip.dev/122#fields-representing-resource-names */
		name: FormControl<string | null | undefined>,

		/** Output only. The generated service class name. Use this name to refer to the Service class in Service Connection Maps and Service Connection Policies. */
		serviceClass: FormControl<string | null | undefined>,

		/** Output only. Time when the ServiceClass was updated. */
		updateTime: FormControl<string | null | undefined>,
	}
	export function CreateServiceClassFormGroup() {
		return new FormGroup<ServiceClassFormProperties>({
			createTime: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			etag: new FormControl<string | null | undefined>(undefined),
			labels: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			serviceClass: new FormControl<string | null | undefined>(undefined),
			updateTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response for ListServiceConnectionMaps. */
	export interface ListServiceConnectionMapsResponse {

		/** The next pagination token in the List response. It should be used as page_token for the following request. An empty value means no more result. */
		nextPageToken?: string | null;

		/** ServiceConnectionMaps to be returned. */
		serviceConnectionMaps?: Array<ServiceConnectionMap>;

		/** Locations that could not be reached. */
		unreachable?: Array<string>;
	}

	/** Response for ListServiceConnectionMaps. */
	export interface ListServiceConnectionMapsResponseFormProperties {

		/** The next pagination token in the List response. It should be used as page_token for the following request. An empty value means no more result. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListServiceConnectionMapsResponseFormGroup() {
		return new FormGroup<ListServiceConnectionMapsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The ServiceConnectionMap resource. Next id: 15 */
	export interface ServiceConnectionMap {

		/** The PSC configurations on consumer side. */
		consumerPscConfigs?: Array<ConsumerPscConfig>;

		/** Output only. PSC connection details on consumer side. */
		consumerPscConnections?: Array<ConsumerPscConnection>;

		/** Output only. Time when the ServiceConnectionMap was created. */
		createTime?: string | null;

		/** A description of this resource. */
		description?: string | null;

		/** Optional. The etag is computed by the server, and may be sent on update and delete requests to ensure the client has an up-to-date value before proceeding. */
		etag?: string | null;

		/** Output only. The infrastructure used for connections between consumers/producers. */
		infrastructure?: ServiceConnectionMapInfrastructure | null;

		/** User-defined labels. */
		labels?: {[id: string]: string };

		/** Immutable. The name of a ServiceConnectionMap. Format: projects/{project}/locations/{location}/serviceConnectionMaps/{service_connection_map} See: https://google.aip.dev/122#fields-representing-resource-names */
		name?: string | null;

		/** The PSC configurations on producer side. */
		producerPscConfigs?: Array<ProducerPscConfig>;

		/** The service class identifier this ServiceConnectionMap is for. The user of ServiceConnectionMap create API needs to have networkconnecitivty.serviceclasses.use iam permission for the service class. */
		serviceClass?: string | null;

		/** Output only. The service class uri this ServiceConnectionMap is for. */
		serviceClassUri?: string | null;

		/** The token provided by the consumer. This token authenticates that the consumer can create a connecton within the specified project and network. */
		token?: string | null;

		/** Output only. Time when the ServiceConnectionMap was updated. */
		updateTime?: string | null;
	}

	/** The ServiceConnectionMap resource. Next id: 15 */
	export interface ServiceConnectionMapFormProperties {

		/** Output only. Time when the ServiceConnectionMap was created. */
		createTime: FormControl<string | null | undefined>,

		/** A description of this resource. */
		description: FormControl<string | null | undefined>,

		/** Optional. The etag is computed by the server, and may be sent on update and delete requests to ensure the client has an up-to-date value before proceeding. */
		etag: FormControl<string | null | undefined>,

		/** Output only. The infrastructure used for connections between consumers/producers. */
		infrastructure: FormControl<ServiceConnectionMapInfrastructure | null | undefined>,

		/** User-defined labels. */
		labels: FormControl<{[id: string]: string } | null | undefined>,

		/** Immutable. The name of a ServiceConnectionMap. Format: projects/{project}/locations/{location}/serviceConnectionMaps/{service_connection_map} See: https://google.aip.dev/122#fields-representing-resource-names */
		name: FormControl<string | null | undefined>,

		/** The service class identifier this ServiceConnectionMap is for. The user of ServiceConnectionMap create API needs to have networkconnecitivty.serviceclasses.use iam permission for the service class. */
		serviceClass: FormControl<string | null | undefined>,

		/** Output only. The service class uri this ServiceConnectionMap is for. */
		serviceClassUri: FormControl<string | null | undefined>,

		/** The token provided by the consumer. This token authenticates that the consumer can create a connecton within the specified project and network. */
		token: FormControl<string | null | undefined>,

		/** Output only. Time when the ServiceConnectionMap was updated. */
		updateTime: FormControl<string | null | undefined>,
	}
	export function CreateServiceConnectionMapFormGroup() {
		return new FormGroup<ServiceConnectionMapFormProperties>({
			createTime: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			etag: new FormControl<string | null | undefined>(undefined),
			infrastructure: new FormControl<ServiceConnectionMapInfrastructure | null | undefined>(undefined),
			labels: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			serviceClass: new FormControl<string | null | undefined>(undefined),
			serviceClassUri: new FormControl<string | null | undefined>(undefined),
			token: new FormControl<string | null | undefined>(undefined),
			updateTime: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ServiceConnectionMapInfrastructure { INFRASTRUCTURE_UNSPECIFIED = 'INFRASTRUCTURE_UNSPECIFIED', PSC = 'PSC' }


	/** The PSC configurations on producer side. */
	export interface ProducerPscConfig {

		/** The resource path of a service attachment. Example: projects/{projectNumOrId}/regions/{region}/serviceAttachments/{resourceId}. */
		serviceAttachmentUri?: string | null;
	}

	/** The PSC configurations on producer side. */
	export interface ProducerPscConfigFormProperties {

		/** The resource path of a service attachment. Example: projects/{projectNumOrId}/regions/{region}/serviceAttachments/{resourceId}. */
		serviceAttachmentUri: FormControl<string | null | undefined>,
	}
	export function CreateProducerPscConfigFormGroup() {
		return new FormGroup<ProducerPscConfigFormProperties>({
			serviceAttachmentUri: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response for ListServiceConnectionPolicies. */
	export interface ListServiceConnectionPoliciesResponse {

		/** The next pagination token in the List response. It should be used as page_token for the following request. An empty value means no more result. */
		nextPageToken?: string | null;

		/** ServiceConnectionPolicies to be returned. */
		serviceConnectionPolicies?: Array<ServiceConnectionPolicy>;

		/** Locations that could not be reached. */
		unreachable?: Array<string>;
	}

	/** Response for ListServiceConnectionPolicies. */
	export interface ListServiceConnectionPoliciesResponseFormProperties {

		/** The next pagination token in the List response. It should be used as page_token for the following request. An empty value means no more result. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListServiceConnectionPoliciesResponseFormGroup() {
		return new FormGroup<ListServiceConnectionPoliciesResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The ServiceConnectionPolicy resource. Next id: 12 */
	export interface ServiceConnectionPolicy {

		/** Output only. Time when the ServiceConnectionMap was created. */
		createTime?: string | null;

		/** A description of this resource. */
		description?: string | null;

		/** Optional. The etag is computed by the server, and may be sent on update and delete requests to ensure the client has an up-to-date value before proceeding. */
		etag?: string | null;

		/** Output only. The type of underlying resources used to create the connection. */
		infrastructure?: ServiceConnectionMapInfrastructure | null;

		/** User-defined labels. */
		labels?: {[id: string]: string };

		/** Immutable. The name of a ServiceConnectionPolicy. Format: projects/{project}/locations/{location}/serviceConnectionPolicies/{service_connection_policy} See: https://google.aip.dev/122#fields-representing-resource-names */
		name?: string | null;

		/** The resource path of the consumer network. Example: - projects/{projectNumOrId}/global/networks/{resourceId}. */
		network?: string | null;

		/** Configuration used for Private Service Connect connections. Used when Infrastructure is PSC. */
		pscConfig?: PscConfig;

		/** Output only. [Output only] Information about each Private Service Connect connection. */
		pscConnections?: Array<PscConnection>;

		/** The service class identifier for which this ServiceConnectionPolicy is for. The service class identifier is a unique, symbolic representation of a ServiceClass. It is provided by the Service Producer. Google services have a prefix of gcp. For example, gcp-cloud-sql. 3rd party services do not. For example, test-service-a3dfcx. */
		serviceClass?: string | null;

		/** Output only. Time when the ServiceConnectionMap was updated. */
		updateTime?: string | null;
	}

	/** The ServiceConnectionPolicy resource. Next id: 12 */
	export interface ServiceConnectionPolicyFormProperties {

		/** Output only. Time when the ServiceConnectionMap was created. */
		createTime: FormControl<string | null | undefined>,

		/** A description of this resource. */
		description: FormControl<string | null | undefined>,

		/** Optional. The etag is computed by the server, and may be sent on update and delete requests to ensure the client has an up-to-date value before proceeding. */
		etag: FormControl<string | null | undefined>,

		/** Output only. The type of underlying resources used to create the connection. */
		infrastructure: FormControl<ServiceConnectionMapInfrastructure | null | undefined>,

		/** User-defined labels. */
		labels: FormControl<{[id: string]: string } | null | undefined>,

		/** Immutable. The name of a ServiceConnectionPolicy. Format: projects/{project}/locations/{location}/serviceConnectionPolicies/{service_connection_policy} See: https://google.aip.dev/122#fields-representing-resource-names */
		name: FormControl<string | null | undefined>,

		/** The resource path of the consumer network. Example: - projects/{projectNumOrId}/global/networks/{resourceId}. */
		network: FormControl<string | null | undefined>,

		/** The service class identifier for which this ServiceConnectionPolicy is for. The service class identifier is a unique, symbolic representation of a ServiceClass. It is provided by the Service Producer. Google services have a prefix of gcp. For example, gcp-cloud-sql. 3rd party services do not. For example, test-service-a3dfcx. */
		serviceClass: FormControl<string | null | undefined>,

		/** Output only. Time when the ServiceConnectionMap was updated. */
		updateTime: FormControl<string | null | undefined>,
	}
	export function CreateServiceConnectionPolicyFormGroup() {
		return new FormGroup<ServiceConnectionPolicyFormProperties>({
			createTime: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			etag: new FormControl<string | null | undefined>(undefined),
			infrastructure: new FormControl<ServiceConnectionMapInfrastructure | null | undefined>(undefined),
			labels: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			network: new FormControl<string | null | undefined>(undefined),
			serviceClass: new FormControl<string | null | undefined>(undefined),
			updateTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Configuration used for Private Service Connect connections. Used when Infrastructure is PSC. */
	export interface PscConfig {

		/** Optional. Max number of PSC connections for this policy. */
		limit?: string | null;

		/** The resource paths of subnetworks to use for IP address management. Example: projects/{projectNumOrId}/regions/{region}/subnetworks/{resourceId}. */
		subnetworks?: Array<string>;
	}

	/** Configuration used for Private Service Connect connections. Used when Infrastructure is PSC. */
	export interface PscConfigFormProperties {

		/** Optional. Max number of PSC connections for this policy. */
		limit: FormControl<string | null | undefined>,
	}
	export function CreatePscConfigFormGroup() {
		return new FormGroup<PscConfigFormProperties>({
			limit: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Information about a specific Private Service Connect connection. */
	export interface PscConnection {

		/** The resource reference of the consumer address. */
		consumerAddress?: string | null;

		/** The resource reference of the PSC Forwarding Rule within the consumer VPC. */
		consumerForwardingRule?: string | null;

		/** The project where the PSC connection is created. */
		consumerTargetProject?: string | null;

		/** The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors). */
		error?: GoogleRpcStatus;

		/** Describes the cause of the error with structured details. Example of an error when contacting the "pubsub.googleapis.com" API when it is not enabled: { "reason": "API_DISABLED" "domain": "googleapis.com" "metadata": { "resource": "projects/123", "service": "pubsub.googleapis.com" } } This response indicates that the pubsub.googleapis.com API is not enabled. Example of an error that is returned when attempting to create a Spanner instance in a region that is out of stock: { "reason": "STOCKOUT" "domain": "spanner.googleapis.com", "metadata": { "availableRegions": "us-central1,us-east2" } } */
		errorInfo?: GoogleRpcErrorInfo;

		/** The error type indicates whether the error is consumer facing, producer facing or system internal. */
		errorType?: ConsumerPscConnectionErrorType | null;

		/** The last Compute Engine operation to setup PSC connection. */
		gceOperation?: string | null;

		/** The PSC connection id of the PSC forwarding rule. */
		pscConnectionId?: string | null;

		/** State of the PSC Connection */
		state?: ConsumerPscConnectionState | null;
	}

	/** Information about a specific Private Service Connect connection. */
	export interface PscConnectionFormProperties {

		/** The resource reference of the consumer address. */
		consumerAddress: FormControl<string | null | undefined>,

		/** The resource reference of the PSC Forwarding Rule within the consumer VPC. */
		consumerForwardingRule: FormControl<string | null | undefined>,

		/** The project where the PSC connection is created. */
		consumerTargetProject: FormControl<string | null | undefined>,

		/** The error type indicates whether the error is consumer facing, producer facing or system internal. */
		errorType: FormControl<ConsumerPscConnectionErrorType | null | undefined>,

		/** The last Compute Engine operation to setup PSC connection. */
		gceOperation: FormControl<string | null | undefined>,

		/** The PSC connection id of the PSC forwarding rule. */
		pscConnectionId: FormControl<string | null | undefined>,

		/** State of the PSC Connection */
		state: FormControl<ConsumerPscConnectionState | null | undefined>,
	}
	export function CreatePscConnectionFormGroup() {
		return new FormGroup<PscConnectionFormProperties>({
			consumerAddress: new FormControl<string | null | undefined>(undefined),
			consumerForwardingRule: new FormControl<string | null | undefined>(undefined),
			consumerTargetProject: new FormControl<string | null | undefined>(undefined),
			errorType: new FormControl<ConsumerPscConnectionErrorType | null | undefined>(undefined),
			gceOperation: new FormControl<string | null | undefined>(undefined),
			pscConnectionId: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<ConsumerPscConnectionState | null | undefined>(undefined),
		});

	}


	/** Response for ListServiceConnectionTokens. */
	export interface ListServiceConnectionTokensResponse {

		/** The next pagination token in the List response. It should be used as page_token for the following request. An empty value means no more result. */
		nextPageToken?: string | null;

		/** ServiceConnectionTokens to be returned. */
		serviceConnectionTokens?: Array<ServiceConnectionToken>;

		/** Locations that could not be reached. */
		unreachable?: Array<string>;
	}

	/** Response for ListServiceConnectionTokens. */
	export interface ListServiceConnectionTokensResponseFormProperties {

		/** The next pagination token in the List response. It should be used as page_token for the following request. An empty value means no more result. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListServiceConnectionTokensResponseFormGroup() {
		return new FormGroup<ListServiceConnectionTokensResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The ServiceConnectionToken resource. Next id: 10 */
	export interface ServiceConnectionToken {

		/** Output only. Time when the ServiceConnectionToken was created. */
		createTime?: string | null;

		/** A description of this resource. */
		description?: string | null;

		/** Optional. The etag is computed by the server, and may be sent on update and delete requests to ensure the client has an up-to-date value before proceeding. */
		etag?: string | null;

		/** Output only. The time to which this token is valid. */
		expireTime?: string | null;

		/** User-defined labels. */
		labels?: {[id: string]: string };

		/** Immutable. The name of a ServiceConnectionToken. Format: projects/{project}/locations/{location}/ServiceConnectionTokens/{service_connection_token} See: https://google.aip.dev/122#fields-representing-resource-names */
		name?: string | null;

		/** The resource path of the network associated with this token. Example: projects/{projectNumOrId}/global/networks/{resourceId}. */
		network?: string | null;

		/** Output only. The token generated by Automation. */
		token?: string | null;

		/** Output only. Time when the ServiceConnectionToken was updated. */
		updateTime?: string | null;
	}

	/** The ServiceConnectionToken resource. Next id: 10 */
	export interface ServiceConnectionTokenFormProperties {

		/** Output only. Time when the ServiceConnectionToken was created. */
		createTime: FormControl<string | null | undefined>,

		/** A description of this resource. */
		description: FormControl<string | null | undefined>,

		/** Optional. The etag is computed by the server, and may be sent on update and delete requests to ensure the client has an up-to-date value before proceeding. */
		etag: FormControl<string | null | undefined>,

		/** Output only. The time to which this token is valid. */
		expireTime: FormControl<string | null | undefined>,

		/** User-defined labels. */
		labels: FormControl<{[id: string]: string } | null | undefined>,

		/** Immutable. The name of a ServiceConnectionToken. Format: projects/{project}/locations/{location}/ServiceConnectionTokens/{service_connection_token} See: https://google.aip.dev/122#fields-representing-resource-names */
		name: FormControl<string | null | undefined>,

		/** The resource path of the network associated with this token. Example: projects/{projectNumOrId}/global/networks/{resourceId}. */
		network: FormControl<string | null | undefined>,

		/** Output only. The token generated by Automation. */
		token: FormControl<string | null | undefined>,

		/** Output only. Time when the ServiceConnectionToken was updated. */
		updateTime: FormControl<string | null | undefined>,
	}
	export function CreateServiceConnectionTokenFormGroup() {
		return new FormGroup<ServiceConnectionTokenFormProperties>({
			createTime: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			etag: new FormControl<string | null | undefined>(undefined),
			expireTime: new FormControl<string | null | undefined>(undefined),
			labels: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			network: new FormControl<string | null | undefined>(undefined),
			token: new FormControl<string | null | undefined>(undefined),
			updateTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The response for HubService.ListSpokes. */
	export interface ListSpokesResponse {

		/** The token for the next page of the response. To see more results, use this value as the page_token for your next request. If this value is empty, there are no more results. */
		nextPageToken?: string | null;

		/** The requested spokes. */
		spokes?: Array<Spoke>;

		/** Locations that could not be reached. */
		unreachable?: Array<string>;
	}

	/** The response for HubService.ListSpokes. */
	export interface ListSpokesResponseFormProperties {

		/** The token for the next page of the response. To see more results, use this value as the page_token for your next request. If this value is empty, there are no more results. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListSpokesResponseFormGroup() {
		return new FormGroup<ListSpokesResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Metadata about locations */
	export interface LocationMetadata {

		/** List of supported features */
		locationFeatures?: Array<string>;
	}

	/** Metadata about locations */
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


	/** An Identity and Access Management (IAM) policy, which specifies access controls for Google Cloud resources. A `Policy` is a collection of `bindings`. A `binding` binds one or more `members`, or principals, to a single `role`. Principals can be user accounts, service accounts, Google groups, and domains (such as G Suite). A `role` is a named list of permissions; each `role` can be an IAM predefined role or a user-created custom role. For some types of Google Cloud resources, a `binding` can also specify a `condition`, which is a logical expression that allows access to a resource only if the expression evaluates to `true`. A condition can add constraints based on attributes of the request, the resource, or both. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies). **JSON example:** ``` { "bindings": [ { "role": "roles/resourcemanager.organizationAdmin", "members": [ "user:mike@example.com", "group:admins@example.com", "domain:google.com", "serviceAccount:my-project-id@appspot.gserviceaccount.com" ] }, { "role": "roles/resourcemanager.organizationViewer", "members": [ "user:eve@example.com" ], "condition": { "title": "expirable access", "description": "Does not grant access after Sep 2020", "expression": "request.time < timestamp('2020-10-01T00:00:00.000Z')", } } ], "etag": "BwWWja0YfJA=", "version": 3 } ``` **YAML example:** ``` bindings: - members: - user:mike@example.com - group:admins@example.com - domain:google.com - serviceAccount:my-project-id@appspot.gserviceaccount.com role: roles/resourcemanager.organizationAdmin - members: - user:eve@example.com role: roles/resourcemanager.organizationViewer condition: title: expirable access description: Does not grant access after Sep 2020 expression: request.time < timestamp('2020-10-01T00:00:00.000Z') etag: BwWWja0YfJA= version: 3 ``` For a description of IAM and its features, see the [IAM documentation](https://cloud.google.com/iam/docs/). */
	export interface Policy {

		/** Specifies cloud audit logging configuration for this policy. */
		auditConfigs?: Array<AuditConfig>;

		/** Associates a list of `members`, or principals, with a `role`. Optionally, may specify a `condition` that determines how and when the `bindings` are applied. Each of the `bindings` must contain at least one principal. The `bindings` in a `Policy` can refer to up to 1,500 principals; up to 250 of these principals can be Google groups. Each occurrence of a principal counts towards these limits. For example, if the `bindings` grant 50 different roles to `user:alice@example.com`, and not to any other principal, then you can add another 1,450 principals to the `bindings` in the `Policy`. */
		bindings?: Array<Binding>;

		/** `etag` is used for optimistic concurrency control as a way to help prevent simultaneous updates of a policy from overwriting each other. It is strongly suggested that systems make use of the `etag` in the read-modify-write cycle to perform policy updates in order to avoid race conditions: An `etag` is returned in the response to `getIamPolicy`, and systems are expected to put that etag in the request to `setIamPolicy` to ensure that their change will be applied to the same version of the policy. **Important:** If you use IAM Conditions, you must include the `etag` field whenever you call `setIamPolicy`. If you omit this field, then IAM allows you to overwrite a version `3` policy with a version `1` policy, and all of the conditions in the version `3` policy are lost. */
		etag?: string | null;

		/** Specifies the format of the policy. Valid values are `0`, `1`, and `3`. Requests that specify an invalid value are rejected. Any operation that affects conditional role bindings must specify version `3`. This requirement applies to the following operations: * Getting a policy that includes a conditional role binding * Adding a conditional role binding to a policy * Changing a conditional role binding in a policy * Removing any role binding, with or without a condition, from a policy that includes conditions **Important:** If you use IAM Conditions, you must include the `etag` field whenever you call `setIamPolicy`. If you omit this field, then IAM allows you to overwrite a version `3` policy with a version `1` policy, and all of the conditions in the version `3` policy are lost. If a policy does not include any conditions, operations on that policy may specify any valid version or leave the field unset. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies). */
		version?: number | null;
	}

	/** An Identity and Access Management (IAM) policy, which specifies access controls for Google Cloud resources. A `Policy` is a collection of `bindings`. A `binding` binds one or more `members`, or principals, to a single `role`. Principals can be user accounts, service accounts, Google groups, and domains (such as G Suite). A `role` is a named list of permissions; each `role` can be an IAM predefined role or a user-created custom role. For some types of Google Cloud resources, a `binding` can also specify a `condition`, which is a logical expression that allows access to a resource only if the expression evaluates to `true`. A condition can add constraints based on attributes of the request, the resource, or both. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies). **JSON example:** ``` { "bindings": [ { "role": "roles/resourcemanager.organizationAdmin", "members": [ "user:mike@example.com", "group:admins@example.com", "domain:google.com", "serviceAccount:my-project-id@appspot.gserviceaccount.com" ] }, { "role": "roles/resourcemanager.organizationViewer", "members": [ "user:eve@example.com" ], "condition": { "title": "expirable access", "description": "Does not grant access after Sep 2020", "expression": "request.time < timestamp('2020-10-01T00:00:00.000Z')", } } ], "etag": "BwWWja0YfJA=", "version": 3 } ``` **YAML example:** ``` bindings: - members: - user:mike@example.com - group:admins@example.com - domain:google.com - serviceAccount:my-project-id@appspot.gserviceaccount.com role: roles/resourcemanager.organizationAdmin - members: - user:eve@example.com role: roles/resourcemanager.organizationViewer condition: title: expirable access description: Does not grant access after Sep 2020 expression: request.time < timestamp('2020-10-01T00:00:00.000Z') etag: BwWWja0YfJA= version: 3 ``` For a description of IAM and its features, see the [IAM documentation](https://cloud.google.com/iam/docs/). */
	export interface PolicyFormProperties {

		/** `etag` is used for optimistic concurrency control as a way to help prevent simultaneous updates of a policy from overwriting each other. It is strongly suggested that systems make use of the `etag` in the read-modify-write cycle to perform policy updates in order to avoid race conditions: An `etag` is returned in the response to `getIamPolicy`, and systems are expected to put that etag in the request to `setIamPolicy` to ensure that their change will be applied to the same version of the policy. **Important:** If you use IAM Conditions, you must include the `etag` field whenever you call `setIamPolicy`. If you omit this field, then IAM allows you to overwrite a version `3` policy with a version `1` policy, and all of the conditions in the version `3` policy are lost. */
		etag: FormControl<string | null | undefined>,

		/** Specifies the format of the policy. Valid values are `0`, `1`, and `3`. Requests that specify an invalid value are rejected. Any operation that affects conditional role bindings must specify version `3`. This requirement applies to the following operations: * Getting a policy that includes a conditional role binding * Adding a conditional role binding to a policy * Changing a conditional role binding in a policy * Removing any role binding, with or without a condition, from a policy that includes conditions **Important:** If you use IAM Conditions, you must include the `etag` field whenever you call `setIamPolicy`. If you omit this field, then IAM allows you to overwrite a version `3` policy with a version `1` policy, and all of the conditions in the version `3` policy are lost. If a policy does not include any conditions, operations on that policy may specify any valid version or leave the field unset. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies). */
		version: FormControl<number | null | undefined>,
	}
	export function CreatePolicyFormGroup() {
		return new FormGroup<PolicyFormProperties>({
			etag: new FormControl<string | null | undefined>(undefined),
			version: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** The request for HubService.RejectHubSpoke. */
	export interface RejectHubSpokeRequest {

		/** Optional. Additional information provided by the hub administrator. */
		details?: string | null;

		/** Optional. A request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server knows to ignore the request if it has already been completed. The server guarantees that a request doesn't result in creation of duplicate commitments for at least 60 minutes. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check to see whether the original operation was received. If it was, the server ignores the second request. This behavior prevents clients from mistakenly creating duplicate commitments. The request ID must be a valid UUID, with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
		requestId?: string | null;

		/** Required. The URI of the spoke to reject from the hub. */
		spokeUri?: string | null;
	}

	/** The request for HubService.RejectHubSpoke. */
	export interface RejectHubSpokeRequestFormProperties {

		/** Optional. Additional information provided by the hub administrator. */
		details: FormControl<string | null | undefined>,

		/** Optional. A request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server knows to ignore the request if it has already been completed. The server guarantees that a request doesn't result in creation of duplicate commitments for at least 60 minutes. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check to see whether the original operation was received. If it was, the server ignores the second request. This behavior prevents clients from mistakenly creating duplicate commitments. The request ID must be a valid UUID, with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). */
		requestId: FormControl<string | null | undefined>,

		/** Required. The URI of the spoke to reject from the hub. */
		spokeUri: FormControl<string | null | undefined>,
	}
	export function CreateRejectHubSpokeRequestFormGroup() {
		return new FormGroup<RejectHubSpokeRequestFormProperties>({
			details: new FormControl<string | null | undefined>(undefined),
			requestId: new FormControl<string | null | undefined>(undefined),
			spokeUri: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The response for HubService.RejectHubSpoke. */
	export interface RejectHubSpokeResponse {

		/** A Network Connectivity Center spoke represents one or more network connectivity resources. When you create a spoke, you associate it with a hub. You must also identify a value for exactly one of the following fields: * linked_vpn_tunnels * linked_interconnect_attachments * linked_router_appliance_instances * linked_vpc_network */
		spoke?: Spoke;
	}

	/** The response for HubService.RejectHubSpoke. */
	export interface RejectHubSpokeResponseFormProperties {
	}
	export function CreateRejectHubSpokeResponseFormGroup() {
		return new FormGroup<RejectHubSpokeResponseFormProperties>({
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
		 * Deletes a Network Connectivity Center spoke.
		 * Delete v1/{name}
		 * @param {string} name Required. The name of the spoke to delete.
		 * @param {string} requestId Optional. A request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server knows to ignore the request if it has already been completed. The server guarantees that a request doesn't result in creation of duplicate commitments for at least 60 minutes. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check to see whether the original operation was received. If it was, the server ignores the second request. This behavior prevents clients from mistakenly creating duplicate commitments. The request ID must be a valid UUID, with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
		 * @return {GoogleLongrunningOperation} Successful response
		 */
		Networkconnectivity_projects_locations_spokes_delete(name: string, requestId: string | null | undefined): Observable<GoogleLongrunningOperation> {
			return this.http.delete<GoogleLongrunningOperation>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + '&requestId=' + (requestId == null ? '' : encodeURIComponent(requestId)), {});
		}

		/**
		 * Gets details about a Network Connectivity Center spoke.
		 * Get v1/{name}
		 * @param {string} name Required. The name of the spoke resource.
		 * @return {Spoke} Successful response
		 */
		Networkconnectivity_projects_locations_spokes_get(name: string): Observable<Spoke> {
			return this.http.get<Spoke>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)), {});
		}

		/**
		 * Updates the parameters of a Network Connectivity Center spoke.
		 * Patch v1/{name}
		 * @param {string} name Immutable. The name of the spoke. Spoke names must be unique. They use the following form: `projects/{project_number}/locations/{region}/spokes/{spoke_id}`
		 * @param {string} requestId Optional. A request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server knows to ignore the request if it has already been completed. The server guarantees that a request doesn't result in creation of duplicate commitments for at least 60 minutes. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check to see whether the original operation was received. If it was, the server ignores the second request. This behavior prevents clients from mistakenly creating duplicate commitments. The request ID must be a valid UUID, with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
		 * @param {string} updateMask Optional. In the case of an update to an existing spoke, field mask is used to specify the fields to be overwritten. The fields specified in the update_mask are relative to the resource, not the full request. A field is overwritten if it is in the mask. If the user does not provide a mask, then all fields are overwritten.
		 * @return {GoogleLongrunningOperation} Successful response
		 */
		Networkconnectivity_projects_locations_spokes_patch(name: string, requestId: string | null | undefined, updateMask: string | null | undefined, requestBody: Spoke): Observable<GoogleLongrunningOperation> {
			return this.http.patch<GoogleLongrunningOperation>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + '&requestId=' + (requestId == null ? '' : encodeURIComponent(requestId)) + '&updateMask=' + (updateMask == null ? '' : encodeURIComponent(updateMask)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
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
		Networkconnectivity_projects_locations_list(name: string, filter: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListLocationsResponse> {
			return this.http.get<ListLocationsResponse>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + '/locations&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
		 * Get v1/{name}/operations
		 * @param {string} name The name of the operation's parent resource.
		 * @param {string} filter The standard list filter.
		 * @param {number} pageSize The standard list page size.
		 * @param {string} pageToken The standard list page token.
		 * @return {GoogleLongrunningListOperationsResponse} Successful response
		 */
		Networkconnectivity_projects_locations_operations_list(name: string, filter: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<GoogleLongrunningListOperationsResponse> {
			return this.http.get<GoogleLongrunningListOperationsResponse>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + '/operations&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Accepts a proposal to attach a Network Connectivity Center spoke to a hub.
		 * Post v1/{name}:acceptSpoke
		 * @param {string} name Required. The name of the hub into which to accept the spoke.
		 * @return {GoogleLongrunningOperation} Successful response
		 */
		Networkconnectivity_projects_locations_global_hubs_acceptSpoke(name: string, requestBody: AcceptHubSpokeRequest): Observable<GoogleLongrunningOperation> {
			return this.http.post<GoogleLongrunningOperation>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + ':acceptSpoke', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
		 * Post v1/{name}:cancel
		 * @param {string} name The name of the operation resource to be cancelled.
		 * @return {Empty} Successful response
		 */
		Networkconnectivity_projects_locations_operations_cancel(name: string, requestBody: GoogleLongrunningCancelOperationRequest): Observable<Empty> {
			return this.http.post<Empty>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + ':cancel', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists the Network Connectivity Center spokes associated with a specified hub and location. The list includes both spokes that are attached to the hub and spokes that have been proposed but not yet accepted.
		 * Get v1/{name}:listSpokes
		 * @param {string} name Required. The name of the hub.
		 * @param {string} filter An expression that filters the list of results.
		 * @param {string} orderBy Sort the results by name or create_time.
		 * @param {number} pageSize The maximum number of results to return per page.
		 * @param {string} pageToken The page token.
		 * @param {Array<string>} spokeLocations A list of locations. Specify one of the following: `[global]`, a single region (for example, `[us-central1]`), or a combination of values (for example, `[global, us-central1, us-west1]`). If the spoke_locations field is populated, the list of results includes only spokes in the specified location. If the spoke_locations field is not populated, the list of results includes spokes in all locations.
		 * @param {Networkconnectivity_projects_locations_global_hubs_listSpokesView} view The view of the spoke to return. The view that you use determines which spoke fields are included in the response.
		 * @return {ListHubSpokesResponse} Successful response
		 */
		Networkconnectivity_projects_locations_global_hubs_listSpokes(name: string, filter: string | null | undefined, orderBy: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined, spokeLocations: Array<string> | null | undefined, view: Networkconnectivity_projects_locations_global_hubs_listSpokesView | null | undefined): Observable<ListHubSpokesResponse> {
			return this.http.get<ListHubSpokesResponse>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + ':listSpokes&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&orderBy=' + (orderBy == null ? '' : encodeURIComponent(orderBy)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '&' + spokeLocations?.map(z => `spokeLocations=${encodeURIComponent(z)}`).join('&') + '&view=' + view, {});
		}

		/**
		 * Rejects a Network Connectivity Center spoke from being attached to a hub. If the spoke was previously in the `ACTIVE` state, it transitions to the `INACTIVE` state and is no longer able to connect to other spokes that are attached to the hub.
		 * Post v1/{name}:rejectSpoke
		 * @param {string} name Required. The name of the hub from which to reject the spoke.
		 * @return {GoogleLongrunningOperation} Successful response
		 */
		Networkconnectivity_projects_locations_global_hubs_rejectSpoke(name: string, requestBody: RejectHubSpokeRequest): Observable<GoogleLongrunningOperation> {
			return this.http.post<GoogleLongrunningOperation>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + ':rejectSpoke', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists groups in a given hub.
		 * Get v1/{parent}/groups
		 * @param {string} parent Required. The parent resource's name.
		 * @param {string} filter An expression that filters the list of results.
		 * @param {string} orderBy Sort the results by a certain order.
		 * @param {number} pageSize The maximum number of results to return per page.
		 * @param {string} pageToken The page token.
		 * @return {ListGroupsResponse} Successful response
		 */
		Networkconnectivity_projects_locations_global_hubs_groups_list(parent: string, filter: string | null | undefined, orderBy: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListGroupsResponse> {
			return this.http.get<ListGroupsResponse>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/groups&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&orderBy=' + (orderBy == null ? '' : encodeURIComponent(orderBy)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Lists the Network Connectivity Center hubs associated with a given project.
		 * Get v1/{parent}/hubs
		 * @param {string} parent Required. The parent resource's name.
		 * @param {string} filter An expression that filters the list of results.
		 * @param {string} orderBy Sort the results by a certain order.
		 * @param {number} pageSize The maximum number of results per page to return.
		 * @param {string} pageToken The page token.
		 * @return {ListHubsResponse} Successful response
		 */
		Networkconnectivity_projects_locations_global_hubs_list(parent: string, filter: string | null | undefined, orderBy: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListHubsResponse> {
			return this.http.get<ListHubsResponse>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/hubs&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&orderBy=' + (orderBy == null ? '' : encodeURIComponent(orderBy)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Creates a new Network Connectivity Center hub in the specified project.
		 * Post v1/{parent}/hubs
		 * @param {string} parent Required. The parent resource.
		 * @param {string} hubId Required. A unique identifier for the hub.
		 * @param {string} requestId Optional. A request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server knows to ignore the request if it has already been completed. The server guarantees that a request doesn't result in creation of duplicate commitments for at least 60 minutes. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check to see whether the original operation was received. If it was, the server ignores the second request. This behavior prevents clients from mistakenly creating duplicate commitments. The request ID must be a valid UUID, with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
		 * @return {GoogleLongrunningOperation} Successful response
		 */
		Networkconnectivity_projects_locations_global_hubs_create(parent: string, hubId: string | null | undefined, requestId: string | null | undefined, requestBody: Hub): Observable<GoogleLongrunningOperation> {
			return this.http.post<GoogleLongrunningOperation>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/hubs&hubId=' + (hubId == null ? '' : encodeURIComponent(hubId)) + '&requestId=' + (requestId == null ? '' : encodeURIComponent(requestId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists internal ranges in a given project and location.
		 * Get v1/{parent}/internalRanges
		 * @param {string} parent Required. The parent resource's name.
		 * @param {string} filter A filter expression that filters the results listed in the response.
		 * @param {string} orderBy Sort the results by a certain order.
		 * @param {number} pageSize The maximum number of results per page that should be returned.
		 * @param {string} pageToken The page token.
		 * @return {ListInternalRangesResponse} Successful response
		 */
		Networkconnectivity_projects_locations_internalRanges_list(parent: string, filter: string | null | undefined, orderBy: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListInternalRangesResponse> {
			return this.http.get<ListInternalRangesResponse>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/internalRanges&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&orderBy=' + (orderBy == null ? '' : encodeURIComponent(orderBy)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Creates a new internal range in a given project and location.
		 * Post v1/{parent}/internalRanges
		 * @param {string} parent Required. The parent resource's name of the internal range.
		 * @param {string} internalRangeId Optional. Resource ID (i.e. 'foo' in '[...]/projects/p/locations/l/internalRanges/foo') See https://google.aip.dev/122#resource-id-segments Unique per location.
		 * @param {string} requestId Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
		 * @return {GoogleLongrunningOperation} Successful response
		 */
		Networkconnectivity_projects_locations_internalRanges_create(parent: string, internalRangeId: string | null | undefined, requestId: string | null | undefined, requestBody: InternalRange): Observable<GoogleLongrunningOperation> {
			return this.http.post<GoogleLongrunningOperation>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/internalRanges&internalRangeId=' + (internalRangeId == null ? '' : encodeURIComponent(internalRangeId)) + '&requestId=' + (requestId == null ? '' : encodeURIComponent(requestId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists policy-based routes in a given project and location.
		 * Get v1/{parent}/policyBasedRoutes
		 * @param {string} parent Required. The parent resource's name.
		 * @param {string} filter A filter expression that filters the results listed in the response.
		 * @param {string} orderBy Sort the results by a certain order.
		 * @param {number} pageSize The maximum number of results per page that should be returned.
		 * @param {string} pageToken The page token.
		 * @return {ListPolicyBasedRoutesResponse} Successful response
		 */
		Networkconnectivity_projects_locations_global_policyBasedRoutes_list(parent: string, filter: string | null | undefined, orderBy: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListPolicyBasedRoutesResponse> {
			return this.http.get<ListPolicyBasedRoutesResponse>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/policyBasedRoutes&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&orderBy=' + (orderBy == null ? '' : encodeURIComponent(orderBy)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Creates a new policy-based route in a given project and location.
		 * Post v1/{parent}/policyBasedRoutes
		 * @param {string} parent Required. The parent resource's name of the PolicyBasedRoute.
		 * @param {string} policyBasedRouteId Required. Unique id for the policy-based route to create.
		 * @param {string} requestId Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
		 * @return {GoogleLongrunningOperation} Successful response
		 */
		Networkconnectivity_projects_locations_global_policyBasedRoutes_create(parent: string, policyBasedRouteId: string | null | undefined, requestId: string | null | undefined, requestBody: PolicyBasedRoute): Observable<GoogleLongrunningOperation> {
			return this.http.post<GoogleLongrunningOperation>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/policyBasedRoutes&policyBasedRouteId=' + (policyBasedRouteId == null ? '' : encodeURIComponent(policyBasedRouteId)) + '&requestId=' + (requestId == null ? '' : encodeURIComponent(requestId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists route tables in a given project.
		 * Get v1/{parent}/routeTables
		 * @param {string} parent Required. The parent resource's name.
		 * @param {string} filter An expression that filters the list of results.
		 * @param {string} orderBy Sort the results by a certain order.
		 * @param {number} pageSize The maximum number of results to return per page.
		 * @param {string} pageToken The page token.
		 * @return {ListRouteTablesResponse} Successful response
		 */
		Networkconnectivity_projects_locations_global_hubs_routeTables_list(parent: string, filter: string | null | undefined, orderBy: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListRouteTablesResponse> {
			return this.http.get<ListRouteTablesResponse>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/routeTables&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&orderBy=' + (orderBy == null ? '' : encodeURIComponent(orderBy)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Lists routes in a given project.
		 * Get v1/{parent}/routes
		 * @param {string} parent Required. The parent resource's name.
		 * @param {string} filter An expression that filters the list of results.
		 * @param {string} orderBy Sort the results by a certain order.
		 * @param {number} pageSize The maximum number of results to return per page.
		 * @param {string} pageToken The page token.
		 * @return {ListRoutesResponse} Successful response
		 */
		Networkconnectivity_projects_locations_global_hubs_routeTables_routes_list(parent: string, filter: string | null | undefined, orderBy: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListRoutesResponse> {
			return this.http.get<ListRoutesResponse>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/routes&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&orderBy=' + (orderBy == null ? '' : encodeURIComponent(orderBy)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Lists ServiceClasses in a given project and location.
		 * Get v1/{parent}/serviceClasses
		 * @param {string} parent Required. The parent resource's name. ex. projects/123/locations/us-east1
		 * @param {string} filter A filter expression that filters the results listed in the response.
		 * @param {string} orderBy Sort the results by a certain order.
		 * @param {number} pageSize The maximum number of results per page that should be returned.
		 * @param {string} pageToken The page token.
		 * @return {ListServiceClassesResponse} Successful response
		 */
		Networkconnectivity_projects_locations_serviceClasses_list(parent: string, filter: string | null | undefined, orderBy: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListServiceClassesResponse> {
			return this.http.get<ListServiceClassesResponse>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/serviceClasses&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&orderBy=' + (orderBy == null ? '' : encodeURIComponent(orderBy)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Lists ServiceConnectionMaps in a given project and location.
		 * Get v1/{parent}/serviceConnectionMaps
		 * @param {string} parent Required. The parent resource's name. ex. projects/123/locations/us-east1
		 * @param {string} filter A filter expression that filters the results listed in the response.
		 * @param {string} orderBy Sort the results by a certain order.
		 * @param {number} pageSize The maximum number of results per page that should be returned.
		 * @param {string} pageToken The page token.
		 * @return {ListServiceConnectionMapsResponse} Successful response
		 */
		Networkconnectivity_projects_locations_serviceConnectionMaps_list(parent: string, filter: string | null | undefined, orderBy: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListServiceConnectionMapsResponse> {
			return this.http.get<ListServiceConnectionMapsResponse>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/serviceConnectionMaps&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&orderBy=' + (orderBy == null ? '' : encodeURIComponent(orderBy)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Creates a new ServiceConnectionMap in a given project and location.
		 * Post v1/{parent}/serviceConnectionMaps
		 * @param {string} parent Required. The parent resource's name of the ServiceConnectionMap. ex. projects/123/locations/us-east1
		 * @param {string} requestId Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
		 * @param {string} serviceConnectionMapId Optional. Resource ID (i.e. 'foo' in '[...]/projects/p/locations/l/serviceConnectionMaps/foo') See https://google.aip.dev/122#resource-id-segments Unique per location. If one is not provided, one will be generated.
		 * @return {GoogleLongrunningOperation} Successful response
		 */
		Networkconnectivity_projects_locations_serviceConnectionMaps_create(parent: string, requestId: string | null | undefined, serviceConnectionMapId: string | null | undefined, requestBody: ServiceConnectionMap): Observable<GoogleLongrunningOperation> {
			return this.http.post<GoogleLongrunningOperation>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/serviceConnectionMaps&requestId=' + (requestId == null ? '' : encodeURIComponent(requestId)) + '&serviceConnectionMapId=' + (serviceConnectionMapId == null ? '' : encodeURIComponent(serviceConnectionMapId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists ServiceConnectionPolicies in a given project and location.
		 * Get v1/{parent}/serviceConnectionPolicies
		 * @param {string} parent Required. The parent resource's name. ex. projects/123/locations/us-east1
		 * @param {string} filter A filter expression that filters the results listed in the response.
		 * @param {string} orderBy Sort the results by a certain order.
		 * @param {number} pageSize The maximum number of results per page that should be returned.
		 * @param {string} pageToken The page token.
		 * @return {ListServiceConnectionPoliciesResponse} Successful response
		 */
		Networkconnectivity_projects_locations_serviceConnectionPolicies_list(parent: string, filter: string | null | undefined, orderBy: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListServiceConnectionPoliciesResponse> {
			return this.http.get<ListServiceConnectionPoliciesResponse>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/serviceConnectionPolicies&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&orderBy=' + (orderBy == null ? '' : encodeURIComponent(orderBy)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Creates a new ServiceConnectionPolicy in a given project and location.
		 * Post v1/{parent}/serviceConnectionPolicies
		 * @param {string} parent Required. The parent resource's name of the ServiceConnectionPolicy. ex. projects/123/locations/us-east1
		 * @param {string} requestId Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
		 * @param {string} serviceConnectionPolicyId Optional. Resource ID (i.e. 'foo' in '[...]/projects/p/locations/l/serviceConnectionPolicies/foo') See https://google.aip.dev/122#resource-id-segments Unique per location.
		 * @return {GoogleLongrunningOperation} Successful response
		 */
		Networkconnectivity_projects_locations_serviceConnectionPolicies_create(parent: string, requestId: string | null | undefined, serviceConnectionPolicyId: string | null | undefined, requestBody: ServiceConnectionPolicy): Observable<GoogleLongrunningOperation> {
			return this.http.post<GoogleLongrunningOperation>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/serviceConnectionPolicies&requestId=' + (requestId == null ? '' : encodeURIComponent(requestId)) + '&serviceConnectionPolicyId=' + (serviceConnectionPolicyId == null ? '' : encodeURIComponent(serviceConnectionPolicyId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists ServiceConnectionTokens in a given project and location.
		 * Get v1/{parent}/serviceConnectionTokens
		 * @param {string} parent Required. The parent resource's name. ex. projects/123/locations/us-east1
		 * @param {string} filter A filter expression that filters the results listed in the response.
		 * @param {string} orderBy Sort the results by a certain order.
		 * @param {number} pageSize The maximum number of results per page that should be returned.
		 * @param {string} pageToken The page token.
		 * @return {ListServiceConnectionTokensResponse} Successful response
		 */
		Networkconnectivity_projects_locations_serviceConnectionTokens_list(parent: string, filter: string | null | undefined, orderBy: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListServiceConnectionTokensResponse> {
			return this.http.get<ListServiceConnectionTokensResponse>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/serviceConnectionTokens&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&orderBy=' + (orderBy == null ? '' : encodeURIComponent(orderBy)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Creates a new ServiceConnectionToken in a given project and location.
		 * Post v1/{parent}/serviceConnectionTokens
		 * @param {string} parent Required. The parent resource's name of the ServiceConnectionToken. ex. projects/123/locations/us-east1
		 * @param {string} requestId Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
		 * @param {string} serviceConnectionTokenId Optional. Resource ID (i.e. 'foo' in '[...]/projects/p/locations/l/ServiceConnectionTokens/foo') See https://google.aip.dev/122#resource-id-segments Unique per location. If one is not provided, one will be generated.
		 * @return {GoogleLongrunningOperation} Successful response
		 */
		Networkconnectivity_projects_locations_serviceConnectionTokens_create(parent: string, requestId: string | null | undefined, serviceConnectionTokenId: string | null | undefined, requestBody: ServiceConnectionToken): Observable<GoogleLongrunningOperation> {
			return this.http.post<GoogleLongrunningOperation>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/serviceConnectionTokens&requestId=' + (requestId == null ? '' : encodeURIComponent(requestId)) + '&serviceConnectionTokenId=' + (serviceConnectionTokenId == null ? '' : encodeURIComponent(serviceConnectionTokenId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists the Network Connectivity Center spokes in a specified project and location.
		 * Get v1/{parent}/spokes
		 * @param {string} parent Required. The parent resource.
		 * @param {string} filter An expression that filters the list of results.
		 * @param {string} orderBy Sort the results by a certain order.
		 * @param {number} pageSize The maximum number of results to return per page.
		 * @param {string} pageToken The page token.
		 * @return {ListSpokesResponse} Successful response
		 */
		Networkconnectivity_projects_locations_spokes_list(parent: string, filter: string | null | undefined, orderBy: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListSpokesResponse> {
			return this.http.get<ListSpokesResponse>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/spokes&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&orderBy=' + (orderBy == null ? '' : encodeURIComponent(orderBy)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Creates a Network Connectivity Center spoke.
		 * Post v1/{parent}/spokes
		 * @param {string} parent Required. The parent resource.
		 * @param {string} requestId Optional. A request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server knows to ignore the request if it has already been completed. The server guarantees that a request doesn't result in creation of duplicate commitments for at least 60 minutes. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check to see whether the original operation was received. If it was, the server ignores the second request. This behavior prevents clients from mistakenly creating duplicate commitments. The request ID must be a valid UUID, with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
		 * @param {string} spokeId Required. Unique id for the spoke to create.
		 * @return {GoogleLongrunningOperation} Successful response
		 */
		Networkconnectivity_projects_locations_spokes_create(parent: string, requestId: string | null | undefined, spokeId: string | null | undefined, requestBody: Spoke): Observable<GoogleLongrunningOperation> {
			return this.http.post<GoogleLongrunningOperation>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/spokes&requestId=' + (requestId == null ? '' : encodeURIComponent(requestId)) + '&spokeId=' + (spokeId == null ? '' : encodeURIComponent(spokeId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
		 * Get v1/{resource}:getIamPolicy
		 * @param {string} resource REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
		 * @param {number} options_requestedPolicyVersion Optional. The maximum policy version that will be used to format the policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset. The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies).
		 * @return {Policy} Successful response
		 */
		Networkconnectivity_projects_locations_spokes_getIamPolicy(resource: string, options_requestedPolicyVersion: number | null | undefined): Observable<Policy> {
			return this.http.get<Policy>(this.baseUri + 'v1/' + (resource == null ? '' : encodeURIComponent(resource)) + ':getIamPolicy&options_requestedPolicyVersion=' + options_requestedPolicyVersion, {});
		}

		/**
		 * Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
		 * Post v1/{resource}:setIamPolicy
		 * @param {string} resource REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
		 * @return {Policy} Successful response
		 */
		Networkconnectivity_projects_locations_spokes_setIamPolicy(resource: string, requestBody: SetIamPolicyRequest): Observable<Policy> {
			return this.http.post<Policy>(this.baseUri + 'v1/' + (resource == null ? '' : encodeURIComponent(resource)) + ':setIamPolicy', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
		 * Post v1/{resource}:testIamPermissions
		 * @param {string} resource REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
		 * @return {TestIamPermissionsResponse} Successful response
		 */
		Networkconnectivity_projects_locations_spokes_testIamPermissions(resource: string, requestBody: TestIamPermissionsRequest): Observable<TestIamPermissionsResponse> {
			return this.http.post<TestIamPermissionsResponse>(this.baseUri + 'v1/' + (resource == null ? '' : encodeURIComponent(resource)) + ':testIamPermissions', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

	export enum Networkconnectivity_projects_locations_global_hubs_listSpokesView { SPOKE_VIEW_UNSPECIFIED = 'SPOKE_VIEW_UNSPECIFIED', BASIC = 'BASIC', DETAILED = 'DETAILED' }

}

