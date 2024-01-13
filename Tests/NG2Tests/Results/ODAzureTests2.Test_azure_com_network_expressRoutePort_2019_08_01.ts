import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface ExpressRouteLink {
	}
	export interface ExpressRouteLinkFormProperties {
	}
	export function CreateExpressRouteLinkFormGroup() {
		return new FormGroup<ExpressRouteLinkFormProperties>({
		});

	}


	/** Response for ListExpressRouteLinks API service call. */
	export interface ExpressRouteLinkListResult {

		/** The URL to get the next set of results. */
		nextLink?: string | null;

		/** The list of ExpressRouteLink sub-resources. */
		value?: Array<ExpressRouteLink>;
	}

	/** Response for ListExpressRouteLinks API service call. */
	export interface ExpressRouteLinkListResultFormProperties {

		/** The URL to get the next set of results. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateExpressRouteLinkListResultFormGroup() {
		return new FormGroup<ExpressRouteLinkListResultFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** ExpressRouteLink Mac Security Configuration. */
	export interface ExpressRouteLinkMacSecConfig {

		/** Keyvault Secret Identifier URL containing Mac security CAK key. */
		cakSecretIdentifier?: string | null;

		/** Mac security cipher. */
		cipher?: ExpressRouteLinkMacSecConfigCipher | null;

		/** Keyvault Secret Identifier URL containing Mac security CKN key. */
		cknSecretIdentifier?: string | null;
	}

	/** ExpressRouteLink Mac Security Configuration. */
	export interface ExpressRouteLinkMacSecConfigFormProperties {

		/** Keyvault Secret Identifier URL containing Mac security CAK key. */
		cakSecretIdentifier: FormControl<string | null | undefined>,

		/** Mac security cipher. */
		cipher: FormControl<ExpressRouteLinkMacSecConfigCipher | null | undefined>,

		/** Keyvault Secret Identifier URL containing Mac security CKN key. */
		cknSecretIdentifier: FormControl<string | null | undefined>,
	}
	export function CreateExpressRouteLinkMacSecConfigFormGroup() {
		return new FormGroup<ExpressRouteLinkMacSecConfigFormProperties>({
			cakSecretIdentifier: new FormControl<string | null | undefined>(undefined),
			cipher: new FormControl<ExpressRouteLinkMacSecConfigCipher | null | undefined>(undefined),
			cknSecretIdentifier: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ExpressRouteLinkMacSecConfigCipher { 'gcm-aes-128' = 0, 'gcm-aes-256' = 1 }


	/** Properties specific to ExpressRouteLink resources. */
	export interface ExpressRouteLinkPropertiesFormat {

		/** Administrative state of the physical port. */
		adminState?: ExpressRouteLinkPropertiesFormatAdminState | null;

		/** Physical fiber port type. */
		connectorType?: ExpressRouteLinkPropertiesFormatConnectorType | null;

		/** Name of Azure router interface. */
		interfaceName?: string | null;

		/** ExpressRouteLink Mac Security Configuration. */
		macSecConfig?: ExpressRouteLinkMacSecConfig;

		/** Mapping between physical port to patch panel port. */
		patchPanelId?: string | null;

		/** The current provisioning state. */
		provisioningState?: ExpressRouteLinkPropertiesFormatProvisioningState | null;

		/** Mapping of physical patch panel to rack. */
		rackId?: string | null;

		/** Name of Azure router associated with physical port. */
		routerName?: string | null;
	}

	/** Properties specific to ExpressRouteLink resources. */
	export interface ExpressRouteLinkPropertiesFormatFormProperties {

		/** Administrative state of the physical port. */
		adminState: FormControl<ExpressRouteLinkPropertiesFormatAdminState | null | undefined>,

		/** Physical fiber port type. */
		connectorType: FormControl<ExpressRouteLinkPropertiesFormatConnectorType | null | undefined>,

		/** Name of Azure router interface. */
		interfaceName: FormControl<string | null | undefined>,

		/** Mapping between physical port to patch panel port. */
		patchPanelId: FormControl<string | null | undefined>,

		/** The current provisioning state. */
		provisioningState: FormControl<ExpressRouteLinkPropertiesFormatProvisioningState | null | undefined>,

		/** Mapping of physical patch panel to rack. */
		rackId: FormControl<string | null | undefined>,

		/** Name of Azure router associated with physical port. */
		routerName: FormControl<string | null | undefined>,
	}
	export function CreateExpressRouteLinkPropertiesFormatFormGroup() {
		return new FormGroup<ExpressRouteLinkPropertiesFormatFormProperties>({
			adminState: new FormControl<ExpressRouteLinkPropertiesFormatAdminState | null | undefined>(undefined),
			connectorType: new FormControl<ExpressRouteLinkPropertiesFormatConnectorType | null | undefined>(undefined),
			interfaceName: new FormControl<string | null | undefined>(undefined),
			patchPanelId: new FormControl<string | null | undefined>(undefined),
			provisioningState: new FormControl<ExpressRouteLinkPropertiesFormatProvisioningState | null | undefined>(undefined),
			rackId: new FormControl<string | null | undefined>(undefined),
			routerName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ExpressRouteLinkPropertiesFormatAdminState { Enabled = 0, Disabled = 1 }

	export enum ExpressRouteLinkPropertiesFormatConnectorType { LC = 0, SC = 1 }

	export enum ExpressRouteLinkPropertiesFormatProvisioningState { Succeeded = 0, Updating = 1, Deleting = 2, Failed = 3 }

	export interface ExpressRoutePort {
	}
	export interface ExpressRoutePortFormProperties {
	}
	export function CreateExpressRoutePortFormGroup() {
		return new FormGroup<ExpressRoutePortFormProperties>({
		});

	}


	/** Response for ListExpressRoutePorts API service call. */
	export interface ExpressRoutePortListResult {

		/** The URL to get the next set of results. */
		nextLink?: string | null;

		/** A list of ExpressRoutePort resources. */
		value?: Array<ExpressRoutePort>;
	}

	/** Response for ListExpressRoutePorts API service call. */
	export interface ExpressRoutePortListResultFormProperties {

		/** The URL to get the next set of results. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateExpressRoutePortListResultFormGroup() {
		return new FormGroup<ExpressRoutePortListResultFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Properties specific to ExpressRoutePort resources. */
	export interface ExpressRoutePortPropertiesFormat {

		/** Date of the physical port allocation to be used in Letter of Authorization. */
		allocationDate?: string | null;

		/** Bandwidth of procured ports in Gbps. */
		bandwidthInGbps?: number | null;

		/** Reference the ExpressRoute circuit(s) that are provisioned on this ExpressRoutePort resource. */
		ExpressRoutePortPropertiesFormatCircuits?: Array<ExpressRoutePortPropertiesFormatCircuits>;

		/** Encapsulation method on physical ports. */
		encapsulation?: ExpressRoutePortPropertiesFormatEncapsulation | null;

		/** Ether type of the physical port. */
		etherType?: string | null;

		/** The set of physical links of the ExpressRoutePort resource. */
		links?: Array<ExpressRouteLink>;

		/** Maximum transmission unit of the physical port pair(s). */
		mtu?: string | null;

		/** The name of the peering location that the ExpressRoutePort is mapped to physically. */
		peeringLocation?: string | null;

		/** Aggregate Gbps of associated circuit bandwidths. */
		provisionedBandwidthInGbps?: number | null;

		/** The current provisioning state. */
		provisioningState?: ExpressRouteLinkPropertiesFormatProvisioningState | null;

		/** The resource GUID property of the express route port resource. */
		resourceGuid?: string | null;
	}

	/** Properties specific to ExpressRoutePort resources. */
	export interface ExpressRoutePortPropertiesFormatFormProperties {

		/** Date of the physical port allocation to be used in Letter of Authorization. */
		allocationDate: FormControl<string | null | undefined>,

		/** Bandwidth of procured ports in Gbps. */
		bandwidthInGbps: FormControl<number | null | undefined>,

		/** Encapsulation method on physical ports. */
		encapsulation: FormControl<ExpressRoutePortPropertiesFormatEncapsulation | null | undefined>,

		/** Ether type of the physical port. */
		etherType: FormControl<string | null | undefined>,

		/** Maximum transmission unit of the physical port pair(s). */
		mtu: FormControl<string | null | undefined>,

		/** The name of the peering location that the ExpressRoutePort is mapped to physically. */
		peeringLocation: FormControl<string | null | undefined>,

		/** Aggregate Gbps of associated circuit bandwidths. */
		provisionedBandwidthInGbps: FormControl<number | null | undefined>,

		/** The current provisioning state. */
		provisioningState: FormControl<ExpressRouteLinkPropertiesFormatProvisioningState | null | undefined>,

		/** The resource GUID property of the express route port resource. */
		resourceGuid: FormControl<string | null | undefined>,
	}
	export function CreateExpressRoutePortPropertiesFormatFormGroup() {
		return new FormGroup<ExpressRoutePortPropertiesFormatFormProperties>({
			allocationDate: new FormControl<string | null | undefined>(undefined),
			bandwidthInGbps: new FormControl<number | null | undefined>(undefined),
			encapsulation: new FormControl<ExpressRoutePortPropertiesFormatEncapsulation | null | undefined>(undefined),
			etherType: new FormControl<string | null | undefined>(undefined),
			mtu: new FormControl<string | null | undefined>(undefined),
			peeringLocation: new FormControl<string | null | undefined>(undefined),
			provisionedBandwidthInGbps: new FormControl<number | null | undefined>(undefined),
			provisioningState: new FormControl<ExpressRouteLinkPropertiesFormatProvisioningState | null | undefined>(undefined),
			resourceGuid: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ExpressRoutePortPropertiesFormatCircuits {

		/** Resource ID. */
		id?: string | null;
	}
	export interface ExpressRoutePortPropertiesFormatCircuitsFormProperties {

		/** Resource ID. */
		id: FormControl<string | null | undefined>,
	}
	export function CreateExpressRoutePortPropertiesFormatCircuitsFormGroup() {
		return new FormGroup<ExpressRoutePortPropertiesFormatCircuitsFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ExpressRoutePortPropertiesFormatEncapsulation { Dot1Q = 0, QinQ = 1 }

	export interface ExpressRoutePortsLocation {
	}
	export interface ExpressRoutePortsLocationFormProperties {
	}
	export function CreateExpressRoutePortsLocationFormGroup() {
		return new FormGroup<ExpressRoutePortsLocationFormProperties>({
		});

	}


	/** Real-time inventory of available ExpressRoute port bandwidths. */
	export interface ExpressRoutePortsLocationBandwidths {

		/** Bandwidth descriptive name. */
		offerName?: string | null;

		/** Bandwidth value in Gbps. */
		valueInGbps?: number | null;
	}

	/** Real-time inventory of available ExpressRoute port bandwidths. */
	export interface ExpressRoutePortsLocationBandwidthsFormProperties {

		/** Bandwidth descriptive name. */
		offerName: FormControl<string | null | undefined>,

		/** Bandwidth value in Gbps. */
		valueInGbps: FormControl<number | null | undefined>,
	}
	export function CreateExpressRoutePortsLocationBandwidthsFormGroup() {
		return new FormGroup<ExpressRoutePortsLocationBandwidthsFormProperties>({
			offerName: new FormControl<string | null | undefined>(undefined),
			valueInGbps: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Response for ListExpressRoutePortsLocations API service call. */
	export interface ExpressRoutePortsLocationListResult {

		/** The URL to get the next set of results. */
		nextLink?: string | null;

		/** The list of all ExpressRoutePort peering locations. */
		value?: Array<ExpressRoutePortsLocation>;
	}

	/** Response for ListExpressRoutePortsLocations API service call. */
	export interface ExpressRoutePortsLocationListResultFormProperties {

		/** The URL to get the next set of results. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateExpressRoutePortsLocationListResultFormGroup() {
		return new FormGroup<ExpressRoutePortsLocationListResultFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Properties specific to ExpressRoutePorts peering location resources. */
	export interface ExpressRoutePortsLocationPropertiesFormat {

		/** Address of peering location. */
		address?: string | null;

		/** The inventory of available ExpressRoutePort bandwidths. */
		availableBandwidths?: Array<ExpressRoutePortsLocationBandwidths>;

		/** Contact details of peering locations. */
		contact?: string | null;

		/** The current provisioning state. */
		provisioningState?: ExpressRouteLinkPropertiesFormatProvisioningState | null;
	}

	/** Properties specific to ExpressRoutePorts peering location resources. */
	export interface ExpressRoutePortsLocationPropertiesFormatFormProperties {

		/** Address of peering location. */
		address: FormControl<string | null | undefined>,

		/** Contact details of peering locations. */
		contact: FormControl<string | null | undefined>,

		/** The current provisioning state. */
		provisioningState: FormControl<ExpressRouteLinkPropertiesFormatProvisioningState | null | undefined>,
	}
	export function CreateExpressRoutePortsLocationPropertiesFormatFormGroup() {
		return new FormGroup<ExpressRoutePortsLocationPropertiesFormatFormProperties>({
			address: new FormControl<string | null | undefined>(undefined),
			contact: new FormControl<string | null | undefined>(undefined),
			provisioningState: new FormControl<ExpressRouteLinkPropertiesFormatProvisioningState | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * List all the ExpressRoutePort resources in the specified subscription.
		 * Get subscriptions/{subscriptionId}/providers/Microsoft.Network/ExpressRoutePorts
		 * @param {string} subscriptionId The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} api_version Client API version.
		 * @return {ExpressRoutePortListResult} Request successful. The operation returns a list of ExpressRoutePort resources. If there are no ExpressRoutePort resources then an empty list is returned.
		 */
		ExpressRoutePorts_List(subscriptionId: string, api_version: string): Observable<ExpressRoutePortListResult> {
			return this.http.get<ExpressRoutePortListResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/providers/Microsoft.Network/ExpressRoutePorts&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Retrieves all ExpressRoutePort peering locations. Does not return available bandwidths for each location. Available bandwidths can only be obtained when retrieving a specific peering location.
		 * Get subscriptions/{subscriptionId}/providers/Microsoft.Network/ExpressRoutePortsLocations
		 * @param {string} subscriptionId The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} api_version Client API version.
		 * @return {ExpressRoutePortsLocationListResult} Request successful. The operation returns the list of all ExpressRoutePort peering locations.
		 */
		ExpressRoutePortsLocations_List(subscriptionId: string, api_version: string): Observable<ExpressRoutePortsLocationListResult> {
			return this.http.get<ExpressRoutePortsLocationListResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/providers/Microsoft.Network/ExpressRoutePortsLocations&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Retrieves a single ExpressRoutePort peering location, including the list of available bandwidths available at said peering location.
		 * Get subscriptions/{subscriptionId}/providers/Microsoft.Network/ExpressRoutePortsLocations/{locationName}
		 * @param {string} subscriptionId The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} api_version Client API version.
		 * @param {string} locationName Name of the requested ExpressRoutePort peering location.
		 * @return {ExpressRoutePortsLocation} Request successful. The operation returns the requested ExpressRoutePort peering location.
		 */
		ExpressRoutePortsLocations_Get(subscriptionId: string, api_version: string, locationName: string): Observable<ExpressRoutePortsLocation> {
			return this.http.get<ExpressRoutePortsLocation>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/providers/Microsoft.Network/ExpressRoutePortsLocations/' + (locationName == null ? '' : encodeURIComponent(locationName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * List all the ExpressRoutePort resources in the specified resource group.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/ExpressRoutePorts
		 * @param {string} subscriptionId The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} api_version Client API version.
		 * @param {string} resourceGroupName The name of the resource group.
		 * @return {ExpressRoutePortListResult} Request successful. The operation returns a list of ExpressRoutePort resources. If there are no ExpressRoutePort resources then an empty list is returned.
		 */
		ExpressRoutePorts_ListByResourceGroup(subscriptionId: string, api_version: string, resourceGroupName: string): Observable<ExpressRoutePortListResult> {
			return this.http.get<ExpressRoutePortListResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Network/ExpressRoutePorts&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Retrieves the requested ExpressRoutePort resource.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/ExpressRoutePorts/{expressRoutePortName}
		 * @param {string} subscriptionId The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} api_version Client API version.
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} expressRoutePortName The name of ExpressRoutePort.
		 * @return {ExpressRoutePort} Request successful. The operation returns the requested ExpressRoutePort resource.
		 */
		ExpressRoutePorts_Get(subscriptionId: string, api_version: string, resourceGroupName: string, expressRoutePortName: string): Observable<ExpressRoutePort> {
			return this.http.get<ExpressRoutePort>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Network/ExpressRoutePorts/' + (expressRoutePortName == null ? '' : encodeURIComponent(expressRoutePortName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Creates or updates the specified ExpressRoutePort resource.
		 * Put subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/ExpressRoutePorts/{expressRoutePortName}
		 * @param {string} subscriptionId The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} api_version Client API version.
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} expressRoutePortName The name of the ExpressRoutePort resource.
		 * @param {ExpressRoutePort} requestBody Parameters supplied to the create ExpressRoutePort operation.
		 * @return {ExpressRoutePort} Update successful. The operation returns the resulting ExpressRoutePort resource.
		 */
		ExpressRoutePorts_CreateOrUpdate(subscriptionId: string, api_version: string, resourceGroupName: string, expressRoutePortName: string, requestBody: ExpressRoutePort): Observable<ExpressRoutePort> {
			return this.http.put<ExpressRoutePort>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Network/ExpressRoutePorts/' + (expressRoutePortName == null ? '' : encodeURIComponent(expressRoutePortName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes the specified ExpressRoutePort resource.
		 * Delete subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/ExpressRoutePorts/{expressRoutePortName}
		 * @param {string} subscriptionId The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} api_version Client API version.
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} expressRoutePortName The name of the ExpressRoutePort resource.
		 * @return {void} Delete successful.
		 */
		ExpressRoutePorts_Delete(subscriptionId: string, api_version: string, resourceGroupName: string, expressRoutePortName: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Network/ExpressRoutePorts/' + (expressRoutePortName == null ? '' : encodeURIComponent(expressRoutePortName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Update ExpressRoutePort tags.
		 * Patch subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/ExpressRoutePorts/{expressRoutePortName}
		 * @param {string} subscriptionId The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} api_version Client API version.
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} expressRoutePortName The name of the ExpressRoutePort resource.
		 * @param {any} requestBody Parameters supplied to update ExpressRoutePort resource tags.
		 * @return {ExpressRoutePort} Update successful. The operation returns the resulting ExpressRoutePort resource.
		 */
		ExpressRoutePorts_UpdateTags(subscriptionId: string, api_version: string, resourceGroupName: string, expressRoutePortName: string, requestBody: any): Observable<ExpressRoutePort> {
			return this.http.patch<ExpressRoutePort>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Network/ExpressRoutePorts/' + (expressRoutePortName == null ? '' : encodeURIComponent(expressRoutePortName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieve the ExpressRouteLink sub-resources of the specified ExpressRoutePort resource.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/ExpressRoutePorts/{expressRoutePortName}/links
		 * @param {string} subscriptionId The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} api_version Client API version.
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} expressRoutePortName The name of the ExpressRoutePort resource.
		 * @return {ExpressRouteLinkListResult} Request successful. The operation returns a list of ExpressRouteLink resources. If there are no ExpressRouteLink resources then an empty list is returned.
		 */
		ExpressRouteLinks_List(subscriptionId: string, api_version: string, resourceGroupName: string, expressRoutePortName: string): Observable<ExpressRouteLinkListResult> {
			return this.http.get<ExpressRouteLinkListResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Network/ExpressRoutePorts/' + (expressRoutePortName == null ? '' : encodeURIComponent(expressRoutePortName)) + '/links&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Retrieves the specified ExpressRouteLink resource.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/ExpressRoutePorts/{expressRoutePortName}/links/{linkName}
		 * @param {string} subscriptionId The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} api_version Client API version.
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} expressRoutePortName The name of the ExpressRoutePort resource.
		 * @param {string} linkName The name of the ExpressRouteLink resource.
		 * @return {ExpressRouteLink} Request successful. The operation returns the requested ExpressRouteLink resource.
		 */
		ExpressRouteLinks_Get(subscriptionId: string, api_version: string, resourceGroupName: string, expressRoutePortName: string, linkName: string): Observable<ExpressRouteLink> {
			return this.http.get<ExpressRouteLink>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Network/ExpressRoutePorts/' + (expressRoutePortName == null ? '' : encodeURIComponent(expressRoutePortName)) + '/links/' + (linkName == null ? '' : encodeURIComponent(linkName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}
	}

}

