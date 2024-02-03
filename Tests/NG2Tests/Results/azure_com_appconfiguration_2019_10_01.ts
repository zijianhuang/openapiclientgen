import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** An API key used for authenticating with a configuration store endpoint. */
	export interface ApiKey {

		/** A connection string that can be used by supporting clients for authentication. */
		connectionString?: string | null;

		/** The key ID. */
		id?: string | null;

		/** The last time any of the key's properties were modified. */
		lastModified?: Date | null;

		/** A name for the key describing its usage. */
		name?: string | null;

		/** Whether this key can only be used for read operations. */
		readOnly?: boolean | null;

		/** The value of the key that is used for authentication purposes. */
		value?: string | null;
	}

	/** An API key used for authenticating with a configuration store endpoint. */
	export interface ApiKeyFormProperties {

		/** A connection string that can be used by supporting clients for authentication. */
		connectionString: FormControl<string | null | undefined>,

		/** The key ID. */
		id: FormControl<string | null | undefined>,

		/** The last time any of the key's properties were modified. */
		lastModified: FormControl<Date | null | undefined>,

		/** A name for the key describing its usage. */
		name: FormControl<string | null | undefined>,

		/** Whether this key can only be used for read operations. */
		readOnly: FormControl<boolean | null | undefined>,

		/** The value of the key that is used for authentication purposes. */
		value: FormControl<string | null | undefined>,
	}
	export function CreateApiKeyFormGroup() {
		return new FormGroup<ApiKeyFormProperties>({
			connectionString: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			lastModified: new FormControl<Date | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			readOnly: new FormControl<boolean | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The result of a request to list API keys. */
	export interface ApiKeyListResult {

		/** The URI that can be used to request the next set of paged results. */
		nextLink?: string | null;

		/** The collection value. */
		value?: Array<ApiKey>;
	}

	/** The result of a request to list API keys. */
	export interface ApiKeyListResultFormProperties {

		/** The URI that can be used to request the next set of paged results. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateApiKeyListResultFormGroup() {
		return new FormGroup<ApiKeyListResultFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Parameters used for checking whether a resource name is available. */
	export interface CheckNameAvailabilityParameters {

		/**
		 * The name to check for availability.
		 * Required
		 */
		name: string;

		/**
		 * The resource type to check for name availability.
		 * Required
		 */
		type: CheckNameAvailabilityParametersType;
	}

	/** Parameters used for checking whether a resource name is available. */
	export interface CheckNameAvailabilityParametersFormProperties {

		/**
		 * The name to check for availability.
		 * Required
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * The resource type to check for name availability.
		 * Required
		 */
		type: FormControl<CheckNameAvailabilityParametersType | null | undefined>,
	}
	export function CreateCheckNameAvailabilityParametersFormGroup() {
		return new FormGroup<CheckNameAvailabilityParametersFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<CheckNameAvailabilityParametersType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum CheckNameAvailabilityParametersType { 'Microsoft.AppConfiguration/configurationStores' = 'Microsoft.AppConfiguration/configurationStores' }


	/** The configuration store along with all resource properties. The Configuration Store will have all information to begin utilizing it. */
	export interface ConfigurationStore {
		identity?: ResourceIdentity;

		/** The properties of a configuration store. */
		properties?: ConfigurationStoreProperties;

		/**
		 * Describes a configuration store SKU.
		 * Required
		 */
		sku: Sku;
	}

	/** The configuration store along with all resource properties. The Configuration Store will have all information to begin utilizing it. */
	export interface ConfigurationStoreFormProperties {
	}
	export function CreateConfigurationStoreFormGroup() {
		return new FormGroup<ConfigurationStoreFormProperties>({
		});

	}

	export interface ResourceIdentity {

		/** The principal id of the identity. This property will only be provided for a system-assigned identity. */
		principalId?: string | null;

		/** The tenant id associated with the resource's identity. This property will only be provided for a system-assigned identity. */
		tenantId?: string | null;

		/** The type of managed identity used. The type 'SystemAssigned, UserAssigned' includes both an implicitly created identity and a set of user-assigned identities. The type 'None' will remove any identities. */
		type?: ResourceIdentityType | null;

		/** The list of user-assigned identities associated with the resource. The user-assigned identity dictionary keys will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}'. */
		userAssignedIdentities?: {[id: string]: UserIdentity };
	}
	export interface ResourceIdentityFormProperties {

		/** The principal id of the identity. This property will only be provided for a system-assigned identity. */
		principalId: FormControl<string | null | undefined>,

		/** The tenant id associated with the resource's identity. This property will only be provided for a system-assigned identity. */
		tenantId: FormControl<string | null | undefined>,

		/** The type of managed identity used. The type 'SystemAssigned, UserAssigned' includes both an implicitly created identity and a set of user-assigned identities. The type 'None' will remove any identities. */
		type: FormControl<ResourceIdentityType | null | undefined>,

		/** The list of user-assigned identities associated with the resource. The user-assigned identity dictionary keys will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}'. */
		userAssignedIdentities: FormControl<{[id: string]: UserIdentity } | null | undefined>,
	}
	export function CreateResourceIdentityFormGroup() {
		return new FormGroup<ResourceIdentityFormProperties>({
			principalId: new FormControl<string | null | undefined>(undefined),
			tenantId: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<ResourceIdentityType | null | undefined>(undefined),
			userAssignedIdentities: new FormControl<{[id: string]: UserIdentity } | null | undefined>(undefined),
		});

	}

	export enum ResourceIdentityType { None = 'None', SystemAssigned = 'SystemAssigned', UserAssigned = 'UserAssigned', 'SystemAssigned, UserAssigned' = 'SystemAssigned, UserAssigned' }

	export interface UserIdentity {

		/** The client ID of the user-assigned identity. */
		clientId?: string | null;

		/** The principal ID of the user-assigned identity. */
		principalId?: string | null;
	}
	export interface UserIdentityFormProperties {

		/** The client ID of the user-assigned identity. */
		clientId: FormControl<string | null | undefined>,

		/** The principal ID of the user-assigned identity. */
		principalId: FormControl<string | null | undefined>,
	}
	export function CreateUserIdentityFormGroup() {
		return new FormGroup<UserIdentityFormProperties>({
			clientId: new FormControl<string | null | undefined>(undefined),
			principalId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The properties of a configuration store. */
	export interface ConfigurationStoreProperties {

		/** The creation date of configuration store. */
		creationDate?: Date | null;

		/** The DNS endpoint where the configuration store API will be available. */
		endpoint?: string | null;

		/** The provisioning state of the configuration store. */
		provisioningState?: ConfigurationStorePropertiesProvisioningState | null;
	}

	/** The properties of a configuration store. */
	export interface ConfigurationStorePropertiesFormProperties {

		/** The creation date of configuration store. */
		creationDate: FormControl<Date | null | undefined>,

		/** The DNS endpoint where the configuration store API will be available. */
		endpoint: FormControl<string | null | undefined>,

		/** The provisioning state of the configuration store. */
		provisioningState: FormControl<ConfigurationStorePropertiesProvisioningState | null | undefined>,
	}
	export function CreateConfigurationStorePropertiesFormGroup() {
		return new FormGroup<ConfigurationStorePropertiesFormProperties>({
			creationDate: new FormControl<Date | null | undefined>(undefined),
			endpoint: new FormControl<string | null | undefined>(undefined),
			provisioningState: new FormControl<ConfigurationStorePropertiesProvisioningState | null | undefined>(undefined),
		});

	}

	export enum ConfigurationStorePropertiesProvisioningState { Creating = 'Creating', Updating = 'Updating', Deleting = 'Deleting', Succeeded = 'Succeeded', Failed = 'Failed', Canceled = 'Canceled' }


	/** Describes a configuration store SKU. */
	export interface Sku {

		/**
		 * The SKU name of the configuration store.
		 * Required
		 */
		name: string;
	}

	/** Describes a configuration store SKU. */
	export interface SkuFormProperties {

		/**
		 * The SKU name of the configuration store.
		 * Required
		 */
		name: FormControl<string | null | undefined>,
	}
	export function CreateSkuFormGroup() {
		return new FormGroup<SkuFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The result of a request to list configuration stores. */
	export interface ConfigurationStoreListResult {

		/** The URI that can be used to request the next set of paged results. */
		nextLink?: string | null;

		/** The collection value. */
		value?: Array<ConfigurationStore>;
	}

	/** The result of a request to list configuration stores. */
	export interface ConfigurationStoreListResultFormProperties {

		/** The URI that can be used to request the next set of paged results. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateConfigurationStoreListResultFormGroup() {
		return new FormGroup<ConfigurationStoreListResultFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The properties for updating a configuration store. */
	export interface ConfigurationStorePropertiesUpdateParameters {
	}

	/** The properties for updating a configuration store. */
	export interface ConfigurationStorePropertiesUpdateParametersFormProperties {
	}
	export function CreateConfigurationStorePropertiesUpdateParametersFormGroup() {
		return new FormGroup<ConfigurationStorePropertiesUpdateParametersFormProperties>({
		});

	}


	/** The parameters for updating a configuration store. */
	export interface ConfigurationStoreUpdateParameters {
		identity?: ResourceIdentity;

		/** The properties for updating a configuration store. */
		properties?: ConfigurationStorePropertiesUpdateParameters;

		/** Describes a configuration store SKU. */
		sku?: Sku;

		/** The ARM resource tags. */
		tags?: {[id: string]: string };
	}

	/** The parameters for updating a configuration store. */
	export interface ConfigurationStoreUpdateParametersFormProperties {

		/** The ARM resource tags. */
		tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateConfigurationStoreUpdateParametersFormGroup() {
		return new FormGroup<ConfigurationStoreUpdateParametersFormProperties>({
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}


	/** AppConfiguration error object. */
	export interface Error {

		/** Error code. */
		code?: string | null;

		/** Error message. */
		message?: string | null;
	}

	/** AppConfiguration error object. */
	export interface ErrorFormProperties {

		/** Error code. */
		code: FormControl<string | null | undefined>,

		/** Error message. */
		message: FormControl<string | null | undefined>,
	}
	export function CreateErrorFormGroup() {
		return new FormGroup<ErrorFormProperties>({
			code: new FormControl<string | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The result of a request to retrieve a key-value from the specified configuration store. */
	export interface KeyValue {

		/**
		 * The content type of the key-value's value.
		 * Providing a proper content-type can enable transformations of values when they are retrieved by applications.
		 */
		contentType?: string | null;

		/** An ETag indicating the state of a key-value within a configuration store. */
		eTag?: string | null;

		/**
		 * The primary identifier of a key-value.
		 * The key is used in unison with the label to uniquely identify a key-value.
		 */
		key?: string | null;

		/**
		 * A value used to group key-values.
		 * The label is used in unison with the key to uniquely identify a key-value.
		 */
		label?: string | null;

		/** The last time a modifying operation was performed on the given key-value. */
		lastModified?: Date | null;

		/**
		 * A value indicating whether the key-value is locked.
		 * A locked key-value may not be modified until it is unlocked.
		 */
		locked?: boolean | null;

		/** A dictionary of tags that can help identify what a key-value may be applicable for. */
		tags?: {[id: string]: string };

		/** The value of the key-value. */
		value?: string | null;
	}

	/** The result of a request to retrieve a key-value from the specified configuration store. */
	export interface KeyValueFormProperties {

		/**
		 * The content type of the key-value's value.
		 * Providing a proper content-type can enable transformations of values when they are retrieved by applications.
		 */
		contentType: FormControl<string | null | undefined>,

		/** An ETag indicating the state of a key-value within a configuration store. */
		eTag: FormControl<string | null | undefined>,

		/**
		 * The primary identifier of a key-value.
		 * The key is used in unison with the label to uniquely identify a key-value.
		 */
		key: FormControl<string | null | undefined>,

		/**
		 * A value used to group key-values.
		 * The label is used in unison with the key to uniquely identify a key-value.
		 */
		label: FormControl<string | null | undefined>,

		/** The last time a modifying operation was performed on the given key-value. */
		lastModified: FormControl<Date | null | undefined>,

		/**
		 * A value indicating whether the key-value is locked.
		 * A locked key-value may not be modified until it is unlocked.
		 */
		locked: FormControl<boolean | null | undefined>,

		/** A dictionary of tags that can help identify what a key-value may be applicable for. */
		tags: FormControl<{[id: string]: string } | null | undefined>,

		/** The value of the key-value. */
		value: FormControl<string | null | undefined>,
	}
	export function CreateKeyValueFormGroup() {
		return new FormGroup<KeyValueFormProperties>({
			contentType: new FormControl<string | null | undefined>(undefined),
			eTag: new FormControl<string | null | undefined>(undefined),
			key: new FormControl<string | null | undefined>(undefined),
			label: new FormControl<string | null | undefined>(undefined),
			lastModified: new FormControl<Date | null | undefined>(undefined),
			locked: new FormControl<boolean | null | undefined>(undefined),
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The parameters used to list a configuration store key-value */
	export interface ListKeyValueParameters {

		/**
		 * The key to retrieve.
		 * Required
		 */
		key: string;

		/** The label of the key. */
		label?: string | null;
	}

	/** The parameters used to list a configuration store key-value */
	export interface ListKeyValueParametersFormProperties {

		/**
		 * The key to retrieve.
		 * Required
		 */
		key: FormControl<string | null | undefined>,

		/** The label of the key. */
		label: FormControl<string | null | undefined>,
	}
	export function CreateListKeyValueParametersFormGroup() {
		return new FormGroup<ListKeyValueParametersFormProperties>({
			key: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			label: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The result of a request to check the availability of a resource name. */
	export interface NameAvailabilityStatus {

		/** If any, the error message that provides more detail for the reason that the name is not available. */
		message?: string | null;

		/** The value indicating whether the resource name is available. */
		nameAvailable?: boolean | null;

		/** If any, the reason that the name is not available. */
		reason?: string | null;
	}

	/** The result of a request to check the availability of a resource name. */
	export interface NameAvailabilityStatusFormProperties {

		/** If any, the error message that provides more detail for the reason that the name is not available. */
		message: FormControl<string | null | undefined>,

		/** The value indicating whether the resource name is available. */
		nameAvailable: FormControl<boolean | null | undefined>,

		/** If any, the reason that the name is not available. */
		reason: FormControl<string | null | undefined>,
	}
	export function CreateNameAvailabilityStatusFormGroup() {
		return new FormGroup<NameAvailabilityStatusFormProperties>({
			message: new FormControl<string | null | undefined>(undefined),
			nameAvailable: new FormControl<boolean | null | undefined>(undefined),
			reason: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The definition of a configuration store operation. */
	export interface OperationDefinition {

		/** The display information for a configuration store operation. */
		display?: OperationDefinitionDisplay;

		/** Operation name: {provider}/{resource}/{operation}. */
		name?: string | null;
	}

	/** The definition of a configuration store operation. */
	export interface OperationDefinitionFormProperties {

		/** Operation name: {provider}/{resource}/{operation}. */
		name: FormControl<string | null | undefined>,
	}
	export function CreateOperationDefinitionFormGroup() {
		return new FormGroup<OperationDefinitionFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The display information for a configuration store operation. */
	export interface OperationDefinitionDisplay {

		/** The description for the operation. */
		description?: string | null;

		/** The operation that users can perform. */
		operation?: string | null;

		/** The resource provider name: Microsoft App Configuration." */
		provider?: string | null;

		/** The resource on which the operation is performed. */
		resource?: string | null;
	}

	/** The display information for a configuration store operation. */
	export interface OperationDefinitionDisplayFormProperties {

		/** The description for the operation. */
		description: FormControl<string | null | undefined>,

		/** The operation that users can perform. */
		operation: FormControl<string | null | undefined>,

		/** The resource provider name: Microsoft App Configuration." */
		provider: FormControl<string | null | undefined>,

		/** The resource on which the operation is performed. */
		resource: FormControl<string | null | undefined>,
	}
	export function CreateOperationDefinitionDisplayFormGroup() {
		return new FormGroup<OperationDefinitionDisplayFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			operation: new FormControl<string | null | undefined>(undefined),
			provider: new FormControl<string | null | undefined>(undefined),
			resource: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The result of a request to list configuration store operations. */
	export interface OperationDefinitionListResult {

		/** The URI that can be used to request the next set of paged results. */
		nextLink?: string | null;

		/** The collection value. */
		value?: Array<OperationDefinition>;
	}

	/** The result of a request to list configuration store operations. */
	export interface OperationDefinitionListResultFormProperties {

		/** The URI that can be used to request the next set of paged results. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateOperationDefinitionListResultFormGroup() {
		return new FormGroup<OperationDefinitionListResultFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The parameters used to regenerate an API key. */
	export interface RegenerateKeyParameters {

		/** The id of the key to regenerate. */
		id?: string | null;
	}

	/** The parameters used to regenerate an API key. */
	export interface RegenerateKeyParametersFormProperties {

		/** The id of the key to regenerate. */
		id: FormControl<string | null | undefined>,
	}
	export function CreateRegenerateKeyParametersFormGroup() {
		return new FormGroup<RegenerateKeyParametersFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An Azure resource. */
	export interface Resource {

		/** The resource ID. */
		id?: string | null;

		/**
		 * The location of the resource. This cannot be changed after the resource is created.
		 * Required
		 */
		location: string;

		/** The name of the resource. */
		name?: string | null;

		/** The tags of the resource. */
		tags?: {[id: string]: string };

		/** The type of the resource. */
		type?: string | null;
	}

	/** An Azure resource. */
	export interface ResourceFormProperties {

		/** The resource ID. */
		id: FormControl<string | null | undefined>,

		/**
		 * The location of the resource. This cannot be changed after the resource is created.
		 * Required
		 */
		location: FormControl<string | null | undefined>,

		/** The name of the resource. */
		name: FormControl<string | null | undefined>,

		/** The tags of the resource. */
		tags: FormControl<{[id: string]: string } | null | undefined>,

		/** The type of the resource. */
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

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Lists the operations available from this provider.
		 * Get providers/Microsoft.AppConfiguration/operations
		 * @param {string} api_version The client API version.
		 * @param {string} skipToken A skip token is used to continue retrieving items after an operation returns a partial result. If a previous response contains a nextLink element, the value of the nextLink element will include a skipToken parameter that specifies a starting point to use for subsequent calls.
		 * @return {OperationDefinitionListResult} The request was successful; the request was well-formed and received properly.
		 */
		Operations_List(api_version: string, skipToken: string | null | undefined): Observable<OperationDefinitionListResult> {
			return this.http.get<OperationDefinitionListResult>(this.baseUri + 'providers/Microsoft.AppConfiguration/operations?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)) + '&skipToken=' + (skipToken == null ? '' : encodeURIComponent(skipToken)), {});
		}

		/**
		 * Checks whether the configuration store name is available for use.
		 * Post subscriptions/{subscriptionId}/providers/Microsoft.AppConfiguration/checkNameAvailability
		 * @param {string} subscriptionId The Microsoft Azure subscription ID.
		 * @param {string} api_version The client API version.
		 * @param {CheckNameAvailabilityParameters} requestBody The object containing information for the availability request.
		 * @return {NameAvailabilityStatus} The request was successful; the request was well-formed and received properly.
		 */
		Operations_CheckNameAvailability(subscriptionId: string, api_version: string, requestBody: CheckNameAvailabilityParameters): Observable<NameAvailabilityStatus> {
			return this.http.post<NameAvailabilityStatus>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/providers/Microsoft.AppConfiguration/checkNameAvailability&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists the configuration stores for a given subscription.
		 * Get subscriptions/{subscriptionId}/providers/Microsoft.AppConfiguration/configurationStores
		 * @param {string} subscriptionId The Microsoft Azure subscription ID.
		 * @param {string} api_version The client API version.
		 * @param {string} skipToken A skip token is used to continue retrieving items after an operation returns a partial result. If a previous response contains a nextLink element, the value of the nextLink element will include a skipToken parameter that specifies a starting point to use for subsequent calls.
		 * @return {ConfigurationStoreListResult} The request was successful; the request was well-formed and received properly.
		 */
		ConfigurationStores_List(subscriptionId: string, api_version: string, skipToken: string | null | undefined): Observable<ConfigurationStoreListResult> {
			return this.http.get<ConfigurationStoreListResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/providers/Microsoft.AppConfiguration/configurationStores&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)) + '&skipToken=' + (skipToken == null ? '' : encodeURIComponent(skipToken)), {});
		}

		/**
		 * Lists the configuration stores for a given resource group.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppConfiguration/configurationStores
		 * @param {string} subscriptionId The Microsoft Azure subscription ID.
		 * @param {string} resourceGroupName The name of the resource group to which the container registry belongs.
		 * @param {string} api_version The client API version.
		 * @param {string} skipToken A skip token is used to continue retrieving items after an operation returns a partial result. If a previous response contains a nextLink element, the value of the nextLink element will include a skipToken parameter that specifies a starting point to use for subsequent calls.
		 * @return {ConfigurationStoreListResult} The request was successful; the request was well-formed and received properly.
		 */
		ConfigurationStores_ListByResourceGroup(subscriptionId: string, resourceGroupName: string, api_version: string, skipToken: string | null | undefined): Observable<ConfigurationStoreListResult> {
			return this.http.get<ConfigurationStoreListResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.AppConfiguration/configurationStores&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)) + '&skipToken=' + (skipToken == null ? '' : encodeURIComponent(skipToken)), {});
		}

		/**
		 * Gets the properties of the specified configuration store.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppConfiguration/configurationStores/{configStoreName}
		 * @param {string} subscriptionId The Microsoft Azure subscription ID.
		 * @param {string} resourceGroupName The name of the resource group to which the container registry belongs.
		 * @param {string} configStoreName The name of the configuration store.
		 * @param {string} api_version The client API version.
		 * @return {ConfigurationStore} The request was successful; the request was well-formed and received properly.
		 */
		ConfigurationStores_Get(subscriptionId: string, resourceGroupName: string, configStoreName: string, api_version: string): Observable<ConfigurationStore> {
			return this.http.get<ConfigurationStore>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.AppConfiguration/configurationStores/' + (configStoreName == null ? '' : encodeURIComponent(configStoreName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Creates a configuration store with the specified parameters.
		 * Put subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppConfiguration/configurationStores/{configStoreName}
		 * @param {string} subscriptionId The Microsoft Azure subscription ID.
		 * @param {string} resourceGroupName The name of the resource group to which the container registry belongs.
		 * @param {string} configStoreName The name of the configuration store.
		 * @param {string} api_version The client API version.
		 * @param {ConfigurationStore} requestBody The parameters for creating a configuration store.
		 * @return {ConfigurationStore} The request was successful; the request was well-formed and received properly.
		 */
		ConfigurationStores_Create(subscriptionId: string, resourceGroupName: string, configStoreName: string, api_version: string, requestBody: ConfigurationStore): Observable<ConfigurationStore> {
			return this.http.put<ConfigurationStore>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.AppConfiguration/configurationStores/' + (configStoreName == null ? '' : encodeURIComponent(configStoreName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a configuration store.
		 * Delete subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppConfiguration/configurationStores/{configStoreName}
		 * @param {string} subscriptionId The Microsoft Azure subscription ID.
		 * @param {string} resourceGroupName The name of the resource group to which the container registry belongs.
		 * @param {string} configStoreName The name of the configuration store.
		 * @param {string} api_version The client API version.
		 * @return {void} The request was successful; the request was well-formed and received properly.
		 */
		ConfigurationStores_Delete(subscriptionId: string, resourceGroupName: string, configStoreName: string, api_version: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.AppConfiguration/configurationStores/' + (configStoreName == null ? '' : encodeURIComponent(configStoreName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Updates a configuration store with the specified parameters.
		 * Patch subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppConfiguration/configurationStores/{configStoreName}
		 * @param {string} subscriptionId The Microsoft Azure subscription ID.
		 * @param {string} resourceGroupName The name of the resource group to which the container registry belongs.
		 * @param {string} configStoreName The name of the configuration store.
		 * @param {string} api_version The client API version.
		 * @param {ConfigurationStoreUpdateParameters} requestBody The parameters for updating a configuration store.
		 * @return {ConfigurationStore} The request was successful; the request was well-formed and received properly.
		 */
		ConfigurationStores_Update(subscriptionId: string, resourceGroupName: string, configStoreName: string, api_version: string, requestBody: ConfigurationStoreUpdateParameters): Observable<ConfigurationStore> {
			return this.http.patch<ConfigurationStore>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.AppConfiguration/configurationStores/' + (configStoreName == null ? '' : encodeURIComponent(configStoreName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists the access key for the specified configuration store.
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppConfiguration/configurationStores/{configStoreName}/ListKeys
		 * @param {string} subscriptionId The Microsoft Azure subscription ID.
		 * @param {string} resourceGroupName The name of the resource group to which the container registry belongs.
		 * @param {string} configStoreName The name of the configuration store.
		 * @param {string} api_version The client API version.
		 * @param {string} skipToken A skip token is used to continue retrieving items after an operation returns a partial result. If a previous response contains a nextLink element, the value of the nextLink element will include a skipToken parameter that specifies a starting point to use for subsequent calls.
		 * @return {ApiKeyListResult} The request was successful; the request was well-formed and received properly.
		 */
		ConfigurationStores_ListKeys(subscriptionId: string, resourceGroupName: string, configStoreName: string, api_version: string, skipToken: string | null | undefined): Observable<ApiKeyListResult> {
			return this.http.post<ApiKeyListResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.AppConfiguration/configurationStores/' + (configStoreName == null ? '' : encodeURIComponent(configStoreName)) + '/ListKeys&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)) + '&skipToken=' + (skipToken == null ? '' : encodeURIComponent(skipToken)), null, {});
		}

		/**
		 * Regenerates an access key for the specified configuration store.
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppConfiguration/configurationStores/{configStoreName}/RegenerateKey
		 * @param {string} subscriptionId The Microsoft Azure subscription ID.
		 * @param {string} resourceGroupName The name of the resource group to which the container registry belongs.
		 * @param {string} configStoreName The name of the configuration store.
		 * @param {string} api_version The client API version.
		 * @param {RegenerateKeyParameters} requestBody The parameters for regenerating an access key.
		 * @return {ApiKey} The request was successful; the request was well-formed and received properly.
		 */
		ConfigurationStores_RegenerateKey(subscriptionId: string, resourceGroupName: string, configStoreName: string, api_version: string, requestBody: RegenerateKeyParameters): Observable<ApiKey> {
			return this.http.post<ApiKey>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.AppConfiguration/configurationStores/' + (configStoreName == null ? '' : encodeURIComponent(configStoreName)) + '/RegenerateKey&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists a configuration store key-value.
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppConfiguration/configurationStores/{configStoreName}/listKeyValue
		 * @param {string} subscriptionId The Microsoft Azure subscription ID.
		 * @param {string} resourceGroupName The name of the resource group to which the container registry belongs.
		 * @param {string} configStoreName The name of the configuration store.
		 * @param {string} api_version The client API version.
		 * @param {ListKeyValueParameters} requestBody The parameters for retrieving a key-value.
		 * @return {KeyValue} The request was successful; the request was well-formed and received properly.
		 */
		ConfigurationStores_ListKeyValue(subscriptionId: string, resourceGroupName: string, configStoreName: string, api_version: string, requestBody: ListKeyValueParameters): Observable<KeyValue> {
			return this.http.post<KeyValue>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.AppConfiguration/configurationStores/' + (configStoreName == null ? '' : encodeURIComponent(configStoreName)) + '/listKeyValue&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

}

