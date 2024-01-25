import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface ServerCommunicationLink {
	}
	export interface ServerCommunicationLinkFormProperties {
	}
	export function CreateServerCommunicationLinkFormGroup() {
		return new FormGroup<ServerCommunicationLinkFormProperties>({
		});

	}


	/** A list of server communication links. */
	export interface ServerCommunicationLinkListResult {

		/** The list of server communication links. */
		value?: Array<ServerCommunicationLink>;
	}

	/** A list of server communication links. */
	export interface ServerCommunicationLinkListResultFormProperties {
	}
	export function CreateServerCommunicationLinkListResultFormGroup() {
		return new FormGroup<ServerCommunicationLinkListResultFormProperties>({
		});

	}


	/** The properties of a server communication link. */
	export interface ServerCommunicationLinkProperties {

		/**
		 * The name of the partner server.
		 * Required
		 */
		partnerServer: string;

		/** The state. */
		state?: string | null;
	}

	/** The properties of a server communication link. */
	export interface ServerCommunicationLinkPropertiesFormProperties {

		/**
		 * The name of the partner server.
		 * Required
		 */
		partnerServer: FormControl<string | null | undefined>,

		/** The state. */
		state: FormControl<string | null | undefined>,
	}
	export function CreateServerCommunicationLinkPropertiesFormGroup() {
		return new FormGroup<ServerCommunicationLinkPropertiesFormProperties>({
			partnerServer: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			state: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Gets a list of server communication links.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/communicationLinks
		 * @param {string} api_version The API version to use for the request.
		 * @param {string} subscriptionId The subscription ID that identifies an Azure subscription.
		 * @param {string} resourceGroupName The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
		 * @param {string} serverName The name of the server.
		 * @return {ServerCommunicationLinkListResult} OK
		 */
		ServerCommunicationLinks_ListByServer(api_version: string, subscriptionId: string, resourceGroupName: string, serverName: string): Observable<ServerCommunicationLinkListResult> {
			return this.http.get<ServerCommunicationLinkListResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Sql/servers/' + (serverName == null ? '' : encodeURIComponent(serverName)) + '/communicationLinks?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Returns a server communication link.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/communicationLinks/{communicationLinkName}
		 * @param {string} api_version The API version to use for the request.
		 * @param {string} subscriptionId The subscription ID that identifies an Azure subscription.
		 * @param {string} resourceGroupName The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
		 * @param {string} serverName The name of the server.
		 * @param {string} communicationLinkName The name of the server communication link.
		 * @return {ServerCommunicationLink} OK
		 */
		ServerCommunicationLinks_Get(api_version: string, subscriptionId: string, resourceGroupName: string, serverName: string, communicationLinkName: string): Observable<ServerCommunicationLink> {
			return this.http.get<ServerCommunicationLink>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Sql/servers/' + (serverName == null ? '' : encodeURIComponent(serverName)) + '/communicationLinks/' + (communicationLinkName == null ? '' : encodeURIComponent(communicationLinkName)) + '?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Creates a server communication link.
		 * Put subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/communicationLinks/{communicationLinkName}
		 * @param {string} api_version The API version to use for the request.
		 * @param {string} subscriptionId The subscription ID that identifies an Azure subscription.
		 * @param {string} resourceGroupName The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
		 * @param {string} serverName The name of the server.
		 * @param {string} communicationLinkName The name of the server communication link.
		 * @param {ServerCommunicationLink} requestBody The required parameters for creating a server communication link.
		 * @return {void} 
		 */
		ServerCommunicationLinks_CreateOrUpdate(api_version: string, subscriptionId: string, resourceGroupName: string, serverName: string, communicationLinkName: string, requestBody: ServerCommunicationLink): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Sql/servers/' + (serverName == null ? '' : encodeURIComponent(serverName)) + '/communicationLinks/' + (communicationLinkName == null ? '' : encodeURIComponent(communicationLinkName)) + '?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Deletes a server communication link.
		 * Delete subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/communicationLinks/{communicationLinkName}
		 * @param {string} api_version The API version to use for the request.
		 * @param {string} subscriptionId The subscription ID that identifies an Azure subscription.
		 * @param {string} resourceGroupName The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
		 * @param {string} serverName The name of the server.
		 * @param {string} communicationLinkName The name of the server communication link.
		 * @return {void} OK
		 */
		ServerCommunicationLinks_Delete(api_version: string, subscriptionId: string, resourceGroupName: string, serverName: string, communicationLinkName: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Sql/servers/' + (serverName == null ? '' : encodeURIComponent(serverName)) + '/communicationLinks/' + (communicationLinkName == null ? '' : encodeURIComponent(communicationLinkName)) + '?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { observe: 'response', responseType: 'text' });
		}
	}

}

