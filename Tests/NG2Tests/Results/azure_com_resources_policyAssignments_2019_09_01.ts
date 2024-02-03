import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** An error response from a policy operation. */
	export interface CloudError {

		/** The resource management error response. */
		error?: any;
	}

	/** An error response from a policy operation. */
	export interface CloudErrorFormProperties {

		/** The resource management error response. */
		error: FormControl<any | null | undefined>,
	}
	export function CreateCloudErrorFormGroup() {
		return new FormGroup<CloudErrorFormProperties>({
			error: new FormControl<any | null | undefined>(undefined),
		});

	}

	export interface ErrorResponse {
	}
	export interface ErrorResponseFormProperties {
	}
	export function CreateErrorResponseFormGroup() {
		return new FormGroup<ErrorResponseFormProperties>({
		});

	}


	/** Identity for the resource. */
	export interface Identity {

		/** The principal ID of the resource identity. */
		principalId?: string | null;

		/** The tenant ID of the resource identity. */
		tenantId?: string | null;

		/** The identity type. This is the only required field when adding a system assigned identity to a resource. */
		type?: IdentityType | null;
	}

	/** Identity for the resource. */
	export interface IdentityFormProperties {

		/** The principal ID of the resource identity. */
		principalId: FormControl<string | null | undefined>,

		/** The tenant ID of the resource identity. */
		tenantId: FormControl<string | null | undefined>,

		/** The identity type. This is the only required field when adding a system assigned identity to a resource. */
		type: FormControl<IdentityType | null | undefined>,
	}
	export function CreateIdentityFormGroup() {
		return new FormGroup<IdentityFormProperties>({
			principalId: new FormControl<string | null | undefined>(undefined),
			tenantId: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<IdentityType | null | undefined>(undefined),
		});

	}

	export enum IdentityType { SystemAssigned = 'SystemAssigned', None = 'None' }


	/** The parameter values for the policy rule. The keys are the parameter names. */
	export interface ParameterValues {
	}

	/** The parameter values for the policy rule. The keys are the parameter names. */
	export interface ParameterValuesFormProperties {
	}
	export function CreateParameterValuesFormGroup() {
		return new FormGroup<ParameterValuesFormProperties>({
		});

	}


	/** The value of a parameter. */
	export interface ParameterValuesValue {

		/** The value of the parameter. */
		value?: string | null;
	}

	/** The value of a parameter. */
	export interface ParameterValuesValueFormProperties {

		/** The value of the parameter. */
		value: FormControl<string | null | undefined>,
	}
	export function CreateParameterValuesValueFormGroup() {
		return new FormGroup<ParameterValuesValueFormProperties>({
			value: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The policy assignment. */
	export interface PolicyAssignment {

		/** The ID of the policy assignment. */
		id?: string | null;

		/** Identity for the resource. */
		identity?: Identity;

		/** The location of the policy assignment. Only required when utilizing managed identity. */
		location?: string | null;

		/** The name of the policy assignment. */
		name?: string | null;

		/** The policy assignment properties. */
		properties?: PolicyAssignmentProperties;

		/** The policy sku. This property is optional, obsolete, and will be ignored. */
		sku?: PolicySku;

		/** The type of the policy assignment. */
		type?: string | null;
	}

	/** The policy assignment. */
	export interface PolicyAssignmentFormProperties {

		/** The ID of the policy assignment. */
		id: FormControl<string | null | undefined>,

		/** The location of the policy assignment. Only required when utilizing managed identity. */
		location: FormControl<string | null | undefined>,

		/** The name of the policy assignment. */
		name: FormControl<string | null | undefined>,

		/** The type of the policy assignment. */
		type: FormControl<string | null | undefined>,
	}
	export function CreatePolicyAssignmentFormGroup() {
		return new FormGroup<PolicyAssignmentFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			location: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** List of policy assignments. */
	export interface PolicyAssignmentListResult {

		/** The URL to use for getting the next set of results. */
		nextLink?: string | null;

		/** An array of policy assignments. */
		value?: Array<PolicyAssignment>;
	}

	/** List of policy assignments. */
	export interface PolicyAssignmentListResultFormProperties {

		/** The URL to use for getting the next set of results. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreatePolicyAssignmentListResultFormGroup() {
		return new FormGroup<PolicyAssignmentListResultFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The policy assignment properties. */
	export interface PolicyAssignmentProperties {

		/** This message will be part of response in case of policy violation. */
		description?: string | null;

		/** The display name of the policy assignment. */
		displayName?: string | null;

		/** The policy assignment enforcement mode. Possible values are Default and DoNotEnforce. */
		enforcementMode?: PolicyAssignmentPropertiesEnforcementMode | null;

		/** The policy assignment metadata. Metadata is an open ended object and is typically a collection of key value pairs. */
		metadata?: string | null;

		/** The policy's excluded scopes. */
		notScopes?: Array<string>;

		/** The parameter values for the policy rule. The keys are the parameter names. */
		parameters?: ParameterValues;

		/** The ID of the policy definition or policy set definition being assigned. */
		policyDefinitionId?: string | null;

		/** The scope for the policy assignment. */
		scope?: string | null;
	}

	/** The policy assignment properties. */
	export interface PolicyAssignmentPropertiesFormProperties {

		/** This message will be part of response in case of policy violation. */
		description: FormControl<string | null | undefined>,

		/** The display name of the policy assignment. */
		displayName: FormControl<string | null | undefined>,

		/** The policy assignment enforcement mode. Possible values are Default and DoNotEnforce. */
		enforcementMode: FormControl<PolicyAssignmentPropertiesEnforcementMode | null | undefined>,

		/** The policy assignment metadata. Metadata is an open ended object and is typically a collection of key value pairs. */
		metadata: FormControl<string | null | undefined>,

		/** The ID of the policy definition or policy set definition being assigned. */
		policyDefinitionId: FormControl<string | null | undefined>,

		/** The scope for the policy assignment. */
		scope: FormControl<string | null | undefined>,
	}
	export function CreatePolicyAssignmentPropertiesFormGroup() {
		return new FormGroup<PolicyAssignmentPropertiesFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			displayName: new FormControl<string | null | undefined>(undefined),
			enforcementMode: new FormControl<PolicyAssignmentPropertiesEnforcementMode | null | undefined>(undefined),
			metadata: new FormControl<string | null | undefined>(undefined),
			policyDefinitionId: new FormControl<string | null | undefined>(undefined),
			scope: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum PolicyAssignmentPropertiesEnforcementMode { Default = 'Default', DoNotEnforce = 'DoNotEnforce' }


	/** The policy sku. This property is optional, obsolete, and will be ignored. */
	export interface PolicySku {

		/**
		 * The name of the policy sku. Possible values are A0 and A1.
		 * Required
		 */
		name: string;

		/** The policy sku tier. Possible values are Free and Standard. */
		tier?: string | null;
	}

	/** The policy sku. This property is optional, obsolete, and will be ignored. */
	export interface PolicySkuFormProperties {

		/**
		 * The name of the policy sku. Possible values are A0 and A1.
		 * Required
		 */
		name: FormControl<string | null | undefined>,

		/** The policy sku tier. Possible values are Free and Standard. */
		tier: FormControl<string | null | undefined>,
	}
	export function CreatePolicySkuFormGroup() {
		return new FormGroup<PolicySkuFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			tier: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Retrieves all policy assignments that apply to a management group.
		 * This operation retrieves the list of all policy assignments applicable to the management group that match the given $filter. Valid values for $filter are: 'atScope()' or 'policyDefinitionId eq '{value}''. If $filter=atScope() is provided, the returned list includes all policy assignments that are assigned to the management group or the management group's ancestors. If $filter=policyDefinitionId eq '{value}' is provided, the returned list includes all policy assignments of the policy definition whose id is {value} that apply to the management group.
		 * Get providers/Microsoft.Management/managementgroups/{managementGroupId}/providers/Microsoft.Authorization/policyAssignments
		 * @param {string} managementGroupId The ID of the management group.
		 * @param {string} filter The filter to apply on the operation. Valid values for $filter are: 'atScope()' or 'policyDefinitionId eq '{value}''. A filter is required when listing policy assignments at management group scope.
		 * @param {string} api_version The API version to use for the operation.
		 * @return {PolicyAssignmentListResult} OK - Returns an array of policy assignments.
		 */
		PolicyAssignments_ListForManagementGroup(managementGroupId: string, filter: string, api_version: string): Observable<PolicyAssignmentListResult> {
			return this.http.get<PolicyAssignmentListResult>(this.baseUri + 'providers/Microsoft.Management/managementgroups/' + (managementGroupId == null ? '' : encodeURIComponent(managementGroupId)) + '/providers/Microsoft.Authorization/policyAssignments&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Retrieves all policy assignments that apply to a subscription.
		 * This operation retrieves the list of all policy assignments associated with the given subscription that match the optional given $filter. Valid values for $filter are: 'atScope()' or 'policyDefinitionId eq '{value}''. If $filter is not provided, the unfiltered list includes all policy assignments associated with the subscription, including those that apply directly or from management groups that contain the given subscription, as well as any applied to objects contained within the subscription. If $filter=atScope() is provided, the returned list includes all policy assignments that apply to the subscription, which is everything in the unfiltered list except those applied to objects contained within the subscription. If $filter=policyDefinitionId eq '{value}' is provided, the returned list includes all policy assignments of the policy definition whose id is {value}.
		 * Get subscriptions/{subscriptionId}/providers/Microsoft.Authorization/policyAssignments
		 * @param {string} filter The filter to apply on the operation. Valid values for $filter are: 'atScope()' or 'policyDefinitionId eq '{value}''. If $filter is not provided, no filtering is performed.
		 * @param {string} api_version The API version to use for the operation.
		 * @param {string} subscriptionId The ID of the target subscription.
		 * @return {PolicyAssignmentListResult} OK - Returns an array of policy assignments.
		 */
		PolicyAssignments_List(filter: string | null | undefined, api_version: string, subscriptionId: string): Observable<PolicyAssignmentListResult> {
			return this.http.get<PolicyAssignmentListResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/providers/Microsoft.Authorization/policyAssignments?filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Retrieves all policy assignments that apply to a resource group.
		 * This operation retrieves the list of all policy assignments associated with the given resource group in the given subscription that match the optional given $filter. Valid values for $filter are: 'atScope()' or 'policyDefinitionId eq '{value}''. If $filter is not provided, the unfiltered list includes all policy assignments associated with the resource group, including those that apply directly or apply from containing scopes, as well as any applied to resources contained within the resource group. If $filter=atScope() is provided, the returned list includes all policy assignments that apply to the resource group, which is everything in the unfiltered list except those applied to resources contained within the resource group. If $filter=policyDefinitionId eq '{value}' is provided, the returned list includes all policy assignments of the policy definition whose id is {value} that apply to the resource group.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Authorization/policyAssignments
		 * @param {string} resourceGroupName The name of the resource group that contains policy assignments.
		 * @param {string} filter The filter to apply on the operation. Valid values for $filter are: 'atScope()' or 'policyDefinitionId eq '{value}''. If $filter is not provided, no filtering is performed.
		 * @param {string} api_version The API version to use for the operation.
		 * @param {string} subscriptionId The ID of the target subscription.
		 * @return {PolicyAssignmentListResult} OK - Returns an array of policy assignments.
		 */
		PolicyAssignments_ListForResourceGroup(resourceGroupName: string, filter: string | null | undefined, api_version: string, subscriptionId: string): Observable<PolicyAssignmentListResult> {
			return this.http.get<PolicyAssignmentListResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Authorization/policyAssignments&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Retrieves all policy assignments that apply to a resource.
		 * This operation retrieves the list of all policy assignments associated with the specified resource in the given resource group and subscription that match the optional given $filter. Valid values for $filter are: 'atScope()' or 'policyDefinitionId eq '{value}''. If $filter is not provided, the unfiltered list includes all policy assignments associated with the resource, including those that apply directly or from all containing scopes, as well as any applied to resources contained within the resource. If $filter=atScope() is provided, the returned list includes all policy assignments that apply to the resource, which is everything in the unfiltered list except those applied to resources contained within the resource. If $filter=policyDefinitionId eq '{value}' is provided, the returned list includes all policy assignments of the policy definition whose id is {value} that apply to the resource. Three parameters plus the resource name are used to identify a specific resource. If the resource is not part of a parent resource (the more common case), the parent resource path should not be provided (or provided as ''). For example a web app could be specified as ({resourceProviderNamespace} == 'Microsoft.Web', {parentResourcePath} == '', {resourceType} == 'sites', {resourceName} == 'MyWebApp'). If the resource is part of a parent resource, then all parameters should be provided. For example a virtual machine DNS name could be specified as ({resourceProviderNamespace} == 'Microsoft.Compute', {parentResourcePath} == 'virtualMachines/MyVirtualMachine', {resourceType} == 'domainNames', {resourceName} == 'MyComputerName'). A convenient alternative to providing the namespace and type name separately is to provide both in the {resourceType} parameter, format: ({resourceProviderNamespace} == '', {parentResourcePath} == '', {resourceType} == 'Microsoft.Web/sites', {resourceName} == 'MyWebApp').
		 * Get subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{parentResourcePath}/{resourceType}/{resourceName}/providers/Microsoft.Authorization/policyAssignments
		 * @param {string} resourceGroupName The name of the resource group containing the resource.
		 * @param {string} resourceProviderNamespace The namespace of the resource provider. For example, the namespace of a virtual machine is Microsoft.Compute (from Microsoft.Compute/virtualMachines)
		 * @param {string} parentResourcePath The parent resource path. Use empty string if there is none.
		 * @param {string} resourceType The resource type name. For example the type name of a web app is 'sites' (from Microsoft.Web/sites).
		 * @param {string} resourceName The name of the resource.
		 * @param {string} filter The filter to apply on the operation. Valid values for $filter are: 'atScope()' or 'policyDefinitionId eq '{value}''. If $filter is not provided, no filtering is performed.
		 * @param {string} api_version The API version to use for the operation.
		 * @param {string} subscriptionId The ID of the target subscription.
		 * @return {PolicyAssignmentListResult} OK - Returns an array of policy assignments.
		 */
		PolicyAssignments_ListForResource(resourceGroupName: string, resourceProviderNamespace: string, parentResourcePath: string, resourceType: string, resourceName: string, filter: string | null | undefined, api_version: string, subscriptionId: string): Observable<PolicyAssignmentListResult> {
			return this.http.get<PolicyAssignmentListResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourcegroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/' + (resourceProviderNamespace == null ? '' : encodeURIComponent(resourceProviderNamespace)) + '/' + (parentResourcePath == null ? '' : encodeURIComponent(parentResourcePath)) + '/' + (resourceType == null ? '' : encodeURIComponent(resourceType)) + '/' + (resourceName == null ? '' : encodeURIComponent(resourceName)) + '/providers/Microsoft.Authorization/policyAssignments&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Retrieves the policy assignment with the given ID.
		 * The operation retrieves the policy assignment with the given ID. Policy assignment IDs have this format: '{scope}/providers/Microsoft.Authorization/policyAssignments/{policyAssignmentName}'. Valid scopes are: management group (format: '/providers/Microsoft.Management/managementGroups/{managementGroup}'), subscription (format: '/subscriptions/{subscriptionId}'), resource group (format: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}', or resource (format: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/[{parentResourcePath}/]{resourceType}/{resourceName}'.
		 * Get {policyAssignmentId}
		 * @param {string} policyAssignmentId The ID of the policy assignment to get. Use the format '{scope}/providers/Microsoft.Authorization/policyAssignments/{policyAssignmentName}'.
		 * @param {string} api_version The API version to use for the operation.
		 * @return {PolicyAssignment} OK - Returns information about the policy assignment.
		 */
		PolicyAssignments_GetById(policyAssignmentId: string, api_version: string): Observable<PolicyAssignment> {
			return this.http.get<PolicyAssignment>(this.baseUri + (policyAssignmentId == null ? '' : encodeURIComponent(policyAssignmentId)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)) + '', {});
		}

		/**
		 * Creates or updates a policy assignment.
		 * This operation creates or updates the policy assignment with the given ID. Policy assignments made on a scope apply to all resources contained in that scope. For example, when you assign a policy to a resource group that policy applies to all resources in the group. Policy assignment IDs have this format: '{scope}/providers/Microsoft.Authorization/policyAssignments/{policyAssignmentName}'. Valid scopes are: management group (format: '/providers/Microsoft.Management/managementGroups/{managementGroup}'), subscription (format: '/subscriptions/{subscriptionId}'), resource group (format: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}', or resource (format: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/[{parentResourcePath}/]{resourceType}/{resourceName}'.
		 * Put {policyAssignmentId}
		 * @param {string} policyAssignmentId The ID of the policy assignment to create. Use the format '{scope}/providers/Microsoft.Authorization/policyAssignments/{policyAssignmentName}'.
		 * @param {string} api_version The API version to use for the operation.
		 * @param {PolicyAssignment} requestBody Parameters for policy assignment.
		 * @return {void} 
		 */
		PolicyAssignments_CreateById(policyAssignmentId: string, api_version: string, requestBody: PolicyAssignment): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + (policyAssignmentId == null ? '' : encodeURIComponent(policyAssignmentId)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)) + '', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Deletes a policy assignment.
		 * This operation deletes the policy with the given ID. Policy assignment IDs have this format: '{scope}/providers/Microsoft.Authorization/policyAssignments/{policyAssignmentName}'. Valid formats for {scope} are: '/providers/Microsoft.Management/managementGroups/{managementGroup}' (management group), '/subscriptions/{subscriptionId}' (subscription), '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}' (resource group), or '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/[{parentResourcePath}/]{resourceType}/{resourceName}' (resource).
		 * Delete {policyAssignmentId}
		 * @param {string} policyAssignmentId The ID of the policy assignment to delete. Use the format '{scope}/providers/Microsoft.Authorization/policyAssignments/{policyAssignmentName}'.
		 * @param {string} api_version The API version to use for the operation.
		 * @return {PolicyAssignment} OK - Returns information about the policy assignment.
		 */
		PolicyAssignments_DeleteById(policyAssignmentId: string, api_version: string): Observable<PolicyAssignment> {
			return this.http.delete<PolicyAssignment>(this.baseUri + (policyAssignmentId == null ? '' : encodeURIComponent(policyAssignmentId)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)) + '', {});
		}

		/**
		 * Retrieves a policy assignment.
		 * This operation retrieves a single policy assignment, given its name and the scope it was created at.
		 * Get {scope}/providers/Microsoft.Authorization/policyAssignments/{policyAssignmentName}
		 * @param {string} scope The scope of the policy assignment. Valid scopes are: management group (format: '/providers/Microsoft.Management/managementGroups/{managementGroup}'), subscription (format: '/subscriptions/{subscriptionId}'), resource group (format: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}', or resource (format: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/[{parentResourcePath}/]{resourceType}/{resourceName}'
		 * @param {string} policyAssignmentName The name of the policy assignment to get.
		 * @param {string} api_version The API version to use for the operation.
		 * @return {PolicyAssignment} OK - Returns information about the policy assignment.
		 */
		PolicyAssignments_Get(scope: string, policyAssignmentName: string, api_version: string): Observable<PolicyAssignment> {
			return this.http.get<PolicyAssignment>(this.baseUri + (scope == null ? '' : encodeURIComponent(scope)) + '/providers/Microsoft.Authorization/policyAssignments/' + (policyAssignmentName == null ? '' : encodeURIComponent(policyAssignmentName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)) + '', {});
		}

		/**
		 * Creates or updates a policy assignment.
		 * This operation creates or updates a policy assignment with the given scope and name. Policy assignments apply to all resources contained within their scope. For example, when you assign a policy at resource group scope, that policy applies to all resources in the group.
		 * Put {scope}/providers/Microsoft.Authorization/policyAssignments/{policyAssignmentName}
		 * @param {string} scope The scope of the policy assignment. Valid scopes are: management group (format: '/providers/Microsoft.Management/managementGroups/{managementGroup}'), subscription (format: '/subscriptions/{subscriptionId}'), resource group (format: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}', or resource (format: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/[{parentResourcePath}/]{resourceType}/{resourceName}'
		 * @param {string} policyAssignmentName The name of the policy assignment.
		 * @param {string} api_version The API version to use for the operation.
		 * @param {PolicyAssignment} requestBody Parameters for the policy assignment.
		 * @return {void} 
		 */
		PolicyAssignments_Create(scope: string, policyAssignmentName: string, api_version: string, requestBody: PolicyAssignment): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + (scope == null ? '' : encodeURIComponent(scope)) + '/providers/Microsoft.Authorization/policyAssignments/' + (policyAssignmentName == null ? '' : encodeURIComponent(policyAssignmentName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)) + '', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Deletes a policy assignment.
		 * This operation deletes a policy assignment, given its name and the scope it was created in. The scope of a policy assignment is the part of its ID preceding '/providers/Microsoft.Authorization/policyAssignments/{policyAssignmentName}'.
		 * Delete {scope}/providers/Microsoft.Authorization/policyAssignments/{policyAssignmentName}
		 * @param {string} scope The scope of the policy assignment. Valid scopes are: management group (format: '/providers/Microsoft.Management/managementGroups/{managementGroup}'), subscription (format: '/subscriptions/{subscriptionId}'), resource group (format: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}', or resource (format: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/[{parentResourcePath}/]{resourceType}/{resourceName}'
		 * @param {string} policyAssignmentName The name of the policy assignment to delete.
		 * @param {string} api_version The API version to use for the operation.
		 * @return {PolicyAssignment} OK - Returns information about the deleted assignment.
		 */
		PolicyAssignments_Delete(scope: string, policyAssignmentName: string, api_version: string): Observable<PolicyAssignment> {
			return this.http.delete<PolicyAssignment>(this.baseUri + (scope == null ? '' : encodeURIComponent(scope)) + '/providers/Microsoft.Authorization/policyAssignments/' + (policyAssignmentName == null ? '' : encodeURIComponent(policyAssignmentName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)) + '', {});
		}
	}

}

