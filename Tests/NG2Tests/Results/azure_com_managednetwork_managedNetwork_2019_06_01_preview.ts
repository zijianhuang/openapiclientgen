import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** The collection of Connectivity related groups and policies within the Managed Network */
	export interface ConnectivityCollection {

		/** The collection of connectivity related Managed Network Groups within the Managed Network */
		groups?: Array<ManagedNetworkGroup>;

		/** The collection of Managed Network Peering Policies within the Managed Network */
		peerings?: Array<ManagedNetworkPeeringPolicy>;
	}

	/** The collection of Connectivity related groups and policies within the Managed Network */
	export interface ConnectivityCollectionFormProperties {
	}
	export function CreateConnectivityCollectionFormGroup() {
		return new FormGroup<ConnectivityCollectionFormProperties>({
		});

	}


	/** The Managed Network Group resource */
	export interface ManagedNetworkGroup extends ProxyResource {

		/** Responsibility role under which this Managed Network Group will be created */
		kind?: ManagedNetworkGroupKind | null;

		/** Properties of a Managed Network Group */
		properties?: ManagedNetworkGroupProperties;
	}

	/** The Managed Network Group resource */
	export interface ManagedNetworkGroupFormProperties extends ProxyResourceFormProperties {

		/** Responsibility role under which this Managed Network Group will be created */
		kind: FormControl<ManagedNetworkGroupKind | null | undefined>,
	}
	export function CreateManagedNetworkGroupFormGroup() {
		return new FormGroup<ManagedNetworkGroupFormProperties>({
			kind: new FormControl<ManagedNetworkGroupKind | null | undefined>(undefined),
		});

	}

	export enum ManagedNetworkGroupKind { Connectivity = 'Connectivity' }


	/** The Managed Network Peering Policy resource */
	export interface ManagedNetworkPeeringPolicy extends ProxyResource {

		/** Properties of a Managed Network Peering Policy */
		properties?: ManagedNetworkPeeringPolicyProperties;
	}

	/** The Managed Network Peering Policy resource */
	export interface ManagedNetworkPeeringPolicyFormProperties extends ProxyResourceFormProperties {
	}
	export function CreateManagedNetworkPeeringPolicyFormGroup() {
		return new FormGroup<ManagedNetworkPeeringPolicyFormProperties>({
		});

	}


	/** The error response that indicates why an operation has failed. */
	export interface ErrorResponse {

		/** The error code. */
		code?: string | null;

		/** The error message. */
		message?: string | null;
	}

	/** The error response that indicates why an operation has failed. */
	export interface ErrorResponseFormProperties {

		/** The error code. */
		code: FormControl<string | null | undefined>,

		/** The error message. */
		message: FormControl<string | null | undefined>,
	}
	export function CreateErrorResponseFormGroup() {
		return new FormGroup<ErrorResponseFormProperties>({
			code: new FormControl<string | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Properties of a Hub and Spoke Peering Policy */
	export interface HubAndSpokePeeringPolicyProperties extends ManagedNetworkPeeringPolicyProperties {

		/** Generic pointer to a resource */
		hub?: ResourceId;

		/** Gets or sets the spokes group IDs */
		spokes?: Array<ResourceId>;
	}

	/** Properties of a Hub and Spoke Peering Policy */
	export interface HubAndSpokePeeringPolicyPropertiesFormProperties extends ManagedNetworkPeeringPolicyPropertiesFormProperties {
	}
	export function CreateHubAndSpokePeeringPolicyPropertiesFormGroup() {
		return new FormGroup<HubAndSpokePeeringPolicyPropertiesFormProperties>({
			etag: new FormControl<string | null | undefined>(undefined),
			provisioningState: new FormControl<ResourcePropertiesProvisioningState | null | undefined>(undefined),
			type: new FormControl<ManagedNetworkPeeringPolicyPropertiesType | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Generic pointer to a resource */
	export interface ResourceId {

		/** Resource Id */
		id?: string | null;
	}

	/** Generic pointer to a resource */
	export interface ResourceIdFormProperties {

		/** Resource Id */
		id: FormControl<string | null | undefined>,
	}
	export function CreateResourceIdFormGroup() {
		return new FormGroup<ResourceIdFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The Managed Network resource */
	export interface ManagedNetwork extends TrackedResource {

		/** Properties of Managed Network */
		properties?: ManagedNetworkProperties;
	}

	/** The Managed Network resource */
	export interface ManagedNetworkFormProperties extends TrackedResourceFormProperties {
	}
	export function CreateManagedNetworkFormGroup() {
		return new FormGroup<ManagedNetworkFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			location: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}


	/** Properties of Managed Network */
	export interface ManagedNetworkProperties {

		/** The collection of Connectivity related groups and policies within the Managed Network */
		connectivity?: ConnectivityCollection;

		/** Scope of a Managed Network */
		scope?: Scope;
	}

	/** Properties of Managed Network */
	export interface ManagedNetworkPropertiesFormProperties {
	}
	export function CreateManagedNetworkPropertiesFormGroup() {
		return new FormGroup<ManagedNetworkPropertiesFormProperties>({
		});

	}


	/** Result of the request to list Managed Network Groups. It contains a list of groups and a URL link to get the next set of results. */
	export interface ManagedNetworkGroupListResult {

		/** Gets the URL to get the next set of results. */
		nextLink?: string | null;

		/** Gets a page of ManagedNetworkGroup */
		value?: Array<ManagedNetworkGroup>;
	}

	/** Result of the request to list Managed Network Groups. It contains a list of groups and a URL link to get the next set of results. */
	export interface ManagedNetworkGroupListResultFormProperties {

		/** Gets the URL to get the next set of results. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateManagedNetworkGroupListResultFormGroup() {
		return new FormGroup<ManagedNetworkGroupListResultFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Properties of a Managed Network Group */
	export interface ManagedNetworkGroupProperties extends ResourceProperties {

		/** The collection of management groups covered by the Managed Network */
		managementGroups?: Array<ResourceId>;

		/** The collection of  subnets covered by the Managed Network */
		subnets?: Array<ResourceId>;

		/** The collection of subscriptions covered by the Managed Network */
		subscriptions?: Array<ResourceId>;

		/** The collection of virtual nets covered by the Managed Network */
		virtualNetworks?: Array<ResourceId>;
	}

	/** Properties of a Managed Network Group */
	export interface ManagedNetworkGroupPropertiesFormProperties extends ResourcePropertiesFormProperties {
	}
	export function CreateManagedNetworkGroupPropertiesFormGroup() {
		return new FormGroup<ManagedNetworkGroupPropertiesFormProperties>({
			etag: new FormControl<string | null | undefined>(undefined),
			provisioningState: new FormControl<ResourcePropertiesProvisioningState | null | undefined>(undefined),
		});

	}


	/** Result of the request to list Managed Network. It contains a list of Managed Networks and a URL link to get the next set of results. */
	export interface ManagedNetworkListResult {

		/** Gets the URL to get the next page of results. */
		nextLink?: string | null;

		/** Gets a page of ManagedNetworks */
		value?: Array<ManagedNetwork>;
	}

	/** Result of the request to list Managed Network. It contains a list of Managed Networks and a URL link to get the next set of results. */
	export interface ManagedNetworkListResultFormProperties {

		/** Gets the URL to get the next page of results. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateManagedNetworkListResultFormGroup() {
		return new FormGroup<ManagedNetworkListResultFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Result of the request to list Managed Network Peering Policies. It contains a list of policies and a URL link to get the next set of results. */
	export interface ManagedNetworkPeeringPolicyListResult {

		/** Gets the URL to get the next page of results. */
		nextLink?: string | null;

		/** Gets a page of Peering Policies */
		value?: Array<ManagedNetworkPeeringPolicy>;
	}

	/** Result of the request to list Managed Network Peering Policies. It contains a list of policies and a URL link to get the next set of results. */
	export interface ManagedNetworkPeeringPolicyListResultFormProperties {

		/** Gets the URL to get the next page of results. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateManagedNetworkPeeringPolicyListResultFormGroup() {
		return new FormGroup<ManagedNetworkPeeringPolicyListResultFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Properties of a Managed Network Peering Policy */
	export interface ManagedNetworkPeeringPolicyProperties extends ResourceProperties {

		/** Generic pointer to a resource */
		hub?: ResourceId;

		/** Gets or sets the mesh group IDs */
		mesh?: Array<ResourceId>;

		/** Gets or sets the spokes group IDs */
		spokes?: Array<ResourceId>;

		/**
		 * Gets or sets the connectivity type of a network structure policy
		 * Required
		 */
		type: ManagedNetworkPeeringPolicyPropertiesType;
	}

	/** Properties of a Managed Network Peering Policy */
	export interface ManagedNetworkPeeringPolicyPropertiesFormProperties extends ResourcePropertiesFormProperties {

		/**
		 * Gets or sets the connectivity type of a network structure policy
		 * Required
		 */
		type: FormControl<ManagedNetworkPeeringPolicyPropertiesType | null | undefined>,
	}
	export function CreateManagedNetworkPeeringPolicyPropertiesFormGroup() {
		return new FormGroup<ManagedNetworkPeeringPolicyPropertiesFormProperties>({
			etag: new FormControl<string | null | undefined>(undefined),
			provisioningState: new FormControl<ResourcePropertiesProvisioningState | null | undefined>(undefined),
			type: new FormControl<ManagedNetworkPeeringPolicyPropertiesType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum ManagedNetworkPeeringPolicyPropertiesType { HubAndSpokeTopology = 'HubAndSpokeTopology', MeshTopology = 'MeshTopology' }


	/** Update Tags of Managed Network */
	export interface ManagedNetworkUpdate {

		/** Resource tags */
		tags?: {[id: string]: string };
	}

	/** Update Tags of Managed Network */
	export interface ManagedNetworkUpdateFormProperties {

		/** Resource tags */
		tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateManagedNetworkUpdateFormGroup() {
		return new FormGroup<ManagedNetworkUpdateFormProperties>({
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}


	/** Properties of a Mesh Peering Policy */
	export interface MeshPeeringPolicyProperties extends ManagedNetworkPeeringPolicyProperties {

		/** Gets or sets the mesh group IDs */
		mesh?: Array<ResourceId>;
	}

	/** Properties of a Mesh Peering Policy */
	export interface MeshPeeringPolicyPropertiesFormProperties extends ManagedNetworkPeeringPolicyPropertiesFormProperties {
	}
	export function CreateMeshPeeringPolicyPropertiesFormGroup() {
		return new FormGroup<MeshPeeringPolicyPropertiesFormProperties>({
			etag: new FormControl<string | null | undefined>(undefined),
			provisioningState: new FormControl<ResourcePropertiesProvisioningState | null | undefined>(undefined),
			type: new FormControl<ManagedNetworkPeeringPolicyPropertiesType | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** REST API operation */
	export interface Operation {

		/** The object that represents the operation. */
		display?: any;

		/** Operation name: {provider}/{resource}/{operation} */
		name?: string | null;
	}

	/** REST API operation */
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


	/** Result of the request to list Managed Network operations. It contains a list of operations and a URL link to get the next set of results. */
	export interface OperationListResult {

		/** URL to get the next set of operation list results if there are any. */
		nextLink?: string | null;

		/** List of Resource Provider operations supported by the Managed Network resource provider. */
		value?: Array<Operation>;
	}

	/** Result of the request to list Managed Network operations. It contains a list of operations and a URL link to get the next set of results. */
	export interface OperationListResultFormProperties {

		/** URL to get the next set of operation list results if there are any. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateOperationListResultFormGroup() {
		return new FormGroup<OperationListResultFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The resource model definition for a ARM proxy resource. It will have everything other than required location and tags */
	export interface ProxyResource {
	}

	/** The resource model definition for a ARM proxy resource. It will have everything other than required location and tags */
	export interface ProxyResourceFormProperties {
	}
	export function CreateProxyResourceFormGroup() {
		return new FormGroup<ProxyResourceFormProperties>({
		});

	}


	/** The general resource model definition */
	export interface Resource {

		/** Fully qualified resource Id for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName} */
		id?: string | null;

		/** The geo-location where the resource lives */
		location?: string | null;

		/** The name of the resource */
		name?: string | null;

		/** The type of the resource. Ex- Microsoft.Compute/virtualMachines or Microsoft.Storage/storageAccounts. */
		type?: string | null;
	}

	/** The general resource model definition */
	export interface ResourceFormProperties {

		/** Fully qualified resource Id for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName} */
		id: FormControl<string | null | undefined>,

		/** The geo-location where the resource lives */
		location: FormControl<string | null | undefined>,

		/** The name of the resource */
		name: FormControl<string | null | undefined>,

		/** The type of the resource. Ex- Microsoft.Compute/virtualMachines or Microsoft.Storage/storageAccounts. */
		type: FormControl<string | null | undefined>,
	}
	export function CreateResourceFormGroup() {
		return new FormGroup<ResourceFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			location: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Base for resource properties. */
	export interface ResourceProperties {

		/** A unique read-only string that changes whenever the resource is updated. */
		etag?: string | null;

		/** Provisioning state of the ManagedNetwork resource. */
		provisioningState?: ResourcePropertiesProvisioningState | null;
	}

	/** Base for resource properties. */
	export interface ResourcePropertiesFormProperties {

		/** A unique read-only string that changes whenever the resource is updated. */
		etag: FormControl<string | null | undefined>,

		/** Provisioning state of the ManagedNetwork resource. */
		provisioningState: FormControl<ResourcePropertiesProvisioningState | null | undefined>,
	}
	export function CreateResourcePropertiesFormGroup() {
		return new FormGroup<ResourcePropertiesFormProperties>({
			etag: new FormControl<string | null | undefined>(undefined),
			provisioningState: new FormControl<ResourcePropertiesProvisioningState | null | undefined>(undefined),
		});

	}

	export enum ResourcePropertiesProvisioningState { Updating = 'Updating', Deleting = 'Deleting', Failed = 'Failed', Succeeded = 'Succeeded' }


	/** Scope of a Managed Network */
	export interface Scope {

		/** The collection of management groups covered by the Managed Network */
		managementGroups?: Array<ResourceId>;

		/** The collection of  subnets covered by the Managed Network */
		subnets?: Array<ResourceId>;

		/** The collection of subscriptions covered by the Managed Network */
		subscriptions?: Array<ResourceId>;

		/** The collection of virtual nets covered by the Managed Network */
		virtualNetworks?: Array<ResourceId>;
	}

	/** Scope of a Managed Network */
	export interface ScopeFormProperties {
	}
	export function CreateScopeFormGroup() {
		return new FormGroup<ScopeFormProperties>({
		});

	}


	/** The Managed Network resource */
	export interface ScopeAssignment extends ProxyResource {

		/** Properties of Managed Network */
		properties?: ScopeAssignmentProperties;
	}

	/** The Managed Network resource */
	export interface ScopeAssignmentFormProperties extends ProxyResourceFormProperties {
	}
	export function CreateScopeAssignmentFormGroup() {
		return new FormGroup<ScopeAssignmentFormProperties>({
		});

	}


	/** Properties of Managed Network */
	export interface ScopeAssignmentProperties {

		/** The managed network ID with scope will be assigned to. */
		assignedManagedNetwork?: string | null;
	}

	/** Properties of Managed Network */
	export interface ScopeAssignmentPropertiesFormProperties {

		/** The managed network ID with scope will be assigned to. */
		assignedManagedNetwork: FormControl<string | null | undefined>,
	}
	export function CreateScopeAssignmentPropertiesFormGroup() {
		return new FormGroup<ScopeAssignmentPropertiesFormProperties>({
			assignedManagedNetwork: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Result of the request to list ScopeAssignment. It contains a list of groups and a URL link to get the next set of results. */
	export interface ScopeAssignmentListResult {

		/** Gets the URL to get the next set of results. */
		nextLink?: string | null;

		/** Gets a page of ScopeAssignment */
		value?: Array<ScopeAssignment>;
	}

	/** Result of the request to list ScopeAssignment. It contains a list of groups and a URL link to get the next set of results. */
	export interface ScopeAssignmentListResultFormProperties {

		/** Gets the URL to get the next set of results. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateScopeAssignmentListResultFormGroup() {
		return new FormGroup<ScopeAssignmentListResultFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The resource model definition for a ARM tracked top level resource */
	export interface TrackedResource extends Resource {

		/** Resource tags */
		tags?: {[id: string]: string };
	}

	/** The resource model definition for a ARM tracked top level resource */
	export interface TrackedResourceFormProperties extends ResourceFormProperties {

		/** Resource tags */
		tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateTrackedResourceFormGroup() {
		return new FormGroup<TrackedResourceFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			location: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Lists all of the available MNC operations.
		 * Get providers/Microsoft.ManagedNetwork/operations
		 * @param {string} api_version Client Api Version.
		 * @return {OperationListResult} OK. The request has succeeded.
		 */
		Operations_List(api_version: string): Observable<OperationListResult> {
			return this.http.get<OperationListResult>(this.baseUri + 'providers/Microsoft.ManagedNetwork/operations?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * The ListBySubscription  ManagedNetwork operation retrieves all the Managed Network Resources in the current subscription in a paginated format.
		 * Get subscriptions/{subscriptionId}/providers/Microsoft.ManagedNetwork/managedNetworks
		 * @param {string} api_version Client Api Version.
		 * @param {string} subscriptionId Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {number} top May be used to limit the number of results in a page for list queries.
		 * @param {string} skiptoken Skiptoken is only used if a previous operation returned a partial result. If a previous response contains a nextLink element, the value of the nextLink element will include a skiptoken parameter that specifies a starting point to use for subsequent calls.
		 * @return {ManagedNetworkListResult} Get successful. The operation returns all Managed Network resources under the current subscription in a paginated format.
		 */
		ManagedNetworks_ListBySubscription(api_version: string, subscriptionId: string, top: number | null | undefined, skiptoken: string | null | undefined): Observable<ManagedNetworkListResult> {
			return this.http.get<ManagedNetworkListResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/providers/Microsoft.ManagedNetwork/managedNetworks?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)) + '&top=' + top + '&skiptoken=' + (skiptoken == null ? '' : encodeURIComponent(skiptoken)), {});
		}

		/**
		 * The ListByResourceGroup ManagedNetwork operation retrieves all the Managed Network resources in a resource group in a paginated format.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedNetwork/managedNetworks
		 * @param {string} api_version Client Api Version.
		 * @param {string} subscriptionId Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {number} top May be used to limit the number of results in a page for list queries.
		 * @param {string} skiptoken Skiptoken is only used if a previous operation returned a partial result. If a previous response contains a nextLink element, the value of the nextLink element will include a skiptoken parameter that specifies a starting point to use for subsequent calls.
		 * @return {ManagedNetworkListResult} Get successful. The operation returns all Managed Network resources under the specified resource group in a paginated format
		 */
		ManagedNetworks_ListByResourceGroup(api_version: string, subscriptionId: string, resourceGroupName: string, top: number | null | undefined, skiptoken: string | null | undefined): Observable<ManagedNetworkListResult> {
			return this.http.get<ManagedNetworkListResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.ManagedNetwork/managedNetworks?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)) + '&top=' + top + '&skiptoken=' + (skiptoken == null ? '' : encodeURIComponent(skiptoken)), {});
		}

		/**
		 * The Get ManagedNetworks operation gets a Managed Network Resource, specified by the resource group and Managed Network name
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedNetwork/managedNetworks/{managedNetworkName}
		 * @param {string} api_version Client Api Version.
		 * @param {string} subscriptionId Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} managedNetworkName The name of the Managed Network.
		 * @return {ManagedNetwork} Get successful. The operation returns the specified Managed Network resource.
		 */
		ManagedNetworks_Get(api_version: string, subscriptionId: string, resourceGroupName: string, managedNetworkName: string): Observable<ManagedNetwork> {
			return this.http.get<ManagedNetwork>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.ManagedNetwork/managedNetworks/' + (managedNetworkName == null ? '' : encodeURIComponent(managedNetworkName)) + '?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * The Put ManagedNetworks operation creates/updates a Managed Network Resource, specified by resource group and Managed Network name
		 * Put subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedNetwork/managedNetworks/{managedNetworkName}
		 * @param {string} api_version Client Api Version.
		 * @param {string} subscriptionId Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} managedNetworkName The name of the Managed Network.
		 * @param {ManagedNetwork} requestBody Parameters supplied to the create/update a Managed Network Resource
		 * @return {ManagedNetwork} Update successful. The operation returns the resulting Managed Network resource.
		 */
		ManagedNetworks_CreateOrUpdate(api_version: string, subscriptionId: string, resourceGroupName: string, managedNetworkName: string, requestBody: ManagedNetwork): Observable<ManagedNetwork> {
			return this.http.put<ManagedNetwork>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.ManagedNetwork/managedNetworks/' + (managedNetworkName == null ? '' : encodeURIComponent(managedNetworkName)) + '?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * The Delete ManagedNetworks operation deletes a Managed Network Resource, specified by the  resource group and Managed Network name
		 * Delete subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedNetwork/managedNetworks/{managedNetworkName}
		 * @param {string} api_version Client Api Version.
		 * @param {string} subscriptionId Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} managedNetworkName The name of the Managed Network.
		 * @return {void} Delete successful.
		 */
		ManagedNetworks_Delete(api_version: string, subscriptionId: string, resourceGroupName: string, managedNetworkName: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.ManagedNetwork/managedNetworks/' + (managedNetworkName == null ? '' : encodeURIComponent(managedNetworkName)) + '?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Updates the specified Managed Network resource tags.
		 * Patch subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedNetwork/managedNetworks/{managedNetworkName}
		 * @param {string} api_version Client Api Version.
		 * @param {string} subscriptionId Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} managedNetworkName The name of the Managed Network.
		 * @param {ManagedNetworkUpdate} requestBody Parameters supplied to update application gateway tags and/or scope.
		 * @return {ManagedNetwork} Update successful. The operation returns the updated Managed Network resource.
		 */
		ManagedNetworks_Update(api_version: string, subscriptionId: string, resourceGroupName: string, managedNetworkName: string, requestBody: ManagedNetworkUpdate): Observable<ManagedNetwork> {
			return this.http.patch<ManagedNetwork>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.ManagedNetwork/managedNetworks/' + (managedNetworkName == null ? '' : encodeURIComponent(managedNetworkName)) + '?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * The ListByManagedNetwork ManagedNetworkGroup operation retrieves all the Managed Network Groups in a specified Managed Networks in a paginated format.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedNetwork/managedNetworks/{managedNetworkName}/managedNetworkGroups
		 * @param {string} api_version Client Api Version.
		 * @param {string} subscriptionId Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} managedNetworkName The name of the Managed Network.
		 * @param {number} top May be used to limit the number of results in a page for list queries.
		 * @param {string} skiptoken Skiptoken is only used if a previous operation returned a partial result. If a previous response contains a nextLink element, the value of the nextLink element will include a skiptoken parameter that specifies a starting point to use for subsequent calls.
		 * @return {ManagedNetworkGroupListResult} Get successful. The operation returns all Managed Network Group resources under the specified Managed Network in a paginated format.
		 */
		ManagedNetworkGroups_ListByManagedNetwork(api_version: string, subscriptionId: string, resourceGroupName: string, managedNetworkName: string, top: number | null | undefined, skiptoken: string | null | undefined): Observable<ManagedNetworkGroupListResult> {
			return this.http.get<ManagedNetworkGroupListResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.ManagedNetwork/managedNetworks/' + (managedNetworkName == null ? '' : encodeURIComponent(managedNetworkName)) + '/managedNetworkGroups?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)) + '&top=' + top + '&skiptoken=' + (skiptoken == null ? '' : encodeURIComponent(skiptoken)), {});
		}

		/**
		 * The Get ManagedNetworkGroups operation gets a Managed Network Group specified by the resource group, Managed Network name, and group name
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedNetwork/managedNetworks/{managedNetworkName}/managedNetworkGroups/{managedNetworkGroupName}
		 * @param {string} api_version Client Api Version.
		 * @param {string} subscriptionId Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} managedNetworkName The name of the Managed Network.
		 * @param {string} managedNetworkGroupName The name of the Managed Network Group.
		 * @return {ManagedNetworkGroup} Get successful. The operation returns the specified Managed Network Group resource.
		 */
		ManagedNetworkGroups_Get(api_version: string, subscriptionId: string, resourceGroupName: string, managedNetworkName: string, managedNetworkGroupName: string): Observable<ManagedNetworkGroup> {
			return this.http.get<ManagedNetworkGroup>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.ManagedNetwork/managedNetworks/' + (managedNetworkName == null ? '' : encodeURIComponent(managedNetworkName)) + '/managedNetworkGroups/' + (managedNetworkGroupName == null ? '' : encodeURIComponent(managedNetworkGroupName)) + '?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * The Put ManagedNetworkGroups operation creates or updates a Managed Network Group resource
		 * Put subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedNetwork/managedNetworks/{managedNetworkName}/managedNetworkGroups/{managedNetworkGroupName}
		 * @param {string} api_version Client Api Version.
		 * @param {string} subscriptionId Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} managedNetworkName The name of the Managed Network.
		 * @param {string} managedNetworkGroupName The name of the Managed Network Group.
		 * @param {ManagedNetworkGroup} requestBody Parameters supplied to the create/update a Managed Network Group resource
		 * @return {ManagedNetworkGroup} Update successful. The operation returns the resulting Managed Network Group resource.
		 */
		ManagedNetworkGroups_CreateOrUpdate(api_version: string, subscriptionId: string, resourceGroupName: string, managedNetworkName: string, managedNetworkGroupName: string, requestBody: ManagedNetworkGroup): Observable<ManagedNetworkGroup> {
			return this.http.put<ManagedNetworkGroup>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.ManagedNetwork/managedNetworks/' + (managedNetworkName == null ? '' : encodeURIComponent(managedNetworkName)) + '/managedNetworkGroups/' + (managedNetworkGroupName == null ? '' : encodeURIComponent(managedNetworkGroupName)) + '?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * The Delete ManagedNetworkGroups operation deletes a Managed Network Group specified by the resource group, Managed Network name, and group name
		 * Delete subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedNetwork/managedNetworks/{managedNetworkName}/managedNetworkGroups/{managedNetworkGroupName}
		 * @param {string} api_version Client Api Version.
		 * @param {string} subscriptionId Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} managedNetworkName The name of the Managed Network.
		 * @param {string} managedNetworkGroupName The name of the Managed Network Group.
		 * @return {void} Delete successful.
		 */
		ManagedNetworkGroups_Delete(api_version: string, subscriptionId: string, resourceGroupName: string, managedNetworkName: string, managedNetworkGroupName: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.ManagedNetwork/managedNetworks/' + (managedNetworkName == null ? '' : encodeURIComponent(managedNetworkName)) + '/managedNetworkGroups/' + (managedNetworkGroupName == null ? '' : encodeURIComponent(managedNetworkGroupName)) + '?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * The ListByManagedNetwork PeeringPolicies operation retrieves all the Managed Network Peering Policies in a specified Managed Network, in a paginated format.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedNetwork/managedNetworks/{managedNetworkName}/managedNetworkPeeringPolicies
		 * @param {string} api_version Client Api Version.
		 * @param {string} subscriptionId Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} managedNetworkName The name of the Managed Network.
		 * @param {number} top May be used to limit the number of results in a page for list queries.
		 * @param {string} skiptoken Skiptoken is only used if a previous operation returned a partial result. If a previous response contains a nextLink element, the value of the nextLink element will include a skiptoken parameter that specifies a starting point to use for subsequent calls.
		 * @return {ManagedNetworkPeeringPolicyListResult} Get successful. The operation returns all Managed Network Peering Policy resources in the specified Managed Network, in a paginated format
		 */
		ManagedNetworkPeeringPolicies_ListByManagedNetwork(api_version: string, subscriptionId: string, resourceGroupName: string, managedNetworkName: string, top: number | null | undefined, skiptoken: string | null | undefined): Observable<ManagedNetworkPeeringPolicyListResult> {
			return this.http.get<ManagedNetworkPeeringPolicyListResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.ManagedNetwork/managedNetworks/' + (managedNetworkName == null ? '' : encodeURIComponent(managedNetworkName)) + '/managedNetworkPeeringPolicies?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)) + '&top=' + top + '&skiptoken=' + (skiptoken == null ? '' : encodeURIComponent(skiptoken)), {});
		}

		/**
		 * The Get ManagedNetworkPeeringPolicies operation gets a Managed Network Peering Policy resource, specified by the  resource group, Managed Network name, and peering policy name
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedNetwork/managedNetworks/{managedNetworkName}/managedNetworkPeeringPolicies/{managedNetworkPeeringPolicyName}
		 * @param {string} api_version Client Api Version.
		 * @param {string} subscriptionId Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} managedNetworkName The name of the Managed Network.
		 * @param {string} managedNetworkPeeringPolicyName The name of the Managed Network Peering Policy.
		 * @return {ManagedNetworkPeeringPolicy} Get successful. The operation returns the specified Managed Network Peering Policy resource.
		 */
		ManagedNetworkPeeringPolicies_Get(api_version: string, subscriptionId: string, resourceGroupName: string, managedNetworkName: string, managedNetworkPeeringPolicyName: string): Observable<ManagedNetworkPeeringPolicy> {
			return this.http.get<ManagedNetworkPeeringPolicy>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.ManagedNetwork/managedNetworks/' + (managedNetworkName == null ? '' : encodeURIComponent(managedNetworkName)) + '/managedNetworkPeeringPolicies/' + (managedNetworkPeeringPolicyName == null ? '' : encodeURIComponent(managedNetworkPeeringPolicyName)) + '?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * The Put ManagedNetworkPeeringPolicies operation creates/updates a new Managed Network Peering Policy
		 * Put subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedNetwork/managedNetworks/{managedNetworkName}/managedNetworkPeeringPolicies/{managedNetworkPeeringPolicyName}
		 * @param {string} api_version Client Api Version.
		 * @param {string} subscriptionId Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} managedNetworkName The name of the Managed Network.
		 * @param {string} managedNetworkPeeringPolicyName The name of the Managed Network Peering Policy.
		 * @param {ManagedNetworkPeeringPolicy} requestBody Parameters supplied to create/update a Managed Network Peering Policy
		 * @return {ManagedNetworkPeeringPolicy} Update successful. The operation returns the resulting Managed Network Peering Policy resource.
		 */
		ManagedNetworkPeeringPolicies_CreateOrUpdate(api_version: string, subscriptionId: string, resourceGroupName: string, managedNetworkName: string, managedNetworkPeeringPolicyName: string, requestBody: ManagedNetworkPeeringPolicy): Observable<ManagedNetworkPeeringPolicy> {
			return this.http.put<ManagedNetworkPeeringPolicy>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.ManagedNetwork/managedNetworks/' + (managedNetworkName == null ? '' : encodeURIComponent(managedNetworkName)) + '/managedNetworkPeeringPolicies/' + (managedNetworkPeeringPolicyName == null ? '' : encodeURIComponent(managedNetworkPeeringPolicyName)) + '?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * The Delete ManagedNetworkPeeringPolicies operation deletes a Managed Network Peering Policy, specified by the  resource group, Managed Network name, and peering policy name
		 * Delete subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedNetwork/managedNetworks/{managedNetworkName}/managedNetworkPeeringPolicies/{managedNetworkPeeringPolicyName}
		 * @param {string} api_version Client Api Version.
		 * @param {string} subscriptionId Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} managedNetworkName The name of the Managed Network.
		 * @param {string} managedNetworkPeeringPolicyName The name of the Managed Network Peering Policy.
		 * @return {void} Delete successful.
		 */
		ManagedNetworkPeeringPolicies_Delete(api_version: string, subscriptionId: string, resourceGroupName: string, managedNetworkName: string, managedNetworkPeeringPolicyName: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.ManagedNetwork/managedNetworks/' + (managedNetworkName == null ? '' : encodeURIComponent(managedNetworkName)) + '/managedNetworkPeeringPolicies/' + (managedNetworkPeeringPolicyName == null ? '' : encodeURIComponent(managedNetworkPeeringPolicyName)) + '?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get the specified scope assignment.
		 * Get {scope}/providers/Microsoft.ManagedNetwork/scopeAssignments
		 * @param {string} scope The base resource of the scope assignment.
		 * @param {string} api_version Client Api Version.
		 * @return {ScopeAssignmentListResult} OK - Returns information about the scope assignment.
		 */
		ScopeAssignments_List(scope: string, api_version: string): Observable<ScopeAssignmentListResult> {
			return this.http.get<ScopeAssignmentListResult>(this.baseUri + (scope == null ? '' : encodeURIComponent(scope)) + '/providers/Microsoft.ManagedNetwork/scopeAssignments&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)) + '', {});
		}

		/**
		 * Get the specified scope assignment.
		 * Get {scope}/providers/Microsoft.ManagedNetwork/scopeAssignments/{scopeAssignmentName}
		 * @param {string} scope The base resource of the scope assignment.
		 * @param {string} scopeAssignmentName The name of the scope assignment to get.
		 * @param {string} api_version Client Api Version.
		 * @return {ScopeAssignment} OK - Returns information about the scope assignment.
		 */
		ScopeAssignments_Get(scope: string, scopeAssignmentName: string, api_version: string): Observable<ScopeAssignment> {
			return this.http.get<ScopeAssignment>(this.baseUri + (scope == null ? '' : encodeURIComponent(scope)) + '/providers/Microsoft.ManagedNetwork/scopeAssignments/' + (scopeAssignmentName == null ? '' : encodeURIComponent(scopeAssignmentName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)) + '', {});
		}

		/**
		 * Creates a scope assignment.
		 * Put {scope}/providers/Microsoft.ManagedNetwork/scopeAssignments/{scopeAssignmentName}
		 * @param {string} scope The base resource of the scope assignment to create. The scope can be any REST resource instance. For example, use 'subscriptions/{subscription-id}' for a subscription, 'subscriptions/{subscription-id}/resourceGroups/{resource-group-name}' for a resource group, and 'subscriptions/{subscription-id}/resourceGroups/{resource-group-name}/providers/{resource-provider}/{resource-type}/{resource-name}' for a resource.
		 * @param {string} scopeAssignmentName The name of the scope assignment to create.
		 * @param {string} api_version Client Api Version.
		 * @param {ScopeAssignment} requestBody Parameters supplied to the specify which Managed Network this scope is being assigned
		 * @return {ScopeAssignment} Updated - Returns information about the scope assignment.
		 */
		ScopeAssignments_CreateOrUpdate(scope: string, scopeAssignmentName: string, api_version: string, requestBody: ScopeAssignment): Observable<ScopeAssignment> {
			return this.http.put<ScopeAssignment>(this.baseUri + (scope == null ? '' : encodeURIComponent(scope)) + '/providers/Microsoft.ManagedNetwork/scopeAssignments/' + (scopeAssignmentName == null ? '' : encodeURIComponent(scopeAssignmentName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)) + '', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a scope assignment.
		 * Delete {scope}/providers/Microsoft.ManagedNetwork/scopeAssignments/{scopeAssignmentName}
		 * @param {string} scope The scope of the scope assignment to delete.
		 * @param {string} scopeAssignmentName The name of the scope assignment to delete.
		 * @param {string} api_version Client Api Version.
		 * @return {void} Delete Succeed.
		 */
		ScopeAssignments_Delete(scope: string, scopeAssignmentName: string, api_version: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + (scope == null ? '' : encodeURIComponent(scope)) + '/providers/Microsoft.ManagedNetwork/scopeAssignments/' + (scopeAssignmentName == null ? '' : encodeURIComponent(scopeAssignmentName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)) + '', { observe: 'response', responseType: 'text' });
		}
	}

}

