import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** A failover group. */
	export interface FailoverGroup {

		/** Resource location. */
		location?: string | null;

		/** Properties of a failover group. */
		properties?: FailoverGroupProperties;

		/** Resource tags. */
		tags?: {[id: string]: string };
	}

	/** A failover group. */
	export interface FailoverGroupFormProperties {

		/** Resource location. */
		location: FormControl<string | null | undefined>,

		/** Resource tags. */
		tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateFailoverGroupFormGroup() {
		return new FormGroup<FailoverGroupFormProperties>({
			location: new FormControl<string | null | undefined>(undefined),
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}


	/** Properties of a failover group. */
	export interface FailoverGroupProperties {

		/** List of databases in the failover group. */
		databases?: Array<string>;

		/**
		 * List of partner server information for the failover group.
		 * Required
		 */
		partnerServers: Array<PartnerInfo>;

		/** Read-only endpoint of the failover group instance. */
		readOnlyEndpoint?: FailoverGroupReadOnlyEndpoint;

		/**
		 * Read-write endpoint of the failover group instance.
		 * Required
		 */
		readWriteEndpoint: FailoverGroupReadWriteEndpoint;

		/** Local replication role of the failover group instance. */
		replicationRole?: PartnerInfoReplicationRole | null;

		/** Replication state of the failover group instance. */
		replicationState?: string | null;
	}

	/** Properties of a failover group. */
	export interface FailoverGroupPropertiesFormProperties {

		/** Local replication role of the failover group instance. */
		replicationRole: FormControl<PartnerInfoReplicationRole | null | undefined>,

		/** Replication state of the failover group instance. */
		replicationState: FormControl<string | null | undefined>,
	}
	export function CreateFailoverGroupPropertiesFormGroup() {
		return new FormGroup<FailoverGroupPropertiesFormProperties>({
			replicationRole: new FormControl<PartnerInfoReplicationRole | null | undefined>(undefined),
			replicationState: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Partner server information for the failover group. */
	export interface PartnerInfo {

		/**
		 * Resource identifier of the partner server.
		 * Required
		 */
		id: string;

		/** Geo location of the partner server. */
		location?: string | null;

		/** Replication role of the partner server. */
		replicationRole?: PartnerInfoReplicationRole | null;
	}

	/** Partner server information for the failover group. */
	export interface PartnerInfoFormProperties {

		/**
		 * Resource identifier of the partner server.
		 * Required
		 */
		id: FormControl<string | null | undefined>,

		/** Geo location of the partner server. */
		location: FormControl<string | null | undefined>,

		/** Replication role of the partner server. */
		replicationRole: FormControl<PartnerInfoReplicationRole | null | undefined>,
	}
	export function CreatePartnerInfoFormGroup() {
		return new FormGroup<PartnerInfoFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			location: new FormControl<string | null | undefined>(undefined),
			replicationRole: new FormControl<PartnerInfoReplicationRole | null | undefined>(undefined),
		});

	}

	export enum PartnerInfoReplicationRole { Primary = 0, Secondary = 1 }


	/** Read-only endpoint of the failover group instance. */
	export interface FailoverGroupReadOnlyEndpoint {

		/** Failover policy of the read-only endpoint for the failover group. */
		failoverPolicy?: FailoverGroupReadOnlyEndpointFailoverPolicy | null;
	}

	/** Read-only endpoint of the failover group instance. */
	export interface FailoverGroupReadOnlyEndpointFormProperties {

		/** Failover policy of the read-only endpoint for the failover group. */
		failoverPolicy: FormControl<FailoverGroupReadOnlyEndpointFailoverPolicy | null | undefined>,
	}
	export function CreateFailoverGroupReadOnlyEndpointFormGroup() {
		return new FormGroup<FailoverGroupReadOnlyEndpointFormProperties>({
			failoverPolicy: new FormControl<FailoverGroupReadOnlyEndpointFailoverPolicy | null | undefined>(undefined),
		});

	}

	export enum FailoverGroupReadOnlyEndpointFailoverPolicy { Disabled = 0, Enabled = 1 }


	/** Read-write endpoint of the failover group instance. */
	export interface FailoverGroupReadWriteEndpoint {

		/**
		 * Failover policy of the read-write endpoint for the failover group. If failoverPolicy is Automatic then failoverWithDataLossGracePeriodMinutes is required.
		 * Required
		 */
		failoverPolicy: FailoverGroupReadWriteEndpointFailoverPolicy;

		/** Grace period before failover with data loss is attempted for the read-write endpoint. If failoverPolicy is Automatic then failoverWithDataLossGracePeriodMinutes is required. */
		failoverWithDataLossGracePeriodMinutes?: number | null;
	}

	/** Read-write endpoint of the failover group instance. */
	export interface FailoverGroupReadWriteEndpointFormProperties {

		/**
		 * Failover policy of the read-write endpoint for the failover group. If failoverPolicy is Automatic then failoverWithDataLossGracePeriodMinutes is required.
		 * Required
		 */
		failoverPolicy: FormControl<FailoverGroupReadWriteEndpointFailoverPolicy | null | undefined>,

		/** Grace period before failover with data loss is attempted for the read-write endpoint. If failoverPolicy is Automatic then failoverWithDataLossGracePeriodMinutes is required. */
		failoverWithDataLossGracePeriodMinutes: FormControl<number | null | undefined>,
	}
	export function CreateFailoverGroupReadWriteEndpointFormGroup() {
		return new FormGroup<FailoverGroupReadWriteEndpointFormProperties>({
			failoverPolicy: new FormControl<FailoverGroupReadWriteEndpointFailoverPolicy | null | undefined>(undefined, [Validators.required]),
			failoverWithDataLossGracePeriodMinutes: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum FailoverGroupReadWriteEndpointFailoverPolicy { Manual = 0, Automatic = 1 }


	/** A list of failover groups. */
	export interface FailoverGroupListResult {

		/** Link to retrieve next page of results. */
		nextLink?: string | null;

		/** Array of results. */
		value?: Array<FailoverGroup>;
	}

	/** A list of failover groups. */
	export interface FailoverGroupListResultFormProperties {

		/** Link to retrieve next page of results. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateFailoverGroupListResultFormGroup() {
		return new FormGroup<FailoverGroupListResultFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A failover group update request. */
	export interface FailoverGroupUpdate {

		/** Properties of a failover group update. */
		properties?: FailoverGroupUpdateProperties;

		/** Resource tags. */
		tags?: {[id: string]: string };
	}

	/** A failover group update request. */
	export interface FailoverGroupUpdateFormProperties {

		/** Resource tags. */
		tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateFailoverGroupUpdateFormGroup() {
		return new FormGroup<FailoverGroupUpdateFormProperties>({
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}


	/** Properties of a failover group update. */
	export interface FailoverGroupUpdateProperties {

		/** List of databases in the failover group. */
		databases?: Array<string>;

		/** Read-only endpoint of the failover group instance. */
		readOnlyEndpoint?: FailoverGroupReadOnlyEndpoint;

		/** Read-write endpoint of the failover group instance. */
		readWriteEndpoint?: FailoverGroupReadWriteEndpoint;
	}

	/** Properties of a failover group update. */
	export interface FailoverGroupUpdatePropertiesFormProperties {
	}
	export function CreateFailoverGroupUpdatePropertiesFormGroup() {
		return new FormGroup<FailoverGroupUpdatePropertiesFormProperties>({
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Lists the failover groups in a server.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/failoverGroups
		 * @param {string} resourceGroupName The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
		 * @param {string} serverName The name of the server containing the failover group.
		 * @param {string} subscriptionId The subscription ID that identifies an Azure subscription.
		 * @param {string} api_version The API version to use for the request.
		 * @return {FailoverGroupListResult} Successfully retrieved the failover groups.
		 */
		FailoverGroups_ListByServer(resourceGroupName: string, serverName: string, subscriptionId: string, api_version: string): Observable<FailoverGroupListResult> {
			return this.http.get<FailoverGroupListResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Sql/servers/' + (serverName == null ? '' : encodeURIComponent(serverName)) + '/failoverGroups&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Gets a failover group.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/failoverGroups/{failoverGroupName}
		 * @param {string} resourceGroupName The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
		 * @param {string} serverName The name of the server containing the failover group.
		 * @param {string} failoverGroupName The name of the failover group.
		 * @param {string} subscriptionId The subscription ID that identifies an Azure subscription.
		 * @param {string} api_version The API version to use for the request.
		 * @return {FailoverGroup} Successfully retrieved the specified failover group.
		 */
		FailoverGroups_Get(resourceGroupName: string, serverName: string, failoverGroupName: string, subscriptionId: string, api_version: string): Observable<FailoverGroup> {
			return this.http.get<FailoverGroup>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Sql/servers/' + (serverName == null ? '' : encodeURIComponent(serverName)) + '/failoverGroups/' + (failoverGroupName == null ? '' : encodeURIComponent(failoverGroupName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Creates or updates a failover group.
		 * Put subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/failoverGroups/{failoverGroupName}
		 * @param {string} resourceGroupName The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
		 * @param {string} serverName The name of the server containing the failover group.
		 * @param {string} failoverGroupName The name of the failover group.
		 * @param {string} subscriptionId The subscription ID that identifies an Azure subscription.
		 * @param {string} api_version The API version to use for the request.
		 * @param {FailoverGroup} requestBody The failover group parameters.
		 * @return {FailoverGroup} Successfully updated the failover group.
		 */
		FailoverGroups_CreateOrUpdate(resourceGroupName: string, serverName: string, failoverGroupName: string, subscriptionId: string, api_version: string, requestBody: FailoverGroup): Observable<FailoverGroup> {
			return this.http.put<FailoverGroup>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Sql/servers/' + (serverName == null ? '' : encodeURIComponent(serverName)) + '/failoverGroups/' + (failoverGroupName == null ? '' : encodeURIComponent(failoverGroupName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a failover group.
		 * Delete subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/failoverGroups/{failoverGroupName}
		 * @param {string} resourceGroupName The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
		 * @param {string} serverName The name of the server containing the failover group.
		 * @param {string} failoverGroupName The name of the failover group.
		 * @param {string} subscriptionId The subscription ID that identifies an Azure subscription.
		 * @param {string} api_version The API version to use for the request.
		 * @return {void} Successfully deleted the failover group.
		 */
		FailoverGroups_Delete(resourceGroupName: string, serverName: string, failoverGroupName: string, subscriptionId: string, api_version: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Sql/servers/' + (serverName == null ? '' : encodeURIComponent(serverName)) + '/failoverGroups/' + (failoverGroupName == null ? '' : encodeURIComponent(failoverGroupName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Updates a failover group.
		 * Patch subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/failoverGroups/{failoverGroupName}
		 * @param {string} resourceGroupName The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
		 * @param {string} serverName The name of the server containing the failover group.
		 * @param {string} failoverGroupName The name of the failover group.
		 * @param {string} subscriptionId The subscription ID that identifies an Azure subscription.
		 * @param {string} api_version The API version to use for the request.
		 * @param {FailoverGroupUpdate} requestBody The failover group parameters.
		 * @return {FailoverGroup} Successfully updated the failover group.
		 */
		FailoverGroups_Update(resourceGroupName: string, serverName: string, failoverGroupName: string, subscriptionId: string, api_version: string, requestBody: FailoverGroupUpdate): Observable<FailoverGroup> {
			return this.http.patch<FailoverGroup>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Sql/servers/' + (serverName == null ? '' : encodeURIComponent(serverName)) + '/failoverGroups/' + (failoverGroupName == null ? '' : encodeURIComponent(failoverGroupName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Fails over from the current primary server to this server.
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/failoverGroups/{failoverGroupName}/failover
		 * @param {string} resourceGroupName The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
		 * @param {string} serverName The name of the server containing the failover group.
		 * @param {string} failoverGroupName The name of the failover group.
		 * @param {string} subscriptionId The subscription ID that identifies an Azure subscription.
		 * @param {string} api_version The API version to use for the request.
		 * @return {FailoverGroup} Successfully failed over.
		 */
		FailoverGroups_Failover(resourceGroupName: string, serverName: string, failoverGroupName: string, subscriptionId: string, api_version: string): Observable<FailoverGroup> {
			return this.http.post<FailoverGroup>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Sql/servers/' + (serverName == null ? '' : encodeURIComponent(serverName)) + '/failoverGroups/' + (failoverGroupName == null ? '' : encodeURIComponent(failoverGroupName)) + '/failover&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), null, {});
		}

		/**
		 * Fails over from the current primary server to this server. This operation might result in data loss.
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/failoverGroups/{failoverGroupName}/forceFailoverAllowDataLoss
		 * @param {string} resourceGroupName The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
		 * @param {string} serverName The name of the server containing the failover group.
		 * @param {string} failoverGroupName The name of the failover group.
		 * @param {string} subscriptionId The subscription ID that identifies an Azure subscription.
		 * @param {string} api_version The API version to use for the request.
		 * @return {FailoverGroup} Successfully failed over.
		 */
		FailoverGroups_ForceFailoverAllowDataLoss(resourceGroupName: string, serverName: string, failoverGroupName: string, subscriptionId: string, api_version: string): Observable<FailoverGroup> {
			return this.http.post<FailoverGroup>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Sql/servers/' + (serverName == null ? '' : encodeURIComponent(serverName)) + '/failoverGroups/' + (failoverGroupName == null ? '' : encodeURIComponent(failoverGroupName)) + '/forceFailoverAllowDataLoss&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), null, {});
		}
	}

}

