import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface Eventsv1event_type {

		/** The date that this Event Type was created, given in ISO 8601 format. */
		date_created?: Date | null;

		/** The date that this Event Type was updated, given in ISO 8601 format. */
		date_updated?: Date | null;

		/** A human readable description for this Event Type. */
		description?: string | null;
		links?: string | null;

		/** A string that uniquely identifies the Schema this Event Type adheres to. */
		schema_id?: string | null;

		/** A string that uniquely identifies this Event Type. */
		type?: string | null;

		/** The URL of this resource. */
		url?: string | null;
	}
	export interface Eventsv1event_typeFormProperties {

		/** The date that this Event Type was created, given in ISO 8601 format. */
		date_created: FormControl<Date | null | undefined>,

		/** The date that this Event Type was updated, given in ISO 8601 format. */
		date_updated: FormControl<Date | null | undefined>,

		/** A human readable description for this Event Type. */
		description: FormControl<string | null | undefined>,
		links: FormControl<string | null | undefined>,

		/** A string that uniquely identifies the Schema this Event Type adheres to. */
		schema_id: FormControl<string | null | undefined>,

		/** A string that uniquely identifies this Event Type. */
		type: FormControl<string | null | undefined>,

		/** The URL of this resource. */
		url: FormControl<string | null | undefined>,
	}
	export function CreateEventsv1event_typeFormGroup() {
		return new FormGroup<Eventsv1event_typeFormProperties>({
			date_created: new FormControl<Date | null | undefined>(undefined),
			date_updated: new FormControl<Date | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			links: new FormControl<string | null | undefined>(undefined),
			schema_id: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Eventsv1schema {

		/** The unique identifier of the schema. Each schema can have multiple versions, that share the same id. */
		id?: string | null;

		/** The latest version published of this schema. */
		latest_version?: number | null;

		/** The date that the latest schema version was created, given in ISO 8601 format. */
		latest_version_date_created?: Date | null;

		/** Contains a dictionary of URL links to nested resources of this schema. */
		links?: string | null;

		/** The URL of this resource. */
		url?: string | null;
	}
	export interface Eventsv1schemaFormProperties {

		/** The unique identifier of the schema. Each schema can have multiple versions, that share the same id. */
		id: FormControl<string | null | undefined>,

		/** The latest version published of this schema. */
		latest_version: FormControl<number | null | undefined>,

		/** The date that the latest schema version was created, given in ISO 8601 format. */
		latest_version_date_created: FormControl<Date | null | undefined>,

		/** Contains a dictionary of URL links to nested resources of this schema. */
		links: FormControl<string | null | undefined>,

		/** The URL of this resource. */
		url: FormControl<string | null | undefined>,
	}
	export function CreateEventsv1schemaFormGroup() {
		return new FormGroup<Eventsv1schemaFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			latest_version: new FormControl<number | null | undefined>(undefined),
			latest_version_date_created: new FormControl<Date | null | undefined>(undefined),
			links: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Eventsv1schemaschema_version {

		/** The date the schema version was created, given in ISO 8601 format. */
		date_created?: Date | null;

		/** The unique identifier of the schema. Each schema can have multiple versions, that share the same id. */
		id?: string | null;
		raw?: string | null;

		/** The version of this schema. */
		schema_version?: number | null;

		/** The URL of this resource. */
		url?: string | null;
	}
	export interface Eventsv1schemaschema_versionFormProperties {

		/** The date the schema version was created, given in ISO 8601 format. */
		date_created: FormControl<Date | null | undefined>,

		/** The unique identifier of the schema. Each schema can have multiple versions, that share the same id. */
		id: FormControl<string | null | undefined>,
		raw: FormControl<string | null | undefined>,

		/** The version of this schema. */
		schema_version: FormControl<number | null | undefined>,

		/** The URL of this resource. */
		url: FormControl<string | null | undefined>,
	}
	export function CreateEventsv1schemaschema_versionFormGroup() {
		return new FormGroup<Eventsv1schemaschema_versionFormProperties>({
			date_created: new FormControl<Date | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			raw: new FormControl<string | null | undefined>(undefined),
			schema_version: new FormControl<number | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Eventsv1sink {

		/** The date that this Sink was created, given in ISO 8601 format. */
		date_created?: Date | null;

		/** The date that this Sink was updated, given in ISO 8601 format. */
		date_updated?: Date | null;

		/** A human readable description for the Sink */
		description?: string | null;

		/** Contains a dictionary of URL links to nested resources of this Sink. */
		links?: string | null;

		/**
		 * A 34 character string that uniquely identifies this Sink.
		 * Max length: 34
		 * Min length: 34
		 */
		sid?: string | null;

		/** The information required for Twilio to connect to the provided Sink encoded as JSON. */
		sink_configuration?: any;
		sink_type?: Eventsv1sinkSink_type | null;
		status?: Eventsv1sinkStatus | null;

		/** The URL of this resource. */
		url?: string | null;
	}
	export interface Eventsv1sinkFormProperties {

		/** The date that this Sink was created, given in ISO 8601 format. */
		date_created: FormControl<Date | null | undefined>,

		/** The date that this Sink was updated, given in ISO 8601 format. */
		date_updated: FormControl<Date | null | undefined>,

		/** A human readable description for the Sink */
		description: FormControl<string | null | undefined>,

		/** Contains a dictionary of URL links to nested resources of this Sink. */
		links: FormControl<string | null | undefined>,

		/**
		 * A 34 character string that uniquely identifies this Sink.
		 * Max length: 34
		 * Min length: 34
		 */
		sid: FormControl<string | null | undefined>,

		/** The information required for Twilio to connect to the provided Sink encoded as JSON. */
		sink_configuration: FormControl<any | null | undefined>,
		sink_type: FormControl<Eventsv1sinkSink_type | null | undefined>,
		status: FormControl<Eventsv1sinkStatus | null | undefined>,

		/** The URL of this resource. */
		url: FormControl<string | null | undefined>,
	}
	export function CreateEventsv1sinkFormGroup() {
		return new FormGroup<Eventsv1sinkFormProperties>({
			date_created: new FormControl<Date | null | undefined>(undefined),
			date_updated: new FormControl<Date | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			links: new FormControl<string | null | undefined>(undefined),
			sid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(34), Validators.maxLength(34), Validators.pattern('^DG[0-9a-fA-F]{32}$')]),
			sink_configuration: new FormControl<any | null | undefined>(undefined),
			sink_type: new FormControl<Eventsv1sinkSink_type | null | undefined>(undefined),
			status: new FormControl<Eventsv1sinkStatus | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum Eventsv1sinkSink_type { kinesis = 'kinesis', webhook = 'webhook', segment = 'segment' }

	export enum Eventsv1sinkStatus { initialized = 'initialized', validating = 'validating', active = 'active', failed = 'failed' }

	export interface Eventsv1sinksink_test {

		/** Feedback indicating whether the test event was generated. */
		result?: string | null;
	}
	export interface Eventsv1sinksink_testFormProperties {

		/** Feedback indicating whether the test event was generated. */
		result: FormControl<string | null | undefined>,
	}
	export function CreateEventsv1sinksink_testFormGroup() {
		return new FormGroup<Eventsv1sinksink_testFormProperties>({
			result: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Eventsv1sinksink_validate {

		/** Feedback indicating whether the given Sink was validated. */
		result?: string | null;
	}
	export interface Eventsv1sinksink_validateFormProperties {

		/** Feedback indicating whether the given Sink was validated. */
		result: FormControl<string | null | undefined>,
	}
	export function CreateEventsv1sinksink_validateFormGroup() {
		return new FormGroup<Eventsv1sinksink_validateFormProperties>({
			result: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Eventsv1subscription {

		/**
		 * The unique SID identifier of the Account.
		 * Max length: 34
		 * Min length: 34
		 */
		account_sid?: string | null;

		/** The date that this Subscription was created, given in ISO 8601 format. */
		date_created?: Date | null;

		/** The date that this Subscription was updated, given in ISO 8601 format. */
		date_updated?: Date | null;

		/** A human readable description for the Subscription */
		description?: string | null;

		/** Contains a dictionary of URL links to nested resources of this Subscription. */
		links?: string | null;

		/**
		 * A 34 character string that uniquely identifies this Subscription.
		 * Max length: 34
		 * Min length: 34
		 */
		sid?: string | null;

		/**
		 * The SID of the sink that events selected by this subscription should be sent to. Sink must be active for the subscription to be created.
		 * Max length: 34
		 * Min length: 34
		 */
		sink_sid?: string | null;

		/** The URL of this resource. */
		url?: string | null;
	}
	export interface Eventsv1subscriptionFormProperties {

		/**
		 * The unique SID identifier of the Account.
		 * Max length: 34
		 * Min length: 34
		 */
		account_sid: FormControl<string | null | undefined>,

		/** The date that this Subscription was created, given in ISO 8601 format. */
		date_created: FormControl<Date | null | undefined>,

		/** The date that this Subscription was updated, given in ISO 8601 format. */
		date_updated: FormControl<Date | null | undefined>,

		/** A human readable description for the Subscription */
		description: FormControl<string | null | undefined>,

		/** Contains a dictionary of URL links to nested resources of this Subscription. */
		links: FormControl<string | null | undefined>,

		/**
		 * A 34 character string that uniquely identifies this Subscription.
		 * Max length: 34
		 * Min length: 34
		 */
		sid: FormControl<string | null | undefined>,

		/**
		 * The SID of the sink that events selected by this subscription should be sent to. Sink must be active for the subscription to be created.
		 * Max length: 34
		 * Min length: 34
		 */
		sink_sid: FormControl<string | null | undefined>,

		/** The URL of this resource. */
		url: FormControl<string | null | undefined>,
	}
	export function CreateEventsv1subscriptionFormGroup() {
		return new FormGroup<Eventsv1subscriptionFormProperties>({
			account_sid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(34), Validators.maxLength(34), Validators.pattern('^AC[0-9a-fA-F]{32}$')]),
			date_created: new FormControl<Date | null | undefined>(undefined),
			date_updated: new FormControl<Date | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			links: new FormControl<string | null | undefined>(undefined),
			sid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(34), Validators.maxLength(34), Validators.pattern('^DF[0-9a-fA-F]{32}$')]),
			sink_sid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(34), Validators.maxLength(34), Validators.pattern('^DG[0-9a-fA-F]{32}$')]),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Eventsv1subscriptionsubscribed_event {

		/**
		 * The unique SID identifier of the Account.
		 * Max length: 34
		 * Min length: 34
		 */
		account_sid?: string | null;

		/** The schema version that the Subscription should use. */
		schema_version?: number | null;

		/**
		 * The unique SID identifier of the Subscription.
		 * Max length: 34
		 * Min length: 34
		 */
		subscription_sid?: string | null;

		/** Type of event being subscribed to. */
		type?: string | null;

		/** The URL of this resource. */
		url?: string | null;
	}
	export interface Eventsv1subscriptionsubscribed_eventFormProperties {

		/**
		 * The unique SID identifier of the Account.
		 * Max length: 34
		 * Min length: 34
		 */
		account_sid: FormControl<string | null | undefined>,

		/** The schema version that the Subscription should use. */
		schema_version: FormControl<number | null | undefined>,

		/**
		 * The unique SID identifier of the Subscription.
		 * Max length: 34
		 * Min length: 34
		 */
		subscription_sid: FormControl<string | null | undefined>,

		/** Type of event being subscribed to. */
		type: FormControl<string | null | undefined>,

		/** The URL of this resource. */
		url: FormControl<string | null | undefined>,
	}
	export function CreateEventsv1subscriptionsubscribed_eventFormGroup() {
		return new FormGroup<Eventsv1subscriptionsubscribed_eventFormProperties>({
			account_sid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(34), Validators.maxLength(34), Validators.pattern('^AC[0-9a-fA-F]{32}$')]),
			schema_version: new FormControl<number | null | undefined>(undefined),
			subscription_sid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(34), Validators.maxLength(34), Validators.pattern('^DF[0-9a-fA-F]{32}$')]),
			type: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum Sink_enum_sink_type { kinesis = 'kinesis', webhook = 'webhook', segment = 'segment' }

	export enum Sink_enum_status { initialized = 'initialized', validating = 'validating', active = 'active', failed = 'failed' }

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Fetch a specific schema with its nested versions.
		 * Get v1/Schemas/{Id}
		 * @param {string} Id The unique identifier of the schema. Each schema can have multiple versions, that share the same id.
		 * @return {Eventsv1schema} OK
		 */
		FetchSchema(Id: string): Observable<Eventsv1schema> {
			return this.http.get<Eventsv1schema>(this.baseUri + 'v1/Schemas/' + (Id == null ? '' : encodeURIComponent(Id)), {});
		}

		/**
		 * Retrieve a paginated list of versions of the schema.
		 * Get v1/Schemas/{Id}/Versions
		 * @param {string} Id The unique identifier of the schema. Each schema can have multiple versions, that share the same id.
		 * @param {number} PageSize How many resources to return in each list page. The default is 50, and the maximum is 1000.
		 * @param {number} Page The page index. This value is simply for client state.
		 * @param {string} PageToken The page token. This is provided by the API.
		 * @return {ListSchemaVersionReturn} OK
		 */
		ListSchemaVersion(Id: string, PageSize: number | null | undefined, Page: number | null | undefined, PageToken: string | null | undefined): Observable<ListSchemaVersionReturn> {
			return this.http.get<ListSchemaVersionReturn>(this.baseUri + 'v1/Schemas/' + (Id == null ? '' : encodeURIComponent(Id)) + '/Versions&PageSize=' + PageSize + '&Page=' + Page + '&PageToken=' + (PageToken == null ? '' : encodeURIComponent(PageToken)), {});
		}

		/**
		 * Fetch a specific schema and version.
		 * Get v1/Schemas/{Id}/Versions/{SchemaVersion}
		 * @param {string} Id The unique identifier of the schema. Each schema can have multiple versions, that share the same id.
		 * @param {number} SchemaVersion The version of the schema
		 * @return {Eventsv1schemaschema_version} OK
		 */
		FetchSchemaVersion(Id: string, SchemaVersion: number): Observable<Eventsv1schemaschema_version> {
			return this.http.get<Eventsv1schemaschema_version>(this.baseUri + 'v1/Schemas/' + (Id == null ? '' : encodeURIComponent(Id)) + '/Versions/' + SchemaVersion, {});
		}

		/**
		 * Retrieve a paginated list of Sinks belonging to the account used to make the request.
		 * Get v1/Sinks
		 * @param {boolean} InUse A boolean query parameter filtering the results to return sinks used/not used by a subscription.
		 * @param {string} Status A String query parameter filtering the results by status `initialized`, `validating`, `active` or `failed`.
		 * @param {number} PageSize How many resources to return in each list page. The default is 50, and the maximum is 1000.
		 * @param {number} Page The page index. This value is simply for client state.
		 * @param {string} PageToken The page token. This is provided by the API.
		 * @return {ListSinkReturn} OK
		 */
		ListSink(InUse: boolean | null | undefined, Status: string | null | undefined, PageSize: number | null | undefined, Page: number | null | undefined, PageToken: string | null | undefined): Observable<ListSinkReturn> {
			return this.http.get<ListSinkReturn>(this.baseUri + 'v1/Sinks?InUse=' + InUse + '&Status=' + (Status == null ? '' : encodeURIComponent(Status)) + '&PageSize=' + PageSize + '&Page=' + Page + '&PageToken=' + (PageToken == null ? '' : encodeURIComponent(PageToken)), {});
		}

		/**
		 * Delete a specific Sink.
		 * Delete v1/Sinks/{Sid}
		 * @param {string} Sid A 34 character string that uniquely identifies this Sink.
		 * @return {void} 
		 */
		DeleteSink(Sid: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'v1/Sinks/' + (Sid == null ? '' : encodeURIComponent(Sid)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Fetch a specific Sink.
		 * Get v1/Sinks/{Sid}
		 * @param {string} Sid A 34 character string that uniquely identifies this Sink.
		 * @return {Eventsv1sink} OK
		 */
		FetchSink(Sid: string): Observable<Eventsv1sink> {
			return this.http.get<Eventsv1sink>(this.baseUri + 'v1/Sinks/' + (Sid == null ? '' : encodeURIComponent(Sid)), {});
		}

		/**
		 * Create a new Sink Test Event for the given Sink.
		 * Post v1/Sinks/{Sid}/Test
		 * @param {string} Sid A 34 character string that uniquely identifies the Sink to be Tested.
		 * @return {void} 
		 */
		CreateSinkTest(Sid: string): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/Sinks/' + (Sid == null ? '' : encodeURIComponent(Sid)) + '/Test', null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieve a paginated list of Subscriptions belonging to the account used to make the request.
		 * Get v1/Subscriptions
		 * @param {string} SinkSid The SID of the sink that the list of Subscriptions should be filtered by.
		 * @param {number} PageSize How many resources to return in each list page. The default is 50, and the maximum is 1000.
		 * @param {number} Page The page index. This value is simply for client state.
		 * @param {string} PageToken The page token. This is provided by the API.
		 * @return {ListSubscriptionReturn} OK
		 */
		ListSubscription(SinkSid: string | null | undefined, PageSize: number | null | undefined, Page: number | null | undefined, PageToken: string | null | undefined): Observable<ListSubscriptionReturn> {
			return this.http.get<ListSubscriptionReturn>(this.baseUri + 'v1/Subscriptions?SinkSid=' + (SinkSid == null ? '' : encodeURIComponent(SinkSid)) + '&PageSize=' + PageSize + '&Page=' + Page + '&PageToken=' + (PageToken == null ? '' : encodeURIComponent(PageToken)), {});
		}

		/**
		 * Delete a specific Subscription.
		 * Delete v1/Subscriptions/{Sid}
		 * @param {string} Sid A 34 character string that uniquely identifies this Subscription.
		 * @return {void} 
		 */
		DeleteSubscription(Sid: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'v1/Subscriptions/' + (Sid == null ? '' : encodeURIComponent(Sid)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Fetch a specific Subscription.
		 * Get v1/Subscriptions/{Sid}
		 * @param {string} Sid A 34 character string that uniquely identifies this Subscription.
		 * @return {Eventsv1subscription} OK
		 */
		FetchSubscription(Sid: string): Observable<Eventsv1subscription> {
			return this.http.get<Eventsv1subscription>(this.baseUri + 'v1/Subscriptions/' + (Sid == null ? '' : encodeURIComponent(Sid)), {});
		}

		/**
		 * Retrieve a list of all Subscribed Event types for a Subscription.
		 * Get v1/Subscriptions/{SubscriptionSid}/SubscribedEvents
		 * @param {string} SubscriptionSid The unique SID identifier of the Subscription.
		 * @param {number} PageSize How many resources to return in each list page. The default is 50, and the maximum is 1000.
		 * @param {number} Page The page index. This value is simply for client state.
		 * @param {string} PageToken The page token. This is provided by the API.
		 * @return {ListSubscribedEventReturn} OK
		 */
		ListSubscribedEvent(SubscriptionSid: string, PageSize: number | null | undefined, Page: number | null | undefined, PageToken: string | null | undefined): Observable<ListSubscribedEventReturn> {
			return this.http.get<ListSubscribedEventReturn>(this.baseUri + 'v1/Subscriptions/' + (SubscriptionSid == null ? '' : encodeURIComponent(SubscriptionSid)) + '/SubscribedEvents&PageSize=' + PageSize + '&Page=' + Page + '&PageToken=' + (PageToken == null ? '' : encodeURIComponent(PageToken)), {});
		}

		/**
		 * Remove an event type from a Subscription.
		 * Delete v1/Subscriptions/{SubscriptionSid}/SubscribedEvents/{Type}
		 * @param {string} SubscriptionSid The unique SID identifier of the Subscription.
		 * @param {string} Type Type of event being subscribed to.
		 * @return {void} 
		 */
		DeleteSubscribedEvent(SubscriptionSid: string, Type: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'v1/Subscriptions/' + (SubscriptionSid == null ? '' : encodeURIComponent(SubscriptionSid)) + '/SubscribedEvents/' + (Type == null ? '' : encodeURIComponent(Type)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Read an Event for a Subscription.
		 * Get v1/Subscriptions/{SubscriptionSid}/SubscribedEvents/{Type}
		 * @param {string} SubscriptionSid The unique SID identifier of the Subscription.
		 * @param {string} Type Type of event being subscribed to.
		 * @return {Eventsv1subscriptionsubscribed_event} OK
		 */
		FetchSubscribedEvent(SubscriptionSid: string, Type: string): Observable<Eventsv1subscriptionsubscribed_event> {
			return this.http.get<Eventsv1subscriptionsubscribed_event>(this.baseUri + 'v1/Subscriptions/' + (SubscriptionSid == null ? '' : encodeURIComponent(SubscriptionSid)) + '/SubscribedEvents/' + (Type == null ? '' : encodeURIComponent(Type)), {});
		}

		/**
		 * Retrieve a paginated list of all the available Event Types.
		 * Get v1/Types
		 * @param {string} SchemaId A string parameter filtering the results to return only the Event Types using a given schema.
		 * @param {number} PageSize How many resources to return in each list page. The default is 50, and the maximum is 1000.
		 * @param {number} Page The page index. This value is simply for client state.
		 * @param {string} PageToken The page token. This is provided by the API.
		 * @return {ListEventTypeReturn} OK
		 */
		ListEventType(SchemaId: string | null | undefined, PageSize: number | null | undefined, Page: number | null | undefined, PageToken: string | null | undefined): Observable<ListEventTypeReturn> {
			return this.http.get<ListEventTypeReturn>(this.baseUri + 'v1/Types?SchemaId=' + (SchemaId == null ? '' : encodeURIComponent(SchemaId)) + '&PageSize=' + PageSize + '&Page=' + Page + '&PageToken=' + (PageToken == null ? '' : encodeURIComponent(PageToken)), {});
		}

		/**
		 * Fetch a specific Event Type.
		 * Get v1/Types/{Type}
		 * @param {string} Type A string that uniquely identifies this Event Type.
		 * @return {Eventsv1event_type} OK
		 */
		FetchEventType(Type: string): Observable<Eventsv1event_type> {
			return this.http.get<Eventsv1event_type>(this.baseUri + 'v1/Types/' + (Type == null ? '' : encodeURIComponent(Type)), {});
		}
	}

	export interface ListSchemaVersionReturn {
		meta?: ListSchemaVersionReturnMeta;
		schema_versions?: Array<Eventsv1schemaschema_version>;
	}
	export interface ListSchemaVersionReturnFormProperties {
	}
	export function CreateListSchemaVersionReturnFormGroup() {
		return new FormGroup<ListSchemaVersionReturnFormProperties>({
		});

	}

	export interface ListSchemaVersionReturnMeta {
		first_page_url?: string | null;
		key?: string | null;
		next_page_url?: string | null;
		page?: number | null;
		page_size?: number | null;
		previous_page_url?: string | null;
		url?: string | null;
	}
	export interface ListSchemaVersionReturnMetaFormProperties {
		first_page_url: FormControl<string | null | undefined>,
		key: FormControl<string | null | undefined>,
		next_page_url: FormControl<string | null | undefined>,
		page: FormControl<number | null | undefined>,
		page_size: FormControl<number | null | undefined>,
		previous_page_url: FormControl<string | null | undefined>,
		url: FormControl<string | null | undefined>,
	}
	export function CreateListSchemaVersionReturnMetaFormGroup() {
		return new FormGroup<ListSchemaVersionReturnMetaFormProperties>({
			first_page_url: new FormControl<string | null | undefined>(undefined),
			key: new FormControl<string | null | undefined>(undefined),
			next_page_url: new FormControl<string | null | undefined>(undefined),
			page: new FormControl<number | null | undefined>(undefined),
			page_size: new FormControl<number | null | undefined>(undefined),
			previous_page_url: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListSinkReturn {
		meta?: ListSinkReturnMeta;
		sinks?: Array<Eventsv1sink>;
	}
	export interface ListSinkReturnFormProperties {
	}
	export function CreateListSinkReturnFormGroup() {
		return new FormGroup<ListSinkReturnFormProperties>({
		});

	}

	export interface ListSinkReturnMeta {
		first_page_url?: string | null;
		key?: string | null;
		next_page_url?: string | null;
		page?: number | null;
		page_size?: number | null;
		previous_page_url?: string | null;
		url?: string | null;
	}
	export interface ListSinkReturnMetaFormProperties {
		first_page_url: FormControl<string | null | undefined>,
		key: FormControl<string | null | undefined>,
		next_page_url: FormControl<string | null | undefined>,
		page: FormControl<number | null | undefined>,
		page_size: FormControl<number | null | undefined>,
		previous_page_url: FormControl<string | null | undefined>,
		url: FormControl<string | null | undefined>,
	}
	export function CreateListSinkReturnMetaFormGroup() {
		return new FormGroup<ListSinkReturnMetaFormProperties>({
			first_page_url: new FormControl<string | null | undefined>(undefined),
			key: new FormControl<string | null | undefined>(undefined),
			next_page_url: new FormControl<string | null | undefined>(undefined),
			page: new FormControl<number | null | undefined>(undefined),
			page_size: new FormControl<number | null | undefined>(undefined),
			previous_page_url: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListSubscriptionReturn {
		meta?: ListSubscriptionReturnMeta;
		subscriptions?: Array<Eventsv1subscription>;
	}
	export interface ListSubscriptionReturnFormProperties {
	}
	export function CreateListSubscriptionReturnFormGroup() {
		return new FormGroup<ListSubscriptionReturnFormProperties>({
		});

	}

	export interface ListSubscriptionReturnMeta {
		first_page_url?: string | null;
		key?: string | null;
		next_page_url?: string | null;
		page?: number | null;
		page_size?: number | null;
		previous_page_url?: string | null;
		url?: string | null;
	}
	export interface ListSubscriptionReturnMetaFormProperties {
		first_page_url: FormControl<string | null | undefined>,
		key: FormControl<string | null | undefined>,
		next_page_url: FormControl<string | null | undefined>,
		page: FormControl<number | null | undefined>,
		page_size: FormControl<number | null | undefined>,
		previous_page_url: FormControl<string | null | undefined>,
		url: FormControl<string | null | undefined>,
	}
	export function CreateListSubscriptionReturnMetaFormGroup() {
		return new FormGroup<ListSubscriptionReturnMetaFormProperties>({
			first_page_url: new FormControl<string | null | undefined>(undefined),
			key: new FormControl<string | null | undefined>(undefined),
			next_page_url: new FormControl<string | null | undefined>(undefined),
			page: new FormControl<number | null | undefined>(undefined),
			page_size: new FormControl<number | null | undefined>(undefined),
			previous_page_url: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListSubscribedEventReturn {
		meta?: ListSubscribedEventReturnMeta;
		types?: Array<Eventsv1subscriptionsubscribed_event>;
	}
	export interface ListSubscribedEventReturnFormProperties {
	}
	export function CreateListSubscribedEventReturnFormGroup() {
		return new FormGroup<ListSubscribedEventReturnFormProperties>({
		});

	}

	export interface ListSubscribedEventReturnMeta {
		first_page_url?: string | null;
		key?: string | null;
		next_page_url?: string | null;
		page?: number | null;
		page_size?: number | null;
		previous_page_url?: string | null;
		url?: string | null;
	}
	export interface ListSubscribedEventReturnMetaFormProperties {
		first_page_url: FormControl<string | null | undefined>,
		key: FormControl<string | null | undefined>,
		next_page_url: FormControl<string | null | undefined>,
		page: FormControl<number | null | undefined>,
		page_size: FormControl<number | null | undefined>,
		previous_page_url: FormControl<string | null | undefined>,
		url: FormControl<string | null | undefined>,
	}
	export function CreateListSubscribedEventReturnMetaFormGroup() {
		return new FormGroup<ListSubscribedEventReturnMetaFormProperties>({
			first_page_url: new FormControl<string | null | undefined>(undefined),
			key: new FormControl<string | null | undefined>(undefined),
			next_page_url: new FormControl<string | null | undefined>(undefined),
			page: new FormControl<number | null | undefined>(undefined),
			page_size: new FormControl<number | null | undefined>(undefined),
			previous_page_url: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListEventTypeReturn {
		meta?: ListEventTypeReturnMeta;
		types?: Array<Eventsv1event_type>;
	}
	export interface ListEventTypeReturnFormProperties {
	}
	export function CreateListEventTypeReturnFormGroup() {
		return new FormGroup<ListEventTypeReturnFormProperties>({
		});

	}

	export interface ListEventTypeReturnMeta {
		first_page_url?: string | null;
		key?: string | null;
		next_page_url?: string | null;
		page?: number | null;
		page_size?: number | null;
		previous_page_url?: string | null;
		url?: string | null;
	}
	export interface ListEventTypeReturnMetaFormProperties {
		first_page_url: FormControl<string | null | undefined>,
		key: FormControl<string | null | undefined>,
		next_page_url: FormControl<string | null | undefined>,
		page: FormControl<number | null | undefined>,
		page_size: FormControl<number | null | undefined>,
		previous_page_url: FormControl<string | null | undefined>,
		url: FormControl<string | null | undefined>,
	}
	export function CreateListEventTypeReturnMetaFormGroup() {
		return new FormGroup<ListEventTypeReturnMetaFormProperties>({
			first_page_url: new FormControl<string | null | undefined>(undefined),
			key: new FormControl<string | null | undefined>(undefined),
			next_page_url: new FormControl<string | null | undefined>(undefined),
			page: new FormControl<number | null | undefined>(undefined),
			page_size: new FormControl<number | null | undefined>(undefined),
			previous_page_url: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

}

