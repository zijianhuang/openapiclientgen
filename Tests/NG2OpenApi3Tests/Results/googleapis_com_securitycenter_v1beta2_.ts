import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** Represents an access event. */
	export interface Access {

		/** Caller's IP address, such as "1.1.1.1". */
		callerIp?: string | null;

		/** Represents a geographical location for a given access. */
		callerIpGeo?: Geolocation;

		/** The method that the service account called, e.g. "SetIamPolicy". */
		methodName?: string | null;

		/** Associated email, such as "foo@google.com". The email address of the authenticated user or a service account acting on behalf of a third party principal making the request. For third party identity callers, the `principal_subject` field is populated instead of this field. For privacy reasons, the principal email address is sometimes redacted. For more information, see [Caller identities in audit logs](https://cloud.google.com/logging/docs/audit#user-id). */
		principalEmail?: string | null;

		/** A string that represents the principal_subject that is associated with the identity. Unlike `principal_email`, `principal_subject` supports principals that aren't associated with email addresses, such as third party principals. For most identities, the format is `principal://iam.googleapis.com/{identity pool name}/subject/{subject}`. Some GKE identities, such as GKE_WORKLOAD, FREEFORM, and GKE_HUB_WORKLOAD, still use the legacy format `serviceAccount:{identity pool name}[{subject}]`. */
		principalSubject?: string | null;

		/** The identity delegation history of an authenticated service account that made the request. The `serviceAccountDelegationInfo[]` object contains information about the real authorities that try to access Google Cloud resources by delegating on a service account. When multiple authorities are present, they are guaranteed to be sorted based on the original ordering of the identity delegation events. */
		serviceAccountDelegationInfo?: Array<ServiceAccountDelegationInfo>;

		/** The name of the service account key that was used to create or exchange credentials when authenticating the service account that made the request. This is a scheme-less URI full resource name. For example: "//iam.googleapis.com/projects/{PROJECT_ID}/serviceAccounts/{ACCOUNT}/keys/{key}". */
		serviceAccountKeyName?: string | null;

		/** This is the API service that the service account made a call to, e.g. "iam.googleapis.com" */
		serviceName?: string | null;

		/** The caller's user agent string associated with the finding. */
		userAgent?: string | null;

		/** Type of user agent associated with the finding. For example, an operating system shell or an embedded or standalone application. */
		userAgentFamily?: string | null;

		/** A string that represents a username. The username provided depends on the type of the finding and is likely not an IAM principal. For example, this can be a system username if the finding is related to a virtual machine, or it can be an application login username. */
		userName?: string | null;
	}

	/** Represents an access event. */
	export interface AccessFormProperties {

		/** Caller's IP address, such as "1.1.1.1". */
		callerIp: FormControl<string | null | undefined>,

		/** The method that the service account called, e.g. "SetIamPolicy". */
		methodName: FormControl<string | null | undefined>,

		/** Associated email, such as "foo@google.com". The email address of the authenticated user or a service account acting on behalf of a third party principal making the request. For third party identity callers, the `principal_subject` field is populated instead of this field. For privacy reasons, the principal email address is sometimes redacted. For more information, see [Caller identities in audit logs](https://cloud.google.com/logging/docs/audit#user-id). */
		principalEmail: FormControl<string | null | undefined>,

		/** A string that represents the principal_subject that is associated with the identity. Unlike `principal_email`, `principal_subject` supports principals that aren't associated with email addresses, such as third party principals. For most identities, the format is `principal://iam.googleapis.com/{identity pool name}/subject/{subject}`. Some GKE identities, such as GKE_WORKLOAD, FREEFORM, and GKE_HUB_WORKLOAD, still use the legacy format `serviceAccount:{identity pool name}[{subject}]`. */
		principalSubject: FormControl<string | null | undefined>,

		/** The name of the service account key that was used to create or exchange credentials when authenticating the service account that made the request. This is a scheme-less URI full resource name. For example: "//iam.googleapis.com/projects/{PROJECT_ID}/serviceAccounts/{ACCOUNT}/keys/{key}". */
		serviceAccountKeyName: FormControl<string | null | undefined>,

		/** This is the API service that the service account made a call to, e.g. "iam.googleapis.com" */
		serviceName: FormControl<string | null | undefined>,

		/** The caller's user agent string associated with the finding. */
		userAgent: FormControl<string | null | undefined>,

		/** Type of user agent associated with the finding. For example, an operating system shell or an embedded or standalone application. */
		userAgentFamily: FormControl<string | null | undefined>,

		/** A string that represents a username. The username provided depends on the type of the finding and is likely not an IAM principal. For example, this can be a system username if the finding is related to a virtual machine, or it can be an application login username. */
		userName: FormControl<string | null | undefined>,
	}
	export function CreateAccessFormGroup() {
		return new FormGroup<AccessFormProperties>({
			callerIp: new FormControl<string | null | undefined>(undefined),
			methodName: new FormControl<string | null | undefined>(undefined),
			principalEmail: new FormControl<string | null | undefined>(undefined),
			principalSubject: new FormControl<string | null | undefined>(undefined),
			serviceAccountKeyName: new FormControl<string | null | undefined>(undefined),
			serviceName: new FormControl<string | null | undefined>(undefined),
			userAgent: new FormControl<string | null | undefined>(undefined),
			userAgentFamily: new FormControl<string | null | undefined>(undefined),
			userName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents a geographical location for a given access. */
	export interface Geolocation {

		/** A CLDR. */
		regionCode?: string | null;
	}

	/** Represents a geographical location for a given access. */
	export interface GeolocationFormProperties {

		/** A CLDR. */
		regionCode: FormControl<string | null | undefined>,
	}
	export function CreateGeolocationFormGroup() {
		return new FormGroup<GeolocationFormProperties>({
			regionCode: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Identity delegation history of an authenticated service account. */
	export interface ServiceAccountDelegationInfo {

		/** The email address of a Google account. */
		principalEmail?: string | null;

		/** A string representing the principal_subject associated with the identity. As compared to `principal_email`, supports principals that aren't associated with email addresses, such as third party principals. For most identities, the format will be `principal://iam.googleapis.com/{identity pool name}/subjects/{subject}` except for some GKE identities (GKE_WORKLOAD, FREEFORM, GKE_HUB_WORKLOAD) that are still in the legacy format `serviceAccount:{identity pool name}[{subject}]` */
		principalSubject?: string | null;
	}

	/** Identity delegation history of an authenticated service account. */
	export interface ServiceAccountDelegationInfoFormProperties {

		/** The email address of a Google account. */
		principalEmail: FormControl<string | null | undefined>,

		/** A string representing the principal_subject associated with the identity. As compared to `principal_email`, supports principals that aren't associated with email addresses, such as third party principals. For most identities, the format will be `principal://iam.googleapis.com/{identity pool name}/subjects/{subject}` except for some GKE identities (GKE_WORKLOAD, FREEFORM, GKE_HUB_WORKLOAD) that are still in the legacy format `serviceAccount:{identity pool name}[{subject}]` */
		principalSubject: FormControl<string | null | undefined>,
	}
	export function CreateServiceAccountDelegationInfoFormGroup() {
		return new FormGroup<ServiceAccountDelegationInfoFormProperties>({
			principalEmail: new FormControl<string | null | undefined>(undefined),
			principalSubject: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Conveys information about a Kubernetes access review (such as one returned by a [`kubectl auth can-i`](https://kubernetes.io/docs/reference/access-authn-authz/authorization/#checking-api-access) command) that was involved in a finding. */
	export interface AccessReview {

		/** The API group of the resource. "*" means all. */
		group?: string | null;

		/** The name of the resource being requested. Empty means all. */
		name?: string | null;

		/** Namespace of the action being requested. Currently, there is no distinction between no namespace and all namespaces. Both are represented by "" (empty). */
		ns?: string | null;

		/** The optional resource type requested. "*" means all. */
		resource?: string | null;

		/** The optional subresource type. */
		subresource?: string | null;

		/** A Kubernetes resource API verb, like get, list, watch, create, update, delete, proxy. "*" means all. */
		verb?: string | null;

		/** The API version of the resource. "*" means all. */
		version?: string | null;
	}

	/** Conveys information about a Kubernetes access review (such as one returned by a [`kubectl auth can-i`](https://kubernetes.io/docs/reference/access-authn-authz/authorization/#checking-api-access) command) that was involved in a finding. */
	export interface AccessReviewFormProperties {

		/** The API group of the resource. "*" means all. */
		group: FormControl<string | null | undefined>,

		/** The name of the resource being requested. Empty means all. */
		name: FormControl<string | null | undefined>,

		/** Namespace of the action being requested. Currently, there is no distinction between no namespace and all namespaces. Both are represented by "" (empty). */
		ns: FormControl<string | null | undefined>,

		/** The optional resource type requested. "*" means all. */
		resource: FormControl<string | null | undefined>,

		/** The optional subresource type. */
		subresource: FormControl<string | null | undefined>,

		/** A Kubernetes resource API verb, like get, list, watch, create, update, delete, proxy. "*" means all. */
		verb: FormControl<string | null | undefined>,

		/** The API version of the resource. "*" means all. */
		version: FormControl<string | null | undefined>,
	}
	export function CreateAccessReviewFormGroup() {
		return new FormGroup<AccessReviewFormProperties>({
			group: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			ns: new FormControl<string | null | undefined>(undefined),
			resource: new FormControl<string | null | undefined>(undefined),
			subresource: new FormControl<string | null | undefined>(undefined),
			verb: new FormControl<string | null | undefined>(undefined),
			version: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents an application associated with a finding. */
	export interface Application {

		/** The base URI that identifies the network location of the application in which the vulnerability was detected. Examples: http://11.22.33.44, http://foo.com, http://11.22.33.44:8080 */
		baseUri?: string | null;

		/** The full URI with payload that can be used to reproduce the vulnerability. Example: http://11.22.33.44/reflected/parameter/attribute/singlequoted/js?p=aMmYgI6H */
		fullUri?: string | null;
	}

	/** Represents an application associated with a finding. */
	export interface ApplicationFormProperties {

		/** The base URI that identifies the network location of the application in which the vulnerability was detected. Examples: http://11.22.33.44, http://foo.com, http://11.22.33.44:8080 */
		baseUri: FormControl<string | null | undefined>,

		/** The full URI with payload that can be used to reproduce the vulnerability. Example: http://11.22.33.44/reflected/parameter/attribute/singlequoted/js?p=aMmYgI6H */
		fullUri: FormControl<string | null | undefined>,
	}
	export function CreateApplicationFormGroup() {
		return new FormGroup<ApplicationFormProperties>({
			baseUri: new FormControl<string | null | undefined>(undefined),
			fullUri: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An attack exposure contains the results of an attack path simulation run. */
	export interface AttackExposure {

		/** The resource name of the attack path simulation result that contains the details regarding this attack exposure score. Example: organizations/123/attackExposureResults/456 */
		attackExposureResult?: string | null;

		/**
		 * The number of high value resources that are exposed as a result of this finding.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		exposedHighValueResourcesCount?: number | null;

		/**
		 * The number of high value resources that are exposed as a result of this finding.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		exposedLowValueResourcesCount?: number | null;

		/**
		 * The number of medium value resources that are exposed as a result of this finding.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		exposedMediumValueResourcesCount?: number | null;

		/** The most recent time the attack exposure was updated on this finding. */
		latestCalculationTime?: string | null;

		/**
		 * A number between 0 (inclusive) and infinity that represents how important this finding is to remediate. The higher the score, the more important it is to remediate.
		 * Type: double
		 */
		score?: number | null;

		/** What state this AttackExposure is in. This captures whether or not an attack exposure has been calculated or not. */
		state?: AttackExposureState | null;
	}

	/** An attack exposure contains the results of an attack path simulation run. */
	export interface AttackExposureFormProperties {

		/** The resource name of the attack path simulation result that contains the details regarding this attack exposure score. Example: organizations/123/attackExposureResults/456 */
		attackExposureResult: FormControl<string | null | undefined>,

		/**
		 * The number of high value resources that are exposed as a result of this finding.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		exposedHighValueResourcesCount: FormControl<number | null | undefined>,

		/**
		 * The number of high value resources that are exposed as a result of this finding.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		exposedLowValueResourcesCount: FormControl<number | null | undefined>,

		/**
		 * The number of medium value resources that are exposed as a result of this finding.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		exposedMediumValueResourcesCount: FormControl<number | null | undefined>,

		/** The most recent time the attack exposure was updated on this finding. */
		latestCalculationTime: FormControl<string | null | undefined>,

		/**
		 * A number between 0 (inclusive) and infinity that represents how important this finding is to remediate. The higher the score, the more important it is to remediate.
		 * Type: double
		 */
		score: FormControl<number | null | undefined>,

		/** What state this AttackExposure is in. This captures whether or not an attack exposure has been calculated or not. */
		state: FormControl<AttackExposureState | null | undefined>,
	}
	export function CreateAttackExposureFormGroup() {
		return new FormGroup<AttackExposureFormProperties>({
			attackExposureResult: new FormControl<string | null | undefined>(undefined),
			exposedHighValueResourcesCount: new FormControl<number | null | undefined>(undefined),
			exposedLowValueResourcesCount: new FormControl<number | null | undefined>(undefined),
			exposedMediumValueResourcesCount: new FormControl<number | null | undefined>(undefined),
			latestCalculationTime: new FormControl<string | null | undefined>(undefined),
			score: new FormControl<number | null | undefined>(undefined),
			state: new FormControl<AttackExposureState | null | undefined>(undefined),
		});

	}

	export enum AttackExposureState { STATE_UNSPECIFIED = 'STATE_UNSPECIFIED', CALCULATED = 'CALCULATED', NOT_CALCULATED = 'NOT_CALCULATED' }


	/** Information related to Google Cloud Backup and DR Service findings. */
	export interface BackupDisasterRecovery {

		/** The name of the Backup and DR appliance that captures, moves, and manages the lifecycle of backup data. For example, “backup-server-57137”. */
		appliance?: string | null;

		/** The names of Backup and DR applications. An application is a VM, database, or file system on a managed host monitored by a backup and recovery appliance. For example, “centos7-01-vol00”, “centos7-01-vol01”, “centos7-01-vol02”. */
		applications?: Array<string>;

		/** The timestamp at which the Backup and DR backup was created. */
		backupCreateTime?: string | null;

		/** The name of a Backup and DR template which comprises one or more backup policies. See the [Backup and DR documentation](https://cloud.google.com/backup-disaster-recovery/docs/concepts/backup-plan#temp) for more information. For example, “snap-ov”. */
		backupTemplate?: string | null;

		/** The backup type of the Backup and DR image. For example, “Snapshot”, “Remote Snapshot”, “OnVault”. */
		backupType?: string | null;

		/** The name of a Backup and DR host, which is managed by the backup and recovery appliance and known to the management console. The host can be of type Generic (for example, Compute Engine, SQL Server, Oracle DB, SMB file system, etc.), vCenter, or an ESX server. See the [Backup and DR documentation on hosts](https://cloud.google.com/backup-disaster-recovery/docs/configuration/manage-hosts-and-their-applications) for more information. For example, “centos7-01”. */
		host?: string | null;

		/** The names of Backup and DR policies that are associated with a template and that define when to run a backup, how frequently to run a backup, and how long to retain the backup image. For example, “onvaults”. */
		policies?: Array<string>;

		/** The names of Backup and DR advanced policy options of a policy applying to an application. See the [Backup and DR documentation on policy options](https://cloud.google.com/backup-disaster-recovery/docs/create-plan/policy-settings). For example, “skipofflineappsincongrp, nounmap”. */
		policyOptions?: Array<string>;

		/** The name of the Backup and DR resource profile that specifies the storage media for backups of application and VM data. See the [Backup and DR documentation on profiles](https://cloud.google.com/backup-disaster-recovery/docs/concepts/backup-plan#profile). For example, “GCP”. */
		profile?: string | null;

		/** The name of the Backup and DR storage pool that the backup and recovery appliance is storing data in. The storage pool could be of type Cloud, Primary, Snapshot, or OnVault. See the [Backup and DR documentation on storage pools](https://cloud.google.com/backup-disaster-recovery/docs/concepts/storage-pools). For example, “DiskPoolOne”. */
		storagePool?: string | null;
	}

	/** Information related to Google Cloud Backup and DR Service findings. */
	export interface BackupDisasterRecoveryFormProperties {

		/** The name of the Backup and DR appliance that captures, moves, and manages the lifecycle of backup data. For example, “backup-server-57137”. */
		appliance: FormControl<string | null | undefined>,

		/** The timestamp at which the Backup and DR backup was created. */
		backupCreateTime: FormControl<string | null | undefined>,

		/** The name of a Backup and DR template which comprises one or more backup policies. See the [Backup and DR documentation](https://cloud.google.com/backup-disaster-recovery/docs/concepts/backup-plan#temp) for more information. For example, “snap-ov”. */
		backupTemplate: FormControl<string | null | undefined>,

		/** The backup type of the Backup and DR image. For example, “Snapshot”, “Remote Snapshot”, “OnVault”. */
		backupType: FormControl<string | null | undefined>,

		/** The name of a Backup and DR host, which is managed by the backup and recovery appliance and known to the management console. The host can be of type Generic (for example, Compute Engine, SQL Server, Oracle DB, SMB file system, etc.), vCenter, or an ESX server. See the [Backup and DR documentation on hosts](https://cloud.google.com/backup-disaster-recovery/docs/configuration/manage-hosts-and-their-applications) for more information. For example, “centos7-01”. */
		host: FormControl<string | null | undefined>,

		/** The name of the Backup and DR resource profile that specifies the storage media for backups of application and VM data. See the [Backup and DR documentation on profiles](https://cloud.google.com/backup-disaster-recovery/docs/concepts/backup-plan#profile). For example, “GCP”. */
		profile: FormControl<string | null | undefined>,

		/** The name of the Backup and DR storage pool that the backup and recovery appliance is storing data in. The storage pool could be of type Cloud, Primary, Snapshot, or OnVault. See the [Backup and DR documentation on storage pools](https://cloud.google.com/backup-disaster-recovery/docs/concepts/storage-pools). For example, “DiskPoolOne”. */
		storagePool: FormControl<string | null | undefined>,
	}
	export function CreateBackupDisasterRecoveryFormGroup() {
		return new FormGroup<BackupDisasterRecoveryFormProperties>({
			appliance: new FormControl<string | null | undefined>(undefined),
			backupCreateTime: new FormControl<string | null | undefined>(undefined),
			backupTemplate: new FormControl<string | null | undefined>(undefined),
			backupType: new FormControl<string | null | undefined>(undefined),
			host: new FormControl<string | null | undefined>(undefined),
			profile: new FormControl<string | null | undefined>(undefined),
			storagePool: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The [data profile](https://cloud.google.com/dlp/docs/data-profiles) associated with the finding. */
	export interface CloudDlpDataProfile {

		/** Name of the data profile, for example, `projects/123/locations/europe/tableProfiles/8383929`. */
		dataProfile?: string | null;

		/** The resource hierarchy level at which the data profile was generated. */
		parentType?: CloudDlpDataProfileParentType | null;
	}

	/** The [data profile](https://cloud.google.com/dlp/docs/data-profiles) associated with the finding. */
	export interface CloudDlpDataProfileFormProperties {

		/** Name of the data profile, for example, `projects/123/locations/europe/tableProfiles/8383929`. */
		dataProfile: FormControl<string | null | undefined>,

		/** The resource hierarchy level at which the data profile was generated. */
		parentType: FormControl<CloudDlpDataProfileParentType | null | undefined>,
	}
	export function CreateCloudDlpDataProfileFormGroup() {
		return new FormGroup<CloudDlpDataProfileFormProperties>({
			dataProfile: new FormControl<string | null | undefined>(undefined),
			parentType: new FormControl<CloudDlpDataProfileParentType | null | undefined>(undefined),
		});

	}

	export enum CloudDlpDataProfileParentType { PARENT_TYPE_UNSPECIFIED = 'PARENT_TYPE_UNSPECIFIED', ORGANIZATION = 'ORGANIZATION', PROJECT = 'PROJECT' }


	/** Details about the Cloud Data Loss Prevention (Cloud DLP) [inspection job](https://cloud.google.com/dlp/docs/concepts-job-triggers) that produced the finding. */
	export interface CloudDlpInspection {

		/** Whether Cloud DLP scanned the complete resource or a sampled subset. */
		fullScan?: boolean | null;

		/** The type of information (or *[infoType](https://cloud.google.com/dlp/docs/infotypes-reference)*) found, for example, `EMAIL_ADDRESS` or `STREET_ADDRESS`. */
		infoType?: string | null;

		/** The number of times Cloud DLP found this infoType within this job and resource. */
		infoTypeCount?: string | null;

		/** Name of the inspection job, for example, `projects/123/locations/europe/dlpJobs/i-8383929`. */
		inspectJob?: string | null;
	}

	/** Details about the Cloud Data Loss Prevention (Cloud DLP) [inspection job](https://cloud.google.com/dlp/docs/concepts-job-triggers) that produced the finding. */
	export interface CloudDlpInspectionFormProperties {

		/** Whether Cloud DLP scanned the complete resource or a sampled subset. */
		fullScan: FormControl<boolean | null | undefined>,

		/** The type of information (or *[infoType](https://cloud.google.com/dlp/docs/infotypes-reference)*) found, for example, `EMAIL_ADDRESS` or `STREET_ADDRESS`. */
		infoType: FormControl<string | null | undefined>,

		/** The number of times Cloud DLP found this infoType within this job and resource. */
		infoTypeCount: FormControl<string | null | undefined>,

		/** Name of the inspection job, for example, `projects/123/locations/europe/dlpJobs/i-8383929`. */
		inspectJob: FormControl<string | null | undefined>,
	}
	export function CreateCloudDlpInspectionFormGroup() {
		return new FormGroup<CloudDlpInspectionFormProperties>({
			fullScan: new FormControl<boolean | null | undefined>(undefined),
			infoType: new FormControl<string | null | undefined>(undefined),
			infoTypeCount: new FormControl<string | null | undefined>(undefined),
			inspectJob: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Metadata taken from a [Cloud Logging LogEntry](https://cloud.google.com/logging/docs/reference/v2/rest/v2/LogEntry) */
	export interface CloudLoggingEntry {

		/** A unique identifier for the log entry. */
		insertId?: string | null;

		/** The type of the log (part of `log_name`. `log_name` is the resource name of the log to which this log entry belongs). For example: `cloudresourcemanager.googleapis.com/activity`. Note that this field is not URL-encoded, unlike the `LOG_ID` field in `LogEntry`. */
		logId?: string | null;

		/** The organization, folder, or project of the monitored resource that produced this log entry. */
		resourceContainer?: string | null;

		/** The time the event described by the log entry occurred. */
		timestamp?: string | null;
	}

	/** Metadata taken from a [Cloud Logging LogEntry](https://cloud.google.com/logging/docs/reference/v2/rest/v2/LogEntry) */
	export interface CloudLoggingEntryFormProperties {

		/** A unique identifier for the log entry. */
		insertId: FormControl<string | null | undefined>,

		/** The type of the log (part of `log_name`. `log_name` is the resource name of the log to which this log entry belongs). For example: `cloudresourcemanager.googleapis.com/activity`. Note that this field is not URL-encoded, unlike the `LOG_ID` field in `LogEntry`. */
		logId: FormControl<string | null | undefined>,

		/** The organization, folder, or project of the monitored resource that produced this log entry. */
		resourceContainer: FormControl<string | null | undefined>,

		/** The time the event described by the log entry occurred. */
		timestamp: FormControl<string | null | undefined>,
	}
	export function CreateCloudLoggingEntryFormGroup() {
		return new FormGroup<CloudLoggingEntryFormProperties>({
			insertId: new FormControl<string | null | undefined>(undefined),
			logId: new FormControl<string | null | undefined>(undefined),
			resourceContainer: new FormControl<string | null | undefined>(undefined),
			timestamp: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains compliance information about a security standard indicating unmet recommendations. */
	export interface Compliance {

		/** Policies within the standard or benchmark, for example, A.12.4.1 */
		ids?: Array<string>;

		/** Industry-wide compliance standards or benchmarks, such as CIS, PCI, and OWASP. */
		standard?: string | null;

		/** Version of the standard or benchmark, for example, 1.1 */
		version?: string | null;
	}

	/** Contains compliance information about a security standard indicating unmet recommendations. */
	export interface ComplianceFormProperties {

		/** Industry-wide compliance standards or benchmarks, such as CIS, PCI, and OWASP. */
		standard: FormControl<string | null | undefined>,

		/** Version of the standard or benchmark, for example, 1.1 */
		version: FormControl<string | null | undefined>,
	}
	export function CreateComplianceFormGroup() {
		return new FormGroup<ComplianceFormProperties>({
			standard: new FormControl<string | null | undefined>(undefined),
			version: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Configuration of a module. */
	export interface Config {

		/** The state of enablement for the module at its level of the resource hierarchy. */
		moduleEnablementState?: ConfigModuleEnablementState | null;

		/** The configuration value for the module. The absence of this field implies its inheritance from the parent. */
		value?: {[id: string]: any };
	}

	/** Configuration of a module. */
	export interface ConfigFormProperties {

		/** The state of enablement for the module at its level of the resource hierarchy. */
		moduleEnablementState: FormControl<ConfigModuleEnablementState | null | undefined>,

		/** The configuration value for the module. The absence of this field implies its inheritance from the parent. */
		value: FormControl<{[id: string]: any } | null | undefined>,
	}
	export function CreateConfigFormGroup() {
		return new FormGroup<ConfigFormProperties>({
			moduleEnablementState: new FormControl<ConfigModuleEnablementState | null | undefined>(undefined),
			value: new FormControl<{[id: string]: any } | null | undefined>(undefined),
		});

	}

	export enum ConfigModuleEnablementState { ENABLEMENT_STATE_UNSPECIFIED = 'ENABLEMENT_STATE_UNSPECIFIED', INHERITED = 'INHERITED', ENABLED = 'ENABLED', DISABLED = 'DISABLED' }


	/** Contains information about the IP connection associated with the finding. */
	export interface Connection {

		/** Destination IP address. Not present for sockets that are listening and not connected. */
		destinationIp?: string | null;

		/**
		 * Destination port. Not present for sockets that are listening and not connected.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		destinationPort?: number | null;

		/** IANA Internet Protocol Number such as TCP(6) and UDP(17). */
		protocol?: ConnectionProtocol | null;

		/** Source IP address. */
		sourceIp?: string | null;

		/**
		 * Source port.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		sourcePort?: number | null;
	}

	/** Contains information about the IP connection associated with the finding. */
	export interface ConnectionFormProperties {

		/** Destination IP address. Not present for sockets that are listening and not connected. */
		destinationIp: FormControl<string | null | undefined>,

		/**
		 * Destination port. Not present for sockets that are listening and not connected.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		destinationPort: FormControl<number | null | undefined>,

		/** IANA Internet Protocol Number such as TCP(6) and UDP(17). */
		protocol: FormControl<ConnectionProtocol | null | undefined>,

		/** Source IP address. */
		sourceIp: FormControl<string | null | undefined>,

		/**
		 * Source port.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		sourcePort: FormControl<number | null | undefined>,
	}
	export function CreateConnectionFormGroup() {
		return new FormGroup<ConnectionFormProperties>({
			destinationIp: new FormControl<string | null | undefined>(undefined),
			destinationPort: new FormControl<number | null | undefined>(undefined),
			protocol: new FormControl<ConnectionProtocol | null | undefined>(undefined),
			sourceIp: new FormControl<string | null | undefined>(undefined),
			sourcePort: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum ConnectionProtocol { PROTOCOL_UNSPECIFIED = 'PROTOCOL_UNSPECIFIED', ICMP = 'ICMP', TCP = 'TCP', UDP = 'UDP', GRE = 'GRE', ESP = 'ESP' }


	/** The email address of a contact. */
	export interface Contact {

		/** An email address. For example, "`person123@company.com`". */
		email?: string | null;
	}

	/** The email address of a contact. */
	export interface ContactFormProperties {

		/** An email address. For example, "`person123@company.com`". */
		email: FormControl<string | null | undefined>,
	}
	export function CreateContactFormGroup() {
		return new FormGroup<ContactFormProperties>({
			email: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Details about specific contacts */
	export interface ContactDetails {

		/** A list of contacts */
		contacts?: Array<Contact>;
	}

	/** Details about specific contacts */
	export interface ContactDetailsFormProperties {
	}
	export function CreateContactDetailsFormGroup() {
		return new FormGroup<ContactDetailsFormProperties>({
		});

	}


	/** Container associated with the finding. */
	export interface Container {

		/** The time that the container was created. */
		createTime?: string | null;

		/** Optional container image ID, if provided by the container runtime. Uniquely identifies the container image launched using a container image digest. */
		imageId?: string | null;

		/** Container labels, as provided by the container runtime. */
		labels?: Array<Label>;

		/** Name of the container. */
		name?: string | null;

		/** Container image URI provided when configuring a pod or container. This string can identify a container image version using mutable tags. */
		uri?: string | null;
	}

	/** Container associated with the finding. */
	export interface ContainerFormProperties {

		/** The time that the container was created. */
		createTime: FormControl<string | null | undefined>,

		/** Optional container image ID, if provided by the container runtime. Uniquely identifies the container image launched using a container image digest. */
		imageId: FormControl<string | null | undefined>,

		/** Name of the container. */
		name: FormControl<string | null | undefined>,

		/** Container image URI provided when configuring a pod or container. This string can identify a container image version using mutable tags. */
		uri: FormControl<string | null | undefined>,
	}
	export function CreateContainerFormGroup() {
		return new FormGroup<ContainerFormProperties>({
			createTime: new FormControl<string | null | undefined>(undefined),
			imageId: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			uri: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents a generic name-value label. A label has separate name and value fields to support filtering with the `contains()` function. For more information, see [Filtering on array-type fields](https://cloud.google.com/security-command-center/docs/how-to-api-list-findings#array-contains-filtering). */
	export interface Label {

		/** Name of the label. */
		name?: string | null;

		/** Value that corresponds to the label's name. */
		value?: string | null;
	}

	/** Represents a generic name-value label. A label has separate name and value fields to support filtering with the `contains()` function. For more information, see [Filtering on array-type fields](https://cloud.google.com/security-command-center/docs/how-to-api-list-findings#array-contains-filtering). */
	export interface LabelFormProperties {

		/** Name of the label. */
		name: FormControl<string | null | undefined>,

		/** Value that corresponds to the label's name. */
		value: FormControl<string | null | undefined>,
	}
	export function CreateLabelFormGroup() {
		return new FormGroup<LabelFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Resource capturing the settings for the Container Threat Detection service. */
	export interface ContainerThreatDetectionSettings {

		/** The configurations including the state of enablement for the service's different modules. The absence of a module in the map implies its configuration is inherited from its parent's. */
		modules?: {[id: string]: Config };

		/** The resource name of the ContainerThreatDetectionSettings. Formats: * organizations/{organization}/containerThreatDetectionSettings * folders/{folder}/containerThreatDetectionSettings * projects/{project}/containerThreatDetectionSettings * projects/{project}/locations/{location}/clusters/{cluster}/containerThreatDetectionSettings */
		name?: string | null;

		/** Output only. The service account used by Container Threat Detection for scanning. Service accounts are scoped at the project level meaning this field will be empty at any level above a project. */
		serviceAccount?: string | null;

		/** The state of enablement for the service at its level of the resource hierarchy. A DISABLED state will override all module enablement_states to DISABLED. */
		serviceEnablementState?: ConfigModuleEnablementState | null;

		/** Output only. The time the settings were last updated. */
		updateTime?: string | null;
	}

	/** Resource capturing the settings for the Container Threat Detection service. */
	export interface ContainerThreatDetectionSettingsFormProperties {

		/** The configurations including the state of enablement for the service's different modules. The absence of a module in the map implies its configuration is inherited from its parent's. */
		modules: FormControl<{[id: string]: Config } | null | undefined>,

		/** The resource name of the ContainerThreatDetectionSettings. Formats: * organizations/{organization}/containerThreatDetectionSettings * folders/{folder}/containerThreatDetectionSettings * projects/{project}/containerThreatDetectionSettings * projects/{project}/locations/{location}/clusters/{cluster}/containerThreatDetectionSettings */
		name: FormControl<string | null | undefined>,

		/** Output only. The service account used by Container Threat Detection for scanning. Service accounts are scoped at the project level meaning this field will be empty at any level above a project. */
		serviceAccount: FormControl<string | null | undefined>,

		/** The state of enablement for the service at its level of the resource hierarchy. A DISABLED state will override all module enablement_states to DISABLED. */
		serviceEnablementState: FormControl<ConfigModuleEnablementState | null | undefined>,

		/** Output only. The time the settings were last updated. */
		updateTime: FormControl<string | null | undefined>,
	}
	export function CreateContainerThreatDetectionSettingsFormGroup() {
		return new FormGroup<ContainerThreatDetectionSettingsFormProperties>({
			modules: new FormControl<{[id: string]: Config } | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			serviceAccount: new FormControl<string | null | undefined>(undefined),
			serviceEnablementState: new FormControl<ConfigModuleEnablementState | null | undefined>(undefined),
			updateTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** CVE stands for Common Vulnerabilities and Exposures. More information: https://cve.mitre.org */
	export interface Cve {

		/** Common Vulnerability Scoring System version 3. */
		cvssv3?: Cvssv3;

		/** The unique identifier for the vulnerability. e.g. CVE-2021-34527 */
		id?: string | null;

		/** Additional information about the CVE. e.g. https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2021-34527 */
		references?: Array<Reference>;

		/** Whether upstream fix is available for the CVE. */
		upstreamFixAvailable?: boolean | null;
	}

	/** CVE stands for Common Vulnerabilities and Exposures. More information: https://cve.mitre.org */
	export interface CveFormProperties {

		/** The unique identifier for the vulnerability. e.g. CVE-2021-34527 */
		id: FormControl<string | null | undefined>,

		/** Whether upstream fix is available for the CVE. */
		upstreamFixAvailable: FormControl<boolean | null | undefined>,
	}
	export function CreateCveFormGroup() {
		return new FormGroup<CveFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			upstreamFixAvailable: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Common Vulnerability Scoring System version 3. */
	export interface Cvssv3 {

		/** This metric describes the conditions beyond the attacker's control that must exist in order to exploit the vulnerability. */
		attackComplexity?: Cvssv3AttackComplexity | null;

		/** Base Metrics Represents the intrinsic characteristics of a vulnerability that are constant over time and across user environments. This metric reflects the context by which vulnerability exploitation is possible. */
		attackVector?: Cvssv3AttackVector | null;

		/** This metric measures the impact to the availability of the impacted component resulting from a successfully exploited vulnerability. */
		availabilityImpact?: Cvssv3AvailabilityImpact | null;

		/**
		 * The base score is a function of the base metric scores.
		 * Type: double
		 */
		baseScore?: number | null;

		/** This metric measures the impact to the confidentiality of the information resources managed by a software component due to a successfully exploited vulnerability. */
		confidentialityImpact?: Cvssv3AvailabilityImpact | null;

		/** This metric measures the impact to integrity of a successfully exploited vulnerability. */
		integrityImpact?: Cvssv3AvailabilityImpact | null;

		/** This metric describes the level of privileges an attacker must possess before successfully exploiting the vulnerability. */
		privilegesRequired?: Cvssv3PrivilegesRequired | null;

		/** The Scope metric captures whether a vulnerability in one vulnerable component impacts resources in components beyond its security scope. */
		scope?: Cvssv3Scope | null;

		/** This metric captures the requirement for a human user, other than the attacker, to participate in the successful compromise of the vulnerable component. */
		userInteraction?: Cvssv3UserInteraction | null;
	}

	/** Common Vulnerability Scoring System version 3. */
	export interface Cvssv3FormProperties {

		/** This metric describes the conditions beyond the attacker's control that must exist in order to exploit the vulnerability. */
		attackComplexity: FormControl<Cvssv3AttackComplexity | null | undefined>,

		/** Base Metrics Represents the intrinsic characteristics of a vulnerability that are constant over time and across user environments. This metric reflects the context by which vulnerability exploitation is possible. */
		attackVector: FormControl<Cvssv3AttackVector | null | undefined>,

		/** This metric measures the impact to the availability of the impacted component resulting from a successfully exploited vulnerability. */
		availabilityImpact: FormControl<Cvssv3AvailabilityImpact | null | undefined>,

		/**
		 * The base score is a function of the base metric scores.
		 * Type: double
		 */
		baseScore: FormControl<number | null | undefined>,

		/** This metric measures the impact to the confidentiality of the information resources managed by a software component due to a successfully exploited vulnerability. */
		confidentialityImpact: FormControl<Cvssv3AvailabilityImpact | null | undefined>,

		/** This metric measures the impact to integrity of a successfully exploited vulnerability. */
		integrityImpact: FormControl<Cvssv3AvailabilityImpact | null | undefined>,

		/** This metric describes the level of privileges an attacker must possess before successfully exploiting the vulnerability. */
		privilegesRequired: FormControl<Cvssv3PrivilegesRequired | null | undefined>,

		/** The Scope metric captures whether a vulnerability in one vulnerable component impacts resources in components beyond its security scope. */
		scope: FormControl<Cvssv3Scope | null | undefined>,

		/** This metric captures the requirement for a human user, other than the attacker, to participate in the successful compromise of the vulnerable component. */
		userInteraction: FormControl<Cvssv3UserInteraction | null | undefined>,
	}
	export function CreateCvssv3FormGroup() {
		return new FormGroup<Cvssv3FormProperties>({
			attackComplexity: new FormControl<Cvssv3AttackComplexity | null | undefined>(undefined),
			attackVector: new FormControl<Cvssv3AttackVector | null | undefined>(undefined),
			availabilityImpact: new FormControl<Cvssv3AvailabilityImpact | null | undefined>(undefined),
			baseScore: new FormControl<number | null | undefined>(undefined),
			confidentialityImpact: new FormControl<Cvssv3AvailabilityImpact | null | undefined>(undefined),
			integrityImpact: new FormControl<Cvssv3AvailabilityImpact | null | undefined>(undefined),
			privilegesRequired: new FormControl<Cvssv3PrivilegesRequired | null | undefined>(undefined),
			scope: new FormControl<Cvssv3Scope | null | undefined>(undefined),
			userInteraction: new FormControl<Cvssv3UserInteraction | null | undefined>(undefined),
		});

	}

	export enum Cvssv3AttackComplexity { ATTACK_COMPLEXITY_UNSPECIFIED = 'ATTACK_COMPLEXITY_UNSPECIFIED', ATTACK_COMPLEXITY_LOW = 'ATTACK_COMPLEXITY_LOW', ATTACK_COMPLEXITY_HIGH = 'ATTACK_COMPLEXITY_HIGH' }

	export enum Cvssv3AttackVector { ATTACK_VECTOR_UNSPECIFIED = 'ATTACK_VECTOR_UNSPECIFIED', ATTACK_VECTOR_NETWORK = 'ATTACK_VECTOR_NETWORK', ATTACK_VECTOR_ADJACENT = 'ATTACK_VECTOR_ADJACENT', ATTACK_VECTOR_LOCAL = 'ATTACK_VECTOR_LOCAL', ATTACK_VECTOR_PHYSICAL = 'ATTACK_VECTOR_PHYSICAL' }

	export enum Cvssv3AvailabilityImpact { IMPACT_UNSPECIFIED = 'IMPACT_UNSPECIFIED', IMPACT_HIGH = 'IMPACT_HIGH', IMPACT_LOW = 'IMPACT_LOW', IMPACT_NONE = 'IMPACT_NONE' }

	export enum Cvssv3PrivilegesRequired { PRIVILEGES_REQUIRED_UNSPECIFIED = 'PRIVILEGES_REQUIRED_UNSPECIFIED', PRIVILEGES_REQUIRED_NONE = 'PRIVILEGES_REQUIRED_NONE', PRIVILEGES_REQUIRED_LOW = 'PRIVILEGES_REQUIRED_LOW', PRIVILEGES_REQUIRED_HIGH = 'PRIVILEGES_REQUIRED_HIGH' }

	export enum Cvssv3Scope { SCOPE_UNSPECIFIED = 'SCOPE_UNSPECIFIED', SCOPE_UNCHANGED = 'SCOPE_UNCHANGED', SCOPE_CHANGED = 'SCOPE_CHANGED' }

	export enum Cvssv3UserInteraction { USER_INTERACTION_UNSPECIFIED = 'USER_INTERACTION_UNSPECIFIED', USER_INTERACTION_NONE = 'USER_INTERACTION_NONE', USER_INTERACTION_REQUIRED = 'USER_INTERACTION_REQUIRED' }


	/** Additional Links */
	export interface Reference {

		/** Source of the reference e.g. NVD */
		source?: string | null;

		/** Uri for the mentioned source e.g. https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2021-34527. */
		uri?: string | null;
	}

	/** Additional Links */
	export interface ReferenceFormProperties {

		/** Source of the reference e.g. NVD */
		source: FormControl<string | null | undefined>,

		/** Uri for the mentioned source e.g. https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2021-34527. */
		uri: FormControl<string | null | undefined>,
	}
	export function CreateReferenceFormGroup() {
		return new FormGroup<ReferenceFormProperties>({
			source: new FormControl<string | null | undefined>(undefined),
			uri: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents database access information, such as queries. A database may be a sub-resource of an instance (as in the case of Cloud SQL instances or Cloud Spanner instances), or the database instance itself. Some database resources might not have the [full resource name](https://google.aip.dev/122#full-resource-names) populated because these resource types, such as Cloud SQL databases, are not yet supported by Cloud Asset Inventory. In these cases only the display name is provided. */
	export interface Database {

		/** The human-readable name of the database that the user connected to. */
		displayName?: string | null;

		/** The target usernames, roles, or groups of an SQL privilege grant, which is not an IAM policy change. */
		grantees?: Array<string>;

		/** Some database resources may not have the [full resource name](https://google.aip.dev/122#full-resource-names) populated because these resource types are not yet supported by Cloud Asset Inventory (e.g. Cloud SQL databases). In these cases only the display name will be provided. The [full resource name](https://google.aip.dev/122#full-resource-names) of the database that the user connected to, if it is supported by Cloud Asset Inventory. */
		name?: string | null;

		/** The SQL statement that is associated with the database access. */
		query?: string | null;

		/** The username used to connect to the database. The username might not be an IAM principal and does not have a set format. */
		userName?: string | null;

		/** The version of the database, for example, POSTGRES_14. See [the complete list](https://cloud.google.com/sql/docs/mysql/admin-api/rest/v1/SqlDatabaseVersion). */
		version?: string | null;
	}

	/** Represents database access information, such as queries. A database may be a sub-resource of an instance (as in the case of Cloud SQL instances or Cloud Spanner instances), or the database instance itself. Some database resources might not have the [full resource name](https://google.aip.dev/122#full-resource-names) populated because these resource types, such as Cloud SQL databases, are not yet supported by Cloud Asset Inventory. In these cases only the display name is provided. */
	export interface DatabaseFormProperties {

		/** The human-readable name of the database that the user connected to. */
		displayName: FormControl<string | null | undefined>,

		/** Some database resources may not have the [full resource name](https://google.aip.dev/122#full-resource-names) populated because these resource types are not yet supported by Cloud Asset Inventory (e.g. Cloud SQL databases). In these cases only the display name will be provided. The [full resource name](https://google.aip.dev/122#full-resource-names) of the database that the user connected to, if it is supported by Cloud Asset Inventory. */
		name: FormControl<string | null | undefined>,

		/** The SQL statement that is associated with the database access. */
		query: FormControl<string | null | undefined>,

		/** The username used to connect to the database. The username might not be an IAM principal and does not have a set format. */
		userName: FormControl<string | null | undefined>,

		/** The version of the database, for example, POSTGRES_14. See [the complete list](https://cloud.google.com/sql/docs/mysql/admin-api/rest/v1/SqlDatabaseVersion). */
		version: FormControl<string | null | undefined>,
	}
	export function CreateDatabaseFormGroup() {
		return new FormGroup<DatabaseFormProperties>({
			displayName: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			query: new FormControl<string | null | undefined>(undefined),
			userName: new FormControl<string | null | undefined>(undefined),
			version: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Details of a subscription. */
	export interface Details {

		/** The time the subscription has or will end. */
		endTime?: string | null;

		/** The time the subscription has or will start. */
		startTime?: string | null;

		/** The type of subscription */
		type?: DetailsType | null;
	}

	/** Details of a subscription. */
	export interface DetailsFormProperties {

		/** The time the subscription has or will end. */
		endTime: FormControl<string | null | undefined>,

		/** The time the subscription has or will start. */
		startTime: FormControl<string | null | undefined>,

		/** The type of subscription */
		type: FormControl<DetailsType | null | undefined>,
	}
	export function CreateDetailsFormGroup() {
		return new FormGroup<DetailsFormProperties>({
			endTime: new FormControl<string | null | undefined>(undefined),
			startTime: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<DetailsType | null | undefined>(undefined),
		});

	}

	export enum DetailsType { TYPE_UNSPECIFIED = 'TYPE_UNSPECIFIED', STANDARD = 'STANDARD', TRIAL = 'TRIAL', ALPHA = 'ALPHA', DEMO = 'DEMO', PAY_AS_YOU_GO = 'PAY_AS_YOU_GO' }


	/** Memory hash detection contributing to the binary family match. */
	export interface Detection {

		/** The name of the binary associated with the memory hash signature detection. */
		binary?: string | null;

		/**
		 * The percentage of memory page hashes in the signature that were matched.
		 * Type: double
		 */
		percentPagesMatched?: number | null;
	}

	/** Memory hash detection contributing to the binary family match. */
	export interface DetectionFormProperties {

		/** The name of the binary associated with the memory hash signature detection. */
		binary: FormControl<string | null | undefined>,

		/**
		 * The percentage of memory page hashes in the signature that were matched.
		 * Type: double
		 */
		percentPagesMatched: FormControl<number | null | undefined>,
	}
	export function CreateDetectionFormGroup() {
		return new FormGroup<DetectionFormProperties>({
			binary: new FormControl<string | null | undefined>(undefined),
			percentPagesMatched: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Path of the file in terms of underlying disk/partition identifiers. */
	export interface DiskPath {

		/** UUID of the partition (format https://wiki.archlinux.org/title/persistent_block_device_naming#by-uuid) */
		partitionUuid?: string | null;

		/** Relative path of the file in the partition as a JSON encoded string. Example: /home/user1/executable_file.sh */
		relativePath?: string | null;
	}

	/** Path of the file in terms of underlying disk/partition identifiers. */
	export interface DiskPathFormProperties {

		/** UUID of the partition (format https://wiki.archlinux.org/title/persistent_block_device_naming#by-uuid) */
		partitionUuid: FormControl<string | null | undefined>,

		/** Relative path of the file in the partition as a JSON encoded string. Example: /home/user1/executable_file.sh */
		relativePath: FormControl<string | null | undefined>,
	}
	export function CreateDiskPathFormGroup() {
		return new FormGroup<DiskPathFormProperties>({
			partitionUuid: new FormControl<string | null | undefined>(undefined),
			relativePath: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A name-value pair representing an environment variable used in an operating system process. */
	export interface EnvironmentVariable {

		/** Environment variable name as a JSON encoded string. */
		name?: string | null;

		/** Environment variable value as a JSON encoded string. */
		val?: string | null;
	}

	/** A name-value pair representing an environment variable used in an operating system process. */
	export interface EnvironmentVariableFormProperties {

		/** Environment variable name as a JSON encoded string. */
		name: FormControl<string | null | undefined>,

		/** Environment variable value as a JSON encoded string. */
		val: FormControl<string | null | undefined>,
	}
	export function CreateEnvironmentVariableFormGroup() {
		return new FormGroup<EnvironmentVariableFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			val: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Resource capturing the settings for the Event Threat Detection service. */
	export interface EventThreatDetectionSettings {

		/** The configurations including the state of enablement for the service's different modules. The absence of a module in the map implies its configuration is inherited from its parent's. */
		modules?: {[id: string]: Config };

		/** The resource name of the EventThreatDetectionSettings. Formats: * organizations/{organization}/eventThreatDetectionSettings * folders/{folder}/eventThreatDetectionSettings * projects/{project}/eventThreatDetectionSettings */
		name?: string | null;

		/** The state of enablement for the service at its level of the resource hierarchy. A DISABLED state will override all module enablement_states to DISABLED. */
		serviceEnablementState?: ConfigModuleEnablementState | null;

		/** Output only. The time the settings were last updated. */
		updateTime?: string | null;
	}

	/** Resource capturing the settings for the Event Threat Detection service. */
	export interface EventThreatDetectionSettingsFormProperties {

		/** The configurations including the state of enablement for the service's different modules. The absence of a module in the map implies its configuration is inherited from its parent's. */
		modules: FormControl<{[id: string]: Config } | null | undefined>,

		/** The resource name of the EventThreatDetectionSettings. Formats: * organizations/{organization}/eventThreatDetectionSettings * folders/{folder}/eventThreatDetectionSettings * projects/{project}/eventThreatDetectionSettings */
		name: FormControl<string | null | undefined>,

		/** The state of enablement for the service at its level of the resource hierarchy. A DISABLED state will override all module enablement_states to DISABLED. */
		serviceEnablementState: FormControl<ConfigModuleEnablementState | null | undefined>,

		/** Output only. The time the settings were last updated. */
		updateTime: FormControl<string | null | undefined>,
	}
	export function CreateEventThreatDetectionSettingsFormGroup() {
		return new FormGroup<EventThreatDetectionSettingsFormProperties>({
			modules: new FormControl<{[id: string]: Config } | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			serviceEnablementState: new FormControl<ConfigModuleEnablementState | null | undefined>(undefined),
			updateTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Resource where data was exfiltrated from or exfiltrated to. */
	export interface ExfilResource {

		/** Subcomponents of the asset that was exfiltrated, like URIs used during exfiltration, table names, databases, and filenames. For example, multiple tables might have been exfiltrated from the same Cloud SQL instance, or multiple files might have been exfiltrated from the same Cloud Storage bucket. */
		components?: Array<string>;

		/** The resource's [full resource name](https://cloud.google.com/apis/design/resource_names#full_resource_name). */
		name?: string | null;
	}

	/** Resource where data was exfiltrated from or exfiltrated to. */
	export interface ExfilResourceFormProperties {

		/** The resource's [full resource name](https://cloud.google.com/apis/design/resource_names#full_resource_name). */
		name: FormControl<string | null | undefined>,
	}
	export function CreateExfilResourceFormGroup() {
		return new FormGroup<ExfilResourceFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Exfiltration represents a data exfiltration attempt from one or more sources to one or more targets. The `sources` attribute lists the sources of the exfiltrated data. The `targets` attribute lists the destinations the data was copied to. */
	export interface Exfiltration {

		/** If there are multiple sources, then the data is considered "joined" between them. For instance, BigQuery can join multiple tables, and each table would be considered a source. */
		sources?: Array<ExfilResource>;

		/** If there are multiple targets, each target would get a complete copy of the "joined" source data. */
		targets?: Array<ExfilResource>;

		/** Total exfiltrated bytes processed for the entire job. */
		totalExfiltratedBytes?: string | null;
	}

	/** Exfiltration represents a data exfiltration attempt from one or more sources to one or more targets. The `sources` attribute lists the sources of the exfiltrated data. The `targets` attribute lists the destinations the data was copied to. */
	export interface ExfiltrationFormProperties {

		/** Total exfiltrated bytes processed for the entire job. */
		totalExfiltratedBytes: FormControl<string | null | undefined>,
	}
	export function CreateExfiltrationFormGroup() {
		return new FormGroup<ExfiltrationFormProperties>({
			totalExfiltratedBytes: new FormControl<string | null | undefined>(undefined),
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


	/** File information about the related binary/library used by an executable, or the script used by a script interpreter */
	export interface File {

		/** Prefix of the file contents as a JSON-encoded string. */
		contents?: string | null;

		/** Path of the file in terms of underlying disk/partition identifiers. */
		diskPath?: DiskPath;

		/** The length in bytes of the file prefix that was hashed. If hashed_size == size, any hashes reported represent the entire file. */
		hashedSize?: string | null;

		/** True when the hash covers only a prefix of the file. */
		partiallyHashed?: boolean | null;

		/** Absolute path of the file as a JSON encoded string. */
		path?: string | null;

		/** SHA256 hash of the first hashed_size bytes of the file encoded as a hex string. If hashed_size == size, sha256 represents the SHA256 hash of the entire file. */
		sha256?: string | null;

		/** Size of the file in bytes. */
		size?: string | null;
	}

	/** File information about the related binary/library used by an executable, or the script used by a script interpreter */
	export interface FileFormProperties {

		/** Prefix of the file contents as a JSON-encoded string. */
		contents: FormControl<string | null | undefined>,

		/** The length in bytes of the file prefix that was hashed. If hashed_size == size, any hashes reported represent the entire file. */
		hashedSize: FormControl<string | null | undefined>,

		/** True when the hash covers only a prefix of the file. */
		partiallyHashed: FormControl<boolean | null | undefined>,

		/** Absolute path of the file as a JSON encoded string. */
		path: FormControl<string | null | undefined>,

		/** SHA256 hash of the first hashed_size bytes of the file encoded as a hex string. If hashed_size == size, sha256 represents the SHA256 hash of the entire file. */
		sha256: FormControl<string | null | undefined>,

		/** Size of the file in bytes. */
		size: FormControl<string | null | undefined>,
	}
	export function CreateFileFormGroup() {
		return new FormGroup<FileFormProperties>({
			contents: new FormControl<string | null | undefined>(undefined),
			hashedSize: new FormControl<string | null | undefined>(undefined),
			partiallyHashed: new FormControl<boolean | null | undefined>(undefined),
			path: new FormControl<string | null | undefined>(undefined),
			sha256: new FormControl<string | null | undefined>(undefined),
			size: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Security Command Center finding. A finding is a record of assessment data like security, risk, health, or privacy, that is ingested into Security Command Center for presentation, notification, analysis, policy testing, and enforcement. For example, a cross-site scripting (XSS) vulnerability in an App Engine application is a finding. */
	export interface Finding {

		/** Represents an access event. */
		access?: Access;

		/** Represents an application associated with a finding. */
		application?: Application;

		/** An attack exposure contains the results of an attack path simulation run. */
		attackExposure?: AttackExposure;

		/** Information related to Google Cloud Backup and DR Service findings. */
		backupDisasterRecovery?: BackupDisasterRecovery;

		/** The canonical name of the finding. It's either "organizations/{organization_id}/sources/{source_id}/findings/{finding_id}", "folders/{folder_id}/sources/{source_id}/findings/{finding_id}" or "projects/{project_number}/sources/{source_id}/findings/{finding_id}", depending on the closest CRM ancestor of the resource associated with the finding. */
		canonicalName?: string | null;

		/** The additional taxonomy group within findings from a given source. This field is immutable after creation time. Example: "XSS_FLASH_INJECTION" */
		category?: string | null;

		/** The [data profile](https://cloud.google.com/dlp/docs/data-profiles) associated with the finding. */
		cloudDlpDataProfile?: CloudDlpDataProfile;

		/** Details about the Cloud Data Loss Prevention (Cloud DLP) [inspection job](https://cloud.google.com/dlp/docs/concepts-job-triggers) that produced the finding. */
		cloudDlpInspection?: CloudDlpInspection;

		/** Contains compliance information for security standards associated to the finding. */
		compliances?: Array<Compliance>;

		/** Contains information about the IP connection associated with the finding. */
		connections?: Array<Connection>;

		/** Output only. Map containing the points of contact for the given finding. The key represents the type of contact, while the value contains a list of all the contacts that pertain. Please refer to: https://cloud.google.com/resource-manager/docs/managing-notification-contacts#notification-categories { "security": { "contacts": [ { "email": "person1@company.com" }, { "email": "person2@company.com" } ] } } */
		contacts?: {[id: string]: ContactDetails };

		/** Containers associated with the finding. This field provides information for both Kubernetes and non-Kubernetes containers. */
		containers?: Array<Container>;

		/** The time at which the finding was created in Security Command Center. */
		createTime?: string | null;

		/** Represents database access information, such as queries. A database may be a sub-resource of an instance (as in the case of Cloud SQL instances or Cloud Spanner instances), or the database instance itself. Some database resources might not have the [full resource name](https://google.aip.dev/122#full-resource-names) populated because these resource types, such as Cloud SQL databases, are not yet supported by Cloud Asset Inventory. In these cases only the display name is provided. */
		database?: Database;

		/** Contains more details about the finding. */
		description?: string | null;

		/** The time the finding was first detected. If an existing finding is updated, then this is the time the update occurred. For example, if the finding represents an open firewall, this property captures the time the detector believes the firewall became open. The accuracy is determined by the detector. If the finding is later resolved, then this time reflects when the finding was resolved. This must not be set to a value greater than the current timestamp. */
		eventTime?: string | null;

		/** Exfiltration represents a data exfiltration attempt from one or more sources to one or more targets. The `sources` attribute lists the sources of the exfiltrated data. The `targets` attribute lists the destinations the data was copied to. */
		exfiltration?: Exfiltration;

		/** Output only. Third party SIEM/SOAR fields within SCC, contains external system information and external system finding fields. */
		externalSystems?: {[id: string]: GoogleCloudSecuritycenterV1ExternalSystem };

		/** The URI that, if available, points to a web page outside of Security Command Center where additional information about the finding can be found. This field is guaranteed to be either empty or a well formed URL. */
		externalUri?: string | null;

		/** File associated with the finding. */
		files?: Array<File>;

		/** The class of the finding. */
		findingClass?: FindingFindingClass | null;

		/** Represents IAM bindings associated with the finding. */
		iamBindings?: Array<IamBinding>;

		/** Represents what's commonly known as an _indicator of compromise_ (IoC) in computer forensics. This is an artifact observed on a network or in an operating system that, with high confidence, indicates a computer intrusion. For more information, see [Indicator of compromise](https://en.wikipedia.org/wiki/Indicator_of_compromise). */
		indicator?: Indicator;

		/** Kernel mode rootkit signatures. */
		kernelRootkit?: KernelRootkit;

		/** Kubernetes-related attributes. */
		kubernetes?: Kubernetes;

		/** The load balancers associated with the finding. */
		loadBalancers?: Array<LoadBalancer>;

		/** Log entries that are relevant to the finding. */
		logEntries?: Array<LogEntry>;

		/** MITRE ATT&CK tactics and techniques related to this finding. See: https://attack.mitre.org */
		mitreAttack?: MitreAttack;

		/** Unique identifier of the module which generated the finding. Example: folders/598186756061/securityHealthAnalyticsSettings/customModules/56799441161885 */
		moduleName?: string | null;

		/** Indicates the mute state of a finding (either muted, unmuted or undefined). Unlike other attributes of a finding, a finding provider shouldn't set the value of mute. */
		mute?: FindingMute | null;

		/** Records additional information about the mute operation, for example, the [mute configuration](/security-command-center/docs/how-to-mute-findings) that muted the finding and the user who muted the finding. */
		muteInitiator?: string | null;

		/** Output only. The most recent time this finding was muted or unmuted. */
		muteUpdateTime?: string | null;

		/** The [relative resource name](https://cloud.google.com/apis/design/resource_names#relative_resource_name) of the finding. Example: "organizations/{organization_id}/sources/{source_id}/findings/{finding_id}", "folders/{folder_id}/sources/{source_id}/findings/{finding_id}", "projects/{project_id}/sources/{source_id}/findings/{finding_id}". */
		name?: string | null;

		/** Steps to address the finding. */
		nextSteps?: string | null;

		/** Contains information about the org policies associated with the finding. */
		orgPolicies?: Array<OrgPolicy>;

		/** The relative resource name of the source the finding belongs to. See: https://cloud.google.com/apis/design/resource_names#relative_resource_name This field is immutable after creation time. For example: "organizations/{organization_id}/sources/{source_id}" */
		parent?: string | null;

		/** Output only. The human readable display name of the finding source such as "Event Threat Detection" or "Security Health Analytics". */
		parentDisplayName?: string | null;

		/** Represents operating system processes associated with the Finding. */
		processes?: Array<Process>;

		/** For findings on Google Cloud resources, the full resource name of the Google Cloud resource this finding is for. See: https://cloud.google.com/apis/design/resource_names#full_resource_name When the finding is for a non-Google Cloud resource, the resourceName can be a customer or partner defined string. This field is immutable after creation time. */
		resourceName?: string | null;

		/** User specified security marks that are attached to the parent Security Command Center resource. Security marks are scoped within a Security Command Center organization -- they can be modified and viewed by all users who have proper permissions on the organization. */
		securityMarks?: SecurityMarks;

		/** Represents a posture that is deployed on Google Cloud by the Security Command Center Posture Management service. A posture contains one or more policy sets. A policy set is a group of policies that enforce a set of security rules on Google Cloud. */
		securityPosture?: SecurityPosture;

		/** The severity of the finding. This field is managed by the source that writes the finding. */
		severity?: FindingSeverity | null;

		/** Source specific properties. These properties are managed by the source that writes the finding. The key names in the source_properties map must be between 1 and 255 characters, and must start with a letter and contain alphanumeric characters or underscores only. */
		sourceProperties?: {[id: string]: any };

		/** The state of the finding. */
		state?: FindingState | null;

		/** Refers to common vulnerability fields e.g. cve, cvss, cwe etc. */
		vulnerability?: Vulnerability;
	}

	/** Security Command Center finding. A finding is a record of assessment data like security, risk, health, or privacy, that is ingested into Security Command Center for presentation, notification, analysis, policy testing, and enforcement. For example, a cross-site scripting (XSS) vulnerability in an App Engine application is a finding. */
	export interface FindingFormProperties {

		/** The canonical name of the finding. It's either "organizations/{organization_id}/sources/{source_id}/findings/{finding_id}", "folders/{folder_id}/sources/{source_id}/findings/{finding_id}" or "projects/{project_number}/sources/{source_id}/findings/{finding_id}", depending on the closest CRM ancestor of the resource associated with the finding. */
		canonicalName: FormControl<string | null | undefined>,

		/** The additional taxonomy group within findings from a given source. This field is immutable after creation time. Example: "XSS_FLASH_INJECTION" */
		category: FormControl<string | null | undefined>,

		/** Output only. Map containing the points of contact for the given finding. The key represents the type of contact, while the value contains a list of all the contacts that pertain. Please refer to: https://cloud.google.com/resource-manager/docs/managing-notification-contacts#notification-categories { "security": { "contacts": [ { "email": "person1@company.com" }, { "email": "person2@company.com" } ] } } */
		contacts: FormControl<{[id: string]: ContactDetails } | null | undefined>,

		/** The time at which the finding was created in Security Command Center. */
		createTime: FormControl<string | null | undefined>,

		/** Contains more details about the finding. */
		description: FormControl<string | null | undefined>,

		/** The time the finding was first detected. If an existing finding is updated, then this is the time the update occurred. For example, if the finding represents an open firewall, this property captures the time the detector believes the firewall became open. The accuracy is determined by the detector. If the finding is later resolved, then this time reflects when the finding was resolved. This must not be set to a value greater than the current timestamp. */
		eventTime: FormControl<string | null | undefined>,

		/** Output only. Third party SIEM/SOAR fields within SCC, contains external system information and external system finding fields. */
		externalSystems: FormControl<{[id: string]: GoogleCloudSecuritycenterV1ExternalSystem } | null | undefined>,

		/** The URI that, if available, points to a web page outside of Security Command Center where additional information about the finding can be found. This field is guaranteed to be either empty or a well formed URL. */
		externalUri: FormControl<string | null | undefined>,

		/** The class of the finding. */
		findingClass: FormControl<FindingFindingClass | null | undefined>,

		/** Unique identifier of the module which generated the finding. Example: folders/598186756061/securityHealthAnalyticsSettings/customModules/56799441161885 */
		moduleName: FormControl<string | null | undefined>,

		/** Indicates the mute state of a finding (either muted, unmuted or undefined). Unlike other attributes of a finding, a finding provider shouldn't set the value of mute. */
		mute: FormControl<FindingMute | null | undefined>,

		/** Records additional information about the mute operation, for example, the [mute configuration](/security-command-center/docs/how-to-mute-findings) that muted the finding and the user who muted the finding. */
		muteInitiator: FormControl<string | null | undefined>,

		/** Output only. The most recent time this finding was muted or unmuted. */
		muteUpdateTime: FormControl<string | null | undefined>,

		/** The [relative resource name](https://cloud.google.com/apis/design/resource_names#relative_resource_name) of the finding. Example: "organizations/{organization_id}/sources/{source_id}/findings/{finding_id}", "folders/{folder_id}/sources/{source_id}/findings/{finding_id}", "projects/{project_id}/sources/{source_id}/findings/{finding_id}". */
		name: FormControl<string | null | undefined>,

		/** Steps to address the finding. */
		nextSteps: FormControl<string | null | undefined>,

		/** The relative resource name of the source the finding belongs to. See: https://cloud.google.com/apis/design/resource_names#relative_resource_name This field is immutable after creation time. For example: "organizations/{organization_id}/sources/{source_id}" */
		parent: FormControl<string | null | undefined>,

		/** Output only. The human readable display name of the finding source such as "Event Threat Detection" or "Security Health Analytics". */
		parentDisplayName: FormControl<string | null | undefined>,

		/** For findings on Google Cloud resources, the full resource name of the Google Cloud resource this finding is for. See: https://cloud.google.com/apis/design/resource_names#full_resource_name When the finding is for a non-Google Cloud resource, the resourceName can be a customer or partner defined string. This field is immutable after creation time. */
		resourceName: FormControl<string | null | undefined>,

		/** The severity of the finding. This field is managed by the source that writes the finding. */
		severity: FormControl<FindingSeverity | null | undefined>,

		/** Source specific properties. These properties are managed by the source that writes the finding. The key names in the source_properties map must be between 1 and 255 characters, and must start with a letter and contain alphanumeric characters or underscores only. */
		sourceProperties: FormControl<{[id: string]: any } | null | undefined>,

		/** The state of the finding. */
		state: FormControl<FindingState | null | undefined>,
	}
	export function CreateFindingFormGroup() {
		return new FormGroup<FindingFormProperties>({
			canonicalName: new FormControl<string | null | undefined>(undefined),
			category: new FormControl<string | null | undefined>(undefined),
			contacts: new FormControl<{[id: string]: ContactDetails } | null | undefined>(undefined),
			createTime: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			eventTime: new FormControl<string | null | undefined>(undefined),
			externalSystems: new FormControl<{[id: string]: GoogleCloudSecuritycenterV1ExternalSystem } | null | undefined>(undefined),
			externalUri: new FormControl<string | null | undefined>(undefined),
			findingClass: new FormControl<FindingFindingClass | null | undefined>(undefined),
			moduleName: new FormControl<string | null | undefined>(undefined),
			mute: new FormControl<FindingMute | null | undefined>(undefined),
			muteInitiator: new FormControl<string | null | undefined>(undefined),
			muteUpdateTime: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			nextSteps: new FormControl<string | null | undefined>(undefined),
			parent: new FormControl<string | null | undefined>(undefined),
			parentDisplayName: new FormControl<string | null | undefined>(undefined),
			resourceName: new FormControl<string | null | undefined>(undefined),
			severity: new FormControl<FindingSeverity | null | undefined>(undefined),
			sourceProperties: new FormControl<{[id: string]: any } | null | undefined>(undefined),
			state: new FormControl<FindingState | null | undefined>(undefined),
		});

	}


	/** Representation of third party SIEM/SOAR fields within SCC. */
	export interface GoogleCloudSecuritycenterV1ExternalSystem {

		/** References primary/secondary etc assignees in the external system. */
		assignees?: Array<string>;

		/** The priority of the finding's corresponding case in the external system. */
		casePriority?: string | null;

		/** The SLA of the finding's corresponding case in the external system. */
		caseSla?: string | null;

		/** The link to the finding's corresponding case in the external system. */
		caseUri?: string | null;

		/** The time when the case was last updated, as reported by the external system. */
		externalSystemUpdateTime?: string | null;

		/** The identifier that's used to track the finding's corresponding case in the external system. */
		externalUid?: string | null;

		/** Full resource name of the external system, for example: "organizations/1234/sources/5678/findings/123456/externalSystems/jira", "folders/1234/sources/5678/findings/123456/externalSystems/jira", "projects/1234/sources/5678/findings/123456/externalSystems/jira" */
		name?: string | null;

		/** The most recent status of the finding's corresponding case, as reported by the external system. */
		status?: string | null;

		/** Information about the ticket, if any, that is being used to track the resolution of the issue that is identified by this finding. */
		ticketInfo?: TicketInfo;
	}

	/** Representation of third party SIEM/SOAR fields within SCC. */
	export interface GoogleCloudSecuritycenterV1ExternalSystemFormProperties {

		/** The priority of the finding's corresponding case in the external system. */
		casePriority: FormControl<string | null | undefined>,

		/** The SLA of the finding's corresponding case in the external system. */
		caseSla: FormControl<string | null | undefined>,

		/** The link to the finding's corresponding case in the external system. */
		caseUri: FormControl<string | null | undefined>,

		/** The time when the case was last updated, as reported by the external system. */
		externalSystemUpdateTime: FormControl<string | null | undefined>,

		/** The identifier that's used to track the finding's corresponding case in the external system. */
		externalUid: FormControl<string | null | undefined>,

		/** Full resource name of the external system, for example: "organizations/1234/sources/5678/findings/123456/externalSystems/jira", "folders/1234/sources/5678/findings/123456/externalSystems/jira", "projects/1234/sources/5678/findings/123456/externalSystems/jira" */
		name: FormControl<string | null | undefined>,

		/** The most recent status of the finding's corresponding case, as reported by the external system. */
		status: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudSecuritycenterV1ExternalSystemFormGroup() {
		return new FormGroup<GoogleCloudSecuritycenterV1ExternalSystemFormProperties>({
			casePriority: new FormControl<string | null | undefined>(undefined),
			caseSla: new FormControl<string | null | undefined>(undefined),
			caseUri: new FormControl<string | null | undefined>(undefined),
			externalSystemUpdateTime: new FormControl<string | null | undefined>(undefined),
			externalUid: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Information about the ticket, if any, that is being used to track the resolution of the issue that is identified by this finding. */
	export interface TicketInfo {

		/** The assignee of the ticket in the ticket system. */
		assignee?: string | null;

		/** The description of the ticket in the ticket system. */
		description?: string | null;

		/** The identifier of the ticket in the ticket system. */
		id?: string | null;

		/** The latest status of the ticket, as reported by the ticket system. */
		status?: string | null;

		/** The time when the ticket was last updated, as reported by the ticket system. */
		updateTime?: string | null;

		/** The link to the ticket in the ticket system. */
		uri?: string | null;
	}

	/** Information about the ticket, if any, that is being used to track the resolution of the issue that is identified by this finding. */
	export interface TicketInfoFormProperties {

		/** The assignee of the ticket in the ticket system. */
		assignee: FormControl<string | null | undefined>,

		/** The description of the ticket in the ticket system. */
		description: FormControl<string | null | undefined>,

		/** The identifier of the ticket in the ticket system. */
		id: FormControl<string | null | undefined>,

		/** The latest status of the ticket, as reported by the ticket system. */
		status: FormControl<string | null | undefined>,

		/** The time when the ticket was last updated, as reported by the ticket system. */
		updateTime: FormControl<string | null | undefined>,

		/** The link to the ticket in the ticket system. */
		uri: FormControl<string | null | undefined>,
	}
	export function CreateTicketInfoFormGroup() {
		return new FormGroup<TicketInfoFormProperties>({
			assignee: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<string | null | undefined>(undefined),
			updateTime: new FormControl<string | null | undefined>(undefined),
			uri: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum FindingFindingClass { FINDING_CLASS_UNSPECIFIED = 'FINDING_CLASS_UNSPECIFIED', THREAT = 'THREAT', VULNERABILITY = 'VULNERABILITY', MISCONFIGURATION = 'MISCONFIGURATION', OBSERVATION = 'OBSERVATION', SCC_ERROR = 'SCC_ERROR', POSTURE_VIOLATION = 'POSTURE_VIOLATION' }


	/** Represents a particular IAM binding, which captures a member's role addition, removal, or state. */
	export interface IamBinding {

		/** The action that was performed on a Binding. */
		action?: IamBindingAction | null;

		/** A single identity requesting access for a Cloud Platform resource, for example, "foo@google.com". */
		member?: string | null;

		/** Role that is assigned to "members". For example, "roles/viewer", "roles/editor", or "roles/owner". */
		role?: string | null;
	}

	/** Represents a particular IAM binding, which captures a member's role addition, removal, or state. */
	export interface IamBindingFormProperties {

		/** The action that was performed on a Binding. */
		action: FormControl<IamBindingAction | null | undefined>,

		/** A single identity requesting access for a Cloud Platform resource, for example, "foo@google.com". */
		member: FormControl<string | null | undefined>,

		/** Role that is assigned to "members". For example, "roles/viewer", "roles/editor", or "roles/owner". */
		role: FormControl<string | null | undefined>,
	}
	export function CreateIamBindingFormGroup() {
		return new FormGroup<IamBindingFormProperties>({
			action: new FormControl<IamBindingAction | null | undefined>(undefined),
			member: new FormControl<string | null | undefined>(undefined),
			role: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum IamBindingAction { ACTION_UNSPECIFIED = 'ACTION_UNSPECIFIED', ADD = 'ADD', REMOVE = 'REMOVE' }


	/** Represents what's commonly known as an _indicator of compromise_ (IoC) in computer forensics. This is an artifact observed on a network or in an operating system that, with high confidence, indicates a computer intrusion. For more information, see [Indicator of compromise](https://en.wikipedia.org/wiki/Indicator_of_compromise). */
	export interface Indicator {

		/** List of domains associated to the Finding. */
		domains?: Array<string>;

		/** The list of IP addresses that are associated with the finding. */
		ipAddresses?: Array<string>;

		/** The list of matched signatures indicating that the given process is present in the environment. */
		signatures?: Array<ProcessSignature>;

		/** The list of URIs associated to the Findings. */
		uris?: Array<string>;
	}

	/** Represents what's commonly known as an _indicator of compromise_ (IoC) in computer forensics. This is an artifact observed on a network or in an operating system that, with high confidence, indicates a computer intrusion. For more information, see [Indicator of compromise](https://en.wikipedia.org/wiki/Indicator_of_compromise). */
	export interface IndicatorFormProperties {
	}
	export function CreateIndicatorFormGroup() {
		return new FormGroup<IndicatorFormProperties>({
		});

	}


	/** Indicates what signature matched this process. */
	export interface ProcessSignature {

		/** A signature corresponding to memory page hashes. */
		memoryHashSignature?: MemoryHashSignature;

		/** Describes the type of resource associated with the signature. */
		signatureType?: ProcessSignatureSignatureType | null;

		/** A signature corresponding to a YARA rule. */
		yaraRuleSignature?: YaraRuleSignature;
	}

	/** Indicates what signature matched this process. */
	export interface ProcessSignatureFormProperties {

		/** Describes the type of resource associated with the signature. */
		signatureType: FormControl<ProcessSignatureSignatureType | null | undefined>,
	}
	export function CreateProcessSignatureFormGroup() {
		return new FormGroup<ProcessSignatureFormProperties>({
			signatureType: new FormControl<ProcessSignatureSignatureType | null | undefined>(undefined),
		});

	}


	/** A signature corresponding to memory page hashes. */
	export interface MemoryHashSignature {

		/** The binary family. */
		binaryFamily?: string | null;

		/** The list of memory hash detections contributing to the binary family match. */
		detections?: Array<Detection>;
	}

	/** A signature corresponding to memory page hashes. */
	export interface MemoryHashSignatureFormProperties {

		/** The binary family. */
		binaryFamily: FormControl<string | null | undefined>,
	}
	export function CreateMemoryHashSignatureFormGroup() {
		return new FormGroup<MemoryHashSignatureFormProperties>({
			binaryFamily: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ProcessSignatureSignatureType { SIGNATURE_TYPE_UNSPECIFIED = 'SIGNATURE_TYPE_UNSPECIFIED', SIGNATURE_TYPE_PROCESS = 'SIGNATURE_TYPE_PROCESS', SIGNATURE_TYPE_FILE = 'SIGNATURE_TYPE_FILE' }


	/** A signature corresponding to a YARA rule. */
	export interface YaraRuleSignature {

		/** The name of the YARA rule. */
		yaraRule?: string | null;
	}

	/** A signature corresponding to a YARA rule. */
	export interface YaraRuleSignatureFormProperties {

		/** The name of the YARA rule. */
		yaraRule: FormControl<string | null | undefined>,
	}
	export function CreateYaraRuleSignatureFormGroup() {
		return new FormGroup<YaraRuleSignatureFormProperties>({
			yaraRule: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Kernel mode rootkit signatures. */
	export interface KernelRootkit {

		/** Rootkit name, when available. */
		name?: string | null;

		/** True if unexpected modifications of kernel code memory are present. */
		unexpectedCodeModification?: boolean | null;

		/** True if `ftrace` points are present with callbacks pointing to regions that are not in the expected kernel or module code range. */
		unexpectedFtraceHandler?: boolean | null;

		/** True if interrupt handlers that are are not in the expected kernel or module code regions are present. */
		unexpectedInterruptHandler?: boolean | null;

		/** True if kernel code pages that are not in the expected kernel or module code regions are present. */
		unexpectedKernelCodePages?: boolean | null;

		/** True if `kprobe` points are present with callbacks pointing to regions that are not in the expected kernel or module code range. */
		unexpectedKprobeHandler?: boolean | null;

		/** True if unexpected processes in the scheduler run queue are present. Such processes are in the run queue, but not in the process task list. */
		unexpectedProcessesInRunqueue?: boolean | null;

		/** True if unexpected modifications of kernel read-only data memory are present. */
		unexpectedReadOnlyDataModification?: boolean | null;

		/** True if system call handlers that are are not in the expected kernel or module code regions are present. */
		unexpectedSystemCallHandler?: boolean | null;
	}

	/** Kernel mode rootkit signatures. */
	export interface KernelRootkitFormProperties {

		/** Rootkit name, when available. */
		name: FormControl<string | null | undefined>,

		/** True if unexpected modifications of kernel code memory are present. */
		unexpectedCodeModification: FormControl<boolean | null | undefined>,

		/** True if `ftrace` points are present with callbacks pointing to regions that are not in the expected kernel or module code range. */
		unexpectedFtraceHandler: FormControl<boolean | null | undefined>,

		/** True if interrupt handlers that are are not in the expected kernel or module code regions are present. */
		unexpectedInterruptHandler: FormControl<boolean | null | undefined>,

		/** True if kernel code pages that are not in the expected kernel or module code regions are present. */
		unexpectedKernelCodePages: FormControl<boolean | null | undefined>,

		/** True if `kprobe` points are present with callbacks pointing to regions that are not in the expected kernel or module code range. */
		unexpectedKprobeHandler: FormControl<boolean | null | undefined>,

		/** True if unexpected processes in the scheduler run queue are present. Such processes are in the run queue, but not in the process task list. */
		unexpectedProcessesInRunqueue: FormControl<boolean | null | undefined>,

		/** True if unexpected modifications of kernel read-only data memory are present. */
		unexpectedReadOnlyDataModification: FormControl<boolean | null | undefined>,

		/** True if system call handlers that are are not in the expected kernel or module code regions are present. */
		unexpectedSystemCallHandler: FormControl<boolean | null | undefined>,
	}
	export function CreateKernelRootkitFormGroup() {
		return new FormGroup<KernelRootkitFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			unexpectedCodeModification: new FormControl<boolean | null | undefined>(undefined),
			unexpectedFtraceHandler: new FormControl<boolean | null | undefined>(undefined),
			unexpectedInterruptHandler: new FormControl<boolean | null | undefined>(undefined),
			unexpectedKernelCodePages: new FormControl<boolean | null | undefined>(undefined),
			unexpectedKprobeHandler: new FormControl<boolean | null | undefined>(undefined),
			unexpectedProcessesInRunqueue: new FormControl<boolean | null | undefined>(undefined),
			unexpectedReadOnlyDataModification: new FormControl<boolean | null | undefined>(undefined),
			unexpectedSystemCallHandler: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Kubernetes-related attributes. */
	export interface Kubernetes {

		/** Provides information on any Kubernetes access reviews (privilege checks) relevant to the finding. */
		accessReviews?: Array<AccessReview>;

		/** Provides Kubernetes role binding information for findings that involve [RoleBindings or ClusterRoleBindings](https://cloud.google.com/kubernetes-engine/docs/how-to/role-based-access-control). */
		bindings?: Array<GoogleCloudSecuritycenterV1Binding>;

		/** GKE [node pools](https://cloud.google.com/kubernetes-engine/docs/concepts/node-pools) associated with the finding. This field contains node pool information for each node, when it is available. */
		nodePools?: Array<NodePool>;

		/** Provides Kubernetes [node](https://cloud.google.com/kubernetes-engine/docs/concepts/cluster-architecture#nodes) information. */
		nodes?: Array<Node>;

		/** Kubernetes objects related to the finding. */
		objects?: Array<Object>;

		/** Kubernetes [Pods](https://cloud.google.com/kubernetes-engine/docs/concepts/pod) associated with the finding. This field contains Pod records for each container that is owned by a Pod. */
		pods?: Array<Pod>;

		/** Provides Kubernetes role information for findings that involve [Roles or ClusterRoles](https://cloud.google.com/kubernetes-engine/docs/how-to/role-based-access-control). */
		roles?: Array<Role>;
	}

	/** Kubernetes-related attributes. */
	export interface KubernetesFormProperties {
	}
	export function CreateKubernetesFormGroup() {
		return new FormGroup<KubernetesFormProperties>({
		});

	}


	/** Represents a Kubernetes RoleBinding or ClusterRoleBinding. */
	export interface GoogleCloudSecuritycenterV1Binding {

		/** Name for the binding. */
		name?: string | null;

		/** Namespace for the binding. */
		ns?: string | null;

		/** Kubernetes Role or ClusterRole. */
		role?: Role;

		/** Represents one or more subjects that are bound to the role. Not always available for PATCH requests. */
		subjects?: Array<Subject>;
	}

	/** Represents a Kubernetes RoleBinding or ClusterRoleBinding. */
	export interface GoogleCloudSecuritycenterV1BindingFormProperties {

		/** Name for the binding. */
		name: FormControl<string | null | undefined>,

		/** Namespace for the binding. */
		ns: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudSecuritycenterV1BindingFormGroup() {
		return new FormGroup<GoogleCloudSecuritycenterV1BindingFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			ns: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Kubernetes Role or ClusterRole. */
	export interface Role {

		/** Role type. */
		kind?: RoleKind | null;

		/** Role name. */
		name?: string | null;

		/** Role namespace. */
		ns?: string | null;
	}

	/** Kubernetes Role or ClusterRole. */
	export interface RoleFormProperties {

		/** Role type. */
		kind: FormControl<RoleKind | null | undefined>,

		/** Role name. */
		name: FormControl<string | null | undefined>,

		/** Role namespace. */
		ns: FormControl<string | null | undefined>,
	}
	export function CreateRoleFormGroup() {
		return new FormGroup<RoleFormProperties>({
			kind: new FormControl<RoleKind | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			ns: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum RoleKind { KIND_UNSPECIFIED = 'KIND_UNSPECIFIED', ROLE = 'ROLE', CLUSTER_ROLE = 'CLUSTER_ROLE' }


	/** Represents a Kubernetes subject. */
	export interface Subject {

		/** Authentication type for the subject. */
		kind?: SubjectKind | null;

		/** Name for the subject. */
		name?: string | null;

		/** Namespace for the subject. */
		ns?: string | null;
	}

	/** Represents a Kubernetes subject. */
	export interface SubjectFormProperties {

		/** Authentication type for the subject. */
		kind: FormControl<SubjectKind | null | undefined>,

		/** Name for the subject. */
		name: FormControl<string | null | undefined>,

		/** Namespace for the subject. */
		ns: FormControl<string | null | undefined>,
	}
	export function CreateSubjectFormGroup() {
		return new FormGroup<SubjectFormProperties>({
			kind: new FormControl<SubjectKind | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			ns: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum SubjectKind { AUTH_TYPE_UNSPECIFIED = 'AUTH_TYPE_UNSPECIFIED', USER = 'USER', SERVICEACCOUNT = 'SERVICEACCOUNT', GROUP = 'GROUP' }


	/** Provides GKE node pool information. */
	export interface NodePool {

		/** Kubernetes node pool name. */
		name?: string | null;

		/** Nodes associated with the finding. */
		nodes?: Array<Node>;
	}

	/** Provides GKE node pool information. */
	export interface NodePoolFormProperties {

		/** Kubernetes node pool name. */
		name: FormControl<string | null | undefined>,
	}
	export function CreateNodePoolFormGroup() {
		return new FormGroup<NodePoolFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Kubernetes nodes associated with the finding. */
	export interface Node {

		/** [Full resource name](https://google.aip.dev/122#full-resource-names) of the Compute Engine VM running the cluster node. */
		name?: string | null;
	}

	/** Kubernetes nodes associated with the finding. */
	export interface NodeFormProperties {

		/** [Full resource name](https://google.aip.dev/122#full-resource-names) of the Compute Engine VM running the cluster node. */
		name: FormControl<string | null | undefined>,
	}
	export function CreateNodeFormGroup() {
		return new FormGroup<NodeFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Kubernetes object related to the finding, uniquely identified by GKNN. Used if the object Kind is not one of Pod, Node, NodePool, Binding, or AccessReview. */
	export interface Object {

		/** Pod containers associated with this finding, if any. */
		containers?: Array<Container>;

		/** Kubernetes object group, such as "policy.k8s.io/v1". */
		group?: string | null;

		/** Kubernetes object kind, such as "Namespace". */
		kind?: string | null;

		/** Kubernetes object name. For details see https://kubernetes.io/docs/concepts/overview/working-with-objects/names/. */
		name?: string | null;

		/** Kubernetes object namespace. Must be a valid DNS label. Named "ns" to avoid collision with C++ namespace keyword. For details see https://kubernetes.io/docs/tasks/administer-cluster/namespaces/. */
		ns?: string | null;
	}

	/** Kubernetes object related to the finding, uniquely identified by GKNN. Used if the object Kind is not one of Pod, Node, NodePool, Binding, or AccessReview. */
	export interface ObjectFormProperties {

		/** Kubernetes object group, such as "policy.k8s.io/v1". */
		group: FormControl<string | null | undefined>,

		/** Kubernetes object kind, such as "Namespace". */
		kind: FormControl<string | null | undefined>,

		/** Kubernetes object name. For details see https://kubernetes.io/docs/concepts/overview/working-with-objects/names/. */
		name: FormControl<string | null | undefined>,

		/** Kubernetes object namespace. Must be a valid DNS label. Named "ns" to avoid collision with C++ namespace keyword. For details see https://kubernetes.io/docs/tasks/administer-cluster/namespaces/. */
		ns: FormControl<string | null | undefined>,
	}
	export function CreateObjectFormGroup() {
		return new FormGroup<ObjectFormProperties>({
			group: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			ns: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A Kubernetes Pod. */
	export interface Pod {

		/** Pod containers associated with this finding, if any. */
		containers?: Array<Container>;

		/** Pod labels. For Kubernetes containers, these are applied to the container. */
		labels?: Array<Label>;

		/** Kubernetes Pod name. */
		name?: string | null;

		/** Kubernetes Pod namespace. */
		ns?: string | null;
	}

	/** A Kubernetes Pod. */
	export interface PodFormProperties {

		/** Kubernetes Pod name. */
		name: FormControl<string | null | undefined>,

		/** Kubernetes Pod namespace. */
		ns: FormControl<string | null | undefined>,
	}
	export function CreatePodFormGroup() {
		return new FormGroup<PodFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			ns: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains information related to the load balancer associated with the finding. */
	export interface LoadBalancer {

		/** The name of the load balancer associated with the finding. */
		name?: string | null;
	}

	/** Contains information related to the load balancer associated with the finding. */
	export interface LoadBalancerFormProperties {

		/** The name of the load balancer associated with the finding. */
		name: FormControl<string | null | undefined>,
	}
	export function CreateLoadBalancerFormGroup() {
		return new FormGroup<LoadBalancerFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An individual entry in a log. */
	export interface LogEntry {

		/** Metadata taken from a [Cloud Logging LogEntry](https://cloud.google.com/logging/docs/reference/v2/rest/v2/LogEntry) */
		cloudLoggingEntry?: CloudLoggingEntry;
	}

	/** An individual entry in a log. */
	export interface LogEntryFormProperties {
	}
	export function CreateLogEntryFormGroup() {
		return new FormGroup<LogEntryFormProperties>({
		});

	}


	/** MITRE ATT&CK tactics and techniques related to this finding. See: https://attack.mitre.org */
	export interface MitreAttack {

		/** Additional MITRE ATT&CK tactics related to this finding, if any. */
		additionalTactics?: Array<string>;

		/** Additional MITRE ATT&CK techniques related to this finding, if any, along with any of their respective parent techniques. */
		additionalTechniques?: Array<string>;

		/** The MITRE ATT&CK tactic most closely represented by this finding, if any. */
		primaryTactic?: MitreAttackPrimaryTactic | null;

		/** The MITRE ATT&CK technique most closely represented by this finding, if any. primary_techniques is a repeated field because there are multiple levels of MITRE ATT&CK techniques. If the technique most closely represented by this finding is a sub-technique (e.g. `SCANNING_IP_BLOCKS`), both the sub-technique and its parent technique(s) will be listed (e.g. `SCANNING_IP_BLOCKS`, `ACTIVE_SCANNING`). */
		primaryTechniques?: Array<string>;

		/** The MITRE ATT&CK version referenced by the above fields. E.g. "8". */
		version?: string | null;
	}

	/** MITRE ATT&CK tactics and techniques related to this finding. See: https://attack.mitre.org */
	export interface MitreAttackFormProperties {

		/** The MITRE ATT&CK tactic most closely represented by this finding, if any. */
		primaryTactic: FormControl<MitreAttackPrimaryTactic | null | undefined>,

		/** The MITRE ATT&CK version referenced by the above fields. E.g. "8". */
		version: FormControl<string | null | undefined>,
	}
	export function CreateMitreAttackFormGroup() {
		return new FormGroup<MitreAttackFormProperties>({
			primaryTactic: new FormControl<MitreAttackPrimaryTactic | null | undefined>(undefined),
			version: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum MitreAttackPrimaryTactic { TACTIC_UNSPECIFIED = 'TACTIC_UNSPECIFIED', RECONNAISSANCE = 'RECONNAISSANCE', RESOURCE_DEVELOPMENT = 'RESOURCE_DEVELOPMENT', INITIAL_ACCESS = 'INITIAL_ACCESS', EXECUTION = 'EXECUTION', PERSISTENCE = 'PERSISTENCE', PRIVILEGE_ESCALATION = 'PRIVILEGE_ESCALATION', DEFENSE_EVASION = 'DEFENSE_EVASION', CREDENTIAL_ACCESS = 'CREDENTIAL_ACCESS', DISCOVERY = 'DISCOVERY', LATERAL_MOVEMENT = 'LATERAL_MOVEMENT', COLLECTION = 'COLLECTION', COMMAND_AND_CONTROL = 'COMMAND_AND_CONTROL', EXFILTRATION = 'EXFILTRATION', IMPACT = 'IMPACT' }

	export enum FindingMute { MUTE_UNSPECIFIED = 'MUTE_UNSPECIFIED', MUTED = 'MUTED', UNMUTED = 'UNMUTED', UNDEFINED = 'UNDEFINED' }


	/** Contains information about the org policies associated with the finding. */
	export interface OrgPolicy {

		/** The resource name of the org policy. Example: "organizations/{organization_id}/policies/{constraint_name}" */
		name?: string | null;
	}

	/** Contains information about the org policies associated with the finding. */
	export interface OrgPolicyFormProperties {

		/** The resource name of the org policy. Example: "organizations/{organization_id}/policies/{constraint_name}" */
		name: FormControl<string | null | undefined>,
	}
	export function CreateOrgPolicyFormGroup() {
		return new FormGroup<OrgPolicyFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents an operating system process. */
	export interface Process {

		/** Process arguments as JSON encoded strings. */
		args?: Array<string>;

		/** True if `args` is incomplete. */
		argumentsTruncated?: boolean | null;

		/** File information about the related binary/library used by an executable, or the script used by a script interpreter */
		binary?: File;

		/** Process environment variables. */
		envVariables?: Array<EnvironmentVariable>;

		/** True if `env_variables` is incomplete. */
		envVariablesTruncated?: boolean | null;

		/** File information for libraries loaded by the process. */
		libraries?: Array<File>;

		/** The process name, as displayed in utilities like `top` and `ps`. This name can be accessed through `/proc/[pid]/comm` and changed with `prctl(PR_SET_NAME)`. */
		name?: string | null;

		/** The parent process ID. */
		parentPid?: string | null;

		/** The process ID. */
		pid?: string | null;

		/** File information about the related binary/library used by an executable, or the script used by a script interpreter */
		script?: File;
	}

	/** Represents an operating system process. */
	export interface ProcessFormProperties {

		/** True if `args` is incomplete. */
		argumentsTruncated: FormControl<boolean | null | undefined>,

		/** True if `env_variables` is incomplete. */
		envVariablesTruncated: FormControl<boolean | null | undefined>,

		/** The process name, as displayed in utilities like `top` and `ps`. This name can be accessed through `/proc/[pid]/comm` and changed with `prctl(PR_SET_NAME)`. */
		name: FormControl<string | null | undefined>,

		/** The parent process ID. */
		parentPid: FormControl<string | null | undefined>,

		/** The process ID. */
		pid: FormControl<string | null | undefined>,
	}
	export function CreateProcessFormGroup() {
		return new FormGroup<ProcessFormProperties>({
			argumentsTruncated: new FormControl<boolean | null | undefined>(undefined),
			envVariablesTruncated: new FormControl<boolean | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			parentPid: new FormControl<string | null | undefined>(undefined),
			pid: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** User specified security marks that are attached to the parent Security Command Center resource. Security marks are scoped within a Security Command Center organization -- they can be modified and viewed by all users who have proper permissions on the organization. */
	export interface SecurityMarks {

		/** The canonical name of the marks. Examples: "organizations/{organization_id}/assets/{asset_id}/securityMarks" "folders/{folder_id}/assets/{asset_id}/securityMarks" "projects/{project_number}/assets/{asset_id}/securityMarks" "organizations/{organization_id}/sources/{source_id}/findings/{finding_id}/securityMarks" "folders/{folder_id}/sources/{source_id}/findings/{finding_id}/securityMarks" "projects/{project_number}/sources/{source_id}/findings/{finding_id}/securityMarks" */
		canonicalName?: string | null;

		/** Mutable user specified security marks belonging to the parent resource. Constraints are as follows: * Keys and values are treated as case insensitive * Keys must be between 1 - 256 characters (inclusive) * Keys must be letters, numbers, underscores, or dashes * Values have leading and trailing whitespace trimmed, remaining characters must be between 1 - 4096 characters (inclusive) */
		marks?: {[id: string]: string };

		/** The relative resource name of the SecurityMarks. See: https://cloud.google.com/apis/design/resource_names#relative_resource_name Examples: "organizations/{organization_id}/assets/{asset_id}/securityMarks" "organizations/{organization_id}/sources/{source_id}/findings/{finding_id}/securityMarks". */
		name?: string | null;
	}

	/** User specified security marks that are attached to the parent Security Command Center resource. Security marks are scoped within a Security Command Center organization -- they can be modified and viewed by all users who have proper permissions on the organization. */
	export interface SecurityMarksFormProperties {

		/** The canonical name of the marks. Examples: "organizations/{organization_id}/assets/{asset_id}/securityMarks" "folders/{folder_id}/assets/{asset_id}/securityMarks" "projects/{project_number}/assets/{asset_id}/securityMarks" "organizations/{organization_id}/sources/{source_id}/findings/{finding_id}/securityMarks" "folders/{folder_id}/sources/{source_id}/findings/{finding_id}/securityMarks" "projects/{project_number}/sources/{source_id}/findings/{finding_id}/securityMarks" */
		canonicalName: FormControl<string | null | undefined>,

		/** Mutable user specified security marks belonging to the parent resource. Constraints are as follows: * Keys and values are treated as case insensitive * Keys must be between 1 - 256 characters (inclusive) * Keys must be letters, numbers, underscores, or dashes * Values have leading and trailing whitespace trimmed, remaining characters must be between 1 - 4096 characters (inclusive) */
		marks: FormControl<{[id: string]: string } | null | undefined>,

		/** The relative resource name of the SecurityMarks. See: https://cloud.google.com/apis/design/resource_names#relative_resource_name Examples: "organizations/{organization_id}/assets/{asset_id}/securityMarks" "organizations/{organization_id}/sources/{source_id}/findings/{finding_id}/securityMarks". */
		name: FormControl<string | null | undefined>,
	}
	export function CreateSecurityMarksFormGroup() {
		return new FormGroup<SecurityMarksFormProperties>({
			canonicalName: new FormControl<string | null | undefined>(undefined),
			marks: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents a posture that is deployed on Google Cloud by the Security Command Center Posture Management service. A posture contains one or more policy sets. A policy set is a group of policies that enforce a set of security rules on Google Cloud. */
	export interface SecurityPosture {

		/** The name of the policy that has been updated, for example, `projects/{project_id}/policies/{constraint_name}`. */
		changedPolicy?: string | null;

		/** Name of the posture, for example, `organizations/{org_id}/locations/{location}/postures/{posture_name}`. */
		name?: string | null;

		/** The name of the posture deployment, for example, `projects/{project_id}/posturedeployments/{posture_deployment_id}`. */
		postureDeployment?: string | null;

		/** The project, folder, or organization on which the posture is deployed, for example, `projects/{project_id}`. */
		postureDeploymentResource?: string | null;

		/** The version of the posture, for example, `c7cfa2a8`. */
		revisionId?: string | null;
	}

	/** Represents a posture that is deployed on Google Cloud by the Security Command Center Posture Management service. A posture contains one or more policy sets. A policy set is a group of policies that enforce a set of security rules on Google Cloud. */
	export interface SecurityPostureFormProperties {

		/** The name of the policy that has been updated, for example, `projects/{project_id}/policies/{constraint_name}`. */
		changedPolicy: FormControl<string | null | undefined>,

		/** Name of the posture, for example, `organizations/{org_id}/locations/{location}/postures/{posture_name}`. */
		name: FormControl<string | null | undefined>,

		/** The name of the posture deployment, for example, `projects/{project_id}/posturedeployments/{posture_deployment_id}`. */
		postureDeployment: FormControl<string | null | undefined>,

		/** The project, folder, or organization on which the posture is deployed, for example, `projects/{project_id}`. */
		postureDeploymentResource: FormControl<string | null | undefined>,

		/** The version of the posture, for example, `c7cfa2a8`. */
		revisionId: FormControl<string | null | undefined>,
	}
	export function CreateSecurityPostureFormGroup() {
		return new FormGroup<SecurityPostureFormProperties>({
			changedPolicy: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			postureDeployment: new FormControl<string | null | undefined>(undefined),
			postureDeploymentResource: new FormControl<string | null | undefined>(undefined),
			revisionId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum FindingSeverity { SEVERITY_UNSPECIFIED = 'SEVERITY_UNSPECIFIED', CRITICAL = 'CRITICAL', HIGH = 'HIGH', MEDIUM = 'MEDIUM', LOW = 'LOW' }

	export enum FindingState { STATE_UNSPECIFIED = 'STATE_UNSPECIFIED', ACTIVE = 'ACTIVE', INACTIVE = 'INACTIVE' }


	/** Refers to common vulnerability fields e.g. cve, cvss, cwe etc. */
	export interface Vulnerability {

		/** CVE stands for Common Vulnerabilities and Exposures. More information: https://cve.mitre.org */
		cve?: Cve;

		/** Package is a generic definition of a package. */
		fixedPackage?: Package;

		/** Package is a generic definition of a package. */
		offendingPackage?: Package;

		/** SecurityBulletin are notifications of vulnerabilities of Google products. */
		securityBulletin?: SecurityBulletin;
	}

	/** Refers to common vulnerability fields e.g. cve, cvss, cwe etc. */
	export interface VulnerabilityFormProperties {
	}
	export function CreateVulnerabilityFormGroup() {
		return new FormGroup<VulnerabilityFormProperties>({
		});

	}


	/** Package is a generic definition of a package. */
	export interface Package {

		/** The CPE URI where the vulnerability was detected. */
		cpeUri?: string | null;

		/** The name of the package where the vulnerability was detected. */
		packageName?: string | null;

		/** Type of package, for example, os, maven, or go. */
		packageType?: string | null;

		/** The version of the package. */
		packageVersion?: string | null;
	}

	/** Package is a generic definition of a package. */
	export interface PackageFormProperties {

		/** The CPE URI where the vulnerability was detected. */
		cpeUri: FormControl<string | null | undefined>,

		/** The name of the package where the vulnerability was detected. */
		packageName: FormControl<string | null | undefined>,

		/** Type of package, for example, os, maven, or go. */
		packageType: FormControl<string | null | undefined>,

		/** The version of the package. */
		packageVersion: FormControl<string | null | undefined>,
	}
	export function CreatePackageFormGroup() {
		return new FormGroup<PackageFormProperties>({
			cpeUri: new FormControl<string | null | undefined>(undefined),
			packageName: new FormControl<string | null | undefined>(undefined),
			packageType: new FormControl<string | null | undefined>(undefined),
			packageVersion: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** SecurityBulletin are notifications of vulnerabilities of Google products. */
	export interface SecurityBulletin {

		/** ID of the bulletin corresponding to the vulnerability. */
		bulletinId?: string | null;

		/** Submission time of this Security Bulletin. */
		submissionTime?: string | null;

		/** This represents a version that the cluster receiving this notification should be upgraded to, based on its current version. For example, 1.15.0 */
		suggestedUpgradeVersion?: string | null;
	}

	/** SecurityBulletin are notifications of vulnerabilities of Google products. */
	export interface SecurityBulletinFormProperties {

		/** ID of the bulletin corresponding to the vulnerability. */
		bulletinId: FormControl<string | null | undefined>,

		/** Submission time of this Security Bulletin. */
		submissionTime: FormControl<string | null | undefined>,

		/** This represents a version that the cluster receiving this notification should be upgraded to, based on its current version. For example, 1.15.0 */
		suggestedUpgradeVersion: FormControl<string | null | undefined>,
	}
	export function CreateSecurityBulletinFormGroup() {
		return new FormGroup<SecurityBulletinFormProperties>({
			bulletinId: new FormControl<string | null | undefined>(undefined),
			submissionTime: new FormControl<string | null | undefined>(undefined),
			suggestedUpgradeVersion: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Message that contains the resource name and display name of a folder resource. */
	export interface Folder {

		/** Full resource name of this folder. See: https://cloud.google.com/apis/design/resource_names#full_resource_name */
		resourceFolder?: string | null;

		/** The user defined display name for this folder. */
		resourceFolderDisplayName?: string | null;
	}

	/** Message that contains the resource name and display name of a folder resource. */
	export interface FolderFormProperties {

		/** Full resource name of this folder. See: https://cloud.google.com/apis/design/resource_names#full_resource_name */
		resourceFolder: FormControl<string | null | undefined>,

		/** The user defined display name for this folder. */
		resourceFolderDisplayName: FormControl<string | null | undefined>,
	}
	export function CreateFolderFormGroup() {
		return new FormGroup<FolderFormProperties>({
			resourceFolder: new FormControl<string | null | undefined>(undefined),
			resourceFolderDisplayName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Configures how to deliver Findings to BigQuery Instance. */
	export interface GoogleCloudSecuritycenterV1BigQueryExport {

		/** Output only. The time at which the BigQuery export was created. This field is set by the server and will be ignored if provided on export on creation. */
		createTime?: string | null;

		/** The dataset to write findings' updates to. Its format is "projects/[project_id]/datasets/[bigquery_dataset_id]". BigQuery Dataset unique ID must contain only letters (a-z, A-Z), numbers (0-9), or underscores (_). */
		dataset?: string | null;

		/** The description of the export (max of 1024 characters). */
		description?: string | null;

		/** Expression that defines the filter to apply across create/update events of findings. The expression is a list of zero or more restrictions combined via logical operators `AND` and `OR`. Parentheses are supported, and `OR` has higher precedence than `AND`. Restrictions have the form ` ` and may have a `-` character in front of them to indicate negation. The fields map to those defined in the corresponding resource. The supported operators are: * `=` for all value types. * `>`, `<`, `>=`, `<=` for integer values. * `:`, meaning substring matching, for strings. The supported value types are: * string literals in quotes. * integer literals without quotes. * boolean literals `true` and `false` without quotes. */
		filter?: string | null;

		/** Output only. Email address of the user who last edited the BigQuery export. This field is set by the server and will be ignored if provided on export creation or update. */
		mostRecentEditor?: string | null;

		/** The relative resource name of this export. See: https://cloud.google.com/apis/design/resource_names#relative_resource_name. Example format: "organizations/{organization_id}/bigQueryExports/{export_id}" Example format: "folders/{folder_id}/bigQueryExports/{export_id}" Example format: "projects/{project_id}/bigQueryExports/{export_id}" This field is provided in responses, and is ignored when provided in create requests. */
		name?: string | null;

		/** Output only. The service account that needs permission to create table and upload data to the BigQuery dataset. */
		principal?: string | null;

		/** Output only. The most recent time at which the BigQuery export was updated. This field is set by the server and will be ignored if provided on export creation or update. */
		updateTime?: string | null;
	}

	/** Configures how to deliver Findings to BigQuery Instance. */
	export interface GoogleCloudSecuritycenterV1BigQueryExportFormProperties {

		/** Output only. The time at which the BigQuery export was created. This field is set by the server and will be ignored if provided on export on creation. */
		createTime: FormControl<string | null | undefined>,

		/** The dataset to write findings' updates to. Its format is "projects/[project_id]/datasets/[bigquery_dataset_id]". BigQuery Dataset unique ID must contain only letters (a-z, A-Z), numbers (0-9), or underscores (_). */
		dataset: FormControl<string | null | undefined>,

		/** The description of the export (max of 1024 characters). */
		description: FormControl<string | null | undefined>,

		/** Expression that defines the filter to apply across create/update events of findings. The expression is a list of zero or more restrictions combined via logical operators `AND` and `OR`. Parentheses are supported, and `OR` has higher precedence than `AND`. Restrictions have the form ` ` and may have a `-` character in front of them to indicate negation. The fields map to those defined in the corresponding resource. The supported operators are: * `=` for all value types. * `>`, `<`, `>=`, `<=` for integer values. * `:`, meaning substring matching, for strings. The supported value types are: * string literals in quotes. * integer literals without quotes. * boolean literals `true` and `false` without quotes. */
		filter: FormControl<string | null | undefined>,

		/** Output only. Email address of the user who last edited the BigQuery export. This field is set by the server and will be ignored if provided on export creation or update. */
		mostRecentEditor: FormControl<string | null | undefined>,

		/** The relative resource name of this export. See: https://cloud.google.com/apis/design/resource_names#relative_resource_name. Example format: "organizations/{organization_id}/bigQueryExports/{export_id}" Example format: "folders/{folder_id}/bigQueryExports/{export_id}" Example format: "projects/{project_id}/bigQueryExports/{export_id}" This field is provided in responses, and is ignored when provided in create requests. */
		name: FormControl<string | null | undefined>,

		/** Output only. The service account that needs permission to create table and upload data to the BigQuery dataset. */
		principal: FormControl<string | null | undefined>,

		/** Output only. The most recent time at which the BigQuery export was updated. This field is set by the server and will be ignored if provided on export creation or update. */
		updateTime: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudSecuritycenterV1BigQueryExportFormGroup() {
		return new FormGroup<GoogleCloudSecuritycenterV1BigQueryExportFormProperties>({
			createTime: new FormControl<string | null | undefined>(undefined),
			dataset: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			filter: new FormControl<string | null | undefined>(undefined),
			mostRecentEditor: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			principal: new FormControl<string | null | undefined>(undefined),
			updateTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The response to a BulkMute request. Contains the LRO information. */
	export interface GoogleCloudSecuritycenterV1BulkMuteFindingsResponse {
	}

	/** The response to a BulkMute request. Contains the LRO information. */
	export interface GoogleCloudSecuritycenterV1BulkMuteFindingsResponseFormProperties {
	}
	export function CreateGoogleCloudSecuritycenterV1BulkMuteFindingsResponseFormGroup() {
		return new FormGroup<GoogleCloudSecuritycenterV1BulkMuteFindingsResponseFormProperties>({
		});

	}


	/** Defines the properties in a custom module configuration for Security Health Analytics. Use the custom module configuration to create custom detectors that generate custom findings for resources that you specify. */
	export interface GoogleCloudSecuritycenterV1CustomConfig {

		/** A set of optional name-value pairs that define custom source properties to return with each finding that is generated by the custom module. The custom source properties that are defined here are included in the finding JSON under `sourceProperties`. */
		customOutput?: GoogleCloudSecuritycenterV1CustomOutputSpec;

		/** Text that describes the vulnerability or misconfiguration that the custom module detects. This explanation is returned with each finding instance to help investigators understand the detected issue. The text must be enclosed in quotation marks. */
		description?: string | null;

		/** Represents a textual expression in the Common Expression Language (CEL) syntax. CEL is a C-like expression language. The syntax and semantics of CEL are documented at https://github.com/google/cel-spec. Example (Comparison): title: "Summary size limit" description: "Determines if a summary is less than 100 chars" expression: "document.summary.size() < 100" Example (Equality): title: "Requestor is owner" description: "Determines if requestor is the document owner" expression: "document.owner == request.auth.claims.email" Example (Logic): title: "Public documents" description: "Determine whether the document should be publicly visible" expression: "document.type != 'private' && document.type != 'internal'" Example (Data Manipulation): title: "Notification string" description: "Create a notification string with a timestamp." expression: "'New message received at ' + string(document.create_time)" The exact variables and functions that may be referenced within an expression are determined by the service that evaluates it. See the service documentation for additional information. */
		predicate?: Expr;

		/** An explanation of the recommended steps that security teams can take to resolve the detected issue. This explanation is returned with each finding generated by this module in the `nextSteps` property of the finding JSON. */
		recommendation?: string | null;

		/** Resource for selecting resource type. */
		resourceSelector?: GoogleCloudSecuritycenterV1ResourceSelector;

		/** The severity to assign to findings generated by the module. */
		severity?: FindingSeverity | null;
	}

	/** Defines the properties in a custom module configuration for Security Health Analytics. Use the custom module configuration to create custom detectors that generate custom findings for resources that you specify. */
	export interface GoogleCloudSecuritycenterV1CustomConfigFormProperties {

		/** Text that describes the vulnerability or misconfiguration that the custom module detects. This explanation is returned with each finding instance to help investigators understand the detected issue. The text must be enclosed in quotation marks. */
		description: FormControl<string | null | undefined>,

		/** An explanation of the recommended steps that security teams can take to resolve the detected issue. This explanation is returned with each finding generated by this module in the `nextSteps` property of the finding JSON. */
		recommendation: FormControl<string | null | undefined>,

		/** The severity to assign to findings generated by the module. */
		severity: FormControl<FindingSeverity | null | undefined>,
	}
	export function CreateGoogleCloudSecuritycenterV1CustomConfigFormGroup() {
		return new FormGroup<GoogleCloudSecuritycenterV1CustomConfigFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			recommendation: new FormControl<string | null | undefined>(undefined),
			severity: new FormControl<FindingSeverity | null | undefined>(undefined),
		});

	}


	/** A set of optional name-value pairs that define custom source properties to return with each finding that is generated by the custom module. The custom source properties that are defined here are included in the finding JSON under `sourceProperties`. */
	export interface GoogleCloudSecuritycenterV1CustomOutputSpec {

		/** A list of custom output properties to add to the finding. */
		properties?: Array<GoogleCloudSecuritycenterV1Property>;
	}

	/** A set of optional name-value pairs that define custom source properties to return with each finding that is generated by the custom module. The custom source properties that are defined here are included in the finding JSON under `sourceProperties`. */
	export interface GoogleCloudSecuritycenterV1CustomOutputSpecFormProperties {
	}
	export function CreateGoogleCloudSecuritycenterV1CustomOutputSpecFormGroup() {
		return new FormGroup<GoogleCloudSecuritycenterV1CustomOutputSpecFormProperties>({
		});

	}


	/** An individual name-value pair that defines a custom source property. */
	export interface GoogleCloudSecuritycenterV1Property {

		/** Name of the property for the custom output. */
		name?: string | null;

		/** Represents a textual expression in the Common Expression Language (CEL) syntax. CEL is a C-like expression language. The syntax and semantics of CEL are documented at https://github.com/google/cel-spec. Example (Comparison): title: "Summary size limit" description: "Determines if a summary is less than 100 chars" expression: "document.summary.size() < 100" Example (Equality): title: "Requestor is owner" description: "Determines if requestor is the document owner" expression: "document.owner == request.auth.claims.email" Example (Logic): title: "Public documents" description: "Determine whether the document should be publicly visible" expression: "document.type != 'private' && document.type != 'internal'" Example (Data Manipulation): title: "Notification string" description: "Create a notification string with a timestamp." expression: "'New message received at ' + string(document.create_time)" The exact variables and functions that may be referenced within an expression are determined by the service that evaluates it. See the service documentation for additional information. */
		valueExpression?: Expr;
	}

	/** An individual name-value pair that defines a custom source property. */
	export interface GoogleCloudSecuritycenterV1PropertyFormProperties {

		/** Name of the property for the custom output. */
		name: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudSecuritycenterV1PropertyFormGroup() {
		return new FormGroup<GoogleCloudSecuritycenterV1PropertyFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Resource for selecting resource type. */
	export interface GoogleCloudSecuritycenterV1ResourceSelector {

		/** The resource types to run the detector on. */
		resourceTypes?: Array<string>;
	}

	/** Resource for selecting resource type. */
	export interface GoogleCloudSecuritycenterV1ResourceSelectorFormProperties {
	}
	export function CreateGoogleCloudSecuritycenterV1ResourceSelectorFormGroup() {
		return new FormGroup<GoogleCloudSecuritycenterV1ResourceSelectorFormProperties>({
		});

	}


	/** An EffectiveSecurityHealthAnalyticsCustomModule is the representation of a Security Health Analytics custom module at a specified level of the resource hierarchy: organization, folder, or project. If a custom module is inherited from a parent organization or folder, the value of the `enablementState` property in EffectiveSecurityHealthAnalyticsCustomModule is set to the value that is effective in the parent, instead of `INHERITED`. For example, if the module is enabled in a parent organization or folder, the effective enablement_state for the module in all child folders or projects is also `enabled`. EffectiveSecurityHealthAnalyticsCustomModule is read-only. */
	export interface GoogleCloudSecuritycenterV1EffectiveSecurityHealthAnalyticsCustomModule {

		/** Defines the properties in a custom module configuration for Security Health Analytics. Use the custom module configuration to create custom detectors that generate custom findings for resources that you specify. */
		customConfig?: GoogleCloudSecuritycenterV1CustomConfig;

		/** Output only. The display name for the custom module. The name must be between 1 and 128 characters, start with a lowercase letter, and contain alphanumeric characters or underscores only. */
		displayName?: string | null;

		/** Output only. The effective state of enablement for the module at the given level of the hierarchy. */
		enablementState?: GoogleCloudSecuritycenterV1EffectiveSecurityHealthAnalyticsCustomModuleEnablementState | null;

		/** Output only. The resource name of the custom module. Its format is "organizations/{organization}/securityHealthAnalyticsSettings/effectiveCustomModules/{customModule}", or "folders/{folder}/securityHealthAnalyticsSettings/effectiveCustomModules/{customModule}", or "projects/{project}/securityHealthAnalyticsSettings/effectiveCustomModules/{customModule}" */
		name?: string | null;
	}

	/** An EffectiveSecurityHealthAnalyticsCustomModule is the representation of a Security Health Analytics custom module at a specified level of the resource hierarchy: organization, folder, or project. If a custom module is inherited from a parent organization or folder, the value of the `enablementState` property in EffectiveSecurityHealthAnalyticsCustomModule is set to the value that is effective in the parent, instead of `INHERITED`. For example, if the module is enabled in a parent organization or folder, the effective enablement_state for the module in all child folders or projects is also `enabled`. EffectiveSecurityHealthAnalyticsCustomModule is read-only. */
	export interface GoogleCloudSecuritycenterV1EffectiveSecurityHealthAnalyticsCustomModuleFormProperties {

		/** Output only. The display name for the custom module. The name must be between 1 and 128 characters, start with a lowercase letter, and contain alphanumeric characters or underscores only. */
		displayName: FormControl<string | null | undefined>,

		/** Output only. The effective state of enablement for the module at the given level of the hierarchy. */
		enablementState: FormControl<GoogleCloudSecuritycenterV1EffectiveSecurityHealthAnalyticsCustomModuleEnablementState | null | undefined>,

		/** Output only. The resource name of the custom module. Its format is "organizations/{organization}/securityHealthAnalyticsSettings/effectiveCustomModules/{customModule}", or "folders/{folder}/securityHealthAnalyticsSettings/effectiveCustomModules/{customModule}", or "projects/{project}/securityHealthAnalyticsSettings/effectiveCustomModules/{customModule}" */
		name: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudSecuritycenterV1EffectiveSecurityHealthAnalyticsCustomModuleFormGroup() {
		return new FormGroup<GoogleCloudSecuritycenterV1EffectiveSecurityHealthAnalyticsCustomModuleFormProperties>({
			displayName: new FormControl<string | null | undefined>(undefined),
			enablementState: new FormControl<GoogleCloudSecuritycenterV1EffectiveSecurityHealthAnalyticsCustomModuleEnablementState | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum GoogleCloudSecuritycenterV1EffectiveSecurityHealthAnalyticsCustomModuleEnablementState { ENABLEMENT_STATE_UNSPECIFIED = 'ENABLEMENT_STATE_UNSPECIFIED', ENABLED = 'ENABLED', DISABLED = 'DISABLED' }


	/** A mute config is a Cloud SCC resource that contains the configuration to mute create/update events of findings. */
	export interface GoogleCloudSecuritycenterV1MuteConfig {

		/** Output only. The time at which the mute config was created. This field is set by the server and will be ignored if provided on config creation. */
		createTime?: string | null;

		/** A description of the mute config. */
		description?: string | null;

		/** The human readable name to be displayed for the mute config. */
		displayName?: string | null;

		/** Required. An expression that defines the filter to apply across create/update events of findings. While creating a filter string, be mindful of the scope in which the mute configuration is being created. E.g., If a filter contains project = X but is created under the project = Y scope, it might not match any findings. The following field and operator combinations are supported: * severity: `=`, `:` * category: `=`, `:` * resource.name: `=`, `:` * resource.project_name: `=`, `:` * resource.project_display_name: `=`, `:` * resource.folders.resource_folder: `=`, `:` * resource.parent_name: `=`, `:` * resource.parent_display_name: `=`, `:` * resource.type: `=`, `:` * finding_class: `=`, `:` * indicator.ip_addresses: `=`, `:` * indicator.domains: `=`, `:` */
		filter?: string | null;

		/** Output only. Email address of the user who last edited the mute config. This field is set by the server and will be ignored if provided on config creation or update. */
		mostRecentEditor?: string | null;

		/** This field will be ignored if provided on config creation. Format "organizations/{organization}/muteConfigs/{mute_config}" "folders/{folder}/muteConfigs/{mute_config}" "projects/{project}/muteConfigs/{mute_config}" "organizations/{organization}/locations/global/muteConfigs/{mute_config}" "folders/{folder}/locations/global/muteConfigs/{mute_config}" "projects/{project}/locations/global/muteConfigs/{mute_config}" */
		name?: string | null;

		/** Output only. The most recent time at which the mute config was updated. This field is set by the server and will be ignored if provided on config creation or update. */
		updateTime?: string | null;
	}

	/** A mute config is a Cloud SCC resource that contains the configuration to mute create/update events of findings. */
	export interface GoogleCloudSecuritycenterV1MuteConfigFormProperties {

		/** Output only. The time at which the mute config was created. This field is set by the server and will be ignored if provided on config creation. */
		createTime: FormControl<string | null | undefined>,

		/** A description of the mute config. */
		description: FormControl<string | null | undefined>,

		/** The human readable name to be displayed for the mute config. */
		displayName: FormControl<string | null | undefined>,

		/** Required. An expression that defines the filter to apply across create/update events of findings. While creating a filter string, be mindful of the scope in which the mute configuration is being created. E.g., If a filter contains project = X but is created under the project = Y scope, it might not match any findings. The following field and operator combinations are supported: * severity: `=`, `:` * category: `=`, `:` * resource.name: `=`, `:` * resource.project_name: `=`, `:` * resource.project_display_name: `=`, `:` * resource.folders.resource_folder: `=`, `:` * resource.parent_name: `=`, `:` * resource.parent_display_name: `=`, `:` * resource.type: `=`, `:` * finding_class: `=`, `:` * indicator.ip_addresses: `=`, `:` * indicator.domains: `=`, `:` */
		filter: FormControl<string | null | undefined>,

		/** Output only. Email address of the user who last edited the mute config. This field is set by the server and will be ignored if provided on config creation or update. */
		mostRecentEditor: FormControl<string | null | undefined>,

		/** This field will be ignored if provided on config creation. Format "organizations/{organization}/muteConfigs/{mute_config}" "folders/{folder}/muteConfigs/{mute_config}" "projects/{project}/muteConfigs/{mute_config}" "organizations/{organization}/locations/global/muteConfigs/{mute_config}" "folders/{folder}/locations/global/muteConfigs/{mute_config}" "projects/{project}/locations/global/muteConfigs/{mute_config}" */
		name: FormControl<string | null | undefined>,

		/** Output only. The most recent time at which the mute config was updated. This field is set by the server and will be ignored if provided on config creation or update. */
		updateTime: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudSecuritycenterV1MuteConfigFormGroup() {
		return new FormGroup<GoogleCloudSecuritycenterV1MuteConfigFormProperties>({
			createTime: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			displayName: new FormControl<string | null | undefined>(undefined),
			filter: new FormControl<string | null | undefined>(undefined),
			mostRecentEditor: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			updateTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Cloud SCC's Notification */
	export interface GoogleCloudSecuritycenterV1NotificationMessage {

		/** Security Command Center finding. A finding is a record of assessment data like security, risk, health, or privacy, that is ingested into Security Command Center for presentation, notification, analysis, policy testing, and enforcement. For example, a cross-site scripting (XSS) vulnerability in an App Engine application is a finding. */
		finding?: Finding;

		/** Name of the notification config that generated current notification. */
		notificationConfigName?: string | null;

		/** Information related to the Google Cloud resource. */
		resource?: GoogleCloudSecuritycenterV1Resource;
	}

	/** Cloud SCC's Notification */
	export interface GoogleCloudSecuritycenterV1NotificationMessageFormProperties {

		/** Name of the notification config that generated current notification. */
		notificationConfigName: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudSecuritycenterV1NotificationMessageFormGroup() {
		return new FormGroup<GoogleCloudSecuritycenterV1NotificationMessageFormProperties>({
			notificationConfigName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Information related to the Google Cloud resource. */
	export interface GoogleCloudSecuritycenterV1Resource {

		/** The human readable name of the resource. */
		displayName?: string | null;

		/** Output only. Contains a Folder message for each folder in the assets ancestry. The first folder is the deepest nested folder, and the last folder is the folder directly under the Organization. */
		folders?: Array<Folder>;

		/** The full resource name of the resource. See: https://cloud.google.com/apis/design/resource_names#full_resource_name */
		name?: string | null;

		/** The full resource name of resource's parent. */
		parent?: string | null;

		/** The human readable name of resource's parent. */
		parentDisplayName?: string | null;

		/** The full resource name of project that the resource belongs to. */
		project?: string | null;

		/** The project ID that the resource belongs to. */
		projectDisplayName?: string | null;

		/** The full resource type of the resource. */
		type?: string | null;
	}

	/** Information related to the Google Cloud resource. */
	export interface GoogleCloudSecuritycenterV1ResourceFormProperties {

		/** The human readable name of the resource. */
		displayName: FormControl<string | null | undefined>,

		/** The full resource name of the resource. See: https://cloud.google.com/apis/design/resource_names#full_resource_name */
		name: FormControl<string | null | undefined>,

		/** The full resource name of resource's parent. */
		parent: FormControl<string | null | undefined>,

		/** The human readable name of resource's parent. */
		parentDisplayName: FormControl<string | null | undefined>,

		/** The full resource name of project that the resource belongs to. */
		project: FormControl<string | null | undefined>,

		/** The project ID that the resource belongs to. */
		projectDisplayName: FormControl<string | null | undefined>,

		/** The full resource type of the resource. */
		type: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudSecuritycenterV1ResourceFormGroup() {
		return new FormGroup<GoogleCloudSecuritycenterV1ResourceFormProperties>({
			displayName: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			parent: new FormControl<string | null | undefined>(undefined),
			parentDisplayName: new FormControl<string | null | undefined>(undefined),
			project: new FormControl<string | null | undefined>(undefined),
			projectDisplayName: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A resource value config (RVC) is a mapping configuration of user's resources to resource values. Used in Attack path simulations. */
	export interface GoogleCloudSecuritycenterV1ResourceValueConfig {

		/** Output only. Timestamp this resource value config was created. */
		createTime?: string | null;

		/** Description of the resource value config. */
		description?: string | null;

		/** Name for the resource value config */
		name?: string | null;

		/** List of resource labels to search for, evaluated with AND. E.g. "resource_labels_selector": {"key": "value", "env": "prod"} will match resources with labels "key": "value" AND "env": "prod" https://cloud.google.com/resource-manager/docs/creating-managing-labels */
		resourceLabelsSelector?: {[id: string]: string };

		/** Apply resource_value only to resources that match resource_type. resource_type will be checked with "AND" of other resources. E.g. "storage.googleapis.com/Bucket" with resource_value "HIGH" will apply "HIGH" value only to "storage.googleapis.com/Bucket" resources. */
		resourceType?: string | null;

		/** Required. Resource value level this expression represents */
		resourceValue?: GoogleCloudSecuritycenterV1ResourceValueConfigResourceValue | null;

		/** Project or folder to scope this config to. For example, "project/456" would apply this config only to resources in "project/456" scope will be checked with "AND" of other resources. */
		scope?: string | null;

		/** Required. Tag values combined with AND to check against. Values in the form "tagValues/123" E.g. [ "tagValues/123", "tagValues/456", "tagValues/789" ] https://cloud.google.com/resource-manager/docs/tags/tags-creating-and-managing */
		tagValues?: Array<string>;

		/** Output only. Timestamp this resource value config was last updated. */
		updateTime?: string | null;
	}

	/** A resource value config (RVC) is a mapping configuration of user's resources to resource values. Used in Attack path simulations. */
	export interface GoogleCloudSecuritycenterV1ResourceValueConfigFormProperties {

		/** Output only. Timestamp this resource value config was created. */
		createTime: FormControl<string | null | undefined>,

		/** Description of the resource value config. */
		description: FormControl<string | null | undefined>,

		/** Name for the resource value config */
		name: FormControl<string | null | undefined>,

		/** List of resource labels to search for, evaluated with AND. E.g. "resource_labels_selector": {"key": "value", "env": "prod"} will match resources with labels "key": "value" AND "env": "prod" https://cloud.google.com/resource-manager/docs/creating-managing-labels */
		resourceLabelsSelector: FormControl<{[id: string]: string } | null | undefined>,

		/** Apply resource_value only to resources that match resource_type. resource_type will be checked with "AND" of other resources. E.g. "storage.googleapis.com/Bucket" with resource_value "HIGH" will apply "HIGH" value only to "storage.googleapis.com/Bucket" resources. */
		resourceType: FormControl<string | null | undefined>,

		/** Required. Resource value level this expression represents */
		resourceValue: FormControl<GoogleCloudSecuritycenterV1ResourceValueConfigResourceValue | null | undefined>,

		/** Project or folder to scope this config to. For example, "project/456" would apply this config only to resources in "project/456" scope will be checked with "AND" of other resources. */
		scope: FormControl<string | null | undefined>,

		/** Output only. Timestamp this resource value config was last updated. */
		updateTime: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudSecuritycenterV1ResourceValueConfigFormGroup() {
		return new FormGroup<GoogleCloudSecuritycenterV1ResourceValueConfigFormProperties>({
			createTime: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			resourceLabelsSelector: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			resourceType: new FormControl<string | null | undefined>(undefined),
			resourceValue: new FormControl<GoogleCloudSecuritycenterV1ResourceValueConfigResourceValue | null | undefined>(undefined),
			scope: new FormControl<string | null | undefined>(undefined),
			updateTime: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum GoogleCloudSecuritycenterV1ResourceValueConfigResourceValue { RESOURCE_VALUE_UNSPECIFIED = 'RESOURCE_VALUE_UNSPECIFIED', HIGH = 'HIGH', MEDIUM = 'MEDIUM', LOW = 'LOW', NONE = 'NONE' }


	/** Response of asset discovery run */
	export interface GoogleCloudSecuritycenterV1RunAssetDiscoveryResponse {

		/** The duration between asset discovery run start and end */
		duration?: string | null;

		/** The state of an asset discovery run. */
		state?: GoogleCloudSecuritycenterV1RunAssetDiscoveryResponseState | null;
	}

	/** Response of asset discovery run */
	export interface GoogleCloudSecuritycenterV1RunAssetDiscoveryResponseFormProperties {

		/** The duration between asset discovery run start and end */
		duration: FormControl<string | null | undefined>,

		/** The state of an asset discovery run. */
		state: FormControl<GoogleCloudSecuritycenterV1RunAssetDiscoveryResponseState | null | undefined>,
	}
	export function CreateGoogleCloudSecuritycenterV1RunAssetDiscoveryResponseFormGroup() {
		return new FormGroup<GoogleCloudSecuritycenterV1RunAssetDiscoveryResponseFormProperties>({
			duration: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<GoogleCloudSecuritycenterV1RunAssetDiscoveryResponseState | null | undefined>(undefined),
		});

	}

	export enum GoogleCloudSecuritycenterV1RunAssetDiscoveryResponseState { STATE_UNSPECIFIED = 'STATE_UNSPECIFIED', COMPLETED = 'COMPLETED', SUPERSEDED = 'SUPERSEDED', TERMINATED = 'TERMINATED' }


	/** Represents an instance of a Security Health Analytics custom module, including its full module name, display name, enablement state, and last updated time. You can create a custom module at the organization, folder, or project level. Custom modules that you create at the organization or folder level are inherited by the child folders and projects. */
	export interface GoogleCloudSecuritycenterV1SecurityHealthAnalyticsCustomModule {

		/** Output only. If empty, indicates that the custom module was created in the organization, folder, or project in which you are viewing the custom module. Otherwise, `ancestor_module` specifies the organization or folder from which the custom module is inherited. */
		ancestorModule?: string | null;

		/** Defines the properties in a custom module configuration for Security Health Analytics. Use the custom module configuration to create custom detectors that generate custom findings for resources that you specify. */
		customConfig?: GoogleCloudSecuritycenterV1CustomConfig;

		/** The display name of the Security Health Analytics custom module. This display name becomes the finding category for all findings that are returned by this custom module. The display name must be between 1 and 128 characters, start with a lowercase letter, and contain alphanumeric characters or underscores only. */
		displayName?: string | null;

		/** The enablement state of the custom module. */
		enablementState?: GoogleCloudSecuritycenterV1SecurityHealthAnalyticsCustomModuleEnablementState | null;

		/** Output only. The editor that last updated the custom module. */
		lastEditor?: string | null;

		/** Immutable. The resource name of the custom module. Its format is "organizations/{organization}/securityHealthAnalyticsSettings/customModules/{customModule}", or "folders/{folder}/securityHealthAnalyticsSettings/customModules/{customModule}", or "projects/{project}/securityHealthAnalyticsSettings/customModules/{customModule}" The id {customModule} is server-generated and is not user settable. It will be a numeric id containing 1-20 digits. */
		name?: string | null;

		/** Output only. The time at which the custom module was last updated. */
		updateTime?: string | null;
	}

	/** Represents an instance of a Security Health Analytics custom module, including its full module name, display name, enablement state, and last updated time. You can create a custom module at the organization, folder, or project level. Custom modules that you create at the organization or folder level are inherited by the child folders and projects. */
	export interface GoogleCloudSecuritycenterV1SecurityHealthAnalyticsCustomModuleFormProperties {

		/** Output only. If empty, indicates that the custom module was created in the organization, folder, or project in which you are viewing the custom module. Otherwise, `ancestor_module` specifies the organization or folder from which the custom module is inherited. */
		ancestorModule: FormControl<string | null | undefined>,

		/** The display name of the Security Health Analytics custom module. This display name becomes the finding category for all findings that are returned by this custom module. The display name must be between 1 and 128 characters, start with a lowercase letter, and contain alphanumeric characters or underscores only. */
		displayName: FormControl<string | null | undefined>,

		/** The enablement state of the custom module. */
		enablementState: FormControl<GoogleCloudSecuritycenterV1SecurityHealthAnalyticsCustomModuleEnablementState | null | undefined>,

		/** Output only. The editor that last updated the custom module. */
		lastEditor: FormControl<string | null | undefined>,

		/** Immutable. The resource name of the custom module. Its format is "organizations/{organization}/securityHealthAnalyticsSettings/customModules/{customModule}", or "folders/{folder}/securityHealthAnalyticsSettings/customModules/{customModule}", or "projects/{project}/securityHealthAnalyticsSettings/customModules/{customModule}" The id {customModule} is server-generated and is not user settable. It will be a numeric id containing 1-20 digits. */
		name: FormControl<string | null | undefined>,

		/** Output only. The time at which the custom module was last updated. */
		updateTime: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudSecuritycenterV1SecurityHealthAnalyticsCustomModuleFormGroup() {
		return new FormGroup<GoogleCloudSecuritycenterV1SecurityHealthAnalyticsCustomModuleFormProperties>({
			ancestorModule: new FormControl<string | null | undefined>(undefined),
			displayName: new FormControl<string | null | undefined>(undefined),
			enablementState: new FormControl<GoogleCloudSecuritycenterV1SecurityHealthAnalyticsCustomModuleEnablementState | null | undefined>(undefined),
			lastEditor: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			updateTime: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum GoogleCloudSecuritycenterV1SecurityHealthAnalyticsCustomModuleEnablementState { ENABLEMENT_STATE_UNSPECIFIED = 'ENABLEMENT_STATE_UNSPECIFIED', ENABLED = 'ENABLED', DISABLED = 'DISABLED', INHERITED = 'INHERITED' }


	/** Response of asset discovery run */
	export interface GoogleCloudSecuritycenterV1beta1RunAssetDiscoveryResponse {

		/** The duration between asset discovery run start and end */
		duration?: string | null;

		/** The state of an asset discovery run. */
		state?: GoogleCloudSecuritycenterV1RunAssetDiscoveryResponseState | null;
	}

	/** Response of asset discovery run */
	export interface GoogleCloudSecuritycenterV1beta1RunAssetDiscoveryResponseFormProperties {

		/** The duration between asset discovery run start and end */
		duration: FormControl<string | null | undefined>,

		/** The state of an asset discovery run. */
		state: FormControl<GoogleCloudSecuritycenterV1RunAssetDiscoveryResponseState | null | undefined>,
	}
	export function CreateGoogleCloudSecuritycenterV1beta1RunAssetDiscoveryResponseFormGroup() {
		return new FormGroup<GoogleCloudSecuritycenterV1beta1RunAssetDiscoveryResponseFormProperties>({
			duration: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<GoogleCloudSecuritycenterV1RunAssetDiscoveryResponseState | null | undefined>(undefined),
		});

	}


	/** Security Command Center finding. A finding is a record of assessment data (security, risk, health or privacy) ingested into Security Command Center for presentation, notification, analysis, policy testing, and enforcement. For example, an XSS vulnerability in an App Engine application is a finding. */
	export interface GoogleCloudSecuritycenterV1p1beta1Finding {

		/** The canonical name of the finding. It's either "organizations/{organization_id}/sources/{source_id}/findings/{finding_id}", "folders/{folder_id}/sources/{source_id}/findings/{finding_id}" or "projects/{project_number}/sources/{source_id}/findings/{finding_id}", depending on the closest CRM ancestor of the resource associated with the finding. */
		canonicalName?: string | null;

		/** The additional taxonomy group within findings from a given source. This field is immutable after creation time. Example: "XSS_FLASH_INJECTION" */
		category?: string | null;

		/** The time at which the finding was created in Security Command Center. */
		createTime?: string | null;

		/** The time at which the event took place, or when an update to the finding occurred. For example, if the finding represents an open firewall it would capture the time the detector believes the firewall became open. The accuracy is determined by the detector. If the finding were to be resolved afterward, this time would reflect when the finding was resolved. Must not be set to a value greater than the current timestamp. */
		eventTime?: string | null;

		/** The URI that, if available, points to a web page outside of Security Command Center where additional information about the finding can be found. This field is guaranteed to be either empty or a well formed URL. */
		externalUri?: string | null;

		/** The relative resource name of this finding. See: https://cloud.google.com/apis/design/resource_names#relative_resource_name Example: "organizations/{organization_id}/sources/{source_id}/findings/{finding_id}" */
		name?: string | null;

		/** The relative resource name of the source the finding belongs to. See: https://cloud.google.com/apis/design/resource_names#relative_resource_name This field is immutable after creation time. For example: "organizations/{organization_id}/sources/{source_id}" */
		parent?: string | null;

		/** For findings on Google Cloud resources, the full resource name of the Google Cloud resource this finding is for. See: https://cloud.google.com/apis/design/resource_names#full_resource_name When the finding is for a non-Google Cloud resource, the resourceName can be a customer or partner defined string. This field is immutable after creation time. */
		resourceName?: string | null;

		/** User specified security marks that are attached to the parent Security Command Center resource. Security marks are scoped within a Security Command Center organization -- they can be modified and viewed by all users who have proper permissions on the organization. */
		securityMarks?: GoogleCloudSecuritycenterV1p1beta1SecurityMarks;

		/** The severity of the finding. This field is managed by the source that writes the finding. */
		severity?: FindingSeverity | null;

		/** Source specific properties. These properties are managed by the source that writes the finding. The key names in the source_properties map must be between 1 and 255 characters, and must start with a letter and contain alphanumeric characters or underscores only. */
		sourceProperties?: {[id: string]: any };

		/** The state of the finding. */
		state?: FindingState | null;
	}

	/** Security Command Center finding. A finding is a record of assessment data (security, risk, health or privacy) ingested into Security Command Center for presentation, notification, analysis, policy testing, and enforcement. For example, an XSS vulnerability in an App Engine application is a finding. */
	export interface GoogleCloudSecuritycenterV1p1beta1FindingFormProperties {

		/** The canonical name of the finding. It's either "organizations/{organization_id}/sources/{source_id}/findings/{finding_id}", "folders/{folder_id}/sources/{source_id}/findings/{finding_id}" or "projects/{project_number}/sources/{source_id}/findings/{finding_id}", depending on the closest CRM ancestor of the resource associated with the finding. */
		canonicalName: FormControl<string | null | undefined>,

		/** The additional taxonomy group within findings from a given source. This field is immutable after creation time. Example: "XSS_FLASH_INJECTION" */
		category: FormControl<string | null | undefined>,

		/** The time at which the finding was created in Security Command Center. */
		createTime: FormControl<string | null | undefined>,

		/** The time at which the event took place, or when an update to the finding occurred. For example, if the finding represents an open firewall it would capture the time the detector believes the firewall became open. The accuracy is determined by the detector. If the finding were to be resolved afterward, this time would reflect when the finding was resolved. Must not be set to a value greater than the current timestamp. */
		eventTime: FormControl<string | null | undefined>,

		/** The URI that, if available, points to a web page outside of Security Command Center where additional information about the finding can be found. This field is guaranteed to be either empty or a well formed URL. */
		externalUri: FormControl<string | null | undefined>,

		/** The relative resource name of this finding. See: https://cloud.google.com/apis/design/resource_names#relative_resource_name Example: "organizations/{organization_id}/sources/{source_id}/findings/{finding_id}" */
		name: FormControl<string | null | undefined>,

		/** The relative resource name of the source the finding belongs to. See: https://cloud.google.com/apis/design/resource_names#relative_resource_name This field is immutable after creation time. For example: "organizations/{organization_id}/sources/{source_id}" */
		parent: FormControl<string | null | undefined>,

		/** For findings on Google Cloud resources, the full resource name of the Google Cloud resource this finding is for. See: https://cloud.google.com/apis/design/resource_names#full_resource_name When the finding is for a non-Google Cloud resource, the resourceName can be a customer or partner defined string. This field is immutable after creation time. */
		resourceName: FormControl<string | null | undefined>,

		/** The severity of the finding. This field is managed by the source that writes the finding. */
		severity: FormControl<FindingSeverity | null | undefined>,

		/** Source specific properties. These properties are managed by the source that writes the finding. The key names in the source_properties map must be between 1 and 255 characters, and must start with a letter and contain alphanumeric characters or underscores only. */
		sourceProperties: FormControl<{[id: string]: any } | null | undefined>,

		/** The state of the finding. */
		state: FormControl<FindingState | null | undefined>,
	}
	export function CreateGoogleCloudSecuritycenterV1p1beta1FindingFormGroup() {
		return new FormGroup<GoogleCloudSecuritycenterV1p1beta1FindingFormProperties>({
			canonicalName: new FormControl<string | null | undefined>(undefined),
			category: new FormControl<string | null | undefined>(undefined),
			createTime: new FormControl<string | null | undefined>(undefined),
			eventTime: new FormControl<string | null | undefined>(undefined),
			externalUri: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			parent: new FormControl<string | null | undefined>(undefined),
			resourceName: new FormControl<string | null | undefined>(undefined),
			severity: new FormControl<FindingSeverity | null | undefined>(undefined),
			sourceProperties: new FormControl<{[id: string]: any } | null | undefined>(undefined),
			state: new FormControl<FindingState | null | undefined>(undefined),
		});

	}


	/** User specified security marks that are attached to the parent Security Command Center resource. Security marks are scoped within a Security Command Center organization -- they can be modified and viewed by all users who have proper permissions on the organization. */
	export interface GoogleCloudSecuritycenterV1p1beta1SecurityMarks {

		/** The canonical name of the marks. Examples: "organizations/{organization_id}/assets/{asset_id}/securityMarks" "folders/{folder_id}/assets/{asset_id}/securityMarks" "projects/{project_number}/assets/{asset_id}/securityMarks" "organizations/{organization_id}/sources/{source_id}/findings/{finding_id}/securityMarks" "folders/{folder_id}/sources/{source_id}/findings/{finding_id}/securityMarks" "projects/{project_number}/sources/{source_id}/findings/{finding_id}/securityMarks" */
		canonicalName?: string | null;

		/** Mutable user specified security marks belonging to the parent resource. Constraints are as follows: * Keys and values are treated as case insensitive * Keys must be between 1 - 256 characters (inclusive) * Keys must be letters, numbers, underscores, or dashes * Values have leading and trailing whitespace trimmed, remaining characters must be between 1 - 4096 characters (inclusive) */
		marks?: {[id: string]: string };

		/** The relative resource name of the SecurityMarks. See: https://cloud.google.com/apis/design/resource_names#relative_resource_name Examples: "organizations/{organization_id}/assets/{asset_id}/securityMarks" "organizations/{organization_id}/sources/{source_id}/findings/{finding_id}/securityMarks". */
		name?: string | null;
	}

	/** User specified security marks that are attached to the parent Security Command Center resource. Security marks are scoped within a Security Command Center organization -- they can be modified and viewed by all users who have proper permissions on the organization. */
	export interface GoogleCloudSecuritycenterV1p1beta1SecurityMarksFormProperties {

		/** The canonical name of the marks. Examples: "organizations/{organization_id}/assets/{asset_id}/securityMarks" "folders/{folder_id}/assets/{asset_id}/securityMarks" "projects/{project_number}/assets/{asset_id}/securityMarks" "organizations/{organization_id}/sources/{source_id}/findings/{finding_id}/securityMarks" "folders/{folder_id}/sources/{source_id}/findings/{finding_id}/securityMarks" "projects/{project_number}/sources/{source_id}/findings/{finding_id}/securityMarks" */
		canonicalName: FormControl<string | null | undefined>,

		/** Mutable user specified security marks belonging to the parent resource. Constraints are as follows: * Keys and values are treated as case insensitive * Keys must be between 1 - 256 characters (inclusive) * Keys must be letters, numbers, underscores, or dashes * Values have leading and trailing whitespace trimmed, remaining characters must be between 1 - 4096 characters (inclusive) */
		marks: FormControl<{[id: string]: string } | null | undefined>,

		/** The relative resource name of the SecurityMarks. See: https://cloud.google.com/apis/design/resource_names#relative_resource_name Examples: "organizations/{organization_id}/assets/{asset_id}/securityMarks" "organizations/{organization_id}/sources/{source_id}/findings/{finding_id}/securityMarks". */
		name: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudSecuritycenterV1p1beta1SecurityMarksFormGroup() {
		return new FormGroup<GoogleCloudSecuritycenterV1p1beta1SecurityMarksFormProperties>({
			canonicalName: new FormControl<string | null | undefined>(undefined),
			marks: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Message that contains the resource name and display name of a folder resource. */
	export interface GoogleCloudSecuritycenterV1p1beta1Folder {

		/** Full resource name of this folder. See: https://cloud.google.com/apis/design/resource_names#full_resource_name */
		resourceFolder?: string | null;

		/** The user defined display name for this folder. */
		resourceFolderDisplayName?: string | null;
	}

	/** Message that contains the resource name and display name of a folder resource. */
	export interface GoogleCloudSecuritycenterV1p1beta1FolderFormProperties {

		/** Full resource name of this folder. See: https://cloud.google.com/apis/design/resource_names#full_resource_name */
		resourceFolder: FormControl<string | null | undefined>,

		/** The user defined display name for this folder. */
		resourceFolderDisplayName: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudSecuritycenterV1p1beta1FolderFormGroup() {
		return new FormGroup<GoogleCloudSecuritycenterV1p1beta1FolderFormProperties>({
			resourceFolder: new FormControl<string | null | undefined>(undefined),
			resourceFolderDisplayName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Security Command Center's Notification */
	export interface GoogleCloudSecuritycenterV1p1beta1NotificationMessage {

		/** Security Command Center finding. A finding is a record of assessment data (security, risk, health or privacy) ingested into Security Command Center for presentation, notification, analysis, policy testing, and enforcement. For example, an XSS vulnerability in an App Engine application is a finding. */
		finding?: GoogleCloudSecuritycenterV1p1beta1Finding;

		/** Name of the notification config that generated current notification. */
		notificationConfigName?: string | null;

		/** Information related to the Google Cloud resource. */
		resource?: GoogleCloudSecuritycenterV1p1beta1Resource;
	}

	/** Security Command Center's Notification */
	export interface GoogleCloudSecuritycenterV1p1beta1NotificationMessageFormProperties {

		/** Name of the notification config that generated current notification. */
		notificationConfigName: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudSecuritycenterV1p1beta1NotificationMessageFormGroup() {
		return new FormGroup<GoogleCloudSecuritycenterV1p1beta1NotificationMessageFormProperties>({
			notificationConfigName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Information related to the Google Cloud resource. */
	export interface GoogleCloudSecuritycenterV1p1beta1Resource {

		/** Output only. Contains a Folder message for each folder in the assets ancestry. The first folder is the deepest nested folder, and the last folder is the folder directly under the Organization. */
		folders?: Array<GoogleCloudSecuritycenterV1p1beta1Folder>;

		/** The full resource name of the resource. See: https://cloud.google.com/apis/design/resource_names#full_resource_name */
		name?: string | null;

		/** The full resource name of resource's parent. */
		parent?: string | null;

		/** The human readable name of resource's parent. */
		parentDisplayName?: string | null;

		/** The full resource name of project that the resource belongs to. */
		project?: string | null;

		/** The project id that the resource belongs to. */
		projectDisplayName?: string | null;
	}

	/** Information related to the Google Cloud resource. */
	export interface GoogleCloudSecuritycenterV1p1beta1ResourceFormProperties {

		/** The full resource name of the resource. See: https://cloud.google.com/apis/design/resource_names#full_resource_name */
		name: FormControl<string | null | undefined>,

		/** The full resource name of resource's parent. */
		parent: FormControl<string | null | undefined>,

		/** The human readable name of resource's parent. */
		parentDisplayName: FormControl<string | null | undefined>,

		/** The full resource name of project that the resource belongs to. */
		project: FormControl<string | null | undefined>,

		/** The project id that the resource belongs to. */
		projectDisplayName: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudSecuritycenterV1p1beta1ResourceFormGroup() {
		return new FormGroup<GoogleCloudSecuritycenterV1p1beta1ResourceFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			parent: new FormControl<string | null | undefined>(undefined),
			parentDisplayName: new FormControl<string | null | undefined>(undefined),
			project: new FormControl<string | null | undefined>(undefined),
			projectDisplayName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response of asset discovery run */
	export interface GoogleCloudSecuritycenterV1p1beta1RunAssetDiscoveryResponse {

		/** The duration between asset discovery run start and end */
		duration?: string | null;

		/** The state of an asset discovery run. */
		state?: GoogleCloudSecuritycenterV1RunAssetDiscoveryResponseState | null;
	}

	/** Response of asset discovery run */
	export interface GoogleCloudSecuritycenterV1p1beta1RunAssetDiscoveryResponseFormProperties {

		/** The duration between asset discovery run start and end */
		duration: FormControl<string | null | undefined>,

		/** The state of an asset discovery run. */
		state: FormControl<GoogleCloudSecuritycenterV1RunAssetDiscoveryResponseState | null | undefined>,
	}
	export function CreateGoogleCloudSecuritycenterV1p1beta1RunAssetDiscoveryResponseFormGroup() {
		return new FormGroup<GoogleCloudSecuritycenterV1p1beta1RunAssetDiscoveryResponseFormProperties>({
			duration: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<GoogleCloudSecuritycenterV1RunAssetDiscoveryResponseState | null | undefined>(undefined),
		});

	}


	/** Resource capturing the settings for the Rapid Vulnerability Detection service. */
	export interface RapidVulnerabilityDetectionSettings {

		/** The configurations including the state of enablement for the service's different modules. The absence of a module in the map implies its configuration is inherited from its parent's. */
		modules?: {[id: string]: Config };

		/** The resource name of the RapidVulnerabilityDetectionSettings. Formats: * organizations/{organization}/rapidVulnerabilityDetectionSettings * folders/{folder}/rapidVulnerabilityDetectionSettings * projects/{project}/rapidVulnerabilityDetectionSettings */
		name?: string | null;

		/** The state of enablement for the service at its level of the resource hierarchy. A DISABLED state will override all module enablement_states to DISABLED. */
		serviceEnablementState?: ConfigModuleEnablementState | null;

		/** Output only. The time the settings were last updated. */
		updateTime?: string | null;
	}

	/** Resource capturing the settings for the Rapid Vulnerability Detection service. */
	export interface RapidVulnerabilityDetectionSettingsFormProperties {

		/** The configurations including the state of enablement for the service's different modules. The absence of a module in the map implies its configuration is inherited from its parent's. */
		modules: FormControl<{[id: string]: Config } | null | undefined>,

		/** The resource name of the RapidVulnerabilityDetectionSettings. Formats: * organizations/{organization}/rapidVulnerabilityDetectionSettings * folders/{folder}/rapidVulnerabilityDetectionSettings * projects/{project}/rapidVulnerabilityDetectionSettings */
		name: FormControl<string | null | undefined>,

		/** The state of enablement for the service at its level of the resource hierarchy. A DISABLED state will override all module enablement_states to DISABLED. */
		serviceEnablementState: FormControl<ConfigModuleEnablementState | null | undefined>,

		/** Output only. The time the settings were last updated. */
		updateTime: FormControl<string | null | undefined>,
	}
	export function CreateRapidVulnerabilityDetectionSettingsFormGroup() {
		return new FormGroup<RapidVulnerabilityDetectionSettingsFormProperties>({
			modules: new FormControl<{[id: string]: Config } | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			serviceEnablementState: new FormControl<ConfigModuleEnablementState | null | undefined>(undefined),
			updateTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Resource capturing the settings for Security Center. Next ID: 12 */
	export interface SecurityCenterSettings {

		/** The resource name of the project to send logs to. This project must be part of the organization this resource resides in. The format is `projects/{project_id}`. An empty value disables logging. This value is only referenced by services that support log sink. Please refer to the documentation for an updated list of compatible services. This may only be specified for organization level onboarding. */
		logSinkProject?: string | null;

		/** The resource name of the SecurityCenterSettings. Format: organizations/{organization}/securityCenterSettings Format: folders/{folder}/securityCenterSettings Format: projects/{project}/securityCenterSettings */
		name?: string | null;

		/** Output only. Timestamp of when the customer organization was onboarded to SCC. */
		onboardingTime?: string | null;

		/** Output only. The organization level service account to be used for security center components. */
		orgServiceAccount?: string | null;
	}

	/** Resource capturing the settings for Security Center. Next ID: 12 */
	export interface SecurityCenterSettingsFormProperties {

		/** The resource name of the project to send logs to. This project must be part of the organization this resource resides in. The format is `projects/{project_id}`. An empty value disables logging. This value is only referenced by services that support log sink. Please refer to the documentation for an updated list of compatible services. This may only be specified for organization level onboarding. */
		logSinkProject: FormControl<string | null | undefined>,

		/** The resource name of the SecurityCenterSettings. Format: organizations/{organization}/securityCenterSettings Format: folders/{folder}/securityCenterSettings Format: projects/{project}/securityCenterSettings */
		name: FormControl<string | null | undefined>,

		/** Output only. Timestamp of when the customer organization was onboarded to SCC. */
		onboardingTime: FormControl<string | null | undefined>,

		/** Output only. The organization level service account to be used for security center components. */
		orgServiceAccount: FormControl<string | null | undefined>,
	}
	export function CreateSecurityCenterSettingsFormGroup() {
		return new FormGroup<SecurityCenterSettingsFormProperties>({
			logSinkProject: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			onboardingTime: new FormControl<string | null | undefined>(undefined),
			orgServiceAccount: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Resource capturing the settings for the Security Health Analytics service. */
	export interface SecurityHealthAnalyticsSettings {

		/** The configurations including the state of enablement for the service's different modules. The absence of a module in the map implies its configuration is inherited from its parent's. */
		modules?: {[id: string]: Config };

		/** The resource name of the SecurityHealthAnalyticsSettings. Formats: * organizations/{organization}/securityHealthAnalyticsSettings * folders/{folder}/securityHealthAnalyticsSettings * projects/{project}/securityHealthAnalyticsSettings */
		name?: string | null;

		/** Output only. The service account used by Security Health Analytics detectors. */
		serviceAccount?: string | null;

		/** The state of enablement for the service at its level of the resource hierarchy. A DISABLED state will override all module enablement_states to DISABLED. */
		serviceEnablementState?: ConfigModuleEnablementState | null;

		/** Output only. The time the settings were last updated. */
		updateTime?: string | null;
	}

	/** Resource capturing the settings for the Security Health Analytics service. */
	export interface SecurityHealthAnalyticsSettingsFormProperties {

		/** The configurations including the state of enablement for the service's different modules. The absence of a module in the map implies its configuration is inherited from its parent's. */
		modules: FormControl<{[id: string]: Config } | null | undefined>,

		/** The resource name of the SecurityHealthAnalyticsSettings. Formats: * organizations/{organization}/securityHealthAnalyticsSettings * folders/{folder}/securityHealthAnalyticsSettings * projects/{project}/securityHealthAnalyticsSettings */
		name: FormControl<string | null | undefined>,

		/** Output only. The service account used by Security Health Analytics detectors. */
		serviceAccount: FormControl<string | null | undefined>,

		/** The state of enablement for the service at its level of the resource hierarchy. A DISABLED state will override all module enablement_states to DISABLED. */
		serviceEnablementState: FormControl<ConfigModuleEnablementState | null | undefined>,

		/** Output only. The time the settings were last updated. */
		updateTime: FormControl<string | null | undefined>,
	}
	export function CreateSecurityHealthAnalyticsSettingsFormGroup() {
		return new FormGroup<SecurityHealthAnalyticsSettingsFormProperties>({
			modules: new FormControl<{[id: string]: Config } | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			serviceAccount: new FormControl<string | null | undefined>(undefined),
			serviceEnablementState: new FormControl<ConfigModuleEnablementState | null | undefined>(undefined),
			updateTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Resource capturing the state of an organization's subscription. */
	export interface Subscription {

		/** Details of a subscription. */
		details?: Details;

		/** The resource name of the subscription. Format: organizations/{organization}/subscription */
		name?: string | null;

		/** The tier of SCC features this organization currently has access to. */
		tier?: SubscriptionTier | null;
	}

	/** Resource capturing the state of an organization's subscription. */
	export interface SubscriptionFormProperties {

		/** The resource name of the subscription. Format: organizations/{organization}/subscription */
		name: FormControl<string | null | undefined>,

		/** The tier of SCC features this organization currently has access to. */
		tier: FormControl<SubscriptionTier | null | undefined>,
	}
	export function CreateSubscriptionFormGroup() {
		return new FormGroup<SubscriptionFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			tier: new FormControl<SubscriptionTier | null | undefined>(undefined),
		});

	}

	export enum SubscriptionTier { TIER_UNSPECIFIED = 'TIER_UNSPECIFIED', STANDARD = 'STANDARD', PREMIUM = 'PREMIUM', ENTERPRISE = 'ENTERPRISE' }


	/** Resource capturing the settings for the Virtual Machine Threat Detection service. */
	export interface VirtualMachineThreatDetectionSettings {

		/** The configurations including the state of enablement for the service's different modules. The absence of a module in the map implies its configuration is inherited from its parent's. */
		modules?: {[id: string]: Config };

		/** The resource name of the VirtualMachineThreatDetectionSettings. Formats: * organizations/{organization}/virtualMachineThreatDetectionSettings * folders/{folder}/virtualMachineThreatDetectionSettings * projects/{project}/virtualMachineThreatDetectionSettings */
		name?: string | null;

		/** Output only. The service account used by Virtual Machine Threat Detection detectors. */
		serviceAccount?: string | null;

		/** The state of enablement for the service at its level of the resource hierarchy. A DISABLED state will override all module enablement_states to DISABLED. */
		serviceEnablementState?: ConfigModuleEnablementState | null;

		/** Output only. The time the settings were last updated. */
		updateTime?: string | null;
	}

	/** Resource capturing the settings for the Virtual Machine Threat Detection service. */
	export interface VirtualMachineThreatDetectionSettingsFormProperties {

		/** The configurations including the state of enablement for the service's different modules. The absence of a module in the map implies its configuration is inherited from its parent's. */
		modules: FormControl<{[id: string]: Config } | null | undefined>,

		/** The resource name of the VirtualMachineThreatDetectionSettings. Formats: * organizations/{organization}/virtualMachineThreatDetectionSettings * folders/{folder}/virtualMachineThreatDetectionSettings * projects/{project}/virtualMachineThreatDetectionSettings */
		name: FormControl<string | null | undefined>,

		/** Output only. The service account used by Virtual Machine Threat Detection detectors. */
		serviceAccount: FormControl<string | null | undefined>,

		/** The state of enablement for the service at its level of the resource hierarchy. A DISABLED state will override all module enablement_states to DISABLED. */
		serviceEnablementState: FormControl<ConfigModuleEnablementState | null | undefined>,

		/** Output only. The time the settings were last updated. */
		updateTime: FormControl<string | null | undefined>,
	}
	export function CreateVirtualMachineThreatDetectionSettingsFormGroup() {
		return new FormGroup<VirtualMachineThreatDetectionSettingsFormProperties>({
			modules: new FormControl<{[id: string]: Config } | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			serviceAccount: new FormControl<string | null | undefined>(undefined),
			serviceEnablementState: new FormControl<ConfigModuleEnablementState | null | undefined>(undefined),
			updateTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Resource capturing the settings for the Web Security Scanner service. */
	export interface WebSecurityScannerSettings {

		/** The configurations including the state of enablement for the service's different modules. The absence of a module in the map implies its configuration is inherited from its parent's. */
		modules?: {[id: string]: Config };

		/** The resource name of the WebSecurityScannerSettings. Formats: * organizations/{organization}/webSecurityScannerSettings * folders/{folder}/webSecurityScannerSettings * projects/{project}/webSecurityScannerSettings */
		name?: string | null;

		/** The state of enablement for the service at its level of the resource hierarchy. A DISABLED state will override all module enablement_states to DISABLED. */
		serviceEnablementState?: ConfigModuleEnablementState | null;

		/** Output only. The time the settings were last updated. */
		updateTime?: string | null;
	}

	/** Resource capturing the settings for the Web Security Scanner service. */
	export interface WebSecurityScannerSettingsFormProperties {

		/** The configurations including the state of enablement for the service's different modules. The absence of a module in the map implies its configuration is inherited from its parent's. */
		modules: FormControl<{[id: string]: Config } | null | undefined>,

		/** The resource name of the WebSecurityScannerSettings. Formats: * organizations/{organization}/webSecurityScannerSettings * folders/{folder}/webSecurityScannerSettings * projects/{project}/webSecurityScannerSettings */
		name: FormControl<string | null | undefined>,

		/** The state of enablement for the service at its level of the resource hierarchy. A DISABLED state will override all module enablement_states to DISABLED. */
		serviceEnablementState: FormControl<ConfigModuleEnablementState | null | undefined>,

		/** Output only. The time the settings were last updated. */
		updateTime: FormControl<string | null | undefined>,
	}
	export function CreateWebSecurityScannerSettingsFormGroup() {
		return new FormGroup<WebSecurityScannerSettingsFormProperties>({
			modules: new FormControl<{[id: string]: Config } | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			serviceEnablementState: new FormControl<ConfigModuleEnablementState | null | undefined>(undefined),
			updateTime: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Get the ContainerThreatDetectionSettings resource. In the returned settings response, a missing field only indicates that it was not explicitly set, so no assumption should be made about these fields. In other words, GetContainerThreatDetectionSettings does not calculate the effective service settings for the resource, which accounts for inherited settings and defaults. Instead, use CalculateContainerThreatDetectionSettings for this purpose.
		 * Get v1beta2/{name}
		 * @param {string} name Required. The name of the ContainerThreatDetectionSettings to retrieve. Formats: * organizations/{organization}/containerThreatDetectionSettings * folders/{folder}/containerThreatDetectionSettings * projects/{project}/containerThreatDetectionSettings * projects/{project}/locations/{location}/clusters/{cluster}/containerThreatDetectionSettings
		 * @return {ContainerThreatDetectionSettings} Successful response
		 */
		Securitycenter_projects_locations_clusters_getContainerThreatDetectionSettings(name: string): Observable<ContainerThreatDetectionSettings> {
			return this.http.get<ContainerThreatDetectionSettings>(this.baseUri + 'v1beta2/' + (name == null ? '' : encodeURIComponent(name)), {});
		}

		/**
		 * Update the ContainerThreatDetectionSettings resource.
		 * Patch v1beta2/{name}
		 * @param {string} name The resource name of the ContainerThreatDetectionSettings. Formats: * organizations/{organization}/containerThreatDetectionSettings * folders/{folder}/containerThreatDetectionSettings * projects/{project}/containerThreatDetectionSettings * projects/{project}/locations/{location}/clusters/{cluster}/containerThreatDetectionSettings
		 * @param {string} updateMask The list of fields to be updated.
		 * @return {ContainerThreatDetectionSettings} Successful response
		 */
		Securitycenter_projects_locations_clusters_updateContainerThreatDetectionSettings(name: string, updateMask: string | null | undefined, requestBody: ContainerThreatDetectionSettings): Observable<ContainerThreatDetectionSettings> {
			return this.http.patch<ContainerThreatDetectionSettings>(this.baseUri + 'v1beta2/' + (name == null ? '' : encodeURIComponent(name)) + '&updateMask=' + (updateMask == null ? '' : encodeURIComponent(updateMask)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Calculates the effective WebSecurityScannerSettings based on its level in the resource hierarchy and its settings. Settings provided closer to the target resource take precedence over those further away (e.g. folder will override organization level settings). The default SCC setting for the detector service defaults can be overridden at organization, folder and project levels. No assumptions should be made about the SCC defaults as it is considered an internal implementation detail.
		 * Get v1beta2/{name}:calculate
		 * @param {string} name Required. The name of the WebSecurityScannerSettings to calculate. Formats: * organizations/{organization}/webSecurityScannerSettings * folders/{folder}/webSecurityScannerSettings * projects/{project}/webSecurityScannerSettings
		 * @return {WebSecurityScannerSettings} Successful response
		 */
		Securitycenter_projects_webSecurityScannerSettings_calculate(name: string): Observable<WebSecurityScannerSettings> {
			return this.http.get<WebSecurityScannerSettings>(this.baseUri + 'v1beta2/' + (name == null ? '' : encodeURIComponent(name)) + ':calculate', {});
		}
	}

}

