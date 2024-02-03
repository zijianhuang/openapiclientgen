import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface All_events {
	}
	export interface All_eventsFormProperties {
	}
	export function CreateAll_eventsFormGroup() {
		return new FormGroup<All_eventsFormProperties>({
		});

	}

	export interface Conversation_list {
		_links?: Conversation_list_links;

		/** The public facing name of the conversation */
		display_name?: string | null;

		/** The ID of the conversation */
		id?: string | null;

		/** An image URL that you associate with the conversation */
		image_url?: string | null;

		/** Your internal conversation name. Must be unique */
		name?: string | null;
		timestamp?: Conversation_listTimestamp;
	}
	export interface Conversation_listFormProperties {

		/** The public facing name of the conversation */
		display_name: FormControl<string | null | undefined>,

		/** The ID of the conversation */
		id: FormControl<string | null | undefined>,

		/** An image URL that you associate with the conversation */
		image_url: FormControl<string | null | undefined>,

		/** Your internal conversation name. Must be unique */
		name: FormControl<string | null | undefined>,
	}
	export function CreateConversation_listFormGroup() {
		return new FormGroup<Conversation_listFormProperties>({
			display_name: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			image_url: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Conversation_list_links {
		self?: Conversation_list_linksSelf;
	}
	export interface Conversation_list_linksFormProperties {
	}
	export function CreateConversation_list_linksFormGroup() {
		return new FormGroup<Conversation_list_linksFormProperties>({
		});

	}

	export interface Conversation_list_linksSelf {
		href?: string | null;
	}
	export interface Conversation_list_linksSelfFormProperties {
		href: FormControl<string | null | undefined>,
	}
	export function CreateConversation_list_linksSelfFormGroup() {
		return new FormGroup<Conversation_list_linksSelfFormProperties>({
			href: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Conversation_listTimestamp {

		/** The time that the conversation was created */
		created?: string | null;
	}
	export interface Conversation_listTimestampFormProperties {

		/** The time that the conversation was created */
		created: FormControl<string | null | undefined>,
	}
	export function CreateConversation_listTimestampFormGroup() {
		return new FormGroup<Conversation_listTimestampFormProperties>({
			created: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Custom_event {
	}
	export interface Custom_eventFormProperties {
	}
	export function CreateCustom_eventFormGroup() {
		return new FormGroup<Custom_eventFormProperties>({
		});

	}

	export interface Event {
		_links?: Event_links;

		/** The member ID of the sender */
		from?: string | null;

		/** The ID of the event */
		id?: number | null;

		/** The time that the event happened */
		timestamp?: string | null;
	}
	export interface EventFormProperties {

		/** The member ID of the sender */
		from: FormControl<string | null | undefined>,

		/** The ID of the event */
		id: FormControl<number | null | undefined>,

		/** The time that the event happened */
		timestamp: FormControl<string | null | undefined>,
	}
	export function CreateEventFormGroup() {
		return new FormGroup<EventFormProperties>({
			from: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<number | null | undefined>(undefined),
			timestamp: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Event_links {
		self?: Event_linksSelf;
	}
	export interface Event_linksFormProperties {
	}
	export function CreateEvent_linksFormGroup() {
		return new FormGroup<Event_linksFormProperties>({
		});

	}

	export interface Event_linksSelf {
		href?: string | null;
	}
	export interface Event_linksSelfFormProperties {
		href: FormControl<string | null | undefined>,
	}
	export function CreateEvent_linksSelfFormGroup() {
		return new FormGroup<Event_linksSelfFormProperties>({
			href: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Member extends Member_list {
		channel?: MemberChannel;
		initiator?: MemberInitiator;

		/** The current media state for the member */
		media?: MemberMedia;
		timestamp?: MemberTimestamp;
	}
	export interface MemberFormProperties extends Member_listFormProperties {
	}
	export function CreateMemberFormGroup() {
		return new FormGroup<MemberFormProperties>({
			display_name: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<Member_listState | null | undefined>(undefined),
			user_id: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface MemberChannel {

		/** The channel that the member joins with */
		type?: MemberChannelType | null;
	}
	export interface MemberChannelFormProperties {

		/** The channel that the member joins with */
		type: FormControl<MemberChannelType | null | undefined>,
	}
	export function CreateMemberChannelFormGroup() {
		return new FormGroup<MemberChannelFormProperties>({
			type: new FormControl<MemberChannelType | null | undefined>(undefined),
		});

	}

	export enum MemberChannelType { app = 'app' }

	export interface MemberInitiator {
		invited?: MemberInitiatorInvited;
		joined?: MemberInitiatorJoined;
	}
	export interface MemberInitiatorFormProperties {
	}
	export function CreateMemberInitiatorFormGroup() {
		return new FormGroup<MemberInitiatorFormProperties>({
		});

	}

	export interface MemberInitiatorInvited {
		is_system?: boolean | null;
	}
	export interface MemberInitiatorInvitedFormProperties {
		is_system: FormControl<boolean | null | undefined>,
	}
	export function CreateMemberInitiatorInvitedFormGroup() {
		return new FormGroup<MemberInitiatorInvitedFormProperties>({
			is_system: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface MemberInitiatorJoined {
		is_system?: boolean | null;
	}
	export interface MemberInitiatorJoinedFormProperties {
		is_system: FormControl<boolean | null | undefined>,
	}
	export function CreateMemberInitiatorJoinedFormGroup() {
		return new FormGroup<MemberInitiatorJoinedFormProperties>({
			is_system: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface MemberMedia {

		/** The current audio state for the member */
		audio_settings?: MemberMediaAudio_settings;
	}
	export interface MemberMediaFormProperties {
	}
	export function CreateMemberMediaFormGroup() {
		return new FormGroup<MemberMediaFormProperties>({
		});

	}

	export interface MemberMediaAudio_settings {

		/** Can the member hear other participants? */
		earmuffed?: boolean | null;

		/** Is audio enabled? */
		enabled?: boolean | null;

		/** Can the member speak to other participants? */
		muted?: boolean | null;
	}
	export interface MemberMediaAudio_settingsFormProperties {

		/** Can the member hear other participants? */
		earmuffed: FormControl<boolean | null | undefined>,

		/** Is audio enabled? */
		enabled: FormControl<boolean | null | undefined>,

		/** Can the member speak to other participants? */
		muted: FormControl<boolean | null | undefined>,
	}
	export function CreateMemberMediaAudio_settingsFormGroup() {
		return new FormGroup<MemberMediaAudio_settingsFormProperties>({
			earmuffed: new FormControl<boolean | null | undefined>(undefined),
			enabled: new FormControl<boolean | null | undefined>(undefined),
			muted: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface MemberTimestamp {

		/** The time that an invitation was sent */
		invited?: string | null;

		/** The time that the conversation was joined */
		joined?: string | null;

		/** The time that the member left the conversation */
		left?: string | null;
	}
	export interface MemberTimestampFormProperties {

		/** The time that an invitation was sent */
		invited: FormControl<string | null | undefined>,

		/** The time that the conversation was joined */
		joined: FormControl<string | null | undefined>,

		/** The time that the member left the conversation */
		left: FormControl<string | null | undefined>,
	}
	export function CreateMemberTimestampFormGroup() {
		return new FormGroup<MemberTimestampFormProperties>({
			invited: new FormControl<string | null | undefined>(undefined),
			joined: new FormControl<string | null | undefined>(undefined),
			left: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Member_invited_event {
	}
	export interface Member_invited_eventFormProperties {
	}
	export function CreateMember_invited_eventFormGroup() {
		return new FormGroup<Member_invited_eventFormProperties>({
		});

	}

	export interface Member_left_event {
	}
	export interface Member_left_eventFormProperties {
	}
	export function CreateMember_left_eventFormGroup() {
		return new FormGroup<Member_left_eventFormProperties>({
		});

	}

	export interface Member_list {
		_links?: Member_list_links;

		/** The display name of the User */
		display_name?: string | null;

		/** Member ID */
		id?: string | null;

		/** The name of the User */
		name?: string | null;

		/** The state that the member is in for this conversation */
		state?: Member_listState | null;

		/** The ID of the User */
		user_id?: string | null;
	}
	export interface Member_listFormProperties {

		/** The display name of the User */
		display_name: FormControl<string | null | undefined>,

		/** Member ID */
		id: FormControl<string | null | undefined>,

		/** The name of the User */
		name: FormControl<string | null | undefined>,

		/** The state that the member is in for this conversation */
		state: FormControl<Member_listState | null | undefined>,

		/** The ID of the User */
		user_id: FormControl<string | null | undefined>,
	}
	export function CreateMember_listFormGroup() {
		return new FormGroup<Member_listFormProperties>({
			display_name: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<Member_listState | null | undefined>(undefined),
			user_id: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Member_list_links {
		self?: Member_list_linksSelf;
	}
	export interface Member_list_linksFormProperties {
	}
	export function CreateMember_list_linksFormGroup() {
		return new FormGroup<Member_list_linksFormProperties>({
		});

	}

	export interface Member_list_linksSelf {
		href?: string | null;
	}
	export interface Member_list_linksSelfFormProperties {
		href: FormControl<string | null | undefined>,
	}
	export function CreateMember_list_linksSelfFormGroup() {
		return new FormGroup<Member_list_linksSelfFormProperties>({
			href: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum Member_listState { INVITED = 'INVITED', JOINED = 'JOINED' }

	export interface Text_event {
	}
	export interface Text_eventFormProperties {
	}
	export function CreateText_eventFormGroup() {
		return new FormGroup<Text_eventFormProperties>({
		});

	}

	export interface User_links {
		self?: User_linksSelf;
	}
	export interface User_linksFormProperties {
	}
	export function CreateUser_linksFormGroup() {
		return new FormGroup<User_linksFormProperties>({
		});

	}

	export interface User_linksSelf {
		href?: string | null;
	}
	export interface User_linksSelfFormProperties {
		href: FormControl<string | null | undefined>,
	}
	export function CreateUser_linksSelfFormGroup() {
		return new FormGroup<User_linksSelfFormProperties>({
			href: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface User_list {
		_links?: User_links;

		/** The ID of the user */
		id?: string | null;

		/** The name of the user */
		name?: string | null;
	}
	export interface User_listFormProperties {

		/** The ID of the user */
		id: FormControl<string | null | undefined>,

		/** The name of the user */
		name: FormControl<string | null | undefined>,
	}
	export function CreateUser_listFormGroup() {
		return new FormGroup<User_listFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * List Conversations
		 * Please note that not all data is available in the list endpoint. Once
		 * you've identified the conversation you need to work with, use the
		 * [GET /conversations/:id](#get-conversation) endpoint to fetch all of the conversation details
		 * Get conversations
		 * @param {number} page_size The number of results returned per page.   The default value is `10`. The maximum value is `100`.
		 * @param {Get_conversationsOrder} order Show the most (`desc`) / least (`asc`) recently created entries first
		 * @param {string} cursor The cursor to start returning results from.
		 * You are not expected to provide this manually, but to follow the url provided in `_links.next.href` in the response which contains a `cursor` value
		 * @param {string} date_start Search for conversations created after this ISO8601 date
		 * @param {string} date_end Search for conversations created before this ISO8601 date
		 * @return {any} OK
		 */
		Get_conversations(page_size: number | null | undefined, order: Get_conversationsOrder | null | undefined, cursor: string | null | undefined, date_start: string | null | undefined, date_end: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'conversations?page_size=' + page_size + '&order=' + order + '&cursor=' + (cursor == null ? '' : encodeURIComponent(cursor)) + '&date_start=' + (date_start == null ? '' : encodeURIComponent(date_start)) + '&date_end=' + (date_end == null ? '' : encodeURIComponent(date_end)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * List Events
		 * Get conversations/{conversation_id}/events
		 * @param {string} conversation_id The ID of the conversation
		 * @param {number} page_size The number of results returned per page.   The default value is `10`. The maximum value is `100`.
		 * @param {Get_conversationsOrder} order Show the most (`desc`) / least (`asc`) recently created entries first
		 * @param {string} cursor The cursor to start returning results from.
		 * You are not expected to provide this manually, but to follow the url provided in `_links.next.href` in the response which contains a `cursor` value
		 * @param {string} start_id The ID to start returning events at
		 * @param {string} end_id The ID to end returning events at
		 * @param {string} event_type The type of event to search for. Does not currently support custom events
		 * @return {any} OK
		 */
		Get_events(conversation_id: string, page_size: number | null | undefined, order: Get_conversationsOrder | null | undefined, cursor: string | null | undefined, start_id: string | null | undefined, end_id: string | null | undefined, event_type: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'conversations/' + (conversation_id == null ? '' : encodeURIComponent(conversation_id)) + '/events&page_size=' + page_size + '&order=' + order + '&cursor=' + (cursor == null ? '' : encodeURIComponent(cursor)) + '&start_id=' + (start_id == null ? '' : encodeURIComponent(start_id)) + '&end_id=' + (end_id == null ? '' : encodeURIComponent(end_id)) + '&event_type=' + (event_type == null ? '' : encodeURIComponent(event_type)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * List Members
		 * Get conversations/{conversation_id}/members
		 * @param {string} conversation_id The ID of the conversation
		 * @param {number} page_size The number of results returned per page.   The default value is `10`. The maximum value is `100`.
		 * @param {Get_conversationsOrder} order Show the most (`desc`) / least (`asc`) recently created entries first
		 * @param {string} cursor The cursor to start returning results from.
		 * You are not expected to provide this manually, but to follow the url provided in `_links.next.href` in the response which contains a `cursor` value
		 * @return {any} OK
		 */
		Get_members(conversation_id: string, page_size: number | null | undefined, order: Get_conversationsOrder | null | undefined, cursor: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'conversations/' + (conversation_id == null ? '' : encodeURIComponent(conversation_id)) + '/members&page_size=' + page_size + '&order=' + order + '&cursor=' + (cursor == null ? '' : encodeURIComponent(cursor)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * List Users
		 * Get users
		 * @param {number} page_size The number of results returned per page.   The default value is `10`. The maximum value is `100`.
		 * @param {Get_conversationsOrder} order Show the most (`desc`) / least (`asc`) recently created entries first
		 * @param {string} cursor The cursor to start returning results from.
		 * You are not expected to provide this manually, but to follow the url provided in `_links.next.href` in the response which contains a `cursor` value
		 * @return {any} OK
		 */
		Get_users(page_size: number | null | undefined, order: Get_conversationsOrder | null | undefined, cursor: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'users?page_size=' + page_size + '&order=' + order + '&cursor=' + (cursor == null ? '' : encodeURIComponent(cursor)), { observe: 'response', responseType: 'text' });
		}
	}

	export enum Get_conversationsOrder { asc = 'asc', desc = 'desc' }

}

