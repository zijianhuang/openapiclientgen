import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** A Google Pub/Sub topic where notifications can be published when a location is updated or has a new review. There will be only one notification setting resource per-account. */
	export interface NotificationSetting {

		/** Required. The resource name this setting is for. This is of the form `accounts/{account_id}/notificationSetting`. */
		name?: string | null;

		/** The types of notifications that will be sent to the Pub/Sub topic. To stop receiving notifications entirely, use NotificationSettings.UpdateNotificationSetting with an empty notification_types or set the pubsub_topic to an empty string. */
		notificationTypes?: Array<string>;

		/** Optional. The Google Pub/Sub topic that will receive notifications when locations managed by this account are updated. If unset, no notifications will be posted. The account mybusiness-api-pubsub@system.gserviceaccount.com must have at least Publish permissions on the Pub/Sub topic. */
		pubsubTopic?: string | null;
	}

	/** A Google Pub/Sub topic where notifications can be published when a location is updated or has a new review. There will be only one notification setting resource per-account. */
	export interface NotificationSettingFormProperties {

		/** Required. The resource name this setting is for. This is of the form `accounts/{account_id}/notificationSetting`. */
		name: FormControl<string | null | undefined>,

		/** Optional. The Google Pub/Sub topic that will receive notifications when locations managed by this account are updated. If unset, no notifications will be posted. The account mybusiness-api-pubsub@system.gserviceaccount.com must have at least Publish permissions on the Pub/Sub topic. */
		pubsubTopic: FormControl<string | null | undefined>,
	}
	export function CreateNotificationSettingFormGroup() {
		return new FormGroup<NotificationSettingFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			pubsubTopic: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Returns the pubsub notification settings for the account.
		 * Get v1/{name}
		 * @param {string} name Required. The resource name of the notification setting we are trying to fetch.
		 * @return {NotificationSetting} Successful response
		 */
		Mybusinessnotifications_accounts_getNotificationSetting(name: string): Observable<NotificationSetting> {
			return this.http.get<NotificationSetting>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)), {});
		}

		/**
		 * Sets the pubsub notification setting for the account informing Google which topic to send pubsub notifications for. Use the notification_types field within notification_setting to manipulate the events an account wants to subscribe to. An account will only have one notification setting resource, and only one pubsub topic can be set. To delete the setting, update with an empty notification_types
		 * Patch v1/{name}
		 * @param {string} name Required. The resource name this setting is for. This is of the form `accounts/{account_id}/notificationSetting`.
		 * @param {string} updateMask Required. The specific fields that should be updated. The only editable field is notification_setting.
		 * @return {NotificationSetting} Successful response
		 */
		Mybusinessnotifications_accounts_updateNotificationSetting(name: string, updateMask: string | null | undefined, requestBody: NotificationSetting): Observable<NotificationSetting> {
			return this.http.patch<NotificationSetting>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + '&updateMask=' + (updateMask == null ? '' : encodeURIComponent(updateMask)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

}

