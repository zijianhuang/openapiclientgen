import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface ElasticPool {
	}
	export interface ElasticPoolFormProperties {
	}
	export function CreateElasticPoolFormGroup() {
		return new FormGroup<ElasticPoolFormProperties>({
		});

	}


	/** Represents the response to a list elastic pool request. */
	export interface ElasticPoolListResult {

		/**
		 * The list of elastic pools hosted in the server.
		 * Required
		 */
		value: Array<ElasticPool>;
	}

	/** Represents the response to a list elastic pool request. */
	export interface ElasticPoolListResultFormProperties {
	}
	export function CreateElasticPoolListResultFormGroup() {
		return new FormGroup<ElasticPoolListResultFormProperties>({
		});

	}


	/** Represents the properties of an elastic pool. */
	export interface ElasticPoolProperties {

		/** The creation date of the elastic pool (ISO8601 format). */
		creationDate?: Date | null;

		/**
		 * The maximum DTU any one database can consume.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		databaseDtuMax?: number | null;

		/**
		 * The minimum DTU all databases are guaranteed.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		databaseDtuMin?: number | null;

		/**
		 * The total shared DTU for the database elastic pool.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		dtu?: number | null;

		/** The edition of the elastic pool. */
		edition?: ElasticPoolPropertiesEdition | null;

		/** The state of the elastic pool. */
		state?: ElasticPoolPropertiesState | null;

		/**
		 * Gets storage limit for the database elastic pool in MB.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		storageMB?: number | null;

		/** Whether or not this database elastic pool is zone redundant, which means the replicas of this database will be spread across multiple availability zones. */
		zoneRedundant?: boolean | null;
	}

	/** Represents the properties of an elastic pool. */
	export interface ElasticPoolPropertiesFormProperties {

		/** The creation date of the elastic pool (ISO8601 format). */
		creationDate: FormControl<Date | null | undefined>,

		/**
		 * The maximum DTU any one database can consume.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		databaseDtuMax: FormControl<number | null | undefined>,

		/**
		 * The minimum DTU all databases are guaranteed.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		databaseDtuMin: FormControl<number | null | undefined>,

		/**
		 * The total shared DTU for the database elastic pool.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		dtu: FormControl<number | null | undefined>,

		/** The edition of the elastic pool. */
		edition: FormControl<ElasticPoolPropertiesEdition | null | undefined>,

		/** The state of the elastic pool. */
		state: FormControl<ElasticPoolPropertiesState | null | undefined>,

		/**
		 * Gets storage limit for the database elastic pool in MB.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		storageMB: FormControl<number | null | undefined>,

		/** Whether or not this database elastic pool is zone redundant, which means the replicas of this database will be spread across multiple availability zones. */
		zoneRedundant: FormControl<boolean | null | undefined>,
	}
	export function CreateElasticPoolPropertiesFormGroup() {
		return new FormGroup<ElasticPoolPropertiesFormProperties>({
			creationDate: new FormControl<Date | null | undefined>(undefined),
			databaseDtuMax: new FormControl<number | null | undefined>(undefined),
			databaseDtuMin: new FormControl<number | null | undefined>(undefined),
			dtu: new FormControl<number | null | undefined>(undefined),
			edition: new FormControl<ElasticPoolPropertiesEdition | null | undefined>(undefined),
			state: new FormControl<ElasticPoolPropertiesState | null | undefined>(undefined),
			storageMB: new FormControl<number | null | undefined>(undefined),
			zoneRedundant: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export enum ElasticPoolPropertiesEdition { Basic = 'Basic', Standard = 'Standard', Premium = 'Premium', GeneralPurpose = 'GeneralPurpose', BusinessCritical = 'BusinessCritical' }

	export enum ElasticPoolPropertiesState { Creating = 'Creating', Ready = 'Ready', Disabled = 'Disabled' }

	export interface ElasticPoolUpdate {
	}
	export interface ElasticPoolUpdateFormProperties {
	}
	export function CreateElasticPoolUpdateFormGroup() {
		return new FormGroup<ElasticPoolUpdateFormProperties>({
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Returns a list of elastic pools in a server.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/elasticPools
		 * @param {string} api_version The API version to use for the request.
		 * @param {string} subscriptionId The subscription ID that identifies an Azure subscription.
		 * @param {string} resourceGroupName The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
		 * @param {string} serverName The name of the server.
		 * @return {ElasticPoolListResult} OK
		 */
		ElasticPools_ListByServer(api_version: string, subscriptionId: string, resourceGroupName: string, serverName: string): Observable<ElasticPoolListResult> {
			return this.http.get<ElasticPoolListResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Sql/servers/' + (serverName == null ? '' : encodeURIComponent(serverName)) + '/elasticPools?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Gets an elastic pool.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/elasticPools/{elasticPoolName}
		 * @param {string} api_version The API version to use for the request.
		 * @param {string} subscriptionId The subscription ID that identifies an Azure subscription.
		 * @param {string} resourceGroupName The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
		 * @param {string} serverName The name of the server.
		 * @param {string} elasticPoolName The name of the elastic pool to be retrieved.
		 * @return {ElasticPool} OK
		 */
		ElasticPools_Get(api_version: string, subscriptionId: string, resourceGroupName: string, serverName: string, elasticPoolName: string): Observable<ElasticPool> {
			return this.http.get<ElasticPool>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Sql/servers/' + (serverName == null ? '' : encodeURIComponent(serverName)) + '/elasticPools/' + (elasticPoolName == null ? '' : encodeURIComponent(elasticPoolName)) + '?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Creates a new elastic pool or updates an existing elastic pool.
		 * Put subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/elasticPools/{elasticPoolName}
		 * @param {string} api_version The API version to use for the request.
		 * @param {string} subscriptionId The subscription ID that identifies an Azure subscription.
		 * @param {string} resourceGroupName The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
		 * @param {string} serverName The name of the server.
		 * @param {string} elasticPoolName The name of the elastic pool to be operated on (updated or created).
		 * @param {ElasticPool} requestBody The required parameters for creating or updating an elastic pool.
		 * @return {ElasticPool} OK
		 */
		ElasticPools_CreateOrUpdate(api_version: string, subscriptionId: string, resourceGroupName: string, serverName: string, elasticPoolName: string, requestBody: ElasticPool): Observable<ElasticPool> {
			return this.http.put<ElasticPool>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Sql/servers/' + (serverName == null ? '' : encodeURIComponent(serverName)) + '/elasticPools/' + (elasticPoolName == null ? '' : encodeURIComponent(elasticPoolName)) + '?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes the elastic pool.
		 * Delete subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/elasticPools/{elasticPoolName}
		 * @param {string} api_version The API version to use for the request.
		 * @param {string} subscriptionId The subscription ID that identifies an Azure subscription.
		 * @param {string} resourceGroupName The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
		 * @param {string} serverName The name of the server.
		 * @param {string} elasticPoolName The name of the elastic pool to be deleted.
		 * @return {void} OK
		 */
		ElasticPools_Delete(api_version: string, subscriptionId: string, resourceGroupName: string, serverName: string, elasticPoolName: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Sql/servers/' + (serverName == null ? '' : encodeURIComponent(serverName)) + '/elasticPools/' + (elasticPoolName == null ? '' : encodeURIComponent(elasticPoolName)) + '?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Updates an existing elastic pool.
		 * Patch subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/elasticPools/{elasticPoolName}
		 * @param {string} api_version The API version to use for the request.
		 * @param {string} subscriptionId The subscription ID that identifies an Azure subscription.
		 * @param {string} resourceGroupName The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
		 * @param {string} serverName The name of the server.
		 * @param {string} elasticPoolName The name of the elastic pool to be updated.
		 * @param {ElasticPoolUpdate} requestBody The required parameters for updating an elastic pool.
		 * @return {ElasticPool} OK
		 */
		ElasticPools_Update(api_version: string, subscriptionId: string, resourceGroupName: string, serverName: string, elasticPoolName: string, requestBody: ElasticPoolUpdate): Observable<ElasticPool> {
			return this.http.patch<ElasticPool>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Sql/servers/' + (serverName == null ? '' : encodeURIComponent(serverName)) + '/elasticPools/' + (elasticPoolName == null ? '' : encodeURIComponent(elasticPoolName)) + '?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

}

