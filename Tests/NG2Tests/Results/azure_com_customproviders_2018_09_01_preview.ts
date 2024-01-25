import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** The resource definition of this association. */
	export interface Association {

		/** The association id. */
		id?: string | null;

		/** The association name. */
		name?: string | null;

		/** The properties of the association. */
		properties?: AssociationProperties;

		/** The association type. */
		type?: string | null;
	}

	/** The resource definition of this association. */
	export interface AssociationFormProperties {

		/** The association id. */
		id: FormControl<string | null | undefined>,

		/** The association name. */
		name: FormControl<string | null | undefined>,

		/** The association type. */
		type: FormControl<string | null | undefined>,
	}
	export function CreateAssociationFormGroup() {
		return new FormGroup<AssociationFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface AssociationProperties {

		/** The provisioning state of the association. */
		provisioningState?: AssociationPropertiesProvisioningState | null;

		/** The REST resource instance of the target resource for this association. */
		targetResourceId?: string | null;
	}
	export interface AssociationPropertiesFormProperties {

		/** The provisioning state of the association. */
		provisioningState: FormControl<AssociationPropertiesProvisioningState | null | undefined>,

		/** The REST resource instance of the target resource for this association. */
		targetResourceId: FormControl<string | null | undefined>,
	}
	export function CreateAssociationPropertiesFormGroup() {
		return new FormGroup<AssociationPropertiesFormProperties>({
			provisioningState: new FormControl<AssociationPropertiesProvisioningState | null | undefined>(undefined),
			targetResourceId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum AssociationPropertiesProvisioningState { Accepted = 0, Deleting = 1, Running = 2, Succeeded = 3, Failed = 4 }


	/** List of associations. */
	export interface AssociationsList {

		/** The URL to use for getting the next set of results. */
		nextLink?: string | null;

		/** The array of associations. */
		value?: Array<Association>;
	}

	/** List of associations. */
	export interface AssociationsListFormProperties {

		/** The URL to use for getting the next set of results. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateAssociationsListFormGroup() {
		return new FormGroup<AssociationsListFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The route definition for an action implemented by the custom resource provider. */
	export interface CustomRPActionRouteDefinition extends CustomRPRouteDefinition {

		/** The routing types that are supported for action requests. */
		routingType?: CustomRPActionRouteDefinitionRoutingType | null;
	}

	/** The route definition for an action implemented by the custom resource provider. */
	export interface CustomRPActionRouteDefinitionFormProperties extends CustomRPRouteDefinitionFormProperties {

		/** The routing types that are supported for action requests. */
		routingType: FormControl<CustomRPActionRouteDefinitionRoutingType | null | undefined>,
	}
	export function CreateCustomRPActionRouteDefinitionFormGroup() {
		return new FormGroup<CustomRPActionRouteDefinitionFormProperties>({
			endpoint: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^https://.+')]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			routingType: new FormControl<CustomRPActionRouteDefinitionRoutingType | null | undefined>(undefined),
		});

	}

	export enum CustomRPActionRouteDefinitionRoutingType { Proxy = 0 }


	/** A manifest file that defines the custom resource provider resources. */
	export interface CustomRPManifest extends Resource {

		/** The manifest for the custom resource provider */
		properties?: CustomRPManifestProperties;
	}

	/** A manifest file that defines the custom resource provider resources. */
	export interface CustomRPManifestFormProperties extends ResourceFormProperties {
	}
	export function CreateCustomRPManifestFormGroup() {
		return new FormGroup<CustomRPManifestFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			location: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined),
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CustomRPManifestProperties {

		/** A list of actions that the custom resource provider implements. */
		actions?: Array<CustomRPActionRouteDefinition>;

		/** The provisioning state of the resource provider. */
		provisioningState?: AssociationPropertiesProvisioningState | null;

		/** A list of resource types that the custom resource provider implements. */
		resourceTypes?: Array<CustomRPResourceTypeRouteDefinition>;

		/** A list of validations to run on the custom resource provider's requests. */
		validations?: Array<CustomRPValidations>;
	}
	export interface CustomRPManifestPropertiesFormProperties {

		/** The provisioning state of the resource provider. */
		provisioningState: FormControl<AssociationPropertiesProvisioningState | null | undefined>,
	}
	export function CreateCustomRPManifestPropertiesFormGroup() {
		return new FormGroup<CustomRPManifestPropertiesFormProperties>({
			provisioningState: new FormControl<AssociationPropertiesProvisioningState | null | undefined>(undefined),
		});

	}


	/** The route definition for a resource implemented by the custom resource provider. */
	export interface CustomRPResourceTypeRouteDefinition extends CustomRPRouteDefinition {

		/** The routing types that are supported for resource requests. */
		routingType?: CustomRPResourceTypeRouteDefinitionRoutingType | null;
	}

	/** The route definition for a resource implemented by the custom resource provider. */
	export interface CustomRPResourceTypeRouteDefinitionFormProperties extends CustomRPRouteDefinitionFormProperties {

		/** The routing types that are supported for resource requests. */
		routingType: FormControl<CustomRPResourceTypeRouteDefinitionRoutingType | null | undefined>,
	}
	export function CreateCustomRPResourceTypeRouteDefinitionFormGroup() {
		return new FormGroup<CustomRPResourceTypeRouteDefinitionFormProperties>({
			endpoint: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^https://.+')]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			routingType: new FormControl<CustomRPResourceTypeRouteDefinitionRoutingType | null | undefined>(undefined),
		});

	}

	export enum CustomRPResourceTypeRouteDefinitionRoutingType { Proxy = 0, 'Proxy,Cache' = 1 }


	/** A validation to apply on custom resource provider requests. */
	export interface CustomRPValidations {

		/**
		 * A link to the validation specification. The specification must be hosted on raw.githubusercontent.com.
		 * Required
		 */
		specification: string;

		/** The type of validation to run against a matching request. */
		validationType?: CustomRPValidationsValidationType | null;
	}

	/** A validation to apply on custom resource provider requests. */
	export interface CustomRPValidationsFormProperties {

		/**
		 * A link to the validation specification. The specification must be hosted on raw.githubusercontent.com.
		 * Required
		 */
		specification: FormControl<string | null | undefined>,

		/** The type of validation to run against a matching request. */
		validationType: FormControl<CustomRPValidationsValidationType | null | undefined>,
	}
	export function CreateCustomRPValidationsFormGroup() {
		return new FormGroup<CustomRPValidationsFormProperties>({
			specification: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^https://raw.githubusercontent.com/.+')]),
			validationType: new FormControl<CustomRPValidationsValidationType | null | undefined>(undefined),
		});

	}

	export enum CustomRPValidationsValidationType { Swagger = 0 }


	/** A route definition that defines an action or resource that can be interacted with through the custom resource provider. */
	export interface CustomRPRouteDefinition {

		/**
		 * The route definition endpoint URI that the custom resource provider will proxy requests to. This can be in the form of a flat URI (e.g. 'https://testendpoint/') or can specify to route via a path (e.g. 'https://testendpoint/{requestPath}')
		 * Required
		 */
		endpoint: string;

		/**
		 * The name of the route definition. This becomes the name for the ARM extension (e.g. '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CustomProviders/resourceProviders/{resourceProviderName}/{name}')
		 * Required
		 */
		name: string;
	}

	/** A route definition that defines an action or resource that can be interacted with through the custom resource provider. */
	export interface CustomRPRouteDefinitionFormProperties {

		/**
		 * The route definition endpoint URI that the custom resource provider will proxy requests to. This can be in the form of a flat URI (e.g. 'https://testendpoint/') or can specify to route via a path (e.g. 'https://testendpoint/{requestPath}')
		 * Required
		 */
		endpoint: FormControl<string | null | undefined>,

		/**
		 * The name of the route definition. This becomes the name for the ARM extension (e.g. '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CustomProviders/resourceProviders/{resourceProviderName}/{name}')
		 * Required
		 */
		name: FormControl<string | null | undefined>,
	}
	export function CreateCustomRPRouteDefinitionFormGroup() {
		return new FormGroup<CustomRPRouteDefinitionFormProperties>({
			endpoint: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^https://.+')]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Error definition. */
	export interface ErrorDefinition {

		/** Service specific error code which serves as the substatus for the HTTP error code. */
		code?: string | null;

		/** Internal error details. */
		details?: Array<ErrorDefinition>;

		/** Description of the error. */
		message?: string | null;
	}

	/** Error definition. */
	export interface ErrorDefinitionFormProperties {

		/** Service specific error code which serves as the substatus for the HTTP error code. */
		code: FormControl<string | null | undefined>,

		/** Description of the error. */
		message: FormControl<string | null | undefined>,
	}
	export function CreateErrorDefinitionFormGroup() {
		return new FormGroup<ErrorDefinitionFormProperties>({
			code: new FormControl<string | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Error response. */
	export interface ErrorResponse {

		/** Error definition. */
		error?: ErrorDefinition;
	}

	/** Error response. */
	export interface ErrorResponseFormProperties {
	}
	export function CreateErrorResponseFormGroup() {
		return new FormGroup<ErrorResponseFormProperties>({
		});

	}


	/** List of custom resource providers. */
	export interface ListByCustomRPManifest {

		/** The URL to use for getting the next set of results. */
		nextLink?: string | null;

		/** The array of custom resource provider manifests. */
		value?: Array<CustomRPManifest>;
	}

	/** List of custom resource providers. */
	export interface ListByCustomRPManifestFormProperties {

		/** The URL to use for getting the next set of results. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateListByCustomRPManifestFormGroup() {
		return new FormGroup<ListByCustomRPManifestFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The resource definition. */
	export interface Resource {

		/** Resource Id */
		id?: string | null;

		/**
		 * Resource location
		 * Required
		 */
		location: string;

		/** Resource name */
		name?: string | null;

		/** Resource tags */
		tags?: {[id: string]: string };

		/** Resource type */
		type?: string | null;
	}

	/** The resource definition. */
	export interface ResourceFormProperties {

		/** Resource Id */
		id: FormControl<string | null | undefined>,

		/**
		 * Resource location
		 * Required
		 */
		location: FormControl<string | null | undefined>,

		/** Resource name */
		name: FormControl<string | null | undefined>,

		/** Resource tags */
		tags: FormControl<{[id: string]: string } | null | undefined>,

		/** Resource type */
		type: FormControl<string | null | undefined>,
	}
	export function CreateResourceFormGroup() {
		return new FormGroup<ResourceFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			location: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined),
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Supported operations of this resource provider. */
	export interface ResourceProviderOperation {

		/** Display metadata associated with the operation. */
		display?: any;

		/** Operation name, in format of {provider}/{resource}/{operation} */
		name?: string | null;
	}

	/** Supported operations of this resource provider. */
	export interface ResourceProviderOperationFormProperties {

		/** Display metadata associated with the operation. */
		display: FormControl<any | null | undefined>,

		/** Operation name, in format of {provider}/{resource}/{operation} */
		name: FormControl<string | null | undefined>,
	}
	export function CreateResourceProviderOperationFormGroup() {
		return new FormGroup<ResourceProviderOperationFormProperties>({
			display: new FormControl<any | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Results of the request to list operations. */
	export interface ResourceProviderOperationList {

		/** The URL to use for getting the next set of results. */
		nextLink?: string | null;

		/** List of operations supported by this resource provider. */
		value?: Array<ResourceProviderOperation>;
	}

	/** Results of the request to list operations. */
	export interface ResourceProviderOperationListFormProperties {

		/** The URL to use for getting the next set of results. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateResourceProviderOperationListFormGroup() {
		return new FormGroup<ResourceProviderOperationListFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** custom resource provider update information. */
	export interface ResourceProvidersUpdate {

		/** Resource tags */
		tags?: {[id: string]: string };
	}

	/** custom resource provider update information. */
	export interface ResourceProvidersUpdateFormProperties {

		/** Resource tags */
		tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateResourceProvidersUpdateFormGroup() {
		return new FormGroup<ResourceProvidersUpdateFormProperties>({
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * The list of operations provided by Microsoft CustomProviders.
		 * Get providers/Microsoft.CustomProviders/operations
		 * @param {string} api_version The API version to be used with the HTTP request.
		 * @return {ResourceProviderOperationList} Describe the result of a successful operation.
		 */
		Operations_List(api_version: string): Observable<ResourceProviderOperationList> {
			return this.http.get<ResourceProviderOperationList>(this.baseUri + 'providers/Microsoft.CustomProviders/operations?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Gets all the custom resource providers within a subscription.
		 * Get subscriptions/{subscriptionId}/providers/Microsoft.CustomProviders/resourceProviders
		 * @param {string} subscriptionId The Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000)
		 * @param {string} api_version The API version to be used with the HTTP request.
		 * @return {ListByCustomRPManifest} OK - Returns an array of custom resource providers.
		 */
		CustomResourceProvider_ListBySubscription(subscriptionId: string, api_version: string): Observable<ListByCustomRPManifest> {
			return this.http.get<ListByCustomRPManifest>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/providers/Microsoft.CustomProviders/resourceProviders&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Gets all the custom resource providers within a resource group.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CustomProviders/resourceProviders
		 * @param {string} subscriptionId The Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000)
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} api_version The API version to be used with the HTTP request.
		 * @return {ListByCustomRPManifest} OK - Returns an array of custom resource providers.
		 */
		CustomResourceProvider_ListByResourceGroup(subscriptionId: string, resourceGroupName: string, api_version: string): Observable<ListByCustomRPManifest> {
			return this.http.get<ListByCustomRPManifest>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.CustomProviders/resourceProviders&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Gets the custom resource provider manifest.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CustomProviders/resourceProviders/{resourceProviderName}
		 * @param {string} subscriptionId The Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000)
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} resourceProviderName The name of the resource provider.
		 * @param {string} api_version The API version to be used with the HTTP request.
		 * @return {CustomRPManifest} OK response definition with the existing resource.
		 */
		CustomResourceProvider_Get(subscriptionId: string, resourceGroupName: string, resourceProviderName: string, api_version: string): Observable<CustomRPManifest> {
			return this.http.get<CustomRPManifest>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.CustomProviders/resourceProviders/' + (resourceProviderName == null ? '' : encodeURIComponent(resourceProviderName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Creates or updates the custom resource provider.
		 * Put subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CustomProviders/resourceProviders/{resourceProviderName}
		 * @param {string} subscriptionId The Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000)
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} resourceProviderName The name of the resource provider.
		 * @param {string} api_version The API version to be used with the HTTP request.
		 * @param {CustomRPManifest} requestBody The parameters required to create or update a custom resource provider definition.
		 * @return {CustomRPManifest} OK response definition. Resource already exists and the changes have been accepted
		 */
		CustomResourceProvider_CreateOrUpdate(subscriptionId: string, resourceGroupName: string, resourceProviderName: string, api_version: string, requestBody: CustomRPManifest): Observable<CustomRPManifest> {
			return this.http.put<CustomRPManifest>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.CustomProviders/resourceProviders/' + (resourceProviderName == null ? '' : encodeURIComponent(resourceProviderName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes the custom resource provider.
		 * Delete subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CustomProviders/resourceProviders/{resourceProviderName}
		 * @param {string} subscriptionId The Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000)
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} resourceProviderName The name of the resource provider.
		 * @param {string} api_version The API version to be used with the HTTP request.
		 * @return {void} OK resource deleted
		 */
		CustomResourceProvider_Delete(subscriptionId: string, resourceGroupName: string, resourceProviderName: string, api_version: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.CustomProviders/resourceProviders/' + (resourceProviderName == null ? '' : encodeURIComponent(resourceProviderName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Updates an existing custom resource provider. The only value that can be updated via PATCH currently is the tags.
		 * Patch subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CustomProviders/resourceProviders/{resourceProviderName}
		 * @param {string} subscriptionId The Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000)
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} resourceProviderName The name of the resource provider.
		 * @param {string} api_version The API version to be used with the HTTP request.
		 * @param {ResourceProvidersUpdate} requestBody The updatable fields of a custom resource provider.
		 * @return {CustomRPManifest} OK response. The resource has been updated.
		 */
		CustomResourceProvider_Update(subscriptionId: string, resourceGroupName: string, resourceProviderName: string, api_version: string, requestBody: ResourceProvidersUpdate): Observable<CustomRPManifest> {
			return this.http.patch<CustomRPManifest>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.CustomProviders/resourceProviders/' + (resourceProviderName == null ? '' : encodeURIComponent(resourceProviderName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets all association for the given scope.
		 * Get {scope}/providers/Microsoft.CustomProviders/associations
		 * @param {string} scope The scope of the association.
		 * @param {string} api_version The API version to be used with the HTTP request.
		 * @return {AssociationsList} OK. Returns all associations for the given scope.
		 */
		Associations_ListAll(scope: string, api_version: string): Observable<AssociationsList> {
			return this.http.get<AssociationsList>(this.baseUri + (scope == null ? '' : encodeURIComponent(scope)) + '/providers/Microsoft.CustomProviders/associations&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)) + '', {});
		}

		/**
		 * Get an association.
		 * Get {scope}/providers/Microsoft.CustomProviders/associations/{associationName}
		 * @param {string} scope The scope of the association.
		 * @param {string} associationName The name of the association.
		 * @param {string} api_version The API version to be used with the HTTP request.
		 * @return {Association} OK. Returns association.
		 */
		Associations_Get(scope: string, associationName: string, api_version: string): Observable<Association> {
			return this.http.get<Association>(this.baseUri + (scope == null ? '' : encodeURIComponent(scope)) + '/providers/Microsoft.CustomProviders/associations/' + (associationName == null ? '' : encodeURIComponent(associationName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)) + '', {});
		}

		/**
		 * Create or update an association.
		 * Put {scope}/providers/Microsoft.CustomProviders/associations/{associationName}
		 * @param {string} scope The scope of the association. The scope can be any valid REST resource instance. For example, use '/subscriptions/{subscription-id}/resourceGroups/{resource-group-name}/providers/Microsoft.Compute/virtualMachines/{vm-name}' for a virtual machine resource.
		 * @param {string} associationName The name of the association.
		 * @param {string} api_version The API version to be used with the HTTP request.
		 * @param {Association} requestBody The parameters required to create or update an association.
		 * @return {Association} OK. Association already exists and the changes have been accepted.
		 */
		Associations_CreateOrUpdate(scope: string, associationName: string, api_version: string, requestBody: Association): Observable<Association> {
			return this.http.put<Association>(this.baseUri + (scope == null ? '' : encodeURIComponent(scope)) + '/providers/Microsoft.CustomProviders/associations/' + (associationName == null ? '' : encodeURIComponent(associationName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)) + '', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Delete an association.
		 * Delete {scope}/providers/Microsoft.CustomProviders/associations/{associationName}
		 * @param {string} scope The scope of the association.
		 * @param {string} associationName The name of the association.
		 * @param {string} api_version The API version to be used with the HTTP request.
		 * @return {void} OK. Association deleted.
		 */
		Associations_Delete(scope: string, associationName: string, api_version: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + (scope == null ? '' : encodeURIComponent(scope)) + '/providers/Microsoft.CustomProviders/associations/' + (associationName == null ? '' : encodeURIComponent(associationName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)) + '', { observe: 'response', responseType: 'text' });
		}
	}

}

