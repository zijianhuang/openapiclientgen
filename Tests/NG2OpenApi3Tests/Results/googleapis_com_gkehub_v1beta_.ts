import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** **Anthos Observability**: Spec */
	export interface AnthosObservabilityFeatureSpec {

		/** **Anthosobservability**: Per-Membership Feature spec. */
		defaultMembershipSpec?: AnthosObservabilityMembershipSpec;
	}

	/** **Anthos Observability**: Spec */
	export interface AnthosObservabilityFeatureSpecFormProperties {
	}
	export function CreateAnthosObservabilityFeatureSpecFormGroup() {
		return new FormGroup<AnthosObservabilityFeatureSpecFormProperties>({
		});

	}


	/** **Anthosobservability**: Per-Membership Feature spec. */
	export interface AnthosObservabilityMembershipSpec {

		/** Use full of metrics rather than optimized metrics. See https://cloud.google.com/anthos/clusters/docs/on-prem/1.8/concepts/logging-and-monitoring#optimized_metrics_default_metrics */
		doNotOptimizeMetrics?: boolean | null;

		/** Enable collecting and reporting metrics and logs from user apps. */
		enableStackdriverOnApplications?: boolean | null;

		/** the version of stackdriver operator used by this feature */
		version?: string | null;
	}

	/** **Anthosobservability**: Per-Membership Feature spec. */
	export interface AnthosObservabilityMembershipSpecFormProperties {

		/** Use full of metrics rather than optimized metrics. See https://cloud.google.com/anthos/clusters/docs/on-prem/1.8/concepts/logging-and-monitoring#optimized_metrics_default_metrics */
		doNotOptimizeMetrics: FormControl<boolean | null | undefined>,

		/** Enable collecting and reporting metrics and logs from user apps. */
		enableStackdriverOnApplications: FormControl<boolean | null | undefined>,

		/** the version of stackdriver operator used by this feature */
		version: FormControl<string | null | undefined>,
	}
	export function CreateAnthosObservabilityMembershipSpecFormGroup() {
		return new FormGroup<AnthosObservabilityMembershipSpecFormProperties>({
			doNotOptimizeMetrics: new FormControl<boolean | null | undefined>(undefined),
			enableStackdriverOnApplications: new FormControl<boolean | null | undefined>(undefined),
			version: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Spec for App Dev Experience Feature. */
	export interface AppDevExperienceFeatureSpec {
	}

	/** Spec for App Dev Experience Feature. */
	export interface AppDevExperienceFeatureSpecFormProperties {
	}
	export function CreateAppDevExperienceFeatureSpecFormGroup() {
		return new FormGroup<AppDevExperienceFeatureSpecFormProperties>({
		});

	}


	/** State for App Dev Exp Feature. */
	export interface AppDevExperienceFeatureState {

		/** Status specifies state for the subcomponent. */
		networkingInstallSucceeded?: Status;
	}

	/** State for App Dev Exp Feature. */
	export interface AppDevExperienceFeatureStateFormProperties {
	}
	export function CreateAppDevExperienceFeatureStateFormGroup() {
		return new FormGroup<AppDevExperienceFeatureStateFormProperties>({
		});

	}


	/** Status specifies state for the subcomponent. */
	export interface Status {

		/** Code specifies AppDevExperienceFeature's subcomponent ready state. */
		code?: StatusCode | null;

		/** Description is populated if Code is Failed, explaining why it has failed. */
		description?: string | null;
	}

	/** Status specifies state for the subcomponent. */
	export interface StatusFormProperties {

		/** Code specifies AppDevExperienceFeature's subcomponent ready state. */
		code: FormControl<StatusCode | null | undefined>,

		/** Description is populated if Code is Failed, explaining why it has failed. */
		description: FormControl<string | null | undefined>,
	}
	export function CreateStatusFormGroup() {
		return new FormGroup<StatusFormProperties>({
			code: new FormControl<StatusCode | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum StatusCode { CODE_UNSPECIFIED = 'CODE_UNSPECIFIED', OK = 'OK', FAILED = 'FAILED', UNKNOWN = 'UNKNOWN' }


	/** ApplianceCluster contains information specific to GDC Edge Appliance Clusters. */
	export interface ApplianceCluster {

		/** Immutable. Self-link of the Google Cloud resource for the Appliance Cluster. For example: //transferappliance.googleapis.com/projects/my-project/locations/us-west1-a/appliances/my-appliance */
		resourceLink?: string | null;
	}

	/** ApplianceCluster contains information specific to GDC Edge Appliance Clusters. */
	export interface ApplianceClusterFormProperties {

		/** Immutable. Self-link of the Google Cloud resource for the Appliance Cluster. For example: //transferappliance.googleapis.com/projects/my-project/locations/us-west1-a/appliances/my-appliance */
		resourceLink: FormControl<string | null | undefined>,
	}
	export function CreateApplianceClusterFormGroup() {
		return new FormGroup<ApplianceClusterFormProperties>({
			resourceLink: new FormControl<string | null | undefined>(undefined),
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


	/** Authority encodes how Google will recognize identities from this Membership. See the workload identity documentation for more details: https://cloud.google.com/kubernetes-engine/docs/how-to/workload-identity */
	export interface Authority {

		/** Output only. An identity provider that reflects the `issuer` in the workload identity pool. */
		identityProvider?: string | null;

		/** Optional. A JSON Web Token (JWT) issuer URI. `issuer` must start with `https://` and be a valid URL with length <2000 characters, it must use `location` rather than `zone` for GKE clusters. If set, then Google will allow valid OIDC tokens from this issuer to authenticate within the workload_identity_pool. OIDC discovery will be performed on this URI to validate tokens from the issuer. Clearing `issuer` disables Workload Identity. `issuer` cannot be directly modified; it must be cleared (and Workload Identity disabled) before using a new issuer (and re-enabling Workload Identity). */
		issuer?: string | null;

		/** Optional. OIDC verification keys for this Membership in JWKS format (RFC 7517). When this field is set, OIDC discovery will NOT be performed on `issuer`, and instead OIDC tokens will be validated using this field. */
		oidcJwks?: string | null;

		/** Output only. The name of the workload identity pool in which `issuer` will be recognized. There is a single Workload Identity Pool per Hub that is shared between all Memberships that belong to that Hub. For a Hub hosted in {PROJECT_ID}, the workload pool format is `{PROJECT_ID}.hub.id.goog`, although this is subject to change in newer versions of this API. */
		workloadIdentityPool?: string | null;
	}

	/** Authority encodes how Google will recognize identities from this Membership. See the workload identity documentation for more details: https://cloud.google.com/kubernetes-engine/docs/how-to/workload-identity */
	export interface AuthorityFormProperties {

		/** Output only. An identity provider that reflects the `issuer` in the workload identity pool. */
		identityProvider: FormControl<string | null | undefined>,

		/** Optional. A JSON Web Token (JWT) issuer URI. `issuer` must start with `https://` and be a valid URL with length <2000 characters, it must use `location` rather than `zone` for GKE clusters. If set, then Google will allow valid OIDC tokens from this issuer to authenticate within the workload_identity_pool. OIDC discovery will be performed on this URI to validate tokens from the issuer. Clearing `issuer` disables Workload Identity. `issuer` cannot be directly modified; it must be cleared (and Workload Identity disabled) before using a new issuer (and re-enabling Workload Identity). */
		issuer: FormControl<string | null | undefined>,

		/** Optional. OIDC verification keys for this Membership in JWKS format (RFC 7517). When this field is set, OIDC discovery will NOT be performed on `issuer`, and instead OIDC tokens will be validated using this field. */
		oidcJwks: FormControl<string | null | undefined>,

		/** Output only. The name of the workload identity pool in which `issuer` will be recognized. There is a single Workload Identity Pool per Hub that is shared between all Memberships that belong to that Hub. For a Hub hosted in {PROJECT_ID}, the workload pool format is `{PROJECT_ID}.hub.id.goog`, although this is subject to change in newer versions of this API. */
		workloadIdentityPool: FormControl<string | null | undefined>,
	}
	export function CreateAuthorityFormGroup() {
		return new FormGroup<AuthorityFormProperties>({
			identityProvider: new FormControl<string | null | undefined>(undefined),
			issuer: new FormControl<string | null | undefined>(undefined),
			oidcJwks: new FormControl<string | null | undefined>(undefined),
			workloadIdentityPool: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** BinaryAuthorizationConfig defines the fleet level configuration of binary authorization feature. */
	export interface BinaryAuthorizationConfig {

		/** Optional. Mode of operation for binauthz policy evaluation. */
		evaluationMode?: BinaryAuthorizationConfigEvaluationMode | null;

		/** Optional. Binauthz policies that apply to this cluster. */
		policyBindings?: Array<PolicyBinding>;
	}

	/** BinaryAuthorizationConfig defines the fleet level configuration of binary authorization feature. */
	export interface BinaryAuthorizationConfigFormProperties {

		/** Optional. Mode of operation for binauthz policy evaluation. */
		evaluationMode: FormControl<BinaryAuthorizationConfigEvaluationMode | null | undefined>,
	}
	export function CreateBinaryAuthorizationConfigFormGroup() {
		return new FormGroup<BinaryAuthorizationConfigFormProperties>({
			evaluationMode: new FormControl<BinaryAuthorizationConfigEvaluationMode | null | undefined>(undefined),
		});

	}

	export enum BinaryAuthorizationConfigEvaluationMode { EVALUATION_MODE_UNSPECIFIED = 'EVALUATION_MODE_UNSPECIFIED', DISABLED = 'DISABLED', POLICY_BINDINGS = 'POLICY_BINDINGS' }


	/** Binauthz policy that applies to this cluster. */
	export interface PolicyBinding {

		/** The relative resource name of the binauthz platform policy to audit. GKE platform policies have the following format: `projects/{project_number}/platforms/gke/policies/{policy_id}`. */
		name?: string | null;
	}

	/** Binauthz policy that applies to this cluster. */
	export interface PolicyBindingFormProperties {

		/** The relative resource name of the binauthz platform policy to audit. GKE platform policies have the following format: `projects/{project_number}/platforms/gke/policies/{policy_id}`. */
		name: FormControl<string | null | undefined>,
	}
	export function CreatePolicyBindingFormGroup() {
		return new FormGroup<PolicyBindingFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


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


	/** **ClusterUpgrade**: The configuration for the fleet-level ClusterUpgrade feature. */
	export interface ClusterUpgradeFleetSpec {

		/** Allow users to override some properties of each GKE upgrade. */
		gkeUpgradeOverrides?: Array<ClusterUpgradeGKEUpgradeOverride>;

		/** Post conditional checks after an upgrade has been applied on all eligible clusters. */
		postConditions?: ClusterUpgradePostConditions;

		/** This fleet consumes upgrades that have COMPLETE status code in the upstream fleets. See UpgradeStatus.Code for code definitions. The fleet name should be either fleet project number or id. This is defined as repeated for future proof reasons. Initial implementation will enforce at most one upstream fleet. */
		upstreamFleets?: Array<string>;
	}

	/** **ClusterUpgrade**: The configuration for the fleet-level ClusterUpgrade feature. */
	export interface ClusterUpgradeFleetSpecFormProperties {
	}
	export function CreateClusterUpgradeFleetSpecFormGroup() {
		return new FormGroup<ClusterUpgradeFleetSpecFormProperties>({
		});

	}


	/** Properties of a GKE upgrade that can be overridden by the user. For example, a user can skip soaking by overriding the soaking to 0. */
	export interface ClusterUpgradeGKEUpgradeOverride {

		/** Post conditional checks after an upgrade has been applied on all eligible clusters. */
		postConditions?: ClusterUpgradePostConditions;

		/** GKEUpgrade represents a GKE provided upgrade, e.g., control plane upgrade. */
		upgrade?: ClusterUpgradeGKEUpgrade;
	}

	/** Properties of a GKE upgrade that can be overridden by the user. For example, a user can skip soaking by overriding the soaking to 0. */
	export interface ClusterUpgradeGKEUpgradeOverrideFormProperties {
	}
	export function CreateClusterUpgradeGKEUpgradeOverrideFormGroup() {
		return new FormGroup<ClusterUpgradeGKEUpgradeOverrideFormProperties>({
		});

	}


	/** Post conditional checks after an upgrade has been applied on all eligible clusters. */
	export interface ClusterUpgradePostConditions {

		/** Required. Amount of time to "soak" after a rollout has been finished before marking it COMPLETE. Cannot exceed 30 days. Required. */
		soaking?: string | null;
	}

	/** Post conditional checks after an upgrade has been applied on all eligible clusters. */
	export interface ClusterUpgradePostConditionsFormProperties {

		/** Required. Amount of time to "soak" after a rollout has been finished before marking it COMPLETE. Cannot exceed 30 days. Required. */
		soaking: FormControl<string | null | undefined>,
	}
	export function CreateClusterUpgradePostConditionsFormGroup() {
		return new FormGroup<ClusterUpgradePostConditionsFormProperties>({
			soaking: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** GKEUpgrade represents a GKE provided upgrade, e.g., control plane upgrade. */
	export interface ClusterUpgradeGKEUpgrade {

		/** Name of the upgrade, e.g., "k8s_control_plane". It should be a valid upgrade name. It must not exceet 99 characters. */
		name?: string | null;

		/** Version of the upgrade, e.g., "1.22.1-gke.100". It should be a valid version. It must not exceet 99 characters. */
		version?: string | null;
	}

	/** GKEUpgrade represents a GKE provided upgrade, e.g., control plane upgrade. */
	export interface ClusterUpgradeGKEUpgradeFormProperties {

		/** Name of the upgrade, e.g., "k8s_control_plane". It should be a valid upgrade name. It must not exceet 99 characters. */
		name: FormControl<string | null | undefined>,

		/** Version of the upgrade, e.g., "1.22.1-gke.100". It should be a valid version. It must not exceet 99 characters. */
		version: FormControl<string | null | undefined>,
	}
	export function CreateClusterUpgradeGKEUpgradeFormGroup() {
		return new FormGroup<ClusterUpgradeGKEUpgradeFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			version: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** **ClusterUpgrade**: The state for the fleet-level ClusterUpgrade feature. */
	export interface ClusterUpgradeFleetState {

		/** This fleets whose upstream_fleets contain the current fleet. The fleet name should be either fleet project number or id. */
		downstreamFleets?: Array<string>;

		/** GKEUpgradeFeatureState contains feature states for GKE clusters in the scope. */
		gkeState?: ClusterUpgradeGKEUpgradeFeatureState;

		/** A list of memberships ignored by the feature. For example, manually upgraded clusters can be ignored if they are newer than the default versions of its release channel. The membership resource is in the format: `projects/{p}/locations/{l}/membership/{m}`. */
		ignored?: {[id: string]: ClusterUpgradeIgnoredMembership };
	}

	/** **ClusterUpgrade**: The state for the fleet-level ClusterUpgrade feature. */
	export interface ClusterUpgradeFleetStateFormProperties {

		/** A list of memberships ignored by the feature. For example, manually upgraded clusters can be ignored if they are newer than the default versions of its release channel. The membership resource is in the format: `projects/{p}/locations/{l}/membership/{m}`. */
		ignored: FormControl<{[id: string]: ClusterUpgradeIgnoredMembership } | null | undefined>,
	}
	export function CreateClusterUpgradeFleetStateFormGroup() {
		return new FormGroup<ClusterUpgradeFleetStateFormProperties>({
			ignored: new FormControl<{[id: string]: ClusterUpgradeIgnoredMembership } | null | undefined>(undefined),
		});

	}


	/** GKEUpgradeFeatureState contains feature states for GKE clusters in the scope. */
	export interface ClusterUpgradeGKEUpgradeFeatureState {

		/** Current conditions of the feature. */
		conditions?: Array<ClusterUpgradeGKEUpgradeFeatureCondition>;

		/** Upgrade state. It will eventually replace `state`. */
		upgradeState?: Array<ClusterUpgradeGKEUpgradeState>;
	}

	/** GKEUpgradeFeatureState contains feature states for GKE clusters in the scope. */
	export interface ClusterUpgradeGKEUpgradeFeatureStateFormProperties {
	}
	export function CreateClusterUpgradeGKEUpgradeFeatureStateFormGroup() {
		return new FormGroup<ClusterUpgradeGKEUpgradeFeatureStateFormProperties>({
		});

	}


	/** GKEUpgradeFeatureCondition describes the condition of the feature for GKE clusters at a certain point of time. */
	export interface ClusterUpgradeGKEUpgradeFeatureCondition {

		/** Reason why the feature is in this status. */
		reason?: string | null;

		/** Status of the condition, one of True, False, Unknown. */
		status?: string | null;

		/** Type of the condition, for example, "ready". */
		type?: string | null;

		/** Last timestamp the condition was updated. */
		updateTime?: string | null;
	}

	/** GKEUpgradeFeatureCondition describes the condition of the feature for GKE clusters at a certain point of time. */
	export interface ClusterUpgradeGKEUpgradeFeatureConditionFormProperties {

		/** Reason why the feature is in this status. */
		reason: FormControl<string | null | undefined>,

		/** Status of the condition, one of True, False, Unknown. */
		status: FormControl<string | null | undefined>,

		/** Type of the condition, for example, "ready". */
		type: FormControl<string | null | undefined>,

		/** Last timestamp the condition was updated. */
		updateTime: FormControl<string | null | undefined>,
	}
	export function CreateClusterUpgradeGKEUpgradeFeatureConditionFormGroup() {
		return new FormGroup<ClusterUpgradeGKEUpgradeFeatureConditionFormProperties>({
			reason: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
			updateTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** GKEUpgradeState is a GKEUpgrade and its state at the scope and fleet level. */
	export interface ClusterUpgradeGKEUpgradeState {

		/** Number of GKE clusters in each status code. */
		stats?: {[id: string]: string };

		/** UpgradeStatus provides status information for each upgrade. */
		status?: ClusterUpgradeUpgradeStatus;

		/** GKEUpgrade represents a GKE provided upgrade, e.g., control plane upgrade. */
		upgrade?: ClusterUpgradeGKEUpgrade;
	}

	/** GKEUpgradeState is a GKEUpgrade and its state at the scope and fleet level. */
	export interface ClusterUpgradeGKEUpgradeStateFormProperties {

		/** Number of GKE clusters in each status code. */
		stats: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateClusterUpgradeGKEUpgradeStateFormGroup() {
		return new FormGroup<ClusterUpgradeGKEUpgradeStateFormProperties>({
			stats: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}


	/** UpgradeStatus provides status information for each upgrade. */
	export interface ClusterUpgradeUpgradeStatus {

		/** Status code of the upgrade. */
		code?: ClusterUpgradeUpgradeStatusCode | null;

		/** Reason for this status. */
		reason?: string | null;

		/** Last timestamp the status was updated. */
		updateTime?: string | null;
	}

	/** UpgradeStatus provides status information for each upgrade. */
	export interface ClusterUpgradeUpgradeStatusFormProperties {

		/** Status code of the upgrade. */
		code: FormControl<ClusterUpgradeUpgradeStatusCode | null | undefined>,

		/** Reason for this status. */
		reason: FormControl<string | null | undefined>,

		/** Last timestamp the status was updated. */
		updateTime: FormControl<string | null | undefined>,
	}
	export function CreateClusterUpgradeUpgradeStatusFormGroup() {
		return new FormGroup<ClusterUpgradeUpgradeStatusFormProperties>({
			code: new FormControl<ClusterUpgradeUpgradeStatusCode | null | undefined>(undefined),
			reason: new FormControl<string | null | undefined>(undefined),
			updateTime: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ClusterUpgradeUpgradeStatusCode { CODE_UNSPECIFIED = 'CODE_UNSPECIFIED', INELIGIBLE = 'INELIGIBLE', PENDING = 'PENDING', IN_PROGRESS = 'IN_PROGRESS', SOAKING = 'SOAKING', FORCED_SOAKING = 'FORCED_SOAKING', COMPLETE = 'COMPLETE' }


	/** IgnoredMembership represents a membership ignored by the feature. A membership can be ignored because it was manually upgraded to a newer version than RC default. */
	export interface ClusterUpgradeIgnoredMembership {

		/** Time when the membership was first set to ignored. */
		ignoredTime?: string | null;

		/** Reason why the membership is ignored. */
		reason?: string | null;
	}

	/** IgnoredMembership represents a membership ignored by the feature. A membership can be ignored because it was manually upgraded to a newer version than RC default. */
	export interface ClusterUpgradeIgnoredMembershipFormProperties {

		/** Time when the membership was first set to ignored. */
		ignoredTime: FormControl<string | null | undefined>,

		/** Reason why the membership is ignored. */
		reason: FormControl<string | null | undefined>,
	}
	export function CreateClusterUpgradeIgnoredMembershipFormGroup() {
		return new FormGroup<ClusterUpgradeIgnoredMembershipFormProperties>({
			ignoredTime: new FormControl<string | null | undefined>(undefined),
			reason: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** ScopeGKEUpgradeState is a GKEUpgrade and its state per-membership. */
	export interface ClusterUpgradeMembershipGKEUpgradeState {

		/** UpgradeStatus provides status information for each upgrade. */
		status?: ClusterUpgradeUpgradeStatus;

		/** GKEUpgrade represents a GKE provided upgrade, e.g., control plane upgrade. */
		upgrade?: ClusterUpgradeGKEUpgrade;
	}

	/** ScopeGKEUpgradeState is a GKEUpgrade and its state per-membership. */
	export interface ClusterUpgradeMembershipGKEUpgradeStateFormProperties {
	}
	export function CreateClusterUpgradeMembershipGKEUpgradeStateFormGroup() {
		return new FormGroup<ClusterUpgradeMembershipGKEUpgradeStateFormProperties>({
		});

	}


	/** Per-membership state for this feature. */
	export interface ClusterUpgradeMembershipState {

		/** IgnoredMembership represents a membership ignored by the feature. A membership can be ignored because it was manually upgraded to a newer version than RC default. */
		ignored?: ClusterUpgradeIgnoredMembership;

		/** Actual upgrade state against desired. */
		upgrades?: Array<ClusterUpgradeMembershipGKEUpgradeState>;
	}

	/** Per-membership state for this feature. */
	export interface ClusterUpgradeMembershipStateFormProperties {
	}
	export function CreateClusterUpgradeMembershipStateFormGroup() {
		return new FormGroup<ClusterUpgradeMembershipStateFormProperties>({
		});

	}


	/** CommonFeatureSpec contains Hub-wide configuration information */
	export interface CommonFeatureSpec {

		/** **Anthos Observability**: Spec */
		anthosobservability?: AnthosObservabilityFeatureSpec;

		/** Spec for App Dev Experience Feature. */
		appdevexperience?: AppDevExperienceFeatureSpec;

		/** **ClusterUpgrade**: The configuration for the fleet-level ClusterUpgrade feature. */
		clusterupgrade?: ClusterUpgradeFleetSpec;

		/** **Fleet Observability**: The Hub-wide input for the FleetObservability feature. */
		fleetobservability?: FleetObservabilityFeatureSpec;

		/** **Multi-cluster Ingress**: The configuration for the MultiClusterIngress feature. */
		multiclusteringress?: MultiClusterIngressFeatureSpec;
	}

	/** CommonFeatureSpec contains Hub-wide configuration information */
	export interface CommonFeatureSpecFormProperties {
	}
	export function CreateCommonFeatureSpecFormGroup() {
		return new FormGroup<CommonFeatureSpecFormProperties>({
		});

	}


	/** **Fleet Observability**: The Hub-wide input for the FleetObservability feature. */
	export interface FleetObservabilityFeatureSpec {

		/** LoggingConfig defines the configuration for different types of logs. */
		loggingConfig?: FleetObservabilityLoggingConfig;
	}

	/** **Fleet Observability**: The Hub-wide input for the FleetObservability feature. */
	export interface FleetObservabilityFeatureSpecFormProperties {
	}
	export function CreateFleetObservabilityFeatureSpecFormGroup() {
		return new FormGroup<FleetObservabilityFeatureSpecFormProperties>({
		});

	}


	/** LoggingConfig defines the configuration for different types of logs. */
	export interface FleetObservabilityLoggingConfig {

		/** RoutingConfig configures the behaviour of fleet logging feature. */
		defaultConfig?: FleetObservabilityRoutingConfig;

		/** RoutingConfig configures the behaviour of fleet logging feature. */
		fleetScopeLogsConfig?: FleetObservabilityRoutingConfig;
	}

	/** LoggingConfig defines the configuration for different types of logs. */
	export interface FleetObservabilityLoggingConfigFormProperties {
	}
	export function CreateFleetObservabilityLoggingConfigFormGroup() {
		return new FormGroup<FleetObservabilityLoggingConfigFormProperties>({
		});

	}


	/** RoutingConfig configures the behaviour of fleet logging feature. */
	export interface FleetObservabilityRoutingConfig {

		/** mode configures the logs routing mode. */
		mode?: FleetObservabilityRoutingConfigMode | null;
	}

	/** RoutingConfig configures the behaviour of fleet logging feature. */
	export interface FleetObservabilityRoutingConfigFormProperties {

		/** mode configures the logs routing mode. */
		mode: FormControl<FleetObservabilityRoutingConfigMode | null | undefined>,
	}
	export function CreateFleetObservabilityRoutingConfigFormGroup() {
		return new FormGroup<FleetObservabilityRoutingConfigFormProperties>({
			mode: new FormControl<FleetObservabilityRoutingConfigMode | null | undefined>(undefined),
		});

	}

	export enum FleetObservabilityRoutingConfigMode { MODE_UNSPECIFIED = 'MODE_UNSPECIFIED', COPY = 'COPY', MOVE = 'MOVE' }


	/** **Multi-cluster Ingress**: The configuration for the MultiClusterIngress feature. */
	export interface MultiClusterIngressFeatureSpec {

		/** Deprecated: This field will be ignored and should not be set. Customer's billing structure. */
		billing?: MultiClusterIngressFeatureSpecBilling | null;

		/** Fully-qualified Membership name which hosts the MultiClusterIngress CRD. Example: `projects/foo-proj/locations/global/memberships/bar` */
		configMembership?: string | null;
	}

	/** **Multi-cluster Ingress**: The configuration for the MultiClusterIngress feature. */
	export interface MultiClusterIngressFeatureSpecFormProperties {

		/** Deprecated: This field will be ignored and should not be set. Customer's billing structure. */
		billing: FormControl<MultiClusterIngressFeatureSpecBilling | null | undefined>,

		/** Fully-qualified Membership name which hosts the MultiClusterIngress CRD. Example: `projects/foo-proj/locations/global/memberships/bar` */
		configMembership: FormControl<string | null | undefined>,
	}
	export function CreateMultiClusterIngressFeatureSpecFormGroup() {
		return new FormGroup<MultiClusterIngressFeatureSpecFormProperties>({
			billing: new FormControl<MultiClusterIngressFeatureSpecBilling | null | undefined>(undefined),
			configMembership: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum MultiClusterIngressFeatureSpecBilling { BILLING_UNSPECIFIED = 'BILLING_UNSPECIFIED', PAY_AS_YOU_GO = 'PAY_AS_YOU_GO', ANTHOS_LICENSE = 'ANTHOS_LICENSE' }


	/** CommonFeatureState contains Hub-wide Feature status information. */
	export interface CommonFeatureState {

		/** State for App Dev Exp Feature. */
		appdevexperience?: AppDevExperienceFeatureState;

		/** **ClusterUpgrade**: The state for the fleet-level ClusterUpgrade feature. */
		clusterupgrade?: ClusterUpgradeFleetState;

		/** **FleetObservability**: Hub-wide Feature for FleetObservability feature. state. */
		fleetobservability?: FleetObservabilityFeatureState;

		/** FeatureState describes the high-level state of a Feature. It may be used to describe a Feature's state at the environ-level, or per-membershop, depending on the context. */
		state?: FeatureState;
	}

	/** CommonFeatureState contains Hub-wide Feature status information. */
	export interface CommonFeatureStateFormProperties {
	}
	export function CreateCommonFeatureStateFormGroup() {
		return new FormGroup<CommonFeatureStateFormProperties>({
		});

	}


	/** **FleetObservability**: Hub-wide Feature for FleetObservability feature. state. */
	export interface FleetObservabilityFeatureState {

		/** Feature state for logging feature. */
		logging?: FleetObservabilityFleetObservabilityLoggingState;

		/** Feature state for monitoring feature. */
		monitoring?: FleetObservabilityFleetObservabilityMonitoringState;
	}

	/** **FleetObservability**: Hub-wide Feature for FleetObservability feature. state. */
	export interface FleetObservabilityFeatureStateFormProperties {
	}
	export function CreateFleetObservabilityFeatureStateFormGroup() {
		return new FormGroup<FleetObservabilityFeatureStateFormProperties>({
		});

	}


	/** Feature state for logging feature. */
	export interface FleetObservabilityFleetObservabilityLoggingState {

		/** Base state for fleet observability feature. */
		defaultLog?: FleetObservabilityFleetObservabilityBaseFeatureState;

		/** Base state for fleet observability feature. */
		scopeLog?: FleetObservabilityFleetObservabilityBaseFeatureState;
	}

	/** Feature state for logging feature. */
	export interface FleetObservabilityFleetObservabilityLoggingStateFormProperties {
	}
	export function CreateFleetObservabilityFleetObservabilityLoggingStateFormGroup() {
		return new FormGroup<FleetObservabilityFleetObservabilityLoggingStateFormProperties>({
		});

	}


	/** Base state for fleet observability feature. */
	export interface FleetObservabilityFleetObservabilityBaseFeatureState {

		/** The high-level, machine-readable status of this Feature. */
		code?: FleetObservabilityFleetObservabilityBaseFeatureStateCode | null;

		/** Errors after reconciling the monitoring and logging feature if the code is not OK. */
		errors?: Array<FleetObservabilityFeatureError>;
	}

	/** Base state for fleet observability feature. */
	export interface FleetObservabilityFleetObservabilityBaseFeatureStateFormProperties {

		/** The high-level, machine-readable status of this Feature. */
		code: FormControl<FleetObservabilityFleetObservabilityBaseFeatureStateCode | null | undefined>,
	}
	export function CreateFleetObservabilityFleetObservabilityBaseFeatureStateFormGroup() {
		return new FormGroup<FleetObservabilityFleetObservabilityBaseFeatureStateFormProperties>({
			code: new FormControl<FleetObservabilityFleetObservabilityBaseFeatureStateCode | null | undefined>(undefined),
		});

	}

	export enum FleetObservabilityFleetObservabilityBaseFeatureStateCode { CODE_UNSPECIFIED = 'CODE_UNSPECIFIED', OK = 'OK', ERROR = 'ERROR' }


	/** All error details of the fleet observability feature. */
	export interface FleetObservabilityFeatureError {

		/** The code of the error. */
		code?: string | null;

		/** A human-readable description of the current status. */
		description?: string | null;
	}

	/** All error details of the fleet observability feature. */
	export interface FleetObservabilityFeatureErrorFormProperties {

		/** The code of the error. */
		code: FormControl<string | null | undefined>,

		/** A human-readable description of the current status. */
		description: FormControl<string | null | undefined>,
	}
	export function CreateFleetObservabilityFeatureErrorFormGroup() {
		return new FormGroup<FleetObservabilityFeatureErrorFormProperties>({
			code: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Feature state for monitoring feature. */
	export interface FleetObservabilityFleetObservabilityMonitoringState {

		/** Base state for fleet observability feature. */
		state?: FleetObservabilityFleetObservabilityBaseFeatureState;
	}

	/** Feature state for monitoring feature. */
	export interface FleetObservabilityFleetObservabilityMonitoringStateFormProperties {
	}
	export function CreateFleetObservabilityFleetObservabilityMonitoringStateFormGroup() {
		return new FormGroup<FleetObservabilityFleetObservabilityMonitoringStateFormProperties>({
		});

	}


	/** FeatureState describes the high-level state of a Feature. It may be used to describe a Feature's state at the environ-level, or per-membershop, depending on the context. */
	export interface FeatureState {

		/** The high-level, machine-readable status of this Feature. */
		code?: FeatureStateCode | null;

		/** A human-readable description of the current status. */
		description?: string | null;

		/** The time this status and any related Feature-specific details were updated. */
		updateTime?: string | null;
	}

	/** FeatureState describes the high-level state of a Feature. It may be used to describe a Feature's state at the environ-level, or per-membershop, depending on the context. */
	export interface FeatureStateFormProperties {

		/** The high-level, machine-readable status of this Feature. */
		code: FormControl<FeatureStateCode | null | undefined>,

		/** A human-readable description of the current status. */
		description: FormControl<string | null | undefined>,

		/** The time this status and any related Feature-specific details were updated. */
		updateTime: FormControl<string | null | undefined>,
	}
	export function CreateFeatureStateFormGroup() {
		return new FormGroup<FeatureStateFormProperties>({
			code: new FormControl<FeatureStateCode | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			updateTime: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum FeatureStateCode { CODE_UNSPECIFIED = 'CODE_UNSPECIFIED', OK = 'OK', WARNING = 'WARNING', ERROR = 'ERROR' }


	/** CommonFleetDefaultMemberConfigSpec contains default configuration information for memberships of a fleet */
	export interface CommonFleetDefaultMemberConfigSpec {

		/** **Anthos Config Management**: Configuration for a single cluster. Intended to parallel the ConfigManagement CR. */
		configmanagement?: ConfigManagementMembershipSpec;

		/** **Anthos Identity Service**: Configuration for a single Membership. */
		identityservice?: IdentityServiceMembershipSpec;

		/** **Service Mesh**: Spec for a single Membership for the servicemesh feature */
		mesh?: ServiceMeshMembershipSpec;

		/** **Policy Controller**: Configuration for a single cluster. Intended to parallel the PolicyController CR. */
		policycontroller?: PolicyControllerMembershipSpec;
	}

	/** CommonFleetDefaultMemberConfigSpec contains default configuration information for memberships of a fleet */
	export interface CommonFleetDefaultMemberConfigSpecFormProperties {
	}
	export function CreateCommonFleetDefaultMemberConfigSpecFormGroup() {
		return new FormGroup<CommonFleetDefaultMemberConfigSpecFormProperties>({
		});

	}


	/** **Anthos Config Management**: Configuration for a single cluster. Intended to parallel the ConfigManagement CR. */
	export interface ConfigManagementMembershipSpec {

		/** Configuration for Binauthz */
		binauthz?: ConfigManagementBinauthzConfig;

		/** The user-specified cluster name used by Config Sync cluster-name-selector annotation or ClusterSelector, for applying configs to only a subset of clusters. Omit this field if the cluster's fleet membership name is used by Config Sync cluster-name-selector annotation or ClusterSelector. Set this field if a name different from the cluster's fleet membership name is used by Config Sync cluster-name-selector annotation or ClusterSelector. */
		cluster?: string | null;

		/** Configuration for Config Sync */
		configSync?: ConfigManagementConfigSync;

		/** Configuration for Hierarchy Controller */
		hierarchyController?: ConfigManagementHierarchyControllerConfig;

		/** Configuration for Policy Controller */
		policyController?: ConfigManagementPolicyController;

		/** Version of ACM installed. */
		version?: string | null;
	}

	/** **Anthos Config Management**: Configuration for a single cluster. Intended to parallel the ConfigManagement CR. */
	export interface ConfigManagementMembershipSpecFormProperties {

		/** The user-specified cluster name used by Config Sync cluster-name-selector annotation or ClusterSelector, for applying configs to only a subset of clusters. Omit this field if the cluster's fleet membership name is used by Config Sync cluster-name-selector annotation or ClusterSelector. Set this field if a name different from the cluster's fleet membership name is used by Config Sync cluster-name-selector annotation or ClusterSelector. */
		cluster: FormControl<string | null | undefined>,

		/** Version of ACM installed. */
		version: FormControl<string | null | undefined>,
	}
	export function CreateConfigManagementMembershipSpecFormGroup() {
		return new FormGroup<ConfigManagementMembershipSpecFormProperties>({
			cluster: new FormControl<string | null | undefined>(undefined),
			version: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Configuration for Binauthz */
	export interface ConfigManagementBinauthzConfig {

		/** Whether binauthz is enabled in this cluster. */
		enabled?: boolean | null;
	}

	/** Configuration for Binauthz */
	export interface ConfigManagementBinauthzConfigFormProperties {

		/** Whether binauthz is enabled in this cluster. */
		enabled: FormControl<boolean | null | undefined>,
	}
	export function CreateConfigManagementBinauthzConfigFormGroup() {
		return new FormGroup<ConfigManagementBinauthzConfigFormProperties>({
			enabled: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Configuration for Config Sync */
	export interface ConfigManagementConfigSync {

		/** Set to true to allow the vertical scaling. Defaults to false which disallows vertical scaling. This field is deprecated. */
		allowVerticalScale?: boolean | null;

		/** Enables the installation of ConfigSync. If set to true, ConfigSync resources will be created and the other ConfigSync fields will be applied if exist. If set to false, all other ConfigSync fields will be ignored, ConfigSync resources will be deleted. If omitted, ConfigSync resources will be managed depends on the presence of the git or oci field. */
		enabled?: boolean | null;

		/** Git repo configuration for a single cluster. */
		git?: ConfigManagementGitConfig;

		/** The Email of the Google Cloud Service Account (GSA) used for exporting Config Sync metrics to Cloud Monitoring and Cloud Monarch when Workload Identity is enabled. The GSA should have the Monitoring Metric Writer (roles/monitoring.metricWriter) IAM role. The Kubernetes ServiceAccount `default` in the namespace `config-management-monitoring` should be bound to the GSA. */
		metricsGcpServiceAccountEmail?: string | null;

		/** OCI repo configuration for a single cluster */
		oci?: ConfigManagementOciConfig;

		/** Set to true to enable the Config Sync admission webhook to prevent drifts. If set to `false`, disables the Config Sync admission webhook and does not prevent drifts. */
		preventDrift?: boolean | null;

		/** Specifies whether the Config Sync Repo is in "hierarchical" or "unstructured" mode. */
		sourceFormat?: string | null;
	}

	/** Configuration for Config Sync */
	export interface ConfigManagementConfigSyncFormProperties {

		/** Set to true to allow the vertical scaling. Defaults to false which disallows vertical scaling. This field is deprecated. */
		allowVerticalScale: FormControl<boolean | null | undefined>,

		/** Enables the installation of ConfigSync. If set to true, ConfigSync resources will be created and the other ConfigSync fields will be applied if exist. If set to false, all other ConfigSync fields will be ignored, ConfigSync resources will be deleted. If omitted, ConfigSync resources will be managed depends on the presence of the git or oci field. */
		enabled: FormControl<boolean | null | undefined>,

		/** The Email of the Google Cloud Service Account (GSA) used for exporting Config Sync metrics to Cloud Monitoring and Cloud Monarch when Workload Identity is enabled. The GSA should have the Monitoring Metric Writer (roles/monitoring.metricWriter) IAM role. The Kubernetes ServiceAccount `default` in the namespace `config-management-monitoring` should be bound to the GSA. */
		metricsGcpServiceAccountEmail: FormControl<string | null | undefined>,

		/** Set to true to enable the Config Sync admission webhook to prevent drifts. If set to `false`, disables the Config Sync admission webhook and does not prevent drifts. */
		preventDrift: FormControl<boolean | null | undefined>,

		/** Specifies whether the Config Sync Repo is in "hierarchical" or "unstructured" mode. */
		sourceFormat: FormControl<string | null | undefined>,
	}
	export function CreateConfigManagementConfigSyncFormGroup() {
		return new FormGroup<ConfigManagementConfigSyncFormProperties>({
			allowVerticalScale: new FormControl<boolean | null | undefined>(undefined),
			enabled: new FormControl<boolean | null | undefined>(undefined),
			metricsGcpServiceAccountEmail: new FormControl<string | null | undefined>(undefined),
			preventDrift: new FormControl<boolean | null | undefined>(undefined),
			sourceFormat: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Git repo configuration for a single cluster. */
	export interface ConfigManagementGitConfig {

		/** The Google Cloud Service Account Email used for auth when secret_type is gcpServiceAccount. */
		gcpServiceAccountEmail?: string | null;

		/** URL for the HTTPS proxy to be used when communicating with the Git repo. */
		httpsProxy?: string | null;

		/** The path within the Git repository that represents the top level of the repo to sync. Default: the root directory of the repository. */
		policyDir?: string | null;

		/** Type of secret configured for access to the Git repo. Must be one of ssh, cookiefile, gcenode, token, gcpserviceaccount or none. The validation of this is case-sensitive. Required. */
		secretType?: string | null;

		/** The branch of the repository to sync from. Default: master. */
		syncBranch?: string | null;

		/** The URL of the Git repository to use as the source of truth. */
		syncRepo?: string | null;

		/** Git revision (tag or hash) to check out. Default HEAD. */
		syncRev?: string | null;

		/** Period in seconds between consecutive syncs. Default: 15. */
		syncWaitSecs?: string | null;
	}

	/** Git repo configuration for a single cluster. */
	export interface ConfigManagementGitConfigFormProperties {

		/** The Google Cloud Service Account Email used for auth when secret_type is gcpServiceAccount. */
		gcpServiceAccountEmail: FormControl<string | null | undefined>,

		/** URL for the HTTPS proxy to be used when communicating with the Git repo. */
		httpsProxy: FormControl<string | null | undefined>,

		/** The path within the Git repository that represents the top level of the repo to sync. Default: the root directory of the repository. */
		policyDir: FormControl<string | null | undefined>,

		/** Type of secret configured for access to the Git repo. Must be one of ssh, cookiefile, gcenode, token, gcpserviceaccount or none. The validation of this is case-sensitive. Required. */
		secretType: FormControl<string | null | undefined>,

		/** The branch of the repository to sync from. Default: master. */
		syncBranch: FormControl<string | null | undefined>,

		/** The URL of the Git repository to use as the source of truth. */
		syncRepo: FormControl<string | null | undefined>,

		/** Git revision (tag or hash) to check out. Default HEAD. */
		syncRev: FormControl<string | null | undefined>,

		/** Period in seconds between consecutive syncs. Default: 15. */
		syncWaitSecs: FormControl<string | null | undefined>,
	}
	export function CreateConfigManagementGitConfigFormGroup() {
		return new FormGroup<ConfigManagementGitConfigFormProperties>({
			gcpServiceAccountEmail: new FormControl<string | null | undefined>(undefined),
			httpsProxy: new FormControl<string | null | undefined>(undefined),
			policyDir: new FormControl<string | null | undefined>(undefined),
			secretType: new FormControl<string | null | undefined>(undefined),
			syncBranch: new FormControl<string | null | undefined>(undefined),
			syncRepo: new FormControl<string | null | undefined>(undefined),
			syncRev: new FormControl<string | null | undefined>(undefined),
			syncWaitSecs: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** OCI repo configuration for a single cluster */
	export interface ConfigManagementOciConfig {

		/** The Google Cloud Service Account Email used for auth when secret_type is gcpServiceAccount. */
		gcpServiceAccountEmail?: string | null;

		/** The absolute path of the directory that contains the local resources. Default: the root directory of the image. */
		policyDir?: string | null;

		/** Type of secret configured for access to the Git repo. */
		secretType?: string | null;

		/** The OCI image repository URL for the package to sync from. e.g. `LOCATION-docker.pkg.dev/PROJECT_ID/REPOSITORY_NAME/PACKAGE_NAME`. */
		syncRepo?: string | null;

		/** Period in seconds between consecutive syncs. Default: 15. */
		syncWaitSecs?: string | null;
	}

	/** OCI repo configuration for a single cluster */
	export interface ConfigManagementOciConfigFormProperties {

		/** The Google Cloud Service Account Email used for auth when secret_type is gcpServiceAccount. */
		gcpServiceAccountEmail: FormControl<string | null | undefined>,

		/** The absolute path of the directory that contains the local resources. Default: the root directory of the image. */
		policyDir: FormControl<string | null | undefined>,

		/** Type of secret configured for access to the Git repo. */
		secretType: FormControl<string | null | undefined>,

		/** The OCI image repository URL for the package to sync from. e.g. `LOCATION-docker.pkg.dev/PROJECT_ID/REPOSITORY_NAME/PACKAGE_NAME`. */
		syncRepo: FormControl<string | null | undefined>,

		/** Period in seconds between consecutive syncs. Default: 15. */
		syncWaitSecs: FormControl<string | null | undefined>,
	}
	export function CreateConfigManagementOciConfigFormGroup() {
		return new FormGroup<ConfigManagementOciConfigFormProperties>({
			gcpServiceAccountEmail: new FormControl<string | null | undefined>(undefined),
			policyDir: new FormControl<string | null | undefined>(undefined),
			secretType: new FormControl<string | null | undefined>(undefined),
			syncRepo: new FormControl<string | null | undefined>(undefined),
			syncWaitSecs: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Configuration for Hierarchy Controller */
	export interface ConfigManagementHierarchyControllerConfig {

		/** Whether hierarchical resource quota is enabled in this cluster. */
		enableHierarchicalResourceQuota?: boolean | null;

		/** Whether pod tree labels are enabled in this cluster. */
		enablePodTreeLabels?: boolean | null;

		/** Whether Hierarchy Controller is enabled in this cluster. */
		enabled?: boolean | null;
	}

	/** Configuration for Hierarchy Controller */
	export interface ConfigManagementHierarchyControllerConfigFormProperties {

		/** Whether hierarchical resource quota is enabled in this cluster. */
		enableHierarchicalResourceQuota: FormControl<boolean | null | undefined>,

		/** Whether pod tree labels are enabled in this cluster. */
		enablePodTreeLabels: FormControl<boolean | null | undefined>,

		/** Whether Hierarchy Controller is enabled in this cluster. */
		enabled: FormControl<boolean | null | undefined>,
	}
	export function CreateConfigManagementHierarchyControllerConfigFormGroup() {
		return new FormGroup<ConfigManagementHierarchyControllerConfigFormProperties>({
			enableHierarchicalResourceQuota: new FormControl<boolean | null | undefined>(undefined),
			enablePodTreeLabels: new FormControl<boolean | null | undefined>(undefined),
			enabled: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Configuration for Policy Controller */
	export interface ConfigManagementPolicyController {

		/** Sets the interval for Policy Controller Audit Scans (in seconds). When set to 0, this disables audit functionality altogether. */
		auditIntervalSeconds?: string | null;

		/** Enables the installation of Policy Controller. If false, the rest of PolicyController fields take no effect. */
		enabled?: boolean | null;

		/** The set of namespaces that are excluded from Policy Controller checks. Namespaces do not need to currently exist on the cluster. */
		exemptableNamespaces?: Array<string>;

		/** Logs all denies and dry run failures. */
		logDeniesEnabled?: boolean | null;

		/** PolicyControllerMonitoring specifies the backends Policy Controller should export metrics to. For example, to specify metrics should be exported to Cloud Monitoring and Prometheus, specify backends: ["cloudmonitoring", "prometheus"] */
		monitoring?: ConfigManagementPolicyControllerMonitoring;

		/** Enable or disable mutation in policy controller. If true, mutation CRDs, webhook and controller deployment will be deployed to the cluster. */
		mutationEnabled?: boolean | null;

		/** Enables the ability to use Constraint Templates that reference to objects other than the object currently being evaluated. */
		referentialRulesEnabled?: boolean | null;

		/** Installs the default template library along with Policy Controller. */
		templateLibraryInstalled?: boolean | null;

		/** Output only. Last time this membership spec was updated. */
		updateTime?: string | null;
	}

	/** Configuration for Policy Controller */
	export interface ConfigManagementPolicyControllerFormProperties {

		/** Sets the interval for Policy Controller Audit Scans (in seconds). When set to 0, this disables audit functionality altogether. */
		auditIntervalSeconds: FormControl<string | null | undefined>,

		/** Enables the installation of Policy Controller. If false, the rest of PolicyController fields take no effect. */
		enabled: FormControl<boolean | null | undefined>,

		/** Logs all denies and dry run failures. */
		logDeniesEnabled: FormControl<boolean | null | undefined>,

		/** Enable or disable mutation in policy controller. If true, mutation CRDs, webhook and controller deployment will be deployed to the cluster. */
		mutationEnabled: FormControl<boolean | null | undefined>,

		/** Enables the ability to use Constraint Templates that reference to objects other than the object currently being evaluated. */
		referentialRulesEnabled: FormControl<boolean | null | undefined>,

		/** Installs the default template library along with Policy Controller. */
		templateLibraryInstalled: FormControl<boolean | null | undefined>,

		/** Output only. Last time this membership spec was updated. */
		updateTime: FormControl<string | null | undefined>,
	}
	export function CreateConfigManagementPolicyControllerFormGroup() {
		return new FormGroup<ConfigManagementPolicyControllerFormProperties>({
			auditIntervalSeconds: new FormControl<string | null | undefined>(undefined),
			enabled: new FormControl<boolean | null | undefined>(undefined),
			logDeniesEnabled: new FormControl<boolean | null | undefined>(undefined),
			mutationEnabled: new FormControl<boolean | null | undefined>(undefined),
			referentialRulesEnabled: new FormControl<boolean | null | undefined>(undefined),
			templateLibraryInstalled: new FormControl<boolean | null | undefined>(undefined),
			updateTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** PolicyControllerMonitoring specifies the backends Policy Controller should export metrics to. For example, to specify metrics should be exported to Cloud Monitoring and Prometheus, specify backends: ["cloudmonitoring", "prometheus"] */
	export interface ConfigManagementPolicyControllerMonitoring {

		/** Specifies the list of backends Policy Controller will export to. An empty list would effectively disable metrics export. */
		backends?: Array<string>;
	}

	/** PolicyControllerMonitoring specifies the backends Policy Controller should export metrics to. For example, to specify metrics should be exported to Cloud Monitoring and Prometheus, specify backends: ["cloudmonitoring", "prometheus"] */
	export interface ConfigManagementPolicyControllerMonitoringFormProperties {
	}
	export function CreateConfigManagementPolicyControllerMonitoringFormGroup() {
		return new FormGroup<ConfigManagementPolicyControllerMonitoringFormProperties>({
		});

	}


	/** **Anthos Identity Service**: Configuration for a single Membership. */
	export interface IdentityServiceMembershipSpec {

		/** A member may support multiple auth methods. */
		authMethods?: Array<IdentityServiceAuthMethod>;
	}

	/** **Anthos Identity Service**: Configuration for a single Membership. */
	export interface IdentityServiceMembershipSpecFormProperties {
	}
	export function CreateIdentityServiceMembershipSpecFormGroup() {
		return new FormGroup<IdentityServiceMembershipSpecFormProperties>({
		});

	}


	/** Configuration of an auth method for a member/cluster. Only one authentication method (e.g., OIDC and LDAP) can be set per AuthMethod. */
	export interface IdentityServiceAuthMethod {

		/** Configuration for the AzureAD Auth flow. */
		azureadConfig?: IdentityServiceAzureADConfig;

		/** Configuration for the Google Plugin Auth flow. */
		googleConfig?: IdentityServiceGoogleConfig;

		/** Identifier for auth config. */
		name?: string | null;

		/** Configuration for OIDC Auth flow. */
		oidcConfig?: IdentityServiceOidcConfig;

		/** Proxy server address to use for auth method. */
		proxy?: string | null;
	}

	/** Configuration of an auth method for a member/cluster. Only one authentication method (e.g., OIDC and LDAP) can be set per AuthMethod. */
	export interface IdentityServiceAuthMethodFormProperties {

		/** Identifier for auth config. */
		name: FormControl<string | null | undefined>,

		/** Proxy server address to use for auth method. */
		proxy: FormControl<string | null | undefined>,
	}
	export function CreateIdentityServiceAuthMethodFormGroup() {
		return new FormGroup<IdentityServiceAuthMethodFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			proxy: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Configuration for the AzureAD Auth flow. */
	export interface IdentityServiceAzureADConfig {

		/** ID for the registered client application that makes authentication requests to the Azure AD identity provider. */
		clientId?: string | null;

		/** Input only. Unencrypted AzureAD client secret will be passed to the GKE Hub CLH. */
		clientSecret?: string | null;

		/** Output only. Encrypted AzureAD client secret. */
		encryptedClientSecret?: string | null;

		/** The redirect URL that kubectl uses for authorization. */
		kubectlRedirectUri?: string | null;

		/** Kind of Azure AD account to be authenticated. Supported values are or for accounts belonging to a specific tenant. */
		tenant?: string | null;
	}

	/** Configuration for the AzureAD Auth flow. */
	export interface IdentityServiceAzureADConfigFormProperties {

		/** ID for the registered client application that makes authentication requests to the Azure AD identity provider. */
		clientId: FormControl<string | null | undefined>,

		/** Input only. Unencrypted AzureAD client secret will be passed to the GKE Hub CLH. */
		clientSecret: FormControl<string | null | undefined>,

		/** Output only. Encrypted AzureAD client secret. */
		encryptedClientSecret: FormControl<string | null | undefined>,

		/** The redirect URL that kubectl uses for authorization. */
		kubectlRedirectUri: FormControl<string | null | undefined>,

		/** Kind of Azure AD account to be authenticated. Supported values are or for accounts belonging to a specific tenant. */
		tenant: FormControl<string | null | undefined>,
	}
	export function CreateIdentityServiceAzureADConfigFormGroup() {
		return new FormGroup<IdentityServiceAzureADConfigFormProperties>({
			clientId: new FormControl<string | null | undefined>(undefined),
			clientSecret: new FormControl<string | null | undefined>(undefined),
			encryptedClientSecret: new FormControl<string | null | undefined>(undefined),
			kubectlRedirectUri: new FormControl<string | null | undefined>(undefined),
			tenant: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Configuration for the Google Plugin Auth flow. */
	export interface IdentityServiceGoogleConfig {

		/** Disable automatic configuration of Google Plugin on supported platforms. */
		disable?: boolean | null;
	}

	/** Configuration for the Google Plugin Auth flow. */
	export interface IdentityServiceGoogleConfigFormProperties {

		/** Disable automatic configuration of Google Plugin on supported platforms. */
		disable: FormControl<boolean | null | undefined>,
	}
	export function CreateIdentityServiceGoogleConfigFormGroup() {
		return new FormGroup<IdentityServiceGoogleConfigFormProperties>({
			disable: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Configuration for OIDC Auth flow. */
	export interface IdentityServiceOidcConfig {

		/** PEM-encoded CA for OIDC provider. */
		certificateAuthorityData?: string | null;

		/** ID for OIDC client application. */
		clientId?: string | null;

		/** Input only. Unencrypted OIDC client secret will be passed to the GKE Hub CLH. */
		clientSecret?: string | null;

		/** Flag to denote if reverse proxy is used to connect to auth provider. This flag should be set to true when provider is not reachable by Google Cloud Console. */
		deployCloudConsoleProxy?: boolean | null;

		/** Enable access token. */
		enableAccessToken?: boolean | null;

		/** Output only. Encrypted OIDC Client secret */
		encryptedClientSecret?: string | null;

		/** Comma-separated list of key-value pairs. */
		extraParams?: string | null;

		/** Prefix to prepend to group name. */
		groupPrefix?: string | null;

		/** Claim in OIDC ID token that holds group information. */
		groupsClaim?: string | null;

		/** URI for the OIDC provider. This should point to the level below .well-known/openid-configuration. */
		issuerUri?: string | null;

		/** Registered redirect uri to redirect users going through OAuth flow using kubectl plugin. */
		kubectlRedirectUri?: string | null;

		/** Comma-separated list of identifiers. */
		scopes?: string | null;

		/** Claim in OIDC ID token that holds username. */
		userClaim?: string | null;

		/** Prefix to prepend to user name. */
		userPrefix?: string | null;
	}

	/** Configuration for OIDC Auth flow. */
	export interface IdentityServiceOidcConfigFormProperties {

		/** PEM-encoded CA for OIDC provider. */
		certificateAuthorityData: FormControl<string | null | undefined>,

		/** ID for OIDC client application. */
		clientId: FormControl<string | null | undefined>,

		/** Input only. Unencrypted OIDC client secret will be passed to the GKE Hub CLH. */
		clientSecret: FormControl<string | null | undefined>,

		/** Flag to denote if reverse proxy is used to connect to auth provider. This flag should be set to true when provider is not reachable by Google Cloud Console. */
		deployCloudConsoleProxy: FormControl<boolean | null | undefined>,

		/** Enable access token. */
		enableAccessToken: FormControl<boolean | null | undefined>,

		/** Output only. Encrypted OIDC Client secret */
		encryptedClientSecret: FormControl<string | null | undefined>,

		/** Comma-separated list of key-value pairs. */
		extraParams: FormControl<string | null | undefined>,

		/** Prefix to prepend to group name. */
		groupPrefix: FormControl<string | null | undefined>,

		/** Claim in OIDC ID token that holds group information. */
		groupsClaim: FormControl<string | null | undefined>,

		/** URI for the OIDC provider. This should point to the level below .well-known/openid-configuration. */
		issuerUri: FormControl<string | null | undefined>,

		/** Registered redirect uri to redirect users going through OAuth flow using kubectl plugin. */
		kubectlRedirectUri: FormControl<string | null | undefined>,

		/** Comma-separated list of identifiers. */
		scopes: FormControl<string | null | undefined>,

		/** Claim in OIDC ID token that holds username. */
		userClaim: FormControl<string | null | undefined>,

		/** Prefix to prepend to user name. */
		userPrefix: FormControl<string | null | undefined>,
	}
	export function CreateIdentityServiceOidcConfigFormGroup() {
		return new FormGroup<IdentityServiceOidcConfigFormProperties>({
			certificateAuthorityData: new FormControl<string | null | undefined>(undefined),
			clientId: new FormControl<string | null | undefined>(undefined),
			clientSecret: new FormControl<string | null | undefined>(undefined),
			deployCloudConsoleProxy: new FormControl<boolean | null | undefined>(undefined),
			enableAccessToken: new FormControl<boolean | null | undefined>(undefined),
			encryptedClientSecret: new FormControl<string | null | undefined>(undefined),
			extraParams: new FormControl<string | null | undefined>(undefined),
			groupPrefix: new FormControl<string | null | undefined>(undefined),
			groupsClaim: new FormControl<string | null | undefined>(undefined),
			issuerUri: new FormControl<string | null | undefined>(undefined),
			kubectlRedirectUri: new FormControl<string | null | undefined>(undefined),
			scopes: new FormControl<string | null | undefined>(undefined),
			userClaim: new FormControl<string | null | undefined>(undefined),
			userPrefix: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** **Service Mesh**: Spec for a single Membership for the servicemesh feature */
	export interface ServiceMeshMembershipSpec {

		/** Deprecated: use `management` instead Enables automatic control plane management. */
		controlPlane?: ServiceMeshMembershipSpecControlPlane | null;

		/** Enables automatic Service Mesh management. */
		management?: ServiceMeshMembershipSpecManagement | null;
	}

	/** **Service Mesh**: Spec for a single Membership for the servicemesh feature */
	export interface ServiceMeshMembershipSpecFormProperties {

		/** Deprecated: use `management` instead Enables automatic control plane management. */
		controlPlane: FormControl<ServiceMeshMembershipSpecControlPlane | null | undefined>,

		/** Enables automatic Service Mesh management. */
		management: FormControl<ServiceMeshMembershipSpecManagement | null | undefined>,
	}
	export function CreateServiceMeshMembershipSpecFormGroup() {
		return new FormGroup<ServiceMeshMembershipSpecFormProperties>({
			controlPlane: new FormControl<ServiceMeshMembershipSpecControlPlane | null | undefined>(undefined),
			management: new FormControl<ServiceMeshMembershipSpecManagement | null | undefined>(undefined),
		});

	}

	export enum ServiceMeshMembershipSpecControlPlane { CONTROL_PLANE_MANAGEMENT_UNSPECIFIED = 'CONTROL_PLANE_MANAGEMENT_UNSPECIFIED', AUTOMATIC = 'AUTOMATIC', MANUAL = 'MANUAL' }

	export enum ServiceMeshMembershipSpecManagement { MANAGEMENT_UNSPECIFIED = 'MANAGEMENT_UNSPECIFIED', MANAGEMENT_AUTOMATIC = 'MANAGEMENT_AUTOMATIC', MANAGEMENT_MANUAL = 'MANAGEMENT_MANUAL' }


	/** **Policy Controller**: Configuration for a single cluster. Intended to parallel the PolicyController CR. */
	export interface PolicyControllerMembershipSpec {

		/** Configuration for Policy Controller */
		policyControllerHubConfig?: PolicyControllerHubConfig;

		/** Version of Policy Controller installed. */
		version?: string | null;
	}

	/** **Policy Controller**: Configuration for a single cluster. Intended to parallel the PolicyController CR. */
	export interface PolicyControllerMembershipSpecFormProperties {

		/** Version of Policy Controller installed. */
		version: FormControl<string | null | undefined>,
	}
	export function CreatePolicyControllerMembershipSpecFormGroup() {
		return new FormGroup<PolicyControllerMembershipSpecFormProperties>({
			version: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Configuration for Policy Controller */
	export interface PolicyControllerHubConfig {

		/** Sets the interval for Policy Controller Audit Scans (in seconds). When set to 0, this disables audit functionality altogether. */
		auditIntervalSeconds?: string | null;

		/** The maximum number of audit violations to be stored in a constraint. If not set, the internal default (currently 20) will be used. */
		constraintViolationLimit?: string | null;

		/** Map of deployment configs to deployments ("admission", "audit", "mutation'). */
		deploymentConfigs?: {[id: string]: PolicyControllerPolicyControllerDeploymentConfig };

		/** The set of namespaces that are excluded from Policy Controller checks. Namespaces do not need to currently exist on the cluster. */
		exemptableNamespaces?: Array<string>;

		/** The install_spec represents the intended state specified by the latest request that mutated install_spec in the feature spec, not the lifecycle state of the feature observed by the Hub feature controller that is reported in the feature state. */
		installSpec?: PolicyControllerHubConfigInstallSpec | null;

		/** Logs all denies and dry run failures. */
		logDeniesEnabled?: boolean | null;

		/** MonitoringConfig specifies the backends Policy Controller should export metrics to. For example, to specify metrics should be exported to Cloud Monitoring and Prometheus, specify backends: ["cloudmonitoring", "prometheus"] */
		monitoring?: PolicyControllerMonitoringConfig;

		/** Enables the ability to mutate resources using Policy Controller. */
		mutationEnabled?: boolean | null;

		/** PolicyContentSpec defines the user's desired content configuration on the cluster. */
		policyContent?: PolicyControllerPolicyContentSpec;

		/** Enables the ability to use Constraint Templates that reference to objects other than the object currently being evaluated. */
		referentialRulesEnabled?: boolean | null;
	}

	/** Configuration for Policy Controller */
	export interface PolicyControllerHubConfigFormProperties {

		/** Sets the interval for Policy Controller Audit Scans (in seconds). When set to 0, this disables audit functionality altogether. */
		auditIntervalSeconds: FormControl<string | null | undefined>,

		/** The maximum number of audit violations to be stored in a constraint. If not set, the internal default (currently 20) will be used. */
		constraintViolationLimit: FormControl<string | null | undefined>,

		/** Map of deployment configs to deployments ("admission", "audit", "mutation'). */
		deploymentConfigs: FormControl<{[id: string]: PolicyControllerPolicyControllerDeploymentConfig } | null | undefined>,

		/** The install_spec represents the intended state specified by the latest request that mutated install_spec in the feature spec, not the lifecycle state of the feature observed by the Hub feature controller that is reported in the feature state. */
		installSpec: FormControl<PolicyControllerHubConfigInstallSpec | null | undefined>,

		/** Logs all denies and dry run failures. */
		logDeniesEnabled: FormControl<boolean | null | undefined>,

		/** Enables the ability to mutate resources using Policy Controller. */
		mutationEnabled: FormControl<boolean | null | undefined>,

		/** Enables the ability to use Constraint Templates that reference to objects other than the object currently being evaluated. */
		referentialRulesEnabled: FormControl<boolean | null | undefined>,
	}
	export function CreatePolicyControllerHubConfigFormGroup() {
		return new FormGroup<PolicyControllerHubConfigFormProperties>({
			auditIntervalSeconds: new FormControl<string | null | undefined>(undefined),
			constraintViolationLimit: new FormControl<string | null | undefined>(undefined),
			deploymentConfigs: new FormControl<{[id: string]: PolicyControllerPolicyControllerDeploymentConfig } | null | undefined>(undefined),
			installSpec: new FormControl<PolicyControllerHubConfigInstallSpec | null | undefined>(undefined),
			logDeniesEnabled: new FormControl<boolean | null | undefined>(undefined),
			mutationEnabled: new FormControl<boolean | null | undefined>(undefined),
			referentialRulesEnabled: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Deployment-specific configuration. */
	export interface PolicyControllerPolicyControllerDeploymentConfig {

		/** ResourceRequirements describes the compute resource requirements. */
		containerResources?: PolicyControllerResourceRequirements;

		/** Pod affinity configuration. */
		podAffinity?: PolicyControllerPolicyControllerDeploymentConfigPodAffinity | null;

		/** Pod anti-affinity enablement. Deprecated: use `pod_affinity` instead. */
		podAntiAffinity?: boolean | null;

		/** Pod tolerations of node taints. */
		podTolerations?: Array<PolicyControllerToleration>;

		/** Pod replica count. */
		replicaCount?: string | null;
	}

	/** Deployment-specific configuration. */
	export interface PolicyControllerPolicyControllerDeploymentConfigFormProperties {

		/** Pod affinity configuration. */
		podAffinity: FormControl<PolicyControllerPolicyControllerDeploymentConfigPodAffinity | null | undefined>,

		/** Pod anti-affinity enablement. Deprecated: use `pod_affinity` instead. */
		podAntiAffinity: FormControl<boolean | null | undefined>,

		/** Pod replica count. */
		replicaCount: FormControl<string | null | undefined>,
	}
	export function CreatePolicyControllerPolicyControllerDeploymentConfigFormGroup() {
		return new FormGroup<PolicyControllerPolicyControllerDeploymentConfigFormProperties>({
			podAffinity: new FormControl<PolicyControllerPolicyControllerDeploymentConfigPodAffinity | null | undefined>(undefined),
			podAntiAffinity: new FormControl<boolean | null | undefined>(undefined),
			replicaCount: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** ResourceRequirements describes the compute resource requirements. */
	export interface PolicyControllerResourceRequirements {

		/** ResourceList contains container resource requirements. */
		limits?: PolicyControllerResourceList;

		/** ResourceList contains container resource requirements. */
		requests?: PolicyControllerResourceList;
	}

	/** ResourceRequirements describes the compute resource requirements. */
	export interface PolicyControllerResourceRequirementsFormProperties {
	}
	export function CreatePolicyControllerResourceRequirementsFormGroup() {
		return new FormGroup<PolicyControllerResourceRequirementsFormProperties>({
		});

	}


	/** ResourceList contains container resource requirements. */
	export interface PolicyControllerResourceList {

		/** CPU requirement expressed in Kubernetes resource units. */
		cpu?: string | null;

		/** Memory requirement expressed in Kubernetes resource units. */
		memory?: string | null;
	}

	/** ResourceList contains container resource requirements. */
	export interface PolicyControllerResourceListFormProperties {

		/** CPU requirement expressed in Kubernetes resource units. */
		cpu: FormControl<string | null | undefined>,

		/** Memory requirement expressed in Kubernetes resource units. */
		memory: FormControl<string | null | undefined>,
	}
	export function CreatePolicyControllerResourceListFormGroup() {
		return new FormGroup<PolicyControllerResourceListFormProperties>({
			cpu: new FormControl<string | null | undefined>(undefined),
			memory: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum PolicyControllerPolicyControllerDeploymentConfigPodAffinity { AFFINITY_UNSPECIFIED = 'AFFINITY_UNSPECIFIED', NO_AFFINITY = 'NO_AFFINITY', ANTI_AFFINITY = 'ANTI_AFFINITY' }


	/** Toleration of a node taint. */
	export interface PolicyControllerToleration {

		/** Matches a taint effect. */
		effect?: string | null;

		/** Matches a taint key (not necessarily unique). */
		key?: string | null;

		/** Matches a taint operator. */
		operator?: string | null;

		/** Matches a taint value. */
		value?: string | null;
	}

	/** Toleration of a node taint. */
	export interface PolicyControllerTolerationFormProperties {

		/** Matches a taint effect. */
		effect: FormControl<string | null | undefined>,

		/** Matches a taint key (not necessarily unique). */
		key: FormControl<string | null | undefined>,

		/** Matches a taint operator. */
		operator: FormControl<string | null | undefined>,

		/** Matches a taint value. */
		value: FormControl<string | null | undefined>,
	}
	export function CreatePolicyControllerTolerationFormGroup() {
		return new FormGroup<PolicyControllerTolerationFormProperties>({
			effect: new FormControl<string | null | undefined>(undefined),
			key: new FormControl<string | null | undefined>(undefined),
			operator: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum PolicyControllerHubConfigInstallSpec { INSTALL_SPEC_UNSPECIFIED = 'INSTALL_SPEC_UNSPECIFIED', INSTALL_SPEC_NOT_INSTALLED = 'INSTALL_SPEC_NOT_INSTALLED', INSTALL_SPEC_ENABLED = 'INSTALL_SPEC_ENABLED', INSTALL_SPEC_SUSPENDED = 'INSTALL_SPEC_SUSPENDED', INSTALL_SPEC_DETACHED = 'INSTALL_SPEC_DETACHED' }


	/** MonitoringConfig specifies the backends Policy Controller should export metrics to. For example, to specify metrics should be exported to Cloud Monitoring and Prometheus, specify backends: ["cloudmonitoring", "prometheus"] */
	export interface PolicyControllerMonitoringConfig {

		/** Specifies the list of backends Policy Controller will export to. An empty list would effectively disable metrics export. */
		backends?: Array<string>;
	}

	/** MonitoringConfig specifies the backends Policy Controller should export metrics to. For example, to specify metrics should be exported to Cloud Monitoring and Prometheus, specify backends: ["cloudmonitoring", "prometheus"] */
	export interface PolicyControllerMonitoringConfigFormProperties {
	}
	export function CreatePolicyControllerMonitoringConfigFormGroup() {
		return new FormGroup<PolicyControllerMonitoringConfigFormProperties>({
		});

	}


	/** PolicyContentSpec defines the user's desired content configuration on the cluster. */
	export interface PolicyControllerPolicyContentSpec {

		/** map of bundle name to BundleInstallSpec. The bundle name maps to the `bundleName` key in the `policycontroller.gke.io/constraintData` annotation on a constraint. */
		bundles?: {[id: string]: PolicyControllerBundleInstallSpec };

		/** The config specifying which default library templates to install. */
		templateLibrary?: PolicyControllerTemplateLibraryConfig;
	}

	/** PolicyContentSpec defines the user's desired content configuration on the cluster. */
	export interface PolicyControllerPolicyContentSpecFormProperties {

		/** map of bundle name to BundleInstallSpec. The bundle name maps to the `bundleName` key in the `policycontroller.gke.io/constraintData` annotation on a constraint. */
		bundles: FormControl<{[id: string]: PolicyControllerBundleInstallSpec } | null | undefined>,
	}
	export function CreatePolicyControllerPolicyContentSpecFormGroup() {
		return new FormGroup<PolicyControllerPolicyContentSpecFormProperties>({
			bundles: new FormControl<{[id: string]: PolicyControllerBundleInstallSpec } | null | undefined>(undefined),
		});

	}


	/** BundleInstallSpec is the specification configuration for a single managed bundle. */
	export interface PolicyControllerBundleInstallSpec {

		/** The set of namespaces to be exempted from the bundle. */
		exemptedNamespaces?: Array<string>;
	}

	/** BundleInstallSpec is the specification configuration for a single managed bundle. */
	export interface PolicyControllerBundleInstallSpecFormProperties {
	}
	export function CreatePolicyControllerBundleInstallSpecFormGroup() {
		return new FormGroup<PolicyControllerBundleInstallSpecFormProperties>({
		});

	}


	/** The config specifying which default library templates to install. */
	export interface PolicyControllerTemplateLibraryConfig {

		/** Configures the manner in which the template library is installed on the cluster. */
		installation?: PolicyControllerTemplateLibraryConfigInstallation | null;
	}

	/** The config specifying which default library templates to install. */
	export interface PolicyControllerTemplateLibraryConfigFormProperties {

		/** Configures the manner in which the template library is installed on the cluster. */
		installation: FormControl<PolicyControllerTemplateLibraryConfigInstallation | null | undefined>,
	}
	export function CreatePolicyControllerTemplateLibraryConfigFormGroup() {
		return new FormGroup<PolicyControllerTemplateLibraryConfigFormProperties>({
			installation: new FormControl<PolicyControllerTemplateLibraryConfigInstallation | null | undefined>(undefined),
		});

	}

	export enum PolicyControllerTemplateLibraryConfigInstallation { INSTALLATION_UNSPECIFIED = 'INSTALLATION_UNSPECIFIED', NOT_INSTALLED = 'NOT_INSTALLED', ALL = 'ALL' }


	/** State for Binauthz */
	export interface ConfigManagementBinauthzState {

		/** The version of binauthz. */
		version?: ConfigManagementBinauthzVersion;

		/** The state of the binauthz webhook. */
		webhook?: ConfigManagementBinauthzStateWebhook | null;
	}

	/** State for Binauthz */
	export interface ConfigManagementBinauthzStateFormProperties {

		/** The state of the binauthz webhook. */
		webhook: FormControl<ConfigManagementBinauthzStateWebhook | null | undefined>,
	}
	export function CreateConfigManagementBinauthzStateFormGroup() {
		return new FormGroup<ConfigManagementBinauthzStateFormProperties>({
			webhook: new FormControl<ConfigManagementBinauthzStateWebhook | null | undefined>(undefined),
		});

	}


	/** The version of binauthz. */
	export interface ConfigManagementBinauthzVersion {

		/** The version of the binauthz webhook. */
		webhookVersion?: string | null;
	}

	/** The version of binauthz. */
	export interface ConfigManagementBinauthzVersionFormProperties {

		/** The version of the binauthz webhook. */
		webhookVersion: FormControl<string | null | undefined>,
	}
	export function CreateConfigManagementBinauthzVersionFormGroup() {
		return new FormGroup<ConfigManagementBinauthzVersionFormProperties>({
			webhookVersion: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ConfigManagementBinauthzStateWebhook { DEPLOYMENT_STATE_UNSPECIFIED = 'DEPLOYMENT_STATE_UNSPECIFIED', NOT_INSTALLED = 'NOT_INSTALLED', INSTALLED = 'INSTALLED', ERROR = 'ERROR', PENDING = 'PENDING' }


	/** The state of ConfigSync's deployment on a cluster */
	export interface ConfigManagementConfigSyncDeploymentState {

		/** Deployment state of admission-webhook */
		admissionWebhook?: ConfigManagementBinauthzStateWebhook | null;

		/** Deployment state of the git-sync pod */
		gitSync?: ConfigManagementBinauthzStateWebhook | null;

		/** Deployment state of the importer pod */
		importer?: ConfigManagementBinauthzStateWebhook | null;

		/** Deployment state of the monitor pod */
		monitor?: ConfigManagementBinauthzStateWebhook | null;

		/** Deployment state of reconciler-manager pod */
		reconcilerManager?: ConfigManagementBinauthzStateWebhook | null;

		/** Deployment state of root-reconciler */
		rootReconciler?: ConfigManagementBinauthzStateWebhook | null;

		/** Deployment state of the syncer pod */
		syncer?: ConfigManagementBinauthzStateWebhook | null;
	}

	/** The state of ConfigSync's deployment on a cluster */
	export interface ConfigManagementConfigSyncDeploymentStateFormProperties {

		/** Deployment state of admission-webhook */
		admissionWebhook: FormControl<ConfigManagementBinauthzStateWebhook | null | undefined>,

		/** Deployment state of the git-sync pod */
		gitSync: FormControl<ConfigManagementBinauthzStateWebhook | null | undefined>,

		/** Deployment state of the importer pod */
		importer: FormControl<ConfigManagementBinauthzStateWebhook | null | undefined>,

		/** Deployment state of the monitor pod */
		monitor: FormControl<ConfigManagementBinauthzStateWebhook | null | undefined>,

		/** Deployment state of reconciler-manager pod */
		reconcilerManager: FormControl<ConfigManagementBinauthzStateWebhook | null | undefined>,

		/** Deployment state of root-reconciler */
		rootReconciler: FormControl<ConfigManagementBinauthzStateWebhook | null | undefined>,

		/** Deployment state of the syncer pod */
		syncer: FormControl<ConfigManagementBinauthzStateWebhook | null | undefined>,
	}
	export function CreateConfigManagementConfigSyncDeploymentStateFormGroup() {
		return new FormGroup<ConfigManagementConfigSyncDeploymentStateFormProperties>({
			admissionWebhook: new FormControl<ConfigManagementBinauthzStateWebhook | null | undefined>(undefined),
			gitSync: new FormControl<ConfigManagementBinauthzStateWebhook | null | undefined>(undefined),
			importer: new FormControl<ConfigManagementBinauthzStateWebhook | null | undefined>(undefined),
			monitor: new FormControl<ConfigManagementBinauthzStateWebhook | null | undefined>(undefined),
			reconcilerManager: new FormControl<ConfigManagementBinauthzStateWebhook | null | undefined>(undefined),
			rootReconciler: new FormControl<ConfigManagementBinauthzStateWebhook | null | undefined>(undefined),
			syncer: new FormControl<ConfigManagementBinauthzStateWebhook | null | undefined>(undefined),
		});

	}


	/** Errors pertaining to the installation of Config Sync */
	export interface ConfigManagementConfigSyncError {

		/** A string representing the user facing error message */
		errorMessage?: string | null;
	}

	/** Errors pertaining to the installation of Config Sync */
	export interface ConfigManagementConfigSyncErrorFormProperties {

		/** A string representing the user facing error message */
		errorMessage: FormControl<string | null | undefined>,
	}
	export function CreateConfigManagementConfigSyncErrorFormGroup() {
		return new FormGroup<ConfigManagementConfigSyncErrorFormProperties>({
			errorMessage: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** State information for ConfigSync */
	export interface ConfigManagementConfigSyncState {

		/** The state of ConfigSync's deployment on a cluster */
		deploymentState?: ConfigManagementConfigSyncDeploymentState;

		/** Errors pertaining to the installation of Config Sync. */
		errors?: Array<ConfigManagementConfigSyncError>;

		/** State indicating an ACM's progress syncing configurations to a cluster */
		syncState?: ConfigManagementSyncState;

		/** Specific versioning information pertaining to ConfigSync's Pods */
		version?: ConfigManagementConfigSyncVersion;
	}

	/** State information for ConfigSync */
	export interface ConfigManagementConfigSyncStateFormProperties {
	}
	export function CreateConfigManagementConfigSyncStateFormGroup() {
		return new FormGroup<ConfigManagementConfigSyncStateFormProperties>({
		});

	}


	/** State indicating an ACM's progress syncing configurations to a cluster */
	export interface ConfigManagementSyncState {

		/** Sync status code */
		code?: ConfigManagementSyncStateCode | null;

		/** A list of errors resulting from problematic configs. This list will be truncated after 100 errors, although it is unlikely for that many errors to simultaneously exist. */
		errors?: Array<ConfigManagementSyncError>;

		/** Token indicating the state of the importer. */
		importToken?: string | null;

		/** Deprecated: use last_sync_time instead. Timestamp of when ACM last successfully synced the repo The time format is specified in https://golang.org/pkg/time/#Time.String */
		lastSync?: string | null;

		/** Timestamp type of when ACM last successfully synced the repo */
		lastSyncTime?: string | null;

		/** Token indicating the state of the repo. */
		sourceToken?: string | null;

		/** Token indicating the state of the syncer. */
		syncToken?: string | null;
	}

	/** State indicating an ACM's progress syncing configurations to a cluster */
	export interface ConfigManagementSyncStateFormProperties {

		/** Sync status code */
		code: FormControl<ConfigManagementSyncStateCode | null | undefined>,

		/** Token indicating the state of the importer. */
		importToken: FormControl<string | null | undefined>,

		/** Deprecated: use last_sync_time instead. Timestamp of when ACM last successfully synced the repo The time format is specified in https://golang.org/pkg/time/#Time.String */
		lastSync: FormControl<string | null | undefined>,

		/** Timestamp type of when ACM last successfully synced the repo */
		lastSyncTime: FormControl<string | null | undefined>,

		/** Token indicating the state of the repo. */
		sourceToken: FormControl<string | null | undefined>,

		/** Token indicating the state of the syncer. */
		syncToken: FormControl<string | null | undefined>,
	}
	export function CreateConfigManagementSyncStateFormGroup() {
		return new FormGroup<ConfigManagementSyncStateFormProperties>({
			code: new FormControl<ConfigManagementSyncStateCode | null | undefined>(undefined),
			importToken: new FormControl<string | null | undefined>(undefined),
			lastSync: new FormControl<string | null | undefined>(undefined),
			lastSyncTime: new FormControl<string | null | undefined>(undefined),
			sourceToken: new FormControl<string | null | undefined>(undefined),
			syncToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ConfigManagementSyncStateCode { SYNC_CODE_UNSPECIFIED = 'SYNC_CODE_UNSPECIFIED', SYNCED = 'SYNCED', PENDING = 'PENDING', ERROR = 'ERROR', NOT_CONFIGURED = 'NOT_CONFIGURED', NOT_INSTALLED = 'NOT_INSTALLED', UNAUTHORIZED = 'UNAUTHORIZED', UNREACHABLE = 'UNREACHABLE' }


	/** An ACM created error representing a problem syncing configurations */
	export interface ConfigManagementSyncError {

		/** An ACM defined error code */
		code?: string | null;

		/** A description of the error */
		errorMessage?: string | null;

		/** A list of config(s) associated with the error, if any */
		errorResources?: Array<ConfigManagementErrorResource>;
	}

	/** An ACM created error representing a problem syncing configurations */
	export interface ConfigManagementSyncErrorFormProperties {

		/** An ACM defined error code */
		code: FormControl<string | null | undefined>,

		/** A description of the error */
		errorMessage: FormControl<string | null | undefined>,
	}
	export function CreateConfigManagementSyncErrorFormGroup() {
		return new FormGroup<ConfigManagementSyncErrorFormProperties>({
			code: new FormControl<string | null | undefined>(undefined),
			errorMessage: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Model for a config file in the git repo with an associated Sync error */
	export interface ConfigManagementErrorResource {

		/** A Kubernetes object's GVK */
		resourceGvk?: ConfigManagementGroupVersionKind;

		/** Metadata name of the resource that is causing an error */
		resourceName?: string | null;

		/** Namespace of the resource that is causing an error */
		resourceNamespace?: string | null;

		/** Path in the git repo of the erroneous config */
		sourcePath?: string | null;
	}

	/** Model for a config file in the git repo with an associated Sync error */
	export interface ConfigManagementErrorResourceFormProperties {

		/** Metadata name of the resource that is causing an error */
		resourceName: FormControl<string | null | undefined>,

		/** Namespace of the resource that is causing an error */
		resourceNamespace: FormControl<string | null | undefined>,

		/** Path in the git repo of the erroneous config */
		sourcePath: FormControl<string | null | undefined>,
	}
	export function CreateConfigManagementErrorResourceFormGroup() {
		return new FormGroup<ConfigManagementErrorResourceFormProperties>({
			resourceName: new FormControl<string | null | undefined>(undefined),
			resourceNamespace: new FormControl<string | null | undefined>(undefined),
			sourcePath: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A Kubernetes object's GVK */
	export interface ConfigManagementGroupVersionKind {

		/** Kubernetes Group */
		group?: string | null;

		/** Kubernetes Kind */
		kind?: string | null;

		/** Kubernetes Version */
		version?: string | null;
	}

	/** A Kubernetes object's GVK */
	export interface ConfigManagementGroupVersionKindFormProperties {

		/** Kubernetes Group */
		group: FormControl<string | null | undefined>,

		/** Kubernetes Kind */
		kind: FormControl<string | null | undefined>,

		/** Kubernetes Version */
		version: FormControl<string | null | undefined>,
	}
	export function CreateConfigManagementGroupVersionKindFormGroup() {
		return new FormGroup<ConfigManagementGroupVersionKindFormProperties>({
			group: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			version: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Specific versioning information pertaining to ConfigSync's Pods */
	export interface ConfigManagementConfigSyncVersion {

		/** Version of the deployed admission_webhook pod */
		admissionWebhook?: string | null;

		/** Version of the deployed git-sync pod */
		gitSync?: string | null;

		/** Version of the deployed importer pod */
		importer?: string | null;

		/** Version of the deployed monitor pod */
		monitor?: string | null;

		/** Version of the deployed reconciler-manager pod */
		reconcilerManager?: string | null;

		/** Version of the deployed reconciler container in root-reconciler pod */
		rootReconciler?: string | null;

		/** Version of the deployed syncer pod */
		syncer?: string | null;
	}

	/** Specific versioning information pertaining to ConfigSync's Pods */
	export interface ConfigManagementConfigSyncVersionFormProperties {

		/** Version of the deployed admission_webhook pod */
		admissionWebhook: FormControl<string | null | undefined>,

		/** Version of the deployed git-sync pod */
		gitSync: FormControl<string | null | undefined>,

		/** Version of the deployed importer pod */
		importer: FormControl<string | null | undefined>,

		/** Version of the deployed monitor pod */
		monitor: FormControl<string | null | undefined>,

		/** Version of the deployed reconciler-manager pod */
		reconcilerManager: FormControl<string | null | undefined>,

		/** Version of the deployed reconciler container in root-reconciler pod */
		rootReconciler: FormControl<string | null | undefined>,

		/** Version of the deployed syncer pod */
		syncer: FormControl<string | null | undefined>,
	}
	export function CreateConfigManagementConfigSyncVersionFormGroup() {
		return new FormGroup<ConfigManagementConfigSyncVersionFormProperties>({
			admissionWebhook: new FormControl<string | null | undefined>(undefined),
			gitSync: new FormControl<string | null | undefined>(undefined),
			importer: new FormControl<string | null | undefined>(undefined),
			monitor: new FormControl<string | null | undefined>(undefined),
			reconcilerManager: new FormControl<string | null | undefined>(undefined),
			rootReconciler: new FormControl<string | null | undefined>(undefined),
			syncer: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** State of Policy Controller installation. */
	export interface ConfigManagementGatekeeperDeploymentState {

		/** Status of gatekeeper-audit deployment. */
		gatekeeperAudit?: ConfigManagementBinauthzStateWebhook | null;

		/** Status of gatekeeper-controller-manager pod. */
		gatekeeperControllerManagerState?: ConfigManagementBinauthzStateWebhook | null;

		/** Status of the pod serving the mutation webhook. */
		gatekeeperMutation?: ConfigManagementBinauthzStateWebhook | null;
	}

	/** State of Policy Controller installation. */
	export interface ConfigManagementGatekeeperDeploymentStateFormProperties {

		/** Status of gatekeeper-audit deployment. */
		gatekeeperAudit: FormControl<ConfigManagementBinauthzStateWebhook | null | undefined>,

		/** Status of gatekeeper-controller-manager pod. */
		gatekeeperControllerManagerState: FormControl<ConfigManagementBinauthzStateWebhook | null | undefined>,

		/** Status of the pod serving the mutation webhook. */
		gatekeeperMutation: FormControl<ConfigManagementBinauthzStateWebhook | null | undefined>,
	}
	export function CreateConfigManagementGatekeeperDeploymentStateFormGroup() {
		return new FormGroup<ConfigManagementGatekeeperDeploymentStateFormProperties>({
			gatekeeperAudit: new FormControl<ConfigManagementBinauthzStateWebhook | null | undefined>(undefined),
			gatekeeperControllerManagerState: new FormControl<ConfigManagementBinauthzStateWebhook | null | undefined>(undefined),
			gatekeeperMutation: new FormControl<ConfigManagementBinauthzStateWebhook | null | undefined>(undefined),
		});

	}


	/** Deployment state for Hierarchy Controller */
	export interface ConfigManagementHierarchyControllerDeploymentState {

		/** The deployment state for Hierarchy Controller extension (e.g. v0.7.0-hc.1) */
		extension?: ConfigManagementBinauthzStateWebhook | null;

		/** The deployment state for open source HNC (e.g. v0.7.0-hc.0) */
		hnc?: ConfigManagementBinauthzStateWebhook | null;
	}

	/** Deployment state for Hierarchy Controller */
	export interface ConfigManagementHierarchyControllerDeploymentStateFormProperties {

		/** The deployment state for Hierarchy Controller extension (e.g. v0.7.0-hc.1) */
		extension: FormControl<ConfigManagementBinauthzStateWebhook | null | undefined>,

		/** The deployment state for open source HNC (e.g. v0.7.0-hc.0) */
		hnc: FormControl<ConfigManagementBinauthzStateWebhook | null | undefined>,
	}
	export function CreateConfigManagementHierarchyControllerDeploymentStateFormGroup() {
		return new FormGroup<ConfigManagementHierarchyControllerDeploymentStateFormProperties>({
			extension: new FormControl<ConfigManagementBinauthzStateWebhook | null | undefined>(undefined),
			hnc: new FormControl<ConfigManagementBinauthzStateWebhook | null | undefined>(undefined),
		});

	}


	/** State for Hierarchy Controller */
	export interface ConfigManagementHierarchyControllerState {

		/** Deployment state for Hierarchy Controller */
		state?: ConfigManagementHierarchyControllerDeploymentState;

		/** Version for Hierarchy Controller */
		version?: ConfigManagementHierarchyControllerVersion;
	}

	/** State for Hierarchy Controller */
	export interface ConfigManagementHierarchyControllerStateFormProperties {
	}
	export function CreateConfigManagementHierarchyControllerStateFormGroup() {
		return new FormGroup<ConfigManagementHierarchyControllerStateFormProperties>({
		});

	}


	/** Version for Hierarchy Controller */
	export interface ConfigManagementHierarchyControllerVersion {

		/** Version for Hierarchy Controller extension */
		extension?: string | null;

		/** Version for open source HNC */
		hnc?: string | null;
	}

	/** Version for Hierarchy Controller */
	export interface ConfigManagementHierarchyControllerVersionFormProperties {

		/** Version for Hierarchy Controller extension */
		extension: FormControl<string | null | undefined>,

		/** Version for open source HNC */
		hnc: FormControl<string | null | undefined>,
	}
	export function CreateConfigManagementHierarchyControllerVersionFormGroup() {
		return new FormGroup<ConfigManagementHierarchyControllerVersionFormProperties>({
			extension: new FormControl<string | null | undefined>(undefined),
			hnc: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Errors pertaining to the installation of ACM */
	export interface ConfigManagementInstallError {

		/** A string representing the user facing error message */
		errorMessage?: string | null;
	}

	/** Errors pertaining to the installation of ACM */
	export interface ConfigManagementInstallErrorFormProperties {

		/** A string representing the user facing error message */
		errorMessage: FormControl<string | null | undefined>,
	}
	export function CreateConfigManagementInstallErrorFormGroup() {
		return new FormGroup<ConfigManagementInstallErrorFormProperties>({
			errorMessage: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** **Anthos Config Management**: State for a single cluster. */
	export interface ConfigManagementMembershipState {

		/** State for Binauthz */
		binauthzState?: ConfigManagementBinauthzState;

		/** This field is set to the `cluster_name` field of the Membership Spec if it is not empty. Otherwise, it is set to the cluster's fleet membership name. */
		clusterName?: string | null;

		/** State information for ConfigSync */
		configSyncState?: ConfigManagementConfigSyncState;

		/** State for Hierarchy Controller */
		hierarchyControllerState?: ConfigManagementHierarchyControllerState;

		/** **Anthos Config Management**: Configuration for a single cluster. Intended to parallel the ConfigManagement CR. */
		membershipSpec?: ConfigManagementMembershipSpec;

		/** State information for an ACM's Operator */
		operatorState?: ConfigManagementOperatorState;

		/** State for PolicyControllerState. */
		policyControllerState?: ConfigManagementPolicyControllerState;
	}

	/** **Anthos Config Management**: State for a single cluster. */
	export interface ConfigManagementMembershipStateFormProperties {

		/** This field is set to the `cluster_name` field of the Membership Spec if it is not empty. Otherwise, it is set to the cluster's fleet membership name. */
		clusterName: FormControl<string | null | undefined>,
	}
	export function CreateConfigManagementMembershipStateFormGroup() {
		return new FormGroup<ConfigManagementMembershipStateFormProperties>({
			clusterName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** State information for an ACM's Operator */
	export interface ConfigManagementOperatorState {

		/** The state of the Operator's deployment */
		deploymentState?: ConfigManagementBinauthzStateWebhook | null;

		/** Install errors. */
		errors?: Array<ConfigManagementInstallError>;

		/** The semenatic version number of the operator */
		version?: string | null;
	}

	/** State information for an ACM's Operator */
	export interface ConfigManagementOperatorStateFormProperties {

		/** The state of the Operator's deployment */
		deploymentState: FormControl<ConfigManagementBinauthzStateWebhook | null | undefined>,

		/** The semenatic version number of the operator */
		version: FormControl<string | null | undefined>,
	}
	export function CreateConfigManagementOperatorStateFormGroup() {
		return new FormGroup<ConfigManagementOperatorStateFormProperties>({
			deploymentState: new FormControl<ConfigManagementBinauthzStateWebhook | null | undefined>(undefined),
			version: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** State for PolicyControllerState. */
	export interface ConfigManagementPolicyControllerState {

		/** State of Policy Controller installation. */
		deploymentState?: ConfigManagementGatekeeperDeploymentState;

		/** State for the migration of PolicyController from ACM -> PoCo Hub. */
		migration?: ConfigManagementPolicyControllerMigration;

		/** The build version of Gatekeeper Policy Controller is using. */
		version?: ConfigManagementPolicyControllerVersion;
	}

	/** State for PolicyControllerState. */
	export interface ConfigManagementPolicyControllerStateFormProperties {
	}
	export function CreateConfigManagementPolicyControllerStateFormGroup() {
		return new FormGroup<ConfigManagementPolicyControllerStateFormProperties>({
		});

	}


	/** State for the migration of PolicyController from ACM -> PoCo Hub. */
	export interface ConfigManagementPolicyControllerMigration {

		/** Last time this membership spec was copied to PoCo feature. */
		copyTime?: string | null;

		/** Stage of the migration. */
		stage?: ConfigManagementPolicyControllerMigrationStage | null;
	}

	/** State for the migration of PolicyController from ACM -> PoCo Hub. */
	export interface ConfigManagementPolicyControllerMigrationFormProperties {

		/** Last time this membership spec was copied to PoCo feature. */
		copyTime: FormControl<string | null | undefined>,

		/** Stage of the migration. */
		stage: FormControl<ConfigManagementPolicyControllerMigrationStage | null | undefined>,
	}
	export function CreateConfigManagementPolicyControllerMigrationFormGroup() {
		return new FormGroup<ConfigManagementPolicyControllerMigrationFormProperties>({
			copyTime: new FormControl<string | null | undefined>(undefined),
			stage: new FormControl<ConfigManagementPolicyControllerMigrationStage | null | undefined>(undefined),
		});

	}

	export enum ConfigManagementPolicyControllerMigrationStage { STAGE_UNSPECIFIED = 'STAGE_UNSPECIFIED', ACM_MANAGED = 'ACM_MANAGED', POCO_MANAGED = 'POCO_MANAGED' }


	/** The build version of Gatekeeper Policy Controller is using. */
	export interface ConfigManagementPolicyControllerVersion {

		/** The gatekeeper image tag that is composed of ACM version, git tag, build number. */
		version?: string | null;
	}

	/** The build version of Gatekeeper Policy Controller is using. */
	export interface ConfigManagementPolicyControllerVersionFormProperties {

		/** The gatekeeper image tag that is composed of ACM version, git tag, build number. */
		version: FormControl<string | null | undefined>,
	}
	export function CreateConfigManagementPolicyControllerVersionFormGroup() {
		return new FormGroup<ConfigManagementPolicyControllerVersionFormProperties>({
			version: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** ConnectAgentResource represents a Kubernetes resource manifest for Connect Agent deployment. */
	export interface ConnectAgentResource {

		/** YAML manifest of the resource. */
		manifest?: string | null;

		/** TypeMeta is the type information needed for content unmarshalling of Kubernetes resources in the manifest. */
		type?: TypeMeta;
	}

	/** ConnectAgentResource represents a Kubernetes resource manifest for Connect Agent deployment. */
	export interface ConnectAgentResourceFormProperties {

		/** YAML manifest of the resource. */
		manifest: FormControl<string | null | undefined>,
	}
	export function CreateConnectAgentResourceFormGroup() {
		return new FormGroup<ConnectAgentResourceFormProperties>({
			manifest: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** TypeMeta is the type information needed for content unmarshalling of Kubernetes resources in the manifest. */
	export interface TypeMeta {

		/** APIVersion of the resource (e.g. v1). */
		apiVersion?: string | null;

		/** Kind of the resource (e.g. Deployment). */
		kind?: string | null;
	}

	/** TypeMeta is the type information needed for content unmarshalling of Kubernetes resources in the manifest. */
	export interface TypeMetaFormProperties {

		/** APIVersion of the resource (e.g. v1). */
		apiVersion: FormControl<string | null | undefined>,

		/** Kind of the resource (e.g. Deployment). */
		kind: FormControl<string | null | undefined>,
	}
	export function CreateTypeMetaFormGroup() {
		return new FormGroup<TypeMetaFormProperties>({
			apiVersion: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** DefaultClusterConfig describes the default cluster configurations to be applied to all clusters born-in-fleet. */
	export interface DefaultClusterConfig {

		/** BinaryAuthorizationConfig defines the fleet level configuration of binary authorization feature. */
		binaryAuthorizationConfig?: BinaryAuthorizationConfig;

		/** SecurityPostureConfig defines the flags needed to enable/disable features for the Security Posture API. */
		securityPostureConfig?: SecurityPostureConfig;
	}

	/** DefaultClusterConfig describes the default cluster configurations to be applied to all clusters born-in-fleet. */
	export interface DefaultClusterConfigFormProperties {
	}
	export function CreateDefaultClusterConfigFormGroup() {
		return new FormGroup<DefaultClusterConfigFormProperties>({
		});

	}


	/** SecurityPostureConfig defines the flags needed to enable/disable features for the Security Posture API. */
	export interface SecurityPostureConfig {

		/** Sets which mode to use for Security Posture features. */
		mode?: SecurityPostureConfigMode | null;

		/** Sets which mode to use for vulnerability scanning. */
		vulnerabilityMode?: SecurityPostureConfigVulnerabilityMode | null;
	}

	/** SecurityPostureConfig defines the flags needed to enable/disable features for the Security Posture API. */
	export interface SecurityPostureConfigFormProperties {

		/** Sets which mode to use for Security Posture features. */
		mode: FormControl<SecurityPostureConfigMode | null | undefined>,

		/** Sets which mode to use for vulnerability scanning. */
		vulnerabilityMode: FormControl<SecurityPostureConfigVulnerabilityMode | null | undefined>,
	}
	export function CreateSecurityPostureConfigFormGroup() {
		return new FormGroup<SecurityPostureConfigFormProperties>({
			mode: new FormControl<SecurityPostureConfigMode | null | undefined>(undefined),
			vulnerabilityMode: new FormControl<SecurityPostureConfigVulnerabilityMode | null | undefined>(undefined),
		});

	}

	export enum SecurityPostureConfigMode { MODE_UNSPECIFIED = 'MODE_UNSPECIFIED', DISABLED = 'DISABLED', BASIC = 'BASIC' }

	export enum SecurityPostureConfigVulnerabilityMode { VULNERABILITY_MODE_UNSPECIFIED = 'VULNERABILITY_MODE_UNSPECIFIED', VULNERABILITY_DISABLED = 'VULNERABILITY_DISABLED', VULNERABILITY_BASIC = 'VULNERABILITY_BASIC', VULNERABILITY_ENTERPRISE = 'VULNERABILITY_ENTERPRISE' }


	/** EdgeCluster contains information specific to Google Edge Clusters. */
	export interface EdgeCluster {

		/** Immutable. Self-link of the Google Cloud resource for the Edge Cluster. For example: //edgecontainer.googleapis.com/projects/my-project/locations/us-west1-a/clusters/my-cluster */
		resourceLink?: string | null;
	}

	/** EdgeCluster contains information specific to Google Edge Clusters. */
	export interface EdgeClusterFormProperties {

		/** Immutable. Self-link of the Google Cloud resource for the Edge Cluster. For example: //edgecontainer.googleapis.com/projects/my-project/locations/us-west1-a/clusters/my-cluster */
		resourceLink: FormControl<string | null | undefined>,
	}
	export function CreateEdgeClusterFormGroup() {
		return new FormGroup<EdgeClusterFormProperties>({
			resourceLink: new FormControl<string | null | undefined>(undefined),
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


	/** Feature represents the settings and status of any Hub Feature. */
	export interface Feature {

		/** Output only. When the Feature resource was created. */
		createTime?: string | null;

		/** Output only. When the Feature resource was deleted. */
		deleteTime?: string | null;

		/** CommonFleetDefaultMemberConfigSpec contains default configuration information for memberships of a fleet */
		fleetDefaultMemberConfig?: CommonFleetDefaultMemberConfigSpec;

		/** Labels for this Feature. */
		labels?: {[id: string]: string };

		/** Optional. Membership-specific configuration for this Feature. If this Feature does not support any per-Membership configuration, this field may be unused. The keys indicate which Membership the configuration is for, in the form: `projects/{p}/locations/{l}/memberships/{m}` Where {p} is the project, {l} is a valid location and {m} is a valid Membership in this project at that location. {p} WILL match the Feature's project. {p} will always be returned as the project number, but the project ID is also accepted during input. If the same Membership is specified in the map twice (using the project ID form, and the project number form), exactly ONE of the entries will be saved, with no guarantees as to which. For this reason, it is recommended the same format be used for all entries when mutating a Feature. */
		membershipSpecs?: {[id: string]: MembershipFeatureSpec };

		/** Output only. Membership-specific Feature status. If this Feature does report any per-Membership status, this field may be unused. The keys indicate which Membership the state is for, in the form: `projects/{p}/locations/{l}/memberships/{m}` Where {p} is the project number, {l} is a valid location and {m} is a valid Membership in this project at that location. {p} MUST match the Feature's project number. */
		membershipStates?: {[id: string]: MembershipFeatureState };

		/** Output only. The full, unique name of this Feature resource in the format `projects/locations/features/*`. */
		name?: string | null;

		/** FeatureResourceState describes the state of a Feature *resource* in the GkeHub API. See `FeatureState` for the "running state" of the Feature in the Hub and across Memberships. */
		resourceState?: FeatureResourceState;

		/** Optional. Scope-specific configuration for this Feature. If this Feature does not support any per-Scope configuration, this field may be unused. The keys indicate which Scope the configuration is for, in the form: `projects/{p}/locations/global/scopes/{s}` Where {p} is the project, {s} is a valid Scope in this project. {p} WILL match the Feature's project. {p} will always be returned as the project number, but the project ID is also accepted during input. If the same Scope is specified in the map twice (using the project ID form, and the project number form), exactly ONE of the entries will be saved, with no guarantees as to which. For this reason, it is recommended the same format be used for all entries when mutating a Feature. */
		scopeSpecs?: {[id: string]: ScopeFeatureSpec };

		/** Output only. Scope-specific Feature status. If this Feature does report any per-Scope status, this field may be unused. The keys indicate which Scope the state is for, in the form: `projects/{p}/locations/global/scopes/{s}` Where {p} is the project, {s} is a valid Scope in this project. {p} WILL match the Feature's project. */
		scopeStates?: {[id: string]: ScopeFeatureState };

		/** CommonFeatureSpec contains Hub-wide configuration information */
		spec?: CommonFeatureSpec;

		/** CommonFeatureState contains Hub-wide Feature status information. */
		state?: CommonFeatureState;

		/** Output only. When the Feature resource was last updated. */
		updateTime?: string | null;
	}

	/** Feature represents the settings and status of any Hub Feature. */
	export interface FeatureFormProperties {

		/** Output only. When the Feature resource was created. */
		createTime: FormControl<string | null | undefined>,

		/** Output only. When the Feature resource was deleted. */
		deleteTime: FormControl<string | null | undefined>,

		/** Labels for this Feature. */
		labels: FormControl<{[id: string]: string } | null | undefined>,

		/** Optional. Membership-specific configuration for this Feature. If this Feature does not support any per-Membership configuration, this field may be unused. The keys indicate which Membership the configuration is for, in the form: `projects/{p}/locations/{l}/memberships/{m}` Where {p} is the project, {l} is a valid location and {m} is a valid Membership in this project at that location. {p} WILL match the Feature's project. {p} will always be returned as the project number, but the project ID is also accepted during input. If the same Membership is specified in the map twice (using the project ID form, and the project number form), exactly ONE of the entries will be saved, with no guarantees as to which. For this reason, it is recommended the same format be used for all entries when mutating a Feature. */
		membershipSpecs: FormControl<{[id: string]: MembershipFeatureSpec } | null | undefined>,

		/** Output only. Membership-specific Feature status. If this Feature does report any per-Membership status, this field may be unused. The keys indicate which Membership the state is for, in the form: `projects/{p}/locations/{l}/memberships/{m}` Where {p} is the project number, {l} is a valid location and {m} is a valid Membership in this project at that location. {p} MUST match the Feature's project number. */
		membershipStates: FormControl<{[id: string]: MembershipFeatureState } | null | undefined>,

		/** Output only. The full, unique name of this Feature resource in the format `projects/locations/features/*`. */
		name: FormControl<string | null | undefined>,

		/** Optional. Scope-specific configuration for this Feature. If this Feature does not support any per-Scope configuration, this field may be unused. The keys indicate which Scope the configuration is for, in the form: `projects/{p}/locations/global/scopes/{s}` Where {p} is the project, {s} is a valid Scope in this project. {p} WILL match the Feature's project. {p} will always be returned as the project number, but the project ID is also accepted during input. If the same Scope is specified in the map twice (using the project ID form, and the project number form), exactly ONE of the entries will be saved, with no guarantees as to which. For this reason, it is recommended the same format be used for all entries when mutating a Feature. */
		scopeSpecs: FormControl<{[id: string]: ScopeFeatureSpec } | null | undefined>,

		/** Output only. Scope-specific Feature status. If this Feature does report any per-Scope status, this field may be unused. The keys indicate which Scope the state is for, in the form: `projects/{p}/locations/global/scopes/{s}` Where {p} is the project, {s} is a valid Scope in this project. {p} WILL match the Feature's project. */
		scopeStates: FormControl<{[id: string]: ScopeFeatureState } | null | undefined>,

		/** Output only. When the Feature resource was last updated. */
		updateTime: FormControl<string | null | undefined>,
	}
	export function CreateFeatureFormGroup() {
		return new FormGroup<FeatureFormProperties>({
			createTime: new FormControl<string | null | undefined>(undefined),
			deleteTime: new FormControl<string | null | undefined>(undefined),
			labels: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			membershipSpecs: new FormControl<{[id: string]: MembershipFeatureSpec } | null | undefined>(undefined),
			membershipStates: new FormControl<{[id: string]: MembershipFeatureState } | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			scopeSpecs: new FormControl<{[id: string]: ScopeFeatureSpec } | null | undefined>(undefined),
			scopeStates: new FormControl<{[id: string]: ScopeFeatureState } | null | undefined>(undefined),
			updateTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** MembershipFeatureSpec contains configuration information for a single Membership. NOTE: Please use snake case in your feature name. */
	export interface MembershipFeatureSpec {

		/** **Anthosobservability**: Per-Membership Feature spec. */
		anthosobservability?: AnthosObservabilityMembershipSpec;

		/** **Cloud Build**: Configurations for each Cloud Build enabled cluster. */
		cloudbuild?: MembershipSpec;

		/** **Anthos Config Management**: Configuration for a single cluster. Intended to parallel the ConfigManagement CR. */
		configmanagement?: ConfigManagementMembershipSpec;

		/** **FleetObservability**: The membership-specific input for FleetObservability feature. */
		fleetobservability?: FleetObservabilityMembershipSpec;

		/** **Anthos Identity Service**: Configuration for a single Membership. */
		identityservice?: IdentityServiceMembershipSpec;

		/** **Service Mesh**: Spec for a single Membership for the servicemesh feature */
		mesh?: ServiceMeshMembershipSpec;

		/** Origin defines where this MembershipFeatureSpec originated from. */
		origin?: Origin;

		/** **Policy Controller**: Configuration for a single cluster. Intended to parallel the PolicyController CR. */
		policycontroller?: PolicyControllerMembershipSpec;
	}

	/** MembershipFeatureSpec contains configuration information for a single Membership. NOTE: Please use snake case in your feature name. */
	export interface MembershipFeatureSpecFormProperties {
	}
	export function CreateMembershipFeatureSpecFormGroup() {
		return new FormGroup<MembershipFeatureSpecFormProperties>({
		});

	}


	/** **Cloud Build**: Configurations for each Cloud Build enabled cluster. */
	export interface MembershipSpec {

		/** Whether it is allowed to run the privileged builds on the cluster or not. */
		securityPolicy?: MembershipSpecSecurityPolicy | null;

		/** Version of the cloud build software on the cluster. */
		version?: string | null;
	}

	/** **Cloud Build**: Configurations for each Cloud Build enabled cluster. */
	export interface MembershipSpecFormProperties {

		/** Whether it is allowed to run the privileged builds on the cluster or not. */
		securityPolicy: FormControl<MembershipSpecSecurityPolicy | null | undefined>,

		/** Version of the cloud build software on the cluster. */
		version: FormControl<string | null | undefined>,
	}
	export function CreateMembershipSpecFormGroup() {
		return new FormGroup<MembershipSpecFormProperties>({
			securityPolicy: new FormControl<MembershipSpecSecurityPolicy | null | undefined>(undefined),
			version: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum MembershipSpecSecurityPolicy { SECURITY_POLICY_UNSPECIFIED = 'SECURITY_POLICY_UNSPECIFIED', NON_PRIVILEGED = 'NON_PRIVILEGED', PRIVILEGED = 'PRIVILEGED' }


	/** **FleetObservability**: The membership-specific input for FleetObservability feature. */
	export interface FleetObservabilityMembershipSpec {
	}

	/** **FleetObservability**: The membership-specific input for FleetObservability feature. */
	export interface FleetObservabilityMembershipSpecFormProperties {
	}
	export function CreateFleetObservabilityMembershipSpecFormGroup() {
		return new FormGroup<FleetObservabilityMembershipSpecFormProperties>({
		});

	}


	/** Origin defines where this MembershipFeatureSpec originated from. */
	export interface Origin {

		/** Type specifies which type of origin is set. */
		type?: OriginType | null;
	}

	/** Origin defines where this MembershipFeatureSpec originated from. */
	export interface OriginFormProperties {

		/** Type specifies which type of origin is set. */
		type: FormControl<OriginType | null | undefined>,
	}
	export function CreateOriginFormGroup() {
		return new FormGroup<OriginFormProperties>({
			type: new FormControl<OriginType | null | undefined>(undefined),
		});

	}

	export enum OriginType { TYPE_UNSPECIFIED = 'TYPE_UNSPECIFIED', FLEET = 'FLEET', FLEET_OUT_OF_SYNC = 'FLEET_OUT_OF_SYNC', USER = 'USER' }


	/** MembershipFeatureState contains Feature status information for a single Membership. */
	export interface MembershipFeatureState {

		/** State for App Dev Exp Feature. */
		appdevexperience?: AppDevExperienceFeatureState;

		/** Per-membership state for this feature. */
		clusterupgrade?: ClusterUpgradeMembershipState;

		/** **Anthos Config Management**: State for a single cluster. */
		configmanagement?: ConfigManagementMembershipState;

		/** **FleetObservability**: Membership-specific Feature state for fleetobservability. */
		fleetobservability?: FleetObservabilityMembershipState;

		/** **Anthos Identity Service**: State for a single Membership. */
		identityservice?: IdentityServiceMembershipState;

		/** **Metering**: Per-Membership Feature State. */
		metering?: MeteringMembershipState;

		/** **Policy Controller**: State for a single cluster. */
		policycontroller?: PolicyControllerMembershipState;

		/** **Service Mesh**: State for a single Membership, as analyzed by the Service Mesh Hub Controller. */
		servicemesh?: ServiceMeshMembershipState;

		/** FeatureState describes the high-level state of a Feature. It may be used to describe a Feature's state at the environ-level, or per-membershop, depending on the context. */
		state?: FeatureState;
	}

	/** MembershipFeatureState contains Feature status information for a single Membership. */
	export interface MembershipFeatureStateFormProperties {
	}
	export function CreateMembershipFeatureStateFormGroup() {
		return new FormGroup<MembershipFeatureStateFormProperties>({
		});

	}


	/** **FleetObservability**: Membership-specific Feature state for fleetobservability. */
	export interface FleetObservabilityMembershipState {
	}

	/** **FleetObservability**: Membership-specific Feature state for fleetobservability. */
	export interface FleetObservabilityMembershipStateFormProperties {
	}
	export function CreateFleetObservabilityMembershipStateFormGroup() {
		return new FormGroup<FleetObservabilityMembershipStateFormProperties>({
		});

	}


	/** **Anthos Identity Service**: State for a single Membership. */
	export interface IdentityServiceMembershipState {

		/** The reason of the failure. */
		failureReason?: string | null;

		/** Installed AIS version. This is the AIS version installed on this member. The values makes sense iff state is OK. */
		installedVersion?: string | null;

		/** **Anthos Identity Service**: Configuration for a single Membership. */
		memberConfig?: IdentityServiceMembershipSpec;

		/** Deployment state on this member */
		state?: IdentityServiceMembershipStateState | null;
	}

	/** **Anthos Identity Service**: State for a single Membership. */
	export interface IdentityServiceMembershipStateFormProperties {

		/** The reason of the failure. */
		failureReason: FormControl<string | null | undefined>,

		/** Installed AIS version. This is the AIS version installed on this member. The values makes sense iff state is OK. */
		installedVersion: FormControl<string | null | undefined>,

		/** Deployment state on this member */
		state: FormControl<IdentityServiceMembershipStateState | null | undefined>,
	}
	export function CreateIdentityServiceMembershipStateFormGroup() {
		return new FormGroup<IdentityServiceMembershipStateFormProperties>({
			failureReason: new FormControl<string | null | undefined>(undefined),
			installedVersion: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<IdentityServiceMembershipStateState | null | undefined>(undefined),
		});

	}

	export enum IdentityServiceMembershipStateState { DEPLOYMENT_STATE_UNSPECIFIED = 'DEPLOYMENT_STATE_UNSPECIFIED', OK = 'OK', ERROR = 'ERROR' }


	/** **Metering**: Per-Membership Feature State. */
	export interface MeteringMembershipState {

		/** The time stamp of the most recent measurement of the number of vCPUs in the cluster. */
		lastMeasurementTime?: string | null;

		/** The vCPUs capacity in the cluster according to the most recent measurement (1/1000 precision). */
		preciseLastMeasuredClusterVcpuCapacity?: number | null;
	}

	/** **Metering**: Per-Membership Feature State. */
	export interface MeteringMembershipStateFormProperties {

		/** The time stamp of the most recent measurement of the number of vCPUs in the cluster. */
		lastMeasurementTime: FormControl<string | null | undefined>,

		/** The vCPUs capacity in the cluster according to the most recent measurement (1/1000 precision). */
		preciseLastMeasuredClusterVcpuCapacity: FormControl<number | null | undefined>,
	}
	export function CreateMeteringMembershipStateFormGroup() {
		return new FormGroup<MeteringMembershipStateFormProperties>({
			lastMeasurementTime: new FormControl<string | null | undefined>(undefined),
			preciseLastMeasuredClusterVcpuCapacity: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** **Policy Controller**: State for a single cluster. */
	export interface PolicyControllerMembershipState {

		/** Currently these include (also serving as map keys): 1. "admission" 2. "audit" 3. "mutation" */
		componentStates?: {[id: string]: PolicyControllerOnClusterState };

		/** The state of the policy controller policy content */
		policyContentState?: PolicyControllerPolicyContentState;

		/** The overall Policy Controller lifecycle state observed by the Hub Feature controller. */
		state?: PolicyControllerOnClusterStateState | null;
	}

	/** **Policy Controller**: State for a single cluster. */
	export interface PolicyControllerMembershipStateFormProperties {

		/** Currently these include (also serving as map keys): 1. "admission" 2. "audit" 3. "mutation" */
		componentStates: FormControl<{[id: string]: PolicyControllerOnClusterState } | null | undefined>,

		/** The overall Policy Controller lifecycle state observed by the Hub Feature controller. */
		state: FormControl<PolicyControllerOnClusterStateState | null | undefined>,
	}
	export function CreatePolicyControllerMembershipStateFormGroup() {
		return new FormGroup<PolicyControllerMembershipStateFormProperties>({
			componentStates: new FormControl<{[id: string]: PolicyControllerOnClusterState } | null | undefined>(undefined),
			state: new FormControl<PolicyControllerOnClusterStateState | null | undefined>(undefined),
		});

	}


	/** OnClusterState represents the state of a sub-component of Policy Controller. */
	export interface PolicyControllerOnClusterState {

		/** Surface potential errors or information logs. */
		details?: string | null;

		/** The lifecycle state of this component. */
		state?: PolicyControllerOnClusterStateState | null;
	}

	/** OnClusterState represents the state of a sub-component of Policy Controller. */
	export interface PolicyControllerOnClusterStateFormProperties {

		/** Surface potential errors or information logs. */
		details: FormControl<string | null | undefined>,

		/** The lifecycle state of this component. */
		state: FormControl<PolicyControllerOnClusterStateState | null | undefined>,
	}
	export function CreatePolicyControllerOnClusterStateFormGroup() {
		return new FormGroup<PolicyControllerOnClusterStateFormProperties>({
			details: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<PolicyControllerOnClusterStateState | null | undefined>(undefined),
		});

	}

	export enum PolicyControllerOnClusterStateState { LIFECYCLE_STATE_UNSPECIFIED = 'LIFECYCLE_STATE_UNSPECIFIED', NOT_INSTALLED = 'NOT_INSTALLED', INSTALLING = 'INSTALLING', ACTIVE = 'ACTIVE', UPDATING = 'UPDATING', DECOMMISSIONING = 'DECOMMISSIONING', CLUSTER_ERROR = 'CLUSTER_ERROR', HUB_ERROR = 'HUB_ERROR', SUSPENDED = 'SUSPENDED', DETACHED = 'DETACHED' }


	/** The state of the policy controller policy content */
	export interface PolicyControllerPolicyContentState {

		/** The state of the any bundles included in the chosen version of the manifest */
		bundleStates?: {[id: string]: PolicyControllerOnClusterState };

		/** OnClusterState represents the state of a sub-component of Policy Controller. */
		referentialSyncConfigState?: PolicyControllerOnClusterState;

		/** OnClusterState represents the state of a sub-component of Policy Controller. */
		templateLibraryState?: PolicyControllerOnClusterState;
	}

	/** The state of the policy controller policy content */
	export interface PolicyControllerPolicyContentStateFormProperties {

		/** The state of the any bundles included in the chosen version of the manifest */
		bundleStates: FormControl<{[id: string]: PolicyControllerOnClusterState } | null | undefined>,
	}
	export function CreatePolicyControllerPolicyContentStateFormGroup() {
		return new FormGroup<PolicyControllerPolicyContentStateFormProperties>({
			bundleStates: new FormControl<{[id: string]: PolicyControllerOnClusterState } | null | undefined>(undefined),
		});

	}


	/** **Service Mesh**: State for a single Membership, as analyzed by the Service Mesh Hub Controller. */
	export interface ServiceMeshMembershipState {

		/** Status of control plane management. */
		controlPlaneManagement?: ServiceMeshControlPlaneManagement;

		/** Status of data plane management. Only reported per-member. */
		dataPlaneManagement?: ServiceMeshDataPlaneManagement;
	}

	/** **Service Mesh**: State for a single Membership, as analyzed by the Service Mesh Hub Controller. */
	export interface ServiceMeshMembershipStateFormProperties {
	}
	export function CreateServiceMeshMembershipStateFormGroup() {
		return new FormGroup<ServiceMeshMembershipStateFormProperties>({
		});

	}


	/** Status of control plane management. */
	export interface ServiceMeshControlPlaneManagement {

		/** Explanation of state. */
		details?: Array<ServiceMeshStatusDetails>;

		/** LifecycleState of control plane management. */
		state?: ServiceMeshControlPlaneManagementState | null;
	}

	/** Status of control plane management. */
	export interface ServiceMeshControlPlaneManagementFormProperties {

		/** LifecycleState of control plane management. */
		state: FormControl<ServiceMeshControlPlaneManagementState | null | undefined>,
	}
	export function CreateServiceMeshControlPlaneManagementFormGroup() {
		return new FormGroup<ServiceMeshControlPlaneManagementFormProperties>({
			state: new FormControl<ServiceMeshControlPlaneManagementState | null | undefined>(undefined),
		});

	}


	/** Structured and human-readable details for a status. */
	export interface ServiceMeshStatusDetails {

		/** A machine-readable code that further describes a broad status. */
		code?: string | null;

		/** Human-readable explanation of code. */
		details?: string | null;
	}

	/** Structured and human-readable details for a status. */
	export interface ServiceMeshStatusDetailsFormProperties {

		/** A machine-readable code that further describes a broad status. */
		code: FormControl<string | null | undefined>,

		/** Human-readable explanation of code. */
		details: FormControl<string | null | undefined>,
	}
	export function CreateServiceMeshStatusDetailsFormGroup() {
		return new FormGroup<ServiceMeshStatusDetailsFormProperties>({
			code: new FormControl<string | null | undefined>(undefined),
			details: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ServiceMeshControlPlaneManagementState { LIFECYCLE_STATE_UNSPECIFIED = 'LIFECYCLE_STATE_UNSPECIFIED', DISABLED = 'DISABLED', FAILED_PRECONDITION = 'FAILED_PRECONDITION', PROVISIONING = 'PROVISIONING', ACTIVE = 'ACTIVE', STALLED = 'STALLED', NEEDS_ATTENTION = 'NEEDS_ATTENTION', DEGRADED = 'DEGRADED' }


	/** Status of data plane management. Only reported per-member. */
	export interface ServiceMeshDataPlaneManagement {

		/** Explanation of the status. */
		details?: Array<ServiceMeshStatusDetails>;

		/** Lifecycle status of data plane management. */
		state?: ServiceMeshControlPlaneManagementState | null;
	}

	/** Status of data plane management. Only reported per-member. */
	export interface ServiceMeshDataPlaneManagementFormProperties {

		/** Lifecycle status of data plane management. */
		state: FormControl<ServiceMeshControlPlaneManagementState | null | undefined>,
	}
	export function CreateServiceMeshDataPlaneManagementFormGroup() {
		return new FormGroup<ServiceMeshDataPlaneManagementFormProperties>({
			state: new FormControl<ServiceMeshControlPlaneManagementState | null | undefined>(undefined),
		});

	}


	/** FeatureResourceState describes the state of a Feature *resource* in the GkeHub API. See `FeatureState` for the "running state" of the Feature in the Hub and across Memberships. */
	export interface FeatureResourceState {

		/** The current state of the Feature resource in the Hub API. */
		state?: FeatureResourceStateState | null;
	}

	/** FeatureResourceState describes the state of a Feature *resource* in the GkeHub API. See `FeatureState` for the "running state" of the Feature in the Hub and across Memberships. */
	export interface FeatureResourceStateFormProperties {

		/** The current state of the Feature resource in the Hub API. */
		state: FormControl<FeatureResourceStateState | null | undefined>,
	}
	export function CreateFeatureResourceStateFormGroup() {
		return new FormGroup<FeatureResourceStateFormProperties>({
			state: new FormControl<FeatureResourceStateState | null | undefined>(undefined),
		});

	}

	export enum FeatureResourceStateState { STATE_UNSPECIFIED = 'STATE_UNSPECIFIED', ENABLING = 'ENABLING', ACTIVE = 'ACTIVE', DISABLING = 'DISABLING', UPDATING = 'UPDATING', SERVICE_UPDATING = 'SERVICE_UPDATING' }


	/** ScopeFeatureSpec contains feature specs for a fleet scope. */
	export interface ScopeFeatureSpec {
	}

	/** ScopeFeatureSpec contains feature specs for a fleet scope. */
	export interface ScopeFeatureSpecFormProperties {
	}
	export function CreateScopeFeatureSpecFormGroup() {
		return new FormGroup<ScopeFeatureSpecFormProperties>({
		});

	}


	/** ScopeFeatureState contains Scope-wide Feature status information. */
	export interface ScopeFeatureState {

		/** FeatureState describes the high-level state of a Feature. It may be used to describe a Feature's state at the environ-level, or per-membershop, depending on the context. */
		state?: FeatureState;
	}

	/** ScopeFeatureState contains Scope-wide Feature status information. */
	export interface ScopeFeatureStateFormProperties {
	}
	export function CreateScopeFeatureStateFormGroup() {
		return new FormGroup<ScopeFeatureStateFormProperties>({
		});

	}


	/** Fleet contains the Fleet-wide metadata and configuration. */
	export interface Fleet {

		/** Output only. When the Fleet was created. */
		createTime?: string | null;

		/** DefaultClusterConfig describes the default cluster configurations to be applied to all clusters born-in-fleet. */
		defaultClusterConfig?: DefaultClusterConfig;

		/** Output only. When the Fleet was deleted. */
		deleteTime?: string | null;

		/** Optional. A user-assigned display name of the Fleet. When present, it must be between 4 to 30 characters. Allowed characters are: lowercase and uppercase letters, numbers, hyphen, single-quote, double-quote, space, and exclamation point. Example: `Production Fleet` */
		displayName?: string | null;

		/** Optional. Labels for this Fleet. */
		labels?: {[id: string]: string };

		/** Output only. The full, unique resource name of this fleet in the format of `projects/{project}/locations/{location}/fleets/{fleet}`. Each Google Cloud project can have at most one fleet resource, named "default". */
		name?: string | null;

		/** FleetLifecycleState describes the state of a Fleet resource. */
		state?: FleetLifecycleState;

		/** Output only. Google-generated UUID for this resource. This is unique across all Fleet resources. If a Fleet resource is deleted and another resource with the same name is created, it gets a different uid. */
		uid?: string | null;

		/** Output only. When the Fleet was last updated. */
		updateTime?: string | null;
	}

	/** Fleet contains the Fleet-wide metadata and configuration. */
	export interface FleetFormProperties {

		/** Output only. When the Fleet was created. */
		createTime: FormControl<string | null | undefined>,

		/** Output only. When the Fleet was deleted. */
		deleteTime: FormControl<string | null | undefined>,

		/** Optional. A user-assigned display name of the Fleet. When present, it must be between 4 to 30 characters. Allowed characters are: lowercase and uppercase letters, numbers, hyphen, single-quote, double-quote, space, and exclamation point. Example: `Production Fleet` */
		displayName: FormControl<string | null | undefined>,

		/** Optional. Labels for this Fleet. */
		labels: FormControl<{[id: string]: string } | null | undefined>,

		/** Output only. The full, unique resource name of this fleet in the format of `projects/{project}/locations/{location}/fleets/{fleet}`. Each Google Cloud project can have at most one fleet resource, named "default". */
		name: FormControl<string | null | undefined>,

		/** Output only. Google-generated UUID for this resource. This is unique across all Fleet resources. If a Fleet resource is deleted and another resource with the same name is created, it gets a different uid. */
		uid: FormControl<string | null | undefined>,

		/** Output only. When the Fleet was last updated. */
		updateTime: FormControl<string | null | undefined>,
	}
	export function CreateFleetFormGroup() {
		return new FormGroup<FleetFormProperties>({
			createTime: new FormControl<string | null | undefined>(undefined),
			deleteTime: new FormControl<string | null | undefined>(undefined),
			displayName: new FormControl<string | null | undefined>(undefined),
			labels: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			uid: new FormControl<string | null | undefined>(undefined),
			updateTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** FleetLifecycleState describes the state of a Fleet resource. */
	export interface FleetLifecycleState {

		/** Output only. The current state of the Fleet resource. */
		code?: FleetLifecycleStateCode | null;
	}

	/** FleetLifecycleState describes the state of a Fleet resource. */
	export interface FleetLifecycleStateFormProperties {

		/** Output only. The current state of the Fleet resource. */
		code: FormControl<FleetLifecycleStateCode | null | undefined>,
	}
	export function CreateFleetLifecycleStateFormGroup() {
		return new FormGroup<FleetLifecycleStateFormProperties>({
			code: new FormControl<FleetLifecycleStateCode | null | undefined>(undefined),
		});

	}

	export enum FleetLifecycleStateCode { CODE_UNSPECIFIED = 'CODE_UNSPECIFIED', CREATING = 'CREATING', READY = 'READY', DELETING = 'DELETING', UPDATING = 'UPDATING' }


	/** GenerateConnectManifestResponse contains manifest information for installing/upgrading a Connect agent. */
	export interface GenerateConnectManifestResponse {

		/** The ordered list of Kubernetes resources that need to be applied to the cluster for GKE Connect agent installation/upgrade. */
		manifest?: Array<ConnectAgentResource>;
	}

	/** GenerateConnectManifestResponse contains manifest information for installing/upgrading a Connect agent. */
	export interface GenerateConnectManifestResponseFormProperties {
	}
	export function CreateGenerateConnectManifestResponseFormGroup() {
		return new FormGroup<GenerateConnectManifestResponseFormProperties>({
		});

	}


	/** Response for GenerateRBACRoleBindingYAML. */
	export interface GenerateMembershipRBACRoleBindingYAMLResponse {

		/** a yaml text blob including the RBAC policies. */
		roleBindingsYaml?: string | null;
	}

	/** Response for GenerateRBACRoleBindingYAML. */
	export interface GenerateMembershipRBACRoleBindingYAMLResponseFormProperties {

		/** a yaml text blob including the RBAC policies. */
		roleBindingsYaml: FormControl<string | null | undefined>,
	}
	export function CreateGenerateMembershipRBACRoleBindingYAMLResponseFormGroup() {
		return new FormGroup<GenerateMembershipRBACRoleBindingYAMLResponseFormProperties>({
			roleBindingsYaml: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** GkeCluster contains information specific to GKE clusters. */
	export interface GkeCluster {

		/** Output only. If cluster_missing is set then it denotes that the GKE cluster no longer exists in the GKE Control Plane. */
		clusterMissing?: boolean | null;

		/** Immutable. Self-link of the Google Cloud resource for the GKE cluster. For example: //container.googleapis.com/projects/my-project/locations/us-west1-a/clusters/my-cluster Zonal clusters are also supported. */
		resourceLink?: string | null;
	}

	/** GkeCluster contains information specific to GKE clusters. */
	export interface GkeClusterFormProperties {

		/** Output only. If cluster_missing is set then it denotes that the GKE cluster no longer exists in the GKE Control Plane. */
		clusterMissing: FormControl<boolean | null | undefined>,

		/** Immutable. Self-link of the Google Cloud resource for the GKE cluster. For example: //container.googleapis.com/projects/my-project/locations/us-west1-a/clusters/my-cluster Zonal clusters are also supported. */
		resourceLink: FormControl<string | null | undefined>,
	}
	export function CreateGkeClusterFormGroup() {
		return new FormGroup<GkeClusterFormProperties>({
			clusterMissing: new FormControl<boolean | null | undefined>(undefined),
			resourceLink: new FormControl<string | null | undefined>(undefined),
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


	/** KubernetesMetadata provides informational metadata for Memberships representing Kubernetes clusters. */
	export interface KubernetesMetadata {

		/** Output only. Kubernetes API server version string as reported by `/version`. */
		kubernetesApiServerVersion?: string | null;

		/** Output only. The total memory capacity as reported by the sum of all Kubernetes nodes resources, defined in MB. */
		memoryMb?: number | null;

		/** Output only. Node count as reported by Kubernetes nodes resources. */
		nodeCount?: number | null;

		/** Output only. Node providerID as reported by the first node in the list of nodes on the Kubernetes endpoint. On Kubernetes platforms that support zero-node clusters (like GKE-on-GCP), the node_count will be zero and the node_provider_id will be empty. */
		nodeProviderId?: string | null;

		/** Output only. The time at which these details were last updated. This update_time is different from the Membership-level update_time since EndpointDetails are updated internally for API consumers. */
		updateTime?: string | null;

		/** Output only. vCPU count as reported by Kubernetes nodes resources. */
		vcpuCount?: number | null;
	}

	/** KubernetesMetadata provides informational metadata for Memberships representing Kubernetes clusters. */
	export interface KubernetesMetadataFormProperties {

		/** Output only. Kubernetes API server version string as reported by `/version`. */
		kubernetesApiServerVersion: FormControl<string | null | undefined>,

		/** Output only. The total memory capacity as reported by the sum of all Kubernetes nodes resources, defined in MB. */
		memoryMb: FormControl<number | null | undefined>,

		/** Output only. Node count as reported by Kubernetes nodes resources. */
		nodeCount: FormControl<number | null | undefined>,

		/** Output only. Node providerID as reported by the first node in the list of nodes on the Kubernetes endpoint. On Kubernetes platforms that support zero-node clusters (like GKE-on-GCP), the node_count will be zero and the node_provider_id will be empty. */
		nodeProviderId: FormControl<string | null | undefined>,

		/** Output only. The time at which these details were last updated. This update_time is different from the Membership-level update_time since EndpointDetails are updated internally for API consumers. */
		updateTime: FormControl<string | null | undefined>,

		/** Output only. vCPU count as reported by Kubernetes nodes resources. */
		vcpuCount: FormControl<number | null | undefined>,
	}
	export function CreateKubernetesMetadataFormGroup() {
		return new FormGroup<KubernetesMetadataFormProperties>({
			kubernetesApiServerVersion: new FormControl<string | null | undefined>(undefined),
			memoryMb: new FormControl<number | null | undefined>(undefined),
			nodeCount: new FormControl<number | null | undefined>(undefined),
			nodeProviderId: new FormControl<string | null | undefined>(undefined),
			updateTime: new FormControl<string | null | undefined>(undefined),
			vcpuCount: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** KubernetesResource contains the YAML manifests and configuration for Membership Kubernetes resources in the cluster. After CreateMembership or UpdateMembership, these resources should be re-applied in the cluster. */
	export interface KubernetesResource {

		/** Output only. The Kubernetes resources for installing the GKE Connect agent This field is only populated in the Membership returned from a successful long-running operation from CreateMembership or UpdateMembership. It is not populated during normal GetMembership or ListMemberships requests. To get the resource manifest after the initial registration, the caller should make a UpdateMembership call with an empty field mask. */
		connectResources?: Array<ResourceManifest>;

		/** Input only. The YAML representation of the Membership CR. This field is ignored for GKE clusters where Hub can read the CR directly. Callers should provide the CR that is currently present in the cluster during CreateMembership or UpdateMembership, or leave this field empty if none exists. The CR manifest is used to validate the cluster has not been registered with another Membership. */
		membershipCrManifest?: string | null;

		/** Output only. Additional Kubernetes resources that need to be applied to the cluster after Membership creation, and after every update. This field is only populated in the Membership returned from a successful long-running operation from CreateMembership or UpdateMembership. It is not populated during normal GetMembership or ListMemberships requests. To get the resource manifest after the initial registration, the caller should make a UpdateMembership call with an empty field mask. */
		membershipResources?: Array<ResourceManifest>;

		/** ResourceOptions represent options for Kubernetes resource generation. */
		resourceOptions?: ResourceOptions;
	}

	/** KubernetesResource contains the YAML manifests and configuration for Membership Kubernetes resources in the cluster. After CreateMembership or UpdateMembership, these resources should be re-applied in the cluster. */
	export interface KubernetesResourceFormProperties {

		/** Input only. The YAML representation of the Membership CR. This field is ignored for GKE clusters where Hub can read the CR directly. Callers should provide the CR that is currently present in the cluster during CreateMembership or UpdateMembership, or leave this field empty if none exists. The CR manifest is used to validate the cluster has not been registered with another Membership. */
		membershipCrManifest: FormControl<string | null | undefined>,
	}
	export function CreateKubernetesResourceFormGroup() {
		return new FormGroup<KubernetesResourceFormProperties>({
			membershipCrManifest: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** ResourceManifest represents a single Kubernetes resource to be applied to the cluster. */
	export interface ResourceManifest {

		/** Whether the resource provided in the manifest is `cluster_scoped`. If unset, the manifest is assumed to be namespace scoped. This field is used for REST mapping when applying the resource in a cluster. */
		clusterScoped?: boolean | null;

		/** YAML manifest of the resource. */
		manifest?: string | null;
	}

	/** ResourceManifest represents a single Kubernetes resource to be applied to the cluster. */
	export interface ResourceManifestFormProperties {

		/** Whether the resource provided in the manifest is `cluster_scoped`. If unset, the manifest is assumed to be namespace scoped. This field is used for REST mapping when applying the resource in a cluster. */
		clusterScoped: FormControl<boolean | null | undefined>,

		/** YAML manifest of the resource. */
		manifest: FormControl<string | null | undefined>,
	}
	export function CreateResourceManifestFormGroup() {
		return new FormGroup<ResourceManifestFormProperties>({
			clusterScoped: new FormControl<boolean | null | undefined>(undefined),
			manifest: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** ResourceOptions represent options for Kubernetes resource generation. */
	export interface ResourceOptions {

		/** Optional. The Connect agent version to use for connect_resources. Defaults to the latest GKE Connect version. The version must be a currently supported version, obsolete versions will be rejected. */
		connectVersion?: string | null;

		/** Optional. Major version of the Kubernetes cluster. This is only used to determine which version to use for the CustomResourceDefinition resources, `apiextensions/v1beta1` or`apiextensions/v1`. */
		k8sVersion?: string | null;

		/** Optional. Use `apiextensions/v1beta1` instead of `apiextensions/v1` for CustomResourceDefinition resources. This option should be set for clusters with Kubernetes apiserver versions <1.16. */
		v1beta1Crd?: boolean | null;
	}

	/** ResourceOptions represent options for Kubernetes resource generation. */
	export interface ResourceOptionsFormProperties {

		/** Optional. The Connect agent version to use for connect_resources. Defaults to the latest GKE Connect version. The version must be a currently supported version, obsolete versions will be rejected. */
		connectVersion: FormControl<string | null | undefined>,

		/** Optional. Major version of the Kubernetes cluster. This is only used to determine which version to use for the CustomResourceDefinition resources, `apiextensions/v1beta1` or`apiextensions/v1`. */
		k8sVersion: FormControl<string | null | undefined>,

		/** Optional. Use `apiextensions/v1beta1` instead of `apiextensions/v1` for CustomResourceDefinition resources. This option should be set for clusters with Kubernetes apiserver versions <1.16. */
		v1beta1Crd: FormControl<boolean | null | undefined>,
	}
	export function CreateResourceOptionsFormGroup() {
		return new FormGroup<ResourceOptionsFormProperties>({
			connectVersion: new FormControl<string | null | undefined>(undefined),
			k8sVersion: new FormControl<string | null | undefined>(undefined),
			v1beta1Crd: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Response message for the `GkeHub.ListFeatures` method. */
	export interface ListFeaturesResponse {

		/** A token to request the next page of resources from the `ListFeatures` method. The value of an empty string means that there are no more resources to return. */
		nextPageToken?: string | null;

		/** The list of matching Features */
		resources?: Array<Feature>;
	}

	/** Response message for the `GkeHub.ListFeatures` method. */
	export interface ListFeaturesResponseFormProperties {

		/** A token to request the next page of resources from the `ListFeatures` method. The value of an empty string means that there are no more resources to return. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListFeaturesResponseFormGroup() {
		return new FormGroup<ListFeaturesResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response message for the `GkeHub.ListFleetsResponse` method. */
	export interface ListFleetsResponse {

		/** The list of matching fleets. */
		fleets?: Array<Fleet>;

		/** A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. The token is only valid for 1h. */
		nextPageToken?: string | null;
	}

	/** Response message for the `GkeHub.ListFleetsResponse` method. */
	export interface ListFleetsResponseFormProperties {

		/** A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. The token is only valid for 1h. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListFleetsResponseFormGroup() {
		return new FormGroup<ListFleetsResponseFormProperties>({
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


	/** List of MembershipBindings. */
	export interface ListMembershipBindingsResponse {

		/** The list of membership_bindings */
		membershipBindings?: Array<MembershipBinding>;

		/** A token to request the next page of resources from the `ListMembershipBindings` method. The value of an empty string means that there are no more resources to return. */
		nextPageToken?: string | null;
	}

	/** List of MembershipBindings. */
	export interface ListMembershipBindingsResponseFormProperties {

		/** A token to request the next page of resources from the `ListMembershipBindings` method. The value of an empty string means that there are no more resources to return. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListMembershipBindingsResponseFormGroup() {
		return new FormGroup<ListMembershipBindingsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** MembershipBinding is a subresource of a Membership, representing what Fleet Scopes (or other, future Fleet resources) a Membership is bound to. */
	export interface MembershipBinding {

		/** Output only. When the membership binding was created. */
		createTime?: string | null;

		/** Output only. When the membership binding was deleted. */
		deleteTime?: string | null;

		/** Optional. Labels for this MembershipBinding. */
		labels?: {[id: string]: string };

		/** The resource name for the membershipbinding itself `projects/{project}/locations/{location}/memberships/{membership}/bindings/{membershipbinding}` */
		name?: string | null;

		/** A Scope resource name in the format `projects/locations/scopes/*`. */
		scope?: string | null;

		/** MembershipBindingLifecycleState describes the state of a Binding resource. */
		state?: MembershipBindingLifecycleState;

		/** Output only. Google-generated UUID for this resource. This is unique across all membershipbinding resources. If a membershipbinding resource is deleted and another resource with the same name is created, it gets a different uid. */
		uid?: string | null;

		/** Output only. When the membership binding was last updated. */
		updateTime?: string | null;
	}

	/** MembershipBinding is a subresource of a Membership, representing what Fleet Scopes (or other, future Fleet resources) a Membership is bound to. */
	export interface MembershipBindingFormProperties {

		/** Output only. When the membership binding was created. */
		createTime: FormControl<string | null | undefined>,

		/** Output only. When the membership binding was deleted. */
		deleteTime: FormControl<string | null | undefined>,

		/** Optional. Labels for this MembershipBinding. */
		labels: FormControl<{[id: string]: string } | null | undefined>,

		/** The resource name for the membershipbinding itself `projects/{project}/locations/{location}/memberships/{membership}/bindings/{membershipbinding}` */
		name: FormControl<string | null | undefined>,

		/** A Scope resource name in the format `projects/locations/scopes/*`. */
		scope: FormControl<string | null | undefined>,

		/** Output only. Google-generated UUID for this resource. This is unique across all membershipbinding resources. If a membershipbinding resource is deleted and another resource with the same name is created, it gets a different uid. */
		uid: FormControl<string | null | undefined>,

		/** Output only. When the membership binding was last updated. */
		updateTime: FormControl<string | null | undefined>,
	}
	export function CreateMembershipBindingFormGroup() {
		return new FormGroup<MembershipBindingFormProperties>({
			createTime: new FormControl<string | null | undefined>(undefined),
			deleteTime: new FormControl<string | null | undefined>(undefined),
			labels: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			scope: new FormControl<string | null | undefined>(undefined),
			uid: new FormControl<string | null | undefined>(undefined),
			updateTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** MembershipBindingLifecycleState describes the state of a Binding resource. */
	export interface MembershipBindingLifecycleState {

		/** Output only. The current state of the MembershipBinding resource. */
		code?: FleetLifecycleStateCode | null;
	}

	/** MembershipBindingLifecycleState describes the state of a Binding resource. */
	export interface MembershipBindingLifecycleStateFormProperties {

		/** Output only. The current state of the MembershipBinding resource. */
		code: FormControl<FleetLifecycleStateCode | null | undefined>,
	}
	export function CreateMembershipBindingLifecycleStateFormGroup() {
		return new FormGroup<MembershipBindingLifecycleStateFormProperties>({
			code: new FormControl<FleetLifecycleStateCode | null | undefined>(undefined),
		});

	}


	/** List of Membership RBACRoleBindings. */
	export interface ListMembershipRBACRoleBindingsResponse {

		/** A token to request the next page of resources from the `ListMembershipRBACRoleBindings` method. The value of an empty string means that there are no more resources to return. */
		nextPageToken?: string | null;

		/** The list of Membership RBACRoleBindings. */
		rbacrolebindings?: Array<RBACRoleBinding>;
	}

	/** List of Membership RBACRoleBindings. */
	export interface ListMembershipRBACRoleBindingsResponseFormProperties {

		/** A token to request the next page of resources from the `ListMembershipRBACRoleBindings` method. The value of an empty string means that there are no more resources to return. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListMembershipRBACRoleBindingsResponseFormGroup() {
		return new FormGroup<ListMembershipRBACRoleBindingsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** RBACRoleBinding represents a rbacrolebinding across the Fleet */
	export interface RBACRoleBinding {

		/** Output only. When the rbacrolebinding was created. */
		createTime?: string | null;

		/** Output only. When the rbacrolebinding was deleted. */
		deleteTime?: string | null;

		/** group is the group, as seen by the kubernetes cluster. */
		group?: string | null;

		/** Optional. Labels for this RBACRolebinding. */
		labels?: {[id: string]: string };

		/** The resource name for the rbacrolebinding `projects/{project}/locations/{location}/scopes/{scope}/rbacrolebindings/{rbacrolebinding}` or `projects/{project}/locations/{location}/memberships/{membership}/rbacrolebindings/{rbacrolebinding}` */
		name?: string | null;

		/** Role is the type for Kubernetes roles */
		role?: Role;

		/** RBACRoleBindingLifecycleState describes the state of a RbacRoleBinding resource. */
		state?: RBACRoleBindingLifecycleState;

		/** Output only. Google-generated UUID for this resource. This is unique across all rbacrolebinding resources. If a rbacrolebinding resource is deleted and another resource with the same name is created, it gets a different uid. */
		uid?: string | null;

		/** Output only. When the rbacrolebinding was last updated. */
		updateTime?: string | null;

		/** user is the name of the user as seen by the kubernetes cluster, example "alice" or "alice@domain.tld" */
		user?: string | null;
	}

	/** RBACRoleBinding represents a rbacrolebinding across the Fleet */
	export interface RBACRoleBindingFormProperties {

		/** Output only. When the rbacrolebinding was created. */
		createTime: FormControl<string | null | undefined>,

		/** Output only. When the rbacrolebinding was deleted. */
		deleteTime: FormControl<string | null | undefined>,

		/** group is the group, as seen by the kubernetes cluster. */
		group: FormControl<string | null | undefined>,

		/** Optional. Labels for this RBACRolebinding. */
		labels: FormControl<{[id: string]: string } | null | undefined>,

		/** The resource name for the rbacrolebinding `projects/{project}/locations/{location}/scopes/{scope}/rbacrolebindings/{rbacrolebinding}` or `projects/{project}/locations/{location}/memberships/{membership}/rbacrolebindings/{rbacrolebinding}` */
		name: FormControl<string | null | undefined>,

		/** Output only. Google-generated UUID for this resource. This is unique across all rbacrolebinding resources. If a rbacrolebinding resource is deleted and another resource with the same name is created, it gets a different uid. */
		uid: FormControl<string | null | undefined>,

		/** Output only. When the rbacrolebinding was last updated. */
		updateTime: FormControl<string | null | undefined>,

		/** user is the name of the user as seen by the kubernetes cluster, example "alice" or "alice@domain.tld" */
		user: FormControl<string | null | undefined>,
	}
	export function CreateRBACRoleBindingFormGroup() {
		return new FormGroup<RBACRoleBindingFormProperties>({
			createTime: new FormControl<string | null | undefined>(undefined),
			deleteTime: new FormControl<string | null | undefined>(undefined),
			group: new FormControl<string | null | undefined>(undefined),
			labels: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			uid: new FormControl<string | null | undefined>(undefined),
			updateTime: new FormControl<string | null | undefined>(undefined),
			user: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Role is the type for Kubernetes roles */
	export interface Role {

		/** predefined_role is the Kubernetes default role to use */
		predefinedRole?: RolePredefinedRole | null;
	}

	/** Role is the type for Kubernetes roles */
	export interface RoleFormProperties {

		/** predefined_role is the Kubernetes default role to use */
		predefinedRole: FormControl<RolePredefinedRole | null | undefined>,
	}
	export function CreateRoleFormGroup() {
		return new FormGroup<RoleFormProperties>({
			predefinedRole: new FormControl<RolePredefinedRole | null | undefined>(undefined),
		});

	}

	export enum RolePredefinedRole { UNKNOWN = 'UNKNOWN', ADMIN = 'ADMIN', EDIT = 'EDIT', VIEW = 'VIEW', ANTHOS_SUPPORT = 'ANTHOS_SUPPORT' }


	/** RBACRoleBindingLifecycleState describes the state of a RbacRoleBinding resource. */
	export interface RBACRoleBindingLifecycleState {

		/** Output only. The current state of the rbacrolebinding resource. */
		code?: FleetLifecycleStateCode | null;
	}

	/** RBACRoleBindingLifecycleState describes the state of a RbacRoleBinding resource. */
	export interface RBACRoleBindingLifecycleStateFormProperties {

		/** Output only. The current state of the rbacrolebinding resource. */
		code: FormControl<FleetLifecycleStateCode | null | undefined>,
	}
	export function CreateRBACRoleBindingLifecycleStateFormGroup() {
		return new FormGroup<RBACRoleBindingLifecycleStateFormProperties>({
			code: new FormControl<FleetLifecycleStateCode | null | undefined>(undefined),
		});

	}


	/** Response message for the `GkeHub.ListMemberships` method. */
	export interface ListMembershipsResponse {

		/** A token to request the next page of resources from the `ListMemberships` method. The value of an empty string means that there are no more resources to return. */
		nextPageToken?: string | null;

		/** The list of matching Memberships. */
		resources?: Array<Membership>;

		/** List of locations that could not be reached while fetching this list. */
		unreachable?: Array<string>;
	}

	/** Response message for the `GkeHub.ListMemberships` method. */
	export interface ListMembershipsResponseFormProperties {

		/** A token to request the next page of resources from the `ListMemberships` method. The value of an empty string means that there are no more resources to return. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListMembershipsResponseFormGroup() {
		return new FormGroup<ListMembershipsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Membership contains information about a member cluster. */
	export interface Membership {

		/** Authority encodes how Google will recognize identities from this Membership. See the workload identity documentation for more details: https://cloud.google.com/kubernetes-engine/docs/how-to/workload-identity */
		authority?: Authority;

		/** Output only. When the Membership was created. */
		createTime?: string | null;

		/** Output only. When the Membership was deleted. */
		deleteTime?: string | null;

		/** Output only. Description of this membership, limited to 63 characters. Must match the regex: `a-zA-Z0-9*` This field is present for legacy purposes. */
		description?: string | null;

		/** MembershipEndpoint contains information needed to contact a Kubernetes API, endpoint and any additional Kubernetes metadata. */
		endpoint?: MembershipEndpoint;

		/** Optional. An externally-generated and managed ID for this Membership. This ID may be modified after creation, but this is not recommended. The ID must match the regex: `a-zA-Z0-9*` If this Membership represents a Kubernetes cluster, this value should be set to the UID of the `kube-system` namespace object. */
		externalId?: string | null;

		/** Optional. Labels for this membership. */
		labels?: {[id: string]: string };

		/** Output only. For clusters using Connect, the timestamp of the most recent connection established with Google Cloud. This time is updated every several minutes, not continuously. For clusters that do not use GKE Connect, or that have never connected successfully, this field will be unset. */
		lastConnectionTime?: string | null;

		/** MonitoringConfig informs Fleet-based applications/services/UIs how the metrics for the underlying cluster is reported to cloud monitoring services. It can be set from empty to non-empty, but can't be mutated directly to prevent accidentally breaking the constinousty of metrics. */
		monitoringConfig?: MonitoringConfig;

		/** Output only. The full, unique name of this Membership resource in the format `projects/locations/memberships/{membership_id}`, set during creation. `membership_id` must be a valid RFC 1123 compliant DNS label: 1. At most 63 characters in length 2. It must consist of lower case alphanumeric characters or `-` 3. It must start and end with an alphanumeric character Which can be expressed as the regex: `[a-z0-9]([-a-z0-9]*[a-z0-9])?`, with a maximum length of 63 characters. */
		name?: string | null;

		/** MembershipState describes the state of a Membership resource. */
		state?: MembershipState;

		/** Output only. Google-generated UUID for this resource. This is unique across all Membership resources. If a Membership resource is deleted and another resource with the same name is created, it gets a different unique_id. */
		uniqueId?: string | null;

		/** Output only. When the Membership was last updated. */
		updateTime?: string | null;
	}

	/** Membership contains information about a member cluster. */
	export interface MembershipFormProperties {

		/** Output only. When the Membership was created. */
		createTime: FormControl<string | null | undefined>,

		/** Output only. When the Membership was deleted. */
		deleteTime: FormControl<string | null | undefined>,

		/** Output only. Description of this membership, limited to 63 characters. Must match the regex: `a-zA-Z0-9*` This field is present for legacy purposes. */
		description: FormControl<string | null | undefined>,

		/** Optional. An externally-generated and managed ID for this Membership. This ID may be modified after creation, but this is not recommended. The ID must match the regex: `a-zA-Z0-9*` If this Membership represents a Kubernetes cluster, this value should be set to the UID of the `kube-system` namespace object. */
		externalId: FormControl<string | null | undefined>,

		/** Optional. Labels for this membership. */
		labels: FormControl<{[id: string]: string } | null | undefined>,

		/** Output only. For clusters using Connect, the timestamp of the most recent connection established with Google Cloud. This time is updated every several minutes, not continuously. For clusters that do not use GKE Connect, or that have never connected successfully, this field will be unset. */
		lastConnectionTime: FormControl<string | null | undefined>,

		/** Output only. The full, unique name of this Membership resource in the format `projects/locations/memberships/{membership_id}`, set during creation. `membership_id` must be a valid RFC 1123 compliant DNS label: 1. At most 63 characters in length 2. It must consist of lower case alphanumeric characters or `-` 3. It must start and end with an alphanumeric character Which can be expressed as the regex: `[a-z0-9]([-a-z0-9]*[a-z0-9])?`, with a maximum length of 63 characters. */
		name: FormControl<string | null | undefined>,

		/** Output only. Google-generated UUID for this resource. This is unique across all Membership resources. If a Membership resource is deleted and another resource with the same name is created, it gets a different unique_id. */
		uniqueId: FormControl<string | null | undefined>,

		/** Output only. When the Membership was last updated. */
		updateTime: FormControl<string | null | undefined>,
	}
	export function CreateMembershipFormGroup() {
		return new FormGroup<MembershipFormProperties>({
			createTime: new FormControl<string | null | undefined>(undefined),
			deleteTime: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			externalId: new FormControl<string | null | undefined>(undefined),
			labels: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			lastConnectionTime: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			uniqueId: new FormControl<string | null | undefined>(undefined),
			updateTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** MembershipEndpoint contains information needed to contact a Kubernetes API, endpoint and any additional Kubernetes metadata. */
	export interface MembershipEndpoint {

		/** ApplianceCluster contains information specific to GDC Edge Appliance Clusters. */
		applianceCluster?: ApplianceCluster;

		/** EdgeCluster contains information specific to Google Edge Clusters. */
		edgeCluster?: EdgeCluster;

		/** GkeCluster contains information specific to GKE clusters. */
		gkeCluster?: GkeCluster;

		/** Output only. Whether the lifecycle of this membership is managed by a google cluster platform service. */
		googleManaged?: boolean | null;

		/** KubernetesMetadata provides informational metadata for Memberships representing Kubernetes clusters. */
		kubernetesMetadata?: KubernetesMetadata;

		/** KubernetesResource contains the YAML manifests and configuration for Membership Kubernetes resources in the cluster. After CreateMembership or UpdateMembership, these resources should be re-applied in the cluster. */
		kubernetesResource?: KubernetesResource;

		/** MultiCloudCluster contains information specific to GKE Multi-Cloud clusters. */
		multiCloudCluster?: MultiCloudCluster;

		/** OnPremCluster contains information specific to GKE On-Prem clusters. */
		onPremCluster?: OnPremCluster;
	}

	/** MembershipEndpoint contains information needed to contact a Kubernetes API, endpoint and any additional Kubernetes metadata. */
	export interface MembershipEndpointFormProperties {

		/** Output only. Whether the lifecycle of this membership is managed by a google cluster platform service. */
		googleManaged: FormControl<boolean | null | undefined>,
	}
	export function CreateMembershipEndpointFormGroup() {
		return new FormGroup<MembershipEndpointFormProperties>({
			googleManaged: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** MultiCloudCluster contains information specific to GKE Multi-Cloud clusters. */
	export interface MultiCloudCluster {

		/** Output only. If cluster_missing is set then it denotes that API(gkemulticloud.googleapis.com) resource for this GKE Multi-Cloud cluster no longer exists. */
		clusterMissing?: boolean | null;

		/** Immutable. Self-link of the Google Cloud resource for the GKE Multi-Cloud cluster. For example: //gkemulticloud.googleapis.com/projects/my-project/locations/us-west1-a/awsClusters/my-cluster //gkemulticloud.googleapis.com/projects/my-project/locations/us-west1-a/azureClusters/my-cluster //gkemulticloud.googleapis.com/projects/my-project/locations/us-west1-a/attachedClusters/my-cluster */
		resourceLink?: string | null;
	}

	/** MultiCloudCluster contains information specific to GKE Multi-Cloud clusters. */
	export interface MultiCloudClusterFormProperties {

		/** Output only. If cluster_missing is set then it denotes that API(gkemulticloud.googleapis.com) resource for this GKE Multi-Cloud cluster no longer exists. */
		clusterMissing: FormControl<boolean | null | undefined>,

		/** Immutable. Self-link of the Google Cloud resource for the GKE Multi-Cloud cluster. For example: //gkemulticloud.googleapis.com/projects/my-project/locations/us-west1-a/awsClusters/my-cluster //gkemulticloud.googleapis.com/projects/my-project/locations/us-west1-a/azureClusters/my-cluster //gkemulticloud.googleapis.com/projects/my-project/locations/us-west1-a/attachedClusters/my-cluster */
		resourceLink: FormControl<string | null | undefined>,
	}
	export function CreateMultiCloudClusterFormGroup() {
		return new FormGroup<MultiCloudClusterFormProperties>({
			clusterMissing: new FormControl<boolean | null | undefined>(undefined),
			resourceLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** OnPremCluster contains information specific to GKE On-Prem clusters. */
	export interface OnPremCluster {

		/** Immutable. Whether the cluster is an admin cluster. */
		adminCluster?: boolean | null;

		/** Output only. If cluster_missing is set then it denotes that API(gkeonprem.googleapis.com) resource for this GKE On-Prem cluster no longer exists. */
		clusterMissing?: boolean | null;

		/** Immutable. The on prem cluster's type. */
		clusterType?: OnPremClusterClusterType | null;

		/** Immutable. Self-link of the Google Cloud resource for the GKE On-Prem cluster. For example: //gkeonprem.googleapis.com/projects/my-project/locations/us-west1-a/vmwareClusters/my-cluster //gkeonprem.googleapis.com/projects/my-project/locations/us-west1-a/bareMetalClusters/my-cluster */
		resourceLink?: string | null;
	}

	/** OnPremCluster contains information specific to GKE On-Prem clusters. */
	export interface OnPremClusterFormProperties {

		/** Immutable. Whether the cluster is an admin cluster. */
		adminCluster: FormControl<boolean | null | undefined>,

		/** Output only. If cluster_missing is set then it denotes that API(gkeonprem.googleapis.com) resource for this GKE On-Prem cluster no longer exists. */
		clusterMissing: FormControl<boolean | null | undefined>,

		/** Immutable. The on prem cluster's type. */
		clusterType: FormControl<OnPremClusterClusterType | null | undefined>,

		/** Immutable. Self-link of the Google Cloud resource for the GKE On-Prem cluster. For example: //gkeonprem.googleapis.com/projects/my-project/locations/us-west1-a/vmwareClusters/my-cluster //gkeonprem.googleapis.com/projects/my-project/locations/us-west1-a/bareMetalClusters/my-cluster */
		resourceLink: FormControl<string | null | undefined>,
	}
	export function CreateOnPremClusterFormGroup() {
		return new FormGroup<OnPremClusterFormProperties>({
			adminCluster: new FormControl<boolean | null | undefined>(undefined),
			clusterMissing: new FormControl<boolean | null | undefined>(undefined),
			clusterType: new FormControl<OnPremClusterClusterType | null | undefined>(undefined),
			resourceLink: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum OnPremClusterClusterType { CLUSTERTYPE_UNSPECIFIED = 'CLUSTERTYPE_UNSPECIFIED', BOOTSTRAP = 'BOOTSTRAP', HYBRID = 'HYBRID', STANDALONE = 'STANDALONE', USER = 'USER' }


	/** MonitoringConfig informs Fleet-based applications/services/UIs how the metrics for the underlying cluster is reported to cloud monitoring services. It can be set from empty to non-empty, but can't be mutated directly to prevent accidentally breaking the constinousty of metrics. */
	export interface MonitoringConfig {

		/** Optional. Cluster name used to report metrics. For Anthos on VMWare/Baremetal/MultiCloud clusters, it would be in format {cluster_type}/{cluster_name}, e.g., "awsClusters/cluster_1". */
		cluster?: string | null;

		/** Optional. For GKE and Multicloud clusters, this is the UUID of the cluster resource. For VMWare and Baremetal clusters, this is the kube-system UID. */
		clusterHash?: string | null;

		/** Optional. Kubernetes system metrics, if available, are written to this prefix. This defaults to kubernetes.io for GKE, and kubernetes.io/anthos for Anthos eventually. Noted: Anthos MultiCloud will have kubernetes.io prefix today but will migration to be under kubernetes.io/anthos. */
		kubernetesMetricsPrefix?: string | null;

		/** Optional. Location used to report Metrics */
		location?: string | null;

		/** Optional. Project used to report Metrics */
		projectId?: string | null;
	}

	/** MonitoringConfig informs Fleet-based applications/services/UIs how the metrics for the underlying cluster is reported to cloud monitoring services. It can be set from empty to non-empty, but can't be mutated directly to prevent accidentally breaking the constinousty of metrics. */
	export interface MonitoringConfigFormProperties {

		/** Optional. Cluster name used to report metrics. For Anthos on VMWare/Baremetal/MultiCloud clusters, it would be in format {cluster_type}/{cluster_name}, e.g., "awsClusters/cluster_1". */
		cluster: FormControl<string | null | undefined>,

		/** Optional. For GKE and Multicloud clusters, this is the UUID of the cluster resource. For VMWare and Baremetal clusters, this is the kube-system UID. */
		clusterHash: FormControl<string | null | undefined>,

		/** Optional. Kubernetes system metrics, if available, are written to this prefix. This defaults to kubernetes.io for GKE, and kubernetes.io/anthos for Anthos eventually. Noted: Anthos MultiCloud will have kubernetes.io prefix today but will migration to be under kubernetes.io/anthos. */
		kubernetesMetricsPrefix: FormControl<string | null | undefined>,

		/** Optional. Location used to report Metrics */
		location: FormControl<string | null | undefined>,

		/** Optional. Project used to report Metrics */
		projectId: FormControl<string | null | undefined>,
	}
	export function CreateMonitoringConfigFormGroup() {
		return new FormGroup<MonitoringConfigFormProperties>({
			cluster: new FormControl<string | null | undefined>(undefined),
			clusterHash: new FormControl<string | null | undefined>(undefined),
			kubernetesMetricsPrefix: new FormControl<string | null | undefined>(undefined),
			location: new FormControl<string | null | undefined>(undefined),
			projectId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** MembershipState describes the state of a Membership resource. */
	export interface MembershipState {

		/** Output only. The current state of the Membership resource. */
		code?: MembershipStateCode | null;
	}

	/** MembershipState describes the state of a Membership resource. */
	export interface MembershipStateFormProperties {

		/** Output only. The current state of the Membership resource. */
		code: FormControl<MembershipStateCode | null | undefined>,
	}
	export function CreateMembershipStateFormGroup() {
		return new FormGroup<MembershipStateFormProperties>({
			code: new FormControl<MembershipStateCode | null | undefined>(undefined),
		});

	}

	export enum MembershipStateCode { CODE_UNSPECIFIED = 'CODE_UNSPECIFIED', CREATING = 'CREATING', READY = 'READY', DELETING = 'DELETING', UPDATING = 'UPDATING', SERVICE_UPDATING = 'SERVICE_UPDATING' }


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
		error?: GoogleRpcStatus;

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


	/** List of fleet namespaces. */
	export interface ListScopeNamespacesResponse {

		/** A token to request the next page of resources from the `ListNamespaces` method. The value of an empty string means that there are no more resources to return. */
		nextPageToken?: string | null;

		/** The list of fleet namespaces */
		scopeNamespaces?: Array<Namespace>;
	}

	/** List of fleet namespaces. */
	export interface ListScopeNamespacesResponseFormProperties {

		/** A token to request the next page of resources from the `ListNamespaces` method. The value of an empty string means that there are no more resources to return. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListScopeNamespacesResponseFormGroup() {
		return new FormGroup<ListScopeNamespacesResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Namespace represents a namespace across the Fleet */
	export interface Namespace {

		/** Output only. When the namespace was created. */
		createTime?: string | null;

		/** Output only. When the namespace was deleted. */
		deleteTime?: string | null;

		/** Optional. Labels for this Namespace. */
		labels?: {[id: string]: string };

		/** The resource name for the namespace `projects/{project}/locations/{location}/namespaces/{namespace}` */
		name?: string | null;

		/** Optional. Namespace-level cluster namespace labels. These labels are applied to the related namespace of the member clusters bound to the parent Scope. Scope-level labels (`namespace_labels` in the Fleet Scope resource) take precedence over Namespace-level labels if they share a key. Keys and values must be Kubernetes-conformant. */
		namespaceLabels?: {[id: string]: string };

		/** Required. Scope associated with the namespace */
		scope?: string | null;

		/** NamespaceLifecycleState describes the state of a Namespace resource. */
		state?: NamespaceLifecycleState;

		/** Output only. Google-generated UUID for this resource. This is unique across all namespace resources. If a namespace resource is deleted and another resource with the same name is created, it gets a different uid. */
		uid?: string | null;

		/** Output only. When the namespace was last updated. */
		updateTime?: string | null;
	}

	/** Namespace represents a namespace across the Fleet */
	export interface NamespaceFormProperties {

		/** Output only. When the namespace was created. */
		createTime: FormControl<string | null | undefined>,

		/** Output only. When the namespace was deleted. */
		deleteTime: FormControl<string | null | undefined>,

		/** Optional. Labels for this Namespace. */
		labels: FormControl<{[id: string]: string } | null | undefined>,

		/** The resource name for the namespace `projects/{project}/locations/{location}/namespaces/{namespace}` */
		name: FormControl<string | null | undefined>,

		/** Optional. Namespace-level cluster namespace labels. These labels are applied to the related namespace of the member clusters bound to the parent Scope. Scope-level labels (`namespace_labels` in the Fleet Scope resource) take precedence over Namespace-level labels if they share a key. Keys and values must be Kubernetes-conformant. */
		namespaceLabels: FormControl<{[id: string]: string } | null | undefined>,

		/** Required. Scope associated with the namespace */
		scope: FormControl<string | null | undefined>,

		/** Output only. Google-generated UUID for this resource. This is unique across all namespace resources. If a namespace resource is deleted and another resource with the same name is created, it gets a different uid. */
		uid: FormControl<string | null | undefined>,

		/** Output only. When the namespace was last updated. */
		updateTime: FormControl<string | null | undefined>,
	}
	export function CreateNamespaceFormGroup() {
		return new FormGroup<NamespaceFormProperties>({
			createTime: new FormControl<string | null | undefined>(undefined),
			deleteTime: new FormControl<string | null | undefined>(undefined),
			labels: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			namespaceLabels: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			scope: new FormControl<string | null | undefined>(undefined),
			uid: new FormControl<string | null | undefined>(undefined),
			updateTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** NamespaceLifecycleState describes the state of a Namespace resource. */
	export interface NamespaceLifecycleState {

		/** Output only. The current state of the Namespace resource. */
		code?: FleetLifecycleStateCode | null;
	}

	/** NamespaceLifecycleState describes the state of a Namespace resource. */
	export interface NamespaceLifecycleStateFormProperties {

		/** Output only. The current state of the Namespace resource. */
		code: FormControl<FleetLifecycleStateCode | null | undefined>,
	}
	export function CreateNamespaceLifecycleStateFormGroup() {
		return new FormGroup<NamespaceLifecycleStateFormProperties>({
			code: new FormControl<FleetLifecycleStateCode | null | undefined>(undefined),
		});

	}


	/** List of Scope RBACRoleBindings. */
	export interface ListScopeRBACRoleBindingsResponse {

		/** A token to request the next page of resources from the `ListScopeRBACRoleBindings` method. The value of an empty string means that there are no more resources to return. */
		nextPageToken?: string | null;

		/** The list of Scope RBACRoleBindings. */
		rbacrolebindings?: Array<RBACRoleBinding>;
	}

	/** List of Scope RBACRoleBindings. */
	export interface ListScopeRBACRoleBindingsResponseFormProperties {

		/** A token to request the next page of resources from the `ListScopeRBACRoleBindings` method. The value of an empty string means that there are no more resources to return. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListScopeRBACRoleBindingsResponseFormGroup() {
		return new FormGroup<ListScopeRBACRoleBindingsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** List of Scopes. */
	export interface ListScopesResponse {

		/** A token to request the next page of resources from the `ListScopes` method. The value of an empty string means that there are no more resources to return. */
		nextPageToken?: string | null;

		/** The list of Scopes */
		scopes?: Array<Scope>;
	}

	/** List of Scopes. */
	export interface ListScopesResponseFormProperties {

		/** A token to request the next page of resources from the `ListScopes` method. The value of an empty string means that there are no more resources to return. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListScopesResponseFormGroup() {
		return new FormGroup<ListScopesResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Scope represents a Scope in a Fleet. */
	export interface Scope {

		/** Output only. When the scope was created. */
		createTime?: string | null;

		/** Output only. When the scope was deleted. */
		deleteTime?: string | null;

		/** Optional. Labels for this Scope. */
		labels?: {[id: string]: string };

		/** The resource name for the scope `projects/{project}/locations/{location}/scopes/{scope}` */
		name?: string | null;

		/** Optional. Scope-level cluster namespace labels. For the member clusters bound to the Scope, these labels are applied to each namespace under the Scope. Scope-level labels take precedence over Namespace-level labels (`namespace_labels` in the Fleet Namespace resource) if they share a key. Keys and values must be Kubernetes-conformant. */
		namespaceLabels?: {[id: string]: string };

		/** ScopeLifecycleState describes the state of a Scope resource. */
		state?: ScopeLifecycleState;

		/** Output only. Google-generated UUID for this resource. This is unique across all scope resources. If a scope resource is deleted and another resource with the same name is created, it gets a different uid. */
		uid?: string | null;

		/** Output only. When the scope was last updated. */
		updateTime?: string | null;
	}

	/** Scope represents a Scope in a Fleet. */
	export interface ScopeFormProperties {

		/** Output only. When the scope was created. */
		createTime: FormControl<string | null | undefined>,

		/** Output only. When the scope was deleted. */
		deleteTime: FormControl<string | null | undefined>,

		/** Optional. Labels for this Scope. */
		labels: FormControl<{[id: string]: string } | null | undefined>,

		/** The resource name for the scope `projects/{project}/locations/{location}/scopes/{scope}` */
		name: FormControl<string | null | undefined>,

		/** Optional. Scope-level cluster namespace labels. For the member clusters bound to the Scope, these labels are applied to each namespace under the Scope. Scope-level labels take precedence over Namespace-level labels (`namespace_labels` in the Fleet Namespace resource) if they share a key. Keys and values must be Kubernetes-conformant. */
		namespaceLabels: FormControl<{[id: string]: string } | null | undefined>,

		/** Output only. Google-generated UUID for this resource. This is unique across all scope resources. If a scope resource is deleted and another resource with the same name is created, it gets a different uid. */
		uid: FormControl<string | null | undefined>,

		/** Output only. When the scope was last updated. */
		updateTime: FormControl<string | null | undefined>,
	}
	export function CreateScopeFormGroup() {
		return new FormGroup<ScopeFormProperties>({
			createTime: new FormControl<string | null | undefined>(undefined),
			deleteTime: new FormControl<string | null | undefined>(undefined),
			labels: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			namespaceLabels: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			uid: new FormControl<string | null | undefined>(undefined),
			updateTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** ScopeLifecycleState describes the state of a Scope resource. */
	export interface ScopeLifecycleState {

		/** Output only. The current state of the scope resource. */
		code?: FleetLifecycleStateCode | null;
	}

	/** ScopeLifecycleState describes the state of a Scope resource. */
	export interface ScopeLifecycleStateFormProperties {

		/** Output only. The current state of the scope resource. */
		code: FormControl<FleetLifecycleStateCode | null | undefined>,
	}
	export function CreateScopeLifecycleStateFormGroup() {
		return new FormGroup<ScopeLifecycleStateFormProperties>({
			code: new FormControl<FleetLifecycleStateCode | null | undefined>(undefined),
		});

	}


	/** Represents the metadata of the long-running operation. */
	export interface OperationMetadata {

		/** Output only. API version used to start the operation. */
		apiVersion?: string | null;

		/** Output only. Identifies whether the user has requested cancellation of the operation. Operations that have successfully been cancelled have Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`. */
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
	export interface OperationMetadataFormProperties {

		/** Output only. API version used to start the operation. */
		apiVersion: FormControl<string | null | undefined>,

		/** Output only. Identifies whether the user has requested cancellation of the operation. Operations that have successfully been cancelled have Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`. */
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
		 * Deletes a Scope RBACRoleBinding.
		 * Delete v1beta/{name}
		 * @param {string} name Required. The RBACRoleBinding resource name in the format `projects/locations/scopes/rbacrolebindings/*`.
		 * @param {boolean} force Optional. If set to true, any subresource from this Membership will also be deleted. Otherwise, the request will only work if the Membership has no subresource.
		 * @param {string} requestId Optional. A request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes after the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
		 * @return {Operation} Successful response
		 */
		Gkehub_projects_locations_scopes_rbacrolebindings_delete(name: string, force: boolean | null | undefined, requestId: string | null | undefined): Observable<Operation> {
			return this.http.delete<Operation>(this.baseUri + 'v1beta/' + (name == null ? '' : encodeURIComponent(name)) + '&force=' + force + '&requestId=' + (requestId == null ? '' : encodeURIComponent(requestId)), {});
		}

		/**
		 * Returns the details of a Scope RBACRoleBinding.
		 * Get v1beta/{name}
		 * @param {string} name Required. The RBACRoleBinding resource name in the format `projects/locations/scopes/rbacrolebindings/*`.
		 * @return {RBACRoleBinding} Successful response
		 */
		Gkehub_projects_locations_scopes_rbacrolebindings_get(name: string): Observable<RBACRoleBinding> {
			return this.http.get<RBACRoleBinding>(this.baseUri + 'v1beta/' + (name == null ? '' : encodeURIComponent(name)), {});
		}

		/**
		 * Updates a Scope RBACRoleBinding.
		 * Patch v1beta/{name}
		 * @param {string} name The resource name for the rbacrolebinding `projects/{project}/locations/{location}/scopes/{scope}/rbacrolebindings/{rbacrolebinding}` or `projects/{project}/locations/{location}/memberships/{membership}/rbacrolebindings/{rbacrolebinding}`
		 * @param {string} updateMask Required. The fields to be updated.
		 * @return {Operation} Successful response
		 */
		Gkehub_projects_locations_scopes_rbacrolebindings_patch(name: string, updateMask: string | null | undefined, requestBody: RBACRoleBinding): Observable<Operation> {
			return this.http.patch<Operation>(this.baseUri + 'v1beta/' + (name == null ? '' : encodeURIComponent(name)) + '&updateMask=' + (updateMask == null ? '' : encodeURIComponent(updateMask)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists information about the supported locations for this service.
		 * Get v1beta/{name}/locations
		 * @param {string} name The resource that owns the locations collection, if applicable.
		 * @param {string} filter A filter to narrow down results to a preferred subset. The filtering language accepts strings like `"displayName=tokyo"`, and is documented in more detail in [AIP-160](https://google.aip.dev/160).
		 * @param {number} pageSize The maximum number of results to return. If not set, the service selects a default.
		 * @param {string} pageToken A page token received from the `next_page_token` field in the response. Send that page token to receive the subsequent page.
		 * @return {ListLocationsResponse} Successful response
		 */
		Gkehub_projects_locations_list(name: string, filter: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListLocationsResponse> {
			return this.http.get<ListLocationsResponse>(this.baseUri + 'v1beta/' + (name == null ? '' : encodeURIComponent(name)) + '/locations&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
		 * Get v1beta/{name}/operations
		 * @param {string} name The name of the operation's parent resource.
		 * @param {string} filter The standard list filter.
		 * @param {number} pageSize The standard list page size.
		 * @param {string} pageToken The standard list page token.
		 * @return {ListOperationsResponse} Successful response
		 */
		Gkehub_projects_locations_operations_list(name: string, filter: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListOperationsResponse> {
			return this.http.get<ListOperationsResponse>(this.baseUri + 'v1beta/' + (name == null ? '' : encodeURIComponent(name)) + '/operations&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
		 * Post v1beta/{name}:cancel
		 * @param {string} name The name of the operation resource to be cancelled.
		 * @return {Empty} Successful response
		 */
		Gkehub_projects_locations_operations_cancel(name: string, requestBody: CancelOperationRequest): Observable<Empty> {
			return this.http.post<Empty>(this.baseUri + 'v1beta/' + (name == null ? '' : encodeURIComponent(name)) + ':cancel', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Generates the manifest for deployment of the GKE connect agent. **This method is used internally by Google-provided libraries.** Most clients should not need to call this method directly.
		 * Get v1beta/{name}:generateConnectManifest
		 * @param {string} name Required. The Membership resource name the Agent will associate with, in the format `projects/locations/memberships/*`.
		 * @param {string} imagePullSecretContent Optional. The image pull secret content for the registry, if not public.
		 * @param {boolean} isUpgrade Optional. If true, generate the resources for upgrade only. Some resources generated only for installation (e.g. secrets) will be excluded.
		 * @param {string} namespace Optional. Namespace for GKE Connect agent resources. Defaults to `gke-connect`. The Connect Agent is authorized automatically when run in the default namespace. Otherwise, explicit authorization must be granted with an additional IAM binding.
		 * @param {string} proxy Optional. URI of a proxy if connectivity from the agent to gkeconnect.googleapis.com requires the use of a proxy. Format must be in the form `http(s)://{proxy_address}`, depending on the HTTP/HTTPS protocol supported by the proxy. This will direct the connect agent's outbound traffic through a HTTP(S) proxy.
		 * @param {string} registry Optional. The registry to fetch the connect agent image from. Defaults to gcr.io/gkeconnect.
		 * @param {string} version Optional. The Connect agent version to use. Defaults to the most current version.
		 * @return {GenerateConnectManifestResponse} Successful response
		 */
		Gkehub_projects_locations_memberships_generateConnectManifest(name: string, imagePullSecretContent: string | null | undefined, isUpgrade: boolean | null | undefined, namespace: string | null | undefined, proxy: string | null | undefined, registry: string | null | undefined, version: string | null | undefined): Observable<GenerateConnectManifestResponse> {
			return this.http.get<GenerateConnectManifestResponse>(this.baseUri + 'v1beta/' + (name == null ? '' : encodeURIComponent(name)) + ':generateConnectManifest&imagePullSecretContent=' + (imagePullSecretContent == null ? '' : encodeURIComponent(imagePullSecretContent)) + '&isUpgrade=' + isUpgrade + '&namespace=' + (namespace == null ? '' : encodeURIComponent(namespace)) + '&proxy=' + (proxy == null ? '' : encodeURIComponent(proxy)) + '&registry=' + (registry == null ? '' : encodeURIComponent(registry)) + '&version=' + (version == null ? '' : encodeURIComponent(version)), {});
		}

		/**
		 * Lists MembershipBindings.
		 * Get v1beta/{parent}/bindings
		 * @param {string} parent Required. The parent Membership for which the MembershipBindings will be listed. Specified in the format `projects/locations/memberships/*`.
		 * @param {string} filter Optional. Lists MembershipBindings that match the filter expression, following the syntax outlined in https://google.aip.dev/160.
		 * @param {number} pageSize Optional. When requesting a 'page' of resources, `page_size` specifies number of resources to return. If unspecified or set to 0, all resources will be returned.
		 * @param {string} pageToken Optional. Token returned by previous call to `ListMembershipBindings` which specifies the position in the list from where to continue listing the resources.
		 * @return {ListMembershipBindingsResponse} Successful response
		 */
		Gkehub_projects_locations_memberships_bindings_list(parent: string, filter: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListMembershipBindingsResponse> {
			return this.http.get<ListMembershipBindingsResponse>(this.baseUri + 'v1beta/' + (parent == null ? '' : encodeURIComponent(parent)) + '/bindings&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Creates a MembershipBinding.
		 * Post v1beta/{parent}/bindings
		 * @param {string} parent Required. The parent (project and location) where the MembershipBinding will be created. Specified in the format `projects/locations/memberships/*`.
		 * @param {string} membershipBindingId Required. The ID to use for the MembershipBinding.
		 * @return {Operation} Successful response
		 */
		Gkehub_projects_locations_memberships_bindings_create(parent: string, membershipBindingId: string | null | undefined, requestBody: MembershipBinding): Observable<Operation> {
			return this.http.post<Operation>(this.baseUri + 'v1beta/' + (parent == null ? '' : encodeURIComponent(parent)) + '/bindings&membershipBindingId=' + (membershipBindingId == null ? '' : encodeURIComponent(membershipBindingId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists Features in a given project and location.
		 * Get v1beta/{parent}/features
		 * @param {string} parent Required. The parent (project and location) where the Features will be listed. Specified in the format `projects/locations/*`.
		 * @param {string} filter Lists Features that match the filter expression, following the syntax outlined in https://google.aip.dev/160. Examples: - Feature with the name "servicemesh" in project "foo-proj": name = "projects/foo-proj/locations/global/features/servicemesh" - Features that have a label called `foo`: labels.foo:* - Features that have a label called `foo` whose value is `bar`: labels.foo = bar
		 * @param {string} orderBy One or more fields to compare and use to sort the output. See https://google.aip.dev/132#ordering.
		 * @param {number} pageSize When requesting a 'page' of resources, `page_size` specifies number of resources to return. If unspecified or set to 0, all resources will be returned.
		 * @param {string} pageToken Token returned by previous call to `ListFeatures` which specifies the position in the list from where to continue listing the resources.
		 * @return {ListFeaturesResponse} Successful response
		 */
		Gkehub_projects_locations_features_list(parent: string, filter: string | null | undefined, orderBy: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListFeaturesResponse> {
			return this.http.get<ListFeaturesResponse>(this.baseUri + 'v1beta/' + (parent == null ? '' : encodeURIComponent(parent)) + '/features&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&orderBy=' + (orderBy == null ? '' : encodeURIComponent(orderBy)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Adds a new Feature.
		 * Post v1beta/{parent}/features
		 * @param {string} parent Required. The parent (project and location) where the Feature will be created. Specified in the format `projects/locations/*`.
		 * @param {string} featureId The ID of the feature to create.
		 * @param {string} requestId A request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes after the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
		 * @return {Operation} Successful response
		 */
		Gkehub_projects_locations_features_create(parent: string, featureId: string | null | undefined, requestId: string | null | undefined, requestBody: Feature): Observable<Operation> {
			return this.http.post<Operation>(this.baseUri + 'v1beta/' + (parent == null ? '' : encodeURIComponent(parent)) + '/features&featureId=' + (featureId == null ? '' : encodeURIComponent(featureId)) + '&requestId=' + (requestId == null ? '' : encodeURIComponent(requestId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns all fleets within an organization or a project that the caller has access to.
		 * Get v1beta/{parent}/fleets
		 * @param {string} parent Required. The organization or project to list for Fleets under, in the format `organizations/locations/*` or `projects/locations/*`.
		 * @param {number} pageSize Optional. The maximum number of fleets to return. The service may return fewer than this value. If unspecified, at most 200 fleets will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.
		 * @param {string} pageToken Optional. A page token, received from a previous `ListFleets` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListFleets` must match the call that provided the page token.
		 * @return {ListFleetsResponse} Successful response
		 */
		Gkehub_projects_locations_fleets_list(parent: string, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListFleetsResponse> {
			return this.http.get<ListFleetsResponse>(this.baseUri + 'v1beta/' + (parent == null ? '' : encodeURIComponent(parent)) + '/fleets&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Creates a fleet.
		 * Post v1beta/{parent}/fleets
		 * @param {string} parent Required. The parent (project and location) where the Fleet will be created. Specified in the format `projects/locations/*`.
		 * @return {Operation} Successful response
		 */
		Gkehub_projects_locations_fleets_create(parent: string, requestBody: Fleet): Observable<Operation> {
			return this.http.post<Operation>(this.baseUri + 'v1beta/' + (parent == null ? '' : encodeURIComponent(parent)) + '/fleets', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists Memberships in a given project and location.
		 * Get v1beta/{parent}/memberships
		 * @param {string} parent Required. The parent (project and location) where the Memberships will be listed. Specified in the format `projects/locations/*`. `projects/locations/-` list memberships in all the regions.
		 * @param {string} filter Optional. Lists Memberships that match the filter expression, following the syntax outlined in https://google.aip.dev/160. Examples: - Name is `bar` in project `foo-proj` and location `global`: name = "projects/foo-proj/locations/global/membership/bar" - Memberships that have a label called `foo`: labels.foo:* - Memberships that have a label called `foo` whose value is `bar`: labels.foo = bar - Memberships in the CREATING state: state = CREATING
		 * @param {string} orderBy Optional. One or more fields to compare and use to sort the output. See https://google.aip.dev/132#ordering.
		 * @param {number} pageSize Optional. When requesting a 'page' of resources, `page_size` specifies number of resources to return. If unspecified or set to 0, all resources will be returned.
		 * @param {string} pageToken Optional. Token returned by previous call to `ListMemberships` which specifies the position in the list from where to continue listing the resources.
		 * @return {ListMembershipsResponse} Successful response
		 */
		Gkehub_projects_locations_memberships_list(parent: string, filter: string | null | undefined, orderBy: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListMembershipsResponse> {
			return this.http.get<ListMembershipsResponse>(this.baseUri + 'v1beta/' + (parent == null ? '' : encodeURIComponent(parent)) + '/memberships&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&orderBy=' + (orderBy == null ? '' : encodeURIComponent(orderBy)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Creates a new Membership. **This is currently only supported for GKE clusters on Google Cloud**. To register other clusters, follow the instructions at https://cloud.google.com/anthos/multicluster-management/connect/registering-a-cluster.
		 * Post v1beta/{parent}/memberships
		 * @param {string} parent Required. The parent (project and location) where the Memberships will be created. Specified in the format `projects/locations/*`.
		 * @param {string} membershipId Required. Client chosen ID for the membership. `membership_id` must be a valid RFC 1123 compliant DNS label: 1. At most 63 characters in length 2. It must consist of lower case alphanumeric characters or `-` 3. It must start and end with an alphanumeric character Which can be expressed as the regex: `[a-z0-9]([-a-z0-9]*[a-z0-9])?`, with a maximum length of 63 characters.
		 * @param {string} requestId Optional. A request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes after the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
		 * @return {Operation} Successful response
		 */
		Gkehub_projects_locations_memberships_create(parent: string, membershipId: string | null | undefined, requestId: string | null | undefined, requestBody: Membership): Observable<Operation> {
			return this.http.post<Operation>(this.baseUri + 'v1beta/' + (parent == null ? '' : encodeURIComponent(parent)) + '/memberships&membershipId=' + (membershipId == null ? '' : encodeURIComponent(membershipId)) + '&requestId=' + (requestId == null ? '' : encodeURIComponent(requestId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists fleet namespaces.
		 * Get v1beta/{parent}/namespaces
		 * @param {string} parent Required. The parent (project and location) where the Features will be listed. Specified in the format `projects/locations/scopes/*`.
		 * @param {number} pageSize Optional. When requesting a 'page' of resources, `page_size` specifies number of resources to return. If unspecified or set to 0, all resources will be returned.
		 * @param {string} pageToken Optional. Token returned by previous call to `ListFeatures` which specifies the position in the list from where to continue listing the resources.
		 * @return {ListScopeNamespacesResponse} Successful response
		 */
		Gkehub_projects_locations_scopes_namespaces_list(parent: string, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListScopeNamespacesResponse> {
			return this.http.get<ListScopeNamespacesResponse>(this.baseUri + 'v1beta/' + (parent == null ? '' : encodeURIComponent(parent)) + '/namespaces&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Creates a fleet namespace.
		 * Post v1beta/{parent}/namespaces
		 * @param {string} parent Required. The parent (project and location) where the Namespace will be created. Specified in the format `projects/locations/scopes/*`.
		 * @param {string} scopeNamespaceId Required. Client chosen ID for the Namespace. `namespace_id` must be a valid RFC 1123 compliant DNS label: 1. At most 63 characters in length 2. It must consist of lower case alphanumeric characters or `-` 3. It must start and end with an alphanumeric character Which can be expressed as the regex: `[a-z0-9]([-a-z0-9]*[a-z0-9])?`, with a maximum length of 63 characters.
		 * @return {Operation} Successful response
		 */
		Gkehub_projects_locations_scopes_namespaces_create(parent: string, scopeNamespaceId: string | null | undefined, requestBody: Namespace): Observable<Operation> {
			return this.http.post<Operation>(this.baseUri + 'v1beta/' + (parent == null ? '' : encodeURIComponent(parent)) + '/namespaces&scopeNamespaceId=' + (scopeNamespaceId == null ? '' : encodeURIComponent(scopeNamespaceId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists all Scope RBACRoleBindings.
		 * Get v1beta/{parent}/rbacrolebindings
		 * @param {string} parent Required. The parent (project and location) where the Features will be listed. Specified in the format `projects/locations/scopes/*`.
		 * @param {number} pageSize Optional. When requesting a 'page' of resources, `page_size` specifies number of resources to return. If unspecified or set to 0, all resources will be returned.
		 * @param {string} pageToken Optional. Token returned by previous call to `ListScopeRBACRoleBindings` which specifies the position in the list from where to continue listing the resources.
		 * @return {ListScopeRBACRoleBindingsResponse} Successful response
		 */
		Gkehub_projects_locations_scopes_rbacrolebindings_list(parent: string, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListScopeRBACRoleBindingsResponse> {
			return this.http.get<ListScopeRBACRoleBindingsResponse>(this.baseUri + 'v1beta/' + (parent == null ? '' : encodeURIComponent(parent)) + '/rbacrolebindings&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Creates a Scope RBACRoleBinding.
		 * Post v1beta/{parent}/rbacrolebindings
		 * @param {string} parent Required. The parent (project and location) where the RBACRoleBinding will be created. Specified in the format `projects/locations/scopes/*`.
		 * @param {string} rbacrolebindingId Required. Client chosen ID for the RBACRoleBinding. `rbacrolebinding_id` must be a valid RFC 1123 compliant DNS label: 1. At most 63 characters in length 2. It must consist of lower case alphanumeric characters or `-` 3. It must start and end with an alphanumeric character Which can be expressed as the regex: `[a-z0-9]([-a-z0-9]*[a-z0-9])?`, with a maximum length of 63 characters.
		 * @return {Operation} Successful response
		 */
		Gkehub_projects_locations_scopes_rbacrolebindings_create(parent: string, rbacrolebindingId: string | null | undefined, requestBody: RBACRoleBinding): Observable<Operation> {
			return this.http.post<Operation>(this.baseUri + 'v1beta/' + (parent == null ? '' : encodeURIComponent(parent)) + '/rbacrolebindings&rbacrolebindingId=' + (rbacrolebindingId == null ? '' : encodeURIComponent(rbacrolebindingId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Generates a YAML of the RBAC policies for the specified RoleBinding and its associated impersonation resources.
		 * Post v1beta/{parent}/rbacrolebindings:generateMembershipRBACRoleBindingYAML
		 * @param {string} parent Required. The parent (project and location) where the RBACRoleBinding will be created. Specified in the format `projects/locations/memberships/*`.
		 * @param {string} rbacrolebindingId Required. Client chosen ID for the RBACRoleBinding. `rbacrolebinding_id` must be a valid RFC 1123 compliant DNS label: 1. At most 63 characters in length 2. It must consist of lower case alphanumeric characters or `-` 3. It must start and end with an alphanumeric character Which can be expressed as the regex: `[a-z0-9]([-a-z0-9]*[a-z0-9])?`, with a maximum length of 63 characters.
		 * @return {GenerateMembershipRBACRoleBindingYAMLResponse} Successful response
		 */
		Gkehub_projects_locations_memberships_rbacrolebindings_generateMembershipRBACRoleBindingYAML(parent: string, rbacrolebindingId: string | null | undefined, requestBody: RBACRoleBinding): Observable<GenerateMembershipRBACRoleBindingYAMLResponse> {
			return this.http.post<GenerateMembershipRBACRoleBindingYAMLResponse>(this.baseUri + 'v1beta/' + (parent == null ? '' : encodeURIComponent(parent)) + '/rbacrolebindings:generateMembershipRBACRoleBindingYAML&rbacrolebindingId=' + (rbacrolebindingId == null ? '' : encodeURIComponent(rbacrolebindingId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists Scopes.
		 * Get v1beta/{parent}/scopes
		 * @param {string} parent Required. The parent (project and location) where the Scope will be listed. Specified in the format `projects/locations/*`.
		 * @param {number} pageSize Optional. When requesting a 'page' of resources, `page_size` specifies number of resources to return. If unspecified or set to 0, all resources will be returned.
		 * @param {string} pageToken Optional. Token returned by previous call to `ListScopes` which specifies the position in the list from where to continue listing the resources.
		 * @return {ListScopesResponse} Successful response
		 */
		Gkehub_projects_locations_scopes_list(parent: string, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListScopesResponse> {
			return this.http.get<ListScopesResponse>(this.baseUri + 'v1beta/' + (parent == null ? '' : encodeURIComponent(parent)) + '/scopes&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Creates a Scope.
		 * Post v1beta/{parent}/scopes
		 * @param {string} parent Required. The parent (project and location) where the Scope will be created. Specified in the format `projects/locations/*`.
		 * @param {string} scopeId Required. Client chosen ID for the Scope. `scope_id` must be a ????
		 * @return {Operation} Successful response
		 */
		Gkehub_projects_locations_scopes_create(parent: string, scopeId: string | null | undefined, requestBody: Scope): Observable<Operation> {
			return this.http.post<Operation>(this.baseUri + 'v1beta/' + (parent == null ? '' : encodeURIComponent(parent)) + '/scopes&scopeId=' + (scopeId == null ? '' : encodeURIComponent(scopeId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
		 * Get v1beta/{resource}:getIamPolicy
		 * @param {string} resource REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
		 * @param {number} options_requestedPolicyVersion Optional. The maximum policy version that will be used to format the policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset. The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies).
		 * @return {Policy} Successful response
		 */
		Gkehub_projects_locations_scopes_getIamPolicy(resource: string, options_requestedPolicyVersion: number | null | undefined): Observable<Policy> {
			return this.http.get<Policy>(this.baseUri + 'v1beta/' + (resource == null ? '' : encodeURIComponent(resource)) + ':getIamPolicy&options_requestedPolicyVersion=' + options_requestedPolicyVersion, {});
		}

		/**
		 * Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
		 * Post v1beta/{resource}:setIamPolicy
		 * @param {string} resource REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
		 * @return {Policy} Successful response
		 */
		Gkehub_projects_locations_scopes_setIamPolicy(resource: string, requestBody: SetIamPolicyRequest): Observable<Policy> {
			return this.http.post<Policy>(this.baseUri + 'v1beta/' + (resource == null ? '' : encodeURIComponent(resource)) + ':setIamPolicy', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
		 * Post v1beta/{resource}:testIamPermissions
		 * @param {string} resource REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
		 * @return {TestIamPermissionsResponse} Successful response
		 */
		Gkehub_projects_locations_scopes_testIamPermissions(resource: string, requestBody: TestIamPermissionsRequest): Observable<TestIamPermissionsResponse> {
			return this.http.post<TestIamPermissionsResponse>(this.baseUri + 'v1beta/' + (resource == null ? '' : encodeURIComponent(resource)) + ':testIamPermissions', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

}

