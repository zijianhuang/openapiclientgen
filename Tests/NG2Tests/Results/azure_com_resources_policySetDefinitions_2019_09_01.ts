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


	/** The policy definition group. */
	export interface PolicyDefinitionGroup {

		/** A resource ID of a resource that contains additional metadata about the group. */
		additionalMetadataId?: string | null;

		/** The group's category. */
		category?: string | null;

		/** The group's description. */
		description?: string | null;

		/** The group's display name. */
		displayName?: string | null;

		/**
		 * The name of the group.
		 * Required
		 */
		name: string;
	}

	/** The policy definition group. */
	export interface PolicyDefinitionGroupFormProperties {

		/** A resource ID of a resource that contains additional metadata about the group. */
		additionalMetadataId: FormControl<string | null | undefined>,

		/** The group's category. */
		category: FormControl<string | null | undefined>,

		/** The group's description. */
		description: FormControl<string | null | undefined>,

		/** The group's display name. */
		displayName: FormControl<string | null | undefined>,

		/**
		 * The name of the group.
		 * Required
		 */
		name: FormControl<string | null | undefined>,
	}
	export function CreatePolicyDefinitionGroupFormGroup() {
		return new FormGroup<PolicyDefinitionGroupFormProperties>({
			additionalMetadataId: new FormControl<string | null | undefined>(undefined),
			category: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			displayName: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The policy definition reference. */
	export interface PolicyDefinitionReference {

		/** The name of the groups that this policy definition reference belongs to. */
		groupNames?: Array<string>;

		/** The parameter values for the policy rule. The keys are the parameter names. */
		parameters?: {[id: string]: any };

		/**
		 * The ID of the policy definition or policy set definition.
		 * Required
		 */
		policyDefinitionId: string;

		/** A unique id (within the policy set definition) for this policy definition reference. */
		policyDefinitionReferenceId?: string | null;
	}

	/** The policy definition reference. */
	export interface PolicyDefinitionReferenceFormProperties {

		/** The parameter values for the policy rule. The keys are the parameter names. */
		parameters: FormControl<{[id: string]: any } | null | undefined>,

		/**
		 * The ID of the policy definition or policy set definition.
		 * Required
		 */
		policyDefinitionId: FormControl<string | null | undefined>,

		/** A unique id (within the policy set definition) for this policy definition reference. */
		policyDefinitionReferenceId: FormControl<string | null | undefined>,
	}
	export function CreatePolicyDefinitionReferenceFormGroup() {
		return new FormGroup<PolicyDefinitionReferenceFormProperties>({
			parameters: new FormControl<{[id: string]: any } | null | undefined>(undefined),
			policyDefinitionId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			policyDefinitionReferenceId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The policy set definition. */
	export interface PolicySetDefinition {

		/** The ID of the policy set definition. */
		id?: string | null;

		/** The name of the policy set definition. */
		name?: string | null;

		/** The policy set definition properties. */
		properties?: PolicySetDefinitionProperties;

		/** The type of the resource (Microsoft.Authorization/policySetDefinitions). */
		type?: string | null;
	}

	/** The policy set definition. */
	export interface PolicySetDefinitionFormProperties {

		/** The ID of the policy set definition. */
		id: FormControl<string | null | undefined>,

		/** The name of the policy set definition. */
		name: FormControl<string | null | undefined>,

		/** The type of the resource (Microsoft.Authorization/policySetDefinitions). */
		type: FormControl<string | null | undefined>,
	}
	export function CreatePolicySetDefinitionFormGroup() {
		return new FormGroup<PolicySetDefinitionFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** List of policy set definitions. */
	export interface PolicySetDefinitionListResult {

		/** The URL to use for getting the next set of results. */
		nextLink?: string | null;

		/** An array of policy set definitions. */
		value?: Array<PolicySetDefinition>;
	}

	/** List of policy set definitions. */
	export interface PolicySetDefinitionListResultFormProperties {

		/** The URL to use for getting the next set of results. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreatePolicySetDefinitionListResultFormGroup() {
		return new FormGroup<PolicySetDefinitionListResultFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The policy set definition properties. */
	export interface PolicySetDefinitionProperties {

		/** The policy set definition description. */
		description?: string | null;

		/** The display name of the policy set definition. */
		displayName?: string | null;

		/** The policy set definition metadata.  Metadata is an open ended object and is typically a collection of key value pairs. */
		metadata?: string | null;

		/** The parameter definitions for parameters used in the policy. The keys are the parameter names. */
		parameters?: {[id: string]: any };

		/** The metadata describing groups of policy definition references within the policy set definition. */
		policyDefinitionGroups?: Array<PolicyDefinitionGroup>;

		/**
		 * An array of policy definition references.
		 * Required
		 */
		policyDefinitions: Array<PolicyDefinitionReference>;

		/** The type of policy definition. Possible values are NotSpecified, BuiltIn, Custom, and Static. */
		policyType?: PolicySetDefinitionPropertiesPolicyType | null;
	}

	/** The policy set definition properties. */
	export interface PolicySetDefinitionPropertiesFormProperties {

		/** The policy set definition description. */
		description: FormControl<string | null | undefined>,

		/** The display name of the policy set definition. */
		displayName: FormControl<string | null | undefined>,

		/** The policy set definition metadata.  Metadata is an open ended object and is typically a collection of key value pairs. */
		metadata: FormControl<string | null | undefined>,

		/** The parameter definitions for parameters used in the policy. The keys are the parameter names. */
		parameters: FormControl<{[id: string]: any } | null | undefined>,

		/** The type of policy definition. Possible values are NotSpecified, BuiltIn, Custom, and Static. */
		policyType: FormControl<PolicySetDefinitionPropertiesPolicyType | null | undefined>,
	}
	export function CreatePolicySetDefinitionPropertiesFormGroup() {
		return new FormGroup<PolicySetDefinitionPropertiesFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			displayName: new FormControl<string | null | undefined>(undefined),
			metadata: new FormControl<string | null | undefined>(undefined),
			parameters: new FormControl<{[id: string]: any } | null | undefined>(undefined),
			policyType: new FormControl<PolicySetDefinitionPropertiesPolicyType | null | undefined>(undefined),
		});

	}

	export enum PolicySetDefinitionPropertiesPolicyType { NotSpecified = 'NotSpecified', BuiltIn = 'BuiltIn', Custom = 'Custom', Static = 'Static' }

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Retrieves built-in policy set definitions.
		 * This operation retrieves a list of all the built-in policy set definitions.
		 * Get providers/Microsoft.Authorization/policySetDefinitions
		 * @param {string} api_version The API version to use for the operation.
		 * @return {PolicySetDefinitionListResult} OK - Returns an array of built in policy set definitions.
		 */
		PolicySetDefinitions_ListBuiltIn(api_version: string): Observable<PolicySetDefinitionListResult> {
			return this.http.get<PolicySetDefinitionListResult>(this.baseUri + 'providers/Microsoft.Authorization/policySetDefinitions?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Retrieves a built in policy set definition.
		 * This operation retrieves the built-in policy set definition with the given name.
		 * Get providers/Microsoft.Authorization/policySetDefinitions/{policySetDefinitionName}
		 * @param {string} policySetDefinitionName The name of the policy set definition to get.
		 * @param {string} api_version The API version to use for the operation.
		 * @return {PolicySetDefinition} OK - Returns information about the built in policy set definition.
		 */
		PolicySetDefinitions_GetBuiltIn(policySetDefinitionName: string, api_version: string): Observable<PolicySetDefinition> {
			return this.http.get<PolicySetDefinition>(this.baseUri + 'providers/Microsoft.Authorization/policySetDefinitions/' + (policySetDefinitionName == null ? '' : encodeURIComponent(policySetDefinitionName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Retrieves all policy set definitions in management group.
		 * This operation retrieves a list of all the a policy set definition in the given management group.
		 * Get providers/Microsoft.Management/managementgroups/{managementGroupId}/providers/Microsoft.Authorization/policySetDefinitions
		 * @param {string} api_version The API version to use for the operation.
		 * @param {string} managementGroupId The ID of the management group.
		 * @return {PolicySetDefinitionListResult} OK - Returns an array of policy set definitions.
		 */
		PolicySetDefinitions_ListByManagementGroup(api_version: string, managementGroupId: string): Observable<PolicySetDefinitionListResult> {
			return this.http.get<PolicySetDefinitionListResult>(this.baseUri + 'providers/Microsoft.Management/managementgroups/' + (managementGroupId == null ? '' : encodeURIComponent(managementGroupId)) + '/providers/Microsoft.Authorization/policySetDefinitions?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Retrieves a policy set definition.
		 * This operation retrieves the policy set definition in the given management group with the given name.
		 * Get providers/Microsoft.Management/managementgroups/{managementGroupId}/providers/Microsoft.Authorization/policySetDefinitions/{policySetDefinitionName}
		 * @param {string} policySetDefinitionName The name of the policy set definition to get.
		 * @param {string} api_version The API version to use for the operation.
		 * @param {string} managementGroupId The ID of the management group.
		 * @return {PolicySetDefinition} OK - Returns information about the policy set definition.
		 */
		PolicySetDefinitions_GetAtManagementGroup(policySetDefinitionName: string, api_version: string, managementGroupId: string): Observable<PolicySetDefinition> {
			return this.http.get<PolicySetDefinition>(this.baseUri + 'providers/Microsoft.Management/managementgroups/' + (managementGroupId == null ? '' : encodeURIComponent(managementGroupId)) + '/providers/Microsoft.Authorization/policySetDefinitions/' + (policySetDefinitionName == null ? '' : encodeURIComponent(policySetDefinitionName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Creates or updates a policy set definition.
		 * This operation creates or updates a policy set definition in the given management group with the given name.
		 * Put providers/Microsoft.Management/managementgroups/{managementGroupId}/providers/Microsoft.Authorization/policySetDefinitions/{policySetDefinitionName}
		 * @param {string} policySetDefinitionName The name of the policy set definition to create.
		 * @param {string} api_version The API version to use for the operation.
		 * @param {string} managementGroupId The ID of the management group.
		 * @param {PolicySetDefinition} requestBody The policy set definition properties.
		 * @return {PolicySetDefinition} OK - Returns information about the policy set definition.
		 */
		PolicySetDefinitions_CreateOrUpdateAtManagementGroup(policySetDefinitionName: string, api_version: string, managementGroupId: string, requestBody: PolicySetDefinition): Observable<PolicySetDefinition> {
			return this.http.put<PolicySetDefinition>(this.baseUri + 'providers/Microsoft.Management/managementgroups/' + (managementGroupId == null ? '' : encodeURIComponent(managementGroupId)) + '/providers/Microsoft.Authorization/policySetDefinitions/' + (policySetDefinitionName == null ? '' : encodeURIComponent(policySetDefinitionName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a policy set definition.
		 * This operation deletes the policy set definition in the given management group with the given name.
		 * Delete providers/Microsoft.Management/managementgroups/{managementGroupId}/providers/Microsoft.Authorization/policySetDefinitions/{policySetDefinitionName}
		 * @param {string} policySetDefinitionName The name of the policy set definition to delete.
		 * @param {string} api_version The API version to use for the operation.
		 * @param {string} managementGroupId The ID of the management group.
		 * @return {void} OK
		 */
		PolicySetDefinitions_DeleteAtManagementGroup(policySetDefinitionName: string, api_version: string, managementGroupId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'providers/Microsoft.Management/managementgroups/' + (managementGroupId == null ? '' : encodeURIComponent(managementGroupId)) + '/providers/Microsoft.Authorization/policySetDefinitions/' + (policySetDefinitionName == null ? '' : encodeURIComponent(policySetDefinitionName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieves the policy set definitions for a subscription.
		 * This operation retrieves a list of all the policy set definitions in the given subscription.
		 * Get subscriptions/{subscriptionId}/providers/Microsoft.Authorization/policySetDefinitions
		 * @param {string} api_version The API version to use for the operation.
		 * @param {string} subscriptionId The ID of the target subscription.
		 * @return {PolicySetDefinitionListResult} OK - Returns an array of policy set definitions.
		 */
		PolicySetDefinitions_List(api_version: string, subscriptionId: string): Observable<PolicySetDefinitionListResult> {
			return this.http.get<PolicySetDefinitionListResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/providers/Microsoft.Authorization/policySetDefinitions?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Retrieves a policy set definition.
		 * This operation retrieves the policy set definition in the given subscription with the given name.
		 * Get subscriptions/{subscriptionId}/providers/Microsoft.Authorization/policySetDefinitions/{policySetDefinitionName}
		 * @param {string} policySetDefinitionName The name of the policy set definition to get.
		 * @param {string} api_version The API version to use for the operation.
		 * @param {string} subscriptionId The ID of the target subscription.
		 * @return {PolicySetDefinition} OK - Returns information about the policy set definition.
		 */
		PolicySetDefinitions_Get(policySetDefinitionName: string, api_version: string, subscriptionId: string): Observable<PolicySetDefinition> {
			return this.http.get<PolicySetDefinition>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/providers/Microsoft.Authorization/policySetDefinitions/' + (policySetDefinitionName == null ? '' : encodeURIComponent(policySetDefinitionName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Creates or updates a policy set definition.
		 * This operation creates or updates a policy set definition in the given subscription with the given name.
		 * Put subscriptions/{subscriptionId}/providers/Microsoft.Authorization/policySetDefinitions/{policySetDefinitionName}
		 * @param {string} policySetDefinitionName The name of the policy set definition to create.
		 * @param {string} api_version The API version to use for the operation.
		 * @param {string} subscriptionId The ID of the target subscription.
		 * @param {PolicySetDefinition} requestBody The policy set definition properties.
		 * @return {PolicySetDefinition} OK - Returns information about the policy set definition.
		 */
		PolicySetDefinitions_CreateOrUpdate(policySetDefinitionName: string, api_version: string, subscriptionId: string, requestBody: PolicySetDefinition): Observable<PolicySetDefinition> {
			return this.http.put<PolicySetDefinition>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/providers/Microsoft.Authorization/policySetDefinitions/' + (policySetDefinitionName == null ? '' : encodeURIComponent(policySetDefinitionName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a policy set definition.
		 * This operation deletes the policy set definition in the given subscription with the given name.
		 * Delete subscriptions/{subscriptionId}/providers/Microsoft.Authorization/policySetDefinitions/{policySetDefinitionName}
		 * @param {string} policySetDefinitionName The name of the policy set definition to delete.
		 * @param {string} api_version The API version to use for the operation.
		 * @param {string} subscriptionId The ID of the target subscription.
		 * @return {void} OK
		 */
		PolicySetDefinitions_Delete(policySetDefinitionName: string, api_version: string, subscriptionId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/providers/Microsoft.Authorization/policySetDefinitions/' + (policySetDefinitionName == null ? '' : encodeURIComponent(policySetDefinitionName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { observe: 'response', responseType: 'text' });
		}
	}

}

