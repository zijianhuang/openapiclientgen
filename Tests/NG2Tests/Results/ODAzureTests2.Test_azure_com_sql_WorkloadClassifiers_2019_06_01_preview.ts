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


	/** Workload classifier operations for a data warehouse */
	export interface WorkloadClassifier {

		/** Workload classifier definition. For more information look at sys.workload_management_workload_classifiers (DMV). */
		properties?: WorkloadClassifierProperties;
	}

	/** Workload classifier operations for a data warehouse */
	export interface WorkloadClassifierFormProperties {
	}
	export function CreateWorkloadClassifierFormGroup() {
		return new FormGroup<WorkloadClassifierFormProperties>({
		});

	}


	/** Workload classifier definition. For more information look at sys.workload_management_workload_classifiers (DMV). */
	export interface WorkloadClassifierProperties {

		/** The workload classifier context. */
		context?: string | null;

		/** The workload classifier end time for classification. */
		endTime?: string | null;

		/** The workload classifier importance. */
		importance?: string | null;

		/** The workload classifier label. */
		label?: string | null;

		/**
		 * The workload classifier member name.
		 * Required
		 */
		memberName: string;

		/** The workload classifier start time for classification. */
		startTime?: string | null;
	}

	/** Workload classifier definition. For more information look at sys.workload_management_workload_classifiers (DMV). */
	export interface WorkloadClassifierPropertiesFormProperties {

		/** The workload classifier context. */
		context: FormControl<string | null | undefined>,

		/** The workload classifier end time for classification. */
		endTime: FormControl<string | null | undefined>,

		/** The workload classifier importance. */
		importance: FormControl<string | null | undefined>,

		/** The workload classifier label. */
		label: FormControl<string | null | undefined>,

		/**
		 * The workload classifier member name.
		 * Required
		 */
		memberName: FormControl<string | null | undefined>,

		/** The workload classifier start time for classification. */
		startTime: FormControl<string | null | undefined>,
	}
	export function CreateWorkloadClassifierPropertiesFormGroup() {
		return new FormGroup<WorkloadClassifierPropertiesFormProperties>({
			context: new FormControl<string | null | undefined>(undefined),
			endTime: new FormControl<string | null | undefined>(undefined),
			importance: new FormControl<string | null | undefined>(undefined),
			label: new FormControl<string | null | undefined>(undefined),
			memberName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			startTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A list of workload classifiers for a workload group. */
	export interface WorkloadClassifierListResult {

		/** Link to retrieve next page of results. */
		nextLink?: string | null;

		/** Array of results. */
		value?: Array<WorkloadClassifier>;
	}

	/** A list of workload classifiers for a workload group. */
	export interface WorkloadClassifierListResultFormProperties {

		/** Link to retrieve next page of results. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateWorkloadClassifierListResultFormGroup() {
		return new FormGroup<WorkloadClassifierListResultFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Gets the list of workload classifiers for a workload group
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/databases/{databaseName}/workloadGroups/{workloadGroupName}/workloadClassifiers
		 * @param {string} resourceGroupName The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
		 * @param {string} serverName The name of the server.
		 * @param {string} databaseName The name of the database.
		 * @param {string} workloadGroupName The name of the workload group from which to receive the classifiers from.
		 * @param {string} subscriptionId The subscription ID that identifies an Azure subscription.
		 * @param {string} api_version The API version to use for the request.
		 * @return {WorkloadClassifierListResult} Successfully retrieved the list of workload groups.
		 */
		WorkloadClassifiers_ListByWorkloadGroup(resourceGroupName: string, serverName: string, databaseName: string, workloadGroupName: string, subscriptionId: string, api_version: string): Observable<WorkloadClassifierListResult> {
			return this.http.get<WorkloadClassifierListResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Sql/servers/' + (serverName == null ? '' : encodeURIComponent(serverName)) + '/databases/' + (databaseName == null ? '' : encodeURIComponent(databaseName)) + '/workloadGroups/' + (workloadGroupName == null ? '' : encodeURIComponent(workloadGroupName)) + '/workloadClassifiers&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Gets a workload classifier
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/databases/{databaseName}/workloadGroups/{workloadGroupName}/workloadClassifiers/{workloadClassifierName}
		 * @param {string} resourceGroupName The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
		 * @param {string} serverName The name of the server.
		 * @param {string} databaseName The name of the database.
		 * @param {string} workloadGroupName The name of the workload group from which to receive the classifier from.
		 * @param {string} workloadClassifierName The name of the workload classifier.
		 * @param {string} subscriptionId The subscription ID that identifies an Azure subscription.
		 * @param {string} api_version The API version to use for the request.
		 * @return {WorkloadClassifier} Successfully retrieved the specifies workload classifier.
		 */
		WorkloadClassifiers_Get(resourceGroupName: string, serverName: string, databaseName: string, workloadGroupName: string, workloadClassifierName: string, subscriptionId: string, api_version: string): Observable<WorkloadClassifier> {
			return this.http.get<WorkloadClassifier>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Sql/servers/' + (serverName == null ? '' : encodeURIComponent(serverName)) + '/databases/' + (databaseName == null ? '' : encodeURIComponent(databaseName)) + '/workloadGroups/' + (workloadGroupName == null ? '' : encodeURIComponent(workloadGroupName)) + '/workloadClassifiers/' + (workloadClassifierName == null ? '' : encodeURIComponent(workloadClassifierName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Creates or updates a workload classifier.
		 * Put subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/databases/{databaseName}/workloadGroups/{workloadGroupName}/workloadClassifiers/{workloadClassifierName}
		 * @param {string} resourceGroupName The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
		 * @param {string} serverName The name of the server.
		 * @param {string} databaseName The name of the database.
		 * @param {string} workloadGroupName The name of the workload group from which to receive the classifier from.
		 * @param {string} workloadClassifierName The name of the workload classifier to create/update.
		 * @param {string} subscriptionId The subscription ID that identifies an Azure subscription.
		 * @param {string} api_version The API version to use for the request.
		 * @param {WorkloadClassifier} requestBody The properties of the workload classifier.
		 * @return {WorkloadClassifier} Successfully updated the workload classifier.
		 */
		WorkloadClassifiers_CreateOrUpdate(resourceGroupName: string, serverName: string, databaseName: string, workloadGroupName: string, workloadClassifierName: string, subscriptionId: string, api_version: string, requestBody: WorkloadClassifier): Observable<WorkloadClassifier> {
			return this.http.put<WorkloadClassifier>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Sql/servers/' + (serverName == null ? '' : encodeURIComponent(serverName)) + '/databases/' + (databaseName == null ? '' : encodeURIComponent(databaseName)) + '/workloadGroups/' + (workloadGroupName == null ? '' : encodeURIComponent(workloadGroupName)) + '/workloadClassifiers/' + (workloadClassifierName == null ? '' : encodeURIComponent(workloadClassifierName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a workload classifier.
		 * Delete subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/databases/{databaseName}/workloadGroups/{workloadGroupName}/workloadClassifiers/{workloadClassifierName}
		 * @param {string} resourceGroupName The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
		 * @param {string} serverName The name of the server.
		 * @param {string} databaseName The name of the database.
		 * @param {string} workloadGroupName The name of the workload group from which to receive the classifier from.
		 * @param {string} workloadClassifierName The name of the workload classifier to delete.
		 * @param {string} subscriptionId The subscription ID that identifies an Azure subscription.
		 * @param {string} api_version The API version to use for the request.
		 * @return {void} Successfully deleted the workload classifier.
		 */
		WorkloadClassifiers_Delete(resourceGroupName: string, serverName: string, databaseName: string, workloadGroupName: string, workloadClassifierName: string, subscriptionId: string, api_version: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Sql/servers/' + (serverName == null ? '' : encodeURIComponent(serverName)) + '/databases/' + (databaseName == null ? '' : encodeURIComponent(databaseName)) + '/workloadGroups/' + (workloadGroupName == null ? '' : encodeURIComponent(workloadGroupName)) + '/workloadClassifiers/' + (workloadClassifierName == null ? '' : encodeURIComponent(workloadClassifierName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { observe: 'response', responseType: 'text' });
		}
	}

}

