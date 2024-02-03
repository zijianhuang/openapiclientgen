import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** REST API operation description: see https://github.com/Azure/azure-rest-api-specs/blob/master/documentation/openapi-authoring-automated-guidelines.md#r3023-operationsapiimplementation */
	export interface ApiOperation {

		/** The object that represents the operation. */
		display?: any;

		/** Operation name: {provider}/{resource}/{operation} */
		name?: string | null;
	}

	/** REST API operation description: see https://github.com/Azure/azure-rest-api-specs/blob/master/documentation/openapi-authoring-automated-guidelines.md#r3023-operationsapiimplementation */
	export interface ApiOperationFormProperties {

		/** The object that represents the operation. */
		display: FormControl<any | null | undefined>,

		/** Operation name: {provider}/{resource}/{operation} */
		name: FormControl<string | null | undefined>,
	}
	export function CreateApiOperationFormGroup() {
		return new FormGroup<ApiOperationFormProperties>({
			display: new FormControl<any | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Result of the request to list Resource Provider operations. It contains a list of operations and a URL link to get the next set of results. */
	export interface ApiOperationListResult {

		/** URL to get the next set of operation list results if there are any. */
		nextLink?: string | null;

		/** List of Resource Provider operations supported by the Microsoft.StorageCache resource provider. */
		value?: Array<ApiOperation>;
	}

	/** Result of the request to list Resource Provider operations. It contains a list of operations and a URL link to get the next set of results. */
	export interface ApiOperationListResultFormProperties {

		/** URL to get the next set of operation list results if there are any. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateApiOperationListResultFormGroup() {
		return new FormGroup<ApiOperationListResultFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A Cache instance. Follows Azure Resource Manager standards: https://github.com/Azure/azure-resource-manager-rpc/blob/master/v1.0/resource-api-reference.md */
	export interface Cache {

		/** A fully qualified URL. */
		id?: string | null;

		/** Region name string. */
		location?: string | null;

		/** Schema for the name of resources served by this provider. Note that objects will contain an odata @id annotation as appropriate. This will contain the complete URL of the object. These names are case-preserving, but not case sensitive. */
		name?: string | null;

		/** Properties of the Cache. */
		properties?: CacheProperties;

		/** SKU for the Cache. */
		sku?: CacheSku;

		/** ARM tags as name/value pairs. */
		tags?: string | null;

		/** Type of the Cache; Microsoft.StorageCache/Cache */
		type?: string | null;
	}

	/** A Cache instance. Follows Azure Resource Manager standards: https://github.com/Azure/azure-resource-manager-rpc/blob/master/v1.0/resource-api-reference.md */
	export interface CacheFormProperties {

		/** A fully qualified URL. */
		id: FormControl<string | null | undefined>,

		/** Region name string. */
		location: FormControl<string | null | undefined>,

		/** Schema for the name of resources served by this provider. Note that objects will contain an odata @id annotation as appropriate. This will contain the complete URL of the object. These names are case-preserving, but not case sensitive. */
		name: FormControl<string | null | undefined>,

		/** ARM tags as name/value pairs. */
		tags: FormControl<string | null | undefined>,

		/** Type of the Cache; Microsoft.StorageCache/Cache */
		type: FormControl<string | null | undefined>,
	}
	export function CreateCacheFormGroup() {
		return new FormGroup<CacheFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			location: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^[-0-9a-zA-Z_]{1,31}$')]),
			tags: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CacheProperties {

		/** The size of this Cache, in GB. */
		cacheSizeGB?: number | null;

		/** An indication of Cache health. Gives more information about health than just that related to provisioning. */
		health?: CacheHealth;

		/** Array of IP addresses that can be used by clients mounting this Cache. */
		mountAddresses?: Array<string>;

		/** ARM provisioning state, see https://github.com/Azure/azure-resource-manager-rpc/blob/master/v1.0/Addendum.md#provisioningstate-property */
		provisioningState?: CachePropertiesProvisioningState | null;

		/** A fully qualified URL. */
		subnet?: string | null;

		/** Properties describing the software upgrade state of the Cache. */
		upgradeStatus?: CacheUpgradeStatus;
	}
	export interface CachePropertiesFormProperties {

		/** The size of this Cache, in GB. */
		cacheSizeGB: FormControl<number | null | undefined>,

		/** ARM provisioning state, see https://github.com/Azure/azure-resource-manager-rpc/blob/master/v1.0/Addendum.md#provisioningstate-property */
		provisioningState: FormControl<CachePropertiesProvisioningState | null | undefined>,

		/** A fully qualified URL. */
		subnet: FormControl<string | null | undefined>,
	}
	export function CreateCachePropertiesFormGroup() {
		return new FormGroup<CachePropertiesFormProperties>({
			cacheSizeGB: new FormControl<number | null | undefined>(undefined),
			provisioningState: new FormControl<CachePropertiesProvisioningState | null | undefined>(undefined),
			subnet: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum CachePropertiesProvisioningState { Succeeded = 'Succeeded', Failed = 'Failed', Cancelled = 'Cancelled', Creating = 'Creating', Deleting = 'Deleting', Updating = 'Updating' }


	/** Properties describing the software upgrade state of the Cache. */
	export interface CacheUpgradeStatus {

		/** Version string of the firmware currently installed on this Cache. */
		currentFirmwareVersion?: string | null;

		/** Time at which the pending firmware update will automatically be installed on the Cache. */
		firmwareUpdateDeadline?: Date | null;

		/** True if there is a firmware update ready to install on this Cache. The firmware will automatically be installed after firmwareUpdateDeadline if not triggered earlier via the upgrade operation. */
		firmwareUpdateStatus?: CacheUpgradeStatusFirmwareUpdateStatus | null;

		/** Time of the last successful firmware update. */
		lastFirmwareUpdate?: Date | null;

		/** When firmwareUpdateAvailable is true, this field holds the version string for the update. */
		pendingFirmwareVersion?: string | null;
	}

	/** Properties describing the software upgrade state of the Cache. */
	export interface CacheUpgradeStatusFormProperties {

		/** Version string of the firmware currently installed on this Cache. */
		currentFirmwareVersion: FormControl<string | null | undefined>,

		/** Time at which the pending firmware update will automatically be installed on the Cache. */
		firmwareUpdateDeadline: FormControl<Date | null | undefined>,

		/** True if there is a firmware update ready to install on this Cache. The firmware will automatically be installed after firmwareUpdateDeadline if not triggered earlier via the upgrade operation. */
		firmwareUpdateStatus: FormControl<CacheUpgradeStatusFirmwareUpdateStatus | null | undefined>,

		/** Time of the last successful firmware update. */
		lastFirmwareUpdate: FormControl<Date | null | undefined>,

		/** When firmwareUpdateAvailable is true, this field holds the version string for the update. */
		pendingFirmwareVersion: FormControl<string | null | undefined>,
	}
	export function CreateCacheUpgradeStatusFormGroup() {
		return new FormGroup<CacheUpgradeStatusFormProperties>({
			currentFirmwareVersion: new FormControl<string | null | undefined>(undefined),
			firmwareUpdateDeadline: new FormControl<Date | null | undefined>(undefined),
			firmwareUpdateStatus: new FormControl<CacheUpgradeStatusFirmwareUpdateStatus | null | undefined>(undefined),
			lastFirmwareUpdate: new FormControl<Date | null | undefined>(undefined),
			pendingFirmwareVersion: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum CacheUpgradeStatusFirmwareUpdateStatus { available = 'available', unavailable = 'unavailable' }

	export interface CacheSku {

		/** SKU name for this Cache. */
		name?: string | null;
	}
	export interface CacheSkuFormProperties {

		/** SKU name for this Cache. */
		name: FormControl<string | null | undefined>,
	}
	export function CreateCacheSkuFormGroup() {
		return new FormGroup<CacheSkuFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An indication of Cache health. Gives more information about health than just that related to provisioning. */
	export interface CacheHealth {

		/** List of Cache health states. */
		state?: CacheHealthState | null;

		/** Describes explanation of state. */
		statusDescription?: string | null;
	}

	/** An indication of Cache health. Gives more information about health than just that related to provisioning. */
	export interface CacheHealthFormProperties {

		/** List of Cache health states. */
		state: FormControl<CacheHealthState | null | undefined>,

		/** Describes explanation of state. */
		statusDescription: FormControl<string | null | undefined>,
	}
	export function CreateCacheHealthFormGroup() {
		return new FormGroup<CacheHealthFormProperties>({
			state: new FormControl<CacheHealthState | null | undefined>(undefined),
			statusDescription: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum CacheHealthState { Unknown = 'Unknown', Healthy = 'Healthy', Degraded = 'Degraded', Down = 'Down', Transitioning = 'Transitioning', Stopping = 'Stopping', Stopped = 'Stopped', Upgrading = 'Upgrading', Flushing = 'Flushing' }


	/** Result of the request to list Caches. It contains a list of Caches and a URL link to get the next set of results. */
	export interface CachesListResult {

		/** URL to get the next set of Cache list results, if there are any. */
		nextLink?: string | null;

		/** List of Caches. */
		value?: Array<Cache>;
	}

	/** Result of the request to list Caches. It contains a list of Caches and a URL link to get the next set of results. */
	export interface CachesListResultFormProperties {

		/** URL to get the next set of Cache list results, if there are any. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateCachesListResultFormGroup() {
		return new FormGroup<CachesListResultFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Storage container for use as a CLFS Storage Target. */
	export interface ClfsTarget {

		/** A fully qualified URL. */
		target?: string | null;
	}

	/** Storage container for use as a CLFS Storage Target. */
	export interface ClfsTargetFormProperties {

		/** A fully qualified URL. */
		target: FormControl<string | null | undefined>,
	}
	export function CreateClfsTargetFormGroup() {
		return new FormGroup<ClfsTargetFormProperties>({
			target: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An error response. */
	export interface CloudError {

		/** An error response. */
		error?: CloudErrorBody;
	}

	/** An error response. */
	export interface CloudErrorFormProperties {
	}
	export function CreateCloudErrorFormGroup() {
		return new FormGroup<CloudErrorFormProperties>({
		});

	}


	/** An error response. */
	export interface CloudErrorBody {

		/** An identifier for the error. Codes are invariant and are intended to be consumed programmatically. */
		code?: string | null;

		/** A list of additional details about the error. */
		details?: Array<CloudErrorBody>;

		/** A message describing the error, intended to be suitable for display in a user interface. */
		message?: string | null;

		/** The target of the particular error. For example, the name of the property in error. */
		target?: string | null;
	}

	/** An error response. */
	export interface CloudErrorBodyFormProperties {

		/** An identifier for the error. Codes are invariant and are intended to be consumed programmatically. */
		code: FormControl<string | null | undefined>,

		/** A message describing the error, intended to be suitable for display in a user interface. */
		message: FormControl<string | null | undefined>,

		/** The target of the particular error. For example, the name of the property in error. */
		target: FormControl<string | null | undefined>,
	}
	export function CreateCloudErrorBodyFormGroup() {
		return new FormGroup<CloudErrorBodyFormProperties>({
			code: new FormControl<string | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
			target: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A namespace junction. */
	export interface NamespaceJunction {

		/** Namespace path on a Cache for a Storage Target. */
		namespacePath?: string | null;

		/** NFS export where targetPath exists. */
		nfsExport?: string | null;

		/** Path in Storage Target to which namespacePath points. */
		targetPath?: string | null;
	}

	/** A namespace junction. */
	export interface NamespaceJunctionFormProperties {

		/** Namespace path on a Cache for a Storage Target. */
		namespacePath: FormControl<string | null | undefined>,

		/** NFS export where targetPath exists. */
		nfsExport: FormControl<string | null | undefined>,

		/** Path in Storage Target to which namespacePath points. */
		targetPath: FormControl<string | null | undefined>,
	}
	export function CreateNamespaceJunctionFormGroup() {
		return new FormGroup<NamespaceJunctionFormProperties>({
			namespacePath: new FormControl<string | null | undefined>(undefined),
			nfsExport: new FormControl<string | null | undefined>(undefined),
			targetPath: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An NFSv3 mount point for use as a Storage Target. */
	export interface Nfs3Target {

		/** IP address or host name of an NFSv3 host (e.g., 10.0.44.44). */
		target?: string | null;

		/** Identifies the primary usage model to be used for this Storage Target. Get choices from .../usageModels */
		usageModel?: string | null;
	}

	/** An NFSv3 mount point for use as a Storage Target. */
	export interface Nfs3TargetFormProperties {

		/** IP address or host name of an NFSv3 host (e.g., 10.0.44.44). */
		target: FormControl<string | null | undefined>,

		/** Identifies the primary usage model to be used for this Storage Target. Get choices from .../usageModels */
		usageModel: FormControl<string | null | undefined>,
	}
	export function CreateNfs3TargetFormGroup() {
		return new FormGroup<Nfs3TargetFormProperties>({
			target: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^[-.0-9a-zA-Z]+$')]),
			usageModel: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A resource SKU. */
	export interface ResourceSku {

		/** A list of capabilities of this SKU, such as throughput or ops/sec. */
		capabilities?: Array<ResourceSkuCapabilities>;

		/** The set of locations that the SKU is available. */
		locationInfo?: Array<ResourceSkuLocationInfo>;

		/** The set of locations that the SKU is available. This will be supported and registered Azure Geo Regions (e.g., West US, East US, Southeast Asia, etc.). */
		locations?: Array<string>;

		/** The name of this SKU. */
		name?: string | null;

		/** The type of resource the SKU applies to. */
		resourceType?: string | null;

		/** The restrictions preventing this SKU from being used. This is empty if there are no restrictions. */
		restrictions?: Array<Restriction>;
	}

	/** A resource SKU. */
	export interface ResourceSkuFormProperties {

		/** The name of this SKU. */
		name: FormControl<string | null | undefined>,

		/** The type of resource the SKU applies to. */
		resourceType: FormControl<string | null | undefined>,
	}
	export function CreateResourceSkuFormGroup() {
		return new FormGroup<ResourceSkuFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			resourceType: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A resource SKU capability. */
	export interface ResourceSkuCapabilities {

		/** Name of a capability, such as ops/sec. */
		name?: string | null;

		/** Quantity, if the capability is measured by quantity. */
		value?: string | null;
	}

	/** A resource SKU capability. */
	export interface ResourceSkuCapabilitiesFormProperties {

		/** Name of a capability, such as ops/sec. */
		name: FormControl<string | null | undefined>,

		/** Quantity, if the capability is measured by quantity. */
		value: FormControl<string | null | undefined>,
	}
	export function CreateResourceSkuCapabilitiesFormGroup() {
		return new FormGroup<ResourceSkuCapabilitiesFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Resource SKU location information. */
	export interface ResourceSkuLocationInfo {

		/** Location where this SKU is available. */
		location?: string | null;

		/** Zones if any. */
		zones?: Array<string>;
	}

	/** Resource SKU location information. */
	export interface ResourceSkuLocationInfoFormProperties {

		/** Location where this SKU is available. */
		location: FormControl<string | null | undefined>,
	}
	export function CreateResourceSkuLocationInfoFormGroup() {
		return new FormGroup<ResourceSkuLocationInfoFormProperties>({
			location: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The restrictions preventing this SKU from being used. */
	export interface Restriction {

		/** The reason for the restriction. As of now this can be "QuotaId" or "NotAvailableForSubscription". "QuotaId" is set when the SKU has requiredQuotas parameter as the subscription does not belong to that quota. "NotAvailableForSubscription" is related to capacity at the datacenter. */
		reasonCode?: RestrictionReasonCode | null;

		/** The type of restrictions. In this version, the only possible value for this is location. */
		type?: string | null;

		/** The value of restrictions. If the restriction type is set to location, then this would be the different locations where the SKU is restricted. */
		values?: Array<string>;
	}

	/** The restrictions preventing this SKU from being used. */
	export interface RestrictionFormProperties {

		/** The reason for the restriction. As of now this can be "QuotaId" or "NotAvailableForSubscription". "QuotaId" is set when the SKU has requiredQuotas parameter as the subscription does not belong to that quota. "NotAvailableForSubscription" is related to capacity at the datacenter. */
		reasonCode: FormControl<RestrictionReasonCode | null | undefined>,

		/** The type of restrictions. In this version, the only possible value for this is location. */
		type: FormControl<string | null | undefined>,
	}
	export function CreateRestrictionFormGroup() {
		return new FormGroup<RestrictionFormProperties>({
			reasonCode: new FormControl<RestrictionReasonCode | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum RestrictionReasonCode { QuotaId = 'QuotaId', NotAvailableForSubscription = 'NotAvailableForSubscription' }


	/** The response from the List Cache SKUs operation. */
	export interface ResourceSkusResult {

		/** The URI to fetch the next page of Cache SKUs. */
		nextLink?: string | null;

		/** The list of SKUs available for the subscription. */
		value?: Array<ResourceSku>;
	}

	/** The response from the List Cache SKUs operation. */
	export interface ResourceSkusResultFormProperties {

		/** The URI to fetch the next page of Cache SKUs. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateResourceSkusResultFormGroup() {
		return new FormGroup<ResourceSkusResultFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A storage system being cached by a Cache. */
	export interface StorageTarget {

		/** Resource ID of the Storage Target. */
		id?: string | null;

		/** Schema for the name of resources served by this provider. Note that objects will contain an odata @id annotation as appropriate. This will contain the complete URL of the object. These names are case-preserving, but not case sensitive. */
		name?: string | null;

		/** Properties of the Storage Target. */
		properties?: StorageTargetProperties;

		/** Type of the Storage Target; Microsoft.StorageCache/Cache/StorageTarget */
		type?: string | null;
	}

	/** A storage system being cached by a Cache. */
	export interface StorageTargetFormProperties {

		/** Resource ID of the Storage Target. */
		id: FormControl<string | null | undefined>,

		/** Schema for the name of resources served by this provider. Note that objects will contain an odata @id annotation as appropriate. This will contain the complete URL of the object. These names are case-preserving, but not case sensitive. */
		name: FormControl<string | null | undefined>,

		/** Type of the Storage Target; Microsoft.StorageCache/Cache/StorageTarget */
		type: FormControl<string | null | undefined>,
	}
	export function CreateStorageTargetFormGroup() {
		return new FormGroup<StorageTargetFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^[-0-9a-zA-Z_]{1,31}$')]),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface StorageTargetProperties {

		/** Storage container for use as a CLFS Storage Target. */
		clfs?: ClfsTarget;

		/** List of Cache namespace junctions to target for namespace associations. */
		junctions?: Array<NamespaceJunction>;

		/** An NFSv3 mount point for use as a Storage Target. */
		nfs3?: Nfs3Target;

		/** ARM provisioning state, see https://github.com/Azure/azure-resource-manager-rpc/blob/master/v1.0/Addendum.md#provisioningstate-property */
		provisioningState?: CachePropertiesProvisioningState | null;

		/** Type of the Storage Target. */
		targetType?: StorageTargetPropertiesTargetType | null;

		/** Storage container for use as an Unknown Storage Target. */
		unknown?: UnknownTarget;
	}
	export interface StorageTargetPropertiesFormProperties {

		/** ARM provisioning state, see https://github.com/Azure/azure-resource-manager-rpc/blob/master/v1.0/Addendum.md#provisioningstate-property */
		provisioningState: FormControl<CachePropertiesProvisioningState | null | undefined>,

		/** Type of the Storage Target. */
		targetType: FormControl<StorageTargetPropertiesTargetType | null | undefined>,
	}
	export function CreateStorageTargetPropertiesFormGroup() {
		return new FormGroup<StorageTargetPropertiesFormProperties>({
			provisioningState: new FormControl<CachePropertiesProvisioningState | null | undefined>(undefined),
			targetType: new FormControl<StorageTargetPropertiesTargetType | null | undefined>(undefined),
		});

	}

	export enum StorageTargetPropertiesTargetType { nfs3 = 'nfs3', clfs = 'clfs', unknown = 'unknown' }


	/** Storage container for use as an Unknown Storage Target. */
	export interface UnknownTarget {

		/** Properties of an unknown type of Storage Target. */
		unknownMap?: UnknownProperties;
	}

	/** Storage container for use as an Unknown Storage Target. */
	export interface UnknownTargetFormProperties {
	}
	export function CreateUnknownTargetFormGroup() {
		return new FormGroup<UnknownTargetFormProperties>({
		});

	}


	/** Properties of an unknown type of Storage Target. */
	export interface UnknownProperties {
	}

	/** Properties of an unknown type of Storage Target. */
	export interface UnknownPropertiesFormProperties {
	}
	export function CreateUnknownPropertiesFormGroup() {
		return new FormGroup<UnknownPropertiesFormProperties>({
		});

	}


	/** A list of Storage Targets. */
	export interface StorageTargetsResult {

		/** The URI to fetch the next page of Storage Targets. */
		nextLink?: string | null;

		/** The list of Storage Targets defined for the Cache. */
		value?: Array<StorageTarget>;
	}

	/** A list of Storage Targets. */
	export interface StorageTargetsResultFormProperties {

		/** The URI to fetch the next page of Storage Targets. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateStorageTargetsResultFormGroup() {
		return new FormGroup<StorageTargetsResultFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A usage model. */
	export interface UsageModel {

		/** Localized information describing this usage model. */
		display?: UsageModelDisplay;

		/** Non-localized keyword name for this usage model. */
		modelName?: string | null;

		/** The type of Storage Target to which this model is applicable (only nfs3 as of this version). */
		targetType?: string | null;
	}

	/** A usage model. */
	export interface UsageModelFormProperties {

		/** Non-localized keyword name for this usage model. */
		modelName: FormControl<string | null | undefined>,

		/** The type of Storage Target to which this model is applicable (only nfs3 as of this version). */
		targetType: FormControl<string | null | undefined>,
	}
	export function CreateUsageModelFormGroup() {
		return new FormGroup<UsageModelFormProperties>({
			modelName: new FormControl<string | null | undefined>(undefined),
			targetType: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UsageModelDisplay {

		/** String to display for this usage model. */
		description?: string | null;
	}
	export interface UsageModelDisplayFormProperties {

		/** String to display for this usage model. */
		description: FormControl<string | null | undefined>,
	}
	export function CreateUsageModelDisplayFormGroup() {
		return new FormGroup<UsageModelDisplayFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A list of Cache usage models. */
	export interface UsageModelsResult {

		/** The URI to fetch the next page of Cache usage models. */
		nextLink?: string | null;

		/** The list of usage models available for the subscription. */
		value?: Array<UsageModel>;
	}

	/** A list of Cache usage models. */
	export interface UsageModelsResultFormProperties {

		/** The URI to fetch the next page of Cache usage models. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateUsageModelsResultFormGroup() {
		return new FormGroup<UsageModelsResultFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Lists all of the available Resource Provider operations.
		 * Get providers/Microsoft.StorageCache/operations
		 * @param {string} api_version Client API version.
		 * @return {ApiOperationListResult} The list of available Resource Provider operations.
		 */
		Operations_List(api_version: string): Observable<ApiOperationListResult> {
			return this.http.get<ApiOperationListResult>(this.baseUri + 'providers/Microsoft.StorageCache/operations?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Returns all Caches the user has access to under a subscription.
		 * Get subscriptions/{subscriptionId}/providers/Microsoft.StorageCache/caches
		 * @param {string} api_version Client API version.
		 * @param {string} subscriptionId Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @return {CachesListResult} A list of Cache objects. Note that entity references might replace complete Cache objects, as described in http://docs.oasis-open.org/odata/odata-json-format/v4.01/cs01/odata-json-format-v4.01-cs01.html#sec_EntityReference
		 */
		Caches_List(api_version: string, subscriptionId: string): Observable<CachesListResult> {
			return this.http.get<CachesListResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/providers/Microsoft.StorageCache/caches?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Get the list of StorageCache.Cache SKUs available to this subscription.
		 * Get subscriptions/{subscriptionId}/providers/Microsoft.StorageCache/skus
		 * @param {string} api_version Client API version.
		 * @param {string} subscriptionId Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @return {ResourceSkusResult} A list of SKU descriptors.
		 */
		Skus_List(api_version: string, subscriptionId: string): Observable<ResourceSkusResult> {
			return this.http.get<ResourceSkusResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/providers/Microsoft.StorageCache/skus?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Get the list of Cache Usage Models available to this subscription.
		 * Get subscriptions/{subscriptionId}/providers/Microsoft.StorageCache/usageModels
		 * @param {string} api_version Client API version.
		 * @param {string} subscriptionId Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @return {UsageModelsResult} A list of UsageModel descriptors.
		 */
		UsageModels_List(api_version: string, subscriptionId: string): Observable<UsageModelsResult> {
			return this.http.get<UsageModelsResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/providers/Microsoft.StorageCache/usageModels?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Returns all Caches the user has access to under a resource group.
		 * Get subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.StorageCache/caches
		 * @param {string} resourceGroupName Target resource group.
		 * @param {string} api_version Client API version.
		 * @param {string} subscriptionId Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @return {CachesListResult} A list of Cache objects. Note that entity references might replace complete Cache objects, as described in http://docs.oasis-open.org/odata/odata-json-format/v4.01/cs01/odata-json-format-v4.01-cs01.html#sec_EntityReference
		 */
		Caches_ListByResourceGroup(resourceGroupName: string, api_version: string, subscriptionId: string): Observable<CachesListResult> {
			return this.http.get<CachesListResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourcegroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.StorageCache/caches&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Returns a Cache.
		 * Get subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.StorageCache/caches/{cacheName}
		 * @param {string} resourceGroupName Target resource group.
		 * @param {string} cacheName Name of Cache.
		 * @param {string} api_version Client API version.
		 * @param {string} subscriptionId Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @return {Cache} Returns the Cache object corresponding to cacheName.
		 */
		Caches_Get(resourceGroupName: string, cacheName: string, api_version: string, subscriptionId: string): Observable<Cache> {
			return this.http.get<Cache>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourcegroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.StorageCache/caches/' + (cacheName == null ? '' : encodeURIComponent(cacheName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Create or update a Cache.
		 * Put subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.StorageCache/caches/{cacheName}
		 * @param {string} resourceGroupName Target resource group.
		 * @param {string} api_version Client API version.
		 * @param {string} subscriptionId Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} cacheName Name of Cache.
		 * @param {Cache} requestBody Object containing the user-selectable properties of the new Cache. If read-only properties are included, they must match the existing values of those properties.
		 * @return {Cache} Cache created or updated.
		 */
		Caches_CreateOrUpdate(resourceGroupName: string, api_version: string, subscriptionId: string, cacheName: string, requestBody: Cache): Observable<Cache> {
			return this.http.put<Cache>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourcegroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.StorageCache/caches/' + (cacheName == null ? '' : encodeURIComponent(cacheName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Schedules a Cache for deletion.
		 * Delete subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.StorageCache/caches/{cacheName}
		 * @param {string} resourceGroupName Target resource group.
		 * @param {string} cacheName Name of Cache.
		 * @param {string} api_version Client API version.
		 * @param {string} subscriptionId Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @return {any} Cache deleted.
		 */
		Caches_Delete(resourceGroupName: string, cacheName: string, api_version: string, subscriptionId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourcegroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.StorageCache/caches/' + (cacheName == null ? '' : encodeURIComponent(cacheName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Update a Cache instance.
		 * Patch subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.StorageCache/caches/{cacheName}
		 * @param {string} resourceGroupName Target resource group.
		 * @param {string} api_version Client API version.
		 * @param {string} subscriptionId Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} cacheName Name of Cache.
		 * @param {Cache} requestBody Object containing the user-selectable properties of the Cache. If read-only properties are included, they must match the existing values of those properties.
		 * @return {Cache} Updated the Cache.
		 */
		Caches_Update(resourceGroupName: string, api_version: string, subscriptionId: string, cacheName: string, requestBody: Cache): Observable<Cache> {
			return this.http.patch<Cache>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourcegroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.StorageCache/caches/' + (cacheName == null ? '' : encodeURIComponent(cacheName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Tells a Cache to write all dirty data to the Storage Target(s). During the flush, clients will see errors returned until the flush is complete.
		 * Post subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.StorageCache/caches/{cacheName}/flush
		 * @param {string} resourceGroupName Target resource group.
		 * @param {string} api_version Client API version.
		 * @param {string} subscriptionId Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} cacheName Name of Cache.
		 * @return {any} All cached data has been flushed to the Storage Target(s).
		 */
		Caches_Flush(resourceGroupName: string, api_version: string, subscriptionId: string, cacheName: string): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourcegroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.StorageCache/caches/' + (cacheName == null ? '' : encodeURIComponent(cacheName)) + '/flush&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Tells a Stopped state Cache to transition to Active state.
		 * Post subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.StorageCache/caches/{cacheName}/start
		 * @param {string} resourceGroupName Target resource group.
		 * @param {string} api_version Client API version.
		 * @param {string} subscriptionId Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} cacheName Name of Cache.
		 * @return {any} Cache is Active.
		 */
		Caches_Start(resourceGroupName: string, api_version: string, subscriptionId: string, cacheName: string): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourcegroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.StorageCache/caches/' + (cacheName == null ? '' : encodeURIComponent(cacheName)) + '/start&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Tells an Active Cache to transition to Stopped state.
		 * Post subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.StorageCache/caches/{cacheName}/stop
		 * @param {string} resourceGroupName Target resource group.
		 * @param {string} api_version Client API version.
		 * @param {string} subscriptionId Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} cacheName Name of Cache.
		 * @return {any} Cache is stopped.
		 */
		Caches_Stop(resourceGroupName: string, api_version: string, subscriptionId: string, cacheName: string): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourcegroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.StorageCache/caches/' + (cacheName == null ? '' : encodeURIComponent(cacheName)) + '/stop&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns a list of Storage Targets for the specified Cache.
		 * Get subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.StorageCache/caches/{cacheName}/storageTargets
		 * @param {string} resourceGroupName Target resource group.
		 * @param {string} api_version Client API version.
		 * @param {string} subscriptionId Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} cacheName Name of Cache.
		 * @return {StorageTargetsResult} Returns the list of Storage Targets defined by cacheName.
		 */
		StorageTargets_ListByCache(resourceGroupName: string, api_version: string, subscriptionId: string, cacheName: string): Observable<StorageTargetsResult> {
			return this.http.get<StorageTargetsResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourcegroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.StorageCache/caches/' + (cacheName == null ? '' : encodeURIComponent(cacheName)) + '/storageTargets&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Returns a Storage Target from a Cache.
		 * Get subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.StorageCache/caches/{cacheName}/storageTargets/{storageTargetName}
		 * @param {string} resourceGroupName Target resource group.
		 * @param {string} api_version Client API version.
		 * @param {string} subscriptionId Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} cacheName Name of Cache.
		 * @param {string} storageTargetName Name of the Storage Target.
		 * @return {StorageTarget} Returns the Storage Target object corresponding to storageTargetName.
		 */
		StorageTargets_Get(resourceGroupName: string, api_version: string, subscriptionId: string, cacheName: string, storageTargetName: string): Observable<StorageTarget> {
			return this.http.get<StorageTarget>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourcegroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.StorageCache/caches/' + (cacheName == null ? '' : encodeURIComponent(cacheName)) + '/storageTargets/' + (storageTargetName == null ? '' : encodeURIComponent(storageTargetName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Create or update a Storage Target. This operation is allowed at any time, but if the Cache is down or unhealthy, the actual creation/modification of the Storage Target may be delayed until the Cache is healthy again.
		 * Put subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.StorageCache/caches/{cacheName}/storageTargets/{storageTargetName}
		 * @param {string} resourceGroupName Target resource group.
		 * @param {string} api_version Client API version.
		 * @param {string} subscriptionId Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} cacheName Name of Cache.
		 * @param {string} storageTargetName Name of the Storage Target.
		 * @param {StorageTarget} requestBody Object containing the definition of a Storage Target.
		 * @return {StorageTarget} Storage Target has been created or updated.
		 */
		StorageTargets_CreateOrUpdate(resourceGroupName: string, api_version: string, subscriptionId: string, cacheName: string, storageTargetName: string, requestBody: StorageTarget): Observable<StorageTarget> {
			return this.http.put<StorageTarget>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourcegroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.StorageCache/caches/' + (cacheName == null ? '' : encodeURIComponent(cacheName)) + '/storageTargets/' + (storageTargetName == null ? '' : encodeURIComponent(storageTargetName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Removes a Storage Target from a Cache. This operation is allowed at any time, but if the Cache is down or unhealthy, the actual removal of the Storage Target may be delayed until the Cache is healthy again. Note that if the Cache has data to flush to the Storage Target, the data will be flushed before the Storage Target will be deleted.
		 * Delete subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.StorageCache/caches/{cacheName}/storageTargets/{storageTargetName}
		 * @param {string} resourceGroupName Target resource group.
		 * @param {string} api_version Client API version.
		 * @param {string} subscriptionId Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} cacheName Name of Cache.
		 * @param {string} storageTargetName Name of Storage Target.
		 * @return {any} Storage target deleted.
		 */
		StorageTargets_Delete(resourceGroupName: string, api_version: string, subscriptionId: string, cacheName: string, storageTargetName: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourcegroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.StorageCache/caches/' + (cacheName == null ? '' : encodeURIComponent(cacheName)) + '/storageTargets/' + (storageTargetName == null ? '' : encodeURIComponent(storageTargetName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Upgrade a Cache's firmware if a new version is available. Otherwise, this operation has no effect.
		 * Post subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.StorageCache/caches/{cacheName}/upgrade
		 * @param {string} resourceGroupName Target resource group.
		 * @param {string} api_version Client API version.
		 * @param {string} subscriptionId Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} cacheName Name of Cache.
		 * @return {void} 
		 */
		Caches_UpgradeFirmware(resourceGroupName: string, api_version: string, subscriptionId: string, cacheName: string): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourcegroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.StorageCache/caches/' + (cacheName == null ? '' : encodeURIComponent(cacheName)) + '/upgrade&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), null, { observe: 'response', responseType: 'text' });
		}
	}

}

