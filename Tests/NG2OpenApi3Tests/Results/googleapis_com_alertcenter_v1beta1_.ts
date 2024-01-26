import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** A generic alert for abusive user activity occurring with a customer. */
	export interface AbuseDetected {

		/** EntityList stores entities in a format that can be translated to a table in the Alert Center UI. */
		additionalDetails?: EntityList;

		/** Product that the abuse is originating from. */
		product?: string | null;

		/** Unique identifier of each sub alert that is onboarded. */
		subAlertId?: string | null;

		/** Variation of AbuseDetected alerts. The variation_type determines the texts displayed the alert details. This differs from sub_alert_id because each sub alert can have multiple variation_types, representing different stages of the alert. */
		variationType?: AbuseDetectedVariationType | null;
	}

	/** A generic alert for abusive user activity occurring with a customer. */
	export interface AbuseDetectedFormProperties {

		/** Product that the abuse is originating from. */
		product: FormControl<string | null | undefined>,

		/** Unique identifier of each sub alert that is onboarded. */
		subAlertId: FormControl<string | null | undefined>,

		/** Variation of AbuseDetected alerts. The variation_type determines the texts displayed the alert details. This differs from sub_alert_id because each sub alert can have multiple variation_types, representing different stages of the alert. */
		variationType: FormControl<AbuseDetectedVariationType | null | undefined>,
	}
	export function CreateAbuseDetectedFormGroup() {
		return new FormGroup<AbuseDetectedFormProperties>({
			product: new FormControl<string | null | undefined>(undefined),
			subAlertId: new FormControl<string | null | undefined>(undefined),
			variationType: new FormControl<AbuseDetectedVariationType | null | undefined>(undefined),
		});

	}


	/** EntityList stores entities in a format that can be translated to a table in the Alert Center UI. */
	export interface EntityList {

		/** List of entities affected by the alert. */
		entities?: Array<Entity>;

		/** Headers of the values in entities. If no value is defined in Entity, this field should be empty. */
		headers?: Array<string>;

		/** Name of the key detail used to display this entity list. */
		name?: string | null;
	}

	/** EntityList stores entities in a format that can be translated to a table in the Alert Center UI. */
	export interface EntityListFormProperties {

		/** Name of the key detail used to display this entity list. */
		name: FormControl<string | null | undefined>,
	}
	export function CreateEntityListFormGroup() {
		return new FormGroup<EntityListFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Individual entity affected by, or related to, an alert. */
	export interface Entity {

		/** Link to a Security Investigation Tool search based on this entity, if available. */
		link?: string | null;

		/** Human-readable name of this entity, such as an email address, file ID, or device name. */
		name?: string | null;

		/** Extra values beyond name. The order of values should align with headers in EntityList. */
		values?: Array<string>;
	}

	/** Individual entity affected by, or related to, an alert. */
	export interface EntityFormProperties {

		/** Link to a Security Investigation Tool search based on this entity, if available. */
		link: FormControl<string | null | undefined>,

		/** Human-readable name of this entity, such as an email address, file ID, or device name. */
		name: FormControl<string | null | undefined>,
	}
	export function CreateEntityFormGroup() {
		return new FormGroup<EntityFormProperties>({
			link: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum AbuseDetectedVariationType { ABUSE_DETECTED_VARIATION_TYPE_UNSPECIFIED = 0, DRIVE_ABUSIVE_CONTENT = 1, LIMITED_DISABLE = 2 }


	/** Alert that is triggered when Google support requests to access customer data. */
	export interface AccessApproval {

		/** Justification for data access based on justification enums. */
		justificationReason?: Array<string>;

		/** Office location of Google staff requesting access such as "US". */
		officeLocation?: string | null;

		/** Products within scope of the Access Approvals request. */
		products?: Array<string>;

		/** ID of the Access Approvals request. This is a helpful field when requesting support from Google. */
		requestId?: string | null;

		/** Scope of access, also known as a resource. This is further narrowed down by the product field. */
		scope?: string | null;

		/** Support tickets related to this Access Approvals request. Populated if there is an associated case number. */
		tickets?: Array<SupportTicket>;
	}

	/** Alert that is triggered when Google support requests to access customer data. */
	export interface AccessApprovalFormProperties {

		/** Office location of Google staff requesting access such as "US". */
		officeLocation: FormControl<string | null | undefined>,

		/** ID of the Access Approvals request. This is a helpful field when requesting support from Google. */
		requestId: FormControl<string | null | undefined>,

		/** Scope of access, also known as a resource. This is further narrowed down by the product field. */
		scope: FormControl<string | null | undefined>,
	}
	export function CreateAccessApprovalFormGroup() {
		return new FormGroup<AccessApprovalFormProperties>({
			officeLocation: new FormControl<string | null | undefined>(undefined),
			requestId: new FormControl<string | null | undefined>(undefined),
			scope: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Support ticket related to Access Approvals request */
	export interface SupportTicket {

		/** Support ticket ID */
		ticketId?: string | null;

		/** Link to support ticket */
		ticketUrl?: string | null;
	}

	/** Support ticket related to Access Approvals request */
	export interface SupportTicketFormProperties {

		/** Support ticket ID */
		ticketId: FormControl<string | null | undefined>,

		/** Link to support ticket */
		ticketUrl: FormControl<string | null | undefined>,
	}
	export function CreateSupportTicketFormGroup() {
		return new FormGroup<SupportTicketFormProperties>({
			ticketId: new FormControl<string | null | undefined>(undefined),
			ticketUrl: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Details about why an account is receiving an account suspension warning. */
	export interface AccountSuspensionDetails {

		/** The reason why this account is receiving an account suspension warning. */
		abuseReason?: AccountSuspensionDetailsAbuseReason | null;

		/** The name of the product being abused. This is restricted to only the following values: "Gmail" "Google Workspace" "Payments" "Voice" "YouTube" "Other" */
		productName?: string | null;
	}

	/** Details about why an account is receiving an account suspension warning. */
	export interface AccountSuspensionDetailsFormProperties {

		/** The reason why this account is receiving an account suspension warning. */
		abuseReason: FormControl<AccountSuspensionDetailsAbuseReason | null | undefined>,

		/** The name of the product being abused. This is restricted to only the following values: "Gmail" "Google Workspace" "Payments" "Voice" "YouTube" "Other" */
		productName: FormControl<string | null | undefined>,
	}
	export function CreateAccountSuspensionDetailsFormGroup() {
		return new FormGroup<AccountSuspensionDetailsFormProperties>({
			abuseReason: new FormControl<AccountSuspensionDetailsAbuseReason | null | undefined>(undefined),
			productName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum AccountSuspensionDetailsAbuseReason { ACCOUNT_SUSPENSION_ABUSE_REASON_UNSPECIFIED = 0, TOS_VIOLATION = 1, SPAM = 2, PHISHING = 3, TRAFFIC_PUMPING = 4, FRAUD = 5, NUMBER_HARVESTING = 6, PAYMENTS_FRAUD = 7, UNWANTED_CONTENT = 8 }


	/** A warning that the customer's account is about to be suspended. */
	export interface AccountSuspensionWarning {

		/** The amount of time remaining to appeal an imminent suspension. After this window has elapsed, the account will be suspended. Only populated if the account suspension is in WARNING state. */
		appealWindow?: string | null;

		/** Account suspension warning state. */
		state?: AccountSuspensionWarningState | null;

		/** Details about why an account is being suspended. */
		suspensionDetails?: Array<AccountSuspensionDetails>;
	}

	/** A warning that the customer's account is about to be suspended. */
	export interface AccountSuspensionWarningFormProperties {

		/** The amount of time remaining to appeal an imminent suspension. After this window has elapsed, the account will be suspended. Only populated if the account suspension is in WARNING state. */
		appealWindow: FormControl<string | null | undefined>,

		/** Account suspension warning state. */
		state: FormControl<AccountSuspensionWarningState | null | undefined>,
	}
	export function CreateAccountSuspensionWarningFormGroup() {
		return new FormGroup<AccountSuspensionWarningFormProperties>({
			appealWindow: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<AccountSuspensionWarningState | null | undefined>(undefined),
		});

	}

	export enum AccountSuspensionWarningState { ACCOUNT_SUSPENSION_WARNING_STATE_UNSPECIFIED = 0, WARNING = 1, SUSPENDED = 2, APPEAL_APPROVED = 3, APPEAL_SUBMITTED = 4 }


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

		/** Optional. The human-readable IP address (for example, `11.22.33.44`) that is associated with the warning event. */
		ipAddress?: string | null;

		/** Optional. The successful login time that is associated with the warning event. This isn't present for blocked login attempts. */
		loginTime?: string | null;
	}

	/** The details of the login action. */
	export interface LoginDetailsFormProperties {

		/** Optional. The human-readable IP address (for example, `11.22.33.44`) that is associated with the warning event. */
		ipAddress: FormControl<string | null | undefined>,

		/** Optional. The successful login time that is associated with the warning event. This isn't present for blocked login attempts. */
		loginTime: FormControl<string | null | undefined>,
	}
	export function CreateLoginDetailsFormGroup() {
		return new FormGroup<LoginDetailsFormProperties>({
			ipAddress: new FormControl<string | null | undefined>(undefined),
			loginTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Metadata related to the action. */
	export interface ActionInfo {
	}

	/** Metadata related to the action. */
	export interface ActionInfoFormProperties {
	}
	export function CreateActionInfoFormGroup() {
		return new FormGroup<ActionInfoFormProperties>({
		});

	}


	/** Alerts from Google Workspace Security Center rules service configured by an admin. */
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

		/** List of alert IDs superseded by this alert. It is used to indicate that this alert is essentially extension of superseded alerts and we found the relationship after creating these alerts. */
		supersededAlerts?: Array<string>;

		/** Alert ID superseding this alert. It is used to indicate that superseding alert is essentially extension of this alert and we found the relationship after creating both alerts. */
		supersedingAlert?: string | null;

		/** Alert threshold is for example “COUNT > 5”. */
		threshold?: string | null;

		/** The trigger sources for this rule. * GMAIL_EVENTS * DEVICE_EVENTS * USER_EVENTS */
		triggerSource?: string | null;

		/** The timestamp of the last update to the rule. */
		updateTime?: string | null;

		/** Rule window size. Possible values are 1 hour or 24 hours. */
		windowSize?: string | null;
	}

	/** Alerts from Google Workspace Security Center rules service configured by an admin. */
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

		/** Alert ID superseding this alert. It is used to indicate that superseding alert is essentially extension of this alert and we found the relationship after creating both alerts. */
		supersedingAlert: FormControl<string | null | undefined>,

		/** Alert threshold is for example “COUNT > 5”. */
		threshold: FormControl<string | null | undefined>,

		/** The trigger sources for this rule. * GMAIL_EVENTS * DEVICE_EVENTS * USER_EVENTS */
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

		/** Output only. The unique identifier of the Google Workspace account of the customer. */
		customerId?: string | null;

		/** Optional. The data associated with this alert, for example google.apps.alertcenter.type.DeviceCompromised. */
		data?: {[id: string]: any };

		/** Output only. `True` if this alert is marked for deletion. */
		deleted?: boolean | null;

		/** Optional. The time the event that caused this alert ceased being active. If provided, the end time must not be earlier than the start time. If not provided, it indicates an ongoing alert. */
		endTime?: string | null;

		/** Optional. `etag` is used for optimistic concurrency control as a way to help prevent simultaneous updates of an alert from overwriting each other. It is strongly suggested that systems make use of the `etag` in the read-modify-write cycle to perform alert updates in order to avoid race conditions: An `etag` is returned in the response which contains alerts, and systems are expected to put that etag in the request to update alert to ensure that their change will be applied to the same version of the alert. If no `etag` is provided in the call to update alert, then the existing alert is overwritten blindly. */
		etag?: string | null;

		/** An alert metadata. */
		metadata?: AlertMetadata;

		/** Output only. An optional [Security Investigation Tool](https://support.google.com/a/answer/7575955) query for this alert. */
		securityInvestigationToolLink?: string | null;

		/** Required. A unique identifier for the system that reported the alert. This is output only after alert is created. Supported sources are any of the following: * Google Operations * Mobile device management * Gmail phishing * Data Loss Prevention * Domain wide takeout * State sponsored attack * Google identity * Apps outage */
		source?: string | null;

		/** Required. The time the event that caused this alert was started or detected. */
		startTime?: string | null;

		/** Required. The type of the alert. This is output only after alert is created. For a list of available alert types see [Google Workspace Alert types](https://developers.google.com/admin-sdk/alertcenter/reference/alert-types). */
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

		/** Output only. The unique identifier of the Google Workspace account of the customer. */
		customerId: FormControl<string | null | undefined>,

		/** Optional. The data associated with this alert, for example google.apps.alertcenter.type.DeviceCompromised. */
		data: FormControl<{[id: string]: any } | null | undefined>,

		/** Output only. `True` if this alert is marked for deletion. */
		deleted: FormControl<boolean | null | undefined>,

		/** Optional. The time the event that caused this alert ceased being active. If provided, the end time must not be earlier than the start time. If not provided, it indicates an ongoing alert. */
		endTime: FormControl<string | null | undefined>,

		/** Optional. `etag` is used for optimistic concurrency control as a way to help prevent simultaneous updates of an alert from overwriting each other. It is strongly suggested that systems make use of the `etag` in the read-modify-write cycle to perform alert updates in order to avoid race conditions: An `etag` is returned in the response which contains alerts, and systems are expected to put that etag in the request to update alert to ensure that their change will be applied to the same version of the alert. If no `etag` is provided in the call to update alert, then the existing alert is overwritten blindly. */
		etag: FormControl<string | null | undefined>,

		/** Output only. An optional [Security Investigation Tool](https://support.google.com/a/answer/7575955) query for this alert. */
		securityInvestigationToolLink: FormControl<string | null | undefined>,

		/** Required. A unique identifier for the system that reported the alert. This is output only after alert is created. Supported sources are any of the following: * Google Operations * Mobile device management * Gmail phishing * Data Loss Prevention * Domain wide takeout * State sponsored attack * Google identity * Apps outage */
		source: FormControl<string | null | undefined>,

		/** Required. The time the event that caused this alert was started or detected. */
		startTime: FormControl<string | null | undefined>,

		/** Required. The type of the alert. This is output only after alert is created. For a list of available alert types see [Google Workspace Alert types](https://developers.google.com/admin-sdk/alertcenter/reference/alert-types). */
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

		/** Output only. The unique identifier of the Google Workspace account of the customer. */
		customerId?: string | null;

		/** Optional. `etag` is used for optimistic concurrency control as a way to help prevent simultaneous updates of an alert metadata from overwriting each other. It is strongly suggested that systems make use of the `etag` in the read-modify-write cycle to perform metadata updates in order to avoid race conditions: An `etag` is returned in the response which contains alert metadata, and systems are expected to put that etag in the request to update alert metadata to ensure that their change will be applied to the same version of the alert metadata. If no `etag` is provided in the call to update alert metadata, then the existing alert metadata is overwritten blindly. */
		etag?: string | null;

		/** The severity value of the alert. Alert Center will set this field at alert creation time, default's to an empty string when it could not be determined. The supported values for update actions on this field are the following: * HIGH * MEDIUM * LOW */
		severity?: string | null;

		/** The current status of the alert. The supported values are the following: * NOT_STARTED * IN_PROGRESS * CLOSED */
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

		/** Output only. The unique identifier of the Google Workspace account of the customer. */
		customerId: FormControl<string | null | undefined>,

		/** Optional. `etag` is used for optimistic concurrency control as a way to help prevent simultaneous updates of an alert metadata from overwriting each other. It is strongly suggested that systems make use of the `etag` in the read-modify-write cycle to perform metadata updates in order to avoid race conditions: An `etag` is returned in the response which contains alert metadata, and systems are expected to put that etag in the request to update alert metadata to ensure that their change will be applied to the same version of the alert metadata. If no `etag` is provided in the call to update alert metadata, then the existing alert metadata is overwritten blindly. */
		etag: FormControl<string | null | undefined>,

		/** The severity value of the alert. Alert Center will set this field at alert creation time, default's to an empty string when it could not be determined. The supported values for update actions on this field are the following: * HIGH * MEDIUM * LOW */
		severity: FormControl<string | null | undefined>,

		/** The current status of the alert. The supported values are the following: * NOT_STARTED * IN_PROGRESS * CLOSED */
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

		/** Output only. The unique identifier of the Google Workspace account of the customer. */
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

		/** Output only. The unique identifier of the Google Workspace account of the customer. */
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


	/** The explanation message associated with "APNS certificate is expiring soon" and "APNS certificate has expired" alerts. */
	export interface ApnsCertificateExpirationInfo {

		/** The Apple ID used to create the certificate. It may be blank if admins didn't enter it. */
		appleId?: string | null;

		/** The expiration date of the APNS certificate. */
		expirationTime?: string | null;

		/** The UID of the certificate. */
		uid?: string | null;
	}

	/** The explanation message associated with "APNS certificate is expiring soon" and "APNS certificate has expired" alerts. */
	export interface ApnsCertificateExpirationInfoFormProperties {

		/** The Apple ID used to create the certificate. It may be blank if admins didn't enter it. */
		appleId: FormControl<string | null | undefined>,

		/** The expiration date of the APNS certificate. */
		expirationTime: FormControl<string | null | undefined>,

		/** The UID of the certificate. */
		uid: FormControl<string | null | undefined>,
	}
	export function CreateApnsCertificateExpirationInfoFormGroup() {
		return new FormGroup<ApnsCertificateExpirationInfoFormProperties>({
			appleId: new FormControl<string | null | undefined>(undefined),
			expirationTime: new FormControl<string | null | undefined>(undefined),
			uid: new FormControl<string | null | undefined>(undefined),
		});

	}


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

		/** List of app developers who triggered notifications for above application. */
		appDeveloperEmail?: Array<string>;

		/** Required. The application that requires the SQL setup. */
		appKey?: string | null;

		/** Required. Number of requests sent for this application to set up default SQL instance. */
		numberOfRequests?: string | null;
	}

	/** Requests for one application that needs default SQL setup. */
	export interface RequestInfoFormProperties {

		/** Required. The application that requires the SQL setup. */
		appKey: FormControl<string | null | undefined>,

		/** Required. Number of requests sent for this application to set up default SQL instance. */
		numberOfRequests: FormControl<string | null | undefined>,
	}
	export function CreateRequestInfoFormGroup() {
		return new FormGroup<RequestInfoFormProperties>({
			appKey: new FormControl<string | null | undefined>(undefined),
			numberOfRequests: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Alerts from AppSettingsChanged bucket Rules configured by Admin which contain the below rules. Calendar settings changed Drive settings changed Email settings changed Mobile settings changed */
	export interface AppSettingsChanged {

		/** Any other associated alert details, for example, AlertConfiguration. */
		alertDetails?: string | null;

		/** Rule name */
		name?: string | null;
	}

	/** Alerts from AppSettingsChanged bucket Rules configured by Admin which contain the below rules. Calendar settings changed Drive settings changed Email settings changed Mobile settings changed */
	export interface AppSettingsChangedFormProperties {

		/** Any other associated alert details, for example, AlertConfiguration. */
		alertDetails: FormControl<string | null | undefined>,

		/** Rule name */
		name: FormControl<string | null | undefined>,
	}
	export function CreateAppSettingsChangedFormGroup() {
		return new FormGroup<AppSettingsChangedFormProperties>({
			alertDetails: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An outage incident reported for a Google Workspace service. */
	export interface AppsOutage {

		/** Link to the outage event in Google Workspace Status Dashboard */
		dashboardUri?: string | null;

		/** Incident tracking ID. */
		incidentTrackingId?: string | null;

		/** New alert tracking numbers. */
		mergeInfo?: MergeInfo;

		/** Timestamp by which the next update is expected to arrive. */
		nextUpdateTime?: string | null;

		/** List of products impacted by the outage. */
		products?: Array<string>;

		/** Timestamp when the outage is expected to be resolved, or has confirmed resolution. Provided only when known. */
		resolutionTime?: string | null;

		/** Current outage status. */
		status?: AppsOutageStatus | null;
	}

	/** An outage incident reported for a Google Workspace service. */
	export interface AppsOutageFormProperties {

		/** Link to the outage event in Google Workspace Status Dashboard */
		dashboardUri: FormControl<string | null | undefined>,

		/** Incident tracking ID. */
		incidentTrackingId: FormControl<string | null | undefined>,

		/** Timestamp by which the next update is expected to arrive. */
		nextUpdateTime: FormControl<string | null | undefined>,

		/** Timestamp when the outage is expected to be resolved, or has confirmed resolution. Provided only when known. */
		resolutionTime: FormControl<string | null | undefined>,

		/** Current outage status. */
		status: FormControl<AppsOutageStatus | null | undefined>,
	}
	export function CreateAppsOutageFormGroup() {
		return new FormGroup<AppsOutageFormProperties>({
			dashboardUri: new FormControl<string | null | undefined>(undefined),
			incidentTrackingId: new FormControl<string | null | undefined>(undefined),
			nextUpdateTime: new FormControl<string | null | undefined>(undefined),
			resolutionTime: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<AppsOutageStatus | null | undefined>(undefined),
		});

	}


	/** New alert tracking numbers. */
	export interface MergeInfo {

		/** Optional. New alert ID. Reference the [google.apps.alertcenter.Alert] with this ID for the current state. */
		newAlertId?: string | null;

		/** The new tracking ID from the parent incident. */
		newIncidentTrackingId?: string | null;
	}

	/** New alert tracking numbers. */
	export interface MergeInfoFormProperties {

		/** Optional. New alert ID. Reference the [google.apps.alertcenter.Alert] with this ID for the current state. */
		newAlertId: FormControl<string | null | undefined>,

		/** The new tracking ID from the parent incident. */
		newIncidentTrackingId: FormControl<string | null | undefined>,
	}
	export function CreateMergeInfoFormGroup() {
		return new FormGroup<MergeInfoFormProperties>({
			newAlertId: new FormControl<string | null | undefined>(undefined),
			newIncidentTrackingId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum AppsOutageStatus { STATUS_UNSPECIFIED = 0, NEW = 1, ONGOING = 2, RESOLVED = 3, FALSE_POSITIVE = 4, PARTIALLY_RESOLVED = 5, MERGED = 6, DOWNGRADED = 7 }


	/** Attachment with application-specific information about an alert. */
	export interface Attachment {

		/** A representation of a CSV file attachment, as a list of column headers and a list of data rows. */
		csv?: Csv;
	}

	/** Attachment with application-specific information about an alert. */
	export interface AttachmentFormProperties {
	}
	export function CreateAttachmentFormGroup() {
		return new FormGroup<AttachmentFormProperties>({
		});

	}


	/** A representation of a CSV file attachment, as a list of column headers and a list of data rows. */
	export interface Csv {

		/** The list of data rows in a CSV file, as string arrays rather than as a single comma-separated string. */
		dataRows?: Array<CsvRow>;

		/** The list of headers for data columns in a CSV file. */
		headers?: Array<string>;
	}

	/** A representation of a CSV file attachment, as a list of column headers and a list of data rows. */
	export interface CsvFormProperties {
	}
	export function CreateCsvFormGroup() {
		return new FormGroup<CsvFormProperties>({
		});

	}


	/** A representation of a single data row in a CSV file. */
	export interface CsvRow {

		/** The data entries in a CSV file row, as a string array rather than a single comma-separated string. */
		entries?: Array<string>;
	}

	/** A representation of a single data row in a CSV file. */
	export interface CsvRowFormProperties {
	}
	export function CreateCsvRowFormGroup() {
		return new FormGroup<CsvRowFormProperties>({
		});

	}


	/** Alert for setting the domain or IP that malicious email comes from as whitelisted domain or IP in Gmail advanced settings. */
	export interface BadWhitelist {

		/** Domain ID of Gmail phishing alerts. */
		domainId?: DomainId;

		/** Entity whose actions triggered a Gmail phishing alert. */
		maliciousEntity?: MaliciousEntity;

		/** The list of messages contained by this alert. */
		messages?: Array<GmailMessageInfo>;

		/** The source IP address of the malicious email, for example, `127.0.0.1`. */
		sourceIp?: string | null;
	}

	/** Alert for setting the domain or IP that malicious email comes from as whitelisted domain or IP in Gmail advanced settings. */
	export interface BadWhitelistFormProperties {

		/** The source IP address of the malicious email, for example, `127.0.0.1`. */
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

		/** The date of the event related to this email. */
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

		/** The sent time of the email. */
		sentTime?: string | null;

		/** The email subject text (only available for reported emails). */
		subjectText?: string | null;
	}

	/** Details of a message in phishing spike alert. */
	export interface GmailMessageInfoFormProperties {

		/** The date of the event related to this email. */
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

		/** The sent time of the email. */
		sentTime: FormControl<string | null | undefined>,

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
			sentTime: new FormControl<string | null | undefined>(undefined),
			subjectText: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A request to perform batch delete on alerts. */
	export interface BatchDeleteAlertsRequest {

		/** Required. The list of alert IDs to delete. */
		alertId?: Array<string>;

		/** Optional. The unique identifier of the Google Workspace account of the customer the alerts are associated with. The `customer_id` must have the initial "C" stripped (for example, `046psxkn`). Inferred from the caller identity if not provided. [Find your customer ID](https://support.google.com/cloudidentity/answer/10070793). */
		customerId?: string | null;
	}

	/** A request to perform batch delete on alerts. */
	export interface BatchDeleteAlertsRequestFormProperties {

		/** Optional. The unique identifier of the Google Workspace account of the customer the alerts are associated with. The `customer_id` must have the initial "C" stripped (for example, `046psxkn`). Inferred from the caller identity if not provided. [Find your customer ID](https://support.google.com/cloudidentity/answer/10070793). */
		customerId: FormControl<string | null | undefined>,
	}
	export function CreateBatchDeleteAlertsRequestFormGroup() {
		return new FormGroup<BatchDeleteAlertsRequestFormProperties>({
			customerId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response to batch delete operation on alerts. */
	export interface BatchDeleteAlertsResponse {

		/** The status details for each failed `alert_id`. */
		failedAlertStatus?: {[id: string]: Status };

		/** The successful list of alert IDs. */
		successAlertIds?: Array<string>;
	}

	/** Response to batch delete operation on alerts. */
	export interface BatchDeleteAlertsResponseFormProperties {

		/** The status details for each failed `alert_id`. */
		failedAlertStatus: FormControl<{[id: string]: Status } | null | undefined>,
	}
	export function CreateBatchDeleteAlertsResponseFormGroup() {
		return new FormGroup<BatchDeleteAlertsResponseFormProperties>({
			failedAlertStatus: new FormControl<{[id: string]: Status } | null | undefined>(undefined),
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


	/** A request to perform batch undelete on alerts. */
	export interface BatchUndeleteAlertsRequest {

		/** Required. The list of alert IDs to undelete. */
		alertId?: Array<string>;

		/** Optional. The unique identifier of the Google Workspace account of the customer the alerts are associated with. The `customer_id` must have the initial "C" stripped (for example, `046psxkn`). Inferred from the caller identity if not provided. [Find your customer ID](https://support.google.com/cloudidentity/answer/10070793). */
		customerId?: string | null;
	}

	/** A request to perform batch undelete on alerts. */
	export interface BatchUndeleteAlertsRequestFormProperties {

		/** Optional. The unique identifier of the Google Workspace account of the customer the alerts are associated with. The `customer_id` must have the initial "C" stripped (for example, `046psxkn`). Inferred from the caller identity if not provided. [Find your customer ID](https://support.google.com/cloudidentity/answer/10070793). */
		customerId: FormControl<string | null | undefined>,
	}
	export function CreateBatchUndeleteAlertsRequestFormGroup() {
		return new FormGroup<BatchUndeleteAlertsRequestFormProperties>({
			customerId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response to batch undelete operation on alerts. */
	export interface BatchUndeleteAlertsResponse {

		/** The status details for each failed `alert_id`. */
		failedAlertStatus?: {[id: string]: Status };

		/** The successful list of alert IDs. */
		successAlertIds?: Array<string>;
	}

	/** Response to batch undelete operation on alerts. */
	export interface BatchUndeleteAlertsResponseFormProperties {

		/** The status details for each failed `alert_id`. */
		failedAlertStatus: FormControl<{[id: string]: Status } | null | undefined>,
	}
	export function CreateBatchUndeleteAlertsResponseFormGroup() {
		return new FormGroup<BatchUndeleteAlertsResponseFormProperties>({
			failedAlertStatus: new FormControl<{[id: string]: Status } | null | undefined>(undefined),
		});

	}


	/** A reference to a Cloud Pubsub topic. To register for notifications, the owner of the topic must grant `alerts-api-push-notifications@system.gserviceaccount.com` the `projects.topics.publish` permission. */
	export interface CloudPubsubTopic {

		/** Optional. The format of the payload that would be sent. If not specified the format will be JSON. */
		payloadFormat?: CloudPubsubTopicPayloadFormat | null;

		/** The `name` field of a Cloud Pubsub [Topic] (https://cloud.google.com/pubsub/docs/reference/rest/v1/projects.topics#Topic). */
		topicName?: string | null;
	}

	/** A reference to a Cloud Pubsub topic. To register for notifications, the owner of the topic must grant `alerts-api-push-notifications@system.gserviceaccount.com` the `projects.topics.publish` permission. */
	export interface CloudPubsubTopicFormProperties {

		/** Optional. The format of the payload that would be sent. If not specified the format will be JSON. */
		payloadFormat: FormControl<CloudPubsubTopicPayloadFormat | null | undefined>,

		/** The `name` field of a Cloud Pubsub [Topic] (https://cloud.google.com/pubsub/docs/reference/rest/v1/projects.topics#Topic). */
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

		/** The device compromised state. Possible values are "`Compromised`" or "`Not Compromised`". */
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

		/** The device compromised state. Possible values are "`Compromised`" or "`Not Compromised`". */
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

		/** Common alert information about violated rules that are configured by Google Workspace administrators. */
		ruleViolationInfo?: RuleViolationInfo;
	}

	/** Alerts that get triggered on violations of Data Loss Prevention (DLP) rules. */
	export interface DlpRuleViolationFormProperties {
	}
	export function CreateDlpRuleViolationFormGroup() {
		return new FormGroup<DlpRuleViolationFormProperties>({
		});

	}


	/** Common alert information about violated rules that are configured by Google Workspace administrators. */
	export interface RuleViolationInfo {

		/** Source of the data. */
		dataSource?: RuleViolationInfoDataSource | null;

		/** List of matches that were found in the resource content. */
		matchInfo?: Array<MatchInfo>;

		/** Resource recipients. For Drive, they are grantees that the Drive file was shared with at the time of rule triggering. Valid values include user emails, group emails, domains, or 'anyone' if the file was publicly accessible. If the file was private the recipients list will be empty. For Gmail, they are emails of the users or groups that the Gmail message was sent to. */
		recipients?: Array<string>;

		/** Proto that contains resource information. */
		resourceInfo?: ResourceInfo;

		/** Proto that contains rule information. */
		ruleInfo?: RuleInfo;

		/** Actions suppressed due to other actions with higher priority. */
		suppressedActionTypes?: Array<string>;

		/** Trigger of the rule. */
		trigger?: RuleViolationInfoTrigger | null;

		/** Metadata related to the triggered actions. */
		triggeredActionInfo?: Array<ActionInfo>;

		/** Actions applied as a consequence of the rule being triggered. */
		triggeredActionTypes?: Array<string>;

		/** Email of the user who caused the violation. Value could be empty if not applicable, for example, a violation found by drive continuous scan. */
		triggeringUserEmail?: string | null;
	}

	/** Common alert information about violated rules that are configured by Google Workspace administrators. */
	export interface RuleViolationInfoFormProperties {

		/** Source of the data. */
		dataSource: FormControl<RuleViolationInfoDataSource | null | undefined>,

		/** Trigger of the rule. */
		trigger: FormControl<RuleViolationInfoTrigger | null | undefined>,

		/** Email of the user who caused the violation. Value could be empty if not applicable, for example, a violation found by drive continuous scan. */
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


	/** A takeout operation for the entire domain was initiated by an admin. Derived from audit logs. */
	export interface DomainWideTakeoutInitiated {

		/** The email of the admin who initiated the takeout. */
		email?: string | null;

		/** The takeout request ID. */
		takeoutRequestId?: string | null;
	}

	/** A takeout operation for the entire domain was initiated by an admin. Derived from audit logs. */
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


	/** An incident reported by Google Operations for a Google Workspace application. */
	export interface GoogleOperations {

		/** The list of emails which correspond to the users directly affected by the incident. */
		affectedUserEmails?: Array<string>;

		/** Attachment with application-specific information about an alert. */
		attachmentData?: Attachment;

		/** A detailed, freeform incident description. */
		description?: string | null;

		/** Customer domain for email template personalization. */
		domain?: string | null;

		/** A header to display above the incident message. Typically used to attach a localized notice on the timeline for followup comms translations. */
		header?: string | null;

		/** A one-line incident description. */
		title?: string | null;
	}

	/** An incident reported by Google Operations for a Google Workspace application. */
	export interface GoogleOperationsFormProperties {

		/** A detailed, freeform incident description. */
		description: FormControl<string | null | undefined>,

		/** Customer domain for email template personalization. */
		domain: FormControl<string | null | undefined>,

		/** A header to display above the incident message. Typically used to attach a localized notice on the timeline for followup comms translations. */
		header: FormControl<string | null | undefined>,

		/** A one-line incident description. */
		title: FormControl<string | null | undefined>,
	}
	export function CreateGoogleOperationsFormGroup() {
		return new FormGroup<GoogleOperationsFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			domain: new FormControl<string | null | undefined>(undefined),
			header: new FormControl<string | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response message for an alert feedback listing request. */
	export interface ListAlertFeedbackResponse {

		/** The list of alert feedback. Feedback entries for each alert are ordered by creation time descending. */
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

		/** The token for the next page. If not empty, indicates that there may be more alerts that match the listing request; this value can be used in a subsequent ListAlertsRequest to get alerts continuing from last result of the current list call. */
		nextPageToken?: string | null;
	}

	/** Response message for an alert listing request. */
	export interface ListAlertsResponseFormProperties {

		/** The token for the next page. If not empty, indicates that there may be more alerts that match the listing request; this value can be used in a subsequent ListAlertsRequest to get alerts continuing from last result of the current list call. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListAlertsResponseFormGroup() {
		return new FormGroup<ListAlertsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Proto for all phishing alerts with common payload. Supported types are any of the following: * User reported phishing * User reported spam spike * Suspicious message reported * Phishing reclassification * Malware reclassification * Gmail potential employee spoofing */
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

	/** Proto for all phishing alerts with common payload. Supported types are any of the following: * User reported phishing * User reported spam spike * Suspicious message reported * Phishing reclassification * Malware reclassification * Gmail potential employee spoofing */
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


	/** Alert Created by the MSA team for communications necessary for continued use of Google Workspace Products. */
	export interface MandatoryServiceAnnouncement {

		/** Detailed, freeform text describing the announcement */
		description?: string | null;

		/** One line summary of the announcement */
		title?: string | null;
	}

	/** Alert Created by the MSA team for communications necessary for continued use of Google Workspace Products. */
	export interface MandatoryServiceAnnouncementFormProperties {

		/** Detailed, freeform text describing the announcement */
		description: FormControl<string | null | undefined>,

		/** One line summary of the announcement */
		title: FormControl<string | null | undefined>,
	}
	export function CreateMandatoryServiceAnnouncementFormGroup() {
		return new FormGroup<MandatoryServiceAnnouncementFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Settings for callback notifications. For more details see [Google Workspace Alert Notification](https://developers.google.com/admin-sdk/alertcenter/guides/notifications). */
	export interface Notification {

		/** A reference to a Cloud Pubsub topic. To register for notifications, the owner of the topic must grant `alerts-api-push-notifications@system.gserviceaccount.com` the `projects.topics.publish` permission. */
		cloudPubsubTopic?: CloudPubsubTopic;
	}

	/** Settings for callback notifications. For more details see [Google Workspace Alert Notification](https://developers.google.com/admin-sdk/alertcenter/guides/notifications). */
	export interface NotificationFormProperties {
	}
	export function CreateNotificationFormGroup() {
		return new FormGroup<NotificationFormProperties>({
		});

	}


	/** Alert for a spike in user reported phishing. *Warning*: This type has been deprecated. Use [MailPhishing](/admin-sdk/alertcenter/reference/rest/v1beta1/MailPhishing) instead. */
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

	/** Alert for a spike in user reported phishing. *Warning*: This type has been deprecated. Use [MailPhishing](/admin-sdk/alertcenter/reference/rest/v1beta1/MailPhishing) instead. */
	export interface PhishingSpikeFormProperties {

		/** If `true`, the email originated from within the organization. */
		isInternal: FormControl<boolean | null | undefined>,
	}
	export function CreatePhishingSpikeFormGroup() {
		return new FormGroup<PhishingSpikeFormProperties>({
			isInternal: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Event occurred when primary admin changed in customer's account. The event are being received from insight forwarder */
	export interface PrimaryAdminChangedEvent {

		/** domain in which actioned occurred */
		domain?: string | null;

		/** Email of person who was the primary admin before the action */
		previousAdminEmail?: string | null;

		/** Email of person who is the primary admin after the action */
		updatedAdminEmail?: string | null;
	}

	/** Event occurred when primary admin changed in customer's account. The event are being received from insight forwarder */
	export interface PrimaryAdminChangedEventFormProperties {

		/** domain in which actioned occurred */
		domain: FormControl<string | null | undefined>,

		/** Email of person who was the primary admin before the action */
		previousAdminEmail: FormControl<string | null | undefined>,

		/** Email of person who is the primary admin after the action */
		updatedAdminEmail: FormControl<string | null | undefined>,
	}
	export function CreatePrimaryAdminChangedEventFormGroup() {
		return new FormGroup<PrimaryAdminChangedEventFormProperties>({
			domain: new FormControl<string | null | undefined>(undefined),
			previousAdminEmail: new FormControl<string | null | undefined>(undefined),
			updatedAdminEmail: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Alerts from Reporting Rules configured by Admin. */
	export interface ReportingRule {

		/** Any other associated alert details, for example, AlertConfiguration. */
		alertDetails?: string | null;

		/** Rule name */
		name?: string | null;

		/** Alert Rule query Sample Query query { condition { filter { expected_application_id: 777491262838 expected_event_name: "indexable_content_change" filter_op: IN } } conjunction_operator: OR } */
		query?: string | null;
	}

	/** Alerts from Reporting Rules configured by Admin. */
	export interface ReportingRuleFormProperties {

		/** Any other associated alert details, for example, AlertConfiguration. */
		alertDetails: FormControl<string | null | undefined>,

		/** Rule name */
		name: FormControl<string | null | undefined>,

		/** Alert Rule query Sample Query query { condition { filter { expected_application_id: 777491262838 expected_event_name: "indexable_content_change" filter_op: IN } } conjunction_operator: OR } */
		query: FormControl<string | null | undefined>,
	}
	export function CreateReportingRuleFormGroup() {
		return new FormGroup<ReportingRuleFormProperties>({
			alertDetails: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			query: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Event occurred when SSO Profile created in customer's account. The event are being received from insight forwarder */
	export interface SSOProfileCreatedEvent {

		/** sso profile name which got created */
		inboundSsoProfileName?: string | null;
	}

	/** Event occurred when SSO Profile created in customer's account. The event are being received from insight forwarder */
	export interface SSOProfileCreatedEventFormProperties {

		/** sso profile name which got created */
		inboundSsoProfileName: FormControl<string | null | undefined>,
	}
	export function CreateSSOProfileCreatedEventFormGroup() {
		return new FormGroup<SSOProfileCreatedEventFormProperties>({
			inboundSsoProfileName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Event occurred when SSO Profile deleted in customer's account. The event are being received from insight forwarder */
	export interface SSOProfileDeletedEvent {

		/** sso profile name which got deleted */
		inboundSsoProfileName?: string | null;
	}

	/** Event occurred when SSO Profile deleted in customer's account. The event are being received from insight forwarder */
	export interface SSOProfileDeletedEventFormProperties {

		/** sso profile name which got deleted */
		inboundSsoProfileName: FormControl<string | null | undefined>,
	}
	export function CreateSSOProfileDeletedEventFormGroup() {
		return new FormGroup<SSOProfileDeletedEventFormProperties>({
			inboundSsoProfileName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Event occurred when SSO Profile updated in customer's account. The event are being received from insight forwarder */
	export interface SSOProfileUpdatedEvent {

		/** changes made to sso profile */
		inboundSsoProfileChanges?: string | null;

		/** sso profile name which got updated */
		inboundSsoProfileName?: string | null;
	}

	/** Event occurred when SSO Profile updated in customer's account. The event are being received from insight forwarder */
	export interface SSOProfileUpdatedEventFormProperties {

		/** changes made to sso profile */
		inboundSsoProfileChanges: FormControl<string | null | undefined>,

		/** sso profile name which got updated */
		inboundSsoProfileName: FormControl<string | null | undefined>,
	}
	export function CreateSSOProfileUpdatedEventFormGroup() {
		return new FormGroup<SSOProfileUpdatedEventFormProperties>({
			inboundSsoProfileChanges: new FormControl<string | null | undefined>(undefined),
			inboundSsoProfileName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Alert that is triggered when Sensitive Admin Action occur in customer account. */
	export interface SensitiveAdminAction {

		/** Email of person who performed the action */
		actorEmail?: string | null;

		/** The time at which event occurred */
		eventTime?: string | null;

		/** Event occurred when primary admin changed in customer's account. The event are being received from insight forwarder */
		primaryAdminChangedEvent?: PrimaryAdminChangedEvent;

		/** Event occurred when SSO Profile created in customer's account. The event are being received from insight forwarder */
		ssoProfileCreatedEvent?: SSOProfileCreatedEvent;

		/** Event occurred when SSO Profile deleted in customer's account. The event are being received from insight forwarder */
		ssoProfileDeletedEvent?: SSOProfileDeletedEvent;

		/** Event occurred when SSO Profile updated in customer's account. The event are being received from insight forwarder */
		ssoProfileUpdatedEvent?: SSOProfileUpdatedEvent;

		/** Event occurred when password was reset for super admin in customer's account. The event are being received from insight forwarder */
		superAdminPasswordResetEvent?: SuperAdminPasswordResetEvent;
	}

	/** Alert that is triggered when Sensitive Admin Action occur in customer account. */
	export interface SensitiveAdminActionFormProperties {

		/** Email of person who performed the action */
		actorEmail: FormControl<string | null | undefined>,

		/** The time at which event occurred */
		eventTime: FormControl<string | null | undefined>,
	}
	export function CreateSensitiveAdminActionFormGroup() {
		return new FormGroup<SensitiveAdminActionFormProperties>({
			actorEmail: new FormControl<string | null | undefined>(undefined),
			eventTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Event occurred when password was reset for super admin in customer's account. The event are being received from insight forwarder */
	export interface SuperAdminPasswordResetEvent {

		/** email of person whose password was reset */
		userEmail?: string | null;
	}

	/** Event occurred when password was reset for super admin in customer's account. The event are being received from insight forwarder */
	export interface SuperAdminPasswordResetEventFormProperties {

		/** email of person whose password was reset */
		userEmail: FormControl<string | null | undefined>,
	}
	export function CreateSuperAdminPasswordResetEventFormGroup() {
		return new FormGroup<SuperAdminPasswordResetEventFormProperties>({
			userEmail: new FormControl<string | null | undefined>(undefined),
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


	/** Details for an invalid transfer or forward. */
	export interface TransferError {

		/** User's email address. This may be unavailable if the entity was deleted. */
		email?: string | null;

		/** Type of entity being transferred to. For ring group members, this should always be USER. */
		entityType?: TransferErrorEntityType | null;

		/** Ring group or auto attendant ID. Not set for users. */
		id?: string | null;

		/** Reason for the error. */
		invalidReason?: TransferErrorInvalidReason | null;

		/** User's full name, or the ring group / auto attendant name. This may be unavailable if the entity was deleted. */
		name?: string | null;
	}

	/** Details for an invalid transfer or forward. */
	export interface TransferErrorFormProperties {

		/** User's email address. This may be unavailable if the entity was deleted. */
		email: FormControl<string | null | undefined>,

		/** Type of entity being transferred to. For ring group members, this should always be USER. */
		entityType: FormControl<TransferErrorEntityType | null | undefined>,

		/** Ring group or auto attendant ID. Not set for users. */
		id: FormControl<string | null | undefined>,

		/** Reason for the error. */
		invalidReason: FormControl<TransferErrorInvalidReason | null | undefined>,

		/** User's full name, or the ring group / auto attendant name. This may be unavailable if the entity was deleted. */
		name: FormControl<string | null | undefined>,
	}
	export function CreateTransferErrorFormGroup() {
		return new FormGroup<TransferErrorFormProperties>({
			email: new FormControl<string | null | undefined>(undefined),
			entityType: new FormControl<TransferErrorEntityType | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			invalidReason: new FormControl<TransferErrorInvalidReason | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum TransferErrorEntityType { TRANSFER_ENTITY_TYPE_UNSPECIFIED = 0, TRANSFER_AUTO_ATTENDANT = 1, TRANSFER_RING_GROUP = 2, TRANSFER_USER = 3 }

	export enum TransferErrorInvalidReason { TRANSFER_INVALID_REASON_UNSPECIFIED = 0, TRANSFER_TARGET_DELETED = 1, UNLICENSED = 2, SUSPENDED = 3, NO_PHONE_NUMBER = 4 }


	/** Error related to transferring or forwarding a phone call. */
	export interface TransferMisconfiguration {

		/** Details for each invalid transfer or forward. */
		errors?: Array<TransferError>;
	}

	/** Error related to transferring or forwarding a phone call. */
	export interface TransferMisconfigurationFormProperties {
	}
	export function CreateTransferMisconfigurationFormGroup() {
		return new FormGroup<TransferMisconfigurationFormProperties>({
		});

	}


	/** A request to undelete a specific alert that was marked for deletion. */
	export interface UndeleteAlertRequest {

		/** Optional. The unique identifier of the Google Workspace account of the customer the alert is associated with. The `customer_id` must have the initial "C" stripped (for example, `046psxkn`). Inferred from the caller identity if not provided. [Find your customer ID](https://support.google.com/cloudidentity/answer/10070793). */
		customerId?: string | null;
	}

	/** A request to undelete a specific alert that was marked for deletion. */
	export interface UndeleteAlertRequestFormProperties {

		/** Optional. The unique identifier of the Google Workspace account of the customer the alert is associated with. The `customer_id` must have the initial "C" stripped (for example, `046psxkn`). Inferred from the caller identity if not provided. [Find your customer ID](https://support.google.com/cloudidentity/answer/10070793). */
		customerId: FormControl<string | null | undefined>,
	}
	export function CreateUndeleteAlertRequestFormGroup() {
		return new FormGroup<UndeleteAlertRequestFormProperties>({
			customerId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Alerts from UserChanges bucket Rules for predefined rules which contain the below rules. Suspended user made active New user Added User suspended (by admin) User granted admin privileges User admin privileges revoked User deleted Users password changed */
	export interface UserChanges {

		/** Rule name */
		name?: string | null;
	}

	/** Alerts from UserChanges bucket Rules for predefined rules which contain the below rules. Suspended user made active New user Added User suspended (by admin) User granted admin privileges User admin privileges revoked User deleted Users password changed */
	export interface UserChangesFormProperties {

		/** Rule name */
		name: FormControl<string | null | undefined>,
	}
	export function CreateUserChangesFormGroup() {
		return new FormGroup<UserChangesFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An alert triggered when Google Voice configuration becomes invalid, generally due to an external entity being modified or deleted. */
	export interface VoiceMisconfiguration {

		/** Name of the entity whose configuration is now invalid. */
		entityName?: string | null;

		/** Type of the entity whose configuration is now invalid. */
		entityType?: VoiceMisconfigurationEntityType | null;

		/** Link that the admin can follow to fix the issue. */
		fixUri?: string | null;

		/** Error related to transferring or forwarding a phone call. */
		membersMisconfiguration?: TransferMisconfiguration;

		/** Error related to transferring or forwarding a phone call. */
		transferMisconfiguration?: TransferMisconfiguration;

		/** Issue(s) with sending to voicemail. */
		voicemailMisconfiguration?: VoicemailMisconfiguration;
	}

	/** An alert triggered when Google Voice configuration becomes invalid, generally due to an external entity being modified or deleted. */
	export interface VoiceMisconfigurationFormProperties {

		/** Name of the entity whose configuration is now invalid. */
		entityName: FormControl<string | null | undefined>,

		/** Type of the entity whose configuration is now invalid. */
		entityType: FormControl<VoiceMisconfigurationEntityType | null | undefined>,

		/** Link that the admin can follow to fix the issue. */
		fixUri: FormControl<string | null | undefined>,
	}
	export function CreateVoiceMisconfigurationFormGroup() {
		return new FormGroup<VoiceMisconfigurationFormProperties>({
			entityName: new FormControl<string | null | undefined>(undefined),
			entityType: new FormControl<VoiceMisconfigurationEntityType | null | undefined>(undefined),
			fixUri: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum VoiceMisconfigurationEntityType { ENTITY_TYPE_UNSPECIFIED = 0, AUTO_ATTENDANT = 1, RING_GROUP = 2 }


	/** Issue(s) with sending to voicemail. */
	export interface VoicemailMisconfiguration {

		/** Issue(s) with voicemail recipients. */
		errors?: Array<VoicemailRecipientError>;
	}

	/** Issue(s) with sending to voicemail. */
	export interface VoicemailMisconfigurationFormProperties {
	}
	export function CreateVoicemailMisconfigurationFormGroup() {
		return new FormGroup<VoicemailMisconfigurationFormProperties>({
		});

	}


	/** Issue(s) with a voicemail recipient. */
	export interface VoicemailRecipientError {

		/** Email address of the invalid recipient. This may be unavailable if the recipient was deleted. */
		email?: string | null;

		/** Reason for the error. */
		invalidReason?: VoicemailRecipientErrorInvalidReason | null;
	}

	/** Issue(s) with a voicemail recipient. */
	export interface VoicemailRecipientErrorFormProperties {

		/** Email address of the invalid recipient. This may be unavailable if the recipient was deleted. */
		email: FormControl<string | null | undefined>,

		/** Reason for the error. */
		invalidReason: FormControl<VoicemailRecipientErrorInvalidReason | null | undefined>,
	}
	export function CreateVoicemailRecipientErrorFormGroup() {
		return new FormGroup<VoicemailRecipientErrorFormProperties>({
			email: new FormControl<string | null | undefined>(undefined),
			invalidReason: new FormControl<VoicemailRecipientErrorInvalidReason | null | undefined>(undefined),
		});

	}

	export enum VoicemailRecipientErrorInvalidReason { EMAIL_INVALID_REASON_UNSPECIFIED = 0, OUT_OF_QUOTA = 1, RECIPIENT_DELETED = 2 }

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Lists the alerts.
		 * Get v1beta1/alerts
		 * @param {string} customerId Optional. The unique identifier of the Google Workspace account of the customer the alerts are associated with. The `customer_id` must have the initial "C" stripped (for example, `046psxkn`). Inferred from the caller identity if not provided. [Find your customer ID](https://support.google.com/cloudidentity/answer/10070793).
		 * @param {string} filter Optional. A query string for filtering alert results. For more details, see [Query filters](https://developers.google.com/admin-sdk/alertcenter/guides/query-filters) and [Supported query filter fields](https://developers.google.com/admin-sdk/alertcenter/reference/filter-fields#alerts.list).
		 * @param {string} orderBy Optional. The sort order of the list results. If not specified results may be returned in arbitrary order. You can sort the results in descending order based on the creation timestamp using `order_by="create_time desc"`. Currently, supported sorting are `create_time asc`, `create_time desc`, `update_time desc`
		 * @param {number} pageSize Optional. The requested page size. Server may return fewer items than requested. If unspecified, server picks an appropriate default.
		 * @param {string} pageToken Optional. A token identifying a page of results the server should return. If empty, a new iteration is started. To continue an iteration, pass in the value from the previous ListAlertsResponse's next_page_token field.
		 * @return {ListAlertsResponse} Successful response
		 */
		Alertcenter_alerts_list(customerId: string | null | undefined, filter: string | null | undefined, orderBy: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListAlertsResponse> {
			return this.http.get<ListAlertsResponse>(this.baseUri + 'v1beta1/alerts?customerId=' + (customerId == null ? '' : encodeURIComponent(customerId)) + '&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&orderBy=' + (orderBy == null ? '' : encodeURIComponent(orderBy)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Marks the specified alert for deletion. An alert that has been marked for deletion is removed from Alert Center after 30 days. Marking an alert for deletion has no effect on an alert which has already been marked for deletion. Attempting to mark a nonexistent alert for deletion results in a `NOT_FOUND` error.
		 * Delete v1beta1/alerts/{alertId}
		 * @param {string} alertId Required. The identifier of the alert to delete.
		 * @param {string} customerId Optional. The unique identifier of the Google Workspace account of the customer the alert is associated with. The `customer_id` must have the initial "C" stripped (for example, `046psxkn`). Inferred from the caller identity if not provided. [Find your customer ID](https://support.google.com/cloudidentity/answer/10070793).
		 * @return {Empty} Successful response
		 */
		Alertcenter_alerts_delete(alertId: string, customerId: string | null | undefined): Observable<Empty> {
			return this.http.delete<Empty>(this.baseUri + 'v1beta1/alerts/' + (alertId == null ? '' : encodeURIComponent(alertId)) + '&customerId=' + (customerId == null ? '' : encodeURIComponent(customerId)), {});
		}

		/**
		 * Gets the specified alert. Attempting to get a nonexistent alert returns `NOT_FOUND` error.
		 * Get v1beta1/alerts/{alertId}
		 * @param {string} alertId Required. The identifier of the alert to retrieve.
		 * @param {string} customerId Optional. The unique identifier of the Google Workspace account of the customer the alert is associated with. The `customer_id` must have the initial "C" stripped (for example, `046psxkn`). Inferred from the caller identity if not provided. [Find your customer ID](https://support.google.com/cloudidentity/answer/10070793).
		 * @return {Alert} Successful response
		 */
		Alertcenter_alerts_get(alertId: string, customerId: string | null | undefined): Observable<Alert> {
			return this.http.get<Alert>(this.baseUri + 'v1beta1/alerts/' + (alertId == null ? '' : encodeURIComponent(alertId)) + '&customerId=' + (customerId == null ? '' : encodeURIComponent(customerId)), {});
		}

		/**
		 * Lists all the feedback for an alert. Attempting to list feedbacks for a non-existent alert returns `NOT_FOUND` error.
		 * Get v1beta1/alerts/{alertId}/feedback
		 * @param {string} alertId Required. The alert identifier. The "-" wildcard could be used to represent all alerts.
		 * @param {string} customerId Optional. The unique identifier of the Google Workspace account of the customer the alert is associated with. The `customer_id` must have the initial "C" stripped (for example, `046psxkn`). Inferred from the caller identity if not provided. [Find your customer ID](https://support.google.com/cloudidentity/answer/10070793).
		 * @param {string} filter Optional. A query string for filtering alert feedback results. For more details, see [Query filters](https://developers.google.com/admin-sdk/alertcenter/guides/query-filters) and [Supported query filter fields](https://developers.google.com/admin-sdk/alertcenter/reference/filter-fields#alerts.feedback.list).
		 * @return {ListAlertFeedbackResponse} Successful response
		 */
		Alertcenter_alerts_feedback_list(alertId: string, customerId: string | null | undefined, filter: string | null | undefined): Observable<ListAlertFeedbackResponse> {
			return this.http.get<ListAlertFeedbackResponse>(this.baseUri + 'v1beta1/alerts/' + (alertId == null ? '' : encodeURIComponent(alertId)) + '/feedback&customerId=' + (customerId == null ? '' : encodeURIComponent(customerId)) + '&filter=' + (filter == null ? '' : encodeURIComponent(filter)), {});
		}

		/**
		 * Creates new feedback for an alert. Attempting to create a feedback for a non-existent alert returns `NOT_FOUND` error. Attempting to create a feedback for an alert that is marked for deletion returns `FAILED_PRECONDITION' error.
		 * Post v1beta1/alerts/{alertId}/feedback
		 * @param {string} alertId Required. The identifier of the alert this feedback belongs to.
		 * @param {string} customerId Optional. The unique identifier of the Google Workspace account of the customer the alert is associated with. The `customer_id` must have the initial "C" stripped (for example, `046psxkn`). Inferred from the caller identity if not provided. [Find your customer ID](https://support.google.com/cloudidentity/answer/10070793).
		 * @return {AlertFeedback} Successful response
		 */
		Alertcenter_alerts_feedback_create(alertId: string, customerId: string | null | undefined, requestBody: AlertFeedback): Observable<AlertFeedback> {
			return this.http.post<AlertFeedback>(this.baseUri + 'v1beta1/alerts/' + (alertId == null ? '' : encodeURIComponent(alertId)) + '/feedback&customerId=' + (customerId == null ? '' : encodeURIComponent(customerId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns the metadata of an alert. Attempting to get metadata for a non-existent alert returns `NOT_FOUND` error.
		 * Get v1beta1/alerts/{alertId}/metadata
		 * @param {string} alertId Required. The identifier of the alert this metadata belongs to.
		 * @param {string} customerId Optional. The unique identifier of the Google Workspace account of the customer the alert metadata is associated with. The `customer_id` must have the initial "C" stripped (for example, `046psxkn`). Inferred from the caller identity if not provided. [Find your customer ID](https://support.google.com/cloudidentity/answer/10070793).
		 * @return {AlertMetadata} Successful response
		 */
		Alertcenter_alerts_getMetadata(alertId: string, customerId: string | null | undefined): Observable<AlertMetadata> {
			return this.http.get<AlertMetadata>(this.baseUri + 'v1beta1/alerts/' + (alertId == null ? '' : encodeURIComponent(alertId)) + '/metadata&customerId=' + (customerId == null ? '' : encodeURIComponent(customerId)), {});
		}

		/**
		 * Restores, or "undeletes", an alert that was marked for deletion within the past 30 days. Attempting to undelete an alert which was marked for deletion over 30 days ago (which has been removed from the Alert Center database) or a nonexistent alert returns a `NOT_FOUND` error. Attempting to undelete an alert which has not been marked for deletion has no effect.
		 * Post v1beta1/alerts/{alertId}:undelete
		 * @param {string} alertId Required. The identifier of the alert to undelete.
		 * @return {Alert} Successful response
		 */
		Alertcenter_alerts_undelete(alertId: string, requestBody: UndeleteAlertRequest): Observable<Alert> {
			return this.http.post<Alert>(this.baseUri + 'v1beta1/alerts/' + (alertId == null ? '' : encodeURIComponent(alertId)) + ':undelete', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Performs batch delete operation on alerts.
		 * Post v1beta1/alerts:batchDelete
		 * @return {BatchDeleteAlertsResponse} Successful response
		 */
		Alertcenter_alerts_batchDelete(requestBody: BatchDeleteAlertsRequest): Observable<BatchDeleteAlertsResponse> {
			return this.http.post<BatchDeleteAlertsResponse>(this.baseUri + 'v1beta1/alerts:batchDelete', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Performs batch undelete operation on alerts.
		 * Post v1beta1/alerts:batchUndelete
		 * @return {BatchUndeleteAlertsResponse} Successful response
		 */
		Alertcenter_alerts_batchUndelete(requestBody: BatchUndeleteAlertsRequest): Observable<BatchUndeleteAlertsResponse> {
			return this.http.post<BatchUndeleteAlertsResponse>(this.baseUri + 'v1beta1/alerts:batchUndelete', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns customer-level settings.
		 * Get v1beta1/settings
		 * @param {string} customerId Optional. The unique identifier of the Google Workspace account of the customer the alert settings are associated with. The `customer_id` must/ have the initial "C" stripped (for example, `046psxkn`). Inferred from the caller identity if not provided. [Find your customer ID](https://support.google.com/cloudidentity/answer/10070793).
		 * @return {Settings} Successful response
		 */
		Alertcenter_getSettings(customerId: string | null | undefined): Observable<Settings> {
			return this.http.get<Settings>(this.baseUri + 'v1beta1/settings?customerId=' + (customerId == null ? '' : encodeURIComponent(customerId)), {});
		}

		/**
		 * Updates the customer-level settings.
		 * Patch v1beta1/settings
		 * @param {string} customerId Optional. The unique identifier of the Google Workspace account of the customer the alert settings are associated with. The `customer_id` must have the initial "C" stripped (for example, `046psxkn`). Inferred from the caller identity if not provided. [Find your customer ID](https://support.google.com/cloudidentity/answer/10070793).
		 * @return {Settings} Successful response
		 */
		Alertcenter_updateSettings(customerId: string | null | undefined, requestBody: Settings): Observable<Settings> {
			return this.http.patch<Settings>(this.baseUri + 'v1beta1/settings?customerId=' + (customerId == null ? '' : encodeURIComponent(customerId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

}

