import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** The properties for a Media Services REST API endpoint. */
	export interface ApiEndpoint {

		/** The Media Services REST endpoint. */
		endpoint?: string | null;

		/** The version of Media Services REST API. */
		majorVersion?: string | null;
	}

	/** The properties for a Media Services REST API endpoint. */
	export interface ApiEndpointFormProperties {

		/** The Media Services REST endpoint. */
		endpoint: FormControl<string | null | undefined>,

		/** The version of Media Services REST API. */
		majorVersion: FormControl<string | null | undefined>,
	}
	export function CreateApiEndpointFormGroup() {
		return new FormGroup<ApiEndpointFormProperties>({
			endpoint: new FormControl<string | null | undefined>(undefined),
			majorVersion: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The error returned from a failed Media Services REST API call. */
	export interface ApiError {

		/** Error code. */
		code?: string | null;

		/** Error message. */
		message?: string | null;
	}

	/** The error returned from a failed Media Services REST API call. */
	export interface ApiErrorFormProperties {

		/** Error code. */
		code: FormControl<string | null | undefined>,

		/** Error message. */
		message: FormControl<string | null | undefined>,
	}
	export function CreateApiErrorFormGroup() {
		return new FormGroup<ApiErrorFormProperties>({
			code: new FormControl<string | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The request body for CheckNameAvailability API. */
	export interface CheckNameAvailabilityInput {

		/**
		 * The name of the resource. A name must be globally unique.
		 * Required
		 * Max length: 24
		 * Min length: 3
		 */
		name: string;

		/**
		 * Type of MediaService resource.
		 * Required
		 */
		type: CheckNameAvailabilityInputType;
	}

	/** The request body for CheckNameAvailability API. */
	export interface CheckNameAvailabilityInputFormProperties {

		/**
		 * The name of the resource. A name must be globally unique.
		 * Required
		 * Max length: 24
		 * Min length: 3
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * Type of MediaService resource.
		 * Required
		 */
		type: FormControl<CheckNameAvailabilityInputType | null | undefined>,
	}
	export function CreateCheckNameAvailabilityInputFormGroup() {
		return new FormGroup<CheckNameAvailabilityInputFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(3), Validators.maxLength(24), Validators.pattern('^[a-z0-9]{3,24}$')]),
			type: new FormControl<CheckNameAvailabilityInputType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum CheckNameAvailabilityInputType { mediaservices = 'mediaservices' }


	/** The response body for CheckNameAvailability API. */
	export interface CheckNameAvailabilityOutput {

		/** Specifies the detailed reason if the name is not available. */
		message?: string | null;

		/** Specifies if the name is available. */
		nameAvailable?: boolean | null;

		/** Specifies the reason if the name is not available. */
		reason?: CheckNameAvailabilityOutputReason | null;
	}

	/** The response body for CheckNameAvailability API. */
	export interface CheckNameAvailabilityOutputFormProperties {

		/** Specifies the detailed reason if the name is not available. */
		message: FormControl<string | null | undefined>,

		/** Specifies if the name is available. */
		nameAvailable: FormControl<boolean | null | undefined>,

		/** Specifies the reason if the name is not available. */
		reason: FormControl<CheckNameAvailabilityOutputReason | null | undefined>,
	}
	export function CreateCheckNameAvailabilityOutputFormGroup() {
		return new FormGroup<CheckNameAvailabilityOutputFormProperties>({
			message: new FormControl<string | null | undefined>(undefined),
			nameAvailable: new FormControl<boolean | null | undefined>(undefined),
			reason: new FormControl<CheckNameAvailabilityOutputReason | null | undefined>(undefined),
		});

	}

	export enum CheckNameAvailabilityOutputReason { None = 'None', Invalid = 'Invalid', AlreadyExists = 'AlreadyExists' }


	/** The properties of a Media Service resource. */
	export interface MediaService extends Resource {

		/** The additional properties of a Media Service resource. */
		properties?: MediaServiceProperties;
	}

	/** The properties of a Media Service resource. */
	export interface MediaServiceFormProperties extends ResourceFormProperties {
	}
	export function CreateMediaServiceFormGroup() {
		return new FormGroup<MediaServiceFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			location: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The collection of Media Service resources. */
	export interface MediaServiceCollection {

		/** The collection of Media Service resources. */
		value?: Array<MediaService>;
	}

	/** The collection of Media Service resources. */
	export interface MediaServiceCollectionFormProperties {
	}
	export function CreateMediaServiceCollectionFormGroup() {
		return new FormGroup<MediaServiceCollectionFormProperties>({
		});

	}


	/** The additional properties of a Media Service resource. */
	export interface MediaServiceProperties {

		/** Read-only property that lists the Media Services REST API endpoints for this resource. If supplied on a PUT or PATCH, the value will be ignored. */
		apiEndpoints?: Array<ApiEndpoint>;

		/** The storage accounts for this resource. */
		storageAccounts?: Array<StorageAccount>;
	}

	/** The additional properties of a Media Service resource. */
	export interface MediaServicePropertiesFormProperties {
	}
	export function CreateMediaServicePropertiesFormGroup() {
		return new FormGroup<MediaServicePropertiesFormProperties>({
		});

	}


	/** The properties of a storage account associated with this resource. */
	export interface StorageAccount {

		/**
		 * The id of the storage account resource. Media Services relies on tables and queues as well as blobs, so the primary storage account must be a Standard Storage account (either Microsoft.ClassicStorage or Microsoft.Storage). Blob only storage accounts can be added as secondary storage accounts (isPrimary false).
		 * Required
		 */
		id: string;

		/**
		 * Is this storage account resource the primary storage account for the Media Service resource. Blob only storage must set this to false.
		 * Required
		 */
		isPrimary: boolean;
	}

	/** The properties of a storage account associated with this resource. */
	export interface StorageAccountFormProperties {

		/**
		 * The id of the storage account resource. Media Services relies on tables and queues as well as blobs, so the primary storage account must be a Standard Storage account (either Microsoft.ClassicStorage or Microsoft.Storage). Blob only storage accounts can be added as secondary storage accounts (isPrimary false).
		 * Required
		 */
		id: FormControl<string | null | undefined>,

		/**
		 * Is this storage account resource the primary storage account for the Media Service resource. Blob only storage must set this to false.
		 * Required
		 */
		isPrimary: FormControl<boolean | null | undefined>,
	}
	export function CreateStorageAccountFormGroup() {
		return new FormGroup<StorageAccountFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			isPrimary: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** A Media Services REST API operation */
	export interface Operation {

		/** The object that represents the operation. */
		display?: any;

		/** Operation name: {provider}/{resource}/{operation} */
		name?: string | null;
	}

	/** A Media Services REST API operation */
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


	/** Result of the request to list Media Services operations. */
	export interface OperationListResult {

		/** URL to get the next set of operation list results if there are any. */
		nextLink?: string | null;

		/** List of Media Services operations supported by the Microsoft.Media resource provider. */
		value?: Array<Operation>;
	}

	/** Result of the request to list Media Services operations. */
	export interface OperationListResultFormProperties {

		/** URL to get the next set of operation list results if there are any. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateOperationListResultFormGroup() {
		return new FormGroup<OperationListResultFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The request body for a RegenerateKey API. */
	export interface RegenerateKeyInput {

		/**
		 * The keyType indicating which key you want to regenerate, Primary or Secondary.
		 * Required
		 */
		keyType: RegenerateKeyInputKeyType;
	}

	/** The request body for a RegenerateKey API. */
	export interface RegenerateKeyInputFormProperties {

		/**
		 * The keyType indicating which key you want to regenerate, Primary or Secondary.
		 * Required
		 */
		keyType: FormControl<RegenerateKeyInputKeyType | null | undefined>,
	}
	export function CreateRegenerateKeyInputFormGroup() {
		return new FormGroup<RegenerateKeyInputFormProperties>({
			keyType: new FormControl<RegenerateKeyInputKeyType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum RegenerateKeyInputKeyType { Primary = 'Primary', Secondary = 'Secondary' }


	/** The response body for a RegenerateKey API. */
	export interface RegenerateKeyOutput {

		/** The new value of either the primary or secondary key. */
		key?: string | null;
	}

	/** The response body for a RegenerateKey API. */
	export interface RegenerateKeyOutputFormProperties {

		/** The new value of either the primary or secondary key. */
		key: FormControl<string | null | undefined>,
	}
	export function CreateRegenerateKeyOutputFormGroup() {
		return new FormGroup<RegenerateKeyOutputFormProperties>({
			key: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The Azure Resource Manager resource. */
	export interface Resource {

		/** The id of the resource. */
		id?: string | null;

		/** The geographic location of the resource. This must be one of the supported and registered Azure Geo Regions (for example, West US, East US, Southeast Asia, and so forth). */
		location?: string | null;

		/** The name of the resource. */
		name?: string | null;

		/** Tags to help categorize the resource in the Azure portal. */
		tags?: {[id: string]: string };

		/** The type of the resource */
		type?: string | null;
	}

	/** The Azure Resource Manager resource. */
	export interface ResourceFormProperties {

		/** The id of the resource. */
		id: FormControl<string | null | undefined>,

		/** The geographic location of the resource. This must be one of the supported and registered Azure Geo Regions (for example, West US, East US, Southeast Asia, and so forth). */
		location: FormControl<string | null | undefined>,

		/** The name of the resource. */
		name: FormControl<string | null | undefined>,

		/** Tags to help categorize the resource in the Azure portal. */
		tags: FormControl<{[id: string]: string } | null | undefined>,

		/** The type of the resource */
		type: FormControl<string | null | undefined>,
	}
	export function CreateResourceFormGroup() {
		return new FormGroup<ResourceFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			location: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Type of MediaService resource. */
	export enum ResourceType { mediaservices = 'mediaservices' }


	/** The response body for a ListKeys API. */
	export interface ServiceKeys {

		/** The primary authorization endpoint. */
		primaryAuthEndpoint?: string | null;

		/** The primary key for the Media Service resource. */
		primaryKey?: string | null;

		/** The authorization scope. */
		scope?: string | null;

		/** The secondary authorization endpoint. */
		secondaryAuthEndpoint?: string | null;

		/** The secondary key for the Media Service resource. */
		secondaryKey?: string | null;
	}

	/** The response body for a ListKeys API. */
	export interface ServiceKeysFormProperties {

		/** The primary authorization endpoint. */
		primaryAuthEndpoint: FormControl<string | null | undefined>,

		/** The primary key for the Media Service resource. */
		primaryKey: FormControl<string | null | undefined>,

		/** The authorization scope. */
		scope: FormControl<string | null | undefined>,

		/** The secondary authorization endpoint. */
		secondaryAuthEndpoint: FormControl<string | null | undefined>,

		/** The secondary key for the Media Service resource. */
		secondaryKey: FormControl<string | null | undefined>,
	}
	export function CreateServiceKeysFormGroup() {
		return new FormGroup<ServiceKeysFormProperties>({
			primaryAuthEndpoint: new FormControl<string | null | undefined>(undefined),
			primaryKey: new FormControl<string | null | undefined>(undefined),
			scope: new FormControl<string | null | undefined>(undefined),
			secondaryAuthEndpoint: new FormControl<string | null | undefined>(undefined),
			secondaryKey: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The request  body for a SyncStorageKeys API. */
	export interface SyncStorageKeysInput {

		/**
		 * The id of the storage account resource.
		 * Required
		 */
		id: string;
	}

	/** The request  body for a SyncStorageKeys API. */
	export interface SyncStorageKeysInputFormProperties {

		/**
		 * The id of the storage account resource.
		 * Required
		 */
		id: FormControl<string | null | undefined>,
	}
	export function CreateSyncStorageKeysInputFormGroup() {
		return new FormGroup<SyncStorageKeysInputFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Lists all of the available Media Services REST API operations.
		 * Get providers/Microsoft.Media/operations
		 * @param {string} api_version Version of the API to be used with the client request. The current version is 2015-10-01.
		 * @return {OperationListResult} Success. Returns a list of operations.
		 */
		Operations_List(api_version: string): Observable<OperationListResult> {
			return this.http.get<OperationListResult>(this.baseUri + 'providers/Microsoft.Media/operations?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Checks whether the Media Service resource name is available. The name must be globally unique.
		 * Post subscriptions/{subscriptionId}/providers/Microsoft.Media/CheckNameAvailability
		 * @param {string} subscriptionId The unique identifier for a Microsoft Azure subscription.
		 * @param {string} api_version Version of the API to be used with the client request. The current version is 2015-10-01.
		 * @param {CheckNameAvailabilityInput} requestBody Properties needed to check the availability of a name.
		 * @return {CheckNameAvailabilityOutput} Success. Returns details about whether a Media Service resource name is available.
		 */
		MediaService_CheckNameAvailability(subscriptionId: string, api_version: string, requestBody: CheckNameAvailabilityInput): Observable<CheckNameAvailabilityOutput> {
			return this.http.post<CheckNameAvailabilityOutput>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/providers/Microsoft.Media/CheckNameAvailability&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists all of the Media Services in a resource group.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Media/mediaservices
		 * @param {string} subscriptionId The unique identifier for a Microsoft Azure subscription.
		 * @param {string} api_version Version of the API to be used with the client request. The current version is 2015-10-01.
		 * @param {string} resourceGroupName Name of the resource group within the Azure subscription.
		 * @return {MediaServiceCollection} Success. Returns a list of all of the Media Services accounts in a resource group.
		 */
		MediaService_ListByResourceGroup(subscriptionId: string, api_version: string, resourceGroupName: string): Observable<MediaServiceCollection> {
			return this.http.get<MediaServiceCollection>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Media/mediaservices&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Gets a Media Service.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Media/mediaservices/{mediaServiceName}
		 * @param {string} subscriptionId The unique identifier for a Microsoft Azure subscription.
		 * @param {string} api_version Version of the API to be used with the client request. The current version is 2015-10-01.
		 * @param {string} resourceGroupName Name of the resource group within the Azure subscription.
		 * @param {string} mediaServiceName Name of the Media Service.
		 * @return {MediaService} Success. Returns the details of the Media Services account.
		 */
		MediaService_Get(subscriptionId: string, api_version: string, resourceGroupName: string, mediaServiceName: string): Observable<MediaService> {
			return this.http.get<MediaService>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Media/mediaservices/' + (mediaServiceName == null ? '' : encodeURIComponent(mediaServiceName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Creates a Media Service.
		 * Put subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Media/mediaservices/{mediaServiceName}
		 * @param {string} subscriptionId The unique identifier for a Microsoft Azure subscription.
		 * @param {string} api_version Version of the API to be used with the client request. The current version is 2015-10-01.
		 * @param {string} resourceGroupName Name of the resource group within the Azure subscription.
		 * @param {string} mediaServiceName Name of the Media Service.
		 * @param {MediaService} requestBody Media Service properties needed for creation.
		 * @return {void} 
		 */
		MediaService_Create(subscriptionId: string, api_version: string, resourceGroupName: string, mediaServiceName: string, requestBody: MediaService): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Media/mediaservices/' + (mediaServiceName == null ? '' : encodeURIComponent(mediaServiceName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Deletes a Media Service.
		 * Delete subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Media/mediaservices/{mediaServiceName}
		 * @param {string} subscriptionId The unique identifier for a Microsoft Azure subscription.
		 * @param {string} api_version Version of the API to be used with the client request. The current version is 2015-10-01.
		 * @param {string} resourceGroupName Name of the resource group within the Azure subscription.
		 * @param {string} mediaServiceName Name of the Media Service.
		 * @return {void} Success. The Media Services account was deleted.
		 */
		MediaService_Delete(subscriptionId: string, api_version: string, resourceGroupName: string, mediaServiceName: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Media/mediaservices/' + (mediaServiceName == null ? '' : encodeURIComponent(mediaServiceName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Updates a Media Service.
		 * Patch subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Media/mediaservices/{mediaServiceName}
		 * @param {string} subscriptionId The unique identifier for a Microsoft Azure subscription.
		 * @param {string} api_version Version of the API to be used with the client request. The current version is 2015-10-01.
		 * @param {string} resourceGroupName Name of the resource group within the Azure subscription.
		 * @param {string} mediaServiceName Name of the Media Service.
		 * @param {MediaService} requestBody Media Service properties needed for update.
		 * @return {MediaService} Success. The Media Services account was updated.
		 */
		MediaService_Update(subscriptionId: string, api_version: string, resourceGroupName: string, mediaServiceName: string, requestBody: MediaService): Observable<MediaService> {
			return this.http.patch<MediaService>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Media/mediaservices/' + (mediaServiceName == null ? '' : encodeURIComponent(mediaServiceName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists the keys for a Media Service.
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Media/mediaservices/{mediaServiceName}/listKeys
		 * @param {string} subscriptionId The unique identifier for a Microsoft Azure subscription.
		 * @param {string} api_version Version of the API to be used with the client request. The current version is 2015-10-01.
		 * @param {string} resourceGroupName Name of the resource group within the Azure subscription.
		 * @param {string} mediaServiceName Name of the Media Service.
		 * @return {ServiceKeys} Success. The keys for the Media Services account were listed.
		 */
		MediaService_ListKeys(subscriptionId: string, api_version: string, resourceGroupName: string, mediaServiceName: string): Observable<ServiceKeys> {
			return this.http.post<ServiceKeys>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Media/mediaservices/' + (mediaServiceName == null ? '' : encodeURIComponent(mediaServiceName)) + '/listKeys&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), null, {});
		}

		/**
		 * Regenerates a primary or secondary key for a Media Service.
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Media/mediaservices/{mediaServiceName}/regenerateKey
		 * @param {string} subscriptionId The unique identifier for a Microsoft Azure subscription.
		 * @param {string} api_version Version of the API to be used with the client request. The current version is 2015-10-01.
		 * @param {string} resourceGroupName Name of the resource group within the Azure subscription.
		 * @param {string} mediaServiceName Name of the Media Service.
		 * @param {RegenerateKeyInput} requestBody Properties needed to regenerate the Media Service key.
		 * @return {RegenerateKeyOutput} Success. The Media Services key specified in the input was regenerated.
		 */
		MediaService_RegenerateKey(subscriptionId: string, api_version: string, resourceGroupName: string, mediaServiceName: string, requestBody: RegenerateKeyInput): Observable<RegenerateKeyOutput> {
			return this.http.post<RegenerateKeyOutput>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Media/mediaservices/' + (mediaServiceName == null ? '' : encodeURIComponent(mediaServiceName)) + '/regenerateKey&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Synchronizes storage account keys for a storage account associated with the Media Service account.
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Media/mediaservices/{mediaServiceName}/syncStorageKeys
		 * @param {string} subscriptionId The unique identifier for a Microsoft Azure subscription.
		 * @param {string} api_version Version of the API to be used with the client request. The current version is 2015-10-01.
		 * @param {string} resourceGroupName Name of the resource group within the Azure subscription.
		 * @param {string} mediaServiceName Name of the Media Service.
		 * @param {SyncStorageKeysInput} requestBody Properties needed to synchronize the keys for a storage account to the Media Service.
		 * @return {void} Success. The keys for the storage account were synchronized.
		 */
		MediaService_SyncStorageKeys(subscriptionId: string, api_version: string, resourceGroupName: string, mediaServiceName: string, requestBody: SyncStorageKeysInput): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Media/mediaservices/' + (mediaServiceName == null ? '' : encodeURIComponent(mediaServiceName)) + '/syncStorageKeys&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}
	}

}

