import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** An error response from the ManagedServiceIdentity service. */
	export interface CloudError {

		/** An error response from the ManagedServiceIdentity service. */
		error?: CloudErrorBody;
	}

	/** An error response from the ManagedServiceIdentity service. */
	export interface CloudErrorFormProperties {
	}
	export function CreateCloudErrorFormGroup() {
		return new FormGroup<CloudErrorFormProperties>({
		});

	}


	/** An error response from the ManagedServiceIdentity service. */
	export interface CloudErrorBody {

		/** An identifier for the error. */
		code?: string | null;

		/** A list of additional details about the error. */
		details?: Array<CloudErrorBody>;

		/** A message describing the error, intended to be suitable for display in a user interface. */
		message?: string | null;

		/** The target of the particular error. For example, the name of the property in error. */
		target?: string | null;
	}

	/** An error response from the ManagedServiceIdentity service. */
	export interface CloudErrorBodyFormProperties {

		/** An identifier for the error. */
		code: FormControl<string | null | undefined>,

		/** A message describing the error, intended to be suitable for display in a user interface. */
		message: FormControl<string | null | undefined>,

		/** The target of the particular error. For example, the name of the property in error. */
		target: FormControl<string | null | undefined>,
	}
	export function CreateCloudErrorBodyFormGroup() {
		return new FormGroup<CloudErrorBodyFormProperties>({
			code: new FormControl<string | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
			target: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Describes an identity resource. */
	export interface Identity {

		/** The id of the created identity. */
		id?: string | null;

		/** The Azure region where the identity lives. */
		location?: string | null;

		/** The name of the created identity. */
		name?: string | null;

		/** The properties associated with the identity. */
		properties?: IdentityProperties;

		/** Resource tags */
		tags?: {[id: string]: string };

		/** The type of resource i.e. Microsoft.ManagedIdentity/userAssignedIdentities */
		type?: IdentityType | null;
	}

	/** Describes an identity resource. */
	export interface IdentityFormProperties {

		/** The id of the created identity. */
		id: FormControl<string | null | undefined>,

		/** The Azure region where the identity lives. */
		location: FormControl<string | null | undefined>,

		/** The name of the created identity. */
		name: FormControl<string | null | undefined>,

		/** Resource tags */
		tags: FormControl<{[id: string]: string } | null | undefined>,

		/** The type of resource i.e. Microsoft.ManagedIdentity/userAssignedIdentities */
		type: FormControl<IdentityType | null | undefined>,
	}
	export function CreateIdentityFormGroup() {
		return new FormGroup<IdentityFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			location: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			type: new FormControl<IdentityType | null | undefined>(undefined),
		});

	}


	/** The properties associated with the identity. */
	export interface IdentityProperties {

		/** The id of the app associated with the identity. This is a random generated UUID by MSI. */
		clientId?: string | null;

		/** The ManagedServiceIdentity DataPlane URL that can be queried to obtain the identity credentials. If identity is user assigned, then the clientSecretUrl will not be present in the response, otherwise it will be present. */
		clientSecretUrl?: string | null;

		/** The id of the service principal object associated with the created identity. */
		principalId?: string | null;

		/** The id of the tenant which the identity belongs to. */
		tenantId?: string | null;
	}

	/** The properties associated with the identity. */
	export interface IdentityPropertiesFormProperties {

		/** The id of the app associated with the identity. This is a random generated UUID by MSI. */
		clientId: FormControl<string | null | undefined>,

		/** The ManagedServiceIdentity DataPlane URL that can be queried to obtain the identity credentials. If identity is user assigned, then the clientSecretUrl will not be present in the response, otherwise it will be present. */
		clientSecretUrl: FormControl<string | null | undefined>,

		/** The id of the service principal object associated with the created identity. */
		principalId: FormControl<string | null | undefined>,

		/** The id of the tenant which the identity belongs to. */
		tenantId: FormControl<string | null | undefined>,
	}
	export function CreateIdentityPropertiesFormGroup() {
		return new FormGroup<IdentityPropertiesFormProperties>({
			clientId: new FormControl<string | null | undefined>(undefined),
			clientSecretUrl: new FormControl<string | null | undefined>(undefined),
			principalId: new FormControl<string | null | undefined>(undefined),
			tenantId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum IdentityType { 'Microsoft.ManagedIdentity/userAssignedIdentities' = 'Microsoft.ManagedIdentity/userAssignedIdentities' }


	/** Operation supported by the Microsoft.ManagedIdentity REST API. */
	export interface Operation {

		/** The object that describes the operation. */
		display?: OperationDisplay;

		/** The name of the REST Operation. This is of the format {provider}/{resource}/{operation}. */
		name?: string | null;
	}

	/** Operation supported by the Microsoft.ManagedIdentity REST API. */
	export interface OperationFormProperties {

		/** The name of the REST Operation. This is of the format {provider}/{resource}/{operation}. */
		name: FormControl<string | null | undefined>,
	}
	export function CreateOperationFormGroup() {
		return new FormGroup<OperationFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The object that describes the operation. */
	export interface OperationDisplay {

		/** A description of the operation. */
		description?: string | null;

		/** The type of operation. For example: read, write, delete. */
		operation?: string | null;

		/** Friendly name of the resource provider. */
		provider?: string | null;

		/** The resource type on which the operation is performed. */
		resource?: string | null;
	}

	/** The object that describes the operation. */
	export interface OperationDisplayFormProperties {

		/** A description of the operation. */
		description: FormControl<string | null | undefined>,

		/** The type of operation. For example: read, write, delete. */
		operation: FormControl<string | null | undefined>,

		/** Friendly name of the resource provider. */
		provider: FormControl<string | null | undefined>,

		/** The resource type on which the operation is performed. */
		resource: FormControl<string | null | undefined>,
	}
	export function CreateOperationDisplayFormGroup() {
		return new FormGroup<OperationDisplayFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			operation: new FormControl<string | null | undefined>(undefined),
			provider: new FormControl<string | null | undefined>(undefined),
			resource: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A list of operations supported by Microsoft.ManagedIdentity Resource Provider. */
	export interface OperationListResult {

		/** The url to get the next page of results, if any. */
		nextLink?: string | null;

		/** A list of operations supported by Microsoft.ManagedIdentity Resource Provider. */
		value?: Array<Operation>;
	}

	/** A list of operations supported by Microsoft.ManagedIdentity Resource Provider. */
	export interface OperationListResultFormProperties {

		/** The url to get the next page of results, if any. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateOperationListResultFormGroup() {
		return new FormGroup<OperationListResultFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Values returned by the List operation. */
	export interface UserAssignedIdentitiesListResult {

		/** The url to get the next page of results, if any. */
		nextLink?: string | null;

		/** The collection of userAssignedIdentities returned by the listing operation. */
		value?: Array<Identity>;
	}

	/** Values returned by the List operation. */
	export interface UserAssignedIdentitiesListResultFormProperties {

		/** The url to get the next page of results, if any. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateUserAssignedIdentitiesListResultFormGroup() {
		return new FormGroup<UserAssignedIdentitiesListResultFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Lists available operations for the Microsoft.ManagedIdentity provider
		 * Get providers/Microsoft.ManagedIdentity/operations
		 * @param {string} api_version Version of API to invoke.
		 * @return {OperationListResult} The operation was successful. The response contains the list of available operations.
		 */
		Operations_List(api_version: string): Observable<OperationListResult> {
			return this.http.get<OperationListResult>(this.baseUri + 'providers/Microsoft.ManagedIdentity/operations?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Lists all the userAssignedIdentities available under the specified subscription.
		 * Get subscriptions/{subscriptionId}/providers/Microsoft.ManagedIdentity/userAssignedIdentities
		 * @param {string} subscriptionId The Id of the Subscription to which the identity belongs.
		 * @param {string} api_version Version of API to invoke.
		 * @return {UserAssignedIdentitiesListResult} OK. The list of userAssignedIdentities was retrieved and returned successfully.
		 */
		UserAssignedIdentities_ListBySubscription(subscriptionId: string, api_version: string): Observable<UserAssignedIdentitiesListResult> {
			return this.http.get<UserAssignedIdentitiesListResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/providers/Microsoft.ManagedIdentity/userAssignedIdentities&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Lists all the userAssignedIdentities available under the specified ResourceGroup.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities
		 * @param {string} subscriptionId The Id of the Subscription to which the identity belongs.
		 * @param {string} resourceGroupName The name of the Resource Group to which the identity belongs.
		 * @param {string} api_version Version of API to invoke.
		 * @return {UserAssignedIdentitiesListResult} OK. The list of userAssignedIdentities was retrieved and returned successfully.
		 */
		UserAssignedIdentities_ListByResourceGroup(subscriptionId: string, resourceGroupName: string, api_version: string): Observable<UserAssignedIdentitiesListResult> {
			return this.http.get<UserAssignedIdentitiesListResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.ManagedIdentity/userAssignedIdentities&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Gets the identity.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{resourceName}
		 * @param {string} subscriptionId The Id of the Subscription to which the identity belongs.
		 * @param {string} resourceGroupName The name of the Resource Group to which the identity belongs.
		 * @param {string} resourceName The name of the identity resource.
		 * @param {string} api_version Version of API to invoke.
		 * @return {Identity} OK. The requested identity.
		 */
		UserAssignedIdentities_Get(subscriptionId: string, resourceGroupName: string, resourceName: string, api_version: string): Observable<Identity> {
			return this.http.get<Identity>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.ManagedIdentity/userAssignedIdentities/' + (resourceName == null ? '' : encodeURIComponent(resourceName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Create or update an identity in the specified subscription and resource group.
		 * Put subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{resourceName}
		 * @param {string} subscriptionId The Id of the Subscription to which the identity belongs.
		 * @param {string} resourceGroupName The name of the Resource Group to which the identity belongs.
		 * @param {string} resourceName The name of the identity resource.
		 * @param {string} api_version Version of API to invoke.
		 * @param {Identity} requestBody Parameters to create or update the identity
		 * @return {Identity} Updated identity
		 */
		UserAssignedIdentities_CreateOrUpdate(subscriptionId: string, resourceGroupName: string, resourceName: string, api_version: string, requestBody: Identity): Observable<Identity> {
			return this.http.put<Identity>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.ManagedIdentity/userAssignedIdentities/' + (resourceName == null ? '' : encodeURIComponent(resourceName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes the identity.
		 * Delete subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{resourceName}
		 * @param {string} subscriptionId The Id of the Subscription to which the identity belongs.
		 * @param {string} resourceGroupName The name of the Resource Group to which the identity belongs.
		 * @param {string} resourceName The name of the identity resource.
		 * @param {string} api_version Version of API to invoke.
		 * @return {void} OK. Deleted Identity.
		 */
		UserAssignedIdentities_Delete(subscriptionId: string, resourceGroupName: string, resourceName: string, api_version: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.ManagedIdentity/userAssignedIdentities/' + (resourceName == null ? '' : encodeURIComponent(resourceName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Update an identity in the specified subscription and resource group.
		 * Patch subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{resourceName}
		 * @param {string} subscriptionId The Id of the Subscription to which the identity belongs.
		 * @param {string} resourceGroupName The name of the Resource Group to which the identity belongs.
		 * @param {string} resourceName The name of the identity resource.
		 * @param {string} api_version Version of API to invoke.
		 * @param {Identity} requestBody Parameters to update the identity
		 * @return {Identity} Updated identity
		 */
		UserAssignedIdentities_Update(subscriptionId: string, resourceGroupName: string, resourceName: string, api_version: string, requestBody: Identity): Observable<Identity> {
			return this.http.patch<Identity>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.ManagedIdentity/userAssignedIdentities/' + (resourceName == null ? '' : encodeURIComponent(resourceName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

}

