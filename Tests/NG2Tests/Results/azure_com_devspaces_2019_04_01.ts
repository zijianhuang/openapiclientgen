import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** Container host mapping object specifying the Container host resource ID and its associated Controller resource. */
	export interface ContainerHostMapping {

		/** ARM ID of the Container Host resource */
		containerHostResourceId?: string | null;

		/** ARM ID of the mapped Controller resource */
		mappedControllerResourceId?: string | null;
	}

	/** Container host mapping object specifying the Container host resource ID and its associated Controller resource. */
	export interface ContainerHostMappingFormProperties {

		/** ARM ID of the Container Host resource */
		containerHostResourceId: FormControl<string | null | undefined>,

		/** ARM ID of the mapped Controller resource */
		mappedControllerResourceId: FormControl<string | null | undefined>,
	}
	export function CreateContainerHostMappingFormGroup() {
		return new FormGroup<ContainerHostMappingFormProperties>({
			containerHostResourceId: new FormControl<string | null | undefined>(undefined),
			mappedControllerResourceId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Controller extends TrackedResource {

		/** Required */
		properties: ControllerProperties;

		/**
		 * Model representing SKU for Azure Dev Spaces Controller.
		 * Required
		 */
		sku: Sku;
	}
	export interface ControllerFormProperties extends TrackedResourceFormProperties {
	}
	export function CreateControllerFormGroup() {
		return new FormGroup<ControllerFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
			location: new FormControl<string | null | undefined>(undefined),
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}

	export interface ControllerConnectionDetails {

		/** Base class for types that supply values used to connect to container orchestrators */
		orchestratorSpecificConnectionDetails?: OrchestratorSpecificConnectionDetails;
	}
	export interface ControllerConnectionDetailsFormProperties {
	}
	export function CreateControllerConnectionDetailsFormGroup() {
		return new FormGroup<ControllerConnectionDetailsFormProperties>({
		});

	}

	export interface ControllerConnectionDetailsList {

		/** List of Azure Dev Spaces Controller connection details. */
		connectionDetailsList?: Array<ControllerConnectionDetails>;
	}
	export interface ControllerConnectionDetailsListFormProperties {
	}
	export function CreateControllerConnectionDetailsListFormGroup() {
		return new FormGroup<ControllerConnectionDetailsListFormProperties>({
		});

	}

	export interface ControllerList {

		/** The URI that can be used to request the next page for list of Azure Dev Spaces Controllers. */
		nextLink?: string | null;

		/** List of Azure Dev Spaces Controllers. */
		value?: Array<Controller>;
	}
	export interface ControllerListFormProperties {

		/** The URI that can be used to request the next page for list of Azure Dev Spaces Controllers. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateControllerListFormGroup() {
		return new FormGroup<ControllerListFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ControllerProperties {

		/** DNS name for accessing DataPlane services */
		dataPlaneFqdn?: string | null;

		/** DNS suffix for public endpoints running in the Azure Dev Spaces Controller. */
		hostSuffix?: string | null;

		/** Provisioning state of the Azure Dev Spaces Controller. */
		provisioningState?: ControllerPropertiesProvisioningState | null;

		/**
		 * Credentials of the target container host (base64).
		 * Required
		 */
		targetContainerHostCredentialsBase64: string;

		/**
		 * Resource ID of the target container host
		 * Required
		 */
		targetContainerHostResourceId: string;
	}
	export interface ControllerPropertiesFormProperties {

		/** DNS name for accessing DataPlane services */
		dataPlaneFqdn: FormControl<string | null | undefined>,

		/** DNS suffix for public endpoints running in the Azure Dev Spaces Controller. */
		hostSuffix: FormControl<string | null | undefined>,

		/** Provisioning state of the Azure Dev Spaces Controller. */
		provisioningState: FormControl<ControllerPropertiesProvisioningState | null | undefined>,

		/**
		 * Credentials of the target container host (base64).
		 * Required
		 */
		targetContainerHostCredentialsBase64: FormControl<string | null | undefined>,

		/**
		 * Resource ID of the target container host
		 * Required
		 */
		targetContainerHostResourceId: FormControl<string | null | undefined>,
	}
	export function CreateControllerPropertiesFormGroup() {
		return new FormGroup<ControllerPropertiesFormProperties>({
			dataPlaneFqdn: new FormControl<string | null | undefined>(undefined),
			hostSuffix: new FormControl<string | null | undefined>(undefined),
			provisioningState: new FormControl<ControllerPropertiesProvisioningState | null | undefined>(undefined),
			targetContainerHostCredentialsBase64: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			targetContainerHostResourceId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum ControllerPropertiesProvisioningState { Succeeded = 0, Failed = 1, Canceled = 2, Updating = 3, Creating = 4, Deleting = 5, Deleted = 6 }


	/** Parameters for updating an Azure Dev Spaces Controller. */
	export interface ControllerUpdateParameters {
		properties?: ControllerUpdateParametersProperties;

		/** Tags for the Azure Dev Spaces Controller. */
		tags?: any;
	}

	/** Parameters for updating an Azure Dev Spaces Controller. */
	export interface ControllerUpdateParametersFormProperties {

		/** Tags for the Azure Dev Spaces Controller. */
		tags: FormControl<any | null | undefined>,
	}
	export function CreateControllerUpdateParametersFormGroup() {
		return new FormGroup<ControllerUpdateParametersFormProperties>({
			tags: new FormControl<any | null | undefined>(undefined),
		});

	}

	export interface ControllerUpdateParametersProperties {

		/** Credentials of the target container host (base64). */
		targetContainerHostCredentialsBase64?: string | null;
	}
	export interface ControllerUpdateParametersPropertiesFormProperties {

		/** Credentials of the target container host (base64). */
		targetContainerHostCredentialsBase64: FormControl<string | null | undefined>,
	}
	export function CreateControllerUpdateParametersPropertiesFormGroup() {
		return new FormGroup<ControllerUpdateParametersPropertiesFormProperties>({
			targetContainerHostCredentialsBase64: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Error response indicates that the service is not able to process the incoming request. The reason is provided in the error message. */
	export interface DevSpacesErrorResponse {
		error?: ErrorDetails;
	}

	/** Error response indicates that the service is not able to process the incoming request. The reason is provided in the error message. */
	export interface DevSpacesErrorResponseFormProperties {
	}
	export function CreateDevSpacesErrorResponseFormGroup() {
		return new FormGroup<DevSpacesErrorResponseFormProperties>({
		});

	}

	export interface ErrorDetails {

		/** Status code for the error. */
		code?: string | null;

		/** Error message describing the error in detail. */
		message?: string | null;

		/** The target of the particular error. */
		target?: string | null;
	}
	export interface ErrorDetailsFormProperties {

		/** Status code for the error. */
		code: FormControl<string | null | undefined>,

		/** Error message describing the error in detail. */
		message: FormControl<string | null | undefined>,

		/** The target of the particular error. */
		target: FormControl<string | null | undefined>,
	}
	export function CreateErrorDetailsFormGroup() {
		return new FormGroup<ErrorDetailsFormProperties>({
			code: new FormControl<string | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
			target: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains information used to connect to a Kubernetes cluster */
	export interface KubernetesConnectionDetails extends OrchestratorSpecificConnectionDetails {

		/** Gets the kubeconfig for the cluster. */
		kubeConfig?: string | null;
	}

	/** Contains information used to connect to a Kubernetes cluster */
	export interface KubernetesConnectionDetailsFormProperties extends OrchestratorSpecificConnectionDetailsFormProperties {

		/** Gets the kubeconfig for the cluster. */
		kubeConfig: FormControl<string | null | undefined>,
	}
	export function CreateKubernetesConnectionDetailsFormGroup() {
		return new FormGroup<KubernetesConnectionDetailsFormProperties>({
			instanceType: new FormControl<string | null | undefined>(undefined),
			kubeConfig: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Parameters for listing connection details of an Azure Dev Spaces Controller. */
	export interface ListConnectionDetailsParameters {

		/**
		 * Resource ID of the target container host mapped to the Azure Dev Spaces Controller.
		 * Required
		 */
		targetContainerHostResourceId: string;
	}

	/** Parameters for listing connection details of an Azure Dev Spaces Controller. */
	export interface ListConnectionDetailsParametersFormProperties {

		/**
		 * Resource ID of the target container host mapped to the Azure Dev Spaces Controller.
		 * Required
		 */
		targetContainerHostResourceId: FormControl<string | null | undefined>,
	}
	export function CreateListConnectionDetailsParametersFormGroup() {
		return new FormGroup<ListConnectionDetailsParametersFormProperties>({
			targetContainerHostResourceId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Base class for types that supply values used to connect to container orchestrators */
	export interface OrchestratorSpecificConnectionDetails {

		/** Gets the Instance type. */
		instanceType?: string | null;
	}

	/** Base class for types that supply values used to connect to container orchestrators */
	export interface OrchestratorSpecificConnectionDetailsFormProperties {

		/** Gets the Instance type. */
		instanceType: FormControl<string | null | undefined>,
	}
	export function CreateOrchestratorSpecificConnectionDetailsFormGroup() {
		return new FormGroup<OrchestratorSpecificConnectionDetailsFormProperties>({
			instanceType: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An Azure resource. */
	export interface Resource {

		/** Fully qualified resource Id for the resource. */
		id?: string | null;

		/** The name of the resource. */
		name?: string | null;

		/** The type of the resource. */
		type?: string | null;
	}

	/** An Azure resource. */
	export interface ResourceFormProperties {

		/** Fully qualified resource Id for the resource. */
		id: FormControl<string | null | undefined>,

		/** The name of the resource. */
		name: FormControl<string | null | undefined>,

		/** The type of the resource. */
		type: FormControl<string | null | undefined>,
	}
	export function CreateResourceFormGroup() {
		return new FormGroup<ResourceFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ResourceProviderOperationDefinition {
		display?: ResourceProviderOperationDisplay;

		/** Resource provider operation name. */
		name?: string | null;
	}
	export interface ResourceProviderOperationDefinitionFormProperties {

		/** Resource provider operation name. */
		name: FormControl<string | null | undefined>,
	}
	export function CreateResourceProviderOperationDefinitionFormGroup() {
		return new FormGroup<ResourceProviderOperationDefinitionFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ResourceProviderOperationDisplay {

		/** Description of the resource provider operation. */
		description?: string | null;

		/** Name of the resource provider operation. */
		operation?: string | null;

		/** Name of the resource provider. */
		provider?: string | null;

		/** Name of the resource type. */
		resource?: string | null;
	}
	export interface ResourceProviderOperationDisplayFormProperties {

		/** Description of the resource provider operation. */
		description: FormControl<string | null | undefined>,

		/** Name of the resource provider operation. */
		operation: FormControl<string | null | undefined>,

		/** Name of the resource provider. */
		provider: FormControl<string | null | undefined>,

		/** Name of the resource type. */
		resource: FormControl<string | null | undefined>,
	}
	export function CreateResourceProviderOperationDisplayFormGroup() {
		return new FormGroup<ResourceProviderOperationDisplayFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			operation: new FormControl<string | null | undefined>(undefined),
			provider: new FormControl<string | null | undefined>(undefined),
			resource: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ResourceProviderOperationList {

		/** The URI that can be used to request the next page for list of Azure operations. */
		nextLink?: string | null;

		/** Resource provider operations list. */
		value?: Array<ResourceProviderOperationDefinition>;
	}
	export interface ResourceProviderOperationListFormProperties {

		/** The URI that can be used to request the next page for list of Azure operations. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateResourceProviderOperationListFormGroup() {
		return new FormGroup<ResourceProviderOperationListFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Model representing SKU for Azure Dev Spaces Controller. */
	export interface Sku {

		/**
		 * The name of the SKU for Azure Dev Spaces Controller.
		 * Required
		 */
		name: SkuName;

		/** The tier of the SKU for Azure Dev Spaces Controller. */
		tier?: SkuTier | null;
	}

	/** Model representing SKU for Azure Dev Spaces Controller. */
	export interface SkuFormProperties {

		/**
		 * The name of the SKU for Azure Dev Spaces Controller.
		 * Required
		 */
		name: FormControl<SkuName | null | undefined>,

		/** The tier of the SKU for Azure Dev Spaces Controller. */
		tier: FormControl<SkuTier | null | undefined>,
	}
	export function CreateSkuFormGroup() {
		return new FormGroup<SkuFormProperties>({
			name: new FormControl<SkuName | null | undefined>(undefined, [Validators.required]),
			tier: new FormControl<SkuTier | null | undefined>(undefined),
		});

	}

	export enum SkuName { S1 = 0 }

	export enum SkuTier { Standard = 0 }


	/** The resource model definition for a ARM tracked top level resource. */
	export interface TrackedResource extends Resource {

		/** Region where the Azure resource is located. */
		location?: string | null;

		/** Tags for the Azure resource. */
		tags?: {[id: string]: string };
	}

	/** The resource model definition for a ARM tracked top level resource. */
	export interface TrackedResourceFormProperties extends ResourceFormProperties {

		/** Region where the Azure resource is located. */
		location: FormControl<string | null | undefined>,

		/** Tags for the Azure resource. */
		tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateTrackedResourceFormGroup() {
		return new FormGroup<TrackedResourceFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
			location: new FormControl<string | null | undefined>(undefined),
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Lists operations for the resource provider.
		 * Lists all the supported operations by the Microsoft.DevSpaces resource provider along with their description.
		 * Get providers/Microsoft.DevSpaces/operations
		 * @param {string} api_version Client API version.
		 * @return {ResourceProviderOperationList} The request was successful; response contains the list of operations under Microsoft.DevSpaces resource provider.
		 */
		Operations_List(api_version: string): Observable<ResourceProviderOperationList> {
			return this.http.get<ResourceProviderOperationList>(this.baseUri + 'providers/Microsoft.DevSpaces/operations?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Lists the Azure Dev Spaces Controllers in a subscription.
		 * Lists all the Azure Dev Spaces Controllers with their properties in the subscription.
		 * Get subscriptions/{subscriptionId}/providers/Microsoft.DevSpaces/controllers
		 * @param {string} api_version Client API version.
		 * @param {string} subscriptionId Azure subscription ID.
		 * @return {ControllerList} The request was successful; response contains the list of Azure Dev Spaces Controllers in the subscription.
		 */
		Controllers_List(api_version: string, subscriptionId: string): Observable<ControllerList> {
			return this.http.get<ControllerList>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/providers/Microsoft.DevSpaces/controllers?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Lists the Azure Dev Spaces Controllers in a resource group.
		 * Lists all the Azure Dev Spaces Controllers with their properties in the specified resource group and subscription.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevSpaces/controllers
		 * @param {string} api_version Client API version.
		 * @param {string} subscriptionId Azure subscription ID.
		 * @param {string} resourceGroupName Resource group to which the resource belongs.
		 * @return {ControllerList} The request was successful; response contains the list of Azure Dev Spaces Controllers in the resource group.
		 */
		Controllers_ListByResourceGroup(api_version: string, subscriptionId: string, resourceGroupName: string): Observable<ControllerList> {
			return this.http.get<ControllerList>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DevSpaces/controllers?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Gets an Azure Dev Spaces Controller.
		 * Gets the properties for an Azure Dev Spaces Controller.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevSpaces/controllers/{name}
		 * @param {string} api_version Client API version.
		 * @param {string} subscriptionId Azure subscription ID.
		 * @param {string} resourceGroupName Resource group to which the resource belongs.
		 * @param {string} name Name of the resource.
		 * @return {Controller} The request was successful; response contains the Azure Dev Spaces Controller.
		 */
		Controllers_Get(api_version: string, subscriptionId: string, resourceGroupName: string, name: string): Observable<Controller> {
			return this.http.get<Controller>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DevSpaces/controllers/' + (name == null ? '' : encodeURIComponent(name)) + '?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Creates an Azure Dev Spaces Controller.
		 * Creates an Azure Dev Spaces Controller with the specified create parameters.
		 * Put subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevSpaces/controllers/{name}
		 * @param {string} api_version Client API version.
		 * @param {string} subscriptionId Azure subscription ID.
		 * @param {string} resourceGroupName Resource group to which the resource belongs.
		 * @param {string} name Name of the resource.
		 * @param {Controller} requestBody Controller create parameters.
		 * @return {Controller} The request was successful; response contains the created Azure Dev Spaces Controller .
		 */
		Controllers_Create(api_version: string, subscriptionId: string, resourceGroupName: string, name: string, requestBody: Controller): Observable<Controller> {
			return this.http.put<Controller>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DevSpaces/controllers/' + (name == null ? '' : encodeURIComponent(name)) + '?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes an Azure Dev Spaces Controller.
		 * Deletes an existing Azure Dev Spaces Controller.
		 * Delete subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevSpaces/controllers/{name}
		 * @param {string} api_version Client API version.
		 * @param {string} subscriptionId Azure subscription ID.
		 * @param {string} resourceGroupName Resource group to which the resource belongs.
		 * @param {string} name Name of the resource.
		 * @return {void} The request was successful; the Azure Dev Spaces Controller is deleted.
		 */
		Controllers_Delete(api_version: string, subscriptionId: string, resourceGroupName: string, name: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DevSpaces/controllers/' + (name == null ? '' : encodeURIComponent(name)) + '?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Updates an Azure Dev Spaces Controller.
		 * Updates the properties of an existing Azure Dev Spaces Controller with the specified update parameters.
		 * Patch subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevSpaces/controllers/{name}
		 * @param {string} api_version Client API version.
		 * @param {string} subscriptionId Azure subscription ID.
		 * @param {string} resourceGroupName Resource group to which the resource belongs.
		 * @param {string} name Name of the resource.
		 * @param {ControllerUpdateParameters} requestBody Parameters for updating the Azure Dev Spaces Controller.
		 * @return {Controller} The request was successful; response contains the updated Azure Dev Spaces Controller .
		 */
		Controllers_Update(api_version: string, subscriptionId: string, resourceGroupName: string, name: string, requestBody: ControllerUpdateParameters): Observable<Controller> {
			return this.http.patch<Controller>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DevSpaces/controllers/' + (name == null ? '' : encodeURIComponent(name)) + '?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists connection details for an Azure Dev Spaces Controller.
		 * Lists connection details for the underlying container resources of an Azure Dev Spaces Controller.
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevSpaces/controllers/{name}/listConnectionDetails
		 * @param {string} api_version Client API version.
		 * @param {string} subscriptionId Azure subscription ID.
		 * @param {string} resourceGroupName Resource group to which the resource belongs.
		 * @param {string} name Name of the resource.
		 * @param {ListConnectionDetailsParameters} requestBody Parameters for listing connection details of Azure Dev Spaces Controller.
		 * @return {ControllerConnectionDetailsList} The request was successful; response contains the list of connection details for the Azure Dev Spaces Controller .
		 */
		Controllers_ListConnectionDetails(api_version: string, subscriptionId: string, resourceGroupName: string, name: string, requestBody: ListConnectionDetailsParameters): Observable<ControllerConnectionDetailsList> {
			return this.http.post<ControllerConnectionDetailsList>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DevSpaces/controllers/' + (name == null ? '' : encodeURIComponent(name)) + '/listConnectionDetails?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns container host mapping object for a container host resource ID if an associated controller exists.
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevSpaces/locations/{location}/checkContainerHostMapping
		 * @param {string} api_version Client API version.
		 * @param {string} subscriptionId Azure subscription ID.
		 * @param {string} resourceGroupName Resource group to which the resource belongs.
		 * @param {string} location Location of the container host.
		 * @return {ContainerHostMapping} The request was successful; response contains the container host mapping.
		 */
		ContainerHostMappings_GetContainerHostMapping(api_version: string, subscriptionId: string, resourceGroupName: string, location: string, requestBody: ContainerHostMapping): Observable<ContainerHostMapping> {
			return this.http.post<ContainerHostMapping>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DevSpaces/locations/' + (location == null ? '' : encodeURIComponent(location)) + '/checkContainerHostMapping?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

}

