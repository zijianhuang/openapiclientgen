import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** Identifies Data Fusion accelerators for an instance. */
	export interface Accelerator {

		/** The type of an accelator for a CDF instance. */
		acceleratorType?: AcceleratorAcceleratorType | null;

		/** The state of the accelerator. */
		state?: AcceleratorState | null;
	}

	/** Identifies Data Fusion accelerators for an instance. */
	export interface AcceleratorFormProperties {

		/** The type of an accelator for a CDF instance. */
		acceleratorType: FormControl<AcceleratorAcceleratorType | null | undefined>,

		/** The state of the accelerator. */
		state: FormControl<AcceleratorState | null | undefined>,
	}
	export function CreateAcceleratorFormGroup() {
		return new FormGroup<AcceleratorFormProperties>({
			acceleratorType: new FormControl<AcceleratorAcceleratorType | null | undefined>(undefined),
			state: new FormControl<AcceleratorState | null | undefined>(undefined),
		});

	}

	export enum AcceleratorAcceleratorType { ACCELERATOR_TYPE_UNSPECIFIED = 0, CDC = 1, HEALTHCARE = 2, CCAI_INSIGHTS = 3, CLOUDSEARCH = 4 }

	export enum AcceleratorState { STATE_UNSPECIFIED = 0, ENABLED = 1, DISABLED = 2, UNKNOWN = 3 }


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


	/** The crypto key configuration. This field is used by the Customer-managed encryption keys (CMEK) feature. */
	export interface CryptoKeyConfig {

		/** The name of the key which is used to encrypt/decrypt customer data. For key in Cloud KMS, the key should be in the format of `projects/locations/keyRings/cryptoKeys/*`. */
		keyReference?: string | null;
	}

	/** The crypto key configuration. This field is used by the Customer-managed encryption keys (CMEK) feature. */
	export interface CryptoKeyConfigFormProperties {

		/** The name of the key which is used to encrypt/decrypt customer data. For key in Cloud KMS, the key should be in the format of `projects/locations/keyRings/cryptoKeys/*`. */
		keyReference: FormControl<string | null | undefined>,
	}
	export function CreateCryptoKeyConfigFormGroup() {
		return new FormGroup<CryptoKeyConfigFormProperties>({
			keyReference: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Next tag: 7 */
	export interface DataResidencyAugmentedView {

		/** Cloud resource to Google owned production object mapping in the form of GURIs. The GURIs should be available in DG KB storage/cns tables. This is the preferred way of providing cloud resource mappings. For further details please read go/cloud-resource-monitoring_sig */
		crGopoGuris?: Array<string>;

		/** Cloud resource to Google owned production object mapping in the form of prefixes. These should be available in DG KB storage/cns tables. The entity type, which is the part of the string before the first colon in the GURI, must be completely specified in prefix. For details about GURI please read go/guri. For further details about the field please read go/cloud-resource-monitoring_sig. */
		crGopoPrefixes?: Array<string>;

		/** This message defines service-specific data that certain service teams must provide as part of the Data Residency Augmented View for a resource. Next ID: 2 */
		serviceData?: ServiceData;

		/** The list of project_id's of the tenant projects in the 'google.com' org which serve the Cloud Resource. See go/drz-mst-sig for more details. */
		tpIds?: Array<string>;
	}

	/** Next tag: 7 */
	export interface DataResidencyAugmentedViewFormProperties {
	}
	export function CreateDataResidencyAugmentedViewFormGroup() {
		return new FormGroup<DataResidencyAugmentedViewFormProperties>({
		});

	}


	/** This message defines service-specific data that certain service teams must provide as part of the Data Residency Augmented View for a resource. Next ID: 2 */
	export interface ServiceData {

		/** Persistent Disk service-specific Data. Contains information that may not be appropriate for the generic DRZ Augmented View. This currently includes LSV Colossus Roots and GCS Buckets. */
		pd?: PersistentDiskData;
	}

	/** This message defines service-specific data that certain service teams must provide as part of the Data Residency Augmented View for a resource. Next ID: 2 */
	export interface ServiceDataFormProperties {
	}
	export function CreateServiceDataFormGroup() {
		return new FormGroup<ServiceDataFormProperties>({
		});

	}


	/** Persistent Disk service-specific Data. Contains information that may not be appropriate for the generic DRZ Augmented View. This currently includes LSV Colossus Roots and GCS Buckets. */
	export interface PersistentDiskData {

		/** Path to Colossus root for an LSV. NOTE: Unlike `cr_ti_guris` and `cr_ti_prefixes`, the field `cfs_roots` below does not need to be a GUri or GUri prefix. It can simply be any valid CFS or CFS2 Path. The DRZ KR8 SIG has more details overall, but generally the `cfs_roots` provided here should be scoped to an individual Persistent Disk. An example for a PD Disk with a disk ID 3277719120423414466, follows: * `cr_ti_guris` could be ‘/cfs2/pj/pd-cloud-prod’ as this is a valid GUri present in the DG KB and contains enough information to perform location monitoring and scope ownership of the Production Object. * `cfs_roots` would be: ‘/cfs2/pj/pd-cloud-staging/lsv000001234@/ lsv/projects~773365403387~zones~2700~disks~3277719120423414466 ~bank-blue-careful-3526-lsv00054DB1B7254BA3/’ as this allows us to enumerate the files on CFS2 that belong to an individual Disk. */
		cfsRoots?: Array<string>;

		/** The GCS Buckets that back this snapshot or image. This is required as `cr_ti_prefixes` and `cr_ti_guris` only accept TI resources. This should be the globally unique bucket name. */
		gcsBucketNames?: Array<string>;
	}

	/** Persistent Disk service-specific Data. Contains information that may not be appropriate for the generic DRZ Augmented View. This currently includes LSV Colossus Roots and GCS Buckets. */
	export interface PersistentDiskDataFormProperties {
	}
	export function CreatePersistentDiskDataFormGroup() {
		return new FormGroup<PersistentDiskDataFormProperties>({
		});

	}


	/** DNS peering configuration. These configurations are used to create DNS peering with the customer Cloud DNS. */
	export interface DnsPeering {

		/** Optional. Optional description of the dns zone. */
		description?: string | null;

		/** Required. The dns name suffix of the zone. */
		domain?: string | null;

		/** Required. The resource name of the dns peering zone. Format: projects/{project}/locations/{location}/instances/{instance}/dnsPeerings/{dns_peering} */
		name?: string | null;

		/** Optional. Optional target network to which dns peering should happen. */
		targetNetwork?: string | null;

		/** Optional. Optional target project to which dns peering should happen. */
		targetProject?: string | null;
	}

	/** DNS peering configuration. These configurations are used to create DNS peering with the customer Cloud DNS. */
	export interface DnsPeeringFormProperties {

		/** Optional. Optional description of the dns zone. */
		description: FormControl<string | null | undefined>,

		/** Required. The dns name suffix of the zone. */
		domain: FormControl<string | null | undefined>,

		/** Required. The resource name of the dns peering zone. Format: projects/{project}/locations/{location}/instances/{instance}/dnsPeerings/{dns_peering} */
		name: FormControl<string | null | undefined>,

		/** Optional. Optional target network to which dns peering should happen. */
		targetNetwork: FormControl<string | null | undefined>,

		/** Optional. Optional target project to which dns peering should happen. */
		targetProject: FormControl<string | null | undefined>,
	}
	export function CreateDnsPeeringFormGroup() {
		return new FormGroup<DnsPeeringFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			domain: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			targetNetwork: new FormControl<string | null | undefined>(undefined),
			targetProject: new FormControl<string | null | undefined>(undefined),
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


	/** Confirguration of PubSubEventWriter. */
	export interface EventPublishConfig {

		/** Required. Option to enable Event Publishing. */
		enabled?: boolean | null;

		/** Required. The resource name of the Pub/Sub topic. Format: projects/{project_id}/topics/{topic_id} */
		topic?: string | null;
	}

	/** Confirguration of PubSubEventWriter. */
	export interface EventPublishConfigFormProperties {

		/** Required. Option to enable Event Publishing. */
		enabled: FormControl<boolean | null | undefined>,

		/** Required. The resource name of the Pub/Sub topic. Format: projects/{project_id}/topics/{topic_id} */
		topic: FormControl<string | null | undefined>,
	}
	export function CreateEventPublishConfigFormGroup() {
		return new FormGroup<EventPublishConfigFormProperties>({
			enabled: new FormControl<boolean | null | undefined>(undefined),
			topic: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents a Data Fusion instance. */
	export interface Instance {

		/** Output only. List of accelerators enabled for this CDF instance. */
		accelerators?: Array<Accelerator>;

		/** Output only. Endpoint on which the REST APIs is accessible. */
		apiEndpoint?: string | null;

		/** Output only. Available versions that the instance can be upgraded to using UpdateInstanceRequest. */
		availableVersion?: Array<Version>;

		/** Output only. The time the instance was created. */
		createTime?: string | null;

		/** The crypto key configuration. This field is used by the Customer-managed encryption keys (CMEK) feature. */
		cryptoKeyConfig?: CryptoKeyConfig;

		/** Optional. Reserved for future use. */
		dataplexDataLineageIntegrationEnabled?: boolean | null;

		/** User-managed service account to set on Dataproc when Cloud Data Fusion creates Dataproc to run data processing pipelines. This allows users to have fine-grained access control on Dataproc's accesses to cloud resources. */
		dataprocServiceAccount?: string | null;

		/** A description of this instance. */
		description?: string | null;

		/** Output only. If the instance state is DISABLED, the reason for disabling the instance. */
		disabledReason?: Array<string>;

		/** Display name for an instance. */
		displayName?: string | null;

		/** Option to enable granular role-based access control. */
		enableRbac?: boolean | null;

		/** Option to enable Stackdriver Logging. */
		enableStackdriverLogging?: boolean | null;

		/** Option to enable Stackdriver Monitoring. */
		enableStackdriverMonitoring?: boolean | null;

		/** Option to enable granular zone separation. */
		enableZoneSeparation?: boolean | null;

		/** Confirguration of PubSubEventWriter. */
		eventPublishConfig?: EventPublishConfig;

		/** Output only. Cloud Storage bucket generated by Data Fusion in the customer project. */
		gcsBucket?: string | null;

		/** The resource labels for instance to use to annotate any related underlying resources such as Compute Engine VMs. The character '=' is not allowed to be used within the labels. */
		labels?: {[id: string]: string };

		/** Output only. The name of this instance is in the form of projects/{project}/locations/{location}/instances/{instance}. */
		name?: string | null;

		/** Network configuration for a Data Fusion instance. These configurations are used for peering with the customer network. Configurations are optional when a public Data Fusion instance is to be created. However, providing these configurations allows several benefits, such as reduced network latency while accessing the customer resources from managed Data Fusion instance nodes, as well as access to the customer on-prem resources. */
		networkConfig?: NetworkConfig;

		/** Map of additional options used to configure the behavior of Data Fusion instance. */
		options?: {[id: string]: string };

		/** Output only. P4 service account for the customer project. */
		p4ServiceAccount?: string | null;

		/** Optional. Current patch revision of the Data Fusion. */
		patchRevision?: string | null;

		/** Specifies whether the Data Fusion instance should be private. If set to true, all Data Fusion nodes will have private IP addresses and will not be able to access the public internet. */
		privateInstance?: boolean | null;

		/** Output only. Reserved for future use. */
		satisfiesPzs?: boolean | null;

		/** Output only. Deprecated. Use tenant_project_id instead to extract the tenant project ID. */
		serviceAccount?: string | null;

		/** Output only. Endpoint on which the Data Fusion UI is accessible. */
		serviceEndpoint?: string | null;

		/** Output only. The current state of this Data Fusion instance. */
		state?: InstanceState | null;

		/** Output only. Additional information about the current state of this Data Fusion instance if available. */
		stateMessage?: string | null;

		/** Output only. The name of the tenant project. */
		tenantProjectId?: string | null;

		/** Required. Instance type. */
		type?: InstanceType | null;

		/** Output only. The time the instance was last updated. */
		updateTime?: string | null;

		/** Current version of the Data Fusion. Only specifiable in Update. */
		version?: string | null;

		/** Output only. Endpoint on which the Data Fusion UI is accessible to third-party users */
		workforceIdentityServiceEndpoint?: string | null;

		/** Name of the zone in which the Data Fusion instance will be created. Only DEVELOPER instances use this field. */
		zone?: string | null;
	}

	/** Represents a Data Fusion instance. */
	export interface InstanceFormProperties {

		/** Output only. Endpoint on which the REST APIs is accessible. */
		apiEndpoint: FormControl<string | null | undefined>,

		/** Output only. The time the instance was created. */
		createTime: FormControl<string | null | undefined>,

		/** Optional. Reserved for future use. */
		dataplexDataLineageIntegrationEnabled: FormControl<boolean | null | undefined>,

		/** User-managed service account to set on Dataproc when Cloud Data Fusion creates Dataproc to run data processing pipelines. This allows users to have fine-grained access control on Dataproc's accesses to cloud resources. */
		dataprocServiceAccount: FormControl<string | null | undefined>,

		/** A description of this instance. */
		description: FormControl<string | null | undefined>,

		/** Display name for an instance. */
		displayName: FormControl<string | null | undefined>,

		/** Option to enable granular role-based access control. */
		enableRbac: FormControl<boolean | null | undefined>,

		/** Option to enable Stackdriver Logging. */
		enableStackdriverLogging: FormControl<boolean | null | undefined>,

		/** Option to enable Stackdriver Monitoring. */
		enableStackdriverMonitoring: FormControl<boolean | null | undefined>,

		/** Option to enable granular zone separation. */
		enableZoneSeparation: FormControl<boolean | null | undefined>,

		/** Output only. Cloud Storage bucket generated by Data Fusion in the customer project. */
		gcsBucket: FormControl<string | null | undefined>,

		/** The resource labels for instance to use to annotate any related underlying resources such as Compute Engine VMs. The character '=' is not allowed to be used within the labels. */
		labels: FormControl<{[id: string]: string } | null | undefined>,

		/** Output only. The name of this instance is in the form of projects/{project}/locations/{location}/instances/{instance}. */
		name: FormControl<string | null | undefined>,

		/** Map of additional options used to configure the behavior of Data Fusion instance. */
		options: FormControl<{[id: string]: string } | null | undefined>,

		/** Output only. P4 service account for the customer project. */
		p4ServiceAccount: FormControl<string | null | undefined>,

		/** Optional. Current patch revision of the Data Fusion. */
		patchRevision: FormControl<string | null | undefined>,

		/** Specifies whether the Data Fusion instance should be private. If set to true, all Data Fusion nodes will have private IP addresses and will not be able to access the public internet. */
		privateInstance: FormControl<boolean | null | undefined>,

		/** Output only. Reserved for future use. */
		satisfiesPzs: FormControl<boolean | null | undefined>,

		/** Output only. Deprecated. Use tenant_project_id instead to extract the tenant project ID. */
		serviceAccount: FormControl<string | null | undefined>,

		/** Output only. Endpoint on which the Data Fusion UI is accessible. */
		serviceEndpoint: FormControl<string | null | undefined>,

		/** Output only. The current state of this Data Fusion instance. */
		state: FormControl<InstanceState | null | undefined>,

		/** Output only. Additional information about the current state of this Data Fusion instance if available. */
		stateMessage: FormControl<string | null | undefined>,

		/** Output only. The name of the tenant project. */
		tenantProjectId: FormControl<string | null | undefined>,

		/** Required. Instance type. */
		type: FormControl<InstanceType | null | undefined>,

		/** Output only. The time the instance was last updated. */
		updateTime: FormControl<string | null | undefined>,

		/** Current version of the Data Fusion. Only specifiable in Update. */
		version: FormControl<string | null | undefined>,

		/** Output only. Endpoint on which the Data Fusion UI is accessible to third-party users */
		workforceIdentityServiceEndpoint: FormControl<string | null | undefined>,

		/** Name of the zone in which the Data Fusion instance will be created. Only DEVELOPER instances use this field. */
		zone: FormControl<string | null | undefined>,
	}
	export function CreateInstanceFormGroup() {
		return new FormGroup<InstanceFormProperties>({
			apiEndpoint: new FormControl<string | null | undefined>(undefined),
			createTime: new FormControl<string | null | undefined>(undefined),
			dataplexDataLineageIntegrationEnabled: new FormControl<boolean | null | undefined>(undefined),
			dataprocServiceAccount: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			displayName: new FormControl<string | null | undefined>(undefined),
			enableRbac: new FormControl<boolean | null | undefined>(undefined),
			enableStackdriverLogging: new FormControl<boolean | null | undefined>(undefined),
			enableStackdriverMonitoring: new FormControl<boolean | null | undefined>(undefined),
			enableZoneSeparation: new FormControl<boolean | null | undefined>(undefined),
			gcsBucket: new FormControl<string | null | undefined>(undefined),
			labels: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			options: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			p4ServiceAccount: new FormControl<string | null | undefined>(undefined),
			patchRevision: new FormControl<string | null | undefined>(undefined),
			privateInstance: new FormControl<boolean | null | undefined>(undefined),
			satisfiesPzs: new FormControl<boolean | null | undefined>(undefined),
			serviceAccount: new FormControl<string | null | undefined>(undefined),
			serviceEndpoint: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<InstanceState | null | undefined>(undefined),
			stateMessage: new FormControl<string | null | undefined>(undefined),
			tenantProjectId: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<InstanceType | null | undefined>(undefined),
			updateTime: new FormControl<string | null | undefined>(undefined),
			version: new FormControl<string | null | undefined>(undefined),
			workforceIdentityServiceEndpoint: new FormControl<string | null | undefined>(undefined),
			zone: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The Data Fusion version. This proto message stores information about certain Data Fusion version, which is used for Data Fusion version upgrade. */
	export interface Version {

		/** Represents a list of available feature names for a given version. */
		availableFeatures?: Array<string>;

		/** Whether this is currently the default version for Cloud Data Fusion */
		defaultVersion?: boolean | null;

		/** Type represents the release availability of the version */
		type?: VersionType | null;

		/** The version number of the Data Fusion instance, such as '6.0.1.0'. */
		versionNumber?: string | null;
	}

	/** The Data Fusion version. This proto message stores information about certain Data Fusion version, which is used for Data Fusion version upgrade. */
	export interface VersionFormProperties {

		/** Whether this is currently the default version for Cloud Data Fusion */
		defaultVersion: FormControl<boolean | null | undefined>,

		/** Type represents the release availability of the version */
		type: FormControl<VersionType | null | undefined>,

		/** The version number of the Data Fusion instance, such as '6.0.1.0'. */
		versionNumber: FormControl<string | null | undefined>,
	}
	export function CreateVersionFormGroup() {
		return new FormGroup<VersionFormProperties>({
			defaultVersion: new FormControl<boolean | null | undefined>(undefined),
			type: new FormControl<VersionType | null | undefined>(undefined),
			versionNumber: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum VersionType { TYPE_UNSPECIFIED = 0, TYPE_PREVIEW = 1, TYPE_GENERAL_AVAILABILITY = 2 }


	/** Network configuration for a Data Fusion instance. These configurations are used for peering with the customer network. Configurations are optional when a public Data Fusion instance is to be created. However, providing these configurations allows several benefits, such as reduced network latency while accessing the customer resources from managed Data Fusion instance nodes, as well as access to the customer on-prem resources. */
	export interface NetworkConfig {

		/** Optional. Type of connection for establishing private IP connectivity between the Data Fusion customer project VPC and the corresponding tenant project from a predefined list of available connection modes. If this field is unspecified for a private instance, VPC peering is used. */
		connectionType?: NetworkConfigConnectionType | null;

		/** Optional. The IP range in CIDR notation to use for the managed Data Fusion instance nodes. This range must not overlap with any other ranges used in the Data Fusion instance network. This is required only when using connection type VPC_PEERING. Format: a.b.c.d/22 Example: 192.168.0.0/22 */
		ipAllocation?: string | null;

		/** Optional. Name of the network in the customer project with which the Tenant Project will be peered for executing pipelines. This is required only when using connection type VPC peering. In case of shared VPC where the network resides in another host project the network should specified in the form of projects/{host-project-id}/global/networks/{network}. This is only required for connectivity type VPC_PEERING. */
		network?: string | null;

		/** Configuration for using Private Service Connect to establish connectivity between the Data Fusion consumer project and the corresponding tenant project. */
		privateServiceConnectConfig?: PrivateServiceConnectConfig;
	}

	/** Network configuration for a Data Fusion instance. These configurations are used for peering with the customer network. Configurations are optional when a public Data Fusion instance is to be created. However, providing these configurations allows several benefits, such as reduced network latency while accessing the customer resources from managed Data Fusion instance nodes, as well as access to the customer on-prem resources. */
	export interface NetworkConfigFormProperties {

		/** Optional. Type of connection for establishing private IP connectivity between the Data Fusion customer project VPC and the corresponding tenant project from a predefined list of available connection modes. If this field is unspecified for a private instance, VPC peering is used. */
		connectionType: FormControl<NetworkConfigConnectionType | null | undefined>,

		/** Optional. The IP range in CIDR notation to use for the managed Data Fusion instance nodes. This range must not overlap with any other ranges used in the Data Fusion instance network. This is required only when using connection type VPC_PEERING. Format: a.b.c.d/22 Example: 192.168.0.0/22 */
		ipAllocation: FormControl<string | null | undefined>,

		/** Optional. Name of the network in the customer project with which the Tenant Project will be peered for executing pipelines. This is required only when using connection type VPC peering. In case of shared VPC where the network resides in another host project the network should specified in the form of projects/{host-project-id}/global/networks/{network}. This is only required for connectivity type VPC_PEERING. */
		network: FormControl<string | null | undefined>,
	}
	export function CreateNetworkConfigFormGroup() {
		return new FormGroup<NetworkConfigFormProperties>({
			connectionType: new FormControl<NetworkConfigConnectionType | null | undefined>(undefined),
			ipAllocation: new FormControl<string | null | undefined>(undefined),
			network: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum NetworkConfigConnectionType { CONNECTION_TYPE_UNSPECIFIED = 0, VPC_PEERING = 1, PRIVATE_SERVICE_CONNECT_INTERFACES = 2 }


	/** Configuration for using Private Service Connect to establish connectivity between the Data Fusion consumer project and the corresponding tenant project. */
	export interface PrivateServiceConnectConfig {

		/** Output only. The CIDR block to which the CDF instance can't route traffic to in the consumer project VPC. The size of this block is /25. The format of this field is governed by RFC 4632. Example: 240.0.0.0/25 */
		effectiveUnreachableCidrBlock?: string | null;

		/** Required. The reference to the network attachment used to establish private connectivity. It will be of the form projects/{project-id}/regions/{region}/networkAttachments/{network-attachment-id}. */
		networkAttachment?: string | null;

		/** Optional. Input only. The CIDR block to which the CDF instance can't route traffic to in the consumer project VPC. The size of this block should be at least /25. This range should not overlap with the primary address range of any subnetwork used by the network attachment. This range can be used for other purposes in the consumer VPC as long as there is no requirement for CDF to reach destinations using these addresses. If this value is not provided, the server chooses a non RFC 1918 address range. The format of this field is governed by RFC 4632. Example: 192.168.0.0/25 */
		unreachableCidrBlock?: string | null;
	}

	/** Configuration for using Private Service Connect to establish connectivity between the Data Fusion consumer project and the corresponding tenant project. */
	export interface PrivateServiceConnectConfigFormProperties {

		/** Output only. The CIDR block to which the CDF instance can't route traffic to in the consumer project VPC. The size of this block is /25. The format of this field is governed by RFC 4632. Example: 240.0.0.0/25 */
		effectiveUnreachableCidrBlock: FormControl<string | null | undefined>,

		/** Required. The reference to the network attachment used to establish private connectivity. It will be of the form projects/{project-id}/regions/{region}/networkAttachments/{network-attachment-id}. */
		networkAttachment: FormControl<string | null | undefined>,

		/** Optional. Input only. The CIDR block to which the CDF instance can't route traffic to in the consumer project VPC. The size of this block should be at least /25. This range should not overlap with the primary address range of any subnetwork used by the network attachment. This range can be used for other purposes in the consumer VPC as long as there is no requirement for CDF to reach destinations using these addresses. If this value is not provided, the server chooses a non RFC 1918 address range. The format of this field is governed by RFC 4632. Example: 192.168.0.0/25 */
		unreachableCidrBlock: FormControl<string | null | undefined>,
	}
	export function CreatePrivateServiceConnectConfigFormGroup() {
		return new FormGroup<PrivateServiceConnectConfigFormProperties>({
			effectiveUnreachableCidrBlock: new FormControl<string | null | undefined>(undefined),
			networkAttachment: new FormControl<string | null | undefined>(undefined),
			unreachableCidrBlock: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum InstanceState { STATE_UNSPECIFIED = 0, CREATING = 1, ACTIVE = 2, FAILED = 3, DELETING = 4, UPGRADING = 5, RESTARTING = 6, UPDATING = 7, AUTO_UPDATING = 8, AUTO_UPGRADING = 9, DISABLED = 10 }

	export enum InstanceType { TYPE_UNSPECIFIED = 0, BASIC = 1, ENTERPRISE = 2, DEVELOPER = 3 }


	/** Response message for the list available versions request. */
	export interface ListAvailableVersionsResponse {

		/** Represents a list of versions that are supported. */
		availableVersions?: Array<Version>;

		/** Token to retrieve the next page of results or empty if there are no more results in the list. */
		nextPageToken?: string | null;
	}

	/** Response message for the list available versions request. */
	export interface ListAvailableVersionsResponseFormProperties {

		/** Token to retrieve the next page of results or empty if there are no more results in the list. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListAvailableVersionsResponseFormGroup() {
		return new FormGroup<ListAvailableVersionsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response message for list DNS peerings. */
	export interface ListDnsPeeringsResponse {

		/** List of dns peering. */
		dnsPeerings?: Array<DnsPeering>;

		/** A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
		nextPageToken?: string | null;
	}

	/** Response message for list DNS peerings. */
	export interface ListDnsPeeringsResponseFormProperties {

		/** A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListDnsPeeringsResponseFormGroup() {
		return new FormGroup<ListDnsPeeringsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response message for the list instance request. */
	export interface ListInstancesResponse {

		/** Represents a list of Data Fusion instances. */
		instances?: Array<Instance>;

		/** Token to retrieve the next page of results or empty if there are no more results in the list. */
		nextPageToken?: string | null;

		/** Locations that could not be reached. */
		unreachable?: Array<string>;
	}

	/** Response message for the list instance request. */
	export interface ListInstancesResponseFormProperties {

		/** Token to retrieve the next page of results or empty if there are no more results in the list. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListInstancesResponseFormGroup() {
		return new FormGroup<ListInstancesResponseFormProperties>({
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


	/** Represents the metadata of a long-running operation. */
	export interface OperationMetadata {

		/** Map to hold any additional status info for the operation If there is an accelerator being enabled/disabled/deleted, this will be populated with accelerator name as key and status as ENABLING, DISABLING or DELETING */
		additionalStatus?: {[id: string]: string };

		/** API version used to start the operation. */
		apiVersion?: string | null;

		/** The time the operation was created. */
		createTime?: string | null;

		/** The time the operation finished running. */
		endTime?: string | null;

		/** Identifies whether the user has requested cancellation of the operation. Operations that have successfully been cancelled have Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`. */
		requestedCancellation?: boolean | null;

		/** Human-readable status of the operation if any. */
		statusDetail?: string | null;

		/** Server-defined resource path for the target of the operation. */
		target?: string | null;

		/** Name of the verb executed by the operation. */
		verb?: string | null;
	}

	/** Represents the metadata of a long-running operation. */
	export interface OperationMetadataFormProperties {

		/** Map to hold any additional status info for the operation If there is an accelerator being enabled/disabled/deleted, this will be populated with accelerator name as key and status as ENABLING, DISABLING or DELETING */
		additionalStatus: FormControl<{[id: string]: string } | null | undefined>,

		/** API version used to start the operation. */
		apiVersion: FormControl<string | null | undefined>,

		/** The time the operation was created. */
		createTime: FormControl<string | null | undefined>,

		/** The time the operation finished running. */
		endTime: FormControl<string | null | undefined>,

		/** Identifies whether the user has requested cancellation of the operation. Operations that have successfully been cancelled have Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`. */
		requestedCancellation: FormControl<boolean | null | undefined>,

		/** Human-readable status of the operation if any. */
		statusDetail: FormControl<string | null | undefined>,

		/** Server-defined resource path for the target of the operation. */
		target: FormControl<string | null | undefined>,

		/** Name of the verb executed by the operation. */
		verb: FormControl<string | null | undefined>,
	}
	export function CreateOperationMetadataFormGroup() {
		return new FormGroup<OperationMetadataFormProperties>({
			additionalStatus: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			apiVersion: new FormControl<string | null | undefined>(undefined),
			createTime: new FormControl<string | null | undefined>(undefined),
			endTime: new FormControl<string | null | undefined>(undefined),
			requestedCancellation: new FormControl<boolean | null | undefined>(undefined),
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


	/** Request message for restarting a Data Fusion instance. */
	export interface RestartInstanceRequest {
	}

	/** Request message for restarting a Data Fusion instance. */
	export interface RestartInstanceRequestFormProperties {
	}
	export function CreateRestartInstanceRequestFormGroup() {
		return new FormGroup<RestartInstanceRequestFormProperties>({
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
		 * Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
		 * Delete v1/{name}
		 * @param {string} name The name of the operation resource to be deleted.
		 * @return {Empty} Successful response
		 */
		Datafusion_projects_locations_operations_delete(name: string): Observable<Empty> {
			return this.http.delete<Empty>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)), {});
		}

		/**
		 * Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
		 * Get v1/{name}
		 * @param {string} name The name of the operation resource.
		 * @return {Operation} Successful response
		 */
		Datafusion_projects_locations_operations_get(name: string): Observable<Operation> {
			return this.http.get<Operation>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)), {});
		}

		/**
		 * Updates a single Data Fusion instance.
		 * Patch v1/{name}
		 * @param {string} name Output only. The name of this instance is in the form of projects/{project}/locations/{location}/instances/{instance}.
		 * @param {string} updateMask Field mask is used to specify the fields that the update will overwrite in an instance resource. The fields specified in the update_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask. If the user does not provide a mask, the label field will be overwritten.
		 * @return {Operation} Successful response
		 */
		Datafusion_projects_locations_instances_patch(name: string, updateMask: string | null | undefined, requestBody: Instance): Observable<Operation> {
			return this.http.patch<Operation>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + '&updateMask=' + (updateMask == null ? '' : encodeURIComponent(updateMask)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists information about the supported locations for this service.
		 * Get v1/{name}/locations
		 * @param {string} name The resource that owns the locations collection, if applicable.
		 * @param {string} filter A filter to narrow down results to a preferred subset. The filtering language accepts strings like `"displayName=tokyo"`, and is documented in more detail in [AIP-160](https://google.aip.dev/160).
		 * @param {boolean} includeUnrevealedLocations If true, the returned list will include locations which are not yet revealed.
		 * @param {number} pageSize The maximum number of results to return. If not set, the service selects a default.
		 * @param {string} pageToken A page token received from the `next_page_token` field in the response. Send that page token to receive the subsequent page.
		 * @return {ListLocationsResponse} Successful response
		 */
		Datafusion_projects_locations_list(name: string, filter: string | null | undefined, includeUnrevealedLocations: boolean | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListLocationsResponse> {
			return this.http.get<ListLocationsResponse>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + '/locations&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&includeUnrevealedLocations=' + includeUnrevealedLocations + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
		 * Get v1/{name}/operations
		 * @param {string} name The name of the operation's parent resource.
		 * @param {string} filter The standard list filter.
		 * @param {number} pageSize The standard list page size.
		 * @param {string} pageToken The standard list page token.
		 * @return {ListOperationsResponse} Successful response
		 */
		Datafusion_projects_locations_operations_list(name: string, filter: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListOperationsResponse> {
			return this.http.get<ListOperationsResponse>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + '/operations&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
		 * Post v1/{name}:cancel
		 * @param {string} name The name of the operation resource to be cancelled.
		 * @return {Empty} Successful response
		 */
		Datafusion_projects_locations_operations_cancel(name: string, requestBody: CancelOperationRequest): Observable<Empty> {
			return this.http.post<Empty>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + ':cancel', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Restart a single Data Fusion instance. At the end of an operation instance is fully restarted.
		 * Post v1/{name}:restart
		 * @param {string} name Required. Name of the Data Fusion instance which need to be restarted in the form of projects/{project}/locations/{location}/instances/{instance}
		 * @return {Operation} Successful response
		 */
		Datafusion_projects_locations_instances_restart(name: string, requestBody: RestartInstanceRequest): Observable<Operation> {
			return this.http.post<Operation>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + ':restart', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists DNS peerings for a given resource.
		 * Get v1/{parent}/dnsPeerings
		 * @param {string} parent Required. The parent, which owns this collection of dns peerings. Format: projects/{project}/locations/{location}/instances/{instance}
		 * @param {number} pageSize The maximum number of dns peerings to return. The service may return fewer than this value. If unspecified, at most 50 dns peerings will be returned. The maximum value is 200; values above 200 will be coerced to 200.
		 * @param {string} pageToken A page token, received from a previous `ListDnsPeerings` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListDnsPeerings` must match the call that provided the page token.
		 * @return {ListDnsPeeringsResponse} Successful response
		 */
		Datafusion_projects_locations_instances_dnsPeerings_list(parent: string, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListDnsPeeringsResponse> {
			return this.http.get<ListDnsPeeringsResponse>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/dnsPeerings&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Creates DNS peering on the given resource.
		 * Post v1/{parent}/dnsPeerings
		 * @param {string} parent Required. The resource on which DNS peering will be created.
		 * @param {string} dnsPeeringId Required. The name of the peering to create.
		 * @return {DnsPeering} Successful response
		 */
		Datafusion_projects_locations_instances_dnsPeerings_create(parent: string, dnsPeeringId: string | null | undefined, requestBody: DnsPeering): Observable<DnsPeering> {
			return this.http.post<DnsPeering>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/dnsPeerings&dnsPeeringId=' + (dnsPeeringId == null ? '' : encodeURIComponent(dnsPeeringId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists Data Fusion instances in the specified project and location.
		 * Get v1/{parent}/instances
		 * @param {string} parent Required. The project and location for which to retrieve instance information in the format projects/{project}/locations/{location}. If the location is specified as '-' (wildcard), then all regions available to the project are queried, and the results are aggregated.
		 * @param {string} filter List filter.
		 * @param {string} orderBy Sort results. Supported values are "name", "name desc", or "" (unsorted).
		 * @param {number} pageSize The maximum number of items to return.
		 * @param {string} pageToken The next_page_token value to use if there are additional results to retrieve for this list request.
		 * @return {ListInstancesResponse} Successful response
		 */
		Datafusion_projects_locations_instances_list(parent: string, filter: string | null | undefined, orderBy: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListInstancesResponse> {
			return this.http.get<ListInstancesResponse>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/instances&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&orderBy=' + (orderBy == null ? '' : encodeURIComponent(orderBy)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Creates a new Data Fusion instance in the specified project and location.
		 * Post v1/{parent}/instances
		 * @param {string} parent Required. The instance's project and location in the format projects/{project}/locations/{location}.
		 * @param {string} instanceId Required. The name of the instance to create.
		 * @return {Operation} Successful response
		 */
		Datafusion_projects_locations_instances_create(parent: string, instanceId: string | null | undefined, requestBody: Instance): Observable<Operation> {
			return this.http.post<Operation>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/instances&instanceId=' + (instanceId == null ? '' : encodeURIComponent(instanceId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists possible versions for Data Fusion instances in the specified project and location.
		 * Get v1/{parent}/versions
		 * @param {string} parent Required. The project and location for which to retrieve instance information in the format projects/{project}/locations/{location}.
		 * @param {boolean} latestPatchOnly Whether or not to return the latest patch of every available minor version. If true, only the latest patch will be returned. Ex. if allowed versions is [6.1.1, 6.1.2, 6.2.0] then response will be [6.1.2, 6.2.0]
		 * @param {number} pageSize The maximum number of items to return.
		 * @param {string} pageToken The next_page_token value to use if there are additional results to retrieve for this list request.
		 * @return {ListAvailableVersionsResponse} Successful response
		 */
		Datafusion_projects_locations_versions_list(parent: string, latestPatchOnly: boolean | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListAvailableVersionsResponse> {
			return this.http.get<ListAvailableVersionsResponse>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/versions&latestPatchOnly=' + latestPatchOnly + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
		 * Get v1/{resource}:getIamPolicy
		 * @param {string} resource REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
		 * @param {number} options_requestedPolicyVersion Optional. The maximum policy version that will be used to format the policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset. The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies).
		 * @return {Policy} Successful response
		 */
		Datafusion_projects_locations_instances_getIamPolicy(resource: string, options_requestedPolicyVersion: number | null | undefined): Observable<Policy> {
			return this.http.get<Policy>(this.baseUri + 'v1/' + (resource == null ? '' : encodeURIComponent(resource)) + ':getIamPolicy&options_requestedPolicyVersion=' + options_requestedPolicyVersion, {});
		}

		/**
		 * Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
		 * Post v1/{resource}:setIamPolicy
		 * @param {string} resource REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
		 * @return {Policy} Successful response
		 */
		Datafusion_projects_locations_instances_setIamPolicy(resource: string, requestBody: SetIamPolicyRequest): Observable<Policy> {
			return this.http.post<Policy>(this.baseUri + 'v1/' + (resource == null ? '' : encodeURIComponent(resource)) + ':setIamPolicy', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
		 * Post v1/{resource}:testIamPermissions
		 * @param {string} resource REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
		 * @return {TestIamPermissionsResponse} Successful response
		 */
		Datafusion_projects_locations_instances_testIamPermissions(resource: string, requestBody: TestIamPermissionsRequest): Observable<TestIamPermissionsResponse> {
			return this.http.post<TestIamPermissionsResponse>(this.baseUri + 'v1/' + (resource == null ? '' : encodeURIComponent(resource)) + ':testIamPermissions', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

}

