import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** A private link resource */
	export interface PrivateLinkResource {

		/** Properties of a private link resource. */
		properties?: PrivateLinkResourceProperties;
	}

	/** A private link resource */
	export interface PrivateLinkResourceFormProperties {
	}
	export function CreatePrivateLinkResourceFormGroup() {
		return new FormGroup<PrivateLinkResourceFormProperties>({
		});

	}


	/** Properties of a private link resource. */
	export interface PrivateLinkResourceProperties {

		/** The private link resource group id. */
		groupId?: string | null;

		/** The private link resource required member names. */
		requiredMembers?: Array<string>;
	}

	/** Properties of a private link resource. */
	export interface PrivateLinkResourcePropertiesFormProperties {

		/** The private link resource group id. */
		groupId: FormControl<string | null | undefined>,
	}
	export function CreatePrivateLinkResourcePropertiesFormGroup() {
		return new FormGroup<PrivateLinkResourcePropertiesFormProperties>({
			groupId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A list of private link resources */
	export interface PrivateLinkResourceListResult {

		/** Array of private link resources */
		value?: Array<PrivateLinkResource>;
	}

	/** A list of private link resources */
	export interface PrivateLinkResourceListResultFormProperties {
	}
	export function CreatePrivateLinkResourceListResultFormGroup() {
		return new FormGroup<PrivateLinkResourceListResultFormProperties>({
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Gets the private link resources that need to be created for a Cosmos DB account.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/privateLinkResources
		 * @param {string} subscriptionId Azure subscription ID.
		 * @param {string} resourceGroupName Name of an Azure resource group.
		 *     Min length: 1    Max length: 90
		 * @param {string} api_version Version of the API to be used with the client request. The current version is 2019-08-01.
		 * @param {string} accountName Cosmos DB database account name.
		 *     Min length: 3    Max length: 50
		 * @return {PrivateLinkResourceListResult} Successfully retrieved private link resources.
		 */
		PrivateLinkResources_ListByDatabaseAccount(subscriptionId: string, resourceGroupName: string, api_version: string, accountName: string): Observable<PrivateLinkResourceListResult> {
			return this.http.get<PrivateLinkResourceListResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DocumentDB/databaseAccounts/' + (accountName == null ? '' : encodeURIComponent(accountName)) + '/privateLinkResources&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Gets the private link resources that need to be created for a Cosmos DB account.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/privateLinkResources/{groupName}
		 * @param {string} subscriptionId Azure subscription ID.
		 * @param {string} resourceGroupName Name of an Azure resource group.
		 *     Min length: 1    Max length: 90
		 * @param {string} api_version Version of the API to be used with the client request. The current version is 2019-08-01.
		 * @param {string} accountName Cosmos DB database account name.
		 *     Min length: 3    Max length: 50
		 * @param {string} groupName The name of the private link resource.
		 * @return {PrivateLinkResource} Successfully retrieved a specified private link resource.
		 */
		PrivateLinkResources_Get(subscriptionId: string, resourceGroupName: string, api_version: string, accountName: string, groupName: string): Observable<PrivateLinkResource> {
			return this.http.get<PrivateLinkResource>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DocumentDB/databaseAccounts/' + (accountName == null ? '' : encodeURIComponent(accountName)) + '/privateLinkResources/' + (groupName == null ? '' : encodeURIComponent(groupName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}
	}

}

