import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** An Activity resource is a combined view of multiple events. An activity has a list of individual events and a combined view of the common fields among all events. */
	export interface Activity {

		/** Represents the changes associated with an action taken by a user. */
		combinedEvent?: Event;

		/** A list of all the Events that make up the Activity. */
		singleEvents?: Array<Event>;
	}

	/** An Activity resource is a combined view of multiple events. An activity has a list of individual events and a combined view of the common fields among all events. */
	export interface ActivityFormProperties {
	}
	export function CreateActivityFormGroup() {
		return new FormGroup<ActivityFormProperties>({
		});

	}


	/** Represents the changes associated with an action taken by a user. */
	export interface Event {

		/** Additional event types. Some events may have multiple types when multiple actions are part of a single event. For example, creating a document, renaming it, and sharing it may be part of a single file-creation event. */
		additionalEventTypes?: Array<string>;

		/** The time at which the event occurred formatted as Unix time in milliseconds. */
		eventTimeMillis?: string | null;

		/** Whether this event is caused by a user being deleted. */
		fromUserDeletion?: boolean | null;

		/** Contains information about changes in an object's parents as a result of a move type event. */
		move?: Move;

		/** Extra information for permissionChange type events, such as the user or group the new permission applies to. */
		permissionChanges?: Array<PermissionChange>;

		/** The main type of event that occurred. */
		primaryEventType?: EventPrimaryEventType | null;

		/** Contains information about a renametype event. */
		rename?: Rename;

		/** Information about the object modified by the event. */
		target?: Target;

		/** A representation of a user. */
		user?: User;
	}

	/** Represents the changes associated with an action taken by a user. */
	export interface EventFormProperties {

		/** The time at which the event occurred formatted as Unix time in milliseconds. */
		eventTimeMillis: FormControl<string | null | undefined>,

		/** Whether this event is caused by a user being deleted. */
		fromUserDeletion: FormControl<boolean | null | undefined>,

		/** The main type of event that occurred. */
		primaryEventType: FormControl<EventPrimaryEventType | null | undefined>,
	}
	export function CreateEventFormGroup() {
		return new FormGroup<EventFormProperties>({
			eventTimeMillis: new FormControl<string | null | undefined>(undefined),
			fromUserDeletion: new FormControl<boolean | null | undefined>(undefined),
			primaryEventType: new FormControl<EventPrimaryEventType | null | undefined>(undefined),
		});

	}


	/** Contains information about changes in an object's parents as a result of a move type event. */
	export interface Move {

		/** The added parent(s). */
		addedParents?: Array<Parent>;

		/** The removed parent(s). */
		removedParents?: Array<Parent>;
	}

	/** Contains information about changes in an object's parents as a result of a move type event. */
	export interface MoveFormProperties {
	}
	export function CreateMoveFormGroup() {
		return new FormGroup<MoveFormProperties>({
		});

	}


	/** Contains information about a parent object. For example, a folder in Drive is a parent for all files within it. */
	export interface Parent {

		/** The parent's ID. */
		id?: string | null;

		/** Whether this is the root folder. */
		isRoot?: boolean | null;

		/** The parent's title. */
		title?: string | null;
	}

	/** Contains information about a parent object. For example, a folder in Drive is a parent for all files within it. */
	export interface ParentFormProperties {

		/** The parent's ID. */
		id: FormControl<string | null | undefined>,

		/** Whether this is the root folder. */
		isRoot: FormControl<boolean | null | undefined>,

		/** The parent's title. */
		title: FormControl<string | null | undefined>,
	}
	export function CreateParentFormGroup() {
		return new FormGroup<ParentFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			isRoot: new FormControl<boolean | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains information about a Drive object's permissions that changed as a result of a permissionChange type event. */
	export interface PermissionChange {

		/** Lists all Permission objects added. */
		addedPermissions?: Array<Permission>;

		/** Lists all Permission objects removed. */
		removedPermissions?: Array<Permission>;
	}

	/** Contains information about a Drive object's permissions that changed as a result of a permissionChange type event. */
	export interface PermissionChangeFormProperties {
	}
	export function CreatePermissionChangeFormGroup() {
		return new FormGroup<PermissionChangeFormProperties>({
		});

	}


	/** Contains information about the permissions and type of access allowed with regards to a Google Drive object. This is a subset of the fields contained in a corresponding Drive Permissions object. */
	export interface Permission {

		/** The name of the user or group the permission applies to. */
		name?: string | null;

		/** The ID for this permission. Corresponds to the Drive API's permission ID returned as part of the Drive Permissions resource. */
		permissionId?: string | null;

		/** Indicates the Google Drive permissions role. The role determines a user's ability to read, write, or comment on the file. */
		role?: PermissionRole | null;

		/** Indicates how widely permissions are granted. */
		type?: PermissionType | null;

		/** A representation of a user. */
		user?: User;

		/** Whether the permission requires a link to the file. */
		withLink?: boolean | null;
	}

	/** Contains information about the permissions and type of access allowed with regards to a Google Drive object. This is a subset of the fields contained in a corresponding Drive Permissions object. */
	export interface PermissionFormProperties {

		/** The name of the user or group the permission applies to. */
		name: FormControl<string | null | undefined>,

		/** The ID for this permission. Corresponds to the Drive API's permission ID returned as part of the Drive Permissions resource. */
		permissionId: FormControl<string | null | undefined>,

		/** Indicates the Google Drive permissions role. The role determines a user's ability to read, write, or comment on the file. */
		role: FormControl<PermissionRole | null | undefined>,

		/** Indicates how widely permissions are granted. */
		type: FormControl<PermissionType | null | undefined>,

		/** Whether the permission requires a link to the file. */
		withLink: FormControl<boolean | null | undefined>,
	}
	export function CreatePermissionFormGroup() {
		return new FormGroup<PermissionFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			permissionId: new FormControl<string | null | undefined>(undefined),
			role: new FormControl<PermissionRole | null | undefined>(undefined),
			type: new FormControl<PermissionType | null | undefined>(undefined),
			withLink: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export enum PermissionRole { commenter = 0, fileOrganizer = 1, owner = 2, publishedReader = 3, reader = 4, writer = 5 }

	export enum PermissionType { anyone = 0, domain = 1, group = 2, user = 3 }


	/** A representation of a user. */
	export interface User {

		/** A boolean which indicates whether the specified User was deleted. If true, name, photo and permission_id will be omitted. */
		isDeleted?: boolean | null;

		/** Whether the user is the authenticated user. */
		isMe?: boolean | null;

		/** The displayable name of the user. */
		name?: string | null;

		/** The permission ID associated with this user. Equivalent to the Drive API's permission ID for this user, returned as part of the Drive Permissions resource. */
		permissionId?: string | null;

		/** Photo information for a user. */
		photo?: Photo;
	}

	/** A representation of a user. */
	export interface UserFormProperties {

		/** A boolean which indicates whether the specified User was deleted. If true, name, photo and permission_id will be omitted. */
		isDeleted: FormControl<boolean | null | undefined>,

		/** Whether the user is the authenticated user. */
		isMe: FormControl<boolean | null | undefined>,

		/** The displayable name of the user. */
		name: FormControl<string | null | undefined>,

		/** The permission ID associated with this user. Equivalent to the Drive API's permission ID for this user, returned as part of the Drive Permissions resource. */
		permissionId: FormControl<string | null | undefined>,
	}
	export function CreateUserFormGroup() {
		return new FormGroup<UserFormProperties>({
			isDeleted: new FormControl<boolean | null | undefined>(undefined),
			isMe: new FormControl<boolean | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			permissionId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Photo information for a user. */
	export interface Photo {

		/** The URL of the photo. */
		url?: string | null;
	}

	/** Photo information for a user. */
	export interface PhotoFormProperties {

		/** The URL of the photo. */
		url: FormControl<string | null | undefined>,
	}
	export function CreatePhotoFormGroup() {
		return new FormGroup<PhotoFormProperties>({
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum EventPrimaryEventType { comment = 0, create = 1, edit = 2, emptyTrash = 3, move = 4, permissionChange = 5, rename = 6, trash = 7, unknown = 8, untrash = 9, upload = 10 }


	/** Contains information about a renametype event. */
	export interface Rename {

		/** The new title. */
		newTitle?: string | null;

		/** The old title. */
		oldTitle?: string | null;
	}

	/** Contains information about a renametype event. */
	export interface RenameFormProperties {

		/** The new title. */
		newTitle: FormControl<string | null | undefined>,

		/** The old title. */
		oldTitle: FormControl<string | null | undefined>,
	}
	export function CreateRenameFormGroup() {
		return new FormGroup<RenameFormProperties>({
			newTitle: new FormControl<string | null | undefined>(undefined),
			oldTitle: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Information about the object modified by the event. */
	export interface Target {

		/** The ID of the target. For example, in Google Drive, this is the file or folder ID. */
		id?: string | null;

		/** The MIME type of the target. */
		mimeType?: string | null;

		/** The name of the target. For example, in Google Drive, this is the title of the file. */
		name?: string | null;
	}

	/** Information about the object modified by the event. */
	export interface TargetFormProperties {

		/** The ID of the target. For example, in Google Drive, this is the file or folder ID. */
		id: FormControl<string | null | undefined>,

		/** The MIME type of the target. */
		mimeType: FormControl<string | null | undefined>,

		/** The name of the target. For example, in Google Drive, this is the title of the file. */
		name: FormControl<string | null | undefined>,
	}
	export function CreateTargetFormGroup() {
		return new FormGroup<TargetFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			mimeType: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The response from the list request. Contains a list of activities and a token to retrieve the next page of results. */
	export interface ListActivitiesResponse {

		/** List of activities. */
		activities?: Array<Activity>;

		/** Token for the next page of results. */
		nextPageToken?: string | null;
	}

	/** The response from the list request. Contains a list of activities and a token to retrieve the next page of results. */
	export interface ListActivitiesResponseFormProperties {

		/** Token for the next page of results. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListActivitiesResponseFormGroup() {
		return new FormGroup<ListActivitiesResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Returns a list of activities visible to the current logged in user. Visible activities are determined by the visibility settings of the object that was acted on, e.g. Drive files a user can see. An activity is a record of past events. Multiple events may be merged if they are similar. A request is scoped to activities from a given Google service using the source parameter.
		 * Get activities
		 * @param {string} drive_ancestorId Identifies the Drive folder containing the items for which to return activities.
		 * @param {string} drive_fileId Identifies the Drive item to return activities for.
		 * @param {Appsactivity_activities_listGroupingStrategy} groupingStrategy Indicates the strategy to use when grouping singleEvents items in the associated combinedEvent object.
		 * @param {number} pageSize The maximum number of events to return on a page. The response includes a continuation token if there are more events.
		 * @param {string} pageToken A token to retrieve a specific page of results.
		 * @param {string} source The Google service from which to return activities. Possible values of source are: 
		 * - drive.google.com
		 * @param {string} userId The ID used for ACL checks (does not filter the resulting event list by the assigned value). Use the special value me to indicate the currently authenticated user.
		 * @return {void} Successful response
		 */
		Appsactivity_activities_list(drive_ancestorId: string | null | undefined, drive_fileId: string | null | undefined, groupingStrategy: Appsactivity_activities_listGroupingStrategy | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined, source: string | null | undefined, userId: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'activities?drive_ancestorId=' + (drive_ancestorId == null ? '' : encodeURIComponent(drive_ancestorId)) + '&drive_fileId=' + (drive_fileId == null ? '' : encodeURIComponent(drive_fileId)) + '&groupingStrategy=' + groupingStrategy + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '&source=' + (source == null ? '' : encodeURIComponent(source)) + '&userId=' + (userId == null ? '' : encodeURIComponent(userId)), { observe: 'response', responseType: 'text' });
		}
	}

	export enum Appsactivity_activities_listGroupingStrategy { driveUi = 0, none = 1 }

}

