import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** Represents the metadata of the long-running operation. */
	export interface GoogleCloudCommonOperationMetadata {

		/** Output only. API version used to start the operation. */
		apiVersion?: string | null;

		/** Output only. Identifies whether the user has requested cancellation of the operation. Operations that have been cancelled successfully have Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`. */
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
	export interface GoogleCloudCommonOperationMetadataFormProperties {

		/** Output only. API version used to start the operation. */
		apiVersion: FormControl<string | null | undefined>,

		/** Output only. Identifies whether the user has requested cancellation of the operation. Operations that have been cancelled successfully have Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`. */
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
	export function CreateGoogleCloudCommonOperationMetadataFormGroup() {
		return new FormGroup<GoogleCloudCommonOperationMetadataFormProperties>({
			apiVersion: new FormControl<string | null | undefined>(undefined),
			cancelRequested: new FormControl<boolean | null | undefined>(undefined),
			createTime: new FormControl<string | null | undefined>(undefined),
			endTime: new FormControl<string | null | undefined>(undefined),
			statusDetail: new FormControl<string | null | undefined>(undefined),
			target: new FormControl<string | null | undefined>(undefined),
			verb: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Audit log information specific to Cloud IAM admin APIs. This message is serialized as an `Any` type in the `ServiceData` message of an `AuditLog` message. */
	export interface GoogleIamAdminV1AuditData {

		/** A PermissionDelta message to record the added_permissions and removed_permissions inside a role. */
		permissionDelta?: GoogleIamAdminV1AuditDataPermissionDelta;
	}

	/** Audit log information specific to Cloud IAM admin APIs. This message is serialized as an `Any` type in the `ServiceData` message of an `AuditLog` message. */
	export interface GoogleIamAdminV1AuditDataFormProperties {
	}
	export function CreateGoogleIamAdminV1AuditDataFormGroup() {
		return new FormGroup<GoogleIamAdminV1AuditDataFormProperties>({
		});

	}


	/** A PermissionDelta message to record the added_permissions and removed_permissions inside a role. */
	export interface GoogleIamAdminV1AuditDataPermissionDelta {

		/** Added permissions. */
		addedPermissions?: Array<string>;

		/** Removed permissions. */
		removedPermissions?: Array<string>;
	}

	/** A PermissionDelta message to record the added_permissions and removed_permissions inside a role. */
	export interface GoogleIamAdminV1AuditDataPermissionDeltaFormProperties {
	}
	export function CreateGoogleIamAdminV1AuditDataPermissionDeltaFormGroup() {
		return new FormGroup<GoogleIamAdminV1AuditDataPermissionDeltaFormProperties>({
		});

	}


	/** One delta entry for Binding. Each individual change (only one member in each entry) to a binding will be a separate entry. */
	export interface GoogleIamV1BindingDelta {

		/** The action that was performed on a Binding. Required */
		action?: GoogleIamV1BindingDeltaAction | null;

		/** Represents a textual expression in the Common Expression Language (CEL) syntax. CEL is a C-like expression language. The syntax and semantics of CEL are documented at https://github.com/google/cel-spec. Example (Comparison): title: "Summary size limit" description: "Determines if a summary is less than 100 chars" expression: "document.summary.size() < 100" Example (Equality): title: "Requestor is owner" description: "Determines if requestor is the document owner" expression: "document.owner == request.auth.claims.email" Example (Logic): title: "Public documents" description: "Determine whether the document should be publicly visible" expression: "document.type != 'private' && document.type != 'internal'" Example (Data Manipulation): title: "Notification string" description: "Create a notification string with a timestamp." expression: "'New message received at ' + string(document.create_time)" The exact variables and functions that may be referenced within an expression are determined by the service that evaluates it. See the service documentation for additional information. */
		condition?: GoogleTypeExpr;

		/** A single identity requesting access for a Google Cloud resource. Follows the same format of Binding.members. Required */
		member?: string | null;

		/** Role that is assigned to `members`. For example, `roles/viewer`, `roles/editor`, or `roles/owner`. Required */
		role?: string | null;
	}

	/** One delta entry for Binding. Each individual change (only one member in each entry) to a binding will be a separate entry. */
	export interface GoogleIamV1BindingDeltaFormProperties {

		/** The action that was performed on a Binding. Required */
		action: FormControl<GoogleIamV1BindingDeltaAction | null | undefined>,

		/** A single identity requesting access for a Google Cloud resource. Follows the same format of Binding.members. Required */
		member: FormControl<string | null | undefined>,

		/** Role that is assigned to `members`. For example, `roles/viewer`, `roles/editor`, or `roles/owner`. Required */
		role: FormControl<string | null | undefined>,
	}
	export function CreateGoogleIamV1BindingDeltaFormGroup() {
		return new FormGroup<GoogleIamV1BindingDeltaFormProperties>({
			action: new FormControl<GoogleIamV1BindingDeltaAction | null | undefined>(undefined),
			member: new FormControl<string | null | undefined>(undefined),
			role: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum GoogleIamV1BindingDeltaAction { ACTION_UNSPECIFIED = 'ACTION_UNSPECIFIED', ADD = 'ADD', REMOVE = 'REMOVE' }


	/** Represents a textual expression in the Common Expression Language (CEL) syntax. CEL is a C-like expression language. The syntax and semantics of CEL are documented at https://github.com/google/cel-spec. Example (Comparison): title: "Summary size limit" description: "Determines if a summary is less than 100 chars" expression: "document.summary.size() < 100" Example (Equality): title: "Requestor is owner" description: "Determines if requestor is the document owner" expression: "document.owner == request.auth.claims.email" Example (Logic): title: "Public documents" description: "Determine whether the document should be publicly visible" expression: "document.type != 'private' && document.type != 'internal'" Example (Data Manipulation): title: "Notification string" description: "Create a notification string with a timestamp." expression: "'New message received at ' + string(document.create_time)" The exact variables and functions that may be referenced within an expression are determined by the service that evaluates it. See the service documentation for additional information. */
	export interface GoogleTypeExpr {

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
	export interface GoogleTypeExprFormProperties {

		/** Optional. Description of the expression. This is a longer text which describes the expression, e.g. when hovered over it in a UI. */
		description: FormControl<string | null | undefined>,

		/** Textual representation of an expression in Common Expression Language syntax. */
		expression: FormControl<string | null | undefined>,

		/** Optional. String indicating the location of the expression for error reporting, e.g. a file name and a position in the file. */
		location: FormControl<string | null | undefined>,

		/** Optional. Title for the expression, i.e. a short string describing its purpose. This can be used e.g. in UIs which allow to enter the expression. */
		title: FormControl<string | null | undefined>,
	}
	export function CreateGoogleTypeExprFormGroup() {
		return new FormGroup<GoogleTypeExprFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			expression: new FormControl<string | null | undefined>(undefined),
			location: new FormControl<string | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Audit log information specific to Cloud IAM. This message is serialized as an `Any` type in the `ServiceData` message of an `AuditLog` message. */
	export interface GoogleIamV1LoggingAuditData {

		/** The difference delta between two policies. */
		policyDelta?: GoogleIamV1PolicyDelta;
	}

	/** Audit log information specific to Cloud IAM. This message is serialized as an `Any` type in the `ServiceData` message of an `AuditLog` message. */
	export interface GoogleIamV1LoggingAuditDataFormProperties {
	}
	export function CreateGoogleIamV1LoggingAuditDataFormGroup() {
		return new FormGroup<GoogleIamV1LoggingAuditDataFormProperties>({
		});

	}


	/** The difference delta between two policies. */
	export interface GoogleIamV1PolicyDelta {

		/** The delta for Bindings between two policies. */
		bindingDeltas?: Array<GoogleIamV1BindingDelta>;
	}

	/** The difference delta between two policies. */
	export interface GoogleIamV1PolicyDeltaFormProperties {
	}
	export function CreateGoogleIamV1PolicyDeltaFormGroup() {
		return new FormGroup<GoogleIamV1PolicyDeltaFormProperties>({
		});

	}


	/** Metadata for long-running WorkloadIdentityPool operations. */
	export interface GoogleIamV1betaWorkloadIdentityPoolOperationMetadata {
	}

	/** Metadata for long-running WorkloadIdentityPool operations. */
	export interface GoogleIamV1betaWorkloadIdentityPoolOperationMetadataFormProperties {
	}
	export function CreateGoogleIamV1betaWorkloadIdentityPoolOperationMetadataFormGroup() {
		return new FormGroup<GoogleIamV1betaWorkloadIdentityPoolOperationMetadataFormProperties>({
		});

	}


	/** A deny rule in an IAM deny policy. */
	export interface GoogleIamV2betaDenyRule {

		/** Represents a textual expression in the Common Expression Language (CEL) syntax. CEL is a C-like expression language. The syntax and semantics of CEL are documented at https://github.com/google/cel-spec. Example (Comparison): title: "Summary size limit" description: "Determines if a summary is less than 100 chars" expression: "document.summary.size() < 100" Example (Equality): title: "Requestor is owner" description: "Determines if requestor is the document owner" expression: "document.owner == request.auth.claims.email" Example (Logic): title: "Public documents" description: "Determine whether the document should be publicly visible" expression: "document.type != 'private' && document.type != 'internal'" Example (Data Manipulation): title: "Notification string" description: "Create a notification string with a timestamp." expression: "'New message received at ' + string(document.create_time)" The exact variables and functions that may be referenced within an expression are determined by the service that evaluates it. See the service documentation for additional information. */
		denialCondition?: GoogleTypeExpr;

		/** The permissions that are explicitly denied by this rule. Each permission uses the format `{service_fqdn}/{resource}.{verb}`, where `{service_fqdn}` is the fully qualified domain name for the service. For example, `iam.googleapis.com/roles.list`. */
		deniedPermissions?: Array<string>;

		/** The identities that are prevented from using one or more permissions on Google Cloud resources. This field can contain the following values: * `principal://goog/subject/{email_id}`: A specific Google Account. Includes Gmail, Cloud Identity, and Google Workspace user accounts. For example, `principal://goog/subject/alice@example.com`. * `principal://iam.googleapis.com/projects/-/serviceAccounts/{service_account_id}`: A Google Cloud service account. For example, `principal://iam.googleapis.com/projects/-/serviceAccounts/my-service-account@iam.gserviceaccount.com`. * `principalSet://goog/group/{group_id}`: A Google group. For example, `principalSet://goog/group/admins@example.com`. * `principalSet://goog/public:all`: A special identifier that represents any principal that is on the internet, even if they do not have a Google Account or are not logged in. * `principalSet://goog/cloudIdentityCustomerId/{customer_id}`: All of the principals associated with the specified Google Workspace or Cloud Identity customer ID. For example, `principalSet://goog/cloudIdentityCustomerId/C01Abc35`. * `principal://iam.googleapis.com/locations/global/workforcePools/{pool_id}/subject/{subject_attribute_value}`: A single identity in a workforce identity pool. * `principalSet://iam.googleapis.com/locations/global/workforcePools/{pool_id}/group/{group_id}`: All workforce identities in a group. * `principalSet://iam.googleapis.com/locations/global/workforcePools/{pool_id}/attribute.{attribute_name}/{attribute_value}`: All workforce identities with a specific attribute value. * `principalSet://iam.googleapis.com/locations/global/workforcePools/{pool_id}/*`: All identities in a workforce identity pool. * `principal://iam.googleapis.com/projects/{project_number}/locations/global/workloadIdentityPools/{pool_id}/subject/{subject_attribute_value}`: A single identity in a workload identity pool. * `principalSet://iam.googleapis.com/projects/{project_number}/locations/global/workloadIdentityPools/{pool_id}/group/{group_id}`: A workload identity pool group. * `principalSet://iam.googleapis.com/projects/{project_number}/locations/global/workloadIdentityPools/{pool_id}/attribute.{attribute_name}/{attribute_value}`: All identities in a workload identity pool with a certain attribute. * `principalSet://iam.googleapis.com/projects/{project_number}/locations/global/workloadIdentityPools/{pool_id}/*`: All identities in a workload identity pool. * `deleted:principal://goog/subject/{email_id}?uid={uid}`: A specific Google Account that was deleted recently. For example, `deleted:principal://goog/subject/alice@example.com?uid=1234567890`. If the Google Account is recovered, this identifier reverts to the standard identifier for a Google Account. * `deleted:principalSet://goog/group/{group_id}?uid={uid}`: A Google group that was deleted recently. For example, `deleted:principalSet://goog/group/admins@example.com?uid=1234567890`. If the Google group is restored, this identifier reverts to the standard identifier for a Google group. * `deleted:principal://iam.googleapis.com/projects/-/serviceAccounts/{service_account_id}?uid={uid}`: A Google Cloud service account that was deleted recently. For example, `deleted:principal://iam.googleapis.com/projects/-/serviceAccounts/my-service-account@iam.gserviceaccount.com?uid=1234567890`. If the service account is undeleted, this identifier reverts to the standard identifier for a service account. * `deleted:principal://iam.googleapis.com/locations/global/workforcePools/{pool_id}/subject/{subject_attribute_value}`: Deleted single identity in a workforce identity pool. For example, `deleted:principal://iam.googleapis.com/locations/global/workforcePools/my-pool-id/subject/my-subject-attribute-value`. */
		deniedPrincipals?: Array<string>;

		/** Specifies the permissions that this rule excludes from the set of denied permissions given by `denied_permissions`. If a permission appears in `denied_permissions` _and_ in `exception_permissions` then it will _not_ be denied. The excluded permissions can be specified using the same syntax as `denied_permissions`. */
		exceptionPermissions?: Array<string>;

		/** The identities that are excluded from the deny rule, even if they are listed in the `denied_principals`. For example, you could add a Google group to the `denied_principals`, then exclude specific users who belong to that group. This field can contain the same values as the `denied_principals` field, excluding `principalSet://goog/public:all`, which represents all users on the internet. */
		exceptionPrincipals?: Array<string>;
	}

	/** A deny rule in an IAM deny policy. */
	export interface GoogleIamV2betaDenyRuleFormProperties {
	}
	export function CreateGoogleIamV2betaDenyRuleFormGroup() {
		return new FormGroup<GoogleIamV2betaDenyRuleFormProperties>({
		});

	}


	/** Response message for `ListPolicies`. */
	export interface GoogleIamV2betaListPoliciesResponse {

		/** A page token that you can use in a ListPoliciesRequest to retrieve the next page. If this field is omitted, there are no additional pages. */
		nextPageToken?: string | null;

		/** Metadata for the policies that are attached to the resource. */
		policies?: Array<GoogleIamV2betaPolicy>;
	}

	/** Response message for `ListPolicies`. */
	export interface GoogleIamV2betaListPoliciesResponseFormProperties {

		/** A page token that you can use in a ListPoliciesRequest to retrieve the next page. If this field is omitted, there are no additional pages. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateGoogleIamV2betaListPoliciesResponseFormGroup() {
		return new FormGroup<GoogleIamV2betaListPoliciesResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Data for an IAM policy. */
	export interface GoogleIamV2betaPolicy {

		/** A key-value map to store arbitrary metadata for the `Policy`. Keys can be up to 63 characters. Values can be up to 255 characters. */
		annotations?: {[id: string]: string };

		/** Output only. The time when the `Policy` was created. */
		createTime?: string | null;

		/** Output only. The time when the `Policy` was deleted. Empty if the policy is not deleted. */
		deleteTime?: string | null;

		/** A user-specified description of the `Policy`. This value can be up to 63 characters. */
		displayName?: string | null;

		/** An opaque tag that identifies the current version of the `Policy`. IAM uses this value to help manage concurrent updates, so they do not cause one update to be overwritten by another. If this field is present in a CreatePolicyRequest, the value is ignored. */
		etag?: string | null;

		/** Output only. The kind of the `Policy`. Always contains the value `DenyPolicy`. */
		kind?: string | null;

		/** Immutable. The resource name of the `Policy`, which must be unique. Format: `policies/{attachment_point}/denypolicies/{policy_id}` The attachment point is identified by its URL-encoded full resource name, which means that the forward-slash character, `/`, must be written as `%2F`. For example, `policies/cloudresourcemanager.googleapis.com%2Fprojects%2Fmy-project/denypolicies/my-deny-policy`. For organizations and folders, use the numeric ID in the full resource name. For projects, requests can use the alphanumeric or the numeric ID. Responses always contain the numeric ID. */
		name?: string | null;

		/** A list of rules that specify the behavior of the `Policy`. All of the rules should be of the `kind` specified in the `Policy`. */
		rules?: Array<GoogleIamV2betaPolicyRule>;

		/** Immutable. The globally unique ID of the `Policy`. Assigned automatically when the `Policy` is created. */
		uid?: string | null;

		/** Output only. The time when the `Policy` was last updated. */
		updateTime?: string | null;
	}

	/** Data for an IAM policy. */
	export interface GoogleIamV2betaPolicyFormProperties {

		/** A key-value map to store arbitrary metadata for the `Policy`. Keys can be up to 63 characters. Values can be up to 255 characters. */
		annotations: FormControl<{[id: string]: string } | null | undefined>,

		/** Output only. The time when the `Policy` was created. */
		createTime: FormControl<string | null | undefined>,

		/** Output only. The time when the `Policy` was deleted. Empty if the policy is not deleted. */
		deleteTime: FormControl<string | null | undefined>,

		/** A user-specified description of the `Policy`. This value can be up to 63 characters. */
		displayName: FormControl<string | null | undefined>,

		/** An opaque tag that identifies the current version of the `Policy`. IAM uses this value to help manage concurrent updates, so they do not cause one update to be overwritten by another. If this field is present in a CreatePolicyRequest, the value is ignored. */
		etag: FormControl<string | null | undefined>,

		/** Output only. The kind of the `Policy`. Always contains the value `DenyPolicy`. */
		kind: FormControl<string | null | undefined>,

		/** Immutable. The resource name of the `Policy`, which must be unique. Format: `policies/{attachment_point}/denypolicies/{policy_id}` The attachment point is identified by its URL-encoded full resource name, which means that the forward-slash character, `/`, must be written as `%2F`. For example, `policies/cloudresourcemanager.googleapis.com%2Fprojects%2Fmy-project/denypolicies/my-deny-policy`. For organizations and folders, use the numeric ID in the full resource name. For projects, requests can use the alphanumeric or the numeric ID. Responses always contain the numeric ID. */
		name: FormControl<string | null | undefined>,

		/** Immutable. The globally unique ID of the `Policy`. Assigned automatically when the `Policy` is created. */
		uid: FormControl<string | null | undefined>,

		/** Output only. The time when the `Policy` was last updated. */
		updateTime: FormControl<string | null | undefined>,
	}
	export function CreateGoogleIamV2betaPolicyFormGroup() {
		return new FormGroup<GoogleIamV2betaPolicyFormProperties>({
			annotations: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			createTime: new FormControl<string | null | undefined>(undefined),
			deleteTime: new FormControl<string | null | undefined>(undefined),
			displayName: new FormControl<string | null | undefined>(undefined),
			etag: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			uid: new FormControl<string | null | undefined>(undefined),
			updateTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A single rule in a `Policy`. */
	export interface GoogleIamV2betaPolicyRule {

		/** A deny rule in an IAM deny policy. */
		denyRule?: GoogleIamV2betaDenyRule;

		/** A user-specified description of the rule. This value can be up to 256 characters. */
		description?: string | null;
	}

	/** A single rule in a `Policy`. */
	export interface GoogleIamV2betaPolicyRuleFormProperties {

		/** A user-specified description of the rule. This value can be up to 256 characters. */
		description: FormControl<string | null | undefined>,
	}
	export function CreateGoogleIamV2betaPolicyRuleFormGroup() {
		return new FormGroup<GoogleIamV2betaPolicyRuleFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Metadata for long-running `Policy` operations. */
	export interface GoogleIamV2betaPolicyOperationMetadata {

		/** Timestamp when the `google.longrunning.Operation` was created. */
		createTime?: string | null;
	}

	/** Metadata for long-running `Policy` operations. */
	export interface GoogleIamV2betaPolicyOperationMetadataFormProperties {

		/** Timestamp when the `google.longrunning.Operation` was created. */
		createTime: FormControl<string | null | undefined>,
	}
	export function CreateGoogleIamV2betaPolicyOperationMetadataFormGroup() {
		return new FormGroup<GoogleIamV2betaPolicyOperationMetadataFormProperties>({
			createTime: new FormControl<string | null | undefined>(undefined),
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

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Deletes a policy. This action is permanent.
		 * Delete v2beta/{name}
		 * @param {string} name Required. The resource name of the policy to delete. Format: `policies/{attachment_point}/denypolicies/{policy_id}` Use the URL-encoded full resource name, which means that the forward-slash character, `/`, must be written as `%2F`. For example, `policies/cloudresourcemanager.googleapis.com%2Fprojects%2Fmy-project/denypolicies/my-policy`. For organizations and folders, use the numeric ID in the full resource name. For projects, you can use the alphanumeric or the numeric ID.
		 * @param {string} etag Optional. The expected `etag` of the policy to delete. If the value does not match the value that is stored in IAM, the request fails with a `409` error code and `ABORTED` status. If you omit this field, the policy is deleted regardless of its current `etag`.
		 * @return {GoogleLongrunningOperation} Successful response
		 */
		Iam_policies_delete(name: string, etag: string | null | undefined): Observable<GoogleLongrunningOperation> {
			return this.http.delete<GoogleLongrunningOperation>(this.baseUri + 'v2beta/' + (name == null ? '' : encodeURIComponent(name)) + '&etag=' + (etag == null ? '' : encodeURIComponent(etag)), {});
		}

		/**
		 * Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
		 * Get v2beta/{name}
		 * @param {string} name The name of the operation resource.
		 * @return {GoogleLongrunningOperation} Successful response
		 */
		Iam_policies_operations_get(name: string): Observable<GoogleLongrunningOperation> {
			return this.http.get<GoogleLongrunningOperation>(this.baseUri + 'v2beta/' + (name == null ? '' : encodeURIComponent(name)), {});
		}

		/**
		 * Updates the specified policy. You can update only the rules and the display name for the policy. To update a policy, you should use a read-modify-write loop: 1. Use GetPolicy to read the current version of the policy. 2. Modify the policy as needed. 3. Use `UpdatePolicy` to write the updated policy. This pattern helps prevent conflicts between concurrent updates.
		 * Put v2beta/{name}
		 * @param {string} name Immutable. The resource name of the `Policy`, which must be unique. Format: `policies/{attachment_point}/denypolicies/{policy_id}` The attachment point is identified by its URL-encoded full resource name, which means that the forward-slash character, `/`, must be written as `%2F`. For example, `policies/cloudresourcemanager.googleapis.com%2Fprojects%2Fmy-project/denypolicies/my-deny-policy`. For organizations and folders, use the numeric ID in the full resource name. For projects, requests can use the alphanumeric or the numeric ID. Responses always contain the numeric ID.
		 * @return {GoogleLongrunningOperation} Successful response
		 */
		Iam_policies_update(name: string, requestBody: GoogleIamV2betaPolicy): Observable<GoogleLongrunningOperation> {
			return this.http.put<GoogleLongrunningOperation>(this.baseUri + 'v2beta/' + (name == null ? '' : encodeURIComponent(name)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves the policies of the specified kind that are attached to a resource. The response lists only policy metadata. In particular, policy rules are omitted.
		 * Get v2beta/{parent}
		 * @param {string} parent Required. The resource that the policy is attached to, along with the kind of policy to list. Format: `policies/{attachment_point}/denypolicies` The attachment point is identified by its URL-encoded full resource name, which means that the forward-slash character, `/`, must be written as `%2F`. For example, `policies/cloudresourcemanager.googleapis.com%2Fprojects%2Fmy-project/denypolicies`. For organizations and folders, use the numeric ID in the full resource name. For projects, you can use the alphanumeric or the numeric ID.
		 * @param {number} pageSize The maximum number of policies to return. IAM ignores this value and uses the value 1000.
		 * @param {string} pageToken A page token received in a ListPoliciesResponse. Provide this token to retrieve the next page.
		 * @return {GoogleIamV2betaListPoliciesResponse} Successful response
		 */
		Iam_policies_listPolicies(parent: string, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<GoogleIamV2betaListPoliciesResponse> {
			return this.http.get<GoogleIamV2betaListPoliciesResponse>(this.baseUri + 'v2beta/' + (parent == null ? '' : encodeURIComponent(parent)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Creates a policy.
		 * Post v2beta/{parent}
		 * @param {string} parent Required. The resource that the policy is attached to, along with the kind of policy to create. Format: `policies/{attachment_point}/denypolicies` The attachment point is identified by its URL-encoded full resource name, which means that the forward-slash character, `/`, must be written as `%2F`. For example, `policies/cloudresourcemanager.googleapis.com%2Fprojects%2Fmy-project/denypolicies`. For organizations and folders, use the numeric ID in the full resource name. For projects, you can use the alphanumeric or the numeric ID.
		 * @param {string} policyId The ID to use for this policy, which will become the final component of the policy's resource name. The ID must contain 3 to 63 characters. It can contain lowercase letters and numbers, as well as dashes (`-`) and periods (`.`). The first character must be a lowercase letter.
		 * @return {GoogleLongrunningOperation} Successful response
		 */
		Iam_policies_createPolicy(parent: string, policyId: string | null | undefined, requestBody: GoogleIamV2betaPolicy): Observable<GoogleLongrunningOperation> {
			return this.http.post<GoogleLongrunningOperation>(this.baseUri + 'v2beta/' + (parent == null ? '' : encodeURIComponent(parent)) + '&policyId=' + (policyId == null ? '' : encodeURIComponent(policyId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

}

