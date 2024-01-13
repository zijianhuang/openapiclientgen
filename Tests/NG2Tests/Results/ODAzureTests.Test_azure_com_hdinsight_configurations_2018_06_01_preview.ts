import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** The configuration object for the specified configuration for the specified cluster. */
	export interface ClusterConfiguration {
	}

	/** The configuration object for the specified configuration for the specified cluster. */
	export interface ClusterConfigurationFormProperties {
	}
	export function CreateClusterConfigurationFormGroup() {
		return new FormGroup<ClusterConfigurationFormProperties>({
		});

	}


	/** The configuration object for the specified cluster. */
	export interface ClusterConfigurations {

		/** The configuration object for the specified configuration for the specified cluster. */
		configurations?: {[id: string]: ClusterConfiguration };
	}

	/** The configuration object for the specified cluster. */
	export interface ClusterConfigurationsFormProperties {

		/** The configuration object for the specified configuration for the specified cluster. */
		configurations: FormControl<{[id: string]: ClusterConfiguration } | null | undefined>,
	}
	export function CreateClusterConfigurationsFormGroup() {
		return new FormGroup<ClusterConfigurationsFormProperties>({
			configurations: new FormControl<{[id: string]: ClusterConfiguration } | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Gets all configuration information for an HDI cluster.
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HDInsight/clusters/{clusterName}/configurations
		 * @param {string} subscriptionId The subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} clusterName The name of the cluster.
		 * @param {string} api_version The HDInsight client API Version.
		 * @return {ClusterConfigurations} OK response definition.
		 */
		Configurations_List(subscriptionId: string, resourceGroupName: string, clusterName: string, api_version: string): Observable<ClusterConfigurations> {
			return this.http.post<ClusterConfigurations>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.HDInsight/clusters/' + (clusterName == null ? '' : encodeURIComponent(clusterName)) + '/configurations&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), null, {});
		}

		/**
		 * The configuration object for the specified cluster. This API is not recommended and might be removed in the future. Please consider using List configurations API instead.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HDInsight/clusters/{clusterName}/configurations/{configurationName}
		 * @param {string} subscriptionId The subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} clusterName The name of the cluster.
		 * @param {string} configurationName The name of the cluster configuration.
		 * @param {string} api_version The HDInsight client API Version.
		 * @return {ClusterConfiguration} OK response definition.
		 */
		Configurations_Get(subscriptionId: string, resourceGroupName: string, clusterName: string, configurationName: string, api_version: string): Observable<ClusterConfiguration> {
			return this.http.get<ClusterConfiguration>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.HDInsight/clusters/' + (clusterName == null ? '' : encodeURIComponent(clusterName)) + '/configurations/' + (configurationName == null ? '' : encodeURIComponent(configurationName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Configures the HTTP settings on the specified cluster. This API is deprecated, please use UpdateGatewaySettings in cluster endpoint instead.
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HDInsight/clusters/{clusterName}/configurations/{configurationName}
		 * @param {string} subscriptionId The subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} clusterName The name of the cluster.
		 * @param {string} configurationName The name of the cluster configuration.
		 * @param {string} api_version The HDInsight client API Version.
		 * @param {ClusterConfiguration} requestBody The cluster configurations.
		 * @return {void} Ok response definition
		 */
		Configurations_Update(subscriptionId: string, resourceGroupName: string, clusterName: string, configurationName: string, api_version: string, requestBody: ClusterConfiguration): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.HDInsight/clusters/' + (clusterName == null ? '' : encodeURIComponent(clusterName)) + '/configurations/' + (configurationName == null ? '' : encodeURIComponent(configurationName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}
	}

}

