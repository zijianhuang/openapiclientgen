import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface CopyBackupToRegionResponse {
		DestinationBackup?: DestinationBackup;
	}
	export interface CopyBackupToRegionResponseFormProperties {
	}
	export function CreateCopyBackupToRegionResponseFormGroup() {
		return new FormGroup<CopyBackupToRegionResponseFormProperties>({
		});

	}


	/** Contains information about the backup that will be copied and created by the <a>CopyBackupToRegion</a> operation. */
	export interface DestinationBackup {
		CreateTimestamp?: Date;
		SourceRegion?: string;
		SourceBackup?: string;
		SourceCluster?: string;
	}

	/** Contains information about the backup that will be copied and created by the <a>CopyBackupToRegion</a> operation. */
	export interface DestinationBackupFormProperties {
		CreateTimestamp: FormControl<Date | null | undefined>,
		SourceRegion: FormControl<string | null | undefined>,
		SourceBackup: FormControl<string | null | undefined>,
		SourceCluster: FormControl<string | null | undefined>,
	}
	export function CreateDestinationBackupFormGroup() {
		return new FormGroup<DestinationBackupFormProperties>({
			CreateTimestamp: new FormControl<Date | null | undefined>(undefined),
			SourceRegion: new FormControl<string | null | undefined>(undefined),
			SourceBackup: new FormControl<string | null | undefined>(undefined),
			SourceCluster: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CopyBackupToRegionRequest {

		/** Required */
		DestinationRegion: string;

		/** Required */
		BackupId: string;
		TagList?: Array<Tag>;
	}
	export interface CopyBackupToRegionRequestFormProperties {

		/** Required */
		DestinationRegion: FormControl<string | null | undefined>,

		/** Required */
		BackupId: FormControl<string | null | undefined>,
	}
	export function CreateCopyBackupToRegionRequestFormGroup() {
		return new FormGroup<CopyBackupToRegionRequestFormProperties>({
			DestinationRegion: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			BackupId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Contains a tag. A tag is a key-value pair. */
	export interface Tag {

		/** Required */
		Key: string;

		/** Required */
		Value: string;
	}

	/** Contains a tag. A tag is a key-value pair. */
	export interface TagFormProperties {

		/** Required */
		Key: FormControl<string | null | undefined>,

		/** Required */
		Value: FormControl<string | null | undefined>,
	}
	export function CreateTagFormGroup() {
		return new FormGroup<TagFormProperties>({
			Key: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Value: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CloudHsmAccessDeniedException {
	}
	export interface CloudHsmAccessDeniedExceptionFormProperties {
	}
	export function CreateCloudHsmAccessDeniedExceptionFormGroup() {
		return new FormGroup<CloudHsmAccessDeniedExceptionFormProperties>({
		});

	}

	export interface CloudHsmInternalFailureException {
	}
	export interface CloudHsmInternalFailureExceptionFormProperties {
	}
	export function CreateCloudHsmInternalFailureExceptionFormGroup() {
		return new FormGroup<CloudHsmInternalFailureExceptionFormProperties>({
		});

	}

	export interface CloudHsmInvalidRequestException {
	}
	export interface CloudHsmInvalidRequestExceptionFormProperties {
	}
	export function CreateCloudHsmInvalidRequestExceptionFormGroup() {
		return new FormGroup<CloudHsmInvalidRequestExceptionFormProperties>({
		});

	}

	export interface CloudHsmResourceNotFoundException {
	}
	export interface CloudHsmResourceNotFoundExceptionFormProperties {
	}
	export function CreateCloudHsmResourceNotFoundExceptionFormGroup() {
		return new FormGroup<CloudHsmResourceNotFoundExceptionFormProperties>({
		});

	}

	export interface CloudHsmServiceException {
	}
	export interface CloudHsmServiceExceptionFormProperties {
	}
	export function CreateCloudHsmServiceExceptionFormGroup() {
		return new FormGroup<CloudHsmServiceExceptionFormProperties>({
		});

	}

	export interface CloudHsmTagException {
	}
	export interface CloudHsmTagExceptionFormProperties {
	}
	export function CreateCloudHsmTagExceptionFormGroup() {
		return new FormGroup<CloudHsmTagExceptionFormProperties>({
		});

	}

	export interface CreateClusterResponse {
		Cluster?: Cluster;
	}
	export interface CreateClusterResponseFormProperties {
	}
	export function CreateCreateClusterResponseFormGroup() {
		return new FormGroup<CreateClusterResponseFormProperties>({
		});

	}


	/** Contains information about an AWS CloudHSM cluster. */
	export interface Cluster {
		BackupPolicy?: BackupPolicy;
		BackupRetentionPolicy?: BackupRetentionPolicy;
		ClusterId?: string;
		CreateTimestamp?: Date;
		Hsms?: Array<Hsm>;
		HsmType?: string;
		PreCoPassword?: string;
		SecurityGroup?: string;
		SourceBackupId?: string;
		State?: ClusterState;
		StateMessage?: string;
		SubnetMapping?: ExternalSubnetMapping;
		VpcId?: string;
		Certificates?: Certificates;
		TagList?: Array<Tag>;
	}

	/** Contains information about an AWS CloudHSM cluster. */
	export interface ClusterFormProperties {
		BackupPolicy: FormControl<BackupPolicy | null | undefined>,
		ClusterId: FormControl<string | null | undefined>,
		CreateTimestamp: FormControl<Date | null | undefined>,
		HsmType: FormControl<string | null | undefined>,
		PreCoPassword: FormControl<string | null | undefined>,
		SecurityGroup: FormControl<string | null | undefined>,
		SourceBackupId: FormControl<string | null | undefined>,
		State: FormControl<ClusterState | null | undefined>,
		StateMessage: FormControl<string | null | undefined>,
		VpcId: FormControl<string | null | undefined>,
	}
	export function CreateClusterFormGroup() {
		return new FormGroup<ClusterFormProperties>({
			BackupPolicy: new FormControl<BackupPolicy | null | undefined>(undefined),
			ClusterId: new FormControl<string | null | undefined>(undefined),
			CreateTimestamp: new FormControl<Date | null | undefined>(undefined),
			HsmType: new FormControl<string | null | undefined>(undefined),
			PreCoPassword: new FormControl<string | null | undefined>(undefined),
			SecurityGroup: new FormControl<string | null | undefined>(undefined),
			SourceBackupId: new FormControl<string | null | undefined>(undefined),
			State: new FormControl<ClusterState | null | undefined>(undefined),
			StateMessage: new FormControl<string | null | undefined>(undefined),
			VpcId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum BackupPolicy { DEFAULT = 0 }


	/** A policy that defines the number of days to retain backups. */
	export interface BackupRetentionPolicy {
		Type?: BackupRetentionType;
		Value?: string;
	}

	/** A policy that defines the number of days to retain backups. */
	export interface BackupRetentionPolicyFormProperties {
		Type: FormControl<BackupRetentionType | null | undefined>,
		Value: FormControl<string | null | undefined>,
	}
	export function CreateBackupRetentionPolicyFormGroup() {
		return new FormGroup<BackupRetentionPolicyFormProperties>({
			Type: new FormControl<BackupRetentionType | null | undefined>(undefined),
			Value: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum BackupRetentionType { DAYS = 0 }


	/** Contains information about a hardware security module (HSM) in an AWS CloudHSM cluster. */
	export interface Hsm {
		AvailabilityZone?: string;
		ClusterId?: string;
		SubnetId?: string;
		EniId?: string;
		EniIp?: string;

		/** Required */
		HsmId: string;
		State?: HsmState;
		StateMessage?: string;
	}

	/** Contains information about a hardware security module (HSM) in an AWS CloudHSM cluster. */
	export interface HsmFormProperties {
		AvailabilityZone: FormControl<string | null | undefined>,
		ClusterId: FormControl<string | null | undefined>,
		SubnetId: FormControl<string | null | undefined>,
		EniId: FormControl<string | null | undefined>,
		EniIp: FormControl<string | null | undefined>,

		/** Required */
		HsmId: FormControl<string | null | undefined>,
		State: FormControl<HsmState | null | undefined>,
		StateMessage: FormControl<string | null | undefined>,
	}
	export function CreateHsmFormGroup() {
		return new FormGroup<HsmFormProperties>({
			AvailabilityZone: new FormControl<string | null | undefined>(undefined),
			ClusterId: new FormControl<string | null | undefined>(undefined),
			SubnetId: new FormControl<string | null | undefined>(undefined),
			EniId: new FormControl<string | null | undefined>(undefined),
			EniIp: new FormControl<string | null | undefined>(undefined),
			HsmId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			State: new FormControl<HsmState | null | undefined>(undefined),
			StateMessage: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum HsmState { CREATE_IN_PROGRESS = 0, ACTIVE = 1, DEGRADED = 2, DELETE_IN_PROGRESS = 3, DELETED = 4 }

	export enum ClusterState { CREATE_IN_PROGRESS = 0, UNINITIALIZED = 1, INITIALIZE_IN_PROGRESS = 2, INITIALIZED = 3, ACTIVE = 4, UPDATE_IN_PROGRESS = 5, DELETE_IN_PROGRESS = 6, DELETED = 7, DEGRADED = 8 }

	export interface ExternalSubnetMapping {
	}
	export interface ExternalSubnetMappingFormProperties {
	}
	export function CreateExternalSubnetMappingFormGroup() {
		return new FormGroup<ExternalSubnetMappingFormProperties>({
		});

	}


	/** Contains one or more certificates or a certificate signing request (CSR). */
	export interface Certificates {
		ClusterCsr?: string;
		HsmCertificate?: string;
		AwsHardwareCertificate?: string;
		ManufacturerHardwareCertificate?: string;
		ClusterCertificate?: string;
	}

	/** Contains one or more certificates or a certificate signing request (CSR). */
	export interface CertificatesFormProperties {
		ClusterCsr: FormControl<string | null | undefined>,
		HsmCertificate: FormControl<string | null | undefined>,
		AwsHardwareCertificate: FormControl<string | null | undefined>,
		ManufacturerHardwareCertificate: FormControl<string | null | undefined>,
		ClusterCertificate: FormControl<string | null | undefined>,
	}
	export function CreateCertificatesFormGroup() {
		return new FormGroup<CertificatesFormProperties>({
			ClusterCsr: new FormControl<string | null | undefined>(undefined),
			HsmCertificate: new FormControl<string | null | undefined>(undefined),
			AwsHardwareCertificate: new FormControl<string | null | undefined>(undefined),
			ManufacturerHardwareCertificate: new FormControl<string | null | undefined>(undefined),
			ClusterCertificate: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateClusterRequest {
		BackupRetentionPolicy?: BackupRetentionPolicy;

		/** Required */
		HsmType: string;
		SourceBackupId?: string;

		/** Required */
		SubnetIds: Array<string>;
		TagList?: Array<Tag>;
	}
	export interface CreateClusterRequestFormProperties {

		/** Required */
		HsmType: FormControl<string | null | undefined>,
		SourceBackupId: FormControl<string | null | undefined>,
	}
	export function CreateCreateClusterRequestFormGroup() {
		return new FormGroup<CreateClusterRequestFormProperties>({
			HsmType: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			SourceBackupId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateHsmResponse {
		Hsm?: Hsm;
	}
	export interface CreateHsmResponseFormProperties {
	}
	export function CreateCreateHsmResponseFormGroup() {
		return new FormGroup<CreateHsmResponseFormProperties>({
		});

	}

	export interface CreateHsmRequest {

		/** Required */
		ClusterId: string;

		/** Required */
		AvailabilityZone: string;
		IpAddress?: string;
	}
	export interface CreateHsmRequestFormProperties {

		/** Required */
		ClusterId: FormControl<string | null | undefined>,

		/** Required */
		AvailabilityZone: FormControl<string | null | undefined>,
		IpAddress: FormControl<string | null | undefined>,
	}
	export function CreateCreateHsmRequestFormGroup() {
		return new FormGroup<CreateHsmRequestFormProperties>({
			ClusterId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			AvailabilityZone: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			IpAddress: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DeleteBackupResponse {
		Backup?: Backup;
	}
	export interface DeleteBackupResponseFormProperties {
	}
	export function CreateDeleteBackupResponseFormGroup() {
		return new FormGroup<DeleteBackupResponseFormProperties>({
		});

	}


	/** Contains information about a backup of an AWS CloudHSM cluster. All backup objects contain the <code>BackupId</code>, <code>BackupState</code>, <code>ClusterId</code>, and <code>CreateTimestamp</code> parameters. Backups that were copied into a destination region additionally contain the <code>CopyTimestamp</code>, <code>SourceBackup</code>, <code>SourceCluster</code>, and <code>SourceRegion</code> parameters. A backup that is pending deletion will include the <code>DeleteTimestamp</code> parameter. */
	export interface Backup {

		/** Required */
		BackupId: string;
		BackupState?: BackupState;
		ClusterId?: string;
		CreateTimestamp?: Date;
		CopyTimestamp?: Date;
		NeverExpires?: boolean | null;
		SourceRegion?: string;
		SourceBackup?: string;
		SourceCluster?: string;
		DeleteTimestamp?: Date;
		TagList?: Array<Tag>;
	}

	/** Contains information about a backup of an AWS CloudHSM cluster. All backup objects contain the <code>BackupId</code>, <code>BackupState</code>, <code>ClusterId</code>, and <code>CreateTimestamp</code> parameters. Backups that were copied into a destination region additionally contain the <code>CopyTimestamp</code>, <code>SourceBackup</code>, <code>SourceCluster</code>, and <code>SourceRegion</code> parameters. A backup that is pending deletion will include the <code>DeleteTimestamp</code> parameter. */
	export interface BackupFormProperties {

		/** Required */
		BackupId: FormControl<string | null | undefined>,
		BackupState: FormControl<BackupState | null | undefined>,
		ClusterId: FormControl<string | null | undefined>,
		CreateTimestamp: FormControl<Date | null | undefined>,
		CopyTimestamp: FormControl<Date | null | undefined>,
		NeverExpires: FormControl<boolean | null | undefined>,
		SourceRegion: FormControl<string | null | undefined>,
		SourceBackup: FormControl<string | null | undefined>,
		SourceCluster: FormControl<string | null | undefined>,
		DeleteTimestamp: FormControl<Date | null | undefined>,
	}
	export function CreateBackupFormGroup() {
		return new FormGroup<BackupFormProperties>({
			BackupId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			BackupState: new FormControl<BackupState | null | undefined>(undefined),
			ClusterId: new FormControl<string | null | undefined>(undefined),
			CreateTimestamp: new FormControl<Date | null | undefined>(undefined),
			CopyTimestamp: new FormControl<Date | null | undefined>(undefined),
			NeverExpires: new FormControl<boolean | null | undefined>(undefined),
			SourceRegion: new FormControl<string | null | undefined>(undefined),
			SourceBackup: new FormControl<string | null | undefined>(undefined),
			SourceCluster: new FormControl<string | null | undefined>(undefined),
			DeleteTimestamp: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export enum BackupState { CREATE_IN_PROGRESS = 0, READY = 1, DELETED = 2, PENDING_DELETION = 3 }

	export interface DeleteBackupRequest {

		/** Required */
		BackupId: string;
	}
	export interface DeleteBackupRequestFormProperties {

		/** Required */
		BackupId: FormControl<string | null | undefined>,
	}
	export function CreateDeleteBackupRequestFormGroup() {
		return new FormGroup<DeleteBackupRequestFormProperties>({
			BackupId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeleteClusterResponse {
		Cluster?: Cluster;
	}
	export interface DeleteClusterResponseFormProperties {
	}
	export function CreateDeleteClusterResponseFormGroup() {
		return new FormGroup<DeleteClusterResponseFormProperties>({
		});

	}

	export interface DeleteClusterRequest {

		/** Required */
		ClusterId: string;
	}
	export interface DeleteClusterRequestFormProperties {

		/** Required */
		ClusterId: FormControl<string | null | undefined>,
	}
	export function CreateDeleteClusterRequestFormGroup() {
		return new FormGroup<DeleteClusterRequestFormProperties>({
			ClusterId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeleteHsmResponse {
		HsmId?: string;
	}
	export interface DeleteHsmResponseFormProperties {
		HsmId: FormControl<string | null | undefined>,
	}
	export function CreateDeleteHsmResponseFormGroup() {
		return new FormGroup<DeleteHsmResponseFormProperties>({
			HsmId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DeleteHsmRequest {

		/** Required */
		ClusterId: string;
		HsmId?: string;
		EniId?: string;
		EniIp?: string;
	}
	export interface DeleteHsmRequestFormProperties {

		/** Required */
		ClusterId: FormControl<string | null | undefined>,
		HsmId: FormControl<string | null | undefined>,
		EniId: FormControl<string | null | undefined>,
		EniIp: FormControl<string | null | undefined>,
	}
	export function CreateDeleteHsmRequestFormGroup() {
		return new FormGroup<DeleteHsmRequestFormProperties>({
			ClusterId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			HsmId: new FormControl<string | null | undefined>(undefined),
			EniId: new FormControl<string | null | undefined>(undefined),
			EniIp: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeBackupsResponse {
		Backups?: Array<Backup>;
		NextToken?: string;
	}
	export interface DescribeBackupsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeBackupsResponseFormGroup() {
		return new FormGroup<DescribeBackupsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeBackupsRequest {
		NextToken?: string;
		MaxResults?: number | null;
		Filters?: Filters;
		SortAscending?: boolean | null;
	}
	export interface DescribeBackupsRequestFormProperties {
		NextToken: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
		SortAscending: FormControl<boolean | null | undefined>,
	}
	export function CreateDescribeBackupsRequestFormGroup() {
		return new FormGroup<DescribeBackupsRequestFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined),
			SortAscending: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface Filters {
	}
	export interface FiltersFormProperties {
	}
	export function CreateFiltersFormGroup() {
		return new FormGroup<FiltersFormProperties>({
		});

	}

	export interface DescribeClustersResponse {
		Clusters?: Array<Cluster>;
		NextToken?: string;
	}
	export interface DescribeClustersResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeClustersResponseFormGroup() {
		return new FormGroup<DescribeClustersResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeClustersRequest {
		Filters?: Filters;
		NextToken?: string;
		MaxResults?: number | null;
	}
	export interface DescribeClustersRequestFormProperties {
		NextToken: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateDescribeClustersRequestFormGroup() {
		return new FormGroup<DescribeClustersRequestFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface InitializeClusterResponse {
		State?: ClusterState;
		StateMessage?: string;
	}
	export interface InitializeClusterResponseFormProperties {
		State: FormControl<ClusterState | null | undefined>,
		StateMessage: FormControl<string | null | undefined>,
	}
	export function CreateInitializeClusterResponseFormGroup() {
		return new FormGroup<InitializeClusterResponseFormProperties>({
			State: new FormControl<ClusterState | null | undefined>(undefined),
			StateMessage: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface InitializeClusterRequest {

		/** Required */
		ClusterId: string;

		/** Required */
		SignedCert: string;

		/** Required */
		TrustAnchor: string;
	}
	export interface InitializeClusterRequestFormProperties {

		/** Required */
		ClusterId: FormControl<string | null | undefined>,

		/** Required */
		SignedCert: FormControl<string | null | undefined>,

		/** Required */
		TrustAnchor: FormControl<string | null | undefined>,
	}
	export function CreateInitializeClusterRequestFormGroup() {
		return new FormGroup<InitializeClusterRequestFormProperties>({
			ClusterId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			SignedCert: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			TrustAnchor: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ListTagsResponse {

		/** Required */
		TagList: Array<Tag>;
		NextToken?: string;
	}
	export interface ListTagsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListTagsResponseFormGroup() {
		return new FormGroup<ListTagsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListTagsRequest {

		/** Required */
		ResourceId: string;
		NextToken?: string;
		MaxResults?: number | null;
	}
	export interface ListTagsRequestFormProperties {

		/** Required */
		ResourceId: FormControl<string | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateListTagsRequestFormGroup() {
		return new FormGroup<ListTagsRequestFormProperties>({
			ResourceId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			NextToken: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ModifyBackupAttributesResponse {

		/** Contains information about a backup of an AWS CloudHSM cluster. All backup objects contain the <code>BackupId</code>, <code>BackupState</code>, <code>ClusterId</code>, and <code>CreateTimestamp</code> parameters. Backups that were copied into a destination region additionally contain the <code>CopyTimestamp</code>, <code>SourceBackup</code>, <code>SourceCluster</code>, and <code>SourceRegion</code> parameters. A backup that is pending deletion will include the <code>DeleteTimestamp</code> parameter. */
		Backup?: Backup;
	}
	export interface ModifyBackupAttributesResponseFormProperties {
	}
	export function CreateModifyBackupAttributesResponseFormGroup() {
		return new FormGroup<ModifyBackupAttributesResponseFormProperties>({
		});

	}

	export interface ModifyBackupAttributesRequest {

		/** Required */
		BackupId: string;

		/** Required */
		NeverExpires: boolean;
	}
	export interface ModifyBackupAttributesRequestFormProperties {

		/** Required */
		BackupId: FormControl<string | null | undefined>,

		/** Required */
		NeverExpires: FormControl<boolean | null | undefined>,
	}
	export function CreateModifyBackupAttributesRequestFormGroup() {
		return new FormGroup<ModifyBackupAttributesRequestFormProperties>({
			BackupId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			NeverExpires: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ModifyClusterResponse {

		/** Contains information about an AWS CloudHSM cluster. */
		Cluster?: Cluster;
	}
	export interface ModifyClusterResponseFormProperties {
	}
	export function CreateModifyClusterResponseFormGroup() {
		return new FormGroup<ModifyClusterResponseFormProperties>({
		});

	}

	export interface ModifyClusterRequest {

		/** Required */
		BackupRetentionPolicy: BackupRetentionPolicy;

		/** Required */
		ClusterId: string;
	}
	export interface ModifyClusterRequestFormProperties {

		/** Required */
		ClusterId: FormControl<string | null | undefined>,
	}
	export function CreateModifyClusterRequestFormGroup() {
		return new FormGroup<ModifyClusterRequestFormProperties>({
			ClusterId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface RestoreBackupResponse {
		Backup?: Backup;
	}
	export interface RestoreBackupResponseFormProperties {
	}
	export function CreateRestoreBackupResponseFormGroup() {
		return new FormGroup<RestoreBackupResponseFormProperties>({
		});

	}

	export interface RestoreBackupRequest {

		/** Required */
		BackupId: string;
	}
	export interface RestoreBackupRequestFormProperties {

		/** Required */
		BackupId: FormControl<string | null | undefined>,
	}
	export function CreateRestoreBackupRequestFormGroup() {
		return new FormGroup<RestoreBackupRequestFormProperties>({
			BackupId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
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

	export interface TagResourceRequest {

		/** Required */
		ResourceId: string;

		/** Required */
		TagList: Array<Tag>;
	}
	export interface TagResourceRequestFormProperties {

		/** Required */
		ResourceId: FormControl<string | null | undefined>,
	}
	export function CreateTagResourceRequestFormGroup() {
		return new FormGroup<TagResourceRequestFormProperties>({
			ResourceId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
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

	export interface UntagResourceRequest {

		/** Required */
		ResourceId: string;

		/** Required */
		TagKeyList: Array<string>;
	}
	export interface UntagResourceRequestFormProperties {

		/** Required */
		ResourceId: FormControl<string | null | undefined>,
	}
	export function CreateUntagResourceRequestFormGroup() {
		return new FormGroup<UntagResourceRequestFormProperties>({
			ResourceId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

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
		DescribeBackups(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: DescribeBackupsRequest): Observable<DescribeBackupsResponse> {
			return this.http.post<DescribeBackupsResponse>(this.baseUri + '#X-Amz-Target=BaldrApiService.DescribeBackups?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Gets information about AWS CloudHSM clusters.</p> <p>This is a paginated operation, which means that each response might contain only a subset of all the clusters. When the response contains only a subset of clusters, it includes a <code>NextToken</code> value. Use this value in a subsequent <code>DescribeClusters</code> request to get more clusters. When you receive a response with no <code>NextToken</code> (or an empty or null value), that means there are no more clusters to get.</p>
		 * Post #X-Amz-Target=BaldrApiService.DescribeClusters
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {DescribeClustersResponse} Success
		 */
		DescribeClusters(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: DescribeClustersRequest): Observable<DescribeClustersResponse> {
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
		ListTags(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListTagsRequest): Observable<ListTagsResponse> {
			return this.http.post<ListTagsResponse>(this.baseUri + '#X-Amz-Target=BaldrApiService.ListTags?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Modifies attributes for AWS CloudHSM backup.
		 * Post #X-Amz-Target=BaldrApiService.ModifyBackupAttributes
		 * @return {ModifyBackupAttributesResponse} Success
		 */
		ModifyBackupAttributes(requestBody: ModifyBackupAttributesRequest): Observable<ModifyBackupAttributesResponse> {
			return this.http.post<ModifyBackupAttributesResponse>(this.baseUri + '#X-Amz-Target=BaldrApiService.ModifyBackupAttributes', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Modifies AWS CloudHSM cluster.
		 * Post #X-Amz-Target=BaldrApiService.ModifyCluster
		 * @return {ModifyClusterResponse} Success
		 */
		ModifyCluster(requestBody: ModifyClusterRequest): Observable<ModifyClusterResponse> {
			return this.http.post<ModifyClusterResponse>(this.baseUri + '#X-Amz-Target=BaldrApiService.ModifyCluster', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
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

	export enum CopyBackupToRegionX_Amz_Target { 'BaldrApiService.CopyBackupToRegion' = 0 }

	export enum CreateClusterX_Amz_Target { 'BaldrApiService.CreateCluster' = 0 }

	export enum CreateHsmX_Amz_Target { 'BaldrApiService.CreateHsm' = 0 }

	export enum DeleteBackupX_Amz_Target { 'BaldrApiService.DeleteBackup' = 0 }

	export enum DeleteClusterX_Amz_Target { 'BaldrApiService.DeleteCluster' = 0 }

	export enum DeleteHsmX_Amz_Target { 'BaldrApiService.DeleteHsm' = 0 }

	export enum DescribeBackupsX_Amz_Target { 'BaldrApiService.DescribeBackups' = 0 }

	export enum DescribeClustersX_Amz_Target { 'BaldrApiService.DescribeClusters' = 0 }

	export enum InitializeClusterX_Amz_Target { 'BaldrApiService.InitializeCluster' = 0 }

	export enum ListTagsX_Amz_Target { 'BaldrApiService.ListTags' = 0 }

	export enum ModifyBackupAttributesX_Amz_Target { 'BaldrApiService.ModifyBackupAttributes' = 0 }

	export enum ModifyClusterX_Amz_Target { 'BaldrApiService.ModifyCluster' = 0 }

	export enum RestoreBackupX_Amz_Target { 'BaldrApiService.RestoreBackup' = 0 }

	export enum TagResourceX_Amz_Target { 'BaldrApiService.TagResource' = 0 }

	export enum UntagResourceX_Amz_Target { 'BaldrApiService.UntagResource' = 0 }

}

