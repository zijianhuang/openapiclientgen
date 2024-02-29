import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** Represents user interaction event information sent using the <code>PutEvents</code> API. */
	export interface Event {
		eventId?: string;

		/** Required */
		eventType: string;
		eventValue?: number;
		itemId?: string;

		/** <p>A string map of event-specific data that you might choose to record. For example, if a user rates a movie on your site, other than movie ID (<code>itemId</code>) and rating (<code>eventValue</code>) , you might also send the number of movie ratings made by the user.</p> <p>Each item in the map consists of a key-value pair. For example,</p> <p> <code>{"numberOfRatings": "12"}</code> </p> <p>The keys use camel case names that match the fields in the Interactions schema. In the above example, the <code>numberOfRatings</code> would match the 'NUMBER_OF_RATINGS' field defined in the Interactions schema.</p> */
		properties?: any;

		/** Required */
		sentAt: Date;
		recommendationId?: string;
		impression?: Array<string>;
		metricAttribution?: MetricAttribution;
	}

	/** Represents user interaction event information sent using the <code>PutEvents</code> API. */
	export interface EventFormProperties {
		eventId: FormControl<string | null | undefined>,

		/** Required */
		eventType: FormControl<string | null | undefined>,
		eventValue: FormControl<number | null | undefined>,
		itemId: FormControl<string | null | undefined>,

		/** <p>A string map of event-specific data that you might choose to record. For example, if a user rates a movie on your site, other than movie ID (<code>itemId</code>) and rating (<code>eventValue</code>) , you might also send the number of movie ratings made by the user.</p> <p>Each item in the map consists of a key-value pair. For example,</p> <p> <code>{"numberOfRatings": "12"}</code> </p> <p>The keys use camel case names that match the fields in the Interactions schema. In the above example, the <code>numberOfRatings</code> would match the 'NUMBER_OF_RATINGS' field defined in the Interactions schema.</p> */
		properties: FormControl<any | null | undefined>,

		/** Required */
		sentAt: FormControl<Date | null | undefined>,
		recommendationId: FormControl<string | null | undefined>,
	}
	export function CreateEventFormGroup() {
		return new FormGroup<EventFormProperties>({
			eventId: new FormControl<string | null | undefined>(undefined),
			eventType: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			eventValue: new FormControl<number | null | undefined>(undefined),
			itemId: new FormControl<string | null | undefined>(undefined),
			properties: new FormControl<any | null | undefined>(undefined),
			sentAt: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			recommendationId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains information about a metric attribution associated with an event. For more information about metric attributions, see <a href="https://docs.aws.amazon.com/personalize/latest/dg/measuring-recommendation-impact.html">Measuring impact of recommendations</a>. */
	export interface MetricAttribution {

		/** Required */
		eventAttributionSource: string;
	}

	/** Contains information about a metric attribution associated with an event. For more information about metric attributions, see <a href="https://docs.aws.amazon.com/personalize/latest/dg/measuring-recommendation-impact.html">Measuring impact of recommendations</a>. */
	export interface MetricAttributionFormProperties {

		/** Required */
		eventAttributionSource: FormControl<string | null | undefined>,
	}
	export function CreateMetricAttributionFormGroup() {
		return new FormGroup<MetricAttributionFormProperties>({
			eventAttributionSource: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface InvalidInputException {
	}
	export interface InvalidInputExceptionFormProperties {
	}
	export function CreateInvalidInputExceptionFormGroup() {
		return new FormGroup<InvalidInputExceptionFormProperties>({
		});

	}


	/** Represents item metadata added to an Items dataset using the <code>PutItems</code> API. For more information see <a href="https://docs.aws.amazon.com/personalize/latest/dg/importing-items.html">Importing Items Incrementally</a>.  */
	export interface Item {

		/** Required */
		itemId: string;

		/** <p>A string map of item-specific metadata. Each element in the map consists of a key-value pair. For example, <code>{"numberOfRatings": "12"}</code>.</p> <p>The keys use camel case names that match the fields in the schema for the Items dataset. In the previous example, the <code>numberOfRatings</code> matches the 'NUMBER_OF_RATINGS' field defined in the Items schema. For categorical string data, to include multiple categories for a single item, separate each category with a pipe separator (<code>|</code>). For example, <code>\"Horror|Action\"</code>.</p> */
		properties?: any;
	}

	/** Represents item metadata added to an Items dataset using the <code>PutItems</code> API. For more information see <a href="https://docs.aws.amazon.com/personalize/latest/dg/importing-items.html">Importing Items Incrementally</a>.  */
	export interface ItemFormProperties {

		/** Required */
		itemId: FormControl<string | null | undefined>,

		/** <p>A string map of item-specific metadata. Each element in the map consists of a key-value pair. For example, <code>{"numberOfRatings": "12"}</code>.</p> <p>The keys use camel case names that match the fields in the schema for the Items dataset. In the previous example, the <code>numberOfRatings</code> matches the 'NUMBER_OF_RATINGS' field defined in the Items schema. For categorical string data, to include multiple categories for a single item, separate each category with a pipe separator (<code>|</code>). For example, <code>\"Horror|Action\"</code>.</p> */
		properties: FormControl<any | null | undefined>,
	}
	export function CreateItemFormGroup() {
		return new FormGroup<ItemFormProperties>({
			itemId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			properties: new FormControl<any | null | undefined>(undefined),
		});

	}

	export interface ResourceNotFoundException {
	}
	export interface ResourceNotFoundExceptionFormProperties {
	}
	export function CreateResourceNotFoundExceptionFormGroup() {
		return new FormGroup<ResourceNotFoundExceptionFormProperties>({
		});

	}

	export interface ResourceInUseException {
	}
	export interface ResourceInUseExceptionFormProperties {
	}
	export function CreateResourceInUseExceptionFormGroup() {
		return new FormGroup<ResourceInUseExceptionFormProperties>({
		});

	}


	/** Represents user metadata added to a Users dataset using the <code>PutUsers</code> API. For more information see <a href="https://docs.aws.amazon.com/personalize/latest/dg/importing-users.html">Importing Users Incrementally</a>. */
	export interface User {

		/** Required */
		userId: string;

		/** <p>A string map of user-specific metadata. Each element in the map consists of a key-value pair. For example, <code>{"numberOfVideosWatched": "45"}</code>.</p> <p>The keys use camel case names that match the fields in the schema for the Users dataset. In the previous example, the <code>numberOfVideosWatched</code> matches the 'NUMBER_OF_VIDEOS_WATCHED' field defined in the Users schema. For categorical string data, to include multiple categories for a single user, separate each category with a pipe separator (<code>|</code>). For example, <code>\"Member|Frequent shopper\"</code>.</p> */
		properties?: any;
	}

	/** Represents user metadata added to a Users dataset using the <code>PutUsers</code> API. For more information see <a href="https://docs.aws.amazon.com/personalize/latest/dg/importing-users.html">Importing Users Incrementally</a>. */
	export interface UserFormProperties {

		/** Required */
		userId: FormControl<string | null | undefined>,

		/** <p>A string map of user-specific metadata. Each element in the map consists of a key-value pair. For example, <code>{"numberOfVideosWatched": "45"}</code>.</p> <p>The keys use camel case names that match the fields in the schema for the Users dataset. In the previous example, the <code>numberOfVideosWatched</code> matches the 'NUMBER_OF_VIDEOS_WATCHED' field defined in the Users schema. For categorical string data, to include multiple categories for a single user, separate each category with a pipe separator (<code>|</code>). For example, <code>\"Member|Frequent shopper\"</code>.</p> */
		properties: FormControl<any | null | undefined>,
	}
	export function CreateUserFormGroup() {
		return new FormGroup<UserFormProperties>({
			userId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			properties: new FormControl<any | null | undefined>(undefined),
		});

	}

	export interface PutEventsRequest {

		/** Required */
		trackingId: string;
		userId?: string;

		/** Required */
		sessionId: string;

		/** Required */
		eventList: Array<Event>;
	}
	export interface PutEventsRequestFormProperties {

		/** Required */
		trackingId: FormControl<string | null | undefined>,
		userId: FormControl<string | null | undefined>,

		/** Required */
		sessionId: FormControl<string | null | undefined>,
	}
	export function CreatePutEventsRequestFormGroup() {
		return new FormGroup<PutEventsRequestFormProperties>({
			trackingId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			userId: new FormControl<string | null | undefined>(undefined),
			sessionId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface PutItemsRequest {

		/** Required */
		datasetArn: string;

		/** Required */
		items: Array<Item>;
	}
	export interface PutItemsRequestFormProperties {

		/** Required */
		datasetArn: FormControl<string | null | undefined>,
	}
	export function CreatePutItemsRequestFormGroup() {
		return new FormGroup<PutItemsRequestFormProperties>({
			datasetArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface PutUsersRequest {

		/** Required */
		datasetArn: string;

		/** Required */
		users: Array<User>;
	}
	export interface PutUsersRequestFormProperties {

		/** Required */
		datasetArn: FormControl<string | null | undefined>,
	}
	export function CreatePutUsersRequestFormGroup() {
		return new FormGroup<PutUsersRequestFormProperties>({
			datasetArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Records user interaction event data. For more information see <a href="https://docs.aws.amazon.com/personalize/latest/dg/recording-events.html">Recording Events</a>.
		 * Post events
		 * @return {void} Success
		 */
		PutEvents(requestBody: PutEventsPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'events', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Adds one or more items to an Items dataset. For more information see <a href="https://docs.aws.amazon.com/personalize/latest/dg/importing-items.html">Importing Items Incrementally</a>.
		 * Post items
		 * @return {void} Success
		 */
		PutItems(requestBody: PutItemsPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'items', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Adds one or more users to a Users dataset. For more information see <a href="https://docs.aws.amazon.com/personalize/latest/dg/importing-users.html">Importing Users Incrementally</a>.
		 * Post users
		 * @return {void} Success
		 */
		PutUsers(requestBody: PutUsersPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'users', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}
	}

	export interface PutEventsPostBody {

		/**
		 * The tracking ID for the event. The ID is generated by a call to the <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_CreateEventTracker.html">CreateEventTracker</a> API.
		 * Required
		 * Min length: 1
		 * Max length: 256
		 */
		trackingId: string;

		/**
		 * The user associated with the event.
		 * Min length: 1
		 * Max length: 256
		 */
		userId?: string | null;

		/**
		 * The session ID associated with the user's visit. Your application generates the sessionId when a user first visits your website or uses your application. Amazon Personalize uses the sessionId to associate events with the user before they log in. For more information, see <a href="https://docs.aws.amazon.com/personalize/latest/dg/recording-events.html">Recording Events</a>.
		 * Required
		 * Min length: 1
		 * Max length: 256
		 */
		sessionId: string;

		/**
		 * A list of event data from the session.
		 * Required
		 * Minimum items: 1
		 * Maximum items: 10
		 */
		eventList: Array<Event>;
	}
	export interface PutEventsPostBodyFormProperties {

		/**
		 * The tracking ID for the event. The ID is generated by a call to the <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_CreateEventTracker.html">CreateEventTracker</a> API.
		 * Required
		 * Min length: 1
		 * Max length: 256
		 */
		trackingId: FormControl<string | null | undefined>,

		/**
		 * The user associated with the event.
		 * Min length: 1
		 * Max length: 256
		 */
		userId: FormControl<string | null | undefined>,

		/**
		 * The session ID associated with the user's visit. Your application generates the sessionId when a user first visits your website or uses your application. Amazon Personalize uses the sessionId to associate events with the user before they log in. For more information, see <a href="https://docs.aws.amazon.com/personalize/latest/dg/recording-events.html">Recording Events</a>.
		 * Required
		 * Min length: 1
		 * Max length: 256
		 */
		sessionId: FormControl<string | null | undefined>,
	}
	export function CreatePutEventsPostBodyFormGroup() {
		return new FormGroup<PutEventsPostBodyFormProperties>({
			trackingId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(256)]),
			userId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(256)]),
			sessionId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(256)]),
		});

	}

	export interface PutItemsPostBody {

		/**
		 * The Amazon Resource Name (ARN) of the Items dataset you are adding the item or items to.
		 * Required
		 * Max length: 256
		 */
		datasetArn: string;

		/**
		 * A list of item data.
		 * Required
		 * Minimum items: 1
		 * Maximum items: 10
		 */
		items: Array<Item>;
	}
	export interface PutItemsPostBodyFormProperties {

		/**
		 * The Amazon Resource Name (ARN) of the Items dataset you are adding the item or items to.
		 * Required
		 * Max length: 256
		 */
		datasetArn: FormControl<string | null | undefined>,
	}
	export function CreatePutItemsPostBodyFormGroup() {
		return new FormGroup<PutItemsPostBodyFormProperties>({
			datasetArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(256), Validators.pattern('arn:([a-z\d-]+):personalize:.*:.*:.+')]),
		});

	}

	export interface PutUsersPostBody {

		/**
		 * The Amazon Resource Name (ARN) of the Users dataset you are adding the user or users to.
		 * Required
		 * Max length: 256
		 */
		datasetArn: string;

		/**
		 * A list of user data.
		 * Required
		 * Minimum items: 1
		 * Maximum items: 10
		 */
		users: Array<User>;
	}
	export interface PutUsersPostBodyFormProperties {

		/**
		 * The Amazon Resource Name (ARN) of the Users dataset you are adding the user or users to.
		 * Required
		 * Max length: 256
		 */
		datasetArn: FormControl<string | null | undefined>,
	}
	export function CreatePutUsersPostBodyFormGroup() {
		return new FormGroup<PutUsersPostBodyFormProperties>({
			datasetArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(256), Validators.pattern('arn:([a-z\d-]+):personalize:.*:.*:.+')]),
		});

	}

}

