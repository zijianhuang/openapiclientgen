import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** Application defines the governance boundary for App Hub Entities that perform a logical end-to-end business function. App Hub supports application level IAM permission to align with governance requirements. */
	export interface Application {

		/** Consumer provided attributes. */
		attributes?: Attributes;

		/** Output only. Create time. */
		createTime?: string | null;

		/** Optional. User-defined description of an Application. */
		description?: string | null;

		/** Optional. User-defined name for the Application. */
		displayName?: string | null;

		/** Identifier. The resource name of an Application. Format: "projects/{host-project-id}/locations/{location}/applications/{application-id}" */
		name?: string | null;

		/** Scope of an application. */
		scope?: Scope;

		/** Output only. Application state. */
		state?: ApplicationState | null;

		/** Output only. A universally unique identifier (in UUID4 format) for the `Application`. */
		uid?: string | null;

		/** Output only. Update time. */
		updateTime?: string | null;
	}

	/** Application defines the governance boundary for App Hub Entities that perform a logical end-to-end business function. App Hub supports application level IAM permission to align with governance requirements. */
	export interface ApplicationFormProperties {

		/** Output only. Create time. */
		createTime: FormControl<string | null | undefined>,

		/** Optional. User-defined description of an Application. */
		description: FormControl<string | null | undefined>,

		/** Optional. User-defined name for the Application. */
		displayName: FormControl<string | null | undefined>,

		/** Identifier. The resource name of an Application. Format: "projects/{host-project-id}/locations/{location}/applications/{application-id}" */
		name: FormControl<string | null | undefined>,

		/** Output only. Application state. */
		state: FormControl<ApplicationState | null | undefined>,

		/** Output only. A universally unique identifier (in UUID4 format) for the `Application`. */
		uid: FormControl<string | null | undefined>,

		/** Output only. Update time. */
		updateTime: FormControl<string | null | undefined>,
	}
	export function CreateApplicationFormGroup() {
		return new FormGroup<ApplicationFormProperties>({
			createTime: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			displayName: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<ApplicationState | null | undefined>(undefined),
			uid: new FormControl<string | null | undefined>(undefined),
			updateTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Consumer provided attributes. */
	export interface Attributes {

		/** Optional. Business team that ensures user needs are met and value is delivered */
		businessOwners?: Array<ContactInfo>;

		/** Criticality of the Application, Service, or Workload */
		criticality?: Criticality;

		/** Optional. Developer team that owns development and coding. */
		developerOwners?: Array<ContactInfo>;

		/** Environment of the Application, Service, or Workload */
		environment?: Environment;

		/** Optional. Operator team that ensures runtime and operations. */
		operatorOwners?: Array<ContactInfo>;
	}

	/** Consumer provided attributes. */
	export interface AttributesFormProperties {
	}
	export function CreateAttributesFormGroup() {
		return new FormGroup<AttributesFormProperties>({
		});

	}


	/** Contact information of stakeholders. */
	export interface ContactInfo {

		/** Separate message to accommodate custom formats across IRC and Slack. */
		channel?: Channel;

		/** Optional. Contact's name. */
		displayName?: string | null;

		/** Required. Email address of the contacts. */
		email?: string | null;
	}

	/** Contact information of stakeholders. */
	export interface ContactInfoFormProperties {

		/** Optional. Contact's name. */
		displayName: FormControl<string | null | undefined>,

		/** Required. Email address of the contacts. */
		email: FormControl<string | null | undefined>,
	}
	export function CreateContactInfoFormGroup() {
		return new FormGroup<ContactInfoFormProperties>({
			displayName: new FormControl<string | null | undefined>(undefined),
			email: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Separate message to accommodate custom formats across IRC and Slack. */
	export interface Channel {

		/** Required. URI of the channel. */
		uri?: string | null;
	}

	/** Separate message to accommodate custom formats across IRC and Slack. */
	export interface ChannelFormProperties {

		/** Required. URI of the channel. */
		uri: FormControl<string | null | undefined>,
	}
	export function CreateChannelFormGroup() {
		return new FormGroup<ChannelFormProperties>({
			uri: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Criticality of the Application, Service, or Workload */
	export interface Criticality {

		/** Required. Criticality level. */
		level?: string | null;

		/** Required. Indicates mission-critical Application, Service, or Workload. */
		missionCritical?: boolean | null;
	}

	/** Criticality of the Application, Service, or Workload */
	export interface CriticalityFormProperties {

		/** Required. Criticality level. */
		level: FormControl<string | null | undefined>,

		/** Required. Indicates mission-critical Application, Service, or Workload. */
		missionCritical: FormControl<boolean | null | undefined>,
	}
	export function CreateCriticalityFormGroup() {
		return new FormGroup<CriticalityFormProperties>({
			level: new FormControl<string | null | undefined>(undefined),
			missionCritical: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Environment of the Application, Service, or Workload */
	export interface Environment {

		/** Required. Environment name. */
		environment?: string | null;
	}

	/** Environment of the Application, Service, or Workload */
	export interface EnvironmentFormProperties {

		/** Required. Environment name. */
		environment: FormControl<string | null | undefined>,
	}
	export function CreateEnvironmentFormGroup() {
		return new FormGroup<EnvironmentFormProperties>({
			environment: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Scope of an application. */
	export interface Scope {

		/** Required. Scope Type. */
		type?: ScopeType | null;
	}

	/** Scope of an application. */
	export interface ScopeFormProperties {

		/** Required. Scope Type. */
		type: FormControl<ScopeType | null | undefined>,
	}
	export function CreateScopeFormGroup() {
		return new FormGroup<ScopeFormProperties>({
			type: new FormControl<ScopeType | null | undefined>(undefined),
		});

	}

	export enum ScopeType { TYPE_UNSPECIFIED = 'TYPE_UNSPECIFIED', REGIONAL = 'REGIONAL' }

	export enum ApplicationState { STATE_UNSPECIFIED = 'STATE_UNSPECIFIED', CREATING = 'CREATING', ACTIVE = 'ACTIVE', DELETING = 'DELETING' }


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


	/** Request for DetachServiceProjectAttachment. */
	export interface DetachServiceProjectAttachmentRequest {
	}

	/** Request for DetachServiceProjectAttachment. */
	export interface DetachServiceProjectAttachmentRequestFormProperties {
	}
	export function CreateDetachServiceProjectAttachmentRequestFormGroup() {
		return new FormGroup<DetachServiceProjectAttachmentRequestFormProperties>({
		});

	}


	/** Response for DetachServiceProjectAttachment. */
	export interface DetachServiceProjectAttachmentResponse {
	}

	/** Response for DetachServiceProjectAttachment. */
	export interface DetachServiceProjectAttachmentResponseFormProperties {
	}
	export function CreateDetachServiceProjectAttachmentResponseFormGroup() {
		return new FormGroup<DetachServiceProjectAttachmentResponseFormProperties>({
		});

	}


	/** DiscoveredService is a network/api interface that exposes some functionality to clients for consumption over the network. A discovered service can be registered to a App Hub service. */
	export interface DiscoveredService {

		/** Identifier. The resource name of the discovered service. Format: "projects/{host-project-id}/locations/{location}/discoveredServices/{uuid}"" */
		name?: string | null;

		/** Properties of an underlying cloud resource that can comprise a Service. */
		serviceProperties?: ServiceProperties;

		/** Reference to an underlying networking resource that can comprise a Service. */
		serviceReference?: ServiceReference;
	}

	/** DiscoveredService is a network/api interface that exposes some functionality to clients for consumption over the network. A discovered service can be registered to a App Hub service. */
	export interface DiscoveredServiceFormProperties {

		/** Identifier. The resource name of the discovered service. Format: "projects/{host-project-id}/locations/{location}/discoveredServices/{uuid}"" */
		name: FormControl<string | null | undefined>,
	}
	export function CreateDiscoveredServiceFormGroup() {
		return new FormGroup<DiscoveredServiceFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Properties of an underlying cloud resource that can comprise a Service. */
	export interface ServiceProperties {

		/** Output only. The service project identifier that the underlying cloud resource resides in. */
		gcpProject?: string | null;

		/** Output only. The location that the underlying resource resides in, for example, us-west1. */
		location?: string | null;

		/** Output only. The location that the underlying resource resides in if it is zonal, for example, us-west1-a). */
		zone?: string | null;
	}

	/** Properties of an underlying cloud resource that can comprise a Service. */
	export interface ServicePropertiesFormProperties {

		/** Output only. The service project identifier that the underlying cloud resource resides in. */
		gcpProject: FormControl<string | null | undefined>,

		/** Output only. The location that the underlying resource resides in, for example, us-west1. */
		location: FormControl<string | null | undefined>,

		/** Output only. The location that the underlying resource resides in if it is zonal, for example, us-west1-a). */
		zone: FormControl<string | null | undefined>,
	}
	export function CreateServicePropertiesFormGroup() {
		return new FormGroup<ServicePropertiesFormProperties>({
			gcpProject: new FormControl<string | null | undefined>(undefined),
			location: new FormControl<string | null | undefined>(undefined),
			zone: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Reference to an underlying networking resource that can comprise a Service. */
	export interface ServiceReference {

		/** Output only. Additional path under the resource URI (demultiplexing one resource URI into multiple entries). Smallest unit a policy can be attached to. Examples: URL Map path entry. */
		path?: string | null;

		/** Output only. The underlying resource URI (For example, URI of Forwarding Rule, URL Map, and Backend Service). */
		uri?: string | null;
	}

	/** Reference to an underlying networking resource that can comprise a Service. */
	export interface ServiceReferenceFormProperties {

		/** Output only. Additional path under the resource URI (demultiplexing one resource URI into multiple entries). Smallest unit a policy can be attached to. Examples: URL Map path entry. */
		path: FormControl<string | null | undefined>,

		/** Output only. The underlying resource URI (For example, URI of Forwarding Rule, URL Map, and Backend Service). */
		uri: FormControl<string | null | undefined>,
	}
	export function CreateServiceReferenceFormGroup() {
		return new FormGroup<ServiceReferenceFormProperties>({
			path: new FormControl<string | null | undefined>(undefined),
			uri: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** DiscoveredWorkload is a binary deployment (such as managed instance groups (MIGs) and GKE deployments) that performs the smallest logical subset of business functionality. A discovered workload can be registered to an App Hub Workload. */
	export interface DiscoveredWorkload {

		/** Identifier. The resource name of the discovered workload. Format: "projects/{host-project-id}/locations/{location}/discoveredWorkloads/{uuid}" */
		name?: string | null;

		/** Properties of an underlying compute resource represented by the Workload. */
		workloadProperties?: WorkloadProperties;

		/** Reference of an underlying compute resource represented by the Workload. */
		workloadReference?: WorkloadReference;
	}

	/** DiscoveredWorkload is a binary deployment (such as managed instance groups (MIGs) and GKE deployments) that performs the smallest logical subset of business functionality. A discovered workload can be registered to an App Hub Workload. */
	export interface DiscoveredWorkloadFormProperties {

		/** Identifier. The resource name of the discovered workload. Format: "projects/{host-project-id}/locations/{location}/discoveredWorkloads/{uuid}" */
		name: FormControl<string | null | undefined>,
	}
	export function CreateDiscoveredWorkloadFormGroup() {
		return new FormGroup<DiscoveredWorkloadFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Properties of an underlying compute resource represented by the Workload. */
	export interface WorkloadProperties {

		/** Output only. The service project identifier that the underlying cloud resource resides in. Empty for non cloud resources. */
		gcpProject?: string | null;

		/** Output only. The location that the underlying compute resource resides in (e.g us-west1). */
		location?: string | null;

		/** Output only. The location that the underlying compute resource resides in if it is zonal (e.g us-west1-a). */
		zone?: string | null;
	}

	/** Properties of an underlying compute resource represented by the Workload. */
	export interface WorkloadPropertiesFormProperties {

		/** Output only. The service project identifier that the underlying cloud resource resides in. Empty for non cloud resources. */
		gcpProject: FormControl<string | null | undefined>,

		/** Output only. The location that the underlying compute resource resides in (e.g us-west1). */
		location: FormControl<string | null | undefined>,

		/** Output only. The location that the underlying compute resource resides in if it is zonal (e.g us-west1-a). */
		zone: FormControl<string | null | undefined>,
	}
	export function CreateWorkloadPropertiesFormGroup() {
		return new FormGroup<WorkloadPropertiesFormProperties>({
			gcpProject: new FormControl<string | null | undefined>(undefined),
			location: new FormControl<string | null | undefined>(undefined),
			zone: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Reference of an underlying compute resource represented by the Workload. */
	export interface WorkloadReference {

		/** Output only. The underlying compute resource uri. */
		uri?: string | null;
	}

	/** Reference of an underlying compute resource represented by the Workload. */
	export interface WorkloadReferenceFormProperties {

		/** Output only. The underlying compute resource uri. */
		uri: FormControl<string | null | undefined>,
	}
	export function CreateWorkloadReferenceFormGroup() {
		return new FormGroup<WorkloadReferenceFormProperties>({
			uri: new FormControl<string | null | undefined>(undefined),
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


	/** Response for FindUnregisteredServices. */
	export interface FindUnregisteredServicesResponse {

		/** List of discovered services. */
		discoveredServices?: Array<DiscoveredService>;

		/** A token identifying a page of results the server should return. */
		nextPageToken?: string | null;

		/** Locations that could not be reached. */
		unreachable?: Array<string>;
	}

	/** Response for FindUnregisteredServices. */
	export interface FindUnregisteredServicesResponseFormProperties {

		/** A token identifying a page of results the server should return. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateFindUnregisteredServicesResponseFormGroup() {
		return new FormGroup<FindUnregisteredServicesResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response for FindUnregisteredWorkloads. */
	export interface FindUnregisteredWorkloadsResponse {

		/** List of discovered workloads. */
		discoveredWorkloads?: Array<DiscoveredWorkload>;

		/** A token identifying a page of results the server should return. */
		nextPageToken?: string | null;

		/** Locations that could not be reached. */
		unreachable?: Array<string>;
	}

	/** Response for FindUnregisteredWorkloads. */
	export interface FindUnregisteredWorkloadsResponseFormProperties {

		/** A token identifying a page of results the server should return. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateFindUnregisteredWorkloadsResponseFormGroup() {
		return new FormGroup<FindUnregisteredWorkloadsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response for ListApplications. */
	export interface ListApplicationsResponse {

		/** List of Applications. */
		applications?: Array<Application>;

		/** A token identifying a page of results the server should return. */
		nextPageToken?: string | null;

		/** Locations that could not be reached. */
		unreachable?: Array<string>;
	}

	/** Response for ListApplications. */
	export interface ListApplicationsResponseFormProperties {

		/** A token identifying a page of results the server should return. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListApplicationsResponseFormGroup() {
		return new FormGroup<ListApplicationsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response for ListDiscoveredServices. */
	export interface ListDiscoveredServicesResponse {

		/** List of discovered services. */
		discoveredServices?: Array<DiscoveredService>;

		/** A token identifying a page of results the server should return. */
		nextPageToken?: string | null;

		/** Locations that could not be reached. */
		unreachable?: Array<string>;
	}

	/** Response for ListDiscoveredServices. */
	export interface ListDiscoveredServicesResponseFormProperties {

		/** A token identifying a page of results the server should return. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListDiscoveredServicesResponseFormGroup() {
		return new FormGroup<ListDiscoveredServicesResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response for ListDiscoveredWorkloads. */
	export interface ListDiscoveredWorkloadsResponse {

		/** List of discovered workloads. */
		discoveredWorkloads?: Array<DiscoveredWorkload>;

		/** A token identifying a page of results the server should return. */
		nextPageToken?: string | null;

		/** Locations that could not be reached. */
		unreachable?: Array<string>;
	}

	/** Response for ListDiscoveredWorkloads. */
	export interface ListDiscoveredWorkloadsResponseFormProperties {

		/** A token identifying a page of results the server should return. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListDiscoveredWorkloadsResponseFormGroup() {
		return new FormGroup<ListDiscoveredWorkloadsResponseFormProperties>({
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


	/** Response for ListServiceProjectAttachments. */
	export interface ListServiceProjectAttachmentsResponse {

		/** A token identifying a page of results the server should return. */
		nextPageToken?: string | null;

		/** List of service project attachments. */
		serviceProjectAttachments?: Array<ServiceProjectAttachment>;

		/** Locations that could not be reached. */
		unreachable?: Array<string>;
	}

	/** Response for ListServiceProjectAttachments. */
	export interface ListServiceProjectAttachmentsResponseFormProperties {

		/** A token identifying a page of results the server should return. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListServiceProjectAttachmentsResponseFormGroup() {
		return new FormGroup<ListServiceProjectAttachmentsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** ServiceProjectAttachment represents an attachment from a service project to a host project. Service projects contain the underlying cloud infrastructure resources, and expose these resources to the host project through a ServiceProjectAttachment. With the attachments, the host project can provide an aggregated view of resources across all service projects. */
	export interface ServiceProjectAttachment {

		/** Output only. Create time. */
		createTime?: string | null;

		/** Identifier. The resource name of a ServiceProjectAttachment. Format: "projects/{host-project-id}/locations/global/serviceProjectAttachments/{service-project-id}." */
		name?: string | null;

		/** Required. Immutable. Service project name in the format: "projects/abc" or "projects/123". As input, project name with either project id or number are accepted. As output, this field will contain project number. */
		serviceProject?: string | null;

		/** Output only. ServiceProjectAttachment state. */
		state?: ApplicationState | null;

		/** Output only. A globally unique identifier (in UUID4 format) for the `ServiceProjectAttachment`. */
		uid?: string | null;
	}

	/** ServiceProjectAttachment represents an attachment from a service project to a host project. Service projects contain the underlying cloud infrastructure resources, and expose these resources to the host project through a ServiceProjectAttachment. With the attachments, the host project can provide an aggregated view of resources across all service projects. */
	export interface ServiceProjectAttachmentFormProperties {

		/** Output only. Create time. */
		createTime: FormControl<string | null | undefined>,

		/** Identifier. The resource name of a ServiceProjectAttachment. Format: "projects/{host-project-id}/locations/global/serviceProjectAttachments/{service-project-id}." */
		name: FormControl<string | null | undefined>,

		/** Required. Immutable. Service project name in the format: "projects/abc" or "projects/123". As input, project name with either project id or number are accepted. As output, this field will contain project number. */
		serviceProject: FormControl<string | null | undefined>,

		/** Output only. ServiceProjectAttachment state. */
		state: FormControl<ApplicationState | null | undefined>,

		/** Output only. A globally unique identifier (in UUID4 format) for the `ServiceProjectAttachment`. */
		uid: FormControl<string | null | undefined>,
	}
	export function CreateServiceProjectAttachmentFormGroup() {
		return new FormGroup<ServiceProjectAttachmentFormProperties>({
			createTime: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			serviceProject: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<ApplicationState | null | undefined>(undefined),
			uid: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response for ListServices. */
	export interface ListServicesResponse {

		/** A token identifying a page of results the server should return. */
		nextPageToken?: string | null;

		/** List of Services. */
		services?: Array<Service>;

		/** Locations that could not be reached. */
		unreachable?: Array<string>;
	}

	/** Response for ListServices. */
	export interface ListServicesResponseFormProperties {

		/** A token identifying a page of results the server should return. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListServicesResponseFormGroup() {
		return new FormGroup<ListServicesResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Service is an App Hub data model that contains a discovered service, which represents a network/api interface that exposes some functionality to clients for consumption over the network. */
	export interface Service {

		/** Consumer provided attributes. */
		attributes?: Attributes;

		/** Output only. Create time. */
		createTime?: string | null;

		/** Optional. User-defined description of a Service. */
		description?: string | null;

		/** Required. Immutable. The resource name of the original discovered service. */
		discoveredService?: string | null;

		/** Optional. User-defined name for the Service. */
		displayName?: string | null;

		/** Identifier. The resource name of a Service. Format: "projects/{host-project-id}/locations/{location}/applications/{application-id}/services/{service-id}" */
		name?: string | null;

		/** Properties of an underlying cloud resource that can comprise a Service. */
		serviceProperties?: ServiceProperties;

		/** Reference to an underlying networking resource that can comprise a Service. */
		serviceReference?: ServiceReference;

		/** Output only. Service state. */
		state?: ServiceState | null;

		/** Output only. A universally unique identifier (UUID) for the `Service` in the UUID4 format. */
		uid?: string | null;

		/** Output only. Update time. */
		updateTime?: string | null;
	}

	/** Service is an App Hub data model that contains a discovered service, which represents a network/api interface that exposes some functionality to clients for consumption over the network. */
	export interface ServiceFormProperties {

		/** Output only. Create time. */
		createTime: FormControl<string | null | undefined>,

		/** Optional. User-defined description of a Service. */
		description: FormControl<string | null | undefined>,

		/** Required. Immutable. The resource name of the original discovered service. */
		discoveredService: FormControl<string | null | undefined>,

		/** Optional. User-defined name for the Service. */
		displayName: FormControl<string | null | undefined>,

		/** Identifier. The resource name of a Service. Format: "projects/{host-project-id}/locations/{location}/applications/{application-id}/services/{service-id}" */
		name: FormControl<string | null | undefined>,

		/** Output only. Service state. */
		state: FormControl<ServiceState | null | undefined>,

		/** Output only. A universally unique identifier (UUID) for the `Service` in the UUID4 format. */
		uid: FormControl<string | null | undefined>,

		/** Output only. Update time. */
		updateTime: FormControl<string | null | undefined>,
	}
	export function CreateServiceFormGroup() {
		return new FormGroup<ServiceFormProperties>({
			createTime: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			discoveredService: new FormControl<string | null | undefined>(undefined),
			displayName: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<ServiceState | null | undefined>(undefined),
			uid: new FormControl<string | null | undefined>(undefined),
			updateTime: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ServiceState { STATE_UNSPECIFIED = 'STATE_UNSPECIFIED', CREATING = 'CREATING', ACTIVE = 'ACTIVE', DELETING = 'DELETING', DETACHED = 'DETACHED' }


	/** Response for ListWorkloads. */
	export interface ListWorkloadsResponse {

		/** A token identifying a page of results the server should return. */
		nextPageToken?: string | null;

		/** Locations that could not be reached. */
		unreachable?: Array<string>;

		/** List of Workloads. */
		workloads?: Array<Workload>;
	}

	/** Response for ListWorkloads. */
	export interface ListWorkloadsResponseFormProperties {

		/** A token identifying a page of results the server should return. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListWorkloadsResponseFormGroup() {
		return new FormGroup<ListWorkloadsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Workload is an App Hub data model that contains a discovered workload, which represents a binary deployment (such as managed instance groups (MIGs) and GKE deployments) that performs the smallest logical subset of business functionality. */
	export interface Workload {

		/** Consumer provided attributes. */
		attributes?: Attributes;

		/** Output only. Create time. */
		createTime?: string | null;

		/** Optional. User-defined description of a Workload. */
		description?: string | null;

		/** Required. Immutable. The resource name of the original discovered workload. */
		discoveredWorkload?: string | null;

		/** Optional. User-defined name for the Workload. */
		displayName?: string | null;

		/** Identifier. The resource name of the Workload. Format: "projects/{host-project-id}/locations/{location}/applications/{application-id}/workloads/{workload-id}" */
		name?: string | null;

		/** Output only. Workload state. */
		state?: ServiceState | null;

		/** Output only. A universally unique identifier (UUID) for the `Workload` in the UUID4 format. */
		uid?: string | null;

		/** Output only. Update time. */
		updateTime?: string | null;

		/** Properties of an underlying compute resource represented by the Workload. */
		workloadProperties?: WorkloadProperties;

		/** Reference of an underlying compute resource represented by the Workload. */
		workloadReference?: WorkloadReference;
	}

	/** Workload is an App Hub data model that contains a discovered workload, which represents a binary deployment (such as managed instance groups (MIGs) and GKE deployments) that performs the smallest logical subset of business functionality. */
	export interface WorkloadFormProperties {

		/** Output only. Create time. */
		createTime: FormControl<string | null | undefined>,

		/** Optional. User-defined description of a Workload. */
		description: FormControl<string | null | undefined>,

		/** Required. Immutable. The resource name of the original discovered workload. */
		discoveredWorkload: FormControl<string | null | undefined>,

		/** Optional. User-defined name for the Workload. */
		displayName: FormControl<string | null | undefined>,

		/** Identifier. The resource name of the Workload. Format: "projects/{host-project-id}/locations/{location}/applications/{application-id}/workloads/{workload-id}" */
		name: FormControl<string | null | undefined>,

		/** Output only. Workload state. */
		state: FormControl<ServiceState | null | undefined>,

		/** Output only. A universally unique identifier (UUID) for the `Workload` in the UUID4 format. */
		uid: FormControl<string | null | undefined>,

		/** Output only. Update time. */
		updateTime: FormControl<string | null | undefined>,
	}
	export function CreateWorkloadFormGroup() {
		return new FormGroup<WorkloadFormProperties>({
			createTime: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			discoveredWorkload: new FormControl<string | null | undefined>(undefined),
			displayName: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<ServiceState | null | undefined>(undefined),
			uid: new FormControl<string | null | undefined>(undefined),
			updateTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response for LookupServiceProjectAttachment. */
	export interface LookupServiceProjectAttachmentResponse {

		/** ServiceProjectAttachment represents an attachment from a service project to a host project. Service projects contain the underlying cloud infrastructure resources, and expose these resources to the host project through a ServiceProjectAttachment. With the attachments, the host project can provide an aggregated view of resources across all service projects. */
		serviceProjectAttachment?: ServiceProjectAttachment;
	}

	/** Response for LookupServiceProjectAttachment. */
	export interface LookupServiceProjectAttachmentResponseFormProperties {
	}
	export function CreateLookupServiceProjectAttachmentResponseFormGroup() {
		return new FormGroup<LookupServiceProjectAttachmentResponseFormProperties>({
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
		 * Deletes a service project attached to the host project.
		 * Delete v1alpha/{name}
		 * @param {string} name Required. Value for name.
		 * @param {string} requestId Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes after the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
		 * @return {Operation} Successful response
		 */
		Apphub_projects_locations_serviceProjectAttachments_delete(name: string, requestId: string | null | undefined): Observable<Operation> {
			return this.http.delete<Operation>(this.baseUri + 'v1alpha/' + (name == null ? '' : encodeURIComponent(name)) + '&requestId=' + (requestId == null ? '' : encodeURIComponent(requestId)), {});
		}

		/**
		 * Gets a service project attached to the host project.
		 * Get v1alpha/{name}
		 * @param {string} name Required. Value for name.
		 * @return {ServiceProjectAttachment} Successful response
		 */
		Apphub_projects_locations_serviceProjectAttachments_get(name: string): Observable<ServiceProjectAttachment> {
			return this.http.get<ServiceProjectAttachment>(this.baseUri + 'v1alpha/' + (name == null ? '' : encodeURIComponent(name)), {});
		}

		/**
		 * Updates a Workload in an Application.
		 * Patch v1alpha/{name}
		 * @param {string} name Identifier. The resource name of the Workload. Format: "projects/{host-project-id}/locations/{location}/applications/{application-id}/workloads/{workload-id}"
		 * @param {string} requestId Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
		 * @param {string} updateMask Required. Field mask is used to specify the fields to be overwritten in the Workload resource by the update. The fields specified in the update_mask are relative to the resource, not the full request. The API changes the values of the fields as specified in the update_mask. The API ignores the values of all fields not covered by the update_mask. You can also unset a field by not specifying it in the updated message, but adding the field to the mask. This clears whatever value the field previously had.
		 * @return {Operation} Successful response
		 */
		Apphub_projects_locations_applications_workloads_patch(name: string, requestId: string | null | undefined, updateMask: string | null | undefined, requestBody: Workload): Observable<Operation> {
			return this.http.patch<Operation>(this.baseUri + 'v1alpha/' + (name == null ? '' : encodeURIComponent(name)) + '&requestId=' + (requestId == null ? '' : encodeURIComponent(requestId)) + '&updateMask=' + (updateMask == null ? '' : encodeURIComponent(updateMask)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists information about the supported locations for this service.
		 * Get v1alpha/{name}/locations
		 * @param {string} name The resource that owns the locations collection, if applicable.
		 * @param {string} filter A filter to narrow down results to a preferred subset. The filtering language accepts strings like `"displayName=tokyo"`, and is documented in more detail in [AIP-160](https://google.aip.dev/160).
		 * @param {number} pageSize The maximum number of results to return. If not set, the service selects a default.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} pageToken A page token received from the `next_page_token` field in the response. Send that page token to receive the subsequent page.
		 * @return {ListLocationsResponse} Successful response
		 */
		Apphub_projects_locations_list(name: string, filter: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListLocationsResponse> {
			return this.http.get<ListLocationsResponse>(this.baseUri + 'v1alpha/' + (name == null ? '' : encodeURIComponent(name)) + '/locations&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
		 * Get v1alpha/{name}/operations
		 * @param {string} name The name of the operation's parent resource.
		 * @param {string} filter The standard list filter.
		 * @param {number} pageSize The standard list page size.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} pageToken The standard list page token.
		 * @return {ListOperationsResponse} Successful response
		 */
		Apphub_projects_locations_operations_list(name: string, filter: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListOperationsResponse> {
			return this.http.get<ListOperationsResponse>(this.baseUri + 'v1alpha/' + (name == null ? '' : encodeURIComponent(name)) + '/operations&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
		 * Post v1alpha/{name}:cancel
		 * @param {string} name The name of the operation resource to be cancelled.
		 * @return {Empty} Successful response
		 */
		Apphub_projects_locations_operations_cancel(name: string, requestBody: CancelOperationRequest): Observable<Empty> {
			return this.http.post<Empty>(this.baseUri + 'v1alpha/' + (name == null ? '' : encodeURIComponent(name)) + ':cancel', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Detaches a service project from a host project. You can call this API from either a host or service project.
		 * Post v1alpha/{name}:detachServiceProjectAttachment
		 * @param {string} name Required. Value for name.
		 * @return {DetachServiceProjectAttachmentResponse} Successful response
		 */
		Apphub_projects_locations_detachServiceProjectAttachment(name: string, requestBody: DetachServiceProjectAttachmentRequest): Observable<DetachServiceProjectAttachmentResponse> {
			return this.http.post<DetachServiceProjectAttachmentResponse>(this.baseUri + 'v1alpha/' + (name == null ? '' : encodeURIComponent(name)) + ':detachServiceProjectAttachment', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Looks up a service project attachment. You can call this API from either a host or service project.
		 * Get v1alpha/{name}:lookupServiceProjectAttachment
		 * @param {string} name Required. Value for name.
		 * @return {LookupServiceProjectAttachmentResponse} Successful response
		 */
		Apphub_projects_locations_lookupServiceProjectAttachment(name: string): Observable<LookupServiceProjectAttachmentResponse> {
			return this.http.get<LookupServiceProjectAttachmentResponse>(this.baseUri + 'v1alpha/' + (name == null ? '' : encodeURIComponent(name)) + ':lookupServiceProjectAttachment', {});
		}

		/**
		 * Lists Applications in a host project and location.
		 * Get v1alpha/{parent}/applications
		 * @param {string} parent Required. Value for parent.
		 * @param {string} filter Optional. Filtering results
		 * @param {string} orderBy Optional. Hint for how to order the results
		 * @param {number} pageSize Optional. Requested page size. Server may return fewer items than requested. If unspecified, server will pick an appropriate default.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} pageToken Optional. A token identifying a page of results the server should return.
		 * @return {ListApplicationsResponse} Successful response
		 */
		Apphub_projects_locations_applications_list(parent: string, filter: string | null | undefined, orderBy: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListApplicationsResponse> {
			return this.http.get<ListApplicationsResponse>(this.baseUri + 'v1alpha/' + (parent == null ? '' : encodeURIComponent(parent)) + '/applications&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&orderBy=' + (orderBy == null ? '' : encodeURIComponent(orderBy)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Creates an Application in a host project and location.
		 * Post v1alpha/{parent}/applications
		 * @param {string} parent Required. Value for parent.
		 * @param {string} applicationId Required. The Application identifier.
		 * @param {string} requestId Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
		 * @return {Operation} Successful response
		 */
		Apphub_projects_locations_applications_create(parent: string, applicationId: string | null | undefined, requestId: string | null | undefined, requestBody: Application): Observable<Operation> {
			return this.http.post<Operation>(this.baseUri + 'v1alpha/' + (parent == null ? '' : encodeURIComponent(parent)) + '/applications&applicationId=' + (applicationId == null ? '' : encodeURIComponent(applicationId)) + '&requestId=' + (requestId == null ? '' : encodeURIComponent(requestId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists discovered services in a host project and location.
		 * Get v1alpha/{parent}/discoveredServices
		 * @param {string} parent Required. Value for parent.
		 * @param {string} filter Optional. Filtering results
		 * @param {string} orderBy Optional. Hint for how to order the results
		 * @param {number} pageSize Optional. Requested page size. Server may return fewer items than requested. If unspecified, server will pick an appropriate default.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} pageToken Optional. A token identifying a page of results the server should return.
		 * @return {ListDiscoveredServicesResponse} Successful response
		 */
		Apphub_projects_locations_discoveredServices_list(parent: string, filter: string | null | undefined, orderBy: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListDiscoveredServicesResponse> {
			return this.http.get<ListDiscoveredServicesResponse>(this.baseUri + 'v1alpha/' + (parent == null ? '' : encodeURIComponent(parent)) + '/discoveredServices&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&orderBy=' + (orderBy == null ? '' : encodeURIComponent(orderBy)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Finds unregistered services in a host project and location.
		 * Get v1alpha/{parent}/discoveredServices:findUnregistered
		 * @param {string} parent Required. Value for parent.
		 * @param {string} filter Optional. Filtering results
		 * @param {string} orderBy Optional. Hint for how to order the results
		 * @param {number} pageSize Optional. Requested page size. Server may return fewer items than requested. If unspecified, server will pick an appropriate default.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} pageToken Optional. A token identifying a page of results the server should return.
		 * @return {FindUnregisteredServicesResponse} Successful response
		 */
		Apphub_projects_locations_discoveredServices_findUnregistered(parent: string, filter: string | null | undefined, orderBy: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<FindUnregisteredServicesResponse> {
			return this.http.get<FindUnregisteredServicesResponse>(this.baseUri + 'v1alpha/' + (parent == null ? '' : encodeURIComponent(parent)) + '/discoveredServices:findUnregistered&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&orderBy=' + (orderBy == null ? '' : encodeURIComponent(orderBy)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Lists discovered workloads in a host project and location.
		 * Get v1alpha/{parent}/discoveredWorkloads
		 * @param {string} parent Required. Value for parent.
		 * @param {string} filter Optional. Filtering results
		 * @param {string} orderBy Optional. Hint for how to order the results
		 * @param {number} pageSize Optional. Requested page size. Server may return fewer items than requested. If unspecified, server will pick an appropriate default.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} pageToken Optional. A token identifying a page of results the server should return.
		 * @return {ListDiscoveredWorkloadsResponse} Successful response
		 */
		Apphub_projects_locations_discoveredWorkloads_list(parent: string, filter: string | null | undefined, orderBy: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListDiscoveredWorkloadsResponse> {
			return this.http.get<ListDiscoveredWorkloadsResponse>(this.baseUri + 'v1alpha/' + (parent == null ? '' : encodeURIComponent(parent)) + '/discoveredWorkloads&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&orderBy=' + (orderBy == null ? '' : encodeURIComponent(orderBy)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Finds unregistered workloads in a host project and location.
		 * Get v1alpha/{parent}/discoveredWorkloads:findUnregistered
		 * @param {string} parent Required. Value for parent.
		 * @param {string} filter Optional. Filtering results
		 * @param {string} orderBy Optional. Hint for how to order the results
		 * @param {number} pageSize Optional. Requested page size. Server may return fewer items than requested. If unspecified, server will pick an appropriate default.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} pageToken Optional. A token identifying a page of results the server should return.
		 * @return {FindUnregisteredWorkloadsResponse} Successful response
		 */
		Apphub_projects_locations_discoveredWorkloads_findUnregistered(parent: string, filter: string | null | undefined, orderBy: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<FindUnregisteredWorkloadsResponse> {
			return this.http.get<FindUnregisteredWorkloadsResponse>(this.baseUri + 'v1alpha/' + (parent == null ? '' : encodeURIComponent(parent)) + '/discoveredWorkloads:findUnregistered&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&orderBy=' + (orderBy == null ? '' : encodeURIComponent(orderBy)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * List service projects attached to the host project.
		 * Get v1alpha/{parent}/serviceProjectAttachments
		 * @param {string} parent Required. Value for parent.
		 * @param {string} filter Optional. Filtering results
		 * @param {string} orderBy Optional. Hint for how to order the results
		 * @param {number} pageSize Optional. Requested page size. Server may return fewer items than requested. If unspecified, server will pick an appropriate default.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} pageToken Optional. A token identifying a page of results the server should return.
		 * @return {ListServiceProjectAttachmentsResponse} Successful response
		 */
		Apphub_projects_locations_serviceProjectAttachments_list(parent: string, filter: string | null | undefined, orderBy: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListServiceProjectAttachmentsResponse> {
			return this.http.get<ListServiceProjectAttachmentsResponse>(this.baseUri + 'v1alpha/' + (parent == null ? '' : encodeURIComponent(parent)) + '/serviceProjectAttachments&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&orderBy=' + (orderBy == null ? '' : encodeURIComponent(orderBy)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Attaches a service project to the host project.
		 * Post v1alpha/{parent}/serviceProjectAttachments
		 * @param {string} parent Required. Value for parent.
		 * @param {string} requestId Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
		 * @param {string} serviceProjectAttachmentId Required. The service project attachment identifier must contain the project_id of the service project specified in the service_project_attachment.service_project field. Hint: "projects/{project_id}"
		 * @return {Operation} Successful response
		 */
		Apphub_projects_locations_serviceProjectAttachments_create(parent: string, requestId: string | null | undefined, serviceProjectAttachmentId: string | null | undefined, requestBody: ServiceProjectAttachment): Observable<Operation> {
			return this.http.post<Operation>(this.baseUri + 'v1alpha/' + (parent == null ? '' : encodeURIComponent(parent)) + '/serviceProjectAttachments&requestId=' + (requestId == null ? '' : encodeURIComponent(requestId)) + '&serviceProjectAttachmentId=' + (serviceProjectAttachmentId == null ? '' : encodeURIComponent(serviceProjectAttachmentId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * List Services in an Application.
		 * Get v1alpha/{parent}/services
		 * @param {string} parent Required. Value for parent.
		 * @param {string} filter Optional. Filtering results
		 * @param {string} orderBy Optional. Hint for how to order the results
		 * @param {number} pageSize Optional. Requested page size. Server may return fewer items than requested. If unspecified, server will pick an appropriate default.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} pageToken Optional. A token identifying a page of results the server should return.
		 * @return {ListServicesResponse} Successful response
		 */
		Apphub_projects_locations_applications_services_list(parent: string, filter: string | null | undefined, orderBy: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListServicesResponse> {
			return this.http.get<ListServicesResponse>(this.baseUri + 'v1alpha/' + (parent == null ? '' : encodeURIComponent(parent)) + '/services&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&orderBy=' + (orderBy == null ? '' : encodeURIComponent(orderBy)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Creates a Service in an Application.
		 * Post v1alpha/{parent}/services
		 * @param {string} parent Required. Value for parent.
		 * @param {string} requestId Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
		 * @param {string} serviceId Required. The Service identifier.
		 * @return {Operation} Successful response
		 */
		Apphub_projects_locations_applications_services_create(parent: string, requestId: string | null | undefined, serviceId: string | null | undefined, requestBody: Service): Observable<Operation> {
			return this.http.post<Operation>(this.baseUri + 'v1alpha/' + (parent == null ? '' : encodeURIComponent(parent)) + '/services&requestId=' + (requestId == null ? '' : encodeURIComponent(requestId)) + '&serviceId=' + (serviceId == null ? '' : encodeURIComponent(serviceId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists Workloads in an Application.
		 * Get v1alpha/{parent}/workloads
		 * @param {string} parent Required. Value for parent.
		 * @param {string} filter Optional. Filtering results
		 * @param {string} orderBy Optional. Hint for how to order the results
		 * @param {number} pageSize Optional. Requested page size. Server may return fewer items than requested. If unspecified, server will pick an appropriate default.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} pageToken Optional. A token identifying a page of results the server should return.
		 * @return {ListWorkloadsResponse} Successful response
		 */
		Apphub_projects_locations_applications_workloads_list(parent: string, filter: string | null | undefined, orderBy: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListWorkloadsResponse> {
			return this.http.get<ListWorkloadsResponse>(this.baseUri + 'v1alpha/' + (parent == null ? '' : encodeURIComponent(parent)) + '/workloads&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&orderBy=' + (orderBy == null ? '' : encodeURIComponent(orderBy)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Creates a Workload in an Application.
		 * Post v1alpha/{parent}/workloads
		 * @param {string} parent Required. Value for parent.
		 * @param {string} requestId Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
		 * @param {string} workloadId Required. The Workload identifier.
		 * @return {Operation} Successful response
		 */
		Apphub_projects_locations_applications_workloads_create(parent: string, requestId: string | null | undefined, workloadId: string | null | undefined, requestBody: Workload): Observable<Operation> {
			return this.http.post<Operation>(this.baseUri + 'v1alpha/' + (parent == null ? '' : encodeURIComponent(parent)) + '/workloads&requestId=' + (requestId == null ? '' : encodeURIComponent(requestId)) + '&workloadId=' + (workloadId == null ? '' : encodeURIComponent(workloadId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
		 * Get v1alpha/{resource}:getIamPolicy
		 * @param {string} resource REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
		 * @param {number} options_requestedPolicyVersion Optional. The maximum policy version that will be used to format the policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset. The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies).
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {Policy} Successful response
		 */
		Apphub_projects_locations_applications_getIamPolicy(resource: string, options_requestedPolicyVersion: number | null | undefined): Observable<Policy> {
			return this.http.get<Policy>(this.baseUri + 'v1alpha/' + (resource == null ? '' : encodeURIComponent(resource)) + ':getIamPolicy&options_requestedPolicyVersion=' + options_requestedPolicyVersion, {});
		}

		/**
		 * Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
		 * Post v1alpha/{resource}:setIamPolicy
		 * @param {string} resource REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
		 * @return {Policy} Successful response
		 */
		Apphub_projects_locations_applications_setIamPolicy(resource: string, requestBody: SetIamPolicyRequest): Observable<Policy> {
			return this.http.post<Policy>(this.baseUri + 'v1alpha/' + (resource == null ? '' : encodeURIComponent(resource)) + ':setIamPolicy', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
		 * Post v1alpha/{resource}:testIamPermissions
		 * @param {string} resource REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
		 * @return {TestIamPermissionsResponse} Successful response
		 */
		Apphub_projects_locations_applications_testIamPermissions(resource: string, requestBody: TestIamPermissionsRequest): Observable<TestIamPermissionsResponse> {
			return this.http.post<TestIamPermissionsResponse>(this.baseUri + 'v1alpha/' + (resource == null ? '' : encodeURIComponent(resource)) + ':testIamPermissions', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

}

