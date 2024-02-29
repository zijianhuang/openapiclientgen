import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface CreateApplicationInstanceResponse {

		/** Required */
		ApplicationInstanceId: string;
	}
	export interface CreateApplicationInstanceResponseFormProperties {

		/** Required */
		ApplicationInstanceId: FormControl<string | null | undefined>,
	}
	export function CreateCreateApplicationInstanceResponseFormGroup() {
		return new FormGroup<CreateApplicationInstanceResponseFormProperties>({
			ApplicationInstanceId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
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

	export interface AccessDeniedException {
	}
	export interface AccessDeniedExceptionFormProperties {
	}
	export function CreateAccessDeniedExceptionFormGroup() {
		return new FormGroup<AccessDeniedExceptionFormProperties>({
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

	export interface InternalServerException {
	}
	export interface InternalServerExceptionFormProperties {
	}
	export function CreateInternalServerExceptionFormGroup() {
		return new FormGroup<InternalServerExceptionFormProperties>({
		});

	}

	export interface CreateJobForDevicesResponse {

		/** Required */
		Jobs: Array<Job>;
	}
	export interface CreateJobForDevicesResponseFormProperties {
	}
	export function CreateCreateJobForDevicesResponseFormGroup() {
		return new FormGroup<CreateJobForDevicesResponseFormProperties>({
		});

	}


	/** A job for a device. */
	export interface Job {
		DeviceId?: string;
		JobId?: string;
	}

	/** A job for a device. */
	export interface JobFormProperties {
		DeviceId: FormControl<string | null | undefined>,
		JobId: FormControl<string | null | undefined>,
	}
	export function CreateJobFormGroup() {
		return new FormGroup<JobFormProperties>({
			DeviceId: new FormControl<string | null | undefined>(undefined),
			JobId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An over-the-air update (OTA) job configuration. */
	export interface OTAJobConfig {
		AllowMajorVersionUpdate?: boolean | null;

		/** Required */
		ImageVersion: string;
	}

	/** An over-the-air update (OTA) job configuration. */
	export interface OTAJobConfigFormProperties {
		AllowMajorVersionUpdate: FormControl<boolean | null | undefined>,

		/** Required */
		ImageVersion: FormControl<string | null | undefined>,
	}
	export function CreateOTAJobConfigFormGroup() {
		return new FormGroup<OTAJobConfigFormProperties>({
			AllowMajorVersionUpdate: new FormControl<boolean | null | undefined>(undefined),
			ImageVersion: new FormControl<string | null | undefined>(undefined, [Validators.required]),
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

	export interface ResourceNotFoundException {
	}
	export interface ResourceNotFoundExceptionFormProperties {
	}
	export function CreateResourceNotFoundExceptionFormGroup() {
		return new FormGroup<ResourceNotFoundExceptionFormProperties>({
		});

	}

	export interface CreateNodeFromTemplateJobResponse {

		/** Required */
		JobId: string;
	}
	export interface CreateNodeFromTemplateJobResponseFormProperties {

		/** Required */
		JobId: FormControl<string | null | undefined>,
	}
	export function CreateCreateNodeFromTemplateJobResponseFormGroup() {
		return new FormGroup<CreateNodeFromTemplateJobResponseFormProperties>({
			JobId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Tags for a job. */
	export interface JobResourceTags {

		/** Required */
		ResourceType: JobResourceType;

		/** Required */
		Tags: TagMap;
	}

	/** Tags for a job. */
	export interface JobResourceTagsFormProperties {

		/** Required */
		ResourceType: FormControl<JobResourceType | null | undefined>,
	}
	export function CreateJobResourceTagsFormGroup() {
		return new FormGroup<JobResourceTagsFormProperties>({
			ResourceType: new FormControl<JobResourceType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum JobResourceType { PACKAGE = 'PACKAGE' }

	export interface TagMap {
	}
	export interface TagMapFormProperties {
	}
	export function CreateTagMapFormGroup() {
		return new FormGroup<TagMapFormProperties>({
		});

	}

	export interface CreatePackageResponse {
		Arn?: string;
		PackageId?: string;

		/** Required */
		StorageLocation: StorageLocation;
	}
	export interface CreatePackageResponseFormProperties {
		Arn: FormControl<string | null | undefined>,
		PackageId: FormControl<string | null | undefined>,
	}
	export function CreateCreatePackageResponseFormGroup() {
		return new FormGroup<CreatePackageResponseFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined),
			PackageId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A storage location. */
	export interface StorageLocation {

		/** Required */
		BinaryPrefixLocation: string;

		/** Required */
		Bucket: string;

		/** Required */
		GeneratedPrefixLocation: string;

		/** Required */
		ManifestPrefixLocation: string;

		/** Required */
		RepoPrefixLocation: string;
	}

	/** A storage location. */
	export interface StorageLocationFormProperties {

		/** Required */
		BinaryPrefixLocation: FormControl<string | null | undefined>,

		/** Required */
		Bucket: FormControl<string | null | undefined>,

		/** Required */
		GeneratedPrefixLocation: FormControl<string | null | undefined>,

		/** Required */
		ManifestPrefixLocation: FormControl<string | null | undefined>,

		/** Required */
		RepoPrefixLocation: FormControl<string | null | undefined>,
	}
	export function CreateStorageLocationFormGroup() {
		return new FormGroup<StorageLocationFormProperties>({
			BinaryPrefixLocation: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Bucket: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			GeneratedPrefixLocation: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ManifestPrefixLocation: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			RepoPrefixLocation: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreatePackageImportJobResponse {

		/** Required */
		JobId: string;
	}
	export interface CreatePackageImportJobResponseFormProperties {

		/** Required */
		JobId: FormControl<string | null | undefined>,
	}
	export function CreateCreatePackageImportJobResponseFormGroup() {
		return new FormGroup<CreatePackageImportJobResponseFormProperties>({
			JobId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** A package version input configuration. */
	export interface PackageVersionInputConfig {

		/** Required */
		S3Location: S3Location;
	}

	/** A package version input configuration. */
	export interface PackageVersionInputConfigFormProperties {
	}
	export function CreatePackageVersionInputConfigFormGroup() {
		return new FormGroup<PackageVersionInputConfigFormProperties>({
		});

	}


	/** A location in Amazon S3. */
	export interface S3Location {

		/** Required */
		BucketName: string;

		/** Required */
		ObjectKey: string;
		Region?: string;
	}

	/** A location in Amazon S3. */
	export interface S3LocationFormProperties {

		/** Required */
		BucketName: FormControl<string | null | undefined>,

		/** Required */
		ObjectKey: FormControl<string | null | undefined>,
		Region: FormControl<string | null | undefined>,
	}
	export function CreateS3LocationFormGroup() {
		return new FormGroup<S3LocationFormProperties>({
			BucketName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ObjectKey: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Region: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A package version output configuration. */
	export interface PackageVersionOutputConfig {
		MarkLatest?: boolean | null;

		/** Required */
		PackageName: string;

		/** Required */
		PackageVersion: string;
	}

	/** A package version output configuration. */
	export interface PackageVersionOutputConfigFormProperties {
		MarkLatest: FormControl<boolean | null | undefined>,

		/** Required */
		PackageName: FormControl<string | null | undefined>,

		/** Required */
		PackageVersion: FormControl<string | null | undefined>,
	}
	export function CreatePackageVersionOutputConfigFormGroup() {
		return new FormGroup<PackageVersionOutputConfigFormProperties>({
			MarkLatest: new FormControl<boolean | null | undefined>(undefined),
			PackageName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			PackageVersion: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeleteDeviceResponse {
		DeviceId?: string;
	}
	export interface DeleteDeviceResponseFormProperties {
		DeviceId: FormControl<string | null | undefined>,
	}
	export function CreateDeleteDeviceResponseFormGroup() {
		return new FormGroup<DeleteDeviceResponseFormProperties>({
			DeviceId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DeletePackageResponse {
	}
	export interface DeletePackageResponseFormProperties {
	}
	export function CreateDeletePackageResponseFormGroup() {
		return new FormGroup<DeletePackageResponseFormProperties>({
		});

	}

	export interface DeregisterPackageVersionResponse {
	}
	export interface DeregisterPackageVersionResponseFormProperties {
	}
	export function CreateDeregisterPackageVersionResponseFormGroup() {
		return new FormGroup<DeregisterPackageVersionResponseFormProperties>({
		});

	}

	export interface DescribeApplicationInstanceResponse {
		ApplicationInstanceId?: string;
		ApplicationInstanceIdToReplace?: string;
		Arn?: string;
		CreatedTime?: Date;
		DefaultRuntimeContextDevice?: string;
		DefaultRuntimeContextDeviceName?: string;
		Description?: string;
		HealthStatus?: ApplicationInstanceHealthStatus;
		LastUpdatedTime?: Date;
		Name?: string;
		RuntimeContextStates?: Array<ReportedRuntimeContextState>;
		RuntimeRoleArn?: string;
		Status?: ApplicationInstanceStatus;
		StatusDescription?: string;
		Tags?: TagMap;
	}
	export interface DescribeApplicationInstanceResponseFormProperties {
		ApplicationInstanceId: FormControl<string | null | undefined>,
		ApplicationInstanceIdToReplace: FormControl<string | null | undefined>,
		Arn: FormControl<string | null | undefined>,
		CreatedTime: FormControl<Date | null | undefined>,
		DefaultRuntimeContextDevice: FormControl<string | null | undefined>,
		DefaultRuntimeContextDeviceName: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
		HealthStatus: FormControl<ApplicationInstanceHealthStatus | null | undefined>,
		LastUpdatedTime: FormControl<Date | null | undefined>,
		Name: FormControl<string | null | undefined>,
		RuntimeRoleArn: FormControl<string | null | undefined>,
		Status: FormControl<ApplicationInstanceStatus | null | undefined>,
		StatusDescription: FormControl<string | null | undefined>,
	}
	export function CreateDescribeApplicationInstanceResponseFormGroup() {
		return new FormGroup<DescribeApplicationInstanceResponseFormProperties>({
			ApplicationInstanceId: new FormControl<string | null | undefined>(undefined),
			ApplicationInstanceIdToReplace: new FormControl<string | null | undefined>(undefined),
			Arn: new FormControl<string | null | undefined>(undefined),
			CreatedTime: new FormControl<Date | null | undefined>(undefined),
			DefaultRuntimeContextDevice: new FormControl<string | null | undefined>(undefined),
			DefaultRuntimeContextDeviceName: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			HealthStatus: new FormControl<ApplicationInstanceHealthStatus | null | undefined>(undefined),
			LastUpdatedTime: new FormControl<Date | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			RuntimeRoleArn: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<ApplicationInstanceStatus | null | undefined>(undefined),
			StatusDescription: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ApplicationInstanceHealthStatus { RUNNING = 'RUNNING', ERROR = 'ERROR', NOT_AVAILABLE = 'NOT_AVAILABLE' }


	/** An application instance's state. */
	export interface ReportedRuntimeContextState {

		/** Required */
		DesiredState: DesiredState;

		/** Required */
		DeviceReportedStatus: DeviceReportedStatus;

		/** Required */
		DeviceReportedTime: Date;

		/** Required */
		RuntimeContextName: string;
	}

	/** An application instance's state. */
	export interface ReportedRuntimeContextStateFormProperties {

		/** Required */
		DesiredState: FormControl<DesiredState | null | undefined>,

		/** Required */
		DeviceReportedStatus: FormControl<DeviceReportedStatus | null | undefined>,

		/** Required */
		DeviceReportedTime: FormControl<Date | null | undefined>,

		/** Required */
		RuntimeContextName: FormControl<string | null | undefined>,
	}
	export function CreateReportedRuntimeContextStateFormGroup() {
		return new FormGroup<ReportedRuntimeContextStateFormProperties>({
			DesiredState: new FormControl<DesiredState | null | undefined>(undefined, [Validators.required]),
			DeviceReportedStatus: new FormControl<DeviceReportedStatus | null | undefined>(undefined, [Validators.required]),
			DeviceReportedTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			RuntimeContextName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum DesiredState { RUNNING = 'RUNNING', STOPPED = 'STOPPED', REMOVED = 'REMOVED' }

	export enum DeviceReportedStatus { STOPPING = 'STOPPING', STOPPED = 'STOPPED', STOP_ERROR = 'STOP_ERROR', REMOVAL_FAILED = 'REMOVAL_FAILED', REMOVAL_IN_PROGRESS = 'REMOVAL_IN_PROGRESS', STARTING = 'STARTING', RUNNING = 'RUNNING', INSTALL_ERROR = 'INSTALL_ERROR', LAUNCHED = 'LAUNCHED', LAUNCH_ERROR = 'LAUNCH_ERROR', INSTALL_IN_PROGRESS = 'INSTALL_IN_PROGRESS' }

	export enum ApplicationInstanceStatus { DEPLOYMENT_PENDING = 'DEPLOYMENT_PENDING', DEPLOYMENT_REQUESTED = 'DEPLOYMENT_REQUESTED', DEPLOYMENT_IN_PROGRESS = 'DEPLOYMENT_IN_PROGRESS', DEPLOYMENT_ERROR = 'DEPLOYMENT_ERROR', DEPLOYMENT_SUCCEEDED = 'DEPLOYMENT_SUCCEEDED', REMOVAL_PENDING = 'REMOVAL_PENDING', REMOVAL_REQUESTED = 'REMOVAL_REQUESTED', REMOVAL_IN_PROGRESS = 'REMOVAL_IN_PROGRESS', REMOVAL_FAILED = 'REMOVAL_FAILED', REMOVAL_SUCCEEDED = 'REMOVAL_SUCCEEDED', DEPLOYMENT_FAILED = 'DEPLOYMENT_FAILED' }

	export interface DescribeApplicationInstanceDetailsResponse {
		ApplicationInstanceId?: string;
		ApplicationInstanceIdToReplace?: string;
		CreatedTime?: Date;
		DefaultRuntimeContextDevice?: string;
		Description?: string;
		ManifestOverridesPayload?: ManifestOverridesPayload;
		ManifestPayload?: ManifestPayload;
		Name?: string;
	}
	export interface DescribeApplicationInstanceDetailsResponseFormProperties {
		ApplicationInstanceId: FormControl<string | null | undefined>,
		ApplicationInstanceIdToReplace: FormControl<string | null | undefined>,
		CreatedTime: FormControl<Date | null | undefined>,
		DefaultRuntimeContextDevice: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
	}
	export function CreateDescribeApplicationInstanceDetailsResponseFormGroup() {
		return new FormGroup<DescribeApplicationInstanceDetailsResponseFormProperties>({
			ApplicationInstanceId: new FormControl<string | null | undefined>(undefined),
			ApplicationInstanceIdToReplace: new FormControl<string | null | undefined>(undefined),
			CreatedTime: new FormControl<Date | null | undefined>(undefined),
			DefaultRuntimeContextDevice: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Parameter overrides for an application instance. This is a JSON document that has a single key (<code>PayloadData</code>) where the value is an escaped string representation of the overrides document. */
	export interface ManifestOverridesPayload {
		PayloadData?: string;
	}

	/** Parameter overrides for an application instance. This is a JSON document that has a single key (<code>PayloadData</code>) where the value is an escaped string representation of the overrides document. */
	export interface ManifestOverridesPayloadFormProperties {
		PayloadData: FormControl<string | null | undefined>,
	}
	export function CreateManifestOverridesPayloadFormGroup() {
		return new FormGroup<ManifestOverridesPayloadFormProperties>({
			PayloadData: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A application verion's manifest file. This is a JSON document that has a single key (<code>PayloadData</code>) where the value is an escaped string representation of the application manifest (<code>graph.json</code>). This file is located in the <code>graphs</code> folder in your application source. */
	export interface ManifestPayload {
		PayloadData?: string;
	}

	/** A application verion's manifest file. This is a JSON document that has a single key (<code>PayloadData</code>) where the value is an escaped string representation of the application manifest (<code>graph.json</code>). This file is located in the <code>graphs</code> folder in your application source. */
	export interface ManifestPayloadFormProperties {
		PayloadData: FormControl<string | null | undefined>,
	}
	export function CreateManifestPayloadFormGroup() {
		return new FormGroup<ManifestPayloadFormProperties>({
			PayloadData: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeDeviceResponse {
		AlternateSoftwares?: Array<AlternateSoftwareMetadata>;
		Arn?: string;
		Brand?: DeviceBrand;
		CreatedTime?: Date;
		CurrentNetworkingStatus?: NetworkStatus;
		CurrentSoftware?: string;
		Description?: string;
		DeviceAggregatedStatus?: DeviceAggregatedStatus;
		DeviceConnectionStatus?: DeviceConnectionStatus;
		DeviceId?: string;
		LatestAlternateSoftware?: string;
		LatestDeviceJob?: LatestDeviceJob;
		LatestSoftware?: string;
		LeaseExpirationTime?: Date;
		Name?: string;
		NetworkingConfiguration?: NetworkPayload;
		ProvisioningStatus?: DeviceStatus;
		SerialNumber?: string;
		Tags?: TagMap;
		Type?: DeviceType;
	}
	export interface DescribeDeviceResponseFormProperties {
		Arn: FormControl<string | null | undefined>,
		Brand: FormControl<DeviceBrand | null | undefined>,
		CreatedTime: FormControl<Date | null | undefined>,
		CurrentSoftware: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
		DeviceAggregatedStatus: FormControl<DeviceAggregatedStatus | null | undefined>,
		DeviceConnectionStatus: FormControl<DeviceConnectionStatus | null | undefined>,
		DeviceId: FormControl<string | null | undefined>,
		LatestAlternateSoftware: FormControl<string | null | undefined>,
		LatestSoftware: FormControl<string | null | undefined>,
		LeaseExpirationTime: FormControl<Date | null | undefined>,
		Name: FormControl<string | null | undefined>,
		ProvisioningStatus: FormControl<DeviceStatus | null | undefined>,
		SerialNumber: FormControl<string | null | undefined>,
		Type: FormControl<DeviceType | null | undefined>,
	}
	export function CreateDescribeDeviceResponseFormGroup() {
		return new FormGroup<DescribeDeviceResponseFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined),
			Brand: new FormControl<DeviceBrand | null | undefined>(undefined),
			CreatedTime: new FormControl<Date | null | undefined>(undefined),
			CurrentSoftware: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			DeviceAggregatedStatus: new FormControl<DeviceAggregatedStatus | null | undefined>(undefined),
			DeviceConnectionStatus: new FormControl<DeviceConnectionStatus | null | undefined>(undefined),
			DeviceId: new FormControl<string | null | undefined>(undefined),
			LatestAlternateSoftware: new FormControl<string | null | undefined>(undefined),
			LatestSoftware: new FormControl<string | null | undefined>(undefined),
			LeaseExpirationTime: new FormControl<Date | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			ProvisioningStatus: new FormControl<DeviceStatus | null | undefined>(undefined),
			SerialNumber: new FormControl<string | null | undefined>(undefined),
			Type: new FormControl<DeviceType | null | undefined>(undefined),
		});

	}


	/** Details about a beta appliance software update. */
	export interface AlternateSoftwareMetadata {
		Version?: string;
	}

	/** Details about a beta appliance software update. */
	export interface AlternateSoftwareMetadataFormProperties {
		Version: FormControl<string | null | undefined>,
	}
	export function CreateAlternateSoftwareMetadataFormGroup() {
		return new FormGroup<AlternateSoftwareMetadataFormProperties>({
			Version: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum DeviceBrand { AWS_PANORAMA = 'AWS_PANORAMA', LENOVO = 'LENOVO' }


	/** The network status of a device. */
	export interface NetworkStatus {
		Ethernet0Status?: EthernetStatus;
		Ethernet1Status?: EthernetStatus;
		LastUpdatedTime?: Date;
		NtpStatus?: NtpStatus;
	}

	/** The network status of a device. */
	export interface NetworkStatusFormProperties {
		LastUpdatedTime: FormControl<Date | null | undefined>,
	}
	export function CreateNetworkStatusFormGroup() {
		return new FormGroup<NetworkStatusFormProperties>({
			LastUpdatedTime: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/** A device's Ethernet status. */
	export interface EthernetStatus {
		ConnectionStatus?: NetworkConnectionStatus;
		HwAddress?: string;
		IpAddress?: string;
	}

	/** A device's Ethernet status. */
	export interface EthernetStatusFormProperties {
		ConnectionStatus: FormControl<NetworkConnectionStatus | null | undefined>,
		HwAddress: FormControl<string | null | undefined>,
		IpAddress: FormControl<string | null | undefined>,
	}
	export function CreateEthernetStatusFormGroup() {
		return new FormGroup<EthernetStatusFormProperties>({
			ConnectionStatus: new FormControl<NetworkConnectionStatus | null | undefined>(undefined),
			HwAddress: new FormControl<string | null | undefined>(undefined),
			IpAddress: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum NetworkConnectionStatus { CONNECTED = 'CONNECTED', NOT_CONNECTED = 'NOT_CONNECTED', CONNECTING = 'CONNECTING' }


	/** Details about an NTP server connection. */
	export interface NtpStatus {
		ConnectionStatus?: NetworkConnectionStatus;
		IpAddress?: string;
		NtpServerName?: string;
	}

	/** Details about an NTP server connection. */
	export interface NtpStatusFormProperties {
		ConnectionStatus: FormControl<NetworkConnectionStatus | null | undefined>,
		IpAddress: FormControl<string | null | undefined>,
		NtpServerName: FormControl<string | null | undefined>,
	}
	export function CreateNtpStatusFormGroup() {
		return new FormGroup<NtpStatusFormProperties>({
			ConnectionStatus: new FormControl<NetworkConnectionStatus | null | undefined>(undefined),
			IpAddress: new FormControl<string | null | undefined>(undefined),
			NtpServerName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum DeviceAggregatedStatus { ERROR = 'ERROR', AWAITING_PROVISIONING = 'AWAITING_PROVISIONING', PENDING = 'PENDING', FAILED = 'FAILED', DELETING = 'DELETING', ONLINE = 'ONLINE', OFFLINE = 'OFFLINE', LEASE_EXPIRED = 'LEASE_EXPIRED', UPDATE_NEEDED = 'UPDATE_NEEDED', REBOOTING = 'REBOOTING' }

	export enum DeviceConnectionStatus { ONLINE = 'ONLINE', OFFLINE = 'OFFLINE', AWAITING_CREDENTIALS = 'AWAITING_CREDENTIALS', NOT_AVAILABLE = 'NOT_AVAILABLE', ERROR = 'ERROR' }


	/** Returns information about the latest device job. */
	export interface LatestDeviceJob {
		ImageVersion?: string;
		JobType?: JobType;
		Status?: UpdateProgress;
	}

	/** Returns information about the latest device job. */
	export interface LatestDeviceJobFormProperties {
		ImageVersion: FormControl<string | null | undefined>,
		JobType: FormControl<JobType | null | undefined>,
		Status: FormControl<UpdateProgress | null | undefined>,
	}
	export function CreateLatestDeviceJobFormGroup() {
		return new FormGroup<LatestDeviceJobFormProperties>({
			ImageVersion: new FormControl<string | null | undefined>(undefined),
			JobType: new FormControl<JobType | null | undefined>(undefined),
			Status: new FormControl<UpdateProgress | null | undefined>(undefined),
		});

	}

	export enum JobType { OTA = 'OTA', REBOOT = 'REBOOT' }

	export enum UpdateProgress { PENDING = 'PENDING', IN_PROGRESS = 'IN_PROGRESS', VERIFYING = 'VERIFYING', REBOOTING = 'REBOOTING', DOWNLOADING = 'DOWNLOADING', COMPLETED = 'COMPLETED', FAILED = 'FAILED' }


	/** The network configuration for a device. */
	export interface NetworkPayload {
		Ethernet0?: EthernetPayload;
		Ethernet1?: EthernetPayload;
		Ntp?: NtpPayload;
	}

	/** The network configuration for a device. */
	export interface NetworkPayloadFormProperties {
	}
	export function CreateNetworkPayloadFormGroup() {
		return new FormGroup<NetworkPayloadFormProperties>({
		});

	}


	/** A device's network configuration. */
	export interface EthernetPayload {

		/** Required */
		ConnectionType: ConnectionType;
		StaticIpConnectionInfo?: StaticIpConnectionInfo;
	}

	/** A device's network configuration. */
	export interface EthernetPayloadFormProperties {

		/** Required */
		ConnectionType: FormControl<ConnectionType | null | undefined>,
	}
	export function CreateEthernetPayloadFormGroup() {
		return new FormGroup<EthernetPayloadFormProperties>({
			ConnectionType: new FormControl<ConnectionType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum ConnectionType { STATIC_IP = 'STATIC_IP', DHCP = 'DHCP' }


	/** A static IP configuration. */
	export interface StaticIpConnectionInfo {

		/** Required */
		DefaultGateway: string;

		/** Required */
		Dns: Array<string>;

		/** Required */
		IpAddress: string;

		/** Required */
		Mask: string;
	}

	/** A static IP configuration. */
	export interface StaticIpConnectionInfoFormProperties {

		/** Required */
		DefaultGateway: FormControl<string | null | undefined>,

		/** Required */
		IpAddress: FormControl<string | null | undefined>,

		/** Required */
		Mask: FormControl<string | null | undefined>,
	}
	export function CreateStaticIpConnectionInfoFormGroup() {
		return new FormGroup<StaticIpConnectionInfoFormProperties>({
			DefaultGateway: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			IpAddress: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Mask: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Network time protocol (NTP) server settings. Use this option to connect to local NTP servers instead of <code>pool.ntp.org</code>. */
	export interface NtpPayload {

		/** Required */
		NtpServers: Array<string>;
	}

	/** Network time protocol (NTP) server settings. Use this option to connect to local NTP servers instead of <code>pool.ntp.org</code>. */
	export interface NtpPayloadFormProperties {
	}
	export function CreateNtpPayloadFormGroup() {
		return new FormGroup<NtpPayloadFormProperties>({
		});

	}

	export enum DeviceStatus { AWAITING_PROVISIONING = 'AWAITING_PROVISIONING', PENDING = 'PENDING', SUCCEEDED = 'SUCCEEDED', FAILED = 'FAILED', ERROR = 'ERROR', DELETING = 'DELETING' }

	export enum DeviceType { PANORAMA_APPLIANCE_DEVELOPER_KIT = 'PANORAMA_APPLIANCE_DEVELOPER_KIT', PANORAMA_APPLIANCE = 'PANORAMA_APPLIANCE' }

	export interface DescribeDeviceJobResponse {
		CreatedTime?: Date;
		DeviceArn?: string;
		DeviceId?: string;
		DeviceName?: string;
		DeviceType?: DeviceType;
		ImageVersion?: string;
		JobId?: string;
		JobType?: JobType;
		Status?: UpdateProgress;
	}
	export interface DescribeDeviceJobResponseFormProperties {
		CreatedTime: FormControl<Date | null | undefined>,
		DeviceArn: FormControl<string | null | undefined>,
		DeviceId: FormControl<string | null | undefined>,
		DeviceName: FormControl<string | null | undefined>,
		DeviceType: FormControl<DeviceType | null | undefined>,
		ImageVersion: FormControl<string | null | undefined>,
		JobId: FormControl<string | null | undefined>,
		JobType: FormControl<JobType | null | undefined>,
		Status: FormControl<UpdateProgress | null | undefined>,
	}
	export function CreateDescribeDeviceJobResponseFormGroup() {
		return new FormGroup<DescribeDeviceJobResponseFormProperties>({
			CreatedTime: new FormControl<Date | null | undefined>(undefined),
			DeviceArn: new FormControl<string | null | undefined>(undefined),
			DeviceId: new FormControl<string | null | undefined>(undefined),
			DeviceName: new FormControl<string | null | undefined>(undefined),
			DeviceType: new FormControl<DeviceType | null | undefined>(undefined),
			ImageVersion: new FormControl<string | null | undefined>(undefined),
			JobId: new FormControl<string | null | undefined>(undefined),
			JobType: new FormControl<JobType | null | undefined>(undefined),
			Status: new FormControl<UpdateProgress | null | undefined>(undefined),
		});

	}

	export interface DescribeNodeResponse {
		AssetName?: string;

		/** Required */
		Category: NodeCategory;

		/** Required */
		CreatedTime: Date;

		/** Required */
		Description: string;

		/** Required */
		LastUpdatedTime: Date;

		/** Required */
		Name: string;

		/** Required */
		NodeId: string;

		/** Required */
		NodeInterface: NodeInterface;

		/** Required */
		OwnerAccount: string;
		PackageArn?: string;

		/** Required */
		PackageId: string;

		/** Required */
		PackageName: string;

		/** Required */
		PackageVersion: string;

		/** Required */
		PatchVersion: string;
	}
	export interface DescribeNodeResponseFormProperties {
		AssetName: FormControl<string | null | undefined>,

		/** Required */
		Category: FormControl<NodeCategory | null | undefined>,

		/** Required */
		CreatedTime: FormControl<Date | null | undefined>,

		/** Required */
		Description: FormControl<string | null | undefined>,

		/** Required */
		LastUpdatedTime: FormControl<Date | null | undefined>,

		/** Required */
		Name: FormControl<string | null | undefined>,

		/** Required */
		NodeId: FormControl<string | null | undefined>,

		/** Required */
		OwnerAccount: FormControl<string | null | undefined>,
		PackageArn: FormControl<string | null | undefined>,

		/** Required */
		PackageId: FormControl<string | null | undefined>,

		/** Required */
		PackageName: FormControl<string | null | undefined>,

		/** Required */
		PackageVersion: FormControl<string | null | undefined>,

		/** Required */
		PatchVersion: FormControl<string | null | undefined>,
	}
	export function CreateDescribeNodeResponseFormGroup() {
		return new FormGroup<DescribeNodeResponseFormProperties>({
			AssetName: new FormControl<string | null | undefined>(undefined),
			Category: new FormControl<NodeCategory | null | undefined>(undefined, [Validators.required]),
			CreatedTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			Description: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			LastUpdatedTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			NodeId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			OwnerAccount: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			PackageArn: new FormControl<string | null | undefined>(undefined),
			PackageId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			PackageName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			PackageVersion: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			PatchVersion: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum NodeCategory { BUSINESS_LOGIC = 'BUSINESS_LOGIC', ML_MODEL = 'ML_MODEL', MEDIA_SOURCE = 'MEDIA_SOURCE', MEDIA_SINK = 'MEDIA_SINK' }


	/** A node interface. */
	export interface NodeInterface {

		/** Required */
		Inputs: Array<NodeInputPort>;

		/** Required */
		Outputs: Array<NodeOutputPort>;
	}

	/** A node interface. */
	export interface NodeInterfaceFormProperties {
	}
	export function CreateNodeInterfaceFormGroup() {
		return new FormGroup<NodeInterfaceFormProperties>({
		});

	}


	/** A node input port. */
	export interface NodeInputPort {
		DefaultValue?: string;
		Description?: string;
		MaxConnections?: number | null;
		Name?: string;
		Type?: PortType;
	}

	/** A node input port. */
	export interface NodeInputPortFormProperties {
		DefaultValue: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
		MaxConnections: FormControl<number | null | undefined>,
		Name: FormControl<string | null | undefined>,
		Type: FormControl<PortType | null | undefined>,
	}
	export function CreateNodeInputPortFormGroup() {
		return new FormGroup<NodeInputPortFormProperties>({
			DefaultValue: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			MaxConnections: new FormControl<number | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			Type: new FormControl<PortType | null | undefined>(undefined),
		});

	}

	export enum PortType { BOOLEAN = 'BOOLEAN', STRING = 'STRING', INT32 = 'INT32', FLOAT32 = 'FLOAT32', MEDIA = 'MEDIA' }


	/** A node output port. */
	export interface NodeOutputPort {
		Description?: string;
		Name?: string;
		Type?: PortType;
	}

	/** A node output port. */
	export interface NodeOutputPortFormProperties {
		Description: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
		Type: FormControl<PortType | null | undefined>,
	}
	export function CreateNodeOutputPortFormGroup() {
		return new FormGroup<NodeOutputPortFormProperties>({
			Description: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			Type: new FormControl<PortType | null | undefined>(undefined),
		});

	}

	export interface DescribeNodeFromTemplateJobResponse {

		/** Required */
		CreatedTime: Date;

		/** Required */
		JobId: string;
		JobTags?: Array<JobResourceTags>;

		/** Required */
		LastUpdatedTime: Date;
		NodeDescription?: string;

		/** Required */
		NodeName: string;

		/** Required */
		OutputPackageName: string;

		/** Required */
		OutputPackageVersion: string;

		/** Required */
		Status: NodeFromTemplateJobStatus;

		/** Required */
		StatusMessage: string;

		/** Required */
		TemplateParameters: TemplateParametersMap;

		/** Required */
		TemplateType: TemplateType;
	}
	export interface DescribeNodeFromTemplateJobResponseFormProperties {

		/** Required */
		CreatedTime: FormControl<Date | null | undefined>,

		/** Required */
		JobId: FormControl<string | null | undefined>,

		/** Required */
		LastUpdatedTime: FormControl<Date | null | undefined>,
		NodeDescription: FormControl<string | null | undefined>,

		/** Required */
		NodeName: FormControl<string | null | undefined>,

		/** Required */
		OutputPackageName: FormControl<string | null | undefined>,

		/** Required */
		OutputPackageVersion: FormControl<string | null | undefined>,

		/** Required */
		Status: FormControl<NodeFromTemplateJobStatus | null | undefined>,

		/** Required */
		StatusMessage: FormControl<string | null | undefined>,

		/** Required */
		TemplateType: FormControl<TemplateType | null | undefined>,
	}
	export function CreateDescribeNodeFromTemplateJobResponseFormGroup() {
		return new FormGroup<DescribeNodeFromTemplateJobResponseFormProperties>({
			CreatedTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			JobId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			LastUpdatedTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			NodeDescription: new FormControl<string | null | undefined>(undefined),
			NodeName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			OutputPackageName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			OutputPackageVersion: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Status: new FormControl<NodeFromTemplateJobStatus | null | undefined>(undefined, [Validators.required]),
			StatusMessage: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			TemplateType: new FormControl<TemplateType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum NodeFromTemplateJobStatus { PENDING = 'PENDING', SUCCEEDED = 'SUCCEEDED', FAILED = 'FAILED' }

	export interface TemplateParametersMap {
	}
	export interface TemplateParametersMapFormProperties {
	}
	export function CreateTemplateParametersMapFormGroup() {
		return new FormGroup<TemplateParametersMapFormProperties>({
		});

	}

	export enum TemplateType { RTSP_CAMERA_STREAM = 'RTSP_CAMERA_STREAM' }

	export interface DescribePackageResponse {

		/** Required */
		Arn: string;

		/** Required */
		CreatedTime: Date;

		/** Required */
		PackageId: string;

		/** Required */
		PackageName: string;
		ReadAccessPrincipalArns?: Array<string>;

		/** Required */
		StorageLocation: StorageLocation;

		/** Required */
		Tags: TagMap;
		WriteAccessPrincipalArns?: Array<string>;
	}
	export interface DescribePackageResponseFormProperties {

		/** Required */
		Arn: FormControl<string | null | undefined>,

		/** Required */
		CreatedTime: FormControl<Date | null | undefined>,

		/** Required */
		PackageId: FormControl<string | null | undefined>,

		/** Required */
		PackageName: FormControl<string | null | undefined>,
	}
	export function CreateDescribePackageResponseFormGroup() {
		return new FormGroup<DescribePackageResponseFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			CreatedTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			PackageId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			PackageName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DescribePackageImportJobResponse {
		ClientToken?: string;

		/** Required */
		CreatedTime: Date;

		/** Required */
		InputConfig: PackageImportJobInputConfig;

		/** Required */
		JobId: string;
		JobTags?: Array<JobResourceTags>;

		/** Required */
		JobType: PackageImportJobType;

		/** Required */
		LastUpdatedTime: Date;

		/** Required */
		Output: PackageImportJobOutput;

		/** Required */
		OutputConfig: PackageImportJobOutputConfig;

		/** Required */
		Status: NodeFromTemplateJobStatus;

		/** Required */
		StatusMessage: string;
	}
	export interface DescribePackageImportJobResponseFormProperties {
		ClientToken: FormControl<string | null | undefined>,

		/** Required */
		CreatedTime: FormControl<Date | null | undefined>,

		/** Required */
		JobId: FormControl<string | null | undefined>,

		/** Required */
		JobType: FormControl<PackageImportJobType | null | undefined>,

		/** Required */
		LastUpdatedTime: FormControl<Date | null | undefined>,

		/** Required */
		Status: FormControl<NodeFromTemplateJobStatus | null | undefined>,

		/** Required */
		StatusMessage: FormControl<string | null | undefined>,
	}
	export function CreateDescribePackageImportJobResponseFormGroup() {
		return new FormGroup<DescribePackageImportJobResponseFormProperties>({
			ClientToken: new FormControl<string | null | undefined>(undefined),
			CreatedTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			JobId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			JobType: new FormControl<PackageImportJobType | null | undefined>(undefined, [Validators.required]),
			LastUpdatedTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			Status: new FormControl<NodeFromTemplateJobStatus | null | undefined>(undefined, [Validators.required]),
			StatusMessage: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** A configuration for a package import job. */
	export interface PackageImportJobInputConfig {
		PackageVersionInputConfig?: PackageVersionInputConfig;
	}

	/** A configuration for a package import job. */
	export interface PackageImportJobInputConfigFormProperties {
	}
	export function CreatePackageImportJobInputConfigFormGroup() {
		return new FormGroup<PackageImportJobInputConfigFormProperties>({
		});

	}

	export enum PackageImportJobType { NODE_PACKAGE_VERSION = 'NODE_PACKAGE_VERSION', MARKETPLACE_NODE_PACKAGE_VERSION = 'MARKETPLACE_NODE_PACKAGE_VERSION' }


	/** Results of a package import job. */
	export interface PackageImportJobOutput {

		/** Required */
		OutputS3Location: OutPutS3Location;

		/** Required */
		PackageId: string;

		/** Required */
		PackageVersion: string;

		/** Required */
		PatchVersion: string;
	}

	/** Results of a package import job. */
	export interface PackageImportJobOutputFormProperties {

		/** Required */
		PackageId: FormControl<string | null | undefined>,

		/** Required */
		PackageVersion: FormControl<string | null | undefined>,

		/** Required */
		PatchVersion: FormControl<string | null | undefined>,
	}
	export function CreatePackageImportJobOutputFormGroup() {
		return new FormGroup<PackageImportJobOutputFormProperties>({
			PackageId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			PackageVersion: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			PatchVersion: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The location of an output object in Amazon S3. */
	export interface OutPutS3Location {

		/** Required */
		BucketName: string;

		/** Required */
		ObjectKey: string;
	}

	/** The location of an output object in Amazon S3. */
	export interface OutPutS3LocationFormProperties {

		/** Required */
		BucketName: FormControl<string | null | undefined>,

		/** Required */
		ObjectKey: FormControl<string | null | undefined>,
	}
	export function CreateOutPutS3LocationFormGroup() {
		return new FormGroup<OutPutS3LocationFormProperties>({
			BucketName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ObjectKey: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** An output configuration for a package import job. */
	export interface PackageImportJobOutputConfig {
		PackageVersionOutputConfig?: PackageVersionOutputConfig;
	}

	/** An output configuration for a package import job. */
	export interface PackageImportJobOutputConfigFormProperties {
	}
	export function CreatePackageImportJobOutputConfigFormGroup() {
		return new FormGroup<PackageImportJobOutputConfigFormProperties>({
		});

	}

	export interface DescribePackageVersionResponse {

		/** Required */
		IsLatestPatch: boolean;
		OwnerAccount?: string;
		PackageArn?: string;

		/** Required */
		PackageId: string;

		/** Required */
		PackageName: string;

		/** Required */
		PackageVersion: string;

		/** Required */
		PatchVersion: string;
		RegisteredTime?: Date;

		/** Required */
		Status: PackageVersionStatus;
		StatusDescription?: string;
	}
	export interface DescribePackageVersionResponseFormProperties {

		/** Required */
		IsLatestPatch: FormControl<boolean | null | undefined>,
		OwnerAccount: FormControl<string | null | undefined>,
		PackageArn: FormControl<string | null | undefined>,

		/** Required */
		PackageId: FormControl<string | null | undefined>,

		/** Required */
		PackageName: FormControl<string | null | undefined>,

		/** Required */
		PackageVersion: FormControl<string | null | undefined>,

		/** Required */
		PatchVersion: FormControl<string | null | undefined>,
		RegisteredTime: FormControl<Date | null | undefined>,

		/** Required */
		Status: FormControl<PackageVersionStatus | null | undefined>,
		StatusDescription: FormControl<string | null | undefined>,
	}
	export function CreateDescribePackageVersionResponseFormGroup() {
		return new FormGroup<DescribePackageVersionResponseFormProperties>({
			IsLatestPatch: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			OwnerAccount: new FormControl<string | null | undefined>(undefined),
			PackageArn: new FormControl<string | null | undefined>(undefined),
			PackageId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			PackageName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			PackageVersion: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			PatchVersion: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			RegisteredTime: new FormControl<Date | null | undefined>(undefined),
			Status: new FormControl<PackageVersionStatus | null | undefined>(undefined, [Validators.required]),
			StatusDescription: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum PackageVersionStatus { REGISTER_PENDING = 'REGISTER_PENDING', REGISTER_COMPLETED = 'REGISTER_COMPLETED', FAILED = 'FAILED', DELETING = 'DELETING' }

	export interface ListApplicationInstanceDependenciesResponse {
		NextToken?: string;
		PackageObjects?: Array<PackageObject>;
	}
	export interface ListApplicationInstanceDependenciesResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListApplicationInstanceDependenciesResponseFormGroup() {
		return new FormGroup<ListApplicationInstanceDependenciesResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A package object. */
	export interface PackageObject {

		/** Required */
		Name: string;

		/** Required */
		PackageVersion: string;

		/** Required */
		PatchVersion: string;
	}

	/** A package object. */
	export interface PackageObjectFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,

		/** Required */
		PackageVersion: FormControl<string | null | undefined>,

		/** Required */
		PatchVersion: FormControl<string | null | undefined>,
	}
	export function CreatePackageObjectFormGroup() {
		return new FormGroup<PackageObjectFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			PackageVersion: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			PatchVersion: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ListApplicationInstanceNodeInstancesResponse {
		NextToken?: string;
		NodeInstances?: Array<NodeInstance>;
	}
	export interface ListApplicationInstanceNodeInstancesResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListApplicationInstanceNodeInstancesResponseFormGroup() {
		return new FormGroup<ListApplicationInstanceNodeInstancesResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A node instance. */
	export interface NodeInstance {

		/** Required */
		CurrentStatus: NodeInstanceStatus;
		NodeId?: string;

		/** Required */
		NodeInstanceId: string;
		NodeName?: string;
		PackageName?: string;
		PackagePatchVersion?: string;
		PackageVersion?: string;
	}

	/** A node instance. */
	export interface NodeInstanceFormProperties {

		/** Required */
		CurrentStatus: FormControl<NodeInstanceStatus | null | undefined>,
		NodeId: FormControl<string | null | undefined>,

		/** Required */
		NodeInstanceId: FormControl<string | null | undefined>,
		NodeName: FormControl<string | null | undefined>,
		PackageName: FormControl<string | null | undefined>,
		PackagePatchVersion: FormControl<string | null | undefined>,
		PackageVersion: FormControl<string | null | undefined>,
	}
	export function CreateNodeInstanceFormGroup() {
		return new FormGroup<NodeInstanceFormProperties>({
			CurrentStatus: new FormControl<NodeInstanceStatus | null | undefined>(undefined, [Validators.required]),
			NodeId: new FormControl<string | null | undefined>(undefined),
			NodeInstanceId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			NodeName: new FormControl<string | null | undefined>(undefined),
			PackageName: new FormControl<string | null | undefined>(undefined),
			PackagePatchVersion: new FormControl<string | null | undefined>(undefined),
			PackageVersion: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum NodeInstanceStatus { RUNNING = 'RUNNING', ERROR = 'ERROR', NOT_AVAILABLE = 'NOT_AVAILABLE', PAUSED = 'PAUSED' }

	export interface ListApplicationInstancesResponse {
		ApplicationInstances?: Array<ApplicationInstance>;
		NextToken?: string;
	}
	export interface ListApplicationInstancesResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListApplicationInstancesResponseFormGroup() {
		return new FormGroup<ListApplicationInstancesResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An application instance on a device. */
	export interface ApplicationInstance {
		ApplicationInstanceId?: string;
		Arn?: string;
		CreatedTime?: Date;
		DefaultRuntimeContextDevice?: string;
		DefaultRuntimeContextDeviceName?: string;
		Description?: string;
		HealthStatus?: ApplicationInstanceHealthStatus;
		Name?: string;
		RuntimeContextStates?: Array<ReportedRuntimeContextState>;
		Status?: ApplicationInstanceStatus;
		StatusDescription?: string;
		Tags?: TagMap;
	}

	/** An application instance on a device. */
	export interface ApplicationInstanceFormProperties {
		ApplicationInstanceId: FormControl<string | null | undefined>,
		Arn: FormControl<string | null | undefined>,
		CreatedTime: FormControl<Date | null | undefined>,
		DefaultRuntimeContextDevice: FormControl<string | null | undefined>,
		DefaultRuntimeContextDeviceName: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
		HealthStatus: FormControl<ApplicationInstanceHealthStatus | null | undefined>,
		Name: FormControl<string | null | undefined>,
		Status: FormControl<ApplicationInstanceStatus | null | undefined>,
		StatusDescription: FormControl<string | null | undefined>,
	}
	export function CreateApplicationInstanceFormGroup() {
		return new FormGroup<ApplicationInstanceFormProperties>({
			ApplicationInstanceId: new FormControl<string | null | undefined>(undefined),
			Arn: new FormControl<string | null | undefined>(undefined),
			CreatedTime: new FormControl<Date | null | undefined>(undefined),
			DefaultRuntimeContextDevice: new FormControl<string | null | undefined>(undefined),
			DefaultRuntimeContextDeviceName: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			HealthStatus: new FormControl<ApplicationInstanceHealthStatus | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<ApplicationInstanceStatus | null | undefined>(undefined),
			StatusDescription: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListDevicesResponse {

		/** Required */
		Devices: Array<Device>;
		NextToken?: string;
	}
	export interface ListDevicesResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListDevicesResponseFormGroup() {
		return new FormGroup<ListDevicesResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A device. */
	export interface Device {
		Brand?: DeviceBrand;
		CreatedTime?: Date;
		CurrentSoftware?: string;
		Description?: string;
		DeviceAggregatedStatus?: DeviceAggregatedStatus;
		DeviceId?: string;
		LastUpdatedTime?: Date;
		LatestDeviceJob?: LatestDeviceJob;
		LeaseExpirationTime?: Date;
		Name?: string;
		ProvisioningStatus?: DeviceStatus;
		Tags?: TagMap;
		Type?: DeviceType;
	}

	/** A device. */
	export interface DeviceFormProperties {
		Brand: FormControl<DeviceBrand | null | undefined>,
		CreatedTime: FormControl<Date | null | undefined>,
		CurrentSoftware: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
		DeviceAggregatedStatus: FormControl<DeviceAggregatedStatus | null | undefined>,
		DeviceId: FormControl<string | null | undefined>,
		LastUpdatedTime: FormControl<Date | null | undefined>,
		LeaseExpirationTime: FormControl<Date | null | undefined>,
		Name: FormControl<string | null | undefined>,
		ProvisioningStatus: FormControl<DeviceStatus | null | undefined>,
		Type: FormControl<DeviceType | null | undefined>,
	}
	export function CreateDeviceFormGroup() {
		return new FormGroup<DeviceFormProperties>({
			Brand: new FormControl<DeviceBrand | null | undefined>(undefined),
			CreatedTime: new FormControl<Date | null | undefined>(undefined),
			CurrentSoftware: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			DeviceAggregatedStatus: new FormControl<DeviceAggregatedStatus | null | undefined>(undefined),
			DeviceId: new FormControl<string | null | undefined>(undefined),
			LastUpdatedTime: new FormControl<Date | null | undefined>(undefined),
			LeaseExpirationTime: new FormControl<Date | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			ProvisioningStatus: new FormControl<DeviceStatus | null | undefined>(undefined),
			Type: new FormControl<DeviceType | null | undefined>(undefined),
		});

	}

	export interface ListDevicesJobsResponse {
		DeviceJobs?: Array<DeviceJob>;
		NextToken?: string;
	}
	export interface ListDevicesJobsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListDevicesJobsResponseFormGroup() {
		return new FormGroup<ListDevicesJobsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A job that runs on a device. */
	export interface DeviceJob {
		CreatedTime?: Date;
		DeviceId?: string;
		DeviceName?: string;
		JobId?: string;
		JobType?: JobType;
	}

	/** A job that runs on a device. */
	export interface DeviceJobFormProperties {
		CreatedTime: FormControl<Date | null | undefined>,
		DeviceId: FormControl<string | null | undefined>,
		DeviceName: FormControl<string | null | undefined>,
		JobId: FormControl<string | null | undefined>,
		JobType: FormControl<JobType | null | undefined>,
	}
	export function CreateDeviceJobFormGroup() {
		return new FormGroup<DeviceJobFormProperties>({
			CreatedTime: new FormControl<Date | null | undefined>(undefined),
			DeviceId: new FormControl<string | null | undefined>(undefined),
			DeviceName: new FormControl<string | null | undefined>(undefined),
			JobId: new FormControl<string | null | undefined>(undefined),
			JobType: new FormControl<JobType | null | undefined>(undefined),
		});

	}

	export interface ListNodeFromTemplateJobsResponse {
		NextToken?: string;

		/** Required */
		NodeFromTemplateJobs: Array<NodeFromTemplateJob>;
	}
	export interface ListNodeFromTemplateJobsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListNodeFromTemplateJobsResponseFormGroup() {
		return new FormGroup<ListNodeFromTemplateJobsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A job to create a camera stream node. */
	export interface NodeFromTemplateJob {
		CreatedTime?: Date;
		JobId?: string;
		NodeName?: string;
		Status?: NodeFromTemplateJobStatus;
		StatusMessage?: string;
		TemplateType?: TemplateType;
	}

	/** A job to create a camera stream node. */
	export interface NodeFromTemplateJobFormProperties {
		CreatedTime: FormControl<Date | null | undefined>,
		JobId: FormControl<string | null | undefined>,
		NodeName: FormControl<string | null | undefined>,
		Status: FormControl<NodeFromTemplateJobStatus | null | undefined>,
		StatusMessage: FormControl<string | null | undefined>,
		TemplateType: FormControl<TemplateType | null | undefined>,
	}
	export function CreateNodeFromTemplateJobFormGroup() {
		return new FormGroup<NodeFromTemplateJobFormProperties>({
			CreatedTime: new FormControl<Date | null | undefined>(undefined),
			JobId: new FormControl<string | null | undefined>(undefined),
			NodeName: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<NodeFromTemplateJobStatus | null | undefined>(undefined),
			StatusMessage: new FormControl<string | null | undefined>(undefined),
			TemplateType: new FormControl<TemplateType | null | undefined>(undefined),
		});

	}

	export interface ListNodesResponse {
		NextToken?: string;
		Nodes?: Array<Node>;
	}
	export interface ListNodesResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListNodesResponseFormGroup() {
		return new FormGroup<ListNodesResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An application node that represents a camera stream, a model, code, or output. */
	export interface Node {

		/** Required */
		Category: NodeCategory;

		/** Required */
		CreatedTime: Date;
		Description?: string;

		/** Required */
		Name: string;

		/** Required */
		NodeId: string;
		OwnerAccount?: string;
		PackageArn?: string;

		/** Required */
		PackageId: string;

		/** Required */
		PackageName: string;

		/** Required */
		PackageVersion: string;

		/** Required */
		PatchVersion: string;
	}

	/** An application node that represents a camera stream, a model, code, or output. */
	export interface NodeFormProperties {

		/** Required */
		Category: FormControl<NodeCategory | null | undefined>,

		/** Required */
		CreatedTime: FormControl<Date | null | undefined>,
		Description: FormControl<string | null | undefined>,

		/** Required */
		Name: FormControl<string | null | undefined>,

		/** Required */
		NodeId: FormControl<string | null | undefined>,
		OwnerAccount: FormControl<string | null | undefined>,
		PackageArn: FormControl<string | null | undefined>,

		/** Required */
		PackageId: FormControl<string | null | undefined>,

		/** Required */
		PackageName: FormControl<string | null | undefined>,

		/** Required */
		PackageVersion: FormControl<string | null | undefined>,

		/** Required */
		PatchVersion: FormControl<string | null | undefined>,
	}
	export function CreateNodeFormGroup() {
		return new FormGroup<NodeFormProperties>({
			Category: new FormControl<NodeCategory | null | undefined>(undefined, [Validators.required]),
			CreatedTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			Description: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			NodeId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			OwnerAccount: new FormControl<string | null | undefined>(undefined),
			PackageArn: new FormControl<string | null | undefined>(undefined),
			PackageId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			PackageName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			PackageVersion: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			PatchVersion: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ListPackageImportJobsResponse {
		NextToken?: string;

		/** Required */
		PackageImportJobs: Array<PackageImportJob>;
	}
	export interface ListPackageImportJobsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListPackageImportJobsResponseFormGroup() {
		return new FormGroup<ListPackageImportJobsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A job to import a package version. */
	export interface PackageImportJob {
		CreatedTime?: Date;
		JobId?: string;
		JobType?: PackageImportJobType;
		LastUpdatedTime?: Date;
		Status?: NodeFromTemplateJobStatus;
		StatusMessage?: string;
	}

	/** A job to import a package version. */
	export interface PackageImportJobFormProperties {
		CreatedTime: FormControl<Date | null | undefined>,
		JobId: FormControl<string | null | undefined>,
		JobType: FormControl<PackageImportJobType | null | undefined>,
		LastUpdatedTime: FormControl<Date | null | undefined>,
		Status: FormControl<NodeFromTemplateJobStatus | null | undefined>,
		StatusMessage: FormControl<string | null | undefined>,
	}
	export function CreatePackageImportJobFormGroup() {
		return new FormGroup<PackageImportJobFormProperties>({
			CreatedTime: new FormControl<Date | null | undefined>(undefined),
			JobId: new FormControl<string | null | undefined>(undefined),
			JobType: new FormControl<PackageImportJobType | null | undefined>(undefined),
			LastUpdatedTime: new FormControl<Date | null | undefined>(undefined),
			Status: new FormControl<NodeFromTemplateJobStatus | null | undefined>(undefined),
			StatusMessage: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListPackagesResponse {
		NextToken?: string;
		Packages?: Array<PackageListItem>;
	}
	export interface ListPackagesResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListPackagesResponseFormGroup() {
		return new FormGroup<ListPackagesResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A package summary. */
	export interface PackageListItem {
		Arn?: string;
		CreatedTime?: Date;
		PackageId?: string;
		PackageName?: string;
		Tags?: TagMap;
	}

	/** A package summary. */
	export interface PackageListItemFormProperties {
		Arn: FormControl<string | null | undefined>,
		CreatedTime: FormControl<Date | null | undefined>,
		PackageId: FormControl<string | null | undefined>,
		PackageName: FormControl<string | null | undefined>,
	}
	export function CreatePackageListItemFormGroup() {
		return new FormGroup<PackageListItemFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined),
			CreatedTime: new FormControl<Date | null | undefined>(undefined),
			PackageId: new FormControl<string | null | undefined>(undefined),
			PackageName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListTagsForResourceResponse {
		Tags?: TagMap;
	}
	export interface ListTagsForResourceResponseFormProperties {
	}
	export function CreateListTagsForResourceResponseFormGroup() {
		return new FormGroup<ListTagsForResourceResponseFormProperties>({
		});

	}

	export interface ProvisionDeviceResponse {

		/** Required */
		Arn: string;
		Certificates?: string;
		DeviceId?: string;
		IotThingName?: string;

		/** Required */
		Status: DeviceStatus;
	}
	export interface ProvisionDeviceResponseFormProperties {

		/** Required */
		Arn: FormControl<string | null | undefined>,
		Certificates: FormControl<string | null | undefined>,
		DeviceId: FormControl<string | null | undefined>,
		IotThingName: FormControl<string | null | undefined>,

		/** Required */
		Status: FormControl<DeviceStatus | null | undefined>,
	}
	export function CreateProvisionDeviceResponseFormGroup() {
		return new FormGroup<ProvisionDeviceResponseFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Certificates: new FormControl<string | null | undefined>(undefined),
			DeviceId: new FormControl<string | null | undefined>(undefined),
			IotThingName: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<DeviceStatus | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface RegisterPackageVersionResponse {
	}
	export interface RegisterPackageVersionResponseFormProperties {
	}
	export function CreateRegisterPackageVersionResponseFormGroup() {
		return new FormGroup<RegisterPackageVersionResponseFormProperties>({
		});

	}

	export interface RemoveApplicationInstanceResponse {
	}
	export interface RemoveApplicationInstanceResponseFormProperties {
	}
	export function CreateRemoveApplicationInstanceResponseFormGroup() {
		return new FormGroup<RemoveApplicationInstanceResponseFormProperties>({
		});

	}

	export interface SignalApplicationInstanceNodeInstancesResponse {

		/** Required */
		ApplicationInstanceId: string;
	}
	export interface SignalApplicationInstanceNodeInstancesResponseFormProperties {

		/** Required */
		ApplicationInstanceId: FormControl<string | null | undefined>,
	}
	export function CreateSignalApplicationInstanceNodeInstancesResponseFormGroup() {
		return new FormGroup<SignalApplicationInstanceNodeInstancesResponseFormProperties>({
			ApplicationInstanceId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** A signal to a camera node to start or stop processing video. */
	export interface NodeSignal {

		/** Required */
		NodeInstanceId: string;

		/** Required */
		Signal: NodeSignalValue;
	}

	/** A signal to a camera node to start or stop processing video. */
	export interface NodeSignalFormProperties {

		/** Required */
		NodeInstanceId: FormControl<string | null | undefined>,

		/** Required */
		Signal: FormControl<NodeSignalValue | null | undefined>,
	}
	export function CreateNodeSignalFormGroup() {
		return new FormGroup<NodeSignalFormProperties>({
			NodeInstanceId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Signal: new FormControl<NodeSignalValue | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum NodeSignalValue { PAUSE = 'PAUSE', RESUME = 'RESUME' }

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

	export interface UpdateDeviceMetadataResponse {
		DeviceId?: string;
	}
	export interface UpdateDeviceMetadataResponseFormProperties {
		DeviceId: FormControl<string | null | undefined>,
	}
	export function CreateUpdateDeviceMetadataResponseFormGroup() {
		return new FormGroup<UpdateDeviceMetadataResponseFormProperties>({
			DeviceId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateApplicationInstanceRequest {
		ApplicationInstanceIdToReplace?: string;

		/** Required */
		DefaultRuntimeContextDevice: string;
		Description?: string;
		ManifestOverridesPayload?: ManifestOverridesPayload;

		/** Required */
		ManifestPayload: ManifestPayload;
		Name?: string;
		RuntimeRoleArn?: string;
		Tags?: TagMap;
	}
	export interface CreateApplicationInstanceRequestFormProperties {
		ApplicationInstanceIdToReplace: FormControl<string | null | undefined>,

		/** Required */
		DefaultRuntimeContextDevice: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
		RuntimeRoleArn: FormControl<string | null | undefined>,
	}
	export function CreateCreateApplicationInstanceRequestFormGroup() {
		return new FormGroup<CreateApplicationInstanceRequestFormProperties>({
			ApplicationInstanceIdToReplace: new FormControl<string | null | undefined>(undefined),
			DefaultRuntimeContextDevice: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Description: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			RuntimeRoleArn: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A job's configuration. */
	export interface DeviceJobConfig {
		OTAJobConfig?: OTAJobConfig;
	}

	/** A job's configuration. */
	export interface DeviceJobConfigFormProperties {
	}
	export function CreateDeviceJobConfigFormGroup() {
		return new FormGroup<DeviceJobConfigFormProperties>({
		});

	}

	export interface CreateJobForDevicesRequest {

		/** Required */
		DeviceIds: Array<string>;
		DeviceJobConfig?: DeviceJobConfig;

		/** Required */
		JobType: JobType;
	}
	export interface CreateJobForDevicesRequestFormProperties {

		/** Required */
		JobType: FormControl<JobType | null | undefined>,
	}
	export function CreateCreateJobForDevicesRequestFormGroup() {
		return new FormGroup<CreateJobForDevicesRequestFormProperties>({
			JobType: new FormControl<JobType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateNodeFromTemplateJobRequest {
		JobTags?: Array<JobResourceTags>;
		NodeDescription?: string;

		/** Required */
		NodeName: string;

		/** Required */
		OutputPackageName: string;

		/** Required */
		OutputPackageVersion: string;

		/** Required */
		TemplateParameters: TemplateParametersMap;

		/** Required */
		TemplateType: TemplateType;
	}
	export interface CreateNodeFromTemplateJobRequestFormProperties {
		NodeDescription: FormControl<string | null | undefined>,

		/** Required */
		NodeName: FormControl<string | null | undefined>,

		/** Required */
		OutputPackageName: FormControl<string | null | undefined>,

		/** Required */
		OutputPackageVersion: FormControl<string | null | undefined>,

		/** Required */
		TemplateType: FormControl<TemplateType | null | undefined>,
	}
	export function CreateCreateNodeFromTemplateJobRequestFormGroup() {
		return new FormGroup<CreateNodeFromTemplateJobRequestFormProperties>({
			NodeDescription: new FormControl<string | null | undefined>(undefined),
			NodeName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			OutputPackageName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			OutputPackageVersion: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			TemplateType: new FormControl<TemplateType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreatePackageImportJobRequest {

		/** Required */
		ClientToken: string;

		/** Required */
		InputConfig: PackageImportJobInputConfig;
		JobTags?: Array<JobResourceTags>;

		/** Required */
		JobType: PackageImportJobType;

		/** Required */
		OutputConfig: PackageImportJobOutputConfig;
	}
	export interface CreatePackageImportJobRequestFormProperties {

		/** Required */
		ClientToken: FormControl<string | null | undefined>,

		/** Required */
		JobType: FormControl<PackageImportJobType | null | undefined>,
	}
	export function CreateCreatePackageImportJobRequestFormGroup() {
		return new FormGroup<CreatePackageImportJobRequestFormProperties>({
			ClientToken: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			JobType: new FormControl<PackageImportJobType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreatePackageRequest {

		/** Required */
		PackageName: string;
		Tags?: TagMap;
	}
	export interface CreatePackageRequestFormProperties {

		/** Required */
		PackageName: FormControl<string | null | undefined>,
	}
	export function CreateCreatePackageRequestFormGroup() {
		return new FormGroup<CreatePackageRequestFormProperties>({
			PackageName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeleteDeviceRequest {
	}
	export interface DeleteDeviceRequestFormProperties {
	}
	export function CreateDeleteDeviceRequestFormGroup() {
		return new FormGroup<DeleteDeviceRequestFormProperties>({
		});

	}

	export interface DeletePackageRequest {
	}
	export interface DeletePackageRequestFormProperties {
	}
	export function CreateDeletePackageRequestFormGroup() {
		return new FormGroup<DeletePackageRequestFormProperties>({
		});

	}

	export interface DeregisterPackageVersionRequest {
	}
	export interface DeregisterPackageVersionRequestFormProperties {
	}
	export function CreateDeregisterPackageVersionRequestFormGroup() {
		return new FormGroup<DeregisterPackageVersionRequestFormProperties>({
		});

	}

	export interface DescribeApplicationInstanceDetailsRequest {
	}
	export interface DescribeApplicationInstanceDetailsRequestFormProperties {
	}
	export function CreateDescribeApplicationInstanceDetailsRequestFormGroup() {
		return new FormGroup<DescribeApplicationInstanceDetailsRequestFormProperties>({
		});

	}

	export interface DescribeApplicationInstanceRequest {
	}
	export interface DescribeApplicationInstanceRequestFormProperties {
	}
	export function CreateDescribeApplicationInstanceRequestFormGroup() {
		return new FormGroup<DescribeApplicationInstanceRequestFormProperties>({
		});

	}

	export interface DescribeDeviceJobRequest {
	}
	export interface DescribeDeviceJobRequestFormProperties {
	}
	export function CreateDescribeDeviceJobRequestFormGroup() {
		return new FormGroup<DescribeDeviceJobRequestFormProperties>({
		});

	}

	export interface DescribeDeviceRequest {
	}
	export interface DescribeDeviceRequestFormProperties {
	}
	export function CreateDescribeDeviceRequestFormGroup() {
		return new FormGroup<DescribeDeviceRequestFormProperties>({
		});

	}

	export interface DescribeNodeFromTemplateJobRequest {
	}
	export interface DescribeNodeFromTemplateJobRequestFormProperties {
	}
	export function CreateDescribeNodeFromTemplateJobRequestFormGroup() {
		return new FormGroup<DescribeNodeFromTemplateJobRequestFormProperties>({
		});

	}

	export interface DescribeNodeRequest {
	}
	export interface DescribeNodeRequestFormProperties {
	}
	export function CreateDescribeNodeRequestFormGroup() {
		return new FormGroup<DescribeNodeRequestFormProperties>({
		});

	}

	export interface DescribePackageImportJobRequest {
	}
	export interface DescribePackageImportJobRequestFormProperties {
	}
	export function CreateDescribePackageImportJobRequestFormGroup() {
		return new FormGroup<DescribePackageImportJobRequestFormProperties>({
		});

	}

	export enum PackageImportJobStatus { PENDING = 'PENDING', SUCCEEDED = 'SUCCEEDED', FAILED = 'FAILED' }

	export interface DescribePackageRequest {
	}
	export interface DescribePackageRequestFormProperties {
	}
	export function CreateDescribePackageRequestFormGroup() {
		return new FormGroup<DescribePackageRequestFormProperties>({
		});

	}

	export interface DescribePackageVersionRequest {
	}
	export interface DescribePackageVersionRequestFormProperties {
	}
	export function CreateDescribePackageVersionRequestFormGroup() {
		return new FormGroup<DescribePackageVersionRequestFormProperties>({
		});

	}

	export interface ListApplicationInstanceDependenciesRequest {
	}
	export interface ListApplicationInstanceDependenciesRequestFormProperties {
	}
	export function CreateListApplicationInstanceDependenciesRequestFormGroup() {
		return new FormGroup<ListApplicationInstanceDependenciesRequestFormProperties>({
		});

	}

	export interface ListApplicationInstanceNodeInstancesRequest {
	}
	export interface ListApplicationInstanceNodeInstancesRequestFormProperties {
	}
	export function CreateListApplicationInstanceNodeInstancesRequestFormGroup() {
		return new FormGroup<ListApplicationInstanceNodeInstancesRequestFormProperties>({
		});

	}

	export enum StatusFilter { DEPLOYMENT_SUCCEEDED = 'DEPLOYMENT_SUCCEEDED', DEPLOYMENT_ERROR = 'DEPLOYMENT_ERROR', REMOVAL_SUCCEEDED = 'REMOVAL_SUCCEEDED', REMOVAL_FAILED = 'REMOVAL_FAILED', PROCESSING_DEPLOYMENT = 'PROCESSING_DEPLOYMENT', PROCESSING_REMOVAL = 'PROCESSING_REMOVAL', DEPLOYMENT_FAILED = 'DEPLOYMENT_FAILED' }

	export interface ListApplicationInstancesRequest {
	}
	export interface ListApplicationInstancesRequestFormProperties {
	}
	export function CreateListApplicationInstancesRequestFormGroup() {
		return new FormGroup<ListApplicationInstancesRequestFormProperties>({
		});

	}

	export interface ListDevicesJobsRequest {
	}
	export interface ListDevicesJobsRequestFormProperties {
	}
	export function CreateListDevicesJobsRequestFormGroup() {
		return new FormGroup<ListDevicesJobsRequestFormProperties>({
		});

	}

	export enum ListDevicesSortBy { DEVICE_ID = 'DEVICE_ID', CREATED_TIME = 'CREATED_TIME', NAME = 'NAME', DEVICE_AGGREGATED_STATUS = 'DEVICE_AGGREGATED_STATUS' }

	export enum SortOrder { ASCENDING = 'ASCENDING', DESCENDING = 'DESCENDING' }

	export interface ListDevicesRequest {
	}
	export interface ListDevicesRequestFormProperties {
	}
	export function CreateListDevicesRequestFormGroup() {
		return new FormGroup<ListDevicesRequestFormProperties>({
		});

	}

	export interface ListNodeFromTemplateJobsRequest {
	}
	export interface ListNodeFromTemplateJobsRequestFormProperties {
	}
	export function CreateListNodeFromTemplateJobsRequestFormGroup() {
		return new FormGroup<ListNodeFromTemplateJobsRequestFormProperties>({
		});

	}

	export interface ListNodesRequest {
	}
	export interface ListNodesRequestFormProperties {
	}
	export function CreateListNodesRequestFormGroup() {
		return new FormGroup<ListNodesRequestFormProperties>({
		});

	}

	export interface ListPackageImportJobsRequest {
	}
	export interface ListPackageImportJobsRequestFormProperties {
	}
	export function CreateListPackageImportJobsRequestFormGroup() {
		return new FormGroup<ListPackageImportJobsRequestFormProperties>({
		});

	}

	export interface ListPackagesRequest {
	}
	export interface ListPackagesRequestFormProperties {
	}
	export function CreateListPackagesRequestFormGroup() {
		return new FormGroup<ListPackagesRequestFormProperties>({
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

	export interface ProvisionDeviceRequest {
		Description?: string;

		/** Required */
		Name: string;
		NetworkingConfiguration?: NetworkPayload;
		Tags?: TagMap;
	}
	export interface ProvisionDeviceRequestFormProperties {
		Description: FormControl<string | null | undefined>,

		/** Required */
		Name: FormControl<string | null | undefined>,
	}
	export function CreateProvisionDeviceRequestFormGroup() {
		return new FormGroup<ProvisionDeviceRequestFormProperties>({
			Description: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface RegisterPackageVersionRequest {
		MarkLatest?: boolean | null;
		OwnerAccount?: string;
	}
	export interface RegisterPackageVersionRequestFormProperties {
		MarkLatest: FormControl<boolean | null | undefined>,
		OwnerAccount: FormControl<string | null | undefined>,
	}
	export function CreateRegisterPackageVersionRequestFormGroup() {
		return new FormGroup<RegisterPackageVersionRequestFormProperties>({
			MarkLatest: new FormControl<boolean | null | undefined>(undefined),
			OwnerAccount: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface RemoveApplicationInstanceRequest {
	}
	export interface RemoveApplicationInstanceRequestFormProperties {
	}
	export function CreateRemoveApplicationInstanceRequestFormGroup() {
		return new FormGroup<RemoveApplicationInstanceRequestFormProperties>({
		});

	}

	export interface SignalApplicationInstanceNodeInstancesRequest {

		/** Required */
		NodeSignals: Array<NodeSignal>;
	}
	export interface SignalApplicationInstanceNodeInstancesRequestFormProperties {
	}
	export function CreateSignalApplicationInstanceNodeInstancesRequestFormGroup() {
		return new FormGroup<SignalApplicationInstanceNodeInstancesRequestFormProperties>({
		});

	}

	export interface TagResourceRequest {

		/** Required */
		Tags: TagMap;
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

	export interface UpdateDeviceMetadataRequest {
		Description?: string;
	}
	export interface UpdateDeviceMetadataRequestFormProperties {
		Description: FormControl<string | null | undefined>,
	}
	export function CreateUpdateDeviceMetadataRequestFormGroup() {
		return new FormGroup<UpdateDeviceMetadataRequestFormProperties>({
			Description: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Creates an application instance and deploys it to a device.
		 * Post application-instances
		 * @return {CreateApplicationInstanceResponse} Success
		 */
		CreateApplicationInstance(requestBody: CreateApplicationInstancePostBody): Observable<CreateApplicationInstanceResponse> {
			return this.http.post<CreateApplicationInstanceResponse>(this.baseUri + 'application-instances', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns a list of application instances.
		 * Get application-instances
		 * @param {string} deviceId The application instances' device ID.
		 *     Min length: 1    Max length: 255
		 * @param {number} maxResults The maximum number of application instances to return in one page of results.
		 *     Minimum: 0    Maximum: 25
		 * @param {string} nextToken Specify the pagination token from a previous request to retrieve the next page of results.
		 *     Min length: 1    Max length: 4096
		 * @param {StatusFilter} statusFilter Only include instances with a specific status.
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListApplicationInstancesResponse} Success
		 */
		ListApplicationInstances(deviceId: string | null | undefined, maxResults: number | null | undefined, nextToken: string | null | undefined, statusFilter: StatusFilter | null | undefined, MaxResults: string | null | undefined, NextToken: string | null | undefined): Observable<ListApplicationInstancesResponse> {
			return this.http.get<ListApplicationInstancesResponse>(this.baseUri + 'application-instances?deviceId=' + (deviceId == null ? '' : encodeURIComponent(deviceId)) + '&maxResults=' + maxResults + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&statusFilter=' + statusFilter + '&MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), {});
		}

		/**
		 * Creates a job to run on a device. A job can update a device's software or reboot it.
		 * Post jobs
		 * @return {CreateJobForDevicesResponse} Success
		 */
		CreateJobForDevices(requestBody: CreateJobForDevicesPostBody): Observable<CreateJobForDevicesResponse> {
			return this.http.post<CreateJobForDevicesResponse>(this.baseUri + 'jobs', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns a list of jobs.
		 * Get jobs
		 * @param {string} DeviceId Filter results by the job's target device ID.
		 *     Min length: 1    Max length: 255
		 * @param {number} MaxResults The maximum number of device jobs to return in one page of results.
		 *     Minimum: 0    Maximum: 25
		 * @param {string} NextToken Specify the pagination token from a previous request to retrieve the next page of results.
		 *     Min length: 1    Max length: 4096
		 * @return {ListDevicesJobsResponse} Success
		 */
		ListDevicesJobs(DeviceId: string | null | undefined, MaxResults: number | null | undefined, NextToken: string | null | undefined): Observable<ListDevicesJobsResponse> {
			return this.http.get<ListDevicesJobsResponse>(this.baseUri + 'jobs?DeviceId=' + (DeviceId == null ? '' : encodeURIComponent(DeviceId)) + '&MaxResults=' + MaxResults + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), {});
		}

		/**
		 * Creates a camera stream node.
		 * Post packages/template-job
		 * @return {CreateNodeFromTemplateJobResponse} Success
		 */
		CreateNodeFromTemplateJob(requestBody: CreateNodeFromTemplateJobPostBody): Observable<CreateNodeFromTemplateJobResponse> {
			return this.http.post<CreateNodeFromTemplateJobResponse>(this.baseUri + 'packages/template-job', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns a list of camera stream node jobs.
		 * Get packages/template-job
		 * @param {number} MaxResults The maximum number of node from template jobs to return in one page of results.
		 *     Minimum: 0    Maximum: 25
		 * @param {string} NextToken Specify the pagination token from a previous request to retrieve the next page of results.
		 *     Min length: 1    Max length: 4096
		 * @return {ListNodeFromTemplateJobsResponse} Success
		 */
		ListNodeFromTemplateJobs(MaxResults: number | null | undefined, NextToken: string | null | undefined): Observable<ListNodeFromTemplateJobsResponse> {
			return this.http.get<ListNodeFromTemplateJobsResponse>(this.baseUri + 'packages/template-job?MaxResults=' + MaxResults + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), {});
		}

		/**
		 * Creates a package and storage location in an Amazon S3 access point.
		 * Post packages
		 * @return {CreatePackageResponse} Success
		 */
		CreatePackage(requestBody: CreatePackagePostBody): Observable<CreatePackageResponse> {
			return this.http.post<CreatePackageResponse>(this.baseUri + 'packages', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns a list of packages.
		 * Get packages
		 * @param {number} maxResults The maximum number of packages to return in one page of results.
		 *     Minimum: 0    Maximum: 25
		 * @param {string} nextToken Specify the pagination token from a previous request to retrieve the next page of results.
		 *     Min length: 1    Max length: 4096
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListPackagesResponse} Success
		 */
		ListPackages(maxResults: number | null | undefined, nextToken: string | null | undefined, MaxResults: string | null | undefined, NextToken: string | null | undefined): Observable<ListPackagesResponse> {
			return this.http.get<ListPackagesResponse>(this.baseUri + 'packages?maxResults=' + maxResults + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), {});
		}

		/**
		 * Imports a node package.
		 * Post packages/import-jobs
		 * @return {CreatePackageImportJobResponse} Success
		 */
		CreatePackageImportJob(requestBody: CreatePackageImportJobPostBody): Observable<CreatePackageImportJobResponse> {
			return this.http.post<CreatePackageImportJobResponse>(this.baseUri + 'packages/import-jobs', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns a list of package import jobs.
		 * Get packages/import-jobs
		 * @param {number} MaxResults The maximum number of package import jobs to return in one page of results.
		 *     Minimum: 0    Maximum: 25
		 * @param {string} NextToken Specify the pagination token from a previous request to retrieve the next page of results.
		 *     Min length: 1    Max length: 4096
		 * @return {ListPackageImportJobsResponse} Success
		 */
		ListPackageImportJobs(MaxResults: number | null | undefined, NextToken: string | null | undefined): Observable<ListPackageImportJobsResponse> {
			return this.http.get<ListPackageImportJobsResponse>(this.baseUri + 'packages/import-jobs?MaxResults=' + MaxResults + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), {});
		}

		/**
		 * Deletes a device.
		 * Delete devices/{DeviceId}
		 * @param {string} DeviceId The device's ID.
		 *     Min length: 1    Max length: 255
		 * @return {DeleteDeviceResponse} Success
		 */
		DeleteDevice(DeviceId: string): Observable<DeleteDeviceResponse> {
			return this.http.delete<DeleteDeviceResponse>(this.baseUri + 'devices/' + (DeviceId == null ? '' : encodeURIComponent(DeviceId)), {});
		}

		/**
		 * Returns information about a device.
		 * Get devices/{DeviceId}
		 * @param {string} DeviceId The device's ID.
		 *     Min length: 1    Max length: 255
		 * @return {DescribeDeviceResponse} Success
		 */
		DescribeDevice(DeviceId: string): Observable<DescribeDeviceResponse> {
			return this.http.get<DescribeDeviceResponse>(this.baseUri + 'devices/' + (DeviceId == null ? '' : encodeURIComponent(DeviceId)), {});
		}

		/**
		 * Updates a device's metadata.
		 * Put devices/{DeviceId}
		 * @param {string} DeviceId The device's ID.
		 *     Min length: 1    Max length: 255
		 * @return {UpdateDeviceMetadataResponse} Success
		 */
		UpdateDeviceMetadata(DeviceId: string, requestBody: UpdateDeviceMetadataPutBody): Observable<UpdateDeviceMetadataResponse> {
			return this.http.put<UpdateDeviceMetadataResponse>(this.baseUri + 'devices/' + (DeviceId == null ? '' : encodeURIComponent(DeviceId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Deletes a package.</p> <note> <p>To delete a package, you need permission to call <code>s3:DeleteObject</code> in addition to permissions for the AWS Panorama API.</p> </note>
		 * Delete packages/{PackageId}
		 * @param {boolean} ForceDelete Delete the package even if it has artifacts stored in its access point. Deletes the package's artifacts from Amazon S3.
		 * @param {string} PackageId The package's ID.
		 *     Min length: 1    Max length: 255
		 * @return {DeletePackageResponse} Success
		 */
		DeletePackage(ForceDelete: boolean | null | undefined, PackageId: string): Observable<DeletePackageResponse> {
			return this.http.delete<DeletePackageResponse>(this.baseUri + 'packages/' + (PackageId == null ? '' : encodeURIComponent(PackageId)) + '?ForceDelete=' + ForceDelete, {});
		}

		/**
		 * Deregisters a package version.
		 * Delete packages/{PackageId}/versions/{PackageVersion}/patch/{PatchVersion}
		 * @param {string} OwnerAccount An owner account.
		 *     Min length: 1    Max length: 12
		 * @param {string} PackageId A package ID.
		 *     Min length: 1    Max length: 255
		 * @param {string} PackageVersion A package version.
		 *     Min length: 1    Max length: 255
		 * @param {string} PatchVersion A patch version.
		 *     Min length: 1    Max length: 255
		 * @param {string} UpdatedLatestPatchVersion If the version was marked latest, the new version to maker as latest.
		 *     Min length: 1    Max length: 255
		 * @return {DeregisterPackageVersionResponse} Success
		 */
		DeregisterPackageVersion(OwnerAccount: string | null | undefined, PackageId: string, PackageVersion: string, PatchVersion: string, UpdatedLatestPatchVersion: string | null | undefined): Observable<DeregisterPackageVersionResponse> {
			return this.http.delete<DeregisterPackageVersionResponse>(this.baseUri + 'packages/' + (PackageId == null ? '' : encodeURIComponent(PackageId)) + '/versions/' + (PackageVersion == null ? '' : encodeURIComponent(PackageVersion)) + '/patch/' + (PatchVersion == null ? '' : encodeURIComponent(PatchVersion)) + '?OwnerAccount=' + (OwnerAccount == null ? '' : encodeURIComponent(OwnerAccount)) + '&UpdatedLatestPatchVersion=' + (UpdatedLatestPatchVersion == null ? '' : encodeURIComponent(UpdatedLatestPatchVersion)), {});
		}

		/**
		 * Registers a package version.
		 * Put packages/{PackageId}/versions/{PackageVersion}/patch/{PatchVersion}
		 * @param {string} PackageId A package ID.
		 *     Min length: 1    Max length: 255
		 * @param {string} PackageVersion A package version.
		 *     Min length: 1    Max length: 255
		 * @param {string} PatchVersion A patch version.
		 *     Min length: 1    Max length: 255
		 * @return {RegisterPackageVersionResponse} Success
		 */
		RegisterPackageVersion(PackageId: string, PackageVersion: string, PatchVersion: string, requestBody: RegisterPackageVersionPutBody): Observable<RegisterPackageVersionResponse> {
			return this.http.put<RegisterPackageVersionResponse>(this.baseUri + 'packages/' + (PackageId == null ? '' : encodeURIComponent(PackageId)) + '/versions/' + (PackageVersion == null ? '' : encodeURIComponent(PackageVersion)) + '/patch/' + (PatchVersion == null ? '' : encodeURIComponent(PatchVersion)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns information about an application instance on a device.
		 * Get application-instances/{ApplicationInstanceId}
		 * @param {string} ApplicationInstanceId The application instance's ID.
		 *     Min length: 1    Max length: 255
		 * @return {DescribeApplicationInstanceResponse} Success
		 */
		DescribeApplicationInstance(ApplicationInstanceId: string): Observable<DescribeApplicationInstanceResponse> {
			return this.http.get<DescribeApplicationInstanceResponse>(this.baseUri + 'application-instances/' + (ApplicationInstanceId == null ? '' : encodeURIComponent(ApplicationInstanceId)), {});
		}

		/**
		 * Removes an application instance.
		 * Delete application-instances/{ApplicationInstanceId}
		 * @param {string} ApplicationInstanceId An application instance ID.
		 *     Min length: 1    Max length: 255
		 * @return {RemoveApplicationInstanceResponse} Success
		 */
		RemoveApplicationInstance(ApplicationInstanceId: string): Observable<RemoveApplicationInstanceResponse> {
			return this.http.delete<RemoveApplicationInstanceResponse>(this.baseUri + 'application-instances/' + (ApplicationInstanceId == null ? '' : encodeURIComponent(ApplicationInstanceId)), {});
		}

		/**
		 * Returns information about an application instance's configuration manifest.
		 * Get application-instances/{ApplicationInstanceId}/details
		 * @param {string} ApplicationInstanceId The application instance's ID.
		 *     Min length: 1    Max length: 255
		 * @return {DescribeApplicationInstanceDetailsResponse} Success
		 */
		DescribeApplicationInstanceDetails(ApplicationInstanceId: string): Observable<DescribeApplicationInstanceDetailsResponse> {
			return this.http.get<DescribeApplicationInstanceDetailsResponse>(this.baseUri + 'application-instances/' + (ApplicationInstanceId == null ? '' : encodeURIComponent(ApplicationInstanceId)) + '/details', {});
		}

		/**
		 * Returns information about a device job.
		 * Get jobs/{JobId}
		 * @param {string} JobId The job's ID.
		 *     Min length: 1    Max length: 255
		 * @return {DescribeDeviceJobResponse} Success
		 */
		DescribeDeviceJob(JobId: string): Observable<DescribeDeviceJobResponse> {
			return this.http.get<DescribeDeviceJobResponse>(this.baseUri + 'jobs/' + (JobId == null ? '' : encodeURIComponent(JobId)), {});
		}

		/**
		 * Returns information about a node.
		 * Get nodes/{NodeId}
		 * @param {string} NodeId The node's ID.
		 *     Min length: 1    Max length: 255
		 * @param {string} OwnerAccount The account ID of the node's owner.
		 *     Min length: 1    Max length: 12
		 * @return {DescribeNodeResponse} Success
		 */
		DescribeNode(NodeId: string, OwnerAccount: string | null | undefined): Observable<DescribeNodeResponse> {
			return this.http.get<DescribeNodeResponse>(this.baseUri + 'nodes/' + (NodeId == null ? '' : encodeURIComponent(NodeId)) + '&OwnerAccount=' + (OwnerAccount == null ? '' : encodeURIComponent(OwnerAccount)), {});
		}

		/**
		 * Returns information about a job to create a camera stream node.
		 * Get packages/template-job/{JobId}
		 * @param {string} JobId The job's ID.
		 *     Min length: 1    Max length: 255
		 * @return {DescribeNodeFromTemplateJobResponse} Success
		 */
		DescribeNodeFromTemplateJob(JobId: string): Observable<DescribeNodeFromTemplateJobResponse> {
			return this.http.get<DescribeNodeFromTemplateJobResponse>(this.baseUri + 'packages/template-job/' + (JobId == null ? '' : encodeURIComponent(JobId)), {});
		}

		/**
		 * Returns information about a package.
		 * Get packages/metadata/{PackageId}
		 * @param {string} PackageId The package's ID.
		 *     Min length: 1    Max length: 255
		 * @return {DescribePackageResponse} Success
		 */
		DescribePackage(PackageId: string): Observable<DescribePackageResponse> {
			return this.http.get<DescribePackageResponse>(this.baseUri + 'packages/metadata/' + (PackageId == null ? '' : encodeURIComponent(PackageId)), {});
		}

		/**
		 * Returns information about a package import job.
		 * Get packages/import-jobs/{JobId}
		 * @param {string} JobId The job's ID.
		 *     Min length: 1    Max length: 255
		 * @return {DescribePackageImportJobResponse} Success
		 */
		DescribePackageImportJob(JobId: string): Observable<DescribePackageImportJobResponse> {
			return this.http.get<DescribePackageImportJobResponse>(this.baseUri + 'packages/import-jobs/' + (JobId == null ? '' : encodeURIComponent(JobId)), {});
		}

		/**
		 * Returns information about a package version.
		 * Get packages/metadata/{PackageId}/versions/{PackageVersion}
		 * @param {string} OwnerAccount The version's owner account.
		 *     Min length: 1    Max length: 12
		 * @param {string} PackageId The version's ID.
		 *     Min length: 1    Max length: 255
		 * @param {string} PackageVersion The version's version.
		 *     Min length: 1    Max length: 255
		 * @param {string} PatchVersion The version's patch version.
		 *     Min length: 1    Max length: 255
		 * @return {DescribePackageVersionResponse} Success
		 */
		DescribePackageVersion(OwnerAccount: string | null | undefined, PackageId: string, PackageVersion: string, PatchVersion: string | null | undefined): Observable<DescribePackageVersionResponse> {
			return this.http.get<DescribePackageVersionResponse>(this.baseUri + 'packages/metadata/' + (PackageId == null ? '' : encodeURIComponent(PackageId)) + '/versions/' + (PackageVersion == null ? '' : encodeURIComponent(PackageVersion)) + '?OwnerAccount=' + (OwnerAccount == null ? '' : encodeURIComponent(OwnerAccount)) + '&PatchVersion=' + (PatchVersion == null ? '' : encodeURIComponent(PatchVersion)), {});
		}

		/**
		 * Returns a list of application instance dependencies.
		 * Get application-instances/{ApplicationInstanceId}/package-dependencies
		 * @param {string} ApplicationInstanceId The application instance's ID.
		 *     Min length: 1    Max length: 255
		 * @param {number} maxResults The maximum number of application instance dependencies to return in one page of results.
		 *     Minimum: 0    Maximum: 25
		 * @param {string} nextToken Specify the pagination token from a previous request to retrieve the next page of results.
		 *     Min length: 1    Max length: 4096
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListApplicationInstanceDependenciesResponse} Success
		 */
		ListApplicationInstanceDependencies(ApplicationInstanceId: string, maxResults: number | null | undefined, nextToken: string | null | undefined, MaxResults: string | null | undefined, NextToken: string | null | undefined): Observable<ListApplicationInstanceDependenciesResponse> {
			return this.http.get<ListApplicationInstanceDependenciesResponse>(this.baseUri + 'application-instances/' + (ApplicationInstanceId == null ? '' : encodeURIComponent(ApplicationInstanceId)) + '/package-dependencies&maxResults=' + maxResults + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), {});
		}

		/**
		 * Returns a list of application node instances.
		 * Get application-instances/{ApplicationInstanceId}/node-instances
		 * @param {string} ApplicationInstanceId The node instances' application instance ID.
		 *     Min length: 1    Max length: 255
		 * @param {number} maxResults The maximum number of node instances to return in one page of results.
		 *     Minimum: 0    Maximum: 25
		 * @param {string} nextToken Specify the pagination token from a previous request to retrieve the next page of results.
		 *     Min length: 1    Max length: 4096
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListApplicationInstanceNodeInstancesResponse} Success
		 */
		ListApplicationInstanceNodeInstances(ApplicationInstanceId: string, maxResults: number | null | undefined, nextToken: string | null | undefined, MaxResults: string | null | undefined, NextToken: string | null | undefined): Observable<ListApplicationInstanceNodeInstancesResponse> {
			return this.http.get<ListApplicationInstanceNodeInstancesResponse>(this.baseUri + 'application-instances/' + (ApplicationInstanceId == null ? '' : encodeURIComponent(ApplicationInstanceId)) + '/node-instances&maxResults=' + maxResults + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), {});
		}

		/**
		 * Returns a list of devices.
		 * Get devices
		 * @param {DeviceAggregatedStatus} DeviceAggregatedStatusFilter Filter based on a device's status.
		 * @param {number} MaxResults The maximum number of devices to return in one page of results.
		 *     Minimum: 0    Maximum: 25
		 * @param {string} NameFilter Filter based on device's name. Prefixes supported.
		 * @param {string} NextToken Specify the pagination token from a previous request to retrieve the next page of results.
		 *     Min length: 1    Max length: 4096
		 * @param {ListDevicesSortBy} SortBy The target column to be sorted on. Default column sort is CREATED_TIME.
		 * @param {SortOrder} SortOrder The sorting order for the returned list. SortOrder is DESCENDING by default based on CREATED_TIME. Otherwise, SortOrder is ASCENDING.
		 * @return {ListDevicesResponse} Success
		 */
		ListDevices(DeviceAggregatedStatusFilter: DeviceAggregatedStatus | null | undefined, MaxResults: number | null | undefined, NameFilter: string | null | undefined, NextToken: string | null | undefined, SortBy: ListDevicesSortBy | null | undefined, SortOrder: SortOrder | null | undefined): Observable<ListDevicesResponse> {
			return this.http.get<ListDevicesResponse>(this.baseUri + 'devices?DeviceAggregatedStatusFilter=' + DeviceAggregatedStatusFilter + '&MaxResults=' + MaxResults + '&NameFilter=' + (NameFilter == null ? '' : encodeURIComponent(NameFilter)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)) + '&SortBy=' + SortBy + '&SortOrder=' + SortOrder, {});
		}

		/**
		 * Creates a device and returns a configuration archive. The configuration archive is a ZIP file that contains a provisioning certificate that is valid for 5 minutes. Name the configuration archive <code>certificates-omni_<i>device-name</i>.zip</code> and transfer it to the device within 5 minutes. Use the included USB storage device and connect it to the USB 3.0 port next to the HDMI output.
		 * Post devices
		 * @return {ProvisionDeviceResponse} Success
		 */
		ProvisionDevice(requestBody: ProvisionDevicePostBody): Observable<ProvisionDeviceResponse> {
			return this.http.post<ProvisionDeviceResponse>(this.baseUri + 'devices', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns a list of nodes.
		 * Get nodes
		 * @param {NodeCategory} category Search for nodes by category.
		 * @param {number} maxResults The maximum number of nodes to return in one page of results.
		 *     Minimum: 0    Maximum: 25
		 * @param {string} nextToken Specify the pagination token from a previous request to retrieve the next page of results.
		 *     Min length: 1    Max length: 4096
		 * @param {string} ownerAccount Search for nodes by the account ID of the nodes' owner.
		 *     Min length: 1    Max length: 12
		 * @param {string} packageName Search for nodes by name.
		 *     Min length: 1    Max length: 128
		 * @param {string} packageVersion Search for nodes by version.
		 *     Min length: 1    Max length: 255
		 * @param {string} patchVersion Search for nodes by patch version.
		 *     Min length: 1    Max length: 255
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListNodesResponse} Success
		 */
		ListNodes(category: NodeCategory | null | undefined, maxResults: number | null | undefined, nextToken: string | null | undefined, ownerAccount: string | null | undefined, packageName: string | null | undefined, packageVersion: string | null | undefined, patchVersion: string | null | undefined, MaxResults: string | null | undefined, NextToken: string | null | undefined): Observable<ListNodesResponse> {
			return this.http.get<ListNodesResponse>(this.baseUri + 'nodes?category=' + category + '&maxResults=' + maxResults + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&ownerAccount=' + (ownerAccount == null ? '' : encodeURIComponent(ownerAccount)) + '&packageName=' + (packageName == null ? '' : encodeURIComponent(packageName)) + '&packageVersion=' + (packageVersion == null ? '' : encodeURIComponent(packageVersion)) + '&patchVersion=' + (patchVersion == null ? '' : encodeURIComponent(patchVersion)) + '&MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), {});
		}

		/**
		 * Returns a list of tags for a resource.
		 * Get tags/{ResourceArn}
		 * @param {string} ResourceArn The resource's ARN.
		 *     Min length: 1    Max length: 2048
		 * @return {ListTagsForResourceResponse} Success
		 */
		ListTagsForResource(ResourceArn: string): Observable<ListTagsForResourceResponse> {
			return this.http.get<ListTagsForResourceResponse>(this.baseUri + 'tags/' + (ResourceArn == null ? '' : encodeURIComponent(ResourceArn)), {});
		}

		/**
		 * Tags a resource.
		 * Post tags/{ResourceArn}
		 * @param {string} ResourceArn The resource's ARN.
		 *     Min length: 1    Max length: 2048
		 * @return {TagResourceResponse} Success
		 */
		TagResource(ResourceArn: string, requestBody: TagResourcePostBody): Observable<TagResourceResponse> {
			return this.http.post<TagResourceResponse>(this.baseUri + 'tags/' + (ResourceArn == null ? '' : encodeURIComponent(ResourceArn)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Signal camera nodes to stop or resume.
		 * Put application-instances/{ApplicationInstanceId}/node-signals
		 * @param {string} ApplicationInstanceId An application instance ID.
		 *     Min length: 1    Max length: 255
		 * @return {SignalApplicationInstanceNodeInstancesResponse} Success
		 */
		SignalApplicationInstanceNodeInstances(ApplicationInstanceId: string, requestBody: SignalApplicationInstanceNodeInstancesPutBody): Observable<SignalApplicationInstanceNodeInstancesResponse> {
			return this.http.put<SignalApplicationInstanceNodeInstancesResponse>(this.baseUri + 'application-instances/' + (ApplicationInstanceId == null ? '' : encodeURIComponent(ApplicationInstanceId)) + '/node-signals', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Removes tags from a resource.
		 * Delete tags/{ResourceArn}#tagKeys
		 * @param {string} ResourceArn The resource's ARN.
		 *     Min length: 1    Max length: 2048
		 * @param {Array<string>} tagKeys Tag keys to remove.
		 *     Minimum items: 1    Maximum items: 50
		 * @return {UntagResourceResponse} Success
		 */
		UntagResource(ResourceArn: string, tagKeys: Array<string>): Observable<UntagResourceResponse> {
			return this.http.delete<UntagResourceResponse>(this.baseUri + 'tags/' + (ResourceArn == null ? '' : encodeURIComponent(ResourceArn)) + '#tagKeys&' + tagKeys.map(z => `tagKeys=${encodeURIComponent(z)}`).join('&'), {});
		}
	}

	export interface CreateApplicationInstancePostBody {

		/**
		 * The ID of an application instance to replace with the new instance.
		 * Min length: 1
		 * Max length: 255
		 */
		ApplicationInstanceIdToReplace?: string | null;

		/**
		 * A device's ID.
		 * Required
		 * Min length: 1
		 * Max length: 255
		 */
		DefaultRuntimeContextDevice: string;

		/**
		 * A description for the application instance.
		 * Min length: 0
		 * Max length: 255
		 */
		Description?: string | null;

		/** Parameter overrides for an application instance. This is a JSON document that has a single key (<code>PayloadData</code>) where the value is an escaped string representation of the overrides document. */
		ManifestOverridesPayload?: CreateApplicationInstancePostBodyManifestOverridesPayload;

		/**
		 * A application verion's manifest file. This is a JSON document that has a single key (<code>PayloadData</code>) where the value is an escaped string representation of the application manifest (<code>graph.json</code>). This file is located in the <code>graphs</code> folder in your application source.
		 * Required
		 */
		ManifestPayload: CreateApplicationInstancePostBodyManifestPayload;

		/**
		 * A name for the application instance.
		 * Min length: 1
		 * Max length: 255
		 */
		Name?: string | null;

		/**
		 * The ARN of a runtime role for the application instance.
		 * Min length: 1
		 * Max length: 255
		 */
		RuntimeRoleArn?: string | null;

		/** Tags for the application instance. */
		Tags?: {[id: string]: string };
	}
	export interface CreateApplicationInstancePostBodyFormProperties {

		/**
		 * The ID of an application instance to replace with the new instance.
		 * Min length: 1
		 * Max length: 255
		 */
		ApplicationInstanceIdToReplace: FormControl<string | null | undefined>,

		/**
		 * A device's ID.
		 * Required
		 * Min length: 1
		 * Max length: 255
		 */
		DefaultRuntimeContextDevice: FormControl<string | null | undefined>,

		/**
		 * A description for the application instance.
		 * Min length: 0
		 * Max length: 255
		 */
		Description: FormControl<string | null | undefined>,

		/**
		 * A name for the application instance.
		 * Min length: 1
		 * Max length: 255
		 */
		Name: FormControl<string | null | undefined>,

		/**
		 * The ARN of a runtime role for the application instance.
		 * Min length: 1
		 * Max length: 255
		 */
		RuntimeRoleArn: FormControl<string | null | undefined>,

		/** Tags for the application instance. */
		Tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateCreateApplicationInstancePostBodyFormGroup() {
		return new FormGroup<CreateApplicationInstancePostBodyFormProperties>({
			ApplicationInstanceIdToReplace: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(255), Validators.pattern('^[a-zA-Z0-9\-\_]+$')]),
			DefaultRuntimeContextDevice: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(255), Validators.pattern('^[a-zA-Z0-9\-\_]+$')]),
			Description: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(255), Validators.pattern('^.*$')]),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(255), Validators.pattern('^[a-zA-Z0-9\-\_]+$')]),
			RuntimeRoleArn: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(255), Validators.pattern('^arn:[a-z0-9][-.a-z0-9]{0,62}:iam::[0-9]{12}:role/.+$')]),
			Tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}

	export interface CreateApplicationInstancePostBodyManifestOverridesPayload {
		PayloadData?: string;
	}
	export interface CreateApplicationInstancePostBodyManifestOverridesPayloadFormProperties {
		PayloadData: FormControl<string | null | undefined>,
	}
	export function CreateCreateApplicationInstancePostBodyManifestOverridesPayloadFormGroup() {
		return new FormGroup<CreateApplicationInstancePostBodyManifestOverridesPayloadFormProperties>({
			PayloadData: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateApplicationInstancePostBodyManifestPayload {
		PayloadData?: string;
	}
	export interface CreateApplicationInstancePostBodyManifestPayloadFormProperties {
		PayloadData: FormControl<string | null | undefined>,
	}
	export function CreateCreateApplicationInstancePostBodyManifestPayloadFormGroup() {
		return new FormGroup<CreateApplicationInstancePostBodyManifestPayloadFormProperties>({
			PayloadData: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateJobForDevicesPostBody {

		/**
		 * ID of target device.
		 * Required
		 * Minimum items: 1
		 * Maximum items: 1
		 */
		DeviceIds: Array<string>;

		/** A job's configuration. */
		DeviceJobConfig?: CreateJobForDevicesPostBodyDeviceJobConfig;

		/**
		 * The type of job to run.
		 * Required
		 */
		JobType: JobType;
	}
	export interface CreateJobForDevicesPostBodyFormProperties {

		/**
		 * The type of job to run.
		 * Required
		 */
		JobType: FormControl<JobType | null | undefined>,
	}
	export function CreateCreateJobForDevicesPostBodyFormGroup() {
		return new FormGroup<CreateJobForDevicesPostBodyFormProperties>({
			JobType: new FormControl<JobType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateJobForDevicesPostBodyDeviceJobConfig {
		OTAJobConfig?: OTAJobConfig;
	}
	export interface CreateJobForDevicesPostBodyDeviceJobConfigFormProperties {
	}
	export function CreateCreateJobForDevicesPostBodyDeviceJobConfigFormGroup() {
		return new FormGroup<CreateJobForDevicesPostBodyDeviceJobConfigFormProperties>({
		});

	}

	export interface CreateNodeFromTemplateJobPostBody {

		/** Tags for the job. */
		JobTags?: Array<JobResourceTags>;

		/**
		 * A description for the node.
		 * Min length: 0
		 * Max length: 255
		 */
		NodeDescription?: string | null;

		/**
		 * A name for the node.
		 * Required
		 * Min length: 1
		 * Max length: 128
		 */
		NodeName: string;

		/**
		 * An output package name for the node.
		 * Required
		 * Min length: 1
		 * Max length: 128
		 */
		OutputPackageName: string;

		/**
		 * An output package version for the node.
		 * Required
		 * Min length: 1
		 * Max length: 255
		 */
		OutputPackageVersion: string;

		/**
		 * Template parameters for the node.
		 * Required
		 */
		TemplateParameters: {[id: string]: string };

		/**
		 * The type of node.
		 * Required
		 */
		TemplateType: TemplateType;
	}
	export interface CreateNodeFromTemplateJobPostBodyFormProperties {

		/**
		 * A description for the node.
		 * Min length: 0
		 * Max length: 255
		 */
		NodeDescription: FormControl<string | null | undefined>,

		/**
		 * A name for the node.
		 * Required
		 * Min length: 1
		 * Max length: 128
		 */
		NodeName: FormControl<string | null | undefined>,

		/**
		 * An output package name for the node.
		 * Required
		 * Min length: 1
		 * Max length: 128
		 */
		OutputPackageName: FormControl<string | null | undefined>,

		/**
		 * An output package version for the node.
		 * Required
		 * Min length: 1
		 * Max length: 255
		 */
		OutputPackageVersion: FormControl<string | null | undefined>,

		/**
		 * Template parameters for the node.
		 * Required
		 */
		TemplateParameters: FormControl<{[id: string]: string } | null | undefined>,

		/**
		 * The type of node.
		 * Required
		 */
		TemplateType: FormControl<TemplateType | null | undefined>,
	}
	export function CreateCreateNodeFromTemplateJobPostBodyFormGroup() {
		return new FormGroup<CreateNodeFromTemplateJobPostBodyFormProperties>({
			NodeDescription: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(255), Validators.pattern('^.*$')]),
			NodeName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(128), Validators.pattern('^[a-zA-Z0-9\-\_]+$')]),
			OutputPackageName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(128), Validators.pattern('^[a-zA-Z0-9\-\_]+$')]),
			OutputPackageVersion: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(255), Validators.pattern('^([0-9]+)\.([0-9]+)$')]),
			TemplateParameters: new FormControl<{[id: string]: string } | null | undefined>(undefined, [Validators.required]),
			TemplateType: new FormControl<TemplateType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreatePackagePostBody {

		/**
		 * A name for the package.
		 * Required
		 * Min length: 1
		 * Max length: 128
		 */
		PackageName: string;

		/** Tags for the package. */
		Tags?: {[id: string]: string };
	}
	export interface CreatePackagePostBodyFormProperties {

		/**
		 * A name for the package.
		 * Required
		 * Min length: 1
		 * Max length: 128
		 */
		PackageName: FormControl<string | null | undefined>,

		/** Tags for the package. */
		Tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateCreatePackagePostBodyFormGroup() {
		return new FormGroup<CreatePackagePostBodyFormProperties>({
			PackageName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(128), Validators.pattern('^[a-zA-Z0-9\-\_]+$')]),
			Tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}

	export interface CreatePackageImportJobPostBody {

		/**
		 * A client token for the package import job.
		 * Required
		 * Min length: 1
		 * Max length: 64
		 */
		ClientToken: string;

		/**
		 * A configuration for a package import job.
		 * Required
		 */
		InputConfig: CreatePackageImportJobPostBodyInputConfig;

		/** Tags for the package import job. */
		JobTags?: Array<JobResourceTags>;

		/**
		 * A job type for the package import job.
		 * Required
		 */
		JobType: PackageImportJobType;

		/**
		 * An output configuration for a package import job.
		 * Required
		 */
		OutputConfig: CreatePackageImportJobPostBodyOutputConfig;
	}
	export interface CreatePackageImportJobPostBodyFormProperties {

		/**
		 * A client token for the package import job.
		 * Required
		 * Min length: 1
		 * Max length: 64
		 */
		ClientToken: FormControl<string | null | undefined>,

		/**
		 * A job type for the package import job.
		 * Required
		 */
		JobType: FormControl<PackageImportJobType | null | undefined>,
	}
	export function CreateCreatePackageImportJobPostBodyFormGroup() {
		return new FormGroup<CreatePackageImportJobPostBodyFormProperties>({
			ClientToken: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(64), Validators.pattern('^[a-zA-Z0-9\-\_]+$')]),
			JobType: new FormControl<PackageImportJobType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreatePackageImportJobPostBodyInputConfig {
		PackageVersionInputConfig?: PackageVersionInputConfig;
	}
	export interface CreatePackageImportJobPostBodyInputConfigFormProperties {
	}
	export function CreateCreatePackageImportJobPostBodyInputConfigFormGroup() {
		return new FormGroup<CreatePackageImportJobPostBodyInputConfigFormProperties>({
		});

	}

	export interface CreatePackageImportJobPostBodyOutputConfig {
		PackageVersionOutputConfig?: PackageVersionOutputConfig;
	}
	export interface CreatePackageImportJobPostBodyOutputConfigFormProperties {
	}
	export function CreateCreatePackageImportJobPostBodyOutputConfigFormGroup() {
		return new FormGroup<CreatePackageImportJobPostBodyOutputConfigFormProperties>({
		});

	}

	export interface UpdateDeviceMetadataPutBody {

		/**
		 * A description for the device.
		 * Min length: 0
		 * Max length: 255
		 */
		Description?: string | null;
	}
	export interface UpdateDeviceMetadataPutBodyFormProperties {

		/**
		 * A description for the device.
		 * Min length: 0
		 * Max length: 255
		 */
		Description: FormControl<string | null | undefined>,
	}
	export function CreateUpdateDeviceMetadataPutBodyFormGroup() {
		return new FormGroup<UpdateDeviceMetadataPutBodyFormProperties>({
			Description: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(255), Validators.pattern('^.*$')]),
		});

	}

	export interface RegisterPackageVersionPutBody {

		/** Whether to mark the new version as the latest version. */
		MarkLatest?: boolean | null;

		/**
		 * An owner account.
		 * Min length: 1
		 * Max length: 12
		 */
		OwnerAccount?: string | null;
	}
	export interface RegisterPackageVersionPutBodyFormProperties {

		/** Whether to mark the new version as the latest version. */
		MarkLatest: FormControl<boolean | null | undefined>,

		/**
		 * An owner account.
		 * Min length: 1
		 * Max length: 12
		 */
		OwnerAccount: FormControl<string | null | undefined>,
	}
	export function CreateRegisterPackageVersionPutBodyFormGroup() {
		return new FormGroup<RegisterPackageVersionPutBodyFormProperties>({
			MarkLatest: new FormControl<boolean | null | undefined>(undefined),
			OwnerAccount: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(12), Validators.pattern('^[0-9a-z\_]+$')]),
		});

	}

	export interface ProvisionDevicePostBody {

		/**
		 * A description for the device.
		 * Min length: 0
		 * Max length: 255
		 */
		Description?: string | null;

		/**
		 * A name for the device.
		 * Required
		 * Min length: 1
		 * Max length: 255
		 */
		Name: string;

		/** The network configuration for a device. */
		NetworkingConfiguration?: ProvisionDevicePostBodyNetworkingConfiguration;

		/** Tags for the device. */
		Tags?: {[id: string]: string };
	}
	export interface ProvisionDevicePostBodyFormProperties {

		/**
		 * A description for the device.
		 * Min length: 0
		 * Max length: 255
		 */
		Description: FormControl<string | null | undefined>,

		/**
		 * A name for the device.
		 * Required
		 * Min length: 1
		 * Max length: 255
		 */
		Name: FormControl<string | null | undefined>,

		/** Tags for the device. */
		Tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateProvisionDevicePostBodyFormGroup() {
		return new FormGroup<ProvisionDevicePostBodyFormProperties>({
			Description: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(255), Validators.pattern('^.*$')]),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(255), Validators.pattern('^[a-zA-Z0-9\-\_]+$')]),
			Tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}

	export interface ProvisionDevicePostBodyNetworkingConfiguration {
		Ethernet0?: EthernetPayload;
		Ethernet1?: EthernetPayload;
		Ntp?: NtpPayload;
	}
	export interface ProvisionDevicePostBodyNetworkingConfigurationFormProperties {
	}
	export function CreateProvisionDevicePostBodyNetworkingConfigurationFormGroup() {
		return new FormGroup<ProvisionDevicePostBodyNetworkingConfigurationFormProperties>({
		});

	}

	export interface TagResourcePostBody {

		/**
		 * Tags for the resource.
		 * Required
		 */
		Tags: {[id: string]: string };
	}
	export interface TagResourcePostBodyFormProperties {

		/**
		 * Tags for the resource.
		 * Required
		 */
		Tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateTagResourcePostBodyFormGroup() {
		return new FormGroup<TagResourcePostBodyFormProperties>({
			Tags: new FormControl<{[id: string]: string } | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface SignalApplicationInstanceNodeInstancesPutBody {

		/**
		 * A list of signals.
		 * Required
		 * Minimum items: 1
		 */
		NodeSignals: Array<NodeSignal>;
	}
	export interface SignalApplicationInstanceNodeInstancesPutBodyFormProperties {
	}
	export function CreateSignalApplicationInstanceNodeInstancesPutBodyFormGroup() {
		return new FormGroup<SignalApplicationInstanceNodeInstancesPutBodyFormProperties>({
		});

	}

}

