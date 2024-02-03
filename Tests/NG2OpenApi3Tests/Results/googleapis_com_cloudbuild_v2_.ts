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


	/** Message for creating repositoritories in batch. */
	export interface BatchCreateRepositoriesRequest {

		/** Required. The request messages specifying the repositories to create. */
		requests?: Array<CreateRepositoryRequest>;
	}

	/** Message for creating repositoritories in batch. */
	export interface BatchCreateRepositoriesRequestFormProperties {
	}
	export function CreateBatchCreateRepositoriesRequestFormGroup() {
		return new FormGroup<BatchCreateRepositoriesRequestFormProperties>({
		});

	}


	/** Message for creating a Repository. */
	export interface CreateRepositoryRequest {

		/** Required. The connection to contain the repository. If the request is part of a BatchCreateRepositoriesRequest, this field should be empty or match the parent specified there. */
		parent?: string | null;

		/** A repository associated to a parent connection. */
		repository?: Repository;

		/** Required. The ID to use for the repository, which will become the final component of the repository's resource name. This ID should be unique in the connection. Allows alphanumeric characters and any of -._~%!$&'()*+,;=@. */
		repositoryId?: string | null;
	}

	/** Message for creating a Repository. */
	export interface CreateRepositoryRequestFormProperties {

		/** Required. The connection to contain the repository. If the request is part of a BatchCreateRepositoriesRequest, this field should be empty or match the parent specified there. */
		parent: FormControl<string | null | undefined>,

		/** Required. The ID to use for the repository, which will become the final component of the repository's resource name. This ID should be unique in the connection. Allows alphanumeric characters and any of -._~%!$&'()*+,;=@. */
		repositoryId: FormControl<string | null | undefined>,
	}
	export function CreateCreateRepositoryRequestFormGroup() {
		return new FormGroup<CreateRepositoryRequestFormProperties>({
			parent: new FormControl<string | null | undefined>(undefined),
			repositoryId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A repository associated to a parent connection. */
	export interface Repository {

		/** Allows clients to store small amounts of arbitrary data. */
		annotations?: {[id: string]: string };

		/** Output only. Server assigned timestamp for when the connection was created. */
		createTime?: string | null;

		/** This checksum is computed by the server based on the value of other fields, and may be sent on update and delete requests to ensure the client has an up-to-date value before proceeding. */
		etag?: string | null;

		/** Immutable. Resource name of the repository, in the format `projects/locations/connections/repositories/*`. */
		name?: string | null;

		/** Required. Git Clone HTTPS URI. */
		remoteUri?: string | null;

		/** Output only. Server assigned timestamp for when the connection was updated. */
		updateTime?: string | null;

		/** Output only. External ID of the webhook created for the repository. */
		webhookId?: string | null;
	}

	/** A repository associated to a parent connection. */
	export interface RepositoryFormProperties {

		/** Allows clients to store small amounts of arbitrary data. */
		annotations: FormControl<{[id: string]: string } | null | undefined>,

		/** Output only. Server assigned timestamp for when the connection was created. */
		createTime: FormControl<string | null | undefined>,

		/** This checksum is computed by the server based on the value of other fields, and may be sent on update and delete requests to ensure the client has an up-to-date value before proceeding. */
		etag: FormControl<string | null | undefined>,

		/** Immutable. Resource name of the repository, in the format `projects/locations/connections/repositories/*`. */
		name: FormControl<string | null | undefined>,

		/** Required. Git Clone HTTPS URI. */
		remoteUri: FormControl<string | null | undefined>,

		/** Output only. Server assigned timestamp for when the connection was updated. */
		updateTime: FormControl<string | null | undefined>,

		/** Output only. External ID of the webhook created for the repository. */
		webhookId: FormControl<string | null | undefined>,
	}
	export function CreateRepositoryFormGroup() {
		return new FormGroup<RepositoryFormProperties>({
			annotations: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			createTime: new FormControl<string | null | undefined>(undefined),
			etag: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			remoteUri: new FormControl<string | null | undefined>(undefined),
			updateTime: new FormControl<string | null | undefined>(undefined),
			webhookId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Message for response of creating repositories in batch. */
	export interface BatchCreateRepositoriesResponse {

		/** Repository resources created. */
		repositories?: Array<Repository>;
	}

	/** Message for response of creating repositories in batch. */
	export interface BatchCreateRepositoriesResponseFormProperties {
	}
	export function CreateBatchCreateRepositoriesResponseFormGroup() {
		return new FormGroup<BatchCreateRepositoriesResponseFormProperties>({
		});

	}


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


	/** Capabilities adds and removes POSIX capabilities from running containers. */
	export interface Capabilities {

		/** Optional. Added capabilities +optional */
		add?: Array<string>;

		/** Optional. Removed capabilities +optional */
		drop?: Array<string>;
	}

	/** Capabilities adds and removes POSIX capabilities from running containers. */
	export interface CapabilitiesFormProperties {
	}
	export function CreateCapabilitiesFormGroup() {
		return new FormGroup<CapabilitiesFormProperties>({
		});

	}


	/** ChildStatusReference is used to point to the statuses of individual TaskRuns and Runs within this PipelineRun. */
	export interface ChildStatusReference {

		/** Name is the name of the TaskRun or Run this is referencing. */
		name?: string | null;

		/** PipelineTaskName is the name of the PipelineTask this is referencing. */
		pipelineTaskName?: string | null;

		/** Output only. Type of the child reference. */
		type?: ChildStatusReferenceType | null;

		/** WhenExpressions is the list of checks guarding the execution of the PipelineTask */
		whenExpressions?: Array<WhenExpression>;
	}

	/** ChildStatusReference is used to point to the statuses of individual TaskRuns and Runs within this PipelineRun. */
	export interface ChildStatusReferenceFormProperties {

		/** Name is the name of the TaskRun or Run this is referencing. */
		name: FormControl<string | null | undefined>,

		/** PipelineTaskName is the name of the PipelineTask this is referencing. */
		pipelineTaskName: FormControl<string | null | undefined>,

		/** Output only. Type of the child reference. */
		type: FormControl<ChildStatusReferenceType | null | undefined>,
	}
	export function CreateChildStatusReferenceFormGroup() {
		return new FormGroup<ChildStatusReferenceFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			pipelineTaskName: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<ChildStatusReferenceType | null | undefined>(undefined),
		});

	}

	export enum ChildStatusReferenceType { TYPE_UNSPECIFIED = 'TYPE_UNSPECIFIED', TASK_RUN = 'TASK_RUN' }


	/** Conditions that need to be true for the task to run. */
	export interface WhenExpression {

		/** Operator that represents an Input's relationship to the values */
		expressionOperator?: WhenExpressionExpressionOperator | null;

		/** Input is the string for guard checking which can be a static input or an output from a parent Task. */
		input?: string | null;

		/** Values is an array of strings, which is compared against the input, for guard checking. */
		values?: Array<string>;
	}

	/** Conditions that need to be true for the task to run. */
	export interface WhenExpressionFormProperties {

		/** Operator that represents an Input's relationship to the values */
		expressionOperator: FormControl<WhenExpressionExpressionOperator | null | undefined>,

		/** Input is the string for guard checking which can be a static input or an output from a parent Task. */
		input: FormControl<string | null | undefined>,
	}
	export function CreateWhenExpressionFormGroup() {
		return new FormGroup<WhenExpressionFormProperties>({
			expressionOperator: new FormControl<WhenExpressionExpressionOperator | null | undefined>(undefined),
			input: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum WhenExpressionExpressionOperator { EXPRESSION_OPERATOR_UNSPECIFIED = 'EXPRESSION_OPERATOR_UNSPECIFIED', IN = 'IN', NOT_IN = 'NOT_IN' }


	/** A connection to a SCM like GitHub, GitHub Enterprise, Bitbucket Data Center or GitLab. */
	export interface Connection {

		/** Allows clients to store small amounts of arbitrary data. */
		annotations?: {[id: string]: string };

		/** Output only. Server assigned timestamp for when the connection was created. */
		createTime?: string | null;

		/** If disabled is set to true, functionality is disabled for this connection. Repository based API methods and webhooks processing for repositories in this connection will be disabled. */
		disabled?: boolean | null;

		/** This checksum is computed by the server based on the value of other fields, and may be sent on update and delete requests to ensure the client has an up-to-date value before proceeding. */
		etag?: string | null;

		/** Configuration for connections to github.com. */
		githubConfig?: GitHubConfig;

		/** Configuration for connections to an instance of GitHub Enterprise. */
		githubEnterpriseConfig?: GoogleDevtoolsCloudbuildV2GitHubEnterpriseConfig;

		/** Configuration for connections to gitlab.com or an instance of GitLab Enterprise. */
		gitlabConfig?: GoogleDevtoolsCloudbuildV2GitLabConfig;

		/** Describes stage and necessary actions to be taken by the user to complete the installation. Used for GitHub and GitHub Enterprise based connections. */
		installationState?: InstallationState;

		/** Immutable. The resource name of the connection, in the format `projects/{project}/locations/{location}/connections/{connection_id}`. */
		name?: string | null;

		/** Output only. Set to true when the connection is being set up or updated in the background. */
		reconciling?: boolean | null;

		/** Output only. Server assigned timestamp for when the connection was updated. */
		updateTime?: string | null;
	}

	/** A connection to a SCM like GitHub, GitHub Enterprise, Bitbucket Data Center or GitLab. */
	export interface ConnectionFormProperties {

		/** Allows clients to store small amounts of arbitrary data. */
		annotations: FormControl<{[id: string]: string } | null | undefined>,

		/** Output only. Server assigned timestamp for when the connection was created. */
		createTime: FormControl<string | null | undefined>,

		/** If disabled is set to true, functionality is disabled for this connection. Repository based API methods and webhooks processing for repositories in this connection will be disabled. */
		disabled: FormControl<boolean | null | undefined>,

		/** This checksum is computed by the server based on the value of other fields, and may be sent on update and delete requests to ensure the client has an up-to-date value before proceeding. */
		etag: FormControl<string | null | undefined>,

		/** Immutable. The resource name of the connection, in the format `projects/{project}/locations/{location}/connections/{connection_id}`. */
		name: FormControl<string | null | undefined>,

		/** Output only. Set to true when the connection is being set up or updated in the background. */
		reconciling: FormControl<boolean | null | undefined>,

		/** Output only. Server assigned timestamp for when the connection was updated. */
		updateTime: FormControl<string | null | undefined>,
	}
	export function CreateConnectionFormGroup() {
		return new FormGroup<ConnectionFormProperties>({
			annotations: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			createTime: new FormControl<string | null | undefined>(undefined),
			disabled: new FormControl<boolean | null | undefined>(undefined),
			etag: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			reconciling: new FormControl<boolean | null | undefined>(undefined),
			updateTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Configuration for connections to github.com. */
	export interface GitHubConfig {

		/** GitHub App installation id. */
		appInstallationId?: string | null;

		/** Represents an OAuth token of the account that authorized the Connection, and associated metadata. */
		authorizerCredential?: OAuthCredential;
	}

	/** Configuration for connections to github.com. */
	export interface GitHubConfigFormProperties {

		/** GitHub App installation id. */
		appInstallationId: FormControl<string | null | undefined>,
	}
	export function CreateGitHubConfigFormGroup() {
		return new FormGroup<GitHubConfigFormProperties>({
			appInstallationId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents an OAuth token of the account that authorized the Connection, and associated metadata. */
	export interface OAuthCredential {

		/** A SecretManager resource containing the OAuth token that authorizes the Cloud Build connection. Format: `projects/secrets/versions/*`. */
		oauthTokenSecretVersion?: string | null;

		/** Output only. The username associated to this token. */
		username?: string | null;
	}

	/** Represents an OAuth token of the account that authorized the Connection, and associated metadata. */
	export interface OAuthCredentialFormProperties {

		/** A SecretManager resource containing the OAuth token that authorizes the Cloud Build connection. Format: `projects/secrets/versions/*`. */
		oauthTokenSecretVersion: FormControl<string | null | undefined>,

		/** Output only. The username associated to this token. */
		username: FormControl<string | null | undefined>,
	}
	export function CreateOAuthCredentialFormGroup() {
		return new FormGroup<OAuthCredentialFormProperties>({
			oauthTokenSecretVersion: new FormControl<string | null | undefined>(undefined),
			username: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Configuration for connections to an instance of GitHub Enterprise. */
	export interface GoogleDevtoolsCloudbuildV2GitHubEnterpriseConfig {

		/** Required. API Key used for authentication of webhook events. */
		apiKey?: string | null;

		/** Id of the GitHub App created from the manifest. */
		appId?: string | null;

		/** ID of the installation of the GitHub App. */
		appInstallationId?: string | null;

		/** The URL-friendly name of the GitHub App. */
		appSlug?: string | null;

		/** Required. The URI of the GitHub Enterprise host this connection is for. */
		hostUri?: string | null;

		/** SecretManager resource containing the private key of the GitHub App, formatted as `projects/secrets/versions/*`. */
		privateKeySecretVersion?: string | null;

		/** Output only. GitHub Enterprise version installed at the host_uri. */
		serverVersion?: string | null;

		/** ServiceDirectoryConfig represents Service Directory configuration for a connection. */
		serviceDirectoryConfig?: GoogleDevtoolsCloudbuildV2ServiceDirectoryConfig;

		/** SSL certificate to use for requests to GitHub Enterprise. */
		sslCa?: string | null;

		/** SecretManager resource containing the webhook secret of the GitHub App, formatted as `projects/secrets/versions/*`. */
		webhookSecretSecretVersion?: string | null;
	}

	/** Configuration for connections to an instance of GitHub Enterprise. */
	export interface GoogleDevtoolsCloudbuildV2GitHubEnterpriseConfigFormProperties {

		/** Required. API Key used for authentication of webhook events. */
		apiKey: FormControl<string | null | undefined>,

		/** Id of the GitHub App created from the manifest. */
		appId: FormControl<string | null | undefined>,

		/** ID of the installation of the GitHub App. */
		appInstallationId: FormControl<string | null | undefined>,

		/** The URL-friendly name of the GitHub App. */
		appSlug: FormControl<string | null | undefined>,

		/** Required. The URI of the GitHub Enterprise host this connection is for. */
		hostUri: FormControl<string | null | undefined>,

		/** SecretManager resource containing the private key of the GitHub App, formatted as `projects/secrets/versions/*`. */
		privateKeySecretVersion: FormControl<string | null | undefined>,

		/** Output only. GitHub Enterprise version installed at the host_uri. */
		serverVersion: FormControl<string | null | undefined>,

		/** SSL certificate to use for requests to GitHub Enterprise. */
		sslCa: FormControl<string | null | undefined>,

		/** SecretManager resource containing the webhook secret of the GitHub App, formatted as `projects/secrets/versions/*`. */
		webhookSecretSecretVersion: FormControl<string | null | undefined>,
	}
	export function CreateGoogleDevtoolsCloudbuildV2GitHubEnterpriseConfigFormGroup() {
		return new FormGroup<GoogleDevtoolsCloudbuildV2GitHubEnterpriseConfigFormProperties>({
			apiKey: new FormControl<string | null | undefined>(undefined),
			appId: new FormControl<string | null | undefined>(undefined),
			appInstallationId: new FormControl<string | null | undefined>(undefined),
			appSlug: new FormControl<string | null | undefined>(undefined),
			hostUri: new FormControl<string | null | undefined>(undefined),
			privateKeySecretVersion: new FormControl<string | null | undefined>(undefined),
			serverVersion: new FormControl<string | null | undefined>(undefined),
			sslCa: new FormControl<string | null | undefined>(undefined),
			webhookSecretSecretVersion: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** ServiceDirectoryConfig represents Service Directory configuration for a connection. */
	export interface GoogleDevtoolsCloudbuildV2ServiceDirectoryConfig {

		/** Required. The Service Directory service name. Format: projects/{project}/locations/{location}/namespaces/{namespace}/services/{service}. */
		service?: string | null;
	}

	/** ServiceDirectoryConfig represents Service Directory configuration for a connection. */
	export interface GoogleDevtoolsCloudbuildV2ServiceDirectoryConfigFormProperties {

		/** Required. The Service Directory service name. Format: projects/{project}/locations/{location}/namespaces/{namespace}/services/{service}. */
		service: FormControl<string | null | undefined>,
	}
	export function CreateGoogleDevtoolsCloudbuildV2ServiceDirectoryConfigFormGroup() {
		return new FormGroup<GoogleDevtoolsCloudbuildV2ServiceDirectoryConfigFormProperties>({
			service: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Configuration for connections to gitlab.com or an instance of GitLab Enterprise. */
	export interface GoogleDevtoolsCloudbuildV2GitLabConfig {

		/** Represents a personal access token that authorized the Connection, and associated metadata. */
		authorizerCredential?: UserCredential;

		/** The URI of the GitLab Enterprise host this connection is for. If not specified, the default value is https://gitlab.com. */
		hostUri?: string | null;

		/** Represents a personal access token that authorized the Connection, and associated metadata. */
		readAuthorizerCredential?: UserCredential;

		/** Output only. Version of the GitLab Enterprise server running on the `host_uri`. */
		serverVersion?: string | null;

		/** ServiceDirectoryConfig represents Service Directory configuration for a connection. */
		serviceDirectoryConfig?: GoogleDevtoolsCloudbuildV2ServiceDirectoryConfig;

		/** SSL certificate to use for requests to GitLab Enterprise. */
		sslCa?: string | null;

		/** Required. Immutable. SecretManager resource containing the webhook secret of a GitLab Enterprise project, formatted as `projects/secrets/versions/*`. */
		webhookSecretSecretVersion?: string | null;
	}

	/** Configuration for connections to gitlab.com or an instance of GitLab Enterprise. */
	export interface GoogleDevtoolsCloudbuildV2GitLabConfigFormProperties {

		/** The URI of the GitLab Enterprise host this connection is for. If not specified, the default value is https://gitlab.com. */
		hostUri: FormControl<string | null | undefined>,

		/** Output only. Version of the GitLab Enterprise server running on the `host_uri`. */
		serverVersion: FormControl<string | null | undefined>,

		/** SSL certificate to use for requests to GitLab Enterprise. */
		sslCa: FormControl<string | null | undefined>,

		/** Required. Immutable. SecretManager resource containing the webhook secret of a GitLab Enterprise project, formatted as `projects/secrets/versions/*`. */
		webhookSecretSecretVersion: FormControl<string | null | undefined>,
	}
	export function CreateGoogleDevtoolsCloudbuildV2GitLabConfigFormGroup() {
		return new FormGroup<GoogleDevtoolsCloudbuildV2GitLabConfigFormProperties>({
			hostUri: new FormControl<string | null | undefined>(undefined),
			serverVersion: new FormControl<string | null | undefined>(undefined),
			sslCa: new FormControl<string | null | undefined>(undefined),
			webhookSecretSecretVersion: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents a personal access token that authorized the Connection, and associated metadata. */
	export interface UserCredential {

		/** Required. A SecretManager resource containing the user token that authorizes the Cloud Build connection. Format: `projects/secrets/versions/*`. */
		userTokenSecretVersion?: string | null;

		/** Output only. The username associated to this token. */
		username?: string | null;
	}

	/** Represents a personal access token that authorized the Connection, and associated metadata. */
	export interface UserCredentialFormProperties {

		/** Required. A SecretManager resource containing the user token that authorizes the Cloud Build connection. Format: `projects/secrets/versions/*`. */
		userTokenSecretVersion: FormControl<string | null | undefined>,

		/** Output only. The username associated to this token. */
		username: FormControl<string | null | undefined>,
	}
	export function CreateUserCredentialFormGroup() {
		return new FormGroup<UserCredentialFormProperties>({
			userTokenSecretVersion: new FormControl<string | null | undefined>(undefined),
			username: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Describes stage and necessary actions to be taken by the user to complete the installation. Used for GitHub and GitHub Enterprise based connections. */
	export interface InstallationState {

		/** Output only. Link to follow for next action. Empty string if the installation is already complete. */
		actionUri?: string | null;

		/** Output only. Message of what the user should do next to continue the installation. Empty string if the installation is already complete. */
		message?: string | null;

		/** Output only. Current step of the installation process. */
		stage?: InstallationStateStage | null;
	}

	/** Describes stage and necessary actions to be taken by the user to complete the installation. Used for GitHub and GitHub Enterprise based connections. */
	export interface InstallationStateFormProperties {

		/** Output only. Link to follow for next action. Empty string if the installation is already complete. */
		actionUri: FormControl<string | null | undefined>,

		/** Output only. Message of what the user should do next to continue the installation. Empty string if the installation is already complete. */
		message: FormControl<string | null | undefined>,

		/** Output only. Current step of the installation process. */
		stage: FormControl<InstallationStateStage | null | undefined>,
	}
	export function CreateInstallationStateFormGroup() {
		return new FormGroup<InstallationStateFormProperties>({
			actionUri: new FormControl<string | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
			stage: new FormControl<InstallationStateStage | null | undefined>(undefined),
		});

	}

	export enum InstallationStateStage { STAGE_UNSPECIFIED = 'STAGE_UNSPECIFIED', PENDING_CREATE_APP = 'PENDING_CREATE_APP', PENDING_USER_OAUTH = 'PENDING_USER_OAUTH', PENDING_INSTALL_APP = 'PENDING_INSTALL_APP', COMPLETE = 'COMPLETE' }


	/** EmbeddedTask defines a Task that is embedded in a Pipeline. */
	export interface EmbeddedTask {

		/** User annotations. See https://google.aip.dev/128#annotations */
		annotations?: {[id: string]: string };

		/** TaskSpec contains the Spec to instantiate a TaskRun. */
		taskSpec?: TaskSpec;
	}

	/** EmbeddedTask defines a Task that is embedded in a Pipeline. */
	export interface EmbeddedTaskFormProperties {

		/** User annotations. See https://google.aip.dev/128#annotations */
		annotations: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateEmbeddedTaskFormGroup() {
		return new FormGroup<EmbeddedTaskFormProperties>({
			annotations: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}


	/** TaskSpec contains the Spec to instantiate a TaskRun. */
	export interface TaskSpec {

		/** Description of the task. */
		description?: string | null;

		/** Sidecars that run alongside the Task’s step containers that should be added to this Task. */
		managedSidecars?: Array<string>;

		/** List of parameters. */
		params?: Array<ParamSpec>;

		/** Values that this Task can output. */
		results?: Array<TaskResult>;

		/** Sidecars that run alongside the Task's step containers. */
		sidecars?: Array<Sidecar>;

		/** StepTemplate can be used as the basis for all step containers within the Task, so that the steps inherit settings on the base container. */
		stepTemplate?: StepTemplate;

		/** Steps of the task. */
		steps?: Array<Step>;

		/** A collection of volumes that are available to mount into steps. */
		volumes?: Array<VolumeSource>;

		/** The volumes that this Task requires. */
		workspaces?: Array<WorkspaceDeclaration>;
	}

	/** TaskSpec contains the Spec to instantiate a TaskRun. */
	export interface TaskSpecFormProperties {

		/** Description of the task. */
		description: FormControl<string | null | undefined>,
	}
	export function CreateTaskSpecFormGroup() {
		return new FormGroup<TaskSpecFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** ParamSpec defines parameters needed beyond typed inputs (such as resources). Parameter values are provided by users as inputs on a TaskRun or PipelineRun. */
	export interface ParamSpec {

		/** Description of the ParamSpec */
		description?: string | null;

		/** Name of the ParamSpec */
		name?: string | null;

		/** Type of ParamSpec */
		type?: ParamSpecType | null;
	}

	/** ParamSpec defines parameters needed beyond typed inputs (such as resources). Parameter values are provided by users as inputs on a TaskRun or PipelineRun. */
	export interface ParamSpecFormProperties {

		/** Description of the ParamSpec */
		description: FormControl<string | null | undefined>,

		/** Name of the ParamSpec */
		name: FormControl<string | null | undefined>,

		/** Type of ParamSpec */
		type: FormControl<ParamSpecType | null | undefined>,
	}
	export function CreateParamSpecFormGroup() {
		return new FormGroup<ParamSpecFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<ParamSpecType | null | undefined>(undefined),
		});

	}

	export enum ParamSpecType { TYPE_UNSPECIFIED = 'TYPE_UNSPECIFIED', STRING = 'STRING', ARRAY = 'ARRAY' }


	/** TaskResult is used to describe the results of a task. */
	export interface TaskResult {

		/** Description of the result. */
		description?: string | null;

		/** Name of the result. */
		name?: string | null;

		/** When type is OBJECT, this map holds the names of fields inside that object along with the type of data each field holds. */
		properties?: {[id: string]: PropertySpec };

		/** The type of data that the result holds. */
		type?: TaskResultType | null;
	}

	/** TaskResult is used to describe the results of a task. */
	export interface TaskResultFormProperties {

		/** Description of the result. */
		description: FormControl<string | null | undefined>,

		/** Name of the result. */
		name: FormControl<string | null | undefined>,

		/** When type is OBJECT, this map holds the names of fields inside that object along with the type of data each field holds. */
		properties: FormControl<{[id: string]: PropertySpec } | null | undefined>,

		/** The type of data that the result holds. */
		type: FormControl<TaskResultType | null | undefined>,
	}
	export function CreateTaskResultFormGroup() {
		return new FormGroup<TaskResultFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			properties: new FormControl<{[id: string]: PropertySpec } | null | undefined>(undefined),
			type: new FormControl<TaskResultType | null | undefined>(undefined),
		});

	}


	/** PropertySpec holds information about a property in an object. */
	export interface PropertySpec {

		/** A type for the object. */
		type?: PropertySpecType | null;
	}

	/** PropertySpec holds information about a property in an object. */
	export interface PropertySpecFormProperties {

		/** A type for the object. */
		type: FormControl<PropertySpecType | null | undefined>,
	}
	export function CreatePropertySpecFormGroup() {
		return new FormGroup<PropertySpecFormProperties>({
			type: new FormControl<PropertySpecType | null | undefined>(undefined),
		});

	}

	export enum PropertySpecType { TYPE_UNSPECIFIED = 'TYPE_UNSPECIFIED', STRING = 'STRING' }

	export enum TaskResultType { TYPE_UNSPECIFIED = 'TYPE_UNSPECIFIED', STRING = 'STRING', ARRAY = 'ARRAY', OBJECT = 'OBJECT' }


	/** Sidecars run alongside the Task's step containers. */
	export interface Sidecar {

		/** Arguments to the entrypoint. */
		args?: Array<string>;

		/** Entrypoint array. */
		command?: Array<string>;

		/** List of environment variables to set in the container. */
		env?: Array<EnvVar>;

		/** Docker image name. */
		image?: string | null;

		/** Name of the Sidecar. */
		name?: string | null;

		/** Probe describes a health check to be performed against a container to determine whether it is alive or ready to receive traffic. */
		readinessProbe?: Probe;

		/** The contents of an executable file to execute. */
		script?: string | null;

		/** Security options the container should be run with. */
		securityContext?: SecurityContext;

		/** Pod volumes to mount into the container's filesystem. */
		volumeMounts?: Array<VolumeMount>;

		/** Container's working directory. */
		workingDir?: string | null;
	}

	/** Sidecars run alongside the Task's step containers. */
	export interface SidecarFormProperties {

		/** Docker image name. */
		image: FormControl<string | null | undefined>,

		/** Name of the Sidecar. */
		name: FormControl<string | null | undefined>,

		/** The contents of an executable file to execute. */
		script: FormControl<string | null | undefined>,

		/** Container's working directory. */
		workingDir: FormControl<string | null | undefined>,
	}
	export function CreateSidecarFormGroup() {
		return new FormGroup<SidecarFormProperties>({
			image: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			script: new FormControl<string | null | undefined>(undefined),
			workingDir: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Environment variable. */
	export interface EnvVar {

		/** Name of the environment variable. */
		name?: string | null;

		/** Value of the environment variable. */
		value?: string | null;
	}

	/** Environment variable. */
	export interface EnvVarFormProperties {

		/** Name of the environment variable. */
		name: FormControl<string | null | undefined>,

		/** Value of the environment variable. */
		value: FormControl<string | null | undefined>,
	}
	export function CreateEnvVarFormGroup() {
		return new FormGroup<EnvVarFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Probe describes a health check to be performed against a container to determine whether it is alive or ready to receive traffic. */
	export interface Probe {

		/** ExecAction describes a "run in container" action. */
		exec?: ExecAction;

		/** Optional. How often (in seconds) to perform the probe. Default to 10 seconds. Minimum value is 1. +optional */
		periodSeconds?: number | null;
	}

	/** Probe describes a health check to be performed against a container to determine whether it is alive or ready to receive traffic. */
	export interface ProbeFormProperties {

		/** Optional. How often (in seconds) to perform the probe. Default to 10 seconds. Minimum value is 1. +optional */
		periodSeconds: FormControl<number | null | undefined>,
	}
	export function CreateProbeFormGroup() {
		return new FormGroup<ProbeFormProperties>({
			periodSeconds: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** ExecAction describes a "run in container" action. */
	export interface ExecAction {

		/** Optional. Command is the command line to execute inside the container, the working directory for the command is root ('/') in the container's filesystem. The command is simply exec'd, it is not run inside a shell, so traditional shell instructions ('|', etc) won't work. To use a shell, you need to explicitly call out to that shell. Exit status of 0 is treated as live/healthy and non-zero is unhealthy. +optional */
		command?: Array<string>;
	}

	/** ExecAction describes a "run in container" action. */
	export interface ExecActionFormProperties {
	}
	export function CreateExecActionFormGroup() {
		return new FormGroup<ExecActionFormProperties>({
		});

	}


	/** Security options the container should be run with. */
	export interface SecurityContext {

		/** Optional. AllowPrivilegeEscalation controls whether a process can gain more privileges than its parent process. This bool directly controls if the no_new_privs flag will be set on the container process. AllowPrivilegeEscalation is true always when the container is: 1) run as Privileged 2) has CAP_SYS_ADMIN Note that this field cannot be set when spec.os.name is windows. +optional */
		allowPrivilegeEscalation?: boolean | null;

		/** Capabilities adds and removes POSIX capabilities from running containers. */
		capabilities?: Capabilities;

		/** Run container in privileged mode. */
		privileged?: boolean | null;

		/** Optional. The GID to run the entrypoint of the container process. Uses runtime default if unset. May also be set in PodSecurityContext. If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence. Note that this field cannot be set when spec.os.name is windows. +optional */
		runAsGroup?: string | null;

		/** Optional. Indicates that the container must run as a non-root user. If true, the Kubelet will validate the image at runtime to ensure that it does not run as UID 0 (root) and fail to start the container if it does. If unset or false, no such validation will be performed. May also be set in PodSecurityContext. If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence. +optional */
		runAsNonRoot?: boolean | null;

		/** Optional. The UID to run the entrypoint of the container process. Defaults to user specified in image metadata if unspecified. May also be set in PodSecurityContext. If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence. Note that this field cannot be set when spec.os.name is windows. +optional */
		runAsUser?: string | null;
	}

	/** Security options the container should be run with. */
	export interface SecurityContextFormProperties {

		/** Optional. AllowPrivilegeEscalation controls whether a process can gain more privileges than its parent process. This bool directly controls if the no_new_privs flag will be set on the container process. AllowPrivilegeEscalation is true always when the container is: 1) run as Privileged 2) has CAP_SYS_ADMIN Note that this field cannot be set when spec.os.name is windows. +optional */
		allowPrivilegeEscalation: FormControl<boolean | null | undefined>,

		/** Run container in privileged mode. */
		privileged: FormControl<boolean | null | undefined>,

		/** Optional. The GID to run the entrypoint of the container process. Uses runtime default if unset. May also be set in PodSecurityContext. If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence. Note that this field cannot be set when spec.os.name is windows. +optional */
		runAsGroup: FormControl<string | null | undefined>,

		/** Optional. Indicates that the container must run as a non-root user. If true, the Kubelet will validate the image at runtime to ensure that it does not run as UID 0 (root) and fail to start the container if it does. If unset or false, no such validation will be performed. May also be set in PodSecurityContext. If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence. +optional */
		runAsNonRoot: FormControl<boolean | null | undefined>,

		/** Optional. The UID to run the entrypoint of the container process. Defaults to user specified in image metadata if unspecified. May also be set in PodSecurityContext. If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence. Note that this field cannot be set when spec.os.name is windows. +optional */
		runAsUser: FormControl<string | null | undefined>,
	}
	export function CreateSecurityContextFormGroup() {
		return new FormGroup<SecurityContextFormProperties>({
			allowPrivilegeEscalation: new FormControl<boolean | null | undefined>(undefined),
			privileged: new FormControl<boolean | null | undefined>(undefined),
			runAsGroup: new FormControl<string | null | undefined>(undefined),
			runAsNonRoot: new FormControl<boolean | null | undefined>(undefined),
			runAsUser: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Pod volumes to mount into the container's filesystem. */
	export interface VolumeMount {

		/** Path within the container at which the volume should be mounted. Must not contain ':'. */
		mountPath?: string | null;

		/** Name of the volume. */
		name?: string | null;

		/** Mounted read-only if true, read-write otherwise (false or unspecified). */
		readOnly?: boolean | null;

		/** Path within the volume from which the container's volume should be mounted. Defaults to "" (volume's root). */
		subPath?: string | null;

		/** Expanded path within the volume from which the container's volume should be mounted. Behaves similarly to SubPath but environment variable references $(VAR_NAME) are expanded using the container's environment. Defaults to "" (volume's root). */
		subPathExpr?: string | null;
	}

	/** Pod volumes to mount into the container's filesystem. */
	export interface VolumeMountFormProperties {

		/** Path within the container at which the volume should be mounted. Must not contain ':'. */
		mountPath: FormControl<string | null | undefined>,

		/** Name of the volume. */
		name: FormControl<string | null | undefined>,

		/** Mounted read-only if true, read-write otherwise (false or unspecified). */
		readOnly: FormControl<boolean | null | undefined>,

		/** Path within the volume from which the container's volume should be mounted. Defaults to "" (volume's root). */
		subPath: FormControl<string | null | undefined>,

		/** Expanded path within the volume from which the container's volume should be mounted. Behaves similarly to SubPath but environment variable references $(VAR_NAME) are expanded using the container's environment. Defaults to "" (volume's root). */
		subPathExpr: FormControl<string | null | undefined>,
	}
	export function CreateVolumeMountFormGroup() {
		return new FormGroup<VolumeMountFormProperties>({
			mountPath: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			readOnly: new FormControl<boolean | null | undefined>(undefined),
			subPath: new FormControl<string | null | undefined>(undefined),
			subPathExpr: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** StepTemplate can be used as the basis for all step containers within the Task, so that the steps inherit settings on the base container. */
	export interface StepTemplate {

		/** Optional. List of environment variables to set in the Step. Cannot be updated. */
		env?: Array<EnvVar>;

		/** Optional. Pod volumes to mount into the container's filesystem. */
		volumeMounts?: Array<VolumeMount>;
	}

	/** StepTemplate can be used as the basis for all step containers within the Task, so that the steps inherit settings on the base container. */
	export interface StepTemplateFormProperties {
	}
	export function CreateStepTemplateFormGroup() {
		return new FormGroup<StepTemplateFormProperties>({
		});

	}


	/** Step embeds the Container type, which allows it to include fields not provided by Container. */
	export interface Step {

		/** Arguments to the entrypoint. */
		args?: Array<string>;

		/** Entrypoint array. */
		command?: Array<string>;

		/** List of environment variables to set in the container. */
		env?: Array<EnvVar>;

		/** Docker image name. */
		image?: string | null;

		/** Name of the container specified as a DNS_LABEL. */
		name?: string | null;

		/** The contents of an executable file to execute. */
		script?: string | null;

		/** Security options the container should be run with. */
		securityContext?: SecurityContext;

		/** Time after which the Step times out. Defaults to never. */
		timeout?: string | null;

		/** Pod volumes to mount into the container's filesystem. */
		volumeMounts?: Array<VolumeMount>;

		/** Container's working directory. */
		workingDir?: string | null;
	}

	/** Step embeds the Container type, which allows it to include fields not provided by Container. */
	export interface StepFormProperties {

		/** Docker image name. */
		image: FormControl<string | null | undefined>,

		/** Name of the container specified as a DNS_LABEL. */
		name: FormControl<string | null | undefined>,

		/** The contents of an executable file to execute. */
		script: FormControl<string | null | undefined>,

		/** Time after which the Step times out. Defaults to never. */
		timeout: FormControl<string | null | undefined>,

		/** Container's working directory. */
		workingDir: FormControl<string | null | undefined>,
	}
	export function CreateStepFormGroup() {
		return new FormGroup<StepFormProperties>({
			image: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			script: new FormControl<string | null | undefined>(undefined),
			timeout: new FormControl<string | null | undefined>(undefined),
			workingDir: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Volumes available to mount. */
	export interface VolumeSource {

		/** Represents an empty Volume source. */
		emptyDir?: EmptyDirVolumeSource;

		/** Name of the Volume. Must be a DNS_LABEL and unique within the pod. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
		name?: string | null;
	}

	/** Volumes available to mount. */
	export interface VolumeSourceFormProperties {

		/** Name of the Volume. Must be a DNS_LABEL and unique within the pod. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names */
		name: FormControl<string | null | undefined>,
	}
	export function CreateVolumeSourceFormGroup() {
		return new FormGroup<VolumeSourceFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents an empty Volume source. */
	export interface EmptyDirVolumeSource {
	}

	/** Represents an empty Volume source. */
	export interface EmptyDirVolumeSourceFormProperties {
	}
	export function CreateEmptyDirVolumeSourceFormGroup() {
		return new FormGroup<EmptyDirVolumeSourceFormProperties>({
		});

	}


	/** WorkspaceDeclaration is a declaration of a volume that a Task requires. */
	export interface WorkspaceDeclaration {

		/** Description is a human readable description of this volume. */
		description?: string | null;

		/** MountPath overrides the directory that the volume will be made available at. */
		mountPath?: string | null;

		/** Name is the name by which you can bind the volume at runtime. */
		name?: string | null;

		/** Optional. Optional marks a Workspace as not being required in TaskRuns. By default this field is false and so declared workspaces are required. */
		optional?: boolean | null;

		/** ReadOnly dictates whether a mounted volume is writable. */
		readOnly?: boolean | null;
	}

	/** WorkspaceDeclaration is a declaration of a volume that a Task requires. */
	export interface WorkspaceDeclarationFormProperties {

		/** Description is a human readable description of this volume. */
		description: FormControl<string | null | undefined>,

		/** MountPath overrides the directory that the volume will be made available at. */
		mountPath: FormControl<string | null | undefined>,

		/** Name is the name by which you can bind the volume at runtime. */
		name: FormControl<string | null | undefined>,

		/** Optional. Optional marks a Workspace as not being required in TaskRuns. By default this field is false and so declared workspaces are required. */
		optional: FormControl<boolean | null | undefined>,

		/** ReadOnly dictates whether a mounted volume is writable. */
		readOnly: FormControl<boolean | null | undefined>,
	}
	export function CreateWorkspaceDeclarationFormGroup() {
		return new FormGroup<WorkspaceDeclarationFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			mountPath: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			optional: new FormControl<boolean | null | undefined>(undefined),
			readOnly: new FormControl<boolean | null | undefined>(undefined),
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


	/** Response for fetching git refs */
	export interface FetchGitRefsResponse {

		/** A token identifying a page of results the server should return. */
		nextPageToken?: string | null;

		/** Name of the refs fetched. */
		refNames?: Array<string>;
	}

	/** Response for fetching git refs */
	export interface FetchGitRefsResponseFormProperties {

		/** A token identifying a page of results the server should return. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateFetchGitRefsResponseFormGroup() {
		return new FormGroup<FetchGitRefsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response message for FetchLinkableRepositories. */
	export interface FetchLinkableRepositoriesResponse {

		/** A token identifying a page of results the server should return. */
		nextPageToken?: string | null;

		/** repositories ready to be created. */
		repositories?: Array<Repository>;
	}

	/** Response message for FetchLinkableRepositories. */
	export interface FetchLinkableRepositoriesResponseFormProperties {

		/** A token identifying a page of results the server should return. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateFetchLinkableRepositoriesResponseFormGroup() {
		return new FormGroup<FetchLinkableRepositoriesResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Message for fetching SCM read token. */
	export interface FetchReadTokenRequest {
	}

	/** Message for fetching SCM read token. */
	export interface FetchReadTokenRequestFormProperties {
	}
	export function CreateFetchReadTokenRequestFormGroup() {
		return new FormGroup<FetchReadTokenRequestFormProperties>({
		});

	}


	/** Message for responding to get read token. */
	export interface FetchReadTokenResponse {

		/** Expiration timestamp. Can be empty if unknown or non-expiring. */
		expirationTime?: string | null;

		/** The token content. */
		token?: string | null;
	}

	/** Message for responding to get read token. */
	export interface FetchReadTokenResponseFormProperties {

		/** Expiration timestamp. Can be empty if unknown or non-expiring. */
		expirationTime: FormControl<string | null | undefined>,

		/** The token content. */
		token: FormControl<string | null | undefined>,
	}
	export function CreateFetchReadTokenResponseFormGroup() {
		return new FormGroup<FetchReadTokenResponseFormProperties>({
			expirationTime: new FormControl<string | null | undefined>(undefined),
			token: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Message for fetching SCM read/write token. */
	export interface FetchReadWriteTokenRequest {
	}

	/** Message for fetching SCM read/write token. */
	export interface FetchReadWriteTokenRequestFormProperties {
	}
	export function CreateFetchReadWriteTokenRequestFormGroup() {
		return new FormGroup<FetchReadWriteTokenRequestFormProperties>({
		});

	}


	/** Message for responding to get read/write token. */
	export interface FetchReadWriteTokenResponse {

		/** Expiration timestamp. Can be empty if unknown or non-expiring. */
		expirationTime?: string | null;

		/** The token content. */
		token?: string | null;
	}

	/** Message for responding to get read/write token. */
	export interface FetchReadWriteTokenResponseFormProperties {

		/** Expiration timestamp. Can be empty if unknown or non-expiring. */
		expirationTime: FormControl<string | null | undefined>,

		/** The token content. */
		token: FormControl<string | null | undefined>,
	}
	export function CreateFetchReadWriteTokenResponseFormGroup() {
		return new FormGroup<FetchReadWriteTokenResponseFormProperties>({
			expirationTime: new FormControl<string | null | undefined>(undefined),
			token: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Conditions defines a readiness condition for a Knative resource. */
	export interface GoogleDevtoolsCloudbuildV2Condition {

		/** LastTransitionTime is the last time the condition transitioned from one status to another. */
		lastTransitionTime?: string | null;

		/** A human readable message indicating details about the transition. */
		message?: string | null;

		/** The reason for the condition's last transition. */
		reason?: string | null;

		/** Severity with which to treat failures of this type of condition. */
		severity?: GoogleDevtoolsCloudbuildV2ConditionSeverity | null;

		/** Status of the condition. */
		status?: GoogleDevtoolsCloudbuildV2ConditionStatus | null;

		/** Type of condition. */
		type?: string | null;
	}

	/** Conditions defines a readiness condition for a Knative resource. */
	export interface GoogleDevtoolsCloudbuildV2ConditionFormProperties {

		/** LastTransitionTime is the last time the condition transitioned from one status to another. */
		lastTransitionTime: FormControl<string | null | undefined>,

		/** A human readable message indicating details about the transition. */
		message: FormControl<string | null | undefined>,

		/** The reason for the condition's last transition. */
		reason: FormControl<string | null | undefined>,

		/** Severity with which to treat failures of this type of condition. */
		severity: FormControl<GoogleDevtoolsCloudbuildV2ConditionSeverity | null | undefined>,

		/** Status of the condition. */
		status: FormControl<GoogleDevtoolsCloudbuildV2ConditionStatus | null | undefined>,

		/** Type of condition. */
		type: FormControl<string | null | undefined>,
	}
	export function CreateGoogleDevtoolsCloudbuildV2ConditionFormGroup() {
		return new FormGroup<GoogleDevtoolsCloudbuildV2ConditionFormProperties>({
			lastTransitionTime: new FormControl<string | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
			reason: new FormControl<string | null | undefined>(undefined),
			severity: new FormControl<GoogleDevtoolsCloudbuildV2ConditionSeverity | null | undefined>(undefined),
			status: new FormControl<GoogleDevtoolsCloudbuildV2ConditionStatus | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum GoogleDevtoolsCloudbuildV2ConditionSeverity { SEVERITY_UNSPECIFIED = 'SEVERITY_UNSPECIFIED', WARNING = 'WARNING', INFO = 'INFO' }

	export enum GoogleDevtoolsCloudbuildV2ConditionStatus { UNKNOWN = 'UNKNOWN', TRUE = 'TRUE', FALSE = 'FALSE' }


	/** Represents the metadata of the long-running operation. */
	export interface GoogleDevtoolsCloudbuildV2OperationMetadata {

		/** Output only. API version used to start the operation. */
		apiVersion?: string | null;

		/** Output only. The time the operation was created. */
		createTime?: string | null;

		/** Output only. The time the operation finished running. */
		endTime?: string | null;

		/** Output only. Identifies whether the user has requested cancellation of the operation. Operations that have successfully been cancelled have Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`. */
		requestedCancellation?: boolean | null;

		/** Output only. Human-readable status of the operation, if any. */
		statusMessage?: string | null;

		/** Output only. Server-defined resource path for the target of the operation. */
		target?: string | null;

		/** Output only. Name of the verb executed by the operation. */
		verb?: string | null;
	}

	/** Represents the metadata of the long-running operation. */
	export interface GoogleDevtoolsCloudbuildV2OperationMetadataFormProperties {

		/** Output only. API version used to start the operation. */
		apiVersion: FormControl<string | null | undefined>,

		/** Output only. The time the operation was created. */
		createTime: FormControl<string | null | undefined>,

		/** Output only. The time the operation finished running. */
		endTime: FormControl<string | null | undefined>,

		/** Output only. Identifies whether the user has requested cancellation of the operation. Operations that have successfully been cancelled have Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`. */
		requestedCancellation: FormControl<boolean | null | undefined>,

		/** Output only. Human-readable status of the operation, if any. */
		statusMessage: FormControl<string | null | undefined>,

		/** Output only. Server-defined resource path for the target of the operation. */
		target: FormControl<string | null | undefined>,

		/** Output only. Name of the verb executed by the operation. */
		verb: FormControl<string | null | undefined>,
	}
	export function CreateGoogleDevtoolsCloudbuildV2OperationMetadataFormGroup() {
		return new FormGroup<GoogleDevtoolsCloudbuildV2OperationMetadataFormProperties>({
			apiVersion: new FormControl<string | null | undefined>(undefined),
			createTime: new FormControl<string | null | undefined>(undefined),
			endTime: new FormControl<string | null | undefined>(undefined),
			requestedCancellation: new FormControl<boolean | null | undefined>(undefined),
			statusMessage: new FormControl<string | null | undefined>(undefined),
			target: new FormControl<string | null | undefined>(undefined),
			verb: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Message that represents an arbitrary HTTP body. It should only be used for payload formats that can't be represented as JSON, such as raw binary or an HTML page. This message can be used both in streaming and non-streaming API methods in the request as well as the response. It can be used as a top-level request field, which is convenient if one wants to extract parameters from either the URL or HTTP template into the request fields and also want access to the raw HTTP body. Example: message GetResourceRequest { // A unique request id. string request_id = 1; // The raw HTTP body is bound to this field. google.api.HttpBody http_body = 2; } service ResourceService { rpc GetResource(GetResourceRequest) returns (google.api.HttpBody); rpc UpdateResource(google.api.HttpBody) returns (google.protobuf.Empty); } Example with streaming methods: service CaldavService { rpc GetCalendar(stream google.api.HttpBody) returns (stream google.api.HttpBody); rpc UpdateCalendar(stream google.api.HttpBody) returns (stream google.api.HttpBody); } Use of this type only changes how the request and response bodies are handled, all other features will continue to work unchanged. */
	export interface HttpBody {

		/** The HTTP Content-Type header value specifying the content type of the body. */
		contentType?: string | null;

		/** The HTTP request/response body as raw binary. */
		data?: string | null;

		/** Application specific response metadata. Must be set in the first response for streaming APIs. */
		extensions?: Array<string>;
	}

	/** Message that represents an arbitrary HTTP body. It should only be used for payload formats that can't be represented as JSON, such as raw binary or an HTML page. This message can be used both in streaming and non-streaming API methods in the request as well as the response. It can be used as a top-level request field, which is convenient if one wants to extract parameters from either the URL or HTTP template into the request fields and also want access to the raw HTTP body. Example: message GetResourceRequest { // A unique request id. string request_id = 1; // The raw HTTP body is bound to this field. google.api.HttpBody http_body = 2; } service ResourceService { rpc GetResource(GetResourceRequest) returns (google.api.HttpBody); rpc UpdateResource(google.api.HttpBody) returns (google.protobuf.Empty); } Example with streaming methods: service CaldavService { rpc GetCalendar(stream google.api.HttpBody) returns (stream google.api.HttpBody); rpc UpdateCalendar(stream google.api.HttpBody) returns (stream google.api.HttpBody); } Use of this type only changes how the request and response bodies are handled, all other features will continue to work unchanged. */
	export interface HttpBodyFormProperties {

		/** The HTTP Content-Type header value specifying the content type of the body. */
		contentType: FormControl<string | null | undefined>,

		/** The HTTP request/response body as raw binary. */
		data: FormControl<string | null | undefined>,
	}
	export function CreateHttpBodyFormGroup() {
		return new FormGroup<HttpBodyFormProperties>({
			contentType: new FormControl<string | null | undefined>(undefined),
			data: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Message for response to listing Connections. */
	export interface ListConnectionsResponse {

		/** The list of Connections. */
		connections?: Array<Connection>;

		/** A token identifying a page of results the server should return. */
		nextPageToken?: string | null;
	}

	/** Message for response to listing Connections. */
	export interface ListConnectionsResponseFormProperties {

		/** A token identifying a page of results the server should return. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListConnectionsResponseFormGroup() {
		return new FormGroup<ListConnectionsResponseFormProperties>({
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


	/** Message for response to listing Repositories. */
	export interface ListRepositoriesResponse {

		/** A token identifying a page of results the server should return. */
		nextPageToken?: string | null;

		/** The list of Repositories. */
		repositories?: Array<Repository>;
	}

	/** Message for response to listing Repositories. */
	export interface ListRepositoriesResponseFormProperties {

		/** A token identifying a page of results the server should return. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListRepositoriesResponseFormGroup() {
		return new FormGroup<ListRepositoriesResponseFormProperties>({
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


	/** Represents the metadata of the long-running operation. */
	export interface OperationMetadata {

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
	export interface OperationMetadataFormProperties {

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


	/** Param defined with name and value. PipelineRef can be used to refer to a specific instance of a Pipeline. */
	export interface Param {

		/** Name of the parameter. */
		name?: string | null;

		/** Parameter value. */
		value?: ParamValue;
	}

	/** Param defined with name and value. PipelineRef can be used to refer to a specific instance of a Pipeline. */
	export interface ParamFormProperties {

		/** Name of the parameter. */
		name: FormControl<string | null | undefined>,
	}
	export function CreateParamFormGroup() {
		return new FormGroup<ParamFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Parameter value. */
	export interface ParamValue {

		/** Value of the parameter if type is array. */
		arrayVal?: Array<string>;

		/** Value of the parameter if type is string. */
		stringVal?: string | null;

		/** Type of parameter. */
		type?: ParamSpecType | null;
	}

	/** Parameter value. */
	export interface ParamValueFormProperties {

		/** Value of the parameter if type is string. */
		stringVal: FormControl<string | null | undefined>,

		/** Type of parameter. */
		type: FormControl<ParamSpecType | null | undefined>,
	}
	export function CreateParamValueFormGroup() {
		return new FormGroup<ParamValueFormProperties>({
			stringVal: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<ParamSpecType | null | undefined>(undefined),
		});

	}


	/** PipelineRef can be used to refer to a specific instance of a Pipeline. */
	export interface PipelineRef {

		/** Name of the Pipeline. */
		name?: string | null;

		/** Params contains the parameters used to identify the referenced Tekton resource. Example entries might include "repo" or "path" but the set of params ultimately depends on the chosen resolver. */
		params?: Array<Param>;

		/** Resolver is the name of the resolver that should perform resolution of the referenced Tekton resource. */
		resolver?: PipelineRefResolver | null;
	}

	/** PipelineRef can be used to refer to a specific instance of a Pipeline. */
	export interface PipelineRefFormProperties {

		/** Name of the Pipeline. */
		name: FormControl<string | null | undefined>,

		/** Resolver is the name of the resolver that should perform resolution of the referenced Tekton resource. */
		resolver: FormControl<PipelineRefResolver | null | undefined>,
	}
	export function CreatePipelineRefFormGroup() {
		return new FormGroup<PipelineRefFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			resolver: new FormControl<PipelineRefResolver | null | undefined>(undefined),
		});

	}

	export enum PipelineRefResolver { RESOLVER_NAME_UNSPECIFIED = 'RESOLVER_NAME_UNSPECIFIED', BUNDLES = 'BUNDLES', GCB_REPO = 'GCB_REPO', GIT = 'GIT' }


	/** Message describing PipelineRun object */
	export interface PipelineRun {

		/** User annotations. See https://google.aip.dev/128#annotations */
		annotations?: {[id: string]: string };

		/** Output only. List of TaskRun and Run names and PipelineTask names for children of this PipelineRun. */
		childReferences?: Array<ChildStatusReference>;

		/** Output only. Time the pipeline completed. */
		completionTime?: string | null;

		/** Output only. Kubernetes Conditions convention for PipelineRun status and error. */
		conditions?: Array<GoogleDevtoolsCloudbuildV2Condition>;

		/** Output only. Time at which the request to create the `PipelineRun` was received. */
		createTime?: string | null;

		/** Needed for declarative-friendly resources. */
		etag?: string | null;

		/** Output only. FinallyStartTime is when all non-finally tasks have been completed and only finally tasks are being executed. +optional */
		finallyStartTime?: string | null;

		/** Output only. The `PipelineRun` name with format `projects/{project}/locations/{location}/pipelineRuns/{pipeline_run}` */
		name?: string | null;

		/** Params is a list of parameter names and values. */
		params?: Array<Param>;

		/** PipelineRef can be used to refer to a specific instance of a Pipeline. */
		pipelineRef?: PipelineRef;

		/** Pipelinerun status the user can provide. Used for cancellation. */
		pipelineRunStatus?: PipelineRunPipelineRunStatus | null;

		/** PipelineSpec defines the desired state of Pipeline. */
		pipelineSpec?: PipelineSpec;

		/** PipelineSpec defines the desired state of Pipeline. */
		resolvedPipelineSpec?: PipelineSpec;

		/** Service account used in the Pipeline. */
		serviceAccount?: string | null;

		/** Output only. List of tasks that were skipped due to when expressions evaluating to false. */
		skippedTasks?: Array<SkippedTask>;

		/** Output only. Time the pipeline is actually started. */
		startTime?: string | null;

		/** TimeoutFields allows granular specification of pipeline, task, and finally timeouts */
		timeouts?: TimeoutFields;

		/** Output only. A unique identifier for the `PipelineRun`. */
		uid?: string | null;

		/** Output only. Time at which the request to update the `PipelineRun` was received. */
		updateTime?: string | null;

		/** Output only. The WorkerPool used to run this PipelineRun. */
		workerPool?: string | null;

		/** Output only. The Workflow used to create this PipelineRun. */
		workflow?: string | null;

		/** Workspaces is a list of WorkspaceBindings from volumes to workspaces. */
		workspaces?: Array<WorkspaceBinding>;
	}

	/** Message describing PipelineRun object */
	export interface PipelineRunFormProperties {

		/** User annotations. See https://google.aip.dev/128#annotations */
		annotations: FormControl<{[id: string]: string } | null | undefined>,

		/** Output only. Time the pipeline completed. */
		completionTime: FormControl<string | null | undefined>,

		/** Output only. Time at which the request to create the `PipelineRun` was received. */
		createTime: FormControl<string | null | undefined>,

		/** Needed for declarative-friendly resources. */
		etag: FormControl<string | null | undefined>,

		/** Output only. FinallyStartTime is when all non-finally tasks have been completed and only finally tasks are being executed. +optional */
		finallyStartTime: FormControl<string | null | undefined>,

		/** Output only. The `PipelineRun` name with format `projects/{project}/locations/{location}/pipelineRuns/{pipeline_run}` */
		name: FormControl<string | null | undefined>,

		/** Pipelinerun status the user can provide. Used for cancellation. */
		pipelineRunStatus: FormControl<PipelineRunPipelineRunStatus | null | undefined>,

		/** Service account used in the Pipeline. */
		serviceAccount: FormControl<string | null | undefined>,

		/** Output only. Time the pipeline is actually started. */
		startTime: FormControl<string | null | undefined>,

		/** Output only. A unique identifier for the `PipelineRun`. */
		uid: FormControl<string | null | undefined>,

		/** Output only. Time at which the request to update the `PipelineRun` was received. */
		updateTime: FormControl<string | null | undefined>,

		/** Output only. The WorkerPool used to run this PipelineRun. */
		workerPool: FormControl<string | null | undefined>,

		/** Output only. The Workflow used to create this PipelineRun. */
		workflow: FormControl<string | null | undefined>,
	}
	export function CreatePipelineRunFormGroup() {
		return new FormGroup<PipelineRunFormProperties>({
			annotations: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			completionTime: new FormControl<string | null | undefined>(undefined),
			createTime: new FormControl<string | null | undefined>(undefined),
			etag: new FormControl<string | null | undefined>(undefined),
			finallyStartTime: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			pipelineRunStatus: new FormControl<PipelineRunPipelineRunStatus | null | undefined>(undefined),
			serviceAccount: new FormControl<string | null | undefined>(undefined),
			startTime: new FormControl<string | null | undefined>(undefined),
			uid: new FormControl<string | null | undefined>(undefined),
			updateTime: new FormControl<string | null | undefined>(undefined),
			workerPool: new FormControl<string | null | undefined>(undefined),
			workflow: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum PipelineRunPipelineRunStatus { PIPELINE_RUN_STATUS_UNSPECIFIED = 'PIPELINE_RUN_STATUS_UNSPECIFIED', PIPELINE_RUN_CANCELLED = 'PIPELINE_RUN_CANCELLED' }


	/** PipelineSpec defines the desired state of Pipeline. */
	export interface PipelineSpec {

		/** List of Tasks that execute just before leaving the Pipeline i.e. either after all Tasks are finished executing successfully or after a failure which would result in ending the Pipeline. */
		finallyTasks?: Array<PipelineTask>;

		/** Output only. auto-generated yaml that is output only for display purpose for workflows using pipeline_spec, used by UI/gcloud cli for Workflows. */
		generatedYaml?: string | null;

		/** List of parameters. */
		params?: Array<ParamSpec>;

		/** List of Tasks that execute when this Pipeline is run. */
		tasks?: Array<PipelineTask>;

		/** Workspaces declares a set of named workspaces that are expected to be provided by a PipelineRun. */
		workspaces?: Array<PipelineWorkspaceDeclaration>;
	}

	/** PipelineSpec defines the desired state of Pipeline. */
	export interface PipelineSpecFormProperties {

		/** Output only. auto-generated yaml that is output only for display purpose for workflows using pipeline_spec, used by UI/gcloud cli for Workflows. */
		generatedYaml: FormControl<string | null | undefined>,
	}
	export function CreatePipelineSpecFormGroup() {
		return new FormGroup<PipelineSpecFormProperties>({
			generatedYaml: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** PipelineTask defines a task in a Pipeline. */
	export interface PipelineTask {

		/** Name of the task. */
		name?: string | null;

		/** Params is a list of parameter names and values. */
		params?: Array<Param>;

		/** Retries represents how many times this task should be retried in case of task failure. */
		retries?: number | null;

		/** RunAfter is the list of PipelineTask names that should be executed before this Task executes. (Used to force a specific ordering in graph execution.) */
		runAfter?: Array<string>;

		/** TaskRef can be used to refer to a specific instance of a task. PipelineRef can be used to refer to a specific instance of a Pipeline. */
		taskRef?: TaskRef;

		/** EmbeddedTask defines a Task that is embedded in a Pipeline. */
		taskSpec?: EmbeddedTask;

		/** Time after which the TaskRun times out. Defaults to 1 hour. Specified TaskRun timeout should be less than 24h. */
		timeout?: string | null;

		/** Conditions that need to be true for the task to run. */
		whenExpressions?: Array<WhenExpression>;

		/** Workspaces maps workspaces from the pipeline spec to the workspaces declared in the Task. */
		workspaces?: Array<WorkspacePipelineTaskBinding>;
	}

	/** PipelineTask defines a task in a Pipeline. */
	export interface PipelineTaskFormProperties {

		/** Name of the task. */
		name: FormControl<string | null | undefined>,

		/** Retries represents how many times this task should be retried in case of task failure. */
		retries: FormControl<number | null | undefined>,

		/** Time after which the TaskRun times out. Defaults to 1 hour. Specified TaskRun timeout should be less than 24h. */
		timeout: FormControl<string | null | undefined>,
	}
	export function CreatePipelineTaskFormGroup() {
		return new FormGroup<PipelineTaskFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			retries: new FormControl<number | null | undefined>(undefined),
			timeout: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** TaskRef can be used to refer to a specific instance of a task. PipelineRef can be used to refer to a specific instance of a Pipeline. */
	export interface TaskRef {

		/** Name of the task. */
		name?: string | null;

		/** Params contains the parameters used to identify the referenced Tekton resource. Example entries might include "repo" or "path" but the set of params ultimately depends on the chosen resolver. */
		params?: Array<Param>;

		/** Resolver is the name of the resolver that should perform resolution of the referenced Tekton resource. */
		resolver?: PipelineRefResolver | null;
	}

	/** TaskRef can be used to refer to a specific instance of a task. PipelineRef can be used to refer to a specific instance of a Pipeline. */
	export interface TaskRefFormProperties {

		/** Name of the task. */
		name: FormControl<string | null | undefined>,

		/** Resolver is the name of the resolver that should perform resolution of the referenced Tekton resource. */
		resolver: FormControl<PipelineRefResolver | null | undefined>,
	}
	export function CreateTaskRefFormGroup() {
		return new FormGroup<TaskRefFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			resolver: new FormControl<PipelineRefResolver | null | undefined>(undefined),
		});

	}


	/** WorkspacePipelineTaskBinding maps workspaces from the PipelineSpec to the workspaces declared in the Task. */
	export interface WorkspacePipelineTaskBinding {

		/** Name of the workspace as declared by the task. */
		name?: string | null;

		/** Optional. SubPath is optionally a directory on the volume which should be used for this binding (i.e. the volume will be mounted at this sub directory). +optional */
		subPath?: string | null;

		/** Name of the workspace declared by the pipeline. */
		workspace?: string | null;
	}

	/** WorkspacePipelineTaskBinding maps workspaces from the PipelineSpec to the workspaces declared in the Task. */
	export interface WorkspacePipelineTaskBindingFormProperties {

		/** Name of the workspace as declared by the task. */
		name: FormControl<string | null | undefined>,

		/** Optional. SubPath is optionally a directory on the volume which should be used for this binding (i.e. the volume will be mounted at this sub directory). +optional */
		subPath: FormControl<string | null | undefined>,

		/** Name of the workspace declared by the pipeline. */
		workspace: FormControl<string | null | undefined>,
	}
	export function CreateWorkspacePipelineTaskBindingFormGroup() {
		return new FormGroup<WorkspacePipelineTaskBindingFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			subPath: new FormControl<string | null | undefined>(undefined),
			workspace: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Workspaces declares a set of named workspaces that are expected to be provided by a PipelineRun. */
	export interface PipelineWorkspaceDeclaration {

		/** Description is a human readable string describing how the workspace will be used in the Pipeline. */
		description?: string | null;

		/** Name is the name of a workspace to be provided by a PipelineRun. */
		name?: string | null;

		/** Optional marks a Workspace as not being required in PipelineRuns. By default this field is false and so declared workspaces are required. */
		optional?: boolean | null;
	}

	/** Workspaces declares a set of named workspaces that are expected to be provided by a PipelineRun. */
	export interface PipelineWorkspaceDeclarationFormProperties {

		/** Description is a human readable string describing how the workspace will be used in the Pipeline. */
		description: FormControl<string | null | undefined>,

		/** Name is the name of a workspace to be provided by a PipelineRun. */
		name: FormControl<string | null | undefined>,

		/** Optional marks a Workspace as not being required in PipelineRuns. By default this field is false and so declared workspaces are required. */
		optional: FormControl<boolean | null | undefined>,
	}
	export function CreatePipelineWorkspaceDeclarationFormGroup() {
		return new FormGroup<PipelineWorkspaceDeclarationFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			optional: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** SkippedTask is used to describe the Tasks that were skipped due to their When Expressions evaluating to False. */
	export interface SkippedTask {

		/** Name is the Pipeline Task name */
		name?: string | null;

		/** Output only. Reason is the cause of the PipelineTask being skipped. */
		reason?: string | null;

		/** WhenExpressions is the list of checks guarding the execution of the PipelineTask */
		whenExpressions?: Array<WhenExpression>;
	}

	/** SkippedTask is used to describe the Tasks that were skipped due to their When Expressions evaluating to False. */
	export interface SkippedTaskFormProperties {

		/** Name is the Pipeline Task name */
		name: FormControl<string | null | undefined>,

		/** Output only. Reason is the cause of the PipelineTask being skipped. */
		reason: FormControl<string | null | undefined>,
	}
	export function CreateSkippedTaskFormGroup() {
		return new FormGroup<SkippedTaskFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			reason: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** TimeoutFields allows granular specification of pipeline, task, and finally timeouts */
	export interface TimeoutFields {

		/** Finally sets the maximum allowed duration of this pipeline's finally */
		finally?: string | null;

		/** Pipeline sets the maximum allowed duration for execution of the entire pipeline. The sum of individual timeouts for tasks and finally must not exceed this value. */
		pipeline?: string | null;

		/** Tasks sets the maximum allowed duration of this pipeline's tasks */
		tasks?: string | null;
	}

	/** TimeoutFields allows granular specification of pipeline, task, and finally timeouts */
	export interface TimeoutFieldsFormProperties {

		/** Finally sets the maximum allowed duration of this pipeline's finally */
		finally: FormControl<string | null | undefined>,

		/** Pipeline sets the maximum allowed duration for execution of the entire pipeline. The sum of individual timeouts for tasks and finally must not exceed this value. */
		pipeline: FormControl<string | null | undefined>,

		/** Tasks sets the maximum allowed duration of this pipeline's tasks */
		tasks: FormControl<string | null | undefined>,
	}
	export function CreateTimeoutFieldsFormGroup() {
		return new FormGroup<TimeoutFieldsFormProperties>({
			finally: new FormControl<string | null | undefined>(undefined),
			pipeline: new FormControl<string | null | undefined>(undefined),
			tasks: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** WorkspaceBinding maps a workspace to a Volume. PipelineRef can be used to refer to a specific instance of a Pipeline. */
	export interface WorkspaceBinding {

		/** Name of the workspace. */
		name?: string | null;

		/** Secret Volume Source. */
		secret?: SecretVolumeSource;

		/** Optional. SubPath is optionally a directory on the volume which should be used for this binding (i.e. the volume will be mounted at this sub directory). +optional */
		subPath?: string | null;

		/** VolumeClaim is a user's request for a volume. */
		volumeClaim?: VolumeClaim;
	}

	/** WorkspaceBinding maps a workspace to a Volume. PipelineRef can be used to refer to a specific instance of a Pipeline. */
	export interface WorkspaceBindingFormProperties {

		/** Name of the workspace. */
		name: FormControl<string | null | undefined>,

		/** Optional. SubPath is optionally a directory on the volume which should be used for this binding (i.e. the volume will be mounted at this sub directory). +optional */
		subPath: FormControl<string | null | undefined>,
	}
	export function CreateWorkspaceBindingFormGroup() {
		return new FormGroup<WorkspaceBindingFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			subPath: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Secret Volume Source. */
	export interface SecretVolumeSource {

		/** Name of the secret referenced by the WorkspaceBinding. */
		secretName?: string | null;

		/** Output only. Resource name of the SecretVersion. In format: projects/secrets/versions/* */
		secretVersion?: string | null;
	}

	/** Secret Volume Source. */
	export interface SecretVolumeSourceFormProperties {

		/** Name of the secret referenced by the WorkspaceBinding. */
		secretName: FormControl<string | null | undefined>,

		/** Output only. Resource name of the SecretVersion. In format: projects/secrets/versions/* */
		secretVersion: FormControl<string | null | undefined>,
	}
	export function CreateSecretVolumeSourceFormGroup() {
		return new FormGroup<SecretVolumeSourceFormProperties>({
			secretName: new FormControl<string | null | undefined>(undefined),
			secretVersion: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** VolumeClaim is a user's request for a volume. */
	export interface VolumeClaim {

		/** Volume size, e.g. 1gb. */
		storage?: string | null;
	}

	/** VolumeClaim is a user's request for a volume. */
	export interface VolumeClaimFormProperties {

		/** Volume size, e.g. 1gb. */
		storage: FormControl<string | null | undefined>,
	}
	export function CreateVolumeClaimFormGroup() {
		return new FormGroup<VolumeClaimFormProperties>({
			storage: new FormControl<string | null | undefined>(undefined),
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


	/** Represents the custom metadata of the RunWorkflow long-running operation. */
	export interface RunWorkflowCustomOperationMetadata {

		/** Output only. API version used to start the operation. */
		apiVersion?: string | null;

		/** Output only. The time the operation was created. */
		createTime?: string | null;

		/** Output only. The time the operation finished running. */
		endTime?: string | null;

		/** Output only. ID of the pipeline run created by RunWorkflow. */
		pipelineRunId?: string | null;

		/** Output only. Identifies whether the user has requested cancellation of the operation. Operations that have successfully been cancelled have Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`. */
		requestedCancellation?: boolean | null;

		/** Output only. Server-defined resource path for the target of the operation. */
		target?: string | null;

		/** Output only. Name of the verb executed by the operation. */
		verb?: string | null;
	}

	/** Represents the custom metadata of the RunWorkflow long-running operation. */
	export interface RunWorkflowCustomOperationMetadataFormProperties {

		/** Output only. API version used to start the operation. */
		apiVersion: FormControl<string | null | undefined>,

		/** Output only. The time the operation was created. */
		createTime: FormControl<string | null | undefined>,

		/** Output only. The time the operation finished running. */
		endTime: FormControl<string | null | undefined>,

		/** Output only. ID of the pipeline run created by RunWorkflow. */
		pipelineRunId: FormControl<string | null | undefined>,

		/** Output only. Identifies whether the user has requested cancellation of the operation. Operations that have successfully been cancelled have Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`. */
		requestedCancellation: FormControl<boolean | null | undefined>,

		/** Output only. Server-defined resource path for the target of the operation. */
		target: FormControl<string | null | undefined>,

		/** Output only. Name of the verb executed by the operation. */
		verb: FormControl<string | null | undefined>,
	}
	export function CreateRunWorkflowCustomOperationMetadataFormGroup() {
		return new FormGroup<RunWorkflowCustomOperationMetadataFormProperties>({
			apiVersion: new FormControl<string | null | undefined>(undefined),
			createTime: new FormControl<string | null | undefined>(undefined),
			endTime: new FormControl<string | null | undefined>(undefined),
			pipelineRunId: new FormControl<string | null | undefined>(undefined),
			requestedCancellation: new FormControl<boolean | null | undefined>(undefined),
			target: new FormControl<string | null | undefined>(undefined),
			verb: new FormControl<string | null | undefined>(undefined),
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
		 * FetchLinkableRepositories get repositories from SCM that are accessible and could be added to the connection.
		 * Get v2/{connection}:fetchLinkableRepositories
		 * @param {string} connection Required. The name of the Connection. Format: `projects/locations/connections/*`.
		 * @param {number} pageSize Number of results to return in the list. Default to 20.
		 * @param {string} pageToken Page start.
		 * @return {FetchLinkableRepositoriesResponse} Successful response
		 */
		Cloudbuild_projects_locations_connections_fetchLinkableRepositories(connection: string, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<FetchLinkableRepositoriesResponse> {
			return this.http.get<FetchLinkableRepositoriesResponse>(this.baseUri + 'v2/' + (connection == null ? '' : encodeURIComponent(connection)) + ':fetchLinkableRepositories&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Deletes a single repository.
		 * Delete v2/{name}
		 * @param {string} name Required. The name of the Repository to delete. Format: `projects/locations/connections/repositories/*`.
		 * @param {string} etag The current etag of the repository. If an etag is provided and does not match the current etag of the repository, deletion will be blocked and an ABORTED error will be returned.
		 * @param {boolean} validateOnly If set, validate the request, but do not actually post it.
		 * @return {Operation} Successful response
		 */
		Cloudbuild_projects_locations_connections_repositories_delete(name: string, etag: string | null | undefined, validateOnly: boolean | null | undefined): Observable<Operation> {
			return this.http.delete<Operation>(this.baseUri + 'v2/' + (name == null ? '' : encodeURIComponent(name)) + '&etag=' + (etag == null ? '' : encodeURIComponent(etag)) + '&validateOnly=' + validateOnly, {});
		}

		/**
		 * Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
		 * Get v2/{name}
		 * @param {string} name The name of the operation resource.
		 * @return {Operation} Successful response
		 */
		Cloudbuild_projects_locations_operations_get(name: string): Observable<Operation> {
			return this.http.get<Operation>(this.baseUri + 'v2/' + (name == null ? '' : encodeURIComponent(name)), {});
		}

		/**
		 * Updates a single connection.
		 * Patch v2/{name}
		 * @param {string} name Immutable. The resource name of the connection, in the format `projects/{project}/locations/{location}/connections/{connection_id}`.
		 * @param {boolean} allowMissing If set to true, and the connection is not found a new connection will be created. In this situation `update_mask` is ignored. The creation will succeed only if the input connection has all the necessary information (e.g a github_config with both user_oauth_token and installation_id properties).
		 * @param {string} etag The current etag of the connection. If an etag is provided and does not match the current etag of the connection, update will be blocked and an ABORTED error will be returned.
		 * @param {string} updateMask The list of fields to be updated.
		 * @return {Operation} Successful response
		 */
		Cloudbuild_projects_locations_connections_patch(name: string, allowMissing: boolean | null | undefined, etag: string | null | undefined, updateMask: string | null | undefined, requestBody: Connection): Observable<Operation> {
			return this.http.patch<Operation>(this.baseUri + 'v2/' + (name == null ? '' : encodeURIComponent(name)) + '&allowMissing=' + allowMissing + '&etag=' + (etag == null ? '' : encodeURIComponent(etag)) + '&updateMask=' + (updateMask == null ? '' : encodeURIComponent(updateMask)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists information about the supported locations for this service.
		 * Get v2/{name}/locations
		 * @param {string} name The resource that owns the locations collection, if applicable.
		 * @param {string} filter A filter to narrow down results to a preferred subset. The filtering language accepts strings like `"displayName=tokyo"`, and is documented in more detail in [AIP-160](https://google.aip.dev/160).
		 * @param {number} pageSize The maximum number of results to return. If not set, the service selects a default.
		 * @param {string} pageToken A page token received from the `next_page_token` field in the response. Send that page token to receive the subsequent page.
		 * @return {ListLocationsResponse} Successful response
		 */
		Cloudbuild_projects_locations_list(name: string, filter: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListLocationsResponse> {
			return this.http.get<ListLocationsResponse>(this.baseUri + 'v2/' + (name == null ? '' : encodeURIComponent(name)) + '/locations&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
		 * Post v2/{name}:cancel
		 * @param {string} name The name of the operation resource to be cancelled.
		 * @return {Empty} Successful response
		 */
		Cloudbuild_projects_locations_operations_cancel(name: string, requestBody: CancelOperationRequest): Observable<Empty> {
			return this.http.post<Empty>(this.baseUri + 'v2/' + (name == null ? '' : encodeURIComponent(name)) + ':cancel', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists Connections in a given project and location.
		 * Get v2/{parent}/connections
		 * @param {string} parent Required. The parent, which owns this collection of Connections. Format: `projects/locations/*`.
		 * @param {number} pageSize Number of results to return in the list.
		 * @param {string} pageToken Page start.
		 * @return {ListConnectionsResponse} Successful response
		 */
		Cloudbuild_projects_locations_connections_list(parent: string, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListConnectionsResponse> {
			return this.http.get<ListConnectionsResponse>(this.baseUri + 'v2/' + (parent == null ? '' : encodeURIComponent(parent)) + '/connections&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Creates a Connection.
		 * Post v2/{parent}/connections
		 * @param {string} parent Required. Project and location where the connection will be created. Format: `projects/locations/*`.
		 * @param {string} connectionId Required. The ID to use for the Connection, which will become the final component of the Connection's resource name. Names must be unique per-project per-location. Allows alphanumeric characters and any of -._~%!$&'()*+,;=@.
		 * @return {Operation} Successful response
		 */
		Cloudbuild_projects_locations_connections_create(parent: string, connectionId: string | null | undefined, requestBody: Connection): Observable<Operation> {
			return this.http.post<Operation>(this.baseUri + 'v2/' + (parent == null ? '' : encodeURIComponent(parent)) + '/connections&connectionId=' + (connectionId == null ? '' : encodeURIComponent(connectionId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * ProcessWebhook is called by the external SCM for notifying of events.
		 * Post v2/{parent}/connections:processWebhook
		 * @param {string} parent Required. Project and location where the webhook will be received. Format: `projects/locations/*`.
		 * @param {string} webhookKey Arbitrary additional key to find the maching repository for a webhook event if needed.
		 * @return {Empty} Successful response
		 */
		Cloudbuild_projects_locations_connections_processWebhook(parent: string, webhookKey: string | null | undefined, requestBody: HttpBody): Observable<Empty> {
			return this.http.post<Empty>(this.baseUri + 'v2/' + (parent == null ? '' : encodeURIComponent(parent)) + '/connections:processWebhook&webhookKey=' + (webhookKey == null ? '' : encodeURIComponent(webhookKey)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists Repositories in a given connection.
		 * Get v2/{parent}/repositories
		 * @param {string} parent Required. The parent, which owns this collection of Repositories. Format: `projects/locations/connections/*`.
		 * @param {string} filter A filter expression that filters resources listed in the response. Expressions must follow API improvement proposal [AIP-160](https://google.aip.dev/160). e.g. `remote_uri:"https://github.com*"`.
		 * @param {number} pageSize Number of results to return in the list.
		 * @param {string} pageToken Page start.
		 * @return {ListRepositoriesResponse} Successful response
		 */
		Cloudbuild_projects_locations_connections_repositories_list(parent: string, filter: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListRepositoriesResponse> {
			return this.http.get<ListRepositoriesResponse>(this.baseUri + 'v2/' + (parent == null ? '' : encodeURIComponent(parent)) + '/repositories&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Creates a Repository.
		 * Post v2/{parent}/repositories
		 * @param {string} parent Required. The connection to contain the repository. If the request is part of a BatchCreateRepositoriesRequest, this field should be empty or match the parent specified there.
		 * @param {string} repositoryId Required. The ID to use for the repository, which will become the final component of the repository's resource name. This ID should be unique in the connection. Allows alphanumeric characters and any of -._~%!$&'()*+,;=@.
		 * @return {Operation} Successful response
		 */
		Cloudbuild_projects_locations_connections_repositories_create(parent: string, repositoryId: string | null | undefined, requestBody: Repository): Observable<Operation> {
			return this.http.post<Operation>(this.baseUri + 'v2/' + (parent == null ? '' : encodeURIComponent(parent)) + '/repositories&repositoryId=' + (repositoryId == null ? '' : encodeURIComponent(repositoryId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Creates multiple repositories inside a connection.
		 * Post v2/{parent}/repositories:batchCreate
		 * @param {string} parent Required. The connection to contain all the repositories being created. Format: projects/locations/connections/* The parent field in the CreateRepositoryRequest messages must either be empty or match this field.
		 * @return {Operation} Successful response
		 */
		Cloudbuild_projects_locations_connections_repositories_batchCreate(parent: string, requestBody: BatchCreateRepositoriesRequest): Observable<Operation> {
			return this.http.post<Operation>(this.baseUri + 'v2/' + (parent == null ? '' : encodeURIComponent(parent)) + '/repositories:batchCreate', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Fetches read token of a given repository.
		 * Post v2/{repository}:accessReadToken
		 * @param {string} repository Required. The resource name of the repository in the format `projects/locations/connections/repositories/*`.
		 * @return {FetchReadTokenResponse} Successful response
		 */
		Cloudbuild_projects_locations_connections_repositories_accessReadToken(repository: string, requestBody: FetchReadTokenRequest): Observable<FetchReadTokenResponse> {
			return this.http.post<FetchReadTokenResponse>(this.baseUri + 'v2/' + (repository == null ? '' : encodeURIComponent(repository)) + ':accessReadToken', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Fetches read/write token of a given repository.
		 * Post v2/{repository}:accessReadWriteToken
		 * @param {string} repository Required. The resource name of the repository in the format `projects/locations/connections/repositories/*`.
		 * @return {FetchReadWriteTokenResponse} Successful response
		 */
		Cloudbuild_projects_locations_connections_repositories_accessReadWriteToken(repository: string, requestBody: FetchReadWriteTokenRequest): Observable<FetchReadWriteTokenResponse> {
			return this.http.post<FetchReadWriteTokenResponse>(this.baseUri + 'v2/' + (repository == null ? '' : encodeURIComponent(repository)) + ':accessReadWriteToken', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Fetch the list of branches or tags for a given repository.
		 * Get v2/{repository}:fetchGitRefs
		 * @param {string} repository Required. The resource name of the repository in the format `projects/locations/connections/repositories/*`.
		 * @param {number} pageSize Optional. Number of results to return in the list. Default to 100.
		 * @param {string} pageToken Optional. Page start.
		 * @param {Cloudbuild_projects_locations_connections_repositories_fetchGitRefsRefType} refType Type of refs to fetch
		 * @return {FetchGitRefsResponse} Successful response
		 */
		Cloudbuild_projects_locations_connections_repositories_fetchGitRefs(repository: string, pageSize: number | null | undefined, pageToken: string | null | undefined, refType: Cloudbuild_projects_locations_connections_repositories_fetchGitRefsRefType | null | undefined): Observable<FetchGitRefsResponse> {
			return this.http.get<FetchGitRefsResponse>(this.baseUri + 'v2/' + (repository == null ? '' : encodeURIComponent(repository)) + ':fetchGitRefs&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '&refType=' + refType, {});
		}

		/**
		 * Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
		 * Get v2/{resource}:getIamPolicy
		 * @param {string} resource REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
		 * @param {number} options_requestedPolicyVersion Optional. The maximum policy version that will be used to format the policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset. The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies).
		 * @return {Policy} Successful response
		 */
		Cloudbuild_projects_locations_connections_getIamPolicy(resource: string, options_requestedPolicyVersion: number | null | undefined): Observable<Policy> {
			return this.http.get<Policy>(this.baseUri + 'v2/' + (resource == null ? '' : encodeURIComponent(resource)) + ':getIamPolicy&options_requestedPolicyVersion=' + options_requestedPolicyVersion, {});
		}

		/**
		 * Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
		 * Post v2/{resource}:setIamPolicy
		 * @param {string} resource REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
		 * @return {Policy} Successful response
		 */
		Cloudbuild_projects_locations_connections_setIamPolicy(resource: string, requestBody: SetIamPolicyRequest): Observable<Policy> {
			return this.http.post<Policy>(this.baseUri + 'v2/' + (resource == null ? '' : encodeURIComponent(resource)) + ':setIamPolicy', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
		 * Post v2/{resource}:testIamPermissions
		 * @param {string} resource REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
		 * @return {TestIamPermissionsResponse} Successful response
		 */
		Cloudbuild_projects_locations_connections_testIamPermissions(resource: string, requestBody: TestIamPermissionsRequest): Observable<TestIamPermissionsResponse> {
			return this.http.post<TestIamPermissionsResponse>(this.baseUri + 'v2/' + (resource == null ? '' : encodeURIComponent(resource)) + ':testIamPermissions', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

	export enum Cloudbuild_projects_locations_connections_repositories_fetchGitRefsRefType { REF_TYPE_UNSPECIFIED = 'REF_TYPE_UNSPECIFIED', TAG = 'TAG', BRANCH = 'BRANCH' }

}

