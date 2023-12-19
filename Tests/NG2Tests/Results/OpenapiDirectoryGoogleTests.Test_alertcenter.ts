import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** Alerts for user account warning events. */
	export interface AccountWarning {

		/** Required. The email of the user that this event belongs to. */
		email?: string | null;

		/** The details of the login action. */
		loginDetails?: LoginDetails;
	}

	/** Alerts for user account warning events. */
	export interface AccountWarningFormProperties {

		/** Required. The email of the user that this event belongs to. */
		email: FormControl<string | null | undefined>,
	}
	export function CreateAccountWarningFormGroup() {
		return new FormGroup<AccountWarningFormProperties>({
			email: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The details of the login action. */
	export interface LoginDetails {

		/**
		 * Optional. The human-readable IP address (for example,
		 * `11.22.33.44`) that is associated with the warning event.
		 */
		ipAddress?: string | null;

		/**
		 * Optional. The successful login time that is associated with the warning
		 * event. This isn't present for blocked login attempts.
		 */
		loginTime?: string | null;
	}

	/** The details of the login action. */
	export interface LoginDetailsFormProperties {

		/**
		 * Optional. The human-readable IP address (for example,
		 * `11.22.33.44`) that is associated with the warning event.
		 */
		ipAddress: FormControl<string | null | undefined>,

		/**
		 * Optional. The successful login time that is associated with the warning
		 * event. This isn't present for blocked login attempts.
		 */
		loginTime: FormControl<string | null | undefined>,
	}
	export function CreateLoginDetailsFormGroup() {
		return new FormGroup<LoginDetailsFormProperties>({
			ipAddress: new FormControl<string | null | undefined>(undefined),
			loginTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Alerts from G Suite Security Center rules service configured by admin. */
	export interface ActivityRule {

		/** List of action names associated with the rule threshold. */
		actionNames?: Array<string>;

		/** Rule create timestamp. */
		createTime?: string | null;

		/** Description of the rule. */
		description?: string | null;

		/** Alert display name. */
		displayName?: string | null;

		/** Rule name. */
		name?: string | null;

		/** Query that is used to get the data from the associated source. */
		query?: string | null;

		/**
		 * List of alert IDs superseded by this alert. It is used to indicate that
		 * this alert is essentially extension of superseded alerts and we found the
		 * relationship after creating these alerts.
		 */
		supersededAlerts?: Array<string>;

		/**
		 * Alert ID superseding this alert. It is used to indicate that superseding
		 * alert is essentially extension of this alert and we found the relationship
		 * after creating both alerts.
		 */
		supersedingAlert?: string | null;

		/** Alert threshold is for example “COUNT > 5”. */
		threshold?: string | null;

		/**
		 * The trigger sources for this rule.
		 * * GMAIL_EVENTS
		 * * DEVICE_EVENTS
		 * * USER_EVENTS
		 */
		triggerSource?: string | null;

		/** The timestamp of the last update to the rule. */
		updateTime?: string | null;

		/** Rule window size. Possible values are 1 hour or 24 hours. */
		windowSize?: string | null;
	}

	/** Alerts from G Suite Security Center rules service configured by admin. */
	export interface ActivityRuleFormProperties {

		/** Rule create timestamp. */
		createTime: FormControl<string | null | undefined>,

		/** Description of the rule. */
		description: FormControl<string | null | undefined>,

		/** Alert display name. */
		displayName: FormControl<string | null | undefined>,

		/** Rule name. */
		name: FormControl<string | null | undefined>,

		/** Query that is used to get the data from the associated source. */
		query: FormControl<string | null | undefined>,

		/**
		 * Alert ID superseding this alert. It is used to indicate that superseding
		 * alert is essentially extension of this alert and we found the relationship
		 * after creating both alerts.
		 */
		supersedingAlert: FormControl<string | null | undefined>,

		/** Alert threshold is for example “COUNT > 5”. */
		threshold: FormControl<string | null | undefined>,

		/**
		 * The trigger sources for this rule.
		 * * GMAIL_EVENTS
		 * * DEVICE_EVENTS
		 * * USER_EVENTS
		 */
		triggerSource: FormControl<string | null | undefined>,

		/** The timestamp of the last update to the rule. */
		updateTime: FormControl<string | null | undefined>,

		/** Rule window size. Possible values are 1 hour or 24 hours. */
		windowSize: FormControl<string | null | undefined>,
	}
	export function CreateActivityRuleFormGroup() {
		return new FormGroup<ActivityRuleFormProperties>({
			createTime: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			displayName: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			query: new FormControl<string | null | undefined>(undefined),
			supersedingAlert: new FormControl<string | null | undefined>(undefined),
			threshold: new FormControl<string | null | undefined>(undefined),
			triggerSource: new FormControl<string | null | undefined>(undefined),
			updateTime: new FormControl<string | null | undefined>(undefined),
			windowSize: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An alert affecting a customer. */
	export interface Alert {

		/** Output only. The unique identifier for the alert. */
		alertId?: string | null;

		/** Output only. The time this alert was created. */
		createTime?: string | null;

		/** Output only. The unique identifier of the Google account of the customer. */
		customerId?: string | null;

		/**
		 * Optional. The data associated with this alert, for example
		 * google.apps.alertcenter.type.DeviceCompromised.
		 */
		data?: {[id: string]: any };

		/** Output only. `True` if this alert is marked for deletion. */
		deleted?: boolean | null;

		/**
		 * Optional. The time the event that caused this alert ceased being active.
		 * If provided, the end time must not be earlier than the start time.
		 * If not provided, it indicates an ongoing alert.
		 */
		endTime?: string | null;

		/**
		 * Optional. `etag` is used for optimistic concurrency control as a way to help
		 * prevent simultaneous updates of an alert from overwriting each other.
		 * It is strongly suggested that systems make use of the `etag` in the
		 * read-modify-write cycle to perform alert updates in order to avoid race
		 * conditions: An `etag` is returned in the response which contains alerts,
		 * and systems are expected to put that etag in the request to update alert to
		 * ensure that their change will be applied to the same version of the alert.
		 * If no `etag` is provided in the call to update alert, then the existing
		 * alert is overwritten blindly.
		 */
		etag?: string | null;

		/** An alert metadata. */
		metadata?: AlertMetadata;

		/**
		 * Output only. An optional
		 * [Security Investigation Tool](https://support.google.com/a/answer/7575955)
		 * query for this alert.
		 */
		securityInvestigationToolLink?: string | null;

		/**
		 * Required. A unique identifier for the system that reported the alert.
		 * This is output only after alert is created.
		 * Supported sources are any of the following:
		 * * Google Operations
		 * * Mobile device management
		 * * Gmail phishing
		 * * Domain wide takeout
		 * * State sponsored attack
		 * * Google identity
		 */
		source?: string | null;

		/**
		 * Required. The time the event that caused this alert was started or
		 * detected.
		 */
		startTime?: string | null;

		/**
		 * Required. The type of the alert.
		 * This is output only after alert is created.
		 * For a list of available alert types see
		 * [G Suite Alert types](/admin-sdk/alertcenter/reference/alert-types).
		 */
		type?: string | null;

		/** Output only. The time this alert was last updated. */
		updateTime?: string | null;
	}

	/** An alert affecting a customer. */
	export interface AlertFormProperties {

		/** Output only. The unique identifier for the alert. */
		alertId: FormControl<string | null | undefined>,

		/** Output only. The time this alert was created. */
		createTime: FormControl<string | null | undefined>,

		/** Output only. The unique identifier of the Google account of the customer. */
		customerId: FormControl<string | null | undefined>,

		/**
		 * Optional. The data associated with this alert, for example
		 * google.apps.alertcenter.type.DeviceCompromised.
		 */
		data: FormControl<{[id: string]: any } | null | undefined>,

		/** Output only. `True` if this alert is marked for deletion. */
		deleted: FormControl<boolean | null | undefined>,

		/**
		 * Optional. The time the event that caused this alert ceased being active.
		 * If provided, the end time must not be earlier than the start time.
		 * If not provided, it indicates an ongoing alert.
		 */
		endTime: FormControl<string | null | undefined>,

		/**
		 * Optional. `etag` is used for optimistic concurrency control as a way to help
		 * prevent simultaneous updates of an alert from overwriting each other.
		 * It is strongly suggested that systems make use of the `etag` in the
		 * read-modify-write cycle to perform alert updates in order to avoid race
		 * conditions: An `etag` is returned in the response which contains alerts,
		 * and systems are expected to put that etag in the request to update alert to
		 * ensure that their change will be applied to the same version of the alert.
		 * If no `etag` is provided in the call to update alert, then the existing
		 * alert is overwritten blindly.
		 */
		etag: FormControl<string | null | undefined>,

		/**
		 * Output only. An optional
		 * [Security Investigation Tool](https://support.google.com/a/answer/7575955)
		 * query for this alert.
		 */
		securityInvestigationToolLink: FormControl<string | null | undefined>,

		/**
		 * Required. A unique identifier for the system that reported the alert.
		 * This is output only after alert is created.
		 * Supported sources are any of the following:
		 * * Google Operations
		 * * Mobile device management
		 * * Gmail phishing
		 * * Domain wide takeout
		 * * State sponsored attack
		 * * Google identity
		 */
		source: FormControl<string | null | undefined>,

		/**
		 * Required. The time the event that caused this alert was started or
		 * detected.
		 */
		startTime: FormControl<string | null | undefined>,

		/**
		 * Required. The type of the alert.
		 * This is output only after alert is created.
		 * For a list of available alert types see
		 * [G Suite Alert types](/admin-sdk/alertcenter/reference/alert-types).
		 */
		type: FormControl<string | null | undefined>,

		/** Output only. The time this alert was last updated. */
		updateTime: FormControl<string | null | undefined>,
	}
	export function CreateAlertFormGroup() {
		return new FormGroup<AlertFormProperties>({
			alertId: new FormControl<string | null | undefined>(undefined),
			createTime: new FormControl<string | null | undefined>(undefined),
			customerId: new FormControl<string | null | undefined>(undefined),
			data: new FormControl<{[id: string]: any } | null | undefined>(undefined),
			deleted: new FormControl<boolean | null | undefined>(undefined),
			endTime: new FormControl<string | null | undefined>(undefined),
			etag: new FormControl<string | null | undefined>(undefined),
			securityInvestigationToolLink: new FormControl<string | null | undefined>(undefined),
			source: new FormControl<string | null | undefined>(undefined),
			startTime: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
			updateTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An alert metadata. */
	export interface AlertMetadata {

		/** Output only. The alert identifier. */
		alertId?: string | null;

		/** The email address of the user assigned to the alert. */
		assignee?: string | null;

		/** Output only. The unique identifier of the Google account of the customer. */
		customerId?: string | null;

		/**
		 * Optional. `etag` is used for optimistic concurrency control as a way to
		 * help prevent simultaneous updates of an alert metadata from overwriting
		 * each other. It is strongly suggested that systems make use of the `etag` in
		 * the read-modify-write cycle to perform metatdata updates in order to avoid
		 * race conditions: An `etag` is returned in the response which contains alert
		 * metadata, and systems are expected to put that etag in the request to
		 * update alert metadata to ensure that their change will be applied to the
		 * same version of the alert metadata.
		 * If no `etag` is provided in the call to update alert metadata, then the
		 * existing alert metadata is overwritten blindly.
		 */
		etag?: string | null;

		/**
		 * The severity value of the alert. Alert Center will set this field at alert
		 * creation time, default's to an empty string when it could not be
		 * determined.
		 * The supported values for update actions on this field are the following:
		 * * HIGH
		 * * MEDIUM
		 * * LOW
		 */
		severity?: string | null;

		/**
		 * The current status of the alert.
		 * The supported values are the following:
		 * * NOT_STARTED
		 * * IN_PROGRESS
		 * * CLOSED
		 */
		status?: string | null;

		/** Output only. The time this metadata was last updated. */
		updateTime?: string | null;
	}

	/** An alert metadata. */
	export interface AlertMetadataFormProperties {

		/** Output only. The alert identifier. */
		alertId: FormControl<string | null | undefined>,

		/** The email address of the user assigned to the alert. */
		assignee: FormControl<string | null | undefined>,

		/** Output only. The unique identifier of the Google account of the customer. */
		customerId: FormControl<string | null | undefined>,

		/**
		 * Optional. `etag` is used for optimistic concurrency control as a way to
		 * help prevent simultaneous updates of an alert metadata from overwriting
		 * each other. It is strongly suggested that systems make use of the `etag` in
		 * the read-modify-write cycle to perform metatdata updates in order to avoid
		 * race conditions: An `etag` is returned in the response which contains alert
		 * metadata, and systems are expected to put that etag in the request to
		 * update alert metadata to ensure that their change will be applied to the
		 * same version of the alert metadata.
		 * If no `etag` is provided in the call to update alert metadata, then the
		 * existing alert metadata is overwritten blindly.
		 */
		etag: FormControl<string | null | undefined>,

		/**
		 * The severity value of the alert. Alert Center will set this field at alert
		 * creation time, default's to an empty string when it could not be
		 * determined.
		 * The supported values for update actions on this field are the following:
		 * * HIGH
		 * * MEDIUM
		 * * LOW
		 */
		severity: FormControl<string | null | undefined>,

		/**
		 * The current status of the alert.
		 * The supported values are the following:
		 * * NOT_STARTED
		 * * IN_PROGRESS
		 * * CLOSED
		 */
		status: FormControl<string | null | undefined>,

		/** Output only. The time this metadata was last updated. */
		updateTime: FormControl<string | null | undefined>,
	}
	export function CreateAlertMetadataFormGroup() {
		return new FormGroup<AlertMetadataFormProperties>({
			alertId: new FormControl<string | null | undefined>(undefined),
			assignee: new FormControl<string | null | undefined>(undefined),
			customerId: new FormControl<string | null | undefined>(undefined),
			etag: new FormControl<string | null | undefined>(undefined),
			severity: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<string | null | undefined>(undefined),
			updateTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A customer feedback about an alert. */
	export interface AlertFeedback {

		/** Output only. The alert identifier. */
		alertId?: string | null;

		/** Output only. The time this feedback was created. */
		createTime?: string | null;

		/** Output only. The unique identifier of the Google account of the customer. */
		customerId?: string | null;

		/** Output only. The email of the user that provided the feedback. */
		email?: string | null;

		/** Output only. The unique identifier for the feedback. */
		feedbackId?: string | null;

		/** Required. The type of the feedback. */
		type?: AlertFeedbackType | null;
	}

	/** A customer feedback about an alert. */
	export interface AlertFeedbackFormProperties {

		/** Output only. The alert identifier. */
		alertId: FormControl<string | null | undefined>,

		/** Output only. The time this feedback was created. */
		createTime: FormControl<string | null | undefined>,

		/** Output only. The unique identifier of the Google account of the customer. */
		customerId: FormControl<string | null | undefined>,

		/** Output only. The email of the user that provided the feedback. */
		email: FormControl<string | null | undefined>,

		/** Output only. The unique identifier for the feedback. */
		feedbackId: FormControl<string | null | undefined>,

		/** Required. The type of the feedback. */
		type: FormControl<AlertFeedbackType | null | undefined>,
	}
	export function CreateAlertFeedbackFormGroup() {
		return new FormGroup<AlertFeedbackFormProperties>({
			alertId: new FormControl<string | null | undefined>(undefined),
			createTime: new FormControl<string | null | undefined>(undefined),
			customerId: new FormControl<string | null | undefined>(undefined),
			email: new FormControl<string | null | undefined>(undefined),
			feedbackId: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<AlertFeedbackType | null | undefined>(undefined),
		});

	}

	export enum AlertFeedbackType { ALERT_FEEDBACK_TYPE_UNSPECIFIED = 0, NOT_USEFUL = 1, SOMEWHAT_USEFUL = 2, VERY_USEFUL = 3 }


	/** Alerts from App Maker to notify admins to set up default SQL instance. */
	export interface AppMakerSqlSetupNotification {

		/** List of applications with requests for default SQL set up. */
		requestInfo?: Array<RequestInfo>;
	}

	/** Alerts from App Maker to notify admins to set up default SQL instance. */
	export interface AppMakerSqlSetupNotificationFormProperties {
	}
	export function CreateAppMakerSqlSetupNotificationFormGroup() {
		return new FormGroup<AppMakerSqlSetupNotificationFormProperties>({
		});

	}


	/** Requests for one application that needs default SQL setup. */
	export interface RequestInfo {

		/**
		 * List of app developers who triggered notifications for above
		 * application.
		 */
		appDeveloperEmail?: Array<string>;

		/** Required. The application that requires the SQL setup. */
		appKey?: string | null;

		/**
		 * Required. Number of requests sent for this application to set up default
		 * SQL instance.
		 */
		numberOfRequests?: string | null;
	}

	/** Requests for one application that needs default SQL setup. */
	export interface RequestInfoFormProperties {

		/** Required. The application that requires the SQL setup. */
		appKey: FormControl<string | null | undefined>,

		/**
		 * Required. Number of requests sent for this application to set up default
		 * SQL instance.
		 */
		numberOfRequests: FormControl<string | null | undefined>,
	}
	export function CreateRequestInfoFormGroup() {
		return new FormGroup<RequestInfoFormProperties>({
			appKey: new FormControl<string | null | undefined>(undefined),
			numberOfRequests: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Attachment with application-specific information about an alert. */
	export interface Attachment {

		/**
		 * A representation of a CSV file attachment, as a list of column headers and
		 * a list of data rows.
		 */
		csv?: Csv;
	}

	/** Attachment with application-specific information about an alert. */
	export interface AttachmentFormProperties {
	}
	export function CreateAttachmentFormGroup() {
		return new FormGroup<AttachmentFormProperties>({
		});

	}


	/**
	 * A representation of a CSV file attachment, as a list of column headers and
	 * a list of data rows.
	 */
	export interface Csv {

		/**
		 * The list of data rows in a CSV file, as string arrays rather than as a
		 * single comma-separated string.
		 */
		dataRows?: Array<CsvRow>;

		/** The list of headers for data columns in a CSV file. */
		headers?: Array<string>;
	}

	/**
	 * A representation of a CSV file attachment, as a list of column headers and
	 * a list of data rows.
	 */
	export interface CsvFormProperties {
	}
	export function CreateCsvFormGroup() {
		return new FormGroup<CsvFormProperties>({
		});

	}


	/** A representation of a single data row in a CSV file. */
	export interface CsvRow {

		/**
		 * The data entries in a CSV file row, as a string array rather than a
		 * single comma-separated string.
		 */
		entries?: Array<string>;
	}

	/** A representation of a single data row in a CSV file. */
	export interface CsvRowFormProperties {
	}
	export function CreateCsvRowFormGroup() {
		return new FormGroup<CsvRowFormProperties>({
		});

	}


	/**
	 * Alert for setting the domain or IP that malicious email comes from as
	 * whitelisted domain or IP in Gmail advanced settings.
	 */
	export interface BadWhitelist {

		/** Domain ID of Gmail phishing alerts. */
		domainId?: DomainId;

		/** Entity whose actions triggered a Gmail phishing alert. */
		maliciousEntity?: MaliciousEntity;

		/** The list of messages contained by this alert. */
		messages?: Array<GmailMessageInfo>;

		/**
		 * The source IP address of the malicious email, for example,
		 * `127.0.0.1`.
		 */
		sourceIp?: string | null;
	}

	/**
	 * Alert for setting the domain or IP that malicious email comes from as
	 * whitelisted domain or IP in Gmail advanced settings.
	 */
	export interface BadWhitelistFormProperties {

		/**
		 * The source IP address of the malicious email, for example,
		 * `127.0.0.1`.
		 */
		sourceIp: FormControl<string | null | undefined>,
	}
	export function CreateBadWhitelistFormGroup() {
		return new FormGroup<BadWhitelistFormProperties>({
			sourceIp: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Domain ID of Gmail phishing alerts. */
	export interface DomainId {

		/** The primary domain for the customer. */
		customerPrimaryDomain?: string | null;
	}

	/** Domain ID of Gmail phishing alerts. */
	export interface DomainIdFormProperties {

		/** The primary domain for the customer. */
		customerPrimaryDomain: FormControl<string | null | undefined>,
	}
	export function CreateDomainIdFormGroup() {
		return new FormGroup<DomainIdFormProperties>({
			customerPrimaryDomain: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Entity whose actions triggered a Gmail phishing alert. */
	export interface MaliciousEntity {

		/** The header from display name. */
		displayName?: string | null;

		/** A user. */
		entity?: User;

		/** The sender email address. */
		fromHeader?: string | null;
	}

	/** Entity whose actions triggered a Gmail phishing alert. */
	export interface MaliciousEntityFormProperties {

		/** The header from display name. */
		displayName: FormControl<string | null | undefined>,

		/** The sender email address. */
		fromHeader: FormControl<string | null | undefined>,
	}
	export function CreateMaliciousEntityFormGroup() {
		return new FormGroup<MaliciousEntityFormProperties>({
			displayName: new FormControl<string | null | undefined>(undefined),
			fromHeader: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A user. */
	export interface User {

		/** Display name of the user. */
		displayName?: string | null;

		/** Email address of the user. */
		emailAddress?: string | null;
	}

	/** A user. */
	export interface UserFormProperties {

		/** Display name of the user. */
		displayName: FormControl<string | null | undefined>,

		/** Email address of the user. */
		emailAddress: FormControl<string | null | undefined>,
	}
	export function CreateUserFormGroup() {
		return new FormGroup<UserFormProperties>({
			displayName: new FormControl<string | null | undefined>(undefined),
			emailAddress: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Details of a message in phishing spike alert. */
	export interface GmailMessageInfo {

		/** The `SHA256` hash of email's attachment and all MIME parts. */
		attachmentsSha256Hash?: Array<string>;

		/** The date the malicious email was sent. */
		date?: string | null;

		/** The hash of the message body text. */
		md5HashMessageBody?: string | null;

		/** The MD5 Hash of email's subject (only available for reported emails). */
		md5HashSubject?: string | null;

		/** The snippet of the message body text (only available for reported emails). */
		messageBodySnippet?: string | null;

		/** The message ID. */
		messageId?: string | null;

		/** The recipient of this email. */
		recipient?: string | null;

		/** The email subject text (only available for reported emails). */
		subjectText?: string | null;
	}

	/** Details of a message in phishing spike alert. */
	export interface GmailMessageInfoFormProperties {

		/** The date the malicious email was sent. */
		date: FormControl<string | null | undefined>,

		/** The hash of the message body text. */
		md5HashMessageBody: FormControl<string | null | undefined>,

		/** The MD5 Hash of email's subject (only available for reported emails). */
		md5HashSubject: FormControl<string | null | undefined>,

		/** The snippet of the message body text (only available for reported emails). */
		messageBodySnippet: FormControl<string | null | undefined>,

		/** The message ID. */
		messageId: FormControl<string | null | undefined>,

		/** The recipient of this email. */
		recipient: FormControl<string | null | undefined>,

		/** The email subject text (only available for reported emails). */
		subjectText: FormControl<string | null | undefined>,
	}
	export function CreateGmailMessageInfoFormGroup() {
		return new FormGroup<GmailMessageInfoFormProperties>({
			date: new FormControl<string | null | undefined>(undefined),
			md5HashMessageBody: new FormControl<string | null | undefined>(undefined),
			md5HashSubject: new FormControl<string | null | undefined>(undefined),
			messageBodySnippet: new FormControl<string | null | undefined>(undefined),
			messageId: new FormControl<string | null | undefined>(undefined),
			recipient: new FormControl<string | null | undefined>(undefined),
			subjectText: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A request to perform batch delete on alerts. */
	export interface BatchDeleteAlertsRequest {

		/** Required. list of alert IDs. */
		alertId?: Array<string>;

		/**
		 * Optional. The unique identifier of the G Suite organization account of the
		 * customer the alerts are associated with.
		 */
		customerId?: string | null;
	}

	/** A request to perform batch delete on alerts. */
	export interface BatchDeleteAlertsRequestFormProperties {

		/**
		 * Optional. The unique identifier of the G Suite organization account of the
		 * customer the alerts are associated with.
		 */
		customerId: FormControl<string | null | undefined>,
	}
	export function CreateBatchDeleteAlertsRequestFormGroup() {
		return new FormGroup<BatchDeleteAlertsRequestFormProperties>({
			customerId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response to batch delete operation on alerts. */
	export interface BatchDeleteAlertsResponse {

		/** The status details for each failed alert_id. */
		failedAlertStatus?: {[id: string]: Status };

		/** The successful list of alert IDs. */
		successAlertIds?: Array<string>;
	}

	/** Response to batch delete operation on alerts. */
	export interface BatchDeleteAlertsResponseFormProperties {

		/** The status details for each failed alert_id. */
		failedAlertStatus: FormControl<{[id: string]: Status } | null | undefined>,
	}
	export function CreateBatchDeleteAlertsResponseFormGroup() {
		return new FormGroup<BatchDeleteAlertsResponseFormProperties>({
			failedAlertStatus: new FormControl<{[id: string]: Status } | null | undefined>(undefined),
		});

	}


	/**
	 * The `Status` type defines a logical error model that is suitable for
	 * different programming environments, including REST APIs and RPC APIs. It is
	 * used by [gRPC](https://github.com/grpc). Each `Status` message contains
	 * three pieces of data: error code, error message, and error details.
	 * You can find out more about this error model and how to work with it in the
	 * [API Design Guide](https://cloud.google.com/apis/design/errors).
	 */
	export interface Status {

		/** The status code, which should be an enum value of google.rpc.Code. */
		code?: number | null;

		/**
		 * A list of messages that carry the error details.  There is a common set of
		 * message types for APIs to use.
		 */
		details?: Array<string>;

		/**
		 * A developer-facing error message, which should be in English. Any
		 * user-facing error message should be localized and sent in the
		 * google.rpc.Status.details field, or localized by the client.
		 */
		message?: string | null;
	}

	/**
	 * The `Status` type defines a logical error model that is suitable for
	 * different programming environments, including REST APIs and RPC APIs. It is
	 * used by [gRPC](https://github.com/grpc). Each `Status` message contains
	 * three pieces of data: error code, error message, and error details.
	 * You can find out more about this error model and how to work with it in the
	 * [API Design Guide](https://cloud.google.com/apis/design/errors).
	 */
	export interface StatusFormProperties {

		/** The status code, which should be an enum value of google.rpc.Code. */
		code: FormControl<number | null | undefined>,

		/**
		 * A developer-facing error message, which should be in English. Any
		 * user-facing error message should be localized and sent in the
		 * google.rpc.Status.details field, or localized by the client.
		 */
		message: FormControl<string | null | undefined>,
	}
	export function CreateStatusFormGroup() {
		return new FormGroup<StatusFormProperties>({
			code: new FormControl<number | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A request to perform batch undelete on alerts. */
	export interface BatchUndeleteAlertsRequest {

		/** Required. list of alert IDs. */
		alertId?: Array<string>;

		/**
		 * Optional. The unique identifier of the G Suite organization account of the
		 * customer the alerts are associated with.
		 */
		customerId?: string | null;
	}

	/** A request to perform batch undelete on alerts. */
	export interface BatchUndeleteAlertsRequestFormProperties {

		/**
		 * Optional. The unique identifier of the G Suite organization account of the
		 * customer the alerts are associated with.
		 */
		customerId: FormControl<string | null | undefined>,
	}
	export function CreateBatchUndeleteAlertsRequestFormGroup() {
		return new FormGroup<BatchUndeleteAlertsRequestFormProperties>({
			customerId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response to batch undelete operation on alerts. */
	export interface BatchUndeleteAlertsResponse {

		/** The status details for each failed alert_id. */
		failedAlertStatus?: {[id: string]: Status };

		/** The successful list of alert IDs. */
		successAlertIds?: Array<string>;
	}

	/** Response to batch undelete operation on alerts. */
	export interface BatchUndeleteAlertsResponseFormProperties {

		/** The status details for each failed alert_id. */
		failedAlertStatus: FormControl<{[id: string]: Status } | null | undefined>,
	}
	export function CreateBatchUndeleteAlertsResponseFormGroup() {
		return new FormGroup<BatchUndeleteAlertsResponseFormProperties>({
			failedAlertStatus: new FormControl<{[id: string]: Status } | null | undefined>(undefined),
		});

	}


	/**
	 * A reference to a Cloud Pubsub topic.
	 * To register for notifications, the owner of the topic must grant
	 * `alerts-api-push-notifications@system.gserviceaccount.com` the
	 *  `projects.topics.publish` permission.
	 */
	export interface CloudPubsubTopic {

		/**
		 * Optional. The format of the payload that would be sent.
		 * If not specified the format will be JSON.
		 */
		payloadFormat?: CloudPubsubTopicPayloadFormat | null;

		/**
		 * The `name` field of a Cloud Pubsub [Topic]
		 * (https://cloud.google.com/pubsub/docs/reference/rest/v1/projects.topics#Topic).
		 */
		topicName?: string | null;
	}

	/**
	 * A reference to a Cloud Pubsub topic.
	 * To register for notifications, the owner of the topic must grant
	 * `alerts-api-push-notifications@system.gserviceaccount.com` the
	 *  `projects.topics.publish` permission.
	 */
	export interface CloudPubsubTopicFormProperties {

		/**
		 * Optional. The format of the payload that would be sent.
		 * If not specified the format will be JSON.
		 */
		payloadFormat: FormControl<CloudPubsubTopicPayloadFormat | null | undefined>,

		/**
		 * The `name` field of a Cloud Pubsub [Topic]
		 * (https://cloud.google.com/pubsub/docs/reference/rest/v1/projects.topics#Topic).
		 */
		topicName: FormControl<string | null | undefined>,
	}
	export function CreateCloudPubsubTopicFormGroup() {
		return new FormGroup<CloudPubsubTopicFormProperties>({
			payloadFormat: new FormControl<CloudPubsubTopicPayloadFormat | null | undefined>(undefined),
			topicName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum CloudPubsubTopicPayloadFormat { PAYLOAD_FORMAT_UNSPECIFIED = 0, JSON = 1 }


	/** A mobile device compromised alert. Derived from audit logs. */
	export interface DeviceCompromised {

		/** The email of the user this alert was created for. */
		email?: string | null;

		/** Required. The list of security events. */
		events?: Array<DeviceCompromisedSecurityDetail>;
	}

	/** A mobile device compromised alert. Derived from audit logs. */
	export interface DeviceCompromisedFormProperties {

		/** The email of the user this alert was created for. */
		email: FormControl<string | null | undefined>,
	}
	export function CreateDeviceCompromisedFormGroup() {
		return new FormGroup<DeviceCompromisedFormProperties>({
			email: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Detailed information of a single MDM device compromised event. */
	export interface DeviceCompromisedSecurityDetail {

		/**
		 * The device compromised state. Possible values are "`Compromised`" or
		 * "`Not Compromised`".
		 */
		deviceCompromisedState?: string | null;

		/** Required. The device ID. */
		deviceId?: string | null;

		/** The model of the device. */
		deviceModel?: string | null;

		/** The type of the device. */
		deviceType?: string | null;

		/** Required for iOS, empty for others. */
		iosVendorId?: string | null;

		/** The device resource ID. */
		resourceId?: string | null;

		/** The serial number of the device. */
		serialNumber?: string | null;
	}

	/** Detailed information of a single MDM device compromised event. */
	export interface DeviceCompromisedSecurityDetailFormProperties {

		/**
		 * The device compromised state. Possible values are "`Compromised`" or
		 * "`Not Compromised`".
		 */
		deviceCompromisedState: FormControl<string | null | undefined>,

		/** Required. The device ID. */
		deviceId: FormControl<string | null | undefined>,

		/** The model of the device. */
		deviceModel: FormControl<string | null | undefined>,

		/** The type of the device. */
		deviceType: FormControl<string | null | undefined>,

		/** Required for iOS, empty for others. */
		iosVendorId: FormControl<string | null | undefined>,

		/** The device resource ID. */
		resourceId: FormControl<string | null | undefined>,

		/** The serial number of the device. */
		serialNumber: FormControl<string | null | undefined>,
	}
	export function CreateDeviceCompromisedSecurityDetailFormGroup() {
		return new FormGroup<DeviceCompromisedSecurityDetailFormProperties>({
			deviceCompromisedState: new FormControl<string | null | undefined>(undefined),
			deviceId: new FormControl<string | null | undefined>(undefined),
			deviceModel: new FormControl<string | null | undefined>(undefined),
			deviceType: new FormControl<string | null | undefined>(undefined),
			iosVendorId: new FormControl<string | null | undefined>(undefined),
			resourceId: new FormControl<string | null | undefined>(undefined),
			serialNumber: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Alerts that get triggered on violations of Data Loss Prevention (DLP) rules. */
	export interface DlpRuleViolation {

		/**
		 * Common alert information about violated rules that are configured by G Suite
		 * administrators.
		 */
		ruleViolationInfo?: RuleViolationInfo;
	}

	/** Alerts that get triggered on violations of Data Loss Prevention (DLP) rules. */
	export interface DlpRuleViolationFormProperties {
	}
	export function CreateDlpRuleViolationFormGroup() {
		return new FormGroup<DlpRuleViolationFormProperties>({
		});

	}


	/**
	 * Common alert information about violated rules that are configured by G Suite
	 * administrators.
	 */
	export interface RuleViolationInfo {

		/** Source of the data. */
		dataSource?: RuleViolationInfoDataSource | null;

		/** List of matches that were found in the resource content. */
		matchInfo?: Array<MatchInfo>;

		/**
		 * Resource recipients.
		 * For Drive, they are grantees that the Drive file was shared with at the
		 * time of rule triggering. Valid values include user emails, group emails,
		 * domains, or 'anyone' if the file was publicly accessible. If the file was
		 * private the recipients list will be empty.
		 * For Gmail, they are emails of the users or groups that the Gmail message
		 * was sent to.
		 */
		recipients?: Array<string>;

		/** Proto that contains resource information. */
		resourceInfo?: ResourceInfo;

		/** Proto that contains rule information. */
		ruleInfo?: RuleInfo;

		/** Actions suppressed due to other actions with higher priority. */
		suppressedActionTypes?: Array<string>;

		/** Trigger of the rule. */
		trigger?: RuleViolationInfoTrigger | null;

		/** Actions applied as a consequence of the rule being triggered. */
		triggeredActionTypes?: Array<string>;

		/**
		 * Email of the user who caused the violation. Value could be empty if not
		 * applicable, for example, a violation found by drive continuous scan.
		 */
		triggeringUserEmail?: string | null;
	}

	/**
	 * Common alert information about violated rules that are configured by G Suite
	 * administrators.
	 */
	export interface RuleViolationInfoFormProperties {

		/** Source of the data. */
		dataSource: FormControl<RuleViolationInfoDataSource | null | undefined>,

		/** Trigger of the rule. */
		trigger: FormControl<RuleViolationInfoTrigger | null | undefined>,

		/**
		 * Email of the user who caused the violation. Value could be empty if not
		 * applicable, for example, a violation found by drive continuous scan.
		 */
		triggeringUserEmail: FormControl<string | null | undefined>,
	}
	export function CreateRuleViolationInfoFormGroup() {
		return new FormGroup<RuleViolationInfoFormProperties>({
			dataSource: new FormControl<RuleViolationInfoDataSource | null | undefined>(undefined),
			trigger: new FormControl<RuleViolationInfoTrigger | null | undefined>(undefined),
			triggeringUserEmail: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum RuleViolationInfoDataSource { DATA_SOURCE_UNSPECIFIED = 0, DRIVE = 1 }


	/** Proto that contains match information from the condition part of the rule. */
	export interface MatchInfo {

		/** Detector provided by Google. */
		predefinedDetector?: PredefinedDetectorInfo;

		/** Detector defined by administrators. */
		userDefinedDetector?: UserDefinedDetectorInfo;
	}

	/** Proto that contains match information from the condition part of the rule. */
	export interface MatchInfoFormProperties {
	}
	export function CreateMatchInfoFormGroup() {
		return new FormGroup<MatchInfoFormProperties>({
		});

	}


	/** Detector provided by Google. */
	export interface PredefinedDetectorInfo {

		/** Name that uniquely identifies the detector. */
		detectorName?: string | null;
	}

	/** Detector provided by Google. */
	export interface PredefinedDetectorInfoFormProperties {

		/** Name that uniquely identifies the detector. */
		detectorName: FormControl<string | null | undefined>,
	}
	export function CreatePredefinedDetectorInfoFormGroup() {
		return new FormGroup<PredefinedDetectorInfoFormProperties>({
			detectorName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Detector defined by administrators. */
	export interface UserDefinedDetectorInfo {

		/** Display name of the detector. */
		displayName?: string | null;

		/** Resource name that uniquely identifies the detector. */
		resourceName?: string | null;
	}

	/** Detector defined by administrators. */
	export interface UserDefinedDetectorInfoFormProperties {

		/** Display name of the detector. */
		displayName: FormControl<string | null | undefined>,

		/** Resource name that uniquely identifies the detector. */
		resourceName: FormControl<string | null | undefined>,
	}
	export function CreateUserDefinedDetectorInfoFormGroup() {
		return new FormGroup<UserDefinedDetectorInfoFormProperties>({
			displayName: new FormControl<string | null | undefined>(undefined),
			resourceName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Proto that contains resource information. */
	export interface ResourceInfo {

		/** Drive file ID. */
		documentId?: string | null;

		/** Title of the resource, for example email subject, or document title. */
		resourceTitle?: string | null;
	}

	/** Proto that contains resource information. */
	export interface ResourceInfoFormProperties {

		/** Drive file ID. */
		documentId: FormControl<string | null | undefined>,

		/** Title of the resource, for example email subject, or document title. */
		resourceTitle: FormControl<string | null | undefined>,
	}
	export function CreateResourceInfoFormGroup() {
		return new FormGroup<ResourceInfoFormProperties>({
			documentId: new FormControl<string | null | undefined>(undefined),
			resourceTitle: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Proto that contains rule information. */
	export interface RuleInfo {

		/** User provided name of the rule. */
		displayName?: string | null;

		/** Resource name that uniquely identifies the rule. */
		resourceName?: string | null;
	}

	/** Proto that contains rule information. */
	export interface RuleInfoFormProperties {

		/** User provided name of the rule. */
		displayName: FormControl<string | null | undefined>,

		/** Resource name that uniquely identifies the rule. */
		resourceName: FormControl<string | null | undefined>,
	}
	export function CreateRuleInfoFormGroup() {
		return new FormGroup<RuleInfoFormProperties>({
			displayName: new FormControl<string | null | undefined>(undefined),
			resourceName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum RuleViolationInfoTrigger { TRIGGER_UNSPECIFIED = 0, DRIVE_SHARE = 1 }


	/**
	 * A takeout operation for the entire domain was initiated by an admin. Derived
	 * from audit logs.
	 */
	export interface DomainWideTakeoutInitiated {

		/** The email of the admin who initiated the takeout. */
		email?: string | null;

		/** The takeout request ID. */
		takeoutRequestId?: string | null;
	}

	/**
	 * A takeout operation for the entire domain was initiated by an admin. Derived
	 * from audit logs.
	 */
	export interface DomainWideTakeoutInitiatedFormProperties {

		/** The email of the admin who initiated the takeout. */
		email: FormControl<string | null | undefined>,

		/** The takeout request ID. */
		takeoutRequestId: FormControl<string | null | undefined>,
	}
	export function CreateDomainWideTakeoutInitiatedFormGroup() {
		return new FormGroup<DomainWideTakeoutInitiatedFormProperties>({
			email: new FormControl<string | null | undefined>(undefined),
			takeoutRequestId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**
	 * A generic empty message that you can re-use to avoid defining duplicated
	 * empty messages in your APIs. A typical example is to use it as the request
	 * or the response type of an API method. For instance:
	 *     service Foo {
	 *       rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty);
	 *     }
	 * The JSON representation for `Empty` is empty JSON object `{}`.
	 */
	export interface Empty {
	}

	/**
	 * A generic empty message that you can re-use to avoid defining duplicated
	 * empty messages in your APIs. A typical example is to use it as the request
	 * or the response type of an API method. For instance:
	 *     service Foo {
	 *       rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty);
	 *     }
	 * The JSON representation for `Empty` is empty JSON object `{}`.
	 */
	export interface EmptyFormProperties {
	}
	export function CreateEmptyFormGroup() {
		return new FormGroup<EmptyFormProperties>({
		});

	}


	/** An incident reported by Google Operations for a G Suite application. */
	export interface GoogleOperations {

		/**
		 * The list of emails which correspond to the users directly affected by the
		 * incident.
		 */
		affectedUserEmails?: Array<string>;

		/** Attachment with application-specific information about an alert. */
		attachmentData?: Attachment;

		/** A detailed, freeform incident description. */
		description?: string | null;

		/** A one-line incident description. */
		title?: string | null;
	}

	/** An incident reported by Google Operations for a G Suite application. */
	export interface GoogleOperationsFormProperties {

		/** A detailed, freeform incident description. */
		description: FormControl<string | null | undefined>,

		/** A one-line incident description. */
		title: FormControl<string | null | undefined>,
	}
	export function CreateGoogleOperationsFormGroup() {
		return new FormGroup<GoogleOperationsFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response message for an alert feedback listing request. */
	export interface ListAlertFeedbackResponse {

		/**
		 * The list of alert feedback.
		 * Feedback entries for each alert are ordered by creation time descending.
		 */
		feedback?: Array<AlertFeedback>;
	}

	/** Response message for an alert feedback listing request. */
	export interface ListAlertFeedbackResponseFormProperties {
	}
	export function CreateListAlertFeedbackResponseFormGroup() {
		return new FormGroup<ListAlertFeedbackResponseFormProperties>({
		});

	}


	/** Response message for an alert listing request. */
	export interface ListAlertsResponse {

		/** The list of alerts. */
		alerts?: Array<Alert>;

		/**
		 * The token for the next page. If not empty, indicates that there may be more
		 * alerts that match the listing request; this value can be used in a
		 * subsequent ListAlertsRequest to get alerts continuing from last result
		 * of the current list call.
		 */
		nextPageToken?: string | null;
	}

	/** Response message for an alert listing request. */
	export interface ListAlertsResponseFormProperties {

		/**
		 * The token for the next page. If not empty, indicates that there may be more
		 * alerts that match the listing request; this value can be used in a
		 * subsequent ListAlertsRequest to get alerts continuing from last result
		 * of the current list call.
		 */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListAlertsResponseFormGroup() {
		return new FormGroup<ListAlertsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**
	 * Proto for all phishing alerts with common payload.
	 * Supported types are any of the following:
	 * * User reported phishing
	 * * User reported spam spike
	 * * Suspicious message reported
	 * * Phishing reclassification
	 * * Malware reclassification
	 * * Gmail potential employee spoofing
	 */
	export interface MailPhishing {

		/** Domain ID of Gmail phishing alerts. */
		domainId?: DomainId;

		/** If `true`, the email originated from within the organization. */
		isInternal?: boolean | null;

		/** Entity whose actions triggered a Gmail phishing alert. */
		maliciousEntity?: MaliciousEntity;

		/** The list of messages contained by this alert. */
		messages?: Array<GmailMessageInfo>;

		/** System actions on the messages. */
		systemActionType?: MailPhishingSystemActionType | null;
	}

	/**
	 * Proto for all phishing alerts with common payload.
	 * Supported types are any of the following:
	 * * User reported phishing
	 * * User reported spam spike
	 * * Suspicious message reported
	 * * Phishing reclassification
	 * * Malware reclassification
	 * * Gmail potential employee spoofing
	 */
	export interface MailPhishingFormProperties {

		/** If `true`, the email originated from within the organization. */
		isInternal: FormControl<boolean | null | undefined>,

		/** System actions on the messages. */
		systemActionType: FormControl<MailPhishingSystemActionType | null | undefined>,
	}
	export function CreateMailPhishingFormGroup() {
		return new FormGroup<MailPhishingFormProperties>({
			isInternal: new FormControl<boolean | null | undefined>(undefined),
			systemActionType: new FormControl<MailPhishingSystemActionType | null | undefined>(undefined),
		});

	}

	export enum MailPhishingSystemActionType { SYSTEM_ACTION_TYPE_UNSPECIFIED = 0, NO_OPERATION = 1, REMOVED_FROM_INBOX = 2 }


	/**
	 * Settings for callback notifications.
	 * For more details see [G Suite Alert
	 * Notification](/admin-sdk/alertcenter/guides/notifications).
	 */
	export interface Notification {

		/**
		 * A reference to a Cloud Pubsub topic.
		 * To register for notifications, the owner of the topic must grant
		 * `alerts-api-push-notifications@system.gserviceaccount.com` the
		 * `projects.topics.publish` permission.
		 */
		cloudPubsubTopic?: CloudPubsubTopic;
	}

	/**
	 * Settings for callback notifications.
	 * For more details see [G Suite Alert
	 * Notification](/admin-sdk/alertcenter/guides/notifications).
	 */
	export interface NotificationFormProperties {
	}
	export function CreateNotificationFormGroup() {
		return new FormGroup<NotificationFormProperties>({
		});

	}


	/**
	 * Alert for a spike in user reported phishing.
	 * <aside class="warning"><b>Warning</b>: This type has been deprecated. Use
	 * [MailPhishing](/admin-sdk/alertcenter/reference/rest/v1beta1/MailPhishing)
	 * instead.</aside>
	 */
	export interface PhishingSpike {

		/** Domain ID of Gmail phishing alerts. */
		domainId?: DomainId;

		/** If `true`, the email originated from within the organization. */
		isInternal?: boolean | null;

		/** Entity whose actions triggered a Gmail phishing alert. */
		maliciousEntity?: MaliciousEntity;

		/** The list of messages contained by this alert. */
		messages?: Array<GmailMessageInfo>;
	}

	/**
	 * Alert for a spike in user reported phishing.
	 * <aside class="warning"><b>Warning</b>: This type has been deprecated. Use
	 * [MailPhishing](/admin-sdk/alertcenter/reference/rest/v1beta1/MailPhishing)
	 * instead.</aside>
	 */
	export interface PhishingSpikeFormProperties {

		/** If `true`, the email originated from within the organization. */
		isInternal: FormControl<boolean | null | undefined>,
	}
	export function CreatePhishingSpikeFormGroup() {
		return new FormGroup<PhishingSpikeFormProperties>({
			isInternal: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Customer-level settings. */
	export interface Settings {

		/** The list of notifications. */
		notifications?: Array<Notification>;
	}

	/** Customer-level settings. */
	export interface SettingsFormProperties {
	}
	export function CreateSettingsFormGroup() {
		return new FormGroup<SettingsFormProperties>({
		});

	}


	/** A state-sponsored attack alert. Derived from audit logs. */
	export interface StateSponsoredAttack {

		/** The email of the user this incident was created for. */
		email?: string | null;
	}

	/** A state-sponsored attack alert. Derived from audit logs. */
	export interface StateSponsoredAttackFormProperties {

		/** The email of the user this incident was created for. */
		email: FormControl<string | null | undefined>,
	}
	export function CreateStateSponsoredAttackFormGroup() {
		return new FormGroup<StateSponsoredAttackFormProperties>({
			email: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A mobile suspicious activity alert. Derived from audit logs. */
	export interface SuspiciousActivity {

		/** The email of the user this alert was created for. */
		email?: string | null;

		/** Required. The list of security events. */
		events?: Array<SuspiciousActivitySecurityDetail>;
	}

	/** A mobile suspicious activity alert. Derived from audit logs. */
	export interface SuspiciousActivityFormProperties {

		/** The email of the user this alert was created for. */
		email: FormControl<string | null | undefined>,
	}
	export function CreateSuspiciousActivityFormGroup() {
		return new FormGroup<SuspiciousActivityFormProperties>({
			email: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Detailed information of a single MDM suspicious activity event. */
	export interface SuspiciousActivitySecurityDetail {

		/** Required. The device ID. */
		deviceId?: string | null;

		/** The model of the device. */
		deviceModel?: string | null;

		/** The device property which was changed. */
		deviceProperty?: string | null;

		/** The type of the device. */
		deviceType?: string | null;

		/** Required for iOS, empty for others. */
		iosVendorId?: string | null;

		/** The new value of the device property after the change. */
		newValue?: string | null;

		/** The old value of the device property before the change. */
		oldValue?: string | null;

		/** The device resource ID. */
		resourceId?: string | null;

		/** The serial number of the device. */
		serialNumber?: string | null;
	}

	/** Detailed information of a single MDM suspicious activity event. */
	export interface SuspiciousActivitySecurityDetailFormProperties {

		/** Required. The device ID. */
		deviceId: FormControl<string | null | undefined>,

		/** The model of the device. */
		deviceModel: FormControl<string | null | undefined>,

		/** The device property which was changed. */
		deviceProperty: FormControl<string | null | undefined>,

		/** The type of the device. */
		deviceType: FormControl<string | null | undefined>,

		/** Required for iOS, empty for others. */
		iosVendorId: FormControl<string | null | undefined>,

		/** The new value of the device property after the change. */
		newValue: FormControl<string | null | undefined>,

		/** The old value of the device property before the change. */
		oldValue: FormControl<string | null | undefined>,

		/** The device resource ID. */
		resourceId: FormControl<string | null | undefined>,

		/** The serial number of the device. */
		serialNumber: FormControl<string | null | undefined>,
	}
	export function CreateSuspiciousActivitySecurityDetailFormGroup() {
		return new FormGroup<SuspiciousActivitySecurityDetailFormProperties>({
			deviceId: new FormControl<string | null | undefined>(undefined),
			deviceModel: new FormControl<string | null | undefined>(undefined),
			deviceProperty: new FormControl<string | null | undefined>(undefined),
			deviceType: new FormControl<string | null | undefined>(undefined),
			iosVendorId: new FormControl<string | null | undefined>(undefined),
			newValue: new FormControl<string | null | undefined>(undefined),
			oldValue: new FormControl<string | null | undefined>(undefined),
			resourceId: new FormControl<string | null | undefined>(undefined),
			serialNumber: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A request to undelete a specific alert that was marked for deletion. */
	export interface UndeleteAlertRequest {

		/**
		 * Optional. The unique identifier of the G Suite organization account of the
		 * customer the alert is associated with.
		 * Inferred from the caller identity if not provided.
		 */
		customerId?: string | null;
	}

	/** A request to undelete a specific alert that was marked for deletion. */
	export interface UndeleteAlertRequestFormProperties {

		/**
		 * Optional. The unique identifier of the G Suite organization account of the
		 * customer the alert is associated with.
		 * Inferred from the caller identity if not provided.
		 */
		customerId: FormControl<string | null | undefined>,
	}
	export function CreateUndeleteAlertRequestFormGroup() {
		return new FormGroup<UndeleteAlertRequestFormProperties>({
			customerId: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Lists the alerts.
		 * Get v1beta1/alerts
		 * @param {string} customerId Optional. The unique identifier of the G Suite organization account of the
		 * customer the alerts are associated with.
		 * Inferred from the caller identity if not provided.
		 * @param {string} filter Optional. A query string for filtering alert results.
		 * For more details, see [Query
		 * filters](/admin-sdk/alertcenter/guides/query-filters) and [Supported
		 * query filter
		 * fields](/admin-sdk/alertcenter/reference/filter-fields#alerts.list).
		 * @param {string} orderBy Optional. The sort order of the list results.
		 * If not specified results may be returned in arbitrary order.
		 * You can sort the results in descending order based on the creation
		 * timestamp using `order_by="create_time desc"`.
		 * Currently, supported sorting are `create_time asc`, `create_time desc`,
		 * `update_time desc`
		 * @param {number} pageSize Optional. The requested page size. Server may return fewer items than
		 * requested. If unspecified, server picks an appropriate default.
		 * @param {string} pageToken Optional. A token identifying a page of results the server should return.
		 * If empty, a new iteration is started. To continue an iteration, pass in
		 * the value from the previous ListAlertsResponse's
		 * next_page_token field.
		 * @return {void} Successful response
		 */
		Alertcenter_alerts_list(customerId: string | null | undefined, filter: string | null | undefined, orderBy: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v1beta1/alerts?customerId=' + (customerId == null ? '' : encodeURIComponent(customerId)) + '&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&orderBy=' + (orderBy == null ? '' : encodeURIComponent(orderBy)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Marks the specified alert for deletion. An alert that has been marked for
		 * deletion is removed from Alert Center after 30 days.
		 * Marking an alert for deletion has no effect on an alert which has
		 * already been marked for deletion. Attempting to mark a nonexistent alert
		 * for deletion results in a `NOT_FOUND` error.
		 * Delete v1beta1/alerts/{alertId}
		 * @param {string} alertId Required. The identifier of the alert to delete.
		 * @param {string} customerId Optional. The unique identifier of the G Suite organization account of the
		 * customer the alert is associated with.
		 * Inferred from the caller identity if not provided.
		 * @return {void} Successful response
		 */
		Alertcenter_alerts_delete(alertId: string, customerId: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'v1beta1/alerts/' + (alertId == null ? '' : encodeURIComponent(alertId)) + '&customerId=' + (customerId == null ? '' : encodeURIComponent(customerId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets the specified alert. Attempting to get a nonexistent alert returns
		 * `NOT_FOUND` error.
		 * Get v1beta1/alerts/{alertId}
		 * @param {string} alertId Required. The identifier of the alert to retrieve.
		 * @param {string} customerId Optional. The unique identifier of the G Suite organization account of the
		 * customer the alert is associated with.
		 * Inferred from the caller identity if not provided.
		 * @return {void} Successful response
		 */
		Alertcenter_alerts_get(alertId: string, customerId: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v1beta1/alerts/' + (alertId == null ? '' : encodeURIComponent(alertId)) + '&customerId=' + (customerId == null ? '' : encodeURIComponent(customerId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Lists all the feedback for an alert. Attempting to list feedbacks for
		 * a non-existent alert returns `NOT_FOUND` error.
		 * Get v1beta1/alerts/{alertId}/feedback
		 * @param {string} alertId Required. The alert identifier.
		 * The "-" wildcard could be used to represent all alerts.
		 * @param {string} customerId Optional. The unique identifier of the G Suite organization account of the
		 * customer the alert feedback are associated with.
		 * Inferred from the caller identity if not provided.
		 * @param {string} filter Optional. A query string for filtering alert feedback results.
		 * For more details, see [Query
		 * filters](/admin-sdk/alertcenter/guides/query-filters) and [Supported
		 * query filter
		 * fields](/admin-sdk/alertcenter/reference/filter-fields#alerts.feedback.list).
		 * @return {void} Successful response
		 */
		Alertcenter_alerts_feedback_list(alertId: string, customerId: string | null | undefined, filter: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v1beta1/alerts/' + (alertId == null ? '' : encodeURIComponent(alertId)) + '/feedback&customerId=' + (customerId == null ? '' : encodeURIComponent(customerId)) + '&filter=' + (filter == null ? '' : encodeURIComponent(filter)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Creates new feedback for an alert. Attempting to create a feedback for
		 * a non-existent alert returns `NOT_FOUND` error. Attempting to create a
		 * feedback for an alert that is marked for deletion returns
		 * `FAILED_PRECONDITION' error.
		 * Post v1beta1/alerts/{alertId}/feedback
		 * @param {string} alertId Required. The identifier of the alert this feedback belongs to.
		 * @param {string} customerId Optional. The unique identifier of the G Suite organization account of the
		 * customer the alert is associated with.
		 * Inferred from the caller identity if not provided.
		 * @return {void} Successful response
		 */
		Alertcenter_alerts_feedback_create(alertId: string, customerId: string | null | undefined, requestBody: AlertFeedback): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1beta1/alerts/' + (alertId == null ? '' : encodeURIComponent(alertId)) + '/feedback&customerId=' + (customerId == null ? '' : encodeURIComponent(customerId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns the metadata of an alert. Attempting to get metadata for
		 * a non-existent alert returns `NOT_FOUND` error.
		 * Get v1beta1/alerts/{alertId}/metadata
		 * @param {string} alertId Required. The identifier of the alert this metadata belongs to.
		 * @param {string} customerId Optional. The unique identifier of the G Suite organization account of the
		 * customer the alert metadata is associated with.
		 * Inferred from the caller identity if not provided.
		 * @return {void} Successful response
		 */
		Alertcenter_alerts_getMetadata(alertId: string, customerId: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v1beta1/alerts/' + (alertId == null ? '' : encodeURIComponent(alertId)) + '/metadata&customerId=' + (customerId == null ? '' : encodeURIComponent(customerId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Restores, or "undeletes", an alert that was marked for deletion within the
		 * past 30 days. Attempting to undelete an alert which was marked for deletion
		 * over 30 days ago (which has been removed from the Alert Center database) or
		 * a nonexistent alert returns a `NOT_FOUND` error. Attempting to
		 * undelete an alert which has not been marked for deletion has no effect.
		 * Post v1beta1/alerts/{alertId}:undelete
		 * @param {string} alertId Required. The identifier of the alert to undelete.
		 * @return {void} Successful response
		 */
		Alertcenter_alerts_undelete(alertId: string, requestBody: UndeleteAlertRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1beta1/alerts/' + (alertId == null ? '' : encodeURIComponent(alertId)) + ':undelete', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Performs batch delete operation on alerts.
		 * Post v1beta1/alerts:batchDelete
		 * @return {void} Successful response
		 */
		Alertcenter_alerts_batchDelete(requestBody: BatchDeleteAlertsRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1beta1/alerts:batchDelete', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Performs batch undelete operation on alerts.
		 * Post v1beta1/alerts:batchUndelete
		 * @return {void} Successful response
		 */
		Alertcenter_alerts_batchUndelete(requestBody: BatchUndeleteAlertsRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1beta1/alerts:batchUndelete', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns customer-level settings.
		 * Get v1beta1/settings
		 * @param {string} customerId Optional. The unique identifier of the G Suite organization account of the
		 * customer the alert settings are associated with.
		 * Inferred from the caller identity if not provided.
		 * @return {void} Successful response
		 */
		Alertcenter_getSettings(customerId: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v1beta1/settings?customerId=' + (customerId == null ? '' : encodeURIComponent(customerId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Updates the customer-level settings.
		 * Patch v1beta1/settings
		 * @param {string} customerId Optional. The unique identifier of the G Suite organization account of the
		 * customer the alert settings are associated with.
		 * Inferred from the caller identity if not provided.
		 * @return {void} Successful response
		 */
		Alertcenter_updateSettings(customerId: string | null | undefined, requestBody: Settings): Observable<HttpResponse<string>> {
			return this.http.patch(this.baseUri + 'v1beta1/settings?customerId=' + (customerId == null ? '' : encodeURIComponent(customerId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}
	}

}

