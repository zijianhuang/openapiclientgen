import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** The Operations Management Suite (OMS) parameters. */
	export interface ClusterMonitoringRequest {

		/** The Operations Management Suite (OMS) workspace key. */
		primaryKey?: string | null;

		/** The Operations Management Suite (OMS) workspace ID. */
		workspaceId?: string | null;
	}

	/** The Operations Management Suite (OMS) parameters. */
	export interface ClusterMonitoringRequestFormProperties {

		/** The Operations Management Suite (OMS) workspace key. */
		primaryKey: FormControl<string | null | undefined>,

		/** The Operations Management Suite (OMS) workspace ID. */
		workspaceId: FormControl<string | null | undefined>,
	}
	export function CreateClusterMonitoringRequestFormGroup() {
		return new FormGroup<ClusterMonitoringRequestFormProperties>({
			primaryKey: new FormControl<string | null | undefined>(undefined),
			workspaceId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The Operations Management Suite (OMS) status response */
	export interface ClusterMonitoringResponse {

		/** The status of the Operations Management Suite (OMS) on the HDInsight cluster. */
		clusterMonitoringEnabled?: boolean | null;

		/** The workspace ID of the Operations Management Suite (OMS) on the HDInsight cluster. */
		workspaceId?: string | null;
	}

	/** The Operations Management Suite (OMS) status response */
	export interface ClusterMonitoringResponseFormProperties {

		/** The status of the Operations Management Suite (OMS) on the HDInsight cluster. */
		clusterMonitoringEnabled: FormControl<boolean | null | undefined>,

		/** The workspace ID of the Operations Management Suite (OMS) on the HDInsight cluster. */
		workspaceId: FormControl<string | null | undefined>,
	}
	export function CreateClusterMonitoringResponseFormGroup() {
		return new FormGroup<ClusterMonitoringResponseFormProperties>({
			clusterMonitoringEnabled: new FormControl<boolean | null | undefined>(undefined),
			workspaceId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Cluster monitoring extensions */
	export interface Extension {

		/** The certificate for the cluster monitoring extensions. */
		primaryKey?: string | null;

		/** The workspace ID for the cluster monitoring extension. */
		workspaceId?: string | null;
	}

	/** Cluster monitoring extensions */
	export interface ExtensionFormProperties {

		/** The certificate for the cluster monitoring extensions. */
		primaryKey: FormControl<string | null | undefined>,

		/** The workspace ID for the cluster monitoring extension. */
		workspaceId: FormControl<string | null | undefined>,
	}
	export function CreateExtensionFormGroup() {
		return new FormGroup<ExtensionFormProperties>({
			primaryKey: new FormControl<string | null | undefined>(undefined),
			workspaceId: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Gets the status of Operations Management Suite (OMS) on the HDInsight cluster.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HDInsight/clusters/{clusterName}/extensions/clustermonitoring
		 * @param {string} subscriptionId The subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} clusterName The name of the cluster.
		 * @param {string} api_version The HDInsight client API Version.
		 * @return {ClusterMonitoringResponse} OK. The request has succeeded.
		 */
		Extensions_GetMonitoringStatus(subscriptionId: string, resourceGroupName: string, clusterName: string, api_version: string): Observable<ClusterMonitoringResponse> {
			return this.http.get<ClusterMonitoringResponse>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.HDInsight/clusters/' + (clusterName == null ? '' : encodeURIComponent(clusterName)) + '/extensions/clustermonitoring&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Enables the Operations Management Suite (OMS) on the HDInsight cluster.
		 * Put subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HDInsight/clusters/{clusterName}/extensions/clustermonitoring
		 * @param {string} subscriptionId The subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} clusterName The name of the cluster.
		 * @param {string} api_version The HDInsight client API Version.
		 * @param {ClusterMonitoringRequest} requestBody The Operations Management Suite (OMS) workspace parameters.
		 * @return {void} Ok response definition.
		 */
		Extensions_EnableMonitoring(subscriptionId: string, resourceGroupName: string, clusterName: string, api_version: string, requestBody: ClusterMonitoringRequest): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.HDInsight/clusters/' + (clusterName == null ? '' : encodeURIComponent(clusterName)) + '/extensions/clustermonitoring&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Disables the Operations Management Suite (OMS) on the HDInsight cluster.
		 * Delete subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HDInsight/clusters/{clusterName}/extensions/clustermonitoring
		 * @param {string} subscriptionId The subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} clusterName The name of the cluster.
		 * @param {string} api_version The HDInsight client API Version.
		 * @return {void} Ok response definition.
		 */
		Extensions_DisableMonitoring(subscriptionId: string, resourceGroupName: string, clusterName: string, api_version: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.HDInsight/clusters/' + (clusterName == null ? '' : encodeURIComponent(clusterName)) + '/extensions/clustermonitoring&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets the extension properties for the specified HDInsight cluster extension.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HDInsight/clusters/{clusterName}/extensions/{extensionName}
		 * @param {string} subscriptionId The subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} clusterName The name of the cluster.
		 * @param {string} extensionName The name of the cluster extension.
		 * @param {string} api_version The HDInsight client API Version.
		 * @return {Extension} OK. The request has succeeded.
		 */
		Extensions_Get(subscriptionId: string, resourceGroupName: string, clusterName: string, extensionName: string, api_version: string): Observable<Extension> {
			return this.http.get<Extension>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.HDInsight/clusters/' + (clusterName == null ? '' : encodeURIComponent(clusterName)) + '/extensions/' + (extensionName == null ? '' : encodeURIComponent(extensionName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Creates an HDInsight cluster extension.
		 * Put subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HDInsight/clusters/{clusterName}/extensions/{extensionName}
		 * @param {string} subscriptionId The subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} clusterName The name of the cluster.
		 * @param {string} extensionName The name of the cluster extension.
		 * @param {string} api_version The HDInsight client API Version.
		 * @param {Extension} requestBody The cluster extensions create request.
		 * @return {void} Ok response definition.
		 */
		Extensions_Create(subscriptionId: string, resourceGroupName: string, clusterName: string, extensionName: string, api_version: string, requestBody: Extension): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.HDInsight/clusters/' + (clusterName == null ? '' : encodeURIComponent(clusterName)) + '/extensions/' + (extensionName == null ? '' : encodeURIComponent(extensionName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Deletes the specified extension for HDInsight cluster.
		 * Delete subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HDInsight/clusters/{clusterName}/extensions/{extensionName}
		 * @param {string} subscriptionId The subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} clusterName The name of the cluster.
		 * @param {string} extensionName The name of the cluster extension.
		 * @param {string} api_version The HDInsight client API Version.
		 * @return {void} Ok response definition.
		 */
		Extensions_Delete(subscriptionId: string, resourceGroupName: string, clusterName: string, extensionName: string, api_version: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.HDInsight/clusters/' + (clusterName == null ? '' : encodeURIComponent(clusterName)) + '/extensions/' + (extensionName == null ? '' : encodeURIComponent(extensionName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { observe: 'response', responseType: 'text' });
		}
	}

}

