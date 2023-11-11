import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
export namespace MyNS {
	export interface CopyBackupToRegionResponse {

		/** Contains information about the backup that will be copied and created by the <a>CopyBackupToRegion</a> operation. */
		DestinationBackup?: DestinationBackup | null;
	}


	/** Contains information about the backup that will be copied and created by the <a>CopyBackupToRegion</a> operation. */
	export interface DestinationBackup {
		CreateTimestamp?: Date | null;
		SourceRegion?: string | null;
		SourceBackup?: string | null;
		SourceCluster?: string | null;
	}

	export interface CopyBackupToRegionRequest {
		DestinationRegion: string;
		BackupId: string;
		TagList?: Array<Tag> | null;
	}


	/** Contains a tag. A tag is a key-value pair. */
	export interface Tag {
		Key: string;
		Value: string;
	}

	export interface CloudHsmAccessDeniedException {
	}

	export interface CloudHsmInternalFailureException {
	}

	export interface CloudHsmInvalidRequestException {
	}

	export interface CloudHsmResourceNotFoundException {
	}

	export interface CloudHsmServiceException {
	}

	export interface CloudHsmTagException {
	}

	export interface CreateClusterResponse {

		/** Contains information about an AWS CloudHSM cluster. */
		Cluster?: Cluster | null;
	}


	/** Contains information about an AWS CloudHSM cluster. */
	export interface Cluster {
		BackupPolicy?: ClusterBackupPolicy | null;
		ClusterId?: string | null;
		CreateTimestamp?: Date | null;
		Hsms?: Array<Hsm> | null;
		HsmType?: string | null;
		PreCoPassword?: string | null;
		SecurityGroup?: string | null;
		SourceBackupId?: string | null;
		State?: ClusterState | null;
		StateMessage?: string | null;
		SubnetMapping?: ExternalSubnetMapping | null;
		VpcId?: string | null;

		/** Contains one or more certificates or a certificate signing request (CSR). */
		Certificates?: Certificates | null;
		TagList?: Array<Tag> | null;
	}

	export enum ClusterBackupPolicy { DEFAULT = 0 }


	/** Contains information about a hardware security module (HSM) in an AWS CloudHSM cluster. */
	export interface Hsm {
		AvailabilityZone?: string | null;
		ClusterId?: string | null;
		SubnetId?: string | null;
		EniId?: string | null;
		EniIp?: string | null;
		HsmId: string;
		State?: HsmState | null;
		StateMessage?: string | null;
	}

	export enum HsmState { CREATE_IN_PROGRESS = 0, ACTIVE = 1, DEGRADED = 2, DELETE_IN_PROGRESS = 3, DELETED = 4 }

	export enum ClusterState { CREATE_IN_PROGRESS = 0, UNINITIALIZED = 1, INITIALIZE_IN_PROGRESS = 2, INITIALIZED = 3, ACTIVE = 4, UPDATE_IN_PROGRESS = 5, DELETE_IN_PROGRESS = 6, DELETED = 7, DEGRADED = 8 }

	export interface ExternalSubnetMapping {
	}


	/** Contains one or more certificates or a certificate signing request (CSR). */
	export interface Certificates {
		ClusterCsr?: string | null;
		HsmCertificate?: string | null;
		AwsHardwareCertificate?: string | null;
		ManufacturerHardwareCertificate?: string | null;
		ClusterCertificate?: string | null;
	}

	export interface CreateClusterRequest {
		SubnetIds: Array<string>;
		HsmType: string;
		SourceBackupId?: string | null;
		TagList?: Array<Tag> | null;
	}

	export interface CreateHsmResponse {

		/** Contains information about a hardware security module (HSM) in an AWS CloudHSM cluster. */
		Hsm?: Hsm | null;
	}

	export interface CreateHsmRequest {
		ClusterId: string;
		AvailabilityZone: string;
		IpAddress?: string | null;
	}

	export interface DeleteBackupResponse {

		/** Contains information about a backup of an AWS CloudHSM cluster. All backup objects contain the BackupId, BackupState, ClusterId, and CreateTimestamp parameters. Backups that were copied into a destination region additionally contain the CopyTimestamp, SourceBackup, SourceCluster, and SourceRegion paramters. A backup that is pending deletion will include the DeleteTimestamp parameter. */
		Backup?: Backup | null;
	}


	/** Contains information about a backup of an AWS CloudHSM cluster. All backup objects contain the BackupId, BackupState, ClusterId, and CreateTimestamp parameters. Backups that were copied into a destination region additionally contain the CopyTimestamp, SourceBackup, SourceCluster, and SourceRegion paramters. A backup that is pending deletion will include the DeleteTimestamp parameter. */
	export interface Backup {
		BackupId: string;
		BackupState?: BackupBackupState | null;
		ClusterId?: string | null;
		CreateTimestamp?: Date | null;
		CopyTimestamp?: Date | null;
		SourceRegion?: string | null;
		SourceBackup?: string | null;
		SourceCluster?: string | null;
		DeleteTimestamp?: Date | null;
		TagList?: Array<Tag> | null;
	}

	export enum BackupBackupState { CREATE_IN_PROGRESS = 0, READY = 1, DELETED = 2, PENDING_DELETION = 3 }

	export interface DeleteBackupRequest {
		BackupId: string;
	}

	export interface DeleteClusterResponse {

		/** Contains information about an AWS CloudHSM cluster. */
		Cluster?: Cluster | null;
	}

	export interface DeleteClusterRequest {
		ClusterId: string;
	}

	export interface DeleteHsmResponse {
		HsmId?: string | null;
	}

	export interface DeleteHsmRequest {
		ClusterId: string;
		HsmId?: string | null;
		EniId?: string | null;
		EniIp?: string | null;
	}

	export interface DescribeBackupsResponse {
		Backups?: Array<Backup> | null;
		NextToken?: string | null;
	}

	export interface DescribeBackupsRequest {
		NextToken?: string | null;
		MaxResults?: number | null;
		Filters?: Filters | null;
		SortAscending?: boolean | null;
	}

	export interface Filters {
	}

	export interface DescribeClustersResponse {
		Clusters?: Array<Cluster> | null;
		NextToken?: string | null;
	}

	export interface DescribeClustersRequest {
		Filters?: Filters | null;
		NextToken?: string | null;
		MaxResults?: number | null;
	}

	export interface InitializeClusterResponse {
		State?: ClusterState | null;
		StateMessage?: string | null;
	}

	export interface InitializeClusterRequest {
		ClusterId: string;
		SignedCert: string;
		TrustAnchor: string;
	}

	export interface ListTagsResponse {
		TagList: Array<Tag>;
		NextToken?: string | null;
	}

	export interface ListTagsRequest {
		ResourceId: string;
		NextToken?: string | null;
		MaxResults?: number | null;
	}

	export interface RestoreBackupResponse {

		/** Contains information about a backup of an AWS CloudHSM cluster. All backup objects contain the BackupId, BackupState, ClusterId, and CreateTimestamp parameters. Backups that were copied into a destination region additionally contain the CopyTimestamp, SourceBackup, SourceCluster, and SourceRegion paramters. A backup that is pending deletion will include the DeleteTimestamp parameter. */
		Backup?: Backup | null;
	}

	export interface RestoreBackupRequest {
		BackupId: string;
	}

	export interface TagResourceResponse {
	}

	export interface TagResourceRequest {
		ResourceId: string;
		TagList: Array<Tag>;
	}

	export interface UntagResourceResponse {
	}

	export interface UntagResourceRequest {
		ResourceId: string;
		TagKeyList: Array<string>;
	}

	export enum BackupState { CREATE_IN_PROGRESS = 0, READY = 1, DELETED = 2, PENDING_DELETION = 3 }

	export enum BackupPolicy { DEFAULT = 0 }

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Copy an AWS CloudHSM cluster backup to a different region.
		 * Post #X-Amz-Target=BaldrApiService.CopyBackupToRegion
		 * @return {CopyBackupToRegionResponse} Success
		 */
		CopyBackupToRegion(requestBody: CopyBackupToRegionRequest): Observable<CopyBackupToRegionResponse> {
			return this.http.post<CopyBackupToRegionResponse>(this.baseUri + '#X-Amz-Target=BaldrApiService.CopyBackupToRegion', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Creates a new AWS CloudHSM cluster.
		 * Post #X-Amz-Target=BaldrApiService.CreateCluster
		 * @return {CreateClusterResponse} Success
		 */
		CreateCluster(requestBody: CreateClusterRequest): Observable<CreateClusterResponse> {
			return this.http.post<CreateClusterResponse>(this.baseUri + '#X-Amz-Target=BaldrApiService.CreateCluster', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Creates a new hardware security module (HSM) in the specified AWS CloudHSM cluster.
		 * Post #X-Amz-Target=BaldrApiService.CreateHsm
		 * @return {CreateHsmResponse} Success
		 */
		CreateHsm(requestBody: CreateHsmRequest): Observable<CreateHsmResponse> {
			return this.http.post<CreateHsmResponse>(this.baseUri + '#X-Amz-Target=BaldrApiService.CreateHsm', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a specified AWS CloudHSM backup. A backup can be restored up to 7 days after the DeleteBackup request is made. For more information on restoring a backup, see <a>RestoreBackup</a>.
		 * Post #X-Amz-Target=BaldrApiService.DeleteBackup
		 * @return {DeleteBackupResponse} Success
		 */
		DeleteBackup(requestBody: DeleteBackupRequest): Observable<DeleteBackupResponse> {
			return this.http.post<DeleteBackupResponse>(this.baseUri + '#X-Amz-Target=BaldrApiService.DeleteBackup', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes the specified AWS CloudHSM cluster. Before you can delete a cluster, you must delete all HSMs in the cluster. To see if the cluster contains any HSMs, use <a>DescribeClusters</a>. To delete an HSM, use <a>DeleteHsm</a>.
		 * Post #X-Amz-Target=BaldrApiService.DeleteCluster
		 * @return {DeleteClusterResponse} Success
		 */
		DeleteCluster(requestBody: DeleteClusterRequest): Observable<DeleteClusterResponse> {
			return this.http.post<DeleteClusterResponse>(this.baseUri + '#X-Amz-Target=BaldrApiService.DeleteCluster', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes the specified HSM. To specify an HSM, you can use its identifier (ID), the IP address of the HSM's elastic network interface (ENI), or the ID of the HSM's ENI. You need to specify only one of these values. To find these values, use <a>DescribeClusters</a>.
		 * Post #X-Amz-Target=BaldrApiService.DeleteHsm
		 * @return {DeleteHsmResponse} Success
		 */
		DeleteHsm(requestBody: DeleteHsmRequest): Observable<DeleteHsmResponse> {
			return this.http.post<DeleteHsmResponse>(this.baseUri + '#X-Amz-Target=BaldrApiService.DeleteHsm', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Gets information about backups of AWS CloudHSM clusters.</p> <p>This is a paginated operation, which means that each response might contain only a subset of all the backups. When the response contains only a subset of backups, it includes a <code>NextToken</code> value. Use this value in a subsequent <code>DescribeBackups</code> request to get more backups. When you receive a response with no <code>NextToken</code> (or an empty or null value), that means there are no more backups to get.</p>
		 * Post #X-Amz-Target=BaldrApiService.DescribeBackups
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {DescribeBackupsResponse} Success
		 */
		DescribeBackups(MaxResults: string, NextToken: string, requestBody: DescribeBackupsRequest): Observable<DescribeBackupsResponse> {
			return this.http.post<DescribeBackupsResponse>(this.baseUri + '#X-Amz-Target=BaldrApiService.DescribeBackups?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Gets information about AWS CloudHSM clusters.</p> <p>This is a paginated operation, which means that each response might contain only a subset of all the clusters. When the response contains only a subset of clusters, it includes a <code>NextToken</code> value. Use this value in a subsequent <code>DescribeClusters</code> request to get more clusters. When you receive a response with no <code>NextToken</code> (or an empty or null value), that means there are no more clusters to get.</p>
		 * Post #X-Amz-Target=BaldrApiService.DescribeClusters
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {DescribeClustersResponse} Success
		 */
		DescribeClusters(MaxResults: string, NextToken: string, requestBody: DescribeClustersRequest): Observable<DescribeClustersResponse> {
			return this.http.post<DescribeClustersResponse>(this.baseUri + '#X-Amz-Target=BaldrApiService.DescribeClusters?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Claims an AWS CloudHSM cluster by submitting the cluster certificate issued by your issuing certificate authority (CA) and the CA's root certificate. Before you can claim a cluster, you must sign the cluster's certificate signing request (CSR) with your issuing CA. To get the cluster's CSR, use <a>DescribeClusters</a>.
		 * Post #X-Amz-Target=BaldrApiService.InitializeCluster
		 * @return {InitializeClusterResponse} Success
		 */
		InitializeCluster(requestBody: InitializeClusterRequest): Observable<InitializeClusterResponse> {
			return this.http.post<InitializeClusterResponse>(this.baseUri + '#X-Amz-Target=BaldrApiService.InitializeCluster', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Gets a list of tags for the specified AWS CloudHSM cluster.</p> <p>This is a paginated operation, which means that each response might contain only a subset of all the tags. When the response contains only a subset of tags, it includes a <code>NextToken</code> value. Use this value in a subsequent <code>ListTags</code> request to get more tags. When you receive a response with no <code>NextToken</code> (or an empty or null value), that means there are no more tags to get.</p>
		 * Post #X-Amz-Target=BaldrApiService.ListTags
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListTagsResponse} Success
		 */
		ListTags(MaxResults: string, NextToken: string, requestBody: ListTagsRequest): Observable<ListTagsResponse> {
			return this.http.post<ListTagsResponse>(this.baseUri + '#X-Amz-Target=BaldrApiService.ListTags?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Restores a specified AWS CloudHSM backup that is in the <code>PENDING_DELETION</code> state. For mor information on deleting a backup, see <a>DeleteBackup</a>.
		 * Post #X-Amz-Target=BaldrApiService.RestoreBackup
		 * @return {RestoreBackupResponse} Success
		 */
		RestoreBackup(requestBody: RestoreBackupRequest): Observable<RestoreBackupResponse> {
			return this.http.post<RestoreBackupResponse>(this.baseUri + '#X-Amz-Target=BaldrApiService.RestoreBackup', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Adds or overwrites one or more tags for the specified AWS CloudHSM cluster.
		 * Post #X-Amz-Target=BaldrApiService.TagResource
		 * @return {TagResourceResponse} Success
		 */
		TagResource(requestBody: TagResourceRequest): Observable<TagResourceResponse> {
			return this.http.post<TagResourceResponse>(this.baseUri + '#X-Amz-Target=BaldrApiService.TagResource', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Removes the specified tag or tags from the specified AWS CloudHSM cluster.
		 * Post #X-Amz-Target=BaldrApiService.UntagResource
		 * @return {UntagResourceResponse} Success
		 */
		UntagResource(requestBody: UntagResourceRequest): Observable<UntagResourceResponse> {
			return this.http.post<UntagResourceResponse>(this.baseUri + '#X-Amz-Target=BaldrApiService.UntagResource', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

	export enum CopyBackupToRegionX_Amz_Target { BaldrApiService_CopyBackupToRegion = 0 }

	export enum CreateClusterX_Amz_Target { BaldrApiService_CreateCluster = 0 }

	export enum CreateHsmX_Amz_Target { BaldrApiService_CreateHsm = 0 }

	export enum DeleteBackupX_Amz_Target { BaldrApiService_DeleteBackup = 0 }

	export enum DeleteClusterX_Amz_Target { BaldrApiService_DeleteCluster = 0 }

	export enum DeleteHsmX_Amz_Target { BaldrApiService_DeleteHsm = 0 }

	export enum DescribeBackupsX_Amz_Target { BaldrApiService_DescribeBackups = 0 }

	export enum DescribeClustersX_Amz_Target { BaldrApiService_DescribeClusters = 0 }

	export enum InitializeClusterX_Amz_Target { BaldrApiService_InitializeCluster = 0 }

	export enum ListTagsX_Amz_Target { BaldrApiService_ListTags = 0 }

	export enum RestoreBackupX_Amz_Target { BaldrApiService_RestoreBackup = 0 }

	export enum TagResourceX_Amz_Target { BaldrApiService_TagResource = 0 }

	export enum UntagResourceX_Amz_Target { BaldrApiService_UntagResource = 0 }

}

