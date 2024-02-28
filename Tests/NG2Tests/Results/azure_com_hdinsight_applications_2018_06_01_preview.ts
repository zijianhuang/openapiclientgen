import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** The HDInsight cluster application */
	export interface Application {

		/** The ETag for the application */
		etag?: string | null;

		/** The HDInsight cluster application GET response. */
		properties?: ApplicationProperties;

		/** The tags for the application. */
		tags?: {[id: string]: string };
	}

	/** The HDInsight cluster application */
	export interface ApplicationFormProperties {

		/** The ETag for the application */
		etag: FormControl<string | null | undefined>,

		/** The tags for the application. */
		tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateApplicationFormGroup() {
		return new FormGroup<ApplicationFormProperties>({
			etag: new FormControl<string | null | undefined>(undefined),
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}


	/** The HDInsight cluster application GET response. */
	export interface ApplicationProperties {

		/** The application state. */
		applicationState?: string | null;

		/** The application type. */
		applicationType?: string | null;

		/** Describes the compute profile. */
		computeProfile?: any;

		/** The application create date time. */
		createdDate?: string | null;

		/** The list of errors. */
		ApplicationPropertiesErrors?: Array<ApplicationPropertiesErrors>;

		/** The list of application HTTPS endpoints. */
		httpsEndpoints?: Array<ApplicationGetHttpsEndpoint>;

		/** The list of install script actions. */
		ApplicationPropertiesInstallScriptActions?: Array<ApplicationPropertiesInstallScriptActions>;

		/** The marketplace identifier. */
		marketplaceIdentifier?: string | null;

		/** The provisioning state of the application. */
		provisioningState?: string | null;

		/** The list of application SSH endpoints. */
		sshEndpoints?: Array<ApplicationGetEndpoint>;

		/** The list of uninstall script actions. */
		ApplicationPropertiesUninstallScriptActions?: Array<ApplicationPropertiesUninstallScriptActions>;
	}

	/** The HDInsight cluster application GET response. */
	export interface ApplicationPropertiesFormProperties {

		/** The application state. */
		applicationState: FormControl<string | null | undefined>,

		/** The application type. */
		applicationType: FormControl<string | null | undefined>,

		/** Describes the compute profile. */
		computeProfile: FormControl<any | null | undefined>,

		/** The application create date time. */
		createdDate: FormControl<string | null | undefined>,

		/** The marketplace identifier. */
		marketplaceIdentifier: FormControl<string | null | undefined>,

		/** The provisioning state of the application. */
		provisioningState: FormControl<string | null | undefined>,
	}
	export function CreateApplicationPropertiesFormGroup() {
		return new FormGroup<ApplicationPropertiesFormProperties>({
			applicationState: new FormControl<string | null | undefined>(undefined),
			applicationType: new FormControl<string | null | undefined>(undefined),
			computeProfile: new FormControl<any | null | undefined>(undefined),
			createdDate: new FormControl<string | null | undefined>(undefined),
			marketplaceIdentifier: new FormControl<string | null | undefined>(undefined),
			provisioningState: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ApplicationPropertiesErrors {

		/** The error code. */
		code?: string | null;

		/** The error message. */
		message?: string | null;
	}
	export interface ApplicationPropertiesErrorsFormProperties {

		/** The error code. */
		code: FormControl<string | null | undefined>,

		/** The error message. */
		message: FormControl<string | null | undefined>,
	}
	export function CreateApplicationPropertiesErrorsFormGroup() {
		return new FormGroup<ApplicationPropertiesErrorsFormProperties>({
			code: new FormControl<string | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Gets the application HTTP endpoints. */
	export interface ApplicationGetHttpsEndpoint {

		/** The list of access modes for the application. */
		accessModes?: Array<string>;

		/**
		 * The destination port to connect to.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		destinationPort?: number | null;

		/** The value indicates whether to disable GatewayAuth. */
		disableGatewayAuth?: boolean | null;

		/** The location of the endpoint. */
		location?: string | null;

		/**
		 * The public port to connect to.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		publicPort?: number | null;

		/** The subdomain suffix of the application. */
		subDomainSuffix?: string | null;
	}

	/** Gets the application HTTP endpoints. */
	export interface ApplicationGetHttpsEndpointFormProperties {

		/**
		 * The destination port to connect to.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		destinationPort: FormControl<number | null | undefined>,

		/** The value indicates whether to disable GatewayAuth. */
		disableGatewayAuth: FormControl<boolean | null | undefined>,

		/** The location of the endpoint. */
		location: FormControl<string | null | undefined>,

		/**
		 * The public port to connect to.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		publicPort: FormControl<number | null | undefined>,

		/** The subdomain suffix of the application. */
		subDomainSuffix: FormControl<string | null | undefined>,
	}
	export function CreateApplicationGetHttpsEndpointFormGroup() {
		return new FormGroup<ApplicationGetHttpsEndpointFormProperties>({
			destinationPort: new FormControl<number | null | undefined>(undefined),
			disableGatewayAuth: new FormControl<boolean | null | undefined>(undefined),
			location: new FormControl<string | null | undefined>(undefined),
			publicPort: new FormControl<number | null | undefined>(undefined),
			subDomainSuffix: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ApplicationPropertiesInstallScriptActions {

		/** The application name of the script action, if any. */
		applicationName?: string | null;

		/**
		 * The name of the script action.
		 * Required
		 */
		name: string;

		/** The parameters for the script */
		parameters?: string | null;

		/**
		 * The list of roles where script will be executed.
		 * Required
		 */
		roles: Array<string>;

		/**
		 * The URI to the script.
		 * Required
		 */
		uri: string;
	}
	export interface ApplicationPropertiesInstallScriptActionsFormProperties {

		/** The application name of the script action, if any. */
		applicationName: FormControl<string | null | undefined>,

		/**
		 * The name of the script action.
		 * Required
		 */
		name: FormControl<string | null | undefined>,

		/** The parameters for the script */
		parameters: FormControl<string | null | undefined>,

		/**
		 * The URI to the script.
		 * Required
		 */
		uri: FormControl<string | null | undefined>,
	}
	export function CreateApplicationPropertiesInstallScriptActionsFormGroup() {
		return new FormGroup<ApplicationPropertiesInstallScriptActionsFormProperties>({
			applicationName: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			parameters: new FormControl<string | null | undefined>(undefined),
			uri: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Gets the application SSH endpoint */
	export interface ApplicationGetEndpoint {

		/**
		 * The destination port to connect to.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		destinationPort?: number | null;

		/** The location of the endpoint. */
		location?: string | null;

		/**
		 * The public port to connect to.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		publicPort?: number | null;
	}

	/** Gets the application SSH endpoint */
	export interface ApplicationGetEndpointFormProperties {

		/**
		 * The destination port to connect to.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		destinationPort: FormControl<number | null | undefined>,

		/** The location of the endpoint. */
		location: FormControl<string | null | undefined>,

		/**
		 * The public port to connect to.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		publicPort: FormControl<number | null | undefined>,
	}
	export function CreateApplicationGetEndpointFormGroup() {
		return new FormGroup<ApplicationGetEndpointFormProperties>({
			destinationPort: new FormControl<number | null | undefined>(undefined),
			location: new FormControl<string | null | undefined>(undefined),
			publicPort: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ApplicationPropertiesUninstallScriptActions {

		/** The application name of the script action, if any. */
		applicationName?: string | null;

		/**
		 * The name of the script action.
		 * Required
		 */
		name: string;

		/** The parameters for the script */
		parameters?: string | null;

		/**
		 * The list of roles where script will be executed.
		 * Required
		 */
		roles: Array<string>;

		/**
		 * The URI to the script.
		 * Required
		 */
		uri: string;
	}
	export interface ApplicationPropertiesUninstallScriptActionsFormProperties {

		/** The application name of the script action, if any. */
		applicationName: FormControl<string | null | undefined>,

		/**
		 * The name of the script action.
		 * Required
		 */
		name: FormControl<string | null | undefined>,

		/** The parameters for the script */
		parameters: FormControl<string | null | undefined>,

		/**
		 * The URI to the script.
		 * Required
		 */
		uri: FormControl<string | null | undefined>,
	}
	export function CreateApplicationPropertiesUninstallScriptActionsFormGroup() {
		return new FormGroup<ApplicationPropertiesUninstallScriptActionsFormProperties>({
			applicationName: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			parameters: new FormControl<string | null | undefined>(undefined),
			uri: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Result of the request to list cluster Applications. It contains a list of operations and a URL link to get the next set of results. */
	export interface ApplicationListResult {

		/** The URL to get the next set of operation list results if there are any. */
		nextLink?: string | null;

		/** The list of HDInsight applications installed on HDInsight cluster. */
		value?: Array<Application>;
	}

	/** Result of the request to list cluster Applications. It contains a list of operations and a URL link to get the next set of results. */
	export interface ApplicationListResultFormProperties {

		/** The URL to get the next set of operation list results if there are any. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateApplicationListResultFormGroup() {
		return new FormGroup<ApplicationListResultFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Lists all of the applications for the HDInsight cluster.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HDInsight/clusters/{clusterName}/applications
		 * @param {string} subscriptionId The subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} clusterName The name of the cluster.
		 * @param {string} api_version The HDInsight client API Version.
		 * @return {ApplicationListResult} OK. The request has succeeded.
		 */
		Applications_ListByCluster(subscriptionId: string, resourceGroupName: string, clusterName: string, api_version: string): Observable<ApplicationListResult> {
			return this.http.get<ApplicationListResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.HDInsight/clusters/' + (clusterName == null ? '' : encodeURIComponent(clusterName)) + '/applications&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Gets properties of the specified application.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HDInsight/clusters/{clusterName}/applications/{applicationName}
		 * @param {string} subscriptionId The subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} clusterName The name of the cluster.
		 * @param {string} applicationName The constant value for the application name.
		 * @param {string} api_version The HDInsight client API Version.
		 * @return {Application} OK. The request has succeeded.
		 */
		Applications_Get(subscriptionId: string, resourceGroupName: string, clusterName: string, applicationName: string, api_version: string): Observable<Application> {
			return this.http.get<Application>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.HDInsight/clusters/' + (clusterName == null ? '' : encodeURIComponent(clusterName)) + '/applications/' + (applicationName == null ? '' : encodeURIComponent(applicationName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Creates applications for the HDInsight cluster.
		 * Put subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HDInsight/clusters/{clusterName}/applications/{applicationName}
		 * @param {string} subscriptionId The subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} clusterName The name of the cluster.
		 * @param {string} applicationName The constant value for the application name.
		 * @param {string} api_version The HDInsight client API Version.
		 * @param {Application} requestBody The application create request.
		 * @return {Application} OK. The request has succeeded.
		 */
		Applications_Create(subscriptionId: string, resourceGroupName: string, clusterName: string, applicationName: string, api_version: string, requestBody: Application): Observable<Application> {
			return this.http.put<Application>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.HDInsight/clusters/' + (clusterName == null ? '' : encodeURIComponent(clusterName)) + '/applications/' + (applicationName == null ? '' : encodeURIComponent(applicationName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes the specified application on the HDInsight cluster.
		 * Delete subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HDInsight/clusters/{clusterName}/applications/{applicationName}
		 * @param {string} subscriptionId The subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} clusterName The name of the cluster.
		 * @param {string} applicationName The constant value for the application name.
		 * @param {string} api_version The HDInsight client API Version.
		 * @return {void} OK. The request has succeeded.
		 */
		Applications_Delete(subscriptionId: string, resourceGroupName: string, clusterName: string, applicationName: string, api_version: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.HDInsight/clusters/' + (clusterName == null ? '' : encodeURIComponent(clusterName)) + '/applications/' + (applicationName == null ? '' : encodeURIComponent(applicationName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { observe: 'response', responseType: 'text' });
		}
	}

}

