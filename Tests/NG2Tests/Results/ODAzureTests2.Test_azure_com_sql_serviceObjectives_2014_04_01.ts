import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface ServiceObjective {
	}
	export interface ServiceObjectiveFormProperties {
	}
	export function CreateServiceObjectiveFormGroup() {
		return new FormGroup<ServiceObjectiveFormProperties>({
		});

	}


	/** Represents the response to a get database service objectives request. */
	export interface ServiceObjectiveListResult {

		/**
		 * The list of database service objectives.
		 * Required
		 */
		value: Array<ServiceObjective>;
	}

	/** Represents the response to a get database service objectives request. */
	export interface ServiceObjectiveListResultFormProperties {
	}
	export function CreateServiceObjectiveListResultFormGroup() {
		return new FormGroup<ServiceObjectiveListResultFormProperties>({
		});

	}


	/** Represents the properties of a database service objective. */
	export interface ServiceObjectiveProperties {

		/** The description for the service level objective. */
		description?: string | null;

		/** Gets whether the service level objective is enabled. */
		enabled?: boolean | null;

		/** Gets whether the service level objective is the default service objective. */
		isDefault?: boolean | null;

		/** Gets whether the service level objective is a system service objective. */
		isSystem?: boolean | null;

		/** The name for the service objective. */
		serviceObjectiveName?: string | null;
	}

	/** Represents the properties of a database service objective. */
	export interface ServiceObjectivePropertiesFormProperties {

		/** The description for the service level objective. */
		description: FormControl<string | null | undefined>,

		/** Gets whether the service level objective is enabled. */
		enabled: FormControl<boolean | null | undefined>,

		/** Gets whether the service level objective is the default service objective. */
		isDefault: FormControl<boolean | null | undefined>,

		/** Gets whether the service level objective is a system service objective. */
		isSystem: FormControl<boolean | null | undefined>,

		/** The name for the service objective. */
		serviceObjectiveName: FormControl<string | null | undefined>,
	}
	export function CreateServiceObjectivePropertiesFormGroup() {
		return new FormGroup<ServiceObjectivePropertiesFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			enabled: new FormControl<boolean | null | undefined>(undefined),
			isDefault: new FormControl<boolean | null | undefined>(undefined),
			isSystem: new FormControl<boolean | null | undefined>(undefined),
			serviceObjectiveName: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Returns database service objectives.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/serviceObjectives
		 * @param {string} api_version The API version to use for the request.
		 * @param {string} subscriptionId The subscription ID that identifies an Azure subscription.
		 * @param {string} resourceGroupName The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
		 * @param {string} serverName The name of the server.
		 * @return {ServiceObjectiveListResult} OK
		 */
		ServiceObjectives_ListByServer(api_version: string, subscriptionId: string, resourceGroupName: string, serverName: string): Observable<ServiceObjectiveListResult> {
			return this.http.get<ServiceObjectiveListResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Sql/servers/' + (serverName == null ? '' : encodeURIComponent(serverName)) + '/serviceObjectives?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Gets a database service objective.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/serviceObjectives/{serviceObjectiveName}
		 * @param {string} api_version The API version to use for the request.
		 * @param {string} subscriptionId The subscription ID that identifies an Azure subscription.
		 * @param {string} resourceGroupName The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
		 * @param {string} serverName The name of the server.
		 * @param {string} serviceObjectiveName The name of the service objective to retrieve.
		 * @return {ServiceObjective} OK
		 */
		ServiceObjectives_Get(api_version: string, subscriptionId: string, resourceGroupName: string, serverName: string, serviceObjectiveName: string): Observable<ServiceObjective> {
			return this.http.get<ServiceObjective>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Sql/servers/' + (serverName == null ? '' : encodeURIComponent(serverName)) + '/serviceObjectives/' + (serviceObjectiveName == null ? '' : encodeURIComponent(serviceObjectiveName)) + '?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}
	}

}

