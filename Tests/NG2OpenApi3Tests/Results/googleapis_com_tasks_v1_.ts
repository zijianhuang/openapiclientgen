import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface Task {

		/** Completion date of the task (as a RFC 3339 timestamp). This field is omitted if the task has not been completed. */
		completed?: string | null;

		/** Flag indicating whether the task has been deleted. The default is False. */
		deleted?: boolean | null;

		/** Due date of the task (as a RFC 3339 timestamp). Optional. The due date only records date information; the time portion of the timestamp is discarded when setting the due date. It isn't possible to read or write the time that a task is due via the API. */
		due?: string | null;

		/** ETag of the resource. */
		etag?: string | null;

		/** Flag indicating whether the task is hidden. This is the case if the task had been marked completed when the task list was last cleared. The default is False. This field is read-only. */
		hidden?: boolean | null;

		/** Task identifier. */
		id?: string | null;

		/** Type of the resource. This is always "tasks#task". */
		kind?: string | null;

		/** Collection of links. This collection is read-only. */
		TaskLinks?: Array<TaskLinks>;

		/** Notes describing the task. Optional. */
		notes?: string | null;

		/** Parent task identifier. This field is omitted if it is a top-level task. This field is read-only. Use the "move" method to move the task under a different parent or to the top level. */
		parent?: string | null;

		/** String indicating the position of the task among its sibling tasks under the same parent task or at the top level. If this string is greater than another task's corresponding position string according to lexicographical ordering, the task is positioned after the other task under the same parent task (or at the top level). This field is read-only. Use the "move" method to move the task to another position. */
		position?: string | null;

		/** URL pointing to this task. Used to retrieve, update, or delete this task. */
		selfLink?: string | null;

		/** Status of the task. This is either "needsAction" or "completed". */
		status?: string | null;

		/** Title of the task. */
		title?: string | null;

		/** Last modification time of the task (as a RFC 3339 timestamp). */
		updated?: string | null;
	}
	export interface TaskFormProperties {

		/** Completion date of the task (as a RFC 3339 timestamp). This field is omitted if the task has not been completed. */
		completed: FormControl<string | null | undefined>,

		/** Flag indicating whether the task has been deleted. The default is False. */
		deleted: FormControl<boolean | null | undefined>,

		/** Due date of the task (as a RFC 3339 timestamp). Optional. The due date only records date information; the time portion of the timestamp is discarded when setting the due date. It isn't possible to read or write the time that a task is due via the API. */
		due: FormControl<string | null | undefined>,

		/** ETag of the resource. */
		etag: FormControl<string | null | undefined>,

		/** Flag indicating whether the task is hidden. This is the case if the task had been marked completed when the task list was last cleared. The default is False. This field is read-only. */
		hidden: FormControl<boolean | null | undefined>,

		/** Task identifier. */
		id: FormControl<string | null | undefined>,

		/** Type of the resource. This is always "tasks#task". */
		kind: FormControl<string | null | undefined>,

		/** Notes describing the task. Optional. */
		notes: FormControl<string | null | undefined>,

		/** Parent task identifier. This field is omitted if it is a top-level task. This field is read-only. Use the "move" method to move the task under a different parent or to the top level. */
		parent: FormControl<string | null | undefined>,

		/** String indicating the position of the task among its sibling tasks under the same parent task or at the top level. If this string is greater than another task's corresponding position string according to lexicographical ordering, the task is positioned after the other task under the same parent task (or at the top level). This field is read-only. Use the "move" method to move the task to another position. */
		position: FormControl<string | null | undefined>,

		/** URL pointing to this task. Used to retrieve, update, or delete this task. */
		selfLink: FormControl<string | null | undefined>,

		/** Status of the task. This is either "needsAction" or "completed". */
		status: FormControl<string | null | undefined>,

		/** Title of the task. */
		title: FormControl<string | null | undefined>,

		/** Last modification time of the task (as a RFC 3339 timestamp). */
		updated: FormControl<string | null | undefined>,
	}
	export function CreateTaskFormGroup() {
		return new FormGroup<TaskFormProperties>({
			completed: new FormControl<string | null | undefined>(undefined),
			deleted: new FormControl<boolean | null | undefined>(undefined),
			due: new FormControl<string | null | undefined>(undefined),
			etag: new FormControl<string | null | undefined>(undefined),
			hidden: new FormControl<boolean | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			notes: new FormControl<string | null | undefined>(undefined),
			parent: new FormControl<string | null | undefined>(undefined),
			position: new FormControl<string | null | undefined>(undefined),
			selfLink: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<string | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
			updated: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface TaskLinks {

		/** The description. In HTML speak: Everything between <a> and </a>. */
		description?: string | null;

		/** The URL. */
		link?: string | null;

		/** Type of the link, e.g. "email". */
		type?: string | null;
	}
	export interface TaskLinksFormProperties {

		/** The description. In HTML speak: Everything between <a> and </a>. */
		description: FormControl<string | null | undefined>,

		/** The URL. */
		link: FormControl<string | null | undefined>,

		/** Type of the link, e.g. "email". */
		type: FormControl<string | null | undefined>,
	}
	export function CreateTaskLinksFormGroup() {
		return new FormGroup<TaskLinksFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			link: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface TaskList {

		/** ETag of the resource. */
		etag?: string | null;

		/** Task list identifier. */
		id?: string | null;

		/** Type of the resource. This is always "tasks#taskList". */
		kind?: string | null;

		/** URL pointing to this task list. Used to retrieve, update, or delete this task list. */
		selfLink?: string | null;

		/** Title of the task list. */
		title?: string | null;

		/** Last modification time of the task list (as a RFC 3339 timestamp). */
		updated?: string | null;
	}
	export interface TaskListFormProperties {

		/** ETag of the resource. */
		etag: FormControl<string | null | undefined>,

		/** Task list identifier. */
		id: FormControl<string | null | undefined>,

		/** Type of the resource. This is always "tasks#taskList". */
		kind: FormControl<string | null | undefined>,

		/** URL pointing to this task list. Used to retrieve, update, or delete this task list. */
		selfLink: FormControl<string | null | undefined>,

		/** Title of the task list. */
		title: FormControl<string | null | undefined>,

		/** Last modification time of the task list (as a RFC 3339 timestamp). */
		updated: FormControl<string | null | undefined>,
	}
	export function CreateTaskListFormGroup() {
		return new FormGroup<TaskListFormProperties>({
			etag: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			selfLink: new FormControl<string | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
			updated: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface TaskLists {

		/** ETag of the resource. */
		etag?: string | null;

		/** Collection of task lists. */
		items?: Array<TaskList>;

		/** Type of the resource. This is always "tasks#taskLists". */
		kind?: string | null;

		/** Token that can be used to request the next page of this result. */
		nextPageToken?: string | null;
	}
	export interface TaskListsFormProperties {

		/** ETag of the resource. */
		etag: FormControl<string | null | undefined>,

		/** Type of the resource. This is always "tasks#taskLists". */
		kind: FormControl<string | null | undefined>,

		/** Token that can be used to request the next page of this result. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateTaskListsFormGroup() {
		return new FormGroup<TaskListsFormProperties>({
			etag: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Tasks {

		/** ETag of the resource. */
		etag?: string | null;

		/** Collection of tasks. */
		items?: Array<Task>;

		/** Type of the resource. This is always "tasks#tasks". */
		kind?: string | null;

		/** Token used to access the next page of this result. */
		nextPageToken?: string | null;
	}
	export interface TasksFormProperties {

		/** ETag of the resource. */
		etag: FormControl<string | null | undefined>,

		/** Type of the resource. This is always "tasks#tasks". */
		kind: FormControl<string | null | undefined>,

		/** Token used to access the next page of this result. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateTasksFormGroup() {
		return new FormGroup<TasksFormProperties>({
			etag: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Clears all completed tasks from the specified task list. The affected tasks will be marked as 'hidden' and no longer be returned by default when retrieving all tasks for a task list.
		 * Post tasks/v1/lists/{tasklist}/clear
		 * @param {string} tasklist Task list identifier.
		 * @return {void} Successful response
		 */
		Tasks_tasks_clear(tasklist: string): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'tasks/v1/lists/' + (tasklist == null ? '' : encodeURIComponent(tasklist)) + '/clear', null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns all tasks in the specified task list.
		 * Get tasks/v1/lists/{tasklist}/tasks
		 * @param {string} tasklist Task list identifier.
		 * @param {string} completedMax Upper bound for a task's completion date (as a RFC 3339 timestamp) to filter by. Optional. The default is not to filter by completion date.
		 * @param {string} completedMin Lower bound for a task's completion date (as a RFC 3339 timestamp) to filter by. Optional. The default is not to filter by completion date.
		 * @param {string} dueMax Upper bound for a task's due date (as a RFC 3339 timestamp) to filter by. Optional. The default is not to filter by due date.
		 * @param {string} dueMin Lower bound for a task's due date (as a RFC 3339 timestamp) to filter by. Optional. The default is not to filter by due date.
		 * @param {number} maxResults Maximum number of task lists returned on one page. Optional. The default is 20 (max allowed: 100).
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} pageToken Token specifying the result page to return. Optional.
		 * @param {boolean} showCompleted Flag indicating whether completed tasks are returned in the result. Optional. The default is True. Note that showHidden must also be True to show tasks completed in first party clients, such as the web UI and Google's mobile apps.
		 * @param {boolean} showDeleted Flag indicating whether deleted tasks are returned in the result. Optional. The default is False.
		 * @param {boolean} showHidden Flag indicating whether hidden tasks are returned in the result. Optional. The default is False.
		 * @param {string} updatedMin Lower bound for a task's last modification time (as a RFC 3339 timestamp) to filter by. Optional. The default is not to filter by last modification time.
		 * @return {Tasks} Successful response
		 */
		Tasks_tasks_list(tasklist: string, completedMax: string | null | undefined, completedMin: string | null | undefined, dueMax: string | null | undefined, dueMin: string | null | undefined, maxResults: number | null | undefined, pageToken: string | null | undefined, showCompleted: boolean | null | undefined, showDeleted: boolean | null | undefined, showHidden: boolean | null | undefined, updatedMin: string | null | undefined): Observable<Tasks> {
			return this.http.get<Tasks>(this.baseUri + 'tasks/v1/lists/' + (tasklist == null ? '' : encodeURIComponent(tasklist)) + '/tasks&completedMax=' + (completedMax == null ? '' : encodeURIComponent(completedMax)) + '&completedMin=' + (completedMin == null ? '' : encodeURIComponent(completedMin)) + '&dueMax=' + (dueMax == null ? '' : encodeURIComponent(dueMax)) + '&dueMin=' + (dueMin == null ? '' : encodeURIComponent(dueMin)) + '&maxResults=' + maxResults + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '&showCompleted=' + showCompleted + '&showDeleted=' + showDeleted + '&showHidden=' + showHidden + '&updatedMin=' + (updatedMin == null ? '' : encodeURIComponent(updatedMin)), {});
		}

		/**
		 * Creates a new task on the specified task list.
		 * Post tasks/v1/lists/{tasklist}/tasks
		 * @param {string} tasklist Task list identifier.
		 * @param {string} parent Parent task identifier. If the task is created at the top level, this parameter is omitted. Optional.
		 * @param {string} previous Previous sibling task identifier. If the task is created at the first position among its siblings, this parameter is omitted. Optional.
		 * @return {Task} Successful response
		 */
		Tasks_tasks_insert(tasklist: string, parent: string | null | undefined, previous: string | null | undefined, requestBody: Task): Observable<Task> {
			return this.http.post<Task>(this.baseUri + 'tasks/v1/lists/' + (tasklist == null ? '' : encodeURIComponent(tasklist)) + '/tasks&parent=' + (parent == null ? '' : encodeURIComponent(parent)) + '&previous=' + (previous == null ? '' : encodeURIComponent(previous)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes the specified task from the task list.
		 * Delete tasks/v1/lists/{tasklist}/tasks/{task}
		 * @param {string} tasklist Task list identifier.
		 * @param {string} task Task identifier.
		 * @return {void} Successful response
		 */
		Tasks_tasks_delete(tasklist: string, task: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'tasks/v1/lists/' + (tasklist == null ? '' : encodeURIComponent(tasklist)) + '/tasks/' + (task == null ? '' : encodeURIComponent(task)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns the specified task.
		 * Get tasks/v1/lists/{tasklist}/tasks/{task}
		 * @param {string} tasklist Task list identifier.
		 * @param {string} task Task identifier.
		 * @return {Task} Successful response
		 */
		Tasks_tasks_get(tasklist: string, task: string): Observable<Task> {
			return this.http.get<Task>(this.baseUri + 'tasks/v1/lists/' + (tasklist == null ? '' : encodeURIComponent(tasklist)) + '/tasks/' + (task == null ? '' : encodeURIComponent(task)), {});
		}

		/**
		 * Updates the specified task. This method supports patch semantics.
		 * Patch tasks/v1/lists/{tasklist}/tasks/{task}
		 * @param {string} tasklist Task list identifier.
		 * @param {string} task Task identifier.
		 * @return {Task} Successful response
		 */
		Tasks_tasks_patch(tasklist: string, task: string, requestBody: Task): Observable<Task> {
			return this.http.patch<Task>(this.baseUri + 'tasks/v1/lists/' + (tasklist == null ? '' : encodeURIComponent(tasklist)) + '/tasks/' + (task == null ? '' : encodeURIComponent(task)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Updates the specified task.
		 * Put tasks/v1/lists/{tasklist}/tasks/{task}
		 * @param {string} tasklist Task list identifier.
		 * @param {string} task Task identifier.
		 * @return {Task} Successful response
		 */
		Tasks_tasks_update(tasklist: string, task: string, requestBody: Task): Observable<Task> {
			return this.http.put<Task>(this.baseUri + 'tasks/v1/lists/' + (tasklist == null ? '' : encodeURIComponent(tasklist)) + '/tasks/' + (task == null ? '' : encodeURIComponent(task)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Moves the specified task to another position in the task list. This can include putting it as a child task under a new parent and/or move it to a different position among its sibling tasks.
		 * Post tasks/v1/lists/{tasklist}/tasks/{task}/move
		 * @param {string} tasklist Task list identifier.
		 * @param {string} task Task identifier.
		 * @param {string} parent New parent task identifier. If the task is moved to the top level, this parameter is omitted. Optional.
		 * @param {string} previous New previous sibling task identifier. If the task is moved to the first position among its siblings, this parameter is omitted. Optional.
		 * @return {Task} Successful response
		 */
		Tasks_tasks_move(tasklist: string, task: string, parent: string | null | undefined, previous: string | null | undefined): Observable<Task> {
			return this.http.post<Task>(this.baseUri + 'tasks/v1/lists/' + (tasklist == null ? '' : encodeURIComponent(tasklist)) + '/tasks/' + (task == null ? '' : encodeURIComponent(task)) + '/move&parent=' + (parent == null ? '' : encodeURIComponent(parent)) + '&previous=' + (previous == null ? '' : encodeURIComponent(previous)), null, {});
		}

		/**
		 * Returns all the authenticated user's task lists.
		 * Get tasks/v1/users/@me/lists
		 * @param {number} maxResults Maximum number of task lists returned on one page. Optional. The default is 20 (max allowed: 100).
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} pageToken Token specifying the result page to return. Optional.
		 * @return {TaskLists} Successful response
		 */
		Tasks_tasklists_list(maxResults: number | null | undefined, pageToken: string | null | undefined): Observable<TaskLists> {
			return this.http.get<TaskLists>(this.baseUri + 'tasks/v1/users/@me/lists?maxResults=' + maxResults + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Creates a new task list and adds it to the authenticated user's task lists.
		 * Post tasks/v1/users/@me/lists
		 * @return {TaskList} Successful response
		 */
		Tasks_tasklists_insert(requestBody: TaskList): Observable<TaskList> {
			return this.http.post<TaskList>(this.baseUri + 'tasks/v1/users/@me/lists', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes the authenticated user's specified task list.
		 * Delete tasks/v1/users/@me/lists/{tasklist}
		 * @param {string} tasklist Task list identifier.
		 * @return {void} Successful response
		 */
		Tasks_tasklists_delete(tasklist: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'tasks/v1/users/@me/lists/' + (tasklist == null ? '' : encodeURIComponent(tasklist)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns the authenticated user's specified task list.
		 * Get tasks/v1/users/@me/lists/{tasklist}
		 * @param {string} tasklist Task list identifier.
		 * @return {TaskList} Successful response
		 */
		Tasks_tasklists_get(tasklist: string): Observable<TaskList> {
			return this.http.get<TaskList>(this.baseUri + 'tasks/v1/users/@me/lists/' + (tasklist == null ? '' : encodeURIComponent(tasklist)), {});
		}

		/**
		 * Updates the authenticated user's specified task list. This method supports patch semantics.
		 * Patch tasks/v1/users/@me/lists/{tasklist}
		 * @param {string} tasklist Task list identifier.
		 * @return {TaskList} Successful response
		 */
		Tasks_tasklists_patch(tasklist: string, requestBody: TaskList): Observable<TaskList> {
			return this.http.patch<TaskList>(this.baseUri + 'tasks/v1/users/@me/lists/' + (tasklist == null ? '' : encodeURIComponent(tasklist)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Updates the authenticated user's specified task list.
		 * Put tasks/v1/users/@me/lists/{tasklist}
		 * @param {string} tasklist Task list identifier.
		 * @return {TaskList} Successful response
		 */
		Tasks_tasklists_update(tasklist: string, requestBody: TaskList): Observable<TaskList> {
			return this.http.put<TaskList>(this.baseUri + 'tasks/v1/users/@me/lists/' + (tasklist == null ? '' : encodeURIComponent(tasklist)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

}

