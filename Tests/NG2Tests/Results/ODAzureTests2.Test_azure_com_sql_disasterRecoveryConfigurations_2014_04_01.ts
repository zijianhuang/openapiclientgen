import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface DisasterRecoveryConfiguration {
	}
	export interface DisasterRecoveryConfigurationFormProperties {
	}
	export function CreateDisasterRecoveryConfigurationFormGroup() {
		return new FormGroup<DisasterRecoveryConfigurationFormProperties>({
		});

	}


	/** Represents the response to a List disaster recovery configuration request. */
	export interface DisasterRecoveryConfigurationListResult {

		/** The list of disaster recovery configurations housed under the server. */
		value?: Array<DisasterRecoveryConfiguration>;
	}

	/** Represents the response to a List disaster recovery configuration request. */
	export interface DisasterRecoveryConfigurationListResultFormProperties {
	}
	export function CreateDisasterRecoveryConfigurationListResultFormGroup() {
		return new FormGroup<DisasterRecoveryConfigurationListResultFormProperties>({
		});

	}


	/** Represents the properties of a disaster recovery configuration. */
	export interface DisasterRecoveryConfigurationProperties {

		/**
		 * Whether or not failover can be done automatically.
		 * Required
		 */
		autoFailover: DisasterRecoveryConfigurationPropertiesAutoFailover;

		/**
		 * How aggressive the automatic failover should be.
		 * Required
		 */
		failoverPolicy: DisasterRecoveryConfigurationPropertiesFailoverPolicy;

		/** Logical name of the server. */
		logicalServerName?: string | null;

		/** Logical name of the partner server. */
		partnerLogicalServerName?: string | null;

		/**
		 * Id of the partner server.
		 * Required
		 */
		partnerServerId: string;

		/** The role of the current server in the disaster recovery configuration. */
		role?: DisasterRecoveryConfigurationPropertiesRole | null;

		/** The status of the disaster recovery configuration. */
		status?: DisasterRecoveryConfigurationPropertiesStatus | null;
	}

	/** Represents the properties of a disaster recovery configuration. */
	export interface DisasterRecoveryConfigurationPropertiesFormProperties {

		/**
		 * Whether or not failover can be done automatically.
		 * Required
		 */
		autoFailover: FormControl<DisasterRecoveryConfigurationPropertiesAutoFailover | null | undefined>,

		/**
		 * How aggressive the automatic failover should be.
		 * Required
		 */
		failoverPolicy: FormControl<DisasterRecoveryConfigurationPropertiesFailoverPolicy | null | undefined>,

		/** Logical name of the server. */
		logicalServerName: FormControl<string | null | undefined>,

		/** Logical name of the partner server. */
		partnerLogicalServerName: FormControl<string | null | undefined>,

		/**
		 * Id of the partner server.
		 * Required
		 */
		partnerServerId: FormControl<string | null | undefined>,

		/** The role of the current server in the disaster recovery configuration. */
		role: FormControl<DisasterRecoveryConfigurationPropertiesRole | null | undefined>,

		/** The status of the disaster recovery configuration. */
		status: FormControl<DisasterRecoveryConfigurationPropertiesStatus | null | undefined>,
	}
	export function CreateDisasterRecoveryConfigurationPropertiesFormGroup() {
		return new FormGroup<DisasterRecoveryConfigurationPropertiesFormProperties>({
			autoFailover: new FormControl<DisasterRecoveryConfigurationPropertiesAutoFailover | null | undefined>(undefined, [Validators.required]),
			failoverPolicy: new FormControl<DisasterRecoveryConfigurationPropertiesFailoverPolicy | null | undefined>(undefined, [Validators.required]),
			logicalServerName: new FormControl<string | null | undefined>(undefined),
			partnerLogicalServerName: new FormControl<string | null | undefined>(undefined),
			partnerServerId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			role: new FormControl<DisasterRecoveryConfigurationPropertiesRole | null | undefined>(undefined),
			status: new FormControl<DisasterRecoveryConfigurationPropertiesStatus | null | undefined>(undefined),
		});

	}

	export enum DisasterRecoveryConfigurationPropertiesAutoFailover { Off = 0, On = 1 }

	export enum DisasterRecoveryConfigurationPropertiesFailoverPolicy { Manual = 0, Automatic = 1 }

	export enum DisasterRecoveryConfigurationPropertiesRole { None = 0, Primary = 1, Secondary = 2 }

	export enum DisasterRecoveryConfigurationPropertiesStatus { Creating = 0, Ready = 1, FailingOver = 2, Dropping = 3 }

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Lists a server's disaster recovery configuration.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/disasterRecoveryConfiguration
		 * @param {string} api_version The API version to use for the request.
		 * @param {string} subscriptionId The subscription ID that identifies an Azure subscription.
		 * @param {string} resourceGroupName The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
		 * @param {string} serverName The name of the server.
		 * @return {DisasterRecoveryConfigurationListResult} OK
		 */
		DisasterRecoveryConfigurations_List(api_version: string, subscriptionId: string, resourceGroupName: string, serverName: string): Observable<DisasterRecoveryConfigurationListResult> {
			return this.http.get<DisasterRecoveryConfigurationListResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Sql/servers/' + (serverName == null ? '' : encodeURIComponent(serverName)) + '/disasterRecoveryConfiguration?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Gets a disaster recovery configuration.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/disasterRecoveryConfiguration/{disasterRecoveryConfigurationName}
		 * @param {string} api_version The API version to use for the request.
		 * @param {string} subscriptionId The subscription ID that identifies an Azure subscription.
		 * @param {string} resourceGroupName The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
		 * @param {string} serverName The name of the server.
		 * @param {string} disasterRecoveryConfigurationName The name of the disaster recovery configuration.
		 * @return {DisasterRecoveryConfiguration} OK
		 */
		DisasterRecoveryConfigurations_Get(api_version: string, subscriptionId: string, resourceGroupName: string, serverName: string, disasterRecoveryConfigurationName: string): Observable<DisasterRecoveryConfiguration> {
			return this.http.get<DisasterRecoveryConfiguration>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Sql/servers/' + (serverName == null ? '' : encodeURIComponent(serverName)) + '/disasterRecoveryConfiguration/' + (disasterRecoveryConfigurationName == null ? '' : encodeURIComponent(disasterRecoveryConfigurationName)) + '?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Creates or updates a disaster recovery configuration.
		 * Put subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/disasterRecoveryConfiguration/{disasterRecoveryConfigurationName}
		 * @param {string} api_version The API version to use for the request.
		 * @param {string} subscriptionId The subscription ID that identifies an Azure subscription.
		 * @param {string} resourceGroupName The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
		 * @param {string} serverName The name of the server.
		 * @param {string} disasterRecoveryConfigurationName The name of the disaster recovery configuration to be created/updated.
		 * @return {DisasterRecoveryConfiguration} OK
		 */
		DisasterRecoveryConfigurations_CreateOrUpdate(api_version: string, subscriptionId: string, resourceGroupName: string, serverName: string, disasterRecoveryConfigurationName: string): Observable<DisasterRecoveryConfiguration> {
			return this.http.put<DisasterRecoveryConfiguration>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Sql/servers/' + (serverName == null ? '' : encodeURIComponent(serverName)) + '/disasterRecoveryConfiguration/' + (disasterRecoveryConfigurationName == null ? '' : encodeURIComponent(disasterRecoveryConfigurationName)) + '?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), null, {});
		}

		/**
		 * Deletes a disaster recovery configuration.
		 * Delete subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/disasterRecoveryConfiguration/{disasterRecoveryConfigurationName}
		 * @param {string} api_version The API version to use for the request.
		 * @param {string} subscriptionId The subscription ID that identifies an Azure subscription.
		 * @param {string} resourceGroupName The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
		 * @param {string} serverName The name of the server.
		 * @param {string} disasterRecoveryConfigurationName The name of the disaster recovery configuration to be deleted.
		 * @return {void} OK
		 */
		DisasterRecoveryConfigurations_Delete(api_version: string, subscriptionId: string, resourceGroupName: string, serverName: string, disasterRecoveryConfigurationName: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Sql/servers/' + (serverName == null ? '' : encodeURIComponent(serverName)) + '/disasterRecoveryConfiguration/' + (disasterRecoveryConfigurationName == null ? '' : encodeURIComponent(disasterRecoveryConfigurationName)) + '?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Fails over from the current primary server to this server.
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/disasterRecoveryConfiguration/{disasterRecoveryConfigurationName}/failover
		 * @param {string} api_version The API version to use for the request.
		 * @param {string} subscriptionId The subscription ID that identifies an Azure subscription.
		 * @param {string} resourceGroupName The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
		 * @param {string} serverName The name of the server.
		 * @param {string} disasterRecoveryConfigurationName The name of the disaster recovery configuration to failover.
		 * @return {void} 
		 */
		DisasterRecoveryConfigurations_Failover(api_version: string, subscriptionId: string, resourceGroupName: string, serverName: string, disasterRecoveryConfigurationName: string): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Sql/servers/' + (serverName == null ? '' : encodeURIComponent(serverName)) + '/disasterRecoveryConfiguration/' + (disasterRecoveryConfigurationName == null ? '' : encodeURIComponent(disasterRecoveryConfigurationName)) + '/failover?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Fails over from the current primary server to this server. This operation might result in data loss.
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/disasterRecoveryConfiguration/{disasterRecoveryConfigurationName}/forceFailoverAllowDataLoss
		 * @param {string} api_version The API version to use for the request.
		 * @param {string} subscriptionId The subscription ID that identifies an Azure subscription.
		 * @param {string} resourceGroupName The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
		 * @param {string} serverName The name of the server.
		 * @param {string} disasterRecoveryConfigurationName The name of the disaster recovery configuration to failover forcefully.
		 * @return {void} 
		 */
		DisasterRecoveryConfigurations_FailoverAllowDataLoss(api_version: string, subscriptionId: string, resourceGroupName: string, serverName: string, disasterRecoveryConfigurationName: string): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Sql/servers/' + (serverName == null ? '' : encodeURIComponent(serverName)) + '/disasterRecoveryConfiguration/' + (disasterRecoveryConfigurationName == null ? '' : encodeURIComponent(disasterRecoveryConfigurationName)) + '/forceFailoverAllowDataLoss?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), null, { observe: 'response', responseType: 'text' });
		}
	}

}

