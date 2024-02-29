import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** The list of locks. */
	export interface ManagementLockListResult {

		/** The URL to use for getting the next set of results. */
		nextLink?: string | null;

		/** The list of locks. */
		value?: Array<ManagementLockObject>;
	}

	/** The list of locks. */
	export interface ManagementLockListResultFormProperties {

		/** The URL to use for getting the next set of results. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateManagementLockListResultFormGroup() {
		return new FormGroup<ManagementLockListResultFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The lock information. */
	export interface ManagementLockObject {

		/** The resource ID of the lock. */
		id?: string | null;

		/** The name of the lock. */
		name?: string | null;

		/**
		 * The lock properties.
		 * Required
		 */
		properties: ManagementLockProperties;

		/** The resource type of the lock - Microsoft.Authorization/locks. */
		type?: string | null;
	}

	/** The lock information. */
	export interface ManagementLockObjectFormProperties {

		/** The resource ID of the lock. */
		id: FormControl<string | null | undefined>,

		/** The name of the lock. */
		name: FormControl<string | null | undefined>,

		/** The resource type of the lock - Microsoft.Authorization/locks. */
		type: FormControl<string | null | undefined>,
	}
	export function CreateManagementLockObjectFormGroup() {
		return new FormGroup<ManagementLockObjectFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Lock owner properties. */
	export interface ManagementLockOwner {

		/** The application ID of the lock owner. */
		applicationId?: string | null;
	}

	/** Lock owner properties. */
	export interface ManagementLockOwnerFormProperties {

		/** The application ID of the lock owner. */
		applicationId: FormControl<string | null | undefined>,
	}
	export function CreateManagementLockOwnerFormGroup() {
		return new FormGroup<ManagementLockOwnerFormProperties>({
			applicationId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The lock properties. */
	export interface ManagementLockProperties {

		/**
		 * The level of the lock. Possible values are: NotSpecified, CanNotDelete, ReadOnly. CanNotDelete means authorized users are able to read and modify the resources, but not delete. ReadOnly means authorized users can only read from a resource, but they can't modify or delete it.
		 * Required
		 */
		level: ManagementLockPropertiesLevel;

		/** Notes about the lock. Maximum of 512 characters. */
		notes?: string | null;

		/** The owners of the lock. */
		owners?: Array<ManagementLockOwner>;
	}

	/** The lock properties. */
	export interface ManagementLockPropertiesFormProperties {

		/**
		 * The level of the lock. Possible values are: NotSpecified, CanNotDelete, ReadOnly. CanNotDelete means authorized users are able to read and modify the resources, but not delete. ReadOnly means authorized users can only read from a resource, but they can't modify or delete it.
		 * Required
		 */
		level: FormControl<ManagementLockPropertiesLevel | null | undefined>,

		/** Notes about the lock. Maximum of 512 characters. */
		notes: FormControl<string | null | undefined>,
	}
	export function CreateManagementLockPropertiesFormGroup() {
		return new FormGroup<ManagementLockPropertiesFormProperties>({
			level: new FormControl<ManagementLockPropertiesLevel | null | undefined>(undefined, [Validators.required]),
			notes: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ManagementLockPropertiesLevel { NotSpecified = 'NotSpecified', CanNotDelete = 'CanNotDelete', ReadOnly = 'ReadOnly' }


	/** Microsoft.Authorization operation */
	export interface Operation {

		/** The object that represents the operation. */
		display?: any;

		/** Operation name: {provider}/{resource}/{operation} */
		name?: string | null;
	}

	/** Microsoft.Authorization operation */
	export interface OperationFormProperties {

		/** The object that represents the operation. */
		display: FormControl<any | null | undefined>,

		/** Operation name: {provider}/{resource}/{operation} */
		name: FormControl<string | null | undefined>,
	}
	export function CreateOperationFormGroup() {
		return new FormGroup<OperationFormProperties>({
			display: new FormControl<any | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Result of the request to list Microsoft.Authorization operations. It contains a list of operations and a URL link to get the next set of results. */
	export interface OperationListResult {

		/** URL to get the next set of operation list results if there are any. */
		nextLink?: string | null;

		/** List of Microsoft.Authorization operations. */
		value?: Array<Operation>;
	}

	/** Result of the request to list Microsoft.Authorization operations. It contains a list of operations and a URL link to get the next set of results. */
	export interface OperationListResultFormProperties {

		/** URL to get the next set of operation list results if there are any. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateOperationListResultFormGroup() {
		return new FormGroup<OperationListResultFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Lists all of the available Microsoft.Authorization REST API operations.
		 * Get providers/Microsoft.Authorization/operations
		 * @param {string} api_version The API version to use for the operation.
		 * @return {OperationListResult} OK. The request has succeeded.
		 */
		AuthorizationOperations_List(api_version: string): Observable<OperationListResult> {
			return this.http.get<OperationListResult>(this.baseUri + 'providers/Microsoft.Authorization/operations?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Gets all the management locks for a subscription.
		 * Get subscriptions/{subscriptionId}/providers/Microsoft.Authorization/locks
		 * @param {string} filter The filter to apply on the operation.
		 * @param {string} api_version The API version to use for the operation.
		 * @param {string} subscriptionId The ID of the target subscription.
		 * @return {ManagementLockListResult} OK - Returns an array of resource locks.
		 */
		ManagementLocks_ListAtSubscriptionLevel(filter: string | null | undefined, api_version: string, subscriptionId: string): Observable<ManagementLockListResult> {
			return this.http.get<ManagementLockListResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/providers/Microsoft.Authorization/locks?filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Gets a management lock at the subscription level.
		 * Get subscriptions/{subscriptionId}/providers/Microsoft.Authorization/locks/{lockName}
		 * @param {string} lockName The name of the lock to get.
		 * @param {string} api_version The API version to use for the operation.
		 * @param {string} subscriptionId The ID of the target subscription.
		 * @return {ManagementLockObject} OK - Returns information about the lock.
		 */
		ManagementLocks_GetAtSubscriptionLevel(lockName: string, api_version: string, subscriptionId: string): Observable<ManagementLockObject> {
			return this.http.get<ManagementLockObject>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/providers/Microsoft.Authorization/locks/' + (lockName == null ? '' : encodeURIComponent(lockName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Creates or updates a management lock at the subscription level.
		 * When you apply a lock at a parent scope, all child resources inherit the same lock. To create management locks, you must have access to Microsoft.Authorization/* or Microsoft.Authorization/locks/* actions. Of the built-in roles, only Owner and User Access Administrator are granted those actions.
		 * Put subscriptions/{subscriptionId}/providers/Microsoft.Authorization/locks/{lockName}
		 * @param {string} lockName The name of lock. The lock name can be a maximum of 260 characters. It cannot contain <, > %, &, :, \, ?, /, or any control characters.
		 * @param {string} api_version The API version to use for the operation.
		 * @param {string} subscriptionId The ID of the target subscription.
		 * @param {ManagementLockObject} requestBody The management lock parameters.
		 * @return {ManagementLockObject} OK - Returns information about the lock.
		 */
		ManagementLocks_CreateOrUpdateAtSubscriptionLevel(lockName: string, api_version: string, subscriptionId: string, requestBody: ManagementLockObject): Observable<ManagementLockObject> {
			return this.http.put<ManagementLockObject>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/providers/Microsoft.Authorization/locks/' + (lockName == null ? '' : encodeURIComponent(lockName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes the management lock at the subscription level.
		 * To delete management locks, you must have access to Microsoft.Authorization/* or Microsoft.Authorization/locks/* actions. Of the built-in roles, only Owner and User Access Administrator are granted those actions.
		 * Delete subscriptions/{subscriptionId}/providers/Microsoft.Authorization/locks/{lockName}
		 * @param {string} lockName The name of lock to delete.
		 * @param {string} api_version The API version to use for the operation.
		 * @param {string} subscriptionId The ID of the target subscription.
		 * @return {void} OK
		 */
		ManagementLocks_DeleteAtSubscriptionLevel(lockName: string, api_version: string, subscriptionId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/providers/Microsoft.Authorization/locks/' + (lockName == null ? '' : encodeURIComponent(lockName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets all the management locks for a resource group.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Authorization/locks
		 * @param {string} resourceGroupName The name of the resource group containing the locks to get.
		 *     Min length: 1    Max length: 90
		 * @param {string} filter The filter to apply on the operation.
		 * @param {string} api_version The API version to use for the operation.
		 * @param {string} subscriptionId The ID of the target subscription.
		 * @return {ManagementLockListResult} OK - Returns an array of resource locks.
		 */
		ManagementLocks_ListAtResourceGroupLevel(resourceGroupName: string, filter: string | null | undefined, api_version: string, subscriptionId: string): Observable<ManagementLockListResult> {
			return this.http.get<ManagementLockListResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Authorization/locks&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Gets a management lock at the resource group level.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Authorization/locks/{lockName}
		 * @param {string} resourceGroupName The name of the locked resource group.
		 *     Min length: 1    Max length: 90
		 * @param {string} lockName The name of the lock to get.
		 * @param {string} api_version The API version to use for the operation.
		 * @param {string} subscriptionId The ID of the target subscription.
		 * @return {ManagementLockObject} OK - Returns information about the lock.
		 */
		ManagementLocks_GetAtResourceGroupLevel(resourceGroupName: string, lockName: string, api_version: string, subscriptionId: string): Observable<ManagementLockObject> {
			return this.http.get<ManagementLockObject>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Authorization/locks/' + (lockName == null ? '' : encodeURIComponent(lockName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Creates or updates a management lock at the resource group level.
		 * When you apply a lock at a parent scope, all child resources inherit the same lock. To create management locks, you must have access to Microsoft.Authorization/* or Microsoft.Authorization/locks/* actions. Of the built-in roles, only Owner and User Access Administrator are granted those actions.
		 * Put subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Authorization/locks/{lockName}
		 * @param {string} resourceGroupName The name of the resource group to lock.
		 *     Min length: 1    Max length: 90
		 * @param {string} lockName The lock name. The lock name can be a maximum of 260 characters. It cannot contain <, > %, &, :, \, ?, /, or any control characters.
		 * @param {string} api_version The API version to use for the operation.
		 * @param {string} subscriptionId The ID of the target subscription.
		 * @param {ManagementLockObject} requestBody The management lock parameters.
		 * @return {ManagementLockObject} OK - Returns information about the lock.
		 */
		ManagementLocks_CreateOrUpdateAtResourceGroupLevel(resourceGroupName: string, lockName: string, api_version: string, subscriptionId: string, requestBody: ManagementLockObject): Observable<ManagementLockObject> {
			return this.http.put<ManagementLockObject>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Authorization/locks/' + (lockName == null ? '' : encodeURIComponent(lockName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a management lock at the resource group level.
		 * To delete management locks, you must have access to Microsoft.Authorization/* or Microsoft.Authorization/locks/* actions. Of the built-in roles, only Owner and User Access Administrator are granted those actions.
		 * Delete subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Authorization/locks/{lockName}
		 * @param {string} resourceGroupName The name of the resource group containing the lock.
		 *     Min length: 1    Max length: 90
		 * @param {string} lockName The name of lock to delete.
		 * @param {string} api_version The API version to use for the operation.
		 * @param {string} subscriptionId The ID of the target subscription.
		 * @return {void} OK
		 */
		ManagementLocks_DeleteAtResourceGroupLevel(resourceGroupName: string, lockName: string, api_version: string, subscriptionId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Authorization/locks/' + (lockName == null ? '' : encodeURIComponent(lockName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets all the management locks for a resource or any level below resource.
		 * Get subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{parentResourcePath}/{resourceType}/{resourceName}/providers/Microsoft.Authorization/locks
		 * @param {string} resourceGroupName The name of the resource group containing the locked resource. The name is case insensitive.
		 *     Min length: 1    Max length: 90
		 * @param {string} resourceProviderNamespace The namespace of the resource provider.
		 * @param {string} parentResourcePath The parent resource identity.
		 * @param {string} resourceType The resource type of the locked resource.
		 * @param {string} resourceName The name of the locked resource.
		 * @param {string} filter The filter to apply on the operation.
		 * @param {string} api_version The API version to use for the operation.
		 * @param {string} subscriptionId The ID of the target subscription.
		 * @return {ManagementLockListResult} OK - Returns an array of resource locks.
		 */
		ManagementLocks_ListAtResourceLevel(resourceGroupName: string, resourceProviderNamespace: string, parentResourcePath: string, resourceType: string, resourceName: string, filter: string | null | undefined, api_version: string, subscriptionId: string): Observable<ManagementLockListResult> {
			return this.http.get<ManagementLockListResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourcegroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/' + (resourceProviderNamespace == null ? '' : encodeURIComponent(resourceProviderNamespace)) + '/' + (parentResourcePath == null ? '' : encodeURIComponent(parentResourcePath)) + '/' + (resourceType == null ? '' : encodeURIComponent(resourceType)) + '/' + (resourceName == null ? '' : encodeURIComponent(resourceName)) + '/providers/Microsoft.Authorization/locks&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Get the management lock of a resource or any level below resource.
		 * Get subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{parentResourcePath}/{resourceType}/{resourceName}/providers/Microsoft.Authorization/locks/{lockName}
		 * @param {string} resourceGroupName The name of the resource group. 
		 *     Min length: 1    Max length: 90
		 * @param {string} resourceProviderNamespace The namespace of the resource provider.
		 * @param {string} parentResourcePath An extra path parameter needed in some services, like SQL Databases.
		 * @param {string} resourceType The type of the resource.
		 * @param {string} resourceName The name of the resource.
		 * @param {string} lockName The name of lock.
		 * @param {string} api_version The API version to use for the operation.
		 * @param {string} subscriptionId The ID of the target subscription.
		 * @return {ManagementLockObject} OK
		 */
		ManagementLocks_GetAtResourceLevel(resourceGroupName: string, resourceProviderNamespace: string, parentResourcePath: string, resourceType: string, resourceName: string, lockName: string, api_version: string, subscriptionId: string): Observable<ManagementLockObject> {
			return this.http.get<ManagementLockObject>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourcegroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/' + (resourceProviderNamespace == null ? '' : encodeURIComponent(resourceProviderNamespace)) + '/' + (parentResourcePath == null ? '' : encodeURIComponent(parentResourcePath)) + '/' + (resourceType == null ? '' : encodeURIComponent(resourceType)) + '/' + (resourceName == null ? '' : encodeURIComponent(resourceName)) + '/providers/Microsoft.Authorization/locks/' + (lockName == null ? '' : encodeURIComponent(lockName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Creates or updates a management lock at the resource level or any level below the resource.
		 * When you apply a lock at a parent scope, all child resources inherit the same lock. To create management locks, you must have access to Microsoft.Authorization/* or Microsoft.Authorization/locks/* actions. Of the built-in roles, only Owner and User Access Administrator are granted those actions.
		 * Put subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{parentResourcePath}/{resourceType}/{resourceName}/providers/Microsoft.Authorization/locks/{lockName}
		 * @param {string} resourceGroupName The name of the resource group containing the resource to lock. 
		 *     Min length: 1    Max length: 90
		 * @param {string} resourceProviderNamespace The resource provider namespace of the resource to lock.
		 * @param {string} parentResourcePath The parent resource identity.
		 * @param {string} resourceType The resource type of the resource to lock.
		 * @param {string} resourceName The name of the resource to lock.
		 * @param {string} lockName The name of lock. The lock name can be a maximum of 260 characters. It cannot contain <, > %, &, :, \, ?, /, or any control characters.
		 * @param {string} api_version The API version to use for the operation.
		 * @param {string} subscriptionId The ID of the target subscription.
		 * @param {ManagementLockObject} requestBody Parameters for creating or updating a  management lock.
		 * @return {ManagementLockObject} OK - Returns information about the lock.
		 */
		ManagementLocks_CreateOrUpdateAtResourceLevel(resourceGroupName: string, resourceProviderNamespace: string, parentResourcePath: string, resourceType: string, resourceName: string, lockName: string, api_version: string, subscriptionId: string, requestBody: ManagementLockObject): Observable<ManagementLockObject> {
			return this.http.put<ManagementLockObject>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourcegroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/' + (resourceProviderNamespace == null ? '' : encodeURIComponent(resourceProviderNamespace)) + '/' + (parentResourcePath == null ? '' : encodeURIComponent(parentResourcePath)) + '/' + (resourceType == null ? '' : encodeURIComponent(resourceType)) + '/' + (resourceName == null ? '' : encodeURIComponent(resourceName)) + '/providers/Microsoft.Authorization/locks/' + (lockName == null ? '' : encodeURIComponent(lockName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes the management lock of a resource or any level below the resource.
		 * To delete management locks, you must have access to Microsoft.Authorization/* or Microsoft.Authorization/locks/* actions. Of the built-in roles, only Owner and User Access Administrator are granted those actions.
		 * Delete subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{parentResourcePath}/{resourceType}/{resourceName}/providers/Microsoft.Authorization/locks/{lockName}
		 * @param {string} resourceGroupName The name of the resource group containing the resource with the lock to delete. 
		 *     Min length: 1    Max length: 90
		 * @param {string} resourceProviderNamespace The resource provider namespace of the resource with the lock to delete.
		 * @param {string} parentResourcePath The parent resource identity.
		 * @param {string} resourceType The resource type of the resource with the lock to delete.
		 * @param {string} resourceName The name of the resource with the lock to delete.
		 * @param {string} lockName The name of the lock to delete.
		 * @param {string} api_version The API version to use for the operation.
		 * @param {string} subscriptionId The ID of the target subscription.
		 * @return {void} OK
		 */
		ManagementLocks_DeleteAtResourceLevel(resourceGroupName: string, resourceProviderNamespace: string, parentResourcePath: string, resourceType: string, resourceName: string, lockName: string, api_version: string, subscriptionId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourcegroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/' + (resourceProviderNamespace == null ? '' : encodeURIComponent(resourceProviderNamespace)) + '/' + (parentResourcePath == null ? '' : encodeURIComponent(parentResourcePath)) + '/' + (resourceType == null ? '' : encodeURIComponent(resourceType)) + '/' + (resourceName == null ? '' : encodeURIComponent(resourceName)) + '/providers/Microsoft.Authorization/locks/' + (lockName == null ? '' : encodeURIComponent(lockName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets all the management locks for a scope.
		 * Get {scope}/providers/Microsoft.Authorization/locks
		 * @param {string} scope The scope for the lock. When providing a scope for the assignment, use '/subscriptions/{subscriptionId}' for subscriptions, '/subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}' for resource groups, and '/subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{parentResourcePathIfPresent}/{resourceType}/{resourceName}' for resources.
		 * @param {string} filter The filter to apply on the operation.
		 * @param {string} api_version The API version to use for the operation.
		 * @return {ManagementLockListResult} OK - Returns an array of resource locks.
		 */
		ManagementLocks_ListByScope(scope: string, filter: string | null | undefined, api_version: string): Observable<ManagementLockListResult> {
			return this.http.get<ManagementLockListResult>(this.baseUri + (scope == null ? '' : encodeURIComponent(scope)) + '/providers/Microsoft.Authorization/locks&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)) + '', {});
		}

		/**
		 * Get a management lock by scope.
		 * Get {scope}/providers/Microsoft.Authorization/locks/{lockName}
		 * @param {string} scope The scope for the lock. 
		 * @param {string} lockName The name of lock.
		 * @param {string} api_version The API version to use for the operation.
		 * @return {ManagementLockObject} OK
		 */
		ManagementLocks_GetByScope(scope: string, lockName: string, api_version: string): Observable<ManagementLockObject> {
			return this.http.get<ManagementLockObject>(this.baseUri + (scope == null ? '' : encodeURIComponent(scope)) + '/providers/Microsoft.Authorization/locks/' + (lockName == null ? '' : encodeURIComponent(lockName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)) + '', {});
		}

		/**
		 * Create or update a management lock by scope.
		 * Put {scope}/providers/Microsoft.Authorization/locks/{lockName}
		 * @param {string} scope The scope for the lock. When providing a scope for the assignment, use '/subscriptions/{subscriptionId}' for subscriptions, '/subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}' for resource groups, and '/subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{parentResourcePathIfPresent}/{resourceType}/{resourceName}' for resources.
		 * @param {string} lockName The name of lock.
		 * @param {string} api_version The API version to use for the operation.
		 * @param {ManagementLockObject} requestBody Create or update management lock parameters.
		 * @return {ManagementLockObject} OK
		 */
		ManagementLocks_CreateOrUpdateByScope(scope: string, lockName: string, api_version: string, requestBody: ManagementLockObject): Observable<ManagementLockObject> {
			return this.http.put<ManagementLockObject>(this.baseUri + (scope == null ? '' : encodeURIComponent(scope)) + '/providers/Microsoft.Authorization/locks/' + (lockName == null ? '' : encodeURIComponent(lockName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)) + '', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Delete a management lock by scope.
		 * Delete {scope}/providers/Microsoft.Authorization/locks/{lockName}
		 * @param {string} scope The scope for the lock. 
		 * @param {string} lockName The name of lock.
		 * @param {string} api_version The API version to use for the operation.
		 * @return {void} OK
		 */
		ManagementLocks_DeleteByScope(scope: string, lockName: string, api_version: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + (scope == null ? '' : encodeURIComponent(scope)) + '/providers/Microsoft.Authorization/locks/' + (lockName == null ? '' : encodeURIComponent(lockName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)) + '', { observe: 'response', responseType: 'text' });
		}
	}

}

