import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface CopyBackupToRegionResponse {

		/** Contains information about the backup that will be copied and created by the <a>CopyBackupToRegion</a> operation. */
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
		CreateTimestamp?: Date | null;

		/** Pattern: [a-z]{2}(-(gov))?-(east|west|north|south|central){1,2}-\d */
		SourceRegion?: string | null;

		/** Pattern: backup-[2-7a-zA-Z]{11,16} */
		SourceBackup?: string | null;

		/** Pattern: cluster-[2-7a-zA-Z]{11,16} */
		SourceCluster?: string | null;
	}

	/** Contains information about the backup that will be copied and created by the <a>CopyBackupToRegion</a> operation. */
	export interface DestinationBackupFormProperties {
		CreateTimestamp: FormControl<Date | null | undefined>,

		/** Pattern: [a-z]{2}(-(gov))?-(east|west|north|south|central){1,2}-\d */
		SourceRegion: FormControl<string | null | undefined>,

		/** Pattern: backup-[2-7a-zA-Z]{11,16} */
		SourceBackup: FormControl<string | null | undefined>,

		/** Pattern: cluster-[2-7a-zA-Z]{11,16} */
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

		/**
		 * Required
		 * Pattern: [a-z]{2}(-(gov))?-(east|west|north|south|central){1,2}-\d
		 */
		DestinationRegion: string;

		/**
		 * Required
		 * Pattern: backup-[2-7a-zA-Z]{11,16}
		 */
		BackupId: string;

		/**
		 * Minimum items: 1
		 * Maximum items: 50
		 */
		TagList?: Array<Tag>;
	}
	export interface CopyBackupToRegionRequestFormProperties {

		/**
		 * Required
		 * Pattern: [a-z]{2}(-(gov))?-(east|west|north|south|central){1,2}-\d
		 */
		DestinationRegion: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Pattern: backup-[2-7a-zA-Z]{11,16}
		 */
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

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 * Pattern: ^([\p{L}\p{Z}\p{N}_.:/=+\-@]*)$
		 */
		Key: string;

		/**
		 * Required
		 * Max length: 256
		 * Min length: 0
		 * Pattern: ^([\p{L}\p{Z}\p{N}_.:/=+\-@]*)$
		 */
		Value: string;
	}

	/** Contains a tag. A tag is a key-value pair. */
	export interface TagFormProperties {

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 * Pattern: ^([\p{L}\p{Z}\p{N}_.:/=+\-@]*)$
		 */
		Key: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 256
		 * Min length: 0
		 * Pattern: ^([\p{L}\p{Z}\p{N}_.:/=+\-@]*)$
		 */
		Value: FormControl<string | null | undefined>,
	}
	export function CreateTagFormGroup() {
		return new FormGroup<TagFormProperties>({
			Key: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(128), Validators.minLength(1)]),
			Value: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(256), Validators.minLength(0)]),
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

		/** Contains information about an AWS CloudHSM cluster. */
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
		BackupPolicy?: ClusterBackupPolicy | null;

		/** Pattern: cluster-[2-7a-zA-Z]{11,16} */
		ClusterId?: string | null;
		CreateTimestamp?: Date | null;
		Hsms?: Array<Hsm>;

		/** Pattern: (hsm1\.medium) */
		HsmType?: string | null;

		/**
		 * Max length: 32
		 * Min length: 7
		 */
		PreCoPassword?: string | null;

		/** Pattern: sg-[0-9a-fA-F]{8,17} */
		SecurityGroup?: string | null;

		/** Pattern: backup-[2-7a-zA-Z]{11,16} */
		SourceBackupId?: string | null;
		State?: ClusterState | null;

		/**
		 * Max length: 300
		 * Pattern: .*
		 */
		StateMessage?: string | null;
		SubnetMapping?: ExternalSubnetMapping;

		/** Pattern: vpc-[0-9a-fA-F] */
		VpcId?: string | null;

		/** Contains one or more certificates or a certificate signing request (CSR). */
		Certificates?: Certificates;

		/**
		 * Minimum items: 1
		 * Maximum items: 50
		 */
		TagList?: Array<Tag>;
	}

	/** Contains information about an AWS CloudHSM cluster. */
	export interface ClusterFormProperties {
		BackupPolicy: FormControl<ClusterBackupPolicy | null | undefined>,

		/** Pattern: cluster-[2-7a-zA-Z]{11,16} */
		ClusterId: FormControl<string | null | undefined>,
		CreateTimestamp: FormControl<Date | null | undefined>,

		/** Pattern: (hsm1\.medium) */
		HsmType: FormControl<string | null | undefined>,

		/**
		 * Max length: 32
		 * Min length: 7
		 */
		PreCoPassword: FormControl<string | null | undefined>,

		/** Pattern: sg-[0-9a-fA-F]{8,17} */
		SecurityGroup: FormControl<string | null | undefined>,

		/** Pattern: backup-[2-7a-zA-Z]{11,16} */
		SourceBackupId: FormControl<string | null | undefined>,
		State: FormControl<ClusterState | null | undefined>,

		/**
		 * Max length: 300
		 * Pattern: .*
		 */
		StateMessage: FormControl<string | null | undefined>,

		/** Pattern: vpc-[0-9a-fA-F] */
		VpcId: FormControl<string | null | undefined>,
	}
	export function CreateClusterFormGroup() {
		return new FormGroup<ClusterFormProperties>({
			BackupPolicy: new FormControl<ClusterBackupPolicy | null | undefined>(undefined),
			ClusterId: new FormControl<string | null | undefined>(undefined),
			CreateTimestamp: new FormControl<Date | null | undefined>(undefined),
			HsmType: new FormControl<string | null | undefined>(undefined),
			PreCoPassword: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(32), Validators.minLength(7)]),
			SecurityGroup: new FormControl<string | null | undefined>(undefined),
			SourceBackupId: new FormControl<string | null | undefined>(undefined),
			State: new FormControl<ClusterState | null | undefined>(undefined),
			StateMessage: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(300)]),
			VpcId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ClusterBackupPolicy { DEFAULT = 0 }


	/** Contains information about a hardware security module (HSM) in an AWS CloudHSM cluster. */
	export interface Hsm {

		/** Pattern: [a-z]{2}(-(gov))?-(east|west|north|south|central){1,2}-\d[a-z] */
		AvailabilityZone?: string | null;

		/** Pattern: cluster-[2-7a-zA-Z]{11,16} */
		ClusterId?: string | null;

		/** Pattern: subnet-[0-9a-fA-F]{8,17} */
		SubnetId?: string | null;

		/** Pattern: eni-[0-9a-fA-F]{8,17} */
		EniId?: string | null;

		/** Pattern: \d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3} */
		EniIp?: string | null;

		/**
		 * Required
		 * Pattern: hsm-[2-7a-zA-Z]{11,16}
		 */
		HsmId: string;
		State?: HsmState | null;
		StateMessage?: string | null;
	}

	/** Contains information about a hardware security module (HSM) in an AWS CloudHSM cluster. */
	export interface HsmFormProperties {

		/** Pattern: [a-z]{2}(-(gov))?-(east|west|north|south|central){1,2}-\d[a-z] */
		AvailabilityZone: FormControl<string | null | undefined>,

		/** Pattern: cluster-[2-7a-zA-Z]{11,16} */
		ClusterId: FormControl<string | null | undefined>,

		/** Pattern: subnet-[0-9a-fA-F]{8,17} */
		SubnetId: FormControl<string | null | undefined>,

		/** Pattern: eni-[0-9a-fA-F]{8,17} */
		EniId: FormControl<string | null | undefined>,

		/** Pattern: \d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3} */
		EniIp: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Pattern: hsm-[2-7a-zA-Z]{11,16}
		 */
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

		/**
		 * Max length: 5000
		 * Pattern: [a-zA-Z0-9+-/=\s]*
		 */
		ClusterCsr?: string | null;

		/**
		 * Max length: 5000
		 * Pattern: [a-zA-Z0-9+-/=\s]*
		 */
		HsmCertificate?: string | null;

		/**
		 * Max length: 5000
		 * Pattern: [a-zA-Z0-9+-/=\s]*
		 */
		AwsHardwareCertificate?: string | null;

		/**
		 * Max length: 5000
		 * Pattern: [a-zA-Z0-9+-/=\s]*
		 */
		ManufacturerHardwareCertificate?: string | null;

		/**
		 * Max length: 5000
		 * Pattern: [a-zA-Z0-9+-/=\s]*
		 */
		ClusterCertificate?: string | null;
	}

	/** Contains one or more certificates or a certificate signing request (CSR). */
	export interface CertificatesFormProperties {

		/**
		 * Max length: 5000
		 * Pattern: [a-zA-Z0-9+-/=\s]*
		 */
		ClusterCsr: FormControl<string | null | undefined>,

		/**
		 * Max length: 5000
		 * Pattern: [a-zA-Z0-9+-/=\s]*
		 */
		HsmCertificate: FormControl<string | null | undefined>,

		/**
		 * Max length: 5000
		 * Pattern: [a-zA-Z0-9+-/=\s]*
		 */
		AwsHardwareCertificate: FormControl<string | null | undefined>,

		/**
		 * Max length: 5000
		 * Pattern: [a-zA-Z0-9+-/=\s]*
		 */
		ManufacturerHardwareCertificate: FormControl<string | null | undefined>,

		/**
		 * Max length: 5000
		 * Pattern: [a-zA-Z0-9+-/=\s]*
		 */
		ClusterCertificate: FormControl<string | null | undefined>,
	}
	export function CreateCertificatesFormGroup() {
		return new FormGroup<CertificatesFormProperties>({
			ClusterCsr: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(5000)]),
			HsmCertificate: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(5000)]),
			AwsHardwareCertificate: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(5000)]),
			ManufacturerHardwareCertificate: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(5000)]),
			ClusterCertificate: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(5000)]),
		});

	}

	export interface CreateClusterRequest {

		/**
		 * Required
		 * Minimum items: 1
		 * Maximum items: 10
		 */
		SubnetIds: Array<string>;

		/**
		 * Required
		 * Pattern: (hsm1\.medium)
		 */
		HsmType: string;

		/** Pattern: backup-[2-7a-zA-Z]{11,16} */
		SourceBackupId?: string | null;

		/**
		 * Minimum items: 1
		 * Maximum items: 50
		 */
		TagList?: Array<Tag>;
	}
	export interface CreateClusterRequestFormProperties {

		/**
		 * Required
		 * Pattern: (hsm1\.medium)
		 */
		HsmType: FormControl<string | null | undefined>,

		/** Pattern: backup-[2-7a-zA-Z]{11,16} */
		SourceBackupId: FormControl<string | null | undefined>,
	}
	export function CreateCreateClusterRequestFormGroup() {
		return new FormGroup<CreateClusterRequestFormProperties>({
			HsmType: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			SourceBackupId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateHsmResponse {

		/** Contains information about a hardware security module (HSM) in an AWS CloudHSM cluster. */
		Hsm?: Hsm;
	}
	export interface CreateHsmResponseFormProperties {
	}
	export function CreateCreateHsmResponseFormGroup() {
		return new FormGroup<CreateHsmResponseFormProperties>({
		});

	}

	export interface CreateHsmRequest {

		/**
		 * Required
		 * Pattern: cluster-[2-7a-zA-Z]{11,16}
		 */
		ClusterId: string;

		/**
		 * Required
		 * Pattern: [a-z]{2}(-(gov))?-(east|west|north|south|central){1,2}-\d[a-z]
		 */
		AvailabilityZone: string;

		/** Pattern: \d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3} */
		IpAddress?: string | null;
	}
	export interface CreateHsmRequestFormProperties {

		/**
		 * Required
		 * Pattern: cluster-[2-7a-zA-Z]{11,16}
		 */
		ClusterId: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Pattern: [a-z]{2}(-(gov))?-(east|west|north|south|central){1,2}-\d[a-z]
		 */
		AvailabilityZone: FormControl<string | null | undefined>,

		/** Pattern: \d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3} */
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

		/** Contains information about a backup of an AWS CloudHSM cluster. All backup objects contain the BackupId, BackupState, ClusterId, and CreateTimestamp parameters. Backups that were copied into a destination region additionally contain the CopyTimestamp, SourceBackup, SourceCluster, and SourceRegion paramters. A backup that is pending deletion will include the DeleteTimestamp parameter. */
		Backup?: Backup;
	}
	export interface DeleteBackupResponseFormProperties {
	}
	export function CreateDeleteBackupResponseFormGroup() {
		return new FormGroup<DeleteBackupResponseFormProperties>({
		});

	}


	/** Contains information about a backup of an AWS CloudHSM cluster. All backup objects contain the BackupId, BackupState, ClusterId, and CreateTimestamp parameters. Backups that were copied into a destination region additionally contain the CopyTimestamp, SourceBackup, SourceCluster, and SourceRegion paramters. A backup that is pending deletion will include the DeleteTimestamp parameter. */
	export interface Backup {

		/**
		 * Required
		 * Pattern: backup-[2-7a-zA-Z]{11,16}
		 */
		BackupId: string;
		BackupState?: BackupBackupState | null;

		/** Pattern: cluster-[2-7a-zA-Z]{11,16} */
		ClusterId?: string | null;
		CreateTimestamp?: Date | null;
		CopyTimestamp?: Date | null;

		/** Pattern: [a-z]{2}(-(gov))?-(east|west|north|south|central){1,2}-\d */
		SourceRegion?: string | null;

		/** Pattern: backup-[2-7a-zA-Z]{11,16} */
		SourceBackup?: string | null;

		/** Pattern: cluster-[2-7a-zA-Z]{11,16} */
		SourceCluster?: string | null;
		DeleteTimestamp?: Date | null;

		/**
		 * Minimum items: 1
		 * Maximum items: 50
		 */
		TagList?: Array<Tag>;
	}

	/** Contains information about a backup of an AWS CloudHSM cluster. All backup objects contain the BackupId, BackupState, ClusterId, and CreateTimestamp parameters. Backups that were copied into a destination region additionally contain the CopyTimestamp, SourceBackup, SourceCluster, and SourceRegion paramters. A backup that is pending deletion will include the DeleteTimestamp parameter. */
	export interface BackupFormProperties {

		/**
		 * Required
		 * Pattern: backup-[2-7a-zA-Z]{11,16}
		 */
		BackupId: FormControl<string | null | undefined>,
		BackupState: FormControl<BackupBackupState | null | undefined>,

		/** Pattern: cluster-[2-7a-zA-Z]{11,16} */
		ClusterId: FormControl<string | null | undefined>,
		CreateTimestamp: FormControl<Date | null | undefined>,
		CopyTimestamp: FormControl<Date | null | undefined>,

		/** Pattern: [a-z]{2}(-(gov))?-(east|west|north|south|central){1,2}-\d */
		SourceRegion: FormControl<string | null | undefined>,

		/** Pattern: backup-[2-7a-zA-Z]{11,16} */
		SourceBackup: FormControl<string | null | undefined>,

		/** Pattern: cluster-[2-7a-zA-Z]{11,16} */
		SourceCluster: FormControl<string | null | undefined>,
		DeleteTimestamp: FormControl<Date | null | undefined>,
	}
	export function CreateBackupFormGroup() {
		return new FormGroup<BackupFormProperties>({
			BackupId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			BackupState: new FormControl<BackupBackupState | null | undefined>(undefined),
			ClusterId: new FormControl<string | null | undefined>(undefined),
			CreateTimestamp: new FormControl<Date | null | undefined>(undefined),
			CopyTimestamp: new FormControl<Date | null | undefined>(undefined),
			SourceRegion: new FormControl<string | null | undefined>(undefined),
			SourceBackup: new FormControl<string | null | undefined>(undefined),
			SourceCluster: new FormControl<string | null | undefined>(undefined),
			DeleteTimestamp: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export enum BackupBackupState { CREATE_IN_PROGRESS = 0, READY = 1, DELETED = 2, PENDING_DELETION = 3 }

	export interface DeleteBackupRequest {

		/**
		 * Required
		 * Pattern: backup-[2-7a-zA-Z]{11,16}
		 */
		BackupId: string;
	}
	export interface DeleteBackupRequestFormProperties {

		/**
		 * Required
		 * Pattern: backup-[2-7a-zA-Z]{11,16}
		 */
		BackupId: FormControl<string | null | undefined>,
	}
	export function CreateDeleteBackupRequestFormGroup() {
		return new FormGroup<DeleteBackupRequestFormProperties>({
			BackupId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeleteClusterResponse {

		/** Contains information about an AWS CloudHSM cluster. */
		Cluster?: Cluster;
	}
	export interface DeleteClusterResponseFormProperties {
	}
	export function CreateDeleteClusterResponseFormGroup() {
		return new FormGroup<DeleteClusterResponseFormProperties>({
		});

	}

	export interface DeleteClusterRequest {

		/**
		 * Required
		 * Pattern: cluster-[2-7a-zA-Z]{11,16}
		 */
		ClusterId: string;
	}
	export interface DeleteClusterRequestFormProperties {

		/**
		 * Required
		 * Pattern: cluster-[2-7a-zA-Z]{11,16}
		 */
		ClusterId: FormControl<string | null | undefined>,
	}
	export function CreateDeleteClusterRequestFormGroup() {
		return new FormGroup<DeleteClusterRequestFormProperties>({
			ClusterId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeleteHsmResponse {

		/** Pattern: hsm-[2-7a-zA-Z]{11,16} */
		HsmId?: string | null;
	}
	export interface DeleteHsmResponseFormProperties {

		/** Pattern: hsm-[2-7a-zA-Z]{11,16} */
		HsmId: FormControl<string | null | undefined>,
	}
	export function CreateDeleteHsmResponseFormGroup() {
		return new FormGroup<DeleteHsmResponseFormProperties>({
			HsmId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DeleteHsmRequest {

		/**
		 * Required
		 * Pattern: cluster-[2-7a-zA-Z]{11,16}
		 */
		ClusterId: string;

		/** Pattern: hsm-[2-7a-zA-Z]{11,16} */
		HsmId?: string | null;

		/** Pattern: eni-[0-9a-fA-F]{8,17} */
		EniId?: string | null;

		/** Pattern: \d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3} */
		EniIp?: string | null;
	}
	export interface DeleteHsmRequestFormProperties {

		/**
		 * Required
		 * Pattern: cluster-[2-7a-zA-Z]{11,16}
		 */
		ClusterId: FormControl<string | null | undefined>,

		/** Pattern: hsm-[2-7a-zA-Z]{11,16} */
		HsmId: FormControl<string | null | undefined>,

		/** Pattern: eni-[0-9a-fA-F]{8,17} */
		EniId: FormControl<string | null | undefined>,

		/** Pattern: \d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3} */
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

		/**
		 * Max length: 256
		 * Pattern: .*
		 */
		NextToken?: string | null;
	}
	export interface DescribeBackupsResponseFormProperties {

		/**
		 * Max length: 256
		 * Pattern: .*
		 */
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeBackupsResponseFormGroup() {
		return new FormGroup<DescribeBackupsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(256)]),
		});

	}

	export interface DescribeBackupsRequest {

		/**
		 * Max length: 256
		 * Pattern: .*
		 */
		NextToken?: string | null;

		/**
		 * Minimum: 1
		 * Maximum: 100
		 */
		MaxResults?: number | null;
		Filters?: Filters;
		SortAscending?: boolean | null;
	}
	export interface DescribeBackupsRequestFormProperties {

		/**
		 * Max length: 256
		 * Pattern: .*
		 */
		NextToken: FormControl<string | null | undefined>,

		/**
		 * Minimum: 1
		 * Maximum: 100
		 */
		MaxResults: FormControl<number | null | undefined>,
		SortAscending: FormControl<boolean | null | undefined>,
	}
	export function CreateDescribeBackupsRequestFormGroup() {
		return new FormGroup<DescribeBackupsRequestFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(256)]),
			MaxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(100)]),
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

		/**
		 * Max length: 256
		 * Pattern: .*
		 */
		NextToken?: string | null;
	}
	export interface DescribeClustersResponseFormProperties {

		/**
		 * Max length: 256
		 * Pattern: .*
		 */
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeClustersResponseFormGroup() {
		return new FormGroup<DescribeClustersResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(256)]),
		});

	}

	export interface DescribeClustersRequest {
		Filters?: Filters;

		/**
		 * Max length: 256
		 * Pattern: .*
		 */
		NextToken?: string | null;

		/**
		 * Minimum: 1
		 * Maximum: 100
		 */
		MaxResults?: number | null;
	}
	export interface DescribeClustersRequestFormProperties {

		/**
		 * Max length: 256
		 * Pattern: .*
		 */
		NextToken: FormControl<string | null | undefined>,

		/**
		 * Minimum: 1
		 * Maximum: 100
		 */
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateDescribeClustersRequestFormGroup() {
		return new FormGroup<DescribeClustersRequestFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(256)]),
			MaxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(100)]),
		});

	}

	export interface InitializeClusterResponse {
		State?: ClusterState | null;

		/**
		 * Max length: 300
		 * Pattern: .*
		 */
		StateMessage?: string | null;
	}
	export interface InitializeClusterResponseFormProperties {
		State: FormControl<ClusterState | null | undefined>,

		/**
		 * Max length: 300
		 * Pattern: .*
		 */
		StateMessage: FormControl<string | null | undefined>,
	}
	export function CreateInitializeClusterResponseFormGroup() {
		return new FormGroup<InitializeClusterResponseFormProperties>({
			State: new FormControl<ClusterState | null | undefined>(undefined),
			StateMessage: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(300)]),
		});

	}

	export interface InitializeClusterRequest {

		/**
		 * Required
		 * Pattern: cluster-[2-7a-zA-Z]{11,16}
		 */
		ClusterId: string;

		/**
		 * Required
		 * Max length: 5000
		 * Pattern: [a-zA-Z0-9+-/=\s]*
		 */
		SignedCert: string;

		/**
		 * Required
		 * Max length: 5000
		 * Pattern: [a-zA-Z0-9+-/=\s]*
		 */
		TrustAnchor: string;
	}
	export interface InitializeClusterRequestFormProperties {

		/**
		 * Required
		 * Pattern: cluster-[2-7a-zA-Z]{11,16}
		 */
		ClusterId: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 5000
		 * Pattern: [a-zA-Z0-9+-/=\s]*
		 */
		SignedCert: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 5000
		 * Pattern: [a-zA-Z0-9+-/=\s]*
		 */
		TrustAnchor: FormControl<string | null | undefined>,
	}
	export function CreateInitializeClusterRequestFormGroup() {
		return new FormGroup<InitializeClusterRequestFormProperties>({
			ClusterId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			SignedCert: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(5000)]),
			TrustAnchor: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(5000)]),
		});

	}

	export interface ListTagsResponse {

		/**
		 * Required
		 * Minimum items: 1
		 * Maximum items: 50
		 */
		TagList: Array<Tag>;

		/**
		 * Max length: 256
		 * Pattern: .*
		 */
		NextToken?: string | null;
	}
	export interface ListTagsResponseFormProperties {

		/**
		 * Max length: 256
		 * Pattern: .*
		 */
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListTagsResponseFormGroup() {
		return new FormGroup<ListTagsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(256)]),
		});

	}

	export interface ListTagsRequest {

		/**
		 * Required
		 * Pattern: (?:cluster|backup)-[2-7a-zA-Z]{11,16}
		 */
		ResourceId: string;

		/**
		 * Max length: 256
		 * Pattern: .*
		 */
		NextToken?: string | null;

		/**
		 * Minimum: 1
		 * Maximum: 100
		 */
		MaxResults?: number | null;
	}
	export interface ListTagsRequestFormProperties {

		/**
		 * Required
		 * Pattern: (?:cluster|backup)-[2-7a-zA-Z]{11,16}
		 */
		ResourceId: FormControl<string | null | undefined>,

		/**
		 * Max length: 256
		 * Pattern: .*
		 */
		NextToken: FormControl<string | null | undefined>,

		/**
		 * Minimum: 1
		 * Maximum: 100
		 */
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateListTagsRequestFormGroup() {
		return new FormGroup<ListTagsRequestFormProperties>({
			ResourceId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			NextToken: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(256)]),
			MaxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(100)]),
		});

	}

	export interface RestoreBackupResponse {

		/** Contains information about a backup of an AWS CloudHSM cluster. All backup objects contain the BackupId, BackupState, ClusterId, and CreateTimestamp parameters. Backups that were copied into a destination region additionally contain the CopyTimestamp, SourceBackup, SourceCluster, and SourceRegion paramters. A backup that is pending deletion will include the DeleteTimestamp parameter. */
		Backup?: Backup;
	}
	export interface RestoreBackupResponseFormProperties {
	}
	export function CreateRestoreBackupResponseFormGroup() {
		return new FormGroup<RestoreBackupResponseFormProperties>({
		});

	}

	export interface RestoreBackupRequest {

		/**
		 * Required
		 * Pattern: backup-[2-7a-zA-Z]{11,16}
		 */
		BackupId: string;
	}
	export interface RestoreBackupRequestFormProperties {

		/**
		 * Required
		 * Pattern: backup-[2-7a-zA-Z]{11,16}
		 */
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

		/**
		 * Required
		 * Pattern: (?:cluster|backup)-[2-7a-zA-Z]{11,16}
		 */
		ResourceId: string;

		/**
		 * Required
		 * Minimum items: 1
		 * Maximum items: 50
		 */
		TagList: Array<Tag>;
	}
	export interface TagResourceRequestFormProperties {

		/**
		 * Required
		 * Pattern: (?:cluster|backup)-[2-7a-zA-Z]{11,16}
		 */
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

		/**
		 * Required
		 * Pattern: (?:cluster|backup)-[2-7a-zA-Z]{11,16}
		 */
		ResourceId: string;

		/**
		 * Required
		 * Minimum items: 1
		 * Maximum items: 50
		 */
		TagKeyList: Array<string>;
	}
	export interface UntagResourceRequestFormProperties {

		/**
		 * Required
		 * Pattern: (?:cluster|backup)-[2-7a-zA-Z]{11,16}
		 */
		ResourceId: FormControl<string | null | undefined>,
	}
	export function CreateUntagResourceRequestFormGroup() {
		return new FormGroup<UntagResourceRequestFormProperties>({
			ResourceId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

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

