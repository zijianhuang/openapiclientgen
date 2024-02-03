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


	/** Security patches are applied automatically to the runtime without requiring the function to be redeployed. */
	export interface AutomaticUpdatePolicy {
	}

	/** Security patches are applied automatically to the runtime without requiring the function to be redeployed. */
	export interface AutomaticUpdatePolicyFormProperties {
	}
	export function CreateAutomaticUpdatePolicyFormGroup() {
		return new FormGroup<AutomaticUpdatePolicyFormProperties>({
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


	/** Describes the Build step of the function that builds a container from the given source. */
	export interface BuildConfig {

		/** Security patches are applied automatically to the runtime without requiring the function to be redeployed. */
		automaticUpdatePolicy?: AutomaticUpdatePolicy;

		/** Output only. The Cloud Build name of the latest successful deployment of the function. */
		build?: string | null;

		/** Docker Registry to use for this deployment. This configuration is only applicable to 1st Gen functions, 2nd Gen functions can only use Artifact Registry. If `docker_repository` field is specified, this field will be automatically set as `ARTIFACT_REGISTRY`. If unspecified, it currently defaults to `CONTAINER_REGISTRY`. This field may be overridden by the backend for eligible deployments. */
		dockerRegistry?: BuildConfigDockerRegistry | null;

		/** Repository in Artifact Registry to which the function docker image will be pushed after it is built by Cloud Build. If specified by user, it is created and managed by user with a customer managed encryption key. Otherwise, GCF will create and use a repository named 'gcf-artifacts' for every deployed region. It must match the pattern `projects/{project}/locations/{location}/repositories/{repository}`. Cross-project repositories are not supported. Cross-location repositories are not supported. Repository format must be 'DOCKER'. */
		dockerRepository?: string | null;

		/** The name of the function (as defined in source code) that will be executed. Defaults to the resource name suffix, if not specified. For backward compatibility, if function with given name is not found, then the system will try to use function named "function". For Node.js this is name of a function exported by the module specified in `source_location`. */
		entryPoint?: string | null;

		/** User-provided build-time environment variables for the function */
		environmentVariables?: {[id: string]: string };

		/** Security patches are only applied when a function is redeployed. */
		onDeployUpdatePolicy?: OnDeployUpdatePolicy;

		/** The runtime in which to run the function. Required when deploying a new function, optional when updating an existing function. For a complete list of possible choices, see the [`gcloud` command reference](https://cloud.google.com/sdk/gcloud/reference/functions/deploy#--runtime). */
		runtime?: string | null;

		/** [Preview] Service account to be used for building the container */
		serviceAccount?: string | null;

		/** The location of the function source code. */
		source?: Source;

		/** Provenance of the source. Ways to find the original source, or verify that some source was used for this build. */
		sourceProvenance?: SourceProvenance;

		/** An identifier for Firebase function sources. Disclaimer: This field is only supported for Firebase function deployments. */
		sourceToken?: string | null;

		/** Name of the Cloud Build Custom Worker Pool that should be used to build the function. The format of this field is `projects/{project}/locations/{region}/workerPools/{workerPool}` where {project} and {region} are the project id and region respectively where the worker pool is defined and {workerPool} is the short name of the worker pool. If the project id is not the same as the function, then the Cloud Functions Service Agent (service-@gcf-admin-robot.iam.gserviceaccount.com) must be granted the role Cloud Build Custom Workers Builder (roles/cloudbuild.customworkers.builder) in the project. */
		workerPool?: string | null;
	}

	/** Describes the Build step of the function that builds a container from the given source. */
	export interface BuildConfigFormProperties {

		/** Output only. The Cloud Build name of the latest successful deployment of the function. */
		build: FormControl<string | null | undefined>,

		/** Docker Registry to use for this deployment. This configuration is only applicable to 1st Gen functions, 2nd Gen functions can only use Artifact Registry. If `docker_repository` field is specified, this field will be automatically set as `ARTIFACT_REGISTRY`. If unspecified, it currently defaults to `CONTAINER_REGISTRY`. This field may be overridden by the backend for eligible deployments. */
		dockerRegistry: FormControl<BuildConfigDockerRegistry | null | undefined>,

		/** Repository in Artifact Registry to which the function docker image will be pushed after it is built by Cloud Build. If specified by user, it is created and managed by user with a customer managed encryption key. Otherwise, GCF will create and use a repository named 'gcf-artifacts' for every deployed region. It must match the pattern `projects/{project}/locations/{location}/repositories/{repository}`. Cross-project repositories are not supported. Cross-location repositories are not supported. Repository format must be 'DOCKER'. */
		dockerRepository: FormControl<string | null | undefined>,

		/** The name of the function (as defined in source code) that will be executed. Defaults to the resource name suffix, if not specified. For backward compatibility, if function with given name is not found, then the system will try to use function named "function". For Node.js this is name of a function exported by the module specified in `source_location`. */
		entryPoint: FormControl<string | null | undefined>,

		/** User-provided build-time environment variables for the function */
		environmentVariables: FormControl<{[id: string]: string } | null | undefined>,

		/** The runtime in which to run the function. Required when deploying a new function, optional when updating an existing function. For a complete list of possible choices, see the [`gcloud` command reference](https://cloud.google.com/sdk/gcloud/reference/functions/deploy#--runtime). */
		runtime: FormControl<string | null | undefined>,

		/** [Preview] Service account to be used for building the container */
		serviceAccount: FormControl<string | null | undefined>,

		/** An identifier for Firebase function sources. Disclaimer: This field is only supported for Firebase function deployments. */
		sourceToken: FormControl<string | null | undefined>,

		/** Name of the Cloud Build Custom Worker Pool that should be used to build the function. The format of this field is `projects/{project}/locations/{region}/workerPools/{workerPool}` where {project} and {region} are the project id and region respectively where the worker pool is defined and {workerPool} is the short name of the worker pool. If the project id is not the same as the function, then the Cloud Functions Service Agent (service-@gcf-admin-robot.iam.gserviceaccount.com) must be granted the role Cloud Build Custom Workers Builder (roles/cloudbuild.customworkers.builder) in the project. */
		workerPool: FormControl<string | null | undefined>,
	}
	export function CreateBuildConfigFormGroup() {
		return new FormGroup<BuildConfigFormProperties>({
			build: new FormControl<string | null | undefined>(undefined),
			dockerRegistry: new FormControl<BuildConfigDockerRegistry | null | undefined>(undefined),
			dockerRepository: new FormControl<string | null | undefined>(undefined),
			entryPoint: new FormControl<string | null | undefined>(undefined),
			environmentVariables: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			runtime: new FormControl<string | null | undefined>(undefined),
			serviceAccount: new FormControl<string | null | undefined>(undefined),
			sourceToken: new FormControl<string | null | undefined>(undefined),
			workerPool: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum BuildConfigDockerRegistry { DOCKER_REGISTRY_UNSPECIFIED = 'DOCKER_REGISTRY_UNSPECIFIED', CONTAINER_REGISTRY = 'CONTAINER_REGISTRY', ARTIFACT_REGISTRY = 'ARTIFACT_REGISTRY' }


	/** Security patches are only applied when a function is redeployed. */
	export interface OnDeployUpdatePolicy {

		/** Output only. contains the runtime version which was used during latest function deployment. */
		runtimeVersion?: string | null;
	}

	/** Security patches are only applied when a function is redeployed. */
	export interface OnDeployUpdatePolicyFormProperties {

		/** Output only. contains the runtime version which was used during latest function deployment. */
		runtimeVersion: FormControl<string | null | undefined>,
	}
	export function CreateOnDeployUpdatePolicyFormGroup() {
		return new FormGroup<OnDeployUpdatePolicyFormProperties>({
			runtimeVersion: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The location of the function source code. */
	export interface Source {

		/** If provided, get the source from GitHub repository. This option is valid only for GCF 1st Gen function. Example: https://github.com///blob// */
		gitUri?: string | null;

		/** Location of the source in a Google Cloud Source Repository. */
		repoSource?: RepoSource;

		/** Location of the source in an archive file in Google Cloud Storage. */
		storageSource?: StorageSource;
	}

	/** The location of the function source code. */
	export interface SourceFormProperties {

		/** If provided, get the source from GitHub repository. This option is valid only for GCF 1st Gen function. Example: https://github.com///blob// */
		gitUri: FormControl<string | null | undefined>,
	}
	export function CreateSourceFormGroup() {
		return new FormGroup<SourceFormProperties>({
			gitUri: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Location of the source in a Google Cloud Source Repository. */
	export interface RepoSource {

		/** Regex matching branches to build. The syntax of the regular expressions accepted is the syntax accepted by RE2 and described at https://github.com/google/re2/wiki/Syntax */
		branchName?: string | null;

		/** Explicit commit SHA to build. */
		commitSha?: string | null;

		/** Directory, relative to the source root, in which to run the build. This must be a relative path. If a step's `dir` is specified and is an absolute path, this value is ignored for that step's execution. eg. helloworld (no leading slash allowed) */
		dir?: string | null;

		/** ID of the project that owns the Cloud Source Repository. If omitted, the project ID requesting the build is assumed. */
		projectId?: string | null;

		/** Name of the Cloud Source Repository. */
		repoName?: string | null;

		/** Regex matching tags to build. The syntax of the regular expressions accepted is the syntax accepted by RE2 and described at https://github.com/google/re2/wiki/Syntax */
		tagName?: string | null;
	}

	/** Location of the source in a Google Cloud Source Repository. */
	export interface RepoSourceFormProperties {

		/** Regex matching branches to build. The syntax of the regular expressions accepted is the syntax accepted by RE2 and described at https://github.com/google/re2/wiki/Syntax */
		branchName: FormControl<string | null | undefined>,

		/** Explicit commit SHA to build. */
		commitSha: FormControl<string | null | undefined>,

		/** Directory, relative to the source root, in which to run the build. This must be a relative path. If a step's `dir` is specified and is an absolute path, this value is ignored for that step's execution. eg. helloworld (no leading slash allowed) */
		dir: FormControl<string | null | undefined>,

		/** ID of the project that owns the Cloud Source Repository. If omitted, the project ID requesting the build is assumed. */
		projectId: FormControl<string | null | undefined>,

		/** Name of the Cloud Source Repository. */
		repoName: FormControl<string | null | undefined>,

		/** Regex matching tags to build. The syntax of the regular expressions accepted is the syntax accepted by RE2 and described at https://github.com/google/re2/wiki/Syntax */
		tagName: FormControl<string | null | undefined>,
	}
	export function CreateRepoSourceFormGroup() {
		return new FormGroup<RepoSourceFormProperties>({
			branchName: new FormControl<string | null | undefined>(undefined),
			commitSha: new FormControl<string | null | undefined>(undefined),
			dir: new FormControl<string | null | undefined>(undefined),
			projectId: new FormControl<string | null | undefined>(undefined),
			repoName: new FormControl<string | null | undefined>(undefined),
			tagName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Location of the source in an archive file in Google Cloud Storage. */
	export interface StorageSource {

		/** Google Cloud Storage bucket containing the source (see [Bucket Name Requirements](https://cloud.google.com/storage/docs/bucket-naming#requirements)). */
		bucket?: string | null;

		/** Google Cloud Storage generation for the object. If the generation is omitted, the latest generation will be used. */
		generation?: string | null;

		/** Google Cloud Storage object containing the source. This object must be a gzipped archive file (`.tar.gz`) containing source to build. */
		object?: string | null;
	}

	/** Location of the source in an archive file in Google Cloud Storage. */
	export interface StorageSourceFormProperties {

		/** Google Cloud Storage bucket containing the source (see [Bucket Name Requirements](https://cloud.google.com/storage/docs/bucket-naming#requirements)). */
		bucket: FormControl<string | null | undefined>,

		/** Google Cloud Storage generation for the object. If the generation is omitted, the latest generation will be used. */
		generation: FormControl<string | null | undefined>,

		/** Google Cloud Storage object containing the source. This object must be a gzipped archive file (`.tar.gz`) containing source to build. */
		object: FormControl<string | null | undefined>,
	}
	export function CreateStorageSourceFormGroup() {
		return new FormGroup<StorageSourceFormProperties>({
			bucket: new FormControl<string | null | undefined>(undefined),
			generation: new FormControl<string | null | undefined>(undefined),
			object: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Provenance of the source. Ways to find the original source, or verify that some source was used for this build. */
	export interface SourceProvenance {

		/** A copy of the build's `source.git_uri`, if exists, with any commits resolved. */
		gitUri?: string | null;

		/** Location of the source in a Google Cloud Source Repository. */
		resolvedRepoSource?: RepoSource;

		/** Location of the source in an archive file in Google Cloud Storage. */
		resolvedStorageSource?: StorageSource;
	}

	/** Provenance of the source. Ways to find the original source, or verify that some source was used for this build. */
	export interface SourceProvenanceFormProperties {

		/** A copy of the build's `source.git_uri`, if exists, with any commits resolved. */
		gitUri: FormControl<string | null | undefined>,
	}
	export function CreateSourceProvenanceFormGroup() {
		return new FormGroup<SourceProvenanceFormProperties>({
			gitUri: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents a whole or partial calendar date, such as a birthday. The time of day and time zone are either specified elsewhere or are insignificant. The date is relative to the Gregorian Calendar. This can represent one of the following: * A full date, with non-zero year, month, and day values. * A month and day, with a zero year (for example, an anniversary). * A year on its own, with a zero month and a zero day. * A year and month, with a zero day (for example, a credit card expiration date). Related types: * google.type.TimeOfDay * google.type.DateTime * google.protobuf.Timestamp */
	export interface Date {

		/** Day of a month. Must be from 1 to 31 and valid for the year and month, or 0 to specify a year by itself or a year and month where the day isn't significant. */
		day?: number | null;

		/** Month of a year. Must be from 1 to 12, or 0 to specify a year without a month and day. */
		month?: number | null;

		/** Year of the date. Must be from 1 to 9999, or 0 to specify a date without a year. */
		year?: number | null;
	}

	/** Represents a whole or partial calendar date, such as a birthday. The time of day and time zone are either specified elsewhere or are insignificant. The date is relative to the Gregorian Calendar. This can represent one of the following: * A full date, with non-zero year, month, and day values. * A month and day, with a zero year (for example, an anniversary). * A year on its own, with a zero month and a zero day. * A year and month, with a zero day (for example, a credit card expiration date). Related types: * google.type.TimeOfDay * google.type.DateTime * google.protobuf.Timestamp */
	export interface DateFormProperties {

		/** Day of a month. Must be from 1 to 31 and valid for the year and month, or 0 to specify a year by itself or a year and month where the day isn't significant. */
		day: FormControl<number | null | undefined>,

		/** Month of a year. Must be from 1 to 12, or 0 to specify a year without a month and day. */
		month: FormControl<number | null | undefined>,

		/** Year of the date. Must be from 1 to 9999, or 0 to specify a date without a year. */
		year: FormControl<number | null | undefined>,
	}
	export function CreateDateFormGroup() {
		return new FormGroup<DateFormProperties>({
			day: new FormControl<number | null | undefined>(undefined),
			month: new FormControl<number | null | undefined>(undefined),
			year: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Filters events based on exact matches on the CloudEvents attributes. */
	export interface EventFilter {

		/** Required. The name of a CloudEvents attribute. */
		attribute?: string | null;

		/** Optional. The operator used for matching the events with the value of the filter. If not specified, only events that have an exact key-value pair specified in the filter are matched. The only allowed value is `match-path-pattern`. */
		operator?: string | null;

		/** Required. The value for the attribute. */
		value?: string | null;
	}

	/** Filters events based on exact matches on the CloudEvents attributes. */
	export interface EventFilterFormProperties {

		/** Required. The name of a CloudEvents attribute. */
		attribute: FormControl<string | null | undefined>,

		/** Optional. The operator used for matching the events with the value of the filter. If not specified, only events that have an exact key-value pair specified in the filter are matched. The only allowed value is `match-path-pattern`. */
		operator: FormControl<string | null | undefined>,

		/** Required. The value for the attribute. */
		value: FormControl<string | null | undefined>,
	}
	export function CreateEventFilterFormGroup() {
		return new FormGroup<EventFilterFormProperties>({
			attribute: new FormControl<string | null | undefined>(undefined),
			operator: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Describes EventTrigger, used to request events to be sent from another service. */
	export interface EventTrigger {

		/** Optional. The name of the channel associated with the trigger in `projects/{project}/locations/{location}/channels/{channel}` format. You must provide a channel to receive events from Eventarc SaaS partners. */
		channel?: string | null;

		/** Criteria used to filter events. */
		eventFilters?: Array<EventFilter>;

		/** Required. The type of event to observe. For example: `google.cloud.audit.log.v1.written` or `google.cloud.pubsub.topic.v1.messagePublished`. */
		eventType?: string | null;

		/** Optional. The name of a Pub/Sub topic in the same project that will be used as the transport topic for the event delivery. Format: `projects/{project}/topics/{topic}`. This is only valid for events of type `google.cloud.pubsub.topic.v1.messagePublished`. The topic provided here will not be deleted at function deletion. */
		pubsubTopic?: string | null;

		/** Optional. If unset, then defaults to ignoring failures (i.e. not retrying them). */
		retryPolicy?: EventTriggerRetryPolicy | null;

		/** Optional. The hostname of the service that 1st Gen function should be observed. If no string is provided, the default service implementing the API will be used. For example, `storage.googleapis.com` is the default for all event types in the `google.storage` namespace. The field is only applicable to 1st Gen functions. */
		service?: string | null;

		/** Optional. The email of the trigger's service account. The service account must have permission to invoke Cloud Run services, the permission is `run.routes.invoke`. If empty, defaults to the Compute Engine default service account: `{project_number}-compute@developer.gserviceaccount.com`. */
		serviceAccountEmail?: string | null;

		/** Output only. The resource name of the Eventarc trigger. The format of this field is `projects/{project}/locations/{region}/triggers/{trigger}`. */
		trigger?: string | null;

		/** The region that the trigger will be in. The trigger will only receive events originating in this region. It can be the same region as the function, a different region or multi-region, or the global region. If not provided, defaults to the same region as the function. */
		triggerRegion?: string | null;
	}

	/** Describes EventTrigger, used to request events to be sent from another service. */
	export interface EventTriggerFormProperties {

		/** Optional. The name of the channel associated with the trigger in `projects/{project}/locations/{location}/channels/{channel}` format. You must provide a channel to receive events from Eventarc SaaS partners. */
		channel: FormControl<string | null | undefined>,

		/** Required. The type of event to observe. For example: `google.cloud.audit.log.v1.written` or `google.cloud.pubsub.topic.v1.messagePublished`. */
		eventType: FormControl<string | null | undefined>,

		/** Optional. The name of a Pub/Sub topic in the same project that will be used as the transport topic for the event delivery. Format: `projects/{project}/topics/{topic}`. This is only valid for events of type `google.cloud.pubsub.topic.v1.messagePublished`. The topic provided here will not be deleted at function deletion. */
		pubsubTopic: FormControl<string | null | undefined>,

		/** Optional. If unset, then defaults to ignoring failures (i.e. not retrying them). */
		retryPolicy: FormControl<EventTriggerRetryPolicy | null | undefined>,

		/** Optional. The hostname of the service that 1st Gen function should be observed. If no string is provided, the default service implementing the API will be used. For example, `storage.googleapis.com` is the default for all event types in the `google.storage` namespace. The field is only applicable to 1st Gen functions. */
		service: FormControl<string | null | undefined>,

		/** Optional. The email of the trigger's service account. The service account must have permission to invoke Cloud Run services, the permission is `run.routes.invoke`. If empty, defaults to the Compute Engine default service account: `{project_number}-compute@developer.gserviceaccount.com`. */
		serviceAccountEmail: FormControl<string | null | undefined>,

		/** Output only. The resource name of the Eventarc trigger. The format of this field is `projects/{project}/locations/{region}/triggers/{trigger}`. */
		trigger: FormControl<string | null | undefined>,

		/** The region that the trigger will be in. The trigger will only receive events originating in this region. It can be the same region as the function, a different region or multi-region, or the global region. If not provided, defaults to the same region as the function. */
		triggerRegion: FormControl<string | null | undefined>,
	}
	export function CreateEventTriggerFormGroup() {
		return new FormGroup<EventTriggerFormProperties>({
			channel: new FormControl<string | null | undefined>(undefined),
			eventType: new FormControl<string | null | undefined>(undefined),
			pubsubTopic: new FormControl<string | null | undefined>(undefined),
			retryPolicy: new FormControl<EventTriggerRetryPolicy | null | undefined>(undefined),
			service: new FormControl<string | null | undefined>(undefined),
			serviceAccountEmail: new FormControl<string | null | undefined>(undefined),
			trigger: new FormControl<string | null | undefined>(undefined),
			triggerRegion: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum EventTriggerRetryPolicy { RETRY_POLICY_UNSPECIFIED = 'RETRY_POLICY_UNSPECIFIED', RETRY_POLICY_DO_NOT_RETRY = 'RETRY_POLICY_DO_NOT_RETRY', RETRY_POLICY_RETRY = 'RETRY_POLICY_RETRY' }


	/** Describes a Cloud Function that contains user computation executed in response to an event. It encapsulates function and trigger configurations. */
	export interface Function {

		/** Describes the Build step of the function that builds a container from the given source. */
		buildConfig?: BuildConfig;

		/** User-provided description of a function. */
		description?: string | null;

		/** Describe whether the function is 1st Gen or 2nd Gen. */
		environment?: FunctionEnvironment | null;

		/** Describes EventTrigger, used to request events to be sent from another service. */
		eventTrigger?: EventTrigger;

		/** [Preview] Resource name of a KMS crypto key (managed by the user) used to encrypt/decrypt function resources. It must match the pattern `projects/{project}/locations/{location}/keyRings/{key_ring}/cryptoKeys/{crypto_key}`. */
		kmsKeyName?: string | null;

		/** Labels associated with this Cloud Function. */
		labels?: {[id: string]: string };

		/** A user-defined name of the function. Function names must be unique globally and match pattern `projects/locations/functions/*` */
		name?: string | null;

		/** Output only. Reserved for future use. */
		satisfiesPzs?: boolean | null;

		/** Describes the Service being deployed. Currently Supported : Cloud Run (fully managed). */
		serviceConfig?: ServiceConfig;

		/** Output only. State of the function. */
		state?: FunctionState | null;

		/** Output only. State Messages for this Cloud Function. */
		stateMessages?: Array<GoogleCloudFunctionsV2betaStateMessage>;

		/** Output only. The last update timestamp of a Cloud Function. */
		updateTime?: string | null;

		/** Output only. The deployed url for the function. */
		url?: string | null;
	}

	/** Describes a Cloud Function that contains user computation executed in response to an event. It encapsulates function and trigger configurations. */
	export interface FunctionFormProperties {

		/** User-provided description of a function. */
		description: FormControl<string | null | undefined>,

		/** Describe whether the function is 1st Gen or 2nd Gen. */
		environment: FormControl<FunctionEnvironment | null | undefined>,

		/** [Preview] Resource name of a KMS crypto key (managed by the user) used to encrypt/decrypt function resources. It must match the pattern `projects/{project}/locations/{location}/keyRings/{key_ring}/cryptoKeys/{crypto_key}`. */
		kmsKeyName: FormControl<string | null | undefined>,

		/** Labels associated with this Cloud Function. */
		labels: FormControl<{[id: string]: string } | null | undefined>,

		/** A user-defined name of the function. Function names must be unique globally and match pattern `projects/locations/functions/*` */
		name: FormControl<string | null | undefined>,

		/** Output only. Reserved for future use. */
		satisfiesPzs: FormControl<boolean | null | undefined>,

		/** Output only. State of the function. */
		state: FormControl<FunctionState | null | undefined>,

		/** Output only. The last update timestamp of a Cloud Function. */
		updateTime: FormControl<string | null | undefined>,

		/** Output only. The deployed url for the function. */
		url: FormControl<string | null | undefined>,
	}
	export function CreateFunctionFormGroup() {
		return new FormGroup<FunctionFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			environment: new FormControl<FunctionEnvironment | null | undefined>(undefined),
			kmsKeyName: new FormControl<string | null | undefined>(undefined),
			labels: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			satisfiesPzs: new FormControl<boolean | null | undefined>(undefined),
			state: new FormControl<FunctionState | null | undefined>(undefined),
			updateTime: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum FunctionEnvironment { ENVIRONMENT_UNSPECIFIED = 'ENVIRONMENT_UNSPECIFIED', GEN_1 = 'GEN_1', GEN_2 = 'GEN_2' }


	/** Describes the Service being deployed. Currently Supported : Cloud Run (fully managed). */
	export interface ServiceConfig {

		/** Whether 100% of traffic is routed to the latest revision. On CreateFunction and UpdateFunction, when set to true, the revision being deployed will serve 100% of traffic, ignoring any traffic split settings, if any. On GetFunction, true will be returned if the latest revision is serving 100% of traffic. */
		allTrafficOnLatestRevision?: boolean | null;

		/** The number of CPUs used in a single container instance. Default value is calculated from available memory. Supports the same values as Cloud Run, see https://cloud.google.com/run/docs/reference/rest/v1/Container#resourcerequirements Example: "1" indicates 1 vCPU */
		availableCpu?: string | null;

		/** The amount of memory available for a function. Defaults to 256M. Supported units are k, M, G, Mi, Gi. If no unit is supplied the value is interpreted as bytes. See https://github.com/kubernetes/kubernetes/blob/master/staging/src/k8s.io/apimachinery/pkg/api/resource/quantity.go a full description. */
		availableMemory?: string | null;

		/** Environment variables that shall be available during function execution. */
		environmentVariables?: {[id: string]: string };

		/** The ingress settings for the function, controlling what traffic can reach it. */
		ingressSettings?: ServiceConfigIngressSettings | null;

		/** The limit on the maximum number of function instances that may coexist at a given time. In some cases, such as rapid traffic surges, Cloud Functions may, for a short period of time, create more instances than the specified max instances limit. If your function cannot tolerate this temporary behavior, you may want to factor in a safety margin and set a lower max instances value than your function can tolerate. See the [Max Instances](https://cloud.google.com/functions/docs/max-instances) Guide for more details. */
		maxInstanceCount?: number | null;

		/** Sets the maximum number of concurrent requests that each instance can receive. Defaults to 1. */
		maxInstanceRequestConcurrency?: number | null;

		/** The limit on the minimum number of function instances that may coexist at a given time. Function instances are kept in idle state for a short period after they finished executing the request to reduce cold start time for subsequent requests. Setting a minimum instance count will ensure that the given number of instances are kept running in idle state always. This can help with cold start times when jump in incoming request count occurs after the idle instance would have been stopped in the default case. */
		minInstanceCount?: number | null;

		/** Output only. The name of service revision. */
		revision?: string | null;

		/** Secret environment variables configuration. */
		secretEnvironmentVariables?: Array<SecretEnvVar>;

		/** Secret volumes configuration. */
		secretVolumes?: Array<SecretVolume>;

		/** Security level configure whether the function only accepts https. This configuration is only applicable to 1st Gen functions with Http trigger. By default https is optional for 1st Gen functions; 2nd Gen functions are https ONLY. */
		securityLevel?: ServiceConfigSecurityLevel | null;

		/** Output only. Name of the service associated with a Function. The format of this field is `projects/{project}/locations/{region}/services/{service}` */
		service?: string | null;

		/** The email of the service's service account. If empty, defaults to `{project_number}-compute@developer.gserviceaccount.com`. */
		serviceAccountEmail?: string | null;

		/** The function execution timeout. Execution is considered failed and can be terminated if the function is not completed at the end of the timeout period. Defaults to 60 seconds. */
		timeoutSeconds?: number | null;

		/** Output only. URI of the Service deployed. */
		uri?: string | null;

		/** The Serverless VPC Access connector that this cloud function can connect to. The format of this field is `projects/locations/connectors/*`. */
		vpcConnector?: string | null;

		/** The egress settings for the connector, controlling what traffic is diverted through it. */
		vpcConnectorEgressSettings?: ServiceConfigVpcConnectorEgressSettings | null;
	}

	/** Describes the Service being deployed. Currently Supported : Cloud Run (fully managed). */
	export interface ServiceConfigFormProperties {

		/** Whether 100% of traffic is routed to the latest revision. On CreateFunction and UpdateFunction, when set to true, the revision being deployed will serve 100% of traffic, ignoring any traffic split settings, if any. On GetFunction, true will be returned if the latest revision is serving 100% of traffic. */
		allTrafficOnLatestRevision: FormControl<boolean | null | undefined>,

		/** The number of CPUs used in a single container instance. Default value is calculated from available memory. Supports the same values as Cloud Run, see https://cloud.google.com/run/docs/reference/rest/v1/Container#resourcerequirements Example: "1" indicates 1 vCPU */
		availableCpu: FormControl<string | null | undefined>,

		/** The amount of memory available for a function. Defaults to 256M. Supported units are k, M, G, Mi, Gi. If no unit is supplied the value is interpreted as bytes. See https://github.com/kubernetes/kubernetes/blob/master/staging/src/k8s.io/apimachinery/pkg/api/resource/quantity.go a full description. */
		availableMemory: FormControl<string | null | undefined>,

		/** Environment variables that shall be available during function execution. */
		environmentVariables: FormControl<{[id: string]: string } | null | undefined>,

		/** The ingress settings for the function, controlling what traffic can reach it. */
		ingressSettings: FormControl<ServiceConfigIngressSettings | null | undefined>,

		/** The limit on the maximum number of function instances that may coexist at a given time. In some cases, such as rapid traffic surges, Cloud Functions may, for a short period of time, create more instances than the specified max instances limit. If your function cannot tolerate this temporary behavior, you may want to factor in a safety margin and set a lower max instances value than your function can tolerate. See the [Max Instances](https://cloud.google.com/functions/docs/max-instances) Guide for more details. */
		maxInstanceCount: FormControl<number | null | undefined>,

		/** Sets the maximum number of concurrent requests that each instance can receive. Defaults to 1. */
		maxInstanceRequestConcurrency: FormControl<number | null | undefined>,

		/** The limit on the minimum number of function instances that may coexist at a given time. Function instances are kept in idle state for a short period after they finished executing the request to reduce cold start time for subsequent requests. Setting a minimum instance count will ensure that the given number of instances are kept running in idle state always. This can help with cold start times when jump in incoming request count occurs after the idle instance would have been stopped in the default case. */
		minInstanceCount: FormControl<number | null | undefined>,

		/** Output only. The name of service revision. */
		revision: FormControl<string | null | undefined>,

		/** Security level configure whether the function only accepts https. This configuration is only applicable to 1st Gen functions with Http trigger. By default https is optional for 1st Gen functions; 2nd Gen functions are https ONLY. */
		securityLevel: FormControl<ServiceConfigSecurityLevel | null | undefined>,

		/** Output only. Name of the service associated with a Function. The format of this field is `projects/{project}/locations/{region}/services/{service}` */
		service: FormControl<string | null | undefined>,

		/** The email of the service's service account. If empty, defaults to `{project_number}-compute@developer.gserviceaccount.com`. */
		serviceAccountEmail: FormControl<string | null | undefined>,

		/** The function execution timeout. Execution is considered failed and can be terminated if the function is not completed at the end of the timeout period. Defaults to 60 seconds. */
		timeoutSeconds: FormControl<number | null | undefined>,

		/** Output only. URI of the Service deployed. */
		uri: FormControl<string | null | undefined>,

		/** The Serverless VPC Access connector that this cloud function can connect to. The format of this field is `projects/locations/connectors/*`. */
		vpcConnector: FormControl<string | null | undefined>,

		/** The egress settings for the connector, controlling what traffic is diverted through it. */
		vpcConnectorEgressSettings: FormControl<ServiceConfigVpcConnectorEgressSettings | null | undefined>,
	}
	export function CreateServiceConfigFormGroup() {
		return new FormGroup<ServiceConfigFormProperties>({
			allTrafficOnLatestRevision: new FormControl<boolean | null | undefined>(undefined),
			availableCpu: new FormControl<string | null | undefined>(undefined),
			availableMemory: new FormControl<string | null | undefined>(undefined),
			environmentVariables: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			ingressSettings: new FormControl<ServiceConfigIngressSettings | null | undefined>(undefined),
			maxInstanceCount: new FormControl<number | null | undefined>(undefined),
			maxInstanceRequestConcurrency: new FormControl<number | null | undefined>(undefined),
			minInstanceCount: new FormControl<number | null | undefined>(undefined),
			revision: new FormControl<string | null | undefined>(undefined),
			securityLevel: new FormControl<ServiceConfigSecurityLevel | null | undefined>(undefined),
			service: new FormControl<string | null | undefined>(undefined),
			serviceAccountEmail: new FormControl<string | null | undefined>(undefined),
			timeoutSeconds: new FormControl<number | null | undefined>(undefined),
			uri: new FormControl<string | null | undefined>(undefined),
			vpcConnector: new FormControl<string | null | undefined>(undefined),
			vpcConnectorEgressSettings: new FormControl<ServiceConfigVpcConnectorEgressSettings | null | undefined>(undefined),
		});

	}

	export enum ServiceConfigIngressSettings { INGRESS_SETTINGS_UNSPECIFIED = 'INGRESS_SETTINGS_UNSPECIFIED', ALLOW_ALL = 'ALLOW_ALL', ALLOW_INTERNAL_ONLY = 'ALLOW_INTERNAL_ONLY', ALLOW_INTERNAL_AND_GCLB = 'ALLOW_INTERNAL_AND_GCLB' }


	/** Configuration for a secret environment variable. It has the information necessary to fetch the secret value from secret manager and expose it as an environment variable. */
	export interface SecretEnvVar {

		/** Name of the environment variable. */
		key?: string | null;

		/** Project identifier (preferably project number but can also be the project ID) of the project that contains the secret. If not set, it is assumed that the secret is in the same project as the function. */
		projectId?: string | null;

		/** Name of the secret in secret manager (not the full resource name). */
		secret?: string | null;

		/** Version of the secret (version number or the string 'latest'). It is recommended to use a numeric version for secret environment variables as any updates to the secret value is not reflected until new instances start. */
		version?: string | null;
	}

	/** Configuration for a secret environment variable. It has the information necessary to fetch the secret value from secret manager and expose it as an environment variable. */
	export interface SecretEnvVarFormProperties {

		/** Name of the environment variable. */
		key: FormControl<string | null | undefined>,

		/** Project identifier (preferably project number but can also be the project ID) of the project that contains the secret. If not set, it is assumed that the secret is in the same project as the function. */
		projectId: FormControl<string | null | undefined>,

		/** Name of the secret in secret manager (not the full resource name). */
		secret: FormControl<string | null | undefined>,

		/** Version of the secret (version number or the string 'latest'). It is recommended to use a numeric version for secret environment variables as any updates to the secret value is not reflected until new instances start. */
		version: FormControl<string | null | undefined>,
	}
	export function CreateSecretEnvVarFormGroup() {
		return new FormGroup<SecretEnvVarFormProperties>({
			key: new FormControl<string | null | undefined>(undefined),
			projectId: new FormControl<string | null | undefined>(undefined),
			secret: new FormControl<string | null | undefined>(undefined),
			version: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Configuration for a secret volume. It has the information necessary to fetch the secret value from secret manager and make it available as files mounted at the requested paths within the application container. */
	export interface SecretVolume {

		/** The path within the container to mount the secret volume. For example, setting the mount_path as `/etc/secrets` would mount the secret value files under the `/etc/secrets` directory. This directory will also be completely shadowed and unavailable to mount any other secrets. Recommended mount path: /etc/secrets */
		mountPath?: string | null;

		/** Project identifier (preferably project number but can also be the project ID) of the project that contains the secret. If not set, it is assumed that the secret is in the same project as the function. */
		projectId?: string | null;

		/** Name of the secret in secret manager (not the full resource name). */
		secret?: string | null;

		/** List of secret versions to mount for this secret. If empty, the `latest` version of the secret will be made available in a file named after the secret under the mount point. */
		versions?: Array<SecretVersion>;
	}

	/** Configuration for a secret volume. It has the information necessary to fetch the secret value from secret manager and make it available as files mounted at the requested paths within the application container. */
	export interface SecretVolumeFormProperties {

		/** The path within the container to mount the secret volume. For example, setting the mount_path as `/etc/secrets` would mount the secret value files under the `/etc/secrets` directory. This directory will also be completely shadowed and unavailable to mount any other secrets. Recommended mount path: /etc/secrets */
		mountPath: FormControl<string | null | undefined>,

		/** Project identifier (preferably project number but can also be the project ID) of the project that contains the secret. If not set, it is assumed that the secret is in the same project as the function. */
		projectId: FormControl<string | null | undefined>,

		/** Name of the secret in secret manager (not the full resource name). */
		secret: FormControl<string | null | undefined>,
	}
	export function CreateSecretVolumeFormGroup() {
		return new FormGroup<SecretVolumeFormProperties>({
			mountPath: new FormControl<string | null | undefined>(undefined),
			projectId: new FormControl<string | null | undefined>(undefined),
			secret: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Configuration for a single version. */
	export interface SecretVersion {

		/** Relative path of the file under the mount path where the secret value for this version will be fetched and made available. For example, setting the mount_path as '/etc/secrets' and path as `secret_foo` would mount the secret value file at `/etc/secrets/secret_foo`. */
		path?: string | null;

		/** Version of the secret (version number or the string 'latest'). It is preferable to use `latest` version with secret volumes as secret value changes are reflected immediately. */
		version?: string | null;
	}

	/** Configuration for a single version. */
	export interface SecretVersionFormProperties {

		/** Relative path of the file under the mount path where the secret value for this version will be fetched and made available. For example, setting the mount_path as '/etc/secrets' and path as `secret_foo` would mount the secret value file at `/etc/secrets/secret_foo`. */
		path: FormControl<string | null | undefined>,

		/** Version of the secret (version number or the string 'latest'). It is preferable to use `latest` version with secret volumes as secret value changes are reflected immediately. */
		version: FormControl<string | null | undefined>,
	}
	export function CreateSecretVersionFormGroup() {
		return new FormGroup<SecretVersionFormProperties>({
			path: new FormControl<string | null | undefined>(undefined),
			version: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ServiceConfigSecurityLevel { SECURITY_LEVEL_UNSPECIFIED = 'SECURITY_LEVEL_UNSPECIFIED', SECURE_ALWAYS = 'SECURE_ALWAYS', SECURE_OPTIONAL = 'SECURE_OPTIONAL' }

	export enum ServiceConfigVpcConnectorEgressSettings { VPC_CONNECTOR_EGRESS_SETTINGS_UNSPECIFIED = 'VPC_CONNECTOR_EGRESS_SETTINGS_UNSPECIFIED', PRIVATE_RANGES_ONLY = 'PRIVATE_RANGES_ONLY', ALL_TRAFFIC = 'ALL_TRAFFIC' }

	export enum FunctionState { STATE_UNSPECIFIED = 'STATE_UNSPECIFIED', ACTIVE = 'ACTIVE', FAILED = 'FAILED', DEPLOYING = 'DEPLOYING', DELETING = 'DELETING', UNKNOWN = 'UNKNOWN' }


	/** Informational messages about the state of the Cloud Function or Operation. */
	export interface GoogleCloudFunctionsV2betaStateMessage {

		/** The message. */
		message?: string | null;

		/** Severity of the state message. */
		severity?: GoogleCloudFunctionsV2betaStateMessageSeverity | null;

		/** One-word CamelCase type of the state message. */
		type?: string | null;
	}

	/** Informational messages about the state of the Cloud Function or Operation. */
	export interface GoogleCloudFunctionsV2betaStateMessageFormProperties {

		/** The message. */
		message: FormControl<string | null | undefined>,

		/** Severity of the state message. */
		severity: FormControl<GoogleCloudFunctionsV2betaStateMessageSeverity | null | undefined>,

		/** One-word CamelCase type of the state message. */
		type: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudFunctionsV2betaStateMessageFormGroup() {
		return new FormGroup<GoogleCloudFunctionsV2betaStateMessageFormProperties>({
			message: new FormControl<string | null | undefined>(undefined),
			severity: new FormControl<GoogleCloudFunctionsV2betaStateMessageSeverity | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum GoogleCloudFunctionsV2betaStateMessageSeverity { SEVERITY_UNSPECIFIED = 'SEVERITY_UNSPECIFIED', ERROR = 'ERROR', WARNING = 'WARNING', INFO = 'INFO' }


	/** Request of `GenerateDownloadUrl` method. */
	export interface GenerateDownloadUrlRequest {
	}

	/** Request of `GenerateDownloadUrl` method. */
	export interface GenerateDownloadUrlRequestFormProperties {
	}
	export function CreateGenerateDownloadUrlRequestFormGroup() {
		return new FormGroup<GenerateDownloadUrlRequestFormProperties>({
		});

	}


	/** Response of `GenerateDownloadUrl` method. */
	export interface GenerateDownloadUrlResponse {

		/** The generated Google Cloud Storage signed URL that should be used for function source code download. */
		downloadUrl?: string | null;
	}

	/** Response of `GenerateDownloadUrl` method. */
	export interface GenerateDownloadUrlResponseFormProperties {

		/** The generated Google Cloud Storage signed URL that should be used for function source code download. */
		downloadUrl: FormControl<string | null | undefined>,
	}
	export function CreateGenerateDownloadUrlResponseFormGroup() {
		return new FormGroup<GenerateDownloadUrlResponseFormProperties>({
			downloadUrl: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Request of `GenerateSourceUploadUrl` method. */
	export interface GenerateUploadUrlRequest {

		/** The function environment the generated upload url will be used for. The upload url for 2nd Gen functions can also be used for 1st gen functions, but not vice versa. If not specified, 2nd generation-style upload URLs are generated. */
		environment?: FunctionEnvironment | null;

		/** [Preview] Resource name of a KMS crypto key (managed by the user) used to encrypt/decrypt function source code objects in intermediate Cloud Storage buckets. When you generate an upload url and upload your source code, it gets copied to an intermediate Cloud Storage bucket. The source code is then copied to a versioned directory in the sources bucket in the consumer project during the function deployment. It must match the pattern `projects/{project}/locations/{location}/keyRings/{key_ring}/cryptoKeys/{crypto_key}`. The Google Cloud Functions service account (service-{project_number}@gcf-admin-robot.iam.gserviceaccount.com) must be granted the role 'Cloud KMS CryptoKey Encrypter/Decrypter (roles/cloudkms.cryptoKeyEncrypterDecrypter)' on the Key/KeyRing/Project/Organization (least access preferred). */
		kmsKeyName?: string | null;
	}

	/** Request of `GenerateSourceUploadUrl` method. */
	export interface GenerateUploadUrlRequestFormProperties {

		/** The function environment the generated upload url will be used for. The upload url for 2nd Gen functions can also be used for 1st gen functions, but not vice versa. If not specified, 2nd generation-style upload URLs are generated. */
		environment: FormControl<FunctionEnvironment | null | undefined>,

		/** [Preview] Resource name of a KMS crypto key (managed by the user) used to encrypt/decrypt function source code objects in intermediate Cloud Storage buckets. When you generate an upload url and upload your source code, it gets copied to an intermediate Cloud Storage bucket. The source code is then copied to a versioned directory in the sources bucket in the consumer project during the function deployment. It must match the pattern `projects/{project}/locations/{location}/keyRings/{key_ring}/cryptoKeys/{crypto_key}`. The Google Cloud Functions service account (service-{project_number}@gcf-admin-robot.iam.gserviceaccount.com) must be granted the role 'Cloud KMS CryptoKey Encrypter/Decrypter (roles/cloudkms.cryptoKeyEncrypterDecrypter)' on the Key/KeyRing/Project/Organization (least access preferred). */
		kmsKeyName: FormControl<string | null | undefined>,
	}
	export function CreateGenerateUploadUrlRequestFormGroup() {
		return new FormGroup<GenerateUploadUrlRequestFormProperties>({
			environment: new FormControl<FunctionEnvironment | null | undefined>(undefined),
			kmsKeyName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response of `GenerateSourceUploadUrl` method. */
	export interface GenerateUploadUrlResponse {

		/** Location of the source in an archive file in Google Cloud Storage. */
		storageSource?: StorageSource;

		/** The generated Google Cloud Storage signed URL that should be used for a function source code upload. The uploaded file should be a zip archive which contains a function. */
		uploadUrl?: string | null;
	}

	/** Response of `GenerateSourceUploadUrl` method. */
	export interface GenerateUploadUrlResponseFormProperties {

		/** The generated Google Cloud Storage signed URL that should be used for a function source code upload. The uploaded file should be a zip archive which contains a function. */
		uploadUrl: FormControl<string | null | undefined>,
	}
	export function CreateGenerateUploadUrlResponseFormGroup() {
		return new FormGroup<GenerateUploadUrlResponseFormProperties>({
			uploadUrl: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Extra GCF specific location information. */
	export interface GoogleCloudFunctionsV2LocationMetadata {

		/** The Cloud Function environments this location supports. */
		environments?: Array<FunctionEnvironment>;
	}

	/** Extra GCF specific location information. */
	export interface GoogleCloudFunctionsV2LocationMetadataFormProperties {
	}
	export function CreateGoogleCloudFunctionsV2LocationMetadataFormGroup() {
		return new FormGroup<GoogleCloudFunctionsV2LocationMetadataFormProperties>({
		});

	}


	/** Represents the metadata of the long-running operation. */
	export interface GoogleCloudFunctionsV2OperationMetadata {

		/** API version used to start the operation. */
		apiVersion?: string | null;

		/** Identifies whether the user has requested cancellation of the operation. Operations that have successfully been cancelled have google.longrunning.Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`. */
		cancelRequested?: boolean | null;

		/** The time the operation was created. */
		createTime?: string | null;

		/** The time the operation finished running. */
		endTime?: string | null;

		/** The operation type. */
		operationType?: GoogleCloudFunctionsV2OperationMetadataOperationType | null;

		/** The original request that started the operation. */
		requestResource?: {[id: string]: any };

		/** An identifier for Firebase function sources. Disclaimer: This field is only supported for Firebase function deployments. */
		sourceToken?: string | null;

		/** Mechanism for reporting in-progress stages */
		stages?: Array<GoogleCloudFunctionsV2Stage>;

		/** Human-readable status of the operation, if any. */
		statusDetail?: string | null;

		/** Server-defined resource path for the target of the operation. */
		target?: string | null;

		/** Name of the verb executed by the operation. */
		verb?: string | null;
	}

	/** Represents the metadata of the long-running operation. */
	export interface GoogleCloudFunctionsV2OperationMetadataFormProperties {

		/** API version used to start the operation. */
		apiVersion: FormControl<string | null | undefined>,

		/** Identifies whether the user has requested cancellation of the operation. Operations that have successfully been cancelled have google.longrunning.Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`. */
		cancelRequested: FormControl<boolean | null | undefined>,

		/** The time the operation was created. */
		createTime: FormControl<string | null | undefined>,

		/** The time the operation finished running. */
		endTime: FormControl<string | null | undefined>,

		/** The operation type. */
		operationType: FormControl<GoogleCloudFunctionsV2OperationMetadataOperationType | null | undefined>,

		/** The original request that started the operation. */
		requestResource: FormControl<{[id: string]: any } | null | undefined>,

		/** An identifier for Firebase function sources. Disclaimer: This field is only supported for Firebase function deployments. */
		sourceToken: FormControl<string | null | undefined>,

		/** Human-readable status of the operation, if any. */
		statusDetail: FormControl<string | null | undefined>,

		/** Server-defined resource path for the target of the operation. */
		target: FormControl<string | null | undefined>,

		/** Name of the verb executed by the operation. */
		verb: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudFunctionsV2OperationMetadataFormGroup() {
		return new FormGroup<GoogleCloudFunctionsV2OperationMetadataFormProperties>({
			apiVersion: new FormControl<string | null | undefined>(undefined),
			cancelRequested: new FormControl<boolean | null | undefined>(undefined),
			createTime: new FormControl<string | null | undefined>(undefined),
			endTime: new FormControl<string | null | undefined>(undefined),
			operationType: new FormControl<GoogleCloudFunctionsV2OperationMetadataOperationType | null | undefined>(undefined),
			requestResource: new FormControl<{[id: string]: any } | null | undefined>(undefined),
			sourceToken: new FormControl<string | null | undefined>(undefined),
			statusDetail: new FormControl<string | null | undefined>(undefined),
			target: new FormControl<string | null | undefined>(undefined),
			verb: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum GoogleCloudFunctionsV2OperationMetadataOperationType { OPERATIONTYPE_UNSPECIFIED = 'OPERATIONTYPE_UNSPECIFIED', CREATE_FUNCTION = 'CREATE_FUNCTION', UPDATE_FUNCTION = 'UPDATE_FUNCTION', DELETE_FUNCTION = 'DELETE_FUNCTION', REDIRECT_FUNCTION_UPGRADE_TRAFFIC = 'REDIRECT_FUNCTION_UPGRADE_TRAFFIC', ROLLBACK_FUNCTION_UPGRADE_TRAFFIC = 'ROLLBACK_FUNCTION_UPGRADE_TRAFFIC', SETUP_FUNCTION_UPGRADE_CONFIG = 'SETUP_FUNCTION_UPGRADE_CONFIG', ABORT_FUNCTION_UPGRADE = 'ABORT_FUNCTION_UPGRADE', COMMIT_FUNCTION_UPGRADE = 'COMMIT_FUNCTION_UPGRADE' }


	/** Each Stage of the deployment process */
	export interface GoogleCloudFunctionsV2Stage {

		/** Message describing the Stage */
		message?: string | null;

		/** Name of the Stage. This will be unique for each Stage. */
		name?: GoogleCloudFunctionsV2StageName | null;

		/** Resource of the Stage */
		resource?: string | null;

		/** Link to the current Stage resource */
		resourceUri?: string | null;

		/** Current state of the Stage */
		state?: GoogleCloudFunctionsV2StageState | null;

		/** State messages from the current Stage. */
		stateMessages?: Array<GoogleCloudFunctionsV2StateMessage>;
	}

	/** Each Stage of the deployment process */
	export interface GoogleCloudFunctionsV2StageFormProperties {

		/** Message describing the Stage */
		message: FormControl<string | null | undefined>,

		/** Name of the Stage. This will be unique for each Stage. */
		name: FormControl<GoogleCloudFunctionsV2StageName | null | undefined>,

		/** Resource of the Stage */
		resource: FormControl<string | null | undefined>,

		/** Link to the current Stage resource */
		resourceUri: FormControl<string | null | undefined>,

		/** Current state of the Stage */
		state: FormControl<GoogleCloudFunctionsV2StageState | null | undefined>,
	}
	export function CreateGoogleCloudFunctionsV2StageFormGroup() {
		return new FormGroup<GoogleCloudFunctionsV2StageFormProperties>({
			message: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<GoogleCloudFunctionsV2StageName | null | undefined>(undefined),
			resource: new FormControl<string | null | undefined>(undefined),
			resourceUri: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<GoogleCloudFunctionsV2StageState | null | undefined>(undefined),
		});

	}

	export enum GoogleCloudFunctionsV2StageName { NAME_UNSPECIFIED = 'NAME_UNSPECIFIED', ARTIFACT_REGISTRY = 'ARTIFACT_REGISTRY', BUILD = 'BUILD', SERVICE = 'SERVICE', TRIGGER = 'TRIGGER', SERVICE_ROLLBACK = 'SERVICE_ROLLBACK', TRIGGER_ROLLBACK = 'TRIGGER_ROLLBACK' }

	export enum GoogleCloudFunctionsV2StageState { STATE_UNSPECIFIED = 'STATE_UNSPECIFIED', NOT_STARTED = 'NOT_STARTED', IN_PROGRESS = 'IN_PROGRESS', COMPLETE = 'COMPLETE' }


	/** Informational messages about the state of the Cloud Function or Operation. */
	export interface GoogleCloudFunctionsV2StateMessage {

		/** The message. */
		message?: string | null;

		/** Severity of the state message. */
		severity?: GoogleCloudFunctionsV2betaStateMessageSeverity | null;

		/** One-word CamelCase type of the state message. */
		type?: string | null;
	}

	/** Informational messages about the state of the Cloud Function or Operation. */
	export interface GoogleCloudFunctionsV2StateMessageFormProperties {

		/** The message. */
		message: FormControl<string | null | undefined>,

		/** Severity of the state message. */
		severity: FormControl<GoogleCloudFunctionsV2betaStateMessageSeverity | null | undefined>,

		/** One-word CamelCase type of the state message. */
		type: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudFunctionsV2StateMessageFormGroup() {
		return new FormGroup<GoogleCloudFunctionsV2StateMessageFormProperties>({
			message: new FormControl<string | null | undefined>(undefined),
			severity: new FormControl<GoogleCloudFunctionsV2betaStateMessageSeverity | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Extra GCF specific location information. */
	export interface GoogleCloudFunctionsV2alphaLocationMetadata {

		/** The Cloud Function environments this location supports. */
		environments?: Array<FunctionEnvironment>;
	}

	/** Extra GCF specific location information. */
	export interface GoogleCloudFunctionsV2alphaLocationMetadataFormProperties {
	}
	export function CreateGoogleCloudFunctionsV2alphaLocationMetadataFormGroup() {
		return new FormGroup<GoogleCloudFunctionsV2alphaLocationMetadataFormProperties>({
		});

	}


	/** Represents the metadata of the long-running operation. */
	export interface GoogleCloudFunctionsV2alphaOperationMetadata {

		/** API version used to start the operation. */
		apiVersion?: string | null;

		/** Identifies whether the user has requested cancellation of the operation. Operations that have successfully been cancelled have google.longrunning.Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`. */
		cancelRequested?: boolean | null;

		/** The time the operation was created. */
		createTime?: string | null;

		/** The time the operation finished running. */
		endTime?: string | null;

		/** The operation type. */
		operationType?: GoogleCloudFunctionsV2OperationMetadataOperationType | null;

		/** The original request that started the operation. */
		requestResource?: {[id: string]: any };

		/** An identifier for Firebase function sources. Disclaimer: This field is only supported for Firebase function deployments. */
		sourceToken?: string | null;

		/** Mechanism for reporting in-progress stages */
		stages?: Array<GoogleCloudFunctionsV2alphaStage>;

		/** Human-readable status of the operation, if any. */
		statusDetail?: string | null;

		/** Server-defined resource path for the target of the operation. */
		target?: string | null;

		/** Name of the verb executed by the operation. */
		verb?: string | null;
	}

	/** Represents the metadata of the long-running operation. */
	export interface GoogleCloudFunctionsV2alphaOperationMetadataFormProperties {

		/** API version used to start the operation. */
		apiVersion: FormControl<string | null | undefined>,

		/** Identifies whether the user has requested cancellation of the operation. Operations that have successfully been cancelled have google.longrunning.Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`. */
		cancelRequested: FormControl<boolean | null | undefined>,

		/** The time the operation was created. */
		createTime: FormControl<string | null | undefined>,

		/** The time the operation finished running. */
		endTime: FormControl<string | null | undefined>,

		/** The operation type. */
		operationType: FormControl<GoogleCloudFunctionsV2OperationMetadataOperationType | null | undefined>,

		/** The original request that started the operation. */
		requestResource: FormControl<{[id: string]: any } | null | undefined>,

		/** An identifier for Firebase function sources. Disclaimer: This field is only supported for Firebase function deployments. */
		sourceToken: FormControl<string | null | undefined>,

		/** Human-readable status of the operation, if any. */
		statusDetail: FormControl<string | null | undefined>,

		/** Server-defined resource path for the target of the operation. */
		target: FormControl<string | null | undefined>,

		/** Name of the verb executed by the operation. */
		verb: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudFunctionsV2alphaOperationMetadataFormGroup() {
		return new FormGroup<GoogleCloudFunctionsV2alphaOperationMetadataFormProperties>({
			apiVersion: new FormControl<string | null | undefined>(undefined),
			cancelRequested: new FormControl<boolean | null | undefined>(undefined),
			createTime: new FormControl<string | null | undefined>(undefined),
			endTime: new FormControl<string | null | undefined>(undefined),
			operationType: new FormControl<GoogleCloudFunctionsV2OperationMetadataOperationType | null | undefined>(undefined),
			requestResource: new FormControl<{[id: string]: any } | null | undefined>(undefined),
			sourceToken: new FormControl<string | null | undefined>(undefined),
			statusDetail: new FormControl<string | null | undefined>(undefined),
			target: new FormControl<string | null | undefined>(undefined),
			verb: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Each Stage of the deployment process */
	export interface GoogleCloudFunctionsV2alphaStage {

		/** Message describing the Stage */
		message?: string | null;

		/** Name of the Stage. This will be unique for each Stage. */
		name?: GoogleCloudFunctionsV2StageName | null;

		/** Resource of the Stage */
		resource?: string | null;

		/** Link to the current Stage resource */
		resourceUri?: string | null;

		/** Current state of the Stage */
		state?: GoogleCloudFunctionsV2StageState | null;

		/** State messages from the current Stage. */
		stateMessages?: Array<GoogleCloudFunctionsV2alphaStateMessage>;
	}

	/** Each Stage of the deployment process */
	export interface GoogleCloudFunctionsV2alphaStageFormProperties {

		/** Message describing the Stage */
		message: FormControl<string | null | undefined>,

		/** Name of the Stage. This will be unique for each Stage. */
		name: FormControl<GoogleCloudFunctionsV2StageName | null | undefined>,

		/** Resource of the Stage */
		resource: FormControl<string | null | undefined>,

		/** Link to the current Stage resource */
		resourceUri: FormControl<string | null | undefined>,

		/** Current state of the Stage */
		state: FormControl<GoogleCloudFunctionsV2StageState | null | undefined>,
	}
	export function CreateGoogleCloudFunctionsV2alphaStageFormGroup() {
		return new FormGroup<GoogleCloudFunctionsV2alphaStageFormProperties>({
			message: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<GoogleCloudFunctionsV2StageName | null | undefined>(undefined),
			resource: new FormControl<string | null | undefined>(undefined),
			resourceUri: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<GoogleCloudFunctionsV2StageState | null | undefined>(undefined),
		});

	}


	/** Informational messages about the state of the Cloud Function or Operation. */
	export interface GoogleCloudFunctionsV2alphaStateMessage {

		/** The message. */
		message?: string | null;

		/** Severity of the state message. */
		severity?: GoogleCloudFunctionsV2betaStateMessageSeverity | null;

		/** One-word CamelCase type of the state message. */
		type?: string | null;
	}

	/** Informational messages about the state of the Cloud Function or Operation. */
	export interface GoogleCloudFunctionsV2alphaStateMessageFormProperties {

		/** The message. */
		message: FormControl<string | null | undefined>,

		/** Severity of the state message. */
		severity: FormControl<GoogleCloudFunctionsV2betaStateMessageSeverity | null | undefined>,

		/** One-word CamelCase type of the state message. */
		type: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudFunctionsV2alphaStateMessageFormGroup() {
		return new FormGroup<GoogleCloudFunctionsV2alphaStateMessageFormProperties>({
			message: new FormControl<string | null | undefined>(undefined),
			severity: new FormControl<GoogleCloudFunctionsV2betaStateMessageSeverity | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Extra GCF specific location information. */
	export interface GoogleCloudFunctionsV2betaLocationMetadata {

		/** The Cloud Function environments this location supports. */
		environments?: Array<FunctionEnvironment>;
	}

	/** Extra GCF specific location information. */
	export interface GoogleCloudFunctionsV2betaLocationMetadataFormProperties {
	}
	export function CreateGoogleCloudFunctionsV2betaLocationMetadataFormGroup() {
		return new FormGroup<GoogleCloudFunctionsV2betaLocationMetadataFormProperties>({
		});

	}


	/** Represents the metadata of the long-running operation. */
	export interface GoogleCloudFunctionsV2betaOperationMetadata {

		/** API version used to start the operation. */
		apiVersion?: string | null;

		/** Identifies whether the user has requested cancellation of the operation. Operations that have successfully been cancelled have google.longrunning.Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`. */
		cancelRequested?: boolean | null;

		/** The time the operation was created. */
		createTime?: string | null;

		/** The time the operation finished running. */
		endTime?: string | null;

		/** The operation type. */
		operationType?: GoogleCloudFunctionsV2OperationMetadataOperationType | null;

		/** The original request that started the operation. */
		requestResource?: {[id: string]: any };

		/** An identifier for Firebase function sources. Disclaimer: This field is only supported for Firebase function deployments. */
		sourceToken?: string | null;

		/** Mechanism for reporting in-progress stages */
		stages?: Array<GoogleCloudFunctionsV2betaStage>;

		/** Human-readable status of the operation, if any. */
		statusDetail?: string | null;

		/** Server-defined resource path for the target of the operation. */
		target?: string | null;

		/** Name of the verb executed by the operation. */
		verb?: string | null;
	}

	/** Represents the metadata of the long-running operation. */
	export interface GoogleCloudFunctionsV2betaOperationMetadataFormProperties {

		/** API version used to start the operation. */
		apiVersion: FormControl<string | null | undefined>,

		/** Identifies whether the user has requested cancellation of the operation. Operations that have successfully been cancelled have google.longrunning.Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`. */
		cancelRequested: FormControl<boolean | null | undefined>,

		/** The time the operation was created. */
		createTime: FormControl<string | null | undefined>,

		/** The time the operation finished running. */
		endTime: FormControl<string | null | undefined>,

		/** The operation type. */
		operationType: FormControl<GoogleCloudFunctionsV2OperationMetadataOperationType | null | undefined>,

		/** The original request that started the operation. */
		requestResource: FormControl<{[id: string]: any } | null | undefined>,

		/** An identifier for Firebase function sources. Disclaimer: This field is only supported for Firebase function deployments. */
		sourceToken: FormControl<string | null | undefined>,

		/** Human-readable status of the operation, if any. */
		statusDetail: FormControl<string | null | undefined>,

		/** Server-defined resource path for the target of the operation. */
		target: FormControl<string | null | undefined>,

		/** Name of the verb executed by the operation. */
		verb: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudFunctionsV2betaOperationMetadataFormGroup() {
		return new FormGroup<GoogleCloudFunctionsV2betaOperationMetadataFormProperties>({
			apiVersion: new FormControl<string | null | undefined>(undefined),
			cancelRequested: new FormControl<boolean | null | undefined>(undefined),
			createTime: new FormControl<string | null | undefined>(undefined),
			endTime: new FormControl<string | null | undefined>(undefined),
			operationType: new FormControl<GoogleCloudFunctionsV2OperationMetadataOperationType | null | undefined>(undefined),
			requestResource: new FormControl<{[id: string]: any } | null | undefined>(undefined),
			sourceToken: new FormControl<string | null | undefined>(undefined),
			statusDetail: new FormControl<string | null | undefined>(undefined),
			target: new FormControl<string | null | undefined>(undefined),
			verb: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Each Stage of the deployment process */
	export interface GoogleCloudFunctionsV2betaStage {

		/** Message describing the Stage */
		message?: string | null;

		/** Name of the Stage. This will be unique for each Stage. */
		name?: GoogleCloudFunctionsV2StageName | null;

		/** Resource of the Stage */
		resource?: string | null;

		/** Link to the current Stage resource */
		resourceUri?: string | null;

		/** Current state of the Stage */
		state?: GoogleCloudFunctionsV2StageState | null;

		/** State messages from the current Stage. */
		stateMessages?: Array<GoogleCloudFunctionsV2betaStateMessage>;
	}

	/** Each Stage of the deployment process */
	export interface GoogleCloudFunctionsV2betaStageFormProperties {

		/** Message describing the Stage */
		message: FormControl<string | null | undefined>,

		/** Name of the Stage. This will be unique for each Stage. */
		name: FormControl<GoogleCloudFunctionsV2StageName | null | undefined>,

		/** Resource of the Stage */
		resource: FormControl<string | null | undefined>,

		/** Link to the current Stage resource */
		resourceUri: FormControl<string | null | undefined>,

		/** Current state of the Stage */
		state: FormControl<GoogleCloudFunctionsV2StageState | null | undefined>,
	}
	export function CreateGoogleCloudFunctionsV2betaStageFormGroup() {
		return new FormGroup<GoogleCloudFunctionsV2betaStageFormProperties>({
			message: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<GoogleCloudFunctionsV2StageName | null | undefined>(undefined),
			resource: new FormControl<string | null | undefined>(undefined),
			resourceUri: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<GoogleCloudFunctionsV2StageState | null | undefined>(undefined),
		});

	}


	/** Response for the `ListFunctions` method. */
	export interface ListFunctionsResponse {

		/** The functions that match the request. */
		functions?: Array<Function>;

		/** A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
		nextPageToken?: string | null;

		/** Locations that could not be reached. The response does not include any functions from these locations. */
		unreachable?: Array<string>;
	}

	/** Response for the `ListFunctions` method. */
	export interface ListFunctionsResponseFormProperties {

		/** A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListFunctionsResponseFormGroup() {
		return new FormGroup<ListFunctionsResponseFormProperties>({
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


	/** Response for the `ListRuntimes` method. */
	export interface ListRuntimesResponse {

		/** The runtimes that match the request. */
		runtimes?: Array<Runtime>;
	}

	/** Response for the `ListRuntimes` method. */
	export interface ListRuntimesResponseFormProperties {
	}
	export function CreateListRuntimesResponseFormGroup() {
		return new FormGroup<ListRuntimesResponseFormProperties>({
		});

	}


	/** Describes a runtime and any special information (e.g., deprecation status) related to it. */
	export interface Runtime {

		/** Represents a whole or partial calendar date, such as a birthday. The time of day and time zone are either specified elsewhere or are insignificant. The date is relative to the Gregorian Calendar. This can represent one of the following: * A full date, with non-zero year, month, and day values. * A month and day, with a zero year (for example, an anniversary). * A year on its own, with a zero month and a zero day. * A year and month, with a zero day (for example, a credit card expiration date). Related types: * google.type.TimeOfDay * google.type.DateTime * google.protobuf.Timestamp */
		decommissionDate?: Date;

		/** Represents a whole or partial calendar date, such as a birthday. The time of day and time zone are either specified elsewhere or are insignificant. The date is relative to the Gregorian Calendar. This can represent one of the following: * A full date, with non-zero year, month, and day values. * A month and day, with a zero year (for example, an anniversary). * A year on its own, with a zero month and a zero day. * A year and month, with a zero day (for example, a credit card expiration date). Related types: * google.type.TimeOfDay * google.type.DateTime * google.protobuf.Timestamp */
		deprecationDate?: Date;

		/** The user facing name, eg 'Go 1.13', 'Node.js 12', etc. */
		displayName?: string | null;

		/** The environment for the runtime. */
		environment?: FunctionEnvironment | null;

		/** The name of the runtime, e.g., 'go113', 'nodejs12', etc. */
		name?: string | null;

		/** The stage of life this runtime is in, e.g., BETA, GA, etc. */
		stage?: RuntimeStage | null;

		/** Warning messages, e.g., a deprecation warning. */
		warnings?: Array<string>;
	}

	/** Describes a runtime and any special information (e.g., deprecation status) related to it. */
	export interface RuntimeFormProperties {

		/** The user facing name, eg 'Go 1.13', 'Node.js 12', etc. */
		displayName: FormControl<string | null | undefined>,

		/** The environment for the runtime. */
		environment: FormControl<FunctionEnvironment | null | undefined>,

		/** The name of the runtime, e.g., 'go113', 'nodejs12', etc. */
		name: FormControl<string | null | undefined>,

		/** The stage of life this runtime is in, e.g., BETA, GA, etc. */
		stage: FormControl<RuntimeStage | null | undefined>,
	}
	export function CreateRuntimeFormGroup() {
		return new FormGroup<RuntimeFormProperties>({
			displayName: new FormControl<string | null | undefined>(undefined),
			environment: new FormControl<FunctionEnvironment | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			stage: new FormControl<RuntimeStage | null | undefined>(undefined),
		});

	}

	export enum RuntimeStage { RUNTIME_STAGE_UNSPECIFIED = 'RUNTIME_STAGE_UNSPECIFIED', DEVELOPMENT = 'DEVELOPMENT', ALPHA = 'ALPHA', BETA = 'BETA', GA = 'GA', DEPRECATED = 'DEPRECATED', DECOMMISSIONED = 'DECOMMISSIONED' }


	/** Metadata describing an Operation */
	export interface OperationMetadataV1 {

		/** The Cloud Build ID of the function created or updated by an API call. This field is only populated for Create and Update operations. */
		buildId?: string | null;

		/** The Cloud Build Name of the function deployment. This field is only populated for Create and Update operations. `projects//locations//builds/`. */
		buildName?: string | null;

		/** The original request that started the operation. */
		request?: {[id: string]: any };

		/** An identifier for Firebase function sources. Disclaimer: This field is only supported for Firebase function deployments. */
		sourceToken?: string | null;

		/** Target of the operation - for example `projects/project-1/locations/region-1/functions/function-1` */
		target?: string | null;

		/** Type of operation. */
		type?: OperationMetadataV1Type | null;

		/** The last update timestamp of the operation. */
		updateTime?: string | null;

		/** Version id of the function created or updated by an API call. This field is only populated for Create and Update operations. */
		versionId?: string | null;
	}

	/** Metadata describing an Operation */
	export interface OperationMetadataV1FormProperties {

		/** The Cloud Build ID of the function created or updated by an API call. This field is only populated for Create and Update operations. */
		buildId: FormControl<string | null | undefined>,

		/** The Cloud Build Name of the function deployment. This field is only populated for Create and Update operations. `projects//locations//builds/`. */
		buildName: FormControl<string | null | undefined>,

		/** The original request that started the operation. */
		request: FormControl<{[id: string]: any } | null | undefined>,

		/** An identifier for Firebase function sources. Disclaimer: This field is only supported for Firebase function deployments. */
		sourceToken: FormControl<string | null | undefined>,

		/** Target of the operation - for example `projects/project-1/locations/region-1/functions/function-1` */
		target: FormControl<string | null | undefined>,

		/** Type of operation. */
		type: FormControl<OperationMetadataV1Type | null | undefined>,

		/** The last update timestamp of the operation. */
		updateTime: FormControl<string | null | undefined>,

		/** Version id of the function created or updated by an API call. This field is only populated for Create and Update operations. */
		versionId: FormControl<string | null | undefined>,
	}
	export function CreateOperationMetadataV1FormGroup() {
		return new FormGroup<OperationMetadataV1FormProperties>({
			buildId: new FormControl<string | null | undefined>(undefined),
			buildName: new FormControl<string | null | undefined>(undefined),
			request: new FormControl<{[id: string]: any } | null | undefined>(undefined),
			sourceToken: new FormControl<string | null | undefined>(undefined),
			target: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<OperationMetadataV1Type | null | undefined>(undefined),
			updateTime: new FormControl<string | null | undefined>(undefined),
			versionId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum OperationMetadataV1Type { OPERATION_UNSPECIFIED = 'OPERATION_UNSPECIFIED', CREATE_FUNCTION = 'CREATE_FUNCTION', UPDATE_FUNCTION = 'UPDATE_FUNCTION', DELETE_FUNCTION = 'DELETE_FUNCTION' }


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
		 * Deletes a function with the given name from the specified project. If the given function is used by some trigger, the trigger will be updated to remove this function.
		 * Delete v2beta/{name}
		 * @param {string} name Required. The name of the function which should be deleted.
		 * @return {Operation} Successful response
		 */
		Cloudfunctions_projects_locations_functions_delete(name: string): Observable<Operation> {
			return this.http.delete<Operation>(this.baseUri + 'v2beta/' + (name == null ? '' : encodeURIComponent(name)), {});
		}

		/**
		 * Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
		 * Get v2beta/{name}
		 * @param {string} name The name of the operation resource.
		 * @return {Operation} Successful response
		 */
		Cloudfunctions_projects_locations_operations_get(name: string): Observable<Operation> {
			return this.http.get<Operation>(this.baseUri + 'v2beta/' + (name == null ? '' : encodeURIComponent(name)), {});
		}

		/**
		 * Updates existing function.
		 * Patch v2beta/{name}
		 * @param {string} name A user-defined name of the function. Function names must be unique globally and match pattern `projects/locations/functions/*`
		 * @param {string} updateMask The list of fields to be updated. If no field mask is provided, all provided fields in the request will be updated.
		 * @return {Operation} Successful response
		 */
		Cloudfunctions_projects_locations_functions_patch(name: string, updateMask: string | null | undefined, requestBody: Function): Observable<Operation> {
			return this.http.patch<Operation>(this.baseUri + 'v2beta/' + (name == null ? '' : encodeURIComponent(name)) + '&updateMask=' + (updateMask == null ? '' : encodeURIComponent(updateMask)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists information about the supported locations for this service.
		 * Get v2beta/{name}/locations
		 * @param {string} name The resource that owns the locations collection, if applicable.
		 * @param {string} filter A filter to narrow down results to a preferred subset. The filtering language accepts strings like `"displayName=tokyo"`, and is documented in more detail in [AIP-160](https://google.aip.dev/160).
		 * @param {number} pageSize The maximum number of results to return. If not set, the service selects a default.
		 * @param {string} pageToken A page token received from the `next_page_token` field in the response. Send that page token to receive the subsequent page.
		 * @return {ListLocationsResponse} Successful response
		 */
		Cloudfunctions_projects_locations_list(name: string, filter: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListLocationsResponse> {
			return this.http.get<ListLocationsResponse>(this.baseUri + 'v2beta/' + (name == null ? '' : encodeURIComponent(name)) + '/locations&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
		 * Get v2beta/{name}/operations
		 * @param {string} name Must not be set.
		 * @param {string} filter Required. A filter for matching the requested operations. The supported formats of *filter* are: To query for a specific function: project:*,location:*,function:* To query for all of the latest operations for a project: project:*,latest:true
		 * @param {number} pageSize The maximum number of records that should be returned. Requested page size cannot exceed 100. If not set, the default page size is 100. Pagination is only supported when querying for a specific function.
		 * @param {string} pageToken Token identifying which result to start with, which is returned by a previous list call. Pagination is only supported when querying for a specific function.
		 * @return {ListOperationsResponse} Successful response
		 */
		Cloudfunctions_projects_locations_operations_list(name: string, filter: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListOperationsResponse> {
			return this.http.get<ListOperationsResponse>(this.baseUri + 'v2beta/' + (name == null ? '' : encodeURIComponent(name)) + '/operations&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Returns a signed URL for downloading deployed function source code. The URL is only valid for a limited period and should be used within 30 minutes of generation. For more information about the signed URL usage see: https://cloud.google.com/storage/docs/access-control/signed-urls
		 * Post v2beta/{name}:generateDownloadUrl
		 * @param {string} name Required. The name of function for which source code Google Cloud Storage signed URL should be generated.
		 * @return {GenerateDownloadUrlResponse} Successful response
		 */
		Cloudfunctions_projects_locations_functions_generateDownloadUrl(name: string, requestBody: GenerateDownloadUrlRequest): Observable<GenerateDownloadUrlResponse> {
			return this.http.post<GenerateDownloadUrlResponse>(this.baseUri + 'v2beta/' + (name == null ? '' : encodeURIComponent(name)) + ':generateDownloadUrl', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns a list of functions that belong to the requested project.
		 * Get v2beta/{parent}/functions
		 * @param {string} parent Required. The project and location from which the function should be listed, specified in the format `projects/locations/*` If you want to list functions in all locations, use "-" in place of a location. When listing functions in all locations, if one or more location(s) are unreachable, the response will contain functions from all reachable locations along with the names of any unreachable locations.
		 * @param {string} filter The filter for Functions that match the filter expression, following the syntax outlined in https://google.aip.dev/160.
		 * @param {string} orderBy The sorting order of the resources returned. Value should be a comma separated list of fields. The default sorting oder is ascending. See https://google.aip.dev/132#ordering.
		 * @param {number} pageSize Maximum number of functions to return per call. The largest allowed page_size is 1,000, if the page_size is omitted or specified as greater than 1,000 then it will be replaced as 1,000. The size of the list response can be less than specified when used with filters.
		 * @param {string} pageToken The value returned by the last `ListFunctionsResponse`; indicates that this is a continuation of a prior `ListFunctions` call, and that the system should return the next page of data.
		 * @return {ListFunctionsResponse} Successful response
		 */
		Cloudfunctions_projects_locations_functions_list(parent: string, filter: string | null | undefined, orderBy: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListFunctionsResponse> {
			return this.http.get<ListFunctionsResponse>(this.baseUri + 'v2beta/' + (parent == null ? '' : encodeURIComponent(parent)) + '/functions&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&orderBy=' + (orderBy == null ? '' : encodeURIComponent(orderBy)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Creates a new function. If a function with the given name already exists in the specified project, the long running operation will return `ALREADY_EXISTS` error.
		 * Post v2beta/{parent}/functions
		 * @param {string} parent Required. The project and location in which the function should be created, specified in the format `projects/locations/*`
		 * @param {string} functionId The ID to use for the function, which will become the final component of the function's resource name. This value should be 4-63 characters, and valid characters are /a-z-/.
		 * @return {Operation} Successful response
		 */
		Cloudfunctions_projects_locations_functions_create(parent: string, functionId: string | null | undefined, requestBody: Function): Observable<Operation> {
			return this.http.post<Operation>(this.baseUri + 'v2beta/' + (parent == null ? '' : encodeURIComponent(parent)) + '/functions&functionId=' + (functionId == null ? '' : encodeURIComponent(functionId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns a signed URL for uploading a function source code. For more information about the signed URL usage see: https://cloud.google.com/storage/docs/access-control/signed-urls. Once the function source code upload is complete, the used signed URL should be provided in CreateFunction or UpdateFunction request as a reference to the function source code. When uploading source code to the generated signed URL, please follow these restrictions: * Source file type should be a zip file. * No credentials should be attached - the signed URLs provide access to the target bucket using internal service identity; if credentials were attached, the identity from the credentials would be used, but that identity does not have permissions to upload files to the URL. When making a HTTP PUT request, specify this header: * `content-type: application/zip` Do not specify this header: * `Authorization: Bearer YOUR_TOKEN`
		 * Post v2beta/{parent}/functions:generateUploadUrl
		 * @param {string} parent Required. The project and location in which the Google Cloud Storage signed URL should be generated, specified in the format `projects/locations/*`.
		 * @return {GenerateUploadUrlResponse} Successful response
		 */
		Cloudfunctions_projects_locations_functions_generateUploadUrl(parent: string, requestBody: GenerateUploadUrlRequest): Observable<GenerateUploadUrlResponse> {
			return this.http.post<GenerateUploadUrlResponse>(this.baseUri + 'v2beta/' + (parent == null ? '' : encodeURIComponent(parent)) + '/functions:generateUploadUrl', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns a list of runtimes that are supported for the requested project.
		 * Get v2beta/{parent}/runtimes
		 * @param {string} parent Required. The project and location from which the runtimes should be listed, specified in the format `projects/locations/*`
		 * @param {string} filter The filter for Runtimes that match the filter expression, following the syntax outlined in https://google.aip.dev/160.
		 * @return {ListRuntimesResponse} Successful response
		 */
		Cloudfunctions_projects_locations_runtimes_list(parent: string, filter: string | null | undefined): Observable<ListRuntimesResponse> {
			return this.http.get<ListRuntimesResponse>(this.baseUri + 'v2beta/' + (parent == null ? '' : encodeURIComponent(parent)) + '/runtimes&filter=' + (filter == null ? '' : encodeURIComponent(filter)), {});
		}

		/**
		 * Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
		 * Get v2beta/{resource}:getIamPolicy
		 * @param {string} resource REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
		 * @param {number} options_requestedPolicyVersion Optional. The maximum policy version that will be used to format the policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset. The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies).
		 * @return {Policy} Successful response
		 */
		Cloudfunctions_projects_locations_functions_getIamPolicy(resource: string, options_requestedPolicyVersion: number | null | undefined): Observable<Policy> {
			return this.http.get<Policy>(this.baseUri + 'v2beta/' + (resource == null ? '' : encodeURIComponent(resource)) + ':getIamPolicy&options_requestedPolicyVersion=' + options_requestedPolicyVersion, {});
		}

		/**
		 * Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
		 * Post v2beta/{resource}:setIamPolicy
		 * @param {string} resource REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
		 * @return {Policy} Successful response
		 */
		Cloudfunctions_projects_locations_functions_setIamPolicy(resource: string, requestBody: SetIamPolicyRequest): Observable<Policy> {
			return this.http.post<Policy>(this.baseUri + 'v2beta/' + (resource == null ? '' : encodeURIComponent(resource)) + ':setIamPolicy', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
		 * Post v2beta/{resource}:testIamPermissions
		 * @param {string} resource REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
		 * @return {TestIamPermissionsResponse} Successful response
		 */
		Cloudfunctions_projects_locations_functions_testIamPermissions(resource: string, requestBody: TestIamPermissionsRequest): Observable<TestIamPermissionsResponse> {
			return this.http.post<TestIamPermissionsResponse>(this.baseUri + 'v2beta/' + (resource == null ? '' : encodeURIComponent(resource)) + ':testIamPermissions', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

}

