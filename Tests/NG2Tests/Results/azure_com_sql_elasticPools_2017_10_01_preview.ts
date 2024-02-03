import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** An elastic pool. */
	export interface ElasticPool {

		/** Kind of elastic pool. This is metadata used for the Azure portal experience. */
		kind?: string | null;

		/** Properties of an elastic pool */
		properties?: ElasticPoolProperties;

		/** An ARM Resource SKU. */
		sku?: ElasticPoolSku;
	}

	/** An elastic pool. */
	export interface ElasticPoolFormProperties {

		/** Kind of elastic pool. This is metadata used for the Azure portal experience. */
		kind: FormControl<string | null | undefined>,
	}
	export function CreateElasticPoolFormGroup() {
		return new FormGroup<ElasticPoolFormProperties>({
			kind: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Properties of an elastic pool */
	export interface ElasticPoolProperties {

		/** The creation date of the elastic pool (ISO8601 format). */
		creationDate?: Date | null;

		/** The license type to apply for this elastic pool. */
		licenseType?: ElasticPoolPropertiesLicenseType | null;

		/** The storage limit for the database elastic pool in bytes. */
		maxSizeBytes?: number | null;

		/** Per database settings of an elastic pool. */
		perDatabaseSettings?: ElasticPoolPerDatabaseSettings;

		/** The state of the elastic pool. */
		state?: ElasticPoolPropertiesState | null;

		/** Whether or not this elastic pool is zone redundant, which means the replicas of this elastic pool will be spread across multiple availability zones. */
		zoneRedundant?: boolean | null;
	}

	/** Properties of an elastic pool */
	export interface ElasticPoolPropertiesFormProperties {

		/** The creation date of the elastic pool (ISO8601 format). */
		creationDate: FormControl<Date | null | undefined>,

		/** The license type to apply for this elastic pool. */
		licenseType: FormControl<ElasticPoolPropertiesLicenseType | null | undefined>,

		/** The storage limit for the database elastic pool in bytes. */
		maxSizeBytes: FormControl<number | null | undefined>,

		/** The state of the elastic pool. */
		state: FormControl<ElasticPoolPropertiesState | null | undefined>,

		/** Whether or not this elastic pool is zone redundant, which means the replicas of this elastic pool will be spread across multiple availability zones. */
		zoneRedundant: FormControl<boolean | null | undefined>,
	}
	export function CreateElasticPoolPropertiesFormGroup() {
		return new FormGroup<ElasticPoolPropertiesFormProperties>({
			creationDate: new FormControl<Date | null | undefined>(undefined),
			licenseType: new FormControl<ElasticPoolPropertiesLicenseType | null | undefined>(undefined),
			maxSizeBytes: new FormControl<number | null | undefined>(undefined),
			state: new FormControl<ElasticPoolPropertiesState | null | undefined>(undefined),
			zoneRedundant: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export enum ElasticPoolPropertiesLicenseType { LicenseIncluded = 'LicenseIncluded', BasePrice = 'BasePrice' }


	/** Per database settings of an elastic pool. */
	export interface ElasticPoolPerDatabaseSettings {

		/** The maximum capacity any one database can consume. */
		maxCapacity?: number | null;

		/** The minimum capacity all databases are guaranteed. */
		minCapacity?: number | null;
	}

	/** Per database settings of an elastic pool. */
	export interface ElasticPoolPerDatabaseSettingsFormProperties {

		/** The maximum capacity any one database can consume. */
		maxCapacity: FormControl<number | null | undefined>,

		/** The minimum capacity all databases are guaranteed. */
		minCapacity: FormControl<number | null | undefined>,
	}
	export function CreateElasticPoolPerDatabaseSettingsFormGroup() {
		return new FormGroup<ElasticPoolPerDatabaseSettingsFormProperties>({
			maxCapacity: new FormControl<number | null | undefined>(undefined),
			minCapacity: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum ElasticPoolPropertiesState { Creating = 'Creating', Ready = 'Ready', Disabled = 'Disabled' }

	export interface ElasticPoolSku {

		/** Capacity of the particular SKU. */
		capacity?: number | null;

		/** If the service has different generations of hardware, for the same SKU, then that can be captured here. */
		family?: string | null;

		/**
		 * The name of the SKU, typically, a letter + Number code, e.g. P3.
		 * Required
		 */
		name: string;

		/** Size of the particular SKU */
		size?: string | null;

		/** The tier or edition of the particular SKU, e.g. Basic, Premium. */
		tier?: string | null;
	}
	export interface ElasticPoolSkuFormProperties {

		/** Capacity of the particular SKU. */
		capacity: FormControl<number | null | undefined>,

		/** If the service has different generations of hardware, for the same SKU, then that can be captured here. */
		family: FormControl<string | null | undefined>,

		/**
		 * The name of the SKU, typically, a letter + Number code, e.g. P3.
		 * Required
		 */
		name: FormControl<string | null | undefined>,

		/** Size of the particular SKU */
		size: FormControl<string | null | undefined>,

		/** The tier or edition of the particular SKU, e.g. Basic, Premium. */
		tier: FormControl<string | null | undefined>,
	}
	export function CreateElasticPoolSkuFormGroup() {
		return new FormGroup<ElasticPoolSkuFormProperties>({
			capacity: new FormControl<number | null | undefined>(undefined),
			family: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			size: new FormControl<string | null | undefined>(undefined),
			tier: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The result of an elastic pool list request. */
	export interface ElasticPoolListResult {

		/** Link to retrieve next page of results. */
		nextLink?: string | null;

		/** Array of results. */
		value?: Array<ElasticPool>;
	}

	/** The result of an elastic pool list request. */
	export interface ElasticPoolListResultFormProperties {

		/** Link to retrieve next page of results. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateElasticPoolListResultFormGroup() {
		return new FormGroup<ElasticPoolListResultFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An elastic pool update. */
	export interface ElasticPoolUpdate {

		/** Properties of an elastic pool */
		properties?: ElasticPoolUpdateProperties;

		/** An ARM Resource SKU. */
		sku?: ElasticPoolUpdateSku;

		/** Resource tags. */
		tags?: {[id: string]: string };
	}

	/** An elastic pool update. */
	export interface ElasticPoolUpdateFormProperties {

		/** Resource tags. */
		tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateElasticPoolUpdateFormGroup() {
		return new FormGroup<ElasticPoolUpdateFormProperties>({
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}


	/** Properties of an elastic pool */
	export interface ElasticPoolUpdateProperties {

		/** The license type to apply for this elastic pool. */
		licenseType?: ElasticPoolPropertiesLicenseType | null;

		/** The storage limit for the database elastic pool in bytes. */
		maxSizeBytes?: number | null;

		/** Per database settings of an elastic pool. */
		perDatabaseSettings?: ElasticPoolPerDatabaseSettings;

		/** Whether or not this elastic pool is zone redundant, which means the replicas of this elastic pool will be spread across multiple availability zones. */
		zoneRedundant?: boolean | null;
	}

	/** Properties of an elastic pool */
	export interface ElasticPoolUpdatePropertiesFormProperties {

		/** The license type to apply for this elastic pool. */
		licenseType: FormControl<ElasticPoolPropertiesLicenseType | null | undefined>,

		/** The storage limit for the database elastic pool in bytes. */
		maxSizeBytes: FormControl<number | null | undefined>,

		/** Whether or not this elastic pool is zone redundant, which means the replicas of this elastic pool will be spread across multiple availability zones. */
		zoneRedundant: FormControl<boolean | null | undefined>,
	}
	export function CreateElasticPoolUpdatePropertiesFormGroup() {
		return new FormGroup<ElasticPoolUpdatePropertiesFormProperties>({
			licenseType: new FormControl<ElasticPoolPropertiesLicenseType | null | undefined>(undefined),
			maxSizeBytes: new FormControl<number | null | undefined>(undefined),
			zoneRedundant: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface ElasticPoolUpdateSku {

		/** Capacity of the particular SKU. */
		capacity?: number | null;

		/** If the service has different generations of hardware, for the same SKU, then that can be captured here. */
		family?: string | null;

		/**
		 * The name of the SKU, typically, a letter + Number code, e.g. P3.
		 * Required
		 */
		name: string;

		/** Size of the particular SKU */
		size?: string | null;

		/** The tier or edition of the particular SKU, e.g. Basic, Premium. */
		tier?: string | null;
	}
	export interface ElasticPoolUpdateSkuFormProperties {

		/** Capacity of the particular SKU. */
		capacity: FormControl<number | null | undefined>,

		/** If the service has different generations of hardware, for the same SKU, then that can be captured here. */
		family: FormControl<string | null | undefined>,

		/**
		 * The name of the SKU, typically, a letter + Number code, e.g. P3.
		 * Required
		 */
		name: FormControl<string | null | undefined>,

		/** Size of the particular SKU */
		size: FormControl<string | null | undefined>,

		/** The tier or edition of the particular SKU, e.g. Basic, Premium. */
		tier: FormControl<string | null | undefined>,
	}
	export function CreateElasticPoolUpdateSkuFormGroup() {
		return new FormGroup<ElasticPoolUpdateSkuFormProperties>({
			capacity: new FormControl<number | null | undefined>(undefined),
			family: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			size: new FormControl<string | null | undefined>(undefined),
			tier: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Gets all elastic pools in a server.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/elasticPools
		 * @param {string} resourceGroupName The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
		 * @param {string} serverName The name of the server.
		 * @param {number} skip The number of elements in the collection to skip.
		 * @param {string} subscriptionId The subscription ID that identifies an Azure subscription.
		 * @param {string} api_version The API version to use for the request.
		 * @return {ElasticPoolListResult} Succeeded
		 */
		ElasticPools_ListByServer(resourceGroupName: string, serverName: string, skip: number | null | undefined, subscriptionId: string, api_version: string): Observable<ElasticPoolListResult> {
			return this.http.get<ElasticPoolListResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Sql/servers/' + (serverName == null ? '' : encodeURIComponent(serverName)) + '/elasticPools&skip=' + skip + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Gets an elastic pool.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/elasticPools/{elasticPoolName}
		 * @param {string} resourceGroupName The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
		 * @param {string} serverName The name of the server.
		 * @param {string} elasticPoolName The name of the elastic pool.
		 * @param {string} subscriptionId The subscription ID that identifies an Azure subscription.
		 * @param {string} api_version The API version to use for the request.
		 * @return {ElasticPool} Succeeded
		 */
		ElasticPools_Get(resourceGroupName: string, serverName: string, elasticPoolName: string, subscriptionId: string, api_version: string): Observable<ElasticPool> {
			return this.http.get<ElasticPool>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Sql/servers/' + (serverName == null ? '' : encodeURIComponent(serverName)) + '/elasticPools/' + (elasticPoolName == null ? '' : encodeURIComponent(elasticPoolName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Creates or updates an elastic pool.
		 * Put subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/elasticPools/{elasticPoolName}
		 * @param {string} resourceGroupName The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
		 * @param {string} serverName The name of the server.
		 * @param {string} elasticPoolName The name of the elastic pool.
		 * @param {string} subscriptionId The subscription ID that identifies an Azure subscription.
		 * @param {string} api_version The API version to use for the request.
		 * @param {ElasticPool} requestBody The elastic pool parameters.
		 * @return {ElasticPool} Updated the elastic pool
		 */
		ElasticPools_CreateOrUpdate(resourceGroupName: string, serverName: string, elasticPoolName: string, subscriptionId: string, api_version: string, requestBody: ElasticPool): Observable<ElasticPool> {
			return this.http.put<ElasticPool>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Sql/servers/' + (serverName == null ? '' : encodeURIComponent(serverName)) + '/elasticPools/' + (elasticPoolName == null ? '' : encodeURIComponent(elasticPoolName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes an elastic pool.
		 * Delete subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/elasticPools/{elasticPoolName}
		 * @param {string} resourceGroupName The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
		 * @param {string} serverName The name of the server.
		 * @param {string} elasticPoolName The name of the elastic pool.
		 * @param {string} subscriptionId The subscription ID that identifies an Azure subscription.
		 * @param {string} api_version The API version to use for the request.
		 * @return {void} Deleted the elastic pool
		 */
		ElasticPools_Delete(resourceGroupName: string, serverName: string, elasticPoolName: string, subscriptionId: string, api_version: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Sql/servers/' + (serverName == null ? '' : encodeURIComponent(serverName)) + '/elasticPools/' + (elasticPoolName == null ? '' : encodeURIComponent(elasticPoolName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Updates an elastic pool.
		 * Patch subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/elasticPools/{elasticPoolName}
		 * @param {string} resourceGroupName The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
		 * @param {string} serverName The name of the server.
		 * @param {string} elasticPoolName The name of the elastic pool.
		 * @param {string} subscriptionId The subscription ID that identifies an Azure subscription.
		 * @param {string} api_version The API version to use for the request.
		 * @param {ElasticPoolUpdate} requestBody The elastic pool update parameters.
		 * @return {ElasticPool} Updated the elastic pool
		 */
		ElasticPools_Update(resourceGroupName: string, serverName: string, elasticPoolName: string, subscriptionId: string, api_version: string, requestBody: ElasticPoolUpdate): Observable<ElasticPool> {
			return this.http.patch<ElasticPool>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Sql/servers/' + (serverName == null ? '' : encodeURIComponent(serverName)) + '/elasticPools/' + (elasticPoolName == null ? '' : encodeURIComponent(elasticPoolName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

}

