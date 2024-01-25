import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface ReplicationLink {
	}
	export interface ReplicationLinkFormProperties {
	}
	export function CreateReplicationLinkFormGroup() {
		return new FormGroup<ReplicationLinkFormProperties>({
		});

	}


	/** Represents the response to a List database replication link request. */
	export interface ReplicationLinkListResult {

		/** The list of database replication links housed in the database. */
		value?: Array<ReplicationLink>;
	}

	/** Represents the response to a List database replication link request. */
	export interface ReplicationLinkListResultFormProperties {
	}
	export function CreateReplicationLinkListResultFormGroup() {
		return new FormGroup<ReplicationLinkListResultFormProperties>({
		});

	}


	/** Represents the properties of a database replication link. */
	export interface ReplicationLinkProperties {

		/** Legacy value indicating whether termination is allowed.  Currently always returns true. */
		isTerminationAllowed?: boolean | null;

		/** The name of the partner database. */
		partnerDatabase?: string | null;

		/** The Azure Region of the partner database. */
		partnerLocation?: string | null;

		/** The role of the partner database in the replication link. */
		partnerRole?: ReplicationLinkPropertiesPartnerRole | null;

		/** The name of the server hosting the partner database. */
		partnerServer?: string | null;

		/** The percentage of seeding complete for the replication link. */
		percentComplete?: number | null;

		/** Replication mode of this replication link. */
		replicationMode?: string | null;

		/** The replication state for the replication link. */
		replicationState?: ReplicationLinkPropertiesReplicationState | null;

		/** The role of the database in the replication link. */
		role?: ReplicationLinkPropertiesPartnerRole | null;

		/** The start time for the replication link. */
		startTime?: Date | null;
	}

	/** Represents the properties of a database replication link. */
	export interface ReplicationLinkPropertiesFormProperties {

		/** Legacy value indicating whether termination is allowed.  Currently always returns true. */
		isTerminationAllowed: FormControl<boolean | null | undefined>,

		/** The name of the partner database. */
		partnerDatabase: FormControl<string | null | undefined>,

		/** The Azure Region of the partner database. */
		partnerLocation: FormControl<string | null | undefined>,

		/** The role of the partner database in the replication link. */
		partnerRole: FormControl<ReplicationLinkPropertiesPartnerRole | null | undefined>,

		/** The name of the server hosting the partner database. */
		partnerServer: FormControl<string | null | undefined>,

		/** The percentage of seeding complete for the replication link. */
		percentComplete: FormControl<number | null | undefined>,

		/** Replication mode of this replication link. */
		replicationMode: FormControl<string | null | undefined>,

		/** The replication state for the replication link. */
		replicationState: FormControl<ReplicationLinkPropertiesReplicationState | null | undefined>,

		/** The role of the database in the replication link. */
		role: FormControl<ReplicationLinkPropertiesPartnerRole | null | undefined>,

		/** The start time for the replication link. */
		startTime: FormControl<Date | null | undefined>,
	}
	export function CreateReplicationLinkPropertiesFormGroup() {
		return new FormGroup<ReplicationLinkPropertiesFormProperties>({
			isTerminationAllowed: new FormControl<boolean | null | undefined>(undefined),
			partnerDatabase: new FormControl<string | null | undefined>(undefined),
			partnerLocation: new FormControl<string | null | undefined>(undefined),
			partnerRole: new FormControl<ReplicationLinkPropertiesPartnerRole | null | undefined>(undefined),
			partnerServer: new FormControl<string | null | undefined>(undefined),
			percentComplete: new FormControl<number | null | undefined>(undefined),
			replicationMode: new FormControl<string | null | undefined>(undefined),
			replicationState: new FormControl<ReplicationLinkPropertiesReplicationState | null | undefined>(undefined),
			role: new FormControl<ReplicationLinkPropertiesPartnerRole | null | undefined>(undefined),
			startTime: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export enum ReplicationLinkPropertiesPartnerRole { Primary = 0, Secondary = 1, NonReadableSecondary = 2, Source = 3, Copy = 4 }

	export enum ReplicationLinkPropertiesReplicationState { PENDING = 0, SEEDING = 1, CATCH_UP = 2, SUSPENDED = 3 }

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Lists a database's replication links.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/databases/{databaseName}/replicationLinks
		 * @param {string} api_version The API version to use for the request.
		 * @param {string} subscriptionId The subscription ID that identifies an Azure subscription.
		 * @param {string} resourceGroupName The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
		 * @param {string} serverName The name of the server.
		 * @param {string} databaseName The name of the database to retrieve links for.
		 * @return {ReplicationLinkListResult} OK
		 */
		ReplicationLinks_ListByDatabase(api_version: string, subscriptionId: string, resourceGroupName: string, serverName: string, databaseName: string): Observable<ReplicationLinkListResult> {
			return this.http.get<ReplicationLinkListResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Sql/servers/' + (serverName == null ? '' : encodeURIComponent(serverName)) + '/databases/' + (databaseName == null ? '' : encodeURIComponent(databaseName)) + '/replicationLinks?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Gets a database replication link.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/databases/{databaseName}/replicationLinks/{linkId}
		 * @param {string} api_version The API version to use for the request.
		 * @param {string} subscriptionId The subscription ID that identifies an Azure subscription.
		 * @param {string} resourceGroupName The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
		 * @param {string} serverName The name of the server.
		 * @param {string} databaseName The name of the database to get the link for.
		 * @param {string} linkId The replication link ID to be retrieved.
		 * @return {ReplicationLink} OK
		 */
		ReplicationLinks_Get(api_version: string, subscriptionId: string, resourceGroupName: string, serverName: string, databaseName: string, linkId: string): Observable<ReplicationLink> {
			return this.http.get<ReplicationLink>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Sql/servers/' + (serverName == null ? '' : encodeURIComponent(serverName)) + '/databases/' + (databaseName == null ? '' : encodeURIComponent(databaseName)) + '/replicationLinks/' + (linkId == null ? '' : encodeURIComponent(linkId)) + '?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Deletes a database replication link. Cannot be done during failover.
		 * Delete subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/databases/{databaseName}/replicationLinks/{linkId}
		 * @param {string} api_version The API version to use for the request.
		 * @param {string} subscriptionId The subscription ID that identifies an Azure subscription.
		 * @param {string} resourceGroupName The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
		 * @param {string} serverName The name of the server.
		 * @param {string} databaseName The name of the database that has the replication link to be dropped.
		 * @param {string} linkId The ID of the replication link to be deleted.
		 * @return {void} OK
		 */
		ReplicationLinks_Delete(api_version: string, subscriptionId: string, resourceGroupName: string, serverName: string, databaseName: string, linkId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Sql/servers/' + (serverName == null ? '' : encodeURIComponent(serverName)) + '/databases/' + (databaseName == null ? '' : encodeURIComponent(databaseName)) + '/replicationLinks/' + (linkId == null ? '' : encodeURIComponent(linkId)) + '?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Sets which replica database is primary by failing over from the current primary replica database.
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/databases/{databaseName}/replicationLinks/{linkId}/failover
		 * @param {string} api_version The API version to use for the request.
		 * @param {string} subscriptionId The subscription ID that identifies an Azure subscription.
		 * @param {string} resourceGroupName The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
		 * @param {string} serverName The name of the server.
		 * @param {string} databaseName The name of the database that has the replication link to be failed over.
		 * @param {string} linkId The ID of the replication link to be failed over.
		 * @return {void} 
		 */
		ReplicationLinks_Failover(api_version: string, subscriptionId: string, resourceGroupName: string, serverName: string, databaseName: string, linkId: string): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Sql/servers/' + (serverName == null ? '' : encodeURIComponent(serverName)) + '/databases/' + (databaseName == null ? '' : encodeURIComponent(databaseName)) + '/replicationLinks/' + (linkId == null ? '' : encodeURIComponent(linkId)) + '/failover?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Sets which replica database is primary by failing over from the current primary replica database. This operation might result in data loss.
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/databases/{databaseName}/replicationLinks/{linkId}/forceFailoverAllowDataLoss
		 * @param {string} api_version The API version to use for the request.
		 * @param {string} subscriptionId The subscription ID that identifies an Azure subscription.
		 * @param {string} resourceGroupName The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
		 * @param {string} serverName The name of the server.
		 * @param {string} databaseName The name of the database that has the replication link to be failed over.
		 * @param {string} linkId The ID of the replication link to be failed over.
		 * @return {void} 
		 */
		ReplicationLinks_FailoverAllowDataLoss(api_version: string, subscriptionId: string, resourceGroupName: string, serverName: string, databaseName: string, linkId: string): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Sql/servers/' + (serverName == null ? '' : encodeURIComponent(serverName)) + '/databases/' + (databaseName == null ? '' : encodeURIComponent(databaseName)) + '/replicationLinks/' + (linkId == null ? '' : encodeURIComponent(linkId)) + '/forceFailoverAllowDataLoss?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), null, { observe: 'response', responseType: 'text' });
		}
	}

}

