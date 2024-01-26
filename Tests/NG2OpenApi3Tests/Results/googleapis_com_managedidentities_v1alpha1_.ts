import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface AttachTrustRequest {

		/** Represents a relationship between two domains which makes it possible for users in one domain to be authenticated by a dc in another domain. Refer https://docs.microsoft.com/en-us/previous-versions/windows/it-pro/windows-server-2008-R2-and-2008/cc731335(v%3dws.10) If the trust is being changed, it will be placed into the UPDATING state, which indicates that the resource is being reconciled. At this point, Get will reflect an intermediate state. */
		trust?: Trust;
	}
	export interface AttachTrustRequestFormProperties {
	}
	export function CreateAttachTrustRequestFormGroup() {
		return new FormGroup<AttachTrustRequestFormProperties>({
		});

	}


	/** Represents a relationship between two domains which makes it possible for users in one domain to be authenticated by a dc in another domain. Refer https://docs.microsoft.com/en-us/previous-versions/windows/it-pro/windows-server-2008-R2-and-2008/cc731335(v%3dws.10) If the trust is being changed, it will be placed into the UPDATING state, which indicates that the resource is being reconciled. At this point, Get will reflect an intermediate state. */
	export interface Trust {

		/** Output only. The time the instance was created. */
		createTime?: string | null;

		/** Output only. The last heartbeat time when the trust was known to be connected. */
		lastKnownTrustConnectedHeartbeatTime?: string | null;

		/** The trust authentication type which decides whether the trusted side has forest/domain wide access or selective access to approved set of resources. */
		selectiveAuthentication?: boolean | null;

		/** Output only. The current state of this trust. */
		state?: TrustState | null;

		/** Output only. Additional information about the current state of this trust, if available. */
		stateDescription?: string | null;

		/** The target dns server ip addresses which can resolve the remote domain involved in trust. */
		targetDnsIpAddresses?: Array<string>;

		/** The fully qualified target domain name which will be in trust with current domain. */
		targetDomainName?: string | null;

		/** The trust direction decides the current domain is trusted, trusting or both. */
		trustDirection?: TrustTrustDirection | null;

		/** Input only, and will not be stored. The trust secret used for handshake with target domain. */
		trustHandshakeSecret?: string | null;

		/** The type of trust represented by the trust resource. */
		trustType?: TrustTrustType | null;

		/** Output only. Last update time. */
		updateTime?: string | null;
	}

	/** Represents a relationship between two domains which makes it possible for users in one domain to be authenticated by a dc in another domain. Refer https://docs.microsoft.com/en-us/previous-versions/windows/it-pro/windows-server-2008-R2-and-2008/cc731335(v%3dws.10) If the trust is being changed, it will be placed into the UPDATING state, which indicates that the resource is being reconciled. At this point, Get will reflect an intermediate state. */
	export interface TrustFormProperties {

		/** Output only. The time the instance was created. */
		createTime: FormControl<string | null | undefined>,

		/** Output only. The last heartbeat time when the trust was known to be connected. */
		lastKnownTrustConnectedHeartbeatTime: FormControl<string | null | undefined>,

		/** The trust authentication type which decides whether the trusted side has forest/domain wide access or selective access to approved set of resources. */
		selectiveAuthentication: FormControl<boolean | null | undefined>,

		/** Output only. The current state of this trust. */
		state: FormControl<TrustState | null | undefined>,

		/** Output only. Additional information about the current state of this trust, if available. */
		stateDescription: FormControl<string | null | undefined>,

		/** The fully qualified target domain name which will be in trust with current domain. */
		targetDomainName: FormControl<string | null | undefined>,

		/** The trust direction decides the current domain is trusted, trusting or both. */
		trustDirection: FormControl<TrustTrustDirection | null | undefined>,

		/** Input only, and will not be stored. The trust secret used for handshake with target domain. */
		trustHandshakeSecret: FormControl<string | null | undefined>,

		/** The type of trust represented by the trust resource. */
		trustType: FormControl<TrustTrustType | null | undefined>,

		/** Output only. Last update time. */
		updateTime: FormControl<string | null | undefined>,
	}
	export function CreateTrustFormGroup() {
		return new FormGroup<TrustFormProperties>({
			createTime: new FormControl<string | null | undefined>(undefined),
			lastKnownTrustConnectedHeartbeatTime: new FormControl<string | null | undefined>(undefined),
			selectiveAuthentication: new FormControl<boolean | null | undefined>(undefined),
			state: new FormControl<TrustState | null | undefined>(undefined),
			stateDescription: new FormControl<string | null | undefined>(undefined),
			targetDomainName: new FormControl<string | null | undefined>(undefined),
			trustDirection: new FormControl<TrustTrustDirection | null | undefined>(undefined),
			trustHandshakeSecret: new FormControl<string | null | undefined>(undefined),
			trustType: new FormControl<TrustTrustType | null | undefined>(undefined),
			updateTime: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum TrustState { STATE_UNSPECIFIED = 0, CREATING = 1, UPDATING = 2, DELETING = 3, CONNECTED = 4, DISCONNECTED = 5 }

	export enum TrustTrustDirection { TRUST_DIRECTION_UNSPECIFIED = 0, INBOUND = 1, OUTBOUND = 2, BIDIRECTIONAL = 3 }

	export enum TrustTrustType { TRUST_TYPE_UNSPECIFIED = 0, FOREST = 1, EXTERNAL = 2 }


	/** Represents a Managed Microsoft Identities backup. */
	export interface Backup {

		/** Output only. The time the backups was created. */
		createTime?: string | null;

		/** Optional. A short description of the backup. */
		description?: string | null;

		/** Optional. Resource labels to represent user provided metadata. */
		labels?: {[id: string]: string };

		/** Output only. The unique name of the Backup in the form of projects/{project_id}/locations/global/domains/{domain_name}/backups/{name} */
		name?: string | null;

		/** Output only. The current state of the backup. */
		state?: BackupState | null;

		/** Output only. Additional information about the current status of this backup, if available. */
		statusMessage?: string | null;

		/** Output only. Indicates whether it’s an on-demand backup or scheduled. */
		type?: BackupType | null;

		/** Output only. Last update time. */
		updateTime?: string | null;
	}

	/** Represents a Managed Microsoft Identities backup. */
	export interface BackupFormProperties {

		/** Output only. The time the backups was created. */
		createTime: FormControl<string | null | undefined>,

		/** Optional. A short description of the backup. */
		description: FormControl<string | null | undefined>,

		/** Optional. Resource labels to represent user provided metadata. */
		labels: FormControl<{[id: string]: string } | null | undefined>,

		/** Output only. The unique name of the Backup in the form of projects/{project_id}/locations/global/domains/{domain_name}/backups/{name} */
		name: FormControl<string | null | undefined>,

		/** Output only. The current state of the backup. */
		state: FormControl<BackupState | null | undefined>,

		/** Output only. Additional information about the current status of this backup, if available. */
		statusMessage: FormControl<string | null | undefined>,

		/** Output only. Indicates whether it’s an on-demand backup or scheduled. */
		type: FormControl<BackupType | null | undefined>,

		/** Output only. Last update time. */
		updateTime: FormControl<string | null | undefined>,
	}
	export function CreateBackupFormGroup() {
		return new FormGroup<BackupFormProperties>({
			createTime: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			labels: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<BackupState | null | undefined>(undefined),
			statusMessage: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<BackupType | null | undefined>(undefined),
			updateTime: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum BackupState { STATE_UNSPECIFIED = 0, CREATING = 1, ACTIVE = 2, FAILED = 3, DELETING = 4 }

	export enum BackupType { TYPE_UNSPECIFIED = 0, ON_DEMAND = 1, SCHEDULED = 2, SCHEMA_EXTENSION = 3 }


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


	/** Certificate used to configure LDAPS. */
	export interface Certificate {

		/** The certificate expire time. */
		expireTime?: string | null;

		/** Certificate used to configure LDAPS. */
		issuingCertificate?: Certificate;

		/** The certificate subject. */
		subject?: string | null;

		/** The additional hostnames for the domain. */
		subjectAlternativeName?: Array<string>;

		/** The certificate thumbprint which uniquely identifies the certificate. */
		thumbprint?: string | null;
	}

	/** Certificate used to configure LDAPS. */
	export interface CertificateFormProperties {

		/** The certificate expire time. */
		expireTime: FormControl<string | null | undefined>,

		/** The certificate subject. */
		subject: FormControl<string | null | undefined>,

		/** The certificate thumbprint which uniquely identifies the certificate. */
		thumbprint: FormControl<string | null | undefined>,
	}
	export function CreateCertificateFormGroup() {
		return new FormGroup<CertificateFormProperties>({
			expireTime: new FormControl<string | null | undefined>(undefined),
			subject: new FormControl<string | null | undefined>(undefined),
			thumbprint: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** CheckMigrationPermissionRequest is the request message for CheckMigrationPermission method. */
	export interface CheckMigrationPermissionRequest {
	}

	/** CheckMigrationPermissionRequest is the request message for CheckMigrationPermission method. */
	export interface CheckMigrationPermissionRequestFormProperties {
	}
	export function CreateCheckMigrationPermissionRequestFormGroup() {
		return new FormGroup<CheckMigrationPermissionRequestFormProperties>({
		});

	}


	/** CheckMigrationPermissionResponse is the response message for CheckMigrationPermission method. */
	export interface CheckMigrationPermissionResponse {

		/** The state of SID filtering of all the domains which has trust established. */
		onpremDomains?: Array<OnPremDomainSIDDetails>;

		/** The state of DomainMigration. */
		state?: CheckMigrationPermissionResponseState | null;
	}

	/** CheckMigrationPermissionResponse is the response message for CheckMigrationPermission method. */
	export interface CheckMigrationPermissionResponseFormProperties {

		/** The state of DomainMigration. */
		state: FormControl<CheckMigrationPermissionResponseState | null | undefined>,
	}
	export function CreateCheckMigrationPermissionResponseFormGroup() {
		return new FormGroup<CheckMigrationPermissionResponseFormProperties>({
			state: new FormControl<CheckMigrationPermissionResponseState | null | undefined>(undefined),
		});

	}


	/** OnPremDomainDetails is the message which contains details of on-prem domain which is trusted and needs to be migrated. */
	export interface OnPremDomainSIDDetails {

		/** FQDN of the on-prem domain being migrated. */
		name?: string | null;

		/** Current SID filtering state. */
		sidFilteringState?: OnPremDomainSIDDetailsSidFilteringState | null;
	}

	/** OnPremDomainDetails is the message which contains details of on-prem domain which is trusted and needs to be migrated. */
	export interface OnPremDomainSIDDetailsFormProperties {

		/** FQDN of the on-prem domain being migrated. */
		name: FormControl<string | null | undefined>,

		/** Current SID filtering state. */
		sidFilteringState: FormControl<OnPremDomainSIDDetailsSidFilteringState | null | undefined>,
	}
	export function CreateOnPremDomainSIDDetailsFormGroup() {
		return new FormGroup<OnPremDomainSIDDetailsFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			sidFilteringState: new FormControl<OnPremDomainSIDDetailsSidFilteringState | null | undefined>(undefined),
		});

	}

	export enum OnPremDomainSIDDetailsSidFilteringState { SID_FILTERING_STATE_UNSPECIFIED = 0, ENABLED = 1, DISABLED = 2 }

	export enum CheckMigrationPermissionResponseState { STATE_UNSPECIFIED = 0, DISABLED = 1, ENABLED = 2, NEEDS_MAINTENANCE = 3 }


	/** Time window specified for daily operations. */
	export interface DailyCycle {

		/** Output only. Duration of the time window, set by service producer. */
		duration?: string | null;

		/** Represents a time of day. The date and time zone are either not significant or are specified elsewhere. An API may choose to allow leap seconds. Related types are google.type.Date and `google.protobuf.Timestamp`. */
		startTime?: TimeOfDay;
	}

	/** Time window specified for daily operations. */
	export interface DailyCycleFormProperties {

		/** Output only. Duration of the time window, set by service producer. */
		duration: FormControl<string | null | undefined>,
	}
	export function CreateDailyCycleFormGroup() {
		return new FormGroup<DailyCycleFormProperties>({
			duration: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents a time of day. The date and time zone are either not significant or are specified elsewhere. An API may choose to allow leap seconds. Related types are google.type.Date and `google.protobuf.Timestamp`. */
	export interface TimeOfDay {

		/** Hours of day in 24 hour format. Should be from 0 to 23. An API may choose to allow the value "24:00:00" for scenarios like business closing time. */
		hours?: number | null;

		/** Minutes of hour of day. Must be from 0 to 59. */
		minutes?: number | null;

		/** Fractions of seconds in nanoseconds. Must be from 0 to 999,999,999. */
		nanos?: number | null;

		/** Seconds of minutes of the time. Must normally be from 0 to 59. An API may allow the value 60 if it allows leap-seconds. */
		seconds?: number | null;
	}

	/** Represents a time of day. The date and time zone are either not significant or are specified elsewhere. An API may choose to allow leap seconds. Related types are google.type.Date and `google.protobuf.Timestamp`. */
	export interface TimeOfDayFormProperties {

		/** Hours of day in 24 hour format. Should be from 0 to 23. An API may choose to allow the value "24:00:00" for scenarios like business closing time. */
		hours: FormControl<number | null | undefined>,

		/** Minutes of hour of day. Must be from 0 to 59. */
		minutes: FormControl<number | null | undefined>,

		/** Fractions of seconds in nanoseconds. Must be from 0 to 999,999,999. */
		nanos: FormControl<number | null | undefined>,

		/** Seconds of minutes of the time. Must normally be from 0 to 59. An API may allow the value 60 if it allows leap-seconds. */
		seconds: FormControl<number | null | undefined>,
	}
	export function CreateTimeOfDayFormGroup() {
		return new FormGroup<TimeOfDayFormProperties>({
			hours: new FormControl<number | null | undefined>(undefined),
			minutes: new FormControl<number | null | undefined>(undefined),
			nanos: new FormControl<number | null | undefined>(undefined),
			seconds: new FormControl<number | null | undefined>(undefined),
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


	/** DenyMaintenancePeriod definition. Maintenance is forbidden within the deny period. The start_date must be less than the end_date. */
	export interface DenyMaintenancePeriod {

		/** Represents a whole or partial calendar date, such as a birthday. The time of day and time zone are either specified elsewhere or are insignificant. The date is relative to the Gregorian Calendar. This can represent one of the following: * A full date, with non-zero year, month, and day values. * A month and day, with a zero year (for example, an anniversary). * A year on its own, with a zero month and a zero day. * A year and month, with a zero day (for example, a credit card expiration date). Related types: * google.type.TimeOfDay * google.type.DateTime * google.protobuf.Timestamp */
		endDate?: Date;

		/** Represents a whole or partial calendar date, such as a birthday. The time of day and time zone are either specified elsewhere or are insignificant. The date is relative to the Gregorian Calendar. This can represent one of the following: * A full date, with non-zero year, month, and day values. * A month and day, with a zero year (for example, an anniversary). * A year on its own, with a zero month and a zero day. * A year and month, with a zero day (for example, a credit card expiration date). Related types: * google.type.TimeOfDay * google.type.DateTime * google.protobuf.Timestamp */
		startDate?: Date;

		/** Represents a time of day. The date and time zone are either not significant or are specified elsewhere. An API may choose to allow leap seconds. Related types are google.type.Date and `google.protobuf.Timestamp`. */
		time?: TimeOfDay;
	}

	/** DenyMaintenancePeriod definition. Maintenance is forbidden within the deny period. The start_date must be less than the end_date. */
	export interface DenyMaintenancePeriodFormProperties {
	}
	export function CreateDenyMaintenancePeriodFormGroup() {
		return new FormGroup<DenyMaintenancePeriodFormProperties>({
		});

	}

	export interface DetachTrustRequest {

		/** Represents a relationship between two domains which makes it possible for users in one domain to be authenticated by a dc in another domain. Refer https://docs.microsoft.com/en-us/previous-versions/windows/it-pro/windows-server-2008-R2-and-2008/cc731335(v%3dws.10) If the trust is being changed, it will be placed into the UPDATING state, which indicates that the resource is being reconciled. At this point, Get will reflect an intermediate state. */
		trust?: Trust;
	}
	export interface DetachTrustRequestFormProperties {
	}
	export function CreateDetachTrustRequestFormGroup() {
		return new FormGroup<DetachTrustRequestFormProperties>({
		});

	}


	/** DisableMigrationRequest is the request message for DisableMigration method. */
	export interface DisableMigrationRequest {
	}

	/** DisableMigrationRequest is the request message for DisableMigration method. */
	export interface DisableMigrationRequestFormProperties {
	}
	export function CreateDisableMigrationRequestFormGroup() {
		return new FormGroup<DisableMigrationRequestFormProperties>({
		});

	}


	/** If the domain is being changed, it will be placed into the UPDATING state, which indicates that the resource is being reconciled. At this point, Get will reflect an intermediate state. */
	export interface Domain {

		/** Optional. Configuration for audit logs. True if audit logs are enabled, else false. Default is audit logs disabled. */
		auditLogsEnabled?: boolean | null;

		/** Optional. The full names of the Google Compute Engine [networks](/compute/docs/networks-and-firewalls#networks) to which the instance is connected. Network can be added using UpdateDomain later. Domain is only available on network part of authorized_networks. Caller needs to make sure that CIDR subnets do not overlap between networks, else domain creation will fail. */
		authorizedNetworks?: Array<string>;

		/** Output only. The time the instance was created. Synthetic field is populated automatically by CCFE. go/ccfe-synthetic-field-user-guide */
		createTime?: string | null;

		/** Output only. Fully-qualified domain name of the exposed domain used by clients to connect to the service. Similar to what would be chosen for an Active Directory that is set up on an internal network. */
		fqdn?: string | null;

		/** Optional. Resource labels to represent user provided metadata */
		labels?: {[id: string]: string };

		/** Required. Locations where domain needs to be provisioned. regions e.g. us-west1 or us-east4 Service supports up to 4 locations at once. Each location will use a /26 block. */
		locations?: Array<string>;

		/** Optional. Name of customer-visible admin used to perform Active Directory operations. If not specified `setupadmin` would be used. */
		managedIdentitiesAdminName?: string | null;

		/** Output only. Unique name of the domain in this scope including projects and location using the form: `projects/{project_id}/locations/global/domains/{domain_name}`. */
		name?: string | null;

		/** Required. The CIDR range of internal addresses that are reserved for this domain. Reserved networks must be /24 or larger. Ranges must be unique and non-overlapping with existing subnets in [Domain].[authorized_networks]. */
		reservedIpRange?: string | null;

		/** Output only. The current state of this domain. */
		state?: DomainState | null;

		/** Output only. Additional information about the current status of this domain, if available. */
		statusMessage?: string | null;

		/** Output only. The current trusts associated with the domain. */
		trusts?: Array<Trust>;

		/** Output only. Last update time. Synthetic field is populated automatically by CCFE. */
		updateTime?: string | null;
	}

	/** If the domain is being changed, it will be placed into the UPDATING state, which indicates that the resource is being reconciled. At this point, Get will reflect an intermediate state. */
	export interface DomainFormProperties {

		/** Optional. Configuration for audit logs. True if audit logs are enabled, else false. Default is audit logs disabled. */
		auditLogsEnabled: FormControl<boolean | null | undefined>,

		/** Output only. The time the instance was created. Synthetic field is populated automatically by CCFE. go/ccfe-synthetic-field-user-guide */
		createTime: FormControl<string | null | undefined>,

		/** Output only. Fully-qualified domain name of the exposed domain used by clients to connect to the service. Similar to what would be chosen for an Active Directory that is set up on an internal network. */
		fqdn: FormControl<string | null | undefined>,

		/** Optional. Resource labels to represent user provided metadata */
		labels: FormControl<{[id: string]: string } | null | undefined>,

		/** Optional. Name of customer-visible admin used to perform Active Directory operations. If not specified `setupadmin` would be used. */
		managedIdentitiesAdminName: FormControl<string | null | undefined>,

		/** Output only. Unique name of the domain in this scope including projects and location using the form: `projects/{project_id}/locations/global/domains/{domain_name}`. */
		name: FormControl<string | null | undefined>,

		/** Required. The CIDR range of internal addresses that are reserved for this domain. Reserved networks must be /24 or larger. Ranges must be unique and non-overlapping with existing subnets in [Domain].[authorized_networks]. */
		reservedIpRange: FormControl<string | null | undefined>,

		/** Output only. The current state of this domain. */
		state: FormControl<DomainState | null | undefined>,

		/** Output only. Additional information about the current status of this domain, if available. */
		statusMessage: FormControl<string | null | undefined>,

		/** Output only. Last update time. Synthetic field is populated automatically by CCFE. */
		updateTime: FormControl<string | null | undefined>,
	}
	export function CreateDomainFormGroup() {
		return new FormGroup<DomainFormProperties>({
			auditLogsEnabled: new FormControl<boolean | null | undefined>(undefined),
			createTime: new FormControl<string | null | undefined>(undefined),
			fqdn: new FormControl<string | null | undefined>(undefined),
			labels: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			managedIdentitiesAdminName: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			reservedIpRange: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<DomainState | null | undefined>(undefined),
			statusMessage: new FormControl<string | null | undefined>(undefined),
			updateTime: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum DomainState { STATE_UNSPECIFIED = 0, CREATING = 1, READY = 2, UPDATING = 3, DELETING = 4, REPAIRING = 5, PERFORMING_MAINTENANCE = 6, DOWN = 7 }


	/** DomainJoinMachineRequest is the request message for DomainJoinMachine method */
	export interface DomainJoinMachineRequest {

		/** Optional. force if True, forces domain join even if the computer account already exists. */
		force?: boolean | null;

		/** Optional. OU name where the VM needs to be domain joined */
		ouName?: string | null;

		/** Required. Full instance id token of compute engine VM to verify instance identity. More about this: https://cloud.google.com/compute/docs/instances/verifying-instance-identity#request_signature */
		vmIdToken?: string | null;
	}

	/** DomainJoinMachineRequest is the request message for DomainJoinMachine method */
	export interface DomainJoinMachineRequestFormProperties {

		/** Optional. force if True, forces domain join even if the computer account already exists. */
		force: FormControl<boolean | null | undefined>,

		/** Optional. OU name where the VM needs to be domain joined */
		ouName: FormControl<string | null | undefined>,

		/** Required. Full instance id token of compute engine VM to verify instance identity. More about this: https://cloud.google.com/compute/docs/instances/verifying-instance-identity#request_signature */
		vmIdToken: FormControl<string | null | undefined>,
	}
	export function CreateDomainJoinMachineRequestFormGroup() {
		return new FormGroup<DomainJoinMachineRequestFormProperties>({
			force: new FormControl<boolean | null | undefined>(undefined),
			ouName: new FormControl<string | null | undefined>(undefined),
			vmIdToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** DomainJoinMachineResponse is the response message for DomainJoinMachine method */
	export interface DomainJoinMachineResponse {

		/** Offline domain join blob as the response */
		domainJoinBlob?: string | null;
	}

	/** DomainJoinMachineResponse is the response message for DomainJoinMachine method */
	export interface DomainJoinMachineResponseFormProperties {

		/** Offline domain join blob as the response */
		domainJoinBlob: FormControl<string | null | undefined>,
	}
	export function CreateDomainJoinMachineResponseFormGroup() {
		return new FormGroup<DomainJoinMachineResponseFormProperties>({
			domainJoinBlob: new FormControl<string | null | undefined>(undefined),
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


	/** EnableMigrationRequest is the request message for EnableMigration method. */
	export interface EnableMigrationRequest {

		/** Optional. Period after which the migration would be auto disabled. If unspecified, a default timeout of 48h is used. */
		enableDuration?: string | null;

		/** Required. List of the on-prem domains to be migrated. */
		migratingDomains?: Array<OnPremDomainDetails>;
	}

	/** EnableMigrationRequest is the request message for EnableMigration method. */
	export interface EnableMigrationRequestFormProperties {

		/** Optional. Period after which the migration would be auto disabled. If unspecified, a default timeout of 48h is used. */
		enableDuration: FormControl<string | null | undefined>,
	}
	export function CreateEnableMigrationRequestFormGroup() {
		return new FormGroup<EnableMigrationRequestFormProperties>({
			enableDuration: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** OnPremDomainDetails is the message which contains details of on-prem domain which is trusted and needs to be migrated. */
	export interface OnPremDomainDetails {

		/** Optional. Option to disable SID filtering. */
		disableSidFiltering?: boolean | null;

		/** Required. FQDN of the on-prem domain being migrated. */
		domainName?: string | null;
	}

	/** OnPremDomainDetails is the message which contains details of on-prem domain which is trusted and needs to be migrated. */
	export interface OnPremDomainDetailsFormProperties {

		/** Optional. Option to disable SID filtering. */
		disableSidFiltering: FormControl<boolean | null | undefined>,

		/** Required. FQDN of the on-prem domain being migrated. */
		domainName: FormControl<string | null | undefined>,
	}
	export function CreateOnPremDomainDetailsFormGroup() {
		return new FormGroup<OnPremDomainDetailsFormProperties>({
			disableSidFiltering: new FormControl<boolean | null | undefined>(undefined),
			domainName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** ExtendSchemaRequest is the request message for ExtendSchema method. */
	export interface ExtendSchemaRequest {

		/** Required. Description for Schema Change. */
		description?: string | null;

		/** File uploaded as a byte stream input. */
		fileContents?: string | null;

		/** File stored in Cloud Storage bucket and represented in the form projects/{project_id}/buckets/{bucket_name}/objects/{object_name} File should be in the same project as the domain. */
		gcsPath?: string | null;
	}

	/** ExtendSchemaRequest is the request message for ExtendSchema method. */
	export interface ExtendSchemaRequestFormProperties {

		/** Required. Description for Schema Change. */
		description: FormControl<string | null | undefined>,

		/** File uploaded as a byte stream input. */
		fileContents: FormControl<string | null | undefined>,

		/** File stored in Cloud Storage bucket and represented in the form projects/{project_id}/buckets/{bucket_name}/objects/{object_name} File should be in the same project as the domain. */
		gcsPath: FormControl<string | null | undefined>,
	}
	export function CreateExtendSchemaRequestFormGroup() {
		return new FormGroup<ExtendSchemaRequestFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			fileContents: new FormControl<string | null | undefined>(undefined),
			gcsPath: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents the metadata of the long-running operation. */
	export interface GoogleCloudManagedidentitiesV1OpMetadata {

		/** Output only. API version used to start the operation. */
		apiVersion?: string | null;

		/** Output only. The time the operation was created. */
		createTime?: string | null;

		/** Output only. The time the operation finished running. */
		endTime?: string | null;

		/** Output only. Identifies whether the user has requested cancellation of the operation. Operations that have successfully been cancelled have Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`. */
		requestedCancellation?: boolean | null;

		/** Output only. Server-defined resource path for the target of the operation. */
		target?: string | null;

		/** Output only. Name of the verb executed by the operation. */
		verb?: string | null;
	}

	/** Represents the metadata of the long-running operation. */
	export interface GoogleCloudManagedidentitiesV1OpMetadataFormProperties {

		/** Output only. API version used to start the operation. */
		apiVersion: FormControl<string | null | undefined>,

		/** Output only. The time the operation was created. */
		createTime: FormControl<string | null | undefined>,

		/** Output only. The time the operation finished running. */
		endTime: FormControl<string | null | undefined>,

		/** Output only. Identifies whether the user has requested cancellation of the operation. Operations that have successfully been cancelled have Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`. */
		requestedCancellation: FormControl<boolean | null | undefined>,

		/** Output only. Server-defined resource path for the target of the operation. */
		target: FormControl<string | null | undefined>,

		/** Output only. Name of the verb executed by the operation. */
		verb: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudManagedidentitiesV1OpMetadataFormGroup() {
		return new FormGroup<GoogleCloudManagedidentitiesV1OpMetadataFormProperties>({
			apiVersion: new FormControl<string | null | undefined>(undefined),
			createTime: new FormControl<string | null | undefined>(undefined),
			endTime: new FormControl<string | null | undefined>(undefined),
			requestedCancellation: new FormControl<boolean | null | undefined>(undefined),
			target: new FormControl<string | null | undefined>(undefined),
			verb: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents the metadata of the long-running operation. */
	export interface GoogleCloudManagedidentitiesV1alpha1OpMetadata {

		/** Output only. API version used to start the operation. */
		apiVersion?: string | null;

		/** Output only. The time the operation was created. */
		createTime?: string | null;

		/** Output only. The time the operation finished running. */
		endTime?: string | null;

		/** Output only. Identifies whether the user has requested cancellation of the operation. Operations that have successfully been cancelled have Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`. */
		requestedCancellation?: boolean | null;

		/** Output only. Server-defined resource path for the target of the operation. */
		target?: string | null;

		/** Output only. Name of the verb executed by the operation. */
		verb?: string | null;
	}

	/** Represents the metadata of the long-running operation. */
	export interface GoogleCloudManagedidentitiesV1alpha1OpMetadataFormProperties {

		/** Output only. API version used to start the operation. */
		apiVersion: FormControl<string | null | undefined>,

		/** Output only. The time the operation was created. */
		createTime: FormControl<string | null | undefined>,

		/** Output only. The time the operation finished running. */
		endTime: FormControl<string | null | undefined>,

		/** Output only. Identifies whether the user has requested cancellation of the operation. Operations that have successfully been cancelled have Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`. */
		requestedCancellation: FormControl<boolean | null | undefined>,

		/** Output only. Server-defined resource path for the target of the operation. */
		target: FormControl<string | null | undefined>,

		/** Output only. Name of the verb executed by the operation. */
		verb: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudManagedidentitiesV1alpha1OpMetadataFormGroup() {
		return new FormGroup<GoogleCloudManagedidentitiesV1alpha1OpMetadataFormProperties>({
			apiVersion: new FormControl<string | null | undefined>(undefined),
			createTime: new FormControl<string | null | undefined>(undefined),
			endTime: new FormControl<string | null | undefined>(undefined),
			requestedCancellation: new FormControl<boolean | null | undefined>(undefined),
			target: new FormControl<string | null | undefined>(undefined),
			verb: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents the metadata of the long-running operation. */
	export interface GoogleCloudManagedidentitiesV1beta1OpMetadata {

		/** Output only. API version used to start the operation. */
		apiVersion?: string | null;

		/** Output only. The time the operation was created. */
		createTime?: string | null;

		/** Output only. The time the operation finished running. */
		endTime?: string | null;

		/** Output only. Identifies whether the user has requested cancellation of the operation. Operations that have successfully been cancelled have Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`. */
		requestedCancellation?: boolean | null;

		/** Output only. Server-defined resource path for the target of the operation. */
		target?: string | null;

		/** Output only. Name of the verb executed by the operation. */
		verb?: string | null;
	}

	/** Represents the metadata of the long-running operation. */
	export interface GoogleCloudManagedidentitiesV1beta1OpMetadataFormProperties {

		/** Output only. API version used to start the operation. */
		apiVersion: FormControl<string | null | undefined>,

		/** Output only. The time the operation was created. */
		createTime: FormControl<string | null | undefined>,

		/** Output only. The time the operation finished running. */
		endTime: FormControl<string | null | undefined>,

		/** Output only. Identifies whether the user has requested cancellation of the operation. Operations that have successfully been cancelled have Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`. */
		requestedCancellation: FormControl<boolean | null | undefined>,

		/** Output only. Server-defined resource path for the target of the operation. */
		target: FormControl<string | null | undefined>,

		/** Output only. Name of the verb executed by the operation. */
		verb: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudManagedidentitiesV1beta1OpMetadataFormGroup() {
		return new FormGroup<GoogleCloudManagedidentitiesV1beta1OpMetadataFormProperties>({
			apiVersion: new FormControl<string | null | undefined>(undefined),
			createTime: new FormControl<string | null | undefined>(undefined),
			endTime: new FormControl<string | null | undefined>(undefined),
			requestedCancellation: new FormControl<boolean | null | undefined>(undefined),
			target: new FormControl<string | null | undefined>(undefined),
			verb: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Instance represents the interface for SLM services to actuate the state of control plane resources. Example Instance in JSON, where consumer-project-number=123456, producer-project-id=cloud-sql: ```json Instance: { "name": "projects/123456/locations/us-east1/instances/prod-instance", "create_time": { "seconds": 1526406431, }, "labels": { "env": "prod", "foo": "bar" }, "state": READY, "software_versions": { "software_update": "cloud-sql-09-28-2018", }, "maintenance_policy_names": { "UpdatePolicy": "projects/123456/locations/us-east1/maintenancePolicies/prod-update-policy", } "tenant_project_id": "cloud-sql-test-tenant", "producer_metadata": { "cloud-sql-tier": "basic", "cloud-sql-instance-size": "1G", }, "provisioned_resources": [ { "resource-type": "compute-instance", "resource-url": "https://www.googleapis.com/compute/v1/projects/cloud-sql/zones/us-east1-b/instances/vm-1", } ], "maintenance_schedules": { "csa_rollout": { "start_time": { "seconds": 1526406431, }, "end_time": { "seconds": 1535406431, }, }, "ncsa_rollout": { "start_time": { "seconds": 1526406431, }, "end_time": { "seconds": 1535406431, }, } }, "consumer_defined_name": "my-sql-instance1", } ``` LINT.IfChange */
	export interface GoogleCloudSaasacceleratorManagementProvidersV1Instance {

		/** consumer_defined_name is the name of the instance set by the service consumers. Generally this is different from the `name` field which reperesents the system-assigned id of the instance which the service consumers do not recognize. This is a required field for tenants onboarding to Maintenance Window notifications (go/slm-rollout-maintenance-policies#prerequisites). */
		consumerDefinedName?: string | null;

		/** Output only. Timestamp when the resource was created. */
		createTime?: string | null;

		/** Optional. The instance_type of this instance of format: projects/{project_number}/locations/{location_id}/instanceTypes/{instance_type_id}. Instance Type represents a high-level tier or SKU of the service that this instance belong to. When enabled(eg: Maintenance Rollout), Rollout uses 'instance_type' along with 'software_versions' to determine whether instance needs an update or not. */
		instanceType?: string | null;

		/** Optional. Resource labels to represent user provided metadata. Each label is a key-value pair, where both the key and the value are arbitrary strings provided by the user. */
		labels?: {[id: string]: string };

		/** Optional. The MaintenancePolicies that have been attached to the instance. The key must be of the type name of the oneof policy name defined in MaintenancePolicy, and the referenced policy must define the same policy type. For details, please refer to go/cloud-saas-mw-ug. Should not be set if maintenance_settings.maintenance_policies is set. */
		maintenancePolicyNames?: {[id: string]: string };

		/** The MaintenanceSchedule contains the scheduling information of published maintenance schedule with same key as software_versions. */
		maintenanceSchedules?: {[id: string]: GoogleCloudSaasacceleratorManagementProvidersV1MaintenanceSchedule };

		/** Maintenance settings associated with instance. Allows service producers and end users to assign settings that controls maintenance on this instance. */
		maintenanceSettings?: GoogleCloudSaasacceleratorManagementProvidersV1MaintenanceSettings;

		/** Unique name of the resource. It uses the form: `projects/{project_number}/locations/{location_id}/instances/{instance_id}` Note: This name is passed, stored and logged across the rollout system. So use of consumer project_id or any other consumer PII in the name is strongly discouraged for wipeout (go/wipeout) compliance. See go/elysium/project_ids#storage-guidance for more details. */
		name?: string | null;

		/** Optional. notification_parameter are information that service producers may like to include that is not relevant to Rollout. This parameter will only be passed to Gamma and Cloud Logging for notification/logging purpose. */
		notificationParameters?: {[id: string]: GoogleCloudSaasacceleratorManagementProvidersV1NotificationParameter };

		/** Output only. Custom string attributes used primarily to expose producer-specific information in monitoring dashboards. See go/get-instance-metadata. */
		producerMetadata?: {[id: string]: string };

		/** Output only. The list of data plane resources provisioned for this instance, e.g. compute VMs. See go/get-instance-metadata. */
		provisionedResources?: Array<GoogleCloudSaasacceleratorManagementProvidersV1ProvisionedResource>;

		/** Link to the SLM instance template. Only populated when updating SLM instances via SSA's Actuation service adaptor. Service producers with custom control plane (e.g. Cloud SQL) doesn't need to populate this field. Instead they should use software_versions. */
		slmInstanceTemplate?: string | null;

		/** SloMetadata contains resources required for proper SLO classification of the instance. */
		sloMetadata?: GoogleCloudSaasacceleratorManagementProvidersV1SloMetadata;

		/** Software versions that are used to deploy this instance. This can be mutated by rollout services. */
		softwareVersions?: {[id: string]: string };

		/** Output only. Current lifecycle state of the resource (e.g. if it's being created or ready to use). */
		state?: GoogleCloudSaasacceleratorManagementProvidersV1InstanceState | null;

		/** Output only. ID of the associated GCP tenant project. See go/get-instance-metadata. */
		tenantProjectId?: string | null;

		/** Output only. Timestamp when the resource was last modified. */
		updateTime?: string | null;
	}

	/** Instance represents the interface for SLM services to actuate the state of control plane resources. Example Instance in JSON, where consumer-project-number=123456, producer-project-id=cloud-sql: ```json Instance: { "name": "projects/123456/locations/us-east1/instances/prod-instance", "create_time": { "seconds": 1526406431, }, "labels": { "env": "prod", "foo": "bar" }, "state": READY, "software_versions": { "software_update": "cloud-sql-09-28-2018", }, "maintenance_policy_names": { "UpdatePolicy": "projects/123456/locations/us-east1/maintenancePolicies/prod-update-policy", } "tenant_project_id": "cloud-sql-test-tenant", "producer_metadata": { "cloud-sql-tier": "basic", "cloud-sql-instance-size": "1G", }, "provisioned_resources": [ { "resource-type": "compute-instance", "resource-url": "https://www.googleapis.com/compute/v1/projects/cloud-sql/zones/us-east1-b/instances/vm-1", } ], "maintenance_schedules": { "csa_rollout": { "start_time": { "seconds": 1526406431, }, "end_time": { "seconds": 1535406431, }, }, "ncsa_rollout": { "start_time": { "seconds": 1526406431, }, "end_time": { "seconds": 1535406431, }, } }, "consumer_defined_name": "my-sql-instance1", } ``` LINT.IfChange */
	export interface GoogleCloudSaasacceleratorManagementProvidersV1InstanceFormProperties {

		/** consumer_defined_name is the name of the instance set by the service consumers. Generally this is different from the `name` field which reperesents the system-assigned id of the instance which the service consumers do not recognize. This is a required field for tenants onboarding to Maintenance Window notifications (go/slm-rollout-maintenance-policies#prerequisites). */
		consumerDefinedName: FormControl<string | null | undefined>,

		/** Output only. Timestamp when the resource was created. */
		createTime: FormControl<string | null | undefined>,

		/** Optional. The instance_type of this instance of format: projects/{project_number}/locations/{location_id}/instanceTypes/{instance_type_id}. Instance Type represents a high-level tier or SKU of the service that this instance belong to. When enabled(eg: Maintenance Rollout), Rollout uses 'instance_type' along with 'software_versions' to determine whether instance needs an update or not. */
		instanceType: FormControl<string | null | undefined>,

		/** Optional. Resource labels to represent user provided metadata. Each label is a key-value pair, where both the key and the value are arbitrary strings provided by the user. */
		labels: FormControl<{[id: string]: string } | null | undefined>,

		/** Optional. The MaintenancePolicies that have been attached to the instance. The key must be of the type name of the oneof policy name defined in MaintenancePolicy, and the referenced policy must define the same policy type. For details, please refer to go/cloud-saas-mw-ug. Should not be set if maintenance_settings.maintenance_policies is set. */
		maintenancePolicyNames: FormControl<{[id: string]: string } | null | undefined>,

		/** The MaintenanceSchedule contains the scheduling information of published maintenance schedule with same key as software_versions. */
		maintenanceSchedules: FormControl<{[id: string]: GoogleCloudSaasacceleratorManagementProvidersV1MaintenanceSchedule } | null | undefined>,

		/** Unique name of the resource. It uses the form: `projects/{project_number}/locations/{location_id}/instances/{instance_id}` Note: This name is passed, stored and logged across the rollout system. So use of consumer project_id or any other consumer PII in the name is strongly discouraged for wipeout (go/wipeout) compliance. See go/elysium/project_ids#storage-guidance for more details. */
		name: FormControl<string | null | undefined>,

		/** Optional. notification_parameter are information that service producers may like to include that is not relevant to Rollout. This parameter will only be passed to Gamma and Cloud Logging for notification/logging purpose. */
		notificationParameters: FormControl<{[id: string]: GoogleCloudSaasacceleratorManagementProvidersV1NotificationParameter } | null | undefined>,

		/** Output only. Custom string attributes used primarily to expose producer-specific information in monitoring dashboards. See go/get-instance-metadata. */
		producerMetadata: FormControl<{[id: string]: string } | null | undefined>,

		/** Link to the SLM instance template. Only populated when updating SLM instances via SSA's Actuation service adaptor. Service producers with custom control plane (e.g. Cloud SQL) doesn't need to populate this field. Instead they should use software_versions. */
		slmInstanceTemplate: FormControl<string | null | undefined>,

		/** Software versions that are used to deploy this instance. This can be mutated by rollout services. */
		softwareVersions: FormControl<{[id: string]: string } | null | undefined>,

		/** Output only. Current lifecycle state of the resource (e.g. if it's being created or ready to use). */
		state: FormControl<GoogleCloudSaasacceleratorManagementProvidersV1InstanceState | null | undefined>,

		/** Output only. ID of the associated GCP tenant project. See go/get-instance-metadata. */
		tenantProjectId: FormControl<string | null | undefined>,

		/** Output only. Timestamp when the resource was last modified. */
		updateTime: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudSaasacceleratorManagementProvidersV1InstanceFormGroup() {
		return new FormGroup<GoogleCloudSaasacceleratorManagementProvidersV1InstanceFormProperties>({
			consumerDefinedName: new FormControl<string | null | undefined>(undefined),
			createTime: new FormControl<string | null | undefined>(undefined),
			instanceType: new FormControl<string | null | undefined>(undefined),
			labels: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			maintenancePolicyNames: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			maintenanceSchedules: new FormControl<{[id: string]: GoogleCloudSaasacceleratorManagementProvidersV1MaintenanceSchedule } | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			notificationParameters: new FormControl<{[id: string]: GoogleCloudSaasacceleratorManagementProvidersV1NotificationParameter } | null | undefined>(undefined),
			producerMetadata: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			slmInstanceTemplate: new FormControl<string | null | undefined>(undefined),
			softwareVersions: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			state: new FormControl<GoogleCloudSaasacceleratorManagementProvidersV1InstanceState | null | undefined>(undefined),
			tenantProjectId: new FormControl<string | null | undefined>(undefined),
			updateTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Maintenance schedule which is exposed to customer and potentially end user, indicating published upcoming future maintenance schedule */
	export interface GoogleCloudSaasacceleratorManagementProvidersV1MaintenanceSchedule {

		/** This field is deprecated, and will be always set to true since reschedule can happen multiple times now. This field should not be removed until all service producers remove this for their customers. */
		canReschedule?: boolean | null;

		/** The scheduled end time for the maintenance. */
		endTime?: string | null;

		/** The rollout management policy this maintenance schedule is associated with. When doing reschedule update request, the reschedule should be against this given policy. */
		rolloutManagementPolicy?: string | null;

		/** schedule_deadline_time is the time deadline any schedule start time cannot go beyond, including reschedule. It's normally the initial schedule start time plus maintenance window length (1 day or 1 week). Maintenance cannot be scheduled to start beyond this deadline. */
		scheduleDeadlineTime?: string | null;

		/** The scheduled start time for the maintenance. */
		startTime?: string | null;
	}

	/** Maintenance schedule which is exposed to customer and potentially end user, indicating published upcoming future maintenance schedule */
	export interface GoogleCloudSaasacceleratorManagementProvidersV1MaintenanceScheduleFormProperties {

		/** This field is deprecated, and will be always set to true since reschedule can happen multiple times now. This field should not be removed until all service producers remove this for their customers. */
		canReschedule: FormControl<boolean | null | undefined>,

		/** The scheduled end time for the maintenance. */
		endTime: FormControl<string | null | undefined>,

		/** The rollout management policy this maintenance schedule is associated with. When doing reschedule update request, the reschedule should be against this given policy. */
		rolloutManagementPolicy: FormControl<string | null | undefined>,

		/** schedule_deadline_time is the time deadline any schedule start time cannot go beyond, including reschedule. It's normally the initial schedule start time plus maintenance window length (1 day or 1 week). Maintenance cannot be scheduled to start beyond this deadline. */
		scheduleDeadlineTime: FormControl<string | null | undefined>,

		/** The scheduled start time for the maintenance. */
		startTime: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudSaasacceleratorManagementProvidersV1MaintenanceScheduleFormGroup() {
		return new FormGroup<GoogleCloudSaasacceleratorManagementProvidersV1MaintenanceScheduleFormProperties>({
			canReschedule: new FormControl<boolean | null | undefined>(undefined),
			endTime: new FormControl<string | null | undefined>(undefined),
			rolloutManagementPolicy: new FormControl<string | null | undefined>(undefined),
			scheduleDeadlineTime: new FormControl<string | null | undefined>(undefined),
			startTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Maintenance settings associated with instance. Allows service producers and end users to assign settings that controls maintenance on this instance. */
	export interface GoogleCloudSaasacceleratorManagementProvidersV1MaintenanceSettings {

		/** Optional. Exclude instance from maintenance. When true, rollout service will not attempt maintenance on the instance. Rollout service will include the instance in reported rollout progress as not attempted. */
		exclude?: boolean | null;

		/** Optional. If the update call is triggered from rollback, set the value as true. */
		isRollback?: boolean | null;

		/** Optional. The MaintenancePolicies that have been attached to the instance. The key must be of the type name of the oneof policy name defined in MaintenancePolicy, and the embedded policy must define the same policy type. For details, please refer to go/cloud-saas-mw-ug. Should not be set if maintenance_policy_names is set. If only the name is needed, then only populate MaintenancePolicy.name. */
		maintenancePolicies?: {[id: string]: MaintenancePolicy };
	}

	/** Maintenance settings associated with instance. Allows service producers and end users to assign settings that controls maintenance on this instance. */
	export interface GoogleCloudSaasacceleratorManagementProvidersV1MaintenanceSettingsFormProperties {

		/** Optional. Exclude instance from maintenance. When true, rollout service will not attempt maintenance on the instance. Rollout service will include the instance in reported rollout progress as not attempted. */
		exclude: FormControl<boolean | null | undefined>,

		/** Optional. If the update call is triggered from rollback, set the value as true. */
		isRollback: FormControl<boolean | null | undefined>,

		/** Optional. The MaintenancePolicies that have been attached to the instance. The key must be of the type name of the oneof policy name defined in MaintenancePolicy, and the embedded policy must define the same policy type. For details, please refer to go/cloud-saas-mw-ug. Should not be set if maintenance_policy_names is set. If only the name is needed, then only populate MaintenancePolicy.name. */
		maintenancePolicies: FormControl<{[id: string]: MaintenancePolicy } | null | undefined>,
	}
	export function CreateGoogleCloudSaasacceleratorManagementProvidersV1MaintenanceSettingsFormGroup() {
		return new FormGroup<GoogleCloudSaasacceleratorManagementProvidersV1MaintenanceSettingsFormProperties>({
			exclude: new FormControl<boolean | null | undefined>(undefined),
			isRollback: new FormControl<boolean | null | undefined>(undefined),
			maintenancePolicies: new FormControl<{[id: string]: MaintenancePolicy } | null | undefined>(undefined),
		});

	}


	/** LINT.IfChange Defines policies to service maintenance events. */
	export interface MaintenancePolicy {

		/** Output only. The time when the resource was created. */
		createTime?: string | null;

		/** Optional. Description of what this policy is for. Create/Update methods return INVALID_ARGUMENT if the length is greater than 512. */
		description?: string | null;

		/** Optional. Resource labels to represent user provided metadata. Each label is a key-value pair, where both the key and the value are arbitrary strings provided by the user. */
		labels?: {[id: string]: string };

		/** Required. MaintenancePolicy name using the form: `projects/{project_id}/locations/{location_id}/maintenancePolicies/{maintenance_policy_id}` where {project_id} refers to a GCP consumer project ID, {location_id} refers to a GCP region/zone, {maintenance_policy_id} must be 1-63 characters long and match the regular expression `[a-z0-9]([-a-z0-9]*[a-z0-9])?`. */
		name?: string | null;

		/** Optional. The state of the policy. */
		state?: MaintenancePolicyState | null;

		/** Maintenance policy applicable to instance updates. */
		updatePolicy?: UpdatePolicy;

		/** Output only. The time when the resource was updated. */
		updateTime?: string | null;
	}

	/** LINT.IfChange Defines policies to service maintenance events. */
	export interface MaintenancePolicyFormProperties {

		/** Output only. The time when the resource was created. */
		createTime: FormControl<string | null | undefined>,

		/** Optional. Description of what this policy is for. Create/Update methods return INVALID_ARGUMENT if the length is greater than 512. */
		description: FormControl<string | null | undefined>,

		/** Optional. Resource labels to represent user provided metadata. Each label is a key-value pair, where both the key and the value are arbitrary strings provided by the user. */
		labels: FormControl<{[id: string]: string } | null | undefined>,

		/** Required. MaintenancePolicy name using the form: `projects/{project_id}/locations/{location_id}/maintenancePolicies/{maintenance_policy_id}` where {project_id} refers to a GCP consumer project ID, {location_id} refers to a GCP region/zone, {maintenance_policy_id} must be 1-63 characters long and match the regular expression `[a-z0-9]([-a-z0-9]*[a-z0-9])?`. */
		name: FormControl<string | null | undefined>,

		/** Optional. The state of the policy. */
		state: FormControl<MaintenancePolicyState | null | undefined>,

		/** Output only. The time when the resource was updated. */
		updateTime: FormControl<string | null | undefined>,
	}
	export function CreateMaintenancePolicyFormGroup() {
		return new FormGroup<MaintenancePolicyFormProperties>({
			createTime: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			labels: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<MaintenancePolicyState | null | undefined>(undefined),
			updateTime: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum MaintenancePolicyState { STATE_UNSPECIFIED = 0, READY = 1, DELETING = 2 }


	/** Maintenance policy applicable to instance updates. */
	export interface UpdatePolicy {

		/** Optional. Relative scheduling channel applied to resource. */
		channel?: UpdatePolicyChannel | null;

		/** Deny Maintenance Period that is applied to resource to indicate when maintenance is forbidden. The protocol supports zero-to-many such periods, but the current SLM Rollout implementation only supports zero-to-one. */
		denyMaintenancePeriods?: Array<DenyMaintenancePeriod>;

		/** MaintenanceWindow definition. */
		window?: MaintenanceWindow;
	}

	/** Maintenance policy applicable to instance updates. */
	export interface UpdatePolicyFormProperties {

		/** Optional. Relative scheduling channel applied to resource. */
		channel: FormControl<UpdatePolicyChannel | null | undefined>,
	}
	export function CreateUpdatePolicyFormGroup() {
		return new FormGroup<UpdatePolicyFormProperties>({
			channel: new FormControl<UpdatePolicyChannel | null | undefined>(undefined),
		});

	}

	export enum UpdatePolicyChannel { UPDATE_CHANNEL_UNSPECIFIED = 0, EARLIER = 1, LATER = 2, WEEK1 = 3, WEEK2 = 4, WEEK5 = 5 }


	/** MaintenanceWindow definition. */
	export interface MaintenanceWindow {

		/** Time window specified for daily operations. */
		dailyCycle?: DailyCycle;

		/** Time window specified for weekly operations. */
		weeklyCycle?: WeeklyCycle;
	}

	/** MaintenanceWindow definition. */
	export interface MaintenanceWindowFormProperties {
	}
	export function CreateMaintenanceWindowFormGroup() {
		return new FormGroup<MaintenanceWindowFormProperties>({
		});

	}


	/** Time window specified for weekly operations. */
	export interface WeeklyCycle {

		/** User can specify multiple windows in a week. Minimum of 1 window. */
		schedule?: Array<Schedule>;
	}

	/** Time window specified for weekly operations. */
	export interface WeeklyCycleFormProperties {
	}
	export function CreateWeeklyCycleFormGroup() {
		return new FormGroup<WeeklyCycleFormProperties>({
		});

	}


	/** Configure the schedule. */
	export interface Schedule {

		/** Allows to define schedule that runs specified day of the week. */
		day?: ScheduleDay | null;

		/** Output only. Duration of the time window, set by service producer. */
		duration?: string | null;

		/** Represents a time of day. The date and time zone are either not significant or are specified elsewhere. An API may choose to allow leap seconds. Related types are google.type.Date and `google.protobuf.Timestamp`. */
		startTime?: TimeOfDay;
	}

	/** Configure the schedule. */
	export interface ScheduleFormProperties {

		/** Allows to define schedule that runs specified day of the week. */
		day: FormControl<ScheduleDay | null | undefined>,

		/** Output only. Duration of the time window, set by service producer. */
		duration: FormControl<string | null | undefined>,
	}
	export function CreateScheduleFormGroup() {
		return new FormGroup<ScheduleFormProperties>({
			day: new FormControl<ScheduleDay | null | undefined>(undefined),
			duration: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ScheduleDay { DAY_OF_WEEK_UNSPECIFIED = 0, MONDAY = 1, TUESDAY = 2, WEDNESDAY = 3, THURSDAY = 4, FRIDAY = 5, SATURDAY = 6, SUNDAY = 7 }


	/** Contains notification related data. */
	export interface GoogleCloudSaasacceleratorManagementProvidersV1NotificationParameter {

		/** Optional. Array of string values. e.g. instance's replica information. */
		values?: Array<string>;
	}

	/** Contains notification related data. */
	export interface GoogleCloudSaasacceleratorManagementProvidersV1NotificationParameterFormProperties {
	}
	export function CreateGoogleCloudSaasacceleratorManagementProvidersV1NotificationParameterFormGroup() {
		return new FormGroup<GoogleCloudSaasacceleratorManagementProvidersV1NotificationParameterFormProperties>({
		});

	}


	/** Describes provisioned dataplane resources. */
	export interface GoogleCloudSaasacceleratorManagementProvidersV1ProvisionedResource {

		/** Type of the resource. This can be either a GCP resource or a custom one (e.g. another cloud provider's VM). For GCP compute resources use singular form of the names listed in GCP compute API documentation (https://cloud.google.com/compute/docs/reference/rest/v1/), prefixed with 'compute-', for example: 'compute-instance', 'compute-disk', 'compute-autoscaler'. */
		resourceType?: string | null;

		/** URL identifying the resource, e.g. "https://www.googleapis.com/compute/v1/projects/...)". */
		resourceUrl?: string | null;
	}

	/** Describes provisioned dataplane resources. */
	export interface GoogleCloudSaasacceleratorManagementProvidersV1ProvisionedResourceFormProperties {

		/** Type of the resource. This can be either a GCP resource or a custom one (e.g. another cloud provider's VM). For GCP compute resources use singular form of the names listed in GCP compute API documentation (https://cloud.google.com/compute/docs/reference/rest/v1/), prefixed with 'compute-', for example: 'compute-instance', 'compute-disk', 'compute-autoscaler'. */
		resourceType: FormControl<string | null | undefined>,

		/** URL identifying the resource, e.g. "https://www.googleapis.com/compute/v1/projects/...)". */
		resourceUrl: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudSaasacceleratorManagementProvidersV1ProvisionedResourceFormGroup() {
		return new FormGroup<GoogleCloudSaasacceleratorManagementProvidersV1ProvisionedResourceFormProperties>({
			resourceType: new FormControl<string | null | undefined>(undefined),
			resourceUrl: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** SloMetadata contains resources required for proper SLO classification of the instance. */
	export interface GoogleCloudSaasacceleratorManagementProvidersV1SloMetadata {

		/** Optional. List of nodes. Some producers need to use per-node metadata to calculate SLO. This field allows such producers to publish per-node SLO meta data, which will be consumed by SSA Eligibility Exporter and published in the form of per node metric to Monarch. */
		nodes?: Array<GoogleCloudSaasacceleratorManagementProvidersV1NodeSloMetadata>;

		/** PerSliSloEligibility is a mapping from an SLI name to eligibility. */
		perSliEligibility?: GoogleCloudSaasacceleratorManagementProvidersV1PerSliSloEligibility;

		/** Name of the SLO tier the Instance belongs to. This name will be expected to match the tiers specified in the service SLO configuration. Field is mandatory and must not be empty. */
		tier?: string | null;
	}

	/** SloMetadata contains resources required for proper SLO classification of the instance. */
	export interface GoogleCloudSaasacceleratorManagementProvidersV1SloMetadataFormProperties {

		/** Name of the SLO tier the Instance belongs to. This name will be expected to match the tiers specified in the service SLO configuration. Field is mandatory and must not be empty. */
		tier: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudSaasacceleratorManagementProvidersV1SloMetadataFormGroup() {
		return new FormGroup<GoogleCloudSaasacceleratorManagementProvidersV1SloMetadataFormProperties>({
			tier: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Node information for custom per-node SLO implementations. SSA does not support per-node SLO, but producers can populate per-node information in SloMetadata for custom precomputations. SSA Eligibility Exporter will emit per-node metric based on this information. */
	export interface GoogleCloudSaasacceleratorManagementProvidersV1NodeSloMetadata {

		/** The location of the node, if different from instance location. */
		location?: string | null;

		/** The id of the node. This should be equal to SaasInstanceNode.node_id. */
		nodeId?: string | null;

		/** PerSliSloEligibility is a mapping from an SLI name to eligibility. */
		perSliEligibility?: GoogleCloudSaasacceleratorManagementProvidersV1PerSliSloEligibility;
	}

	/** Node information for custom per-node SLO implementations. SSA does not support per-node SLO, but producers can populate per-node information in SloMetadata for custom precomputations. SSA Eligibility Exporter will emit per-node metric based on this information. */
	export interface GoogleCloudSaasacceleratorManagementProvidersV1NodeSloMetadataFormProperties {

		/** The location of the node, if different from instance location. */
		location: FormControl<string | null | undefined>,

		/** The id of the node. This should be equal to SaasInstanceNode.node_id. */
		nodeId: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudSaasacceleratorManagementProvidersV1NodeSloMetadataFormGroup() {
		return new FormGroup<GoogleCloudSaasacceleratorManagementProvidersV1NodeSloMetadataFormProperties>({
			location: new FormControl<string | null | undefined>(undefined),
			nodeId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** PerSliSloEligibility is a mapping from an SLI name to eligibility. */
	export interface GoogleCloudSaasacceleratorManagementProvidersV1PerSliSloEligibility {

		/** An entry in the eligibilities map specifies an eligibility for a particular SLI for the given instance. The SLI key in the name must be a valid SLI name specified in the Eligibility Exporter binary flags otherwise an error will be emitted by Eligibility Exporter and the oncaller will be alerted. If an SLI has been defined in the binary flags but the eligibilities map does not contain it, the corresponding SLI time series will not be emitted by the Eligibility Exporter. This ensures a smooth rollout and compatibility between the data produced by different versions of the Eligibility Exporters. If eligibilities map contains a key for an SLI which has not been declared in the binary flags, there will be an error message emitted in the Eligibility Exporter log and the metric for the SLI in question will not be emitted. */
		eligibilities?: {[id: string]: GoogleCloudSaasacceleratorManagementProvidersV1SloEligibility };
	}

	/** PerSliSloEligibility is a mapping from an SLI name to eligibility. */
	export interface GoogleCloudSaasacceleratorManagementProvidersV1PerSliSloEligibilityFormProperties {

		/** An entry in the eligibilities map specifies an eligibility for a particular SLI for the given instance. The SLI key in the name must be a valid SLI name specified in the Eligibility Exporter binary flags otherwise an error will be emitted by Eligibility Exporter and the oncaller will be alerted. If an SLI has been defined in the binary flags but the eligibilities map does not contain it, the corresponding SLI time series will not be emitted by the Eligibility Exporter. This ensures a smooth rollout and compatibility between the data produced by different versions of the Eligibility Exporters. If eligibilities map contains a key for an SLI which has not been declared in the binary flags, there will be an error message emitted in the Eligibility Exporter log and the metric for the SLI in question will not be emitted. */
		eligibilities: FormControl<{[id: string]: GoogleCloudSaasacceleratorManagementProvidersV1SloEligibility } | null | undefined>,
	}
	export function CreateGoogleCloudSaasacceleratorManagementProvidersV1PerSliSloEligibilityFormGroup() {
		return new FormGroup<GoogleCloudSaasacceleratorManagementProvidersV1PerSliSloEligibilityFormProperties>({
			eligibilities: new FormControl<{[id: string]: GoogleCloudSaasacceleratorManagementProvidersV1SloEligibility } | null | undefined>(undefined),
		});

	}


	/** SloEligibility is a tuple containing eligibility value: true if an instance is eligible for SLO calculation or false if it should be excluded from all SLO-related calculations along with a user-defined reason. */
	export interface GoogleCloudSaasacceleratorManagementProvidersV1SloEligibility {

		/** Whether an instance is eligible or ineligible. */
		eligible?: boolean | null;

		/** User-defined reason for the current value of instance eligibility. Usually, this can be directly mapped to the internal state. An empty reason is allowed. */
		reason?: string | null;
	}

	/** SloEligibility is a tuple containing eligibility value: true if an instance is eligible for SLO calculation or false if it should be excluded from all SLO-related calculations along with a user-defined reason. */
	export interface GoogleCloudSaasacceleratorManagementProvidersV1SloEligibilityFormProperties {

		/** Whether an instance is eligible or ineligible. */
		eligible: FormControl<boolean | null | undefined>,

		/** User-defined reason for the current value of instance eligibility. Usually, this can be directly mapped to the internal state. An empty reason is allowed. */
		reason: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudSaasacceleratorManagementProvidersV1SloEligibilityFormGroup() {
		return new FormGroup<GoogleCloudSaasacceleratorManagementProvidersV1SloEligibilityFormProperties>({
			eligible: new FormControl<boolean | null | undefined>(undefined),
			reason: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum GoogleCloudSaasacceleratorManagementProvidersV1InstanceState { STATE_UNSPECIFIED = 0, CREATING = 1, READY = 2, UPDATING = 3, REPAIRING = 4, DELETING = 5, ERROR = 6 }


	/** LDAPSSettings represents the ldaps settings for domain resource. LDAP is the Lightweight Directory Access Protocol, defined in https://tools.ietf.org/html/rfc4511. The settings object configures LDAP over SSL/TLS, whether it is over port 636 or the StartTLS operation. If LDAPSSettings is being changed, it will be placed into the UPDATING state, which indicates that the resource is being reconciled. At this point, Get will reflect an intermediate state. */
	export interface LDAPSSettings {

		/** Certificate used to configure LDAPS. */
		certificate?: Certificate;

		/** Input only. The password used to encrypt the uploaded pfx certificate. */
		certificatePassword?: string | null;

		/** Input only. The uploaded PKCS12-formatted certificate to configure LDAPS with. It will enable the domain controllers in this domain to accept LDAPS connections (either LDAP over SSL/TLS or the StartTLS operation). A valid certificate chain must form a valid x.509 certificate chain (or be comprised of a single self-signed certificate. It must be encrypted with either: 1) PBES2 + PBKDF2 + AES256 encryption and SHA256 PRF; or 2) pbeWithSHA1And3-KeyTripleDES-CBC Private key must be included for the leaf / single self-signed certificate. Note: For a fqdn your-example-domain.com, the wildcard fqdn is *.your-example-domain.com. Specifically the leaf certificate must have: - Either a blank subject or a subject with CN matching the wildcard fqdn. - Exactly two SANs - the fqdn and wildcard fqdn. - Encipherment and digital key signature key usages. - Server authentication extended key usage (OID=1.3.6.1.5.5.7.3.1) - Private key must be in one of the following formats: RSA, ECDSA, ED25519. - Private key must have appropriate key length: 2048 for RSA, 256 for ECDSA - Signature algorithm of the leaf certificate cannot be MD2, MD5 or SHA1. */
		certificatePfx?: string | null;

		/** The resource name of the LDAPS settings. Uses the form: `projects/{project}/locations/{location}/domains/{domain}`. */
		name?: string | null;

		/** Output only. The current state of this LDAPS settings. */
		state?: LDAPSSettingsState | null;

		/** Output only. Last update time. */
		updateTime?: string | null;
	}

	/** LDAPSSettings represents the ldaps settings for domain resource. LDAP is the Lightweight Directory Access Protocol, defined in https://tools.ietf.org/html/rfc4511. The settings object configures LDAP over SSL/TLS, whether it is over port 636 or the StartTLS operation. If LDAPSSettings is being changed, it will be placed into the UPDATING state, which indicates that the resource is being reconciled. At this point, Get will reflect an intermediate state. */
	export interface LDAPSSettingsFormProperties {

		/** Input only. The password used to encrypt the uploaded pfx certificate. */
		certificatePassword: FormControl<string | null | undefined>,

		/** Input only. The uploaded PKCS12-formatted certificate to configure LDAPS with. It will enable the domain controllers in this domain to accept LDAPS connections (either LDAP over SSL/TLS or the StartTLS operation). A valid certificate chain must form a valid x.509 certificate chain (or be comprised of a single self-signed certificate. It must be encrypted with either: 1) PBES2 + PBKDF2 + AES256 encryption and SHA256 PRF; or 2) pbeWithSHA1And3-KeyTripleDES-CBC Private key must be included for the leaf / single self-signed certificate. Note: For a fqdn your-example-domain.com, the wildcard fqdn is *.your-example-domain.com. Specifically the leaf certificate must have: - Either a blank subject or a subject with CN matching the wildcard fqdn. - Exactly two SANs - the fqdn and wildcard fqdn. - Encipherment and digital key signature key usages. - Server authentication extended key usage (OID=1.3.6.1.5.5.7.3.1) - Private key must be in one of the following formats: RSA, ECDSA, ED25519. - Private key must have appropriate key length: 2048 for RSA, 256 for ECDSA - Signature algorithm of the leaf certificate cannot be MD2, MD5 or SHA1. */
		certificatePfx: FormControl<string | null | undefined>,

		/** The resource name of the LDAPS settings. Uses the form: `projects/{project}/locations/{location}/domains/{domain}`. */
		name: FormControl<string | null | undefined>,

		/** Output only. The current state of this LDAPS settings. */
		state: FormControl<LDAPSSettingsState | null | undefined>,

		/** Output only. Last update time. */
		updateTime: FormControl<string | null | undefined>,
	}
	export function CreateLDAPSSettingsFormGroup() {
		return new FormGroup<LDAPSSettingsFormProperties>({
			certificatePassword: new FormControl<string | null | undefined>(undefined),
			certificatePfx: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<LDAPSSettingsState | null | undefined>(undefined),
			updateTime: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum LDAPSSettingsState { STATE_UNSPECIFIED = 0, UPDATING = 1, ACTIVE = 2, FAILED = 3 }


	/** ListBackupsResponse is the response message for ListBackups method. */
	export interface ListBackupsResponse {

		/** A list of Cloud AD backups in the domain. */
		backups?: Array<Backup>;

		/** Token to retrieve the next page of results, or empty if there are no more results in the list. */
		nextPageToken?: string | null;

		/** Locations that could not be reached. */
		unreachable?: Array<string>;
	}

	/** ListBackupsResponse is the response message for ListBackups method. */
	export interface ListBackupsResponseFormProperties {

		/** Token to retrieve the next page of results, or empty if there are no more results in the list. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListBackupsResponseFormGroup() {
		return new FormGroup<ListBackupsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListDomainsResponse {

		/** A list of Managed Identities Service domains in the project. */
		domains?: Array<Domain>;

		/** Token to retrieve the next page of results, or empty if there are no more results in the list. */
		nextPageToken?: string | null;

		/** Locations that could not be reached. */
		unreachable?: Array<string>;
	}
	export interface ListDomainsResponseFormProperties {

		/** Token to retrieve the next page of results, or empty if there are no more results in the list. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListDomainsResponseFormGroup() {
		return new FormGroup<ListDomainsResponseFormProperties>({
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


	/** ListPeeringsResponse is the response message for ListPeerings method. */
	export interface ListPeeringsResponse {

		/** Token to retrieve the next page of results, or empty if there are no more results in the list. */
		nextPageToken?: string | null;

		/** A list of Managed Identities Service Peerings in the project. */
		peerings?: Array<Peering>;

		/** Locations that could not be reached. */
		unreachable?: Array<string>;
	}

	/** ListPeeringsResponse is the response message for ListPeerings method. */
	export interface ListPeeringsResponseFormProperties {

		/** Token to retrieve the next page of results, or empty if there are no more results in the list. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListPeeringsResponseFormGroup() {
		return new FormGroup<ListPeeringsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents a Managed Microsoft Identities Peering. */
	export interface Peering {

		/** Required. The full names of the Google Compute Engine [networks](/compute/docs/networks-and-firewalls#networks) to which the instance is connected. Caller needs to make sure that CIDR subnets do not overlap between networks, else peering creation will fail. */
		authorizedNetwork?: string | null;

		/** Output only. The time the instance was created. */
		createTime?: string | null;

		/** Required. Full domain resource path for the Managed AD Domain involved in peering. The resource path should be in the form: `projects/{project_id}/locations/global/domains/{domain_name}` */
		domainResource?: string | null;

		/** Optional. Resource labels to represent user provided metadata. */
		labels?: {[id: string]: string };

		/** Output only. Unique name of the peering in this scope including projects and location using the form: `projects/{project_id}/locations/global/peerings/{peering_id}`. */
		name?: string | null;

		/** Output only. The current state of this Peering. */
		state?: PeeringState | null;

		/** Output only. Additional information about the current status of this peering, if available. */
		statusMessage?: string | null;

		/** Output only. Last update time. */
		updateTime?: string | null;
	}

	/** Represents a Managed Microsoft Identities Peering. */
	export interface PeeringFormProperties {

		/** Required. The full names of the Google Compute Engine [networks](/compute/docs/networks-and-firewalls#networks) to which the instance is connected. Caller needs to make sure that CIDR subnets do not overlap between networks, else peering creation will fail. */
		authorizedNetwork: FormControl<string | null | undefined>,

		/** Output only. The time the instance was created. */
		createTime: FormControl<string | null | undefined>,

		/** Required. Full domain resource path for the Managed AD Domain involved in peering. The resource path should be in the form: `projects/{project_id}/locations/global/domains/{domain_name}` */
		domainResource: FormControl<string | null | undefined>,

		/** Optional. Resource labels to represent user provided metadata. */
		labels: FormControl<{[id: string]: string } | null | undefined>,

		/** Output only. Unique name of the peering in this scope including projects and location using the form: `projects/{project_id}/locations/global/peerings/{peering_id}`. */
		name: FormControl<string | null | undefined>,

		/** Output only. The current state of this Peering. */
		state: FormControl<PeeringState | null | undefined>,

		/** Output only. Additional information about the current status of this peering, if available. */
		statusMessage: FormControl<string | null | undefined>,

		/** Output only. Last update time. */
		updateTime: FormControl<string | null | undefined>,
	}
	export function CreatePeeringFormGroup() {
		return new FormGroup<PeeringFormProperties>({
			authorizedNetwork: new FormControl<string | null | undefined>(undefined),
			createTime: new FormControl<string | null | undefined>(undefined),
			domainResource: new FormControl<string | null | undefined>(undefined),
			labels: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<PeeringState | null | undefined>(undefined),
			statusMessage: new FormControl<string | null | undefined>(undefined),
			updateTime: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum PeeringState { STATE_UNSPECIFIED = 0, CREATING = 1, CONNECTED = 2, DISCONNECTED = 3, DELETING = 4 }


	/** ListSQLIntegrationsResponse is the response message for ListSQLIntegrations method. */
	export interface ListSQLIntegrationsResponse {

		/** Token to retrieve the next page of results, or empty if there are no more results in the list. */
		nextPageToken?: string | null;

		/** A list of SQLIntegrations of a domain. */
		sqlIntegrations?: Array<SQLIntegration>;

		/** A list of locations that could not be reached. */
		unreachable?: Array<string>;
	}

	/** ListSQLIntegrationsResponse is the response message for ListSQLIntegrations method. */
	export interface ListSQLIntegrationsResponseFormProperties {

		/** Token to retrieve the next page of results, or empty if there are no more results in the list. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListSQLIntegrationsResponseFormGroup() {
		return new FormGroup<ListSQLIntegrationsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents the SQL instance integrated with AD. */
	export interface SQLIntegration {

		/** Output only. The time the instance was created. */
		createTime?: string | null;

		/** The unique name of the sql integration in the form of `projects/{project_id}/locations/global/domains/{domain_name}/sqlIntegrations/{sql_integration}` */
		name?: string | null;

		/** The full resource name of an integrated sql instance */
		sqlInstance?: string | null;

		/** Output only. The current state of the managed OU. */
		state?: SQLIntegrationState | null;

		/** Output only. Last update time for this SQL instance. */
		updateTime?: string | null;
	}

	/** Represents the SQL instance integrated with AD. */
	export interface SQLIntegrationFormProperties {

		/** Output only. The time the instance was created. */
		createTime: FormControl<string | null | undefined>,

		/** The unique name of the sql integration in the form of `projects/{project_id}/locations/global/domains/{domain_name}/sqlIntegrations/{sql_integration}` */
		name: FormControl<string | null | undefined>,

		/** The full resource name of an integrated sql instance */
		sqlInstance: FormControl<string | null | undefined>,

		/** Output only. The current state of the managed OU. */
		state: FormControl<SQLIntegrationState | null | undefined>,

		/** Output only. Last update time for this SQL instance. */
		updateTime: FormControl<string | null | undefined>,
	}
	export function CreateSQLIntegrationFormGroup() {
		return new FormGroup<SQLIntegrationFormProperties>({
			createTime: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			sqlInstance: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<SQLIntegrationState | null | undefined>(undefined),
			updateTime: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum SQLIntegrationState { STATE_UNSPECIFIED = 0, CREATING = 1, DELETING = 2, READY = 3 }


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

	export interface ReconfigureTrustRequest {

		/** Represents a relationship between two domains which makes it possible for users in one domain to be authenticated by a dc in another domain. Refer https://docs.microsoft.com/en-us/previous-versions/windows/it-pro/windows-server-2008-R2-and-2008/cc731335(v%3dws.10) If the trust is being changed, it will be placed into the UPDATING state, which indicates that the resource is being reconciled. At this point, Get will reflect an intermediate state. */
		trust?: Trust;
	}
	export interface ReconfigureTrustRequestFormProperties {
	}
	export function CreateReconfigureTrustRequestFormGroup() {
		return new FormGroup<ReconfigureTrustRequestFormProperties>({
		});

	}

	export interface ResetAdminPasswordRequest {
	}
	export interface ResetAdminPasswordRequestFormProperties {
	}
	export function CreateResetAdminPasswordRequestFormGroup() {
		return new FormGroup<ResetAdminPasswordRequestFormProperties>({
		});

	}

	export interface ResetAdminPasswordResponse {

		/** A random password. See admin for more information. */
		password?: string | null;
	}
	export interface ResetAdminPasswordResponseFormProperties {

		/** A random password. See admin for more information. */
		password: FormControl<string | null | undefined>,
	}
	export function CreateResetAdminPasswordResponseFormGroup() {
		return new FormGroup<ResetAdminPasswordResponseFormProperties>({
			password: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** RestoreDomainRequest is the request received by RestoreDomain rpc */
	export interface RestoreDomainRequest {

		/** Required. ID of the backup to be restored */
		backupId?: string | null;
	}

	/** RestoreDomainRequest is the request received by RestoreDomain rpc */
	export interface RestoreDomainRequestFormProperties {

		/** Required. ID of the backup to be restored */
		backupId: FormControl<string | null | undefined>,
	}
	export function CreateRestoreDomainRequestFormGroup() {
		return new FormGroup<RestoreDomainRequestFormProperties>({
			backupId: new FormControl<string | null | undefined>(undefined),
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

	export interface ValidateTrustRequest {

		/** Represents a relationship between two domains which makes it possible for users in one domain to be authenticated by a dc in another domain. Refer https://docs.microsoft.com/en-us/previous-versions/windows/it-pro/windows-server-2008-R2-and-2008/cc731335(v%3dws.10) If the trust is being changed, it will be placed into the UPDATING state, which indicates that the resource is being reconciled. At this point, Get will reflect an intermediate state. */
		trust?: Trust;
	}
	export interface ValidateTrustRequestFormProperties {
	}
	export function CreateValidateTrustRequestFormGroup() {
		return new FormGroup<ValidateTrustRequestFormProperties>({
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * AuditMigration API gets the current state of DomainMigration
		 * Post v1alpha1/{domain}:checkMigrationPermission
		 * @param {string} domain Required. The domain resource name using the form: `projects/{project_id}/locations/global/domains/{domain_name}`
		 * @return {CheckMigrationPermissionResponse} Successful response
		 */
		Managedidentities_projects_locations_global_domains_checkMigrationPermission(domain: string, requestBody: CheckMigrationPermissionRequest): Observable<CheckMigrationPermissionResponse> {
			return this.http.post<CheckMigrationPermissionResponse>(this.baseUri + 'v1alpha1/' + (domain == null ? '' : encodeURIComponent(domain)) + ':checkMigrationPermission', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Disable Domain Migration
		 * Post v1alpha1/{domain}:disableMigration
		 * @param {string} domain Required. The domain resource name using the form: `projects/{project_id}/locations/global/domains/{domain_name}`
		 * @return {Operation} Successful response
		 */
		Managedidentities_projects_locations_global_domains_disableMigration(domain: string, requestBody: DisableMigrationRequest): Observable<Operation> {
			return this.http.post<Operation>(this.baseUri + 'v1alpha1/' + (domain == null ? '' : encodeURIComponent(domain)) + ':disableMigration', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * DomainJoinMachine API joins a Compute Engine VM to the domain
		 * Post v1alpha1/{domain}:domainJoinMachine
		 * @param {string} domain Required. The domain resource name using the form: projects/{project_id}/locations/global/domains/{domain_name}
		 * @return {DomainJoinMachineResponse} Successful response
		 */
		Managedidentities_projects_locations_global_domains_domainJoinMachine(domain: string, requestBody: DomainJoinMachineRequest): Observable<DomainJoinMachineResponse> {
			return this.http.post<DomainJoinMachineResponse>(this.baseUri + 'v1alpha1/' + (domain == null ? '' : encodeURIComponent(domain)) + ':domainJoinMachine', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Enable Domain Migration
		 * Post v1alpha1/{domain}:enableMigration
		 * @param {string} domain Required. The domain resource name using the form: `projects/{project_id}/locations/global/domains/{domain_name}`
		 * @return {Operation} Successful response
		 */
		Managedidentities_projects_locations_global_domains_enableMigration(domain: string, requestBody: EnableMigrationRequest): Observable<Operation> {
			return this.http.post<Operation>(this.baseUri + 'v1alpha1/' + (domain == null ? '' : encodeURIComponent(domain)) + ':enableMigration', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Extend Schema for Domain
		 * Post v1alpha1/{domain}:extendSchema
		 * @param {string} domain Required. The domain resource name using the form: `projects/{project_id}/locations/global/domains/{domain_name}`
		 * @return {Operation} Successful response
		 */
		Managedidentities_projects_locations_global_domains_extendSchema(domain: string, requestBody: ExtendSchemaRequest): Observable<Operation> {
			return this.http.post<Operation>(this.baseUri + 'v1alpha1/' + (domain == null ? '' : encodeURIComponent(domain)) + ':extendSchema', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes identified Peering.
		 * Delete v1alpha1/{name}
		 * @param {string} name Required. Peering resource name using the form: `projects/{project_id}/locations/global/peerings/{peering_id}`
		 * @return {Operation} Successful response
		 */
		Managedidentities_projects_locations_global_peerings_delete(name: string): Observable<Operation> {
			return this.http.delete<Operation>(this.baseUri + 'v1alpha1/' + (name == null ? '' : encodeURIComponent(name)), {});
		}

		/**
		 * Gets details of a single Peering.
		 * Get v1alpha1/{name}
		 * @param {string} name Required. Peering resource name using the form: `projects/{project_id}/locations/global/peerings/{peering_id}`
		 * @return {Peering} Successful response
		 */
		Managedidentities_projects_locations_global_peerings_get(name: string): Observable<Peering> {
			return this.http.get<Peering>(this.baseUri + 'v1alpha1/' + (name == null ? '' : encodeURIComponent(name)), {});
		}

		/**
		 * Updates the labels for specified Peering.
		 * Patch v1alpha1/{name}
		 * @param {string} name Output only. Unique name of the peering in this scope including projects and location using the form: `projects/{project_id}/locations/global/peerings/{peering_id}`.
		 * @param {string} updateMask Required. Mask of fields to update. At least one path must be supplied in this field. The elements of the repeated paths field may only include these fields from Peering: * `labels`
		 * @return {Operation} Successful response
		 */
		Managedidentities_projects_locations_global_peerings_patch(name: string, updateMask: string | null | undefined, requestBody: Peering): Observable<Operation> {
			return this.http.patch<Operation>(this.baseUri + 'v1alpha1/' + (name == null ? '' : encodeURIComponent(name)) + '&updateMask=' + (updateMask == null ? '' : encodeURIComponent(updateMask)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets the domain ldaps settings.
		 * Get v1alpha1/{name}/ldapssettings
		 * @param {string} name Required. The domain resource name using the form: `projects/{project_id}/locations/global/domains/{domain_name}`
		 * @return {LDAPSSettings} Successful response
		 */
		Managedidentities_projects_locations_global_domains_getLdapssettings(name: string): Observable<LDAPSSettings> {
			return this.http.get<LDAPSSettings>(this.baseUri + 'v1alpha1/' + (name == null ? '' : encodeURIComponent(name)) + '/ldapssettings', {});
		}

		/**
		 * Patches a single ldaps settings.
		 * Patch v1alpha1/{name}/ldapssettings
		 * @param {string} name The resource name of the LDAPS settings. Uses the form: `projects/{project}/locations/{location}/domains/{domain}`.
		 * @param {string} updateMask Required. Mask of fields to update. At least one path must be supplied in this field. For the `FieldMask` definition, see https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#fieldmask
		 * @return {Operation} Successful response
		 */
		Managedidentities_projects_locations_global_domains_updateLdapssettings(name: string, updateMask: string | null | undefined, requestBody: LDAPSSettings): Observable<Operation> {
			return this.http.patch<Operation>(this.baseUri + 'v1alpha1/' + (name == null ? '' : encodeURIComponent(name)) + '/ldapssettings&updateMask=' + (updateMask == null ? '' : encodeURIComponent(updateMask)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists information about the supported locations for this service.
		 * Get v1alpha1/{name}/locations
		 * @param {string} name The resource that owns the locations collection, if applicable.
		 * @param {string} filter A filter to narrow down results to a preferred subset. The filtering language accepts strings like `"displayName=tokyo"`, and is documented in more detail in [AIP-160](https://google.aip.dev/160).
		 * @param {number} pageSize The maximum number of results to return. If not set, the service selects a default.
		 * @param {string} pageToken A page token received from the `next_page_token` field in the response. Send that page token to receive the subsequent page.
		 * @return {ListLocationsResponse} Successful response
		 */
		Managedidentities_projects_locations_list(name: string, filter: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListLocationsResponse> {
			return this.http.get<ListLocationsResponse>(this.baseUri + 'v1alpha1/' + (name == null ? '' : encodeURIComponent(name)) + '/locations&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
		 * Get v1alpha1/{name}/operations
		 * @param {string} name The name of the operation's parent resource.
		 * @param {string} filter The standard list filter.
		 * @param {number} pageSize The standard list page size.
		 * @param {string} pageToken The standard list page token.
		 * @return {ListOperationsResponse} Successful response
		 */
		Managedidentities_projects_locations_global_operations_list(name: string, filter: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListOperationsResponse> {
			return this.http.get<ListOperationsResponse>(this.baseUri + 'v1alpha1/' + (name == null ? '' : encodeURIComponent(name)) + '/operations&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Adds AD trust in a given domain. Operation
		 * Post v1alpha1/{name}:attachTrust
		 * @param {string} name The resource domain name, project name and location using the form: `projects/{project_id}/locations/global/domains/{domain_name}`
		 * @return {Operation} Successful response
		 */
		Managedidentities_projects_locations_global_domains_attachTrust(name: string, requestBody: AttachTrustRequest): Observable<Operation> {
			return this.http.post<Operation>(this.baseUri + 'v1alpha1/' + (name == null ? '' : encodeURIComponent(name)) + ':attachTrust', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
		 * Post v1alpha1/{name}:cancel
		 * @param {string} name The name of the operation resource to be cancelled.
		 * @return {Empty} Successful response
		 */
		Managedidentities_projects_locations_global_operations_cancel(name: string, requestBody: CancelOperationRequest): Observable<Empty> {
			return this.http.post<Empty>(this.baseUri + 'v1alpha1/' + (name == null ? '' : encodeURIComponent(name)) + ':cancel', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Removes identified trust. Operation
		 * Post v1alpha1/{name}:detachTrust
		 * @param {string} name The resource domain name, project name, and location using the form: `projects/{project_id}/locations/global/domains/{domain_name}`
		 * @return {Operation} Successful response
		 */
		Managedidentities_projects_locations_global_domains_detachTrust(name: string, requestBody: DetachTrustRequest): Observable<Operation> {
			return this.http.post<Operation>(this.baseUri + 'v1alpha1/' + (name == null ? '' : encodeURIComponent(name)) + ':detachTrust', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Updates the dns conditional forwarder. Operation
		 * Post v1alpha1/{name}:reconfigureTrust
		 * @param {string} name The resource domain name, project name and location using the form: `projects/{project_id}/locations/global/domains/{domain_name}`
		 * @return {Operation} Successful response
		 */
		Managedidentities_projects_locations_global_domains_reconfigureTrust(name: string, requestBody: ReconfigureTrustRequest): Observable<Operation> {
			return this.http.post<Operation>(this.baseUri + 'v1alpha1/' + (name == null ? '' : encodeURIComponent(name)) + ':reconfigureTrust', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Resets managed identities admin password identified by managed_identities_admin_name
		 * Post v1alpha1/{name}:resetAdminPassword
		 * @param {string} name The domain resource name using the form: `projects/{project_id}/locations/global/domains/{domain_name}`
		 * @return {ResetAdminPasswordResponse} Successful response
		 */
		Managedidentities_projects_locations_global_domains_resetAdminPassword(name: string, requestBody: ResetAdminPasswordRequest): Observable<ResetAdminPasswordResponse> {
			return this.http.post<ResetAdminPasswordResponse>(this.baseUri + 'v1alpha1/' + (name == null ? '' : encodeURIComponent(name)) + ':resetAdminPassword', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * RestoreDomain restores domain backup mentioned in the RestoreDomainRequest
		 * Post v1alpha1/{name}:restore
		 * @param {string} name Required. resource name for the domain to which the backup belongs
		 * @return {Operation} Successful response
		 */
		Managedidentities_projects_locations_global_domains_restore(name: string, requestBody: RestoreDomainRequest): Observable<Operation> {
			return this.http.post<Operation>(this.baseUri + 'v1alpha1/' + (name == null ? '' : encodeURIComponent(name)) + ':restore', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Validate the trust state Operation
		 * Post v1alpha1/{name}:validateTrust
		 * @param {string} name The resource domain name, project name, and location using the form: `projects/{project_id}/locations/global/domains/{domain_name}`
		 * @return {Operation} Successful response
		 */
		Managedidentities_projects_locations_global_domains_validateTrust(name: string, requestBody: ValidateTrustRequest): Observable<Operation> {
			return this.http.post<Operation>(this.baseUri + 'v1alpha1/' + (name == null ? '' : encodeURIComponent(name)) + ':validateTrust', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists Backup in a given project.
		 * Get v1alpha1/{parent}/backups
		 * @param {string} parent Required. The domain resource name using the form: `projects/{project_id}/locations/global/domains/{domain_name}`
		 * @param {string} filter Optional. Filter specifying constraints of a list operation.
		 * @param {string} orderBy Optional. Specifies the ordering of results following syntax at https://cloud.google.com/apis/design/design_patterns#sorting_order.
		 * @param {number} pageSize Optional. The maximum number of items to return. If not specified, a default value of 1000 will be used by the service. Regardless of the page_size value, the response may include a partial list and a caller should only rely on response's next_page_token to determine if there are more instances left to be queried.
		 * @param {string} pageToken Optional. The next_page_token value returned from a previous List request, if any.
		 * @return {ListBackupsResponse} Successful response
		 */
		Managedidentities_projects_locations_global_domains_backups_list(parent: string, filter: string | null | undefined, orderBy: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListBackupsResponse> {
			return this.http.get<ListBackupsResponse>(this.baseUri + 'v1alpha1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/backups&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&orderBy=' + (orderBy == null ? '' : encodeURIComponent(orderBy)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Creates a Backup for a domain.
		 * Post v1alpha1/{parent}/backups
		 * @param {string} parent Required. The domain resource name using the form: `projects/{project_id}/locations/global/domains/{domain_name}`
		 * @param {string} backupId Required. Backup Id, unique name to identify the backups with the following restrictions: * Must be lowercase letters, numbers, and hyphens * Must start with a letter. * Must contain between 1-63 characters. * Must end with a number or a letter. * Must be unique within the domain.
		 * @return {Operation} Successful response
		 */
		Managedidentities_projects_locations_global_domains_backups_create(parent: string, backupId: string | null | undefined, requestBody: Backup): Observable<Operation> {
			return this.http.post<Operation>(this.baseUri + 'v1alpha1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/backups&backupId=' + (backupId == null ? '' : encodeURIComponent(backupId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists Domains in a given project.
		 * Get v1alpha1/{parent}/domains
		 * @param {string} parent Required. The resource name of the domain location using the form: `projects/{project_id}/locations/global`
		 * @param {string} filter Optional. Filter specifying constraints of a list operation. For example, `Domain.fqdn="mydomain.myorginization"`.
		 * @param {string} orderBy Optional. Specifies the ordering of results following syntax at https://cloud.google.com/apis/design/design_patterns#sorting_order.
		 * @param {number} pageSize If not specified, a default value of 1000 will be used by the service. Regardless of the page_size value, the response may include a partial list and a caller should only rely on response's next_page_token to determine if there are more instances left to be queried.
		 * @param {string} pageToken The next_page_token value returned from a previous List request, if any.
		 * @return {ListDomainsResponse} Successful response
		 */
		Managedidentities_projects_locations_global_domains_list(parent: string, filter: string | null | undefined, orderBy: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListDomainsResponse> {
			return this.http.get<ListDomainsResponse>(this.baseUri + 'v1alpha1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/domains&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&orderBy=' + (orderBy == null ? '' : encodeURIComponent(orderBy)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Creates a Microsoft AD Domain in a given project. Operation
		 * Post v1alpha1/{parent}/domains
		 * @param {string} parent Resource project name and location using the form: `projects/{project_id}/locations/global`
		 * @param {string} domainName The fully qualified domain name. e.g. mydomain.myorganization.com, with the following restrictions: * Must contain only lowercase letters, numbers, periods and hyphens. * Must start with a letter. * Must contain between 2-64 characters. * Must end with a number or a letter. * Must not start with period. * Must be unique within the project. * First segment length (mydomain form example above) shouldn't exceed 15 chars. * The last segment cannot be fully numeric.
		 * @return {Operation} Successful response
		 */
		Managedidentities_projects_locations_global_domains_create(parent: string, domainName: string | null | undefined, requestBody: Domain): Observable<Operation> {
			return this.http.post<Operation>(this.baseUri + 'v1alpha1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/domains&domainName=' + (domainName == null ? '' : encodeURIComponent(domainName)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists Peerings in a given project.
		 * Get v1alpha1/{parent}/peerings
		 * @param {string} parent Required. The resource name of the domain location using the form: `projects/{project_id}/locations/global`
		 * @param {string} filter Optional. Filter specifying constraints of a list operation. For example, `peering.authoized_network ="/projects/myprojectid"`.
		 * @param {string} orderBy Optional. Specifies the ordering of results following syntax at https://cloud.google.com/apis/design/design_patterns#sorting_order.
		 * @param {number} pageSize Optional. The maximum number of items to return. If not specified, a default value of 1000 will be used by the service. Regardless of the page_size value, the response may include a partial list and a caller should only rely on response's next_page_token to determine if there are more instances left to be queried.
		 * @param {string} pageToken Optional. The next_page_token value returned from a previous List request, if any.
		 * @return {ListPeeringsResponse} Successful response
		 */
		Managedidentities_projects_locations_global_peerings_list(parent: string, filter: string | null | undefined, orderBy: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListPeeringsResponse> {
			return this.http.get<ListPeeringsResponse>(this.baseUri + 'v1alpha1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/peerings&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&orderBy=' + (orderBy == null ? '' : encodeURIComponent(orderBy)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Creates a Peering for Managed AD instance.
		 * Post v1alpha1/{parent}/peerings
		 * @param {string} parent Required. Resource project name and location using the form: `projects/{project_id}/locations/global`
		 * @param {string} peeringId Required. Peering Id, unique name to identify peering.
		 * @return {Operation} Successful response
		 */
		Managedidentities_projects_locations_global_peerings_create(parent: string, peeringId: string | null | undefined, requestBody: Peering): Observable<Operation> {
			return this.http.post<Operation>(this.baseUri + 'v1alpha1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/peerings&peeringId=' + (peeringId == null ? '' : encodeURIComponent(peeringId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists SQLIntegrations in a given domain.
		 * Get v1alpha1/{parent}/sqlIntegrations
		 * @param {string} parent Required. The resource name of the SqlIntegrations using the form: `projects/{project_id}/locations/global/domains/*`
		 * @param {string} filter Optional. Filter specifying constraints of a list operation. For example, `SqlIntegration.name="sql"`.
		 * @param {string} orderBy Optional. Specifies the ordering of results following syntax at https://cloud.google.com/apis/design/design_patterns#sorting_order.
		 * @param {number} pageSize Optional. The maximum number of items to return. If not specified, a default value of 1000 will be used by the service. Regardless of the page_size value, the response may include a partial list and a caller should only rely on response'ANIZATIONs next_page_token to determine if there are more instances left to be queried.
		 * @param {string} pageToken Optional. The next_page_token value returned from a previous List request, if any.
		 * @return {ListSQLIntegrationsResponse} Successful response
		 */
		Managedidentities_projects_locations_global_domains_sqlIntegrations_list(parent: string, filter: string | null | undefined, orderBy: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListSQLIntegrationsResponse> {
			return this.http.get<ListSQLIntegrationsResponse>(this.baseUri + 'v1alpha1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/sqlIntegrations&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&orderBy=' + (orderBy == null ? '' : encodeURIComponent(orderBy)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
		 * Get v1alpha1/{resource}:getIamPolicy
		 * @param {string} resource REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
		 * @param {number} options_requestedPolicyVersion Optional. The maximum policy version that will be used to format the policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset. The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies).
		 * @return {Policy} Successful response
		 */
		Managedidentities_projects_locations_global_peerings_getIamPolicy(resource: string, options_requestedPolicyVersion: number | null | undefined): Observable<Policy> {
			return this.http.get<Policy>(this.baseUri + 'v1alpha1/' + (resource == null ? '' : encodeURIComponent(resource)) + ':getIamPolicy&options_requestedPolicyVersion=' + options_requestedPolicyVersion, {});
		}

		/**
		 * Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
		 * Post v1alpha1/{resource}:setIamPolicy
		 * @param {string} resource REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
		 * @return {Policy} Successful response
		 */
		Managedidentities_projects_locations_global_peerings_setIamPolicy(resource: string, requestBody: SetIamPolicyRequest): Observable<Policy> {
			return this.http.post<Policy>(this.baseUri + 'v1alpha1/' + (resource == null ? '' : encodeURIComponent(resource)) + ':setIamPolicy', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
		 * Post v1alpha1/{resource}:testIamPermissions
		 * @param {string} resource REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
		 * @return {TestIamPermissionsResponse} Successful response
		 */
		Managedidentities_projects_locations_global_peerings_testIamPermissions(resource: string, requestBody: TestIamPermissionsRequest): Observable<TestIamPermissionsResponse> {
			return this.http.post<TestIamPermissionsResponse>(this.baseUri + 'v1alpha1/' + (resource == null ? '' : encodeURIComponent(resource)) + ':testIamPermissions', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

}

