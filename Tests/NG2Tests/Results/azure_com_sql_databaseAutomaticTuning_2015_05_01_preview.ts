import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** Automatic tuning properties for individual advisors. */
	export interface AutomaticTuningOptions {

		/** Automatic tuning option actual state. */
		actualState?: AutomaticTuningOptionsActualState | null;

		/** Automatic tuning option desired state. */
		desiredState?: AutomaticTuningOptionsDesiredState | null;

		/**
		 * Reason code if desired and actual state are different.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		reasonCode?: number | null;

		/** Reason description if desired and actual state are different. */
		reasonDesc?: AutomaticTuningOptionsReasonDesc | null;
	}

	/** Automatic tuning properties for individual advisors. */
	export interface AutomaticTuningOptionsFormProperties {

		/** Automatic tuning option actual state. */
		actualState: FormControl<AutomaticTuningOptionsActualState | null | undefined>,

		/** Automatic tuning option desired state. */
		desiredState: FormControl<AutomaticTuningOptionsDesiredState | null | undefined>,

		/**
		 * Reason code if desired and actual state are different.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		reasonCode: FormControl<number | null | undefined>,

		/** Reason description if desired and actual state are different. */
		reasonDesc: FormControl<AutomaticTuningOptionsReasonDesc | null | undefined>,
	}
	export function CreateAutomaticTuningOptionsFormGroup() {
		return new FormGroup<AutomaticTuningOptionsFormProperties>({
			actualState: new FormControl<AutomaticTuningOptionsActualState | null | undefined>(undefined),
			desiredState: new FormControl<AutomaticTuningOptionsDesiredState | null | undefined>(undefined),
			reasonCode: new FormControl<number | null | undefined>(undefined),
			reasonDesc: new FormControl<AutomaticTuningOptionsReasonDesc | null | undefined>(undefined),
		});

	}

	export enum AutomaticTuningOptionsActualState { Off = 'Off', On = 'On' }

	export enum AutomaticTuningOptionsDesiredState { Off = 'Off', On = 'On', Default = 'Default' }

	export enum AutomaticTuningOptionsReasonDesc { Default = 'Default', Disabled = 'Disabled', AutoConfigured = 'AutoConfigured', InheritedFromServer = 'InheritedFromServer', QueryStoreOff = 'QueryStoreOff', QueryStoreReadOnly = 'QueryStoreReadOnly', NotSupported = 'NotSupported' }


	/** Database-level Automatic Tuning. */
	export interface DatabaseAutomaticTuning {

		/** Database-level Automatic Tuning properties. */
		properties?: DatabaseAutomaticTuningProperties;
	}

	/** Database-level Automatic Tuning. */
	export interface DatabaseAutomaticTuningFormProperties {
	}
	export function CreateDatabaseAutomaticTuningFormGroup() {
		return new FormGroup<DatabaseAutomaticTuningFormProperties>({
		});

	}


	/** Database-level Automatic Tuning properties. */
	export interface DatabaseAutomaticTuningProperties {

		/** Automatic tuning actual state. */
		actualState?: DatabaseAutomaticTuningPropertiesActualState | null;

		/** Automatic tuning desired state. */
		desiredState?: DatabaseAutomaticTuningPropertiesActualState | null;

		/** Automatic tuning options definition. */
		options?: {[id: string]: AutomaticTuningOptions };
	}

	/** Database-level Automatic Tuning properties. */
	export interface DatabaseAutomaticTuningPropertiesFormProperties {

		/** Automatic tuning actual state. */
		actualState: FormControl<DatabaseAutomaticTuningPropertiesActualState | null | undefined>,

		/** Automatic tuning desired state. */
		desiredState: FormControl<DatabaseAutomaticTuningPropertiesActualState | null | undefined>,

		/** Automatic tuning options definition. */
		options: FormControl<{[id: string]: AutomaticTuningOptions } | null | undefined>,
	}
	export function CreateDatabaseAutomaticTuningPropertiesFormGroup() {
		return new FormGroup<DatabaseAutomaticTuningPropertiesFormProperties>({
			actualState: new FormControl<DatabaseAutomaticTuningPropertiesActualState | null | undefined>(undefined),
			desiredState: new FormControl<DatabaseAutomaticTuningPropertiesActualState | null | undefined>(undefined),
			options: new FormControl<{[id: string]: AutomaticTuningOptions } | null | undefined>(undefined),
		});

	}

	export enum DatabaseAutomaticTuningPropertiesActualState { Inherit = 'Inherit', Custom = 'Custom', Auto = 'Auto', Unspecified = 'Unspecified' }

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Gets a database's automatic tuning.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/databases/{databaseName}/automaticTuning/current
		 * @param {string} resourceGroupName The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
		 * @param {string} serverName The name of the server.
		 * @param {string} databaseName The name of the database.
		 * @param {string} subscriptionId The subscription ID that identifies an Azure subscription.
		 * @param {string} api_version The API version to use for the request.
		 * @return {DatabaseAutomaticTuning} Successfully retrieved database automatic tuning properties.
		 */
		DatabaseAutomaticTuning_Get(resourceGroupName: string, serverName: string, databaseName: string, subscriptionId: string, api_version: string): Observable<DatabaseAutomaticTuning> {
			return this.http.get<DatabaseAutomaticTuning>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Sql/servers/' + (serverName == null ? '' : encodeURIComponent(serverName)) + '/databases/' + (databaseName == null ? '' : encodeURIComponent(databaseName)) + '/automaticTuning/current&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Update automatic tuning properties for target database.
		 * Patch subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/databases/{databaseName}/automaticTuning/current
		 * @param {string} resourceGroupName The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
		 * @param {string} serverName The name of the server.
		 * @param {string} databaseName The name of the database.
		 * @param {string} subscriptionId The subscription ID that identifies an Azure subscription.
		 * @param {string} api_version The API version to use for the request.
		 * @param {DatabaseAutomaticTuning} requestBody The requested automatic tuning resource state.
		 * @return {DatabaseAutomaticTuning} Successfully updated the specified database automatic tuning settings.
		 */
		DatabaseAutomaticTuning_Update(resourceGroupName: string, serverName: string, databaseName: string, subscriptionId: string, api_version: string, requestBody: DatabaseAutomaticTuning): Observable<DatabaseAutomaticTuning> {
			return this.http.patch<DatabaseAutomaticTuning>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Sql/servers/' + (serverName == null ? '' : encodeURIComponent(serverName)) + '/databases/' + (databaseName == null ? '' : encodeURIComponent(databaseName)) + '/automaticTuning/current&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

}

