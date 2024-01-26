import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface Subscription {
		'@context'?: string | null;

		/** Required */
		active: boolean;

		/** Required */
		id: string;
		lastEventID?: string | null;
		payload?: string | null;

		/** Required */
		subscriber: string;

		/** Required */
		topic: string;

		/** Required */
		type: string;
	}
	export interface SubscriptionFormProperties {
		'@context': FormControl<string | null | undefined>,

		/** Required */
		active: FormControl<boolean | null | undefined>,

		/** Required */
		id: FormControl<string | null | undefined>,
		lastEventID: FormControl<string | null | undefined>,
		payload: FormControl<string | null | undefined>,

		/** Required */
		subscriber: FormControl<string | null | undefined>,

		/** Required */
		topic: FormControl<string | null | undefined>,

		/** Required */
		type: FormControl<string | null | undefined>,
	}
	export function CreateSubscriptionFormGroup() {
		return new FormGroup<SubscriptionFormProperties>({
			'@context': new FormControl<string | null | undefined>(undefined),
			active: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			lastEventID: new FormControl<string | null | undefined>(undefined),
			payload: new FormControl<string | null | undefined>(undefined),
			subscriber: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			topic: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Subscriptions {

		/** Required */
		'@context': string;

		/** Required */
		id: string;

		/** Required */
		lastEventID: string;

		/** Required */
		subscriptions: Array<Subscription>;

		/** Required */
		type: string;
	}
	export interface SubscriptionsFormProperties {

		/** Required */
		'@context': FormControl<string | null | undefined>,

		/** Required */
		id: FormControl<string | null | undefined>,

		/** Required */
		lastEventID: FormControl<string | null | undefined>,

		/** Required */
		type: FormControl<string | null | undefined>,
	}
	export function CreateSubscriptionsFormGroup() {
		return new FormGroup<SubscriptionsFormProperties>({
			'@context': new FormControl<string | null | undefined>(undefined, [Validators.required]),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			lastEventID: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Subscribe to updates
		 * Get .well-known/mercure
		 * @param {Array<string>} topic The topic to get updates from, can be a URI template (RFC6570).
		 * @param {string} Last_Event_ID The last received event id, to retrieve missed events.
		 * @return {void} Event stream opened.
		 */
		_well_knownMercureGetByTopicAndLast_Event_ID(topic: Array<string>, Last_Event_ID: string | null | undefined, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '.well-known/mercure?' + topic.map(z => `topic=${encodeURIComponent(z)}`).join('&') + '&Last_Event_ID=' + (Last_Event_ID == null ? '' : encodeURIComponent(Last_Event_ID)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Active subscriptions
		 * Get .well-known/mercure/subscriptions
		 * @return {void} The list of active subscriptions
		 */
		_well_knownMercureSubscriptionsGet(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '.well-known/mercure/subscriptions', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Active subscriptions for the given topic
		 * Get .well-known/mercure/subscriptions/{topic}
		 * @return {void} The list of active subscriptions
		 */
		_well_knownMercureSubscriptions_topicGet(topic: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '.well-known/mercure/subscriptions/' + (topic == null ? '' : encodeURIComponent(topic)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Active subscription for the given topic and subscriber
		 * Get .well-known/mercure/subscriptions/{topic}/{subscriber}
		 * @return {void} The list of active subscriptions
		 */
		_well_knownMercureSubscriptions_topic_subscriberGet(topic: string, subscriber: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '.well-known/mercure/subscriptions/' + (topic == null ? '' : encodeURIComponent(topic)) + '/' + (subscriber == null ? '' : encodeURIComponent(subscriber)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}
	}

}

