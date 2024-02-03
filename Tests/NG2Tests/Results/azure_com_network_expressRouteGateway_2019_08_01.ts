import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** ExpressRoute circuit peering identifier. */
	export interface ExpressRouteCircuitPeeringId {

		/** The ID of the ExpressRoute circuit peering. */
		id?: string | null;
	}

	/** ExpressRoute circuit peering identifier. */
	export interface ExpressRouteCircuitPeeringIdFormProperties {

		/** The ID of the ExpressRoute circuit peering. */
		id: FormControl<string | null | undefined>,
	}
	export function CreateExpressRouteCircuitPeeringIdFormGroup() {
		return new FormGroup<ExpressRouteCircuitPeeringIdFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ExpressRouteConnection {
	}
	export interface ExpressRouteConnectionFormProperties {
	}
	export function CreateExpressRouteConnectionFormGroup() {
		return new FormGroup<ExpressRouteConnectionFormProperties>({
		});

	}


	/** The ID of the ExpressRouteConnection. */
	export interface ExpressRouteConnectionId {

		/** The ID of the ExpressRouteConnection. */
		id?: string | null;
	}

	/** The ID of the ExpressRouteConnection. */
	export interface ExpressRouteConnectionIdFormProperties {

		/** The ID of the ExpressRouteConnection. */
		id: FormControl<string | null | undefined>,
	}
	export function CreateExpressRouteConnectionIdFormGroup() {
		return new FormGroup<ExpressRouteConnectionIdFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** ExpressRouteConnection list. */
	export interface ExpressRouteConnectionList {

		/** The list of ExpressRoute connections. */
		value?: Array<ExpressRouteConnection>;
	}

	/** ExpressRouteConnection list. */
	export interface ExpressRouteConnectionListFormProperties {
	}
	export function CreateExpressRouteConnectionListFormGroup() {
		return new FormGroup<ExpressRouteConnectionListFormProperties>({
		});

	}


	/** Properties of the ExpressRouteConnection subresource. */
	export interface ExpressRouteConnectionProperties {

		/** Authorization key to establish the connection. */
		authorizationKey?: string | null;

		/**
		 * ExpressRoute circuit peering identifier.
		 * Required
		 */
		expressRouteCircuitPeering: ExpressRouteCircuitPeeringId;

		/** The current provisioning state. */
		provisioningState?: ExpressRouteConnectionPropertiesProvisioningState | null;

		/** The routing weight associated to the connection. */
		routingWeight?: number | null;
	}

	/** Properties of the ExpressRouteConnection subresource. */
	export interface ExpressRouteConnectionPropertiesFormProperties {

		/** Authorization key to establish the connection. */
		authorizationKey: FormControl<string | null | undefined>,

		/** The current provisioning state. */
		provisioningState: FormControl<ExpressRouteConnectionPropertiesProvisioningState | null | undefined>,

		/** The routing weight associated to the connection. */
		routingWeight: FormControl<number | null | undefined>,
	}
	export function CreateExpressRouteConnectionPropertiesFormGroup() {
		return new FormGroup<ExpressRouteConnectionPropertiesFormProperties>({
			authorizationKey: new FormControl<string | null | undefined>(undefined),
			provisioningState: new FormControl<ExpressRouteConnectionPropertiesProvisioningState | null | undefined>(undefined),
			routingWeight: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum ExpressRouteConnectionPropertiesProvisioningState { Succeeded = 'Succeeded', Updating = 'Updating', Deleting = 'Deleting', Failed = 'Failed' }

	export interface ExpressRouteGateway {
	}
	export interface ExpressRouteGatewayFormProperties {
	}
	export function CreateExpressRouteGatewayFormGroup() {
		return new FormGroup<ExpressRouteGatewayFormProperties>({
		});

	}


	/** List of ExpressRoute gateways. */
	export interface ExpressRouteGatewayList {

		/** List of ExpressRoute gateways. */
		value?: Array<ExpressRouteGateway>;
	}

	/** List of ExpressRoute gateways. */
	export interface ExpressRouteGatewayListFormProperties {
	}
	export function CreateExpressRouteGatewayListFormGroup() {
		return new FormGroup<ExpressRouteGatewayListFormProperties>({
		});

	}


	/** ExpressRoute gateway resource properties. */
	export interface ExpressRouteGatewayProperties {

		/** Configuration for auto scaling. */
		autoScaleConfiguration?: any;

		/** List of ExpressRoute connections to the ExpressRoute gateway. */
		expressRouteConnections?: Array<ExpressRouteConnection>;

		/** The current provisioning state. */
		provisioningState?: ExpressRouteConnectionPropertiesProvisioningState | null;

		/**
		 * Virtual Hub identifier.
		 * Required
		 */
		virtualHub: VirtualHubId;
	}

	/** ExpressRoute gateway resource properties. */
	export interface ExpressRouteGatewayPropertiesFormProperties {

		/** Configuration for auto scaling. */
		autoScaleConfiguration: FormControl<any | null | undefined>,

		/** The current provisioning state. */
		provisioningState: FormControl<ExpressRouteConnectionPropertiesProvisioningState | null | undefined>,
	}
	export function CreateExpressRouteGatewayPropertiesFormGroup() {
		return new FormGroup<ExpressRouteGatewayPropertiesFormProperties>({
			autoScaleConfiguration: new FormControl<any | null | undefined>(undefined),
			provisioningState: new FormControl<ExpressRouteConnectionPropertiesProvisioningState | null | undefined>(undefined),
		});

	}


	/** Virtual Hub identifier. */
	export interface VirtualHubId {

		/** The resource URI for the Virtual Hub where the ExpressRoute gateway is or will be deployed. The Virtual Hub resource and the ExpressRoute gateway resource reside in the same subscription. */
		id?: string | null;
	}

	/** Virtual Hub identifier. */
	export interface VirtualHubIdFormProperties {

		/** The resource URI for the Virtual Hub where the ExpressRoute gateway is or will be deployed. The Virtual Hub resource and the ExpressRoute gateway resource reside in the same subscription. */
		id: FormControl<string | null | undefined>,
	}
	export function CreateVirtualHubIdFormGroup() {
		return new FormGroup<VirtualHubIdFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Lists ExpressRoute gateways under a given subscription.
		 * Get subscriptions/{subscriptionId}/providers/Microsoft.Network/expressRouteGateways
		 * @param {string} api_version Client API version.
		 * @param {string} subscriptionId The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @return {ExpressRouteGatewayList} Request successful.
		 */
		ExpressRouteGateways_ListBySubscription(api_version: string, subscriptionId: string): Observable<ExpressRouteGatewayList> {
			return this.http.get<ExpressRouteGatewayList>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/providers/Microsoft.Network/expressRouteGateways?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Lists ExpressRoute gateways in a given resource group.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/expressRouteGateways
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} api_version Client API version.
		 * @param {string} subscriptionId The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @return {ExpressRouteGatewayList} Operation successful.
		 */
		ExpressRouteGateways_ListByResourceGroup(resourceGroupName: string, api_version: string, subscriptionId: string): Observable<ExpressRouteGatewayList> {
			return this.http.get<ExpressRouteGatewayList>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Network/expressRouteGateways&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Fetches the details of a ExpressRoute gateway in a resource group.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/expressRouteGateways/{expressRouteGatewayName}
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} expressRouteGatewayName The name of the ExpressRoute gateway.
		 * @param {string} api_version Client API version.
		 * @param {string} subscriptionId The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @return {ExpressRouteGateway} Operation succeeded. The operation returns the ExpressRoute gateway.
		 */
		ExpressRouteGateways_Get(resourceGroupName: string, expressRouteGatewayName: string, api_version: string, subscriptionId: string): Observable<ExpressRouteGateway> {
			return this.http.get<ExpressRouteGateway>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Network/expressRouteGateways/' + (expressRouteGatewayName == null ? '' : encodeURIComponent(expressRouteGatewayName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Creates or updates a ExpressRoute gateway in a specified resource group.
		 * Put subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/expressRouteGateways/{expressRouteGatewayName}
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} expressRouteGatewayName The name of the ExpressRoute gateway.
		 * @param {string} api_version Client API version.
		 * @param {string} subscriptionId The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {ExpressRouteGateway} requestBody Parameters required in an ExpressRoute gateway PUT operation.
		 * @return {ExpressRouteGateway} Update successful. The operation returns the resulting ExpressRoute gateway resource.
		 */
		ExpressRouteGateways_CreateOrUpdate(resourceGroupName: string, expressRouteGatewayName: string, api_version: string, subscriptionId: string, requestBody: ExpressRouteGateway): Observable<ExpressRouteGateway> {
			return this.http.put<ExpressRouteGateway>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Network/expressRouteGateways/' + (expressRouteGatewayName == null ? '' : encodeURIComponent(expressRouteGatewayName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes the specified ExpressRoute gateway in a resource group. An ExpressRoute gateway resource can only be deleted when there are no connection subresources.
		 * Delete subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/expressRouteGateways/{expressRouteGatewayName}
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} expressRouteGatewayName The name of the ExpressRoute gateway.
		 * @param {string} api_version Client API version.
		 * @param {string} subscriptionId The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @return {void} Delete successful.
		 */
		ExpressRouteGateways_Delete(resourceGroupName: string, expressRouteGatewayName: string, api_version: string, subscriptionId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Network/expressRouteGateways/' + (expressRouteGatewayName == null ? '' : encodeURIComponent(expressRouteGatewayName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Lists ExpressRouteConnections.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/expressRouteGateways/{expressRouteGatewayName}/expressRouteConnections
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} expressRouteGatewayName The name of the ExpressRoute gateway.
		 * @param {string} api_version Client API version.
		 * @param {string} subscriptionId The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @return {ExpressRouteConnectionList} Request successful.
		 */
		ExpressRouteConnections_List(resourceGroupName: string, expressRouteGatewayName: string, api_version: string, subscriptionId: string): Observable<ExpressRouteConnectionList> {
			return this.http.get<ExpressRouteConnectionList>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Network/expressRouteGateways/' + (expressRouteGatewayName == null ? '' : encodeURIComponent(expressRouteGatewayName)) + '/expressRouteConnections&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Gets the specified ExpressRouteConnection.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/expressRouteGateways/{expressRouteGatewayName}/expressRouteConnections/{connectionName}
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} expressRouteGatewayName The name of the ExpressRoute gateway.
		 * @param {string} connectionName The name of the ExpressRoute connection.
		 * @param {string} api_version Client API version.
		 * @param {string} subscriptionId The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @return {ExpressRouteConnection} Request successful. The operation returns the ExpressRouteConnection.
		 */
		ExpressRouteConnections_Get(resourceGroupName: string, expressRouteGatewayName: string, connectionName: string, api_version: string, subscriptionId: string): Observable<ExpressRouteConnection> {
			return this.http.get<ExpressRouteConnection>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Network/expressRouteGateways/' + (expressRouteGatewayName == null ? '' : encodeURIComponent(expressRouteGatewayName)) + '/expressRouteConnections/' + (connectionName == null ? '' : encodeURIComponent(connectionName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Creates a connection between an ExpressRoute gateway and an ExpressRoute circuit.
		 * Put subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/expressRouteGateways/{expressRouteGatewayName}/expressRouteConnections/{connectionName}
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} expressRouteGatewayName The name of the ExpressRoute gateway.
		 * @param {string} connectionName The name of the connection subresource.
		 * @param {string} api_version Client API version.
		 * @param {string} subscriptionId The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {ExpressRouteConnection} requestBody Parameters required in an ExpressRouteConnection PUT operation.
		 * @return {ExpressRouteConnection} Update successful. The operation returns the ExpressRouteConnection.
		 */
		ExpressRouteConnections_CreateOrUpdate(resourceGroupName: string, expressRouteGatewayName: string, connectionName: string, api_version: string, subscriptionId: string, requestBody: ExpressRouteConnection): Observable<ExpressRouteConnection> {
			return this.http.put<ExpressRouteConnection>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Network/expressRouteGateways/' + (expressRouteGatewayName == null ? '' : encodeURIComponent(expressRouteGatewayName)) + '/expressRouteConnections/' + (connectionName == null ? '' : encodeURIComponent(connectionName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a connection to a ExpressRoute circuit.
		 * Delete subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/expressRouteGateways/{expressRouteGatewayName}/expressRouteConnections/{connectionName}
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} expressRouteGatewayName The name of the ExpressRoute gateway.
		 * @param {string} connectionName The name of the connection subresource.
		 * @param {string} api_version Client API version.
		 * @param {string} subscriptionId The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @return {void} Delete successful.
		 */
		ExpressRouteConnections_Delete(resourceGroupName: string, expressRouteGatewayName: string, connectionName: string, api_version: string, subscriptionId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Network/expressRouteGateways/' + (expressRouteGatewayName == null ? '' : encodeURIComponent(expressRouteGatewayName)) + '/expressRouteConnections/' + (connectionName == null ? '' : encodeURIComponent(connectionName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { observe: 'response', responseType: 'text' });
		}
	}

}

