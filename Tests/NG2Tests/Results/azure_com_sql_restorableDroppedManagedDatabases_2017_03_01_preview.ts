import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** ARM resource. */
	export interface Resource {

		/** Resource ID. */
		id?: string | null;

		/** Resource name. */
		name?: string | null;

		/** Resource type. */
		type?: string | null;
	}

	/** ARM resource. */
	export interface ResourceFormProperties {

		/** Resource ID. */
		id: FormControl<string | null | undefined>,

		/** Resource name. */
		name: FormControl<string | null | undefined>,

		/** Resource type. */
		type: FormControl<string | null | undefined>,
	}
	export function CreateResourceFormGroup() {
		return new FormGroup<ResourceFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A restorable dropped managed database resource. */
	export interface RestorableDroppedManagedDatabase {

		/** The restorable dropped managed database's properties. */
		properties?: RestorableDroppedManagedDatabaseProperties;
	}

	/** A restorable dropped managed database resource. */
	export interface RestorableDroppedManagedDatabaseFormProperties {
	}
	export function CreateRestorableDroppedManagedDatabaseFormGroup() {
		return new FormGroup<RestorableDroppedManagedDatabaseFormProperties>({
		});

	}


	/** The restorable dropped managed database's properties. */
	export interface RestorableDroppedManagedDatabaseProperties {

		/** The creation date of the database (ISO8601 format). */
		creationDate?: Date | null;

		/** The name of the database. */
		databaseName?: string | null;

		/** The deletion date of the database (ISO8601 format). */
		deletionDate?: Date | null;

		/** The earliest restore date of the database (ISO8601 format). */
		earliestRestoreDate?: Date | null;
	}

	/** The restorable dropped managed database's properties. */
	export interface RestorableDroppedManagedDatabasePropertiesFormProperties {

		/** The creation date of the database (ISO8601 format). */
		creationDate: FormControl<Date | null | undefined>,

		/** The name of the database. */
		databaseName: FormControl<string | null | undefined>,

		/** The deletion date of the database (ISO8601 format). */
		deletionDate: FormControl<Date | null | undefined>,

		/** The earliest restore date of the database (ISO8601 format). */
		earliestRestoreDate: FormControl<Date | null | undefined>,
	}
	export function CreateRestorableDroppedManagedDatabasePropertiesFormGroup() {
		return new FormGroup<RestorableDroppedManagedDatabasePropertiesFormProperties>({
			creationDate: new FormControl<Date | null | undefined>(undefined),
			databaseName: new FormControl<string | null | undefined>(undefined),
			deletionDate: new FormControl<Date | null | undefined>(undefined),
			earliestRestoreDate: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/** A list of restorable dropped managed databases. */
	export interface RestorableDroppedManagedDatabaseListResult {

		/** Link to retrieve next page of results. */
		nextLink?: string | null;

		/** Array of results. */
		value?: Array<RestorableDroppedManagedDatabase>;
	}

	/** A list of restorable dropped managed databases. */
	export interface RestorableDroppedManagedDatabaseListResultFormProperties {

		/** Link to retrieve next page of results. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateRestorableDroppedManagedDatabaseListResultFormGroup() {
		return new FormGroup<RestorableDroppedManagedDatabaseListResultFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** ARM tracked top level resource. */
	export interface TrackedResource {

		/**
		 * Resource location.
		 * Required
		 */
		location: string;

		/** Resource tags. */
		tags?: {[id: string]: string };
	}

	/** ARM tracked top level resource. */
	export interface TrackedResourceFormProperties {

		/**
		 * Resource location.
		 * Required
		 */
		location: FormControl<string | null | undefined>,

		/** Resource tags. */
		tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateTrackedResourceFormGroup() {
		return new FormGroup<TrackedResourceFormProperties>({
			location: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Gets a list of restorable dropped managed databases.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/managedInstances/{managedInstanceName}/restorableDroppedDatabases
		 * @param {string} resourceGroupName The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
		 * @param {string} managedInstanceName The name of the managed instance.
		 * @param {string} subscriptionId The subscription ID that identifies an Azure subscription.
		 * @param {string} api_version The API version to use for the request.
		 * @return {RestorableDroppedManagedDatabaseListResult} Successfully retrieved the list of restorable dropped databases.
		 */
		RestorableDroppedManagedDatabases_ListByInstance(resourceGroupName: string, managedInstanceName: string, subscriptionId: string, api_version: string): Observable<RestorableDroppedManagedDatabaseListResult> {
			return this.http.get<RestorableDroppedManagedDatabaseListResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Sql/managedInstances/' + (managedInstanceName == null ? '' : encodeURIComponent(managedInstanceName)) + '/restorableDroppedDatabases&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Gets a restorable dropped managed database.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/managedInstances/{managedInstanceName}/restorableDroppedDatabases/{restorableDroppedDatabaseId}
		 * @param {string} resourceGroupName The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
		 * @param {string} managedInstanceName The name of the managed instance.
		 * @param {string} subscriptionId The subscription ID that identifies an Azure subscription.
		 * @param {string} api_version The API version to use for the request.
		 * @return {RestorableDroppedManagedDatabase} Successfully retrieved the specified restorable dropped database.
		 */
		RestorableDroppedManagedDatabases_Get(resourceGroupName: string, managedInstanceName: string, restorableDroppedDatabaseId: string, subscriptionId: string, api_version: string): Observable<RestorableDroppedManagedDatabase> {
			return this.http.get<RestorableDroppedManagedDatabase>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Sql/managedInstances/' + (managedInstanceName == null ? '' : encodeURIComponent(managedInstanceName)) + '/restorableDroppedDatabases/' + (restorableDroppedDatabaseId == null ? '' : encodeURIComponent(restorableDroppedDatabaseId)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}
	}

}

