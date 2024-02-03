import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** Managed Disk. */
	export interface DiskListInputElement {

		/** Managed disk properties. */
		properties?: DiskListInputElementProperties;
	}

	/** Managed Disk. */
	export interface DiskListInputElementFormProperties {
	}
	export function CreateDiskListInputElementFormGroup() {
		return new FormGroup<DiskListInputElementFormProperties>({
		});

	}

	export interface DiskListInputElementProperties {

		/** The actual size of disk in GB. */
		actualSizeGB?: number | null;

		/** The disk id. */
		diskId?: string | null;

		/** Disk Sku. */
		diskSku?: DiskListInputElementPropertiesDiskSku | null;

		/** Disk resource type. */
		diskType?: DiskListInputElementPropertiesDiskType | null;

		/** Compute resource Uri which owns this disk. */
		managedBy?: string | null;

		/** The provision size of disk in GB. */
		provisionSizeGB?: number | null;

		/** The disk share path. */
		sharePath?: string | null;

		/** Disk State. */
		status?: DiskListInputElementPropertiesStatus | null;

		/** The disk resource Uri from user view. */
		userResourceId?: string | null;
	}
	export interface DiskListInputElementPropertiesFormProperties {

		/** The actual size of disk in GB. */
		actualSizeGB: FormControl<number | null | undefined>,

		/** The disk id. */
		diskId: FormControl<string | null | undefined>,

		/** Disk Sku. */
		diskSku: FormControl<DiskListInputElementPropertiesDiskSku | null | undefined>,

		/** Disk resource type. */
		diskType: FormControl<DiskListInputElementPropertiesDiskType | null | undefined>,

		/** Compute resource Uri which owns this disk. */
		managedBy: FormControl<string | null | undefined>,

		/** The provision size of disk in GB. */
		provisionSizeGB: FormControl<number | null | undefined>,

		/** The disk share path. */
		sharePath: FormControl<string | null | undefined>,

		/** Disk State. */
		status: FormControl<DiskListInputElementPropertiesStatus | null | undefined>,

		/** The disk resource Uri from user view. */
		userResourceId: FormControl<string | null | undefined>,
	}
	export function CreateDiskListInputElementPropertiesFormGroup() {
		return new FormGroup<DiskListInputElementPropertiesFormProperties>({
			actualSizeGB: new FormControl<number | null | undefined>(undefined),
			diskId: new FormControl<string | null | undefined>(undefined),
			diskSku: new FormControl<DiskListInputElementPropertiesDiskSku | null | undefined>(undefined),
			diskType: new FormControl<DiskListInputElementPropertiesDiskType | null | undefined>(undefined),
			managedBy: new FormControl<string | null | undefined>(undefined),
			provisionSizeGB: new FormControl<number | null | undefined>(undefined),
			sharePath: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<DiskListInputElementPropertiesStatus | null | undefined>(undefined),
			userResourceId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum DiskListInputElementPropertiesDiskSku { Standard_LRS = 'Standard_LRS', Standard_ZRS = 'Standard_ZRS', Standard_GRS = 'Standard_GRS', Standard_RAGRS = 'Standard_RAGRS', Premium_LRS = 'Premium_LRS', StandardSSD_LRS = 'StandardSSD_LRS', UltraSSD_LRS = 'UltraSSD_LRS' }

	export enum DiskListInputElementPropertiesDiskType { Undefined = 'Undefined', Disk = 'Disk', Snapshot = 'Snapshot', RestorePoint = 'RestorePoint', ManagedBlob = 'ManagedBlob' }

	export enum DiskListInputElementPropertiesStatus { Undefined = 'Undefined', Unattached = 'Unattached', Attached = 'Attached', Reserved = 'Reserved', ActiveSAS = 'ActiveSAS', Unknown = 'Unknown', All = 'All', Recommended = 'Recommended', OfflineMigration = 'OfflineMigration', OnlineMigration = 'OnlineMigration' }


	/** Disk migration job. */
	export interface DiskMigrationJob {

		/** Disk migration job properties. */
		properties?: DiskMigrationJobProperties;
	}

	/** Disk migration job. */
	export interface DiskMigrationJobFormProperties {
	}
	export function CreateDiskMigrationJobFormGroup() {
		return new FormGroup<DiskMigrationJobFormProperties>({
		});

	}

	export interface DiskMigrationJobProperties {

		/** The job creation time. */
		creationTime?: Date | null;

		/** The job end time. */
		endTime?: Date | null;

		/** The disk migration id. */
		migrationId?: string | null;

		/** The job start time. */
		startTime?: Date | null;

		/** Migration job status. */
		status?: DiskMigrationJobPropertiesStatus | null;

		/** List of disk migration tasks. */
		DiskMigrationJobPropertiesSubtasks?: Array<DiskMigrationJobPropertiesSubtasks>;

		/** The target share of migration job. */
		targetShare?: string | null;
	}
	export interface DiskMigrationJobPropertiesFormProperties {

		/** The job creation time. */
		creationTime: FormControl<Date | null | undefined>,

		/** The job end time. */
		endTime: FormControl<Date | null | undefined>,

		/** The disk migration id. */
		migrationId: FormControl<string | null | undefined>,

		/** The job start time. */
		startTime: FormControl<Date | null | undefined>,

		/** Migration job status. */
		status: FormControl<DiskMigrationJobPropertiesStatus | null | undefined>,

		/** The target share of migration job. */
		targetShare: FormControl<string | null | undefined>,
	}
	export function CreateDiskMigrationJobPropertiesFormGroup() {
		return new FormGroup<DiskMigrationJobPropertiesFormProperties>({
			creationTime: new FormControl<Date | null | undefined>(undefined),
			endTime: new FormControl<Date | null | undefined>(undefined),
			migrationId: new FormControl<string | null | undefined>(undefined),
			startTime: new FormControl<Date | null | undefined>(undefined),
			status: new FormControl<DiskMigrationJobPropertiesStatus | null | undefined>(undefined),
			targetShare: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum DiskMigrationJobPropertiesStatus { Undefined = 'Undefined', Running = 'Running', Succeeded = 'Succeeded', Failed = 'Failed', Canceled = 'Canceled', Pending = 'Pending' }

	export interface DiskMigrationJobPropertiesSubtasks {

		/** The id of migration child task. */
		migrationSubTaskId?: string | null;

		/** Disk migration child task properties. */
		properties?: DiskMigrationJobPropertiesSubtasksProperties;
	}
	export interface DiskMigrationJobPropertiesSubtasksFormProperties {

		/** The id of migration child task. */
		migrationSubTaskId: FormControl<string | null | undefined>,
	}
	export function CreateDiskMigrationJobPropertiesSubtasksFormGroup() {
		return new FormGroup<DiskMigrationJobPropertiesSubtasksFormProperties>({
			migrationSubTaskId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DiskMigrationJobPropertiesSubtasksProperties {

		/** The id of disk. */
		diskId?: string | null;

		/** The task end time. */
		endTime?: Date | null;

		/** Migration child task status. */
		migrationSubtaskStatus?: DiskMigrationJobPropertiesSubtasksPropertiesMigrationSubtaskStatus | null;

		/** The reason of task failure. */
		reason?: string | null;

		/** The source share of migration task. */
		sourceShare?: string | null;

		/** The task start time. */
		startTime?: Date | null;

		/** Disk State. */
		targetDiskStateForMigration?: DiskListInputElementPropertiesStatus | null;

		/** The target share of migration task. */
		targetShare?: string | null;
	}
	export interface DiskMigrationJobPropertiesSubtasksPropertiesFormProperties {

		/** The id of disk. */
		diskId: FormControl<string | null | undefined>,

		/** The task end time. */
		endTime: FormControl<Date | null | undefined>,

		/** Migration child task status. */
		migrationSubtaskStatus: FormControl<DiskMigrationJobPropertiesSubtasksPropertiesMigrationSubtaskStatus | null | undefined>,

		/** The reason of task failure. */
		reason: FormControl<string | null | undefined>,

		/** The source share of migration task. */
		sourceShare: FormControl<string | null | undefined>,

		/** The task start time. */
		startTime: FormControl<Date | null | undefined>,

		/** Disk State. */
		targetDiskStateForMigration: FormControl<DiskListInputElementPropertiesStatus | null | undefined>,

		/** The target share of migration task. */
		targetShare: FormControl<string | null | undefined>,
	}
	export function CreateDiskMigrationJobPropertiesSubtasksPropertiesFormGroup() {
		return new FormGroup<DiskMigrationJobPropertiesSubtasksPropertiesFormProperties>({
			diskId: new FormControl<string | null | undefined>(undefined),
			endTime: new FormControl<Date | null | undefined>(undefined),
			migrationSubtaskStatus: new FormControl<DiskMigrationJobPropertiesSubtasksPropertiesMigrationSubtaskStatus | null | undefined>(undefined),
			reason: new FormControl<string | null | undefined>(undefined),
			sourceShare: new FormControl<string | null | undefined>(undefined),
			startTime: new FormControl<Date | null | undefined>(undefined),
			targetDiskStateForMigration: new FormControl<DiskListInputElementPropertiesStatus | null | undefined>(undefined),
			targetShare: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum DiskMigrationJobPropertiesSubtasksPropertiesMigrationSubtaskStatus { Undefined = 'Undefined', Running = 'Running', Succeeded = 'Succeeded', Failed = 'Failed', Canceled = 'Canceled', Pending = 'Pending', Skipped = 'Skipped' }


	/** List of disk migration jobs. */
	export interface DiskMigrationJobList {

		/** URI to the next page. */
		nextLink?: string | null;

		/** List of disk migration jobs. */
		DiskMigrationJobListValue?: Array<DiskMigrationJobListValue>;
	}

	/** List of disk migration jobs. */
	export interface DiskMigrationJobListFormProperties {

		/** URI to the next page. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateDiskMigrationJobListFormGroup() {
		return new FormGroup<DiskMigrationJobListFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DiskMigrationJobListValue {

		/** Disk migration job properties. */
		properties?: DiskMigrationJobListValueProperties;
	}
	export interface DiskMigrationJobListValueFormProperties {
	}
	export function CreateDiskMigrationJobListValueFormGroup() {
		return new FormGroup<DiskMigrationJobListValueFormProperties>({
		});

	}

	export interface DiskMigrationJobListValueProperties {

		/** The job creation time. */
		creationTime?: Date | null;

		/** The job end time. */
		endTime?: Date | null;

		/** The disk migration id. */
		migrationId?: string | null;

		/** The job start time. */
		startTime?: Date | null;

		/** Migration job status. */
		status?: DiskMigrationJobPropertiesStatus | null;

		/** List of disk migration tasks. */
		DiskMigrationJobListValuePropertiesSubtasks?: Array<DiskMigrationJobListValuePropertiesSubtasks>;

		/** The target share of migration job. */
		targetShare?: string | null;
	}
	export interface DiskMigrationJobListValuePropertiesFormProperties {

		/** The job creation time. */
		creationTime: FormControl<Date | null | undefined>,

		/** The job end time. */
		endTime: FormControl<Date | null | undefined>,

		/** The disk migration id. */
		migrationId: FormControl<string | null | undefined>,

		/** The job start time. */
		startTime: FormControl<Date | null | undefined>,

		/** Migration job status. */
		status: FormControl<DiskMigrationJobPropertiesStatus | null | undefined>,

		/** The target share of migration job. */
		targetShare: FormControl<string | null | undefined>,
	}
	export function CreateDiskMigrationJobListValuePropertiesFormGroup() {
		return new FormGroup<DiskMigrationJobListValuePropertiesFormProperties>({
			creationTime: new FormControl<Date | null | undefined>(undefined),
			endTime: new FormControl<Date | null | undefined>(undefined),
			migrationId: new FormControl<string | null | undefined>(undefined),
			startTime: new FormControl<Date | null | undefined>(undefined),
			status: new FormControl<DiskMigrationJobPropertiesStatus | null | undefined>(undefined),
			targetShare: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DiskMigrationJobListValuePropertiesSubtasks {

		/** The id of migration child task. */
		migrationSubTaskId?: string | null;

		/** Disk migration child task properties. */
		properties?: DiskMigrationJobListValuePropertiesSubtasksProperties;
	}
	export interface DiskMigrationJobListValuePropertiesSubtasksFormProperties {

		/** The id of migration child task. */
		migrationSubTaskId: FormControl<string | null | undefined>,
	}
	export function CreateDiskMigrationJobListValuePropertiesSubtasksFormGroup() {
		return new FormGroup<DiskMigrationJobListValuePropertiesSubtasksFormProperties>({
			migrationSubTaskId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DiskMigrationJobListValuePropertiesSubtasksProperties {

		/** The id of disk. */
		diskId?: string | null;

		/** The task end time. */
		endTime?: Date | null;

		/** Migration child task status. */
		migrationSubtaskStatus?: DiskMigrationJobPropertiesSubtasksPropertiesMigrationSubtaskStatus | null;

		/** The reason of task failure. */
		reason?: string | null;

		/** The source share of migration task. */
		sourceShare?: string | null;

		/** The task start time. */
		startTime?: Date | null;

		/** Disk State. */
		targetDiskStateForMigration?: DiskListInputElementPropertiesStatus | null;

		/** The target share of migration task. */
		targetShare?: string | null;
	}
	export interface DiskMigrationJobListValuePropertiesSubtasksPropertiesFormProperties {

		/** The id of disk. */
		diskId: FormControl<string | null | undefined>,

		/** The task end time. */
		endTime: FormControl<Date | null | undefined>,

		/** Migration child task status. */
		migrationSubtaskStatus: FormControl<DiskMigrationJobPropertiesSubtasksPropertiesMigrationSubtaskStatus | null | undefined>,

		/** The reason of task failure. */
		reason: FormControl<string | null | undefined>,

		/** The source share of migration task. */
		sourceShare: FormControl<string | null | undefined>,

		/** The task start time. */
		startTime: FormControl<Date | null | undefined>,

		/** Disk State. */
		targetDiskStateForMigration: FormControl<DiskListInputElementPropertiesStatus | null | undefined>,

		/** The target share of migration task. */
		targetShare: FormControl<string | null | undefined>,
	}
	export function CreateDiskMigrationJobListValuePropertiesSubtasksPropertiesFormGroup() {
		return new FormGroup<DiskMigrationJobListValuePropertiesSubtasksPropertiesFormProperties>({
			diskId: new FormControl<string | null | undefined>(undefined),
			endTime: new FormControl<Date | null | undefined>(undefined),
			migrationSubtaskStatus: new FormControl<DiskMigrationJobPropertiesSubtasksPropertiesMigrationSubtaskStatus | null | undefined>(undefined),
			reason: new FormControl<string | null | undefined>(undefined),
			sourceShare: new FormControl<string | null | undefined>(undefined),
			startTime: new FormControl<Date | null | undefined>(undefined),
			targetDiskStateForMigration: new FormControl<DiskListInputElementPropertiesStatus | null | undefined>(undefined),
			targetShare: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Migration job status. */
	export enum MigrationJobStatus { Undefined = 'Undefined', Running = 'Running', Succeeded = 'Succeeded', Failed = 'Failed', Canceled = 'Canceled', Pending = 'Pending' }


	/** Disk migration child task. */
	export interface MigrationSubTask {

		/** The id of migration child task. */
		migrationSubTaskId?: string | null;

		/** Disk migration child task properties. */
		properties?: MigrationSubTaskProperties;
	}

	/** Disk migration child task. */
	export interface MigrationSubTaskFormProperties {

		/** The id of migration child task. */
		migrationSubTaskId: FormControl<string | null | undefined>,
	}
	export function CreateMigrationSubTaskFormGroup() {
		return new FormGroup<MigrationSubTaskFormProperties>({
			migrationSubTaskId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface MigrationSubTaskProperties {

		/** The id of disk. */
		diskId?: string | null;

		/** The task end time. */
		endTime?: Date | null;

		/** Migration child task status. */
		migrationSubtaskStatus?: DiskMigrationJobPropertiesSubtasksPropertiesMigrationSubtaskStatus | null;

		/** The reason of task failure. */
		reason?: string | null;

		/** The source share of migration task. */
		sourceShare?: string | null;

		/** The task start time. */
		startTime?: Date | null;

		/** Disk State. */
		targetDiskStateForMigration?: DiskListInputElementPropertiesStatus | null;

		/** The target share of migration task. */
		targetShare?: string | null;
	}
	export interface MigrationSubTaskPropertiesFormProperties {

		/** The id of disk. */
		diskId: FormControl<string | null | undefined>,

		/** The task end time. */
		endTime: FormControl<Date | null | undefined>,

		/** Migration child task status. */
		migrationSubtaskStatus: FormControl<DiskMigrationJobPropertiesSubtasksPropertiesMigrationSubtaskStatus | null | undefined>,

		/** The reason of task failure. */
		reason: FormControl<string | null | undefined>,

		/** The source share of migration task. */
		sourceShare: FormControl<string | null | undefined>,

		/** The task start time. */
		startTime: FormControl<Date | null | undefined>,

		/** Disk State. */
		targetDiskStateForMigration: FormControl<DiskListInputElementPropertiesStatus | null | undefined>,

		/** The target share of migration task. */
		targetShare: FormControl<string | null | undefined>,
	}
	export function CreateMigrationSubTaskPropertiesFormGroup() {
		return new FormGroup<MigrationSubTaskPropertiesFormProperties>({
			diskId: new FormControl<string | null | undefined>(undefined),
			endTime: new FormControl<Date | null | undefined>(undefined),
			migrationSubtaskStatus: new FormControl<DiskMigrationJobPropertiesSubtasksPropertiesMigrationSubtaskStatus | null | undefined>(undefined),
			reason: new FormControl<string | null | undefined>(undefined),
			sourceShare: new FormControl<string | null | undefined>(undefined),
			startTime: new FormControl<Date | null | undefined>(undefined),
			targetDiskStateForMigration: new FormControl<DiskListInputElementPropertiesStatus | null | undefined>(undefined),
			targetShare: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Disk migration child task. */
	export interface MigrationSubTaskListElement {

		/** The id of migration child task. */
		migrationSubTaskId?: string | null;

		/** Disk migration child task properties. */
		properties?: MigrationSubTaskListElementProperties;
	}

	/** Disk migration child task. */
	export interface MigrationSubTaskListElementFormProperties {

		/** The id of migration child task. */
		migrationSubTaskId: FormControl<string | null | undefined>,
	}
	export function CreateMigrationSubTaskListElementFormGroup() {
		return new FormGroup<MigrationSubTaskListElementFormProperties>({
			migrationSubTaskId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface MigrationSubTaskListElementProperties {

		/** The id of disk. */
		diskId?: string | null;

		/** The task end time. */
		endTime?: Date | null;

		/** Migration child task status. */
		migrationSubtaskStatus?: DiskMigrationJobPropertiesSubtasksPropertiesMigrationSubtaskStatus | null;

		/** The reason of task failure. */
		reason?: string | null;

		/** The source share of migration task. */
		sourceShare?: string | null;

		/** The task start time. */
		startTime?: Date | null;

		/** Disk State. */
		targetDiskStateForMigration?: DiskListInputElementPropertiesStatus | null;

		/** The target share of migration task. */
		targetShare?: string | null;
	}
	export interface MigrationSubTaskListElementPropertiesFormProperties {

		/** The id of disk. */
		diskId: FormControl<string | null | undefined>,

		/** The task end time. */
		endTime: FormControl<Date | null | undefined>,

		/** Migration child task status. */
		migrationSubtaskStatus: FormControl<DiskMigrationJobPropertiesSubtasksPropertiesMigrationSubtaskStatus | null | undefined>,

		/** The reason of task failure. */
		reason: FormControl<string | null | undefined>,

		/** The source share of migration task. */
		sourceShare: FormControl<string | null | undefined>,

		/** The task start time. */
		startTime: FormControl<Date | null | undefined>,

		/** Disk State. */
		targetDiskStateForMigration: FormControl<DiskListInputElementPropertiesStatus | null | undefined>,

		/** The target share of migration task. */
		targetShare: FormControl<string | null | undefined>,
	}
	export function CreateMigrationSubTaskListElementPropertiesFormGroup() {
		return new FormGroup<MigrationSubTaskListElementPropertiesFormProperties>({
			diskId: new FormControl<string | null | undefined>(undefined),
			endTime: new FormControl<Date | null | undefined>(undefined),
			migrationSubtaskStatus: new FormControl<DiskMigrationJobPropertiesSubtasksPropertiesMigrationSubtaskStatus | null | undefined>(undefined),
			reason: new FormControl<string | null | undefined>(undefined),
			sourceShare: new FormControl<string | null | undefined>(undefined),
			startTime: new FormControl<Date | null | undefined>(undefined),
			targetDiskStateForMigration: new FormControl<DiskListInputElementPropertiesStatus | null | undefined>(undefined),
			targetShare: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Migration child task status. */
	export enum MigrationSubTaskStatus { Undefined = 'Undefined', Running = 'Running', Succeeded = 'Succeeded', Failed = 'Failed', Canceled = 'Canceled', Pending = 'Pending', Skipped = 'Skipped' }

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Returns a list of disk migration jobs.
		 * Get subscriptions/{subscriptionId}/providers/Microsoft.Compute.Admin/locations/{location}/diskmigrationjobs
		 * @param {string} subscriptionId Subscription credentials that uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} location Location of the resource.
		 * @param {string} status The parameters of disk migration job status.
		 * @param {string} api_version Client API Version.
		 * @return {DiskMigrationJobs_ListReturn} OK -- The list of disk migration jobs has been returned.
		 */
		DiskMigrationJobs_List(subscriptionId: string, location: string, status: string | null | undefined, api_version: string): Observable<DiskMigrationJobs_ListReturn> {
			return this.http.get<DiskMigrationJobs_ListReturn>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/providers/Microsoft.Compute.Admin/locations/' + (location == null ? '' : encodeURIComponent(location)) + '/diskmigrationjobs&status=' + (status == null ? '' : encodeURIComponent(status)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Returns the requested disk migration job.
		 * Get subscriptions/{subscriptionId}/providers/Microsoft.Compute.Admin/locations/{location}/diskmigrationjobs/{migrationId}
		 * @param {string} subscriptionId Subscription credentials that uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} location Location of the resource.
		 * @param {string} migrationId The migration job guid name.
		 * @param {string} api_version Client API Version.
		 * @return {DiskMigrationJobs_GetReturn} OK -- The disk migration job has been returned.
		 */
		DiskMigrationJobs_Get(subscriptionId: string, location: string, migrationId: string, api_version: string): Observable<DiskMigrationJobs_GetReturn> {
			return this.http.get<DiskMigrationJobs_GetReturn>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/providers/Microsoft.Compute.Admin/locations/' + (location == null ? '' : encodeURIComponent(location)) + '/diskmigrationjobs/' + (migrationId == null ? '' : encodeURIComponent(migrationId)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Create a disk migration job.
		 * Put subscriptions/{subscriptionId}/providers/Microsoft.Compute.Admin/locations/{location}/diskmigrationjobs/{migrationId}
		 * @param {string} subscriptionId Subscription credentials that uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} location Location of the resource.
		 * @param {string} migrationId The migration job guid name.
		 * @param {string} targetShare The target share name.
		 * @param {string} api_version Client API Version.
		 * @param {Array<DiskMigrationJobs_CreatePutBody>} requestBody The parameters of disk list.
		 * @return {DiskMigrationJobs_CreateReturn} OK --  Disk migration job is created successfully.
		 */
		DiskMigrationJobs_Create(subscriptionId: string, location: string, migrationId: string, targetShare: string, api_version: string, requestBody: Array<DiskMigrationJobs_CreatePutBody>): Observable<DiskMigrationJobs_CreateReturn> {
			return this.http.put<DiskMigrationJobs_CreateReturn>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/providers/Microsoft.Compute.Admin/locations/' + (location == null ? '' : encodeURIComponent(location)) + '/diskmigrationjobs/' + (migrationId == null ? '' : encodeURIComponent(migrationId)) + '&targetShare=' + (targetShare == null ? '' : encodeURIComponent(targetShare)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Cancel a disk migration job.
		 * Post subscriptions/{subscriptionId}/providers/Microsoft.Compute.Admin/locations/{location}/diskmigrationjobs/{migrationId}/Cancel
		 * @param {string} subscriptionId Subscription credentials that uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} location Location of the resource.
		 * @param {string} migrationId The migration job guid name.
		 * @param {string} api_version Client API Version.
		 * @return {DiskMigrationJobs_CancelReturn} OK --  Disk migration job cancellation is called.
		 */
		DiskMigrationJobs_Cancel(subscriptionId: string, location: string, migrationId: string, api_version: string): Observable<DiskMigrationJobs_CancelReturn> {
			return this.http.post<DiskMigrationJobs_CancelReturn>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/providers/Microsoft.Compute.Admin/locations/' + (location == null ? '' : encodeURIComponent(location)) + '/diskmigrationjobs/' + (migrationId == null ? '' : encodeURIComponent(migrationId)) + '/Cancel&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), null, {});
		}
	}

	export interface DiskMigrationJobs_ListReturn {

		/** URI to the next page. */
		nextLink?: string | null;

		/** List of disk migration jobs. */
		DiskMigrationJobs_ListReturnValue?: Array<DiskMigrationJobs_ListReturnValue>;
	}
	export interface DiskMigrationJobs_ListReturnFormProperties {

		/** URI to the next page. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateDiskMigrationJobs_ListReturnFormGroup() {
		return new FormGroup<DiskMigrationJobs_ListReturnFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DiskMigrationJobs_ListReturnValue {

		/** Disk migration job properties. */
		properties?: DiskMigrationJobs_ListReturnValueProperties;
	}
	export interface DiskMigrationJobs_ListReturnValueFormProperties {
	}
	export function CreateDiskMigrationJobs_ListReturnValueFormGroup() {
		return new FormGroup<DiskMigrationJobs_ListReturnValueFormProperties>({
		});

	}

	export interface DiskMigrationJobs_ListReturnValueProperties {

		/** The job creation time. */
		creationTime?: Date | null;

		/** The job end time. */
		endTime?: Date | null;

		/** The disk migration id. */
		migrationId?: string | null;

		/** The job start time. */
		startTime?: Date | null;

		/** Migration job status. */
		status?: DiskMigrationJobPropertiesStatus | null;

		/** List of disk migration tasks. */
		DiskMigrationJobs_ListReturnValuePropertiesSubtasks?: Array<DiskMigrationJobs_ListReturnValuePropertiesSubtasks>;

		/** The target share of migration job. */
		targetShare?: string | null;
	}
	export interface DiskMigrationJobs_ListReturnValuePropertiesFormProperties {

		/** The job creation time. */
		creationTime: FormControl<Date | null | undefined>,

		/** The job end time. */
		endTime: FormControl<Date | null | undefined>,

		/** The disk migration id. */
		migrationId: FormControl<string | null | undefined>,

		/** The job start time. */
		startTime: FormControl<Date | null | undefined>,

		/** Migration job status. */
		status: FormControl<DiskMigrationJobPropertiesStatus | null | undefined>,

		/** The target share of migration job. */
		targetShare: FormControl<string | null | undefined>,
	}
	export function CreateDiskMigrationJobs_ListReturnValuePropertiesFormGroup() {
		return new FormGroup<DiskMigrationJobs_ListReturnValuePropertiesFormProperties>({
			creationTime: new FormControl<Date | null | undefined>(undefined),
			endTime: new FormControl<Date | null | undefined>(undefined),
			migrationId: new FormControl<string | null | undefined>(undefined),
			startTime: new FormControl<Date | null | undefined>(undefined),
			status: new FormControl<DiskMigrationJobPropertiesStatus | null | undefined>(undefined),
			targetShare: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DiskMigrationJobs_ListReturnValuePropertiesSubtasks {

		/** The id of migration child task. */
		migrationSubTaskId?: string | null;

		/** Disk migration child task properties. */
		properties?: DiskMigrationJobs_ListReturnValuePropertiesSubtasksProperties;
	}
	export interface DiskMigrationJobs_ListReturnValuePropertiesSubtasksFormProperties {

		/** The id of migration child task. */
		migrationSubTaskId: FormControl<string | null | undefined>,
	}
	export function CreateDiskMigrationJobs_ListReturnValuePropertiesSubtasksFormGroup() {
		return new FormGroup<DiskMigrationJobs_ListReturnValuePropertiesSubtasksFormProperties>({
			migrationSubTaskId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DiskMigrationJobs_ListReturnValuePropertiesSubtasksProperties {

		/** The id of disk. */
		diskId?: string | null;

		/** The task end time. */
		endTime?: Date | null;

		/** Migration child task status. */
		migrationSubtaskStatus?: DiskMigrationJobPropertiesSubtasksPropertiesMigrationSubtaskStatus | null;

		/** The reason of task failure. */
		reason?: string | null;

		/** The source share of migration task. */
		sourceShare?: string | null;

		/** The task start time. */
		startTime?: Date | null;

		/** Disk State. */
		targetDiskStateForMigration?: DiskListInputElementPropertiesStatus | null;

		/** The target share of migration task. */
		targetShare?: string | null;
	}
	export interface DiskMigrationJobs_ListReturnValuePropertiesSubtasksPropertiesFormProperties {

		/** The id of disk. */
		diskId: FormControl<string | null | undefined>,

		/** The task end time. */
		endTime: FormControl<Date | null | undefined>,

		/** Migration child task status. */
		migrationSubtaskStatus: FormControl<DiskMigrationJobPropertiesSubtasksPropertiesMigrationSubtaskStatus | null | undefined>,

		/** The reason of task failure. */
		reason: FormControl<string | null | undefined>,

		/** The source share of migration task. */
		sourceShare: FormControl<string | null | undefined>,

		/** The task start time. */
		startTime: FormControl<Date | null | undefined>,

		/** Disk State. */
		targetDiskStateForMigration: FormControl<DiskListInputElementPropertiesStatus | null | undefined>,

		/** The target share of migration task. */
		targetShare: FormControl<string | null | undefined>,
	}
	export function CreateDiskMigrationJobs_ListReturnValuePropertiesSubtasksPropertiesFormGroup() {
		return new FormGroup<DiskMigrationJobs_ListReturnValuePropertiesSubtasksPropertiesFormProperties>({
			diskId: new FormControl<string | null | undefined>(undefined),
			endTime: new FormControl<Date | null | undefined>(undefined),
			migrationSubtaskStatus: new FormControl<DiskMigrationJobPropertiesSubtasksPropertiesMigrationSubtaskStatus | null | undefined>(undefined),
			reason: new FormControl<string | null | undefined>(undefined),
			sourceShare: new FormControl<string | null | undefined>(undefined),
			startTime: new FormControl<Date | null | undefined>(undefined),
			targetDiskStateForMigration: new FormControl<DiskListInputElementPropertiesStatus | null | undefined>(undefined),
			targetShare: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DiskMigrationJobs_GetReturn {

		/** Disk migration job properties. */
		properties?: DiskMigrationJobs_GetReturnProperties;
	}
	export interface DiskMigrationJobs_GetReturnFormProperties {
	}
	export function CreateDiskMigrationJobs_GetReturnFormGroup() {
		return new FormGroup<DiskMigrationJobs_GetReturnFormProperties>({
		});

	}

	export interface DiskMigrationJobs_GetReturnProperties {

		/** The job creation time. */
		creationTime?: Date | null;

		/** The job end time. */
		endTime?: Date | null;

		/** The disk migration id. */
		migrationId?: string | null;

		/** The job start time. */
		startTime?: Date | null;

		/** Migration job status. */
		status?: DiskMigrationJobPropertiesStatus | null;

		/** List of disk migration tasks. */
		DiskMigrationJobs_GetReturnPropertiesSubtasks?: Array<DiskMigrationJobs_GetReturnPropertiesSubtasks>;

		/** The target share of migration job. */
		targetShare?: string | null;
	}
	export interface DiskMigrationJobs_GetReturnPropertiesFormProperties {

		/** The job creation time. */
		creationTime: FormControl<Date | null | undefined>,

		/** The job end time. */
		endTime: FormControl<Date | null | undefined>,

		/** The disk migration id. */
		migrationId: FormControl<string | null | undefined>,

		/** The job start time. */
		startTime: FormControl<Date | null | undefined>,

		/** Migration job status. */
		status: FormControl<DiskMigrationJobPropertiesStatus | null | undefined>,

		/** The target share of migration job. */
		targetShare: FormControl<string | null | undefined>,
	}
	export function CreateDiskMigrationJobs_GetReturnPropertiesFormGroup() {
		return new FormGroup<DiskMigrationJobs_GetReturnPropertiesFormProperties>({
			creationTime: new FormControl<Date | null | undefined>(undefined),
			endTime: new FormControl<Date | null | undefined>(undefined),
			migrationId: new FormControl<string | null | undefined>(undefined),
			startTime: new FormControl<Date | null | undefined>(undefined),
			status: new FormControl<DiskMigrationJobPropertiesStatus | null | undefined>(undefined),
			targetShare: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DiskMigrationJobs_GetReturnPropertiesSubtasks {

		/** The id of migration child task. */
		migrationSubTaskId?: string | null;

		/** Disk migration child task properties. */
		properties?: DiskMigrationJobs_GetReturnPropertiesSubtasksProperties;
	}
	export interface DiskMigrationJobs_GetReturnPropertiesSubtasksFormProperties {

		/** The id of migration child task. */
		migrationSubTaskId: FormControl<string | null | undefined>,
	}
	export function CreateDiskMigrationJobs_GetReturnPropertiesSubtasksFormGroup() {
		return new FormGroup<DiskMigrationJobs_GetReturnPropertiesSubtasksFormProperties>({
			migrationSubTaskId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DiskMigrationJobs_GetReturnPropertiesSubtasksProperties {

		/** The id of disk. */
		diskId?: string | null;

		/** The task end time. */
		endTime?: Date | null;

		/** Migration child task status. */
		migrationSubtaskStatus?: DiskMigrationJobPropertiesSubtasksPropertiesMigrationSubtaskStatus | null;

		/** The reason of task failure. */
		reason?: string | null;

		/** The source share of migration task. */
		sourceShare?: string | null;

		/** The task start time. */
		startTime?: Date | null;

		/** Disk State. */
		targetDiskStateForMigration?: DiskListInputElementPropertiesStatus | null;

		/** The target share of migration task. */
		targetShare?: string | null;
	}
	export interface DiskMigrationJobs_GetReturnPropertiesSubtasksPropertiesFormProperties {

		/** The id of disk. */
		diskId: FormControl<string | null | undefined>,

		/** The task end time. */
		endTime: FormControl<Date | null | undefined>,

		/** Migration child task status. */
		migrationSubtaskStatus: FormControl<DiskMigrationJobPropertiesSubtasksPropertiesMigrationSubtaskStatus | null | undefined>,

		/** The reason of task failure. */
		reason: FormControl<string | null | undefined>,

		/** The source share of migration task. */
		sourceShare: FormControl<string | null | undefined>,

		/** The task start time. */
		startTime: FormControl<Date | null | undefined>,

		/** Disk State. */
		targetDiskStateForMigration: FormControl<DiskListInputElementPropertiesStatus | null | undefined>,

		/** The target share of migration task. */
		targetShare: FormControl<string | null | undefined>,
	}
	export function CreateDiskMigrationJobs_GetReturnPropertiesSubtasksPropertiesFormGroup() {
		return new FormGroup<DiskMigrationJobs_GetReturnPropertiesSubtasksPropertiesFormProperties>({
			diskId: new FormControl<string | null | undefined>(undefined),
			endTime: new FormControl<Date | null | undefined>(undefined),
			migrationSubtaskStatus: new FormControl<DiskMigrationJobPropertiesSubtasksPropertiesMigrationSubtaskStatus | null | undefined>(undefined),
			reason: new FormControl<string | null | undefined>(undefined),
			sourceShare: new FormControl<string | null | undefined>(undefined),
			startTime: new FormControl<Date | null | undefined>(undefined),
			targetDiskStateForMigration: new FormControl<DiskListInputElementPropertiesStatus | null | undefined>(undefined),
			targetShare: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DiskMigrationJobs_CreatePutBody {

		/** Managed disk properties. */
		properties?: DiskMigrationJobs_CreatePutBodyProperties;
	}
	export interface DiskMigrationJobs_CreatePutBodyFormProperties {
	}
	export function CreateDiskMigrationJobs_CreatePutBodyFormGroup() {
		return new FormGroup<DiskMigrationJobs_CreatePutBodyFormProperties>({
		});

	}

	export interface DiskMigrationJobs_CreatePutBodyProperties {

		/** The actual size of disk in GB. */
		actualSizeGB?: number | null;

		/** The disk id. */
		diskId?: string | null;

		/** Disk Sku. */
		diskSku?: DiskListInputElementPropertiesDiskSku | null;

		/** Disk resource type. */
		diskType?: DiskListInputElementPropertiesDiskType | null;

		/** Compute resource Uri which owns this disk. */
		managedBy?: string | null;

		/** The provision size of disk in GB. */
		provisionSizeGB?: number | null;

		/** The disk share path. */
		sharePath?: string | null;

		/** Disk State. */
		status?: DiskListInputElementPropertiesStatus | null;

		/** The disk resource Uri from user view. */
		userResourceId?: string | null;
	}
	export interface DiskMigrationJobs_CreatePutBodyPropertiesFormProperties {

		/** The actual size of disk in GB. */
		actualSizeGB: FormControl<number | null | undefined>,

		/** The disk id. */
		diskId: FormControl<string | null | undefined>,

		/** Disk Sku. */
		diskSku: FormControl<DiskListInputElementPropertiesDiskSku | null | undefined>,

		/** Disk resource type. */
		diskType: FormControl<DiskListInputElementPropertiesDiskType | null | undefined>,

		/** Compute resource Uri which owns this disk. */
		managedBy: FormControl<string | null | undefined>,

		/** The provision size of disk in GB. */
		provisionSizeGB: FormControl<number | null | undefined>,

		/** The disk share path. */
		sharePath: FormControl<string | null | undefined>,

		/** Disk State. */
		status: FormControl<DiskListInputElementPropertiesStatus | null | undefined>,

		/** The disk resource Uri from user view. */
		userResourceId: FormControl<string | null | undefined>,
	}
	export function CreateDiskMigrationJobs_CreatePutBodyPropertiesFormGroup() {
		return new FormGroup<DiskMigrationJobs_CreatePutBodyPropertiesFormProperties>({
			actualSizeGB: new FormControl<number | null | undefined>(undefined),
			diskId: new FormControl<string | null | undefined>(undefined),
			diskSku: new FormControl<DiskListInputElementPropertiesDiskSku | null | undefined>(undefined),
			diskType: new FormControl<DiskListInputElementPropertiesDiskType | null | undefined>(undefined),
			managedBy: new FormControl<string | null | undefined>(undefined),
			provisionSizeGB: new FormControl<number | null | undefined>(undefined),
			sharePath: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<DiskListInputElementPropertiesStatus | null | undefined>(undefined),
			userResourceId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DiskMigrationJobs_CreateReturn {

		/** Disk migration job properties. */
		properties?: DiskMigrationJobs_CreateReturnProperties;
	}
	export interface DiskMigrationJobs_CreateReturnFormProperties {
	}
	export function CreateDiskMigrationJobs_CreateReturnFormGroup() {
		return new FormGroup<DiskMigrationJobs_CreateReturnFormProperties>({
		});

	}

	export interface DiskMigrationJobs_CreateReturnProperties {

		/** The job creation time. */
		creationTime?: Date | null;

		/** The job end time. */
		endTime?: Date | null;

		/** The disk migration id. */
		migrationId?: string | null;

		/** The job start time. */
		startTime?: Date | null;

		/** Migration job status. */
		status?: DiskMigrationJobPropertiesStatus | null;

		/** List of disk migration tasks. */
		DiskMigrationJobs_CreateReturnPropertiesSubtasks?: Array<DiskMigrationJobs_CreateReturnPropertiesSubtasks>;

		/** The target share of migration job. */
		targetShare?: string | null;
	}
	export interface DiskMigrationJobs_CreateReturnPropertiesFormProperties {

		/** The job creation time. */
		creationTime: FormControl<Date | null | undefined>,

		/** The job end time. */
		endTime: FormControl<Date | null | undefined>,

		/** The disk migration id. */
		migrationId: FormControl<string | null | undefined>,

		/** The job start time. */
		startTime: FormControl<Date | null | undefined>,

		/** Migration job status. */
		status: FormControl<DiskMigrationJobPropertiesStatus | null | undefined>,

		/** The target share of migration job. */
		targetShare: FormControl<string | null | undefined>,
	}
	export function CreateDiskMigrationJobs_CreateReturnPropertiesFormGroup() {
		return new FormGroup<DiskMigrationJobs_CreateReturnPropertiesFormProperties>({
			creationTime: new FormControl<Date | null | undefined>(undefined),
			endTime: new FormControl<Date | null | undefined>(undefined),
			migrationId: new FormControl<string | null | undefined>(undefined),
			startTime: new FormControl<Date | null | undefined>(undefined),
			status: new FormControl<DiskMigrationJobPropertiesStatus | null | undefined>(undefined),
			targetShare: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DiskMigrationJobs_CreateReturnPropertiesSubtasks {

		/** The id of migration child task. */
		migrationSubTaskId?: string | null;

		/** Disk migration child task properties. */
		properties?: DiskMigrationJobs_CreateReturnPropertiesSubtasksProperties;
	}
	export interface DiskMigrationJobs_CreateReturnPropertiesSubtasksFormProperties {

		/** The id of migration child task. */
		migrationSubTaskId: FormControl<string | null | undefined>,
	}
	export function CreateDiskMigrationJobs_CreateReturnPropertiesSubtasksFormGroup() {
		return new FormGroup<DiskMigrationJobs_CreateReturnPropertiesSubtasksFormProperties>({
			migrationSubTaskId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DiskMigrationJobs_CreateReturnPropertiesSubtasksProperties {

		/** The id of disk. */
		diskId?: string | null;

		/** The task end time. */
		endTime?: Date | null;

		/** Migration child task status. */
		migrationSubtaskStatus?: DiskMigrationJobPropertiesSubtasksPropertiesMigrationSubtaskStatus | null;

		/** The reason of task failure. */
		reason?: string | null;

		/** The source share of migration task. */
		sourceShare?: string | null;

		/** The task start time. */
		startTime?: Date | null;

		/** Disk State. */
		targetDiskStateForMigration?: DiskListInputElementPropertiesStatus | null;

		/** The target share of migration task. */
		targetShare?: string | null;
	}
	export interface DiskMigrationJobs_CreateReturnPropertiesSubtasksPropertiesFormProperties {

		/** The id of disk. */
		diskId: FormControl<string | null | undefined>,

		/** The task end time. */
		endTime: FormControl<Date | null | undefined>,

		/** Migration child task status. */
		migrationSubtaskStatus: FormControl<DiskMigrationJobPropertiesSubtasksPropertiesMigrationSubtaskStatus | null | undefined>,

		/** The reason of task failure. */
		reason: FormControl<string | null | undefined>,

		/** The source share of migration task. */
		sourceShare: FormControl<string | null | undefined>,

		/** The task start time. */
		startTime: FormControl<Date | null | undefined>,

		/** Disk State. */
		targetDiskStateForMigration: FormControl<DiskListInputElementPropertiesStatus | null | undefined>,

		/** The target share of migration task. */
		targetShare: FormControl<string | null | undefined>,
	}
	export function CreateDiskMigrationJobs_CreateReturnPropertiesSubtasksPropertiesFormGroup() {
		return new FormGroup<DiskMigrationJobs_CreateReturnPropertiesSubtasksPropertiesFormProperties>({
			diskId: new FormControl<string | null | undefined>(undefined),
			endTime: new FormControl<Date | null | undefined>(undefined),
			migrationSubtaskStatus: new FormControl<DiskMigrationJobPropertiesSubtasksPropertiesMigrationSubtaskStatus | null | undefined>(undefined),
			reason: new FormControl<string | null | undefined>(undefined),
			sourceShare: new FormControl<string | null | undefined>(undefined),
			startTime: new FormControl<Date | null | undefined>(undefined),
			targetDiskStateForMigration: new FormControl<DiskListInputElementPropertiesStatus | null | undefined>(undefined),
			targetShare: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DiskMigrationJobs_CancelReturn {

		/** Disk migration job properties. */
		properties?: DiskMigrationJobs_CancelReturnProperties;
	}
	export interface DiskMigrationJobs_CancelReturnFormProperties {
	}
	export function CreateDiskMigrationJobs_CancelReturnFormGroup() {
		return new FormGroup<DiskMigrationJobs_CancelReturnFormProperties>({
		});

	}

	export interface DiskMigrationJobs_CancelReturnProperties {

		/** The job creation time. */
		creationTime?: Date | null;

		/** The job end time. */
		endTime?: Date | null;

		/** The disk migration id. */
		migrationId?: string | null;

		/** The job start time. */
		startTime?: Date | null;

		/** Migration job status. */
		status?: DiskMigrationJobPropertiesStatus | null;

		/** List of disk migration tasks. */
		DiskMigrationJobs_CancelReturnPropertiesSubtasks?: Array<DiskMigrationJobs_CancelReturnPropertiesSubtasks>;

		/** The target share of migration job. */
		targetShare?: string | null;
	}
	export interface DiskMigrationJobs_CancelReturnPropertiesFormProperties {

		/** The job creation time. */
		creationTime: FormControl<Date | null | undefined>,

		/** The job end time. */
		endTime: FormControl<Date | null | undefined>,

		/** The disk migration id. */
		migrationId: FormControl<string | null | undefined>,

		/** The job start time. */
		startTime: FormControl<Date | null | undefined>,

		/** Migration job status. */
		status: FormControl<DiskMigrationJobPropertiesStatus | null | undefined>,

		/** The target share of migration job. */
		targetShare: FormControl<string | null | undefined>,
	}
	export function CreateDiskMigrationJobs_CancelReturnPropertiesFormGroup() {
		return new FormGroup<DiskMigrationJobs_CancelReturnPropertiesFormProperties>({
			creationTime: new FormControl<Date | null | undefined>(undefined),
			endTime: new FormControl<Date | null | undefined>(undefined),
			migrationId: new FormControl<string | null | undefined>(undefined),
			startTime: new FormControl<Date | null | undefined>(undefined),
			status: new FormControl<DiskMigrationJobPropertiesStatus | null | undefined>(undefined),
			targetShare: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DiskMigrationJobs_CancelReturnPropertiesSubtasks {

		/** The id of migration child task. */
		migrationSubTaskId?: string | null;

		/** Disk migration child task properties. */
		properties?: DiskMigrationJobs_CancelReturnPropertiesSubtasksProperties;
	}
	export interface DiskMigrationJobs_CancelReturnPropertiesSubtasksFormProperties {

		/** The id of migration child task. */
		migrationSubTaskId: FormControl<string | null | undefined>,
	}
	export function CreateDiskMigrationJobs_CancelReturnPropertiesSubtasksFormGroup() {
		return new FormGroup<DiskMigrationJobs_CancelReturnPropertiesSubtasksFormProperties>({
			migrationSubTaskId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DiskMigrationJobs_CancelReturnPropertiesSubtasksProperties {

		/** The id of disk. */
		diskId?: string | null;

		/** The task end time. */
		endTime?: Date | null;

		/** Migration child task status. */
		migrationSubtaskStatus?: DiskMigrationJobPropertiesSubtasksPropertiesMigrationSubtaskStatus | null;

		/** The reason of task failure. */
		reason?: string | null;

		/** The source share of migration task. */
		sourceShare?: string | null;

		/** The task start time. */
		startTime?: Date | null;

		/** Disk State. */
		targetDiskStateForMigration?: DiskListInputElementPropertiesStatus | null;

		/** The target share of migration task. */
		targetShare?: string | null;
	}
	export interface DiskMigrationJobs_CancelReturnPropertiesSubtasksPropertiesFormProperties {

		/** The id of disk. */
		diskId: FormControl<string | null | undefined>,

		/** The task end time. */
		endTime: FormControl<Date | null | undefined>,

		/** Migration child task status. */
		migrationSubtaskStatus: FormControl<DiskMigrationJobPropertiesSubtasksPropertiesMigrationSubtaskStatus | null | undefined>,

		/** The reason of task failure. */
		reason: FormControl<string | null | undefined>,

		/** The source share of migration task. */
		sourceShare: FormControl<string | null | undefined>,

		/** The task start time. */
		startTime: FormControl<Date | null | undefined>,

		/** Disk State. */
		targetDiskStateForMigration: FormControl<DiskListInputElementPropertiesStatus | null | undefined>,

		/** The target share of migration task. */
		targetShare: FormControl<string | null | undefined>,
	}
	export function CreateDiskMigrationJobs_CancelReturnPropertiesSubtasksPropertiesFormGroup() {
		return new FormGroup<DiskMigrationJobs_CancelReturnPropertiesSubtasksPropertiesFormProperties>({
			diskId: new FormControl<string | null | undefined>(undefined),
			endTime: new FormControl<Date | null | undefined>(undefined),
			migrationSubtaskStatus: new FormControl<DiskMigrationJobPropertiesSubtasksPropertiesMigrationSubtaskStatus | null | undefined>(undefined),
			reason: new FormControl<string | null | undefined>(undefined),
			sourceShare: new FormControl<string | null | undefined>(undefined),
			startTime: new FormControl<Date | null | undefined>(undefined),
			targetDiskStateForMigration: new FormControl<DiskListInputElementPropertiesStatus | null | undefined>(undefined),
			targetShare: new FormControl<string | null | undefined>(undefined),
		});

	}

}

