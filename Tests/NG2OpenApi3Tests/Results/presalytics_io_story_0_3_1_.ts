import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** required subset of collaborator data to get a permission */
	export interface Add_new_collaborator_request {
		collaborator_type?: string | null;
		user_email?: string | null;
		user_id?: string | null;
	}

	/** required subset of collaborator data to get a permission */
	export interface Add_new_collaborator_requestFormProperties {
		collaborator_type: FormControl<string | null | undefined>,
		user_email: FormControl<string | null | undefined>,
		user_id: FormControl<string | null | undefined>,
	}
	export function CreateAdd_new_collaborator_requestFormGroup() {
		return new FormGroup<Add_new_collaborator_requestFormProperties>({
			collaborator_type: new FormControl<string | null | undefined>(undefined),
			user_email: new FormControl<string | null | undefined>(undefined),
			user_id: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Base model for all types */
	export interface Base_model {
		created_at?: Date | null;
		created_by?: string | null;
		id?: string | null;
		updated_at?: Date | null;
		updated_by?: string | null;
	}

	/** Base model for all types */
	export interface Base_modelFormProperties {
		created_at: FormControl<Date | null | undefined>,
		created_by: FormControl<string | null | undefined>,
		id: FormControl<string | null | undefined>,
		updated_at: FormControl<Date | null | undefined>,
		updated_by: FormControl<string | null | undefined>,
	}
	export function CreateBase_modelFormGroup() {
		return new FormGroup<Base_modelFormProperties>({
			created_at: new FormControl<Date | null | undefined>(undefined),
			created_by: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			updated_at: new FormControl<Date | null | undefined>(undefined),
			updated_by: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Cache_post_request {
		current_user_id?: string | null;
		nonce?: string | null;
		subdocument?: string | null;
	}
	export interface Cache_post_requestFormProperties {
		current_user_id: FormControl<string | null | undefined>,
		nonce: FormControl<string | null | undefined>,
		subdocument: FormControl<string | null | undefined>,
	}
	export function CreateCache_post_requestFormGroup() {
		return new FormGroup<Cache_post_requestFormProperties>({
			current_user_id: new FormControl<string | null | undefined>(undefined),
			nonce: new FormControl<string | null | undefined>(undefined),
			subdocument: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** allows for bulk updating of user_ids and active status based on a lead id or user_id */
	export interface Collaborator_bulk_update_request {
		active?: boolean | null;
		lead_id?: number | null;
		user_id?: string | null;
	}

	/** allows for bulk updating of user_ids and active status based on a lead id or user_id */
	export interface Collaborator_bulk_update_requestFormProperties {
		active: FormControl<boolean | null | undefined>,
		lead_id: FormControl<number | null | undefined>,
		user_id: FormControl<string | null | undefined>,
	}
	export function CreateCollaborator_bulk_update_requestFormGroup() {
		return new FormGroup<Collaborator_bulk_update_requestFormProperties>({
			active: new FormControl<boolean | null | undefined>(undefined),
			lead_id: new FormControl<number | null | undefined>(undefined),
			user_id: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Request body for creating a session */
	export interface Create_session_request {
		collaboratorUserId?: string | null;
		host?: string | null;
	}

	/** Request body for creating a session */
	export interface Create_session_requestFormProperties {
		collaboratorUserId: FormControl<string | null | undefined>,
		host: FormControl<string | null | undefined>,
	}
	export function CreateCreate_session_requestFormGroup() {
		return new FormGroup<Create_session_requestFormProperties>({
			collaboratorUserId: new FormControl<string | null | undefined>(undefined),
			host: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An Story Event object */
	export interface Event extends Base_model {
		attributes?: string | null;
		chat_prompt?: string | null;
		conversation_id?: string | null;
		dom_selectors?: string | null;
		is_chat_hidden?: boolean | null;
		is_notify_enabled?: boolean | null;
		name?: string | null;
	}

	/** An Story Event object */
	export interface EventFormProperties extends Base_modelFormProperties {
		attributes: FormControl<string | null | undefined>,
		chat_prompt: FormControl<string | null | undefined>,
		conversation_id: FormControl<string | null | undefined>,
		dom_selectors: FormControl<string | null | undefined>,
		is_chat_hidden: FormControl<boolean | null | undefined>,
		is_notify_enabled: FormControl<boolean | null | undefined>,
		name: FormControl<string | null | undefined>,
	}
	export function CreateEventFormGroup() {
		return new FormGroup<EventFormProperties>({
			created_at: new FormControl<Date | null | undefined>(undefined),
			created_by: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			updated_at: new FormControl<Date | null | undefined>(undefined),
			updated_by: new FormControl<string | null | undefined>(undefined),
			attributes: new FormControl<string | null | undefined>(undefined),
			chat_prompt: new FormControl<string | null | undefined>(undefined),
			conversation_id: new FormControl<string | null | undefined>(undefined),
			dom_selectors: new FormControl<string | null | undefined>(undefined),
			is_chat_hidden: new FormControl<boolean | null | undefined>(undefined),
			is_notify_enabled: new FormControl<boolean | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A Base64 encoded file object */
	export interface File_upload {
		content_length?: number | null;
		file?: string | null;
		file_name?: string | null;
		mimetype?: string | null;
	}

	/** A Base64 encoded file object */
	export interface File_uploadFormProperties {
		content_length: FormControl<number | null | undefined>,
		file: FormControl<string | null | undefined>,
		file_name: FormControl<string | null | undefined>,
		mimetype: FormControl<string | null | undefined>,
	}
	export function CreateFile_uploadFormGroup() {
		return new FormGroup<File_uploadFormProperties>({
			content_length: new FormControl<number | null | undefined>(undefined),
			file: new FormControl<string | null | undefined>(undefined),
			file_name: new FormControl<string | null | undefined>(undefined),
			mimetype: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Manage_event {
		action?: Manage_eventAction | null;
		action_params?: string | null;
		name?: string | null;
	}
	export interface Manage_eventFormProperties {
		action: FormControl<Manage_eventAction | null | undefined>,
		action_params: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
	}
	export function CreateManage_eventFormGroup() {
		return new FormGroup<Manage_eventFormProperties>({
			action: new FormControl<Manage_eventAction | null | undefined>(undefined),
			action_params: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum Manage_eventAction { create = 'create', fire = 'fire', change = 'change', delete = 'delete' }


	/** A conversation message */
	export interface Message {
		body?: string | null;
		id?: string | null;
		remote?: boolean | null;
		timestamp?: Date | null;
		userId?: string | null;
		userName?: string | null;
	}

	/** A conversation message */
	export interface MessageFormProperties {
		body: FormControl<string | null | undefined>,
		id: FormControl<string | null | undefined>,
		remote: FormControl<boolean | null | undefined>,
		timestamp: FormControl<Date | null | undefined>,
		userId: FormControl<string | null | undefined>,
		userName: FormControl<string | null | undefined>,
	}
	export function CreateMessageFormGroup() {
		return new FormGroup<MessageFormProperties>({
			body: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			remote: new FormControl<boolean | null | undefined>(undefined),
			timestamp: new FormControl<Date | null | undefined>(undefined),
			userId: new FormControl<string | null | undefined>(undefined),
			userName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Action can be either "delete" or "activate".  Either lead_id or user_id is required.  user_id takes precedence. */
	export interface Modify_inactive_collaborator {
		action?: string | null;
		lead_id?: number | null;
		user_id?: string | null;
	}

	/** Action can be either "delete" or "activate".  Either lead_id or user_id is required.  user_id takes precedence. */
	export interface Modify_inactive_collaboratorFormProperties {
		action: FormControl<string | null | undefined>,
		lead_id: FormControl<number | null | undefined>,
		user_id: FormControl<string | null | undefined>,
	}
	export function CreateModify_inactive_collaboratorFormGroup() {
		return new FormGroup<Modify_inactive_collaboratorFormProperties>({
			action: new FormControl<string | null | undefined>(undefined),
			lead_id: new FormControl<number | null | undefined>(undefined),
			user_id: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A reference to an Ooxml Automation Document from the Presalytics Ooxml Automation API */
	export interface Ooxml_document extends Base_model {
		delete_target_on_story_delete?: boolean | null;
		ooxml_automation_id?: string | null;
		story_id?: string | null;
	}

	/** A reference to an Ooxml Automation Document from the Presalytics Ooxml Automation API */
	export interface Ooxml_documentFormProperties extends Base_modelFormProperties {
		delete_target_on_story_delete: FormControl<boolean | null | undefined>,
		ooxml_automation_id: FormControl<string | null | undefined>,
		story_id: FormControl<string | null | undefined>,
	}
	export function CreateOoxml_documentFormGroup() {
		return new FormGroup<Ooxml_documentFormProperties>({
			created_at: new FormControl<Date | null | undefined>(undefined),
			created_by: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			updated_at: new FormControl<Date | null | undefined>(undefined),
			updated_by: new FormControl<string | null | undefined>(undefined),
			delete_target_on_story_delete: new FormControl<boolean | null | undefined>(undefined),
			ooxml_automation_id: new FormControl<string | null | undefined>(undefined),
			story_id: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** story_outline (json object) */
	export interface Outline {
		outline?: string | null;
	}

	/** story_outline (json object) */
	export interface OutlineFormProperties {
		outline: FormControl<string | null | undefined>,
	}
	export function CreateOutlineFormGroup() {
		return new FormGroup<OutlineFormProperties>({
			outline: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A permission type that can be applied to story collaborator */
	export interface Permission_type extends Base_model {
		can_add_collaborators?: boolean | null;
		can_delete?: boolean | null;
		can_edit?: boolean | null;
		can_view?: boolean | null;
		name?: string | null;
	}

	/** A permission type that can be applied to story collaborator */
	export interface Permission_typeFormProperties extends Base_modelFormProperties {
		can_add_collaborators: FormControl<boolean | null | undefined>,
		can_delete: FormControl<boolean | null | undefined>,
		can_edit: FormControl<boolean | null | undefined>,
		can_view: FormControl<boolean | null | undefined>,
		name: FormControl<string | null | undefined>,
	}
	export function CreatePermission_typeFormGroup() {
		return new FormGroup<Permission_typeFormProperties>({
			created_at: new FormControl<Date | null | undefined>(undefined),
			created_by: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			updated_at: new FormControl<Date | null | undefined>(undefined),
			updated_by: new FormControl<string | null | undefined>(undefined),
			can_add_collaborators: new FormControl<boolean | null | undefined>(undefined),
			can_delete: new FormControl<boolean | null | undefined>(undefined),
			can_edit: new FormControl<boolean | null | undefined>(undefined),
			can_view: new FormControl<boolean | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Error reponse model */
	export interface Problem_detail {
		detail?: string | null;
		status?: number | null;
		title?: string | null;
		type?: string | null;
	}

	/** Error reponse model */
	export interface Problem_detailFormProperties {
		detail: FormControl<string | null | undefined>,
		status: FormControl<number | null | undefined>,
		title: FormControl<string | null | undefined>,
		type: FormControl<string | null | undefined>,
	}
	export function CreateProblem_detailFormGroup() {
		return new FormGroup<Problem_detailFormProperties>({
			detail: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<number | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A user session with an open story */
	export interface Session extends Base_model {

		/** Description of a user that can collaborate on a story */
		collaborator?: Story_collaborator;
		collaborator_id?: string | null;
		host?: string | null;
		outline_revision?: number | null;
		views?: Array<View>;
	}

	/** A user session with an open story */
	export interface SessionFormProperties extends Base_modelFormProperties {
		collaborator_id: FormControl<string | null | undefined>,
		host: FormControl<string | null | undefined>,
		outline_revision: FormControl<number | null | undefined>,
	}
	export function CreateSessionFormGroup() {
		return new FormGroup<SessionFormProperties>({
			created_at: new FormControl<Date | null | undefined>(undefined),
			created_by: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			updated_at: new FormControl<Date | null | undefined>(undefined),
			updated_by: new FormControl<string | null | undefined>(undefined),
			collaborator_id: new FormControl<string | null | undefined>(undefined),
			host: new FormControl<string | null | undefined>(undefined),
			outline_revision: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** A Page view within a session-create */
	export interface View extends Base_model {
		active_msecs?: number | null;
		additional?: string | null;
		end_time?: Date | null;
		page_number?: number | null;
		session_id?: string | null;
		start_time?: Date | null;
		total_msecs?: number | null;
	}

	/** A Page view within a session-create */
	export interface ViewFormProperties extends Base_modelFormProperties {
		active_msecs: FormControl<number | null | undefined>,
		additional: FormControl<string | null | undefined>,
		end_time: FormControl<Date | null | undefined>,
		page_number: FormControl<number | null | undefined>,
		session_id: FormControl<string | null | undefined>,
		start_time: FormControl<Date | null | undefined>,
		total_msecs: FormControl<number | null | undefined>,
	}
	export function CreateViewFormGroup() {
		return new FormGroup<ViewFormProperties>({
			created_at: new FormControl<Date | null | undefined>(undefined),
			created_by: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			updated_at: new FormControl<Date | null | undefined>(undefined),
			updated_by: new FormControl<string | null | undefined>(undefined),
			active_msecs: new FormControl<number | null | undefined>(undefined),
			additional: new FormControl<string | null | undefined>(undefined),
			end_time: new FormControl<Date | null | undefined>(undefined),
			page_number: new FormControl<number | null | undefined>(undefined),
			session_id: new FormControl<string | null | undefined>(undefined),
			start_time: new FormControl<Date | null | undefined>(undefined),
			total_msecs: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Status response when returning 202s */
	export interface Status {
		status?: string | null;
	}

	/** Status response when returning 202s */
	export interface StatusFormProperties {
		status: FormControl<string | null | undefined>,
	}
	export function CreateStatusFormGroup() {
		return new FormGroup<StatusFormProperties>({
			status: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Model for story objects */
	export interface Story extends Base_model {
		collaborators?: Array<Story_collaborator>;
		is_public?: boolean | null;
		ooxml_documents?: Array<Ooxml_document>;
		outline?: string | null;
		outline_history?: Array<Story_outline_history>;
		revision?: string | null;
		title?: string | null;
	}

	/** Model for story objects */
	export interface StoryFormProperties extends Base_modelFormProperties {
		is_public: FormControl<boolean | null | undefined>,
		outline: FormControl<string | null | undefined>,
		revision: FormControl<string | null | undefined>,
		title: FormControl<string | null | undefined>,
	}
	export function CreateStoryFormGroup() {
		return new FormGroup<StoryFormProperties>({
			created_at: new FormControl<Date | null | undefined>(undefined),
			created_by: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			updated_at: new FormControl<Date | null | undefined>(undefined),
			updated_by: new FormControl<string | null | undefined>(undefined),
			is_public: new FormControl<boolean | null | undefined>(undefined),
			outline: new FormControl<string | null | undefined>(undefined),
			revision: new FormControl<string | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Description of a user that can collaborate on a story */
	export interface Story_collaborator extends Base_model {
		active?: boolean | null;
		email?: string | null;
		lead_id?: number | null;
		name?: string | null;

		/** A permission type that can be applied to story collaborator */
		permission_type?: Permission_type;
		permission_type_id?: string | null;
		story_id?: string | null;
		user_id?: string | null;
	}

	/** Description of a user that can collaborate on a story */
	export interface Story_collaboratorFormProperties extends Base_modelFormProperties {
		active: FormControl<boolean | null | undefined>,
		email: FormControl<string | null | undefined>,
		lead_id: FormControl<number | null | undefined>,
		name: FormControl<string | null | undefined>,
		permission_type_id: FormControl<string | null | undefined>,
		story_id: FormControl<string | null | undefined>,
		user_id: FormControl<string | null | undefined>,
	}
	export function CreateStory_collaboratorFormGroup() {
		return new FormGroup<Story_collaboratorFormProperties>({
			created_at: new FormControl<Date | null | undefined>(undefined),
			created_by: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			updated_at: new FormControl<Date | null | undefined>(undefined),
			updated_by: new FormControl<string | null | undefined>(undefined),
			active: new FormControl<boolean | null | undefined>(undefined),
			email: new FormControl<string | null | undefined>(undefined),
			lead_id: new FormControl<number | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			permission_type_id: new FormControl<string | null | undefined>(undefined),
			story_id: new FormControl<string | null | undefined>(undefined),
			user_id: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A revision repository for story outlines */
	export interface Story_outline_history extends Base_model {
		collaborator_user_id?: string | null;
		outline?: string | null;
		revision_number?: string | null;
		story_id?: string | null;
	}

	/** A revision repository for story outlines */
	export interface Story_outline_historyFormProperties extends Base_modelFormProperties {
		collaborator_user_id: FormControl<string | null | undefined>,
		outline: FormControl<string | null | undefined>,
		revision_number: FormControl<string | null | undefined>,
		story_id: FormControl<string | null | undefined>,
	}
	export function CreateStory_outline_historyFormGroup() {
		return new FormGroup<Story_outline_historyFormProperties>({
			created_at: new FormControl<Date | null | undefined>(undefined),
			created_by: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			updated_at: new FormControl<Date | null | undefined>(undefined),
			updated_by: new FormControl<string | null | undefined>(undefined),
			collaborator_user_id: new FormControl<string | null | undefined>(undefined),
			outline: new FormControl<string | null | undefined>(undefined),
			revision_number: new FormControl<string | null | undefined>(undefined),
			story_id: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Story: Get List of User Stories
		 * Returns a list of stories for this user identifie via the access token presentated to the api
		 * Get 
		 * @param {boolean} include_relationships Indicate whether the returned object should include child relationships
		 * @param {boolean} include_outline Determines whether a repsonse including story objects should include the story outline.  Defaults to true. Useful for speeding up processing times.
		 * @return {Array<Story>} List of stories for this user
		 */
		Story_get(include_relationships: boolean | null | undefined, include_outline: boolean | null | undefined): Observable<Array<Story>> {
			return this.http.get<Array<Story>>(this.baseUri + '?include_relationships=' + include_relationships + '&include_outline=' + include_outline, {});
		}

		/**
		 * Story: Upload
		 * Upload new story to presalytics api
		 * Post 
		 * @param {boolean} include_outline Determines whether a repsonse including story objects should include the story outline.  Defaults to true. Useful for speeding up processing times.
		 * @param {Outline} requestBody A story outline json object
		 * @return {Story} Success responses with story object
		 */
		Story_post(include_outline: boolean | null | undefined, requestBody: Outline): Observable<Story> {
			return this.http.post<Story>(this.baseUri + '?include_outline=' + include_outline, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Cache: Store Subdocument
		 * An endpoint for Presalytics Renderers to cache html subdocuments for subsequent retrieval by the browser.  Documents Are retrieved via token expire after 1 minute.
		 * Post cache
		 * @param {Cache_post_request} requestBody parameters to identify an update a collaborator across multiple stories
		 * @return {void} 
		 */
		Cache_post(requestBody: Cache_post_request): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'cache', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Cache: Get Subdocument
		 * An endpoint for broswer retreive html documents that were cached durin the rendering process via a nonce (token)
		 * Get cache/{nonce}
		 * @param {string} nonce A one-time use token for retieving items in the users cache
		 * @return {void} A cached html subdocument (typically loaded via iframe)
		 */
		Cache_nonce_get(nonce: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'cache/' + (nonce == null ? '' : encodeURIComponent(nonce)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Collborators: Bulk Update (Admin Only)
		 * Allows for bulk updates on collaborator metadata.  Restricted to internal admins
		 * Post collaborators
		 * @param {Collaborator_bulk_update_request} requestBody parameters to identify an update a collaborator across multiple stories
		 * @return {Array<Permission_type>} Array of all possible permission types
		 */
		Collaborators_post(requestBody: Collaborator_bulk_update_request): Observable<Array<Permission_type>> {
			return this.http.post<Array<Permission_type>>(this.baseUri + 'collaborators', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Environment: Get
		 * pass rendering metadata to the client-side scripts
		 * Get environment/
		 * @return {string} Success
		 */
		Get_environment(): Observable<string> {
			return this.http.get(this.baseUri + 'environment/', { responseType: 'text' });
		}

		/**
		 * Story: Upload a File (base64)
		 * Upload new story to presalytics api via an Open Office Xml file
		 * Post file/json
		 * @param {boolean} include_outline Determines whether a repsonse including story objects should include the story outline.  Defaults to true. Useful for speeding up processing times.
		 * @param {File_upload} requestBody A json-formatted object that includes a base64 encoded file (file encoded utf-8)
		 * @return {Story} Success responses with story object
		 */
		Story_post_file_json(include_outline: boolean | null | undefined, requestBody: File_upload): Observable<Story> {
			return this.http.post<Story>(this.baseUri + 'file/json?include_outline=' + include_outline, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Specification: No tags
		 * json-formatted version of this spec with the tags removed to help with codegen processes
		 * Get no_tags_spec
		 * @return {void} Success
		 */
		Spec_no_tags(): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'no_tags_spec', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Story Outline Schema
		 * Json Schema for validating Story Outline objects
		 * Get outline-schema/{schema_version}/story-outline.json
		 * @param {string} schema_version The semanitic version of a schema (e.g. '0.3.1')
		 * @return {void} Success
		 */
		Story_outline_schema(schema_version: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'outline-schema/' + (schema_version == null ? '' : encodeURIComponent(schema_version)) + '/story-outline.json', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Permissions: List Permission Types
		 * Returns a list of possible user permission types
		 * Get permission_types
		 * @return {Array<Permission_type>} Array of all possible permission types
		 */
		Story_permission_types_get(): Observable<Array<Permission_type>> {
			return this.http.get<Array<Permission_type>>(this.baseUri + 'permission_types', {});
		}

		/**
		 * Sessions: Delete by Id
		 * Remove a session and dependant data.
		 * Delete sessions/{session_id}
		 * @param {string} session_id The primary key for a view session
		 * @return {void} 
		 */
		Session_id_delete(session_id: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'sessions/' + (session_id == null ? '' : encodeURIComponent(session_id)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Sessions: Get
		 * Get session metadata
		 * Get sessions/{session_id}
		 * @param {string} session_id The primary key for a view session
		 * @param {boolean} include_relationships Indicate whether the returned object should include child relationships
		 * @return {Session} A session object
		 */
		Session_id_get(session_id: string, include_relationships: boolean | null | undefined): Observable<Session> {
			return this.http.get<Session>(this.baseUri + 'sessions/' + (session_id == null ? '' : encodeURIComponent(session_id)) + '&include_relationships=' + include_relationships, {});
		}

		/**
		 * Views: List Session Views
		 * Get data for all views in a session
		 * Get sessions/{session_id}/views
		 * @param {string} session_id The primary key for a view session
		 * @return {Array<View>} A List of session views
		 */
		Sessions_id_views_get(session_id: string): Observable<Array<View>> {
			return this.http.get<Array<View>>(this.baseUri + 'sessions/' + (session_id == null ? '' : encodeURIComponent(session_id)) + '/views', {});
		}

		/**
		 * Views: Create A Session View
		 * Create a page view object for a viewing session
		 * Post sessions/{session_id}/views
		 * @param {string} session_id The primary key for a view session
		 * @param {Sessions_id_views_postPostBody} requestBody Collaborator user id and permission type
		 * @return {View} A new view object
		 */
		Sessions_id_views_post(session_id: string, requestBody: Sessions_id_views_postPostBody): Observable<View> {
			return this.http.post<View>(this.baseUri + 'sessions/' + (session_id == null ? '' : encodeURIComponent(session_id)) + '/views', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Views: Delete by Id
		 * Remove a view and dependant data.
		 * Delete views/{view_id}
		 * @param {string} view_id The primary key for a page view within a session
		 * @return {void} 
		 */
		Views_id_delete(view_id: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'views/' + (view_id == null ? '' : encodeURIComponent(view_id)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Views: Get View
		 * Get view meta data
		 * Get views/{view_id}
		 * @param {string} view_id The primary key for a page view within a session
		 * @return {View} A List of session views
		 */
		Views_id_get(view_id: string): Observable<View> {
			return this.http.get<View>(this.baseUri + 'views/' + (view_id == null ? '' : encodeURIComponent(view_id)), {});
		}

		/**
		 * Story: Delete by Id
		 * Remove a story and dependant data.
		 * Delete {id}
		 * @param {string} id the id from the story object
		 * @return {void} 
		 */
		Story_id_delete(id: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + (id == null ? '' : encodeURIComponent(id)) + '', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Story: Get by Id
		 * Returns story metadata, inlcuding json object with story outline
		 * Get {id}
		 * @param {string} id the id from the story object
		 * @param {boolean} include_relationships Indicate whether the returned object should include child relationships
		 * @param {boolean} include_outline Determines whether a repsonse including story objects should include the story outline.  Defaults to true. Useful for speeding up processing times.
		 * @param {boolean} full Pull a story object with associated collaborator user, permission, and session data(faster if cached from prior api call)
		 * @param {boolean} refresh_cache Force the api reload the `Story full` object
		 * @return {Story} Success responses with story object
		 */
		Story_id_get(id: string, include_relationships: boolean | null | undefined, include_outline: boolean | null | undefined, full: boolean | null | undefined, refresh_cache: boolean | null | undefined): Observable<Story> {
			return this.http.get<Story>(this.baseUri + (id == null ? '' : encodeURIComponent(id)) + '&include_relationships=' + include_relationships + '&include_outline=' + include_outline + '&full=' + full + '&refresh_cache=' + refresh_cache + '', {});
		}

		/**
		 * Story: Modify
		 * Update story metadata, including story outline
		 * Put {id}
		 * @param {string} id the id from the story object
		 * @param {boolean} include_outline Determines whether a repsonse including story objects should include the story outline.  Defaults to true. Useful for speeding up processing times.
		 * @param {Story} requestBody The updated story object
		 * @return {Story} Success responses with story object
		 */
		Story_id_put(id: string, include_outline: boolean | null | undefined, requestBody: Story): Observable<Story> {
			return this.http.put<Story>(this.baseUri + (id == null ? '' : encodeURIComponent(id)) + '&include_outline=' + include_outline + '', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Story: View Analytics
		 * returns an html document containing session and event metrics for the story
		 * Get {id}/analytics
		 * @param {string} id the id from the story object
		 * @return {string} An html document containing session analytics for the story
		 */
		Story_id_analytics(id: string): Observable<string> {
			return this.http.get(this.baseUri + (id == null ? '' : encodeURIComponent(id)) + '/analytics', { responseType: 'text' });
		}

		/**
		 * Story Collaborators: List
		 * Gets a list users that can read or edit this story
		 * Get {id}/collaborators
		 * @param {string} id the id from the story object
		 * @return {Array<Story_collaborator>} List of collaborators on the story
		 */
		Story_id_collaborators_get(id: string): Observable<Array<Story_collaborator>> {
			return this.http.get<Array<Story_collaborator>>(this.baseUri + (id == null ? '' : encodeURIComponent(id)) + '/collaborators', {});
		}

		/**
		 * Story Collaborators: Add New User
		 * Add a colloborator to this story
		 * Post {id}/collaborators
		 * @param {string} id the id from the story object
		 * @param {Add_new_collaborator_request} requestBody Collaborator user id and permission type
		 * @return {Story_collaborator} Collaborator data
		 */
		Story_id_collaborators_post(id: string, requestBody: Add_new_collaborator_request): Observable<Story_collaborator> {
			return this.http.post<Story_collaborator>(this.baseUri + (id == null ? '' : encodeURIComponent(id)) + '/collaborators', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Permissions: Story Authorization for a User
		 * Check whether user have certain types of permissions.  Use http status codes to understand if permission is granted - 204 = Granted, 403 = Forbidden
		 * Get {id}/collaborators/authorize/{story_collaborator_userid}/{permissiontype}
		 * @param {string} id the id from the story object
		 * @param {string} story_collaborator_userid The presalytics userid (NOT the Id of the story_collaborator object)
		 * @param {string} permissiontype the type of permission requested.  can be a permission_type object name (e.g., owner, editor, create, viewer, admin) or a permission type field (e.g., can_edit, can_view, can_add_collaborators, can_delete)
		 * @return {void} 
		 */
		Story_id_collaborators_userid_permissiontype_get(id: string, story_collaborator_userid: string, permissiontype: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + (id == null ? '' : encodeURIComponent(id)) + '/collaborators/authorize/' + (story_collaborator_userid == null ? '' : encodeURIComponent(story_collaborator_userid)) + '/' + (permissiontype == null ? '' : encodeURIComponent(permissiontype)) + '', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Story Collaborators: Edit Inactive User Permission
		 * Edit story permissions for inactive users.  Requires admin rights.
		 * Post {id}/collaborators/inactive
		 * @param {string} id the id from the story object
		 * @param {Modify_inactive_collaborator} requestBody Collaborator user id and permission type
		 * @return {Story_collaborator} Collaborator data
		 */
		Story_id_collaborators_inactive_post(id: string, requestBody: Modify_inactive_collaborator): Observable<Story_collaborator> {
			return this.http.post<Story_collaborator>(this.baseUri + (id == null ? '' : encodeURIComponent(id)) + '/collaborators/inactive', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Story Collaborators: Remove User
		 * Remove a collaborator from this story
		 * Delete {id}/collaborators/{story_collaborator_userid}
		 * @param {string} id the id from the story object
		 * @param {string} story_collaborator_userid The presalytics userid (NOT the Id of the story_collaborator object)
		 * @return {void} 
		 */
		Story_id_collaborators_userid_delete(id: string, story_collaborator_userid: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + (id == null ? '' : encodeURIComponent(id)) + '/collaborators/' + (story_collaborator_userid == null ? '' : encodeURIComponent(story_collaborator_userid)) + '', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Story Collaborators: Access Permissions
		 * Data to help you understand the access rights of a particular collaborator on this story
		 * Get {id}/collaborators/{story_collaborator_userid}
		 * @param {string} id the id from the story object
		 * @param {string} story_collaborator_userid The presalytics userid (NOT the Id of the story_collaborator object)
		 * @return {Story_collaborator} Collaborator data
		 */
		Story_id_collaborators_userid_get(id: string, story_collaborator_userid: string): Observable<Story_collaborator> {
			return this.http.get<Story_collaborator>(this.baseUri + (id == null ? '' : encodeURIComponent(id)) + '/collaborators/' + (story_collaborator_userid == null ? '' : encodeURIComponent(story_collaborator_userid)) + '', {});
		}

		/**
		 * Story Collaborators: Edit Access Rights
		 * Modify a user's access right to this story (e.g., grant edit permissions)
		 * Put {id}/collaborators/{story_collaborator_userid}
		 * @param {string} id the id from the story object
		 * @param {string} story_collaborator_userid The presalytics userid (NOT the Id of the story_collaborator object)
		 * @param {Story_collaborator} requestBody Collaborator user id (presalytics userid) and permission type
		 * @return {Story_collaborator} Collaborator data
		 */
		Story_id_collaborators_userid_put(id: string, story_collaborator_userid: string, requestBody: Story_collaborator): Observable<Story_collaborator> {
			return this.http.put<Story_collaborator>(this.baseUri + (id == null ? '' : encodeURIComponent(id)) + '/collaborators/' + (story_collaborator_userid == null ? '' : encodeURIComponent(story_collaborator_userid)) + '', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Events: List Events
		 * Get a list of Events available to users of this story
		 * Get {id}/events
		 * @param {string} id the id from the story object
		 * @return {Array<Event>} An Array of events
		 */
		Story_id_events_get(id: string): Observable<Array<Event>> {
			return this.http.get<Array<Event>>(this.baseUri + (id == null ? '' : encodeURIComponent(id)) + '/events', {});
		}

		/**
		 * Events: Manage Events
		 * Add a message to the Story's conversation
		 * Post {id}/events
		 * @param {string} id the id from the story object
		 * @param {Manage_event} requestBody Collaborator user id and permission type
		 * @return {string} A repsonse to the requested action
		 */
		Story_id_events_post(id: string, requestBody: Manage_event): Observable<string> {
			return this.http.post(this.baseUri + (id == null ? '' : encodeURIComponent(id)) + '/events', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, responseType: 'text' });
		}

		/**
		 * Story: Delete Subdocument
		 * Deletes a subdcoument of this story (e.g., .pptx, .docx, .xlsx)
		 * Delete {id}/file/{ooxml_automation_id}
		 * @param {string} id the id from the story object
		 * @param {string} ooxml_automation_id the id of the ooxml_automation object
		 * @return {void} 
		 */
		Story_id_file_ooxmlautomationid_delete(id: string, ooxml_automation_id: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + (id == null ? '' : encodeURIComponent(id)) + '/file/' + (ooxml_automation_id == null ? '' : encodeURIComponent(ooxml_automation_id)) + '', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Story: Download Updated File
		 * Redtreives updated story as open office xml file (e.g., .pptx, .docx, .xlsx)
		 * Get {id}/file/{ooxml_automation_id}
		 * @param {string} id the id from the story object
		 * @param {string} ooxml_automation_id the id of the ooxml_automation object
		 * @return {void} The latest versiono of the story, in its orginal file format
		 */
		Story_id_file_ooxmlautomationid_get(id: string, ooxml_automation_id: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + (id == null ? '' : encodeURIComponent(id)) + '/file/' + (ooxml_automation_id == null ? '' : encodeURIComponent(ooxml_automation_id)) + '', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Conversation: List Conversation Messages
		 * Get a list of messages that have been send in this story
		 * Get {id}/messages
		 * @param {string} id the id from the story object
		 * @return {Array<Message>} An Array of conversation messages
		 */
		Story_id_messages_get(id: string): Observable<Array<Message>> {
			return this.http.get<Array<Message>>(this.baseUri + (id == null ? '' : encodeURIComponent(id)) + '/messages', {});
		}

		/**
		 * Conversation: Send a Message
		 * Add a message to the Story's conversation
		 * Post {id}/messages
		 * @param {string} id the id from the story object
		 * @param {string} requestBody The message text
		 * @return {void} 
		 */
		Story_id_messages_post(id: string, requestBody: string): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + (id == null ? '' : encodeURIComponent(id)) + '/messages', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Story: Get Story Outline
		 * Returns Story's outline
		 * Get {id}/outline
		 * @param {string} id the id from the story object
		 * @return {string} Stringified Story outline
		 */
		Story_id_outline_get(id: string): Observable<string> {
			return this.http.get(this.baseUri + (id == null ? '' : encodeURIComponent(id)) + '/outline', { responseType: 'text' });
		}

		/**
		 * Story: Post Story Outline
		 * Update a story outline.
		 * Post {id}/outline
		 * @param {string} id the id from the story object
		 * @param {string} requestBody A story outline object
		 * @return {void} 
		 */
		Story_id_outline_post(id: string, requestBody: string): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + (id == null ? '' : encodeURIComponent(id)) + '/outline', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Story: Public Link to Story Reveal.js Document
		 * returns an html document containing a reveal.js epresentation of the story, if the story if set to is_public = True
		 * Get {id}/public/
		 * @param {string} id the id from the story object
		 * @return {string} An html document containing a reveal.js represenation of the story
		 */
		Story_id_public(id: string): Observable<string> {
			return this.http.get(this.baseUri + (id == null ? '' : encodeURIComponent(id)) + '/public/', { responseType: 'text' });
		}

		/**
		 * Story: Get Story at Reveal.js Document
		 * returns an html document containing a reveal.js epresentation of the story
		 * Get {id}/reveal
		 * @param {string} id the id from the story object
		 * @return {string} An html document containing a reveal.js represenation of the story
		 */
		Story_id_reveal(id: string): Observable<string> {
			return this.http.get(this.baseUri + (id == null ? '' : encodeURIComponent(id)) + '/reveal', { responseType: 'text' });
		}

		/**
		 * Sessions: List Story Sessions
		 * Get a list of sessions asscoaited with this story
		 * Get {id}/sessions
		 * @param {string} id the id from the story object
		 * @param {boolean} include_relationships Indicate whether the returned object should include child relationships
		 * @return {Array<Session>} An array of session objects
		 */
		Story_id_sessions_get(id: string, include_relationships: boolean | null | undefined): Observable<Array<Session>> {
			return this.http.get<Array<Session>>(this.baseUri + (id == null ? '' : encodeURIComponent(id)) + '/sessions&include_relationships=' + include_relationships + '', {});
		}

		/**
		 * Sessions: Create a Session
		 * Create a new session
		 * Post {id}/sessions
		 * @param {string} id the id from the story object
		 * @param {Create_session_request} requestBody Collaborator user id and permission type
		 * @return {Session} A new session object
		 */
		Story_id_session_post(id: string, requestBody: Create_session_request): Observable<Session> {
			return this.http.post<Session>(this.baseUri + (id == null ? '' : encodeURIComponent(id)) + '/sessions', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Story: Get Story Status
		 * Returns code indicating whether story has active running background and is healthy (e.g., the latest outline is valid)
		 * Get {id}/status
		 * @param {string} id the id from the story object
		 * @return {Status} Accepted
		 */
		Story_id_status_get(id: string): Observable<Status> {
			return this.http.get<Status>(this.baseUri + (id == null ? '' : encodeURIComponent(id)) + '/status', {});
		}
	}

	export interface Sessions_id_views_postPostBody {
		activeMSecs?: number | null;
		additional?: string | null;

		/** Required */
		endTime: Date;

		/** Required */
		pageNumber: number;

		/** Required */
		startTime: Date;
	}
	export interface Sessions_id_views_postPostBodyFormProperties {
		activeMSecs: FormControl<number | null | undefined>,
		additional: FormControl<string | null | undefined>,

		/** Required */
		endTime: FormControl<Date | null | undefined>,

		/** Required */
		pageNumber: FormControl<number | null | undefined>,

		/** Required */
		startTime: FormControl<Date | null | undefined>,
	}
	export function CreateSessions_id_views_postPostBodyFormGroup() {
		return new FormGroup<Sessions_id_views_postPostBodyFormProperties>({
			activeMSecs: new FormControl<number | null | undefined>(undefined),
			additional: new FormControl<string | null | undefined>(undefined),
			endTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			pageNumber: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			startTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
		});

	}

}

