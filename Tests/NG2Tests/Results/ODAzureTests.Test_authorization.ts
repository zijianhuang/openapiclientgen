import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** Role definition permissions. */
	export interface Permission {

		/** Allowed actions. */
		actions?: Array<string>;

		/** Denied actions. */
		notActions?: Array<string>;
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


	/** Operation */
	export interface ProviderOperation {

		/** The operation description. */
		description?: string | null;

		/** The operation display name. */
		displayName?: string | null;

		/** The operation name. */
		name?: string | null;

		/** The operation origin. */
		origin?: string | null;

		/** The operation properties. */
		properties?: string | null;
	}

	/** Operation */
	export interface ProviderOperationFormProperties {

		/** The operation description. */
		description: FormControl<string | null | undefined>,

		/** The operation display name. */
		displayName: FormControl<string | null | undefined>,

		/** The operation name. */
		name: FormControl<string | null | undefined>,

		/** The operation origin. */
		origin: FormControl<string | null | undefined>,

		/** The operation properties. */
		properties: FormControl<string | null | undefined>,
	}
	export function CreateProviderOperationFormGroup() {
		return new FormGroup<ProviderOperationFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			displayName: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			origin: new FormControl<string | null | undefined>(undefined),
			properties: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Provider Operations metadata */
	export interface ProviderOperationsMetadata {

		/** The provider display name. */
		displayName?: string | null;

		/** The provider id. */
		id?: string | null;

		/** The provider name. */
		name?: string | null;

		/** The provider operations. */
		operations?: Array<ProviderOperation>;

		/** The provider resource types */
		resourceTypes?: Array<ResourceType>;

		/** The provider type. */
		type?: string | null;
	}

	/** Provider Operations metadata */
	export interface ProviderOperationsMetadataFormProperties {

		/** The provider display name. */
		displayName: FormControl<string | null | undefined>,

		/** The provider id. */
		id: FormControl<string | null | undefined>,

		/** The provider name. */
		name: FormControl<string | null | undefined>,

		/** The provider type. */
		type: FormControl<string | null | undefined>,
	}
	export function CreateProviderOperationsMetadataFormGroup() {
		return new FormGroup<ProviderOperationsMetadataFormProperties>({
			displayName: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Resource Type */
	export interface ResourceType {

		/** The resource type display name. */
		displayName?: string | null;

		/** The resource type name. */
		name?: string | null;

		/** The resource type operations. */
		operations?: Array<ProviderOperation>;
	}

	/** Resource Type */
	export interface ResourceTypeFormProperties {

		/** The resource type display name. */
		displayName: FormControl<string | null | undefined>,

		/** The resource type name. */
		name: FormControl<string | null | undefined>,
	}
	export function CreateResourceTypeFormGroup() {
		return new FormGroup<ResourceTypeFormProperties>({
			displayName: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Provider operations metadata list */
	export interface ProviderOperationsMetadataListResult {

		/** The URL to use for getting the next set of results. */
		nextLink?: string | null;

		/** The list of providers. */
		value?: Array<ProviderOperationsMetadata>;
	}

	/** Provider operations metadata list */
	export interface ProviderOperationsMetadataListResultFormProperties {

		/** The URL to use for getting the next set of results. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateProviderOperationsMetadataListResultFormGroup() {
		return new FormGroup<ProviderOperationsMetadataListResultFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


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

		/** Returns role assignment of the specific principal. */
		principalId?: string | null;
	}

	/** Role Assignments filter */
	export interface RoleAssignmentFilterFormProperties {

		/** Returns role assignment of the specific principal. */
		principalId: FormControl<string | null | undefined>,
	}
	export function CreateRoleAssignmentFilterFormGroup() {
		return new FormGroup<RoleAssignmentFilterFormProperties>({
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

		/**
		 * The principal ID assigned to the role. This maps to the ID inside the Active Directory. It can point to a user, service principal, or security group.
		 * Required
		 */
		principalId: string;

		/**
		 * The role definition ID used in the role assignment.
		 * Required
		 */
		roleDefinitionId: string;
	}

	/** Role assignment properties. */
	export interface RoleAssignmentPropertiesFormProperties {

		/**
		 * The principal ID assigned to the role. This maps to the ID inside the Active Directory. It can point to a user, service principal, or security group.
		 * Required
		 */
		principalId: FormControl<string | null | undefined>,

		/**
		 * The role definition ID used in the role assignment.
		 * Required
		 */
		roleDefinitionId: FormControl<string | null | undefined>,
	}
	export function CreateRoleAssignmentPropertiesFormGroup() {
		return new FormGroup<RoleAssignmentPropertiesFormProperties>({
			principalId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			roleDefinitionId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Role assignment properties with scope. */
	export interface RoleAssignmentPropertiesWithScope {

		/** The principal ID. */
		principalId?: string | null;

		/** The role definition ID. */
		roleDefinitionId?: string | null;

		/** The role assignment scope. */
		scope?: string | null;
	}

	/** Role assignment properties with scope. */
	export interface RoleAssignmentPropertiesWithScopeFormProperties {

		/** The principal ID. */
		principalId: FormControl<string | null | undefined>,

		/** The role definition ID. */
		roleDefinitionId: FormControl<string | null | undefined>,

		/** The role assignment scope. */
		scope: FormControl<string | null | undefined>,
	}
	export function CreateRoleAssignmentPropertiesWithScopeFormGroup() {
		return new FormGroup<RoleAssignmentPropertiesWithScopeFormProperties>({
			principalId: new FormControl<string | null | undefined>(undefined),
			roleDefinitionId: new FormControl<string | null | undefined>(undefined),
			scope: new FormControl<string | null | undefined>(undefined),
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
	}

	/** Role Definitions filter */
	export interface RoleDefinitionFilterFormProperties {

		/** Returns role definition with the specific name. */
		roleName: FormControl<string | null | undefined>,
	}
	export function CreateRoleDefinitionFilterFormGroup() {
		return new FormGroup<RoleDefinitionFilterFormProperties>({
			roleName: new FormControl<string | null | undefined>(undefined),
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
		 * Elevates access for a Global Administrator.
		 * Post providers/Microsoft.Authorization/elevateAccess
		 * @param {string} api_version The API version to use for this operation.
		 * @return {void} OK - Returns an HttpResponseMessage with HttpStatusCode 200.
		 */
		ElevateAccess_Post(api_version: string): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'providers/Microsoft.Authorization/elevateAccess?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets provider operations metadata for all resource providers.
		 * Get providers/Microsoft.Authorization/providerOperations
		 * @param {string} api_version The API version to use for this operation.
		 * @param {string} expand Specifies whether to expand the values.
		 * @return {ProviderOperationsMetadataListResult} OK - Returns an array of the operations metadata.
		 */
		ProviderOperationsMetadata_List(api_version: string, expand: string | null | undefined): Observable<ProviderOperationsMetadataListResult> {
			return this.http.get<ProviderOperationsMetadataListResult>(this.baseUri + 'providers/Microsoft.Authorization/providerOperations?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)) + '&expand=' + (expand == null ? '' : encodeURIComponent(expand)), {});
		}

		/**
		 * Gets provider operations metadata for the specified resource provider.
		 * Get providers/Microsoft.Authorization/providerOperations/{resourceProviderNamespace}
		 * @param {string} resourceProviderNamespace The namespace of the resource provider.
		 * @param {string} api_version The API version to use for the operation.
		 * @param {string} expand Specifies whether to expand the values.
		 * @return {ProviderOperationsMetadata} OK - Returns the operations metadata.
		 */
		ProviderOperationsMetadata_Get(resourceProviderNamespace: string, api_version: string, expand: string | null | undefined): Observable<ProviderOperationsMetadata> {
			return this.http.get<ProviderOperationsMetadata>(this.baseUri + 'providers/Microsoft.Authorization/providerOperations/' + (resourceProviderNamespace == null ? '' : encodeURIComponent(resourceProviderNamespace)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)) + '&expand=' + (expand == null ? '' : encodeURIComponent(expand)), {});
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
		 * Gets all permissions the caller has for a resource group.
		 * Get subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.Authorization/permissions
		 * @param {string} resourceGroupName The name of the resource group to get the permissions for. The name is case insensitive.
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
		 * @param {string} resourceGroupName The name of the resource group containing the resource. The name is case insensitive.
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
		 * Get {roleAssignmentId}
		 * @param {string} roleAssignmentId The fully qualified ID of the role assignment, including the scope, resource name and resource type. Use the format, /{scope}/providers/Microsoft.Authorization/roleAssignments/{roleAssignmentName}. Example: /subscriptions/{subId}/resourcegroups/{rgname}//providers/Microsoft.Authorization/roleAssignments/{roleAssignmentName}.
		 * @param {string} api_version The API version to use for this operation.
		 * @return {RoleAssignment} OK - Returns the role assignment.
		 */
		RoleAssignments_GetById(roleAssignmentId: string, api_version: string): Observable<RoleAssignment> {
			return this.http.get<RoleAssignment>(this.baseUri + (roleAssignmentId == null ? '' : encodeURIComponent(roleAssignmentId)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)) + '', {});
		}

		/**
		 * Creates a role assignment by ID.
		 * Put {roleAssignmentId}
		 * @param {string} roleAssignmentId The fully qualified ID of the role assignment, including the scope, resource name and resource type. Use the format, /{scope}/providers/Microsoft.Authorization/roleAssignments/{roleAssignmentName}. Example: /subscriptions/{subId}/resourcegroups/{rgname}//providers/Microsoft.Authorization/roleAssignments/{roleAssignmentName}.
		 * @param {string} api_version The API version to use for this operation.
		 * @param {RoleAssignmentCreateParameters} requestBody Parameters for the role assignment.
		 * @return {void} 
		 */
		RoleAssignments_CreateById(roleAssignmentId: string, api_version: string, requestBody: RoleAssignmentCreateParameters): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + (roleAssignmentId == null ? '' : encodeURIComponent(roleAssignmentId)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)) + '', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Deletes a role assignment.
		 * Delete {roleAssignmentId}
		 * @param {string} roleAssignmentId The fully qualified ID of the role assignment, including the scope, resource name and resource type. Use the format, /{scope}/providers/Microsoft.Authorization/roleAssignments/{roleAssignmentName}. Example: /subscriptions/{subId}/resourcegroups/{rgname}//providers/Microsoft.Authorization/roleAssignments/{roleAssignmentName}.
		 * @param {string} api_version The API version to use for this operation.
		 * @return {RoleAssignment} OK - Returns information about the role assignment.
		 */
		RoleAssignments_DeleteById(roleAssignmentId: string, api_version: string): Observable<RoleAssignment> {
			return this.http.delete<RoleAssignment>(this.baseUri + (roleAssignmentId == null ? '' : encodeURIComponent(roleAssignmentId)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)) + '', {});
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

