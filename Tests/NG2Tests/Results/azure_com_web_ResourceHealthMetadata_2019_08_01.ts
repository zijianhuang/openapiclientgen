import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** Used for getting ResourceHealthCheck settings. */
	export interface ResourceHealthMetadata {

		/** ResourceHealthMetadata resource specific properties */
		properties?: any;
	}

	/** Used for getting ResourceHealthCheck settings. */
	export interface ResourceHealthMetadataFormProperties {

		/** ResourceHealthMetadata resource specific properties */
		properties: FormControl<any | null | undefined>,
	}
	export function CreateResourceHealthMetadataFormGroup() {
		return new FormGroup<ResourceHealthMetadataFormProperties>({
			properties: new FormControl<any | null | undefined>(undefined),
		});

	}


	/** Collection of resource health metadata. */
	export interface ResourceHealthMetadataCollection {

		/** Link to next page of resources. */
		nextLink?: string | null;

		/**
		 * Collection of resources.
		 * Required
		 */
		value: Array<ResourceHealthMetadata>;
	}

	/** Collection of resource health metadata. */
	export interface ResourceHealthMetadataCollectionFormProperties {

		/** Link to next page of resources. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateResourceHealthMetadataCollectionFormGroup() {
		return new FormGroup<ResourceHealthMetadataCollectionFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * List all ResourceHealthMetadata for all sites in the subscription.
		 * Description for List all ResourceHealthMetadata for all sites in the subscription.
		 * Get subscriptions/{subscriptionId}/providers/Microsoft.Web/resourceHealthMetadata
		 * @param {string} subscriptionId Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
		 * @param {string} api_version API Version
		 * @return {ResourceHealthMetadataCollection} OK
		 */
		ResourceHealthMetadata_List(subscriptionId: string, api_version: string): Observable<ResourceHealthMetadataCollection> {
			return this.http.get<ResourceHealthMetadataCollection>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/providers/Microsoft.Web/resourceHealthMetadata&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * List all ResourceHealthMetadata for all sites in the resource group in the subscription.
		 * Description for List all ResourceHealthMetadata for all sites in the resource group in the subscription.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/resourceHealthMetadata
		 * @param {string} resourceGroupName Name of the resource group to which the resource belongs.
		 *     Min length: 1    Max length: 90
		 * @param {string} subscriptionId Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
		 * @param {string} api_version API Version
		 * @return {ResourceHealthMetadataCollection} OK
		 */
		ResourceHealthMetadata_ListByResourceGroup(resourceGroupName: string, subscriptionId: string, api_version: string): Observable<ResourceHealthMetadataCollection> {
			return this.http.get<ResourceHealthMetadataCollection>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Web/resourceHealthMetadata&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Gets the category of ResourceHealthMetadata to use for the given site as a collection
		 * Description for Gets the category of ResourceHealthMetadata to use for the given site as a collection
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/resourceHealthMetadata
		 * @param {string} resourceGroupName Name of the resource group to which the resource belongs.
		 *     Min length: 1    Max length: 90
		 * @param {string} name Name of web app.
		 * @param {string} subscriptionId Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
		 * @param {string} api_version API Version
		 * @return {ResourceHealthMetadataCollection} OK
		 */
		ResourceHealthMetadata_ListBySite(resourceGroupName: string, name: string, subscriptionId: string, api_version: string): Observable<ResourceHealthMetadataCollection> {
			return this.http.get<ResourceHealthMetadataCollection>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Web/sites/' + (name == null ? '' : encodeURIComponent(name)) + '/resourceHealthMetadata&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Gets the category of ResourceHealthMetadata to use for the given site
		 * Description for Gets the category of ResourceHealthMetadata to use for the given site
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/resourceHealthMetadata/default
		 * @param {string} resourceGroupName Name of the resource group to which the resource belongs.
		 *     Min length: 1    Max length: 90
		 * @param {string} name Name of web app
		 * @param {string} subscriptionId Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
		 * @param {string} api_version API Version
		 * @return {ResourceHealthMetadata} OK
		 */
		ResourceHealthMetadata_GetBySite(resourceGroupName: string, name: string, subscriptionId: string, api_version: string): Observable<ResourceHealthMetadata> {
			return this.http.get<ResourceHealthMetadata>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Web/sites/' + (name == null ? '' : encodeURIComponent(name)) + '/resourceHealthMetadata/default&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Gets the category of ResourceHealthMetadata to use for the given site as a collection
		 * Description for Gets the category of ResourceHealthMetadata to use for the given site as a collection
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/slots/{slot}/resourceHealthMetadata
		 * @param {string} resourceGroupName Name of the resource group to which the resource belongs.
		 *     Min length: 1    Max length: 90
		 * @param {string} name Name of web app.
		 * @param {string} slot Name of web app slot. If not specified then will default to production slot.
		 * @param {string} subscriptionId Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
		 * @param {string} api_version API Version
		 * @return {ResourceHealthMetadataCollection} OK
		 */
		ResourceHealthMetadata_ListBySiteSlot(resourceGroupName: string, name: string, slot: string, subscriptionId: string, api_version: string): Observable<ResourceHealthMetadataCollection> {
			return this.http.get<ResourceHealthMetadataCollection>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Web/sites/' + (name == null ? '' : encodeURIComponent(name)) + '/slots/' + (slot == null ? '' : encodeURIComponent(slot)) + '/resourceHealthMetadata&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Gets the category of ResourceHealthMetadata to use for the given site
		 * Description for Gets the category of ResourceHealthMetadata to use for the given site
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/slots/{slot}/resourceHealthMetadata/default
		 * @param {string} resourceGroupName Name of the resource group to which the resource belongs.
		 *     Min length: 1    Max length: 90
		 * @param {string} name Name of web app
		 * @param {string} slot Name of web app slot. If not specified then will default to production slot.
		 * @param {string} subscriptionId Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
		 * @param {string} api_version API Version
		 * @return {ResourceHealthMetadata} OK
		 */
		ResourceHealthMetadata_GetBySiteSlot(resourceGroupName: string, name: string, slot: string, subscriptionId: string, api_version: string): Observable<ResourceHealthMetadata> {
			return this.http.get<ResourceHealthMetadata>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Web/sites/' + (name == null ? '' : encodeURIComponent(name)) + '/slots/' + (slot == null ? '' : encodeURIComponent(slot)) + '/resourceHealthMetadata/default&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}
	}

}

