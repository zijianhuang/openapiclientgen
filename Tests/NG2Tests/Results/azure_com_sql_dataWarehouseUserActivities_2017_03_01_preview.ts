import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** User activities of a data warehouse */
	export interface DataWarehouseUserActivities {

		/** User activities of a data warehouse. This currently includes the count of running or suspended queries. For more information, please view the sys.dm_pdw_exec_requests dynamic management view (DMV). */
		properties?: DataWarehouseUserActivitiesProperties;
	}

	/** User activities of a data warehouse */
	export interface DataWarehouseUserActivitiesFormProperties {
	}
	export function CreateDataWarehouseUserActivitiesFormGroup() {
		return new FormGroup<DataWarehouseUserActivitiesFormProperties>({
		});

	}


	/** User activities of a data warehouse. This currently includes the count of running or suspended queries. For more information, please view the sys.dm_pdw_exec_requests dynamic management view (DMV). */
	export interface DataWarehouseUserActivitiesProperties {

		/**
		 * Count of running and suspended queries.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		activeQueriesCount?: number | null;
	}

	/** User activities of a data warehouse. This currently includes the count of running or suspended queries. For more information, please view the sys.dm_pdw_exec_requests dynamic management view (DMV). */
	export interface DataWarehouseUserActivitiesPropertiesFormProperties {

		/**
		 * Count of running and suspended queries.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		activeQueriesCount: FormControl<number | null | undefined>,
	}
	export function CreateDataWarehouseUserActivitiesPropertiesFormGroup() {
		return new FormGroup<DataWarehouseUserActivitiesPropertiesFormProperties>({
			activeQueriesCount: new FormControl<number | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Gets the user activities of a data warehouse which includes running and suspended queries
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/databases/{databaseName}/dataWarehouseUserActivities/{dataWarehouseUserActivityName}
		 * @param {string} resourceGroupName The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
		 * @param {string} serverName The name of the server.
		 * @param {string} databaseName The name of the database.
		 * @param {DataWarehouseUserActivities_GetDataWarehouseUserActivityName} dataWarehouseUserActivityName The activity name of the data warehouse. 
		 * @param {string} subscriptionId The subscription ID that identifies an Azure subscription.
		 * @param {string} api_version The API version to use for the request.
		 * @return {DataWarehouseUserActivities} Successfully get the data warehouse user activities.
		 */
		DataWarehouseUserActivities_Get(resourceGroupName: string, serverName: string, databaseName: string, dataWarehouseUserActivityName: DataWarehouseUserActivities_GetDataWarehouseUserActivityName, subscriptionId: string, api_version: string): Observable<DataWarehouseUserActivities> {
			return this.http.get<DataWarehouseUserActivities>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Sql/servers/' + (serverName == null ? '' : encodeURIComponent(serverName)) + '/databases/' + (databaseName == null ? '' : encodeURIComponent(databaseName)) + '/dataWarehouseUserActivities/' + dataWarehouseUserActivityName + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}
	}

	export enum DataWarehouseUserActivities_GetDataWarehouseUserActivityName { current = 'current' }

}

