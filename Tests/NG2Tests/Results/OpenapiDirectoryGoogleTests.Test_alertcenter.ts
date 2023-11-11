import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
export namespace MyNS {

	/** Alerts for user account warning events. */
	export interface AccountWarning {

		/** Required. The email of the user that this event belongs to. */
		email?: string | null;

		/** The details of the login action. */
		loginDetails?: LoginDetails | null;
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


	/** Alerts from G Suite Security Center rules service configured by admin. */
	export interface ActivityRule {

		/** List of action names associated with the rule threshold. */
		actionNames?: Array<string> | null;

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
		supersededAlerts?: Array<string> | null;

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
		data?: {[id: string]: any } | null;

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
		metadata?: AlertMetadata | null;

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

	export enum AlertFeedbackType { ALERT_FEEDBACK_TYPE_UNSPECIFIED = 0, NOT_USEFUL = 1, SOMEWHAT_USEFUL = 2, VERY_USEFUL = 3 }


	/** Alerts from App Maker to notify admins to set up default SQL instance. */
	export interface AppMakerSqlSetupNotification {

		/** List of applications with requests for default SQL set up. */
		requestInfo?: Array<RequestInfo> | null;
	}


	/** Requests for one application that needs default SQL setup. */
	export interface RequestInfo {

		/**
		 * List of app developers who triggered notifications for above
		 * application.
		 */
		appDeveloperEmail?: Array<string> | null;

		/** Required. The application that requires the SQL setup. */
		appKey?: string | null;

		/**
		 * Required. Number of requests sent for this application to set up default
		 * SQL instance.
		 */
		numberOfRequests?: string | null;
	}


	/** Attachment with application-specific information about an alert. */
	export interface Attachment {

		/**
		 * A representation of a CSV file attachment, as a list of column headers and
		 * a list of data rows.
		 */
		csv?: Csv | null;
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
		dataRows?: Array<CsvRow> | null;

		/** The list of headers for data columns in a CSV file. */
		headers?: Array<string> | null;
	}


	/** A representation of a single data row in a CSV file. */
	export interface CsvRow {

		/**
		 * The data entries in a CSV file row, as a string array rather than a
		 * single comma-separated string.
		 */
		entries?: Array<string> | null;
	}


	/**
	 * Alert for setting the domain or IP that malicious email comes from as
	 * whitelisted domain or IP in Gmail advanced settings.
	 */
	export interface BadWhitelist {

		/** Domain ID of Gmail phishing alerts. */
		domainId?: DomainId | null;

		/** Entity whose actions triggered a Gmail phishing alert. */
		maliciousEntity?: MaliciousEntity | null;

		/** The list of messages contained by this alert. */
		messages?: Array<GmailMessageInfo> | null;

		/**
		 * The source IP address of the malicious email, for example,
		 * `127.0.0.1`.
		 */
		sourceIp?: string | null;
	}


	/** Domain ID of Gmail phishing alerts. */
	export interface DomainId {

		/** The primary domain for the customer. */
		customerPrimaryDomain?: string | null;
	}


	/** Entity whose actions triggered a Gmail phishing alert. */
	export interface MaliciousEntity {

		/** The header from display name. */
		displayName?: string | null;

		/** A user. */
		entity?: User | null;

		/** The sender email address. */
		fromHeader?: string | null;
	}


	/** A user. */
	export interface User {

		/** Display name of the user. */
		displayName?: string | null;

		/** Email address of the user. */
		emailAddress?: string | null;
	}


	/** Details of a message in phishing spike alert. */
	export interface GmailMessageInfo {

		/** The `SHA256` hash of email's attachment and all MIME parts. */
		attachmentsSha256Hash?: Array<string> | null;

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


	/** A request to perform batch delete on alerts. */
	export interface BatchDeleteAlertsRequest {

		/** Required. list of alert IDs. */
		alertId?: Array<string> | null;

		/**
		 * Optional. The unique identifier of the G Suite organization account of the
		 * customer the alerts are associated with.
		 */
		customerId?: string | null;
	}


	/** Response to batch delete operation on alerts. */
	export interface BatchDeleteAlertsResponse {

		/** The status details for each failed alert_id. */
		failedAlertStatus?: {[id: string]: Status } | null;

		/** The successful list of alert IDs. */
		successAlertIds?: Array<string> | null;
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
		details?: Array<string> | null;

		/**
		 * A developer-facing error message, which should be in English. Any
		 * user-facing error message should be localized and sent in the
		 * google.rpc.Status.details field, or localized by the client.
		 */
		message?: string | null;
	}


	/** A request to perform batch undelete on alerts. */
	export interface BatchUndeleteAlertsRequest {

		/** Required. list of alert IDs. */
		alertId?: Array<string> | null;

		/**
		 * Optional. The unique identifier of the G Suite organization account of the
		 * customer the alerts are associated with.
		 */
		customerId?: string | null;
	}


	/** Response to batch undelete operation on alerts. */
	export interface BatchUndeleteAlertsResponse {

		/** The status details for each failed alert_id. */
		failedAlertStatus?: {[id: string]: Status } | null;

		/** The successful list of alert IDs. */
		successAlertIds?: Array<string> | null;
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

	export enum CloudPubsubTopicPayloadFormat { PAYLOAD_FORMAT_UNSPECIFIED = 0, JSON = 1 }


	/** A mobile device compromised alert. Derived from audit logs. */
	export interface DeviceCompromised {

		/** The email of the user this alert was created for. */
		email?: string | null;

		/** Required. The list of security events. */
		events?: Array<DeviceCompromisedSecurityDetail> | null;
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


	/** Alerts that get triggered on violations of Data Loss Prevention (DLP) rules. */
	export interface DlpRuleViolation {

		/**
		 * Common alert information about violated rules that are configured by G Suite
		 * administrators.
		 */
		ruleViolationInfo?: RuleViolationInfo | null;
	}


	/**
	 * Common alert information about violated rules that are configured by G Suite
	 * administrators.
	 */
	export interface RuleViolationInfo {

		/** Source of the data. */
		dataSource?: RuleViolationInfoDataSource | null;

		/** List of matches that were found in the resource content. */
		matchInfo?: Array<MatchInfo> | null;

		/**
		 * Resource recipients.
		 * For Drive, they are grantees that the Drive file was shared with at the
		 * time of rule triggering. Valid values include user emails, group emails,
		 * domains, or 'anyone' if the file was publicly accessible. If the file was
		 * private the recipients list will be empty.
		 * For Gmail, they are emails of the users or groups that the Gmail message
		 * was sent to.
		 */
		recipients?: Array<string> | null;

		/** Proto that contains resource information. */
		resourceInfo?: ResourceInfo | null;

		/** Proto that contains rule information. */
		ruleInfo?: RuleInfo | null;

		/** Actions suppressed due to other actions with higher priority. */
		suppressedActionTypes?: Array<string> | null;

		/** Trigger of the rule. */
		trigger?: RuleViolationInfoTrigger | null;

		/** Actions applied as a consequence of the rule being triggered. */
		triggeredActionTypes?: Array<string> | null;

		/**
		 * Email of the user who caused the violation. Value could be empty if not
		 * applicable, for example, a violation found by drive continuous scan.
		 */
		triggeringUserEmail?: string | null;
	}

	export enum RuleViolationInfoDataSource { DATA_SOURCE_UNSPECIFIED = 0, DRIVE = 1 }


	/** Proto that contains match information from the condition part of the rule. */
	export interface MatchInfo {

		/** Detector provided by Google. */
		predefinedDetector?: PredefinedDetectorInfo | null;

		/** Detector defined by administrators. */
		userDefinedDetector?: UserDefinedDetectorInfo | null;
	}


	/** Detector provided by Google. */
	export interface PredefinedDetectorInfo {

		/** Name that uniquely identifies the detector. */
		detectorName?: string | null;
	}


	/** Detector defined by administrators. */
	export interface UserDefinedDetectorInfo {

		/** Display name of the detector. */
		displayName?: string | null;

		/** Resource name that uniquely identifies the detector. */
		resourceName?: string | null;
	}


	/** Proto that contains resource information. */
	export interface ResourceInfo {

		/** Drive file ID. */
		documentId?: string | null;

		/** Title of the resource, for example email subject, or document title. */
		resourceTitle?: string | null;
	}


	/** Proto that contains rule information. */
	export interface RuleInfo {

		/** User provided name of the rule. */
		displayName?: string | null;

		/** Resource name that uniquely identifies the rule. */
		resourceName?: string | null;
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


	/** An incident reported by Google Operations for a G Suite application. */
	export interface GoogleOperations {

		/**
		 * The list of emails which correspond to the users directly affected by the
		 * incident.
		 */
		affectedUserEmails?: Array<string> | null;

		/** Attachment with application-specific information about an alert. */
		attachmentData?: Attachment | null;

		/** A detailed, freeform incident description. */
		description?: string | null;

		/** A one-line incident description. */
		title?: string | null;
	}


	/** Response message for an alert feedback listing request. */
	export interface ListAlertFeedbackResponse {

		/**
		 * The list of alert feedback.
		 * Feedback entries for each alert are ordered by creation time descending.
		 */
		feedback?: Array<AlertFeedback> | null;
	}


	/** Response message for an alert listing request. */
	export interface ListAlertsResponse {

		/** The list of alerts. */
		alerts?: Array<Alert> | null;

		/**
		 * The token for the next page. If not empty, indicates that there may be more
		 * alerts that match the listing request; this value can be used in a
		 * subsequent ListAlertsRequest to get alerts continuing from last result
		 * of the current list call.
		 */
		nextPageToken?: string | null;
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
		domainId?: DomainId | null;

		/** If `true`, the email originated from within the organization. */
		isInternal?: boolean | null;

		/** Entity whose actions triggered a Gmail phishing alert. */
		maliciousEntity?: MaliciousEntity | null;

		/** The list of messages contained by this alert. */
		messages?: Array<GmailMessageInfo> | null;

		/** System actions on the messages. */
		systemActionType?: MailPhishingSystemActionType | null;
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
		cloudPubsubTopic?: CloudPubsubTopic | null;
	}


	/**
	 * Alert for a spike in user reported phishing.
	 * <aside class="warning"><b>Warning</b>: This type has been deprecated. Use
	 * [MailPhishing](/admin-sdk/alertcenter/reference/rest/v1beta1/MailPhishing)
	 * instead.</aside>
	 */
	export interface PhishingSpike {

		/** Domain ID of Gmail phishing alerts. */
		domainId?: DomainId | null;

		/** If `true`, the email originated from within the organization. */
		isInternal?: boolean | null;

		/** Entity whose actions triggered a Gmail phishing alert. */
		maliciousEntity?: MaliciousEntity | null;

		/** The list of messages contained by this alert. */
		messages?: Array<GmailMessageInfo> | null;
	}


	/** Customer-level settings. */
	export interface Settings {

		/** The list of notifications. */
		notifications?: Array<Notification> | null;
	}


	/** A state-sponsored attack alert. Derived from audit logs. */
	export interface StateSponsoredAttack {

		/** The email of the user this incident was created for. */
		email?: string | null;
	}


	/** A mobile suspicious activity alert. Derived from audit logs. */
	export interface SuspiciousActivity {

		/** The email of the user this alert was created for. */
		email?: string | null;

		/** Required. The list of security events. */
		events?: Array<SuspiciousActivitySecurityDetail> | null;
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


	/** A request to undelete a specific alert that was marked for deletion. */
	export interface UndeleteAlertRequest {

		/**
		 * Optional. The unique identifier of the G Suite organization account of the
		 * customer the alert is associated with.
		 * Inferred from the caller identity if not provided.
		 */
		customerId?: string | null;
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
		Alertcenter_alerts_list(customerId: string, filter: string, orderBy: string, pageSize: number, pageToken: string): Observable<HttpResponse<string>> {
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
		Alertcenter_alerts_delete(alertId: string, customerId: string): Observable<HttpResponse<string>> {
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
		Alertcenter_alerts_get(alertId: string, customerId: string): Observable<HttpResponse<string>> {
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
		Alertcenter_alerts_feedback_list(alertId: string, customerId: string, filter: string): Observable<HttpResponse<string>> {
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
		Alertcenter_alerts_feedback_create(alertId: string, customerId: string, requestBody: AlertFeedback): Observable<HttpResponse<string>> {
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
		Alertcenter_alerts_getMetadata(alertId: string, customerId: string): Observable<HttpResponse<string>> {
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
		Alertcenter_getSettings(customerId: string): Observable<HttpResponse<string>> {
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
		Alertcenter_updateSettings(customerId: string, requestBody: Settings): Observable<HttpResponse<string>> {
			return this.http.patch(this.baseUri + 'v1beta1/settings?customerId=' + (customerId == null ? '' : encodeURIComponent(customerId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}
	}

}

