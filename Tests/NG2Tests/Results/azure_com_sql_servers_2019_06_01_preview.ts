import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** A request to check whether the specified name for a resource is available. */
	export interface CheckNameAvailabilityRequest {

		/** Required */
		name: string;

		/** Required */
		type: CheckNameAvailabilityRequestType;
	}

	/** A request to check whether the specified name for a resource is available. */
	export interface CheckNameAvailabilityRequestFormProperties {

		/** Required */
		name: FormControl<string | null | undefined>,

		/** Required */
		type: FormControl<CheckNameAvailabilityRequestType | null | undefined>,
	}
	export function CreateCheckNameAvailabilityRequestFormGroup() {
		return new FormGroup<CheckNameAvailabilityRequestFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<CheckNameAvailabilityRequestType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum CheckNameAvailabilityRequestType { 'Microsoft.Sql/servers' = 0 }


	/** The result of a name availability check. */
	export interface CheckNameAvailabilityResponse {

		/** True if the name is available, otherwise false. */
		available?: boolean | null;

		/** A message explaining why the name is unavailable. Will be undefined if the name is available. */
		message?: string | null;

		/** The name whose availability was checked. */
		name?: string | null;

		/** The reason code explaining why the name is unavailable. Will be undefined if the name is available. */
		reason?: CheckNameAvailabilityResponseReason | null;
	}

	/** The result of a name availability check. */
	export interface CheckNameAvailabilityResponseFormProperties {

		/** True if the name is available, otherwise false. */
		available: FormControl<boolean | null | undefined>,

		/** A message explaining why the name is unavailable. Will be undefined if the name is available. */
		message: FormControl<string | null | undefined>,

		/** The name whose availability was checked. */
		name: FormControl<string | null | undefined>,

		/** The reason code explaining why the name is unavailable. Will be undefined if the name is available. */
		reason: FormControl<CheckNameAvailabilityResponseReason | null | undefined>,
	}
	export function CreateCheckNameAvailabilityResponseFormGroup() {
		return new FormGroup<CheckNameAvailabilityResponseFormProperties>({
			available: new FormControl<boolean | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			reason: new FormControl<CheckNameAvailabilityResponseReason | null | undefined>(undefined),
		});

	}

	export enum CheckNameAvailabilityResponseReason { Invalid = 0, AlreadyExists = 1 }


	/** Properties of a private endpoint connection. */
	export interface PrivateEndpointConnectionProperties {
		privateEndpoint?: PrivateEndpointProperty;
		privateLinkServiceConnectionState?: PrivateLinkServiceConnectionStateProperty;

		/** State of the private endpoint connection. */
		provisioningState?: PrivateEndpointConnectionPropertiesProvisioningState | null;
	}

	/** Properties of a private endpoint connection. */
	export interface PrivateEndpointConnectionPropertiesFormProperties {

		/** State of the private endpoint connection. */
		provisioningState: FormControl<PrivateEndpointConnectionPropertiesProvisioningState | null | undefined>,
	}
	export function CreatePrivateEndpointConnectionPropertiesFormGroup() {
		return new FormGroup<PrivateEndpointConnectionPropertiesFormProperties>({
			provisioningState: new FormControl<PrivateEndpointConnectionPropertiesProvisioningState | null | undefined>(undefined),
		});

	}

	export interface PrivateEndpointProperty {

		/** Resource id of the private endpoint. */
		id?: string | null;
	}
	export interface PrivateEndpointPropertyFormProperties {

		/** Resource id of the private endpoint. */
		id: FormControl<string | null | undefined>,
	}
	export function CreatePrivateEndpointPropertyFormGroup() {
		return new FormGroup<PrivateEndpointPropertyFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PrivateLinkServiceConnectionStateProperty {

		/** The actions required for private link service connection. */
		actionsRequired?: PrivateLinkServiceConnectionStatePropertyActionsRequired | null;

		/**
		 * The private link service connection description.
		 * Required
		 */
		description: string;

		/**
		 * The private link service connection status.
		 * Required
		 */
		status: PrivateLinkServiceConnectionStatePropertyStatus;
	}
	export interface PrivateLinkServiceConnectionStatePropertyFormProperties {

		/** The actions required for private link service connection. */
		actionsRequired: FormControl<PrivateLinkServiceConnectionStatePropertyActionsRequired | null | undefined>,

		/**
		 * The private link service connection description.
		 * Required
		 */
		description: FormControl<string | null | undefined>,

		/**
		 * The private link service connection status.
		 * Required
		 */
		status: FormControl<PrivateLinkServiceConnectionStatePropertyStatus | null | undefined>,
	}
	export function CreatePrivateLinkServiceConnectionStatePropertyFormGroup() {
		return new FormGroup<PrivateLinkServiceConnectionStatePropertyFormProperties>({
			actionsRequired: new FormControl<PrivateLinkServiceConnectionStatePropertyActionsRequired | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<PrivateLinkServiceConnectionStatePropertyStatus | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum PrivateLinkServiceConnectionStatePropertyActionsRequired { None = 0 }

	export enum PrivateLinkServiceConnectionStatePropertyStatus { Approved = 0, Pending = 1, Rejected = 2, Disconnected = 3 }

	export enum PrivateEndpointConnectionPropertiesProvisioningState { Approving = 0, Ready = 1, Dropping = 2, Failed = 3, Rejecting = 4 }


	/** ARM resource. */
	export interface Resource {

		/** Resource ID. */
		id?: string | null;

		/** Resource name. */
		name?: string | null;

		/** Resource type. */
		type?: string | null;
	}

	/** ARM resource. */
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


	/** Azure Active Directory identity configuration for a resource. */
	export interface ResourceIdentity {

		/** The Azure Active Directory principal id. */
		principalId?: string | null;

		/** The Azure Active Directory tenant id. */
		tenantId?: string | null;

		/** The identity type. Set this to 'SystemAssigned' in order to automatically create and assign an Azure Active Directory principal for the resource. */
		type?: ResourceIdentityType | null;
	}

	/** Azure Active Directory identity configuration for a resource. */
	export interface ResourceIdentityFormProperties {

		/** The Azure Active Directory principal id. */
		principalId: FormControl<string | null | undefined>,

		/** The Azure Active Directory tenant id. */
		tenantId: FormControl<string | null | undefined>,

		/** The identity type. Set this to 'SystemAssigned' in order to automatically create and assign an Azure Active Directory principal for the resource. */
		type: FormControl<ResourceIdentityType | null | undefined>,
	}
	export function CreateResourceIdentityFormGroup() {
		return new FormGroup<ResourceIdentityFormProperties>({
			principalId: new FormControl<string | null | undefined>(undefined),
			tenantId: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<ResourceIdentityType | null | undefined>(undefined),
		});

	}

	export enum ResourceIdentityType { SystemAssigned = 0 }


	/** An Azure SQL Database server. */
	export interface Server {

		/** Azure Active Directory identity configuration for a resource. */
		identity?: ResourceIdentity;

		/** Kind of sql server. This is metadata used for the Azure portal experience. */
		kind?: string | null;

		/** The properties of a server. */
		properties?: ServerProperties;
	}

	/** An Azure SQL Database server. */
	export interface ServerFormProperties {

		/** Kind of sql server. This is metadata used for the Azure portal experience. */
		kind: FormControl<string | null | undefined>,
	}
	export function CreateServerFormGroup() {
		return new FormGroup<ServerFormProperties>({
			kind: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The properties of a server. */
	export interface ServerProperties {

		/** Administrator username for the server. Once created it cannot be changed. */
		administratorLogin?: string | null;

		/** The administrator login password (required for server creation). */
		administratorLoginPassword?: string | null;

		/** The fully qualified domain name of the server. */
		fullyQualifiedDomainName?: string | null;

		/** List of private endpoint connections on a server */
		privateEndpointConnections?: Array<ServerPrivateEndpointConnection>;

		/** The state of the server. */
		state?: string | null;

		/** The version of the server. */
		version?: string | null;
	}

	/** The properties of a server. */
	export interface ServerPropertiesFormProperties {

		/** Administrator username for the server. Once created it cannot be changed. */
		administratorLogin: FormControl<string | null | undefined>,

		/** The administrator login password (required for server creation). */
		administratorLoginPassword: FormControl<string | null | undefined>,

		/** The fully qualified domain name of the server. */
		fullyQualifiedDomainName: FormControl<string | null | undefined>,

		/** The state of the server. */
		state: FormControl<string | null | undefined>,

		/** The version of the server. */
		version: FormControl<string | null | undefined>,
	}
	export function CreateServerPropertiesFormGroup() {
		return new FormGroup<ServerPropertiesFormProperties>({
			administratorLogin: new FormControl<string | null | undefined>(undefined),
			administratorLoginPassword: new FormControl<string | null | undefined>(undefined),
			fullyQualifiedDomainName: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<string | null | undefined>(undefined),
			version: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A private endpoint connection under a server */
	export interface ServerPrivateEndpointConnection {

		/** Resource ID. */
		id?: string | null;

		/** Properties of a private endpoint connection. */
		properties?: PrivateEndpointConnectionProperties;
	}

	/** A private endpoint connection under a server */
	export interface ServerPrivateEndpointConnectionFormProperties {

		/** Resource ID. */
		id: FormControl<string | null | undefined>,
	}
	export function CreateServerPrivateEndpointConnectionFormGroup() {
		return new FormGroup<ServerPrivateEndpointConnectionFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A list of servers. */
	export interface ServerListResult {

		/** Link to retrieve next page of results. */
		nextLink?: string | null;

		/** Array of results. */
		value?: Array<Server>;
	}

	/** A list of servers. */
	export interface ServerListResultFormProperties {

		/** Link to retrieve next page of results. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateServerListResultFormGroup() {
		return new FormGroup<ServerListResultFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An update request for an Azure SQL Database server. */
	export interface ServerUpdate {

		/** The properties of a server. */
		properties?: ServerProperties;

		/** Resource tags. */
		tags?: {[id: string]: string };
	}

	/** An update request for an Azure SQL Database server. */
	export interface ServerUpdateFormProperties {

		/** Resource tags. */
		tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateServerUpdateFormGroup() {
		return new FormGroup<ServerUpdateFormProperties>({
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}


	/** ARM tracked top level resource. */
	export interface TrackedResource {

		/**
		 * Resource location.
		 * Required
		 */
		location: string;

		/** Resource tags. */
		tags?: {[id: string]: string };
	}

	/** ARM tracked top level resource. */
	export interface TrackedResourceFormProperties {

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
			location: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Determines whether a resource can be created with the specified name.
		 * Post subscriptions/{subscriptionId}/providers/Microsoft.Sql/checkNameAvailability
		 * @param {string} subscriptionId The subscription ID that identifies an Azure subscription.
		 * @param {string} api_version The API version to use for the request.
		 * @param {CheckNameAvailabilityRequest} requestBody The name availability request parameters.
		 * @return {CheckNameAvailabilityResponse} Successfully completed the availability check.
		 */
		Servers_CheckNameAvailability(subscriptionId: string, api_version: string, requestBody: CheckNameAvailabilityRequest): Observable<CheckNameAvailabilityResponse> {
			return this.http.post<CheckNameAvailabilityResponse>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/providers/Microsoft.Sql/checkNameAvailability&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets a list of all servers in the subscription.
		 * Get subscriptions/{subscriptionId}/providers/Microsoft.Sql/servers
		 * @param {string} subscriptionId The subscription ID that identifies an Azure subscription.
		 * @param {string} api_version The API version to use for the request.
		 * @return {ServerListResult} Successfully retrieved the list of servers.
		 */
		Servers_List(subscriptionId: string, api_version: string): Observable<ServerListResult> {
			return this.http.get<ServerListResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/providers/Microsoft.Sql/servers&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Gets a list of servers in a resource groups.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers
		 * @param {string} resourceGroupName The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
		 * @param {string} subscriptionId The subscription ID that identifies an Azure subscription.
		 * @param {string} api_version The API version to use for the request.
		 * @return {ServerListResult} Successfully retrieved the list of servers.
		 */
		Servers_ListByResourceGroup(resourceGroupName: string, subscriptionId: string, api_version: string): Observable<ServerListResult> {
			return this.http.get<ServerListResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Sql/servers&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Gets a server.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}
		 * @param {string} resourceGroupName The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
		 * @param {string} serverName The name of the server.
		 * @param {string} subscriptionId The subscription ID that identifies an Azure subscription.
		 * @param {string} api_version The API version to use for the request.
		 * @return {Server} Successfully retrieved the specified server.
		 */
		Servers_Get(resourceGroupName: string, serverName: string, subscriptionId: string, api_version: string): Observable<Server> {
			return this.http.get<Server>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Sql/servers/' + (serverName == null ? '' : encodeURIComponent(serverName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Creates or updates a server.
		 * Put subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}
		 * @param {string} resourceGroupName The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
		 * @param {string} serverName The name of the server.
		 * @param {string} subscriptionId The subscription ID that identifies an Azure subscription.
		 * @param {string} api_version The API version to use for the request.
		 * @param {Server} requestBody The requested server resource state.
		 * @return {Server} Successfully updated the server.
		 */
		Servers_CreateOrUpdate(resourceGroupName: string, serverName: string, subscriptionId: string, api_version: string, requestBody: Server): Observable<Server> {
			return this.http.put<Server>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Sql/servers/' + (serverName == null ? '' : encodeURIComponent(serverName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a server.
		 * Delete subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}
		 * @param {string} resourceGroupName The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
		 * @param {string} serverName The name of the server.
		 * @param {string} subscriptionId The subscription ID that identifies an Azure subscription.
		 * @param {string} api_version The API version to use for the request.
		 * @return {void} Successfully deleted the server.
		 */
		Servers_Delete(resourceGroupName: string, serverName: string, subscriptionId: string, api_version: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Sql/servers/' + (serverName == null ? '' : encodeURIComponent(serverName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Updates a server.
		 * Patch subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}
		 * @param {string} resourceGroupName The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
		 * @param {string} serverName The name of the server.
		 * @param {string} subscriptionId The subscription ID that identifies an Azure subscription.
		 * @param {string} api_version The API version to use for the request.
		 * @param {ServerUpdate} requestBody The requested server resource state.
		 * @return {Server} Successfully updated the server.
		 */
		Servers_Update(resourceGroupName: string, serverName: string, subscriptionId: string, api_version: string, requestBody: ServerUpdate): Observable<Server> {
			return this.http.patch<Server>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Sql/servers/' + (serverName == null ? '' : encodeURIComponent(serverName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

}

