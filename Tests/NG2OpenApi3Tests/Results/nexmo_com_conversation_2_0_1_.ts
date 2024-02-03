import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface _links_conversation {
		self?: _links_conversationSelf;
	}
	export interface _links_conversationFormProperties {
	}
	export function Create_links_conversationFormGroup() {
		return new FormGroup<_links_conversationFormProperties>({
		});

	}

	export interface _links_conversationSelf {

		/** A link towards a conversation included in Conversation API */
		href?: string | null;
	}
	export interface _links_conversationSelfFormProperties {

		/** A link towards a conversation included in Conversation API */
		href: FormControl<string | null | undefined>,
	}
	export function Create_links_conversationSelfFormGroup() {
		return new FormGroup<_links_conversationSelfFormProperties>({
			href: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A series of links between resources in this API in the http://stateless.co/hal_specification.html. */
	export interface _links_conversations_list {

		/** Required */
		self: _links_conversations_listSelf;
	}

	/** A series of links between resources in this API in the http://stateless.co/hal_specification.html. */
	export interface _links_conversations_listFormProperties {
	}
	export function Create_links_conversations_listFormGroup() {
		return new FormGroup<_links_conversations_listFormProperties>({
		});

	}

	export interface _links_conversations_listSelf {

		/**
		 * A link towards a conversations list included in Conversation API
		 * Required
		 */
		href: string;
	}
	export interface _links_conversations_listSelfFormProperties {

		/**
		 * A link towards a conversations list included in Conversation API
		 * Required
		 */
		href: FormControl<string | null | undefined>,
	}
	export function Create_links_conversations_listSelfFormGroup() {
		return new FormGroup<_links_conversations_listSelfFormProperties>({
			href: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Recording Action */
	export enum Action { start = 'start', stop = 'stop' }


	/** A user who joins a conversation as a member can have one channel per membership type. Channels can be `app`, `phone`, `sip`, `websocket`, or `vbc` */
	export interface Channel {
		from?: ChannelFrom;

		/** The id of the leg. rtc_id and call_id are leg id */
		leg_id?: string | null;

		/** Leg ids associated with this Channel. The first item in the array represents the main active Leg. The second item, if exists, represents a screen-share Leg. */
		ChannelLeg_ids?: Array<ChannelLeg_ids>;
		to?: Channel;

		/** Channel type */
		type?: ChannelType | null;
	}

	/** A user who joins a conversation as a member can have one channel per membership type. Channels can be `app`, `phone`, `sip`, `websocket`, or `vbc` */
	export interface ChannelFormProperties {

		/** The id of the leg. rtc_id and call_id are leg id */
		leg_id: FormControl<string | null | undefined>,

		/** Channel type */
		type: FormControl<ChannelType | null | undefined>,
	}
	export function CreateChannelFormGroup() {
		return new FormGroup<ChannelFormProperties>({
			leg_id: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<ChannelType | null | undefined>(undefined),
		});

	}

	export interface ChannelFrom {

		/**
		 * The type of connection. Must be `app`
		 * Required
		 */
		type: string;

		/**
		 * The username to connect to
		 * Required
		 */
		user: string;
	}
	export interface ChannelFromFormProperties {

		/**
		 * The type of connection. Must be `app`
		 * Required
		 */
		type: FormControl<string | null | undefined>,

		/**
		 * The username to connect to
		 * Required
		 */
		user: FormControl<string | null | undefined>,
	}
	export function CreateChannelFromFormGroup() {
		return new FormGroup<ChannelFromFormProperties>({
			type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			user: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ChannelLeg_ids {

		/** The id of the leg. rtc_id and call_id are leg id */
		leg_id?: string | null;
	}
	export interface ChannelLeg_idsFormProperties {

		/** The id of the leg. rtc_id and call_id are leg id */
		leg_id: FormControl<string | null | undefined>,
	}
	export function CreateChannelLeg_idsFormGroup() {
		return new FormGroup<ChannelLeg_idsFormProperties>({
			leg_id: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ChannelType { app = 'app', phone = 'phone', sip = 'sip', websocket = 'websocket', vbc = 'vbc' }


	/** Channel type */
	export enum Channel_type { app = 'app', phone = 'phone', sip = 'sip', websocket = 'websocket', vbc = 'vbc' }


	/** Conversation properties */
	export interface Conversation_properties {

		/** Time to leave. After how many seconds an empty conversation is deleted. */
		ttl?: number | null;
	}

	/** Conversation properties */
	export interface Conversation_propertiesFormProperties {

		/** Time to leave. After how many seconds an empty conversation is deleted. */
		ttl: FormControl<number | null | undefined>,
	}
	export function CreateConversation_propertiesFormGroup() {
		return new FormGroup<Conversation_propertiesFormProperties>({
			ttl: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Event Body */
	export interface Event_body {
	}

	/** Event Body */
	export interface Event_bodyFormProperties {
	}
	export function CreateEvent_bodyFormGroup() {
		return new FormGroup<Event_bodyFormProperties>({
		});

	}


	/** Retrieve Events Response Payload Object Item */
	export interface Event_retrieved {

		/**
		 * Event Body
		 * Required
		 */
		body: Event_body;

		/** Member ID */
		from?: string | null;

		/**
		 * A link towards a conversation event included in Conversation API
		 * Required
		 */
		href: string;

		/**
		 * Event id. This is a progressive integer
		 * Required
		 */
		id: string;

		/** The state that the member is in. Possible values are `invited`, `joined`, `left`, or `unknown` */
		state?: Event_retrievedState | null;

		/**
		 * Time of creation
		 * Required
		 */
		timestamp: string;

		/** Member ID */
		to?: string | null;

		/**
		 * Event type
		 * Required
		 */
		type: string;
	}

	/** Retrieve Events Response Payload Object Item */
	export interface Event_retrievedFormProperties {

		/** Member ID */
		from: FormControl<string | null | undefined>,

		/**
		 * A link towards a conversation event included in Conversation API
		 * Required
		 */
		href: FormControl<string | null | undefined>,

		/**
		 * Event id. This is a progressive integer
		 * Required
		 */
		id: FormControl<string | null | undefined>,

		/** The state that the member is in. Possible values are `invited`, `joined`, `left`, or `unknown` */
		state: FormControl<Event_retrievedState | null | undefined>,

		/**
		 * Time of creation
		 * Required
		 */
		timestamp: FormControl<string | null | undefined>,

		/** Member ID */
		to: FormControl<string | null | undefined>,

		/**
		 * Event type
		 * Required
		 */
		type: FormControl<string | null | undefined>,
	}
	export function CreateEvent_retrievedFormGroup() {
		return new FormGroup<Event_retrievedFormProperties>({
			from: new FormControl<string | null | undefined>(undefined),
			href: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			state: new FormControl<Event_retrievedState | null | undefined>(undefined),
			timestamp: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			to: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum Event_retrievedState { invited = 'invited', joined = 'joined', left = 'left', unknown = 'unknown' }


	/** Record the Conversation in a specific format. */
	export enum Format { mp3 = 'mp3', wav = 'wav' }

	export interface Initiator {
		joined?: InitiatorJoined;
	}
	export interface InitiatorFormProperties {
	}
	export function CreateInitiatorFormGroup() {
		return new FormGroup<InitiatorFormProperties>({
		});

	}

	export interface InitiatorJoined {

		/** `true` if the user was invited by an admin JWT. `user_id` and `member_id` will not exist if `true` */
		isSystem?: boolean | null;

		/** Member ID */
		member_id?: string | null;

		/** User ID */
		user_id?: string | null;
	}
	export interface InitiatorJoinedFormProperties {

		/** `true` if the user was invited by an admin JWT. `user_id` and `member_id` will not exist if `true` */
		isSystem: FormControl<boolean | null | undefined>,

		/** Member ID */
		member_id: FormControl<string | null | undefined>,

		/** User ID */
		user_id: FormControl<string | null | undefined>,
	}
	export function CreateInitiatorJoinedFormGroup() {
		return new FormGroup<InitiatorJoinedFormProperties>({
			isSystem: new FormControl<boolean | null | undefined>(undefined),
			member_id: new FormControl<string | null | undefined>(undefined),
			user_id: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Leg Status */
	export enum Leg_state { terminated = 'terminated' }


	/** Media Object */
	export interface Media {
	}

	/** Media Object */
	export interface MediaFormProperties {
	}
	export function CreateMediaFormGroup() {
		return new FormGroup<MediaFormProperties>({
		});

	}


	/** Invite or join a member to a conversation */
	export enum Member_action { invite = 'invite', join = 'join' }


	/** The state that the member is in. Possible values are `invited`, `joined`, `left`, or `unknown` */
	export enum Member_state { invited = 'invited', joined = 'joined', left = 'left', unknown = 'unknown' }

	export interface Timestamp_obj_leg {

		/** Timestamp */
		end?: string | null;

		/** Timestamp */
		request?: string | null;

		/** Time of creation */
		start?: string | null;
	}
	export interface Timestamp_obj_legFormProperties {

		/** Timestamp */
		end: FormControl<string | null | undefined>,

		/** Timestamp */
		request: FormControl<string | null | undefined>,

		/** Time of creation */
		start: FormControl<string | null | undefined>,
	}
	export function CreateTimestamp_obj_legFormGroup() {
		return new FormGroup<Timestamp_obj_legFormProperties>({
			end: new FormControl<string | null | undefined>(undefined),
			request: new FormControl<string | null | undefined>(undefined),
			start: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Timestamp_res_conversation {

		/** Time of creation */
		created?: string | null;

		/** Time of last update */
		destroyed?: string | null;

		/** Time of last update */
		updated?: string | null;
	}
	export interface Timestamp_res_conversationFormProperties {

		/** Time of creation */
		created: FormControl<string | null | undefined>,

		/** Time of last update */
		destroyed: FormControl<string | null | undefined>,

		/** Time of last update */
		updated: FormControl<string | null | undefined>,
	}
	export function CreateTimestamp_res_conversationFormGroup() {
		return new FormGroup<Timestamp_res_conversationFormProperties>({
			created: new FormControl<string | null | undefined>(undefined),
			destroyed: new FormControl<string | null | undefined>(undefined),
			updated: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Timestamp_res_member {

		/** Timestamp */
		invited?: string | null;

		/** Timestamp */
		joined?: string | null;

		/** Timestamp */
		left?: string | null;
	}
	export interface Timestamp_res_memberFormProperties {

		/** Timestamp */
		invited: FormControl<string | null | undefined>,

		/** Timestamp */
		joined: FormControl<string | null | undefined>,

		/** Timestamp */
		left: FormControl<string | null | undefined>,
	}
	export function CreateTimestamp_res_memberFormGroup() {
		return new FormGroup<Timestamp_res_memberFormProperties>({
			invited: new FormControl<string | null | undefined>(undefined),
			joined: new FormControl<string | null | undefined>(undefined),
			left: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Conversation {

		/** The display name for the conversation. It does not have to be unique */
		display_name?: string | null;

		/** A link to an image for conversations' and users' avatars */
		image_url?: string | null;

		/** Unique name for a conversation */
		name?: string | null;

		/** Conversation properties */
		properties?: Conversation_properties;
	}
	export interface ConversationFormProperties {

		/** The display name for the conversation. It does not have to be unique */
		display_name: FormControl<string | null | undefined>,

		/** A link to an image for conversations' and users' avatars */
		image_url: FormControl<string | null | undefined>,

		/** Unique name for a conversation */
		name: FormControl<string | null | undefined>,
	}
	export function CreateConversationFormGroup() {
		return new FormGroup<ConversationFormProperties>({
			display_name: new FormControl<string | null | undefined>(undefined),
			image_url: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface RecordConversation {

		/**
		 * Recording Action
		 * Required
		 */
		action: Action;

		/** The HTTP method used to send event information to event_url. */
		event_method?: string | null;

		/** The webhook endpoint where recording progress events are sent to. */
		event_url?: Array<string>;

		/** Record the Conversation in a specific format. */
		format?: Format | null;

		/** Record the sent and received audio in separate channels of a stereo recording */
		split?: string | null;
	}
	export interface RecordConversationFormProperties {

		/**
		 * Recording Action
		 * Required
		 */
		action: FormControl<Action | null | undefined>,

		/** The HTTP method used to send event information to event_url. */
		event_method: FormControl<string | null | undefined>,

		/** Record the Conversation in a specific format. */
		format: FormControl<Format | null | undefined>,

		/** Record the sent and received audio in separate channels of a stereo recording */
		split: FormControl<string | null | undefined>,
	}
	export function CreateRecordConversationFormGroup() {
		return new FormGroup<RecordConversationFormProperties>({
			action: new FormControl<Action | null | undefined>(undefined, [Validators.required]),
			event_method: new FormControl<string | null | undefined>(undefined),
			format: new FormControl<Format | null | undefined>(undefined),
			split: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * List conversations
		 * This endpoint is **DEPRECATED**. Please use [/v0.2/conversations](/api/conversation.v2#get-conversations).
		 * List all conversations associated with your application. This endpoint required an admin JWT. To find all conversations for the currently logged in user, see [GET /users/:id/conversations](#getuserConversations)
		 * Get conversations
		 * @param {string} date_start Return the records that occurred after this point in time.
		 * @param {string} date_end Return the records that occurred before this point in time.
		 * @param {number} page_size Return this amount of records in the response
		 * @param {number} record_index Return calls from this index in the response
		 * @param {ListConversationsOrder} order Return the records in ascending or descending order.
		 * @return {ListConversationsReturn} List Conversations Response Payload Object.
		 */
		ListConversations(date_start: string | null | undefined, date_end: string | null | undefined, page_size: number | null | undefined, record_index: number | null | undefined, order: ListConversationsOrder | null | undefined): Observable<ListConversationsReturn> {
			return this.http.get<ListConversationsReturn>(this.baseUri + 'conversations?date_start=' + (date_start == null ? '' : encodeURIComponent(date_start)) + '&date_end=' + (date_end == null ? '' : encodeURIComponent(date_end)) + '&page_size=' + page_size + '&record_index=' + record_index + '&order=' + order, {});
		}

		/**
		 * Create a conversation
		 * Post conversations
		 * @param {Conversation} requestBody Conversation Request Payload Object
		 * @return {CreateConversationReturn} Create / Update Conversation Response Payload Object
		 */
		CreateConversation(requestBody: Conversation): Observable<CreateConversationReturn> {
			return this.http.post<CreateConversationReturn>(this.baseUri + 'conversations', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Delete a conversation
		 * Delete conversations/{conversation_id}
		 * @return {string} Success response with empty JSON
		 */
		DeleteConversation(): Observable<string> {
			return this.http.delete(this.baseUri + 'conversations/{conversation_id}', { responseType: 'text' });
		}

		/**
		 * Retrieve a conversation
		 * Get conversations/{conversation_id}
		 * @return {RetrieveConversationReturn} Retrieve a conversation
		 */
		RetrieveConversation(): Observable<RetrieveConversationReturn> {
			return this.http.get<RetrieveConversationReturn>(this.baseUri + 'conversations/{conversation_id}', {});
		}

		/**
		 * Update a conversation
		 * Put conversations/{conversation_id}
		 * @param {Conversation} requestBody Conversation Request Payload Object
		 * @return {ReplaceConversationReturn} Create / Update Conversation Response Payload Object
		 */
		ReplaceConversation(requestBody: Conversation): Observable<ReplaceConversationReturn> {
			return this.http.put<ReplaceConversationReturn>(this.baseUri + 'conversations/{conversation_id}', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * List events
		 * This endpoint is **DEPRECATED**. Please use [/v0.2/events](/api/conversation.v2#get-events).
		 * Get conversations/{conversation_id}/events
		 * @return {Array<Event_retrieved>} Retrieve Events Response Payload Object
		 */
		GetEvents(): Observable<Array<Event_retrieved>> {
			return this.http.get<Array<Event_retrieved>>(this.baseUri + 'conversations/{conversation_id}/events', {});
		}

		/**
		 * Create an event
		 * Post conversations/{conversation_id}/events
		 * @return {void} 
		 */
		CreateEvent(requestBody: CreateEventPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'conversations/{conversation_id}/events', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete an event
		 * Delete conversations/{conversation_id}/events/{event_id}
		 * @return {string} Success response with empty JSON
		 */
		DeleteEvent(): Observable<string> {
			return this.http.delete(this.baseUri + 'conversations/{conversation_id}/events/{event_id}', { responseType: 'text' });
		}

		/**
		 * Retrieve an event
		 * Get conversations/{conversation_id}/events/{event_id}
		 * @return {Event_retrieved} Retrieve an event Content Payload
		 */
		GetEvent(): Observable<Event_retrieved> {
			return this.http.get<Event_retrieved>(this.baseUri + 'conversations/{conversation_id}/events/{event_id}', {});
		}

		/**
		 * List members
		 * This endpoint is **DEPRECATED**. Please use [/v0.2/members](/api/conversation.v2#get-members).
		 * Get conversations/{conversation_id}/members
		 * @return {Array<GetMembersReturn>} Members List Object
		 */
		GetMembers(): Observable<Array<GetMembersReturn>> {
			return this.http.get<Array<GetMembersReturn>>(this.baseUri + 'conversations/{conversation_id}/members', {});
		}

		/**
		 * Create a member
		 * Post conversations/{conversation_id}/members
		 * @return {void} 
		 */
		CreateMember(requestBody: CreateMemberPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'conversations/{conversation_id}/members', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete a member
		 * Delete conversations/{conversation_id}/members/{member_id}
		 * @return {string} Success response with empty JSON
		 */
		DeleteMember(): Observable<string> {
			return this.http.delete(this.baseUri + 'conversations/{conversation_id}/members/{member_id}', { responseType: 'text' });
		}

		/**
		 * Retrieve a member
		 * Get conversations/{conversation_id}/members/{member_id}
		 * @return {any} Retrieve member payload
		 */
		GetMember(): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'conversations/{conversation_id}/members/{member_id}', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Update a member
		 * Put conversations/{conversation_id}/members/{member_id}
		 * @return {any} Member retrieved
		 */
		UpdateMember(requestBody: any): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'conversations/{conversation_id}/members/{member_id}', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Record a conversation
		 * Put conversations/{conversation_id}/record
		 * @param {RecordConversation} requestBody Record Conversation Request Payload Object
		 * @return {void} 
		 */
		RecordConversation(requestBody: RecordConversation): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'conversations/{conversation_id}/record', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * List legs
		 * Get legs
		 * @return {ListLegsReturn} List Legs Successfully
		 */
		ListLegs(): Observable<ListLegsReturn> {
			return this.http.get<ListLegsReturn>(this.baseUri + 'legs', {});
		}

		/**
		 * Delete a leg
		 * Delete legs/{leg_id}
		 * @return {string} Success response with empty JSON
		 */
		DeleteLeg(): Observable<string> {
			return this.http.delete(this.baseUri + 'legs/{leg_id}', { responseType: 'text' });
		}

		/**
		 * List users
		 * This endpoint is **DEPRECATED**. Please use [/v0.2/users](/api/conversation.v2#get-users).
		 * Get users
		 * @return {Array<GetUsersReturn>} List of users
		 */
		GetUsers(): Observable<Array<GetUsersReturn>> {
			return this.http.get<Array<GetUsersReturn>>(this.baseUri + 'users', {});
		}

		/**
		 * Create a user
		 * Note: Users must be created with an admin JWT.
		 * Post users
		 * @return {CreateUserReturn} Create a user response
		 */
		CreateUser(requestBody: CreateUserPostBody): Observable<CreateUserReturn> {
			return this.http.post<CreateUserReturn>(this.baseUri + 'users', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Delete a user
		 * Delete users/{user_id}
		 * @return {string} Success response with empty JSON
		 */
		DeleteUser(): Observable<string> {
			return this.http.delete(this.baseUri + 'users/{user_id}', { responseType: 'text' });
		}

		/**
		 * Retrieve a user
		 * Get users/{user_id}
		 * @return {any} Retrieve a user
		 */
		GetUser(): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'users/{user_id}', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Update a user
		 * Put users/{user_id}
		 * @return {any} Retrieve a user
		 */
		UpdateUser(requestBody: any): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'users/{user_id}', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * List user conversations
		 * Get users/{user_id}/conversations
		 * @return {Array<GetuserConversationsReturn>} List user conversations
		 */
		GetuserConversations(): Observable<Array<GetuserConversationsReturn>> {
			return this.http.get<Array<GetuserConversationsReturn>>(this.baseUri + 'users/{user_id}/conversations', {});
		}
	}

	export enum ListConversationsOrder { asc = 'asc', desc = 'desc', ASC = 'ASC', DESC = 'DESC' }

	export interface ListConversationsReturn {

		/**
		 * A list of conversation objects. See the [get details of a specific conversation](#retrieveConversation) response fields for a description of the nested objects
		 * Required
		 */
		_embedded: ListConversationsReturn_embedded;

		/**
		 * A series of links between resources in this API in the http://stateless.co/hal_specification.html.
		 * Required
		 */
		_links: _links_conversations_list;

		/**
		 * The total number of records returned by your request.
		 * Required
		 */
		count: number;

		/**
		 * The amount of records returned in this response
		 * Required
		 * Minimum: 1
		 * Maximum: 100
		 */
		page_size: number;

		/**
		 * Return `page_size` amount of conversations from this index in the response. That is, if your request returns 300 conversations, set `record_index` to 5 in order to return conversations 50 to 59. The default value is 0. That is, the first `page_size` calls.
		 * Required
		 * Minimum: 0
		 */
		record_index: number;
	}
	export interface ListConversationsReturnFormProperties {

		/**
		 * The total number of records returned by your request.
		 * Required
		 */
		count: FormControl<number | null | undefined>,

		/**
		 * The amount of records returned in this response
		 * Required
		 * Minimum: 1
		 * Maximum: 100
		 */
		page_size: FormControl<number | null | undefined>,

		/**
		 * Return `page_size` amount of conversations from this index in the response. That is, if your request returns 300 conversations, set `record_index` to 5 in order to return conversations 50 to 59. The default value is 0. That is, the first `page_size` calls.
		 * Required
		 * Minimum: 0
		 */
		record_index: FormControl<number | null | undefined>,
	}
	export function CreateListConversationsReturnFormGroup() {
		return new FormGroup<ListConversationsReturnFormProperties>({
			count: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			page_size: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(1), Validators.max(100)]),
			record_index: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(0)]),
		});

	}

	export interface ListConversationsReturn_embedded {

		/** Required */
		ListConversationsReturn_embeddedConversations: Array<ListConversationsReturn_embeddedConversations>;
	}
	export interface ListConversationsReturn_embeddedFormProperties {
	}
	export function CreateListConversationsReturn_embeddedFormGroup() {
		return new FormGroup<ListConversationsReturn_embeddedFormProperties>({
		});

	}

	export interface ListConversationsReturn_embeddedConversations {
		_links?: ListConversationsReturn_embeddedConversations_links;

		/**
		 * Unique name for a conversation
		 * Required
		 */
		name: string;

		/**
		 * The unique identifier for this conversation
		 * Required
		 */
		uuid: string;
	}
	export interface ListConversationsReturn_embeddedConversationsFormProperties {

		/**
		 * Unique name for a conversation
		 * Required
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * The unique identifier for this conversation
		 * Required
		 */
		uuid: FormControl<string | null | undefined>,
	}
	export function CreateListConversationsReturn_embeddedConversationsFormGroup() {
		return new FormGroup<ListConversationsReturn_embeddedConversationsFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			uuid: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ListConversationsReturn_embeddedConversations_links {
		self?: ListConversationsReturn_embeddedConversations_linksSelf;
	}
	export interface ListConversationsReturn_embeddedConversations_linksFormProperties {
	}
	export function CreateListConversationsReturn_embeddedConversations_linksFormGroup() {
		return new FormGroup<ListConversationsReturn_embeddedConversations_linksFormProperties>({
		});

	}

	export interface ListConversationsReturn_embeddedConversations_linksSelf {

		/** A link towards a conversation included in Conversation API */
		href?: string | null;
	}
	export interface ListConversationsReturn_embeddedConversations_linksSelfFormProperties {

		/** A link towards a conversation included in Conversation API */
		href: FormControl<string | null | undefined>,
	}
	export function CreateListConversationsReturn_embeddedConversations_linksSelfFormGroup() {
		return new FormGroup<ListConversationsReturn_embeddedConversations_linksSelfFormProperties>({
			href: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateConversationReturn {

		/**
		 * A link towards a conversation included in Conversation API
		 * Required
		 */
		href: string;

		/**
		 * The unique identifier for this conversation
		 * Required
		 */
		id: string;
	}
	export interface CreateConversationReturnFormProperties {

		/**
		 * A link towards a conversation included in Conversation API
		 * Required
		 */
		href: FormControl<string | null | undefined>,

		/**
		 * The unique identifier for this conversation
		 * Required
		 */
		id: FormControl<string | null | undefined>,
	}
	export function CreateCreateConversationReturnFormGroup() {
		return new FormGroup<CreateConversationReturnFormProperties>({
			href: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface RetrieveConversationReturn {
		_links?: _links_conversation;

		/** The API key for your account */
		api_key?: string | null;

		/** The display name for the conversation. It does not have to be unique */
		display_name?: string | null;

		/** Users associated to this conversation as members */
		RetrieveConversationReturnMembers?: Array<RetrieveConversationReturnMembers>;

		/** Unique name for a conversation */
		name?: string | null;
		numbers?: string | null;
		properties?: RetrieveConversationReturnProperties;

		/** The last Event ID in this conversation. This ID can be used to [retrieve a specific event](#getEvent) */
		sequence_number?: string | null;
		timestamp?: Timestamp_res_conversation;

		/**
		 * The unique identifier for this conversation
		 * Required
		 */
		uuid: string;
	}
	export interface RetrieveConversationReturnFormProperties {

		/** The API key for your account */
		api_key: FormControl<string | null | undefined>,

		/** The display name for the conversation. It does not have to be unique */
		display_name: FormControl<string | null | undefined>,

		/** Unique name for a conversation */
		name: FormControl<string | null | undefined>,
		numbers: FormControl<string | null | undefined>,

		/** The last Event ID in this conversation. This ID can be used to [retrieve a specific event](#getEvent) */
		sequence_number: FormControl<string | null | undefined>,

		/**
		 * The unique identifier for this conversation
		 * Required
		 */
		uuid: FormControl<string | null | undefined>,
	}
	export function CreateRetrieveConversationReturnFormGroup() {
		return new FormGroup<RetrieveConversationReturnFormProperties>({
			api_key: new FormControl<string | null | undefined>(undefined),
			display_name: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			numbers: new FormControl<string | null | undefined>(undefined),
			sequence_number: new FormControl<string | null | undefined>(undefined),
			uuid: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface RetrieveConversationReturnMembers {

		/** A user who joins a conversation as a member can have one channel per membership type. Channels can be `app`, `phone`, `sip`, `websocket`, or `vbc` */
		channel?: Channel;
		initiator?: Initiator;

		/** Member ID */
		member_id?: string | null;

		/** Unique name for a user */
		name?: string | null;

		/** The state that the member is in. Possible values are `invited`, `joined`, `left`, or `unknown` */
		state?: Event_retrievedState | null;
		timestamp?: Timestamp_res_member;

		/** User ID */
		user_id?: string | null;
	}
	export interface RetrieveConversationReturnMembersFormProperties {

		/** Member ID */
		member_id: FormControl<string | null | undefined>,

		/** Unique name for a user */
		name: FormControl<string | null | undefined>,

		/** The state that the member is in. Possible values are `invited`, `joined`, `left`, or `unknown` */
		state: FormControl<Event_retrievedState | null | undefined>,

		/** User ID */
		user_id: FormControl<string | null | undefined>,
	}
	export function CreateRetrieveConversationReturnMembersFormGroup() {
		return new FormGroup<RetrieveConversationReturnMembersFormProperties>({
			member_id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<Event_retrievedState | null | undefined>(undefined),
			user_id: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface RetrieveConversationReturnProperties {
		video?: boolean | null;
	}
	export interface RetrieveConversationReturnPropertiesFormProperties {
		video: FormControl<boolean | null | undefined>,
	}
	export function CreateRetrieveConversationReturnPropertiesFormGroup() {
		return new FormGroup<RetrieveConversationReturnPropertiesFormProperties>({
			video: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface ReplaceConversationReturn {

		/**
		 * A link towards a conversation included in Conversation API
		 * Required
		 */
		href: string;

		/**
		 * The unique identifier for this conversation
		 * Required
		 */
		id: string;
	}
	export interface ReplaceConversationReturnFormProperties {

		/**
		 * A link towards a conversation included in Conversation API
		 * Required
		 */
		href: FormControl<string | null | undefined>,

		/**
		 * The unique identifier for this conversation
		 * Required
		 */
		id: FormControl<string | null | undefined>,
	}
	export function CreateReplaceConversationReturnFormGroup() {
		return new FormGroup<ReplaceConversationReturnFormProperties>({
			href: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateEventPostBody {

		/** Event Body */
		body?: Event_body;

		/**
		 * Member ID
		 * Required
		 */
		from: string;

		/** Member ID */
		to?: string | null;

		/**
		 * Event type
		 * Required
		 */
		type: string;
	}
	export interface CreateEventPostBodyFormProperties {

		/**
		 * Member ID
		 * Required
		 */
		from: FormControl<string | null | undefined>,

		/** Member ID */
		to: FormControl<string | null | undefined>,

		/**
		 * Event type
		 * Required
		 */
		type: FormControl<string | null | undefined>,
	}
	export function CreateCreateEventPostBodyFormGroup() {
		return new FormGroup<CreateEventPostBodyFormProperties>({
			from: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			to: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetMembersReturn {

		/**
		 * Unique name for a user
		 * Required
		 */
		name: string;

		/**
		 * The state that the member is in. Possible values are `invited`, `joined`, `left`, or `unknown`
		 * Required
		 */
		state: Event_retrievedState;

		/**
		 * User ID
		 * Required
		 */
		user_id: string;

		/**
		 * Unique name for a user
		 * Required
		 */
		user_name: string;
	}
	export interface GetMembersReturnFormProperties {

		/**
		 * Unique name for a user
		 * Required
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * The state that the member is in. Possible values are `invited`, `joined`, `left`, or `unknown`
		 * Required
		 */
		state: FormControl<Event_retrievedState | null | undefined>,

		/**
		 * User ID
		 * Required
		 */
		user_id: FormControl<string | null | undefined>,

		/**
		 * Unique name for a user
		 * Required
		 */
		user_name: FormControl<string | null | undefined>,
	}
	export function CreateGetMembersReturnFormGroup() {
		return new FormGroup<GetMembersReturnFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			state: new FormControl<Event_retrievedState | null | undefined>(undefined, [Validators.required]),
			user_id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			user_name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateMemberPostBody {

		/** Invite or join a member to a conversation */
		action?: Member_action | null;

		/**
		 * A user who joins a conversation as a member can have one channel per membership type. Channels can be `app`, `phone`, `sip`, `websocket`, or `vbc`
		 * Required
		 */
		channel: Channel;

		/** Knocker ID. A knocker is a pre-member of a conversation who does not exist yet */
		knocking_id?: string | null;

		/** Media Object */
		media?: Media;

		/** Member ID */
		member_id?: string | null;

		/** Member ID of the member that sends the invitation */
		member_id_inviting?: string | null;

		/**
		 * User ID
		 * Required
		 */
		user_id: string;
	}
	export interface CreateMemberPostBodyFormProperties {

		/** Invite or join a member to a conversation */
		action: FormControl<Member_action | null | undefined>,

		/** Knocker ID. A knocker is a pre-member of a conversation who does not exist yet */
		knocking_id: FormControl<string | null | undefined>,

		/** Member ID */
		member_id: FormControl<string | null | undefined>,

		/** Member ID of the member that sends the invitation */
		member_id_inviting: FormControl<string | null | undefined>,

		/**
		 * User ID
		 * Required
		 */
		user_id: FormControl<string | null | undefined>,
	}
	export function CreateCreateMemberPostBodyFormGroup() {
		return new FormGroup<CreateMemberPostBodyFormProperties>({
			action: new FormControl<Member_action | null | undefined>(undefined),
			knocking_id: new FormControl<string | null | undefined>(undefined),
			member_id: new FormControl<string | null | undefined>(undefined),
			member_id_inviting: new FormControl<string | null | undefined>(undefined),
			user_id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ListLegsReturn {

		/**
		 * A list of conversation objects. See the [get details of a specific conversation](#retrieveConversation) response fields for a description of the nested objects
		 * Required
		 */
		_embedded: ListLegsReturn_embedded;

		/** Required */
		_links: ListLegsReturn_links;

		/**
		 * The total number of records returned by your request.
		 * Required
		 */
		count: number;

		/**
		 * The amount of records returned in this response
		 * Required
		 * Minimum: 1
		 * Maximum: 100
		 */
		page_size: number;

		/**
		 * Return `page_size` amount of conversations from this index in the response. That is, if your request returns 300 conversations, set `record_index` to 5 in order to return conversations 50 to 59. The default value is 0. That is, the first `page_size` calls.
		 * Required
		 * Minimum: 0
		 */
		record_index: number;
	}
	export interface ListLegsReturnFormProperties {

		/**
		 * The total number of records returned by your request.
		 * Required
		 */
		count: FormControl<number | null | undefined>,

		/**
		 * The amount of records returned in this response
		 * Required
		 * Minimum: 1
		 * Maximum: 100
		 */
		page_size: FormControl<number | null | undefined>,

		/**
		 * Return `page_size` amount of conversations from this index in the response. That is, if your request returns 300 conversations, set `record_index` to 5 in order to return conversations 50 to 59. The default value is 0. That is, the first `page_size` calls.
		 * Required
		 * Minimum: 0
		 */
		record_index: FormControl<number | null | undefined>,
	}
	export function CreateListLegsReturnFormGroup() {
		return new FormGroup<ListLegsReturnFormProperties>({
			count: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			page_size: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(1), Validators.max(100)]),
			record_index: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(0)]),
		});

	}

	export interface ListLegsReturn_embedded {

		/** Required */
		ListLegsReturn_embeddedLegs: Array<ListLegsReturn_embeddedLegs>;
	}
	export interface ListLegsReturn_embeddedFormProperties {
	}
	export function CreateListLegsReturn_embeddedFormGroup() {
		return new FormGroup<ListLegsReturn_embeddedFormProperties>({
		});

	}

	export interface ListLegsReturn_embeddedLegs {
		_embedded?: string | null;
		_links?: string | null;

		/** The unique identifier for this conversation */
		conversation_uuid?: string | null;
		from?: string | null;

		/** Time of leg end */
		start_end?: string | null;

		/** Time of leg start */
		start_time?: string | null;

		/** Leg Status */
		state?: Leg_state | null;
		to?: string | null;

		/** Channel type */
		type?: ChannelType | null;

		/**
		 * The id of the leg. rtc_id and call_id are leg id
		 * Required
		 */
		uuid: string;
	}
	export interface ListLegsReturn_embeddedLegsFormProperties {
		_embedded: FormControl<string | null | undefined>,
		_links: FormControl<string | null | undefined>,

		/** The unique identifier for this conversation */
		conversation_uuid: FormControl<string | null | undefined>,
		from: FormControl<string | null | undefined>,

		/** Time of leg end */
		start_end: FormControl<string | null | undefined>,

		/** Time of leg start */
		start_time: FormControl<string | null | undefined>,

		/** Leg Status */
		state: FormControl<Leg_state | null | undefined>,
		to: FormControl<string | null | undefined>,

		/** Channel type */
		type: FormControl<ChannelType | null | undefined>,

		/**
		 * The id of the leg. rtc_id and call_id are leg id
		 * Required
		 */
		uuid: FormControl<string | null | undefined>,
	}
	export function CreateListLegsReturn_embeddedLegsFormGroup() {
		return new FormGroup<ListLegsReturn_embeddedLegsFormProperties>({
			_embedded: new FormControl<string | null | undefined>(undefined),
			_links: new FormControl<string | null | undefined>(undefined),
			conversation_uuid: new FormControl<string | null | undefined>(undefined),
			from: new FormControl<string | null | undefined>(undefined),
			start_end: new FormControl<string | null | undefined>(undefined),
			start_time: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<Leg_state | null | undefined>(undefined),
			to: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<ChannelType | null | undefined>(undefined),
			uuid: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ListLegsReturn_links {

		/** Required */
		self: ListLegsReturn_linksSelf;
	}
	export interface ListLegsReturn_linksFormProperties {
	}
	export function CreateListLegsReturn_linksFormGroup() {
		return new FormGroup<ListLegsReturn_linksFormProperties>({
		});

	}

	export interface ListLegsReturn_linksSelf {
		href?: string | null;
	}
	export interface ListLegsReturn_linksSelfFormProperties {
		href: FormControl<string | null | undefined>,
	}
	export function CreateListLegsReturn_linksSelfFormGroup() {
		return new FormGroup<ListLegsReturn_linksSelfFormProperties>({
			href: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetUsersReturn {

		/** A link towards a user included in Conversation API */
		href?: string | null;

		/** User ID */
		id?: string | null;

		/** Unique name for a user */
		name?: string | null;
	}
	export interface GetUsersReturnFormProperties {

		/** A link towards a user included in Conversation API */
		href: FormControl<string | null | undefined>,

		/** User ID */
		id: FormControl<string | null | undefined>,

		/** Unique name for a user */
		name: FormControl<string | null | undefined>,
	}
	export function CreateGetUsersReturnFormGroup() {
		return new FormGroup<GetUsersReturnFormProperties>({
			href: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateUserPostBody {

		/** A string to be displayed as user name. It does not need to be unique */
		display_name?: string | null;

		/** A link to an image for conversations' and users' avatars */
		image_url?: string | null;

		/** Unique name for a user */
		name?: string | null;
	}
	export interface CreateUserPostBodyFormProperties {

		/** A string to be displayed as user name. It does not need to be unique */
		display_name: FormControl<string | null | undefined>,

		/** A link to an image for conversations' and users' avatars */
		image_url: FormControl<string | null | undefined>,

		/** Unique name for a user */
		name: FormControl<string | null | undefined>,
	}
	export function CreateCreateUserPostBodyFormGroup() {
		return new FormGroup<CreateUserPostBodyFormProperties>({
			display_name: new FormControl<string | null | undefined>(undefined),
			image_url: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateUserReturn {

		/** A link towards a user included in Conversation API */
		href?: string | null;

		/** User ID */
		id?: string | null;
	}
	export interface CreateUserReturnFormProperties {

		/** A link towards a user included in Conversation API */
		href: FormControl<string | null | undefined>,

		/** User ID */
		id: FormControl<string | null | undefined>,
	}
	export function CreateCreateUserReturnFormGroup() {
		return new FormGroup<CreateUserReturnFormProperties>({
			href: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetuserConversationsReturn {

		/** The display name for the conversation. It does not have to be unique */
		display_name?: string | null;

		/** A link towards a resources included in Conversation API */
		href?: string | null;

		/** The unique identifier for this conversation */
		id?: string | null;

		/** A link to an image for conversations' and users' avatars */
		image_url?: string | null;

		/** Member ID */
		member_id?: string | null;

		/** Unique name for a conversation */
		name?: string | null;

		/** the id of the last event of the conversation (event's id is an incremental number */
		sequence_number?: string | null;

		/** The state that the member is in. Possible values are `invited`, `joined`, `left`, or `unknown` */
		state?: Event_retrievedState | null;
		timestamp?: GetuserConversationsReturnTimestamp;
	}
	export interface GetuserConversationsReturnFormProperties {

		/** The display name for the conversation. It does not have to be unique */
		display_name: FormControl<string | null | undefined>,

		/** A link towards a resources included in Conversation API */
		href: FormControl<string | null | undefined>,

		/** The unique identifier for this conversation */
		id: FormControl<string | null | undefined>,

		/** A link to an image for conversations' and users' avatars */
		image_url: FormControl<string | null | undefined>,

		/** Member ID */
		member_id: FormControl<string | null | undefined>,

		/** Unique name for a conversation */
		name: FormControl<string | null | undefined>,

		/** the id of the last event of the conversation (event's id is an incremental number */
		sequence_number: FormControl<string | null | undefined>,

		/** The state that the member is in. Possible values are `invited`, `joined`, `left`, or `unknown` */
		state: FormControl<Event_retrievedState | null | undefined>,
	}
	export function CreateGetuserConversationsReturnFormGroup() {
		return new FormGroup<GetuserConversationsReturnFormProperties>({
			display_name: new FormControl<string | null | undefined>(undefined),
			href: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			image_url: new FormControl<string | null | undefined>(undefined),
			member_id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			sequence_number: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<Event_retrievedState | null | undefined>(undefined),
		});

	}

	export interface GetuserConversationsReturnTimestamp {

		/** Timestamp */
		created?: string | null;
	}
	export interface GetuserConversationsReturnTimestampFormProperties {

		/** Timestamp */
		created: FormControl<string | null | undefined>,
	}
	export function CreateGetuserConversationsReturnTimestampFormGroup() {
		return new FormGroup<GetuserConversationsReturnTimestampFormProperties>({
			created: new FormControl<string | null | undefined>(undefined),
		});

	}

}

