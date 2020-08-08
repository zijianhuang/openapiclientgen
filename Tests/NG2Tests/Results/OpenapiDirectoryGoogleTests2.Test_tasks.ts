import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
export namespace MyNS {
	export interface Task_ {

		/** Completion date of the task (as a RFC 3339 timestamp). This field is omitted if the task has not been completed. */
		completed?: Date;

		/** Flag indicating whether the task has been deleted. The default if False. */
		deleted?: boolean;

		/** Due date of the task (as a RFC 3339 timestamp). Optional. The due date only records date information; the time portion of the timestamp is discarded when setting the due date. It isn't possible to read or write the time that a task is due via the API. */
		due?: Date;

		/** ETag of the resource. */
		etag?: string;

		/** Flag indicating whether the task is hidden. This is the case if the task had been marked completed when the task list was last cleared. The default is False. This field is read-only. */
		hidden?: boolean;

		/** Task identifier. */
		id?: string;

		/** Type of the resource. This is always "tasks#task". */
		kind?: string;

		/** Collection of links. This collection is read-only. */
		Task_Links?: Array<Task_Links>;

		/** Notes describing the task. Optional. */
		notes?: string;

		/** Parent task identifier. This field is omitted if it is a top-level task. This field is read-only. Use the "move" method to move the task under a different parent or to the top level. */
		parent?: string;

		/** String indicating the position of the task among its sibling tasks under the same parent task or at the top level. If this string is greater than another task's corresponding position string according to lexicographical ordering, the task is positioned after the other task under the same parent task (or at the top level). This field is read-only. Use the "move" method to move the task to another position. */
		position?: string;

		/** URL pointing to this task. Used to retrieve, update, or delete this task. */
		selfLink?: string;

		/** Status of the task. This is either "needsAction" or "completed". */
		status?: string;

		/** Title of the task. */
		title?: string;

		/** Last modification time of the task (as a RFC 3339 timestamp). */
		updated?: Date;
	}

	export interface Task_Links {

		/** The description. In HTML speak: Everything between <a> and </a>. */
		description?: string;

		/** The URL. */
		link?: string;

		/** Type of the link, e.g. "email". */
		type?: string;
	}

	export interface TaskList {

		/** ETag of the resource. */
		etag?: string;

		/** Task list identifier. */
		id?: string;

		/** Type of the resource. This is always "tasks#taskList". */
		kind?: string;

		/** URL pointing to this task list. Used to retrieve, update, or delete this task list. */
		selfLink?: string;

		/** Title of the task list. */
		title?: string;

		/** Last modification time of the task list (as a RFC 3339 timestamp). */
		updated?: Date;
	}

	export interface TaskLists {

		/** ETag of the resource. */
		etag?: string;

		/** Collection of task lists. */
		items?: Array<TaskList>;

		/** Type of the resource. This is always "tasks#taskLists". */
		kind?: string;

		/** Token that can be used to request the next page of this result. */
		nextPageToken?: string;
	}

	export interface Tasks {

		/** ETag of the resource. */
		etag?: string;

		/** Collection of tasks. */
		items?: Array<Task_>;

		/** Type of the resource. This is always "tasks#tasks". */
		kind?: string;

		/** Token used to access the next page of this result. */
		nextPageToken?: string;
	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Clears all completed tasks from the specified task list. The affected tasks will be marked as 'hidden' and no longer be returned by default when retrieving all tasks for a task list.
		 * Post lists/{tasklist}/clear
		 * @param {string} tasklist Task list identifier.
		 * @return {void} Successful response
		 */
		Tasks_tasks_clear(tasklist: string): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'lists/' + (tasklist == null ? '' : encodeURIComponent(tasklist)) + '/clear', null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns all tasks in the specified task list.
		 * Get lists/{tasklist}/tasks
		 * @param {string} tasklist Task list identifier.
		 * @param {string} completedMax Upper bound for a task's completion date (as a RFC 3339 timestamp) to filter by. Optional. The default is not to filter by completion date.
		 * @param {string} completedMin Lower bound for a task's completion date (as a RFC 3339 timestamp) to filter by. Optional. The default is not to filter by completion date.
		 * @param {string} dueMax Upper bound for a task's due date (as a RFC 3339 timestamp) to filter by. Optional. The default is not to filter by due date.
		 * @param {string} dueMin Lower bound for a task's due date (as a RFC 3339 timestamp) to filter by. Optional. The default is not to filter by due date.
		 * @param {string} maxResults Maximum number of task lists returned on one page. Optional. The default is 20 (max allowed: 100).
		 * @param {string} pageToken Token specifying the result page to return. Optional.
		 * @param {boolean} showCompleted Flag indicating whether completed tasks are returned in the result. Optional. The default is True.
		 * @param {boolean} showDeleted Flag indicating whether deleted tasks are returned in the result. Optional. The default is False.
		 * @param {boolean} showHidden Flag indicating whether hidden tasks are returned in the result. Optional. The default is False.
		 * @param {string} updatedMin Lower bound for a task's last modification time (as a RFC 3339 timestamp) to filter by. Optional. The default is not to filter by last modification time.
		 * @return {void} Successful response
		 */
		Tasks_tasks_list(tasklist: string, completedMax: string, completedMin: string, dueMax: string, dueMin: string, maxResults: string, pageToken: string, showCompleted: boolean, showDeleted: boolean, showHidden: boolean, updatedMin: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'lists/' + (tasklist == null ? '' : encodeURIComponent(tasklist)) + '/tasks&completedMax=' + (completedMax == null ? '' : encodeURIComponent(completedMax)) + '&completedMin=' + (completedMin == null ? '' : encodeURIComponent(completedMin)) + '&dueMax=' + (dueMax == null ? '' : encodeURIComponent(dueMax)) + '&dueMin=' + (dueMin == null ? '' : encodeURIComponent(dueMin)) + '&maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '&showCompleted=' + showCompleted + '&showDeleted=' + showDeleted + '&showHidden=' + showHidden + '&updatedMin=' + (updatedMin == null ? '' : encodeURIComponent(updatedMin)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Creates a new task on the specified task list. Fails with HTTP code 403 or 429 after reaching the storage limit of 100,000 tasks per account.
		 * Post lists/{tasklist}/tasks
		 * @param {string} tasklist Task list identifier.
		 * @param {string} parent Parent task identifier. If the task is created at the top level, this parameter is omitted. Optional.
		 * @param {string} previous Previous sibling task identifier. If the task is created at the first position among its siblings, this parameter is omitted. Optional.
		 * @return {void} Successful response
		 */
		Tasks_tasks_insert(tasklist: string, parent: string, previous: string, requestBody: Task_): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'lists/' + (tasklist == null ? '' : encodeURIComponent(tasklist)) + '/tasks&parent=' + (parent == null ? '' : encodeURIComponent(parent)) + '&previous=' + (previous == null ? '' : encodeURIComponent(previous)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Deletes the specified task from the task list.
		 * Delete lists/{tasklist}/tasks/{task}
		 * @param {string} tasklist Task list identifier.
		 * @param {string} task Task identifier.
		 * @return {void} Successful response
		 */
		Tasks_tasks_delete(tasklist: string, task: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'lists/' + (tasklist == null ? '' : encodeURIComponent(tasklist)) + '/tasks/' + (task == null ? '' : encodeURIComponent(task)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns the specified task.
		 * Get lists/{tasklist}/tasks/{task}
		 * @param {string} tasklist Task list identifier.
		 * @param {string} task Task identifier.
		 * @return {void} Successful response
		 */
		Tasks_tasks_get(tasklist: string, task: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'lists/' + (tasklist == null ? '' : encodeURIComponent(tasklist)) + '/tasks/' + (task == null ? '' : encodeURIComponent(task)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Updates the specified task. This method supports patch semantics.
		 * Patch lists/{tasklist}/tasks/{task}
		 * @param {string} tasklist Task list identifier.
		 * @param {string} task Task identifier.
		 * @return {void} Successful response
		 */
		Tasks_tasks_patch(tasklist: string, task: string, requestBody: Task_): Observable<HttpResponse<string>> {
			return this.http.patch(this.baseUri + 'lists/' + (tasklist == null ? '' : encodeURIComponent(tasklist)) + '/tasks/' + (task == null ? '' : encodeURIComponent(task)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Updates the specified task.
		 * Put lists/{tasklist}/tasks/{task}
		 * @param {string} tasklist Task list identifier.
		 * @param {string} task Task identifier.
		 * @return {void} Successful response
		 */
		Tasks_tasks_update(tasklist: string, task: string, requestBody: Task_): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'lists/' + (tasklist == null ? '' : encodeURIComponent(tasklist)) + '/tasks/' + (task == null ? '' : encodeURIComponent(task)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Moves the specified task to another position in the task list. This can include putting it as a child task under a new parent and/or move it to a different position among its sibling tasks.
		 * Post lists/{tasklist}/tasks/{task}/move
		 * @param {string} tasklist Task list identifier.
		 * @param {string} task Task identifier.
		 * @param {string} parent New parent task identifier. If the task is moved to the top level, this parameter is omitted. Optional.
		 * @param {string} previous New previous sibling task identifier. If the task is moved to the first position among its siblings, this parameter is omitted. Optional.
		 * @return {void} Successful response
		 */
		Tasks_tasks_move(tasklist: string, task: string, parent: string, previous: string): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'lists/' + (tasklist == null ? '' : encodeURIComponent(tasklist)) + '/tasks/' + (task == null ? '' : encodeURIComponent(task)) + '/move&parent=' + (parent == null ? '' : encodeURIComponent(parent)) + '&previous=' + (previous == null ? '' : encodeURIComponent(previous)), null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns all the authenticated user's task lists.
		 * Get users/@me/lists
		 * @param {string} maxResults Maximum number of task lists returned on one page. Optional. The default is 20 (max allowed: 100).
		 * @param {string} pageToken Token specifying the result page to return. Optional.
		 * @return {void} Successful response
		 */
		Tasks_tasklists_list(maxResults: string, pageToken: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'users/@me/lists?maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Creates a new task list and adds it to the authenticated user's task lists. Fails with HTTP code 403 or 429 after reaching the storage limit of 2,000 lists.
		 * Post users/@me/lists
		 * @return {void} Successful response
		 */
		Tasks_tasklists_insert(requestBody: TaskList): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'users/@me/lists', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Deletes the authenticated user's specified task list.
		 * Delete users/@me/lists/{tasklist}
		 * @param {string} tasklist Task list identifier.
		 * @return {void} Successful response
		 */
		Tasks_tasklists_delete(tasklist: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'users/@me/lists/' + (tasklist == null ? '' : encodeURIComponent(tasklist)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns the authenticated user's specified task list.
		 * Get users/@me/lists/{tasklist}
		 * @param {string} tasklist Task list identifier.
		 * @return {void} Successful response
		 */
		Tasks_tasklists_get(tasklist: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'users/@me/lists/' + (tasklist == null ? '' : encodeURIComponent(tasklist)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Updates the authenticated user's specified task list. This method supports patch semantics.
		 * Patch users/@me/lists/{tasklist}
		 * @param {string} tasklist Task list identifier.
		 * @return {void} Successful response
		 */
		Tasks_tasklists_patch(tasklist: string, requestBody: TaskList): Observable<HttpResponse<string>> {
			return this.http.patch(this.baseUri + 'users/@me/lists/' + (tasklist == null ? '' : encodeURIComponent(tasklist)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Updates the authenticated user's specified task list.
		 * Put users/@me/lists/{tasklist}
		 * @param {string} tasklist Task list identifier.
		 * @return {void} Successful response
		 */
		Tasks_tasklists_update(tasklist: string, requestBody: TaskList): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'users/@me/lists/' + (tasklist == null ? '' : encodeURIComponent(tasklist)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}
	}

}

