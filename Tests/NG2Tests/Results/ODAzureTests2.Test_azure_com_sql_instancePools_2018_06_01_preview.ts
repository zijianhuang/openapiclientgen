import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** An Azure SQL instance pool. */
	export interface InstancePool {

		/** Properties of an instance pool. */
		properties?: InstancePoolProperties;

		/** An ARM Resource SKU. */
		sku?: InstancePoolSku;
	}

	/** An Azure SQL instance pool. */
	export interface InstancePoolFormProperties {
	}
	export function CreateInstancePoolFormGroup() {
		return new FormGroup<InstancePoolFormProperties>({
		});

	}


	/** Properties of an instance pool. */
	export interface InstancePoolProperties {

		/**
		 * The license type. Possible values are 'LicenseIncluded' (price for SQL license is included) and 'BasePrice' (without SQL license price).
		 * Required
		 */
		licenseType: InstancePoolPropertiesLicenseType;

		/**
		 * Resource ID of the subnet to place this instance pool in.
		 * Required
		 */
		subnetId: string;

		/**
		 * Count of vCores belonging to this instance pool.
		 * Required
		 */
		vCores: number;
	}

	/** Properties of an instance pool. */
	export interface InstancePoolPropertiesFormProperties {

		/**
		 * The license type. Possible values are 'LicenseIncluded' (price for SQL license is included) and 'BasePrice' (without SQL license price).
		 * Required
		 */
		licenseType: FormControl<InstancePoolPropertiesLicenseType | null | undefined>,

		/**
		 * Resource ID of the subnet to place this instance pool in.
		 * Required
		 */
		subnetId: FormControl<string | null | undefined>,

		/**
		 * Count of vCores belonging to this instance pool.
		 * Required
		 */
		vCores: FormControl<number | null | undefined>,
	}
	export function CreateInstancePoolPropertiesFormGroup() {
		return new FormGroup<InstancePoolPropertiesFormProperties>({
			licenseType: new FormControl<InstancePoolPropertiesLicenseType | null | undefined>(undefined, [Validators.required]),
			subnetId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			vCores: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum InstancePoolPropertiesLicenseType { LicenseIncluded = 0, BasePrice = 1 }

	export interface InstancePoolSku {

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
	export interface InstancePoolSkuFormProperties {

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
	export function CreateInstancePoolSkuFormGroup() {
		return new FormGroup<InstancePoolSkuFormProperties>({
			capacity: new FormControl<number | null | undefined>(undefined),
			family: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			size: new FormControl<string | null | undefined>(undefined),
			tier: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A list of Azure SQL instance pools. */
	export interface InstancePoolListResult {

		/** Link to retrieve next page of results. */
		nextLink?: string | null;

		/** Array of results. */
		value?: Array<InstancePool>;
	}

	/** A list of Azure SQL instance pools. */
	export interface InstancePoolListResultFormProperties {

		/** Link to retrieve next page of results. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateInstancePoolListResultFormGroup() {
		return new FormGroup<InstancePoolListResultFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An update to an Instance pool. */
	export interface InstancePoolUpdate {

		/** Resource tags. */
		tags?: {[id: string]: string };
	}

	/** An update to an Instance pool. */
	export interface InstancePoolUpdateFormProperties {

		/** Resource tags. */
		tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateInstancePoolUpdateFormGroup() {
		return new FormGroup<InstancePoolUpdateFormProperties>({
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Gets a list of all instance pools in the subscription.
		 * Get subscriptions/{subscriptionId}/providers/Microsoft.Sql/instancePools
		 * @param {string} subscriptionId The subscription ID that identifies an Azure subscription.
		 * @param {string} api_version The API version to use for the request.
		 * @return {InstancePoolListResult} Successfully retrieved the list of instance pools in a subscription.
		 */
		InstancePools_List(subscriptionId: string, api_version: string): Observable<InstancePoolListResult> {
			return this.http.get<InstancePoolListResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/providers/Microsoft.Sql/instancePools&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Gets a list of instance pools in the resource group
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/instancePools
		 * @param {string} resourceGroupName The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
		 * @param {string} subscriptionId The subscription ID that identifies an Azure subscription.
		 * @param {string} api_version The API version to use for the request.
		 * @return {InstancePoolListResult} Successfully retrieved the list of instance pools.
		 */
		InstancePools_ListByResourceGroup(resourceGroupName: string, subscriptionId: string, api_version: string): Observable<InstancePoolListResult> {
			return this.http.get<InstancePoolListResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Sql/instancePools&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Gets an instance pool.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/instancePools/{instancePoolName}
		 * @param {string} resourceGroupName The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
		 * @param {string} instancePoolName The name of the instance pool to be retrieved.
		 * @param {string} subscriptionId The subscription ID that identifies an Azure subscription.
		 * @param {string} api_version The API version to use for the request.
		 * @return {InstancePool} Successfully retrieved the specified instance pool.
		 */
		InstancePools_Get(resourceGroupName: string, instancePoolName: string, subscriptionId: string, api_version: string): Observable<InstancePool> {
			return this.http.get<InstancePool>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Sql/instancePools/' + (instancePoolName == null ? '' : encodeURIComponent(instancePoolName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Creates or updates an instance pool.
		 * Put subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/instancePools/{instancePoolName}
		 * @param {string} resourceGroupName The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
		 * @param {string} instancePoolName The name of the instance pool to be created or updated.
		 * @param {string} subscriptionId The subscription ID that identifies an Azure subscription.
		 * @param {string} api_version The API version to use for the request.
		 * @param {InstancePool} requestBody The requested instance pool resource state.
		 * @return {InstancePool} Successfully updated the instance pool.
		 */
		InstancePools_CreateOrUpdate(resourceGroupName: string, instancePoolName: string, subscriptionId: string, api_version: string, requestBody: InstancePool): Observable<InstancePool> {
			return this.http.put<InstancePool>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Sql/instancePools/' + (instancePoolName == null ? '' : encodeURIComponent(instancePoolName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes an instance pool
		 * Delete subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/instancePools/{instancePoolName}
		 * @param {string} resourceGroupName The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
		 * @param {string} instancePoolName The name of the instance pool to be deleted
		 * @param {string} subscriptionId The subscription ID that identifies an Azure subscription.
		 * @param {string} api_version The API version to use for the request.
		 * @return {void} Successfully deleted the instance pool.
		 */
		InstancePools_Delete(resourceGroupName: string, instancePoolName: string, subscriptionId: string, api_version: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Sql/instancePools/' + (instancePoolName == null ? '' : encodeURIComponent(instancePoolName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Updates an instance pool.
		 * Patch subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/instancePools/{instancePoolName}
		 * @param {string} resourceGroupName The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
		 * @param {string} instancePoolName The name of the instance pool to be updated.
		 * @param {string} subscriptionId The subscription ID that identifies an Azure subscription.
		 * @param {string} api_version The API version to use for the request.
		 * @param {InstancePoolUpdate} requestBody The requested instance pool resource state.
		 * @return {InstancePool} Successfully updated the instance pool.
		 */
		InstancePools_Update(resourceGroupName: string, instancePoolName: string, subscriptionId: string, api_version: string, requestBody: InstancePoolUpdate): Observable<InstancePool> {
			return this.http.patch<InstancePool>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Sql/instancePools/' + (instancePoolName == null ? '' : encodeURIComponent(instancePoolName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

}

