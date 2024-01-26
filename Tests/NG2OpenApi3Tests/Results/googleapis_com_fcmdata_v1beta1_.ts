import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** Message delivery data for a given date, app, and analytics label combination. */
	export interface GoogleFirebaseFcmDataV1beta1AndroidDeliveryData {

		/** The analytics label associated with the messages sent. All messages sent without an analytics label will be grouped together in a single entry. */
		analyticsLabel?: string | null;

		/** The app ID to which the messages were sent. */
		appId?: string | null;

		/** Data detailing messaging delivery */
		data?: GoogleFirebaseFcmDataV1beta1Data;

		/** Represents a whole or partial calendar date, such as a birthday. The time of day and time zone are either specified elsewhere or are insignificant. The date is relative to the Gregorian Calendar. This can represent one of the following: * A full date, with non-zero year, month, and day values. * A month and day, with a zero year (for example, an anniversary). * A year on its own, with a zero month and a zero day. * A year and month, with a zero day (for example, a credit card expiration date). Related types: * google.type.TimeOfDay * google.type.DateTime * google.protobuf.Timestamp */
		date?: GoogleTypeDate;
	}

	/** Message delivery data for a given date, app, and analytics label combination. */
	export interface GoogleFirebaseFcmDataV1beta1AndroidDeliveryDataFormProperties {

		/** The analytics label associated with the messages sent. All messages sent without an analytics label will be grouped together in a single entry. */
		analyticsLabel: FormControl<string | null | undefined>,

		/** The app ID to which the messages were sent. */
		appId: FormControl<string | null | undefined>,
	}
	export function CreateGoogleFirebaseFcmDataV1beta1AndroidDeliveryDataFormGroup() {
		return new FormGroup<GoogleFirebaseFcmDataV1beta1AndroidDeliveryDataFormProperties>({
			analyticsLabel: new FormControl<string | null | undefined>(undefined),
			appId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Data detailing messaging delivery */
	export interface GoogleFirebaseFcmDataV1beta1Data {

		/** Count of messages accepted by FCM intended to Android devices. The targeted device must have opted in to the collection of usage and diagnostic information. */
		countMessagesAccepted?: string | null;

		/** Overview of delivery performance for messages that were successfully delivered. All percentages are calculated with countMessagesAccepted as the denominator. These categories are not mutually exclusive; a message can be delayed for multiple reasons. */
		deliveryPerformancePercents?: GoogleFirebaseFcmDataV1beta1DeliveryPerformancePercents;

		/** Additional information about message delivery. All percentages are calculated with countMessagesAccepted as the denominator. */
		messageInsightPercents?: GoogleFirebaseFcmDataV1beta1MessageInsightPercents;

		/** Percentage breakdown of message delivery outcomes. These categories are mutually exclusive. All percentages are calculated with countMessagesAccepted as the denominator. These categories may not account for all message outcomes. */
		messageOutcomePercents?: GoogleFirebaseFcmDataV1beta1MessageOutcomePercents;
	}

	/** Data detailing messaging delivery */
	export interface GoogleFirebaseFcmDataV1beta1DataFormProperties {

		/** Count of messages accepted by FCM intended to Android devices. The targeted device must have opted in to the collection of usage and diagnostic information. */
		countMessagesAccepted: FormControl<string | null | undefined>,
	}
	export function CreateGoogleFirebaseFcmDataV1beta1DataFormGroup() {
		return new FormGroup<GoogleFirebaseFcmDataV1beta1DataFormProperties>({
			countMessagesAccepted: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Overview of delivery performance for messages that were successfully delivered. All percentages are calculated with countMessagesAccepted as the denominator. These categories are not mutually exclusive; a message can be delayed for multiple reasons. */
	export interface GoogleFirebaseFcmDataV1beta1DeliveryPerformancePercents {

		/** The percentage of accepted messages that were delayed because the device was in doze mode. Only [normal priority messages](https://firebase.google.com/docs/cloud-messaging/concept-options#setting-the-priority-of-a-message) should be delayed due to doze mode. */
		delayedDeviceDoze?: number | null;

		/** The percentage of accepted messages that were delayed because the target device was not connected at the time of sending. These messages were eventually delivered when the device reconnected. */
		delayedDeviceOffline?: number | null;

		/** The percentage of accepted messages that were delayed due to message throttling, such as [collapsible message throttling](https://firebase.google.com/docs/cloud-messaging/concept-options#collapsible_throttling) or [maximum message rate throttling](https://firebase.google.com/docs/cloud-messaging/concept-options#device_throttling). */
		delayedMessageThrottled?: number | null;

		/** The percentage of accepted messages that were delayed because the intended device user-profile was [stopped](https://firebase.google.com/docs/cloud-messaging/android/receive#handling_messages) on the target device at the time of the send. The messages were eventually delivered when the user-profile was started again. */
		delayedUserStopped?: number | null;

		/** The percentage of accepted messages that were delivered to the device without delay from the FCM system. */
		deliveredNoDelay?: number | null;
	}

	/** Overview of delivery performance for messages that were successfully delivered. All percentages are calculated with countMessagesAccepted as the denominator. These categories are not mutually exclusive; a message can be delayed for multiple reasons. */
	export interface GoogleFirebaseFcmDataV1beta1DeliveryPerformancePercentsFormProperties {

		/** The percentage of accepted messages that were delayed because the device was in doze mode. Only [normal priority messages](https://firebase.google.com/docs/cloud-messaging/concept-options#setting-the-priority-of-a-message) should be delayed due to doze mode. */
		delayedDeviceDoze: FormControl<number | null | undefined>,

		/** The percentage of accepted messages that were delayed because the target device was not connected at the time of sending. These messages were eventually delivered when the device reconnected. */
		delayedDeviceOffline: FormControl<number | null | undefined>,

		/** The percentage of accepted messages that were delayed due to message throttling, such as [collapsible message throttling](https://firebase.google.com/docs/cloud-messaging/concept-options#collapsible_throttling) or [maximum message rate throttling](https://firebase.google.com/docs/cloud-messaging/concept-options#device_throttling). */
		delayedMessageThrottled: FormControl<number | null | undefined>,

		/** The percentage of accepted messages that were delayed because the intended device user-profile was [stopped](https://firebase.google.com/docs/cloud-messaging/android/receive#handling_messages) on the target device at the time of the send. The messages were eventually delivered when the user-profile was started again. */
		delayedUserStopped: FormControl<number | null | undefined>,

		/** The percentage of accepted messages that were delivered to the device without delay from the FCM system. */
		deliveredNoDelay: FormControl<number | null | undefined>,
	}
	export function CreateGoogleFirebaseFcmDataV1beta1DeliveryPerformancePercentsFormGroup() {
		return new FormGroup<GoogleFirebaseFcmDataV1beta1DeliveryPerformancePercentsFormProperties>({
			delayedDeviceDoze: new FormControl<number | null | undefined>(undefined),
			delayedDeviceOffline: new FormControl<number | null | undefined>(undefined),
			delayedMessageThrottled: new FormControl<number | null | undefined>(undefined),
			delayedUserStopped: new FormControl<number | null | undefined>(undefined),
			deliveredNoDelay: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Additional information about message delivery. All percentages are calculated with countMessagesAccepted as the denominator. */
	export interface GoogleFirebaseFcmDataV1beta1MessageInsightPercents {

		/** The percentage of accepted messages that had their priority lowered from high to normal. See [documentation for setting message priority](https://firebase.google.com/docs/cloud-messaging/android/message-priority). */
		priorityLowered?: number | null;
	}

	/** Additional information about message delivery. All percentages are calculated with countMessagesAccepted as the denominator. */
	export interface GoogleFirebaseFcmDataV1beta1MessageInsightPercentsFormProperties {

		/** The percentage of accepted messages that had their priority lowered from high to normal. See [documentation for setting message priority](https://firebase.google.com/docs/cloud-messaging/android/message-priority). */
		priorityLowered: FormControl<number | null | undefined>,
	}
	export function CreateGoogleFirebaseFcmDataV1beta1MessageInsightPercentsFormGroup() {
		return new FormGroup<GoogleFirebaseFcmDataV1beta1MessageInsightPercentsFormProperties>({
			priorityLowered: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Percentage breakdown of message delivery outcomes. These categories are mutually exclusive. All percentages are calculated with countMessagesAccepted as the denominator. These categories may not account for all message outcomes. */
	export interface GoogleFirebaseFcmDataV1beta1MessageOutcomePercents {

		/** The percentage of all accepted messages that were successfully delivered to the device. */
		delivered?: number | null;

		/** The percentage of accepted messages that were dropped because the application was force stopped on the device at the time of delivery and retries were unsuccessful. */
		droppedAppForceStopped?: number | null;

		/** The percentage of accepted messages that were dropped because the target device is inactive. FCM will drop messages if the target device is deemed inactive by our servers. If a device does reconnect, we call [OnDeletedMessages()](https://firebase.google.com/docs/cloud-messaging/android/receive#override-ondeletedmessages) in our SDK instead of delivering the messages. */
		droppedDeviceInactive?: number | null;

		/** The percentage of accepted messages that were dropped due to [too many undelivered non-collapsible messages](https://firebase.google.com/docs/cloud-messaging/concept-options#collapsible_and_non-collapsible_messages). Specifically, each app instance can only have 100 pending messages stored on our servers for a device which is disconnected. When that device reconnects, those messages are delivered. When there are more than the maximum pending messages, we call [OnDeletedMessages()](https://firebase.google.com/docs/cloud-messaging/android/receive#override-ondeletedmessages) in our SDK instead of delivering the messages. */
		droppedTooManyPendingMessages?: number | null;

		/** The percentage of messages accepted on this day that were not dropped and not delivered, due to the device being disconnected (as of the end of the America/Los_Angeles day when the message was sent to FCM). A portion of these messages will be delivered the next day when the device connects but others may be destined to devices that ultimately never reconnect. */
		pending?: number | null;
	}

	/** Percentage breakdown of message delivery outcomes. These categories are mutually exclusive. All percentages are calculated with countMessagesAccepted as the denominator. These categories may not account for all message outcomes. */
	export interface GoogleFirebaseFcmDataV1beta1MessageOutcomePercentsFormProperties {

		/** The percentage of all accepted messages that were successfully delivered to the device. */
		delivered: FormControl<number | null | undefined>,

		/** The percentage of accepted messages that were dropped because the application was force stopped on the device at the time of delivery and retries were unsuccessful. */
		droppedAppForceStopped: FormControl<number | null | undefined>,

		/** The percentage of accepted messages that were dropped because the target device is inactive. FCM will drop messages if the target device is deemed inactive by our servers. If a device does reconnect, we call [OnDeletedMessages()](https://firebase.google.com/docs/cloud-messaging/android/receive#override-ondeletedmessages) in our SDK instead of delivering the messages. */
		droppedDeviceInactive: FormControl<number | null | undefined>,

		/** The percentage of accepted messages that were dropped due to [too many undelivered non-collapsible messages](https://firebase.google.com/docs/cloud-messaging/concept-options#collapsible_and_non-collapsible_messages). Specifically, each app instance can only have 100 pending messages stored on our servers for a device which is disconnected. When that device reconnects, those messages are delivered. When there are more than the maximum pending messages, we call [OnDeletedMessages()](https://firebase.google.com/docs/cloud-messaging/android/receive#override-ondeletedmessages) in our SDK instead of delivering the messages. */
		droppedTooManyPendingMessages: FormControl<number | null | undefined>,

		/** The percentage of messages accepted on this day that were not dropped and not delivered, due to the device being disconnected (as of the end of the America/Los_Angeles day when the message was sent to FCM). A portion of these messages will be delivered the next day when the device connects but others may be destined to devices that ultimately never reconnect. */
		pending: FormControl<number | null | undefined>,
	}
	export function CreateGoogleFirebaseFcmDataV1beta1MessageOutcomePercentsFormGroup() {
		return new FormGroup<GoogleFirebaseFcmDataV1beta1MessageOutcomePercentsFormProperties>({
			delivered: new FormControl<number | null | undefined>(undefined),
			droppedAppForceStopped: new FormControl<number | null | undefined>(undefined),
			droppedDeviceInactive: new FormControl<number | null | undefined>(undefined),
			droppedTooManyPendingMessages: new FormControl<number | null | undefined>(undefined),
			pending: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Represents a whole or partial calendar date, such as a birthday. The time of day and time zone are either specified elsewhere or are insignificant. The date is relative to the Gregorian Calendar. This can represent one of the following: * A full date, with non-zero year, month, and day values. * A month and day, with a zero year (for example, an anniversary). * A year on its own, with a zero month and a zero day. * A year and month, with a zero day (for example, a credit card expiration date). Related types: * google.type.TimeOfDay * google.type.DateTime * google.protobuf.Timestamp */
	export interface GoogleTypeDate {

		/** Day of a month. Must be from 1 to 31 and valid for the year and month, or 0 to specify a year by itself or a year and month where the day isn't significant. */
		day?: number | null;

		/** Month of a year. Must be from 1 to 12, or 0 to specify a year without a month and day. */
		month?: number | null;

		/** Year of the date. Must be from 1 to 9999, or 0 to specify a date without a year. */
		year?: number | null;
	}

	/** Represents a whole or partial calendar date, such as a birthday. The time of day and time zone are either specified elsewhere or are insignificant. The date is relative to the Gregorian Calendar. This can represent one of the following: * A full date, with non-zero year, month, and day values. * A month and day, with a zero year (for example, an anniversary). * A year on its own, with a zero month and a zero day. * A year and month, with a zero day (for example, a credit card expiration date). Related types: * google.type.TimeOfDay * google.type.DateTime * google.protobuf.Timestamp */
	export interface GoogleTypeDateFormProperties {

		/** Day of a month. Must be from 1 to 31 and valid for the year and month, or 0 to specify a year by itself or a year and month where the day isn't significant. */
		day: FormControl<number | null | undefined>,

		/** Month of a year. Must be from 1 to 12, or 0 to specify a year without a month and day. */
		month: FormControl<number | null | undefined>,

		/** Year of the date. Must be from 1 to 9999, or 0 to specify a date without a year. */
		year: FormControl<number | null | undefined>,
	}
	export function CreateGoogleTypeDateFormGroup() {
		return new FormGroup<GoogleTypeDateFormProperties>({
			day: new FormControl<number | null | undefined>(undefined),
			month: new FormControl<number | null | undefined>(undefined),
			year: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Response message for ListAndroidDeliveryData. */
	export interface GoogleFirebaseFcmDataV1beta1ListAndroidDeliveryDataResponse {

		/** The delivery data for the provided app. There will be one entry per combination of app, date, and analytics label. */
		androidDeliveryData?: Array<GoogleFirebaseFcmDataV1beta1AndroidDeliveryData>;

		/** A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
		nextPageToken?: string | null;
	}

	/** Response message for ListAndroidDeliveryData. */
	export interface GoogleFirebaseFcmDataV1beta1ListAndroidDeliveryDataResponseFormProperties {

		/** A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateGoogleFirebaseFcmDataV1beta1ListAndroidDeliveryDataResponseFormGroup() {
		return new FormGroup<GoogleFirebaseFcmDataV1beta1ListAndroidDeliveryDataResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * List aggregate delivery data for the given Android application.
		 * Get v1beta1/{parent}/deliveryData
		 * @param {string} parent Required. The application for which to list delivery data. Format: `projects/{project_id}/androidApps/{app_id}`
		 * @param {number} pageSize The maximum number of entries to return. The service may return fewer than this value. If unspecified, at most 1,000 entries will be returned. The maximum value is 10,000; values above 10,000 will be capped to 10,000. This default may change over time.
		 * @param {string} pageToken A page token, received from a previous `ListAndroidDeliveryDataRequest` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListAndroidDeliveryDataRequest` must match the call that provided the page token.
		 * @return {GoogleFirebaseFcmDataV1beta1ListAndroidDeliveryDataResponse} Successful response
		 */
		Fcmdata_projects_androidApps_deliveryData_list(parent: string, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<GoogleFirebaseFcmDataV1beta1ListAndroidDeliveryDataResponse> {
			return this.http.get<GoogleFirebaseFcmDataV1beta1ListAndroidDeliveryDataResponse>(this.baseUri + 'v1beta1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/deliveryData&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}
	}

}

