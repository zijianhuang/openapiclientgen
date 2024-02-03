import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** Represents the API profile. */
	export interface ApiProfile {

		/** The API version. */
		apiVersion?: string | null;

		/** The profile version. */
		profileVersion?: string | null;
	}

	/** Represents the API profile. */
	export interface ApiProfileFormProperties {

		/** The API version. */
		apiVersion: FormControl<string | null | undefined>,

		/** The profile version. */
		profileVersion: FormControl<string | null | undefined>,
	}
	export function CreateApiProfileFormGroup() {
		return new FormGroup<ApiProfileFormProperties>({
			apiVersion: new FormControl<string | null | undefined>(undefined),
			profileVersion: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** List of the API profiles. */
	export interface ApiProfileList {

		/** URI to next page. */
		nextLink?: string | null;

		/** List of the API profiles. */
		value?: Array<ApiProfile>;
	}

	/** List of the API profiles. */
	export interface ApiProfileListFormProperties {

		/** URI to next page. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateApiProfileListFormGroup() {
		return new FormGroup<ApiProfileListFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The linked resource access checks. */
	export interface AuthorizationActionMapping {

		/** The desired action name. */
		desired?: string | null;

		/** The original action name. */
		original?: string | null;
	}

	/** The linked resource access checks. */
	export interface AuthorizationActionMappingFormProperties {

		/** The desired action name. */
		desired: FormControl<string | null | undefined>,

		/** The original action name. */
		original: FormControl<string | null | undefined>,
	}
	export function CreateAuthorizationActionMappingFormGroup() {
		return new FormGroup<AuthorizationActionMappingFormProperties>({
			desired: new FormControl<string | null | undefined>(undefined),
			original: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** List of the read-only actions. */
	export interface AuthorizationActionMappingList {

		/** URI to next page. */
		nextLink?: string | null;

		/** List of the read-only actions. */
		value?: Array<AuthorizationActionMapping>;
	}

	/** List of the read-only actions. */
	export interface AuthorizationActionMappingListFormProperties {

		/** URI to next page. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateAuthorizationActionMappingListFormGroup() {
		return new FormGroup<AuthorizationActionMappingListFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The API versions supported by the endpoint. */
	export interface AzureResourceHydrationAccount {

		/** The account name. */
		accountName?: string | null;

		/** The encrypted key. */
		encryptedKey?: string | null;

		/** The next child resource consistency job limit. */
		maxChildResourceConsistencyJobLimit?: number | null;

		/** The subscription identifier. */
		subscriptionId?: string | null;
	}

	/** The API versions supported by the endpoint. */
	export interface AzureResourceHydrationAccountFormProperties {

		/** The account name. */
		accountName: FormControl<string | null | undefined>,

		/** The encrypted key. */
		encryptedKey: FormControl<string | null | undefined>,

		/** The next child resource consistency job limit. */
		maxChildResourceConsistencyJobLimit: FormControl<number | null | undefined>,

		/** The subscription identifier. */
		subscriptionId: FormControl<string | null | undefined>,
	}
	export function CreateAzureResourceHydrationAccountFormGroup() {
		return new FormGroup<AzureResourceHydrationAccountFormProperties>({
			accountName: new FormControl<string | null | undefined>(undefined),
			encryptedKey: new FormControl<string | null | undefined>(undefined),
			maxChildResourceConsistencyJobLimit: new FormControl<number | null | undefined>(undefined),
			subscriptionId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** List of the resource hydration accounts. */
	export interface AzureResourceHydrationAccountList {

		/** URI to next page. */
		nextLink?: string | null;

		/** List of the resource hydration accounts. */
		value?: Array<AzureResourceHydrationAccount>;
	}

	/** List of the resource hydration accounts. */
	export interface AzureResourceHydrationAccountListFormProperties {

		/** URI to next page. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateAzureResourceHydrationAccountListFormGroup() {
		return new FormGroup<AzureResourceHydrationAccountListFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The manifest extension collection definition. */
	export interface ExtensionCollectionDefinition {

		/** List of the extensions. */
		extensions?: ExtensionList;

		/** The version of the format a.b[.c[.d]]. see System.Version documentation for more details. */
		version?: string | null;
	}

	/** The manifest extension collection definition. */
	export interface ExtensionCollectionDefinitionFormProperties {

		/** The version of the format a.b[.c[.d]]. see System.Version documentation for more details. */
		version: FormControl<string | null | undefined>,
	}
	export function CreateExtensionCollectionDefinitionFormGroup() {
		return new FormGroup<ExtensionCollectionDefinitionFormProperties>({
			version: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The data contract for specifying extensions in resource provider manifests. */
	export interface ExtensionDefinition {

		/** The name. */
		name?: string | null;

		/** The obsolete bundles bitmask. */
		obsoleteBundlesBitmask?: number | null;

		/** The extension properties definition. */
		properties?: ExtensionPropertiesDefinition;

		/** List of the resource access. */
		resourceAccess?: ResourceAccessList;

		/** The Uri */
		uri?: string | null;
	}

	/** The data contract for specifying extensions in resource provider manifests. */
	export interface ExtensionDefinitionFormProperties {

		/** The name. */
		name: FormControl<string | null | undefined>,

		/** The obsolete bundles bitmask. */
		obsoleteBundlesBitmask: FormControl<number | null | undefined>,

		/** The Uri */
		uri: FormControl<string | null | undefined>,
	}
	export function CreateExtensionDefinitionFormGroup() {
		return new FormGroup<ExtensionDefinitionFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			obsoleteBundlesBitmask: new FormControl<number | null | undefined>(undefined),
			uri: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The extension properties definition. */
	export interface ExtensionPropertiesDefinition {

		/** The quota create blade. */
		quotaCreateBladeName?: string | null;

		/** The resource provider dashboard blade. */
		resourceProviderDashboardBladeName?: string | null;
	}

	/** The extension properties definition. */
	export interface ExtensionPropertiesDefinitionFormProperties {

		/** The quota create blade. */
		quotaCreateBladeName: FormControl<string | null | undefined>,

		/** The resource provider dashboard blade. */
		resourceProviderDashboardBladeName: FormControl<string | null | undefined>,
	}
	export function CreateExtensionPropertiesDefinitionFormGroup() {
		return new FormGroup<ExtensionPropertiesDefinitionFormProperties>({
			quotaCreateBladeName: new FormControl<string | null | undefined>(undefined),
			resourceProviderDashboardBladeName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** List of the extensions. */
	export interface ExtensionList {

		/** URI to next page. */
		nextLink?: string | null;

		/** List of the extensions. */
		value?: Array<ExtensionDefinition>;
	}

	/** List of the extensions. */
	export interface ExtensionListFormProperties {

		/** URI to next page. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateExtensionListFormGroup() {
		return new FormGroup<ExtensionListFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The fan-out linked notification rule. */
	export interface FanoutLinkedNotificationRule {

		/** The list of actions. */
		actions?: Array<string>;

		/** List of the resource provider endpoints. */
		endpoints?: ResourceProviderEndpointList;
	}

	/** The fan-out linked notification rule. */
	export interface FanoutLinkedNotificationRuleFormProperties {
	}
	export function CreateFanoutLinkedNotificationRuleFormGroup() {
		return new FormGroup<FanoutLinkedNotificationRuleFormProperties>({
		});

	}


	/** List of the linked notification rules. */
	export interface FanoutLinkedNotificationRuleList {

		/** URI to next page. */
		nextLink?: string | null;

		/** List of the linked notification rules. */
		value?: Array<FanoutLinkedNotificationRule>;
	}

	/** List of the linked notification rules. */
	export interface FanoutLinkedNotificationRuleListFormProperties {

		/** URI to next page. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateFanoutLinkedNotificationRuleListFormGroup() {
		return new FormGroup<FanoutLinkedNotificationRuleListFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The linked resource access checks. */
	export interface LinkedAccessCheck {

		/** The action name. */
		actionName?: string | null;

		/** The linked action. */
		linkedAction?: string | null;

		/** The linked action verb. */
		linkedActionVerb?: string | null;

		/** The linked property. */
		linkedProperty?: string | null;

		/** The linked type. */
		linkedType?: string | null;
	}

	/** The linked resource access checks. */
	export interface LinkedAccessCheckFormProperties {

		/** The action name. */
		actionName: FormControl<string | null | undefined>,

		/** The linked action. */
		linkedAction: FormControl<string | null | undefined>,

		/** The linked action verb. */
		linkedActionVerb: FormControl<string | null | undefined>,

		/** The linked property. */
		linkedProperty: FormControl<string | null | undefined>,

		/** The linked type. */
		linkedType: FormControl<string | null | undefined>,
	}
	export function CreateLinkedAccessCheckFormGroup() {
		return new FormGroup<LinkedAccessCheckFormProperties>({
			actionName: new FormControl<string | null | undefined>(undefined),
			linkedAction: new FormControl<string | null | undefined>(undefined),
			linkedActionVerb: new FormControl<string | null | undefined>(undefined),
			linkedProperty: new FormControl<string | null | undefined>(undefined),
			linkedType: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** List of the linked access checks. */
	export interface LinkedAccessCheckList {

		/** URI to next page. */
		nextLink?: string | null;

		/** List of the linked access checks. */
		value?: Array<LinkedAccessCheck>;
	}

	/** List of the linked access checks. */
	export interface LinkedAccessCheckListFormProperties {

		/** URI to next page. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateLinkedAccessCheckListFormGroup() {
		return new FormGroup<LinkedAccessCheckListFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The resource type linked action. */
	export enum LinkedAction { NotSpecified = 'NotSpecified', Blocked = 'Blocked', Validate = 'Validate', Enabled = 'Enabled' }


	/** The linked notification rule. */
	export interface LinkedNotificationRule {

		/** List of actions. */
		actions?: Array<string>;
	}

	/** The linked notification rule. */
	export interface LinkedNotificationRuleFormProperties {
	}
	export function CreateLinkedNotificationRuleFormGroup() {
		return new FormGroup<LinkedNotificationRuleFormProperties>({
		});

	}


	/** List of the linked notification rules. */
	export interface LinkedNotificationRuleList {

		/** URI to next page. */
		nextLink?: string | null;

		/** List of the linked notification rules. */
		value?: Array<LinkedNotificationRule>;
	}

	/** List of the linked notification rules. */
	export interface LinkedNotificationRuleListFormProperties {

		/** URI to next page. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateLinkedNotificationRuleListFormGroup() {
		return new FormGroup<LinkedNotificationRuleListFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The linked operation. */
	export enum LinkedOperation { None = 'None', CrossResourceGroupResourceMove = 'CrossResourceGroupResourceMove', CrossSubscriptionResourceMove = 'CrossSubscriptionResourceMove' }


	/** The linked resource access checks. */
	export interface LinkedOperationRule {

		/** The list of resource types this rule depends on. */
		dependsOnTypes?: Array<string>;

		/** The resource type linked action. */
		linkedAction?: LinkedAction | null;

		/** The linked operation. */
		linkedOperation?: LinkedOperation | null;
	}

	/** The linked resource access checks. */
	export interface LinkedOperationRuleFormProperties {

		/** The resource type linked action. */
		linkedAction: FormControl<LinkedAction | null | undefined>,

		/** The linked operation. */
		linkedOperation: FormControl<LinkedOperation | null | undefined>,
	}
	export function CreateLinkedOperationRuleFormGroup() {
		return new FormGroup<LinkedOperationRuleFormProperties>({
			linkedAction: new FormControl<LinkedAction | null | undefined>(undefined),
			linkedOperation: new FormControl<LinkedOperation | null | undefined>(undefined),
		});

	}


	/** List of the linked operation rules. */
	export interface LinkedOperationRuleList {

		/** URI to next page. */
		nextLink?: string | null;

		/** List of the linked operation rules. */
		value?: Array<LinkedOperationRule>;
	}

	/** List of the linked operation rules. */
	export interface LinkedOperationRuleListFormProperties {

		/** URI to next page. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateLinkedOperationRuleListFormGroup() {
		return new FormGroup<LinkedOperationRuleListFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The manifest. */
	export interface Manifest {

		/** A value indicating whether the manifest is always routable by all subscriptions. */
		alwaysRoutable?: boolean | null;

		/** The display name. */
		displayName?: string | null;

		/** A value indicating whether this resource provider is enabled. */
		enabled?: boolean | null;

		/** The manifest extension collection definition. */
		extensionCollection?: ExtensionCollectionDefinition;

		/** List of the linked notification rules. */
		linkedNotificationRules?: FanoutLinkedNotificationRuleList;

		/** The metadata. */
		metadata?: string | null;

		/** The unique identifier of the registration. */
		name?: string | null;

		/** The namespace. */
		namespace?: string | null;

		/** The resource provider authorization information. */
		providerAuthorization?: ResourceProviderAuthorization;

		/** The location of the provider. */
		providerLocation?: string | null;

		/** The resource provider type. */
		providerType?: ManifestProviderType | null;

		/** The provisioning state. */
		provisioningState?: ManifestProvisioningState | null;

		/** The name of the resource group. */
		resourceGroupName?: string | null;

		/** List of the resource hydration accounts. */
		resourceHydrationAccounts?: AzureResourceHydrationAccountList;

		/** The location of the resource. */
		resourceLocation?: string | null;

		/** The resource tags. */
		resourceTags?: string | null;

		/** List of the resource types. */
		resourceTypes?: ResourceTypeList;

		/** Resource manager type. */
		routingResourceManagerType?: ManifestRoutingResourceManagerType | null;

		/** The subscription ID under which RP is registered. */
		subscriptionId?: string | null;
	}

	/** The manifest. */
	export interface ManifestFormProperties {

		/** A value indicating whether the manifest is always routable by all subscriptions. */
		alwaysRoutable: FormControl<boolean | null | undefined>,

		/** The display name. */
		displayName: FormControl<string | null | undefined>,

		/** A value indicating whether this resource provider is enabled. */
		enabled: FormControl<boolean | null | undefined>,

		/** The metadata. */
		metadata: FormControl<string | null | undefined>,

		/** The unique identifier of the registration. */
		name: FormControl<string | null | undefined>,

		/** The namespace. */
		namespace: FormControl<string | null | undefined>,

		/** The location of the provider. */
		providerLocation: FormControl<string | null | undefined>,

		/** The resource provider type. */
		providerType: FormControl<ManifestProviderType | null | undefined>,

		/** The provisioning state. */
		provisioningState: FormControl<ManifestProvisioningState | null | undefined>,

		/** The name of the resource group. */
		resourceGroupName: FormControl<string | null | undefined>,

		/** The location of the resource. */
		resourceLocation: FormControl<string | null | undefined>,

		/** The resource tags. */
		resourceTags: FormControl<string | null | undefined>,

		/** Resource manager type. */
		routingResourceManagerType: FormControl<ManifestRoutingResourceManagerType | null | undefined>,

		/** The subscription ID under which RP is registered. */
		subscriptionId: FormControl<string | null | undefined>,
	}
	export function CreateManifestFormGroup() {
		return new FormGroup<ManifestFormProperties>({
			alwaysRoutable: new FormControl<boolean | null | undefined>(undefined),
			displayName: new FormControl<string | null | undefined>(undefined),
			enabled: new FormControl<boolean | null | undefined>(undefined),
			metadata: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			namespace: new FormControl<string | null | undefined>(undefined),
			providerLocation: new FormControl<string | null | undefined>(undefined),
			providerType: new FormControl<ManifestProviderType | null | undefined>(undefined),
			provisioningState: new FormControl<ManifestProvisioningState | null | undefined>(undefined),
			resourceGroupName: new FormControl<string | null | undefined>(undefined),
			resourceLocation: new FormControl<string | null | undefined>(undefined),
			resourceTags: new FormControl<string | null | undefined>(undefined),
			routingResourceManagerType: new FormControl<ManifestRoutingResourceManagerType | null | undefined>(undefined),
			subscriptionId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ManifestProviderType { NotSpecified = 'NotSpecified', Internal = 'Internal', External = 'External', RegistrationFree = 'RegistrationFree', TenantOnly = 'TenantOnly', AlwaysRoutable = 'AlwaysRoutable' }

	export enum ManifestProvisioningState { Accepted = 'Accepted', Creating = 'Creating', Deleting = 'Deleting', Moving = 'Moving', Failed = 'Failed', Succeeded = 'Succeeded' }

	export enum ManifestRoutingResourceManagerType { Default = 'Default', Admin = 'Admin' }


	/** List of manifests. */
	export interface ManifestList {

		/** URI to next page. */
		nextLink?: string | null;

		/** List of manifests. */
		value?: Array<Manifest>;
	}

	/** List of manifests. */
	export interface ManifestListFormProperties {

		/** URI to next page. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateManifestListFormGroup() {
		return new FormGroup<ManifestListFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The type of marketplace behavior for the resource type. */
	export enum MarketplaceType { NotSpecified = 'NotSpecified', AddOn = 'AddOn' }


	/** Extension Client Access Section. */
	export interface ResourceAccess {

		/** The name. */
		name?: string | null;

		/** The resource. */
		resource?: string | null;
	}

	/** Extension Client Access Section. */
	export interface ResourceAccessFormProperties {

		/** The name. */
		name: FormControl<string | null | undefined>,

		/** The resource. */
		resource: FormControl<string | null | undefined>,
	}
	export function CreateResourceAccessFormGroup() {
		return new FormGroup<ResourceAccessFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			resource: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** List of the resource access. */
	export interface ResourceAccessList {

		/** URI to next page. */
		nextLink?: string | null;

		/** List of the resource access. */
		value?: Array<ResourceAccess>;
	}

	/** List of the resource access. */
	export interface ResourceAccessListFormProperties {

		/** URI to next page. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateResourceAccessListFormGroup() {
		return new FormGroup<ResourceAccessListFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The resource deletion policy. */
	export enum ResourceDeletionPolicy { NotSpecified = 'NotSpecified', Cascade = 'Cascade' }


	/** The resource provider authorization information. */
	export interface ResourceProviderAuthorization {

		/** The application id of resource provider in AAD. */
		applicationId?: string | null;

		/** The role definition identifier against which a role assignment is created. */
		roleDefinitionId?: string | null;
	}

	/** The resource provider authorization information. */
	export interface ResourceProviderAuthorizationFormProperties {

		/** The application id of resource provider in AAD. */
		applicationId: FormControl<string | null | undefined>,

		/** The role definition identifier against which a role assignment is created. */
		roleDefinitionId: FormControl<string | null | undefined>,
	}
	export function CreateResourceProviderAuthorizationFormGroup() {
		return new FormGroup<ResourceProviderAuthorizationFormProperties>({
			applicationId: new FormControl<string | null | undefined>(undefined),
			roleDefinitionId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The API versions supported by the endpoint. */
	export interface ResourceProviderEndpoint {

		/** The API versions supported by the endpoint. */
		apiVersions?: Array<string>;

		/** The enabled. */
		enabled?: boolean | null;

		/** The endpoint uri. */
		endpointUri?: string | null;

		/** The timeout. */
		timeout?: string | null;
	}

	/** The API versions supported by the endpoint. */
	export interface ResourceProviderEndpointFormProperties {

		/** The enabled. */
		enabled: FormControl<boolean | null | undefined>,

		/** The endpoint uri. */
		endpointUri: FormControl<string | null | undefined>,

		/** The timeout. */
		timeout: FormControl<string | null | undefined>,
	}
	export function CreateResourceProviderEndpointFormGroup() {
		return new FormGroup<ResourceProviderEndpointFormProperties>({
			enabled: new FormControl<boolean | null | undefined>(undefined),
			endpointUri: new FormControl<string | null | undefined>(undefined),
			timeout: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** List of the resource provider endpoints. */
	export interface ResourceProviderEndpointList {

		/** URI to next page. */
		nextLink?: string | null;

		/** List of the resource provider endpoints. */
		value?: Array<ResourceProviderEndpoint>;
	}

	/** List of the resource provider endpoints. */
	export interface ResourceProviderEndpointListFormProperties {

		/** URI to next page. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateResourceProviderEndpointListFormGroup() {
		return new FormGroup<ResourceProviderEndpointListFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The resource provider type. */
	export enum ResourceProviderType { NotSpecified = 'NotSpecified', Internal = 'Internal', External = 'External', RegistrationFree = 'RegistrationFree', TenantOnly = 'TenantOnly', AlwaysRoutable = 'AlwaysRoutable' }


	/** The resource type definition. */
	export interface ResourceType {

		/** The allowed unauthorized actions. */
		allowedUnauthorizedActions?: Array<string>;

		/** List of the API profiles. */
		apiProfiles?: ApiProfileList;

		/** List of the read-only actions. */
		authorizationActionMappings?: AuthorizationActionMappingList;

		/** List of the resource provider endpoints. */
		endpoints?: ResourceProviderEndpointList;

		/** A value indicating whether the resource type is in global location. */
		inGlobalLocation?: boolean | null;

		/** List of the linked access checks. */
		linkedAccessChecks?: LinkedAccessCheckList;

		/** List of the linked notification rules. */
		linkedNotificationRules?: LinkedNotificationRuleList;

		/** List of the linked operation rules. */
		linkedOperationRules?: LinkedOperationRuleList;

		/** The type of marketplace behavior for the resource type. */
		marketplaceType?: MarketplaceType | null;

		/** The metered resource ids. */
		meteredResourceIds?: Array<string>;

		/** The name. */
		name?: string | null;

		/** The resource deletion policy. */
		resourceDeletionPolicy?: ResourceDeletionPolicy | null;

		/** The resource routing type. */
		routingType?: ResourceTypeRoutingType | null;
	}

	/** The resource type definition. */
	export interface ResourceTypeFormProperties {

		/** A value indicating whether the resource type is in global location. */
		inGlobalLocation: FormControl<boolean | null | undefined>,

		/** The type of marketplace behavior for the resource type. */
		marketplaceType: FormControl<MarketplaceType | null | undefined>,

		/** The name. */
		name: FormControl<string | null | undefined>,

		/** The resource deletion policy. */
		resourceDeletionPolicy: FormControl<ResourceDeletionPolicy | null | undefined>,

		/** The resource routing type. */
		routingType: FormControl<ResourceTypeRoutingType | null | undefined>,
	}
	export function CreateResourceTypeFormGroup() {
		return new FormGroup<ResourceTypeFormProperties>({
			inGlobalLocation: new FormControl<boolean | null | undefined>(undefined),
			marketplaceType: new FormControl<MarketplaceType | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			resourceDeletionPolicy: new FormControl<ResourceDeletionPolicy | null | undefined>(undefined),
			routingType: new FormControl<ResourceTypeRoutingType | null | undefined>(undefined),
		});

	}

	export enum ResourceTypeRoutingType { Default = 'Default', ProxyOnly = 'ProxyOnly', HostBased = 'HostBased', Extension = 'Extension', Tenant = 'Tenant', Fanout = 'Fanout', LocationBased = 'LocationBased' }


	/** List of the resource types. */
	export interface ResourceTypeList {

		/** URI to next page. */
		nextLink?: string | null;

		/** List of the resource types. */
		value?: Array<ResourceType>;
	}

	/** List of the resource types. */
	export interface ResourceTypeListFormProperties {

		/** URI to next page. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateResourceTypeListFormGroup() {
		return new FormGroup<ResourceTypeListFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The resource routing type. */
	export enum RoutingType { Default = 'Default', ProxyOnly = 'ProxyOnly', HostBased = 'HostBased', Extension = 'Extension', Tenant = 'Tenant', Fanout = 'Fanout', LocationBased = 'LocationBased' }

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Get a list of all manifests.
		 * Get subscriptions/{subscriptionId}/providers/Microsoft.Subscriptions.Admin/manifests
		 * @param {string} subscriptionId Subscription credentials which uniquely identify Microsoft Azure subscription.The subscription ID forms part of the URI for every service call.
		 * @param {string} api_version Client Api Version.
		 * @return {ManifestList} OK
		 */
		Manifests_List(subscriptionId: string, api_version: string): Observable<ManifestList> {
			return this.http.get<ManifestList>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/providers/Microsoft.Subscriptions.Admin/manifests&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Get the specified manifest.
		 * Get subscriptions/{subscriptionId}/providers/Microsoft.Subscriptions.Admin/manifests/{manifestName}
		 * @param {string} subscriptionId Subscription credentials which uniquely identify Microsoft Azure subscription.The subscription ID forms part of the URI for every service call.
		 * @param {string} api_version Client Api Version.
		 * @param {string} manifestName The manifest name.
		 * @return {Manifest} OK
		 */
		Manifests_Get(subscriptionId: string, api_version: string, manifestName: string): Observable<Manifest> {
			return this.http.get<Manifest>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/providers/Microsoft.Subscriptions.Admin/manifests/' + (manifestName == null ? '' : encodeURIComponent(manifestName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}
	}

}

