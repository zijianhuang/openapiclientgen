import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** Reference to an express route circuit. */
	export interface ExpressRouteCircuitReference {

		/** Corresponding Express Route Circuit Id. */
		id?: string | null;
	}

	/** Reference to an express route circuit. */
	export interface ExpressRouteCircuitReferenceFormProperties {

		/** Corresponding Express Route Circuit Id. */
		id: FormControl<string | null | undefined>,
	}
	export function CreateExpressRouteCircuitReferenceFormGroup() {
		return new FormGroup<ExpressRouteCircuitReferenceFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ExpressRouteCrossConnection {
	}
	export interface ExpressRouteCrossConnectionFormProperties {
	}
	export function CreateExpressRouteCrossConnectionFormGroup() {
		return new FormGroup<ExpressRouteCrossConnectionFormProperties>({
		});

	}


	/** Response for ListExpressRouteCrossConnection API service call. */
	export interface ExpressRouteCrossConnectionListResult {

		/** The URL to get the next set of results. */
		nextLink?: string | null;

		/** A list of ExpressRouteCrossConnection resources. */
		value?: Array<ExpressRouteCrossConnection>;
	}

	/** Response for ListExpressRouteCrossConnection API service call. */
	export interface ExpressRouteCrossConnectionListResultFormProperties {

		/** The URL to get the next set of results. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateExpressRouteCrossConnectionListResultFormGroup() {
		return new FormGroup<ExpressRouteCrossConnectionListResultFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ExpressRouteCrossConnectionPeering {
	}
	export interface ExpressRouteCrossConnectionPeeringFormProperties {
	}
	export function CreateExpressRouteCrossConnectionPeeringFormGroup() {
		return new FormGroup<ExpressRouteCrossConnectionPeeringFormProperties>({
		});

	}


	/** Response for ListPeering API service call retrieves all peerings that belong to an ExpressRouteCrossConnection. */
	export interface ExpressRouteCrossConnectionPeeringList {

		/** The URL to get the next set of results. */
		nextLink?: string | null;

		/** The peerings in an express route cross connection. */
		value?: Array<ExpressRouteCrossConnectionPeering>;
	}

	/** Response for ListPeering API service call retrieves all peerings that belong to an ExpressRouteCrossConnection. */
	export interface ExpressRouteCrossConnectionPeeringListFormProperties {

		/** The URL to get the next set of results. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateExpressRouteCrossConnectionPeeringListFormGroup() {
		return new FormGroup<ExpressRouteCrossConnectionPeeringListFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Properties of express route cross connection peering. */
	export interface ExpressRouteCrossConnectionPeeringProperties {

		/** The Azure ASN. */
		azureASN?: number | null;

		/** The GatewayManager Etag. */
		gatewayManagerEtag?: string | null;

		/** Contains IPv6 peering config. */
		ipv6PeeringConfig?: any;

		/** Who was the last to modify the peering. */
		lastModifiedBy?: string | null;

		/** Specifies the peering configuration. */
		microsoftPeeringConfig?: any;

		/**
		 * The peer ASN.
		 * Minimum: 1
		 * Maximum: 4294967295
		 */
		peerASN?: number | null;

		/** The peering type. */
		peeringType?: ExpressRouteCrossConnectionPeeringPropertiesPeeringType | null;

		/** The primary port. */
		primaryAzurePort?: string | null;

		/** The primary address prefix. */
		primaryPeerAddressPrefix?: string | null;

		/** The current provisioning state. */
		provisioningState?: ExpressRouteCrossConnectionPeeringPropertiesProvisioningState | null;

		/** The secondary port. */
		secondaryAzurePort?: string | null;

		/** The secondary address prefix. */
		secondaryPeerAddressPrefix?: string | null;

		/** The shared key. */
		sharedKey?: string | null;

		/** The state of peering. */
		state?: ExpressRouteCrossConnectionPeeringPropertiesState | null;

		/** The VLAN ID. */
		vlanId?: number | null;
	}

	/** Properties of express route cross connection peering. */
	export interface ExpressRouteCrossConnectionPeeringPropertiesFormProperties {

		/** The Azure ASN. */
		azureASN: FormControl<number | null | undefined>,

		/** The GatewayManager Etag. */
		gatewayManagerEtag: FormControl<string | null | undefined>,

		/** Contains IPv6 peering config. */
		ipv6PeeringConfig: FormControl<any | null | undefined>,

		/** Who was the last to modify the peering. */
		lastModifiedBy: FormControl<string | null | undefined>,

		/** Specifies the peering configuration. */
		microsoftPeeringConfig: FormControl<any | null | undefined>,

		/**
		 * The peer ASN.
		 * Minimum: 1
		 * Maximum: 4294967295
		 */
		peerASN: FormControl<number | null | undefined>,

		/** The peering type. */
		peeringType: FormControl<ExpressRouteCrossConnectionPeeringPropertiesPeeringType | null | undefined>,

		/** The primary port. */
		primaryAzurePort: FormControl<string | null | undefined>,

		/** The primary address prefix. */
		primaryPeerAddressPrefix: FormControl<string | null | undefined>,

		/** The current provisioning state. */
		provisioningState: FormControl<ExpressRouteCrossConnectionPeeringPropertiesProvisioningState | null | undefined>,

		/** The secondary port. */
		secondaryAzurePort: FormControl<string | null | undefined>,

		/** The secondary address prefix. */
		secondaryPeerAddressPrefix: FormControl<string | null | undefined>,

		/** The shared key. */
		sharedKey: FormControl<string | null | undefined>,

		/** The state of peering. */
		state: FormControl<ExpressRouteCrossConnectionPeeringPropertiesState | null | undefined>,

		/** The VLAN ID. */
		vlanId: FormControl<number | null | undefined>,
	}
	export function CreateExpressRouteCrossConnectionPeeringPropertiesFormGroup() {
		return new FormGroup<ExpressRouteCrossConnectionPeeringPropertiesFormProperties>({
			azureASN: new FormControl<number | null | undefined>(undefined),
			gatewayManagerEtag: new FormControl<string | null | undefined>(undefined),
			ipv6PeeringConfig: new FormControl<any | null | undefined>(undefined),
			lastModifiedBy: new FormControl<string | null | undefined>(undefined),
			microsoftPeeringConfig: new FormControl<any | null | undefined>(undefined),
			peerASN: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(4294967295)]),
			peeringType: new FormControl<ExpressRouteCrossConnectionPeeringPropertiesPeeringType | null | undefined>(undefined),
			primaryAzurePort: new FormControl<string | null | undefined>(undefined),
			primaryPeerAddressPrefix: new FormControl<string | null | undefined>(undefined),
			provisioningState: new FormControl<ExpressRouteCrossConnectionPeeringPropertiesProvisioningState | null | undefined>(undefined),
			secondaryAzurePort: new FormControl<string | null | undefined>(undefined),
			secondaryPeerAddressPrefix: new FormControl<string | null | undefined>(undefined),
			sharedKey: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<ExpressRouteCrossConnectionPeeringPropertiesState | null | undefined>(undefined),
			vlanId: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum ExpressRouteCrossConnectionPeeringPropertiesPeeringType { AzurePublicPeering = 'AzurePublicPeering', AzurePrivatePeering = 'AzurePrivatePeering', MicrosoftPeering = 'MicrosoftPeering' }

	export enum ExpressRouteCrossConnectionPeeringPropertiesProvisioningState { Succeeded = 'Succeeded', Updating = 'Updating', Deleting = 'Deleting', Failed = 'Failed' }

	export enum ExpressRouteCrossConnectionPeeringPropertiesState { Disabled = 'Disabled', Enabled = 'Enabled' }


	/** Properties of ExpressRouteCrossConnection. */
	export interface ExpressRouteCrossConnectionProperties {

		/** The circuit bandwidth In Mbps. */
		bandwidthInMbps?: number | null;

		/** Reference to an express route circuit. */
		expressRouteCircuit?: ExpressRouteCircuitReference;

		/** The peering location of the ExpressRoute circuit. */
		peeringLocation?: string | null;

		/** The list of peerings. */
		peerings?: Array<ExpressRouteCrossConnectionPeering>;

		/** The name of the primary port. */
		primaryAzurePort?: string | null;

		/** The current provisioning state. */
		provisioningState?: ExpressRouteCrossConnectionPeeringPropertiesProvisioningState | null;

		/** The identifier of the circuit traffic. */
		sTag?: number | null;

		/** The name of the secondary port. */
		secondaryAzurePort?: string | null;

		/** Additional read only notes set by the connectivity provider. */
		serviceProviderNotes?: string | null;

		/** The ServiceProviderProvisioningState state of the resource. */
		serviceProviderProvisioningState?: ExpressRouteCrossConnectionPropertiesServiceProviderProvisioningState | null;
	}

	/** Properties of ExpressRouteCrossConnection. */
	export interface ExpressRouteCrossConnectionPropertiesFormProperties {

		/** The circuit bandwidth In Mbps. */
		bandwidthInMbps: FormControl<number | null | undefined>,

		/** The peering location of the ExpressRoute circuit. */
		peeringLocation: FormControl<string | null | undefined>,

		/** The name of the primary port. */
		primaryAzurePort: FormControl<string | null | undefined>,

		/** The current provisioning state. */
		provisioningState: FormControl<ExpressRouteCrossConnectionPeeringPropertiesProvisioningState | null | undefined>,

		/** The identifier of the circuit traffic. */
		sTag: FormControl<number | null | undefined>,

		/** The name of the secondary port. */
		secondaryAzurePort: FormControl<string | null | undefined>,

		/** Additional read only notes set by the connectivity provider. */
		serviceProviderNotes: FormControl<string | null | undefined>,

		/** The ServiceProviderProvisioningState state of the resource. */
		serviceProviderProvisioningState: FormControl<ExpressRouteCrossConnectionPropertiesServiceProviderProvisioningState | null | undefined>,
	}
	export function CreateExpressRouteCrossConnectionPropertiesFormGroup() {
		return new FormGroup<ExpressRouteCrossConnectionPropertiesFormProperties>({
			bandwidthInMbps: new FormControl<number | null | undefined>(undefined),
			peeringLocation: new FormControl<string | null | undefined>(undefined),
			primaryAzurePort: new FormControl<string | null | undefined>(undefined),
			provisioningState: new FormControl<ExpressRouteCrossConnectionPeeringPropertiesProvisioningState | null | undefined>(undefined),
			sTag: new FormControl<number | null | undefined>(undefined),
			secondaryAzurePort: new FormControl<string | null | undefined>(undefined),
			serviceProviderNotes: new FormControl<string | null | undefined>(undefined),
			serviceProviderProvisioningState: new FormControl<ExpressRouteCrossConnectionPropertiesServiceProviderProvisioningState | null | undefined>(undefined),
		});

	}

	export enum ExpressRouteCrossConnectionPropertiesServiceProviderProvisioningState { NotProvisioned = 'NotProvisioned', Provisioning = 'Provisioning', Provisioned = 'Provisioned', Deprovisioning = 'Deprovisioning' }


	/** The routes table associated with the ExpressRouteCircuit. */
	export interface ExpressRouteCrossConnectionRoutesTableSummary {

		/** Autonomous system number. */
		asn?: number | null;

		/** IP address of Neighbor router. */
		neighbor?: string | null;

		/** Current state of the BGP session, and the number of prefixes that have been received from a neighbor or peer group. */
		stateOrPrefixesReceived?: string | null;

		/** The length of time that the BGP session has been in the Established state, or the current status if not in the Established state. */
		upDown?: string | null;
	}

	/** The routes table associated with the ExpressRouteCircuit. */
	export interface ExpressRouteCrossConnectionRoutesTableSummaryFormProperties {

		/** Autonomous system number. */
		asn: FormControl<number | null | undefined>,

		/** IP address of Neighbor router. */
		neighbor: FormControl<string | null | undefined>,

		/** Current state of the BGP session, and the number of prefixes that have been received from a neighbor or peer group. */
		stateOrPrefixesReceived: FormControl<string | null | undefined>,

		/** The length of time that the BGP session has been in the Established state, or the current status if not in the Established state. */
		upDown: FormControl<string | null | undefined>,
	}
	export function CreateExpressRouteCrossConnectionRoutesTableSummaryFormGroup() {
		return new FormGroup<ExpressRouteCrossConnectionRoutesTableSummaryFormProperties>({
			asn: new FormControl<number | null | undefined>(undefined),
			neighbor: new FormControl<string | null | undefined>(undefined),
			stateOrPrefixesReceived: new FormControl<string | null | undefined>(undefined),
			upDown: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response for ListRoutesTable associated with the Express Route Cross Connections. */
	export interface ExpressRouteCrossConnectionsRoutesTableSummaryListResult {

		/** The URL to get the next set of results. */
		nextLink?: string | null;

		/** A list of the routes table. */
		value?: Array<ExpressRouteCrossConnectionRoutesTableSummary>;
	}

	/** Response for ListRoutesTable associated with the Express Route Cross Connections. */
	export interface ExpressRouteCrossConnectionsRoutesTableSummaryListResultFormProperties {

		/** The URL to get the next set of results. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateExpressRouteCrossConnectionsRoutesTableSummaryListResultFormGroup() {
		return new FormGroup<ExpressRouteCrossConnectionsRoutesTableSummaryListResultFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Retrieves all the ExpressRouteCrossConnections in a subscription.
		 * Get subscriptions/{subscriptionId}/providers/Microsoft.Network/expressRouteCrossConnections
		 * @param {string} api_version Client API version.
		 * @param {string} subscriptionId The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @return {ExpressRouteCrossConnectionListResult} Request successful. The operation returns a list of ExpressRouteCrossConnection resources. If there are no cross connection resources an empty list is returned.
		 */
		ExpressRouteCrossConnections_List(api_version: string, subscriptionId: string): Observable<ExpressRouteCrossConnectionListResult> {
			return this.http.get<ExpressRouteCrossConnectionListResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/providers/Microsoft.Network/expressRouteCrossConnections?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Retrieves all the ExpressRouteCrossConnections in a resource group.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/expressRouteCrossConnections
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} api_version Client API version.
		 * @param {string} subscriptionId The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @return {ExpressRouteCrossConnectionListResult} Request successful.The operation returns a list of ExpressRouteCrossConnection resources. If there are no cross connection resources an empty list is returned.
		 */
		ExpressRouteCrossConnections_ListByResourceGroup(resourceGroupName: string, api_version: string, subscriptionId: string): Observable<ExpressRouteCrossConnectionListResult> {
			return this.http.get<ExpressRouteCrossConnectionListResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Network/expressRouteCrossConnections&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Gets details about the specified ExpressRouteCrossConnection.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/expressRouteCrossConnections/{crossConnectionName}
		 * @param {string} resourceGroupName The name of the resource group (peering location of the circuit).
		 * @param {string} crossConnectionName The name of the ExpressRouteCrossConnection (service key of the circuit).
		 * @param {string} api_version Client API version.
		 * @param {string} subscriptionId The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @return {ExpressRouteCrossConnection} Request successful. The operation returns the resulting ExpressRouteCrossConnection resource.
		 */
		ExpressRouteCrossConnections_Get(resourceGroupName: string, crossConnectionName: string, api_version: string, subscriptionId: string): Observable<ExpressRouteCrossConnection> {
			return this.http.get<ExpressRouteCrossConnection>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Network/expressRouteCrossConnections/' + (crossConnectionName == null ? '' : encodeURIComponent(crossConnectionName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Update the specified ExpressRouteCrossConnection.
		 * Put subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/expressRouteCrossConnections/{crossConnectionName}
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} crossConnectionName The name of the ExpressRouteCrossConnection.
		 * @param {string} api_version Client API version.
		 * @param {string} subscriptionId The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {ExpressRouteCrossConnection} requestBody Parameters supplied to the update express route crossConnection operation.
		 * @return {ExpressRouteCrossConnection} Update successful. The operation returns the resulting ExpressRouteCrossConnection resource.
		 */
		ExpressRouteCrossConnections_CreateOrUpdate(resourceGroupName: string, crossConnectionName: string, api_version: string, subscriptionId: string, requestBody: ExpressRouteCrossConnection): Observable<ExpressRouteCrossConnection> {
			return this.http.put<ExpressRouteCrossConnection>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Network/expressRouteCrossConnections/' + (crossConnectionName == null ? '' : encodeURIComponent(crossConnectionName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Updates an express route cross connection tags.
		 * Patch subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/expressRouteCrossConnections/{crossConnectionName}
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} crossConnectionName The name of the cross connection.
		 * @param {string} api_version Client API version.
		 * @param {string} subscriptionId The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {any} requestBody Parameters supplied to update express route cross connection tags.
		 * @return {ExpressRouteCrossConnection} Update successful. The operation returns the resulting ExpressRouteCrossConnection resource.
		 */
		ExpressRouteCrossConnections_UpdateTags(resourceGroupName: string, crossConnectionName: string, api_version: string, subscriptionId: string, requestBody: any): Observable<ExpressRouteCrossConnection> {
			return this.http.patch<ExpressRouteCrossConnection>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Network/expressRouteCrossConnections/' + (crossConnectionName == null ? '' : encodeURIComponent(crossConnectionName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets all peerings in a specified ExpressRouteCrossConnection.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/expressRouteCrossConnections/{crossConnectionName}/peerings
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} crossConnectionName The name of the ExpressRouteCrossConnection.
		 * @param {string} api_version Client API version.
		 * @param {string} subscriptionId The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @return {ExpressRouteCrossConnectionPeeringList} Request successful. The operation returns a list of ExpressRouteCrossConnectionPeering resources.
		 */
		ExpressRouteCrossConnectionPeerings_List(resourceGroupName: string, crossConnectionName: string, api_version: string, subscriptionId: string): Observable<ExpressRouteCrossConnectionPeeringList> {
			return this.http.get<ExpressRouteCrossConnectionPeeringList>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Network/expressRouteCrossConnections/' + (crossConnectionName == null ? '' : encodeURIComponent(crossConnectionName)) + '/peerings&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Gets the specified peering for the ExpressRouteCrossConnection.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/expressRouteCrossConnections/{crossConnectionName}/peerings/{peeringName}
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} crossConnectionName The name of the ExpressRouteCrossConnection.
		 * @param {string} peeringName The name of the peering.
		 * @param {string} api_version Client API version.
		 * @param {string} subscriptionId The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @return {ExpressRouteCrossConnectionPeering} Request successful. The operation returns the resulting ExpressRouteCrossConnectionPeering resource.
		 */
		ExpressRouteCrossConnectionPeerings_Get(resourceGroupName: string, crossConnectionName: string, peeringName: string, api_version: string, subscriptionId: string): Observable<ExpressRouteCrossConnectionPeering> {
			return this.http.get<ExpressRouteCrossConnectionPeering>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Network/expressRouteCrossConnections/' + (crossConnectionName == null ? '' : encodeURIComponent(crossConnectionName)) + '/peerings/' + (peeringName == null ? '' : encodeURIComponent(peeringName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Creates or updates a peering in the specified ExpressRouteCrossConnection.
		 * Put subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/expressRouteCrossConnections/{crossConnectionName}/peerings/{peeringName}
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} crossConnectionName The name of the ExpressRouteCrossConnection.
		 * @param {string} peeringName The name of the peering.
		 * @param {string} api_version Client API version.
		 * @param {string} subscriptionId The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {ExpressRouteCrossConnectionPeering} requestBody Parameters supplied to the create or update ExpressRouteCrossConnection peering operation.
		 * @return {ExpressRouteCrossConnectionPeering} Update successful. The operation returns the resulting ExpressRouteCrossConnectionPeering resource.
		 */
		ExpressRouteCrossConnectionPeerings_CreateOrUpdate(resourceGroupName: string, crossConnectionName: string, peeringName: string, api_version: string, subscriptionId: string, requestBody: ExpressRouteCrossConnectionPeering): Observable<ExpressRouteCrossConnectionPeering> {
			return this.http.put<ExpressRouteCrossConnectionPeering>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Network/expressRouteCrossConnections/' + (crossConnectionName == null ? '' : encodeURIComponent(crossConnectionName)) + '/peerings/' + (peeringName == null ? '' : encodeURIComponent(peeringName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes the specified peering from the ExpressRouteCrossConnection.
		 * Delete subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/expressRouteCrossConnections/{crossConnectionName}/peerings/{peeringName}
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} crossConnectionName The name of the ExpressRouteCrossConnection.
		 * @param {string} peeringName The name of the peering.
		 * @param {string} api_version Client API version.
		 * @param {string} subscriptionId The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @return {void} Delete successful.
		 */
		ExpressRouteCrossConnectionPeerings_Delete(resourceGroupName: string, crossConnectionName: string, peeringName: string, api_version: string, subscriptionId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Network/expressRouteCrossConnections/' + (crossConnectionName == null ? '' : encodeURIComponent(crossConnectionName)) + '/peerings/' + (peeringName == null ? '' : encodeURIComponent(peeringName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets the currently advertised ARP table associated with the express route cross connection in a resource group.
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/expressRouteCrossConnections/{crossConnectionName}/peerings/{peeringName}/arpTables/{devicePath}
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} crossConnectionName The name of the ExpressRouteCrossConnection.
		 * @param {string} peeringName The name of the peering.
		 * @param {string} devicePath The path of the device.
		 * @param {string} api_version Client API version.
		 * @param {string} subscriptionId The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @return {any} Request successful. The operation returns the resulting ExpressRouteCrossConnectionsArpTable resource.
		 */
		ExpressRouteCrossConnections_ListArpTable(resourceGroupName: string, crossConnectionName: string, peeringName: string, devicePath: string, api_version: string, subscriptionId: string): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Network/expressRouteCrossConnections/' + (crossConnectionName == null ? '' : encodeURIComponent(crossConnectionName)) + '/peerings/' + (peeringName == null ? '' : encodeURIComponent(peeringName)) + '/arpTables/' + (devicePath == null ? '' : encodeURIComponent(devicePath)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets the currently advertised routes table associated with the express route cross connection in a resource group.
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/expressRouteCrossConnections/{crossConnectionName}/peerings/{peeringName}/routeTables/{devicePath}
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} crossConnectionName The name of the ExpressRouteCrossConnection.
		 * @param {string} peeringName The name of the peering.
		 * @param {string} devicePath The path of the device.
		 * @param {string} api_version Client API version.
		 * @param {string} subscriptionId The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @return {any} Request successful. The operation returns the resulting ExpressRouteCrossConnectionsRouteTable resource.
		 */
		ExpressRouteCrossConnections_ListRoutesTable(resourceGroupName: string, crossConnectionName: string, peeringName: string, devicePath: string, api_version: string, subscriptionId: string): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Network/expressRouteCrossConnections/' + (crossConnectionName == null ? '' : encodeURIComponent(crossConnectionName)) + '/peerings/' + (peeringName == null ? '' : encodeURIComponent(peeringName)) + '/routeTables/' + (devicePath == null ? '' : encodeURIComponent(devicePath)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets the route table summary associated with the express route cross connection in a resource group.
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/expressRouteCrossConnections/{crossConnectionName}/peerings/{peeringName}/routeTablesSummary/{devicePath}
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} crossConnectionName The name of the ExpressRouteCrossConnection.
		 * @param {string} peeringName The name of the peering.
		 * @param {string} devicePath The path of the device.
		 * @param {string} api_version Client API version.
		 * @param {string} subscriptionId The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @return {ExpressRouteCrossConnectionsRoutesTableSummaryListResult} Request successful. The operation returns the resulting ExpressRouteCrossConnectionsRouteTableSummary resource.
		 */
		ExpressRouteCrossConnections_ListRoutesTableSummary(resourceGroupName: string, crossConnectionName: string, peeringName: string, devicePath: string, api_version: string, subscriptionId: string): Observable<ExpressRouteCrossConnectionsRoutesTableSummaryListResult> {
			return this.http.post<ExpressRouteCrossConnectionsRoutesTableSummaryListResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Network/expressRouteCrossConnections/' + (crossConnectionName == null ? '' : encodeURIComponent(crossConnectionName)) + '/peerings/' + (peeringName == null ? '' : encodeURIComponent(peeringName)) + '/routeTablesSummary/' + (devicePath == null ? '' : encodeURIComponent(devicePath)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), null, {});
		}
	}

}

