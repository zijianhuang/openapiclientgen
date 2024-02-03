import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** Input values. */
	export interface CheckNameAvailabilityParameters {

		/**
		 * The name of the service instance to check.
		 * Required
		 */
		name: string;

		/**
		 * The fully qualified resource type which includes provider namespace.
		 * Required
		 */
		type: string;
	}

	/** Input values. */
	export interface CheckNameAvailabilityParametersFormProperties {

		/**
		 * The name of the service instance to check.
		 * Required
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * The fully qualified resource type which includes provider namespace.
		 * Required
		 */
		type: FormControl<string | null | undefined>,
	}
	export function CreateCheckNameAvailabilityParametersFormGroup() {
		return new FormGroup<CheckNameAvailabilityParametersFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Error details. */
	export interface ErrorDetails {

		/** Error details. */
		error?: ErrorDetailsInternal;
	}

	/** Error details. */
	export interface ErrorDetailsFormProperties {
	}
	export function CreateErrorDetailsFormGroup() {
		return new FormGroup<ErrorDetailsFormProperties>({
		});

	}


	/** Error details. */
	export interface ErrorDetailsInternal {

		/** The error code. */
		code?: string | null;

		/** The error message. */
		message?: string | null;

		/** The target of the particular error. */
		target?: string | null;
	}

	/** Error details. */
	export interface ErrorDetailsInternalFormProperties {

		/** The error code. */
		code: FormControl<string | null | undefined>,

		/** The error message. */
		message: FormControl<string | null | undefined>,

		/** The target of the particular error. */
		target: FormControl<string | null | undefined>,
	}
	export function CreateErrorDetailsInternalFormGroup() {
		return new FormGroup<ErrorDetailsInternalFormProperties>({
			code: new FormControl<string | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
			target: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Service REST API operation. */
	export interface Operation {

		/** The object that represents the operation. */
		display?: OperationDisplay;

		/** Operation name: {provider}/{resource}/{read | write | action | delete} */
		name?: string | null;

		/** Default value is 'user,system'. */
		origin?: string | null;
	}

	/** Service REST API operation. */
	export interface OperationFormProperties {

		/** Operation name: {provider}/{resource}/{read | write | action | delete} */
		name: FormControl<string | null | undefined>,

		/** Default value is 'user,system'. */
		origin: FormControl<string | null | undefined>,
	}
	export function CreateOperationFormGroup() {
		return new FormGroup<OperationFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			origin: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The object that represents the operation. */
	export interface OperationDisplay {

		/** Friendly description for the operation, */
		description?: string | null;

		/** Name of the operation */
		operation?: string | null;

		/** Service provider: Microsoft.HealthcareApis */
		provider?: string | null;

		/** Resource Type: Services */
		resource?: string | null;
	}

	/** The object that represents the operation. */
	export interface OperationDisplayFormProperties {

		/** Friendly description for the operation, */
		description: FormControl<string | null | undefined>,

		/** Name of the operation */
		operation: FormControl<string | null | undefined>,

		/** Service provider: Microsoft.HealthcareApis */
		provider: FormControl<string | null | undefined>,

		/** Resource Type: Services */
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


	/** A list of service operations. It contains a list of operations and a URL link to get the next set of results. */
	export interface OperationListResult {

		/** The link used to get the next page of service description objects. */
		nextLink?: string | null;

		/** A list of service operations supported by the Microsoft.HealthcareApis resource provider. */
		value?: Array<Operation>;
	}

	/** A list of service operations. It contains a list of operations and a URL link to get the next set of results. */
	export interface OperationListResultFormProperties {

		/** The link used to get the next page of service description objects. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateOperationListResultFormGroup() {
		return new FormGroup<OperationListResultFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The properties indicating the operation result of an operation on a service. */
	export interface OperationResultsDescription {

		/** The ID of the operation returned. */
		id?: string | null;

		/** The name of the operation result. */
		name?: string | null;

		/** Additional properties of the operation result. */
		properties?: any;

		/** The time that the operation was started. */
		startTime?: string | null;

		/** The status of the operation being performed. */
		status?: OperationResultsDescriptionStatus | null;
	}

	/** The properties indicating the operation result of an operation on a service. */
	export interface OperationResultsDescriptionFormProperties {

		/** The ID of the operation returned. */
		id: FormControl<string | null | undefined>,

		/** The name of the operation result. */
		name: FormControl<string | null | undefined>,

		/** Additional properties of the operation result. */
		properties: FormControl<any | null | undefined>,

		/** The time that the operation was started. */
		startTime: FormControl<string | null | undefined>,

		/** The status of the operation being performed. */
		status: FormControl<OperationResultsDescriptionStatus | null | undefined>,
	}
	export function CreateOperationResultsDescriptionFormGroup() {
		return new FormGroup<OperationResultsDescriptionFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			properties: new FormControl<any | null | undefined>(undefined),
			startTime: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<OperationResultsDescriptionStatus | null | undefined>(undefined),
		});

	}

	export enum OperationResultsDescriptionStatus { Canceled = 'Canceled', Succeeded = 'Succeeded', Failed = 'Failed', Requested = 'Requested', Running = 'Running' }


	/** The common properties of a service. */
	export interface Resource {

		/** An etag associated with the resource, used for optimistic concurrency when editing it. */
		etag?: string | null;

		/** The resource identifier. */
		id?: string | null;

		/**
		 * The kind of the service.
		 * Required
		 */
		kind: ResourceKind;

		/**
		 * The resource location.
		 * Required
		 */
		location: string;

		/** The resource name. */
		name?: string | null;

		/** The resource tags. */
		tags?: {[id: string]: string };

		/** The resource type. */
		type?: string | null;
	}

	/** The common properties of a service. */
	export interface ResourceFormProperties {

		/** An etag associated with the resource, used for optimistic concurrency when editing it. */
		etag: FormControl<string | null | undefined>,

		/** The resource identifier. */
		id: FormControl<string | null | undefined>,

		/**
		 * The kind of the service.
		 * Required
		 */
		kind: FormControl<ResourceKind | null | undefined>,

		/**
		 * The resource location.
		 * Required
		 */
		location: FormControl<string | null | undefined>,

		/** The resource name. */
		name: FormControl<string | null | undefined>,

		/** The resource tags. */
		tags: FormControl<{[id: string]: string } | null | undefined>,

		/** The resource type. */
		type: FormControl<string | null | undefined>,
	}
	export function CreateResourceFormGroup() {
		return new FormGroup<ResourceFormProperties>({
			etag: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<ResourceKind | null | undefined>(undefined, [Validators.required]),
			location: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^[a-z0-9][a-z0-9-]{1,21}[a-z0-9]$')]),
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ResourceKind { fhir = 'fhir', 'fhir-Stu3' = 'fhir-Stu3', 'fhir-R4' = 'fhir-R4' }


	/** An access policy entry. */
	export interface ServiceAccessPolicyEntry {

		/**
		 * An Azure AD object ID (User or Apps) that is allowed access to the FHIR service.
		 * Required
		 */
		objectId: string;
	}

	/** An access policy entry. */
	export interface ServiceAccessPolicyEntryFormProperties {

		/**
		 * An Azure AD object ID (User or Apps) that is allowed access to the FHIR service.
		 * Required
		 */
		objectId: FormControl<string | null | undefined>,
	}
	export function CreateServiceAccessPolicyEntryFormGroup() {
		return new FormGroup<ServiceAccessPolicyEntryFormProperties>({
			objectId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^(([0-9A-Fa-f]{8}[-]?(?:[0-9A-Fa-f]{4}[-]?){3}[0-9A-Fa-f]{12}){1})+$')]),
		});

	}


	/** Authentication configuration information */
	export interface ServiceAuthenticationConfigurationInfo {

		/** The audience url for the service */
		audience?: string | null;

		/** The authority url for the service */
		authority?: string | null;

		/** If the SMART on FHIR proxy is enabled */
		smartProxyEnabled?: boolean | null;
	}

	/** Authentication configuration information */
	export interface ServiceAuthenticationConfigurationInfoFormProperties {

		/** The audience url for the service */
		audience: FormControl<string | null | undefined>,

		/** The authority url for the service */
		authority: FormControl<string | null | undefined>,

		/** If the SMART on FHIR proxy is enabled */
		smartProxyEnabled: FormControl<boolean | null | undefined>,
	}
	export function CreateServiceAuthenticationConfigurationInfoFormGroup() {
		return new FormGroup<ServiceAuthenticationConfigurationInfoFormProperties>({
			audience: new FormControl<string | null | undefined>(undefined),
			authority: new FormControl<string | null | undefined>(undefined),
			smartProxyEnabled: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** The settings for the CORS configuration of the service instance. */
	export interface ServiceCorsConfigurationInfo {

		/** If credentials are allowed via CORS. */
		allowCredentials?: boolean | null;

		/** The headers to be allowed via CORS. */
		headers?: Array<string>;

		/**
		 * The max age to be allowed via CORS.
		 * Minimum: 0
		 * Maximum: 99999
		 */
		maxAge?: number | null;

		/** The methods to be allowed via CORS. */
		methods?: Array<string>;

		/** The origins to be allowed via CORS. */
		origins?: Array<string>;
	}

	/** The settings for the CORS configuration of the service instance. */
	export interface ServiceCorsConfigurationInfoFormProperties {

		/** If credentials are allowed via CORS. */
		allowCredentials: FormControl<boolean | null | undefined>,

		/**
		 * The max age to be allowed via CORS.
		 * Minimum: 0
		 * Maximum: 99999
		 */
		maxAge: FormControl<number | null | undefined>,
	}
	export function CreateServiceCorsConfigurationInfoFormGroup() {
		return new FormGroup<ServiceCorsConfigurationInfoFormProperties>({
			allowCredentials: new FormControl<boolean | null | undefined>(undefined),
			maxAge: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(99999)]),
		});

	}


	/** The settings for the Cosmos DB database backing the service. */
	export interface ServiceCosmosDbConfigurationInfo {

		/**
		 * The provisioned throughput for the backing database.
		 * Minimum: 400
		 * Maximum: 10000
		 */
		offerThroughput?: number | null;
	}

	/** The settings for the Cosmos DB database backing the service. */
	export interface ServiceCosmosDbConfigurationInfoFormProperties {

		/**
		 * The provisioned throughput for the backing database.
		 * Minimum: 400
		 * Maximum: 10000
		 */
		offerThroughput: FormControl<number | null | undefined>,
	}
	export function CreateServiceCosmosDbConfigurationInfoFormGroup() {
		return new FormGroup<ServiceCosmosDbConfigurationInfoFormProperties>({
			offerThroughput: new FormControl<number | null | undefined>(undefined, [Validators.min(400), Validators.max(10000)]),
		});

	}


	/** The description of the service. */
	export interface ServicesDescription {

		/** The properties of a service instance. */
		properties?: ServicesProperties;
	}

	/** The description of the service. */
	export interface ServicesDescriptionFormProperties {
	}
	export function CreateServicesDescriptionFormGroup() {
		return new FormGroup<ServicesDescriptionFormProperties>({
		});

	}


	/** The properties of a service instance. */
	export interface ServicesProperties {

		/**
		 * The access policies of the service instance.
		 * Required
		 * Minimum items: 1
		 */
		accessPolicies: Array<ServiceAccessPolicyEntry>;

		/** Authentication configuration information */
		authenticationConfiguration?: ServiceAuthenticationConfigurationInfo;

		/** The settings for the CORS configuration of the service instance. */
		corsConfiguration?: ServiceCorsConfigurationInfo;

		/** The settings for the Cosmos DB database backing the service. */
		cosmosDbConfiguration?: ServiceCosmosDbConfigurationInfo;

		/** The provisioning state. */
		provisioningState?: ServicesPropertiesProvisioningState | null;
	}

	/** The properties of a service instance. */
	export interface ServicesPropertiesFormProperties {

		/** The provisioning state. */
		provisioningState: FormControl<ServicesPropertiesProvisioningState | null | undefined>,
	}
	export function CreateServicesPropertiesFormGroup() {
		return new FormGroup<ServicesPropertiesFormProperties>({
			provisioningState: new FormControl<ServicesPropertiesProvisioningState | null | undefined>(undefined),
		});

	}

	export enum ServicesPropertiesProvisioningState { Deleting = 'Deleting', Succeeded = 'Succeeded', Creating = 'Creating', Accepted = 'Accepted', Verifying = 'Verifying', Updating = 'Updating', Failed = 'Failed', Canceled = 'Canceled', Deprovisioned = 'Deprovisioned' }


	/** A list of service description objects with a next link. */
	export interface ServicesDescriptionListResult {

		/** The link used to get the next page of service description objects. */
		nextLink?: string | null;

		/** A list of service description objects. */
		value?: Array<ServicesDescription>;
	}

	/** A list of service description objects with a next link. */
	export interface ServicesDescriptionListResultFormProperties {

		/** The link used to get the next page of service description objects. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateServicesDescriptionListResultFormGroup() {
		return new FormGroup<ServicesDescriptionListResultFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The properties indicating whether a given service name is available. */
	export interface ServicesNameAvailabilityInfo {

		/** The detailed reason message. */
		message?: string | null;

		/** The value which indicates whether the provided name is available. */
		nameAvailable?: boolean | null;

		/** The reason for unavailability. */
		reason?: ServicesNameAvailabilityInfoReason | null;
	}

	/** The properties indicating whether a given service name is available. */
	export interface ServicesNameAvailabilityInfoFormProperties {

		/** The detailed reason message. */
		message: FormControl<string | null | undefined>,

		/** The value which indicates whether the provided name is available. */
		nameAvailable: FormControl<boolean | null | undefined>,

		/** The reason for unavailability. */
		reason: FormControl<ServicesNameAvailabilityInfoReason | null | undefined>,
	}
	export function CreateServicesNameAvailabilityInfoFormGroup() {
		return new FormGroup<ServicesNameAvailabilityInfoFormProperties>({
			message: new FormControl<string | null | undefined>(undefined),
			nameAvailable: new FormControl<boolean | null | undefined>(undefined),
			reason: new FormControl<ServicesNameAvailabilityInfoReason | null | undefined>(undefined),
		});

	}

	export enum ServicesNameAvailabilityInfoReason { Invalid = 'Invalid', AlreadyExists = 'AlreadyExists' }


	/** The description of the service. */
	export interface ServicesPatchDescription {

		/** Instance tags */
		tags?: {[id: string]: string };
	}

	/** The description of the service. */
	export interface ServicesPatchDescriptionFormProperties {

		/** Instance tags */
		tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateServicesPatchDescriptionFormGroup() {
		return new FormGroup<ServicesPatchDescriptionFormProperties>({
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Lists all of the available Healthcare service REST API operations.
		 * Get providers/Microsoft.HealthcareApis/operations
		 * @param {string} api_version Client Api Version.
		 * @return {OperationListResult} OK. The request has succeeded.
		 */
		Operations_List(api_version: string): Observable<OperationListResult> {
			return this.http.get<OperationListResult>(this.baseUri + 'providers/Microsoft.HealthcareApis/operations?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Check if a service instance name is available.
		 * Post subscriptions/{subscriptionId}/providers/Microsoft.HealthcareApis/checkNameAvailability
		 * @param {string} api_version Client Api Version.
		 * @param {string} subscriptionId The subscription identifier.
		 * @param {CheckNameAvailabilityParameters} requestBody Set the name parameter in the CheckNameAvailabilityParameters structure to the name of the service instance to check.
		 * @return {ServicesNameAvailabilityInfo} This is a synchronous operation. The body contains a JSON-serialized response that specifies whether the service name is available. If the name is not available, the body contains the reason.
		 */
		Services_CheckNameAvailability(api_version: string, subscriptionId: string, requestBody: CheckNameAvailabilityParameters): Observable<ServicesNameAvailabilityInfo> {
			return this.http.post<ServicesNameAvailabilityInfo>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/providers/Microsoft.HealthcareApis/checkNameAvailability?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Get the operation result for a long running operation.
		 * Get subscriptions/{subscriptionId}/providers/Microsoft.HealthcareApis/locations/{locationName}/operationresults/{operationResultId}
		 * @param {string} api_version Client Api Version.
		 * @param {string} subscriptionId The subscription identifier.
		 * @param {string} locationName The location of the operation.
		 * @param {string} operationResultId The ID of the operation result to get.
		 * @return {OperationResultsDescription} The body contains all of the properties of the operation result.
		 */
		OperationResults_Get(api_version: string, subscriptionId: string, locationName: string, operationResultId: string): Observable<OperationResultsDescription> {
			return this.http.get<OperationResultsDescription>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/providers/Microsoft.HealthcareApis/locations/' + (locationName == null ? '' : encodeURIComponent(locationName)) + '/operationresults/' + (operationResultId == null ? '' : encodeURIComponent(operationResultId)) + '?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Get all the service instances in a subscription.
		 * Get subscriptions/{subscriptionId}/providers/Microsoft.HealthcareApis/services
		 * @param {string} api_version Client Api Version.
		 * @param {string} subscriptionId The subscription identifier.
		 * @return {ServicesDescriptionListResult} This is a synchronous operation. The body contains a JSON-serialized array of the metadata from all the service instances in the subscription.
		 */
		Services_List(api_version: string, subscriptionId: string): Observable<ServicesDescriptionListResult> {
			return this.http.get<ServicesDescriptionListResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/providers/Microsoft.HealthcareApis/services?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Get all the service instances in a resource group.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HealthcareApis/services
		 * @param {string} api_version Client Api Version.
		 * @param {string} subscriptionId The subscription identifier.
		 * @param {string} resourceGroupName The name of the resource group that contains the service instance.
		 * @return {ServicesDescriptionListResult} This is a synchronous operation. The body contains a JSON-serialized array of the metadata from all the service instances in the resource group.
		 */
		Services_ListByResourceGroup(api_version: string, subscriptionId: string, resourceGroupName: string): Observable<ServicesDescriptionListResult> {
			return this.http.get<ServicesDescriptionListResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.HealthcareApis/services?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Get the metadata of a service instance.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HealthcareApis/services/{resourceName}
		 * @param {string} api_version Client Api Version.
		 * @param {string} subscriptionId The subscription identifier.
		 * @param {string} resourceGroupName The name of the resource group that contains the service instance.
		 * @param {string} resourceName The name of the service instance.
		 * @return {ServicesDescription} The body contains all of the properties of the service instance.
		 */
		Services_Get(api_version: string, subscriptionId: string, resourceGroupName: string, resourceName: string): Observable<ServicesDescription> {
			return this.http.get<ServicesDescription>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.HealthcareApis/services/' + (resourceName == null ? '' : encodeURIComponent(resourceName)) + '?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Create or update the metadata of a service instance.
		 * Put subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HealthcareApis/services/{resourceName}
		 * @param {string} api_version Client Api Version.
		 * @param {string} subscriptionId The subscription identifier.
		 * @param {string} resourceGroupName The name of the resource group that contains the service instance.
		 * @param {string} resourceName The name of the service instance.
		 * @param {ServicesDescription} requestBody The service instance metadata.
		 * @return {ServicesDescription} Updated - Put request accepted and an existing resource is being updated; the operation will complete asynchronously.
		 */
		Services_CreateOrUpdate(api_version: string, subscriptionId: string, resourceGroupName: string, resourceName: string, requestBody: ServicesDescription): Observable<ServicesDescription> {
			return this.http.put<ServicesDescription>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.HealthcareApis/services/' + (resourceName == null ? '' : encodeURIComponent(resourceName)) + '?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Delete a service instance.
		 * Delete subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HealthcareApis/services/{resourceName}
		 * @param {string} api_version Client Api Version.
		 * @param {string} subscriptionId The subscription identifier.
		 * @param {string} resourceGroupName The name of the resource group that contains the service instance.
		 * @param {string} resourceName The name of the service instance.
		 * @return {void} 
		 */
		Services_Delete(api_version: string, subscriptionId: string, resourceGroupName: string, resourceName: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.HealthcareApis/services/' + (resourceName == null ? '' : encodeURIComponent(resourceName)) + '?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Update the metadata of a service instance.
		 * Patch subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HealthcareApis/services/{resourceName}
		 * @param {string} api_version Client Api Version.
		 * @param {string} subscriptionId The subscription identifier.
		 * @param {string} resourceGroupName The name of the resource group that contains the service instance.
		 * @param {string} resourceName The name of the service instance.
		 * @param {ServicesPatchDescription} requestBody The service instance metadata and security metadata.
		 * @return {ServicesDescription} The tags for the resource were updated successfully.
		 */
		Services_Update(api_version: string, subscriptionId: string, resourceGroupName: string, resourceName: string, requestBody: ServicesPatchDescription): Observable<ServicesDescription> {
			return this.http.patch<ServicesDescription>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.HealthcareApis/services/' + (resourceName == null ? '' : encodeURIComponent(resourceName)) + '?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

}

