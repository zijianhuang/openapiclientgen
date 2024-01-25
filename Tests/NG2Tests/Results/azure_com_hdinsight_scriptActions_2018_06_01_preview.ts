import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** The list runtime script action detail response. */
	export interface ClusterListRuntimeScriptActionDetailResult {

		/** The link (url) to the next page of results. */
		nextLink?: string | null;

		/** The list of persisted script action details for the cluster. */
		value?: Array<string>;
	}

	/** The list runtime script action detail response. */
	export interface ClusterListRuntimeScriptActionDetailResultFormProperties {

		/** The link (url) to the next page of results. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateClusterListRuntimeScriptActionDetailResultFormGroup() {
		return new FormGroup<ClusterListRuntimeScriptActionDetailResultFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Describes a script action on role on the cluster. */
	export interface ScriptAction {

		/**
		 * The name of the script action.
		 * Required
		 */
		name: string;

		/**
		 * The parameters for the script provided.
		 * Required
		 */
		parameters: string;

		/**
		 * The URI to the script.
		 * Required
		 */
		uri: string;
	}

	/** Describes a script action on role on the cluster. */
	export interface ScriptActionFormProperties {

		/**
		 * The name of the script action.
		 * Required
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * The parameters for the script provided.
		 * Required
		 */
		parameters: FormControl<string | null | undefined>,

		/**
		 * The URI to the script.
		 * Required
		 */
		uri: FormControl<string | null | undefined>,
	}
	export function CreateScriptActionFormGroup() {
		return new FormGroup<ScriptActionFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			parameters: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			uri: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The list script execution history response. */
	export interface ScriptActionExecutionHistoryList {

		/** The link (url) to the next page of results. */
		nextLink?: string | null;

		/** The list of persisted script action details for the cluster. */
		value?: Array<string>;
	}

	/** The list script execution history response. */
	export interface ScriptActionExecutionHistoryListFormProperties {

		/** The link (url) to the next page of results. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateScriptActionExecutionHistoryListFormGroup() {
		return new FormGroup<ScriptActionExecutionHistoryListFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The persisted script action for cluster. */
	export interface ScriptActionPersistedGetResponseSpec {

		/** The application name for the script action. */
		applicationName?: string | null;

		/** The name of script action. */
		name?: string | null;

		/** The parameters for the script provided. */
		parameters?: string | null;

		/** The list of roles where script will be executed. */
		roles?: Array<string>;

		/** The URI to the script. */
		uri?: string | null;
	}

	/** The persisted script action for cluster. */
	export interface ScriptActionPersistedGetResponseSpecFormProperties {

		/** The application name for the script action. */
		applicationName: FormControl<string | null | undefined>,

		/** The name of script action. */
		name: FormControl<string | null | undefined>,

		/** The parameters for the script provided. */
		parameters: FormControl<string | null | undefined>,

		/** The URI to the script. */
		uri: FormControl<string | null | undefined>,
	}
	export function CreateScriptActionPersistedGetResponseSpecFormGroup() {
		return new FormGroup<ScriptActionPersistedGetResponseSpecFormProperties>({
			applicationName: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			parameters: new FormControl<string | null | undefined>(undefined),
			uri: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The persisted script action for the cluster. */
	export interface ScriptActionsList {

		/** The link (url) to the next page of results. */
		nextLink?: string | null;

		/** The list of persisted script action details for the cluster. */
		value?: Array<string>;
	}

	/** The persisted script action for the cluster. */
	export interface ScriptActionsListFormProperties {

		/** The link (url) to the next page of results. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateScriptActionsListFormGroup() {
		return new FormGroup<ScriptActionsListFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Executes script actions on the specified HDInsight cluster.
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HDInsight/clusters/{clusterName}/executeScriptActions
		 * @param {string} subscriptionId The subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} clusterName The name of the cluster.
		 * @param {string} api_version The HDInsight client API Version.
		 * @param {any} requestBody The parameters for executing script actions.
		 * @return {void} Accepted response definition.
		 */
		Clusters_ExecuteScriptActions(subscriptionId: string, resourceGroupName: string, clusterName: string, api_version: string, requestBody: any): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.HDInsight/clusters/' + (clusterName == null ? '' : encodeURIComponent(clusterName)) + '/executeScriptActions&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Lists all the persisted script actions for the specified cluster.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HDInsight/clusters/{clusterName}/scriptActions
		 * @param {string} subscriptionId The subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} clusterName The name of the cluster.
		 * @param {string} api_version The HDInsight client API Version.
		 * @return {ScriptActionsList} OK response definition.
		 */
		ScriptActions_ListByCluster(subscriptionId: string, resourceGroupName: string, clusterName: string, api_version: string): Observable<ScriptActionsList> {
			return this.http.get<ScriptActionsList>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.HDInsight/clusters/' + (clusterName == null ? '' : encodeURIComponent(clusterName)) + '/scriptActions&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Deletes a specified persisted script action of the cluster.
		 * Delete subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HDInsight/clusters/{clusterName}/scriptActions/{scriptName}
		 * @param {string} subscriptionId The subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} clusterName The name of the cluster.
		 * @param {string} scriptName The name of the script.
		 * @param {string} api_version The HDInsight client API Version.
		 * @return {void} OK response definition.
		 */
		ScriptActions_Delete(subscriptionId: string, resourceGroupName: string, clusterName: string, scriptName: string, api_version: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.HDInsight/clusters/' + (clusterName == null ? '' : encodeURIComponent(clusterName)) + '/scriptActions/' + (scriptName == null ? '' : encodeURIComponent(scriptName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Lists all scripts' execution history for the specified cluster.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HDInsight/clusters/{clusterName}/scriptExecutionHistory
		 * @param {string} subscriptionId The subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} clusterName The name of the cluster.
		 * @param {string} api_version The HDInsight client API Version.
		 * @return {ScriptActionExecutionHistoryList} OK response definition.
		 */
		ScriptExecutionHistory_ListByCluster(subscriptionId: string, resourceGroupName: string, clusterName: string, api_version: string): Observable<ScriptActionExecutionHistoryList> {
			return this.http.get<ScriptActionExecutionHistoryList>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.HDInsight/clusters/' + (clusterName == null ? '' : encodeURIComponent(clusterName)) + '/scriptExecutionHistory&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Gets the script execution detail for the given script execution ID.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HDInsight/clusters/{clusterName}/scriptExecutionHistory/{scriptExecutionId}
		 * @param {string} subscriptionId The subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} clusterName The name of the cluster.
		 * @param {string} scriptExecutionId The script execution Id
		 * @param {string} api_version The HDInsight client API Version.
		 * @return {any} OK response definition.
		 */
		ScriptActions_GetExecutionDetail(subscriptionId: string, resourceGroupName: string, clusterName: string, scriptExecutionId: string, api_version: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.HDInsight/clusters/' + (clusterName == null ? '' : encodeURIComponent(clusterName)) + '/scriptExecutionHistory/' + (scriptExecutionId == null ? '' : encodeURIComponent(scriptExecutionId)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Promotes the specified ad-hoc script execution to a persisted script.
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HDInsight/clusters/{clusterName}/scriptExecutionHistory/{scriptExecutionId}/promote
		 * @param {string} subscriptionId The subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} clusterName The name of the cluster.
		 * @param {string} scriptExecutionId The script execution Id
		 * @param {string} api_version The HDInsight client API Version.
		 * @return {void} OK response definition.
		 */
		ScriptExecutionHistory_Promote(subscriptionId: string, resourceGroupName: string, clusterName: string, scriptExecutionId: string, api_version: string): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.HDInsight/clusters/' + (clusterName == null ? '' : encodeURIComponent(clusterName)) + '/scriptExecutionHistory/' + (scriptExecutionId == null ? '' : encodeURIComponent(scriptExecutionId)) + '/promote&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), null, { observe: 'response', responseType: 'text' });
		}
	}

}

