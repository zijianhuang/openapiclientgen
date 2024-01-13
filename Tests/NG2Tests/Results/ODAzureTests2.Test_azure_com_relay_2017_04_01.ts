import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** Namespace/Relay Connection String */
	export interface AccessKeys {

		/** A string that describes the authorization rule. */
		keyName?: string | null;

		/** Primary connection string of the created namespace authorization rule. */
		primaryConnectionString?: string | null;

		/** A base64-encoded 256-bit primary key for signing and validating the SAS token. */
		primaryKey?: string | null;

		/** Secondary connection string of the created namespace authorization rule. */
		secondaryConnectionString?: string | null;

		/** A base64-encoded 256-bit secondary key for signing and validating the SAS token. */
		secondaryKey?: string | null;
	}

	/** Namespace/Relay Connection String */
	export interface AccessKeysFormProperties {

		/** A string that describes the authorization rule. */
		keyName: FormControl<string | null | undefined>,

		/** Primary connection string of the created namespace authorization rule. */
		primaryConnectionString: FormControl<string | null | undefined>,

		/** A base64-encoded 256-bit primary key for signing and validating the SAS token. */
		primaryKey: FormControl<string | null | undefined>,

		/** Secondary connection string of the created namespace authorization rule. */
		secondaryConnectionString: FormControl<string | null | undefined>,

		/** A base64-encoded 256-bit secondary key for signing and validating the SAS token. */
		secondaryKey: FormControl<string | null | undefined>,
	}
	export function CreateAccessKeysFormGroup() {
		return new FormGroup<AccessKeysFormProperties>({
			keyName: new FormControl<string | null | undefined>(undefined),
			primaryConnectionString: new FormControl<string | null | undefined>(undefined),
			primaryKey: new FormControl<string | null | undefined>(undefined),
			secondaryConnectionString: new FormControl<string | null | undefined>(undefined),
			secondaryKey: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Description of a namespace authorization rule. */
	export interface AuthorizationRule extends Resource {

		/**
		 * Authorization rule properties.
		 * Required
		 */
		properties: any;
	}

	/** Description of a namespace authorization rule. */
	export interface AuthorizationRuleFormProperties extends ResourceFormProperties {

		/**
		 * Authorization rule properties.
		 * Required
		 */
		properties: FormControl<any | null | undefined>,
	}
	export function CreateAuthorizationRuleFormGroup() {
		return new FormGroup<AuthorizationRuleFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
			properties: new FormControl<any | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The response from the list namespace operation. */
	export interface AuthorizationRuleListResult {

		/** Link to the next set of results. Not empty if value contains incomplete list of authorization rules. */
		nextLink?: string | null;

		/** Result of the list authorization rules operation. */
		value?: Array<AuthorizationRule>;
	}

	/** The response from the list namespace operation. */
	export interface AuthorizationRuleListResultFormProperties {

		/** Link to the next set of results. Not empty if value contains incomplete list of authorization rules. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateAuthorizationRuleListResultFormGroup() {
		return new FormGroup<AuthorizationRuleListResultFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Description of the check name availability request properties. */
	export interface CheckNameAvailability {

		/**
		 * The namespace name to check for availability. The namespace name can contain only letters, numbers, and hyphens. The namespace must start with a letter, and it must end with a letter or number.
		 * Required
		 */
		name: string;
	}

	/** Description of the check name availability request properties. */
	export interface CheckNameAvailabilityFormProperties {

		/**
		 * The namespace name to check for availability. The namespace name can contain only letters, numbers, and hyphens. The namespace must start with a letter, and it must end with a letter or number.
		 * Required
		 */
		name: FormControl<string | null | undefined>,
	}
	export function CreateCheckNameAvailabilityFormGroup() {
		return new FormGroup<CheckNameAvailabilityFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Description of the check name availability request properties. */
	export interface CheckNameAvailabilityResult {

		/** The detailed info regarding the reason associated with the namespace. */
		message?: string | null;

		/** Value indicating namespace is available. Returns true if the namespace is available; otherwise, false. */
		nameAvailable?: boolean | null;

		/** Specifies the reason for the unavailability of the service. */
		reason?: CheckNameAvailabilityResultReason | null;
	}

	/** Description of the check name availability request properties. */
	export interface CheckNameAvailabilityResultFormProperties {

		/** The detailed info regarding the reason associated with the namespace. */
		message: FormControl<string | null | undefined>,

		/** Value indicating namespace is available. Returns true if the namespace is available; otherwise, false. */
		nameAvailable: FormControl<boolean | null | undefined>,

		/** Specifies the reason for the unavailability of the service. */
		reason: FormControl<CheckNameAvailabilityResultReason | null | undefined>,
	}
	export function CreateCheckNameAvailabilityResultFormGroup() {
		return new FormGroup<CheckNameAvailabilityResultFormProperties>({
			message: new FormControl<string | null | undefined>(undefined),
			nameAvailable: new FormControl<boolean | null | undefined>(undefined),
			reason: new FormControl<CheckNameAvailabilityResultReason | null | undefined>(undefined),
		});

	}

	export enum CheckNameAvailabilityResultReason { None = 0, InvalidName = 1, SubscriptionIsDisabled = 2, NameInUse = 3, NameInLockdown = 4, TooManyNamespaceInCurrentSubscription = 5 }


	/** Error reponse indicates Relay service is not able to process the incoming request. The reason is provided in the error message. */
	export interface ErrorResponse {

		/** Error code. */
		code?: string | null;

		/** Error message indicating why the operation failed. */
		message?: string | null;
	}

	/** Error reponse indicates Relay service is not able to process the incoming request. The reason is provided in the error message. */
	export interface ErrorResponseFormProperties {

		/** Error code. */
		code: FormControl<string | null | undefined>,

		/** Error message indicating why the operation failed. */
		message: FormControl<string | null | undefined>,
	}
	export function CreateErrorResponseFormGroup() {
		return new FormGroup<ErrorResponseFormProperties>({
			code: new FormControl<string | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Description of hybrid connection resource. */
	export interface HybridConnection extends Resource {

		/** Properties of the HybridConnection. */
		properties?: any;
	}

	/** Description of hybrid connection resource. */
	export interface HybridConnectionFormProperties extends ResourceFormProperties {

		/** Properties of the HybridConnection. */
		properties: FormControl<any | null | undefined>,
	}
	export function CreateHybridConnectionFormGroup() {
		return new FormGroup<HybridConnectionFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
			properties: new FormControl<any | null | undefined>(undefined),
		});

	}


	/** The response of the list hybrid connection operation. */
	export interface HybridConnectionListResult {

		/** Link to the next set of results. Not empty if value contains incomplete list hybrid connection operation. */
		nextLink?: string | null;

		/** Result of the list hybrid connections. */
		value?: Array<HybridConnection>;
	}

	/** The response of the list hybrid connection operation. */
	export interface HybridConnectionListResultFormProperties {

		/** Link to the next set of results. Not empty if value contains incomplete list hybrid connection operation. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateHybridConnectionListResultFormGroup() {
		return new FormGroup<HybridConnectionListResultFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A Relay REST API operation. */
	export interface Operation {

		/** The object that represents the operation. */
		display?: any;

		/** Operation name: {provider}/{resource}/{operation} */
		name?: string | null;
	}

	/** A Relay REST API operation. */
	export interface OperationFormProperties {

		/** The object that represents the operation. */
		display: FormControl<any | null | undefined>,

		/** Operation name: {provider}/{resource}/{operation} */
		name: FormControl<string | null | undefined>,
	}
	export function CreateOperationFormGroup() {
		return new FormGroup<OperationFormProperties>({
			display: new FormControl<any | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Result of the request to list Relay operations. It contains a list of operations and a URL link to get the next set of results. */
	export interface OperationListResult {

		/** URL to get the next set of operation list results if there are any. */
		nextLink?: string | null;

		/** List of Relay operations supported by resource provider. */
		value?: Array<Operation>;
	}

	/** Result of the request to list Relay operations. It contains a list of operations and a URL link to get the next set of results. */
	export interface OperationListResultFormProperties {

		/** URL to get the next set of operation list results if there are any. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateOperationListResultFormGroup() {
		return new FormGroup<OperationListResultFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Parameters supplied to the regenerate authorization rule operation, specifies which key neeeds to be reset. */
	export interface RegenerateAccessKeyParameters {

		/** Optional. If the key value is provided, this is set to key type, or autogenerated key value set for key type. */
		key?: string | null;

		/**
		 * The access key to regenerate.
		 * Required
		 */
		keyType: RegenerateAccessKeyParametersKeyType;
	}

	/** Parameters supplied to the regenerate authorization rule operation, specifies which key neeeds to be reset. */
	export interface RegenerateAccessKeyParametersFormProperties {

		/** Optional. If the key value is provided, this is set to key type, or autogenerated key value set for key type. */
		key: FormControl<string | null | undefined>,

		/**
		 * The access key to regenerate.
		 * Required
		 */
		keyType: FormControl<RegenerateAccessKeyParametersKeyType | null | undefined>,
	}
	export function CreateRegenerateAccessKeyParametersFormGroup() {
		return new FormGroup<RegenerateAccessKeyParametersFormProperties>({
			key: new FormControl<string | null | undefined>(undefined),
			keyType: new FormControl<RegenerateAccessKeyParametersKeyType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum RegenerateAccessKeyParametersKeyType { PrimaryKey = 0, SecondaryKey = 1 }


	/** Description of a namespace resource. */
	export interface RelayNamespace extends TrackedResource {

		/** Properties of the namespace. */
		properties?: RelayNamespaceProperties;

		/** SKU of the namespace. */
		sku?: Sku;
	}

	/** Description of a namespace resource. */
	export interface RelayNamespaceFormProperties extends TrackedResourceFormProperties {
	}
	export function CreateRelayNamespaceFormGroup() {
		return new FormGroup<RelayNamespaceFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
			location: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}


	/** SKU of the namespace. */
	export interface Sku {

		/**
		 * Name of this SKU.
		 * Required
		 */
		name: SkuName;

		/** The tier of this SKU. */
		tier?: SkuName | null;
	}

	/** SKU of the namespace. */
	export interface SkuFormProperties {

		/**
		 * Name of this SKU.
		 * Required
		 */
		name: FormControl<SkuName | null | undefined>,

		/** The tier of this SKU. */
		tier: FormControl<SkuName | null | undefined>,
	}
	export function CreateSkuFormGroup() {
		return new FormGroup<SkuFormProperties>({
			name: new FormControl<SkuName | null | undefined>(undefined, [Validators.required]),
			tier: new FormControl<SkuName | null | undefined>(undefined),
		});

	}

	export enum SkuName { Standard = 0 }


	/** The response from the list namespace operation. */
	export interface RelayNamespaceListResult {

		/** Link to the next set of results. Not empty if value contains incomplete list of namespaces. */
		nextLink?: string | null;

		/** Result of the list namespace operation. */
		value?: Array<RelayNamespace>;
	}

	/** The response from the list namespace operation. */
	export interface RelayNamespaceListResultFormProperties {

		/** Link to the next set of results. Not empty if value contains incomplete list of namespaces. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateRelayNamespaceListResultFormGroup() {
		return new FormGroup<RelayNamespaceListResultFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Properties of the namespace. */
	export interface RelayNamespaceProperties {

		/** The time the namespace was created. */
		createdAt?: Date | null;

		/** Identifier for Azure Insights metrics. */
		metricId?: string | null;
		provisioningState?: RelayNamespacePropertiesProvisioningState | null;

		/** Endpoint you can use to perform Service Bus operations. */
		serviceBusEndpoint?: string | null;

		/** The time the namespace was updated. */
		updatedAt?: Date | null;
	}

	/** Properties of the namespace. */
	export interface RelayNamespacePropertiesFormProperties {

		/** The time the namespace was created. */
		createdAt: FormControl<Date | null | undefined>,

		/** Identifier for Azure Insights metrics. */
		metricId: FormControl<string | null | undefined>,
		provisioningState: FormControl<RelayNamespacePropertiesProvisioningState | null | undefined>,

		/** Endpoint you can use to perform Service Bus operations. */
		serviceBusEndpoint: FormControl<string | null | undefined>,

		/** The time the namespace was updated. */
		updatedAt: FormControl<Date | null | undefined>,
	}
	export function CreateRelayNamespacePropertiesFormGroup() {
		return new FormGroup<RelayNamespacePropertiesFormProperties>({
			createdAt: new FormControl<Date | null | undefined>(undefined),
			metricId: new FormControl<string | null | undefined>(undefined),
			provisioningState: new FormControl<RelayNamespacePropertiesProvisioningState | null | undefined>(undefined),
			serviceBusEndpoint: new FormControl<string | null | undefined>(undefined),
			updatedAt: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export enum RelayNamespacePropertiesProvisioningState { Created = 0, Succeeded = 1, Deleted = 2, Failed = 3, Updating = 4, Unknown = 5 }


	/** Description of a namespace resource. */
	export interface RelayUpdateParameters extends ResourceNamespacePatch {

		/** Properties of the namespace. */
		properties?: RelayNamespaceProperties;

		/** SKU of the namespace. */
		sku?: Sku;
	}

	/** Description of a namespace resource. */
	export interface RelayUpdateParametersFormProperties extends ResourceNamespacePatchFormProperties {
	}
	export function CreateRelayUpdateParametersFormGroup() {
		return new FormGroup<RelayUpdateParametersFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}


	/** The resource definition. */
	export interface Resource {

		/** Resource ID. */
		id?: string | null;

		/** Resource name. */
		name?: string | null;

		/** Resource type. */
		type?: string | null;
	}

	/** The resource definition. */
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


	/** Definition of resource. */
	export interface ResourceNamespacePatch extends Resource {

		/** Resource tags. */
		tags?: {[id: string]: string };
	}

	/** Definition of resource. */
	export interface ResourceNamespacePatchFormProperties extends ResourceFormProperties {

		/** Resource tags. */
		tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateResourceNamespacePatchFormGroup() {
		return new FormGroup<ResourceNamespacePatchFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}


	/** Definition of resource. */
	export interface TrackedResource extends Resource {

		/**
		 * Resource location.
		 * Required
		 */
		location: string;

		/** Resource tags. */
		tags?: {[id: string]: string };
	}

	/** Definition of resource. */
	export interface TrackedResourceFormProperties extends ResourceFormProperties {

		/**
		 * Resource location.
		 * Required
		 */
		location: FormControl<string | null | undefined>,

		/** Resource tags. */
		tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateTrackedResourceFormGroup() {
		return new FormGroup<TrackedResourceFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
			location: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}


	/** Specifies the reason for the unavailability of the service. */
	export enum UnavailableReason { None = 0, InvalidName = 1, SubscriptionIsDisabled = 2, NameInUse = 3, NameInLockdown = 4, TooManyNamespaceInCurrentSubscription = 5 }


	/** Description of the WCF relay resource. */
	export interface WcfRelay extends Resource {

		/** Properties of the WCF relay. */
		properties?: any;
	}

	/** Description of the WCF relay resource. */
	export interface WcfRelayFormProperties extends ResourceFormProperties {

		/** Properties of the WCF relay. */
		properties: FormControl<any | null | undefined>,
	}
	export function CreateWcfRelayFormGroup() {
		return new FormGroup<WcfRelayFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
			properties: new FormControl<any | null | undefined>(undefined),
		});

	}


	/** The response of the list WCF relay operation. */
	export interface WcfRelaysListResult {

		/** Link to the next set of results. Not empty if value contains incomplete list of WCF relays. */
		nextLink?: string | null;

		/** Result of the list WCF relay operation. */
		value?: Array<WcfRelay>;
	}

	/** The response of the list WCF relay operation. */
	export interface WcfRelaysListResultFormProperties {

		/** Link to the next set of results. Not empty if value contains incomplete list of WCF relays. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateWcfRelaysListResultFormGroup() {
		return new FormGroup<WcfRelaysListResultFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Lists all available Relay REST API operations.
		 * Get providers/Microsoft.Relay/operations
		 * @param {string} api_version Client API version.
		 * @return {OperationListResult} OK. The request has succeeded.
		 */
		Operations_List(api_version: string): Observable<OperationListResult> {
			return this.http.get<OperationListResult>(this.baseUri + 'providers/Microsoft.Relay/operations?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Check the specified namespace name availability.
		 * Post subscriptions/{subscriptionId}/providers/Microsoft.Relay/checkNameAvailability
		 * @param {string} api_version Client API version.
		 * @param {string} subscriptionId Subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {CheckNameAvailability} requestBody Parameters to check availability of the specified namespace name.
		 * @return {CheckNameAvailabilityResult} Check availability returned successfully.
		 */
		Namespaces_CheckNameAvailability(api_version: string, subscriptionId: string, requestBody: CheckNameAvailability): Observable<CheckNameAvailabilityResult> {
			return this.http.post<CheckNameAvailabilityResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/providers/Microsoft.Relay/checkNameAvailability?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists all the available namespaces within the subscription regardless of the resourceGroups.
		 * Get subscriptions/{subscriptionId}/providers/Microsoft.Relay/namespaces
		 * @param {string} api_version Client API version.
		 * @param {string} subscriptionId Subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @return {RelayNamespaceListResult} Namespaces returned successfully
		 */
		Namespaces_List(api_version: string, subscriptionId: string): Observable<RelayNamespaceListResult> {
			return this.http.get<RelayNamespaceListResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/providers/Microsoft.Relay/namespaces?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Lists all the available namespaces within the ResourceGroup.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Relay/namespaces
		 * @param {string} resourceGroupName Name of the Resource group within the Azure subscription.
		 * @param {string} api_version Client API version.
		 * @param {string} subscriptionId Subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @return {RelayNamespaceListResult} Namespaces by resource group returned successfully
		 */
		Namespaces_ListByResourceGroup(resourceGroupName: string, api_version: string, subscriptionId: string): Observable<RelayNamespaceListResult> {
			return this.http.get<RelayNamespaceListResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Relay/namespaces&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Returns the description for the specified namespace.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Relay/namespaces/{namespaceName}
		 * @param {string} resourceGroupName Name of the Resource group within the Azure subscription.
		 * @param {string} namespaceName The namespace name
		 * @param {string} api_version Client API version.
		 * @param {string} subscriptionId Subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @return {RelayNamespace} Namespace description returned successfully.
		 */
		Namespaces_Get(resourceGroupName: string, namespaceName: string, api_version: string, subscriptionId: string): Observable<RelayNamespace> {
			return this.http.get<RelayNamespace>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Relay/namespaces/' + (namespaceName == null ? '' : encodeURIComponent(namespaceName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Create Azure Relay namespace.
		 * Put subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Relay/namespaces/{namespaceName}
		 * @param {string} resourceGroupName Name of the Resource group within the Azure subscription.
		 * @param {string} namespaceName The namespace name
		 * @param {string} api_version Client API version.
		 * @param {string} subscriptionId Subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {RelayNamespace} requestBody Parameters supplied to create a namespace resource.
		 * @return {RelayNamespace} Namespace create request succeeded.
		 */
		Namespaces_CreateOrUpdate(resourceGroupName: string, namespaceName: string, api_version: string, subscriptionId: string, requestBody: RelayNamespace): Observable<RelayNamespace> {
			return this.http.put<RelayNamespace>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Relay/namespaces/' + (namespaceName == null ? '' : encodeURIComponent(namespaceName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes an existing namespace. This operation also removes all associated resources under the namespace.
		 * Delete subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Relay/namespaces/{namespaceName}
		 * @param {string} resourceGroupName Name of the Resource group within the Azure subscription.
		 * @param {string} namespaceName The namespace name
		 * @param {string} api_version Client API version.
		 * @param {string} subscriptionId Subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @return {void} Namespace delete request succeeded.
		 */
		Namespaces_Delete(resourceGroupName: string, namespaceName: string, api_version: string, subscriptionId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Relay/namespaces/' + (namespaceName == null ? '' : encodeURIComponent(namespaceName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Creates or updates a namespace. Once created, this namespace's resource manifest is immutable. This operation is idempotent.
		 * Patch subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Relay/namespaces/{namespaceName}
		 * @param {string} resourceGroupName Name of the Resource group within the Azure subscription.
		 * @param {string} namespaceName The namespace name
		 * @param {string} api_version Client API version.
		 * @param {string} subscriptionId Subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {RelayUpdateParameters} requestBody Parameters for updating a namespace resource.
		 * @return {RelayNamespace} Namespace successfuly updated.
		 */
		Namespaces_Update(resourceGroupName: string, namespaceName: string, api_version: string, subscriptionId: string, requestBody: RelayUpdateParameters): Observable<RelayNamespace> {
			return this.http.patch<RelayNamespace>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Relay/namespaces/' + (namespaceName == null ? '' : encodeURIComponent(namespaceName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Authorization rules for a namespace.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Relay/namespaces/{namespaceName}/authorizationRules
		 * @param {string} resourceGroupName Name of the Resource group within the Azure subscription.
		 * @param {string} namespaceName The namespace name
		 * @param {string} api_version Client API version.
		 * @param {string} subscriptionId Subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @return {AuthorizationRuleListResult} Namespace authorization rule returned successfully.
		 */
		Namespaces_ListAuthorizationRules(resourceGroupName: string, namespaceName: string, api_version: string, subscriptionId: string): Observable<AuthorizationRuleListResult> {
			return this.http.get<AuthorizationRuleListResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Relay/namespaces/' + (namespaceName == null ? '' : encodeURIComponent(namespaceName)) + '/authorizationRules&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Authorization rule for a namespace by name.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Relay/namespaces/{namespaceName}/authorizationRules/{authorizationRuleName}
		 * @param {string} resourceGroupName Name of the Resource group within the Azure subscription.
		 * @param {string} namespaceName The namespace name
		 * @param {string} authorizationRuleName The authorization rule name.
		 * @param {string} api_version Client API version.
		 * @param {string} subscriptionId Subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @return {AuthorizationRule} Namespace Authorization rule returned successfully.
		 */
		Namespaces_GetAuthorizationRule(resourceGroupName: string, namespaceName: string, authorizationRuleName: string, api_version: string, subscriptionId: string): Observable<AuthorizationRule> {
			return this.http.get<AuthorizationRule>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Relay/namespaces/' + (namespaceName == null ? '' : encodeURIComponent(namespaceName)) + '/authorizationRules/' + (authorizationRuleName == null ? '' : encodeURIComponent(authorizationRuleName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Creates or updates an authorization rule for a namespace.
		 * Put subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Relay/namespaces/{namespaceName}/authorizationRules/{authorizationRuleName}
		 * @param {string} resourceGroupName Name of the Resource group within the Azure subscription.
		 * @param {string} namespaceName The namespace name
		 * @param {string} authorizationRuleName The authorization rule name.
		 * @param {string} api_version Client API version.
		 * @param {string} subscriptionId Subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {AuthorizationRule} requestBody The authorization rule parameters.
		 * @return {AuthorizationRule} Request to create namespace authorization rule succeeded.
		 */
		Namespaces_CreateOrUpdateAuthorizationRule(resourceGroupName: string, namespaceName: string, authorizationRuleName: string, api_version: string, subscriptionId: string, requestBody: AuthorizationRule): Observable<AuthorizationRule> {
			return this.http.put<AuthorizationRule>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Relay/namespaces/' + (namespaceName == null ? '' : encodeURIComponent(namespaceName)) + '/authorizationRules/' + (authorizationRuleName == null ? '' : encodeURIComponent(authorizationRuleName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a namespace authorization rule.
		 * Delete subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Relay/namespaces/{namespaceName}/authorizationRules/{authorizationRuleName}
		 * @param {string} resourceGroupName Name of the Resource group within the Azure subscription.
		 * @param {string} namespaceName The namespace name
		 * @param {string} authorizationRuleName The authorization rule name.
		 * @param {string} api_version Client API version.
		 * @param {string} subscriptionId Subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @return {void} Request to delete namespace authorization rule succeeded.
		 */
		Namespaces_DeleteAuthorizationRule(resourceGroupName: string, namespaceName: string, authorizationRuleName: string, api_version: string, subscriptionId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Relay/namespaces/' + (namespaceName == null ? '' : encodeURIComponent(namespaceName)) + '/authorizationRules/' + (authorizationRuleName == null ? '' : encodeURIComponent(authorizationRuleName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Primary and secondary connection strings to the namespace.
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Relay/namespaces/{namespaceName}/authorizationRules/{authorizationRuleName}/listKeys
		 * @param {string} resourceGroupName Name of the Resource group within the Azure subscription.
		 * @param {string} namespaceName The namespace name
		 * @param {string} authorizationRuleName The authorization rule name.
		 * @param {string} api_version Client API version.
		 * @param {string} subscriptionId Subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @return {AccessKeys} Successful.
		 */
		Namespaces_ListKeys(resourceGroupName: string, namespaceName: string, authorizationRuleName: string, api_version: string, subscriptionId: string): Observable<AccessKeys> {
			return this.http.post<AccessKeys>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Relay/namespaces/' + (namespaceName == null ? '' : encodeURIComponent(namespaceName)) + '/authorizationRules/' + (authorizationRuleName == null ? '' : encodeURIComponent(authorizationRuleName)) + '/listKeys&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), null, {});
		}

		/**
		 * Regenerates the primary or secondary connection strings to the namespace.
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Relay/namespaces/{namespaceName}/authorizationRules/{authorizationRuleName}/regenerateKeys
		 * @param {string} resourceGroupName Name of the Resource group within the Azure subscription.
		 * @param {string} namespaceName The namespace name
		 * @param {string} authorizationRuleName The authorization rule name.
		 * @param {string} api_version Client API version.
		 * @param {string} subscriptionId Subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {RegenerateAccessKeyParameters} requestBody Parameters supplied to regenerate authorization rule.
		 * @return {AccessKeys} Successful.
		 */
		Namespaces_RegenerateKeys(resourceGroupName: string, namespaceName: string, authorizationRuleName: string, api_version: string, subscriptionId: string, requestBody: RegenerateAccessKeyParameters): Observable<AccessKeys> {
			return this.http.post<AccessKeys>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Relay/namespaces/' + (namespaceName == null ? '' : encodeURIComponent(namespaceName)) + '/authorizationRules/' + (authorizationRuleName == null ? '' : encodeURIComponent(authorizationRuleName)) + '/regenerateKeys&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists the hybrid connection within the namespace.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Relay/namespaces/{namespaceName}/hybridConnections
		 * @param {string} resourceGroupName Name of the Resource group within the Azure subscription.
		 * @param {string} namespaceName The namespace name
		 * @param {string} api_version Client API version.
		 * @param {string} subscriptionId Subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @return {HybridConnectionListResult} Request to retrieve hybrid connections by namespace succeeded.
		 */
		HybridConnections_ListByNamespace(resourceGroupName: string, namespaceName: string, api_version: string, subscriptionId: string): Observable<HybridConnectionListResult> {
			return this.http.get<HybridConnectionListResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Relay/namespaces/' + (namespaceName == null ? '' : encodeURIComponent(namespaceName)) + '/hybridConnections&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Returns the description for the specified hybrid connection.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Relay/namespaces/{namespaceName}/hybridConnections/{hybridConnectionName}
		 * @param {string} resourceGroupName Name of the Resource group within the Azure subscription.
		 * @param {string} namespaceName The namespace name
		 * @param {string} hybridConnectionName The hybrid connection name.
		 * @param {string} api_version Client API version.
		 * @param {string} subscriptionId Subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @return {HybridConnection} Successfully retrieved description for the hybrid connection.
		 */
		HybridConnections_Get(resourceGroupName: string, namespaceName: string, hybridConnectionName: string, api_version: string, subscriptionId: string): Observable<HybridConnection> {
			return this.http.get<HybridConnection>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Relay/namespaces/' + (namespaceName == null ? '' : encodeURIComponent(namespaceName)) + '/hybridConnections/' + (hybridConnectionName == null ? '' : encodeURIComponent(hybridConnectionName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Creates or updates a service hybrid connection. This operation is idempotent.
		 * Put subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Relay/namespaces/{namespaceName}/hybridConnections/{hybridConnectionName}
		 * @param {string} resourceGroupName Name of the Resource group within the Azure subscription.
		 * @param {string} namespaceName The namespace name
		 * @param {string} hybridConnectionName The hybrid connection name.
		 * @param {string} api_version Client API version.
		 * @param {string} subscriptionId Subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {HybridConnection} requestBody Parameters supplied to create a hybrid connection.
		 * @return {HybridConnection} Request to create hybrid connections succeeded.
		 */
		HybridConnections_CreateOrUpdate(resourceGroupName: string, namespaceName: string, hybridConnectionName: string, api_version: string, subscriptionId: string, requestBody: HybridConnection): Observable<HybridConnection> {
			return this.http.put<HybridConnection>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Relay/namespaces/' + (namespaceName == null ? '' : encodeURIComponent(namespaceName)) + '/hybridConnections/' + (hybridConnectionName == null ? '' : encodeURIComponent(hybridConnectionName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a hybrid connection.
		 * Delete subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Relay/namespaces/{namespaceName}/hybridConnections/{hybridConnectionName}
		 * @param {string} resourceGroupName Name of the Resource group within the Azure subscription.
		 * @param {string} namespaceName The namespace name
		 * @param {string} hybridConnectionName The hybrid connection name.
		 * @param {string} api_version Client API version.
		 * @param {string} subscriptionId Subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @return {void} Request to delete hybrid connection succeeded.
		 */
		HybridConnections_Delete(resourceGroupName: string, namespaceName: string, hybridConnectionName: string, api_version: string, subscriptionId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Relay/namespaces/' + (namespaceName == null ? '' : encodeURIComponent(namespaceName)) + '/hybridConnections/' + (hybridConnectionName == null ? '' : encodeURIComponent(hybridConnectionName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Authorization rules for a hybrid connection.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Relay/namespaces/{namespaceName}/hybridConnections/{hybridConnectionName}/authorizationRules
		 * @param {string} resourceGroupName Name of the Resource group within the Azure subscription.
		 * @param {string} namespaceName The namespace name
		 * @param {string} hybridConnectionName The hybrid connection name.
		 * @param {string} api_version Client API version.
		 * @param {string} subscriptionId Subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @return {AuthorizationRuleListResult} Authorization rules successfully returned.
		 */
		HybridConnections_ListAuthorizationRules(resourceGroupName: string, namespaceName: string, hybridConnectionName: string, api_version: string, subscriptionId: string): Observable<AuthorizationRuleListResult> {
			return this.http.get<AuthorizationRuleListResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Relay/namespaces/' + (namespaceName == null ? '' : encodeURIComponent(namespaceName)) + '/hybridConnections/' + (hybridConnectionName == null ? '' : encodeURIComponent(hybridConnectionName)) + '/authorizationRules&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Hybrid connection authorization rule for a hybrid connection by name.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Relay/namespaces/{namespaceName}/hybridConnections/{hybridConnectionName}/authorizationRules/{authorizationRuleName}
		 * @param {string} resourceGroupName Name of the Resource group within the Azure subscription.
		 * @param {string} namespaceName The namespace name
		 * @param {string} hybridConnectionName The hybrid connection name.
		 * @param {string} authorizationRuleName The authorization rule name.
		 * @param {string} api_version Client API version.
		 * @param {string} subscriptionId Subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @return {AuthorizationRule} Hybrid connection authorization rule returned successfully.
		 */
		HybridConnections_GetAuthorizationRule(resourceGroupName: string, namespaceName: string, hybridConnectionName: string, authorizationRuleName: string, api_version: string, subscriptionId: string): Observable<AuthorizationRule> {
			return this.http.get<AuthorizationRule>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Relay/namespaces/' + (namespaceName == null ? '' : encodeURIComponent(namespaceName)) + '/hybridConnections/' + (hybridConnectionName == null ? '' : encodeURIComponent(hybridConnectionName)) + '/authorizationRules/' + (authorizationRuleName == null ? '' : encodeURIComponent(authorizationRuleName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Creates or updates an authorization rule for a hybrid connection.
		 * Put subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Relay/namespaces/{namespaceName}/hybridConnections/{hybridConnectionName}/authorizationRules/{authorizationRuleName}
		 * @param {string} resourceGroupName Name of the Resource group within the Azure subscription.
		 * @param {string} namespaceName The namespace name
		 * @param {string} hybridConnectionName The hybrid connection name.
		 * @param {string} authorizationRuleName The authorization rule name.
		 * @param {string} api_version Client API version.
		 * @param {string} subscriptionId Subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {AuthorizationRule} requestBody The authorization rule parameters.
		 * @return {AuthorizationRule} Hybrid connection authorization rule created.
		 */
		HybridConnections_CreateOrUpdateAuthorizationRule(resourceGroupName: string, namespaceName: string, hybridConnectionName: string, authorizationRuleName: string, api_version: string, subscriptionId: string, requestBody: AuthorizationRule): Observable<AuthorizationRule> {
			return this.http.put<AuthorizationRule>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Relay/namespaces/' + (namespaceName == null ? '' : encodeURIComponent(namespaceName)) + '/hybridConnections/' + (hybridConnectionName == null ? '' : encodeURIComponent(hybridConnectionName)) + '/authorizationRules/' + (authorizationRuleName == null ? '' : encodeURIComponent(authorizationRuleName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a hybrid connection authorization rule.
		 * Delete subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Relay/namespaces/{namespaceName}/hybridConnections/{hybridConnectionName}/authorizationRules/{authorizationRuleName}
		 * @param {string} resourceGroupName Name of the Resource group within the Azure subscription.
		 * @param {string} namespaceName The namespace name
		 * @param {string} hybridConnectionName The hybrid connection name.
		 * @param {string} authorizationRuleName The authorization rule name.
		 * @param {string} api_version Client API version.
		 * @param {string} subscriptionId Subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @return {void} Hybrid connection authorization rule deleted.
		 */
		HybridConnections_DeleteAuthorizationRule(resourceGroupName: string, namespaceName: string, hybridConnectionName: string, authorizationRuleName: string, api_version: string, subscriptionId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Relay/namespaces/' + (namespaceName == null ? '' : encodeURIComponent(namespaceName)) + '/hybridConnections/' + (hybridConnectionName == null ? '' : encodeURIComponent(hybridConnectionName)) + '/authorizationRules/' + (authorizationRuleName == null ? '' : encodeURIComponent(authorizationRuleName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Primary and secondary connection strings to the hybrid connection.
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Relay/namespaces/{namespaceName}/hybridConnections/{hybridConnectionName}/authorizationRules/{authorizationRuleName}/listKeys
		 * @param {string} resourceGroupName Name of the Resource group within the Azure subscription.
		 * @param {string} namespaceName The namespace name
		 * @param {string} hybridConnectionName The hybrid connection name.
		 * @param {string} authorizationRuleName The authorization rule name.
		 * @param {string} api_version Client API version.
		 * @param {string} subscriptionId Subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @return {AccessKeys} Request to retirve connection strings to the hybrid connection succeeded.
		 */
		HybridConnections_ListKeys(resourceGroupName: string, namespaceName: string, hybridConnectionName: string, authorizationRuleName: string, api_version: string, subscriptionId: string): Observable<AccessKeys> {
			return this.http.post<AccessKeys>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Relay/namespaces/' + (namespaceName == null ? '' : encodeURIComponent(namespaceName)) + '/hybridConnections/' + (hybridConnectionName == null ? '' : encodeURIComponent(hybridConnectionName)) + '/authorizationRules/' + (authorizationRuleName == null ? '' : encodeURIComponent(authorizationRuleName)) + '/listKeys&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), null, {});
		}

		/**
		 * Regenerates the primary or secondary connection strings to the hybrid connection.
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Relay/namespaces/{namespaceName}/hybridConnections/{hybridConnectionName}/authorizationRules/{authorizationRuleName}/regenerateKeys
		 * @param {string} resourceGroupName Name of the Resource group within the Azure subscription.
		 * @param {string} namespaceName The namespace name
		 * @param {string} hybridConnectionName The hybrid connection name.
		 * @param {string} authorizationRuleName The authorization rule name.
		 * @param {string} api_version Client API version.
		 * @param {string} subscriptionId Subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {RegenerateAccessKeyParameters} requestBody Parameters supplied to regenerate authorization rule.
		 * @return {AccessKeys} Request to regenerate connection strings to hybrid connection succeeded.
		 */
		HybridConnections_RegenerateKeys(resourceGroupName: string, namespaceName: string, hybridConnectionName: string, authorizationRuleName: string, api_version: string, subscriptionId: string, requestBody: RegenerateAccessKeyParameters): Observable<AccessKeys> {
			return this.http.post<AccessKeys>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Relay/namespaces/' + (namespaceName == null ? '' : encodeURIComponent(namespaceName)) + '/hybridConnections/' + (hybridConnectionName == null ? '' : encodeURIComponent(hybridConnectionName)) + '/authorizationRules/' + (authorizationRuleName == null ? '' : encodeURIComponent(authorizationRuleName)) + '/regenerateKeys&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists the WCF relays within the namespace.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Relay/namespaces/{namespaceName}/wcfRelays
		 * @param {string} resourceGroupName Name of the Resource group within the Azure subscription.
		 * @param {string} namespaceName The namespace name
		 * @param {string} api_version Client API version.
		 * @param {string} subscriptionId Subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @return {WcfRelaysListResult} WCF relays returned successfully.
		 */
		WCFRelays_ListByNamespace(resourceGroupName: string, namespaceName: string, api_version: string, subscriptionId: string): Observable<WcfRelaysListResult> {
			return this.http.get<WcfRelaysListResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Relay/namespaces/' + (namespaceName == null ? '' : encodeURIComponent(namespaceName)) + '/wcfRelays&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Returns the description for the specified WCF relay.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Relay/namespaces/{namespaceName}/wcfRelays/{relayName}
		 * @param {string} resourceGroupName Name of the Resource group within the Azure subscription.
		 * @param {string} namespaceName The namespace name
		 * @param {string} relayName The relay name.
		 * @param {string} api_version Client API version.
		 * @param {string} subscriptionId Subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @return {WcfRelay} Successfully retrieved WCF relay description.
		 */
		WCFRelays_Get(resourceGroupName: string, namespaceName: string, relayName: string, api_version: string, subscriptionId: string): Observable<WcfRelay> {
			return this.http.get<WcfRelay>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Relay/namespaces/' + (namespaceName == null ? '' : encodeURIComponent(namespaceName)) + '/wcfRelays/' + (relayName == null ? '' : encodeURIComponent(relayName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Creates or updates a WCF relay. This operation is idempotent.
		 * Put subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Relay/namespaces/{namespaceName}/wcfRelays/{relayName}
		 * @param {string} resourceGroupName Name of the Resource group within the Azure subscription.
		 * @param {string} namespaceName The namespace name
		 * @param {string} relayName The relay name.
		 * @param {string} api_version Client API version.
		 * @param {string} subscriptionId Subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {WcfRelay} requestBody Parameters supplied to create a WCF relay.
		 * @return {WcfRelay} Request to create WCF relay succeeded.
		 */
		WCFRelays_CreateOrUpdate(resourceGroupName: string, namespaceName: string, relayName: string, api_version: string, subscriptionId: string, requestBody: WcfRelay): Observable<WcfRelay> {
			return this.http.put<WcfRelay>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Relay/namespaces/' + (namespaceName == null ? '' : encodeURIComponent(namespaceName)) + '/wcfRelays/' + (relayName == null ? '' : encodeURIComponent(relayName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a WCF relay.
		 * Delete subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Relay/namespaces/{namespaceName}/wcfRelays/{relayName}
		 * @param {string} resourceGroupName Name of the Resource group within the Azure subscription.
		 * @param {string} namespaceName The namespace name
		 * @param {string} relayName The relay name.
		 * @param {string} api_version Client API version.
		 * @param {string} subscriptionId Subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @return {void} WCF relay deleted.
		 */
		WCFRelays_Delete(resourceGroupName: string, namespaceName: string, relayName: string, api_version: string, subscriptionId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Relay/namespaces/' + (namespaceName == null ? '' : encodeURIComponent(namespaceName)) + '/wcfRelays/' + (relayName == null ? '' : encodeURIComponent(relayName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Authorization rules for a WCF relay.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Relay/namespaces/{namespaceName}/wcfRelays/{relayName}/authorizationRules
		 * @param {string} resourceGroupName Name of the Resource group within the Azure subscription.
		 * @param {string} namespaceName The namespace name
		 * @param {string} relayName The relay name.
		 * @param {string} api_version Client API version.
		 * @param {string} subscriptionId Subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @return {AuthorizationRuleListResult} Authorization rules successfully returned.
		 */
		WCFRelays_ListAuthorizationRules(resourceGroupName: string, namespaceName: string, relayName: string, api_version: string, subscriptionId: string): Observable<AuthorizationRuleListResult> {
			return this.http.get<AuthorizationRuleListResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Relay/namespaces/' + (namespaceName == null ? '' : encodeURIComponent(namespaceName)) + '/wcfRelays/' + (relayName == null ? '' : encodeURIComponent(relayName)) + '/authorizationRules&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Get authorizationRule for a WCF relay by name.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Relay/namespaces/{namespaceName}/wcfRelays/{relayName}/authorizationRules/{authorizationRuleName}
		 * @param {string} resourceGroupName Name of the Resource group within the Azure subscription.
		 * @param {string} namespaceName The namespace name
		 * @param {string} relayName The relay name.
		 * @param {string} authorizationRuleName The authorization rule name.
		 * @param {string} api_version Client API version.
		 * @param {string} subscriptionId Subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @return {AuthorizationRule} Request for WCF relay authorization rule succeeded.
		 */
		WCFRelays_GetAuthorizationRule(resourceGroupName: string, namespaceName: string, relayName: string, authorizationRuleName: string, api_version: string, subscriptionId: string): Observable<AuthorizationRule> {
			return this.http.get<AuthorizationRule>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Relay/namespaces/' + (namespaceName == null ? '' : encodeURIComponent(namespaceName)) + '/wcfRelays/' + (relayName == null ? '' : encodeURIComponent(relayName)) + '/authorizationRules/' + (authorizationRuleName == null ? '' : encodeURIComponent(authorizationRuleName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Creates or updates an authorization rule for a WCF relay.
		 * Put subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Relay/namespaces/{namespaceName}/wcfRelays/{relayName}/authorizationRules/{authorizationRuleName}
		 * @param {string} resourceGroupName Name of the Resource group within the Azure subscription.
		 * @param {string} namespaceName The namespace name
		 * @param {string} relayName The relay name.
		 * @param {string} authorizationRuleName The authorization rule name.
		 * @param {string} api_version Client API version.
		 * @param {string} subscriptionId Subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {AuthorizationRule} requestBody The authorization rule parameters.
		 * @return {AuthorizationRule} WCF relay authorization rule created.
		 */
		WCFRelays_CreateOrUpdateAuthorizationRule(resourceGroupName: string, namespaceName: string, relayName: string, authorizationRuleName: string, api_version: string, subscriptionId: string, requestBody: AuthorizationRule): Observable<AuthorizationRule> {
			return this.http.put<AuthorizationRule>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Relay/namespaces/' + (namespaceName == null ? '' : encodeURIComponent(namespaceName)) + '/wcfRelays/' + (relayName == null ? '' : encodeURIComponent(relayName)) + '/authorizationRules/' + (authorizationRuleName == null ? '' : encodeURIComponent(authorizationRuleName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a WCF relay authorization rule.
		 * Delete subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Relay/namespaces/{namespaceName}/wcfRelays/{relayName}/authorizationRules/{authorizationRuleName}
		 * @param {string} resourceGroupName Name of the Resource group within the Azure subscription.
		 * @param {string} namespaceName The namespace name
		 * @param {string} relayName The relay name.
		 * @param {string} authorizationRuleName The authorization rule name.
		 * @param {string} api_version Client API version.
		 * @param {string} subscriptionId Subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @return {void} Request to delete WCF relay authorization rule succeeded.
		 */
		WCFRelays_DeleteAuthorizationRule(resourceGroupName: string, namespaceName: string, relayName: string, authorizationRuleName: string, api_version: string, subscriptionId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Relay/namespaces/' + (namespaceName == null ? '' : encodeURIComponent(namespaceName)) + '/wcfRelays/' + (relayName == null ? '' : encodeURIComponent(relayName)) + '/authorizationRules/' + (authorizationRuleName == null ? '' : encodeURIComponent(authorizationRuleName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Primary and secondary connection strings to the WCF relay.
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Relay/namespaces/{namespaceName}/wcfRelays/{relayName}/authorizationRules/{authorizationRuleName}/listKeys
		 * @param {string} resourceGroupName Name of the Resource group within the Azure subscription.
		 * @param {string} namespaceName The namespace name
		 * @param {string} relayName The relay name.
		 * @param {string} authorizationRuleName The authorization rule name.
		 * @param {string} api_version Client API version.
		 * @param {string} subscriptionId Subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @return {AccessKeys} Successful.
		 */
		WCFRelays_ListKeys(resourceGroupName: string, namespaceName: string, relayName: string, authorizationRuleName: string, api_version: string, subscriptionId: string): Observable<AccessKeys> {
			return this.http.post<AccessKeys>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Relay/namespaces/' + (namespaceName == null ? '' : encodeURIComponent(namespaceName)) + '/wcfRelays/' + (relayName == null ? '' : encodeURIComponent(relayName)) + '/authorizationRules/' + (authorizationRuleName == null ? '' : encodeURIComponent(authorizationRuleName)) + '/listKeys&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), null, {});
		}

		/**
		 * Regenerates the primary or secondary connection strings to the WCF relay.
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Relay/namespaces/{namespaceName}/wcfRelays/{relayName}/authorizationRules/{authorizationRuleName}/regenerateKeys
		 * @param {string} resourceGroupName Name of the Resource group within the Azure subscription.
		 * @param {string} namespaceName The namespace name
		 * @param {string} relayName The relay name.
		 * @param {string} authorizationRuleName The authorization rule name.
		 * @param {string} api_version Client API version.
		 * @param {string} subscriptionId Subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {RegenerateAccessKeyParameters} requestBody Parameters supplied to regenerate authorization rule.
		 * @return {AccessKeys} Successful.
		 */
		WCFRelays_RegenerateKeys(resourceGroupName: string, namespaceName: string, relayName: string, authorizationRuleName: string, api_version: string, subscriptionId: string, requestBody: RegenerateAccessKeyParameters): Observable<AccessKeys> {
			return this.http.post<AccessKeys>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Relay/namespaces/' + (namespaceName == null ? '' : encodeURIComponent(namespaceName)) + '/wcfRelays/' + (relayName == null ? '' : encodeURIComponent(relayName)) + '/authorizationRules/' + (authorizationRuleName == null ? '' : encodeURIComponent(authorizationRuleName)) + '/regenerateKeys&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

}

