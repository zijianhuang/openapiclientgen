import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** Represents an assertion upon a SQL query which is required return zero rows. */
	export interface Assertion {

		/** A list of actions that this action depends on. */
		dependencyTargets?: Array<Target>;

		/** Whether this action is disabled (i.e. should not be run). */
		disabled?: boolean | null;

		/** Represents an action identifier. If the action writes output, the output will be written to the referenced database object. */
		parentAction?: Target;

		/** Describes a relation and its columns. */
		relationDescriptor?: RelationDescriptor;

		/** The SELECT query which must return zero rows in order for this assertion to succeed. */
		selectQuery?: string | null;

		/** Arbitrary, user-defined tags on this action. */
		tags?: Array<string>;
	}

	/** Represents an assertion upon a SQL query which is required return zero rows. */
	export interface AssertionFormProperties {

		/** Whether this action is disabled (i.e. should not be run). */
		disabled: FormControl<boolean | null | undefined>,

		/** The SELECT query which must return zero rows in order for this assertion to succeed. */
		selectQuery: FormControl<string | null | undefined>,
	}
	export function CreateAssertionFormGroup() {
		return new FormGroup<AssertionFormProperties>({
			disabled: new FormControl<boolean | null | undefined>(undefined),
			selectQuery: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents an action identifier. If the action writes output, the output will be written to the referenced database object. */
	export interface Target {

		/** The action's database (Google Cloud project ID) . */
		database?: string | null;

		/** The action's name, within `database` and `schema`. */
		name?: string | null;

		/** The action's schema (BigQuery dataset ID), within `database`. */
		schema?: string | null;
	}

	/** Represents an action identifier. If the action writes output, the output will be written to the referenced database object. */
	export interface TargetFormProperties {

		/** The action's database (Google Cloud project ID) . */
		database: FormControl<string | null | undefined>,

		/** The action's name, within `database` and `schema`. */
		name: FormControl<string | null | undefined>,

		/** The action's schema (BigQuery dataset ID), within `database`. */
		schema: FormControl<string | null | undefined>,
	}
	export function CreateTargetFormGroup() {
		return new FormGroup<TargetFormProperties>({
			database: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			schema: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Describes a relation and its columns. */
	export interface RelationDescriptor {

		/** A set of BigQuery labels that should be applied to the relation. */
		bigqueryLabels?: {[id: string]: string };

		/** A list of descriptions of columns within the relation. */
		columns?: Array<ColumnDescriptor>;

		/** A text description of the relation. */
		description?: string | null;
	}

	/** Describes a relation and its columns. */
	export interface RelationDescriptorFormProperties {

		/** A set of BigQuery labels that should be applied to the relation. */
		bigqueryLabels: FormControl<{[id: string]: string } | null | undefined>,

		/** A text description of the relation. */
		description: FormControl<string | null | undefined>,
	}
	export function CreateRelationDescriptorFormGroup() {
		return new FormGroup<RelationDescriptorFormProperties>({
			bigqueryLabels: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Describes a column. */
	export interface ColumnDescriptor {

		/** A list of BigQuery policy tags that will be applied to the column. */
		bigqueryPolicyTags?: Array<string>;

		/** A textual description of the column. */
		description?: string | null;

		/** The identifier for the column. Each entry in `path` represents one level of nesting. */
		path?: Array<string>;
	}

	/** Describes a column. */
	export interface ColumnDescriptorFormProperties {

		/** A textual description of the column. */
		description: FormControl<string | null | undefined>,
	}
	export function CreateColumnDescriptorFormGroup() {
		return new FormGroup<ColumnDescriptorFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents a workflow action that will run against BigQuery. */
	export interface BigQueryAction {

		/** Output only. The generated BigQuery SQL script that will be executed. */
		sqlScript?: string | null;
	}

	/** Represents a workflow action that will run against BigQuery. */
	export interface BigQueryActionFormProperties {

		/** Output only. The generated BigQuery SQL script that will be executed. */
		sqlScript: FormControl<string | null | undefined>,
	}
	export function CreateBigQueryActionFormGroup() {
		return new FormGroup<BigQueryActionFormProperties>({
			sqlScript: new FormControl<string | null | undefined>(undefined),
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


	/** `CancelWorkflowInvocation` request message. */
	export interface CancelWorkflowInvocationRequest {
	}

	/** `CancelWorkflowInvocation` request message. */
	export interface CancelWorkflowInvocationRequestFormProperties {
	}
	export function CreateCancelWorkflowInvocationRequestFormGroup() {
		return new FormGroup<CancelWorkflowInvocationRequestFormProperties>({
		});

	}


	/** Configures various aspects of Dataform code compilation. */
	export interface CodeCompilationConfig {

		/** Optional. The default schema (BigQuery dataset ID) for assertions. */
		assertionSchema?: string | null;

		/** Optional. The suffix that should be appended to all database (Google Cloud project ID) names. */
		databaseSuffix?: string | null;

		/** Optional. The default database (Google Cloud project ID). */
		defaultDatabase?: string | null;

		/** Optional. The default BigQuery location to use. Defaults to "US". See the BigQuery docs for a full list of locations: https://cloud.google.com/bigquery/docs/locations. */
		defaultLocation?: string | null;

		/** Optional. The default schema (BigQuery dataset ID). */
		defaultSchema?: string | null;

		/** Optional. The suffix that should be appended to all schema (BigQuery dataset ID) names. */
		schemaSuffix?: string | null;

		/** Optional. The prefix that should be prepended to all table names. */
		tablePrefix?: string | null;

		/** Optional. User-defined variables that are made available to project code during compilation. */
		vars?: {[id: string]: string };
	}

	/** Configures various aspects of Dataform code compilation. */
	export interface CodeCompilationConfigFormProperties {

		/** Optional. The default schema (BigQuery dataset ID) for assertions. */
		assertionSchema: FormControl<string | null | undefined>,

		/** Optional. The suffix that should be appended to all database (Google Cloud project ID) names. */
		databaseSuffix: FormControl<string | null | undefined>,

		/** Optional. The default database (Google Cloud project ID). */
		defaultDatabase: FormControl<string | null | undefined>,

		/** Optional. The default BigQuery location to use. Defaults to "US". See the BigQuery docs for a full list of locations: https://cloud.google.com/bigquery/docs/locations. */
		defaultLocation: FormControl<string | null | undefined>,

		/** Optional. The default schema (BigQuery dataset ID). */
		defaultSchema: FormControl<string | null | undefined>,

		/** Optional. The suffix that should be appended to all schema (BigQuery dataset ID) names. */
		schemaSuffix: FormControl<string | null | undefined>,

		/** Optional. The prefix that should be prepended to all table names. */
		tablePrefix: FormControl<string | null | undefined>,

		/** Optional. User-defined variables that are made available to project code during compilation. */
		vars: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateCodeCompilationConfigFormGroup() {
		return new FormGroup<CodeCompilationConfigFormProperties>({
			assertionSchema: new FormControl<string | null | undefined>(undefined),
			databaseSuffix: new FormControl<string | null | undefined>(undefined),
			defaultDatabase: new FormControl<string | null | undefined>(undefined),
			defaultLocation: new FormControl<string | null | undefined>(undefined),
			defaultSchema: new FormControl<string | null | undefined>(undefined),
			schemaSuffix: new FormControl<string | null | undefined>(undefined),
			tablePrefix: new FormControl<string | null | undefined>(undefined),
			vars: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}


	/** Represents the author of a Git commit. */
	export interface CommitAuthor {

		/** Required. The commit author's email address. */
		emailAddress?: string | null;

		/** Required. The commit author's name. */
		name?: string | null;
	}

	/** Represents the author of a Git commit. */
	export interface CommitAuthorFormProperties {

		/** Required. The commit author's email address. */
		emailAddress: FormControl<string | null | undefined>,

		/** Required. The commit author's name. */
		name: FormControl<string | null | undefined>,
	}
	export function CreateCommitAuthorFormGroup() {
		return new FormGroup<CommitAuthorFormProperties>({
			emailAddress: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents a single commit log. */
	export interface CommitLogEntry {

		/** Represents the author of a Git commit. */
		author?: CommitAuthor;

		/** The commit message for this commit log entry. */
		commitMessage?: string | null;

		/** The commit SHA for this commit log entry. */
		commitSha?: string | null;

		/** Commit timestamp. */
		commitTime?: string | null;
	}

	/** Represents a single commit log. */
	export interface CommitLogEntryFormProperties {

		/** The commit message for this commit log entry. */
		commitMessage: FormControl<string | null | undefined>,

		/** The commit SHA for this commit log entry. */
		commitSha: FormControl<string | null | undefined>,

		/** Commit timestamp. */
		commitTime: FormControl<string | null | undefined>,
	}
	export function CreateCommitLogEntryFormGroup() {
		return new FormGroup<CommitLogEntryFormProperties>({
			commitMessage: new FormControl<string | null | undefined>(undefined),
			commitSha: new FormControl<string | null | undefined>(undefined),
			commitTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents a Dataform Git commit. */
	export interface CommitMetadata {

		/** Represents the author of a Git commit. */
		author?: CommitAuthor;

		/** Optional. The commit's message. */
		commitMessage?: string | null;
	}

	/** Represents a Dataform Git commit. */
	export interface CommitMetadataFormProperties {

		/** Optional. The commit's message. */
		commitMessage: FormControl<string | null | undefined>,
	}
	export function CreateCommitMetadataFormGroup() {
		return new FormGroup<CommitMetadataFormProperties>({
			commitMessage: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** `CommitRepositoryChanges` request message. */
	export interface CommitRepositoryChangesRequest {

		/** Represents a Dataform Git commit. */
		commitMetadata?: CommitMetadata;

		/** A map to the path of the file to the operation. The path is the full file path including filename, from repository root. */
		fileOperations?: {[id: string]: FileOperation };

		/** Optional. The commit SHA which must be the repository's current HEAD before applying this commit; otherwise this request will fail. If unset, no validation on the current HEAD commit SHA is performed. */
		requiredHeadCommitSha?: string | null;
	}

	/** `CommitRepositoryChanges` request message. */
	export interface CommitRepositoryChangesRequestFormProperties {

		/** A map to the path of the file to the operation. The path is the full file path including filename, from repository root. */
		fileOperations: FormControl<{[id: string]: FileOperation } | null | undefined>,

		/** Optional. The commit SHA which must be the repository's current HEAD before applying this commit; otherwise this request will fail. If unset, no validation on the current HEAD commit SHA is performed. */
		requiredHeadCommitSha: FormControl<string | null | undefined>,
	}
	export function CreateCommitRepositoryChangesRequestFormGroup() {
		return new FormGroup<CommitRepositoryChangesRequestFormProperties>({
			fileOperations: new FormControl<{[id: string]: FileOperation } | null | undefined>(undefined),
			requiredHeadCommitSha: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents a single file operation to the repository. */
	export interface FileOperation {

		/** Represents the delete file operation. */
		deleteFile?: DeleteFile;

		/** Represents the write file operation (for files added or modified). */
		writeFile?: WriteFile;
	}

	/** Represents a single file operation to the repository. */
	export interface FileOperationFormProperties {
	}
	export function CreateFileOperationFormGroup() {
		return new FormGroup<FileOperationFormProperties>({
		});

	}


	/** Represents the delete file operation. */
	export interface DeleteFile {
	}

	/** Represents the delete file operation. */
	export interface DeleteFileFormProperties {
	}
	export function CreateDeleteFileFormGroup() {
		return new FormGroup<DeleteFileFormProperties>({
		});

	}


	/** Represents the write file operation (for files added or modified). */
	export interface WriteFile {

		/** The file's contents. */
		contents?: string | null;
	}

	/** Represents the write file operation (for files added or modified). */
	export interface WriteFileFormProperties {

		/** The file's contents. */
		contents: FormControl<string | null | undefined>,
	}
	export function CreateWriteFileFormGroup() {
		return new FormGroup<WriteFileFormProperties>({
			contents: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** `CommitWorkspaceChanges` request message. */
	export interface CommitWorkspaceChangesRequest {

		/** Represents the author of a Git commit. */
		author?: CommitAuthor;

		/** Optional. The commit's message. */
		commitMessage?: string | null;

		/** Optional. Full file paths to commit including filename, rooted at workspace root. If left empty, all files will be committed. */
		paths?: Array<string>;
	}

	/** `CommitWorkspaceChanges` request message. */
	export interface CommitWorkspaceChangesRequestFormProperties {

		/** Optional. The commit's message. */
		commitMessage: FormControl<string | null | undefined>,
	}
	export function CreateCommitWorkspaceChangesRequestFormGroup() {
		return new FormGroup<CommitWorkspaceChangesRequestFormProperties>({
			commitMessage: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An error encountered when attempting to compile a Dataform project. */
	export interface CompilationError {

		/** Represents an action identifier. If the action writes output, the output will be written to the referenced database object. */
		actionTarget?: Target;

		/** Output only. The error's top level message. */
		message?: string | null;

		/** Output only. The path of the file where this error occurred, if available, relative to the project root. */
		path?: string | null;

		/** Output only. The error's full stack trace. */
		stack?: string | null;
	}

	/** An error encountered when attempting to compile a Dataform project. */
	export interface CompilationErrorFormProperties {

		/** Output only. The error's top level message. */
		message: FormControl<string | null | undefined>,

		/** Output only. The path of the file where this error occurred, if available, relative to the project root. */
		path: FormControl<string | null | undefined>,

		/** Output only. The error's full stack trace. */
		stack: FormControl<string | null | undefined>,
	}
	export function CreateCompilationErrorFormGroup() {
		return new FormGroup<CompilationErrorFormProperties>({
			message: new FormControl<string | null | undefined>(undefined),
			path: new FormControl<string | null | undefined>(undefined),
			stack: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents the result of compiling a Dataform project. */
	export interface CompilationResult {

		/** Configures various aspects of Dataform code compilation. */
		codeCompilationConfig?: CodeCompilationConfig;

		/** Output only. Errors encountered during project compilation. */
		compilationErrors?: Array<CompilationError>;

		/** Output only. The version of `@dataform/core` that was used for compilation. */
		dataformCoreVersion?: string | null;

		/** Immutable. Git commit/tag/branch name at which the repository should be compiled. Must exist in the remote repository. Examples: - a commit SHA: `12ade345` - a tag: `tag1` - a branch name: `branch1` */
		gitCommitish?: string | null;

		/** Output only. The compilation result's name. */
		name?: string | null;

		/** Immutable. The name of the release config to compile. The release config's 'current_compilation_result' field will be updated to this compilation result. Must be in the format `projects/locations/repositories/releaseConfigs/*`. */
		releaseConfig?: string | null;

		/** Output only. The fully resolved Git commit SHA of the code that was compiled. Not set for compilation results whose source is a workspace. */
		resolvedGitCommitSha?: string | null;

		/** Immutable. The name of the workspace to compile. Must be in the format `projects/locations/repositories/workspaces/*`. */
		workspace?: string | null;
	}

	/** Represents the result of compiling a Dataform project. */
	export interface CompilationResultFormProperties {

		/** Output only. The version of `@dataform/core` that was used for compilation. */
		dataformCoreVersion: FormControl<string | null | undefined>,

		/** Immutable. Git commit/tag/branch name at which the repository should be compiled. Must exist in the remote repository. Examples: - a commit SHA: `12ade345` - a tag: `tag1` - a branch name: `branch1` */
		gitCommitish: FormControl<string | null | undefined>,

		/** Output only. The compilation result's name. */
		name: FormControl<string | null | undefined>,

		/** Immutable. The name of the release config to compile. The release config's 'current_compilation_result' field will be updated to this compilation result. Must be in the format `projects/locations/repositories/releaseConfigs/*`. */
		releaseConfig: FormControl<string | null | undefined>,

		/** Output only. The fully resolved Git commit SHA of the code that was compiled. Not set for compilation results whose source is a workspace. */
		resolvedGitCommitSha: FormControl<string | null | undefined>,

		/** Immutable. The name of the workspace to compile. Must be in the format `projects/locations/repositories/workspaces/*`. */
		workspace: FormControl<string | null | undefined>,
	}
	export function CreateCompilationResultFormGroup() {
		return new FormGroup<CompilationResultFormProperties>({
			dataformCoreVersion: new FormControl<string | null | undefined>(undefined),
			gitCommitish: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			releaseConfig: new FormControl<string | null | undefined>(undefined),
			resolvedGitCommitSha: new FormControl<string | null | undefined>(undefined),
			workspace: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents a single Dataform action in a compilation result. */
	export interface CompilationResultAction {

		/** Represents an assertion upon a SQL query which is required return zero rows. */
		assertion?: Assertion;

		/** Represents an action identifier. If the action writes output, the output will be written to the referenced database object. */
		canonicalTarget?: Target;

		/** Represents a relation which is not managed by Dataform but which may be referenced by Dataform actions. */
		declaration?: Declaration;

		/** The full path including filename in which this action is located, relative to the workspace root. */
		filePath?: string | null;

		/** Represents a list of arbitrary database operations. */
		operations?: Operations;

		/** Represents a database relation. */
		relation?: Relation;

		/** Represents an action identifier. If the action writes output, the output will be written to the referenced database object. */
		target?: Target;
	}

	/** Represents a single Dataform action in a compilation result. */
	export interface CompilationResultActionFormProperties {

		/** The full path including filename in which this action is located, relative to the workspace root. */
		filePath: FormControl<string | null | undefined>,
	}
	export function CreateCompilationResultActionFormGroup() {
		return new FormGroup<CompilationResultActionFormProperties>({
			filePath: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents a relation which is not managed by Dataform but which may be referenced by Dataform actions. */
	export interface Declaration {

		/** Describes a relation and its columns. */
		relationDescriptor?: RelationDescriptor;
	}

	/** Represents a relation which is not managed by Dataform but which may be referenced by Dataform actions. */
	export interface DeclarationFormProperties {
	}
	export function CreateDeclarationFormGroup() {
		return new FormGroup<DeclarationFormProperties>({
		});

	}


	/** Represents a list of arbitrary database operations. */
	export interface Operations {

		/** A list of actions that this action depends on. */
		dependencyTargets?: Array<Target>;

		/** Whether this action is disabled (i.e. should not be run). */
		disabled?: boolean | null;

		/** Whether these operations produce an output relation. */
		hasOutput?: boolean | null;

		/** A list of arbitrary SQL statements that will be executed without alteration. */
		queries?: Array<string>;

		/** Describes a relation and its columns. */
		relationDescriptor?: RelationDescriptor;

		/** Arbitrary, user-defined tags on this action. */
		tags?: Array<string>;
	}

	/** Represents a list of arbitrary database operations. */
	export interface OperationsFormProperties {

		/** Whether this action is disabled (i.e. should not be run). */
		disabled: FormControl<boolean | null | undefined>,

		/** Whether these operations produce an output relation. */
		hasOutput: FormControl<boolean | null | undefined>,
	}
	export function CreateOperationsFormGroup() {
		return new FormGroup<OperationsFormProperties>({
			disabled: new FormControl<boolean | null | undefined>(undefined),
			hasOutput: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Represents a database relation. */
	export interface Relation {

		/** Additional options that will be provided as key/value pairs into the options clause of a create table/view statement. See https://cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language for more information on which options are supported. */
		additionalOptions?: {[id: string]: string };

		/** A list of columns or SQL expressions used to cluster the table. */
		clusterExpressions?: Array<string>;

		/** A list of actions that this action depends on. */
		dependencyTargets?: Array<Target>;

		/** Whether this action is disabled (i.e. should not be run). */
		disabled?: boolean | null;

		/** Contains settings for relations of type `INCREMENTAL_TABLE`. */
		incrementalTableConfig?: IncrementalTableConfig;

		/** Sets the partition expiration in days. */
		partitionExpirationDays?: number | null;

		/** The SQL expression used to partition the relation. */
		partitionExpression?: string | null;

		/** SQL statements to be executed after creating the relation. */
		postOperations?: Array<string>;

		/** SQL statements to be executed before creating the relation. */
		preOperations?: Array<string>;

		/** Describes a relation and its columns. */
		relationDescriptor?: RelationDescriptor;

		/** The type of this relation. */
		relationType?: RelationRelationType | null;

		/** Specifies whether queries on this table must include a predicate filter that filters on the partitioning column. */
		requirePartitionFilter?: boolean | null;

		/** The SELECT query which returns rows which this relation should contain. */
		selectQuery?: string | null;

		/** Arbitrary, user-defined tags on this action. */
		tags?: Array<string>;
	}

	/** Represents a database relation. */
	export interface RelationFormProperties {

		/** Additional options that will be provided as key/value pairs into the options clause of a create table/view statement. See https://cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language for more information on which options are supported. */
		additionalOptions: FormControl<{[id: string]: string } | null | undefined>,

		/** Whether this action is disabled (i.e. should not be run). */
		disabled: FormControl<boolean | null | undefined>,

		/** Sets the partition expiration in days. */
		partitionExpirationDays: FormControl<number | null | undefined>,

		/** The SQL expression used to partition the relation. */
		partitionExpression: FormControl<string | null | undefined>,

		/** The type of this relation. */
		relationType: FormControl<RelationRelationType | null | undefined>,

		/** Specifies whether queries on this table must include a predicate filter that filters on the partitioning column. */
		requirePartitionFilter: FormControl<boolean | null | undefined>,

		/** The SELECT query which returns rows which this relation should contain. */
		selectQuery: FormControl<string | null | undefined>,
	}
	export function CreateRelationFormGroup() {
		return new FormGroup<RelationFormProperties>({
			additionalOptions: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			disabled: new FormControl<boolean | null | undefined>(undefined),
			partitionExpirationDays: new FormControl<number | null | undefined>(undefined),
			partitionExpression: new FormControl<string | null | undefined>(undefined),
			relationType: new FormControl<RelationRelationType | null | undefined>(undefined),
			requirePartitionFilter: new FormControl<boolean | null | undefined>(undefined),
			selectQuery: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains settings for relations of type `INCREMENTAL_TABLE`. */
	export interface IncrementalTableConfig {

		/** SQL statements to be executed after inserting new rows into the relation. */
		incrementalPostOperations?: Array<string>;

		/** SQL statements to be executed before inserting new rows into the relation. */
		incrementalPreOperations?: Array<string>;

		/** The SELECT query which returns rows which should be inserted into the relation if it already exists and is not being refreshed. */
		incrementalSelectQuery?: string | null;

		/** Whether this table should be protected from being refreshed. */
		refreshDisabled?: boolean | null;

		/** A set of columns or SQL expressions used to define row uniqueness. If any duplicates are discovered (as defined by `unique_key_parts`), only the newly selected rows (as defined by `incremental_select_query`) will be included in the relation. */
		uniqueKeyParts?: Array<string>;

		/** A SQL expression conditional used to limit the set of existing rows considered for a merge operation (see `unique_key_parts` for more information). */
		updatePartitionFilter?: string | null;
	}

	/** Contains settings for relations of type `INCREMENTAL_TABLE`. */
	export interface IncrementalTableConfigFormProperties {

		/** The SELECT query which returns rows which should be inserted into the relation if it already exists and is not being refreshed. */
		incrementalSelectQuery: FormControl<string | null | undefined>,

		/** Whether this table should be protected from being refreshed. */
		refreshDisabled: FormControl<boolean | null | undefined>,

		/** A SQL expression conditional used to limit the set of existing rows considered for a merge operation (see `unique_key_parts` for more information). */
		updatePartitionFilter: FormControl<string | null | undefined>,
	}
	export function CreateIncrementalTableConfigFormGroup() {
		return new FormGroup<IncrementalTableConfigFormProperties>({
			incrementalSelectQuery: new FormControl<string | null | undefined>(undefined),
			refreshDisabled: new FormControl<boolean | null | undefined>(undefined),
			updatePartitionFilter: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum RelationRelationType { RELATION_TYPE_UNSPECIFIED = 0, TABLE = 1, VIEW = 2, INCREMENTAL_TABLE = 3, MATERIALIZED_VIEW = 4 }


	/** `ComputeRepositoryAccessTokenStatus` response message. */
	export interface ComputeRepositoryAccessTokenStatusResponse {

		/** Indicates the status of the Git access token. */
		tokenStatus?: ComputeRepositoryAccessTokenStatusResponseTokenStatus | null;
	}

	/** `ComputeRepositoryAccessTokenStatus` response message. */
	export interface ComputeRepositoryAccessTokenStatusResponseFormProperties {

		/** Indicates the status of the Git access token. */
		tokenStatus: FormControl<ComputeRepositoryAccessTokenStatusResponseTokenStatus | null | undefined>,
	}
	export function CreateComputeRepositoryAccessTokenStatusResponseFormGroup() {
		return new FormGroup<ComputeRepositoryAccessTokenStatusResponseFormProperties>({
			tokenStatus: new FormControl<ComputeRepositoryAccessTokenStatusResponseTokenStatus | null | undefined>(undefined),
		});

	}

	export enum ComputeRepositoryAccessTokenStatusResponseTokenStatus { TOKEN_STATUS_UNSPECIFIED = 0, NOT_FOUND = 1, INVALID = 2, VALID = 3 }


	/** Represents a single entry in a directory. */
	export interface DirectoryEntry {

		/** A child directory in the directory. */
		directory?: string | null;

		/** A file in the directory. */
		file?: string | null;
	}

	/** Represents a single entry in a directory. */
	export interface DirectoryEntryFormProperties {

		/** A child directory in the directory. */
		directory: FormControl<string | null | undefined>,

		/** A file in the directory. */
		file: FormControl<string | null | undefined>,
	}
	export function CreateDirectoryEntryFormGroup() {
		return new FormGroup<DirectoryEntryFormProperties>({
			directory: new FormControl<string | null | undefined>(undefined),
			file: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Client-facing representation of a directory entry in search results. */
	export interface DirectorySearchResult {

		/** File system path relative to the workspace root. */
		path?: string | null;
	}

	/** Client-facing representation of a directory entry in search results. */
	export interface DirectorySearchResultFormProperties {

		/** File system path relative to the workspace root. */
		path: FormControl<string | null | undefined>,
	}
	export function CreateDirectorySearchResultFormGroup() {
		return new FormGroup<DirectorySearchResultFormProperties>({
			path: new FormControl<string | null | undefined>(undefined),
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


	/** `FetchFileDiff` response message. */
	export interface FetchFileDiffResponse {

		/** The raw formatted Git diff for the file. */
		formattedDiff?: string | null;
	}

	/** `FetchFileDiff` response message. */
	export interface FetchFileDiffResponseFormProperties {

		/** The raw formatted Git diff for the file. */
		formattedDiff: FormControl<string | null | undefined>,
	}
	export function CreateFetchFileDiffResponseFormGroup() {
		return new FormGroup<FetchFileDiffResponseFormProperties>({
			formattedDiff: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** `FetchFileGitStatuses` response message. */
	export interface FetchFileGitStatusesResponse {

		/** A list of all files which have uncommitted Git changes. There will only be a single entry for any given file. */
		uncommittedFileChanges?: Array<UncommittedFileChange>;
	}

	/** `FetchFileGitStatuses` response message. */
	export interface FetchFileGitStatusesResponseFormProperties {
	}
	export function CreateFetchFileGitStatusesResponseFormGroup() {
		return new FormGroup<FetchFileGitStatusesResponseFormProperties>({
		});

	}


	/** Represents the Git state of a file with uncommitted changes. */
	export interface UncommittedFileChange {

		/** The file's full path including filename, relative to the workspace root. */
		path?: string | null;

		/** Indicates the status of the file. */
		state?: UncommittedFileChangeState | null;
	}

	/** Represents the Git state of a file with uncommitted changes. */
	export interface UncommittedFileChangeFormProperties {

		/** The file's full path including filename, relative to the workspace root. */
		path: FormControl<string | null | undefined>,

		/** Indicates the status of the file. */
		state: FormControl<UncommittedFileChangeState | null | undefined>,
	}
	export function CreateUncommittedFileChangeFormGroup() {
		return new FormGroup<UncommittedFileChangeFormProperties>({
			path: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<UncommittedFileChangeState | null | undefined>(undefined),
		});

	}

	export enum UncommittedFileChangeState { STATE_UNSPECIFIED = 0, ADDED = 1, DELETED = 2, MODIFIED = 3, HAS_CONFLICTS = 4 }


	/** `FetchGitAheadBehind` response message. */
	export interface FetchGitAheadBehindResponse {

		/** The number of commits in the remote branch that are not in the workspace. */
		commitsAhead?: number | null;

		/** The number of commits in the workspace that are not in the remote branch. */
		commitsBehind?: number | null;
	}

	/** `FetchGitAheadBehind` response message. */
	export interface FetchGitAheadBehindResponseFormProperties {

		/** The number of commits in the remote branch that are not in the workspace. */
		commitsAhead: FormControl<number | null | undefined>,

		/** The number of commits in the workspace that are not in the remote branch. */
		commitsBehind: FormControl<number | null | undefined>,
	}
	export function CreateFetchGitAheadBehindResponseFormGroup() {
		return new FormGroup<FetchGitAheadBehindResponseFormProperties>({
			commitsAhead: new FormControl<number | null | undefined>(undefined),
			commitsBehind: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** `FetchRemoteBranches` response message. */
	export interface FetchRemoteBranchesResponse {

		/** The remote repository's branch names. */
		branches?: Array<string>;
	}

	/** `FetchRemoteBranches` response message. */
	export interface FetchRemoteBranchesResponseFormProperties {
	}
	export function CreateFetchRemoteBranchesResponseFormGroup() {
		return new FormGroup<FetchRemoteBranchesResponseFormProperties>({
		});

	}


	/** `FetchRepositoryHistory` response message. */
	export interface FetchRepositoryHistoryResponse {

		/** A list of commit logs, ordered by 'git log' default order. */
		commits?: Array<CommitLogEntry>;

		/** A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
		nextPageToken?: string | null;
	}

	/** `FetchRepositoryHistory` response message. */
	export interface FetchRepositoryHistoryResponseFormProperties {

		/** A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateFetchRepositoryHistoryResponseFormGroup() {
		return new FormGroup<FetchRepositoryHistoryResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Client-facing representation of a file entry in search results. */
	export interface FileSearchResult {

		/** File system path relative to the workspace root. */
		path?: string | null;
	}

	/** Client-facing representation of a file entry in search results. */
	export interface FileSearchResultFormProperties {

		/** File system path relative to the workspace root. */
		path: FormControl<string | null | undefined>,
	}
	export function CreateFileSearchResultFormGroup() {
		return new FormGroup<FileSearchResultFormProperties>({
			path: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Controls Git remote configuration for a repository. */
	export interface GitRemoteSettings {

		/** Optional. The name of the Secret Manager secret version to use as an authentication token for Git operations. Must be in the format `projects/secrets/versions/*`. */
		authenticationTokenSecretVersion?: string | null;

		/** Required. The Git remote's default branch name. */
		defaultBranch?: string | null;

		/** Configures fields for performing SSH authentication. */
		sshAuthenticationConfig?: SshAuthenticationConfig;

		/** Output only. Deprecated: The field does not contain any token status information. Instead use https://cloud.google.com/dataform/reference/rest/v1beta1/projects.locations.repositories/computeAccessTokenStatus */
		tokenStatus?: ComputeRepositoryAccessTokenStatusResponseTokenStatus | null;

		/** Required. The Git remote's URL. */
		url?: string | null;
	}

	/** Controls Git remote configuration for a repository. */
	export interface GitRemoteSettingsFormProperties {

		/** Optional. The name of the Secret Manager secret version to use as an authentication token for Git operations. Must be in the format `projects/secrets/versions/*`. */
		authenticationTokenSecretVersion: FormControl<string | null | undefined>,

		/** Required. The Git remote's default branch name. */
		defaultBranch: FormControl<string | null | undefined>,

		/** Output only. Deprecated: The field does not contain any token status information. Instead use https://cloud.google.com/dataform/reference/rest/v1beta1/projects.locations.repositories/computeAccessTokenStatus */
		tokenStatus: FormControl<ComputeRepositoryAccessTokenStatusResponseTokenStatus | null | undefined>,

		/** Required. The Git remote's URL. */
		url: FormControl<string | null | undefined>,
	}
	export function CreateGitRemoteSettingsFormGroup() {
		return new FormGroup<GitRemoteSettingsFormProperties>({
			authenticationTokenSecretVersion: new FormControl<string | null | undefined>(undefined),
			defaultBranch: new FormControl<string | null | undefined>(undefined),
			tokenStatus: new FormControl<ComputeRepositoryAccessTokenStatusResponseTokenStatus | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Configures fields for performing SSH authentication. */
	export interface SshAuthenticationConfig {

		/** Required. Content of a public SSH key to verify an identity of a remote Git host. */
		hostPublicKey?: string | null;

		/** Required. The name of the Secret Manager secret version to use as a ssh private key for Git operations. Must be in the format `projects/secrets/versions/*`. */
		userPrivateKeySecretVersion?: string | null;
	}

	/** Configures fields for performing SSH authentication. */
	export interface SshAuthenticationConfigFormProperties {

		/** Required. Content of a public SSH key to verify an identity of a remote Git host. */
		hostPublicKey: FormControl<string | null | undefined>,

		/** Required. The name of the Secret Manager secret version to use as a ssh private key for Git operations. Must be in the format `projects/secrets/versions/*`. */
		userPrivateKeySecretVersion: FormControl<string | null | undefined>,
	}
	export function CreateSshAuthenticationConfigFormGroup() {
		return new FormGroup<SshAuthenticationConfigFormProperties>({
			hostPublicKey: new FormControl<string | null | undefined>(undefined),
			userPrivateKeySecretVersion: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** `InstallNpmPackages` request message. */
	export interface InstallNpmPackagesRequest {
	}

	/** `InstallNpmPackages` request message. */
	export interface InstallNpmPackagesRequestFormProperties {
	}
	export function CreateInstallNpmPackagesRequestFormGroup() {
		return new FormGroup<InstallNpmPackagesRequestFormProperties>({
		});

	}


	/** `InstallNpmPackages` response message. */
	export interface InstallNpmPackagesResponse {
	}

	/** `InstallNpmPackages` response message. */
	export interface InstallNpmPackagesResponseFormProperties {
	}
	export function CreateInstallNpmPackagesResponseFormGroup() {
		return new FormGroup<InstallNpmPackagesResponseFormProperties>({
		});

	}


	/** Represents a time interval, encoded as a Timestamp start (inclusive) and a Timestamp end (exclusive). The start must be less than or equal to the end. When the start equals the end, the interval is empty (matches no time). When both start and end are unspecified, the interval matches any time. */
	export interface Interval {

		/** Optional. Exclusive end of the interval. If specified, a Timestamp matching this interval will have to be before the end. */
		endTime?: string | null;

		/** Optional. Inclusive start of the interval. If specified, a Timestamp matching this interval will have to be the same or after the start. */
		startTime?: string | null;
	}

	/** Represents a time interval, encoded as a Timestamp start (inclusive) and a Timestamp end (exclusive). The start must be less than or equal to the end. When the start equals the end, the interval is empty (matches no time). When both start and end are unspecified, the interval matches any time. */
	export interface IntervalFormProperties {

		/** Optional. Exclusive end of the interval. If specified, a Timestamp matching this interval will have to be before the end. */
		endTime: FormControl<string | null | undefined>,

		/** Optional. Inclusive start of the interval. If specified, a Timestamp matching this interval will have to be the same or after the start. */
		startTime: FormControl<string | null | undefined>,
	}
	export function CreateIntervalFormGroup() {
		return new FormGroup<IntervalFormProperties>({
			endTime: new FormControl<string | null | undefined>(undefined),
			startTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Includes various configuration options for a workflow invocation. If both `included_targets` and `included_tags` are unset, all actions will be included. */
	export interface InvocationConfig {

		/** Optional. When set to true, any incremental tables will be fully refreshed. */
		fullyRefreshIncrementalTablesEnabled?: boolean | null;

		/** Optional. The set of tags to include. */
		includedTags?: Array<string>;

		/** Optional. The set of action identifiers to include. */
		includedTargets?: Array<Target>;

		/** Optional. The service account to run workflow invocations under. */
		serviceAccount?: string | null;

		/** Optional. When set to true, transitive dependencies of included actions will be executed. */
		transitiveDependenciesIncluded?: boolean | null;

		/** Optional. When set to true, transitive dependents of included actions will be executed. */
		transitiveDependentsIncluded?: boolean | null;
	}

	/** Includes various configuration options for a workflow invocation. If both `included_targets` and `included_tags` are unset, all actions will be included. */
	export interface InvocationConfigFormProperties {

		/** Optional. When set to true, any incremental tables will be fully refreshed. */
		fullyRefreshIncrementalTablesEnabled: FormControl<boolean | null | undefined>,

		/** Optional. The service account to run workflow invocations under. */
		serviceAccount: FormControl<string | null | undefined>,

		/** Optional. When set to true, transitive dependencies of included actions will be executed. */
		transitiveDependenciesIncluded: FormControl<boolean | null | undefined>,

		/** Optional. When set to true, transitive dependents of included actions will be executed. */
		transitiveDependentsIncluded: FormControl<boolean | null | undefined>,
	}
	export function CreateInvocationConfigFormGroup() {
		return new FormGroup<InvocationConfigFormProperties>({
			fullyRefreshIncrementalTablesEnabled: new FormControl<boolean | null | undefined>(undefined),
			serviceAccount: new FormControl<string | null | undefined>(undefined),
			transitiveDependenciesIncluded: new FormControl<boolean | null | undefined>(undefined),
			transitiveDependentsIncluded: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** `ListCompilationResults` response message. */
	export interface ListCompilationResultsResponse {

		/** List of compilation results. */
		compilationResults?: Array<CompilationResult>;

		/** A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
		nextPageToken?: string | null;

		/** Locations which could not be reached. */
		unreachable?: Array<string>;
	}

	/** `ListCompilationResults` response message. */
	export interface ListCompilationResultsResponseFormProperties {

		/** A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListCompilationResultsResponseFormGroup() {
		return new FormGroup<ListCompilationResultsResponseFormProperties>({
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


	/** `ListReleaseConfigs` response message. */
	export interface ListReleaseConfigsResponse {

		/** A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
		nextPageToken?: string | null;

		/** List of release configs. */
		releaseConfigs?: Array<ReleaseConfig>;

		/** Locations which could not be reached. */
		unreachable?: Array<string>;
	}

	/** `ListReleaseConfigs` response message. */
	export interface ListReleaseConfigsResponseFormProperties {

		/** A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListReleaseConfigsResponseFormGroup() {
		return new FormGroup<ListReleaseConfigsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents a Dataform release configuration. */
	export interface ReleaseConfig {

		/** Configures various aspects of Dataform code compilation. */
		codeCompilationConfig?: CodeCompilationConfig;

		/** Optional. Optional schedule (in cron format) for automatic creation of compilation results. */
		cronSchedule?: string | null;

		/** Optional. Disables automatic creation of compilation results. */
		disabled?: boolean | null;

		/** Required. Git commit/tag/branch name at which the repository should be compiled. Must exist in the remote repository. Examples: - a commit SHA: `12ade345` - a tag: `tag1` - a branch name: `branch1` */
		gitCommitish?: string | null;

		/** Output only. The release config's name. */
		name?: string | null;

		/** Output only. Records of the 10 most recent scheduled release attempts, ordered in in descending order of `release_time`. Updated whenever automatic creation of a compilation result is triggered by cron_schedule. */
		recentScheduledReleaseRecords?: Array<ScheduledReleaseRecord>;

		/** Optional. The name of the currently released compilation result for this release config. This value is updated when a compilation result is created from this release config, or when this resource is updated by API call (perhaps to roll back to an earlier release). The compilation result must have been created using this release config. Must be in the format `projects/locations/repositories/compilationResults/*`. */
		releaseCompilationResult?: string | null;

		/** Optional. Specifies the time zone to be used when interpreting cron_schedule. Must be a time zone name from the time zone database (https://en.wikipedia.org/wiki/List_of_tz_database_time_zones). If left unspecified, the default is UTC. */
		timeZone?: string | null;
	}

	/** Represents a Dataform release configuration. */
	export interface ReleaseConfigFormProperties {

		/** Optional. Optional schedule (in cron format) for automatic creation of compilation results. */
		cronSchedule: FormControl<string | null | undefined>,

		/** Optional. Disables automatic creation of compilation results. */
		disabled: FormControl<boolean | null | undefined>,

		/** Required. Git commit/tag/branch name at which the repository should be compiled. Must exist in the remote repository. Examples: - a commit SHA: `12ade345` - a tag: `tag1` - a branch name: `branch1` */
		gitCommitish: FormControl<string | null | undefined>,

		/** Output only. The release config's name. */
		name: FormControl<string | null | undefined>,

		/** Optional. The name of the currently released compilation result for this release config. This value is updated when a compilation result is created from this release config, or when this resource is updated by API call (perhaps to roll back to an earlier release). The compilation result must have been created using this release config. Must be in the format `projects/locations/repositories/compilationResults/*`. */
		releaseCompilationResult: FormControl<string | null | undefined>,

		/** Optional. Specifies the time zone to be used when interpreting cron_schedule. Must be a time zone name from the time zone database (https://en.wikipedia.org/wiki/List_of_tz_database_time_zones). If left unspecified, the default is UTC. */
		timeZone: FormControl<string | null | undefined>,
	}
	export function CreateReleaseConfigFormGroup() {
		return new FormGroup<ReleaseConfigFormProperties>({
			cronSchedule: new FormControl<string | null | undefined>(undefined),
			disabled: new FormControl<boolean | null | undefined>(undefined),
			gitCommitish: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			releaseCompilationResult: new FormControl<string | null | undefined>(undefined),
			timeZone: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A record of an attempt to create a compilation result for this release config. */
	export interface ScheduledReleaseRecord {

		/** The name of the created compilation result, if one was successfully created. Must be in the format `projects/locations/repositories/compilationResults/*`. */
		compilationResult?: string | null;

		/** The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors). */
		errorStatus?: Status;

		/** The timestamp of this release attempt. */
		releaseTime?: string | null;
	}

	/** A record of an attempt to create a compilation result for this release config. */
	export interface ScheduledReleaseRecordFormProperties {

		/** The name of the created compilation result, if one was successfully created. Must be in the format `projects/locations/repositories/compilationResults/*`. */
		compilationResult: FormControl<string | null | undefined>,

		/** The timestamp of this release attempt. */
		releaseTime: FormControl<string | null | undefined>,
	}
	export function CreateScheduledReleaseRecordFormGroup() {
		return new FormGroup<ScheduledReleaseRecordFormProperties>({
			compilationResult: new FormControl<string | null | undefined>(undefined),
			releaseTime: new FormControl<string | null | undefined>(undefined),
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


	/** `ListRepositories` response message. */
	export interface ListRepositoriesResponse {

		/** A token which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
		nextPageToken?: string | null;

		/** List of repositories. */
		repositories?: Array<Repository>;

		/** Locations which could not be reached. */
		unreachable?: Array<string>;
	}

	/** `ListRepositories` response message. */
	export interface ListRepositoriesResponseFormProperties {

		/** A token which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListRepositoriesResponseFormGroup() {
		return new FormGroup<ListRepositoriesResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents a Dataform Git repository. */
	export interface Repository {

		/** Optional. The repository's user-friendly name. */
		displayName?: string | null;

		/** Controls Git remote configuration for a repository. */
		gitRemoteSettings?: GitRemoteSettings;

		/** Optional. Repository user labels. */
		labels?: {[id: string]: string };

		/** Output only. The repository's name. */
		name?: string | null;

		/** Optional. The name of the Secret Manager secret version to be used to interpolate variables into the .npmrc file for package installation operations. Must be in the format `projects/secrets/versions/*`. The file itself must be in a JSON format. */
		npmrcEnvironmentVariablesSecretVersion?: string | null;

		/** Optional. The service account to run workflow invocations under. */
		serviceAccount?: string | null;

		/** Optional. Input only. If set to true, the authenticated user will be granted the roles/dataform.admin role on the created repository. To modify access to the created repository later apply setIamPolicy from https://cloud.google.com/dataform/reference/rest#rest-resource:-v1beta1.projects.locations.repositories */
		setAuthenticatedUserAdmin?: boolean | null;

		/** Configures workspace compilation overrides for a repository. Primarily used by the UI (`console.cloud.google.com`). `schema_suffix` and `table_prefix` can have a special expression - `${workspaceName}`, which refers to the workspace name from which the compilation results will be created. API callers are expected to resolve the expression in these overrides and provide them explicitly in `code_compilation_config` (https://cloud.google.com/dataform/reference/rest/v1beta1/projects.locations.repositories.compilationResults#codecompilationconfig) when creating workspace-scoped compilation results. */
		workspaceCompilationOverrides?: WorkspaceCompilationOverrides;
	}

	/** Represents a Dataform Git repository. */
	export interface RepositoryFormProperties {

		/** Optional. The repository's user-friendly name. */
		displayName: FormControl<string | null | undefined>,

		/** Optional. Repository user labels. */
		labels: FormControl<{[id: string]: string } | null | undefined>,

		/** Output only. The repository's name. */
		name: FormControl<string | null | undefined>,

		/** Optional. The name of the Secret Manager secret version to be used to interpolate variables into the .npmrc file for package installation operations. Must be in the format `projects/secrets/versions/*`. The file itself must be in a JSON format. */
		npmrcEnvironmentVariablesSecretVersion: FormControl<string | null | undefined>,

		/** Optional. The service account to run workflow invocations under. */
		serviceAccount: FormControl<string | null | undefined>,

		/** Optional. Input only. If set to true, the authenticated user will be granted the roles/dataform.admin role on the created repository. To modify access to the created repository later apply setIamPolicy from https://cloud.google.com/dataform/reference/rest#rest-resource:-v1beta1.projects.locations.repositories */
		setAuthenticatedUserAdmin: FormControl<boolean | null | undefined>,
	}
	export function CreateRepositoryFormGroup() {
		return new FormGroup<RepositoryFormProperties>({
			displayName: new FormControl<string | null | undefined>(undefined),
			labels: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			npmrcEnvironmentVariablesSecretVersion: new FormControl<string | null | undefined>(undefined),
			serviceAccount: new FormControl<string | null | undefined>(undefined),
			setAuthenticatedUserAdmin: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Configures workspace compilation overrides for a repository. Primarily used by the UI (`console.cloud.google.com`). `schema_suffix` and `table_prefix` can have a special expression - `${workspaceName}`, which refers to the workspace name from which the compilation results will be created. API callers are expected to resolve the expression in these overrides and provide them explicitly in `code_compilation_config` (https://cloud.google.com/dataform/reference/rest/v1beta1/projects.locations.repositories.compilationResults#codecompilationconfig) when creating workspace-scoped compilation results. */
	export interface WorkspaceCompilationOverrides {

		/** Optional. The default database (Google Cloud project ID). */
		defaultDatabase?: string | null;

		/** Optional. The suffix that should be appended to all schema (BigQuery dataset ID) names. */
		schemaSuffix?: string | null;

		/** Optional. The prefix that should be prepended to all table names. */
		tablePrefix?: string | null;
	}

	/** Configures workspace compilation overrides for a repository. Primarily used by the UI (`console.cloud.google.com`). `schema_suffix` and `table_prefix` can have a special expression - `${workspaceName}`, which refers to the workspace name from which the compilation results will be created. API callers are expected to resolve the expression in these overrides and provide them explicitly in `code_compilation_config` (https://cloud.google.com/dataform/reference/rest/v1beta1/projects.locations.repositories.compilationResults#codecompilationconfig) when creating workspace-scoped compilation results. */
	export interface WorkspaceCompilationOverridesFormProperties {

		/** Optional. The default database (Google Cloud project ID). */
		defaultDatabase: FormControl<string | null | undefined>,

		/** Optional. The suffix that should be appended to all schema (BigQuery dataset ID) names. */
		schemaSuffix: FormControl<string | null | undefined>,

		/** Optional. The prefix that should be prepended to all table names. */
		tablePrefix: FormControl<string | null | undefined>,
	}
	export function CreateWorkspaceCompilationOverridesFormGroup() {
		return new FormGroup<WorkspaceCompilationOverridesFormProperties>({
			defaultDatabase: new FormControl<string | null | undefined>(undefined),
			schemaSuffix: new FormControl<string | null | undefined>(undefined),
			tablePrefix: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** `ListWorkflowConfigs` response message. */
	export interface ListWorkflowConfigsResponse {

		/** A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
		nextPageToken?: string | null;

		/** Locations which could not be reached. */
		unreachable?: Array<string>;

		/** List of workflow configs. */
		workflowConfigs?: Array<WorkflowConfig>;
	}

	/** `ListWorkflowConfigs` response message. */
	export interface ListWorkflowConfigsResponseFormProperties {

		/** A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListWorkflowConfigsResponseFormGroup() {
		return new FormGroup<ListWorkflowConfigsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents a Dataform workflow configuration. */
	export interface WorkflowConfig {

		/** Optional. Optional schedule (in cron format) for automatic execution of this workflow config. */
		cronSchedule?: string | null;

		/** Includes various configuration options for a workflow invocation. If both `included_targets` and `included_tags` are unset, all actions will be included. */
		invocationConfig?: InvocationConfig;

		/** Output only. The workflow config's name. */
		name?: string | null;

		/** Output only. Records of the 10 most recent scheduled execution attempts, ordered in in descending order of `execution_time`. Updated whenever automatic creation of a workflow invocation is triggered by cron_schedule. */
		recentScheduledExecutionRecords?: Array<ScheduledExecutionRecord>;

		/** Required. The name of the release config whose release_compilation_result should be executed. Must be in the format `projects/locations/repositories/releaseConfigs/*`. */
		releaseConfig?: string | null;

		/** Optional. Specifies the time zone to be used when interpreting cron_schedule. Must be a time zone name from the time zone database (https://en.wikipedia.org/wiki/List_of_tz_database_time_zones). If left unspecified, the default is UTC. */
		timeZone?: string | null;
	}

	/** Represents a Dataform workflow configuration. */
	export interface WorkflowConfigFormProperties {

		/** Optional. Optional schedule (in cron format) for automatic execution of this workflow config. */
		cronSchedule: FormControl<string | null | undefined>,

		/** Output only. The workflow config's name. */
		name: FormControl<string | null | undefined>,

		/** Required. The name of the release config whose release_compilation_result should be executed. Must be in the format `projects/locations/repositories/releaseConfigs/*`. */
		releaseConfig: FormControl<string | null | undefined>,

		/** Optional. Specifies the time zone to be used when interpreting cron_schedule. Must be a time zone name from the time zone database (https://en.wikipedia.org/wiki/List_of_tz_database_time_zones). If left unspecified, the default is UTC. */
		timeZone: FormControl<string | null | undefined>,
	}
	export function CreateWorkflowConfigFormGroup() {
		return new FormGroup<WorkflowConfigFormProperties>({
			cronSchedule: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			releaseConfig: new FormControl<string | null | undefined>(undefined),
			timeZone: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A record of an attempt to create a workflow invocation for this workflow config. */
	export interface ScheduledExecutionRecord {

		/** The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors). */
		errorStatus?: Status;

		/** The timestamp of this execution attempt. */
		executionTime?: string | null;

		/** The name of the created workflow invocation, if one was successfully created. Must be in the format `projects/locations/repositories/workflowInvocations/*`. */
		workflowInvocation?: string | null;
	}

	/** A record of an attempt to create a workflow invocation for this workflow config. */
	export interface ScheduledExecutionRecordFormProperties {

		/** The timestamp of this execution attempt. */
		executionTime: FormControl<string | null | undefined>,

		/** The name of the created workflow invocation, if one was successfully created. Must be in the format `projects/locations/repositories/workflowInvocations/*`. */
		workflowInvocation: FormControl<string | null | undefined>,
	}
	export function CreateScheduledExecutionRecordFormGroup() {
		return new FormGroup<ScheduledExecutionRecordFormProperties>({
			executionTime: new FormControl<string | null | undefined>(undefined),
			workflowInvocation: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** `ListWorkflowInvocations` response message. */
	export interface ListWorkflowInvocationsResponse {

		/** A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
		nextPageToken?: string | null;

		/** Locations which could not be reached. */
		unreachable?: Array<string>;

		/** List of workflow invocations. */
		workflowInvocations?: Array<WorkflowInvocation>;
	}

	/** `ListWorkflowInvocations` response message. */
	export interface ListWorkflowInvocationsResponseFormProperties {

		/** A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListWorkflowInvocationsResponseFormGroup() {
		return new FormGroup<ListWorkflowInvocationsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents a single invocation of a compilation result. */
	export interface WorkflowInvocation {

		/** Immutable. The name of the compilation result to use for this invocation. Must be in the format `projects/locations/repositories/compilationResults/*`. */
		compilationResult?: string | null;

		/** Includes various configuration options for a workflow invocation. If both `included_targets` and `included_tags` are unset, all actions will be included. */
		invocationConfig?: InvocationConfig;

		/** Represents a time interval, encoded as a Timestamp start (inclusive) and a Timestamp end (exclusive). The start must be less than or equal to the end. When the start equals the end, the interval is empty (matches no time). When both start and end are unspecified, the interval matches any time. */
		invocationTiming?: Interval;

		/** Output only. The workflow invocation's name. */
		name?: string | null;

		/** Output only. The resolved compilation result that was used to create this invocation. Will be in the format `projects/locations/repositories/compilationResults/*`. */
		resolvedCompilationResult?: string | null;

		/** Output only. This workflow invocation's current state. */
		state?: WorkflowInvocationState | null;

		/** Immutable. The name of the workflow config to invoke. Must be in the format `projects/locations/repositories/workflowConfigs/*`. */
		workflowConfig?: string | null;
	}

	/** Represents a single invocation of a compilation result. */
	export interface WorkflowInvocationFormProperties {

		/** Immutable. The name of the compilation result to use for this invocation. Must be in the format `projects/locations/repositories/compilationResults/*`. */
		compilationResult: FormControl<string | null | undefined>,

		/** Output only. The workflow invocation's name. */
		name: FormControl<string | null | undefined>,

		/** Output only. The resolved compilation result that was used to create this invocation. Will be in the format `projects/locations/repositories/compilationResults/*`. */
		resolvedCompilationResult: FormControl<string | null | undefined>,

		/** Output only. This workflow invocation's current state. */
		state: FormControl<WorkflowInvocationState | null | undefined>,

		/** Immutable. The name of the workflow config to invoke. Must be in the format `projects/locations/repositories/workflowConfigs/*`. */
		workflowConfig: FormControl<string | null | undefined>,
	}
	export function CreateWorkflowInvocationFormGroup() {
		return new FormGroup<WorkflowInvocationFormProperties>({
			compilationResult: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			resolvedCompilationResult: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<WorkflowInvocationState | null | undefined>(undefined),
			workflowConfig: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum WorkflowInvocationState { STATE_UNSPECIFIED = 0, RUNNING = 1, SUCCEEDED = 2, CANCELLED = 3, FAILED = 4, CANCELING = 5 }


	/** `ListWorkspaces` response message. */
	export interface ListWorkspacesResponse {

		/** A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
		nextPageToken?: string | null;

		/** Locations which could not be reached. */
		unreachable?: Array<string>;

		/** List of workspaces. */
		workspaces?: Array<Workspace>;
	}

	/** `ListWorkspaces` response message. */
	export interface ListWorkspacesResponseFormProperties {

		/** A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListWorkspacesResponseFormGroup() {
		return new FormGroup<ListWorkspacesResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents a Dataform Git workspace. */
	export interface Workspace {

		/** Output only. The workspace's name. */
		name?: string | null;
	}

	/** Represents a Dataform Git workspace. */
	export interface WorkspaceFormProperties {

		/** Output only. The workspace's name. */
		name: FormControl<string | null | undefined>,
	}
	export function CreateWorkspaceFormGroup() {
		return new FormGroup<WorkspaceFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** `MakeDirectory` request message. */
	export interface MakeDirectoryRequest {

		/** Required. The directory's full path including directory name, relative to the workspace root. */
		path?: string | null;
	}

	/** `MakeDirectory` request message. */
	export interface MakeDirectoryRequestFormProperties {

		/** Required. The directory's full path including directory name, relative to the workspace root. */
		path: FormControl<string | null | undefined>,
	}
	export function CreateMakeDirectoryRequestFormGroup() {
		return new FormGroup<MakeDirectoryRequestFormProperties>({
			path: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** `MakeDirectory` response message. */
	export interface MakeDirectoryResponse {
	}

	/** `MakeDirectory` response message. */
	export interface MakeDirectoryResponseFormProperties {
	}
	export function CreateMakeDirectoryResponseFormGroup() {
		return new FormGroup<MakeDirectoryResponseFormProperties>({
		});

	}


	/** `MoveDirectory` request message. */
	export interface MoveDirectoryRequest {

		/** Required. The new path for the directory including directory name, rooted at workspace root. */
		newPath?: string | null;

		/** Required. The directory's full path including directory name, relative to the workspace root. */
		path?: string | null;
	}

	/** `MoveDirectory` request message. */
	export interface MoveDirectoryRequestFormProperties {

		/** Required. The new path for the directory including directory name, rooted at workspace root. */
		newPath: FormControl<string | null | undefined>,

		/** Required. The directory's full path including directory name, relative to the workspace root. */
		path: FormControl<string | null | undefined>,
	}
	export function CreateMoveDirectoryRequestFormGroup() {
		return new FormGroup<MoveDirectoryRequestFormProperties>({
			newPath: new FormControl<string | null | undefined>(undefined),
			path: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** `MoveDirectory` response message. */
	export interface MoveDirectoryResponse {
	}

	/** `MoveDirectory` response message. */
	export interface MoveDirectoryResponseFormProperties {
	}
	export function CreateMoveDirectoryResponseFormGroup() {
		return new FormGroup<MoveDirectoryResponseFormProperties>({
		});

	}


	/** `MoveFile` request message. */
	export interface MoveFileRequest {

		/** Required. The file's new path including filename, relative to the workspace root. */
		newPath?: string | null;

		/** Required. The file's full path including filename, relative to the workspace root. */
		path?: string | null;
	}

	/** `MoveFile` request message. */
	export interface MoveFileRequestFormProperties {

		/** Required. The file's new path including filename, relative to the workspace root. */
		newPath: FormControl<string | null | undefined>,

		/** Required. The file's full path including filename, relative to the workspace root. */
		path: FormControl<string | null | undefined>,
	}
	export function CreateMoveFileRequestFormGroup() {
		return new FormGroup<MoveFileRequestFormProperties>({
			newPath: new FormControl<string | null | undefined>(undefined),
			path: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** `MoveFile` response message. */
	export interface MoveFileResponse {
	}

	/** `MoveFile` response message. */
	export interface MoveFileResponseFormProperties {
	}
	export function CreateMoveFileResponseFormGroup() {
		return new FormGroup<MoveFileResponseFormProperties>({
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


	/** An Identity and Access Management (IAM) policy, which specifies access controls for Google Cloud resources. A `Policy` is a collection of `bindings`. A `binding` binds one or more `members`, or principals, to a single `role`. Principals can be user accounts, service accounts, Google groups, and domains (such as G Suite). A `role` is a named list of permissions; each `role` can be an IAM predefined role or a user-created custom role. For some types of Google Cloud resources, a `binding` can also specify a `condition`, which is a logical expression that allows access to a resource only if the expression evaluates to `true`. A condition can add constraints based on attributes of the request, the resource, or both. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies). **JSON example:** ``` { "bindings": [ { "role": "roles/resourcemanager.organizationAdmin", "members": [ "user:mike@example.com", "group:admins@example.com", "domain:google.com", "serviceAccount:my-project-id@appspot.gserviceaccount.com" ] }, { "role": "roles/resourcemanager.organizationViewer", "members": [ "user:eve@example.com" ], "condition": { "title": "expirable access", "description": "Does not grant access after Sep 2020", "expression": "request.time < timestamp('2020-10-01T00:00:00.000Z')", } } ], "etag": "BwWWja0YfJA=", "version": 3 } ``` **YAML example:** ``` bindings: - members: - user:mike@example.com - group:admins@example.com - domain:google.com - serviceAccount:my-project-id@appspot.gserviceaccount.com role: roles/resourcemanager.organizationAdmin - members: - user:eve@example.com role: roles/resourcemanager.organizationViewer condition: title: expirable access description: Does not grant access after Sep 2020 expression: request.time < timestamp('2020-10-01T00:00:00.000Z') etag: BwWWja0YfJA= version: 3 ``` For a description of IAM and its features, see the [IAM documentation](https://cloud.google.com/iam/docs/). */
	export interface Policy {

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


	/** `PullGitCommits` request message. */
	export interface PullGitCommitsRequest {

		/** Represents the author of a Git commit. */
		author?: CommitAuthor;

		/** Optional. The name of the branch in the Git remote from which to pull commits. If left unset, the repository's default branch name will be used. */
		remoteBranch?: string | null;
	}

	/** `PullGitCommits` request message. */
	export interface PullGitCommitsRequestFormProperties {

		/** Optional. The name of the branch in the Git remote from which to pull commits. If left unset, the repository's default branch name will be used. */
		remoteBranch: FormControl<string | null | undefined>,
	}
	export function CreatePullGitCommitsRequestFormGroup() {
		return new FormGroup<PullGitCommitsRequestFormProperties>({
			remoteBranch: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** `PushGitCommits` request message. */
	export interface PushGitCommitsRequest {

		/** Optional. The name of the branch in the Git remote to which commits should be pushed. If left unset, the repository's default branch name will be used. */
		remoteBranch?: string | null;
	}

	/** `PushGitCommits` request message. */
	export interface PushGitCommitsRequestFormProperties {

		/** Optional. The name of the branch in the Git remote to which commits should be pushed. If left unset, the repository's default branch name will be used. */
		remoteBranch: FormControl<string | null | undefined>,
	}
	export function CreatePushGitCommitsRequestFormGroup() {
		return new FormGroup<PushGitCommitsRequestFormProperties>({
			remoteBranch: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** `QueryCompilationResultActions` response message. */
	export interface QueryCompilationResultActionsResponse {

		/** List of compilation result actions. */
		compilationResultActions?: Array<CompilationResultAction>;

		/** A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
		nextPageToken?: string | null;
	}

	/** `QueryCompilationResultActions` response message. */
	export interface QueryCompilationResultActionsResponseFormProperties {

		/** A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateQueryCompilationResultActionsResponseFormGroup() {
		return new FormGroup<QueryCompilationResultActionsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** `QueryDirectoryContents` response message. */
	export interface QueryDirectoryContentsResponse {

		/** List of entries in the directory. */
		directoryEntries?: Array<DirectoryEntry>;

		/** A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
		nextPageToken?: string | null;
	}

	/** `QueryDirectoryContents` response message. */
	export interface QueryDirectoryContentsResponseFormProperties {

		/** A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateQueryDirectoryContentsResponseFormGroup() {
		return new FormGroup<QueryDirectoryContentsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** `QueryRepositoryDirectoryContents` response message. */
	export interface QueryRepositoryDirectoryContentsResponse {

		/** List of entries in the directory. */
		directoryEntries?: Array<DirectoryEntry>;

		/** A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
		nextPageToken?: string | null;
	}

	/** `QueryRepositoryDirectoryContents` response message. */
	export interface QueryRepositoryDirectoryContentsResponseFormProperties {

		/** A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateQueryRepositoryDirectoryContentsResponseFormGroup() {
		return new FormGroup<QueryRepositoryDirectoryContentsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** `QueryWorkflowInvocationActions` response message. */
	export interface QueryWorkflowInvocationActionsResponse {

		/** A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
		nextPageToken?: string | null;

		/** List of workflow invocation actions. */
		workflowInvocationActions?: Array<WorkflowInvocationAction>;
	}

	/** `QueryWorkflowInvocationActions` response message. */
	export interface QueryWorkflowInvocationActionsResponseFormProperties {

		/** A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateQueryWorkflowInvocationActionsResponseFormGroup() {
		return new FormGroup<QueryWorkflowInvocationActionsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents a single action in a workflow invocation. */
	export interface WorkflowInvocationAction {

		/** Represents a workflow action that will run against BigQuery. */
		bigqueryAction?: BigQueryAction;

		/** Represents an action identifier. If the action writes output, the output will be written to the referenced database object. */
		canonicalTarget?: Target;

		/** Output only. If and only if action's state is FAILED a failure reason is set. */
		failureReason?: string | null;

		/** Represents a time interval, encoded as a Timestamp start (inclusive) and a Timestamp end (exclusive). The start must be less than or equal to the end. When the start equals the end, the interval is empty (matches no time). When both start and end are unspecified, the interval matches any time. */
		invocationTiming?: Interval;

		/** Output only. This action's current state. */
		state?: WorkflowInvocationActionState | null;

		/** Represents an action identifier. If the action writes output, the output will be written to the referenced database object. */
		target?: Target;
	}

	/** Represents a single action in a workflow invocation. */
	export interface WorkflowInvocationActionFormProperties {

		/** Output only. If and only if action's state is FAILED a failure reason is set. */
		failureReason: FormControl<string | null | undefined>,

		/** Output only. This action's current state. */
		state: FormControl<WorkflowInvocationActionState | null | undefined>,
	}
	export function CreateWorkflowInvocationActionFormGroup() {
		return new FormGroup<WorkflowInvocationActionFormProperties>({
			failureReason: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<WorkflowInvocationActionState | null | undefined>(undefined),
		});

	}

	export enum WorkflowInvocationActionState { PENDING = 0, RUNNING = 1, SKIPPED = 2, DISABLED = 3, SUCCEEDED = 4, CANCELLED = 5, FAILED = 6 }


	/** `ReadFile` response message. */
	export interface ReadFileResponse {

		/** The file's contents. */
		fileContents?: string | null;
	}

	/** `ReadFile` response message. */
	export interface ReadFileResponseFormProperties {

		/** The file's contents. */
		fileContents: FormControl<string | null | undefined>,
	}
	export function CreateReadFileResponseFormGroup() {
		return new FormGroup<ReadFileResponseFormProperties>({
			fileContents: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** `ReadRepositoryFile` response message. */
	export interface ReadRepositoryFileResponse {

		/** The file's contents. */
		contents?: string | null;
	}

	/** `ReadRepositoryFile` response message. */
	export interface ReadRepositoryFileResponseFormProperties {

		/** The file's contents. */
		contents: FormControl<string | null | undefined>,
	}
	export function CreateReadRepositoryFileResponseFormGroup() {
		return new FormGroup<ReadRepositoryFileResponseFormProperties>({
			contents: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** `RemoveDirectory` request message. */
	export interface RemoveDirectoryRequest {

		/** Required. The directory's full path including directory name, relative to the workspace root. */
		path?: string | null;
	}

	/** `RemoveDirectory` request message. */
	export interface RemoveDirectoryRequestFormProperties {

		/** Required. The directory's full path including directory name, relative to the workspace root. */
		path: FormControl<string | null | undefined>,
	}
	export function CreateRemoveDirectoryRequestFormGroup() {
		return new FormGroup<RemoveDirectoryRequestFormProperties>({
			path: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** `RemoveFile` request message. */
	export interface RemoveFileRequest {

		/** Required. The file's full path including filename, relative to the workspace root. */
		path?: string | null;
	}

	/** `RemoveFile` request message. */
	export interface RemoveFileRequestFormProperties {

		/** Required. The file's full path including filename, relative to the workspace root. */
		path: FormControl<string | null | undefined>,
	}
	export function CreateRemoveFileRequestFormGroup() {
		return new FormGroup<RemoveFileRequestFormProperties>({
			path: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** `ResetWorkspaceChanges` request message. */
	export interface ResetWorkspaceChangesRequest {

		/** Optional. If set to true, untracked files will be deleted. */
		clean?: boolean | null;

		/** Optional. Full file paths to reset back to their committed state including filename, rooted at workspace root. If left empty, all files will be reset. */
		paths?: Array<string>;
	}

	/** `ResetWorkspaceChanges` request message. */
	export interface ResetWorkspaceChangesRequestFormProperties {

		/** Optional. If set to true, untracked files will be deleted. */
		clean: FormControl<boolean | null | undefined>,
	}
	export function CreateResetWorkspaceChangesRequestFormGroup() {
		return new FormGroup<ResetWorkspaceChangesRequestFormProperties>({
			clean: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Client-facing representation of a file search response. */
	export interface SearchFilesResponse {

		/** Optional. A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
		nextPageToken?: string | null;

		/** List of matched results. */
		searchResults?: Array<SearchResult>;
	}

	/** Client-facing representation of a file search response. */
	export interface SearchFilesResponseFormProperties {

		/** Optional. A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateSearchFilesResponseFormGroup() {
		return new FormGroup<SearchFilesResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Client-facing representation of a search result entry. */
	export interface SearchResult {

		/** Client-facing representation of a directory entry in search results. */
		directory?: DirectorySearchResult;

		/** Client-facing representation of a file entry in search results. */
		file?: FileSearchResult;
	}

	/** Client-facing representation of a search result entry. */
	export interface SearchResultFormProperties {
	}
	export function CreateSearchResultFormGroup() {
		return new FormGroup<SearchResultFormProperties>({
		});

	}


	/** Request message for `SetIamPolicy` method. */
	export interface SetIamPolicyRequest {

		/** An Identity and Access Management (IAM) policy, which specifies access controls for Google Cloud resources. A `Policy` is a collection of `bindings`. A `binding` binds one or more `members`, or principals, to a single `role`. Principals can be user accounts, service accounts, Google groups, and domains (such as G Suite). A `role` is a named list of permissions; each `role` can be an IAM predefined role or a user-created custom role. For some types of Google Cloud resources, a `binding` can also specify a `condition`, which is a logical expression that allows access to a resource only if the expression evaluates to `true`. A condition can add constraints based on attributes of the request, the resource, or both. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies). **JSON example:** ``` { "bindings": [ { "role": "roles/resourcemanager.organizationAdmin", "members": [ "user:mike@example.com", "group:admins@example.com", "domain:google.com", "serviceAccount:my-project-id@appspot.gserviceaccount.com" ] }, { "role": "roles/resourcemanager.organizationViewer", "members": [ "user:eve@example.com" ], "condition": { "title": "expirable access", "description": "Does not grant access after Sep 2020", "expression": "request.time < timestamp('2020-10-01T00:00:00.000Z')", } } ], "etag": "BwWWja0YfJA=", "version": 3 } ``` **YAML example:** ``` bindings: - members: - user:mike@example.com - group:admins@example.com - domain:google.com - serviceAccount:my-project-id@appspot.gserviceaccount.com role: roles/resourcemanager.organizationAdmin - members: - user:eve@example.com role: roles/resourcemanager.organizationViewer condition: title: expirable access description: Does not grant access after Sep 2020 expression: request.time < timestamp('2020-10-01T00:00:00.000Z') etag: BwWWja0YfJA= version: 3 ``` For a description of IAM and its features, see the [IAM documentation](https://cloud.google.com/iam/docs/). */
		policy?: Policy;
	}

	/** Request message for `SetIamPolicy` method. */
	export interface SetIamPolicyRequestFormProperties {
	}
	export function CreateSetIamPolicyRequestFormGroup() {
		return new FormGroup<SetIamPolicyRequestFormProperties>({
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


	/** `WriteFile` request message. */
	export interface WriteFileRequest {

		/** Required. The file's contents. */
		contents?: string | null;

		/** Required. The file. */
		path?: string | null;
	}

	/** `WriteFile` request message. */
	export interface WriteFileRequestFormProperties {

		/** Required. The file's contents. */
		contents: FormControl<string | null | undefined>,

		/** Required. The file. */
		path: FormControl<string | null | undefined>,
	}
	export function CreateWriteFileRequestFormGroup() {
		return new FormGroup<WriteFileRequestFormProperties>({
			contents: new FormControl<string | null | undefined>(undefined),
			path: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** `WriteFile` response message. */
	export interface WriteFileResponse {
	}

	/** `WriteFile` response message. */
	export interface WriteFileResponseFormProperties {
	}
	export function CreateWriteFileResponseFormGroup() {
		return new FormGroup<WriteFileResponseFormProperties>({
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Deletes a single Workspace.
		 * Delete v1beta1/{name}
		 * @param {string} name Required. The workspace resource's name.
		 * @param {boolean} force If set to true, any child resources of this repository will also be deleted. (Otherwise, the request will only succeed if the repository has no child resources.)
		 * @return {Empty} Successful response
		 */
		Dataform_projects_locations_repositories_workspaces_delete(name: string, force: boolean | null | undefined): Observable<Empty> {
			return this.http.delete<Empty>(this.baseUri + 'v1beta1/' + (name == null ? '' : encodeURIComponent(name)) + '&force=' + force, {});
		}

		/**
		 * Fetches a single Workspace.
		 * Get v1beta1/{name}
		 * @param {string} name Required. The workspace's name.
		 * @return {Workspace} Successful response
		 */
		Dataform_projects_locations_repositories_workspaces_get(name: string): Observable<Workspace> {
			return this.http.get<Workspace>(this.baseUri + 'v1beta1/' + (name == null ? '' : encodeURIComponent(name)), {});
		}

		/**
		 * Updates a single WorkflowConfig.
		 * Patch v1beta1/{name}
		 * @param {string} name Output only. The workflow config's name.
		 * @param {string} updateMask Optional. Specifies the fields to be updated in the workflow config. If left unset, all fields will be updated.
		 * @return {WorkflowConfig} Successful response
		 */
		Dataform_projects_locations_repositories_workflowConfigs_patch(name: string, updateMask: string | null | undefined, requestBody: WorkflowConfig): Observable<WorkflowConfig> {
			return this.http.patch<WorkflowConfig>(this.baseUri + 'v1beta1/' + (name == null ? '' : encodeURIComponent(name)) + '&updateMask=' + (updateMask == null ? '' : encodeURIComponent(updateMask)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists information about the supported locations for this service.
		 * Get v1beta1/{name}/locations
		 * @param {string} name The resource that owns the locations collection, if applicable.
		 * @param {string} filter A filter to narrow down results to a preferred subset. The filtering language accepts strings like `"displayName=tokyo"`, and is documented in more detail in [AIP-160](https://google.aip.dev/160).
		 * @param {number} pageSize The maximum number of results to return. If not set, the service selects a default.
		 * @param {string} pageToken A page token received from the `next_page_token` field in the response. Send that page token to receive the subsequent page.
		 * @return {ListLocationsResponse} Successful response
		 */
		Dataform_projects_locations_list(name: string, filter: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListLocationsResponse> {
			return this.http.get<ListLocationsResponse>(this.baseUri + 'v1beta1/' + (name == null ? '' : encodeURIComponent(name)) + '/locations&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Requests cancellation of a running WorkflowInvocation.
		 * Post v1beta1/{name}:cancel
		 * @param {string} name Required. The workflow invocation resource's name.
		 * @return {Empty} Successful response
		 */
		Dataform_projects_locations_repositories_workflowInvocations_cancel(name: string, requestBody: CancelWorkflowInvocationRequest): Observable<Empty> {
			return this.http.post<Empty>(this.baseUri + 'v1beta1/' + (name == null ? '' : encodeURIComponent(name)) + ':cancel', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Applies a Git commit for uncommitted files in a Workspace.
		 * Post v1beta1/{name}:commit
		 * @param {string} name Required. The workspace's name.
		 * @return {Empty} Successful response
		 */
		Dataform_projects_locations_repositories_workspaces_commit(name: string, requestBody: CommitWorkspaceChangesRequest): Observable<Empty> {
			return this.http.post<Empty>(this.baseUri + 'v1beta1/' + (name == null ? '' : encodeURIComponent(name)) + ':commit', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Computes a Repository's Git access token status.
		 * Get v1beta1/{name}:computeAccessTokenStatus
		 * @param {string} name Required. The repository's name.
		 * @return {ComputeRepositoryAccessTokenStatusResponse} Successful response
		 */
		Dataform_projects_locations_repositories_computeAccessTokenStatus(name: string): Observable<ComputeRepositoryAccessTokenStatusResponse> {
			return this.http.get<ComputeRepositoryAccessTokenStatusResponse>(this.baseUri + 'v1beta1/' + (name == null ? '' : encodeURIComponent(name)) + ':computeAccessTokenStatus', {});
		}

		/**
		 * Fetches Git statuses for the files in a Workspace.
		 * Get v1beta1/{name}:fetchFileGitStatuses
		 * @param {string} name Required. The workspace's name.
		 * @return {FetchFileGitStatusesResponse} Successful response
		 */
		Dataform_projects_locations_repositories_workspaces_fetchFileGitStatuses(name: string): Observable<FetchFileGitStatusesResponse> {
			return this.http.get<FetchFileGitStatusesResponse>(this.baseUri + 'v1beta1/' + (name == null ? '' : encodeURIComponent(name)) + ':fetchFileGitStatuses', {});
		}

		/**
		 * Fetches Git ahead/behind against a remote branch.
		 * Get v1beta1/{name}:fetchGitAheadBehind
		 * @param {string} name Required. The workspace's name.
		 * @param {string} remoteBranch Optional. The name of the branch in the Git remote against which this workspace should be compared. If left unset, the repository's default branch name will be used.
		 * @return {FetchGitAheadBehindResponse} Successful response
		 */
		Dataform_projects_locations_repositories_workspaces_fetchGitAheadBehind(name: string, remoteBranch: string | null | undefined): Observable<FetchGitAheadBehindResponse> {
			return this.http.get<FetchGitAheadBehindResponse>(this.baseUri + 'v1beta1/' + (name == null ? '' : encodeURIComponent(name)) + ':fetchGitAheadBehind&remoteBranch=' + (remoteBranch == null ? '' : encodeURIComponent(remoteBranch)), {});
		}

		/**
		 * Fetches a Repository's history of commits. The Repository must not have a value for `git_remote_settings.url`.
		 * Get v1beta1/{name}:fetchHistory
		 * @param {string} name Required. The repository's name.
		 * @param {number} pageSize Optional. Maximum number of commits to return. The server may return fewer items than requested. If unspecified, the server will pick an appropriate default.
		 * @param {string} pageToken Optional. Page token received from a previous `FetchRepositoryHistory` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `FetchRepositoryHistory` must match the call that provided the page token.
		 * @return {FetchRepositoryHistoryResponse} Successful response
		 */
		Dataform_projects_locations_repositories_fetchHistory(name: string, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<FetchRepositoryHistoryResponse> {
			return this.http.get<FetchRepositoryHistoryResponse>(this.baseUri + 'v1beta1/' + (name == null ? '' : encodeURIComponent(name)) + ':fetchHistory&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Fetches a Repository's remote branches.
		 * Get v1beta1/{name}:fetchRemoteBranches
		 * @param {string} name Required. The repository's name.
		 * @return {FetchRemoteBranchesResponse} Successful response
		 */
		Dataform_projects_locations_repositories_fetchRemoteBranches(name: string): Observable<FetchRemoteBranchesResponse> {
			return this.http.get<FetchRemoteBranchesResponse>(this.baseUri + 'v1beta1/' + (name == null ? '' : encodeURIComponent(name)) + ':fetchRemoteBranches', {});
		}

		/**
		 * Pulls Git commits from the Repository's remote into a Workspace.
		 * Post v1beta1/{name}:pull
		 * @param {string} name Required. The workspace's name.
		 * @return {Empty} Successful response
		 */
		Dataform_projects_locations_repositories_workspaces_pull(name: string, requestBody: PullGitCommitsRequest): Observable<Empty> {
			return this.http.post<Empty>(this.baseUri + 'v1beta1/' + (name == null ? '' : encodeURIComponent(name)) + ':pull', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Pushes Git commits from a Workspace to the Repository's remote.
		 * Post v1beta1/{name}:push
		 * @param {string} name Required. The workspace's name.
		 * @return {Empty} Successful response
		 */
		Dataform_projects_locations_repositories_workspaces_push(name: string, requestBody: PushGitCommitsRequest): Observable<Empty> {
			return this.http.post<Empty>(this.baseUri + 'v1beta1/' + (name == null ? '' : encodeURIComponent(name)) + ':push', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns WorkflowInvocationActions in a given WorkflowInvocation.
		 * Get v1beta1/{name}:query
		 * @param {string} name Required. The workflow invocation's name.
		 * @param {number} pageSize Optional. Maximum number of workflow invocations to return. The server may return fewer items than requested. If unspecified, the server will pick an appropriate default.
		 * @param {string} pageToken Optional. Page token received from a previous `QueryWorkflowInvocationActions` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `QueryWorkflowInvocationActions` must match the call that provided the page token.
		 * @return {QueryWorkflowInvocationActionsResponse} Successful response
		 */
		Dataform_projects_locations_repositories_workflowInvocations_query(name: string, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<QueryWorkflowInvocationActionsResponse> {
			return this.http.get<QueryWorkflowInvocationActionsResponse>(this.baseUri + 'v1beta1/' + (name == null ? '' : encodeURIComponent(name)) + ':query&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Returns the contents of a given Repository directory. The Repository must not have a value for `git_remote_settings.url`.
		 * Get v1beta1/{name}:queryDirectoryContents
		 * @param {string} name Required. The repository's name.
		 * @param {string} commitSha Optional. The Commit SHA for the commit to query from. If unset, the directory will be queried from HEAD.
		 * @param {number} pageSize Optional. Maximum number of paths to return. The server may return fewer items than requested. If unspecified, the server will pick an appropriate default.
		 * @param {string} pageToken Optional. Page token received from a previous `QueryRepositoryDirectoryContents` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `QueryRepositoryDirectoryContents` must match the call that provided the page token.
		 * @param {string} path Optional. The directory's full path including directory name, relative to root. If left unset, the root is used.
		 * @return {QueryRepositoryDirectoryContentsResponse} Successful response
		 */
		Dataform_projects_locations_repositories_queryDirectoryContents(name: string, commitSha: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined, path: string | null | undefined): Observable<QueryRepositoryDirectoryContentsResponse> {
			return this.http.get<QueryRepositoryDirectoryContentsResponse>(this.baseUri + 'v1beta1/' + (name == null ? '' : encodeURIComponent(name)) + ':queryDirectoryContents&commitSha=' + (commitSha == null ? '' : encodeURIComponent(commitSha)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '&path=' + (path == null ? '' : encodeURIComponent(path)), {});
		}

		/**
		 * Returns the contents of a file (inside a Repository). The Repository must not have a value for `git_remote_settings.url`.
		 * Get v1beta1/{name}:readFile
		 * @param {string} name Required. The repository's name.
		 * @param {string} commitSha Optional. The commit SHA for the commit to read from. If unset, the file will be read from HEAD.
		 * @param {string} path Required. Full file path to read including filename, from repository root.
		 * @return {ReadRepositoryFileResponse} Successful response
		 */
		Dataform_projects_locations_repositories_readFile(name: string, commitSha: string | null | undefined, path: string | null | undefined): Observable<ReadRepositoryFileResponse> {
			return this.http.get<ReadRepositoryFileResponse>(this.baseUri + 'v1beta1/' + (name == null ? '' : encodeURIComponent(name)) + ':readFile&commitSha=' + (commitSha == null ? '' : encodeURIComponent(commitSha)) + '&path=' + (path == null ? '' : encodeURIComponent(path)), {});
		}

		/**
		 * Performs a Git reset for uncommitted files in a Workspace.
		 * Post v1beta1/{name}:reset
		 * @param {string} name Required. The workspace's name.
		 * @return {Empty} Successful response
		 */
		Dataform_projects_locations_repositories_workspaces_reset(name: string, requestBody: ResetWorkspaceChangesRequest): Observable<Empty> {
			return this.http.post<Empty>(this.baseUri + 'v1beta1/' + (name == null ? '' : encodeURIComponent(name)) + ':reset', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists CompilationResults in a given Repository.
		 * Get v1beta1/{parent}/compilationResults
		 * @param {string} parent Required. The repository in which to list compilation results. Must be in the format `projects/locations/repositories/*`.
		 * @param {number} pageSize Optional. Maximum number of compilation results to return. The server may return fewer items than requested. If unspecified, the server will pick an appropriate default.
		 * @param {string} pageToken Optional. Page token received from a previous `ListCompilationResults` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListCompilationResults` must match the call that provided the page token.
		 * @return {ListCompilationResultsResponse} Successful response
		 */
		Dataform_projects_locations_repositories_compilationResults_list(parent: string, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListCompilationResultsResponse> {
			return this.http.get<ListCompilationResultsResponse>(this.baseUri + 'v1beta1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/compilationResults&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Creates a new CompilationResult in a given project and location.
		 * Post v1beta1/{parent}/compilationResults
		 * @param {string} parent Required. The repository in which to create the compilation result. Must be in the format `projects/locations/repositories/*`.
		 * @return {CompilationResult} Successful response
		 */
		Dataform_projects_locations_repositories_compilationResults_create(parent: string, requestBody: CompilationResult): Observable<CompilationResult> {
			return this.http.post<CompilationResult>(this.baseUri + 'v1beta1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/compilationResults', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists ReleaseConfigs in a given Repository.
		 * Get v1beta1/{parent}/releaseConfigs
		 * @param {string} parent Required. The repository in which to list release configs. Must be in the format `projects/locations/repositories/*`.
		 * @param {number} pageSize Optional. Maximum number of release configs to return. The server may return fewer items than requested. If unspecified, the server will pick an appropriate default.
		 * @param {string} pageToken Optional. Page token received from a previous `ListReleaseConfigs` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListReleaseConfigs` must match the call that provided the page token.
		 * @return {ListReleaseConfigsResponse} Successful response
		 */
		Dataform_projects_locations_repositories_releaseConfigs_list(parent: string, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListReleaseConfigsResponse> {
			return this.http.get<ListReleaseConfigsResponse>(this.baseUri + 'v1beta1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/releaseConfigs&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Creates a new ReleaseConfig in a given Repository.
		 * Post v1beta1/{parent}/releaseConfigs
		 * @param {string} parent Required. The repository in which to create the release config. Must be in the format `projects/locations/repositories/*`.
		 * @param {string} releaseConfigId Required. The ID to use for the release config, which will become the final component of the release config's resource name.
		 * @return {ReleaseConfig} Successful response
		 */
		Dataform_projects_locations_repositories_releaseConfigs_create(parent: string, releaseConfigId: string | null | undefined, requestBody: ReleaseConfig): Observable<ReleaseConfig> {
			return this.http.post<ReleaseConfig>(this.baseUri + 'v1beta1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/releaseConfigs&releaseConfigId=' + (releaseConfigId == null ? '' : encodeURIComponent(releaseConfigId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists Repositories in a given project and location.
		 * Get v1beta1/{parent}/repositories
		 * @param {string} parent Required. The location in which to list repositories. Must be in the format `projects/locations/*`.
		 * @param {string} filter Optional. Filter for the returned list.
		 * @param {string} orderBy Optional. This field only supports ordering by `name`. If unspecified, the server will choose the ordering. If specified, the default order is ascending for the `name` field.
		 * @param {number} pageSize Optional. Maximum number of repositories to return. The server may return fewer items than requested. If unspecified, the server will pick an appropriate default.
		 * @param {string} pageToken Optional. Page token received from a previous `ListRepositories` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListRepositories` must match the call that provided the page token.
		 * @return {ListRepositoriesResponse} Successful response
		 */
		Dataform_projects_locations_repositories_list(parent: string, filter: string | null | undefined, orderBy: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListRepositoriesResponse> {
			return this.http.get<ListRepositoriesResponse>(this.baseUri + 'v1beta1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/repositories&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&orderBy=' + (orderBy == null ? '' : encodeURIComponent(orderBy)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Creates a new Repository in a given project and location.
		 * Post v1beta1/{parent}/repositories
		 * @param {string} parent Required. The location in which to create the repository. Must be in the format `projects/locations/*`.
		 * @param {string} repositoryId Required. The ID to use for the repository, which will become the final component of the repository's resource name.
		 * @return {Repository} Successful response
		 */
		Dataform_projects_locations_repositories_create(parent: string, repositoryId: string | null | undefined, requestBody: Repository): Observable<Repository> {
			return this.http.post<Repository>(this.baseUri + 'v1beta1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/repositories&repositoryId=' + (repositoryId == null ? '' : encodeURIComponent(repositoryId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists WorkflowConfigs in a given Repository.
		 * Get v1beta1/{parent}/workflowConfigs
		 * @param {string} parent Required. The repository in which to list workflow configs. Must be in the format `projects/locations/repositories/*`.
		 * @param {number} pageSize Optional. Maximum number of workflow configs to return. The server may return fewer items than requested. If unspecified, the server will pick an appropriate default.
		 * @param {string} pageToken Optional. Page token received from a previous `ListWorkflowConfigs` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListWorkflowConfigs` must match the call that provided the page token.
		 * @return {ListWorkflowConfigsResponse} Successful response
		 */
		Dataform_projects_locations_repositories_workflowConfigs_list(parent: string, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListWorkflowConfigsResponse> {
			return this.http.get<ListWorkflowConfigsResponse>(this.baseUri + 'v1beta1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/workflowConfigs&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Creates a new WorkflowConfig in a given Repository.
		 * Post v1beta1/{parent}/workflowConfigs
		 * @param {string} parent Required. The repository in which to create the workflow config. Must be in the format `projects/locations/repositories/*`.
		 * @param {string} workflowConfigId Required. The ID to use for the workflow config, which will become the final component of the workflow config's resource name.
		 * @return {WorkflowConfig} Successful response
		 */
		Dataform_projects_locations_repositories_workflowConfigs_create(parent: string, workflowConfigId: string | null | undefined, requestBody: WorkflowConfig): Observable<WorkflowConfig> {
			return this.http.post<WorkflowConfig>(this.baseUri + 'v1beta1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/workflowConfigs&workflowConfigId=' + (workflowConfigId == null ? '' : encodeURIComponent(workflowConfigId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists WorkflowInvocations in a given Repository.
		 * Get v1beta1/{parent}/workflowInvocations
		 * @param {string} parent Required. The parent resource of the WorkflowInvocation type. Must be in the format `projects/locations/repositories/*`.
		 * @param {string} filter Optional. Filter for the returned list.
		 * @param {string} orderBy Optional. This field only supports ordering by `name`. If unspecified, the server will choose the ordering. If specified, the default order is ascending for the `name` field.
		 * @param {number} pageSize Optional. Maximum number of workflow invocations to return. The server may return fewer items than requested. If unspecified, the server will pick an appropriate default.
		 * @param {string} pageToken Optional. Page token received from a previous `ListWorkflowInvocations` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListWorkflowInvocations` must match the call that provided the page token.
		 * @return {ListWorkflowInvocationsResponse} Successful response
		 */
		Dataform_projects_locations_repositories_workflowInvocations_list(parent: string, filter: string | null | undefined, orderBy: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListWorkflowInvocationsResponse> {
			return this.http.get<ListWorkflowInvocationsResponse>(this.baseUri + 'v1beta1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/workflowInvocations&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&orderBy=' + (orderBy == null ? '' : encodeURIComponent(orderBy)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Creates a new WorkflowInvocation in a given Repository.
		 * Post v1beta1/{parent}/workflowInvocations
		 * @param {string} parent Required. The repository in which to create the workflow invocation. Must be in the format `projects/locations/repositories/*`.
		 * @return {WorkflowInvocation} Successful response
		 */
		Dataform_projects_locations_repositories_workflowInvocations_create(parent: string, requestBody: WorkflowInvocation): Observable<WorkflowInvocation> {
			return this.http.post<WorkflowInvocation>(this.baseUri + 'v1beta1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/workflowInvocations', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists Workspaces in a given Repository.
		 * Get v1beta1/{parent}/workspaces
		 * @param {string} parent Required. The repository in which to list workspaces. Must be in the format `projects/locations/repositories/*`.
		 * @param {string} filter Optional. Filter for the returned list.
		 * @param {string} orderBy Optional. This field only supports ordering by `name`. If unspecified, the server will choose the ordering. If specified, the default order is ascending for the `name` field.
		 * @param {number} pageSize Optional. Maximum number of workspaces to return. The server may return fewer items than requested. If unspecified, the server will pick an appropriate default.
		 * @param {string} pageToken Optional. Page token received from a previous `ListWorkspaces` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListWorkspaces` must match the call that provided the page token.
		 * @return {ListWorkspacesResponse} Successful response
		 */
		Dataform_projects_locations_repositories_workspaces_list(parent: string, filter: string | null | undefined, orderBy: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListWorkspacesResponse> {
			return this.http.get<ListWorkspacesResponse>(this.baseUri + 'v1beta1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/workspaces&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&orderBy=' + (orderBy == null ? '' : encodeURIComponent(orderBy)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Creates a new Workspace in a given Repository.
		 * Post v1beta1/{parent}/workspaces
		 * @param {string} parent Required. The repository in which to create the workspace. Must be in the format `projects/locations/repositories/*`.
		 * @param {string} workspaceId Required. The ID to use for the workspace, which will become the final component of the workspace's resource name.
		 * @return {Workspace} Successful response
		 */
		Dataform_projects_locations_repositories_workspaces_create(parent: string, workspaceId: string | null | undefined, requestBody: Workspace): Observable<Workspace> {
			return this.http.post<Workspace>(this.baseUri + 'v1beta1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/workspaces&workspaceId=' + (workspaceId == null ? '' : encodeURIComponent(workspaceId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
		 * Get v1beta1/{resource}:getIamPolicy
		 * @param {string} resource REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
		 * @param {number} options_requestedPolicyVersion Optional. The maximum policy version that will be used to format the policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset. The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies).
		 * @return {Policy} Successful response
		 */
		Dataform_projects_locations_repositories_workspaces_getIamPolicy(resource: string, options_requestedPolicyVersion: number | null | undefined): Observable<Policy> {
			return this.http.get<Policy>(this.baseUri + 'v1beta1/' + (resource == null ? '' : encodeURIComponent(resource)) + ':getIamPolicy&options_requestedPolicyVersion=' + options_requestedPolicyVersion, {});
		}

		/**
		 * Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
		 * Post v1beta1/{resource}:setIamPolicy
		 * @param {string} resource REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
		 * @return {Policy} Successful response
		 */
		Dataform_projects_locations_repositories_workspaces_setIamPolicy(resource: string, requestBody: SetIamPolicyRequest): Observable<Policy> {
			return this.http.post<Policy>(this.baseUri + 'v1beta1/' + (resource == null ? '' : encodeURIComponent(resource)) + ':setIamPolicy', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
		 * Post v1beta1/{resource}:testIamPermissions
		 * @param {string} resource REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
		 * @return {TestIamPermissionsResponse} Successful response
		 */
		Dataform_projects_locations_repositories_workspaces_testIamPermissions(resource: string, requestBody: TestIamPermissionsRequest): Observable<TestIamPermissionsResponse> {
			return this.http.post<TestIamPermissionsResponse>(this.baseUri + 'v1beta1/' + (resource == null ? '' : encodeURIComponent(resource)) + ':testIamPermissions', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Fetches Git diff for an uncommitted file in a Workspace.
		 * Get v1beta1/{workspace}:fetchFileDiff
		 * @param {string} workspace Required. The workspace's name.
		 * @param {string} path Required. The file's full path including filename, relative to the workspace root.
		 * @return {FetchFileDiffResponse} Successful response
		 */
		Dataform_projects_locations_repositories_workspaces_fetchFileDiff(workspace: string, path: string | null | undefined): Observable<FetchFileDiffResponse> {
			return this.http.get<FetchFileDiffResponse>(this.baseUri + 'v1beta1/' + (workspace == null ? '' : encodeURIComponent(workspace)) + ':fetchFileDiff&path=' + (path == null ? '' : encodeURIComponent(path)), {});
		}

		/**
		 * Installs dependency NPM packages (inside a Workspace).
		 * Post v1beta1/{workspace}:installNpmPackages
		 * @param {string} workspace Required. The workspace's name.
		 * @return {InstallNpmPackagesResponse} Successful response
		 */
		Dataform_projects_locations_repositories_workspaces_installNpmPackages(workspace: string, requestBody: InstallNpmPackagesRequest): Observable<InstallNpmPackagesResponse> {
			return this.http.post<InstallNpmPackagesResponse>(this.baseUri + 'v1beta1/' + (workspace == null ? '' : encodeURIComponent(workspace)) + ':installNpmPackages', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Creates a directory inside a Workspace.
		 * Post v1beta1/{workspace}:makeDirectory
		 * @param {string} workspace Required. The workspace's name.
		 * @return {MakeDirectoryResponse} Successful response
		 */
		Dataform_projects_locations_repositories_workspaces_makeDirectory(workspace: string, requestBody: MakeDirectoryRequest): Observable<MakeDirectoryResponse> {
			return this.http.post<MakeDirectoryResponse>(this.baseUri + 'v1beta1/' + (workspace == null ? '' : encodeURIComponent(workspace)) + ':makeDirectory', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Moves a directory (inside a Workspace), and all of its contents, to a new location.
		 * Post v1beta1/{workspace}:moveDirectory
		 * @param {string} workspace Required. The workspace's name.
		 * @return {MoveDirectoryResponse} Successful response
		 */
		Dataform_projects_locations_repositories_workspaces_moveDirectory(workspace: string, requestBody: MoveDirectoryRequest): Observable<MoveDirectoryResponse> {
			return this.http.post<MoveDirectoryResponse>(this.baseUri + 'v1beta1/' + (workspace == null ? '' : encodeURIComponent(workspace)) + ':moveDirectory', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Moves a file (inside a Workspace) to a new location.
		 * Post v1beta1/{workspace}:moveFile
		 * @param {string} workspace Required. The workspace's name.
		 * @return {MoveFileResponse} Successful response
		 */
		Dataform_projects_locations_repositories_workspaces_moveFile(workspace: string, requestBody: MoveFileRequest): Observable<MoveFileResponse> {
			return this.http.post<MoveFileResponse>(this.baseUri + 'v1beta1/' + (workspace == null ? '' : encodeURIComponent(workspace)) + ':moveFile', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns the contents of a given Workspace directory.
		 * Get v1beta1/{workspace}:queryDirectoryContents
		 * @param {string} workspace Required. The workspace's name.
		 * @param {number} pageSize Optional. Maximum number of paths to return. The server may return fewer items than requested. If unspecified, the server will pick an appropriate default.
		 * @param {string} pageToken Optional. Page token received from a previous `QueryDirectoryContents` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `QueryDirectoryContents` must match the call that provided the page token.
		 * @param {string} path Optional. The directory's full path including directory name, relative to the workspace root. If left unset, the workspace root is used.
		 * @return {QueryDirectoryContentsResponse} Successful response
		 */
		Dataform_projects_locations_repositories_workspaces_queryDirectoryContents(workspace: string, pageSize: number | null | undefined, pageToken: string | null | undefined, path: string | null | undefined): Observable<QueryDirectoryContentsResponse> {
			return this.http.get<QueryDirectoryContentsResponse>(this.baseUri + 'v1beta1/' + (workspace == null ? '' : encodeURIComponent(workspace)) + ':queryDirectoryContents&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '&path=' + (path == null ? '' : encodeURIComponent(path)), {});
		}

		/**
		 * Returns the contents of a file (inside a Workspace).
		 * Get v1beta1/{workspace}:readFile
		 * @param {string} workspace Required. The workspace's name.
		 * @param {string} path Required. The file's full path including filename, relative to the workspace root.
		 * @return {ReadFileResponse} Successful response
		 */
		Dataform_projects_locations_repositories_workspaces_readFile(workspace: string, path: string | null | undefined): Observable<ReadFileResponse> {
			return this.http.get<ReadFileResponse>(this.baseUri + 'v1beta1/' + (workspace == null ? '' : encodeURIComponent(workspace)) + ':readFile&path=' + (path == null ? '' : encodeURIComponent(path)), {});
		}

		/**
		 * Deletes a directory (inside a Workspace) and all of its contents.
		 * Post v1beta1/{workspace}:removeDirectory
		 * @param {string} workspace Required. The workspace's name.
		 * @return {Empty} Successful response
		 */
		Dataform_projects_locations_repositories_workspaces_removeDirectory(workspace: string, requestBody: RemoveDirectoryRequest): Observable<Empty> {
			return this.http.post<Empty>(this.baseUri + 'v1beta1/' + (workspace == null ? '' : encodeURIComponent(workspace)) + ':removeDirectory', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a file (inside a Workspace).
		 * Post v1beta1/{workspace}:removeFile
		 * @param {string} workspace Required. The workspace's name.
		 * @return {Empty} Successful response
		 */
		Dataform_projects_locations_repositories_workspaces_removeFile(workspace: string, requestBody: RemoveFileRequest): Observable<Empty> {
			return this.http.post<Empty>(this.baseUri + 'v1beta1/' + (workspace == null ? '' : encodeURIComponent(workspace)) + ':removeFile', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Finds the contents of a given Workspace directory by filter.
		 * Get v1beta1/{workspace}:searchFiles
		 * @param {string} workspace Required. The workspace's name.
		 * @param {string} filter Optional. Optional filter for the returned list in filtering format. Filtering is only currently supported on the `path` field. See https://google.aip.dev/160 for details.
		 * @param {number} pageSize Optional. Maximum number of search results to return. The server may return fewer items than requested. If unspecified, the server will pick an appropriate default.
		 * @param {string} pageToken Optional. Page token received from a previous `SearchFilesRequest` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `SearchFilesRequest` must match the call that provided the page token.
		 * @return {SearchFilesResponse} Successful response
		 */
		Dataform_projects_locations_repositories_workspaces_searchFiles(workspace: string, filter: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<SearchFilesResponse> {
			return this.http.get<SearchFilesResponse>(this.baseUri + 'v1beta1/' + (workspace == null ? '' : encodeURIComponent(workspace)) + ':searchFiles&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Writes to a file (inside a Workspace).
		 * Post v1beta1/{workspace}:writeFile
		 * @param {string} workspace Required. The workspace's name.
		 * @return {WriteFileResponse} Successful response
		 */
		Dataform_projects_locations_repositories_workspaces_writeFile(workspace: string, requestBody: WriteFileRequest): Observable<WriteFileResponse> {
			return this.http.post<WriteFileResponse>(this.baseUri + 'v1beta1/' + (workspace == null ? '' : encodeURIComponent(workspace)) + ':writeFile', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

}

