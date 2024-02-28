import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** ARM proxy resource. */
	export interface ProxyResource {
	}

	/** ARM proxy resource. */
	export interface ProxyResourceFormProperties {
	}
	export function CreateProxyResourceFormGroup() {
		return new FormGroup<ProxyResourceFormProperties>({
		});

	}


	/** ARM resource. */
	export interface Resource {

		/** Resource ID. */
		id?: string | null;

		/** Resource name. */
		name?: string | null;

		/** Resource type. */
		type?: string | null;
	}

	/** ARM resource. */
	export interface ResourceFormProperties {

		/** Resource ID. */
		id: FormControl<string | null | undefined>,

		/** Resource name. */
		name: FormControl<string | null | undefined>,

		/** Resource type. */
		type: FormControl<string | null | undefined>,
	}
	export function CreateResourceFormGroup() {
		return new FormGroup<ResourceFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Workload group operations for a data warehouse */
	export interface WorkloadGroup {

		/** Workload group definition. For more information look at sys.workload_management_workload_groups (DMV). */
		properties?: WorkloadGroupProperties;
	}

	/** Workload group operations for a data warehouse */
	export interface WorkloadGroupFormProperties {
	}
	export function CreateWorkloadGroupFormGroup() {
		return new FormGroup<WorkloadGroupFormProperties>({
		});

	}


	/** Workload group definition. For more information look at sys.workload_management_workload_groups (DMV). */
	export interface WorkloadGroupProperties {

		/** The workload group importance level. */
		importance?: string | null;

		/**
		 * The workload group cap percentage resource.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		maxResourcePercent: number;

		/**
		 * The workload group request maximum grant percentage.
		 * Type: double
		 */
		maxResourcePercentPerRequest?: number | null;

		/**
		 * The workload group minimum percentage resource.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		minResourcePercent: number;

		/**
		 * The workload group request minimum grant percentage.
		 * Required
		 * Type: double
		 */
		minResourcePercentPerRequest: number;

		/**
		 * The workload group query execution timeout.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		queryExecutionTimeout?: number | null;
	}

	/** Workload group definition. For more information look at sys.workload_management_workload_groups (DMV). */
	export interface WorkloadGroupPropertiesFormProperties {

		/** The workload group importance level. */
		importance: FormControl<string | null | undefined>,

		/**
		 * The workload group cap percentage resource.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		maxResourcePercent: FormControl<number | null | undefined>,

		/**
		 * The workload group request maximum grant percentage.
		 * Type: double
		 */
		maxResourcePercentPerRequest: FormControl<number | null | undefined>,

		/**
		 * The workload group minimum percentage resource.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		minResourcePercent: FormControl<number | null | undefined>,

		/**
		 * The workload group request minimum grant percentage.
		 * Required
		 * Type: double
		 */
		minResourcePercentPerRequest: FormControl<number | null | undefined>,

		/**
		 * The workload group query execution timeout.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		queryExecutionTimeout: FormControl<number | null | undefined>,
	}
	export function CreateWorkloadGroupPropertiesFormGroup() {
		return new FormGroup<WorkloadGroupPropertiesFormProperties>({
			importance: new FormControl<string | null | undefined>(undefined),
			maxResourcePercent: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			maxResourcePercentPerRequest: new FormControl<number | null | undefined>(undefined),
			minResourcePercent: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			minResourcePercentPerRequest: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			queryExecutionTimeout: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** A list of workload groups. */
	export interface WorkloadGroupListResult {

		/** Link to retrieve next page of results. */
		nextLink?: string | null;

		/** Array of results. */
		value?: Array<WorkloadGroup>;
	}

	/** A list of workload groups. */
	export interface WorkloadGroupListResultFormProperties {

		/** Link to retrieve next page of results. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateWorkloadGroupListResultFormGroup() {
		return new FormGroup<WorkloadGroupListResultFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Gets the list of workload groups
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/databases/{databaseName}/workloadGroups
		 * @param {string} resourceGroupName The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
		 * @param {string} serverName The name of the server.
		 * @param {string} databaseName The name of the database.
		 * @param {string} subscriptionId The subscription ID that identifies an Azure subscription.
		 * @param {string} api_version The API version to use for the request.
		 * @return {WorkloadGroupListResult} Successfully retrieved the list of workload groups.
		 */
		WorkloadGroups_ListByDatabase(resourceGroupName: string, serverName: string, databaseName: string, subscriptionId: string, api_version: string): Observable<WorkloadGroupListResult> {
			return this.http.get<WorkloadGroupListResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Sql/servers/' + (serverName == null ? '' : encodeURIComponent(serverName)) + '/databases/' + (databaseName == null ? '' : encodeURIComponent(databaseName)) + '/workloadGroups&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Gets a workload group
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/databases/{databaseName}/workloadGroups/{workloadGroupName}
		 * @param {string} resourceGroupName The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
		 * @param {string} serverName The name of the server.
		 * @param {string} databaseName The name of the database.
		 * @param {string} workloadGroupName The name of the workload group.
		 * @param {string} subscriptionId The subscription ID that identifies an Azure subscription.
		 * @param {string} api_version The API version to use for the request.
		 * @return {WorkloadGroup} Successfully retrieved the specifies workload group.
		 */
		WorkloadGroups_Get(resourceGroupName: string, serverName: string, databaseName: string, workloadGroupName: string, subscriptionId: string, api_version: string): Observable<WorkloadGroup> {
			return this.http.get<WorkloadGroup>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Sql/servers/' + (serverName == null ? '' : encodeURIComponent(serverName)) + '/databases/' + (databaseName == null ? '' : encodeURIComponent(databaseName)) + '/workloadGroups/' + (workloadGroupName == null ? '' : encodeURIComponent(workloadGroupName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Creates or updates a workload group.
		 * Put subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/databases/{databaseName}/workloadGroups/{workloadGroupName}
		 * @param {string} resourceGroupName The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
		 * @param {string} serverName The name of the server.
		 * @param {string} databaseName The name of the database.
		 * @param {string} workloadGroupName The name of the workload group.
		 * @param {string} subscriptionId The subscription ID that identifies an Azure subscription.
		 * @param {string} api_version The API version to use for the request.
		 * @param {WorkloadGroup} requestBody The requested workload group state.
		 * @return {WorkloadGroup} Successfully updated the workload group.
		 */
		WorkloadGroups_CreateOrUpdate(resourceGroupName: string, serverName: string, databaseName: string, workloadGroupName: string, subscriptionId: string, api_version: string, requestBody: WorkloadGroup): Observable<WorkloadGroup> {
			return this.http.put<WorkloadGroup>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Sql/servers/' + (serverName == null ? '' : encodeURIComponent(serverName)) + '/databases/' + (databaseName == null ? '' : encodeURIComponent(databaseName)) + '/workloadGroups/' + (workloadGroupName == null ? '' : encodeURIComponent(workloadGroupName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a workload group.
		 * Delete subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/databases/{databaseName}/workloadGroups/{workloadGroupName}
		 * @param {string} resourceGroupName The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
		 * @param {string} serverName The name of the server.
		 * @param {string} databaseName The name of the database.
		 * @param {string} workloadGroupName The name of the workload group to delete.
		 * @param {string} subscriptionId The subscription ID that identifies an Azure subscription.
		 * @param {string} api_version The API version to use for the request.
		 * @return {void} Successfully deleted the workload group.
		 */
		WorkloadGroups_Delete(resourceGroupName: string, serverName: string, databaseName: string, workloadGroupName: string, subscriptionId: string, api_version: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Sql/servers/' + (serverName == null ? '' : encodeURIComponent(serverName)) + '/databases/' + (databaseName == null ? '' : encodeURIComponent(databaseName)) + '/workloadGroups/' + (workloadGroupName == null ? '' : encodeURIComponent(workloadGroupName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { observe: 'response', responseType: 'text' });
		}
	}

}

