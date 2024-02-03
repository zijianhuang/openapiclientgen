import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** Disk Sku. */
	export enum AccountType { Standard_LRS = 'Standard_LRS', Standard_ZRS = 'Standard_ZRS', Standard_GRS = 'Standard_GRS', Standard_RAGRS = 'Standard_RAGRS', Premium_LRS = 'Premium_LRS', StandardSSD_LRS = 'StandardSSD_LRS', UltraSSD_LRS = 'UltraSSD_LRS' }


	/** Managed Disk. */
	export interface Disk {

		/** Managed disk properties. */
		properties?: DiskProperties;
	}

	/** Managed Disk. */
	export interface DiskFormProperties {
	}
	export function CreateDiskFormGroup() {
		return new FormGroup<DiskFormProperties>({
		});

	}

	export interface DiskProperties {

		/** The actual size of disk in GB. */
		actualSizeGB?: number | null;

		/** The disk id. */
		diskId?: string | null;

		/** Disk Sku. */
		diskSku?: AccountType | null;

		/** Disk resource type. */
		diskType?: DiskPropertiesDiskType | null;

		/** Compute resource Uri which owns this disk. */
		managedBy?: string | null;

		/** The provision size of disk in GB. */
		provisionSizeGB?: number | null;

		/** The disk share path. */
		sharePath?: string | null;

		/** Disk State. */
		status?: DiskPropertiesStatus | null;

		/** The disk resource Uri from user view. */
		userResourceId?: string | null;
	}
	export interface DiskPropertiesFormProperties {

		/** The actual size of disk in GB. */
		actualSizeGB: FormControl<number | null | undefined>,

		/** The disk id. */
		diskId: FormControl<string | null | undefined>,

		/** Disk Sku. */
		diskSku: FormControl<AccountType | null | undefined>,

		/** Disk resource type. */
		diskType: FormControl<DiskPropertiesDiskType | null | undefined>,

		/** Compute resource Uri which owns this disk. */
		managedBy: FormControl<string | null | undefined>,

		/** The provision size of disk in GB. */
		provisionSizeGB: FormControl<number | null | undefined>,

		/** The disk share path. */
		sharePath: FormControl<string | null | undefined>,

		/** Disk State. */
		status: FormControl<DiskPropertiesStatus | null | undefined>,

		/** The disk resource Uri from user view. */
		userResourceId: FormControl<string | null | undefined>,
	}
	export function CreateDiskPropertiesFormGroup() {
		return new FormGroup<DiskPropertiesFormProperties>({
			actualSizeGB: new FormControl<number | null | undefined>(undefined),
			diskId: new FormControl<string | null | undefined>(undefined),
			diskSku: new FormControl<AccountType | null | undefined>(undefined),
			diskType: new FormControl<DiskPropertiesDiskType | null | undefined>(undefined),
			managedBy: new FormControl<string | null | undefined>(undefined),
			provisionSizeGB: new FormControl<number | null | undefined>(undefined),
			sharePath: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<DiskPropertiesStatus | null | undefined>(undefined),
			userResourceId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum DiskPropertiesDiskType { Undefined = 'Undefined', Disk = 'Disk', Snapshot = 'Snapshot', RestorePoint = 'RestorePoint', ManagedBlob = 'ManagedBlob' }

	export enum DiskPropertiesStatus { Undefined = 'Undefined', Unattached = 'Unattached', Attached = 'Attached', Reserved = 'Reserved', ActiveSAS = 'ActiveSAS', Unknown = 'Unknown', All = 'All', Recommended = 'Recommended', OfflineMigration = 'OfflineMigration', OnlineMigration = 'OnlineMigration' }


	/** List of disks. */
	export interface DiskList {

		/** URI to the next page. */
		nextLink?: string | null;

		/** List of disks. */
		DiskListValue?: Array<DiskListValue>;
	}

	/** List of disks. */
	export interface DiskListFormProperties {

		/** URI to the next page. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateDiskListFormGroup() {
		return new FormGroup<DiskListFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DiskListValue {

		/** Managed disk properties. */
		properties?: DiskListValueProperties;
	}
	export interface DiskListValueFormProperties {
	}
	export function CreateDiskListValueFormGroup() {
		return new FormGroup<DiskListValueFormProperties>({
		});

	}

	export interface DiskListValueProperties {

		/** The actual size of disk in GB. */
		actualSizeGB?: number | null;

		/** The disk id. */
		diskId?: string | null;

		/** Disk Sku. */
		diskSku?: AccountType | null;

		/** Disk resource type. */
		diskType?: DiskPropertiesDiskType | null;

		/** Compute resource Uri which owns this disk. */
		managedBy?: string | null;

		/** The provision size of disk in GB. */
		provisionSizeGB?: number | null;

		/** The disk share path. */
		sharePath?: string | null;

		/** Disk State. */
		status?: DiskPropertiesStatus | null;

		/** The disk resource Uri from user view. */
		userResourceId?: string | null;
	}
	export interface DiskListValuePropertiesFormProperties {

		/** The actual size of disk in GB. */
		actualSizeGB: FormControl<number | null | undefined>,

		/** The disk id. */
		diskId: FormControl<string | null | undefined>,

		/** Disk Sku. */
		diskSku: FormControl<AccountType | null | undefined>,

		/** Disk resource type. */
		diskType: FormControl<DiskPropertiesDiskType | null | undefined>,

		/** Compute resource Uri which owns this disk. */
		managedBy: FormControl<string | null | undefined>,

		/** The provision size of disk in GB. */
		provisionSizeGB: FormControl<number | null | undefined>,

		/** The disk share path. */
		sharePath: FormControl<string | null | undefined>,

		/** Disk State. */
		status: FormControl<DiskPropertiesStatus | null | undefined>,

		/** The disk resource Uri from user view. */
		userResourceId: FormControl<string | null | undefined>,
	}
	export function CreateDiskListValuePropertiesFormGroup() {
		return new FormGroup<DiskListValuePropertiesFormProperties>({
			actualSizeGB: new FormControl<number | null | undefined>(undefined),
			diskId: new FormControl<string | null | undefined>(undefined),
			diskSku: new FormControl<AccountType | null | undefined>(undefined),
			diskType: new FormControl<DiskPropertiesDiskType | null | undefined>(undefined),
			managedBy: new FormControl<string | null | undefined>(undefined),
			provisionSizeGB: new FormControl<number | null | undefined>(undefined),
			sharePath: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<DiskPropertiesStatus | null | undefined>(undefined),
			userResourceId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Disk resource type. */
	export enum DiskResourceType { Undefined = 'Undefined', Disk = 'Disk', Snapshot = 'Snapshot', RestorePoint = 'RestorePoint', ManagedBlob = 'ManagedBlob' }


	/** Disk State. */
	export enum DiskState { Undefined = 'Undefined', Unattached = 'Unattached', Attached = 'Attached', Reserved = 'Reserved', ActiveSAS = 'ActiveSAS', Unknown = 'Unknown', All = 'All', Recommended = 'Recommended', OfflineMigration = 'OfflineMigration', OnlineMigration = 'OnlineMigration' }

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Returns a list of disks.
		 * Get subscriptions/{subscriptionId}/providers/Microsoft.Compute.Admin/locations/{location}/disks
		 * @param {string} subscriptionId Subscription credentials that uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} location Location of the resource.
		 * @param {string} userSubscriptionId User Subscription Id which the resource belongs to.
		 * @param {string} status The parameters of disk state.
		 * @param {string} sharePath The source share which the resource belongs to.
		 * @param {number} count The maximum number of disks to return.
		 * @param {number} start The start index of disks in query.
		 * @param {string} api_version Client API Version.
		 * @return {Disks_ListReturn} OK -- The list of disks has been returned.
		 */
		Disks_List(subscriptionId: string, location: string, userSubscriptionId: string | null | undefined, status: string | null | undefined, sharePath: string | null | undefined, count: number | null | undefined, start: number | null | undefined, api_version: string): Observable<Disks_ListReturn> {
			return this.http.get<Disks_ListReturn>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/providers/Microsoft.Compute.Admin/locations/' + (location == null ? '' : encodeURIComponent(location)) + '/disks&userSubscriptionId=' + (userSubscriptionId == null ? '' : encodeURIComponent(userSubscriptionId)) + '&status=' + (status == null ? '' : encodeURIComponent(status)) + '&sharePath=' + (sharePath == null ? '' : encodeURIComponent(sharePath)) + '&count=' + count + '&start=' + start + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Returns the disk.
		 * Get subscriptions/{subscriptionId}/providers/Microsoft.Compute.Admin/locations/{location}/disks/{DiskId}
		 * @param {string} subscriptionId Subscription credentials that uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} location Location of the resource.
		 * @param {string} DiskId The disk guid as identity.
		 * @param {string} api_version Client API Version.
		 * @return {Disks_GetReturn} OK -- The disk has been returned.
		 */
		Disks_Get(subscriptionId: string, location: string, DiskId: string, api_version: string): Observable<Disks_GetReturn> {
			return this.http.get<Disks_GetReturn>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/providers/Microsoft.Compute.Admin/locations/' + (location == null ? '' : encodeURIComponent(location)) + '/disks/' + (DiskId == null ? '' : encodeURIComponent(DiskId)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}
	}

	export interface Disks_ListReturn {

		/** URI to the next page. */
		nextLink?: string | null;

		/** List of disks. */
		Disks_ListReturnValue?: Array<Disks_ListReturnValue>;
	}
	export interface Disks_ListReturnFormProperties {

		/** URI to the next page. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateDisks_ListReturnFormGroup() {
		return new FormGroup<Disks_ListReturnFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Disks_ListReturnValue {

		/** Managed disk properties. */
		properties?: Disks_ListReturnValueProperties;
	}
	export interface Disks_ListReturnValueFormProperties {
	}
	export function CreateDisks_ListReturnValueFormGroup() {
		return new FormGroup<Disks_ListReturnValueFormProperties>({
		});

	}

	export interface Disks_ListReturnValueProperties {

		/** The actual size of disk in GB. */
		actualSizeGB?: number | null;

		/** The disk id. */
		diskId?: string | null;

		/** Disk Sku. */
		diskSku?: AccountType | null;

		/** Disk resource type. */
		diskType?: DiskPropertiesDiskType | null;

		/** Compute resource Uri which owns this disk. */
		managedBy?: string | null;

		/** The provision size of disk in GB. */
		provisionSizeGB?: number | null;

		/** The disk share path. */
		sharePath?: string | null;

		/** Disk State. */
		status?: DiskPropertiesStatus | null;

		/** The disk resource Uri from user view. */
		userResourceId?: string | null;
	}
	export interface Disks_ListReturnValuePropertiesFormProperties {

		/** The actual size of disk in GB. */
		actualSizeGB: FormControl<number | null | undefined>,

		/** The disk id. */
		diskId: FormControl<string | null | undefined>,

		/** Disk Sku. */
		diskSku: FormControl<AccountType | null | undefined>,

		/** Disk resource type. */
		diskType: FormControl<DiskPropertiesDiskType | null | undefined>,

		/** Compute resource Uri which owns this disk. */
		managedBy: FormControl<string | null | undefined>,

		/** The provision size of disk in GB. */
		provisionSizeGB: FormControl<number | null | undefined>,

		/** The disk share path. */
		sharePath: FormControl<string | null | undefined>,

		/** Disk State. */
		status: FormControl<DiskPropertiesStatus | null | undefined>,

		/** The disk resource Uri from user view. */
		userResourceId: FormControl<string | null | undefined>,
	}
	export function CreateDisks_ListReturnValuePropertiesFormGroup() {
		return new FormGroup<Disks_ListReturnValuePropertiesFormProperties>({
			actualSizeGB: new FormControl<number | null | undefined>(undefined),
			diskId: new FormControl<string | null | undefined>(undefined),
			diskSku: new FormControl<AccountType | null | undefined>(undefined),
			diskType: new FormControl<DiskPropertiesDiskType | null | undefined>(undefined),
			managedBy: new FormControl<string | null | undefined>(undefined),
			provisionSizeGB: new FormControl<number | null | undefined>(undefined),
			sharePath: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<DiskPropertiesStatus | null | undefined>(undefined),
			userResourceId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Disks_GetReturn {

		/** Managed disk properties. */
		properties?: Disks_GetReturnProperties;
	}
	export interface Disks_GetReturnFormProperties {
	}
	export function CreateDisks_GetReturnFormGroup() {
		return new FormGroup<Disks_GetReturnFormProperties>({
		});

	}

	export interface Disks_GetReturnProperties {

		/** The actual size of disk in GB. */
		actualSizeGB?: number | null;

		/** The disk id. */
		diskId?: string | null;

		/** Disk Sku. */
		diskSku?: AccountType | null;

		/** Disk resource type. */
		diskType?: DiskPropertiesDiskType | null;

		/** Compute resource Uri which owns this disk. */
		managedBy?: string | null;

		/** The provision size of disk in GB. */
		provisionSizeGB?: number | null;

		/** The disk share path. */
		sharePath?: string | null;

		/** Disk State. */
		status?: DiskPropertiesStatus | null;

		/** The disk resource Uri from user view. */
		userResourceId?: string | null;
	}
	export interface Disks_GetReturnPropertiesFormProperties {

		/** The actual size of disk in GB. */
		actualSizeGB: FormControl<number | null | undefined>,

		/** The disk id. */
		diskId: FormControl<string | null | undefined>,

		/** Disk Sku. */
		diskSku: FormControl<AccountType | null | undefined>,

		/** Disk resource type. */
		diskType: FormControl<DiskPropertiesDiskType | null | undefined>,

		/** Compute resource Uri which owns this disk. */
		managedBy: FormControl<string | null | undefined>,

		/** The provision size of disk in GB. */
		provisionSizeGB: FormControl<number | null | undefined>,

		/** The disk share path. */
		sharePath: FormControl<string | null | undefined>,

		/** Disk State. */
		status: FormControl<DiskPropertiesStatus | null | undefined>,

		/** The disk resource Uri from user view. */
		userResourceId: FormControl<string | null | undefined>,
	}
	export function CreateDisks_GetReturnPropertiesFormGroup() {
		return new FormGroup<Disks_GetReturnPropertiesFormProperties>({
			actualSizeGB: new FormControl<number | null | undefined>(undefined),
			diskId: new FormControl<string | null | undefined>(undefined),
			diskSku: new FormControl<AccountType | null | undefined>(undefined),
			diskType: new FormControl<DiskPropertiesDiskType | null | undefined>(undefined),
			managedBy: new FormControl<string | null | undefined>(undefined),
			provisionSizeGB: new FormControl<number | null | undefined>(undefined),
			sharePath: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<DiskPropertiesStatus | null | undefined>(undefined),
			userResourceId: new FormControl<string | null | undefined>(undefined),
		});

	}

}

