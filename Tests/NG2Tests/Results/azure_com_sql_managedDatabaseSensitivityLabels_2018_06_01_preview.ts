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

		/** The information type ID. */
		informationTypeId?: string | null;

		/** Is sensitivity recommendation disabled. Applicable for recommended sensitivity label only. Specifies whether the sensitivity recommendation on this column is disabled (dismissed) or not. */
		isDisabled?: boolean | null;

		/** The label ID. */
		labelId?: string | null;

		/** The label name. */
		labelName?: string | null;
		rank?: SensitivityLabelPropertiesRank | null;
	}

	/** Properties of a sensitivity label. */
	export interface SensitivityLabelPropertiesFormProperties {

		/** The information type. */
		informationType: FormControl<string | null | undefined>,

		/** The information type ID. */
		informationTypeId: FormControl<string | null | undefined>,

		/** Is sensitivity recommendation disabled. Applicable for recommended sensitivity label only. Specifies whether the sensitivity recommendation on this column is disabled (dismissed) or not. */
		isDisabled: FormControl<boolean | null | undefined>,

		/** The label ID. */
		labelId: FormControl<string | null | undefined>,

		/** The label name. */
		labelName: FormControl<string | null | undefined>,
		rank: FormControl<SensitivityLabelPropertiesRank | null | undefined>,
	}
	export function CreateSensitivityLabelPropertiesFormGroup() {
		return new FormGroup<SensitivityLabelPropertiesFormProperties>({
			informationType: new FormControl<string | null | undefined>(undefined),
			informationTypeId: new FormControl<string | null | undefined>(undefined),
			isDisabled: new FormControl<boolean | null | undefined>(undefined),
			labelId: new FormControl<string | null | undefined>(undefined),
			labelName: new FormControl<string | null | undefined>(undefined),
			rank: new FormControl<SensitivityLabelPropertiesRank | null | undefined>(undefined),
		});

	}

	export enum SensitivityLabelPropertiesRank { None = 'None', Low = 'Low', Medium = 'Medium', High = 'High', Critical = 'Critical' }


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
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/managedInstances/{managedInstanceName}/databases/{databaseName}/currentSensitivityLabels
		 * @param {string} resourceGroupName The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
		 * @param {string} managedInstanceName The name of the managed instance.
		 * @param {string} databaseName The name of the database.
		 * @param {string} filter An OData filter expression that filters elements in the collection.
		 * @param {string} subscriptionId The subscription ID that identifies an Azure subscription.
		 * @param {string} api_version The API version to use for the request.
		 * @return {SensitivityLabelListResult} Successfully retrieved the sensitivity labels.
		 */
		ManagedDatabaseSensitivityLabels_ListCurrentByDatabase(resourceGroupName: string, managedInstanceName: string, databaseName: string, filter: string | null | undefined, subscriptionId: string, api_version: string): Observable<SensitivityLabelListResult> {
			return this.http.get<SensitivityLabelListResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Sql/managedInstances/' + (managedInstanceName == null ? '' : encodeURIComponent(managedInstanceName)) + '/databases/' + (databaseName == null ? '' : encodeURIComponent(databaseName)) + '/currentSensitivityLabels&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Gets the sensitivity labels of a given database
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/managedInstances/{managedInstanceName}/databases/{databaseName}/recommendedSensitivityLabels
		 * @param {string} resourceGroupName The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
		 * @param {string} managedInstanceName The name of the managed instance.
		 * @param {string} databaseName The name of the database.
		 * @param {boolean} includeDisabledRecommendations Specifies whether to include disabled recommendations or not.
		 * @param {string} filter An OData filter expression that filters elements in the collection.
		 * @param {string} subscriptionId The subscription ID that identifies an Azure subscription.
		 * @param {string} api_version The API version to use for the request.
		 * @return {SensitivityLabelListResult} Successfully retrieved the sensitivity labels.
		 */
		ManagedDatabaseSensitivityLabels_ListRecommendedByDatabase(resourceGroupName: string, managedInstanceName: string, databaseName: string, includeDisabledRecommendations: boolean | null | undefined, skipToken: string | null | undefined, filter: string | null | undefined, subscriptionId: string, api_version: string): Observable<SensitivityLabelListResult> {
			return this.http.get<SensitivityLabelListResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Sql/managedInstances/' + (managedInstanceName == null ? '' : encodeURIComponent(managedInstanceName)) + '/databases/' + (databaseName == null ? '' : encodeURIComponent(databaseName)) + '/recommendedSensitivityLabels&includeDisabledRecommendations=' + includeDisabledRecommendations + '&skipToken=' + (skipToken == null ? '' : encodeURIComponent(skipToken)) + '&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Gets the sensitivity label of a given column
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/managedInstances/{managedInstanceName}/databases/{databaseName}/schemas/{schemaName}/tables/{tableName}/columns/{columnName}/sensitivityLabels/{sensitivityLabelSource}
		 * @param {string} resourceGroupName The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
		 * @param {string} managedInstanceName The name of the managed instance.
		 * @param {string} databaseName The name of the database.
		 * @param {string} schemaName The name of the schema.
		 * @param {string} tableName The name of the table.
		 * @param {string} columnName The name of the column.
		 * @param {ManagedDatabaseSensitivityLabels_GetSensitivityLabelSource} sensitivityLabelSource The source of the sensitivity label.
		 * @param {string} subscriptionId The subscription ID that identifies an Azure subscription.
		 * @param {string} api_version The API version to use for the request.
		 * @return {SensitivityLabel} Successfully retrieved the sensitivity label.
		 */
		ManagedDatabaseSensitivityLabels_Get(resourceGroupName: string, managedInstanceName: string, databaseName: string, schemaName: string, tableName: string, columnName: string, sensitivityLabelSource: ManagedDatabaseSensitivityLabels_GetSensitivityLabelSource, subscriptionId: string, api_version: string): Observable<SensitivityLabel> {
			return this.http.get<SensitivityLabel>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Sql/managedInstances/' + (managedInstanceName == null ? '' : encodeURIComponent(managedInstanceName)) + '/databases/' + (databaseName == null ? '' : encodeURIComponent(databaseName)) + '/schemas/' + (schemaName == null ? '' : encodeURIComponent(schemaName)) + '/tables/' + (tableName == null ? '' : encodeURIComponent(tableName)) + '/columns/' + (columnName == null ? '' : encodeURIComponent(columnName)) + '/sensitivityLabels/' + sensitivityLabelSource + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Creates or updates the sensitivity label of a given column
		 * Put subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/managedInstances/{managedInstanceName}/databases/{databaseName}/schemas/{schemaName}/tables/{tableName}/columns/{columnName}/sensitivityLabels/{sensitivityLabelSource}
		 * @param {string} resourceGroupName The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
		 * @param {string} managedInstanceName The name of the managed instance.
		 * @param {string} databaseName The name of the database.
		 * @param {string} schemaName The name of the schema.
		 * @param {string} tableName The name of the table.
		 * @param {string} columnName The name of the column.
		 * @param {ManagedDatabaseSensitivityLabels_CreateOrUpdateSensitivityLabelSource} sensitivityLabelSource The source of the sensitivity label.
		 * @param {string} subscriptionId The subscription ID that identifies an Azure subscription.
		 * @param {string} api_version The API version to use for the request.
		 * @param {SensitivityLabel} requestBody The column sensitivity label resource.
		 * @return {SensitivityLabel} Successfully updated the sensitivity label.
		 */
		ManagedDatabaseSensitivityLabels_CreateOrUpdate(resourceGroupName: string, managedInstanceName: string, databaseName: string, schemaName: string, tableName: string, columnName: string, sensitivityLabelSource: ManagedDatabaseSensitivityLabels_CreateOrUpdateSensitivityLabelSource, subscriptionId: string, api_version: string, requestBody: SensitivityLabel): Observable<SensitivityLabel> {
			return this.http.put<SensitivityLabel>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Sql/managedInstances/' + (managedInstanceName == null ? '' : encodeURIComponent(managedInstanceName)) + '/databases/' + (databaseName == null ? '' : encodeURIComponent(databaseName)) + '/schemas/' + (schemaName == null ? '' : encodeURIComponent(schemaName)) + '/tables/' + (tableName == null ? '' : encodeURIComponent(tableName)) + '/columns/' + (columnName == null ? '' : encodeURIComponent(columnName)) + '/sensitivityLabels/' + sensitivityLabelSource + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes the sensitivity label of a given column
		 * Delete subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/managedInstances/{managedInstanceName}/databases/{databaseName}/schemas/{schemaName}/tables/{tableName}/columns/{columnName}/sensitivityLabels/{sensitivityLabelSource}
		 * @param {string} resourceGroupName The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
		 * @param {string} managedInstanceName The name of the managed instance.
		 * @param {string} databaseName The name of the database.
		 * @param {string} schemaName The name of the schema.
		 * @param {string} tableName The name of the table.
		 * @param {string} columnName The name of the column.
		 * @param {ManagedDatabaseSensitivityLabels_CreateOrUpdateSensitivityLabelSource} sensitivityLabelSource The source of the sensitivity label.
		 * @param {string} subscriptionId The subscription ID that identifies an Azure subscription.
		 * @param {string} api_version The API version to use for the request.
		 * @return {void} Successfully deleted the sensitivity label.
		 */
		ManagedDatabaseSensitivityLabels_Delete(resourceGroupName: string, managedInstanceName: string, databaseName: string, schemaName: string, tableName: string, columnName: string, sensitivityLabelSource: ManagedDatabaseSensitivityLabels_CreateOrUpdateSensitivityLabelSource, subscriptionId: string, api_version: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Sql/managedInstances/' + (managedInstanceName == null ? '' : encodeURIComponent(managedInstanceName)) + '/databases/' + (databaseName == null ? '' : encodeURIComponent(databaseName)) + '/schemas/' + (schemaName == null ? '' : encodeURIComponent(schemaName)) + '/tables/' + (tableName == null ? '' : encodeURIComponent(tableName)) + '/columns/' + (columnName == null ? '' : encodeURIComponent(columnName)) + '/sensitivityLabels/' + sensitivityLabelSource + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Disables sensitivity recommendations on a given column
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/managedInstances/{managedInstanceName}/databases/{databaseName}/schemas/{schemaName}/tables/{tableName}/columns/{columnName}/sensitivityLabels/{sensitivityLabelSource}/disable
		 * @param {string} resourceGroupName The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
		 * @param {string} managedInstanceName The name of the managed instance.
		 * @param {string} databaseName The name of the database.
		 * @param {string} schemaName The name of the schema.
		 * @param {string} tableName The name of the table.
		 * @param {string} columnName The name of the column.
		 * @param {string} subscriptionId The subscription ID that identifies an Azure subscription.
		 * @param {string} api_version The API version to use for the request.
		 * @return {void} Successfully disabled the sensitivity recommendations on the given column.
		 */
		ManagedDatabaseSensitivityLabels_DisableRecommendation(resourceGroupName: string, managedInstanceName: string, databaseName: string, schemaName: string, tableName: string, columnName: string, sensitivityLabelSource: ManagedDatabaseSensitivityLabels_DisableRecommendationSensitivityLabelSource, subscriptionId: string, api_version: string): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Sql/managedInstances/' + (managedInstanceName == null ? '' : encodeURIComponent(managedInstanceName)) + '/databases/' + (databaseName == null ? '' : encodeURIComponent(databaseName)) + '/schemas/' + (schemaName == null ? '' : encodeURIComponent(schemaName)) + '/tables/' + (tableName == null ? '' : encodeURIComponent(tableName)) + '/columns/' + (columnName == null ? '' : encodeURIComponent(columnName)) + '/sensitivityLabels/' + sensitivityLabelSource + '/disable&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Enables sensitivity recommendations on a given column (recommendations are enabled by default on all columns)
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/managedInstances/{managedInstanceName}/databases/{databaseName}/schemas/{schemaName}/tables/{tableName}/columns/{columnName}/sensitivityLabels/{sensitivityLabelSource}/enable
		 * @param {string} resourceGroupName The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
		 * @param {string} managedInstanceName The name of the managed instance.
		 * @param {string} databaseName The name of the database.
		 * @param {string} schemaName The name of the schema.
		 * @param {string} tableName The name of the table.
		 * @param {string} columnName The name of the column.
		 * @param {string} subscriptionId The subscription ID that identifies an Azure subscription.
		 * @param {string} api_version The API version to use for the request.
		 * @return {void} Successfully enabled the sensitivity recommendations on the given column.
		 */
		ManagedDatabaseSensitivityLabels_EnableRecommendation(resourceGroupName: string, managedInstanceName: string, databaseName: string, schemaName: string, tableName: string, columnName: string, sensitivityLabelSource: ManagedDatabaseSensitivityLabels_DisableRecommendationSensitivityLabelSource, subscriptionId: string, api_version: string): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Sql/managedInstances/' + (managedInstanceName == null ? '' : encodeURIComponent(managedInstanceName)) + '/databases/' + (databaseName == null ? '' : encodeURIComponent(databaseName)) + '/schemas/' + (schemaName == null ? '' : encodeURIComponent(schemaName)) + '/tables/' + (tableName == null ? '' : encodeURIComponent(tableName)) + '/columns/' + (columnName == null ? '' : encodeURIComponent(columnName)) + '/sensitivityLabels/' + sensitivityLabelSource + '/enable&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), null, { observe: 'response', responseType: 'text' });
		}
	}

	export enum ManagedDatabaseSensitivityLabels_GetSensitivityLabelSource { current = 'current', recommended = 'recommended' }

	export enum ManagedDatabaseSensitivityLabels_CreateOrUpdateSensitivityLabelSource { current = 'current' }

	export enum ManagedDatabaseSensitivityLabels_DisableRecommendationSensitivityLabelSource { recommended = 'recommended' }

}

