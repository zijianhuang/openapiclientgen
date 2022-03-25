import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
export namespace MyNS {
	export interface AllocateStaticIpResult {
		operations?: Array<Operation>;
	}


	/** Describes the API operation. */
	export interface Operation {
		id?: string;
		resourceName?: string;
		resourceType?: OperationResourceType;
		createdAt?: Date;

		/** Describes the resource location. */
		location?: ResourceLocation;
		isTerminal?: boolean;
		operationDetails?: string;
		operationType?: OperationOperationType;
		status?: OperationStatus;
		statusChangedAt?: Date;
		errorCode?: string;
		errorDetails?: string;
	}

	export enum OperationResourceType { Instance = 0, StaticIp = 1, KeyPair = 2, InstanceSnapshot = 3, Domain = 4, PeeredVpc = 5, LoadBalancer = 6, LoadBalancerTlsCertificate = 7, Disk = 8, DiskSnapshot = 9, RelationalDatabase = 10, RelationalDatabaseSnapshot = 11, ExportSnapshotRecord = 12, CloudFormationStackRecord = 13, Alarm = 14, ContactMethod = 15 }


	/** Describes the resource location. */
	export interface ResourceLocation {
		availabilityZone?: string;
		regionName?: ResourceLocationRegionName;
	}

	export enum ResourceLocationRegionName { us_east_1 = 0, us_east_2 = 1, us_west_1 = 2, us_west_2 = 3, eu_west_1 = 4, eu_west_2 = 5, eu_west_3 = 6, eu_central_1 = 7, ca_central_1 = 8, ap_south_1 = 9, ap_southeast_1 = 10, ap_southeast_2 = 11, ap_northeast_1 = 12, ap_northeast_2 = 13 }

	export enum OperationOperationType { DeleteKnownHostKeys = 0, DeleteInstance = 1, CreateInstance = 2, StopInstance = 3, StartInstance = 4, RebootInstance = 5, OpenInstancePublicPorts = 6, PutInstancePublicPorts = 7, CloseInstancePublicPorts = 8, AllocateStaticIp = 9, ReleaseStaticIp = 10, AttachStaticIp = 11, DetachStaticIp = 12, UpdateDomainEntry = 13, DeleteDomainEntry = 14, CreateDomain = 15, DeleteDomain = 16, CreateInstanceSnapshot = 17, DeleteInstanceSnapshot = 18, CreateInstancesFromSnapshot = 19, CreateLoadBalancer = 20, DeleteLoadBalancer = 21, AttachInstancesToLoadBalancer = 22, DetachInstancesFromLoadBalancer = 23, UpdateLoadBalancerAttribute = 24, CreateLoadBalancerTlsCertificate = 25, DeleteLoadBalancerTlsCertificate = 26, AttachLoadBalancerTlsCertificate = 27, CreateDisk = 28, DeleteDisk = 29, AttachDisk = 30, DetachDisk = 31, CreateDiskSnapshot = 32, DeleteDiskSnapshot = 33, CreateDiskFromSnapshot = 34, CreateRelationalDatabase = 35, UpdateRelationalDatabase = 36, DeleteRelationalDatabase = 37, CreateRelationalDatabaseFromSnapshot = 38, CreateRelationalDatabaseSnapshot = 39, DeleteRelationalDatabaseSnapshot = 40, UpdateRelationalDatabaseParameters = 41, StartRelationalDatabase = 42, RebootRelationalDatabase = 43, StopRelationalDatabase = 44, EnableAddOn = 45, DisableAddOn = 46, PutAlarm = 47, GetAlarms = 48, DeleteAlarm = 49, TestAlarm = 50, CreateContactMethod = 51, GetContactMethods = 52, SendContactMethodVerification = 53, DeleteContactMethod = 54 }

	export enum OperationStatus { NotStarted = 0, Started = 1, Failed = 2, Completed = 3, Succeeded = 4 }

	export interface AllocateStaticIpRequest {
		staticIpName: string;
	}

	export interface ServiceException {
	}

	export interface InvalidInputException {
	}

	export interface NotFoundException {
	}

	export interface OperationFailureException {
	}

	export interface AccessDeniedException {
	}

	export interface AccountSetupInProgressException {
	}

	export interface UnauthenticatedException {
	}

	export interface AttachDiskResult {
		operations?: Array<Operation>;
	}

	export interface AttachDiskRequest {
		diskName: string;
		instanceName: string;
		diskPath: string;
	}

	export interface AttachInstancesToLoadBalancerResult {
		operations?: Array<Operation>;
	}

	export interface AttachInstancesToLoadBalancerRequest {
		loadBalancerName: string;
		instanceNames: Array<string>;
	}

	export interface AttachLoadBalancerTlsCertificateResult {
		operations?: Array<Operation>;
	}

	export interface AttachLoadBalancerTlsCertificateRequest {
		loadBalancerName: string;
		certificateName: string;
	}

	export interface AttachStaticIpResult {
		operations?: Array<Operation>;
	}

	export interface AttachStaticIpRequest {
		staticIpName: string;
		instanceName: string;
	}

	export interface CloseInstancePublicPortsResult {

		/** Describes the API operation. */
		operation?: Operation;
	}

	export interface CloseInstancePublicPortsRequest {

		/**
		 * Describes ports to open on an instance, the IP addresses allowed to connect to the instance through the ports, and the protocol.
		 * Required
		 */
		portInfo: PortInfo;
		instanceName: string;
	}


	/** Describes ports to open on an instance, the IP addresses allowed to connect to the instance through the ports, and the protocol. */
	export interface PortInfo {
		fromPort?: number;
		toPort?: number;
		protocol?: PortInfoProtocol;
		cidrs?: Array<string>;
		cidrListAliases?: Array<string>;
	}

	export enum PortInfoProtocol { tcp = 0, all = 1, udp = 2, icmp = 3 }

	export interface CopySnapshotResult {
		operations?: Array<Operation>;
	}

	export interface CopySnapshotRequest {
		sourceSnapshotName?: string;
		sourceResourceName?: string;
		restoreDate?: string;
		useLatestRestorableAutoSnapshot?: boolean;
		targetSnapshotName: string;
		sourceRegion: CopySnapshotRequestSourceRegion;
	}

	export enum CopySnapshotRequestSourceRegion { us_east_1 = 0, us_east_2 = 1, us_west_1 = 2, us_west_2 = 3, eu_west_1 = 4, eu_west_2 = 5, eu_west_3 = 6, eu_central_1 = 7, ca_central_1 = 8, ap_south_1 = 9, ap_southeast_1 = 10, ap_southeast_2 = 11, ap_northeast_1 = 12, ap_northeast_2 = 13 }

	export interface CreateCloudFormationStackResult {
		operations?: Array<Operation>;
	}

	export interface CreateCloudFormationStackRequest {
		instances: Array<InstanceEntry>;
	}


	/** Describes the Amazon Elastic Compute Cloud instance and related resources to be created using the <code>create cloud formation stack</code> operation. */
	export interface InstanceEntry {
		sourceName: string;
		instanceType: string;
		portInfoSource: InstanceEntryPortInfoSource;
		userData?: string;
		availabilityZone: string;
	}

	export enum InstanceEntryPortInfoSource { DEFAULT = 0, INSTANCE = 1, NONE = 2, CLOSED = 3 }

	export interface CreateContactMethodResult {
		operations?: Array<Operation>;
	}

	export interface CreateContactMethodRequest {
		protocol: CreateContactMethodRequestProtocol;
		contactEndpoint: string;
	}

	export enum CreateContactMethodRequestProtocol { Email = 0, SMS = 1 }

	export interface CreateDiskResult {
		operations?: Array<Operation>;
	}

	export interface CreateDiskRequest {
		diskName: string;
		availabilityZone: string;
		sizeInGb: number;
		tags?: Array<Tag>;
		addOns?: Array<AddOnRequest>;
	}


	/** <p>Describes a tag key and optional value assigned to an Amazon Lightsail resource.</p> <p>For more information about tags in Lightsail, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en/articles/amazon-lightsail-tags">Lightsail Dev Guide</a>.</p> */
	export interface Tag {
		key?: string;
		value?: string;
	}


	/** <p>Describes a request to enable, modify, or disable an add-on for an Amazon Lightsail resource.</p> <note> <p>An additional cost may be associated with enabling add-ons. For more information, see the <a href="https://aws.amazon.com/lightsail/pricing/">Lightsail pricing page</a>.</p> </note> */
	export interface AddOnRequest {
		addOnType: AddOnRequestAddOnType;

		/** <p>Describes a request to enable or modify the automatic snapshot add-on for an Amazon Lightsail instance or disk.</p> <p>When you modify the automatic snapshot time for a resource, it is typically effective immediately except under the following conditions:</p> <ul> <li> <p>If an automatic snapshot has been created for the current day, and you change the snapshot time to a later time of day, then the new snapshot time will be effective the following day. This ensures that two snapshots are not created for the current day.</p> </li> <li> <p>If an automatic snapshot has not yet been created for the current day, and you change the snapshot time to an earlier time of day, then the new snapshot time will be effective the following day and a snapshot is automatically created at the previously set time for the current day. This ensures that a snapshot is created for the current day.</p> </li> <li> <p>If an automatic snapshot has not yet been created for the current day, and you change the snapshot time to a time that is within 30 minutes from your current time, then the new snapshot time will be effective the following day and a snapshot is automatically created at the previously set time for the current day. This ensures that a snapshot is created for the current day, because 30 minutes is required between your current time and the new snapshot time that you specify.</p> </li> <li> <p>If an automatic snapshot is scheduled to be created within 30 minutes from your current time and you change the snapshot time, then the new snapshot time will be effective the following day and a snapshot is automatically created at the previously set time for the current day. This ensures that a snapshot is created for the current day, because 30 minutes is required between your current time and the new snapshot time that you specify.</p> </li> </ul> */
		autoSnapshotAddOnRequest?: AutoSnapshotAddOnRequest;
	}

	export enum AddOnRequestAddOnType { AutoSnapshot = 0 }


	/** <p>Describes a request to enable or modify the automatic snapshot add-on for an Amazon Lightsail instance or disk.</p> <p>When you modify the automatic snapshot time for a resource, it is typically effective immediately except under the following conditions:</p> <ul> <li> <p>If an automatic snapshot has been created for the current day, and you change the snapshot time to a later time of day, then the new snapshot time will be effective the following day. This ensures that two snapshots are not created for the current day.</p> </li> <li> <p>If an automatic snapshot has not yet been created for the current day, and you change the snapshot time to an earlier time of day, then the new snapshot time will be effective the following day and a snapshot is automatically created at the previously set time for the current day. This ensures that a snapshot is created for the current day.</p> </li> <li> <p>If an automatic snapshot has not yet been created for the current day, and you change the snapshot time to a time that is within 30 minutes from your current time, then the new snapshot time will be effective the following day and a snapshot is automatically created at the previously set time for the current day. This ensures that a snapshot is created for the current day, because 30 minutes is required between your current time and the new snapshot time that you specify.</p> </li> <li> <p>If an automatic snapshot is scheduled to be created within 30 minutes from your current time and you change the snapshot time, then the new snapshot time will be effective the following day and a snapshot is automatically created at the previously set time for the current day. This ensures that a snapshot is created for the current day, because 30 minutes is required between your current time and the new snapshot time that you specify.</p> </li> </ul> */
	export interface AutoSnapshotAddOnRequest {
		snapshotTimeOfDay?: string;
	}

	export interface CreateDiskFromSnapshotResult {
		operations?: Array<Operation>;
	}

	export interface CreateDiskFromSnapshotRequest {
		diskName: string;
		diskSnapshotName?: string;
		availabilityZone: string;
		sizeInGb: number;
		tags?: Array<Tag>;
		addOns?: Array<AddOnRequest>;
		sourceDiskName?: string;
		restoreDate?: string;
		useLatestRestorableAutoSnapshot?: boolean;
	}

	export interface CreateDiskSnapshotResult {
		operations?: Array<Operation>;
	}

	export interface CreateDiskSnapshotRequest {
		diskName?: string;
		diskSnapshotName: string;
		instanceName?: string;
		tags?: Array<Tag>;
	}

	export interface CreateDomainResult {

		/** Describes the API operation. */
		operation?: Operation;
	}

	export interface CreateDomainRequest {
		domainName: string;
		tags?: Array<Tag>;
	}

	export interface CreateDomainEntryResult {

		/** Describes the API operation. */
		operation?: Operation;
	}

	export interface CreateDomainEntryRequest {
		domainName: string;

		/**
		 * Describes a domain recordset entry.
		 * Required
		 */
		domainEntry: DomainEntry;
	}


	/** Describes a domain recordset entry. */
	export interface DomainEntry {
		id?: string;
		name?: string;
		target?: string;
		isAlias?: boolean;
		type?: string;
		options?: DomainEntryOptions;
	}

	export interface DomainEntryOptions {
	}

	export interface CreateInstanceSnapshotResult {
		operations?: Array<Operation>;
	}

	export interface CreateInstanceSnapshotRequest {
		instanceSnapshotName: string;
		instanceName: string;
		tags?: Array<Tag>;
	}

	export interface CreateInstancesResult {
		operations?: Array<Operation>;
	}

	export interface CreateInstancesRequest {
		instanceNames: Array<string>;
		availabilityZone: string;
		customImageName?: string;
		blueprintId: string;
		bundleId: string;
		userData?: string;
		keyPairName?: string;
		tags?: Array<Tag>;
		addOns?: Array<AddOnRequest>;
	}

	export interface CreateInstancesFromSnapshotResult {
		operations?: Array<Operation>;
	}

	export interface CreateInstancesFromSnapshotRequest {
		instanceNames: Array<string>;
		attachedDiskMapping?: AttachedDiskMap;
		availabilityZone: string;
		instanceSnapshotName?: string;
		bundleId: string;
		userData?: string;
		keyPairName?: string;
		tags?: Array<Tag>;
		addOns?: Array<AddOnRequest>;
		sourceInstanceName?: string;
		restoreDate?: string;
		useLatestRestorableAutoSnapshot?: boolean;
	}

	export interface AttachedDiskMap {
	}

	export interface CreateKeyPairResult {

		/** Describes the SSH key pair. */
		keyPair?: KeyPair;
		publicKeyBase64?: string;
		privateKeyBase64?: string;

		/** Describes the API operation. */
		operation?: Operation;
	}


	/** Describes the SSH key pair. */
	export interface KeyPair {
		name?: string;
		arn?: string;
		supportCode?: string;
		createdAt?: Date;

		/** Describes the resource location. */
		location?: ResourceLocation;
		resourceType?: OperationResourceType;
		tags?: Array<Tag>;
		fingerprint?: string;
	}

	export interface CreateKeyPairRequest {
		keyPairName: string;
		tags?: Array<Tag>;
	}

	export interface CreateLoadBalancerResult {
		operations?: Array<Operation>;
	}

	export interface CreateLoadBalancerRequest {
		loadBalancerName: string;
		instancePort: number;
		healthCheckPath?: string;
		certificateName?: string;
		certificateDomainName?: string;
		certificateAlternativeNames?: Array<string>;
		tags?: Array<Tag>;
	}

	export interface CreateLoadBalancerTlsCertificateResult {
		operations?: Array<Operation>;
	}

	export interface CreateLoadBalancerTlsCertificateRequest {
		loadBalancerName: string;
		certificateName: string;
		certificateDomainName: string;
		certificateAlternativeNames?: Array<string>;
		tags?: Array<Tag>;
	}

	export interface CreateRelationalDatabaseResult {
		operations?: Array<Operation>;
	}

	export interface CreateRelationalDatabaseRequest {
		relationalDatabaseName: string;
		availabilityZone?: string;
		relationalDatabaseBlueprintId: string;
		relationalDatabaseBundleId: string;
		masterDatabaseName: string;
		masterUsername: string;
		masterUserPassword?: string;
		preferredBackupWindow?: string;
		preferredMaintenanceWindow?: string;
		publiclyAccessible?: boolean;
		tags?: Array<Tag>;
	}

	export interface CreateRelationalDatabaseFromSnapshotResult {
		operations?: Array<Operation>;
	}

	export interface CreateRelationalDatabaseFromSnapshotRequest {
		relationalDatabaseName: string;
		availabilityZone?: string;
		publiclyAccessible?: boolean;
		relationalDatabaseSnapshotName?: string;
		relationalDatabaseBundleId?: string;
		sourceRelationalDatabaseName?: string;
		restoreTime?: Date;
		useLatestRestorableTime?: boolean;
		tags?: Array<Tag>;
	}

	export interface CreateRelationalDatabaseSnapshotResult {
		operations?: Array<Operation>;
	}

	export interface CreateRelationalDatabaseSnapshotRequest {
		relationalDatabaseName: string;
		relationalDatabaseSnapshotName: string;
		tags?: Array<Tag>;
	}

	export interface DeleteAlarmResult {
		operations?: Array<Operation>;
	}

	export interface DeleteAlarmRequest {
		alarmName: string;
	}

	export interface DeleteAutoSnapshotResult {
		operations?: Array<Operation>;
	}

	export interface DeleteAutoSnapshotRequest {
		resourceName: string;
		date: string;
	}

	export interface DeleteContactMethodResult {
		operations?: Array<Operation>;
	}

	export interface DeleteContactMethodRequest {
		protocol: CreateContactMethodRequestProtocol;
	}

	export interface DeleteDiskResult {
		operations?: Array<Operation>;
	}

	export interface DeleteDiskRequest {
		diskName: string;
		forceDeleteAddOns?: boolean;
	}

	export interface DeleteDiskSnapshotResult {
		operations?: Array<Operation>;
	}

	export interface DeleteDiskSnapshotRequest {
		diskSnapshotName: string;
	}

	export interface DeleteDomainResult {

		/** Describes the API operation. */
		operation?: Operation;
	}

	export interface DeleteDomainRequest {
		domainName: string;
	}

	export interface DeleteDomainEntryResult {

		/** Describes the API operation. */
		operation?: Operation;
	}

	export interface DeleteDomainEntryRequest {
		domainName: string;

		/**
		 * Describes a domain recordset entry.
		 * Required
		 */
		domainEntry: DomainEntry;
	}

	export interface DeleteInstanceResult {
		operations?: Array<Operation>;
	}

	export interface DeleteInstanceRequest {
		instanceName: string;
		forceDeleteAddOns?: boolean;
	}

	export interface DeleteInstanceSnapshotResult {
		operations?: Array<Operation>;
	}

	export interface DeleteInstanceSnapshotRequest {
		instanceSnapshotName: string;
	}

	export interface DeleteKeyPairResult {

		/** Describes the API operation. */
		operation?: Operation;
	}

	export interface DeleteKeyPairRequest {
		keyPairName: string;
	}

	export interface DeleteKnownHostKeysResult {
		operations?: Array<Operation>;
	}

	export interface DeleteKnownHostKeysRequest {
		instanceName: string;
	}

	export interface DeleteLoadBalancerResult {
		operations?: Array<Operation>;
	}

	export interface DeleteLoadBalancerRequest {
		loadBalancerName: string;
	}

	export interface DeleteLoadBalancerTlsCertificateResult {
		operations?: Array<Operation>;
	}

	export interface DeleteLoadBalancerTlsCertificateRequest {
		loadBalancerName: string;
		certificateName: string;
		force?: boolean;
	}

	export interface DeleteRelationalDatabaseResult {
		operations?: Array<Operation>;
	}

	export interface DeleteRelationalDatabaseRequest {
		relationalDatabaseName: string;
		skipFinalSnapshot?: boolean;
		finalRelationalDatabaseSnapshotName?: string;
	}

	export interface DeleteRelationalDatabaseSnapshotResult {
		operations?: Array<Operation>;
	}

	export interface DeleteRelationalDatabaseSnapshotRequest {
		relationalDatabaseSnapshotName: string;
	}

	export interface DetachDiskResult {
		operations?: Array<Operation>;
	}

	export interface DetachDiskRequest {
		diskName: string;
	}

	export interface DetachInstancesFromLoadBalancerResult {
		operations?: Array<Operation>;
	}

	export interface DetachInstancesFromLoadBalancerRequest {
		loadBalancerName: string;
		instanceNames: Array<string>;
	}

	export interface DetachStaticIpResult {
		operations?: Array<Operation>;
	}

	export interface DetachStaticIpRequest {
		staticIpName: string;
	}

	export interface DisableAddOnResult {
		operations?: Array<Operation>;
	}

	export interface DisableAddOnRequest {
		addOnType: AddOnRequestAddOnType;
		resourceName: string;
	}

	export interface DownloadDefaultKeyPairResult {
		publicKeyBase64?: string;
		privateKeyBase64?: string;
	}

	export interface DownloadDefaultKeyPairRequest {
	}

	export interface EnableAddOnResult {
		operations?: Array<Operation>;
	}

	export interface EnableAddOnRequest {
		resourceName: string;

		/**
		 * <p>Describes a request to enable, modify, or disable an add-on for an Amazon Lightsail resource.</p> <note> <p>An additional cost may be associated with enabling add-ons. For more information, see the <a href="https://aws.amazon.com/lightsail/pricing/">Lightsail pricing page</a>.</p> </note>
		 * Required
		 */
		addOnRequest: AddOnRequest;
	}

	export interface ExportSnapshotResult {
		operations?: Array<Operation>;
	}

	export interface ExportSnapshotRequest {
		sourceSnapshotName: string;
	}

	export interface GetActiveNamesResult {
		activeNames?: Array<string>;
		nextPageToken?: string;
	}

	export interface GetActiveNamesRequest {
		pageToken?: string;
	}

	export interface GetAlarmsResult {
		alarms?: Array<Alarm>;
		nextPageToken?: string;
	}


	/** <p>Describes an alarm.</p> <p>An alarm is a way to monitor your Amazon Lightsail resource metrics. For more information, see <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-alarms">Alarms in Amazon Lightsail</a>.</p> */
	export interface Alarm {
		name?: string;
		arn?: string;
		createdAt?: Date;

		/** Describes the resource location. */
		location?: ResourceLocation;
		resourceType?: OperationResourceType;
		supportCode?: string;

		/** <p>Describes resource being monitored by an alarm.</p> <p>An alarm is a way to monitor your Amazon Lightsail resource metrics. For more information, see <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-alarms">Alarms in Amazon Lightsail</a>.</p> */
		monitoredResourceInfo?: MonitoredResourceInfo;
		comparisonOperator?: AlarmComparisonOperator;
		evaluationPeriods?: number;
		period?: number;
		threshold?: number;
		datapointsToAlarm?: number;
		treatMissingData?: AlarmTreatMissingData;
		statistic?: AlarmStatistic;
		metricName?: AlarmMetricName;
		state?: AlarmState;
		unit?: AlarmUnit;
		contactProtocols?: Array<ContactProtocol>;
		notificationTriggers?: Array<AlarmState>;
		notificationEnabled?: boolean;
	}


	/** <p>Describes resource being monitored by an alarm.</p> <p>An alarm is a way to monitor your Amazon Lightsail resource metrics. For more information, see <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-alarms">Alarms in Amazon Lightsail</a>.</p> */
	export interface MonitoredResourceInfo {
		arn?: string;
		name?: string;
		resourceType?: OperationResourceType;
	}

	export enum AlarmComparisonOperator { GreaterThanOrEqualToThreshold = 0, GreaterThanThreshold = 1, LessThanThreshold = 2, LessThanOrEqualToThreshold = 3 }

	export enum AlarmTreatMissingData { breaching = 0, notBreaching = 1, ignore = 2, missing = 3 }

	export enum AlarmStatistic { Minimum = 0, Maximum = 1, Sum = 2, Average = 3, SampleCount = 4 }

	export enum AlarmMetricName { CPUUtilization = 0, NetworkIn = 1, NetworkOut = 2, StatusCheckFailed = 3, StatusCheckFailed_Instance = 4, StatusCheckFailed_System = 5, ClientTLSNegotiationErrorCount = 6, HealthyHostCount = 7, UnhealthyHostCount = 8, HTTPCode_LB_4XX_Count = 9, HTTPCode_LB_5XX_Count = 10, HTTPCode_Instance_2XX_Count = 11, HTTPCode_Instance_3XX_Count = 12, HTTPCode_Instance_4XX_Count = 13, HTTPCode_Instance_5XX_Count = 14, InstanceResponseTime = 15, RejectedConnectionCount = 16, RequestCount = 17, DatabaseConnections = 18, DiskQueueDepth = 19, FreeStorageSpace = 20, NetworkReceiveThroughput = 21, NetworkTransmitThroughput = 22, BurstCapacityTime = 23, BurstCapacityPercentage = 24 }

	export enum AlarmState { OK = 0, ALARM = 1, INSUFFICIENT_DATA = 2 }

	export enum AlarmUnit { Seconds = 0, Microseconds = 1, Milliseconds = 2, Bytes = 3, Kilobytes = 4, Megabytes = 5, Gigabytes = 6, Terabytes = 7, Bits = 8, Kilobits = 9, Megabits = 10, Gigabits = 11, Terabits = 12, Percent = 13, Count = 14, Bytes_Second = 15, Kilobytes_Second = 16, Megabytes_Second = 17, Gigabytes_Second = 18, Terabytes_Second = 19, Bits_Second = 20, Kilobits_Second = 21, Megabits_Second = 22, Gigabits_Second = 23, Terabits_Second = 24, Count_Second = 25, None = 26 }

	export enum ContactProtocol { Email = 0, SMS = 1 }

	export interface GetAlarmsRequest {
		alarmName?: string;
		pageToken?: string;
		monitoredResourceName?: string;
	}

	export interface GetAutoSnapshotsResult {
		resourceName?: string;
		resourceType?: OperationResourceType;
		autoSnapshots?: Array<AutoSnapshotDetails>;
	}


	/** Describes an automatic snapshot. */
	export interface AutoSnapshotDetails {
		date?: string;
		createdAt?: Date;
		status?: AutoSnapshotDetailsStatus;
		fromAttachedDisks?: Array<AttachedDisk>;
	}

	export enum AutoSnapshotDetailsStatus { Success = 0, Failed = 1, InProgress = 2, NotFound = 3 }


	/** Describes a block storage disk that is attached to an instance, and is included in an automatic snapshot. */
	export interface AttachedDisk {
		path?: string;
		sizeInGb?: number;
	}

	export interface GetAutoSnapshotsRequest {
		resourceName: string;
	}

	export interface GetBlueprintsResult {
		blueprints?: Array<Blueprint>;
		nextPageToken?: string;
	}


	/** Describes a blueprint (a virtual private server image). */
	export interface Blueprint {
		blueprintId?: string;
		name?: string;
		group?: string;
		type?: BlueprintType;
		description?: string;
		isActive?: boolean;
		minPower?: number;
		version?: string;
		versionCode?: string;
		productUrl?: string;
		licenseUrl?: string;
		platform?: BlueprintPlatform;
	}

	export enum BlueprintType { os = 0, app = 1 }

	export enum BlueprintPlatform { LINUX_UNIX = 0, WINDOWS = 1 }

	export interface GetBlueprintsRequest {
		includeInactive?: boolean;
		pageToken?: string;
	}

	export interface GetBundlesResult {
		bundles?: Array<Bundle>;
		nextPageToken?: string;
	}


	/** Describes a bundle, which is a set of specs describing your virtual private server (or <i>instance</i>). */
	export interface Bundle {
		price?: number;
		cpuCount?: number;
		diskSizeInGb?: number;
		bundleId?: string;
		instanceType?: string;
		isActive?: boolean;
		name?: string;
		power?: number;
		ramSizeInGb?: number;
		transferPerMonthInGb?: number;
		supportedPlatforms?: Array<InstancePlatform>;
	}

	export enum InstancePlatform { LINUX_UNIX = 0, WINDOWS = 1 }

	export interface GetBundlesRequest {
		includeInactive?: boolean;
		pageToken?: string;
	}

	export interface GetCloudFormationStackRecordsResult {
		cloudFormationStackRecords?: Array<CloudFormationStackRecord>;
		nextPageToken?: string;
	}


	/** <p>Describes a CloudFormation stack record created as a result of the <code>create cloud formation stack</code> operation.</p> <p>A CloudFormation stack record provides information about the AWS CloudFormation stack used to create a new Amazon Elastic Compute Cloud instance from an exported Lightsail instance snapshot.</p> */
	export interface CloudFormationStackRecord {
		name?: string;
		arn?: string;
		createdAt?: Date;

		/** Describes the resource location. */
		location?: ResourceLocation;
		resourceType?: OperationResourceType;
		state?: CloudFormationStackRecordState;
		sourceInfo?: Array<CloudFormationStackRecordSourceInfo>;

		/** Describes the destination of a record. */
		destinationInfo?: DestinationInfo;
	}

	export enum CloudFormationStackRecordState { Started = 0, Succeeded = 1, Failed = 2 }


	/** Describes the source of a CloudFormation stack record (i.e., the export snapshot record). */
	export interface CloudFormationStackRecordSourceInfo {
		resourceType?: CloudFormationStackRecordSourceInfoResourceType;
		name?: string;
		arn?: string;
	}

	export enum CloudFormationStackRecordSourceInfoResourceType { ExportSnapshotRecord = 0 }


	/** Describes the destination of a record. */
	export interface DestinationInfo {
		id?: string;
		service?: string;
	}

	export interface GetCloudFormationStackRecordsRequest {
		pageToken?: string;
	}

	export interface GetContactMethodsResult {
		contactMethods?: Array<ContactMethod>;
	}


	/** <p>Describes a contact method.</p> <p>A contact method is a way to send you notifications. For more information, see <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-notifications">Notifications in Amazon Lightsail</a>.</p> */
	export interface ContactMethod {
		contactEndpoint?: string;
		status?: ContactMethodStatus;
		protocol?: CreateContactMethodRequestProtocol;
		name?: string;
		arn?: string;
		createdAt?: Date;

		/** Describes the resource location. */
		location?: ResourceLocation;
		resourceType?: OperationResourceType;
		supportCode?: string;
	}

	export enum ContactMethodStatus { PendingVerification = 0, Valid = 1, Invalid = 2 }

	export interface GetContactMethodsRequest {
		protocols?: Array<ContactProtocol>;
	}

	export interface GetDiskResult {

		/** Describes a system disk or a block storage disk. */
		disk?: Disk;
	}


	/** Describes a system disk or a block storage disk. */
	export interface Disk {
		name?: string;
		arn?: string;
		supportCode?: string;
		createdAt?: Date;

		/** Describes the resource location. */
		location?: ResourceLocation;
		resourceType?: OperationResourceType;
		tags?: Array<Tag>;
		addOns?: Array<AddOn>;
		sizeInGb?: number;
		isSystemDisk?: boolean;
		iops?: number;
		path?: string;
		state?: DiskState;
		attachedTo?: string;
		isAttached?: boolean;
		attachmentState?: string;
		gbInUse?: number;
	}


	/** Describes an add-on that is enabled for an Amazon Lightsail resource. */
	export interface AddOn {
		name?: string;
		status?: string;
		snapshotTimeOfDay?: string;
		nextSnapshotTimeOfDay?: string;
	}

	export enum DiskState { pending = 0, error = 1, available = 2, in_use = 3, unknown = 4 }

	export interface GetDiskRequest {
		diskName: string;
	}

	export interface GetDiskSnapshotResult {

		/** Describes a block storage disk snapshot. */
		diskSnapshot?: DiskSnapshot;
	}


	/** Describes a block storage disk snapshot. */
	export interface DiskSnapshot {
		name?: string;
		arn?: string;
		supportCode?: string;
		createdAt?: Date;

		/** Describes the resource location. */
		location?: ResourceLocation;
		resourceType?: OperationResourceType;
		tags?: Array<Tag>;
		sizeInGb?: number;
		state?: DiskSnapshotState;
		progress?: string;
		fromDiskName?: string;
		fromDiskArn?: string;
		fromInstanceName?: string;
		fromInstanceArn?: string;
		isFromAutoSnapshot?: boolean;
	}

	export enum DiskSnapshotState { pending = 0, completed = 1, error = 2, unknown = 3 }

	export interface GetDiskSnapshotRequest {
		diskSnapshotName: string;
	}

	export interface GetDiskSnapshotsResult {
		diskSnapshots?: Array<DiskSnapshot>;
		nextPageToken?: string;
	}

	export interface GetDiskSnapshotsRequest {
		pageToken?: string;
	}

	export interface GetDisksResult {
		disks?: Array<Disk>;
		nextPageToken?: string;
	}

	export interface GetDisksRequest {
		pageToken?: string;
	}

	export interface GetDomainResult {

		/** Describes a domain where you are storing recordsets in Lightsail. */
		domain?: Domain;
	}


	/** Describes a domain where you are storing recordsets in Lightsail. */
	export interface Domain {
		name?: string;
		arn?: string;
		supportCode?: string;
		createdAt?: Date;

		/** Describes the resource location. */
		location?: ResourceLocation;
		resourceType?: OperationResourceType;
		tags?: Array<Tag>;
		domainEntries?: Array<DomainEntry>;
	}

	export interface GetDomainRequest {
		domainName: string;
	}

	export interface GetDomainsResult {
		domains?: Array<Domain>;
		nextPageToken?: string;
	}

	export interface GetDomainsRequest {
		pageToken?: string;
	}

	export interface GetExportSnapshotRecordsResult {
		exportSnapshotRecords?: Array<ExportSnapshotRecord>;
		nextPageToken?: string;
	}


	/** Describes an export snapshot record. */
	export interface ExportSnapshotRecord {
		name?: string;
		arn?: string;
		createdAt?: Date;

		/** Describes the resource location. */
		location?: ResourceLocation;
		resourceType?: OperationResourceType;
		state?: CloudFormationStackRecordState;

		/** Describes the source of an export snapshot record. */
		sourceInfo?: ExportSnapshotRecordSourceInfo;

		/** Describes the destination of a record. */
		destinationInfo?: DestinationInfo;
	}


	/** Describes the source of an export snapshot record. */
	export interface ExportSnapshotRecordSourceInfo {
		resourceType?: ExportSnapshotRecordSourceInfoResourceType;
		createdAt?: Date;
		name?: string;
		arn?: string;
		fromResourceName?: string;
		fromResourceArn?: string;

		/** Describes an instance snapshot. */
		instanceSnapshotInfo?: InstanceSnapshotInfo;

		/** Describes a disk snapshot. */
		diskSnapshotInfo?: DiskSnapshotInfo;
	}

	export enum ExportSnapshotRecordSourceInfoResourceType { InstanceSnapshot = 0, DiskSnapshot = 1 }


	/** Describes an instance snapshot. */
	export interface InstanceSnapshotInfo {
		fromBundleId?: string;
		fromBlueprintId?: string;
		fromDiskInfo?: Array<DiskInfo>;
	}


	/** Describes a disk. */
	export interface DiskInfo {
		name?: string;
		path?: string;
		sizeInGb?: number;
		isSystemDisk?: boolean;
	}


	/** Describes a disk snapshot. */
	export interface DiskSnapshotInfo {
		sizeInGb?: number;
	}

	export interface GetExportSnapshotRecordsRequest {
		pageToken?: string;
	}

	export interface GetInstanceResult {

		/** Describes an instance (a virtual private server). */
		instance?: Instance;
	}


	/** Describes an instance (a virtual private server). */
	export interface Instance {
		name?: string;
		arn?: string;
		supportCode?: string;
		createdAt?: Date;

		/** Describes the resource location. */
		location?: ResourceLocation;
		resourceType?: OperationResourceType;
		tags?: Array<Tag>;
		blueprintId?: string;
		blueprintName?: string;
		bundleId?: string;
		addOns?: Array<AddOn>;
		isStaticIp?: boolean;
		privateIpAddress?: string;
		publicIpAddress?: string;
		ipv6Address?: string;

		/** Describes the hardware for the instance. */
		hardware?: InstanceHardware;

		/** Describes monthly data transfer rates and port information for an instance. */
		networking?: InstanceNetworking;

		/** Describes the virtual private server (or <i>instance</i>) status. */
		state?: InstanceState;
		username?: string;
		sshKeyName?: string;
	}


	/** Describes the hardware for the instance. */
	export interface InstanceHardware {
		cpuCount?: number;
		disks?: Array<Disk>;
		ramSizeInGb?: number;
	}


	/** Describes monthly data transfer rates and port information for an instance. */
	export interface InstanceNetworking {

		/** Describes the monthly data transfer in and out of your virtual private server (or <i>instance</i>). */
		monthlyTransfer?: MonthlyTransfer;
		ports?: Array<InstancePortInfo>;
	}


	/** Describes the monthly data transfer in and out of your virtual private server (or <i>instance</i>). */
	export interface MonthlyTransfer {
		gbPerMonthAllocated?: number;
	}


	/** Describes information about ports for an Amazon Lightsail instance. */
	export interface InstancePortInfo {
		fromPort?: number;
		toPort?: number;
		protocol?: PortInfoProtocol;
		accessFrom?: string;
		accessType?: InstancePortInfoAccessType;
		commonName?: string;
		accessDirection?: InstancePortInfoAccessDirection;
		cidrs?: Array<string>;
		cidrListAliases?: Array<string>;
	}

	export enum InstancePortInfoAccessType { Public = 0, Private = 1 }

	export enum InstancePortInfoAccessDirection { inbound = 0, outbound = 1 }


	/** Describes the virtual private server (or <i>instance</i>) status. */
	export interface InstanceState {
		code?: number;
		name?: string;
	}

	export interface GetInstanceRequest {
		instanceName: string;
	}

	export interface GetInstanceAccessDetailsResult {

		/** The parameters for gaining temporary access to one of your Amazon Lightsail instances. */
		accessDetails?: InstanceAccessDetails;
	}


	/** The parameters for gaining temporary access to one of your Amazon Lightsail instances. */
	export interface InstanceAccessDetails {
		certKey?: string;
		expiresAt?: Date;
		ipAddress?: string;
		password?: string;

		/** The password data for the Windows Server-based instance, including the ciphertext and the key pair name. */
		passwordData?: PasswordData;
		privateKey?: string;
		protocol?: InstanceAccessDetailsProtocol;
		instanceName?: string;
		username?: string;
		hostKeys?: Array<HostKeyAttributes>;
	}


	/** The password data for the Windows Server-based instance, including the ciphertext and the key pair name. */
	export interface PasswordData {
		ciphertext?: string;
		keyPairName?: string;
	}

	export enum InstanceAccessDetailsProtocol { ssh = 0, rdp = 1 }


	/** Describes the public SSH host keys or the RDP certificate. */
	export interface HostKeyAttributes {
		algorithm?: string;
		publicKey?: string;
		witnessedAt?: Date;
		fingerprintSHA1?: string;
		fingerprintSHA256?: string;
		notValidBefore?: Date;
		notValidAfter?: Date;
	}

	export interface GetInstanceAccessDetailsRequest {
		instanceName: string;
		protocol?: InstanceAccessDetailsProtocol;
	}

	export interface GetInstanceMetricDataResult {
		metricName?: GetInstanceMetricDataResultMetricName;
		metricData?: Array<MetricDatapoint>;
	}

	export enum GetInstanceMetricDataResultMetricName { CPUUtilization = 0, NetworkIn = 1, NetworkOut = 2, StatusCheckFailed = 3, StatusCheckFailed_Instance = 4, StatusCheckFailed_System = 5, BurstCapacityTime = 6, BurstCapacityPercentage = 7 }


	/** Describes the metric data point. */
	export interface MetricDatapoint {
		average?: number;
		maximum?: number;
		minimum?: number;
		sampleCount?: number;
		sum?: number;
		timestamp?: Date;
		unit?: MetricDatapointUnit;
	}

	export enum MetricDatapointUnit { Seconds = 0, Microseconds = 1, Milliseconds = 2, Bytes = 3, Kilobytes = 4, Megabytes = 5, Gigabytes = 6, Terabytes = 7, Bits = 8, Kilobits = 9, Megabits = 10, Gigabits = 11, Terabits = 12, Percent = 13, Count = 14, Bytes_Second = 15, Kilobytes_Second = 16, Megabytes_Second = 17, Gigabytes_Second = 18, Terabytes_Second = 19, Bits_Second = 20, Kilobits_Second = 21, Megabits_Second = 22, Gigabits_Second = 23, Terabits_Second = 24, Count_Second = 25, None = 26 }

	export interface GetInstanceMetricDataRequest {
		instanceName: string;
		metricName: GetInstanceMetricDataResultMetricName;
		period: number;
		startTime: Date;
		endTime: Date;
		unit: GetInstanceMetricDataRequestUnit;
		statistics: Array<MetricStatistic>;
	}

	export enum GetInstanceMetricDataRequestUnit { Seconds = 0, Microseconds = 1, Milliseconds = 2, Bytes = 3, Kilobytes = 4, Megabytes = 5, Gigabytes = 6, Terabytes = 7, Bits = 8, Kilobits = 9, Megabits = 10, Gigabits = 11, Terabits = 12, Percent = 13, Count = 14, Bytes_Second = 15, Kilobytes_Second = 16, Megabytes_Second = 17, Gigabytes_Second = 18, Terabytes_Second = 19, Bits_Second = 20, Kilobits_Second = 21, Megabits_Second = 22, Gigabits_Second = 23, Terabits_Second = 24, Count_Second = 25, None = 26 }

	export enum MetricStatistic { Minimum = 0, Maximum = 1, Sum = 2, Average = 3, SampleCount = 4 }

	export interface GetInstancePortStatesResult {
		portStates?: Array<InstancePortState>;
	}


	/** Describes open ports on an instance, the IP addresses allowed to connect to the instance through the ports, and the protocol. */
	export interface InstancePortState {
		fromPort?: number;
		toPort?: number;
		protocol?: PortInfoProtocol;
		state?: InstancePortStateState;
		cidrs?: Array<string>;
		cidrListAliases?: Array<string>;
	}

	export enum InstancePortStateState { open = 0, closed = 1 }

	export interface GetInstancePortStatesRequest {
		instanceName: string;
	}

	export interface GetInstanceSnapshotResult {

		/** Describes an instance snapshot. */
		instanceSnapshot?: InstanceSnapshot;
	}


	/** Describes an instance snapshot. */
	export interface InstanceSnapshot {
		name?: string;
		arn?: string;
		supportCode?: string;
		createdAt?: Date;

		/** Describes the resource location. */
		location?: ResourceLocation;
		resourceType?: OperationResourceType;
		tags?: Array<Tag>;
		state?: InstanceSnapshotState;
		progress?: string;
		fromAttachedDisks?: Array<Disk>;
		fromInstanceName?: string;
		fromInstanceArn?: string;
		fromBlueprintId?: string;
		fromBundleId?: string;
		isFromAutoSnapshot?: boolean;
		sizeInGb?: number;
	}

	export enum InstanceSnapshotState { pending = 0, error = 1, available = 2 }

	export interface GetInstanceSnapshotRequest {
		instanceSnapshotName: string;
	}

	export interface GetInstanceSnapshotsResult {
		instanceSnapshots?: Array<InstanceSnapshot>;
		nextPageToken?: string;
	}

	export interface GetInstanceSnapshotsRequest {
		pageToken?: string;
	}

	export interface GetInstanceStateResult {

		/** Describes the virtual private server (or <i>instance</i>) status. */
		state?: InstanceState;
	}

	export interface GetInstanceStateRequest {
		instanceName: string;
	}

	export interface GetInstancesResult {
		instances?: Array<Instance>;
		nextPageToken?: string;
	}

	export interface GetInstancesRequest {
		pageToken?: string;
	}

	export interface GetKeyPairResult {

		/** Describes the SSH key pair. */
		keyPair?: KeyPair;
	}

	export interface GetKeyPairRequest {
		keyPairName: string;
	}

	export interface GetKeyPairsResult {
		keyPairs?: Array<KeyPair>;
		nextPageToken?: string;
	}

	export interface GetKeyPairsRequest {
		pageToken?: string;
	}

	export interface GetLoadBalancerResult {

		/** Describes the Lightsail load balancer. */
		loadBalancer?: LoadBalancer;
	}


	/** Describes the Lightsail load balancer. */
	export interface LoadBalancer {
		name?: string;
		arn?: string;
		supportCode?: string;
		createdAt?: Date;

		/** Describes the resource location. */
		location?: ResourceLocation;
		resourceType?: OperationResourceType;
		tags?: Array<Tag>;
		dnsName?: string;
		state?: LoadBalancerState;
		protocol?: LoadBalancerProtocol;
		publicPorts?: Array<number>;
		healthCheckPath?: string;
		instancePort?: number;
		instanceHealthSummary?: Array<InstanceHealthSummary>;
		tlsCertificateSummaries?: Array<LoadBalancerTlsCertificateSummary>;
		configurationOptions?: LoadBalancerConfigurationOptions;
	}

	export enum LoadBalancerState { active = 0, provisioning = 1, active_impaired = 2, failed = 3, unknown = 4 }

	export enum LoadBalancerProtocol { HTTP_HTTPS = 0, HTTP = 1 }


	/** Describes information about the health of the instance. */
	export interface InstanceHealthSummary {
		instanceName?: string;
		instanceHealth?: InstanceHealthSummaryInstanceHealth;
		instanceHealthReason?: InstanceHealthSummaryInstanceHealthReason;
	}

	export enum InstanceHealthSummaryInstanceHealth { initial = 0, healthy = 1, unhealthy = 2, unused = 3, draining = 4, unavailable = 5 }

	export enum InstanceHealthSummaryInstanceHealthReason { Lb_RegistrationInProgress = 0, Lb_InitialHealthChecking = 1, Lb_InternalError = 2, Instance_ResponseCodeMismatch = 3, Instance_Timeout = 4, Instance_FailedHealthChecks = 5, Instance_NotRegistered = 6, Instance_NotInUse = 7, Instance_DeregistrationInProgress = 8, Instance_InvalidState = 9, Instance_IpUnusable = 10 }


	/** Provides a summary of SSL/TLS certificate metadata. */
	export interface LoadBalancerTlsCertificateSummary {
		name?: string;
		isAttached?: boolean;
	}

	export interface LoadBalancerConfigurationOptions {
	}

	export interface GetLoadBalancerRequest {
		loadBalancerName: string;
	}

	export interface GetLoadBalancerMetricDataResult {
		metricName?: GetLoadBalancerMetricDataResultMetricName;
		metricData?: Array<MetricDatapoint>;
	}

	export enum GetLoadBalancerMetricDataResultMetricName { ClientTLSNegotiationErrorCount = 0, HealthyHostCount = 1, UnhealthyHostCount = 2, HTTPCode_LB_4XX_Count = 3, HTTPCode_LB_5XX_Count = 4, HTTPCode_Instance_2XX_Count = 5, HTTPCode_Instance_3XX_Count = 6, HTTPCode_Instance_4XX_Count = 7, HTTPCode_Instance_5XX_Count = 8, InstanceResponseTime = 9, RejectedConnectionCount = 10, RequestCount = 11 }

	export interface GetLoadBalancerMetricDataRequest {
		loadBalancerName: string;
		metricName: GetLoadBalancerMetricDataResultMetricName;
		period: number;
		startTime: Date;
		endTime: Date;
		unit: GetLoadBalancerMetricDataRequestUnit;
		statistics: Array<MetricStatistic>;
	}

	export enum GetLoadBalancerMetricDataRequestUnit { Seconds = 0, Microseconds = 1, Milliseconds = 2, Bytes = 3, Kilobytes = 4, Megabytes = 5, Gigabytes = 6, Terabytes = 7, Bits = 8, Kilobits = 9, Megabits = 10, Gigabits = 11, Terabits = 12, Percent = 13, Count = 14, Bytes_Second = 15, Kilobytes_Second = 16, Megabytes_Second = 17, Gigabytes_Second = 18, Terabytes_Second = 19, Bits_Second = 20, Kilobits_Second = 21, Megabits_Second = 22, Gigabits_Second = 23, Terabits_Second = 24, Count_Second = 25, None = 26 }

	export interface GetLoadBalancerTlsCertificatesResult {
		tlsCertificates?: Array<LoadBalancerTlsCertificate>;
	}


	/** <p>Describes a load balancer SSL/TLS certificate.</p> <p>TLS is just an updated, more secure version of Secure Socket Layer (SSL).</p> */
	export interface LoadBalancerTlsCertificate {
		name?: string;
		arn?: string;
		supportCode?: string;
		createdAt?: Date;

		/** Describes the resource location. */
		location?: ResourceLocation;
		resourceType?: OperationResourceType;
		tags?: Array<Tag>;
		loadBalancerName?: string;
		isAttached?: boolean;
		status?: LoadBalancerTlsCertificateStatus;
		domainName?: string;
		domainValidationRecords?: Array<LoadBalancerTlsCertificateDomainValidationRecord>;
		failureReason?: LoadBalancerTlsCertificateFailureReason;
		issuedAt?: Date;
		issuer?: string;
		keyAlgorithm?: string;
		notAfter?: Date;
		notBefore?: Date;

		/** Contains information about the status of Lightsail's managed renewal for the certificate. */
		renewalSummary?: LoadBalancerTlsCertificateRenewalSummary;
		revocationReason?: LoadBalancerTlsCertificateRevocationReason;
		revokedAt?: Date;
		serial?: string;
		signatureAlgorithm?: string;
		subject?: string;
		subjectAlternativeNames?: Array<string>;
	}

	export enum LoadBalancerTlsCertificateStatus { PENDING_VALIDATION = 0, ISSUED = 1, INACTIVE = 2, EXPIRED = 3, VALIDATION_TIMED_OUT = 4, REVOKED = 5, FAILED = 6, UNKNOWN = 7 }


	/** Describes the validation record of each domain name in the SSL/TLS certificate. */
	export interface LoadBalancerTlsCertificateDomainValidationRecord {
		name?: string;
		type?: string;
		value?: string;
		validationStatus?: LoadBalancerTlsCertificateDomainValidationRecordValidationStatus;
		domainName?: string;
	}

	export enum LoadBalancerTlsCertificateDomainValidationRecordValidationStatus { PENDING_VALIDATION = 0, FAILED = 1, SUCCESS = 2 }

	export enum LoadBalancerTlsCertificateFailureReason { NO_AVAILABLE_CONTACTS = 0, ADDITIONAL_VERIFICATION_REQUIRED = 1, DOMAIN_NOT_ALLOWED = 2, INVALID_PUBLIC_DOMAIN = 3, OTHER = 4 }


	/** Contains information about the status of Lightsail's managed renewal for the certificate. */
	export interface LoadBalancerTlsCertificateRenewalSummary {
		renewalStatus?: LoadBalancerTlsCertificateRenewalSummaryRenewalStatus;
		domainValidationOptions?: Array<LoadBalancerTlsCertificateDomainValidationOption>;
	}

	export enum LoadBalancerTlsCertificateRenewalSummaryRenewalStatus { PENDING_AUTO_RENEWAL = 0, PENDING_VALIDATION = 1, SUCCESS = 2, FAILED = 3 }


	/** Contains information about the domain names on an SSL/TLS certificate that you will use to validate domain ownership. */
	export interface LoadBalancerTlsCertificateDomainValidationOption {
		domainName?: string;
		validationStatus?: LoadBalancerTlsCertificateDomainValidationRecordValidationStatus;
	}

	export enum LoadBalancerTlsCertificateRevocationReason { UNSPECIFIED = 0, KEY_COMPROMISE = 1, CA_COMPROMISE = 2, AFFILIATION_CHANGED = 3, SUPERCEDED = 4, CESSATION_OF_OPERATION = 5, CERTIFICATE_HOLD = 6, REMOVE_FROM_CRL = 7, PRIVILEGE_WITHDRAWN = 8, A_A_COMPROMISE = 9 }

	export interface GetLoadBalancerTlsCertificatesRequest {
		loadBalancerName: string;
	}

	export interface GetLoadBalancersResult {
		loadBalancers?: Array<LoadBalancer>;
		nextPageToken?: string;
	}

	export interface GetLoadBalancersRequest {
		pageToken?: string;
	}

	export interface GetOperationResult {

		/** Describes the API operation. */
		operation?: Operation;
	}

	export interface GetOperationRequest {
		operationId: string;
	}

	export interface GetOperationsResult {
		operations?: Array<Operation>;
		nextPageToken?: string;
	}

	export interface GetOperationsRequest {
		pageToken?: string;
	}

	export interface GetOperationsForResourceResult {
		operations?: Array<Operation>;
		nextPageCount?: string;
		nextPageToken?: string;
	}

	export interface GetOperationsForResourceRequest {
		resourceName: string;
		pageToken?: string;
	}

	export interface GetRegionsResult {
		regions?: Array<Region>;
	}


	/** Describes the AWS Region. */
	export interface Region {
		continentCode?: string;
		description?: string;
		displayName?: string;
		name?: RegionName;
		availabilityZones?: Array<AvailabilityZone>;
		relationalDatabaseAvailabilityZones?: Array<AvailabilityZone>;
	}

	export enum RegionName { us_east_1 = 0, us_east_2 = 1, us_west_1 = 2, us_west_2 = 3, eu_west_1 = 4, eu_west_2 = 5, eu_west_3 = 6, eu_central_1 = 7, ca_central_1 = 8, ap_south_1 = 9, ap_southeast_1 = 10, ap_southeast_2 = 11, ap_northeast_1 = 12, ap_northeast_2 = 13 }


	/** Describes an Availability Zone. */
	export interface AvailabilityZone {
		zoneName?: string;
		state?: string;
	}

	export interface GetRegionsRequest {
		includeAvailabilityZones?: boolean;
		includeRelationalDatabaseAvailabilityZones?: boolean;
	}

	export interface GetRelationalDatabaseResult {

		/** Describes a database. */
		relationalDatabase?: RelationalDatabase;
	}


	/** Describes a database. */
	export interface RelationalDatabase {
		name?: string;
		arn?: string;
		supportCode?: string;
		createdAt?: Date;

		/** Describes the resource location. */
		location?: ResourceLocation;
		resourceType?: OperationResourceType;
		tags?: Array<Tag>;
		relationalDatabaseBlueprintId?: string;
		relationalDatabaseBundleId?: string;
		masterDatabaseName?: string;

		/** Describes the hardware of a database. */
		hardware?: RelationalDatabaseHardware;
		state?: string;
		secondaryAvailabilityZone?: string;
		backupRetentionEnabled?: boolean;

		/** Describes a pending database value modification. */
		pendingModifiedValues?: PendingModifiedRelationalDatabaseValues;
		engine?: string;
		engineVersion?: string;
		latestRestorableTime?: Date;
		masterUsername?: string;
		parameterApplyStatus?: string;
		preferredBackupWindow?: string;
		preferredMaintenanceWindow?: string;
		publiclyAccessible?: boolean;

		/** Describes an endpoint for a database. */
		masterEndpoint?: RelationalDatabaseEndpoint;
		pendingMaintenanceActions?: Array<PendingMaintenanceAction>;
		caCertificateIdentifier?: string;
	}


	/** Describes the hardware of a database. */
	export interface RelationalDatabaseHardware {
		cpuCount?: number;
		diskSizeInGb?: number;
		ramSizeInGb?: number;
	}


	/** Describes a pending database value modification. */
	export interface PendingModifiedRelationalDatabaseValues {
		masterUserPassword?: string;
		engineVersion?: string;
		backupRetentionEnabled?: boolean;
	}


	/** Describes an endpoint for a database. */
	export interface RelationalDatabaseEndpoint {
		port?: number;
		address?: string;
	}


	/** Describes a pending database maintenance action. */
	export interface PendingMaintenanceAction {
		action?: string;
		description?: string;
		currentApplyDate?: Date;
	}

	export interface GetRelationalDatabaseRequest {
		relationalDatabaseName: string;
	}

	export interface GetRelationalDatabaseBlueprintsResult {
		blueprints?: Array<RelationalDatabaseBlueprint>;
		nextPageToken?: string;
	}


	/** Describes a database image, or blueprint. A blueprint describes the major engine version of a database. */
	export interface RelationalDatabaseBlueprint {
		blueprintId?: string;
		engine?: RelationalDatabaseBlueprintEngine;
		engineVersion?: string;
		engineDescription?: string;
		engineVersionDescription?: string;
		isEngineDefault?: boolean;
	}

	export enum RelationalDatabaseBlueprintEngine { mysql = 0 }

	export interface GetRelationalDatabaseBlueprintsRequest {
		pageToken?: string;
	}

	export interface GetRelationalDatabaseBundlesResult {
		bundles?: Array<RelationalDatabaseBundle>;
		nextPageToken?: string;
	}


	/** Describes a database bundle. A bundle describes the performance specifications of the database. */
	export interface RelationalDatabaseBundle {
		bundleId?: string;
		name?: string;
		price?: number;
		ramSizeInGb?: number;
		diskSizeInGb?: number;
		transferPerMonthInGb?: number;
		cpuCount?: number;
		isEncrypted?: boolean;
		isActive?: boolean;
	}

	export interface GetRelationalDatabaseBundlesRequest {
		pageToken?: string;
	}

	export interface GetRelationalDatabaseEventsResult {
		relationalDatabaseEvents?: Array<RelationalDatabaseEvent>;
		nextPageToken?: string;
	}


	/** Describes an event for a database. */
	export interface RelationalDatabaseEvent {
		resource?: string;
		createdAt?: Date;
		message?: string;
		eventCategories?: Array<string>;
	}

	export interface GetRelationalDatabaseEventsRequest {
		relationalDatabaseName: string;
		durationInMinutes?: number;
		pageToken?: string;
	}

	export interface GetRelationalDatabaseLogEventsResult {
		resourceLogEvents?: Array<LogEvent>;
		nextBackwardToken?: string;
		nextForwardToken?: string;
	}


	/** Describes a database log event. */
	export interface LogEvent {
		createdAt?: Date;
		message?: string;
	}

	export interface GetRelationalDatabaseLogEventsRequest {
		relationalDatabaseName: string;
		logStreamName: string;
		startTime?: Date;
		endTime?: Date;
		startFromHead?: boolean;
		pageToken?: string;
	}

	export interface GetRelationalDatabaseLogStreamsResult {
		logStreams?: Array<string>;
	}

	export interface GetRelationalDatabaseLogStreamsRequest {
		relationalDatabaseName: string;
	}

	export interface GetRelationalDatabaseMasterUserPasswordResult {
		masterUserPassword?: string;
		createdAt?: Date;
	}

	export interface GetRelationalDatabaseMasterUserPasswordRequest {
		relationalDatabaseName: string;
		passwordVersion?: GetRelationalDatabaseMasterUserPasswordRequestPasswordVersion;
	}

	export enum GetRelationalDatabaseMasterUserPasswordRequestPasswordVersion { CURRENT = 0, PREVIOUS = 1, PENDING = 2 }

	export interface GetRelationalDatabaseMetricDataResult {
		metricName?: GetRelationalDatabaseMetricDataResultMetricName;
		metricData?: Array<MetricDatapoint>;
	}

	export enum GetRelationalDatabaseMetricDataResultMetricName { CPUUtilization = 0, DatabaseConnections = 1, DiskQueueDepth = 2, FreeStorageSpace = 3, NetworkReceiveThroughput = 4, NetworkTransmitThroughput = 5 }

	export interface GetRelationalDatabaseMetricDataRequest {
		relationalDatabaseName: string;
		metricName: GetRelationalDatabaseMetricDataResultMetricName;
		period: number;
		startTime: Date;
		endTime: Date;
		unit: GetRelationalDatabaseMetricDataRequestUnit;
		statistics: Array<MetricStatistic>;
	}

	export enum GetRelationalDatabaseMetricDataRequestUnit { Seconds = 0, Microseconds = 1, Milliseconds = 2, Bytes = 3, Kilobytes = 4, Megabytes = 5, Gigabytes = 6, Terabytes = 7, Bits = 8, Kilobits = 9, Megabits = 10, Gigabits = 11, Terabits = 12, Percent = 13, Count = 14, Bytes_Second = 15, Kilobytes_Second = 16, Megabytes_Second = 17, Gigabytes_Second = 18, Terabytes_Second = 19, Bits_Second = 20, Kilobits_Second = 21, Megabits_Second = 22, Gigabits_Second = 23, Terabits_Second = 24, Count_Second = 25, None = 26 }

	export interface GetRelationalDatabaseParametersResult {
		parameters?: Array<RelationalDatabaseParameter>;
		nextPageToken?: string;
	}


	/** Describes the parameters of a database. */
	export interface RelationalDatabaseParameter {
		allowedValues?: string;
		applyMethod?: string;
		applyType?: string;
		dataType?: string;
		description?: string;
		isModifiable?: boolean;
		parameterName?: string;
		parameterValue?: string;
	}

	export interface GetRelationalDatabaseParametersRequest {
		relationalDatabaseName: string;
		pageToken?: string;
	}

	export interface GetRelationalDatabaseSnapshotResult {

		/** Describes a database snapshot. */
		relationalDatabaseSnapshot?: RelationalDatabaseSnapshot;
	}


	/** Describes a database snapshot. */
	export interface RelationalDatabaseSnapshot {
		name?: string;
		arn?: string;
		supportCode?: string;
		createdAt?: Date;

		/** Describes the resource location. */
		location?: ResourceLocation;
		resourceType?: OperationResourceType;
		tags?: Array<Tag>;
		engine?: string;
		engineVersion?: string;
		sizeInGb?: number;
		state?: string;
		fromRelationalDatabaseName?: string;
		fromRelationalDatabaseArn?: string;
		fromRelationalDatabaseBundleId?: string;
		fromRelationalDatabaseBlueprintId?: string;
	}

	export interface GetRelationalDatabaseSnapshotRequest {
		relationalDatabaseSnapshotName: string;
	}

	export interface GetRelationalDatabaseSnapshotsResult {
		relationalDatabaseSnapshots?: Array<RelationalDatabaseSnapshot>;
		nextPageToken?: string;
	}

	export interface GetRelationalDatabaseSnapshotsRequest {
		pageToken?: string;
	}

	export interface GetRelationalDatabasesResult {
		relationalDatabases?: Array<RelationalDatabase>;
		nextPageToken?: string;
	}

	export interface GetRelationalDatabasesRequest {
		pageToken?: string;
	}

	export interface GetStaticIpResult {

		/** Describes the static IP. */
		staticIp?: StaticIp;
	}


	/** Describes the static IP. */
	export interface StaticIp {
		name?: string;
		arn?: string;
		supportCode?: string;
		createdAt?: Date;

		/** Describes the resource location. */
		location?: ResourceLocation;
		resourceType?: OperationResourceType;
		ipAddress?: string;
		attachedTo?: string;
		isAttached?: boolean;
	}

	export interface GetStaticIpRequest {
		staticIpName: string;
	}

	export interface GetStaticIpsResult {
		staticIps?: Array<StaticIp>;
		nextPageToken?: string;
	}

	export interface GetStaticIpsRequest {
		pageToken?: string;
	}

	export interface ImportKeyPairResult {

		/** Describes the API operation. */
		operation?: Operation;
	}

	export interface ImportKeyPairRequest {
		keyPairName: string;
		publicKeyBase64: string;
	}

	export interface IsVpcPeeredResult {
		isPeered?: boolean;
	}

	export interface IsVpcPeeredRequest {
	}

	export interface OpenInstancePublicPortsResult {

		/** Describes the API operation. */
		operation?: Operation;
	}

	export interface OpenInstancePublicPortsRequest {

		/**
		 * Describes ports to open on an instance, the IP addresses allowed to connect to the instance through the ports, and the protocol.
		 * Required
		 */
		portInfo: PortInfo;
		instanceName: string;
	}

	export interface PeerVpcResult {

		/** Describes the API operation. */
		operation?: Operation;
	}

	export interface PeerVpcRequest {
	}

	export interface PutAlarmResult {
		operations?: Array<Operation>;
	}

	export interface PutAlarmRequest {
		alarmName: string;
		metricName: AlarmMetricName;
		monitoredResourceName: string;
		comparisonOperator: AlarmComparisonOperator;
		threshold: number;
		evaluationPeriods: number;
		datapointsToAlarm?: number;
		treatMissingData?: AlarmTreatMissingData;
		contactProtocols?: Array<ContactProtocol>;
		notificationTriggers?: Array<AlarmState>;
		notificationEnabled?: boolean;
	}

	export interface PutInstancePublicPortsResult {

		/** Describes the API operation. */
		operation?: Operation;
	}

	export interface PutInstancePublicPortsRequest {
		portInfos: Array<PortInfo>;
		instanceName: string;
	}

	export interface RebootInstanceResult {
		operations?: Array<Operation>;
	}

	export interface RebootInstanceRequest {
		instanceName: string;
	}

	export interface RebootRelationalDatabaseResult {
		operations?: Array<Operation>;
	}

	export interface RebootRelationalDatabaseRequest {
		relationalDatabaseName: string;
	}

	export interface ReleaseStaticIpResult {
		operations?: Array<Operation>;
	}

	export interface ReleaseStaticIpRequest {
		staticIpName: string;
	}

	export interface SendContactMethodVerificationResult {
		operations?: Array<Operation>;
	}

	export interface SendContactMethodVerificationRequest {
		protocol: SendContactMethodVerificationRequestProtocol;
	}

	export enum SendContactMethodVerificationRequestProtocol { Email = 0 }

	export interface StartInstanceResult {
		operations?: Array<Operation>;
	}

	export interface StartInstanceRequest {
		instanceName: string;
	}

	export interface StartRelationalDatabaseResult {
		operations?: Array<Operation>;
	}

	export interface StartRelationalDatabaseRequest {
		relationalDatabaseName: string;
	}

	export interface StopInstanceResult {
		operations?: Array<Operation>;
	}

	export interface StopInstanceRequest {
		instanceName: string;
		force?: boolean;
	}

	export interface StopRelationalDatabaseResult {
		operations?: Array<Operation>;
	}

	export interface StopRelationalDatabaseRequest {
		relationalDatabaseName: string;
		relationalDatabaseSnapshotName?: string;
	}

	export interface TagResourceResult {
		operations?: Array<Operation>;
	}

	export interface TagResourceRequest {
		resourceName: string;
		resourceArn?: string;
		tags: Array<Tag>;
	}

	export interface TestAlarmResult {
		operations?: Array<Operation>;
	}

	export interface TestAlarmRequest {
		alarmName: string;
		state: AlarmState;
	}

	export interface UnpeerVpcResult {

		/** Describes the API operation. */
		operation?: Operation;
	}

	export interface UnpeerVpcRequest {
	}

	export interface UntagResourceResult {
		operations?: Array<Operation>;
	}

	export interface UntagResourceRequest {
		resourceName: string;
		resourceArn?: string;
		tagKeys: Array<string>;
	}

	export interface UpdateDomainEntryResult {
		operations?: Array<Operation>;
	}

	export interface UpdateDomainEntryRequest {
		domainName: string;

		/**
		 * Describes a domain recordset entry.
		 * Required
		 */
		domainEntry: DomainEntry;
	}

	export interface UpdateLoadBalancerAttributeResult {
		operations?: Array<Operation>;
	}

	export interface UpdateLoadBalancerAttributeRequest {
		loadBalancerName: string;
		attributeName: UpdateLoadBalancerAttributeRequestAttributeName;
		attributeValue: string;
	}

	export enum UpdateLoadBalancerAttributeRequestAttributeName { HealthCheckPath = 0, SessionStickinessEnabled = 1, SessionStickiness_LB_CookieDurationSeconds = 2 }

	export interface UpdateRelationalDatabaseResult {
		operations?: Array<Operation>;
	}

	export interface UpdateRelationalDatabaseRequest {
		relationalDatabaseName: string;
		masterUserPassword?: string;
		rotateMasterUserPassword?: boolean;
		preferredBackupWindow?: string;
		preferredMaintenanceWindow?: string;
		enableBackupRetention?: boolean;
		disableBackupRetention?: boolean;
		publiclyAccessible?: boolean;
		applyImmediately?: boolean;
		caCertificateIdentifier?: string;
	}

	export interface UpdateRelationalDatabaseParametersResult {
		operations?: Array<Operation>;
	}

	export interface UpdateRelationalDatabaseParametersRequest {
		relationalDatabaseName: string;
		parameters: Array<RelationalDatabaseParameter>;
	}

	export enum AccessDirection { inbound = 0, outbound = 1 }

	export enum AddOnType { AutoSnapshot = 0 }

	export enum ResourceType { Instance = 0, StaticIp = 1, KeyPair = 2, InstanceSnapshot = 3, Domain = 4, PeeredVpc = 5, LoadBalancer = 6, LoadBalancerTlsCertificate = 7, Disk = 8, DiskSnapshot = 9, RelationalDatabase = 10, RelationalDatabaseSnapshot = 11, ExportSnapshotRecord = 12, CloudFormationStackRecord = 13, Alarm = 14, ContactMethod = 15 }

	export enum ComparisonOperator { GreaterThanOrEqualToThreshold = 0, GreaterThanThreshold = 1, LessThanThreshold = 2, LessThanOrEqualToThreshold = 3 }

	export enum TreatMissingData { breaching = 0, notBreaching = 1, ignore = 2, missing = 3 }

	export enum MetricName { CPUUtilization = 0, NetworkIn = 1, NetworkOut = 2, StatusCheckFailed = 3, StatusCheckFailed_Instance = 4, StatusCheckFailed_System = 5, ClientTLSNegotiationErrorCount = 6, HealthyHostCount = 7, UnhealthyHostCount = 8, HTTPCode_LB_4XX_Count = 9, HTTPCode_LB_5XX_Count = 10, HTTPCode_Instance_2XX_Count = 11, HTTPCode_Instance_3XX_Count = 12, HTTPCode_Instance_4XX_Count = 13, HTTPCode_Instance_5XX_Count = 14, InstanceResponseTime = 15, RejectedConnectionCount = 16, RequestCount = 17, DatabaseConnections = 18, DiskQueueDepth = 19, FreeStorageSpace = 20, NetworkReceiveThroughput = 21, NetworkTransmitThroughput = 22, BurstCapacityTime = 23, BurstCapacityPercentage = 24 }

	export enum MetricUnit { Seconds = 0, Microseconds = 1, Milliseconds = 2, Bytes = 3, Kilobytes = 4, Megabytes = 5, Gigabytes = 6, Terabytes = 7, Bits = 8, Kilobits = 9, Megabits = 10, Gigabits = 11, Terabits = 12, Percent = 13, Count = 14, Bytes_Second = 15, Kilobytes_Second = 16, Megabytes_Second = 17, Gigabytes_Second = 18, Terabytes_Second = 19, Bits_Second = 20, Kilobits_Second = 21, Megabits_Second = 22, Gigabits_Second = 23, Terabits_Second = 24, Count_Second = 25, None = 26 }


	/** Describes a block storage disk mapping. */
	export interface DiskMap {
		originalDiskPath?: string;
		newDiskName?: string;
	}

	export enum AutoSnapshotStatus { Success = 0, Failed = 1, InProgress = 2, NotFound = 3 }

	export enum RecordState { Started = 0, Succeeded = 1, Failed = 2 }

	export enum CloudFormationStackRecordSourceType { ExportSnapshotRecord = 0 }

	export enum ContactMethodVerificationProtocol { Email = 0 }

	export enum ExportSnapshotRecordSourceType { InstanceSnapshot = 0, DiskSnapshot = 1 }

	export enum InstanceAccessProtocol { ssh = 0, rdp = 1 }

	export enum InstanceMetricName { CPUUtilization = 0, NetworkIn = 1, NetworkOut = 2, StatusCheckFailed = 3, StatusCheckFailed_Instance = 4, StatusCheckFailed_System = 5, BurstCapacityTime = 6, BurstCapacityPercentage = 7 }

	export enum LoadBalancerMetricName { ClientTLSNegotiationErrorCount = 0, HealthyHostCount = 1, UnhealthyHostCount = 2, HTTPCode_LB_4XX_Count = 3, HTTPCode_LB_5XX_Count = 4, HTTPCode_Instance_2XX_Count = 5, HTTPCode_Instance_3XX_Count = 6, HTTPCode_Instance_4XX_Count = 7, HTTPCode_Instance_5XX_Count = 8, InstanceResponseTime = 9, RejectedConnectionCount = 10, RequestCount = 11 }

	export enum RelationalDatabasePasswordVersion { CURRENT = 0, PREVIOUS = 1, PENDING = 2 }

	export enum RelationalDatabaseMetricName { CPUUtilization = 0, DatabaseConnections = 1, DiskQueueDepth = 2, FreeStorageSpace = 3, NetworkReceiveThroughput = 4, NetworkTransmitThroughput = 5 }

	export enum PortInfoSourceType { DEFAULT = 0, INSTANCE = 1, NONE = 2, CLOSED = 3 }

	export enum InstanceHealthReason { Lb_RegistrationInProgress = 0, Lb_InitialHealthChecking = 1, Lb_InternalError = 2, Instance_ResponseCodeMismatch = 3, Instance_Timeout = 4, Instance_FailedHealthChecks = 5, Instance_NotRegistered = 6, Instance_NotInUse = 7, Instance_DeregistrationInProgress = 8, Instance_InvalidState = 9, Instance_IpUnusable = 10 }

	export enum InstanceHealthState { initial = 0, healthy = 1, unhealthy = 2, unused = 3, draining = 4, unavailable = 5 }

	export enum NetworkProtocol { tcp = 0, all = 1, udp = 2, icmp = 3 }

	export enum PortAccessType { Public = 0, Private = 1 }

	export enum PortState { open = 0, closed = 1 }

	export enum LoadBalancerAttributeName { HealthCheckPath = 0, SessionStickinessEnabled = 1, SessionStickiness_LB_CookieDurationSeconds = 2 }

	export enum LoadBalancerTlsCertificateDomainStatus { PENDING_VALIDATION = 0, FAILED = 1, SUCCESS = 2 }

	export enum LoadBalancerTlsCertificateRenewalStatus { PENDING_AUTO_RENEWAL = 0, PENDING_VALIDATION = 1, SUCCESS = 2, FAILED = 3 }

	export enum OperationType { DeleteKnownHostKeys = 0, DeleteInstance = 1, CreateInstance = 2, StopInstance = 3, StartInstance = 4, RebootInstance = 5, OpenInstancePublicPorts = 6, PutInstancePublicPorts = 7, CloseInstancePublicPorts = 8, AllocateStaticIp = 9, ReleaseStaticIp = 10, AttachStaticIp = 11, DetachStaticIp = 12, UpdateDomainEntry = 13, DeleteDomainEntry = 14, CreateDomain = 15, DeleteDomain = 16, CreateInstanceSnapshot = 17, DeleteInstanceSnapshot = 18, CreateInstancesFromSnapshot = 19, CreateLoadBalancer = 20, DeleteLoadBalancer = 21, AttachInstancesToLoadBalancer = 22, DetachInstancesFromLoadBalancer = 23, UpdateLoadBalancerAttribute = 24, CreateLoadBalancerTlsCertificate = 25, DeleteLoadBalancerTlsCertificate = 26, AttachLoadBalancerTlsCertificate = 27, CreateDisk = 28, DeleteDisk = 29, AttachDisk = 30, DetachDisk = 31, CreateDiskSnapshot = 32, DeleteDiskSnapshot = 33, CreateDiskFromSnapshot = 34, CreateRelationalDatabase = 35, UpdateRelationalDatabase = 36, DeleteRelationalDatabase = 37, CreateRelationalDatabaseFromSnapshot = 38, CreateRelationalDatabaseSnapshot = 39, DeleteRelationalDatabaseSnapshot = 40, UpdateRelationalDatabaseParameters = 41, StartRelationalDatabase = 42, RebootRelationalDatabase = 43, StopRelationalDatabase = 44, EnableAddOn = 45, DisableAddOn = 46, PutAlarm = 47, GetAlarms = 48, DeleteAlarm = 49, TestAlarm = 50, CreateContactMethod = 51, GetContactMethods = 52, SendContactMethodVerification = 53, DeleteContactMethod = 54 }

	export enum RelationalDatabaseEngine { mysql = 0 }

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Allocates a static IP address.
		 * Post #X-Amz-Target=Lightsail_20161128.AllocateStaticIp
		 * @return {AllocateStaticIpResult} Success
		 */
		AllocateStaticIp(requestBody: AllocateStaticIpRequest): Observable<AllocateStaticIpResult> {
			return this.http.post<AllocateStaticIpResult>(this.baseUri + '#X-Amz-Target=Lightsail_20161128.AllocateStaticIp', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Attaches a block storage disk to a running or stopped Lightsail instance and exposes it to the instance with the specified disk name.</p> <p>The <code>attach disk</code> operation supports tag-based access control via resource tags applied to the resource identified by <code>disk name</code>. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en/articles/amazon-lightsail-controlling-access-using-tags">Lightsail Dev Guide</a>.</p>
		 * Post #X-Amz-Target=Lightsail_20161128.AttachDisk
		 * @return {AttachDiskResult} Success
		 */
		AttachDisk(requestBody: AttachDiskRequest): Observable<AttachDiskResult> {
			return this.http.post<AttachDiskResult>(this.baseUri + '#X-Amz-Target=Lightsail_20161128.AttachDisk', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Attaches one or more Lightsail instances to a load balancer.</p> <p>After some time, the instances are attached to the load balancer and the health check status is available.</p> <p>The <code>attach instances to load balancer</code> operation supports tag-based access control via resource tags applied to the resource identified by <code>load balancer name</code>. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en/articles/amazon-lightsail-controlling-access-using-tags">Lightsail Dev Guide</a>.</p>
		 * Post #X-Amz-Target=Lightsail_20161128.AttachInstancesToLoadBalancer
		 * @return {AttachInstancesToLoadBalancerResult} Success
		 */
		AttachInstancesToLoadBalancer(requestBody: AttachInstancesToLoadBalancerRequest): Observable<AttachInstancesToLoadBalancerResult> {
			return this.http.post<AttachInstancesToLoadBalancerResult>(this.baseUri + '#X-Amz-Target=Lightsail_20161128.AttachInstancesToLoadBalancer', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Attaches a Transport Layer Security (TLS) certificate to your load balancer. TLS is just an updated, more secure version of Secure Socket Layer (SSL).</p> <p>Once you create and validate your certificate, you can attach it to your load balancer. You can also use this API to rotate the certificates on your account. Use the <code>AttachLoadBalancerTlsCertificate</code> action with the non-attached certificate, and it will replace the existing one and become the attached certificate.</p> <p>The <code>AttachLoadBalancerTlsCertificate</code> operation supports tag-based access control via resource tags applied to the resource identified by <code>load balancer name</code>. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en/articles/amazon-lightsail-controlling-access-using-tags">Lightsail Dev Guide</a>.</p>
		 * Post #X-Amz-Target=Lightsail_20161128.AttachLoadBalancerTlsCertificate
		 * @return {AttachLoadBalancerTlsCertificateResult} Success
		 */
		AttachLoadBalancerTlsCertificate(requestBody: AttachLoadBalancerTlsCertificateRequest): Observable<AttachLoadBalancerTlsCertificateResult> {
			return this.http.post<AttachLoadBalancerTlsCertificateResult>(this.baseUri + '#X-Amz-Target=Lightsail_20161128.AttachLoadBalancerTlsCertificate', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Attaches a static IP address to a specific Amazon Lightsail instance.
		 * Post #X-Amz-Target=Lightsail_20161128.AttachStaticIp
		 * @return {AttachStaticIpResult} Success
		 */
		AttachStaticIp(requestBody: AttachStaticIpRequest): Observable<AttachStaticIpResult> {
			return this.http.post<AttachStaticIpResult>(this.baseUri + '#X-Amz-Target=Lightsail_20161128.AttachStaticIp', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Closes ports for a specific Amazon Lightsail instance.</p> <p>The <code>CloseInstancePublicPorts</code> action supports tag-based access control via resource tags applied to the resource identified by <code>instanceName</code>. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en/articles/amazon-lightsail-controlling-access-using-tags">Lightsail Dev Guide</a>.</p>
		 * Post #X-Amz-Target=Lightsail_20161128.CloseInstancePublicPorts
		 * @return {CloseInstancePublicPortsResult} Success
		 */
		CloseInstancePublicPorts(requestBody: CloseInstancePublicPortsRequest): Observable<CloseInstancePublicPortsResult> {
			return this.http.post<CloseInstancePublicPortsResult>(this.baseUri + '#X-Amz-Target=Lightsail_20161128.CloseInstancePublicPorts', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Copies a manual snapshot of an instance or disk as another manual snapshot, or copies an automatic snapshot of an instance or disk as a manual snapshot. This operation can also be used to copy a manual or automatic snapshot of an instance or a disk from one AWS Region to another in Amazon Lightsail.</p> <p>When copying a <i>manual snapshot</i>, be sure to define the <code>source region</code>, <code>source snapshot name</code>, and <code>target snapshot name</code> parameters.</p> <p>When copying an <i>automatic snapshot</i>, be sure to define the <code>source region</code>, <code>source resource name</code>, <code>target snapshot name</code>, and either the <code>restore date</code> or the <code>use latest restorable auto snapshot</code> parameters.</p>
		 * Post #X-Amz-Target=Lightsail_20161128.CopySnapshot
		 * @return {CopySnapshotResult} Success
		 */
		CopySnapshot(requestBody: CopySnapshotRequest): Observable<CopySnapshotResult> {
			return this.http.post<CopySnapshotResult>(this.baseUri + '#X-Amz-Target=Lightsail_20161128.CopySnapshot', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Creates an AWS CloudFormation stack, which creates a new Amazon EC2 instance from an exported Amazon Lightsail snapshot. This operation results in a CloudFormation stack record that can be used to track the AWS CloudFormation stack created. Use the <code>get cloud formation stack records</code> operation to get a list of the CloudFormation stacks created.</p> <important> <p>Wait until after your new Amazon EC2 instance is created before running the <code>create cloud formation stack</code> operation again with the same export snapshot record.</p> </important>
		 * Post #X-Amz-Target=Lightsail_20161128.CreateCloudFormationStack
		 * @return {CreateCloudFormationStackResult} Success
		 */
		CreateCloudFormationStack(requestBody: CreateCloudFormationStackRequest): Observable<CreateCloudFormationStackResult> {
			return this.http.post<CreateCloudFormationStackResult>(this.baseUri + '#X-Amz-Target=Lightsail_20161128.CreateCloudFormationStack', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Creates an email or SMS text message contact method.</p> <p>A contact method is used to send you notifications about your Amazon Lightsail resources. You can add one email address and one mobile phone number contact method in each AWS Region. However, SMS text messaging is not supported in some AWS Regions, and SMS text messages cannot be sent to some countries/regions. For more information, see <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-notifications">Notifications in Amazon Lightsail</a>.</p>
		 * Post #X-Amz-Target=Lightsail_20161128.CreateContactMethod
		 * @return {CreateContactMethodResult} Success
		 */
		CreateContactMethod(requestBody: CreateContactMethodRequest): Observable<CreateContactMethodResult> {
			return this.http.post<CreateContactMethodResult>(this.baseUri + '#X-Amz-Target=Lightsail_20161128.CreateContactMethod', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Creates a block storage disk that can be attached to an Amazon Lightsail instance in the same Availability Zone (e.g., <code>us-east-2a</code>).</p> <p>The <code>create disk</code> operation supports tag-based access control via request tags. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en/articles/amazon-lightsail-controlling-access-using-tags">Lightsail Dev Guide</a>.</p>
		 * Post #X-Amz-Target=Lightsail_20161128.CreateDisk
		 * @return {CreateDiskResult} Success
		 */
		CreateDisk(requestBody: CreateDiskRequest): Observable<CreateDiskResult> {
			return this.http.post<CreateDiskResult>(this.baseUri + '#X-Amz-Target=Lightsail_20161128.CreateDisk', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Creates a block storage disk from a manual or automatic snapshot of a disk. The resulting disk can be attached to an Amazon Lightsail instance in the same Availability Zone (e.g., <code>us-east-2a</code>).</p> <p>The <code>create disk from snapshot</code> operation supports tag-based access control via request tags and resource tags applied to the resource identified by <code>disk snapshot name</code>. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en/articles/amazon-lightsail-controlling-access-using-tags">Lightsail Dev Guide</a>.</p>
		 * Post #X-Amz-Target=Lightsail_20161128.CreateDiskFromSnapshot
		 * @return {CreateDiskFromSnapshotResult} Success
		 */
		CreateDiskFromSnapshot(requestBody: CreateDiskFromSnapshotRequest): Observable<CreateDiskFromSnapshotResult> {
			return this.http.post<CreateDiskFromSnapshotResult>(this.baseUri + '#X-Amz-Target=Lightsail_20161128.CreateDiskFromSnapshot', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Creates a snapshot of a block storage disk. You can use snapshots for backups, to make copies of disks, and to save data before shutting down a Lightsail instance.</p> <p>You can take a snapshot of an attached disk that is in use; however, snapshots only capture data that has been written to your disk at the time the snapshot command is issued. This may exclude any data that has been cached by any applications or the operating system. If you can pause any file systems on the disk long enough to take a snapshot, your snapshot should be complete. Nevertheless, if you cannot pause all file writes to the disk, you should unmount the disk from within the Lightsail instance, issue the create disk snapshot command, and then remount the disk to ensure a consistent and complete snapshot. You may remount and use your disk while the snapshot status is pending.</p> <p>You can also use this operation to create a snapshot of an instance's system volume. You might want to do this, for example, to recover data from the system volume of a botched instance or to create a backup of the system volume like you would for a block storage disk. To create a snapshot of a system volume, just define the <code>instance name</code> parameter when issuing the snapshot command, and a snapshot of the defined instance's system volume will be created. After the snapshot is available, you can create a block storage disk from the snapshot and attach it to a running instance to access the data on the disk.</p> <p>The <code>create disk snapshot</code> operation supports tag-based access control via request tags. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en/articles/amazon-lightsail-controlling-access-using-tags">Lightsail Dev Guide</a>.</p>
		 * Post #X-Amz-Target=Lightsail_20161128.CreateDiskSnapshot
		 * @return {CreateDiskSnapshotResult} Success
		 */
		CreateDiskSnapshot(requestBody: CreateDiskSnapshotRequest): Observable<CreateDiskSnapshotResult> {
			return this.http.post<CreateDiskSnapshotResult>(this.baseUri + '#X-Amz-Target=Lightsail_20161128.CreateDiskSnapshot', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Creates a domain resource for the specified domain (e.g., example.com).</p> <p>The <code>create domain</code> operation supports tag-based access control via request tags. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en/articles/amazon-lightsail-controlling-access-using-tags">Lightsail Dev Guide</a>.</p>
		 * Post #X-Amz-Target=Lightsail_20161128.CreateDomain
		 * @return {CreateDomainResult} Success
		 */
		CreateDomain(requestBody: CreateDomainRequest): Observable<CreateDomainResult> {
			return this.http.post<CreateDomainResult>(this.baseUri + '#X-Amz-Target=Lightsail_20161128.CreateDomain', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Creates one of the following entry records associated with the domain: Address (A), canonical name (CNAME), mail exchanger (MX), name server (NS), start of authority (SOA), service locator (SRV), or text (TXT).</p> <p>The <code>create domain entry</code> operation supports tag-based access control via resource tags applied to the resource identified by <code>domain name</code>. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en/articles/amazon-lightsail-controlling-access-using-tags">Lightsail Dev Guide</a>.</p>
		 * Post #X-Amz-Target=Lightsail_20161128.CreateDomainEntry
		 * @return {CreateDomainEntryResult} Success
		 */
		CreateDomainEntry(requestBody: CreateDomainEntryRequest): Observable<CreateDomainEntryResult> {
			return this.http.post<CreateDomainEntryResult>(this.baseUri + '#X-Amz-Target=Lightsail_20161128.CreateDomainEntry', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Creates a snapshot of a specific virtual private server, or <i>instance</i>. You can use a snapshot to create a new instance that is based on that snapshot.</p> <p>The <code>create instance snapshot</code> operation supports tag-based access control via request tags. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en/articles/amazon-lightsail-controlling-access-using-tags">Lightsail Dev Guide</a>.</p>
		 * Post #X-Amz-Target=Lightsail_20161128.CreateInstanceSnapshot
		 * @return {CreateInstanceSnapshotResult} Success
		 */
		CreateInstanceSnapshot(requestBody: CreateInstanceSnapshotRequest): Observable<CreateInstanceSnapshotResult> {
			return this.http.post<CreateInstanceSnapshotResult>(this.baseUri + '#X-Amz-Target=Lightsail_20161128.CreateInstanceSnapshot', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Creates one or more Amazon Lightsail instances.</p> <p>The <code>create instances</code> operation supports tag-based access control via request tags. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en/articles/amazon-lightsail-controlling-access-using-tags">Lightsail Dev Guide</a>.</p>
		 * Post #X-Amz-Target=Lightsail_20161128.CreateInstances
		 * @return {CreateInstancesResult} Success
		 */
		CreateInstances(requestBody: CreateInstancesRequest): Observable<CreateInstancesResult> {
			return this.http.post<CreateInstancesResult>(this.baseUri + '#X-Amz-Target=Lightsail_20161128.CreateInstances', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Creates one or more new instances from a manual or automatic snapshot of an instance.</p> <p>The <code>create instances from snapshot</code> operation supports tag-based access control via request tags and resource tags applied to the resource identified by <code>instance snapshot name</code>. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en/articles/amazon-lightsail-controlling-access-using-tags">Lightsail Dev Guide</a>.</p>
		 * Post #X-Amz-Target=Lightsail_20161128.CreateInstancesFromSnapshot
		 * @return {CreateInstancesFromSnapshotResult} Success
		 */
		CreateInstancesFromSnapshot(requestBody: CreateInstancesFromSnapshotRequest): Observable<CreateInstancesFromSnapshotResult> {
			return this.http.post<CreateInstancesFromSnapshotResult>(this.baseUri + '#X-Amz-Target=Lightsail_20161128.CreateInstancesFromSnapshot', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Creates an SSH key pair.</p> <p>The <code>create key pair</code> operation supports tag-based access control via request tags. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en/articles/amazon-lightsail-controlling-access-using-tags">Lightsail Dev Guide</a>.</p>
		 * Post #X-Amz-Target=Lightsail_20161128.CreateKeyPair
		 * @return {CreateKeyPairResult} Success
		 */
		CreateKeyPair(requestBody: CreateKeyPairRequest): Observable<CreateKeyPairResult> {
			return this.http.post<CreateKeyPairResult>(this.baseUri + '#X-Amz-Target=Lightsail_20161128.CreateKeyPair', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Creates a Lightsail load balancer. To learn more about deciding whether to load balance your application, see <a href="https://lightsail.aws.amazon.com/ls/docs/how-to/article/configure-lightsail-instances-for-load-balancing">Configure your Lightsail instances for load balancing</a>. You can create up to 5 load balancers per AWS Region in your account.</p> <p>When you create a load balancer, you can specify a unique name and port settings. To change additional load balancer settings, use the <code>UpdateLoadBalancerAttribute</code> operation.</p> <p>The <code>create load balancer</code> operation supports tag-based access control via request tags. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en/articles/amazon-lightsail-controlling-access-using-tags">Lightsail Dev Guide</a>.</p>
		 * Post #X-Amz-Target=Lightsail_20161128.CreateLoadBalancer
		 * @return {CreateLoadBalancerResult} Success
		 */
		CreateLoadBalancer(requestBody: CreateLoadBalancerRequest): Observable<CreateLoadBalancerResult> {
			return this.http.post<CreateLoadBalancerResult>(this.baseUri + '#X-Amz-Target=Lightsail_20161128.CreateLoadBalancer', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Creates a Lightsail load balancer TLS certificate.</p> <p>TLS is just an updated, more secure version of Secure Socket Layer (SSL).</p> <p>The <code>CreateLoadBalancerTlsCertificate</code> operation supports tag-based access control via resource tags applied to the resource identified by <code>load balancer name</code>. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en/articles/amazon-lightsail-controlling-access-using-tags">Lightsail Dev Guide</a>.</p>
		 * Post #X-Amz-Target=Lightsail_20161128.CreateLoadBalancerTlsCertificate
		 * @return {CreateLoadBalancerTlsCertificateResult} Success
		 */
		CreateLoadBalancerTlsCertificate(requestBody: CreateLoadBalancerTlsCertificateRequest): Observable<CreateLoadBalancerTlsCertificateResult> {
			return this.http.post<CreateLoadBalancerTlsCertificateResult>(this.baseUri + '#X-Amz-Target=Lightsail_20161128.CreateLoadBalancerTlsCertificate', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Creates a new database in Amazon Lightsail.</p> <p>The <code>create relational database</code> operation supports tag-based access control via request tags. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en/articles/amazon-lightsail-controlling-access-using-tags">Lightsail Dev Guide</a>.</p>
		 * Post #X-Amz-Target=Lightsail_20161128.CreateRelationalDatabase
		 * @return {CreateRelationalDatabaseResult} Success
		 */
		CreateRelationalDatabase(requestBody: CreateRelationalDatabaseRequest): Observable<CreateRelationalDatabaseResult> {
			return this.http.post<CreateRelationalDatabaseResult>(this.baseUri + '#X-Amz-Target=Lightsail_20161128.CreateRelationalDatabase', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Creates a new database from an existing database snapshot in Amazon Lightsail.</p> <p>You can create a new database from a snapshot in if something goes wrong with your original database, or to change it to a different plan, such as a high availability or standard plan.</p> <p>The <code>create relational database from snapshot</code> operation supports tag-based access control via request tags and resource tags applied to the resource identified by relationalDatabaseSnapshotName. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en/articles/amazon-lightsail-controlling-access-using-tags">Lightsail Dev Guide</a>.</p>
		 * Post #X-Amz-Target=Lightsail_20161128.CreateRelationalDatabaseFromSnapshot
		 * @return {CreateRelationalDatabaseFromSnapshotResult} Success
		 */
		CreateRelationalDatabaseFromSnapshot(requestBody: CreateRelationalDatabaseFromSnapshotRequest): Observable<CreateRelationalDatabaseFromSnapshotResult> {
			return this.http.post<CreateRelationalDatabaseFromSnapshotResult>(this.baseUri + '#X-Amz-Target=Lightsail_20161128.CreateRelationalDatabaseFromSnapshot', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Creates a snapshot of your database in Amazon Lightsail. You can use snapshots for backups, to make copies of a database, and to save data before deleting a database.</p> <p>The <code>create relational database snapshot</code> operation supports tag-based access control via request tags. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en/articles/amazon-lightsail-controlling-access-using-tags">Lightsail Dev Guide</a>.</p>
		 * Post #X-Amz-Target=Lightsail_20161128.CreateRelationalDatabaseSnapshot
		 * @return {CreateRelationalDatabaseSnapshotResult} Success
		 */
		CreateRelationalDatabaseSnapshot(requestBody: CreateRelationalDatabaseSnapshotRequest): Observable<CreateRelationalDatabaseSnapshotResult> {
			return this.http.post<CreateRelationalDatabaseSnapshotResult>(this.baseUri + '#X-Amz-Target=Lightsail_20161128.CreateRelationalDatabaseSnapshot', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Deletes an alarm.</p> <p>An alarm is used to monitor a single metric for one of your resources. When a metric condition is met, the alarm can notify you by email, SMS text message, and a banner displayed on the Amazon Lightsail console. For more information, see <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-alarms">Alarms in Amazon Lightsail</a>.</p>
		 * Post #X-Amz-Target=Lightsail_20161128.DeleteAlarm
		 * @return {DeleteAlarmResult} Success
		 */
		DeleteAlarm(requestBody: DeleteAlarmRequest): Observable<DeleteAlarmResult> {
			return this.http.post<DeleteAlarmResult>(this.baseUri + '#X-Amz-Target=Lightsail_20161128.DeleteAlarm', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes an automatic snapshot of an instance or disk. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-configuring-automatic-snapshots">Lightsail Dev Guide</a>.
		 * Post #X-Amz-Target=Lightsail_20161128.DeleteAutoSnapshot
		 * @return {DeleteAutoSnapshotResult} Success
		 */
		DeleteAutoSnapshot(requestBody: DeleteAutoSnapshotRequest): Observable<DeleteAutoSnapshotResult> {
			return this.http.post<DeleteAutoSnapshotResult>(this.baseUri + '#X-Amz-Target=Lightsail_20161128.DeleteAutoSnapshot', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Deletes a contact method.</p> <p>A contact method is used to send you notifications about your Amazon Lightsail resources. You can add one email address and one mobile phone number contact method in each AWS Region. However, SMS text messaging is not supported in some AWS Regions, and SMS text messages cannot be sent to some countries/regions. For more information, see <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-notifications">Notifications in Amazon Lightsail</a>.</p>
		 * Post #X-Amz-Target=Lightsail_20161128.DeleteContactMethod
		 * @return {DeleteContactMethodResult} Success
		 */
		DeleteContactMethod(requestBody: DeleteContactMethodRequest): Observable<DeleteContactMethodResult> {
			return this.http.post<DeleteContactMethodResult>(this.baseUri + '#X-Amz-Target=Lightsail_20161128.DeleteContactMethod', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Deletes the specified block storage disk. The disk must be in the <code>available</code> state (not attached to a Lightsail instance).</p> <note> <p>The disk may remain in the <code>deleting</code> state for several minutes.</p> </note> <p>The <code>delete disk</code> operation supports tag-based access control via resource tags applied to the resource identified by <code>disk name</code>. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en/articles/amazon-lightsail-controlling-access-using-tags">Lightsail Dev Guide</a>.</p>
		 * Post #X-Amz-Target=Lightsail_20161128.DeleteDisk
		 * @return {DeleteDiskResult} Success
		 */
		DeleteDisk(requestBody: DeleteDiskRequest): Observable<DeleteDiskResult> {
			return this.http.post<DeleteDiskResult>(this.baseUri + '#X-Amz-Target=Lightsail_20161128.DeleteDisk', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Deletes the specified disk snapshot.</p> <p>When you make periodic snapshots of a disk, the snapshots are incremental, and only the blocks on the device that have changed since your last snapshot are saved in the new snapshot. When you delete a snapshot, only the data not needed for any other snapshot is removed. So regardless of which prior snapshots have been deleted, all active snapshots will have access to all the information needed to restore the disk.</p> <p>The <code>delete disk snapshot</code> operation supports tag-based access control via resource tags applied to the resource identified by <code>disk snapshot name</code>. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en/articles/amazon-lightsail-controlling-access-using-tags">Lightsail Dev Guide</a>.</p>
		 * Post #X-Amz-Target=Lightsail_20161128.DeleteDiskSnapshot
		 * @return {DeleteDiskSnapshotResult} Success
		 */
		DeleteDiskSnapshot(requestBody: DeleteDiskSnapshotRequest): Observable<DeleteDiskSnapshotResult> {
			return this.http.post<DeleteDiskSnapshotResult>(this.baseUri + '#X-Amz-Target=Lightsail_20161128.DeleteDiskSnapshot', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Deletes the specified domain recordset and all of its domain records.</p> <p>The <code>delete domain</code> operation supports tag-based access control via resource tags applied to the resource identified by <code>domain name</code>. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en/articles/amazon-lightsail-controlling-access-using-tags">Lightsail Dev Guide</a>.</p>
		 * Post #X-Amz-Target=Lightsail_20161128.DeleteDomain
		 * @return {DeleteDomainResult} Success
		 */
		DeleteDomain(requestBody: DeleteDomainRequest): Observable<DeleteDomainResult> {
			return this.http.post<DeleteDomainResult>(this.baseUri + '#X-Amz-Target=Lightsail_20161128.DeleteDomain', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Deletes a specific domain entry.</p> <p>The <code>delete domain entry</code> operation supports tag-based access control via resource tags applied to the resource identified by <code>domain name</code>. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en/articles/amazon-lightsail-controlling-access-using-tags">Lightsail Dev Guide</a>.</p>
		 * Post #X-Amz-Target=Lightsail_20161128.DeleteDomainEntry
		 * @return {DeleteDomainEntryResult} Success
		 */
		DeleteDomainEntry(requestBody: DeleteDomainEntryRequest): Observable<DeleteDomainEntryResult> {
			return this.http.post<DeleteDomainEntryResult>(this.baseUri + '#X-Amz-Target=Lightsail_20161128.DeleteDomainEntry', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Deletes an Amazon Lightsail instance.</p> <p>The <code>delete instance</code> operation supports tag-based access control via resource tags applied to the resource identified by <code>instance name</code>. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en/articles/amazon-lightsail-controlling-access-using-tags">Lightsail Dev Guide</a>.</p>
		 * Post #X-Amz-Target=Lightsail_20161128.DeleteInstance
		 * @return {DeleteInstanceResult} Success
		 */
		DeleteInstance(requestBody: DeleteInstanceRequest): Observable<DeleteInstanceResult> {
			return this.http.post<DeleteInstanceResult>(this.baseUri + '#X-Amz-Target=Lightsail_20161128.DeleteInstance', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Deletes a specific snapshot of a virtual private server (or <i>instance</i>).</p> <p>The <code>delete instance snapshot</code> operation supports tag-based access control via resource tags applied to the resource identified by <code>instance snapshot name</code>. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en/articles/amazon-lightsail-controlling-access-using-tags">Lightsail Dev Guide</a>.</p>
		 * Post #X-Amz-Target=Lightsail_20161128.DeleteInstanceSnapshot
		 * @return {DeleteInstanceSnapshotResult} Success
		 */
		DeleteInstanceSnapshot(requestBody: DeleteInstanceSnapshotRequest): Observable<DeleteInstanceSnapshotResult> {
			return this.http.post<DeleteInstanceSnapshotResult>(this.baseUri + '#X-Amz-Target=Lightsail_20161128.DeleteInstanceSnapshot', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Deletes a specific SSH key pair.</p> <p>The <code>delete key pair</code> operation supports tag-based access control via resource tags applied to the resource identified by <code>key pair name</code>. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en/articles/amazon-lightsail-controlling-access-using-tags">Lightsail Dev Guide</a>.</p>
		 * Post #X-Amz-Target=Lightsail_20161128.DeleteKeyPair
		 * @return {DeleteKeyPairResult} Success
		 */
		DeleteKeyPair(requestBody: DeleteKeyPairRequest): Observable<DeleteKeyPairResult> {
			return this.http.post<DeleteKeyPairResult>(this.baseUri + '#X-Amz-Target=Lightsail_20161128.DeleteKeyPair', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Deletes the known host key or certificate used by the Amazon Lightsail browser-based SSH or RDP clients to authenticate an instance. This operation enables the Lightsail browser-based SSH or RDP clients to connect to the instance after a host key mismatch.</p> <important> <p>Perform this operation only if you were expecting the host key or certificate mismatch or if you are familiar with the new host key or certificate on the instance. For more information, see <a href="https://lightsail.aws.amazon.com/ls/docs/en/articles/amazon-lightsail-troubleshooting-browser-based-ssh-rdp-client-connection">Troubleshooting connection issues when using the Amazon Lightsail browser-based SSH or RDP client</a>.</p> </important>
		 * Post #X-Amz-Target=Lightsail_20161128.DeleteKnownHostKeys
		 * @return {DeleteKnownHostKeysResult} Success
		 */
		DeleteKnownHostKeys(requestBody: DeleteKnownHostKeysRequest): Observable<DeleteKnownHostKeysResult> {
			return this.http.post<DeleteKnownHostKeysResult>(this.baseUri + '#X-Amz-Target=Lightsail_20161128.DeleteKnownHostKeys', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Deletes a Lightsail load balancer and all its associated SSL/TLS certificates. Once the load balancer is deleted, you will need to create a new load balancer, create a new certificate, and verify domain ownership again.</p> <p>The <code>delete load balancer</code> operation supports tag-based access control via resource tags applied to the resource identified by <code>load balancer name</code>. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en/articles/amazon-lightsail-controlling-access-using-tags">Lightsail Dev Guide</a>.</p>
		 * Post #X-Amz-Target=Lightsail_20161128.DeleteLoadBalancer
		 * @return {DeleteLoadBalancerResult} Success
		 */
		DeleteLoadBalancer(requestBody: DeleteLoadBalancerRequest): Observable<DeleteLoadBalancerResult> {
			return this.http.post<DeleteLoadBalancerResult>(this.baseUri + '#X-Amz-Target=Lightsail_20161128.DeleteLoadBalancer', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Deletes an SSL/TLS certificate associated with a Lightsail load balancer.</p> <p>The <code>DeleteLoadBalancerTlsCertificate</code> operation supports tag-based access control via resource tags applied to the resource identified by <code>load balancer name</code>. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en/articles/amazon-lightsail-controlling-access-using-tags">Lightsail Dev Guide</a>.</p>
		 * Post #X-Amz-Target=Lightsail_20161128.DeleteLoadBalancerTlsCertificate
		 * @return {DeleteLoadBalancerTlsCertificateResult} Success
		 */
		DeleteLoadBalancerTlsCertificate(requestBody: DeleteLoadBalancerTlsCertificateRequest): Observable<DeleteLoadBalancerTlsCertificateResult> {
			return this.http.post<DeleteLoadBalancerTlsCertificateResult>(this.baseUri + '#X-Amz-Target=Lightsail_20161128.DeleteLoadBalancerTlsCertificate', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Deletes a database in Amazon Lightsail.</p> <p>The <code>delete relational database</code> operation supports tag-based access control via resource tags applied to the resource identified by relationalDatabaseName. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en/articles/amazon-lightsail-controlling-access-using-tags">Lightsail Dev Guide</a>.</p>
		 * Post #X-Amz-Target=Lightsail_20161128.DeleteRelationalDatabase
		 * @return {DeleteRelationalDatabaseResult} Success
		 */
		DeleteRelationalDatabase(requestBody: DeleteRelationalDatabaseRequest): Observable<DeleteRelationalDatabaseResult> {
			return this.http.post<DeleteRelationalDatabaseResult>(this.baseUri + '#X-Amz-Target=Lightsail_20161128.DeleteRelationalDatabase', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Deletes a database snapshot in Amazon Lightsail.</p> <p>The <code>delete relational database snapshot</code> operation supports tag-based access control via resource tags applied to the resource identified by relationalDatabaseName. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en/articles/amazon-lightsail-controlling-access-using-tags">Lightsail Dev Guide</a>.</p>
		 * Post #X-Amz-Target=Lightsail_20161128.DeleteRelationalDatabaseSnapshot
		 * @return {DeleteRelationalDatabaseSnapshotResult} Success
		 */
		DeleteRelationalDatabaseSnapshot(requestBody: DeleteRelationalDatabaseSnapshotRequest): Observable<DeleteRelationalDatabaseSnapshotResult> {
			return this.http.post<DeleteRelationalDatabaseSnapshotResult>(this.baseUri + '#X-Amz-Target=Lightsail_20161128.DeleteRelationalDatabaseSnapshot', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Detaches a stopped block storage disk from a Lightsail instance. Make sure to unmount any file systems on the device within your operating system before stopping the instance and detaching the disk.</p> <p>The <code>detach disk</code> operation supports tag-based access control via resource tags applied to the resource identified by <code>disk name</code>. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en/articles/amazon-lightsail-controlling-access-using-tags">Lightsail Dev Guide</a>.</p>
		 * Post #X-Amz-Target=Lightsail_20161128.DetachDisk
		 * @return {DetachDiskResult} Success
		 */
		DetachDisk(requestBody: DetachDiskRequest): Observable<DetachDiskResult> {
			return this.http.post<DetachDiskResult>(this.baseUri + '#X-Amz-Target=Lightsail_20161128.DetachDisk', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Detaches the specified instances from a Lightsail load balancer.</p> <p>This operation waits until the instances are no longer needed before they are detached from the load balancer.</p> <p>The <code>detach instances from load balancer</code> operation supports tag-based access control via resource tags applied to the resource identified by <code>load balancer name</code>. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en/articles/amazon-lightsail-controlling-access-using-tags">Lightsail Dev Guide</a>.</p>
		 * Post #X-Amz-Target=Lightsail_20161128.DetachInstancesFromLoadBalancer
		 * @return {DetachInstancesFromLoadBalancerResult} Success
		 */
		DetachInstancesFromLoadBalancer(requestBody: DetachInstancesFromLoadBalancerRequest): Observable<DetachInstancesFromLoadBalancerResult> {
			return this.http.post<DetachInstancesFromLoadBalancerResult>(this.baseUri + '#X-Amz-Target=Lightsail_20161128.DetachInstancesFromLoadBalancer', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Detaches a static IP from the Amazon Lightsail instance to which it is attached.
		 * Post #X-Amz-Target=Lightsail_20161128.DetachStaticIp
		 * @return {DetachStaticIpResult} Success
		 */
		DetachStaticIp(requestBody: DetachStaticIpRequest): Observable<DetachStaticIpResult> {
			return this.http.post<DetachStaticIpResult>(this.baseUri + '#X-Amz-Target=Lightsail_20161128.DetachStaticIp', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Disables an add-on for an Amazon Lightsail resource. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-configuring-automatic-snapshots">Lightsail Dev Guide</a>.
		 * Post #X-Amz-Target=Lightsail_20161128.DisableAddOn
		 * @return {DisableAddOnResult} Success
		 */
		DisableAddOn(requestBody: DisableAddOnRequest): Observable<DisableAddOnResult> {
			return this.http.post<DisableAddOnResult>(this.baseUri + '#X-Amz-Target=Lightsail_20161128.DisableAddOn', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Downloads the default SSH key pair from the user's account.
		 * Post #X-Amz-Target=Lightsail_20161128.DownloadDefaultKeyPair
		 * @return {DownloadDefaultKeyPairResult} Success
		 */
		DownloadDefaultKeyPair(requestBody: DownloadDefaultKeyPairRequest): Observable<DownloadDefaultKeyPairResult> {
			return this.http.post<DownloadDefaultKeyPairResult>(this.baseUri + '#X-Amz-Target=Lightsail_20161128.DownloadDefaultKeyPair', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Enables or modifies an add-on for an Amazon Lightsail resource. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-configuring-automatic-snapshots">Lightsail Dev Guide</a>.
		 * Post #X-Amz-Target=Lightsail_20161128.EnableAddOn
		 * @return {EnableAddOnResult} Success
		 */
		EnableAddOn(requestBody: EnableAddOnRequest): Observable<EnableAddOnResult> {
			return this.http.post<EnableAddOnResult>(this.baseUri + '#X-Amz-Target=Lightsail_20161128.EnableAddOn', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Exports an Amazon Lightsail instance or block storage disk snapshot to Amazon Elastic Compute Cloud (Amazon EC2). This operation results in an export snapshot record that can be used with the <code>create cloud formation stack</code> operation to create new Amazon EC2 instances.</p> <p>Exported instance snapshots appear in Amazon EC2 as Amazon Machine Images (AMIs), and the instance system disk appears as an Amazon Elastic Block Store (Amazon EBS) volume. Exported disk snapshots appear in Amazon EC2 as Amazon EBS volumes. Snapshots are exported to the same Amazon Web Services Region in Amazon EC2 as the source Lightsail snapshot.</p> <p/> <p>The <code>export snapshot</code> operation supports tag-based access control via resource tags applied to the resource identified by <code>source snapshot name</code>. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en/articles/amazon-lightsail-controlling-access-using-tags">Lightsail Dev Guide</a>.</p> <note> <p>Use the <code>get instance snapshots</code> or <code>get disk snapshots</code> operations to get a list of snapshots that you can export to Amazon EC2.</p> </note>
		 * Post #X-Amz-Target=Lightsail_20161128.ExportSnapshot
		 * @return {ExportSnapshotResult} Success
		 */
		ExportSnapshot(requestBody: ExportSnapshotRequest): Observable<ExportSnapshotResult> {
			return this.http.post<ExportSnapshotResult>(this.baseUri + '#X-Amz-Target=Lightsail_20161128.ExportSnapshot', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns the names of all active (not deleted) resources.
		 * Post #X-Amz-Target=Lightsail_20161128.GetActiveNames
		 * @return {GetActiveNamesResult} Success
		 */
		GetActiveNames(requestBody: GetActiveNamesRequest): Observable<GetActiveNamesResult> {
			return this.http.post<GetActiveNamesResult>(this.baseUri + '#X-Amz-Target=Lightsail_20161128.GetActiveNames', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Returns information about the configured alarms. Specify an alarm name in your request to return information about a specific alarm, or specify a monitored resource name to return information about all alarms for a specific resource.</p> <p>An alarm is used to monitor a single metric for one of your resources. When a metric condition is met, the alarm can notify you by email, SMS text message, and a banner displayed on the Amazon Lightsail console. For more information, see <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-alarms">Alarms in Amazon Lightsail</a>.</p>
		 * Post #X-Amz-Target=Lightsail_20161128.GetAlarms
		 * @return {GetAlarmsResult} Success
		 */
		GetAlarms(requestBody: GetAlarmsRequest): Observable<GetAlarmsResult> {
			return this.http.post<GetAlarmsResult>(this.baseUri + '#X-Amz-Target=Lightsail_20161128.GetAlarms', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns the available automatic snapshots for an instance or disk. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-configuring-automatic-snapshots">Lightsail Dev Guide</a>.
		 * Post #X-Amz-Target=Lightsail_20161128.GetAutoSnapshots
		 * @return {GetAutoSnapshotsResult} Success
		 */
		GetAutoSnapshots(requestBody: GetAutoSnapshotsRequest): Observable<GetAutoSnapshotsResult> {
			return this.http.post<GetAutoSnapshotsResult>(this.baseUri + '#X-Amz-Target=Lightsail_20161128.GetAutoSnapshots', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Returns the list of available instance images, or <i>blueprints</i>. You can use a blueprint to create a new instance already running a specific operating system, as well as a preinstalled app or development stack. The software each instance is running depends on the blueprint image you choose.</p> <note> <p>Use active blueprints when creating new instances. Inactive blueprints are listed to support customers with existing instances and are not necessarily available to create new instances. Blueprints are marked inactive when they become outdated due to operating system updates or new application releases.</p> </note>
		 * Post #X-Amz-Target=Lightsail_20161128.GetBlueprints
		 * @return {GetBlueprintsResult} Success
		 */
		GetBlueprints(requestBody: GetBlueprintsRequest): Observable<GetBlueprintsResult> {
			return this.http.post<GetBlueprintsResult>(this.baseUri + '#X-Amz-Target=Lightsail_20161128.GetBlueprints', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns the list of bundles that are available for purchase. A bundle describes the specs for your virtual private server (or <i>instance</i>).
		 * Post #X-Amz-Target=Lightsail_20161128.GetBundles
		 * @return {GetBundlesResult} Success
		 */
		GetBundles(requestBody: GetBundlesRequest): Observable<GetBundlesResult> {
			return this.http.post<GetBundlesResult>(this.baseUri + '#X-Amz-Target=Lightsail_20161128.GetBundles', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Returns the CloudFormation stack record created as a result of the <code>create cloud formation stack</code> operation.</p> <p>An AWS CloudFormation stack is used to create a new Amazon EC2 instance from an exported Lightsail snapshot.</p>
		 * Post #X-Amz-Target=Lightsail_20161128.GetCloudFormationStackRecords
		 * @return {GetCloudFormationStackRecordsResult} Success
		 */
		GetCloudFormationStackRecords(requestBody: GetCloudFormationStackRecordsRequest): Observable<GetCloudFormationStackRecordsResult> {
			return this.http.post<GetCloudFormationStackRecordsResult>(this.baseUri + '#X-Amz-Target=Lightsail_20161128.GetCloudFormationStackRecords', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Returns information about the configured contact methods. Specify a protocol in your request to return information about a specific contact method.</p> <p>A contact method is used to send you notifications about your Amazon Lightsail resources. You can add one email address and one mobile phone number contact method in each AWS Region. However, SMS text messaging is not supported in some AWS Regions, and SMS text messages cannot be sent to some countries/regions. For more information, see <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-notifications">Notifications in Amazon Lightsail</a>.</p>
		 * Post #X-Amz-Target=Lightsail_20161128.GetContactMethods
		 * @return {GetContactMethodsResult} Success
		 */
		GetContactMethods(requestBody: GetContactMethodsRequest): Observable<GetContactMethodsResult> {
			return this.http.post<GetContactMethodsResult>(this.baseUri + '#X-Amz-Target=Lightsail_20161128.GetContactMethods', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns information about a specific block storage disk.
		 * Post #X-Amz-Target=Lightsail_20161128.GetDisk
		 * @return {GetDiskResult} Success
		 */
		GetDisk(requestBody: GetDiskRequest): Observable<GetDiskResult> {
			return this.http.post<GetDiskResult>(this.baseUri + '#X-Amz-Target=Lightsail_20161128.GetDisk', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns information about a specific block storage disk snapshot.
		 * Post #X-Amz-Target=Lightsail_20161128.GetDiskSnapshot
		 * @return {GetDiskSnapshotResult} Success
		 */
		GetDiskSnapshot(requestBody: GetDiskSnapshotRequest): Observable<GetDiskSnapshotResult> {
			return this.http.post<GetDiskSnapshotResult>(this.baseUri + '#X-Amz-Target=Lightsail_20161128.GetDiskSnapshot', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns information about all block storage disk snapshots in your AWS account and region.
		 * Post #X-Amz-Target=Lightsail_20161128.GetDiskSnapshots
		 * @return {GetDiskSnapshotsResult} Success
		 */
		GetDiskSnapshots(requestBody: GetDiskSnapshotsRequest): Observable<GetDiskSnapshotsResult> {
			return this.http.post<GetDiskSnapshotsResult>(this.baseUri + '#X-Amz-Target=Lightsail_20161128.GetDiskSnapshots', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns information about all block storage disks in your AWS account and region.
		 * Post #X-Amz-Target=Lightsail_20161128.GetDisks
		 * @return {GetDisksResult} Success
		 */
		GetDisks(requestBody: GetDisksRequest): Observable<GetDisksResult> {
			return this.http.post<GetDisksResult>(this.baseUri + '#X-Amz-Target=Lightsail_20161128.GetDisks', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns information about a specific domain recordset.
		 * Post #X-Amz-Target=Lightsail_20161128.GetDomain
		 * @return {GetDomainResult} Success
		 */
		GetDomain(requestBody: GetDomainRequest): Observable<GetDomainResult> {
			return this.http.post<GetDomainResult>(this.baseUri + '#X-Amz-Target=Lightsail_20161128.GetDomain', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns a list of all domains in the user's account.
		 * Post #X-Amz-Target=Lightsail_20161128.GetDomains
		 * @return {GetDomainsResult} Success
		 */
		GetDomains(requestBody: GetDomainsRequest): Observable<GetDomainsResult> {
			return this.http.post<GetDomainsResult>(this.baseUri + '#X-Amz-Target=Lightsail_20161128.GetDomains', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Returns the export snapshot record created as a result of the <code>export snapshot</code> operation.</p> <p>An export snapshot record can be used to create a new Amazon EC2 instance and its related resources with the <code>create cloud formation stack</code> operation.</p>
		 * Post #X-Amz-Target=Lightsail_20161128.GetExportSnapshotRecords
		 * @return {GetExportSnapshotRecordsResult} Success
		 */
		GetExportSnapshotRecords(requestBody: GetExportSnapshotRecordsRequest): Observable<GetExportSnapshotRecordsResult> {
			return this.http.post<GetExportSnapshotRecordsResult>(this.baseUri + '#X-Amz-Target=Lightsail_20161128.GetExportSnapshotRecords', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns information about a specific Amazon Lightsail instance, which is a virtual private server.
		 * Post #X-Amz-Target=Lightsail_20161128.GetInstance
		 * @return {GetInstanceResult} Success
		 */
		GetInstance(requestBody: GetInstanceRequest): Observable<GetInstanceResult> {
			return this.http.post<GetInstanceResult>(this.baseUri + '#X-Amz-Target=Lightsail_20161128.GetInstance', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Returns temporary SSH keys you can use to connect to a specific virtual private server, or <i>instance</i>.</p> <p>The <code>get instance access details</code> operation supports tag-based access control via resource tags applied to the resource identified by <code>instance name</code>. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en/articles/amazon-lightsail-controlling-access-using-tags">Lightsail Dev Guide</a>.</p>
		 * Post #X-Amz-Target=Lightsail_20161128.GetInstanceAccessDetails
		 * @return {GetInstanceAccessDetailsResult} Success
		 */
		GetInstanceAccessDetails(requestBody: GetInstanceAccessDetailsRequest): Observable<GetInstanceAccessDetailsResult> {
			return this.http.post<GetInstanceAccessDetailsResult>(this.baseUri + '#X-Amz-Target=Lightsail_20161128.GetInstanceAccessDetails', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Returns the data points for the specified Amazon Lightsail instance metric, given an instance name.</p> <p>Metrics report the utilization of your resources, and the error counts generated by them. Monitor and collect metric data regularly to maintain the reliability, availability, and performance of your resources.</p>
		 * Post #X-Amz-Target=Lightsail_20161128.GetInstanceMetricData
		 * @return {GetInstanceMetricDataResult} Success
		 */
		GetInstanceMetricData(requestBody: GetInstanceMetricDataRequest): Observable<GetInstanceMetricDataResult> {
			return this.http.post<GetInstanceMetricDataResult>(this.baseUri + '#X-Amz-Target=Lightsail_20161128.GetInstanceMetricData', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns the firewall port states for a specific Amazon Lightsail instance, the IP addresses allowed to connect to the instance through the ports, and the protocol.
		 * Post #X-Amz-Target=Lightsail_20161128.GetInstancePortStates
		 * @return {GetInstancePortStatesResult} Success
		 */
		GetInstancePortStates(requestBody: GetInstancePortStatesRequest): Observable<GetInstancePortStatesResult> {
			return this.http.post<GetInstancePortStatesResult>(this.baseUri + '#X-Amz-Target=Lightsail_20161128.GetInstancePortStates', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns information about a specific instance snapshot.
		 * Post #X-Amz-Target=Lightsail_20161128.GetInstanceSnapshot
		 * @return {GetInstanceSnapshotResult} Success
		 */
		GetInstanceSnapshot(requestBody: GetInstanceSnapshotRequest): Observable<GetInstanceSnapshotResult> {
			return this.http.post<GetInstanceSnapshotResult>(this.baseUri + '#X-Amz-Target=Lightsail_20161128.GetInstanceSnapshot', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns all instance snapshots for the user's account.
		 * Post #X-Amz-Target=Lightsail_20161128.GetInstanceSnapshots
		 * @return {GetInstanceSnapshotsResult} Success
		 */
		GetInstanceSnapshots(requestBody: GetInstanceSnapshotsRequest): Observable<GetInstanceSnapshotsResult> {
			return this.http.post<GetInstanceSnapshotsResult>(this.baseUri + '#X-Amz-Target=Lightsail_20161128.GetInstanceSnapshots', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns the state of a specific instance. Works on one instance at a time.
		 * Post #X-Amz-Target=Lightsail_20161128.GetInstanceState
		 * @return {GetInstanceStateResult} Success
		 */
		GetInstanceState(requestBody: GetInstanceStateRequest): Observable<GetInstanceStateResult> {
			return this.http.post<GetInstanceStateResult>(this.baseUri + '#X-Amz-Target=Lightsail_20161128.GetInstanceState', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns information about all Amazon Lightsail virtual private servers, or <i>instances</i>.
		 * Post #X-Amz-Target=Lightsail_20161128.GetInstances
		 * @return {GetInstancesResult} Success
		 */
		GetInstances(requestBody: GetInstancesRequest): Observable<GetInstancesResult> {
			return this.http.post<GetInstancesResult>(this.baseUri + '#X-Amz-Target=Lightsail_20161128.GetInstances', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns information about a specific key pair.
		 * Post #X-Amz-Target=Lightsail_20161128.GetKeyPair
		 * @return {GetKeyPairResult} Success
		 */
		GetKeyPair(requestBody: GetKeyPairRequest): Observable<GetKeyPairResult> {
			return this.http.post<GetKeyPairResult>(this.baseUri + '#X-Amz-Target=Lightsail_20161128.GetKeyPair', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns information about all key pairs in the user's account.
		 * Post #X-Amz-Target=Lightsail_20161128.GetKeyPairs
		 * @return {GetKeyPairsResult} Success
		 */
		GetKeyPairs(requestBody: GetKeyPairsRequest): Observable<GetKeyPairsResult> {
			return this.http.post<GetKeyPairsResult>(this.baseUri + '#X-Amz-Target=Lightsail_20161128.GetKeyPairs', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns information about the specified Lightsail load balancer.
		 * Post #X-Amz-Target=Lightsail_20161128.GetLoadBalancer
		 * @return {GetLoadBalancerResult} Success
		 */
		GetLoadBalancer(requestBody: GetLoadBalancerRequest): Observable<GetLoadBalancerResult> {
			return this.http.post<GetLoadBalancerResult>(this.baseUri + '#X-Amz-Target=Lightsail_20161128.GetLoadBalancer', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Returns information about health metrics for your Lightsail load balancer.</p> <p>Metrics report the utilization of your resources, and the error counts generated by them. Monitor and collect metric data regularly to maintain the reliability, availability, and performance of your resources.</p>
		 * Post #X-Amz-Target=Lightsail_20161128.GetLoadBalancerMetricData
		 * @return {GetLoadBalancerMetricDataResult} Success
		 */
		GetLoadBalancerMetricData(requestBody: GetLoadBalancerMetricDataRequest): Observable<GetLoadBalancerMetricDataResult> {
			return this.http.post<GetLoadBalancerMetricDataResult>(this.baseUri + '#X-Amz-Target=Lightsail_20161128.GetLoadBalancerMetricData', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Returns information about the TLS certificates that are associated with the specified Lightsail load balancer.</p> <p>TLS is just an updated, more secure version of Secure Socket Layer (SSL).</p> <p>You can have a maximum of 2 certificates associated with a Lightsail load balancer. One is active and the other is inactive.</p>
		 * Post #X-Amz-Target=Lightsail_20161128.GetLoadBalancerTlsCertificates
		 * @return {GetLoadBalancerTlsCertificatesResult} Success
		 */
		GetLoadBalancerTlsCertificates(requestBody: GetLoadBalancerTlsCertificatesRequest): Observable<GetLoadBalancerTlsCertificatesResult> {
			return this.http.post<GetLoadBalancerTlsCertificatesResult>(this.baseUri + '#X-Amz-Target=Lightsail_20161128.GetLoadBalancerTlsCertificates', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns information about all load balancers in an account.
		 * Post #X-Amz-Target=Lightsail_20161128.GetLoadBalancers
		 * @return {GetLoadBalancersResult} Success
		 */
		GetLoadBalancers(requestBody: GetLoadBalancersRequest): Observable<GetLoadBalancersResult> {
			return this.http.post<GetLoadBalancersResult>(this.baseUri + '#X-Amz-Target=Lightsail_20161128.GetLoadBalancers', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns information about a specific operation. Operations include events such as when you create an instance, allocate a static IP, attach a static IP, and so on.
		 * Post #X-Amz-Target=Lightsail_20161128.GetOperation
		 * @return {GetOperationResult} Success
		 */
		GetOperation(requestBody: GetOperationRequest): Observable<GetOperationResult> {
			return this.http.post<GetOperationResult>(this.baseUri + '#X-Amz-Target=Lightsail_20161128.GetOperation', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Returns information about all operations.</p> <p>Results are returned from oldest to newest, up to a maximum of 200. Results can be paged by making each subsequent call to <code>GetOperations</code> use the maximum (last) <code>statusChangedAt</code> value from the previous request.</p>
		 * Post #X-Amz-Target=Lightsail_20161128.GetOperations
		 * @return {GetOperationsResult} Success
		 */
		GetOperations(requestBody: GetOperationsRequest): Observable<GetOperationsResult> {
			return this.http.post<GetOperationsResult>(this.baseUri + '#X-Amz-Target=Lightsail_20161128.GetOperations', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets operations for a specific resource (e.g., an instance or a static IP).
		 * Post #X-Amz-Target=Lightsail_20161128.GetOperationsForResource
		 * @return {GetOperationsForResourceResult} Success
		 */
		GetOperationsForResource(requestBody: GetOperationsForResourceRequest): Observable<GetOperationsForResourceResult> {
			return this.http.post<GetOperationsForResourceResult>(this.baseUri + '#X-Amz-Target=Lightsail_20161128.GetOperationsForResource', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns a list of all valid regions for Amazon Lightsail. Use the <code>include availability zones</code> parameter to also return the Availability Zones in a region.
		 * Post #X-Amz-Target=Lightsail_20161128.GetRegions
		 * @return {GetRegionsResult} Success
		 */
		GetRegions(requestBody: GetRegionsRequest): Observable<GetRegionsResult> {
			return this.http.post<GetRegionsResult>(this.baseUri + '#X-Amz-Target=Lightsail_20161128.GetRegions', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns information about a specific database in Amazon Lightsail.
		 * Post #X-Amz-Target=Lightsail_20161128.GetRelationalDatabase
		 * @return {GetRelationalDatabaseResult} Success
		 */
		GetRelationalDatabase(requestBody: GetRelationalDatabaseRequest): Observable<GetRelationalDatabaseResult> {
			return this.http.post<GetRelationalDatabaseResult>(this.baseUri + '#X-Amz-Target=Lightsail_20161128.GetRelationalDatabase', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Returns a list of available database blueprints in Amazon Lightsail. A blueprint describes the major engine version of a database.</p> <p>You can use a blueprint ID to create a new database that runs a specific database engine.</p>
		 * Post #X-Amz-Target=Lightsail_20161128.GetRelationalDatabaseBlueprints
		 * @return {GetRelationalDatabaseBlueprintsResult} Success
		 */
		GetRelationalDatabaseBlueprints(requestBody: GetRelationalDatabaseBlueprintsRequest): Observable<GetRelationalDatabaseBlueprintsResult> {
			return this.http.post<GetRelationalDatabaseBlueprintsResult>(this.baseUri + '#X-Amz-Target=Lightsail_20161128.GetRelationalDatabaseBlueprints', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Returns the list of bundles that are available in Amazon Lightsail. A bundle describes the performance specifications for a database.</p> <p>You can use a bundle ID to create a new database with explicit performance specifications.</p>
		 * Post #X-Amz-Target=Lightsail_20161128.GetRelationalDatabaseBundles
		 * @return {GetRelationalDatabaseBundlesResult} Success
		 */
		GetRelationalDatabaseBundles(requestBody: GetRelationalDatabaseBundlesRequest): Observable<GetRelationalDatabaseBundlesResult> {
			return this.http.post<GetRelationalDatabaseBundlesResult>(this.baseUri + '#X-Amz-Target=Lightsail_20161128.GetRelationalDatabaseBundles', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns a list of events for a specific database in Amazon Lightsail.
		 * Post #X-Amz-Target=Lightsail_20161128.GetRelationalDatabaseEvents
		 * @return {GetRelationalDatabaseEventsResult} Success
		 */
		GetRelationalDatabaseEvents(requestBody: GetRelationalDatabaseEventsRequest): Observable<GetRelationalDatabaseEventsResult> {
			return this.http.post<GetRelationalDatabaseEventsResult>(this.baseUri + '#X-Amz-Target=Lightsail_20161128.GetRelationalDatabaseEvents', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns a list of log events for a database in Amazon Lightsail.
		 * Post #X-Amz-Target=Lightsail_20161128.GetRelationalDatabaseLogEvents
		 * @return {GetRelationalDatabaseLogEventsResult} Success
		 */
		GetRelationalDatabaseLogEvents(requestBody: GetRelationalDatabaseLogEventsRequest): Observable<GetRelationalDatabaseLogEventsResult> {
			return this.http.post<GetRelationalDatabaseLogEventsResult>(this.baseUri + '#X-Amz-Target=Lightsail_20161128.GetRelationalDatabaseLogEvents', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns a list of available log streams for a specific database in Amazon Lightsail.
		 * Post #X-Amz-Target=Lightsail_20161128.GetRelationalDatabaseLogStreams
		 * @return {GetRelationalDatabaseLogStreamsResult} Success
		 */
		GetRelationalDatabaseLogStreams(requestBody: GetRelationalDatabaseLogStreamsRequest): Observable<GetRelationalDatabaseLogStreamsResult> {
			return this.http.post<GetRelationalDatabaseLogStreamsResult>(this.baseUri + '#X-Amz-Target=Lightsail_20161128.GetRelationalDatabaseLogStreams', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Returns the current, previous, or pending versions of the master user password for a Lightsail database.</p> <p>The <code>GetRelationalDatabaseMasterUserPassword</code> operation supports tag-based access control via resource tags applied to the resource identified by relationalDatabaseName.</p>
		 * Post #X-Amz-Target=Lightsail_20161128.GetRelationalDatabaseMasterUserPassword
		 * @return {GetRelationalDatabaseMasterUserPasswordResult} Success
		 */
		GetRelationalDatabaseMasterUserPassword(requestBody: GetRelationalDatabaseMasterUserPasswordRequest): Observable<GetRelationalDatabaseMasterUserPasswordResult> {
			return this.http.post<GetRelationalDatabaseMasterUserPasswordResult>(this.baseUri + '#X-Amz-Target=Lightsail_20161128.GetRelationalDatabaseMasterUserPassword', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Returns the data points of the specified metric for a database in Amazon Lightsail.</p> <p>Metrics report the utilization of your resources, and the error counts generated by them. Monitor and collect metric data regularly to maintain the reliability, availability, and performance of your resources.</p>
		 * Post #X-Amz-Target=Lightsail_20161128.GetRelationalDatabaseMetricData
		 * @return {GetRelationalDatabaseMetricDataResult} Success
		 */
		GetRelationalDatabaseMetricData(requestBody: GetRelationalDatabaseMetricDataRequest): Observable<GetRelationalDatabaseMetricDataResult> {
			return this.http.post<GetRelationalDatabaseMetricDataResult>(this.baseUri + '#X-Amz-Target=Lightsail_20161128.GetRelationalDatabaseMetricData', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Returns all of the runtime parameters offered by the underlying database software, or engine, for a specific database in Amazon Lightsail.</p> <p>In addition to the parameter names and values, this operation returns other information about each parameter. This information includes whether changes require a reboot, whether the parameter is modifiable, the allowed values, and the data types.</p>
		 * Post #X-Amz-Target=Lightsail_20161128.GetRelationalDatabaseParameters
		 * @return {GetRelationalDatabaseParametersResult} Success
		 */
		GetRelationalDatabaseParameters(requestBody: GetRelationalDatabaseParametersRequest): Observable<GetRelationalDatabaseParametersResult> {
			return this.http.post<GetRelationalDatabaseParametersResult>(this.baseUri + '#X-Amz-Target=Lightsail_20161128.GetRelationalDatabaseParameters', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns information about a specific database snapshot in Amazon Lightsail.
		 * Post #X-Amz-Target=Lightsail_20161128.GetRelationalDatabaseSnapshot
		 * @return {GetRelationalDatabaseSnapshotResult} Success
		 */
		GetRelationalDatabaseSnapshot(requestBody: GetRelationalDatabaseSnapshotRequest): Observable<GetRelationalDatabaseSnapshotResult> {
			return this.http.post<GetRelationalDatabaseSnapshotResult>(this.baseUri + '#X-Amz-Target=Lightsail_20161128.GetRelationalDatabaseSnapshot', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns information about all of your database snapshots in Amazon Lightsail.
		 * Post #X-Amz-Target=Lightsail_20161128.GetRelationalDatabaseSnapshots
		 * @return {GetRelationalDatabaseSnapshotsResult} Success
		 */
		GetRelationalDatabaseSnapshots(requestBody: GetRelationalDatabaseSnapshotsRequest): Observable<GetRelationalDatabaseSnapshotsResult> {
			return this.http.post<GetRelationalDatabaseSnapshotsResult>(this.baseUri + '#X-Amz-Target=Lightsail_20161128.GetRelationalDatabaseSnapshots', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns information about all of your databases in Amazon Lightsail.
		 * Post #X-Amz-Target=Lightsail_20161128.GetRelationalDatabases
		 * @return {GetRelationalDatabasesResult} Success
		 */
		GetRelationalDatabases(requestBody: GetRelationalDatabasesRequest): Observable<GetRelationalDatabasesResult> {
			return this.http.post<GetRelationalDatabasesResult>(this.baseUri + '#X-Amz-Target=Lightsail_20161128.GetRelationalDatabases', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns information about a specific static IP.
		 * Post #X-Amz-Target=Lightsail_20161128.GetStaticIp
		 * @return {GetStaticIpResult} Success
		 */
		GetStaticIp(requestBody: GetStaticIpRequest): Observable<GetStaticIpResult> {
			return this.http.post<GetStaticIpResult>(this.baseUri + '#X-Amz-Target=Lightsail_20161128.GetStaticIp', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns information about all static IPs in the user's account.
		 * Post #X-Amz-Target=Lightsail_20161128.GetStaticIps
		 * @return {GetStaticIpsResult} Success
		 */
		GetStaticIps(requestBody: GetStaticIpsRequest): Observable<GetStaticIpsResult> {
			return this.http.post<GetStaticIpsResult>(this.baseUri + '#X-Amz-Target=Lightsail_20161128.GetStaticIps', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Imports a public SSH key from a specific key pair.
		 * Post #X-Amz-Target=Lightsail_20161128.ImportKeyPair
		 * @return {ImportKeyPairResult} Success
		 */
		ImportKeyPair(requestBody: ImportKeyPairRequest): Observable<ImportKeyPairResult> {
			return this.http.post<ImportKeyPairResult>(this.baseUri + '#X-Amz-Target=Lightsail_20161128.ImportKeyPair', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns a Boolean value indicating whether your Lightsail VPC is peered.
		 * Post #X-Amz-Target=Lightsail_20161128.IsVpcPeered
		 * @return {IsVpcPeeredResult} Success
		 */
		IsVpcPeered(requestBody: IsVpcPeeredRequest): Observable<IsVpcPeeredResult> {
			return this.http.post<IsVpcPeeredResult>(this.baseUri + '#X-Amz-Target=Lightsail_20161128.IsVpcPeered', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Opens ports for a specific Amazon Lightsail instance, and specifies the IP addresses allowed to connect to the instance through the ports, and the protocol.</p> <p>The <code>OpenInstancePublicPorts</code> action supports tag-based access control via resource tags applied to the resource identified by <code>instanceName</code>. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en/articles/amazon-lightsail-controlling-access-using-tags">Lightsail Dev Guide</a>.</p>
		 * Post #X-Amz-Target=Lightsail_20161128.OpenInstancePublicPorts
		 * @return {OpenInstancePublicPortsResult} Success
		 */
		OpenInstancePublicPorts(requestBody: OpenInstancePublicPortsRequest): Observable<OpenInstancePublicPortsResult> {
			return this.http.post<OpenInstancePublicPortsResult>(this.baseUri + '#X-Amz-Target=Lightsail_20161128.OpenInstancePublicPorts', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Tries to peer the Lightsail VPC with the user's default VPC.
		 * Post #X-Amz-Target=Lightsail_20161128.PeerVpc
		 * @return {PeerVpcResult} Success
		 */
		PeerVpc(requestBody: PeerVpcRequest): Observable<PeerVpcResult> {
			return this.http.post<PeerVpcResult>(this.baseUri + '#X-Amz-Target=Lightsail_20161128.PeerVpc', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Creates or updates an alarm, and associates it with the specified metric.</p> <p>An alarm is used to monitor a single metric for one of your resources. When a metric condition is met, the alarm can notify you by email, SMS text message, and a banner displayed on the Amazon Lightsail console. For more information, see <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-alarms">Alarms in Amazon Lightsail</a>.</p> <p>When this action creates an alarm, the alarm state is immediately set to <code>INSUFFICIENT_DATA</code>. The alarm is then evaluated and its state is set appropriately. Any actions associated with the new state are then executed.</p> <p>When you update an existing alarm, its state is left unchanged, but the update completely overwrites the previous configuration of the alarm. The alarm is then evaluated with the updated configuration.</p>
		 * Post #X-Amz-Target=Lightsail_20161128.PutAlarm
		 * @return {PutAlarmResult} Success
		 */
		PutAlarm(requestBody: PutAlarmRequest): Observable<PutAlarmResult> {
			return this.http.post<PutAlarmResult>(this.baseUri + '#X-Amz-Target=Lightsail_20161128.PutAlarm', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Opens ports for a specific Amazon Lightsail instance, and specifies the IP addresses allowed to connect to the instance through the ports, and the protocol. This action also closes all currently open ports that are not included in the request. Include all of the ports and the protocols you want to open in your <code>PutInstancePublicPorts</code>request. Or use the <code>OpenInstancePublicPorts</code> action to open ports without closing currently open ports.</p> <p>The <code>PutInstancePublicPorts</code> action supports tag-based access control via resource tags applied to the resource identified by <code>instanceName</code>. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en/articles/amazon-lightsail-controlling-access-using-tags">Lightsail Dev Guide</a>.</p>
		 * Post #X-Amz-Target=Lightsail_20161128.PutInstancePublicPorts
		 * @return {PutInstancePublicPortsResult} Success
		 */
		PutInstancePublicPorts(requestBody: PutInstancePublicPortsRequest): Observable<PutInstancePublicPortsResult> {
			return this.http.post<PutInstancePublicPortsResult>(this.baseUri + '#X-Amz-Target=Lightsail_20161128.PutInstancePublicPorts', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Restarts a specific instance.</p> <p>The <code>reboot instance</code> operation supports tag-based access control via resource tags applied to the resource identified by <code>instance name</code>. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en/articles/amazon-lightsail-controlling-access-using-tags">Lightsail Dev Guide</a>.</p>
		 * Post #X-Amz-Target=Lightsail_20161128.RebootInstance
		 * @return {RebootInstanceResult} Success
		 */
		RebootInstance(requestBody: RebootInstanceRequest): Observable<RebootInstanceResult> {
			return this.http.post<RebootInstanceResult>(this.baseUri + '#X-Amz-Target=Lightsail_20161128.RebootInstance', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Restarts a specific database in Amazon Lightsail.</p> <p>The <code>reboot relational database</code> operation supports tag-based access control via resource tags applied to the resource identified by relationalDatabaseName. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en/articles/amazon-lightsail-controlling-access-using-tags">Lightsail Dev Guide</a>.</p>
		 * Post #X-Amz-Target=Lightsail_20161128.RebootRelationalDatabase
		 * @return {RebootRelationalDatabaseResult} Success
		 */
		RebootRelationalDatabase(requestBody: RebootRelationalDatabaseRequest): Observable<RebootRelationalDatabaseResult> {
			return this.http.post<RebootRelationalDatabaseResult>(this.baseUri + '#X-Amz-Target=Lightsail_20161128.RebootRelationalDatabase', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a specific static IP from your account.
		 * Post #X-Amz-Target=Lightsail_20161128.ReleaseStaticIp
		 * @return {ReleaseStaticIpResult} Success
		 */
		ReleaseStaticIp(requestBody: ReleaseStaticIpRequest): Observable<ReleaseStaticIpResult> {
			return this.http.post<ReleaseStaticIpResult>(this.baseUri + '#X-Amz-Target=Lightsail_20161128.ReleaseStaticIp', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Sends a verification request to an email contact method to ensure it's owned by the requester. SMS contact methods don't need to be verified.</p> <p>A contact method is used to send you notifications about your Amazon Lightsail resources. You can add one email address and one mobile phone number contact method in each AWS Region. However, SMS text messaging is not supported in some AWS Regions, and SMS text messages cannot be sent to some countries/regions. For more information, see <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-notifications">Notifications in Amazon Lightsail</a>.</p> <p>A verification request is sent to the contact method when you initially create it. Use this action to send another verification request if a previous verification request was deleted, or has expired.</p> <important> <p>Notifications are not sent to an email contact method until after it is verified, and confirmed as valid.</p> </important>
		 * Post #X-Amz-Target=Lightsail_20161128.SendContactMethodVerification
		 * @return {SendContactMethodVerificationResult} Success
		 */
		SendContactMethodVerification(requestBody: SendContactMethodVerificationRequest): Observable<SendContactMethodVerificationResult> {
			return this.http.post<SendContactMethodVerificationResult>(this.baseUri + '#X-Amz-Target=Lightsail_20161128.SendContactMethodVerification', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Starts a specific Amazon Lightsail instance from a stopped state. To restart an instance, use the <code>reboot instance</code> operation.</p> <note> <p>When you start a stopped instance, Lightsail assigns a new public IP address to the instance. To use the same IP address after stopping and starting an instance, create a static IP address and attach it to the instance. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en/articles/lightsail-create-static-ip">Lightsail Dev Guide</a>.</p> </note> <p>The <code>start instance</code> operation supports tag-based access control via resource tags applied to the resource identified by <code>instance name</code>. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en/articles/amazon-lightsail-controlling-access-using-tags">Lightsail Dev Guide</a>.</p>
		 * Post #X-Amz-Target=Lightsail_20161128.StartInstance
		 * @return {StartInstanceResult} Success
		 */
		StartInstance(requestBody: StartInstanceRequest): Observable<StartInstanceResult> {
			return this.http.post<StartInstanceResult>(this.baseUri + '#X-Amz-Target=Lightsail_20161128.StartInstance', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Starts a specific database from a stopped state in Amazon Lightsail. To restart a database, use the <code>reboot relational database</code> operation.</p> <p>The <code>start relational database</code> operation supports tag-based access control via resource tags applied to the resource identified by relationalDatabaseName. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en/articles/amazon-lightsail-controlling-access-using-tags">Lightsail Dev Guide</a>.</p>
		 * Post #X-Amz-Target=Lightsail_20161128.StartRelationalDatabase
		 * @return {StartRelationalDatabaseResult} Success
		 */
		StartRelationalDatabase(requestBody: StartRelationalDatabaseRequest): Observable<StartRelationalDatabaseResult> {
			return this.http.post<StartRelationalDatabaseResult>(this.baseUri + '#X-Amz-Target=Lightsail_20161128.StartRelationalDatabase', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Stops a specific Amazon Lightsail instance that is currently running.</p> <note> <p>When you start a stopped instance, Lightsail assigns a new public IP address to the instance. To use the same IP address after stopping and starting an instance, create a static IP address and attach it to the instance. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en/articles/lightsail-create-static-ip">Lightsail Dev Guide</a>.</p> </note> <p>The <code>stop instance</code> operation supports tag-based access control via resource tags applied to the resource identified by <code>instance name</code>. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en/articles/amazon-lightsail-controlling-access-using-tags">Lightsail Dev Guide</a>.</p>
		 * Post #X-Amz-Target=Lightsail_20161128.StopInstance
		 * @return {StopInstanceResult} Success
		 */
		StopInstance(requestBody: StopInstanceRequest): Observable<StopInstanceResult> {
			return this.http.post<StopInstanceResult>(this.baseUri + '#X-Amz-Target=Lightsail_20161128.StopInstance', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Stops a specific database that is currently running in Amazon Lightsail.</p> <p>The <code>stop relational database</code> operation supports tag-based access control via resource tags applied to the resource identified by relationalDatabaseName. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en/articles/amazon-lightsail-controlling-access-using-tags">Lightsail Dev Guide</a>.</p>
		 * Post #X-Amz-Target=Lightsail_20161128.StopRelationalDatabase
		 * @return {StopRelationalDatabaseResult} Success
		 */
		StopRelationalDatabase(requestBody: StopRelationalDatabaseRequest): Observable<StopRelationalDatabaseResult> {
			return this.http.post<StopRelationalDatabaseResult>(this.baseUri + '#X-Amz-Target=Lightsail_20161128.StopRelationalDatabase', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Adds one or more tags to the specified Amazon Lightsail resource. Each resource can have a maximum of 50 tags. Each tag consists of a key and an optional value. Tag keys must be unique per resource. For more information about tags, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en/articles/amazon-lightsail-tags">Lightsail Dev Guide</a>.</p> <p>The <code>tag resource</code> operation supports tag-based access control via request tags and resource tags applied to the resource identified by <code>resource name</code>. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en/articles/amazon-lightsail-controlling-access-using-tags">Lightsail Dev Guide</a>.</p>
		 * Post #X-Amz-Target=Lightsail_20161128.TagResource
		 * @return {TagResourceResult} Success
		 */
		TagResource(requestBody: TagResourceRequest): Observable<TagResourceResult> {
			return this.http.post<TagResourceResult>(this.baseUri + '#X-Amz-Target=Lightsail_20161128.TagResource', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Tests an alarm by displaying a banner on the Amazon Lightsail console. If a notification trigger is configured for the specified alarm, the test also sends a notification to the notification protocol (<code>Email</code> and/or <code>SMS</code>) configured for the alarm.</p> <p>An alarm is used to monitor a single metric for one of your resources. When a metric condition is met, the alarm can notify you by email, SMS text message, and a banner displayed on the Amazon Lightsail console. For more information, see <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-alarms">Alarms in Amazon Lightsail</a>.</p>
		 * Post #X-Amz-Target=Lightsail_20161128.TestAlarm
		 * @return {TestAlarmResult} Success
		 */
		TestAlarm(requestBody: TestAlarmRequest): Observable<TestAlarmResult> {
			return this.http.post<TestAlarmResult>(this.baseUri + '#X-Amz-Target=Lightsail_20161128.TestAlarm', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Attempts to unpeer the Lightsail VPC from the user's default VPC.
		 * Post #X-Amz-Target=Lightsail_20161128.UnpeerVpc
		 * @return {UnpeerVpcResult} Success
		 */
		UnpeerVpc(requestBody: UnpeerVpcRequest): Observable<UnpeerVpcResult> {
			return this.http.post<UnpeerVpcResult>(this.baseUri + '#X-Amz-Target=Lightsail_20161128.UnpeerVpc', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Deletes the specified set of tag keys and their values from the specified Amazon Lightsail resource.</p> <p>The <code>untag resource</code> operation supports tag-based access control via request tags and resource tags applied to the resource identified by <code>resource name</code>. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en/articles/amazon-lightsail-controlling-access-using-tags">Lightsail Dev Guide</a>.</p>
		 * Post #X-Amz-Target=Lightsail_20161128.UntagResource
		 * @return {UntagResourceResult} Success
		 */
		UntagResource(requestBody: UntagResourceRequest): Observable<UntagResourceResult> {
			return this.http.post<UntagResourceResult>(this.baseUri + '#X-Amz-Target=Lightsail_20161128.UntagResource', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Updates a domain recordset after it is created.</p> <p>The <code>update domain entry</code> operation supports tag-based access control via resource tags applied to the resource identified by <code>domain name</code>. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en/articles/amazon-lightsail-controlling-access-using-tags">Lightsail Dev Guide</a>.</p>
		 * Post #X-Amz-Target=Lightsail_20161128.UpdateDomainEntry
		 * @return {UpdateDomainEntryResult} Success
		 */
		UpdateDomainEntry(requestBody: UpdateDomainEntryRequest): Observable<UpdateDomainEntryResult> {
			return this.http.post<UpdateDomainEntryResult>(this.baseUri + '#X-Amz-Target=Lightsail_20161128.UpdateDomainEntry', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Updates the specified attribute for a load balancer. You can only update one attribute at a time.</p> <p>The <code>update load balancer attribute</code> operation supports tag-based access control via resource tags applied to the resource identified by <code>load balancer name</code>. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en/articles/amazon-lightsail-controlling-access-using-tags">Lightsail Dev Guide</a>.</p>
		 * Post #X-Amz-Target=Lightsail_20161128.UpdateLoadBalancerAttribute
		 * @return {UpdateLoadBalancerAttributeResult} Success
		 */
		UpdateLoadBalancerAttribute(requestBody: UpdateLoadBalancerAttributeRequest): Observable<UpdateLoadBalancerAttributeResult> {
			return this.http.post<UpdateLoadBalancerAttributeResult>(this.baseUri + '#X-Amz-Target=Lightsail_20161128.UpdateLoadBalancerAttribute', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Allows the update of one or more attributes of a database in Amazon Lightsail.</p> <p>Updates are applied immediately, or in cases where the updates could result in an outage, are applied during the database's predefined maintenance window.</p> <p>The <code>update relational database</code> operation supports tag-based access control via resource tags applied to the resource identified by relationalDatabaseName. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en/articles/amazon-lightsail-controlling-access-using-tags">Lightsail Dev Guide</a>.</p>
		 * Post #X-Amz-Target=Lightsail_20161128.UpdateRelationalDatabase
		 * @return {UpdateRelationalDatabaseResult} Success
		 */
		UpdateRelationalDatabase(requestBody: UpdateRelationalDatabaseRequest): Observable<UpdateRelationalDatabaseResult> {
			return this.http.post<UpdateRelationalDatabaseResult>(this.baseUri + '#X-Amz-Target=Lightsail_20161128.UpdateRelationalDatabase', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Allows the update of one or more parameters of a database in Amazon Lightsail.</p> <p>Parameter updates don't cause outages; therefore, their application is not subject to the preferred maintenance window. However, there are two ways in which parameter updates are applied: <code>dynamic</code> or <code>pending-reboot</code>. Parameters marked with a <code>dynamic</code> apply type are applied immediately. Parameters marked with a <code>pending-reboot</code> apply type are applied only after the database is rebooted using the <code>reboot relational database</code> operation.</p> <p>The <code>update relational database parameters</code> operation supports tag-based access control via resource tags applied to the resource identified by relationalDatabaseName. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en/articles/amazon-lightsail-controlling-access-using-tags">Lightsail Dev Guide</a>.</p>
		 * Post #X-Amz-Target=Lightsail_20161128.UpdateRelationalDatabaseParameters
		 * @return {UpdateRelationalDatabaseParametersResult} Success
		 */
		UpdateRelationalDatabaseParameters(requestBody: UpdateRelationalDatabaseParametersRequest): Observable<UpdateRelationalDatabaseParametersResult> {
			return this.http.post<UpdateRelationalDatabaseParametersResult>(this.baseUri + '#X-Amz-Target=Lightsail_20161128.UpdateRelationalDatabaseParameters', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

	export enum AllocateStaticIpX_Amz_Target { Lightsail_20161128_AllocateStaticIp = 0 }

	export enum AttachDiskX_Amz_Target { Lightsail_20161128_AttachDisk = 0 }

	export enum AttachInstancesToLoadBalancerX_Amz_Target { Lightsail_20161128_AttachInstancesToLoadBalancer = 0 }

	export enum AttachLoadBalancerTlsCertificateX_Amz_Target { Lightsail_20161128_AttachLoadBalancerTlsCertificate = 0 }

	export enum AttachStaticIpX_Amz_Target { Lightsail_20161128_AttachStaticIp = 0 }

	export enum CloseInstancePublicPortsX_Amz_Target { Lightsail_20161128_CloseInstancePublicPorts = 0 }

	export enum CopySnapshotX_Amz_Target { Lightsail_20161128_CopySnapshot = 0 }

	export enum CreateCloudFormationStackX_Amz_Target { Lightsail_20161128_CreateCloudFormationStack = 0 }

	export enum CreateContactMethodX_Amz_Target { Lightsail_20161128_CreateContactMethod = 0 }

	export enum CreateDiskX_Amz_Target { Lightsail_20161128_CreateDisk = 0 }

	export enum CreateDiskFromSnapshotX_Amz_Target { Lightsail_20161128_CreateDiskFromSnapshot = 0 }

	export enum CreateDiskSnapshotX_Amz_Target { Lightsail_20161128_CreateDiskSnapshot = 0 }

	export enum CreateDomainX_Amz_Target { Lightsail_20161128_CreateDomain = 0 }

	export enum CreateDomainEntryX_Amz_Target { Lightsail_20161128_CreateDomainEntry = 0 }

	export enum CreateInstanceSnapshotX_Amz_Target { Lightsail_20161128_CreateInstanceSnapshot = 0 }

	export enum CreateInstancesX_Amz_Target { Lightsail_20161128_CreateInstances = 0 }

	export enum CreateInstancesFromSnapshotX_Amz_Target { Lightsail_20161128_CreateInstancesFromSnapshot = 0 }

	export enum CreateKeyPairX_Amz_Target { Lightsail_20161128_CreateKeyPair = 0 }

	export enum CreateLoadBalancerX_Amz_Target { Lightsail_20161128_CreateLoadBalancer = 0 }

	export enum CreateLoadBalancerTlsCertificateX_Amz_Target { Lightsail_20161128_CreateLoadBalancerTlsCertificate = 0 }

	export enum CreateRelationalDatabaseX_Amz_Target { Lightsail_20161128_CreateRelationalDatabase = 0 }

	export enum CreateRelationalDatabaseFromSnapshotX_Amz_Target { Lightsail_20161128_CreateRelationalDatabaseFromSnapshot = 0 }

	export enum CreateRelationalDatabaseSnapshotX_Amz_Target { Lightsail_20161128_CreateRelationalDatabaseSnapshot = 0 }

	export enum DeleteAlarmX_Amz_Target { Lightsail_20161128_DeleteAlarm = 0 }

	export enum DeleteAutoSnapshotX_Amz_Target { Lightsail_20161128_DeleteAutoSnapshot = 0 }

	export enum DeleteContactMethodX_Amz_Target { Lightsail_20161128_DeleteContactMethod = 0 }

	export enum DeleteDiskX_Amz_Target { Lightsail_20161128_DeleteDisk = 0 }

	export enum DeleteDiskSnapshotX_Amz_Target { Lightsail_20161128_DeleteDiskSnapshot = 0 }

	export enum DeleteDomainX_Amz_Target { Lightsail_20161128_DeleteDomain = 0 }

	export enum DeleteDomainEntryX_Amz_Target { Lightsail_20161128_DeleteDomainEntry = 0 }

	export enum DeleteInstanceX_Amz_Target { Lightsail_20161128_DeleteInstance = 0 }

	export enum DeleteInstanceSnapshotX_Amz_Target { Lightsail_20161128_DeleteInstanceSnapshot = 0 }

	export enum DeleteKeyPairX_Amz_Target { Lightsail_20161128_DeleteKeyPair = 0 }

	export enum DeleteKnownHostKeysX_Amz_Target { Lightsail_20161128_DeleteKnownHostKeys = 0 }

	export enum DeleteLoadBalancerX_Amz_Target { Lightsail_20161128_DeleteLoadBalancer = 0 }

	export enum DeleteLoadBalancerTlsCertificateX_Amz_Target { Lightsail_20161128_DeleteLoadBalancerTlsCertificate = 0 }

	export enum DeleteRelationalDatabaseX_Amz_Target { Lightsail_20161128_DeleteRelationalDatabase = 0 }

	export enum DeleteRelationalDatabaseSnapshotX_Amz_Target { Lightsail_20161128_DeleteRelationalDatabaseSnapshot = 0 }

	export enum DetachDiskX_Amz_Target { Lightsail_20161128_DetachDisk = 0 }

	export enum DetachInstancesFromLoadBalancerX_Amz_Target { Lightsail_20161128_DetachInstancesFromLoadBalancer = 0 }

	export enum DetachStaticIpX_Amz_Target { Lightsail_20161128_DetachStaticIp = 0 }

	export enum DisableAddOnX_Amz_Target { Lightsail_20161128_DisableAddOn = 0 }

	export enum DownloadDefaultKeyPairX_Amz_Target { Lightsail_20161128_DownloadDefaultKeyPair = 0 }

	export enum EnableAddOnX_Amz_Target { Lightsail_20161128_EnableAddOn = 0 }

	export enum ExportSnapshotX_Amz_Target { Lightsail_20161128_ExportSnapshot = 0 }

	export enum GetActiveNamesX_Amz_Target { Lightsail_20161128_GetActiveNames = 0 }

	export enum GetAlarmsX_Amz_Target { Lightsail_20161128_GetAlarms = 0 }

	export enum GetAutoSnapshotsX_Amz_Target { Lightsail_20161128_GetAutoSnapshots = 0 }

	export enum GetBlueprintsX_Amz_Target { Lightsail_20161128_GetBlueprints = 0 }

	export enum GetBundlesX_Amz_Target { Lightsail_20161128_GetBundles = 0 }

	export enum GetCloudFormationStackRecordsX_Amz_Target { Lightsail_20161128_GetCloudFormationStackRecords = 0 }

	export enum GetContactMethodsX_Amz_Target { Lightsail_20161128_GetContactMethods = 0 }

	export enum GetDiskX_Amz_Target { Lightsail_20161128_GetDisk = 0 }

	export enum GetDiskSnapshotX_Amz_Target { Lightsail_20161128_GetDiskSnapshot = 0 }

	export enum GetDiskSnapshotsX_Amz_Target { Lightsail_20161128_GetDiskSnapshots = 0 }

	export enum GetDisksX_Amz_Target { Lightsail_20161128_GetDisks = 0 }

	export enum GetDomainX_Amz_Target { Lightsail_20161128_GetDomain = 0 }

	export enum GetDomainsX_Amz_Target { Lightsail_20161128_GetDomains = 0 }

	export enum GetExportSnapshotRecordsX_Amz_Target { Lightsail_20161128_GetExportSnapshotRecords = 0 }

	export enum GetInstanceX_Amz_Target { Lightsail_20161128_GetInstance = 0 }

	export enum GetInstanceAccessDetailsX_Amz_Target { Lightsail_20161128_GetInstanceAccessDetails = 0 }

	export enum GetInstanceMetricDataX_Amz_Target { Lightsail_20161128_GetInstanceMetricData = 0 }

	export enum GetInstancePortStatesX_Amz_Target { Lightsail_20161128_GetInstancePortStates = 0 }

	export enum GetInstanceSnapshotX_Amz_Target { Lightsail_20161128_GetInstanceSnapshot = 0 }

	export enum GetInstanceSnapshotsX_Amz_Target { Lightsail_20161128_GetInstanceSnapshots = 0 }

	export enum GetInstanceStateX_Amz_Target { Lightsail_20161128_GetInstanceState = 0 }

	export enum GetInstancesX_Amz_Target { Lightsail_20161128_GetInstances = 0 }

	export enum GetKeyPairX_Amz_Target { Lightsail_20161128_GetKeyPair = 0 }

	export enum GetKeyPairsX_Amz_Target { Lightsail_20161128_GetKeyPairs = 0 }

	export enum GetLoadBalancerX_Amz_Target { Lightsail_20161128_GetLoadBalancer = 0 }

	export enum GetLoadBalancerMetricDataX_Amz_Target { Lightsail_20161128_GetLoadBalancerMetricData = 0 }

	export enum GetLoadBalancerTlsCertificatesX_Amz_Target { Lightsail_20161128_GetLoadBalancerTlsCertificates = 0 }

	export enum GetLoadBalancersX_Amz_Target { Lightsail_20161128_GetLoadBalancers = 0 }

	export enum GetOperationX_Amz_Target { Lightsail_20161128_GetOperation = 0 }

	export enum GetOperationsX_Amz_Target { Lightsail_20161128_GetOperations = 0 }

	export enum GetOperationsForResourceX_Amz_Target { Lightsail_20161128_GetOperationsForResource = 0 }

	export enum GetRegionsX_Amz_Target { Lightsail_20161128_GetRegions = 0 }

	export enum GetRelationalDatabaseX_Amz_Target { Lightsail_20161128_GetRelationalDatabase = 0 }

	export enum GetRelationalDatabaseBlueprintsX_Amz_Target { Lightsail_20161128_GetRelationalDatabaseBlueprints = 0 }

	export enum GetRelationalDatabaseBundlesX_Amz_Target { Lightsail_20161128_GetRelationalDatabaseBundles = 0 }

	export enum GetRelationalDatabaseEventsX_Amz_Target { Lightsail_20161128_GetRelationalDatabaseEvents = 0 }

	export enum GetRelationalDatabaseLogEventsX_Amz_Target { Lightsail_20161128_GetRelationalDatabaseLogEvents = 0 }

	export enum GetRelationalDatabaseLogStreamsX_Amz_Target { Lightsail_20161128_GetRelationalDatabaseLogStreams = 0 }

	export enum GetRelationalDatabaseMasterUserPasswordX_Amz_Target { Lightsail_20161128_GetRelationalDatabaseMasterUserPassword = 0 }

	export enum GetRelationalDatabaseMetricDataX_Amz_Target { Lightsail_20161128_GetRelationalDatabaseMetricData = 0 }

	export enum GetRelationalDatabaseParametersX_Amz_Target { Lightsail_20161128_GetRelationalDatabaseParameters = 0 }

	export enum GetRelationalDatabaseSnapshotX_Amz_Target { Lightsail_20161128_GetRelationalDatabaseSnapshot = 0 }

	export enum GetRelationalDatabaseSnapshotsX_Amz_Target { Lightsail_20161128_GetRelationalDatabaseSnapshots = 0 }

	export enum GetRelationalDatabasesX_Amz_Target { Lightsail_20161128_GetRelationalDatabases = 0 }

	export enum GetStaticIpX_Amz_Target { Lightsail_20161128_GetStaticIp = 0 }

	export enum GetStaticIpsX_Amz_Target { Lightsail_20161128_GetStaticIps = 0 }

	export enum ImportKeyPairX_Amz_Target { Lightsail_20161128_ImportKeyPair = 0 }

	export enum IsVpcPeeredX_Amz_Target { Lightsail_20161128_IsVpcPeered = 0 }

	export enum OpenInstancePublicPortsX_Amz_Target { Lightsail_20161128_OpenInstancePublicPorts = 0 }

	export enum PeerVpcX_Amz_Target { Lightsail_20161128_PeerVpc = 0 }

	export enum PutAlarmX_Amz_Target { Lightsail_20161128_PutAlarm = 0 }

	export enum PutInstancePublicPortsX_Amz_Target { Lightsail_20161128_PutInstancePublicPorts = 0 }

	export enum RebootInstanceX_Amz_Target { Lightsail_20161128_RebootInstance = 0 }

	export enum RebootRelationalDatabaseX_Amz_Target { Lightsail_20161128_RebootRelationalDatabase = 0 }

	export enum ReleaseStaticIpX_Amz_Target { Lightsail_20161128_ReleaseStaticIp = 0 }

	export enum SendContactMethodVerificationX_Amz_Target { Lightsail_20161128_SendContactMethodVerification = 0 }

	export enum StartInstanceX_Amz_Target { Lightsail_20161128_StartInstance = 0 }

	export enum StartRelationalDatabaseX_Amz_Target { Lightsail_20161128_StartRelationalDatabase = 0 }

	export enum StopInstanceX_Amz_Target { Lightsail_20161128_StopInstance = 0 }

	export enum StopRelationalDatabaseX_Amz_Target { Lightsail_20161128_StopRelationalDatabase = 0 }

	export enum TagResourceX_Amz_Target { Lightsail_20161128_TagResource = 0 }

	export enum TestAlarmX_Amz_Target { Lightsail_20161128_TestAlarm = 0 }

	export enum UnpeerVpcX_Amz_Target { Lightsail_20161128_UnpeerVpc = 0 }

	export enum UntagResourceX_Amz_Target { Lightsail_20161128_UntagResource = 0 }

	export enum UpdateDomainEntryX_Amz_Target { Lightsail_20161128_UpdateDomainEntry = 0 }

	export enum UpdateLoadBalancerAttributeX_Amz_Target { Lightsail_20161128_UpdateLoadBalancerAttribute = 0 }

	export enum UpdateRelationalDatabaseX_Amz_Target { Lightsail_20161128_UpdateRelationalDatabase = 0 }

	export enum UpdateRelationalDatabaseParametersX_Amz_Target { Lightsail_20161128_UpdateRelationalDatabaseParameters = 0 }

}

