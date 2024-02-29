import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** Specifies roles and/or permissions to analyze, to determine both the identities possessing them and the resources they control. If multiple values are specified, results will include identities and resources matching any of them. The total number of roles and permissions should be equal or less than 10. */
	export interface AccessSelector {

		/** Optional. The permissions to appear in result. */
		permissions?: Array<string>;

		/** Optional. The roles to appear in result. */
		roles?: Array<string>;
	}

	/** Specifies roles and/or permissions to analyze, to determine both the identities possessing them and the resources they control. If multiple values are specified, results will include identities and resources matching any of them. The total number of roles and permissions should be equal or less than 10. */
	export interface AccessSelectorFormProperties {
	}
	export function CreateAccessSelectorFormGroup() {
		return new FormGroup<AccessSelectorFormProperties>({
		});

	}


	/** Represents the metadata of the longrunning operation for the AnalyzeIamPolicyLongrunning rpc. */
	export interface AnalyzeIamPolicyLongrunningMetadata {

		/** Output only. The time the operation was created. */
		createTime?: string | null;
	}

	/** Represents the metadata of the longrunning operation for the AnalyzeIamPolicyLongrunning rpc. */
	export interface AnalyzeIamPolicyLongrunningMetadataFormProperties {

		/** Output only. The time the operation was created. */
		createTime: FormControl<string | null | undefined>,
	}
	export function CreateAnalyzeIamPolicyLongrunningMetadataFormGroup() {
		return new FormGroup<AnalyzeIamPolicyLongrunningMetadataFormProperties>({
			createTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A response message for AssetService.AnalyzeIamPolicyLongrunning. */
	export interface AnalyzeIamPolicyLongrunningResponse {
	}

	/** A response message for AssetService.AnalyzeIamPolicyLongrunning. */
	export interface AnalyzeIamPolicyLongrunningResponseFormProperties {
	}
	export function CreateAnalyzeIamPolicyLongrunningResponseFormGroup() {
		return new FormGroup<AnalyzeIamPolicyLongrunningResponseFormProperties>({
		});

	}


	/** A response message for AssetService.AnalyzeIamPolicy. */
	export interface AnalyzeIamPolicyResponse {

		/** Represents whether all entries in the main_analysis and service_account_impersonation_analysis have been fully explored to answer the query in the request. */
		fullyExplored?: boolean | null;

		/** An analysis message to group the query and results. */
		mainAnalysis?: IamPolicyAnalysis;

		/** A list of non-critical errors happened during the request handling to explain why `fully_explored` is false, or empty if no error happened. */
		nonCriticalErrors?: Array<GoogleCloudAssetV1p4beta1AnalysisState>;

		/** The service account impersonation analysis if AnalyzeIamPolicyRequest.analyze_service_account_impersonation is enabled. */
		serviceAccountImpersonationAnalysis?: Array<IamPolicyAnalysis>;
	}

	/** A response message for AssetService.AnalyzeIamPolicy. */
	export interface AnalyzeIamPolicyResponseFormProperties {

		/** Represents whether all entries in the main_analysis and service_account_impersonation_analysis have been fully explored to answer the query in the request. */
		fullyExplored: FormControl<boolean | null | undefined>,
	}
	export function CreateAnalyzeIamPolicyResponseFormGroup() {
		return new FormGroup<AnalyzeIamPolicyResponseFormProperties>({
			fullyExplored: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** An analysis message to group the query and results. */
	export interface IamPolicyAnalysis {

		/** IAM policy analysis query message. */
		analysisQuery?: IamPolicyAnalysisQuery;

		/** A list of IamPolicyAnalysisResult that matches the analysis query, or empty if no result is found. */
		analysisResults?: Array<IamPolicyAnalysisResult>;

		/** Represents whether all entries in the analysis_results have been fully explored to answer the query. */
		fullyExplored?: boolean | null;
	}

	/** An analysis message to group the query and results. */
	export interface IamPolicyAnalysisFormProperties {

		/** Represents whether all entries in the analysis_results have been fully explored to answer the query. */
		fullyExplored: FormControl<boolean | null | undefined>,
	}
	export function CreateIamPolicyAnalysisFormGroup() {
		return new FormGroup<IamPolicyAnalysisFormProperties>({
			fullyExplored: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** IAM policy analysis query message. */
	export interface IamPolicyAnalysisQuery {

		/** Specifies roles and/or permissions to analyze, to determine both the identities possessing them and the resources they control. If multiple values are specified, results will include identities and resources matching any of them. The total number of roles and permissions should be equal or less than 10. */
		accessSelector?: AccessSelector;

		/** Specifies an identity for which to determine resource access, based on roles assigned either directly to them or to the groups they belong to, directly or indirectly. */
		identitySelector?: IdentitySelector;

		/** Required. The relative name of the root asset. Only resources and IAM policies within the parent will be analyzed. This can only be an organization number (such as "organizations/123"), a folder number (such as "folders/123"), a project ID (such as "projects/my-project-id"), or a project number (such as "projects/12345"). To know how to get organization id, visit [here ](https://cloud.google.com/resource-manager/docs/creating-managing-organization#retrieving_your_organization_id). To know how to get folder or project id, visit [here ](https://cloud.google.com/resource-manager/docs/creating-managing-folders#viewing_or_listing_folders_and_projects). */
		parent?: string | null;

		/** Specifies the resource to analyze for access policies, which may be set directly on the resource, or on ancestors such as organizations, folders or projects. */
		resourceSelector?: ResourceSelector;
	}

	/** IAM policy analysis query message. */
	export interface IamPolicyAnalysisQueryFormProperties {

		/** Required. The relative name of the root asset. Only resources and IAM policies within the parent will be analyzed. This can only be an organization number (such as "organizations/123"), a folder number (such as "folders/123"), a project ID (such as "projects/my-project-id"), or a project number (such as "projects/12345"). To know how to get organization id, visit [here ](https://cloud.google.com/resource-manager/docs/creating-managing-organization#retrieving_your_organization_id). To know how to get folder or project id, visit [here ](https://cloud.google.com/resource-manager/docs/creating-managing-folders#viewing_or_listing_folders_and_projects). */
		parent: FormControl<string | null | undefined>,
	}
	export function CreateIamPolicyAnalysisQueryFormGroup() {
		return new FormGroup<IamPolicyAnalysisQueryFormProperties>({
			parent: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Specifies an identity for which to determine resource access, based on roles assigned either directly to them or to the groups they belong to, directly or indirectly. */
	export interface IdentitySelector {

		/** Required. The identity appear in the form of members in [IAM policy binding](https://cloud.google.com/iam/reference/rest/v1/Binding). The examples of supported forms are: "user:mike@example.com", "group:admins@example.com", "domain:google.com", "serviceAccount:my-project-id@appspot.gserviceaccount.com". Notice that wildcard characters (such as * and ?) are not supported. You must give a specific identity. */
		identity?: string | null;
	}

	/** Specifies an identity for which to determine resource access, based on roles assigned either directly to them or to the groups they belong to, directly or indirectly. */
	export interface IdentitySelectorFormProperties {

		/** Required. The identity appear in the form of members in [IAM policy binding](https://cloud.google.com/iam/reference/rest/v1/Binding). The examples of supported forms are: "user:mike@example.com", "group:admins@example.com", "domain:google.com", "serviceAccount:my-project-id@appspot.gserviceaccount.com". Notice that wildcard characters (such as * and ?) are not supported. You must give a specific identity. */
		identity: FormControl<string | null | undefined>,
	}
	export function CreateIdentitySelectorFormGroup() {
		return new FormGroup<IdentitySelectorFormProperties>({
			identity: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Specifies the resource to analyze for access policies, which may be set directly on the resource, or on ancestors such as organizations, folders or projects. */
	export interface ResourceSelector {

		/** Required. The [full resource name](https://cloud.google.com/asset-inventory/docs/resource-name-format) of a resource of [supported resource types](https://cloud.google.com/asset-inventory/docs/supported-asset-types#analyzable_asset_types). */
		fullResourceName?: string | null;
	}

	/** Specifies the resource to analyze for access policies, which may be set directly on the resource, or on ancestors such as organizations, folders or projects. */
	export interface ResourceSelectorFormProperties {

		/** Required. The [full resource name](https://cloud.google.com/asset-inventory/docs/resource-name-format) of a resource of [supported resource types](https://cloud.google.com/asset-inventory/docs/supported-asset-types#analyzable_asset_types). */
		fullResourceName: FormControl<string | null | undefined>,
	}
	export function CreateResourceSelectorFormGroup() {
		return new FormGroup<ResourceSelectorFormProperties>({
			fullResourceName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** IAM Policy analysis result, consisting of one IAM policy binding and derived access control lists. */
	export interface IamPolicyAnalysisResult {

		/** The access control lists derived from the iam_binding that match or potentially match resource and access selectors specified in the request. */
		accessControlLists?: Array<GoogleCloudAssetV1p4beta1AccessControlList>;

		/** The [full resource name](https://cloud.google.com/asset-inventory/docs/resource-name-format) of the resource to which the iam_binding policy attaches. */
		attachedResourceFullName?: string | null;

		/** Represents whether all analyses on the iam_binding have successfully finished. */
		fullyExplored?: boolean | null;

		/** Associates `members`, or principals, with a `role`. */
		iamBinding?: Binding;
		identityList?: GoogleCloudAssetV1p4beta1IdentityList;
	}

	/** IAM Policy analysis result, consisting of one IAM policy binding and derived access control lists. */
	export interface IamPolicyAnalysisResultFormProperties {

		/** The [full resource name](https://cloud.google.com/asset-inventory/docs/resource-name-format) of the resource to which the iam_binding policy attaches. */
		attachedResourceFullName: FormControl<string | null | undefined>,

		/** Represents whether all analyses on the iam_binding have successfully finished. */
		fullyExplored: FormControl<boolean | null | undefined>,
	}
	export function CreateIamPolicyAnalysisResultFormGroup() {
		return new FormGroup<IamPolicyAnalysisResultFormProperties>({
			attachedResourceFullName: new FormControl<string | null | undefined>(undefined),
			fullyExplored: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** An access control list, derived from the above IAM policy binding, which contains a set of resources and accesses. May include one item from each set to compose an access control entry. NOTICE that there could be multiple access control lists for one IAM policy binding. The access control lists are created based on resource and access combinations. For example, assume we have the following cases in one IAM policy binding: - Permission P1 and P2 apply to resource R1 and R2; - Permission P3 applies to resource R2 and R3; This will result in the following access control lists: - AccessControlList 1: [R1, R2], [P1, P2] - AccessControlList 2: [R2, R3], [P3] */
	export interface GoogleCloudAssetV1p4beta1AccessControlList {

		/** The accesses that match one of the following conditions: - The access_selector, if it is specified in request; - Otherwise, access specifiers reachable from the policy binding's role. */
		accesses?: Array<GoogleCloudAssetV1p4beta1Access>;

		/** Resource edges of the graph starting from the policy attached resource to any descendant resources. The Edge.source_node contains the full resource name of a parent resource and Edge.target_node contains the full resource name of a child resource. This field is present only if the output_resource_edges option is enabled in request. */
		resourceEdges?: Array<GoogleCloudAssetV1p4beta1Edge>;

		/** The resources that match one of the following conditions: - The resource_selector, if it is specified in request; - Otherwise, resources reachable from the policy attached resource. */
		resources?: Array<GoogleCloudAssetV1p4beta1Resource>;
	}

	/** An access control list, derived from the above IAM policy binding, which contains a set of resources and accesses. May include one item from each set to compose an access control entry. NOTICE that there could be multiple access control lists for one IAM policy binding. The access control lists are created based on resource and access combinations. For example, assume we have the following cases in one IAM policy binding: - Permission P1 and P2 apply to resource R1 and R2; - Permission P3 applies to resource R2 and R3; This will result in the following access control lists: - AccessControlList 1: [R1, R2], [P1, P2] - AccessControlList 2: [R2, R3], [P3] */
	export interface GoogleCloudAssetV1p4beta1AccessControlListFormProperties {
	}
	export function CreateGoogleCloudAssetV1p4beta1AccessControlListFormGroup() {
		return new FormGroup<GoogleCloudAssetV1p4beta1AccessControlListFormProperties>({
		});

	}


	/** An IAM role or permission under analysis. */
	export interface GoogleCloudAssetV1p4beta1Access {

		/** Represents the detailed state of an entity under analysis, such as a resource, an identity or an access. */
		analysisState?: GoogleCloudAssetV1p4beta1AnalysisState;

		/** The permission. */
		permission?: string | null;

		/** The role. */
		role?: string | null;
	}

	/** An IAM role or permission under analysis. */
	export interface GoogleCloudAssetV1p4beta1AccessFormProperties {

		/** The permission. */
		permission: FormControl<string | null | undefined>,

		/** The role. */
		role: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudAssetV1p4beta1AccessFormGroup() {
		return new FormGroup<GoogleCloudAssetV1p4beta1AccessFormProperties>({
			permission: new FormControl<string | null | undefined>(undefined),
			role: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents the detailed state of an entity under analysis, such as a resource, an identity or an access. */
	export interface GoogleCloudAssetV1p4beta1AnalysisState {

		/** The human-readable description of the cause of failure. */
		cause?: string | null;

		/** The Google standard error code that best describes the state. For example: - OK means the analysis on this entity has been successfully finished; - PERMISSION_DENIED means an access denied error is encountered; - DEADLINE_EXCEEDED means the analysis on this entity hasn't been started in time; */
		code?: GoogleCloudAssetV1p4beta1AnalysisStateCode | null;
	}

	/** Represents the detailed state of an entity under analysis, such as a resource, an identity or an access. */
	export interface GoogleCloudAssetV1p4beta1AnalysisStateFormProperties {

		/** The human-readable description of the cause of failure. */
		cause: FormControl<string | null | undefined>,

		/** The Google standard error code that best describes the state. For example: - OK means the analysis on this entity has been successfully finished; - PERMISSION_DENIED means an access denied error is encountered; - DEADLINE_EXCEEDED means the analysis on this entity hasn't been started in time; */
		code: FormControl<GoogleCloudAssetV1p4beta1AnalysisStateCode | null | undefined>,
	}
	export function CreateGoogleCloudAssetV1p4beta1AnalysisStateFormGroup() {
		return new FormGroup<GoogleCloudAssetV1p4beta1AnalysisStateFormProperties>({
			cause: new FormControl<string | null | undefined>(undefined),
			code: new FormControl<GoogleCloudAssetV1p4beta1AnalysisStateCode | null | undefined>(undefined),
		});

	}

	export enum GoogleCloudAssetV1p4beta1AnalysisStateCode { OK = 'OK', CANCELLED = 'CANCELLED', UNKNOWN = 'UNKNOWN', INVALID_ARGUMENT = 'INVALID_ARGUMENT', DEADLINE_EXCEEDED = 'DEADLINE_EXCEEDED', NOT_FOUND = 'NOT_FOUND', ALREADY_EXISTS = 'ALREADY_EXISTS', PERMISSION_DENIED = 'PERMISSION_DENIED', UNAUTHENTICATED = 'UNAUTHENTICATED', RESOURCE_EXHAUSTED = 'RESOURCE_EXHAUSTED', FAILED_PRECONDITION = 'FAILED_PRECONDITION', ABORTED = 'ABORTED', OUT_OF_RANGE = 'OUT_OF_RANGE', UNIMPLEMENTED = 'UNIMPLEMENTED', INTERNAL = 'INTERNAL', UNAVAILABLE = 'UNAVAILABLE', DATA_LOSS = 'DATA_LOSS' }


	/** A directional edge. */
	export interface GoogleCloudAssetV1p4beta1Edge {

		/** The source node of the edge. */
		sourceNode?: string | null;

		/** The target node of the edge. */
		targetNode?: string | null;
	}

	/** A directional edge. */
	export interface GoogleCloudAssetV1p4beta1EdgeFormProperties {

		/** The source node of the edge. */
		sourceNode: FormControl<string | null | undefined>,

		/** The target node of the edge. */
		targetNode: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudAssetV1p4beta1EdgeFormGroup() {
		return new FormGroup<GoogleCloudAssetV1p4beta1EdgeFormProperties>({
			sourceNode: new FormControl<string | null | undefined>(undefined),
			targetNode: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A Google Cloud resource under analysis. */
	export interface GoogleCloudAssetV1p4beta1Resource {

		/** Represents the detailed state of an entity under analysis, such as a resource, an identity or an access. */
		analysisState?: GoogleCloudAssetV1p4beta1AnalysisState;

		/** The [full resource name](https://cloud.google.com/asset-inventory/docs/resource-name-format) */
		fullResourceName?: string | null;
	}

	/** A Google Cloud resource under analysis. */
	export interface GoogleCloudAssetV1p4beta1ResourceFormProperties {

		/** The [full resource name](https://cloud.google.com/asset-inventory/docs/resource-name-format) */
		fullResourceName: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudAssetV1p4beta1ResourceFormGroup() {
		return new FormGroup<GoogleCloudAssetV1p4beta1ResourceFormProperties>({
			fullResourceName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Associates `members`, or principals, with a `role`. */
	export interface Binding {

		/** Represents a textual expression in the Common Expression Language (CEL) syntax. CEL is a C-like expression language. The syntax and semantics of CEL are documented at https://github.com/google/cel-spec. Example (Comparison): title: "Summary size limit" description: "Determines if a summary is less than 100 chars" expression: "document.summary.size() < 100" Example (Equality): title: "Requestor is owner" description: "Determines if requestor is the document owner" expression: "document.owner == request.auth.claims.email" Example (Logic): title: "Public documents" description: "Determine whether the document should be publicly visible" expression: "document.type != 'private' && document.type != 'internal'" Example (Data Manipulation): title: "Notification string" description: "Create a notification string with a timestamp." expression: "'New message received at ' + string(document.create_time)" The exact variables and functions that may be referenced within an expression are determined by the service that evaluates it. See the service documentation for additional information. */
		condition?: Expr;

		/** Specifies the principals requesting access for a Google Cloud resource. `members` can have the following values: * `allUsers`: A special identifier that represents anyone who is on the internet; with or without a Google account. * `allAuthenticatedUsers`: A special identifier that represents anyone who is authenticated with a Google account or a service account. * `user:{emailid}`: An email address that represents a specific Google account. For example, `alice@example.com` . * `serviceAccount:{emailid}`: An email address that represents a service account. For example, `my-other-app@appspot.gserviceaccount.com`. * `group:{emailid}`: An email address that represents a Google group. For example, `admins@example.com`. * `deleted:user:{emailid}?uid={uniqueid}`: An email address (plus unique identifier) representing a user that has been recently deleted. For example, `alice@example.com?uid=123456789012345678901`. If the user is recovered, this value reverts to `user:{emailid}` and the recovered user retains the role in the binding. * `deleted:serviceAccount:{emailid}?uid={uniqueid}`: An email address (plus unique identifier) representing a service account that has been recently deleted. For example, `my-other-app@appspot.gserviceaccount.com?uid=123456789012345678901`. If the service account is undeleted, this value reverts to `serviceAccount:{emailid}` and the undeleted service account retains the role in the binding. * `deleted:group:{emailid}?uid={uniqueid}`: An email address (plus unique identifier) representing a Google group that has been recently deleted. For example, `admins@example.com?uid=123456789012345678901`. If the group is recovered, this value reverts to `group:{emailid}` and the recovered group retains the role in the binding. * `domain:{domain}`: The G Suite domain (primary) that represents all the users of that domain. For example, `google.com` or `example.com`. */
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

	export interface GoogleCloudAssetV1p4beta1IdentityList {

		/** Group identity edges of the graph starting from the binding's group members to any node of the identities. The Edge.source_node contains a group, such as "group:parent@google.com". The Edge.target_node contains a member of the group, such as "group:child@google.com" or "user:foo@google.com". This field is present only if the output_group_edges option is enabled in request. */
		groupEdges?: Array<GoogleCloudAssetV1p4beta1Edge>;

		/** Only the identities that match one of the following conditions will be presented: - The identity_selector, if it is specified in request; - Otherwise, identities reachable from the policy binding's members. */
		identities?: Array<GoogleCloudAssetV1p4beta1Identity>;
	}
	export interface GoogleCloudAssetV1p4beta1IdentityListFormProperties {
	}
	export function CreateGoogleCloudAssetV1p4beta1IdentityListFormGroup() {
		return new FormGroup<GoogleCloudAssetV1p4beta1IdentityListFormProperties>({
		});

	}


	/** An identity under analysis. */
	export interface GoogleCloudAssetV1p4beta1Identity {

		/** Represents the detailed state of an entity under analysis, such as a resource, an identity or an access. */
		analysisState?: GoogleCloudAssetV1p4beta1AnalysisState;

		/** The identity name in any form of members appear in [IAM policy binding](https://cloud.google.com/iam/reference/rest/v1/Binding), such as: - user:foo@google.com - group:group1@google.com - serviceAccount:s1@prj1.iam.gserviceaccount.com - projectOwner:some_project_id - domain:google.com - allUsers - etc. */
		name?: string | null;
	}

	/** An identity under analysis. */
	export interface GoogleCloudAssetV1p4beta1IdentityFormProperties {

		/** The identity name in any form of members appear in [IAM policy binding](https://cloud.google.com/iam/reference/rest/v1/Binding), such as: - user:foo@google.com - group:group1@google.com - serviceAccount:s1@prj1.iam.gserviceaccount.com - projectOwner:some_project_id - domain:google.com - allUsers - etc. */
		name: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudAssetV1p4beta1IdentityFormGroup() {
		return new FormGroup<GoogleCloudAssetV1p4beta1IdentityFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
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


	/** A request message for AssetService.ExportIamPolicyAnalysis. */
	export interface ExportIamPolicyAnalysisRequest {

		/** IAM policy analysis query message. */
		analysisQuery?: IamPolicyAnalysisQuery;

		/** Contains request options. */
		options?: Options;

		/** Output configuration for export IAM policy analysis destination. */
		outputConfig?: IamPolicyAnalysisOutputConfig;
	}

	/** A request message for AssetService.ExportIamPolicyAnalysis. */
	export interface ExportIamPolicyAnalysisRequestFormProperties {
	}
	export function CreateExportIamPolicyAnalysisRequestFormGroup() {
		return new FormGroup<ExportIamPolicyAnalysisRequestFormProperties>({
		});

	}


	/** Contains request options. */
	export interface Options {

		/** Optional. If true, the response will include access analysis from identities to resources via service account impersonation. This is a very expensive operation, because many derived queries will be executed. For example, if the request analyzes for which resources user A has permission P, and there's an IAM policy states user A has iam.serviceAccounts.getAccessToken permission to a service account SA, and there's another IAM policy states service account SA has permission P to a GCP folder F, then user A potentially has access to the GCP folder F. And those advanced analysis results will be included in AnalyzeIamPolicyResponse.service_account_impersonation_analysis. Another example, if the request analyzes for who has permission P to a GCP folder F, and there's an IAM policy states user A has iam.serviceAccounts.actAs permission to a service account SA, and there's another IAM policy states service account SA has permission P to the GCP folder F, then user A potentially has access to the GCP folder F. And those advanced analysis results will be included in AnalyzeIamPolicyResponse.service_account_impersonation_analysis. Default is false. */
		analyzeServiceAccountImpersonation?: boolean | null;

		/** Optional. If true, the identities section of the result will expand any Google groups appearing in an IAM policy binding. If identity_selector is specified, the identity in the result will be determined by the selector, and this flag will have no effect. Default is false. */
		expandGroups?: boolean | null;

		/** Optional. If true, the resource section of the result will expand any resource attached to an IAM policy to include resources lower in the resource hierarchy. For example, if the request analyzes for which resources user A has permission P, and the results include an IAM policy with P on a GCP folder, the results will also include resources in that folder with permission P. If resource_selector is specified, the resource section of the result will be determined by the selector, and this flag will have no effect. Default is false. */
		expandResources?: boolean | null;

		/** Optional. If true, the access section of result will expand any roles appearing in IAM policy bindings to include their permissions. If access_selector is specified, the access section of the result will be determined by the selector, and this flag will have no effect. Default is false. */
		expandRoles?: boolean | null;

		/** Optional. If true, the result will output group identity edges, starting from the binding's group members, to any expanded identities. Default is false. */
		outputGroupEdges?: boolean | null;

		/** Optional. If true, the result will output resource edges, starting from the policy attached resource, to any expanded resources. Default is false. */
		outputResourceEdges?: boolean | null;
	}

	/** Contains request options. */
	export interface OptionsFormProperties {

		/** Optional. If true, the response will include access analysis from identities to resources via service account impersonation. This is a very expensive operation, because many derived queries will be executed. For example, if the request analyzes for which resources user A has permission P, and there's an IAM policy states user A has iam.serviceAccounts.getAccessToken permission to a service account SA, and there's another IAM policy states service account SA has permission P to a GCP folder F, then user A potentially has access to the GCP folder F. And those advanced analysis results will be included in AnalyzeIamPolicyResponse.service_account_impersonation_analysis. Another example, if the request analyzes for who has permission P to a GCP folder F, and there's an IAM policy states user A has iam.serviceAccounts.actAs permission to a service account SA, and there's another IAM policy states service account SA has permission P to the GCP folder F, then user A potentially has access to the GCP folder F. And those advanced analysis results will be included in AnalyzeIamPolicyResponse.service_account_impersonation_analysis. Default is false. */
		analyzeServiceAccountImpersonation: FormControl<boolean | null | undefined>,

		/** Optional. If true, the identities section of the result will expand any Google groups appearing in an IAM policy binding. If identity_selector is specified, the identity in the result will be determined by the selector, and this flag will have no effect. Default is false. */
		expandGroups: FormControl<boolean | null | undefined>,

		/** Optional. If true, the resource section of the result will expand any resource attached to an IAM policy to include resources lower in the resource hierarchy. For example, if the request analyzes for which resources user A has permission P, and the results include an IAM policy with P on a GCP folder, the results will also include resources in that folder with permission P. If resource_selector is specified, the resource section of the result will be determined by the selector, and this flag will have no effect. Default is false. */
		expandResources: FormControl<boolean | null | undefined>,

		/** Optional. If true, the access section of result will expand any roles appearing in IAM policy bindings to include their permissions. If access_selector is specified, the access section of the result will be determined by the selector, and this flag will have no effect. Default is false. */
		expandRoles: FormControl<boolean | null | undefined>,

		/** Optional. If true, the result will output group identity edges, starting from the binding's group members, to any expanded identities. Default is false. */
		outputGroupEdges: FormControl<boolean | null | undefined>,

		/** Optional. If true, the result will output resource edges, starting from the policy attached resource, to any expanded resources. Default is false. */
		outputResourceEdges: FormControl<boolean | null | undefined>,
	}
	export function CreateOptionsFormGroup() {
		return new FormGroup<OptionsFormProperties>({
			analyzeServiceAccountImpersonation: new FormControl<boolean | null | undefined>(undefined),
			expandGroups: new FormControl<boolean | null | undefined>(undefined),
			expandResources: new FormControl<boolean | null | undefined>(undefined),
			expandRoles: new FormControl<boolean | null | undefined>(undefined),
			outputGroupEdges: new FormControl<boolean | null | undefined>(undefined),
			outputResourceEdges: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Output configuration for export IAM policy analysis destination. */
	export interface IamPolicyAnalysisOutputConfig {

		/** A Cloud Storage location. */
		gcsDestination?: GcsDestination;
	}

	/** Output configuration for export IAM policy analysis destination. */
	export interface IamPolicyAnalysisOutputConfigFormProperties {
	}
	export function CreateIamPolicyAnalysisOutputConfigFormGroup() {
		return new FormGroup<IamPolicyAnalysisOutputConfigFormProperties>({
		});

	}


	/** A Cloud Storage location. */
	export interface GcsDestination {

		/** Required. The uri of the Cloud Storage object. It's the same uri that is used by gsutil. For example: "gs://bucket_name/object_name". See [Quickstart: Using the gsutil tool] (https://cloud.google.com/storage/docs/quickstart-gsutil) for examples. */
		uri?: string | null;
	}

	/** A Cloud Storage location. */
	export interface GcsDestinationFormProperties {

		/** Required. The uri of the Cloud Storage object. It's the same uri that is used by gsutil. For example: "gs://bucket_name/object_name". See [Quickstart: Using the gsutil tool] (https://cloud.google.com/storage/docs/quickstart-gsutil) for examples. */
		uri: FormControl<string | null | undefined>,
	}
	export function CreateGcsDestinationFormGroup() {
		return new FormGroup<GcsDestinationFormProperties>({
			uri: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An asset in Google Cloud. An asset can be any resource in the Google Cloud [resource hierarchy](https://cloud.google.com/resource-manager/docs/cloud-platform-resource-hierarchy), a resource outside the Google Cloud resource hierarchy (such as Google Kubernetes Engine clusters and objects), or a policy (e.g. Cloud IAM policy). See [Supported asset types](https://cloud.google.com/asset-inventory/docs/supported-asset-types) for more information. */
	export interface GoogleCloudAssetV1p7beta1Asset {

		/** An `AccessLevel` is a label that can be applied to requests to Google Cloud services, along with a list of requirements necessary for the label to be applied. */
		accessLevel?: GoogleIdentityAccesscontextmanagerV1AccessLevel;

		/** `AccessPolicy` is a container for `AccessLevels` (which define the necessary attributes to use Google Cloud services) and `ServicePerimeters` (which define regions of services able to freely pass data within a perimeter). An access policy is globally visible within an organization, and the restrictions it specifies apply to all projects within an organization. */
		accessPolicy?: GoogleIdentityAccesscontextmanagerV1AccessPolicy;

		/** The ancestry path of an asset in Google Cloud [resource hierarchy](https://cloud.google.com/resource-manager/docs/cloud-platform-resource-hierarchy), represented as a list of relative resource names. An ancestry path starts with the closest ancestor in the hierarchy and ends at root. If the asset is a project, folder, or organization, the ancestry path starts from the asset itself. Example: `["projects/123456789", "folders/5432", "organizations/1234"]` */
		ancestors?: Array<string>;

		/** The type of the asset. Example: `compute.googleapis.com/Disk` See [Supported asset types](https://cloud.google.com/asset-inventory/docs/supported-asset-types) for more information. */
		assetType?: string | null;

		/** An Identity and Access Management (IAM) policy, which specifies access controls for Google Cloud resources. A `Policy` is a collection of `bindings`. A `binding` binds one or more `members`, or principals, to a single `role`. Principals can be user accounts, service accounts, Google groups, and domains (such as G Suite). A `role` is a named list of permissions; each `role` can be an IAM predefined role or a user-created custom role. For some types of Google Cloud resources, a `binding` can also specify a `condition`, which is a logical expression that allows access to a resource only if the expression evaluates to `true`. A condition can add constraints based on attributes of the request, the resource, or both. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies). **JSON example:** { "bindings": [ { "role": "roles/resourcemanager.organizationAdmin", "members": [ "user:mike@example.com", "group:admins@example.com", "domain:google.com", "serviceAccount:my-project-id@appspot.gserviceaccount.com" ] }, { "role": "roles/resourcemanager.organizationViewer", "members": [ "user:eve@example.com" ], "condition": { "title": "expirable access", "description": "Does not grant access after Sep 2020", "expression": "request.time < timestamp('2020-10-01T00:00:00.000Z')", } } ], "etag": "BwWWja0YfJA=", "version": 3 } **YAML example:** bindings: - members: - user:mike@example.com - group:admins@example.com - domain:google.com - serviceAccount:my-project-id@appspot.gserviceaccount.com role: roles/resourcemanager.organizationAdmin - members: - user:eve@example.com role: roles/resourcemanager.organizationViewer condition: title: expirable access description: Does not grant access after Sep 2020 expression: request.time < timestamp('2020-10-01T00:00:00.000Z') etag: BwWWja0YfJA= version: 3 For a description of IAM and its features, see the [IAM documentation](https://cloud.google.com/iam/docs/). */
		iamPolicy?: Policy;

		/** The full name of the asset. Example: `//compute.googleapis.com/projects/my_project_123/zones/zone1/instances/instance1` See [Resource names](https://cloud.google.com/apis/design/resource_names#full_resource_name) for more information. */
		name?: string | null;

		/** A representation of an [organization policy](https://cloud.google.com/resource-manager/docs/organization-policy/overview#organization_policy). There can be more than one organization policy with different constraints set on a given resource. */
		orgPolicy?: Array<GoogleCloudOrgpolicyV1Policy>;

		/** The detailed related assets with the `relationship_type`. */
		relatedAssets?: GoogleCloudAssetV1p7beta1RelatedAssets;

		/** A representation of a Google Cloud resource. */
		resource?: GoogleCloudAssetV1p7beta1Resource;

		/** `ServicePerimeter` describes a set of Google Cloud resources which can freely import and export data amongst themselves, but not export outside of the `ServicePerimeter`. If a request with a source within this `ServicePerimeter` has a target outside of the `ServicePerimeter`, the request will be blocked. Otherwise the request is allowed. There are two types of Service Perimeter - Regular and Bridge. Regular Service Perimeters cannot overlap, a single Google Cloud project can only belong to a single regular Service Perimeter. Service Perimeter Bridges can contain only Google Cloud projects as members, a single Google Cloud project may belong to multiple Service Perimeter Bridges. */
		servicePerimeter?: GoogleIdentityAccesscontextmanagerV1ServicePerimeter;

		/** The last update timestamp of an asset. update_time is updated when create/update/delete operation is performed. */
		updateTime?: string | null;
	}

	/** An asset in Google Cloud. An asset can be any resource in the Google Cloud [resource hierarchy](https://cloud.google.com/resource-manager/docs/cloud-platform-resource-hierarchy), a resource outside the Google Cloud resource hierarchy (such as Google Kubernetes Engine clusters and objects), or a policy (e.g. Cloud IAM policy). See [Supported asset types](https://cloud.google.com/asset-inventory/docs/supported-asset-types) for more information. */
	export interface GoogleCloudAssetV1p7beta1AssetFormProperties {

		/** The type of the asset. Example: `compute.googleapis.com/Disk` See [Supported asset types](https://cloud.google.com/asset-inventory/docs/supported-asset-types) for more information. */
		assetType: FormControl<string | null | undefined>,

		/** The full name of the asset. Example: `//compute.googleapis.com/projects/my_project_123/zones/zone1/instances/instance1` See [Resource names](https://cloud.google.com/apis/design/resource_names#full_resource_name) for more information. */
		name: FormControl<string | null | undefined>,

		/** The last update timestamp of an asset. update_time is updated when create/update/delete operation is performed. */
		updateTime: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudAssetV1p7beta1AssetFormGroup() {
		return new FormGroup<GoogleCloudAssetV1p7beta1AssetFormProperties>({
			assetType: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			updateTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An `AccessLevel` is a label that can be applied to requests to Google Cloud services, along with a list of requirements necessary for the label to be applied. */
	export interface GoogleIdentityAccesscontextmanagerV1AccessLevel {

		/** `BasicLevel` is an `AccessLevel` using a set of recommended features. */
		basic?: GoogleIdentityAccesscontextmanagerV1BasicLevel;

		/** `CustomLevel` is an `AccessLevel` using the Cloud Common Expression Language to represent the necessary conditions for the level to apply to a request. See CEL spec at: https://github.com/google/cel-spec */
		custom?: GoogleIdentityAccesscontextmanagerV1CustomLevel;

		/** Description of the `AccessLevel` and its use. Does not affect behavior. */
		description?: string | null;

		/** Required. Resource name for the Access Level. The `short_name` component must begin with a letter and only include alphanumeric and '_'. Format: `accessPolicies/{access_policy}/accessLevels/{access_level}`. The maximum length of the `access_level` component is 50 characters. */
		name?: string | null;

		/** Human readable title. Must be unique within the Policy. */
		title?: string | null;
	}

	/** An `AccessLevel` is a label that can be applied to requests to Google Cloud services, along with a list of requirements necessary for the label to be applied. */
	export interface GoogleIdentityAccesscontextmanagerV1AccessLevelFormProperties {

		/** Description of the `AccessLevel` and its use. Does not affect behavior. */
		description: FormControl<string | null | undefined>,

		/** Required. Resource name for the Access Level. The `short_name` component must begin with a letter and only include alphanumeric and '_'. Format: `accessPolicies/{access_policy}/accessLevels/{access_level}`. The maximum length of the `access_level` component is 50 characters. */
		name: FormControl<string | null | undefined>,

		/** Human readable title. Must be unique within the Policy. */
		title: FormControl<string | null | undefined>,
	}
	export function CreateGoogleIdentityAccesscontextmanagerV1AccessLevelFormGroup() {
		return new FormGroup<GoogleIdentityAccesscontextmanagerV1AccessLevelFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** `BasicLevel` is an `AccessLevel` using a set of recommended features. */
	export interface GoogleIdentityAccesscontextmanagerV1BasicLevel {

		/** How the `conditions` list should be combined to determine if a request is granted this `AccessLevel`. If AND is used, each `Condition` in `conditions` must be satisfied for the `AccessLevel` to be applied. If OR is used, at least one `Condition` in `conditions` must be satisfied for the `AccessLevel` to be applied. Default behavior is AND. */
		combiningFunction?: GoogleIdentityAccesscontextmanagerV1BasicLevelCombiningFunction | null;

		/** Required. A list of requirements for the `AccessLevel` to be granted. */
		conditions?: Array<GoogleIdentityAccesscontextmanagerV1Condition>;
	}

	/** `BasicLevel` is an `AccessLevel` using a set of recommended features. */
	export interface GoogleIdentityAccesscontextmanagerV1BasicLevelFormProperties {

		/** How the `conditions` list should be combined to determine if a request is granted this `AccessLevel`. If AND is used, each `Condition` in `conditions` must be satisfied for the `AccessLevel` to be applied. If OR is used, at least one `Condition` in `conditions` must be satisfied for the `AccessLevel` to be applied. Default behavior is AND. */
		combiningFunction: FormControl<GoogleIdentityAccesscontextmanagerV1BasicLevelCombiningFunction | null | undefined>,
	}
	export function CreateGoogleIdentityAccesscontextmanagerV1BasicLevelFormGroup() {
		return new FormGroup<GoogleIdentityAccesscontextmanagerV1BasicLevelFormProperties>({
			combiningFunction: new FormControl<GoogleIdentityAccesscontextmanagerV1BasicLevelCombiningFunction | null | undefined>(undefined),
		});

	}

	export enum GoogleIdentityAccesscontextmanagerV1BasicLevelCombiningFunction { AND = 'AND', OR = 'OR' }


	/** A condition necessary for an `AccessLevel` to be granted. The Condition is an AND over its fields. So a Condition is true if: 1) the request IP is from one of the listed subnetworks AND 2) the originating device complies with the listed device policy AND 3) all listed access levels are granted AND 4) the request was sent at a time allowed by the DateTimeRestriction. */
	export interface GoogleIdentityAccesscontextmanagerV1Condition {

		/** `DevicePolicy` specifies device specific restrictions necessary to acquire a given access level. A `DevicePolicy` specifies requirements for requests from devices to be granted access levels, it does not do any enforcement on the device. `DevicePolicy` acts as an AND over all specified fields, and each repeated field is an OR over its elements. Any unset fields are ignored. For example, if the proto is { os_type : DESKTOP_WINDOWS, os_type : DESKTOP_LINUX, encryption_status: ENCRYPTED}, then the DevicePolicy will be true for requests originating from encrypted Linux desktops and encrypted Windows desktops. */
		devicePolicy?: GoogleIdentityAccesscontextmanagerV1DevicePolicy;

		/** CIDR block IP subnetwork specification. May be IPv4 or IPv6. Note that for a CIDR IP address block, the specified IP address portion must be properly truncated (i.e. all the host bits must be zero) or the input is considered malformed. For example, "192.0.2.0/24" is accepted but "192.0.2.1/24" is not. Similarly, for IPv6, "2001:db8::/32" is accepted whereas "2001:db8::1/32" is not. The originating IP of a request must be in one of the listed subnets in order for this Condition to be true. If empty, all IP addresses are allowed. */
		ipSubnetworks?: Array<string>;

		/** The request must be made by one of the provided user or service accounts. Groups are not supported. Syntax: `user:{emailid}` `serviceAccount:{emailid}` If not specified, a request may come from any user. */
		members?: Array<string>;

		/** Whether to negate the Condition. If true, the Condition becomes a NAND over its non-empty fields, each field must be false for the Condition overall to be satisfied. Defaults to false. */
		negate?: boolean | null;

		/** The request must originate from one of the provided countries/regions. Must be valid ISO 3166-1 alpha-2 codes. */
		regions?: Array<string>;

		/** A list of other access levels defined in the same `Policy`, referenced by resource name. Referencing an `AccessLevel` which does not exist is an error. All access levels listed must be granted for the Condition to be true. Example: "`accessPolicies/MY_POLICY/accessLevels/LEVEL_NAME"` */
		requiredAccessLevels?: Array<string>;
	}

	/** A condition necessary for an `AccessLevel` to be granted. The Condition is an AND over its fields. So a Condition is true if: 1) the request IP is from one of the listed subnetworks AND 2) the originating device complies with the listed device policy AND 3) all listed access levels are granted AND 4) the request was sent at a time allowed by the DateTimeRestriction. */
	export interface GoogleIdentityAccesscontextmanagerV1ConditionFormProperties {

		/** Whether to negate the Condition. If true, the Condition becomes a NAND over its non-empty fields, each field must be false for the Condition overall to be satisfied. Defaults to false. */
		negate: FormControl<boolean | null | undefined>,
	}
	export function CreateGoogleIdentityAccesscontextmanagerV1ConditionFormGroup() {
		return new FormGroup<GoogleIdentityAccesscontextmanagerV1ConditionFormProperties>({
			negate: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** `DevicePolicy` specifies device specific restrictions necessary to acquire a given access level. A `DevicePolicy` specifies requirements for requests from devices to be granted access levels, it does not do any enforcement on the device. `DevicePolicy` acts as an AND over all specified fields, and each repeated field is an OR over its elements. Any unset fields are ignored. For example, if the proto is { os_type : DESKTOP_WINDOWS, os_type : DESKTOP_LINUX, encryption_status: ENCRYPTED}, then the DevicePolicy will be true for requests originating from encrypted Linux desktops and encrypted Windows desktops. */
	export interface GoogleIdentityAccesscontextmanagerV1DevicePolicy {

		/** Allowed device management levels, an empty list allows all management levels. */
		allowedDeviceManagementLevels?: Array<string>;

		/** Allowed encryptions statuses, an empty list allows all statuses. */
		allowedEncryptionStatuses?: Array<string>;

		/** Allowed OS versions, an empty list allows all types and all versions. */
		osConstraints?: Array<GoogleIdentityAccesscontextmanagerV1OsConstraint>;

		/** Whether the device needs to be approved by the customer admin. */
		requireAdminApproval?: boolean | null;

		/** Whether the device needs to be corp owned. */
		requireCorpOwned?: boolean | null;

		/** Whether or not screenlock is required for the DevicePolicy to be true. Defaults to `false`. */
		requireScreenlock?: boolean | null;
	}

	/** `DevicePolicy` specifies device specific restrictions necessary to acquire a given access level. A `DevicePolicy` specifies requirements for requests from devices to be granted access levels, it does not do any enforcement on the device. `DevicePolicy` acts as an AND over all specified fields, and each repeated field is an OR over its elements. Any unset fields are ignored. For example, if the proto is { os_type : DESKTOP_WINDOWS, os_type : DESKTOP_LINUX, encryption_status: ENCRYPTED}, then the DevicePolicy will be true for requests originating from encrypted Linux desktops and encrypted Windows desktops. */
	export interface GoogleIdentityAccesscontextmanagerV1DevicePolicyFormProperties {

		/** Whether the device needs to be approved by the customer admin. */
		requireAdminApproval: FormControl<boolean | null | undefined>,

		/** Whether the device needs to be corp owned. */
		requireCorpOwned: FormControl<boolean | null | undefined>,

		/** Whether or not screenlock is required for the DevicePolicy to be true. Defaults to `false`. */
		requireScreenlock: FormControl<boolean | null | undefined>,
	}
	export function CreateGoogleIdentityAccesscontextmanagerV1DevicePolicyFormGroup() {
		return new FormGroup<GoogleIdentityAccesscontextmanagerV1DevicePolicyFormProperties>({
			requireAdminApproval: new FormControl<boolean | null | undefined>(undefined),
			requireCorpOwned: new FormControl<boolean | null | undefined>(undefined),
			requireScreenlock: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** A restriction on the OS type and version of devices making requests. */
	export interface GoogleIdentityAccesscontextmanagerV1OsConstraint {

		/** The minimum allowed OS version. If not set, any version of this OS satisfies the constraint. Format: `"major.minor.patch"`. Examples: `"10.5.301"`, `"9.2.1"`. */
		minimumVersion?: string | null;

		/** Required. The allowed OS type. */
		osType?: GoogleIdentityAccesscontextmanagerV1OsConstraintOsType | null;

		/** Only allows requests from devices with a verified Chrome OS. Verifications includes requirements that the device is enterprise-managed, conformant to domain policies, and the caller has permission to call the API targeted by the request. */
		requireVerifiedChromeOs?: boolean | null;
	}

	/** A restriction on the OS type and version of devices making requests. */
	export interface GoogleIdentityAccesscontextmanagerV1OsConstraintFormProperties {

		/** The minimum allowed OS version. If not set, any version of this OS satisfies the constraint. Format: `"major.minor.patch"`. Examples: `"10.5.301"`, `"9.2.1"`. */
		minimumVersion: FormControl<string | null | undefined>,

		/** Required. The allowed OS type. */
		osType: FormControl<GoogleIdentityAccesscontextmanagerV1OsConstraintOsType | null | undefined>,

		/** Only allows requests from devices with a verified Chrome OS. Verifications includes requirements that the device is enterprise-managed, conformant to domain policies, and the caller has permission to call the API targeted by the request. */
		requireVerifiedChromeOs: FormControl<boolean | null | undefined>,
	}
	export function CreateGoogleIdentityAccesscontextmanagerV1OsConstraintFormGroup() {
		return new FormGroup<GoogleIdentityAccesscontextmanagerV1OsConstraintFormProperties>({
			minimumVersion: new FormControl<string | null | undefined>(undefined),
			osType: new FormControl<GoogleIdentityAccesscontextmanagerV1OsConstraintOsType | null | undefined>(undefined),
			requireVerifiedChromeOs: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export enum GoogleIdentityAccesscontextmanagerV1OsConstraintOsType { OS_UNSPECIFIED = 'OS_UNSPECIFIED', DESKTOP_MAC = 'DESKTOP_MAC', DESKTOP_WINDOWS = 'DESKTOP_WINDOWS', DESKTOP_LINUX = 'DESKTOP_LINUX', DESKTOP_CHROME_OS = 'DESKTOP_CHROME_OS', ANDROID = 'ANDROID', IOS = 'IOS' }


	/** `CustomLevel` is an `AccessLevel` using the Cloud Common Expression Language to represent the necessary conditions for the level to apply to a request. See CEL spec at: https://github.com/google/cel-spec */
	export interface GoogleIdentityAccesscontextmanagerV1CustomLevel {

		/** Represents a textual expression in the Common Expression Language (CEL) syntax. CEL is a C-like expression language. The syntax and semantics of CEL are documented at https://github.com/google/cel-spec. Example (Comparison): title: "Summary size limit" description: "Determines if a summary is less than 100 chars" expression: "document.summary.size() < 100" Example (Equality): title: "Requestor is owner" description: "Determines if requestor is the document owner" expression: "document.owner == request.auth.claims.email" Example (Logic): title: "Public documents" description: "Determine whether the document should be publicly visible" expression: "document.type != 'private' && document.type != 'internal'" Example (Data Manipulation): title: "Notification string" description: "Create a notification string with a timestamp." expression: "'New message received at ' + string(document.create_time)" The exact variables and functions that may be referenced within an expression are determined by the service that evaluates it. See the service documentation for additional information. */
		expr?: Expr;
	}

	/** `CustomLevel` is an `AccessLevel` using the Cloud Common Expression Language to represent the necessary conditions for the level to apply to a request. See CEL spec at: https://github.com/google/cel-spec */
	export interface GoogleIdentityAccesscontextmanagerV1CustomLevelFormProperties {
	}
	export function CreateGoogleIdentityAccesscontextmanagerV1CustomLevelFormGroup() {
		return new FormGroup<GoogleIdentityAccesscontextmanagerV1CustomLevelFormProperties>({
		});

	}


	/** `AccessPolicy` is a container for `AccessLevels` (which define the necessary attributes to use Google Cloud services) and `ServicePerimeters` (which define regions of services able to freely pass data within a perimeter). An access policy is globally visible within an organization, and the restrictions it specifies apply to all projects within an organization. */
	export interface GoogleIdentityAccesscontextmanagerV1AccessPolicy {

		/** Output only. An opaque identifier for the current version of the `AccessPolicy`. This will always be a strongly validated etag, meaning that two Access Polices will be identical if and only if their etags are identical. Clients should not expect this to be in any specific format. */
		etag?: string | null;

		/** Output only. Resource name of the `AccessPolicy`. Format: `accessPolicies/{access_policy}` */
		name?: string | null;

		/** Required. The parent of this `AccessPolicy` in the Cloud Resource Hierarchy. Currently immutable once created. Format: `organizations/{organization_id}` */
		parent?: string | null;

		/** The scopes of a policy define which resources an ACM policy can restrict, and where ACM resources can be referenced. For example, a policy with scopes=["folders/123"] has the following behavior: - vpcsc perimeters can only restrict projects within folders/123 - access levels can only be referenced by resources within folders/123. If empty, there are no limitations on which resources can be restricted by an ACM policy, and there are no limitations on where ACM resources can be referenced. Only one policy can include a given scope (attempting to create a second policy which includes "folders/123" will result in an error). Currently, scopes cannot be modified after a policy is created. Currently, policies can only have a single scope. Format: list of `folders/{folder_number}` or `projects/{project_number}` */
		scopes?: Array<string>;

		/** Required. Human readable title. Does not affect behavior. */
		title?: string | null;
	}

	/** `AccessPolicy` is a container for `AccessLevels` (which define the necessary attributes to use Google Cloud services) and `ServicePerimeters` (which define regions of services able to freely pass data within a perimeter). An access policy is globally visible within an organization, and the restrictions it specifies apply to all projects within an organization. */
	export interface GoogleIdentityAccesscontextmanagerV1AccessPolicyFormProperties {

		/** Output only. An opaque identifier for the current version of the `AccessPolicy`. This will always be a strongly validated etag, meaning that two Access Polices will be identical if and only if their etags are identical. Clients should not expect this to be in any specific format. */
		etag: FormControl<string | null | undefined>,

		/** Output only. Resource name of the `AccessPolicy`. Format: `accessPolicies/{access_policy}` */
		name: FormControl<string | null | undefined>,

		/** Required. The parent of this `AccessPolicy` in the Cloud Resource Hierarchy. Currently immutable once created. Format: `organizations/{organization_id}` */
		parent: FormControl<string | null | undefined>,

		/** Required. Human readable title. Does not affect behavior. */
		title: FormControl<string | null | undefined>,
	}
	export function CreateGoogleIdentityAccesscontextmanagerV1AccessPolicyFormGroup() {
		return new FormGroup<GoogleIdentityAccesscontextmanagerV1AccessPolicyFormProperties>({
			etag: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			parent: new FormControl<string | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An Identity and Access Management (IAM) policy, which specifies access controls for Google Cloud resources. A `Policy` is a collection of `bindings`. A `binding` binds one or more `members`, or principals, to a single `role`. Principals can be user accounts, service accounts, Google groups, and domains (such as G Suite). A `role` is a named list of permissions; each `role` can be an IAM predefined role or a user-created custom role. For some types of Google Cloud resources, a `binding` can also specify a `condition`, which is a logical expression that allows access to a resource only if the expression evaluates to `true`. A condition can add constraints based on attributes of the request, the resource, or both. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies). **JSON example:** { "bindings": [ { "role": "roles/resourcemanager.organizationAdmin", "members": [ "user:mike@example.com", "group:admins@example.com", "domain:google.com", "serviceAccount:my-project-id@appspot.gserviceaccount.com" ] }, { "role": "roles/resourcemanager.organizationViewer", "members": [ "user:eve@example.com" ], "condition": { "title": "expirable access", "description": "Does not grant access after Sep 2020", "expression": "request.time < timestamp('2020-10-01T00:00:00.000Z')", } } ], "etag": "BwWWja0YfJA=", "version": 3 } **YAML example:** bindings: - members: - user:mike@example.com - group:admins@example.com - domain:google.com - serviceAccount:my-project-id@appspot.gserviceaccount.com role: roles/resourcemanager.organizationAdmin - members: - user:eve@example.com role: roles/resourcemanager.organizationViewer condition: title: expirable access description: Does not grant access after Sep 2020 expression: request.time < timestamp('2020-10-01T00:00:00.000Z') etag: BwWWja0YfJA= version: 3 For a description of IAM and its features, see the [IAM documentation](https://cloud.google.com/iam/docs/). */
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

	/** An Identity and Access Management (IAM) policy, which specifies access controls for Google Cloud resources. A `Policy` is a collection of `bindings`. A `binding` binds one or more `members`, or principals, to a single `role`. Principals can be user accounts, service accounts, Google groups, and domains (such as G Suite). A `role` is a named list of permissions; each `role` can be an IAM predefined role or a user-created custom role. For some types of Google Cloud resources, a `binding` can also specify a `condition`, which is a logical expression that allows access to a resource only if the expression evaluates to `true`. A condition can add constraints based on attributes of the request, the resource, or both. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies). **JSON example:** { "bindings": [ { "role": "roles/resourcemanager.organizationAdmin", "members": [ "user:mike@example.com", "group:admins@example.com", "domain:google.com", "serviceAccount:my-project-id@appspot.gserviceaccount.com" ] }, { "role": "roles/resourcemanager.organizationViewer", "members": [ "user:eve@example.com" ], "condition": { "title": "expirable access", "description": "Does not grant access after Sep 2020", "expression": "request.time < timestamp('2020-10-01T00:00:00.000Z')", } } ], "etag": "BwWWja0YfJA=", "version": 3 } **YAML example:** bindings: - members: - user:mike@example.com - group:admins@example.com - domain:google.com - serviceAccount:my-project-id@appspot.gserviceaccount.com role: roles/resourcemanager.organizationAdmin - members: - user:eve@example.com role: roles/resourcemanager.organizationViewer condition: title: expirable access description: Does not grant access after Sep 2020 expression: request.time < timestamp('2020-10-01T00:00:00.000Z') etag: BwWWja0YfJA= version: 3 For a description of IAM and its features, see the [IAM documentation](https://cloud.google.com/iam/docs/). */
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


	/** Defines a Cloud Organization `Policy` which is used to specify `Constraints` for configurations of Cloud Platform resources. */
	export interface GoogleCloudOrgpolicyV1Policy {

		/** Used in `policy_type` to specify how `boolean_policy` will behave at this resource. */
		booleanPolicy?: GoogleCloudOrgpolicyV1BooleanPolicy;

		/** The name of the `Constraint` the `Policy` is configuring, for example, `constraints/serviceuser.services`. A [list of available constraints](/resource-manager/docs/organization-policy/org-policy-constraints) is available. Immutable after creation. */
		constraint?: string | null;

		/** An opaque tag indicating the current version of the `Policy`, used for concurrency control. When the `Policy` is returned from either a `GetPolicy` or a `ListOrgPolicy` request, this `etag` indicates the version of the current `Policy` to use when executing a read-modify-write loop. When the `Policy` is returned from a `GetEffectivePolicy` request, the `etag` will be unset. When the `Policy` is used in a `SetOrgPolicy` method, use the `etag` value that was returned from a `GetOrgPolicy` request as part of a read-modify-write loop for concurrency control. Not setting the `etag`in a `SetOrgPolicy` request will result in an unconditional write of the `Policy`. */
		etag?: string | null;

		/** Used in `policy_type` to specify how `list_policy` behaves at this resource. `ListPolicy` can define specific values and subtrees of Cloud Resource Manager resource hierarchy (`Organizations`, `Folders`, `Projects`) that are allowed or denied by setting the `allowed_values` and `denied_values` fields. This is achieved by using the `under:` and optional `is:` prefixes. The `under:` prefix is used to denote resource subtree values. The `is:` prefix is used to denote specific values, and is required only if the value contains a ":". Values prefixed with "is:" are treated the same as values with no prefix. Ancestry subtrees must be in one of the following formats: - "projects/", e.g. "projects/tokyo-rain-123" - "folders/", e.g. "folders/1234" - "organizations/", e.g. "organizations/1234" The `supports_under` field of the associated `Constraint` defines whether ancestry prefixes can be used. You can set `allowed_values` and `denied_values` in the same `Policy` if `all_values` is `ALL_VALUES_UNSPECIFIED`. `ALLOW` or `DENY` are used to allow or deny all values. If `all_values` is set to either `ALLOW` or `DENY`, `allowed_values` and `denied_values` must be unset. */
		listPolicy?: GoogleCloudOrgpolicyV1ListPolicy;

		/** Ignores policies set above this resource and restores the `constraint_default` enforcement behavior of the specific `Constraint` at this resource. Suppose that `constraint_default` is set to `ALLOW` for the `Constraint` `constraints/serviceuser.services`. Suppose that organization foo.com sets a `Policy` at their Organization resource node that restricts the allowed service activations to deny all service activations. They could then set a `Policy` with the `policy_type` `restore_default` on several experimental projects, restoring the `constraint_default` enforcement of the `Constraint` for only those projects, allowing those projects to have all services activated. */
		restoreDefault?: GoogleCloudOrgpolicyV1RestoreDefault;

		/** The time stamp the `Policy` was previously updated. This is set by the server, not specified by the caller, and represents the last time a call to `SetOrgPolicy` was made for that `Policy`. Any value set by the client will be ignored. */
		updateTime?: string | null;

		/**
		 * Version of the `Policy`. Default version is 0;
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		version?: number | null;
	}

	/** Defines a Cloud Organization `Policy` which is used to specify `Constraints` for configurations of Cloud Platform resources. */
	export interface GoogleCloudOrgpolicyV1PolicyFormProperties {

		/** The name of the `Constraint` the `Policy` is configuring, for example, `constraints/serviceuser.services`. A [list of available constraints](/resource-manager/docs/organization-policy/org-policy-constraints) is available. Immutable after creation. */
		constraint: FormControl<string | null | undefined>,

		/** An opaque tag indicating the current version of the `Policy`, used for concurrency control. When the `Policy` is returned from either a `GetPolicy` or a `ListOrgPolicy` request, this `etag` indicates the version of the current `Policy` to use when executing a read-modify-write loop. When the `Policy` is returned from a `GetEffectivePolicy` request, the `etag` will be unset. When the `Policy` is used in a `SetOrgPolicy` method, use the `etag` value that was returned from a `GetOrgPolicy` request as part of a read-modify-write loop for concurrency control. Not setting the `etag`in a `SetOrgPolicy` request will result in an unconditional write of the `Policy`. */
		etag: FormControl<string | null | undefined>,

		/** The time stamp the `Policy` was previously updated. This is set by the server, not specified by the caller, and represents the last time a call to `SetOrgPolicy` was made for that `Policy`. Any value set by the client will be ignored. */
		updateTime: FormControl<string | null | undefined>,

		/**
		 * Version of the `Policy`. Default version is 0;
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		version: FormControl<number | null | undefined>,
	}
	export function CreateGoogleCloudOrgpolicyV1PolicyFormGroup() {
		return new FormGroup<GoogleCloudOrgpolicyV1PolicyFormProperties>({
			constraint: new FormControl<string | null | undefined>(undefined),
			etag: new FormControl<string | null | undefined>(undefined),
			updateTime: new FormControl<string | null | undefined>(undefined),
			version: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Used in `policy_type` to specify how `boolean_policy` will behave at this resource. */
	export interface GoogleCloudOrgpolicyV1BooleanPolicy {

		/** If `true`, then the `Policy` is enforced. If `false`, then any configuration is acceptable. Suppose you have a `Constraint` `constraints/compute.disableSerialPortAccess` with `constraint_default` set to `ALLOW`. A `Policy` for that `Constraint` exhibits the following behavior: - If the `Policy` at this resource has enforced set to `false`, serial port connection attempts will be allowed. - If the `Policy` at this resource has enforced set to `true`, serial port connection attempts will be refused. - If the `Policy` at this resource is `RestoreDefault`, serial port connection attempts will be allowed. - If no `Policy` is set at this resource or anywhere higher in the resource hierarchy, serial port connection attempts will be allowed. - If no `Policy` is set at this resource, but one exists higher in the resource hierarchy, the behavior is as if the`Policy` were set at this resource. The following examples demonstrate the different possible layerings: Example 1 (nearest `Constraint` wins): `organizations/foo` has a `Policy` with: {enforced: false} `projects/bar` has no `Policy` set. The constraint at `projects/bar` and `organizations/foo` will not be enforced. Example 2 (enforcement gets replaced): `organizations/foo` has a `Policy` with: {enforced: false} `projects/bar` has a `Policy` with: {enforced: true} The constraint at `organizations/foo` is not enforced. The constraint at `projects/bar` is enforced. Example 3 (RestoreDefault): `organizations/foo` has a `Policy` with: {enforced: true} `projects/bar` has a `Policy` with: {RestoreDefault: {}} The constraint at `organizations/foo` is enforced. The constraint at `projects/bar` is not enforced, because `constraint_default` for the `Constraint` is `ALLOW`. */
		enforced?: boolean | null;
	}

	/** Used in `policy_type` to specify how `boolean_policy` will behave at this resource. */
	export interface GoogleCloudOrgpolicyV1BooleanPolicyFormProperties {

		/** If `true`, then the `Policy` is enforced. If `false`, then any configuration is acceptable. Suppose you have a `Constraint` `constraints/compute.disableSerialPortAccess` with `constraint_default` set to `ALLOW`. A `Policy` for that `Constraint` exhibits the following behavior: - If the `Policy` at this resource has enforced set to `false`, serial port connection attempts will be allowed. - If the `Policy` at this resource has enforced set to `true`, serial port connection attempts will be refused. - If the `Policy` at this resource is `RestoreDefault`, serial port connection attempts will be allowed. - If no `Policy` is set at this resource or anywhere higher in the resource hierarchy, serial port connection attempts will be allowed. - If no `Policy` is set at this resource, but one exists higher in the resource hierarchy, the behavior is as if the`Policy` were set at this resource. The following examples demonstrate the different possible layerings: Example 1 (nearest `Constraint` wins): `organizations/foo` has a `Policy` with: {enforced: false} `projects/bar` has no `Policy` set. The constraint at `projects/bar` and `organizations/foo` will not be enforced. Example 2 (enforcement gets replaced): `organizations/foo` has a `Policy` with: {enforced: false} `projects/bar` has a `Policy` with: {enforced: true} The constraint at `organizations/foo` is not enforced. The constraint at `projects/bar` is enforced. Example 3 (RestoreDefault): `organizations/foo` has a `Policy` with: {enforced: true} `projects/bar` has a `Policy` with: {RestoreDefault: {}} The constraint at `organizations/foo` is enforced. The constraint at `projects/bar` is not enforced, because `constraint_default` for the `Constraint` is `ALLOW`. */
		enforced: FormControl<boolean | null | undefined>,
	}
	export function CreateGoogleCloudOrgpolicyV1BooleanPolicyFormGroup() {
		return new FormGroup<GoogleCloudOrgpolicyV1BooleanPolicyFormProperties>({
			enforced: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Used in `policy_type` to specify how `list_policy` behaves at this resource. `ListPolicy` can define specific values and subtrees of Cloud Resource Manager resource hierarchy (`Organizations`, `Folders`, `Projects`) that are allowed or denied by setting the `allowed_values` and `denied_values` fields. This is achieved by using the `under:` and optional `is:` prefixes. The `under:` prefix is used to denote resource subtree values. The `is:` prefix is used to denote specific values, and is required only if the value contains a ":". Values prefixed with "is:" are treated the same as values with no prefix. Ancestry subtrees must be in one of the following formats: - "projects/", e.g. "projects/tokyo-rain-123" - "folders/", e.g. "folders/1234" - "organizations/", e.g. "organizations/1234" The `supports_under` field of the associated `Constraint` defines whether ancestry prefixes can be used. You can set `allowed_values` and `denied_values` in the same `Policy` if `all_values` is `ALL_VALUES_UNSPECIFIED`. `ALLOW` or `DENY` are used to allow or deny all values. If `all_values` is set to either `ALLOW` or `DENY`, `allowed_values` and `denied_values` must be unset. */
	export interface GoogleCloudOrgpolicyV1ListPolicy {

		/** The policy all_values state. */
		allValues?: GoogleCloudOrgpolicyV1ListPolicyAllValues | null;

		/** List of values allowed at this resource. Can only be set if `all_values` is set to `ALL_VALUES_UNSPECIFIED`. */
		allowedValues?: Array<string>;

		/** List of values denied at this resource. Can only be set if `all_values` is set to `ALL_VALUES_UNSPECIFIED`. */
		deniedValues?: Array<string>;

		/** Determines the inheritance behavior for this `Policy`. By default, a `ListPolicy` set at a resource supersedes any `Policy` set anywhere up the resource hierarchy. However, if `inherit_from_parent` is set to `true`, then the values from the effective `Policy` of the parent resource are inherited, meaning the values set in this `Policy` are added to the values inherited up the hierarchy. Setting `Policy` hierarchies that inherit both allowed values and denied values isn't recommended in most circumstances to keep the configuration simple and understandable. However, it is possible to set a `Policy` with `allowed_values` set that inherits a `Policy` with `denied_values` set. In this case, the values that are allowed must be in `allowed_values` and not present in `denied_values`. For example, suppose you have a `Constraint` `constraints/serviceuser.services`, which has a `constraint_type` of `list_constraint`, and with `constraint_default` set to `ALLOW`. Suppose that at the Organization level, a `Policy` is applied that restricts the allowed API activations to {`E1`, `E2`}. Then, if a `Policy` is applied to a project below the Organization that has `inherit_from_parent` set to `false` and field all_values set to DENY, then an attempt to activate any API will be denied. The following examples demonstrate different possible layerings for `projects/bar` parented by `organizations/foo`: Example 1 (no inherited values): `organizations/foo` has a `Policy` with values: {allowed_values: "E1" allowed_values:"E2"} `projects/bar` has `inherit_from_parent` `false` and values: {allowed_values: "E3" allowed_values: "E4"} The accepted values at `organizations/foo` are `E1`, `E2`. The accepted values at `projects/bar` are `E3`, and `E4`. Example 2 (inherited values): `organizations/foo` has a `Policy` with values: {allowed_values: "E1" allowed_values:"E2"} `projects/bar` has a `Policy` with values: {value: "E3" value: "E4" inherit_from_parent: true} The accepted values at `organizations/foo` are `E1`, `E2`. The accepted values at `projects/bar` are `E1`, `E2`, `E3`, and `E4`. Example 3 (inheriting both allowed and denied values): `organizations/foo` has a `Policy` with values: {allowed_values: "E1" allowed_values: "E2"} `projects/bar` has a `Policy` with: {denied_values: "E1"} The accepted values at `organizations/foo` are `E1`, `E2`. The value accepted at `projects/bar` is `E2`. Example 4 (RestoreDefault): `organizations/foo` has a `Policy` with values: {allowed_values: "E1" allowed_values:"E2"} `projects/bar` has a `Policy` with values: {RestoreDefault: {}} The accepted values at `organizations/foo` are `E1`, `E2`. The accepted values at `projects/bar` are either all or none depending on the value of `constraint_default` (if `ALLOW`, all; if `DENY`, none). Example 5 (no policy inherits parent policy): `organizations/foo` has no `Policy` set. `projects/bar` has no `Policy` set. The accepted values at both levels are either all or none depending on the value of `constraint_default` (if `ALLOW`, all; if `DENY`, none). Example 6 (ListConstraint allowing all): `organizations/foo` has a `Policy` with values: {allowed_values: "E1" allowed_values: "E2"} `projects/bar` has a `Policy` with: {all: ALLOW} The accepted values at `organizations/foo` are `E1`, E2`. Any value is accepted at `projects/bar`. Example 7 (ListConstraint allowing none): `organizations/foo` has a `Policy` with values: {allowed_values: "E1" allowed_values: "E2"} `projects/bar` has a `Policy` with: {all: DENY} The accepted values at `organizations/foo` are `E1`, E2`. No value is accepted at `projects/bar`. Example 10 (allowed and denied subtrees of Resource Manager hierarchy): Given the following resource hierarchy O1->{F1, F2}; F1->{P1}; F2->{P2, P3}, `organizations/foo` has a `Policy` with values: {allowed_values: "under:organizations/O1"} `projects/bar` has a `Policy` with: {allowed_values: "under:projects/P3"} {denied_values: "under:folders/F2"} The accepted values at `organizations/foo` are `organizations/O1`, `folders/F1`, `folders/F2`, `projects/P1`, `projects/P2`, `projects/P3`. The accepted values at `projects/bar` are `organizations/O1`, `folders/F1`, `projects/P1`. */
		inheritFromParent?: boolean | null;

		/** Optional. The Google Cloud Console will try to default to a configuration that matches the value specified in this `Policy`. If `suggested_value` is not set, it will inherit the value specified higher in the hierarchy, unless `inherit_from_parent` is `false`. */
		suggestedValue?: string | null;
	}

	/** Used in `policy_type` to specify how `list_policy` behaves at this resource. `ListPolicy` can define specific values and subtrees of Cloud Resource Manager resource hierarchy (`Organizations`, `Folders`, `Projects`) that are allowed or denied by setting the `allowed_values` and `denied_values` fields. This is achieved by using the `under:` and optional `is:` prefixes. The `under:` prefix is used to denote resource subtree values. The `is:` prefix is used to denote specific values, and is required only if the value contains a ":". Values prefixed with "is:" are treated the same as values with no prefix. Ancestry subtrees must be in one of the following formats: - "projects/", e.g. "projects/tokyo-rain-123" - "folders/", e.g. "folders/1234" - "organizations/", e.g. "organizations/1234" The `supports_under` field of the associated `Constraint` defines whether ancestry prefixes can be used. You can set `allowed_values` and `denied_values` in the same `Policy` if `all_values` is `ALL_VALUES_UNSPECIFIED`. `ALLOW` or `DENY` are used to allow or deny all values. If `all_values` is set to either `ALLOW` or `DENY`, `allowed_values` and `denied_values` must be unset. */
	export interface GoogleCloudOrgpolicyV1ListPolicyFormProperties {

		/** The policy all_values state. */
		allValues: FormControl<GoogleCloudOrgpolicyV1ListPolicyAllValues | null | undefined>,

		/** Determines the inheritance behavior for this `Policy`. By default, a `ListPolicy` set at a resource supersedes any `Policy` set anywhere up the resource hierarchy. However, if `inherit_from_parent` is set to `true`, then the values from the effective `Policy` of the parent resource are inherited, meaning the values set in this `Policy` are added to the values inherited up the hierarchy. Setting `Policy` hierarchies that inherit both allowed values and denied values isn't recommended in most circumstances to keep the configuration simple and understandable. However, it is possible to set a `Policy` with `allowed_values` set that inherits a `Policy` with `denied_values` set. In this case, the values that are allowed must be in `allowed_values` and not present in `denied_values`. For example, suppose you have a `Constraint` `constraints/serviceuser.services`, which has a `constraint_type` of `list_constraint`, and with `constraint_default` set to `ALLOW`. Suppose that at the Organization level, a `Policy` is applied that restricts the allowed API activations to {`E1`, `E2`}. Then, if a `Policy` is applied to a project below the Organization that has `inherit_from_parent` set to `false` and field all_values set to DENY, then an attempt to activate any API will be denied. The following examples demonstrate different possible layerings for `projects/bar` parented by `organizations/foo`: Example 1 (no inherited values): `organizations/foo` has a `Policy` with values: {allowed_values: "E1" allowed_values:"E2"} `projects/bar` has `inherit_from_parent` `false` and values: {allowed_values: "E3" allowed_values: "E4"} The accepted values at `organizations/foo` are `E1`, `E2`. The accepted values at `projects/bar` are `E3`, and `E4`. Example 2 (inherited values): `organizations/foo` has a `Policy` with values: {allowed_values: "E1" allowed_values:"E2"} `projects/bar` has a `Policy` with values: {value: "E3" value: "E4" inherit_from_parent: true} The accepted values at `organizations/foo` are `E1`, `E2`. The accepted values at `projects/bar` are `E1`, `E2`, `E3`, and `E4`. Example 3 (inheriting both allowed and denied values): `organizations/foo` has a `Policy` with values: {allowed_values: "E1" allowed_values: "E2"} `projects/bar` has a `Policy` with: {denied_values: "E1"} The accepted values at `organizations/foo` are `E1`, `E2`. The value accepted at `projects/bar` is `E2`. Example 4 (RestoreDefault): `organizations/foo` has a `Policy` with values: {allowed_values: "E1" allowed_values:"E2"} `projects/bar` has a `Policy` with values: {RestoreDefault: {}} The accepted values at `organizations/foo` are `E1`, `E2`. The accepted values at `projects/bar` are either all or none depending on the value of `constraint_default` (if `ALLOW`, all; if `DENY`, none). Example 5 (no policy inherits parent policy): `organizations/foo` has no `Policy` set. `projects/bar` has no `Policy` set. The accepted values at both levels are either all or none depending on the value of `constraint_default` (if `ALLOW`, all; if `DENY`, none). Example 6 (ListConstraint allowing all): `organizations/foo` has a `Policy` with values: {allowed_values: "E1" allowed_values: "E2"} `projects/bar` has a `Policy` with: {all: ALLOW} The accepted values at `organizations/foo` are `E1`, E2`. Any value is accepted at `projects/bar`. Example 7 (ListConstraint allowing none): `organizations/foo` has a `Policy` with values: {allowed_values: "E1" allowed_values: "E2"} `projects/bar` has a `Policy` with: {all: DENY} The accepted values at `organizations/foo` are `E1`, E2`. No value is accepted at `projects/bar`. Example 10 (allowed and denied subtrees of Resource Manager hierarchy): Given the following resource hierarchy O1->{F1, F2}; F1->{P1}; F2->{P2, P3}, `organizations/foo` has a `Policy` with values: {allowed_values: "under:organizations/O1"} `projects/bar` has a `Policy` with: {allowed_values: "under:projects/P3"} {denied_values: "under:folders/F2"} The accepted values at `organizations/foo` are `organizations/O1`, `folders/F1`, `folders/F2`, `projects/P1`, `projects/P2`, `projects/P3`. The accepted values at `projects/bar` are `organizations/O1`, `folders/F1`, `projects/P1`. */
		inheritFromParent: FormControl<boolean | null | undefined>,

		/** Optional. The Google Cloud Console will try to default to a configuration that matches the value specified in this `Policy`. If `suggested_value` is not set, it will inherit the value specified higher in the hierarchy, unless `inherit_from_parent` is `false`. */
		suggestedValue: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudOrgpolicyV1ListPolicyFormGroup() {
		return new FormGroup<GoogleCloudOrgpolicyV1ListPolicyFormProperties>({
			allValues: new FormControl<GoogleCloudOrgpolicyV1ListPolicyAllValues | null | undefined>(undefined),
			inheritFromParent: new FormControl<boolean | null | undefined>(undefined),
			suggestedValue: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum GoogleCloudOrgpolicyV1ListPolicyAllValues { ALL_VALUES_UNSPECIFIED = 'ALL_VALUES_UNSPECIFIED', ALLOW = 'ALLOW', DENY = 'DENY' }


	/** Ignores policies set above this resource and restores the `constraint_default` enforcement behavior of the specific `Constraint` at this resource. Suppose that `constraint_default` is set to `ALLOW` for the `Constraint` `constraints/serviceuser.services`. Suppose that organization foo.com sets a `Policy` at their Organization resource node that restricts the allowed service activations to deny all service activations. They could then set a `Policy` with the `policy_type` `restore_default` on several experimental projects, restoring the `constraint_default` enforcement of the `Constraint` for only those projects, allowing those projects to have all services activated. */
	export interface GoogleCloudOrgpolicyV1RestoreDefault {
	}

	/** Ignores policies set above this resource and restores the `constraint_default` enforcement behavior of the specific `Constraint` at this resource. Suppose that `constraint_default` is set to `ALLOW` for the `Constraint` `constraints/serviceuser.services`. Suppose that organization foo.com sets a `Policy` at their Organization resource node that restricts the allowed service activations to deny all service activations. They could then set a `Policy` with the `policy_type` `restore_default` on several experimental projects, restoring the `constraint_default` enforcement of the `Constraint` for only those projects, allowing those projects to have all services activated. */
	export interface GoogleCloudOrgpolicyV1RestoreDefaultFormProperties {
	}
	export function CreateGoogleCloudOrgpolicyV1RestoreDefaultFormGroup() {
		return new FormGroup<GoogleCloudOrgpolicyV1RestoreDefaultFormProperties>({
		});

	}


	/** The detailed related assets with the `relationship_type`. */
	export interface GoogleCloudAssetV1p7beta1RelatedAssets {

		/** The peer resources of the relationship. */
		assets?: Array<GoogleCloudAssetV1p7beta1RelatedAsset>;

		/** The relationship attributes which include `type`, `source_resource_type`, `target_resource_type` and `action`. */
		relationshipAttributes?: GoogleCloudAssetV1p7beta1RelationshipAttributes;
	}

	/** The detailed related assets with the `relationship_type`. */
	export interface GoogleCloudAssetV1p7beta1RelatedAssetsFormProperties {
	}
	export function CreateGoogleCloudAssetV1p7beta1RelatedAssetsFormGroup() {
		return new FormGroup<GoogleCloudAssetV1p7beta1RelatedAssetsFormProperties>({
		});

	}


	/** An asset identify in Google Cloud which contains its name, type and ancestors. An asset can be any resource in the Google Cloud [resource hierarchy](https://cloud.google.com/resource-manager/docs/cloud-platform-resource-hierarchy), a resource outside the Google Cloud resource hierarchy (such as Google Kubernetes Engine clusters and objects), or a policy (e.g. Cloud IAM policy). See [Supported asset types](https://cloud.google.com/asset-inventory/docs/supported-asset-types) for more information. */
	export interface GoogleCloudAssetV1p7beta1RelatedAsset {

		/** The ancestors of an asset in Google Cloud [resource hierarchy](https://cloud.google.com/resource-manager/docs/cloud-platform-resource-hierarchy), represented as a list of relative resource names. An ancestry path starts with the closest ancestor in the hierarchy and ends at root. Example: `["projects/123456789", "folders/5432", "organizations/1234"]` */
		ancestors?: Array<string>;

		/** The full name of the asset. Example: `//compute.googleapis.com/projects/my_project_123/zones/zone1/instances/instance1` See [Resource names](https://cloud.google.com/apis/design/resource_names#full_resource_name) for more information. */
		asset?: string | null;

		/** The type of the asset. Example: `compute.googleapis.com/Disk` See [Supported asset types](https://cloud.google.com/asset-inventory/docs/supported-asset-types) for more information. */
		assetType?: string | null;
	}

	/** An asset identify in Google Cloud which contains its name, type and ancestors. An asset can be any resource in the Google Cloud [resource hierarchy](https://cloud.google.com/resource-manager/docs/cloud-platform-resource-hierarchy), a resource outside the Google Cloud resource hierarchy (such as Google Kubernetes Engine clusters and objects), or a policy (e.g. Cloud IAM policy). See [Supported asset types](https://cloud.google.com/asset-inventory/docs/supported-asset-types) for more information. */
	export interface GoogleCloudAssetV1p7beta1RelatedAssetFormProperties {

		/** The full name of the asset. Example: `//compute.googleapis.com/projects/my_project_123/zones/zone1/instances/instance1` See [Resource names](https://cloud.google.com/apis/design/resource_names#full_resource_name) for more information. */
		asset: FormControl<string | null | undefined>,

		/** The type of the asset. Example: `compute.googleapis.com/Disk` See [Supported asset types](https://cloud.google.com/asset-inventory/docs/supported-asset-types) for more information. */
		assetType: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudAssetV1p7beta1RelatedAssetFormGroup() {
		return new FormGroup<GoogleCloudAssetV1p7beta1RelatedAssetFormProperties>({
			asset: new FormControl<string | null | undefined>(undefined),
			assetType: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The relationship attributes which include `type`, `source_resource_type`, `target_resource_type` and `action`. */
	export interface GoogleCloudAssetV1p7beta1RelationshipAttributes {

		/** The detail of the relationship, e.g. `contains`, `attaches` */
		action?: string | null;

		/** The source asset type. Example: `compute.googleapis.com/Instance` */
		sourceResourceType?: string | null;

		/** The target asset type. Example: `compute.googleapis.com/Disk` */
		targetResourceType?: string | null;

		/** The unique identifier of the relationship type. Example: `INSTANCE_TO_INSTANCEGROUP` */
		type?: string | null;
	}

	/** The relationship attributes which include `type`, `source_resource_type`, `target_resource_type` and `action`. */
	export interface GoogleCloudAssetV1p7beta1RelationshipAttributesFormProperties {

		/** The detail of the relationship, e.g. `contains`, `attaches` */
		action: FormControl<string | null | undefined>,

		/** The source asset type. Example: `compute.googleapis.com/Instance` */
		sourceResourceType: FormControl<string | null | undefined>,

		/** The target asset type. Example: `compute.googleapis.com/Disk` */
		targetResourceType: FormControl<string | null | undefined>,

		/** The unique identifier of the relationship type. Example: `INSTANCE_TO_INSTANCEGROUP` */
		type: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudAssetV1p7beta1RelationshipAttributesFormGroup() {
		return new FormGroup<GoogleCloudAssetV1p7beta1RelationshipAttributesFormProperties>({
			action: new FormControl<string | null | undefined>(undefined),
			sourceResourceType: new FormControl<string | null | undefined>(undefined),
			targetResourceType: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A representation of a Google Cloud resource. */
	export interface GoogleCloudAssetV1p7beta1Resource {

		/** The content of the resource, in which some sensitive fields are removed and may not be present. */
		data?: {[id: string]: any };

		/** The URL of the discovery document containing the resource's JSON schema. Example: `https://www.googleapis.com/discovery/v1/apis/compute/v1/rest` This value is unspecified for resources that do not have an API based on a discovery document, such as Cloud Bigtable. */
		discoveryDocumentUri?: string | null;

		/** The JSON schema name listed in the discovery document. Example: `Project` This value is unspecified for resources that do not have an API based on a discovery document, such as Cloud Bigtable. */
		discoveryName?: string | null;

		/** The location of the resource in Google Cloud, such as its zone and region. For more information, see https://cloud.google.com/about/locations/. */
		location?: string | null;

		/** The full name of the immediate parent of this resource. See [Resource Names](https://cloud.google.com/apis/design/resource_names#full_resource_name) for more information. For Google Cloud assets, this value is the parent resource defined in the [Cloud IAM policy hierarchy](https://cloud.google.com/iam/docs/overview#policy_hierarchy). Example: `//cloudresourcemanager.googleapis.com/projects/my_project_123` For third-party assets, this field may be set differently. */
		parent?: string | null;

		/** The REST URL for accessing the resource. An HTTP `GET` request using this URL returns the resource itself. Example: `https://cloudresourcemanager.googleapis.com/v1/projects/my-project-123` This value is unspecified for resources without a REST API. */
		resourceUrl?: string | null;

		/** The API version. Example: `v1` */
		version?: string | null;
	}

	/** A representation of a Google Cloud resource. */
	export interface GoogleCloudAssetV1p7beta1ResourceFormProperties {

		/** The content of the resource, in which some sensitive fields are removed and may not be present. */
		data: FormControl<{[id: string]: any } | null | undefined>,

		/** The URL of the discovery document containing the resource's JSON schema. Example: `https://www.googleapis.com/discovery/v1/apis/compute/v1/rest` This value is unspecified for resources that do not have an API based on a discovery document, such as Cloud Bigtable. */
		discoveryDocumentUri: FormControl<string | null | undefined>,

		/** The JSON schema name listed in the discovery document. Example: `Project` This value is unspecified for resources that do not have an API based on a discovery document, such as Cloud Bigtable. */
		discoveryName: FormControl<string | null | undefined>,

		/** The location of the resource in Google Cloud, such as its zone and region. For more information, see https://cloud.google.com/about/locations/. */
		location: FormControl<string | null | undefined>,

		/** The full name of the immediate parent of this resource. See [Resource Names](https://cloud.google.com/apis/design/resource_names#full_resource_name) for more information. For Google Cloud assets, this value is the parent resource defined in the [Cloud IAM policy hierarchy](https://cloud.google.com/iam/docs/overview#policy_hierarchy). Example: `//cloudresourcemanager.googleapis.com/projects/my_project_123` For third-party assets, this field may be set differently. */
		parent: FormControl<string | null | undefined>,

		/** The REST URL for accessing the resource. An HTTP `GET` request using this URL returns the resource itself. Example: `https://cloudresourcemanager.googleapis.com/v1/projects/my-project-123` This value is unspecified for resources without a REST API. */
		resourceUrl: FormControl<string | null | undefined>,

		/** The API version. Example: `v1` */
		version: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudAssetV1p7beta1ResourceFormGroup() {
		return new FormGroup<GoogleCloudAssetV1p7beta1ResourceFormProperties>({
			data: new FormControl<{[id: string]: any } | null | undefined>(undefined),
			discoveryDocumentUri: new FormControl<string | null | undefined>(undefined),
			discoveryName: new FormControl<string | null | undefined>(undefined),
			location: new FormControl<string | null | undefined>(undefined),
			parent: new FormControl<string | null | undefined>(undefined),
			resourceUrl: new FormControl<string | null | undefined>(undefined),
			version: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** `ServicePerimeter` describes a set of Google Cloud resources which can freely import and export data amongst themselves, but not export outside of the `ServicePerimeter`. If a request with a source within this `ServicePerimeter` has a target outside of the `ServicePerimeter`, the request will be blocked. Otherwise the request is allowed. There are two types of Service Perimeter - Regular and Bridge. Regular Service Perimeters cannot overlap, a single Google Cloud project can only belong to a single regular Service Perimeter. Service Perimeter Bridges can contain only Google Cloud projects as members, a single Google Cloud project may belong to multiple Service Perimeter Bridges. */
	export interface GoogleIdentityAccesscontextmanagerV1ServicePerimeter {

		/** Description of the `ServicePerimeter` and its use. Does not affect behavior. */
		description?: string | null;

		/** Required. Resource name for the ServicePerimeter. The `short_name` component must begin with a letter and only include alphanumeric and '_'. Format: `accessPolicies/{access_policy}/servicePerimeters/{service_perimeter}` */
		name?: string | null;

		/** Perimeter type indicator. A single project is allowed to be a member of single regular perimeter, but multiple service perimeter bridges. A project cannot be a included in a perimeter bridge without being included in regular perimeter. For perimeter bridges, the restricted service list as well as access level lists must be empty. */
		perimeterType?: GoogleIdentityAccesscontextmanagerV1ServicePerimeterPerimeterType | null;

		/** `ServicePerimeterConfig` specifies a set of Google Cloud resources that describe specific Service Perimeter configuration. */
		spec?: GoogleIdentityAccesscontextmanagerV1ServicePerimeterConfig;

		/** `ServicePerimeterConfig` specifies a set of Google Cloud resources that describe specific Service Perimeter configuration. */
		status?: GoogleIdentityAccesscontextmanagerV1ServicePerimeterConfig;

		/** Human readable title. Must be unique within the Policy. */
		title?: string | null;

		/** Use explicit dry run spec flag. Ordinarily, a dry-run spec implicitly exists for all Service Perimeters, and that spec is identical to the status for those Service Perimeters. When this flag is set, it inhibits the generation of the implicit spec, thereby allowing the user to explicitly provide a configuration ("spec") to use in a dry-run version of the Service Perimeter. This allows the user to test changes to the enforced config ("status") without actually enforcing them. This testing is done through analyzing the differences between currently enforced and suggested restrictions. use_explicit_dry_run_spec must bet set to True if any of the fields in the spec are set to non-default values. */
		useExplicitDryRunSpec?: boolean | null;
	}

	/** `ServicePerimeter` describes a set of Google Cloud resources which can freely import and export data amongst themselves, but not export outside of the `ServicePerimeter`. If a request with a source within this `ServicePerimeter` has a target outside of the `ServicePerimeter`, the request will be blocked. Otherwise the request is allowed. There are two types of Service Perimeter - Regular and Bridge. Regular Service Perimeters cannot overlap, a single Google Cloud project can only belong to a single regular Service Perimeter. Service Perimeter Bridges can contain only Google Cloud projects as members, a single Google Cloud project may belong to multiple Service Perimeter Bridges. */
	export interface GoogleIdentityAccesscontextmanagerV1ServicePerimeterFormProperties {

		/** Description of the `ServicePerimeter` and its use. Does not affect behavior. */
		description: FormControl<string | null | undefined>,

		/** Required. Resource name for the ServicePerimeter. The `short_name` component must begin with a letter and only include alphanumeric and '_'. Format: `accessPolicies/{access_policy}/servicePerimeters/{service_perimeter}` */
		name: FormControl<string | null | undefined>,

		/** Perimeter type indicator. A single project is allowed to be a member of single regular perimeter, but multiple service perimeter bridges. A project cannot be a included in a perimeter bridge without being included in regular perimeter. For perimeter bridges, the restricted service list as well as access level lists must be empty. */
		perimeterType: FormControl<GoogleIdentityAccesscontextmanagerV1ServicePerimeterPerimeterType | null | undefined>,

		/** Human readable title. Must be unique within the Policy. */
		title: FormControl<string | null | undefined>,

		/** Use explicit dry run spec flag. Ordinarily, a dry-run spec implicitly exists for all Service Perimeters, and that spec is identical to the status for those Service Perimeters. When this flag is set, it inhibits the generation of the implicit spec, thereby allowing the user to explicitly provide a configuration ("spec") to use in a dry-run version of the Service Perimeter. This allows the user to test changes to the enforced config ("status") without actually enforcing them. This testing is done through analyzing the differences between currently enforced and suggested restrictions. use_explicit_dry_run_spec must bet set to True if any of the fields in the spec are set to non-default values. */
		useExplicitDryRunSpec: FormControl<boolean | null | undefined>,
	}
	export function CreateGoogleIdentityAccesscontextmanagerV1ServicePerimeterFormGroup() {
		return new FormGroup<GoogleIdentityAccesscontextmanagerV1ServicePerimeterFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			perimeterType: new FormControl<GoogleIdentityAccesscontextmanagerV1ServicePerimeterPerimeterType | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
			useExplicitDryRunSpec: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export enum GoogleIdentityAccesscontextmanagerV1ServicePerimeterPerimeterType { PERIMETER_TYPE_REGULAR = 'PERIMETER_TYPE_REGULAR', PERIMETER_TYPE_BRIDGE = 'PERIMETER_TYPE_BRIDGE' }


	/** `ServicePerimeterConfig` specifies a set of Google Cloud resources that describe specific Service Perimeter configuration. */
	export interface GoogleIdentityAccesscontextmanagerV1ServicePerimeterConfig {

		/** A list of `AccessLevel` resource names that allow resources within the `ServicePerimeter` to be accessed from the internet. `AccessLevels` listed must be in the same policy as this `ServicePerimeter`. Referencing a nonexistent `AccessLevel` is a syntax error. If no `AccessLevel` names are listed, resources within the perimeter can only be accessed via Google Cloud calls with request origins within the perimeter. Example: `"accessPolicies/MY_POLICY/accessLevels/MY_LEVEL"`. For Service Perimeter Bridge, must be empty. */
		accessLevels?: Array<string>;

		/** List of EgressPolicies to apply to the perimeter. A perimeter may have multiple EgressPolicies, each of which is evaluated separately. Access is granted if any EgressPolicy grants it. Must be empty for a perimeter bridge. */
		egressPolicies?: Array<GoogleIdentityAccesscontextmanagerV1EgressPolicy>;

		/** List of IngressPolicies to apply to the perimeter. A perimeter may have multiple IngressPolicies, each of which is evaluated separately. Access is granted if any Ingress Policy grants it. Must be empty for a perimeter bridge. */
		ingressPolicies?: Array<GoogleIdentityAccesscontextmanagerV1IngressPolicy>;

		/** A list of Google Cloud resources that are inside of the service perimeter. Currently only projects are allowed. Format: `projects/{project_number}` */
		resources?: Array<string>;

		/** Google Cloud services that are subject to the Service Perimeter restrictions. For example, if `storage.googleapis.com` is specified, access to the storage buckets inside the perimeter must meet the perimeter's access restrictions. */
		restrictedServices?: Array<string>;

		/** Specifies how APIs are allowed to communicate within the Service Perimeter. */
		vpcAccessibleServices?: GoogleIdentityAccesscontextmanagerV1VpcAccessibleServices;
	}

	/** `ServicePerimeterConfig` specifies a set of Google Cloud resources that describe specific Service Perimeter configuration. */
	export interface GoogleIdentityAccesscontextmanagerV1ServicePerimeterConfigFormProperties {
	}
	export function CreateGoogleIdentityAccesscontextmanagerV1ServicePerimeterConfigFormGroup() {
		return new FormGroup<GoogleIdentityAccesscontextmanagerV1ServicePerimeterConfigFormProperties>({
		});

	}


	/** Policy for egress from perimeter. EgressPolicies match requests based on `egress_from` and `egress_to` stanzas. For an EgressPolicy to match, both `egress_from` and `egress_to` stanzas must be matched. If an EgressPolicy matches a request, the request is allowed to span the ServicePerimeter boundary. For example, an EgressPolicy can be used to allow VMs on networks within the ServicePerimeter to access a defined set of projects outside the perimeter in certain contexts (e.g. to read data from a Cloud Storage bucket or query against a BigQuery dataset). EgressPolicies are concerned with the *resources* that a request relates as well as the API services and API actions being used. They do not related to the direction of data movement. More detailed documentation for this concept can be found in the descriptions of EgressFrom and EgressTo. */
	export interface GoogleIdentityAccesscontextmanagerV1EgressPolicy {

		/** Defines the conditions under which an EgressPolicy matches a request. Conditions based on information about the source of the request. Note that if the destination of the request is also protected by a ServicePerimeter, then that ServicePerimeter must have an IngressPolicy which allows access in order for this request to succeed. */
		egressFrom?: GoogleIdentityAccesscontextmanagerV1EgressFrom;

		/** Defines the conditions under which an EgressPolicy matches a request. Conditions are based on information about the ApiOperation intended to be performed on the `resources` specified. Note that if the destination of the request is also protected by a ServicePerimeter, then that ServicePerimeter must have an IngressPolicy which allows access in order for this request to succeed. The request must match `operations` AND `resources` fields in order to be allowed egress out of the perimeter. */
		egressTo?: GoogleIdentityAccesscontextmanagerV1EgressTo;
	}

	/** Policy for egress from perimeter. EgressPolicies match requests based on `egress_from` and `egress_to` stanzas. For an EgressPolicy to match, both `egress_from` and `egress_to` stanzas must be matched. If an EgressPolicy matches a request, the request is allowed to span the ServicePerimeter boundary. For example, an EgressPolicy can be used to allow VMs on networks within the ServicePerimeter to access a defined set of projects outside the perimeter in certain contexts (e.g. to read data from a Cloud Storage bucket or query against a BigQuery dataset). EgressPolicies are concerned with the *resources* that a request relates as well as the API services and API actions being used. They do not related to the direction of data movement. More detailed documentation for this concept can be found in the descriptions of EgressFrom and EgressTo. */
	export interface GoogleIdentityAccesscontextmanagerV1EgressPolicyFormProperties {
	}
	export function CreateGoogleIdentityAccesscontextmanagerV1EgressPolicyFormGroup() {
		return new FormGroup<GoogleIdentityAccesscontextmanagerV1EgressPolicyFormProperties>({
		});

	}


	/** Defines the conditions under which an EgressPolicy matches a request. Conditions based on information about the source of the request. Note that if the destination of the request is also protected by a ServicePerimeter, then that ServicePerimeter must have an IngressPolicy which allows access in order for this request to succeed. */
	export interface GoogleIdentityAccesscontextmanagerV1EgressFrom {

		/** A list of identities that are allowed access through this [EgressPolicy]. Should be in the format of email address. The email address should represent individual user or service account only. */
		identities?: Array<string>;

		/** Specifies the type of identities that are allowed access to outside the perimeter. If left unspecified, then members of `identities` field will be allowed access. */
		identityType?: GoogleIdentityAccesscontextmanagerV1EgressFromIdentityType | null;
	}

	/** Defines the conditions under which an EgressPolicy matches a request. Conditions based on information about the source of the request. Note that if the destination of the request is also protected by a ServicePerimeter, then that ServicePerimeter must have an IngressPolicy which allows access in order for this request to succeed. */
	export interface GoogleIdentityAccesscontextmanagerV1EgressFromFormProperties {

		/** Specifies the type of identities that are allowed access to outside the perimeter. If left unspecified, then members of `identities` field will be allowed access. */
		identityType: FormControl<GoogleIdentityAccesscontextmanagerV1EgressFromIdentityType | null | undefined>,
	}
	export function CreateGoogleIdentityAccesscontextmanagerV1EgressFromFormGroup() {
		return new FormGroup<GoogleIdentityAccesscontextmanagerV1EgressFromFormProperties>({
			identityType: new FormControl<GoogleIdentityAccesscontextmanagerV1EgressFromIdentityType | null | undefined>(undefined),
		});

	}

	export enum GoogleIdentityAccesscontextmanagerV1EgressFromIdentityType { IDENTITY_TYPE_UNSPECIFIED = 'IDENTITY_TYPE_UNSPECIFIED', ANY_IDENTITY = 'ANY_IDENTITY', ANY_USER_ACCOUNT = 'ANY_USER_ACCOUNT', ANY_SERVICE_ACCOUNT = 'ANY_SERVICE_ACCOUNT' }


	/** Defines the conditions under which an EgressPolicy matches a request. Conditions are based on information about the ApiOperation intended to be performed on the `resources` specified. Note that if the destination of the request is also protected by a ServicePerimeter, then that ServicePerimeter must have an IngressPolicy which allows access in order for this request to succeed. The request must match `operations` AND `resources` fields in order to be allowed egress out of the perimeter. */
	export interface GoogleIdentityAccesscontextmanagerV1EgressTo {

		/** A list of external resources that are allowed to be accessed. A request matches if it contains an external resource in this list (Example: s3://bucket/path). Currently '*' is not allowed. */
		externalResources?: Array<string>;

		/** A list of ApiOperations allowed to be performed by the sources specified in the corresponding EgressFrom. A request matches if it uses an operation/service in this list. */
		operations?: Array<GoogleIdentityAccesscontextmanagerV1ApiOperation>;

		/** A list of resources, currently only projects in the form `projects/`, that are allowed to be accessed by sources defined in the corresponding EgressFrom. A request matches if it contains a resource in this list. If `*` is specified for `resources`, then this EgressTo rule will authorize access to all resources outside the perimeter. */
		resources?: Array<string>;
	}

	/** Defines the conditions under which an EgressPolicy matches a request. Conditions are based on information about the ApiOperation intended to be performed on the `resources` specified. Note that if the destination of the request is also protected by a ServicePerimeter, then that ServicePerimeter must have an IngressPolicy which allows access in order for this request to succeed. The request must match `operations` AND `resources` fields in order to be allowed egress out of the perimeter. */
	export interface GoogleIdentityAccesscontextmanagerV1EgressToFormProperties {
	}
	export function CreateGoogleIdentityAccesscontextmanagerV1EgressToFormGroup() {
		return new FormGroup<GoogleIdentityAccesscontextmanagerV1EgressToFormProperties>({
		});

	}


	/** Identification for an API Operation. */
	export interface GoogleIdentityAccesscontextmanagerV1ApiOperation {

		/** API methods or permissions to allow. Method or permission must belong to the service specified by `service_name` field. A single MethodSelector entry with `*` specified for the `method` field will allow all methods AND permissions for the service specified in `service_name`. */
		methodSelectors?: Array<GoogleIdentityAccesscontextmanagerV1MethodSelector>;

		/** The name of the API whose methods or permissions the IngressPolicy or EgressPolicy want to allow. A single ApiOperation with `service_name` field set to `*` will allow all methods AND permissions for all services. */
		serviceName?: string | null;
	}

	/** Identification for an API Operation. */
	export interface GoogleIdentityAccesscontextmanagerV1ApiOperationFormProperties {

		/** The name of the API whose methods or permissions the IngressPolicy or EgressPolicy want to allow. A single ApiOperation with `service_name` field set to `*` will allow all methods AND permissions for all services. */
		serviceName: FormControl<string | null | undefined>,
	}
	export function CreateGoogleIdentityAccesscontextmanagerV1ApiOperationFormGroup() {
		return new FormGroup<GoogleIdentityAccesscontextmanagerV1ApiOperationFormProperties>({
			serviceName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An allowed method or permission of a service specified in ApiOperation. */
	export interface GoogleIdentityAccesscontextmanagerV1MethodSelector {

		/** Value for `method` should be a valid method name for the corresponding `service_name` in ApiOperation. If `*` used as value for `method`, then ALL methods and permissions are allowed. */
		method?: string | null;

		/** Value for `permission` should be a valid Cloud IAM permission for the corresponding `service_name` in ApiOperation. */
		permission?: string | null;
	}

	/** An allowed method or permission of a service specified in ApiOperation. */
	export interface GoogleIdentityAccesscontextmanagerV1MethodSelectorFormProperties {

		/** Value for `method` should be a valid method name for the corresponding `service_name` in ApiOperation. If `*` used as value for `method`, then ALL methods and permissions are allowed. */
		method: FormControl<string | null | undefined>,

		/** Value for `permission` should be a valid Cloud IAM permission for the corresponding `service_name` in ApiOperation. */
		permission: FormControl<string | null | undefined>,
	}
	export function CreateGoogleIdentityAccesscontextmanagerV1MethodSelectorFormGroup() {
		return new FormGroup<GoogleIdentityAccesscontextmanagerV1MethodSelectorFormProperties>({
			method: new FormControl<string | null | undefined>(undefined),
			permission: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Policy for ingress into ServicePerimeter. IngressPolicies match requests based on `ingress_from` and `ingress_to` stanzas. For an ingress policy to match, both the `ingress_from` and `ingress_to` stanzas must be matched. If an IngressPolicy matches a request, the request is allowed through the perimeter boundary from outside the perimeter. For example, access from the internet can be allowed either based on an AccessLevel or, for traffic hosted on Google Cloud, the project of the source network. For access from private networks, using the project of the hosting network is required. Individual ingress policies can be limited by restricting which services and/or actions they match using the `ingress_to` field. */
	export interface GoogleIdentityAccesscontextmanagerV1IngressPolicy {

		/** Defines the conditions under which an IngressPolicy matches a request. Conditions are based on information about the source of the request. The request must satisfy what is defined in `sources` AND identity related fields in order to match. */
		ingressFrom?: GoogleIdentityAccesscontextmanagerV1IngressFrom;

		/** Defines the conditions under which an IngressPolicy matches a request. Conditions are based on information about the ApiOperation intended to be performed on the target resource of the request. The request must satisfy what is defined in `operations` AND `resources` in order to match. */
		ingressTo?: GoogleIdentityAccesscontextmanagerV1IngressTo;
	}

	/** Policy for ingress into ServicePerimeter. IngressPolicies match requests based on `ingress_from` and `ingress_to` stanzas. For an ingress policy to match, both the `ingress_from` and `ingress_to` stanzas must be matched. If an IngressPolicy matches a request, the request is allowed through the perimeter boundary from outside the perimeter. For example, access from the internet can be allowed either based on an AccessLevel or, for traffic hosted on Google Cloud, the project of the source network. For access from private networks, using the project of the hosting network is required. Individual ingress policies can be limited by restricting which services and/or actions they match using the `ingress_to` field. */
	export interface GoogleIdentityAccesscontextmanagerV1IngressPolicyFormProperties {
	}
	export function CreateGoogleIdentityAccesscontextmanagerV1IngressPolicyFormGroup() {
		return new FormGroup<GoogleIdentityAccesscontextmanagerV1IngressPolicyFormProperties>({
		});

	}


	/** Defines the conditions under which an IngressPolicy matches a request. Conditions are based on information about the source of the request. The request must satisfy what is defined in `sources` AND identity related fields in order to match. */
	export interface GoogleIdentityAccesscontextmanagerV1IngressFrom {

		/** A list of identities that are allowed access through this ingress policy. Should be in the format of email address. The email address should represent individual user or service account only. */
		identities?: Array<string>;

		/** Specifies the type of identities that are allowed access from outside the perimeter. If left unspecified, then members of `identities` field will be allowed access. */
		identityType?: GoogleIdentityAccesscontextmanagerV1EgressFromIdentityType | null;

		/** Sources that this IngressPolicy authorizes access from. */
		sources?: Array<GoogleIdentityAccesscontextmanagerV1IngressSource>;
	}

	/** Defines the conditions under which an IngressPolicy matches a request. Conditions are based on information about the source of the request. The request must satisfy what is defined in `sources` AND identity related fields in order to match. */
	export interface GoogleIdentityAccesscontextmanagerV1IngressFromFormProperties {

		/** Specifies the type of identities that are allowed access from outside the perimeter. If left unspecified, then members of `identities` field will be allowed access. */
		identityType: FormControl<GoogleIdentityAccesscontextmanagerV1EgressFromIdentityType | null | undefined>,
	}
	export function CreateGoogleIdentityAccesscontextmanagerV1IngressFromFormGroup() {
		return new FormGroup<GoogleIdentityAccesscontextmanagerV1IngressFromFormProperties>({
			identityType: new FormControl<GoogleIdentityAccesscontextmanagerV1EgressFromIdentityType | null | undefined>(undefined),
		});

	}


	/** The source that IngressPolicy authorizes access from. */
	export interface GoogleIdentityAccesscontextmanagerV1IngressSource {

		/** An AccessLevel resource name that allow resources within the ServicePerimeters to be accessed from the internet. AccessLevels listed must be in the same policy as this ServicePerimeter. Referencing a nonexistent AccessLevel will cause an error. If no AccessLevel names are listed, resources within the perimeter can only be accessed via Google Cloud calls with request origins within the perimeter. Example: `accessPolicies/MY_POLICY/accessLevels/MY_LEVEL`. If a single `*` is specified for `access_level`, then all IngressSources will be allowed. */
		accessLevel?: string | null;

		/** A Google Cloud resource that is allowed to ingress the perimeter. Requests from these resources will be allowed to access perimeter data. Currently only projects are allowed. Format: `projects/{project_number}` The project may be in any Google Cloud organization, not just the organization that the perimeter is defined in. `*` is not allowed, the case of allowing all Google Cloud resources only is not supported. */
		resource?: string | null;
	}

	/** The source that IngressPolicy authorizes access from. */
	export interface GoogleIdentityAccesscontextmanagerV1IngressSourceFormProperties {

		/** An AccessLevel resource name that allow resources within the ServicePerimeters to be accessed from the internet. AccessLevels listed must be in the same policy as this ServicePerimeter. Referencing a nonexistent AccessLevel will cause an error. If no AccessLevel names are listed, resources within the perimeter can only be accessed via Google Cloud calls with request origins within the perimeter. Example: `accessPolicies/MY_POLICY/accessLevels/MY_LEVEL`. If a single `*` is specified for `access_level`, then all IngressSources will be allowed. */
		accessLevel: FormControl<string | null | undefined>,

		/** A Google Cloud resource that is allowed to ingress the perimeter. Requests from these resources will be allowed to access perimeter data. Currently only projects are allowed. Format: `projects/{project_number}` The project may be in any Google Cloud organization, not just the organization that the perimeter is defined in. `*` is not allowed, the case of allowing all Google Cloud resources only is not supported. */
		resource: FormControl<string | null | undefined>,
	}
	export function CreateGoogleIdentityAccesscontextmanagerV1IngressSourceFormGroup() {
		return new FormGroup<GoogleIdentityAccesscontextmanagerV1IngressSourceFormProperties>({
			accessLevel: new FormControl<string | null | undefined>(undefined),
			resource: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Defines the conditions under which an IngressPolicy matches a request. Conditions are based on information about the ApiOperation intended to be performed on the target resource of the request. The request must satisfy what is defined in `operations` AND `resources` in order to match. */
	export interface GoogleIdentityAccesscontextmanagerV1IngressTo {

		/** A list of ApiOperations allowed to be performed by the sources specified in corresponding IngressFrom in this ServicePerimeter. */
		operations?: Array<GoogleIdentityAccesscontextmanagerV1ApiOperation>;

		/** A list of resources, currently only projects in the form `projects/`, protected by this ServicePerimeter that are allowed to be accessed by sources defined in the corresponding IngressFrom. If a single `*` is specified, then access to all resources inside the perimeter are allowed. */
		resources?: Array<string>;
	}

	/** Defines the conditions under which an IngressPolicy matches a request. Conditions are based on information about the ApiOperation intended to be performed on the target resource of the request. The request must satisfy what is defined in `operations` AND `resources` in order to match. */
	export interface GoogleIdentityAccesscontextmanagerV1IngressToFormProperties {
	}
	export function CreateGoogleIdentityAccesscontextmanagerV1IngressToFormGroup() {
		return new FormGroup<GoogleIdentityAccesscontextmanagerV1IngressToFormProperties>({
		});

	}


	/** Specifies how APIs are allowed to communicate within the Service Perimeter. */
	export interface GoogleIdentityAccesscontextmanagerV1VpcAccessibleServices {

		/** The list of APIs usable within the Service Perimeter. Must be empty unless 'enable_restriction' is True. You can specify a list of individual services, as well as include the 'RESTRICTED-SERVICES' value, which automatically includes all of the services protected by the perimeter. */
		allowedServices?: Array<string>;

		/** Whether to restrict API calls within the Service Perimeter to the list of APIs specified in 'allowed_services'. */
		enableRestriction?: boolean | null;
	}

	/** Specifies how APIs are allowed to communicate within the Service Perimeter. */
	export interface GoogleIdentityAccesscontextmanagerV1VpcAccessibleServicesFormProperties {

		/** Whether to restrict API calls within the Service Perimeter to the list of APIs specified in 'allowed_services'. */
		enableRestriction: FormControl<boolean | null | undefined>,
	}
	export function CreateGoogleIdentityAccesscontextmanagerV1VpcAccessibleServicesFormGroup() {
		return new FormGroup<GoogleIdentityAccesscontextmanagerV1VpcAccessibleServicesFormProperties>({
			enableRestriction: new FormControl<boolean | null | undefined>(undefined),
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

		/** The normal response of the operation in case of success. If the original method returns no data on success, such as `Delete`, the response is `google.protobuf.Empty`. If the original method is standard `Get`/`Create`/`Update`, the response should be the resource. For other methods, the response should have the type `XxxResponse`, where `Xxx` is the original method name. For example, if the original method name is `TakeSnapshot()`, the inferred response type is `TakeSnapshotResponse`. */
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

		/** The normal response of the operation in case of success. If the original method returns no data on success, such as `Delete`, the response is `google.protobuf.Empty`. If the original method is standard `Get`/`Create`/`Update`, the response should be the resource. For other methods, the response should have the type `XxxResponse`, where `Xxx` is the original method name. For example, if the original method name is `TakeSnapshot()`, the inferred response type is `TakeSnapshotResponse`. */
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

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Analyzes IAM policies to answer which identities have what accesses on which resources.
		 * Get v1p4beta1/{parent}:analyzeIamPolicy
		 * @param {string} parent Required. The relative name of the root asset. Only resources and IAM policies within the parent will be analyzed. This can only be an organization number (such as "organizations/123"), a folder number (such as "folders/123"), a project ID (such as "projects/my-project-id"), or a project number (such as "projects/12345"). To know how to get organization id, visit [here ](https://cloud.google.com/resource-manager/docs/creating-managing-organization#retrieving_your_organization_id). To know how to get folder or project id, visit [here ](https://cloud.google.com/resource-manager/docs/creating-managing-folders#viewing_or_listing_folders_and_projects).
		 * @param {Array<string>} analysisQuery_accessSelector_permissions Optional. The permissions to appear in result.
		 * @param {Array<string>} analysisQuery_accessSelector_roles Optional. The roles to appear in result.
		 * @param {string} analysisQuery_identitySelector_identity Required. The identity appear in the form of members in [IAM policy binding](https://cloud.google.com/iam/reference/rest/v1/Binding). The examples of supported forms are: "user:mike@example.com", "group:admins@example.com", "domain:google.com", "serviceAccount:my-project-id@appspot.gserviceaccount.com". Notice that wildcard characters (such as * and ?) are not supported. You must give a specific identity.
		 * @param {string} analysisQuery_resourceSelector_fullResourceName Required. The [full resource name](https://cloud.google.com/asset-inventory/docs/resource-name-format) of a resource of [supported resource types](https://cloud.google.com/asset-inventory/docs/supported-asset-types#analyzable_asset_types).
		 * @param {boolean} options_analyzeServiceAccountImpersonation Optional. If true, the response will include access analysis from identities to resources via service account impersonation. This is a very expensive operation, because many derived queries will be executed. We highly recommend you use AssetService.ExportIamPolicyAnalysis rpc instead. For example, if the request analyzes for which resources user A has permission P, and there's an IAM policy states user A has iam.serviceAccounts.getAccessToken permission to a service account SA, and there's another IAM policy states service account SA has permission P to a GCP folder F, then user A potentially has access to the GCP folder F. And those advanced analysis results will be included in AnalyzeIamPolicyResponse.service_account_impersonation_analysis. Another example, if the request analyzes for who has permission P to a GCP folder F, and there's an IAM policy states user A has iam.serviceAccounts.actAs permission to a service account SA, and there's another IAM policy states service account SA has permission P to the GCP folder F, then user A potentially has access to the GCP folder F. And those advanced analysis results will be included in AnalyzeIamPolicyResponse.service_account_impersonation_analysis. Default is false.
		 * @param {string} options_executionTimeout Optional. Amount of time executable has to complete. See JSON representation of [Duration](https://developers.google.com/protocol-buffers/docs/proto3#json). If this field is set with a value less than the RPC deadline, and the execution of your query hasn't finished in the specified execution timeout, you will get a response with partial result. Otherwise, your query's execution will continue until the RPC deadline. If it's not finished until then, you will get a DEADLINE_EXCEEDED error. Default is empty.
		 * @param {boolean} options_expandGroups Optional. If true, the identities section of the result will expand any Google groups appearing in an IAM policy binding. If identity_selector is specified, the identity in the result will be determined by the selector, and this flag will have no effect. Default is false.
		 * @param {boolean} options_expandResources Optional. If true, the resource section of the result will expand any resource attached to an IAM policy to include resources lower in the resource hierarchy. For example, if the request analyzes for which resources user A has permission P, and the results include an IAM policy with P on a GCP folder, the results will also include resources in that folder with permission P. If resource_selector is specified, the resource section of the result will be determined by the selector, and this flag will have no effect. Default is false.
		 * @param {boolean} options_expandRoles Optional. If true, the access section of result will expand any roles appearing in IAM policy bindings to include their permissions. If access_selector is specified, the access section of the result will be determined by the selector, and this flag will have no effect. Default is false.
		 * @param {boolean} options_outputGroupEdges Optional. If true, the result will output group identity edges, starting from the binding's group members, to any expanded identities. Default is false.
		 * @param {boolean} options_outputResourceEdges Optional. If true, the result will output resource edges, starting from the policy attached resource, to any expanded resources. Default is false.
		 * @return {AnalyzeIamPolicyResponse} Successful response
		 */
		Cloudasset_analyzeIamPolicy(parent: string, analysisQuery_accessSelector_permissions: Array<string> | null | undefined, analysisQuery_accessSelector_roles: Array<string> | null | undefined, analysisQuery_identitySelector_identity: string | null | undefined, analysisQuery_resourceSelector_fullResourceName: string | null | undefined, options_analyzeServiceAccountImpersonation: boolean | null | undefined, options_executionTimeout: string | null | undefined, options_expandGroups: boolean | null | undefined, options_expandResources: boolean | null | undefined, options_expandRoles: boolean | null | undefined, options_outputGroupEdges: boolean | null | undefined, options_outputResourceEdges: boolean | null | undefined): Observable<AnalyzeIamPolicyResponse> {
			return this.http.get<AnalyzeIamPolicyResponse>(this.baseUri + 'v1p4beta1/' + (parent == null ? '' : encodeURIComponent(parent)) + ':analyzeIamPolicy&' + analysisQuery_accessSelector_permissions?.map(z => `analysisQuery.accessSelector.permissions=${encodeURIComponent(z)}`).join('&') + '&' + analysisQuery_accessSelector_roles?.map(z => `analysisQuery.accessSelector.roles=${encodeURIComponent(z)}`).join('&') + '&analysisQuery_identitySelector_identity=' + (analysisQuery_identitySelector_identity == null ? '' : encodeURIComponent(analysisQuery_identitySelector_identity)) + '&analysisQuery_resourceSelector_fullResourceName=' + (analysisQuery_resourceSelector_fullResourceName == null ? '' : encodeURIComponent(analysisQuery_resourceSelector_fullResourceName)) + '&options_analyzeServiceAccountImpersonation=' + options_analyzeServiceAccountImpersonation + '&options_executionTimeout=' + (options_executionTimeout == null ? '' : encodeURIComponent(options_executionTimeout)) + '&options_expandGroups=' + options_expandGroups + '&options_expandResources=' + options_expandResources + '&options_expandRoles=' + options_expandRoles + '&options_outputGroupEdges=' + options_outputGroupEdges + '&options_outputResourceEdges=' + options_outputResourceEdges, {});
		}

		/**
		 * Exports the answers of which identities have what accesses on which resources to a Google Cloud Storage destination. The output format is the JSON format that represents a AnalyzeIamPolicyResponse in the JSON format. This method implements the google.longrunning.Operation, which allows you to keep track of the export. We recommend intervals of at least 2 seconds with exponential retry to poll the export operation result. The metadata contains the request to help callers to map responses to requests.
		 * Post v1p4beta1/{parent}:exportIamPolicyAnalysis
		 * @param {string} parent Required. The relative name of the root asset. Only resources and IAM policies within the parent will be analyzed. This can only be an organization number (such as "organizations/123"), a folder number (such as "folders/123"), a project ID (such as "projects/my-project-id"), or a project number (such as "projects/12345"). To know how to get organization id, visit [here ](https://cloud.google.com/resource-manager/docs/creating-managing-organization#retrieving_your_organization_id). To know how to get folder or project id, visit [here ](https://cloud.google.com/resource-manager/docs/creating-managing-folders#viewing_or_listing_folders_and_projects).
		 * @return {Operation} Successful response
		 */
		Cloudasset_exportIamPolicyAnalysis(parent: string, requestBody: ExportIamPolicyAnalysisRequest): Observable<Operation> {
			return this.http.post<Operation>(this.baseUri + 'v1p4beta1/' + (parent == null ? '' : encodeURIComponent(parent)) + ':exportIamPolicyAnalysis', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

}

