import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** Output for PublishUrlNotification */
	export interface PublishUrlNotificationResponse {

		/**
		 * Summary of the most recent Indexing API notifications successfully received,
		 * for a given URL.
		 */
		urlNotificationMetadata?: UrlNotificationMetadata;
	}

	/** Output for PublishUrlNotification */
	export interface PublishUrlNotificationResponseFormProperties {
	}
	export function CreatePublishUrlNotificationResponseFormGroup() {
		return new FormGroup<PublishUrlNotificationResponseFormProperties>({
		});

	}


	/**
	 * Summary of the most recent Indexing API notifications successfully received,
	 * for a given URL.
	 */
	export interface UrlNotificationMetadata {

		/**
		 * `UrlNotification` is the resource used in all Indexing API calls.
		 * It describes one event in the life cycle of a Web Document.
		 */
		latestRemove?: UrlNotification;

		/**
		 * `UrlNotification` is the resource used in all Indexing API calls.
		 * It describes one event in the life cycle of a Web Document.
		 */
		latestUpdate?: UrlNotification;

		/** URL to which this metadata refers. */
		url?: string | null;
	}

	/**
	 * Summary of the most recent Indexing API notifications successfully received,
	 * for a given URL.
	 */
	export interface UrlNotificationMetadataFormProperties {

		/** URL to which this metadata refers. */
		url: FormControl<string | null | undefined>,
	}
	export function CreateUrlNotificationMetadataFormGroup() {
		return new FormGroup<UrlNotificationMetadataFormProperties>({
			url: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**
	 * `UrlNotification` is the resource used in all Indexing API calls.
	 * It describes one event in the life cycle of a Web Document.
	 */
	export interface UrlNotification {

		/**
		 * Creation timestamp for this notification.
		 * Users should _not_ specify it, the field is ignored at the request time.
		 */
		notifyTime?: string | null;

		/** The URL life cycle event that Google is being notified about. */
		type?: UrlNotificationType | null;

		/**
		 * The object of this notification. The URL must be owned by the publisher
		 * of this notification and, in case of `URL_UPDATED` notifications, it _must_
		 * be crawlable by Google.
		 */
		url?: string | null;
	}

	/**
	 * `UrlNotification` is the resource used in all Indexing API calls.
	 * It describes one event in the life cycle of a Web Document.
	 */
	export interface UrlNotificationFormProperties {

		/**
		 * Creation timestamp for this notification.
		 * Users should _not_ specify it, the field is ignored at the request time.
		 */
		notifyTime: FormControl<string | null | undefined>,

		/** The URL life cycle event that Google is being notified about. */
		type: FormControl<UrlNotificationType | null | undefined>,

		/**
		 * The object of this notification. The URL must be owned by the publisher
		 * of this notification and, in case of `URL_UPDATED` notifications, it _must_
		 * be crawlable by Google.
		 */
		url: FormControl<string | null | undefined>,
	}
	export function CreateUrlNotificationFormGroup() {
		return new FormGroup<UrlNotificationFormProperties>({
			notifyTime: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<UrlNotificationType | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum UrlNotificationType { URL_NOTIFICATION_TYPE_UNSPECIFIED = 0, URL_UPDATED = 1, URL_DELETED = 2 }

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Gets metadata about a Web Document. This method can _only_ be used to query
		 * URLs that were previously seen in successful Indexing API notifications.
		 * Includes the latest `UrlNotification` received via this API.
		 * Get v3/urlNotifications/metadata
		 * @param {string} url URL that is being queried.
		 * @return {void} Successful response
		 */
		Indexing_urlNotifications_getMetadata(url: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v3/urlNotifications/metadata?url=' + (url == null ? '' : encodeURIComponent(url)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Notifies that a URL has been updated or deleted.
		 * Post v3/urlNotifications:publish
		 * @return {void} Successful response
		 */
		Indexing_urlNotifications_publish(requestBody: UrlNotification): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v3/urlNotifications:publish', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}
	}

}

