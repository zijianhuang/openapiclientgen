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


	/** The parameter definitions for parameters used in the policy. The keys are the parameter names. */
	export interface ParameterDefinitions {
	}

	/** The parameter definitions for parameters used in the policy. The keys are the parameter names. */
	export interface ParameterDefinitionsFormProperties {
	}
	export function CreateParameterDefinitionsFormGroup() {
		return new FormGroup<ParameterDefinitionsFormProperties>({
		});

	}


	/** The definition of a parameter that can be provided to the policy. */
	export interface ParameterDefinitionsValue {

		/** The allowed values for the parameter. */
		allowedValues?: Array<string>;

		/** The default value for the parameter if no value is provided. */
		defaultValue?: string | null;

		/** General metadata for the parameter. */
		metadata?: ParameterDefinitionsValueMetadata;

		/** The data type of the parameter. */
		type?: ParameterDefinitionsValueType | null;
	}

	/** The definition of a parameter that can be provided to the policy. */
	export interface ParameterDefinitionsValueFormProperties {

		/** The default value for the parameter if no value is provided. */
		defaultValue: FormControl<string | null | undefined>,

		/** The data type of the parameter. */
		type: FormControl<ParameterDefinitionsValueType | null | undefined>,
	}
	export function CreateParameterDefinitionsValueFormGroup() {
		return new FormGroup<ParameterDefinitionsValueFormProperties>({
			defaultValue: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<ParameterDefinitionsValueType | null | undefined>(undefined),
		});

	}

	export interface ParameterDefinitionsValueMetadata {

		/** The description of the parameter. */
		description?: string | null;

		/** The display name for the parameter. */
		displayName?: string | null;
	}
	export interface ParameterDefinitionsValueMetadataFormProperties {

		/** The description of the parameter. */
		description: FormControl<string | null | undefined>,

		/** The display name for the parameter. */
		displayName: FormControl<string | null | undefined>,
	}
	export function CreateParameterDefinitionsValueMetadataFormGroup() {
		return new FormGroup<ParameterDefinitionsValueMetadataFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			displayName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ParameterDefinitionsValueType { String = 0, Array = 1, Object = 2, Boolean = 3, Integer = 4, Float = 5, DateTime = 6 }


	/** The policy definition. */
	export interface PolicyDefinition {

		/** The ID of the policy definition. */
		id?: string | null;

		/** The name of the policy definition. */
		name?: string | null;

		/** The policy definition properties. */
		properties?: PolicyDefinitionProperties;

		/** The type of the resource (Microsoft.Authorization/policyDefinitions). */
		type?: string | null;
	}

	/** The policy definition. */
	export interface PolicyDefinitionFormProperties {

		/** The ID of the policy definition. */
		id: FormControl<string | null | undefined>,

		/** The name of the policy definition. */
		name: FormControl<string | null | undefined>,

		/** The type of the resource (Microsoft.Authorization/policyDefinitions). */
		type: FormControl<string | null | undefined>,
	}
	export function CreatePolicyDefinitionFormGroup() {
		return new FormGroup<PolicyDefinitionFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
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

		/** The policy definition metadata.  Metadata is an open ended object and is typically a collection of key value pairs. */
		metadata?: string | null;

		/** The policy definition mode. Some examples are All, Indexed, Microsoft.KeyVault.Data. */
		mode?: string | null;

		/** The parameter definitions for parameters used in the policy. The keys are the parameter names. */
		parameters?: ParameterDefinitions;

		/** The policy rule. */
		policyRule?: string | null;

		/** The type of policy definition. Possible values are NotSpecified, BuiltIn, Custom, and Static. */
		policyType?: PolicyDefinitionPropertiesPolicyType | null;
	}

	/** The policy definition properties. */
	export interface PolicyDefinitionPropertiesFormProperties {

		/** The policy definition description. */
		description: FormControl<string | null | undefined>,

		/** The display name of the policy definition. */
		displayName: FormControl<string | null | undefined>,

		/** The policy definition metadata.  Metadata is an open ended object and is typically a collection of key value pairs. */
		metadata: FormControl<string | null | undefined>,

		/** The policy definition mode. Some examples are All, Indexed, Microsoft.KeyVault.Data. */
		mode: FormControl<string | null | undefined>,

		/** The policy rule. */
		policyRule: FormControl<string | null | undefined>,

		/** The type of policy definition. Possible values are NotSpecified, BuiltIn, Custom, and Static. */
		policyType: FormControl<PolicyDefinitionPropertiesPolicyType | null | undefined>,
	}
	export function CreatePolicyDefinitionPropertiesFormGroup() {
		return new FormGroup<PolicyDefinitionPropertiesFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			displayName: new FormControl<string | null | undefined>(undefined),
			metadata: new FormControl<string | null | undefined>(undefined),
			mode: new FormControl<string | null | undefined>(undefined),
			policyRule: new FormControl<string | null | undefined>(undefined),
			policyType: new FormControl<PolicyDefinitionPropertiesPolicyType | null | undefined>(undefined),
		});

	}

	export enum PolicyDefinitionPropertiesPolicyType { NotSpecified = 0, BuiltIn = 1, Custom = 2, Static = 3 }

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Retrieve built-in policy definitions
		 * This operation retrieves a list of all the built-in policy definitions.
		 * Get providers/Microsoft.Authorization/policyDefinitions
		 * @param {string} api_version The API version to use for the operation.
		 * @return {PolicyDefinitionListResult} OK - Returns an array of built-in policy definitions.
		 */
		PolicyDefinitions_ListBuiltIn(api_version: string): Observable<PolicyDefinitionListResult> {
			return this.http.get<PolicyDefinitionListResult>(this.baseUri + 'providers/Microsoft.Authorization/policyDefinitions?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Retrieves a built-in policy definition.
		 * This operation retrieves the built-in policy definition with the given name.
		 * Get providers/Microsoft.Authorization/policyDefinitions/{policyDefinitionName}
		 * @param {string} policyDefinitionName The name of the built-in policy definition to get.
		 * @param {string} api_version The API version to use for the operation.
		 * @return {PolicyDefinition} OK - Returns information about the built-in policy definition.
		 */
		PolicyDefinitions_GetBuiltIn(policyDefinitionName: string, api_version: string): Observable<PolicyDefinition> {
			return this.http.get<PolicyDefinition>(this.baseUri + 'providers/Microsoft.Authorization/policyDefinitions/' + (policyDefinitionName == null ? '' : encodeURIComponent(policyDefinitionName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Retrieve policy definitions in a management group
		 * This operation retrieves a list of all the policy definitions in a given management group.
		 * Get providers/Microsoft.Management/managementgroups/{managementGroupId}/providers/Microsoft.Authorization/policyDefinitions
		 * @param {string} api_version The API version to use for the operation.
		 * @param {string} managementGroupId The ID of the management group.
		 * @return {PolicyDefinitionListResult} OK - Returns an array of policy definitions.
		 */
		PolicyDefinitions_ListByManagementGroup(api_version: string, managementGroupId: string): Observable<PolicyDefinitionListResult> {
			return this.http.get<PolicyDefinitionListResult>(this.baseUri + 'providers/Microsoft.Management/managementgroups/' + (managementGroupId == null ? '' : encodeURIComponent(managementGroupId)) + '/providers/Microsoft.Authorization/policyDefinitions?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Retrieve a policy definition in a management group.
		 * This operation retrieves the policy definition in the given management group with the given name.
		 * Get providers/Microsoft.Management/managementgroups/{managementGroupId}/providers/Microsoft.Authorization/policyDefinitions/{policyDefinitionName}
		 * @param {string} policyDefinitionName The name of the policy definition to get.
		 * @param {string} api_version The API version to use for the operation.
		 * @param {string} managementGroupId The ID of the management group.
		 * @return {PolicyDefinition} OK - Returns information about the policy definition.
		 */
		PolicyDefinitions_GetAtManagementGroup(policyDefinitionName: string, api_version: string, managementGroupId: string): Observable<PolicyDefinition> {
			return this.http.get<PolicyDefinition>(this.baseUri + 'providers/Microsoft.Management/managementgroups/' + (managementGroupId == null ? '' : encodeURIComponent(managementGroupId)) + '/providers/Microsoft.Authorization/policyDefinitions/' + (policyDefinitionName == null ? '' : encodeURIComponent(policyDefinitionName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Creates or updates a policy definition in a management group.
		 * This operation creates or updates a policy definition in the given management group with the given name.
		 * Put providers/Microsoft.Management/managementgroups/{managementGroupId}/providers/Microsoft.Authorization/policyDefinitions/{policyDefinitionName}
		 * @param {string} policyDefinitionName The name of the policy definition to create.
		 * @param {string} api_version The API version to use for the operation.
		 * @param {string} managementGroupId The ID of the management group.
		 * @param {PolicyDefinition} requestBody The policy definition properties.
		 * @return {void} 
		 */
		PolicyDefinitions_CreateOrUpdateAtManagementGroup(policyDefinitionName: string, api_version: string, managementGroupId: string, requestBody: PolicyDefinition): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'providers/Microsoft.Management/managementgroups/' + (managementGroupId == null ? '' : encodeURIComponent(managementGroupId)) + '/providers/Microsoft.Authorization/policyDefinitions/' + (policyDefinitionName == null ? '' : encodeURIComponent(policyDefinitionName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Deletes a policy definition in a management group.
		 * This operation deletes the policy definition in the given management group with the given name.
		 * Delete providers/Microsoft.Management/managementgroups/{managementGroupId}/providers/Microsoft.Authorization/policyDefinitions/{policyDefinitionName}
		 * @param {string} policyDefinitionName The name of the policy definition to delete.
		 * @param {string} api_version The API version to use for the operation.
		 * @param {string} managementGroupId The ID of the management group.
		 * @return {void} OK
		 */
		PolicyDefinitions_DeleteAtManagementGroup(policyDefinitionName: string, api_version: string, managementGroupId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'providers/Microsoft.Management/managementgroups/' + (managementGroupId == null ? '' : encodeURIComponent(managementGroupId)) + '/providers/Microsoft.Authorization/policyDefinitions/' + (policyDefinitionName == null ? '' : encodeURIComponent(policyDefinitionName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieves policy definitions in a subscription
		 * This operation retrieves a list of all the policy definitions in a given subscription.
		 * Get subscriptions/{subscriptionId}/providers/Microsoft.Authorization/policyDefinitions
		 * @param {string} api_version The API version to use for the operation.
		 * @param {string} subscriptionId The ID of the target subscription.
		 * @return {PolicyDefinitionListResult} OK - Returns an array of policy definitions.
		 */
		PolicyDefinitions_List(api_version: string, subscriptionId: string): Observable<PolicyDefinitionListResult> {
			return this.http.get<PolicyDefinitionListResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/providers/Microsoft.Authorization/policyDefinitions?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Retrieves a policy definition in a subscription.
		 * This operation retrieves the policy definition in the given subscription with the given name.
		 * Get subscriptions/{subscriptionId}/providers/Microsoft.Authorization/policyDefinitions/{policyDefinitionName}
		 * @param {string} policyDefinitionName The name of the policy definition to get.
		 * @param {string} api_version The API version to use for the operation.
		 * @param {string} subscriptionId The ID of the target subscription.
		 * @return {PolicyDefinition} OK - Returns information about the policy definition.
		 */
		PolicyDefinitions_Get(policyDefinitionName: string, api_version: string, subscriptionId: string): Observable<PolicyDefinition> {
			return this.http.get<PolicyDefinition>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/providers/Microsoft.Authorization/policyDefinitions/' + (policyDefinitionName == null ? '' : encodeURIComponent(policyDefinitionName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Creates or updates a policy definition in a subscription.
		 * This operation creates or updates a policy definition in the given subscription with the given name.
		 * Put subscriptions/{subscriptionId}/providers/Microsoft.Authorization/policyDefinitions/{policyDefinitionName}
		 * @param {string} policyDefinitionName The name of the policy definition to create.
		 * @param {string} api_version The API version to use for the operation.
		 * @param {string} subscriptionId The ID of the target subscription.
		 * @param {PolicyDefinition} requestBody The policy definition properties.
		 * @return {void} 
		 */
		PolicyDefinitions_CreateOrUpdate(policyDefinitionName: string, api_version: string, subscriptionId: string, requestBody: PolicyDefinition): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/providers/Microsoft.Authorization/policyDefinitions/' + (policyDefinitionName == null ? '' : encodeURIComponent(policyDefinitionName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Deletes a policy definition in a subscription.
		 * This operation deletes the policy definition in the given subscription with the given name.
		 * Delete subscriptions/{subscriptionId}/providers/Microsoft.Authorization/policyDefinitions/{policyDefinitionName}
		 * @param {string} policyDefinitionName The name of the policy definition to delete.
		 * @param {string} api_version The API version to use for the operation.
		 * @param {string} subscriptionId The ID of the target subscription.
		 * @return {void} OK
		 */
		PolicyDefinitions_Delete(policyDefinitionName: string, api_version: string, subscriptionId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/providers/Microsoft.Authorization/policyDefinitions/' + (policyDefinitionName == null ? '' : encodeURIComponent(policyDefinitionName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { observe: 'response', responseType: 'text' });
		}
	}

}

