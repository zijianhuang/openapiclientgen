import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** An instance failover group. */
	export interface InstanceFailoverGroup {

		/** Properties of a instance failover group. */
		properties?: InstanceFailoverGroupProperties;
	}

	/** An instance failover group. */
	export interface InstanceFailoverGroupFormProperties {
	}
	export function CreateInstanceFailoverGroupFormGroup() {
		return new FormGroup<InstanceFailoverGroupFormProperties>({
		});

	}


	/** Properties of a instance failover group. */
	export interface InstanceFailoverGroupProperties {

		/**
		 * List of managed instance pairs in the failover group.
		 * Required
		 */
		managedInstancePairs: Array<ManagedInstancePairInfo>;

		/**
		 * Partner region information for the failover group.
		 * Required
		 */
		partnerRegions: Array<PartnerRegionInfo>;

		/** Read-only endpoint of the failover group instance. */
		readOnlyEndpoint?: InstanceFailoverGroupReadOnlyEndpoint;

		/**
		 * Read-write endpoint of the failover group instance.
		 * Required
		 */
		readWriteEndpoint: InstanceFailoverGroupReadWriteEndpoint;

		/** Local replication role of the failover group instance. */
		replicationRole?: PartnerRegionInfoReplicationRole | null;

		/** Replication state of the failover group instance. */
		replicationState?: string | null;
	}

	/** Properties of a instance failover group. */
	export interface InstanceFailoverGroupPropertiesFormProperties {

		/** Local replication role of the failover group instance. */
		replicationRole: FormControl<PartnerRegionInfoReplicationRole | null | undefined>,

		/** Replication state of the failover group instance. */
		replicationState: FormControl<string | null | undefined>,
	}
	export function CreateInstanceFailoverGroupPropertiesFormGroup() {
		return new FormGroup<InstanceFailoverGroupPropertiesFormProperties>({
			replicationRole: new FormControl<PartnerRegionInfoReplicationRole | null | undefined>(undefined),
			replicationState: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Pairs of Managed Instances in the failover group. */
	export interface ManagedInstancePairInfo {

		/** Id of Partner Managed Instance in pair. */
		partnerManagedInstanceId?: string | null;

		/** Id of Primary Managed Instance in pair. */
		primaryManagedInstanceId?: string | null;
	}

	/** Pairs of Managed Instances in the failover group. */
	export interface ManagedInstancePairInfoFormProperties {

		/** Id of Partner Managed Instance in pair. */
		partnerManagedInstanceId: FormControl<string | null | undefined>,

		/** Id of Primary Managed Instance in pair. */
		primaryManagedInstanceId: FormControl<string | null | undefined>,
	}
	export function CreateManagedInstancePairInfoFormGroup() {
		return new FormGroup<ManagedInstancePairInfoFormProperties>({
			partnerManagedInstanceId: new FormControl<string | null | undefined>(undefined),
			primaryManagedInstanceId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Partner region information for the failover group. */
	export interface PartnerRegionInfo {

		/** Geo location of the partner managed instances. */
		location?: string | null;

		/** Replication role of the partner managed instances. */
		replicationRole?: PartnerRegionInfoReplicationRole | null;
	}

	/** Partner region information for the failover group. */
	export interface PartnerRegionInfoFormProperties {

		/** Geo location of the partner managed instances. */
		location: FormControl<string | null | undefined>,

		/** Replication role of the partner managed instances. */
		replicationRole: FormControl<PartnerRegionInfoReplicationRole | null | undefined>,
	}
	export function CreatePartnerRegionInfoFormGroup() {
		return new FormGroup<PartnerRegionInfoFormProperties>({
			location: new FormControl<string | null | undefined>(undefined),
			replicationRole: new FormControl<PartnerRegionInfoReplicationRole | null | undefined>(undefined),
		});

	}

	export enum PartnerRegionInfoReplicationRole { Primary = 'Primary', Secondary = 'Secondary' }


	/** Read-only endpoint of the failover group instance. */
	export interface InstanceFailoverGroupReadOnlyEndpoint {

		/** Failover policy of the read-only endpoint for the failover group. */
		failoverPolicy?: InstanceFailoverGroupReadOnlyEndpointFailoverPolicy | null;
	}

	/** Read-only endpoint of the failover group instance. */
	export interface InstanceFailoverGroupReadOnlyEndpointFormProperties {

		/** Failover policy of the read-only endpoint for the failover group. */
		failoverPolicy: FormControl<InstanceFailoverGroupReadOnlyEndpointFailoverPolicy | null | undefined>,
	}
	export function CreateInstanceFailoverGroupReadOnlyEndpointFormGroup() {
		return new FormGroup<InstanceFailoverGroupReadOnlyEndpointFormProperties>({
			failoverPolicy: new FormControl<InstanceFailoverGroupReadOnlyEndpointFailoverPolicy | null | undefined>(undefined),
		});

	}

	export enum InstanceFailoverGroupReadOnlyEndpointFailoverPolicy { Disabled = 'Disabled', Enabled = 'Enabled' }


	/** Read-write endpoint of the failover group instance. */
	export interface InstanceFailoverGroupReadWriteEndpoint {

		/**
		 * Failover policy of the read-write endpoint for the failover group. If failoverPolicy is Automatic then failoverWithDataLossGracePeriodMinutes is required.
		 * Required
		 */
		failoverPolicy: InstanceFailoverGroupReadWriteEndpointFailoverPolicy;

		/** Grace period before failover with data loss is attempted for the read-write endpoint. If failoverPolicy is Automatic then failoverWithDataLossGracePeriodMinutes is required. */
		failoverWithDataLossGracePeriodMinutes?: number | null;
	}

	/** Read-write endpoint of the failover group instance. */
	export interface InstanceFailoverGroupReadWriteEndpointFormProperties {

		/**
		 * Failover policy of the read-write endpoint for the failover group. If failoverPolicy is Automatic then failoverWithDataLossGracePeriodMinutes is required.
		 * Required
		 */
		failoverPolicy: FormControl<InstanceFailoverGroupReadWriteEndpointFailoverPolicy | null | undefined>,

		/** Grace period before failover with data loss is attempted for the read-write endpoint. If failoverPolicy is Automatic then failoverWithDataLossGracePeriodMinutes is required. */
		failoverWithDataLossGracePeriodMinutes: FormControl<number | null | undefined>,
	}
	export function CreateInstanceFailoverGroupReadWriteEndpointFormGroup() {
		return new FormGroup<InstanceFailoverGroupReadWriteEndpointFormProperties>({
			failoverPolicy: new FormControl<InstanceFailoverGroupReadWriteEndpointFailoverPolicy | null | undefined>(undefined, [Validators.required]),
			failoverWithDataLossGracePeriodMinutes: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum InstanceFailoverGroupReadWriteEndpointFailoverPolicy { Manual = 'Manual', Automatic = 'Automatic' }


	/** A list of instance failover groups. */
	export interface InstanceFailoverGroupListResult {

		/** Link to retrieve next page of results. */
		nextLink?: string | null;

		/** Array of results. */
		value?: Array<InstanceFailoverGroup>;
	}

	/** A list of instance failover groups. */
	export interface InstanceFailoverGroupListResultFormProperties {

		/** Link to retrieve next page of results. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateInstanceFailoverGroupListResultFormGroup() {
		return new FormGroup<InstanceFailoverGroupListResultFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Lists the failover groups in a location.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/locations/{locationName}/instanceFailoverGroups
		 * @param {string} resourceGroupName The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
		 * @param {string} locationName The name of the region where the resource is located.
		 * @param {string} subscriptionId The subscription ID that identifies an Azure subscription.
		 * @param {string} api_version The API version to use for the request.
		 * @return {InstanceFailoverGroupListResult} Successfully retrieved the failover groups.
		 */
		InstanceFailoverGroups_ListByLocation(resourceGroupName: string, locationName: string, subscriptionId: string, api_version: string): Observable<InstanceFailoverGroupListResult> {
			return this.http.get<InstanceFailoverGroupListResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Sql/locations/' + (locationName == null ? '' : encodeURIComponent(locationName)) + '/instanceFailoverGroups&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Gets a failover group.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/locations/{locationName}/instanceFailoverGroups/{failoverGroupName}
		 * @param {string} resourceGroupName The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
		 * @param {string} locationName The name of the region where the resource is located.
		 * @param {string} failoverGroupName The name of the failover group.
		 * @param {string} subscriptionId The subscription ID that identifies an Azure subscription.
		 * @param {string} api_version The API version to use for the request.
		 * @return {InstanceFailoverGroup} Successfully retrieved the specified failover group.
		 */
		InstanceFailoverGroups_Get(resourceGroupName: string, locationName: string, failoverGroupName: string, subscriptionId: string, api_version: string): Observable<InstanceFailoverGroup> {
			return this.http.get<InstanceFailoverGroup>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Sql/locations/' + (locationName == null ? '' : encodeURIComponent(locationName)) + '/instanceFailoverGroups/' + (failoverGroupName == null ? '' : encodeURIComponent(failoverGroupName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Creates or updates a failover group.
		 * Put subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/locations/{locationName}/instanceFailoverGroups/{failoverGroupName}
		 * @param {string} resourceGroupName The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
		 * @param {string} locationName The name of the region where the resource is located.
		 * @param {string} failoverGroupName The name of the failover group.
		 * @param {string} subscriptionId The subscription ID that identifies an Azure subscription.
		 * @param {string} api_version The API version to use for the request.
		 * @param {InstanceFailoverGroup} requestBody The failover group parameters.
		 * @return {InstanceFailoverGroup} Successfully updated the failover group.
		 */
		InstanceFailoverGroups_CreateOrUpdate(resourceGroupName: string, locationName: string, failoverGroupName: string, subscriptionId: string, api_version: string, requestBody: InstanceFailoverGroup): Observable<InstanceFailoverGroup> {
			return this.http.put<InstanceFailoverGroup>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Sql/locations/' + (locationName == null ? '' : encodeURIComponent(locationName)) + '/instanceFailoverGroups/' + (failoverGroupName == null ? '' : encodeURIComponent(failoverGroupName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a failover group.
		 * Delete subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/locations/{locationName}/instanceFailoverGroups/{failoverGroupName}
		 * @param {string} resourceGroupName The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
		 * @param {string} locationName The name of the region where the resource is located.
		 * @param {string} failoverGroupName The name of the failover group.
		 * @param {string} subscriptionId The subscription ID that identifies an Azure subscription.
		 * @param {string} api_version The API version to use for the request.
		 * @return {void} Successfully deleted the failover group.
		 */
		InstanceFailoverGroups_Delete(resourceGroupName: string, locationName: string, failoverGroupName: string, subscriptionId: string, api_version: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Sql/locations/' + (locationName == null ? '' : encodeURIComponent(locationName)) + '/instanceFailoverGroups/' + (failoverGroupName == null ? '' : encodeURIComponent(failoverGroupName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Fails over from the current primary managed instance to this managed instance.
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/locations/{locationName}/instanceFailoverGroups/{failoverGroupName}/failover
		 * @param {string} resourceGroupName The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
		 * @param {string} locationName The name of the region where the resource is located.
		 * @param {string} failoverGroupName The name of the failover group.
		 * @param {string} subscriptionId The subscription ID that identifies an Azure subscription.
		 * @param {string} api_version The API version to use for the request.
		 * @return {InstanceFailoverGroup} Successfully failed over.
		 */
		InstanceFailoverGroups_Failover(resourceGroupName: string, locationName: string, failoverGroupName: string, subscriptionId: string, api_version: string): Observable<InstanceFailoverGroup> {
			return this.http.post<InstanceFailoverGroup>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Sql/locations/' + (locationName == null ? '' : encodeURIComponent(locationName)) + '/instanceFailoverGroups/' + (failoverGroupName == null ? '' : encodeURIComponent(failoverGroupName)) + '/failover&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), null, {});
		}

		/**
		 * Fails over from the current primary managed instance to this managed instance. This operation might result in data loss.
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/locations/{locationName}/instanceFailoverGroups/{failoverGroupName}/forceFailoverAllowDataLoss
		 * @param {string} resourceGroupName The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
		 * @param {string} locationName The name of the region where the resource is located.
		 * @param {string} failoverGroupName The name of the failover group.
		 * @param {string} subscriptionId The subscription ID that identifies an Azure subscription.
		 * @param {string} api_version The API version to use for the request.
		 * @return {InstanceFailoverGroup} Successfully failed over.
		 */
		InstanceFailoverGroups_ForceFailoverAllowDataLoss(resourceGroupName: string, locationName: string, failoverGroupName: string, subscriptionId: string, api_version: string): Observable<InstanceFailoverGroup> {
			return this.http.post<InstanceFailoverGroup>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Sql/locations/' + (locationName == null ? '' : encodeURIComponent(locationName)) + '/instanceFailoverGroups/' + (failoverGroupName == null ? '' : encodeURIComponent(failoverGroupName)) + '/forceFailoverAllowDataLoss&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), null, {});
		}
	}

}

