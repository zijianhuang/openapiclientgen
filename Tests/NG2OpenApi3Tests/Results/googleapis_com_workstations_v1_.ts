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


	/** A Docker container. */
	export interface Container {

		/** Optional. Arguments passed to the entrypoint. */
		args?: Array<string>;

		/** Optional. If set, overrides the default ENTRYPOINT specified by the image. */
		command?: Array<string>;

		/** Optional. Environment variables passed to the container's entrypoint. */
		env?: {[id: string]: string };

		/** Optional. A Docker container image that defines a custom environment. Cloud Workstations provides a number of [preconfigured images](https://cloud.google.com/workstations/docs/preconfigured-base-images), but you can create your own [custom container images](https://cloud.google.com/workstations/docs/custom-container-images). If using a private image, the `host.gceInstance.serviceAccount` field must be specified in the workstation configuration. If using a custom container image, the service account must have [Artifact Registry Reader](https://cloud.google.com/artifact-registry/docs/access-control#roles) permission to pull the specified image. Otherwise, the image must be publicly accessible. */
		image?: string | null;

		/** Optional. If set, overrides the USER specified in the image with the given uid. */
		runAsUser?: number | null;

		/** Optional. If set, overrides the default DIR specified by the image. */
		workingDir?: string | null;
	}

	/** A Docker container. */
	export interface ContainerFormProperties {

		/** Optional. Environment variables passed to the container's entrypoint. */
		env: FormControl<{[id: string]: string } | null | undefined>,

		/** Optional. A Docker container image that defines a custom environment. Cloud Workstations provides a number of [preconfigured images](https://cloud.google.com/workstations/docs/preconfigured-base-images), but you can create your own [custom container images](https://cloud.google.com/workstations/docs/custom-container-images). If using a private image, the `host.gceInstance.serviceAccount` field must be specified in the workstation configuration. If using a custom container image, the service account must have [Artifact Registry Reader](https://cloud.google.com/artifact-registry/docs/access-control#roles) permission to pull the specified image. Otherwise, the image must be publicly accessible. */
		image: FormControl<string | null | undefined>,

		/** Optional. If set, overrides the USER specified in the image with the given uid. */
		runAsUser: FormControl<number | null | undefined>,

		/** Optional. If set, overrides the default DIR specified by the image. */
		workingDir: FormControl<string | null | undefined>,
	}
	export function CreateContainerFormGroup() {
		return new FormGroup<ContainerFormProperties>({
			env: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			image: new FormControl<string | null | undefined>(undefined),
			runAsUser: new FormControl<number | null | undefined>(undefined),
			workingDir: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A customer-managed encryption key (CMEK) for the Compute Engine resources of the associated workstation configuration. Specify the name of your Cloud KMS encryption key and the default service account. We recommend that you use a separate service account and follow [Cloud KMS best practices](https://cloud.google.com/kms/docs/separation-of-duties). */
	export interface CustomerEncryptionKey {

		/** Immutable. The name of the Google Cloud KMS encryption key. For example, `"projects/PROJECT_ID/locations/REGION/keyRings/KEY_RING/cryptoKeys/KEY_NAME"`. The key must be in the same region as the workstation configuration. */
		kmsKey?: string | null;

		/** Immutable. The service account to use with the specified KMS key. We recommend that you use a separate service account and follow KMS best practices. For more information, see [Separation of duties](https://cloud.google.com/kms/docs/separation-of-duties) and `gcloud kms keys add-iam-policy-binding` [`--member`](https://cloud.google.com/sdk/gcloud/reference/kms/keys/add-iam-policy-binding#--member). */
		kmsKeyServiceAccount?: string | null;
	}

	/** A customer-managed encryption key (CMEK) for the Compute Engine resources of the associated workstation configuration. Specify the name of your Cloud KMS encryption key and the default service account. We recommend that you use a separate service account and follow [Cloud KMS best practices](https://cloud.google.com/kms/docs/separation-of-duties). */
	export interface CustomerEncryptionKeyFormProperties {

		/** Immutable. The name of the Google Cloud KMS encryption key. For example, `"projects/PROJECT_ID/locations/REGION/keyRings/KEY_RING/cryptoKeys/KEY_NAME"`. The key must be in the same region as the workstation configuration. */
		kmsKey: FormControl<string | null | undefined>,

		/** Immutable. The service account to use with the specified KMS key. We recommend that you use a separate service account and follow KMS best practices. For more information, see [Separation of duties](https://cloud.google.com/kms/docs/separation-of-duties) and `gcloud kms keys add-iam-policy-binding` [`--member`](https://cloud.google.com/sdk/gcloud/reference/kms/keys/add-iam-policy-binding#--member). */
		kmsKeyServiceAccount: FormControl<string | null | undefined>,
	}
	export function CreateCustomerEncryptionKeyFormGroup() {
		return new FormGroup<CustomerEncryptionKeyFormProperties>({
			kmsKey: new FormControl<string | null | undefined>(undefined),
			kmsKeyServiceAccount: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Configuration options for a custom domain. */
	export interface DomainConfig {

		/** Immutable. Domain used by Workstations for HTTP ingress. */
		domain?: string | null;
	}

	/** Configuration options for a custom domain. */
	export interface DomainConfigFormProperties {

		/** Immutable. Domain used by Workstations for HTTP ingress. */
		domain: FormControl<string | null | undefined>,
	}
	export function CreateDomainConfigFormGroup() {
		return new FormGroup<DomainConfigFormProperties>({
			domain: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A set of Compute Engine Confidential VM instance options. */
	export interface GceConfidentialInstanceConfig {

		/** Optional. Whether the instance has confidential compute enabled. */
		enableConfidentialCompute?: boolean | null;
	}

	/** A set of Compute Engine Confidential VM instance options. */
	export interface GceConfidentialInstanceConfigFormProperties {

		/** Optional. Whether the instance has confidential compute enabled. */
		enableConfidentialCompute: FormControl<boolean | null | undefined>,
	}
	export function CreateGceConfidentialInstanceConfigFormGroup() {
		return new FormGroup<GceConfidentialInstanceConfigFormProperties>({
			enableConfidentialCompute: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** A runtime using a Compute Engine instance. */
	export interface GceInstance {

		/** Optional. The size of the boot disk for the VM in gigabytes (GB). The minimum boot disk size is `30` GB. Defaults to `50` GB. */
		bootDiskSizeGb?: number | null;

		/** A set of Compute Engine Confidential VM instance options. */
		confidentialInstanceConfig?: GceConfidentialInstanceConfig;

		/** Optional. When set to true, disables public IP addresses for VMs. If you disable public IP addresses, you must set up Private Google Access or Cloud NAT on your network. If you use Private Google Access and you use `private.googleapis.com` or `restricted.googleapis.com` for Container Registry and Artifact Registry, make sure that you set up DNS records for domains `*.gcr.io` and `*.pkg.dev`. Defaults to false (VMs have public IP addresses). */
		disablePublicIpAddresses?: boolean | null;

		/** Optional. Whether to enable nested virtualization on Cloud Workstations VMs created under this workstation configuration. Nested virtualization lets you run virtual machine (VM) instances inside your workstation. Before enabling nested virtualization, consider the following important considerations. Cloud Workstations instances are subject to the [same restrictions as Compute Engine instances](https://cloud.google.com/compute/docs/instances/nested-virtualization/overview#restrictions): * **Organization policy**: projects, folders, or organizations may be restricted from creating nested VMs if the **Disable VM nested virtualization** constraint is enforced in the organization policy. For more information, see the Compute Engine section, [Checking whether nested virtualization is allowed](https://cloud.google.com/compute/docs/instances/nested-virtualization/managing-constraint#checking_whether_nested_virtualization_is_allowed). * **Performance**: nested VMs might experience a 10% or greater decrease in performance for workloads that are CPU-bound and possibly greater than a 10% decrease for workloads that are input/output bound. * **Machine Type**: nested virtualization can only be enabled on workstation configurations that specify a machine_type in the N1 or N2 machine series. * **GPUs**: nested virtualization may not be enabled on workstation configurations with accelerators. * **Operating System**: Because [Container-Optimized OS](https://cloud.google.com/compute/docs/images/os-details#container-optimized_os_cos) does not support nested virtualization, when nested virtualization is enabled, the underlying Compute Engine VM instances boot from an [Ubuntu LTS](https://cloud.google.com/compute/docs/images/os-details#ubuntu_lts) image. */
		enableNestedVirtualization?: boolean | null;

		/** Optional. The type of machine to use for VM instances—for example, `"e2-standard-4"`. For more information about machine types that Cloud Workstations supports, see the list of [available machine types](https://cloud.google.com/workstations/docs/available-machine-types). */
		machineType?: string | null;

		/** Optional. The number of VMs that the system should keep idle so that new workstations can be started quickly for new users. Defaults to `0` in the API. */
		poolSize?: number | null;

		/** Output only. Number of instances currently available in the pool for faster workstation startup. */
		pooledInstances?: number | null;

		/** Optional. The email address of the service account for Cloud Workstations VMs created with this configuration. When specified, be sure that the service account has `logginglogEntries.create` permission on the project so it can write logs out to Cloud Logging. If using a custom container image, the service account must have [Artifact Registry Reader](https://cloud.google.com/artifact-registry/docs/access-control#roles) permission to pull the specified image. If you as the administrator want to be able to `ssh` into the underlying VM, you need to set this value to a service account for which you have the `iam.serviceAccounts.actAs` permission. Conversely, if you don't want anyone to be able to `ssh` into the underlying VM, use a service account where no one has that permission. If not set, VMs run with a service account provided by the Cloud Workstations service, and the image must be publicly accessible. */
		serviceAccount?: string | null;

		/** Optional. Scopes to grant to the service_account. Various scopes are automatically added based on feature usage. When specified, users of workstations under this configuration must have `iam.serviceAccounts.actAs` on the service account. */
		serviceAccountScopes?: Array<string>;

		/** A set of Compute Engine Shielded instance options. */
		shieldedInstanceConfig?: GceShieldedInstanceConfig;

		/** Optional. Network tags to add to the Compute Engine VMs backing the workstations. This option applies [network tags](https://cloud.google.com/vpc/docs/add-remove-network-tags) to VMs created with this configuration. These network tags enable the creation of [firewall rules](https://cloud.google.com/workstations/docs/configure-firewall-rules). */
		tags?: Array<string>;
	}

	/** A runtime using a Compute Engine instance. */
	export interface GceInstanceFormProperties {

		/** Optional. The size of the boot disk for the VM in gigabytes (GB). The minimum boot disk size is `30` GB. Defaults to `50` GB. */
		bootDiskSizeGb: FormControl<number | null | undefined>,

		/** Optional. When set to true, disables public IP addresses for VMs. If you disable public IP addresses, you must set up Private Google Access or Cloud NAT on your network. If you use Private Google Access and you use `private.googleapis.com` or `restricted.googleapis.com` for Container Registry and Artifact Registry, make sure that you set up DNS records for domains `*.gcr.io` and `*.pkg.dev`. Defaults to false (VMs have public IP addresses). */
		disablePublicIpAddresses: FormControl<boolean | null | undefined>,

		/** Optional. Whether to enable nested virtualization on Cloud Workstations VMs created under this workstation configuration. Nested virtualization lets you run virtual machine (VM) instances inside your workstation. Before enabling nested virtualization, consider the following important considerations. Cloud Workstations instances are subject to the [same restrictions as Compute Engine instances](https://cloud.google.com/compute/docs/instances/nested-virtualization/overview#restrictions): * **Organization policy**: projects, folders, or organizations may be restricted from creating nested VMs if the **Disable VM nested virtualization** constraint is enforced in the organization policy. For more information, see the Compute Engine section, [Checking whether nested virtualization is allowed](https://cloud.google.com/compute/docs/instances/nested-virtualization/managing-constraint#checking_whether_nested_virtualization_is_allowed). * **Performance**: nested VMs might experience a 10% or greater decrease in performance for workloads that are CPU-bound and possibly greater than a 10% decrease for workloads that are input/output bound. * **Machine Type**: nested virtualization can only be enabled on workstation configurations that specify a machine_type in the N1 or N2 machine series. * **GPUs**: nested virtualization may not be enabled on workstation configurations with accelerators. * **Operating System**: Because [Container-Optimized OS](https://cloud.google.com/compute/docs/images/os-details#container-optimized_os_cos) does not support nested virtualization, when nested virtualization is enabled, the underlying Compute Engine VM instances boot from an [Ubuntu LTS](https://cloud.google.com/compute/docs/images/os-details#ubuntu_lts) image. */
		enableNestedVirtualization: FormControl<boolean | null | undefined>,

		/** Optional. The type of machine to use for VM instances—for example, `"e2-standard-4"`. For more information about machine types that Cloud Workstations supports, see the list of [available machine types](https://cloud.google.com/workstations/docs/available-machine-types). */
		machineType: FormControl<string | null | undefined>,

		/** Optional. The number of VMs that the system should keep idle so that new workstations can be started quickly for new users. Defaults to `0` in the API. */
		poolSize: FormControl<number | null | undefined>,

		/** Output only. Number of instances currently available in the pool for faster workstation startup. */
		pooledInstances: FormControl<number | null | undefined>,

		/** Optional. The email address of the service account for Cloud Workstations VMs created with this configuration. When specified, be sure that the service account has `logginglogEntries.create` permission on the project so it can write logs out to Cloud Logging. If using a custom container image, the service account must have [Artifact Registry Reader](https://cloud.google.com/artifact-registry/docs/access-control#roles) permission to pull the specified image. If you as the administrator want to be able to `ssh` into the underlying VM, you need to set this value to a service account for which you have the `iam.serviceAccounts.actAs` permission. Conversely, if you don't want anyone to be able to `ssh` into the underlying VM, use a service account where no one has that permission. If not set, VMs run with a service account provided by the Cloud Workstations service, and the image must be publicly accessible. */
		serviceAccount: FormControl<string | null | undefined>,
	}
	export function CreateGceInstanceFormGroup() {
		return new FormGroup<GceInstanceFormProperties>({
			bootDiskSizeGb: new FormControl<number | null | undefined>(undefined),
			disablePublicIpAddresses: new FormControl<boolean | null | undefined>(undefined),
			enableNestedVirtualization: new FormControl<boolean | null | undefined>(undefined),
			machineType: new FormControl<string | null | undefined>(undefined),
			poolSize: new FormControl<number | null | undefined>(undefined),
			pooledInstances: new FormControl<number | null | undefined>(undefined),
			serviceAccount: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A set of Compute Engine Shielded instance options. */
	export interface GceShieldedInstanceConfig {

		/** Optional. Whether the instance has integrity monitoring enabled. */
		enableIntegrityMonitoring?: boolean | null;

		/** Optional. Whether the instance has Secure Boot enabled. */
		enableSecureBoot?: boolean | null;

		/** Optional. Whether the instance has the vTPM enabled. */
		enableVtpm?: boolean | null;
	}

	/** A set of Compute Engine Shielded instance options. */
	export interface GceShieldedInstanceConfigFormProperties {

		/** Optional. Whether the instance has integrity monitoring enabled. */
		enableIntegrityMonitoring: FormControl<boolean | null | undefined>,

		/** Optional. Whether the instance has Secure Boot enabled. */
		enableSecureBoot: FormControl<boolean | null | undefined>,

		/** Optional. Whether the instance has the vTPM enabled. */
		enableVtpm: FormControl<boolean | null | undefined>,
	}
	export function CreateGceShieldedInstanceConfigFormGroup() {
		return new FormGroup<GceShieldedInstanceConfigFormProperties>({
			enableIntegrityMonitoring: new FormControl<boolean | null | undefined>(undefined),
			enableSecureBoot: new FormControl<boolean | null | undefined>(undefined),
			enableVtpm: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** A PersistentDirectory backed by a Compute Engine regional persistent disk. The persistent_directories field is repeated, but it may contain only one entry. It creates a [persistent disk](https://cloud.google.com/compute/docs/disks/persistent-disks) that mounts to the workstation VM at `/home` when the session starts and detaches when the session ends. If this field is empty, workstations created with this configuration do not have a persistent home directory. */
	export interface GceRegionalPersistentDisk {

		/** Optional. The [type of the persistent disk](https://cloud.google.com/compute/docs/disks#disk-types) for the home directory. Defaults to `"pd-standard"`. */
		diskType?: string | null;

		/** Optional. Type of file system that the disk should be formatted with. The workstation image must support this file system type. Must be empty if source_snapshot is set. Defaults to `"ext4"`. */
		fsType?: string | null;

		/** Optional. Whether the persistent disk should be deleted when the workstation is deleted. Valid values are `DELETE` and `RETAIN`. Defaults to `DELETE`. */
		reclaimPolicy?: GceRegionalPersistentDiskReclaimPolicy | null;

		/** Optional. The GB capacity of a persistent home directory for each workstation created with this configuration. Must be empty if source_snapshot is set. Valid values are `10`, `50`, `100`, `200`, `500`, or `1000`. Defaults to `200`. If less than `200` GB, the disk_type must be `"pd-balanced"` or `"pd-ssd"`. */
		sizeGb?: number | null;

		/** Optional. Name of the snapshot to use as the source for the disk. If set, size_gb and fs_type must be empty. */
		sourceSnapshot?: string | null;
	}

	/** A PersistentDirectory backed by a Compute Engine regional persistent disk. The persistent_directories field is repeated, but it may contain only one entry. It creates a [persistent disk](https://cloud.google.com/compute/docs/disks/persistent-disks) that mounts to the workstation VM at `/home` when the session starts and detaches when the session ends. If this field is empty, workstations created with this configuration do not have a persistent home directory. */
	export interface GceRegionalPersistentDiskFormProperties {

		/** Optional. The [type of the persistent disk](https://cloud.google.com/compute/docs/disks#disk-types) for the home directory. Defaults to `"pd-standard"`. */
		diskType: FormControl<string | null | undefined>,

		/** Optional. Type of file system that the disk should be formatted with. The workstation image must support this file system type. Must be empty if source_snapshot is set. Defaults to `"ext4"`. */
		fsType: FormControl<string | null | undefined>,

		/** Optional. Whether the persistent disk should be deleted when the workstation is deleted. Valid values are `DELETE` and `RETAIN`. Defaults to `DELETE`. */
		reclaimPolicy: FormControl<GceRegionalPersistentDiskReclaimPolicy | null | undefined>,

		/** Optional. The GB capacity of a persistent home directory for each workstation created with this configuration. Must be empty if source_snapshot is set. Valid values are `10`, `50`, `100`, `200`, `500`, or `1000`. Defaults to `200`. If less than `200` GB, the disk_type must be `"pd-balanced"` or `"pd-ssd"`. */
		sizeGb: FormControl<number | null | undefined>,

		/** Optional. Name of the snapshot to use as the source for the disk. If set, size_gb and fs_type must be empty. */
		sourceSnapshot: FormControl<string | null | undefined>,
	}
	export function CreateGceRegionalPersistentDiskFormGroup() {
		return new FormGroup<GceRegionalPersistentDiskFormProperties>({
			diskType: new FormControl<string | null | undefined>(undefined),
			fsType: new FormControl<string | null | undefined>(undefined),
			reclaimPolicy: new FormControl<GceRegionalPersistentDiskReclaimPolicy | null | undefined>(undefined),
			sizeGb: new FormControl<number | null | undefined>(undefined),
			sourceSnapshot: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum GceRegionalPersistentDiskReclaimPolicy { RECLAIM_POLICY_UNSPECIFIED = 0, DELETE = 1, RETAIN = 2 }


	/** Request message for GenerateAccessToken. */
	export interface GenerateAccessTokenRequest {

		/** Desired expiration time of the access token. This value must be at most 24 hours in the future. If a value is not specified, the token's expiration time will be set to a default value of 1 hour in the future. */
		expireTime?: string | null;

		/** Desired lifetime duration of the access token. This value must be at most 24 hours. If a value is not specified, the token's lifetime will be set to a default value of 1 hour. */
		ttl?: string | null;
	}

	/** Request message for GenerateAccessToken. */
	export interface GenerateAccessTokenRequestFormProperties {

		/** Desired expiration time of the access token. This value must be at most 24 hours in the future. If a value is not specified, the token's expiration time will be set to a default value of 1 hour in the future. */
		expireTime: FormControl<string | null | undefined>,

		/** Desired lifetime duration of the access token. This value must be at most 24 hours. If a value is not specified, the token's lifetime will be set to a default value of 1 hour. */
		ttl: FormControl<string | null | undefined>,
	}
	export function CreateGenerateAccessTokenRequestFormGroup() {
		return new FormGroup<GenerateAccessTokenRequestFormProperties>({
			expireTime: new FormControl<string | null | undefined>(undefined),
			ttl: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response message for GenerateAccessToken. */
	export interface GenerateAccessTokenResponse {

		/** The generated bearer access token. To use this token, include it in an Authorization header of an HTTP request sent to the associated workstation's hostname—for example, `Authorization: Bearer `. */
		accessToken?: string | null;

		/** Time at which the generated token will expire. */
		expireTime?: string | null;
	}

	/** Response message for GenerateAccessToken. */
	export interface GenerateAccessTokenResponseFormProperties {

		/** The generated bearer access token. To use this token, include it in an Authorization header of an HTTP request sent to the associated workstation's hostname—for example, `Authorization: Bearer `. */
		accessToken: FormControl<string | null | undefined>,

		/** Time at which the generated token will expire. */
		expireTime: FormControl<string | null | undefined>,
	}
	export function CreateGenerateAccessTokenResponseFormGroup() {
		return new FormGroup<GenerateAccessTokenResponseFormProperties>({
			accessToken: new FormControl<string | null | undefined>(undefined),
			expireTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); } */
	export interface GoogleProtobufEmpty {
	}

	/** A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); } */
	export interface GoogleProtobufEmptyFormProperties {
	}
	export function CreateGoogleProtobufEmptyFormGroup() {
		return new FormGroup<GoogleProtobufEmptyFormProperties>({
		});

	}


	/** Runtime host for a workstation. */
	export interface Host {

		/** A runtime using a Compute Engine instance. */
		gceInstance?: GceInstance;
	}

	/** Runtime host for a workstation. */
	export interface HostFormProperties {
	}
	export function CreateHostFormGroup() {
		return new FormGroup<HostFormProperties>({
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


	/** Response message for ListUsableWorkstationConfigs. */
	export interface ListUsableWorkstationConfigsResponse {

		/** Token to retrieve the next page of results, or empty if there are no more results in the list. */
		nextPageToken?: string | null;

		/** Unreachable resources. */
		unreachable?: Array<string>;

		/** The requested configs. */
		workstationConfigs?: Array<WorkstationConfig>;
	}

	/** Response message for ListUsableWorkstationConfigs. */
	export interface ListUsableWorkstationConfigsResponseFormProperties {

		/** Token to retrieve the next page of results, or empty if there are no more results in the list. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListUsableWorkstationConfigsResponseFormGroup() {
		return new FormGroup<ListUsableWorkstationConfigsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A workstation configuration resource in the Cloud Workstations API. Workstation configurations act as templates for workstations. The workstation configuration defines details such as the workstation virtual machine (VM) instance type, persistent storage, container image defining environment, which IDE or Code Editor to use, and more. Administrators and platform teams can also use [Identity and Access Management (IAM)](https://cloud.google.com/iam/docs/overview) rules to grant access to teams or to individual developers. */
	export interface WorkstationConfig {

		/** Optional. Client-specified annotations. */
		annotations?: {[id: string]: string };

		/** Output only. Status conditions describing the current resource state. */
		conditions?: Array<Status>;

		/** A Docker container. */
		container?: Container;

		/** Output only. Time when this workstation configuration was created. */
		createTime?: string | null;

		/** Output only. Whether this resource is degraded, in which case it may require user action to restore full functionality. See also the conditions field. */
		degraded?: boolean | null;

		/** Output only. Time when this workstation configuration was soft-deleted. */
		deleteTime?: string | null;

		/** Optional. Human-readable name for this workstation configuration. */
		displayName?: string | null;

		/** A customer-managed encryption key (CMEK) for the Compute Engine resources of the associated workstation configuration. Specify the name of your Cloud KMS encryption key and the default service account. We recommend that you use a separate service account and follow [Cloud KMS best practices](https://cloud.google.com/kms/docs/separation-of-duties). */
		encryptionKey?: CustomerEncryptionKey;

		/** Optional. Checksum computed by the server. May be sent on update and delete requests to make sure that the client has an up-to-date value before proceeding. */
		etag?: string | null;

		/** Runtime host for a workstation. */
		host?: Host;

		/** Optional. Number of seconds to wait before automatically stopping a workstation after it last received user traffic. A value of `"0s"` indicates that Cloud Workstations VMs created with this configuration should never time out due to idleness. Provide [duration](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#duration) terminated by `s` for seconds—for example, `"7200s"` (2 hours). The default is `"1200s"` (20 minutes). */
		idleTimeout?: string | null;

		/** Optional. [Labels](https://cloud.google.com/workstations/docs/label-resources) that are applied to the workstation configuration and that are also propagated to the underlying Compute Engine resources. */
		labels?: {[id: string]: string };

		/** Identifier. Full name of this workstation configuration. */
		name?: string | null;

		/** Optional. Directories to persist across workstation sessions. */
		persistentDirectories?: Array<PersistentDirectory>;

		/** Optional. Readiness checks to perform when starting a workstation using this workstation configuration. Mark a workstation as running only after all specified readiness checks return 200 status codes. */
		readinessChecks?: Array<ReadinessCheck>;

		/** Output only. Indicates whether this workstation configuration is currently being updated to match its intended state. */
		reconciling?: boolean | null;

		/** Optional. Immutable. Specifies the zones used to replicate the VM and disk resources within the region. If set, exactly two zones within the workstation cluster's region must be specified—for example, `['us-central1-a', 'us-central1-f']`. If this field is empty, two default zones within the region are used. Immutable after the workstation configuration is created. */
		replicaZones?: Array<string>;

		/** Optional. Number of seconds that a workstation can run until it is automatically shut down. We recommend that workstations be shut down daily to reduce costs and so that security updates can be applied upon restart. The idle_timeout and running_timeout fields are independent of each other. Note that the running_timeout field shuts down VMs after the specified time, regardless of whether or not the VMs are idle. Provide duration terminated by `s` for seconds—for example, `"54000s"` (15 hours). Defaults to `"43200s"` (12 hours). A value of `"0s"` indicates that workstations using this configuration should never time out. If encryption_key is set, it must be greater than `"0s"` and less than `"86400s"` (24 hours). Warning: A value of `"0s"` indicates that Cloud Workstations VMs created with this configuration have no maximum running time. This is strongly discouraged because you incur costs and will not pick up security updates. */
		runningTimeout?: string | null;

		/** Output only. A system-assigned unique identifier for this workstation configuration. */
		uid?: string | null;

		/** Output only. Time when this workstation configuration was most recently updated. */
		updateTime?: string | null;
	}

	/** A workstation configuration resource in the Cloud Workstations API. Workstation configurations act as templates for workstations. The workstation configuration defines details such as the workstation virtual machine (VM) instance type, persistent storage, container image defining environment, which IDE or Code Editor to use, and more. Administrators and platform teams can also use [Identity and Access Management (IAM)](https://cloud.google.com/iam/docs/overview) rules to grant access to teams or to individual developers. */
	export interface WorkstationConfigFormProperties {

		/** Optional. Client-specified annotations. */
		annotations: FormControl<{[id: string]: string } | null | undefined>,

		/** Output only. Time when this workstation configuration was created. */
		createTime: FormControl<string | null | undefined>,

		/** Output only. Whether this resource is degraded, in which case it may require user action to restore full functionality. See also the conditions field. */
		degraded: FormControl<boolean | null | undefined>,

		/** Output only. Time when this workstation configuration was soft-deleted. */
		deleteTime: FormControl<string | null | undefined>,

		/** Optional. Human-readable name for this workstation configuration. */
		displayName: FormControl<string | null | undefined>,

		/** Optional. Checksum computed by the server. May be sent on update and delete requests to make sure that the client has an up-to-date value before proceeding. */
		etag: FormControl<string | null | undefined>,

		/** Optional. Number of seconds to wait before automatically stopping a workstation after it last received user traffic. A value of `"0s"` indicates that Cloud Workstations VMs created with this configuration should never time out due to idleness. Provide [duration](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#duration) terminated by `s` for seconds—for example, `"7200s"` (2 hours). The default is `"1200s"` (20 minutes). */
		idleTimeout: FormControl<string | null | undefined>,

		/** Optional. [Labels](https://cloud.google.com/workstations/docs/label-resources) that are applied to the workstation configuration and that are also propagated to the underlying Compute Engine resources. */
		labels: FormControl<{[id: string]: string } | null | undefined>,

		/** Identifier. Full name of this workstation configuration. */
		name: FormControl<string | null | undefined>,

		/** Output only. Indicates whether this workstation configuration is currently being updated to match its intended state. */
		reconciling: FormControl<boolean | null | undefined>,

		/** Optional. Number of seconds that a workstation can run until it is automatically shut down. We recommend that workstations be shut down daily to reduce costs and so that security updates can be applied upon restart. The idle_timeout and running_timeout fields are independent of each other. Note that the running_timeout field shuts down VMs after the specified time, regardless of whether or not the VMs are idle. Provide duration terminated by `s` for seconds—for example, `"54000s"` (15 hours). Defaults to `"43200s"` (12 hours). A value of `"0s"` indicates that workstations using this configuration should never time out. If encryption_key is set, it must be greater than `"0s"` and less than `"86400s"` (24 hours). Warning: A value of `"0s"` indicates that Cloud Workstations VMs created with this configuration have no maximum running time. This is strongly discouraged because you incur costs and will not pick up security updates. */
		runningTimeout: FormControl<string | null | undefined>,

		/** Output only. A system-assigned unique identifier for this workstation configuration. */
		uid: FormControl<string | null | undefined>,

		/** Output only. Time when this workstation configuration was most recently updated. */
		updateTime: FormControl<string | null | undefined>,
	}
	export function CreateWorkstationConfigFormGroup() {
		return new FormGroup<WorkstationConfigFormProperties>({
			annotations: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			createTime: new FormControl<string | null | undefined>(undefined),
			degraded: new FormControl<boolean | null | undefined>(undefined),
			deleteTime: new FormControl<string | null | undefined>(undefined),
			displayName: new FormControl<string | null | undefined>(undefined),
			etag: new FormControl<string | null | undefined>(undefined),
			idleTimeout: new FormControl<string | null | undefined>(undefined),
			labels: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			reconciling: new FormControl<boolean | null | undefined>(undefined),
			runningTimeout: new FormControl<string | null | undefined>(undefined),
			uid: new FormControl<string | null | undefined>(undefined),
			updateTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A directory to persist across workstation sessions. */
	export interface PersistentDirectory {

		/** A PersistentDirectory backed by a Compute Engine regional persistent disk. The persistent_directories field is repeated, but it may contain only one entry. It creates a [persistent disk](https://cloud.google.com/compute/docs/disks/persistent-disks) that mounts to the workstation VM at `/home` when the session starts and detaches when the session ends. If this field is empty, workstations created with this configuration do not have a persistent home directory. */
		gcePd?: GceRegionalPersistentDisk;

		/** Optional. Location of this directory in the running workstation. */
		mountPath?: string | null;
	}

	/** A directory to persist across workstation sessions. */
	export interface PersistentDirectoryFormProperties {

		/** Optional. Location of this directory in the running workstation. */
		mountPath: FormControl<string | null | undefined>,
	}
	export function CreatePersistentDirectoryFormGroup() {
		return new FormGroup<PersistentDirectoryFormProperties>({
			mountPath: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A readiness check to be performed on a workstation. */
	export interface ReadinessCheck {

		/** Optional. Path to which the request should be sent. */
		path?: string | null;

		/** Optional. Port to which the request should be sent. */
		port?: number | null;
	}

	/** A readiness check to be performed on a workstation. */
	export interface ReadinessCheckFormProperties {

		/** Optional. Path to which the request should be sent. */
		path: FormControl<string | null | undefined>,

		/** Optional. Port to which the request should be sent. */
		port: FormControl<number | null | undefined>,
	}
	export function CreateReadinessCheckFormGroup() {
		return new FormGroup<ReadinessCheckFormProperties>({
			path: new FormControl<string | null | undefined>(undefined),
			port: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Response message for ListUsableWorkstations. */
	export interface ListUsableWorkstationsResponse {

		/** Token to retrieve the next page of results, or empty if there are no more results in the list. */
		nextPageToken?: string | null;

		/** Unreachable resources. */
		unreachable?: Array<string>;

		/** The requested workstations. */
		workstations?: Array<Workstation>;
	}

	/** Response message for ListUsableWorkstations. */
	export interface ListUsableWorkstationsResponseFormProperties {

		/** Token to retrieve the next page of results, or empty if there are no more results in the list. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListUsableWorkstationsResponseFormGroup() {
		return new FormGroup<ListUsableWorkstationsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A single instance of a developer workstation with its own persistent storage. */
	export interface Workstation {

		/** Optional. Client-specified annotations. */
		annotations?: {[id: string]: string };

		/** Output only. Time when this workstation was created. */
		createTime?: string | null;

		/** Output only. Time when this workstation was soft-deleted. */
		deleteTime?: string | null;

		/** Optional. Human-readable name for this workstation. */
		displayName?: string | null;

		/** Optional. Environment variables passed to the workstation container's entrypoint. */
		env?: {[id: string]: string };

		/** Optional. Checksum computed by the server. May be sent on update and delete requests to make sure that the client has an up-to-date value before proceeding. */
		etag?: string | null;

		/** Output only. Host to which clients can send HTTPS traffic that will be received by the workstation. Authorized traffic will be received to the workstation as HTTP on port 80. To send traffic to a different port, clients may prefix the host with the destination port in the format `{port}-{host}`. */
		host?: string | null;

		/** Output only. The name of the Google Cloud KMS encryption key used to encrypt this workstation. The KMS key can only be configured in the WorkstationConfig. The expected format is `projects/locations/keyRings/cryptoKeys/*`. */
		kmsKey?: string | null;

		/** Optional. [Labels](https://cloud.google.com/workstations/docs/label-resources) that are applied to the workstation and that are also propagated to the underlying Compute Engine resources. */
		labels?: {[id: string]: string };

		/** Identifier. Full name of this workstation. */
		name?: string | null;

		/** Output only. Indicates whether this workstation is currently being updated to match its intended state. */
		reconciling?: boolean | null;

		/** Output only. Time when this workstation was most recently successfully started, regardless of the workstation's initial state. */
		startTime?: string | null;

		/** Output only. Current state of the workstation. */
		state?: WorkstationState | null;

		/** Output only. A system-assigned unique identifier for this workstation. */
		uid?: string | null;

		/** Output only. Time when this workstation was most recently updated. */
		updateTime?: string | null;
	}

	/** A single instance of a developer workstation with its own persistent storage. */
	export interface WorkstationFormProperties {

		/** Optional. Client-specified annotations. */
		annotations: FormControl<{[id: string]: string } | null | undefined>,

		/** Output only. Time when this workstation was created. */
		createTime: FormControl<string | null | undefined>,

		/** Output only. Time when this workstation was soft-deleted. */
		deleteTime: FormControl<string | null | undefined>,

		/** Optional. Human-readable name for this workstation. */
		displayName: FormControl<string | null | undefined>,

		/** Optional. Environment variables passed to the workstation container's entrypoint. */
		env: FormControl<{[id: string]: string } | null | undefined>,

		/** Optional. Checksum computed by the server. May be sent on update and delete requests to make sure that the client has an up-to-date value before proceeding. */
		etag: FormControl<string | null | undefined>,

		/** Output only. Host to which clients can send HTTPS traffic that will be received by the workstation. Authorized traffic will be received to the workstation as HTTP on port 80. To send traffic to a different port, clients may prefix the host with the destination port in the format `{port}-{host}`. */
		host: FormControl<string | null | undefined>,

		/** Output only. The name of the Google Cloud KMS encryption key used to encrypt this workstation. The KMS key can only be configured in the WorkstationConfig. The expected format is `projects/locations/keyRings/cryptoKeys/*`. */
		kmsKey: FormControl<string | null | undefined>,

		/** Optional. [Labels](https://cloud.google.com/workstations/docs/label-resources) that are applied to the workstation and that are also propagated to the underlying Compute Engine resources. */
		labels: FormControl<{[id: string]: string } | null | undefined>,

		/** Identifier. Full name of this workstation. */
		name: FormControl<string | null | undefined>,

		/** Output only. Indicates whether this workstation is currently being updated to match its intended state. */
		reconciling: FormControl<boolean | null | undefined>,

		/** Output only. Time when this workstation was most recently successfully started, regardless of the workstation's initial state. */
		startTime: FormControl<string | null | undefined>,

		/** Output only. Current state of the workstation. */
		state: FormControl<WorkstationState | null | undefined>,

		/** Output only. A system-assigned unique identifier for this workstation. */
		uid: FormControl<string | null | undefined>,

		/** Output only. Time when this workstation was most recently updated. */
		updateTime: FormControl<string | null | undefined>,
	}
	export function CreateWorkstationFormGroup() {
		return new FormGroup<WorkstationFormProperties>({
			annotations: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			createTime: new FormControl<string | null | undefined>(undefined),
			deleteTime: new FormControl<string | null | undefined>(undefined),
			displayName: new FormControl<string | null | undefined>(undefined),
			env: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			etag: new FormControl<string | null | undefined>(undefined),
			host: new FormControl<string | null | undefined>(undefined),
			kmsKey: new FormControl<string | null | undefined>(undefined),
			labels: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			reconciling: new FormControl<boolean | null | undefined>(undefined),
			startTime: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<WorkstationState | null | undefined>(undefined),
			uid: new FormControl<string | null | undefined>(undefined),
			updateTime: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum WorkstationState { STATE_UNSPECIFIED = 0, STATE_STARTING = 1, STATE_RUNNING = 2, STATE_STOPPING = 3, STATE_STOPPED = 4 }


	/** Response message for ListWorkstationClusters. */
	export interface ListWorkstationClustersResponse {

		/** Token to retrieve the next page of results, or empty if there are no more results in the list. */
		nextPageToken?: string | null;

		/** Unreachable resources. */
		unreachable?: Array<string>;

		/** The requested workstation clusters. */
		workstationClusters?: Array<WorkstationCluster>;
	}

	/** Response message for ListWorkstationClusters. */
	export interface ListWorkstationClustersResponseFormProperties {

		/** Token to retrieve the next page of results, or empty if there are no more results in the list. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListWorkstationClustersResponseFormGroup() {
		return new FormGroup<ListWorkstationClustersResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A workstation cluster resource in the Cloud Workstations API. Defines a group of workstations in a particular region and the VPC network they're attached to. */
	export interface WorkstationCluster {

		/** Optional. Client-specified annotations. */
		annotations?: {[id: string]: string };

		/** Output only. Status conditions describing the workstation cluster's current state. */
		conditions?: Array<Status>;

		/** Output only. The private IP address of the control plane for this workstation cluster. Workstation VMs need access to this IP address to work with the service, so make sure that your firewall rules allow egress from the workstation VMs to this address. */
		controlPlaneIp?: string | null;

		/** Output only. Time when this workstation cluster was created. */
		createTime?: string | null;

		/** Output only. Whether this workstation cluster is in degraded mode, in which case it may require user action to restore full functionality. Details can be found in conditions. */
		degraded?: boolean | null;

		/** Output only. Time when this workstation cluster was soft-deleted. */
		deleteTime?: string | null;

		/** Optional. Human-readable name for this workstation cluster. */
		displayName?: string | null;

		/** Configuration options for a custom domain. */
		domainConfig?: DomainConfig;

		/** Optional. Checksum computed by the server. May be sent on update and delete requests to make sure that the client has an up-to-date value before proceeding. */
		etag?: string | null;

		/** Optional. [Labels](https://cloud.google.com/workstations/docs/label-resources) that are applied to the workstation cluster and that are also propagated to the underlying Compute Engine resources. */
		labels?: {[id: string]: string };

		/** Identifier. Full name of this workstation cluster. */
		name?: string | null;

		/** Immutable. Name of the Compute Engine network in which instances associated with this workstation cluster will be created. */
		network?: string | null;

		/** Configuration options for private workstation clusters. */
		privateClusterConfig?: PrivateClusterConfig;

		/** Output only. Indicates whether this workstation cluster is currently being updated to match its intended state. */
		reconciling?: boolean | null;

		/** Immutable. Name of the Compute Engine subnetwork in which instances associated with this workstation cluster will be created. Must be part of the subnetwork specified for this workstation cluster. */
		subnetwork?: string | null;

		/** Output only. A system-assigned unique identifier for this workstation cluster. */
		uid?: string | null;

		/** Output only. Time when this workstation cluster was most recently updated. */
		updateTime?: string | null;
	}

	/** A workstation cluster resource in the Cloud Workstations API. Defines a group of workstations in a particular region and the VPC network they're attached to. */
	export interface WorkstationClusterFormProperties {

		/** Optional. Client-specified annotations. */
		annotations: FormControl<{[id: string]: string } | null | undefined>,

		/** Output only. The private IP address of the control plane for this workstation cluster. Workstation VMs need access to this IP address to work with the service, so make sure that your firewall rules allow egress from the workstation VMs to this address. */
		controlPlaneIp: FormControl<string | null | undefined>,

		/** Output only. Time when this workstation cluster was created. */
		createTime: FormControl<string | null | undefined>,

		/** Output only. Whether this workstation cluster is in degraded mode, in which case it may require user action to restore full functionality. Details can be found in conditions. */
		degraded: FormControl<boolean | null | undefined>,

		/** Output only. Time when this workstation cluster was soft-deleted. */
		deleteTime: FormControl<string | null | undefined>,

		/** Optional. Human-readable name for this workstation cluster. */
		displayName: FormControl<string | null | undefined>,

		/** Optional. Checksum computed by the server. May be sent on update and delete requests to make sure that the client has an up-to-date value before proceeding. */
		etag: FormControl<string | null | undefined>,

		/** Optional. [Labels](https://cloud.google.com/workstations/docs/label-resources) that are applied to the workstation cluster and that are also propagated to the underlying Compute Engine resources. */
		labels: FormControl<{[id: string]: string } | null | undefined>,

		/** Identifier. Full name of this workstation cluster. */
		name: FormControl<string | null | undefined>,

		/** Immutable. Name of the Compute Engine network in which instances associated with this workstation cluster will be created. */
		network: FormControl<string | null | undefined>,

		/** Output only. Indicates whether this workstation cluster is currently being updated to match its intended state. */
		reconciling: FormControl<boolean | null | undefined>,

		/** Immutable. Name of the Compute Engine subnetwork in which instances associated with this workstation cluster will be created. Must be part of the subnetwork specified for this workstation cluster. */
		subnetwork: FormControl<string | null | undefined>,

		/** Output only. A system-assigned unique identifier for this workstation cluster. */
		uid: FormControl<string | null | undefined>,

		/** Output only. Time when this workstation cluster was most recently updated. */
		updateTime: FormControl<string | null | undefined>,
	}
	export function CreateWorkstationClusterFormGroup() {
		return new FormGroup<WorkstationClusterFormProperties>({
			annotations: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			controlPlaneIp: new FormControl<string | null | undefined>(undefined),
			createTime: new FormControl<string | null | undefined>(undefined),
			degraded: new FormControl<boolean | null | undefined>(undefined),
			deleteTime: new FormControl<string | null | undefined>(undefined),
			displayName: new FormControl<string | null | undefined>(undefined),
			etag: new FormControl<string | null | undefined>(undefined),
			labels: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			network: new FormControl<string | null | undefined>(undefined),
			reconciling: new FormControl<boolean | null | undefined>(undefined),
			subnetwork: new FormControl<string | null | undefined>(undefined),
			uid: new FormControl<string | null | undefined>(undefined),
			updateTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Configuration options for private workstation clusters. */
	export interface PrivateClusterConfig {

		/** Optional. Additional projects that are allowed to attach to the workstation cluster's service attachment. By default, the workstation cluster's project and the VPC host project (if different) are allowed. */
		allowedProjects?: Array<string>;

		/** Output only. Hostname for the workstation cluster. This field will be populated only when private endpoint is enabled. To access workstations in the workstation cluster, create a new DNS zone mapping this domain name to an internal IP address and a forwarding rule mapping that address to the service attachment. */
		clusterHostname?: string | null;

		/** Immutable. Whether Workstations endpoint is private. */
		enablePrivateEndpoint?: boolean | null;

		/** Output only. Service attachment URI for the workstation cluster. The service attachemnt is created when private endpoint is enabled. To access workstations in the workstation cluster, configure access to the managed service using [Private Service Connect](https://cloud.google.com/vpc/docs/configure-private-service-connect-services). */
		serviceAttachmentUri?: string | null;
	}

	/** Configuration options for private workstation clusters. */
	export interface PrivateClusterConfigFormProperties {

		/** Output only. Hostname for the workstation cluster. This field will be populated only when private endpoint is enabled. To access workstations in the workstation cluster, create a new DNS zone mapping this domain name to an internal IP address and a forwarding rule mapping that address to the service attachment. */
		clusterHostname: FormControl<string | null | undefined>,

		/** Immutable. Whether Workstations endpoint is private. */
		enablePrivateEndpoint: FormControl<boolean | null | undefined>,

		/** Output only. Service attachment URI for the workstation cluster. The service attachemnt is created when private endpoint is enabled. To access workstations in the workstation cluster, configure access to the managed service using [Private Service Connect](https://cloud.google.com/vpc/docs/configure-private-service-connect-services). */
		serviceAttachmentUri: FormControl<string | null | undefined>,
	}
	export function CreatePrivateClusterConfigFormGroup() {
		return new FormGroup<PrivateClusterConfigFormProperties>({
			clusterHostname: new FormControl<string | null | undefined>(undefined),
			enablePrivateEndpoint: new FormControl<boolean | null | undefined>(undefined),
			serviceAttachmentUri: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response message for ListWorkstationConfigs. */
	export interface ListWorkstationConfigsResponse {

		/** Token to retrieve the next page of results, or empty if there are no more results in the list. */
		nextPageToken?: string | null;

		/** Unreachable resources. */
		unreachable?: Array<string>;

		/** The requested configs. */
		workstationConfigs?: Array<WorkstationConfig>;
	}

	/** Response message for ListWorkstationConfigs. */
	export interface ListWorkstationConfigsResponseFormProperties {

		/** Token to retrieve the next page of results, or empty if there are no more results in the list. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListWorkstationConfigsResponseFormGroup() {
		return new FormGroup<ListWorkstationConfigsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response message for ListWorkstations. */
	export interface ListWorkstationsResponse {

		/** Optional. Token to retrieve the next page of results, or empty if there are no more results in the list. */
		nextPageToken?: string | null;

		/** Optional. Unreachable resources. */
		unreachable?: Array<string>;

		/** The requested workstations. */
		workstations?: Array<Workstation>;
	}

	/** Response message for ListWorkstations. */
	export interface ListWorkstationsResponseFormProperties {

		/** Optional. Token to retrieve the next page of results, or empty if there are no more results in the list. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListWorkstationsResponseFormGroup() {
		return new FormGroup<ListWorkstationsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Metadata for long-running operations. */
	export interface OperationMetadata {

		/** Output only. API version used to start the operation. */
		apiVersion?: string | null;

		/** Output only. Time that the operation was created. */
		createTime?: string | null;

		/** Output only. Time that the operation finished running. */
		endTime?: string | null;

		/** Output only. Identifies whether the user has requested cancellation of the operation. */
		requestedCancellation?: boolean | null;

		/** Output only. Human-readable status of the operation, if any. */
		statusMessage?: string | null;

		/** Output only. Server-defined resource path for the target of the operation. */
		target?: string | null;

		/** Output only. Name of the verb executed by the operation. */
		verb?: string | null;
	}

	/** Metadata for long-running operations. */
	export interface OperationMetadataFormProperties {

		/** Output only. API version used to start the operation. */
		apiVersion: FormControl<string | null | undefined>,

		/** Output only. Time that the operation was created. */
		createTime: FormControl<string | null | undefined>,

		/** Output only. Time that the operation finished running. */
		endTime: FormControl<string | null | undefined>,

		/** Output only. Identifies whether the user has requested cancellation of the operation. */
		requestedCancellation: FormControl<boolean | null | undefined>,

		/** Output only. Human-readable status of the operation, if any. */
		statusMessage: FormControl<string | null | undefined>,

		/** Output only. Server-defined resource path for the target of the operation. */
		target: FormControl<string | null | undefined>,

		/** Output only. Name of the verb executed by the operation. */
		verb: FormControl<string | null | undefined>,
	}
	export function CreateOperationMetadataFormGroup() {
		return new FormGroup<OperationMetadataFormProperties>({
			apiVersion: new FormControl<string | null | undefined>(undefined),
			createTime: new FormControl<string | null | undefined>(undefined),
			endTime: new FormControl<string | null | undefined>(undefined),
			requestedCancellation: new FormControl<boolean | null | undefined>(undefined),
			statusMessage: new FormControl<string | null | undefined>(undefined),
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


	/** Request message for StartWorkstation. */
	export interface StartWorkstationRequest {

		/** Optional. If set, the request will be rejected if the latest version of the workstation on the server does not have this ETag. */
		etag?: string | null;

		/** Optional. If set, validate the request and preview the review, but do not actually apply it. */
		validateOnly?: boolean | null;
	}

	/** Request message for StartWorkstation. */
	export interface StartWorkstationRequestFormProperties {

		/** Optional. If set, the request will be rejected if the latest version of the workstation on the server does not have this ETag. */
		etag: FormControl<string | null | undefined>,

		/** Optional. If set, validate the request and preview the review, but do not actually apply it. */
		validateOnly: FormControl<boolean | null | undefined>,
	}
	export function CreateStartWorkstationRequestFormGroup() {
		return new FormGroup<StartWorkstationRequestFormProperties>({
			etag: new FormControl<string | null | undefined>(undefined),
			validateOnly: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Request message for StopWorkstation. */
	export interface StopWorkstationRequest {

		/** Optional. If set, the request will be rejected if the latest version of the workstation on the server does not have this ETag. */
		etag?: string | null;

		/** Optional. If set, validate the request and preview the review, but do not actually apply it. */
		validateOnly?: boolean | null;
	}

	/** Request message for StopWorkstation. */
	export interface StopWorkstationRequestFormProperties {

		/** Optional. If set, the request will be rejected if the latest version of the workstation on the server does not have this ETag. */
		etag: FormControl<string | null | undefined>,

		/** Optional. If set, validate the request and preview the review, but do not actually apply it. */
		validateOnly: FormControl<boolean | null | undefined>,
	}
	export function CreateStopWorkstationRequestFormGroup() {
		return new FormGroup<StopWorkstationRequestFormProperties>({
			etag: new FormControl<string | null | undefined>(undefined),
			validateOnly: new FormControl<boolean | null | undefined>(undefined),
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
		 * Deletes the specified workstation.
		 * Delete v1/{name}
		 * @param {string} name Required. Name of the workstation to delete.
		 * @param {string} etag Optional. If set, the request will be rejected if the latest version of the workstation on the server does not have this ETag.
		 * @param {boolean} validateOnly Optional. If set, validate the request and preview the review, but do not actually apply it.
		 * @return {Operation} Successful response
		 */
		Workstations_projects_locations_workstationClusters_workstationConfigs_workstations_delete(name: string, etag: string | null | undefined, validateOnly: boolean | null | undefined): Observable<Operation> {
			return this.http.delete<Operation>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + '&etag=' + (etag == null ? '' : encodeURIComponent(etag)) + '&validateOnly=' + validateOnly, {});
		}

		/**
		 * Returns the requested workstation.
		 * Get v1/{name}
		 * @param {string} name Required. Name of the requested resource.
		 * @return {Workstation} Successful response
		 */
		Workstations_projects_locations_workstationClusters_workstationConfigs_workstations_get(name: string): Observable<Workstation> {
			return this.http.get<Workstation>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)), {});
		}

		/**
		 * Updates an existing workstation.
		 * Patch v1/{name}
		 * @param {string} name Identifier. Full name of this workstation.
		 * @param {boolean} allowMissing Optional. If set and the workstation configuration is not found, a new workstation configuration is created. In this situation, update_mask is ignored.
		 * @param {string} updateMask Required. Mask specifying which fields in the workstation configuration should be updated.
		 * @param {boolean} validateOnly Optional. If set, validate the request and preview the review, but do not actually apply it.
		 * @return {Operation} Successful response
		 */
		Workstations_projects_locations_workstationClusters_workstationConfigs_workstations_patch(name: string, allowMissing: boolean | null | undefined, updateMask: string | null | undefined, validateOnly: boolean | null | undefined, requestBody: Workstation): Observable<Operation> {
			return this.http.patch<Operation>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + '&allowMissing=' + allowMissing + '&updateMask=' + (updateMask == null ? '' : encodeURIComponent(updateMask)) + '&validateOnly=' + validateOnly, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
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
		Workstations_projects_locations_list(name: string, filter: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListLocationsResponse> {
			return this.http.get<ListLocationsResponse>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + '/locations&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
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
		Workstations_projects_locations_operations_list(name: string, filter: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListOperationsResponse> {
			return this.http.get<ListOperationsResponse>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + '/operations&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
		 * Post v1/{name}:cancel
		 * @param {string} name The name of the operation resource to be cancelled.
		 * @return {GoogleProtobufEmpty} Successful response
		 */
		Workstations_projects_locations_operations_cancel(name: string, requestBody: CancelOperationRequest): Observable<GoogleProtobufEmpty> {
			return this.http.post<GoogleProtobufEmpty>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + ':cancel', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Starts running a workstation so that users can connect to it.
		 * Post v1/{name}:start
		 * @param {string} name Required. Name of the workstation to start.
		 * @return {Operation} Successful response
		 */
		Workstations_projects_locations_workstationClusters_workstationConfigs_workstations_start(name: string, requestBody: StartWorkstationRequest): Observable<Operation> {
			return this.http.post<Operation>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + ':start', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Stops running a workstation, reducing costs.
		 * Post v1/{name}:stop
		 * @param {string} name Required. Name of the workstation to stop.
		 * @return {Operation} Successful response
		 */
		Workstations_projects_locations_workstationClusters_workstationConfigs_workstations_stop(name: string, requestBody: StopWorkstationRequest): Observable<Operation> {
			return this.http.post<Operation>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + ':stop', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns all workstation clusters in the specified location.
		 * Get v1/{parent}/workstationClusters
		 * @param {string} parent Required. Parent resource name.
		 * @param {number} pageSize Optional. Maximum number of items to return.
		 * @param {string} pageToken Optional. next_page_token value returned from a previous List request, if any.
		 * @return {ListWorkstationClustersResponse} Successful response
		 */
		Workstations_projects_locations_workstationClusters_list(parent: string, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListWorkstationClustersResponse> {
			return this.http.get<ListWorkstationClustersResponse>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/workstationClusters&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Creates a new workstation cluster.
		 * Post v1/{parent}/workstationClusters
		 * @param {string} parent Required. Parent resource name.
		 * @param {boolean} validateOnly Optional. If set, validate the request and preview the review, but do not actually apply it.
		 * @param {string} workstationClusterId Required. ID to use for the workstation cluster.
		 * @return {Operation} Successful response
		 */
		Workstations_projects_locations_workstationClusters_create(parent: string, validateOnly: boolean | null | undefined, workstationClusterId: string | null | undefined, requestBody: WorkstationCluster): Observable<Operation> {
			return this.http.post<Operation>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/workstationClusters&validateOnly=' + validateOnly + '&workstationClusterId=' + (workstationClusterId == null ? '' : encodeURIComponent(workstationClusterId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns all workstation configurations in the specified cluster.
		 * Get v1/{parent}/workstationConfigs
		 * @param {string} parent Required. Parent resource name.
		 * @param {number} pageSize Optional. Maximum number of items to return.
		 * @param {string} pageToken Optional. next_page_token value returned from a previous List request, if any.
		 * @return {ListWorkstationConfigsResponse} Successful response
		 */
		Workstations_projects_locations_workstationClusters_workstationConfigs_list(parent: string, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListWorkstationConfigsResponse> {
			return this.http.get<ListWorkstationConfigsResponse>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/workstationConfigs&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Creates a new workstation configuration.
		 * Post v1/{parent}/workstationConfigs
		 * @param {string} parent Required. Parent resource name.
		 * @param {boolean} validateOnly Optional. If set, validate the request and preview the review, but do not actually apply it.
		 * @param {string} workstationConfigId Required. ID to use for the workstation configuration.
		 * @return {Operation} Successful response
		 */
		Workstations_projects_locations_workstationClusters_workstationConfigs_create(parent: string, validateOnly: boolean | null | undefined, workstationConfigId: string | null | undefined, requestBody: WorkstationConfig): Observable<Operation> {
			return this.http.post<Operation>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/workstationConfigs&validateOnly=' + validateOnly + '&workstationConfigId=' + (workstationConfigId == null ? '' : encodeURIComponent(workstationConfigId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns all workstation configurations in the specified cluster on which the caller has the "workstations.workstation.create" permission.
		 * Get v1/{parent}/workstationConfigs:listUsable
		 * @param {string} parent Required. Parent resource name.
		 * @param {number} pageSize Optional. Maximum number of items to return.
		 * @param {string} pageToken Optional. next_page_token value returned from a previous List request, if any.
		 * @return {ListUsableWorkstationConfigsResponse} Successful response
		 */
		Workstations_projects_locations_workstationClusters_workstationConfigs_listUsable(parent: string, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListUsableWorkstationConfigsResponse> {
			return this.http.get<ListUsableWorkstationConfigsResponse>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/workstationConfigs:listUsable&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Returns all Workstations using the specified workstation configuration.
		 * Get v1/{parent}/workstations
		 * @param {string} parent Required. Parent resource name.
		 * @param {number} pageSize Optional. Maximum number of items to return.
		 * @param {string} pageToken Optional. next_page_token value returned from a previous List request, if any.
		 * @return {ListWorkstationsResponse} Successful response
		 */
		Workstations_projects_locations_workstationClusters_workstationConfigs_workstations_list(parent: string, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListWorkstationsResponse> {
			return this.http.get<ListWorkstationsResponse>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/workstations&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Creates a new workstation.
		 * Post v1/{parent}/workstations
		 * @param {string} parent Required. Parent resource name.
		 * @param {boolean} validateOnly Optional. If set, validate the request and preview the review, but do not actually apply it.
		 * @param {string} workstationId Required. ID to use for the workstation.
		 * @return {Operation} Successful response
		 */
		Workstations_projects_locations_workstationClusters_workstationConfigs_workstations_create(parent: string, validateOnly: boolean | null | undefined, workstationId: string | null | undefined, requestBody: Workstation): Observable<Operation> {
			return this.http.post<Operation>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/workstations&validateOnly=' + validateOnly + '&workstationId=' + (workstationId == null ? '' : encodeURIComponent(workstationId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns all workstations using the specified workstation configuration on which the caller has the "workstations.workstations.use" permission.
		 * Get v1/{parent}/workstations:listUsable
		 * @param {string} parent Required. Parent resource name.
		 * @param {number} pageSize Optional. Maximum number of items to return.
		 * @param {string} pageToken Optional. next_page_token value returned from a previous List request, if any.
		 * @return {ListUsableWorkstationsResponse} Successful response
		 */
		Workstations_projects_locations_workstationClusters_workstationConfigs_workstations_listUsable(parent: string, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListUsableWorkstationsResponse> {
			return this.http.get<ListUsableWorkstationsResponse>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/workstations:listUsable&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
		 * Get v1/{resource}:getIamPolicy
		 * @param {string} resource REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
		 * @param {number} options_requestedPolicyVersion Optional. The maximum policy version that will be used to format the policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset. The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies).
		 * @return {Policy} Successful response
		 */
		Workstations_projects_locations_workstationClusters_workstationConfigs_workstations_getIamPolicy(resource: string, options_requestedPolicyVersion: number | null | undefined): Observable<Policy> {
			return this.http.get<Policy>(this.baseUri + 'v1/' + (resource == null ? '' : encodeURIComponent(resource)) + ':getIamPolicy&options_requestedPolicyVersion=' + options_requestedPolicyVersion, {});
		}

		/**
		 * Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
		 * Post v1/{resource}:setIamPolicy
		 * @param {string} resource REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
		 * @return {Policy} Successful response
		 */
		Workstations_projects_locations_workstationClusters_workstationConfigs_workstations_setIamPolicy(resource: string, requestBody: SetIamPolicyRequest): Observable<Policy> {
			return this.http.post<Policy>(this.baseUri + 'v1/' + (resource == null ? '' : encodeURIComponent(resource)) + ':setIamPolicy', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
		 * Post v1/{resource}:testIamPermissions
		 * @param {string} resource REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
		 * @return {TestIamPermissionsResponse} Successful response
		 */
		Workstations_projects_locations_workstationClusters_workstationConfigs_workstations_testIamPermissions(resource: string, requestBody: TestIamPermissionsRequest): Observable<TestIamPermissionsResponse> {
			return this.http.post<TestIamPermissionsResponse>(this.baseUri + 'v1/' + (resource == null ? '' : encodeURIComponent(resource)) + ':testIamPermissions', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns a short-lived credential that can be used to send authenticated and authorized traffic to a workstation.
		 * Post v1/{workstation}:generateAccessToken
		 * @param {string} workstation Required. Name of the workstation for which the access token should be generated.
		 * @return {GenerateAccessTokenResponse} Successful response
		 */
		Workstations_projects_locations_workstationClusters_workstationConfigs_workstations_generateAccessToken(workstation: string, requestBody: GenerateAccessTokenRequest): Observable<GenerateAccessTokenResponse> {
			return this.http.post<GenerateAccessTokenResponse>(this.baseUri + 'v1/' + (workstation == null ? '' : encodeURIComponent(workstation)) + ':generateAccessToken', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

}

