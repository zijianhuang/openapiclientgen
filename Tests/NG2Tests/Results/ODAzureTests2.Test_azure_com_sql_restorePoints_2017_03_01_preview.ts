import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** Contains the information necessary to perform a create database restore point operation. */
	export interface CreateDatabaseRestorePointDefinition {

		/**
		 * The restore point label to apply
		 * Required
		 */
		restorePointLabel: string;
	}

	/** Contains the information necessary to perform a create database restore point operation. */
	export interface CreateDatabaseRestorePointDefinitionFormProperties {

		/**
		 * The restore point label to apply
		 * Required
		 */
		restorePointLabel: FormControl<string | null | undefined>,
	}
	export function CreateCreateDatabaseRestorePointDefinitionFormGroup() {
		return new FormGroup<CreateDatabaseRestorePointDefinitionFormProperties>({
			restorePointLabel: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Database restore points. */
	export interface RestorePoint {

		/** Resource location. */
		location?: string | null;

		/** Properties of a database restore point */
		properties?: RestorePointProperties;
	}

	/** Database restore points. */
	export interface RestorePointFormProperties {

		/** Resource location. */
		location: FormControl<string | null | undefined>,
	}
	export function CreateRestorePointFormGroup() {
		return new FormGroup<RestorePointFormProperties>({
			location: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Properties of a database restore point */
	export interface RestorePointProperties {

		/** The earliest time to which this database can be restored */
		earliestRestoreDate?: Date | null;

		/** The time the backup was taken */
		restorePointCreationDate?: Date | null;

		/** The label of restore point for backup request by user */
		restorePointLabel?: string | null;

		/** The type of restore point */
		restorePointType?: RestorePointPropertiesRestorePointType | null;
	}

	/** Properties of a database restore point */
	export interface RestorePointPropertiesFormProperties {

		/** The earliest time to which this database can be restored */
		earliestRestoreDate: FormControl<Date | null | undefined>,

		/** The time the backup was taken */
		restorePointCreationDate: FormControl<Date | null | undefined>,

		/** The label of restore point for backup request by user */
		restorePointLabel: FormControl<string | null | undefined>,

		/** The type of restore point */
		restorePointType: FormControl<RestorePointPropertiesRestorePointType | null | undefined>,
	}
	export function CreateRestorePointPropertiesFormGroup() {
		return new FormGroup<RestorePointPropertiesFormProperties>({
			earliestRestoreDate: new FormControl<Date | null | undefined>(undefined),
			restorePointCreationDate: new FormControl<Date | null | undefined>(undefined),
			restorePointLabel: new FormControl<string | null | undefined>(undefined),
			restorePointType: new FormControl<RestorePointPropertiesRestorePointType | null | undefined>(undefined),
		});

	}

	export enum RestorePointPropertiesRestorePointType { CONTINUOUS = 0, DISCRETE = 1 }


	/** A list of long term retention backups. */
	export interface RestorePointListResult {

		/** Link to retrieve next page of results. */
		nextLink?: string | null;

		/** Array of results. */
		value?: Array<RestorePoint>;
	}

	/** A list of long term retention backups. */
	export interface RestorePointListResultFormProperties {

		/** Link to retrieve next page of results. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateRestorePointListResultFormGroup() {
		return new FormGroup<RestorePointListResultFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Gets a list of database restore points.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/databases/{databaseName}/restorePoints
		 * @param {string} resourceGroupName The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
		 * @param {string} serverName The name of the server.
		 * @param {string} databaseName The name of the database.
		 * @param {string} subscriptionId The subscription ID that identifies an Azure subscription.
		 * @param {string} api_version The API version to use for the request.
		 * @return {RestorePointListResult} Successfully returned restore points.
		 */
		RestorePoints_ListByDatabase(resourceGroupName: string, serverName: string, databaseName: string, subscriptionId: string, api_version: string): Observable<RestorePointListResult> {
			return this.http.get<RestorePointListResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Sql/servers/' + (serverName == null ? '' : encodeURIComponent(serverName)) + '/databases/' + (databaseName == null ? '' : encodeURIComponent(databaseName)) + '/restorePoints&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Creates a restore point for a data warehouse.
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/databases/{databaseName}/restorePoints
		 * @param {string} resourceGroupName The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
		 * @param {string} serverName The name of the server.
		 * @param {string} databaseName The name of the database.
		 * @param {string} subscriptionId The subscription ID that identifies an Azure subscription.
		 * @param {string} api_version The API version to use for the request.
		 * @param {CreateDatabaseRestorePointDefinition} requestBody The definition for creating the restore point of this database.
		 * @return {RestorePoint} Successfully created the restore point request.
		 */
		RestorePoints_Create(resourceGroupName: string, serverName: string, databaseName: string, subscriptionId: string, api_version: string, requestBody: CreateDatabaseRestorePointDefinition): Observable<RestorePoint> {
			return this.http.post<RestorePoint>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Sql/servers/' + (serverName == null ? '' : encodeURIComponent(serverName)) + '/databases/' + (databaseName == null ? '' : encodeURIComponent(databaseName)) + '/restorePoints&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets a restore point.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/databases/{databaseName}/restorePoints/{restorePointName}
		 * @param {string} resourceGroupName The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
		 * @param {string} serverName The name of the server.
		 * @param {string} databaseName The name of the database.
		 * @param {string} restorePointName The name of the restore point.
		 * @param {string} subscriptionId The subscription ID that identifies an Azure subscription.
		 * @param {string} api_version The API version to use for the request.
		 * @return {RestorePoint} Successfully returned the restore point.
		 */
		RestorePoints_Get(resourceGroupName: string, serverName: string, databaseName: string, restorePointName: string, subscriptionId: string, api_version: string): Observable<RestorePoint> {
			return this.http.get<RestorePoint>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Sql/servers/' + (serverName == null ? '' : encodeURIComponent(serverName)) + '/databases/' + (databaseName == null ? '' : encodeURIComponent(databaseName)) + '/restorePoints/' + (restorePointName == null ? '' : encodeURIComponent(restorePointName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Deletes a restore point.
		 * Delete subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/databases/{databaseName}/restorePoints/{restorePointName}
		 * @param {string} resourceGroupName The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
		 * @param {string} serverName The name of the server.
		 * @param {string} databaseName The name of the database.
		 * @param {string} restorePointName The name of the restore point.
		 * @param {string} subscriptionId The subscription ID that identifies an Azure subscription.
		 * @param {string} api_version The API version to use for the request.
		 * @return {void} Successfully deleted the restore point.
		 */
		RestorePoints_Delete(resourceGroupName: string, serverName: string, databaseName: string, restorePointName: string, subscriptionId: string, api_version: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Sql/servers/' + (serverName == null ? '' : encodeURIComponent(serverName)) + '/databases/' + (databaseName == null ? '' : encodeURIComponent(databaseName)) + '/restorePoints/' + (restorePointName == null ? '' : encodeURIComponent(restorePointName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { observe: 'response', responseType: 'text' });
		}
	}

}

