import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface ServerConnectionPolicy {
	}
	export interface ServerConnectionPolicyFormProperties {
	}
	export function CreateServerConnectionPolicyFormGroup() {
		return new FormGroup<ServerConnectionPolicyFormProperties>({
		});

	}


	/** The properties of a server secure connection policy. */
	export interface ServerConnectionPolicyProperties {

		/**
		 * The server connection type.
		 * Required
		 */
		connectionType: ServerConnectionPolicyPropertiesConnectionType;
	}

	/** The properties of a server secure connection policy. */
	export interface ServerConnectionPolicyPropertiesFormProperties {

		/**
		 * The server connection type.
		 * Required
		 */
		connectionType: FormControl<ServerConnectionPolicyPropertiesConnectionType | null | undefined>,
	}
	export function CreateServerConnectionPolicyPropertiesFormGroup() {
		return new FormGroup<ServerConnectionPolicyPropertiesFormProperties>({
			connectionType: new FormControl<ServerConnectionPolicyPropertiesConnectionType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum ServerConnectionPolicyPropertiesConnectionType { Default = 0, Proxy = 1, Redirect = 2 }

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Gets the server's secure connection policy.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/connectionPolicies/{connectionPolicyName}
		 * @param {string} api_version The API version to use for the request.
		 * @param {string} subscriptionId The subscription ID that identifies an Azure subscription.
		 * @param {string} resourceGroupName The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
		 * @param {string} serverName The name of the server.
		 * @param {ServerConnectionPolicies_GetConnectionPolicyName} connectionPolicyName The name of the connection policy.
		 * @return {ServerConnectionPolicy} OK
		 */
		ServerConnectionPolicies_Get(api_version: string, subscriptionId: string, resourceGroupName: string, serverName: string, connectionPolicyName: ServerConnectionPolicies_GetConnectionPolicyName): Observable<ServerConnectionPolicy> {
			return this.http.get<ServerConnectionPolicy>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Sql/servers/' + (serverName == null ? '' : encodeURIComponent(serverName)) + '/connectionPolicies/' + connectionPolicyName + '?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Creates or updates the server's connection policy.
		 * Put subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/connectionPolicies/{connectionPolicyName}
		 * @param {string} api_version The API version to use for the request.
		 * @param {string} subscriptionId The subscription ID that identifies an Azure subscription.
		 * @param {string} resourceGroupName The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
		 * @param {string} serverName The name of the server.
		 * @param {ServerConnectionPolicies_GetConnectionPolicyName} connectionPolicyName The name of the connection policy.
		 * @param {ServerConnectionPolicy} requestBody The required parameters for updating a secure connection policy.
		 * @return {ServerConnectionPolicy} OK
		 */
		ServerConnectionPolicies_CreateOrUpdate(api_version: string, subscriptionId: string, resourceGroupName: string, serverName: string, connectionPolicyName: ServerConnectionPolicies_GetConnectionPolicyName, requestBody: ServerConnectionPolicy): Observable<ServerConnectionPolicy> {
			return this.http.put<ServerConnectionPolicy>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Sql/servers/' + (serverName == null ? '' : encodeURIComponent(serverName)) + '/connectionPolicies/' + connectionPolicyName + '?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

	export enum ServerConnectionPolicies_GetConnectionPolicyName { default = 0 }

}

