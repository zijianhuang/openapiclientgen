import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** ARM resource for a app service plan. */
	export interface AppServicePlanPatchResource {

		/** AppServicePlanPatchResource resource specific properties */
		properties?: any;
	}

	/** ARM resource for a app service plan. */
	export interface AppServicePlanPatchResourceFormProperties {

		/** AppServicePlanPatchResource resource specific properties */
		properties: FormControl<any | null | undefined>,
	}
	export function CreateAppServicePlanPatchResourceFormGroup() {
		return new FormGroup<AppServicePlanPatchResourceFormProperties>({
			properties: new FormControl<any | null | undefined>(undefined),
		});

	}


	/** Collection of hostname bindings. */
	export interface HybridConnectionCollection {

		/** Link to next page of resources. */
		nextLink?: string | null;

		/**
		 * Collection of resources.
		 * Required
		 */
		HybridConnectionCollectionValue: Array<HybridConnectionCollectionValue>;
	}

	/** Collection of hostname bindings. */
	export interface HybridConnectionCollectionFormProperties {

		/** Link to next page of resources. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateHybridConnectionCollectionFormGroup() {
		return new FormGroup<HybridConnectionCollectionFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface HybridConnectionCollectionValue {

		/** HybridConnection resource specific properties */
		properties?: any;
	}
	export interface HybridConnectionCollectionValueFormProperties {

		/** HybridConnection resource specific properties */
		properties: FormControl<any | null | undefined>,
	}
	export function CreateHybridConnectionCollectionValueFormGroup() {
		return new FormGroup<HybridConnectionCollectionValueFormProperties>({
			properties: new FormControl<any | null | undefined>(undefined),
		});

	}


	/** Hybrid Connection key contract. This has the send key name and value for a Hybrid Connection. */
	export interface HybridConnectionKey {

		/** HybridConnectionKey resource specific properties */
		properties?: any;
	}

	/** Hybrid Connection key contract. This has the send key name and value for a Hybrid Connection. */
	export interface HybridConnectionKeyFormProperties {

		/** HybridConnectionKey resource specific properties */
		properties: FormControl<any | null | undefined>,
	}
	export function CreateHybridConnectionKeyFormGroup() {
		return new FormGroup<HybridConnectionKeyFormProperties>({
			properties: new FormControl<any | null | undefined>(undefined),
		});

	}


	/** Hybrid Connection limits contract. This is used to return the plan limits of Hybrid Connections. */
	export interface HybridConnectionLimits {

		/** HybridConnectionLimits resource specific properties */
		properties?: any;
	}

	/** Hybrid Connection limits contract. This is used to return the plan limits of Hybrid Connections. */
	export interface HybridConnectionLimitsFormProperties {

		/** HybridConnectionLimits resource specific properties */
		properties: FormControl<any | null | undefined>,
	}
	export function CreateHybridConnectionLimitsFormGroup() {
		return new FormGroup<HybridConnectionLimitsFormProperties>({
			properties: new FormControl<any | null | undefined>(undefined),
		});

	}


	/** Collection of resources. */
	export interface ResourceCollection {

		/** Link to next page of resources. */
		nextLink?: string | null;

		/**
		 * Collection of resources.
		 * Required
		 */
		value: Array<string>;
	}

	/** Collection of resources. */
	export interface ResourceCollectionFormProperties {

		/** Link to next page of resources. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateResourceCollectionFormGroup() {
		return new FormGroup<ResourceCollectionFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Get all App Service plans for a subscription.
		 * Description for Get all App Service plans for a subscription.
		 * Get subscriptions/{subscriptionId}/providers/Microsoft.Web/serverfarms
		 * @param {boolean} detailed Specify <code>true</code> to return all App Service plan properties. The default is <code>false</code>, which returns a subset of the properties.
		 *  Retrieval of all properties may increase the API latency.
		 * @param {string} subscriptionId Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
		 * @param {string} api_version API Version
		 * @return {AppServicePlans_ListReturn} OK
		 */
		AppServicePlans_List(detailed: boolean | null | undefined, subscriptionId: string, api_version: string): Observable<AppServicePlans_ListReturn> {
			return this.http.get<AppServicePlans_ListReturn>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/providers/Microsoft.Web/serverfarms?detailed=' + detailed + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Get all App Service plans in a resource group.
		 * Description for Get all App Service plans in a resource group.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/serverfarms
		 * @param {string} resourceGroupName Name of the resource group to which the resource belongs.
		 * @param {string} subscriptionId Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
		 * @param {string} api_version API Version
		 * @return {AppServicePlans_ListByResourceGroupReturn} OK
		 */
		AppServicePlans_ListByResourceGroup(resourceGroupName: string, subscriptionId: string, api_version: string): Observable<AppServicePlans_ListByResourceGroupReturn> {
			return this.http.get<AppServicePlans_ListByResourceGroupReturn>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Web/serverfarms&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Get an App Service plan.
		 * Description for Get an App Service plan.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/serverfarms/{name}
		 * @param {string} resourceGroupName Name of the resource group to which the resource belongs.
		 * @param {string} name Name of the App Service plan.
		 * @param {string} subscriptionId Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
		 * @param {string} api_version API Version
		 * @return {AppServicePlans_GetReturn} OK.
		 */
		AppServicePlans_Get(resourceGroupName: string, name: string, subscriptionId: string, api_version: string): Observable<AppServicePlans_GetReturn> {
			return this.http.get<AppServicePlans_GetReturn>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Web/serverfarms/' + (name == null ? '' : encodeURIComponent(name)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Creates or updates an App Service Plan.
		 * Description for Creates or updates an App Service Plan.
		 * Put subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/serverfarms/{name}
		 * @param {string} resourceGroupName Name of the resource group to which the resource belongs.
		 * @param {string} name Name of the App Service plan.
		 * @param {string} subscriptionId Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
		 * @param {string} api_version API Version
		 * @param {AppServicePlans_CreateOrUpdatePutBody} requestBody Details of the App Service plan.
		 * @return {AppServicePlans_CreateOrUpdateReturn} OK.
		 */
		AppServicePlans_CreateOrUpdate(resourceGroupName: string, name: string, subscriptionId: string, api_version: string, requestBody: AppServicePlans_CreateOrUpdatePutBody): Observable<AppServicePlans_CreateOrUpdateReturn> {
			return this.http.put<AppServicePlans_CreateOrUpdateReturn>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Web/serverfarms/' + (name == null ? '' : encodeURIComponent(name)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Delete an App Service plan.
		 * Description for Delete an App Service plan.
		 * Delete subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/serverfarms/{name}
		 * @param {string} resourceGroupName Name of the resource group to which the resource belongs.
		 * @param {string} name Name of the App Service plan.
		 * @param {string} subscriptionId Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
		 * @param {string} api_version API Version
		 * @return {void} OK.
		 */
		AppServicePlans_Delete(resourceGroupName: string, name: string, subscriptionId: string, api_version: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Web/serverfarms/' + (name == null ? '' : encodeURIComponent(name)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Creates or updates an App Service Plan.
		 * Description for Creates or updates an App Service Plan.
		 * Patch subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/serverfarms/{name}
		 * @param {string} resourceGroupName Name of the resource group to which the resource belongs.
		 * @param {string} name Name of the App Service plan.
		 * @param {string} subscriptionId Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
		 * @param {string} api_version API Version
		 * @param {AppServicePlanPatchResource} requestBody Details of the App Service plan.
		 * @return {AppServicePlans_UpdateReturn} OK.
		 */
		AppServicePlans_Update(resourceGroupName: string, name: string, subscriptionId: string, api_version: string, requestBody: AppServicePlanPatchResource): Observable<AppServicePlans_UpdateReturn> {
			return this.http.patch<AppServicePlans_UpdateReturn>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Web/serverfarms/' + (name == null ? '' : encodeURIComponent(name)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * List all capabilities of an App Service plan.
		 * Description for List all capabilities of an App Service plan.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/serverfarms/{name}/capabilities
		 * @param {string} resourceGroupName Name of the resource group to which the resource belongs.
		 * @param {string} name Name of the App Service plan.
		 * @param {string} subscriptionId Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
		 * @param {string} api_version API Version
		 * @return {Array<AppServicePlans_ListCapabilitiesReturn>} OK
		 */
		AppServicePlans_ListCapabilities(resourceGroupName: string, name: string, subscriptionId: string, api_version: string): Observable<Array<AppServicePlans_ListCapabilitiesReturn>> {
			return this.http.get<Array<AppServicePlans_ListCapabilitiesReturn>>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Web/serverfarms/' + (name == null ? '' : encodeURIComponent(name)) + '/capabilities&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Retrieve a Hybrid Connection in use in an App Service plan.
		 * Description for Retrieve a Hybrid Connection in use in an App Service plan.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/serverfarms/{name}/hybridConnectionNamespaces/{namespaceName}/relays/{relayName}
		 * @param {string} resourceGroupName Name of the resource group to which the resource belongs.
		 * @param {string} name Name of the App Service plan.
		 * @param {string} namespaceName Name of the Service Bus namespace.
		 * @param {string} relayName Name of the Service Bus relay.
		 * @param {string} subscriptionId Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
		 * @param {string} api_version API Version
		 * @return {AppServicePlans_GetHybridConnectionReturn} OK
		 */
		AppServicePlans_GetHybridConnection(resourceGroupName: string, name: string, namespaceName: string, relayName: string, subscriptionId: string, api_version: string): Observable<AppServicePlans_GetHybridConnectionReturn> {
			return this.http.get<AppServicePlans_GetHybridConnectionReturn>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Web/serverfarms/' + (name == null ? '' : encodeURIComponent(name)) + '/hybridConnectionNamespaces/' + (namespaceName == null ? '' : encodeURIComponent(namespaceName)) + '/relays/' + (relayName == null ? '' : encodeURIComponent(relayName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Delete a Hybrid Connection in use in an App Service plan.
		 * Description for Delete a Hybrid Connection in use in an App Service plan.
		 * Delete subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/serverfarms/{name}/hybridConnectionNamespaces/{namespaceName}/relays/{relayName}
		 * @param {string} resourceGroupName Name of the resource group to which the resource belongs.
		 * @param {string} name Name of the App Service plan.
		 * @param {string} namespaceName Name of the Service Bus namespace.
		 * @param {string} relayName Name of the Service Bus relay.
		 * @param {string} subscriptionId Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
		 * @param {string} api_version API Version
		 * @return {void} Successfully deleted hybrid connection
		 */
		AppServicePlans_DeleteHybridConnection(resourceGroupName: string, name: string, namespaceName: string, relayName: string, subscriptionId: string, api_version: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Web/serverfarms/' + (name == null ? '' : encodeURIComponent(name)) + '/hybridConnectionNamespaces/' + (namespaceName == null ? '' : encodeURIComponent(namespaceName)) + '/relays/' + (relayName == null ? '' : encodeURIComponent(relayName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get the send key name and value of a Hybrid Connection.
		 * Description for Get the send key name and value of a Hybrid Connection.
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/serverfarms/{name}/hybridConnectionNamespaces/{namespaceName}/relays/{relayName}/listKeys
		 * @param {string} resourceGroupName Name of the resource group to which the resource belongs.
		 * @param {string} name Name of the App Service plan.
		 * @param {string} namespaceName The name of the Service Bus namespace.
		 * @param {string} relayName The name of the Service Bus relay.
		 * @param {string} subscriptionId Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
		 * @param {string} api_version API Version
		 * @return {HybridConnectionKey} OK
		 */
		AppServicePlans_ListHybridConnectionKeys(resourceGroupName: string, name: string, namespaceName: string, relayName: string, subscriptionId: string, api_version: string): Observable<HybridConnectionKey> {
			return this.http.post<HybridConnectionKey>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Web/serverfarms/' + (name == null ? '' : encodeURIComponent(name)) + '/hybridConnectionNamespaces/' + (namespaceName == null ? '' : encodeURIComponent(namespaceName)) + '/relays/' + (relayName == null ? '' : encodeURIComponent(relayName)) + '/listKeys&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), null, {});
		}

		/**
		 * Get all apps that use a Hybrid Connection in an App Service Plan.
		 * Description for Get all apps that use a Hybrid Connection in an App Service Plan.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/serverfarms/{name}/hybridConnectionNamespaces/{namespaceName}/relays/{relayName}/sites
		 * @param {string} resourceGroupName Name of the resource group to which the resource belongs.
		 * @param {string} name Name of the App Service plan.
		 * @param {string} namespaceName Name of the Hybrid Connection namespace.
		 * @param {string} relayName Name of the Hybrid Connection relay.
		 * @param {string} subscriptionId Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
		 * @param {string} api_version API Version
		 * @return {ResourceCollection} OK
		 */
		AppServicePlans_ListWebAppsByHybridConnection(resourceGroupName: string, name: string, namespaceName: string, relayName: string, subscriptionId: string, api_version: string): Observable<ResourceCollection> {
			return this.http.get<ResourceCollection>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Web/serverfarms/' + (name == null ? '' : encodeURIComponent(name)) + '/hybridConnectionNamespaces/' + (namespaceName == null ? '' : encodeURIComponent(namespaceName)) + '/relays/' + (relayName == null ? '' : encodeURIComponent(relayName)) + '/sites&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Get the maximum number of Hybrid Connections allowed in an App Service plan.
		 * Description for Get the maximum number of Hybrid Connections allowed in an App Service plan.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/serverfarms/{name}/hybridConnectionPlanLimits/limit
		 * @param {string} resourceGroupName Name of the resource group to which the resource belongs.
		 * @param {string} name Name of the App Service plan.
		 * @param {string} subscriptionId Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
		 * @param {string} api_version API Version
		 * @return {HybridConnectionLimits} OK
		 */
		AppServicePlans_GetHybridConnectionPlanLimit(resourceGroupName: string, name: string, subscriptionId: string, api_version: string): Observable<HybridConnectionLimits> {
			return this.http.get<HybridConnectionLimits>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Web/serverfarms/' + (name == null ? '' : encodeURIComponent(name)) + '/hybridConnectionPlanLimits/limit&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Retrieve all Hybrid Connections in use in an App Service plan.
		 * Description for Retrieve all Hybrid Connections in use in an App Service plan.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/serverfarms/{name}/hybridConnectionRelays
		 * @param {string} resourceGroupName Name of the resource group to which the resource belongs.
		 * @param {string} name Name of the App Service plan.
		 * @param {string} subscriptionId Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
		 * @param {string} api_version API Version
		 * @return {HybridConnectionCollection} OK
		 */
		AppServicePlans_ListHybridConnections(resourceGroupName: string, name: string, subscriptionId: string, api_version: string): Observable<HybridConnectionCollection> {
			return this.http.get<HybridConnectionCollection>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Web/serverfarms/' + (name == null ? '' : encodeURIComponent(name)) + '/hybridConnectionRelays&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Restart all apps in an App Service plan.
		 * Description for Restart all apps in an App Service plan.
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/serverfarms/{name}/restartSites
		 * @param {string} resourceGroupName Name of the resource group to which the resource belongs.
		 * @param {string} name Name of the App Service plan.
		 * @param {boolean} softRestart Specify <code>true</code> to perform a soft restart, applies the configuration settings and restarts the apps if necessary. The default is <code>false</code>, which always restarts and reprovisions the apps
		 * @param {string} subscriptionId Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
		 * @param {string} api_version API Version
		 * @return {void} 
		 */
		AppServicePlans_RestartWebApps(resourceGroupName: string, name: string, softRestart: boolean | null | undefined, subscriptionId: string, api_version: string): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Web/serverfarms/' + (name == null ? '' : encodeURIComponent(name)) + '/restartSites&softRestart=' + softRestart + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get all apps associated with an App Service plan.
		 * Description for Get all apps associated with an App Service plan.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/serverfarms/{name}/sites
		 * @param {string} resourceGroupName Name of the resource group to which the resource belongs.
		 * @param {string} name Name of the App Service plan.
		 * @param {string} skipToken Skip to a web app in the list of webapps associated with app service plan. If specified, the resulting list will contain web apps starting from (including) the skipToken. Otherwise, the resulting list contains web apps from the start of the list
		 * @param {string} filter Supported filter: $filter=state eq running. Returns only web apps that are currently running
		 * @param {string} top List page size. If specified, results are paged.
		 * @param {string} subscriptionId Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
		 * @param {string} api_version API Version
		 * @return {AppServicePlans_ListWebAppsReturn} OK
		 */
		AppServicePlans_ListWebApps(resourceGroupName: string, name: string, skipToken: string | null | undefined, filter: string | null | undefined, top: string | null | undefined, subscriptionId: string, api_version: string): Observable<AppServicePlans_ListWebAppsReturn> {
			return this.http.get<AppServicePlans_ListWebAppsReturn>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Web/serverfarms/' + (name == null ? '' : encodeURIComponent(name)) + '/sites&skipToken=' + (skipToken == null ? '' : encodeURIComponent(skipToken)) + '&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&top=' + (top == null ? '' : encodeURIComponent(top)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Gets all selectable SKUs for a given App Service Plan
		 * Description for Gets all selectable SKUs for a given App Service Plan
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/serverfarms/{name}/skus
		 * @param {string} resourceGroupName Name of the resource group to which the resource belongs.
		 * @param {string} name Name of App Service Plan
		 * @param {string} subscriptionId Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
		 * @param {string} api_version API Version
		 * @return {string} OK
		 */
		AppServicePlans_GetServerFarmSkus(resourceGroupName: string, name: string, subscriptionId: string, api_version: string): Observable<string> {
			return this.http.get(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Web/serverfarms/' + (name == null ? '' : encodeURIComponent(name)) + '/skus&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { responseType: 'text' });
		}

		/**
		 * Gets server farm usage information
		 * Description for Gets server farm usage information
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/serverfarms/{name}/usages
		 * @param {string} resourceGroupName Name of the resource group to which the resource belongs.
		 * @param {string} name Name of App Service Plan
		 * @param {string} filter Return only usages/metrics specified in the filter. Filter conforms to odata syntax. Example: $filter=(name.value eq 'Metric1' or name.value eq 'Metric2').
		 * @param {string} subscriptionId Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
		 * @param {string} api_version API Version
		 * @return {AppServicePlans_ListUsagesReturn} OK
		 */
		AppServicePlans_ListUsages(resourceGroupName: string, name: string, filter: string | null | undefined, subscriptionId: string, api_version: string): Observable<AppServicePlans_ListUsagesReturn> {
			return this.http.get<AppServicePlans_ListUsagesReturn>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Web/serverfarms/' + (name == null ? '' : encodeURIComponent(name)) + '/usages&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Get all Virtual Networks associated with an App Service plan.
		 * Description for Get all Virtual Networks associated with an App Service plan.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/serverfarms/{name}/virtualNetworkConnections
		 * @param {string} resourceGroupName Name of the resource group to which the resource belongs.
		 * @param {string} name Name of the App Service plan.
		 * @param {string} subscriptionId Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
		 * @param {string} api_version API Version
		 * @return {Array<AppServicePlans_ListVnetsReturn>} OK
		 */
		AppServicePlans_ListVnets(resourceGroupName: string, name: string, subscriptionId: string, api_version: string): Observable<Array<AppServicePlans_ListVnetsReturn>> {
			return this.http.get<Array<AppServicePlans_ListVnetsReturn>>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Web/serverfarms/' + (name == null ? '' : encodeURIComponent(name)) + '/virtualNetworkConnections&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Get a Virtual Network associated with an App Service plan.
		 * Description for Get a Virtual Network associated with an App Service plan.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/serverfarms/{name}/virtualNetworkConnections/{vnetName}
		 * @param {string} resourceGroupName Name of the resource group to which the resource belongs.
		 * @param {string} name Name of the App Service plan.
		 * @param {string} vnetName Name of the Virtual Network.
		 * @param {string} subscriptionId Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
		 * @param {string} api_version API Version
		 * @return {AppServicePlans_GetVnetFromServerFarmReturn} OK.
		 */
		AppServicePlans_GetVnetFromServerFarm(resourceGroupName: string, name: string, vnetName: string, subscriptionId: string, api_version: string): Observable<AppServicePlans_GetVnetFromServerFarmReturn> {
			return this.http.get<AppServicePlans_GetVnetFromServerFarmReturn>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Web/serverfarms/' + (name == null ? '' : encodeURIComponent(name)) + '/virtualNetworkConnections/' + (vnetName == null ? '' : encodeURIComponent(vnetName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Get a Virtual Network gateway.
		 * Description for Get a Virtual Network gateway.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/serverfarms/{name}/virtualNetworkConnections/{vnetName}/gateways/{gatewayName}
		 * @param {string} resourceGroupName Name of the resource group to which the resource belongs.
		 * @param {string} name Name of the App Service plan.
		 * @param {string} vnetName Name of the Virtual Network.
		 * @param {string} gatewayName Name of the gateway. Only the 'primary' gateway is supported.
		 * @param {string} subscriptionId Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
		 * @param {string} api_version API Version
		 * @return {AppServicePlans_GetVnetGatewayReturn} OK
		 */
		AppServicePlans_GetVnetGateway(resourceGroupName: string, name: string, vnetName: string, gatewayName: string, subscriptionId: string, api_version: string): Observable<AppServicePlans_GetVnetGatewayReturn> {
			return this.http.get<AppServicePlans_GetVnetGatewayReturn>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Web/serverfarms/' + (name == null ? '' : encodeURIComponent(name)) + '/virtualNetworkConnections/' + (vnetName == null ? '' : encodeURIComponent(vnetName)) + '/gateways/' + (gatewayName == null ? '' : encodeURIComponent(gatewayName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Update a Virtual Network gateway.
		 * Description for Update a Virtual Network gateway.
		 * Put subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/serverfarms/{name}/virtualNetworkConnections/{vnetName}/gateways/{gatewayName}
		 * @param {string} resourceGroupName Name of the resource group to which the resource belongs.
		 * @param {string} name Name of the App Service plan.
		 * @param {string} vnetName Name of the Virtual Network.
		 * @param {string} gatewayName Name of the gateway. Only the 'primary' gateway is supported.
		 * @param {string} subscriptionId Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
		 * @param {string} api_version API Version
		 * @param {AppServicePlans_UpdateVnetGatewayPutBody} requestBody Definition of the gateway.
		 * @return {AppServicePlans_UpdateVnetGatewayReturn} OK
		 */
		AppServicePlans_UpdateVnetGateway(resourceGroupName: string, name: string, vnetName: string, gatewayName: string, subscriptionId: string, api_version: string, requestBody: AppServicePlans_UpdateVnetGatewayPutBody): Observable<AppServicePlans_UpdateVnetGatewayReturn> {
			return this.http.put<AppServicePlans_UpdateVnetGatewayReturn>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Web/serverfarms/' + (name == null ? '' : encodeURIComponent(name)) + '/virtualNetworkConnections/' + (vnetName == null ? '' : encodeURIComponent(vnetName)) + '/gateways/' + (gatewayName == null ? '' : encodeURIComponent(gatewayName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Get all routes that are associated with a Virtual Network in an App Service plan.
		 * Description for Get all routes that are associated with a Virtual Network in an App Service plan.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/serverfarms/{name}/virtualNetworkConnections/{vnetName}/routes
		 * @param {string} resourceGroupName Name of the resource group to which the resource belongs.
		 * @param {string} name Name of the App Service plan.
		 * @param {string} vnetName Name of the Virtual Network.
		 * @param {string} subscriptionId Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
		 * @param {string} api_version API Version
		 * @return {Array<AppServicePlans_ListRoutesForVnetReturn>} OK
		 */
		AppServicePlans_ListRoutesForVnet(resourceGroupName: string, name: string, vnetName: string, subscriptionId: string, api_version: string): Observable<Array<AppServicePlans_ListRoutesForVnetReturn>> {
			return this.http.get<Array<AppServicePlans_ListRoutesForVnetReturn>>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Web/serverfarms/' + (name == null ? '' : encodeURIComponent(name)) + '/virtualNetworkConnections/' + (vnetName == null ? '' : encodeURIComponent(vnetName)) + '/routes&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Get a Virtual Network route in an App Service plan.
		 * Description for Get a Virtual Network route in an App Service plan.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/serverfarms/{name}/virtualNetworkConnections/{vnetName}/routes/{routeName}
		 * @param {string} resourceGroupName Name of the resource group to which the resource belongs.
		 * @param {string} name Name of the App Service plan.
		 * @param {string} vnetName Name of the Virtual Network.
		 * @param {string} routeName Name of the Virtual Network route.
		 * @param {string} subscriptionId Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
		 * @param {string} api_version API Version
		 * @return {Array<AppServicePlans_GetRouteForVnetReturn>} OK.
		 */
		AppServicePlans_GetRouteForVnet(resourceGroupName: string, name: string, vnetName: string, routeName: string, subscriptionId: string, api_version: string): Observable<Array<AppServicePlans_GetRouteForVnetReturn>> {
			return this.http.get<Array<AppServicePlans_GetRouteForVnetReturn>>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Web/serverfarms/' + (name == null ? '' : encodeURIComponent(name)) + '/virtualNetworkConnections/' + (vnetName == null ? '' : encodeURIComponent(vnetName)) + '/routes/' + (routeName == null ? '' : encodeURIComponent(routeName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Create or update a Virtual Network route in an App Service plan.
		 * Description for Create or update a Virtual Network route in an App Service plan.
		 * Put subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/serverfarms/{name}/virtualNetworkConnections/{vnetName}/routes/{routeName}
		 * @param {string} resourceGroupName Name of the resource group to which the resource belongs.
		 * @param {string} name Name of the App Service plan.
		 * @param {string} vnetName Name of the Virtual Network.
		 * @param {string} routeName Name of the Virtual Network route.
		 * @param {string} subscriptionId Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
		 * @param {string} api_version API Version
		 * @param {AppServicePlans_CreateOrUpdateVnetRoutePutBody} requestBody Definition of the Virtual Network route.
		 * @return {AppServicePlans_CreateOrUpdateVnetRouteReturn} OK.
		 */
		AppServicePlans_CreateOrUpdateVnetRoute(resourceGroupName: string, name: string, vnetName: string, routeName: string, subscriptionId: string, api_version: string, requestBody: AppServicePlans_CreateOrUpdateVnetRoutePutBody): Observable<AppServicePlans_CreateOrUpdateVnetRouteReturn> {
			return this.http.put<AppServicePlans_CreateOrUpdateVnetRouteReturn>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Web/serverfarms/' + (name == null ? '' : encodeURIComponent(name)) + '/virtualNetworkConnections/' + (vnetName == null ? '' : encodeURIComponent(vnetName)) + '/routes/' + (routeName == null ? '' : encodeURIComponent(routeName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Delete a Virtual Network route in an App Service plan.
		 * Description for Delete a Virtual Network route in an App Service plan.
		 * Delete subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/serverfarms/{name}/virtualNetworkConnections/{vnetName}/routes/{routeName}
		 * @param {string} resourceGroupName Name of the resource group to which the resource belongs.
		 * @param {string} name Name of the App Service plan.
		 * @param {string} vnetName Name of the Virtual Network.
		 * @param {string} routeName Name of the Virtual Network route.
		 * @param {string} subscriptionId Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
		 * @param {string} api_version API Version
		 * @return {void} Successfully deleted Virtual Network route.
		 */
		AppServicePlans_DeleteVnetRoute(resourceGroupName: string, name: string, vnetName: string, routeName: string, subscriptionId: string, api_version: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Web/serverfarms/' + (name == null ? '' : encodeURIComponent(name)) + '/virtualNetworkConnections/' + (vnetName == null ? '' : encodeURIComponent(vnetName)) + '/routes/' + (routeName == null ? '' : encodeURIComponent(routeName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Create or update a Virtual Network route in an App Service plan.
		 * Description for Create or update a Virtual Network route in an App Service plan.
		 * Patch subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/serverfarms/{name}/virtualNetworkConnections/{vnetName}/routes/{routeName}
		 * @param {string} resourceGroupName Name of the resource group to which the resource belongs.
		 * @param {string} name Name of the App Service plan.
		 * @param {string} vnetName Name of the Virtual Network.
		 * @param {string} routeName Name of the Virtual Network route.
		 * @param {string} subscriptionId Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
		 * @param {string} api_version API Version
		 * @param {AppServicePlans_UpdateVnetRoutePatchBody} requestBody Definition of the Virtual Network route.
		 * @return {AppServicePlans_UpdateVnetRouteReturn} OK.
		 */
		AppServicePlans_UpdateVnetRoute(resourceGroupName: string, name: string, vnetName: string, routeName: string, subscriptionId: string, api_version: string, requestBody: AppServicePlans_UpdateVnetRoutePatchBody): Observable<AppServicePlans_UpdateVnetRouteReturn> {
			return this.http.patch<AppServicePlans_UpdateVnetRouteReturn>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Web/serverfarms/' + (name == null ? '' : encodeURIComponent(name)) + '/virtualNetworkConnections/' + (vnetName == null ? '' : encodeURIComponent(vnetName)) + '/routes/' + (routeName == null ? '' : encodeURIComponent(routeName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Reboot a worker machine in an App Service plan.
		 * Description for Reboot a worker machine in an App Service plan.
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/serverfarms/{name}/workers/{workerName}/reboot
		 * @param {string} resourceGroupName Name of the resource group to which the resource belongs.
		 * @param {string} name Name of the App Service plan.
		 * @param {string} workerName Name of worker machine, which typically starts with RD.
		 * @param {string} subscriptionId Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
		 * @param {string} api_version API Version
		 * @return {void} 
		 */
		AppServicePlans_RebootWorker(resourceGroupName: string, name: string, workerName: string, subscriptionId: string, api_version: string): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Web/serverfarms/' + (name == null ? '' : encodeURIComponent(name)) + '/workers/' + (workerName == null ? '' : encodeURIComponent(workerName)) + '/reboot&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), null, { observe: 'response', responseType: 'text' });
		}
	}

	export interface AppServicePlans_ListReturn {

		/** Link to next page of resources. */
		nextLink?: string | null;

		/**
		 * Collection of resources.
		 * Required
		 */
		AppServicePlans_ListReturnValue: Array<AppServicePlans_ListReturnValue>;
	}
	export interface AppServicePlans_ListReturnFormProperties {

		/** Link to next page of resources. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateAppServicePlans_ListReturnFormGroup() {
		return new FormGroup<AppServicePlans_ListReturnFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface AppServicePlans_ListReturnValue {

		/** AppServicePlan resource specific properties */
		properties?: any;

		/** Description of a SKU for a scalable resource. */
		sku?: AppServicePlans_ListReturnValueSku;
	}
	export interface AppServicePlans_ListReturnValueFormProperties {

		/** AppServicePlan resource specific properties */
		properties: FormControl<any | null | undefined>,
	}
	export function CreateAppServicePlans_ListReturnValueFormGroup() {
		return new FormGroup<AppServicePlans_ListReturnValueFormProperties>({
			properties: new FormControl<any | null | undefined>(undefined),
		});

	}

	export interface AppServicePlans_ListReturnValueSku {

		/** Capabilities of the SKU, e.g., is traffic manager enabled? */
		AppServicePlans_ListReturnValueSkuCapabilities?: Array<AppServicePlans_ListReturnValueSkuCapabilities>;

		/** Current number of instances assigned to the resource. */
		capacity?: number | null;

		/** Family code of the resource SKU. */
		family?: string | null;

		/** Locations of the SKU. */
		locations?: Array<string>;

		/** Name of the resource SKU. */
		name?: string | null;

		/** Size specifier of the resource SKU. */
		size?: string | null;

		/** Description of the App Service plan scale options. */
		skuCapacity?: AppServicePlans_ListReturnValueSkuSkuCapacity;

		/** Service tier of the resource SKU. */
		tier?: string | null;
	}
	export interface AppServicePlans_ListReturnValueSkuFormProperties {

		/** Current number of instances assigned to the resource. */
		capacity: FormControl<number | null | undefined>,

		/** Family code of the resource SKU. */
		family: FormControl<string | null | undefined>,

		/** Name of the resource SKU. */
		name: FormControl<string | null | undefined>,

		/** Size specifier of the resource SKU. */
		size: FormControl<string | null | undefined>,

		/** Service tier of the resource SKU. */
		tier: FormControl<string | null | undefined>,
	}
	export function CreateAppServicePlans_ListReturnValueSkuFormGroup() {
		return new FormGroup<AppServicePlans_ListReturnValueSkuFormProperties>({
			capacity: new FormControl<number | null | undefined>(undefined),
			family: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			size: new FormControl<string | null | undefined>(undefined),
			tier: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface AppServicePlans_ListReturnValueSkuCapabilities {

		/** Name of the SKU capability. */
		name?: string | null;

		/** Reason of the SKU capability. */
		reason?: string | null;

		/** Value of the SKU capability. */
		value?: string | null;
	}
	export interface AppServicePlans_ListReturnValueSkuCapabilitiesFormProperties {

		/** Name of the SKU capability. */
		name: FormControl<string | null | undefined>,

		/** Reason of the SKU capability. */
		reason: FormControl<string | null | undefined>,

		/** Value of the SKU capability. */
		value: FormControl<string | null | undefined>,
	}
	export function CreateAppServicePlans_ListReturnValueSkuCapabilitiesFormGroup() {
		return new FormGroup<AppServicePlans_ListReturnValueSkuCapabilitiesFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			reason: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface AppServicePlans_ListReturnValueSkuSkuCapacity {

		/** Default number of workers for this App Service plan SKU. */
		default?: number | null;

		/** Maximum number of workers for this App Service plan SKU. */
		maximum?: number | null;

		/** Minimum number of workers for this App Service plan SKU. */
		minimum?: number | null;

		/** Available scale configurations for an App Service plan. */
		scaleType?: string | null;
	}
	export interface AppServicePlans_ListReturnValueSkuSkuCapacityFormProperties {

		/** Default number of workers for this App Service plan SKU. */
		default: FormControl<number | null | undefined>,

		/** Maximum number of workers for this App Service plan SKU. */
		maximum: FormControl<number | null | undefined>,

		/** Minimum number of workers for this App Service plan SKU. */
		minimum: FormControl<number | null | undefined>,

		/** Available scale configurations for an App Service plan. */
		scaleType: FormControl<string | null | undefined>,
	}
	export function CreateAppServicePlans_ListReturnValueSkuSkuCapacityFormGroup() {
		return new FormGroup<AppServicePlans_ListReturnValueSkuSkuCapacityFormProperties>({
			default: new FormControl<number | null | undefined>(undefined),
			maximum: new FormControl<number | null | undefined>(undefined),
			minimum: new FormControl<number | null | undefined>(undefined),
			scaleType: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface AppServicePlans_ListByResourceGroupReturn {

		/** Link to next page of resources. */
		nextLink?: string | null;

		/**
		 * Collection of resources.
		 * Required
		 */
		AppServicePlans_ListByResourceGroupReturnValue: Array<AppServicePlans_ListByResourceGroupReturnValue>;
	}
	export interface AppServicePlans_ListByResourceGroupReturnFormProperties {

		/** Link to next page of resources. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateAppServicePlans_ListByResourceGroupReturnFormGroup() {
		return new FormGroup<AppServicePlans_ListByResourceGroupReturnFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface AppServicePlans_ListByResourceGroupReturnValue {

		/** AppServicePlan resource specific properties */
		properties?: any;

		/** Description of a SKU for a scalable resource. */
		sku?: AppServicePlans_ListByResourceGroupReturnValueSku;
	}
	export interface AppServicePlans_ListByResourceGroupReturnValueFormProperties {

		/** AppServicePlan resource specific properties */
		properties: FormControl<any | null | undefined>,
	}
	export function CreateAppServicePlans_ListByResourceGroupReturnValueFormGroup() {
		return new FormGroup<AppServicePlans_ListByResourceGroupReturnValueFormProperties>({
			properties: new FormControl<any | null | undefined>(undefined),
		});

	}

	export interface AppServicePlans_ListByResourceGroupReturnValueSku {

		/** Capabilities of the SKU, e.g., is traffic manager enabled? */
		AppServicePlans_ListByResourceGroupReturnValueSkuCapabilities?: Array<AppServicePlans_ListByResourceGroupReturnValueSkuCapabilities>;

		/** Current number of instances assigned to the resource. */
		capacity?: number | null;

		/** Family code of the resource SKU. */
		family?: string | null;

		/** Locations of the SKU. */
		locations?: Array<string>;

		/** Name of the resource SKU. */
		name?: string | null;

		/** Size specifier of the resource SKU. */
		size?: string | null;

		/** Description of the App Service plan scale options. */
		skuCapacity?: AppServicePlans_ListByResourceGroupReturnValueSkuSkuCapacity;

		/** Service tier of the resource SKU. */
		tier?: string | null;
	}
	export interface AppServicePlans_ListByResourceGroupReturnValueSkuFormProperties {

		/** Current number of instances assigned to the resource. */
		capacity: FormControl<number | null | undefined>,

		/** Family code of the resource SKU. */
		family: FormControl<string | null | undefined>,

		/** Name of the resource SKU. */
		name: FormControl<string | null | undefined>,

		/** Size specifier of the resource SKU. */
		size: FormControl<string | null | undefined>,

		/** Service tier of the resource SKU. */
		tier: FormControl<string | null | undefined>,
	}
	export function CreateAppServicePlans_ListByResourceGroupReturnValueSkuFormGroup() {
		return new FormGroup<AppServicePlans_ListByResourceGroupReturnValueSkuFormProperties>({
			capacity: new FormControl<number | null | undefined>(undefined),
			family: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			size: new FormControl<string | null | undefined>(undefined),
			tier: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface AppServicePlans_ListByResourceGroupReturnValueSkuCapabilities {

		/** Name of the SKU capability. */
		name?: string | null;

		/** Reason of the SKU capability. */
		reason?: string | null;

		/** Value of the SKU capability. */
		value?: string | null;
	}
	export interface AppServicePlans_ListByResourceGroupReturnValueSkuCapabilitiesFormProperties {

		/** Name of the SKU capability. */
		name: FormControl<string | null | undefined>,

		/** Reason of the SKU capability. */
		reason: FormControl<string | null | undefined>,

		/** Value of the SKU capability. */
		value: FormControl<string | null | undefined>,
	}
	export function CreateAppServicePlans_ListByResourceGroupReturnValueSkuCapabilitiesFormGroup() {
		return new FormGroup<AppServicePlans_ListByResourceGroupReturnValueSkuCapabilitiesFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			reason: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface AppServicePlans_ListByResourceGroupReturnValueSkuSkuCapacity {

		/** Default number of workers for this App Service plan SKU. */
		default?: number | null;

		/** Maximum number of workers for this App Service plan SKU. */
		maximum?: number | null;

		/** Minimum number of workers for this App Service plan SKU. */
		minimum?: number | null;

		/** Available scale configurations for an App Service plan. */
		scaleType?: string | null;
	}
	export interface AppServicePlans_ListByResourceGroupReturnValueSkuSkuCapacityFormProperties {

		/** Default number of workers for this App Service plan SKU. */
		default: FormControl<number | null | undefined>,

		/** Maximum number of workers for this App Service plan SKU. */
		maximum: FormControl<number | null | undefined>,

		/** Minimum number of workers for this App Service plan SKU. */
		minimum: FormControl<number | null | undefined>,

		/** Available scale configurations for an App Service plan. */
		scaleType: FormControl<string | null | undefined>,
	}
	export function CreateAppServicePlans_ListByResourceGroupReturnValueSkuSkuCapacityFormGroup() {
		return new FormGroup<AppServicePlans_ListByResourceGroupReturnValueSkuSkuCapacityFormProperties>({
			default: new FormControl<number | null | undefined>(undefined),
			maximum: new FormControl<number | null | undefined>(undefined),
			minimum: new FormControl<number | null | undefined>(undefined),
			scaleType: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface AppServicePlans_GetReturn {

		/** AppServicePlan resource specific properties */
		properties?: any;

		/** Description of a SKU for a scalable resource. */
		sku?: AppServicePlans_GetReturnSku;
	}
	export interface AppServicePlans_GetReturnFormProperties {

		/** AppServicePlan resource specific properties */
		properties: FormControl<any | null | undefined>,
	}
	export function CreateAppServicePlans_GetReturnFormGroup() {
		return new FormGroup<AppServicePlans_GetReturnFormProperties>({
			properties: new FormControl<any | null | undefined>(undefined),
		});

	}

	export interface AppServicePlans_GetReturnSku {

		/** Capabilities of the SKU, e.g., is traffic manager enabled? */
		AppServicePlans_GetReturnSkuCapabilities?: Array<AppServicePlans_GetReturnSkuCapabilities>;

		/** Current number of instances assigned to the resource. */
		capacity?: number | null;

		/** Family code of the resource SKU. */
		family?: string | null;

		/** Locations of the SKU. */
		locations?: Array<string>;

		/** Name of the resource SKU. */
		name?: string | null;

		/** Size specifier of the resource SKU. */
		size?: string | null;

		/** Description of the App Service plan scale options. */
		skuCapacity?: AppServicePlans_GetReturnSkuSkuCapacity;

		/** Service tier of the resource SKU. */
		tier?: string | null;
	}
	export interface AppServicePlans_GetReturnSkuFormProperties {

		/** Current number of instances assigned to the resource. */
		capacity: FormControl<number | null | undefined>,

		/** Family code of the resource SKU. */
		family: FormControl<string | null | undefined>,

		/** Name of the resource SKU. */
		name: FormControl<string | null | undefined>,

		/** Size specifier of the resource SKU. */
		size: FormControl<string | null | undefined>,

		/** Service tier of the resource SKU. */
		tier: FormControl<string | null | undefined>,
	}
	export function CreateAppServicePlans_GetReturnSkuFormGroup() {
		return new FormGroup<AppServicePlans_GetReturnSkuFormProperties>({
			capacity: new FormControl<number | null | undefined>(undefined),
			family: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			size: new FormControl<string | null | undefined>(undefined),
			tier: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface AppServicePlans_GetReturnSkuCapabilities {

		/** Name of the SKU capability. */
		name?: string | null;

		/** Reason of the SKU capability. */
		reason?: string | null;

		/** Value of the SKU capability. */
		value?: string | null;
	}
	export interface AppServicePlans_GetReturnSkuCapabilitiesFormProperties {

		/** Name of the SKU capability. */
		name: FormControl<string | null | undefined>,

		/** Reason of the SKU capability. */
		reason: FormControl<string | null | undefined>,

		/** Value of the SKU capability. */
		value: FormControl<string | null | undefined>,
	}
	export function CreateAppServicePlans_GetReturnSkuCapabilitiesFormGroup() {
		return new FormGroup<AppServicePlans_GetReturnSkuCapabilitiesFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			reason: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface AppServicePlans_GetReturnSkuSkuCapacity {

		/** Default number of workers for this App Service plan SKU. */
		default?: number | null;

		/** Maximum number of workers for this App Service plan SKU. */
		maximum?: number | null;

		/** Minimum number of workers for this App Service plan SKU. */
		minimum?: number | null;

		/** Available scale configurations for an App Service plan. */
		scaleType?: string | null;
	}
	export interface AppServicePlans_GetReturnSkuSkuCapacityFormProperties {

		/** Default number of workers for this App Service plan SKU. */
		default: FormControl<number | null | undefined>,

		/** Maximum number of workers for this App Service plan SKU. */
		maximum: FormControl<number | null | undefined>,

		/** Minimum number of workers for this App Service plan SKU. */
		minimum: FormControl<number | null | undefined>,

		/** Available scale configurations for an App Service plan. */
		scaleType: FormControl<string | null | undefined>,
	}
	export function CreateAppServicePlans_GetReturnSkuSkuCapacityFormGroup() {
		return new FormGroup<AppServicePlans_GetReturnSkuSkuCapacityFormProperties>({
			default: new FormControl<number | null | undefined>(undefined),
			maximum: new FormControl<number | null | undefined>(undefined),
			minimum: new FormControl<number | null | undefined>(undefined),
			scaleType: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface AppServicePlans_CreateOrUpdatePutBody {

		/** AppServicePlan resource specific properties */
		properties?: any;

		/** Description of a SKU for a scalable resource. */
		sku?: AppServicePlans_CreateOrUpdatePutBodySku;
	}
	export interface AppServicePlans_CreateOrUpdatePutBodyFormProperties {

		/** AppServicePlan resource specific properties */
		properties: FormControl<any | null | undefined>,
	}
	export function CreateAppServicePlans_CreateOrUpdatePutBodyFormGroup() {
		return new FormGroup<AppServicePlans_CreateOrUpdatePutBodyFormProperties>({
			properties: new FormControl<any | null | undefined>(undefined),
		});

	}

	export interface AppServicePlans_CreateOrUpdatePutBodySku {

		/** Capabilities of the SKU, e.g., is traffic manager enabled? */
		AppServicePlans_CreateOrUpdatePutBodySkuCapabilities?: Array<AppServicePlans_CreateOrUpdatePutBodySkuCapabilities>;

		/** Current number of instances assigned to the resource. */
		capacity?: number | null;

		/** Family code of the resource SKU. */
		family?: string | null;

		/** Locations of the SKU. */
		locations?: Array<string>;

		/** Name of the resource SKU. */
		name?: string | null;

		/** Size specifier of the resource SKU. */
		size?: string | null;

		/** Description of the App Service plan scale options. */
		skuCapacity?: AppServicePlans_CreateOrUpdatePutBodySkuSkuCapacity;

		/** Service tier of the resource SKU. */
		tier?: string | null;
	}
	export interface AppServicePlans_CreateOrUpdatePutBodySkuFormProperties {

		/** Current number of instances assigned to the resource. */
		capacity: FormControl<number | null | undefined>,

		/** Family code of the resource SKU. */
		family: FormControl<string | null | undefined>,

		/** Name of the resource SKU. */
		name: FormControl<string | null | undefined>,

		/** Size specifier of the resource SKU. */
		size: FormControl<string | null | undefined>,

		/** Service tier of the resource SKU. */
		tier: FormControl<string | null | undefined>,
	}
	export function CreateAppServicePlans_CreateOrUpdatePutBodySkuFormGroup() {
		return new FormGroup<AppServicePlans_CreateOrUpdatePutBodySkuFormProperties>({
			capacity: new FormControl<number | null | undefined>(undefined),
			family: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			size: new FormControl<string | null | undefined>(undefined),
			tier: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface AppServicePlans_CreateOrUpdatePutBodySkuCapabilities {

		/** Name of the SKU capability. */
		name?: string | null;

		/** Reason of the SKU capability. */
		reason?: string | null;

		/** Value of the SKU capability. */
		value?: string | null;
	}
	export interface AppServicePlans_CreateOrUpdatePutBodySkuCapabilitiesFormProperties {

		/** Name of the SKU capability. */
		name: FormControl<string | null | undefined>,

		/** Reason of the SKU capability. */
		reason: FormControl<string | null | undefined>,

		/** Value of the SKU capability. */
		value: FormControl<string | null | undefined>,
	}
	export function CreateAppServicePlans_CreateOrUpdatePutBodySkuCapabilitiesFormGroup() {
		return new FormGroup<AppServicePlans_CreateOrUpdatePutBodySkuCapabilitiesFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			reason: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface AppServicePlans_CreateOrUpdatePutBodySkuSkuCapacity {

		/** Default number of workers for this App Service plan SKU. */
		default?: number | null;

		/** Maximum number of workers for this App Service plan SKU. */
		maximum?: number | null;

		/** Minimum number of workers for this App Service plan SKU. */
		minimum?: number | null;

		/** Available scale configurations for an App Service plan. */
		scaleType?: string | null;
	}
	export interface AppServicePlans_CreateOrUpdatePutBodySkuSkuCapacityFormProperties {

		/** Default number of workers for this App Service plan SKU. */
		default: FormControl<number | null | undefined>,

		/** Maximum number of workers for this App Service plan SKU. */
		maximum: FormControl<number | null | undefined>,

		/** Minimum number of workers for this App Service plan SKU. */
		minimum: FormControl<number | null | undefined>,

		/** Available scale configurations for an App Service plan. */
		scaleType: FormControl<string | null | undefined>,
	}
	export function CreateAppServicePlans_CreateOrUpdatePutBodySkuSkuCapacityFormGroup() {
		return new FormGroup<AppServicePlans_CreateOrUpdatePutBodySkuSkuCapacityFormProperties>({
			default: new FormControl<number | null | undefined>(undefined),
			maximum: new FormControl<number | null | undefined>(undefined),
			minimum: new FormControl<number | null | undefined>(undefined),
			scaleType: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface AppServicePlans_CreateOrUpdateReturn {

		/** AppServicePlan resource specific properties */
		properties?: any;

		/** Description of a SKU for a scalable resource. */
		sku?: AppServicePlans_CreateOrUpdateReturnSku;
	}
	export interface AppServicePlans_CreateOrUpdateReturnFormProperties {

		/** AppServicePlan resource specific properties */
		properties: FormControl<any | null | undefined>,
	}
	export function CreateAppServicePlans_CreateOrUpdateReturnFormGroup() {
		return new FormGroup<AppServicePlans_CreateOrUpdateReturnFormProperties>({
			properties: new FormControl<any | null | undefined>(undefined),
		});

	}

	export interface AppServicePlans_CreateOrUpdateReturnSku {

		/** Capabilities of the SKU, e.g., is traffic manager enabled? */
		AppServicePlans_CreateOrUpdateReturnSkuCapabilities?: Array<AppServicePlans_CreateOrUpdateReturnSkuCapabilities>;

		/** Current number of instances assigned to the resource. */
		capacity?: number | null;

		/** Family code of the resource SKU. */
		family?: string | null;

		/** Locations of the SKU. */
		locations?: Array<string>;

		/** Name of the resource SKU. */
		name?: string | null;

		/** Size specifier of the resource SKU. */
		size?: string | null;

		/** Description of the App Service plan scale options. */
		skuCapacity?: AppServicePlans_CreateOrUpdateReturnSkuSkuCapacity;

		/** Service tier of the resource SKU. */
		tier?: string | null;
	}
	export interface AppServicePlans_CreateOrUpdateReturnSkuFormProperties {

		/** Current number of instances assigned to the resource. */
		capacity: FormControl<number | null | undefined>,

		/** Family code of the resource SKU. */
		family: FormControl<string | null | undefined>,

		/** Name of the resource SKU. */
		name: FormControl<string | null | undefined>,

		/** Size specifier of the resource SKU. */
		size: FormControl<string | null | undefined>,

		/** Service tier of the resource SKU. */
		tier: FormControl<string | null | undefined>,
	}
	export function CreateAppServicePlans_CreateOrUpdateReturnSkuFormGroup() {
		return new FormGroup<AppServicePlans_CreateOrUpdateReturnSkuFormProperties>({
			capacity: new FormControl<number | null | undefined>(undefined),
			family: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			size: new FormControl<string | null | undefined>(undefined),
			tier: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface AppServicePlans_CreateOrUpdateReturnSkuCapabilities {

		/** Name of the SKU capability. */
		name?: string | null;

		/** Reason of the SKU capability. */
		reason?: string | null;

		/** Value of the SKU capability. */
		value?: string | null;
	}
	export interface AppServicePlans_CreateOrUpdateReturnSkuCapabilitiesFormProperties {

		/** Name of the SKU capability. */
		name: FormControl<string | null | undefined>,

		/** Reason of the SKU capability. */
		reason: FormControl<string | null | undefined>,

		/** Value of the SKU capability. */
		value: FormControl<string | null | undefined>,
	}
	export function CreateAppServicePlans_CreateOrUpdateReturnSkuCapabilitiesFormGroup() {
		return new FormGroup<AppServicePlans_CreateOrUpdateReturnSkuCapabilitiesFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			reason: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface AppServicePlans_CreateOrUpdateReturnSkuSkuCapacity {

		/** Default number of workers for this App Service plan SKU. */
		default?: number | null;

		/** Maximum number of workers for this App Service plan SKU. */
		maximum?: number | null;

		/** Minimum number of workers for this App Service plan SKU. */
		minimum?: number | null;

		/** Available scale configurations for an App Service plan. */
		scaleType?: string | null;
	}
	export interface AppServicePlans_CreateOrUpdateReturnSkuSkuCapacityFormProperties {

		/** Default number of workers for this App Service plan SKU. */
		default: FormControl<number | null | undefined>,

		/** Maximum number of workers for this App Service plan SKU. */
		maximum: FormControl<number | null | undefined>,

		/** Minimum number of workers for this App Service plan SKU. */
		minimum: FormControl<number | null | undefined>,

		/** Available scale configurations for an App Service plan. */
		scaleType: FormControl<string | null | undefined>,
	}
	export function CreateAppServicePlans_CreateOrUpdateReturnSkuSkuCapacityFormGroup() {
		return new FormGroup<AppServicePlans_CreateOrUpdateReturnSkuSkuCapacityFormProperties>({
			default: new FormControl<number | null | undefined>(undefined),
			maximum: new FormControl<number | null | undefined>(undefined),
			minimum: new FormControl<number | null | undefined>(undefined),
			scaleType: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface AppServicePlans_UpdateReturn {

		/** AppServicePlan resource specific properties */
		properties?: any;

		/** Description of a SKU for a scalable resource. */
		sku?: AppServicePlans_UpdateReturnSku;
	}
	export interface AppServicePlans_UpdateReturnFormProperties {

		/** AppServicePlan resource specific properties */
		properties: FormControl<any | null | undefined>,
	}
	export function CreateAppServicePlans_UpdateReturnFormGroup() {
		return new FormGroup<AppServicePlans_UpdateReturnFormProperties>({
			properties: new FormControl<any | null | undefined>(undefined),
		});

	}

	export interface AppServicePlans_UpdateReturnSku {

		/** Capabilities of the SKU, e.g., is traffic manager enabled? */
		AppServicePlans_UpdateReturnSkuCapabilities?: Array<AppServicePlans_UpdateReturnSkuCapabilities>;

		/** Current number of instances assigned to the resource. */
		capacity?: number | null;

		/** Family code of the resource SKU. */
		family?: string | null;

		/** Locations of the SKU. */
		locations?: Array<string>;

		/** Name of the resource SKU. */
		name?: string | null;

		/** Size specifier of the resource SKU. */
		size?: string | null;

		/** Description of the App Service plan scale options. */
		skuCapacity?: AppServicePlans_UpdateReturnSkuSkuCapacity;

		/** Service tier of the resource SKU. */
		tier?: string | null;
	}
	export interface AppServicePlans_UpdateReturnSkuFormProperties {

		/** Current number of instances assigned to the resource. */
		capacity: FormControl<number | null | undefined>,

		/** Family code of the resource SKU. */
		family: FormControl<string | null | undefined>,

		/** Name of the resource SKU. */
		name: FormControl<string | null | undefined>,

		/** Size specifier of the resource SKU. */
		size: FormControl<string | null | undefined>,

		/** Service tier of the resource SKU. */
		tier: FormControl<string | null | undefined>,
	}
	export function CreateAppServicePlans_UpdateReturnSkuFormGroup() {
		return new FormGroup<AppServicePlans_UpdateReturnSkuFormProperties>({
			capacity: new FormControl<number | null | undefined>(undefined),
			family: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			size: new FormControl<string | null | undefined>(undefined),
			tier: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface AppServicePlans_UpdateReturnSkuCapabilities {

		/** Name of the SKU capability. */
		name?: string | null;

		/** Reason of the SKU capability. */
		reason?: string | null;

		/** Value of the SKU capability. */
		value?: string | null;
	}
	export interface AppServicePlans_UpdateReturnSkuCapabilitiesFormProperties {

		/** Name of the SKU capability. */
		name: FormControl<string | null | undefined>,

		/** Reason of the SKU capability. */
		reason: FormControl<string | null | undefined>,

		/** Value of the SKU capability. */
		value: FormControl<string | null | undefined>,
	}
	export function CreateAppServicePlans_UpdateReturnSkuCapabilitiesFormGroup() {
		return new FormGroup<AppServicePlans_UpdateReturnSkuCapabilitiesFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			reason: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface AppServicePlans_UpdateReturnSkuSkuCapacity {

		/** Default number of workers for this App Service plan SKU. */
		default?: number | null;

		/** Maximum number of workers for this App Service plan SKU. */
		maximum?: number | null;

		/** Minimum number of workers for this App Service plan SKU. */
		minimum?: number | null;

		/** Available scale configurations for an App Service plan. */
		scaleType?: string | null;
	}
	export interface AppServicePlans_UpdateReturnSkuSkuCapacityFormProperties {

		/** Default number of workers for this App Service plan SKU. */
		default: FormControl<number | null | undefined>,

		/** Maximum number of workers for this App Service plan SKU. */
		maximum: FormControl<number | null | undefined>,

		/** Minimum number of workers for this App Service plan SKU. */
		minimum: FormControl<number | null | undefined>,

		/** Available scale configurations for an App Service plan. */
		scaleType: FormControl<string | null | undefined>,
	}
	export function CreateAppServicePlans_UpdateReturnSkuSkuCapacityFormGroup() {
		return new FormGroup<AppServicePlans_UpdateReturnSkuSkuCapacityFormProperties>({
			default: new FormControl<number | null | undefined>(undefined),
			maximum: new FormControl<number | null | undefined>(undefined),
			minimum: new FormControl<number | null | undefined>(undefined),
			scaleType: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface AppServicePlans_ListCapabilitiesReturn {

		/** Name of the SKU capability. */
		name?: string | null;

		/** Reason of the SKU capability. */
		reason?: string | null;

		/** Value of the SKU capability. */
		value?: string | null;
	}
	export interface AppServicePlans_ListCapabilitiesReturnFormProperties {

		/** Name of the SKU capability. */
		name: FormControl<string | null | undefined>,

		/** Reason of the SKU capability. */
		reason: FormControl<string | null | undefined>,

		/** Value of the SKU capability. */
		value: FormControl<string | null | undefined>,
	}
	export function CreateAppServicePlans_ListCapabilitiesReturnFormGroup() {
		return new FormGroup<AppServicePlans_ListCapabilitiesReturnFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			reason: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface AppServicePlans_GetHybridConnectionReturn {

		/** HybridConnection resource specific properties */
		properties?: any;
	}
	export interface AppServicePlans_GetHybridConnectionReturnFormProperties {

		/** HybridConnection resource specific properties */
		properties: FormControl<any | null | undefined>,
	}
	export function CreateAppServicePlans_GetHybridConnectionReturnFormGroup() {
		return new FormGroup<AppServicePlans_GetHybridConnectionReturnFormProperties>({
			properties: new FormControl<any | null | undefined>(undefined),
		});

	}

	export interface AppServicePlans_ListWebAppsReturn {

		/** Link to next page of resources. */
		nextLink?: string | null;

		/**
		 * Collection of resources.
		 * Required
		 */
		AppServicePlans_ListWebAppsReturnValue: Array<AppServicePlans_ListWebAppsReturnValue>;
	}
	export interface AppServicePlans_ListWebAppsReturnFormProperties {

		/** Link to next page of resources. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateAppServicePlans_ListWebAppsReturnFormGroup() {
		return new FormGroup<AppServicePlans_ListWebAppsReturnFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface AppServicePlans_ListWebAppsReturnValue {

		/** Managed service identity. */
		identity?: AppServicePlans_ListWebAppsReturnValueIdentity;

		/** Site resource specific properties */
		properties?: any;
	}
	export interface AppServicePlans_ListWebAppsReturnValueFormProperties {

		/** Site resource specific properties */
		properties: FormControl<any | null | undefined>,
	}
	export function CreateAppServicePlans_ListWebAppsReturnValueFormGroup() {
		return new FormGroup<AppServicePlans_ListWebAppsReturnValueFormProperties>({
			properties: new FormControl<any | null | undefined>(undefined),
		});

	}

	export interface AppServicePlans_ListWebAppsReturnValueIdentity {

		/** Principal Id of managed service identity. */
		principalId?: string | null;

		/** Tenant of managed service identity. */
		tenantId?: string | null;

		/** Type of managed service identity. */
		type?: AppServicePlans_ListWebAppsReturnValueIdentityType | null;

		/** The list of user assigned identities associated with the resource. The user identity dictionary key references will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName} */
		userAssignedIdentities?: {[id: string]: AppServicePlans_ListWebAppsReturnValueIdentityUserAssignedIdentities };
	}
	export interface AppServicePlans_ListWebAppsReturnValueIdentityFormProperties {

		/** Principal Id of managed service identity. */
		principalId: FormControl<string | null | undefined>,

		/** Tenant of managed service identity. */
		tenantId: FormControl<string | null | undefined>,

		/** Type of managed service identity. */
		type: FormControl<AppServicePlans_ListWebAppsReturnValueIdentityType | null | undefined>,

		/** The list of user assigned identities associated with the resource. The user identity dictionary key references will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName} */
		userAssignedIdentities: FormControl<{[id: string]: AppServicePlans_ListWebAppsReturnValueIdentityUserAssignedIdentities } | null | undefined>,
	}
	export function CreateAppServicePlans_ListWebAppsReturnValueIdentityFormGroup() {
		return new FormGroup<AppServicePlans_ListWebAppsReturnValueIdentityFormProperties>({
			principalId: new FormControl<string | null | undefined>(undefined),
			tenantId: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<AppServicePlans_ListWebAppsReturnValueIdentityType | null | undefined>(undefined),
			userAssignedIdentities: new FormControl<{[id: string]: AppServicePlans_ListWebAppsReturnValueIdentityUserAssignedIdentities } | null | undefined>(undefined),
		});

	}

	export enum AppServicePlans_ListWebAppsReturnValueIdentityType { None = 0, SystemAssigned = 1, UserAssigned = 2 }

	export interface AppServicePlans_ListWebAppsReturnValueIdentityUserAssignedIdentities {

		/** Client Id of user assigned identity */
		clientId?: string | null;

		/** Principal Id of user assigned identity */
		principalId?: string | null;
	}
	export interface AppServicePlans_ListWebAppsReturnValueIdentityUserAssignedIdentitiesFormProperties {

		/** Client Id of user assigned identity */
		clientId: FormControl<string | null | undefined>,

		/** Principal Id of user assigned identity */
		principalId: FormControl<string | null | undefined>,
	}
	export function CreateAppServicePlans_ListWebAppsReturnValueIdentityUserAssignedIdentitiesFormGroup() {
		return new FormGroup<AppServicePlans_ListWebAppsReturnValueIdentityUserAssignedIdentitiesFormProperties>({
			clientId: new FormControl<string | null | undefined>(undefined),
			principalId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface AppServicePlans_ListUsagesReturn {

		/** Link to next page of resources. */
		nextLink?: string | null;

		/**
		 * Collection of resources.
		 * Required
		 */
		AppServicePlans_ListUsagesReturnValue: Array<AppServicePlans_ListUsagesReturnValue>;
	}
	export interface AppServicePlans_ListUsagesReturnFormProperties {

		/** Link to next page of resources. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateAppServicePlans_ListUsagesReturnFormGroup() {
		return new FormGroup<AppServicePlans_ListUsagesReturnFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface AppServicePlans_ListUsagesReturnValue {

		/** The current value of the resource counter. */
		currentValue?: number | null;

		/** The resource limit. */
		limit?: number | null;

		/** Localizable string object containing the name and a localized value. */
		name?: AppServicePlans_ListUsagesReturnValueName;

		/** Next reset time for the resource counter. */
		nextResetTime?: Date | null;

		/** Units of measurement for the quota resource. */
		unit?: string | null;
	}
	export interface AppServicePlans_ListUsagesReturnValueFormProperties {

		/** The current value of the resource counter. */
		currentValue: FormControl<number | null | undefined>,

		/** The resource limit. */
		limit: FormControl<number | null | undefined>,

		/** Next reset time for the resource counter. */
		nextResetTime: FormControl<Date | null | undefined>,

		/** Units of measurement for the quota resource. */
		unit: FormControl<string | null | undefined>,
	}
	export function CreateAppServicePlans_ListUsagesReturnValueFormGroup() {
		return new FormGroup<AppServicePlans_ListUsagesReturnValueFormProperties>({
			currentValue: new FormControl<number | null | undefined>(undefined),
			limit: new FormControl<number | null | undefined>(undefined),
			nextResetTime: new FormControl<Date | null | undefined>(undefined),
			unit: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface AppServicePlans_ListUsagesReturnValueName {

		/** Localized name. */
		localizedValue?: string | null;

		/** Non-localized name. */
		value?: string | null;
	}
	export interface AppServicePlans_ListUsagesReturnValueNameFormProperties {

		/** Localized name. */
		localizedValue: FormControl<string | null | undefined>,

		/** Non-localized name. */
		value: FormControl<string | null | undefined>,
	}
	export function CreateAppServicePlans_ListUsagesReturnValueNameFormGroup() {
		return new FormGroup<AppServicePlans_ListUsagesReturnValueNameFormProperties>({
			localizedValue: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface AppServicePlans_ListVnetsReturn {

		/** VnetInfo resource specific properties */
		properties?: any;
	}
	export interface AppServicePlans_ListVnetsReturnFormProperties {

		/** VnetInfo resource specific properties */
		properties: FormControl<any | null | undefined>,
	}
	export function CreateAppServicePlans_ListVnetsReturnFormGroup() {
		return new FormGroup<AppServicePlans_ListVnetsReturnFormProperties>({
			properties: new FormControl<any | null | undefined>(undefined),
		});

	}

	export interface AppServicePlans_GetVnetFromServerFarmReturn {

		/** VnetInfo resource specific properties */
		properties?: any;
	}
	export interface AppServicePlans_GetVnetFromServerFarmReturnFormProperties {

		/** VnetInfo resource specific properties */
		properties: FormControl<any | null | undefined>,
	}
	export function CreateAppServicePlans_GetVnetFromServerFarmReturnFormGroup() {
		return new FormGroup<AppServicePlans_GetVnetFromServerFarmReturnFormProperties>({
			properties: new FormControl<any | null | undefined>(undefined),
		});

	}

	export interface AppServicePlans_GetVnetGatewayReturn {

		/** VnetGateway resource specific properties */
		properties?: any;
	}
	export interface AppServicePlans_GetVnetGatewayReturnFormProperties {

		/** VnetGateway resource specific properties */
		properties: FormControl<any | null | undefined>,
	}
	export function CreateAppServicePlans_GetVnetGatewayReturnFormGroup() {
		return new FormGroup<AppServicePlans_GetVnetGatewayReturnFormProperties>({
			properties: new FormControl<any | null | undefined>(undefined),
		});

	}

	export interface AppServicePlans_UpdateVnetGatewayPutBody {

		/** VnetGateway resource specific properties */
		properties?: any;
	}
	export interface AppServicePlans_UpdateVnetGatewayPutBodyFormProperties {

		/** VnetGateway resource specific properties */
		properties: FormControl<any | null | undefined>,
	}
	export function CreateAppServicePlans_UpdateVnetGatewayPutBodyFormGroup() {
		return new FormGroup<AppServicePlans_UpdateVnetGatewayPutBodyFormProperties>({
			properties: new FormControl<any | null | undefined>(undefined),
		});

	}

	export interface AppServicePlans_UpdateVnetGatewayReturn {

		/** VnetGateway resource specific properties */
		properties?: any;
	}
	export interface AppServicePlans_UpdateVnetGatewayReturnFormProperties {

		/** VnetGateway resource specific properties */
		properties: FormControl<any | null | undefined>,
	}
	export function CreateAppServicePlans_UpdateVnetGatewayReturnFormGroup() {
		return new FormGroup<AppServicePlans_UpdateVnetGatewayReturnFormProperties>({
			properties: new FormControl<any | null | undefined>(undefined),
		});

	}

	export interface AppServicePlans_ListRoutesForVnetReturn {

		/** VnetRoute resource specific properties */
		properties?: any;
	}
	export interface AppServicePlans_ListRoutesForVnetReturnFormProperties {

		/** VnetRoute resource specific properties */
		properties: FormControl<any | null | undefined>,
	}
	export function CreateAppServicePlans_ListRoutesForVnetReturnFormGroup() {
		return new FormGroup<AppServicePlans_ListRoutesForVnetReturnFormProperties>({
			properties: new FormControl<any | null | undefined>(undefined),
		});

	}

	export interface AppServicePlans_GetRouteForVnetReturn {

		/** VnetRoute resource specific properties */
		properties?: any;
	}
	export interface AppServicePlans_GetRouteForVnetReturnFormProperties {

		/** VnetRoute resource specific properties */
		properties: FormControl<any | null | undefined>,
	}
	export function CreateAppServicePlans_GetRouteForVnetReturnFormGroup() {
		return new FormGroup<AppServicePlans_GetRouteForVnetReturnFormProperties>({
			properties: new FormControl<any | null | undefined>(undefined),
		});

	}

	export interface AppServicePlans_CreateOrUpdateVnetRoutePutBody {

		/** VnetRoute resource specific properties */
		properties?: any;
	}
	export interface AppServicePlans_CreateOrUpdateVnetRoutePutBodyFormProperties {

		/** VnetRoute resource specific properties */
		properties: FormControl<any | null | undefined>,
	}
	export function CreateAppServicePlans_CreateOrUpdateVnetRoutePutBodyFormGroup() {
		return new FormGroup<AppServicePlans_CreateOrUpdateVnetRoutePutBodyFormProperties>({
			properties: new FormControl<any | null | undefined>(undefined),
		});

	}

	export interface AppServicePlans_CreateOrUpdateVnetRouteReturn {

		/** VnetRoute resource specific properties */
		properties?: any;
	}
	export interface AppServicePlans_CreateOrUpdateVnetRouteReturnFormProperties {

		/** VnetRoute resource specific properties */
		properties: FormControl<any | null | undefined>,
	}
	export function CreateAppServicePlans_CreateOrUpdateVnetRouteReturnFormGroup() {
		return new FormGroup<AppServicePlans_CreateOrUpdateVnetRouteReturnFormProperties>({
			properties: new FormControl<any | null | undefined>(undefined),
		});

	}

	export interface AppServicePlans_UpdateVnetRoutePatchBody {

		/** VnetRoute resource specific properties */
		properties?: any;
	}
	export interface AppServicePlans_UpdateVnetRoutePatchBodyFormProperties {

		/** VnetRoute resource specific properties */
		properties: FormControl<any | null | undefined>,
	}
	export function CreateAppServicePlans_UpdateVnetRoutePatchBodyFormGroup() {
		return new FormGroup<AppServicePlans_UpdateVnetRoutePatchBodyFormProperties>({
			properties: new FormControl<any | null | undefined>(undefined),
		});

	}

	export interface AppServicePlans_UpdateVnetRouteReturn {

		/** VnetRoute resource specific properties */
		properties?: any;
	}
	export interface AppServicePlans_UpdateVnetRouteReturnFormProperties {

		/** VnetRoute resource specific properties */
		properties: FormControl<any | null | undefined>,
	}
	export function CreateAppServicePlans_UpdateVnetRouteReturnFormGroup() {
		return new FormGroup<AppServicePlans_UpdateVnetRouteReturnFormProperties>({
			properties: new FormControl<any | null | undefined>(undefined),
		});

	}

}

