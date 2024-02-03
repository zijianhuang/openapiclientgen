import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface AdaptiveNetworkHardening {
	}
	export interface AdaptiveNetworkHardeningFormProperties {
	}
	export function CreateAdaptiveNetworkHardeningFormGroup() {
		return new FormGroup<AdaptiveNetworkHardeningFormProperties>({
		});

	}

	export interface AdaptiveNetworkHardeningEnforceRequest {

		/**
		 * The Azure resource IDs of the effective network security groups that will be updated with the created security rules from the Adaptive Network Hardening rules
		 * Required
		 */
		networkSecurityGroups: Array<string>;

		/**
		 * The rules to enforce
		 * Required
		 */
		rules: Array<Rule>;
	}
	export interface AdaptiveNetworkHardeningEnforceRequestFormProperties {
	}
	export function CreateAdaptiveNetworkHardeningEnforceRequestFormGroup() {
		return new FormGroup<AdaptiveNetworkHardeningEnforceRequestFormProperties>({
		});

	}


	/** Describes remote addresses that is recommended to communicate with the Azure resource on some (Protocol, Port, Direction). All other remote addresses are recommended to be blocked */
	export interface Rule {

		/**
		 * Minimum: 0
		 * Maximum: 65535
		 */
		destinationPort?: number | null;

		/** The rule's direction */
		direction?: RuleDirection | null;

		/** The remote IP addresses that should be able to communicate with the Azure resource on the rule's destination port and protocol */
		ipAddresses?: Array<string>;

		/** The name of the rule */
		name?: string | null;

		/** The rule's transport protocols */
		protocols?: Array<string>;
	}

	/** Describes remote addresses that is recommended to communicate with the Azure resource on some (Protocol, Port, Direction). All other remote addresses are recommended to be blocked */
	export interface RuleFormProperties {

		/**
		 * Minimum: 0
		 * Maximum: 65535
		 */
		destinationPort: FormControl<number | null | undefined>,

		/** The rule's direction */
		direction: FormControl<RuleDirection | null | undefined>,

		/** The name of the rule */
		name: FormControl<string | null | undefined>,
	}
	export function CreateRuleFormGroup() {
		return new FormGroup<RuleFormProperties>({
			destinationPort: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(65535)]),
			direction: new FormControl<RuleDirection | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum RuleDirection { Inbound = 'Inbound', Outbound = 'Outbound' }


	/** Adaptive Network Hardening resource properties */
	export interface AdaptiveNetworkHardeningProperties {

		/** The Network Security Groups effective on the network interfaces of the protected resource */
		effectiveNetworkSecurityGroups?: Array<EffectiveNetworkSecurityGroups>;

		/** The security rules which are recommended to be effective on the VM */
		rules?: Array<Rule>;

		/** The UTC time on which the rules were calculated */
		rulesCalculationTime?: Date | null;
	}

	/** Adaptive Network Hardening resource properties */
	export interface AdaptiveNetworkHardeningPropertiesFormProperties {

		/** The UTC time on which the rules were calculated */
		rulesCalculationTime: FormControl<Date | null | undefined>,
	}
	export function CreateAdaptiveNetworkHardeningPropertiesFormGroup() {
		return new FormGroup<AdaptiveNetworkHardeningPropertiesFormProperties>({
			rulesCalculationTime: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/** Describes the Network Security Groups effective on a network interface */
	export interface EffectiveNetworkSecurityGroups {

		/** The Azure resource ID of the network interface */
		networkInterface?: string | null;

		/** The Network Security Groups effective on the network interface */
		networkSecurityGroups?: Array<string>;
	}

	/** Describes the Network Security Groups effective on a network interface */
	export interface EffectiveNetworkSecurityGroupsFormProperties {

		/** The Azure resource ID of the network interface */
		networkInterface: FormControl<string | null | undefined>,
	}
	export function CreateEffectiveNetworkSecurityGroupsFormGroup() {
		return new FormGroup<EffectiveNetworkSecurityGroupsFormProperties>({
			networkInterface: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response for ListAdaptiveNetworkHardenings API service call */
	export interface AdaptiveNetworkHardeningsList {

		/** The URL to get the next set of results */
		nextLink?: string | null;

		/** A list of Adaptive Network Hardenings resources */
		value?: Array<AdaptiveNetworkHardening>;
	}

	/** Response for ListAdaptiveNetworkHardenings API service call */
	export interface AdaptiveNetworkHardeningsListFormProperties {

		/** The URL to get the next set of results */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateAdaptiveNetworkHardeningsListFormGroup() {
		return new FormGroup<AdaptiveNetworkHardeningsListFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Gets a list of Adaptive Network Hardenings resources in scope of an extended resource.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceNamespace}/{resourceType}/{resourceName}/providers/Microsoft.Security/adaptiveNetworkHardenings
		 * @param {string} subscriptionId Azure subscription ID
		 * @param {string} resourceGroupName The name of the resource group within the user's subscription. The name is case insensitive.
		 * @param {string} resourceNamespace The Namespace of the resource.
		 * @param {string} resourceType The type of the resource.
		 * @param {string} resourceName Name of the resource.
		 * @param {string} api_version API version for the operation
		 * @return {AdaptiveNetworkHardeningsList} OK
		 */
		AdaptiveNetworkHardenings_ListByExtendedResource(subscriptionId: string, resourceGroupName: string, resourceNamespace: string, resourceType: string, resourceName: string, api_version: string): Observable<AdaptiveNetworkHardeningsList> {
			return this.http.get<AdaptiveNetworkHardeningsList>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/' + (resourceNamespace == null ? '' : encodeURIComponent(resourceNamespace)) + '/' + (resourceType == null ? '' : encodeURIComponent(resourceType)) + '/' + (resourceName == null ? '' : encodeURIComponent(resourceName)) + '/providers/Microsoft.Security/adaptiveNetworkHardenings&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Gets a single Adaptive Network Hardening resource
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceNamespace}/{resourceType}/{resourceName}/providers/Microsoft.Security/adaptiveNetworkHardenings/{adaptiveNetworkHardeningResourceName}
		 * @param {string} subscriptionId Azure subscription ID
		 * @param {string} resourceGroupName The name of the resource group within the user's subscription. The name is case insensitive.
		 * @param {string} resourceNamespace The Namespace of the resource.
		 * @param {string} resourceType The type of the resource.
		 * @param {string} resourceName Name of the resource.
		 * @param {string} adaptiveNetworkHardeningResourceName The name of the Adaptive Network Hardening resource.
		 * @param {string} api_version API version for the operation
		 * @return {AdaptiveNetworkHardening} OK
		 */
		AdaptiveNetworkHardenings_Get(subscriptionId: string, resourceGroupName: string, resourceNamespace: string, resourceType: string, resourceName: string, adaptiveNetworkHardeningResourceName: string, api_version: string): Observable<AdaptiveNetworkHardening> {
			return this.http.get<AdaptiveNetworkHardening>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/' + (resourceNamespace == null ? '' : encodeURIComponent(resourceNamespace)) + '/' + (resourceType == null ? '' : encodeURIComponent(resourceType)) + '/' + (resourceName == null ? '' : encodeURIComponent(resourceName)) + '/providers/Microsoft.Security/adaptiveNetworkHardenings/' + (adaptiveNetworkHardeningResourceName == null ? '' : encodeURIComponent(adaptiveNetworkHardeningResourceName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Enforces the given rules on the NSG(s) listed in the request
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceNamespace}/{resourceType}/{resourceName}/providers/Microsoft.Security/adaptiveNetworkHardenings/{adaptiveNetworkHardeningResourceName}/{adaptiveNetworkHardeningEnforceAction}
		 * @param {string} subscriptionId Azure subscription ID
		 * @param {string} resourceGroupName The name of the resource group within the user's subscription. The name is case insensitive.
		 * @param {string} resourceNamespace The Namespace of the resource.
		 * @param {string} resourceType The type of the resource.
		 * @param {string} resourceName Name of the resource.
		 * @param {string} adaptiveNetworkHardeningResourceName The name of the Adaptive Network Hardening resource.
		 * @param {AdaptiveNetworkHardenings_EnforceAdaptiveNetworkHardeningEnforceAction} adaptiveNetworkHardeningEnforceAction Enforces the given rules on the NSG(s) listed in the request
		 * @param {string} api_version API version for the operation
		 * @return {void} OK.
		 */
		AdaptiveNetworkHardenings_Enforce(subscriptionId: string, resourceGroupName: string, resourceNamespace: string, resourceType: string, resourceName: string, adaptiveNetworkHardeningResourceName: string, adaptiveNetworkHardeningEnforceAction: AdaptiveNetworkHardenings_EnforceAdaptiveNetworkHardeningEnforceAction, api_version: string, requestBody: AdaptiveNetworkHardeningEnforceRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/' + (resourceNamespace == null ? '' : encodeURIComponent(resourceNamespace)) + '/' + (resourceType == null ? '' : encodeURIComponent(resourceType)) + '/' + (resourceName == null ? '' : encodeURIComponent(resourceName)) + '/providers/Microsoft.Security/adaptiveNetworkHardenings/' + (adaptiveNetworkHardeningResourceName == null ? '' : encodeURIComponent(adaptiveNetworkHardeningResourceName)) + '/' + adaptiveNetworkHardeningEnforceAction + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}
	}

	export enum AdaptiveNetworkHardenings_EnforceAdaptiveNetworkHardeningEnforceAction { enforce = 'enforce' }

}

