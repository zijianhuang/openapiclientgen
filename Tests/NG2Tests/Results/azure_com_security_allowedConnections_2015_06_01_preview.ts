import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** List of all possible traffic between Azure resources */
	export interface AllowedConnectionsList {

		/** The URI to fetch the next page. */
		nextLink?: string | null;
		value?: Array<AllowedConnectionsResource>;
	}

	/** List of all possible traffic between Azure resources */
	export interface AllowedConnectionsListFormProperties {

		/** The URI to fetch the next page. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateAllowedConnectionsListFormGroup() {
		return new FormGroup<AllowedConnectionsListFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The resource whose properties describes the allowed traffic between Azure resources */
	export interface AllowedConnectionsResource {

		/** Describes the allowed traffic between Azure resources */
		properties?: AllowedConnectionsResourceProperties;
	}

	/** The resource whose properties describes the allowed traffic between Azure resources */
	export interface AllowedConnectionsResourceFormProperties {
	}
	export function CreateAllowedConnectionsResourceFormGroup() {
		return new FormGroup<AllowedConnectionsResourceFormProperties>({
		});

	}


	/** Describes the allowed traffic between Azure resources */
	export interface AllowedConnectionsResourceProperties {

		/** The UTC time on which the allowed connections resource was calculated */
		calculatedDateTime?: Date | null;

		/** List of connectable resources */
		connectableResources?: Array<ConnectableResource>;
	}

	/** Describes the allowed traffic between Azure resources */
	export interface AllowedConnectionsResourcePropertiesFormProperties {

		/** The UTC time on which the allowed connections resource was calculated */
		calculatedDateTime: FormControl<Date | null | undefined>,
	}
	export function CreateAllowedConnectionsResourcePropertiesFormGroup() {
		return new FormGroup<AllowedConnectionsResourcePropertiesFormProperties>({
			calculatedDateTime: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/** Describes the allowed inbound and outbound traffic of an Azure resource */
	export interface ConnectableResource {

		/** The Azure resource id */
		id?: string | null;

		/** The list of Azure resources that the resource has inbound allowed connection from */
		inboundConnectedResources?: Array<ConnectedResource>;

		/** The list of Azure resources that the resource has outbound allowed connection to */
		outboundConnectedResources?: Array<ConnectedResource>;
	}

	/** Describes the allowed inbound and outbound traffic of an Azure resource */
	export interface ConnectableResourceFormProperties {

		/** The Azure resource id */
		id: FormControl<string | null | undefined>,
	}
	export function CreateConnectableResourceFormGroup() {
		return new FormGroup<ConnectableResourceFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Describes properties of a connected resource */
	export interface ConnectedResource {

		/** The Azure resource id of the connected resource */
		connectedResourceId?: string | null;

		/** The allowed tcp ports */
		tcpPorts?: string | null;

		/** The allowed udp ports */
		udpPorts?: string | null;
	}

	/** Describes properties of a connected resource */
	export interface ConnectedResourceFormProperties {

		/** The Azure resource id of the connected resource */
		connectedResourceId: FormControl<string | null | undefined>,

		/** The allowed tcp ports */
		tcpPorts: FormControl<string | null | undefined>,

		/** The allowed udp ports */
		udpPorts: FormControl<string | null | undefined>,
	}
	export function CreateConnectedResourceFormGroup() {
		return new FormGroup<ConnectedResourceFormProperties>({
			connectedResourceId: new FormControl<string | null | undefined>(undefined),
			tcpPorts: new FormControl<string | null | undefined>(undefined),
			udpPorts: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Gets the list of all possible traffic between resources for the subscription
		 * Get subscriptions/{subscriptionId}/providers/Microsoft.Security/allowedConnections
		 * @param {string} subscriptionId Azure subscription ID
		 * @param {string} api_version API version for the operation
		 * @return {AllowedConnectionsList} OK
		 */
		AllowedConnections_List(subscriptionId: string, api_version: string): Observable<AllowedConnectionsList> {
			return this.http.get<AllowedConnectionsList>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/providers/Microsoft.Security/allowedConnections&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Gets the list of all possible traffic between resources for the subscription and location.
		 * Get subscriptions/{subscriptionId}/providers/Microsoft.Security/locations/{ascLocation}/allowedConnections
		 * @param {string} subscriptionId Azure subscription ID
		 * @param {string} ascLocation The location where ASC stores the data of the subscription. can be retrieved from Get locations
		 * @param {string} api_version API version for the operation
		 * @return {AllowedConnectionsList} OK
		 */
		AllowedConnections_ListByHomeRegion(subscriptionId: string, ascLocation: string, api_version: string): Observable<AllowedConnectionsList> {
			return this.http.get<AllowedConnectionsList>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/providers/Microsoft.Security/locations/' + (ascLocation == null ? '' : encodeURIComponent(ascLocation)) + '/allowedConnections&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Gets the list of all possible traffic between resources for the subscription and location, based on connection type.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Security/locations/{ascLocation}/allowedConnections/{connectionType}
		 * @param {string} subscriptionId Azure subscription ID
		 * @param {string} resourceGroupName The name of the resource group within the user's subscription. The name is case insensitive.
		 *     Min length: 1    Max length: 90
		 * @param {string} ascLocation The location where ASC stores the data of the subscription. can be retrieved from Get locations
		 * @param {AllowedConnections_GetConnectionType} connectionType The type of allowed connections (Internal, External)
		 * @param {string} api_version API version for the operation
		 * @return {AllowedConnectionsResource} OK
		 */
		AllowedConnections_Get(subscriptionId: string, resourceGroupName: string, ascLocation: string, connectionType: AllowedConnections_GetConnectionType, api_version: string): Observable<AllowedConnectionsResource> {
			return this.http.get<AllowedConnectionsResource>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Security/locations/' + (ascLocation == null ? '' : encodeURIComponent(ascLocation)) + '/allowedConnections/' + connectionType + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}
	}

	export enum AllowedConnections_GetConnectionType { Internal = 'Internal', External = 'External' }

}

