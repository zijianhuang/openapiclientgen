import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** The IoT Central application. */
	export interface App {

		/** The properties of an IoT Central application. */
		properties?: AppProperties;

		/**
		 * Information about the SKU of the IoT Central application.
		 * Required
		 */
		sku: AppSkuInfo;
	}

	/** The IoT Central application. */
	export interface AppFormProperties {
	}
	export function CreateAppFormGroup() {
		return new FormGroup<AppFormProperties>({
		});

	}


	/** The properties of an IoT Central application. */
	export interface AppProperties {

		/** The ID of the application. */
		applicationId?: string | null;

		/** The display name of the application. */
		displayName?: string | null;

		/** The subdomain of the application. */
		subdomain?: string | null;

		/** The ID of the application template, which is a blueprint that defines the characteristics and behaviors of an application. Optional; if not specified, defaults to a blank blueprint and allows the application to be defined from scratch. */
		template?: string | null;
	}

	/** The properties of an IoT Central application. */
	export interface AppPropertiesFormProperties {

		/** The ID of the application. */
		applicationId: FormControl<string | null | undefined>,

		/** The display name of the application. */
		displayName: FormControl<string | null | undefined>,

		/** The subdomain of the application. */
		subdomain: FormControl<string | null | undefined>,

		/** The ID of the application template, which is a blueprint that defines the characteristics and behaviors of an application. Optional; if not specified, defaults to a blank blueprint and allows the application to be defined from scratch. */
		template: FormControl<string | null | undefined>,
	}
	export function CreateAppPropertiesFormGroup() {
		return new FormGroup<AppPropertiesFormProperties>({
			applicationId: new FormControl<string | null | undefined>(undefined),
			displayName: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^.{1,200}$')]),
			subdomain: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^[a-z0-9-]{1,63}$')]),
			template: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Information about the SKU of the IoT Central application. */
	export interface AppSkuInfo {

		/**
		 * The name of the SKU.
		 * Required
		 */
		name: AppSkuInfoName;
	}

	/** Information about the SKU of the IoT Central application. */
	export interface AppSkuInfoFormProperties {

		/**
		 * The name of the SKU.
		 * Required
		 */
		name: FormControl<AppSkuInfoName | null | undefined>,
	}
	export function CreateAppSkuInfoFormGroup() {
		return new FormGroup<AppSkuInfoFormProperties>({
			name: new FormControl<AppSkuInfoName | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum AppSkuInfoName { F1 = 'F1', S1 = 'S1', ST0 = 'ST0', ST1 = 'ST1', ST2 = 'ST2' }


	/** The properties indicating whether a given IoT Central application name or subdomain is available. */
	export interface AppAvailabilityInfo {

		/** The detailed reason message. */
		message?: string | null;

		/** The value which indicates whether the provided name is available. */
		nameAvailable?: boolean | null;

		/** The reason for unavailability. */
		reason?: string | null;
	}

	/** The properties indicating whether a given IoT Central application name or subdomain is available. */
	export interface AppAvailabilityInfoFormProperties {

		/** The detailed reason message. */
		message: FormControl<string | null | undefined>,

		/** The value which indicates whether the provided name is available. */
		nameAvailable: FormControl<boolean | null | undefined>,

		/** The reason for unavailability. */
		reason: FormControl<string | null | undefined>,
	}
	export function CreateAppAvailabilityInfoFormGroup() {
		return new FormGroup<AppAvailabilityInfoFormProperties>({
			message: new FormControl<string | null | undefined>(undefined),
			nameAvailable: new FormControl<boolean | null | undefined>(undefined),
			reason: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A list of IoT Central Applications with a next link. */
	export interface AppListResult {

		/** The link used to get the next page of IoT Central Applications. */
		nextLink?: string | null;

		/** A list of IoT Central Applications. */
		value?: Array<App>;
	}

	/** A list of IoT Central Applications with a next link. */
	export interface AppListResultFormProperties {

		/** The link used to get the next page of IoT Central Applications. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateAppListResultFormGroup() {
		return new FormGroup<AppListResultFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The description of the IoT Central application. */
	export interface AppPatch {

		/** The properties of an IoT Central application. */
		properties?: AppProperties;

		/** Instance tags */
		tags?: {[id: string]: string };
	}

	/** The description of the IoT Central application. */
	export interface AppPatchFormProperties {

		/** Instance tags */
		tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateAppPatchFormGroup() {
		return new FormGroup<AppPatchFormProperties>({
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}


	/** IoT Central Application Template. */
	export interface AppTemplate {

		/** The name of the template. */
		appTemplateName?: string | null;

		/** The description of the template. */
		description?: string | null;

		/** The ID of the template. */
		manifestId?: string | null;

		/** The version of the template. */
		manifestVersion?: string | null;

		/** The order of the template in the templates list. */
		order?: number | null;

		/** The title of the template. */
		title?: string | null;
	}

	/** IoT Central Application Template. */
	export interface AppTemplateFormProperties {

		/** The name of the template. */
		appTemplateName: FormControl<string | null | undefined>,

		/** The description of the template. */
		description: FormControl<string | null | undefined>,

		/** The ID of the template. */
		manifestId: FormControl<string | null | undefined>,

		/** The version of the template. */
		manifestVersion: FormControl<string | null | undefined>,

		/** The order of the template in the templates list. */
		order: FormControl<number | null | undefined>,

		/** The title of the template. */
		title: FormControl<string | null | undefined>,
	}
	export function CreateAppTemplateFormGroup() {
		return new FormGroup<AppTemplateFormProperties>({
			appTemplateName: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			manifestId: new FormControl<string | null | undefined>(undefined),
			manifestVersion: new FormControl<string | null | undefined>(undefined),
			order: new FormControl<number | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A list of IoT Central Application Templates with a next link. */
	export interface AppTemplatesResult {

		/** The link used to get the next page of IoT Central application templates. */
		nextLink?: string | null;

		/** A list of IoT Central Application Templates. */
		value?: Array<AppTemplate>;
	}

	/** A list of IoT Central Application Templates with a next link. */
	export interface AppTemplatesResultFormProperties {

		/** The link used to get the next page of IoT Central application templates. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateAppTemplatesResultFormGroup() {
		return new FormGroup<AppTemplatesResultFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Error details. */
	export interface ErrorDetails {

		/** Details of error response. */
		error?: ErrorResponseBody;
	}

	/** Error details. */
	export interface ErrorDetailsFormProperties {
	}
	export function CreateErrorDetailsFormGroup() {
		return new FormGroup<ErrorDetailsFormProperties>({
		});

	}


	/** Details of error response. */
	export interface ErrorResponseBody {

		/** The error code. */
		code?: string | null;

		/** A list of additional details about the error. */
		details?: Array<ErrorResponseBody>;

		/** The error message. */
		message?: string | null;

		/** The target of the particular error. */
		target?: string | null;
	}

	/** Details of error response. */
	export interface ErrorResponseBodyFormProperties {

		/** The error code. */
		code: FormControl<string | null | undefined>,

		/** The error message. */
		message: FormControl<string | null | undefined>,

		/** The target of the particular error. */
		target: FormControl<string | null | undefined>,
	}
	export function CreateErrorResponseBodyFormGroup() {
		return new FormGroup<ErrorResponseBodyFormProperties>({
			code: new FormControl<string | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
			target: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** IoT Central REST API operation */
	export interface Operation {

		/** The object that represents the operation. */
		display?: OperationDisplay;

		/** Operation name: {provider}/{resource}/{read | write | action | delete} */
		name?: string | null;
	}

	/** IoT Central REST API operation */
	export interface OperationFormProperties {

		/** Operation name: {provider}/{resource}/{read | write | action | delete} */
		name: FormControl<string | null | undefined>,
	}
	export function CreateOperationFormGroup() {
		return new FormGroup<OperationFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The object that represents the operation. */
	export interface OperationDisplay {

		/** Friendly description for the operation, */
		description?: string | null;

		/** Name of the operation */
		operation?: string | null;

		/** Service provider: Microsoft IoT Central */
		provider?: string | null;

		/** Resource Type: IoT Central */
		resource?: string | null;
	}

	/** The object that represents the operation. */
	export interface OperationDisplayFormProperties {

		/** Friendly description for the operation, */
		description: FormControl<string | null | undefined>,

		/** Name of the operation */
		operation: FormControl<string | null | undefined>,

		/** Service provider: Microsoft IoT Central */
		provider: FormControl<string | null | undefined>,

		/** Resource Type: IoT Central */
		resource: FormControl<string | null | undefined>,
	}
	export function CreateOperationDisplayFormGroup() {
		return new FormGroup<OperationDisplayFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			operation: new FormControl<string | null | undefined>(undefined),
			provider: new FormControl<string | null | undefined>(undefined),
			resource: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Input values. */
	export interface OperationInputs {

		/**
		 * The name of the IoT Central application instance to check.
		 * Required
		 */
		name: string;

		/** The type of the IoT Central resource to query. */
		type?: string | null;
	}

	/** Input values. */
	export interface OperationInputsFormProperties {

		/**
		 * The name of the IoT Central application instance to check.
		 * Required
		 */
		name: FormControl<string | null | undefined>,

		/** The type of the IoT Central resource to query. */
		type: FormControl<string | null | undefined>,
	}
	export function CreateOperationInputsFormGroup() {
		return new FormGroup<OperationInputsFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^[a-z0-9-]{1,63}$')]),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A list of IoT Central operations. It contains a list of operations and a URL link to get the next set of results. */
	export interface OperationListResult {

		/** The link used to get the next page of IoT Central description objects. */
		nextLink?: string | null;

		/** A list of operations supported by the Microsoft.IoTCentral resource provider. */
		value?: Array<Operation>;
	}

	/** A list of IoT Central operations. It contains a list of operations and a URL link to get the next set of results. */
	export interface OperationListResultFormProperties {

		/** The link used to get the next page of IoT Central description objects. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateOperationListResultFormGroup() {
		return new FormGroup<OperationListResultFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The common properties of an ARM resource. */
	export interface Resource {

		/** The ARM resource identifier. */
		id?: string | null;

		/**
		 * The resource location.
		 * Required
		 */
		location: string;

		/** The ARM resource name. */
		name?: string | null;

		/** The resource tags. */
		tags?: {[id: string]: string };

		/** The resource type. */
		type?: string | null;
	}

	/** The common properties of an ARM resource. */
	export interface ResourceFormProperties {

		/** The ARM resource identifier. */
		id: FormControl<string | null | undefined>,

		/**
		 * The resource location.
		 * Required
		 */
		location: FormControl<string | null | undefined>,

		/** The ARM resource name. */
		name: FormControl<string | null | undefined>,

		/** The resource tags. */
		tags: FormControl<{[id: string]: string } | null | undefined>,

		/** The resource type. */
		type: FormControl<string | null | undefined>,
	}
	export function CreateResourceFormGroup() {
		return new FormGroup<ResourceFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			location: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^(?![0-9]+$)(?!-)[a-zA-Z0-9-]{2,99}[a-zA-Z0-9]$')]),
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Lists all of the available IoT Central application REST API operations.
		 * Get providers/Microsoft.IoTCentral/operations
		 * @param {string} api_version The version of the API.
		 * @return {OperationListResult} OK. The request has succeeded.
		 */
		Operations_List(api_version: string): Observable<OperationListResult> {
			return this.http.get<OperationListResult>(this.baseUri + 'providers/Microsoft.IoTCentral/operations?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Get all IoT Central Applications in a subscription.
		 * Get subscriptions/{subscriptionId}/providers/Microsoft.IoTCentral/IoTApps
		 * @param {string} api_version The version of the API.
		 * @param {string} subscriptionId The subscription identifier.
		 * @return {AppListResult} This is a synchronous operation. The body contains a JSON-serialized array of the metadata from all the IoT Central Applications in the subscription.
		 */
		Apps_ListBySubscription(api_version: string, subscriptionId: string): Observable<AppListResult> {
			return this.http.get<AppListResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/providers/Microsoft.IoTCentral/IoTApps?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Get all available application templates.
		 * Post subscriptions/{subscriptionId}/providers/Microsoft.IoTCentral/appTemplates
		 * @param {string} api_version The version of the API.
		 * @param {string} subscriptionId The subscription identifier.
		 * @return {AppTemplatesResult} The body contains all the IoT Central application templates.
		 */
		Apps_ListTemplates(api_version: string, subscriptionId: string): Observable<AppTemplatesResult> {
			return this.http.post<AppTemplatesResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/providers/Microsoft.IoTCentral/appTemplates?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), null, {});
		}

		/**
		 * Check if an IoT Central application name is available.
		 * Post subscriptions/{subscriptionId}/providers/Microsoft.IoTCentral/checkNameAvailability
		 * @param {string} api_version The version of the API.
		 * @param {string} subscriptionId The subscription identifier.
		 * @param {OperationInputs} requestBody Set the name parameter in the OperationInputs structure to the name of the IoT Central application to check.
		 * @return {AppAvailabilityInfo} This is a synchronous operation. The body contains a JSON-serialized response that specifies whether the IoT Central application name is available. If the name is not available, the body contains the reason.
		 */
		Apps_CheckNameAvailability(api_version: string, subscriptionId: string, requestBody: OperationInputs): Observable<AppAvailabilityInfo> {
			return this.http.post<AppAvailabilityInfo>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/providers/Microsoft.IoTCentral/checkNameAvailability?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Check if an IoT Central application subdomain is available.
		 * Post subscriptions/{subscriptionId}/providers/Microsoft.IoTCentral/checkSubdomainAvailability
		 * @param {string} api_version The version of the API.
		 * @param {string} subscriptionId The subscription identifier.
		 * @param {OperationInputs} requestBody Set the name parameter in the OperationInputs structure to the subdomain of the IoT Central application to check.
		 * @return {AppAvailabilityInfo} This is a synchronous operation. The body contains a JSON-serialized response that specifies whether the IoT Central application subdomain is available. If the subdomain is not available, the body contains the reason.
		 */
		Apps_CheckSubdomainAvailability(api_version: string, subscriptionId: string, requestBody: OperationInputs): Observable<AppAvailabilityInfo> {
			return this.http.post<AppAvailabilityInfo>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/providers/Microsoft.IoTCentral/checkSubdomainAvailability?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Get all the IoT Central Applications in a resource group.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.IoTCentral/IoTApps
		 * @param {string} api_version The version of the API.
		 * @param {string} subscriptionId The subscription identifier.
		 * @param {string} resourceGroupName The name of the resource group that contains the IoT Central application.
		 * @return {AppListResult} This is a synchronous operation. The body contains a JSON-serialized array of the metadata from all the IoT Central Applications in the resource group.
		 */
		Apps_ListByResourceGroup(api_version: string, subscriptionId: string, resourceGroupName: string): Observable<AppListResult> {
			return this.http.get<AppListResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.IoTCentral/IoTApps?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Get the metadata of an IoT Central application.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.IoTCentral/IoTApps/{resourceName}
		 * @param {string} api_version The version of the API.
		 * @param {string} subscriptionId The subscription identifier.
		 * @param {string} resourceGroupName The name of the resource group that contains the IoT Central application.
		 * @param {string} resourceName The ARM resource name of the IoT Central application.
		 * @return {App} The body contains all the non-security properties of the IoT Central application. Security-related properties are set to null.
		 */
		Apps_Get(api_version: string, subscriptionId: string, resourceGroupName: string, resourceName: string): Observable<App> {
			return this.http.get<App>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.IoTCentral/IoTApps/' + (resourceName == null ? '' : encodeURIComponent(resourceName)) + '?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Create or update the metadata of an IoT Central application. The usual pattern to modify a property is to retrieve the IoT Central application metadata and security metadata, and then combine them with the modified values in a new body to update the IoT Central application.
		 * Put subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.IoTCentral/IoTApps/{resourceName}
		 * @param {string} api_version The version of the API.
		 * @param {string} subscriptionId The subscription identifier.
		 * @param {string} resourceGroupName The name of the resource group that contains the IoT Central application.
		 * @param {string} resourceName The ARM resource name of the IoT Central application.
		 * @param {App} requestBody The IoT Central application metadata and security metadata.
		 * @return {App} This is returned as a response to the status polling request for the create or update operation. The body contains the resource representation that indicates a transitional provisioning state.
		 */
		Apps_CreateOrUpdate(api_version: string, subscriptionId: string, resourceGroupName: string, resourceName: string, requestBody: App): Observable<App> {
			return this.http.put<App>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.IoTCentral/IoTApps/' + (resourceName == null ? '' : encodeURIComponent(resourceName)) + '?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Delete an IoT Central application.
		 * Delete subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.IoTCentral/IoTApps/{resourceName}
		 * @param {string} api_version The version of the API.
		 * @param {string} subscriptionId The subscription identifier.
		 * @param {string} resourceGroupName The name of the resource group that contains the IoT Central application.
		 * @param {string} resourceName The ARM resource name of the IoT Central application.
		 * @return {void} This is returned as a response to the status polling request for the delete operation. The body contains the resource representation that indicates a transitional provisioning state.
		 */
		Apps_Delete(api_version: string, subscriptionId: string, resourceGroupName: string, resourceName: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.IoTCentral/IoTApps/' + (resourceName == null ? '' : encodeURIComponent(resourceName)) + '?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Update the metadata of an IoT Central application.
		 * Patch subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.IoTCentral/IoTApps/{resourceName}
		 * @param {string} api_version The version of the API.
		 * @param {string} subscriptionId The subscription identifier.
		 * @param {string} resourceGroupName The name of the resource group that contains the IoT Central application.
		 * @param {string} resourceName The ARM resource name of the IoT Central application.
		 * @param {AppPatch} requestBody The IoT Central application metadata and security metadata.
		 * @return {App} This is returned as a response to the status polling request for the create or update operation. The body contains the resource representation that indicates a transitional provisioning state.
		 */
		Apps_Update(api_version: string, subscriptionId: string, resourceGroupName: string, resourceName: string, requestBody: AppPatch): Observable<App> {
			return this.http.patch<App>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.IoTCentral/IoTApps/' + (resourceName == null ? '' : encodeURIComponent(resourceName)) + '?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

}

