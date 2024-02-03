import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** Location information. */
	export interface Location {

		/** The display name of the location. */
		displayName?: string | null;

		/** The fully qualified ID of the location. For example, /subscriptions/00000000-0000-0000-0000-000000000000/locations/westus. */
		id?: string | null;

		/** Location metadata information */
		metadata?: LocationMetadata;

		/** The location name. */
		name?: string | null;

		/** The display name of the location and its region. */
		regionalDisplayName?: string | null;

		/** The subscription ID. */
		subscriptionId?: string | null;
	}

	/** Location information. */
	export interface LocationFormProperties {

		/** The display name of the location. */
		displayName: FormControl<string | null | undefined>,

		/** The fully qualified ID of the location. For example, /subscriptions/00000000-0000-0000-0000-000000000000/locations/westus. */
		id: FormControl<string | null | undefined>,

		/** The location name. */
		name: FormControl<string | null | undefined>,

		/** The display name of the location and its region. */
		regionalDisplayName: FormControl<string | null | undefined>,

		/** The subscription ID. */
		subscriptionId: FormControl<string | null | undefined>,
	}
	export function CreateLocationFormGroup() {
		return new FormGroup<LocationFormProperties>({
			displayName: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			regionalDisplayName: new FormControl<string | null | undefined>(undefined),
			subscriptionId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Location list operation response. */
	export interface LocationListResult {

		/** An array of locations. */
		value?: Array<Location>;
	}

	/** Location list operation response. */
	export interface LocationListResultFormProperties {
	}
	export function CreateLocationListResultFormGroup() {
		return new FormGroup<LocationListResultFormProperties>({
		});

	}


	/** Location metadata information */
	export interface LocationMetadata {

		/** The geography group of the location. */
		geographyGroup?: string | null;

		/** The latitude of the location. */
		latitude?: string | null;

		/** The longitude of the location. */
		longitude?: string | null;

		/** The regions paired to this region. */
		pairedRegion?: Array<PairedRegion>;

		/** The physical location of the Azure location. */
		physicalLocation?: string | null;

		/** The category of the region. */
		regionCategory?: LocationMetadataRegionCategory | null;

		/** The type of the region. */
		regionType?: LocationMetadataRegionType | null;
	}

	/** Location metadata information */
	export interface LocationMetadataFormProperties {

		/** The geography group of the location. */
		geographyGroup: FormControl<string | null | undefined>,

		/** The latitude of the location. */
		latitude: FormControl<string | null | undefined>,

		/** The longitude of the location. */
		longitude: FormControl<string | null | undefined>,

		/** The physical location of the Azure location. */
		physicalLocation: FormControl<string | null | undefined>,

		/** The category of the region. */
		regionCategory: FormControl<LocationMetadataRegionCategory | null | undefined>,

		/** The type of the region. */
		regionType: FormControl<LocationMetadataRegionType | null | undefined>,
	}
	export function CreateLocationMetadataFormGroup() {
		return new FormGroup<LocationMetadataFormProperties>({
			geographyGroup: new FormControl<string | null | undefined>(undefined),
			latitude: new FormControl<string | null | undefined>(undefined),
			longitude: new FormControl<string | null | undefined>(undefined),
			physicalLocation: new FormControl<string | null | undefined>(undefined),
			regionCategory: new FormControl<LocationMetadataRegionCategory | null | undefined>(undefined),
			regionType: new FormControl<LocationMetadataRegionType | null | undefined>(undefined),
		});

	}


	/** Information regarding paired region. */
	export interface PairedRegion {

		/** The fully qualified ID of the location. For example, /subscriptions/00000000-0000-0000-0000-000000000000/locations/westus. */
		id?: string | null;

		/** The name of the paired region. */
		name?: string | null;

		/** The subscription ID. */
		subscriptionId?: string | null;
	}

	/** Information regarding paired region. */
	export interface PairedRegionFormProperties {

		/** The fully qualified ID of the location. For example, /subscriptions/00000000-0000-0000-0000-000000000000/locations/westus. */
		id: FormControl<string | null | undefined>,

		/** The name of the paired region. */
		name: FormControl<string | null | undefined>,

		/** The subscription ID. */
		subscriptionId: FormControl<string | null | undefined>,
	}
	export function CreatePairedRegionFormGroup() {
		return new FormGroup<PairedRegionFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			subscriptionId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum LocationMetadataRegionCategory { Recommended = 'Recommended', Other = 'Other' }

	export enum LocationMetadataRegionType { Physical = 'Physical', Logical = 'Logical' }


	/** Information about a tenant managing the subscription. */
	export interface ManagedByTenant {

		/** The tenant ID of the managing tenant. This is a GUID. */
		tenantId?: string | null;
	}

	/** Information about a tenant managing the subscription. */
	export interface ManagedByTenantFormProperties {

		/** The tenant ID of the managing tenant. This is a GUID. */
		tenantId: FormControl<string | null | undefined>,
	}
	export function CreateManagedByTenantFormGroup() {
		return new FormGroup<ManagedByTenantFormProperties>({
			tenantId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Microsoft.Resources operation */
	export interface Operation {

		/** The object that represents the operation. */
		display?: any;

		/** Operation name: {provider}/{resource}/{operation} */
		name?: string | null;
	}

	/** Microsoft.Resources operation */
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


	/** Result of the request to list Microsoft.Resources operations. It contains a list of operations and a URL link to get the next set of results. */
	export interface OperationListResult {

		/** URL to get the next set of operation list results if there are any. */
		nextLink?: string | null;

		/** List of Microsoft.Resources operations. */
		value?: Array<Operation>;
	}

	/** Result of the request to list Microsoft.Resources operations. It contains a list of operations and a URL link to get the next set of results. */
	export interface OperationListResultFormProperties {

		/** URL to get the next set of operation list results if there are any. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateOperationListResultFormGroup() {
		return new FormGroup<OperationListResultFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Subscription information. */
	export interface Subscription {

		/** The authorization source of the request. Valid values are one or more combinations of Legacy, RoleBased, Bypassed, Direct and Management. For example, 'Legacy, RoleBased'. */
		authorizationSource?: string | null;

		/** The subscription display name. */
		displayName?: string | null;

		/** The fully qualified ID for the subscription. For example, /subscriptions/00000000-0000-0000-0000-000000000000. */
		id?: string | null;

		/** An array containing the tenants managing the subscription. */
		managedByTenants?: Array<ManagedByTenant>;

		/** The subscription state. Possible values are Enabled, Warned, PastDue, Disabled, and Deleted. */
		state?: SubscriptionState | null;

		/** The subscription ID. */
		subscriptionId?: string | null;

		/** Subscription policies. */
		subscriptionPolicies?: SubscriptionPolicies;

		/** The subscription tenant ID. */
		tenantId?: string | null;
	}

	/** Subscription information. */
	export interface SubscriptionFormProperties {

		/** The authorization source of the request. Valid values are one or more combinations of Legacy, RoleBased, Bypassed, Direct and Management. For example, 'Legacy, RoleBased'. */
		authorizationSource: FormControl<string | null | undefined>,

		/** The subscription display name. */
		displayName: FormControl<string | null | undefined>,

		/** The fully qualified ID for the subscription. For example, /subscriptions/00000000-0000-0000-0000-000000000000. */
		id: FormControl<string | null | undefined>,

		/** The subscription state. Possible values are Enabled, Warned, PastDue, Disabled, and Deleted. */
		state: FormControl<SubscriptionState | null | undefined>,

		/** The subscription ID. */
		subscriptionId: FormControl<string | null | undefined>,

		/** The subscription tenant ID. */
		tenantId: FormControl<string | null | undefined>,
	}
	export function CreateSubscriptionFormGroup() {
		return new FormGroup<SubscriptionFormProperties>({
			authorizationSource: new FormControl<string | null | undefined>(undefined),
			displayName: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<SubscriptionState | null | undefined>(undefined),
			subscriptionId: new FormControl<string | null | undefined>(undefined),
			tenantId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum SubscriptionState { Enabled = 'Enabled', Warned = 'Warned', PastDue = 'PastDue', Disabled = 'Disabled', Deleted = 'Deleted' }


	/** Subscription list operation response. */
	export interface SubscriptionListResult {

		/**
		 * The URL to get the next set of results.
		 * Required
		 */
		nextLink: string;

		/** An array of subscriptions. */
		value?: Array<Subscription>;
	}

	/** Subscription list operation response. */
	export interface SubscriptionListResultFormProperties {

		/**
		 * The URL to get the next set of results.
		 * Required
		 */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateSubscriptionListResultFormGroup() {
		return new FormGroup<SubscriptionListResultFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Subscription policies. */
	export interface SubscriptionPolicies {

		/** The subscription location placement ID. The ID indicates which regions are visible for a subscription. For example, a subscription with a location placement Id of Public_2014-09-01 has access to Azure public regions. */
		locationPlacementId?: string | null;

		/** The subscription quota ID. */
		quotaId?: string | null;

		/** The subscription spending limit. */
		spendingLimit?: SubscriptionPoliciesSpendingLimit | null;
	}

	/** Subscription policies. */
	export interface SubscriptionPoliciesFormProperties {

		/** The subscription location placement ID. The ID indicates which regions are visible for a subscription. For example, a subscription with a location placement Id of Public_2014-09-01 has access to Azure public regions. */
		locationPlacementId: FormControl<string | null | undefined>,

		/** The subscription quota ID. */
		quotaId: FormControl<string | null | undefined>,

		/** The subscription spending limit. */
		spendingLimit: FormControl<SubscriptionPoliciesSpendingLimit | null | undefined>,
	}
	export function CreateSubscriptionPoliciesFormGroup() {
		return new FormGroup<SubscriptionPoliciesFormProperties>({
			locationPlacementId: new FormControl<string | null | undefined>(undefined),
			quotaId: new FormControl<string | null | undefined>(undefined),
			spendingLimit: new FormControl<SubscriptionPoliciesSpendingLimit | null | undefined>(undefined),
		});

	}

	export enum SubscriptionPoliciesSpendingLimit { On = 'On', Off = 'Off', CurrentPeriodOff = 'CurrentPeriodOff' }


	/** Tenant Id information. */
	export interface TenantIdDescription {

		/** The fully qualified ID of the tenant. For example, /tenants/00000000-0000-0000-0000-000000000000. */
		id?: string | null;

		/** The tenant ID. For example, 00000000-0000-0000-0000-000000000000. */
		tenantId?: string | null;
	}

	/** Tenant Id information. */
	export interface TenantIdDescriptionFormProperties {

		/** The fully qualified ID of the tenant. For example, /tenants/00000000-0000-0000-0000-000000000000. */
		id: FormControl<string | null | undefined>,

		/** The tenant ID. For example, 00000000-0000-0000-0000-000000000000. */
		tenantId: FormControl<string | null | undefined>,
	}
	export function CreateTenantIdDescriptionFormGroup() {
		return new FormGroup<TenantIdDescriptionFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			tenantId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Tenant Ids information. */
	export interface TenantListResult {

		/**
		 * The URL to use for getting the next set of results.
		 * Required
		 */
		nextLink: string;

		/** An array of tenants. */
		value?: Array<TenantIdDescription>;
	}

	/** Tenant Ids information. */
	export interface TenantListResultFormProperties {

		/**
		 * The URL to use for getting the next set of results.
		 * Required
		 */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateTenantListResultFormGroup() {
		return new FormGroup<TenantListResultFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Lists all of the available Microsoft.Resources REST API operations.
		 * Get providers/Microsoft.Resources/operations
		 * @param {string} api_version The API version to use for the operation.
		 * @return {OperationListResult} OK. The request has succeeded.
		 */
		Operations_List(api_version: string): Observable<OperationListResult> {
			return this.http.get<OperationListResult>(this.baseUri + 'providers/Microsoft.Resources/operations?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Gets all subscriptions for a tenant.
		 * Get subscriptions
		 * @param {string} api_version The API version to use for the operation.
		 * @return {SubscriptionListResult} OK - Returns an array of subscriptions.
		 */
		Subscriptions_List(api_version: string): Observable<SubscriptionListResult> {
			return this.http.get<SubscriptionListResult>(this.baseUri + 'subscriptions?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Gets details about a specified subscription.
		 * Get subscriptions/{subscriptionId}
		 * @param {string} subscriptionId The ID of the target subscription.
		 * @param {string} api_version The API version to use for the operation.
		 * @return {Subscription} OK - Returns information about the subscription.
		 */
		Subscriptions_Get(subscriptionId: string, api_version: string): Observable<Subscription> {
			return this.http.get<Subscription>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Gets all available geo-locations.
		 * This operation provides all the locations that are available for resource providers; however, each resource provider may support a subset of this list.
		 * Get subscriptions/{subscriptionId}/locations
		 * @param {string} subscriptionId The ID of the target subscription.
		 * @param {string} api_version The API version to use for the operation.
		 * @return {LocationListResult} OK - Returns an array of locations.
		 */
		Subscriptions_ListLocations(subscriptionId: string, api_version: string): Observable<LocationListResult> {
			return this.http.get<LocationListResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/locations&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Gets the tenants for your account.
		 * Get tenants
		 * @param {string} api_version The API version to use for the operation.
		 * @return {TenantListResult} OK - Returns an array of tenants.
		 */
		Tenants_List(api_version: string): Observable<TenantListResult> {
			return this.http.get<TenantListResult>(this.baseUri + 'tenants?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}
	}

}

