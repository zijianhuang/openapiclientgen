import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** Information for connecting over HTTP(s). */
	export interface Addressable {
		url?: string | null;
	}

	/** Information for connecting over HTTP(s). */
	export interface AddressableFormProperties {
		url: FormControl<string | null | undefined>,
	}
	export function CreateAddressableFormGroup() {
		return new FormGroup<AddressableFormProperties>({
			url: new FormControl<string | null | undefined>(undefined),
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

	export enum AuditLogConfigLogType { LOG_TYPE_UNSPECIFIED = 0, ADMIN_READ = 1, DATA_WRITE = 2, DATA_READ = 3 }


	/** A domain that a user has been authorized to administer. To authorize use of a domain, verify ownership via [Search Console](https://search.google.com/search-console/welcome). */
	export interface AuthorizedDomain {

		/** Relative name of the domain authorized for use. Example: `example.com`. */
		id?: string | null;

		/** Deprecated Read only. Full path to the `AuthorizedDomain` resource in the API. Example: `projects/myproject/authorizedDomains/example.com`. */
		name?: string | null;
	}

	/** A domain that a user has been authorized to administer. To authorize use of a domain, verify ownership via [Search Console](https://search.google.com/search-console/welcome). */
	export interface AuthorizedDomainFormProperties {

		/** Relative name of the domain authorized for use. Example: `example.com`. */
		id: FormControl<string | null | undefined>,

		/** Deprecated Read only. Full path to the `AuthorizedDomain` resource in the API. Example: `projects/myproject/authorizedDomains/example.com`. */
		name: FormControl<string | null | undefined>,
	}
	export function CreateAuthorizedDomainFormGroup() {
		return new FormGroup<AuthorizedDomainFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
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


	/** Storage volume source using the Container Storage Interface. */
	export interface CSIVolumeSource {

		/** name of the CSI driver for the requested storage system. Cloud Run supports the following drivers: * gcsfuse.run.googleapis.com : Mount a Cloud Storage Bucket as a volume. */
		driver?: string | null;

		/** If true, mount the volume as read only. Defaults to false. */
		readOnly?: boolean | null;

		/** stores driver specific attributes. For Google Cloud Storage volumes, the following attributes are supported: * bucketName: the name of the Cloud Storage bucket to mount. The Cloud Run Service identity must have access to this bucket. */
		volumeAttributes?: {[id: string]: string };
	}

	/** Storage volume source using the Container Storage Interface. */
	export interface CSIVolumeSourceFormProperties {

		/** name of the CSI driver for the requested storage system. Cloud Run supports the following drivers: * gcsfuse.run.googleapis.com : Mount a Cloud Storage Bucket as a volume. */
		driver: FormControl<string | null | undefined>,

		/** If true, mount the volume as read only. Defaults to false. */
		readOnly: FormControl<boolean | null | undefined>,

		/** stores driver specific attributes. For Google Cloud Storage volumes, the following attributes are supported: * bucketName: the name of the Cloud Storage bucket to mount. The Cloud Run Service identity must have access to this bucket. */
		volumeAttributes: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateCSIVolumeSourceFormGroup() {
		return new FormGroup<CSIVolumeSourceFormProperties>({
			driver: new FormControl<string | null | undefined>(undefined),
			readOnly: new FormControl<boolean | null | undefined>(undefined),
			volumeAttributes: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}


	/** Request message for cancelling an execution. */
	export interface CancelExecutionRequest {
	}

	/** Request message for cancelling an execution. */
	export interface CancelExecutionRequestFormProperties {
	}
	export function CreateCancelExecutionRequestFormGroup() {
		return new FormGroup<CancelExecutionRequestFormProperties>({
		});

	}


	/** Not supported by Cloud Run. ConfigMapEnvSource selects a ConfigMap to populate the environment variables with. The contents of the target ConfigMap's Data field will represent the key-value pairs as environment variables. */
	export interface ConfigMapEnvSource {

		/** Not supported by Cloud Run. LocalObjectReference contains enough information to let you locate the referenced object inside the same namespace. */
		localObjectReference?: LocalObjectReference;

		/** The ConfigMap to select from. */
		name?: string | null;

		/** Specify whether the ConfigMap must be defined. */
		optional?: boolean | null;
	}

	/** Not supported by Cloud Run. ConfigMapEnvSource selects a ConfigMap to populate the environment variables with. The contents of the target ConfigMap's Data field will represent the key-value pairs as environment variables. */
	export interface ConfigMapEnvSourceFormProperties {

		/** The ConfigMap to select from. */
		name: FormControl<string | null | undefined>,

		/** Specify whether the ConfigMap must be defined. */
		optional: FormControl<boolean | null | undefined>,
	}
	export function CreateConfigMapEnvSourceFormGroup() {
		return new FormGroup<ConfigMapEnvSourceFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			optional: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Not supported by Cloud Run. LocalObjectReference contains enough information to let you locate the referenced object inside the same namespace. */
	export interface LocalObjectReference {

		/** Name of the referent. */
		name?: string | null;
	}

	/** Not supported by Cloud Run. LocalObjectReference contains enough information to let you locate the referenced object inside the same namespace. */
	export interface LocalObjectReferenceFormProperties {

		/** Name of the referent. */
		name: FormControl<string | null | undefined>,
	}
	export function CreateLocalObjectReferenceFormGroup() {
		return new FormGroup<LocalObjectReferenceFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Not supported by Cloud Run. */
	export interface ConfigMapKeySelector {

		/** Required. Not supported by Cloud Run. */
		key?: string | null;

		/** Not supported by Cloud Run. LocalObjectReference contains enough information to let you locate the referenced object inside the same namespace. */
		localObjectReference?: LocalObjectReference;

		/** Required. Not supported by Cloud Run. */
		name?: string | null;

		/** Not supported by Cloud Run. */
		optional?: boolean | null;
	}

	/** Not supported by Cloud Run. */
	export interface ConfigMapKeySelectorFormProperties {

		/** Required. Not supported by Cloud Run. */
		key: FormControl<string | null | undefined>,

		/** Required. Not supported by Cloud Run. */
		name: FormControl<string | null | undefined>,

		/** Not supported by Cloud Run. */
		optional: FormControl<boolean | null | undefined>,
	}
	export function CreateConfigMapKeySelectorFormGroup() {
		return new FormGroup<ConfigMapKeySelectorFormProperties>({
			key: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			optional: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Not supported by Cloud Run. Adapts a ConfigMap into a volume. The contents of the target ConfigMap's Data field will be presented in a volume as files using the keys in the Data field as the file names, unless the items element is populated with specific mappings of keys to paths. */
	export interface ConfigMapVolumeSource {

		/** (Optional) Integer representation of mode bits to use on created files by default. Must be a value between 01 and 0777 (octal). If 0 or not set, it will default to 0644. Directories within the path are not affected by this setting. Notes * Internally, a umask of 0222 will be applied to any non-zero value. * This is an integer representation of the mode bits. So, the octal integer value should look exactly as the chmod numeric notation with a leading zero. Some examples: for chmod 777 (a=rwx), set to 0777 (octal) or 511 (base-10). For chmod 640 (u=rw,g=r), set to 0640 (octal) or 416 (base-10). For chmod 755 (u=rwx,g=rx,o=rx), set to 0755 (octal) or 493 (base-10). * This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set. */
		defaultMode?: number | null;

		/** (Optional) If unspecified, each key-value pair in the Data field of the referenced Secret will be projected into the volume as a file whose name is the key and content is the value. If specified, the listed keys will be projected into the specified paths, and unlisted keys will not be present. If a key is specified that is not present in the Secret, the volume setup will error unless it is marked optional. */
		items?: Array<KeyToPath>;

		/** Name of the config. */
		name?: string | null;

		/** (Optional) Specify whether the Secret or its keys must be defined. */
		optional?: boolean | null;
	}

	/** Not supported by Cloud Run. Adapts a ConfigMap into a volume. The contents of the target ConfigMap's Data field will be presented in a volume as files using the keys in the Data field as the file names, unless the items element is populated with specific mappings of keys to paths. */
	export interface ConfigMapVolumeSourceFormProperties {

		/** (Optional) Integer representation of mode bits to use on created files by default. Must be a value between 01 and 0777 (octal). If 0 or not set, it will default to 0644. Directories within the path are not affected by this setting. Notes * Internally, a umask of 0222 will be applied to any non-zero value. * This is an integer representation of the mode bits. So, the octal integer value should look exactly as the chmod numeric notation with a leading zero. Some examples: for chmod 777 (a=rwx), set to 0777 (octal) or 511 (base-10). For chmod 640 (u=rw,g=r), set to 0640 (octal) or 416 (base-10). For chmod 755 (u=rwx,g=rx,o=rx), set to 0755 (octal) or 493 (base-10). * This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set. */
		defaultMode: FormControl<number | null | undefined>,

		/** Name of the config. */
		name: FormControl<string | null | undefined>,

		/** (Optional) Specify whether the Secret or its keys must be defined. */
		optional: FormControl<boolean | null | undefined>,
	}
	export function CreateConfigMapVolumeSourceFormGroup() {
		return new FormGroup<ConfigMapVolumeSourceFormProperties>({
			defaultMode: new FormControl<number | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			optional: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Maps a string key to a path within a volume. */
	export interface KeyToPath {

		/** The Cloud Secret Manager secret version. Can be 'latest' for the latest value, or an integer or a secret alias for a specific version. The key to project. */
		key?: string | null;

		/** (Optional) Mode bits to use on this file, must be a value between 01 and 0777 (octal). If 0 or not set, the Volume's default mode will be used. Notes * Internally, a umask of 0222 will be applied to any non-zero value. * This is an integer representation of the mode bits. So, the octal integer value should look exactly as the chmod numeric notation with a leading zero. Some examples: for chmod 777 (a=rwx), set to 0777 (octal) or 511 (base-10). For chmod 640 (u=rw,g=r), set to 0640 (octal) or 416 (base-10). For chmod 755 (u=rwx,g=rx,o=rx), set to 0755 (octal) or 493 (base-10). * This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set. */
		mode?: number | null;

		/** The relative path of the file to map the key to. May not be an absolute path. May not contain the path element '..'. May not start with the string '..'. */
		path?: string | null;
	}

	/** Maps a string key to a path within a volume. */
	export interface KeyToPathFormProperties {

		/** The Cloud Secret Manager secret version. Can be 'latest' for the latest value, or an integer or a secret alias for a specific version. The key to project. */
		key: FormControl<string | null | undefined>,

		/** (Optional) Mode bits to use on this file, must be a value between 01 and 0777 (octal). If 0 or not set, the Volume's default mode will be used. Notes * Internally, a umask of 0222 will be applied to any non-zero value. * This is an integer representation of the mode bits. So, the octal integer value should look exactly as the chmod numeric notation with a leading zero. Some examples: for chmod 777 (a=rwx), set to 0777 (octal) or 511 (base-10). For chmod 640 (u=rw,g=r), set to 0640 (octal) or 416 (base-10). For chmod 755 (u=rwx,g=rx,o=rx), set to 0755 (octal) or 493 (base-10). * This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set. */
		mode: FormControl<number | null | undefined>,

		/** The relative path of the file to map the key to. May not be an absolute path. May not contain the path element '..'. May not start with the string '..'. */
		path: FormControl<string | null | undefined>,
	}
	export function CreateKeyToPathFormGroup() {
		return new FormGroup<KeyToPathFormProperties>({
			key: new FormControl<string | null | undefined>(undefined),
			mode: new FormControl<number | null | undefined>(undefined),
			path: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Configuration represents the "floating HEAD" of a linear history of Revisions, and optionally how the containers those revisions reference are built. Users create new Revisions by updating the Configuration's spec. The "latest created" revision's name is available under status, as is the "latest ready" revision's name. */
	export interface Configuration {

		/** The API version for this call such as "serving.knative.dev/v1". */
		apiVersion?: string | null;

		/** The kind of resource, in this case always "Configuration". */
		kind?: string | null;

		/** google.cloud.run.meta.v1.ObjectMeta is metadata that all persisted resources must have, which includes all objects users must create. */
		metadata?: ObjectMeta;

		/** ConfigurationSpec holds the desired state of the Configuration (from the client). */
		spec?: ConfigurationSpec;

		/** ConfigurationStatus communicates the observed state of the Configuration (from the controller). */
		status?: ConfigurationStatus;
	}

	/** Configuration represents the "floating HEAD" of a linear history of Revisions, and optionally how the containers those revisions reference are built. Users create new Revisions by updating the Configuration's spec. The "latest created" revision's name is available under status, as is the "latest ready" revision's name. */
	export interface ConfigurationFormProperties {

		/** The API version for this call such as "serving.knative.dev/v1". */
		apiVersion: FormControl<string | null | undefined>,

		/** The kind of resource, in this case always "Configuration". */
		kind: FormControl<string | null | undefined>,
	}
	export function CreateConfigurationFormGroup() {
		return new FormGroup<ConfigurationFormProperties>({
			apiVersion: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** google.cloud.run.meta.v1.ObjectMeta is metadata that all persisted resources must have, which includes all objects users must create. */
	export interface ObjectMeta {

		/** Unstructured key value map stored with a resource that may be set by external tools to store and retrieve arbitrary metadata. They are not queryable and should be preserved when modifying objects. In Cloud Run, annotations with 'run.googleapis.com/' and 'autoscaling.knative.dev' are restricted, and the accepted annotations will be different depending on the resource type. * `autoscaling.knative.dev/maxScale`: Revision. * `autoscaling.knative.dev/minScale`: Revision. * `run.googleapis.com/binary-authorization-breakglass`: Service, Job, * `run.googleapis.com/binary-authorization`: Service, Job, Execution. * `run.googleapis.com/client-name`: All resources. * `run.googleapis.com/cloudsql-instances`: Revision, Execution. * `run.googleapis.com/container-dependencies`: Revision. * `run.googleapis.com/cpu-throttling`: Revision. * `run.googleapis.com/custom-audiences`: Service. * `run.googleapis.com/description`: Service. * `run.googleapis.com/encryption-key-shutdown-hours`: Revision * `run.googleapis.com/encryption-key`: Revision, Execution. * `run.googleapis.com/execution-environment`: Revision, Execution. * `run.googleapis.com/gc-traffic-tags`: Service. * `run.googleapis.com/ingress`: Service. * `run.googleapis.com/launch-stage`: Service, Job. * `run.googleapis.com/minScale`: Service (ALPHA) * `run.googleapis.com/network-interfaces`: Revision, Execution. * `run.googleapis.com/post-key-revocation-action-type`: Revision. * `run.googleapis.com/secrets`: Revision, Execution. * `run.googleapis.com/secure-session-agent`: Revision. * `run.googleapis.com/sessionAffinity`: Revision. * `run.googleapis.com/startup-cpu-boost`: Revision. * `run.googleapis.com/vpc-access-connector`: Revision, Execution. * `run.googleapis.com/vpc-access-egress`: Revision, Execution. */
		annotations?: {[id: string]: string };

		/** Not supported by Cloud Run */
		clusterName?: string | null;

		/** UTC timestamp representing the server time when this object was created. */
		creationTimestamp?: string | null;

		/** Not supported by Cloud Run */
		deletionGracePeriodSeconds?: number | null;

		/** The read-only soft deletion timestamp for this resource. In Cloud Run, users are not able to set this field. Instead, they must call the corresponding Delete API. */
		deletionTimestamp?: string | null;

		/** Not supported by Cloud Run */
		finalizers?: Array<string>;

		/** Not supported by Cloud Run */
		generateName?: string | null;

		/** A system-provided sequence number representing a specific generation of the desired state. */
		generation?: number | null;

		/** Map of string keys and values that can be used to organize and categorize (scope and select) objects. May match selectors of replication controllers and routes. */
		labels?: {[id: string]: string };

		/** Required. The name of the resource. Name is required when creating top-level resources (Service, Job), must be unique within a Cloud Run project/region, and cannot be changed once created. */
		name?: string | null;

		/** Required. Defines the space within each name must be unique within a Cloud Run region. In Cloud Run, it must be project ID or number. */
		namespace?: string | null;

		/** Not supported by Cloud Run */
		ownerReferences?: Array<OwnerReference>;

		/** Opaque, system-generated value that represents the internal version of this object that can be used by clients to determine when objects have changed. May be used for optimistic concurrency, change detection, and the watch operation on a resource or set of resources. Clients must treat these values as opaque and passed unmodified back to the server or omit the value to disable conflict-detection. */
		resourceVersion?: string | null;

		/** URL representing this object. */
		selfLink?: string | null;

		/** Unique, system-generated identifier for this resource. */
		uid?: string | null;
	}

	/** google.cloud.run.meta.v1.ObjectMeta is metadata that all persisted resources must have, which includes all objects users must create. */
	export interface ObjectMetaFormProperties {

		/** Unstructured key value map stored with a resource that may be set by external tools to store and retrieve arbitrary metadata. They are not queryable and should be preserved when modifying objects. In Cloud Run, annotations with 'run.googleapis.com/' and 'autoscaling.knative.dev' are restricted, and the accepted annotations will be different depending on the resource type. * `autoscaling.knative.dev/maxScale`: Revision. * `autoscaling.knative.dev/minScale`: Revision. * `run.googleapis.com/binary-authorization-breakglass`: Service, Job, * `run.googleapis.com/binary-authorization`: Service, Job, Execution. * `run.googleapis.com/client-name`: All resources. * `run.googleapis.com/cloudsql-instances`: Revision, Execution. * `run.googleapis.com/container-dependencies`: Revision. * `run.googleapis.com/cpu-throttling`: Revision. * `run.googleapis.com/custom-audiences`: Service. * `run.googleapis.com/description`: Service. * `run.googleapis.com/encryption-key-shutdown-hours`: Revision * `run.googleapis.com/encryption-key`: Revision, Execution. * `run.googleapis.com/execution-environment`: Revision, Execution. * `run.googleapis.com/gc-traffic-tags`: Service. * `run.googleapis.com/ingress`: Service. * `run.googleapis.com/launch-stage`: Service, Job. * `run.googleapis.com/minScale`: Service (ALPHA) * `run.googleapis.com/network-interfaces`: Revision, Execution. * `run.googleapis.com/post-key-revocation-action-type`: Revision. * `run.googleapis.com/secrets`: Revision, Execution. * `run.googleapis.com/secure-session-agent`: Revision. * `run.googleapis.com/sessionAffinity`: Revision. * `run.googleapis.com/startup-cpu-boost`: Revision. * `run.googleapis.com/vpc-access-connector`: Revision, Execution. * `run.googleapis.com/vpc-access-egress`: Revision, Execution. */
		annotations: FormControl<{[id: string]: string } | null | undefined>,

		/** Not supported by Cloud Run */
		clusterName: FormControl<string | null | undefined>,

		/** UTC timestamp representing the server time when this object was created. */
		creationTimestamp: FormControl<string | null | undefined>,

		/** Not supported by Cloud Run */
		deletionGracePeriodSeconds: FormControl<number | null | undefined>,

		/** The read-only soft deletion timestamp for this resource. In Cloud Run, users are not able to set this field. Instead, they must call the corresponding Delete API. */
		deletionTimestamp: FormControl<string | null | undefined>,

		/** Not supported by Cloud Run */
		generateName: FormControl<string | null | undefined>,

		/** A system-provided sequence number representing a specific generation of the desired state. */
		generation: FormControl<number | null | undefined>,

		/** Map of string keys and values that can be used to organize and categorize (scope and select) objects. May match selectors of replication controllers and routes. */
		labels: FormControl<{[id: string]: string } | null | undefined>,

		/** Required. The name of the resource. Name is required when creating top-level resources (Service, Job), must be unique within a Cloud Run project/region, and cannot be changed once created. */
		name: FormControl<string | null | undefined>,

		/** Required. Defines the space within each name must be unique within a Cloud Run region. In Cloud Run, it must be project ID or number. */
		namespace: FormControl<string | null | undefined>,

		/** Opaque, system-generated value that represents the internal version of this object that can be used by clients to determine when objects have changed. May be used for optimistic concurrency, change detection, and the watch operation on a resource or set of resources. Clients must treat these values as opaque and passed unmodified back to the server or omit the value to disable conflict-detection. */
		resourceVersion: FormControl<string | null | undefined>,

		/** URL representing this object. */
		selfLink: FormControl<string | null | undefined>,

		/** Unique, system-generated identifier for this resource. */
		uid: FormControl<string | null | undefined>,
	}
	export function CreateObjectMetaFormGroup() {
		return new FormGroup<ObjectMetaFormProperties>({
			annotations: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			clusterName: new FormControl<string | null | undefined>(undefined),
			creationTimestamp: new FormControl<string | null | undefined>(undefined),
			deletionGracePeriodSeconds: new FormControl<number | null | undefined>(undefined),
			deletionTimestamp: new FormControl<string | null | undefined>(undefined),
			generateName: new FormControl<string | null | undefined>(undefined),
			generation: new FormControl<number | null | undefined>(undefined),
			labels: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			namespace: new FormControl<string | null | undefined>(undefined),
			resourceVersion: new FormControl<string | null | undefined>(undefined),
			selfLink: new FormControl<string | null | undefined>(undefined),
			uid: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** This is not supported or used by Cloud Run. */
	export interface OwnerReference {

		/** This is not supported or used by Cloud Run. */
		apiVersion?: string | null;

		/** This is not supported or used by Cloud Run. */
		blockOwnerDeletion?: boolean | null;

		/** This is not supported or used by Cloud Run. */
		controller?: boolean | null;

		/** This is not supported or used by Cloud Run. */
		kind?: string | null;

		/** This is not supported or used by Cloud Run. */
		name?: string | null;

		/** This is not supported or used by Cloud Run. */
		uid?: string | null;
	}

	/** This is not supported or used by Cloud Run. */
	export interface OwnerReferenceFormProperties {

		/** This is not supported or used by Cloud Run. */
		apiVersion: FormControl<string | null | undefined>,

		/** This is not supported or used by Cloud Run. */
		blockOwnerDeletion: FormControl<boolean | null | undefined>,

		/** This is not supported or used by Cloud Run. */
		controller: FormControl<boolean | null | undefined>,

		/** This is not supported or used by Cloud Run. */
		kind: FormControl<string | null | undefined>,

		/** This is not supported or used by Cloud Run. */
		name: FormControl<string | null | undefined>,

		/** This is not supported or used by Cloud Run. */
		uid: FormControl<string | null | undefined>,
	}
	export function CreateOwnerReferenceFormGroup() {
		return new FormGroup<OwnerReferenceFormProperties>({
			apiVersion: new FormControl<string | null | undefined>(undefined),
			blockOwnerDeletion: new FormControl<boolean | null | undefined>(undefined),
			controller: new FormControl<boolean | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			uid: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** ConfigurationSpec holds the desired state of the Configuration (from the client). */
	export interface ConfigurationSpec {

		/** RevisionTemplateSpec describes the data a revision should have when created from a template. */
		template?: RevisionTemplate;
	}

	/** ConfigurationSpec holds the desired state of the Configuration (from the client). */
	export interface ConfigurationSpecFormProperties {
	}
	export function CreateConfigurationSpecFormGroup() {
		return new FormGroup<ConfigurationSpecFormProperties>({
		});

	}


	/** RevisionTemplateSpec describes the data a revision should have when created from a template. */
	export interface RevisionTemplate {

		/** google.cloud.run.meta.v1.ObjectMeta is metadata that all persisted resources must have, which includes all objects users must create. */
		metadata?: ObjectMeta;

		/** RevisionSpec holds the desired state of the Revision (from the client). */
		spec?: RevisionSpec;
	}

	/** RevisionTemplateSpec describes the data a revision should have when created from a template. */
	export interface RevisionTemplateFormProperties {
	}
	export function CreateRevisionTemplateFormGroup() {
		return new FormGroup<RevisionTemplateFormProperties>({
		});

	}


	/** RevisionSpec holds the desired state of the Revision (from the client). */
	export interface RevisionSpec {

		/** ContainerConcurrency specifies the maximum allowed in-flight (concurrent) requests per container instance of the Revision. If not specified, defaults to 80. */
		containerConcurrency?: number | null;

		/** Containers holds the single container that defines the unit of execution for this Revision. In the context of a Revision, we disallow a number of fields on this Container, including: name and lifecycle. In Cloud Run, only a single container may be provided. */
		containers?: Array<Container>;

		/** Not supported by Cloud Run. */
		enableServiceLinks?: boolean | null;

		/** Not supported by Cloud Run. */
		imagePullSecrets?: Array<LocalObjectReference>;

		/** Email address of the IAM service account associated with the revision of the service. The service account represents the identity of the running revision, and determines what permissions the revision has. If not provided, the revision will use the project's default service account. */
		serviceAccountName?: string | null;

		/** TimeoutSeconds holds the max duration the instance is allowed for responding to a request. Cloud Run: defaults to 300 seconds (5 minutes). Maximum allowed value is 3600 seconds (1 hour). */
		timeoutSeconds?: number | null;
		volumes?: Array<Volume>;
	}

	/** RevisionSpec holds the desired state of the Revision (from the client). */
	export interface RevisionSpecFormProperties {

		/** ContainerConcurrency specifies the maximum allowed in-flight (concurrent) requests per container instance of the Revision. If not specified, defaults to 80. */
		containerConcurrency: FormControl<number | null | undefined>,

		/** Not supported by Cloud Run. */
		enableServiceLinks: FormControl<boolean | null | undefined>,

		/** Email address of the IAM service account associated with the revision of the service. The service account represents the identity of the running revision, and determines what permissions the revision has. If not provided, the revision will use the project's default service account. */
		serviceAccountName: FormControl<string | null | undefined>,

		/** TimeoutSeconds holds the max duration the instance is allowed for responding to a request. Cloud Run: defaults to 300 seconds (5 minutes). Maximum allowed value is 3600 seconds (1 hour). */
		timeoutSeconds: FormControl<number | null | undefined>,
	}
	export function CreateRevisionSpecFormGroup() {
		return new FormGroup<RevisionSpecFormProperties>({
			containerConcurrency: new FormControl<number | null | undefined>(undefined),
			enableServiceLinks: new FormControl<boolean | null | undefined>(undefined),
			serviceAccountName: new FormControl<string | null | undefined>(undefined),
			timeoutSeconds: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** A single application container. This specifies both the container to run, the command to run in the container and the arguments to supply to it. Note that additional arguments may be supplied by the system to the container at runtime. */
	export interface Container {

		/** Arguments to the entrypoint. The docker image's CMD is used if this is not provided. Variable references are not supported in Cloud Run. */
		args?: Array<string>;

		/** Entrypoint array. Not executed within a shell. The docker image's ENTRYPOINT is used if this is not provided. Variable references are not supported in Cloud Run. */
		command?: Array<string>;

		/** List of environment variables to set in the container. EnvVar with duplicate names are generally allowed; if referencing a secret, the name must be unique for the container. For non-secret EnvVar names, the Container will only get the last-declared one. */
		env?: Array<EnvVar>;

		/** Not supported by Cloud Run. */
		envFrom?: Array<EnvFromSource>;

		/** Required. Name of the container image in Dockerhub, Google Artifact Registry, or Google Container Registry. If the host is not provided, Dockerhub is assumed. */
		image?: string | null;

		/** Image pull policy. One of Always, Never, IfNotPresent. Defaults to Always if :latest tag is specified, or IfNotPresent otherwise. */
		imagePullPolicy?: string | null;

		/** Probe describes a health check to be performed against a container to determine whether it is alive or ready to receive traffic. */
		livenessProbe?: Probe;

		/** Name of the container specified as a DNS_LABEL (RFC 1123). */
		name?: string | null;

		/** List of ports to expose from the container. Only a single port can be specified. The specified ports must be listening on all interfaces (0.0.0.0) within the container to be accessible. If omitted, a port number will be chosen and passed to the container through the PORT environment variable for the container to listen on. */
		ports?: Array<ContainerPort>;

		/** Probe describes a health check to be performed against a container to determine whether it is alive or ready to receive traffic. */
		readinessProbe?: Probe;

		/** ResourceRequirements describes the compute resource requirements. */
		resources?: ResourceRequirements;

		/** Not supported by Cloud Run. SecurityContext holds security configuration that will be applied to a container. Some fields are present in both SecurityContext and PodSecurityContext. When both are set, the values in SecurityContext take precedence. */
		securityContext?: SecurityContext;

		/** Probe describes a health check to be performed against a container to determine whether it is alive or ready to receive traffic. */
		startupProbe?: Probe;

		/** Path at which the file to which the container's termination message will be written is mounted into the container's filesystem. Message written is intended to be brief final status, such as an assertion failure message. Will be truncated by the node if greater than 4096 bytes. The total message length across all containers will be limited to 12kb. Defaults to /dev/termination-log. */
		terminationMessagePath?: string | null;

		/** Indicate how the termination message should be populated. File will use the contents of terminationMessagePath to populate the container status message on both success and failure. FallbackToLogsOnError will use the last chunk of container log output if the termination message file is empty and the container exited with an error. The log output is limited to 2048 bytes or 80 lines, whichever is smaller. Defaults to File. Cannot be updated. */
		terminationMessagePolicy?: string | null;

		/** Volume to mount into the container's filesystem. Only supports SecretVolumeSources. Pod volumes to mount into the container's filesystem. */
		volumeMounts?: Array<VolumeMount>;

		/** Container's working directory. If not specified, the container runtime's default will be used, which might be configured in the container image. */
		workingDir?: string | null;
	}

	/** A single application container. This specifies both the container to run, the command to run in the container and the arguments to supply to it. Note that additional arguments may be supplied by the system to the container at runtime. */
	export interface ContainerFormProperties {

		/** Required. Name of the container image in Dockerhub, Google Artifact Registry, or Google Container Registry. If the host is not provided, Dockerhub is assumed. */
		image: FormControl<string | null | undefined>,

		/** Image pull policy. One of Always, Never, IfNotPresent. Defaults to Always if :latest tag is specified, or IfNotPresent otherwise. */
		imagePullPolicy: FormControl<string | null | undefined>,

		/** Name of the container specified as a DNS_LABEL (RFC 1123). */
		name: FormControl<string | null | undefined>,

		/** Path at which the file to which the container's termination message will be written is mounted into the container's filesystem. Message written is intended to be brief final status, such as an assertion failure message. Will be truncated by the node if greater than 4096 bytes. The total message length across all containers will be limited to 12kb. Defaults to /dev/termination-log. */
		terminationMessagePath: FormControl<string | null | undefined>,

		/** Indicate how the termination message should be populated. File will use the contents of terminationMessagePath to populate the container status message on both success and failure. FallbackToLogsOnError will use the last chunk of container log output if the termination message file is empty and the container exited with an error. The log output is limited to 2048 bytes or 80 lines, whichever is smaller. Defaults to File. Cannot be updated. */
		terminationMessagePolicy: FormControl<string | null | undefined>,

		/** Container's working directory. If not specified, the container runtime's default will be used, which might be configured in the container image. */
		workingDir: FormControl<string | null | undefined>,
	}
	export function CreateContainerFormGroup() {
		return new FormGroup<ContainerFormProperties>({
			image: new FormControl<string | null | undefined>(undefined),
			imagePullPolicy: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			terminationMessagePath: new FormControl<string | null | undefined>(undefined),
			terminationMessagePolicy: new FormControl<string | null | undefined>(undefined),
			workingDir: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** EnvVar represents an environment variable present in a Container. */
	export interface EnvVar {

		/** Required. Name of the environment variable. */
		name?: string | null;

		/** Value of the environment variable. Defaults to "". Variable references are not supported in Cloud Run. */
		value?: string | null;

		/** EnvVarSource represents a source for the value of an EnvVar. */
		valueFrom?: EnvVarSource;
	}

	/** EnvVar represents an environment variable present in a Container. */
	export interface EnvVarFormProperties {

		/** Required. Name of the environment variable. */
		name: FormControl<string | null | undefined>,

		/** Value of the environment variable. Defaults to "". Variable references are not supported in Cloud Run. */
		value: FormControl<string | null | undefined>,
	}
	export function CreateEnvVarFormGroup() {
		return new FormGroup<EnvVarFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** EnvVarSource represents a source for the value of an EnvVar. */
	export interface EnvVarSource {

		/** Not supported by Cloud Run. */
		configMapKeyRef?: ConfigMapKeySelector;

		/** SecretKeySelector selects a key of a Secret. */
		secretKeyRef?: SecretKeySelector;
	}

	/** EnvVarSource represents a source for the value of an EnvVar. */
	export interface EnvVarSourceFormProperties {
	}
	export function CreateEnvVarSourceFormGroup() {
		return new FormGroup<EnvVarSourceFormProperties>({
		});

	}


	/** SecretKeySelector selects a key of a Secret. */
	export interface SecretKeySelector {

		/** Required. A Cloud Secret Manager secret version. Must be 'latest' for the latest version, an integer for a specific version, or a version alias. The key of the secret to select from. Must be a valid secret key. */
		key?: string | null;

		/** Not supported by Cloud Run. LocalObjectReference contains enough information to let you locate the referenced object inside the same namespace. */
		localObjectReference?: LocalObjectReference;

		/** The name of the secret in Cloud Secret Manager. By default, the secret is assumed to be in the same project. If the secret is in another project, you must define an alias. An alias definition has the form: :projects//secrets/. If multiple alias definitions are needed, they must be separated by commas. The alias definitions must be set on the run.googleapis.com/secrets annotation. The name of the secret in the pod's namespace to select from. */
		name?: string | null;

		/** Specify whether the Secret or its key must be defined. */
		optional?: boolean | null;
	}

	/** SecretKeySelector selects a key of a Secret. */
	export interface SecretKeySelectorFormProperties {

		/** Required. A Cloud Secret Manager secret version. Must be 'latest' for the latest version, an integer for a specific version, or a version alias. The key of the secret to select from. Must be a valid secret key. */
		key: FormControl<string | null | undefined>,

		/** The name of the secret in Cloud Secret Manager. By default, the secret is assumed to be in the same project. If the secret is in another project, you must define an alias. An alias definition has the form: :projects//secrets/. If multiple alias definitions are needed, they must be separated by commas. The alias definitions must be set on the run.googleapis.com/secrets annotation. The name of the secret in the pod's namespace to select from. */
		name: FormControl<string | null | undefined>,

		/** Specify whether the Secret or its key must be defined. */
		optional: FormControl<boolean | null | undefined>,
	}
	export function CreateSecretKeySelectorFormGroup() {
		return new FormGroup<SecretKeySelectorFormProperties>({
			key: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			optional: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Not supported by Cloud Run. EnvFromSource represents the source of a set of ConfigMaps */
	export interface EnvFromSource {

		/** Not supported by Cloud Run. ConfigMapEnvSource selects a ConfigMap to populate the environment variables with. The contents of the target ConfigMap's Data field will represent the key-value pairs as environment variables. */
		configMapRef?: ConfigMapEnvSource;

		/** An optional identifier to prepend to each key in the ConfigMap. Must be a C_IDENTIFIER. */
		prefix?: string | null;

		/** Not supported by Cloud Run. SecretEnvSource selects a Secret to populate the environment variables with. The contents of the target Secret's Data field will represent the key-value pairs as environment variables. */
		secretRef?: SecretEnvSource;
	}

	/** Not supported by Cloud Run. EnvFromSource represents the source of a set of ConfigMaps */
	export interface EnvFromSourceFormProperties {

		/** An optional identifier to prepend to each key in the ConfigMap. Must be a C_IDENTIFIER. */
		prefix: FormControl<string | null | undefined>,
	}
	export function CreateEnvFromSourceFormGroup() {
		return new FormGroup<EnvFromSourceFormProperties>({
			prefix: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Not supported by Cloud Run. SecretEnvSource selects a Secret to populate the environment variables with. The contents of the target Secret's Data field will represent the key-value pairs as environment variables. */
	export interface SecretEnvSource {

		/** Not supported by Cloud Run. LocalObjectReference contains enough information to let you locate the referenced object inside the same namespace. */
		localObjectReference?: LocalObjectReference;

		/** The Secret to select from. */
		name?: string | null;

		/** Specify whether the Secret must be defined */
		optional?: boolean | null;
	}

	/** Not supported by Cloud Run. SecretEnvSource selects a Secret to populate the environment variables with. The contents of the target Secret's Data field will represent the key-value pairs as environment variables. */
	export interface SecretEnvSourceFormProperties {

		/** The Secret to select from. */
		name: FormControl<string | null | undefined>,

		/** Specify whether the Secret must be defined */
		optional: FormControl<boolean | null | undefined>,
	}
	export function CreateSecretEnvSourceFormGroup() {
		return new FormGroup<SecretEnvSourceFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			optional: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Probe describes a health check to be performed against a container to determine whether it is alive or ready to receive traffic. */
	export interface Probe {

		/** Not supported by Cloud Run. ExecAction describes a "run in container" action. */
		exec?: ExecAction;

		/** Minimum consecutive failures for the probe to be considered failed after having succeeded. Defaults to 3. Minimum value is 1. */
		failureThreshold?: number | null;

		/** GRPCAction describes an action involving a GRPC port. */
		grpc?: GRPCAction;

		/** HTTPGetAction describes an action based on HTTP Get requests. */
		httpGet?: HTTPGetAction;

		/** Number of seconds after the container has started before the probe is initiated. Defaults to 0 seconds. Minimum value is 0. Maximum value for liveness probe is 3600. Maximum value for startup probe is 240. */
		initialDelaySeconds?: number | null;

		/** How often (in seconds) to perform the probe. Default to 10 seconds. Minimum value is 1. Maximum value for liveness probe is 3600. Maximum value for startup probe is 240. Must be greater or equal than timeout_seconds. */
		periodSeconds?: number | null;

		/** Minimum consecutive successes for the probe to be considered successful after having failed. Must be 1 if set. */
		successThreshold?: number | null;

		/** TCPSocketAction describes an action based on opening a socket */
		tcpSocket?: TCPSocketAction;

		/** Number of seconds after which the probe times out. Defaults to 1 second. Minimum value is 1. Maximum value is 3600. Must be smaller than period_seconds; if period_seconds is not set, must be less or equal than 10. */
		timeoutSeconds?: number | null;
	}

	/** Probe describes a health check to be performed against a container to determine whether it is alive or ready to receive traffic. */
	export interface ProbeFormProperties {

		/** Minimum consecutive failures for the probe to be considered failed after having succeeded. Defaults to 3. Minimum value is 1. */
		failureThreshold: FormControl<number | null | undefined>,

		/** Number of seconds after the container has started before the probe is initiated. Defaults to 0 seconds. Minimum value is 0. Maximum value for liveness probe is 3600. Maximum value for startup probe is 240. */
		initialDelaySeconds: FormControl<number | null | undefined>,

		/** How often (in seconds) to perform the probe. Default to 10 seconds. Minimum value is 1. Maximum value for liveness probe is 3600. Maximum value for startup probe is 240. Must be greater or equal than timeout_seconds. */
		periodSeconds: FormControl<number | null | undefined>,

		/** Minimum consecutive successes for the probe to be considered successful after having failed. Must be 1 if set. */
		successThreshold: FormControl<number | null | undefined>,

		/** Number of seconds after which the probe times out. Defaults to 1 second. Minimum value is 1. Maximum value is 3600. Must be smaller than period_seconds; if period_seconds is not set, must be less or equal than 10. */
		timeoutSeconds: FormControl<number | null | undefined>,
	}
	export function CreateProbeFormGroup() {
		return new FormGroup<ProbeFormProperties>({
			failureThreshold: new FormControl<number | null | undefined>(undefined),
			initialDelaySeconds: new FormControl<number | null | undefined>(undefined),
			periodSeconds: new FormControl<number | null | undefined>(undefined),
			successThreshold: new FormControl<number | null | undefined>(undefined),
			timeoutSeconds: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Not supported by Cloud Run. ExecAction describes a "run in container" action. */
	export interface ExecAction {

		/** Command is the command line to execute inside the container, the working directory for the command is root ('/') in the container's filesystem. The command is simply exec'd, it is not run inside a shell, so traditional shell instructions ('|', etc) won't work. To use a shell, you need to explicitly call out to that shell. Exit status of 0 is treated as live/healthy and non-zero is unhealthy. */
		command?: Array<string>;
	}

	/** Not supported by Cloud Run. ExecAction describes a "run in container" action. */
	export interface ExecActionFormProperties {
	}
	export function CreateExecActionFormGroup() {
		return new FormGroup<ExecActionFormProperties>({
		});

	}


	/** GRPCAction describes an action involving a GRPC port. */
	export interface GRPCAction {

		/** Port number of the gRPC service. Number must be in the range 1 to 65535. */
		port?: number | null;

		/** Service is the name of the service to place in the gRPC HealthCheckRequest. If this is not specified, the default behavior is defined by gRPC. */
		service?: string | null;
	}

	/** GRPCAction describes an action involving a GRPC port. */
	export interface GRPCActionFormProperties {

		/** Port number of the gRPC service. Number must be in the range 1 to 65535. */
		port: FormControl<number | null | undefined>,

		/** Service is the name of the service to place in the gRPC HealthCheckRequest. If this is not specified, the default behavior is defined by gRPC. */
		service: FormControl<string | null | undefined>,
	}
	export function CreateGRPCActionFormGroup() {
		return new FormGroup<GRPCActionFormProperties>({
			port: new FormControl<number | null | undefined>(undefined),
			service: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** HTTPGetAction describes an action based on HTTP Get requests. */
	export interface HTTPGetAction {

		/** Not supported by Cloud Run. */
		host?: string | null;

		/** Custom headers to set in the request. HTTP allows repeated headers. */
		httpHeaders?: Array<HTTPHeader>;

		/** Path to access on the HTTP server. */
		path?: string | null;

		/** Port number to access on the container. Number must be in the range 1 to 65535. */
		port?: number | null;

		/** Not supported by Cloud Run. */
		scheme?: string | null;
	}

	/** HTTPGetAction describes an action based on HTTP Get requests. */
	export interface HTTPGetActionFormProperties {

		/** Not supported by Cloud Run. */
		host: FormControl<string | null | undefined>,

		/** Path to access on the HTTP server. */
		path: FormControl<string | null | undefined>,

		/** Port number to access on the container. Number must be in the range 1 to 65535. */
		port: FormControl<number | null | undefined>,

		/** Not supported by Cloud Run. */
		scheme: FormControl<string | null | undefined>,
	}
	export function CreateHTTPGetActionFormGroup() {
		return new FormGroup<HTTPGetActionFormProperties>({
			host: new FormControl<string | null | undefined>(undefined),
			path: new FormControl<string | null | undefined>(undefined),
			port: new FormControl<number | null | undefined>(undefined),
			scheme: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** HTTPHeader describes a custom header to be used in HTTP probes */
	export interface HTTPHeader {

		/** Required. The header field name */
		name?: string | null;

		/** The header field value */
		value?: string | null;
	}

	/** HTTPHeader describes a custom header to be used in HTTP probes */
	export interface HTTPHeaderFormProperties {

		/** Required. The header field name */
		name: FormControl<string | null | undefined>,

		/** The header field value */
		value: FormControl<string | null | undefined>,
	}
	export function CreateHTTPHeaderFormGroup() {
		return new FormGroup<HTTPHeaderFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** TCPSocketAction describes an action based on opening a socket */
	export interface TCPSocketAction {

		/** Not supported by Cloud Run. */
		host?: string | null;

		/** Port number to access on the container. Number must be in the range 1 to 65535. */
		port?: number | null;
	}

	/** TCPSocketAction describes an action based on opening a socket */
	export interface TCPSocketActionFormProperties {

		/** Not supported by Cloud Run. */
		host: FormControl<string | null | undefined>,

		/** Port number to access on the container. Number must be in the range 1 to 65535. */
		port: FormControl<number | null | undefined>,
	}
	export function CreateTCPSocketActionFormGroup() {
		return new FormGroup<TCPSocketActionFormProperties>({
			host: new FormControl<string | null | undefined>(undefined),
			port: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** ContainerPort represents a network port in a single container. */
	export interface ContainerPort {

		/** Port number the container listens on. If present, this must be a valid port number, 0 < x < 65536. If not present, it will default to port 8080. For more information, see https://cloud.google.com/run/docs/container-contract#port */
		containerPort?: number | null;

		/** If specified, used to specify which protocol to use. Allowed values are "http1" and "h2c". */
		name?: string | null;

		/** Protocol for port. Must be "TCP". Defaults to "TCP". */
		protocol?: string | null;
	}

	/** ContainerPort represents a network port in a single container. */
	export interface ContainerPortFormProperties {

		/** Port number the container listens on. If present, this must be a valid port number, 0 < x < 65536. If not present, it will default to port 8080. For more information, see https://cloud.google.com/run/docs/container-contract#port */
		containerPort: FormControl<number | null | undefined>,

		/** If specified, used to specify which protocol to use. Allowed values are "http1" and "h2c". */
		name: FormControl<string | null | undefined>,

		/** Protocol for port. Must be "TCP". Defaults to "TCP". */
		protocol: FormControl<string | null | undefined>,
	}
	export function CreateContainerPortFormGroup() {
		return new FormGroup<ContainerPortFormProperties>({
			containerPort: new FormControl<number | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			protocol: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** ResourceRequirements describes the compute resource requirements. */
	export interface ResourceRequirements {

		/** Limits describes the maximum amount of compute resources allowed. Only 'cpu' and 'memory' keys are supported. * For supported 'cpu' values, go to https://cloud.google.com/run/docs/configuring/cpu. * For supported 'memory' values and syntax, go to https://cloud.google.com/run/docs/configuring/memory-limits */
		limits?: {[id: string]: string };

		/** Requests describes the minimum amount of compute resources required. Only `cpu` and `memory` are supported. If Requests is omitted for a container, it defaults to Limits if that is explicitly specified, otherwise to an implementation-defined value. * For supported 'cpu' values, go to https://cloud.google.com/run/docs/configuring/cpu. * For supported 'memory' values and syntax, go to https://cloud.google.com/run/docs/configuring/memory-limits */
		requests?: {[id: string]: string };
	}

	/** ResourceRequirements describes the compute resource requirements. */
	export interface ResourceRequirementsFormProperties {

		/** Limits describes the maximum amount of compute resources allowed. Only 'cpu' and 'memory' keys are supported. * For supported 'cpu' values, go to https://cloud.google.com/run/docs/configuring/cpu. * For supported 'memory' values and syntax, go to https://cloud.google.com/run/docs/configuring/memory-limits */
		limits: FormControl<{[id: string]: string } | null | undefined>,

		/** Requests describes the minimum amount of compute resources required. Only `cpu` and `memory` are supported. If Requests is omitted for a container, it defaults to Limits if that is explicitly specified, otherwise to an implementation-defined value. * For supported 'cpu' values, go to https://cloud.google.com/run/docs/configuring/cpu. * For supported 'memory' values and syntax, go to https://cloud.google.com/run/docs/configuring/memory-limits */
		requests: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateResourceRequirementsFormGroup() {
		return new FormGroup<ResourceRequirementsFormProperties>({
			limits: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			requests: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}


	/** Not supported by Cloud Run. SecurityContext holds security configuration that will be applied to a container. Some fields are present in both SecurityContext and PodSecurityContext. When both are set, the values in SecurityContext take precedence. */
	export interface SecurityContext {

		/** The UID to run the entrypoint of the container process. Defaults to user specified in image metadata if unspecified. May also be set in PodSecurityContext. If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence. */
		runAsUser?: number | null;
	}

	/** Not supported by Cloud Run. SecurityContext holds security configuration that will be applied to a container. Some fields are present in both SecurityContext and PodSecurityContext. When both are set, the values in SecurityContext take precedence. */
	export interface SecurityContextFormProperties {

		/** The UID to run the entrypoint of the container process. Defaults to user specified in image metadata if unspecified. May also be set in PodSecurityContext. If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence. */
		runAsUser: FormControl<number | null | undefined>,
	}
	export function CreateSecurityContextFormGroup() {
		return new FormGroup<SecurityContextFormProperties>({
			runAsUser: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** VolumeMount describes a mounting of a Volume within a container. */
	export interface VolumeMount {

		/** Required. Path within the container at which the volume should be mounted. Must not contain ':'. */
		mountPath?: string | null;

		/** Required. The name of the volume. There must be a corresponding Volume with the same name. */
		name?: string | null;

		/** Sets the mount to be read-only or read-write. Not used by Cloud Run. */
		readOnly?: boolean | null;

		/** Path within the volume from which the container's volume should be mounted. Defaults to "" (volume's root). */
		subPath?: string | null;
	}

	/** VolumeMount describes a mounting of a Volume within a container. */
	export interface VolumeMountFormProperties {

		/** Required. Path within the container at which the volume should be mounted. Must not contain ':'. */
		mountPath: FormControl<string | null | undefined>,

		/** Required. The name of the volume. There must be a corresponding Volume with the same name. */
		name: FormControl<string | null | undefined>,

		/** Sets the mount to be read-only or read-write. Not used by Cloud Run. */
		readOnly: FormControl<boolean | null | undefined>,

		/** Path within the volume from which the container's volume should be mounted. Defaults to "" (volume's root). */
		subPath: FormControl<string | null | undefined>,
	}
	export function CreateVolumeMountFormGroup() {
		return new FormGroup<VolumeMountFormProperties>({
			mountPath: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			readOnly: new FormControl<boolean | null | undefined>(undefined),
			subPath: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Volume represents a named volume in a container. */
	export interface Volume {

		/** Not supported by Cloud Run. Adapts a ConfigMap into a volume. The contents of the target ConfigMap's Data field will be presented in a volume as files using the keys in the Data field as the file names, unless the items element is populated with specific mappings of keys to paths. */
		configMap?: ConfigMapVolumeSource;

		/** Storage volume source using the Container Storage Interface. */
		csi?: CSIVolumeSource;

		/** In memory (tmpfs) ephemeral storage. It is ephemeral in the sense that when the sandbox is taken down, the data is destroyed with it (it does not persist across sandbox runs). */
		emptyDir?: EmptyDirVolumeSource;

		/** Volume's name. In Cloud Run Fully Managed, the name 'cloudsql' is reserved. */
		name?: string | null;

		/** Represents a persistent volume that will be mounted using NFS. This volume will be shared between all instances of the Service and data will not be deleted when the instance is shut down. */
		nfs?: NFSVolumeSource;

		/** A volume representing a secret stored in Google Secret Manager. The secret's value will be presented as the content of a file whose name is defined in the item path. If no items are defined, the name of the file is the secret_name. The contents of the target Secret's Data field will be presented in a volume as files using the keys in the Data field as the file names. */
		secret?: SecretVolumeSource;
	}

	/** Volume represents a named volume in a container. */
	export interface VolumeFormProperties {

		/** Volume's name. In Cloud Run Fully Managed, the name 'cloudsql' is reserved. */
		name: FormControl<string | null | undefined>,
	}
	export function CreateVolumeFormGroup() {
		return new FormGroup<VolumeFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** In memory (tmpfs) ephemeral storage. It is ephemeral in the sense that when the sandbox is taken down, the data is destroyed with it (it does not persist across sandbox runs). */
	export interface EmptyDirVolumeSource {

		/** The medium on which the data is stored. The default is "" which means to use the node's default medium. Must be an empty string (default) or Memory. More info: https://kubernetes.io/docs/concepts/storage/volumes#emptydir */
		medium?: string | null;

		/** Limit on the storage usable by this EmptyDir volume. The size limit is also applicable for memory medium. The maximum usage on memory medium EmptyDir would be the minimum value between the SizeLimit specified here and the sum of memory limits of all containers. The default is nil which means that the limit is undefined. More info: https://cloud.google.com/run/docs/configuring/in-memory-volumes#configure-volume. Info in Kubernetes: https://kubernetes.io/docs/concepts/storage/volumes/#emptydir */
		sizeLimit?: string | null;
	}

	/** In memory (tmpfs) ephemeral storage. It is ephemeral in the sense that when the sandbox is taken down, the data is destroyed with it (it does not persist across sandbox runs). */
	export interface EmptyDirVolumeSourceFormProperties {

		/** The medium on which the data is stored. The default is "" which means to use the node's default medium. Must be an empty string (default) or Memory. More info: https://kubernetes.io/docs/concepts/storage/volumes#emptydir */
		medium: FormControl<string | null | undefined>,

		/** Limit on the storage usable by this EmptyDir volume. The size limit is also applicable for memory medium. The maximum usage on memory medium EmptyDir would be the minimum value between the SizeLimit specified here and the sum of memory limits of all containers. The default is nil which means that the limit is undefined. More info: https://cloud.google.com/run/docs/configuring/in-memory-volumes#configure-volume. Info in Kubernetes: https://kubernetes.io/docs/concepts/storage/volumes/#emptydir */
		sizeLimit: FormControl<string | null | undefined>,
	}
	export function CreateEmptyDirVolumeSourceFormGroup() {
		return new FormGroup<EmptyDirVolumeSourceFormProperties>({
			medium: new FormControl<string | null | undefined>(undefined),
			sizeLimit: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents a persistent volume that will be mounted using NFS. This volume will be shared between all instances of the Service and data will not be deleted when the instance is shut down. */
	export interface NFSVolumeSource {

		/** Path that is exported by the NFS server. */
		path?: string | null;

		/** If true, mount the NFS volume as read only. Defaults to false. */
		readOnly?: boolean | null;

		/** Hostname or IP address of the NFS server. */
		server?: string | null;
	}

	/** Represents a persistent volume that will be mounted using NFS. This volume will be shared between all instances of the Service and data will not be deleted when the instance is shut down. */
	export interface NFSVolumeSourceFormProperties {

		/** Path that is exported by the NFS server. */
		path: FormControl<string | null | undefined>,

		/** If true, mount the NFS volume as read only. Defaults to false. */
		readOnly: FormControl<boolean | null | undefined>,

		/** Hostname or IP address of the NFS server. */
		server: FormControl<string | null | undefined>,
	}
	export function CreateNFSVolumeSourceFormGroup() {
		return new FormGroup<NFSVolumeSourceFormProperties>({
			path: new FormControl<string | null | undefined>(undefined),
			readOnly: new FormControl<boolean | null | undefined>(undefined),
			server: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A volume representing a secret stored in Google Secret Manager. The secret's value will be presented as the content of a file whose name is defined in the item path. If no items are defined, the name of the file is the secret_name. The contents of the target Secret's Data field will be presented in a volume as files using the keys in the Data field as the file names. */
	export interface SecretVolumeSource {

		/** Integer representation of mode bits to use on created files by default. Must be a value between 01 and 0777 (octal). If 0 or not set, it will default to 0444. Directories within the path are not affected by this setting. Notes * Internally, a umask of 0222 will be applied to any non-zero value. * This is an integer representation of the mode bits. So, the octal integer value should look exactly as the chmod numeric notation with a leading zero. Some examples: for chmod 777 (a=rwx), set to 0777 (octal) or 511 (base-10). For chmod 640 (u=rw,g=r), set to 0640 (octal) or 416 (base-10). For chmod 755 (u=rwx,g=rx,o=rx), set to 0755 (octal) or 493 (base-10). * This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set. */
		defaultMode?: number | null;

		/** A list of secret versions to mount in the volume. If no items are specified, the volume will expose a file with the same name as the secret name. The contents of the file will be the data in the latest version of the secret. If items are specified, the key will be used as the version to fetch from Cloud Secret Manager and the path will be the name of the file exposed in the volume. When items are defined, they must specify both a key and a path. */
		items?: Array<KeyToPath>;

		/** Not supported by Cloud Run. */
		optional?: boolean | null;

		/** The name of the secret in Cloud Secret Manager. By default, the secret is assumed to be in the same project. If the secret is in another project, you must define an alias. An alias definition has the form: :projects//secrets/. If multiple alias definitions are needed, they must be separated by commas. The alias definitions must be set on the run.googleapis.com/secrets annotation. Name of the secret in the container's namespace to use. */
		secretName?: string | null;
	}

	/** A volume representing a secret stored in Google Secret Manager. The secret's value will be presented as the content of a file whose name is defined in the item path. If no items are defined, the name of the file is the secret_name. The contents of the target Secret's Data field will be presented in a volume as files using the keys in the Data field as the file names. */
	export interface SecretVolumeSourceFormProperties {

		/** Integer representation of mode bits to use on created files by default. Must be a value between 01 and 0777 (octal). If 0 or not set, it will default to 0444. Directories within the path are not affected by this setting. Notes * Internally, a umask of 0222 will be applied to any non-zero value. * This is an integer representation of the mode bits. So, the octal integer value should look exactly as the chmod numeric notation with a leading zero. Some examples: for chmod 777 (a=rwx), set to 0777 (octal) or 511 (base-10). For chmod 640 (u=rw,g=r), set to 0640 (octal) or 416 (base-10). For chmod 755 (u=rwx,g=rx,o=rx), set to 0755 (octal) or 493 (base-10). * This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set. */
		defaultMode: FormControl<number | null | undefined>,

		/** Not supported by Cloud Run. */
		optional: FormControl<boolean | null | undefined>,

		/** The name of the secret in Cloud Secret Manager. By default, the secret is assumed to be in the same project. If the secret is in another project, you must define an alias. An alias definition has the form: :projects//secrets/. If multiple alias definitions are needed, they must be separated by commas. The alias definitions must be set on the run.googleapis.com/secrets annotation. Name of the secret in the container's namespace to use. */
		secretName: FormControl<string | null | undefined>,
	}
	export function CreateSecretVolumeSourceFormGroup() {
		return new FormGroup<SecretVolumeSourceFormProperties>({
			defaultMode: new FormControl<number | null | undefined>(undefined),
			optional: new FormControl<boolean | null | undefined>(undefined),
			secretName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** ConfigurationStatus communicates the observed state of the Configuration (from the controller). */
	export interface ConfigurationStatus {

		/** Conditions communicate information about ongoing/complete reconciliation processes that bring the "spec" inline with the observed state of the world. */
		conditions?: Array<GoogleCloudRunV1Condition>;

		/** LatestCreatedRevisionName is the last revision that was created from this Configuration. It might not be ready yet, so for the latest ready revision, use LatestReadyRevisionName. */
		latestCreatedRevisionName?: string | null;

		/** LatestReadyRevisionName holds the name of the latest Revision stamped out from this Configuration that has had its "Ready" condition become "True". */
		latestReadyRevisionName?: string | null;

		/** ObservedGeneration is the 'Generation' of the Configuration that was last processed by the controller. The observed generation is updated even if the controller failed to process the spec and create the Revision. Clients polling for completed reconciliation should poll until observedGeneration = metadata.generation, and the Ready condition's status is True or False. */
		observedGeneration?: number | null;
	}

	/** ConfigurationStatus communicates the observed state of the Configuration (from the controller). */
	export interface ConfigurationStatusFormProperties {

		/** LatestCreatedRevisionName is the last revision that was created from this Configuration. It might not be ready yet, so for the latest ready revision, use LatestReadyRevisionName. */
		latestCreatedRevisionName: FormControl<string | null | undefined>,

		/** LatestReadyRevisionName holds the name of the latest Revision stamped out from this Configuration that has had its "Ready" condition become "True". */
		latestReadyRevisionName: FormControl<string | null | undefined>,

		/** ObservedGeneration is the 'Generation' of the Configuration that was last processed by the controller. The observed generation is updated even if the controller failed to process the spec and create the Revision. Clients polling for completed reconciliation should poll until observedGeneration = metadata.generation, and the Ready condition's status is True or False. */
		observedGeneration: FormControl<number | null | undefined>,
	}
	export function CreateConfigurationStatusFormGroup() {
		return new FormGroup<ConfigurationStatusFormProperties>({
			latestCreatedRevisionName: new FormControl<string | null | undefined>(undefined),
			latestReadyRevisionName: new FormControl<string | null | undefined>(undefined),
			observedGeneration: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Conditions show the status of reconciliation progress on a given resource. Most resource use a top-level condition type "Ready" or "Completed" to show overall status with other conditions to checkpoint each stage of reconciliation. Note that if metadata.Generation does not equal status.ObservedGeneration, the conditions shown may not be relevant for the current spec. */
	export interface GoogleCloudRunV1Condition {

		/** Optional. Last time the condition transitioned from one status to another. */
		lastTransitionTime?: string | null;

		/** Optional. Human readable message indicating details about the current status. */
		message?: string | null;

		/** Optional. One-word CamelCase reason for the condition's last transition. These are intended to be stable, unique values which the client may use to trigger error handling logic, whereas messages which may be changed later by the server. */
		reason?: string | null;

		/** Optional. How to interpret this condition. One of Error, Warning, or Info. Conditions of severity Info do not contribute to resource readiness. */
		severity?: string | null;

		/** Status of the condition, one of True, False, Unknown. */
		status?: string | null;

		/** type is used to communicate the status of the reconciliation process. Types common to all resources include: * "Ready" or "Completed": True when the Resource is ready. */
		type?: string | null;
	}

	/** Conditions show the status of reconciliation progress on a given resource. Most resource use a top-level condition type "Ready" or "Completed" to show overall status with other conditions to checkpoint each stage of reconciliation. Note that if metadata.Generation does not equal status.ObservedGeneration, the conditions shown may not be relevant for the current spec. */
	export interface GoogleCloudRunV1ConditionFormProperties {

		/** Optional. Last time the condition transitioned from one status to another. */
		lastTransitionTime: FormControl<string | null | undefined>,

		/** Optional. Human readable message indicating details about the current status. */
		message: FormControl<string | null | undefined>,

		/** Optional. One-word CamelCase reason for the condition's last transition. These are intended to be stable, unique values which the client may use to trigger error handling logic, whereas messages which may be changed later by the server. */
		reason: FormControl<string | null | undefined>,

		/** Optional. How to interpret this condition. One of Error, Warning, or Info. Conditions of severity Info do not contribute to resource readiness. */
		severity: FormControl<string | null | undefined>,

		/** Status of the condition, one of True, False, Unknown. */
		status: FormControl<string | null | undefined>,

		/** type is used to communicate the status of the reconciliation process. Types common to all resources include: * "Ready" or "Completed": True when the Resource is ready. */
		type: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudRunV1ConditionFormGroup() {
		return new FormGroup<GoogleCloudRunV1ConditionFormProperties>({
			lastTransitionTime: new FormControl<string | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
			reason: new FormControl<string | null | undefined>(undefined),
			severity: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Per container override specification. */
	export interface ContainerOverride {

		/** Arguments to the entrypoint. The specified arguments replace and override any existing entrypoint arguments. Must be empty if `clear_args` is set to true. */
		args?: Array<string>;

		/** Optional. Set to True to clear all existing arguments. */
		clearArgs?: boolean | null;

		/** List of environment variables to set in the container. All specified environment variables are merged with existing environment variables. When the specified environment variables exist, these values override any existing values. */
		env?: Array<EnvVar>;

		/** The name of the container specified as a DNS_LABEL. */
		name?: string | null;
	}

	/** Per container override specification. */
	export interface ContainerOverrideFormProperties {

		/** Optional. Set to True to clear all existing arguments. */
		clearArgs: FormControl<boolean | null | undefined>,

		/** The name of the container specified as a DNS_LABEL. */
		name: FormControl<string | null | undefined>,
	}
	export function CreateContainerOverrideFormGroup() {
		return new FormGroup<ContainerOverrideFormProperties>({
			clearArgs: new FormControl<boolean | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Resource to hold the state and status of a user's domain mapping. NOTE: This resource is currently in Beta. */
	export interface DomainMapping {

		/** The API version for this call such as "domains.cloudrun.com/v1". */
		apiVersion?: string | null;

		/** The kind of resource, in this case "DomainMapping". */
		kind?: string | null;

		/** google.cloud.run.meta.v1.ObjectMeta is metadata that all persisted resources must have, which includes all objects users must create. */
		metadata?: ObjectMeta;

		/** The desired state of the Domain Mapping. */
		spec?: DomainMappingSpec;

		/** The current state of the Domain Mapping. */
		status?: DomainMappingStatus;
	}

	/** Resource to hold the state and status of a user's domain mapping. NOTE: This resource is currently in Beta. */
	export interface DomainMappingFormProperties {

		/** The API version for this call such as "domains.cloudrun.com/v1". */
		apiVersion: FormControl<string | null | undefined>,

		/** The kind of resource, in this case "DomainMapping". */
		kind: FormControl<string | null | undefined>,
	}
	export function CreateDomainMappingFormGroup() {
		return new FormGroup<DomainMappingFormProperties>({
			apiVersion: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The desired state of the Domain Mapping. */
	export interface DomainMappingSpec {

		/** The mode of the certificate. */
		certificateMode?: DomainMappingSpecCertificateMode | null;

		/** If set, the mapping will override any mapping set before this spec was set. It is recommended that the user leaves this empty to receive an error warning about a potential conflict and only set it once the respective UI has given such a warning. */
		forceOverride?: boolean | null;

		/** The name of the Knative Route that this DomainMapping applies to. The route must exist. */
		routeName?: string | null;
	}

	/** The desired state of the Domain Mapping. */
	export interface DomainMappingSpecFormProperties {

		/** The mode of the certificate. */
		certificateMode: FormControl<DomainMappingSpecCertificateMode | null | undefined>,

		/** If set, the mapping will override any mapping set before this spec was set. It is recommended that the user leaves this empty to receive an error warning about a potential conflict and only set it once the respective UI has given such a warning. */
		forceOverride: FormControl<boolean | null | undefined>,

		/** The name of the Knative Route that this DomainMapping applies to. The route must exist. */
		routeName: FormControl<string | null | undefined>,
	}
	export function CreateDomainMappingSpecFormGroup() {
		return new FormGroup<DomainMappingSpecFormProperties>({
			certificateMode: new FormControl<DomainMappingSpecCertificateMode | null | undefined>(undefined),
			forceOverride: new FormControl<boolean | null | undefined>(undefined),
			routeName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum DomainMappingSpecCertificateMode { CERTIFICATE_MODE_UNSPECIFIED = 0, NONE = 1, AUTOMATIC = 2 }


	/** The current state of the Domain Mapping. */
	export interface DomainMappingStatus {

		/** Array of observed DomainMappingConditions, indicating the current state of the DomainMapping. */
		conditions?: Array<GoogleCloudRunV1Condition>;

		/** The name of the route that the mapping currently points to. */
		mappedRouteName?: string | null;

		/** ObservedGeneration is the 'Generation' of the DomainMapping that was last processed by the controller. Clients polling for completed reconciliation should poll until observedGeneration = metadata.generation and the Ready condition's status is True or False. */
		observedGeneration?: number | null;

		/** The resource records required to configure this domain mapping. These records must be added to the domain's DNS configuration in order to serve the application via this domain mapping. */
		resourceRecords?: Array<ResourceRecord>;

		/** Optional. Not supported by Cloud Run. */
		url?: string | null;
	}

	/** The current state of the Domain Mapping. */
	export interface DomainMappingStatusFormProperties {

		/** The name of the route that the mapping currently points to. */
		mappedRouteName: FormControl<string | null | undefined>,

		/** ObservedGeneration is the 'Generation' of the DomainMapping that was last processed by the controller. Clients polling for completed reconciliation should poll until observedGeneration = metadata.generation and the Ready condition's status is True or False. */
		observedGeneration: FormControl<number | null | undefined>,

		/** Optional. Not supported by Cloud Run. */
		url: FormControl<string | null | undefined>,
	}
	export function CreateDomainMappingStatusFormGroup() {
		return new FormGroup<DomainMappingStatusFormProperties>({
			mappedRouteName: new FormControl<string | null | undefined>(undefined),
			observedGeneration: new FormControl<number | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A DNS resource record. */
	export interface ResourceRecord {

		/** Relative name of the object affected by this record. Only applicable for `CNAME` records. Example: 'www'. */
		name?: string | null;

		/** Data for this record. Values vary by record type, as defined in RFC 1035 (section 5) and RFC 1034 (section 3.6.1). */
		rrdata?: string | null;

		/** Resource record type. Example: `AAAA`. */
		type?: ResourceRecordType | null;
	}

	/** A DNS resource record. */
	export interface ResourceRecordFormProperties {

		/** Relative name of the object affected by this record. Only applicable for `CNAME` records. Example: 'www'. */
		name: FormControl<string | null | undefined>,

		/** Data for this record. Values vary by record type, as defined in RFC 1035 (section 5) and RFC 1034 (section 3.6.1). */
		rrdata: FormControl<string | null | undefined>,

		/** Resource record type. Example: `AAAA`. */
		type: FormControl<ResourceRecordType | null | undefined>,
	}
	export function CreateResourceRecordFormGroup() {
		return new FormGroup<ResourceRecordFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			rrdata: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<ResourceRecordType | null | undefined>(undefined),
		});

	}

	export enum ResourceRecordType { RECORD_TYPE_UNSPECIFIED = 0, A = 1, AAAA = 2, CNAME = 3 }


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


	/** Execution represents the configuration of a single execution. An execution is an immutable resource that references a container image which is run to completion. */
	export interface Execution {

		/** Optional. APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. */
		apiVersion?: string | null;

		/** Optional. Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. */
		kind?: string | null;

		/** google.cloud.run.meta.v1.ObjectMeta is metadata that all persisted resources must have, which includes all objects users must create. */
		metadata?: ObjectMeta;

		/** ExecutionSpec describes how the execution will look. */
		spec?: ExecutionSpec;

		/** ExecutionStatus represents the current state of an Execution. */
		status?: ExecutionStatus;
	}

	/** Execution represents the configuration of a single execution. An execution is an immutable resource that references a container image which is run to completion. */
	export interface ExecutionFormProperties {

		/** Optional. APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. */
		apiVersion: FormControl<string | null | undefined>,

		/** Optional. Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. */
		kind: FormControl<string | null | undefined>,
	}
	export function CreateExecutionFormGroup() {
		return new FormGroup<ExecutionFormProperties>({
			apiVersion: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** ExecutionSpec describes how the execution will look. */
	export interface ExecutionSpec {

		/** Optional. Specifies the maximum desired number of tasks the execution should run at given time. Must be <= task_count. When the job is run, if this field is 0 or unset, the maximum possible value will be used for that execution. The actual number of tasks running in steady state will be less than this number when there are fewer tasks waiting to be completed, i.e. when the work left to do is less than max parallelism. */
		parallelism?: number | null;

		/** Optional. Specifies the desired number of tasks the execution should run. Setting to 1 means that parallelism is limited to 1 and the success of that task signals the success of the execution. Defaults to 1. */
		taskCount?: number | null;

		/** TaskTemplateSpec describes the data a task should have when created from a template. */
		template?: TaskTemplateSpec;
	}

	/** ExecutionSpec describes how the execution will look. */
	export interface ExecutionSpecFormProperties {

		/** Optional. Specifies the maximum desired number of tasks the execution should run at given time. Must be <= task_count. When the job is run, if this field is 0 or unset, the maximum possible value will be used for that execution. The actual number of tasks running in steady state will be less than this number when there are fewer tasks waiting to be completed, i.e. when the work left to do is less than max parallelism. */
		parallelism: FormControl<number | null | undefined>,

		/** Optional. Specifies the desired number of tasks the execution should run. Setting to 1 means that parallelism is limited to 1 and the success of that task signals the success of the execution. Defaults to 1. */
		taskCount: FormControl<number | null | undefined>,
	}
	export function CreateExecutionSpecFormGroup() {
		return new FormGroup<ExecutionSpecFormProperties>({
			parallelism: new FormControl<number | null | undefined>(undefined),
			taskCount: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** TaskTemplateSpec describes the data a task should have when created from a template. */
	export interface TaskTemplateSpec {

		/** TaskSpec is a description of a task. */
		spec?: TaskSpec;
	}

	/** TaskTemplateSpec describes the data a task should have when created from a template. */
	export interface TaskTemplateSpecFormProperties {
	}
	export function CreateTaskTemplateSpecFormGroup() {
		return new FormGroup<TaskTemplateSpecFormProperties>({
		});

	}


	/** TaskSpec is a description of a task. */
	export interface TaskSpec {

		/** Optional. List of containers belonging to the task. We disallow a number of fields on this Container. */
		containers?: Array<Container>;

		/** Optional. Number of retries allowed per task, before marking this job failed. Defaults to 3. */
		maxRetries?: number | null;

		/** Optional. Email address of the IAM service account associated with the task of a job execution. The service account represents the identity of the running task, and determines what permissions the task has. If not provided, the task will use the project's default service account. */
		serviceAccountName?: string | null;

		/** Optional. Duration in seconds the task may be active before the system will actively try to mark it failed and kill associated containers. This applies per attempt of a task, meaning each retry can run for the full timeout. Defaults to 600 seconds. */
		timeoutSeconds?: string | null;

		/** Optional. List of volumes that can be mounted by containers belonging to the task. */
		volumes?: Array<Volume>;
	}

	/** TaskSpec is a description of a task. */
	export interface TaskSpecFormProperties {

		/** Optional. Number of retries allowed per task, before marking this job failed. Defaults to 3. */
		maxRetries: FormControl<number | null | undefined>,

		/** Optional. Email address of the IAM service account associated with the task of a job execution. The service account represents the identity of the running task, and determines what permissions the task has. If not provided, the task will use the project's default service account. */
		serviceAccountName: FormControl<string | null | undefined>,

		/** Optional. Duration in seconds the task may be active before the system will actively try to mark it failed and kill associated containers. This applies per attempt of a task, meaning each retry can run for the full timeout. Defaults to 600 seconds. */
		timeoutSeconds: FormControl<string | null | undefined>,
	}
	export function CreateTaskSpecFormGroup() {
		return new FormGroup<TaskSpecFormProperties>({
			maxRetries: new FormControl<number | null | undefined>(undefined),
			serviceAccountName: new FormControl<string | null | undefined>(undefined),
			timeoutSeconds: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** ExecutionStatus represents the current state of an Execution. */
	export interface ExecutionStatus {

		/** Optional. The number of tasks which reached phase Cancelled. */
		cancelledCount?: number | null;

		/** Optional. Represents the time that the execution was completed. It is not guaranteed to be set in happens-before order across separate operations. It is represented in RFC3339 form and is in UTC. +optional */
		completionTime?: string | null;

		/** Optional. Conditions communicate information about ongoing/complete reconciliation processes that bring the "spec" inline with the observed state of the world. Execution-specific conditions include: * `ResourcesAvailable`: `True` when underlying resources have been provisioned. * `Started`: `True` when the execution has started to execute. * `Completed`: `True` when the execution has succeeded. `False` when the execution has failed. */
		conditions?: Array<GoogleCloudRunV1Condition>;

		/** Optional. The number of tasks which reached phase Failed. */
		failedCount?: number | null;

		/** Optional. URI where logs for this execution can be found in Cloud Console. */
		logUri?: string | null;

		/** Optional. The 'generation' of the execution that was last processed by the controller. */
		observedGeneration?: number | null;

		/** Optional. The number of tasks which have retried at least once. */
		retriedCount?: number | null;

		/** Optional. The number of actively running tasks. */
		runningCount?: number | null;

		/** Optional. Represents the time that the execution started to run. It is not guaranteed to be set in happens-before order across separate operations. It is represented in RFC3339 form and is in UTC. */
		startTime?: string | null;

		/** Optional. The number of tasks which reached phase Succeeded. */
		succeededCount?: number | null;
	}

	/** ExecutionStatus represents the current state of an Execution. */
	export interface ExecutionStatusFormProperties {

		/** Optional. The number of tasks which reached phase Cancelled. */
		cancelledCount: FormControl<number | null | undefined>,

		/** Optional. Represents the time that the execution was completed. It is not guaranteed to be set in happens-before order across separate operations. It is represented in RFC3339 form and is in UTC. +optional */
		completionTime: FormControl<string | null | undefined>,

		/** Optional. The number of tasks which reached phase Failed. */
		failedCount: FormControl<number | null | undefined>,

		/** Optional. URI where logs for this execution can be found in Cloud Console. */
		logUri: FormControl<string | null | undefined>,

		/** Optional. The 'generation' of the execution that was last processed by the controller. */
		observedGeneration: FormControl<number | null | undefined>,

		/** Optional. The number of tasks which have retried at least once. */
		retriedCount: FormControl<number | null | undefined>,

		/** Optional. The number of actively running tasks. */
		runningCount: FormControl<number | null | undefined>,

		/** Optional. Represents the time that the execution started to run. It is not guaranteed to be set in happens-before order across separate operations. It is represented in RFC3339 form and is in UTC. */
		startTime: FormControl<string | null | undefined>,

		/** Optional. The number of tasks which reached phase Succeeded. */
		succeededCount: FormControl<number | null | undefined>,
	}
	export function CreateExecutionStatusFormGroup() {
		return new FormGroup<ExecutionStatusFormProperties>({
			cancelledCount: new FormControl<number | null | undefined>(undefined),
			completionTime: new FormControl<string | null | undefined>(undefined),
			failedCount: new FormControl<number | null | undefined>(undefined),
			logUri: new FormControl<string | null | undefined>(undefined),
			observedGeneration: new FormControl<number | null | undefined>(undefined),
			retriedCount: new FormControl<number | null | undefined>(undefined),
			runningCount: new FormControl<number | null | undefined>(undefined),
			startTime: new FormControl<string | null | undefined>(undefined),
			succeededCount: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Reference to an Execution. Use /Executions.GetExecution with the given name to get full execution including the latest status. */
	export interface ExecutionReference {

		/** Optional. Completion timestamp of the execution. */
		completionTimestamp?: string | null;

		/** Optional. Creation timestamp of the execution. */
		creationTimestamp?: string | null;

		/** Optional. Name of the execution. */
		name?: string | null;
	}

	/** Reference to an Execution. Use /Executions.GetExecution with the given name to get full execution including the latest status. */
	export interface ExecutionReferenceFormProperties {

		/** Optional. Completion timestamp of the execution. */
		completionTimestamp: FormControl<string | null | undefined>,

		/** Optional. Creation timestamp of the execution. */
		creationTimestamp: FormControl<string | null | undefined>,

		/** Optional. Name of the execution. */
		name: FormControl<string | null | undefined>,
	}
	export function CreateExecutionReferenceFormGroup() {
		return new FormGroup<ExecutionReferenceFormProperties>({
			completionTimestamp: new FormControl<string | null | undefined>(undefined),
			creationTimestamp: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** ExecutionTemplateSpec describes the metadata and spec an Execution should have when created from a job. */
	export interface ExecutionTemplateSpec {

		/** google.cloud.run.meta.v1.ObjectMeta is metadata that all persisted resources must have, which includes all objects users must create. */
		metadata?: ObjectMeta;

		/** ExecutionSpec describes how the execution will look. */
		spec?: ExecutionSpec;
	}

	/** ExecutionTemplateSpec describes the metadata and spec an Execution should have when created from a job. */
	export interface ExecutionTemplateSpecFormProperties {
	}
	export function CreateExecutionTemplateSpecFormGroup() {
		return new FormGroup<ExecutionTemplateSpecFormProperties>({
		});

	}


	/** The response message for Operations.ListOperations. */
	export interface GoogleLongrunningListOperationsResponse {

		/** The standard List next-page token. */
		nextPageToken?: string | null;

		/** A list of operations that matches the specified filter in the request. */
		operations?: Array<GoogleLongrunningOperation>;
	}

	/** The response message for Operations.ListOperations. */
	export interface GoogleLongrunningListOperationsResponseFormProperties {

		/** The standard List next-page token. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateGoogleLongrunningListOperationsResponseFormGroup() {
		return new FormGroup<GoogleLongrunningListOperationsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
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


	/** The request message for Operations.WaitOperation. */
	export interface GoogleLongrunningWaitOperationRequest {

		/** The maximum duration to wait before timing out. If left blank, the wait will be at most the time permitted by the underlying HTTP/RPC protocol. If RPC context deadline is also specified, the shorter one will be used. */
		timeout?: string | null;
	}

	/** The request message for Operations.WaitOperation. */
	export interface GoogleLongrunningWaitOperationRequestFormProperties {

		/** The maximum duration to wait before timing out. If left blank, the wait will be at most the time permitted by the underlying HTTP/RPC protocol. If RPC context deadline is also specified, the shorter one will be used. */
		timeout: FormControl<string | null | undefined>,
	}
	export function CreateGoogleLongrunningWaitOperationRequestFormGroup() {
		return new FormGroup<GoogleLongrunningWaitOperationRequestFormProperties>({
			timeout: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Job represents the configuration of a single job, which references a container image which is run to completion. */
	export interface Job {

		/** Optional. APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. */
		apiVersion?: string | null;

		/** Optional. Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. */
		kind?: string | null;

		/** google.cloud.run.meta.v1.ObjectMeta is metadata that all persisted resources must have, which includes all objects users must create. */
		metadata?: ObjectMeta;

		/** JobSpec describes how the job will look. */
		spec?: JobSpec;

		/** JobStatus represents the current state of a Job. */
		status?: JobStatus;
	}

	/** Job represents the configuration of a single job, which references a container image which is run to completion. */
	export interface JobFormProperties {

		/** Optional. APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. */
		apiVersion: FormControl<string | null | undefined>,

		/** Optional. Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. */
		kind: FormControl<string | null | undefined>,
	}
	export function CreateJobFormGroup() {
		return new FormGroup<JobFormProperties>({
			apiVersion: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** JobSpec describes how the job will look. */
	export interface JobSpec {

		/** ExecutionTemplateSpec describes the metadata and spec an Execution should have when created from a job. */
		template?: ExecutionTemplateSpec;
	}

	/** JobSpec describes how the job will look. */
	export interface JobSpecFormProperties {
	}
	export function CreateJobSpecFormGroup() {
		return new FormGroup<JobSpecFormProperties>({
		});

	}


	/** JobStatus represents the current state of a Job. */
	export interface JobStatus {

		/** Conditions communicate information about ongoing/complete reconciliation processes that bring the "spec" inline with the observed state of the world. Job-specific conditions include: * `Ready`: `True` when the job is ready to be executed. */
		conditions?: Array<GoogleCloudRunV1Condition>;

		/** Number of executions created for this job. */
		executionCount?: number | null;

		/** Reference to an Execution. Use /Executions.GetExecution with the given name to get full execution including the latest status. */
		latestCreatedExecution?: ExecutionReference;

		/** The 'generation' of the job that was last processed by the controller. */
		observedGeneration?: number | null;
	}

	/** JobStatus represents the current state of a Job. */
	export interface JobStatusFormProperties {

		/** Number of executions created for this job. */
		executionCount: FormControl<number | null | undefined>,

		/** The 'generation' of the job that was last processed by the controller. */
		observedGeneration: FormControl<number | null | undefined>,
	}
	export function CreateJobStatusFormGroup() {
		return new FormGroup<JobStatusFormProperties>({
			executionCount: new FormControl<number | null | undefined>(undefined),
			observedGeneration: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** A list of Authorized Domains. */
	export interface ListAuthorizedDomainsResponse {

		/** The authorized domains belonging to the user. */
		domains?: Array<AuthorizedDomain>;

		/** Continuation token for fetching the next page of results. */
		nextPageToken?: string | null;
	}

	/** A list of Authorized Domains. */
	export interface ListAuthorizedDomainsResponseFormProperties {

		/** Continuation token for fetching the next page of results. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListAuthorizedDomainsResponseFormGroup() {
		return new FormGroup<ListAuthorizedDomainsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** ListConfigurationsResponse is a list of Configuration resources. */
	export interface ListConfigurationsResponse {

		/** The API version for this call such as "serving.knative.dev/v1". */
		apiVersion?: string | null;

		/** List of Configurations. */
		items?: Array<Configuration>;

		/** The kind of this resource, in this case "ConfigurationList". */
		kind?: string | null;

		/** Metadata for synthetic resources like List. In Cloud Run, all List Resources Responses will have a ListMeta instead of ObjectMeta. */
		metadata?: ListMeta;

		/** Locations that could not be reached. */
		unreachable?: Array<string>;
	}

	/** ListConfigurationsResponse is a list of Configuration resources. */
	export interface ListConfigurationsResponseFormProperties {

		/** The API version for this call such as "serving.knative.dev/v1". */
		apiVersion: FormControl<string | null | undefined>,

		/** The kind of this resource, in this case "ConfigurationList". */
		kind: FormControl<string | null | undefined>,
	}
	export function CreateListConfigurationsResponseFormGroup() {
		return new FormGroup<ListConfigurationsResponseFormProperties>({
			apiVersion: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Metadata for synthetic resources like List. In Cloud Run, all List Resources Responses will have a ListMeta instead of ObjectMeta. */
	export interface ListMeta {

		/** Continuation token is a value emitted when the count of items is larger than the user/system limit. To retrieve the next page of items, pass the value of `continue` as the next request's `page_token`. */
		continue?: string | null;

		/** Opaque string that identifies the server's internal version of this object. It can be used by clients to determine when objects have changed. If the message is passed back to the server, it must be left unmodified. */
		resourceVersion?: string | null;

		/** URL representing this object. */
		selfLink?: string | null;
	}

	/** Metadata for synthetic resources like List. In Cloud Run, all List Resources Responses will have a ListMeta instead of ObjectMeta. */
	export interface ListMetaFormProperties {

		/** Continuation token is a value emitted when the count of items is larger than the user/system limit. To retrieve the next page of items, pass the value of `continue` as the next request's `page_token`. */
		continue: FormControl<string | null | undefined>,

		/** Opaque string that identifies the server's internal version of this object. It can be used by clients to determine when objects have changed. If the message is passed back to the server, it must be left unmodified. */
		resourceVersion: FormControl<string | null | undefined>,

		/** URL representing this object. */
		selfLink: FormControl<string | null | undefined>,
	}
	export function CreateListMetaFormGroup() {
		return new FormGroup<ListMetaFormProperties>({
			continue: new FormControl<string | null | undefined>(undefined),
			resourceVersion: new FormControl<string | null | undefined>(undefined),
			selfLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** ListDomainMappingsResponse is a list of DomainMapping resources. */
	export interface ListDomainMappingsResponse {

		/** The API version for this call such as "domains.cloudrun.com/v1". */
		apiVersion?: string | null;

		/** List of DomainMappings. */
		items?: Array<DomainMapping>;

		/** The kind of this resource, in this case "DomainMappingList". */
		kind?: string | null;

		/** Metadata for synthetic resources like List. In Cloud Run, all List Resources Responses will have a ListMeta instead of ObjectMeta. */
		metadata?: ListMeta;

		/** Locations that could not be reached. */
		unreachable?: Array<string>;
	}

	/** ListDomainMappingsResponse is a list of DomainMapping resources. */
	export interface ListDomainMappingsResponseFormProperties {

		/** The API version for this call such as "domains.cloudrun.com/v1". */
		apiVersion: FormControl<string | null | undefined>,

		/** The kind of this resource, in this case "DomainMappingList". */
		kind: FormControl<string | null | undefined>,
	}
	export function CreateListDomainMappingsResponseFormGroup() {
		return new FormGroup<ListDomainMappingsResponseFormProperties>({
			apiVersion: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** ListExecutionsResponse is a list of Executions resources. */
	export interface ListExecutionsResponse {

		/** The API version for this call such as "run.googleapis.com/v1". */
		apiVersion?: string | null;

		/** List of Executions. */
		items?: Array<Execution>;

		/** The kind of this resource, in this case "ExecutionsList". */
		kind?: string | null;

		/** Metadata for synthetic resources like List. In Cloud Run, all List Resources Responses will have a ListMeta instead of ObjectMeta. */
		metadata?: ListMeta;

		/** Locations that could not be reached. */
		unreachable?: Array<string>;
	}

	/** ListExecutionsResponse is a list of Executions resources. */
	export interface ListExecutionsResponseFormProperties {

		/** The API version for this call such as "run.googleapis.com/v1". */
		apiVersion: FormControl<string | null | undefined>,

		/** The kind of this resource, in this case "ExecutionsList". */
		kind: FormControl<string | null | undefined>,
	}
	export function CreateListExecutionsResponseFormGroup() {
		return new FormGroup<ListExecutionsResponseFormProperties>({
			apiVersion: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** ListJobsResponse is a list of Jobs resources. */
	export interface ListJobsResponse {

		/** The API version for this call such as "run.googleapis.com/v1". */
		apiVersion?: string | null;

		/** List of Jobs. */
		items?: Array<Job>;

		/** The kind of this resource, in this case "JobsList". */
		kind?: string | null;

		/** Metadata for synthetic resources like List. In Cloud Run, all List Resources Responses will have a ListMeta instead of ObjectMeta. */
		metadata?: ListMeta;

		/** Locations that could not be reached. */
		unreachable?: Array<string>;
	}

	/** ListJobsResponse is a list of Jobs resources. */
	export interface ListJobsResponseFormProperties {

		/** The API version for this call such as "run.googleapis.com/v1". */
		apiVersion: FormControl<string | null | undefined>,

		/** The kind of this resource, in this case "JobsList". */
		kind: FormControl<string | null | undefined>,
	}
	export function CreateListJobsResponseFormGroup() {
		return new FormGroup<ListJobsResponseFormProperties>({
			apiVersion: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
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


	/** ListRevisionsResponse is a list of Revision resources. */
	export interface ListRevisionsResponse {

		/** The API version for this call such as "serving.knative.dev/v1". */
		apiVersion?: string | null;

		/** List of Revisions. */
		items?: Array<Revision>;

		/** The kind of this resource, in this case "RevisionList". */
		kind?: string | null;

		/** Metadata for synthetic resources like List. In Cloud Run, all List Resources Responses will have a ListMeta instead of ObjectMeta. */
		metadata?: ListMeta;

		/** Locations that could not be reached. */
		unreachable?: Array<string>;
	}

	/** ListRevisionsResponse is a list of Revision resources. */
	export interface ListRevisionsResponseFormProperties {

		/** The API version for this call such as "serving.knative.dev/v1". */
		apiVersion: FormControl<string | null | undefined>,

		/** The kind of this resource, in this case "RevisionList". */
		kind: FormControl<string | null | undefined>,
	}
	export function CreateListRevisionsResponseFormGroup() {
		return new FormGroup<ListRevisionsResponseFormProperties>({
			apiVersion: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Revision is an immutable snapshot of code and configuration. A revision references a container image. Revisions are created by updates to a Configuration. See also: https://github.com/knative/specs/blob/main/specs/serving/overview.md#revision */
	export interface Revision {

		/** The API version for this call such as "serving.knative.dev/v1". */
		apiVersion?: string | null;

		/** The kind of this resource, in this case "Revision". */
		kind?: string | null;

		/** google.cloud.run.meta.v1.ObjectMeta is metadata that all persisted resources must have, which includes all objects users must create. */
		metadata?: ObjectMeta;

		/** RevisionSpec holds the desired state of the Revision (from the client). */
		spec?: RevisionSpec;

		/** RevisionStatus communicates the observed state of the Revision (from the controller). */
		status?: RevisionStatus;
	}

	/** Revision is an immutable snapshot of code and configuration. A revision references a container image. Revisions are created by updates to a Configuration. See also: https://github.com/knative/specs/blob/main/specs/serving/overview.md#revision */
	export interface RevisionFormProperties {

		/** The API version for this call such as "serving.knative.dev/v1". */
		apiVersion: FormControl<string | null | undefined>,

		/** The kind of this resource, in this case "Revision". */
		kind: FormControl<string | null | undefined>,
	}
	export function CreateRevisionFormGroup() {
		return new FormGroup<RevisionFormProperties>({
			apiVersion: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** RevisionStatus communicates the observed state of the Revision (from the controller). */
	export interface RevisionStatus {

		/** Conditions communicate information about ongoing/complete reconciliation processes that bring the "spec" inline with the observed state of the world. As a Revision is being prepared, it will incrementally update conditions. Revision-specific conditions include: * `ResourcesAvailable`: `True` when underlying resources have been provisioned. * `ContainerHealthy`: `True` when the Revision readiness check completes. * `Active`: `True` when the Revision may receive traffic. */
		conditions?: Array<GoogleCloudRunV1Condition>;

		/** Output only. The configured number of instances running this revision. For Cloud Run, this only includes instances provisioned using the minScale annotation. It does not include instances created by autoscaling. */
		desiredReplicas?: number | null;

		/** ImageDigest holds the resolved digest for the image specified within .Spec.Container.Image. The digest is resolved during the creation of Revision. This field holds the digest value regardless of whether a tag or digest was originally specified in the Container object. */
		imageDigest?: string | null;

		/** Optional. Specifies the generated logging url for this particular revision based on the revision url template specified in the controller's config. */
		logUrl?: string | null;

		/** ObservedGeneration is the 'Generation' of the Revision that was last processed by the controller. Clients polling for completed reconciliation should poll until observedGeneration = metadata.generation, and the Ready condition's status is True or False. */
		observedGeneration?: number | null;

		/** Not currently used by Cloud Run. */
		serviceName?: string | null;
	}

	/** RevisionStatus communicates the observed state of the Revision (from the controller). */
	export interface RevisionStatusFormProperties {

		/** Output only. The configured number of instances running this revision. For Cloud Run, this only includes instances provisioned using the minScale annotation. It does not include instances created by autoscaling. */
		desiredReplicas: FormControl<number | null | undefined>,

		/** ImageDigest holds the resolved digest for the image specified within .Spec.Container.Image. The digest is resolved during the creation of Revision. This field holds the digest value regardless of whether a tag or digest was originally specified in the Container object. */
		imageDigest: FormControl<string | null | undefined>,

		/** Optional. Specifies the generated logging url for this particular revision based on the revision url template specified in the controller's config. */
		logUrl: FormControl<string | null | undefined>,

		/** ObservedGeneration is the 'Generation' of the Revision that was last processed by the controller. Clients polling for completed reconciliation should poll until observedGeneration = metadata.generation, and the Ready condition's status is True or False. */
		observedGeneration: FormControl<number | null | undefined>,

		/** Not currently used by Cloud Run. */
		serviceName: FormControl<string | null | undefined>,
	}
	export function CreateRevisionStatusFormGroup() {
		return new FormGroup<RevisionStatusFormProperties>({
			desiredReplicas: new FormControl<number | null | undefined>(undefined),
			imageDigest: new FormControl<string | null | undefined>(undefined),
			logUrl: new FormControl<string | null | undefined>(undefined),
			observedGeneration: new FormControl<number | null | undefined>(undefined),
			serviceName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** ListRoutesResponse is a list of Route resources. */
	export interface ListRoutesResponse {

		/** The API version for this call such as "serving.knative.dev/v1". */
		apiVersion?: string | null;

		/** List of Routes. */
		items?: Array<Route>;

		/** The kind of this resource, in this case always "RouteList". */
		kind?: string | null;

		/** Metadata for synthetic resources like List. In Cloud Run, all List Resources Responses will have a ListMeta instead of ObjectMeta. */
		metadata?: ListMeta;

		/** Locations that could not be reached. */
		unreachable?: Array<string>;
	}

	/** ListRoutesResponse is a list of Route resources. */
	export interface ListRoutesResponseFormProperties {

		/** The API version for this call such as "serving.knative.dev/v1". */
		apiVersion: FormControl<string | null | undefined>,

		/** The kind of this resource, in this case always "RouteList". */
		kind: FormControl<string | null | undefined>,
	}
	export function CreateListRoutesResponseFormGroup() {
		return new FormGroup<ListRoutesResponseFormProperties>({
			apiVersion: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Route is responsible for configuring ingress over a collection of Revisions. Some of the Revisions a Route distributes traffic over may be specified by referencing the Configuration responsible for creating them; in these cases the Route is additionally responsible for monitoring the Configuration for "latest ready" revision changes, and smoothly rolling out latest revisions. Cloud Run currently supports referencing a single Configuration to automatically deploy the "latest ready" Revision from that Configuration. */
	export interface Route {

		/** The API version for this call such as "serving.knative.dev/v1". */
		apiVersion?: string | null;

		/** The kind of this resource, in this case always "Route". */
		kind?: string | null;

		/** google.cloud.run.meta.v1.ObjectMeta is metadata that all persisted resources must have, which includes all objects users must create. */
		metadata?: ObjectMeta;

		/** RouteSpec holds the desired state of the Route (from the client). */
		spec?: RouteSpec;

		/** RouteStatus communicates the observed state of the Route (from the controller). */
		status?: RouteStatus;
	}

	/** Route is responsible for configuring ingress over a collection of Revisions. Some of the Revisions a Route distributes traffic over may be specified by referencing the Configuration responsible for creating them; in these cases the Route is additionally responsible for monitoring the Configuration for "latest ready" revision changes, and smoothly rolling out latest revisions. Cloud Run currently supports referencing a single Configuration to automatically deploy the "latest ready" Revision from that Configuration. */
	export interface RouteFormProperties {

		/** The API version for this call such as "serving.knative.dev/v1". */
		apiVersion: FormControl<string | null | undefined>,

		/** The kind of this resource, in this case always "Route". */
		kind: FormControl<string | null | undefined>,
	}
	export function CreateRouteFormGroup() {
		return new FormGroup<RouteFormProperties>({
			apiVersion: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** RouteSpec holds the desired state of the Route (from the client). */
	export interface RouteSpec {

		/** Traffic specifies how to distribute traffic over a collection of Knative Revisions and Configurations. Cloud Run currently supports a single configurationName. */
		traffic?: Array<TrafficTarget>;
	}

	/** RouteSpec holds the desired state of the Route (from the client). */
	export interface RouteSpecFormProperties {
	}
	export function CreateRouteSpecFormGroup() {
		return new FormGroup<RouteSpecFormProperties>({
		});

	}


	/** TrafficTarget holds a single entry of the routing table for a Route. */
	export interface TrafficTarget {

		/** [Deprecated] Not supported in Cloud Run. It must be empty. */
		configurationName?: string | null;

		/** Uses the "status.latestReadyRevisionName" of the Service to determine the traffic target. When it changes, traffic will automatically migrate from the prior "latest ready" revision to the new one. This field must be false if RevisionName is set. This field defaults to true otherwise. If the field is set to true on Status, this means that the Revision was resolved from the Service's latest ready revision. */
		latestRevision?: boolean | null;

		/** Percent specifies percent of the traffic to this Revision or Configuration. This defaults to zero if unspecified. */
		percent?: number | null;

		/** Points this traffic target to a specific Revision. This field is mutually exclusive with latest_revision. */
		revisionName?: string | null;

		/** Tag is used to expose a dedicated url for referencing this target exclusively. */
		tag?: string | null;

		/** Output only. URL displays the URL for accessing tagged traffic targets. URL is displayed in status, and is disallowed on spec. URL must contain a scheme (e.g. https://) and a hostname, but may not contain anything else (e.g. basic auth, url path, etc.) */
		url?: string | null;
	}

	/** TrafficTarget holds a single entry of the routing table for a Route. */
	export interface TrafficTargetFormProperties {

		/** [Deprecated] Not supported in Cloud Run. It must be empty. */
		configurationName: FormControl<string | null | undefined>,

		/** Uses the "status.latestReadyRevisionName" of the Service to determine the traffic target. When it changes, traffic will automatically migrate from the prior "latest ready" revision to the new one. This field must be false if RevisionName is set. This field defaults to true otherwise. If the field is set to true on Status, this means that the Revision was resolved from the Service's latest ready revision. */
		latestRevision: FormControl<boolean | null | undefined>,

		/** Percent specifies percent of the traffic to this Revision or Configuration. This defaults to zero if unspecified. */
		percent: FormControl<number | null | undefined>,

		/** Points this traffic target to a specific Revision. This field is mutually exclusive with latest_revision. */
		revisionName: FormControl<string | null | undefined>,

		/** Tag is used to expose a dedicated url for referencing this target exclusively. */
		tag: FormControl<string | null | undefined>,

		/** Output only. URL displays the URL for accessing tagged traffic targets. URL is displayed in status, and is disallowed on spec. URL must contain a scheme (e.g. https://) and a hostname, but may not contain anything else (e.g. basic auth, url path, etc.) */
		url: FormControl<string | null | undefined>,
	}
	export function CreateTrafficTargetFormGroup() {
		return new FormGroup<TrafficTargetFormProperties>({
			configurationName: new FormControl<string | null | undefined>(undefined),
			latestRevision: new FormControl<boolean | null | undefined>(undefined),
			percent: new FormControl<number | null | undefined>(undefined),
			revisionName: new FormControl<string | null | undefined>(undefined),
			tag: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** RouteStatus communicates the observed state of the Route (from the controller). */
	export interface RouteStatus {

		/** Information for connecting over HTTP(s). */
		address?: Addressable;

		/** Conditions communicates information about ongoing/complete reconciliation processes that bring the "spec" inline with the observed state of the world. */
		conditions?: Array<GoogleCloudRunV1Condition>;

		/** ObservedGeneration is the 'Generation' of the Route that was last processed by the controller. Clients polling for completed reconciliation should poll until observedGeneration = metadata.generation and the Ready condition's status is True or False. Note that providing a TrafficTarget that has latest_revision=True will result in a Route that does not increment either its metadata.generation or its observedGeneration, as new "latest ready" revisions from the Configuration are processed without an update to the Route's spec. */
		observedGeneration?: number | null;

		/** Traffic holds the configured traffic distribution. These entries will always contain RevisionName references. When ConfigurationName appears in the spec, this will hold the LatestReadyRevisionName that was last observed. */
		traffic?: Array<TrafficTarget>;

		/** URL holds the url that will distribute traffic over the provided traffic targets. It generally has the form: `https://{route-hash}-{project-hash}-{cluster-level-suffix}.a.run.app` */
		url?: string | null;
	}

	/** RouteStatus communicates the observed state of the Route (from the controller). */
	export interface RouteStatusFormProperties {

		/** ObservedGeneration is the 'Generation' of the Route that was last processed by the controller. Clients polling for completed reconciliation should poll until observedGeneration = metadata.generation and the Ready condition's status is True or False. Note that providing a TrafficTarget that has latest_revision=True will result in a Route that does not increment either its metadata.generation or its observedGeneration, as new "latest ready" revisions from the Configuration are processed without an update to the Route's spec. */
		observedGeneration: FormControl<number | null | undefined>,

		/** URL holds the url that will distribute traffic over the provided traffic targets. It generally has the form: `https://{route-hash}-{project-hash}-{cluster-level-suffix}.a.run.app` */
		url: FormControl<string | null | undefined>,
	}
	export function CreateRouteStatusFormGroup() {
		return new FormGroup<RouteStatusFormProperties>({
			observedGeneration: new FormControl<number | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A list of Service resources. */
	export interface ListServicesResponse {

		/** The API version for this call; returns "serving.knative.dev/v1". */
		apiVersion?: string | null;

		/** List of Services. */
		items?: Array<Service>;

		/** The kind of this resource; returns "ServiceList". */
		kind?: string | null;

		/** Metadata for synthetic resources like List. In Cloud Run, all List Resources Responses will have a ListMeta instead of ObjectMeta. */
		metadata?: ListMeta;

		/** For calls against the global endpoint, returns the list of Cloud locations that could not be reached. For regional calls, this field is not used. */
		unreachable?: Array<string>;
	}

	/** A list of Service resources. */
	export interface ListServicesResponseFormProperties {

		/** The API version for this call; returns "serving.knative.dev/v1". */
		apiVersion: FormControl<string | null | undefined>,

		/** The kind of this resource; returns "ServiceList". */
		kind: FormControl<string | null | undefined>,
	}
	export function CreateListServicesResponseFormGroup() {
		return new FormGroup<ListServicesResponseFormProperties>({
			apiVersion: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Service acts as a top-level container that manages a set of Routes and Configurations which implement a network service. Service exists to provide a singular abstraction which can be access controlled, reasoned about, and which encapsulates software lifecycle decisions such as rollout policy and team resource ownership. Service acts only as an orchestrator of the underlying Routes and Configurations (much as a kubernetes Deployment orchestrates ReplicaSets). The Service's controller will track the statuses of its owned Configuration and Route, reflecting their statuses and conditions as its own. */
	export interface Service {

		/** The API version for this call. It must be "serving.knative.dev/v1". */
		apiVersion?: string | null;

		/** The kind of resource. It must be "Service". */
		kind?: string | null;

		/** google.cloud.run.meta.v1.ObjectMeta is metadata that all persisted resources must have, which includes all objects users must create. */
		metadata?: ObjectMeta;

		/** ServiceSpec holds the desired state of the Route (from the client), which is used to manipulate the underlying Route and Configuration(s). */
		spec?: ServiceSpec;

		/** The current state of the Service. Output only. */
		status?: ServiceStatus;
	}

	/** Service acts as a top-level container that manages a set of Routes and Configurations which implement a network service. Service exists to provide a singular abstraction which can be access controlled, reasoned about, and which encapsulates software lifecycle decisions such as rollout policy and team resource ownership. Service acts only as an orchestrator of the underlying Routes and Configurations (much as a kubernetes Deployment orchestrates ReplicaSets). The Service's controller will track the statuses of its owned Configuration and Route, reflecting their statuses and conditions as its own. */
	export interface ServiceFormProperties {

		/** The API version for this call. It must be "serving.knative.dev/v1". */
		apiVersion: FormControl<string | null | undefined>,

		/** The kind of resource. It must be "Service". */
		kind: FormControl<string | null | undefined>,
	}
	export function CreateServiceFormGroup() {
		return new FormGroup<ServiceFormProperties>({
			apiVersion: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** ServiceSpec holds the desired state of the Route (from the client), which is used to manipulate the underlying Route and Configuration(s). */
	export interface ServiceSpec {

		/** RevisionTemplateSpec describes the data a revision should have when created from a template. */
		template?: RevisionTemplate;

		/** Specifies how to distribute traffic over a collection of Knative Revisions and Configurations to the Service's main URL. */
		traffic?: Array<TrafficTarget>;
	}

	/** ServiceSpec holds the desired state of the Route (from the client), which is used to manipulate the underlying Route and Configuration(s). */
	export interface ServiceSpecFormProperties {
	}
	export function CreateServiceSpecFormGroup() {
		return new FormGroup<ServiceSpecFormProperties>({
		});

	}


	/** The current state of the Service. Output only. */
	export interface ServiceStatus {

		/** Information for connecting over HTTP(s). */
		address?: Addressable;

		/** Conditions communicate information about ongoing/complete reconciliation processes that bring the `spec` inline with the observed state of the world. Service-specific conditions include: * `ConfigurationsReady`: `True` when the underlying Configuration is ready. * `RoutesReady`: `True` when the underlying Route is ready. * `Ready`: `True` when all underlying resources are ready. */
		conditions?: Array<GoogleCloudRunV1Condition>;

		/** Name of the last revision that was created from this Service's Configuration. It might not be ready yet, for that use LatestReadyRevisionName. */
		latestCreatedRevisionName?: string | null;

		/** Name of the latest Revision from this Service's Configuration that has had its `Ready` condition become `True`. */
		latestReadyRevisionName?: string | null;

		/** Returns the generation last seen by the system. Clients polling for completed reconciliation should poll until observedGeneration = metadata.generation and the Ready condition's status is True or False. */
		observedGeneration?: number | null;

		/** Holds the configured traffic distribution. These entries will always contain RevisionName references. When ConfigurationName appears in the spec, this will hold the LatestReadyRevisionName that we last observed. */
		traffic?: Array<TrafficTarget>;

		/** URL that will distribute traffic over the provided traffic targets. It generally has the form `https://{route-hash}-{project-hash}-{cluster-level-suffix}.a.run.app` */
		url?: string | null;
	}

	/** The current state of the Service. Output only. */
	export interface ServiceStatusFormProperties {

		/** Name of the last revision that was created from this Service's Configuration. It might not be ready yet, for that use LatestReadyRevisionName. */
		latestCreatedRevisionName: FormControl<string | null | undefined>,

		/** Name of the latest Revision from this Service's Configuration that has had its `Ready` condition become `True`. */
		latestReadyRevisionName: FormControl<string | null | undefined>,

		/** Returns the generation last seen by the system. Clients polling for completed reconciliation should poll until observedGeneration = metadata.generation and the Ready condition's status is True or False. */
		observedGeneration: FormControl<number | null | undefined>,

		/** URL that will distribute traffic over the provided traffic targets. It generally has the form `https://{route-hash}-{project-hash}-{cluster-level-suffix}.a.run.app` */
		url: FormControl<string | null | undefined>,
	}
	export function CreateServiceStatusFormGroup() {
		return new FormGroup<ServiceStatusFormProperties>({
			latestCreatedRevisionName: new FormControl<string | null | undefined>(undefined),
			latestReadyRevisionName: new FormControl<string | null | undefined>(undefined),
			observedGeneration: new FormControl<number | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** ListTasksResponse is a list of Tasks resources. */
	export interface ListTasksResponse {

		/** The API version for this call such as "run.googleapis.com/v1". */
		apiVersion?: string | null;

		/** List of Tasks. */
		items?: Array<Task>;

		/** The kind of this resource, in this case "TasksList". */
		kind?: string | null;

		/** Metadata for synthetic resources like List. In Cloud Run, all List Resources Responses will have a ListMeta instead of ObjectMeta. */
		metadata?: ListMeta;

		/** Locations that could not be reached. */
		unreachable?: Array<string>;
	}

	/** ListTasksResponse is a list of Tasks resources. */
	export interface ListTasksResponseFormProperties {

		/** The API version for this call such as "run.googleapis.com/v1". */
		apiVersion: FormControl<string | null | undefined>,

		/** The kind of this resource, in this case "TasksList". */
		kind: FormControl<string | null | undefined>,
	}
	export function CreateListTasksResponseFormGroup() {
		return new FormGroup<ListTasksResponseFormProperties>({
			apiVersion: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Task represents a single run of a container to completion. */
	export interface Task {

		/** Optional. APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. */
		apiVersion?: string | null;

		/** Optional. Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. */
		kind?: string | null;

		/** google.cloud.run.meta.v1.ObjectMeta is metadata that all persisted resources must have, which includes all objects users must create. */
		metadata?: ObjectMeta;

		/** TaskSpec is a description of a task. */
		spec?: TaskSpec;

		/** TaskStatus represents the status of a task. */
		status?: TaskStatus;
	}

	/** Task represents a single run of a container to completion. */
	export interface TaskFormProperties {

		/** Optional. APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. */
		apiVersion: FormControl<string | null | undefined>,

		/** Optional. Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. */
		kind: FormControl<string | null | undefined>,
	}
	export function CreateTaskFormGroup() {
		return new FormGroup<TaskFormProperties>({
			apiVersion: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** TaskStatus represents the status of a task. */
	export interface TaskStatus {

		/** Optional. Represents time when the task was completed. It is not guaranteed to be set in happens-before order across separate operations. It is represented in RFC3339 form and is in UTC. */
		completionTime?: string | null;

		/** Optional. Conditions communicate information about ongoing/complete reconciliation processes that bring the "spec" inline with the observed state of the world. Task-specific conditions include: * `Started`: `True` when the task has started to execute. * `Completed`: `True` when the task has succeeded. `False` when the task has failed. */
		conditions?: Array<GoogleCloudRunV1Condition>;

		/** Required. Index of the task, unique per execution, and beginning at 0. */
		index?: number | null;

		/** Result of a task attempt. */
		lastAttemptResult?: TaskAttemptResult;

		/** Optional. URI where logs for this task can be found in Cloud Console. */
		logUri?: string | null;

		/** Optional. The 'generation' of the task that was last processed by the controller. */
		observedGeneration?: number | null;

		/** Optional. The number of times this task was retried. Instances are retried when they fail up to the maxRetries limit. */
		retried?: number | null;

		/** Optional. Represents time when the task started to run. It is not guaranteed to be set in happens-before order across separate operations. It is represented in RFC3339 form and is in UTC. */
		startTime?: string | null;
	}

	/** TaskStatus represents the status of a task. */
	export interface TaskStatusFormProperties {

		/** Optional. Represents time when the task was completed. It is not guaranteed to be set in happens-before order across separate operations. It is represented in RFC3339 form and is in UTC. */
		completionTime: FormControl<string | null | undefined>,

		/** Required. Index of the task, unique per execution, and beginning at 0. */
		index: FormControl<number | null | undefined>,

		/** Optional. URI where logs for this task can be found in Cloud Console. */
		logUri: FormControl<string | null | undefined>,

		/** Optional. The 'generation' of the task that was last processed by the controller. */
		observedGeneration: FormControl<number | null | undefined>,

		/** Optional. The number of times this task was retried. Instances are retried when they fail up to the maxRetries limit. */
		retried: FormControl<number | null | undefined>,

		/** Optional. Represents time when the task started to run. It is not guaranteed to be set in happens-before order across separate operations. It is represented in RFC3339 form and is in UTC. */
		startTime: FormControl<string | null | undefined>,
	}
	export function CreateTaskStatusFormGroup() {
		return new FormGroup<TaskStatusFormProperties>({
			completionTime: new FormControl<string | null | undefined>(undefined),
			index: new FormControl<number | null | undefined>(undefined),
			logUri: new FormControl<string | null | undefined>(undefined),
			observedGeneration: new FormControl<number | null | undefined>(undefined),
			retried: new FormControl<number | null | undefined>(undefined),
			startTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Result of a task attempt. */
	export interface TaskAttemptResult {

		/** Optional. The exit code of this attempt. This may be unset if the container was unable to exit cleanly with a code due to some other failure. See status field for possible failure details. */
		exitCode?: number | null;

		/** The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors). */
		status?: GoogleRpcStatus;
	}

	/** Result of a task attempt. */
	export interface TaskAttemptResultFormProperties {

		/** Optional. The exit code of this attempt. This may be unset if the container was unable to exit cleanly with a code due to some other failure. See status field for possible failure details. */
		exitCode: FormControl<number | null | undefined>,
	}
	export function CreateTaskAttemptResultFormGroup() {
		return new FormGroup<TaskAttemptResultFormProperties>({
			exitCode: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** RunJob Overrides that contains Execution fields to be overridden on the go. */
	export interface Overrides {

		/** Per container override specification. */
		containerOverrides?: Array<ContainerOverride>;

		/** The desired number of tasks the execution should run. Will replace existing task_count value. */
		taskCount?: number | null;

		/** Duration in seconds the task may be active before the system will actively try to mark it failed and kill associated containers. Will replace existing timeout_seconds value. */
		timeoutSeconds?: number | null;
	}

	/** RunJob Overrides that contains Execution fields to be overridden on the go. */
	export interface OverridesFormProperties {

		/** The desired number of tasks the execution should run. Will replace existing task_count value. */
		taskCount: FormControl<number | null | undefined>,

		/** Duration in seconds the task may be active before the system will actively try to mark it failed and kill associated containers. Will replace existing timeout_seconds value. */
		timeoutSeconds: FormControl<number | null | undefined>,
	}
	export function CreateOverridesFormGroup() {
		return new FormGroup<OverridesFormProperties>({
			taskCount: new FormControl<number | null | undefined>(undefined),
			timeoutSeconds: new FormControl<number | null | undefined>(undefined),
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


	/** Request message for creating a new execution of a job. */
	export interface RunJobRequest {

		/** RunJob Overrides that contains Execution fields to be overridden on the go. */
		overrides?: Overrides;
	}

	/** Request message for creating a new execution of a job. */
	export interface RunJobRequestFormProperties {
	}
	export function CreateRunJobRequestFormGroup() {
		return new FormGroup<RunJobRequestFormProperties>({
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


	/** Status is a return value for calls that don't return other objects. */
	export interface Status {

		/** Suggested HTTP return code for this status, 0 if not set. */
		code?: number | null;

		/** StatusDetails is a set of additional properties that MAY be set by the server to provide additional information about a response. The Reason field of a Status object defines what attributes will be set. Clients must ignore fields that do not match the defined type of each attribute, and should assume that any attribute may be empty, invalid, or under defined. */
		details?: StatusDetails;

		/** A human-readable description of the status of this operation. */
		message?: string | null;

		/** Metadata for synthetic resources like List. In Cloud Run, all List Resources Responses will have a ListMeta instead of ObjectMeta. */
		metadata?: ListMeta;

		/** A machine-readable description of why this operation is in the "Failure" status. If this value is empty there is no information available. A Reason clarifies an HTTP status code but does not override it. */
		reason?: string | null;

		/** Status of the operation. One of: "Success" or "Failure". */
		status?: string | null;
	}

	/** Status is a return value for calls that don't return other objects. */
	export interface StatusFormProperties {

		/** Suggested HTTP return code for this status, 0 if not set. */
		code: FormControl<number | null | undefined>,

		/** A human-readable description of the status of this operation. */
		message: FormControl<string | null | undefined>,

		/** A machine-readable description of why this operation is in the "Failure" status. If this value is empty there is no information available. A Reason clarifies an HTTP status code but does not override it. */
		reason: FormControl<string | null | undefined>,

		/** Status of the operation. One of: "Success" or "Failure". */
		status: FormControl<string | null | undefined>,
	}
	export function CreateStatusFormGroup() {
		return new FormGroup<StatusFormProperties>({
			code: new FormControl<number | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
			reason: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** StatusDetails is a set of additional properties that MAY be set by the server to provide additional information about a response. The Reason field of a Status object defines what attributes will be set. Clients must ignore fields that do not match the defined type of each attribute, and should assume that any attribute may be empty, invalid, or under defined. */
	export interface StatusDetails {

		/** The Causes array includes more details associated with the StatusReason failure. Not all StatusReasons may provide detailed causes. */
		causes?: Array<StatusCause>;

		/** The group attribute of the resource associated with the status StatusReason. */
		group?: string | null;

		/** The kind attribute of the resource associated with the status StatusReason. On some operations may differ from the requested resource Kind. */
		kind?: string | null;

		/** The name attribute of the resource associated with the status StatusReason (when there is a single name which can be described). */
		name?: string | null;

		/** If specified, the time in seconds before the operation should be retried. Some errors may indicate the client must take an alternate action - for those errors this field may indicate how long to wait before taking the alternate action. */
		retryAfterSeconds?: number | null;

		/** UID of the resource. (when there is a single resource which can be described). */
		uid?: string | null;
	}

	/** StatusDetails is a set of additional properties that MAY be set by the server to provide additional information about a response. The Reason field of a Status object defines what attributes will be set. Clients must ignore fields that do not match the defined type of each attribute, and should assume that any attribute may be empty, invalid, or under defined. */
	export interface StatusDetailsFormProperties {

		/** The group attribute of the resource associated with the status StatusReason. */
		group: FormControl<string | null | undefined>,

		/** The kind attribute of the resource associated with the status StatusReason. On some operations may differ from the requested resource Kind. */
		kind: FormControl<string | null | undefined>,

		/** The name attribute of the resource associated with the status StatusReason (when there is a single name which can be described). */
		name: FormControl<string | null | undefined>,

		/** If specified, the time in seconds before the operation should be retried. Some errors may indicate the client must take an alternate action - for those errors this field may indicate how long to wait before taking the alternate action. */
		retryAfterSeconds: FormControl<number | null | undefined>,

		/** UID of the resource. (when there is a single resource which can be described). */
		uid: FormControl<string | null | undefined>,
	}
	export function CreateStatusDetailsFormGroup() {
		return new FormGroup<StatusDetailsFormProperties>({
			group: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			retryAfterSeconds: new FormControl<number | null | undefined>(undefined),
			uid: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** StatusCause provides more information about an api.Status failure, including cases when multiple errors are encountered. */
	export interface StatusCause {

		/** The field of the resource that has caused this error, as named by its JSON serialization. May include dot and postfix notation for nested attributes. Arrays are zero-indexed. Fields may appear more than once in an array of causes due to fields having multiple errors. Examples: "name" - the field "name" on the current resource "items[0].name" - the field "name" on the first array entry in "items" */
		field?: string | null;

		/** A human-readable description of the cause of the error. This field may be presented as-is to a reader. */
		message?: string | null;

		/** A machine-readable description of the cause of the error. If this value is empty there is no information available. */
		reason?: string | null;
	}

	/** StatusCause provides more information about an api.Status failure, including cases when multiple errors are encountered. */
	export interface StatusCauseFormProperties {

		/** The field of the resource that has caused this error, as named by its JSON serialization. May include dot and postfix notation for nested attributes. Arrays are zero-indexed. Fields may appear more than once in an array of causes due to fields having multiple errors. Examples: "name" - the field "name" on the current resource "items[0].name" - the field "name" on the first array entry in "items" */
		field: FormControl<string | null | undefined>,

		/** A human-readable description of the cause of the error. This field may be presented as-is to a reader. */
		message: FormControl<string | null | undefined>,

		/** A machine-readable description of the cause of the error. If this value is empty there is no information available. */
		reason: FormControl<string | null | undefined>,
	}
	export function CreateStatusCauseFormGroup() {
		return new FormGroup<StatusCauseFormProperties>({
			field: new FormControl<string | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
			reason: new FormControl<string | null | undefined>(undefined),
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
		 * Delete a domain mapping.
		 * Delete apis/domains.cloudrun.com/v1/{name}
		 * @param {string} name Required. The name of the domain mapping to delete. For Cloud Run (fully managed), replace {namespace} with the project ID or number. It takes the form namespaces/{namespace}. For example: namespaces/PROJECT_ID
		 * @param {string} apiVersion Cloud Run currently ignores this parameter.
		 * @param {string} dryRun Indicates that the server should validate the request and populate default values without persisting the request. Supported values: `all`
		 * @param {string} kind Cloud Run currently ignores this parameter.
		 * @param {string} propagationPolicy Specifies the propagation policy of delete. Cloud Run currently ignores this setting, and deletes in the background. Please see kubernetes.io/docs/concepts/architecture/garbage-collection/ for more information.
		 * @return {Status} Successful response
		 */
		Run_namespaces_domainmappings_delete(name: string, apiVersion: string | null | undefined, dryRun: string | null | undefined, kind: string | null | undefined, propagationPolicy: string | null | undefined): Observable<Status> {
			return this.http.delete<Status>(this.baseUri + 'apis/domains.cloudrun.com/v1/' + (name == null ? '' : encodeURIComponent(name)) + '&apiVersion=' + (apiVersion == null ? '' : encodeURIComponent(apiVersion)) + '&dryRun=' + (dryRun == null ? '' : encodeURIComponent(dryRun)) + '&kind=' + (kind == null ? '' : encodeURIComponent(kind)) + '&propagationPolicy=' + (propagationPolicy == null ? '' : encodeURIComponent(propagationPolicy)), {});
		}

		/**
		 * Get information about a domain mapping.
		 * Get apis/domains.cloudrun.com/v1/{name}
		 * @param {string} name Required. The name of the domain mapping to retrieve. For Cloud Run (fully managed), replace {namespace} with the project ID or number. It takes the form namespaces/{namespace}. For example: namespaces/PROJECT_ID
		 * @return {DomainMapping} Successful response
		 */
		Run_namespaces_domainmappings_get(name: string): Observable<DomainMapping> {
			return this.http.get<DomainMapping>(this.baseUri + 'apis/domains.cloudrun.com/v1/' + (name == null ? '' : encodeURIComponent(name)), {});
		}

		/**
		 * List authorized domains.
		 * Get apis/domains.cloudrun.com/v1/{parent}/authorizeddomains
		 * @param {string} parent Name of the parent Project resource. Example: `projects/myproject`.
		 * @param {number} pageSize Maximum results to return per page.
		 * @param {string} pageToken Continuation token for fetching the next page of results.
		 * @return {ListAuthorizedDomainsResponse} Successful response
		 */
		Run_namespaces_authorizeddomains_list(parent: string, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListAuthorizedDomainsResponse> {
			return this.http.get<ListAuthorizedDomainsResponse>(this.baseUri + 'apis/domains.cloudrun.com/v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/authorizeddomains&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * List all domain mappings.
		 * Get apis/domains.cloudrun.com/v1/{parent}/domainmappings
		 * @param {string} parent Required. The namespace from which the domain mappings should be listed. For Cloud Run (fully managed), replace {namespace} with the project ID or number. It takes the form namespaces/{namespace}. For example: namespaces/PROJECT_ID
		 * @param {string} _continue Optional. Encoded string to continue paging.
		 * @param {string} fieldSelector Allows to filter resources based on a specific value for a field name. Send this in a query string format. i.e. 'metadata.name%3Dlorem'. Not currently used by Cloud Run.
		 * @param {boolean} includeUninitialized Not currently used by Cloud Run.
		 * @param {string} labelSelector Allows to filter resources based on a label. Supported operations are =, !=, exists, in, and notIn.
		 * @param {number} limit Optional. The maximum number of records that should be returned.
		 * @param {string} resourceVersion The baseline resource version from which the list or watch operation should start. Not currently used by Cloud Run.
		 * @param {boolean} watch Flag that indicates that the client expects to watch this resource as well. Not currently used by Cloud Run.
		 * @return {ListDomainMappingsResponse} Successful response
		 */
		Run_namespaces_domainmappings_list(parent: string, _continue: string | null | undefined, fieldSelector: string | null | undefined, includeUninitialized: boolean | null | undefined, labelSelector: string | null | undefined, limit: number | null | undefined, resourceVersion: string | null | undefined, watch: boolean | null | undefined): Observable<ListDomainMappingsResponse> {
			return this.http.get<ListDomainMappingsResponse>(this.baseUri + 'apis/domains.cloudrun.com/v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/domainmappings&_continue=' + (_continue == null ? '' : encodeURIComponent(_continue)) + '&fieldSelector=' + (fieldSelector == null ? '' : encodeURIComponent(fieldSelector)) + '&includeUninitialized=' + includeUninitialized + '&labelSelector=' + (labelSelector == null ? '' : encodeURIComponent(labelSelector)) + '&limit=' + limit + '&resourceVersion=' + (resourceVersion == null ? '' : encodeURIComponent(resourceVersion)) + '&watch=' + watch, {});
		}

		/**
		 * Create a new domain mapping.
		 * Post apis/domains.cloudrun.com/v1/{parent}/domainmappings
		 * @param {string} parent Required. The namespace in which the domain mapping should be created. For Cloud Run (fully managed), replace {namespace} with the project ID or number. It takes the form namespaces/{namespace}. For example: namespaces/PROJECT_ID
		 * @param {string} dryRun Indicates that the server should validate the request and populate default values without persisting the request. Supported values: `all`
		 * @return {DomainMapping} Successful response
		 */
		Run_namespaces_domainmappings_create(parent: string, dryRun: string | null | undefined, requestBody: DomainMapping): Observable<DomainMapping> {
			return this.http.post<DomainMapping>(this.baseUri + 'apis/domains.cloudrun.com/v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/domainmappings&dryRun=' + (dryRun == null ? '' : encodeURIComponent(dryRun)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Delete a job.
		 * Delete apis/run.googleapis.com/v1/{name}
		 * @param {string} name Required. The name of the job to delete. Replace {namespace} with the project ID or number. It takes the form namespaces/{namespace}. For example: namespaces/PROJECT_ID
		 * @param {string} apiVersion Optional. Cloud Run currently ignores this parameter.
		 * @param {string} kind Optional. Cloud Run currently ignores this parameter.
		 * @param {string} propagationPolicy Optional. Specifies the propagation policy of delete. Cloud Run currently ignores this setting, and deletes in the background. Please see kubernetes.io/docs/concepts/workloads/controllers/garbage-collection/ for more information.
		 * @return {Status} Successful response
		 */
		Run_namespaces_jobs_delete(name: string, apiVersion: string | null | undefined, kind: string | null | undefined, propagationPolicy: string | null | undefined): Observable<Status> {
			return this.http.delete<Status>(this.baseUri + 'apis/run.googleapis.com/v1/' + (name == null ? '' : encodeURIComponent(name)) + '&apiVersion=' + (apiVersion == null ? '' : encodeURIComponent(apiVersion)) + '&kind=' + (kind == null ? '' : encodeURIComponent(kind)) + '&propagationPolicy=' + (propagationPolicy == null ? '' : encodeURIComponent(propagationPolicy)), {});
		}

		/**
		 * Get information about a task.
		 * Get apis/run.googleapis.com/v1/{name}
		 * @param {string} name Required. The name of the task to retrieve. Replace {namespace} with the project ID or number. It takes the form namespaces/{namespace}. For example: namespaces/PROJECT_ID
		 * @return {Task} Successful response
		 */
		Run_namespaces_tasks_get(name: string): Observable<Task> {
			return this.http.get<Task>(this.baseUri + 'apis/run.googleapis.com/v1/' + (name == null ? '' : encodeURIComponent(name)), {});
		}

		/**
		 * Replace a job. Only the spec and metadata labels and annotations are modifiable. After the Replace request, Cloud Run will work to make the 'status' match the requested 'spec'. May provide metadata.resourceVersion to enforce update from last read for optimistic concurrency control.
		 * Put apis/run.googleapis.com/v1/{name}
		 * @param {string} name Required. The name of the job being replaced. Replace {namespace} with the project ID or number. It takes the form namespaces/{namespace}. For example: namespaces/PROJECT_ID
		 * @return {Job} Successful response
		 */
		Run_namespaces_jobs_replaceJob(name: string, requestBody: Job): Observable<Job> {
			return this.http.put<Job>(this.baseUri + 'apis/run.googleapis.com/v1/' + (name == null ? '' : encodeURIComponent(name)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Cancel an execution.
		 * Post apis/run.googleapis.com/v1/{name}:cancel
		 * @param {string} name Required. The name of the execution to cancel. Replace {namespace} with the project ID or number. It takes the form namespaces/{namespace}. For example: namespaces/PROJECT_ID
		 * @return {Execution} Successful response
		 */
		Run_namespaces_executions_cancel(name: string, requestBody: CancelExecutionRequest): Observable<Execution> {
			return this.http.post<Execution>(this.baseUri + 'apis/run.googleapis.com/v1/' + (name == null ? '' : encodeURIComponent(name)) + ':cancel', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Trigger creation of a new execution of this job.
		 * Post apis/run.googleapis.com/v1/{name}:run
		 * @param {string} name Required. The name of the job to run. Replace {namespace} with the project ID or number. It takes the form namespaces/{namespace}. For example: namespaces/PROJECT_ID
		 * @return {Execution} Successful response
		 */
		Run_namespaces_jobs_run(name: string, requestBody: RunJobRequest): Observable<Execution> {
			return this.http.post<Execution>(this.baseUri + 'apis/run.googleapis.com/v1/' + (name == null ? '' : encodeURIComponent(name)) + ':run', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * List executions.
		 * Get apis/run.googleapis.com/v1/{parent}/executions
		 * @param {string} parent Required. The namespace from which the executions should be listed. Replace {namespace} with the project ID or number. It takes the form namespaces/{namespace}. For example: namespaces/PROJECT_ID
		 * @param {string} _continue Optional. Optional encoded string to continue paging.
		 * @param {string} fieldSelector Optional. Not supported by Cloud Run.
		 * @param {boolean} includeUninitialized Optional. Not supported by Cloud Run.
		 * @param {string} labelSelector Optional. Allows to filter resources based on a label. Supported operations are =, !=, exists, in, and notIn.
		 * @param {number} limit Optional. The maximum number of the records that should be returned.
		 * @param {string} resourceVersion Optional. Not supported by Cloud Run.
		 * @param {boolean} watch Optional. Not supported by Cloud Run.
		 * @return {ListExecutionsResponse} Successful response
		 */
		Run_namespaces_executions_list(parent: string, _continue: string | null | undefined, fieldSelector: string | null | undefined, includeUninitialized: boolean | null | undefined, labelSelector: string | null | undefined, limit: number | null | undefined, resourceVersion: string | null | undefined, watch: boolean | null | undefined): Observable<ListExecutionsResponse> {
			return this.http.get<ListExecutionsResponse>(this.baseUri + 'apis/run.googleapis.com/v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/executions&_continue=' + (_continue == null ? '' : encodeURIComponent(_continue)) + '&fieldSelector=' + (fieldSelector == null ? '' : encodeURIComponent(fieldSelector)) + '&includeUninitialized=' + includeUninitialized + '&labelSelector=' + (labelSelector == null ? '' : encodeURIComponent(labelSelector)) + '&limit=' + limit + '&resourceVersion=' + (resourceVersion == null ? '' : encodeURIComponent(resourceVersion)) + '&watch=' + watch, {});
		}

		/**
		 * List jobs.
		 * Get apis/run.googleapis.com/v1/{parent}/jobs
		 * @param {string} parent Required. The namespace from which the jobs should be listed. Replace {namespace} with the project ID or number. It takes the form namespaces/{namespace}. For example: namespaces/PROJECT_ID
		 * @param {string} _continue Optional. Optional encoded string to continue paging.
		 * @param {string} fieldSelector Optional. Not supported by Cloud Run.
		 * @param {boolean} includeUninitialized Optional. Not supported by Cloud Run.
		 * @param {string} labelSelector Optional. Allows to filter resources based on a label. Supported operations are =, !=, exists, in, and notIn.
		 * @param {number} limit Optional. The maximum number of records that should be returned.
		 * @param {string} resourceVersion Optional. Not supported by Cloud Run.
		 * @param {boolean} watch Optional. Not supported by Cloud Run.
		 * @return {ListJobsResponse} Successful response
		 */
		Run_namespaces_jobs_list(parent: string, _continue: string | null | undefined, fieldSelector: string | null | undefined, includeUninitialized: boolean | null | undefined, labelSelector: string | null | undefined, limit: number | null | undefined, resourceVersion: string | null | undefined, watch: boolean | null | undefined): Observable<ListJobsResponse> {
			return this.http.get<ListJobsResponse>(this.baseUri + 'apis/run.googleapis.com/v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/jobs&_continue=' + (_continue == null ? '' : encodeURIComponent(_continue)) + '&fieldSelector=' + (fieldSelector == null ? '' : encodeURIComponent(fieldSelector)) + '&includeUninitialized=' + includeUninitialized + '&labelSelector=' + (labelSelector == null ? '' : encodeURIComponent(labelSelector)) + '&limit=' + limit + '&resourceVersion=' + (resourceVersion == null ? '' : encodeURIComponent(resourceVersion)) + '&watch=' + watch, {});
		}

		/**
		 * Create a job.
		 * Post apis/run.googleapis.com/v1/{parent}/jobs
		 * @param {string} parent Required. The namespace in which the job should be created. Replace {namespace} with the project ID or number. It takes the form namespaces/{namespace}. For example: namespaces/PROJECT_ID
		 * @return {Job} Successful response
		 */
		Run_namespaces_jobs_create(parent: string, requestBody: Job): Observable<Job> {
			return this.http.post<Job>(this.baseUri + 'apis/run.googleapis.com/v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/jobs', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * List tasks.
		 * Get apis/run.googleapis.com/v1/{parent}/tasks
		 * @param {string} parent Required. The namespace from which the tasks should be listed. Replace {namespace} with the project ID or number. It takes the form namespaces/{namespace}. For example: namespaces/PROJECT_ID
		 * @param {string} _continue Optional. Optional encoded string to continue paging.
		 * @param {string} fieldSelector Optional. Not supported by Cloud Run.
		 * @param {boolean} includeUninitialized Optional. Not supported by Cloud Run.
		 * @param {string} labelSelector Optional. Allows to filter resources based on a label. Supported operations are =, !=, exists, in, and notIn. For example, to list all tasks of execution "foo" in succeeded state: `run.googleapis.com/execution=foo,run.googleapis.com/runningState=Succeeded`. Supported states are: * `Pending`: Initial state of all tasks. The task has not yet started but eventually will. * `Running`: Container instances for this task are running or will be running shortly. * `Succeeded`: No more container instances to run for the task, and the last attempt succeeded. * `Failed`: No more container instances to run for the task, and the last attempt failed. This task has run out of retry attempts. * `Cancelled`: Task was running but got stopped because its parent execution has been aborted. * `Abandoned`: The task has not yet started and never will because its parent execution has been aborted.
		 * @param {number} limit Optional. The maximum number of records that should be returned.
		 * @param {string} resourceVersion Optional. Not supported by Cloud Run.
		 * @param {boolean} watch Optional. Not supported by Cloud Run.
		 * @return {ListTasksResponse} Successful response
		 */
		Run_namespaces_tasks_list(parent: string, _continue: string | null | undefined, fieldSelector: string | null | undefined, includeUninitialized: boolean | null | undefined, labelSelector: string | null | undefined, limit: number | null | undefined, resourceVersion: string | null | undefined, watch: boolean | null | undefined): Observable<ListTasksResponse> {
			return this.http.get<ListTasksResponse>(this.baseUri + 'apis/run.googleapis.com/v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/tasks&_continue=' + (_continue == null ? '' : encodeURIComponent(_continue)) + '&fieldSelector=' + (fieldSelector == null ? '' : encodeURIComponent(fieldSelector)) + '&includeUninitialized=' + includeUninitialized + '&labelSelector=' + (labelSelector == null ? '' : encodeURIComponent(labelSelector)) + '&limit=' + limit + '&resourceVersion=' + (resourceVersion == null ? '' : encodeURIComponent(resourceVersion)) + '&watch=' + watch, {});
		}

		/**
		 * Deletes the provided service. This will cause the Service to stop serving traffic and will delete all associated Revisions.
		 * Delete apis/serving.knative.dev/v1/{name}
		 * @param {string} name Required. The fully qualified name of the service to delete. It can be any of the following forms: * `namespaces/{project_id_or_number}/services/{service_name}` (only when the `endpoint` is regional) * `projects/{project_id_or_number}/locations/{region}/services/{service_name}` * `projects/{project_id_or_number}/regions/{region}/services/{service_name}`
		 * @param {string} apiVersion Not supported, and ignored by Cloud Run.
		 * @param {string} dryRun Indicates that the server should validate the request and populate default values without persisting the request. Supported values: `all`
		 * @param {string} kind Not supported, and ignored by Cloud Run.
		 * @param {string} propagationPolicy Not supported, and ignored by Cloud Run.
		 * @return {Status} Successful response
		 */
		Run_namespaces_services_delete(name: string, apiVersion: string | null | undefined, dryRun: string | null | undefined, kind: string | null | undefined, propagationPolicy: string | null | undefined): Observable<Status> {
			return this.http.delete<Status>(this.baseUri + 'apis/serving.knative.dev/v1/' + (name == null ? '' : encodeURIComponent(name)) + '&apiVersion=' + (apiVersion == null ? '' : encodeURIComponent(apiVersion)) + '&dryRun=' + (dryRun == null ? '' : encodeURIComponent(dryRun)) + '&kind=' + (kind == null ? '' : encodeURIComponent(kind)) + '&propagationPolicy=' + (propagationPolicy == null ? '' : encodeURIComponent(propagationPolicy)), {});
		}

		/**
		 * Gets information about a service.
		 * Get apis/serving.knative.dev/v1/{name}
		 * @param {string} name Required. The fully qualified name of the service to retrieve. It can be any of the following forms: * `namespaces/{project_id_or_number}/services/{service_name}` (only when the `endpoint` is regional) * `projects/{project_id_or_number}/locations/{region}/services/{service_name}` * `projects/{project_id_or_number}/regions/{region}/services/{service_name}`
		 * @return {Service} Successful response
		 */
		Run_namespaces_services_get(name: string): Observable<Service> {
			return this.http.get<Service>(this.baseUri + 'apis/serving.knative.dev/v1/' + (name == null ? '' : encodeURIComponent(name)), {});
		}

		/**
		 * Replaces a service. Only the spec and metadata labels and annotations are modifiable. After the Update request, Cloud Run will work to make the 'status' match the requested 'spec'. May provide metadata.resourceVersion to enforce update from last read for optimistic concurrency control.
		 * Put apis/serving.knative.dev/v1/{name}
		 * @param {string} name Required. The fully qualified name of the service to replace. It can be any of the following forms: * `namespaces/{project_id_or_number}/services/{service_name}` (only when the `endpoint` is regional) * `projects/{project_id_or_number}/locations/{region}/services/{service_name}` * `projects/{project_id_or_number}/regions/{region}/services/{service_name}`
		 * @param {string} dryRun Indicates that the server should validate the request and populate default values without persisting the request. Supported values: `all`
		 * @return {Service} Successful response
		 */
		Run_namespaces_services_replaceService(name: string, dryRun: string | null | undefined, requestBody: Service): Observable<Service> {
			return this.http.put<Service>(this.baseUri + 'apis/serving.knative.dev/v1/' + (name == null ? '' : encodeURIComponent(name)) + '&dryRun=' + (dryRun == null ? '' : encodeURIComponent(dryRun)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * List configurations.
		 * Get apis/serving.knative.dev/v1/{parent}/configurations
		 * @param {string} parent The namespace from which the configurations should be listed. For Cloud Run, replace {namespace_id} with the project ID or number.
		 * @param {string} _continue Optional. Encoded string to continue paging.
		 * @param {string} fieldSelector Not supported by Cloud Run.
		 * @param {boolean} includeUninitialized Not supported by Cloud Run.
		 * @param {string} labelSelector Allows to filter resources based on a label. Supported operations are =, !=, exists, in, and notIn.
		 * @param {number} limit Optional. The maximum number of the records that should be returned.
		 * @param {string} resourceVersion Not supported by Cloud Run.
		 * @param {boolean} watch Not supported by Cloud Run.
		 * @return {ListConfigurationsResponse} Successful response
		 */
		Run_namespaces_configurations_list(parent: string, _continue: string | null | undefined, fieldSelector: string | null | undefined, includeUninitialized: boolean | null | undefined, labelSelector: string | null | undefined, limit: number | null | undefined, resourceVersion: string | null | undefined, watch: boolean | null | undefined): Observable<ListConfigurationsResponse> {
			return this.http.get<ListConfigurationsResponse>(this.baseUri + 'apis/serving.knative.dev/v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/configurations&_continue=' + (_continue == null ? '' : encodeURIComponent(_continue)) + '&fieldSelector=' + (fieldSelector == null ? '' : encodeURIComponent(fieldSelector)) + '&includeUninitialized=' + includeUninitialized + '&labelSelector=' + (labelSelector == null ? '' : encodeURIComponent(labelSelector)) + '&limit=' + limit + '&resourceVersion=' + (resourceVersion == null ? '' : encodeURIComponent(resourceVersion)) + '&watch=' + watch, {});
		}

		/**
		 * List revisions.
		 * Get apis/serving.knative.dev/v1/{parent}/revisions
		 * @param {string} parent The namespace from which the revisions should be listed. For Cloud Run (fully managed), replace {namespace} with the project ID or number. It takes the form namespaces/{namespace}. For example: namespaces/PROJECT_ID
		 * @param {string} _continue Optional. Encoded string to continue paging.
		 * @param {string} fieldSelector Allows to filter resources based on a specific value for a field name. Send this in a query string format. i.e. 'metadata.name%3Dlorem'. Not currently used by Cloud Run.
		 * @param {boolean} includeUninitialized Not currently used by Cloud Run.
		 * @param {string} labelSelector Allows to filter resources based on a label. Supported operations are =, !=, exists, in, and notIn.
		 * @param {number} limit Optional. The maximum number of records that should be returned.
		 * @param {string} resourceVersion The baseline resource version from which the list or watch operation should start. Not currently used by Cloud Run.
		 * @param {boolean} watch Flag that indicates that the client expects to watch this resource as well. Not currently used by Cloud Run.
		 * @return {ListRevisionsResponse} Successful response
		 */
		Run_namespaces_revisions_list(parent: string, _continue: string | null | undefined, fieldSelector: string | null | undefined, includeUninitialized: boolean | null | undefined, labelSelector: string | null | undefined, limit: number | null | undefined, resourceVersion: string | null | undefined, watch: boolean | null | undefined): Observable<ListRevisionsResponse> {
			return this.http.get<ListRevisionsResponse>(this.baseUri + 'apis/serving.knative.dev/v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/revisions&_continue=' + (_continue == null ? '' : encodeURIComponent(_continue)) + '&fieldSelector=' + (fieldSelector == null ? '' : encodeURIComponent(fieldSelector)) + '&includeUninitialized=' + includeUninitialized + '&labelSelector=' + (labelSelector == null ? '' : encodeURIComponent(labelSelector)) + '&limit=' + limit + '&resourceVersion=' + (resourceVersion == null ? '' : encodeURIComponent(resourceVersion)) + '&watch=' + watch, {});
		}

		/**
		 * List routes.
		 * Get apis/serving.knative.dev/v1/{parent}/routes
		 * @param {string} parent The namespace from which the routes should be listed. For Cloud Run (fully managed), replace {namespace} with the project ID or number. It takes the form namespaces/{namespace}. For example: namespaces/PROJECT_ID
		 * @param {string} _continue Optional. Encoded string to continue paging.
		 * @param {string} fieldSelector Allows to filter resources based on a specific value for a field name. Send this in a query string format. i.e. 'metadata.name%3Dlorem'. Not currently used by Cloud Run.
		 * @param {boolean} includeUninitialized Not currently used by Cloud Run.
		 * @param {string} labelSelector Allows to filter resources based on a label. Supported operations are =, !=, exists, in, and notIn.
		 * @param {number} limit Optional. The maximum number of records that should be returned.
		 * @param {string} resourceVersion The baseline resource version from which the list or watch operation should start. Not currently used by Cloud Run.
		 * @param {boolean} watch Flag that indicates that the client expects to watch this resource as well. Not currently used by Cloud Run.
		 * @return {ListRoutesResponse} Successful response
		 */
		Run_namespaces_routes_list(parent: string, _continue: string | null | undefined, fieldSelector: string | null | undefined, includeUninitialized: boolean | null | undefined, labelSelector: string | null | undefined, limit: number | null | undefined, resourceVersion: string | null | undefined, watch: boolean | null | undefined): Observable<ListRoutesResponse> {
			return this.http.get<ListRoutesResponse>(this.baseUri + 'apis/serving.knative.dev/v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/routes&_continue=' + (_continue == null ? '' : encodeURIComponent(_continue)) + '&fieldSelector=' + (fieldSelector == null ? '' : encodeURIComponent(fieldSelector)) + '&includeUninitialized=' + includeUninitialized + '&labelSelector=' + (labelSelector == null ? '' : encodeURIComponent(labelSelector)) + '&limit=' + limit + '&resourceVersion=' + (resourceVersion == null ? '' : encodeURIComponent(resourceVersion)) + '&watch=' + watch, {});
		}

		/**
		 * Lists services for the given project and region.
		 * Get apis/serving.knative.dev/v1/{parent}/services
		 * @param {string} parent Required. The parent from where the resources should be listed. In Cloud Run, it may be one of the following: * `{project_id_or_number}` * `namespaces/{project_id_or_number}` * `namespaces/{project_id_or_number}/services` * `projects/{project_id_or_number}/locations/{region}` * `projects/{project_id_or_number}/regions/{region}`
		 * @param {string} _continue Encoded string to continue paging.
		 * @param {string} fieldSelector Not supported, and ignored by Cloud Run.
		 * @param {boolean} includeUninitialized Not supported, and ignored by Cloud Run.
		 * @param {string} labelSelector Allows to filter resources based on a label. Supported operations are =, !=, exists, in, and notIn.
		 * @param {number} limit The maximum number of records that should be returned.
		 * @param {string} resourceVersion Not supported, and ignored by Cloud Run.
		 * @param {boolean} watch Not supported, and ignored by Cloud Run.
		 * @return {ListServicesResponse} Successful response
		 */
		Run_namespaces_services_list(parent: string, _continue: string | null | undefined, fieldSelector: string | null | undefined, includeUninitialized: boolean | null | undefined, labelSelector: string | null | undefined, limit: number | null | undefined, resourceVersion: string | null | undefined, watch: boolean | null | undefined): Observable<ListServicesResponse> {
			return this.http.get<ListServicesResponse>(this.baseUri + 'apis/serving.knative.dev/v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/services&_continue=' + (_continue == null ? '' : encodeURIComponent(_continue)) + '&fieldSelector=' + (fieldSelector == null ? '' : encodeURIComponent(fieldSelector)) + '&includeUninitialized=' + includeUninitialized + '&labelSelector=' + (labelSelector == null ? '' : encodeURIComponent(labelSelector)) + '&limit=' + limit + '&resourceVersion=' + (resourceVersion == null ? '' : encodeURIComponent(resourceVersion)) + '&watch=' + watch, {});
		}

		/**
		 * Creates a new Service. Service creation will trigger a new deployment. Use GetService, and check service.status to determine if the Service is ready.
		 * Post apis/serving.knative.dev/v1/{parent}/services
		 * @param {string} parent Required. The resource's parent. In Cloud Run, it may be one of the following: * `{project_id_or_number}` * `namespaces/{project_id_or_number}` * `namespaces/{project_id_or_number}/services` * `projects/{project_id_or_number}/locations/{region}` * `projects/{project_id_or_number}/regions/{region}`
		 * @param {string} dryRun Indicates that the server should validate the request and populate default values without persisting the request. Supported values: `all`
		 * @return {Service} Successful response
		 */
		Run_namespaces_services_create(parent: string, dryRun: string | null | undefined, requestBody: Service): Observable<Service> {
			return this.http.post<Service>(this.baseUri + 'apis/serving.knative.dev/v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/services&dryRun=' + (dryRun == null ? '' : encodeURIComponent(dryRun)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes the provided service. This will cause the Service to stop serving traffic and will delete all associated Revisions.
		 * Delete v1/{name}
		 * @param {string} name Required. The fully qualified name of the service to delete. It can be any of the following forms: * `namespaces/{project_id_or_number}/services/{service_name}` (only when the `endpoint` is regional) * `projects/{project_id_or_number}/locations/{region}/services/{service_name}` * `projects/{project_id_or_number}/regions/{region}/services/{service_name}`
		 * @param {string} apiVersion Not supported, and ignored by Cloud Run.
		 * @param {string} dryRun Indicates that the server should validate the request and populate default values without persisting the request. Supported values: `all`
		 * @param {string} kind Not supported, and ignored by Cloud Run.
		 * @param {string} propagationPolicy Not supported, and ignored by Cloud Run.
		 * @return {Status} Successful response
		 */
		Run_projects_locations_services_delete(name: string, apiVersion: string | null | undefined, dryRun: string | null | undefined, kind: string | null | undefined, propagationPolicy: string | null | undefined): Observable<Status> {
			return this.http.delete<Status>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + '&apiVersion=' + (apiVersion == null ? '' : encodeURIComponent(apiVersion)) + '&dryRun=' + (dryRun == null ? '' : encodeURIComponent(dryRun)) + '&kind=' + (kind == null ? '' : encodeURIComponent(kind)) + '&propagationPolicy=' + (propagationPolicy == null ? '' : encodeURIComponent(propagationPolicy)), {});
		}

		/**
		 * Gets information about a service.
		 * Get v1/{name}
		 * @param {string} name Required. The fully qualified name of the service to retrieve. It can be any of the following forms: * `namespaces/{project_id_or_number}/services/{service_name}` (only when the `endpoint` is regional) * `projects/{project_id_or_number}/locations/{region}/services/{service_name}` * `projects/{project_id_or_number}/regions/{region}/services/{service_name}`
		 * @return {Service} Successful response
		 */
		Run_projects_locations_services_get(name: string): Observable<Service> {
			return this.http.get<Service>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)), {});
		}

		/**
		 * Replaces a service. Only the spec and metadata labels and annotations are modifiable. After the Update request, Cloud Run will work to make the 'status' match the requested 'spec'. May provide metadata.resourceVersion to enforce update from last read for optimistic concurrency control.
		 * Put v1/{name}
		 * @param {string} name Required. The fully qualified name of the service to replace. It can be any of the following forms: * `namespaces/{project_id_or_number}/services/{service_name}` (only when the `endpoint` is regional) * `projects/{project_id_or_number}/locations/{region}/services/{service_name}` * `projects/{project_id_or_number}/regions/{region}/services/{service_name}`
		 * @param {string} dryRun Indicates that the server should validate the request and populate default values without persisting the request. Supported values: `all`
		 * @return {Service} Successful response
		 */
		Run_projects_locations_services_replaceService(name: string, dryRun: string | null | undefined, requestBody: Service): Observable<Service> {
			return this.http.put<Service>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + '&dryRun=' + (dryRun == null ? '' : encodeURIComponent(dryRun)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists information about the supported locations for this service.
		 * Get v1/{name}/locations
		 * @param {string} name The resource that owns the locations collection, if applicable.
		 * @param {string} filter A filter to narrow down results to a preferred subset. The filtering language accepts strings like `"displayName=tokyo"`, and is documented in more detail in [AIP-160](https://google.aip.dev/160).
		 * @param {number} pageSize The maximum number of results to return. If not set, the service selects a default.
		 * @param {string} pageToken A page token received from the `next_page_token` field in the response. Send that page token to receive the subsequent page.
		 * @return {ListLocationsResponse} Successful response
		 */
		Run_projects_locations_list(name: string, filter: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListLocationsResponse> {
			return this.http.get<ListLocationsResponse>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + '/locations&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
		 * Get v1/{name}/operations
		 * @param {string} name Required. To query for all of the operations for a project.
		 * @param {string} filter Optional. A filter for matching the completed or in-progress operations. The supported formats of *filter* are: To query for only completed operations: done:true To query for only ongoing operations: done:false Must be empty to query for all of the latest operations for the given parent project.
		 * @param {number} pageSize The maximum number of records that should be returned. Requested page size cannot exceed 100. If not set or set to less than or equal to 0, the default page size is 100. .
		 * @param {string} pageToken Token identifying which result to start with, which is returned by a previous list call.
		 * @return {GoogleLongrunningListOperationsResponse} Successful response
		 */
		Run_projects_locations_operations_list(name: string, filter: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<GoogleLongrunningListOperationsResponse> {
			return this.http.get<GoogleLongrunningListOperationsResponse>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + '/operations&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Waits until the specified long-running operation is done or reaches at most a specified timeout, returning the latest state. If the operation is already done, the latest state is immediately returned. If the timeout specified is greater than the default HTTP/RPC timeout, the HTTP/RPC timeout is used. If the server does not support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Note that this method is on a best-effort basis. It may return the latest state before the specified timeout (including immediately), meaning even an immediate response is no guarantee that the operation is done.
		 * Post v1/{name}:wait
		 * @param {string} name The name of the operation resource to wait on.
		 * @return {GoogleLongrunningOperation} Successful response
		 */
		Run_projects_locations_operations_wait(name: string, requestBody: GoogleLongrunningWaitOperationRequest): Observable<GoogleLongrunningOperation> {
			return this.http.post<GoogleLongrunningOperation>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + ':wait', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * List authorized domains.
		 * Get v1/{parent}/authorizeddomains
		 * @param {string} parent Name of the parent Project resource. Example: `projects/myproject`.
		 * @param {number} pageSize Maximum results to return per page.
		 * @param {string} pageToken Continuation token for fetching the next page of results.
		 * @return {ListAuthorizedDomainsResponse} Successful response
		 */
		Run_projects_locations_authorizeddomains_list(parent: string, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListAuthorizedDomainsResponse> {
			return this.http.get<ListAuthorizedDomainsResponse>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/authorizeddomains&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * List configurations.
		 * Get v1/{parent}/configurations
		 * @param {string} parent The namespace from which the configurations should be listed. For Cloud Run, replace {namespace_id} with the project ID or number.
		 * @param {string} _continue Optional. Encoded string to continue paging.
		 * @param {string} fieldSelector Not supported by Cloud Run.
		 * @param {boolean} includeUninitialized Not supported by Cloud Run.
		 * @param {string} labelSelector Allows to filter resources based on a label. Supported operations are =, !=, exists, in, and notIn.
		 * @param {number} limit Optional. The maximum number of the records that should be returned.
		 * @param {string} resourceVersion Not supported by Cloud Run.
		 * @param {boolean} watch Not supported by Cloud Run.
		 * @return {ListConfigurationsResponse} Successful response
		 */
		Run_projects_locations_configurations_list(parent: string, _continue: string | null | undefined, fieldSelector: string | null | undefined, includeUninitialized: boolean | null | undefined, labelSelector: string | null | undefined, limit: number | null | undefined, resourceVersion: string | null | undefined, watch: boolean | null | undefined): Observable<ListConfigurationsResponse> {
			return this.http.get<ListConfigurationsResponse>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/configurations&_continue=' + (_continue == null ? '' : encodeURIComponent(_continue)) + '&fieldSelector=' + (fieldSelector == null ? '' : encodeURIComponent(fieldSelector)) + '&includeUninitialized=' + includeUninitialized + '&labelSelector=' + (labelSelector == null ? '' : encodeURIComponent(labelSelector)) + '&limit=' + limit + '&resourceVersion=' + (resourceVersion == null ? '' : encodeURIComponent(resourceVersion)) + '&watch=' + watch, {});
		}

		/**
		 * List all domain mappings.
		 * Get v1/{parent}/domainmappings
		 * @param {string} parent Required. The namespace from which the domain mappings should be listed. For Cloud Run (fully managed), replace {namespace} with the project ID or number. It takes the form namespaces/{namespace}. For example: namespaces/PROJECT_ID
		 * @param {string} _continue Optional. Encoded string to continue paging.
		 * @param {string} fieldSelector Allows to filter resources based on a specific value for a field name. Send this in a query string format. i.e. 'metadata.name%3Dlorem'. Not currently used by Cloud Run.
		 * @param {boolean} includeUninitialized Not currently used by Cloud Run.
		 * @param {string} labelSelector Allows to filter resources based on a label. Supported operations are =, !=, exists, in, and notIn.
		 * @param {number} limit Optional. The maximum number of records that should be returned.
		 * @param {string} resourceVersion The baseline resource version from which the list or watch operation should start. Not currently used by Cloud Run.
		 * @param {boolean} watch Flag that indicates that the client expects to watch this resource as well. Not currently used by Cloud Run.
		 * @return {ListDomainMappingsResponse} Successful response
		 */
		Run_projects_locations_domainmappings_list(parent: string, _continue: string | null | undefined, fieldSelector: string | null | undefined, includeUninitialized: boolean | null | undefined, labelSelector: string | null | undefined, limit: number | null | undefined, resourceVersion: string | null | undefined, watch: boolean | null | undefined): Observable<ListDomainMappingsResponse> {
			return this.http.get<ListDomainMappingsResponse>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/domainmappings&_continue=' + (_continue == null ? '' : encodeURIComponent(_continue)) + '&fieldSelector=' + (fieldSelector == null ? '' : encodeURIComponent(fieldSelector)) + '&includeUninitialized=' + includeUninitialized + '&labelSelector=' + (labelSelector == null ? '' : encodeURIComponent(labelSelector)) + '&limit=' + limit + '&resourceVersion=' + (resourceVersion == null ? '' : encodeURIComponent(resourceVersion)) + '&watch=' + watch, {});
		}

		/**
		 * Create a new domain mapping.
		 * Post v1/{parent}/domainmappings
		 * @param {string} parent Required. The namespace in which the domain mapping should be created. For Cloud Run (fully managed), replace {namespace} with the project ID or number. It takes the form namespaces/{namespace}. For example: namespaces/PROJECT_ID
		 * @param {string} dryRun Indicates that the server should validate the request and populate default values without persisting the request. Supported values: `all`
		 * @return {DomainMapping} Successful response
		 */
		Run_projects_locations_domainmappings_create(parent: string, dryRun: string | null | undefined, requestBody: DomainMapping): Observable<DomainMapping> {
			return this.http.post<DomainMapping>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/domainmappings&dryRun=' + (dryRun == null ? '' : encodeURIComponent(dryRun)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * List revisions.
		 * Get v1/{parent}/revisions
		 * @param {string} parent The namespace from which the revisions should be listed. For Cloud Run (fully managed), replace {namespace} with the project ID or number. It takes the form namespaces/{namespace}. For example: namespaces/PROJECT_ID
		 * @param {string} _continue Optional. Encoded string to continue paging.
		 * @param {string} fieldSelector Allows to filter resources based on a specific value for a field name. Send this in a query string format. i.e. 'metadata.name%3Dlorem'. Not currently used by Cloud Run.
		 * @param {boolean} includeUninitialized Not currently used by Cloud Run.
		 * @param {string} labelSelector Allows to filter resources based on a label. Supported operations are =, !=, exists, in, and notIn.
		 * @param {number} limit Optional. The maximum number of records that should be returned.
		 * @param {string} resourceVersion The baseline resource version from which the list or watch operation should start. Not currently used by Cloud Run.
		 * @param {boolean} watch Flag that indicates that the client expects to watch this resource as well. Not currently used by Cloud Run.
		 * @return {ListRevisionsResponse} Successful response
		 */
		Run_projects_locations_revisions_list(parent: string, _continue: string | null | undefined, fieldSelector: string | null | undefined, includeUninitialized: boolean | null | undefined, labelSelector: string | null | undefined, limit: number | null | undefined, resourceVersion: string | null | undefined, watch: boolean | null | undefined): Observable<ListRevisionsResponse> {
			return this.http.get<ListRevisionsResponse>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/revisions&_continue=' + (_continue == null ? '' : encodeURIComponent(_continue)) + '&fieldSelector=' + (fieldSelector == null ? '' : encodeURIComponent(fieldSelector)) + '&includeUninitialized=' + includeUninitialized + '&labelSelector=' + (labelSelector == null ? '' : encodeURIComponent(labelSelector)) + '&limit=' + limit + '&resourceVersion=' + (resourceVersion == null ? '' : encodeURIComponent(resourceVersion)) + '&watch=' + watch, {});
		}

		/**
		 * List routes.
		 * Get v1/{parent}/routes
		 * @param {string} parent The namespace from which the routes should be listed. For Cloud Run (fully managed), replace {namespace} with the project ID or number. It takes the form namespaces/{namespace}. For example: namespaces/PROJECT_ID
		 * @param {string} _continue Optional. Encoded string to continue paging.
		 * @param {string} fieldSelector Allows to filter resources based on a specific value for a field name. Send this in a query string format. i.e. 'metadata.name%3Dlorem'. Not currently used by Cloud Run.
		 * @param {boolean} includeUninitialized Not currently used by Cloud Run.
		 * @param {string} labelSelector Allows to filter resources based on a label. Supported operations are =, !=, exists, in, and notIn.
		 * @param {number} limit Optional. The maximum number of records that should be returned.
		 * @param {string} resourceVersion The baseline resource version from which the list or watch operation should start. Not currently used by Cloud Run.
		 * @param {boolean} watch Flag that indicates that the client expects to watch this resource as well. Not currently used by Cloud Run.
		 * @return {ListRoutesResponse} Successful response
		 */
		Run_projects_locations_routes_list(parent: string, _continue: string | null | undefined, fieldSelector: string | null | undefined, includeUninitialized: boolean | null | undefined, labelSelector: string | null | undefined, limit: number | null | undefined, resourceVersion: string | null | undefined, watch: boolean | null | undefined): Observable<ListRoutesResponse> {
			return this.http.get<ListRoutesResponse>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/routes&_continue=' + (_continue == null ? '' : encodeURIComponent(_continue)) + '&fieldSelector=' + (fieldSelector == null ? '' : encodeURIComponent(fieldSelector)) + '&includeUninitialized=' + includeUninitialized + '&labelSelector=' + (labelSelector == null ? '' : encodeURIComponent(labelSelector)) + '&limit=' + limit + '&resourceVersion=' + (resourceVersion == null ? '' : encodeURIComponent(resourceVersion)) + '&watch=' + watch, {});
		}

		/**
		 * Lists services for the given project and region.
		 * Get v1/{parent}/services
		 * @param {string} parent Required. The parent from where the resources should be listed. In Cloud Run, it may be one of the following: * `{project_id_or_number}` * `namespaces/{project_id_or_number}` * `namespaces/{project_id_or_number}/services` * `projects/{project_id_or_number}/locations/{region}` * `projects/{project_id_or_number}/regions/{region}`
		 * @param {string} _continue Encoded string to continue paging.
		 * @param {string} fieldSelector Not supported, and ignored by Cloud Run.
		 * @param {boolean} includeUninitialized Not supported, and ignored by Cloud Run.
		 * @param {string} labelSelector Allows to filter resources based on a label. Supported operations are =, !=, exists, in, and notIn.
		 * @param {number} limit The maximum number of records that should be returned.
		 * @param {string} resourceVersion Not supported, and ignored by Cloud Run.
		 * @param {boolean} watch Not supported, and ignored by Cloud Run.
		 * @return {ListServicesResponse} Successful response
		 */
		Run_projects_locations_services_list(parent: string, _continue: string | null | undefined, fieldSelector: string | null | undefined, includeUninitialized: boolean | null | undefined, labelSelector: string | null | undefined, limit: number | null | undefined, resourceVersion: string | null | undefined, watch: boolean | null | undefined): Observable<ListServicesResponse> {
			return this.http.get<ListServicesResponse>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/services&_continue=' + (_continue == null ? '' : encodeURIComponent(_continue)) + '&fieldSelector=' + (fieldSelector == null ? '' : encodeURIComponent(fieldSelector)) + '&includeUninitialized=' + includeUninitialized + '&labelSelector=' + (labelSelector == null ? '' : encodeURIComponent(labelSelector)) + '&limit=' + limit + '&resourceVersion=' + (resourceVersion == null ? '' : encodeURIComponent(resourceVersion)) + '&watch=' + watch, {});
		}

		/**
		 * Creates a new Service. Service creation will trigger a new deployment. Use GetService, and check service.status to determine if the Service is ready.
		 * Post v1/{parent}/services
		 * @param {string} parent Required. The resource's parent. In Cloud Run, it may be one of the following: * `{project_id_or_number}` * `namespaces/{project_id_or_number}` * `namespaces/{project_id_or_number}/services` * `projects/{project_id_or_number}/locations/{region}` * `projects/{project_id_or_number}/regions/{region}`
		 * @param {string} dryRun Indicates that the server should validate the request and populate default values without persisting the request. Supported values: `all`
		 * @return {Service} Successful response
		 */
		Run_projects_locations_services_create(parent: string, dryRun: string | null | undefined, requestBody: Service): Observable<Service> {
			return this.http.post<Service>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/services&dryRun=' + (dryRun == null ? '' : encodeURIComponent(dryRun)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets the IAM Access Control policy currently in effect for the given Cloud Run service. This result does not include any inherited policies.
		 * Get v1/{resource}:getIamPolicy
		 * @param {string} resource REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
		 * @param {number} options_requestedPolicyVersion Optional. The maximum policy version that will be used to format the policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset. The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies).
		 * @return {Policy} Successful response
		 */
		Run_projects_locations_services_getIamPolicy(resource: string, options_requestedPolicyVersion: number | null | undefined): Observable<Policy> {
			return this.http.get<Policy>(this.baseUri + 'v1/' + (resource == null ? '' : encodeURIComponent(resource)) + ':getIamPolicy&options_requestedPolicyVersion=' + options_requestedPolicyVersion, {});
		}

		/**
		 * Sets the IAM Access control policy for the specified Service. Overwrites any existing policy.
		 * Post v1/{resource}:setIamPolicy
		 * @param {string} resource REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
		 * @return {Policy} Successful response
		 */
		Run_projects_locations_services_setIamPolicy(resource: string, requestBody: SetIamPolicyRequest): Observable<Policy> {
			return this.http.post<Policy>(this.baseUri + 'v1/' + (resource == null ? '' : encodeURIComponent(resource)) + ':setIamPolicy', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns permissions that a caller has on the specified Project. There are no permissions required for making this API call.
		 * Post v1/{resource}:testIamPermissions
		 * @param {string} resource REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
		 * @return {TestIamPermissionsResponse} Successful response
		 */
		Run_projects_locations_services_testIamPermissions(resource: string, requestBody: TestIamPermissionsRequest): Observable<TestIamPermissionsResponse> {
			return this.http.post<TestIamPermissionsResponse>(this.baseUri + 'v1/' + (resource == null ? '' : encodeURIComponent(resource)) + ':testIamPermissions', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

}

