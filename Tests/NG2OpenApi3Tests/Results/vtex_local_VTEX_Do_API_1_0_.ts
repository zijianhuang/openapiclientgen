import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface AddCommentRequest {

		/** Required */
		text: string;
	}
	export interface AddCommentRequestFormProperties {

		/** Required */
		text: FormControl<string | null | undefined>,
	}
	export function CreateAddCommentRequestFormGroup() {
		return new FormGroup<AddCommentRequestFormProperties>({
			text: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Assignee {

		/** Required */
		email: string;

		/** Required */
		id: string;

		/** Required */
		name: string;
	}
	export interface AssigneeFormProperties {

		/** Required */
		email: FormControl<string | null | undefined>,

		/** Required */
		id: FormControl<string | null | undefined>,

		/** Required */
		name: FormControl<string | null | undefined>,
	}
	export function CreateAssigneeFormGroup() {
		return new FormGroup<AssigneeFormProperties>({
			email: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface EditTaskRequest {

		/** Required */
		status: string;
	}
	export interface EditTaskRequestFormProperties {

		/** Required */
		status: FormControl<string | null | undefined>,
	}
	export function CreateEditTaskRequestFormGroup() {
		return new FormGroup<EditTaskRequestFormProperties>({
			status: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Follower {

		/** Required */
		email: string;

		/** Required */
		id: string;

		/** Required */
		name: string;
	}
	export interface FollowerFormProperties {

		/** Required */
		email: FormControl<string | null | undefined>,

		/** Required */
		id: FormControl<string | null | undefined>,

		/** Required */
		name: FormControl<string | null | undefined>,
	}
	export function CreateFollowerFormGroup() {
		return new FormGroup<FollowerFormProperties>({
			email: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface NewNoteRequest {

		/** Required */
		description: string;

		/** Required */
		domain: string;

		/**
		 * Target.
		 * Required
		 */
		target: NewNoteRequestTarget;
	}
	export interface NewNoteRequestFormProperties {

		/** Required */
		description: FormControl<string | null | undefined>,

		/** Required */
		domain: FormControl<string | null | undefined>,
	}
	export function CreateNewNoteRequestFormGroup() {
		return new FormGroup<NewNoteRequestFormProperties>({
			description: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			domain: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface NewNoteRequestTarget {
		id?: string | null;
		type?: string | null;
		url?: string | null;
	}
	export interface NewNoteRequestTargetFormProperties {
		id: FormControl<string | null | undefined>,
		type: FormControl<string | null | undefined>,
		url: FormControl<string | null | undefined>,
	}
	export function CreateNewNoteRequestTargetFormGroup() {
		return new FormGroup<NewNoteRequestTargetFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface NewTaskRequest {

		/** Required */
		assignee: Assignee;

		/** Required */
		context: string;

		/** Required */
		description: string;

		/** Required */
		domain: string;

		/** Required */
		dueDate: string;

		/** Required */
		followers: Array<Follower>;

		/** Required */
		name: string;

		/** Required */
		parentTaskId: string;

		/** Required */
		priority: string;

		/** Required */
		surrogateKey: string;

		/** Required */
		target: Array<Target>;
	}
	export interface NewTaskRequestFormProperties {

		/** Required */
		context: FormControl<string | null | undefined>,

		/** Required */
		description: FormControl<string | null | undefined>,

		/** Required */
		domain: FormControl<string | null | undefined>,

		/** Required */
		dueDate: FormControl<string | null | undefined>,

		/** Required */
		name: FormControl<string | null | undefined>,

		/** Required */
		parentTaskId: FormControl<string | null | undefined>,

		/** Required */
		priority: FormControl<string | null | undefined>,

		/** Required */
		surrogateKey: FormControl<string | null | undefined>,
	}
	export function CreateNewTaskRequestFormGroup() {
		return new FormGroup<NewTaskRequestFormProperties>({
			context: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			description: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			domain: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			dueDate: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			parentTaskId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			priority: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			surrogateKey: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Target {

		/** Required */
		id: string;

		/** Required */
		type: string;

		/** Required */
		url: string;
	}
	export interface TargetFormProperties {

		/** Required */
		id: FormControl<string | null | undefined>,

		/** Required */
		type: FormControl<string | null | undefined>,

		/** Required */
		url: FormControl<string | null | undefined>,
	}
	export function CreateTargetFormGroup() {
		return new FormGroup<TargetFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			url: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Get Notes by orderId
		 * Retrieves notes related to a specific `orderId`.
		 * Get notes
		 * @param {string} target_id ID of the order.
		 * @param {number} perPage Number of notes per page. Maximum: 30.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} page Number of the page to be retrieved.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} reason This parameter is relevant only for PII-compliant accounts. When sending requests to this endpoint, PII-compliant accounts can use this parameter to declare the reason for requesting unmasked data. Otherwise, this endpoint will return masked PII data.
		 * @return {any} OK
		 */
		GetNotesbyorderId(target_id: string, perPage: number | null | undefined, page: number | null | undefined, reason: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'notes?target_id=' + (target_id == null ? '' : encodeURIComponent(target_id)) + '&perPage=' + perPage + '&page=' + page + '&reason=' + (reason == null ? '' : encodeURIComponent(reason)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Create Note
		 * This endpoint creates a new note in VTEX DO. Be aware of the following limitations:
		 * - The maximum number of notes for an order is 30.
		 * - The maximum number of characters in a note's description is 2000.
		 * Post notes
		 * @return {any} OK
		 */
		NewNote(requestBody: NewNotePostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'notes', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieve Note
		 * Retrieves a given note in VTEX DO, filtering by `noteId`.
		 * Get notes/{noteId}
		 * @param {string} noteId Note's ID.
		 * @param {string} reason This parameter is relevant only for PII-compliant accounts. When sending requests to this endpoint, PII-compliant accounts can use this parameter to declare the reason for requesting unmasked data. Otherwise, this endpoint will return masked PII data.
		 * @return {any} OK
		 */
		GetNote(noteId: string, reason: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'notes/' + (noteId == null ? '' : encodeURIComponent(noteId)) + '&reason=' + (reason == null ? '' : encodeURIComponent(reason)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * List tasks
		 * This endpoint allows you to filter tasks. You can choose between the following filtering options:
		 * - **Assignees:** using `assignee.email` and `status`. Example: `https://{{accountName}}.{{environment}}.com.br/api/do/tasks?assignee.email={{person@email.com}}&status={{open}}`.
		 * - **Targets:** using `targetId` and `status`. Example: `https://{{accountName}}.{{environment}}.com.br/api/do/tasks?target.id={{name}}&status={{open}}`.
		 * - **Paged tasks:** using `page`, `perPage` and `status`. Example: `https://{{accountName}}.{{environment}}.com.br/api/do/tasks?page={{1}}&perPage={{10}}&status=;{{-Closed}}`.
		 * - **Context:** using `context`, `page`, `perPage` and `status`. Example: `https://{{accountName}}.{{environment}}.com.br/api/do/tasks?context={{context}}&page={{1}}&perPage={{10}}&status={{-Closed}}`.
		 * Get tasks
		 * @param {string} assignee_email If you wish to list tasks by assignee, insert the desired assignee's email and status.
		 * @param {string} target_id If you wish to list tasks by target, insert the desired `targetId` and `status`.
		 * @param {string} context If you wish to list tasks by context, insert the desired context, `page`, `perPage` and `status`.
		 * @param {string} page If you wish to list tasks by context, also insert the desired `page`.
		 * @param {string} perPage If you wish to list tasks by context, also insert the desired `perPage` value.
		 * @param {string} status If you wish to list tasks by context, also insert the desired `status`.
		 * @return {any} OK
		 */
		Listtasksbyassignee(assignee_email: string | null | undefined, target_id: string | null | undefined, context: string | null | undefined, page: string | null | undefined, perPage: string | null | undefined, status: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'tasks?assignee_email=' + (assignee_email == null ? '' : encodeURIComponent(assignee_email)) + '&target_id=' + (target_id == null ? '' : encodeURIComponent(target_id)) + '&context=' + (context == null ? '' : encodeURIComponent(context)) + '&page=' + (page == null ? '' : encodeURIComponent(page)) + '&perPage=' + (perPage == null ? '' : encodeURIComponent(perPage)) + '&status=' + (status == null ? '' : encodeURIComponent(status)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Create Task
		 * Creates a new task in VTEX DO.
		 * Post tasks
		 * @return {any} OK
		 */
		NewTask(requestBody: NewTaskRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'tasks', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieve Task
		 * Retrieves a given task, filtering by `taskId`.
		 * Get tasks/{taskId}
		 * @param {string} taskId Task ID.
		 * @return {any} OK
		 */
		GetTask(taskId: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'tasks/' + (taskId == null ? '' : encodeURIComponent(taskId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Update Task
		 * Updates a given task's status, for example, filtering by `taskId`.
		 * Put tasks/{taskId}
		 * @param {string} taskId Task ID.
		 * @return {any} OK
		 */
		EditTask(taskId: string, requestBody: EditTaskRequest): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'tasks/' + (taskId == null ? '' : encodeURIComponent(taskId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Add Comment on a Task
		 * Adds a comment to a given task, filtering by `taskId`.
		 * Post tasks/{taskId}/comments
		 * @param {string} taskId Task ID.
		 * @return {any} OK
		 */
		AddComment(taskId: string, requestBody: AddCommentRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'tasks/' + (taskId == null ? '' : encodeURIComponent(taskId)) + '/comments', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}
	}

	export interface NewNotePostBody {

		/**
		 * Note description. Maximum number of characters: 2000.
		 * Required
		 */
		description: string;

		/**
		 * Note domain.
		 * Required
		 */
		domain: string;

		/**
		 * Target.
		 * Required
		 */
		target: NewNotePostBodyTarget;
	}
	export interface NewNotePostBodyFormProperties {

		/**
		 * Note description. Maximum number of characters: 2000.
		 * Required
		 */
		description: FormControl<string | null | undefined>,

		/**
		 * Note domain.
		 * Required
		 */
		domain: FormControl<string | null | undefined>,
	}
	export function CreateNewNotePostBodyFormGroup() {
		return new FormGroup<NewNotePostBodyFormProperties>({
			description: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			domain: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface NewNotePostBodyTarget {

		/** Target ID. */
		id?: string | null;

		/** Target type. */
		type?: string | null;

		/** Target URL. */
		url?: string | null;
	}
	export interface NewNotePostBodyTargetFormProperties {

		/** Target ID. */
		id: FormControl<string | null | undefined>,

		/** Target type. */
		type: FormControl<string | null | undefined>,

		/** Target URL. */
		url: FormControl<string | null | undefined>,
	}
	export function CreateNewNotePostBodyTargetFormGroup() {
		return new FormGroup<NewNotePostBodyTargetFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

}

