import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface CreateClusterOutput {

		/** Required */
		cluster: Cluster;
	}
	export interface CreateClusterOutputFormProperties {
	}
	export function CreateCreateClusterOutputFormGroup() {
		return new FormGroup<CreateClusterOutputFormProperties>({
		});

	}


	/** Returns information about a specific Elastic DocumentDB cluster. */
	export interface Cluster {

		/** Required */
		adminUserName: string;

		/** Required */
		authType: Auth;

		/** Required */
		clusterArn: string;

		/** Required */
		clusterEndpoint: string;

		/** Required */
		clusterName: string;

		/** Required */
		createTime: string;

		/** Required */
		kmsKeyId: string;

		/** Required */
		preferredMaintenanceWindow: string;

		/** Required */
		shardCapacity: number;

		/** Required */
		shardCount: number;

		/** Required */
		status: Status;

		/** Required */
		subnetIds: Array<string>;

		/** Required */
		vpcSecurityGroupIds: Array<string>;
	}

	/** Returns information about a specific Elastic DocumentDB cluster. */
	export interface ClusterFormProperties {

		/** Required */
		adminUserName: FormControl<string | null | undefined>,

		/** Required */
		authType: FormControl<Auth | null | undefined>,

		/** Required */
		clusterArn: FormControl<string | null | undefined>,

		/** Required */
		clusterEndpoint: FormControl<string | null | undefined>,

		/** Required */
		clusterName: FormControl<string | null | undefined>,

		/** Required */
		createTime: FormControl<string | null | undefined>,

		/** Required */
		kmsKeyId: FormControl<string | null | undefined>,

		/** Required */
		preferredMaintenanceWindow: FormControl<string | null | undefined>,

		/** Required */
		shardCapacity: FormControl<number | null | undefined>,

		/** Required */
		shardCount: FormControl<number | null | undefined>,

		/** Required */
		status: FormControl<Status | null | undefined>,
	}
	export function CreateClusterFormGroup() {
		return new FormGroup<ClusterFormProperties>({
			adminUserName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			authType: new FormControl<Auth | null | undefined>(undefined, [Validators.required]),
			clusterArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			clusterEndpoint: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			clusterName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			createTime: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			kmsKeyId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			preferredMaintenanceWindow: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			shardCapacity: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			shardCount: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<Status | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum Auth { PLAIN_TEXT = 'PLAIN_TEXT', SECRET_ARN = 'SECRET_ARN' }

	export enum Status { CREATING = 'CREATING', ACTIVE = 'ACTIVE', DELETING = 'DELETING', UPDATING = 'UPDATING', VPC_ENDPOINT_LIMIT_EXCEEDED = 'VPC_ENDPOINT_LIMIT_EXCEEDED', IP_ADDRESS_LIMIT_EXCEEDED = 'IP_ADDRESS_LIMIT_EXCEEDED', INVALID_SECURITY_GROUP_ID = 'INVALID_SECURITY_GROUP_ID', INVALID_SUBNET_ID = 'INVALID_SUBNET_ID', INACCESSIBLE_ENCRYPTION_CREDS = 'INACCESSIBLE_ENCRYPTION_CREDS' }

	export interface ThrottlingException {
	}
	export interface ThrottlingExceptionFormProperties {
	}
	export function CreateThrottlingExceptionFormGroup() {
		return new FormGroup<ThrottlingExceptionFormProperties>({
		});

	}

	export interface ValidationException {
	}
	export interface ValidationExceptionFormProperties {
	}
	export function CreateValidationExceptionFormGroup() {
		return new FormGroup<ValidationExceptionFormProperties>({
		});

	}

	export interface ServiceQuotaExceededException {
	}
	export interface ServiceQuotaExceededExceptionFormProperties {
	}
	export function CreateServiceQuotaExceededExceptionFormGroup() {
		return new FormGroup<ServiceQuotaExceededExceptionFormProperties>({
		});

	}

	export interface ConflictException {
	}
	export interface ConflictExceptionFormProperties {
	}
	export function CreateConflictExceptionFormGroup() {
		return new FormGroup<ConflictExceptionFormProperties>({
		});

	}

	export interface InternalServerException {
	}
	export interface InternalServerExceptionFormProperties {
	}
	export function CreateInternalServerExceptionFormGroup() {
		return new FormGroup<InternalServerExceptionFormProperties>({
		});

	}

	export interface AccessDeniedException {
	}
	export interface AccessDeniedExceptionFormProperties {
	}
	export function CreateAccessDeniedExceptionFormGroup() {
		return new FormGroup<AccessDeniedExceptionFormProperties>({
		});

	}

	export interface CreateClusterSnapshotOutput {

		/** Required */
		snapshot: ClusterSnapshot;
	}
	export interface CreateClusterSnapshotOutputFormProperties {
	}
	export function CreateCreateClusterSnapshotOutputFormGroup() {
		return new FormGroup<CreateClusterSnapshotOutputFormProperties>({
		});

	}


	/** Returns information about a specific Elastic DocumentDB snapshot. */
	export interface ClusterSnapshot {

		/** Required */
		adminUserName: string;

		/** Required */
		clusterArn: string;

		/** Required */
		clusterCreationTime: string;

		/** Required */
		kmsKeyId: string;

		/** Required */
		snapshotArn: string;

		/** Required */
		snapshotCreationTime: string;

		/** Required */
		snapshotName: string;

		/** Required */
		status: Status;

		/** Required */
		subnetIds: Array<string>;

		/** Required */
		vpcSecurityGroupIds: Array<string>;
	}

	/** Returns information about a specific Elastic DocumentDB snapshot. */
	export interface ClusterSnapshotFormProperties {

		/** Required */
		adminUserName: FormControl<string | null | undefined>,

		/** Required */
		clusterArn: FormControl<string | null | undefined>,

		/** Required */
		clusterCreationTime: FormControl<string | null | undefined>,

		/** Required */
		kmsKeyId: FormControl<string | null | undefined>,

		/** Required */
		snapshotArn: FormControl<string | null | undefined>,

		/** Required */
		snapshotCreationTime: FormControl<string | null | undefined>,

		/** Required */
		snapshotName: FormControl<string | null | undefined>,

		/** Required */
		status: FormControl<Status | null | undefined>,
	}
	export function CreateClusterSnapshotFormGroup() {
		return new FormGroup<ClusterSnapshotFormProperties>({
			adminUserName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			clusterArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			clusterCreationTime: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			kmsKeyId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			snapshotArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			snapshotCreationTime: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			snapshotName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<Status | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ResourceNotFoundException {
	}
	export interface ResourceNotFoundExceptionFormProperties {
	}
	export function CreateResourceNotFoundExceptionFormGroup() {
		return new FormGroup<ResourceNotFoundExceptionFormProperties>({
		});

	}

	export interface DeleteClusterOutput {

		/** Required */
		cluster: Cluster;
	}
	export interface DeleteClusterOutputFormProperties {
	}
	export function CreateDeleteClusterOutputFormGroup() {
		return new FormGroup<DeleteClusterOutputFormProperties>({
		});

	}

	export interface DeleteClusterSnapshotOutput {

		/** Required */
		snapshot: ClusterSnapshot;
	}
	export interface DeleteClusterSnapshotOutputFormProperties {
	}
	export function CreateDeleteClusterSnapshotOutputFormGroup() {
		return new FormGroup<DeleteClusterSnapshotOutputFormProperties>({
		});

	}

	export interface GetClusterOutput {

		/** Required */
		cluster: Cluster;
	}
	export interface GetClusterOutputFormProperties {
	}
	export function CreateGetClusterOutputFormGroup() {
		return new FormGroup<GetClusterOutputFormProperties>({
		});

	}

	export interface GetClusterSnapshotOutput {

		/** Required */
		snapshot: ClusterSnapshot;
	}
	export interface GetClusterSnapshotOutputFormProperties {
	}
	export function CreateGetClusterSnapshotOutputFormGroup() {
		return new FormGroup<GetClusterSnapshotOutputFormProperties>({
		});

	}

	export interface ListClusterSnapshotsOutput {
		nextToken?: string;
		snapshots?: Array<ClusterSnapshotInList>;
	}
	export interface ListClusterSnapshotsOutputFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListClusterSnapshotsOutputFormGroup() {
		return new FormGroup<ListClusterSnapshotsOutputFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A list of Elastic DocumentDB snapshots. */
	export interface ClusterSnapshotInList {

		/** Required */
		clusterArn: string;

		/** Required */
		snapshotArn: string;

		/** Required */
		snapshotCreationTime: string;

		/** Required */
		snapshotName: string;

		/** Required */
		status: Status;
	}

	/** A list of Elastic DocumentDB snapshots. */
	export interface ClusterSnapshotInListFormProperties {

		/** Required */
		clusterArn: FormControl<string | null | undefined>,

		/** Required */
		snapshotArn: FormControl<string | null | undefined>,

		/** Required */
		snapshotCreationTime: FormControl<string | null | undefined>,

		/** Required */
		snapshotName: FormControl<string | null | undefined>,

		/** Required */
		status: FormControl<Status | null | undefined>,
	}
	export function CreateClusterSnapshotInListFormGroup() {
		return new FormGroup<ClusterSnapshotInListFormProperties>({
			clusterArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			snapshotArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			snapshotCreationTime: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			snapshotName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<Status | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ListClustersOutput {
		clusters?: Array<ClusterInList>;
		nextToken?: string;
	}
	export interface ListClustersOutputFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListClustersOutputFormGroup() {
		return new FormGroup<ListClustersOutputFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A list of Elastic DocumentDB cluster. */
	export interface ClusterInList {

		/** Required */
		clusterArn: string;

		/** Required */
		clusterName: string;

		/** Required */
		status: Status;
	}

	/** A list of Elastic DocumentDB cluster. */
	export interface ClusterInListFormProperties {

		/** Required */
		clusterArn: FormControl<string | null | undefined>,

		/** Required */
		clusterName: FormControl<string | null | undefined>,

		/** Required */
		status: FormControl<Status | null | undefined>,
	}
	export function CreateClusterInListFormGroup() {
		return new FormGroup<ClusterInListFormProperties>({
			clusterArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			clusterName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<Status | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ListTagsForResourceResponse {
		tags?: TagMap;
	}
	export interface ListTagsForResourceResponseFormProperties {
	}
	export function CreateListTagsForResourceResponseFormGroup() {
		return new FormGroup<ListTagsForResourceResponseFormProperties>({
		});

	}

	export interface TagMap {
	}
	export interface TagMapFormProperties {
	}
	export function CreateTagMapFormGroup() {
		return new FormGroup<TagMapFormProperties>({
		});

	}

	export interface RestoreClusterFromSnapshotOutput {

		/** Required */
		cluster: Cluster;
	}
	export interface RestoreClusterFromSnapshotOutputFormProperties {
	}
	export function CreateRestoreClusterFromSnapshotOutputFormGroup() {
		return new FormGroup<RestoreClusterFromSnapshotOutputFormProperties>({
		});

	}

	export interface TagResourceResponse {
	}
	export interface TagResourceResponseFormProperties {
	}
	export function CreateTagResourceResponseFormGroup() {
		return new FormGroup<TagResourceResponseFormProperties>({
		});

	}

	export interface UntagResourceResponse {
	}
	export interface UntagResourceResponseFormProperties {
	}
	export function CreateUntagResourceResponseFormGroup() {
		return new FormGroup<UntagResourceResponseFormProperties>({
		});

	}

	export interface UpdateClusterOutput {

		/** Required */
		cluster: Cluster;
	}
	export interface UpdateClusterOutputFormProperties {
	}
	export function CreateUpdateClusterOutputFormGroup() {
		return new FormGroup<UpdateClusterOutputFormProperties>({
		});

	}

	export interface CreateClusterInput {

		/** Required */
		adminUserName: string;

		/** Required */
		adminUserPassword: string;

		/** Required */
		authType: Auth;
		clientToken?: string;

		/** Required */
		clusterName: string;
		kmsKeyId?: string;
		preferredMaintenanceWindow?: string;

		/** Required */
		shardCapacity: number;

		/** Required */
		shardCount: number;
		subnetIds?: Array<string>;
		tags?: TagMap;
		vpcSecurityGroupIds?: Array<string>;
	}
	export interface CreateClusterInputFormProperties {

		/** Required */
		adminUserName: FormControl<string | null | undefined>,

		/** Required */
		adminUserPassword: FormControl<string | null | undefined>,

		/** Required */
		authType: FormControl<Auth | null | undefined>,
		clientToken: FormControl<string | null | undefined>,

		/** Required */
		clusterName: FormControl<string | null | undefined>,
		kmsKeyId: FormControl<string | null | undefined>,
		preferredMaintenanceWindow: FormControl<string | null | undefined>,

		/** Required */
		shardCapacity: FormControl<number | null | undefined>,

		/** Required */
		shardCount: FormControl<number | null | undefined>,
	}
	export function CreateCreateClusterInputFormGroup() {
		return new FormGroup<CreateClusterInputFormProperties>({
			adminUserName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			adminUserPassword: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			authType: new FormControl<Auth | null | undefined>(undefined, [Validators.required]),
			clientToken: new FormControl<string | null | undefined>(undefined),
			clusterName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			kmsKeyId: new FormControl<string | null | undefined>(undefined),
			preferredMaintenanceWindow: new FormControl<string | null | undefined>(undefined),
			shardCapacity: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			shardCount: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateClusterSnapshotInput {

		/** Required */
		clusterArn: string;

		/** Required */
		snapshotName: string;
		tags?: TagMap;
	}
	export interface CreateClusterSnapshotInputFormProperties {

		/** Required */
		clusterArn: FormControl<string | null | undefined>,

		/** Required */
		snapshotName: FormControl<string | null | undefined>,
	}
	export function CreateCreateClusterSnapshotInputFormGroup() {
		return new FormGroup<CreateClusterSnapshotInputFormProperties>({
			clusterArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			snapshotName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeleteClusterInput {
	}
	export interface DeleteClusterInputFormProperties {
	}
	export function CreateDeleteClusterInputFormGroup() {
		return new FormGroup<DeleteClusterInputFormProperties>({
		});

	}

	export interface DeleteClusterSnapshotInput {
	}
	export interface DeleteClusterSnapshotInputFormProperties {
	}
	export function CreateDeleteClusterSnapshotInputFormGroup() {
		return new FormGroup<DeleteClusterSnapshotInputFormProperties>({
		});

	}

	export interface GetClusterInput {
	}
	export interface GetClusterInputFormProperties {
	}
	export function CreateGetClusterInputFormGroup() {
		return new FormGroup<GetClusterInputFormProperties>({
		});

	}

	export interface GetClusterSnapshotInput {
	}
	export interface GetClusterSnapshotInputFormProperties {
	}
	export function CreateGetClusterSnapshotInputFormGroup() {
		return new FormGroup<GetClusterSnapshotInputFormProperties>({
		});

	}

	export interface ListClusterSnapshotsInput {
	}
	export interface ListClusterSnapshotsInputFormProperties {
	}
	export function CreateListClusterSnapshotsInputFormGroup() {
		return new FormGroup<ListClusterSnapshotsInputFormProperties>({
		});

	}

	export interface ListClustersInput {
	}
	export interface ListClustersInputFormProperties {
	}
	export function CreateListClustersInputFormGroup() {
		return new FormGroup<ListClustersInputFormProperties>({
		});

	}

	export interface ListTagsForResourceRequest {
	}
	export interface ListTagsForResourceRequestFormProperties {
	}
	export function CreateListTagsForResourceRequestFormGroup() {
		return new FormGroup<ListTagsForResourceRequestFormProperties>({
		});

	}

	export interface RestoreClusterFromSnapshotInput {

		/** Required */
		clusterName: string;
		kmsKeyId?: string;
		subnetIds?: Array<string>;
		tags?: TagMap;
		vpcSecurityGroupIds?: Array<string>;
	}
	export interface RestoreClusterFromSnapshotInputFormProperties {

		/** Required */
		clusterName: FormControl<string | null | undefined>,
		kmsKeyId: FormControl<string | null | undefined>,
	}
	export function CreateRestoreClusterFromSnapshotInputFormGroup() {
		return new FormGroup<RestoreClusterFromSnapshotInputFormProperties>({
			clusterName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			kmsKeyId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface TagResourceRequest {

		/** Required */
		tags: TagMap;
	}
	export interface TagResourceRequestFormProperties {
	}
	export function CreateTagResourceRequestFormGroup() {
		return new FormGroup<TagResourceRequestFormProperties>({
		});

	}

	export interface UntagResourceRequest {
	}
	export interface UntagResourceRequestFormProperties {
	}
	export function CreateUntagResourceRequestFormGroup() {
		return new FormGroup<UntagResourceRequestFormProperties>({
		});

	}

	export interface UpdateClusterInput {
		adminUserPassword?: string;
		authType?: Auth;
		clientToken?: string;
		preferredMaintenanceWindow?: string;
		shardCapacity?: number | null;
		shardCount?: number | null;
		subnetIds?: Array<string>;
		vpcSecurityGroupIds?: Array<string>;
	}
	export interface UpdateClusterInputFormProperties {
		adminUserPassword: FormControl<string | null | undefined>,
		authType: FormControl<Auth | null | undefined>,
		clientToken: FormControl<string | null | undefined>,
		preferredMaintenanceWindow: FormControl<string | null | undefined>,
		shardCapacity: FormControl<number | null | undefined>,
		shardCount: FormControl<number | null | undefined>,
	}
	export function CreateUpdateClusterInputFormGroup() {
		return new FormGroup<UpdateClusterInputFormProperties>({
			adminUserPassword: new FormControl<string | null | undefined>(undefined),
			authType: new FormControl<Auth | null | undefined>(undefined),
			clientToken: new FormControl<string | null | undefined>(undefined),
			preferredMaintenanceWindow: new FormControl<string | null | undefined>(undefined),
			shardCapacity: new FormControl<number | null | undefined>(undefined),
			shardCount: new FormControl<number | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Creates a new Elastic DocumentDB cluster and returns its Cluster structure.
		 * Post cluster
		 * @return {CreateClusterOutput} Success
		 */
		CreateCluster(requestBody: CreateClusterPostBody): Observable<CreateClusterOutput> {
			return this.http.post<CreateClusterOutput>(this.baseUri + 'cluster', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Creates a snapshot of a cluster.
		 * Post cluster-snapshot
		 * @return {CreateClusterSnapshotOutput} Success
		 */
		CreateClusterSnapshot(requestBody: CreateClusterSnapshotPostBody): Observable<CreateClusterSnapshotOutput> {
			return this.http.post<CreateClusterSnapshotOutput>(this.baseUri + 'cluster-snapshot', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Delete a Elastic DocumentDB cluster.
		 * Delete cluster/{clusterArn}
		 * @param {string} clusterArn The arn of the Elastic DocumentDB cluster that is to be deleted.
		 * @return {DeleteClusterOutput} Success
		 */
		DeleteCluster(clusterArn: string): Observable<DeleteClusterOutput> {
			return this.http.delete<DeleteClusterOutput>(this.baseUri + 'cluster/' + (clusterArn == null ? '' : encodeURIComponent(clusterArn)), {});
		}

		/**
		 * Returns information about a specific Elastic DocumentDB cluster.
		 * Get cluster/{clusterArn}
		 * @param {string} clusterArn The arn of the Elastic DocumentDB cluster.
		 * @return {GetClusterOutput} Success
		 */
		GetCluster(clusterArn: string): Observable<GetClusterOutput> {
			return this.http.get<GetClusterOutput>(this.baseUri + 'cluster/' + (clusterArn == null ? '' : encodeURIComponent(clusterArn)), {});
		}

		/**
		 * Modifies a Elastic DocumentDB cluster. This includes updating admin-username/password, upgrading API version setting up a backup window and maintenance window
		 * Put cluster/{clusterArn}
		 * @param {string} clusterArn The arn of the Elastic DocumentDB cluster.
		 * @return {UpdateClusterOutput} Success
		 */
		UpdateCluster(clusterArn: string, requestBody: UpdateClusterPutBody): Observable<UpdateClusterOutput> {
			return this.http.put<UpdateClusterOutput>(this.baseUri + 'cluster/' + (clusterArn == null ? '' : encodeURIComponent(clusterArn)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Delete a Elastic DocumentDB snapshot.
		 * Delete cluster-snapshot/{snapshotArn}
		 * @param {string} snapshotArn The arn of the Elastic DocumentDB snapshot that is to be deleted.
		 * @return {DeleteClusterSnapshotOutput} Success
		 */
		DeleteClusterSnapshot(snapshotArn: string): Observable<DeleteClusterSnapshotOutput> {
			return this.http.delete<DeleteClusterSnapshotOutput>(this.baseUri + 'cluster-snapshot/' + (snapshotArn == null ? '' : encodeURIComponent(snapshotArn)), {});
		}

		/**
		 * Returns information about a specific Elastic DocumentDB snapshot
		 * Get cluster-snapshot/{snapshotArn}
		 * @param {string} snapshotArn The arn of the Elastic DocumentDB snapshot.
		 * @return {GetClusterSnapshotOutput} Success
		 */
		GetClusterSnapshot(snapshotArn: string): Observable<GetClusterSnapshotOutput> {
			return this.http.get<GetClusterSnapshotOutput>(this.baseUri + 'cluster-snapshot/' + (snapshotArn == null ? '' : encodeURIComponent(snapshotArn)), {});
		}

		/**
		 * Returns information about Elastic DocumentDB snapshots for a specified cluster.
		 * Get cluster-snapshots
		 * @param {string} clusterArn The arn of the Elastic DocumentDB cluster.
		 * @param {number} maxResults The maximum number of entries to recieve in the response.
		 * @param {string} nextToken The nextToken which is used the get the next page of data.
		 * @return {ListClusterSnapshotsOutput} Success
		 */
		ListClusterSnapshots(clusterArn: string | null | undefined, maxResults: number | null | undefined, nextToken: string | null | undefined): Observable<ListClusterSnapshotsOutput> {
			return this.http.get<ListClusterSnapshotsOutput>(this.baseUri + 'cluster-snapshots?clusterArn=' + (clusterArn == null ? '' : encodeURIComponent(clusterArn)) + '&maxResults=' + maxResults + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), {});
		}

		/**
		 * Returns information about provisioned Elastic DocumentDB clusters.
		 * Get clusters
		 * @param {number} maxResults The maximum number of entries to recieve in the response.
		 * @param {string} nextToken The nextToken which is used the get the next page of data.
		 * @return {ListClustersOutput} Success
		 */
		ListClusters(maxResults: number | null | undefined, nextToken: string | null | undefined): Observable<ListClustersOutput> {
			return this.http.get<ListClustersOutput>(this.baseUri + 'clusters?maxResults=' + maxResults + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), {});
		}

		/**
		 * Lists all tags on a Elastic DocumentDB resource
		 * Get tags/{resourceArn}
		 * @param {string} resourceArn The arn of the Elastic DocumentDB resource.
		 * @return {ListTagsForResourceResponse} Success
		 */
		ListTagsForResource(resourceArn: string): Observable<ListTagsForResourceResponse> {
			return this.http.get<ListTagsForResourceResponse>(this.baseUri + 'tags/' + (resourceArn == null ? '' : encodeURIComponent(resourceArn)), {});
		}

		/**
		 * Adds metadata tags to a Elastic DocumentDB resource
		 * Post tags/{resourceArn}
		 * @param {string} resourceArn The arn of the Elastic DocumentDB resource.
		 * @return {TagResourceResponse} Success
		 */
		TagResource(resourceArn: string, requestBody: TagResourcePostBody): Observable<TagResourceResponse> {
			return this.http.post<TagResourceResponse>(this.baseUri + 'tags/' + (resourceArn == null ? '' : encodeURIComponent(resourceArn)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Restores a Elastic DocumentDB cluster from a snapshot.
		 * Post cluster-snapshot/{snapshotArn}/restore
		 * @param {string} snapshotArn The arn of the Elastic DocumentDB snapshot.
		 * @return {RestoreClusterFromSnapshotOutput} Success
		 */
		RestoreClusterFromSnapshot(snapshotArn: string, requestBody: RestoreClusterFromSnapshotPostBody): Observable<RestoreClusterFromSnapshotOutput> {
			return this.http.post<RestoreClusterFromSnapshotOutput>(this.baseUri + 'cluster-snapshot/' + (snapshotArn == null ? '' : encodeURIComponent(snapshotArn)) + '/restore', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Removes metadata tags to a Elastic DocumentDB resource
		 * Delete tags/{resourceArn}#tagKeys
		 * @param {string} resourceArn The arn of the Elastic DocumentDB resource.
		 * @param {Array<string>} tagKeys The tag keys to be removed from the Elastic DocumentDB resource.
		 * @return {UntagResourceResponse} Success
		 */
		UntagResource(resourceArn: string, tagKeys: Array<string>): Observable<UntagResourceResponse> {
			return this.http.delete<UntagResourceResponse>(this.baseUri + 'tags/' + (resourceArn == null ? '' : encodeURIComponent(resourceArn)) + '#tagKeys&' + tagKeys.map(z => `tagKeys=${encodeURIComponent(z)}`).join('&'), {});
		}
	}

	export interface CreateClusterPostBody {

		/**
		 * <p>The name of the Elastic DocumentDB cluster administrator.</p> <p> <i>Constraints</i>:</p> <ul> <li> <p>Must be from 1 to 63 letters or numbers.</p> </li> <li> <p>The first character must be a letter.</p> </li> <li> <p>Cannot be a reserved word.</p> </li> </ul>
		 * Required
		 */
		adminUserName: string;

		/**
		 * <p>The password for the Elastic DocumentDB cluster administrator and can contain any printable ASCII characters.</p> <p> <i>Constraints</i>:</p> <ul> <li> <p>Must contain from 8 to 100 characters.</p> </li> <li> <p>Cannot contain a forward slash (/), double quote ("), or the "at" symbol (@).</p> </li> </ul>
		 * Required
		 */
		adminUserPassword: string;

		/**
		 * The authentication type for the Elastic DocumentDB cluster.
		 * Required
		 */
		authType: Auth;

		/** The client token for the Elastic DocumentDB cluster. */
		clientToken?: string | null;

		/**
		 * <p>The name of the new Elastic DocumentDB cluster. This parameter is stored as a lowercase string.</p> <p> <i>Constraints</i>:</p> <ul> <li> <p>Must contain from 1 to 63 letters, numbers, or hyphens.</p> </li> <li> <p>The first character must be a letter.</p> </li> <li> <p>Cannot end with a hyphen or contain two consecutive hyphens.</p> </li> </ul> <p> <i>Example</i>: <code>my-cluster</code> </p>
		 * Required
		 */
		clusterName: string;

		/** <p>The KMS key identifier to use to encrypt the new Elastic DocumentDB cluster.</p> <p>The KMS key identifier is the Amazon Resource Name (ARN) for the KMS encryption key. If you are creating a cluster using the same Amazon account that owns this KMS encryption key, you can use the KMS key alias instead of the ARN as the KMS encryption key.</p> <p>If an encryption key is not specified, Elastic DocumentDB uses the default encryption key that KMS creates for your account. Your account has a different default encryption key for each Amazon Region.</p> */
		kmsKeyId?: string | null;

		/** <p>The weekly time range during which system maintenance can occur, in Universal Coordinated Time (UTC).</p> <p> <i>Format</i>: <code>ddd:hh24:mi-ddd:hh24:mi</code> </p> <p> <i>Default</i>: a 30-minute window selected at random from an 8-hour block of time for each Amazon Web Services Region, occurring on a random day of the week.</p> <p> <i>Valid days</i>: Mon, Tue, Wed, Thu, Fri, Sat, Sun</p> <p> <i>Constraints</i>: Minimum 30-minute window.</p> */
		preferredMaintenanceWindow?: string | null;

		/**
		 * The capacity of each shard in the new Elastic DocumentDB cluster.
		 * Required
		 */
		shardCapacity: number;

		/**
		 * The number of shards to create in the new Elastic DocumentDB cluster.
		 * Required
		 */
		shardCount: number;

		/** The Amazon EC2 subnet IDs for the new Elastic DocumentDB cluster. */
		subnetIds?: Array<string>;

		/** The tags to be assigned to the new Elastic DocumentDB cluster. */
		tags?: {[id: string]: string };

		/** A list of EC2 VPC security groups to associate with the new Elastic DocumentDB cluster. */
		vpcSecurityGroupIds?: Array<string>;
	}
	export interface CreateClusterPostBodyFormProperties {

		/**
		 * <p>The name of the Elastic DocumentDB cluster administrator.</p> <p> <i>Constraints</i>:</p> <ul> <li> <p>Must be from 1 to 63 letters or numbers.</p> </li> <li> <p>The first character must be a letter.</p> </li> <li> <p>Cannot be a reserved word.</p> </li> </ul>
		 * Required
		 */
		adminUserName: FormControl<string | null | undefined>,

		/**
		 * <p>The password for the Elastic DocumentDB cluster administrator and can contain any printable ASCII characters.</p> <p> <i>Constraints</i>:</p> <ul> <li> <p>Must contain from 8 to 100 characters.</p> </li> <li> <p>Cannot contain a forward slash (/), double quote ("), or the "at" symbol (@).</p> </li> </ul>
		 * Required
		 */
		adminUserPassword: FormControl<string | null | undefined>,

		/**
		 * The authentication type for the Elastic DocumentDB cluster.
		 * Required
		 */
		authType: FormControl<Auth | null | undefined>,

		/** The client token for the Elastic DocumentDB cluster. */
		clientToken: FormControl<string | null | undefined>,

		/**
		 * <p>The name of the new Elastic DocumentDB cluster. This parameter is stored as a lowercase string.</p> <p> <i>Constraints</i>:</p> <ul> <li> <p>Must contain from 1 to 63 letters, numbers, or hyphens.</p> </li> <li> <p>The first character must be a letter.</p> </li> <li> <p>Cannot end with a hyphen or contain two consecutive hyphens.</p> </li> </ul> <p> <i>Example</i>: <code>my-cluster</code> </p>
		 * Required
		 */
		clusterName: FormControl<string | null | undefined>,

		/** <p>The KMS key identifier to use to encrypt the new Elastic DocumentDB cluster.</p> <p>The KMS key identifier is the Amazon Resource Name (ARN) for the KMS encryption key. If you are creating a cluster using the same Amazon account that owns this KMS encryption key, you can use the KMS key alias instead of the ARN as the KMS encryption key.</p> <p>If an encryption key is not specified, Elastic DocumentDB uses the default encryption key that KMS creates for your account. Your account has a different default encryption key for each Amazon Region.</p> */
		kmsKeyId: FormControl<string | null | undefined>,

		/** <p>The weekly time range during which system maintenance can occur, in Universal Coordinated Time (UTC).</p> <p> <i>Format</i>: <code>ddd:hh24:mi-ddd:hh24:mi</code> </p> <p> <i>Default</i>: a 30-minute window selected at random from an 8-hour block of time for each Amazon Web Services Region, occurring on a random day of the week.</p> <p> <i>Valid days</i>: Mon, Tue, Wed, Thu, Fri, Sat, Sun</p> <p> <i>Constraints</i>: Minimum 30-minute window.</p> */
		preferredMaintenanceWindow: FormControl<string | null | undefined>,

		/**
		 * The capacity of each shard in the new Elastic DocumentDB cluster.
		 * Required
		 */
		shardCapacity: FormControl<number | null | undefined>,

		/**
		 * The number of shards to create in the new Elastic DocumentDB cluster.
		 * Required
		 */
		shardCount: FormControl<number | null | undefined>,

		/** The tags to be assigned to the new Elastic DocumentDB cluster. */
		tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateCreateClusterPostBodyFormGroup() {
		return new FormGroup<CreateClusterPostBodyFormProperties>({
			adminUserName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			adminUserPassword: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			authType: new FormControl<Auth | null | undefined>(undefined, [Validators.required]),
			clientToken: new FormControl<string | null | undefined>(undefined),
			clusterName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			kmsKeyId: new FormControl<string | null | undefined>(undefined),
			preferredMaintenanceWindow: new FormControl<string | null | undefined>(undefined),
			shardCapacity: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			shardCount: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}

	export interface CreateClusterSnapshotPostBody {

		/**
		 * The arn of the Elastic DocumentDB cluster that the snapshot will be taken from.
		 * Required
		 */
		clusterArn: string;

		/**
		 * The name of the Elastic DocumentDB snapshot.
		 * Required
		 * Max length: 63
		 * Min length: 1
		 */
		snapshotName: string;

		/** The tags to be assigned to the new Elastic DocumentDB snapshot. */
		tags?: {[id: string]: string };
	}
	export interface CreateClusterSnapshotPostBodyFormProperties {

		/**
		 * The arn of the Elastic DocumentDB cluster that the snapshot will be taken from.
		 * Required
		 */
		clusterArn: FormControl<string | null | undefined>,

		/**
		 * The name of the Elastic DocumentDB snapshot.
		 * Required
		 * Max length: 63
		 * Min length: 1
		 */
		snapshotName: FormControl<string | null | undefined>,

		/** The tags to be assigned to the new Elastic DocumentDB snapshot. */
		tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateCreateClusterSnapshotPostBodyFormGroup() {
		return new FormGroup<CreateClusterSnapshotPostBodyFormProperties>({
			clusterArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			snapshotName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(63)]),
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}

	export interface UpdateClusterPutBody {

		/** <p>The password for the Elastic DocumentDB cluster administrator. This password can contain any printable ASCII character except forward slash (/), double quote ("), or the "at" symbol (@).</p> <p> <i>Constraints</i>: Must contain from 8 to 100 characters.</p> */
		adminUserPassword?: string | null;

		/** The authentication type for the Elastic DocumentDB cluster. */
		authType?: Auth | null;

		/** The client token for the Elastic DocumentDB cluster. */
		clientToken?: string | null;

		/** <p>The weekly time range during which system maintenance can occur, in Universal Coordinated Time (UTC).</p> <p> <i>Format</i>: <code>ddd:hh24:mi-ddd:hh24:mi</code> </p> <p> <i>Default</i>: a 30-minute window selected at random from an 8-hour block of time for each Amazon Web Services Region, occurring on a random day of the week.</p> <p> <i>Valid days</i>: Mon, Tue, Wed, Thu, Fri, Sat, Sun</p> <p> <i>Constraints</i>: Minimum 30-minute window.</p> */
		preferredMaintenanceWindow?: string | null;

		/** The capacity of each shard in the Elastic DocumentDB cluster. */
		shardCapacity?: number | null;

		/** The number of shards to create in the Elastic DocumentDB cluster. */
		shardCount?: number | null;

		/** The number of shards to create in the Elastic DocumentDB cluster. */
		subnetIds?: Array<string>;

		/** A list of EC2 VPC security groups to associate with the new Elastic DocumentDB cluster. */
		vpcSecurityGroupIds?: Array<string>;
	}
	export interface UpdateClusterPutBodyFormProperties {

		/** <p>The password for the Elastic DocumentDB cluster administrator. This password can contain any printable ASCII character except forward slash (/), double quote ("), or the "at" symbol (@).</p> <p> <i>Constraints</i>: Must contain from 8 to 100 characters.</p> */
		adminUserPassword: FormControl<string | null | undefined>,

		/** The authentication type for the Elastic DocumentDB cluster. */
		authType: FormControl<Auth | null | undefined>,

		/** The client token for the Elastic DocumentDB cluster. */
		clientToken: FormControl<string | null | undefined>,

		/** <p>The weekly time range during which system maintenance can occur, in Universal Coordinated Time (UTC).</p> <p> <i>Format</i>: <code>ddd:hh24:mi-ddd:hh24:mi</code> </p> <p> <i>Default</i>: a 30-minute window selected at random from an 8-hour block of time for each Amazon Web Services Region, occurring on a random day of the week.</p> <p> <i>Valid days</i>: Mon, Tue, Wed, Thu, Fri, Sat, Sun</p> <p> <i>Constraints</i>: Minimum 30-minute window.</p> */
		preferredMaintenanceWindow: FormControl<string | null | undefined>,

		/** The capacity of each shard in the Elastic DocumentDB cluster. */
		shardCapacity: FormControl<number | null | undefined>,

		/** The number of shards to create in the Elastic DocumentDB cluster. */
		shardCount: FormControl<number | null | undefined>,
	}
	export function CreateUpdateClusterPutBodyFormGroup() {
		return new FormGroup<UpdateClusterPutBodyFormProperties>({
			adminUserPassword: new FormControl<string | null | undefined>(undefined),
			authType: new FormControl<Auth | null | undefined>(undefined),
			clientToken: new FormControl<string | null | undefined>(undefined),
			preferredMaintenanceWindow: new FormControl<string | null | undefined>(undefined),
			shardCapacity: new FormControl<number | null | undefined>(undefined),
			shardCount: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface TagResourcePostBody {

		/**
		 * The tags to be assigned to the Elastic DocumentDB resource.
		 * Required
		 */
		tags: {[id: string]: string };
	}
	export interface TagResourcePostBodyFormProperties {

		/**
		 * The tags to be assigned to the Elastic DocumentDB resource.
		 * Required
		 */
		tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateTagResourcePostBodyFormGroup() {
		return new FormGroup<TagResourcePostBodyFormProperties>({
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface RestoreClusterFromSnapshotPostBody {

		/**
		 * The name of the Elastic DocumentDB cluster.
		 * Required
		 */
		clusterName: string;

		/** <p>The KMS key identifier to use to encrypt the new Elastic DocumentDB cluster.</p> <p>The KMS key identifier is the Amazon Resource Name (ARN) for the KMS encryption key. If you are creating a cluster using the same Amazon account that owns this KMS encryption key, you can use the KMS key alias instead of the ARN as the KMS encryption key.</p> <p>If an encryption key is not specified here, Elastic DocumentDB uses the default encryption key that KMS creates for your account. Your account has a different default encryption key for each Amazon Region.</p> */
		kmsKeyId?: string | null;

		/** The Amazon EC2 subnet IDs for the Elastic DocumentDB cluster. */
		subnetIds?: Array<string>;

		/** A list of the tag names to be assigned to the restored DB cluster, in the form of an array of key-value pairs in which the key is the tag name and the value is the key value. */
		tags?: {[id: string]: string };

		/** A list of EC2 VPC security groups to associate with the Elastic DocumentDB cluster. */
		vpcSecurityGroupIds?: Array<string>;
	}
	export interface RestoreClusterFromSnapshotPostBodyFormProperties {

		/**
		 * The name of the Elastic DocumentDB cluster.
		 * Required
		 */
		clusterName: FormControl<string | null | undefined>,

		/** <p>The KMS key identifier to use to encrypt the new Elastic DocumentDB cluster.</p> <p>The KMS key identifier is the Amazon Resource Name (ARN) for the KMS encryption key. If you are creating a cluster using the same Amazon account that owns this KMS encryption key, you can use the KMS key alias instead of the ARN as the KMS encryption key.</p> <p>If an encryption key is not specified here, Elastic DocumentDB uses the default encryption key that KMS creates for your account. Your account has a different default encryption key for each Amazon Region.</p> */
		kmsKeyId: FormControl<string | null | undefined>,

		/** A list of the tag names to be assigned to the restored DB cluster, in the form of an array of key-value pairs in which the key is the tag name and the value is the key value. */
		tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateRestoreClusterFromSnapshotPostBodyFormGroup() {
		return new FormGroup<RestoreClusterFromSnapshotPostBodyFormProperties>({
			clusterName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			kmsKeyId: new FormControl<string | null | undefined>(undefined),
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}

}

