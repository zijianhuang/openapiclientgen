import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface AzureFirewall {
	}
	export interface AzureFirewallFormProperties {
	}
	export function CreateAzureFirewallFormGroup() {
		return new FormGroup<AzureFirewallFormProperties>({
		});

	}


	/** Properties of an application rule. */
	export interface AzureFirewallApplicationRule {

		/** Description of the rule. */
		description?: string | null;

		/** List of FQDN Tags for this rule. */
		fqdnTags?: Array<string>;

		/** Name of the application rule. */
		name?: string | null;

		/** Array of ApplicationRuleProtocols. */
		protocols?: Array<AzureFirewallApplicationRuleProtocol>;

		/** List of source IP addresses for this rule. */
		sourceAddresses?: Array<string>;

		/** List of FQDNs for this rule. */
		targetFqdns?: Array<string>;
	}

	/** Properties of an application rule. */
	export interface AzureFirewallApplicationRuleFormProperties {

		/** Description of the rule. */
		description: FormControl<string | null | undefined>,

		/** Name of the application rule. */
		name: FormControl<string | null | undefined>,
	}
	export function CreateAzureFirewallApplicationRuleFormGroup() {
		return new FormGroup<AzureFirewallApplicationRuleFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Properties of the application rule protocol. */
	export interface AzureFirewallApplicationRuleProtocol {

		/**
		 * Port number for the protocol, cannot be greater than 64000. This field is optional.
		 * Minimum: 0
		 * Maximum: 64000
		 */
		port?: number | null;

		/** The protocol type of a Application Rule resource. */
		protocolType?: AzureFirewallApplicationRuleProtocolProtocolType | null;
	}

	/** Properties of the application rule protocol. */
	export interface AzureFirewallApplicationRuleProtocolFormProperties {

		/**
		 * Port number for the protocol, cannot be greater than 64000. This field is optional.
		 * Minimum: 0
		 * Maximum: 64000
		 */
		port: FormControl<number | null | undefined>,

		/** The protocol type of a Application Rule resource. */
		protocolType: FormControl<AzureFirewallApplicationRuleProtocolProtocolType | null | undefined>,
	}
	export function CreateAzureFirewallApplicationRuleProtocolFormGroup() {
		return new FormGroup<AzureFirewallApplicationRuleProtocolFormProperties>({
			port: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(64000)]),
			protocolType: new FormControl<AzureFirewallApplicationRuleProtocolProtocolType | null | undefined>(undefined),
		});

	}

	export enum AzureFirewallApplicationRuleProtocolProtocolType { Http = 0, Https = 1, Mssql = 2 }

	export interface AzureFirewallApplicationRuleCollection {
	}
	export interface AzureFirewallApplicationRuleCollectionFormProperties {
	}
	export function CreateAzureFirewallApplicationRuleCollectionFormGroup() {
		return new FormGroup<AzureFirewallApplicationRuleCollectionFormProperties>({
		});

	}


	/** Properties of the application rule collection. */
	export interface AzureFirewallApplicationRuleCollectionPropertiesFormat {

		/** Properties of the AzureFirewallRCAction. */
		action?: AzureFirewallRCAction;

		/**
		 * Priority of the application rule collection resource.
		 * Minimum: 100
		 * Maximum: 65000
		 */
		priority?: number | null;

		/** The current provisioning state. */
		provisioningState?: AzureFirewallApplicationRuleCollectionPropertiesFormatProvisioningState | null;

		/** Collection of rules used by a application rule collection. */
		rules?: Array<AzureFirewallApplicationRule>;
	}

	/** Properties of the application rule collection. */
	export interface AzureFirewallApplicationRuleCollectionPropertiesFormatFormProperties {

		/**
		 * Priority of the application rule collection resource.
		 * Minimum: 100
		 * Maximum: 65000
		 */
		priority: FormControl<number | null | undefined>,

		/** The current provisioning state. */
		provisioningState: FormControl<AzureFirewallApplicationRuleCollectionPropertiesFormatProvisioningState | null | undefined>,
	}
	export function CreateAzureFirewallApplicationRuleCollectionPropertiesFormatFormGroup() {
		return new FormGroup<AzureFirewallApplicationRuleCollectionPropertiesFormatFormProperties>({
			priority: new FormControl<number | null | undefined>(undefined, [Validators.min(100), Validators.max(65000)]),
			provisioningState: new FormControl<AzureFirewallApplicationRuleCollectionPropertiesFormatProvisioningState | null | undefined>(undefined),
		});

	}

	export enum AzureFirewallApplicationRuleCollectionPropertiesFormatProvisioningState { Succeeded = 0, Updating = 1, Deleting = 2, Failed = 3 }


	/** The protocol type of a Application Rule resource. */
	export enum AzureFirewallApplicationRuleProtocolType { Http = 0, Https = 1, Mssql = 2 }

	export interface AzureFirewallIPConfiguration {
	}
	export interface AzureFirewallIPConfigurationFormProperties {
	}
	export function CreateAzureFirewallIPConfigurationFormGroup() {
		return new FormGroup<AzureFirewallIPConfigurationFormProperties>({
		});

	}


	/** Properties of IP configuration of an Azure Firewall. */
	export interface AzureFirewallIPConfigurationPropertiesFormat {

		/** The Firewall Internal Load Balancer IP to be used as the next hop in User Defined Routes. */
		privateIPAddress?: string | null;

		/** The current provisioning state. */
		provisioningState?: AzureFirewallApplicationRuleCollectionPropertiesFormatProvisioningState | null;

		/** Reference to another subresource. */
		publicIPAddress?: any;

		/** Reference to another subresource. */
		subnet?: any;
	}

	/** Properties of IP configuration of an Azure Firewall. */
	export interface AzureFirewallIPConfigurationPropertiesFormatFormProperties {

		/** The Firewall Internal Load Balancer IP to be used as the next hop in User Defined Routes. */
		privateIPAddress: FormControl<string | null | undefined>,

		/** The current provisioning state. */
		provisioningState: FormControl<AzureFirewallApplicationRuleCollectionPropertiesFormatProvisioningState | null | undefined>,

		/** Reference to another subresource. */
		publicIPAddress: FormControl<any | null | undefined>,

		/** Reference to another subresource. */
		subnet: FormControl<any | null | undefined>,
	}
	export function CreateAzureFirewallIPConfigurationPropertiesFormatFormGroup() {
		return new FormGroup<AzureFirewallIPConfigurationPropertiesFormatFormProperties>({
			privateIPAddress: new FormControl<string | null | undefined>(undefined),
			provisioningState: new FormControl<AzureFirewallApplicationRuleCollectionPropertiesFormatProvisioningState | null | undefined>(undefined),
			publicIPAddress: new FormControl<any | null | undefined>(undefined),
			subnet: new FormControl<any | null | undefined>(undefined),
		});

	}


	/** Response for ListAzureFirewalls API service call. */
	export interface AzureFirewallListResult {

		/** URL to get the next set of results. */
		nextLink?: string | null;

		/** List of Azure Firewalls in a resource group. */
		value?: Array<AzureFirewall>;
	}

	/** Response for ListAzureFirewalls API service call. */
	export interface AzureFirewallListResultFormProperties {

		/** URL to get the next set of results. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateAzureFirewallListResultFormGroup() {
		return new FormGroup<AzureFirewallListResultFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** AzureFirewall NAT Rule Collection Action. */
	export interface AzureFirewallNatRCAction {

		/** The action type of a NAT rule collection. */
		type?: AzureFirewallNatRCActionType | null;
	}

	/** AzureFirewall NAT Rule Collection Action. */
	export interface AzureFirewallNatRCActionFormProperties {

		/** The action type of a NAT rule collection. */
		type: FormControl<AzureFirewallNatRCActionType | null | undefined>,
	}
	export function CreateAzureFirewallNatRCActionFormGroup() {
		return new FormGroup<AzureFirewallNatRCActionFormProperties>({
			type: new FormControl<AzureFirewallNatRCActionType | null | undefined>(undefined),
		});

	}

	export enum AzureFirewallNatRCActionType { Snat = 0, Dnat = 1 }


	/** Properties of a NAT rule. */
	export interface AzureFirewallNatRule {

		/** Description of the rule. */
		description?: string | null;

		/** List of destination IP addresses for this rule. Supports IP ranges, prefixes, and service tags. */
		destinationAddresses?: Array<string>;

		/** List of destination ports. */
		destinationPorts?: Array<string>;

		/** Name of the NAT rule. */
		name?: string | null;

		/** Array of AzureFirewallNetworkRuleProtocols applicable to this NAT rule. */
		protocols?: Array<AzureFirewallNetworkRuleProtocol>;

		/** List of source IP addresses for this rule. */
		sourceAddresses?: Array<string>;

		/** The translated address for this NAT rule. */
		translatedAddress?: string | null;

		/** The translated port for this NAT rule. */
		translatedPort?: string | null;
	}

	/** Properties of a NAT rule. */
	export interface AzureFirewallNatRuleFormProperties {

		/** Description of the rule. */
		description: FormControl<string | null | undefined>,

		/** Name of the NAT rule. */
		name: FormControl<string | null | undefined>,

		/** The translated address for this NAT rule. */
		translatedAddress: FormControl<string | null | undefined>,

		/** The translated port for this NAT rule. */
		translatedPort: FormControl<string | null | undefined>,
	}
	export function CreateAzureFirewallNatRuleFormGroup() {
		return new FormGroup<AzureFirewallNatRuleFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			translatedAddress: new FormControl<string | null | undefined>(undefined),
			translatedPort: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The protocol of a Network Rule resource. */
	export enum AzureFirewallNetworkRuleProtocol { TCP = 0, UDP = 1, Any = 2, ICMP = 3 }

	export interface AzureFirewallNatRuleCollection {
	}
	export interface AzureFirewallNatRuleCollectionFormProperties {
	}
	export function CreateAzureFirewallNatRuleCollectionFormGroup() {
		return new FormGroup<AzureFirewallNatRuleCollectionFormProperties>({
		});

	}


	/** Properties of the NAT rule collection. */
	export interface AzureFirewallNatRuleCollectionProperties {

		/** AzureFirewall NAT Rule Collection Action. */
		action?: AzureFirewallNatRCAction;

		/**
		 * Priority of the NAT rule collection resource.
		 * Minimum: 100
		 * Maximum: 65000
		 */
		priority?: number | null;

		/** The current provisioning state. */
		provisioningState?: AzureFirewallApplicationRuleCollectionPropertiesFormatProvisioningState | null;

		/** Collection of rules used by a NAT rule collection. */
		rules?: Array<AzureFirewallNatRule>;
	}

	/** Properties of the NAT rule collection. */
	export interface AzureFirewallNatRuleCollectionPropertiesFormProperties {

		/**
		 * Priority of the NAT rule collection resource.
		 * Minimum: 100
		 * Maximum: 65000
		 */
		priority: FormControl<number | null | undefined>,

		/** The current provisioning state. */
		provisioningState: FormControl<AzureFirewallApplicationRuleCollectionPropertiesFormatProvisioningState | null | undefined>,
	}
	export function CreateAzureFirewallNatRuleCollectionPropertiesFormGroup() {
		return new FormGroup<AzureFirewallNatRuleCollectionPropertiesFormProperties>({
			priority: new FormControl<number | null | undefined>(undefined, [Validators.min(100), Validators.max(65000)]),
			provisioningState: new FormControl<AzureFirewallApplicationRuleCollectionPropertiesFormatProvisioningState | null | undefined>(undefined),
		});

	}


	/** Properties of the network rule. */
	export interface AzureFirewallNetworkRule {

		/** Description of the rule. */
		description?: string | null;

		/** List of destination IP addresses. */
		destinationAddresses?: Array<string>;

		/** List of destination ports. */
		destinationPorts?: Array<string>;

		/** Name of the network rule. */
		name?: string | null;

		/** Array of AzureFirewallNetworkRuleProtocols. */
		protocols?: Array<AzureFirewallNetworkRuleProtocol>;

		/** List of source IP addresses for this rule. */
		sourceAddresses?: Array<string>;
	}

	/** Properties of the network rule. */
	export interface AzureFirewallNetworkRuleFormProperties {

		/** Description of the rule. */
		description: FormControl<string | null | undefined>,

		/** Name of the network rule. */
		name: FormControl<string | null | undefined>,
	}
	export function CreateAzureFirewallNetworkRuleFormGroup() {
		return new FormGroup<AzureFirewallNetworkRuleFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface AzureFirewallNetworkRuleCollection {
	}
	export interface AzureFirewallNetworkRuleCollectionFormProperties {
	}
	export function CreateAzureFirewallNetworkRuleCollectionFormGroup() {
		return new FormGroup<AzureFirewallNetworkRuleCollectionFormProperties>({
		});

	}


	/** Properties of the network rule collection. */
	export interface AzureFirewallNetworkRuleCollectionPropertiesFormat {

		/** Properties of the AzureFirewallRCAction. */
		action?: AzureFirewallRCAction;

		/**
		 * Priority of the network rule collection resource.
		 * Minimum: 100
		 * Maximum: 65000
		 */
		priority?: number | null;

		/** The current provisioning state. */
		provisioningState?: AzureFirewallApplicationRuleCollectionPropertiesFormatProvisioningState | null;

		/** Collection of rules used by a network rule collection. */
		rules?: Array<AzureFirewallNetworkRule>;
	}

	/** Properties of the network rule collection. */
	export interface AzureFirewallNetworkRuleCollectionPropertiesFormatFormProperties {

		/**
		 * Priority of the network rule collection resource.
		 * Minimum: 100
		 * Maximum: 65000
		 */
		priority: FormControl<number | null | undefined>,

		/** The current provisioning state. */
		provisioningState: FormControl<AzureFirewallApplicationRuleCollectionPropertiesFormatProvisioningState | null | undefined>,
	}
	export function CreateAzureFirewallNetworkRuleCollectionPropertiesFormatFormGroup() {
		return new FormGroup<AzureFirewallNetworkRuleCollectionPropertiesFormatFormProperties>({
			priority: new FormControl<number | null | undefined>(undefined, [Validators.min(100), Validators.max(65000)]),
			provisioningState: new FormControl<AzureFirewallApplicationRuleCollectionPropertiesFormatProvisioningState | null | undefined>(undefined),
		});

	}


	/** Properties of the Azure Firewall. */
	export interface AzureFirewallPropertiesFormat {

		/** Collection of application rule collections used by Azure Firewall. */
		applicationRuleCollections?: Array<AzureFirewallApplicationRuleCollection>;

		/** Reference to another subresource. */
		firewallPolicy?: any;

		/** IP addresses associated with azure firewall. */
		hubIpAddresses?: HubIPAddresses;

		/** IP configuration of the Azure Firewall resource. */
		ipConfigurations?: Array<AzureFirewallIPConfiguration>;

		/** Collection of NAT rule collections used by Azure Firewall. */
		natRuleCollections?: Array<AzureFirewallNatRuleCollection>;

		/** Collection of network rule collections used by Azure Firewall. */
		networkRuleCollections?: Array<AzureFirewallNetworkRuleCollection>;

		/** The current provisioning state. */
		provisioningState?: AzureFirewallApplicationRuleCollectionPropertiesFormatProvisioningState | null;

		/** SKU of an Azure Firewall. */
		sku?: AzureFirewallSku;

		/** The operation mode for Threat Intel. */
		threatIntelMode?: AzureFirewallPropertiesFormatThreatIntelMode | null;

		/** Reference to another subresource. */
		virtualHub?: any;
	}

	/** Properties of the Azure Firewall. */
	export interface AzureFirewallPropertiesFormatFormProperties {

		/** Reference to another subresource. */
		firewallPolicy: FormControl<any | null | undefined>,

		/** The current provisioning state. */
		provisioningState: FormControl<AzureFirewallApplicationRuleCollectionPropertiesFormatProvisioningState | null | undefined>,

		/** The operation mode for Threat Intel. */
		threatIntelMode: FormControl<AzureFirewallPropertiesFormatThreatIntelMode | null | undefined>,

		/** Reference to another subresource. */
		virtualHub: FormControl<any | null | undefined>,
	}
	export function CreateAzureFirewallPropertiesFormatFormGroup() {
		return new FormGroup<AzureFirewallPropertiesFormatFormProperties>({
			firewallPolicy: new FormControl<any | null | undefined>(undefined),
			provisioningState: new FormControl<AzureFirewallApplicationRuleCollectionPropertiesFormatProvisioningState | null | undefined>(undefined),
			threatIntelMode: new FormControl<AzureFirewallPropertiesFormatThreatIntelMode | null | undefined>(undefined),
			virtualHub: new FormControl<any | null | undefined>(undefined),
		});

	}

	export enum AzureFirewallPropertiesFormatThreatIntelMode { Alert = 0, Deny = 1, Off = 2 }


	/** Public IP Address associated with azure firewall. */
	export interface AzureFirewallPublicIPAddress {

		/** Public IP Address value. */
		address?: string | null;
	}

	/** Public IP Address associated with azure firewall. */
	export interface AzureFirewallPublicIPAddressFormProperties {

		/** Public IP Address value. */
		address: FormControl<string | null | undefined>,
	}
	export function CreateAzureFirewallPublicIPAddressFormGroup() {
		return new FormGroup<AzureFirewallPublicIPAddressFormProperties>({
			address: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Properties of the AzureFirewallRCAction. */
	export interface AzureFirewallRCAction {

		/** The action type of a rule collection. */
		type?: AzureFirewallRCActionType | null;
	}

	/** Properties of the AzureFirewallRCAction. */
	export interface AzureFirewallRCActionFormProperties {

		/** The action type of a rule collection. */
		type: FormControl<AzureFirewallRCActionType | null | undefined>,
	}
	export function CreateAzureFirewallRCActionFormGroup() {
		return new FormGroup<AzureFirewallRCActionFormProperties>({
			type: new FormControl<AzureFirewallRCActionType | null | undefined>(undefined),
		});

	}

	export enum AzureFirewallRCActionType { Allow = 0, Deny = 1 }


	/** SKU of an Azure Firewall. */
	export interface AzureFirewallSku {

		/** Name of an Azure Firewall SKU. */
		name?: AzureFirewallSkuName | null;

		/** Tier of an Azure Firewall. */
		tier?: AzureFirewallSkuTier | null;
	}

	/** SKU of an Azure Firewall. */
	export interface AzureFirewallSkuFormProperties {

		/** Name of an Azure Firewall SKU. */
		name: FormControl<AzureFirewallSkuName | null | undefined>,

		/** Tier of an Azure Firewall. */
		tier: FormControl<AzureFirewallSkuTier | null | undefined>,
	}
	export function CreateAzureFirewallSkuFormGroup() {
		return new FormGroup<AzureFirewallSkuFormProperties>({
			name: new FormControl<AzureFirewallSkuName | null | undefined>(undefined),
			tier: new FormControl<AzureFirewallSkuTier | null | undefined>(undefined),
		});

	}

	export enum AzureFirewallSkuName { AZFW_VNet = 0, AZFW_Hub = 1 }

	export enum AzureFirewallSkuTier { Standard = 0 }


	/** The operation mode for Threat Intel. */
	export enum AzureFirewallThreatIntelMode { Alert = 0, Deny = 1, Off = 2 }


	/** IP addresses associated with azure firewall. */
	export interface HubIPAddresses {

		/** Private IP Address associated with azure firewall. */
		privateIPAddress?: string | null;

		/** List of Public IP addresses associated with azure firewall. */
		publicIPAddresses?: Array<AzureFirewallPublicIPAddress>;
	}

	/** IP addresses associated with azure firewall. */
	export interface HubIPAddressesFormProperties {

		/** Private IP Address associated with azure firewall. */
		privateIPAddress: FormControl<string | null | undefined>,
	}
	export function CreateHubIPAddressesFormGroup() {
		return new FormGroup<HubIPAddressesFormProperties>({
			privateIPAddress: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Gets all the Azure Firewalls in a subscription.
		 * Get subscriptions/{subscriptionId}/providers/Microsoft.Network/azureFirewalls
		 * @param {string} api_version Client API version.
		 * @param {string} subscriptionId The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @return {AzureFirewallListResult} Success. The operation returns a list of AzureFirewall resources.
		 */
		AzureFirewalls_ListAll(api_version: string, subscriptionId: string): Observable<AzureFirewallListResult> {
			return this.http.get<AzureFirewallListResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/providers/Microsoft.Network/azureFirewalls?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Lists all Azure Firewalls in a resource group.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/azureFirewalls
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} api_version Client API version.
		 * @param {string} subscriptionId The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @return {AzureFirewallListResult} Success. The operation returns a list of AzureFirewall resources.
		 */
		AzureFirewalls_List(resourceGroupName: string, api_version: string, subscriptionId: string): Observable<AzureFirewallListResult> {
			return this.http.get<AzureFirewallListResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Network/azureFirewalls&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Gets the specified Azure Firewall.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/azureFirewalls/{azureFirewallName}
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} azureFirewallName The name of the Azure Firewall.
		 * @param {string} api_version Client API version.
		 * @param {string} subscriptionId The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @return {AzureFirewall} Request successful. The operation returns an AzureFirewall resource.
		 */
		AzureFirewalls_Get(resourceGroupName: string, azureFirewallName: string, api_version: string, subscriptionId: string): Observable<AzureFirewall> {
			return this.http.get<AzureFirewall>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Network/azureFirewalls/' + (azureFirewallName == null ? '' : encodeURIComponent(azureFirewallName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Creates or updates the specified Azure Firewall.
		 * Put subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/azureFirewalls/{azureFirewallName}
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} azureFirewallName The name of the Azure Firewall.
		 * @param {string} api_version Client API version.
		 * @param {string} subscriptionId The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {AzureFirewall} requestBody Parameters supplied to the create or update Azure Firewall operation.
		 * @return {AzureFirewall} Update successful. The operation returns the resulting AzureFirewall resource.
		 */
		AzureFirewalls_CreateOrUpdate(resourceGroupName: string, azureFirewallName: string, api_version: string, subscriptionId: string, requestBody: AzureFirewall): Observable<AzureFirewall> {
			return this.http.put<AzureFirewall>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Network/azureFirewalls/' + (azureFirewallName == null ? '' : encodeURIComponent(azureFirewallName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes the specified Azure Firewall.
		 * Delete subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/azureFirewalls/{azureFirewallName}
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} azureFirewallName The name of the Azure Firewall.
		 * @param {string} api_version Client API version.
		 * @param {string} subscriptionId The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @return {void} Delete successful.
		 */
		AzureFirewalls_Delete(resourceGroupName: string, azureFirewallName: string, api_version: string, subscriptionId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Network/azureFirewalls/' + (azureFirewallName == null ? '' : encodeURIComponent(azureFirewallName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Updates tags for an Azure Firewall resource.
		 * Patch subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/azureFirewalls/{azureFirewallName}
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} azureFirewallName The name of the Azure Firewall.
		 * @param {string} api_version Client API version.
		 * @param {string} subscriptionId The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {AzureFirewall} requestBody Parameters supplied to the create or update Azure Firewall operation.
		 * @return {AzureFirewall} Update successful. The operation returns the resulting AzureFirewall resource.
		 */
		AzureFirewalls_UpdateTags(resourceGroupName: string, azureFirewallName: string, api_version: string, subscriptionId: string, requestBody: AzureFirewall): Observable<AzureFirewall> {
			return this.http.patch<AzureFirewall>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Network/azureFirewalls/' + (azureFirewallName == null ? '' : encodeURIComponent(azureFirewallName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

}

