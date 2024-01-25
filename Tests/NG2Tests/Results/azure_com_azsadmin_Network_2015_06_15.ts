import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** Admin overview resource object. */
	export interface AdminOverview extends Resource {

		/** Admin overview properties. */
		properties?: AdminOverviewProperties;
	}

	/** Admin overview resource object. */
	export interface AdminOverviewFormProperties extends ResourceFormProperties {
	}
	export function CreateAdminOverviewFormGroup() {
		return new FormGroup<AdminOverviewFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			location: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Admin overview properties. */
	export interface AdminOverviewProperties {

		/** Resource usage information. */
		backendIpUsage?: AdminOverviewResourceUsage;

		/** Resource health information. */
		loadBalancerMuxHealth?: AdminOverviewResourceHealth;

		/** Resource usage information. */
		macAddressUsage?: AdminOverviewResourceUsage;

		/** The provisioning state. */
		provisioningState?: string | null;

		/** Resource usage information. */
		publicIpAddressUsage?: AdminOverviewResourceUsage;

		/** Resource health information. */
		virtualGatewayHealth?: AdminOverviewResourceHealth;

		/** Resource health information. */
		virtualNetworkHealth?: AdminOverviewResourceHealth;
	}

	/** Admin overview properties. */
	export interface AdminOverviewPropertiesFormProperties {

		/** The provisioning state. */
		provisioningState: FormControl<string | null | undefined>,
	}
	export function CreateAdminOverviewPropertiesFormGroup() {
		return new FormGroup<AdminOverviewPropertiesFormProperties>({
			provisioningState: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Resource health information. */
	export interface AdminOverviewResourceHealth {

		/** Number of resources in the error state. */
		errorResourceCount?: number | null;

		/** Number of resources in an unknown state. */
		healthUnknownCount?: number | null;

		/** Number of resources in the success state. */
		healthyResourceCount?: number | null;

		/** Total number of resources. */
		totalResourceCount?: number | null;

		/** Number of resources in the warning state. */
		warningResourceCount?: number | null;
	}

	/** Resource health information. */
	export interface AdminOverviewResourceHealthFormProperties {

		/** Number of resources in the error state. */
		errorResourceCount: FormControl<number | null | undefined>,

		/** Number of resources in an unknown state. */
		healthUnknownCount: FormControl<number | null | undefined>,

		/** Number of resources in the success state. */
		healthyResourceCount: FormControl<number | null | undefined>,

		/** Total number of resources. */
		totalResourceCount: FormControl<number | null | undefined>,

		/** Number of resources in the warning state. */
		warningResourceCount: FormControl<number | null | undefined>,
	}
	export function CreateAdminOverviewResourceHealthFormGroup() {
		return new FormGroup<AdminOverviewResourceHealthFormProperties>({
			errorResourceCount: new FormControl<number | null | undefined>(undefined),
			healthUnknownCount: new FormControl<number | null | undefined>(undefined),
			healthyResourceCount: new FormControl<number | null | undefined>(undefined),
			totalResourceCount: new FormControl<number | null | undefined>(undefined),
			warningResourceCount: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Resource usage information. */
	export interface AdminOverviewResourceUsage {

		/** Number of resources in use. */
		inUseResourceCount?: number | null;

		/** Total number of resources. */
		totalResourceCount?: number | null;
	}

	/** Resource usage information. */
	export interface AdminOverviewResourceUsageFormProperties {

		/** Number of resources in use. */
		inUseResourceCount: FormControl<number | null | undefined>,

		/** Total number of resources. */
		totalResourceCount: FormControl<number | null | undefined>,
	}
	export function CreateAdminOverviewResourceUsageFormGroup() {
		return new FormGroup<AdminOverviewResourceUsageFormProperties>({
			inUseResourceCount: new FormControl<number | null | undefined>(undefined),
			totalResourceCount: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Contains the localized display information for this particular operation / action. */
	export interface Display {

		/** The localized, friendly description for the operation. The description will be displayed to the user. It should be thorough and concise for used in both tooltips and detailed views. */
		description?: string | null;

		/** The localized, friendly name for the operation. Use the name as it will displayed to the user. */
		operation?: string | null;

		/** The localized friendly form of the resource provider name – it is expected to also include the publisher/company responsible. It should use Title Casing and begin with "Microsoft" for 1st party services. e.g. "Microsoft Monitoring Insights" or "Microsoft Compute." */
		provider?: string | null;

		/** The localized, friendly version of the resource type related to this action or operation; the resource type should match the public documentation for the resource provider. */
		resource?: string | null;
	}

	/** Contains the localized display information for this particular operation / action. */
	export interface DisplayFormProperties {

		/** The localized, friendly description for the operation. The description will be displayed to the user. It should be thorough and concise for used in both tooltips and detailed views. */
		description: FormControl<string | null | undefined>,

		/** The localized, friendly name for the operation. Use the name as it will displayed to the user. */
		operation: FormControl<string | null | undefined>,

		/** The localized friendly form of the resource provider name – it is expected to also include the publisher/company responsible. It should use Title Casing and begin with "Microsoft" for 1st party services. e.g. "Microsoft Monitoring Insights" or "Microsoft Compute." */
		provider: FormControl<string | null | undefined>,

		/** The localized, friendly version of the resource type related to this action or operation; the resource type should match the public documentation for the resource provider. */
		resource: FormControl<string | null | undefined>,
	}
	export function CreateDisplayFormGroup() {
		return new FormGroup<DisplayFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			operation: new FormControl<string | null | undefined>(undefined),
			provider: new FormControl<string | null | undefined>(undefined),
			resource: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Describes the supported Location */
	export interface Location {

		/** The name of the location the operation is being held. */
		name?: string | null;
	}

	/** Describes the supported Location */
	export interface LocationFormProperties {

		/** The name of the location the operation is being held. */
		name: FormControl<string | null | undefined>,
	}
	export function CreateLocationFormGroup() {
		return new FormGroup<LocationFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** List of Locations */
	export interface LocationsList {

		/** URI to the next page of locations. */
		nextLink?: string | null;

		/** Array of locations */
		value?: Array<Location>;
	}

	/** List of Locations */
	export interface LocationsListFormProperties {

		/** URI to the next page of locations. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateLocationsListFormGroup() {
		return new FormGroup<LocationsListFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Describes the supported REST operation. */
	export interface Operation {

		/** Contains the localized display information for this particular operation / action. */
		display?: Display;

		/** The name of the operation being performed on this particular object. This name should match the name that appears in RBAC or the event service. */
		name?: string | null;
	}

	/** Describes the supported REST operation. */
	export interface OperationFormProperties {

		/** The name of the operation being performed on this particular object. This name should match the name that appears in RBAC or the event service. */
		name: FormControl<string | null | undefined>,
	}
	export function CreateOperationFormGroup() {
		return new FormGroup<OperationFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** List of Operations */
	export interface OperationList {

		/** URI to the next page of operations. */
		nextLink?: string | null;

		/** Array of operations */
		value?: Array<Operation>;
	}

	/** List of Operations */
	export interface OperationListFormProperties {

		/** URI to the next page of operations. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateOperationListFormGroup() {
		return new FormGroup<OperationListFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Describes results of a given operation */
	export interface OperationResult {

		/** The name of the operation being performed on this particular object. */
		name?: string | null;
	}

	/** Describes results of a given operation */
	export interface OperationResultFormProperties {

		/** The name of the operation being performed on this particular object. */
		name: FormControl<string | null | undefined>,
	}
	export function CreateOperationResultFormGroup() {
		return new FormGroup<OperationResultFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** List of Operation Results */
	export interface OperationResultList {

		/** URI to the next page of operations. */
		nextLink?: string | null;

		/** Array of operation results */
		value?: Array<OperationResult>;
	}

	/** List of Operation Results */
	export interface OperationResultListFormProperties {

		/** URI to the next page of operations. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateOperationResultListFormGroup() {
		return new FormGroup<OperationResultListFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Objects which have a provisioning state. */
	export interface ProvisionedResource {

		/** The provisioning state. */
		provisioningState?: string | null;
	}

	/** Objects which have a provisioning state. */
	export interface ProvisionedResourceFormProperties {

		/** The provisioning state. */
		provisioningState: FormControl<string | null | undefined>,
	}
	export function CreateProvisionedResourceFormGroup() {
		return new FormGroup<ProvisionedResourceFormProperties>({
			provisioningState: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Base Resource Object */
	export interface Resource {

		/** URI of the resource. */
		id?: string | null;

		/** Region location of resource. */
		location?: string | null;

		/** Name of the resource. */
		name?: string | null;

		/** List of key value pairs. */
		tags?: {[id: string]: string };

		/** Type of resource. */
		type?: string | null;
	}

	/** Base Resource Object */
	export interface ResourceFormProperties {

		/** URI of the resource. */
		id: FormControl<string | null | undefined>,

		/** Region location of resource. */
		location: FormControl<string | null | undefined>,

		/** Name of the resource. */
		name: FormControl<string | null | undefined>,

		/** List of key value pairs. */
		tags: FormControl<{[id: string]: string } | null | undefined>,

		/** Type of resource. */
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


	/** These resources are utilized by a single tenant. */
	export interface TenantResource {

		/** The subscription ID. */
		subscriptionId?: string | null;

		/** The tenant resource URI. */
		tenantResourceUri?: string | null;
	}

	/** These resources are utilized by a single tenant. */
	export interface TenantResourceFormProperties {

		/** The subscription ID. */
		subscriptionId: FormControl<string | null | undefined>,

		/** The tenant resource URI. */
		tenantResourceUri: FormControl<string | null | undefined>,
	}
	export function CreateTenantResourceFormGroup() {
		return new FormGroup<TenantResourceFormProperties>({
			subscriptionId: new FormControl<string | null | undefined>(undefined),
			tenantResourceUri: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Returns the list of supported locations
		 * Get providers/Microsoft.Network.Admin/locations
		 * @param {string} api_version Client API Version.
		 * @return {LocationsList} OK
		 */
		OnPremLocations_List(api_version: string): Observable<LocationsList> {
			return this.http.get<LocationsList>(this.baseUri + 'providers/Microsoft.Network.Admin/locations?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Returns the list of operation results for a location
		 * Get providers/Microsoft.Network.Admin/locations/{location}/operationResults
		 * @param {string} api_version Client API Version.
		 * @param {string} location Location of the resource.
		 * @return {OperationResultList} OK
		 */
		LocationsOperationResults_List(api_version: string, location: string): Observable<OperationResultList> {
			return this.http.get<OperationResultList>(this.baseUri + 'providers/Microsoft.Network.Admin/locations/' + (location == null ? '' : encodeURIComponent(location)) + '/operationResults?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Returns the list of support REST operations.
		 * Get providers/Microsoft.Network.Admin/locations/{location}/operations
		 * @param {string} api_version Client API Version.
		 * @param {string} location Location of the resource.
		 * @return {OperationList} OK
		 */
		LocationsOperations_List(api_version: string, location: string): Observable<OperationList> {
			return this.http.get<OperationList>(this.baseUri + 'providers/Microsoft.Network.Admin/locations/' + (location == null ? '' : encodeURIComponent(location)) + '/operations?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Returns the list of support REST operations.
		 * Get providers/Microsoft.Network.Admin/operations
		 * @param {string} api_version Client API Version.
		 * @return {OperationList} OK
		 */
		Operations_List(api_version: string): Observable<OperationList> {
			return this.http.get<OperationList>(this.baseUri + 'providers/Microsoft.Network.Admin/operations?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Get an overview of the state of the network resource provider.
		 * Get subscriptions/{subscriptionId}/providers/Microsoft.Network.Admin/adminOverview
		 * @param {string} subscriptionId Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} api_version Client API Version.
		 * @return {AdminOverview} OK
		 */
		ResourceProviderState_Get(subscriptionId: string, api_version: string): Observable<AdminOverview> {
			return this.http.get<AdminOverview>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/providers/Microsoft.Network.Admin/adminOverview&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}
	}

}

