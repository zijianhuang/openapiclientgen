import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** Role Assignments */
	export interface RoleAssignment {

		/** The role assignment ID. */
		id?: string | null;

		/** The role assignment name. */
		name?: string | null;

		/** Role assignment properties with scope. */
		properties?: RoleAssignmentPropertiesWithScope;

		/** The role assignment type. */
		type?: string | null;
	}

	/** Role Assignments */
	export interface RoleAssignmentFormProperties {

		/** The role assignment ID. */
		id: FormControl<string | null | undefined>,

		/** The role assignment name. */
		name: FormControl<string | null | undefined>,

		/** The role assignment type. */
		type: FormControl<string | null | undefined>,
	}
	export function CreateRoleAssignmentFormGroup() {
		return new FormGroup<RoleAssignmentFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Role assignment create parameters. */
	export interface RoleAssignmentCreateParameters {

		/**
		 * Role assignment properties.
		 * Required
		 */
		properties: RoleAssignmentProperties;
	}

	/** Role assignment create parameters. */
	export interface RoleAssignmentCreateParametersFormProperties {
	}
	export function CreateRoleAssignmentCreateParametersFormGroup() {
		return new FormGroup<RoleAssignmentCreateParametersFormProperties>({
		});

	}


	/** Role Assignments filter */
	export interface RoleAssignmentFilter {

		/** The Delegation flag for the role assignment */
		canDelegate?: boolean | null;

		/** Returns role assignment of the specific principal. */
		principalId?: string | null;
	}

	/** Role Assignments filter */
	export interface RoleAssignmentFilterFormProperties {

		/** The Delegation flag for the role assignment */
		canDelegate: FormControl<boolean | null | undefined>,

		/** Returns role assignment of the specific principal. */
		principalId: FormControl<string | null | undefined>,
	}
	export function CreateRoleAssignmentFilterFormGroup() {
		return new FormGroup<RoleAssignmentFilterFormProperties>({
			canDelegate: new FormControl<boolean | null | undefined>(undefined),
			principalId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Role assignment list operation result. */
	export interface RoleAssignmentListResult {

		/** The URL to use for getting the next set of results. */
		nextLink?: string | null;

		/** Role assignment list. */
		value?: Array<RoleAssignment>;
	}

	/** Role assignment list operation result. */
	export interface RoleAssignmentListResultFormProperties {

		/** The URL to use for getting the next set of results. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateRoleAssignmentListResultFormGroup() {
		return new FormGroup<RoleAssignmentListResultFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Role assignment properties. */
	export interface RoleAssignmentProperties {

		/** The delegation flag used for creating a role assignment */
		canDelegate?: boolean | null;

		/**
		 * The principal ID assigned to the role. This maps to the ID inside the Active Directory. It can point to a user, service principal, or security group.
		 * Required
		 */
		principalId: string;

		/** The principal type of the assigned principal ID. */
		principalType?: RoleAssignmentPropertiesPrincipalType | null;

		/**
		 * The role definition ID used in the role assignment.
		 * Required
		 */
		roleDefinitionId: string;
	}

	/** Role assignment properties. */
	export interface RoleAssignmentPropertiesFormProperties {

		/** The delegation flag used for creating a role assignment */
		canDelegate: FormControl<boolean | null | undefined>,

		/**
		 * The principal ID assigned to the role. This maps to the ID inside the Active Directory. It can point to a user, service principal, or security group.
		 * Required
		 */
		principalId: FormControl<string | null | undefined>,

		/** The principal type of the assigned principal ID. */
		principalType: FormControl<RoleAssignmentPropertiesPrincipalType | null | undefined>,

		/**
		 * The role definition ID used in the role assignment.
		 * Required
		 */
		roleDefinitionId: FormControl<string | null | undefined>,
	}
	export function CreateRoleAssignmentPropertiesFormGroup() {
		return new FormGroup<RoleAssignmentPropertiesFormProperties>({
			canDelegate: new FormControl<boolean | null | undefined>(undefined),
			principalId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			principalType: new FormControl<RoleAssignmentPropertiesPrincipalType | null | undefined>(undefined),
			roleDefinitionId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum RoleAssignmentPropertiesPrincipalType { User = 0, Group = 1, ServicePrincipal = 2, Unknown = 3, DirectoryRoleTemplate = 4, ForeignGroup = 5, Application = 6, MSI = 7, DirectoryObjectOrGroup = 8, Everyone = 9 }


	/** Role assignment properties with scope. */
	export interface RoleAssignmentPropertiesWithScope {

		/** The Delegation flag for the role assignment */
		canDelegate?: boolean | null;

		/** The principal ID. */
		principalId?: string | null;

		/** The principal type of the assigned principal ID. */
		principalType?: RoleAssignmentPropertiesPrincipalType | null;

		/** The role definition ID. */
		roleDefinitionId?: string | null;

		/** The role assignment scope. */
		scope?: string | null;
	}

	/** Role assignment properties with scope. */
	export interface RoleAssignmentPropertiesWithScopeFormProperties {

		/** The Delegation flag for the role assignment */
		canDelegate: FormControl<boolean | null | undefined>,

		/** The principal ID. */
		principalId: FormControl<string | null | undefined>,

		/** The principal type of the assigned principal ID. */
		principalType: FormControl<RoleAssignmentPropertiesPrincipalType | null | undefined>,

		/** The role definition ID. */
		roleDefinitionId: FormControl<string | null | undefined>,

		/** The role assignment scope. */
		scope: FormControl<string | null | undefined>,
	}
	export function CreateRoleAssignmentPropertiesWithScopeFormGroup() {
		return new FormGroup<RoleAssignmentPropertiesWithScopeFormProperties>({
			canDelegate: new FormControl<boolean | null | undefined>(undefined),
			principalId: new FormControl<string | null | undefined>(undefined),
			principalType: new FormControl<RoleAssignmentPropertiesPrincipalType | null | undefined>(undefined),
			roleDefinitionId: new FormControl<string | null | undefined>(undefined),
			scope: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Gets all role assignments for the subscription.
		 * Get subscriptions/{subscriptionId}/providers/Microsoft.Authorization/roleAssignments
		 * @param {string} filter The filter to apply on the operation. Use $filter=atScope() to return all role assignments at or above the scope. Use $filter=principalId eq {id} to return all role assignments at, above or below the scope for the specified principal.
		 * @param {string} api_version The API version to use for this operation.
		 * @param {string} subscriptionId The ID of the target subscription.
		 * @return {RoleAssignmentListResult} OK - Returns an array of role assignments.
		 */
		RoleAssignments_List(filter: string | null | undefined, api_version: string, subscriptionId: string): Observable<RoleAssignmentListResult> {
			return this.http.get<RoleAssignmentListResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/providers/Microsoft.Authorization/roleAssignments?filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Gets role assignments for a resource group.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Authorization/roleAssignments
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} filter The filter to apply on the operation. Use $filter=atScope() to return all role assignments at or above the scope. Use $filter=principalId eq {id} to return all role assignments at, above or below the scope for the specified principal.
		 * @param {string} api_version The API version to use for this operation.
		 * @param {string} subscriptionId The ID of the target subscription.
		 * @return {RoleAssignmentListResult} OK - Returns an array of role assignments.
		 */
		RoleAssignments_ListForResourceGroup(resourceGroupName: string, filter: string | null | undefined, api_version: string, subscriptionId: string): Observable<RoleAssignmentListResult> {
			return this.http.get<RoleAssignmentListResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Authorization/roleAssignments&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Gets role assignments for a resource.
		 * Get subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{parentResourcePath}/{resourceType}/{resourceName}/providers/Microsoft.Authorization/roleAssignments
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} resourceProviderNamespace The namespace of the resource provider.
		 * @param {string} parentResourcePath The parent resource identity.
		 * @param {string} resourceType The resource type of the resource.
		 * @param {string} resourceName The name of the resource to get role assignments for.
		 * @param {string} filter The filter to apply on the operation. Use $filter=atScope() to return all role assignments at or above the scope. Use $filter=principalId eq {id} to return all role assignments at, above or below the scope for the specified principal.
		 * @param {string} api_version The API version to use for this operation.
		 * @param {string} subscriptionId The ID of the target subscription.
		 * @return {RoleAssignmentListResult} OK - Returns an array of role assignments.
		 */
		RoleAssignments_ListForResource(resourceGroupName: string, resourceProviderNamespace: string, parentResourcePath: string, resourceType: string, resourceName: string, filter: string | null | undefined, api_version: string, subscriptionId: string): Observable<RoleAssignmentListResult> {
			return this.http.get<RoleAssignmentListResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourcegroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/' + (resourceProviderNamespace == null ? '' : encodeURIComponent(resourceProviderNamespace)) + '/' + (parentResourcePath == null ? '' : encodeURIComponent(parentResourcePath)) + '/' + (resourceType == null ? '' : encodeURIComponent(resourceType)) + '/' + (resourceName == null ? '' : encodeURIComponent(resourceName)) + '/providers/Microsoft.Authorization/roleAssignments&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Gets a role assignment by ID.
		 * Get {roleId}
		 * @param {string} roleId The ID of the role assignment to get.
		 * @param {string} api_version The API version to use for this operation.
		 * @return {RoleAssignment} OK - Returns the role assignment.
		 */
		RoleAssignments_GetById(roleId: string, api_version: string): Observable<RoleAssignment> {
			return this.http.get<RoleAssignment>(this.baseUri + (roleId == null ? '' : encodeURIComponent(roleId)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)) + '', {});
		}

		/**
		 * Creates a role assignment by ID.
		 * Put {roleId}
		 * @param {string} roleId The ID of the role assignment to create.
		 * @param {string} api_version The API version to use for this operation.
		 * @param {RoleAssignmentCreateParameters} requestBody Parameters for the role assignment.
		 * @return {void} 
		 */
		RoleAssignments_CreateById(roleId: string, api_version: string, requestBody: RoleAssignmentCreateParameters): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + (roleId == null ? '' : encodeURIComponent(roleId)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)) + '', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Deletes a role assignment.
		 * Delete {roleId}
		 * @param {string} roleId The ID of the role assignment to delete.
		 * @param {string} api_version The API version to use for this operation.
		 * @return {RoleAssignment} OK - Returns information about the role assignment.
		 */
		RoleAssignments_DeleteById(roleId: string, api_version: string): Observable<RoleAssignment> {
			return this.http.delete<RoleAssignment>(this.baseUri + (roleId == null ? '' : encodeURIComponent(roleId)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)) + '', {});
		}

		/**
		 * Gets role assignments for a scope.
		 * Get {scope}/providers/Microsoft.Authorization/roleAssignments
		 * @param {string} scope The scope of the role assignments.
		 * @param {string} filter The filter to apply on the operation. Use $filter=atScope() to return all role assignments at or above the scope. Use $filter=principalId eq {id} to return all role assignments at, above or below the scope for the specified principal.
		 * @param {string} api_version The API version to use for this operation.
		 * @return {RoleAssignmentListResult} OK - Returns an array of role assignments.
		 */
		RoleAssignments_ListForScope(scope: string, filter: string | null | undefined, api_version: string): Observable<RoleAssignmentListResult> {
			return this.http.get<RoleAssignmentListResult>(this.baseUri + (scope == null ? '' : encodeURIComponent(scope)) + '/providers/Microsoft.Authorization/roleAssignments&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)) + '', {});
		}

		/**
		 * Get the specified role assignment.
		 * Get {scope}/providers/Microsoft.Authorization/roleAssignments/{roleAssignmentName}
		 * @param {string} scope The scope of the role assignment.
		 * @param {string} roleAssignmentName The name of the role assignment to get.
		 * @param {string} api_version The API version to use for this operation.
		 * @return {RoleAssignment} OK - Returns information about the role assignment.
		 */
		RoleAssignments_Get(scope: string, roleAssignmentName: string, api_version: string): Observable<RoleAssignment> {
			return this.http.get<RoleAssignment>(this.baseUri + (scope == null ? '' : encodeURIComponent(scope)) + '/providers/Microsoft.Authorization/roleAssignments/' + (roleAssignmentName == null ? '' : encodeURIComponent(roleAssignmentName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)) + '', {});
		}

		/**
		 * Creates a role assignment.
		 * Put {scope}/providers/Microsoft.Authorization/roleAssignments/{roleAssignmentName}
		 * @param {string} scope The scope of the role assignment to create. The scope can be any REST resource instance. For example, use '/subscriptions/{subscription-id}/' for a subscription, '/subscriptions/{subscription-id}/resourceGroups/{resource-group-name}' for a resource group, and '/subscriptions/{subscription-id}/resourceGroups/{resource-group-name}/providers/{resource-provider}/{resource-type}/{resource-name}' for a resource.
		 * @param {string} roleAssignmentName The name of the role assignment to create. It can be any valid GUID.
		 * @param {string} api_version The API version to use for this operation.
		 * @param {RoleAssignmentCreateParameters} requestBody Parameters for the role assignment.
		 * @return {void} 
		 */
		RoleAssignments_Create(scope: string, roleAssignmentName: string, api_version: string, requestBody: RoleAssignmentCreateParameters): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + (scope == null ? '' : encodeURIComponent(scope)) + '/providers/Microsoft.Authorization/roleAssignments/' + (roleAssignmentName == null ? '' : encodeURIComponent(roleAssignmentName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)) + '', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Deletes a role assignment.
		 * Delete {scope}/providers/Microsoft.Authorization/roleAssignments/{roleAssignmentName}
		 * @param {string} scope The scope of the role assignment to delete.
		 * @param {string} roleAssignmentName The name of the role assignment to delete.
		 * @param {string} api_version The API version to use for this operation.
		 * @return {RoleAssignment} OK - Returns information about the role assignment.
		 */
		RoleAssignments_Delete(scope: string, roleAssignmentName: string, api_version: string): Observable<RoleAssignment> {
			return this.http.delete<RoleAssignment>(this.baseUri + (scope == null ? '' : encodeURIComponent(scope)) + '/providers/Microsoft.Authorization/roleAssignments/' + (roleAssignmentName == null ? '' : encodeURIComponent(roleAssignmentName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)) + '', {});
		}
	}

}

