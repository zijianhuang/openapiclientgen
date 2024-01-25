import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** A sensitivity label. */
	export interface SensitivityLabel {

		/** Properties of a sensitivity label. */
		properties?: SensitivityLabelProperties;
	}

	/** A sensitivity label. */
	export interface SensitivityLabelFormProperties {
	}
	export function CreateSensitivityLabelFormGroup() {
		return new FormGroup<SensitivityLabelFormProperties>({
		});

	}


	/** Properties of a sensitivity label. */
	export interface SensitivityLabelProperties {

		/** The information type. */
		informationType?: string | null;

		/** The label name. */
		labelName?: string | null;
	}

	/** Properties of a sensitivity label. */
	export interface SensitivityLabelPropertiesFormProperties {

		/** The information type. */
		informationType: FormControl<string | null | undefined>,

		/** The label name. */
		labelName: FormControl<string | null | undefined>,
	}
	export function CreateSensitivityLabelPropertiesFormGroup() {
		return new FormGroup<SensitivityLabelPropertiesFormProperties>({
			informationType: new FormControl<string | null | undefined>(undefined),
			labelName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A list of sensitivity labels. */
	export interface SensitivityLabelListResult {

		/** Link to retrieve next page of results. */
		nextLink?: string | null;

		/** Array of results. */
		value?: Array<SensitivityLabel>;
	}

	/** A list of sensitivity labels. */
	export interface SensitivityLabelListResultFormProperties {

		/** Link to retrieve next page of results. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateSensitivityLabelListResultFormGroup() {
		return new FormGroup<SensitivityLabelListResultFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Gets the sensitivity labels of a given database
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/databases/{databaseName}/currentSensitivityLabels
		 * @param {string} resourceGroupName The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
		 * @param {string} serverName The name of the server.
		 * @param {string} databaseName The name of the database.
		 * @param {string} filter An OData filter expression that filters elements in the collection.
		 * @param {string} subscriptionId The subscription ID that identifies an Azure subscription.
		 * @param {string} api_version The API version to use for the request.
		 * @return {SensitivityLabelListResult} Successfully retrieved the sensitivity labels.
		 */
		SensitivityLabels_ListCurrentByDatabase(resourceGroupName: string, serverName: string, databaseName: string, filter: string | null | undefined, subscriptionId: string, api_version: string): Observable<SensitivityLabelListResult> {
			return this.http.get<SensitivityLabelListResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Sql/servers/' + (serverName == null ? '' : encodeURIComponent(serverName)) + '/databases/' + (databaseName == null ? '' : encodeURIComponent(databaseName)) + '/currentSensitivityLabels&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Gets the sensitivity labels of a given database
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/databases/{databaseName}/recommendedSensitivityLabels
		 * @param {string} resourceGroupName The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
		 * @param {string} serverName The name of the server.
		 * @param {string} databaseName The name of the database.
		 * @param {string} filter An OData filter expression that filters elements in the collection.
		 * @param {string} subscriptionId The subscription ID that identifies an Azure subscription.
		 * @param {string} api_version The API version to use for the request.
		 * @return {SensitivityLabelListResult} Successfully retrieved the sensitivity labels.
		 */
		SensitivityLabels_ListRecommendedByDatabase(resourceGroupName: string, serverName: string, databaseName: string, filter: string | null | undefined, subscriptionId: string, api_version: string): Observable<SensitivityLabelListResult> {
			return this.http.get<SensitivityLabelListResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Sql/servers/' + (serverName == null ? '' : encodeURIComponent(serverName)) + '/databases/' + (databaseName == null ? '' : encodeURIComponent(databaseName)) + '/recommendedSensitivityLabels&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Gets the sensitivity label of a given column
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/databases/{databaseName}/schemas/{schemaName}/tables/{tableName}/columns/{columnName}/sensitivityLabels/{sensitivityLabelSource}
		 * @param {string} resourceGroupName The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
		 * @param {string} serverName The name of the server.
		 * @param {string} databaseName The name of the database.
		 * @param {string} schemaName The name of the schema.
		 * @param {string} tableName The name of the table.
		 * @param {string} columnName The name of the column.
		 * @param {SensitivityLabels_GetSensitivityLabelSource} sensitivityLabelSource The source of the sensitivity label.
		 * @param {string} subscriptionId The subscription ID that identifies an Azure subscription.
		 * @param {string} api_version The API version to use for the request.
		 * @return {SensitivityLabel} Successfully retrieved the sensitivity label.
		 */
		SensitivityLabels_Get(resourceGroupName: string, serverName: string, databaseName: string, schemaName: string, tableName: string, columnName: string, sensitivityLabelSource: SensitivityLabels_GetSensitivityLabelSource, subscriptionId: string, api_version: string): Observable<SensitivityLabel> {
			return this.http.get<SensitivityLabel>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Sql/servers/' + (serverName == null ? '' : encodeURIComponent(serverName)) + '/databases/' + (databaseName == null ? '' : encodeURIComponent(databaseName)) + '/schemas/' + (schemaName == null ? '' : encodeURIComponent(schemaName)) + '/tables/' + (tableName == null ? '' : encodeURIComponent(tableName)) + '/columns/' + (columnName == null ? '' : encodeURIComponent(columnName)) + '/sensitivityLabels/' + sensitivityLabelSource + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Creates or updates the sensitivity label of a given column
		 * Put subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/databases/{databaseName}/schemas/{schemaName}/tables/{tableName}/columns/{columnName}/sensitivityLabels/{sensitivityLabelSource}
		 * @param {string} resourceGroupName The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
		 * @param {string} serverName The name of the server.
		 * @param {string} databaseName The name of the database.
		 * @param {string} schemaName The name of the schema.
		 * @param {string} tableName The name of the table.
		 * @param {string} columnName The name of the column.
		 * @param {SensitivityLabels_CreateOrUpdateSensitivityLabelSource} sensitivityLabelSource The source of the sensitivity label.
		 * @param {string} subscriptionId The subscription ID that identifies an Azure subscription.
		 * @param {string} api_version The API version to use for the request.
		 * @param {SensitivityLabel} requestBody The column sensitivity label resource.
		 * @return {SensitivityLabel} Successfully updated the sensitivity label.
		 */
		SensitivityLabels_CreateOrUpdate(resourceGroupName: string, serverName: string, databaseName: string, schemaName: string, tableName: string, columnName: string, sensitivityLabelSource: SensitivityLabels_CreateOrUpdateSensitivityLabelSource, subscriptionId: string, api_version: string, requestBody: SensitivityLabel): Observable<SensitivityLabel> {
			return this.http.put<SensitivityLabel>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Sql/servers/' + (serverName == null ? '' : encodeURIComponent(serverName)) + '/databases/' + (databaseName == null ? '' : encodeURIComponent(databaseName)) + '/schemas/' + (schemaName == null ? '' : encodeURIComponent(schemaName)) + '/tables/' + (tableName == null ? '' : encodeURIComponent(tableName)) + '/columns/' + (columnName == null ? '' : encodeURIComponent(columnName)) + '/sensitivityLabels/' + sensitivityLabelSource + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes the sensitivity label of a given column
		 * Delete subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/databases/{databaseName}/schemas/{schemaName}/tables/{tableName}/columns/{columnName}/sensitivityLabels/{sensitivityLabelSource}
		 * @param {string} resourceGroupName The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
		 * @param {string} serverName The name of the server.
		 * @param {string} databaseName The name of the database.
		 * @param {string} schemaName The name of the schema.
		 * @param {string} tableName The name of the table.
		 * @param {string} columnName The name of the column.
		 * @param {SensitivityLabels_CreateOrUpdateSensitivityLabelSource} sensitivityLabelSource The source of the sensitivity label.
		 * @param {string} subscriptionId The subscription ID that identifies an Azure subscription.
		 * @param {string} api_version The API version to use for the request.
		 * @return {void} Successfully deleted the sensitivity label.
		 */
		SensitivityLabels_Delete(resourceGroupName: string, serverName: string, databaseName: string, schemaName: string, tableName: string, columnName: string, sensitivityLabelSource: SensitivityLabels_CreateOrUpdateSensitivityLabelSource, subscriptionId: string, api_version: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Sql/servers/' + (serverName == null ? '' : encodeURIComponent(serverName)) + '/databases/' + (databaseName == null ? '' : encodeURIComponent(databaseName)) + '/schemas/' + (schemaName == null ? '' : encodeURIComponent(schemaName)) + '/tables/' + (tableName == null ? '' : encodeURIComponent(tableName)) + '/columns/' + (columnName == null ? '' : encodeURIComponent(columnName)) + '/sensitivityLabels/' + sensitivityLabelSource + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets the sensitivity labels of a given database
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/databases/{databaseName}/sensitivityLabels
		 * @param {string} resourceGroupName The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
		 * @param {string} serverName The name of the server.
		 * @param {string} databaseName The name of the database.
		 * @param {string} filter An OData filter expression that filters elements in the collection.
		 * @param {string} subscriptionId The subscription ID that identifies an Azure subscription.
		 * @param {string} api_version The API version to use for the request.
		 * @return {SensitivityLabelListResult} Successfully retrieved the sensitivity labels.
		 */
		SensitivityLabels_ListByDatabase(resourceGroupName: string, serverName: string, databaseName: string, filter: string | null | undefined, subscriptionId: string, api_version: string): Observable<SensitivityLabelListResult> {
			return this.http.get<SensitivityLabelListResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Sql/servers/' + (serverName == null ? '' : encodeURIComponent(serverName)) + '/databases/' + (databaseName == null ? '' : encodeURIComponent(databaseName)) + '/sensitivityLabels&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}
	}

	export enum SensitivityLabels_GetSensitivityLabelSource { current = 0, recommended = 1 }

	export enum SensitivityLabels_CreateOrUpdateSensitivityLabelSource { current = 0 }

}

