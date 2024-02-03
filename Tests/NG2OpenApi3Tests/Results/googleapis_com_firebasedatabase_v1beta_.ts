import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** Representation of a Realtime Database instance. Details on interacting with contents of a DatabaseInstance can be found at: https://firebase.google.com/docs/database/rest/start. */
	export interface DatabaseInstance {

		/** Output only. Output Only. The globally unique hostname of the database. */
		databaseUrl?: string | null;

		/** The fully qualified resource name of the database instance, in the form: `projects/{project-number}/locations/{location-id}/instances/{database-id}`. */
		name?: string | null;

		/** Output only. The resource name of the project this instance belongs to. For example: `projects/{project-number}`. */
		project?: string | null;

		/** Output only. The database's lifecycle state. Read-only. */
		state?: DatabaseInstanceState | null;

		/** Immutable. The database instance type. On creation only USER_DATABASE is allowed, which is also the default when omitted. */
		type?: DatabaseInstanceType | null;
	}

	/** Representation of a Realtime Database instance. Details on interacting with contents of a DatabaseInstance can be found at: https://firebase.google.com/docs/database/rest/start. */
	export interface DatabaseInstanceFormProperties {

		/** Output only. Output Only. The globally unique hostname of the database. */
		databaseUrl: FormControl<string | null | undefined>,

		/** The fully qualified resource name of the database instance, in the form: `projects/{project-number}/locations/{location-id}/instances/{database-id}`. */
		name: FormControl<string | null | undefined>,

		/** Output only. The resource name of the project this instance belongs to. For example: `projects/{project-number}`. */
		project: FormControl<string | null | undefined>,

		/** Output only. The database's lifecycle state. Read-only. */
		state: FormControl<DatabaseInstanceState | null | undefined>,

		/** Immutable. The database instance type. On creation only USER_DATABASE is allowed, which is also the default when omitted. */
		type: FormControl<DatabaseInstanceType | null | undefined>,
	}
	export function CreateDatabaseInstanceFormGroup() {
		return new FormGroup<DatabaseInstanceFormProperties>({
			databaseUrl: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			project: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<DatabaseInstanceState | null | undefined>(undefined),
			type: new FormControl<DatabaseInstanceType | null | undefined>(undefined),
		});

	}

	export enum DatabaseInstanceState { LIFECYCLE_STATE_UNSPECIFIED = 'LIFECYCLE_STATE_UNSPECIFIED', ACTIVE = 'ACTIVE', DISABLED = 'DISABLED', DELETED = 'DELETED' }

	export enum DatabaseInstanceType { DATABASE_INSTANCE_TYPE_UNSPECIFIED = 'DATABASE_INSTANCE_TYPE_UNSPECIFIED', DEFAULT_DATABASE = 'DEFAULT_DATABASE', USER_DATABASE = 'USER_DATABASE' }


	/** The request sent to the DisableDatabaseInstance method. */
	export interface DisableDatabaseInstanceRequest {
	}

	/** The request sent to the DisableDatabaseInstance method. */
	export interface DisableDatabaseInstanceRequestFormProperties {
	}
	export function CreateDisableDatabaseInstanceRequestFormGroup() {
		return new FormGroup<DisableDatabaseInstanceRequestFormProperties>({
		});

	}


	/** The response from the ListDatabaseInstances method. */
	export interface ListDatabaseInstancesResponse {

		/** List of each DatabaseInstance that is in the parent Firebase project. */
		instances?: Array<DatabaseInstance>;

		/** If the result list is too large to fit in a single response, then a token is returned. If the string is empty, then this response is the last page of results. This token can be used in a subsequent call to `ListDatabaseInstances` to find the next group of database instances. Page tokens are short-lived and should not be persisted. */
		nextPageToken?: string | null;
	}

	/** The response from the ListDatabaseInstances method. */
	export interface ListDatabaseInstancesResponseFormProperties {

		/** If the result list is too large to fit in a single response, then a token is returned. If the string is empty, then this response is the last page of results. This token can be used in a subsequent call to `ListDatabaseInstances` to find the next group of database instances. Page tokens are short-lived and should not be persisted. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListDatabaseInstancesResponseFormGroup() {
		return new FormGroup<ListDatabaseInstancesResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The request sent to the ReenableDatabaseInstance method. */
	export interface ReenableDatabaseInstanceRequest {
	}

	/** The request sent to the ReenableDatabaseInstance method. */
	export interface ReenableDatabaseInstanceRequestFormProperties {
	}
	export function CreateReenableDatabaseInstanceRequestFormGroup() {
		return new FormGroup<ReenableDatabaseInstanceRequestFormProperties>({
		});

	}


	/** The request sent to UndeleteDatabaseInstance method. */
	export interface UndeleteDatabaseInstanceRequest {
	}

	/** The request sent to UndeleteDatabaseInstance method. */
	export interface UndeleteDatabaseInstanceRequestFormProperties {
	}
	export function CreateUndeleteDatabaseInstanceRequestFormGroup() {
		return new FormGroup<UndeleteDatabaseInstanceRequestFormProperties>({
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Marks a DatabaseInstance to be deleted. The DatabaseInstance will be set to the DELETED state for 20 days, and will be purged within 30 days. The default database cannot be deleted. IDs for deleted database instances may never be recovered or re-used. The Database may only be deleted if it is already in a DISABLED state.
		 * Delete v1beta/{name}
		 * @param {string} name Required. The fully qualified resource name of the database instance, in the form: `projects/{project-number}/locations/{location-id}/instances/{database-id}`
		 * @return {DatabaseInstance} Successful response
		 */
		Firebasedatabase_projects_locations_instances_delete(name: string): Observable<DatabaseInstance> {
			return this.http.delete<DatabaseInstance>(this.baseUri + 'v1beta/' + (name == null ? '' : encodeURIComponent(name)), {});
		}

		/**
		 * Gets the DatabaseInstance identified by the specified resource name.
		 * Get v1beta/{name}
		 * @param {string} name Required. The fully qualified resource name of the database instance, in the form: `projects/{project-number}/locations/{location-id}/instances/{database-id}`. `database-id` is a globally unique identifier across all parent collections. For convenience, this method allows you to supply `-` as a wildcard character in place of specific collections under `projects` and `locations`. The resulting wildcarding form of the method is: `projects/-/locations/-/instances/{database-id}`.
		 * @return {DatabaseInstance} Successful response
		 */
		Firebasedatabase_projects_locations_instances_get(name: string): Observable<DatabaseInstance> {
			return this.http.get<DatabaseInstance>(this.baseUri + 'v1beta/' + (name == null ? '' : encodeURIComponent(name)), {});
		}

		/**
		 * Disables a DatabaseInstance. The database can be re-enabled later using ReenableDatabaseInstance. When a database is disabled, all reads and writes are denied, including view access in the Firebase console.
		 * Post v1beta/{name}:disable
		 * @param {string} name Required. The fully qualified resource name of the database instance, in the form: `projects/{project-number}/locations/{location-id}/instances/{database-id}`
		 * @return {DatabaseInstance} Successful response
		 */
		Firebasedatabase_projects_locations_instances_disable(name: string, requestBody: DisableDatabaseInstanceRequest): Observable<DatabaseInstance> {
			return this.http.post<DatabaseInstance>(this.baseUri + 'v1beta/' + (name == null ? '' : encodeURIComponent(name)) + ':disable', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Enables a DatabaseInstance. The database must have been disabled previously using DisableDatabaseInstance. The state of a successfully reenabled DatabaseInstance is ACTIVE.
		 * Post v1beta/{name}:reenable
		 * @param {string} name Required. The fully qualified resource name of the database instance, in the form: `projects/{project-number}/locations/{location-id}/instances/{database-id}`
		 * @return {DatabaseInstance} Successful response
		 */
		Firebasedatabase_projects_locations_instances_reenable(name: string, requestBody: ReenableDatabaseInstanceRequest): Observable<DatabaseInstance> {
			return this.http.post<DatabaseInstance>(this.baseUri + 'v1beta/' + (name == null ? '' : encodeURIComponent(name)) + ':reenable', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Restores a DatabaseInstance that was previously marked to be deleted. After the delete method is used, DatabaseInstances are set to the DELETED state for 20 days, and will be purged within 30 days. Databases in the DELETED state can be undeleted without losing any data. This method may only be used on a DatabaseInstance in the DELETED state. Purged DatabaseInstances may not be recovered.
		 * Post v1beta/{name}:undelete
		 * @param {string} name Required. The fully qualified resource name of the database instance, in the form: `projects/{project-number}/locations/{location-id}/instances/{database-id}`
		 * @return {DatabaseInstance} Successful response
		 */
		Firebasedatabase_projects_locations_instances_undelete(name: string, requestBody: UndeleteDatabaseInstanceRequest): Observable<DatabaseInstance> {
			return this.http.post<DatabaseInstance>(this.baseUri + 'v1beta/' + (name == null ? '' : encodeURIComponent(name)) + ':undelete', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists each DatabaseInstance associated with the specified parent project. The list items are returned in no particular order, but will be a consistent view of the database instances when additional requests are made with a `pageToken`. The resulting list contains instances in any STATE. The list results may be stale by a few seconds. Use GetDatabaseInstance for consistent reads.
		 * Get v1beta/{parent}/instances
		 * @param {string} parent Required. The parent project for which to list database instances, in the form: `projects/{project-number}/locations/{location-id}` To list across all locations, use a parent in the form: `projects/{project-number}/locations/-`
		 * @param {number} pageSize The maximum number of database instances to return in the response. The server may return fewer than this at its discretion. If no value is specified (or too large a value is specified), then the server will impose its own limit.
		 * @param {string} pageToken Token returned from a previous call to `ListDatabaseInstances` indicating where in the set of database instances to resume listing.
		 * @param {boolean} showDeleted Indicate that DatabaseInstances in the `DELETED` state should also be returned.
		 * @return {ListDatabaseInstancesResponse} Successful response
		 */
		Firebasedatabase_projects_locations_instances_list(parent: string, pageSize: number | null | undefined, pageToken: string | null | undefined, showDeleted: boolean | null | undefined): Observable<ListDatabaseInstancesResponse> {
			return this.http.get<ListDatabaseInstancesResponse>(this.baseUri + 'v1beta/' + (parent == null ? '' : encodeURIComponent(parent)) + '/instances&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '&showDeleted=' + showDeleted, {});
		}

		/**
		 * Requests that a new DatabaseInstance be created. The state of a successfully created DatabaseInstance is ACTIVE. Only available for projects on the Blaze plan. Projects can be upgraded using the Cloud Billing API https://cloud.google.com/billing/reference/rest/v1/projects/updateBillingInfo. Note that it might take a few minutes for billing enablement state to propagate to Firebase systems.
		 * Post v1beta/{parent}/instances
		 * @param {string} parent Required. The parent project for which to create a database instance, in the form: `projects/{project-number}/locations/{location-id}`.
		 * @param {string} databaseId The globally unique identifier of the database instance.
		 * @param {boolean} validateOnly When set to true, the request will be validated but not submitted.
		 * @return {DatabaseInstance} Successful response
		 */
		Firebasedatabase_projects_locations_instances_create(parent: string, databaseId: string | null | undefined, validateOnly: boolean | null | undefined, requestBody: DatabaseInstance): Observable<DatabaseInstance> {
			return this.http.post<DatabaseInstance>(this.baseUri + 'v1beta/' + (parent == null ? '' : encodeURIComponent(parent)) + '/instances&databaseId=' + (databaseId == null ? '' : encodeURIComponent(databaseId)) + '&validateOnly=' + validateOnly, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

}

