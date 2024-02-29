import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** Identifying information for a single ancestor of a project. */
	export interface Ancestor {

		/** A container to reference an id for any resource type. A `resource` in Google Cloud Platform is a generic term for something you (a developer) may want to interact with through one of our API's. Some examples are an App Engine app, a Compute Engine instance, a Cloud SQL database, and so on. */
		resourceId?: ResourceId;
	}

	/** Identifying information for a single ancestor of a project. */
	export interface AncestorFormProperties {
	}
	export function CreateAncestorFormGroup() {
		return new FormGroup<AncestorFormProperties>({
		});

	}


	/** A container to reference an id for any resource type. A `resource` in Google Cloud Platform is a generic term for something you (a developer) may want to interact with through one of our API's. Some examples are an App Engine app, a Compute Engine instance, a Cloud SQL database, and so on. */
	export interface ResourceId {

		/** Required field for the type-specific id. This should correspond to the id used in the type-specific API's. */
		id?: string | null;

		/** Required field representing the resource type this id is for. At present, the valid types are "project", "folder", and "organization". */
		type?: string | null;
	}

	/** A container to reference an id for any resource type. A `resource` in Google Cloud Platform is a generic term for something you (a developer) may want to interact with through one of our API's. Some examples are an App Engine app, a Compute Engine instance, a Cloud SQL database, and so on. */
	export interface ResourceIdFormProperties {

		/** Required field for the type-specific id. This should correspond to the id used in the type-specific API's. */
		id: FormControl<string | null | undefined>,

		/** Required field representing the resource type this id is for. At present, the valid types are "project", "folder", and "organization". */
		type: FormControl<string | null | undefined>,
	}
	export function CreateResourceIdFormGroup() {
		return new FormGroup<ResourceIdFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
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


	/** The request sent to the [google.cloudresourcemanager.projects.v1beta1.DeveloperProjects.GetAncestry] method. */
	export interface GetAncestryRequest {
	}

	/** The request sent to the [google.cloudresourcemanager.projects.v1beta1.DeveloperProjects.GetAncestry] method. */
	export interface GetAncestryRequestFormProperties {
	}
	export function CreateGetAncestryRequestFormGroup() {
		return new FormGroup<GetAncestryRequestFormProperties>({
		});

	}


	/** Response from the projects.getAncestry method. */
	export interface GetAncestryResponse {

		/** Ancestors are ordered from bottom to top of the resource hierarchy. The first ancestor is the project itself, followed by the project's parent, etc. */
		ancestor?: Array<Ancestor>;
	}

	/** Response from the projects.getAncestry method. */
	export interface GetAncestryResponseFormProperties {
	}
	export function CreateGetAncestryResponseFormGroup() {
		return new FormGroup<GetAncestryResponseFormProperties>({
		});

	}


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

		/**
		 * Optional. The maximum policy version that will be used to format the policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset. The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies).
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		requestedPolicyVersion?: number | null;
	}

	/** Encapsulates settings provided to GetIamPolicy. */
	export interface GetPolicyOptionsFormProperties {

		/**
		 * Optional. The maximum policy version that will be used to format the policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset. The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies).
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		requestedPolicyVersion: FormControl<number | null | undefined>,
	}
	export function CreateGetPolicyOptionsFormGroup() {
		return new FormGroup<GetPolicyOptionsFormProperties>({
			requestedPolicyVersion: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** The response returned from the `ListOrganizations` method. */
	export interface ListOrganizationsResponse {

		/** A pagination token to be used to retrieve the next page of results. If the result is too large to fit within the page size specified in the request, this field will be set with a token that can be used to fetch the next page of results. If this field is empty, it indicates that this response contains the last page of results. */
		nextPageToken?: string | null;

		/** The list of Organizations that matched the list query, possibly paginated. */
		organizations?: Array<Organization>;
	}

	/** The response returned from the `ListOrganizations` method. */
	export interface ListOrganizationsResponseFormProperties {

		/** A pagination token to be used to retrieve the next page of results. If the result is too large to fit within the page size specified in the request, this field will be set with a token that can be used to fetch the next page of results. If this field is empty, it indicates that this response contains the last page of results. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListOrganizationsResponseFormGroup() {
		return new FormGroup<ListOrganizationsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The root node in the resource hierarchy to which a particular entity's (e.g., company) resources belong. */
	export interface Organization {

		/** Timestamp when the Organization was created. Assigned by the server. */
		creationTime?: string | null;

		/** A human-readable string that refers to the Organization in the Google Cloud console. This string is set by the server and cannot be changed. The string will be set to the primary domain (for example, "google.com") of the G Suite customer that owns the organization. */
		displayName?: string | null;

		/** The organization's current lifecycle state. Assigned by the server. */
		lifecycleState?: OrganizationLifecycleState | null;

		/** Output only. The resource name of the organization. This is the organization's relative path in the API. Its format is "organizations/[organization_id]". For example, "organizations/1234". */
		name?: string | null;

		/** An immutable id for the Organization that is assigned on creation. This should be omitted when creating a new Organization. This field is read-only. */
		organizationId?: string | null;

		/** The entity that owns an Organization. The lifetime of the Organization and all of its descendants are bound to the `OrganizationOwner`. If the `OrganizationOwner` is deleted, the Organization and all its descendants will be deleted. */
		owner?: OrganizationOwner;
	}

	/** The root node in the resource hierarchy to which a particular entity's (e.g., company) resources belong. */
	export interface OrganizationFormProperties {

		/** Timestamp when the Organization was created. Assigned by the server. */
		creationTime: FormControl<string | null | undefined>,

		/** A human-readable string that refers to the Organization in the Google Cloud console. This string is set by the server and cannot be changed. The string will be set to the primary domain (for example, "google.com") of the G Suite customer that owns the organization. */
		displayName: FormControl<string | null | undefined>,

		/** The organization's current lifecycle state. Assigned by the server. */
		lifecycleState: FormControl<OrganizationLifecycleState | null | undefined>,

		/** Output only. The resource name of the organization. This is the organization's relative path in the API. Its format is "organizations/[organization_id]". For example, "organizations/1234". */
		name: FormControl<string | null | undefined>,

		/** An immutable id for the Organization that is assigned on creation. This should be omitted when creating a new Organization. This field is read-only. */
		organizationId: FormControl<string | null | undefined>,
	}
	export function CreateOrganizationFormGroup() {
		return new FormGroup<OrganizationFormProperties>({
			creationTime: new FormControl<string | null | undefined>(undefined),
			displayName: new FormControl<string | null | undefined>(undefined),
			lifecycleState: new FormControl<OrganizationLifecycleState | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			organizationId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum OrganizationLifecycleState { LIFECYCLE_STATE_UNSPECIFIED = 'LIFECYCLE_STATE_UNSPECIFIED', ACTIVE = 'ACTIVE', DELETE_REQUESTED = 'DELETE_REQUESTED' }


	/** The entity that owns an Organization. The lifetime of the Organization and all of its descendants are bound to the `OrganizationOwner`. If the `OrganizationOwner` is deleted, the Organization and all its descendants will be deleted. */
	export interface OrganizationOwner {

		/** The G Suite customer id used in the Directory API. */
		directoryCustomerId?: string | null;
	}

	/** The entity that owns an Organization. The lifetime of the Organization and all of its descendants are bound to the `OrganizationOwner`. If the `OrganizationOwner` is deleted, the Organization and all its descendants will be deleted. */
	export interface OrganizationOwnerFormProperties {

		/** The G Suite customer id used in the Directory API. */
		directoryCustomerId: FormControl<string | null | undefined>,
	}
	export function CreateOrganizationOwnerFormGroup() {
		return new FormGroup<OrganizationOwnerFormProperties>({
			directoryCustomerId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A page of the response received from the ListProjects method. A paginated response where more pages are available has `next_page_token` set. This token can be used in a subsequent request to retrieve the next request page. */
	export interface ListProjectsResponse {

		/** Pagination token. If the result set is too large to fit in a single response, this token is returned. It encodes the position of the current result cursor. Feeding this value into a new list request with the `page_token` parameter gives the next page of the results. When `next_page_token` is not filled in, there is no next page and the list returned is the last page in the result set. Pagination tokens have a limited lifetime. */
		nextPageToken?: string | null;

		/** The list of Projects that matched the list filter. This list can be paginated. */
		projects?: Array<Project>;
	}

	/** A page of the response received from the ListProjects method. A paginated response where more pages are available has `next_page_token` set. This token can be used in a subsequent request to retrieve the next request page. */
	export interface ListProjectsResponseFormProperties {

		/** Pagination token. If the result set is too large to fit in a single response, this token is returned. It encodes the position of the current result cursor. Feeding this value into a new list request with the `page_token` parameter gives the next page of the results. When `next_page_token` is not filled in, there is no next page and the list returned is the last page in the result set. Pagination tokens have a limited lifetime. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListProjectsResponseFormGroup() {
		return new FormGroup<ListProjectsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A Project is a high-level Google Cloud Platform entity. It is a container for ACLs, APIs, App Engine Apps, VMs, and other Google Cloud Platform resources. */
	export interface Project {

		/** Creation time. Read-only. */
		createTime?: string | null;

		/** The labels associated with this Project. Label keys must be between 1 and 63 characters long and must conform to the following regular expression: a-z{0,62}. Label values must be between 0 and 63 characters long and must conform to the regular expression [a-z0-9_-]{0,63}. A label value can be empty. No more than 256 labels can be associated with a given resource. Clients should store labels in a representation such as JSON that does not depend on specific characters being disallowed. Example: `"environment" : "dev"` Read-write. */
		labels?: {[id: string]: string };

		/** The Project lifecycle state. Read-only. */
		lifecycleState?: ProjectLifecycleState | null;

		/** The optional user-assigned display name of the Project. When present it must be between 4 to 30 characters. Allowed characters are: lowercase and uppercase letters, numbers, hyphen, single-quote, double-quote, space, and exclamation point. Example: `My Project` Read-write. */
		name?: string | null;

		/** A container to reference an id for any resource type. A `resource` in Google Cloud Platform is a generic term for something you (a developer) may want to interact with through one of our API's. Some examples are an App Engine app, a Compute Engine instance, a Cloud SQL database, and so on. */
		parent?: ResourceId;

		/** The unique, user-assigned ID of the Project. It must be 6 to 30 lowercase letters, digits, or hyphens. It must start with a letter. Trailing hyphens are prohibited. Example: `tokyo-rain-123` Read-only after creation. */
		projectId?: string | null;

		/** The number uniquely identifying the project. Example: `415104041262` Read-only. */
		projectNumber?: string | null;
	}

	/** A Project is a high-level Google Cloud Platform entity. It is a container for ACLs, APIs, App Engine Apps, VMs, and other Google Cloud Platform resources. */
	export interface ProjectFormProperties {

		/** Creation time. Read-only. */
		createTime: FormControl<string | null | undefined>,

		/** The labels associated with this Project. Label keys must be between 1 and 63 characters long and must conform to the following regular expression: a-z{0,62}. Label values must be between 0 and 63 characters long and must conform to the regular expression [a-z0-9_-]{0,63}. A label value can be empty. No more than 256 labels can be associated with a given resource. Clients should store labels in a representation such as JSON that does not depend on specific characters being disallowed. Example: `"environment" : "dev"` Read-write. */
		labels: FormControl<{[id: string]: string } | null | undefined>,

		/** The Project lifecycle state. Read-only. */
		lifecycleState: FormControl<ProjectLifecycleState | null | undefined>,

		/** The optional user-assigned display name of the Project. When present it must be between 4 to 30 characters. Allowed characters are: lowercase and uppercase letters, numbers, hyphen, single-quote, double-quote, space, and exclamation point. Example: `My Project` Read-write. */
		name: FormControl<string | null | undefined>,

		/** The unique, user-assigned ID of the Project. It must be 6 to 30 lowercase letters, digits, or hyphens. It must start with a letter. Trailing hyphens are prohibited. Example: `tokyo-rain-123` Read-only after creation. */
		projectId: FormControl<string | null | undefined>,

		/** The number uniquely identifying the project. Example: `415104041262` Read-only. */
		projectNumber: FormControl<string | null | undefined>,
	}
	export function CreateProjectFormGroup() {
		return new FormGroup<ProjectFormProperties>({
			createTime: new FormControl<string | null | undefined>(undefined),
			labels: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			lifecycleState: new FormControl<ProjectLifecycleState | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			projectId: new FormControl<string | null | undefined>(undefined),
			projectNumber: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ProjectLifecycleState { LIFECYCLE_STATE_UNSPECIFIED = 'LIFECYCLE_STATE_UNSPECIFIED', ACTIVE = 'ACTIVE', DELETE_REQUESTED = 'DELETE_REQUESTED', DELETE_IN_PROGRESS = 'DELETE_IN_PROGRESS' }


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
		 * Lists Organization resources that are visible to the user and satisfy the specified filter. This method returns Organizations in an unspecified order. New Organizations do not necessarily appear at the end of the list.
		 * Get v1beta1/organizations
		 * @param {string} filter An optional query string used to filter the Organizations to return in the response. Filter rules are case-insensitive. Organizations may be filtered by `owner.directoryCustomerId` or by `domain`, where the domain is a G Suite domain, for example: * Filter `owner.directorycustomerid:123456789` returns Organization resources with `owner.directory_customer_id` equal to `123456789`. * Filter `domain:google.com` returns Organization resources corresponding to the domain `google.com`. This field is optional.
		 * @param {number} pageSize The maximum number of Organizations to return in the response. This field is optional.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} pageToken A pagination token returned from a previous call to `ListOrganizations` that indicates from where listing should continue. This field is optional.
		 * @return {ListOrganizationsResponse} Successful response
		 */
		Cloudresourcemanager_organizations_list(filter: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListOrganizationsResponse> {
			return this.http.get<ListOrganizationsResponse>(this.baseUri + 'v1beta1/organizations?filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Lists Projects that the caller has the `resourcemanager.projects.get` permission on and satisfy the specified filter. This method returns Projects in an unspecified order. This method is eventually consistent with project mutations; this means that a newly created project may not appear in the results or recent updates to an existing project may not be reflected in the results. To retrieve the latest state of a project, use the GetProject method. NOTE: If the request filter contains a `parent.type` and `parent.id` and the caller has the `resourcemanager.projects.list` permission on the parent, the results will be drawn from an alternate index which provides more consistent results. In future versions of this API, this List method will be split into List and Search to properly capture the behavioral difference.
		 * Get v1beta1/projects
		 * @param {string} filter An expression for filtering the results of the request. Filter rules are case insensitive. If multiple fields are included in a filter query, the query will return results that match any of the fields. Some eligible fields for filtering are: + `name` + `id` + `labels.` (where *key* is the name of a label) + `parent.type` + `parent.id` Some examples of using labels as filters: | Filter | Description | |------------------|-----------------------------------------------------| | name:how* | The project's name starts with "how". | | name:Howl | The project's name is `Howl` or `howl`. | | name:HOWL | Equivalent to above. | | NAME:howl | Equivalent to above. | | labels.color:* | The project has the label `color`. | | labels.color:red | The project's label `color` has the value `red`. | | labels.color:red labels.size:big | The project's label `color` has the value `red` or its label `size` has the value `big`. | If no filter is specified, the call will return projects for which the user has the `resourcemanager.projects.get` permission. NOTE: To perform a by-parent query (eg., what projects are directly in a Folder), the caller must have the `resourcemanager.projects.list` permission on the parent and the filter must contain both a `parent.type` and a `parent.id` restriction (example: "parent.type:folder parent.id:123"). In this case an alternate search index is used which provides more consistent results. Optional.
		 * @param {number} pageSize The maximum number of Projects to return in the response. The server can return fewer Projects than requested. If unspecified, server picks an appropriate default. Optional.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} pageToken A pagination token returned from a previous call to ListProjects that indicates from where listing should continue. Optional.
		 * @return {ListProjectsResponse} Successful response
		 */
		Cloudresourcemanager_projects_list(filter: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListProjectsResponse> {
			return this.http.get<ListProjectsResponse>(this.baseUri + 'v1beta1/projects?filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Creates a Project resource. Initially, the Project resource is owned by its creator exclusively. The creator can later grant permission to others to read or update the Project. Several APIs are activated automatically for the Project, including Google Cloud Storage. The parent is identified by a specified ResourceId, which must include both an ID and a type, such as project, folder, or organization. This method does not associate the new project with a billing account. You can set or update the billing account associated with a project using the [`projects.updateBillingInfo`] (/billing/reference/rest/v1/projects/updateBillingInfo) method.
		 * Post v1beta1/projects
		 * @param {boolean} useLegacyStack A now unused experiment opt-out option.
		 * @return {Project} Successful response
		 */
		Cloudresourcemanager_projects_create(useLegacyStack: boolean | null | undefined, requestBody: Project): Observable<Project> {
			return this.http.post<Project>(this.baseUri + 'v1beta1/projects?useLegacyStack=' + useLegacyStack, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Marks the Project identified by the specified `project_id` (for example, `my-project-123`) for deletion. This method will only affect the Project if it has a lifecycle state of ACTIVE. This method changes the Project's lifecycle state from ACTIVE to DELETE_REQUESTED. The deletion starts at an unspecified time, at which point the project is no longer accessible. Until the deletion completes, you can check the lifecycle state checked by retrieving the Project with GetProject, and the Project remains visible to ListProjects. However, you cannot update the project. After the deletion completes, the Project is not retrievable by the GetProject and ListProjects methods. The caller must have delete permissions for this Project.
		 * Delete v1beta1/projects/{projectId}
		 * @param {string} projectId The Project ID (for example, `foo-bar-123`).
		 * @return {Empty} Successful response
		 */
		Cloudresourcemanager_projects_delete(projectId: string): Observable<Empty> {
			return this.http.delete<Empty>(this.baseUri + 'v1beta1/projects/' + (projectId == null ? '' : encodeURIComponent(projectId)), {});
		}

		/**
		 * Retrieves the Project identified by the specified `project_id` (for example, `my-project-123`). The caller must have read permissions for this Project.
		 * Get v1beta1/projects/{projectId}
		 * @param {string} projectId Required. The Project ID (for example, `my-project-123`).
		 * @return {Project} Successful response
		 */
		Cloudresourcemanager_projects_get(projectId: string): Observable<Project> {
			return this.http.get<Project>(this.baseUri + 'v1beta1/projects/' + (projectId == null ? '' : encodeURIComponent(projectId)), {});
		}

		/**
		 * Updates the attributes of the Project identified by the specified `project_id` (for example, `my-project-123`). The caller must have modify permissions for this Project.
		 * Put v1beta1/projects/{projectId}
		 * @param {string} projectId The project ID (for example, `my-project-123`).
		 * @return {Project} Successful response
		 */
		Cloudresourcemanager_projects_update(projectId: string, requestBody: Project): Observable<Project> {
			return this.http.put<Project>(this.baseUri + 'v1beta1/projects/' + (projectId == null ? '' : encodeURIComponent(projectId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets a list of ancestors in the resource hierarchy for the Project identified by the specified `project_id` (for example, `my-project-123`). The caller must have read permissions for this Project.
		 * Post v1beta1/projects/{projectId}:getAncestry
		 * @param {string} projectId Required. The Project ID (for example, `my-project-123`).
		 * @return {GetAncestryResponse} Successful response
		 */
		Cloudresourcemanager_projects_getAncestry(projectId: string, requestBody: GetAncestryRequest): Observable<GetAncestryResponse> {
			return this.http.post<GetAncestryResponse>(this.baseUri + 'v1beta1/projects/' + (projectId == null ? '' : encodeURIComponent(projectId)) + ':getAncestry', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Restores the Project identified by the specified `project_id` (for example, `my-project-123`). You can only use this method for a Project that has a lifecycle state of DELETE_REQUESTED. After deletion starts, the Project cannot be restored. The caller must have undelete permissions for this Project.
		 * Post v1beta1/projects/{projectId}:undelete
		 * @param {string} projectId Required. The project ID (for example, `foo-bar-123`).
		 * @return {Empty} Successful response
		 */
		Cloudresourcemanager_projects_undelete(projectId: string, requestBody: UndeleteProjectRequest): Observable<Empty> {
			return this.http.post<Empty>(this.baseUri + 'v1beta1/projects/' + (projectId == null ? '' : encodeURIComponent(projectId)) + ':undelete', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns the IAM access control policy for the specified Project. Permission is denied if the policy or the resource does not exist. For additional information about resource structure and identification, see [Resource Names](/apis/design/resource_names).
		 * Post v1beta1/projects/{resource}:getIamPolicy
		 * @param {string} resource REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
		 * @return {Policy} Successful response
		 */
		Cloudresourcemanager_projects_getIamPolicy(resource: string, requestBody: GetIamPolicyRequest): Observable<Policy> {
			return this.http.post<Policy>(this.baseUri + 'v1beta1/projects/' + (resource == null ? '' : encodeURIComponent(resource)) + ':getIamPolicy', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Sets the IAM access control policy for the specified Project. CAUTION: This method will replace the existing policy, and cannot be used to append additional IAM settings. NOTE: Removing service accounts from policies or changing their roles can render services completely inoperable. It is important to understand how the service account is being used before removing or updating its roles. The following constraints apply when using `setIamPolicy()`: + Project does not support `allUsers` and `allAuthenticatedUsers` as `members` in a `Binding` of a `Policy`. + The owner role can be granted to a `user`, `serviceAccount`, or a group that is part of an organization. For example, group@myownpersonaldomain.com could be added as an owner to a project in the myownpersonaldomain.com organization, but not the examplepetstore.com organization. + Service accounts can be made owners of a project directly without any restrictions. However, to be added as an owner, a user must be invited via Cloud Platform console and must accept the invitation. + A user cannot be granted the owner role using `setIamPolicy()`. The user must be granted the owner role using the Cloud Platform Console and must explicitly accept the invitation. + Invitations to grant the owner role cannot be sent using `setIamPolicy()`; they must be sent only using the Cloud Platform Console. + Membership changes that leave the project without any owners that have accepted the Terms of Service (ToS) will be rejected. + If the project is not part of an organization, there must be at least one owner who has accepted the Terms of Service (ToS) agreement in the policy. Calling `setIamPolicy()` to remove the last ToS-accepted owner from the policy will fail. This restriction also applies to legacy projects that no longer have owners who have accepted the ToS. Edits to IAM policies will be rejected until the lack of a ToS-accepting owner is rectified. Authorization requires the Google IAM permission `resourcemanager.projects.setIamPolicy` on the project
		 * Post v1beta1/projects/{resource}:setIamPolicy
		 * @param {string} resource REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
		 * @return {Policy} Successful response
		 */
		Cloudresourcemanager_projects_setIamPolicy(resource: string, requestBody: SetIamPolicyRequest): Observable<Policy> {
			return this.http.post<Policy>(this.baseUri + 'v1beta1/projects/' + (resource == null ? '' : encodeURIComponent(resource)) + ':setIamPolicy', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns permissions that a caller has on the specified Project.
		 * Post v1beta1/projects/{resource}:testIamPermissions
		 * @param {string} resource REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
		 * @return {TestIamPermissionsResponse} Successful response
		 */
		Cloudresourcemanager_projects_testIamPermissions(resource: string, requestBody: TestIamPermissionsRequest): Observable<TestIamPermissionsResponse> {
			return this.http.post<TestIamPermissionsResponse>(this.baseUri + 'v1beta1/projects/' + (resource == null ? '' : encodeURIComponent(resource)) + ':testIamPermissions', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Fetches an Organization resource identified by the specified resource name.
		 * Get v1beta1/{name}
		 * @param {string} name The resource name of the Organization to fetch. This is the organization's relative path in the API, formatted as "organizations/[organizationId]". For example, "organizations/1234".
		 * @param {string} organizationId The id of the Organization resource to fetch. This field is deprecated and will be removed in v1. Use name instead.
		 * @return {Organization} Successful response
		 */
		Cloudresourcemanager_organizations_get(name: string, organizationId: string | null | undefined): Observable<Organization> {
			return this.http.get<Organization>(this.baseUri + 'v1beta1/' + (name == null ? '' : encodeURIComponent(name)) + '&organizationId=' + (organizationId == null ? '' : encodeURIComponent(organizationId)), {});
		}

		/**
		 * Updates an Organization resource identified by the specified resource name.
		 * Put v1beta1/{name}
		 * @param {string} name Output only. The resource name of the organization. This is the organization's relative path in the API. Its format is "organizations/[organization_id]". For example, "organizations/1234".
		 * @return {Organization} Successful response
		 */
		Cloudresourcemanager_organizations_update(name: string, requestBody: Organization): Observable<Organization> {
			return this.http.put<Organization>(this.baseUri + 'v1beta1/' + (name == null ? '' : encodeURIComponent(name)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets the access control policy for an Organization resource. May be empty if no such policy or resource exists. The `resource` field should be the organization's resource name, e.g. "organizations/123".
		 * Post v1beta1/{resource}:getIamPolicy
		 * @param {string} resource REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
		 * @return {Policy} Successful response
		 */
		Cloudresourcemanager_organizations_getIamPolicy(resource: string, requestBody: GetIamPolicyRequest): Observable<Policy> {
			return this.http.post<Policy>(this.baseUri + 'v1beta1/' + (resource == null ? '' : encodeURIComponent(resource)) + ':getIamPolicy', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Sets the access control policy on an Organization resource. Replaces any existing policy. The `resource` field should be the organization's resource name, e.g. "organizations/123".
		 * Post v1beta1/{resource}:setIamPolicy
		 * @param {string} resource REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
		 * @return {Policy} Successful response
		 */
		Cloudresourcemanager_organizations_setIamPolicy(resource: string, requestBody: SetIamPolicyRequest): Observable<Policy> {
			return this.http.post<Policy>(this.baseUri + 'v1beta1/' + (resource == null ? '' : encodeURIComponent(resource)) + ':setIamPolicy', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns permissions that a caller has on the specified Organization. The `resource` field should be the organization's resource name, e.g. "organizations/123".
		 * Post v1beta1/{resource}:testIamPermissions
		 * @param {string} resource REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
		 * @return {TestIamPermissionsResponse} Successful response
		 */
		Cloudresourcemanager_organizations_testIamPermissions(resource: string, requestBody: TestIamPermissionsRequest): Observable<TestIamPermissionsResponse> {
			return this.http.post<TestIamPermissionsResponse>(this.baseUri + 'v1beta1/' + (resource == null ? '' : encodeURIComponent(resource)) + ':testIamPermissions', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

}

