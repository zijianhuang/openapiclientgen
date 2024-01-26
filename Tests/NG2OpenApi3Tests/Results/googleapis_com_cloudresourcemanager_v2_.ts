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

	export enum AuditLogConfigLogType { LOG_TYPE_UNSPECIFIED = 0, ADMIN_READ = 1, DATA_WRITE = 2, DATA_READ = 3 }


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


	/** Metadata describing a long running folder operation */
	export interface CloudresourcemanagerGoogleCloudResourcemanagerV2alpha1FolderOperation {

		/** The resource name of the folder or organization we are either creating the folder under or moving the folder to. */
		destinationParent?: string | null;

		/** The display name of the folder. */
		displayName?: string | null;

		/** The type of this operation. */
		operationType?: CloudresourcemanagerGoogleCloudResourcemanagerV2alpha1FolderOperationOperationType | null;

		/** The resource name of the folder's parent. Only applicable when the operation_type is MOVE. */
		sourceParent?: string | null;
	}

	/** Metadata describing a long running folder operation */
	export interface CloudresourcemanagerGoogleCloudResourcemanagerV2alpha1FolderOperationFormProperties {

		/** The resource name of the folder or organization we are either creating the folder under or moving the folder to. */
		destinationParent: FormControl<string | null | undefined>,

		/** The display name of the folder. */
		displayName: FormControl<string | null | undefined>,

		/** The type of this operation. */
		operationType: FormControl<CloudresourcemanagerGoogleCloudResourcemanagerV2alpha1FolderOperationOperationType | null | undefined>,

		/** The resource name of the folder's parent. Only applicable when the operation_type is MOVE. */
		sourceParent: FormControl<string | null | undefined>,
	}
	export function CreateCloudresourcemanagerGoogleCloudResourcemanagerV2alpha1FolderOperationFormGroup() {
		return new FormGroup<CloudresourcemanagerGoogleCloudResourcemanagerV2alpha1FolderOperationFormProperties>({
			destinationParent: new FormControl<string | null | undefined>(undefined),
			displayName: new FormControl<string | null | undefined>(undefined),
			operationType: new FormControl<CloudresourcemanagerGoogleCloudResourcemanagerV2alpha1FolderOperationOperationType | null | undefined>(undefined),
			sourceParent: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum CloudresourcemanagerGoogleCloudResourcemanagerV2alpha1FolderOperationOperationType { OPERATION_TYPE_UNSPECIFIED = 0, CREATE = 1, MOVE = 2 }


	/** Metadata describing a long running folder operation */
	export interface CloudresourcemanagerGoogleCloudResourcemanagerV2beta1FolderOperation {

		/** The resource name of the folder or organization we are either creating the folder under or moving the folder to. */
		destinationParent?: string | null;

		/** The display name of the folder. */
		displayName?: string | null;

		/** The type of this operation. */
		operationType?: CloudresourcemanagerGoogleCloudResourcemanagerV2alpha1FolderOperationOperationType | null;

		/** The resource name of the folder's parent. Only applicable when the operation_type is MOVE. */
		sourceParent?: string | null;
	}

	/** Metadata describing a long running folder operation */
	export interface CloudresourcemanagerGoogleCloudResourcemanagerV2beta1FolderOperationFormProperties {

		/** The resource name of the folder or organization we are either creating the folder under or moving the folder to. */
		destinationParent: FormControl<string | null | undefined>,

		/** The display name of the folder. */
		displayName: FormControl<string | null | undefined>,

		/** The type of this operation. */
		operationType: FormControl<CloudresourcemanagerGoogleCloudResourcemanagerV2alpha1FolderOperationOperationType | null | undefined>,

		/** The resource name of the folder's parent. Only applicable when the operation_type is MOVE. */
		sourceParent: FormControl<string | null | undefined>,
	}
	export function CreateCloudresourcemanagerGoogleCloudResourcemanagerV2beta1FolderOperationFormGroup() {
		return new FormGroup<CloudresourcemanagerGoogleCloudResourcemanagerV2beta1FolderOperationFormProperties>({
			destinationParent: new FormControl<string | null | undefined>(undefined),
			displayName: new FormControl<string | null | undefined>(undefined),
			operationType: new FormControl<CloudresourcemanagerGoogleCloudResourcemanagerV2alpha1FolderOperationOperationType | null | undefined>(undefined),
			sourceParent: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Metadata pertaining to the Folder creation process. */
	export interface CreateFolderMetadata {

		/** The display name of the folder. */
		displayName?: string | null;

		/** The resource name of the folder or organization we are creating the folder under. */
		parent?: string | null;
	}

	/** Metadata pertaining to the Folder creation process. */
	export interface CreateFolderMetadataFormProperties {

		/** The display name of the folder. */
		displayName: FormControl<string | null | undefined>,

		/** The resource name of the folder or organization we are creating the folder under. */
		parent: FormControl<string | null | undefined>,
	}
	export function CreateCreateFolderMetadataFormGroup() {
		return new FormGroup<CreateFolderMetadataFormProperties>({
			displayName: new FormControl<string | null | undefined>(undefined),
			parent: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A status object which is used as the `metadata` field for the Operation returned by CreateProject. It provides insight for when significant phases of Project creation have completed. */
	export interface CreateProjectMetadata {

		/** Creation time of the project creation workflow. */
		createTime?: string | null;

		/** True if the project can be retrieved using `GetProject`. No other operations on the project are guaranteed to work until the project creation is complete. */
		gettable?: boolean | null;

		/** True if the project creation process is complete. */
		ready?: boolean | null;
	}

	/** A status object which is used as the `metadata` field for the Operation returned by CreateProject. It provides insight for when significant phases of Project creation have completed. */
	export interface CreateProjectMetadataFormProperties {

		/** Creation time of the project creation workflow. */
		createTime: FormControl<string | null | undefined>,

		/** True if the project can be retrieved using `GetProject`. No other operations on the project are guaranteed to work until the project creation is complete. */
		gettable: FormControl<boolean | null | undefined>,

		/** True if the project creation process is complete. */
		ready: FormControl<boolean | null | undefined>,
	}
	export function CreateCreateProjectMetadataFormGroup() {
		return new FormGroup<CreateProjectMetadataFormProperties>({
			createTime: new FormControl<string | null | undefined>(undefined),
			gettable: new FormControl<boolean | null | undefined>(undefined),
			ready: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Runtime operation information for creating a TagValue. */
	export interface CreateTagBindingMetadata {
	}

	/** Runtime operation information for creating a TagValue. */
	export interface CreateTagBindingMetadataFormProperties {
	}
	export function CreateCreateTagBindingMetadataFormGroup() {
		return new FormGroup<CreateTagBindingMetadataFormProperties>({
		});

	}


	/** Runtime operation information for creating a TagKey. */
	export interface CreateTagKeyMetadata {
	}

	/** Runtime operation information for creating a TagKey. */
	export interface CreateTagKeyMetadataFormProperties {
	}
	export function CreateCreateTagKeyMetadataFormGroup() {
		return new FormGroup<CreateTagKeyMetadataFormProperties>({
		});

	}


	/** Runtime operation information for creating a TagValue. */
	export interface CreateTagValueMetadata {
	}

	/** Runtime operation information for creating a TagValue. */
	export interface CreateTagValueMetadataFormProperties {
	}
	export function CreateCreateTagValueMetadataFormGroup() {
		return new FormGroup<CreateTagValueMetadataFormProperties>({
		});

	}


	/** A status object which is used as the `metadata` field for the `Operation` returned by `DeleteFolder`. */
	export interface DeleteFolderMetadata {
	}

	/** A status object which is used as the `metadata` field for the `Operation` returned by `DeleteFolder`. */
	export interface DeleteFolderMetadataFormProperties {
	}
	export function CreateDeleteFolderMetadataFormGroup() {
		return new FormGroup<DeleteFolderMetadataFormProperties>({
		});

	}


	/** A status object which is used as the `metadata` field for the operation returned by DeleteOrganization. */
	export interface DeleteOrganizationMetadata {
	}

	/** A status object which is used as the `metadata` field for the operation returned by DeleteOrganization. */
	export interface DeleteOrganizationMetadataFormProperties {
	}
	export function CreateDeleteOrganizationMetadataFormGroup() {
		return new FormGroup<DeleteOrganizationMetadataFormProperties>({
		});

	}


	/** A status object which is used as the `metadata` field for the Operation returned by `DeleteProject`. */
	export interface DeleteProjectMetadata {
	}

	/** A status object which is used as the `metadata` field for the Operation returned by `DeleteProject`. */
	export interface DeleteProjectMetadataFormProperties {
	}
	export function CreateDeleteProjectMetadataFormGroup() {
		return new FormGroup<DeleteProjectMetadataFormProperties>({
		});

	}


	/** Runtime operation information for deleting a TagBinding. */
	export interface DeleteTagBindingMetadata {
	}

	/** Runtime operation information for deleting a TagBinding. */
	export interface DeleteTagBindingMetadataFormProperties {
	}
	export function CreateDeleteTagBindingMetadataFormGroup() {
		return new FormGroup<DeleteTagBindingMetadataFormProperties>({
		});

	}


	/** Runtime operation information for deleting a TagKey. */
	export interface DeleteTagKeyMetadata {
	}

	/** Runtime operation information for deleting a TagKey. */
	export interface DeleteTagKeyMetadataFormProperties {
	}
	export function CreateDeleteTagKeyMetadataFormGroup() {
		return new FormGroup<DeleteTagKeyMetadataFormProperties>({
		});

	}


	/** Runtime operation information for deleting a TagValue. */
	export interface DeleteTagValueMetadata {
	}

	/** Runtime operation information for deleting a TagValue. */
	export interface DeleteTagValueMetadataFormProperties {
	}
	export function CreateDeleteTagValueMetadataFormGroup() {
		return new FormGroup<DeleteTagValueMetadataFormProperties>({
		});

	}


	/** A Folder in an Organization's resource hierarchy, used to organize that Organization's resources. */
	export interface Folder {

		/** Output only. Timestamp when the Folder was created. Assigned by the server. */
		createTime?: string | null;

		/** The folder's display name. A folder's display name must be unique amongst its siblings, e.g. no two folders with the same parent can share the same display name. The display name must start and end with a letter or digit, may contain letters, digits, spaces, hyphens and underscores and can be no longer than 30 characters. This is captured by the regular expression: `[\p{L}\p{N}]([\p{L}\p{N}_- ]{0,28}[\p{L}\p{N}])?`. */
		displayName?: string | null;

		/** Output only. The lifecycle state of the folder. Updates to the lifecycle_state must be performed via DeleteFolder and UndeleteFolder. */
		lifecycleState?: FolderLifecycleState | null;

		/** Output only. The resource name of the Folder. Its format is `folders/{folder_id}`, for example: "folders/1234". */
		name?: string | null;

		/** Required. The Folder's parent's resource name. Updates to the folder's parent must be performed via MoveFolder. */
		parent?: string | null;
	}

	/** A Folder in an Organization's resource hierarchy, used to organize that Organization's resources. */
	export interface FolderFormProperties {

		/** Output only. Timestamp when the Folder was created. Assigned by the server. */
		createTime: FormControl<string | null | undefined>,

		/** The folder's display name. A folder's display name must be unique amongst its siblings, e.g. no two folders with the same parent can share the same display name. The display name must start and end with a letter or digit, may contain letters, digits, spaces, hyphens and underscores and can be no longer than 30 characters. This is captured by the regular expression: `[\p{L}\p{N}]([\p{L}\p{N}_- ]{0,28}[\p{L}\p{N}])?`. */
		displayName: FormControl<string | null | undefined>,

		/** Output only. The lifecycle state of the folder. Updates to the lifecycle_state must be performed via DeleteFolder and UndeleteFolder. */
		lifecycleState: FormControl<FolderLifecycleState | null | undefined>,

		/** Output only. The resource name of the Folder. Its format is `folders/{folder_id}`, for example: "folders/1234". */
		name: FormControl<string | null | undefined>,

		/** Required. The Folder's parent's resource name. Updates to the folder's parent must be performed via MoveFolder. */
		parent: FormControl<string | null | undefined>,
	}
	export function CreateFolderFormGroup() {
		return new FormGroup<FolderFormProperties>({
			createTime: new FormControl<string | null | undefined>(undefined),
			displayName: new FormControl<string | null | undefined>(undefined),
			lifecycleState: new FormControl<FolderLifecycleState | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			parent: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum FolderLifecycleState { LIFECYCLE_STATE_UNSPECIFIED = 0, ACTIVE = 1, DELETE_REQUESTED = 2 }


	/** Metadata describing a long running folder operation */
	export interface FolderOperation {

		/** The resource name of the folder or organization we are either creating the folder under or moving the folder to. */
		destinationParent?: string | null;

		/** The display name of the folder. */
		displayName?: string | null;

		/** The type of this operation. */
		operationType?: CloudresourcemanagerGoogleCloudResourcemanagerV2alpha1FolderOperationOperationType | null;

		/** The resource name of the folder's parent. Only applicable when the operation_type is MOVE. */
		sourceParent?: string | null;
	}

	/** Metadata describing a long running folder operation */
	export interface FolderOperationFormProperties {

		/** The resource name of the folder or organization we are either creating the folder under or moving the folder to. */
		destinationParent: FormControl<string | null | undefined>,

		/** The display name of the folder. */
		displayName: FormControl<string | null | undefined>,

		/** The type of this operation. */
		operationType: FormControl<CloudresourcemanagerGoogleCloudResourcemanagerV2alpha1FolderOperationOperationType | null | undefined>,

		/** The resource name of the folder's parent. Only applicable when the operation_type is MOVE. */
		sourceParent: FormControl<string | null | undefined>,
	}
	export function CreateFolderOperationFormGroup() {
		return new FormGroup<FolderOperationFormProperties>({
			destinationParent: new FormControl<string | null | undefined>(undefined),
			displayName: new FormControl<string | null | undefined>(undefined),
			operationType: new FormControl<CloudresourcemanagerGoogleCloudResourcemanagerV2alpha1FolderOperationOperationType | null | undefined>(undefined),
			sourceParent: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A classification of the Folder Operation error. */
	export interface FolderOperationError {

		/** The type of operation error experienced. */
		errorMessageId?: FolderOperationErrorErrorMessageId | null;
	}

	/** A classification of the Folder Operation error. */
	export interface FolderOperationErrorFormProperties {

		/** The type of operation error experienced. */
		errorMessageId: FormControl<FolderOperationErrorErrorMessageId | null | undefined>,
	}
	export function CreateFolderOperationErrorFormGroup() {
		return new FormGroup<FolderOperationErrorFormProperties>({
			errorMessageId: new FormControl<FolderOperationErrorErrorMessageId | null | undefined>(undefined),
		});

	}

	export enum FolderOperationErrorErrorMessageId { ERROR_TYPE_UNSPECIFIED = 0, ACTIVE_FOLDER_HEIGHT_VIOLATION = 1, MAX_CHILD_FOLDERS_VIOLATION = 2, FOLDER_NAME_UNIQUENESS_VIOLATION = 3, RESOURCE_DELETED_VIOLATION = 4, PARENT_DELETED_VIOLATION = 5, CYCLE_INTRODUCED_VIOLATION = 6, FOLDER_BEING_MOVED_VIOLATION = 7, FOLDER_TO_DELETE_NON_EMPTY_VIOLATION = 8, DELETED_FOLDER_HEIGHT_VIOLATION = 9 }


	/** Request message for `GetIamPolicy` method. */
	export interface GetIamPolicyRequest {

		/** Encapsulates settings provided to GetIamPolicy. */
		options?: GetPolicyOptions;
	}

	/** Request message for `GetIamPolicy` method. */
	export interface GetIamPolicyRequestFormProperties {
	}
	export function CreateGetIamPolicyRequestFormGroup() {
		return new FormGroup<GetIamPolicyRequestFormProperties>({
		});

	}


	/** Encapsulates settings provided to GetIamPolicy. */
	export interface GetPolicyOptions {

		/** Optional. The maximum policy version that will be used to format the policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset. The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies). */
		requestedPolicyVersion?: number | null;
	}

	/** Encapsulates settings provided to GetIamPolicy. */
	export interface GetPolicyOptionsFormProperties {

		/** Optional. The maximum policy version that will be used to format the policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset. The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies). */
		requestedPolicyVersion: FormControl<number | null | undefined>,
	}
	export function CreateGetPolicyOptionsFormGroup() {
		return new FormGroup<GetPolicyOptionsFormProperties>({
			requestedPolicyVersion: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** The ListFolders response message. */
	export interface ListFoldersResponse {

		/** A possibly paginated list of Folders that are direct descendants of the specified parent resource. */
		folders?: Array<Folder>;

		/** A pagination token returned from a previous call to `ListFolders` that indicates from where listing should continue. */
		nextPageToken?: string | null;
	}

	/** The ListFolders response message. */
	export interface ListFoldersResponseFormProperties {

		/** A pagination token returned from a previous call to `ListFolders` that indicates from where listing should continue. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListFoldersResponseFormGroup() {
		return new FormGroup<ListFoldersResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Metadata pertaining to the folder move process. */
	export interface MoveFolderMetadata {

		/** The resource name of the folder or organization to move the folder to. */
		destinationParent?: string | null;

		/** The display name of the folder. */
		displayName?: string | null;

		/** The resource name of the folder's parent. */
		sourceParent?: string | null;
	}

	/** Metadata pertaining to the folder move process. */
	export interface MoveFolderMetadataFormProperties {

		/** The resource name of the folder or organization to move the folder to. */
		destinationParent: FormControl<string | null | undefined>,

		/** The display name of the folder. */
		displayName: FormControl<string | null | undefined>,

		/** The resource name of the folder's parent. */
		sourceParent: FormControl<string | null | undefined>,
	}
	export function CreateMoveFolderMetadataFormGroup() {
		return new FormGroup<MoveFolderMetadataFormProperties>({
			destinationParent: new FormControl<string | null | undefined>(undefined),
			displayName: new FormControl<string | null | undefined>(undefined),
			sourceParent: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The MoveFolder request message. */
	export interface MoveFolderRequest {

		/** Required. The resource name of the Folder or Organization to reparent the folder under. Must be of the form `folders/{folder_id}` or `organizations/{org_id}`. */
		destinationParent?: string | null;
	}

	/** The MoveFolder request message. */
	export interface MoveFolderRequestFormProperties {

		/** Required. The resource name of the Folder or Organization to reparent the folder under. Must be of the form `folders/{folder_id}` or `organizations/{org_id}`. */
		destinationParent: FormControl<string | null | undefined>,
	}
	export function CreateMoveFolderRequestFormGroup() {
		return new FormGroup<MoveFolderRequestFormProperties>({
			destinationParent: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A status object which is used as the `metadata` field for the Operation returned by MoveProject. */
	export interface MoveProjectMetadata {
	}

	/** A status object which is used as the `metadata` field for the Operation returned by MoveProject. */
	export interface MoveProjectMetadataFormProperties {
	}
	export function CreateMoveProjectMetadataFormGroup() {
		return new FormGroup<MoveProjectMetadataFormProperties>({
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


	/** A status object which is used as the `metadata` field for the Operation returned by CreateProject. It provides insight for when significant phases of Project creation have completed. */
	export interface ProjectCreationStatus {

		/** Creation time of the project creation workflow. */
		createTime?: string | null;

		/** True if the project can be retrieved using GetProject. No other operations on the project are guaranteed to work until the project creation is complete. */
		gettable?: boolean | null;

		/** True if the project creation process is complete. */
		ready?: boolean | null;
	}

	/** A status object which is used as the `metadata` field for the Operation returned by CreateProject. It provides insight for when significant phases of Project creation have completed. */
	export interface ProjectCreationStatusFormProperties {

		/** Creation time of the project creation workflow. */
		createTime: FormControl<string | null | undefined>,

		/** True if the project can be retrieved using GetProject. No other operations on the project are guaranteed to work until the project creation is complete. */
		gettable: FormControl<boolean | null | undefined>,

		/** True if the project creation process is complete. */
		ready: FormControl<boolean | null | undefined>,
	}
	export function CreateProjectCreationStatusFormGroup() {
		return new FormGroup<ProjectCreationStatusFormProperties>({
			createTime: new FormControl<string | null | undefined>(undefined),
			gettable: new FormControl<boolean | null | undefined>(undefined),
			ready: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** The request message for searching folders. */
	export interface SearchFoldersRequest {

		/** Optional. The maximum number of folders to return in the response. The server can return fewer folders than requested. If unspecified, server picks an appropriate default. */
		pageSize?: number | null;

		/** Optional. A pagination token returned from a previous call to `SearchFolders` that indicates from where search should continue. */
		pageToken?: string | null;

		/** Search criteria used to select the Folders to return. If no search criteria is specified then all accessible folders will be returned. Query expressions can be used to restrict results based upon displayName, lifecycleState and parent, where the operators `=`, `NOT`, `AND` and `OR` can be used along with the suffix wildcard symbol `*`. The displayName field in a query expression should use escaped quotes for values that include whitespace to prevent unexpected behavior. Some example queries are: * Query `displayName=Test*` returns Folder resources whose display name starts with "Test". * Query `lifecycleState=ACTIVE` returns Folder resources with `lifecycleState` set to `ACTIVE`. * Query `parent=folders/123` returns Folder resources that have `folders/123` as a parent resource. * Query `parent=folders/123 AND lifecycleState=ACTIVE` returns active Folder resources that have `folders/123` as a parent resource. * Query `displayName=\\"Test String\\"` returns Folder resources with display names that include both "Test" and "String". */
		query?: string | null;
	}

	/** The request message for searching folders. */
	export interface SearchFoldersRequestFormProperties {

		/** Optional. The maximum number of folders to return in the response. The server can return fewer folders than requested. If unspecified, server picks an appropriate default. */
		pageSize: FormControl<number | null | undefined>,

		/** Optional. A pagination token returned from a previous call to `SearchFolders` that indicates from where search should continue. */
		pageToken: FormControl<string | null | undefined>,

		/** Search criteria used to select the Folders to return. If no search criteria is specified then all accessible folders will be returned. Query expressions can be used to restrict results based upon displayName, lifecycleState and parent, where the operators `=`, `NOT`, `AND` and `OR` can be used along with the suffix wildcard symbol `*`. The displayName field in a query expression should use escaped quotes for values that include whitespace to prevent unexpected behavior. Some example queries are: * Query `displayName=Test*` returns Folder resources whose display name starts with "Test". * Query `lifecycleState=ACTIVE` returns Folder resources with `lifecycleState` set to `ACTIVE`. * Query `parent=folders/123` returns Folder resources that have `folders/123` as a parent resource. * Query `parent=folders/123 AND lifecycleState=ACTIVE` returns active Folder resources that have `folders/123` as a parent resource. * Query `displayName=\\"Test String\\"` returns Folder resources with display names that include both "Test" and "String". */
		query: FormControl<string | null | undefined>,
	}
	export function CreateSearchFoldersRequestFormGroup() {
		return new FormGroup<SearchFoldersRequestFormProperties>({
			pageSize: new FormControl<number | null | undefined>(undefined),
			pageToken: new FormControl<string | null | undefined>(undefined),
			query: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The response message for searching folders. */
	export interface SearchFoldersResponse {

		/** A possibly paginated folder search results. the specified parent resource. */
		folders?: Array<Folder>;

		/** A pagination token returned from a previous call to `SearchFolders` that indicates from where searching should continue. */
		nextPageToken?: string | null;
	}

	/** The response message for searching folders. */
	export interface SearchFoldersResponseFormProperties {

		/** A pagination token returned from a previous call to `SearchFolders` that indicates from where searching should continue. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateSearchFoldersResponseFormGroup() {
		return new FormGroup<SearchFoldersResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
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


	/** A status object which is used as the `metadata` field for the `Operation` returned by `UndeleteFolder`. */
	export interface UndeleteFolderMetadata {
	}

	/** A status object which is used as the `metadata` field for the `Operation` returned by `UndeleteFolder`. */
	export interface UndeleteFolderMetadataFormProperties {
	}
	export function CreateUndeleteFolderMetadataFormGroup() {
		return new FormGroup<UndeleteFolderMetadataFormProperties>({
		});

	}


	/** The UndeleteFolder request message. */
	export interface UndeleteFolderRequest {
	}

	/** The UndeleteFolder request message. */
	export interface UndeleteFolderRequestFormProperties {
	}
	export function CreateUndeleteFolderRequestFormGroup() {
		return new FormGroup<UndeleteFolderRequestFormProperties>({
		});

	}


	/** A status object which is used as the `metadata` field for the Operation returned by UndeleteOrganization. */
	export interface UndeleteOrganizationMetadata {
	}

	/** A status object which is used as the `metadata` field for the Operation returned by UndeleteOrganization. */
	export interface UndeleteOrganizationMetadataFormProperties {
	}
	export function CreateUndeleteOrganizationMetadataFormGroup() {
		return new FormGroup<UndeleteOrganizationMetadataFormProperties>({
		});

	}


	/** A status object which is used as the `metadata` field for the Operation returned by `UndeleteProject`. */
	export interface UndeleteProjectMetadata {
	}

	/** A status object which is used as the `metadata` field for the Operation returned by `UndeleteProject`. */
	export interface UndeleteProjectMetadataFormProperties {
	}
	export function CreateUndeleteProjectMetadataFormGroup() {
		return new FormGroup<UndeleteProjectMetadataFormProperties>({
		});

	}


	/** A status object which is used as the `metadata` field for the Operation returned by UpdateFolder. */
	export interface UpdateFolderMetadata {
	}

	/** A status object which is used as the `metadata` field for the Operation returned by UpdateFolder. */
	export interface UpdateFolderMetadataFormProperties {
	}
	export function CreateUpdateFolderMetadataFormGroup() {
		return new FormGroup<UpdateFolderMetadataFormProperties>({
		});

	}


	/** A status object which is used as the `metadata` field for the Operation returned by UpdateProject. */
	export interface UpdateProjectMetadata {
	}

	/** A status object which is used as the `metadata` field for the Operation returned by UpdateProject. */
	export interface UpdateProjectMetadataFormProperties {
	}
	export function CreateUpdateProjectMetadataFormGroup() {
		return new FormGroup<UpdateProjectMetadataFormProperties>({
		});

	}


	/** Runtime operation information for updating a TagKey. */
	export interface UpdateTagKeyMetadata {
	}

	/** Runtime operation information for updating a TagKey. */
	export interface UpdateTagKeyMetadataFormProperties {
	}
	export function CreateUpdateTagKeyMetadataFormGroup() {
		return new FormGroup<UpdateTagKeyMetadataFormProperties>({
		});

	}


	/** Runtime operation information for updating a TagValue. */
	export interface UpdateTagValueMetadata {
	}

	/** Runtime operation information for updating a TagValue. */
	export interface UpdateTagValueMetadataFormProperties {
	}
	export function CreateUpdateTagValueMetadataFormGroup() {
		return new FormGroup<UpdateTagValueMetadataFormProperties>({
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
		 * Get v1/{name}
		 * @param {string} name The name of the operation resource.
		 * @return {Operation} Successful response
		 */
		Cloudresourcemanager_operations_get(name: string): Observable<Operation> {
			return this.http.get<Operation>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)), {});
		}

		/**
		 * Lists the Folders that are direct descendants of supplied parent resource. List provides a strongly consistent view of the Folders underneath the specified parent resource. List returns Folders sorted based upon the (ascending) lexical ordering of their display_name. The caller must have `resourcemanager.folders.list` permission on the identified parent.
		 * Get v2/folders
		 * @param {number} pageSize Optional. The maximum number of Folders to return in the response. The server can return fewer folders than requested. If unspecified, server picks an appropriate default.
		 * @param {string} pageToken Optional. A pagination token returned from a previous call to `ListFolders` that indicates where this listing should continue from.
		 * @param {string} parent Required. The resource name of the Organization or Folder whose Folders are being listed. Must be of the form `folders/{folder_id}` or `organizations/{org_id}`. Access to this method is controlled by checking the `resourcemanager.folders.list` permission on the `parent`.
		 * @param {boolean} showDeleted Optional. Controls whether Folders in the DELETE_REQUESTED state should be returned. Defaults to false.
		 * @return {ListFoldersResponse} Successful response
		 */
		Cloudresourcemanager_folders_list(pageSize: number | null | undefined, pageToken: string | null | undefined, parent: string | null | undefined, showDeleted: boolean | null | undefined): Observable<ListFoldersResponse> {
			return this.http.get<ListFoldersResponse>(this.baseUri + 'v2/folders?pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '&parent=' + (parent == null ? '' : encodeURIComponent(parent)) + '&showDeleted=' + showDeleted, {});
		}

		/**
		 * Creates a Folder in the resource hierarchy. Returns an Operation which can be used to track the progress of the folder creation workflow. Upon success the Operation.response field will be populated with the created Folder. In order to succeed, the addition of this new Folder must not violate the Folder naming, height or fanout constraints. + The Folder's display_name must be distinct from all other Folders that share its parent. + The addition of the Folder must not cause the active Folder hierarchy to exceed a height of 10. Note, the full active + deleted Folder hierarchy is allowed to reach a height of 20; this provides additional headroom when moving folders that contain deleted folders. + The addition of the Folder must not cause the total number of Folders under its parent to exceed 300. If the operation fails due to a folder constraint violation, some errors may be returned by the CreateFolder request, with status code FAILED_PRECONDITION and an error description. Other folder constraint violations will be communicated in the Operation, with the specific PreconditionFailure returned via the details list in the Operation.error field. The caller must have `resourcemanager.folders.create` permission on the identified parent.
		 * Post v2/folders
		 * @param {string} parent Required. The resource name of the new Folder's parent. Must be of the form `folders/{folder_id}` or `organizations/{org_id}`.
		 * @return {Operation} Successful response
		 */
		Cloudresourcemanager_folders_create(parent: string | null | undefined, requestBody: Folder): Observable<Operation> {
			return this.http.post<Operation>(this.baseUri + 'v2/folders?parent=' + (parent == null ? '' : encodeURIComponent(parent)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Search for folders that match specific filter criteria. Search provides an eventually consistent view of the folders a user has access to which meet the specified filter criteria. This will only return folders on which the caller has the permission `resourcemanager.folders.get`.
		 * Post v2/folders:search
		 * @return {SearchFoldersResponse} Successful response
		 */
		Cloudresourcemanager_folders_search(requestBody: SearchFoldersRequest): Observable<SearchFoldersResponse> {
			return this.http.post<SearchFoldersResponse>(this.baseUri + 'v2/folders:search', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Requests deletion of a Folder. The Folder is moved into the DELETE_REQUESTED state immediately, and is deleted approximately 30 days later. This method may only be called on an empty Folder in the ACTIVE state, where a Folder is empty if it doesn't contain any Folders or Projects in the ACTIVE state. The caller must have `resourcemanager.folders.delete` permission on the identified folder.
		 * Delete v2/{name}
		 * @param {string} name Required. the resource name of the Folder to be deleted. Must be of the form `folders/{folder_id}`.
		 * @return {Folder} Successful response
		 */
		Cloudresourcemanager_folders_delete(name: string): Observable<Folder> {
			return this.http.delete<Folder>(this.baseUri + 'v2/' + (name == null ? '' : encodeURIComponent(name)), {});
		}

		/**
		 * Retrieves a Folder identified by the supplied resource name. Valid Folder resource names have the format `folders/{folder_id}` (for example, `folders/1234`). The caller must have `resourcemanager.folders.get` permission on the identified folder.
		 * Get v2/{name}
		 * @param {string} name Required. The resource name of the Folder to retrieve. Must be of the form `folders/{folder_id}`.
		 * @return {Folder} Successful response
		 */
		Cloudresourcemanager_folders_get(name: string): Observable<Folder> {
			return this.http.get<Folder>(this.baseUri + 'v2/' + (name == null ? '' : encodeURIComponent(name)), {});
		}

		/**
		 * Updates a Folder, changing its display_name. Changes to the folder display_name will be rejected if they violate either the display_name formatting rules or naming constraints described in the CreateFolder documentation. The Folder's display name must start and end with a letter or digit, may contain letters, digits, spaces, hyphens and underscores and can be between 3 and 30 characters. This is captured by the regular expression: `\p{L}\p{N}{1,28}[\p{L}\p{N}]`. The caller must have `resourcemanager.folders.update` permission on the identified folder. If the update fails due to the unique name constraint then a PreconditionFailure explaining this violation will be returned in the Status.details field.
		 * Patch v2/{name}
		 * @param {string} name Output only. The resource name of the Folder. Its format is `folders/{folder_id}`, for example: "folders/1234".
		 * @param {string} updateMask Required. Fields to be updated. Only the `display_name` can be updated.
		 * @return {Folder} Successful response
		 */
		Cloudresourcemanager_folders_patch(name: string, updateMask: string | null | undefined, requestBody: Folder): Observable<Folder> {
			return this.http.patch<Folder>(this.baseUri + 'v2/' + (name == null ? '' : encodeURIComponent(name)) + '&updateMask=' + (updateMask == null ? '' : encodeURIComponent(updateMask)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Moves a Folder under a new resource parent. Returns an Operation which can be used to track the progress of the folder move workflow. Upon success the Operation.response field will be populated with the moved Folder. Upon failure, a FolderOperationError categorizing the failure cause will be returned - if the failure occurs synchronously then the FolderOperationError will be returned via the Status.details field and if it occurs asynchronously then the FolderOperation will be returned via the Operation.error field. In addition, the Operation.metadata field will be populated with a FolderOperation message as an aid to stateless clients. Folder moves will be rejected if they violate either the naming, height or fanout constraints described in the CreateFolder documentation. The caller must have `resourcemanager.folders.move` permission on the folder's current and proposed new parent.
		 * Post v2/{name}:move
		 * @param {string} name Required. The resource name of the Folder to move. Must be of the form folders/{folder_id}
		 * @return {Operation} Successful response
		 */
		Cloudresourcemanager_folders_move(name: string, requestBody: MoveFolderRequest): Observable<Operation> {
			return this.http.post<Operation>(this.baseUri + 'v2/' + (name == null ? '' : encodeURIComponent(name)) + ':move', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Cancels the deletion request for a Folder. This method may only be called on a Folder in the DELETE_REQUESTED state. In order to succeed, the Folder's parent must be in the ACTIVE state. In addition, reintroducing the folder into the tree must not violate folder naming, height and fanout constraints described in the CreateFolder documentation. The caller must have `resourcemanager.folders.undelete` permission on the identified folder.
		 * Post v2/{name}:undelete
		 * @param {string} name Required. The resource name of the Folder to undelete. Must be of the form `folders/{folder_id}`.
		 * @return {Folder} Successful response
		 */
		Cloudresourcemanager_folders_undelete(name: string, requestBody: UndeleteFolderRequest): Observable<Folder> {
			return this.http.post<Folder>(this.baseUri + 'v2/' + (name == null ? '' : encodeURIComponent(name)) + ':undelete', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets the access control policy for a Folder. The returned policy may be empty if no such policy or resource exists. The `resource` field should be the Folder's resource name, e.g. "folders/1234". The caller must have `resourcemanager.folders.getIamPolicy` permission on the identified folder.
		 * Post v2/{resource}:getIamPolicy
		 * @param {string} resource REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
		 * @return {Policy} Successful response
		 */
		Cloudresourcemanager_folders_getIamPolicy(resource: string, requestBody: GetIamPolicyRequest): Observable<Policy> {
			return this.http.post<Policy>(this.baseUri + 'v2/' + (resource == null ? '' : encodeURIComponent(resource)) + ':getIamPolicy', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Sets the access control policy on a Folder, replacing any existing policy. The `resource` field should be the Folder's resource name, e.g. "folders/1234". The caller must have `resourcemanager.folders.setIamPolicy` permission on the identified folder.
		 * Post v2/{resource}:setIamPolicy
		 * @param {string} resource REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
		 * @return {Policy} Successful response
		 */
		Cloudresourcemanager_folders_setIamPolicy(resource: string, requestBody: SetIamPolicyRequest): Observable<Policy> {
			return this.http.post<Policy>(this.baseUri + 'v2/' + (resource == null ? '' : encodeURIComponent(resource)) + ':setIamPolicy', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns permissions that a caller has on the specified Folder. The `resource` field should be the Folder's resource name, e.g. "folders/1234". There are no permissions required for making this API call.
		 * Post v2/{resource}:testIamPermissions
		 * @param {string} resource REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
		 * @return {TestIamPermissionsResponse} Successful response
		 */
		Cloudresourcemanager_folders_testIamPermissions(resource: string, requestBody: TestIamPermissionsRequest): Observable<TestIamPermissionsResponse> {
			return this.http.post<TestIamPermissionsResponse>(this.baseUri + 'v2/' + (resource == null ? '' : encodeURIComponent(resource)) + ':testIamPermissions', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

}

