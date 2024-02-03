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

	export enum CloudresourcemanagerGoogleCloudResourcemanagerV2alpha1FolderOperationOperationType { OPERATION_TYPE_UNSPECIFIED = 'OPERATION_TYPE_UNSPECIFIED', CREATE = 'CREATE', MOVE = 'MOVE' }


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


	/** An EffectiveTag represents a tag that applies to a resource during policy evaluation. Tags can be either directly bound to a resource or inherited from its ancestor. EffectiveTag contains the name and namespaced_name of the tag value and tag key, with additional fields of `inherited` to indicate the inheritance status of the effective tag. */
	export interface EffectiveTag {

		/** Indicates the inheritance status of a tag value attached to the given resource. If the tag value is inherited from one of the resource's ancestors, inherited will be true. If false, then the tag value is directly attached to the resource, inherited will be false. */
		inherited?: boolean | null;

		/** The namespaced name of the TagKey. Can be in the form `{organization_id}/{tag_key_short_name}` or `{project_id}/{tag_key_short_name}` or `{project_number}/{tag_key_short_name}`. */
		namespacedTagKey?: string | null;

		/** The namespaced name of the TagValue. Can be in the form `{organization_id}/{tag_key_short_name}/{tag_value_short_name}` or `{project_id}/{tag_key_short_name}/{tag_value_short_name}` or `{project_number}/{tag_key_short_name}/{tag_value_short_name}`. */
		namespacedTagValue?: string | null;

		/** The name of the TagKey, in the format `tagKeys/{id}`, such as `tagKeys/123`. */
		tagKey?: string | null;

		/** The parent name of the tag key. Must be in the format `organizations/{organization_id}` or `projects/{project_number}` */
		tagKeyParentName?: string | null;

		/** Resource name for TagValue in the format `tagValues/456`. */
		tagValue?: string | null;
	}

	/** An EffectiveTag represents a tag that applies to a resource during policy evaluation. Tags can be either directly bound to a resource or inherited from its ancestor. EffectiveTag contains the name and namespaced_name of the tag value and tag key, with additional fields of `inherited` to indicate the inheritance status of the effective tag. */
	export interface EffectiveTagFormProperties {

		/** Indicates the inheritance status of a tag value attached to the given resource. If the tag value is inherited from one of the resource's ancestors, inherited will be true. If false, then the tag value is directly attached to the resource, inherited will be false. */
		inherited: FormControl<boolean | null | undefined>,

		/** The namespaced name of the TagKey. Can be in the form `{organization_id}/{tag_key_short_name}` or `{project_id}/{tag_key_short_name}` or `{project_number}/{tag_key_short_name}`. */
		namespacedTagKey: FormControl<string | null | undefined>,

		/** The namespaced name of the TagValue. Can be in the form `{organization_id}/{tag_key_short_name}/{tag_value_short_name}` or `{project_id}/{tag_key_short_name}/{tag_value_short_name}` or `{project_number}/{tag_key_short_name}/{tag_value_short_name}`. */
		namespacedTagValue: FormControl<string | null | undefined>,

		/** The name of the TagKey, in the format `tagKeys/{id}`, such as `tagKeys/123`. */
		tagKey: FormControl<string | null | undefined>,

		/** The parent name of the tag key. Must be in the format `organizations/{organization_id}` or `projects/{project_number}` */
		tagKeyParentName: FormControl<string | null | undefined>,

		/** Resource name for TagValue in the format `tagValues/456`. */
		tagValue: FormControl<string | null | undefined>,
	}
	export function CreateEffectiveTagFormGroup() {
		return new FormGroup<EffectiveTagFormProperties>({
			inherited: new FormControl<boolean | null | undefined>(undefined),
			namespacedTagKey: new FormControl<string | null | undefined>(undefined),
			namespacedTagValue: new FormControl<string | null | undefined>(undefined),
			tagKey: new FormControl<string | null | undefined>(undefined),
			tagKeyParentName: new FormControl<string | null | undefined>(undefined),
			tagValue: new FormControl<string | null | undefined>(undefined),
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


	/** A folder in an organization's resource hierarchy, used to organize that organization's resources. */
	export interface Folder {

		/** Output only. Timestamp when the folder was created. */
		createTime?: string | null;

		/** Output only. Timestamp when the folder was requested to be deleted. */
		deleteTime?: string | null;

		/** The folder's display name. A folder's display name must be unique amongst its siblings. For example, no two folders with the same parent can share the same display name. The display name must start and end with a letter or digit, may contain letters, digits, spaces, hyphens and underscores and can be no longer than 30 characters. This is captured by the regular expression: `[\p{L}\p{N}]([\p{L}\p{N}_- ]{0,28}[\p{L}\p{N}])?`. */
		displayName?: string | null;

		/** Output only. A checksum computed by the server based on the current value of the folder resource. This may be sent on update and delete requests to ensure the client has an up-to-date value before proceeding. */
		etag?: string | null;

		/** Output only. The resource name of the folder. Its format is `folders/{folder_id}`, for example: "folders/1234". */
		name?: string | null;

		/** Required. The folder's parent's resource name. Updates to the folder's parent must be performed using MoveFolder. */
		parent?: string | null;

		/** Output only. The lifecycle state of the folder. Updates to the state must be performed using DeleteFolder and UndeleteFolder. */
		state?: FolderState | null;

		/** Output only. Timestamp when the folder was last modified. */
		updateTime?: string | null;
	}

	/** A folder in an organization's resource hierarchy, used to organize that organization's resources. */
	export interface FolderFormProperties {

		/** Output only. Timestamp when the folder was created. */
		createTime: FormControl<string | null | undefined>,

		/** Output only. Timestamp when the folder was requested to be deleted. */
		deleteTime: FormControl<string | null | undefined>,

		/** The folder's display name. A folder's display name must be unique amongst its siblings. For example, no two folders with the same parent can share the same display name. The display name must start and end with a letter or digit, may contain letters, digits, spaces, hyphens and underscores and can be no longer than 30 characters. This is captured by the regular expression: `[\p{L}\p{N}]([\p{L}\p{N}_- ]{0,28}[\p{L}\p{N}])?`. */
		displayName: FormControl<string | null | undefined>,

		/** Output only. A checksum computed by the server based on the current value of the folder resource. This may be sent on update and delete requests to ensure the client has an up-to-date value before proceeding. */
		etag: FormControl<string | null | undefined>,

		/** Output only. The resource name of the folder. Its format is `folders/{folder_id}`, for example: "folders/1234". */
		name: FormControl<string | null | undefined>,

		/** Required. The folder's parent's resource name. Updates to the folder's parent must be performed using MoveFolder. */
		parent: FormControl<string | null | undefined>,

		/** Output only. The lifecycle state of the folder. Updates to the state must be performed using DeleteFolder and UndeleteFolder. */
		state: FormControl<FolderState | null | undefined>,

		/** Output only. Timestamp when the folder was last modified. */
		updateTime: FormControl<string | null | undefined>,
	}
	export function CreateFolderFormGroup() {
		return new FormGroup<FolderFormProperties>({
			createTime: new FormControl<string | null | undefined>(undefined),
			deleteTime: new FormControl<string | null | undefined>(undefined),
			displayName: new FormControl<string | null | undefined>(undefined),
			etag: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			parent: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<FolderState | null | undefined>(undefined),
			updateTime: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum FolderState { STATE_UNSPECIFIED = 'STATE_UNSPECIFIED', ACTIVE = 'ACTIVE', DELETE_REQUESTED = 'DELETE_REQUESTED' }


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

	export enum FolderOperationErrorErrorMessageId { ERROR_TYPE_UNSPECIFIED = 'ERROR_TYPE_UNSPECIFIED', ACTIVE_FOLDER_HEIGHT_VIOLATION = 'ACTIVE_FOLDER_HEIGHT_VIOLATION', MAX_CHILD_FOLDERS_VIOLATION = 'MAX_CHILD_FOLDERS_VIOLATION', FOLDER_NAME_UNIQUENESS_VIOLATION = 'FOLDER_NAME_UNIQUENESS_VIOLATION', RESOURCE_DELETED_VIOLATION = 'RESOURCE_DELETED_VIOLATION', PARENT_DELETED_VIOLATION = 'PARENT_DELETED_VIOLATION', CYCLE_INTRODUCED_VIOLATION = 'CYCLE_INTRODUCED_VIOLATION', FOLDER_BEING_MOVED_VIOLATION = 'FOLDER_BEING_MOVED_VIOLATION', FOLDER_TO_DELETE_NON_EMPTY_VIOLATION = 'FOLDER_TO_DELETE_NON_EMPTY_VIOLATION', DELETED_FOLDER_HEIGHT_VIOLATION = 'DELETED_FOLDER_HEIGHT_VIOLATION' }


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


	/** A Lien represents an encumbrance on the actions that can be performed on a resource. */
	export interface Lien {

		/** The creation time of this Lien. */
		createTime?: string | null;

		/** A system-generated unique identifier for this Lien. Example: `liens/1234abcd` */
		name?: string | null;

		/** A stable, user-visible/meaningful string identifying the origin of the Lien, intended to be inspected programmatically. Maximum length of 200 characters. Example: 'compute.googleapis.com' */
		origin?: string | null;

		/** A reference to the resource this Lien is attached to. The server will validate the parent against those for which Liens are supported. Example: `projects/1234` */
		parent?: string | null;

		/** Concise user-visible strings indicating why an action cannot be performed on a resource. Maximum length of 200 characters. Example: 'Holds production API key' */
		reason?: string | null;

		/** The types of operations which should be blocked as a result of this Lien. Each value should correspond to an IAM permission. The server will validate the permissions against those for which Liens are supported. An empty list is meaningless and will be rejected. Example: ['resourcemanager.projects.delete'] */
		restrictions?: Array<string>;
	}

	/** A Lien represents an encumbrance on the actions that can be performed on a resource. */
	export interface LienFormProperties {

		/** The creation time of this Lien. */
		createTime: FormControl<string | null | undefined>,

		/** A system-generated unique identifier for this Lien. Example: `liens/1234abcd` */
		name: FormControl<string | null | undefined>,

		/** A stable, user-visible/meaningful string identifying the origin of the Lien, intended to be inspected programmatically. Maximum length of 200 characters. Example: 'compute.googleapis.com' */
		origin: FormControl<string | null | undefined>,

		/** A reference to the resource this Lien is attached to. The server will validate the parent against those for which Liens are supported. Example: `projects/1234` */
		parent: FormControl<string | null | undefined>,

		/** Concise user-visible strings indicating why an action cannot be performed on a resource. Maximum length of 200 characters. Example: 'Holds production API key' */
		reason: FormControl<string | null | undefined>,
	}
	export function CreateLienFormGroup() {
		return new FormGroup<LienFormProperties>({
			createTime: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			origin: new FormControl<string | null | undefined>(undefined),
			parent: new FormControl<string | null | undefined>(undefined),
			reason: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The response of ListEffectiveTags. */
	export interface ListEffectiveTagsResponse {

		/** A possibly paginated list of effective tags for the specified resource. */
		effectiveTags?: Array<EffectiveTag>;

		/** Pagination token. If the result set is too large to fit in a single response, this token is returned. It encodes the position of the current result cursor. Feeding this value into a new list request with the `page_token` parameter gives the next page of the results. When `next_page_token` is not filled in, there is no next page and the list returned is the last page in the result set. Pagination tokens have a limited lifetime. */
		nextPageToken?: string | null;
	}

	/** The response of ListEffectiveTags. */
	export interface ListEffectiveTagsResponseFormProperties {

		/** Pagination token. If the result set is too large to fit in a single response, this token is returned. It encodes the position of the current result cursor. Feeding this value into a new list request with the `page_token` parameter gives the next page of the results. When `next_page_token` is not filled in, there is no next page and the list returned is the last page in the result set. Pagination tokens have a limited lifetime. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListEffectiveTagsResponseFormGroup() {
		return new FormGroup<ListEffectiveTagsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The ListFolders response message. */
	export interface ListFoldersResponse {

		/** A possibly paginated list of folders that are direct descendants of the specified parent resource. */
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


	/** The response message for Liens.ListLiens. */
	export interface ListLiensResponse {

		/** A list of Liens. */
		liens?: Array<Lien>;

		/** Token to retrieve the next page of results, or empty if there are no more results in the list. */
		nextPageToken?: string | null;
	}

	/** The response message for Liens.ListLiens. */
	export interface ListLiensResponseFormProperties {

		/** Token to retrieve the next page of results, or empty if there are no more results in the list. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListLiensResponseFormGroup() {
		return new FormGroup<ListLiensResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A page of the response received from the ListProjects method. A paginated response where more pages are available has `next_page_token` set. This token can be used in a subsequent request to retrieve the next request page. NOTE: A response may contain fewer elements than the request `page_size` and still have a `next_page_token`. */
	export interface ListProjectsResponse {

		/** Pagination token. If the result set is too large to fit in a single response, this token is returned. It encodes the position of the current result cursor. Feeding this value into a new list request with the `page_token` parameter gives the next page of the results. When `next_page_token` is not filled in, there is no next page and the list returned is the last page in the result set. Pagination tokens have a limited lifetime. */
		nextPageToken?: string | null;

		/** The list of Projects under the parent. This list can be paginated. */
		projects?: Array<Project>;
	}

	/** A page of the response received from the ListProjects method. A paginated response where more pages are available has `next_page_token` set. This token can be used in a subsequent request to retrieve the next request page. NOTE: A response may contain fewer elements than the request `page_size` and still have a `next_page_token`. */
	export interface ListProjectsResponseFormProperties {

		/** Pagination token. If the result set is too large to fit in a single response, this token is returned. It encodes the position of the current result cursor. Feeding this value into a new list request with the `page_token` parameter gives the next page of the results. When `next_page_token` is not filled in, there is no next page and the list returned is the last page in the result set. Pagination tokens have a limited lifetime. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListProjectsResponseFormGroup() {
		return new FormGroup<ListProjectsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A project is a high-level Google Cloud entity. It is a container for ACLs, APIs, App Engine Apps, VMs, and other Google Cloud Platform resources. */
	export interface Project {

		/** Output only. Creation time. */
		createTime?: string | null;

		/** Output only. The time at which this resource was requested for deletion. */
		deleteTime?: string | null;

		/** Optional. A user-assigned display name of the project. When present it must be between 4 to 30 characters. Allowed characters are: lowercase and uppercase letters, numbers, hyphen, single-quote, double-quote, space, and exclamation point. Example: `My Project` */
		displayName?: string | null;

		/** Output only. A checksum computed by the server based on the current value of the Project resource. This may be sent on update and delete requests to ensure the client has an up-to-date value before proceeding. */
		etag?: string | null;

		/** Optional. The labels associated with this project. Label keys must be between 1 and 63 characters long and must conform to the following regular expression: \[a-z\](\[-a-z0-9\]*\[a-z0-9\])?. Label values must be between 0 and 63 characters long and must conform to the regular expression (\[a-z\](\[-a-z0-9\]*\[a-z0-9\])?)?. No more than 64 labels can be associated with a given resource. Clients should store labels in a representation such as JSON that does not depend on specific characters being disallowed. Example: `"myBusinessDimension" : "businessValue"` */
		labels?: {[id: string]: string };

		/** Output only. The unique resource name of the project. It is an int64 generated number prefixed by "projects/". Example: `projects/415104041262` */
		name?: string | null;

		/** Optional. A reference to a parent Resource. eg., `organizations/123` or `folders/876`. */
		parent?: string | null;

		/** Immutable. The unique, user-assigned id of the project. It must be 6 to 30 lowercase ASCII letters, digits, or hyphens. It must start with a letter. Trailing hyphens are prohibited. Example: `tokyo-rain-123` */
		projectId?: string | null;

		/** Output only. The project lifecycle state. */
		state?: FolderState | null;

		/** Output only. The most recent time this resource was modified. */
		updateTime?: string | null;
	}

	/** A project is a high-level Google Cloud entity. It is a container for ACLs, APIs, App Engine Apps, VMs, and other Google Cloud Platform resources. */
	export interface ProjectFormProperties {

		/** Output only. Creation time. */
		createTime: FormControl<string | null | undefined>,

		/** Output only. The time at which this resource was requested for deletion. */
		deleteTime: FormControl<string | null | undefined>,

		/** Optional. A user-assigned display name of the project. When present it must be between 4 to 30 characters. Allowed characters are: lowercase and uppercase letters, numbers, hyphen, single-quote, double-quote, space, and exclamation point. Example: `My Project` */
		displayName: FormControl<string | null | undefined>,

		/** Output only. A checksum computed by the server based on the current value of the Project resource. This may be sent on update and delete requests to ensure the client has an up-to-date value before proceeding. */
		etag: FormControl<string | null | undefined>,

		/** Optional. The labels associated with this project. Label keys must be between 1 and 63 characters long and must conform to the following regular expression: \[a-z\](\[-a-z0-9\]*\[a-z0-9\])?. Label values must be between 0 and 63 characters long and must conform to the regular expression (\[a-z\](\[-a-z0-9\]*\[a-z0-9\])?)?. No more than 64 labels can be associated with a given resource. Clients should store labels in a representation such as JSON that does not depend on specific characters being disallowed. Example: `"myBusinessDimension" : "businessValue"` */
		labels: FormControl<{[id: string]: string } | null | undefined>,

		/** Output only. The unique resource name of the project. It is an int64 generated number prefixed by "projects/". Example: `projects/415104041262` */
		name: FormControl<string | null | undefined>,

		/** Optional. A reference to a parent Resource. eg., `organizations/123` or `folders/876`. */
		parent: FormControl<string | null | undefined>,

		/** Immutable. The unique, user-assigned id of the project. It must be 6 to 30 lowercase ASCII letters, digits, or hyphens. It must start with a letter. Trailing hyphens are prohibited. Example: `tokyo-rain-123` */
		projectId: FormControl<string | null | undefined>,

		/** Output only. The project lifecycle state. */
		state: FormControl<FolderState | null | undefined>,

		/** Output only. The most recent time this resource was modified. */
		updateTime: FormControl<string | null | undefined>,
	}
	export function CreateProjectFormGroup() {
		return new FormGroup<ProjectFormProperties>({
			createTime: new FormControl<string | null | undefined>(undefined),
			deleteTime: new FormControl<string | null | undefined>(undefined),
			displayName: new FormControl<string | null | undefined>(undefined),
			etag: new FormControl<string | null | undefined>(undefined),
			labels: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			parent: new FormControl<string | null | undefined>(undefined),
			projectId: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<FolderState | null | undefined>(undefined),
			updateTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The ListTagBindings response. */
	export interface ListTagBindingsResponse {

		/** Pagination token. If the result set is too large to fit in a single response, this token is returned. It encodes the position of the current result cursor. Feeding this value into a new list request with the `page_token` parameter gives the next page of the results. When `next_page_token` is not filled in, there is no next page and the list returned is the last page in the result set. Pagination tokens have a limited lifetime. */
		nextPageToken?: string | null;

		/** A possibly paginated list of TagBindings for the specified resource. */
		tagBindings?: Array<TagBinding>;
	}

	/** The ListTagBindings response. */
	export interface ListTagBindingsResponseFormProperties {

		/** Pagination token. If the result set is too large to fit in a single response, this token is returned. It encodes the position of the current result cursor. Feeding this value into a new list request with the `page_token` parameter gives the next page of the results. When `next_page_token` is not filled in, there is no next page and the list returned is the last page in the result set. Pagination tokens have a limited lifetime. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListTagBindingsResponseFormGroup() {
		return new FormGroup<ListTagBindingsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A TagBinding represents a connection between a TagValue and a cloud resource Once a TagBinding is created, the TagValue is applied to all the descendants of the Google Cloud resource. */
	export interface TagBinding {

		/** Output only. The name of the TagBinding. This is a String of the form: `tagBindings/{full-resource-name}/{tag-value-name}` (e.g. `tagBindings/%2F%2Fcloudresourcemanager.googleapis.com%2Fprojects%2F123/tagValues/456`). */
		name?: string | null;

		/** The full resource name of the resource the TagValue is bound to. E.g. `//cloudresourcemanager.googleapis.com/projects/123` */
		parent?: string | null;

		/** The TagValue of the TagBinding. Must be of the form `tagValues/456`. */
		tagValue?: string | null;

		/** The namespaced name for the TagValue of the TagBinding. Must be in the format `{parent_id}/{tag_key_short_name}/{short_name}`. For methods that support TagValue namespaced name, only one of tag_value_namespaced_name or tag_value may be filled. Requests with both fields will be rejected. */
		tagValueNamespacedName?: string | null;
	}

	/** A TagBinding represents a connection between a TagValue and a cloud resource Once a TagBinding is created, the TagValue is applied to all the descendants of the Google Cloud resource. */
	export interface TagBindingFormProperties {

		/** Output only. The name of the TagBinding. This is a String of the form: `tagBindings/{full-resource-name}/{tag-value-name}` (e.g. `tagBindings/%2F%2Fcloudresourcemanager.googleapis.com%2Fprojects%2F123/tagValues/456`). */
		name: FormControl<string | null | undefined>,

		/** The full resource name of the resource the TagValue is bound to. E.g. `//cloudresourcemanager.googleapis.com/projects/123` */
		parent: FormControl<string | null | undefined>,

		/** The TagValue of the TagBinding. Must be of the form `tagValues/456`. */
		tagValue: FormControl<string | null | undefined>,

		/** The namespaced name for the TagValue of the TagBinding. Must be in the format `{parent_id}/{tag_key_short_name}/{short_name}`. For methods that support TagValue namespaced name, only one of tag_value_namespaced_name or tag_value may be filled. Requests with both fields will be rejected. */
		tagValueNamespacedName: FormControl<string | null | undefined>,
	}
	export function CreateTagBindingFormGroup() {
		return new FormGroup<TagBindingFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			parent: new FormControl<string | null | undefined>(undefined),
			tagValue: new FormControl<string | null | undefined>(undefined),
			tagValueNamespacedName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The ListTagHolds response. */
	export interface ListTagHoldsResponse {

		/** Pagination token. If the result set is too large to fit in a single response, this token is returned. It encodes the position of the current result cursor. Feeding this value into a new list request with the `page_token` parameter gives the next page of the results. When `next_page_token` is not filled in, there is no next page and the list returned is the last page in the result set. Pagination tokens have a limited lifetime. */
		nextPageToken?: string | null;

		/** A possibly paginated list of TagHolds. */
		tagHolds?: Array<TagHold>;
	}

	/** The ListTagHolds response. */
	export interface ListTagHoldsResponseFormProperties {

		/** Pagination token. If the result set is too large to fit in a single response, this token is returned. It encodes the position of the current result cursor. Feeding this value into a new list request with the `page_token` parameter gives the next page of the results. When `next_page_token` is not filled in, there is no next page and the list returned is the last page in the result set. Pagination tokens have a limited lifetime. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListTagHoldsResponseFormGroup() {
		return new FormGroup<ListTagHoldsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A TagHold represents the use of a TagValue that is not captured by TagBindings. If a TagValue has any TagHolds, deletion will be blocked. This resource is intended to be created in the same cloud location as the `holder`. */
	export interface TagHold {

		/** Output only. The time this TagHold was created. */
		createTime?: string | null;

		/** Optional. A URL where an end user can learn more about removing this hold. E.g. `https://cloud.google.com/resource-manager/docs/tags/tags-creating-and-managing` */
		helpLink?: string | null;

		/** Required. The name of the resource where the TagValue is being used. Must be less than 200 characters. E.g. `//compute.googleapis.com/compute/projects/myproject/regions/us-east-1/instanceGroupManagers/instance-group` */
		holder?: string | null;

		/** Output only. The resource name of a TagHold. This is a String of the form: `tagValues/{tag-value-id}/tagHolds/{tag-hold-id}` (e.g. `tagValues/123/tagHolds/456`). This resource name is generated by the server. */
		name?: string | null;

		/** Optional. An optional string representing the origin of this request. This field should include human-understandable information to distinguish origins from each other. Must be less than 200 characters. E.g. `migs-35678234` */
		origin?: string | null;
	}

	/** A TagHold represents the use of a TagValue that is not captured by TagBindings. If a TagValue has any TagHolds, deletion will be blocked. This resource is intended to be created in the same cloud location as the `holder`. */
	export interface TagHoldFormProperties {

		/** Output only. The time this TagHold was created. */
		createTime: FormControl<string | null | undefined>,

		/** Optional. A URL where an end user can learn more about removing this hold. E.g. `https://cloud.google.com/resource-manager/docs/tags/tags-creating-and-managing` */
		helpLink: FormControl<string | null | undefined>,

		/** Required. The name of the resource where the TagValue is being used. Must be less than 200 characters. E.g. `//compute.googleapis.com/compute/projects/myproject/regions/us-east-1/instanceGroupManagers/instance-group` */
		holder: FormControl<string | null | undefined>,

		/** Output only. The resource name of a TagHold. This is a String of the form: `tagValues/{tag-value-id}/tagHolds/{tag-hold-id}` (e.g. `tagValues/123/tagHolds/456`). This resource name is generated by the server. */
		name: FormControl<string | null | undefined>,

		/** Optional. An optional string representing the origin of this request. This field should include human-understandable information to distinguish origins from each other. Must be less than 200 characters. E.g. `migs-35678234` */
		origin: FormControl<string | null | undefined>,
	}
	export function CreateTagHoldFormGroup() {
		return new FormGroup<TagHoldFormProperties>({
			createTime: new FormControl<string | null | undefined>(undefined),
			helpLink: new FormControl<string | null | undefined>(undefined),
			holder: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			origin: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The ListTagKeys response message. */
	export interface ListTagKeysResponse {

		/** A pagination token returned from a previous call to `ListTagKeys` that indicates from where listing should continue. */
		nextPageToken?: string | null;

		/** List of TagKeys that live under the specified parent in the request. */
		tagKeys?: Array<TagKey>;
	}

	/** The ListTagKeys response message. */
	export interface ListTagKeysResponseFormProperties {

		/** A pagination token returned from a previous call to `ListTagKeys` that indicates from where listing should continue. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListTagKeysResponseFormGroup() {
		return new FormGroup<ListTagKeysResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A TagKey, used to group a set of TagValues. */
	export interface TagKey {

		/** Output only. Creation time. */
		createTime?: string | null;

		/** Optional. User-assigned description of the TagKey. Must not exceed 256 characters. Read-write. */
		description?: string | null;

		/** Optional. Entity tag which users can pass to prevent race conditions. This field is always set in server responses. See UpdateTagKeyRequest for details. */
		etag?: string | null;

		/** Immutable. The resource name for a TagKey. Must be in the format `tagKeys/{tag_key_id}`, where `tag_key_id` is the generated numeric id for the TagKey. */
		name?: string | null;

		/** Output only. Immutable. Namespaced name of the TagKey. */
		namespacedName?: string | null;

		/** Immutable. The resource name of the TagKey's parent. A TagKey can be parented by an Organization or a Project. For a TagKey parented by an Organization, its parent must be in the form `organizations/{org_id}`. For a TagKey parented by a Project, its parent can be in the form `projects/{project_id}` or `projects/{project_number}`. */
		parent?: string | null;

		/** Optional. A purpose denotes that this Tag is intended for use in policies of a specific policy engine, and will involve that policy engine in management operations involving this Tag. A purpose does not grant a policy engine exclusive rights to the Tag, and it may be referenced by other policy engines. A purpose cannot be changed once set. */
		purpose?: TagKeyPurpose | null;

		/** Optional. Purpose data corresponds to the policy system that the tag is intended for. See documentation for `Purpose` for formatting of this field. Purpose data cannot be changed once set. */
		purposeData?: {[id: string]: string };

		/** Required. Immutable. The user friendly name for a TagKey. The short name should be unique for TagKeys within the same tag namespace. The short name must be 1-63 characters, beginning and ending with an alphanumeric character ([a-z0-9A-Z]) with dashes (-), underscores (_), dots (.), and alphanumerics between. */
		shortName?: string | null;

		/** Output only. Update time. */
		updateTime?: string | null;
	}

	/** A TagKey, used to group a set of TagValues. */
	export interface TagKeyFormProperties {

		/** Output only. Creation time. */
		createTime: FormControl<string | null | undefined>,

		/** Optional. User-assigned description of the TagKey. Must not exceed 256 characters. Read-write. */
		description: FormControl<string | null | undefined>,

		/** Optional. Entity tag which users can pass to prevent race conditions. This field is always set in server responses. See UpdateTagKeyRequest for details. */
		etag: FormControl<string | null | undefined>,

		/** Immutable. The resource name for a TagKey. Must be in the format `tagKeys/{tag_key_id}`, where `tag_key_id` is the generated numeric id for the TagKey. */
		name: FormControl<string | null | undefined>,

		/** Output only. Immutable. Namespaced name of the TagKey. */
		namespacedName: FormControl<string | null | undefined>,

		/** Immutable. The resource name of the TagKey's parent. A TagKey can be parented by an Organization or a Project. For a TagKey parented by an Organization, its parent must be in the form `organizations/{org_id}`. For a TagKey parented by a Project, its parent can be in the form `projects/{project_id}` or `projects/{project_number}`. */
		parent: FormControl<string | null | undefined>,

		/** Optional. A purpose denotes that this Tag is intended for use in policies of a specific policy engine, and will involve that policy engine in management operations involving this Tag. A purpose does not grant a policy engine exclusive rights to the Tag, and it may be referenced by other policy engines. A purpose cannot be changed once set. */
		purpose: FormControl<TagKeyPurpose | null | undefined>,

		/** Optional. Purpose data corresponds to the policy system that the tag is intended for. See documentation for `Purpose` for formatting of this field. Purpose data cannot be changed once set. */
		purposeData: FormControl<{[id: string]: string } | null | undefined>,

		/** Required. Immutable. The user friendly name for a TagKey. The short name should be unique for TagKeys within the same tag namespace. The short name must be 1-63 characters, beginning and ending with an alphanumeric character ([a-z0-9A-Z]) with dashes (-), underscores (_), dots (.), and alphanumerics between. */
		shortName: FormControl<string | null | undefined>,

		/** Output only. Update time. */
		updateTime: FormControl<string | null | undefined>,
	}
	export function CreateTagKeyFormGroup() {
		return new FormGroup<TagKeyFormProperties>({
			createTime: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			etag: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			namespacedName: new FormControl<string | null | undefined>(undefined),
			parent: new FormControl<string | null | undefined>(undefined),
			purpose: new FormControl<TagKeyPurpose | null | undefined>(undefined),
			purposeData: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			shortName: new FormControl<string | null | undefined>(undefined),
			updateTime: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum TagKeyPurpose { PURPOSE_UNSPECIFIED = 'PURPOSE_UNSPECIFIED', GCE_FIREWALL = 'GCE_FIREWALL', DATA_GOVERNANCE = 'DATA_GOVERNANCE' }


	/** The ListTagValues response. */
	export interface ListTagValuesResponse {

		/** A pagination token returned from a previous call to `ListTagValues` that indicates from where listing should continue. This is currently not used, but the server may at any point start supplying a valid token. */
		nextPageToken?: string | null;

		/** A possibly paginated list of TagValues that are direct descendants of the specified parent TagKey. */
		tagValues?: Array<TagValue>;
	}

	/** The ListTagValues response. */
	export interface ListTagValuesResponseFormProperties {

		/** A pagination token returned from a previous call to `ListTagValues` that indicates from where listing should continue. This is currently not used, but the server may at any point start supplying a valid token. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListTagValuesResponseFormGroup() {
		return new FormGroup<ListTagValuesResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A TagValue is a child of a particular TagKey. This is used to group cloud resources for the purpose of controlling them using policies. */
	export interface TagValue {

		/** Output only. Creation time. */
		createTime?: string | null;

		/** Optional. User-assigned description of the TagValue. Must not exceed 256 characters. Read-write. */
		description?: string | null;

		/** Optional. Entity tag which users can pass to prevent race conditions. This field is always set in server responses. See UpdateTagValueRequest for details. */
		etag?: string | null;

		/** Immutable. Resource name for TagValue in the format `tagValues/456`. */
		name?: string | null;

		/** Output only. The namespaced name of the TagValue. Can be in the form `{organization_id}/{tag_key_short_name}/{tag_value_short_name}` or `{project_id}/{tag_key_short_name}/{tag_value_short_name}` or `{project_number}/{tag_key_short_name}/{tag_value_short_name}`. */
		namespacedName?: string | null;

		/** Immutable. The resource name of the new TagValue's parent TagKey. Must be of the form `tagKeys/{tag_key_id}`. */
		parent?: string | null;

		/** Required. Immutable. User-assigned short name for TagValue. The short name should be unique for TagValues within the same parent TagKey. The short name must be 63 characters or less, beginning and ending with an alphanumeric character ([a-z0-9A-Z]) with dashes (-), underscores (_), dots (.), and alphanumerics between. */
		shortName?: string | null;

		/** Output only. Update time. */
		updateTime?: string | null;
	}

	/** A TagValue is a child of a particular TagKey. This is used to group cloud resources for the purpose of controlling them using policies. */
	export interface TagValueFormProperties {

		/** Output only. Creation time. */
		createTime: FormControl<string | null | undefined>,

		/** Optional. User-assigned description of the TagValue. Must not exceed 256 characters. Read-write. */
		description: FormControl<string | null | undefined>,

		/** Optional. Entity tag which users can pass to prevent race conditions. This field is always set in server responses. See UpdateTagValueRequest for details. */
		etag: FormControl<string | null | undefined>,

		/** Immutable. Resource name for TagValue in the format `tagValues/456`. */
		name: FormControl<string | null | undefined>,

		/** Output only. The namespaced name of the TagValue. Can be in the form `{organization_id}/{tag_key_short_name}/{tag_value_short_name}` or `{project_id}/{tag_key_short_name}/{tag_value_short_name}` or `{project_number}/{tag_key_short_name}/{tag_value_short_name}`. */
		namespacedName: FormControl<string | null | undefined>,

		/** Immutable. The resource name of the new TagValue's parent TagKey. Must be of the form `tagKeys/{tag_key_id}`. */
		parent: FormControl<string | null | undefined>,

		/** Required. Immutable. User-assigned short name for TagValue. The short name should be unique for TagValues within the same parent TagKey. The short name must be 63 characters or less, beginning and ending with an alphanumeric character ([a-z0-9A-Z]) with dashes (-), underscores (_), dots (.), and alphanumerics between. */
		shortName: FormControl<string | null | undefined>,

		/** Output only. Update time. */
		updateTime: FormControl<string | null | undefined>,
	}
	export function CreateTagValueFormGroup() {
		return new FormGroup<TagValueFormProperties>({
			createTime: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			etag: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			namespacedName: new FormControl<string | null | undefined>(undefined),
			parent: new FormControl<string | null | undefined>(undefined),
			shortName: new FormControl<string | null | undefined>(undefined),
			updateTime: new FormControl<string | null | undefined>(undefined),
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

		/** Required. The resource name of the folder or organization which should be the folder's new parent. Must be of the form `folders/{folder_id}` or `organizations/{org_id}`. */
		destinationParent?: string | null;
	}

	/** The MoveFolder request message. */
	export interface MoveFolderRequestFormProperties {

		/** Required. The resource name of the folder or organization which should be the folder's new parent. Must be of the form `folders/{folder_id}` or `organizations/{org_id}`. */
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


	/** The request sent to MoveProject method. */
	export interface MoveProjectRequest {

		/** Required. The new parent to move the Project under. */
		destinationParent?: string | null;
	}

	/** The request sent to MoveProject method. */
	export interface MoveProjectRequestFormProperties {

		/** Required. The new parent to move the Project under. */
		destinationParent: FormControl<string | null | undefined>,
	}
	export function CreateMoveProjectRequestFormGroup() {
		return new FormGroup<MoveProjectRequestFormProperties>({
			destinationParent: new FormControl<string | null | undefined>(undefined),
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


	/** The root node in the resource hierarchy to which a particular entity's (a company, for example) resources belong. */
	export interface Organization {

		/** Output only. Timestamp when the Organization was created. */
		createTime?: string | null;

		/** Output only. Timestamp when the Organization was requested for deletion. */
		deleteTime?: string | null;

		/** Immutable. The G Suite / Workspace customer id used in the Directory API. */
		directoryCustomerId?: string | null;

		/** Output only. A human-readable string that refers to the organization in the Google Cloud Console. This string is set by the server and cannot be changed. The string will be set to the primary domain (for example, "google.com") of the Google Workspace customer that owns the organization. */
		displayName?: string | null;

		/** Output only. A checksum computed by the server based on the current value of the Organization resource. This may be sent on update and delete requests to ensure the client has an up-to-date value before proceeding. */
		etag?: string | null;

		/** Output only. The resource name of the organization. This is the organization's relative path in the API. Its format is "organizations/[organization_id]". For example, "organizations/1234". */
		name?: string | null;

		/** Output only. The organization's current lifecycle state. */
		state?: FolderState | null;

		/** Output only. Timestamp when the Organization was last modified. */
		updateTime?: string | null;
	}

	/** The root node in the resource hierarchy to which a particular entity's (a company, for example) resources belong. */
	export interface OrganizationFormProperties {

		/** Output only. Timestamp when the Organization was created. */
		createTime: FormControl<string | null | undefined>,

		/** Output only. Timestamp when the Organization was requested for deletion. */
		deleteTime: FormControl<string | null | undefined>,

		/** Immutable. The G Suite / Workspace customer id used in the Directory API. */
		directoryCustomerId: FormControl<string | null | undefined>,

		/** Output only. A human-readable string that refers to the organization in the Google Cloud Console. This string is set by the server and cannot be changed. The string will be set to the primary domain (for example, "google.com") of the Google Workspace customer that owns the organization. */
		displayName: FormControl<string | null | undefined>,

		/** Output only. A checksum computed by the server based on the current value of the Organization resource. This may be sent on update and delete requests to ensure the client has an up-to-date value before proceeding. */
		etag: FormControl<string | null | undefined>,

		/** Output only. The resource name of the organization. This is the organization's relative path in the API. Its format is "organizations/[organization_id]". For example, "organizations/1234". */
		name: FormControl<string | null | undefined>,

		/** Output only. The organization's current lifecycle state. */
		state: FormControl<FolderState | null | undefined>,

		/** Output only. Timestamp when the Organization was last modified. */
		updateTime: FormControl<string | null | undefined>,
	}
	export function CreateOrganizationFormGroup() {
		return new FormGroup<OrganizationFormProperties>({
			createTime: new FormControl<string | null | undefined>(undefined),
			deleteTime: new FormControl<string | null | undefined>(undefined),
			directoryCustomerId: new FormControl<string | null | undefined>(undefined),
			displayName: new FormControl<string | null | undefined>(undefined),
			etag: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<FolderState | null | undefined>(undefined),
			updateTime: new FormControl<string | null | undefined>(undefined),
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


	/** The response returned from the `SearchOrganizations` method. */
	export interface SearchOrganizationsResponse {

		/** A pagination token to be used to retrieve the next page of results. If the result is too large to fit within the page size specified in the request, this field will be set with a token that can be used to fetch the next page of results. If this field is empty, it indicates that this response contains the last page of results. */
		nextPageToken?: string | null;

		/** The list of Organizations that matched the search query, possibly paginated. */
		organizations?: Array<Organization>;
	}

	/** The response returned from the `SearchOrganizations` method. */
	export interface SearchOrganizationsResponseFormProperties {

		/** A pagination token to be used to retrieve the next page of results. If the result is too large to fit within the page size specified in the request, this field will be set with a token that can be used to fetch the next page of results. If this field is empty, it indicates that this response contains the last page of results. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateSearchOrganizationsResponseFormGroup() {
		return new FormGroup<SearchOrganizationsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A page of the response received from the SearchProjects method. A paginated response where more pages are available has `next_page_token` set. This token can be used in a subsequent request to retrieve the next request page. */
	export interface SearchProjectsResponse {

		/** Pagination token. If the result set is too large to fit in a single response, this token is returned. It encodes the position of the current result cursor. Feeding this value into a new list request with the `page_token` parameter gives the next page of the results. When `next_page_token` is not filled in, there is no next page and the list returned is the last page in the result set. Pagination tokens have a limited lifetime. */
		nextPageToken?: string | null;

		/** The list of Projects that matched the list filter query. This list can be paginated. */
		projects?: Array<Project>;
	}

	/** A page of the response received from the SearchProjects method. A paginated response where more pages are available has `next_page_token` set. This token can be used in a subsequent request to retrieve the next request page. */
	export interface SearchProjectsResponseFormProperties {

		/** Pagination token. If the result set is too large to fit in a single response, this token is returned. It encodes the position of the current result cursor. Feeding this value into a new list request with the `page_token` parameter gives the next page of the results. When `next_page_token` is not filled in, there is no next page and the list returned is the last page in the result set. Pagination tokens have a limited lifetime. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateSearchProjectsResponseFormGroup() {
		return new FormGroup<SearchProjectsResponseFormProperties>({
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


	/** The request sent to the UndeleteProject method. */
	export interface UndeleteProjectRequest {
	}

	/** The request sent to the UndeleteProject method. */
	export interface UndeleteProjectRequestFormProperties {
	}
	export function CreateUndeleteProjectRequestFormGroup() {
		return new FormGroup<UndeleteProjectRequestFormProperties>({
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
		 * Return a list of effective tags for the given Google Cloud resource, as specified in `parent`.
		 * Get v3/effectiveTags
		 * @param {number} pageSize Optional. The maximum number of effective tags to return in the response. The server allows a maximum of 300 effective tags to return in a single page. If unspecified, the server will use 100 as the default.
		 * @param {string} pageToken Optional. A pagination token returned from a previous call to `ListEffectiveTags` that indicates from where this listing should continue.
		 * @param {string} parent Required. The full resource name of a resource for which you want to list the effective tags. E.g. "//cloudresourcemanager.googleapis.com/projects/123"
		 * @return {ListEffectiveTagsResponse} Successful response
		 */
		Cloudresourcemanager_effectiveTags_list(pageSize: number | null | undefined, pageToken: string | null | undefined, parent: string | null | undefined): Observable<ListEffectiveTagsResponse> {
			return this.http.get<ListEffectiveTagsResponse>(this.baseUri + 'v3/effectiveTags?pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '&parent=' + (parent == null ? '' : encodeURIComponent(parent)), {});
		}

		/**
		 * Lists the folders that are direct descendants of supplied parent resource. `list()` provides a strongly consistent view of the folders underneath the specified parent resource. `list()` returns folders sorted based upon the (ascending) lexical ordering of their display_name. The caller must have `resourcemanager.folders.list` permission on the identified parent.
		 * Get v3/folders
		 * @param {number} pageSize Optional. The maximum number of folders to return in the response. The server can return fewer folders than requested. If unspecified, server picks an appropriate default.
		 * @param {string} pageToken Optional. A pagination token returned from a previous call to `ListFolders` that indicates where this listing should continue from.
		 * @param {string} parent Required. The name of the parent resource whose folders are being listed. Only children of this parent resource are listed; descendants are not listed. If the parent is a folder, use the value `folders/{folder_id}`. If the parent is an organization, use the value `organizations/{org_id}`. Access to this method is controlled by checking the `resourcemanager.folders.list` permission on the `parent`.
		 * @param {boolean} showDeleted Optional. Controls whether folders in the DELETE_REQUESTED state should be returned. Defaults to false.
		 * @return {ListFoldersResponse} Successful response
		 */
		Cloudresourcemanager_folders_list(pageSize: number | null | undefined, pageToken: string | null | undefined, parent: string | null | undefined, showDeleted: boolean | null | undefined): Observable<ListFoldersResponse> {
			return this.http.get<ListFoldersResponse>(this.baseUri + 'v3/folders?pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '&parent=' + (parent == null ? '' : encodeURIComponent(parent)) + '&showDeleted=' + showDeleted, {});
		}

		/**
		 * Creates a folder in the resource hierarchy. Returns an `Operation` which can be used to track the progress of the folder creation workflow. Upon success, the `Operation.response` field will be populated with the created Folder. In order to succeed, the addition of this new folder must not violate the folder naming, height, or fanout constraints. + The folder's `display_name` must be distinct from all other folders that share its parent. + The addition of the folder must not cause the active folder hierarchy to exceed a height of 10. Note, the full active + deleted folder hierarchy is allowed to reach a height of 20; this provides additional headroom when moving folders that contain deleted folders. + The addition of the folder must not cause the total number of folders under its parent to exceed 300. If the operation fails due to a folder constraint violation, some errors may be returned by the `CreateFolder` request, with status code `FAILED_PRECONDITION` and an error description. Other folder constraint violations will be communicated in the `Operation`, with the specific `PreconditionFailure` returned in the details list in the `Operation.error` field. The caller must have `resourcemanager.folders.create` permission on the identified parent.
		 * Post v3/folders
		 * @return {Operation} Successful response
		 */
		Cloudresourcemanager_folders_create(requestBody: Folder): Observable<Operation> {
			return this.http.post<Operation>(this.baseUri + 'v3/folders', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Search for folders that match specific filter criteria. `search()` provides an eventually consistent view of the folders a user has access to which meet the specified filter criteria. This will only return folders on which the caller has the permission `resourcemanager.folders.get`.
		 * Get v3/folders:search
		 * @param {number} pageSize Optional. The maximum number of folders to return in the response. The server can return fewer folders than requested. If unspecified, server picks an appropriate default.
		 * @param {string} pageToken Optional. A pagination token returned from a previous call to `SearchFolders` that indicates from where search should continue.
		 * @param {string} query Optional. Search criteria used to select the folders to return. If no search criteria is specified then all accessible folders will be returned. Query expressions can be used to restrict results based upon displayName, state and parent, where the operators `=` (`:`) `NOT`, `AND` and `OR` can be used along with the suffix wildcard symbol `*`. The `displayName` field in a query expression should use escaped quotes for values that include whitespace to prevent unexpected behavior. ``` | Field | Description | |-------------------------|----------------------------------------| | displayName | Filters by displayName. | | parent | Filters by parent (for example: folders/123). | | state, lifecycleState | Filters by state. | ``` Some example queries are: * Query `displayName=Test*` returns Folder resources whose display name starts with "Test". * Query `state=ACTIVE` returns Folder resources with `state` set to `ACTIVE`. * Query `parent=folders/123` returns Folder resources that have `folders/123` as a parent resource. * Query `parent=folders/123 AND state=ACTIVE` returns active Folder resources that have `folders/123` as a parent resource. * Query `displayName=\\"Test String\\"` returns Folder resources with display names that include both "Test" and "String".
		 * @return {SearchFoldersResponse} Successful response
		 */
		Cloudresourcemanager_folders_search(pageSize: number | null | undefined, pageToken: string | null | undefined, query: string | null | undefined): Observable<SearchFoldersResponse> {
			return this.http.get<SearchFoldersResponse>(this.baseUri + 'v3/folders:search?pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '&query=' + (query == null ? '' : encodeURIComponent(query)), {});
		}

		/**
		 * List all Liens applied to the `parent` resource. Callers of this method will require permission on the `parent` resource. For example, a Lien with a `parent` of `projects/1234` requires permission `resourcemanager.projects.get`.
		 * Get v3/liens
		 * @param {number} pageSize The maximum number of items to return. This is a suggestion for the server. The server can return fewer liens than requested. If unspecified, server picks an appropriate default.
		 * @param {string} pageToken The `next_page_token` value returned from a previous List request, if any.
		 * @param {string} parent Required. The name of the resource to list all attached Liens. For example, `projects/1234`. (google.api.field_policy).resource_type annotation is not set since the parent depends on the meta api implementation. This field could be a project or other sub project resources.
		 * @return {ListLiensResponse} Successful response
		 */
		Cloudresourcemanager_liens_list(pageSize: number | null | undefined, pageToken: string | null | undefined, parent: string | null | undefined): Observable<ListLiensResponse> {
			return this.http.get<ListLiensResponse>(this.baseUri + 'v3/liens?pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '&parent=' + (parent == null ? '' : encodeURIComponent(parent)), {});
		}

		/**
		 * Create a Lien which applies to the resource denoted by the `parent` field. Callers of this method will require permission on the `parent` resource. For example, applying to `projects/1234` requires permission `resourcemanager.projects.updateLiens`. NOTE: Some resources may limit the number of Liens which may be applied.
		 * Post v3/liens
		 * @return {Lien} Successful response
		 */
		Cloudresourcemanager_liens_create(requestBody: Lien): Observable<Lien> {
			return this.http.post<Lien>(this.baseUri + 'v3/liens', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Searches organization resources that are visible to the user and satisfy the specified filter. This method returns organizations in an unspecified order. New organizations do not necessarily appear at the end of the results, and may take a small amount of time to appear. Search will only return organizations on which the user has the permission `resourcemanager.organizations.get` or has super admin privileges.
		 * Get v3/organizations:search
		 * @param {number} pageSize Optional. The maximum number of organizations to return in the response. The server can return fewer organizations than requested. If unspecified, server picks an appropriate default.
		 * @param {string} pageToken Optional. A pagination token returned from a previous call to `SearchOrganizations` that indicates from where listing should continue.
		 * @param {string} query Optional. An optional query string used to filter the Organizations to return in the response. Query rules are case-insensitive. ``` | Field | Description | |------------------|--------------------------------------------| | directoryCustomerId, owner.directoryCustomerId | Filters by directory customer id. | | domain | Filters by domain. | ``` Organizations may be queried by `directoryCustomerId` or by `domain`, where the domain is a G Suite domain, for example: * Query `directorycustomerid:123456789` returns Organization resources with `owner.directory_customer_id` equal to `123456789`. * Query `domain:google.com` returns Organization resources corresponding to the domain `google.com`.
		 * @return {SearchOrganizationsResponse} Successful response
		 */
		Cloudresourcemanager_organizations_search(pageSize: number | null | undefined, pageToken: string | null | undefined, query: string | null | undefined): Observable<SearchOrganizationsResponse> {
			return this.http.get<SearchOrganizationsResponse>(this.baseUri + 'v3/organizations:search?pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '&query=' + (query == null ? '' : encodeURIComponent(query)), {});
		}

		/**
		 * Lists projects that are direct children of the specified folder or organization resource. `list()` provides a strongly consistent view of the projects underneath the specified parent resource. `list()` returns projects sorted based upon the (ascending) lexical ordering of their `display_name`. The caller must have `resourcemanager.projects.list` permission on the identified parent.
		 * Get v3/projects
		 * @param {number} pageSize Optional. The maximum number of projects to return in the response. The server can return fewer projects than requested. If unspecified, server picks an appropriate default.
		 * @param {string} pageToken Optional. A pagination token returned from a previous call to ListProjects that indicates from where listing should continue.
		 * @param {string} parent Required. The name of the parent resource whose projects are being listed. Only children of this parent resource are listed; descendants are not listed. If the parent is a folder, use the value `folders/{folder_id}`. If the parent is an organization, use the value `organizations/{org_id}`.
		 * @param {boolean} showDeleted Optional. Indicate that projects in the `DELETE_REQUESTED` state should also be returned. Normally only `ACTIVE` projects are returned.
		 * @return {ListProjectsResponse} Successful response
		 */
		Cloudresourcemanager_projects_list(pageSize: number | null | undefined, pageToken: string | null | undefined, parent: string | null | undefined, showDeleted: boolean | null | undefined): Observable<ListProjectsResponse> {
			return this.http.get<ListProjectsResponse>(this.baseUri + 'v3/projects?pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '&parent=' + (parent == null ? '' : encodeURIComponent(parent)) + '&showDeleted=' + showDeleted, {});
		}

		/**
		 * Request that a new project be created. The result is an `Operation` which can be used to track the creation process. This process usually takes a few seconds, but can sometimes take much longer. The tracking `Operation` is automatically deleted after a few hours, so there is no need to call `DeleteOperation`.
		 * Post v3/projects
		 * @return {Operation} Successful response
		 */
		Cloudresourcemanager_projects_create(requestBody: Project): Observable<Operation> {
			return this.http.post<Operation>(this.baseUri + 'v3/projects', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Search for projects that the caller has the `resourcemanager.projects.get` permission on, and also satisfy the specified query. This method returns projects in an unspecified order. This method is eventually consistent with project mutations; this means that a newly created project may not appear in the results or recent updates to an existing project may not be reflected in the results. To retrieve the latest state of a project, use the GetProject method.
		 * Get v3/projects:search
		 * @param {number} pageSize Optional. The maximum number of projects to return in the response. The server can return fewer projects than requested. If unspecified, server picks an appropriate default.
		 * @param {string} pageToken Optional. A pagination token returned from a previous call to ListProjects that indicates from where listing should continue.
		 * @param {string} query Optional. A query string for searching for projects that the caller has `resourcemanager.projects.get` permission to. If multiple fields are included in the query, then it will return results that match any of the fields. Some eligible fields are: ``` | Field | Description | |-------------------------|----------------------------------------------| | displayName, name | Filters by displayName. | | parent | Project's parent (for example: folders/123, organizations/*). Prefer parent field over parent.type and parent.id.| | parent.type | Parent's type: `folder` or `organization`. | | parent.id | Parent's id number (for example: 123) | | id, projectId | Filters by projectId. | | state, lifecycleState | Filters by state. | | labels | Filters by label name or value. | | labels.\ (where *key* is the name of a label) | Filters by label name.| ``` Search expressions are case insensitive. Some examples queries: ``` | Query | Description | |------------------|-----------------------------------------------------| | name:how* | The project's name starts with "how". | | name:Howl | The project's name is `Howl` or `howl`. | | name:HOWL | Equivalent to above. | | NAME:howl | Equivalent to above. | | labels.color:* | The project has the label `color`. | | labels.color:red | The project's label `color` has the value `red`. | | labels.color:red labels.size:big | The project's label `color` has the value `red` or its label `size` has the value `big`. | ``` If no query is specified, the call will return projects for which the user has the `resourcemanager.projects.get` permission.
		 * @return {SearchProjectsResponse} Successful response
		 */
		Cloudresourcemanager_projects_search(pageSize: number | null | undefined, pageToken: string | null | undefined, query: string | null | undefined): Observable<SearchProjectsResponse> {
			return this.http.get<SearchProjectsResponse>(this.baseUri + 'v3/projects:search?pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '&query=' + (query == null ? '' : encodeURIComponent(query)), {});
		}

		/**
		 * Lists the TagBindings for the given Google Cloud resource, as specified with `parent`. NOTE: The `parent` field is expected to be a full resource name: https://cloud.google.com/apis/design/resource_names#full_resource_name
		 * Get v3/tagBindings
		 * @param {number} pageSize Optional. The maximum number of TagBindings to return in the response. The server allows a maximum of 300 TagBindings to return. If unspecified, the server will use 100 as the default.
		 * @param {string} pageToken Optional. A pagination token returned from a previous call to `ListTagBindings` that indicates where this listing should continue from.
		 * @param {string} parent Required. The full resource name of a resource for which you want to list existing TagBindings. E.g. "//cloudresourcemanager.googleapis.com/projects/123"
		 * @return {ListTagBindingsResponse} Successful response
		 */
		Cloudresourcemanager_tagBindings_list(pageSize: number | null | undefined, pageToken: string | null | undefined, parent: string | null | undefined): Observable<ListTagBindingsResponse> {
			return this.http.get<ListTagBindingsResponse>(this.baseUri + 'v3/tagBindings?pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '&parent=' + (parent == null ? '' : encodeURIComponent(parent)), {});
		}

		/**
		 * Creates a TagBinding between a TagValue and a Google Cloud resource.
		 * Post v3/tagBindings
		 * @param {boolean} validateOnly Optional. Set to true to perform the validations necessary for creating the resource, but not actually perform the action.
		 * @return {Operation} Successful response
		 */
		Cloudresourcemanager_tagBindings_create(validateOnly: boolean | null | undefined, requestBody: TagBinding): Observable<Operation> {
			return this.http.post<Operation>(this.baseUri + 'v3/tagBindings?validateOnly=' + validateOnly, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists all TagKeys for a parent resource.
		 * Get v3/tagKeys
		 * @param {number} pageSize Optional. The maximum number of TagKeys to return in the response. The server allows a maximum of 300 TagKeys to return. If unspecified, the server will use 100 as the default.
		 * @param {string} pageToken Optional. A pagination token returned from a previous call to `ListTagKey` that indicates where this listing should continue from.
		 * @param {string} parent Required. The resource name of the TagKey's parent. Must be of the form `organizations/{org_id}` or `projects/{project_id}` or `projects/{project_number}`
		 * @return {ListTagKeysResponse} Successful response
		 */
		Cloudresourcemanager_tagKeys_list(pageSize: number | null | undefined, pageToken: string | null | undefined, parent: string | null | undefined): Observable<ListTagKeysResponse> {
			return this.http.get<ListTagKeysResponse>(this.baseUri + 'v3/tagKeys?pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '&parent=' + (parent == null ? '' : encodeURIComponent(parent)), {});
		}

		/**
		 * Creates a new TagKey. If another request with the same parameters is sent while the original request is in process, the second request will receive an error. A maximum of 1000 TagKeys can exist under a parent at any given time.
		 * Post v3/tagKeys
		 * @param {boolean} validateOnly Optional. Set to true to perform validations necessary for creating the resource, but not actually perform the action.
		 * @return {Operation} Successful response
		 */
		Cloudresourcemanager_tagKeys_create(validateOnly: boolean | null | undefined, requestBody: TagKey): Observable<Operation> {
			return this.http.post<Operation>(this.baseUri + 'v3/tagKeys?validateOnly=' + validateOnly, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves a TagKey by its namespaced name. This method will return `PERMISSION_DENIED` if the key does not exist or the user does not have permission to view it.
		 * Get v3/tagKeys/namespaced
		 * @param {string} name Required. A namespaced tag key name in the format `{parentId}/{tagKeyShort}`, such as `42/foo` for a key with short name "foo" under the organization with ID 42 or `r2-d2/bar` for a key with short name "bar" under the project `r2-d2`.
		 * @return {TagKey} Successful response
		 */
		Cloudresourcemanager_tagKeys_getNamespaced(name: string | null | undefined): Observable<TagKey> {
			return this.http.get<TagKey>(this.baseUri + 'v3/tagKeys/namespaced?name=' + (name == null ? '' : encodeURIComponent(name)), {});
		}

		/**
		 * Lists all TagValues for a specific TagKey.
		 * Get v3/tagValues
		 * @param {number} pageSize Optional. The maximum number of TagValues to return in the response. The server allows a maximum of 300 TagValues to return. If unspecified, the server will use 100 as the default.
		 * @param {string} pageToken Optional. A pagination token returned from a previous call to `ListTagValues` that indicates where this listing should continue from.
		 * @param {string} parent Required. Resource name for the parent of the TagValues to be listed, in the format `tagKeys/123` or `tagValues/123`.
		 * @return {ListTagValuesResponse} Successful response
		 */
		Cloudresourcemanager_tagValues_list(pageSize: number | null | undefined, pageToken: string | null | undefined, parent: string | null | undefined): Observable<ListTagValuesResponse> {
			return this.http.get<ListTagValuesResponse>(this.baseUri + 'v3/tagValues?pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '&parent=' + (parent == null ? '' : encodeURIComponent(parent)), {});
		}

		/**
		 * Creates a TagValue as a child of the specified TagKey. If a another request with the same parameters is sent while the original request is in process the second request will receive an error. A maximum of 1000 TagValues can exist under a TagKey at any given time.
		 * Post v3/tagValues
		 * @param {boolean} validateOnly Optional. Set as true to perform the validations necessary for creating the resource, but not actually perform the action.
		 * @return {Operation} Successful response
		 */
		Cloudresourcemanager_tagValues_create(validateOnly: boolean | null | undefined, requestBody: TagValue): Observable<Operation> {
			return this.http.post<Operation>(this.baseUri + 'v3/tagValues?validateOnly=' + validateOnly, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves a TagValue by its namespaced name. This method will return `PERMISSION_DENIED` if the value does not exist or the user does not have permission to view it.
		 * Get v3/tagValues/namespaced
		 * @param {string} name Required. A namespaced tag value name in the following format: `{parentId}/{tagKeyShort}/{tagValueShort}` Examples: - `42/foo/abc` for a value with short name "abc" under the key with short name "foo" under the organization with ID 42 - `r2-d2/bar/xyz` for a value with short name "xyz" under the key with short name "bar" under the project with ID "r2-d2"
		 * @return {TagValue} Successful response
		 */
		Cloudresourcemanager_tagValues_getNamespaced(name: string | null | undefined): Observable<TagValue> {
			return this.http.get<TagValue>(this.baseUri + 'v3/tagValues/namespaced?name=' + (name == null ? '' : encodeURIComponent(name)), {});
		}

		/**
		 * Deletes a TagHold.
		 * Delete v3/{name}
		 * @param {string} name Required. The resource name of the TagHold to delete. Must be of the form: `tagValues/{tag-value-id}/tagHolds/{tag-hold-id}`.
		 * @param {boolean} validateOnly Optional. Set to true to perform the validations necessary for deleting the resource, but not actually perform the action.
		 * @return {Operation} Successful response
		 */
		Cloudresourcemanager_tagValues_tagHolds_delete(name: string, validateOnly: boolean | null | undefined): Observable<Operation> {
			return this.http.delete<Operation>(this.baseUri + 'v3/' + (name == null ? '' : encodeURIComponent(name)) + '&validateOnly=' + validateOnly, {});
		}

		/**
		 * Retrieves a TagValue. This method will return `PERMISSION_DENIED` if the value does not exist or the user does not have permission to view it.
		 * Get v3/{name}
		 * @param {string} name Required. Resource name for TagValue to be fetched in the format `tagValues/456`.
		 * @return {TagValue} Successful response
		 */
		Cloudresourcemanager_tagValues_get(name: string): Observable<TagValue> {
			return this.http.get<TagValue>(this.baseUri + 'v3/' + (name == null ? '' : encodeURIComponent(name)), {});
		}

		/**
		 * Updates the attributes of the TagValue resource.
		 * Patch v3/{name}
		 * @param {string} name Immutable. Resource name for TagValue in the format `tagValues/456`.
		 * @param {string} updateMask Optional. Fields to be updated.
		 * @param {boolean} validateOnly Optional. True to perform validations necessary for updating the resource, but not actually perform the action.
		 * @return {Operation} Successful response
		 */
		Cloudresourcemanager_tagValues_patch(name: string, updateMask: string | null | undefined, validateOnly: boolean | null | undefined, requestBody: TagValue): Observable<Operation> {
			return this.http.patch<Operation>(this.baseUri + 'v3/' + (name == null ? '' : encodeURIComponent(name)) + '&updateMask=' + (updateMask == null ? '' : encodeURIComponent(updateMask)) + '&validateOnly=' + validateOnly, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Move a project to another place in your resource hierarchy, under a new resource parent. Returns an operation which can be used to track the process of the project move workflow. Upon success, the `Operation.response` field will be populated with the moved project. The caller must have `resourcemanager.projects.move` permission on the project, on the project's current and proposed new parent. If project has no current parent, or it currently does not have an associated organization resource, you will also need the `resourcemanager.projects.setIamPolicy` permission in the project.
		 * Post v3/{name}:move
		 * @param {string} name Required. The name of the project to move.
		 * @return {Operation} Successful response
		 */
		Cloudresourcemanager_projects_move(name: string, requestBody: MoveProjectRequest): Observable<Operation> {
			return this.http.post<Operation>(this.baseUri + 'v3/' + (name == null ? '' : encodeURIComponent(name)) + ':move', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Restores the project identified by the specified `name` (for example, `projects/415104041262`). You can only use this method for a project that has a lifecycle state of DELETE_REQUESTED. After deletion starts, the project cannot be restored. The caller must have `resourcemanager.projects.undelete` permission for this project.
		 * Post v3/{name}:undelete
		 * @param {string} name Required. The name of the project (for example, `projects/415104041262`). Required.
		 * @return {Operation} Successful response
		 */
		Cloudresourcemanager_projects_undelete(name: string, requestBody: UndeleteProjectRequest): Observable<Operation> {
			return this.http.post<Operation>(this.baseUri + 'v3/' + (name == null ? '' : encodeURIComponent(name)) + ':undelete', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists TagHolds under a TagValue.
		 * Get v3/{parent}/tagHolds
		 * @param {string} parent Required. The resource name of the parent TagValue. Must be of the form: `tagValues/{tag-value-id}`.
		 * @param {string} filter Optional. Criteria used to select a subset of TagHolds parented by the TagValue to return. This field follows the syntax defined by aip.dev/160; the `holder` and `origin` fields are supported for filtering. Currently only `AND` syntax is supported. Some example queries are: * `holder = //compute.googleapis.com/compute/projects/myproject/regions/us-east-1/instanceGroupManagers/instance-group` * `origin = 35678234` * `holder = //compute.googleapis.com/compute/projects/myproject/regions/us-east-1/instanceGroupManagers/instance-group AND origin = 35678234`
		 * @param {number} pageSize Optional. The maximum number of TagHolds to return in the response. The server allows a maximum of 300 TagHolds to return. If unspecified, the server will use 100 as the default.
		 * @param {string} pageToken Optional. A pagination token returned from a previous call to `ListTagHolds` that indicates where this listing should continue from.
		 * @return {ListTagHoldsResponse} Successful response
		 */
		Cloudresourcemanager_tagValues_tagHolds_list(parent: string, filter: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListTagHoldsResponse> {
			return this.http.get<ListTagHoldsResponse>(this.baseUri + 'v3/' + (parent == null ? '' : encodeURIComponent(parent)) + '/tagHolds&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Creates a TagHold. Returns ALREADY_EXISTS if a TagHold with the same resource and origin exists under the same TagValue.
		 * Post v3/{parent}/tagHolds
		 * @param {string} parent Required. The resource name of the TagHold's parent TagValue. Must be of the form: `tagValues/{tag-value-id}`.
		 * @param {boolean} validateOnly Optional. Set to true to perform the validations necessary for creating the resource, but not actually perform the action.
		 * @return {Operation} Successful response
		 */
		Cloudresourcemanager_tagValues_tagHolds_create(parent: string, validateOnly: boolean | null | undefined, requestBody: TagHold): Observable<Operation> {
			return this.http.post<Operation>(this.baseUri + 'v3/' + (parent == null ? '' : encodeURIComponent(parent)) + '/tagHolds&validateOnly=' + validateOnly, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets the access control policy for a TagValue. The returned policy may be empty if no such policy or resource exists. The `resource` field should be the TagValue's resource name. For example: `tagValues/1234`. The caller must have the `cloudresourcemanager.googleapis.com/tagValues.getIamPolicy` permission on the identified TagValue to get the access control policy.
		 * Post v3/{resource}:getIamPolicy
		 * @param {string} resource REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
		 * @return {Policy} Successful response
		 */
		Cloudresourcemanager_tagValues_getIamPolicy(resource: string, requestBody: GetIamPolicyRequest): Observable<Policy> {
			return this.http.post<Policy>(this.baseUri + 'v3/' + (resource == null ? '' : encodeURIComponent(resource)) + ':getIamPolicy', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Sets the access control policy on a TagValue, replacing any existing policy. The `resource` field should be the TagValue's resource name. For example: `tagValues/1234`. The caller must have `resourcemanager.tagValues.setIamPolicy` permission on the identified tagValue.
		 * Post v3/{resource}:setIamPolicy
		 * @param {string} resource REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
		 * @return {Policy} Successful response
		 */
		Cloudresourcemanager_tagValues_setIamPolicy(resource: string, requestBody: SetIamPolicyRequest): Observable<Policy> {
			return this.http.post<Policy>(this.baseUri + 'v3/' + (resource == null ? '' : encodeURIComponent(resource)) + ':setIamPolicy', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns permissions that a caller has on the specified TagValue. The `resource` field should be the TagValue's resource name. For example: `tagValues/1234`. There are no permissions required for making this API call.
		 * Post v3/{resource}:testIamPermissions
		 * @param {string} resource REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
		 * @return {TestIamPermissionsResponse} Successful response
		 */
		Cloudresourcemanager_tagValues_testIamPermissions(resource: string, requestBody: TestIamPermissionsRequest): Observable<TestIamPermissionsResponse> {
			return this.http.post<TestIamPermissionsResponse>(this.baseUri + 'v3/' + (resource == null ? '' : encodeURIComponent(resource)) + ':testIamPermissions', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

}

