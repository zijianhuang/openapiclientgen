import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface BlobContainer {
	}
	export interface BlobContainerFormProperties {
	}
	export function CreateBlobContainerFormGroup() {
		return new FormGroup<BlobContainerFormProperties>({
		});

	}

	export interface BlobServiceItems {

		/** List of blob services returned. */
		value?: Array<BlobServiceProperties>;
	}
	export interface BlobServiceItemsFormProperties {
	}
	export function CreateBlobServiceItemsFormGroup() {
		return new FormGroup<BlobServiceItemsFormProperties>({
		});

	}

	export interface BlobServiceProperties {
	}
	export interface BlobServicePropertiesFormProperties {
	}
	export function CreateBlobServicePropertiesFormGroup() {
		return new FormGroup<BlobServicePropertiesFormProperties>({
		});

	}


	/** The blob service properties for change feed events. */
	export interface ChangeFeed {

		/** Indicates whether change feed event logging is enabled for the Blob service. */
		enabled?: boolean | null;
	}

	/** The blob service properties for change feed events. */
	export interface ChangeFeedFormProperties {

		/** Indicates whether change feed event logging is enabled for the Blob service. */
		enabled: FormControl<boolean | null | undefined>,
	}
	export function CreateChangeFeedFormGroup() {
		return new FormGroup<ChangeFeedFormProperties>({
			enabled: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** The properties of a container. */
	export interface ContainerProperties {

		/** The hasImmutabilityPolicy public property is set to true by SRP if ImmutabilityPolicy has been created for this container. The hasImmutabilityPolicy public property is set to false by SRP if ImmutabilityPolicy has not been created for this container. */
		hasImmutabilityPolicy?: boolean | null;

		/** The hasLegalHold public property is set to true by SRP if there are at least one existing tag. The hasLegalHold public property is set to false by SRP if all existing legal hold tags are cleared out. There can be a maximum of 1000 blob containers with hasLegalHold=true for a given account. */
		hasLegalHold?: boolean | null;

		/** The properties of an ImmutabilityPolicy of a blob container. */
		immutabilityPolicy?: ImmutabilityPolicyProperties;

		/** Returns the date and time the container was last modified. */
		lastModifiedTime?: Date | null;

		/** Specifies whether the lease on a container is of infinite or fixed duration, only when the container is leased. */
		leaseDuration?: ContainerPropertiesLeaseDuration | null;

		/** Lease state of the container. */
		leaseState?: ContainerPropertiesLeaseState | null;

		/** The lease status of the container. */
		leaseStatus?: ContainerPropertiesLeaseStatus | null;

		/** The LegalHold property of a blob container. */
		legalHold?: LegalHoldProperties;

		/** A name-value pair to associate with the container as metadata. */
		metadata?: {[id: string]: string };

		/** Specifies whether data in the container may be accessed publicly and the level of access. */
		publicAccess?: ContainerPropertiesPublicAccess | null;
	}

	/** The properties of a container. */
	export interface ContainerPropertiesFormProperties {

		/** The hasImmutabilityPolicy public property is set to true by SRP if ImmutabilityPolicy has been created for this container. The hasImmutabilityPolicy public property is set to false by SRP if ImmutabilityPolicy has not been created for this container. */
		hasImmutabilityPolicy: FormControl<boolean | null | undefined>,

		/** The hasLegalHold public property is set to true by SRP if there are at least one existing tag. The hasLegalHold public property is set to false by SRP if all existing legal hold tags are cleared out. There can be a maximum of 1000 blob containers with hasLegalHold=true for a given account. */
		hasLegalHold: FormControl<boolean | null | undefined>,

		/** Returns the date and time the container was last modified. */
		lastModifiedTime: FormControl<Date | null | undefined>,

		/** Specifies whether the lease on a container is of infinite or fixed duration, only when the container is leased. */
		leaseDuration: FormControl<ContainerPropertiesLeaseDuration | null | undefined>,

		/** Lease state of the container. */
		leaseState: FormControl<ContainerPropertiesLeaseState | null | undefined>,

		/** The lease status of the container. */
		leaseStatus: FormControl<ContainerPropertiesLeaseStatus | null | undefined>,

		/** A name-value pair to associate with the container as metadata. */
		metadata: FormControl<{[id: string]: string } | null | undefined>,

		/** Specifies whether data in the container may be accessed publicly and the level of access. */
		publicAccess: FormControl<ContainerPropertiesPublicAccess | null | undefined>,
	}
	export function CreateContainerPropertiesFormGroup() {
		return new FormGroup<ContainerPropertiesFormProperties>({
			hasImmutabilityPolicy: new FormControl<boolean | null | undefined>(undefined),
			hasLegalHold: new FormControl<boolean | null | undefined>(undefined),
			lastModifiedTime: new FormControl<Date | null | undefined>(undefined),
			leaseDuration: new FormControl<ContainerPropertiesLeaseDuration | null | undefined>(undefined),
			leaseState: new FormControl<ContainerPropertiesLeaseState | null | undefined>(undefined),
			leaseStatus: new FormControl<ContainerPropertiesLeaseStatus | null | undefined>(undefined),
			metadata: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			publicAccess: new FormControl<ContainerPropertiesPublicAccess | null | undefined>(undefined),
		});

	}

	export enum ContainerPropertiesLeaseDuration { Infinite = 'Infinite', Fixed = 'Fixed' }

	export enum ContainerPropertiesLeaseState { Available = 'Available', Leased = 'Leased', Expired = 'Expired', Breaking = 'Breaking', Broken = 'Broken' }

	export enum ContainerPropertiesLeaseStatus { Locked = 'Locked', Unlocked = 'Unlocked' }

	export enum ContainerPropertiesPublicAccess { Container = 'Container', Blob = 'Blob', None = 'None' }

	export interface ImmutabilityPolicy {
	}
	export interface ImmutabilityPolicyFormProperties {
	}
	export function CreateImmutabilityPolicyFormGroup() {
		return new FormGroup<ImmutabilityPolicyFormProperties>({
		});

	}


	/** The properties of an ImmutabilityPolicy of a blob container. */
	export interface ImmutabilityPolicyProperties {

		/** ImmutabilityPolicy Etag. */
		etag?: string | null;

		/** The properties of an ImmutabilityPolicy of a blob container. */
		properties?: ImmutabilityPolicyProperty;

		/** The ImmutabilityPolicy update history of the blob container. */
		updateHistory?: Array<UpdateHistoryProperty>;
	}

	/** The properties of an ImmutabilityPolicy of a blob container. */
	export interface ImmutabilityPolicyPropertiesFormProperties {

		/** ImmutabilityPolicy Etag. */
		etag: FormControl<string | null | undefined>,
	}
	export function CreateImmutabilityPolicyPropertiesFormGroup() {
		return new FormGroup<ImmutabilityPolicyPropertiesFormProperties>({
			etag: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An update history of the ImmutabilityPolicy of a blob container. */
	export interface UpdateHistoryProperty {

		/**
		 * The immutability period for the blobs in the container since the policy creation, in days.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		immutabilityPeriodSinceCreationInDays?: number | null;

		/** Returns the Object ID of the user who updated the ImmutabilityPolicy. */
		objectIdentifier?: string | null;

		/** Returns the Tenant ID that issued the token for the user who updated the ImmutabilityPolicy. */
		tenantId?: string | null;

		/** Returns the date and time the ImmutabilityPolicy was updated. */
		timestamp?: Date | null;

		/** The ImmutabilityPolicy update type of a blob container, possible values include: put, lock and extend. */
		update?: UpdateHistoryPropertyUpdate | null;

		/** Returns the User Principal Name of the user who updated the ImmutabilityPolicy. */
		upn?: string | null;
	}

	/** An update history of the ImmutabilityPolicy of a blob container. */
	export interface UpdateHistoryPropertyFormProperties {

		/**
		 * The immutability period for the blobs in the container since the policy creation, in days.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		immutabilityPeriodSinceCreationInDays: FormControl<number | null | undefined>,

		/** Returns the Object ID of the user who updated the ImmutabilityPolicy. */
		objectIdentifier: FormControl<string | null | undefined>,

		/** Returns the Tenant ID that issued the token for the user who updated the ImmutabilityPolicy. */
		tenantId: FormControl<string | null | undefined>,

		/** Returns the date and time the ImmutabilityPolicy was updated. */
		timestamp: FormControl<Date | null | undefined>,

		/** The ImmutabilityPolicy update type of a blob container, possible values include: put, lock and extend. */
		update: FormControl<UpdateHistoryPropertyUpdate | null | undefined>,

		/** Returns the User Principal Name of the user who updated the ImmutabilityPolicy. */
		upn: FormControl<string | null | undefined>,
	}
	export function CreateUpdateHistoryPropertyFormGroup() {
		return new FormGroup<UpdateHistoryPropertyFormProperties>({
			immutabilityPeriodSinceCreationInDays: new FormControl<number | null | undefined>(undefined),
			objectIdentifier: new FormControl<string | null | undefined>(undefined),
			tenantId: new FormControl<string | null | undefined>(undefined),
			timestamp: new FormControl<Date | null | undefined>(undefined),
			update: new FormControl<UpdateHistoryPropertyUpdate | null | undefined>(undefined),
			upn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum UpdateHistoryPropertyUpdate { put = 'put', lock = 'lock', extend = 'extend' }


	/** The properties of an ImmutabilityPolicy of a blob container. */
	export interface ImmutabilityPolicyProperty {

		/**
		 * The immutability period for the blobs in the container since the policy creation, in days.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		immutabilityPeriodSinceCreationInDays: number;

		/** The ImmutabilityPolicy state of a blob container, possible values include: Locked and Unlocked. */
		state?: ContainerPropertiesLeaseStatus | null;
	}

	/** The properties of an ImmutabilityPolicy of a blob container. */
	export interface ImmutabilityPolicyPropertyFormProperties {

		/**
		 * The immutability period for the blobs in the container since the policy creation, in days.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		immutabilityPeriodSinceCreationInDays: FormControl<number | null | undefined>,

		/** The ImmutabilityPolicy state of a blob container, possible values include: Locked and Unlocked. */
		state: FormControl<ContainerPropertiesLeaseStatus | null | undefined>,
	}
	export function CreateImmutabilityPolicyPropertyFormGroup() {
		return new FormGroup<ImmutabilityPolicyPropertyFormProperties>({
			immutabilityPeriodSinceCreationInDays: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			state: new FormControl<ContainerPropertiesLeaseStatus | null | undefined>(undefined),
		});

	}


	/** Lease Container request schema. */
	export interface LeaseContainerRequest {

		/**
		 * Specifies the lease action. Can be one of the available actions.
		 * Required
		 */
		action: LeaseContainerRequestAction;

		/**
		 * Optional. For a break action, proposed duration the lease should continue before it is broken, in seconds, between 0 and 60.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		breakPeriod?: number | null;

		/**
		 * Required for acquire. Specifies the duration of the lease, in seconds, or negative one (-1) for a lease that never expires.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		leaseDuration?: number | null;

		/** Identifies the lease. Can be specified in any valid GUID string format. */
		leaseId?: string | null;

		/** Optional for acquire, required for change. Proposed lease ID, in a GUID string format. */
		proposedLeaseId?: string | null;
	}

	/** Lease Container request schema. */
	export interface LeaseContainerRequestFormProperties {

		/**
		 * Specifies the lease action. Can be one of the available actions.
		 * Required
		 */
		action: FormControl<LeaseContainerRequestAction | null | undefined>,

		/**
		 * Optional. For a break action, proposed duration the lease should continue before it is broken, in seconds, between 0 and 60.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		breakPeriod: FormControl<number | null | undefined>,

		/**
		 * Required for acquire. Specifies the duration of the lease, in seconds, or negative one (-1) for a lease that never expires.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		leaseDuration: FormControl<number | null | undefined>,

		/** Identifies the lease. Can be specified in any valid GUID string format. */
		leaseId: FormControl<string | null | undefined>,

		/** Optional for acquire, required for change. Proposed lease ID, in a GUID string format. */
		proposedLeaseId: FormControl<string | null | undefined>,
	}
	export function CreateLeaseContainerRequestFormGroup() {
		return new FormGroup<LeaseContainerRequestFormProperties>({
			action: new FormControl<LeaseContainerRequestAction | null | undefined>(undefined, [Validators.required]),
			breakPeriod: new FormControl<number | null | undefined>(undefined),
			leaseDuration: new FormControl<number | null | undefined>(undefined),
			leaseId: new FormControl<string | null | undefined>(undefined),
			proposedLeaseId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum LeaseContainerRequestAction { Acquire = 'Acquire', Renew = 'Renew', Change = 'Change', Release = 'Release', Break = 'Break' }


	/** Lease Container response schema. */
	export interface LeaseContainerResponse {

		/** Returned unique lease ID that must be included with any request to delete the container, or to renew, change, or release the lease. */
		leaseId?: string | null;

		/** Approximate time remaining in the lease period, in seconds. */
		leaseTimeSeconds?: string | null;
	}

	/** Lease Container response schema. */
	export interface LeaseContainerResponseFormProperties {

		/** Returned unique lease ID that must be included with any request to delete the container, or to renew, change, or release the lease. */
		leaseId: FormControl<string | null | undefined>,

		/** Approximate time remaining in the lease period, in seconds. */
		leaseTimeSeconds: FormControl<string | null | undefined>,
	}
	export function CreateLeaseContainerResponseFormGroup() {
		return new FormGroup<LeaseContainerResponseFormProperties>({
			leaseId: new FormControl<string | null | undefined>(undefined),
			leaseTimeSeconds: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The LegalHold property of a blob container. */
	export interface LegalHold {

		/** The hasLegalHold public property is set to true by SRP if there are at least one existing tag. The hasLegalHold public property is set to false by SRP if all existing legal hold tags are cleared out. There can be a maximum of 1000 blob containers with hasLegalHold=true for a given account. */
		hasLegalHold?: boolean | null;

		/**
		 * Each tag should be 3 to 23 alphanumeric characters and is normalized to lower case at SRP.
		 * Required
		 */
		tags: Array<string>;
	}

	/** The LegalHold property of a blob container. */
	export interface LegalHoldFormProperties {

		/** The hasLegalHold public property is set to true by SRP if there are at least one existing tag. The hasLegalHold public property is set to false by SRP if all existing legal hold tags are cleared out. There can be a maximum of 1000 blob containers with hasLegalHold=true for a given account. */
		hasLegalHold: FormControl<boolean | null | undefined>,
	}
	export function CreateLegalHoldFormGroup() {
		return new FormGroup<LegalHoldFormProperties>({
			hasLegalHold: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** The LegalHold property of a blob container. */
	export interface LegalHoldProperties {

		/** The hasLegalHold public property is set to true by SRP if there are at least one existing tag. The hasLegalHold public property is set to false by SRP if all existing legal hold tags are cleared out. There can be a maximum of 1000 blob containers with hasLegalHold=true for a given account. */
		hasLegalHold?: boolean | null;

		/** The list of LegalHold tags of a blob container. */
		tags?: Array<TagProperty>;
	}

	/** The LegalHold property of a blob container. */
	export interface LegalHoldPropertiesFormProperties {

		/** The hasLegalHold public property is set to true by SRP if there are at least one existing tag. The hasLegalHold public property is set to false by SRP if all existing legal hold tags are cleared out. There can be a maximum of 1000 blob containers with hasLegalHold=true for a given account. */
		hasLegalHold: FormControl<boolean | null | undefined>,
	}
	export function CreateLegalHoldPropertiesFormGroup() {
		return new FormGroup<LegalHoldPropertiesFormProperties>({
			hasLegalHold: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** A tag of the LegalHold of a blob container. */
	export interface TagProperty {

		/** Returns the Object ID of the user who added the tag. */
		objectIdentifier?: string | null;

		/** The tag value. */
		tag?: string | null;

		/** Returns the Tenant ID that issued the token for the user who added the tag. */
		tenantId?: string | null;

		/** Returns the date and time the tag was added. */
		timestamp?: Date | null;

		/** Returns the User Principal Name of the user who added the tag. */
		upn?: string | null;
	}

	/** A tag of the LegalHold of a blob container. */
	export interface TagPropertyFormProperties {

		/** Returns the Object ID of the user who added the tag. */
		objectIdentifier: FormControl<string | null | undefined>,

		/** The tag value. */
		tag: FormControl<string | null | undefined>,

		/** Returns the Tenant ID that issued the token for the user who added the tag. */
		tenantId: FormControl<string | null | undefined>,

		/** Returns the date and time the tag was added. */
		timestamp: FormControl<Date | null | undefined>,

		/** Returns the User Principal Name of the user who added the tag. */
		upn: FormControl<string | null | undefined>,
	}
	export function CreateTagPropertyFormGroup() {
		return new FormGroup<TagPropertyFormProperties>({
			objectIdentifier: new FormControl<string | null | undefined>(undefined),
			tag: new FormControl<string | null | undefined>(undefined),
			tenantId: new FormControl<string | null | undefined>(undefined),
			timestamp: new FormControl<Date | null | undefined>(undefined),
			upn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListContainerItem {
	}
	export interface ListContainerItemFormProperties {
	}
	export function CreateListContainerItemFormGroup() {
		return new FormGroup<ListContainerItemFormProperties>({
		});

	}


	/** Response schema. Contains list of blobs returned, and if paging is requested or required, a URL to next page of containers. */
	export interface ListContainerItems {

		/** Request URL that can be used to query next page of containers. Returned when total number of requested containers exceed maximum page size. */
		nextLink?: string | null;

		/** List of blobs containers returned. */
		value?: Array<ListContainerItem>;
	}

	/** Response schema. Contains list of blobs returned, and if paging is requested or required, a URL to next page of containers. */
	export interface ListContainerItemsFormProperties {

		/** Request URL that can be used to query next page of containers. Returned when total number of requested containers exceed maximum page size. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateListContainerItemsFormGroup() {
		return new FormGroup<ListContainerItemsFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The blob service properties for blob restore policy */
	export interface RestorePolicyProperties {

		/**
		 * how long this blob can be restored. It should be great than zero and less than DeleteRetentionPolicy.days.
		 * Minimum: 1
		 * Maximum: 365
		 */
		days?: number | null;

		/**
		 * Blob restore is enabled if set to true.
		 * Required
		 */
		enabled: boolean;
	}

	/** The blob service properties for blob restore policy */
	export interface RestorePolicyPropertiesFormProperties {

		/**
		 * how long this blob can be restored. It should be great than zero and less than DeleteRetentionPolicy.days.
		 * Minimum: 1
		 * Maximum: 365
		 */
		days: FormControl<number | null | undefined>,

		/**
		 * Blob restore is enabled if set to true.
		 * Required
		 */
		enabled: FormControl<boolean | null | undefined>,
	}
	export function CreateRestorePolicyPropertiesFormGroup() {
		return new FormGroup<RestorePolicyPropertiesFormProperties>({
			days: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(365)]),
			enabled: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * List blob services of storage account. It returns a collection of one object named default.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Storage/storageAccounts/{accountName}/blobServices
		 * @param {string} resourceGroupName The name of the resource group within the user's subscription. The name is case insensitive.
		 * @param {string} accountName The name of the storage account within the specified resource group. Storage account names must be between 3 and 24 characters in length and use numbers and lower-case letters only.
		 * @param {string} api_version The API version to use for this operation.
		 * @param {string} subscriptionId The ID of the target subscription.
		 * @return {BlobServiceItems} OK -- List blob services operation completed successfully.
		 */
		BlobServices_List(resourceGroupName: string, accountName: string, api_version: string, subscriptionId: string): Observable<BlobServiceItems> {
			return this.http.get<BlobServiceItems>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Storage/storageAccounts/' + (accountName == null ? '' : encodeURIComponent(accountName)) + '/blobServices&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Lists all containers and does not support a prefix like data plane. Also SRP today does not return continuation token.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Storage/storageAccounts/{accountName}/blobServices/default/containers
		 * @param {string} resourceGroupName The name of the resource group within the user's subscription. The name is case insensitive.
		 * @param {string} accountName The name of the storage account within the specified resource group. Storage account names must be between 3 and 24 characters in length and use numbers and lower-case letters only.
		 * @param {string} api_version The API version to use for this operation.
		 * @param {string} subscriptionId The ID of the target subscription.
		 * @param {string} maxpagesize Optional. Specified maximum number of containers that can be included in the list.
		 * @param {string} filter Optional. When specified, only container names starting with the filter will be listed.
		 * @return {ListContainerItems} OK -- List Container operation completed successfully.
		 */
		BlobContainers_List(resourceGroupName: string, accountName: string, api_version: string, subscriptionId: string, maxpagesize: string | null | undefined, filter: string | null | undefined): Observable<ListContainerItems> {
			return this.http.get<ListContainerItems>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Storage/storageAccounts/' + (accountName == null ? '' : encodeURIComponent(accountName)) + '/blobServices/default/containers&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)) + '&maxpagesize=' + (maxpagesize == null ? '' : encodeURIComponent(maxpagesize)) + '&filter=' + (filter == null ? '' : encodeURIComponent(filter)), {});
		}

		/**
		 * Gets properties of a specified container.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Storage/storageAccounts/{accountName}/blobServices/default/containers/{containerName}
		 * @param {string} resourceGroupName The name of the resource group within the user's subscription. The name is case insensitive.
		 * @param {string} accountName The name of the storage account within the specified resource group. Storage account names must be between 3 and 24 characters in length and use numbers and lower-case letters only.
		 * @param {string} containerName The name of the blob container within the specified storage account. Blob container names must be between 3 and 63 characters in length and use numbers, lower-case letters and dash (-) only. Every dash (-) character must be immediately preceded and followed by a letter or number.
		 * @param {string} api_version The API version to use for this operation.
		 * @param {string} subscriptionId The ID of the target subscription.
		 * @return {BlobContainer} OK -- Get Container operation completed successfully.
		 */
		BlobContainers_Get(resourceGroupName: string, accountName: string, containerName: string, api_version: string, subscriptionId: string): Observable<BlobContainer> {
			return this.http.get<BlobContainer>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Storage/storageAccounts/' + (accountName == null ? '' : encodeURIComponent(accountName)) + '/blobServices/default/containers/' + (containerName == null ? '' : encodeURIComponent(containerName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Creates a new container under the specified account as described by request body. The container resource includes metadata and properties for that container. It does not include a list of the blobs contained by the container.
		 * Put subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Storage/storageAccounts/{accountName}/blobServices/default/containers/{containerName}
		 * @param {string} resourceGroupName The name of the resource group within the user's subscription. The name is case insensitive.
		 * @param {string} accountName The name of the storage account within the specified resource group. Storage account names must be between 3 and 24 characters in length and use numbers and lower-case letters only.
		 * @param {string} containerName The name of the blob container within the specified storage account. Blob container names must be between 3 and 63 characters in length and use numbers, lower-case letters and dash (-) only. Every dash (-) character must be immediately preceded and followed by a letter or number.
		 * @param {string} api_version The API version to use for this operation.
		 * @param {string} subscriptionId The ID of the target subscription.
		 * @param {BlobContainer} requestBody Properties of the blob container to create.
		 * @return {BlobContainer} OK -- The Container is already created.
		 */
		BlobContainers_Create(resourceGroupName: string, accountName: string, containerName: string, api_version: string, subscriptionId: string, requestBody: BlobContainer): Observable<BlobContainer> {
			return this.http.put<BlobContainer>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Storage/storageAccounts/' + (accountName == null ? '' : encodeURIComponent(accountName)) + '/blobServices/default/containers/' + (containerName == null ? '' : encodeURIComponent(containerName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes specified container under its account.
		 * Delete subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Storage/storageAccounts/{accountName}/blobServices/default/containers/{containerName}
		 * @param {string} resourceGroupName The name of the resource group within the user's subscription. The name is case insensitive.
		 * @param {string} accountName The name of the storage account within the specified resource group. Storage account names must be between 3 and 24 characters in length and use numbers and lower-case letters only.
		 * @param {string} containerName The name of the blob container within the specified storage account. Blob container names must be between 3 and 63 characters in length and use numbers, lower-case letters and dash (-) only. Every dash (-) character must be immediately preceded and followed by a letter or number.
		 * @param {string} api_version The API version to use for this operation.
		 * @param {string} subscriptionId The ID of the target subscription.
		 * @return {void} OK -- Delete Container operation completed successfully.
		 */
		BlobContainers_Delete(resourceGroupName: string, accountName: string, containerName: string, api_version: string, subscriptionId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Storage/storageAccounts/' + (accountName == null ? '' : encodeURIComponent(accountName)) + '/blobServices/default/containers/' + (containerName == null ? '' : encodeURIComponent(containerName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Updates container properties as specified in request body. Properties not mentioned in the request will be unchanged. Update fails if the specified container doesn't already exist.
		 * Patch subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Storage/storageAccounts/{accountName}/blobServices/default/containers/{containerName}
		 * @param {string} resourceGroupName The name of the resource group within the user's subscription. The name is case insensitive.
		 * @param {string} accountName The name of the storage account within the specified resource group. Storage account names must be between 3 and 24 characters in length and use numbers and lower-case letters only.
		 * @param {string} containerName The name of the blob container within the specified storage account. Blob container names must be between 3 and 63 characters in length and use numbers, lower-case letters and dash (-) only. Every dash (-) character must be immediately preceded and followed by a letter or number.
		 * @param {string} api_version The API version to use for this operation.
		 * @param {string} subscriptionId The ID of the target subscription.
		 * @param {BlobContainer} requestBody Properties to update for the blob container.
		 * @return {BlobContainer} OK -- Update Container operation completed successfully.
		 */
		BlobContainers_Update(resourceGroupName: string, accountName: string, containerName: string, api_version: string, subscriptionId: string, requestBody: BlobContainer): Observable<BlobContainer> {
			return this.http.patch<BlobContainer>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Storage/storageAccounts/' + (accountName == null ? '' : encodeURIComponent(accountName)) + '/blobServices/default/containers/' + (containerName == null ? '' : encodeURIComponent(containerName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Clears legal hold tags. Clearing the same or non-existent tag results in an idempotent operation. ClearLegalHold clears out only the specified tags in the request.
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Storage/storageAccounts/{accountName}/blobServices/default/containers/{containerName}/clearLegalHold
		 * @param {string} resourceGroupName The name of the resource group within the user's subscription. The name is case insensitive.
		 * @param {string} accountName The name of the storage account within the specified resource group. Storage account names must be between 3 and 24 characters in length and use numbers and lower-case letters only.
		 * @param {string} containerName The name of the blob container within the specified storage account. Blob container names must be between 3 and 63 characters in length and use numbers, lower-case letters and dash (-) only. Every dash (-) character must be immediately preceded and followed by a letter or number.
		 * @param {string} api_version The API version to use for this operation.
		 * @param {string} subscriptionId The ID of the target subscription.
		 * @param {LegalHold} requestBody The LegalHold property that will be clear from a blob container.
		 * @return {LegalHold} OK -- Clear legal hold tags for Container completed successfully.
		 */
		BlobContainers_ClearLegalHold(resourceGroupName: string, accountName: string, containerName: string, api_version: string, subscriptionId: string, requestBody: LegalHold): Observable<LegalHold> {
			return this.http.post<LegalHold>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Storage/storageAccounts/' + (accountName == null ? '' : encodeURIComponent(accountName)) + '/blobServices/default/containers/' + (containerName == null ? '' : encodeURIComponent(containerName)) + '/clearLegalHold&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Extends the immutabilityPeriodSinceCreationInDays of a locked immutabilityPolicy. The only action allowed on a Locked policy will be this action. ETag in If-Match is required for this operation.
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Storage/storageAccounts/{accountName}/blobServices/default/containers/{containerName}/immutabilityPolicies/default/extend
		 * @param {string} resourceGroupName The name of the resource group within the user's subscription. The name is case insensitive.
		 * @param {string} accountName The name of the storage account within the specified resource group. Storage account names must be between 3 and 24 characters in length and use numbers and lower-case letters only.
		 * @param {string} containerName The name of the blob container within the specified storage account. Blob container names must be between 3 and 63 characters in length and use numbers, lower-case letters and dash (-) only. Every dash (-) character must be immediately preceded and followed by a letter or number.
		 * @param {string} api_version The API version to use for this operation.
		 * @param {string} subscriptionId The ID of the target subscription.
		 * @param {ImmutabilityPolicy} requestBody The ImmutabilityPolicy Properties that will be extended for a blob container.
		 * @return {ImmutabilityPolicy} OK -- Extends container ImmutabilityPolicy operation completed successfully..
		 */
		BlobContainers_ExtendImmutabilityPolicy(resourceGroupName: string, accountName: string, containerName: string, api_version: string, subscriptionId: string, requestBody: ImmutabilityPolicy): Observable<ImmutabilityPolicy> {
			return this.http.post<ImmutabilityPolicy>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Storage/storageAccounts/' + (accountName == null ? '' : encodeURIComponent(accountName)) + '/blobServices/default/containers/' + (containerName == null ? '' : encodeURIComponent(containerName)) + '/immutabilityPolicies/default/extend&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Sets the ImmutabilityPolicy to Locked state. The only action allowed on a Locked policy is ExtendImmutabilityPolicy action. ETag in If-Match is required for this operation.
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Storage/storageAccounts/{accountName}/blobServices/default/containers/{containerName}/immutabilityPolicies/default/lock
		 * @param {string} resourceGroupName The name of the resource group within the user's subscription. The name is case insensitive.
		 * @param {string} accountName The name of the storage account within the specified resource group. Storage account names must be between 3 and 24 characters in length and use numbers and lower-case letters only.
		 * @param {string} containerName The name of the blob container within the specified storage account. Blob container names must be between 3 and 63 characters in length and use numbers, lower-case letters and dash (-) only. Every dash (-) character must be immediately preceded and followed by a letter or number.
		 * @param {string} api_version The API version to use for this operation.
		 * @param {string} subscriptionId The ID of the target subscription.
		 * @return {ImmutabilityPolicy} OK -- Locks container ImmutabilityPolicy operation completed successfully.
		 */
		BlobContainers_LockImmutabilityPolicy(resourceGroupName: string, accountName: string, containerName: string, api_version: string, subscriptionId: string): Observable<ImmutabilityPolicy> {
			return this.http.post<ImmutabilityPolicy>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Storage/storageAccounts/' + (accountName == null ? '' : encodeURIComponent(accountName)) + '/blobServices/default/containers/' + (containerName == null ? '' : encodeURIComponent(containerName)) + '/immutabilityPolicies/default/lock&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), null, {});
		}

		/**
		 * Gets the existing immutability policy along with the corresponding ETag in response headers and body.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Storage/storageAccounts/{accountName}/blobServices/default/containers/{containerName}/immutabilityPolicies/{immutabilityPolicyName}
		 * @param {string} resourceGroupName The name of the resource group within the user's subscription. The name is case insensitive.
		 * @param {string} accountName The name of the storage account within the specified resource group. Storage account names must be between 3 and 24 characters in length and use numbers and lower-case letters only.
		 * @param {string} containerName The name of the blob container within the specified storage account. Blob container names must be between 3 and 63 characters in length and use numbers, lower-case letters and dash (-) only. Every dash (-) character must be immediately preceded and followed by a letter or number.
		 * @param {BlobContainers_GetImmutabilityPolicyImmutabilityPolicyName} immutabilityPolicyName The name of the blob container immutabilityPolicy within the specified storage account. ImmutabilityPolicy Name must be 'default'
		 * @param {string} api_version The API version to use for this operation.
		 * @param {string} subscriptionId The ID of the target subscription.
		 * @return {ImmutabilityPolicy} OK -- Gets container ImmutabilityPolicy operation completed successfully.
		 */
		BlobContainers_GetImmutabilityPolicy(resourceGroupName: string, accountName: string, containerName: string, immutabilityPolicyName: BlobContainers_GetImmutabilityPolicyImmutabilityPolicyName, api_version: string, subscriptionId: string): Observable<ImmutabilityPolicy> {
			return this.http.get<ImmutabilityPolicy>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Storage/storageAccounts/' + (accountName == null ? '' : encodeURIComponent(accountName)) + '/blobServices/default/containers/' + (containerName == null ? '' : encodeURIComponent(containerName)) + '/immutabilityPolicies/' + immutabilityPolicyName + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Creates or updates an unlocked immutability policy. ETag in If-Match is honored if given but not required for this operation.
		 * Put subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Storage/storageAccounts/{accountName}/blobServices/default/containers/{containerName}/immutabilityPolicies/{immutabilityPolicyName}
		 * @param {string} resourceGroupName The name of the resource group within the user's subscription. The name is case insensitive.
		 * @param {string} accountName The name of the storage account within the specified resource group. Storage account names must be between 3 and 24 characters in length and use numbers and lower-case letters only.
		 * @param {string} containerName The name of the blob container within the specified storage account. Blob container names must be between 3 and 63 characters in length and use numbers, lower-case letters and dash (-) only. Every dash (-) character must be immediately preceded and followed by a letter or number.
		 * @param {BlobContainers_GetImmutabilityPolicyImmutabilityPolicyName} immutabilityPolicyName The name of the blob container immutabilityPolicy within the specified storage account. ImmutabilityPolicy Name must be 'default'
		 * @param {string} api_version The API version to use for this operation.
		 * @param {string} subscriptionId The ID of the target subscription.
		 * @param {ImmutabilityPolicy} requestBody The ImmutabilityPolicy Properties that will be created or updated to a blob container.
		 * @return {ImmutabilityPolicy} OK -- Creates or updates container ImmutabilityPolicy operation completed successfully.
		 */
		BlobContainers_CreateOrUpdateImmutabilityPolicy(resourceGroupName: string, accountName: string, containerName: string, immutabilityPolicyName: BlobContainers_GetImmutabilityPolicyImmutabilityPolicyName, api_version: string, subscriptionId: string, requestBody: ImmutabilityPolicy): Observable<ImmutabilityPolicy> {
			return this.http.put<ImmutabilityPolicy>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Storage/storageAccounts/' + (accountName == null ? '' : encodeURIComponent(accountName)) + '/blobServices/default/containers/' + (containerName == null ? '' : encodeURIComponent(containerName)) + '/immutabilityPolicies/' + immutabilityPolicyName + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Aborts an unlocked immutability policy. The response of delete has immutabilityPeriodSinceCreationInDays set to 0. ETag in If-Match is required for this operation. Deleting a locked immutability policy is not allowed, only way is to delete the container after deleting all blobs inside the container.
		 * Delete subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Storage/storageAccounts/{accountName}/blobServices/default/containers/{containerName}/immutabilityPolicies/{immutabilityPolicyName}
		 * @param {string} resourceGroupName The name of the resource group within the user's subscription. The name is case insensitive.
		 * @param {string} accountName The name of the storage account within the specified resource group. Storage account names must be between 3 and 24 characters in length and use numbers and lower-case letters only.
		 * @param {string} containerName The name of the blob container within the specified storage account. Blob container names must be between 3 and 63 characters in length and use numbers, lower-case letters and dash (-) only. Every dash (-) character must be immediately preceded and followed by a letter or number.
		 * @param {BlobContainers_GetImmutabilityPolicyImmutabilityPolicyName} immutabilityPolicyName The name of the blob container immutabilityPolicy within the specified storage account. ImmutabilityPolicy Name must be 'default'
		 * @param {string} api_version The API version to use for this operation.
		 * @param {string} subscriptionId The ID of the target subscription.
		 * @return {ImmutabilityPolicy} OK -- Deletes container ImmutabilityPolicy operation completed successfully.
		 */
		BlobContainers_DeleteImmutabilityPolicy(resourceGroupName: string, accountName: string, containerName: string, immutabilityPolicyName: BlobContainers_GetImmutabilityPolicyImmutabilityPolicyName, api_version: string, subscriptionId: string): Observable<ImmutabilityPolicy> {
			return this.http.delete<ImmutabilityPolicy>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Storage/storageAccounts/' + (accountName == null ? '' : encodeURIComponent(accountName)) + '/blobServices/default/containers/' + (containerName == null ? '' : encodeURIComponent(containerName)) + '/immutabilityPolicies/' + immutabilityPolicyName + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * The Lease Container operation establishes and manages a lock on a container for delete operations. The lock duration can be 15 to 60 seconds, or can be infinite.
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Storage/storageAccounts/{accountName}/blobServices/default/containers/{containerName}/lease
		 * @param {string} resourceGroupName The name of the resource group within the user's subscription. The name is case insensitive.
		 * @param {string} accountName The name of the storage account within the specified resource group. Storage account names must be between 3 and 24 characters in length and use numbers and lower-case letters only.
		 * @param {string} containerName The name of the blob container within the specified storage account. Blob container names must be between 3 and 63 characters in length and use numbers, lower-case letters and dash (-) only. Every dash (-) character must be immediately preceded and followed by a letter or number.
		 * @param {string} api_version The API version to use for this operation.
		 * @param {string} subscriptionId The ID of the target subscription.
		 * @param {LeaseContainerRequest} requestBody Lease Container request body.
		 * @return {LeaseContainerResponse} OK -- Lease Container operation completed successfully.
		 */
		BlobContainers_Lease(resourceGroupName: string, accountName: string, containerName: string, api_version: string, subscriptionId: string, requestBody: LeaseContainerRequest): Observable<LeaseContainerResponse> {
			return this.http.post<LeaseContainerResponse>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Storage/storageAccounts/' + (accountName == null ? '' : encodeURIComponent(accountName)) + '/blobServices/default/containers/' + (containerName == null ? '' : encodeURIComponent(containerName)) + '/lease&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Sets legal hold tags. Setting the same tag results in an idempotent operation. SetLegalHold follows an append pattern and does not clear out the existing tags that are not specified in the request.
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Storage/storageAccounts/{accountName}/blobServices/default/containers/{containerName}/setLegalHold
		 * @param {string} resourceGroupName The name of the resource group within the user's subscription. The name is case insensitive.
		 * @param {string} accountName The name of the storage account within the specified resource group. Storage account names must be between 3 and 24 characters in length and use numbers and lower-case letters only.
		 * @param {string} containerName The name of the blob container within the specified storage account. Blob container names must be between 3 and 63 characters in length and use numbers, lower-case letters and dash (-) only. Every dash (-) character must be immediately preceded and followed by a letter or number.
		 * @param {string} api_version The API version to use for this operation.
		 * @param {string} subscriptionId The ID of the target subscription.
		 * @param {LegalHold} requestBody The LegalHold property that will be set to a blob container.
		 * @return {LegalHold} OK -- Set legal hold tags for Container completed successfully.
		 */
		BlobContainers_SetLegalHold(resourceGroupName: string, accountName: string, containerName: string, api_version: string, subscriptionId: string, requestBody: LegalHold): Observable<LegalHold> {
			return this.http.post<LegalHold>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Storage/storageAccounts/' + (accountName == null ? '' : encodeURIComponent(accountName)) + '/blobServices/default/containers/' + (containerName == null ? '' : encodeURIComponent(containerName)) + '/setLegalHold&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets the properties of a storage account’s Blob service, including properties for Storage Analytics and CORS (Cross-Origin Resource Sharing) rules.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Storage/storageAccounts/{accountName}/blobServices/{BlobServicesName}
		 * @param {string} resourceGroupName The name of the resource group within the user's subscription. The name is case insensitive.
		 * @param {string} accountName The name of the storage account within the specified resource group. Storage account names must be between 3 and 24 characters in length and use numbers and lower-case letters only.
		 * @param {string} api_version The API version to use for this operation.
		 * @param {string} subscriptionId The ID of the target subscription.
		 * @param {BlobContainers_GetImmutabilityPolicyImmutabilityPolicyName} BlobServicesName The name of the blob Service within the specified storage account. Blob Service Name must be 'default'
		 * @return {BlobServiceProperties} OK -- returned the properties of a storage account’s Blob service.
		 */
		BlobServices_GetServiceProperties(resourceGroupName: string, accountName: string, api_version: string, subscriptionId: string, BlobServicesName: BlobContainers_GetImmutabilityPolicyImmutabilityPolicyName): Observable<BlobServiceProperties> {
			return this.http.get<BlobServiceProperties>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Storage/storageAccounts/' + (accountName == null ? '' : encodeURIComponent(accountName)) + '/blobServices/' + BlobServicesName + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Sets the properties of a storage account’s Blob service, including properties for Storage Analytics and CORS (Cross-Origin Resource Sharing) rules.
		 * Put subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Storage/storageAccounts/{accountName}/blobServices/{BlobServicesName}
		 * @param {string} resourceGroupName The name of the resource group within the user's subscription. The name is case insensitive.
		 * @param {string} accountName The name of the storage account within the specified resource group. Storage account names must be between 3 and 24 characters in length and use numbers and lower-case letters only.
		 * @param {string} api_version The API version to use for this operation.
		 * @param {string} subscriptionId The ID of the target subscription.
		 * @param {BlobContainers_GetImmutabilityPolicyImmutabilityPolicyName} BlobServicesName The name of the blob Service within the specified storage account. Blob Service Name must be 'default'
		 * @param {BlobServiceProperties} requestBody The properties of a storage account’s Blob service, including properties for Storage Analytics and CORS (Cross-Origin Resource Sharing) rules.
		 * @return {BlobServiceProperties} OK -- Sets The properties of a storage account’s Blob service successfully.
		 */
		BlobServices_SetServiceProperties(resourceGroupName: string, accountName: string, api_version: string, subscriptionId: string, BlobServicesName: BlobContainers_GetImmutabilityPolicyImmutabilityPolicyName, requestBody: BlobServiceProperties): Observable<BlobServiceProperties> {
			return this.http.put<BlobServiceProperties>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Storage/storageAccounts/' + (accountName == null ? '' : encodeURIComponent(accountName)) + '/blobServices/' + BlobServicesName + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

	export enum BlobContainers_GetImmutabilityPolicyImmutabilityPolicyName { default = 'default' }

}

