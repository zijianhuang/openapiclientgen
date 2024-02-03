import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** The EngagementFabric account */
	export interface Account {
	}

	/** The EngagementFabric account */
	export interface AccountFormProperties {
	}
	export function CreateAccountFormGroup() {
		return new FormGroup<AccountFormProperties>({
		});

	}


	/** The list of the EngagementFabric accounts */
	export interface AccountList {

		/** EngagementFabric accounts */
		value?: Array<Account>;
	}

	/** The list of the EngagementFabric accounts */
	export interface AccountListFormProperties {
	}
	export function CreateAccountListFormGroup() {
		return new FormGroup<AccountListFormProperties>({
		});

	}


	/** The patch of EngagementFabric account */
	export interface AccountPatch {

		/** The tags of the resource */
		tags?: {[id: string]: string };
	}

	/** The patch of EngagementFabric account */
	export interface AccountPatchFormProperties {

		/** The tags of the resource */
		tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateAccountPatchFormGroup() {
		return new FormGroup<AccountPatchFormProperties>({
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}


	/** The EngagementFabric channel */
	export interface Channel {

		/** The EngagementFabric channel properties */
		properties?: ChannelProperties;
	}

	/** The EngagementFabric channel */
	export interface ChannelFormProperties {
	}
	export function CreateChannelFormGroup() {
		return new FormGroup<ChannelFormProperties>({
		});

	}


	/** The EngagementFabric channel properties */
	export interface ChannelProperties {

		/** The functions to be enabled for the channel */
		channelFunctions?: Array<string>;

		/**
		 * The channel type
		 * Required
		 */
		channelType: string;

		/** The channel credentials */
		credentials?: {[id: string]: string };
	}

	/** The EngagementFabric channel properties */
	export interface ChannelPropertiesFormProperties {

		/**
		 * The channel type
		 * Required
		 */
		channelType: FormControl<string | null | undefined>,

		/** The channel credentials */
		credentials: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateChannelPropertiesFormGroup() {
		return new FormGroup<ChannelPropertiesFormProperties>({
			channelType: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			credentials: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}


	/** The list of the EngagementFabric channels */
	export interface ChannelList {

		/** EngagementFabric channels */
		value?: Array<Channel>;
	}

	/** The list of the EngagementFabric channels */
	export interface ChannelListFormProperties {
	}
	export function CreateChannelListFormGroup() {
		return new FormGroup<ChannelListFormProperties>({
		});

	}


	/** EngagementFabric channel description */
	export interface ChannelTypeDescription {

		/** Text description for the channel */
		channelDescription?: string | null;

		/** All the available functions for the channel */
		channelFunctions?: Array<string>;

		/** Channel type */
		channelType?: string | null;
	}

	/** EngagementFabric channel description */
	export interface ChannelTypeDescriptionFormProperties {

		/** Text description for the channel */
		channelDescription: FormControl<string | null | undefined>,

		/** Channel type */
		channelType: FormControl<string | null | undefined>,
	}
	export function CreateChannelTypeDescriptionFormGroup() {
		return new FormGroup<ChannelTypeDescriptionFormProperties>({
			channelDescription: new FormControl<string | null | undefined>(undefined),
			channelType: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** List of the EngagementFabric channel descriptions */
	export interface ChannelTypeDescriptionList {

		/** Channel descriptions */
		value?: Array<ChannelTypeDescription>;
	}

	/** List of the EngagementFabric channel descriptions */
	export interface ChannelTypeDescriptionListFormProperties {
	}
	export function CreateChannelTypeDescriptionListFormGroup() {
		return new FormGroup<ChannelTypeDescriptionListFormProperties>({
		});

	}


	/** The parameter for name availability check */
	export interface CheckNameAvailabilityParameter {

		/**
		 * The name to be checked
		 * Required
		 */
		name: string;

		/**
		 * The fully qualified resource type for the name to be checked
		 * Required
		 */
		type: string;
	}

	/** The parameter for name availability check */
	export interface CheckNameAvailabilityParameterFormProperties {

		/**
		 * The name to be checked
		 * Required
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * The fully qualified resource type for the name to be checked
		 * Required
		 */
		type: FormControl<string | null | undefined>,
	}
	export function CreateCheckNameAvailabilityParameterFormGroup() {
		return new FormGroup<CheckNameAvailabilityParameterFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The result of name availability check */
	export interface CheckNameAvailabilityResult {

		/** The message if name is unavailable */
		message?: string | null;

		/** The name to be checked */
		nameAvailable?: boolean | null;

		/** The reason of name availability result */
		reason?: CheckNameAvailabilityResultReason | null;
	}

	/** The result of name availability check */
	export interface CheckNameAvailabilityResultFormProperties {

		/** The message if name is unavailable */
		message: FormControl<string | null | undefined>,

		/** The name to be checked */
		nameAvailable: FormControl<boolean | null | undefined>,

		/** The reason of name availability result */
		reason: FormControl<CheckNameAvailabilityResultReason | null | undefined>,
	}
	export function CreateCheckNameAvailabilityResultFormGroup() {
		return new FormGroup<CheckNameAvailabilityResultFormProperties>({
			message: new FormControl<string | null | undefined>(undefined),
			nameAvailable: new FormControl<boolean | null | undefined>(undefined),
			reason: new FormControl<CheckNameAvailabilityResultReason | null | undefined>(undefined),
		});

	}

	export enum CheckNameAvailabilityResultReason { Invalid = 'Invalid', AlreadyExists = 'AlreadyExists' }


	/** The reason of name availability result */
	export enum CheckNameUnavailableReason { Invalid = 'Invalid', AlreadyExists = 'AlreadyExists' }


	/** The default error response */
	export interface CloudError {

		/** Content of the default error response */
		error?: CloudErrorBody;
	}

	/** The default error response */
	export interface CloudErrorFormProperties {
	}
	export function CreateCloudErrorFormGroup() {
		return new FormGroup<CloudErrorFormProperties>({
		});

	}


	/** Content of the default error response */
	export interface CloudErrorBody {

		/** The error code */
		code?: string | null;

		/** The list of additional details */
		details?: Array<CloudErrorBody>;

		/** The error message */
		message?: string | null;

		/** The target of the particular error */
		target?: string | null;
	}

	/** Content of the default error response */
	export interface CloudErrorBodyFormProperties {

		/** The error code */
		code: FormControl<string | null | undefined>,

		/** The error message */
		message: FormControl<string | null | undefined>,

		/** The target of the particular error */
		target: FormControl<string | null | undefined>,
	}
	export function CreateCloudErrorBodyFormGroup() {
		return new FormGroup<CloudErrorBodyFormProperties>({
			code: new FormControl<string | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
			target: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The description of the EngagementFabric account key */
	export interface KeyDescription {

		/** The name of the key */
		name?: string | null;

		/** The rank of the EngagementFabric account key */
		rank?: KeyDescriptionRank | null;

		/** The value of the key */
		value?: string | null;
	}

	/** The description of the EngagementFabric account key */
	export interface KeyDescriptionFormProperties {

		/** The name of the key */
		name: FormControl<string | null | undefined>,

		/** The rank of the EngagementFabric account key */
		rank: FormControl<KeyDescriptionRank | null | undefined>,

		/** The value of the key */
		value: FormControl<string | null | undefined>,
	}
	export function CreateKeyDescriptionFormGroup() {
		return new FormGroup<KeyDescriptionFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			rank: new FormControl<KeyDescriptionRank | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum KeyDescriptionRank { PrimaryKey = 'PrimaryKey', SecondaryKey = 'SecondaryKey' }


	/** The list of the EngagementFabric account keys */
	export interface KeyDescriptionList {

		/** Account keys */
		value?: Array<KeyDescription>;
	}

	/** The list of the EngagementFabric account keys */
	export interface KeyDescriptionListFormProperties {
	}
	export function CreateKeyDescriptionListFormGroup() {
		return new FormGroup<KeyDescriptionListFormProperties>({
		});

	}


	/** The rank of the EngagementFabric account key */
	export enum KeyRank { PrimaryKey = 'PrimaryKey', SecondaryKey = 'SecondaryKey' }


	/** The EngagementFabric operation */
	export interface Operation {

		/** The display information of the EngagementFabric operation */
		display?: OperationDisplay;

		/** The name of the EngagementFabric operation */
		name?: string | null;
	}

	/** The EngagementFabric operation */
	export interface OperationFormProperties {

		/** The name of the EngagementFabric operation */
		name: FormControl<string | null | undefined>,
	}
	export function CreateOperationFormGroup() {
		return new FormGroup<OperationFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The display information of the EngagementFabric operation */
	export interface OperationDisplay {

		/** The description of the EngagementFabric operation */
		description?: string | null;

		/** The name of the EngagementFabric operation */
		operation?: string | null;

		/** The resource provider namespace of the EngagementFabric operation */
		provider?: string | null;

		/** The resource type of the EngagementFabric operation */
		resource?: string | null;
	}

	/** The display information of the EngagementFabric operation */
	export interface OperationDisplayFormProperties {

		/** The description of the EngagementFabric operation */
		description: FormControl<string | null | undefined>,

		/** The name of the EngagementFabric operation */
		operation: FormControl<string | null | undefined>,

		/** The resource provider namespace of the EngagementFabric operation */
		provider: FormControl<string | null | undefined>,

		/** The resource type of the EngagementFabric operation */
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


	/** The list of the EngagementFabric operations */
	export interface OperationList {

		/** The EngagementFabric operations */
		value?: Array<Operation>;
	}

	/** The list of the EngagementFabric operations */
	export interface OperationListFormProperties {
	}
	export function CreateOperationListFormGroup() {
		return new FormGroup<OperationListFormProperties>({
		});

	}


	/** The base model for the proxy-only Azure resource */
	export interface ProxyOnlyResource {
	}

	/** The base model for the proxy-only Azure resource */
	export interface ProxyOnlyResourceFormProperties {
	}
	export function CreateProxyOnlyResourceFormGroup() {
		return new FormGroup<ProxyOnlyResourceFormProperties>({
		});

	}


	/** The parameter to regenerate single EngagementFabric account key */
	export interface RegenerateKeyParameter {

		/**
		 * The name of key to be regenerated
		 * Required
		 */
		name: string;

		/**
		 * The rank of the EngagementFabric account key
		 * Required
		 */
		rank: KeyDescriptionRank;
	}

	/** The parameter to regenerate single EngagementFabric account key */
	export interface RegenerateKeyParameterFormProperties {

		/**
		 * The name of key to be regenerated
		 * Required
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * The rank of the EngagementFabric account key
		 * Required
		 */
		rank: FormControl<KeyDescriptionRank | null | undefined>,
	}
	export function CreateRegenerateKeyParameterFormGroup() {
		return new FormGroup<RegenerateKeyParameterFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			rank: new FormControl<KeyDescriptionRank | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The base model for Azure resource */
	export interface Resource {

		/** The ID of the resource */
		id?: string | null;

		/** The name of the resource */
		name?: string | null;

		/** The fully qualified type of the resource */
		type?: string | null;
	}

	/** The base model for Azure resource */
	export interface ResourceFormProperties {

		/** The ID of the resource */
		id: FormControl<string | null | undefined>,

		/** The name of the resource */
		name: FormControl<string | null | undefined>,

		/** The fully qualified type of the resource */
		type: FormControl<string | null | undefined>,
	}
	export function CreateResourceFormGroup() {
		return new FormGroup<ResourceFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The EngagementFabric SKU */
	export interface SKU {

		/**
		 * The name of the SKU
		 * Required
		 */
		name: string;

		/** The price tier of the SKU */
		tier?: string | null;
	}

	/** The EngagementFabric SKU */
	export interface SKUFormProperties {

		/**
		 * The name of the SKU
		 * Required
		 */
		name: FormControl<string | null | undefined>,

		/** The price tier of the SKU */
		tier: FormControl<string | null | undefined>,
	}
	export function CreateSKUFormGroup() {
		return new FormGroup<SKUFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			tier: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The EngagementFabric SKU description of given resource type */
	export interface SkuDescription {

		/** Locations and zones */
		locationInfo?: Array<SkuLocationInfoItem>;

		/** The set of locations that the SKU is available */
		locations?: Array<string>;

		/** The name of the SKU */
		name?: string | null;

		/** The fully qualified resource type */
		resourceType?: string | null;

		/** The restrictions because of which SKU cannot be used */
		restrictions?: Array<string>;

		/** The price tier of the SKU */
		tier?: string | null;
	}

	/** The EngagementFabric SKU description of given resource type */
	export interface SkuDescriptionFormProperties {

		/** The name of the SKU */
		name: FormControl<string | null | undefined>,

		/** The fully qualified resource type */
		resourceType: FormControl<string | null | undefined>,

		/** The price tier of the SKU */
		tier: FormControl<string | null | undefined>,
	}
	export function CreateSkuDescriptionFormGroup() {
		return new FormGroup<SkuDescriptionFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			resourceType: new FormControl<string | null | undefined>(undefined),
			tier: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The Locations and zones info for SKU */
	export interface SkuLocationInfoItem {

		/** The available location of the SKU */
		location?: string | null;

		/** The available zone of the SKU */
		zones?: Array<string>;
	}

	/** The Locations and zones info for SKU */
	export interface SkuLocationInfoItemFormProperties {

		/** The available location of the SKU */
		location: FormControl<string | null | undefined>,
	}
	export function CreateSkuLocationInfoItemFormGroup() {
		return new FormGroup<SkuLocationInfoItemFormProperties>({
			location: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The list of the EngagementFabric SKU descriptions */
	export interface SkuDescriptionList {

		/** SKU descriptions */
		value?: Array<SkuDescription>;
	}

	/** The list of the EngagementFabric SKU descriptions */
	export interface SkuDescriptionListFormProperties {
	}
	export function CreateSkuDescriptionListFormGroup() {
		return new FormGroup<SkuDescriptionListFormProperties>({
		});

	}


	/** The base model for the tracked Azure resource */
	export interface TrackedResource {

		/**
		 * The location of the resource
		 * Required
		 */
		location: string;

		/**
		 * The EngagementFabric SKU
		 * Required
		 */
		sku: SKU;

		/** The tags of the resource */
		tags?: {[id: string]: string };
	}

	/** The base model for the tracked Azure resource */
	export interface TrackedResourceFormProperties {

		/**
		 * The location of the resource
		 * Required
		 */
		location: FormControl<string | null | undefined>,

		/** The tags of the resource */
		tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateTrackedResourceFormGroup() {
		return new FormGroup<TrackedResourceFormProperties>({
			location: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * List operation of EngagementFabric resources
		 * Get providers/Microsoft.EngagementFabric/operations
		 * @param {string} api_version API version
		 * @return {OperationList} OK
		 */
		Operations_List(api_version: string): Observable<OperationList> {
			return this.http.get<OperationList>(this.baseUri + 'providers/Microsoft.EngagementFabric/operations?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * List the EngagementFabric accounts in given subscription
		 * Get subscriptions/{subscriptionId}/providers/Microsoft.EngagementFabric/Accounts
		 * @param {string} subscriptionId Subscription ID
		 * @param {string} api_version API version
		 * @return {AccountList} OK
		 */
		Accounts_List(subscriptionId: string, api_version: string): Observable<AccountList> {
			return this.http.get<AccountList>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/providers/Microsoft.EngagementFabric/Accounts&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * List available SKUs of EngagementFabric resource
		 * Get subscriptions/{subscriptionId}/providers/Microsoft.EngagementFabric/skus
		 * @param {string} subscriptionId Subscription ID
		 * @param {string} api_version API version
		 * @return {SkuDescriptionList} OK
		 */
		SKUs_List(subscriptionId: string, api_version: string): Observable<SkuDescriptionList> {
			return this.http.get<SkuDescriptionList>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/providers/Microsoft.EngagementFabric/skus&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * List EngagementFabric accounts in given resource group
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EngagementFabric/Accounts
		 * @param {string} subscriptionId Subscription ID
		 * @param {string} resourceGroupName Resource Group Name
		 * @param {string} api_version API version
		 * @return {AccountList} OK
		 */
		Accounts_ListByResourceGroup(subscriptionId: string, resourceGroupName: string, api_version: string): Observable<AccountList> {
			return this.http.get<AccountList>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.EngagementFabric/Accounts&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Get the EngagementFabric account
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EngagementFabric/Accounts/{accountName}
		 * @param {string} subscriptionId Subscription ID
		 * @param {string} resourceGroupName Resource Group Name
		 * @param {string} accountName Account Name
		 * @param {string} api_version API version
		 * @return {Account} OK
		 */
		Accounts_Get(subscriptionId: string, resourceGroupName: string, accountName: string, api_version: string): Observable<Account> {
			return this.http.get<Account>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.EngagementFabric/Accounts/' + (accountName == null ? '' : encodeURIComponent(accountName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Create or Update the EngagementFabric account
		 * Put subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EngagementFabric/Accounts/{accountName}
		 * @param {string} subscriptionId Subscription ID
		 * @param {string} resourceGroupName Resource Group Name
		 * @param {string} accountName Account Name
		 * @param {string} api_version API version
		 * @param {Account} requestBody The EngagementFabric account description
		 * @return {Account} OK
		 */
		Accounts_CreateOrUpdate(subscriptionId: string, resourceGroupName: string, accountName: string, api_version: string, requestBody: Account): Observable<Account> {
			return this.http.put<Account>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.EngagementFabric/Accounts/' + (accountName == null ? '' : encodeURIComponent(accountName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Delete the EngagementFabric account
		 * Delete subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EngagementFabric/Accounts/{accountName}
		 * @param {string} subscriptionId Subscription ID
		 * @param {string} resourceGroupName Resource Group Name
		 * @param {string} accountName Account Name
		 * @param {string} api_version API version
		 * @return {void} OK
		 */
		Accounts_Delete(subscriptionId: string, resourceGroupName: string, accountName: string, api_version: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.EngagementFabric/Accounts/' + (accountName == null ? '' : encodeURIComponent(accountName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Update EngagementFabric account
		 * Patch subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EngagementFabric/Accounts/{accountName}
		 * @param {string} subscriptionId Subscription ID
		 * @param {string} resourceGroupName Resource Group Name
		 * @param {string} accountName Account Name
		 * @param {string} api_version API version
		 * @param {AccountPatch} requestBody The account patch
		 * @return {Account} OK
		 */
		Accounts_Update(subscriptionId: string, resourceGroupName: string, accountName: string, api_version: string, requestBody: AccountPatch): Observable<Account> {
			return this.http.patch<Account>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.EngagementFabric/Accounts/' + (accountName == null ? '' : encodeURIComponent(accountName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * List the EngagementFabric channels
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EngagementFabric/Accounts/{accountName}/Channels
		 * @param {string} subscriptionId Subscription ID
		 * @param {string} resourceGroupName Resource Group Name
		 * @param {string} accountName Account Name
		 * @param {string} api_version API version
		 * @return {ChannelList} OK
		 */
		Channels_ListByAccount(subscriptionId: string, resourceGroupName: string, accountName: string, api_version: string): Observable<ChannelList> {
			return this.http.get<ChannelList>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.EngagementFabric/Accounts/' + (accountName == null ? '' : encodeURIComponent(accountName)) + '/Channels&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Get the EngagementFabric channel
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EngagementFabric/Accounts/{accountName}/Channels/{channelName}
		 * @param {string} subscriptionId Subscription ID
		 * @param {string} resourceGroupName Resource Group Name
		 * @param {string} accountName Account Name
		 * @param {string} channelName Channel Name
		 * @param {string} api_version API version
		 * @return {Channel} OK
		 */
		Channels_Get(subscriptionId: string, resourceGroupName: string, accountName: string, channelName: string, api_version: string): Observable<Channel> {
			return this.http.get<Channel>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.EngagementFabric/Accounts/' + (accountName == null ? '' : encodeURIComponent(accountName)) + '/Channels/' + (channelName == null ? '' : encodeURIComponent(channelName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Create or Update the EngagementFabric channel
		 * Put subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EngagementFabric/Accounts/{accountName}/Channels/{channelName}
		 * @param {string} subscriptionId Subscription ID
		 * @param {string} resourceGroupName Resource Group Name
		 * @param {string} accountName Account Name
		 * @param {string} channelName Channel Name
		 * @param {string} api_version API version
		 * @param {Channel} requestBody The EngagementFabric channel description
		 * @return {Channel} OK
		 */
		Channels_CreateOrUpdate(subscriptionId: string, resourceGroupName: string, accountName: string, channelName: string, api_version: string, requestBody: Channel): Observable<Channel> {
			return this.http.put<Channel>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.EngagementFabric/Accounts/' + (accountName == null ? '' : encodeURIComponent(accountName)) + '/Channels/' + (channelName == null ? '' : encodeURIComponent(channelName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Delete the EngagementFabric channel
		 * Delete subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EngagementFabric/Accounts/{accountName}/Channels/{channelName}
		 * @param {string} subscriptionId Subscription ID
		 * @param {string} resourceGroupName Resource Group Name
		 * @param {string} accountName Account Name
		 * @param {string} channelName The EngagementFabric channel name
		 * @param {string} api_version API version
		 * @return {void} OK
		 */
		Channels_Delete(subscriptionId: string, resourceGroupName: string, accountName: string, channelName: string, api_version: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.EngagementFabric/Accounts/' + (accountName == null ? '' : encodeURIComponent(accountName)) + '/Channels/' + (channelName == null ? '' : encodeURIComponent(channelName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * List available EngagementFabric channel types and functions
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EngagementFabric/Accounts/{accountName}/listChannelTypes
		 * @param {string} subscriptionId Subscription ID
		 * @param {string} resourceGroupName Resource Group Name
		 * @param {string} accountName Account Name
		 * @param {string} api_version API version
		 * @return {ChannelTypeDescriptionList} OK
		 */
		Accounts_ListChannelTypes(subscriptionId: string, resourceGroupName: string, accountName: string, api_version: string): Observable<ChannelTypeDescriptionList> {
			return this.http.post<ChannelTypeDescriptionList>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.EngagementFabric/Accounts/' + (accountName == null ? '' : encodeURIComponent(accountName)) + '/listChannelTypes&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), null, {});
		}

		/**
		 * List keys of the EngagementFabric account
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EngagementFabric/Accounts/{accountName}/listKeys
		 * @param {string} subscriptionId Subscription ID
		 * @param {string} resourceGroupName Resource Group Name
		 * @param {string} accountName Account Name
		 * @param {string} api_version API version
		 * @return {KeyDescriptionList} OK
		 */
		Accounts_ListKeys(subscriptionId: string, resourceGroupName: string, accountName: string, api_version: string): Observable<KeyDescriptionList> {
			return this.http.post<KeyDescriptionList>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.EngagementFabric/Accounts/' + (accountName == null ? '' : encodeURIComponent(accountName)) + '/listKeys&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), null, {});
		}

		/**
		 * Regenerate key of the EngagementFabric account
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EngagementFabric/Accounts/{accountName}/regenerateKey
		 * @param {string} subscriptionId Subscription ID
		 * @param {string} resourceGroupName Resource Group Name
		 * @param {string} accountName Account Name
		 * @param {string} api_version API version
		 * @param {RegenerateKeyParameter} requestBody Parameters specifying the key to be regenerated
		 * @return {KeyDescription} OK
		 */
		Accounts_RegenerateKey(subscriptionId: string, resourceGroupName: string, accountName: string, api_version: string, requestBody: RegenerateKeyParameter): Observable<KeyDescription> {
			return this.http.post<KeyDescription>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.EngagementFabric/Accounts/' + (accountName == null ? '' : encodeURIComponent(accountName)) + '/regenerateKey&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Check availability of EngagementFabric resource
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EngagementFabric/checkNameAvailability
		 * @param {string} subscriptionId Subscription ID
		 * @param {string} resourceGroupName Resource Group Name
		 * @param {string} api_version API version
		 * @param {CheckNameAvailabilityParameter} requestBody Parameter describing the name to be checked
		 * @return {CheckNameAvailabilityResult} OK
		 */
		CheckNameAvailability(subscriptionId: string, resourceGroupName: string, api_version: string, requestBody: CheckNameAvailabilityParameter): Observable<CheckNameAvailabilityResult> {
			return this.http.post<CheckNameAvailabilityResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.EngagementFabric/checkNameAvailability&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

}

