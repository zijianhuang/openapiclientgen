import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** Attachment with specific information about the issue. */
	export interface GoogleCloudAdvisorynotificationsV1Attachment {

		/** A representation of a CSV file attachment, as a list of column headers and a list of data rows. */
		csv?: GoogleCloudAdvisorynotificationsV1Csv;

		/** The title of the attachment. */
		displayName?: string | null;
	}

	/** Attachment with specific information about the issue. */
	export interface GoogleCloudAdvisorynotificationsV1AttachmentFormProperties {

		/** The title of the attachment. */
		displayName: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudAdvisorynotificationsV1AttachmentFormGroup() {
		return new FormGroup<GoogleCloudAdvisorynotificationsV1AttachmentFormProperties>({
			displayName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A representation of a CSV file attachment, as a list of column headers and a list of data rows. */
	export interface GoogleCloudAdvisorynotificationsV1Csv {

		/** The list of data rows in a CSV file, as string arrays rather than as a single comma-separated string. */
		dataRows?: Array<GoogleCloudAdvisorynotificationsV1CsvCsvRow>;

		/** The list of headers for data columns in a CSV file. */
		headers?: Array<string>;
	}

	/** A representation of a CSV file attachment, as a list of column headers and a list of data rows. */
	export interface GoogleCloudAdvisorynotificationsV1CsvFormProperties {
	}
	export function CreateGoogleCloudAdvisorynotificationsV1CsvFormGroup() {
		return new FormGroup<GoogleCloudAdvisorynotificationsV1CsvFormProperties>({
		});

	}


	/** A representation of a single data row in a CSV file. */
	export interface GoogleCloudAdvisorynotificationsV1CsvCsvRow {

		/** The data entries in a CSV file row, as a string array rather than a single comma-separated string. */
		entries?: Array<string>;
	}

	/** A representation of a single data row in a CSV file. */
	export interface GoogleCloudAdvisorynotificationsV1CsvCsvRowFormProperties {
	}
	export function CreateGoogleCloudAdvisorynotificationsV1CsvCsvRowFormGroup() {
		return new FormGroup<GoogleCloudAdvisorynotificationsV1CsvCsvRowFormProperties>({
		});

	}


	/** Response of ListNotifications endpoint. */
	export interface GoogleCloudAdvisorynotificationsV1ListNotificationsResponse {

		/** A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
		nextPageToken?: string | null;

		/** List of notifications under a given parent. */
		notifications?: Array<GoogleCloudAdvisorynotificationsV1Notification>;

		/** Estimation of a total number of notifications. */
		totalSize?: number | null;
	}

	/** Response of ListNotifications endpoint. */
	export interface GoogleCloudAdvisorynotificationsV1ListNotificationsResponseFormProperties {

		/** A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
		nextPageToken: FormControl<string | null | undefined>,

		/** Estimation of a total number of notifications. */
		totalSize: FormControl<number | null | undefined>,
	}
	export function CreateGoogleCloudAdvisorynotificationsV1ListNotificationsResponseFormGroup() {
		return new FormGroup<GoogleCloudAdvisorynotificationsV1ListNotificationsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
			totalSize: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** A notification object for notifying customers about security and privacy issues. */
	export interface GoogleCloudAdvisorynotificationsV1Notification {

		/** Output only. Time the notification was created. */
		createTime?: string | null;

		/** A list of messages in the notification. */
		messages?: Array<GoogleCloudAdvisorynotificationsV1Message>;

		/** The resource name of the notification. Format: organizations/{organization}/locations/{location}/notifications/{notification} or projects/{project}/locations/{location}/notifications/{notification}. */
		name?: string | null;

		/** Type of notification */
		notificationType?: GoogleCloudAdvisorynotificationsV1NotificationNotificationType | null;

		/** A subject line of a notification. */
		subject?: GoogleCloudAdvisorynotificationsV1Subject;
	}

	/** A notification object for notifying customers about security and privacy issues. */
	export interface GoogleCloudAdvisorynotificationsV1NotificationFormProperties {

		/** Output only. Time the notification was created. */
		createTime: FormControl<string | null | undefined>,

		/** The resource name of the notification. Format: organizations/{organization}/locations/{location}/notifications/{notification} or projects/{project}/locations/{location}/notifications/{notification}. */
		name: FormControl<string | null | undefined>,

		/** Type of notification */
		notificationType: FormControl<GoogleCloudAdvisorynotificationsV1NotificationNotificationType | null | undefined>,
	}
	export function CreateGoogleCloudAdvisorynotificationsV1NotificationFormGroup() {
		return new FormGroup<GoogleCloudAdvisorynotificationsV1NotificationFormProperties>({
			createTime: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			notificationType: new FormControl<GoogleCloudAdvisorynotificationsV1NotificationNotificationType | null | undefined>(undefined),
		});

	}


	/** A message which contains notification details. */
	export interface GoogleCloudAdvisorynotificationsV1Message {

		/** The attachments to download. */
		attachments?: Array<GoogleCloudAdvisorynotificationsV1Attachment>;

		/** A message body containing text. */
		body?: GoogleCloudAdvisorynotificationsV1MessageBody;

		/** The Message creation timestamp. */
		createTime?: string | null;

		/** Time when Message was localized */
		localizationTime?: string | null;
	}

	/** A message which contains notification details. */
	export interface GoogleCloudAdvisorynotificationsV1MessageFormProperties {

		/** The Message creation timestamp. */
		createTime: FormControl<string | null | undefined>,

		/** Time when Message was localized */
		localizationTime: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudAdvisorynotificationsV1MessageFormGroup() {
		return new FormGroup<GoogleCloudAdvisorynotificationsV1MessageFormProperties>({
			createTime: new FormControl<string | null | undefined>(undefined),
			localizationTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A message body containing text. */
	export interface GoogleCloudAdvisorynotificationsV1MessageBody {

		/** A text object containing the English text and its localized copies. */
		text?: GoogleCloudAdvisorynotificationsV1Text;
	}

	/** A message body containing text. */
	export interface GoogleCloudAdvisorynotificationsV1MessageBodyFormProperties {
	}
	export function CreateGoogleCloudAdvisorynotificationsV1MessageBodyFormGroup() {
		return new FormGroup<GoogleCloudAdvisorynotificationsV1MessageBodyFormProperties>({
		});

	}


	/** A text object containing the English text and its localized copies. */
	export interface GoogleCloudAdvisorynotificationsV1Text {

		/** The English copy. */
		enText?: string | null;

		/** Status of the localization. */
		localizationState?: GoogleCloudAdvisorynotificationsV1TextLocalizationState | null;

		/** The requested localized copy (if applicable). */
		localizedText?: string | null;
	}

	/** A text object containing the English text and its localized copies. */
	export interface GoogleCloudAdvisorynotificationsV1TextFormProperties {

		/** The English copy. */
		enText: FormControl<string | null | undefined>,

		/** Status of the localization. */
		localizationState: FormControl<GoogleCloudAdvisorynotificationsV1TextLocalizationState | null | undefined>,

		/** The requested localized copy (if applicable). */
		localizedText: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudAdvisorynotificationsV1TextFormGroup() {
		return new FormGroup<GoogleCloudAdvisorynotificationsV1TextFormProperties>({
			enText: new FormControl<string | null | undefined>(undefined),
			localizationState: new FormControl<GoogleCloudAdvisorynotificationsV1TextLocalizationState | null | undefined>(undefined),
			localizedText: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum GoogleCloudAdvisorynotificationsV1TextLocalizationState { LOCALIZATION_STATE_UNSPECIFIED = 0, LOCALIZATION_STATE_NOT_APPLICABLE = 1, LOCALIZATION_STATE_PENDING = 2, LOCALIZATION_STATE_COMPLETED = 3 }

	export enum GoogleCloudAdvisorynotificationsV1NotificationNotificationType { NOTIFICATION_TYPE_UNSPECIFIED = 0, NOTIFICATION_TYPE_SECURITY_PRIVACY_ADVISORY = 1, NOTIFICATION_TYPE_SENSITIVE_ACTIONS = 2, NOTIFICATION_TYPE_SECURITY_MSA = 3, NOTIFICATION_TYPE_THREAT_HORIZONS = 4 }


	/** A subject line of a notification. */
	export interface GoogleCloudAdvisorynotificationsV1Subject {

		/** A text object containing the English text and its localized copies. */
		text?: GoogleCloudAdvisorynotificationsV1Text;
	}

	/** A subject line of a notification. */
	export interface GoogleCloudAdvisorynotificationsV1SubjectFormProperties {
	}
	export function CreateGoogleCloudAdvisorynotificationsV1SubjectFormGroup() {
		return new FormGroup<GoogleCloudAdvisorynotificationsV1SubjectFormProperties>({
		});

	}


	/** Settings for each NotificationType. */
	export interface GoogleCloudAdvisorynotificationsV1NotificationSettings {

		/** Whether the associated NotificationType is enabled. */
		enabled?: boolean | null;
	}

	/** Settings for each NotificationType. */
	export interface GoogleCloudAdvisorynotificationsV1NotificationSettingsFormProperties {

		/** Whether the associated NotificationType is enabled. */
		enabled: FormControl<boolean | null | undefined>,
	}
	export function CreateGoogleCloudAdvisorynotificationsV1NotificationSettingsFormGroup() {
		return new FormGroup<GoogleCloudAdvisorynotificationsV1NotificationSettingsFormProperties>({
			enabled: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Settings for Advisory Notifications. */
	export interface GoogleCloudAdvisorynotificationsV1Settings {

		/** Required. Fingerprint for optimistic concurrency returned in Get requests. Must be provided for Update requests. If the value provided does not match the value known to the server, ABORTED will be thrown, and the client should retry the read-modify-write cycle. */
		etag?: string | null;

		/** Identifier. The resource name of the settings to retrieve. Format: organizations/{organization}/locations/{location}/settings. */
		name?: string | null;

		/** Required. Map of each notification type and its settings to get/set all settings at once. The server will validate the value for each notification type. */
		notificationSettings?: {[id: string]: GoogleCloudAdvisorynotificationsV1NotificationSettings };
	}

	/** Settings for Advisory Notifications. */
	export interface GoogleCloudAdvisorynotificationsV1SettingsFormProperties {

		/** Required. Fingerprint for optimistic concurrency returned in Get requests. Must be provided for Update requests. If the value provided does not match the value known to the server, ABORTED will be thrown, and the client should retry the read-modify-write cycle. */
		etag: FormControl<string | null | undefined>,

		/** Identifier. The resource name of the settings to retrieve. Format: organizations/{organization}/locations/{location}/settings. */
		name: FormControl<string | null | undefined>,

		/** Required. Map of each notification type and its settings to get/set all settings at once. The server will validate the value for each notification type. */
		notificationSettings: FormControl<{[id: string]: GoogleCloudAdvisorynotificationsV1NotificationSettings } | null | undefined>,
	}
	export function CreateGoogleCloudAdvisorynotificationsV1SettingsFormGroup() {
		return new FormGroup<GoogleCloudAdvisorynotificationsV1SettingsFormProperties>({
			etag: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			notificationSettings: new FormControl<{[id: string]: GoogleCloudAdvisorynotificationsV1NotificationSettings } | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Gets a notification.
		 * Get v1/{name}
		 * @param {string} name Required. A name of the notification to retrieve. Format: organizations/{organization}/locations/{location}/notifications/{notification} or projects/{projects}/locations/{location}/notifications/{notification}.
		 * @param {string} languageCode ISO code for requested localization language. If unset, will be interpereted as "en". If the requested language is valid, but not supported for this notification, English will be returned with an "Not applicable" LocalizationState. If the ISO code is invalid (i.e. not a real language), this RPC will throw an error.
		 * @return {GoogleCloudAdvisorynotificationsV1Notification} Successful response
		 */
		Advisorynotifications_projects_locations_notifications_get(name: string, languageCode: string | null | undefined): Observable<GoogleCloudAdvisorynotificationsV1Notification> {
			return this.http.get<GoogleCloudAdvisorynotificationsV1Notification>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + '&languageCode=' + (languageCode == null ? '' : encodeURIComponent(languageCode)), {});
		}

		/**
		 * Update notification settings.
		 * Patch v1/{name}
		 * @param {string} name Identifier. The resource name of the settings to retrieve. Format: organizations/{organization}/locations/{location}/settings.
		 * @return {GoogleCloudAdvisorynotificationsV1Settings} Successful response
		 */
		Advisorynotifications_organizations_locations_updateSettings(name: string, requestBody: GoogleCloudAdvisorynotificationsV1Settings): Observable<GoogleCloudAdvisorynotificationsV1Settings> {
			return this.http.patch<GoogleCloudAdvisorynotificationsV1Settings>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists notifications under a given parent.
		 * Get v1/{parent}/notifications
		 * @param {string} parent Required. The parent, which owns this collection of notifications. Must be of the form "organizations/{organization}/locations/{location}" or "projects/{project}/locations/{location}"
		 * @param {string} languageCode ISO code for requested localization language. If unset, will be interpereted as "en". If the requested language is valid, but not supported for this notification, English will be returned with an "Not applicable" LocalizationState. If the ISO code is invalid (i.e. not a real language), this RPC will throw an error.
		 * @param {number} pageSize The maximum number of notifications to return. The service may return fewer than this value. If unspecified or equal to 0, at most 50 notifications will be returned. The maximum value is 50; values above 50 will be coerced to 50.
		 * @param {string} pageToken A page token returned from a previous request. When paginating, all other parameters provided in the request must match the call that returned the page token.
		 * @param {Advisorynotifications_projects_locations_notifications_listView} view Specifies which parts of the notification resource should be returned in the response.
		 * @return {GoogleCloudAdvisorynotificationsV1ListNotificationsResponse} Successful response
		 */
		Advisorynotifications_projects_locations_notifications_list(parent: string, languageCode: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined, view: Advisorynotifications_projects_locations_notifications_listView | null | undefined): Observable<GoogleCloudAdvisorynotificationsV1ListNotificationsResponse> {
			return this.http.get<GoogleCloudAdvisorynotificationsV1ListNotificationsResponse>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/notifications&languageCode=' + (languageCode == null ? '' : encodeURIComponent(languageCode)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '&view=' + view, {});
		}
	}

	export enum Advisorynotifications_projects_locations_notifications_listView { NOTIFICATION_VIEW_UNSPECIFIED = 0, BASIC = 1, FULL = 2 }

}

