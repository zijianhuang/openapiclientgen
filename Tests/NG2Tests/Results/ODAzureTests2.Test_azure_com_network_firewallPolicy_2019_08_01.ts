import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** Rule condition of type application. */
	export interface ApplicationRuleCondition extends FirewallPolicyRuleCondition {

		/** List of destination IP addresses or Service Tags. */
		destinationAddresses?: Array<string>;

		/** List of FQDN Tags for this rule condition. */
		fqdnTags?: Array<string>;

		/** Array of Application Protocols. */
		protocols?: Array<FirewallPolicyRuleConditionApplicationProtocol>;

		/** List of source IP addresses for this rule. */
		sourceAddresses?: Array<string>;

		/** List of FQDNs for this rule condition. */
		targetFqdns?: Array<string>;
	}

	/** Rule condition of type application. */
	export interface ApplicationRuleConditionFormProperties extends FirewallPolicyRuleConditionFormProperties {
	}
	export function CreateApplicationRuleConditionFormGroup() {
		return new FormGroup<ApplicationRuleConditionFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			ruleConditionType: new FormControl<FirewallPolicyRuleConditionRuleConditionType | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Properties of the application rule protocol. */
	export interface FirewallPolicyRuleConditionApplicationProtocol {

		/**
		 * Port number for the protocol, cannot be greater than 64000.
		 * Minimum: 0
		 * Maximum: 64000
		 */
		port?: number | null;

		/** The application protocol type of a Rule condition. */
		protocolType?: FirewallPolicyRuleConditionApplicationProtocolProtocolType | null;
	}

	/** Properties of the application rule protocol. */
	export interface FirewallPolicyRuleConditionApplicationProtocolFormProperties {

		/**
		 * Port number for the protocol, cannot be greater than 64000.
		 * Minimum: 0
		 * Maximum: 64000
		 */
		port: FormControl<number | null | undefined>,

		/** The application protocol type of a Rule condition. */
		protocolType: FormControl<FirewallPolicyRuleConditionApplicationProtocolProtocolType | null | undefined>,
	}
	export function CreateFirewallPolicyRuleConditionApplicationProtocolFormGroup() {
		return new FormGroup<FirewallPolicyRuleConditionApplicationProtocolFormProperties>({
			port: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(64000)]),
			protocolType: new FormControl<FirewallPolicyRuleConditionApplicationProtocolProtocolType | null | undefined>(undefined),
		});

	}

	export enum FirewallPolicyRuleConditionApplicationProtocolProtocolType { Http = 0, Https = 1 }

	export interface FirewallPolicy {
	}
	export interface FirewallPolicyFormProperties {
	}
	export function CreateFirewallPolicyFormGroup() {
		return new FormGroup<FirewallPolicyFormProperties>({
		});

	}


	/** Firewall Policy Filter Rule. */
	export interface FirewallPolicyFilterRule extends FirewallPolicyRule {

		/** Properties of the FirewallPolicyFilterRuleAction. */
		action?: FirewallPolicyFilterRuleAction;

		/** Collection of rule conditions used by a rule. */
		ruleConditions?: Array<FirewallPolicyRuleCondition>;
	}

	/** Firewall Policy Filter Rule. */
	export interface FirewallPolicyFilterRuleFormProperties extends FirewallPolicyRuleFormProperties {
	}
	export function CreateFirewallPolicyFilterRuleFormGroup() {
		return new FormGroup<FirewallPolicyFilterRuleFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			priority: new FormControl<number | null | undefined>(undefined, [Validators.min(100), Validators.max(65000)]),
			ruleType: new FormControl<FirewallPolicyRuleRuleType | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Properties of a rule. */
	export interface FirewallPolicyRuleCondition {

		/** Description of the rule condition. */
		description?: string | null;

		/** Name of the rule condition. */
		name?: string | null;

		/**
		 * Rule Condition Type.
		 * Required
		 */
		ruleConditionType: FirewallPolicyRuleConditionRuleConditionType;
	}

	/** Properties of a rule. */
	export interface FirewallPolicyRuleConditionFormProperties {

		/** Description of the rule condition. */
		description: FormControl<string | null | undefined>,

		/** Name of the rule condition. */
		name: FormControl<string | null | undefined>,

		/**
		 * Rule Condition Type.
		 * Required
		 */
		ruleConditionType: FormControl<FirewallPolicyRuleConditionRuleConditionType | null | undefined>,
	}
	export function CreateFirewallPolicyRuleConditionFormGroup() {
		return new FormGroup<FirewallPolicyRuleConditionFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			ruleConditionType: new FormControl<FirewallPolicyRuleConditionRuleConditionType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum FirewallPolicyRuleConditionRuleConditionType { ApplicationRuleCondition = 0, NetworkRuleCondition = 1 }


	/** Properties of the FirewallPolicyFilterRuleAction. */
	export interface FirewallPolicyFilterRuleAction {

		/** The action type of a rule. */
		type?: FirewallPolicyFilterRuleActionType | null;
	}

	/** Properties of the FirewallPolicyFilterRuleAction. */
	export interface FirewallPolicyFilterRuleActionFormProperties {

		/** The action type of a rule. */
		type: FormControl<FirewallPolicyFilterRuleActionType | null | undefined>,
	}
	export function CreateFirewallPolicyFilterRuleActionFormGroup() {
		return new FormGroup<FirewallPolicyFilterRuleActionFormProperties>({
			type: new FormControl<FirewallPolicyFilterRuleActionType | null | undefined>(undefined),
		});

	}

	export enum FirewallPolicyFilterRuleActionType { Allow = 0, Deny = 1 }


	/** Response for ListFirewallPolicies API service call. */
	export interface FirewallPolicyListResult {

		/** URL to get the next set of results. */
		nextLink?: string | null;

		/** List of Firewall Policies in a resource group. */
		value?: Array<FirewallPolicy>;
	}

	/** Response for ListFirewallPolicies API service call. */
	export interface FirewallPolicyListResultFormProperties {

		/** URL to get the next set of results. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateFirewallPolicyListResultFormGroup() {
		return new FormGroup<FirewallPolicyListResultFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Firewall Policy NAT Rule. */
	export interface FirewallPolicyNatRule extends FirewallPolicyRule {

		/** Properties of the FirewallPolicyNatRuleAction. */
		action?: FirewallPolicyNatRuleAction;

		/** Properties of a rule. */
		ruleCondition?: FirewallPolicyRuleCondition;

		/** The translated address for this NAT rule. */
		translatedAddress?: string | null;

		/** The translated port for this NAT rule. */
		translatedPort?: string | null;
	}

	/** Firewall Policy NAT Rule. */
	export interface FirewallPolicyNatRuleFormProperties extends FirewallPolicyRuleFormProperties {

		/** The translated address for this NAT rule. */
		translatedAddress: FormControl<string | null | undefined>,

		/** The translated port for this NAT rule. */
		translatedPort: FormControl<string | null | undefined>,
	}
	export function CreateFirewallPolicyNatRuleFormGroup() {
		return new FormGroup<FirewallPolicyNatRuleFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			priority: new FormControl<number | null | undefined>(undefined, [Validators.min(100), Validators.max(65000)]),
			ruleType: new FormControl<FirewallPolicyRuleRuleType | null | undefined>(undefined, [Validators.required]),
			translatedAddress: new FormControl<string | null | undefined>(undefined),
			translatedPort: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Properties of the FirewallPolicyNatRuleAction. */
	export interface FirewallPolicyNatRuleAction {

		/** The action type of a rule. */
		type?: FirewallPolicyNatRuleActionType | null;
	}

	/** Properties of the FirewallPolicyNatRuleAction. */
	export interface FirewallPolicyNatRuleActionFormProperties {

		/** The action type of a rule. */
		type: FormControl<FirewallPolicyNatRuleActionType | null | undefined>,
	}
	export function CreateFirewallPolicyNatRuleActionFormGroup() {
		return new FormGroup<FirewallPolicyNatRuleActionFormProperties>({
			type: new FormControl<FirewallPolicyNatRuleActionType | null | undefined>(undefined),
		});

	}

	export enum FirewallPolicyNatRuleActionType { DNAT = 0 }


	/** Firewall Policy definition. */
	export interface FirewallPolicyPropertiesFormat {

		/** Reference to another subresource. */
		basePolicy?: any;

		/** List of references to Child Firewall Policies. */
		FirewallPolicyPropertiesFormatChildPolicies?: Array<FirewallPolicyPropertiesFormatChildPolicies>;

		/** List of references to Azure Firewalls that this Firewall Policy is associated with. */
		FirewallPolicyPropertiesFormatFirewalls?: Array<FirewallPolicyPropertiesFormatFirewalls>;

		/** The current provisioning state. */
		provisioningState?: FirewallPolicyPropertiesFormatProvisioningState | null;

		/** List of references to FirewallPolicyRuleGroups. */
		FirewallPolicyPropertiesFormatRuleGroups?: Array<FirewallPolicyPropertiesFormatRuleGroups>;

		/** The operation mode for Threat Intel. */
		threatIntelMode?: FirewallPolicyPropertiesFormatThreatIntelMode | null;
	}

	/** Firewall Policy definition. */
	export interface FirewallPolicyPropertiesFormatFormProperties {

		/** Reference to another subresource. */
		basePolicy: FormControl<any | null | undefined>,

		/** The current provisioning state. */
		provisioningState: FormControl<FirewallPolicyPropertiesFormatProvisioningState | null | undefined>,

		/** The operation mode for Threat Intel. */
		threatIntelMode: FormControl<FirewallPolicyPropertiesFormatThreatIntelMode | null | undefined>,
	}
	export function CreateFirewallPolicyPropertiesFormatFormGroup() {
		return new FormGroup<FirewallPolicyPropertiesFormatFormProperties>({
			basePolicy: new FormControl<any | null | undefined>(undefined),
			provisioningState: new FormControl<FirewallPolicyPropertiesFormatProvisioningState | null | undefined>(undefined),
			threatIntelMode: new FormControl<FirewallPolicyPropertiesFormatThreatIntelMode | null | undefined>(undefined),
		});

	}

	export interface FirewallPolicyPropertiesFormatChildPolicies {

		/** Resource ID. */
		id?: string | null;
	}
	export interface FirewallPolicyPropertiesFormatChildPoliciesFormProperties {

		/** Resource ID. */
		id: FormControl<string | null | undefined>,
	}
	export function CreateFirewallPolicyPropertiesFormatChildPoliciesFormGroup() {
		return new FormGroup<FirewallPolicyPropertiesFormatChildPoliciesFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface FirewallPolicyPropertiesFormatFirewalls {

		/** Resource ID. */
		id?: string | null;
	}
	export interface FirewallPolicyPropertiesFormatFirewallsFormProperties {

		/** Resource ID. */
		id: FormControl<string | null | undefined>,
	}
	export function CreateFirewallPolicyPropertiesFormatFirewallsFormGroup() {
		return new FormGroup<FirewallPolicyPropertiesFormatFirewallsFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum FirewallPolicyPropertiesFormatProvisioningState { Succeeded = 0, Updating = 1, Deleting = 2, Failed = 3 }

	export interface FirewallPolicyPropertiesFormatRuleGroups {

		/** Resource ID. */
		id?: string | null;
	}
	export interface FirewallPolicyPropertiesFormatRuleGroupsFormProperties {

		/** Resource ID. */
		id: FormControl<string | null | undefined>,
	}
	export function CreateFirewallPolicyPropertiesFormatRuleGroupsFormGroup() {
		return new FormGroup<FirewallPolicyPropertiesFormatRuleGroupsFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum FirewallPolicyPropertiesFormatThreatIntelMode { Alert = 0, Deny = 1, Off = 2 }


	/** Properties of the rule. */
	export interface FirewallPolicyRule {

		/** The name of the rule. */
		name?: string | null;

		/**
		 * Priority of the Firewall Policy Rule resource.
		 * Minimum: 100
		 * Maximum: 65000
		 */
		priority?: number | null;

		/**
		 * The type of the rule.
		 * Required
		 */
		ruleType: FirewallPolicyRuleRuleType;
	}

	/** Properties of the rule. */
	export interface FirewallPolicyRuleFormProperties {

		/** The name of the rule. */
		name: FormControl<string | null | undefined>,

		/**
		 * Priority of the Firewall Policy Rule resource.
		 * Minimum: 100
		 * Maximum: 65000
		 */
		priority: FormControl<number | null | undefined>,

		/**
		 * The type of the rule.
		 * Required
		 */
		ruleType: FormControl<FirewallPolicyRuleRuleType | null | undefined>,
	}
	export function CreateFirewallPolicyRuleFormGroup() {
		return new FormGroup<FirewallPolicyRuleFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			priority: new FormControl<number | null | undefined>(undefined, [Validators.min(100), Validators.max(65000)]),
			ruleType: new FormControl<FirewallPolicyRuleRuleType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum FirewallPolicyRuleRuleType { FirewallPolicyNatRule = 0, FirewallPolicyFilterRule = 1 }


	/** The application protocol type of a Rule condition. */
	export enum FirewallPolicyRuleConditionApplicationProtocolType { Http = 0, Https = 1 }


	/** The Network protocol of a Rule condition. */
	export enum FirewallPolicyRuleConditionNetworkProtocol { TCP = 0, UDP = 1, Any = 2, ICMP = 3 }

	export interface FirewallPolicyRuleGroup {
	}
	export interface FirewallPolicyRuleGroupFormProperties {
	}
	export function CreateFirewallPolicyRuleGroupFormGroup() {
		return new FormGroup<FirewallPolicyRuleGroupFormProperties>({
		});

	}


	/** Response for ListFirewallPolicyRuleGroups API service call. */
	export interface FirewallPolicyRuleGroupListResult {

		/** URL to get the next set of results. */
		nextLink?: string | null;

		/** List of FirewallPolicyRuleGroups in a FirewallPolicy. */
		value?: Array<FirewallPolicyRuleGroup>;
	}

	/** Response for ListFirewallPolicyRuleGroups API service call. */
	export interface FirewallPolicyRuleGroupListResultFormProperties {

		/** URL to get the next set of results. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateFirewallPolicyRuleGroupListResultFormGroup() {
		return new FormGroup<FirewallPolicyRuleGroupListResultFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Properties of the rule group. */
	export interface FirewallPolicyRuleGroupProperties {

		/**
		 * Priority of the Firewall Policy Rule Group resource.
		 * Minimum: 100
		 * Maximum: 65000
		 */
		priority?: number | null;

		/** The current provisioning state. */
		provisioningState?: FirewallPolicyPropertiesFormatProvisioningState | null;

		/** Group of Firewall Policy rules. */
		rules?: Array<FirewallPolicyRule>;
	}

	/** Properties of the rule group. */
	export interface FirewallPolicyRuleGroupPropertiesFormProperties {

		/**
		 * Priority of the Firewall Policy Rule Group resource.
		 * Minimum: 100
		 * Maximum: 65000
		 */
		priority: FormControl<number | null | undefined>,

		/** The current provisioning state. */
		provisioningState: FormControl<FirewallPolicyPropertiesFormatProvisioningState | null | undefined>,
	}
	export function CreateFirewallPolicyRuleGroupPropertiesFormGroup() {
		return new FormGroup<FirewallPolicyRuleGroupPropertiesFormProperties>({
			priority: new FormControl<number | null | undefined>(undefined, [Validators.min(100), Validators.max(65000)]),
			provisioningState: new FormControl<FirewallPolicyPropertiesFormatProvisioningState | null | undefined>(undefined),
		});

	}


	/** Rule condition of type network. */
	export interface NetworkRuleCondition extends FirewallPolicyRuleCondition {

		/** List of destination IP addresses or Service Tags. */
		destinationAddresses?: Array<string>;

		/** List of destination ports. */
		destinationPorts?: Array<string>;

		/** Array of FirewallPolicyRuleConditionNetworkProtocols. */
		ipProtocols?: Array<FirewallPolicyRuleConditionNetworkProtocol>;

		/** List of source IP addresses for this rule. */
		sourceAddresses?: Array<string>;
	}

	/** Rule condition of type network. */
	export interface NetworkRuleConditionFormProperties extends FirewallPolicyRuleConditionFormProperties {
	}
	export function CreateNetworkRuleConditionFormGroup() {
		return new FormGroup<NetworkRuleConditionFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			ruleConditionType: new FormControl<FirewallPolicyRuleConditionRuleConditionType | null | undefined>(undefined, [Validators.required]),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Gets all the Firewall Policies in a subscription.
		 * Get subscriptions/{subscriptionId}/providers/Microsoft.Network/firewallPolicies
		 * @param {string} api_version Client API version.
		 * @param {string} subscriptionId The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @return {FirewallPolicyListResult} Success. The operation returns a list of FirewallPolicy resources.
		 */
		FirewallPolicies_ListAll(api_version: string, subscriptionId: string): Observable<FirewallPolicyListResult> {
			return this.http.get<FirewallPolicyListResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/providers/Microsoft.Network/firewallPolicies?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Lists all Firewall Policies in a resource group.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/firewallPolicies
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} api_version Client API version.
		 * @param {string} subscriptionId The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @return {FirewallPolicyListResult} Success. The operation returns a list of FirewallPolicy resources.
		 */
		FirewallPolicies_List(resourceGroupName: string, api_version: string, subscriptionId: string): Observable<FirewallPolicyListResult> {
			return this.http.get<FirewallPolicyListResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Network/firewallPolicies&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Gets the specified Firewall Policy.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/firewallPolicies/{firewallPolicyName}
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} firewallPolicyName The name of the Firewall Policy.
		 * @param {string} api_version Client API version.
		 * @param {string} subscriptionId The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} expand Expands referenced resources.
		 * @return {FirewallPolicy} Request successful. The operation returns a Firewall Policy resource.
		 */
		FirewallPolicies_Get(resourceGroupName: string, firewallPolicyName: string, api_version: string, subscriptionId: string, expand: string | null | undefined): Observable<FirewallPolicy> {
			return this.http.get<FirewallPolicy>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Network/firewallPolicies/' + (firewallPolicyName == null ? '' : encodeURIComponent(firewallPolicyName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)) + '&expand=' + (expand == null ? '' : encodeURIComponent(expand)), {});
		}

		/**
		 * Creates or updates the specified Firewall Policy.
		 * Put subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/firewallPolicies/{firewallPolicyName}
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} firewallPolicyName The name of the Firewall Policy.
		 * @param {string} api_version Client API version.
		 * @param {string} subscriptionId The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {FirewallPolicy} requestBody Parameters supplied to the create or update Firewall Policy operation.
		 * @return {FirewallPolicy} Request successful. The operation returns the resulting FirewallPolicy resource.
		 */
		FirewallPolicies_CreateOrUpdate(resourceGroupName: string, firewallPolicyName: string, api_version: string, subscriptionId: string, requestBody: FirewallPolicy): Observable<FirewallPolicy> {
			return this.http.put<FirewallPolicy>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Network/firewallPolicies/' + (firewallPolicyName == null ? '' : encodeURIComponent(firewallPolicyName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes the specified Firewall Policy.
		 * Delete subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/firewallPolicies/{firewallPolicyName}
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} firewallPolicyName The name of the Firewall Policy.
		 * @param {string} api_version Client API version.
		 * @param {string} subscriptionId The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @return {void} Delete successful.
		 */
		FirewallPolicies_Delete(resourceGroupName: string, firewallPolicyName: string, api_version: string, subscriptionId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Network/firewallPolicies/' + (firewallPolicyName == null ? '' : encodeURIComponent(firewallPolicyName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Updates a Firewall Policy Tags.
		 * Patch subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/firewallPolicies/{firewallPolicyName}
		 * @param {string} subscriptionId The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} resourceGroupName The resource group name of the Firewall Policy.
		 * @param {string} firewallPolicyName The name of the Firewall Policy being updated.
		 * @param {string} api_version Client API version.
		 * @param {any} requestBody Parameters supplied to Update Firewall Policy tags.
		 * @return {FirewallPolicy} Request successful. Returns the details of the Firewall Policy updated.
		 */
		FirewallPolicies_UpdateTags(subscriptionId: string, resourceGroupName: string, firewallPolicyName: string, api_version: string, requestBody: any): Observable<FirewallPolicy> {
			return this.http.patch<FirewallPolicy>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Network/firewallPolicies/' + (firewallPolicyName == null ? '' : encodeURIComponent(firewallPolicyName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists all FirewallPolicyRuleGroups in a FirewallPolicy resource.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/firewallPolicies/{firewallPolicyName}/ruleGroups
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} firewallPolicyName The name of the Firewall Policy.
		 * @param {string} api_version Client API version.
		 * @param {string} subscriptionId The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @return {FirewallPolicyRuleGroupListResult} Success. The operation returns a list of FirewallPolicyRuleGroup resources.
		 */
		FirewallPolicyRuleGroups_List(resourceGroupName: string, firewallPolicyName: string, api_version: string, subscriptionId: string): Observable<FirewallPolicyRuleGroupListResult> {
			return this.http.get<FirewallPolicyRuleGroupListResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Network/firewallPolicies/' + (firewallPolicyName == null ? '' : encodeURIComponent(firewallPolicyName)) + '/ruleGroups&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Gets the specified FirewallPolicyRuleGroup.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/firewallPolicies/{firewallPolicyName}/ruleGroups/{ruleGroupName}
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} firewallPolicyName The name of the Firewall Policy.
		 * @param {string} ruleGroupName The name of the FirewallPolicyRuleGroup.
		 * @param {string} api_version Client API version.
		 * @param {string} subscriptionId The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @return {FirewallPolicyRuleGroup} Request successful. The operation returns a FirewallPolicyRuleGroup resource.
		 */
		FirewallPolicyRuleGroups_Get(resourceGroupName: string, firewallPolicyName: string, ruleGroupName: string, api_version: string, subscriptionId: string): Observable<FirewallPolicyRuleGroup> {
			return this.http.get<FirewallPolicyRuleGroup>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Network/firewallPolicies/' + (firewallPolicyName == null ? '' : encodeURIComponent(firewallPolicyName)) + '/ruleGroups/' + (ruleGroupName == null ? '' : encodeURIComponent(ruleGroupName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Creates or updates the specified FirewallPolicyRuleGroup.
		 * Put subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/firewallPolicies/{firewallPolicyName}/ruleGroups/{ruleGroupName}
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} firewallPolicyName The name of the Firewall Policy.
		 * @param {string} ruleGroupName The name of the FirewallPolicyRuleGroup.
		 * @param {string} api_version Client API version.
		 * @param {string} subscriptionId The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {FirewallPolicyRuleGroup} requestBody Parameters supplied to the create or update FirewallPolicyRuleGroup operation.
		 * @return {FirewallPolicyRuleGroup} Request successful. The operation returns the resulting FirewallPolicyRuleGroup resource.
		 */
		FirewallPolicyRuleGroups_CreateOrUpdate(resourceGroupName: string, firewallPolicyName: string, ruleGroupName: string, api_version: string, subscriptionId: string, requestBody: FirewallPolicyRuleGroup): Observable<FirewallPolicyRuleGroup> {
			return this.http.put<FirewallPolicyRuleGroup>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Network/firewallPolicies/' + (firewallPolicyName == null ? '' : encodeURIComponent(firewallPolicyName)) + '/ruleGroups/' + (ruleGroupName == null ? '' : encodeURIComponent(ruleGroupName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes the specified FirewallPolicyRuleGroup.
		 * Delete subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/firewallPolicies/{firewallPolicyName}/ruleGroups/{ruleGroupName}
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} firewallPolicyName The name of the Firewall Policy.
		 * @param {string} ruleGroupName The name of the FirewallPolicyRuleGroup.
		 * @param {string} api_version Client API version.
		 * @param {string} subscriptionId The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @return {void} Delete successful.
		 */
		FirewallPolicyRuleGroups_Delete(resourceGroupName: string, firewallPolicyName: string, ruleGroupName: string, api_version: string, subscriptionId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Network/firewallPolicies/' + (firewallPolicyName == null ? '' : encodeURIComponent(firewallPolicyName)) + '/ruleGroups/' + (ruleGroupName == null ? '' : encodeURIComponent(ruleGroupName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { observe: 'response', responseType: 'text' });
		}
	}

}

