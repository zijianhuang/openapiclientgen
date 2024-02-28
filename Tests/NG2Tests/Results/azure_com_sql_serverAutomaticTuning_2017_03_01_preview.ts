import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** Automatic tuning properties for individual advisors. */
	export interface AutomaticTuningServerOptions {

		/** Automatic tuning option actual state. */
		actualState?: AutomaticTuningServerOptionsActualState | null;

		/** Automatic tuning option desired state. */
		desiredState?: AutomaticTuningServerOptionsDesiredState | null;

		/**
		 * Reason code if desired and actual state are different.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		reasonCode?: number | null;

		/** Reason description if desired and actual state are different. */
		reasonDesc?: AutomaticTuningServerOptionsReasonDesc | null;
	}

	/** Automatic tuning properties for individual advisors. */
	export interface AutomaticTuningServerOptionsFormProperties {

		/** Automatic tuning option actual state. */
		actualState: FormControl<AutomaticTuningServerOptionsActualState | null | undefined>,

		/** Automatic tuning option desired state. */
		desiredState: FormControl<AutomaticTuningServerOptionsDesiredState | null | undefined>,

		/**
		 * Reason code if desired and actual state are different.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		reasonCode: FormControl<number | null | undefined>,

		/** Reason description if desired and actual state are different. */
		reasonDesc: FormControl<AutomaticTuningServerOptionsReasonDesc | null | undefined>,
	}
	export function CreateAutomaticTuningServerOptionsFormGroup() {
		return new FormGroup<AutomaticTuningServerOptionsFormProperties>({
			actualState: new FormControl<AutomaticTuningServerOptionsActualState | null | undefined>(undefined),
			desiredState: new FormControl<AutomaticTuningServerOptionsDesiredState | null | undefined>(undefined),
			reasonCode: new FormControl<number | null | undefined>(undefined),
			reasonDesc: new FormControl<AutomaticTuningServerOptionsReasonDesc | null | undefined>(undefined),
		});

	}

	export enum AutomaticTuningServerOptionsActualState { Off = 'Off', On = 'On' }

	export enum AutomaticTuningServerOptionsDesiredState { Off = 'Off', On = 'On', Default = 'Default' }

	export enum AutomaticTuningServerOptionsReasonDesc { Default = 'Default', Disabled = 'Disabled', AutoConfigured = 'AutoConfigured' }


	/** Server-level Automatic Tuning properties. */
	export interface AutomaticTuningServerProperties {

		/** Automatic tuning actual state. */
		actualState?: AutomaticTuningServerPropertiesActualState | null;

		/** Automatic tuning desired state. */
		desiredState?: AutomaticTuningServerPropertiesActualState | null;

		/** Automatic tuning options definition. */
		options?: {[id: string]: AutomaticTuningServerOptions };
	}

	/** Server-level Automatic Tuning properties. */
	export interface AutomaticTuningServerPropertiesFormProperties {

		/** Automatic tuning actual state. */
		actualState: FormControl<AutomaticTuningServerPropertiesActualState | null | undefined>,

		/** Automatic tuning desired state. */
		desiredState: FormControl<AutomaticTuningServerPropertiesActualState | null | undefined>,

		/** Automatic tuning options definition. */
		options: FormControl<{[id: string]: AutomaticTuningServerOptions } | null | undefined>,
	}
	export function CreateAutomaticTuningServerPropertiesFormGroup() {
		return new FormGroup<AutomaticTuningServerPropertiesFormProperties>({
			actualState: new FormControl<AutomaticTuningServerPropertiesActualState | null | undefined>(undefined),
			desiredState: new FormControl<AutomaticTuningServerPropertiesActualState | null | undefined>(undefined),
			options: new FormControl<{[id: string]: AutomaticTuningServerOptions } | null | undefined>(undefined),
		});

	}

	export enum AutomaticTuningServerPropertiesActualState { Custom = 'Custom', Auto = 'Auto', Unspecified = 'Unspecified' }


	/** Server-level Automatic Tuning. */
	export interface ServerAutomaticTuning {

		/** Server-level Automatic Tuning properties. */
		properties?: AutomaticTuningServerProperties;
	}

	/** Server-level Automatic Tuning. */
	export interface ServerAutomaticTuningFormProperties {
	}
	export function CreateServerAutomaticTuningFormGroup() {
		return new FormGroup<ServerAutomaticTuningFormProperties>({
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Retrieves server automatic tuning options.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/automaticTuning/current
		 * @param {string} resourceGroupName The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
		 * @param {string} serverName The name of the server.
		 * @param {string} subscriptionId The subscription ID that identifies an Azure subscription.
		 * @param {string} api_version The API version to use for the request.
		 * @return {ServerAutomaticTuning} Successfully retrieved server automatic tuning properties.
		 */
		ServerAutomaticTuning_Get(resourceGroupName: string, serverName: string, subscriptionId: string, api_version: string): Observable<ServerAutomaticTuning> {
			return this.http.get<ServerAutomaticTuning>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Sql/servers/' + (serverName == null ? '' : encodeURIComponent(serverName)) + '/automaticTuning/current&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Update automatic tuning options on server.
		 * Patch subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/automaticTuning/current
		 * @param {string} resourceGroupName The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
		 * @param {string} serverName The name of the server.
		 * @param {string} subscriptionId The subscription ID that identifies an Azure subscription.
		 * @param {string} api_version The API version to use for the request.
		 * @param {ServerAutomaticTuning} requestBody The requested automatic tuning resource state.
		 * @return {ServerAutomaticTuning} Successfully updated the server-level automatic tuning options.
		 */
		ServerAutomaticTuning_Update(resourceGroupName: string, serverName: string, subscriptionId: string, api_version: string, requestBody: ServerAutomaticTuning): Observable<ServerAutomaticTuning> {
			return this.http.patch<ServerAutomaticTuning>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Sql/servers/' + (serverName == null ? '' : encodeURIComponent(serverName)) + '/automaticTuning/current&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

}

