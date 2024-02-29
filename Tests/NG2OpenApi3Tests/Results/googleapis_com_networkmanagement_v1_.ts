import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** Details of the final state "abort" and associated resource. */
	export interface AbortInfo {

		/** Causes that the analysis is aborted. */
		cause?: AbortInfoCause | null;

		/** List of project IDs that the user has specified in the request but does not have permission to access network configs. Analysis is aborted in this case with the PERMISSION_DENIED cause. */
		projectsMissingPermission?: Array<string>;

		/** URI of the resource that caused the abort. */
		resourceUri?: string | null;
	}

	/** Details of the final state "abort" and associated resource. */
	export interface AbortInfoFormProperties {

		/** Causes that the analysis is aborted. */
		cause: FormControl<AbortInfoCause | null | undefined>,

		/** URI of the resource that caused the abort. */
		resourceUri: FormControl<string | null | undefined>,
	}
	export function CreateAbortInfoFormGroup() {
		return new FormGroup<AbortInfoFormProperties>({
			cause: new FormControl<AbortInfoCause | null | undefined>(undefined),
			resourceUri: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum AbortInfoCause { CAUSE_UNSPECIFIED = 'CAUSE_UNSPECIFIED', UNKNOWN_NETWORK = 'UNKNOWN_NETWORK', UNKNOWN_IP = 'UNKNOWN_IP', UNKNOWN_PROJECT = 'UNKNOWN_PROJECT', PERMISSION_DENIED = 'PERMISSION_DENIED', NO_SOURCE_LOCATION = 'NO_SOURCE_LOCATION', INVALID_ARGUMENT = 'INVALID_ARGUMENT', NO_EXTERNAL_IP = 'NO_EXTERNAL_IP', UNINTENDED_DESTINATION = 'UNINTENDED_DESTINATION', TRACE_TOO_LONG = 'TRACE_TOO_LONG', INTERNAL_ERROR = 'INTERNAL_ERROR', SOURCE_ENDPOINT_NOT_FOUND = 'SOURCE_ENDPOINT_NOT_FOUND', MISMATCHED_SOURCE_NETWORK = 'MISMATCHED_SOURCE_NETWORK', DESTINATION_ENDPOINT_NOT_FOUND = 'DESTINATION_ENDPOINT_NOT_FOUND', MISMATCHED_DESTINATION_NETWORK = 'MISMATCHED_DESTINATION_NETWORK', UNSUPPORTED = 'UNSUPPORTED', MISMATCHED_IP_VERSION = 'MISMATCHED_IP_VERSION', GKE_KONNECTIVITY_PROXY_UNSUPPORTED = 'GKE_KONNECTIVITY_PROXY_UNSUPPORTED', RESOURCE_CONFIG_NOT_FOUND = 'RESOURCE_CONFIG_NOT_FOUND', GOOGLE_MANAGED_SERVICE_AMBIGUOUS_PSC_ENDPOINT = 'GOOGLE_MANAGED_SERVICE_AMBIGUOUS_PSC_ENDPOINT', SOURCE_PSC_CLOUD_SQL_UNSUPPORTED = 'SOURCE_PSC_CLOUD_SQL_UNSUPPORTED', SOURCE_FORWARDING_RULE_UNSUPPORTED = 'SOURCE_FORWARDING_RULE_UNSUPPORTED', NON_ROUTABLE_IP_ADDRESS = 'NON_ROUTABLE_IP_ADDRESS' }


	/** Wrapper for the App Engine service version attributes. */
	export interface AppEngineVersionEndpoint {

		/** An [App Engine](https://cloud.google.com/appengine) [service version](https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1/apps.services.versions) name. */
		uri?: string | null;
	}

	/** Wrapper for the App Engine service version attributes. */
	export interface AppEngineVersionEndpointFormProperties {

		/** An [App Engine](https://cloud.google.com/appengine) [service version](https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1/apps.services.versions) name. */
		uri: FormControl<string | null | undefined>,
	}
	export function CreateAppEngineVersionEndpointFormGroup() {
		return new FormGroup<AppEngineVersionEndpointFormProperties>({
			uri: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** For display only. Metadata associated with an App Engine version. */
	export interface AppEngineVersionInfo {

		/** Name of an App Engine version. */
		displayName?: string | null;

		/** App Engine execution environment for a version. */
		environment?: string | null;

		/** Runtime of the App Engine version. */
		runtime?: string | null;

		/** URI of an App Engine version. */
		uri?: string | null;
	}

	/** For display only. Metadata associated with an App Engine version. */
	export interface AppEngineVersionInfoFormProperties {

		/** Name of an App Engine version. */
		displayName: FormControl<string | null | undefined>,

		/** App Engine execution environment for a version. */
		environment: FormControl<string | null | undefined>,

		/** Runtime of the App Engine version. */
		runtime: FormControl<string | null | undefined>,

		/** URI of an App Engine version. */
		uri: FormControl<string | null | undefined>,
	}
	export function CreateAppEngineVersionInfoFormGroup() {
		return new FormGroup<AppEngineVersionInfoFormProperties>({
			displayName: new FormControl<string | null | undefined>(undefined),
			environment: new FormControl<string | null | undefined>(undefined),
			runtime: new FormControl<string | null | undefined>(undefined),
			uri: new FormControl<string | null | undefined>(undefined),
		});

	}


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


	/** Wrapper for Cloud Function attributes. */
	export interface CloudFunctionEndpoint {

		/** A [Cloud Function](https://cloud.google.com/functions) name. */
		uri?: string | null;
	}

	/** Wrapper for Cloud Function attributes. */
	export interface CloudFunctionEndpointFormProperties {

		/** A [Cloud Function](https://cloud.google.com/functions) name. */
		uri: FormControl<string | null | undefined>,
	}
	export function CreateCloudFunctionEndpointFormGroup() {
		return new FormGroup<CloudFunctionEndpointFormProperties>({
			uri: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** For display only. Metadata associated with a Cloud Function. */
	export interface CloudFunctionInfo {

		/** Name of a Cloud Function. */
		displayName?: string | null;

		/** Location in which the Cloud Function is deployed. */
		location?: string | null;

		/** URI of a Cloud Function. */
		uri?: string | null;

		/** Latest successfully deployed version id of the Cloud Function. */
		versionId?: string | null;
	}

	/** For display only. Metadata associated with a Cloud Function. */
	export interface CloudFunctionInfoFormProperties {

		/** Name of a Cloud Function. */
		displayName: FormControl<string | null | undefined>,

		/** Location in which the Cloud Function is deployed. */
		location: FormControl<string | null | undefined>,

		/** URI of a Cloud Function. */
		uri: FormControl<string | null | undefined>,

		/** Latest successfully deployed version id of the Cloud Function. */
		versionId: FormControl<string | null | undefined>,
	}
	export function CreateCloudFunctionInfoFormGroup() {
		return new FormGroup<CloudFunctionInfoFormProperties>({
			displayName: new FormControl<string | null | undefined>(undefined),
			location: new FormControl<string | null | undefined>(undefined),
			uri: new FormControl<string | null | undefined>(undefined),
			versionId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Wrapper for Cloud Run revision attributes. */
	export interface CloudRunRevisionEndpoint {

		/** A [Cloud Run](https://cloud.google.com/run) [revision](https://cloud.google.com/run/docs/reference/rest/v1/namespaces.revisions/get) URI. The format is: projects/{project}/locations/{location}/revisions/{revision} */
		uri?: string | null;
	}

	/** Wrapper for Cloud Run revision attributes. */
	export interface CloudRunRevisionEndpointFormProperties {

		/** A [Cloud Run](https://cloud.google.com/run) [revision](https://cloud.google.com/run/docs/reference/rest/v1/namespaces.revisions/get) URI. The format is: projects/{project}/locations/{location}/revisions/{revision} */
		uri: FormControl<string | null | undefined>,
	}
	export function CreateCloudRunRevisionEndpointFormGroup() {
		return new FormGroup<CloudRunRevisionEndpointFormProperties>({
			uri: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** For display only. Metadata associated with a Cloud Run revision. */
	export interface CloudRunRevisionInfo {

		/** Name of a Cloud Run revision. */
		displayName?: string | null;

		/** Location in which this revision is deployed. */
		location?: string | null;

		/** URI of Cloud Run service this revision belongs to. */
		serviceUri?: string | null;

		/** URI of a Cloud Run revision. */
		uri?: string | null;
	}

	/** For display only. Metadata associated with a Cloud Run revision. */
	export interface CloudRunRevisionInfoFormProperties {

		/** Name of a Cloud Run revision. */
		displayName: FormControl<string | null | undefined>,

		/** Location in which this revision is deployed. */
		location: FormControl<string | null | undefined>,

		/** URI of Cloud Run service this revision belongs to. */
		serviceUri: FormControl<string | null | undefined>,

		/** URI of a Cloud Run revision. */
		uri: FormControl<string | null | undefined>,
	}
	export function CreateCloudRunRevisionInfoFormGroup() {
		return new FormGroup<CloudRunRevisionInfoFormProperties>({
			displayName: new FormControl<string | null | undefined>(undefined),
			location: new FormControl<string | null | undefined>(undefined),
			serviceUri: new FormControl<string | null | undefined>(undefined),
			uri: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** For display only. Metadata associated with a Cloud SQL instance. */
	export interface CloudSQLInstanceInfo {

		/** Name of a Cloud SQL instance. */
		displayName?: string | null;

		/** External IP address of a Cloud SQL instance. */
		externalIp?: string | null;

		/** Internal IP address of a Cloud SQL instance. */
		internalIp?: string | null;

		/** URI of a Cloud SQL instance network or empty string if the instance does not have one. */
		networkUri?: string | null;

		/** Region in which the Cloud SQL instance is running. */
		region?: string | null;

		/** URI of a Cloud SQL instance. */
		uri?: string | null;
	}

	/** For display only. Metadata associated with a Cloud SQL instance. */
	export interface CloudSQLInstanceInfoFormProperties {

		/** Name of a Cloud SQL instance. */
		displayName: FormControl<string | null | undefined>,

		/** External IP address of a Cloud SQL instance. */
		externalIp: FormControl<string | null | undefined>,

		/** Internal IP address of a Cloud SQL instance. */
		internalIp: FormControl<string | null | undefined>,

		/** URI of a Cloud SQL instance network or empty string if the instance does not have one. */
		networkUri: FormControl<string | null | undefined>,

		/** Region in which the Cloud SQL instance is running. */
		region: FormControl<string | null | undefined>,

		/** URI of a Cloud SQL instance. */
		uri: FormControl<string | null | undefined>,
	}
	export function CreateCloudSQLInstanceInfoFormGroup() {
		return new FormGroup<CloudSQLInstanceInfoFormProperties>({
			displayName: new FormControl<string | null | undefined>(undefined),
			externalIp: new FormControl<string | null | undefined>(undefined),
			internalIp: new FormControl<string | null | undefined>(undefined),
			networkUri: new FormControl<string | null | undefined>(undefined),
			region: new FormControl<string | null | undefined>(undefined),
			uri: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A Connectivity Test for a network reachability analysis. */
	export interface ConnectivityTest {

		/** Output only. The time the test was created. */
		createTime?: string | null;

		/** The user-supplied description of the Connectivity Test. Maximum of 512 characters. */
		description?: string | null;

		/** Source or destination of the Connectivity Test. */
		destination?: Endpoint;

		/** Output only. The display name of a Connectivity Test. */
		displayName?: string | null;

		/** Resource labels to represent user-provided metadata. */
		labels?: {[id: string]: string };

		/** Required. Unique name of the resource using the form: `projects/{project_id}/locations/global/connectivityTests/{test_id}` */
		name?: string | null;

		/** Results of active probing from the last run of the test. */
		probingDetails?: ProbingDetails;

		/** IP Protocol of the test. When not provided, "TCP" is assumed. */
		protocol?: string | null;

		/** Results of the configuration analysis from the last run of the test. */
		reachabilityDetails?: ReachabilityDetails;

		/** Other projects that may be relevant for reachability analysis. This is applicable to scenarios where a test can cross project boundaries. */
		relatedProjects?: Array<string>;

		/** Source or destination of the Connectivity Test. */
		source?: Endpoint;

		/** Output only. The time the test's configuration was updated. */
		updateTime?: string | null;
	}

	/** A Connectivity Test for a network reachability analysis. */
	export interface ConnectivityTestFormProperties {

		/** Output only. The time the test was created. */
		createTime: FormControl<string | null | undefined>,

		/** The user-supplied description of the Connectivity Test. Maximum of 512 characters. */
		description: FormControl<string | null | undefined>,

		/** Output only. The display name of a Connectivity Test. */
		displayName: FormControl<string | null | undefined>,

		/** Resource labels to represent user-provided metadata. */
		labels: FormControl<{[id: string]: string } | null | undefined>,

		/** Required. Unique name of the resource using the form: `projects/{project_id}/locations/global/connectivityTests/{test_id}` */
		name: FormControl<string | null | undefined>,

		/** IP Protocol of the test. When not provided, "TCP" is assumed. */
		protocol: FormControl<string | null | undefined>,

		/** Output only. The time the test's configuration was updated. */
		updateTime: FormControl<string | null | undefined>,
	}
	export function CreateConnectivityTestFormGroup() {
		return new FormGroup<ConnectivityTestFormProperties>({
			createTime: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			displayName: new FormControl<string | null | undefined>(undefined),
			labels: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			protocol: new FormControl<string | null | undefined>(undefined),
			updateTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Source or destination of the Connectivity Test. */
	export interface Endpoint {

		/** Wrapper for the App Engine service version attributes. */
		appEngineVersion?: AppEngineVersionEndpoint;

		/** Wrapper for Cloud Function attributes. */
		cloudFunction?: CloudFunctionEndpoint;

		/** Wrapper for Cloud Run revision attributes. */
		cloudRunRevision?: CloudRunRevisionEndpoint;

		/** A [Cloud SQL](https://cloud.google.com/sql) instance URI. */
		cloudSqlInstance?: string | null;

		/** A forwarding rule and its corresponding IP address represent the frontend configuration of a Google Cloud load balancer. Forwarding rules are also used for protocol forwarding, Private Service Connect and other network services to provide forwarding information in the control plane. Format: projects/{project}/global/forwardingRules/{id} or projects/{project}/regions/{region}/forwardingRules/{id} */
		forwardingRule?: string | null;

		/** Output only. Specifies the type of the target of the forwarding rule. */
		forwardingRuleTarget?: EndpointForwardingRuleTarget | null;

		/** A cluster URI for [Google Kubernetes Engine master](https://cloud.google.com/kubernetes-engine/docs/concepts/cluster-architecture). */
		gkeMasterCluster?: string | null;

		/** A Compute Engine instance URI. */
		instance?: string | null;

		/** The IP address of the endpoint, which can be an external or internal IP. */
		ipAddress?: string | null;

		/** Output only. ID of the load balancer the forwarding rule points to. Empty for forwarding rules not related to load balancers. */
		loadBalancerId?: string | null;

		/** Output only. Type of the load balancer the forwarding rule points to. */
		loadBalancerType?: EndpointLoadBalancerType | null;

		/** A Compute Engine network URI. */
		network?: string | null;

		/** Type of the network where the endpoint is located. Applicable only to source endpoint, as destination network type can be inferred from the source. */
		networkType?: EndpointNetworkType | null;

		/**
		 * The IP protocol port of the endpoint. Only applicable when protocol is TCP or UDP.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		port?: number | null;

		/** Project ID where the endpoint is located. The Project ID can be derived from the URI if you provide a VM instance or network URI. The following are two cases where you must provide the project ID: 1. Only the IP address is specified, and the IP address is within a Google Cloud project. 2. When you are using Shared VPC and the IP address that you provide is from the service project. In this case, the network that the IP address resides in is defined in the host project. */
		projectId?: string | null;
	}

	/** Source or destination of the Connectivity Test. */
	export interface EndpointFormProperties {

		/** A [Cloud SQL](https://cloud.google.com/sql) instance URI. */
		cloudSqlInstance: FormControl<string | null | undefined>,

		/** A forwarding rule and its corresponding IP address represent the frontend configuration of a Google Cloud load balancer. Forwarding rules are also used for protocol forwarding, Private Service Connect and other network services to provide forwarding information in the control plane. Format: projects/{project}/global/forwardingRules/{id} or projects/{project}/regions/{region}/forwardingRules/{id} */
		forwardingRule: FormControl<string | null | undefined>,

		/** Output only. Specifies the type of the target of the forwarding rule. */
		forwardingRuleTarget: FormControl<EndpointForwardingRuleTarget | null | undefined>,

		/** A cluster URI for [Google Kubernetes Engine master](https://cloud.google.com/kubernetes-engine/docs/concepts/cluster-architecture). */
		gkeMasterCluster: FormControl<string | null | undefined>,

		/** A Compute Engine instance URI. */
		instance: FormControl<string | null | undefined>,

		/** The IP address of the endpoint, which can be an external or internal IP. */
		ipAddress: FormControl<string | null | undefined>,

		/** Output only. ID of the load balancer the forwarding rule points to. Empty for forwarding rules not related to load balancers. */
		loadBalancerId: FormControl<string | null | undefined>,

		/** Output only. Type of the load balancer the forwarding rule points to. */
		loadBalancerType: FormControl<EndpointLoadBalancerType | null | undefined>,

		/** A Compute Engine network URI. */
		network: FormControl<string | null | undefined>,

		/** Type of the network where the endpoint is located. Applicable only to source endpoint, as destination network type can be inferred from the source. */
		networkType: FormControl<EndpointNetworkType | null | undefined>,

		/**
		 * The IP protocol port of the endpoint. Only applicable when protocol is TCP or UDP.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		port: FormControl<number | null | undefined>,

		/** Project ID where the endpoint is located. The Project ID can be derived from the URI if you provide a VM instance or network URI. The following are two cases where you must provide the project ID: 1. Only the IP address is specified, and the IP address is within a Google Cloud project. 2. When you are using Shared VPC and the IP address that you provide is from the service project. In this case, the network that the IP address resides in is defined in the host project. */
		projectId: FormControl<string | null | undefined>,
	}
	export function CreateEndpointFormGroup() {
		return new FormGroup<EndpointFormProperties>({
			cloudSqlInstance: new FormControl<string | null | undefined>(undefined),
			forwardingRule: new FormControl<string | null | undefined>(undefined),
			forwardingRuleTarget: new FormControl<EndpointForwardingRuleTarget | null | undefined>(undefined),
			gkeMasterCluster: new FormControl<string | null | undefined>(undefined),
			instance: new FormControl<string | null | undefined>(undefined),
			ipAddress: new FormControl<string | null | undefined>(undefined),
			loadBalancerId: new FormControl<string | null | undefined>(undefined),
			loadBalancerType: new FormControl<EndpointLoadBalancerType | null | undefined>(undefined),
			network: new FormControl<string | null | undefined>(undefined),
			networkType: new FormControl<EndpointNetworkType | null | undefined>(undefined),
			port: new FormControl<number | null | undefined>(undefined),
			projectId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum EndpointForwardingRuleTarget { FORWARDING_RULE_TARGET_UNSPECIFIED = 'FORWARDING_RULE_TARGET_UNSPECIFIED', INSTANCE = 'INSTANCE', LOAD_BALANCER = 'LOAD_BALANCER', VPN_GATEWAY = 'VPN_GATEWAY', PSC = 'PSC' }

	export enum EndpointLoadBalancerType { LOAD_BALANCER_TYPE_UNSPECIFIED = 'LOAD_BALANCER_TYPE_UNSPECIFIED', HTTPS_ADVANCED_LOAD_BALANCER = 'HTTPS_ADVANCED_LOAD_BALANCER', HTTPS_LOAD_BALANCER = 'HTTPS_LOAD_BALANCER', REGIONAL_HTTPS_LOAD_BALANCER = 'REGIONAL_HTTPS_LOAD_BALANCER', INTERNAL_HTTPS_LOAD_BALANCER = 'INTERNAL_HTTPS_LOAD_BALANCER', SSL_PROXY_LOAD_BALANCER = 'SSL_PROXY_LOAD_BALANCER', TCP_PROXY_LOAD_BALANCER = 'TCP_PROXY_LOAD_BALANCER', INTERNAL_TCP_PROXY_LOAD_BALANCER = 'INTERNAL_TCP_PROXY_LOAD_BALANCER', NETWORK_LOAD_BALANCER = 'NETWORK_LOAD_BALANCER', LEGACY_NETWORK_LOAD_BALANCER = 'LEGACY_NETWORK_LOAD_BALANCER', TCP_UDP_INTERNAL_LOAD_BALANCER = 'TCP_UDP_INTERNAL_LOAD_BALANCER' }

	export enum EndpointNetworkType { NETWORK_TYPE_UNSPECIFIED = 'NETWORK_TYPE_UNSPECIFIED', GCP_NETWORK = 'GCP_NETWORK', NON_GCP_NETWORK = 'NON_GCP_NETWORK' }


	/** Results of active probing from the last run of the test. */
	export interface ProbingDetails {

		/** The reason probing was aborted. */
		abortCause?: ProbingDetailsAbortCause | null;

		/** Representation of a network edge location as per https://cloud.google.com/vpc/docs/edge-locations. */
		destinationEgressLocation?: EdgeLocation;

		/** For display only. The specification of the endpoints for the test. EndpointInfo is derived from source and destination Endpoint and validated by the backend data plane model. */
		endpointInfo?: EndpointInfo;

		/** The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors). */
		error?: Status;

		/** Describes measured latency distribution. */
		probingLatency?: LatencyDistribution;

		/** The overall result of active probing. */
		result?: ProbingDetailsResult | null;

		/**
		 * Number of probes sent.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		sentProbeCount?: number | null;

		/**
		 * Number of probes that reached the destination.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		successfulProbeCount?: number | null;

		/** The time that reachability was assessed through active probing. */
		verifyTime?: string | null;
	}

	/** Results of active probing from the last run of the test. */
	export interface ProbingDetailsFormProperties {

		/** The reason probing was aborted. */
		abortCause: FormControl<ProbingDetailsAbortCause | null | undefined>,

		/** The overall result of active probing. */
		result: FormControl<ProbingDetailsResult | null | undefined>,

		/**
		 * Number of probes sent.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		sentProbeCount: FormControl<number | null | undefined>,

		/**
		 * Number of probes that reached the destination.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		successfulProbeCount: FormControl<number | null | undefined>,

		/** The time that reachability was assessed through active probing. */
		verifyTime: FormControl<string | null | undefined>,
	}
	export function CreateProbingDetailsFormGroup() {
		return new FormGroup<ProbingDetailsFormProperties>({
			abortCause: new FormControl<ProbingDetailsAbortCause | null | undefined>(undefined),
			result: new FormControl<ProbingDetailsResult | null | undefined>(undefined),
			sentProbeCount: new FormControl<number | null | undefined>(undefined),
			successfulProbeCount: new FormControl<number | null | undefined>(undefined),
			verifyTime: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ProbingDetailsAbortCause { PROBING_ABORT_CAUSE_UNSPECIFIED = 'PROBING_ABORT_CAUSE_UNSPECIFIED', PERMISSION_DENIED = 'PERMISSION_DENIED', NO_SOURCE_LOCATION = 'NO_SOURCE_LOCATION' }


	/** Representation of a network edge location as per https://cloud.google.com/vpc/docs/edge-locations. */
	export interface EdgeLocation {

		/** Name of the metropolitan area. */
		metropolitanArea?: string | null;
	}

	/** Representation of a network edge location as per https://cloud.google.com/vpc/docs/edge-locations. */
	export interface EdgeLocationFormProperties {

		/** Name of the metropolitan area. */
		metropolitanArea: FormControl<string | null | undefined>,
	}
	export function CreateEdgeLocationFormGroup() {
		return new FormGroup<EdgeLocationFormProperties>({
			metropolitanArea: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** For display only. The specification of the endpoints for the test. EndpointInfo is derived from source and destination Endpoint and validated by the backend data plane model. */
	export interface EndpointInfo {

		/** Destination IP address. */
		destinationIp?: string | null;

		/** URI of the network where this packet is sent to. */
		destinationNetworkUri?: string | null;

		/**
		 * Destination port. Only valid when protocol is TCP or UDP.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		destinationPort?: number | null;

		/** IP protocol in string format, for example: "TCP", "UDP", "ICMP". */
		protocol?: string | null;

		/** URI of the source telemetry agent this packet originates from. */
		sourceAgentUri?: string | null;

		/** Source IP address. */
		sourceIp?: string | null;

		/** URI of the network where this packet originates from. */
		sourceNetworkUri?: string | null;

		/**
		 * Source port. Only valid when protocol is TCP or UDP.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		sourcePort?: number | null;
	}

	/** For display only. The specification of the endpoints for the test. EndpointInfo is derived from source and destination Endpoint and validated by the backend data plane model. */
	export interface EndpointInfoFormProperties {

		/** Destination IP address. */
		destinationIp: FormControl<string | null | undefined>,

		/** URI of the network where this packet is sent to. */
		destinationNetworkUri: FormControl<string | null | undefined>,

		/**
		 * Destination port. Only valid when protocol is TCP or UDP.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		destinationPort: FormControl<number | null | undefined>,

		/** IP protocol in string format, for example: "TCP", "UDP", "ICMP". */
		protocol: FormControl<string | null | undefined>,

		/** URI of the source telemetry agent this packet originates from. */
		sourceAgentUri: FormControl<string | null | undefined>,

		/** Source IP address. */
		sourceIp: FormControl<string | null | undefined>,

		/** URI of the network where this packet originates from. */
		sourceNetworkUri: FormControl<string | null | undefined>,

		/**
		 * Source port. Only valid when protocol is TCP or UDP.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		sourcePort: FormControl<number | null | undefined>,
	}
	export function CreateEndpointInfoFormGroup() {
		return new FormGroup<EndpointInfoFormProperties>({
			destinationIp: new FormControl<string | null | undefined>(undefined),
			destinationNetworkUri: new FormControl<string | null | undefined>(undefined),
			destinationPort: new FormControl<number | null | undefined>(undefined),
			protocol: new FormControl<string | null | undefined>(undefined),
			sourceAgentUri: new FormControl<string | null | undefined>(undefined),
			sourceIp: new FormControl<string | null | undefined>(undefined),
			sourceNetworkUri: new FormControl<string | null | undefined>(undefined),
			sourcePort: new FormControl<number | null | undefined>(undefined),
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


	/** Describes measured latency distribution. */
	export interface LatencyDistribution {

		/** Representative latency percentiles. */
		latencyPercentiles?: Array<LatencyPercentile>;
	}

	/** Describes measured latency distribution. */
	export interface LatencyDistributionFormProperties {
	}
	export function CreateLatencyDistributionFormGroup() {
		return new FormGroup<LatencyDistributionFormProperties>({
		});

	}


	/** Latency percentile rank and value. */
	export interface LatencyPercentile {

		/** percent-th percentile of latency observed, in microseconds. Fraction of percent/100 of samples have latency lower or equal to the value of this field. */
		latencyMicros?: string | null;

		/**
		 * Percentage of samples this data point applies to.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		percent?: number | null;
	}

	/** Latency percentile rank and value. */
	export interface LatencyPercentileFormProperties {

		/** percent-th percentile of latency observed, in microseconds. Fraction of percent/100 of samples have latency lower or equal to the value of this field. */
		latencyMicros: FormControl<string | null | undefined>,

		/**
		 * Percentage of samples this data point applies to.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		percent: FormControl<number | null | undefined>,
	}
	export function CreateLatencyPercentileFormGroup() {
		return new FormGroup<LatencyPercentileFormProperties>({
			latencyMicros: new FormControl<string | null | undefined>(undefined),
			percent: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum ProbingDetailsResult { PROBING_RESULT_UNSPECIFIED = 'PROBING_RESULT_UNSPECIFIED', REACHABLE = 'REACHABLE', UNREACHABLE = 'UNREACHABLE', REACHABILITY_INCONSISTENT = 'REACHABILITY_INCONSISTENT', UNDETERMINED = 'UNDETERMINED' }


	/** Results of the configuration analysis from the last run of the test. */
	export interface ReachabilityDetails {

		/** The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors). */
		error?: Status;

		/** The overall result of the test's configuration analysis. */
		result?: ReachabilityDetailsResult | null;

		/** Result may contain a list of traces if a test has multiple possible paths in the network, such as when destination endpoint is a load balancer with multiple backends. */
		traces?: Array<Trace>;

		/** The time of the configuration analysis. */
		verifyTime?: string | null;
	}

	/** Results of the configuration analysis from the last run of the test. */
	export interface ReachabilityDetailsFormProperties {

		/** The overall result of the test's configuration analysis. */
		result: FormControl<ReachabilityDetailsResult | null | undefined>,

		/** The time of the configuration analysis. */
		verifyTime: FormControl<string | null | undefined>,
	}
	export function CreateReachabilityDetailsFormGroup() {
		return new FormGroup<ReachabilityDetailsFormProperties>({
			result: new FormControl<ReachabilityDetailsResult | null | undefined>(undefined),
			verifyTime: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ReachabilityDetailsResult { RESULT_UNSPECIFIED = 'RESULT_UNSPECIFIED', REACHABLE = 'REACHABLE', UNREACHABLE = 'UNREACHABLE', AMBIGUOUS = 'AMBIGUOUS', UNDETERMINED = 'UNDETERMINED' }


	/** Trace represents one simulated packet forwarding path. * Each trace contains multiple ordered steps. * Each step is in a particular state with associated configuration. * State is categorized as final or non-final states. * Each final state has a reason associated. * Each trace must end with a final state (the last step). ``` |---------------------Trace----------------------| Step1(State) Step2(State) --- StepN(State(final)) ``` */
	export interface Trace {

		/** For display only. The specification of the endpoints for the test. EndpointInfo is derived from source and destination Endpoint and validated by the backend data plane model. */
		endpointInfo?: EndpointInfo;

		/** A trace of a test contains multiple steps from the initial state to the final state (delivered, dropped, forwarded, or aborted). The steps are ordered by the processing sequence within the simulated network state machine. It is critical to preserve the order of the steps and avoid reordering or sorting them. */
		steps?: Array<Step>;
	}

	/** Trace represents one simulated packet forwarding path. * Each trace contains multiple ordered steps. * Each step is in a particular state with associated configuration. * State is categorized as final or non-final states. * Each final state has a reason associated. * Each trace must end with a final state (the last step). ``` |---------------------Trace----------------------| Step1(State) Step2(State) --- StepN(State(final)) ``` */
	export interface TraceFormProperties {
	}
	export function CreateTraceFormGroup() {
		return new FormGroup<TraceFormProperties>({
		});

	}


	/** A simulated forwarding path is composed of multiple steps. Each step has a well-defined state and an associated configuration. */
	export interface Step {

		/** Details of the final state "abort" and associated resource. */
		abort?: AbortInfo;

		/** For display only. Metadata associated with an App Engine version. */
		appEngineVersion?: AppEngineVersionInfo;

		/** This is a step that leads to the final state Drop. */
		causesDrop?: boolean | null;

		/** For display only. Metadata associated with a Cloud Function. */
		cloudFunction?: CloudFunctionInfo;

		/** For display only. Metadata associated with a Cloud Run revision. */
		cloudRunRevision?: CloudRunRevisionInfo;

		/** For display only. Metadata associated with a Cloud SQL instance. */
		cloudSqlInstance?: CloudSQLInstanceInfo;

		/** Details of the final state "deliver" and associated resource. */
		deliver?: DeliverInfo;

		/** A description of the step. Usually this is a summary of the state. */
		description?: string | null;

		/** Details of the final state "drop" and associated resource. */
		drop?: DropInfo;

		/** For display only. The specification of the endpoints for the test. EndpointInfo is derived from source and destination Endpoint and validated by the backend data plane model. */
		endpoint?: EndpointInfo;

		/** For display only. Metadata associated with a VPC firewall rule, an implied VPC firewall rule, or a hierarchical firewall policy rule. */
		firewall?: FirewallInfo;

		/** Details of the final state "forward" and associated resource. */
		forward?: ForwardInfo;

		/** For display only. Metadata associated with a Compute Engine forwarding rule. */
		forwardingRule?: ForwardingRuleInfo;

		/** For display only. Metadata associated with a Google Kubernetes Engine (GKE) cluster master. */
		gkeMaster?: GKEMasterInfo;

		/** For display only. Details of a Google Service sending packets to a VPC network. Although the source IP might be a publicly routable address, some Google Services use special routes within Google production infrastructure to reach Compute Engine Instances. https://cloud.google.com/vpc/docs/routes#special_return_paths */
		googleService?: GoogleServiceInfo;

		/** For display only. Metadata associated with a Compute Engine instance. */
		instance?: InstanceInfo;

		/** For display only. Metadata associated with a load balancer. */
		loadBalancer?: LoadBalancerInfo;

		/** For display only. Metadata associated with the load balancer backend. */
		loadBalancerBackendInfo?: LoadBalancerBackendInfo;

		/** For display only. Metadata associated with NAT. */
		nat?: NatInfo;

		/** For display only. Metadata associated with a Compute Engine network. */
		network?: NetworkInfo;

		/** Project ID that contains the configuration this step is validating. */
		projectId?: string | null;

		/** For display only. Metadata associated with ProxyConnection. */
		proxyConnection?: ProxyConnectionInfo;

		/** For display only. Metadata associated with a Compute Engine route. */
		route?: RouteInfo;

		/** Each step is in one of the pre-defined states. */
		state?: StepState | null;

		/** For display only. Metadata associated with a VPC connector. */
		vpcConnector?: VpcConnectorInfo;

		/** For display only. Metadata associated with a Compute Engine VPN gateway. */
		vpnGateway?: VpnGatewayInfo;

		/** For display only. Metadata associated with a Compute Engine VPN tunnel. */
		vpnTunnel?: VpnTunnelInfo;
	}

	/** A simulated forwarding path is composed of multiple steps. Each step has a well-defined state and an associated configuration. */
	export interface StepFormProperties {

		/** This is a step that leads to the final state Drop. */
		causesDrop: FormControl<boolean | null | undefined>,

		/** A description of the step. Usually this is a summary of the state. */
		description: FormControl<string | null | undefined>,

		/** Project ID that contains the configuration this step is validating. */
		projectId: FormControl<string | null | undefined>,

		/** Each step is in one of the pre-defined states. */
		state: FormControl<StepState | null | undefined>,
	}
	export function CreateStepFormGroup() {
		return new FormGroup<StepFormProperties>({
			causesDrop: new FormControl<boolean | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			projectId: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<StepState | null | undefined>(undefined),
		});

	}


	/** Details of the final state "deliver" and associated resource. */
	export interface DeliverInfo {

		/** URI of the resource that the packet is delivered to. */
		resourceUri?: string | null;

		/** Target type where the packet is delivered to. */
		target?: DeliverInfoTarget | null;
	}

	/** Details of the final state "deliver" and associated resource. */
	export interface DeliverInfoFormProperties {

		/** URI of the resource that the packet is delivered to. */
		resourceUri: FormControl<string | null | undefined>,

		/** Target type where the packet is delivered to. */
		target: FormControl<DeliverInfoTarget | null | undefined>,
	}
	export function CreateDeliverInfoFormGroup() {
		return new FormGroup<DeliverInfoFormProperties>({
			resourceUri: new FormControl<string | null | undefined>(undefined),
			target: new FormControl<DeliverInfoTarget | null | undefined>(undefined),
		});

	}

	export enum DeliverInfoTarget { TARGET_UNSPECIFIED = 'TARGET_UNSPECIFIED', INSTANCE = 'INSTANCE', INTERNET = 'INTERNET', GOOGLE_API = 'GOOGLE_API', GKE_MASTER = 'GKE_MASTER', CLOUD_SQL_INSTANCE = 'CLOUD_SQL_INSTANCE', PSC_PUBLISHED_SERVICE = 'PSC_PUBLISHED_SERVICE', PSC_GOOGLE_API = 'PSC_GOOGLE_API', PSC_VPC_SC = 'PSC_VPC_SC', SERVERLESS_NEG = 'SERVERLESS_NEG', STORAGE_BUCKET = 'STORAGE_BUCKET' }


	/** Details of the final state "drop" and associated resource. */
	export interface DropInfo {

		/** Cause that the packet is dropped. */
		cause?: DropInfoCause | null;

		/** Destination IP address of the dropped packet (if relevant). */
		destinationIp?: string | null;

		/** Region of the dropped packet (if relevant). */
		region?: string | null;

		/** URI of the resource that caused the drop. */
		resourceUri?: string | null;

		/** Source IP address of the dropped packet (if relevant). */
		sourceIp?: string | null;
	}

	/** Details of the final state "drop" and associated resource. */
	export interface DropInfoFormProperties {

		/** Cause that the packet is dropped. */
		cause: FormControl<DropInfoCause | null | undefined>,

		/** Destination IP address of the dropped packet (if relevant). */
		destinationIp: FormControl<string | null | undefined>,

		/** Region of the dropped packet (if relevant). */
		region: FormControl<string | null | undefined>,

		/** URI of the resource that caused the drop. */
		resourceUri: FormControl<string | null | undefined>,

		/** Source IP address of the dropped packet (if relevant). */
		sourceIp: FormControl<string | null | undefined>,
	}
	export function CreateDropInfoFormGroup() {
		return new FormGroup<DropInfoFormProperties>({
			cause: new FormControl<DropInfoCause | null | undefined>(undefined),
			destinationIp: new FormControl<string | null | undefined>(undefined),
			region: new FormControl<string | null | undefined>(undefined),
			resourceUri: new FormControl<string | null | undefined>(undefined),
			sourceIp: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum DropInfoCause { CAUSE_UNSPECIFIED = 'CAUSE_UNSPECIFIED', UNKNOWN_EXTERNAL_ADDRESS = 'UNKNOWN_EXTERNAL_ADDRESS', FOREIGN_IP_DISALLOWED = 'FOREIGN_IP_DISALLOWED', FIREWALL_RULE = 'FIREWALL_RULE', NO_ROUTE = 'NO_ROUTE', ROUTE_BLACKHOLE = 'ROUTE_BLACKHOLE', ROUTE_WRONG_NETWORK = 'ROUTE_WRONG_NETWORK', ROUTE_NEXT_HOP_IP_ADDRESS_NOT_RESOLVED = 'ROUTE_NEXT_HOP_IP_ADDRESS_NOT_RESOLVED', ROUTE_NEXT_HOP_RESOURCE_NOT_FOUND = 'ROUTE_NEXT_HOP_RESOURCE_NOT_FOUND', NO_ROUTE_FROM_INTERNET_TO_PRIVATE_IPV6_ADDRESS = 'NO_ROUTE_FROM_INTERNET_TO_PRIVATE_IPV6_ADDRESS', VPN_TUNNEL_LOCAL_SELECTOR_MISMATCH = 'VPN_TUNNEL_LOCAL_SELECTOR_MISMATCH', VPN_TUNNEL_REMOTE_SELECTOR_MISMATCH = 'VPN_TUNNEL_REMOTE_SELECTOR_MISMATCH', PRIVATE_TRAFFIC_TO_INTERNET = 'PRIVATE_TRAFFIC_TO_INTERNET', PRIVATE_GOOGLE_ACCESS_DISALLOWED = 'PRIVATE_GOOGLE_ACCESS_DISALLOWED', PRIVATE_GOOGLE_ACCESS_VIA_VPN_TUNNEL_UNSUPPORTED = 'PRIVATE_GOOGLE_ACCESS_VIA_VPN_TUNNEL_UNSUPPORTED', NO_EXTERNAL_ADDRESS = 'NO_EXTERNAL_ADDRESS', UNKNOWN_INTERNAL_ADDRESS = 'UNKNOWN_INTERNAL_ADDRESS', FORWARDING_RULE_MISMATCH = 'FORWARDING_RULE_MISMATCH', FORWARDING_RULE_NO_INSTANCES = 'FORWARDING_RULE_NO_INSTANCES', FIREWALL_BLOCKING_LOAD_BALANCER_BACKEND_HEALTH_CHECK = 'FIREWALL_BLOCKING_LOAD_BALANCER_BACKEND_HEALTH_CHECK', INSTANCE_NOT_RUNNING = 'INSTANCE_NOT_RUNNING', GKE_CLUSTER_NOT_RUNNING = 'GKE_CLUSTER_NOT_RUNNING', CLOUD_SQL_INSTANCE_NOT_RUNNING = 'CLOUD_SQL_INSTANCE_NOT_RUNNING', TRAFFIC_TYPE_BLOCKED = 'TRAFFIC_TYPE_BLOCKED', GKE_MASTER_UNAUTHORIZED_ACCESS = 'GKE_MASTER_UNAUTHORIZED_ACCESS', CLOUD_SQL_INSTANCE_UNAUTHORIZED_ACCESS = 'CLOUD_SQL_INSTANCE_UNAUTHORIZED_ACCESS', DROPPED_INSIDE_GKE_SERVICE = 'DROPPED_INSIDE_GKE_SERVICE', DROPPED_INSIDE_CLOUD_SQL_SERVICE = 'DROPPED_INSIDE_CLOUD_SQL_SERVICE', GOOGLE_MANAGED_SERVICE_NO_PEERING = 'GOOGLE_MANAGED_SERVICE_NO_PEERING', GOOGLE_MANAGED_SERVICE_NO_PSC_ENDPOINT = 'GOOGLE_MANAGED_SERVICE_NO_PSC_ENDPOINT', GKE_PSC_ENDPOINT_MISSING = 'GKE_PSC_ENDPOINT_MISSING', CLOUD_SQL_INSTANCE_NO_IP_ADDRESS = 'CLOUD_SQL_INSTANCE_NO_IP_ADDRESS', GKE_CONTROL_PLANE_REGION_MISMATCH = 'GKE_CONTROL_PLANE_REGION_MISMATCH', PUBLIC_GKE_CONTROL_PLANE_TO_PRIVATE_DESTINATION = 'PUBLIC_GKE_CONTROL_PLANE_TO_PRIVATE_DESTINATION', GKE_CONTROL_PLANE_NO_ROUTE = 'GKE_CONTROL_PLANE_NO_ROUTE', CLOUD_SQL_INSTANCE_NOT_CONFIGURED_FOR_EXTERNAL_TRAFFIC = 'CLOUD_SQL_INSTANCE_NOT_CONFIGURED_FOR_EXTERNAL_TRAFFIC', PUBLIC_CLOUD_SQL_INSTANCE_TO_PRIVATE_DESTINATION = 'PUBLIC_CLOUD_SQL_INSTANCE_TO_PRIVATE_DESTINATION', CLOUD_SQL_INSTANCE_NO_ROUTE = 'CLOUD_SQL_INSTANCE_NO_ROUTE', CLOUD_FUNCTION_NOT_ACTIVE = 'CLOUD_FUNCTION_NOT_ACTIVE', VPC_CONNECTOR_NOT_SET = 'VPC_CONNECTOR_NOT_SET', VPC_CONNECTOR_NOT_RUNNING = 'VPC_CONNECTOR_NOT_RUNNING', FORWARDING_RULE_REGION_MISMATCH = 'FORWARDING_RULE_REGION_MISMATCH', PSC_CONNECTION_NOT_ACCEPTED = 'PSC_CONNECTION_NOT_ACCEPTED', PSC_ENDPOINT_ACCESSED_FROM_PEERED_NETWORK = 'PSC_ENDPOINT_ACCESSED_FROM_PEERED_NETWORK', PSC_NEG_PRODUCER_ENDPOINT_NO_GLOBAL_ACCESS = 'PSC_NEG_PRODUCER_ENDPOINT_NO_GLOBAL_ACCESS', CLOUD_RUN_REVISION_NOT_READY = 'CLOUD_RUN_REVISION_NOT_READY', DROPPED_INSIDE_PSC_SERVICE_PRODUCER = 'DROPPED_INSIDE_PSC_SERVICE_PRODUCER', LOAD_BALANCER_HAS_NO_PROXY_SUBNET = 'LOAD_BALANCER_HAS_NO_PROXY_SUBNET', CLOUD_NAT_NO_ADDRESSES = 'CLOUD_NAT_NO_ADDRESSES' }


	/** For display only. Metadata associated with a VPC firewall rule, an implied VPC firewall rule, or a hierarchical firewall policy rule. */
	export interface FirewallInfo {

		/** Possible values: ALLOW, DENY, APPLY_SECURITY_PROFILE_GROUP */
		action?: string | null;

		/** Possible values: INGRESS, EGRESS */
		direction?: string | null;

		/** The display name of the VPC firewall rule. This field is not applicable to hierarchical firewall policy rules. */
		displayName?: string | null;

		/** The firewall rule's type. */
		firewallRuleType?: FirewallInfoFirewallRuleType | null;

		/** The URI of the VPC network that the firewall rule is associated with. This field is not applicable to hierarchical firewall policy rules. */
		networkUri?: string | null;

		/** The hierarchical firewall policy that this rule is associated with. This field is not applicable to VPC firewall rules. */
		policy?: string | null;

		/**
		 * The priority of the firewall rule.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		priority?: number | null;

		/** The target service accounts specified by the firewall rule. */
		targetServiceAccounts?: Array<string>;

		/** The target tags defined by the VPC firewall rule. This field is not applicable to hierarchical firewall policy rules. */
		targetTags?: Array<string>;

		/** The URI of the VPC firewall rule. This field is not applicable to implied firewall rules or hierarchical firewall policy rules. */
		uri?: string | null;
	}

	/** For display only. Metadata associated with a VPC firewall rule, an implied VPC firewall rule, or a hierarchical firewall policy rule. */
	export interface FirewallInfoFormProperties {

		/** Possible values: ALLOW, DENY, APPLY_SECURITY_PROFILE_GROUP */
		action: FormControl<string | null | undefined>,

		/** Possible values: INGRESS, EGRESS */
		direction: FormControl<string | null | undefined>,

		/** The display name of the VPC firewall rule. This field is not applicable to hierarchical firewall policy rules. */
		displayName: FormControl<string | null | undefined>,

		/** The firewall rule's type. */
		firewallRuleType: FormControl<FirewallInfoFirewallRuleType | null | undefined>,

		/** The URI of the VPC network that the firewall rule is associated with. This field is not applicable to hierarchical firewall policy rules. */
		networkUri: FormControl<string | null | undefined>,

		/** The hierarchical firewall policy that this rule is associated with. This field is not applicable to VPC firewall rules. */
		policy: FormControl<string | null | undefined>,

		/**
		 * The priority of the firewall rule.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		priority: FormControl<number | null | undefined>,

		/** The URI of the VPC firewall rule. This field is not applicable to implied firewall rules or hierarchical firewall policy rules. */
		uri: FormControl<string | null | undefined>,
	}
	export function CreateFirewallInfoFormGroup() {
		return new FormGroup<FirewallInfoFormProperties>({
			action: new FormControl<string | null | undefined>(undefined),
			direction: new FormControl<string | null | undefined>(undefined),
			displayName: new FormControl<string | null | undefined>(undefined),
			firewallRuleType: new FormControl<FirewallInfoFirewallRuleType | null | undefined>(undefined),
			networkUri: new FormControl<string | null | undefined>(undefined),
			policy: new FormControl<string | null | undefined>(undefined),
			priority: new FormControl<number | null | undefined>(undefined),
			uri: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum FirewallInfoFirewallRuleType { FIREWALL_RULE_TYPE_UNSPECIFIED = 'FIREWALL_RULE_TYPE_UNSPECIFIED', HIERARCHICAL_FIREWALL_POLICY_RULE = 'HIERARCHICAL_FIREWALL_POLICY_RULE', VPC_FIREWALL_RULE = 'VPC_FIREWALL_RULE', IMPLIED_VPC_FIREWALL_RULE = 'IMPLIED_VPC_FIREWALL_RULE', SERVERLESS_VPC_ACCESS_MANAGED_FIREWALL_RULE = 'SERVERLESS_VPC_ACCESS_MANAGED_FIREWALL_RULE', NETWORK_FIREWALL_POLICY_RULE = 'NETWORK_FIREWALL_POLICY_RULE', NETWORK_REGIONAL_FIREWALL_POLICY_RULE = 'NETWORK_REGIONAL_FIREWALL_POLICY_RULE', UNSUPPORTED_FIREWALL_POLICY_RULE = 'UNSUPPORTED_FIREWALL_POLICY_RULE', TRACKING_STATE = 'TRACKING_STATE' }


	/** Details of the final state "forward" and associated resource. */
	export interface ForwardInfo {

		/** URI of the resource that the packet is forwarded to. */
		resourceUri?: string | null;

		/** Target type where this packet is forwarded to. */
		target?: ForwardInfoTarget | null;
	}

	/** Details of the final state "forward" and associated resource. */
	export interface ForwardInfoFormProperties {

		/** URI of the resource that the packet is forwarded to. */
		resourceUri: FormControl<string | null | undefined>,

		/** Target type where this packet is forwarded to. */
		target: FormControl<ForwardInfoTarget | null | undefined>,
	}
	export function CreateForwardInfoFormGroup() {
		return new FormGroup<ForwardInfoFormProperties>({
			resourceUri: new FormControl<string | null | undefined>(undefined),
			target: new FormControl<ForwardInfoTarget | null | undefined>(undefined),
		});

	}

	export enum ForwardInfoTarget { TARGET_UNSPECIFIED = 'TARGET_UNSPECIFIED', PEERING_VPC = 'PEERING_VPC', VPN_GATEWAY = 'VPN_GATEWAY', INTERCONNECT = 'INTERCONNECT', GKE_MASTER = 'GKE_MASTER', IMPORTED_CUSTOM_ROUTE_NEXT_HOP = 'IMPORTED_CUSTOM_ROUTE_NEXT_HOP', CLOUD_SQL_INSTANCE = 'CLOUD_SQL_INSTANCE', ANOTHER_PROJECT = 'ANOTHER_PROJECT', NCC_HUB = 'NCC_HUB', ROUTER_APPLIANCE = 'ROUTER_APPLIANCE' }


	/** For display only. Metadata associated with a Compute Engine forwarding rule. */
	export interface ForwardingRuleInfo {

		/** Name of a Compute Engine forwarding rule. */
		displayName?: string | null;

		/** Port range defined in the forwarding rule that matches the test. */
		matchedPortRange?: string | null;

		/** Protocol defined in the forwarding rule that matches the test. */
		matchedProtocol?: string | null;

		/** Network URI. Only valid for Internal Load Balancer. */
		networkUri?: string | null;

		/** Target type of the forwarding rule. */
		target?: string | null;

		/** URI of a Compute Engine forwarding rule. */
		uri?: string | null;

		/** VIP of the forwarding rule. */
		vip?: string | null;
	}

	/** For display only. Metadata associated with a Compute Engine forwarding rule. */
	export interface ForwardingRuleInfoFormProperties {

		/** Name of a Compute Engine forwarding rule. */
		displayName: FormControl<string | null | undefined>,

		/** Port range defined in the forwarding rule that matches the test. */
		matchedPortRange: FormControl<string | null | undefined>,

		/** Protocol defined in the forwarding rule that matches the test. */
		matchedProtocol: FormControl<string | null | undefined>,

		/** Network URI. Only valid for Internal Load Balancer. */
		networkUri: FormControl<string | null | undefined>,

		/** Target type of the forwarding rule. */
		target: FormControl<string | null | undefined>,

		/** URI of a Compute Engine forwarding rule. */
		uri: FormControl<string | null | undefined>,

		/** VIP of the forwarding rule. */
		vip: FormControl<string | null | undefined>,
	}
	export function CreateForwardingRuleInfoFormGroup() {
		return new FormGroup<ForwardingRuleInfoFormProperties>({
			displayName: new FormControl<string | null | undefined>(undefined),
			matchedPortRange: new FormControl<string | null | undefined>(undefined),
			matchedProtocol: new FormControl<string | null | undefined>(undefined),
			networkUri: new FormControl<string | null | undefined>(undefined),
			target: new FormControl<string | null | undefined>(undefined),
			uri: new FormControl<string | null | undefined>(undefined),
			vip: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** For display only. Metadata associated with a Google Kubernetes Engine (GKE) cluster master. */
	export interface GKEMasterInfo {

		/** URI of a GKE cluster network. */
		clusterNetworkUri?: string | null;

		/** URI of a GKE cluster. */
		clusterUri?: string | null;

		/** External IP address of a GKE cluster master. */
		externalIp?: string | null;

		/** Internal IP address of a GKE cluster master. */
		internalIp?: string | null;
	}

	/** For display only. Metadata associated with a Google Kubernetes Engine (GKE) cluster master. */
	export interface GKEMasterInfoFormProperties {

		/** URI of a GKE cluster network. */
		clusterNetworkUri: FormControl<string | null | undefined>,

		/** URI of a GKE cluster. */
		clusterUri: FormControl<string | null | undefined>,

		/** External IP address of a GKE cluster master. */
		externalIp: FormControl<string | null | undefined>,

		/** Internal IP address of a GKE cluster master. */
		internalIp: FormControl<string | null | undefined>,
	}
	export function CreateGKEMasterInfoFormGroup() {
		return new FormGroup<GKEMasterInfoFormProperties>({
			clusterNetworkUri: new FormControl<string | null | undefined>(undefined),
			clusterUri: new FormControl<string | null | undefined>(undefined),
			externalIp: new FormControl<string | null | undefined>(undefined),
			internalIp: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** For display only. Details of a Google Service sending packets to a VPC network. Although the source IP might be a publicly routable address, some Google Services use special routes within Google production infrastructure to reach Compute Engine Instances. https://cloud.google.com/vpc/docs/routes#special_return_paths */
	export interface GoogleServiceInfo {

		/** Recognized type of a Google Service. */
		googleServiceType?: GoogleServiceInfoGoogleServiceType | null;

		/** Source IP address. */
		sourceIp?: string | null;
	}

	/** For display only. Details of a Google Service sending packets to a VPC network. Although the source IP might be a publicly routable address, some Google Services use special routes within Google production infrastructure to reach Compute Engine Instances. https://cloud.google.com/vpc/docs/routes#special_return_paths */
	export interface GoogleServiceInfoFormProperties {

		/** Recognized type of a Google Service. */
		googleServiceType: FormControl<GoogleServiceInfoGoogleServiceType | null | undefined>,

		/** Source IP address. */
		sourceIp: FormControl<string | null | undefined>,
	}
	export function CreateGoogleServiceInfoFormGroup() {
		return new FormGroup<GoogleServiceInfoFormProperties>({
			googleServiceType: new FormControl<GoogleServiceInfoGoogleServiceType | null | undefined>(undefined),
			sourceIp: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum GoogleServiceInfoGoogleServiceType { GOOGLE_SERVICE_TYPE_UNSPECIFIED = 'GOOGLE_SERVICE_TYPE_UNSPECIFIED', IAP = 'IAP', GFE_PROXY_OR_HEALTH_CHECK_PROBER = 'GFE_PROXY_OR_HEALTH_CHECK_PROBER', CLOUD_DNS = 'CLOUD_DNS', GOOGLE_API = 'GOOGLE_API', GOOGLE_API_PSC = 'GOOGLE_API_PSC', GOOGLE_API_VPC_SC = 'GOOGLE_API_VPC_SC' }


	/** For display only. Metadata associated with a Compute Engine instance. */
	export interface InstanceInfo {

		/** Name of a Compute Engine instance. */
		displayName?: string | null;

		/** External IP address of the network interface. */
		externalIp?: string | null;

		/** Name of the network interface of a Compute Engine instance. */
		interface?: string | null;

		/** Internal IP address of the network interface. */
		internalIp?: string | null;

		/** Network tags configured on the instance. */
		networkTags?: Array<string>;

		/** URI of a Compute Engine network. */
		networkUri?: string | null;

		/** Service account authorized for the instance. */
		serviceAccount?: string | null;

		/** URI of a Compute Engine instance. */
		uri?: string | null;
	}

	/** For display only. Metadata associated with a Compute Engine instance. */
	export interface InstanceInfoFormProperties {

		/** Name of a Compute Engine instance. */
		displayName: FormControl<string | null | undefined>,

		/** External IP address of the network interface. */
		externalIp: FormControl<string | null | undefined>,

		/** Name of the network interface of a Compute Engine instance. */
		interface: FormControl<string | null | undefined>,

		/** Internal IP address of the network interface. */
		internalIp: FormControl<string | null | undefined>,

		/** URI of a Compute Engine network. */
		networkUri: FormControl<string | null | undefined>,

		/** Service account authorized for the instance. */
		serviceAccount: FormControl<string | null | undefined>,

		/** URI of a Compute Engine instance. */
		uri: FormControl<string | null | undefined>,
	}
	export function CreateInstanceInfoFormGroup() {
		return new FormGroup<InstanceInfoFormProperties>({
			displayName: new FormControl<string | null | undefined>(undefined),
			externalIp: new FormControl<string | null | undefined>(undefined),
			interface: new FormControl<string | null | undefined>(undefined),
			internalIp: new FormControl<string | null | undefined>(undefined),
			networkUri: new FormControl<string | null | undefined>(undefined),
			serviceAccount: new FormControl<string | null | undefined>(undefined),
			uri: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** For display only. Metadata associated with a load balancer. */
	export interface LoadBalancerInfo {

		/** Type of load balancer's backend configuration. */
		backendType?: LoadBalancerInfoBackendType | null;

		/** Backend configuration URI. */
		backendUri?: string | null;

		/** Information for the loadbalancer backends. */
		backends?: Array<LoadBalancerBackend>;

		/** URI of the health check for the load balancer. Deprecated and no longer populated as different load balancer backends might have different health checks. */
		healthCheckUri?: string | null;

		/** Type of the load balancer. */
		loadBalancerType?: LoadBalancerInfoLoadBalancerType | null;
	}

	/** For display only. Metadata associated with a load balancer. */
	export interface LoadBalancerInfoFormProperties {

		/** Type of load balancer's backend configuration. */
		backendType: FormControl<LoadBalancerInfoBackendType | null | undefined>,

		/** Backend configuration URI. */
		backendUri: FormControl<string | null | undefined>,

		/** URI of the health check for the load balancer. Deprecated and no longer populated as different load balancer backends might have different health checks. */
		healthCheckUri: FormControl<string | null | undefined>,

		/** Type of the load balancer. */
		loadBalancerType: FormControl<LoadBalancerInfoLoadBalancerType | null | undefined>,
	}
	export function CreateLoadBalancerInfoFormGroup() {
		return new FormGroup<LoadBalancerInfoFormProperties>({
			backendType: new FormControl<LoadBalancerInfoBackendType | null | undefined>(undefined),
			backendUri: new FormControl<string | null | undefined>(undefined),
			healthCheckUri: new FormControl<string | null | undefined>(undefined),
			loadBalancerType: new FormControl<LoadBalancerInfoLoadBalancerType | null | undefined>(undefined),
		});

	}

	export enum LoadBalancerInfoBackendType { BACKEND_TYPE_UNSPECIFIED = 'BACKEND_TYPE_UNSPECIFIED', BACKEND_SERVICE = 'BACKEND_SERVICE', TARGET_POOL = 'TARGET_POOL', TARGET_INSTANCE = 'TARGET_INSTANCE' }


	/** For display only. Metadata associated with a specific load balancer backend. */
	export interface LoadBalancerBackend {

		/** Name of a Compute Engine instance or network endpoint. */
		displayName?: string | null;

		/** A list of firewall rule URIs allowing probes from health check IP ranges. */
		healthCheckAllowingFirewallRules?: Array<string>;

		/** A list of firewall rule URIs blocking probes from health check IP ranges. */
		healthCheckBlockingFirewallRules?: Array<string>;

		/** State of the health check firewall configuration. */
		healthCheckFirewallState?: LoadBalancerBackendHealthCheckFirewallState | null;

		/** URI of a Compute Engine instance or network endpoint. */
		uri?: string | null;
	}

	/** For display only. Metadata associated with a specific load balancer backend. */
	export interface LoadBalancerBackendFormProperties {

		/** Name of a Compute Engine instance or network endpoint. */
		displayName: FormControl<string | null | undefined>,

		/** State of the health check firewall configuration. */
		healthCheckFirewallState: FormControl<LoadBalancerBackendHealthCheckFirewallState | null | undefined>,

		/** URI of a Compute Engine instance or network endpoint. */
		uri: FormControl<string | null | undefined>,
	}
	export function CreateLoadBalancerBackendFormGroup() {
		return new FormGroup<LoadBalancerBackendFormProperties>({
			displayName: new FormControl<string | null | undefined>(undefined),
			healthCheckFirewallState: new FormControl<LoadBalancerBackendHealthCheckFirewallState | null | undefined>(undefined),
			uri: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum LoadBalancerBackendHealthCheckFirewallState { HEALTH_CHECK_FIREWALL_STATE_UNSPECIFIED = 'HEALTH_CHECK_FIREWALL_STATE_UNSPECIFIED', CONFIGURED = 'CONFIGURED', MISCONFIGURED = 'MISCONFIGURED' }

	export enum LoadBalancerInfoLoadBalancerType { LOAD_BALANCER_TYPE_UNSPECIFIED = 'LOAD_BALANCER_TYPE_UNSPECIFIED', INTERNAL_TCP_UDP = 'INTERNAL_TCP_UDP', NETWORK_TCP_UDP = 'NETWORK_TCP_UDP', HTTP_PROXY = 'HTTP_PROXY', TCP_PROXY = 'TCP_PROXY', SSL_PROXY = 'SSL_PROXY' }


	/** For display only. Metadata associated with the load balancer backend. */
	export interface LoadBalancerBackendInfo {

		/** URI of the backend service this backend belongs to (if applicable). */
		backendServiceUri?: string | null;

		/** Output only. Health check firewalls configuration state for the backend. This is a result of the static firewall analysis (verifying that health check traffic from required IP ranges to the backend is allowed or not). The backend might still be unhealthy even if these firewalls are configured. Please refer to the documentation for more information: https://cloud.google.com/load-balancing/docs/firewall-rules */
		healthCheckFirewallsConfigState?: LoadBalancerBackendInfoHealthCheckFirewallsConfigState | null;

		/** URI of the health check attached to this backend (if applicable). */
		healthCheckUri?: string | null;

		/** URI of the instance group this backend belongs to (if applicable). */
		instanceGroupUri?: string | null;

		/** URI of the backend instance (if applicable). Populated for instance group backends, and zonal NEG backends. */
		instanceUri?: string | null;

		/** Display name of the backend. For example, it might be an instance name for the instance group backends, or an IP address and port for zonal network endpoint group backends. */
		name?: string | null;

		/** URI of the network endpoint group this backend belongs to (if applicable). */
		networkEndpointGroupUri?: string | null;
	}

	/** For display only. Metadata associated with the load balancer backend. */
	export interface LoadBalancerBackendInfoFormProperties {

		/** URI of the backend service this backend belongs to (if applicable). */
		backendServiceUri: FormControl<string | null | undefined>,

		/** Output only. Health check firewalls configuration state for the backend. This is a result of the static firewall analysis (verifying that health check traffic from required IP ranges to the backend is allowed or not). The backend might still be unhealthy even if these firewalls are configured. Please refer to the documentation for more information: https://cloud.google.com/load-balancing/docs/firewall-rules */
		healthCheckFirewallsConfigState: FormControl<LoadBalancerBackendInfoHealthCheckFirewallsConfigState | null | undefined>,

		/** URI of the health check attached to this backend (if applicable). */
		healthCheckUri: FormControl<string | null | undefined>,

		/** URI of the instance group this backend belongs to (if applicable). */
		instanceGroupUri: FormControl<string | null | undefined>,

		/** URI of the backend instance (if applicable). Populated for instance group backends, and zonal NEG backends. */
		instanceUri: FormControl<string | null | undefined>,

		/** Display name of the backend. For example, it might be an instance name for the instance group backends, or an IP address and port for zonal network endpoint group backends. */
		name: FormControl<string | null | undefined>,

		/** URI of the network endpoint group this backend belongs to (if applicable). */
		networkEndpointGroupUri: FormControl<string | null | undefined>,
	}
	export function CreateLoadBalancerBackendInfoFormGroup() {
		return new FormGroup<LoadBalancerBackendInfoFormProperties>({
			backendServiceUri: new FormControl<string | null | undefined>(undefined),
			healthCheckFirewallsConfigState: new FormControl<LoadBalancerBackendInfoHealthCheckFirewallsConfigState | null | undefined>(undefined),
			healthCheckUri: new FormControl<string | null | undefined>(undefined),
			instanceGroupUri: new FormControl<string | null | undefined>(undefined),
			instanceUri: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			networkEndpointGroupUri: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum LoadBalancerBackendInfoHealthCheckFirewallsConfigState { HEALTH_CHECK_FIREWALLS_CONFIG_STATE_UNSPECIFIED = 'HEALTH_CHECK_FIREWALLS_CONFIG_STATE_UNSPECIFIED', FIREWALLS_CONFIGURED = 'FIREWALLS_CONFIGURED', FIREWALLS_PARTIALLY_CONFIGURED = 'FIREWALLS_PARTIALLY_CONFIGURED', FIREWALLS_NOT_CONFIGURED = 'FIREWALLS_NOT_CONFIGURED', FIREWALLS_UNSUPPORTED = 'FIREWALLS_UNSUPPORTED' }


	/** For display only. Metadata associated with NAT. */
	export interface NatInfo {

		/** The name of Cloud NAT Gateway. Only valid when type is CLOUD_NAT. */
		natGatewayName?: string | null;

		/** URI of the network where NAT translation takes place. */
		networkUri?: string | null;

		/** Destination IP address after NAT translation. */
		newDestinationIp?: string | null;

		/**
		 * Destination port after NAT translation. Only valid when protocol is TCP or UDP.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		newDestinationPort?: number | null;

		/** Source IP address after NAT translation. */
		newSourceIp?: string | null;

		/**
		 * Source port after NAT translation. Only valid when protocol is TCP or UDP.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		newSourcePort?: number | null;

		/** Destination IP address before NAT translation. */
		oldDestinationIp?: string | null;

		/**
		 * Destination port before NAT translation. Only valid when protocol is TCP or UDP.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		oldDestinationPort?: number | null;

		/** Source IP address before NAT translation. */
		oldSourceIp?: string | null;

		/**
		 * Source port before NAT translation. Only valid when protocol is TCP or UDP.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		oldSourcePort?: number | null;

		/** IP protocol in string format, for example: "TCP", "UDP", "ICMP". */
		protocol?: string | null;

		/** Uri of the Cloud Router. Only valid when type is CLOUD_NAT. */
		routerUri?: string | null;

		/** Type of NAT. */
		type?: NatInfoType | null;
	}

	/** For display only. Metadata associated with NAT. */
	export interface NatInfoFormProperties {

		/** The name of Cloud NAT Gateway. Only valid when type is CLOUD_NAT. */
		natGatewayName: FormControl<string | null | undefined>,

		/** URI of the network where NAT translation takes place. */
		networkUri: FormControl<string | null | undefined>,

		/** Destination IP address after NAT translation. */
		newDestinationIp: FormControl<string | null | undefined>,

		/**
		 * Destination port after NAT translation. Only valid when protocol is TCP or UDP.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		newDestinationPort: FormControl<number | null | undefined>,

		/** Source IP address after NAT translation. */
		newSourceIp: FormControl<string | null | undefined>,

		/**
		 * Source port after NAT translation. Only valid when protocol is TCP or UDP.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		newSourcePort: FormControl<number | null | undefined>,

		/** Destination IP address before NAT translation. */
		oldDestinationIp: FormControl<string | null | undefined>,

		/**
		 * Destination port before NAT translation. Only valid when protocol is TCP or UDP.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		oldDestinationPort: FormControl<number | null | undefined>,

		/** Source IP address before NAT translation. */
		oldSourceIp: FormControl<string | null | undefined>,

		/**
		 * Source port before NAT translation. Only valid when protocol is TCP or UDP.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		oldSourcePort: FormControl<number | null | undefined>,

		/** IP protocol in string format, for example: "TCP", "UDP", "ICMP". */
		protocol: FormControl<string | null | undefined>,

		/** Uri of the Cloud Router. Only valid when type is CLOUD_NAT. */
		routerUri: FormControl<string | null | undefined>,

		/** Type of NAT. */
		type: FormControl<NatInfoType | null | undefined>,
	}
	export function CreateNatInfoFormGroup() {
		return new FormGroup<NatInfoFormProperties>({
			natGatewayName: new FormControl<string | null | undefined>(undefined),
			networkUri: new FormControl<string | null | undefined>(undefined),
			newDestinationIp: new FormControl<string | null | undefined>(undefined),
			newDestinationPort: new FormControl<number | null | undefined>(undefined),
			newSourceIp: new FormControl<string | null | undefined>(undefined),
			newSourcePort: new FormControl<number | null | undefined>(undefined),
			oldDestinationIp: new FormControl<string | null | undefined>(undefined),
			oldDestinationPort: new FormControl<number | null | undefined>(undefined),
			oldSourceIp: new FormControl<string | null | undefined>(undefined),
			oldSourcePort: new FormControl<number | null | undefined>(undefined),
			protocol: new FormControl<string | null | undefined>(undefined),
			routerUri: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<NatInfoType | null | undefined>(undefined),
		});

	}

	export enum NatInfoType { TYPE_UNSPECIFIED = 'TYPE_UNSPECIFIED', INTERNAL_TO_EXTERNAL = 'INTERNAL_TO_EXTERNAL', EXTERNAL_TO_INTERNAL = 'EXTERNAL_TO_INTERNAL', CLOUD_NAT = 'CLOUD_NAT', PRIVATE_SERVICE_CONNECT = 'PRIVATE_SERVICE_CONNECT' }


	/** For display only. Metadata associated with a Compute Engine network. */
	export interface NetworkInfo {

		/** Name of a Compute Engine network. */
		displayName?: string | null;

		/** The IP range that matches the test. */
		matchedIpRange?: string | null;

		/** URI of a Compute Engine network. */
		uri?: string | null;
	}

	/** For display only. Metadata associated with a Compute Engine network. */
	export interface NetworkInfoFormProperties {

		/** Name of a Compute Engine network. */
		displayName: FormControl<string | null | undefined>,

		/** The IP range that matches the test. */
		matchedIpRange: FormControl<string | null | undefined>,

		/** URI of a Compute Engine network. */
		uri: FormControl<string | null | undefined>,
	}
	export function CreateNetworkInfoFormGroup() {
		return new FormGroup<NetworkInfoFormProperties>({
			displayName: new FormControl<string | null | undefined>(undefined),
			matchedIpRange: new FormControl<string | null | undefined>(undefined),
			uri: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** For display only. Metadata associated with ProxyConnection. */
	export interface ProxyConnectionInfo {

		/** URI of the network where connection is proxied. */
		networkUri?: string | null;

		/** Destination IP address of a new connection. */
		newDestinationIp?: string | null;

		/**
		 * Destination port of a new connection. Only valid when protocol is TCP or UDP.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		newDestinationPort?: number | null;

		/** Source IP address of a new connection. */
		newSourceIp?: string | null;

		/**
		 * Source port of a new connection. Only valid when protocol is TCP or UDP.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		newSourcePort?: number | null;

		/** Destination IP address of an original connection */
		oldDestinationIp?: string | null;

		/**
		 * Destination port of an original connection. Only valid when protocol is TCP or UDP.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		oldDestinationPort?: number | null;

		/** Source IP address of an original connection. */
		oldSourceIp?: string | null;

		/**
		 * Source port of an original connection. Only valid when protocol is TCP or UDP.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		oldSourcePort?: number | null;

		/** IP protocol in string format, for example: "TCP", "UDP", "ICMP". */
		protocol?: string | null;

		/** Uri of proxy subnet. */
		subnetUri?: string | null;
	}

	/** For display only. Metadata associated with ProxyConnection. */
	export interface ProxyConnectionInfoFormProperties {

		/** URI of the network where connection is proxied. */
		networkUri: FormControl<string | null | undefined>,

		/** Destination IP address of a new connection. */
		newDestinationIp: FormControl<string | null | undefined>,

		/**
		 * Destination port of a new connection. Only valid when protocol is TCP or UDP.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		newDestinationPort: FormControl<number | null | undefined>,

		/** Source IP address of a new connection. */
		newSourceIp: FormControl<string | null | undefined>,

		/**
		 * Source port of a new connection. Only valid when protocol is TCP or UDP.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		newSourcePort: FormControl<number | null | undefined>,

		/** Destination IP address of an original connection */
		oldDestinationIp: FormControl<string | null | undefined>,

		/**
		 * Destination port of an original connection. Only valid when protocol is TCP or UDP.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		oldDestinationPort: FormControl<number | null | undefined>,

		/** Source IP address of an original connection. */
		oldSourceIp: FormControl<string | null | undefined>,

		/**
		 * Source port of an original connection. Only valid when protocol is TCP or UDP.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		oldSourcePort: FormControl<number | null | undefined>,

		/** IP protocol in string format, for example: "TCP", "UDP", "ICMP". */
		protocol: FormControl<string | null | undefined>,

		/** Uri of proxy subnet. */
		subnetUri: FormControl<string | null | undefined>,
	}
	export function CreateProxyConnectionInfoFormGroup() {
		return new FormGroup<ProxyConnectionInfoFormProperties>({
			networkUri: new FormControl<string | null | undefined>(undefined),
			newDestinationIp: new FormControl<string | null | undefined>(undefined),
			newDestinationPort: new FormControl<number | null | undefined>(undefined),
			newSourceIp: new FormControl<string | null | undefined>(undefined),
			newSourcePort: new FormControl<number | null | undefined>(undefined),
			oldDestinationIp: new FormControl<string | null | undefined>(undefined),
			oldDestinationPort: new FormControl<number | null | undefined>(undefined),
			oldSourceIp: new FormControl<string | null | undefined>(undefined),
			oldSourcePort: new FormControl<number | null | undefined>(undefined),
			protocol: new FormControl<string | null | undefined>(undefined),
			subnetUri: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** For display only. Metadata associated with a Compute Engine route. */
	export interface RouteInfo {

		/** Destination IP range of the route. */
		destIpRange?: string | null;

		/** Destination port ranges of the route. Policy based routes only. */
		destPortRanges?: Array<string>;

		/** Name of a route. */
		displayName?: string | null;

		/** Instance tags of the route. */
		instanceTags?: Array<string>;

		/** URI of a NCC Hub. NCC_HUB routes only. */
		nccHubUri?: string | null;

		/** URI of a NCC Spoke. NCC_HUB routes only. */
		nccSpokeUri?: string | null;

		/** URI of a Compute Engine network. NETWORK routes only. */
		networkUri?: string | null;

		/** Next hop of the route. */
		nextHop?: string | null;

		/** Type of next hop. */
		nextHopType?: RouteInfoNextHopType | null;

		/**
		 * Priority of the route.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		priority?: number | null;

		/** Protocols of the route. Policy based routes only. */
		protocols?: Array<string>;

		/** Indicates where route is applicable. */
		routeScope?: RouteInfoRouteScope | null;

		/** Type of route. */
		routeType?: RouteInfoRouteType | null;

		/** Source IP address range of the route. Policy based routes only. */
		srcIpRange?: string | null;

		/** Source port ranges of the route. Policy based routes only. */
		srcPortRanges?: Array<string>;

		/** URI of a route. Dynamic, peering static and peering dynamic routes do not have an URI. Advertised route from Google Cloud VPC to on-premises network also does not have an URI. */
		uri?: string | null;
	}

	/** For display only. Metadata associated with a Compute Engine route. */
	export interface RouteInfoFormProperties {

		/** Destination IP range of the route. */
		destIpRange: FormControl<string | null | undefined>,

		/** Name of a route. */
		displayName: FormControl<string | null | undefined>,

		/** URI of a NCC Hub. NCC_HUB routes only. */
		nccHubUri: FormControl<string | null | undefined>,

		/** URI of a NCC Spoke. NCC_HUB routes only. */
		nccSpokeUri: FormControl<string | null | undefined>,

		/** URI of a Compute Engine network. NETWORK routes only. */
		networkUri: FormControl<string | null | undefined>,

		/** Next hop of the route. */
		nextHop: FormControl<string | null | undefined>,

		/** Type of next hop. */
		nextHopType: FormControl<RouteInfoNextHopType | null | undefined>,

		/**
		 * Priority of the route.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		priority: FormControl<number | null | undefined>,

		/** Indicates where route is applicable. */
		routeScope: FormControl<RouteInfoRouteScope | null | undefined>,

		/** Type of route. */
		routeType: FormControl<RouteInfoRouteType | null | undefined>,

		/** Source IP address range of the route. Policy based routes only. */
		srcIpRange: FormControl<string | null | undefined>,

		/** URI of a route. Dynamic, peering static and peering dynamic routes do not have an URI. Advertised route from Google Cloud VPC to on-premises network also does not have an URI. */
		uri: FormControl<string | null | undefined>,
	}
	export function CreateRouteInfoFormGroup() {
		return new FormGroup<RouteInfoFormProperties>({
			destIpRange: new FormControl<string | null | undefined>(undefined),
			displayName: new FormControl<string | null | undefined>(undefined),
			nccHubUri: new FormControl<string | null | undefined>(undefined),
			nccSpokeUri: new FormControl<string | null | undefined>(undefined),
			networkUri: new FormControl<string | null | undefined>(undefined),
			nextHop: new FormControl<string | null | undefined>(undefined),
			nextHopType: new FormControl<RouteInfoNextHopType | null | undefined>(undefined),
			priority: new FormControl<number | null | undefined>(undefined),
			routeScope: new FormControl<RouteInfoRouteScope | null | undefined>(undefined),
			routeType: new FormControl<RouteInfoRouteType | null | undefined>(undefined),
			srcIpRange: new FormControl<string | null | undefined>(undefined),
			uri: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum RouteInfoNextHopType { NEXT_HOP_TYPE_UNSPECIFIED = 'NEXT_HOP_TYPE_UNSPECIFIED', NEXT_HOP_IP = 'NEXT_HOP_IP', NEXT_HOP_INSTANCE = 'NEXT_HOP_INSTANCE', NEXT_HOP_NETWORK = 'NEXT_HOP_NETWORK', NEXT_HOP_PEERING = 'NEXT_HOP_PEERING', NEXT_HOP_INTERCONNECT = 'NEXT_HOP_INTERCONNECT', NEXT_HOP_VPN_TUNNEL = 'NEXT_HOP_VPN_TUNNEL', NEXT_HOP_VPN_GATEWAY = 'NEXT_HOP_VPN_GATEWAY', NEXT_HOP_INTERNET_GATEWAY = 'NEXT_HOP_INTERNET_GATEWAY', NEXT_HOP_BLACKHOLE = 'NEXT_HOP_BLACKHOLE', NEXT_HOP_ILB = 'NEXT_HOP_ILB', NEXT_HOP_ROUTER_APPLIANCE = 'NEXT_HOP_ROUTER_APPLIANCE', NEXT_HOP_NCC_HUB = 'NEXT_HOP_NCC_HUB' }

	export enum RouteInfoRouteScope { ROUTE_SCOPE_UNSPECIFIED = 'ROUTE_SCOPE_UNSPECIFIED', NETWORK = 'NETWORK', NCC_HUB = 'NCC_HUB' }

	export enum RouteInfoRouteType { ROUTE_TYPE_UNSPECIFIED = 'ROUTE_TYPE_UNSPECIFIED', SUBNET = 'SUBNET', STATIC = 'STATIC', DYNAMIC = 'DYNAMIC', PEERING_SUBNET = 'PEERING_SUBNET', PEERING_STATIC = 'PEERING_STATIC', PEERING_DYNAMIC = 'PEERING_DYNAMIC', POLICY_BASED = 'POLICY_BASED' }

	export enum StepState { STATE_UNSPECIFIED = 'STATE_UNSPECIFIED', START_FROM_INSTANCE = 'START_FROM_INSTANCE', START_FROM_INTERNET = 'START_FROM_INTERNET', START_FROM_GOOGLE_SERVICE = 'START_FROM_GOOGLE_SERVICE', START_FROM_PRIVATE_NETWORK = 'START_FROM_PRIVATE_NETWORK', START_FROM_GKE_MASTER = 'START_FROM_GKE_MASTER', START_FROM_CLOUD_SQL_INSTANCE = 'START_FROM_CLOUD_SQL_INSTANCE', START_FROM_CLOUD_FUNCTION = 'START_FROM_CLOUD_FUNCTION', START_FROM_APP_ENGINE_VERSION = 'START_FROM_APP_ENGINE_VERSION', START_FROM_CLOUD_RUN_REVISION = 'START_FROM_CLOUD_RUN_REVISION', APPLY_INGRESS_FIREWALL_RULE = 'APPLY_INGRESS_FIREWALL_RULE', APPLY_EGRESS_FIREWALL_RULE = 'APPLY_EGRESS_FIREWALL_RULE', APPLY_ROUTE = 'APPLY_ROUTE', APPLY_FORWARDING_RULE = 'APPLY_FORWARDING_RULE', ANALYZE_LOAD_BALANCER_BACKEND = 'ANALYZE_LOAD_BALANCER_BACKEND', SPOOFING_APPROVED = 'SPOOFING_APPROVED', ARRIVE_AT_INSTANCE = 'ARRIVE_AT_INSTANCE', ARRIVE_AT_INTERNAL_LOAD_BALANCER = 'ARRIVE_AT_INTERNAL_LOAD_BALANCER', ARRIVE_AT_EXTERNAL_LOAD_BALANCER = 'ARRIVE_AT_EXTERNAL_LOAD_BALANCER', ARRIVE_AT_VPN_GATEWAY = 'ARRIVE_AT_VPN_GATEWAY', ARRIVE_AT_VPN_TUNNEL = 'ARRIVE_AT_VPN_TUNNEL', ARRIVE_AT_VPC_CONNECTOR = 'ARRIVE_AT_VPC_CONNECTOR', NAT = 'NAT', PROXY_CONNECTION = 'PROXY_CONNECTION', DELIVER = 'DELIVER', DROP = 'DROP', FORWARD = 'FORWARD', ABORT = 'ABORT', VIEWER_PERMISSION_MISSING = 'VIEWER_PERMISSION_MISSING' }


	/** For display only. Metadata associated with a VPC connector. */
	export interface VpcConnectorInfo {

		/** Name of a VPC connector. */
		displayName?: string | null;

		/** Location in which the VPC connector is deployed. */
		location?: string | null;

		/** URI of a VPC connector. */
		uri?: string | null;
	}

	/** For display only. Metadata associated with a VPC connector. */
	export interface VpcConnectorInfoFormProperties {

		/** Name of a VPC connector. */
		displayName: FormControl<string | null | undefined>,

		/** Location in which the VPC connector is deployed. */
		location: FormControl<string | null | undefined>,

		/** URI of a VPC connector. */
		uri: FormControl<string | null | undefined>,
	}
	export function CreateVpcConnectorInfoFormGroup() {
		return new FormGroup<VpcConnectorInfoFormProperties>({
			displayName: new FormControl<string | null | undefined>(undefined),
			location: new FormControl<string | null | undefined>(undefined),
			uri: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** For display only. Metadata associated with a Compute Engine VPN gateway. */
	export interface VpnGatewayInfo {

		/** Name of a VPN gateway. */
		displayName?: string | null;

		/** IP address of the VPN gateway. */
		ipAddress?: string | null;

		/** URI of a Compute Engine network where the VPN gateway is configured. */
		networkUri?: string | null;

		/** Name of a Google Cloud region where this VPN gateway is configured. */
		region?: string | null;

		/** URI of a VPN gateway. */
		uri?: string | null;

		/** A VPN tunnel that is associated with this VPN gateway. There may be multiple VPN tunnels configured on a VPN gateway, and only the one relevant to the test is displayed. */
		vpnTunnelUri?: string | null;
	}

	/** For display only. Metadata associated with a Compute Engine VPN gateway. */
	export interface VpnGatewayInfoFormProperties {

		/** Name of a VPN gateway. */
		displayName: FormControl<string | null | undefined>,

		/** IP address of the VPN gateway. */
		ipAddress: FormControl<string | null | undefined>,

		/** URI of a Compute Engine network where the VPN gateway is configured. */
		networkUri: FormControl<string | null | undefined>,

		/** Name of a Google Cloud region where this VPN gateway is configured. */
		region: FormControl<string | null | undefined>,

		/** URI of a VPN gateway. */
		uri: FormControl<string | null | undefined>,

		/** A VPN tunnel that is associated with this VPN gateway. There may be multiple VPN tunnels configured on a VPN gateway, and only the one relevant to the test is displayed. */
		vpnTunnelUri: FormControl<string | null | undefined>,
	}
	export function CreateVpnGatewayInfoFormGroup() {
		return new FormGroup<VpnGatewayInfoFormProperties>({
			displayName: new FormControl<string | null | undefined>(undefined),
			ipAddress: new FormControl<string | null | undefined>(undefined),
			networkUri: new FormControl<string | null | undefined>(undefined),
			region: new FormControl<string | null | undefined>(undefined),
			uri: new FormControl<string | null | undefined>(undefined),
			vpnTunnelUri: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** For display only. Metadata associated with a Compute Engine VPN tunnel. */
	export interface VpnTunnelInfo {

		/** Name of a VPN tunnel. */
		displayName?: string | null;

		/** URI of a Compute Engine network where the VPN tunnel is configured. */
		networkUri?: string | null;

		/** Name of a Google Cloud region where this VPN tunnel is configured. */
		region?: string | null;

		/** URI of a VPN gateway at remote end of the tunnel. */
		remoteGateway?: string | null;

		/** Remote VPN gateway's IP address. */
		remoteGatewayIp?: string | null;

		/** Type of the routing policy. */
		routingType?: VpnTunnelInfoRoutingType | null;

		/** URI of the VPN gateway at local end of the tunnel. */
		sourceGateway?: string | null;

		/** Local VPN gateway's IP address. */
		sourceGatewayIp?: string | null;

		/** URI of a VPN tunnel. */
		uri?: string | null;
	}

	/** For display only. Metadata associated with a Compute Engine VPN tunnel. */
	export interface VpnTunnelInfoFormProperties {

		/** Name of a VPN tunnel. */
		displayName: FormControl<string | null | undefined>,

		/** URI of a Compute Engine network where the VPN tunnel is configured. */
		networkUri: FormControl<string | null | undefined>,

		/** Name of a Google Cloud region where this VPN tunnel is configured. */
		region: FormControl<string | null | undefined>,

		/** URI of a VPN gateway at remote end of the tunnel. */
		remoteGateway: FormControl<string | null | undefined>,

		/** Remote VPN gateway's IP address. */
		remoteGatewayIp: FormControl<string | null | undefined>,

		/** Type of the routing policy. */
		routingType: FormControl<VpnTunnelInfoRoutingType | null | undefined>,

		/** URI of the VPN gateway at local end of the tunnel. */
		sourceGateway: FormControl<string | null | undefined>,

		/** Local VPN gateway's IP address. */
		sourceGatewayIp: FormControl<string | null | undefined>,

		/** URI of a VPN tunnel. */
		uri: FormControl<string | null | undefined>,
	}
	export function CreateVpnTunnelInfoFormGroup() {
		return new FormGroup<VpnTunnelInfoFormProperties>({
			displayName: new FormControl<string | null | undefined>(undefined),
			networkUri: new FormControl<string | null | undefined>(undefined),
			region: new FormControl<string | null | undefined>(undefined),
			remoteGateway: new FormControl<string | null | undefined>(undefined),
			remoteGatewayIp: new FormControl<string | null | undefined>(undefined),
			routingType: new FormControl<VpnTunnelInfoRoutingType | null | undefined>(undefined),
			sourceGateway: new FormControl<string | null | undefined>(undefined),
			sourceGatewayIp: new FormControl<string | null | undefined>(undefined),
			uri: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum VpnTunnelInfoRoutingType { ROUTING_TYPE_UNSPECIFIED = 'ROUTING_TYPE_UNSPECIFIED', ROUTE_BASED = 'ROUTE_BASED', POLICY_BASED = 'POLICY_BASED', DYNAMIC = 'DYNAMIC' }


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


	/** Response for the `ListConnectivityTests` method. */
	export interface ListConnectivityTestsResponse {

		/** Page token to fetch the next set of Connectivity Tests. */
		nextPageToken?: string | null;

		/** List of Connectivity Tests. */
		resources?: Array<ConnectivityTest>;

		/** Locations that could not be reached (when querying all locations with `-`). */
		unreachable?: Array<string>;
	}

	/** Response for the `ListConnectivityTests` method. */
	export interface ListConnectivityTestsResponseFormProperties {

		/** Page token to fetch the next set of Connectivity Tests. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListConnectivityTestsResponseFormGroup() {
		return new FormGroup<ListConnectivityTestsResponseFormProperties>({
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


	/** Metadata describing an Operation */
	export interface OperationMetadata {

		/** API version. */
		apiVersion?: string | null;

		/** Specifies if cancellation was requested for the operation. */
		cancelRequested?: boolean | null;

		/** The time the operation was created. */
		createTime?: string | null;

		/** The time the operation finished running. */
		endTime?: string | null;

		/** Human-readable status of the operation, if any. */
		statusDetail?: string | null;

		/** Target of the operation - for example projects/project-1/locations/global/connectivityTests/test-1 */
		target?: string | null;

		/** Name of the verb executed by the operation. */
		verb?: string | null;
	}

	/** Metadata describing an Operation */
	export interface OperationMetadataFormProperties {

		/** API version. */
		apiVersion: FormControl<string | null | undefined>,

		/** Specifies if cancellation was requested for the operation. */
		cancelRequested: FormControl<boolean | null | undefined>,

		/** The time the operation was created. */
		createTime: FormControl<string | null | undefined>,

		/** The time the operation finished running. */
		endTime: FormControl<string | null | undefined>,

		/** Human-readable status of the operation, if any. */
		statusDetail: FormControl<string | null | undefined>,

		/** Target of the operation - for example projects/project-1/locations/global/connectivityTests/test-1 */
		target: FormControl<string | null | undefined>,

		/** Name of the verb executed by the operation. */
		verb: FormControl<string | null | undefined>,
	}
	export function CreateOperationMetadataFormGroup() {
		return new FormGroup<OperationMetadataFormProperties>({
			apiVersion: new FormControl<string | null | undefined>(undefined),
			cancelRequested: new FormControl<boolean | null | undefined>(undefined),
			createTime: new FormControl<string | null | undefined>(undefined),
			endTime: new FormControl<string | null | undefined>(undefined),
			statusDetail: new FormControl<string | null | undefined>(undefined),
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


	/** Request for the `RerunConnectivityTest` method. */
	export interface RerunConnectivityTestRequest {
	}

	/** Request for the `RerunConnectivityTest` method. */
	export interface RerunConnectivityTestRequestFormProperties {
	}
	export function CreateRerunConnectivityTestRequestFormGroup() {
		return new FormGroup<RerunConnectivityTestRequestFormProperties>({
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
		 * Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
		 * Delete v1/{name}
		 * @param {string} name The name of the operation resource to be deleted.
		 * @return {Empty} Successful response
		 */
		Networkmanagement_projects_locations_global_operations_delete(name: string): Observable<Empty> {
			return this.http.delete<Empty>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)), {});
		}

		/**
		 * Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
		 * Get v1/{name}
		 * @param {string} name The name of the operation resource.
		 * @return {Operation} Successful response
		 */
		Networkmanagement_projects_locations_global_operations_get(name: string): Observable<Operation> {
			return this.http.get<Operation>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)), {});
		}

		/**
		 * Updates the configuration of an existing `ConnectivityTest`. After you update a test, the reachability analysis is performed as part of the long running operation, which completes when the analysis completes. The Reachability state in the test resource is updated with the new result. If the endpoint specifications in `ConnectivityTest` are invalid (for example, they contain non-existent resources in the network, or the user does not have read permissions to the network configurations of listed projects), then the reachability result returns a value of UNKNOWN. If the endpoint specifications in `ConnectivityTest` are incomplete, the reachability result returns a value of `AMBIGUOUS`. See the documentation in `ConnectivityTest` for for more details.
		 * Patch v1/{name}
		 * @param {string} name Required. Unique name of the resource using the form: `projects/{project_id}/locations/global/connectivityTests/{test_id}`
		 * @param {string} updateMask Required. Mask of fields to update. At least one path must be supplied in this field.
		 * @return {Operation} Successful response
		 */
		Networkmanagement_projects_locations_global_connectivityTests_patch(name: string, updateMask: string | null | undefined, requestBody: ConnectivityTest): Observable<Operation> {
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
		Networkmanagement_projects_locations_list(name: string, filter: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListLocationsResponse> {
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
		Networkmanagement_projects_locations_global_operations_list(name: string, filter: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListOperationsResponse> {
			return this.http.get<ListOperationsResponse>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + '/operations&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
		 * Post v1/{name}:cancel
		 * @param {string} name The name of the operation resource to be cancelled.
		 * @return {Empty} Successful response
		 */
		Networkmanagement_projects_locations_global_operations_cancel(name: string, requestBody: CancelOperationRequest): Observable<Empty> {
			return this.http.post<Empty>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + ':cancel', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Rerun an existing `ConnectivityTest`. After the user triggers the rerun, the reachability analysis is performed as part of the long running operation, which completes when the analysis completes. Even though the test configuration remains the same, the reachability result may change due to underlying network configuration changes. If the endpoint specifications in `ConnectivityTest` become invalid (for example, specified resources are deleted in the network, or you lost read permissions to the network configurations of listed projects), then the reachability result returns a value of `UNKNOWN`.
		 * Post v1/{name}:rerun
		 * @param {string} name Required. Connectivity Test resource name using the form: `projects/{project_id}/locations/global/connectivityTests/{test_id}`
		 * @return {Operation} Successful response
		 */
		Networkmanagement_projects_locations_global_connectivityTests_rerun(name: string, requestBody: RerunConnectivityTestRequest): Observable<Operation> {
			return this.http.post<Operation>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + ':rerun', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists all Connectivity Tests owned by a project.
		 * Get v1/{parent}/connectivityTests
		 * @param {string} parent Required. The parent resource of the Connectivity Tests: `projects/{project_id}/locations/global`
		 * @param {string} filter Lists the `ConnectivityTests` that match the filter expression. A filter expression filters the resources listed in the response. The expression must be of the form ` ` where operators: `<`, `>`, `<=`, `>=`, `!=`, `=`, `:` are supported (colon `:` represents a HAS operator which is roughly synonymous with equality). can refer to a proto or JSON field, or a synthetic field. Field names can be camelCase or snake_case. Examples: - Filter by name: name = "projects/proj-1/locations/global/connectivityTests/test-1 - Filter by labels: - Resources that have a key called `foo` labels.foo:* - Resources that have a key called `foo` whose value is `bar` labels.foo = bar
		 * @param {string} orderBy Field to use to sort the list.
		 * @param {number} pageSize Number of `ConnectivityTests` to return.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} pageToken Page token from an earlier query, as returned in `next_page_token`.
		 * @return {ListConnectivityTestsResponse} Successful response
		 */
		Networkmanagement_projects_locations_global_connectivityTests_list(parent: string, filter: string | null | undefined, orderBy: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListConnectivityTestsResponse> {
			return this.http.get<ListConnectivityTestsResponse>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/connectivityTests&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&orderBy=' + (orderBy == null ? '' : encodeURIComponent(orderBy)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Creates a new Connectivity Test. After you create a test, the reachability analysis is performed as part of the long running operation, which completes when the analysis completes. If the endpoint specifications in `ConnectivityTest` are invalid (for example, containing non-existent resources in the network, or you don't have read permissions to the network configurations of listed projects), then the reachability result returns a value of `UNKNOWN`. If the endpoint specifications in `ConnectivityTest` are incomplete, the reachability result returns a value of AMBIGUOUS. For more information, see the Connectivity Test documentation.
		 * Post v1/{parent}/connectivityTests
		 * @param {string} parent Required. The parent resource of the Connectivity Test to create: `projects/{project_id}/locations/global`
		 * @param {string} testId Required. The logical name of the Connectivity Test in your project with the following restrictions: * Must contain only lowercase letters, numbers, and hyphens. * Must start with a letter. * Must be between 1-40 characters. * Must end with a number or a letter. * Must be unique within the customer project
		 * @return {Operation} Successful response
		 */
		Networkmanagement_projects_locations_global_connectivityTests_create(parent: string, testId: string | null | undefined, requestBody: ConnectivityTest): Observable<Operation> {
			return this.http.post<Operation>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/connectivityTests&testId=' + (testId == null ? '' : encodeURIComponent(testId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
		 * Get v1/{resource}:getIamPolicy
		 * @param {string} resource REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
		 * @param {number} options_requestedPolicyVersion Optional. The maximum policy version that will be used to format the policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset. The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies).
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {Policy} Successful response
		 */
		Networkmanagement_projects_locations_global_connectivityTests_getIamPolicy(resource: string, options_requestedPolicyVersion: number | null | undefined): Observable<Policy> {
			return this.http.get<Policy>(this.baseUri + 'v1/' + (resource == null ? '' : encodeURIComponent(resource)) + ':getIamPolicy&options_requestedPolicyVersion=' + options_requestedPolicyVersion, {});
		}

		/**
		 * Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
		 * Post v1/{resource}:setIamPolicy
		 * @param {string} resource REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
		 * @return {Policy} Successful response
		 */
		Networkmanagement_projects_locations_global_connectivityTests_setIamPolicy(resource: string, requestBody: SetIamPolicyRequest): Observable<Policy> {
			return this.http.post<Policy>(this.baseUri + 'v1/' + (resource == null ? '' : encodeURIComponent(resource)) + ':setIamPolicy', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
		 * Post v1/{resource}:testIamPermissions
		 * @param {string} resource REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
		 * @return {TestIamPermissionsResponse} Successful response
		 */
		Networkmanagement_projects_locations_global_connectivityTests_testIamPermissions(resource: string, requestBody: TestIamPermissionsRequest): Observable<TestIamPermissionsResponse> {
			return this.http.post<TestIamPermissionsResponse>(this.baseUri + 'v1/' + (resource == null ? '' : encodeURIComponent(resource)) + ':testIamPermissions', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

}

