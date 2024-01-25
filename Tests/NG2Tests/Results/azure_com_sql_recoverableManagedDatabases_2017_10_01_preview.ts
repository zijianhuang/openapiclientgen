import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** ARM proxy resource. */
	export interface ProxyResource {
	}

	/** ARM proxy resource. */
	export interface ProxyResourceFormProperties {
	}
	export function CreateProxyResourceFormGroup() {
		return new FormGroup<ProxyResourceFormProperties>({
		});

	}


	/** A recoverable managed database resource. */
	export interface RecoverableManagedDatabase {

		/** The recoverable managed database's properties. */
		properties?: RecoverableManagedDatabaseProperties;
	}

	/** A recoverable managed database resource. */
	export interface RecoverableManagedDatabaseFormProperties {
	}
	export function CreateRecoverableManagedDatabaseFormGroup() {
		return new FormGroup<RecoverableManagedDatabaseFormProperties>({
		});

	}


	/** The recoverable managed database's properties. */
	export interface RecoverableManagedDatabaseProperties {

		/** The last available backup date. */
		lastAvailableBackupDate?: string | null;
	}

	/** The recoverable managed database's properties. */
	export interface RecoverableManagedDatabasePropertiesFormProperties {

		/** The last available backup date. */
		lastAvailableBackupDate: FormControl<string | null | undefined>,
	}
	export function CreateRecoverableManagedDatabasePropertiesFormGroup() {
		return new FormGroup<RecoverableManagedDatabasePropertiesFormProperties>({
			lastAvailableBackupDate: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A list of recoverable managed databases. */
	export interface RecoverableManagedDatabaseListResult {

		/** Link to retrieve next page of results. */
		nextLink?: string | null;

		/** Array of results. */
		value?: Array<RecoverableManagedDatabase>;
	}

	/** A list of recoverable managed databases. */
	export interface RecoverableManagedDatabaseListResultFormProperties {

		/** Link to retrieve next page of results. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateRecoverableManagedDatabaseListResultFormGroup() {
		return new FormGroup<RecoverableManagedDatabaseListResultFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


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

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Gets a list of recoverable managed databases.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/managedInstances/{managedInstanceName}/recoverableDatabases
		 * @param {string} resourceGroupName The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
		 * @param {string} managedInstanceName The name of the managed instance.
		 * @param {string} subscriptionId The subscription ID that identifies an Azure subscription.
		 * @param {string} api_version The API version to use for the request.
		 * @return {RecoverableManagedDatabaseListResult} Successfully retrieved the list of recoverable managed databases.
		 */
		RecoverableManagedDatabases_ListByInstance(resourceGroupName: string, managedInstanceName: string, subscriptionId: string, api_version: string): Observable<RecoverableManagedDatabaseListResult> {
			return this.http.get<RecoverableManagedDatabaseListResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Sql/managedInstances/' + (managedInstanceName == null ? '' : encodeURIComponent(managedInstanceName)) + '/recoverableDatabases&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Gets a recoverable managed database.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/managedInstances/{managedInstanceName}/recoverableDatabases/{recoverableDatabaseName}
		 * @param {string} resourceGroupName The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
		 * @param {string} managedInstanceName The name of the managed instance.
		 * @param {string} subscriptionId The subscription ID that identifies an Azure subscription.
		 * @param {string} api_version The API version to use for the request.
		 * @return {RecoverableManagedDatabase} Successfully retrieved the specified recoverable managed database.
		 */
		RecoverableManagedDatabases_Get(resourceGroupName: string, managedInstanceName: string, recoverableDatabaseName: string, subscriptionId: string, api_version: string): Observable<RecoverableManagedDatabase> {
			return this.http.get<RecoverableManagedDatabase>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Sql/managedInstances/' + (managedInstanceName == null ? '' : encodeURIComponent(managedInstanceName)) + '/recoverableDatabases/' + (recoverableDatabaseName == null ? '' : encodeURIComponent(recoverableDatabaseName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}
	}

}

