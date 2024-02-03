import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** The policy assignment. */
	export interface PolicyAssignment {

		/** The ID of the policy assignment. */
		id?: string | null;

		/** The name of the policy assignment. */
		name?: string | null;

		/** The policy assignment properties. */
		properties?: PolicyAssignmentProperties;

		/** The type of the policy assignment. */
		type?: string | null;
	}

	/** The policy assignment. */
	export interface PolicyAssignmentFormProperties {

		/** The ID of the policy assignment. */
		id: FormControl<string | null | undefined>,

		/** The name of the policy assignment. */
		name: FormControl<string | null | undefined>,

		/** The type of the policy assignment. */
		type: FormControl<string | null | undefined>,
	}
	export function CreatePolicyAssignmentFormGroup() {
		return new FormGroup<PolicyAssignmentFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
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

		/** The display name of the policy assignment. */
		displayName?: string | null;

		/** The ID of the policy definition. */
		policyDefinitionId?: string | null;

		/** The scope for the policy assignment. */
		scope?: string | null;
	}

	/** The policy assignment properties. */
	export interface PolicyAssignmentPropertiesFormProperties {

		/** The display name of the policy assignment. */
		displayName: FormControl<string | null | undefined>,

		/** The ID of the policy definition. */
		policyDefinitionId: FormControl<string | null | undefined>,

		/** The scope for the policy assignment. */
		scope: FormControl<string | null | undefined>,
	}
	export function CreatePolicyAssignmentPropertiesFormGroup() {
		return new FormGroup<PolicyAssignmentPropertiesFormProperties>({
			displayName: new FormControl<string | null | undefined>(undefined),
			policyDefinitionId: new FormControl<string | null | undefined>(undefined),
			scope: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The policy definition. */
	export interface PolicyDefinition {

		/** The ID of the policy definition. */
		id?: string | null;

		/** The name of the policy definition. If you do not specify a value for name, the value is inferred from the name value in the request URI. */
		name?: string | null;

		/** The policy definition properties. */
		properties?: PolicyDefinitionProperties;
	}

	/** The policy definition. */
	export interface PolicyDefinitionFormProperties {

		/** The ID of the policy definition. */
		id: FormControl<string | null | undefined>,

		/** The name of the policy definition. If you do not specify a value for name, the value is inferred from the name value in the request URI. */
		name: FormControl<string | null | undefined>,
	}
	export function CreatePolicyDefinitionFormGroup() {
		return new FormGroup<PolicyDefinitionFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** List of policy definitions. */
	export interface PolicyDefinitionListResult {

		/** The URL to use for getting the next set of results. */
		nextLink?: string | null;

		/** An array of policy definitions. */
		value?: Array<PolicyDefinition>;
	}

	/** List of policy definitions. */
	export interface PolicyDefinitionListResultFormProperties {

		/** The URL to use for getting the next set of results. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreatePolicyDefinitionListResultFormGroup() {
		return new FormGroup<PolicyDefinitionListResultFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The policy definition properties. */
	export interface PolicyDefinitionProperties {

		/** The policy definition description. */
		description?: string | null;

		/** The display name of the policy definition. */
		displayName?: string | null;

		/** The policy rule. */
		policyRule?: string | null;

		/** The type of policy definition. Possible values are NotSpecified, BuiltIn, and Custom. */
		policyType?: PolicyDefinitionPropertiesPolicyType | null;
	}

	/** The policy definition properties. */
	export interface PolicyDefinitionPropertiesFormProperties {

		/** The policy definition description. */
		description: FormControl<string | null | undefined>,

		/** The display name of the policy definition. */
		displayName: FormControl<string | null | undefined>,

		/** The policy rule. */
		policyRule: FormControl<string | null | undefined>,

		/** The type of policy definition. Possible values are NotSpecified, BuiltIn, and Custom. */
		policyType: FormControl<PolicyDefinitionPropertiesPolicyType | null | undefined>,
	}
	export function CreatePolicyDefinitionPropertiesFormGroup() {
		return new FormGroup<PolicyDefinitionPropertiesFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			displayName: new FormControl<string | null | undefined>(undefined),
			policyRule: new FormControl<string | null | undefined>(undefined),
			policyType: new FormControl<PolicyDefinitionPropertiesPolicyType | null | undefined>(undefined),
		});

	}

	export enum PolicyDefinitionPropertiesPolicyType { NotSpecified = 'NotSpecified', BuiltIn = 'BuiltIn', Custom = 'Custom' }

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Gets all the policy assignments for a subscription.
		 * Get subscriptions/{subscriptionId}/providers/Microsoft.Authorization/policyassignments
		 * @param {string} filter The filter to apply on the operation.
		 * @param {string} api_version The API version to use for the operation.
		 * @param {string} subscriptionId The ID of the target subscription.
		 * @return {PolicyAssignmentListResult} OK - Returns an array of policy assignments.
		 */
		PolicyAssignments_List(filter: string | null | undefined, api_version: string, subscriptionId: string): Observable<PolicyAssignmentListResult> {
			return this.http.get<PolicyAssignmentListResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/providers/Microsoft.Authorization/policyassignments?filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Gets all the policy definitions for a subscription.
		 * Get subscriptions/{subscriptionId}/providers/Microsoft.Authorization/policydefinitions
		 * @param {string} filter The filter to apply on the operation.
		 * @param {string} api_version The API version to use for the operation.
		 * @param {string} subscriptionId The ID of the target subscription.
		 * @return {PolicyDefinitionListResult} OK - Returns ana array of policy definitions.
		 */
		PolicyDefinitions_List(filter: string | null | undefined, api_version: string, subscriptionId: string): Observable<PolicyDefinitionListResult> {
			return this.http.get<PolicyDefinitionListResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/providers/Microsoft.Authorization/policydefinitions?filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Gets the policy definition.
		 * Get subscriptions/{subscriptionId}/providers/Microsoft.Authorization/policydefinitions/{policyDefinitionName}
		 * @param {string} policyDefinitionName The name of the policy definition to get.
		 * @param {string} api_version The API version to use for the operation.
		 * @param {string} subscriptionId The ID of the target subscription.
		 * @return {PolicyDefinition} OK - Returns information about the policy definition.
		 */
		PolicyDefinitions_Get(policyDefinitionName: string, api_version: string, subscriptionId: string): Observable<PolicyDefinition> {
			return this.http.get<PolicyDefinition>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/providers/Microsoft.Authorization/policydefinitions/' + (policyDefinitionName == null ? '' : encodeURIComponent(policyDefinitionName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Creates or updates a policy definition.
		 * Put subscriptions/{subscriptionId}/providers/Microsoft.Authorization/policydefinitions/{policyDefinitionName}
		 * @param {string} policyDefinitionName The name of the policy definition to create.
		 * @param {string} api_version The API version to use for the operation.
		 * @param {string} subscriptionId The ID of the target subscription.
		 * @param {PolicyDefinition} requestBody The policy definition properties.
		 * @return {void} 
		 */
		PolicyDefinitions_CreateOrUpdate(policyDefinitionName: string, api_version: string, subscriptionId: string, requestBody: PolicyDefinition): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/providers/Microsoft.Authorization/policydefinitions/' + (policyDefinitionName == null ? '' : encodeURIComponent(policyDefinitionName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Deletes a policy definition.
		 * Delete subscriptions/{subscriptionId}/providers/Microsoft.Authorization/policydefinitions/{policyDefinitionName}
		 * @param {string} policyDefinitionName The name of the policy definition to delete.
		 * @param {string} api_version The API version to use for the operation.
		 * @param {string} subscriptionId The ID of the target subscription.
		 * @return {void} OK
		 */
		PolicyDefinitions_Delete(policyDefinitionName: string, api_version: string, subscriptionId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/providers/Microsoft.Authorization/policydefinitions/' + (policyDefinitionName == null ? '' : encodeURIComponent(policyDefinitionName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets policy assignments for the resource group.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Authorization/policyAssignments
		 * @param {string} resourceGroupName The name of the resource group that contains policy assignments.
		 * @param {string} filter The filter to apply on the operation.
		 * @param {string} api_version The API version to use for the operation.
		 * @param {string} subscriptionId The ID of the target subscription.
		 * @return {PolicyAssignmentListResult} OK - Returns an array of policy assignments.
		 */
		PolicyAssignments_ListForResourceGroup(resourceGroupName: string, filter: string | null | undefined, api_version: string, subscriptionId: string): Observable<PolicyAssignmentListResult> {
			return this.http.get<PolicyAssignmentListResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Authorization/policyAssignments&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Gets policy assignments for a resource.
		 * Get subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{parentResourcePath}/{resourceType}/{resourceName}/providers/Microsoft.Authorization/policyassignments
		 * @param {string} resourceGroupName The name of the resource group containing the resource. The name is case insensitive.
		 * @param {string} resourceProviderNamespace The namespace of the resource provider.
		 * @param {string} parentResourcePath The parent resource path.
		 * @param {string} resourceType The resource type.
		 * @param {string} resourceName The name of the resource with policy assignments.
		 * @param {string} filter The filter to apply on the operation.
		 * @param {string} api_version The API version to use for the operation.
		 * @param {string} subscriptionId The ID of the target subscription.
		 * @return {PolicyAssignmentListResult} OK - Returns an array of policy assignments.
		 */
		PolicyAssignments_ListForResource(resourceGroupName: string, resourceProviderNamespace: string, parentResourcePath: string, resourceType: string, resourceName: string, filter: string | null | undefined, api_version: string, subscriptionId: string): Observable<PolicyAssignmentListResult> {
			return this.http.get<PolicyAssignmentListResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourcegroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/' + (resourceProviderNamespace == null ? '' : encodeURIComponent(resourceProviderNamespace)) + '/' + (parentResourcePath == null ? '' : encodeURIComponent(parentResourcePath)) + '/' + (resourceType == null ? '' : encodeURIComponent(resourceType)) + '/' + (resourceName == null ? '' : encodeURIComponent(resourceName)) + '/providers/Microsoft.Authorization/policyassignments&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Gets a policy assignment by ID.
		 * When providing a scope for the assignment, use '/subscriptions/{subscription-id}/' for subscriptions, '/subscriptions/{subscription-id}/resourceGroups/{resource-group-name}' for resource groups, and '/subscriptions/{subscription-id}/resourceGroups/{resource-group-name}/providers/{resource-provider-namespace}/{resource-type}/{resource-name}' for resources.
		 * Get {policyAssignmentId}
		 * @param {string} policyAssignmentId The ID of the policy assignment to get. Use the format '/{scope}/providers/Microsoft.Authorization/policyAssignments/{policy-assignment-name}'.
		 * @param {string} api_version The API version to use for the operation.
		 * @return {PolicyAssignment} OK - Returns information about the policy assignment.
		 */
		PolicyAssignments_GetById(policyAssignmentId: string, api_version: string): Observable<PolicyAssignment> {
			return this.http.get<PolicyAssignment>(this.baseUri + (policyAssignmentId == null ? '' : encodeURIComponent(policyAssignmentId)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)) + '', {});
		}

		/**
		 * Creates a policy assignment by ID.
		 * Policy assignments are inherited by child resources. For example, when you apply a policy to a resource group that policy is assigned to all resources in the group. When providing a scope for the assignment, use '/subscriptions/{subscription-id}/' for subscriptions, '/subscriptions/{subscription-id}/resourceGroups/{resource-group-name}' for resource groups, and '/subscriptions/{subscription-id}/resourceGroups/{resource-group-name}/providers/{resource-provider-namespace}/{resource-type}/{resource-name}' for resources.
		 * Put {policyAssignmentId}
		 * @param {string} policyAssignmentId The ID of the policy assignment to create. Use the format '/{scope}/providers/Microsoft.Authorization/policyAssignments/{policy-assignment-name}'.
		 * @param {string} api_version The API version to use for the operation.
		 * @param {PolicyAssignment} requestBody Parameters for policy assignment.
		 * @return {void} 
		 */
		PolicyAssignments_CreateById(policyAssignmentId: string, api_version: string, requestBody: PolicyAssignment): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + (policyAssignmentId == null ? '' : encodeURIComponent(policyAssignmentId)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)) + '', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Deletes a policy assignment by ID.
		 * When providing a scope for the assignment, use '/subscriptions/{subscription-id}/' for subscriptions, '/subscriptions/{subscription-id}/resourceGroups/{resource-group-name}' for resource groups, and '/subscriptions/{subscription-id}/resourceGroups/{resource-group-name}/providers/{resource-provider-namespace}/{resource-type}/{resource-name}' for resources.
		 * Delete {policyAssignmentId}
		 * @param {string} policyAssignmentId The ID of the policy assignment to delete. Use the format '/{scope}/providers/Microsoft.Authorization/policyAssignments/{policy-assignment-name}'.
		 * @param {string} api_version The API version to use for the operation.
		 * @return {PolicyAssignment} OK - Returns information about the policy assignment.
		 */
		PolicyAssignments_DeleteById(policyAssignmentId: string, api_version: string): Observable<PolicyAssignment> {
			return this.http.delete<PolicyAssignment>(this.baseUri + (policyAssignmentId == null ? '' : encodeURIComponent(policyAssignmentId)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)) + '', {});
		}

		/**
		 * Gets a policy assignment.
		 * Get {scope}/providers/Microsoft.Authorization/policyassignments/{policyAssignmentName}
		 * @param {string} scope The scope of the policy assignment.
		 * @param {string} policyAssignmentName The name of the policy assignment to get.
		 * @param {string} api_version The API version to use for the operation.
		 * @return {PolicyAssignment} OK - Returns information about the policy assignment.
		 */
		PolicyAssignments_Get(scope: string, policyAssignmentName: string, api_version: string): Observable<PolicyAssignment> {
			return this.http.get<PolicyAssignment>(this.baseUri + (scope == null ? '' : encodeURIComponent(scope)) + '/providers/Microsoft.Authorization/policyassignments/' + (policyAssignmentName == null ? '' : encodeURIComponent(policyAssignmentName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)) + '', {});
		}

		/**
		 * Creates a policy assignment.
		 * Policy assignments are inherited by child resources. For example, when you apply a policy to a resource group that policy is assigned to all resources in the group.
		 * Put {scope}/providers/Microsoft.Authorization/policyassignments/{policyAssignmentName}
		 * @param {string} scope The scope of the policy assignment.
		 * @param {string} policyAssignmentName The name of the policy assignment.
		 * @param {string} api_version The API version to use for the operation.
		 * @param {PolicyAssignment} requestBody Parameters for the policy assignment.
		 * @return {void} 
		 */
		PolicyAssignments_Create(scope: string, policyAssignmentName: string, api_version: string, requestBody: PolicyAssignment): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + (scope == null ? '' : encodeURIComponent(scope)) + '/providers/Microsoft.Authorization/policyassignments/' + (policyAssignmentName == null ? '' : encodeURIComponent(policyAssignmentName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)) + '', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Deletes a policy assignment.
		 * Delete {scope}/providers/Microsoft.Authorization/policyassignments/{policyAssignmentName}
		 * @param {string} scope The scope of the policy assignment.
		 * @param {string} policyAssignmentName The name of the policy assignment to delete.
		 * @param {string} api_version The API version to use for the operation.
		 * @return {PolicyAssignment} OK - Returns information about the deleted assignment.
		 */
		PolicyAssignments_Delete(scope: string, policyAssignmentName: string, api_version: string): Observable<PolicyAssignment> {
			return this.http.delete<PolicyAssignment>(this.baseUri + (scope == null ? '' : encodeURIComponent(scope)) + '/providers/Microsoft.Authorization/policyassignments/' + (policyAssignmentName == null ? '' : encodeURIComponent(policyAssignmentName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)) + '', {});
		}
	}

}

