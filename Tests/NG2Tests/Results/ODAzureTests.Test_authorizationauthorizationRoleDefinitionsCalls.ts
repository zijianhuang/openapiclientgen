import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** Role definition permissions. */
	export interface Permission {

		/** Allowed actions. */
		actions?: Array<string>;

		/** Allowed Data actions. */
		dataActions?: Array<string>;

		/** Denied actions. */
		notActions?: Array<string>;

		/** Denied Data actions. */
		notDataActions?: Array<string>;
	}

	/** Role definition permissions. */
	export interface PermissionFormProperties {
	}
	export function CreatePermissionFormGroup() {
		return new FormGroup<PermissionFormProperties>({
		});

	}


	/** Permissions information. */
	export interface PermissionGetResult {

		/** The URL to use for getting the next set of results. */
		nextLink?: string | null;

		/** An array of permissions. */
		value?: Array<Permission>;
	}

	/** Permissions information. */
	export interface PermissionGetResultFormProperties {

		/** The URL to use for getting the next set of results. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreatePermissionGetResultFormGroup() {
		return new FormGroup<PermissionGetResultFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Role definition. */
	export interface RoleDefinition {

		/** The role definition ID. */
		id?: string | null;

		/** The role definition name. */
		name?: string | null;

		/** Role definition properties. */
		properties?: RoleDefinitionProperties;

		/** The role definition type. */
		type?: string | null;
	}

	/** Role definition. */
	export interface RoleDefinitionFormProperties {

		/** The role definition ID. */
		id: FormControl<string | null | undefined>,

		/** The role definition name. */
		name: FormControl<string | null | undefined>,

		/** The role definition type. */
		type: FormControl<string | null | undefined>,
	}
	export function CreateRoleDefinitionFormGroup() {
		return new FormGroup<RoleDefinitionFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Role Definitions filter */
	export interface RoleDefinitionFilter {

		/** Returns role definition with the specific name. */
		roleName?: string | null;

		/** Returns role definition with the specific type. */
		type?: string | null;
	}

	/** Role Definitions filter */
	export interface RoleDefinitionFilterFormProperties {

		/** Returns role definition with the specific name. */
		roleName: FormControl<string | null | undefined>,

		/** Returns role definition with the specific type. */
		type: FormControl<string | null | undefined>,
	}
	export function CreateRoleDefinitionFilterFormGroup() {
		return new FormGroup<RoleDefinitionFilterFormProperties>({
			roleName: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Role definition list operation result. */
	export interface RoleDefinitionListResult {

		/** The URL to use for getting the next set of results. */
		nextLink?: string | null;

		/** Role definition list. */
		value?: Array<RoleDefinition>;
	}

	/** Role definition list operation result. */
	export interface RoleDefinitionListResultFormProperties {

		/** The URL to use for getting the next set of results. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateRoleDefinitionListResultFormGroup() {
		return new FormGroup<RoleDefinitionListResultFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Role definition properties. */
	export interface RoleDefinitionProperties {

		/** Role definition assignable scopes. */
		assignableScopes?: Array<string>;

		/** The role definition description. */
		description?: string | null;

		/** Role definition permissions. */
		permissions?: Array<Permission>;

		/** The role name. */
		roleName?: string | null;

		/** The role type. */
		type?: string | null;
	}

	/** Role definition properties. */
	export interface RoleDefinitionPropertiesFormProperties {

		/** The role definition description. */
		description: FormControl<string | null | undefined>,

		/** The role name. */
		roleName: FormControl<string | null | undefined>,

		/** The role type. */
		type: FormControl<string | null | undefined>,
	}
	export function CreateRoleDefinitionPropertiesFormGroup() {
		return new FormGroup<RoleDefinitionPropertiesFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			roleName: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Gets all permissions the caller has for a resource group.
		 * Get subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.Authorization/permissions
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} api_version The API version to use for this operation.
		 * @param {string} subscriptionId The ID of the target subscription.
		 * @return {PermissionGetResult} OK - Returns an array of permissions.
		 */
		Permissions_ListForResourceGroup(resourceGroupName: string, api_version: string, subscriptionId: string): Observable<PermissionGetResult> {
			return this.http.get<PermissionGetResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourcegroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Authorization/permissions&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Gets all permissions the caller has for a resource.
		 * Get subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{parentResourcePath}/{resourceType}/{resourceName}/providers/Microsoft.Authorization/permissions
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} resourceProviderNamespace The namespace of the resource provider.
		 * @param {string} parentResourcePath The parent resource identity.
		 * @param {string} resourceType The resource type of the resource.
		 * @param {string} resourceName The name of the resource to get the permissions for.
		 * @param {string} api_version The API version to use for this operation.
		 * @param {string} subscriptionId The ID of the target subscription.
		 * @return {PermissionGetResult} OK - Returns an array of permissions.
		 */
		Permissions_ListForResource(resourceGroupName: string, resourceProviderNamespace: string, parentResourcePath: string, resourceType: string, resourceName: string, api_version: string, subscriptionId: string): Observable<PermissionGetResult> {
			return this.http.get<PermissionGetResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourcegroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/' + (resourceProviderNamespace == null ? '' : encodeURIComponent(resourceProviderNamespace)) + '/' + (parentResourcePath == null ? '' : encodeURIComponent(parentResourcePath)) + '/' + (resourceType == null ? '' : encodeURIComponent(resourceType)) + '/' + (resourceName == null ? '' : encodeURIComponent(resourceName)) + '/providers/Microsoft.Authorization/permissions&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Get all role definitions that are applicable at scope and above.
		 * Get {scope}/providers/Microsoft.Authorization/roleDefinitions
		 * @param {string} scope The scope of the role definition.
		 * @param {string} filter The filter to apply on the operation. Use atScopeAndBelow filter to search below the given scope as well.
		 * @param {string} api_version The API version to use for this operation.
		 * @return {RoleDefinitionListResult} OK - Returns an array of role definitions.
		 */
		RoleDefinitions_List(scope: string, filter: string | null | undefined, api_version: string): Observable<RoleDefinitionListResult> {
			return this.http.get<RoleDefinitionListResult>(this.baseUri + (scope == null ? '' : encodeURIComponent(scope)) + '/providers/Microsoft.Authorization/roleDefinitions&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)) + '', {});
		}

		/**
		 * Get role definition by name (GUID).
		 * Get {scope}/providers/Microsoft.Authorization/roleDefinitions/{roleDefinitionId}
		 * @param {string} scope The scope of the role definition.
		 * @param {string} roleDefinitionId The ID of the role definition.
		 * @param {string} api_version The API version to use for this operation.
		 * @return {RoleDefinition} OK - Returns information about the role definition.
		 */
		RoleDefinitions_Get(scope: string, roleDefinitionId: string, api_version: string): Observable<RoleDefinition> {
			return this.http.get<RoleDefinition>(this.baseUri + (scope == null ? '' : encodeURIComponent(scope)) + '/providers/Microsoft.Authorization/roleDefinitions/' + (roleDefinitionId == null ? '' : encodeURIComponent(roleDefinitionId)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)) + '', {});
		}

		/**
		 * Creates or updates a role definition.
		 * Put {scope}/providers/Microsoft.Authorization/roleDefinitions/{roleDefinitionId}
		 * @param {string} scope The scope of the role definition.
		 * @param {string} roleDefinitionId The ID of the role definition.
		 * @param {string} api_version The API version to use for this operation.
		 * @param {RoleDefinition} requestBody The values for the role definition.
		 * @return {void} 
		 */
		RoleDefinitions_CreateOrUpdate(scope: string, roleDefinitionId: string, api_version: string, requestBody: RoleDefinition): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + (scope == null ? '' : encodeURIComponent(scope)) + '/providers/Microsoft.Authorization/roleDefinitions/' + (roleDefinitionId == null ? '' : encodeURIComponent(roleDefinitionId)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)) + '', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Deletes a role definition.
		 * Delete {scope}/providers/Microsoft.Authorization/roleDefinitions/{roleDefinitionId}
		 * @param {string} scope The scope of the role definition.
		 * @param {string} roleDefinitionId The ID of the role definition to delete.
		 * @param {string} api_version The API version to use for this operation.
		 * @return {RoleDefinition} OK - Returns information about the role definition.
		 */
		RoleDefinitions_Delete(scope: string, roleDefinitionId: string, api_version: string): Observable<RoleDefinition> {
			return this.http.delete<RoleDefinition>(this.baseUri + (scope == null ? '' : encodeURIComponent(scope)) + '/providers/Microsoft.Authorization/roleDefinitions/' + (roleDefinitionId == null ? '' : encodeURIComponent(roleDefinitionId)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)) + '', {});
		}
	}

}

